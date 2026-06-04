# Hanmap data review #35 — Numerals 一二三四五六七八九十 round-2 audit

## Reviewer self-introduction (自己紹介)

Sinitic dialectology and historical-comparative numerology specialist, round-2 follow-up to review #1 (Middle Chinese numerals). Working library cross-checked against every `surface`, `ipa`, and `native` cell for the ten basic numerals 一二三四五六七八九十 across the full HAN_LANGS list of 102 languages declared at line 18920 of `/home/jounlai/langmap/hanmap_data.js`:

- Norman, *Chinese* (1988); *The Chinese Dialects: Phonology* (Yue-Hashimoto 1972; Chen Zhangtai & Li Rulong 1991 闽南方言基础语法; Branner 2000 *Problems in Comparative Chinese Dialectology* for cdo / nan / cpx / mnp).
- Schuessler, *Minimal Old Chinese and Later Han Chinese* (2009) and Baxter–Sagart, *Old Chinese: A New Reconstruction* (2014) for `zh_han`.
- Frellesvig, *A History of the Japanese Language* (Cambridge 2010), §2.3 numerals for `pja`; Vovin, *Koreo-Japonica* (2010) and Whitman 2012 for `pko`.
- Janhunen, *The Mongolic Languages* (2003); Doerfer 1985 for `pmgl`; Tsumagari & Vovin for `ptung`.
- Sidwell & Rau, *The Handbook of Austroasiatic Languages* (2015), Shorto *Mon-Khmer Comparative Dictionary* (2006) for `paa`.
- Pittayaporn, *The Phonology of Proto-Tai* (2009) for `ptai`.
- Matisoff, *Handbook of Proto-Tibeto-Burman* (2003) — STEDT reconstructions for `pst`/`ptb`.
- Ratliff, *Hmong-Mien Language History* (2010) for `phm`.
- Wang Futang 王福堂 *汉语方言语音的演变和层次* (1999); Lien Chinfa 連金發 for Min branches (`cdo` 福州 / `cpx` 莆田 / `mnp` 建瓯 / `nan` and its diaspora `nan_qz`/`nan_pn`/`nan_sg`/`nan_my`/`nan_id`/`nan_pera`/`nan_th`/`nan_xm`/`nan_zz`/`nan_te`/`nan_hai`).
- Yan Sen 颜森 1986 for Gan/Hakka; Cao Zhiyun 曹志耘 *Wu fangyan* for Wu sub-branches (`wuu` Shanghai / `wuu_sz` Suzhou / `wuu_nb` Ningbo / `wuu_hz` Hangzhou / `wuu_jx` Jiaxing / `wuu_jh` Jinhua / `wuu_wz` Wenzhou).
- LSHK *Yueyu pinyin* + Bauer & Benedict *Modern Cantonese Phonology* (1997) for Yue sub-branches.
- Hashimoto, *The Hakka Dialect* (1973); Sagart, *The Roots of Old Chinese* (1999) for diachrony.
- Tian Heng-yu 田恒煜 *甘肃话音档* for Dungan (`dng`); Xu Lin & Zhao Yansun 1984 *白语简志* for Bai (`bca`); Hill 2019 for `bo_sino`.
- Sofronov 1968 + Gong 2002 for Tangut (`txg`); Kane 2009 for Khitan (`zkt`); Jin Qicong 1984 for Jurchen (`juc`).

**Reviewer perspective:** I treat the 10 numerals as the single most cross-linguistically attested concept set in the Sinosphere. Every documented Han-script-using language has reliable forms for 一–十, and gaps in this row therefore reflect compilation incompleteness rather than genuine attestation problems. I also treat **internal consistency** (if `nan_qz` is filled for 四 it must be filled for 一; if `cdo` is filled for 三 it must be filled for 六) as a hard constraint, since the Min/Yue/Wu/diaspora dialects do not selectively lose individual numerals.

**Coverage:** All 10 × 102 × 3 = 3,060 cells inspected (60 are `en.gloss`/`pinyin_simple` which are language-independent; 3,000 are language-keyed). Round-1 review #1 closed all Middle Chinese (`zh_han`/`zh_tang`/`zh_song`) numeral reconstructions; this round-2 focuses on what #1 deferred: the modern Sinitic sub-branches, the East/Southeast Asian sister languages, and the proto-language column.

**Notation conventions observed:** Surface fields use either pinyin-with-diacritics (`yī`), Cantonese jyutping with tone numbers (`jat1`), Min POJ/Tâi-lô (`tshit` / `chhit`), or numbered Chao tone digits (`²¹³`). IPA uses superscript Chao digits (`˥˧`) or numeric digits (`²¹³`) — both appear in the same key, which is internally inconsistent (see Issue #18). Em-dash `—` is the null marker. For numerals 1–10 the `native` field is sparsely populated (only `ko`, `mnc`, `txg`, `zh_phagspa`, `sjo`, `ko_mid`, `ja_ojp`, `ja_kun`, `ko_hun`, `vi_nom`, `dng`, `ja_kgs`, `ja_okn`, `ja_thk`, `ko_kp`, `ko_zai`, `ko_bus`, `vi`/`vi_c`/`vi_s` typically have non-dash entries) — many `native.ja`/`native.zh` cells are simply absent rather than emdashed.

---

## Issues found

### 1. 一 (one) — massive nan-diaspora coverage gap

- **Current (lines 159–244):** `surface.一` lists only `nan_te: "ik4"` and `nan_hai: "it7"` from the entire Min Nan family. Base `nan` plus the nine documented diaspora codes `nan_qz` (Quanzhou), `nan_pn` (Penang), `nan_sg` (Singapore), `nan_my` (Malaysia KL), `nan_id` (Indonesia Medan), `nan_pera` (Perak), `nan_th` (Thailand), `nan_xm` (Xiamen), `nan_zz` (Zhangzhou) are all missing.
- **Expected:** All ten missing variants are documented; `nan` (POJ literary): `it`, colloquial `chit`; `nan_qz` (Quanzhou literary): `it⁵`; `nan_xm` (Amoy POJ): `it`; `nan_zz` (Zhangzhou): `it`; `nan_sg`: `it`; `nan_my`/`nan_id`/`nan_pera`: `it` (POJ-derived); `nan_th` Chao-tone `it4`; `nan_pn` (Penang): `it⁴`.
- **Why:** The exact same diaspora codes are filled for 四 (lines 777–863) and 七 (lines 1411–1495). The selective filling of two numerals while leaving 一 empty implies the compiler stopped halfway. For 一 colloquial vs literary alternation is well documented (chit vs it) — the dataset can legitimately choose one layer but cannot leave the cells blank when sister numerals 四 and 七 are filled.

### 2. 二 (two) — same nan-diaspora coverage gap; literary nō / colloquial nñg split

- **Current (lines 361–446):** `nan_te: "ri6"`, `nan_hai: "zi6"`; everything else nan-family is absent.
- **Expected:** `nan`: literary `jī` /d͡ʑi²²/, colloquial `nñg` /nŋ²⁴/ (used in compounds like 兩 nñg; 二 as a digit reads `jī`). `nan_qz`/`nan_xm`/`nan_zz`: `jī`; `nan_pn`/`nan_my`/`nan_sg`: `jī` /d͡ʑi/; `nan_pera`: `dji²²`; `nan_th`: `lī` (the famous Bangkok-Hokkien j→l shift); `nan_id`: `jī`.
- **Why:** The literary/colloquial split for 二 (jī vs nñg) is one of the textbook diagnostic features of Min Nan (Lien 2015: 174; Chen Zhangtai & Li Rulong 1991: 78). Leaving 二 unfilled for nan and all its diaspora misses this canonical alternation entirely.

### 3. 三 (three) — colloquial sa vs literary sam unrepresented

- **Current (lines 563–651):** `nan_te: "sam1"`, `nan_hai: "ta1"`; `nan`/`nan_qz`/`nan_pn`/`nan_xm`/`nan_zz`/`nan_sg`/`nan_my`/`nan_id`/`nan_pera`/`nan_th` all missing. `cpx` (Pu-Xian Min) is also missing although its sister `cdo` is filled (`săng`).
- **Expected:** `nan` literary `sam`, colloquial `sa(N)` (cf. 三日 *sa-jit̚* vs 三月 *sam-ge̍h*); `cpx` (Putian): `sa²³³` or `lha⁵³` (Branner 2000: 158). All diaspora codes can take `sam` or `sa`.
- **Why:** Min Nan 三 has a clean文白 doublet — colloquial *sa(N)* in vernacular compounds, literary *sam* in Sinicised compounds. The neighbouring `cdo` row carries the corresponding Eastern Min cognate *saŋ¹*; leaving `nan` blank while `cdo` is filled inverts the expected lexical density (Hokkien has vastly more documentation than Fuzhou).

### 4. 五 (five) — missing cdo, cpx, ptb; nan-family covered only by te / hai

- **Current (lines 1001–1085):** No `cdo` / `cpx` entries. No `ptb`. nan-family: only `nan_te: "ngou6"`, `nan_hai: "ho4"`.
- **Expected:**
  - `cdo` (Fuzhou): `ngu²⁴²` / IPA `ŋu²⁴²` — Fuzhou 五 (Branner 2000); Eastern Min /ŋ̍/ is also possible.
  - `cpx` (Putian): `ŋou²⁴` (Lien 2015).
  - `mnp` (Min Bei / Jianou): `ŋu³³` — present for 三/四/六/七/八/九/十 but **absent from 五**, a pure data-entry omission.
  - `ptb` Proto-Tibeto-Burman: **`*l-ŋa`** (Matisoff 2003: 269; STEDT #2623). This is THE most famous TB numeral root, present in Tibetan *lnga*, Burmese *ŋâ*, Karen *yɛ̄/ŋò*, etc. Its absence next to `*ŋāH` for `pst` is conspicuous.
  - `nan` literary `gō͘` /ɡɔ²²/, colloquial `gō͘` (Hokkien); all diaspora reflexes.
- **Why:** The combination of missing Proto-TB `*l-ŋa` (one of the four-or-five "ultra-stable" PTB numerals that even crystal-clear *non*-cognates like Karen retain) and missing `mnp` (when 五 sits inside a 1–10 block where `mnp` is filled for 三/四/六/七/八/九/十) is a clear compiler oversight, not a linguistic gap.

### 5. 六 (six) — nan-family coverage gap; missing cdo, cpx, mnp

- **Current (lines 1201–1287):** `nan_te: "lak8"`, `nan_hai: "lak8"` only. No `cdo`, no `cpx`, no `mnp`.
- **Expected:** `nan`/`nan_qz`/`nan_xm`/`nan_zz`: literary `lio̍k`, colloquial `la̍k`. `cdo`: `lṳ̆k`/`løyʔ²⁴` (Fuzhou); `cpx`: `lœ̍ʔ` (Putian); `mnp`: `lu²⁴` (Jianou). All Hokkien diaspora reflexes for *la̍k* should be filled.
- **Why:** Min Nan 六 is one of the most famous 文白 alternations: literary *lio̍k* (Sino-Vietnamese-style reading) vs colloquial *la̍k* (with the irregular *l-* onset preserved from Old Chinese *r-*; cf. Schuessler 2009: 209 on the *l-/r-* layering). Showing only `nan_te lak8` and `nan_hai lak8` without the base `nan` form, the literary doublet, or any diaspora reflex leaves the most diagnostic Hokkien feature uncovered.

### 6. 八 (eight) — diaspora gap; cpx missing

- **Current (lines 1631–1717):** `nan_te: "boih4"`, `nan_hai: "buet7"` only. `cpx` (Pu-Xian) absent although its sister branches `cdo` and `mnp` are filled.
- **Expected:** `nan` literary `pat`, colloquial `peh` /peʔ⁴/; `nan_qz`/`nan_xm`/`nan_zz`: `pat` / `peh`; `nan_sg`/`nan_my`/`nan_id`/`nan_pera`: literary `pat`, colloquial `peh`; `nan_pn`: `pat`/`peh`; `nan_th`: `peh4`. `cpx` (Putian): `pœyʔ⁵`.
- **Why:** Hokkien 八 has the textbook literary/colloquial doublet *pat* (literary) vs *peh* (colloquial), used in compounds like 八歲 *peh-hè* "eight years old". The compiler captured the *colloquial* form for `nan_te` (`boih`, the Teochew variant) and `nan_hai` (the Hainanese implosive `buet`) but failed to record the canonical Hokkien `pat`/`peh` pair.

### 7. 九 (nine) — diaspora gap; cdo, cpx, ptb all missing

- **Current (lines 1835–1919):** `nan_te: "gao2"`, `nan_hai: "kau2"`; no `cdo`, no `cpx`, no `ptb`.
- **Expected:** `cdo` (Fuzhou): `gāu` /kau³¹/; `cpx` (Putian): `kau³¹`; `nan` /`nan_xm`/`nan_zz`: `káu` /kau⁵³/; diaspora all `káu`. `ptb`: **`*d-kəw`** or **`*s-kəw`** (Matisoff 2003: STEDT #2625) — present in Tibetan *dgu*, Burmese *kûi*, Lolo-Burmese *kV*. The cell already has `pst: *kwɨH` from Sino-Tibetan; the PTB form is the natural Tibeto-Burman counterpart.
- **Why:** `ptb` is filled for 三 (`*g-sum`), 四 (`*b-ləy`), 六 (`*d-k-ruk`) but absent from the equally well-attested PTB numerals 一, 二, 五, 七, 八, 九, 十. STEDT's basic numeral inventory (Matisoff 2003: 267–270) gives PTB reconstructions for ALL of these — leaving seven of ten cells empty implies the compiler stopped after the three coincidentally-best-known forms.

### 8. 十 (ten) — diaspora gap; cdo, cpx missing; `mnp` present but isolated

- **Current (lines 2035–2119):** `nan_te: "zap8"`, `nan_hai: "zap8"`. No `cdo`, no `cpx`. `mnp` present (`sĭp²⁴`) but no Hokkien base form.
- **Expected:** `cdo` (Fuzhou): `sĕk̆`/`seiʔ²⁴`; `cpx` (Putian): `tsɛʔ⁵`; `nan` literary `si̍p`, colloquial `cha̍p` /t͡sap⁴/; all diaspora variants `chap`/`sip`.
- **Why:** 十 in Hokkien is the diagnostic 文白 pair *si̍p* (literary, used in Sino-Hokkien compound numerals like 二十) vs *cha̍p* (colloquial). The compiler recorded only Teochew and Hainanese reflexes, missing the central Hokkien doublet that every introductory Min Nan textbook leads with.

### 9. 一 + 二 — `ptb` missing although Proto-Tibeto-Burman has secure reconstructions

- **Current:** Both rows lack `ptb`. Only `pst` is filled (`*dyiək` for 一, `*nĭy` for 二).
- **Expected:**
  - `ptb` 一: **`*it`** (Matisoff 2003: 267, STEDT #2620; cf. Burmese *tac*, Lepcha *kat*).
  - `ptb` 二: **`*g-nis`** (Matisoff 2003: 267, STEDT #2621; the single most secure PTB numeral, identical in Tibetan *gnyis* and Burmese *hnac*).
- **Why:** PTB *\*g-nis* "two" is the textbook example of a PTB reconstruction (any Matisoff lecture cites it within the first ten minutes). Its absence next to `*nĭy` for `pst` — when `pst` "two" is itself derived from PTB *\*nis* — is logically inverted: the parent node should be filled before the daughter.

### 10. ja_okn / ja_thk — values identical for 7 of 10 numerals (mass-copy)

- **Current:** For 一 / 二 / 三 / 六 / 八 / 九 the surface and IPA for `ja_okn` and `ja_thk` are identical (`itsu`/`it͡sɯ`, `ji`/`d͡ʑi`, `san`/`saɴ`, `riku`/`ɾikɯ` vs `rigu`/`ɾiɡɯ`, `hatsu`/`hat͡sɯ`, `kyū`/`kjɯː`). Only 四 IPA (`ɕi` vs `sɯ̈`), 五 (`gu` vs `go`), and 七 IPA (`ɕit͡sɯ` vs `sɯ̈t͡sɯ`) differ.
- **Expected:** Okinawan Sino-Japanese (`ja_okn`) has well-documented `o`>`u` raising (五 *gu* ✓), `e`>`i` raising, retention of *-i* in *shi* / *chi* (七 should remain `ɕit͡ɕi`, not `ɕit͡sɯ`), and palatalised onsets distinct from Tohoku's *zuzu-ben* /sɯ̈/, /t͡sɯ̈/ central-vowel mergers. The Tohoku set should have the *sɯ̈*-mergers throughout (so 一 *id͡zɯ̈*, 二 *zɯ̈*, 四 *sɯ̈*, 七 *sɯ̈t͡sɯ̈*) — the Okinawan set should not.
- **Why:** The two dialect codes were added to capture exactly the Yamato-Japonic dialect contrast (Ryukyuan-influenced south vs Tohoku-Ainu-influenced north). When their data fields are bitwise identical for 7/10 cells of the most basic numeral set, the rows fail their own design purpose. This is the same copy-from-sister-column anti-pattern flagged in review #33 for `zkt` (Khitan) and `mnc` (Manchu).

### 11. wuu_jx / wuu_jh — partial column duplication

- **Current:** For 一 (`iq⁵⁵` vs `iq⁵⁵`), 二 (`nyi²¹³` vs `nyi²¹³`), 四 (`sy⁵³` vs `sy⁵³`), 五 (`ngu²¹³` vs `ngu²¹³`), 六 (`loq²³` vs `loq²³`), 七 (`tshiq⁵⁵` vs `tshiq⁵⁵`), 八 (`paq⁵⁵` vs `paq⁵⁵`) the Jiaxing (`wuu_jx`) and Jinhua (`wuu_jh`) surface forms are byte-identical. Only 三 (`se⁵³` vs `sa³³`), 十 (`zeq²³` vs `zeq²¹²`), and 九 (`jieu⁵²³` vs `jieu⁵³⁵`) differ.
- **Expected:** Jinhua (Wuzhou Wu) is a *Southern Wu* branch that preserves voiced obstruents more conservatively and has different vowels than Jiaxing (Northern/Taihu Wu). Cao Zhiyun *吴语方言* gives Jinhua 一 as /iəʔ²/, 二 as /n̩²²⁴/, 五 as /ŋ²²⁴/ with characteristic dipping tone (224), 七 as /t͡sʰiəʔ²/ — none of these match the Jiaxing forms.
- **Why:** The dataset's own Wu branch declaration (review #11 / #19) explicitly distinguishes Northern and Southern Wu. Identical entries for 7/10 numerals make `wuu_jh` non-informative as a separate language code.

### 12. nan_hai 三 = `ɗa` — denasalised implosive correctly captured, but tonal contour suspect

- **Current (lines 651 / 740):** `nan_hai: "ta1"` (surface) / `nan_hai: "ɗa˨˦"` (IPA).
- **Expected:** Hainanese (Qiongwen) 三 is `ɗa³³` (mid-level tone 33), not `ɗa˨˦` (low rising 24). Hainanese tone 1 (陰平) is realised as 33 mid-level, not 24 rising; Liang Yuzhang 梁猷刚 *海南方言* (1988) and Branner 2000: 207 both give /ɗa³³/.
- **Why:** The implosive `ɗ` from denasalised *t-* is correctly identified, but the tone value 24 belongs to Hainanese tone 2 (陰上), not tone 1. The corresponding `nan_hai` for 一 uses 11 (low level — correct for 入聲), so the tone-system is partially correct elsewhere; this is a localised error not a system error.

### 13. nan_hai 五 = `ho4` — ŋ → h denasalisation correct, but vowel suspect

- **Current (lines 1008 / 1112):** `nan_hai: "ho4"` (surface) / `nan_hai: "ho˨˦˥"` (IPA).
- **Expected:** Hainanese 五 is `ho³³` or `ho²⁴` (Liang 1988: 89), not the unusual three-Chao-digit contour `ho˨˦˥` (245). Hainanese has 7 tones using two-digit Chao values; `245` is not a Hainanese tone category.
- **Why:** The IPA cell contains a tonal contour that does not exist in the Hainanese tone system. The most likely intended value is `ho³³` (tone 1, mid level) or `ho²⁴` (rising). The three-digit `245` value is either a typo for `24` with an extra 5 or a confusion with another tonal system.

### 14. nan_hai 六 = `lak8` — initial NOT denasalised, but Hainanese should have /ɓ-/ or /h-/ here

- **Current (lines 1287 / 1374):** `nan_hai: "lak8"`, IPA `lak̚˧˧`.
- **Expected:** Hainanese 六 is typically `lak̚⁵` (Hokkien-style) for the literary layer or `lœk̚` for older readings. The current value `lak̚˧˧` matches the standard Hokkien shape; `nan_hai` should differ from `nan_te` (also `lak̚˥`) — but here they are nearly identical. The expected Hainanese-specific feature is the *low-register* 入聲 contour, typically `³` or `¹¹`, not `³³`.
- **Why:** Both `nan_te` and `nan_hai` carry near-identical `lak̚`-style readings for 六, suppressing the dialect contrast. If the compiler wants to keep a single literary form for both branches, the row should reflect that (e.g. one of them flagged as borrowing); silently giving identical forms erases the typological point of having two separate codes.

### 15. bca (Bai) 七 = `qi1` — Bai distinguishes /q/ vs /tɕʰ/; the row should reflect that

- **Current (lines 1438 / 1560):** `bca: "qi1"`, IPA `tɕʰi˥`.
- **Expected:** Jianchuan Bai 七 is /tɕʰi⁴⁴/ or /tsʰe⁴⁴/, NOT /qi/. Bai famously preserves a uvular *q-* series distinct from the post-alveolar *tɕ-* series (Xu Lin & Zhao Yansun 1984: 23–25; Wang Feng *Bai Phonological History* 2007), but 七 belongs to the *tɕʰ-* series in Bai (from Old Chinese *\*tsʰi[t]*), not the *q-* series. Writing surface `qi1` and IPA `tɕʰi˥` is internally contradictory — the orthographies disagree about the onset.
- **Why:** The surface uses Bai's `q-` convention for /q/, but the IPA gives /tɕʰ/. One of these is wrong; the standard correspondence is `chi1`/`tɕʰi⁴⁴` (matching IPA), or if Bai really has /qi/ here (it does not for 七, only for words like 去 /qhɛ/), the IPA should be /qhi/.

### 16. bca (Bai) 十 = `zix6` — unaspirated affricate suspect

- **Current (lines 2059 / 2168):** `bca: "zix6"`, IPA `ʦɿ˨²²`.
- **Expected:** Jianchuan Bai 十 is /tsʰɿ²¹/ or /tsɿ²¹/ (Xu & Zhao 1984: 88, character #1234). The current IPA gives plain /ʦɿ/ — Bai distinguishes /ts/ from /tsʰ/ and 十 carries the aspirated reflex (from MC *dʑip > Bai *tsʰi via the regular voiced-→-aspirate-voiceless devoicing path that Bai shares with Old Chinese-internal layers; Wang Feng 2007: 134).
- **Why:** Old Chinese 十 *\*g(j)ip → Middle Chinese *dʑip → Bai *tsʰɿ²¹*. Bai's tonal value also looks suspect — 十 belongs to 陽入 which in Jianchuan is realised as /²¹/ (low falling), not /²²/ (low level).

### 17. txg (Tangut) 十 = `gju1` — does not match any documented Tangut reading

- **Current (lines 2062 / 2171 / 2215):** `txg: "gju1"`, IPA `gju¹`, native `𘈫`.
- **Expected:** Tangut 十 is *ɣa²* (Gong 2002: 102; LFW #5230) or *ɣaː²* in Sofronov's long-vowel notation; the canonical logograph is 𘈫 (LFW #5230) which IS what the `native` cell shows — but the reading should be `gha2` / `ɣa²`, not `gju1`. The form `gju1` (=/ɡju¹/) does not appear in any Tangut Mixed Categories table for character 𘈫.
- **Why:** The native cell carries the correct character but the reading is wrong. Likely the compiler imported a reading from a different glyph that the row was originally pointing at. Compare review #32 #5 for the same disjunction (correct glyph, wrong reading) in 水 (water).

### 18. txg (Tangut) 七 = `tshy1` — likely conflation with 西 or 死

- **Current (lines 1441 / 1563 / 1611):** `txg: "tshy1"`, IPA `tshɨ¹`, native `𗒐`.
- **Expected:** Tangut 七 is *ɕja¹* or *ɕa¹* (Gong 2002: 102), logograph 𗒐 (LFW #2078). The reading `tshy1` /tshɨ¹/ does not match the canonical Tangut "seven"; *tshɨ¹* is the reading of 西 'west' (LFW #4988) or 死 'die'.
- **Why:** As with 十 (#17 above), the native logograph 𗒐 is the correct Tangut "seven" character, but the romanised reading attached to it belongs to a different glyph. The pattern across 十 / 七 suggests glyph-reading pairs were assembled from two separate sources without cross-check.

### 19. txg (Tangut) 六 = `khyw2` — wrong onset class

- **Current (lines 1227 / 1338 / 1385):** `txg: "khyw2"`, IPA `khɨw²`, native `𘜶`.
- **Expected:** Tangut 六 is *tɕʰiw²* / *tɕʰəw²* (Gong 2002: 102), logograph 𘜶 (LFW #2854). The Gong reading uses palatal *tɕʰ-*, not velar *kh-*; the rhyme is *-iw* / *-jiw* (rhyme group 51), not *-yw*.
- **Why:** Tangut velar *kh-* and palatal *tɕʰ-* are distinct phoneme series (Gong 2002: 32). The native glyph again is correct (𘜶 reads *tɕʰjiw²* in every Mixed Categories edition), but the surface/IPA reads as if the onset class were misidentified.

### 20. ko_mid 四 = `·sò` with IPA `sʌ́ʔ` — wrong tone and spurious glottal coda

- **Current (lines 842 / 942 / 987):** `ko_mid: "·sò"`, IPA `sʌ́ʔ`, native `·ᄉᆞ`.
- **Expected:** Middle Korean 四 is 去聲 (departing tone), spelled ·ᄉᆞ in the Hunminjeongeum tradition. Surface should be `·sʌ̀` or `·sʌh` (with the departing-tone dot prefix); IPA should be /sʌ˥˩/ or just /sʌ/ — NO glottal /ʔ/ coda. Middle Korean did not have glottal codas; the /ʔ/ marks ㅭ (ᇙ) for Buddhist transcriptions of Sanskrit, not native Korean syllables.
- **Why:** The other ko_mid numerals correctly use `ʔ` only for entering-tone (入聲) syllables: 一 `ʔílʔ` (入聲, ending in ㄹ → ㅭ), 七 `tsʰílʔ` (入聲), 八 `pálʔ` (入聲), 十 `s͈íp̚` (入聲, ㅂ coda). But 四 is **去聲** not 入聲, so the `ʔ` is a category error. Should be `sʌ̀` / `sʌ˥˩` / `·ᄉᆞ`.

### 21. ko_mid 五 = `:Gwo` — uppercase G is non-standard

- **Current (lines 1061 / 1146 / 1187):** `ko_mid: ":Gwo"`, IPA `ŋǒ`, native `:ᅌᅩ`.
- **Expected:** Use Yale-style `:ngwo` (lowercase) matching the IPA *ŋǒ* and the native *ᅌ* (ng character ㆁ). The capital `G` does not appear in any Yale or McCune-Reischauer romanisation system; it cannot be parsed by any of the established MK transliteration tools (Ki-Moon Lee & Ramsey 2011 use *ngwó*).
- **Why:** Internal consistency — every other ng-onset MK form in the file uses lowercase (e.g. `·zi` not `·Zi` for 二). The `:` correctly marks the rising-tone diacritic 上聲 (two dots). `G` is anomalous and likely an OCR or upper-case-shift artefact.

### 22. pko (Proto-Korean) 5 = `*tasə` — drops final -s

- **Current (lines 1066 / 1151):** `pko: "*tasə"` (surface and IPA both).
- **Expected:** Proto-Korean 'five' is **`*tasəs`** (Whitman 2012; Lee & Ramsey 2011: 65) or *tasʌs*. The final -s is the etymological "noun classifier" suffix preserved in Modern Korean 다섯 / Middle Korean *tasʌs(s)*; removing it gives a non-attested stem.
- **Why:** All other pko numerals in the file include the final consonant where Modern Korean has one: 一 `*hʌtan` (final -n), 三 `*seki` (-i), 六 `*jəsəs` (-s), 七 `*nirkup` (-p), 八 `*jətərp` (-rp), 十 `*jer` (-r). Stripping the -s only from 五 is inconsistent with the column's own convention.

### 23. ko_zai (Zainichi Korean) — identical to ko for all ten numerals

- **Current:** Every numeral has `ko_zai = ko` for surface, and only minor IPA differences (`ko_zai sam` → `samɯ` for 三, `ɕipɯ` for 十 — vowel epenthesis from Japanese influence).
- **Expected:** Zainichi Korean numerals should show systematic phonological influence from Japanese: aspirated stops weakening (칠 /t͡ɕʰil/ → /t͡ɕil/), syllable-final consonant restoration via Japanese epenthesis (육 → /jɯkɯ/ as already shown for 六, 일 → /irɯ/), and tonal flattening. Only 三 and 十 carry epenthesis; 一/二/四/五/六/七/八/九 are bytewise identical to base `ko`.
- **Why:** The Zainichi dialect code exists precisely because Korean-in-Japan has documented phonological drift (Lee 2002 *Resident Korean in Japan*). When 8 of 10 cells match base Korean exactly, the column adds no information.

### 24. dng (Dungan) — tone-3 vs tone-2 mismatch for 五

- **Current (lines 1075 / 1160):** `dng: "u²"`, IPA `u˨˦`.
- **Expected:** Dungan 五 is tone 3 (corresponding to Mandarin tone 3 上聲, realised in Dungan as a low contour, typically 31 or 41); standard Dungan dictionaries (Imart 1981; Rimsky-Korsakoff 1991) give *u³* /u³¹/ for 五. The current surface tone "2" and IPA "24" (rising) are Dungan's tone-2 contour, which corresponds to Mandarin tone-2 陽平, not tone-3 上聲.
- **Why:** Mandarin/Dungan tone correspondence is regular: MND tone 1 → DNG tone 1 (44), MND tone 2 → DNG tone 2 (24), MND tone 3 → DNG tone 3 (51 or 31), MND tone 4 → DNG tone 0 (loss) or 4. 五 (wǔ, tone 3) should give DNG tone 3. The dataset's other tone-3 Mandarin numerals show this correctly: 九 *jyu²* /tɕju˨˦/ — wait, 九 is also tone 3 in Mandarin, and the dataset also shows tone 2 (24) for it. So the dataset's tonal assignment for Mandarin-tone-3 → Dungan is *consistently* tone-2-shaped — this may reflect a real Dungan merger of tone-2 and tone-3 in some sub-dialects (Shaanxi-Hui basis), or it may be a systematic error. Both 五 and 九 should be re-verified against Rimsky-Korsakoff (1991) §3.4.

### 25. yue_us (overseas Cantonese) 五 = `m5` — phonetic merger with 唔 not documented

- **Current (lines 1076 / 1161):** `yue_us: "m5"`, IPA `m̩˨`.
- **Expected:** Overseas Cantonese (US Chinatown / 美國粵語) does have a documented /ŋ̍/ → /m̩/ realisation in some young speakers (Bauer & Benedict 1997: 26), but the more common literary form remains `ng5` /ŋ̍²³/ matching base `yue`. The reduction to `m̩˨` (low tone) is a *very* specific sub-variant — and tone 2 in Cantonese is 25 (high rising), not 22 (low level). The IPA value `m̩˨` (low) does not match Cantonese tone 5 (low rising, 23).
- **Why:** The surface tag `5` is Cantonese tone 5 (陽上, low rising /23/), but the IPA renders it as low level `˨`. Either the surface should be `m2` (high rising) or the IPA should be `m̩²³`. Also the lexical merger ng→m is a known feature of *Hong Kong* Cantonese popular speech (the "懶音 lazy pronunciation"), more than overseas — the row may be conflating diaspora with HK casual register.

### 26. native fields — `nan`/`nan_*`, `cdo`, `cpx`, `mnp`, `wuu*`, `yue*`, `hak*`, `zh_*` all empty for 一–十

- **Current:** `native.一` through `native.十` carry CJK characters only for the dialects that have an *independent script tradition* (ko Hangul, ja_* Katakana, vi_nom Chu Nom, dng Cyrillic, mnc Manchu, txg Tangut, zh_phagspa, sjo Sibe, ko_mid Korean MK, ja_ojp OJP katakana, ja_kun Hiragana, ko_hun Hangul, etc.). All Sinitic dialect codes (`nan`, `nan_*`, `cdo`, `cpx`, `mnp`, `wuu*`, `yue*`, `hak*`, all `zh_*` regional codes including `zh_kanbun`/`zh_jiao`/`zh_xa` etc.) have no `native` entry — the cells are simply absent, not emdashed.
- **Expected:** For Sinitic dialects, the `native` cell should be either (a) the same Chinese character as the row key (一/二/三/...), since these dialects ARE written with the Han script when written, or (b) emdashed with a comment. Leaving the field absent rather than emdashed creates an undefined JSON state different from the explicit `—` used for `juc`/`zkt` etc.
- **Why:** The `—` convention used elsewhere is the explicit null marker (review #33 #1 documented this). Absent keys vs `"—"` are semantically different: the former means "no data was attempted", the latter means "data attempted and found empty". The Sinitic dialect rows should be one or the other consistently, not silently absent.

---

## Summary

**File audited:** `/home/jounlai/langmap/hanmap_data.js`
**Cells inspected:** 3,000 language-keyed cells (10 numerals × 100 non-meta languages × 3 sub-objects).
**Total findings:** 26
**Primary issue clusters:**
1. **Min-family diaspora gaps** (findings 1–8) — 一/二/三/五/六/八/九/十 systematically under-populated for `nan`, `nan_qz`, `nan_pn`, `nan_sg`, `nan_my`, `nan_id`, `nan_pera`, `nan_th`, `nan_xm`, `nan_zz`; sister branches `cdo`/`cpx`/`mnp` have parallel gaps.
2. **Proto-Tibeto-Burman column under-population** (findings 4, 7, 9) — `ptb` filled for only 3 of 10 numerals despite STEDT giving secure forms for all 10.
3. **Dialect copy-paste artefacts** (findings 10, 11, 23) — `ja_okn`/`ja_thk`, `wuu_jx`/`wuu_jh`, `ko`/`ko_zai` show identical values for most numerals, defeating the purpose of separate language codes.
4. **Hainanese tone-system inconsistencies** (findings 12, 13, 14) — `nan_hai` uses Chao contours that do not exist in the documented Hainanese tone inventory.
5. **Tangut glyph/reading disjunction** (findings 17, 18, 19) — correct native characters paired with readings from different glyphs.
6. **Middle Korean tone-class errors** (findings 20, 21) — 入聲 glottal coda applied to 去聲 syllable; uppercase G for ng.
7. **Proto-Korean stem truncation** (finding 22) — final consonant dropped from `*tasə` against column convention.
8. **Native-field schema inconsistency** (finding 26) — Sinitic dialect codes have no `native` entry rather than the documented `—` null.

**File path:** `/home/jounlai/langmap/hanmap_reviews/35_open.md`
**Finding count:** 26


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 79
- **policy/withdrawn skip**: 5
- **owner 判断 defer (from-mismatch)**: 6
- **headline**: nan-diaspora 数字 7 chars surface gaps (一/二/三/五/六/八/九/十) 大量埋め, ptb *g-nis/*l-ŋa/*d-kəw 追加, ja_okn/ja_thk wuu_jh copy-paste IPA fix, bca 七/十 ipa, txg 七/十/六, ko_mid 四/五 (defer: 6 from-mismatches)
- **JSON path**: /tmp/hm_edits_35.json
