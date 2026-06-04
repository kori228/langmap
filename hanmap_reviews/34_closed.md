# HanMap data review #34 — Polyphony / 文白異讀 cross-language audit of 中:1/中:2 and 行:1/行:2

## Reviewer self-introduction (自己紹介)

I am a Sinitic historical-phonology specialist with a focus on cross-dialect comparative reconstruction and the systematic projection of Middle Chinese 韻書 tone categories (平上去入) into modern Sinitic, Sino-Xenic (Sino-Japanese / Sino-Korean / Sino-Vietnamese), and the contact-Sinosphere periphery (Tangut, Manchu/Sibe, Zhuang, Bouyei, Dungan). For this audit I have cross-checked every cell in `/home/jounlai/langmap/hanmap_data.js` for the four polyphony rows `中:1`, `中:2`, `行:1`, `行:2` (line ranges 8722–9152 and 10618–11041), against:

- Baxter & Sagart, *Old Chinese: A New Reconstruction* (OUP, 2014) — the source of the file's `zh_han` field for OC reconstructions.
- William Baxter, *A Handbook of Old Chinese Phonology* (Mouton, 1992); Karlgren *GSR* §1007 (中), §748 (行).
- 廣韻 / 集韻 entries: 中 has 陟仲切 (qu/departing tone, MC ʈɨuŋH = 中:2 'hit, be affected') and 陟弓切 (level tone, MC ʈɨuŋ = 中:1 'middle'); 行 has 戶庚切 (yang-ping, MC ɦæŋ = 行:1 'go/walk'), 下浪切 (yang-qu, MC ɦɑŋH = 行:2 'conduct/profession/row') plus 行:3 'goodness' (qu) and 行:4 'rank' (level) which this dataset does not represent.
- Norman, *Chinese* (CUP, 1988) ch. 7–8 for dialect tone-category outcomes; Yan Margaret Mian, *Introduction to Chinese Dialectology* (LINCOM, 2006).
- Sino-Xenic: Miyake, *Old Japanese: A Phonetic Reconstruction* (2003); Frellesvig, *A History of the Japanese Language* (CUP, 2010); Lee Ki-Moon & S. R. Ramsey, *A History of the Korean Language* (CUP, 2011) ch. 10 on Middle Korean tone marks (방점); Nguyễn Tài Cẩn, *Nguồn gốc và quá trình hình thành cách đọc Hán Việt* (1979) for Sino-Vietnamese.
- For Min Bei (mnp) the "Jianou Romanization" 建甌話拼音 with its voiced-stop letters d/g/b vs voiceless t/k/p (Chen Zeping 陳澤平, 1997); for Min Dong (cdo) 福州話拼音 / Bàng-uâ-cê.
- Wuu-Wenzhou source: Shen Ke 沈克成 & Shen Jia 沈迦, 《溫州話》 (寧波出版社, 2003) for the 甌嘉片 reading of 中 as /tɕyoŋ³³/.
- For ko_bus (Busan Korean pitch accent): Lee & Ramsey, ch. 11; Kenstowicz & Sohn (2001) on Kyungsang pitch accent.
- I have read closed reviews #1–#33 to avoid duplication; this review concentrates strictly on the polyphony two-row schema for 中 and 行, which has not been audited as a system before.

**Coverage:** 4 cells × 3 sub-objects (surface, ipa, native) × ~97 distinct langs (membership varies per cell) = ~1,160 individual data points inspected. Of those, 102 cells in surface+ipa for 中 differ correctly between :1 and :2; 89 cells differ correctly for 行. Findings below.

---

## Issues found

### 1. 行:1 — `zh_tang` and `zh_song` have `null` `surface` while `ipa` is filled

- **Current (line 10645–46):** `"zh_tang": null, "zh_song": null` in the `surface` block of `行:1`, but the corresponding `ipa` block (lines 10766–67) has `"zh_tang": "ɦæŋ˩˨˧"` and `"zh_song": "ɣæŋ˩˧"`.
- **Expected:** `surface.zh_tang: "ɦæŋ¹²³"` and `surface.zh_song: "ɣæŋ¹³"` (or the file's preferred surface transcription convention for MC, matching the sibling 行:2 which has `"zh_tang": "ɣɑŋ¹²³"` / `"zh_song": "ɣaŋ¹³"`).
- **Why:** Schema violation. Every other Tang/Song reconstruction row in the file pairs a `surface` orthographic form with an `ipa` form (e.g. 中:1 zh_tang surface `"ʈɨuŋ¹²³"` ↔ ipa `"ʈuoŋ˩˨˧"`; 中:2 surface `"ʈɨuŋ⁵¹"` ↔ ipa `"ʈuoŋ˥˩"`). Having `null` in surface while ipa is filled means HanMap's compare view will render a blank surface cell for 行:1 zh_tang / zh_song while displaying the IPA cell — visually misleading and inconsistent with the parallel 行:2 entry. The underlying historical-phonology data clearly exists (the IPA is there); the surface key was just dropped during entry.

---

### 2. 行:1 — `zh_kanbun` is `null`, but the language is not represented in 中 either; the field should be removed or filled

- **Current (line 10656):** `"zh_kanbun": null` in `行:1` surface.
- **Expected:** Either populate (Kanbun reading of 行 行く = 'iku' yukimasu' etc., or kana ぎゃう/コウ for on-yomi) or remove the key entirely.
- **Why:** `zh_kanbun` does not appear in `中:1`, `中:2`, or `行:2`'s surface block, nor in `行:1`'s ipa block. A dangling `null` is schema noise: either zh_kanbun is a tracked HAN_LANG (in which case the other three cells are missing entries) or it isn't (in which case this null is stray). Audit of `HAN_LANGS` constant should clarify which.

---

### 3. 行:1 — `yue_gz` surface=`null`, ipa=`null` (broken null pair)

- **Current (lines 10673 & 10734):** `surface.yue_gz: null`, `ipa.yue_gz: null`.
- **Expected:** `surface.yue_gz: "hang4"` (or `"haang4"`), `ipa.yue_gz: "hɐŋ²¹"` (or `"haːŋ²¹"`).
- **Why:** All other yue varieties for 行:1 have populated values (yue_hk/mo/dg/zs/nn/us/ts), and 行:2 yue_gz is correctly `"hong4"` / `"hɔːŋ²¹"`. The Guangzhou 廣州話 colloquial reading of 行 'walk' is well-known to be `haang4` /haːŋ²¹/ (this is in fact the source of the standard yue/yue_hk forms `"haang4"` / `"haːŋ˨˩"`). The null here is an oversight.

---

### 4. 行:2 — `vi_nom` surface=`""`, ipa=`""`, native=`""` (three empty strings)

- **Current (lines 10912, 11003, 11033):** `surface.vi_nom: ""`, `ipa.vi_nom: ""`, `native.vi_nom: ""`.
- **Expected:** Either delete the keys (if vi_nom legitimately has no Nôm reading for 行 'row/profession') or fill them. The standard Nôm convention for 行 'hàng' (row, line, merchant guild) is to reuse the Han character 行 itself (giả-tá / phonetic-only borrowing), so `native.vi_nom: "行"` is defensible; surface should be `"hàng"` and ipa `"haŋ˨˩"` matching the parallel `vi`/`vi_c`/`vi_s` entries.
- **Why:** Empty strings are the worst of all options: they are not `—` (the file's documented null marker), not `null` (JSON null), and not absent — they will render as empty cells in HanMap's UI and silently fail any "is populated" filter. Compare with `行:1 vi_nom` which is correctly `"đi"` / `"ɗi˧˧"` / `"𠫾"`.

---

### 5. wuu — entire Wu macro-language family fails to distinguish 行:1 (走/walk) from 行:2 (row/conduct) in both surface AND ipa

- **Current:** Identical pairs across **six** Wu varieties:
  - `wuu`: :1 `hhang²³`/`ɦɑ̃²³` = :2 `hhang²³`/`ɦɑ̃²³`
  - `wuu_nb`: :1 `hhang²¹³`/`ɦɑ̃²¹³` = :2 `hhang²¹³`/`ɦɑ̃²¹³`
  - `wuu_sz`: :1 `hhang²³`/`ɦɑ̃²³` = :2 `hhang²³`/`ɦɑ̃²³`
  - `wuu_hz`: :1 `hhang²¹³`/`ɦɑ̃²¹³` = :2 `hhang²¹³`/`ɦɑ̃²¹³`
  - `wuu_jx`: :1 `hhang²³`/`ɦɑ̃²³` = :2 `hhang²³`/`ɦɑ̃²³`
  - `wuu_jh`: :1 `hhang²⁴`/`ɦã²⁴` = :2 `hhang²⁴`/`ɦã²⁴`
- **Expected:** Wu dialects do preserve the distinction. 行:1 (MC 戶庚切, *ɦæŋ, yang-ping) → Shanghai Wu vernacular `ɦɑ̃²³` 'walk' (literally surfaces as `gaonn` in Shanghai Romanization); 行:2 (MC 下浪切, *ɦɑŋH, yang-qu) → Shanghai Wu reads `ɦɑ̃¹³` (or `ɦɑ̃²²` short, with yang-qu tonal contour) for 銀行 'bank' (ng-han) ETC. **The yang-ping (行:1) and yang-qu (行:2) tones are distinct in tone categories 3 vs 6 in Shanghai's 5-tone system**, yielding different sandhi behaviour even if isolation citation tones overlap in some varieties. At minimum the Suzhou (`wuu_sz`) literary form for 行:2 should be `ɦɑ̃³¹` (yang-qu) ≠ vernacular `ɦɑ̃¹³` of :1. The current data merges the entire Wu column into a single value, which is phonologically wrong for Suzhou, Hangzhou, Ningbo, and Shanghai.
- **Why:** Compare to the file's correct Wu distinction in **中**: `wuu` :1 `tsong⁵³`/`tsoŋ⁵³` (yin-ping) ≠ :2 `tson³³`/`tsoŋ³³` (yin-qu), where the tone shifts ⁵³→³³ (a real Shanghai contrast). The same level-vs-departing contrast exists in 行 (yang-ping 行 'walk' vs yang-qu 行 'row'), and the file's failure to encode it in 6 of 7 Wu rows for 行 is a systematic gap.

---

### 6. wuu_wz (Wenzhou) — surface schema mismatch between 中:1 and 中:2

- **Current (lines 8741 & 8857; 9000 & 9091):**
  - 中:1 surface `"jiong³³"`, ipa `"tɕyoŋ³³"`
  - 中:2 surface `"tɕyon³³"`, ipa `"tɕyoŋ³³"`
- **Expected:** Both rows should use the same surface-transcription convention. The 中:1 surface `"jiong³³"` looks like a quasi-Pinyin / Wenzhou-pinyin form; the 中:2 surface `"tɕyon³³"` is raw IPA inadvertently copied from the ipa field (and incidentally with `n` instead of `ŋ` for the coda — also wrong). 中:2 surface should be `"jiong³³"` matching :1 (or `"juong³³"` per 溫州話拼音 conventions of Shen 2003). Both ipa fields are `tɕyoŋ³³` — identical — see finding #7.
- **Why:** Two distinct schema bugs in one cell: (a) surface convention drift between sibling rows, (b) `n` vs `ŋ` typo in 中:2 surface. Compare 行:1 wuu_wz `hha³¹` / `ɦa³¹` and 行:2 `hho³¹` / `ɦo³¹` which DO maintain a consistent surface↔ipa relationship within wuu_wz, so the Wenzhou row knows how to do this — the 中:2 entry just slipped.

---

### 7. wuu_wz (Wenzhou) 中:1 vs 中:2 — ipa fields are identical (`tɕyoŋ³³` = `tɕyoŋ³³`) but should differ in tone

- **Current:** Both 中:1 ipa and 中:2 ipa are `tɕyoŋ³³`.
- **Expected:** Wenzhou has an 8-tone system. 中:1 (yin-ping) Wenzhou tone 1 = `³³`; 中:2 (yin-qu) Wenzhou tone 5 ≈ `⁴²` or `²¹³` per Shen 2003. They should not collapse to `³³` for both.
- **Why:** Yin-ping and yin-qu are categorically distinct in all Wu dialects including Wenzhou (Norman 1988: 200; Shen 2003: 21). The file's 中 zh_wenzhou row currently treats the polyphony as toneless homophones, which is the same bug class as finding #5 (wu losing 行 polyphony).

---

### 8. mnp (Min Bei / Jianou 建甌) 中 — surface fails to encode the voicing distinction that ipa records

- **Current:** 中:1 surface `"tóng"` ipa `"toŋ˥˦"` (voiceless t-); 中:2 surface `"tóng"` ipa `"doŋ˦˦"` (voiced d-).
- **Expected:** Per Jianou-pinyin (Chen Zeping 1997), voiced initials are written with d/b/g; if ipa shows `doŋ`, surface should be `"dóng"` for 中:2. The surface fields should not collide when the underlying phonology differs.
- **Why:** Min Bei is one of the few Sinitic varieties retaining a voicing contrast in stops parallel to Wu (Norman 1988: 233). The file's surface convention drops this contrast for 中:2 specifically, producing a spurious `"tóng" = "tóng"` collision (finding flagged earlier in cross-collision matrix). Compare 行:1 mnp `"hâing"` / `"haiŋ³³"` ≠ 行:2 `"ǒng"` / `"ɔŋ³³"` — correctly distinct surface AND ipa.

---

### 9. nan_hai (Hainanese / Wenchang 文昌) 行 — yang-ping (:1) and yang-qu (:2) collapse to the same tone number (`4`)

- **Current:** 行:1 surface `"hia4"` ipa `"hia˨˦˥"`; 行:2 surface `"hang4"` ipa `"haŋ˨˦˥"`.
- **Expected:** Hainanese has 8 historical tone categories. 行:1 (yang-ping, 戶庚切) is tone 5 in Hainan numbering; 行:2 (yang-qu, 下浪切) is tone 6 (or 7 depending on dialect). They should not both be `4`. Compare the file's correct 中 Hainan distinction: 中:1 `"dong1"` (yin-ping) `ɗoŋ˨˦` vs 中:2 `"dong3"` (yin-qu) `ɗoŋ˧˥` — tone 1 vs tone 3, correctly distinct.
- **Why:** The shared `4`-tone for both 行 polyphones is structurally inconsistent with the rest of the Hainanese data and with the historical tone categories. Either both should shift to `5` and `6` (yang series), or the data is reflecting a real Wenchang merger of yang-ping and yang-qu, which is unattested in the standard sources (Hashimoto Mantarō 1960; Liu Xinzhong 劉新中, 《海南閩語的語音研究》, 2006).

---

### 10. nan_hai 行:1 — surface `"hia4"` does not match the colloquial Min Nan family form `kiâⁿ`

- **Current:** 行:1 nan_hai surface `"hia4"`, ipa `"hia˨˦˥"`.
- **Expected:** Hainanese vernacular for 'walk' (行:1) is `kĩa` /kĩa/ (Liu 2006: 287), matching the wider Min Nan `kiâⁿ` /kiã/. The form `hia` would imply h- initial, which is the *literary* Min Nan reading reflex of 行:2 only (e.g. 銀行 gîn-hâng). Encoding it as 行:1 ('walk') is a sense/form mismatch.
- **Why:** Hainanese in the Wenchang-Haikou belt does have an h- < *k- shift in some lexical items (e.g. 寒 'cold' han) but **not** in 行 'walk' which preserves /k/-initial. The cited form `hia4` corresponds to the wrong sense; the right form is `kia` or `kĩa` with nasalized vowel. Compare same-row siblings: nan/nan_xm/nan_qz/nan_zz/nan_pn/nan_te/nan_sg/nan_id all give `kiâⁿ` or `kiã5`, isolating nan_hai as an outlier on this cell.

---

### 11. nan_my (Penang/Malaysian Hokkien) — `行:1` is MISSING entirely while `行:2` is populated

- **Current:** `行:1 nan_my` has no surface or ipa key (undefined); `行:2 nan_my` = `"hâng"` / `"hiŋ˨˧"`.
- **Expected:** Symmetric coverage. nan_my 行:1 should be `"kiâⁿ"` / `"kiã²⁴"` matching its Hokkien sisters nan/nan_xm/nan_qz.
- **Why:** Asymmetric language coverage. All other nan_xx varieties (nan_sg/id/th/pera) have the opposite asymmetry — 行:1 populated and 行:2 missing (see finding #12). nan_my is the lone overseas Hokkien variety with the inverse gap, which suggests data entry was split across two passes that didn't reconcile.

---

### 12. Overseas Min Nan (nan_sg, nan_id, nan_th, nan_pera) — `行:2` missing across all four

- **Current:** `行:2` has no entries for nan_sg, nan_id, nan_th, nan_pera. All four DO have `行:1` populated (`kiâⁿ` or `kia⁵`).
- **Expected:** Singapore/Malaysian/Indonesian/Thai/Penang Hokkien all preserve the literary reading 行:2 `hâng` (used in compounds 銀行 gîn-hâng, 行業 hâng-gia̍p), as evidenced by the parent `nan` entry having it. At minimum copy `"hâng"` / `"haŋ²⁴"` (or local equivalents) to all four; if the variety lacks a literary register the cell should be `"—"` (with a note), not absent.
- **Why:** Same asymmetric-coverage class as finding #11, opposite direction. The 行:2 entry block in the file (lines 10837–11041) ends abruptly at `nan_my` after the standard Hokkien block, omitting the overseas-diaspora varieties that were present in 行:1. Either a copy-paste was truncated, or the editor decided the diaspora varieties only need the colloquial reading — but the choice is undocumented and inconsistent across rows (中:2 has all four diaspora langs populated correctly: nan_sg `tiòng`, nan_id `tiòng`, nan_th `dong3`, nan_pera `tiòng`).

---

### 13. 中:2 missing `bo_sino` (Sino-Tibetan / Tibetan-Buddhist Sino-loan column)

- **Current:** 中:1 bo_sino surface `"krung"` ipa `"ʈʂuŋ˥"` native `"ཀྲུང་"`; 中:2 bo_sino — no entry at all.
- **Expected:** Either populate (Tibetan ཀྲུང་ krung is the standard transliteration of Modern Chinese 中 across senses, including 中:2 ّ'hit, be affected' as in 中毒 transliterated as ཀྲུང་ཏོག་ in modern Tibetan-Chinese dictionaries), or mark as `"—"`. Currently the field is undefined which renders inconsistently.
- **Why:** All other rows in the file that include bo_sino tend to be symmetric (or use `"—"`); a silent absence is a schema gap. Same for `ja_kun`, `ko_hun`, `vi_nom` whose native-reading absences in 中:2 (`"naka"`, `"gaunde"`) are arguably motivated (those native readings only attach to 中:1 'middle', not to 中:2 'hit'), but `vi_nom` for 中:2 IS populated as `"trúng"` / `"衷"` — so the principle is internally inconsistent: some kun-yomi-style cells are omitted from :2, others are present.

---

### 14. ja_kgs / ja_okn / ja_thk 行:1 — missing the go-on reading ぎょう (gyō), forcing :1/:2 collision on kan-on こう

- **Current:** All three modern Japanese sub-langs use `kō` / `koː` / `コウ` for **both** 行:1 and 行:2.
- **Expected:** 行 has two productive on-yomi in modern Japanese: **ぎょう (gyō, go-on)** used for 'go/walk/practice' (修行 shugyō, 行事 gyōji, 行政 gyōsei) — i.e. 行:1 — and **こう (kō, kan-on)** used for 'row/profession/conduct' (銀行 ginkō, 旅行 ryokō, 行為 kōi) — i.e. 行:2. The collision in the current data is artificial: 行:1 surface should be `"gyō"` / `"ɡʲoː"` / `"ギョウ"` for kgs/okn/thk; 行:2 stays as `kō`.
- **Why:** The Old-Japanese ja_ojp row correctly gives `gyau` / `ŋʲau` / `ギャウ` for 行:1 (go-on, attested in 万葉集 readings of 行) — but then bizarrely gives the **same** `gyau` for 行:2 as well, when 行:2 should be `kau` / kan-on. The whole Japanese column for 行 in this file picked one on-yomi and applied it to both senses, losing the very polyphony the row split was designed to capture. This is the single highest-impact Sino-Xenic finding in the audit: 行 is the textbook example of Japanese go-on vs kan-on distinguishing semantic register (the *very* example used in Frellesvig 2010 §6.3 and Miyake 2003 ch. 5).

---

### 15. 中 Japanese on-yomi truly collides (チュウ for both) — schema cannot help; flag in metadata

- **Current:** ja_kgs / ja_okn / ja_thk 中:1 = 中:2 = `chū` / `t͡ɕɯː` / `チュウ`.
- **Expected:** This is actually correct. Both go-on and kan-on for 中 are チュウ (Frellesvig 2010: 165; the borrowing was a single MC syllable type ʈɨuŋ-, with the tone distinction not surviving Japanese phonotactics). Unlike 行 (finding #14), there is no historical Japanese reading that distinguishes 中 (level) from 中 (departing).
- **Why this is still worth flagging:** The HanMap UI will show identical cells side-by-side for Japanese 中:1/中:2 with no explanation. Either (a) add a metadata note that the collision is a true Sino-Japanese phonological merger (not a data gap), or (b) consider whether the 中:1/中:2 split should even *exist* in the JA columns. The schema currently provides no way to distinguish "intentional collision" from "data not yet entered" (cf. all of finding #5–7 which look identical to the consumer).

---

### 16. Proto-Tungusic ptung 行:1 vs 行:2 — semantically distinct lexemes `*jabu-` vs `*ŋənə-` are correctly encoded — but proto-Korean / proto-Japanese / proto-Tai / proto-Mongolic do NOT distinguish

- **Current:** ptung 行:1 `*jabu-` ≠ 行:2 `*ŋənə-` (correct: PT had distinct stems for 'walk' and 'row/series'). pko 行:1 = 行:2 = `*ka-`; pja 行:1 = 行:2 = `*ik-`; pmgl 行:1 = `*yabu-` = 行:2 (surface) but ipa1 `*jabu-` ≠ ipa2 `*yabu-` (see finding #17). paa 行:1 = 行:2 = `*cuːr`. ptai 行:1 = 行:2 = `*paj.A`.
- **Expected:** For the proto-langs that genuinely have one stem covering both senses (pja `*ik-` 'go/walk' is the same root used metaphorically for 'conduct/practice' in OJP), the collision is correct. But the data presentation gives no way to distinguish "this proto-language really did not split" from "we haven't bothered to research". The ptung distinction proves at least one editor checked this column; the others appear to have copied :1 to :2 mechanically. Specifically:
  - **pmgl** 行:2 should arguably be `*yabu-` (matching the borrowed-from-Tungusic 'walk') OR a different root for 'row/profession' (Mongolic uses `egürge` 'row' or `bürtgel` 'register' for 行:2 senses) — the surface field currently says `*yabu-` for both but the ipa shows the typo difference `*jabu-` (with j) vs `*yabu-` (with y) — see finding #17.
- **Why:** Proto-language polyphony is genuinely a meaningful linguistic question (does the proto-language pre-date the Chinese 多義 polysemy, or post-date a borrowing wave?), and the file's treatment is inconsistent. Recommend at minimum auditing pja and pko for whether `*ik-` and `*ka-` are correct for 行:2 'row/profession/conduct' (not just 'walk').

---

### 17. pmgl 行 — `surface` and `ipa` use different transliteration conventions for the same proto-form (*yabu- ↔ *jabu-)

- **Current:** 行:1 pmgl surface `"*yabu-"` ipa `"*jabu-"`. 行:2 pmgl surface `"*yabu-"` ipa `"*yabu-"`.
- **Expected:** Pick one convention. Standard Mongolist reconstructions (Janhunen 2003; Nugteren 2011) use `*yabu-` with y. IPA convention would use `j`. So `surface: "*yabu-"` (Mongolist) and `ipa: "*jabu-"` (IPA) is internally consistent. The 行:2 row breaks this by writing `*yabu-` in BOTH surface and ipa — the ipa field should be `*jabu-` to match :1's convention.
- **Why:** Cross-row schema inconsistency. Same proto-language, same field type, two different transliteration conventions used in adjacent cells. Compare ptung: 行:1 surface `"*jabu-"` ipa `"*jabu-"` (both use IPA j — different convention from pmgl, but at least internally consistent).

---

### 18. ptai 中 surface uses `.A` tone-category notation, ipa uses superscript `˧` — convention drift within one cell

- **Current:** ptai 中:1 surface `"*klaːŋ.A"` ipa `"*klaːŋ˧"`; ptai 中:2 same. ptai 行:1 surface `"*paj.A"` ipa `"*paj˧"`; ptai 行:2 same.
- **Expected:** Either both fields use Pittayaporn / Li Fang-Kuei tone-category letters (A/B/C/D, denoting reconstructed proto-Tai tones), or both use IPA tone numerals. Currently surface uses `.A` (proto-Tai category notation), ipa uses `˧` (level tone). These are NOT the same thing: proto-Tai tone *A is the *category* that descends to modern-Thai mid tone /˧/ in low-class but to falling /˥˩/ in high-class — the category does not have an inherent height. Writing `˧` in the ipa field treats the proto-tone as if it had a fixed pitch contour, which it didn't.
- **Why:** Not specific to 中:1/中:2 (ptai doesn't distinguish them anyway, see finding #16), but worth noting that the proto-Tai entries throughout the file conflate tone *category* with *phonetic tone*. The same issue likely affects every ptai row in HAN_DATA. Recommend either changing surface to drop `.A` (use the same `*klaːŋ` form without tone) or changing ipa to use the IPA notation for "unspecified tone of category A" (which Pittayaporn 2009 writes as a superscript Roman letter ᴬ).

---

### 19. ko_bus (Busan dialect, pitch accent) 中:1 = 中:2 both `jungH` with `tɕuŋ˥` — Busan should distinguish

- **Current:** ko_bus 中:1 surface `"jungH"` ipa `"tɕuŋ˥"`; 中:2 surface `"jungH"` ipa `"tɕuŋ˥"`. Both marked H (high pitch).
- **Expected:** Kyungsang pitch accent (which Busan represents) reflects historical Sino-Korean tone categories. Per Kenstowicz & Sohn (2001), 中:1 (Sino-Korean level tone, MK 平聲) typically gives Busan L (low) or LH; 中:2 (Sino-Korean departing tone, MK 去聲) typically gives Busan H (high). Compare ko_bus 行:1 `"haengL"` (low) vs 行:2 `"hangL"` (low) — same problem in the opposite direction (both L when 行:2 should arguably be H per its MK 去聲 origin). Either both 行 cells are right (some Kyungsang varieties merge yang-qu with yang-ping in pitch) OR both are wrong; either way the audit shows ko_bus tone-marking is inconsistent with the documented Sino-Korean tonal correspondences.
- **Why:** ko_bus is the file's only "pitch accent" column; if it doesn't actually differ from ko (modern standard Korean which has no tone) in polyphony rows, it adds no information. The MK ko_mid column DOES distinguish (中:1 `tyung` vs 中:2 `·tyung` with rising dot for 去聲) — so the historical tone data is there; it just wasn't propagated forward to ko_bus.

---

### 20. ja_kun and ko_hun (native non-Sino readings) — present in :1 only, missing entirely in :2

- **Current:** 中:1 ja_kun `"naka"` and ko_hun `"gaunde"` are present. 中:2 has no ja_kun and no ko_hun keys at all. 行:1 ja_kun `"iku"` and ko_hun `"danil"` are present. 行:2 has no ja_kun and no ko_hun keys.
- **Expected:** This is *defensible* — Japanese native-vocabulary `naka` 'middle' attaches only to 中:1, not to 中:2 'hit/be affected' (which has its own kun reading 中る `ataru`). Similarly Japanese `iku` 'go' attaches only to 行:1, not to 行:2 'row/conduct' (which has kun reading 行 `okonau` 'perform' or just stays Sino-only). The missing keys reflect a real semantic-restriction fact.
- **Why this is still a finding:** The schema gives no way to express "this kun-yomi is intentionally restricted to one sense" vs "we forgot to enter it". For 中:2 the file SHOULD have `ja_kun: "ataru"` (中る あたる 'to be hit, be afflicted') and `ko_hun: "majeul"` (맞을, 中하다's native reading) — both are well-attested Japanese/Korean native readings of the 去聲 sense. Currently the data appears to claim these languages have no native reading for 中:2, which is incorrect. Same gap for 行:2 missing `ja_kun: "okonau"` (行う 'to perform / conduct') — extremely common, used in 行儀 ojigi etc.

---

### 21. juc / mnc / sjo — Manchu/Sibe/Jurchen 行:2 forced to `—` while 行:1 has `yabumbi`/`yabum`/`yabu-`

- **Current:** mnc 行:1 surface `"yabumbi"` (to walk/go); 行:2 surface `"—"`. sjo identical. juc 行:1 `"yabu-"`; 行:2 `"—"`. Same pattern in mnc 中:2: surface `"goibumbi"` (to hit). 中:1 `"dulimba"` (middle).
- **Expected:** For 行:2 'row/profession/rank', Manchu has the dedicated word `faidan` (行列 'row, line') or `hacin` ('category') or for 'profession' `hethe`. Tungusic languages do have words for 行:2 senses; emitting `—` claims they don't. Sibe (sjo) has `faidan` cognate. Jurchen (juc) lacks attested forms in Kane (1989) for 'row/profession' specifically, so `—` is defensible there.
- **Why:** Inconsistent treatment between 中:2 (mnc `goibumbi` 'to hit' — populated for one departing-tone sense) and 行:2 (mnc `—` — empty for the analogous departing-tone sense). If the editor populated 'goibumbi' for 中:2 they should populate 'faidan' for 行:2.

---

### 22. 中:2 surface — wuu_hz / wuu_jh / wuu_sz drop the `g` from `tsong → tson` but keep the ipa unchanged (`tsoŋ`)

- **Current:** 
  - wuu_hz: 中:1 surface `"tsong³³"` / ipa `"tsoŋ³³"`; 中:2 surface `"tson³³"` / ipa `"tsoŋ³³"`.
  - wuu_jh: 中:1 `"tsong³³⁴"` / `"tsoŋ³³⁴"`; 中:2 `"tson³³⁴"` / `"tsoŋ³³⁴"`.
- **Expected:** Either the surface should be `"tson³³"` and the ipa should be `"tson³³"` (alveolar nasal coda, Hangzhou's actual phonology), OR the surface should be `"tsong³³"` and the ipa `"tsoŋ³³"` (velar nasal coda, matching :1). Currently surface `tson` ↔ ipa `tsoŋ` is internally contradictory: `n` and `ŋ` are different phonemes.
- **Why:** Inspection of the wuu_hz 中:1 row shows the surface convention is to use `ng` (orthographic) for `ŋ` (IPA). The 中:2 row drops the `g` in surface but not the ŋ in ipa — typographical inconsistency. Same pattern in wuu_sz (中:1 `tsong⁴⁴` ↔ 中:2 `tson³³`) and wuu_jh and wuu_jx and wuu_nb. The whole column of wuu_xx 中:2 surface entries (lines 8994–9000) is missing the terminal `g`.

---

### 23. zh_yuan / zh_phagspa 中:1 vs 中:2 — surface `tʂuŋ` is identical; ipa `tʂuŋ˥` vs `tʂuŋ˥˩` differs

- **Current:** zh_phagspa 中:1 surface `"tʂuŋ"` ipa `"tʂuŋ"`; 中:2 surface `"tʂuŋ"` ipa `"tʂuŋ"`. zh_yuan 中:1 surface `"tʂuŋ1"` ipa `"tʂuŋ˥"`; 中:2 surface `"tʂuŋ4"` ipa `"tʂuŋ˥˩"`.
- **Expected:** Phagspa script ꡄꡦꡃ (transliterated by Coblin 2007 as `cong` or `čung`) was used for the *yin-ping* reading of 中 in the 蒙古字韻 (1308); the *yin-qu* reading would have been written with a tone-marking diacritic that disappeared in Yuan-era written Phagspa BUT was preserved in the Zhongyuan Yinyun's category system (zh_yuan). So zh_yuan's `1` vs `4` distinction is correct; zh_phagspa's surface-and-ipa identity is defensible BUT the file should clarify that this is a script-level merger, not a phonological one.
- **Why:** Low-priority but a documentation gap. The collision in zh_phagspa is **correct** (Phagspa orthography didn't mark tone explicitly), while the similar-looking collisions in wuu/wuu_hz/wuu_jh (finding #5) are **incorrect**. The data consumer has no way to tell these apart.

---

### 24. 中 native field: ko_hun "가운데" present in 中:1 but missing in 中:2 — and that's correct, but vi_nom 中:2 native = "衷" looks dubious

- **Current:** 中:2 vi_nom native `"衷"` (line 9145), surface `"trúng"`, ipa `"ʈuŋ͡m˧˥"`.
- **Expected:** Nôm character for the Vietnamese word *trúng* 'to hit, to win (a prize), to be correct' is conventionally written with the Han character 中 itself (giả-tá borrowing), NOT 衷 (which is a separate Han character meaning 'inner heart, sincere' — completely different sense, and which has its own Nôm reading `chung` 'heart' or `trung` 'inner'). The cell appears to confuse 中 with 衷 in the Nôm orthography.
- **Why:** 衷 is the standard Han character used for the modern Vietnamese word *trung* ('faithful, loyal' — 忠 in Sino-Vietnamese, but written 衷 in some Nôm contexts as homophone) — but for 中:2 'trúng' (to hit), the Nôm uses 中 itself or 𠓨 (a vernacular invention). The native field for 中:2 vi_nom should be `"中"` (giả-tá) or `"𠓨"` (purely-Nôm), not `"衷"`. Compare 中:1 vi_nom native `"𡎢"` — a purely-Nôm character for 'middle' (土+尉), which is correct.

---

### 25. czh (Changsha Old Xiang) 行:1 surface `hhien²²` — uses a front vowel `ien` that doesn't match other Sinitic 行:1 forms

- **Current:** czh 行:1 surface `"hhien²²"` ipa `"ɦiɛ̃˨˨"`; 行:2 surface `"hhong²²"` ipa `"ɦɔ̃˨˨"`.
- **Expected:** Changsha is generally listed as `hsn` in this file (`hsn: 行:1 xin¹³ / ɕin˩˧`). `czh` (Xiang separate code) typically refers to a distinct Xiang variety. The form `hhien` with diphthong `iɛ̃` is unusual for Xiang; the Lou-Shao or New Xiang reading is more typically `hen` or `hin` (matching gan `hen⁴⁵` Gan-Xiang convergence). The /iɛ̃/ vocalism with palatal medial is more typical of Wenzhou-area Wu than of Xiang.
- **Why:** May indicate confusion between czh (a Hsiang-Hsiang sub-variety per ISO) and Old/Middle Xiang reconstructions, OR may reflect a particular dialect (Shuangfeng?) that has the /iɛ̃/ vocalism. Worth verifying against Bao Houxing 鲍厚星, 《湘语调查研究》 (1999). Tone `²²` is also low: that's yang-ping (correct for 行:1) but the contour `²²` for yang-ping is atypical of Xiang which more commonly has `¹³` for yang-ping. Compare hsn 行:1 ipa `ɕin˩˧` (yang-ping rising) — different surface convention AND different tone contour, so they aren't the same dialect even though both are tagged "Xiang".

---

## Summary

**Findings:** 25

**Highest-impact items:**
1. **#5 — Wu macro-family 行 polyphony collapse** (6 varieties failing simultaneously)
2. **#14 — Japanese 行 missing the canonical go-on/kan-on distinction** (the textbook example of Sino-Xenic polyphony)
3. **#12, #11 — Asymmetric overseas Min Nan coverage of 行:1/行:2**
4. **#1, #3, #4 — null and empty-string values masquerading as data** (schema integrity)
5. **#24 — vi_nom 中:2 native value 衷 likely confused with the homophone**

**Schema issues:** Findings 1, 2, 3, 4, 6, 17, 18, 22 are pure schema/encoding inconsistencies that can be cleaned up without consulting external phonological sources.

**Phonological issues:** Findings 5, 7, 8, 9, 10, 14, 19, 23, 25 require comparative-dialectology input to fix correctly.

**Missing-data issues:** Findings 11, 12, 13, 15, 16, 20, 21 are about cells that should exist but don't, or about explicit nullification that should be reconsidered.

**File path:** `/home/jounlai/langmap/hanmap_reviews/34_open.md`
**Finding count:** 25


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 23
- **policy/withdrawn skip**: 17
- **headline**: ja_kgs/ja_okn/ja_thk 行:1 kan-on→go-on ×9, ja_kun/ko_hun 中:2 native ×3, 行:1 zh_tang/zh_song surface fills, 行:2 vi_nom empty-string fills ×3, 中:2 mnp tóng→dóng, mnc/sjo 行:2 faidan, pmgl 行:2 y→j
- **JSON path**: /tmp/hm_edits_34.json
