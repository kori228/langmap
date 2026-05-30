# Simulated-Annealing Label Placement for hanmap + wordmap

**Date:** 2026-05-31
**Author:** retrospective notes (Jounlai Cho + Claude)
**Status:** shipped to develop

## Problem

The 2D map renderers in `hanmap.html` and `wordmap.html` placed each
language label at its raw `latLngToContainerPoint(...)` projection.
A greedy cell-bucketing collision pass (`cellGroups` + `_findFreeY`)
resolved most overlap, but residual cases remained where labels whose
horizontal extents straddled a cell boundary still collided. The
greedy pass was also viewport-dependent (it bucketed by
`floor(px / labelW)`), so the user observed labels jumping around or
appearing/disappearing on every pan even when nothing nearby had
changed.

## Goals

1. Eliminate residual label overlap that the greedy pass couldn't
   reach.
2. Make the final layout **deterministic** — identical inputs (current
   word, zoom level, code set) must produce identical pixel offsets,
   so the same label never sits in two different spots across page
   loads or browser tabs.
3. Make panning a **no-op** for the layout — labels move rigidly with
   the map (via Leaflet's native pan), with zero recomputation.

## Solution

A small inline simulated-annealing solver, run after the greedy pass
as a refinement. Implementation is ~190 lines of JS per file, no new
runtime dependencies.

### Algorithm

```
T = 1.0
for sweep in 1..30:
    for each label l (in fixed order):
        Eold = localEnergy(l)
        propose dx, dy ∈ [-T·labelH, +T·labelH] (seeded uniform)
        Enew = localEnergy(l with dx, dy applied)
        ΔE = Enew - Eold
        if ΔE ≤ 0 or random() < exp(-ΔE / T):
            accept
        else:
            revert
    T *= 0.96
```

Energy per label = sum of overlap area with every other label + α ·
distance from anchor, where α = 0.05 (small, so overlap resolution
dominates and labels stay near their true geographic position).

Sweep count auto-degrades for very dense maps:
- ≤ 120 labels → 30 sweeps
- 121–180 → 20 sweeps
- > 180 → 15 sweeps

This keeps the cache-miss path under ~25 ms even on 200-label dense
clusters.

### Determinism

The SA solver replaces `Math.random()` with a mulberry32 PRNG seeded
by `hash(cacheKey)` where `cacheKey = "<word>|<zoom>|<sortedCodes>"`.
Identical input → identical RNG sequence → identical SA decisions →
identical pixel offsets. This was the single most important fix —
without it, every page load gave a slightly different layout.

### Cache

`Map<cacheKey, Map<code, {x,y}>>` with LRU cap 64. Keyed on
`(currentWord, zoom, sortedCodes)`. Pan-induced `updateMarkers`
re-renders hit the cache and return in ~0 ms. Zoom and word changes
invalidate by virtue of the key change. A console hook
(`window._hmClearLabelOffsetCache()` / `window._wmClearLabelOffsetCache()`)
is exposed for manual flushes during dev.

### Pan invariance — the four gotchas that bit us

The cache concept was straightforward; getting `cacheKey` to be
actually pan-invariant took four passes:

1. **`_saCodes` originally filtered through the viewport.** It was
   built from `allRenderable` = `renderLangs + unattestedLangs`, and
   `renderLangs` came from `selectByPriority(inViewport, …)` which
   strips codes whose container-pixel position falls outside the
   viewport + 200 px margin. Panning changed `inViewport` → changed
   `renderLangs` → changed `_saCodes` → changed `cacheKey`. Fix:
   source `_saCodes` from `visibleLangs + unattestedLangs` (the
   pre-thinning set), filtered only by `filterActive/isActive` and
   `ppx[code]` truthy.

2. **`_saCodes` filtered out `hiddenCodes`.** `hiddenCodes` was
   populated by the greedy pass using viewport-dependent
   `cellGroups`. A label crossing a cell boundary flipped membership,
   moving the code in and out of `_saCodes`, changing `cacheKey`.
   Fix: drop the `hiddenCodes` filter from `_saCodes` entirely. SA
   covers every visible code; non-rendered codes still get an offset
   that's just unused at render time.

3. **`Math.random()` made every page load different.** Within a
   session, the cache held the first computed layout. But two
   browser tabs (or a hard refresh) ran SA from a fresh JS heap with
   a fresh random sequence, producing slightly different offsets.
   Fix: seeded PRNG (see Determinism above).

4. **`hiddenCodes` itself was viewport-dependent.** Even after
   `_saCodes` was stabilised, the *render-time* `hiddenCodes` was
   still populated by the greedy pass — so the SAME label appeared
   at URL A but was hidden at URL B (when greedy's
   `floor(px / labelW)` placed it in a cell with no free `findFreeY`
   slot). The user reported labels "appearing and disappearing on
   every pan". Fix: after SA writes back the final offsets, wipe
   `hiddenCodes` and rebuild it from the offset magnitudes:
   `Math.abs(dx) + Math.abs(dy) > MAX_PUSH * 2.2` → hidden. Since
   SA offsets are deterministic given `(word, zoom, codes)`,
   `hiddenCodes` is now stable across pans.

## Where the code lives

In both files the helpers and driver are inserted immediately before
`function updateMarkers(...)`:

| hanmap symbol | wordmap symbol | role |
|---|---|---|
| `_hmOverlapArea` | `_wmOverlapArea` | AABB overlap area |
| `_hmEnergy` | `_wmEnergy` | total energy (for testing) |
| `_hmLocalEnergy` | `_wmLocalEnergy` | per-label energy used by SA |
| `_hmMakeRng` | `_wmMakeRng` | mulberry32 PRNG factory |
| `_hmHashStr` | `_wmHashStr` | djb2 string hash → 32-bit seed |
| `_hmAnnealLabels` | `_wmAnnealLabels` | SA solver |
| `_hmLabelOffsetCache` | `_wmLabelOffsetCache` | LRU cap 64 |
| `_hmOffsetCacheKey` | `_wmOffsetCacheKey` | key builder |
| `_hmRefineOffsetsSA` | `_wmRefineOffsetsSA` | driver: cache lookup → SA → writeback |

SA wire-up inside `updateMarkers` sits after the greedy
`_collisionOrder` loop and before the render loop. The render loop
already consumed `offsets[code]` directly, so SA "just works" by
overwriting the offset values before render.

## Out of scope

- 3D globe (`updateGlobeLabels`) — uses degree-based layout, not
  pixel-based. Untouched.
- Anchor lines from origin to displaced label — user explicitly said
  no during the brainstorm.
- ILP-based strict-non-overlap guarantees — 30-sweep SA at
  α = 0.05 left visible residual overlap on synthetic dense clusters
  in the ≤ 5 % range; that's "good enough" per user.

## Commits (develop branch)

- `9f4e424` initial SA implementation in hanmap
- `2c7d958` `_saCodes` from full `visibleLangs` (gotcha 1)
- `7fd0d24` seeded PRNG (gotcha 3)
- `9d8be07` drop `hiddenCodes` filter from `_saCodes` (gotcha 2)
- `1e1e8a1` post-SA `hiddenCodes` rebuild (gotcha 4)
- `45fc751` port to wordmap
