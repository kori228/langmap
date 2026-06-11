# Wordmap review #143 — Script-correctness round-2: abjads & abugidas (Arabic, Hebrew, Indic, Ethiopic, Thai, Khmer)

## Reviewer self-introduction (ペルソナ自己紹介)

I am reviewer #143, a script philologist whose remit is the *surface* column of LangMap's twenty Wordmap concepts in the abjad/abugida writing systems — Perso-Arabic (and its language-specific extensions: Urdu, Sindhi, Pashto, Sorani/Kalhori Kurdish, Uyghur, South Azerbaijani, Ottoman, Mazanderani, Hazaragi), Hebrew (Modern, Biblical, Mishnaic, Yiddish, Judeo-Persian, Old Aramaic in square script), the Brahmic abugidas (Devanagari, Bengali-Assamese, Gurmukhi, Gujarati, Odia, the four Dravidian scripts, Sinhala, Thai/Lao, Khmer, Myanmar, Tibetan, Thaana) and Ethiopic fidel. My working method on this dataset is codepoint-exact: I never trust the rendered glyph, I dump every flagged cell through `ord()` and compare it against the Unicode script charts (Arabic U+0600–06FF / U+0750–077F, Hebrew U+0590–05FF, Khmer U+1780–17FF, Myanmar U+1000–109F, Mazanderani's Farsi-yeh U+06CC vs Arabic alef-maksura U+0649, the Kurdish ۆ U+06C6, the Khmer triisap U+17CA and samyok-sannya U+17D0), and against the sibling cells in the same language cluster, which is how this dataset encodes its own house conventions. I lean on r12a's per-script orthography notes (Sindhi `sd.html`, Khmer `km.html`, Arabic `arb.html`), the SIL Khmer-character specification, the Yiddish YIVO and Hebrew geresh conventions, and the 2020 South-Azerbaijani orthography. I have read `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md`, and I built on the prior abjad/abugida passes — reviews #73/#75 (the ASCII-apostrophe vs Unicode-modifier sweep), #98 (the he/yi/lad/jpr Hebrew-script pass) and #83/#113 (the Sindhi/Indic columns) — taking care **not** to re-report anything those rounds already fixed or adjudicated (e.g. `sd` eye `اک`, closed as #83-23; `jpr` one `יך`, applied as #98-29; `ar_qur` tree tie-bar, applied as #73-16). What remains below are eight survivors: each is a real combining-mark, wrong-block, or missing-diacritic defect, quoted verbatim from live data with codepoints.

---

## Issues found

### 1. `rki` — hello — kinzi cluster destroyed by a stray Aiton vowel sign (U+109D mojibake)
- **File:** words/hello.js line 965
- **Current:** ["မဂႝလာပါ", "mìɴɡəlà pà"]
- **Expected:** ["မင်္ဂလာပါ", "mìɴɡəlà pà"]
- **Why:** The Rakhine "mingalaba" greeting must spell the *mìɴɡə* onset with the **kinzi** stack င + ် + ္ + ဂ (U+1004 U+103A U+1039 U+1002), exactly as the parent `my` row does — `my: ["မင်္ဂလာပါ", …]` (hello.js:145). The `rki` cell instead reads `မ ဂ ႝ လ ...`: between ဂ (U+1002) and လ it carries **U+109D MYANMAR VOWEL SIGN AITON AI**, a character belonging to the Aiton/Tai-Khamti orthography and never used in Burmese or Rakhine. The whole kinzi cluster (the nasal င and its two stackers) has been lost and a foreign combining mark substituted — a textbook wrong-block mojibake. U+109D occurs in exactly one cell across all twenty files (this one), which is itself the tell. The IPA `mìɴɡəlà` confirms the intended /ɴɡ/ that the kinzi encodes.

---

### 2. `okz` — eat — two stacked vowel signs on one base instead of the triisap register mark
- **File:** words/eat.js line 916
- **Current:** ["សុី", "siː"]
- **Expected:** ["ស៊ី", "siː"]
- **Why:** The surface is ស (U+179F) + ុ **U+17BB KHMER VOWEL SIGN U** + ី **U+17B8 KHMER VOWEL SIGN II** — i.e. a below-base vowel-U and an above-base vowel-II stacked on the *same* consonant. That is ill-formed: a single base cannot carry two dependent vowels, and ុ here is not a vowel at all. The intended grapheme for /siː/ on the first-series ស is the **triisap/muusikatoan register shifter** ៊ U+17CA, giving ស៊ី — which is precisely the sibling spelling the dataset already uses for the same etymon: `kxm: ["ស៊ី", "siː"]` (eat.js:967). The Old-Khmer row has mis-encoded the U+17CA register mark as a vowel-U U+17BB. Codepoint-exact, register-restoring fix; the IPA /siː/ is unchanged.

---

### 3. `mzn` — cat — final /i/ written with Arabic alef-maksura U+0649 instead of Farsi-yeh U+06CC
- **File:** words/cat.js line 772
- **Current:** ["پَشى", "pæʃi"]
- **Expected:** ["پَشی", "pæʃi"]
- **Why:** The word ends in ى **U+0649 ARABIC LETTER ALEF MAKSURA**, but the IPA is /pæʃi/ — a true final /i/, which in Mazanderani's Perso-Arabic orthography (as in Persian) is written ی **U+06CC ARABIC LETTER FARSI YEH**, not the dotless Arabic maksura. The same language's own cells prove the convention: `mzn thanks: ["مرسی", …]` (thanks.js:772) uses U+06CC for final /i/, and every neighbouring Iranic cat-cell does likewise — `glk: ["پیشی", …]` (cat.js:773, two U+06CC), `lrc: ["پشیله", …]` (cat.js:774, U+06CC). U+0649 is reserved for the etymological maksura of Arabic loans, which *pæʃi* is not. Single-codepoint swap U+0649 → U+06CC; the fatḥa and IPA stay.

---

### 4. `jpr` — eye — affricate marked with ASCII apostrophe U+0027 instead of the Hebrew geresh U+05F3
- **File:** words/eye.js line 107
- **Current:** ["צ'שם", "t͡ʃeʃm"]
- **Expected:** ["צ׳שם", "t͡ʃeʃm"]
- **Why:** Judeo-Persian (and Hebrew generally) writes the borrowed affricate /t͡ʃ/ as צ followed by a **geresh**; the correct character is ׳ **U+05F3 HEBREW PUNCTUATION GERESH**, not the plain typewriter apostrophe ' **U+0027** that the cell currently carries. This is the very ASCII-vs-Unicode-modifier defect class that reviews #73/#75 swept out of the Mayan saltillo columns and #98 normalized across the Hebrew block; this single jpr cell is the only Hebrew-script surface in the whole dataset still holding a U+0027 inside the string. The IPA `t͡ʃeʃm` confirms the affricate the geresh is meant to mark. Codepoint-exact: U+0027 → U+05F3.

---

### 5. `oar` — eye — defective spelling `ען` drops the medial yod required by /ʕajn/
- **File:** words/eye.js line 394
- **Current:** ['ען', 'ʕajn']
- **Expected:** ['עין', 'ʕajn']
- **Why:** The cell is ע (U+05E2) + ן (final nun, U+05DF) — i.e. *ʿn*, with no yod. But the IPA `ʕajn` carries the /aj/ diphthong, whose mater lectionis is the **yod** ⟨י⟩; *ʿn* would read /ʕen/ ~ /ʕan/, not /ʕajn/. Every Northwest-Semitic sibling in this dataset writes the yod for the cognate "eye": Biblical Hebrew `hbo: ["עין", "ʕajin"]` (eye.js:954), and the three Syriac rows `arc/aii/syc: ["ܥܝܢܐ", "ʕajn(a)ː"]` (eye.js:523/525/904) all spell the root ʿ-y-n. Imperial/Old Aramaic likewise spells it ʿyn. The yod is missing; insert U+05D9 between ע and ן to give עין, matching the cell's own IPA and its siblings.

---

### 6. `azb` — house — /e/ written with a Persian kasra instead of the South-Azerbaijani hamza-yeh ⟨ئ⟩
- **File:** words/house.js line 234
- **Current:** ["اِو", "ev"]
- **Expected:** ["ائو", "ev"]
- **Why:** The cell spells /ev/ as ا + ِ (kasra, U+0650) + و — a Persian-style pointing where the short vowel is a kasra diacritic. But South Azerbaijani's Arabic orthography (Zehtabi / 2020 orthography) assigns the vowel **/e/ its own letter ئ** (hamza-on-yeh, U+0626), and this column already follows that convention everywhere else it has an /e/: `azb eat: ["یئمک", "jemæk"]` (eat.js:227) and `azb love: ["سئوگی", "sevɡi"]` (love.js:234) both render /e/ with ئ. The standard South-Azerbaijani spelling of "ev" (house) is accordingly ائو (alef-carrier + ئ + و). The house cell is the lone /e/ that reverts to a kasra, breaking the column's own internal rule; the IPA /ev/ is unchanged.

---

### 7. `okz` — heart — missing samyok-sannya ◌័ (U+17D0) in `ហ្ឫទយ`
- **File:** words/heart.js line 923
- **Current:** ["ហ្ឫទយ", "hridəj"]
- **Expected:** ["ហ្ឫទ័យ", "hridəj"]
- **Why:** The dictionary form of *hʁɨday* 'heart' is ហ្ឫទ័យ — ហ + coeng + ឫ (an attested coeng-plus-independent-vowel cluster, Chuon Nath dictionary) + ទ + **័ U+17D0 KHMER SIGN SAMYOK SANNYA** + យ. The `okz` cell omits the samyok-sannya entirely (`ហ ្ ឫ ទ យ`, no U+17D0). Without ◌័ the sequence ទយ reads /-tɔj/, whereas the cell's own IPA `hridəj` is exactly the /-dəj/ value that the samyok-sannya produces on ទ. This is a missing-combining-mark defect, not an archaic spelling choice — the IPA already encodes the marked reading. Insert U+17D0 before the final យ.

---

### 8. `sdh` — sun — /o/ written with plain waw ⟨و⟩ instead of Kurdish ⟨ۆ⟩ (U+06C6)
- **File:** words/sun.js line 230
- **Current:** ["روژ", "ɾoʒ"]
- **Expected:** ["رۆژ", "ɾoʒ"]
- **Why:** Kurdish Arabic orthography distinguishes the mid-back vowel **/o/ ⟨ۆ⟩ U+06C6** from /u, w/ ⟨و⟩ U+0648; "roj/roʒ" (sun) is standardly رۆژ. The cell writes ر + و (plain waw, U+0648) + ژ, conflating /o/ with /u/. The dataset's own Central-Kurdish convention uses ۆ for /o/ throughout — `ckb sun: ["خۆر", "xoːɾ"]` (sun.js:229), `ckb love: ["خۆشەویستی", …]` (love.js:230) — and the Southern-Kurdish column never uses U+06C6 anywhere, so this is the column's only /o/ and it is under-marked. The IPA `ɾoʒ` carries the /o/ that ۆ encodes. (Southern Kurdish lacks a fully fixed orthography, so I flag this as the consistency/clarity fix the cell's own IPA demands rather than a hard spelling rule; swap U+0648 → U+06C6.)

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

All eight findings verified codepoint-exact against live data (ord() dump) and against the cited sibling cells; all are surface-only script-correctness fixes whose target matches the cell's own existing IPA. All applied.

**143-1 `rki` — hello — U+109D Aiton mojibake destroys kinzi — APPLIED (applied by orchestrator this round)**
hello.js:965 current = မ(1019) ဂ(1002) ႝ(**109D**) လ(101c)... The kinzi stack and nasal င are lost and replaced by U+109D (Aiton/Tai-Khamti, occurs in exactly this one cell across all files). Restored to the parent `my` spelling မင်္ဂလာပါ = 1019 1004 103a 1039 1002 101c... (my hello.js:145). IPA `mìɴɡəlà pà` unchanged.

**143-2 `okz` — eat — two stacked vowels instead of triisap — APPLIED (applied by orchestrator this round)**
eat.js:916 current = ស(179f) ុ(**17bb** vowel-U) ី(17b8). Ill-formed double vowel; restored register shifter ៊ U+17CA → ស៊ី, matching sibling `kxm: ["ស៊ី", "siː"]` (eat.js:967). IPA /siː/ unchanged.

**143-3 `mzn` — cat — alef-maksura U+0649 vs Farsi-yeh U+06CC — APPLIED (applied by orchestrator this round)**
cat.js:772 ends in ى U+0649; IPA /pæʃi/ is a true final /i/ → ی U+06CC, matching `mzn thanks: ["مرسی", …]` (thanks.js:772) and Iranic neighbours. Single swap 0649→06CC.

**143-4 `jpr` — eye — ASCII apostrophe U+0027 vs geresh U+05F3 — APPLIED (applied by orchestrator this round)**
eye.js:107 carries U+0027 (only Hebrew-script surface in dataset still holding a typewriter apostrophe). Same defect class swept by #73/#75/#98. Swap 0027→05F3 (geresh). IPA `t͡ʃeʃm` unchanged.

**143-5 `oar` — eye — defective `ען` missing medial yod — APPLIED (applied by orchestrator this round)**
eye.js:394 = ע(05e2) ן(05df), no yod, but IPA `ʕajn` has /aj/ whose mater lectionis is yod. Insert U+05D9 → עין, matching `hbo: ["עין", "ʕajin"]` (eye.js:954) and the Syriac ʕajn rows.

**143-6 `azb` — house — kasra-pointing vs hamza-yeh ⟨ئ⟩ for /e/ — APPLIED (applied by orchestrator this round)**
house.js:234 = ا ِ(0650 kasra) و. South-Azerbaijani 2020 orthography gives /e/ its own letter ئ; column already does so: `azb eat: ["یئمک", "jemæk"]` (eat.js:227), `azb love: ["سئوگی", "sevɡi"]` (love.js:234). → ائو. IPA /ev/ unchanged.

**143-7 `okz` — heart — missing samyok-sannya U+17D0 — APPLIED (applied by orchestrator this round)**
heart.js:923 = ហ ្ ឫ ទ យ, no U+17D0; IPA `hridəj` is the /-dəj/ value the samyok-sannya produces on ទ. Insert U+17D0 before final យ → ហ្ឫទ័យ.

**143-8 `sdh` — sun — plain waw vs Kurdish ۆ U+06C6 for /o/ — APPLIED (applied by orchestrator this round)**
sun.js:230 = ر و(0648) ژ; IPA `ɾoʒ` carries /o/. Reviewer notes Southern Kurdish lacks a fixed orthography and frames this as the consistency/clarity fix the cell's own IPA demands; the swap 0648→06C6 aligns with the cell's IPA and the broader Kurdish ۆ-for-/o/ convention (`ckb sun: ["خۆر", …]` sun.js:229). Low-risk, IPA-supported; applied as requested.

No items held open.

## Reviewer round-2 response (再評価 round-2)

I re-verified all eight cells codepoint-exact against live data (`ord()` dump of the current `words/*.js`). Every claimed fix is present and correct; every IPA is unchanged as promised.

- **143-1 `rki` hello — ✓ ACCEPT.** hello.js:965 now `မင်္ဂလာပါ` = U+1019 U+1004 U+103A U+1039 U+1002 U+101C... The kinzi stack (င + ် + ္ + ဂ) is restored and the foreign U+109D AITON AI is gone; matches parent `my` (hello.js:145).
- **143-2 `okz` eat — ✓ ACCEPT.** eat.js:916 now `ស៊ី` = U+179F **U+17CA** U+17B8. The ill-formed double vowel (U+17BB+U+17B8) is replaced by the triisap register shifter; matches sibling `kxm` ស៊ី.
- **143-3 `mzn` cat — ✓ ACCEPT.** cat.js:772 `پَشی` ends in **U+06CC** Farsi-yeh; alef-maksura U+0649 gone. Fatḥa and IPA /pæʃi/ intact.
- **143-4 `jpr` eye — ✓ ACCEPT.** eye.js:107 `צ׳שם` = U+05E6 **U+05F3** ... ASCII apostrophe U+0027 replaced by the Hebrew geresh; no U+0027 remains in the string.
- **143-5 `oar` eye — ✓ ACCEPT.** eye.js:394 `עין` = U+05E2 **U+05D9** U+05DF. Medial yod inserted; matches `hbo` עין and the Syriac ʕ-y-n rows.
- **143-6 `azb` house — ✓ ACCEPT.** house.js:234 `ائو` = U+0627 **U+0626** U+0648. The kasra-pointed form is replaced by hamza-yeh ⟨ئ⟩, consistent with the column's other /e/ cells (`azb eat`, `azb love`).
- **143-7 `okz` heart — ✓ ACCEPT.** heart.js:923 `ហ្ឫទ័យ` = U+17A0 U+17D2 U+17AB U+1791 **U+17D0** U+1799. Samyok-sannya inserted before final យ, giving the /-dəj/ the IPA encodes.
- **143-8 `sdh` sun — ✓ ACCEPT.** sun.js:230 `رۆژ` = U+0631 **U+06C6** U+0698. Plain waw replaced by Kurdish ⟨ۆ⟩ for /o/. As noted in the original finding, Southern Kurdish has no fully fixed orthography, so this is an IPA-supported consistency fix rather than a hard rule — I accept it on those terms; it is internally consistent with the broader Kurdish ۆ-for-/o/ convention and harmless.

### New issues
None. No collateral errors spotted during verification.

### Scorecard
8 accepted (✓), 0 partial, 0 rejected, 0 new issues. All fixes are surface-only, codepoint-verified in live data, IPA unchanged.

**File status: CLOSED** — nothing left to address.
