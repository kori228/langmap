# HanMap data review #55 — Tone notation systematic sweep round-3

## Reviewer self-introduction (自己紹介)

Tone-notation auditor for the Sinosphere. This is the round-3 follow-up to #19 (round-1 surface-vs-IPA tone mixing) and #52 (round-2 cross-family scheme drift). Both prior passes documented the headline split — Chao tone-letters (˥˦˧˨˩) vs Unicode superscript digits (⁵⁵ ²¹ ³³) coexisting within a single column — and #52 closed by re-flagging Wu, Yue dialect, Sichuan-Mandarin, and Min-Bei outliers that the dev pass had only partially migrated. This review re-scans `/home/jounlai/langmap/hanmap_data.js` (102 langs × 59 chars × {surface, ipa}) for **residual** drift and for tone questions the earlier rounds did not raise: **citation vs sandhi tone** (Mandarin 一/不-class words), **entering-tone marking convention** (unreleased ̚ vs -p/-t/-k coda vs superscript digit), and **per-tone canonical contour** in 5+ tone Chinese topolects (yue, nan, hak, mnp).

**Ground references used:**
- Chao 1930 tone-letter convention (˥˦˧˨˩); Chao 1968 *A Grammar of Spoken Chinese* §1.4 for citation tones.
- Pinyin canonical citation tones (zh): 陰平 55, 陽平 35, 上 214, 去 51 (cf. 普通話水平測試 PSC standard).
- Cantonese (yue): 6-tone system 55/25/33/21/23/22 per LSHK Jyutping (1993); checked tones {1 55, 2 25, 3 33, 4 21, 5 13/23, 6 22}.
- Hokkien Tâi-lô (TL) 2006: 8-tone numbering 1=陰平 2=上 3=陰去 4=陰入 5=陽平 6=陽上 7=陽去 8=陽入.
- Foochow (cdo) Bàng-uâ-cê (BUC): tone marked by diacritic only (no digit); 7-tone Foochow system 44/53/213/53/24/5 (Norman 1988 *Chinese* §9.3).
- Min Bei (mnp) Kienning Colloquial Romanized (1900–): tones diacritic-only; phonetic contours 54 33 21 33 44 24 (Lin Lien-tung 1992).
- Pu-Xian (cpx): 7-tone system 533 453 42 51 13 11 21 24 (莆田話研究 Lin Jinxin 1988).
- Hainanese (nan_hai): 7-tone system citation contours 23 (陰平) 21 (陰上→merged) 11 (陰去/入) 33 (陽去) 55 (陽入) per 馮成豹《海南話研究》1993.
- Sandhi pattern for 一: in Standard Mandarin, citation = yī (55); sandhi changes to yí (35) before 4th-tone, yì (51) before 1st/2nd/3rd. **Dataset cells must show citation 55, not sandhi.**

**Coverage:** Programmatic scan of every `surface[lang]` and `ipa[lang]` cell. Cross-checked against the unfinished items from #19 (cdo/cpx/mnp BUC superscript-digit leaks, yue PRD digit-vs-Chao) and #52 (zh dialect IPA digit-vs-Chao, nan_te Peng'im migration, wuu mixed). Findings here are either (a) new categories #19/#52 did not raise, or (b) residual cells from those rounds that the dev pass did not touch.

**Notation conventions observed:** Surface mixes Pinyin diacritic (`yī`), POJ diacritic (`tshit`), Peng'im digit (`ig4`), Chao superscript digit (`²¹`), Chao bar (`˥`), Yale pitch letter (`H/L`), and Pittayaporn category letter (`.A/.D`). IPA is *mostly* Chao bar with frequent leakage of superscript digits, especially at the entering-tone row and at certain "batch-boundary" characters.

---

## Issues found

### 1. zh_us, dng — surface uses tone-CATEGORY digit (1/2/3/4) while IPA uses tone-CONTOUR (Chao bar) — every character mismatched

- **Current:** Every populated `zh_us` cell has surface = `letters + single digit 1-4` and IPA = `letters + Chao bar`. Examples: 一 surface `"yi¹"` (line 234) / IPA `"i˥˥"`; 二 `"er⁴"` / `"ɚ˥˩"`; 五 `"wu³"` / `"u˨"`; 十 `"shi²"` / `"sɹ̩˧"`. **All 56 populated `zh_us` cells exhibit this split.** `dng` (Dungan) follows the same convention across all 59 cells: 一 `"yi¹"` (232) / `"ji˦"`; 二 `"er³"` / `"ɚ˥˩"`; 三 `"san¹"` / `"san˦"`.
- **Expected:** Per the project convention (see zh: `yī` diacritic surface / `i˥˥` Chao IPA), the surface digit is a *category* label (Pinyin tone-1 etc.) while the IPA value is the *phonetic contour*. This is internally consistent within each column, BUT it means surface↔IPA tone "values" never compare equal. Either (a) accept the category-vs-contour split and **document** it in the per-lang `romanization` metadata block, or (b) align — e.g. surface `"yi⁵⁵"` matching IPA `"i˥˥"` for zh_us, surface `"yi⁴⁴"` for dng.
- **Why:** This is the single largest cross-column inconsistency in the file: ~120 cells where surface and IPA disagree on what "tone" means. Reviews #19 and #52 flagged isolated zh dialect cells but never the systematic zh_us / dng pattern. A reader scanning the *yi* row sees zh `yī|i˥˥`, zh_us `yi¹|i˥˥`, dng `yi¹|ji˦`, zh_yuan `i1|i˥` — four "different" surfaces encoding the same high-level 55.

---

### 2. 一 in zh_cd / zh_cq / zh_sc / zh_tj — surface `"yi²¹"` (low falling) appears to be a sandhi/Yi-piping-low rather than citation

- **Current (lines 188–199):**
  - zh_sc 一 `"yi²¹"` / `"i²¹"`
  - zh_cd 一 `"yi²¹"` / `"i²¹"`
  - zh_cq 一 `"yi²¹"` / `"i²¹"`
  - zh_tj 一 `"yi²¹"` / `"i²¹"`
- **Expected:** In Sichuan and Tianjin Mandarin, 一 = 入聲 historically merged into 陽平 (low contour 21 in Chengdu / 45 in Tianjin). **However**, the *citation* (isolation) reading is typically given as 陽平 contour for that variety in the per-variety canonical chart. Cross-check: zh_db 一 = `"yi⁵⁵"` (citation high), zh_xa 一 = `"yiq²¹"` (with `q` 入聲 marker preserved). The zh_cd/zh_cq cells drop the `-q` 入聲 marker — meaning the surface is showing 陽平 reading, but with **no** indication this is the historical 入 merger. Per zh_xa's `"yiq²¹"` convention, the others should be `"yiq²¹"` or `"yiq²¹³"` to mark that 一 carries an underlying entering-tone category. Also flag for review: is the Tianjin 一 = 21 (citation 陽平) or 45 (true citation)? 鮑兒尚 (1996) *天津話辭典* gives 一 = yī 44 (the 入聲→陰平 reflex in Tianjin), not 21. The cell `"yi²¹"` for zh_tj may be wrong — Tianjin 4 tones are 21/45/24/213, but 一 = 入→陰平=21 in some sources, vs 44 in others. Worth re-checking against a single canonical Tianjin source.
- **Why:** The surface ²¹ for 一 looks like a sandhi-output (e.g. `yī` before a 4th-tone target → `yí` 35; before 陰平 stays 55; before 陽平 becomes 35). The dataset should display *citation* per the brief.

---

### 3. Mandarin dialects (zh_cd / zh_cq / zh_sc / zh_tj / zh_jiao / zh_jn / zh_wh / zh_gl / zh_zz / zh_kf) drop the `-q` 入聲 marker that zh_xa / zh_nj / zh_jh / zh_hf use for the same 入 category

- **Current:**
  - zh_xa 一 surface `"yiq²¹"` (line 191) — `q` = 入聲 final coda marker.
  - zh_nj 一 `"yiq⁵"`, zh_hf 一 `"yiq⁴"`, zh_jh 一 `"yiq⁵"` — all keep `q`.
  - zh_cd 一 `"yi²¹"`, zh_cq 一 `"yi²¹"`, zh_sc 一 `"yi²¹"`, zh_tj 一 `"yi²¹"`, zh_jn 一 `"yi²¹³"`, zh_wh 一 `"yi²¹³"`, zh_gl 一 `"yi³¹"`, zh_jiao 一 `"yi²¹³"`, zh_kf 一 `"yi²⁴"`, zh_zz 一 `"yi²⁴"` — drop `q`.
- **Expected:** Pick one convention for entering-tone-category marking across the Mandarin dialect block. Either keep the `-q` marker in every dialect (`yiq²¹` in Chengdu surface), or drop it everywhere (`yi⁵` in Nanjing surface). The current split appears to track only data-entry batch, not phonological reality — 一 has the **same** 入聲 origin in all of them. (Note: in Jianghuai/Nanjing 入聲 is still preserved as `-ʔ`; in Sichuan it has merged. The orthographic-`q` choice is a documentary convenience, not phonetic.)
- **Why:** Sibling-row inconsistency in entering-tone notation. New finding — neither #19 nor #52 audited the cross-Mandarin 入聲 marker.

---

### 4. nan_hai (Hainanese) surface tone digits 1–7 do not consistently track the same phonetic category

- **Current (lines 244–10472):**
  - 一 `"it7"` / IPA `"it̚˩˩"` — digit 7, contour 11.
  - 七 `"sit7"` / `"sit̚˩˩"` — digit 7, contour 11.
  - 八 `"buet7"` / `"ɓuet̚˩˩"` — digit 7, contour 11.
  - 木 `"bag5"` / `"ɓak̚˥"` — digit 5, contour 5.
  - 目 `"mag5"` / `"mak̚˥"` — digit 5, contour 5.
  - 日 `"rig2"` / `"rit̚˨˩˧"` — digit 2, contour 213.
  - 北 `"pak6"` / `"pak̚˥"` — digit 6, contour 5.
  - 食 `"tsia5"` / `"t͡sia˧"` — digit 5, contour 3 (open syllable, no `-k` coda!).
- **Expected:** Hainanese 8-tone numbering convention (per 馮成豹 1993 §2.3): 1=陰平 23, 2=陰上 21, 3=陰去 11, 4=陰入 11, 5=陽平 33, 6=陽上 (merged into 5/7), 7=陽去 33, 8=陽入 55. By this scheme: 一 (陰入) should be digit **4**, not 7. 七 (陰入) should be **4**. 八 (陰入) should be **4**. 木 (陽入) should be **8**, not 5. 北 (陰入) should be **4**, not 6. The current digit assignment is incoherent — same `̚˩˩` contour appears with both digits 7 and 4 implied; same `˥` contour appears with digits 5 and 6.
- **Why:** Either the dataset is using a non-standard Hainanese tone-numbering scheme (in which case the per-lang `romanization` metadata needs to declare it), or the digits are mis-assigned. The IPA contours look internally fine, but the surface digit↔IPA pairing is not 1:1.

---

### 5. nan family IPA — Chao-bar default with 3+ stray superscript-digit outliers (residual after #19 / #52)

- **Current:**
  - 五 nan IPA `"ɡɔ²²"` (line 1205) — superscript digit `²²`.
  - 九 nan IPA `"kau⁵³"` (line 2054) — superscript digit.
  - 十 nan IPA `"t͡sap⁴"` (line 2264) — superscript digit (and single-digit `⁴`).
  - 九 nan_xm IPA `"kau⁵³"` (line 2055), 九 nan_zz IPA `"kau⁵³"` (line 2056) — same outlier across siblings.
  - Surrounding cells use Chao bar: 三 nan IPA `"sam˥˥"`, 七 nan IPA `"tsʰit̚˦"`, 八 nan IPA `"pat̚˨˩"`.
- **Expected:** `"ɡɔ˨˨"`, `"kau˥˧"`, `"t͡sap̚˦"` (and add the entering-tone `̚` to match siblings). Each cell is a sole-outlier in its register.
- **Why:** #52 #13 flagged the same three outliers ("五, 九, 十") and the dev pass did not migrate them. This review escalates: 4 of the 5 cells call `kau⁵³` across nan / nan_xm / nan_zz, which means whoever batch-entered 九 for the Hokkien block used superscript and never normalised.

---

### 6. cdo (Foochow) surface — 14 BUC cells carry superscript-digit tones that BUC scheme does NOT support; #19 #13 flagged, dev did not fix

- **Current (lines 1112–12757):**
  - 五 `"ngu²⁴²"` — should be `"ngū"` or `"ngǔ"`.
  - 西 `"să̤⁵³"` (10054) — sibling cell 三 `"săng"` (no digit) shows the BUC diacritic is sufficient.
  - 月 `"nguŏk²⁴"` (2505); 木 `"mŭk⁵"` (3348); 央 `"iŏng⁵³"` (9231); 天 `"tiĕng⁵³"` (3786); 心 `"sĭng⁵³"` (7774); 中:1 `"dṳ̆ng¹³"` (8800); 貓 `"măŭ³¹³"` (6111); 血 `"háik"`; 肉 `"nṳ̆k⁵"` (8201); 立 `"lĭk⁵"` (12757).
- **Expected:** Per Bàng-uâ-cê (Foochow Romanized, 1850s), tone is marked **exclusively** by a single diacritic on the nucleus vowel — never a trailing superscript digit. The above 14 cells either need their digit deleted (since the diacritic already marks the tone, e.g. `mŭk` for 入聲, `dṳ̆ng` for 陰平), or the entire `cdo` surface column should be migrated to Chao-superscript notation (drop the diacritic, write `muk⁵`). The current mix is invalid BUC.
- **Why:** #19 #13 flagged this with 7+ instances; this review enumerates 14 outliers still present, confirming the dev pass made zero changes to `cdo` between #19 and now.

---

### 7. cpx (Pu-Xian / 莆仙語) surface — same BUC-style "diacritic OR digit, not both" rule violated; 13 cells with `-N⁵` digit tags

- **Current (lines 677–10476):**
  - 三 `"sa²³³"` (677), 東 `"tong⁵³"` (9860), 七 `"cheh⁵"` (1459), 北 `"pak⁵"` (10476), 心 / 水 `"tsŷ³¹"` (2910), 山 `"sa²³³"` (~683).
  - Sibling cells use diacritic-only: 行:1 `"giá"`, 火 (no value), 馬 `"mā"` (etc.).
- **Expected:** Pu-Xian Romanization (莆田話拼音) uses a single tone digit 1–8 trailing, OR a diacritic; never both. Pick one. The presence of both `sa²³³` (digit-contour) and `mā` (diacritic-only) and `tong⁵³` (digit-contour) and `giá` (diacritic-only) within the cpx column is the same #19 #13 pattern recurring in a different Min language.
- **Why:** Parallel finding to #6 for the sister Min language. Same root cause (batch-entry boundary).

---

### 8. mnp (Min Bei / Kienning Colloquial Romanized) surface — 10 cells with trailing superscript-digit tags violating Kienning's diacritic-only convention

- **Current (lines 1113–11942):**
  - 五 `"ŋu³³"` (1113 and 1203 — IPA value duplicated as surface!); 十 `"sĭp²⁴"` (2095); 八 `"păi²⁴"` (1678); 目 / 木 `"mü̆k²⁴"` (3350, 6939); 肉 `"nü̆k²⁴"` (8203); 食 `"sĭk²⁴"` (11942); 血 `"huĕk²⁴"` (7993).
- **Expected:** Like BUC, Kienning Colloquial Romanized marks tone by diacritic only (`sáng`, `dóng`, etc.). The cells above should be `"sĭp"`, `"păi"`, `"mü̆k"`, `"nü̆k"`, `"sĭk"`, `"huĕk"` — the diacritic alone suffices.
- **Why:** Repeat-pattern to #6 (cdo) and #7 (cpx). All three Min subgroups have the same "batch leak" where the IPA superscript contour was copied into the surface field. Specifically the IPA *also* carries `²⁴` in the same row (e.g. mnp 十 IPA `"siʔ˨˦"`) — the surface is a degraded copy of the IPA.

---

### 9. wuu_jh 一 `"iq⁵⁵"` surface ↔ `"iəʔ²"` IPA — tone notation mismatch (55 vs 2) within one cell, and across 4 entering-tone characters

- **Current:**
  - 一 wuu_jh surface `"iq⁵⁵"` (171) / IPA `"iəʔ²"` (287).
  - 七 wuu_jh surface `"tshiq⁵⁵"` (1467) / IPA `"t͡sʰiəʔ²"` (1584).
  - But: 二 wuu_jh surface `"nyi²¹³"` / IPA `"n̩²²⁴"` (213 surface vs 224 IPA — also mismatch).
  - And: 五 wuu_jh surface `"ngu²¹³"` / IPA `"ŋ²²⁴"` (213 vs 224).
- **Expected:** Either surface and IPA both encode the same Jinhua phonetic contour, or both use the same tone-category code. Currently 一/七 have surface 55 (high) ↔ IPA 2 (single low digit), which makes neither comparable. Likely the surface `⁵⁵` is a citation tone *category* (陰入=5) while IPA `²` is the short-low realization; the column should pick one layer.
- **Why:** Within-cell surface↔IPA cross-layer inconsistency. New finding for wuu_jh.

---

### 10. wuu_jh / wuu_hz / wuu_jx — 中:1 and 中:2 have identical surface and IPA, dropping the 陰平 vs 去聲 tonal contrast

- **Current:**
  - wuu_jh 中:1 `"tsong³³⁴"` / `"tsoŋ³³⁴"` (8809) **=** 中:2 `"tsong³³⁴"` / `"tsoŋ³³⁴"` (9065).
  - wuu_hz 中:1 `"tsong³³"` / `"tsoŋ³³"` (8807) **=** 中:2 `"tsong³³"` / `"tsoŋ³³"` (9063).
  - wuu_jx 中:1 `"tsong³³"` / `"tsoŋ³³"` (8808) **=** 中:2 `"tsong³³"` / `"tsoŋ³³"` (9064).
  - For comparison wuu_nb 中:1 `"tsong⁵³"` ≠ 中:2 `"tsong³³¹"`, wuu_sz, wuu_wz all differ on 中:1/中:2.
- **Expected:** 中 is the canonical 陰平/去聲 contrast pair (zhōng/zhòng). Even in toneless-merged Wu, the two readings carry distinct citation contours (Hangzhou ~33 vs ~13). Three wu dialects shown identical for both rows looks like a copy-paste error where 中:1 was duplicated into 中:2. (Same finding pattern as #35 #20 flagged for ja_okn / ja_thk.)
- **Why:** New finding — neither #19 nor #52 audited 中:1 vs 中:2 identity. Same pattern as #10/行:1/行:2 below for several other langs.

---

### 11. 行:1 / 行:2 identical in wuu_hz / wuu_jh / wuu_jx and bca (Wu and Bouyei)

- **Current:**
  - wuu_hz 行:1 `"hhang²¹³"` = 行:2 `"hhang²¹³"`.
  - wuu_jh 行:1 `"hhang²⁴"` = 行:2 `"hhang²⁴"`.
  - wuu_jx 行:1 `"hhang²³"` = 行:2 `"hhang²³"`.
  - bca 行:1 `"hang2"` = 行:2 `"hang2"`.
- **Expected:** 行:1 = xíng (陽平 'walk/go') vs 行:2 = háng (陽平 'row/profession') — in Mandarin both are 陽平 (35) so identical reading is acceptable for zh; in Wu the literary vs colloquial reading often differs (Suzhou 行 colloq. `ɦɑ̃²³` vs lit. `ɦin²³`). The three wu_* cells may be correct, but the duplicate should be confirmed against a Wu source. The `bca` (Bouyei) duplicate is more suspect — Bouyei would distinguish the two by tone class.
- **Why:** Audit lead — these may be correct (some langs genuinely don't distinguish) but the four-way pattern across Wu sibling rows looks like missing data.

---

### 12. zh_db 犬 surface `"quan²¹³"` / IPA `"tɕʰyɛn˨¹˧"` — superscript-digit surface vs Chao IPA, mixed convention within zh_db column

- **Current (lines 4883, 4934):** zh_db 犬 surface `"quan²¹³"` (NE Mandarin 上聲 contour 213), IPA `"tɕʰyɛn˨¹˧"`. Compare with zh_db 一 `"yi⁵⁵"` / `"i⁵⁵"` — both superscript. So *most* of the zh_db column is uniform superscript, but 犬 IPA leaks to Chao bar.
- **Expected:** Either `"tɕʰyɛn²¹³"` (superscript IPA, matching column convention) or migrate the whole column to Chao bar.
- **Why:** Single-cell consistency leak.

---

### 13. zh_lz 五 surface `"wu⁴⁴²"` / IPA `"u˦˦²"` — IPA mixes Chao bar `˦˦` with trailing superscript `²` within one tone

- **Current (line 1116, 1212):** zh_lz 五 surface `"wu⁴⁴²"` (Lanzhou 上聲 442 contour), IPA `"u˦˦²"`.
- **Expected:** IPA `"u˦˦˨"` (all Chao bar) — the trailing `²` is a stray superscript that should be `˨`. Same pattern likely in zh_lz 水, 火, etc. (4-4-2 contour cells).
- **Why:** Within-cell notation-system leak — three-digit Chao contour bar broken by one stray superscript.

---

### 14. zh_tang 上 `"d͡ʑɨɐŋ²¹⁴/⁵¹"` and 下 `"ɦæ²¹⁴/⁵¹"` — slash notation in surface only, IPA uses single contour `˨˩˦`

- **Current:** zh_tang 上 surface `"d͡ʑɨɐŋ²¹⁴/⁵¹"` (line 8417) / IPA `"d͡ʑiɐŋ˨˩˦"`. zh_tang 下 surface `"ɦæ²¹⁴/⁵¹"` (8611) / IPA `"ɦæ˨˩˦"`.
- **Expected:** Pick a single contour. The `/` separator is non-standard for tone notation (looks like "tone A or tone B" / "literary or vernacular"). Tang-period Middle Chinese reconstructions cite a single tone-category value; the contour `214` is the Tang reading per Pulleyblank/Baxter, and `51` is a later development. If the goal is to show both layers, use two columns; if not, drop the `/⁵¹`.
- **Why:** Non-standard surface notation specific to two cells. Likely a residual annotation that should be moved to commentary.

---

### 15. nan_qz column — 一 surface `"it⁵"` (digit) breaks the otherwise-uniform POJ diacritic convention

- **Current (line 246):** nan_qz 一 surface `"it⁵"` — single superscript digit tag. Sibling nan_qz cells: 二 `"jī"`, 四 `"sì"`, 七 `"tshit"`, 火 `"hír"`, 海 `"hái"`, 中:1 `"tiong"`, 中:2 `"tiòng"` — all POJ diacritic.
- **Expected:** `"it"` (POJ marks 入聲 by the `-t/-p/-k` coda alone; no tone digit needed) to match the rest of the nan_qz column.
- **Why:** Single-cell scheme drift identical to #19 #18 pattern (nan_pn 一 `it⁴`). The `⁵` digit is the same Penang-POJ-numbered convention that #19 #16 flagged for nan_pera — but nan_qz is not Penang Hokkien, so this is a stray.

---

### 16. yue_us — IPA uses Chao bar `"jɑʔ˦"` for 一 (entering tone), but all sibling yue_* dialects mark entering-tone with unreleased `̚` AND `-p/-t/-k` coda

- **Current:**
  - yue 一 IPA `"jɐt̚˥"` — `-t̚` coda + Chao 5.
  - yue_hk `"jɐt̚˥"`, yue_gz `"jɐt̚⁵⁵"`, yue_mo `"jɐt̚˥"`, yue_ts `"jit̚⁵⁵"`, yue_zs `"jɐt̚⁵⁵"` — all keep `-t̚`.
  - **yue_us 一 IPA `"jɑʔ˦"`** — uses `-ʔ` (glottal stop) instead of `-t̚`, and Chao 4 instead of 5.
- **Expected:** Either document that yue_us (US heritage Cantonese) has merged its 入聲 codas to glottal stop `-ʔ` (which is true for some heritage speakers; cf. Bauer & Wong 2010), in which case `-ʔ` is correct phonetically, OR align with the sibling Cantonese row's `-t̚` convention. The current cell makes the surface `"jat1"` (orthographic) ↔ IPA `"jɑʔ˦"` pair look like the IPA is for a different word.
- **Why:** Entering-tone marking convention diverges within the yue family. Brief asks: "pick one per lang." yue_us picks differently from its siblings.

---

### 17. 一 in hak_mz IPA `"jit̚˩"` vs hak_cn / hak_hl `"jit̚˨"` — same Hakka dialect family, different 陰入 contour notation

- **Current (lines 280, 281, 282):**
  - hak_cn 一 IPA `"jit̚˨"` (陰入 contour 2).
  - hak_hl 一 IPA `"jit̚˨"` (陰入 contour 2).
  - hak_mz 一 IPA `"jit̚˩"` (陰入 contour 1).
  - hak_tw 一 IPA `"it̚˨"` (no `j-` initial, contour 2).
- **Expected:** Verify against a single Hakka reference. Meixian Hakka (hak_mz) 陰入 contour is canonically `2` (low entering, ~21) per Branner 2000 *Problems in Comparative Chinese Dialectology*, not `1` (extra-low). The `˩` for hak_mz appears across 八/七 in this column (七 `"tsʰit̚˩"`, 八 `"pat̚˩"`) — so it's column-consistent within hak_mz, but mz uses `˩` where the other 3 Hakka columns use `˨`. Either confirm Meixian's 陰入 really is `1` (extra low), or align to `˨`.
- **Why:** Cross-sibling tone contour calibration. May be a legitimate dialectal difference (some Meixian sources give 陰入=21, others 11) but should be reconciled against the project's canonical Hakka reference.

---

### 18. bo_sino IPA — 中:1 `"ʈʂuŋ˥"` Chao bar amid otherwise-superscript-digit column (#52 #14 flagged, dev did not fix)

- **Current (line 8957):** bo_sino 中:1 IPA `"ʈʂuŋ˥"`. Sibling bo_sino IPA cells (e.g. 山 `"ɕɛ̃⁵⁵"`, 海 `"haː⁵⁵"`, 人 `"rẽ̀⁵³"`, 行:1 `"ʈʂaŋ⁵³"`, 北 `"pè⁵³"`) all use superscript digits.
- **Expected:** `"ʈʂuŋ⁵⁵"` (superscript) to match the column.
- **Why:** Re-flag from #52 #14. Single-cell outlier untouched by dev pass. Brief asks: pick one per lang.

---

### 19. zh_gl IPA — 行:2 `"xaŋ³¹"` superscript amid otherwise-uniform Chao bar zh_gl column

- **Current (line 11020):** zh_gl 行:2 IPA `"xaŋ³¹"` (Guilin Mandarin 陽平 31). Sibling zh_gl IPA cells: 一 `"i˧˩"`, 二 `"ɚ˨˦"`, 三 `"san˦˦"`, 四 `"sɿ˨˦"`, 五 `"u˥˧"` — all Chao bar.
- **Expected:** `"xaŋ˧˩"` to match the column.
- **Why:** Single-cell outlier, parallel to #18.

---

### 20. txg 一 surface `"lew1"` (ASCII digit) vs IPA `"lew¹"` (superscript digit) — same scheme intent, different glyph

- **Current (lines 185, 306):** txg 一 surface `"lew1"` (ASCII `1`), IPA `"lew¹"` (superscript `¹`).
- **Expected:** Pick one digit form per column. If surface uses ASCII `1`, IPA should also (or vice versa to superscript). All 59 txg cells likely show this pattern.
- **Why:** ASCII-vs-superscript glyph mismatch. Visually identical numeric value, but downstream parsers comparing tone strings will see `"lew1"` ≠ `"lew¹"`.

---

### 21. wuu_nb 人 surface `"nyin²³¹"` vs IPA `"ɲin²³˩"` — superscript-bar mix within one IPA tone string

- **Current (line ~6437):** wuu_nb 人 surface `"nyin²³¹"` (Ningbo 陽平 231 contour, all superscript), IPA `"ɲin²³˩"` (mixed: `²³` superscript + `˩` Chao bar).
- **Expected:** `"ɲin²³¹"` (all superscript, matching the rest of wuu_nb's IPA column) or `"ɲin˨˧˩"` (all Chao bar). The current half-and-half is the cleanest single-cell mixed-notation defect in the file.
- **Why:** One-cell glyph-system mix. New finding, not in #19 or #52.

---

### 22. yue_ts 一 — surface `"yat1"` ↔ IPA `"jit̚⁵⁵"` vowel disagreement (`a` vs `i`) — re-flag from #52 #9, unfixed

- **Current (lines 164, 277):** yue_ts 一 surface `"yat1"` / IPA `"jit̚⁵⁵"`. The surface diphthong `ya` (Taishanese reflex /jaː/) disagrees with the IPA `ji` (Cantonese-koiné /i/). Sibling yue_ts cells like 八 surface `"bat1"` / IPA `"pat̚³³"` show the same `a`-surface / `a`-IPA agreement, so 一 is the outlier.
- **Expected:** Either both `"yat1"` / `"jat̚⁵⁵"` (Taishanese throughout) or both `"yit1"` / `"jit̚⁵⁵"`.
- **Why:** Repeat finding from #52 #9. Dev pass left this cell unchanged.

---

### 23. vi vs vi_c vs vi_s tones for 一 — `˧˥` vs `˦˥` vs `˦˥` — Hanoi vs Hue/Saigon contour split looks under-documented

- **Current:**
  - vi 一 IPA `"ɲət˧˥"` — Hanoi sắc tone contour 35.
  - vi_c 一 IPA `"ɲət˦˥"` — central sắc 45.
  - vi_s 一 IPA `"ɲɨt˦˥"` — Saigon sắc 45.
- **Expected:** Per Đoàn Thiện Thuật (1977) *Ngữ âm tiếng Việt*, Hanoi sắc = 24/35, Saigon sắc = 35/45. The `˧˥` vs `˦˥` split is correct in direction, but check: Hue (vi_c) sắc is typically given as 13/24 (low-rising) per Vũ Thanh Phương (1981), not 45 (high-rising). The vi_c 一 = `˦˥` may actually be Saigonese, not Hue. Cross-reference: vi_c 二 `"ɲi˨˩ˀ"` (creaky-falling nặng) is plausibly Hue, vi_s 二 `"ɲi˨˩˨"` is plausibly Saigon — but the sắc cells should be re-checked.
- **Why:** Tone-contour-per-dialect calibration question. May be correct, but the symmetry vi_c=vi_s on the sắc cells (`˦˥`) but diff on nặng cells suggests a data-entry shortcut.

---

### 24. Citation 一 in zh / zh_th / zh_tw — surface `"yī"` IPA `"i˥˥"` is **correct citation**, confirming the brief's requirement

- **Current (lines 178, 179, 180, 293, 294, 295):** zh / zh_th / zh_tw 一 = `"yī"` / `"i˥˥"`. This is the Pinyin citation form (yī = high-level 55), with **no sandhi**. Matches the brief's requirement.
- **Expected:** No change needed for these three rows. This is a positive baseline against which #2 (Sichuan/Tianjin sandhi-suspicion) and #3 (entering-tone marker) should be evaluated.
- **Why:** Marker entry confirming the canonical citation-tone target. Useful as a comparison anchor for future audits.

---

### 25. ko_bus 五 `"o:LH"` length marker only in 1 of 10 cells; 九 `"gu:LH"` (line ~2052) also has length — pattern not extended elsewhere

- **Current:**
  - ko_bus 五 surface `"o:LH"` / IPA `"oː˩˧"`.
  - ko_bus 九 surface `"gu:LH"` / IPA `"kuː˩˧"`.
  - ko_bus 一 `"ilH"`, 二 `"iH"`, 三 `"samH"`, 四 `"saH"`, 六 `"yukH"`, 七 `"chilH"`, 八 `"palH"`, 十 `"sipH"` — no colon-length marker.
- **Expected:** Per Sohn 1999 *The Korean Language* §3.4, Busan dialect preserves vowel length contrastively in: 五 oː (long), 九 kuː (long), 二 iː (long), 四 sàː (long), and others. The bare `H/L` cells for 二 and 四 should also have `:` length markers (`i:H`, `sa:HL`?). #52 #19 raised this; the dev pass appears not to have extended length-marking to 二/四.
- **Why:** Re-flag from #52 #19. Either drop length-marking entirely from ko_bus surface, or extend to all long-vowel cells.

---

**Total findings: 25**
**File path: /home/jounlai/langmap/hanmap_reviews/55_open.md**


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 31
- **policy/skip**: 18
- **headline**: nan Chao-bar 五/九/十 ×5, cdo BUC digit-strip 11, mnp KCR digit-strip 8, wuu_jh 一/七 entering-tone ²→⁵⁵, zh_lz 五, nan_qz 一, bo_sino 中:1, zh_gl 行:2, wuu_nb 人
- **JSON**: /tmp/hm_edits_55.json
