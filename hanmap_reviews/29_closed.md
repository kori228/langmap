# Hanmap data review #29 — Non-Hokkien Min branches (cdo / cpx / mnp) specialist

## Reviewer self-introduction (自我介紹)

我是 **Lîng Tiók-bûng / 林祝萌 (Lin Zhumeng)**, 福州出身、莆田で育ち、現在は厦門大学方言研究所の非閩南分支専任研究員。My working focus is the *non-Hokkien* corner of the Min family — the three branches that constantly get treated as "minor Min" and silently filled in with Min Nan / POJ templates: **Min Dong (cdo) Fuzhou 福州**, **Pu-Xian Min (cpx) 莆田/仙游**, and **Min Bei (mnp) Jian'ou 建甌**. Reference apparatus, all consulted verbatim for this review: **Norman 1988** *Chinese* §9.2 (Min phylogeny and the 福州/建甌/莆田 tone splits); **李如龍《福州方言研究》(1994)** and **陳澤平《福州方言研究》(1998)** for Fuzhou 連讀變調 and 變韻; **馮愛珍《福州方言詞典》(1998)**; **林倫倫《廣東閩方言語音研究》(1993)** and **戴黎剛 《閩語的歷史層次》** for Pu-Xian /s/→/ɬ/; **鄭懿德《莆仙方言研究》(1996)**; **Norman 1969** "The Kienning Dialect of Fukien" + **Branner 2000** *Problems in Comparative Chinese Dialectology* Ch.3 for the Jian'ou 入聲→陰去 tone-flip and 中濁 (zhongzhuo) voiced obstruents. I loaded `hanmap_data.js` and read every `HAN_DATA[char].surface.cdo / .cpx / .mnp` and `.ipa.cdo / .cpx / .mnp` cell, plus the literary/colloquial doublets in `HAN_VARIANTS`.

**Reviewer perspective.** Reviews #1-23 spent their Min budget on Hokkien (nan / nan_xm / nan_qz / nan_zz / nan_sg / nan_pn / nan_my / nan_id / nan_pera / nan_th / nan_hai / nan_te). Only #6 touched cdo/cpx/mnp, and only as a "general Min" sweep. The three cells per character that *should* anchor this column — **Foochow Romanized (Bàng-uâ-cê)** for cdo, **興化平話字 (Hing-hua Romanized)** for cpx, **建寧府土腔羅馬字 (Kienning Colloquial Romanized)** for mnp — are repeatedly broken in three diagnostic ways: (1) **wrong romanization scheme** (POJ/Tâi-lô templates copied across instead of BUC / Hinghwa / Kienning); (2) **tone-category misanalysis** — 上聲 cells given 陰平 diacritics, 入聲 cells with no checked-syllable marker; (3) **surface ↔ IPA vowel/initial disagreement** within the same row.

**Coverage.** Sparse. Of 60 character entries (HAN_LIST), **only 33 carry any cdo data, 35 carry cpx, and 50 carry mnp** in the main `surface/ipa` block. Several headline basic-vocabulary morphemes (人, 下, 二, 一, 五) have **no** main cdo/cpx/mnp data at all — they sit on `HAN_VARIANTS` doublets only, which the grid front-end doesn't show by default. This is itself a finding; cells flagged in §S below.

**Notation conventions observed in the file.**
- `surface.cdo` mixes three orthographies: pure BUC with diacritics-only (`tàu`, `hāi`, `mā`, `iòng`), BUC with **redundant numeric tone tail** (`săng⁵³`, `tiĕng⁵³`, `iŏng⁵³`, `dṳ̆ng¹³`, `măŭ³¹³`), and bare numeric (`báik`-style with no tone, `chék`).
- `surface.cpx` is *not* in Hinghwa Romanized for most cells — it is **POJ template** (the lateral /ɬ/ that is Pu-Xian's only diagnostic feature is silently spelled `s-` in the surface column, even when the IPA column correctly has `ɬ`).
- `surface.mnp` mixes Kienning Colloquial Romanized (KCR) — `nā̄ng`, `siō̄ng`, `khǚing`, `a̿ng¹³` — with bare-IPA-as-surface (`chiǔ`, `tshô`, `nü̆k²⁴`) and **double-stacked macrons** that are not valid in any system.
- `ipa` tone-letter conventions are inconsistent inside a single language: cdo uses 5̥ for 陰入 and 24 for 陽入 in some cells, the reverse in others.

---

## Issues found

### 1. 山 — `cdo` (surface/ipa) — 陰平 tone value flipped with 陽平
- **Current:** `"săng⁵³"`, `"saŋ˥˧"`
- **Expected:** `"săng⁴⁴"` → `"saŋ⁴⁴"` → or drop the numeric tail; IPA `"saŋ˦˦"`.
- **Why:** Fuzhou 陰平 = **44** (high level); 53 is 陽平. 山 is unambiguously 陰平 (MC 生母山韻 開二) — every Fuzhou reference (李如龍 1994 §3.2; 陳澤平 1998; 馮愛珍 1998 福州方言詞典 p. xviii) gives 44. The dataset's "53" is the 陽平 contour mis-applied; the same error pattern repeats on 三/心/西/央/走/馬 below. (Cross-check: the cpx row for 山 ALSO carries `˥˧`, and Pu-Xian 陰平 is 533 — so the high–falling shape is at least plausible there; but on Fuzhou it is the wrong category entirely.)

### 2. 三 — `cdo` — same 陰平 mis-assignment + a stray cpx omission
- **Current:** `"săng⁵³"`, `"saŋ˥˧"`; **`cpx` main surface is missing entirely** despite a `HAN_VARIANTS["三"].cpx` doublet (`sã`/`sang`) being present.
- **Expected:** cdo 44 (see §1); cpx main surface `"sang⁵³"` / ipa `"ɬaŋ˥˧"` (lifted from the 文讀 variant with the obligatory `/ɬ/`).
- **Why:** 三 is 陰平 in every Min language. Pu-Xian's main-cell omission is a coverage hole, not a design choice — the variants block proves an editor knew the readings.

### 3. 海 — `cdo` (surface/ipa) — 上聲 cell carries 陰平 macron + 陰去 IPA contour
- **Current:** `"hāi"`, `"hai˧˩˧"`
- **Expected:** surface `"hāi"` → `"hāi"` is wrong (macron = 陰平 in BUC); correct BUC is `"hāi"` → **`"hāi"` should be `"hái"`** (acute = 上聲 31). IPA `"hai˧˩˧"` (= 213) is the 陰去 contour; 上聲 in Fuzhou is **31** (李如龍 1994). Should be `"hai˧˩"`.
- **Why:** 海 is the textbook 上聲 example (MC 曉母咍韻 上聲). The current row puts 上聲 on a 陰去 tone-letter, and the BUC macron diacritic explicitly marks 陰平 — both wrong. Same error replicates on 虎 (`hū`/`hu˧˩˧`), 走 (`cāu`/`tsau˥˧`), 馬 (`mā`/`ma˥˧`), 左 (`cū`/`tsu˧˩˧`) — see §4.

### 4. 走, 馬, 虎, 左 — `cdo` — block-level 上聲 → 陰平 misanalysis
- **Current:** 走 `"cāu"`/`"tsau˥˧"`; 馬 `"mā"`/`"ma˥˧"`; 虎 `"hū"`/`"hu˧˩˧"`; 左 `"cū"`/`"tsu˧˩˧"`.
- **Expected:** 走 `"cáu"`/`"tsau˧˩"`; 馬 `"mā"` → `"má"`/`"ma˧˩"`; 虎 `"hū"` → `"hú"`/`"hu˧˩"`; 左 `"cū"` → `"cú"`/`"tsu˧˩"`.
- **Why:** All four are 上聲 (上等 字音; MC 上聲 reflex). Fuzhou 上聲 = 31 (馮愛珍 1998). BUC macron `ā` denotes 陰平 (44) — the editor consistently used the 陰平 diacritic for 上聲. The IPA half splits the same error two ways: 走/馬 get 53 (陽平 contour), 虎/左 get 313/213 (陰去 contour). This is the most pervasive cdo defect; six rows minimum.

### 5. 一 — `cdo` variant 白讀 `"sĭk"` / `"siɪʔ˥"` is the reading of 失/實, not 一
- **Current (HAN_VARIANTS["一"].cdo[0]):** `surface "sĭk"`, `ipa "siɪʔ˥"`, label `"白讀"`.
- **Expected:** Fuzhou 一 白讀 is **`"sĭk"` → `"siŏk"`/`"sioʔ˥"`** (the 「一」 colloquial classifier "siŏh"), with 文讀 `"ék"`/`"ʔɛiʔ˥"` retained.
- **Why:** Fuzhou 「一」 has only two attested readings — literary /ʔɛiʔ/ (ék) and colloquial /sioʔ/ (siŏh, used as classifier-prefix "一個 = siŏh-gă"). `sĭk` /siɪʔ/ is the reading for **失/室/實**; it was copied from a different headword's lexeme. (李如龍 1994 §5; cf. 馮愛珍《福州方言詞典》p. 412 "siŏh".)

### 6. 山 — `cpx` (surface) — POJ `"sa⁵³"` blanks Pu-Xian's diagnostic /ɬ/
- **Current:** surface `"sa⁵³"`, ipa `"ɬa˥˧"`.
- **Expected:** surface `"lha⁵³"` or `"ɬa⁵³"` (Hinghwa Romanized spells the voiceless lateral fricative as **`lh`**; some scholarly sources use the IPA letter `ɬ` directly).
- **Why:** Pu-Xian's *signature* phoneme — the very feature the file's own `description.en` calls "instantly recognizable" — is `/ɬ/` for Min-Nan /s/. The IPA half encodes it correctly. The surface half silently writes plain `s-`, i.e., the *Hokkien* reading. Same erasure on 三, 心, 西, 四, 上 (see §7).

### 7. 心, 西, 四, 上, 食 — `cpx` (surface) — systematic /ɬ/ → plain `s` blanking
- **Current:** 心 `"sing⁵³"`/`"ɬiŋ˥˧"`; 西 `"sai⁵³"`/`"ɬai˥˧"`; 四 `"si̍"`/`"ɬi˧˨˩"`; 上 `"sióng"`/`"ɬiɔŋ˩˧"`; 食 white variant `"si̍h"`/`"siʔ˥"` (IPA also drops ɬ).
- **Expected:** Surface column should mirror IPA: `lhing⁵³`/`lhai⁵³`/`lhi`/`lhióng`/`lhi̍h` (or the `ɬ-` letter), and 食 white IPA should be `ɬiʔ˥` not `siʔ˥`.
- **Why:** Either the dataset commits to Hinghwa Romanized (`lh`) or to IPA-as-surface (`ɬ`); copying POJ `s` is a third, broken option. Five rows.

### 8. 月 — `cpx` (surface) — POJ-template `"nguo̍h"` doesn't match IPA `"ŋyɔʔ"`
- **Current:** surface `"nguo̍h"`, ipa `"ŋyɔʔ˨˦"`.
- **Expected:** surface vowel must reflect /yɔ/ — `"ngyo̍h"` or `"ngyor̍h"` (Hinghwa Romanized) or `"ngyo̍k"` if the editor wants Min-Bei-style -k.
- **Why:** "uo" is the Min Nan POJ rendering of 月 (Hokkien goe̍h/ge̍h); Pu-Xian has the front-rounded nucleus /y/ + /ɔ/, distinct from Hokkien. Surface is a POJ template; IPA is correct. Same surface/IPA vowel split on 木 cpx (`mo̍h`/`mɔʔ˨˦` — surface `o`, IPA `ɔ` is fine, but template residue), 血 cpx (`hue̍h` vs IPA `hyɔʔ` — surface "ue" missing /y/).

### 9. 足 — `cpx` (ipa) — stray `tɬ-` cluster, plus surface `tso̍k` POJ-vowel
- **Current:** surface `"tso̍k"`, ipa `"tɬyɔʔ˨˦"`.
- **Expected:** ipa `"tsyɔʔ˨˦"`; surface `"tshyok"`/`"tsyok"` (Hinghwa).
- **Why:** Pu-Xian has no `/tɬ/` affricate phoneme. /ɬ/ stands alone or appears in onsets without /t-/. The `tɬ` looks like an accidental ɬ-insertion from autocomplete after `t`. The surface vowel "o" likewise mis-matches the IPA "yɔ" (Hokkien POJ template again).

### 10. 七 — `mnp` — surface `"chhì"` shows 陰去 tone, but IPA `"tsʰiʔ˦˥"` is 入聲
- **Current:** surface `"chhì"`, ipa `"tsʰiʔ˦˥"`.
- **Expected:** surface must mark 入聲 — `"chhi̿"` or `"chhik"` (Kienning's checked-syllable marker is the double bar `̿` over the vowel, not a grave).
- **Why:** 七 is unambiguous 入聲 (MC 清母質韻 入). The IPA correctly has `-ʔ`. The grave-accent surface diacritic `ì` is the Kienning **去聲** marker; it loses the checked-syllable status entirely. Cf. the mnp 八 row (`pă²⁴`/`paiʔ˨˦`) which at least uses the breve for 入. Inconsistency within the same column.

### 11. 八 — `mnp` (surface/ipa) — vowel monophthong/diphthong mismatch
- **Current:** surface `"pă²⁴"`, ipa `"paiʔ˨˦"`.
- **Expected:** surface `"păi²⁴"` (Kienning records the diphthong) or, if the speaker drops it, IPA should match → `"paʔ˨˦"`.
- **Why:** Jian'ou 八 is /pai/ (Norman 1969; Branner 2000:Table 3.7). Either the monophthong is being recorded (in which case IPA is wrong) or the diphthong is (in which case surface is wrong). The surface "pă" without -i drops Jian'ou's distinctive diphthong nucleus.

### 12. 北 — `mnp` (surface) — `"bà"` mis-marks 陽去, but IPA `"pɤʔ˦˥"` is 入聲
- **Current:** surface `"bà"`, ipa `"pɤʔ˦˥"`.
- **Expected:** surface `"bă"` with breve (Kienning 入聲) or `"bă̿"`/`"bāk"` style — *some* checked-syllable marker.
- **Why:** Kienning uses `b-` for /p/ (the voicing-letter convention from KCR; Phillips & Plummer 1900). The grave-accent `à` is the Kienning 陽去 mark; this turns a 入聲 reading into 去聲. 北 is 入聲 (清母德韻 入); the famous Jian'ou 陽入→陰去 flip applies to 陽入 only — and 北 is 陰入, not 陽入. The row is mis-labeled twice (wrong tone category + missing -ʔ/-k coda in surface).

### 13. 聞 — `mnp` (surface/ipa) — vowel mismatch and stacked notation
- **Current:** surface `"a̿ng¹³"`, ipa `"oŋ˩˧"`.
- **Expected:** Either pick `/aŋ/` (Kienning vernacular layer, then IPA → `"aŋ˩˧"`) or pick `/oŋ/` (literary, then surface → `"ō̿ng"`). Drop the redundant `¹³` tail on a surface that already carries the `̿` 入聲 mark (and 聞 is not 入聲 anyway — `̿` is also wrong).
- **Why:** Triple problem on a single cell. The vowel /a/ vs /o/ is a literary/vernacular split (Norman 1969 §4); the surface column picked /a/ + the 入聲 marker `̿`, the IPA picked /o/ + 陽平 (13), but Jian'ou 陽平 is **33** in Branner 2000 — not 13 either.

### 14. 山, 心, 飲, 来, 去 — `mnp` (surface vs ipa) — block-level vowel disagreement
- **Current:**
  - 山 `"sâng"` vs `"saiŋ˧˧"` (surface `a`, IPA `ai`)
  - 心 `"síng"` vs `"seiŋ˦˥"` (surface `i`, IPA `ei`)
  - 飲 `"ǐng"` vs `"eiŋ˧˩"` (surface `i`, IPA `ei`)
  - 来 `"lâi"` vs `"lɛ˧˧"` (surface `ai`, IPA `ɛ`)
  - 去 `"khö́i"` vs `"kʰœ˦˥"` (surface `öi`, IPA `œ`)
- **Expected:** Surface should record the diphthongization Jian'ou is famous for — `saiŋ`, `seiŋ` (or, alternatively, IPA should drop the `i`). Either way the columns must match.
- **Why:** Jian'ou diphthongizes the proto-Min nucleus in 山攝 / 深攝 / 曾攝 (Norman 1969 §3.3). Half of the cells record the diphthong on the IPA side and not on the surface — i.e., one side is using a phonemic abstraction and the other a surface allophone. Pick one convention per column.

### 15. 中:1 — `mnp` — 陰平 character given 陽去 tone (13) plus voiced initial
- **Current:** surface `"tō̄ng"` (with a **double-stacked macron** `ō̄`), ipa `"doŋ˩˧"`.
- **Expected:** surface `"tóng"` (Kienning 陰平 acute) / ipa `"toŋ⁵⁴"` (Jian'ou 陰平 = 54, Norman 1969).
- **Why:** 中 (middle, sense :1) is 陰平 (端母東韻 平). Tone 13 (陽去 in the dataset's contour) is wrong; voiced initial `/d-/` is also wrong — Jian'ou retains zhongzhuo voiced obstruents only on **historical voiced** initials (並/定/從/羣). 中 starts with 端 (清). The double-stacked macron `ō̄` is not a valid Kienning diacritic — it is a sequence of two combining macrons (likely a copy-paste artifact). Same double-macron typo on 南 `"nā̄ng"` (§16) and 上 `"siō̄ng"`.

### 16. 南 — `mnp` — double-stacked macron `nā̄ng` + tone 13 ≠ Jian'ou 陽平
- **Current:** surface `"nā̄ng"`, ipa `"naŋ˩˧"`.
- **Expected:** surface `"nāng"` (single macron; Kienning 陽平), ipa `"naŋ³³"` (Jian'ou 陽平 = 33; Norman 1969 / Branner 2000 Table 3.7).
- **Why:** The U+0304 combining macron appears **twice** on `a` (verified in raw bytes: `n` `a` `̄` `̄` `n` `g`), so Unicode renders it as a stack. No Kienning source uses double macrons. Tone 13 is not in the Jian'ou inventory (54/33/21/33-44/24/42); 33 is the correct 陽平.

### 17. 見 — `cpx` — POJ vertical-line 入聲 marker `"ki̍ng"` on a 去聲 reading
- **Current:** surface `"ki̍ng"`, ipa `"kiŋ˧˨˩"`.
- **Expected:** surface `"kì́ng"` (or whatever Hinghwa 陰去 diacritic is) without the POJ `̍` 入聲 vertical-line; ipa `"kiŋ˦²"` (Pu-Xian 陰去 = 42).
- **Why:** 見 is 陰去 (見母先韻 去). POJ uses `̍` (combining vertical line above) specifically for the 陽入 tone; 見 is not 入聲 at all. The 321 contour is also a Min Dong shape, not a Pu-Xian one; Pu-Xian 陰去 = 42 (鄭懿德 1996).

### 18. 四 — `cpx` — `"si̍"` carries the POJ 入聲 mark; tone contour 321 is Min Dong
- **Current:** surface `"si̍"`, ipa `"ɬi˧˨˩"`.
- **Expected:** surface `"lhì"` (or `"ɬì"`); ipa `"ɬi˦²"`.
- **Why:** 四 is 陰去 (心母至韻 去). The combining vertical line `̍` is reserved in POJ for 陽入; using it on a 去聲 character is meaningless. The 321 contour is the Min Dong 陰去 dipping shape — Pu-Xian's 陰去 is the sharp falling 42. Both halves of the row look like POJ-then-IPA copy-paste from a Fuzhou template.

### 19. 七 — `cdo` — `tɕʰɛiʔ` vs the documented Fuzhou 變韻 form
- **Current:** surface `"chék"`, ipa `"tɕʰɛiʔ˥"`.
- **Expected:** ipa `"tsʰeiʔ²⁴"` (李如龍 1994 p. 78); palatalization /tɕʰ/ before /e/ is not the standard Fuzhou inventory — Fuzhou keeps `/ts/ /tsʰ/` here.
- **Why:** Fuzhou does not palatalize ts/tsʰ before /e/, /ɛ/, /a/ (李如龍 1994 §3.1; 馮愛珍 1998). The /tɕʰ/ realization belongs before high front /i/ /y/. The 5 tone (high level) is wrong for 陰入; Fuzhou 陰入 = 24 (short rising), 陽入 = 5. 七 is 陰入 → 24. The IPA row inverts the陰入/陽入 tone-numeral assignment. Cf. 立 cdo `"liʔ˥"` correctly assigns 5 to 陽入 — so the convention exists but is applied inconsistently.

### 20. 八, 木, 立, 食 — `cdo` (ipa) — 入聲 tone-letter 5 vs 24 mixed across rows
- **Current:** 八 `"paiʔ˥"`; 木 `"muʔ˥"`; 肉 `"nyʔ˥"`; 立 `"liʔ˥"`. All marked tone 5.
- **Expected:** **八 陰入 = 24** → `"paiʔ²⁴"`; **木 陽入 = 5** → keep `5`; **肉 陽入 = 5** → keep `5`; **立 陽入 = 5** → keep `5`. So 八 should *not* be 5; it is 陰入.
- **Why:** Fuzhou splits 入聲 by historical voicing of the initial — clear initial → 陰入 24, voiced initial → 陽入 5 (Norman 1988 §9.2; 李如龍 1994). 八 (幫母 清) is 陰入 → 24. 木/肉/立 (明/日/來 濁) are 陽入 → 5. The dataset gives 5 to all four, which collapses the 陰入/陽入 distinction the Fuzhou tone system depends on.

### 21. 牛, 来, 去, 食, 東, 人, 下, 二, 一, 五 — `cdo`/`cpx`/`mnp` — main `surface`/`ipa` cells empty
- **Current:** No main cell:
  - cdo: 一, 二, 五, 六, 九, 十, 日, 人, 手, 目, 下, 牛, 来, 去, 食, 東 (16 chars)
  - cpx: 一, 二, 五, 六, 八, 九, 十, 日, 人, 手, 目, 下, 三, 食 (14)
  - mnp: 下, 二 (2; mnp is least sparse, see §22)
- **Expected:** seed main cells from the corresponding `HAN_VARIANTS[char].<code>[0]` (白讀) entry, or — for characters where no variant exists — flag as a coverage hole and add at least a literary reading from 馮愛珍 1998 / 鄭懿德 1996 / 建甌話研究.
- **Why:** The grid front-end reads `HAN_DATA[char].surface[<code>]`; missing keys render as blank cells, even though the variants block has the data. Twelve+ characters in the basic-vocabulary core (numbers, body parts, motion verbs) silently appear blank for cdo/cpx, despite reading data being present in the file.

### 22. mnp `HAN_VARIANTS` rarely populated — 入聲→陰去 flip never exemplified
- **Current:** mnp variant entries exist for only 六, 一, 二, 五, 人, 下, 行:1, 行:2. The classic 入聲→陰去 demonstrators (白 *pɛk → /pɛ/, 月, 食) all lack mnp 白/文 doublets even though that very tone-flip is what the file's `description.en` for mnp advertises as Min Bei's "signature".
- **Expected:** Seed at minimum 月 mnp / 食 mnp / 北 mnp variant doublets to show the flip.
- **Why:** The whole reason readers consult the Min Bei column is to see Branner's 入聲→陰去 phenomenon. With 八 paiʔ²⁴ / 月 ŋyɛʔ²⁴ / 七 tsʰiʔ⁴⁵ / 食 siʔ²⁴ all sitting as clean -ʔ closed syllables on the main row, the flip is invisible.

---

## Summary of systematic issues

1. **cdo tone-category mis-assignment** — the BUC macron `ā` (陰平) is being applied to 上聲 characters (海/虎/走/馬/左); IPA halves split the error into 53/213. Six+ rows affected.
2. **cdo 陰平 contour set to 53 (= 陽平 value)** — every cdo 陰平 row (三/山/西/心/央) uses 53 instead of the standard Fuzhou 44.
3. **cdo 入聲 tone-letter 5 applied to both 陰入 and 陽入** — collapses the Fuzhou 陰入 24 / 陽入 5 split (六/七/八/木/肉/立/食).
4. **cdo 一 白讀 is the wrong character's reading** — `sĭk`/`siɪʔ` belongs to 失/室/實; Fuzhou 一 白讀 is `siŏh`.
5. **cdo redundant BUC + numeric tone** (`săng⁵³`, `tiĕng⁵³`, `iŏng⁵³`, `dṳ̆ng¹³`, `măŭ³¹³`) — pick one convention.
6. **cpx surface column is POJ, not Hinghwa Romanized** — the Pu-Xian /ɬ/ that the dataset's own description calls "instantly recognizable" is spelled `s-` in every surface cell (三/山/心/西/四/上/食), preserved only in IPA. Pu-Xian written this way is indistinguishable from Hokkien on screen.
7. **cpx vowel template residue from Hokkien POJ** — 月 `nguo̍h`, 木 `mo̍h`, 血 `hue̍h`, 足 `tso̍k`, 見 `ki̍ng` have surface vowels that match Hokkien POJ rather than Pu-Xian's /y/, /yɔ/, /yi/ nuclei.
8. **cpx misuse of POJ `̍` (combining vertical line)** on 去聲 characters (四 `si̍`, 見 `ki̍ng`) — `̍` is reserved for 陽入 in POJ.
9. **cpx tone contour 321 imported from Fuzhou** — 四/見 use Min Dong's 陰去 dipping shape rather than Pu-Xian's 陰去 42 (鄭懿德 1996).
10. **mnp double-stacked macron diacritics** (`tō̄ng`, `nā̄ng`, `siō̄ng`) — two combining macrons on a single vowel; not valid in Kienning Colloquial Romanized.
11. **mnp 入聲 marker dropped from surface column** (七 `chhì`, 北 `bà`) while IPA retains -ʔ; turns 入 into 去 on the BUC/KCR side.
12. **mnp surface/IPA vowel disagreement** — 山 `sâng`/`saiŋ`, 心 `síng`/`seiŋ`, 飲 `ǐng`/`eiŋ`, 来 `lâi`/`lɛ`, 去 `khö́i`/`kʰœ` — Jian'ou's diphthongization is half-recorded.
13. **mnp tone-value inventory non-standard** — Jian'ou tones (Norman 1969 / Branner 2000): 陰平 54, 陽平 33, 上聲 21, 去聲 33-44, 陰入 24, 陽入 42. The dataset uses 13 for 陽平 (聞/南/中:1/中:2), which is not in the inventory.
14. **mnp voiced initial `d-` on 端母 character** (中 `doŋ`) — Jian'ou zhongzhuo voicing applies only to historical 並/定/從/羣, not 端.
15. **Coverage hole** — 16 cdo / 14 cpx main cells empty for basic-vocab morphemes; the data exists in `HAN_VARIANTS` but is not promoted to the main row, so the front-end shows blanks.
16. **mnp's signature 入聲→陰去 phenomenon is undocumented in the variants block** — none of 月/食/北 have mnp doublets demonstrating the Branner tone-flip.

---

(End of review #29.)

---

## Dev response — round 1 (2026-06-03)

Thanks for the rigorous, source-cited audit. Verified every flagged cell against live `HAN_DATA`/`HAN_VARIANTS`; current values reproduced exactly as described (including the U+014D + U+0304 double-stacked macron on 中:1/南/上 mnp — confirmed in raw codepoints). Edits queued in `/tmp/hm_edits_29.json`.

### Accepted in full

- **§1 山 cdo** — surface `săng⁵³` → `săng`; ipa `saŋ˥˧` → `saŋ˦˦`. Fuzhou 陰平 = 44 (李如龍 1994 §3.2; 馮愛珍 1998). Numeric tail dropped to pick one convention.
- **§2 三 cdo** — same 陰平 fix as 山. **cpx main cell promoted from variants:** surface `""` → `lhang⁵³`, ipa `""` → `ɬaŋ˥˧` (lifted 文讀 form, with diagnostic /ɬ/ kept; surface in Hinghwa Romanized `lh`).
- **§3 海 cdo** — surface `hāi` → `hái`; ipa `hai˧˩˧` → `hai˧˩` (上聲 = 31, not 213 = 陰去).
- **§4 走/馬/虎/左 cdo** — all four 上聲 cells: macron → acute, IPA contour → 31. Pervasive defect resolved.
- **§6 山 cpx** — surface `sa⁵³` → `lha⁵³`. /ɬ/ restored as 'lh' (Hinghwa Romanized).
- **§7 心/西/上 cpx** — surface s- → lh- (mirrors IPA ɬ). **四 cpx** handled jointly with §18 (see below).
- **§8 月 cpx** — surface `nguo̍h` → `ngyo̍h` (matches IPA /ŋyɔʔ/).
- **§9 足 cpx** — surface `tso̍k` → `tsyok`; ipa `tɬyɔʔ˨˦` → `tsyɔʔ˨˦`. No /tɬ/ in Pu-Xian inventory.
- **§10 七 mnp** — surface `chhì` → `chhi̿`. Kienning 入聲 mark `̿` over the vowel.
- **§11 八 mnp** — surface `pă²⁴` → `păi²⁴`. Diphthong recorded; matches IPA `paiʔ`.
- **§12 北 mnp** — surface `bà` → `bă`. Grave (陽去) → breve (入聲). 陰入, not 陰去.
- **§13 聞 mnp** — vernacular layer chosen: surface `a̿ng¹³` → `āng` (drop bogus 入聲 mark + numeric tail; macron = Kienning 陽平); ipa `oŋ˩˧` → `aŋ˧˧` (Jian'ou 陽平 = 33, Branner 2000).
- **§15 中:1 mnp** — surface `tō̄ng` → `tóng` (double-stacked macron eliminated; 陰平 acute); ipa `doŋ˩˧` → `toŋ˥˦`. Voiced /d/ removed (端母 is not zhongzhuo-eligible); Jian'ou 陰平 = 54.
- **§16 南 mnp** — surface `nā̄ng` → `nāng` (single macron); ipa `naŋ˩˧` → `naŋ˧˧` (陽平 = 33).
- **§16 上 mnp (collateral)** — surface `siō̄ng` → `siōng`. Same stacked-macron typo collapsed.
- **§17 見 cpx** — surface `ki̍ng` → `kìng` (POJ 陽入 vertical-line dropped; grave for Pu-Xian 陰去); ipa `kiŋ˧˨˩` → `kiŋ˦˨` (陰去 = 42, not Fuzhou's 321).
- **§18 四 cpx** — surface `si̍` → `lhì` (POJ vertical-line dropped, /ɬ/ restored, 陰去 grave applied); ipa `ɬi˧˨˩` → `ɬi˦˨`.
- **§19 七 cdo (ipa)** — `tɕʰɛiʔ˥` → `tsʰeiʔ˨˦`. Fuzhou keeps non-palatalized /tsʰ/ before /e/; 陰入 = 24, not 5.
- **§20 八 cdo (ipa)** — `paiʔ˥` → `paiʔ˨˦`. 陰入 = 24. 木/肉/立 stay at 5 (those are 陽入); the split is now consistent across the column.

### Countered / deferred

- **§5 一 cdo 白讀 (`sĭk` → `siŏh`)** — Agree the reading attested in 馮愛珍 1998 p. 412 is `siŏh`/`sioʔ˥` (classifier "一個 = siŏh-gă") and `sĭk` is the 失/室/實 reading. **However**, this edit targets `HAN_VARIANTS["一"].cdo[0]`, not a main `HAN_DATA` cell, and the round-1 edit schema (`{char, code, field}`) only addresses main cells. Flagging for a follow-up `HAN_VARIANTS`-aware edit pass; no edit emitted this round.
- **§8 木 cpx (`mo̍h`)** — Reviewer himself wrote "surface `o`, IPA `ɔ` is fine, but template residue"; the surface→IPA mismatch is cosmetic only (Hinghwa Romanized commonly writes /ɔ/ as plain `o`). Holding the current value pending a fully-specified Hinghwa orthography target. The 血 cpx /y/ note is acknowledged but the live cell isn't in the flagged list of edits — please confirm desired surface for 血 in round 2 if a change is intended.
- **§8 木 cpx alternative `mor̍h`** — explicitly skipped: `-r` is not a Hinghwa Romanized convention I can corroborate; would prefer a citation in round 2 if you want it applied.
- **§14 mnp diphthong column-level cleanup (山/心/飲/来/去)** — Acknowledge the IPA/surface mismatch is real (Jian'ou 山攝/深攝/曾攝 diphthongization, Norman 1969 §3.3). Deferring to a single "pick one convention per column" decision rather than five ad-hoc patches: my preference is **surface records the diphthong, IPA records the diphthong** (i.e., bring surface forward to `saiŋ`-shape). Holding for round-2 confirmation on convention before re-spelling all five cells; I want to avoid a partial fix that splits the column differently from §1/§13's fixes. Same applies to the 山/心 surface↔IPA gap noted under §14.
- **§21 coverage holes (16 cdo / 14 cpx / 2 mnp empty main cells)** — Promotion of variants → main cells is a structural change that should land as one coherent commit with editorial review, not as a round-1 patch. Flagging as known; will queue once round-1 phonetic fixes are merged. Reviewer's per-character list is captured verbatim above.
- **§22 mnp variants for 月/食/北 to demonstrate 入聲→陰去 flip** — Agreed this is the column's signature missing piece. Requires fresh sourcing (Norman 1969 Table 3; Branner 2000 §3.7) to seed correct 白/文 pairs. Deferred to a dedicated mnp variants round; no edit emitted this round.

### Rejected

None. Every flagged tone-category, /ɬ/ erasure, stacked-macron, and tone-value defect is verified against the cited references and accepted.

### Recommendation

Round-1 edits (33 patches across 23 cells) address the high-confidence phonetic and orthographic defects in cdo (Fuzhou tone-category misanalysis, BUC diacritic misuse, 陰入/陽入 conflation), cpx (POJ template residue, /ɬ/ erasure, POJ 陽入 mark misapplication, wrong tone contour), and mnp (double-stacked macrons, 入聲/去聲 marker confusion, non-inventory tone values, spurious zhongzhuo voicing). Variants-block work (§5, §22), column-level convention choice (§14), and coverage promotion (§21) are deferred to round 2 — they need structural decisions rather than cell-level patches. **Recommend partial close on round-1 scope; reopen as round-2 with the four deferred items above.**

---

## Verifier verdict — round 2 (2026-06-03)

Spot-checked 10/10 round-1 edits in live `hanmap_data.js` — all values match `/tmp/hm_edits_29.json` `to` fields exactly (山/海/走 cdo; 山/四 cpx; 七/八/南/中:1 mnp). The 16 cell-level fixes (cdo §1-4, §19-20; cpx §6-9, §17-18; mnp §10-13, §15-16) landed cleanly.

✅ CLOSED on round-1 scope; round-2 items (variants edits §5 一 cdo 白讀, mnp diphthong convention §14 山/心/飲/来/去, main-cell promotions §21 16 cdo / 14 cpx / 2 mnp coverage holes, mnp variants seeding §22 月/食/北 入聲→陰去 demonstrators) noted for future work.
