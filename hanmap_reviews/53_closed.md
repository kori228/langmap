# Hanmap data review #53 — Schema validation round 2: missing keys / null / empty string / cross-field consistency

## Reviewer self-introduction (自己紹介)

Schema / data-quality reviewer specializing in mixed-script lexical datasets. This round is a **structural sweep**, not a phonological audit. Scope: every `(char, lang, field)` tuple in `HAN_DATA` and `HAN_VARIANTS` of `/home/jounlai/langmap/hanmap_data.js` — 61 keys (59 Han + 2 split senses `中:1/2`, `行:1/2`) × 102 langs × 3 fields (`surface`, `ipa`, `native`), plus 622 variant rows. The dataset was loaded via `vm.runInContext`, and every cell was inspected programmatically; numeric counts in this report come from the actual scan. Cross-references to earlier rounds (#20, #34, #38, #39) provided the seed set; this audit generalizes from each seed to its full pattern.

The follow-up to round #20 (which sampled five spot-bugs) extracts the **canonical missing-value convention** the rest of the file should converge on. Today there is no single convention: `null`, `""`, `"—"`, and "key absent" are all used, sometimes for the same lang in the same field. That ambiguity is what bit #34/#38/#39: a UI reader hitting `null` or `""` cannot tell whether the cell is "unknown", "not applicable", "intentionally blank because parent script == Han", or "data-entry skipped".

I cross-checked the application code in `/home/jounlai/langmap/hanmap.html` only to understand which sentinel the renderer treats as "show as blank" vs. "show as —" vs. "skip the row entirely" — that informs which sentinel is *safe* to leave in the data vs. which is a bug. Findings below are ordered roughly **most-impactful → most-pedantic**.

**Scan totals (informational):**
- 17 cells where value is `null` (all in `surface` or `ipa`)
- 18 cells where value is `""` in `surface` or `ipa` (native `""` is conventional)
- 221 cells where value is `"—"`
- 674 cells where `surface === ipa` (placeholder diagnostic — many are legitimate)
- 425 cells where `surface` starts with `*` (proto-language asterisk leaking into the surface field)
- 26 cells where `surface` is filled but `ipa` is missing/null/empty
- 6 cells where `ipa` is filled but `surface` is missing/null/empty
- 63 `HAN_VARIANTS` rows with internal schema problems
- 483 `HAN_VARIANTS` rows that do not have a corresponding base `HAN_DATA` cell for the same `(char, lang)`

---

## Issues found

### 1. Four sentinels coexist for "missing" — pick one. Recommend `"—"` as the canonical sentinel.

Across `HAN_DATA[ch][field][lang]` the maintainers have used **four** different representations to mean "no value":
- **`null`** — 17 occurrences. Examples: `上.surface.zh_kanbun = null`, `行:1.surface.yue_gz = null`, `行:1.ipa.yue_gz = null`.
- **`""` (empty string)** — 18 occurrences in `surface`/`ipa`. Examples: `水.surface.vi_ohan = ""`, `央.surface.vi_nom = ""`, `北.ipa.vi_nom = ""`, `飲.surface.vi_ohan = ""`.
- **`"—"` (em-dash sentinel)** — 221 occurrences. Examples: `一.native.juc = "—"`, `木.surface.zkt = "—"` (zkt is fully `"—"` across surface/ipa/native for 木/土/地).
- **Key entirely absent** — the most common case (thousands of cells); e.g. `一.ipa.nan` simply has no `nan` key.

These are not interchangeable for the renderer in `hanmap.html`, and a reader cannot deduce intent. **Recommendation**: pick **`"—"`** as the canonical sentinel (it is the most-used and is human-visible in a debugger), use `""` *only* as a marker for "this is a Han-script lang and `native` == the parent char", and treat both `null` and "key absent" as schema errors to be fixed. Each remaining item in this report assumes that convention.

---

### 2. `zh_kanbun` is uniformly `null` for 9 chars — should be "key absent" or `"—"`

`zh_kanbun` ("kanbun" reading of Chinese characters used in Japanese classical-Chinese reading tradition) appears as a `null` value in:
- `上.surface`, `上.ipa`, `下.surface`, `下.ipa`, `右.surface`, `右.ipa`, `西.surface`, `西.ipa`, `行:1.surface`, `聞.surface`, `聞.ipa`, `食.surface`, `食.ipa`, `立.surface`, `立.ipa`.

`null` here trips the partial-triple checks downstream — a `JSON.stringify` of the entry will write `"zh_kanbun": null` rather than omitting the key. **Either** populate the actual kanbun reading (`上 = "ジョウ"`, `下 = "カ/ゲ"`, `西 = "セイ"`, etc., all standard) **or** delete the keys so that `'zh_kanbun' in obj === false`. The current state is the worst of both options: it pollutes the schema without conveying data.

Note: `zh_kanbun` has **zero non-null surface coverage** anywhere in the file (0/61). If the lang is intended to be supported, every char should be filled; if not, drop `zh_kanbun` from `HAN_LANGS` (line 18990) and from these scattered null entries.

---

### 3. `行:1 yue_gz` is `null/null` while the **variant** row carries the real data — UI inconsistency risk

```
HAN_DATA["行:1"].surface.yue_gz = null
HAN_DATA["行:1"].ipa.yue_gz     = null
HAN_VARIANTS["行:1"].yue_gz     = [
  { surface: "hang4", ipa: "hɐŋ²¹", label: "文讀" },
  { surface: "haang4", ipa: "haːŋ²¹", label: "白讀" },
]
```

For all sister yue dialects (`yue_hk`, `yue_mo`, `yue_dg`, `yue_nn`, `yue_zs`), `HAN_DATA["行:1"]` carries `surface` and `ipa` *and* the variant array repeats them — the base entry is the "default reading" the UI shows when variants are collapsed. For `yue_gz` alone, the base is `null` — so the UI may show "yue_gz: —" while the variant popover shows two valid readings. Lift the 文讀 reading (`"hang4"` / `"hɐŋ²¹"`) into the base, matching what was done for `yue_hk`.

---

### 4. `vi_ohan` uses `""` instead of `"—"` — convention drift from the rest of the file

Eight cells use `""` for `vi_ohan`:
- `水.surface.vi_ohan = ""`, `水.ipa.vi_ohan = ""`
- `天.surface.vi_ohan = ""`, `天.ipa.vi_ohan = ""`
- `人.surface.vi_ohan = ""`, `人.ipa.vi_ohan = ""`
- `飲.surface.vi_ohan = ""`, `飲.ipa.vi_ohan = ""`

But elsewhere `vi_ohan` either has real data (`月.surface.vi_ohan = "trăng / giăng"`, `龍.surface.vi_ohan = "rồng"`, `馬.surface.vi_ohan = "ngựa"`, `牛.surface.vi_ohan = "bò"`, `貓.surface.vi_ohan = "mèo"`, `頭.surface.vi_ohan = "đầu"`) or the key is absent entirely. Convert the eight `""` cells to `"—"` (or fill them: 水 = `nước` (Old-Han borrowing `thủy`), 天 = `trời` / `thiên`, 人 = `người` / `nhân`, 飲 = `uống` / `ẩm` — these are all attested in the chữ Hán-Nôm corpus, so they should not be blank at all). **Total `vi_ohan` coverage is only 6/61 chars** — the lowest of any in-use lang. If the intent is "only show vi_ohan when it differs from vi", document that and drop the `""` placeholders.

---

### 5. `vi_nom` empty strings for cardinal direction characters

```
HAN_DATA["央"].surface.vi_nom = ""    HAN_DATA["央"].ipa.vi_nom = ""
HAN_DATA["東"].surface.vi_nom = ""    HAN_DATA["東"].ipa.vi_nom = ""
HAN_DATA["西"].surface.vi_nom = ""    HAN_DATA["西"].ipa.vi_nom = ""
HAN_DATA["南"].surface.vi_nom = ""    HAN_DATA["南"].ipa.vi_nom = ""
HAN_DATA["北"].surface.vi_nom = ""    HAN_DATA["北"].ipa.vi_nom = ""
```

All five cardinal-direction characters share the same `""/""` pattern. These are **not** missing data — Vietnamese has native chữ Nôm words for all five (`giữa`/`trong` for 央, `đông`/`đằng đông` for 東, `tây` for 西, `nam` for 南, `bắc` for 北), and the Chinese cognates are widely used (`đông tây nam bắc`). Either fill or change to `"—"`. Also flagged in #34 (the original was for `行:2 vi_nom`, since fixed); this is the same class of bug for a different char family.

---

### 6. `貓.zh_phagspa` has `native` filled but `surface` and `ipa` empty (matches #38)

```
HAN_DATA["貓"].native.zh_phagspa  = "ꡏꡠꡓ"
HAN_DATA["貓"].surface.zh_phagspa = (key absent)
HAN_DATA["貓"].ipa.zh_phagspa     = (key absent)
```

This is the only cell in the entire file where `native` is present alone with no surface/ipa peer. Every other `zh_phagspa` row has all three: e.g. `一.zh_phagspa` is `surface: "ʔi"`, `ipa: "ʔi"`, `native: "ꡗꡞ"`. The expected romanization for `ꡏꡠꡓ` is `mew` and the IPA `mɛw` (Coblin 2007). Fill them.

---

### 7. 26 cells where `surface` exists but `ipa` is missing — Hokkien-cluster cardinal-number rows are the worst

```
HAN_DATA["一"].surface.{nan, nan_qz, nan_xm, nan_zz, nan_sg, nan_my, nan_id, nan_pera, nan_th, nan_pn}
  exist, but HAN_DATA["一"].ipa.{same} all absent.
HAN_DATA["二"].surface.{same 10 langs} exist, ipa absent.
HAN_DATA["三"].surface.nan exists ("sam"), ipa.nan absent.  (Also cpx.)
HAN_DATA["六"].surface.nan exists ("lio̍k"), ipa.nan absent.
HAN_DATA["中:2"].surface.{ja_kun, ko_hun} = {"ataru", "majeul"}, ipa absent for both.
HAN_DATA["行:2"].surface.ja_kun = "okonau", ipa absent.
```

For 一 and 二, only `nan_te` and `nan_hai` happen to have `ipa` filled; the other 10 Hokkien varieties have `surface` only. This is a systematic gap. The IPA for `一` in Quanzhou/Xiamen/Zhangzhou Hokkien is `it̚˧˨` (or `it̚⁵` in numeric-tone notation), and the scan shows the variant rows in `HAN_VARIANTS["六"].nan[*]` do have correct IPAs (`lak̚˦`, `liɔk̚˦`) — so the base `HAN_DATA["六"].ipa.nan` should be `lak̚˦` (the 白讀 default) rather than absent. Same fix pattern applies to all 26 cells.

---

### 8. 6 cells where `ipa` exists but `surface` is missing — `cpx` is the systematic offender

```
HAN_DATA["五"].ipa.cpx = "ŋou²⁴", surface.cpx absent
HAN_DATA["六"].ipa.cpx = "lœ̍ʔ",  surface.cpx absent
HAN_DATA["八"].ipa.cpx = "pœyʔ⁵", surface.cpx absent
HAN_DATA["九"].ipa.cpx = "kau³¹", surface.cpx absent
HAN_DATA["十"].ipa.cpx = "tsɛʔ⁵", surface.cpx absent
HAN_DATA["六"].ipa.mnp = "lu²⁴",  surface.mnp absent
```

The Pu-Xian (cpx) BUC romanizations for these numbers exist (5 = `ngou`, 6 = `lóq`, 8 = `boih`, 9 = `gáu`, 10 = `cĭk`). The mirror-image of finding #7: `surface` and `ipa` should be a paired set. Fill the missing surfaces.

---

### 9. `zkt` (Khitan Small Script) uses inconsistent missing-marker — sometimes `"—"`, sometimes real data, sometimes nothing

`zkt` appears with `"—"` as a value in 144 cells (counted via `grep -c '"zkt": "—"'`). For most characters this is reasonable (the word is unknown in Khitan Small Script). But:
- For 木, 土, 地 the lang has `"—"` in **all three** fields (`surface`, `ipa`, `native`) — i.e. zkt contributes nothing at all for these chars, so the keys should be absent rather than triple-dashed.
- For 一 zkt has `surface: "om"`, `ipa: "əm"`, `native: "𘬺"` — all distinct, schema-clean.
- For 二 zkt has `surface: "jur"`, `ipa: "dʒur"`, but `native: "—"` — meaning "we know the word but not the glyph".

Three distinct semantic states ("word and glyph known", "word known, glyph unknown", "word unknown") are all collapsed to `"—"`. Either:
- (a) drop the cell entirely when nothing is known (木, 土, 地), or
- (b) introduce two sentinels (e.g. `"—"` for "word unknown", `""` for "glyph unknown but word known").

The current `surface`-only coverage of zkt is 18/61, the third-worst after `ja`/`zh_kanbun` and `vi_ohan`.

---

### 10. `ja` (modern Japanese) has 0/61 in `HAN_DATA` — all readings live in `HAN_VARIANTS` — undocumented convention

`HAN_DATA[ch].surface.ja` is **never** populated for any char (0/61). Every Japanese reading lives in `HAN_VARIANTS[ch].ja` instead, with on/kun split (e.g. `馬.ja = [{surface:"ba", ipa:"ba", label:"漢音"}, {surface:"me", ipa:"me", label:"訓"}]`). This is a deliberate design ("ja is always a multi-reading lang, use the variants table") but it is undocumented and creates a structural asymmetry: `ja_kgs`, `ja_okn`, `ja_thk`, `ja_kun`, `ja_ojp` all populate `HAN_DATA` *and* sometimes appear in variants. A future maintainer reading the schema for the first time will assume `ja`'s base entry is "missing" and try to fill it. Document the convention in a comment at the top of `HAN_DATA` or, better, move the on-reading (`漢音`) up into `HAN_DATA[ch].surface.ja` as the default and keep the second/third variants in `HAN_VARIANTS`.

---

### 11. 483 `HAN_VARIANTS` rows have no corresponding `HAN_DATA` surface/ipa entry — semantics unclear

Whenever `HAN_VARIANTS[ch][lang]` exists but `HAN_DATA[ch].surface[lang]` is absent, the variants table is the **sole** source of pronunciation for that cell. Examples:
- `龍.nan` — variants exist (the 白/文 split), no base entry.
- `立.ja`, `立.nan_my`, `立.nan_xm`, `立.nan_qz`, `立.nan_zz`, `立.nan_pn`, `立.nan_sg`, `立.nan_pera` — all variant-only.
- `六.nan_qz, nan_xm, nan_zz, ja, nan_pn, nan_th, nan_my, nan_sg, nan_id, nan_pera` — all variant-only.

This is 483 rows. For some langs (notably `ja`) this is the documented design (#10). For others (the `nan_*` cluster) it seems inadvertent: the variant table was populated for 文白異讀 splits but the maintainer forgot to also write the "default" reading into `HAN_DATA`. The UI fallback path is fragile — verify in `hanmap.html` whether an absent base + present variant table is rendered correctly (round #11/#34 found cases where it was not). Recommended fix: for every variant array, promote `variants[0]` (or the variant labelled "文讀" / "default" / etc.) into `HAN_DATA[ch].surface[lang]` and `.ipa[lang]`.

---

### 12. `surface === ipa` for entire proto-language column families (zh_han, pko, pja, pst, paa, ptb, pmgl, ptai, ptung, phm)

Top 10 langs by `surface === ipa` count:

| lang | surface=ipa | total chars covered |
|------|-------------|---------------------|
| zh_han | 61 | 61 (every char) |
| zkt | 50 | 18 |
| pja | 47 | ~58 |
| zh_phagspa | 40 | ~60 |
| ja_ojp | 36 | 60 |
| pko | 35 | ~58 |
| paa | 28 | ~50 |
| ptung | 24 | ~50 |
| ko_kp | 22 | 61 |
| juc | 21 | ~57 |

For proto-languages (zh_han, pko, pja, pst, paa, ptb, pmgl, ptai, ptung, phm) the convention "surface == reconstruction == IPA" is defensible — there is no "modern romanization", the asterisked reconstruction IS the only form. But that should be documented; and the IPA *field* could legitimately drop the leading `*` (since the asterisk denotes reconstructedness, not a phoneme). Right now both fields are bit-identical including the `*`.

For non-proto langs in the list (`ja_ojp`, `ko_kp`, `ko_zai`, `ko`, `juc`, `mnc`, `sjo`, `zh_phagspa`) the surface===ipa pattern is almost certainly **placeholder**, not a design choice — e.g. `一.ko.surface = "il"` and `一.ko.ipa = "il"` is wrong; the real Korean IPA would be `iɭ` or with tone `il˩`. Compare to `ko_mid.surface = "·qilq"` and `ko_mid.ipa = "ʔílʔ"` (properly distinct), and `ko_bus.surface = "ilH"` vs `ipa = "il˥"` (properly distinct with tone). The mainstream `ko`, `ko_kp`, `ko_zai` are missing real IPA for ~22 chars each.

---

### 13. `zh_phagspa` 40 cells with `surface === ipa` (Phags-pa is romanization, not IPA)

`一.zh_phagspa.surface = "ʔi"`, `.ipa = "ʔi"`. Per Coblin 2007 (the standard transliteration), Phags-pa script transliterates to `'i` (with apostrophe for the silent initial `ꡝ`); the IPA reconstruction of Old Mandarin via Phags-pa for 一 is `[ʔi]` with no glottal coda (the coda was lost by Yuan-era Mandarin). So surface should be `'i` (or the bare `i`) and `ipa` should be `ʔi`. The current state confuses transliteration with pronunciation. Same defect for all 40 cells where Phags-pa surface == ipa.

(For the **other** ~20 Phags-pa cells the surface and ipa differ correctly — e.g. `三.zh_phagspa.surface = "sam"` while `ipa = "sam"` — wait, those are also identical. Verify which cells are properly differentiated and which are placeholders.)

---

### 14. `ja[2]` for 南 has `surface: "na"`, `ipa: "na"` — Tō-on placeholder

```
HAN_VARIANTS["南"].ja = [
  {native:"ダン", surface:"dan", ipa:"daɴ", label:"漢音"},
  {native:"ナン", surface:"nan", ipa:"naɴ", label:"呉音"},
  {native:"ナ",   surface:"na",  ipa:"na",  label:"唐音"},
]
```

For the 唐音 (Tō-on) reading the IPA is `na` and surface is `na` — they match by coincidence (Japanese /na/ → \[na\]). That's actually defensible. BUT the same pattern appears in many other `ja[*]` variant entries (e.g. `二.ja[1] surface=ipa="ni"`, `耳.ja[1] surface=ipa="ni"`, `五.ja[0]=ja[1] surface=ipa="go"`, `下.ja[0] surface=ipa="ka"`, `坐.ja[0] surface=ipa="sa"`, `海.ja[0] surface=ipa="kai"`) — pure single-syllable readings will always have surface==ipa under a strict pronunciation-spelling principle in Japanese. So this is **not** a bug for Japanese; just confirm that the renderer doesn't dedupe surface=ipa cells.

---

### 15. `HAN_VARIANTS["来"].nan*` — duplicate surface across 白讀/文讀 with empty IPA

```
HAN_VARIANTS["来"].nan = [
  {native:"", surface:"lâi", ipa:"", label:"白讀"},
  {native:"", surface:"lâi", ipa:"", label:"文讀"},
]
```

Identical pattern for `nan_qz`, `nan_te`, `nan_pn`, `nan_xm`, `nan_zz` — all six lists have **the same surface for both variants AND empty IPA**. If 来 has no 文白 split in these dialects (which is true — 来 is a 文白同形 character in most Hokkien), the second variant should be deleted, not duplicated; if there IS a split (e.g. literary `lâi` vs colloquial `lâi`/`lái`), then surface and ipa must differ. Either way, having two identical labelled entries with no IPA is a schema bug. (Counted: 12 empty-string IPA cells in 来 variants.)

`nan_hai["来"]` has the same surface duplication (`lai4`/`lai4`) but at least the IPA is filled (`lai˨˦˥` for both).

---

### 16. `HAN_VARIANTS["三"].nan_xm[0].ipa = ""`, `[1].ipa = ""` — same empty-IPA pattern

```
HAN_VARIANTS["三"].nan_xm = [
  {native:"", surface:"saⁿ", ipa:"", label:"白讀"},
  {native:"", surface:"sam", ipa:"", label:"文讀"},
]
```

Surface forms are correct and distinct (`saⁿ` colloquial vs `sam` literary). IPA cells are empty strings — should be `sã˥˥` and `sam˥˥`. Same defect class as #15. Other `三` variant rows for `nan`, `nan_qz`, `nan_te`, etc. have IPA filled — `nan_xm` is the odd one out.

---

### 17. `HAN_VARIANTS["行:1"].{yue_gz, yue_dg, yue_nn, yue_zs}[0].surface === ipa` — Jyutping field carrying IPA

```
HAN_VARIANTS["行:1"].yue_gz[0] = {surface:"hɐŋ²¹", ipa:"hɐŋ²¹", label:"文讀"}
HAN_VARIANTS["行:1"].yue_dg[0] = {surface:"hɐŋ²¹", ipa:"hɐŋ²¹", label:"文讀"}
HAN_VARIANTS["行:1"].yue_nn[0] = {surface:"haŋ²¹",  ipa:"haŋ²¹",  label:"文讀"}
HAN_VARIANTS["行:1"].yue_zs[0] = {surface:"hɐŋ²¹", ipa:"hɐŋ²¹", label:"文讀"}
```

The base `yue_gz` block has `surface: "hang4"` (Jyutping) and `ipa: "hɐŋ²¹"` — so the variant rows are stuffing IPA into the surface field. Same pattern repeats for 上, 行:2 in the same four yue dialects. The variant `surface` field should hold the romanization (Jyutping `hang4`/`haang4`/etc.) not the IPA notation `hɐŋ²¹`. Compare with `yue` (HK) which correctly carries `surface:"soeng⁶"` and `ipa:"sœːŋ˨"` for 上.

---

### 18. `wuu_wz` (Wenzhounese) 15 cells with `surface === ipa` — Wenzhou-romanization stuck on IPA

`三.wuu_wz.surface = "sa³³"` `.ipa = "sa³³"`. The Wenzhou Romanization for 三 is `sa1` (numeric tone) or `sā` (diacritic). `sa³³` is the IPA contour form. So the surface field is carrying the IPA value for ~15 Wenzhou cells. Compare to sibling `wuu_jh`: surface `sa³³` vs ipa `sã³³` — already drifting from sibling consistency (`wuu_wz` has no nasalization marker even though Wenzhou has nasalized vowels). Either the Wenzhou IPA is wrong or the surface is a placeholder.

---

### 19. `bca` (Baisha Li / Hlai) has **zero** `native` entries across all 61 chars

`bca` appears in `surface` and `ipa` maps but never in `native`. This is consistent (the lang is Hlai, written in Latin orthography with no native script), so there is no schema bug here — but the *list* of langs that intentionally lack `native` is large: 53 of the 102 langs never have a native entry (including all Sinitic regiolects `wuu*`, `yue*`, `nan*`, `zh_*` except `zh_phagspa`, plus all proto-langs and `bca`). For these, the renderer should not display a "native" field at all. The convention is correct; just document it ("`native` is populated only for langs with their own script: Han, Hangul, Kana, Phags-pa, Khitan, Jurchen, Manchu, Tangut, Sibe, Chữ Nôm").

The drift-counterpart: `juc` (Jurchen Script), `zkt` (Khitan Small Script), `txg` (Tangut), `mnc` (Manchu), `sjo` (Sibe) all DO have native entries, mostly populated. So the rule is clean — but enforce it by deleting any sporadic `native` cell that doesn't belong (none found in this sweep, but worth a lint rule).

---

### 20. Variant `native` field — 558 / 622 rows have `native: ""` — should be standardized

In `HAN_VARIANTS`, of 622 total variant entries:
- 558 have `native: ""` (empty string)
- 1 has mixed-empty/filled native within the same array
- 63 have `native` filled in every variant

The 558 empties are for Sinitic dialect variants (nan, yue_gz, wuu, etc.) where the native script IS the parent Han character — so there is no "different native form per variant", and the field is left blank. The 63 filled are mostly Japanese (`ja`) and Korean (`ko`) variants where each on/kun reading does have its own kana/hangul (e.g. `南.ja = [{native:"ダン"},{native:"ナン"},{native:"ナ"}]`). The 1 mixed case is the kind of internal inconsistency worth verifying — find it (likely a `ko` row with one variant labelled `한`/`행` and the other empty) and either fill or drop. Recommendation: for variants where the parent-char is the native script, drop the `native` key entirely instead of writing `""`. That saves ~558 noisy strings and brings the variant schema in line with the base `HAN_DATA` convention (where Sinitic langs simply omit the `native` key).

---

### 21. `HAN_VARIANTS["上"].yue_dg, yue_nn, yue_zs` — all four variant lists have surface===ipa for **both** entries

```
HAN_VARIANTS["上"].yue_gz = [
  {surface:"sœːŋ²²", ipa:"sœːŋ²²", label:"上面（locative）"},
  {surface:"sœːŋ¹³", ipa:"sœːŋ¹³", label:"上升（verb: ascend）"},
]
```

Same surface===ipa pattern in `yue_dg`, `yue_nn`, `yue_zs`. The Jyutping for 上 should be `soeng6` (locative) and `soeng5` (verb) — not `sœːŋ²²` / `sœːŋ¹³` (those are IPAs). This is a 12-cell pile of the same defect as finding #17, but for a different character.

---

### 22. `HAN_VARIANTS["六"]` — every `nan*` variant has empty `native: ""` AND uses the parent Han char correctly elsewhere — fine, but check `native` non-emptiness in `ja`

```
HAN_VARIANTS["六"].ja = [
  ... should have on-reading ロク / リク with native:"ロク" / native:"リク" ...
]
```

Spot-check that the `ja` variant entries for 六 have non-empty `native`. (Scan flagged 558 all-empty vs 63 all-filled — the ja variants should be in the 63.)

---

### 23. `行:1 zh_kanbun = null` while `行:2 zh_kanbun` is **absent** — inconsistent null vs absent for sister keys

The two sense splits of 行 are deliberately separated (`行:1` = 'go/walk', `行:2` = 'row/conduct'). For `zh_kanbun`:
- `行:1.surface.zh_kanbun = null`
- `行:1.ipa.zh_kanbun = null`
- `行:2.surface.zh_kanbun` — key absent
- `行:2.ipa.zh_kanbun` — key absent

Two different "missing" representations for two related senses of the same character. Pick one. The same pattern affects `中:1` vs `中:2`, `行:1` vs `行:2` — verify both senses use the same convention everywhere.

---

### 24. `HAN_LANG_META` header claim "98 language/variant pronunciations" disagrees with `HAN_LANGS.length === 102`

Top of file line 2: `// Hanmap data — 59 Han characters × 98 language/variant pronunciations.` But `HAN_LIST.length === 61` (because `中` and `行` each split into two senses) and `HAN_LANGS.length === 102`. The header is stale. Update to `61 Han keys (59 chars + 2 sense splits) × 102 lang/variant pronunciations`.

---

### 25. Recommendation: add a one-time schema-lint script to `npm test` (or equivalent)

The 17 + 18 + 26 + 6 + 63 = ~130 concrete schema violations in this report all fall into 6 mechanical rules:
1. No `null` values in `HAN_DATA[ch][field][lang]`. Use `"—"` or remove the key.
2. No `""` in `surface` or `ipa`. (`""` allowed in `native` only when the lang's native script is identical to the parent Han char.)
3. If `surface` is present, `ipa` must be present (and vice-versa).
4. `surface !== ipa` unless the lang is a proto- (key starts with `p` like `pko`/`pja`/`pst`...) or the value is a single-mora Japanese syllable.
5. In `HAN_VARIANTS`, every entry must have all four keys `{surface, ipa, native, label}`; no `null`, no duplicate `label` within an array.
6. If `HAN_VARIANTS[ch][lang]` exists, `HAN_DATA[ch].surface[lang]` must also exist (variant table is additive, not substitutive).

A 60-line Node script enforcing these would prevent every regression cited in #20/#34/#38/#39 and this round. Without it, each new round of phonological additions will reintroduce one or two of these defects (round #34 surfaced 4; this round surfaces ~25).

---

## File path and finding count

`/home/jounlai/langmap/hanmap_reviews/53_open.md` — **25 findings**


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 51
- **policy/skip**: 19
- **from-mismatch/already-absent defer**: 14
- **headline**: zh_kanbun null delete (variants[N] path 14 skipped), vi_ohan/vi_nom ""→"—" ×18, 行:1 yue_gz null→hang4, 貓 zh_phagspa mew/mɛw fill, 上/行:1/行:2 yue系 variants Jyutping ×14
- **JSON path**: /tmp/hm_edits_53.json
