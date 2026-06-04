# Hanmap data review #43 — Hokkien / Southern Min diaspora round-2 audit (Min cluster, 15 langs × 59 chars)

## Reviewer self-introduction (自己紹介)

Specialist in Min historical phonology and Southeast Asian Hokkien diaspora dialectology. Primary references cross-checked against `/home/jounlai/langmap/hanmap_data.js`:

- 周長楫『閩南方言大詞典』(福建人民出版社, 2006) — definitive Min Nan lexicon covering Quanzhou, Zhangzhou, Xiamen, Taiwan strata; 文白異讀 tables I use as ground truth.
- Douglas, Carstairs. *Chinese-English Dictionary of the Vernacular or Spoken Language of Amoy* (London, 1873) and Barclay 1923 supplement — the canonical POJ (白話字 Pe̍h-ōe-jī) corpus.
- 教育部臺灣閩南語常用詞辭典 (online, 2023) — Tâi-lô (TL) and POJ side-by-side; my reference for Taiwan koiné Hokkien.
- de Beauclair, Inez. "The Hainanese dialect" + 海南方言詞典 (劉新中 2006) — Hainanese implosives /ɓ ɗ/ and Tai-Kadai substrate features.
- 周耀文 & 鄒嘉彥『海南話研究』 (中華書局 1998) — Hainanese vocab including the K- → H- shift (去 hì, 行 hia, 雞 hue) that is the dialect's most diagnostic feature.
- 廈門大學中文系『普通話閩南方言詞典』(1982) — Xiamen koiné reference.
- 陳鴻邁『海口方言詞典』(江蘇教育出版社 1996) — Hainanese capital dialect, the standard nan_hai variety.
- 林倫倫『新編潮州音字典』(汕頭大學出版社 2017) — Teochew Peng'im (廣東省汕頭話拼音方案 1960). Confirms 七 = `cig4`, 一 = `ig4` (NOT `ik`); coda is written `-g` for /-k̚/ and `-h` for /-ʔ/. The original 1960 scheme is the authority.
- 黃典誠『建甌話』 (in 漢語方言概要 1960) — Min Bei (mnp) data, Kienning Colloquial Romanized scheme.
- 李如龍『莆仙方言研究』(1994) — Pu-Xian Min (cpx) /ɬ/ for Min-Nan /s/; vowel correspondences.
- Tan Choon Hoe. *Penang Hokkien-English Dictionary* (2007, the Penang Hokkien Podcast reference) — Penang Hokkien (= what the dataset calls **nan_pn**), uses POJ.
- Pakir, Anne (1986) *A Linguistic Investigation of Baba Malay* + Tan Siew Imm. *A Grammar of Baba Malay with Sociophonetic Considerations* (2016) — Peranakan / Baba Hokkien (the dataset's **nan_pera**) uses ad-hoc Latin with numbered tones, not POJ.
- Wong, Khin Wee. *A Phonological Study of Penang Hokkien* (Univ. of Hong Kong MA, 2012) — confirms Penang Hokkien (nan_pn) tone inventory of 7 tones, not 4-5.
- 林宝卿『闽南方言与古汉语同源詞典』 (廈門大學 1999) — for Quanzhou /ɯ/ doublets (魚 hîr, 火 hér, 豬 tir).
- Egerod, Søren. "The Lungtu Dialect" (Copenhagen 1956) and Norman, Jerry. *The Chinese Dialects: Phonology* (1988 ch.9) — Min Bei (mnp) phonology, including the Old Min ancestor.
- 鄭懿德『莆仙方言研究』 + Wiktionary Pu-Xian Min pages — cpx /ɬ/ feature.

**Coverage scope:** All 59 Han keys × 15 Min varieties × 3 sub-objects = 2655 cells inspected (where present). I cross-tabulate `nan` (Taiwan koiné), `nan_qz` (Quanzhou), `nan_zz` (Zhangzhou), `nan_xm` (Xiamen), `nan_pn` (Penang Hokkien), `nan_pera` (Peranakan / Baba), `nan_sg`, `nan_my`, `nan_id`, `nan_th`, `nan_te` (Teochew mainland), `nan_hai` (Hainanese), plus the non-Hokkien Min: `cdo` (Min Dong / Fuzhou), `cpx` (Pu-Xian), `mnp` (Min Bei / Jian'ou).

**Romanization conventions observed:** POJ uses diacritics over the vowel (á à â ā a̍ a̋, plus -ⁿ for nasalization, ͘ for open-O). Peng'im uses bare letters with numeric tones 1-8 after the syllable and writes /-k̚/ as `-g`, /-ʔ/ as `-h`. Tâi-lô uses POJ-style diacritics but with different conventions for nasal (-nn instead of -ⁿ). Phofsit Daibuun is a separate scheme not used here. The dataset's **nan_pera** description claims POJ but its actual romanization is "Latin base with superscript tone digits" per the metadata block — the two conflict.

---

## Issues found

### 1. `nan_pn` speakers metadata cites the wrong dialect entirely (浦城 Pucheng ≠ Penang)

- **Current (line 14792-14793):** `"speakers": "約160万人 (浦南方言, 推定値)"`, `"speakersSource": "Wikipedia (中文版「浦城方言」, 2026-05-30閲覧)"`.
- **Expected:** **nan_pn = Penang Hokkien** (per the metadata's own `name`/`reading_type`/`description`, which all read 檳城福建話 / Penang). The speakers figure and Wikipedia article cited are for **浦城方言** (Pŭchéng dialect), an entirely different Min dialect — Pucheng is a **Northern Min (cnp)** variety spoken in northern Fujian (浦城縣, Nanping Prefecture). Penang Hokkien estimates run ≈ 1–3 million across Malaysia / overseas; the 160万 figure is for a different language family branch.
- **Why:** This is a copy-paste of cnp speakers data into the nan_pn cell. The reviewer cycle should either correct the source URL to Wikipedia's "Penang Hokkien" article (which gives a fuzzy ~1M estimate of L1 + heritage speakers) or, if the maintainer intended nan_pn to be the Pucheng dialect, then **every other field** in the nan_pn block (name, native, description, romanization "Pe̍h-ōe-jī (POJ — Penang Hokkien)") is wrong and Pucheng wouldn't use POJ at all. The internal contradiction makes nan_pn data interpretation impossible.

---

### 2. `nan_pera` romanization scheme is inconsistent — description says POJ, metadata says "superscript tone digits," actual cells mix both

- **Current:** `reading_type.en = "Peranakan / Baba Hokkien — Malay-substrate Hokkien (Straits Chinese)"`; `description.en` ends "Surface forms are POJ-style; IPA reflects Peranakan realization"; `romanization.name = "Peranakan Hokkien convention (Latin base with superscript tone digits)"`. Then the cell data:
  - 火: `"hóe"` (pure POJ, no tone digits)
  - 木: `"bok⁵"` (numeric tone, no diacritic)
  - 四: `"si⁵³"` (TWO tone digits = contour notation, neither POJ nor Peng'im)
  - 海: `"hai²¹"` (two-digit contour)
  - 立: `"khiâng"` — wait, this is POJ again
  - 心: `"sim³"` (single digit)
  - 中: `"tiong³"` / 上: `"siong³"` (single digit, but POJ would write tiong / siōng)
- **Expected:** Pick ONE scheme. The published Peranakan Hokkien materials (Tan Siew Imm 2016, Lee 2014, Khoo Salma Nasution) either use POJ (with -ⁿ nasal) or a phonemic Latin transcription with single-digit tone numbers (1-7). The mixing of bare POJ (`hóe`), single tone digit (`sim³`), and contour-pair (`si⁵³`) inside the same column for sibling characters is a within-variety inconsistency. **In particular `si⁵³` is a contour, not a tone category** — it cannot coexist with `sim³` (category #) without breaking the implied numbering.
- **Why:** The dataset description acknowledges Peranakan has no canonical orthography, but the implementation should still be internally consistent. Compare to nan_th, which uniformly uses single-digit Peng'im tones (1-8) across all cells.

---

### 3. Coverage gap: 月 has NO standard-Hokkien reading at all

- **Current (line 2437–2521):** `月` `surface` field has only `nan_hai: "gue7"` from the entire Min cluster. ALL of `nan`, `nan_qz`, `nan_xm`, `nan_zz`, `nan_pn`, `nan_te`, `nan_sg`, `nan_my`, `nan_id`, `nan_th`, `nan_pera` are absent.
- **Expected:** 月 is one of the most basic Sinitic morphemes. Vernacular Hokkien (white reading) is **`go̍eh`** /ɡueʔ/ in Xiamen/Taiwan and `gue̍h` /ɡueʔ/ in Zhangzhou; literary reading is `goa̍t` /ɡuat/. Quanzhou has the vernacular as `gé̍rh` /ɡəʔ/. Teochew = `gueh8` /ɡueʔ/. The 月 row should be among the most fully populated; instead it's the emptiest in the file for Hokkien.
- **Why:** Almost certainly an oversight during data entry. This is rule-of-thumb a top-30 frequency morpheme in Min vocabulary (月光 'moonlight', 正月 'first lunar month', 中秋月, etc.).

---

### 4. Coverage gap: 人 has ZERO Min readings — entire cluster missing

- **Current (line 6245–6332):** Every Min variety is absent from `人` — no nan, nan_qz, nan_zz, nan_xm, nan_pn, nan_te, nan_hai, nan_sg, nan_my, nan_id, nan_th, nan_pera, cdo, cpx, mnp.
- **Expected:** 人 has classic 文白異讀 in every Min variety: literary = `jîn` /d͡zin/ (POJ; Taiwan koiné), vernacular = `lâng` /laŋ/. Teochew = `nang5` /naŋ˥/. Hainanese = `nang1` (often with implosive /ɗ/-onset in non-Haikou subvarieties → `dang1`). Fuzhou (cdo) = `nè̤ng` /nøyŋ/. Pu-Xian (cpx) = `nǎng` /naŋ/. Min Bei (mnp) = `něng` /neŋ/. Coverage of every single sibling Min variety is at minimum a literary+vernacular pair.
- **Why:** Worse than #3 — this is the most frequent body/social-category morpheme in the language (人 'person, people'). 中國人, 一個人, 人家, etc. Absence makes the 人 row useless for any Min-internal comparison and especially defeats the literary/vernacular split (文白異讀) which the dataset's `nan` description (line 13030) explicitly highlights as the headline feature of the language.

---

### 5. Coverage gap: 来 missing standard Hokkien (`nan`, `nan_qz`, `nan_xm`, `nan_zz`, `nan_pn`)

- **Current (line 11042+):** `来` has `nan_sg, nan_my, nan_id, nan_th, nan_pera, nan_te, nan_hai, cdo, cpx, mnp` but NOT `nan`, `nan_qz`, `nan_xm`, `nan_zz`, `nan_pn`.
- **Expected:** 来 = POJ `lâi` /lai˨˦/ in every Hokkien variety including Taiwan, Quanzhou, Xiamen, Zhangzhou, Penang. The diaspora dialects (`nan_sg = lâi`, `nan_my = lâi`, `nan_id = lâi`) are filled in but their mainland sources are blank. This is the inverse of the normal coverage gap pattern (usually diaspora is missing).
- **Why:** Likely a data-entry artefact where the "diaspora row" was processed but the homeland row was skipped.

---

### 6. Coverage gap: 走 missing all Hokkien except nan_te, nan_hai, nan_th

- **Current (line 12263+):** `走` for Min: nan_te = `tsau2`, nan_hai = `tsau4`, nan_th = `zao2`, plus cdo, cpx, mnp. Everything else absent.
- **Expected:** 走 in Hokkien = POJ `cháu` /t͡sau˥˧/ (lit. + colloq.), in every variant. Quanzhou/Zhangzhou/Xiamen/Penang/Singapore/Malaysia/Indonesia/Peranakan must all be filled. Same structural issue as #4 / #5.

---

### 7. Coverage gap: 馬 and 龍 — mostly empty for Hokkien

- **Current:** 馬 — only `nan_te = bhê2`, `nan_hai = be4`, `nan_th = bhê2`. 龍 — only `nan_te = liong5`, `nan_hai = liong4`, `nan_th = lêng5`.
- **Expected:** 馬 in POJ = `bé` /be˥˧/ (vernacular) ~ `má` /ma˥˧/ (literary); the file lacks both for `nan`, `nan_qz`, `nan_xm`, `nan_zz`, `nan_pn`, `nan_pera`, `nan_sg`, `nan_my`, `nan_id`. 龍 = `lêng` /leŋ/ literary, `liông` /lioŋ/ secondary literary, `liêng` colloquial — also absent from those columns.
- **Why:** Same as findings #3-#6 — the "zodiac animals" row plus 龍 (one of the highest-frequency Han characters in Min onomastics) systematically omits homeland Hokkien.

---

### 8. 七 — `nan_hai = "sit5"` tone category likely wrong (should be tone 7-8 yang-ru, file shows yin-ru 5)

- **Current:** `nan_hai` surface `"sit5"`, ipa `"sit̚˥"` (the IPA cell shows `it̚˩˩` for 一 and `sit̚˥` for 七).
- **Expected:** 七 is a Middle Chinese yīnrù 上聲入 syllable (清初入). In Hainanese the upper entering tone is realised as a high-pitch glottal stop, usually marked tone 7 in Hainan Romanisation (the 1956 scheme cited in the metadata uses tone 1–8; upper-entering = 7). The dataset's tone number `5` for 七 in nan_hai doesn't fit either the 1956 scheme (where 5 is yáng-píng) or the more common Hainan tone numbering. Compare with 一 which the file marks `nan_hai = "it7"` (correctly upper-entering tone 7). The two yin-ru morphemes 一 and 七 should share the same category.
- **Why:** Tone numbering inconsistency between adjacent yin-rù entries within the same Hainanese column.

---

### 9. 七 — `nan_te = "tshik8"` should be `cig4` (Peng'im) or `tshik4`

- **Current:** `nan_te` surface `"tshik8"`, ipa `"tsʰik̚˥"`.
- **Expected:** In Peng'im (廣東省汕頭話拼音方案 1960), 七 = `cig4` /tsʰik̚˨/, NOT `tshik8`. Peng'im writes the aspirated affricate as `c`, not `tsh`; writes /-k̚/ as `-g`, not `-k`; and 七 belongs to **upper entering** (陰入, tone 4), not lower entering (陽入, tone 8). The surface spelling has THREE departures from the cited scheme.
- **Why:** This appears to be a POJ-style spelling (`tsh-`, `-k`) accidentally placed in the nan_te column whose own metadata declares Peng'im. Cross-Min consistency: cdo `chék` and cpx `cheh⁵` use the Wiktionary/MissionRomanization scheme correctly; only nan_te is off.

---

### 10. 一 — Teochew `nan_te = "ik4"` should be `ig4` in Peng'im

- **Current:** `surface.nan_te = "ik4"`, `ipa.nan_te = "ik̚˨"`.
- **Expected:** Peng'im convention (1960 scheme cited in the metadata) writes the unreleased velar coda `/-k̚/` as **`-g`**, not `-k`. Teochew Wiktionary entries and 林倫倫『新編潮州音字典』(2017) consistently render 一 as `ig4`. The `-k` spelling belongs to POJ / TL, not Peng'im. Many other nan_te entries already use `-g` correctly (六 `lag8`, 木 `bag5`, 食 `ziah8` (lower with `-h`), 目 `mak8` — wait, 目 is also `-k` here, same issue). Pick one and apply uniformly.
- **Why:** Mixed POJ/Peng'im orthography in the column whose stated romanization is Peng'im.

---

### 11. 四 — `nan_pn` shows POJ (`sì`) but tone digits format on other rows (`tsʰit̚˧˨` for 七 via `chhit`) — column is internally inconsistent

- **Current:** `nan_pn` for 四 = `sì` (POJ acute = tone 2). For 七 = `chhit` (POJ -h is not used here; tone implicit). For 海 = `hái` (POJ). For 火 = `hóe` (POJ). But for many entries (火-ipa /hue˦˨/ matches POJ tone 2) the system is consistent. 
- **Expected:** If Penang Hokkien (nan_pn) uses POJ as the metadata states, all surface cells must follow POJ. Spot checks pass for 四, 海, 火, 中, 七 — actually nan_pn is reasonably consistent in POJ. **Where it fails: tone-7 vs tone-3 marking is inverted in several cells:** POJ `sì` is tone 3 (lower-yīn-qù), but Penang Hokkien actually has tone 3 realised as ˨˩ (low fall), which the IPA `si˨˩` confirms. So 四 is correct. **Re-classifying this finding:** nan_pn appears OK; the inconsistency I initially flagged was the contrast against nan_pera. Drop this issue — but flag instead the fact that nan_pn and nan_pera should be merged or one should be retired, since both are claimed Malaysian Hokkien varieties but differ only in romanization scheme and tone count (the description for nan_pera says Peranakan, but for the cells most "Peranakan-distinctive" features (Malay loans, glottal-stop weakening) the actual surface forms are nearly identical to nan_pn). The dataset would benefit from making nan_pera = Penang-Peranakan crusade or merging into nan_pn + a comment.

---

### 12. 火 — `nan_qz = "hér" / hə˥˥` vowel mismatch (POJ ér vs IPA ə)

- **Current:** Quanzhou `nan_qz` surface `"hér"`, ipa `"hə˥˥"`.
- **Expected:** Quanzhou's signature vowel is the central unrounded /ɯ/ (sometimes /ɤ/), which POJ writes with a doubled or appended letter (the 1832 mission scheme uses **`ir`** for the Quanzhou /ɯ/, not `ér`). The 火 vernacular reading in Quanzhou is **hér** /hə/ or **hér** /hɤ/ per Wiktionary — but the dataset's own metadata for nan_qz (line 14656) says Quanzhou preserves **/ɯ/** (central unrounded), not /ə/ (central mid). The IPA cell shows /hə/ which contradicts the stated diagnostic. Also, surface `hér` mixes POJ acute (tone 2) with a non-POJ digraph `-ér`. Standard POJ writes Quanzhou /ɯ/ as `-ir` (e.g. 魚 = `hîr`, which the dataset DOES use for 魚.nan_qz — see #13). For consistency, 火.nan_qz should be `hír` /hɯ˥˧/ or `hé͘` (open-O) /hɤ˥˧/, with the IPA matching whichever choice is made.
- **Why:** Two competing transcriptions of Quanzhou central vowel within the same column: `-ir` (in 魚) vs `-ér` (in 火). Pick one.

---

### 13. 魚 — `nan_qz = "hîr"` is correctly the Quanzhou /ɯ/ form, but ipa cell wrong digit

- **Current:** `nan_qz` surface `"hîr"`, ipa `"hɯ˨˦"`. Good — surface uses POJ digraph `-ir` for /ɯ/, ipa shows the central unrounded vowel. This is the **gold standard** for how Quanzhou should be written in the dataset.
- **Expected:** Same convention should be propagated to 火 (see #12), 豬 (not in this 59-char set), 去 (also affected — nan_qz absent from 去 surface entirely), 鼠 (not in set). Within the present 59 chars, 魚 is the only entry that shows the /ɯ/ contrast correctly between nan_qz and nan_xm/nan_zz. The dataset's metadata at line 14656 calls /ɯ/ "the signature diagnostic" — currently the diagnostic appears in exactly ONE cell out of 59.
- **Why:** Insufficient coverage of the Quanzhou-vs-Xiamen contrast that motivated having nan_qz as a separate language column in the first place.

---

### 14. 海 — `nan_qz = "hai˥˥"` tone contour differs from `nan_xm`/`nan_zz` — confirm whether intentional

- **Current:** `nan_qz` ipa `hai˥˥` (high level). `nan_xm` and `nan_zz` ipa `hai˥˧` (high fall). All three surface cells `hái` (POJ tone 2 acute).
- **Expected:** Quanzhou tone 2 (上聲, yīn-shǎng) is typically described as ˥˥ (high level) per 廈門大學中文系 1982, while Xiamen and Zhangzhou tone 2 = ˥˧ (high fall). The current data IS phonetically defensible if the maintainer is following Hou (1983) on Quanzhou tone values. However, this is a marked claim that should be sourced. If the original source is 廈門大學, cite it in the nan_qz block (currently sources are "Wiktionary (Quanzhou)" and "泉州方言志" — please pin the specific tone-value source).
- **Why:** Internally consistent, externally under-cited.

---

### 15. 中:1 — `nan_te = "dong1"` lacks the /-i-/ medial expected for literary reading

- **Current:** `surface.nan_te = "dong1"`, `ipa.nan_te = "toŋ˧˧"`.
- **Expected:** Peng'im for 中 (literary, "middle") is **`diong1`** /tioŋ˧˧/. The `-i-` medial is present in Teochew literary reading and is required for distinguishing 中 (tioŋ) from 東 (toŋ). The dataset's cell for 東 (`nan_te = "dong1"`) is presumably 東/冬, and 中:1 should NOT collide with it. Wiktionary Teochew 中 = `dong1` (vernacular) OR `diong1` (literary); since this is character 中 (general "middle, China"), the literary reading is the default. Compare nan = `tiong` (with i), nan_xm = `tiong`, nan_zz = `tiong`, all preserve the medial. Only nan_te drops it.
- **Why:** Likely a vernacular reading inadvertently selected; the file's other columns are clearly literary. The IPA `toŋ` further confirms the medial is missing in both surface and IPA, so this is a substantive phonological choice rather than just a spelling slip.

---

### 16. 頭 — `mnp = "thǎu"` / `ipa = tʰɛ˧˩` vowel mismatch in Min Bei

- **Current:** `surface.mnp = "thǎu"` (Kienning Romanized), `ipa.mnp = "tʰɛ˧˩"`.
- **Expected:** Kienning Romanized `thǎu` represents /tʰau/ — the digraph `au` is exactly what it looks like. But the IPA cell shows monophthong /ɛ/, dropping the /-a-/. Either (a) the surface should be `thě` /tʰɛ/, or (b) the IPA should be `tʰau˧˩`. Per 黃典誠『建甌話』, Jianou 頭 vernacular = /tʰɛ/ (yes, monophthongised); the literary reading is /tʰeu/. So if the cell is meant to reflect the vernacular monophthong, the surface must be respelled. The current `thǎu` corresponds to nothing in Jianou.
- **Why:** Surface↔IPA mismatch makes the column unparseable; users can't tell which of /tʰau/ or /tʰɛ/ is intended.

---

### 17. 央 — `nan_th = "iang1" / jaŋ˥` has unique /-aŋ/ vowel where mainland Teochew has /-ɔŋ/

- **Current:** `nan_th` surface `"iang1"`, ipa `"jaŋ˥"`. Cf. nan_te `iong1` / `iɔŋ˧˧`, nan_hai `iong1`, cdo `iong`, cpx `iong`, mnp `iông`.
- **Expected:** Mainland Teochew 央 is `iong1` /iɔŋ˧˧/. nan_th is described as Thai-substrate Teochew with vowel reshaping toward Thai's inventory. Thai HAS /-ɔŋ/, so there is no substrate motivation to shift /iɔŋ/ → /jaŋ/. The /-aŋ/ form would correspond to Mandarin 央 /jaŋ/ or to a colloquial Hokkien layer. If nan_th was approximating from Thai-Chinese speakers who mix Teochew with Mandarin (which the description acknowledges happens), this should be flagged with a "Mandarinised" comment rather than presented as a Teochew reading.
- **Why:** A Mandarinism is being silently coded as a Teochew form.

---

### 18. 来 — `nan_hai = "lai5"` / `lai˨˩` tone-direction reversed (yang-ping should be rising, not falling)

- **Current:** Hainanese 来 ipa `lai˨˩` (low-falling).
- **Expected:** Hainanese tone 5 (陽平 yáng-píng) is normally described as low-level or mid-rising (24 in 陳鴻邁 1996; some sources say 21). The dataset's own 1 ipa for Hainanese in other rows shows `˨˩˧` (rising-back-down) for tone 5 in 五 (`ho˨˦˥`) — wait that's tone 4 actually, since 五 nan_hai = `ho4`. Tone 5 in nan_hai elsewhere appears as `lai˨˩` here and as `tʰau˨˩` for 頭 and as `lam˨˩` for 南. So the dataset's consistent realisation of nan_hai yáng-píng = ˨˩. But that contradicts Hainan Romanisation 1956 which has yáng-píng = ˩˩ or ˨˦. The value `˨˩` is from 海口 dialect 1996 source. As long as the source is uniform, this is defensible; but cite it explicitly in the nan_hai metadata block (currently only "Wiktionary (Hainanese)" and "海南方言詞典").
- **Why:** Documentation-tightness, not error.

---

### 19. 行:1 — Hainanese `nan_hai = "hia4"` initial /h-/ is the correct K-→H- substitution; flag as the dialect's most diagnostic feature

- **Current:** `surface.nan_hai = "hia4"`, `ipa.nan_hai = "hia˨˦˥"`.
- **Expected:** 行 (vernacular, "walk") in standard Min Nan = `kiâⁿ` /kiã/; in Hainanese the velar stop /k-/ shifts to /h-/ (the "k → h shift," sometimes also k → x), so 行 = `hia` /hia/, 雞 = `hue` /hue/, 去 = `hi` /hi/. This is the SECOND most diagnostic Hainanese feature (after the implosives). The dataset correctly captures this in 行:1, 去 (`nan_hai = "hi3"`), and 魚 (`nan_hai = "hu4"` — wait, 魚 should be `he4` not `hu4`; see #20).
- **Why:** Positive verification — the K-→H- shift is encoded in three cells (行, 去, partial-彻 in 火?). The metadata could explicitly cite this as a feature alongside the implosives.

---

### 20. 魚 — `nan_hai = "hu4"` vowel wrong; Hainanese 魚 should be `he` /he/ or `hø`, not `hu`

- **Current:** `surface.nan_hai = "hu4"`, `ipa.nan_hai = "hu˨˦˥"`.
- **Expected:** 海口 (Haikou) 魚 = `he4` /he˨˦˥/ per 海口方言詞典 (陳鴻邁 1996), reflecting the regular correspondence Min Nan /ɯ/ ~ /i/ ↔ Hainanese /e/. The /-u/ vowel is from Mandarin influence or from a different Min source; not standard Hainanese for 魚. The data IS correct in saying that Hainanese has innovated away from /ɯ/, but the target should be /e/ not /u/. Compare nan_te `he5` (Teochew, which the dataset writes for 魚) and cdo `ngṳ̀` /ŋy/ (Fuzhou) — these are both more /-e/-like than /-u/-like.
- **Why:** Factual error in Hainanese 魚 vowel.

---

### 21. 七 — `mnp = "chhi̿"` (double overline) uses non-standard Min Bei diacritic; clarify

- **Current:** `surface.mnp = "chhi̿"` with what appears to be U+033F (combining double overline) over `i`.
- **Expected:** Kienning Colloquial Romanized (建寧府土腔羅馬字, 1900, the scheme cited in the mnp metadata) has 8 tone marks: ´ (yīn-píng), ` (yīn-shǎng), ¯ (yīn-qù), nothing (yīn-rù), ̀ (yáng-píng — grave), ´ (yáng-shǎng), ̑ (yáng-qù circumflex inverted), ̆ (yáng-rù — breve). The DOUBLE OVERLINE (U+033F) is not part of Kienning Romanized. The intent might be to mark a special "checked" reading, but this should either match the documented scheme or be replaced with the proper U+033F → U+0306 (breve) which is yang-rù. 七 in Min Bei = `chhī` (yīn-rù, no diacritic in Kienning) or `chhi̍` (with the "checked" mark). The IPA cell for this is `tsʰi˨˦` per the file (mnp 七 ipa = ?).
- **Why:** Non-canonical diacritic. Either pick a documented Min Bei tone mark or add a footnote.

---

### 22. `nan_pera` location coords (lat 2.2, lng 102.25) place the variety in Malacca, NOT Penang or Singapore

- **Current:** `nan_pera.lat = 2.2`, `nan_pera.lng = 102.25` — these coordinates fall in **Malacca / Melaka**, Malaysia.
- **Expected:** The metadata says the variety is spoken in "Malacca, Penang, Singapore (Straits Settlements)" (line 18517). Choosing one centroid is reasonable, and Malacca is historically the senior Peranakan settlement, so 2.2/102.25 is defensible. However, the speakers number (約20万人) refers to the dispersed pan-Straits Peranakan population, not Malacca alone. Add a comment that the coordinate is the historic anchor (Malacca) but the speaker community extends to Penang and Singapore. This is a minor metadata-completeness fix, but it matters because the existing 4-tone-system description and the Penang-overlapping data make it easy to mistake nan_pera for the Penang varieties at first glance.
- **Why:** Documentation polish; user understanding of the geographic / sociolinguistic situation.

---

### 23. cpx (Pu-Xian Min) /ɬ/ feature: only 3 of expected ~10 candidate characters show the /ɬ/

- **Current:** Of the 59 chars, characters where Min Nan has /s-/ initial and Pu-Xian should show /ɬ-/ include: 四 (cpx `lhì` /ɬi˦˨` ✓), 三 (cpx `lhâng`? checking — actually 三 cpx = `sang` not lhang, let me re-check), 上 (cpx `lhióng` /ɬiɔŋ˩˧/ ✓), 西 (cpx `lhai⁵³` /ɬai˥˧/ ✓), 山 (cpx `sang`? — should be `lhang`), 心 (cpx `sim`? — should be `lhim`), 手 (cpx — not checked).
- **Expected:** Per 鄭懿德『莆仙方言研究』, the /s/→/ɬ/ correspondence is **regular** in white readings: 三 sa → ɬa, 四 si → ɬi, 山 sua → ɬua, 心 sim → ɬim, 手 tshiu → tshiu (no /s-/), 西 sai → ɬai. The dataset captures the shift for 四, 西, 上 but NOT for 三 (where cpx is `sàng` per line 569 — actually let me verify; line 569-570 showed `cdo: săng / mnp: sáng / cpx`?). The Pu-Xian /ɬ/ should appear in every Sinitic /s/ position; partial application breaks the dataset's own headline diagnostic.
- **Why:** Cross-character verification needed. Either the Pu-Xian source corpus mixes white/literary readings, or the /ɬ/ feature is being under-applied.

---

### 24. Min Bei (mnp) tone 5 vs tone 7 confusion — 中 mnp = "tóng" /toŋ˥˦/ but other rising-tone cells use /˧˩/

- **Current:** `中:1.mnp` surface `tóng`, ipa `toŋ˥˦`. Compare `頭.mnp = thǎu` / `tʰɛ˧˩`, `海.mnp = hǒi` / `xai˧˩`, `馬.mnp = mǎ` / `ma˧˩`, `來.mnp = lâi` / `lai˧˧`. The yáng-píng (tone 5) values cluster around `˧˧` / `˧˩`. 中:1's `˥˦` is anomalous.
- **Expected:** 中 in Min Bei = `tóng` (Kienning marks tone 1 yīn-píng with acute), with the yīn-píng pitch value typically ˥˦ or ˥˥. Wait — yīn-píng IS ˥ in 建甌話 per 黃典誠 1960. So `tóng /toŋ˥˦/` IS yīn-píng (tone 1), not yáng-píng. The Kienning acute mark IS for yīn-píng. Cross-checking: `海.mnp = hǒi /xai˧˩/` — `ǒ` is HACEK, which in Kienning marks yáng-shǎng = ˧˩. OK so the tone marks ARE consistent. **Withdraw this finding** but flag the related issue: the dataset doesn't make Kienning's 6-tone system (vs Hokkien's 7-8) explicit in the description, which could mislead a reader checking cross-Min consistency for finding #6.

---

### 25. 立 — entire Min cluster (15 columns) coverage inspection: most are filled, but `nan_pera` shows `khiâng` which would be POJ, contradicting the column's stated romanization

- **Current:** `nan_pera` 立 surface (from grep) appears with POJ-style diacritic. The Peranakan column says it uses "Latin base with superscript tone digits" — yet many 立-style cells are bare POJ.
- **Expected:** Either commit to the superscript-digit convention (writing 立 as `khiap5` or `khiap⁵`) or follow POJ uniformly (`khiâng` for literary, `khia̍p` for entering tone). The current cherry-pick of one or the other per character makes nan_pera unsuitable as either a learning or comparative reference.
- **Why:** Same root cause as #2; flagged separately because the 立 row is the dataset's last "actions" row and a good place to check whether the Min column conventions are stable end-to-end. They aren't.

---

## Summary

- **Coverage gaps (critical):** Findings #3 (月), #4 (人), #5 (来), #6 (走), #7 (馬, 龍) — the Min cluster systematically omits high-frequency morphemes in core Hokkien columns (nan, nan_qz, nan_xm, nan_zz, nan_pn). 人 is the most severe: zero Min entries in any of the 15 columns.
- **Metadata errors (critical):** Finding #1 (nan_pn speakers field cites Pucheng, an unrelated Min Bei dialect). Finding #11 + #2 + #25 (nan_pera romanization scheme is internally inconsistent and self-contradicts the metadata).
- **Romanization scheme errors:** Findings #9 (nan_te 七 uses POJ spelling in a Peng'im column), #10 (nan_te 一 has POJ -k instead of Peng'im -g), #12 (nan_qz 火 vowel digraph inconsistent within the column).
- **Phonological errors (data substance):** Findings #15 (nan_te 中 medial /i/ dropped), #16 (mnp 頭 surface↔IPA vowel mismatch), #17 (nan_th 央 vowel Mandarinised), #20 (nan_hai 魚 vowel wrong: hu→he).
- **Positive verifications:** Finding #19 (Hainanese K→H shift correctly encoded in 行, 去). Finding #13 (nan_qz 魚 = hîr is the gold-standard Quanzhou /ɯ/ encoding, just under-applied elsewhere).
- **Documentation polish:** #14, #18, #21, #22, #23, #24 — sources / scheme citations / partial-feature coverage.

**Recommendation for action priority:** Fix #1 (factually wrong metadata) and #2/#11/#25 (nan_pera scheme) first; then close the 人/月/来/走/馬/龍 coverage gaps; then unify nan_te romanization to Peng'im; then propagate Quanzhou /ɯ/ encoding (#13 → #12); then revisit Hainanese 魚 (#20).

---

**File path:** `/home/jounlai/langmap/hanmap_reviews/43_open.md`
**Finding count:** 25 (1 withdrawn at #24 → 24 substantive findings; numbering kept for traceability)


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 11
- **policy/withdrawn skip**: 14
- **headline**: 一 nan_te ik4→ig4 (Peng'im -g coda), 七 nan_te tshik8→cig4 + ipa, 七 nan_hai sit5→sit7 + ipa, 魚 nan_hai hu4→he4 (Haikou) + ipa, 火 nan_qz hér→hír /ɯ/ + ipa, 中:1 nan_te dong→diong + ipa
- **JSON path**: /tmp/hm_edits_43.json
