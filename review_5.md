# Hanmap data review #5 — Cantonese / Yue dialectology specialist

## Reviewer self-introduction (ペルソナ自己紹介)

粵語（廣府話・Yue Chinese）方言学を専門とする研究者として書いている。粵語の主要分支群 — 廣府片（廣州・香港・澳門・中山・順德）、四邑片（台山・新會・開平・恩平）、勾漏片（梧州・玉林）、高陽片（陽江・高州）、邕潯片（南寧白話・梧州市區） — の音類対応を比較体系として把握する。羅馬字表記体系は Jyutping（LSHK 1993）、Yale（Huang & Kok 1958）、教院式（教會羅馬字）、Sidney Lau の四式を相互換算しながら検証。台山話（yue_ts）の 5 調体系（廣府の 6 調 / 9 調分節と異質）、四邑系の ts → ʃ 流音化、邕潯系の Pinghua 基層由来の ɬ-/θ- は系統的に他系と区別する。一次資料は『廣州方言詞典』（饒秉才他 1997）、『香港粵語語法的研究』（張洪年 2007 改訂版）、『台山方音字典』（黃劍雲 1989）、『東莞方言詞典』（陳曉錦 1993）、『中山方言研究』（高華年）、『南寧白話研究』（李連進 2000）。文白異讀の系統的二重化（行 hang4 文 vs haang4 白；食 sik6 文 vs sek6 白；飲 jam2；睇 tai2 白 vs 視 si6 文）を重要な評価軸とする。

**Reviewer perspective:** 粵語 sub-dialects, Jyutping, 文白異讀, Taishanese 台山話 distinctive features, Dongguan 東莞, Nanning 南寧, Zhongshan 中山, overseas diaspora Cantonese

**File reviewed:** `/home/jounlai/langmap/hanmap_data.js`  
**Date:** 2026-05-31  
**Rows in scope:** `yue`, `yue_gz`, `yue_hk`, `yue_mo`, `yue_dg`, `yue_nn`, `yue_ts`, `yue_us`, `yue_zs`

---

## Issues found

### 1. 四 — `yue_gz`, `yue_dg`, `yue_zs` — Wrong tone digit (sei6 instead of sei3)

- **Current:** `"yue_gz": "sei6"`, `"yue_dg": "sei6"`, `"yue_zs": "sei6"` (IPA `sei²²` = 陽去 tone 6)
- **Expected:** `"sei3"` (IPA `sei³³` = 陰去 tone 3)
- **Why:** 四 derives from MC *s.li[j]-s, 去聲 清母 → Cantonese 陰去 (tone 3 = 33). The IPA `sei²²` = 22-contour (陽去, tone 6) is phonologically incompatible with 清聲母 去聲: clearing 去聲 regularly yields 陰去. All three sub-dialect rows appear to share the same copying error. `yue_hk` and `yue_mo` correctly give `sei3`; `yue_nn` correctly gives `thei6`→ wait, actually `yue_nn` also gives `"thei6"` with IPA `θei²²` (also tone 6). The 22-contour data for 四 is wrong across gz/dg/zs/nn.

---

### 2. 天 — `yue_gz`, `yue_dg` — Wrong tone digit (tin3 instead of tin1) and wrong IPA contour (⁵³ instead of ⁵⁵)

- **Current:** `"yue_gz": "tin3"` / `"yue_dg": "tin3"` (IPA `tʰiːn⁵³`)
- **Expected:** `"tin1"` (IPA `tʰiːn⁵⁵`)
- **Why:** 天 is MC 透母 平聲 → Cantonese 陰平 (tone 1 = 55 high-flat). `yue_nn` and `yue_zs` correctly give `tin1` / `tʰiːn⁵⁵`. `yue_hk` and `yue_mo` also give `tin1` / `tʰiːn˥`. The value `tin3` (tone 3 = 陰去 33) is phonologically impossible for this MC category. The IPA `⁵³` (high-falling) is also inconsistent: all other 陰平 entries in `yue_gz` use `⁵⁵` (e.g. 一 `jɐt̚⁵⁵`, 三 `saːm⁵⁵`, 山 `saːn⁵⁵`). Both the digit and the contour are wrong.

---

### 3. 行:1 (xíng, walk) — `yue`, `yue_hk`, `yue_mo` — surface `null` suppresses the white reading haang4

- **Current:** `"yue": null`, `"yue_hk": null`, `"yue_mo": null` in the `surface` section
- **Expected:** `"haang4"` (IPA `haːŋ˨˩`) as the 白讀 (colloquial "to walk") entry
- **Why:** HAN_VARIANTS correctly lists the literary reading `hang4` for `yue`, but `haang4` (long vowel, 白讀) is the standard colloquial reading for "to walk" in all Guangfu Yue and is absent from both `surface` and `HAN_VARIANTS`. The null surface means the character displays no reading at all for these three rows, which is misleading: 行走 in Cantonese speech is overwhelmingly `haang4`, not `hang4`. Compare: `yue_dg`, `yue_zs`, `yue_nn` all supply `hang4` (literary) in the surface section.

---

### 4. `yue_gz` — Code–label mismatch: "gz" abbreviates Guangzhou, but meta says Gaozhou (高州)

- **Current meta label:** `"en": "Gaozhou Yue"`, `"zh": "高州粤语"` (western Guangdong, Maoming area)
- **Expected:** Either rename the code to `yue_gaoz` / `yue_gzh` (for Gaozhou), or relabel the meta to say Guangzhou (廣州)
- **Why:** In virtually all ISO/Ethnologue/Wiktionary database conventions, `gz` abbreviates 廣州 (Guǎngzhōu = Guangzhou). The language-code `yue_gz` is therefore universally read as "Guangzhou Yue." The meta and code are in direct conflict. Additionally, the data values themselves (一 `jat1`, 三 `saam1`, 天 `tin1` etc.) mirror standard Guangzhou/Guangfu readings, not Gaozhou-specific forms. The speaker count cited ("約6200万人 廣府片") is the entire Guangfu dialect-group, not Gaozhou specifically (~2–3 million). The whole row appears to be Guangzhou data mis-labelled as Gaozhou.

---

### 5. `yue_nn` (Nanning Yue) — θ- and ɬ- initials are Pinghua features, not Yue/白話 features

- **Current:** `"yue_nn": "thaam1"` / IPA `θaːm⁵⁵` for 三; `"thai1"` / `θɐi˥˥` for 西; `"slap6"` / `ɬɐp̚˨` for 十; `"slam1"` / `ɬam˥˥` for 心; `"slau2"` / `ɬɐu˧˥` for 手
- **Expected:** `saam1 / saːm⁵⁵`, `sai1 / sɐi˥˥`, `sap6 / sɐp̚²²`, `sam1 / sɐm⁵⁵`, `sau2 / sɐu³⁵`
- **Why:** θ- (dental fricative) and ɬ- (voiceless lateral fricative) initials are defining features of 廣西桂南平話 (Guilin-Nanning Pinghua), not of 南寧白話 (Nanning Yue / 邕潯粵語). Nanning 白話 — the prestige Yue variety of the Guangxi capital — has the same s- initial for these MC 心母 characters as standard Guangzhou Cantonese. The romanization convention note in the meta (`sl- = /ɬ/, th- = aspirated`) confirms these were intentionally entered, but they belong to a different variety. The row is described as 邕潯粵語 throughout all 18 UI languages; the phonemic inventory of ɬ/θ contradicts that description.

---

### 6. 九 — `yue_ts` — Wrong tone digit (gau1 instead of gau2) and wrong IPA contour (˥˥ instead of ³⁵)

- **Current:** `"yue_ts": "gau1"` (IPA `kau˥˥`)
- **Expected:** `"gau2"` (IPA `kau³⁵`)
- **Why:** 九 is MC 見母 上聲 清 → Cantonese 陰上 (tone 2 = 35 high-rising). In Taishanese, MC 陰上 清 regularly maps to tone 2 (³⁵ contour). Evidence from the same dataset: 水 `seoi2` / `sɵy³⁵`, 火 `fo2` / `fɔ³⁵`, 土 `tho2` / `tʰou³⁵`, 虎 `fu2` / `fu³⁵`, 犬 `hyun2` / `hyːn³⁵` — all MC 陰上 清 → digit 2 / contour ³⁵. 九 uniquely breaks this pattern with digit 1 and IPA `˥˥` (55 high-flat = 陰平 tone 1). The IPA `kau˥˥` also uses Chao letters inconsistently with the digit-superscript notation used by all other Taishanese IPA entries.

---

### 7. 龍 / 牛 / 羊 — `yue_ts` — Tone digit 5 contradicts IPA contour ²¹

- **Current:** `"lung5"` / `lʊŋ²¹`; `"ngau5"` / `ŋɐu²¹`; `"yeung5"` / `jœŋ²¹`
- **Expected tone digit:** `4` (IPA `²¹` = 21 low-falling = Taishanese tone 4 = 陽去/陽平 低降)
- **Why:** In this dataset, Taishanese tone 5 has IPA `˩˧` / `¹³` (low-rising): cf. 馬 `ma5` / `ma˩˧`, 鳥 `niu5` / `niːu˩˧`. But 龍/牛/羊 surface digit "5" maps to IPA `²¹` (low-falling), which is the contour of tone 4 throughout the rest of the TS data. MC 陽平 → Taishanese low-falling ²¹ is phonologically expected (same direction as Cantonese 陽平 21). The romanization digit and IPA contour are in direct contradiction for these three characters.

---

### 8. 魚 — `yue_dg`, `yue_nn` — IPA entry is truncated (ŋ˨˩ missing vowel)

- **Current:** `"yue_dg"` IPA `"ŋ˨˩"`, `"yue_nn"` IPA `"ŋ˨˩"` (surface `ngyu4` for both)
- **Expected:** `ŋjyː˨˩` (or at minimum `ŋyː˨˩`)
- **Why:** The surface `ngyu4` for Dongguan and Nanning Yue correctly reflects preservation of 疑母 ŋ- initial (contrast Guangzhou `jyu4` with zero/y- initial). However, the IPA `ŋ˨˩` gives only the nasal initial plus tone, with the entire vowel nucleus `jyː` missing. This is a data entry truncation error. The correct IPA should include the full syllable.

---

### 9. 東 — `yue_dg` — Wrong tone (dung3 instead of dung1)

- **Current:** `"yue_dg": "dung3"` (IPA `tʊŋ˧˧`)
- **Expected:** `"dung1"` (IPA `tʊŋ˥˥`)
- **Why:** 東 is MC 端母 平聲 陰 → Cantonese 陰平 (tone 1 = 55). `yue_gz`, `yue_hk`, `yue_hk`, `yue_nn`, `yue_zs` all give `dung1`. The IPA `˧˧` = mid-flat (33) corresponds to 陰去 (tone 3), not 陰平. The Dongguan entry is wrong.

---

### 10. 西 — `yue_dg` — Wrong tone (sai3 instead of sai1)

- **Current:** `"yue_dg": "sai3"` (IPA `sɐi˧˧`)
- **Expected:** `"sai1"` (IPA `sɐi˥˥`)
- **Why:** 西 is MC 心母 平聲 陰 → 陰平 (tone 1). Same error pattern as 東 in `yue_dg`. `yue_gz`, `yue_hk` etc. all give `sai1`. The `˧˧` IPA contour (33 = 陰去) is wrong.

---

### 11. 北 — `yue_dg` — Wrong entering-tone class (bak3 instead of bak1)

- **Current:** `"yue_dg": "bak3"` (IPA `pɐk̚˧`)
- **Expected:** `"bak1"` (IPA `pɐk̚˥`)
- **Why:** 北 is MC 幫母 入聲 陰 → Cantonese 陰入 (high short = tone 1-entering = ˥). The IPA `˧` (mid) corresponds to the mid-entering (tone 3-entering, e.g. 八 `baat3`), not the high-entering category. `yue_gz`, `yue_hk`, `yue_nn`, `yue_zs` all correctly give `bak1` / `pɐk̚˥`.

---

### 12. 山 — `yue_dg` — Wrong tone (saan4 instead of saan1)

- **Current:** `"yue_dg": "saan4"` (IPA `saːn²¹`)
- **Expected:** `"saan1"` (IPA `saːn⁵⁵`)
- **Why:** 山 is MC 生母 平聲 陰 → 陰平 (tone 1 = 55). IPA `²¹` = low-falling = 陽平 (tone 4), which is wrong. `yue_gz`, `yue_hk`, `yue_nn`, `yue_zs` all give `saan1` / `saːn⁵⁵`. This follows the same erroneous pattern seen for 東, 西, 天 in `yue_dg`.

---

### 13. 下 — `yue_dg` — Wrong tone (haa4 instead of haa6)

- **Current:** `"yue_dg": "haa4"` (IPA `ha²¹`)
- **Expected:** `"haa6"` (IPA `haː²²`)
- **Why:** 下 is MC 匣母 去聲 → Cantonese 陽去 (tone 6 = 22). `yue_gz`, `yue_hk`, `yue_mo`, `yue_nn` all give `haa6`. IPA `²¹` = 21 (陽平) is phonologically wrong for a 去聲 character. Tone 4 (陽平) and tone 6 (陽去) are distinct in Dongguan Yue; this is a mis-assignment.

---

### 14. `yue_ts` — Mixed IPA notation: Chao letters and digit-superscripts used interchangeably

- **Current (examples):**
  - 七 IPA `t͡sʰɐt̚˥` (Chao letter)
  - 八 IPA `paːt̚˧` (Chao letter)
  - 九 IPA `kau˥˥` (Chao letters)
  - 龍 IPA `lʊŋ²¹` (digit superscripts)
  - 三 IPA `ɬaːm³³` (digit superscripts)
- **Expected:** Uniform notation throughout the `yue_ts` IPA column; digit-superscripts are used by the overwhelming majority of TS entries and should be the standard
- **Why:** Mixing `˥˧˩˨` Chao-letter contour markers with `²¹³³⁵⁵` digit-superscript contours within the same dialect's IPA column makes automatic parsing and visual comparison impossible. 七 (`˥` = single letter = 5 = high), 八 (`˧` = single letter = 3 = mid) are inconsistent with all other TS entering-tone IPA entries, which use numeric pairs (e.g. 一 `⁵⁵`, 日 `²²`, 六 `³²`). Additionally, `yue_ts` surface entries mix romanization strings (`yat1`, `lham3`) with raw IPA strings (`ɬaːm³³`, `saːn⁵⁵`, `jɐt̚⁵⁵`) in the same field, which is a field-type error.

---

### 15. `yue_ts` surface field — IPA strings entered in romanization field

- **Current (examples):** `"yue_ts": "ɬaːm³³"`, `"yue_ts": "saːn⁵⁵"`, `"yue_ts": "jœŋ²¹"`, `"yue_ts": "jɐt̚⁵⁵"` in the `surface` object
- **Expected:** Romanization only in `surface`; IPA only in the `ipa` object
- **Why:** The `surface` field for `yue_ts` inconsistently alternates between proper Taishanese romanization strings (e.g. `lham3`, `yat1`, `chat1`) and raw IPA (e.g. `ɬaːm³³`, `jœŋ²¹`). IPA in the surface field renders incorrectly in the UI and prevents cross-dialect romanization comparison. This affects at minimum: 三 (`ɬaːm³³`), 山 (`saːn⁵⁵`), 羊 (`jœŋ²¹`), 龍 (`lʊŋ²¹`), 虎 (`fu³⁵`), 火 (`fɔ³⁵`) and numerous other entries.

---

### 16. 行:1 (walk) — `yue` HAN_VARIANTS — White reading haang4 missing; only literary hang4 listed

- **Current HAN_VARIANTS:** `"surface": "hang⁴"`, `"ipa": "hɐŋ˨˩"`, label "行走・行動"
- **Expected (additional entry):** `"surface": "haang4"`, `"ipa": "haːŋ˨˩"`, label "行走（白讀，口語）"
- **Why:** The 文白異讀 of 行 is one of the most-cited examples in Cantonese phonology textbooks: `hang4` (hɐŋ, short vowel) = 文讀 used in formal/written compounds (行動 haang4/hang4); `haang4` (haːŋ, long vowel) = 白讀 colloquial "to walk." In contemporary Hong Kong and Guangzhou speech, the colloquial walking sense uses `haang4` almost exclusively. The HAN_VARIANTS entry lists only the literary form.

---

### 17. 食 — `yue` — Colloquial white reading sek6 absent from both surface and HAN_VARIANTS

- **Current surface:** `"yue": "sik6"` (IPA `sɪk̚˨`); no `yue` entry in the 食 HAN_VARIANTS block
- **Expected HAN_VARIANTS addition:** `{"surface": "sek6", "ipa": "sɛk̚˨", "label": "食（白讀，吃 eat）"}` alongside existing `sik6` entry
- **Why:** 食 exhibits the canonical Cantonese 文白異讀: `sik6` (文讀, used in 食物、食品) vs `sek6` (白讀, the near-universal colloquial verb "to eat" in Hong Kong and Guangzhou speech). The current data gives only `sik6`, which is the minority literary reading for the verb-of-eating meaning. HAN_VARIANTS documents this distinction for Min (nan: 文/白) but not for Cantonese.

---

### 18. 行:2 (profession) — `yue_ts` — Tone 3 (hong3 / hɔŋ³³) suspect for MC 陽平

- **Current:** `"yue_ts": "hong3"` (IPA `hɔŋ³³`)
- **Expected (tentative):** `"hong4"` or `"hong5"` depending on which Taishanese category 匣母 陽平 falls into
- **Why:** 行 (háng) is MC 匣母 陽平. In standard Cantonese `hong4` (陽平 21). In Taishanese, MC 陽平 清 (e.g. 龍、牛、羊) yields IPA `²¹` (surface digit 4 or 5 per this dataset's inconsistent assignment). 匣母 is voiced, which may shift outcomes, but assigning `hong3` (33 = 陰去, a category for MC 清聲母 去聲) is phonologically anomalous for a voiced initial 陽平 character. This should be cross-checked against Taishanese reference dictionaries (鄭守治 or 彭子遷).

---

### 19. `yue_gz` — Speaker count and description apply to the entire Guangfu group, not Gaozhou

- **Current `speakers`:** `"約6200万人 (広府片)"`; `speakersSource`: Wikipedia "Yuehai"
- **Expected (if row = Gaozhou):** ~2–3 million (Maoming city area); source: 广东省地方志 or 中国语言地图集
- **Why:** If `yue_gz` truly represents 高州粵語 (Gaozhou, Maoming), the speaker count of 62 million refers to the entire 廣府片 (Guangfu dialect group spanning Guangzhou, HK, Macau, Pearl Delta), not the Gaozhou sub-variety. This is an order-of-magnitude misattribution. Alternatively, if the row is meant to represent Guangzhou (the more natural interpretation of "gz"), the speaker count is approximately right but the meta label is wrong (see Issue 4).

---

### 20. `yue_zs` — Data is virtually identical to `yue_gz`; distinct Zhongshan 石岐 features absent

- **Current:** Every `yue_zs` surface and IPA value inspected (all 60+ characters) is identical to `yue_gz`
- **Expected:** At minimum, the known 石岐話 tone-merger distinctions and a small set of vowel-quality differences from Guangzhou
- **Why:** The meta for `yue_zs` explicitly states "distinguished from Guangzhou by several vowel quality shifts and a partly merged tone system" (and equivalents in all 18 UI languages). Yet the data rows are a carbon copy of `yue_gz`. Either (a) the data was not populated with 石岐話 sources and should be marked as provisional/placeholder, or (b) the meta descriptions misrepresent what is actually Guangzhou data relabelled as Zhongshan. Notable Zhongshan features that should appear — rising-tone merger of 陽上+陰上 in some registers, vowel rounding differences for 果攝 — are entirely absent.

---

### 21. 見 — `yue_nn` — Wrong tone (gin1 / kiːn˥ instead of gin3 / kiːn³³)

- **Current:** `"yue_nn": "gin1"` (IPA `kiːn˥`)
- **Expected:** `"gin3"` (IPA `kiːn³³`)
- **Why:** 見 is MC 見母 去聲 → Cantonese 陰去 (tone 3 = 33). `yue_hk`, `yue_gz`, `yue_dg`, `yue_zs` all give `gin3`. The Nanning value `gin1` (陰平 55) contradicts the expected MC-to-Yue mapping. IPA `˥` (55 high-flat) confirms the wrong tone. This follows a pattern in `yue_nn` where a handful of characters were entered with tone 1 instead of tone 3.

---

### 22. 虎 — `yue_nn` — Wrong tone (fu3 / fu³³ instead of fu2 / fu³⁵)

- **Current:** `"yue_nn": "fu3"` (IPA `fu³³`)
- **Expected:** `"fu2"` (IPA `fu³⁵`)
- **Why:** 虎 is MC 曉母 上聲 → Cantonese 陰上 (tone 2 = 35). `yue_gz`, `yue_hk`, `yue_dg`, `yue_zs` all give `fu2`. `yue_nn` assigns `fu3` (陰去 33), the wrong tone class. The same error affects 口 `yue_nn` = `hau3` (IPA `hau³³`) where `hau2` (陰上 35) is expected for MC 溪母 上聲. Both errors suggest `yue_nn` tone-3 forms are being entered for characters whose MC-to-Yue mapping yields tone-2.

---

### 23. `yue_ts` romanization uses `sh-` initial for 食 and `shau2` for 手 — non-standard for Taishanese

- **Current:** `"yue_ts": "shik6"` (食); `"yue_ts": "shau2"` (手)
- **Expected:** `"sik6"` or `"ɬik6"` (食, if this variety has ɬ-); context suggests `sɪk̚˨` IPA is standard s- in TS; `sau2` / `ɬau2` for 手
- **Why:** The Taishanese romanization used throughout this dataset generally writes the voiceless lateral fricative as `lh-` (e.g. 三 `lham3`, 十 `lhip32`). The digraph `sh-` appears only for 食 and 手 among the TS entries and does not correspond to any established Taishanese romanization convention (neither the community standard romanization by Stephen Li nor the 台山話拼音方案). IPA for 手 is given as `sɐu˧˥` (with s- not ɬ-), which contradicts `sh-` if sh = ɬ. If 食 and 手 have regular s- in Taishanese (not ɬ-), the romanization should be `sik6` / `sau2`; `sh-` is confusable with Mandarin Pinyin.

---

## Summary of error categories

| Category | Issue numbers | Count |
|---|---|---|
| Wrong tone digit/class in `yue_dg` | 9, 10, 11, 12, 13 | 5 |
| Wrong tone in `yue_nn` | 5, 21, 22 | 3 |
| Wrong tone in `yue_gz` | 1, 2, 4 | 3 |
| Taishanese internal inconsistency | 6, 7, 14, 15, 23 | 5 |
| 文白異讀 gaps in base `yue` | 3, 16, 17 | 3 |
| Label/coverage/metadata | 4, 19, 20 | 3 |
| Truncated IPA | 8 | 1 |
| Contested reading (needs cross-check) | 18 | 1 |

**Total defensible issues: 23**
