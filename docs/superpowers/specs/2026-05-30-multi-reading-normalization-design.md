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

User goal: one canonical storage pattern for multi-reading data, applied uniformly across all language families (Mandarin, Cantonese, Min Nan, Hakka, Wu, Korean, Japanese, Vietnamese, other Sinitic, and non-Sinitic).

## Canonical storage shape

When a (char, code) pair has **2 or more** legitimate readings:

```
HAN_DATA[ch].surface[code] = null  (or undefined / absent key)
HAN_DATA[ch].ipa[code]     = null
HAN_DATA[ch].native[code]  = null

HAN_VARIANTS[ch][code] = [
  { surface, ipa, native, label },
  { surface, ipa, native, label },
  ...
]
```

When a (char, code) pair has **exactly 1** reading: keep the current shape (primary populated, no `HAN_VARIANTS` entry for this code).

Renderer (`hanmap.html`) already prefers `HAN_VARIANTS[ch][code]` when present, so dropping the primary on multi-reading codes eliminates a code path and removes the chance of "primary disagrees with variants" drift.

## Label conventions per linguistic tradition

| Family / codes | Label format on each variant |
|---|---|
| Mandarin 多音字 (zh, zh_*) | `"<pinyin>"` — e.g. `"zhōng"`, `"zhòng"` |
| Cantonese 多音字 (yue, yue_*) | `"<Jyutping>"` — e.g. `"hong4"`, `"hang4"` |
| Min Nan 文白異讀 (nan, nan_*, cdo, mnp, cpx) | `"文讀"` / `"白讀"` |
| Hakka 文白 (hak_*) | `"文讀"` / `"白讀"` |
| Wu 文白 (wuu, wuu_*) | `"文讀"` / `"白讀"` |
| Other Sinitic (cjy, gan, hsn, cnp, czh) | `"文讀"` / `"白讀"` — or semantic if 文白 isn't documented |
| Japanese (ja) | `"漢音"`, `"呉音"`, `"唐音"`, `"訓読み"` — **already established, no change** |
| Korean (ko, ko_kp, ko_zai, ko_bus, ko_hun) | semantic split where polyphony is semantic: `"行為 (行動)"`, `"行列 (줄·항렬)"`. 頭音法則 handled per-code (ko = rule applied, ko_kp = original) — **already established** |
| Vietnamese (vi, vi_c, vi_s, vi_nom, vi_han) | `"<Quốc Ngữ>"` — e.g. `"hành"`, `"hàng"`; rare |
| Non-Sinitic (mnc, sjo, txg, juc, zkt, za, bca, dng, bo_sino) | semantic — typically only one reading per char |

## Two-phase detection

### Phase A — structural normalisation (script-based, mechanical)

A Node script scans `HAN_DATA` and detects entries needing reshape, with **no linguistic judgement**:

1. Primary `surface[code]` contains `/`, `,`, `;`, `／`, or `、` — already two readings crammed into one string → split, build `HAN_VARIANTS`, null the primary.
2. Same for `ipa[code]`.
3. `HAN_VARIANTS[ch][code]` exists AND primary `surface[code]` is non-null → null the primary.
4. Identical duplicate entries in `HAN_VARIANTS[ch][code]` → de-duplicate.

Outputs a report listing every change made. No new variants invented.

### Phase B — active addition (linguistic, parallel agents in worktrees)

Six worktree-isolated agents, each owning one code family. Each agent's brief:
- Read `HAN_LIST` and the codes it owns.
- For each (char × code) pair, look up the canonical dictionary for that variety (Wiktionary as common source; 教育部臺灣閩南語常用詞辭典 / 客家語辭典 / 廣州話正音字典 for the relevant family; Daijirin for Japanese; Naver 한자사전 for Korean; Hồ Ngọc Cẩn Nôm dictionary for Vietnamese).
- If the dictionary documents 2 or more readings → add them all to `HAN_VARIANTS` with the family's label convention; null the primary.
- If only one reading → leave primary populated, do not invent.

Estimated added entries: 200–400 across all families.

### Agent fleet layout

| Worker | Code family scope |
|---|---|
| 1. zh fleet | zh, zh_db, zh_cd, zh_cq, zh_xa, zh_jn, zh_jiao, zh_kf, zh_km, zh_lz, zh_nj, zh_jh, zh_hf, zh_sc, zh_tj, zh_wh, zh_zz, zh_gl, zh_yuan, zh_kanbun, zh_th, zh_us, zh_han, zh_song, zh_tang, zh_phagspa |
| 2. yue fleet | yue, yue_hk, yue_mo, yue_gz, yue_dg, yue_ts, yue_zs, yue_nn, yue_us |
| 3. Min Nan + Eastern Min | nan, nan_xm, nan_qz, nan_zz, nan_pn, nan_te, nan_hai, nan_th, nan_my, nan_sg, nan_id, nan_pera, cdo, mnp, cpx |
| 4. Hakka + Wu | hak_cn, hak_tw, hak_hl, hak_mz; wuu, wuu_hz, wuu_jx, wuu_jh, wuu_sz, wuu_nb, wuu_wz |
| 5. ko / ja / vi | ko, ko_kp, ko_zai, ko_bus, ko_hun, ko_mid; ja, ja_kun, ja_ojp, ja_kgs, ja_okn, ja_thk; vi, vi_c, vi_s, vi_nom, vi_han, vi_ohan |
| 6. Other Sinitic + non-Sinitic | cjy, gan, hsn, cnp, czh; mnc, sjo, txg, juc, zkt, za, bca, dng, bo_sino; all `p*` proto codes (likely no-op since proto codes give one reconstructed reading per char) |

## Execution rules

- Each agent works in its own worktree branched from `develop`.
- Each agent modifies only `hanmap_data.js`.
- Each agent runs `node --check hanmap_data.js` before committing.
- Final assembly: cherry-pick each agent's commit onto `develop` in fleet order; resolve any `HAN_VARIANTS[ch]` merge conflicts by **union of code keys** (each agent owns disjoint codes, so conflicts should be merge-conflict-marker noise only, not semantic).
- Bump `hanmap_data.js?v=` after the full sweep.

## Verification

After all merges:

```js
// Invariant 1: no primary lingering when HAN_VARIANTS owns this (char, code)
for (const ch of HAN_LIST) {
  for (const code of HAN_LANGS) {
    if (HAN_VARIANTS[ch]?.[code]?.length > 0) {
      assert(!HAN_DATA[ch].surface?.[code] && !HAN_DATA[ch].ipa?.[code]);
    }
  }
}

// Invariant 2: HAN_LANGS / HAN_LIST size unchanged
assert(HAN_LANGS.length === 101);
assert(HAN_LIST.length === 59);

// Invariant 3: every variant entry has a label
for (const ch of Object.keys(HAN_VARIANTS)) {
  for (const code of Object.keys(HAN_VARIANTS[ch])) {
    for (const v of HAN_VARIANTS[ch][code]) {
      assert(typeof v.label === 'string' && v.label.length > 0);
    }
  }
}
```

Plus a manual eyeball pass: open hanmap.html in a browser, click a few known multi-reading chars (中, 行, 食, 人, 楽), confirm modal shows readings stacked with labels.

## Out of scope

- Adding 文白 for chars that don't have it (e.g., 一, 二 — they're stable single-reading even in Min Nan).
- Importing every dictionary's full reading list (we keep to 2–4 most-cited per char).
- Touching `HAN_LANG_META`, `HAN_CATEGORIES`, `HAN_GROUPS`, or any code-registration data.
- Touching `hanmap_trivia.js` or `hanmap.html` — renderer already handles the shape.

## Follow-up (separate task)

User noted: after this normalisation is complete, add **台灣國語 (Taiwan Mandarin)** as a new code. That's a separate scope and gets its own brainstorm + plan.
