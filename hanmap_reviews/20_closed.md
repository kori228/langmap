# Hanmap data review #20 — Polyphony, 文白異讀 & data-structure auditor

## Reviewer self-introduction (ペルソナ自己紹介)

私はPolyphony、東アジア歴史音韻論と多音字（polyphone）処理を専門とする校閲者です。My training is in Middle Chinese phonology via the 廣韻 fanqie/又音 apparatus (following Baxter & Sagart 2014's reconstruction and Pulleyblank 1991's *Lexicon of Reconstructed Pronunciation*), with a second focus on the 文白異讀 (literary vs colloquial) stratification of Southern Min and Wu (Douglas–Barclay 1873/1923 for 廈門/泉漳; Branner 2000 and Yuan Jiahua 袁家驊 1960 *漢語方言概要* for the Mandarin city-dialect grid; Hou Jingyi 侯精一 2002 *現代漢語方言概論* for the 中原官話/西南官話 splits). For Sinoxenic systems I lean on Miyake 2003 (Old Japanese), Lee & Ramsey 2011 (Korean), and Nguyễn Tài Cẩn 1979 (Sino-Vietnamese). For THIS project I am not reviewing one variety in isolation — my brief is the **cross-cutting data structure**: how the 多音字 entries `行:1`/`行:2` and `中:1`/`中:2` are split across the `HAN_DATA[char].surface{}` / `HAN_DATA[char].ipa{}` register maps, how `HAN_VARIANTS` overlays 文白/漢呉 readings, and whether the two readings of one character have been kept distinct rather than cross-contaminated or copied. I audited the live file with `node -e "const m=require('./hanmap_data.js')..."` and verified every "Current" value verbatim against `HAN_DATA`, `HAN_VARIANTS`, `HAN_SENSE_LABELS`.

**Reviewer perspective:** Structure-first. A polyphone dataset is only as good as its weakest cross-reference; a surface string that equals its own IPA, or a key that does not match its sibling tables, silently breaks the overlay even when the phonology is right.

**Coverage:** The four polyphonic rows (`行:1`/`行:2`/`中:1`/`中:2`) across all ~75 register codes; the full `HAN_VARIANTS` 文白/漢呉 table (63 char-keys); plus a project-wide `surface===ipa` scan over all 61 characters.

**Notation conventions observed in the file:**
- For Mandarin city-dialect codes (`zh_sc`, `zh_km`, `zh_jn`, `zh_kf`, `zh_hf`, …) `surface` carries a **pinyin-style romanisation** (`dong`, `zhong`, `shang`, `xing`, with `-ng` digraph finals) while `ipa` carries true IPA (`tuŋ`, `tʂuŋ`, `ʂaŋ`, `ɕiŋ`/`ɕin`). The two columns are intentionally distinct.
- `HAN_DATA` and `HAN_SENSE_LABELS` key the polyphones as `行:1`/`行:2`/`中:1`/`中:2`.
- `HAN_VARIANTS` keys 文白 overlays by register, with `label` either `白讀`/`文讀` (Min/Yue/Wu), `漢音 / Kan-on` · `呉音 / Go-on` · `唐音 / Tō-on` (Japanese), or a free-text gloss (Korean, Vietnamese).
- Proto rows (`pst`, `pko`, `pja`, `ptung`, `pmgl`, `phm`, `paa`, `ptai`) and the script-transcription rows (`mnc`, `juc`, `zkt`, `sjo`, `zh_phagspa`) legitimately set `surface===ipa` and are excluded from the duplicate findings below.

---

## Issues found

### 1. `行:2` — `zh_xa zh_km zh_wh zh_jn zh_kf zh_hf zh_nj zh_jh zh_tj zh_lz zh_zz zh_jiao zh_gl` (surface) — raw IPA leaked into the romanisation column for 13 city dialects
- Current (each is `surface === ipa`, i.e. the surface holds the IPA glyphs): `"xaŋ²⁴"` (zh_xa), `"xã³¹"` (zh_km), `"xan²¹³"` (zh_wh), `"xaŋ⁴²"` (zh_jn), `"xaŋ⁴²"` (zh_kf), `"xæ̃⁵⁵"` (zh_hf), `"xan²⁴"` (zh_nj), `"xã⁵⁵"` (zh_jh), `"xaŋ⁴⁵"` (zh_tj), `"xã⁵³"` (zh_lz), `"xaŋ⁴²"` (zh_zz), `"xaŋ⁴²"` (zh_jiao), `"xaŋ³¹"` (zh_gl)
- Expected: pinyin-style romanised surfaces — `"hang²⁴"`, `"hang³¹"`, `"hang²¹³"`, `"hang⁴²"`, `"hang⁵⁵"`, `"hang⁴⁵"`, `"hang⁵³"`, `"hang³¹"` etc. (initial `h-`, finals written `-ang`/`-an` per each dialect's IPA, never `ŋ`/`ã`/`æ̃`)
- Why: The sibling reading `行:1` keeps the columns distinct in exactly these registers — e.g. `zh_jn` surface `"xing⁴²"` vs ipa `"ɕiŋ⁴²"`, `zh_hf` surface `"xing⁵⁵"` vs ipa `"ɕin⁵⁵"`. And `行:2` itself is correct for the three SW-Mandarin codes that were done by hand: `zh_sc` surface `"han²¹"` / ipa `"xan²¹"`, `zh_cd` `"han³¹"`/`"xan³¹"`, `zh_cq` `"han²¹"`/`"xan²¹"`. The 13 codes above were instead populated by copying the IPA verbatim into `surface`, so the UI's romanisation row will display bare phonetic `ŋ`/`æ̃` glyphs. This is the single largest systematic defect in the polyphone block.

---

### 2. `中:1` — `bo_sino` (surface/ipa) — Tibetan transcription paired with a copied **Mandarin** IPA
- Current: `"krung"` (surface), `"ʈʂʊŋ⁵⁵"` (IPA)
- Expected: an IPA reflecting the Written-Tibetan / Lhasa reading of ཀྲུང (≈ `ʈʂuŋ` *without* a Mandarin 55 register), or removal of the spurious tone
- Why: `bo_sino` is the Tibetan Sinoxenic row (present only on `中:1`). The surface `"krung"` is a genuine Tibetan transcription, but the IPA `"ʈʂʊŋ⁵⁵"` is identical to the Modern Mandarin `zh` ipa `"t͡ʂuŋ˥˥"` down to the `⁵⁵` citation tone — Tibetan has no such tone category on a Chinese loanword and `krung` is not pronounced `ʈʂʊŋ⁵⁵`. The Mandarin value was copied into the Tibetan slot. Cf. how the Mandarin row itself reads `t͡ʂuŋ˥˥`.

---

### 3. `中:1` — `hak_cn` (surface/ipa) — Sixian-Hakka surface/IPA initial disagree (`ch-` vs `z-`)
- Current: `"chûng"` (surface), `"zuŋ˨˦"` (IPA)
- Expected: either `"zûng"` (to match the `z-`/`/ts/` IPA, as in the Hakka 陽平 reading) **or** ipa `"tʃuŋ˨˦"` (to match `ch-`)
- Why: The aspirated/affricate digraph `ch` in this project's Hakka romanisation maps to IPA `tʃ`/`tʂ`, never to `z` (`/ts/`). The sibling reading `中:2 hak_cn` is internally consistent: surface `"chung"` / ipa `"tʃuŋ⁵⁵"`. And the other Hakka varieties on `中:1` agree internally: `hak_mz` `"chûng"`/`"tʃuŋ˦˦"`, `hak_tw` `"zung1"`/`"zuŋ˨˦"`. Only `中:1 hak_cn` pairs a `ch-` surface with a `z-` IPA — one of the two is wrong.

---

### 4. `中:1` — `ko_kp` (surface/ipa) — North-Korean Sino reading split as `chung` against an unsplit `tsuŋ`
- Current: `"chung"` (surface), `"tsuŋ"` (IPA)
- Expected: `"jung"` (surface), matching the IPA and the sibling `中:2 ko_kp` `"jung"`/`"tsuŋ"`
- Why: Sino-Korean 中 is 중 in both the 中央 and the 命中 sense — there is no 文白 split in Korean here. Every other Korean register reads `jung`-type on both senses (`ko` jung/jung, `ko_zai` jung/jung, `ko_bus` jungL/jungH, `ko_mid` tyung). Only `ko_kp` shows `chung` on `中:1` while its own IPA stays `tsuŋ` (= jung, not chung) and its `中:2` reverts to `jung`. The surface `chung` is an isolated artefact; surface and IPA disagree within the same cell.

---

### 5. `HAN_VARIANTS` — key `"行"` vs the `行:1` convention everywhere else — 文白 overlay for the 行為 reading will not resolve
- Current: `HAN_VARIANTS` keys the 行 overlay as `"行"` (bare) and separately as `"行:2"`. `HAN_DATA` and `HAN_SENSE_LABELS` key the same character as `"行:1"` / `"行:2"`.
- Expected: rename `HAN_VARIANTS["行"]` → `HAN_VARIANTS["行:1"]` to match the polyphone keying used by `HAN_DATA` and `HAN_SENSE_LABELS`.
- Why: The 中 entries are done correctly — `HAN_VARIANTS` has both `中:1` and `中:2`. 行 is the lone inconsistency: its first-reading variants (nan `kiâⁿ`/`hêng`, yue `hang4`/`haang4`, ja `kō`/`gyō`/`an`, ko `행`/`항`) sit under bare `"行"`, so any overlay lookup keyed on the canonical `行:1` id (the form used by `HAN_SENSE_LABELS["行:1"]` and `HAN_DATA["行:1"]`) misses them. A reading-id mismatch, not a phonological error.

---

### 6. `HAN_VARIANTS["行:2"]` — `vi` — third reading 行(hạnh) folded into the 行列/háng overlay
- Current: the `vi` variant list is `[{surface:"hành", label:"đi, làm (walk/act)"}, {surface:"hàng", label:"hàng ngũ, thương hàng (row/business)"}, {surface:"hạnh", label:"đức hạnh (conduct/virtue)"}]`
- Expected: `行:2` (the 行列/háng reading) should carry only `hàng`; `hành` belongs to `行:1` (行為) and `hạnh` is a distinct 去聲 reading (Sino-Viet of 行 *xìng* 'conduct/virtue', 廣韻 下更切) that maps to neither of this project's two senses.
- Why: `HAN_SENSE_LABELS` defines exactly two senses — `行:1` 行為 and `行:2` 行列. Stacking all three Sino-Vietnamese readings under `行:2` puts `hành` (the 行為 reading) under the 行列 sense and introduces a phantom third sense (`hạnh`). Per the 廣韻 又音 apparatus 行 has the 戶庚 (xíng), 戶郎 (háng) and 下更 (xìng) readings — the first two are the two project senses; the third should not ride along here.

---

### 7. `中` — `HAN_VARIANTS["中:2"]["vi"]` IPA convention diverges from the main rows (`ʈʂuŋ` vs `ʈuŋ͡m`)
- Current: variant `vi` = `[{surface:"trung", ipa:"ʈʂuŋ˧"}, {surface:"trúng", ipa:"ʈʂuŋ˧˥"}]`
- Expected: `"ʈuŋ͡m˧"` / `"ʈuŋ͡m˧˥"` to match the file's own Vietnamese convention
- Why: Every main Vietnamese 中 cell uses retroflex stop + labio-velar coda: `中:1 vi` ipa `"ʈuŋ͡m˧˧"`, `中:2 vi` ipa `"ʈuŋ͡m˧˥"` (the -ông/-ung rhyme triggers /ŋ͡m/ after a rounded vowel in Vietnamese). The overlay instead writes `ʈʂuŋ` — an affricate `ʈʂ` (Mandarin-style, not Vietnamese `tr` = /ʈ/~/tɕ/) and a plain `ŋ` coda. The variant IPA contradicts the main data's own transcription for the same syllable.

---

### 8. `行:2` — `vi` overlay vowel length vs main row (`haːɲ` vs `haɲ`)
- Current: `HAN_VARIANTS["行:2"]["vi"]` first entry ipa `"haːɲ˨˩"`; main `HAN_DATA["行:1"].ipa.vi` = `"haɲ˨˩"`
- Expected: pick one — the main rows for both senses use short `a` (`行:1 vi` `"haɲ˨˩"`, `行:2 vi` `"haŋ˨˩"`)
- Why: Vietnamese `a` in `hành`/`hàng` is the short /a/, transcribed without length elsewhere in this file. The overlay's `haːɲ`/`haːŋ` introduce a length mark `ː` that the main Vietnamese rows never use, so the same word renders with two different vowel lengths depending on whether the overlay or the main cell is shown.

---

### 9. `中:1` / `中:2` — `ja` overlay lists 漢音 and 呉音 as identical `chū` / `chū` (vacuous distinction)
- Current: `中:1 ja` = `[{native:"チュウ", surface:"chū", label:"漢音 / Kan-on"}, {native:"チュウ", surface:"chū", label:"呉音 / Go-on"}]`; `中:2 ja` is byte-for-byte the same list.
- Expected: collapse to a single Japanese reading for 中 (no 漢呉 contrast: both are チュウ), and do not duplicate the identical list across `中:1` and `中:2`.
- Why: For 中 the Kan-on and Go-on coincide (チュウ), so labelling two identical rows 漢音/呉音 presents a non-existent contrast — and the contrast is what the overlay exists to show (cf. 行 `ja` where kō/gyō/an genuinely differ). Worse, `中:2 ja` is an exact copy of `中:1 ja`, so the 命中 sense carries no information distinct from 中央. Either reading is fine to keep, but the doubled 漢音/呉音 pair is filler.

---

### 10. `北` — `hak_cn` `hak_hl` `hak_mz` (surface/ipa) — overlay exists but the **main rows are missing**
- Current: `HAN_DATA["北"].surface` has only `hak_tw` among Hakka codes (`"bed6"`); `hak_cn`, `hak_hl`, `hak_mz` are `undefined` in the main map. Yet `HAN_VARIANTS["北"]` supplies 文白 pairs for `hak_cn`, `hak_hl`, `hak_mz` (e.g. hak_cn `pet`/`phak`).
- Expected: add main `HAN_DATA["北"]` rows for `hak_cn`/`hak_hl`/`hak_mz` (the 文讀 or 白讀 citation form), since an overlay with no base cell renders against an empty primary value.
- Why: The variant table presupposes a base reading to overlay onto; for 北 the base Hakka cells are absent for three of the four Hakka codes. This is a structural gap — overlay-without-base — unique to 北 among the Hakka-bearing characters.

---

### 11. `北` — `HAN_VARIANTS["北"]["hak_cn"]` — 文讀 form `phak` looks mislabelled / aspiration-spurious
- Current: `[{surface:"pet", ipa:"pet̚˨", label:"白讀"}, {surface:"phak", ipa:"pʰak̚˨", label:"文讀"}]`
- Expected: the literary (文讀) Hakka reading of 北 is unaspirated `bet`/`pet` (德韻 入聲, 廣韻 博墨切, a 幫母 = unaspirated stop); `pet` is the literary form and `pak`/`pet` colloquial — the aspirated `phak` (滂母-style `pʰ`) does not correspond to 幫母 北.
- Why: 北 is 幫母 (voiceless **unaspirated**), so neither reading should surface as `pʰ`. The 文白 split for 北 in Hakka is in the **rhyme/vowel** (-et vs -ak), not in aspiration. `phak` introduces an aspirated initial with no etymological source and mislabels the colloquial-looking `-ak` form as 文讀. Confirm against 北 廣韻 博墨切 (幫母 德韻).

---

### 12. `行:1` — `zh_kanbun` (surface) — register present on `行:1` only, value `null`, no sibling on `行:2`
- Current: `HAN_DATA["行:1"].surface.zh_kanbun = null`; the `zh_kanbun` code does not appear in `行:2` at all.
- Expected: either populate `zh_kanbun` for both readings or drop the dangling `null` key.
- Why: A register diff of the two readings shows `zh_kanbun` is present (as `null`) on `行:1` but entirely absent from `行:2`, the only such asymmetry of this kind. A `null`-valued key that exists on one sense and not the other is a structural inconsistency — it should be symmetric or removed.

---

### 13. `行` readings — `nan_my` present on `行:2` but missing on `行:1`
- Current: `HAN_DATA["行:2"].surface.nan_my = "hâng"` / ipa `"hiŋ˨˧"`; `HAN_DATA["行:1"].surface.nan_my = undefined` (no Malaysian-Hokkien cell for the 行為/kiâⁿ reading).
- Expected: add `行:1 nan_my` (colloquial `kiâⁿ`, the 行為 reading) so the two senses cover the same register set.
- Why: All the other Penang/SEA Min codes appear on both readings (`nan_pn`, `nan_sg`, `nan_id`, `nan_pera`, `nan_th`). Only `nan_my` is one-sided — present for háng (行列) but not for kiâⁿ (行為), even though Malaysian Hokkien certainly has the colloquial `kiâⁿ` 'walk'. A coverage gap revealed by the `行:1` vs `行:2` register diff.

---

### 14. `中:1` — `bo_sino` `ja_kun` `ko_hun` present, but `中:2` carries none of them — three one-sided rows
- Current: `中:1` has `bo_sino` (krung), `ja_kun` (naka), `ko_hun` (가운데/gaunde); `中:2` has none of the three.
- Expected: this is partly correct-by-design (the native gloss 'middle' = naka/가운데 belongs to 中央, not 命中) — but it should be made explicit, and the `bo_sino` Tibetan loan, being a 字音 not a native gloss, plausibly applies to both senses and is arbitrarily omitted from `中:2`.
- Why: `ja_kun naka` and `ko_hun gaunde` are native-vocabulary glosses for 'centre' and legitimately attach only to `中:1`; that is fine. But `bo_sino krung` is a Sino-Tibetan reading of the character itself (cf. issue #2), not a 'centre'-specific gloss, so its presence on `中:1` only — combined with its broken Mandarin-copied IPA — suggests the row was added ad hoc rather than systematically. Flag for review of whether `bo_sino` should mirror onto `中:2`.

---

### 15. Project-wide `surface===ipa` in Sinitic cells — spot-check beyond the polyphones
- Current: outside the proto/script rows, true `surface===ipa` collisions cluster on a handful of Wu and Mandarin cells where the romanisation happens to coincide with the IPA, e.g. `馬 wuu` `"mo²³"`==`"mo²³"`, `虎 wuu` `"hu³⁵"`==`"hu³⁵"`, `左 wuu` `"tsu³⁵"`==`"tsu³⁵"`, `木 zh_sc` `"mu²¹³"`==`"mu²¹³"`, `目 zh_jn` `"mu⁵⁵"`==`"mu⁵⁵"`.
- Expected: most of these are *benign* (when a syllable like [mo], [hu], [mu], [san] has identical pinyin-romanised and IPA spellings, equality is correct, not an error). They are listed here only to certify they were checked and are not in the same class as issue #1.
- Why: A blanket "surface must differ from ipa" rule would be wrong for these languages; the diagnostic for a real defect (issue #1) is that the surface contains glyphs the romanisation column never otherwise uses — `ŋ`, `ã`, `æ̃`, `ʂ`, `ʈʂ`. The Wu/Mandarin `mo`/`hu`/`mu`/`san` collisions contain no such glyphs, so they are genuine coincidental identity, not leakage.

---

## Summary of systematic issues

1. **IPA-into-surface leakage (issue #1):** the dominant systematic fault — 13 of the `行:2` city-dialect cells were populated by copying the IPA into the romanisation column, identifiable because they alone carry `ŋ`/`ã`/`æ̃` glyphs the surface convention never uses. The same fault should be grep-checked on any future city-dialect addition (`surface === ipa` AND surface contains `[ŋãẽæ̃ʂʈʂɕ]`).
2. **Cross-reading / cross-register copy contamination (issues #2, #4, #7):** values copied from Mandarin into Tibetan (`bo_sino` IPA), and overlay IPA written in a Mandarin-style transcription that contradicts the main Vietnamese rows. The two readings of one character, and the two columns of one cell, must be independently sourced.
3. **Surface/IPA initial disagreement (issues #3, #4):** `ch-`↔`z-` (Hakka 中) and `chung`↔`tsuŋ` (Korean 中) — romanisation and IPA encode different initials in the same cell.
4. **Polyphone-keying inconsistency (issue #5):** `HAN_VARIANTS["行"]` should be `["行:1"]` to match `HAN_DATA`/`HAN_SENSE_LABELS`; 中 is keyed correctly, 行 is not — a silent overlay-miss.
5. **Sense over-/under-population (issues #6, #9, #14):** a third reading (hạnh) folded into a two-sense scheme; identical 漢音/呉音 rows that encode no contrast; and one-sided native/loan rows across the `:1`/`:2` pair.
6. **Overlay-without-base & coverage gaps (issues #10, #11, #12, #13):** 北 Hakka variants overlay onto missing main rows; a dangling `null` `zh_kanbun` key; an asymmetric `nan_my` between the two 行 senses.

---

## Worker round-1 response (作業者round-1)

Verified every "Current" value verbatim against `HAN_DATA` / `HAN_VARIANTS` / `HAN_SENSE_LABELS` by loading `hanmap_data.js` as a module. Fixes returned as structured edits (file is read-only for the worker; orchestrator applies them).

**#1 — `行:2` 13 city-dialect surfaces hold raw IPA — APPLIED (applied by orchestrator this round).** Confirmed all 13 cells are `surface === ipa` and carry `x-`/`ŋ`/`ã`/`æ̃` IPA glyphs. The romanisation convention is fixed by the SAME character's sibling reading `行:1`, whose surface is uniformly `xing⁴²`/`xing⁵⁵`/… (standard pinyin rhyme, NOT a per-dialect phonetic transcription — it stays `xing` even where the IPA is `ɕin`). Standard pinyin of 行(háng) is `hang`; `x-`→`h-`. Replaced the whole surface block with `hang` + each dialect's existing tone superscript: `zh_xa hang²⁴, zh_km hang³¹, zh_jn hang⁴², zh_kf hang⁴², zh_hf hang⁵⁵, zh_jh hang⁵⁵, zh_nj hang²⁴, zh_tj hang⁴⁵, zh_lz hang⁵³, zh_wh hang²¹³, zh_zz hang⁴², zh_jiao hang⁴², zh_gl hang³¹`. (Uniform `hang` chosen over a per-dialect `-an`/`-ang` split because the sibling `行:1` uses a uniform rhyme and the reviewer's own Expected list is uniformly `hang`. IPA column untouched.)

**#2 — `中:1 bo_sino` IPA is a copied Mandarin value — APPLIED (applied by orchestrator this round).** IPA was `ʈʂʊŋ⁵⁵`, byte-identical to the Mandarin `t͡ʂuŋ˥˥` register down to the `⁵⁵` citation tone and the `ʊ` vowel. Verified against Lhasa-Tibetan sources that the written-Tibetan `kr-` cluster (ཀྲ) is realised retroflex — affricate `[ʈʂ]` in prestige Lhasa — with vowel `u` (the orthographic ཀྲུང) and a HIGH tone from the ཀ high-series initial (sources: Wikipedia *Lhasa Tibetan*, retroflex/affricate realisation of the kr- cluster; Rangjung Yeshe wiki *krung go* = 中國). Changed to `ʈʂuŋ˥`: removed the spurious Mandarin `⁵⁵` register, corrected `ʊ`→`u`, used a single Lhasa high-tone mark. Surface `krung` left intact.

**#3 — `中:1 hak_cn` surface/IPA initial disagree — APPLIED (applied by orchestrator this round).** Surface `chûng` vs IPA `zuŋ˨˦`. In this file's Hakka romanisation `ch-` = `tʃ-` (cf. sibling `中:1 hak_mz` `chûng`/`tʃuŋ˦˦` and `中:2 hak_cn` `chung`/`tʃuŋ⁵⁵`); `z-` is `/ts/` (cf. `hak_tw zung1`/`zuŋ˨˦`). Minimal fix that preserves the surface and the 陽平 `˨˦` tone: IPA `zuŋ˨˦`→`tʃuŋ˨˦` (matching the `ch-` surface and the hak_mz precedent). (hak_tw's separate `zuŋ˨˦` row, which legitimately pairs with `zung1`, is untouched — anchored uniquely.)

**#4 — `中:1 ko_kp` surface/IPA disagree — APPLIED (applied by orchestrator this round).** Surface `chung` vs IPA `tsuŋ`; sibling `中:2 ko_kp` is `jung`/`tsuŋ`, and Sino-Korean 中 = 중/jung in both senses (no 文白 split). The `chung` surface is an isolated artefact. Changed surface `chung`→`jung` to match its own IPA and `中:2`.

**#5 — `HAN_VARIANTS["行"]` keying — APPLIED (applied by orchestrator this round).** Confirmed `HAN_VARIANTS` keys this overlay as bare `"行"` while `HAN_DATA`/`HAN_SENSE_LABELS` and the sibling overlay `"行:2"` use the `行:N` scheme; `HAN_DATA["行"]` (bare) does not exist, so the overlay never resolves on a `行:1` lookup. The bare-`"行"` block holds the 行為 readings (nan kiâⁿ/hêng, yue, ja kō/gyō/an, ko) and is distinct from `"行:2"`. Renamed key `"行"` → `"行:1"`. (中 is already correct.)

**#7 — `中:2 vi` overlay IPA contradicts the file's Vietnamese convention — APPLIED (applied by orchestrator this round).** Overlay had `ʈʂuŋ˧`/`ʈʂuŋ˧˥` (Mandarin-style affricate `ʈʂ` + plain `ŋ`), but every main Vietnamese 中 cell uses retroflex stop + labio-velar coda: `中:1 vi` `ʈuŋ͡m˧˧`, `中:2 vi` `ʈuŋ͡m˧˥`. Changed overlay IPA `ʈʂuŋ˧`→`ʈuŋ͡m˧` and `ʈʂuŋ˧˥`→`ʈuŋ͡m˧˥` to match the main rows. Surfaces `trung`/`trúng` untouched.

**#8 — `行:2 vi` overlay vowel length — PARTIALLY APPLIED (applied by orchestrator this round).** Main Vietnamese rows use short `a` (`行:1 vi` `haɲ˨˩`, `行:2 vi` `haŋ˨˩`); the overlay wrote a length mark `ː`. Normalised the one entry that uncontroversially belongs to `行:2` (the 行列 reading `hàng`): IPA `haːŋ˨˩`→`haŋ˨˩`. The other two overlay entries (`hành`, `hạnh`) are deliberately NOT touched here because their very membership in `行:2` is disputed under #6 (see hold below) — normalising length on rows that should be moved/removed would be wasted churn.

**#11 — `北` Hakka 文讀 `phak`/`pʰak̚` aspiration — APPLIED (applied by orchestrator this round).** 北 is 幫母 (廣韻 博墨切), a voiceless **unaspirated** stop; authoritative Hakka readings are unaspirated `pet`/`bêd` /pet̚/ (Wiktionary 北: Sixian PFS `pet` /pet̚²/, Meixian `bêd5` /pɛt̚¹/ — no aspiration, no `pʰ`). The 文讀 entries' aspirated `phak`/`pʰak̚` have an etymologically unsourced `pʰ`. De-aspirated all three Hakka overlays (hak_cn, hak_hl, hak_mz): surface `phak`→`pak`, IPA `pʰak̚˨`→`pak̚˨` (hak_cn, hak_hl) and `pʰak̚˩`→`pak̚˩` (hak_mz). NOTE held part: I could not source a `-ak` literary rhyme for 北 at all (sources give only the `-et` reading), so I did **not** invent a replacement rhyme or re-label 文/白 — only the clearly-wrong aspiration was corrected. The 白讀 `pet` rows already match the sourced form and are untouched.

---

### Held / deferred items (needing reviewer decision — not unambiguous local errors)

**#6 — `行:2 vi` stacks three readings (hành/hàng/hạnh) — HELD.** I agree `hành` is the 行為 (now `行:1`) reading and `hạnh` (去聲, Sino-Viet of 行 *xìng* 'virtue', 廣韻 下更切) is a genuine third sense that maps to neither project sense. But the correct fix is a *restructuring*: re-home `hành` into a new `HAN_VARIANTS["行:1"].vi` overlay (which currently has no `vi` key) and drop `hạnh`. That moves real data across sense-keys and interacts with the #5 rename I am already applying this round; deleting `hành` outright would lose valid data. Recommend the reviewer confirm the target shape (create `行:1.vi = [hành]`, leave `行:2.vi = [hàng]`, drop `hạnh`) so it can be done as one clean move next round.

**#9 — `中:1`/`中:2` `ja` identical 漢音/呉音 `chū` rows — HELD.** The values are phonologically correct (中 Kan-on = Go-on = チュウ); this is a presentation/curation choice (whether to show a non-contrast, and whether to dedupe `中:2 ja` against `中:1 ja`), not a data error. Holding for a project-level decision on how no-contrast 漢呉 pairs should render.

**#10 — `北` missing main Hakka rows (hak_cn/hak_hl/hak_mz) — HELD.** Confirmed the structural gap (overlay-without-base; only `hak_tw bed6` exists in `HAN_DATA["北"]`). Adding three brand-new main cells requires choosing a citation form (白讀 `pet` is sourced and would be my recommendation) — a data-addition/curation call, not a local-error fix. Recommend reviewer approve seeding the base rows from the (now de-aspirated) 白讀 `pet`/`pet̚`.

**#12 — `行:1` dangling `null` `zh_kanbun` key — HELD.** Confirmed `行:1.surface.zh_kanbun === null` with no `zh_kanbun` on `行:2`. Whether to drop the key or symmetrise it is a structural-convention decision (null placeholders may be intentional across the dataset); not fixing blind.

**#13 — `nan_my` one-sided (on `行:2` only) — HELD.** Confirmed `行:2 nan_my` `hâng`/`hiŋ˨˧` with no `行:1 nan_my`. Adding the colloquial `kiâⁿ` 行為 reading is plausible but is new sourced data; recommend reviewer approve before adding.

**#14 — `bo_sino` mirror onto `中:2` — HELD.** Native glosses (ja_kun naka, ko_hun gaunde) correctly attach to `中:1` only. Whether the Sino-Tibetan `bo_sino krung` 字音 should also appear on `中:2` is a coverage-design call; its IPA is fixed under #2 regardless.

Net this round: 8 edits applied (#1 as one block-replace, #2, #3, #4, #5, #7, #8-partial, #11×3 hak overlays); 6 items held for reviewer decision (#6, #9, #10, #12, #13, #14).

---

## Reviewer round-2 response (再評価 round-2)

Re-loaded `hanmap_data.js` into a fresh VM context and verified every claimed value verbatim against live `HAN_DATA` / `HAN_VARIANTS` / `HAN_SENSE_LABELS`. Per-item adjudication below.

**#1 — 行:2 city-dialect surfaces — ✓ ACCEPT (verified).** All 13 surfaces now read `hang<tone>` with the IPA column untouched and still distinct: zh_xa `hang²⁴`/`xaŋ²⁴`, zh_km `hang³¹`/`xã³¹`, zh_wh `hang²¹³`/`xan²¹³`, zh_jn `hang⁴²`/`xaŋ⁴²`, zh_kf `hang⁴²`/`xaŋ⁴²`, zh_hf `hang⁵⁵`/`xæ̃⁵⁵`, zh_nj `hang²⁴`/`xan²⁴`, zh_jh `hang⁵⁵`/`xã⁵⁵`, zh_tj `hang⁴⁵`/`xaŋ⁴⁵`, zh_lz `hang⁵³`/`xã⁵³`, zh_zz `hang⁴²`/`xaŋ⁴²`, zh_jiao `hang⁴²`/`xaŋ⁴²`, zh_gl `hang³¹`/`xaŋ³¹`. No surface cell now carries `ŋ`/`ã`/`æ̃`. Uniform-`hang` rhyme matches the sibling `行:1` convention and my own Expected list. The dominant systematic defect is resolved.

**#2 — 中:1 bo_sino IPA — ✓ ACCEPT (verified).** Live IPA is now `ʈʂuŋ˥` (was `ʈʂʊŋ⁵⁵`). The copied Mandarin `⁵⁵` register and `ʊ` vowel are gone; retroflex affricate realisation of the Lhasa `kr-` cluster with a single high-tone mark is a defensible reading. Surface `krung` intact. Cross-contamination removed.

**#3 — 中:1 hak_cn initial — ✓ ACCEPT (verified, with a note).** Live cell is now `chûng`/`tʃuŋ˦˦`; surface `ch-` and IPA `tʃ-` now agree, so the initial-disagreement defect is fixed. NOTE: the worker's prose said they set the IPA to `tʃuŋ˨˦` (preserving the old `˨˦`), but the value actually applied is `tʃuŋ˦˦` — i.e. the orchestrator additionally aligned the TONE to the sibling `中:1 hak_mz` `tʃuŋ˦˦`. That is in fact the better choice (中 is 陰平/level, not 陽平; hak_mz is the right anchor), so I accept the applied value over the worker's stated one. No action needed; flagging only because claimed≠applied.

**#4 — 中:1 ko_kp surface — ✓ ACCEPT (verified).** Live `中:1 ko_kp` = `jung`/`tsuŋ`, matching its own IPA and the sibling `中:2 ko_kp` `jung`/`tsuŋ`. The isolated `chung` artefact is gone.

**#5 — HAN_VARIANTS key 行→行:1 — ✓ ACCEPT (verified).** `HAN_VARIANTS` now keys `行:1` and `行:2`; bare `"行"` no longer exists. `HAN_DATA`, `HAN_SENSE_LABELS`, and the overlay table are now consistent on the `行:N` scheme. The 行為 overlays (nan/yue/ja/ko…) resolve on a canonical `行:1` lookup.

**#7 — 中:2 vi overlay IPA — ✓ ACCEPT (verified).** Overlay now `trung`/`ʈuŋ͡m˧`, `trúng`/`ʈuŋ͡m˧˥`, matching the main rows' retroflex-stop + labio-velar coda (`中:1 vi ʈuŋ͡m˧˧`, `中:2 vi ʈuŋ͡m˧˥`). Mandarin-style affricate `ʈʂ`/plain `ŋ` eliminated.

**#8 — 行:2 vi overlay vowel length — △ PARTIAL, but ACCEPTED AS-IS.** Verified: the `hàng` entry is now `haŋ˨˩` (length removed, matches main `行:2 vi haŋ˨˩`). The two remaining length marks sit on `hành` (`haːɲ˨˩`) and `hạnh` (`haːɲ˨˩ʔ`) — both rows whose very membership in `行:2` is disputed under #6. I accept deferring their length-normalisation to the #6 restructuring; normalising rows that are slated to move/drop would be churn. This stops being "partial" once #6 is resolved.

**#11 — 北 Hakka 文讀 aspiration — ✓ ACCEPT (verified).** All three overlays de-aspirated: hak_cn/hak_hl `pak`/`pak̚˨`, hak_mz `pak`/`pak̚˩`; the 白讀 `pet` rows untouched. No `pʰ` remains. Consistent with 北 = 幫母 (廣韻 博墨切), voiceless unaspirated. The 文/白 contrast now rests on the rhyme (-et vs -ak), as it should. The worker correctly documented that an authoritative `-ak` *literary* rhyme could not be offline-sourced and therefore did NOT relabel 文/白 — I accept that as a reasonable conservative stop; the clearly-wrong aspiration is gone and that was the actionable error.

### Held items — adjudication

**#10 — 北 missing main Hakka rows — ✓ ACCEPT (now RESOLVED in live data).** Though logged as "HELD" in the worker text, the live data already carries the base rows: `北 hak_cn pet/pet̚˨`, `hak_hl pet/pet̚˨`, `hak_mz pet/pet̚˩` — seeded from the de-aspirated 白讀 `pet`, exactly the worker's recommended citation form. The overlay-without-base structural gap is closed. (Incidental: `hak_tw` now reads `bed5`, not the `bed6` quoted in the original finding; `bed5` = 陰入 is the correct Sixian-Hakka pinyin tone for 北 入聲, so this is a benign correction, not a regression.)

**#6 — 行:2 vi three readings (hành/hàng/hạnh) — △ PARTIAL / still open.** Live `行:2.vi` still lists all three surfaces and `行:1.vi` is `undefined`. The #5 rename (which this fix depends on) is now done, so the blocker the worker cited is cleared. The clean move is concretely actionable: create `HAN_VARIANTS["行:1"].vi = [{surface:"hành", ipa:"haɲ˨˩", label:"đi, làm (walk/act)"}]`, reduce `行:2.vi` to the single `hàng` entry, and drop the phantom-third-sense `hạnh`. This is real mis-homed data (hành = 行為 sense sitting under the 行列 sense), not a convention choice — it remains an actionable defect.

**#9 — 中 ja identical 漢音/呉音 rows — ✓ ACCEPT as won't-fix.** Verified both `中:1 ja` and `中:2 ja` are the duplicated `chū`/`t͡ɕɯː` 漢音+呉音 pair. The phonology is correct (中 Kan-on = Go-on = チュウ). Whether to display a non-contrast or dedupe across senses is a project-level presentation policy, not a data error. I accept this as a defensible curation choice; won't-fix.

**#12 — 行:1 dangling null zh_kanbun — ✓ ACCEPT as won't-fix.** Verified `行:1.surface.zh_kanbun === null`, absent on `行:2`. `null` 漢文 placeholders are used as intentional "no kanbun reading" markers across this dataset; the asymmetry is cosmetic and does not break any overlay. Accept as a system-level convention; won't-fix.

**#13 — nan_my one-sided (行:2 only) — ✓ ACCEPT as won't-fix / known gap.** Verified `行:2 nan_my hâng` with no `行:1 nan_my`. Adding the colloquial `kiâⁿ` would be NEW data; the colloquial 行為 reading of Malaysian Hokkien is not separately attested in any offline source available here, so I will not demand its invention. Documented as a minor known coverage gap, not a blocking error.

**#14 — bo_sino mirror onto 中:2 — ✓ ACCEPT as won't-fix.** Verified `中:2 bo_sino === undefined`. Its IPA on `中:1` is fixed (#2). Whether the Tibetan 字音 should also overlay the 命中 sense is a coverage-design call with no single right answer; accept current single-sense placement.

### New issues

None. The `surface===ipa` re-scan confirms no city-dialect cell retains leaked IPA glyphs after #1; no new defensible errors surfaced during verification.

### Scorecard

| Item | Verdict |
|---|---|
| #1 IPA-into-surface ×13 | ✓ fixed+verified |
| #2 bo_sino IPA | ✓ fixed+verified |
| #3 hak_cn initial | ✓ fixed+verified (tone aligned to hak_mz) |
| #4 ko_kp surface | ✓ fixed+verified |
| #5 行 key rename | ✓ fixed+verified |
| #7 中:2 vi IPA | ✓ fixed+verified |
| #8 行:2 vi length | △ partial (tied to #6) |
| #11 北 Hakka aspiration | ✓ fixed+verified |
| #10 北 base rows | ✓ resolved+verified |
| #6 vi three-reading split | △ actionable — still open |
| #9 中 ja non-contrast | ✓ accept won't-fix |
| #12 null zh_kanbun | ✓ accept won't-fix |
| #13 nan_my gap | ✓ accept known-gap |
| #14 bo_sino mirror | ✓ accept won't-fix |

10 of the original errors are fixed-and-verified in live data; 4 items accepted as defensible convention / known-gap. One concretely actionable restructuring remains: **#6** (re-home `hành` to `行:1.vi`, reduce `行:2.vi` to `hàng`, drop `hạnh`), which also closes out the residual #8 length marks. Because that is a real, not-yet-attempted, mis-homed-data fix with a clear target shape, the file is not yet closed.

**File status: OPEN** — Dev team next step: create `HAN_VARIANTS["行:1"].vi = [{surface:"hành", ipa:"haɲ˨˩", label:"đi, làm (walk/act)"}]`, reduce `HAN_VARIANTS["行:2"].vi` to the single `hàng` entry, and delete the `hạnh` entry (which also resolves the two stray `haː` length marks in #8).

---

## Worker round-2 response (作業者round-2)

Re-loaded `hanmap_data.js` into a fresh VM context and verified every "Current" value verbatim. The reviewer's round-2 scorecard closed out all items except **#6**, for which the reviewer supplied an explicit, endorsed target shape ("File status: OPEN" dev next-step). Applied that one restructuring; everything else stands as the reviewer adjudicated.

**#6 — `行:2 vi` three readings (hành/hàng/hạnh) → split — APPLIED (applied by orchestrator this round).** Implemented the reviewer's endorsed target shape exactly:
- Created `HAN_VARIANTS["行:1"].vi = [{surface:"hành", ipa:"haɲ˨˩", label:"đi, làm (walk/act)"}]` (the 行為 walk/act reading), inserted directly after the `行:1` `ja` key. The IPA uses short `a` (`haɲ˨˩`) to match the main row `HAN_DATA["行:1"].ipa.vi` convention — this simultaneously resolves the residual **#8** length mark (`haːɲ`→`haɲ`) for this row.
- Reduced `HAN_VARIANTS["行:2"].vi` to the single `hàng` entry (`haŋ˨˩`, the 行列 row/business reading, already short-`a` and untouched).
- Dropped the phantom-third-sense `hạnh` (`haːɲ˨˩ʔ`): 去聲 Sino-Viet of 行 *xìng* 'virtue', 廣韻 下更切, which maps to neither project sense per `HAN_SENSE_LABELS` (行:1 行為 / 行:2 行列). Dropping it also clears the last stray `haː` length mark flagged in #8.

`hành` is no longer mis-homed under the 行列 sense; `行:1.vi` now resolves on the canonical `行:1` overlay lookup enabled by the #5 rename. Verified `行:1` previously had no `vi` key, so this is a clean add (no clobber). Anchor for the insert is `"ipa": "aɴ"`, which occurs uniquely in the variants table (line 26062), guaranteeing the edit lands in the 行:1 `ja`/唐音 block and nowhere else.

**#8 — residual length marks — fully closed by #6.** The two remaining `haː` marks (`hành`, `hạnh`) sat on rows the reviewer agreed to defer to the #6 move; both are now gone (one normalised to `haɲ˨˩` and re-homed, one dropped). No standalone #8 edit needed.

### Items left as reviewer-adjudicated (no action)

- **#9** (中 ja identical 漢音/呉音 chū) — reviewer ACCEPT as won't-fix (correct phonology, presentation-policy call). Held.
- **#12** (行:1 null `zh_kanbun`) — reviewer ACCEPT as won't-fix (intentional null placeholder convention). Held.
- **#13** (`nan_my` one-sided on 行:2) — reviewer ACCEPT as known-gap; colloquial `kiâⁿ` for Malaysian Hokkien not offline-sourceable, will not invent. Held.
- **#14** (bo_sino mirror onto 中:2) — reviewer ACCEPT as won't-fix (coverage-design call). Held.

Net this round: 1 restructuring applied as 2 structured edits (create `行:1.vi`; reduce `行:2.vi` to `hàng` + drop `hạnh`), which also closes #8. 0 items left open as needing-decision — the 4 remaining items are reviewer-confirmed won't-fix / known-gap.

**File status: ready to CLOSE** — the one concretely actionable defect (#6) is resolved exactly to the reviewer's endorsed target shape; all other findings are either fixed-and-verified in prior rounds or accepted by the reviewer as defensible convention.

---

## Reviewer round-3 response (再評価 round-3)

Re-loaded `hanmap_data.js` into a fresh VM context and verified every value the worker round-2 claims, plus re-checked all previously-accepted items still stand in live data (guarding against silent regression).

**#6 — `行:2 vi` three-reading split — ✓ ACCEPT (verified in live data).** Confirmed the worker's restructuring landed exactly as the round-2 endorsed target shape:
- `HAN_VARIANTS["行:1"].vi` now exists and equals `[{native:"", surface:"hành", ipa:"haɲ˨˩", label:"đi, làm (walk/act)"}]` — short `a`, the 行為 reading, resolving on the canonical `行:1` lookup enabled by the #5 rename.
- `HAN_VARIANTS["行:2"].vi` is now the single `[{surface:"hàng", ipa:"haŋ˨˩", label:"hàng ngũ, thương hàng (row/business)"}]`.
- The phantom-third-sense `hạnh` is GONE — a JSON scan of both `行:1`/`行:2` variant blocks returns `contains hạnh: false`. `hành` is no longer mis-homed under the 行列 sense. Clean move, no clobber (`行:1` had no prior `vi` key).

**#8 — residual `行:2 vi` length marks — ✓ ACCEPT (fully closed by #6, verified).** The two stray Vietnamese `haː` marks (on `hành` and `hạnh`) are gone: `hành` re-homed as `haɲ˨˩` (short), `hạnh` dropped. I scanned the entire 行 variant block for any remaining `haː`: the only hits are in the **Cantonese** entries (`yue`/`yue_gz`/`yue_hk`/`yue_mo`) where `haang4` → `haːŋ` — this is the correct Yue /aː/ long-vowel 白讀 contrasting with 文讀 `hang4` /hɐŋ/, which is phonemic in Cantonese and entirely unrelated to the Vietnamese #8 finding. Not a defect; no Vietnamese length mark survives.

**Regression re-check of all prior-accepted items (live data, this round):**
- #1 — `行:2` 13 city surfaces: scan for `[ŋãæ̃]` glyphs returns empty; `zh_xa` = `hang²⁴` etc. Still fixed.
- #2 — `中:1 bo_sino` ipa = `ʈʂuŋ˥` / surface `krung`. Still fixed (no Mandarin `⁵⁵`).
- #3 — `中:1 hak_cn` = `chûng`/`tʃuŋ˦˦`. Surface/IPA initials agree. Still fixed.
- #4 — `中:1 ko_kp` = `jung`/`tsuŋ`. Still fixed.
- #5 — bare `"行"` key absent; `行:1`/`行:2` present. Still fixed.
- #7 — `中:2 vi` overlay = `trung`/`ʈuŋ͡m˧`, `trúng`/`ʈuŋ͡m˧˥`. Still fixed.
- #10 — `北 hak_cn` main row = `pet`/`pet̚˨` present; overlay `pet`(白)/`pak`(文). Base rows present, de-aspirated. Still resolved.
- #11 — `北` Hakka overlays de-aspirated (`pak`/`pak̚`, no `pʰ`). Still fixed.

**Won't-fix / known-gap items (#9, #12, #13, #14)** — unchanged and re-affirmed as defensible: #9 中 ja non-contrast (correct phonology, presentation policy); #12 `行:1.surface.zh_kanbun=null` placeholder convention; #13 `nan_my` one-sided (colloquial `kiâⁿ` not offline-sourceable — documented known gap, not invented); #14 `bo_sino` single-sense placement (coverage-design call).

### New issues

None. The targeted re-scan surfaced no new defensible errors; the lone surviving `haː` is correct Cantonese, not leakage.

### Scorecard (round-3, final)

| Item | Verdict |
|---|---|
| #1 IPA-into-surface ×13 | ✓ fixed+verified |
| #2 bo_sino IPA | ✓ fixed+verified |
| #3 hak_cn initial | ✓ fixed+verified |
| #4 ko_kp surface | ✓ fixed+verified |
| #5 行 key rename | ✓ fixed+verified |
| #6 vi three-reading split | ✓ fixed+verified (this round) |
| #7 中:2 vi IPA | ✓ fixed+verified |
| #8 行:2 vi length | ✓ fully closed by #6 |
| #10 北 base rows | ✓ resolved+verified |
| #11 北 Hakka aspiration | ✓ fixed+verified |
| #9 中 ja non-contrast | ✓ accept won't-fix |
| #12 null zh_kanbun | ✓ accept won't-fix |
| #13 nan_my gap | ✓ accept known-gap (documented) |
| #14 bo_sino mirror | ✓ accept won't-fix |

All 10 original clear errors are fixed-and-verified in live data. The 4 remaining items are reviewer-accepted as defensible convention or documented known-gaps (the only genuinely-unsourceable one, #13, is closed with a "known limitation, needs human linguist" caveat rather than an impossible demand). Nothing actionable remains.

**File status: CLOSED** — nothing left to address.
