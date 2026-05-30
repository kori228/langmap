# Multi-Reading Normalization Across All Codes in hanmap_data.js

**Date:** 2026-05-30
**Author:** brainstorming session (Jounlai Cho + Claude)
**Status:** approved by user — ready for implementation plan

## Problem

Across `hanmap_data.js` (60 Han characters × ~101 codes = ~6 060 entries), entries where a single (char, code) pair has multiple legitimate readings are stored inconsistently:

1. Some are correctly split into `HAN_DATA[ch].surface[code]` (primary) + `HAN_VARIANTS[ch][code]` (alternatives with labels).
2. Some have both readings crammed into the primary surface field as `"haeng / hang"` or `"zhōng zhòng"`.
3. Some have only one reading registered, ignoring documented polyphony or 文白異讀.
4. Renderer paths now diverge based on which shape happens to be present, which makes the compare/info/marker UIs subtly inconsistent.

Two distinct phenomena are conflated:
- **Semantic polyphony** (e.g. 行 = 行為 xíng / 行列 háng) — the two readings track two different morphemes and cross-language comparison only makes sense between the SAME morpheme.
- **Within-sense polyphony** (e.g. 行 行為 = ja 漢音 kō / 呉音 gyō; 食 nan = 文 si̍p / 白 tsia̍h) — the readings are the SAME morpheme realised through different historical or stylistic layers.

These need orthogonal handling: semantic polyphony lifts to **separate HAN_LIST entries**; within-sense polyphony stays in `HAN_VARIANTS`.

## Canonical storage shape

### Semantic polyphony — compound HAN_LIST IDs

For each character with documented semantic polyphony across multiple languages, replace the single HAN_LIST entry with compound-ID entries:

```
HAN_LIST: ... 北, 行:1, 行:2, ... 中:1, 中:2, ...  (was: ... 北, 行, ...中, ...)
HAN_DATA["行:1"] = { sense: "行為", senseLabel: { ja, en, ko, zh, ... }, surface: {...}, ipa: {...}, native: {...} }
HAN_DATA["行:2"] = { sense: "行列", senseLabel: { ja, en, ko, zh, ... }, surface: {...}, ipa: {...}, native: {...} }
```

The `:` separator splits "<char>:<sense-index>". Renderer parses the prefix to derive the visual character (`行`) and the suffix as the sense disambiguator (rendered as a superscript badge or in-parens label).

Scope (approved): split only **行** and **中**. Sense definitions:
- 行:1 = "行為" (movement / behaviour sense)
- 行:2 = "行列" (column / line sense)
- 中:1 = "中央" (middle / centre sense)
- 中:2 = "命中" (hit / strike sense)

Other candidates (上 shàng/shǎng, 見 jiàn/xiàn) are NOT in scope — out of scope.

### Within-sense polyphony — HAN_VARIANTS (unchanged shape)

When a single (compound-ID, code) pair has multiple readings due to historical layer (Japanese 漢音/呉音/唐音), literary-vernacular split (文讀/白讀), or rule application (Korean 두음법칙):

```
HAN_DATA[id].surface[code] = null  (or undefined / absent key)
HAN_DATA[id].ipa[code]     = null
HAN_DATA[id].native[code]  = null

HAN_VARIANTS[id][code] = [
  { surface, ipa, native, label },
  { surface, ipa, native, label },
  ...
]
```

When only 1 reading exists for the (id, code) pair: primary populated, no `HAN_VARIANTS` entry.

## Label conventions per linguistic tradition

For `HAN_VARIANTS[id][code]` entries, the `label` field uses:

| Family / codes | Label format |
|---|---|
| Mandarin 多音字 within-sense (rare after sense-split) | `"<pinyin>"` — kept only if a single sense has multiple pinyin |
| Cantonese 多音字 within-sense (rare) | `"<Jyutping>"` |
| Min Nan 文白異讀 (nan, nan_*, cdo, mnp, cpx) | `"文讀"` / `"白讀"` |
| Hakka 文白 (hak_*) | `"文讀"` / `"白讀"` |
| Wu 文白 (wuu, wuu_*) | `"文讀"` / `"白讀"` |
| Other Sinitic (cjy, gan, hsn, cnp, czh) | `"文讀"` / `"白讀"` |
| Japanese (ja) | `"漢音"`, `"呉音"`, `"唐音"`, `"訓読み"` |
| Korean (ko, ko_kp, ko_zai, ko_bus, ko_hun) | semantic split now handled by HAN_LIST; remaining cases get descriptive labels |
| Vietnamese (vi, vi_c, vi_s, vi_nom, vi_han) | `"<Quốc Ngữ>"` |
| Non-Sinitic (mnc, sjo, txg, juc, zkt, za, bca, dng, bo_sino) | semantic — typically only one reading per char per code |

Most HAN_VARIANTS entries after this work will be Japanese 漢音/呉音/唐音 and Min Nan/Hakka/Wu 文白讀.

## UI changes (hanmap.html)

Renderer touch points for the compound-ID format:

1. **Char button** (`#char-current-btn`) — show "行 ¹" (character + superscript sense index) when ID contains `:`. The badge tooltip carries the full sense label.
2. **Char selector modal** — multi-sense chars render as a single tile that expands into 2 sub-tiles labelled with sense (e.g. "行為" / "行列").
3. **Map markers (`buildLabelHtml`, `hanmapShortLabel`)** — strip the `:N` suffix when computing display strings; the char itself (`行`) is what shows on map labels.
4. **URL hash** — `?w=行:1` instead of `?w=行`. `setChar` validates the full ID; existing `setChar` guard already returns early on unknown IDs.
5. **Compare table** — each compound ID becomes its own row, label "行 (行為)".
6. **lang_names.js** — no changes; lang-name strings are about codes, not chars.

i18n: each `HAN_DATA[id].senseLabel` is an object `{ ja, en, ko, zh, yue, vi, th, id, hi, de, fr, it, es, pt, ru, uk, ar, he, sw }` so the sense disambiguator can localise.

## Two-phase implementation

### Phase A — semantic sense-split (script + manual edit, fast)

1. **Extend HAN_LIST**: remove `"行"` and `"中"`; insert `"行:1"`, `"行:2"`, `"中:1"`, `"中:2"` at the same positions.
2. **Migrate HAN_DATA["行"]** → split into `HAN_DATA["行:1"]` (xíng-class readings) and `HAN_DATA["行:2"]` (háng-class readings) by referencing the existing HAN_VARIANTS data and authoritative dictionaries.
3. **Migrate HAN_DATA["中"]** → split into `HAN_DATA["中:1"]` (zhōng-class) and `HAN_DATA["中:2"]` (zhòng-class).
4. **Drop HAN_VARIANTS entries that become redundant** — e.g. the ko `行` haeng/hang variants are now redundant because `HAN_DATA["行:1"].surface.ko = "haeng"` and `HAN_DATA["行:2"].surface.ko = "hang"`.
5. **Add senseLabel i18n** for each compound entry.
6. **Add HAN_CATEGORIES mapping** so the char selector modal knows where the new compound IDs belong.
7. **Renderer edits** in hanmap.html: char button display, modal grouping, marker label strip, URL-hash handling.

Result of Phase A: 4 new HAN_LIST entries × 101 codes = ~400 readings populated. HAN_LIST grows 59 → 61.

### Phase B — within-sense polyphony fill (parallel agent fleet)

After Phase A is committed, dispatch 6 worktree-isolated agents:

| Worker | Code family scope |
|---|---|
| 1. zh fleet | zh and all 21 zh_* dialects + zh_yuan / zh_phagspa / zh_han / zh_song / zh_tang / zh_kanbun |
| 2. yue fleet | yue, yue_hk, yue_mo, yue_gz, yue_dg, yue_ts, yue_zs, yue_nn, yue_us |
| 3. Min Nan + Eastern Min + Pu-Xian | nan, nan_xm, nan_qz, nan_zz, nan_pn, nan_te, nan_hai, nan_th, nan_my, nan_sg, nan_id, nan_pera, cdo, mnp, cpx |
| 4. Hakka + Wu | hak_cn, hak_tw, hak_hl, hak_mz; wuu, wuu_hz, wuu_jx, wuu_jh, wuu_sz, wuu_nb, wuu_wz |
| 5. ko / ja / vi | ko, ko_kp, ko_zai, ko_bus, ko_hun, ko_mid; ja, ja_kun, ja_ojp, ja_kgs, ja_okn, ja_thk; vi, vi_c, vi_s, vi_nom, vi_han, vi_ohan |
| 6. Other Sinitic + non-Sinitic | cjy, gan, hsn, cnp, czh; mnc, sjo, txg, juc, zkt, za, bca, dng, bo_sino; all `p*` proto codes |

Each agent's brief:
- Read HAN_LIST (now 61 entries) and the codes it owns.
- For each (id, code) pair, look up the canonical dictionary:
  - Wiktionary as common source
  - 教育部臺灣閩南語常用詞辭典 for nan_tw
  - 客委會 / 廣州話正音字典 for hak / yue
  - Daijirin / 漢字源 for ja
  - Naver 한자사전 for ko
  - 漢喃辭典 for vi_nom
- If the dictionary documents 2+ readings for THIS sense → add them to `HAN_VARIANTS[id][code]` with labels per the table above; null the primary fields.
- If only one reading → leave primary populated.
- DO NOT invent variants. If the dictionary gives one, register one.

Estimated additions: 100–250 within-sense variants across all families (smaller than original spec since sense-split absorbs the big cross-sense cases).

### Phase C — structural cleanup (mechanical, last)

A small Node script over the final merged file:
1. Detect any primary surface still containing `/`, `,`, `;`, `／`, `、` → flag for manual review (should be zero by this point).
2. Detect any (id, code) where both primary surface and HAN_VARIANTS exist → null the primary.
3. De-duplicate identical HAN_VARIANTS entries.
4. Sort each `HAN_VARIANTS[id][code]` array by label (stable order).

## Execution rules

- Phase A is one commit on `develop` (does the sense-split + UI plumbing).
- Phase B: each agent works in its own worktree branched from `develop` AFTER Phase A lands. Each modifies only `hanmap_data.js`. Cherry-pick each agent's commit onto `develop` in fleet order. Conflicts on the same `HAN_VARIANTS[id]` block are resolved by union of code keys (each agent owns disjoint codes).
- Phase C is one final commit on `develop` (mechanical).
- Bump `hanmap_data.js?v=` once at the end of the sweep.
- Merge to `main` only when the user asks (per recent feedback).

## Verification

After all merges:

```js
const m = require('./hanmap_data.js');

// Invariant 1: no primary lingering when HAN_VARIANTS owns this (id, code)
for (const id of m.HAN_LIST) {
  for (const code of m.HAN_LANGS) {
    if (m.HAN_VARIANTS[id]?.[code]?.length > 0) {
      assert(!m.HAN_DATA[id].surface?.[code] && !m.HAN_DATA[id].ipa?.[code]);
    }
  }
}

// Invariant 2: HAN_LANGS unchanged, HAN_LIST grew by 2 (was 59 → now 61)
assert(m.HAN_LANGS.length === 101);
assert(m.HAN_LIST.length === 61);

// Invariant 3: compound IDs exist; bare 行 and 中 don't
assert(m.HAN_LIST.includes('行:1') && m.HAN_LIST.includes('行:2'));
assert(m.HAN_LIST.includes('中:1') && m.HAN_LIST.includes('中:2'));
assert(!m.HAN_LIST.includes('行'));
assert(!m.HAN_LIST.includes('中'));

// Invariant 4: every variant entry has a label
for (const id of Object.keys(m.HAN_VARIANTS)) {
  for (const code of Object.keys(m.HAN_VARIANTS[id])) {
    for (const v of m.HAN_VARIANTS[id][code]) {
      assert(typeof v.label === 'string' && v.label.length > 0);
    }
  }
}

// Invariant 5: every compound ID has a senseLabel.ja
for (const id of m.HAN_LIST) {
  if (id.includes(':')) {
    assert(typeof m.HAN_DATA[id].senseLabel?.ja === 'string');
  }
}
```

Manual eyeball pass:
- Open hanmap.html in a browser; verify char selector shows "行為" / "行列" as sibling tiles.
- Click each; verify map markers use the appropriate reading per code.
- Open compare modal with 行:1 and 行:2 both selected; verify they render as separate rows.

## Out of scope

- Adding sense-splits beyond 行 and 中.
- Adding 文白 entries for chars that don't have them in the cited dictionary.
- Importing every dictionary's full reading list (we keep to 2–4 most-cited per id).
- Touching `HAN_LANG_META`, `HAN_GROUPS`, or any code-registration data.
- Touching `hanmap_trivia.js` (trivia articles that reference 行 or 中 stand as-is for now; if they break links the cleanup happens in a follow-up).

## Follow-up (separate task)

User noted: after this normalisation is complete, add **台灣國語 (Taiwan Mandarin)** as a new code. That's a separate scope and gets its own brainstorm + plan.

---

## Completion notes (2026-05-31)

This spec landed via the plan at
`docs/superpowers/plans/2026-05-30-multi-reading-normalization.md`.
The implementation was executed in three phases (A → B fleet → C
cleanup) and committed to `develop` between 2026-05-30 and 2026-05-31.

Final state (verified on develop tip `1e1e8a1`):
- HAN_LIST = 61 (sense-split 行/中)
- HAN_LANGS = 102 (zh_tw / Taiwan Mandarin added per the follow-up note above, renamed 國語→華語 per user feedback)
- Phase B yielded 343 within-sense polyphony additions across 6
  parallel agents:
  - nan family 299, hak/wuu 19, ja/ko/vi 5, yue 4, zh 14, gan 2.
- Phase C invariant cleanup nulled 557 dirty primaries.
- All 5 spec invariants pass post-cleanup.

User-driven adjustments during execution (kept in the resulting code):
- 行:1 sense label 行進 → 行為 (broader semantic root).
- ko_zai 行:2 IPA haŋ → haɴ (Zainichi velar nasal realisation).
- zh_kanbun primary readings cleared — the code represents the
  sentence-level kanbun reading tradition, not per-character on-yomi.
- zh_yuan superscript tone digits → ASCII (the digits are tone
  CATEGORY 1=平/2=上/3=去/4=入, not pitch contour).
- ja HAN_VARIANTS purged of 訓読み entries (those live under ja_kun
  per the code-level taxonomy).
- bo_sino 中:2 cleared (Tibetan-Sino has no documented 命中 reading).
- Hakka audit: 11 PFS corrections (人/北 hak_cn 文白 + 十/食 hak_hl
  palatalisation, 行 hak_cn label-swap fix, 坐 IPA aspirate, etc.).

Separately landed on the same branch but outside this spec's scope:
- Sense tabs UI on the big char button (selector restricted to first
  sense; tabs are the only way to reach :2 readings).
- 字 nav badge for hanmap across all 4 site pages.
- d3-labeler-style simulated annealing for non-overlapping label
  placement, with deterministic seeded RNG and a stable hidden-set
  evaluated post-SA. Same algorithm ported to wordmap.
