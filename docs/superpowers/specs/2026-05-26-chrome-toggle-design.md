# Wordmap chrome-toggle (clean-view mode) — Design Spec

**Date:** 2026-05-26
**Status:** Approved (brainstorming) — pending implementation
**Trigger:** User request — single header button that hides/shows all map-chrome UI components so the map can be viewed clean (for screenshots, embedded display, kiosk-style use, etc.).

## Goal

Add a toggle button to the wordmap header that hides/shows a fixed set of map-chrome components in one click. State persists across page reloads via `localStorage`.

## Hidden components (toggle scope)

When the toggle is in OFF state (`body.chrome-hidden`), the following elements are hidden via `display: none`:

| # | Element | Selector | Notes |
|---|---|---|---|
| 1 | Word selector | `#word-select` | top-left dropdown for the 20-word concept |
| 2 | Era selector (modern / historical) + filter FAB | `#era-filter-row` | wraps both the era radio-switch AND the lang-filter FAB (the FAB is injected into this row at DOMContentLoaded by `lang-filter.js`) |
| 3 | Language search | `.lang-search-wrap` | parent of `#lang-search` input + `#lang-search-results` dropdown |
| 4 | Compare FAB | `#compare-fab` | bottom-right floating compare button |
| 5 | URL watermark credit | `.url-watermark` | bottom-left "Made by …" credit |
| 6 | Word definition caption (paired with the word selector) | `#word-definition` | small text below the word selector — paired UX with #word-select, hide together |

Note on item 6: the user's original list said "単語選択" — the word-definition caption is a tightly-coupled sibling of the word selector (always shown together, fades together). Hiding the selector without the caption leaves a stray caption. Bundling them is the right interpretation.

## Components explicitly KEPT visible

Per user direction:
- Trivia button (📚 Linguistic Trivia)
- 2D/3D toggle button
- Zoom +/- controls (Leaflet built-in)
- Tile attribution (`.leaflet-control-attribution`, "© CARTO / OSM")
- Hamburger menu button + entire `.site-header-bar`
- The chrome-toggle button itself (otherwise the user can't turn UI back on)
- The map itself, all markers, popups, info panel, compare panel, settings drawer, etc.

## UI placement

A new button `#chrome-toggle` lives inside `.site-header-bar`, placed as the **direct previous sibling of `.hamburger-btn`** in DOM order:

```
[logo] … [trivia-btn] [chrome-toggle] [hamburger-btn]
```

- **Mobile**: hamburger has `margin-left: auto`, so chrome-toggle sits visually just to its left.
- **PC**: hamburger is `display: none`, so chrome-toggle naturally becomes the rightmost visible header element.

## Icon

Inline SVG for both states (consistent rendering across platforms — emoji eye rendering is uneven across iOS / Android / Windows). 24×24 `viewBox`, outline style with `stroke="currentColor"`, `stroke-width="2"`, `stroke-linecap="round"`, `stroke-linejoin="round"` to match the header's existing icon style (cf. `nav-tree-label` SVG at wordmap.html:~1890).

- **ON state** (UI visible, default): standard eye icon (ellipse + pupil)
- **OFF state** (UI hidden): eye-with-slash icon (same eye + a diagonal stroke through it)

Both SVGs live in the button markup, switched via CSS:
```css
.chrome-toggle-btn .icon-on  { display: inline; }
.chrome-toggle-btn .icon-off { display: none;   }
body.chrome-hidden .chrome-toggle-btn .icon-on  { display: none;   }
body.chrome-hidden .chrome-toggle-btn .icon-off { display: inline; }
```

## Behavior

1. **Click**: toggle `body.chrome-hidden` class; persist to `localStorage['wm-chrome-hidden'] = '1' | '0'`; swap icon and `aria-label`.
2. **Page load (early)**: small inline script in `<head>` reads `localStorage['wm-chrome-hidden']`; if `'1'`, sets `body.chrome-hidden` BEFORE the rest of the page renders, so there's no flash of UI before it disappears (FOUC avoidance).
3. **State sync**:
   - `aria-label` updates: "Hide UI overlays" / "Show UI overlays"
   - `title` (tooltip) updates similarly
   - i18n: 19 UI languages get translations for both labels (added to the existing UI-string table in `app.js` or `lang_names.js`, wherever the rest of the chrome strings live)

## Data shape

### localStorage
- Key: `wm-chrome-hidden`
- Value: `'1'` when chrome is hidden, `'0'` (or absent) when visible
- No expiration

### DOM class
- Class on `<body>`: `chrome-hidden` (single class, no parameters)

## CSS rules (illustrative)

```css
body.chrome-hidden #word-select,
body.chrome-hidden #word-definition,
body.chrome-hidden #era-filter-row,
body.chrome-hidden .lang-search-wrap,
body.chrome-hidden #compare-fab,
body.chrome-hidden .url-watermark {
    display: none !important;
}

.chrome-toggle-btn {
    /* matches existing header icon-button conventions (~40×40, currentColor stroke) */
    /* exact dimensions to match neighboring buttons like .trivia-btn / .hamburger-btn */
}
```

`!important` is used to win against the existing `display: …` rules each component carries (e.g., `.compare-fab.visible { display: inline-flex; }`).

## i18n strings to add (19 UI langs)

Two strings:
- `chromeToggleHide` — e.g., EN "Hide UI overlays", JA "UI を隠す", KO "UI 숨기기"
- `chromeToggleShow` — e.g., EN "Show UI overlays", JA "UI を表示", KO "UI 표시"

The strings go into the inline UI-string map at `wordmap.html:~2726` (same block as `searchPlaceholder`, `triviaButton`, etc.), keyed by `chromeToggleHide` / `chromeToggleShow`. The `i18n()` helper at `wordmap.html:~2976` is used as elsewhere; in `applyUILang()` the button's `aria-label` / `title` are refreshed via `setAttribute` exactly like the existing nav labels.

## Out of scope

- URL query parameter (`?clean=1` style) — defer to a future iteration
- Per-component individual on/off — this is an all-or-nothing toggle
- Animation / fade transitions — instant toggle is fine
- Keyboard shortcut to toggle (e.g., `c` or `h`) — defer
- Programmatic API (e.g., postMessage from iframe parent) — defer

## Files to modify

1. `wordmap.html`
   - Inline `<head>` script: localStorage → body class (FOUC avoidance)
   - Button markup before `.hamburger-btn`
   - CSS rules for `body.chrome-hidden` + `.chrome-toggle-btn`
   - Click handler script
   - i18n integration (depending on existing pattern)
2. Cache-buster: bump `styles` and possibly `names` keys in `WM_ASSET_VERSION`
3. Possibly `app.js` or `lang_names.js` for i18n strings

## Validation

- `node validate_wordmap_data.js` must still PASS (only the pre-existing `bug.words.hello` baseline ERROR allowed)
- Manual browser check across 3 viewports:
  - Desktop (chrome-toggle at far right of header; all 6 components hide)
  - Mobile (chrome-toggle just left of hamburger; same hide behavior)
  - iOS Safari (verify localStorage works, no rendering glitches; iOS Safari has been a recurring trouble area per project memory)
- Reload after toggle: state persists
- All other UI continues to work (map pan/zoom, hamburger drawer opens, settings drawer opens, trivia modal, compare panel, info panel)

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| FOUC (UI flashes before hidden) | Inline `<head>` script reads localStorage and sets body class before paint |
| `#era-filter-row` contains the lang-filter FAB (dynamically injected) — does hiding the parent reliably hide the FAB? | Yes — the FAB is `appendChild`'d into `.era-filter-row` by lang-filter.js. Hiding the parent hides children. |
| Search dropdown is `position: absolute` anchored to `.lang-search-wrap` — does hiding the wrap also hide the dropdown? | Yes — children inherit hidden parent. But if a search is mid-typed when toggled OFF, the dropdown disappears (acceptable). |
| Existing `display: inline-flex` rules on `.compare-fab.visible` etc. may win the cascade | Use `!important` in the `body.chrome-hidden` rules |
| User toggles OFF, then opens the trivia/compare panel — those are KEPT visible — confusion? | Acceptable. Trivia/compare are explicitly kept (per user). They can be closed via their own close buttons. |
| `localStorage` write fails in private-browsing iOS Safari | Wrap in try/catch; toggle still works for the session, just doesn't persist |

## Success criteria

- One-click toggle hides all 6 listed components; second click restores them
- State persists across page reload
- No FOUC on reload with state = hidden
- Toggle button itself remains visible in both states
- All 19 UI languages have label translations
- Trivia / 2D-3D / Zoom / Tile attribution / hamburger menu / map remain fully functional with chrome hidden
- Validator PASSes (no new errors beyond the pre-existing baseline)
- iOS Safari behaves correctly (FOUC avoidance, localStorage persistence, no z-index / overflow regressions)
