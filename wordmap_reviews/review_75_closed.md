# Wordmap review #75 — Surface-form orthography & script-correctness specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a general linguist and orthographic-data auditor whose specialty is the *written surface form* — the first element of each `["surface", "ipa"]` tuple — rather than the phonetic transcription. My remit is narrow and exacting: is the spelling the standard orthography for that variety, are all required diacritics present (Vietnamese tone marks, Czech/Slovak háčky, Polish ł, Turkish ı/İ, Yoruba and Igbo sub-dots, Hausa hooked ɓ/ɗ/ƙ, Maltese ġ/ħ/għ, Sami č/đ/ŋ), is the correct script used where the dataset's norm expects it, and — critically — are the *right Unicode code points* used for letters that look alike (the modifier-letter apostrophe ⟨ʼ⟩ U+02BC vs the ASCII apostrophe ⟨'⟩ U+0027 vs the Uzbek ⟨ʻ⟩ U+02BB; the Caucasian palochka Ӏ U+04C0 vs Latin I/l). I know this project's data model: `WORDS.<concept>.data` holds `<code>: ["surface","ipa"]` tuples (object form with `form`/`ipa`/`alt` only for genuinely multi-script languages such as `za` and `juc`), the metadata I do not touch lives in `wordmap_data.js`, and `docs/words/CONTRIBUTING.md` plus `docs/words/LANG_CODES.md` give the conventions and code→variety mapping. For adjudication I rely on the relevant national/academic standards: for the Mayan languages, the **Academia de Lenguas Mayas de Guatemala (ALMG) unified alphabets (1988/2003)**, which fix the saltillo ⟨ʼ⟩ as the glottal/glottalization grapheme; for Uzbek, the **1995 Latin reform** (oʻzbek lotin alifbosi), which distinguishes the letters ⟨oʻ⟩/⟨gʻ⟩ (U+02BB) from the tutuq belgisi ⟨ʼ⟩; and Unicode 15 block charts for the exact code points. Every "Current" value below was copied verbatim from the live file at the cited line and re-verified by grep on 2026-05-31; I confirmed each is **not** already fixed and deliberately did not re-report items closed in waves #01–70. I also report (transparently) the dataset's *dominant* convention as the evidence for each consistency flag, because in this area the fix is "make the outlier match its siblings," and the siblings are the proof.

---

## Issues found

### 1. `uz` — hand — ASCII apostrophe where Uzbek Latin requires ⟨oʻ⟩ (U+02BB), not ⟨o'⟩
- **File:** `words/hand.js` line 232
- **Current:** `["qo'l", "qɒl"]`  (the third code point is U+0027 APOSTROPHE)
- **Expected:** `["qoʻl", "qɒl"]`  (U+02BB MODIFIER LETTER TURNED COMMA)
- **Why:** In the official Uzbek Latin alphabet (1995 reform) the vowel letter is **oʻ**, written with the *tutuq belgisi*-shaped turned comma U+02BB ʻ, a distinct letter — not the ASCII apostrophe and not the glottal-stop sign ⟨ʼ⟩. *qoʻl* "hand/arm" is the standard spelling (e.g. Oʻzbek tilining izohli lugʻati). The current cell encodes the head of the word with a plain typewriter quote, which is orthographically wrong; it should read `qoʻl`.

---

### 2. `uz` — eye — same ⟨o'⟩→⟨oʻ⟩ defect as #1
- **File:** `words/eye.js` line 232
- **Current:** `["ko'z", "kɒz"]`  (third code point U+0027)
- **Expected:** `["koʻz", "kɒz"]`  (U+02BB)
- **Why:** *koʻz* "eye" — identical issue to #1: the Uzbek letter ⟨oʻ⟩ is rendered with an ASCII apostrophe instead of U+02BB. These are the only two Uzbek entries in the whole set that contain the ⟨oʻ⟩ letter, so both must carry the correct turned comma; the remaining Uzbek cells (`olov`, `suv`, `salom`, …) are diacritic-free and correct, which is why these two stand out.

---

### 3. `mvc` (Mam, Comitancillo) — drink — single surface form mixes ASCII ⟨'⟩ **and** modifier ⟨ʼ⟩
- **File:** `words/drink.js` line 1089
- **Current:** `["k'aaʼn", "kʼaːʔn"]`  (apostrophe after `k` is U+0027; the one after `aa` is U+02BC)
- **Expected:** `["kʼaaʼn", "kʼaːʔn"]`  (both U+02BC, the ALMG saltillo)
- **Why:** This is the sharpest possible orthographic defect: one short string uses two *different* code points for the same glottal grapheme. The ALMG Mam alphabet uses the saltillo ⟨ʼ⟩ uniformly for glottalized consonants and glottal stop; the IPA cell (`kʼ…ʔ`) confirms both are glottal. The first apostrophe is the typewriter quote and should be the modifier letter ⟨ʼ⟩ to match the second one and the dataset's Mam norm.

---

### 4. `ixl` (Ixil) — hand — surface form mixes ⟨ʼ⟩ then ASCII ⟨'⟩
- **File:** `words/hand.js` line 1093
- **Current:** `["qʼab'", "qʼaɓ"]`  (first apostrophe U+02BC, final one U+0027)
- **Expected:** `["qʼabʼ", "qʼaɓ"]`  (both U+02BC)
- **Why:** Same one-string mixing as #3. The word opens with the correct saltillo on ⟨qʼ⟩ but closes the final glottalized ⟨bʼ⟩ with a plain ASCII apostrophe. ALMG Ixil uses the saltillo throughout; the inconsistency is internal to the single cell, so it is unambiguous.

---

### 5. `mvc` (Mam) — hand — surface form mixes ASCII ⟨'⟩ then ⟨ʼ⟩
- **File:** `words/hand.js` line 1095
- **Current:** `["q'obʼ", "qʼob"]`  (first apostrophe U+0027, final U+02BC)
- **Expected:** `["qʼobʼ", "qʼob"]`  (both U+02BC)
- **Why:** The mirror image of #4 within the same language: the leading ⟨q'⟩ uses a typewriter quote while the final ⟨bʼ⟩ uses the correct saltillo. Both should be U+02BC. (This entry and #3 are the same `mvc` variety mishandling its own saltillo in two separate words, which is why I list them individually.)

---

### 6. `ixl` (Ixil) — hello — multi-word phrase mixes ASCII ⟨'⟩ and ⟨ʼ⟩
- **File:** `words/hello.js` line 1078
- **Current:** `["nima'la kuxhewchʼa", "nimaʔla kuʃewtʃʼa"]`  (apostrophe in `nima'la` is U+0027; the one in `kuxhewchʼa` is U+02BC)
- **Expected:** `["nimaʼla kuxhewchʼa", "nimaʔla kuʃewtʃʼa"]`  (both U+02BC)
- **Why:** A two-word greeting in which the glottal stop of the first word is a typewriter quote and the glottalized affricate of the second word is the correct saltillo. Both represent the same ALMG grapheme ⟨ʼ⟩ and the IPA shows both as glottal; the first should be normalized to U+02BC.

---

### 7. `agu` (Aguacateco) — whole column — saltillo flips between ⟨ʼ⟩ and ASCII ⟨'⟩ word-to-word
- **File:** `words/*.js` (e.g. `fire.js` 1098, `good.js` 1086, `eye.js` 1092 use ⟨ʼ⟩; `hand.js` 1092, `water.js` 1090, `tree.js` 1086, `dog.js` 1098, `heart.js` 1086 use ⟨'⟩)
- **Current (sample):** `fire.js` L1098 `["qʼaq", "qʼaq"]` and `good.js` L1086 `["saqʼ", "saqʼ"]` (U+02BC) **vs** `hand.js` L1092 `["q'ab", "qʼab"]`, `water.js` L1090 `["a'", "aʔ"]`, `tree.js` L1086 `["tze'", "tseʔ"]`, `dog.js` L1098 `["tx'i'", "tsʼiʔ"]`, `heart.js` L1086 `["k'uum", "kʼuːm"]` (U+0027)
- **Expected:** use the saltillo ⟨ʼ⟩ (U+02BC) in every Aguacateco surface form, e.g. `qʼab`, `aʼ`, `tzeʼ`, `txʼiʼ`, `kʼuum`
- **Why:** Aguacateco is the clearest *intra-language* offender: of its 20 cells, six glottal graphemes are the correct ALMG saltillo and six are typewriter quotes — a near-even split for the *same* sound. Note that every IPA partner already shows the saltillo glyph (`qʼ`, `kʼ`, `tsʼ`), proving the intended grapheme. The dataset's Mayan house style (see #8) is the modifier letter, so the ASCII cells are the outliers and should be converted.

---

### 8. `itz`, `toj`, `usp` — water/fire/hand etc. — entire Mayan columns use ASCII ⟨'⟩ against the dataset's ⟨ʼ⟩ norm
- **File:** `words/water.js` (itz L617 `["ja'", "haʔ"]`, toj L1086 `["ja'", "haʔ"]`, usp L618 `["ja'", "haʔ"]`); `words/fire.js` (itz L625 `["k'ak'", "kʼakʼ"]`, toj L1094 `["k'ak'", "kʼakʼ"]`, usp L626 `["q'aq'", "qʼaqʼ"]`); `words/hand.js` (itz L619 `["k'ab", "kʼab"]`, usp L620 `["q'ab", "qʼab"]`)
- **Current:** all glottal graphemes in `itz` (15/15), `toj` (14/14) and `usp` (16/16) are the ASCII apostrophe U+0027
- **Expected:** convert each to the saltillo ⟨ʼ⟩ U+02BC, e.g. `itz` `jaʼ`/`kʼakʼ`/`kʼab`, `usp` `jaʼ`/`qʼaqʼ`/`qʼab`, `toj` `jaʼ`/`kʼakʼ`
- **Why:** Across the eighteen Mayan varieties in the set the modifier-letter saltillo ⟨ʼ⟩ outnumbers the ASCII apostrophe 155→95, and eight varieties (`cak`, `kek`, `mam`, `myn`, `quc`, `tzh`, `tzo`, `yua`) use ⟨ʼ⟩ *exclusively* — that is the de-facto house style and matches ALMG orthographic norms. `itz`, `toj` and `usp` are the three varieties that are 100 % ASCII, making them the systematic outliers; their IPA cells already render the saltillo, confirming the intended grapheme. (I list these three together as one cluster rather than 45 separate items; they need a single find-and-replace of U+0027→U+02BC within their cells.)

---

### 9. `chf` (Tabasco Chontal), `ctu` (Chol), `kjb` (Qʼanjobʼal), `poh` (Poqomam) — saltillo mixed ⟨ʼ⟩/⟨'⟩ across their own columns
- **File:** sample evidence — `chf`: `fire.js` L1097 `["kʼakʼ", "kʼakʼ"]` (ʼ) vs `water.js` L1089 `["ja'", "haʔ"]` (') ; `ctu`: `drink.js` L1081 `["ucʼ", "utsʼ"]` (ʼ) vs `hand.js` L1087 `["k'ab'", "kʼabʼ"]` (') ; `kjb`: `fire.js` L1092 `["qʼaʼ", "qʼaʔ"]` (ʼ) vs `hand.js` L1086 `["q'ab", "qʼab"]` (') ; `poh`: `eye.js` L1085 `["nakʼ", "nakʼ"]` (ʼ) vs `water.js` L1083 `["ha'", "haʔ"]` (')
- **Current:** each of these four varieties contains *both* U+02BC and U+0027 in different word cells (counts: chf 4 mod / 9 ascii, ctu 5 / 10, kjb 9 / 4, poh 4 / 6)
- **Expected:** normalize every glottal grapheme to the saltillo ⟨ʼ⟩ U+02BC, matching the same language's other cells and the dataset's Mayan norm
- **Why:** Same defect as #7 but spread over four more languages. Because each language *already* uses ⟨ʼ⟩ in some of its own words, the correct target is unambiguous (the language has effectively voted for the saltillo). The `ctu` `hand.js` form `k'ab'` is doubly affected — both apostrophes are ASCII while the IPA partner `kʼabʼ` shows two saltillos. Flagged as a cluster; the fix is per-language U+0027→U+02BC.

---

### 10. `mvc` (Mam) — fire & water — ASCII ⟨'⟩ against the same variety's ⟨ʼ⟩ elsewhere
- **File:** `words/fire.js` line 1101 and `words/water.js` line 1093
- **Current:** `fire.js` L1101 `["q'aq'", "qʼaqʼ"]` and `water.js` L1093 `["a'", "aʔ"]` (all U+0027)
- **Expected:** `["qʼaqʼ", "qʼaqʼ"]` and `["aʼ", "aʔ"]` (U+02BC)
- **Why:** Beyond the single-string mixes already flagged in #3 and #5, these two `mvc` cells are wholly ASCII while sibling Mam varieties (`mam` L1100 `["qʼaqʼ","qʼaqʼ"]`) and the `mvc` IPA itself use the saltillo. They complete the picture that the Comitancillo Mam column needs a uniform U+0027→U+02BC normalization.

---

### 11. (Audit note — clean areas) Caucasian palochka, Sami, Lakota, Maltese, Hawaiian verified correct
- **File:** `words/*.js` (NE-Caucasian `ce`/`av`/`dar`/…, `se`, `lkt`, `mt`, `haw` columns)
- **Current:** e.g. `water.js` `av` L656 `["лъим","ɬim"]`, `se` L465 `["čáhci","tʃaːhtsi"]`, `lkt` L652 `["mní","mní"]`, `mt` L254 `["ilma","ilma"]`, `haw` `cat.js` L178 `["pōpoki","poːpoki"]`
- **Expected:** no change
- **Why:** Recorded for transparency, not as a defect. I specifically checked the look-alike traps in my lens and they pass: no NE-Caucasian entry substitutes Latin ⟨I⟩ or ⟨l⟩ for the palochka Ӏ (U+04C0); Northern Sami uses č/š/ž/ŋ/đ and á correctly; Lakota carries čšžŋ plus ȟ/ʼ correctly; Maltese ġ/ħ/għ and Hawaiian ʻokina + macrons are all well-formed; and a sweep for mojibake (Ã/Â/â€/U+FFFD) returned nothing. This is the standard the Mayan and Uzbek columns above fail to meet; I include it so the comparison standard is visible.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

I verified every flagged cell by extracting exact Unicode code points from the live `words/*.js` files on 2026-05-31, and re-tallied the Mayan saltillo distribution to confirm the reviewer's evidence. The tally reproduces the review exactly: 8 varieties (`cak kek mam myn quc tzh tzo yua`) use the modifier-letter saltillo ⟨ʼ⟩ U+02BC exclusively, the saltillo outnumbers the ASCII apostrophe U+0027 dataset-wide 155→95, and every IPA partner of the flagged cells already renders U+02BC — confirming the intended grapheme. The ASCII-apostrophe cells are therefore unambiguous local errors against the dataset's own house style, not a convention choice. All items below are **applied (applied by orchestrator this round)**.

### 1 & 2 — `uz` hand/eye — ASCII ⟨'⟩ → Uzbek ⟨oʻ⟩ U+02BB. APPLIED.
`hand.js` `uz: ["qo'l",…]` → `["qoʻl",…]` and `eye.js` `uz: ["ko'z",…]` → `["koʻz",…]`. The 3rd code point was U+0027; corrected to U+02BB MODIFIER LETTER TURNED COMMA per the 1995 Uzbek Latin reform (oʻzbek lotin alifbosi). These are the only two Uzbek cells containing the ⟨oʻ⟩ letter; the other Uzbek cells are diacritic-free and untouched. Surface field only; IPA unchanged.

### 3 — `mvc` drink — single string mixed U+0027 + U+02BC → both U+02BC. APPLIED.
`drink.js` `mvc: ["k'aaʼn",…]` → `["kʼaaʼn",…]`. The leading `k'` was U+0027 (the trailing `ʼ` already U+02BC).

### 4 — `ixl` hand — APPLIED. `hand.js` `ixl: ["qʼab'",…]` → `["qʼabʼ",…]`; final apostrophe U+0027→U+02BC.

### 5 — `mvc` hand — APPLIED. `hand.js` `mvc: ["q'obʼ",…]` → `["qʼobʼ",…]`; leading apostrophe U+0027→U+02BC.

### 6 — `ixl` hello — APPLIED. `hello.js` `ixl: ["nima'la kuxhewchʼa",…]` → `["nimaʼla kuxhewchʼa",…]`; the U+0027 in `nima'la` → U+02BC.

### 7 — `agu` whole column — APPLIED (mechanical U+0027→U+02BC for every `agu` surface cell containing it). Applied cells: `dog.js` (txʼiʼ), `eye.js` already-mod (no change needed), `fire.js` already-mod, `good.js` already-mod, `hand.js` (qʼab), `heart.js` (kʼuum), `tree.js` (tzeʼ), `water.js` (aʼ). After this pass `agu` is uniformly U+02BC.

### 8 — `itz`, `toj`, `usp` 100%-ASCII columns — APPLIED. Every U+0027 in these three varieties' surface cells converted to U+02BC across all word files (water/fire/hand/drink/eat/dog/good/heart/hello/house/love/moon/mother/sun/thanks/tree). Each IPA partner already carried the saltillo.

### 9 — `chf`, `ctu`, `kjb`, `poh` mixed columns — APPLIED. All remaining U+0027 surface apostrophes normalized to U+02BC, matching the same variety's existing saltillo cells. Includes the doubly-affected `ctu`/`toj` `k'ab'` (hand) → `kʼabʼ`.

### 10 — `mvc` fire & water — APPLIED. `fire.js` `q'aq'`→`qʼaqʼ`, `water.js` `a'`→`aʼ`. Completes the Comitancillo Mam normalization (together with #3 and #5, `mvc` is now uniformly U+02BC).

### 11 — Audit note (palochka / Sami / Lakota / Maltese / Hawaiian clean) — NO CHANGE, acknowledged. Independently confirmed these columns are well-formed; recorded for transparency only.

**Scope note:** The orchestrator applied 77 surface-field edits total across 18 word files (75 Mayan U+0027→U+02BC + 2 Uzbek U+0027→U+02BB). Only the surface form's apostrophe code points were changed; no IPA value, no orthographic letter, and no segment ID was modified. Each `old` string was verified unique within its file.

---

## Reviewer round-2 response (再評価 round-2)

I re-verified every claimed fix against the LIVE `words/*.js` data on 2026-05-31 using a VM-sandboxed loader that extracts the actual `["surface","ipa"]` tuples and a Unicode code-point sweep (not a text-pattern guess). Results below; all confirmed in live data.

**Per-item adjudication:**

- **#1 `uz` hand — ✓ ACCEPT.** Live: `hand.js` L232 `uz: ["qoʻl", "qɒl"]`. Code-point dump confirms `q o ʻ l` = U+71 U+6F **U+02BB** U+6C — the correct tutuq-belgisi turned comma, not U+0027 and not U+02BC. IPA `qɒl` unchanged.
- **#2 `uz` eye — ✓ ACCEPT.** Live: `eye.js` L232 `uz: ["koʻz", "kɒz"]`, the ⟨oʻ⟩ now U+02BB. IPA untouched.
- **#3 `mvc` drink — ✓ ACCEPT.** Live: `kʼaaʼn` — both glottal marks now U+02BC; no U+0027 remains.
- **#4 `ixl` hand — ✓ ACCEPT.** Live: `qʼabʼ` — final apostrophe now saltillo.
- **#5 `mvc` hand — ✓ ACCEPT.** Live: `qʼobʼ` — leading apostrophe now saltillo.
- **#6 `ixl` hello — ✓ ACCEPT.** Live: `nimaʼla kuxhewchʼa` — both glottal marks U+02BC.
- **#7 `agu` whole column — ✓ ACCEPT.** Spot-checked `dog (txʼiʼ)`, `hand (qʼab)`, `heart (kʼuum)`, `tree (tzeʼ)`, `water (aʼ)` — all U+02BC. Full-column sweep (below) shows zero U+0027.
- **#8 `itz`/`toj`/`usp` 100%-ASCII columns — ✓ ACCEPT.** `itz jaʼ/kʼakʼ/kʼab`, `toj jaʼ/kʼakʼ`, `usp jaʼ/qʼaqʼ/qʼab` all verified U+02BC.
- **#9 `chf`/`ctu`/`kjb`/`poh` mixed columns — ✓ ACCEPT.** `chf jaʼ/kʼakʼ`, `ctu kʼabʼ` (the doubly-affected hand form — both now saltillo), `kjb qʼab`, `poh haʼ` verified.
- **#10 `mvc` fire & water — ✓ ACCEPT.** `qʼaqʼ` and `aʼ` verified U+02BC; Comitancillo Mam column now uniform.
- **#11 Audit note — ✓ ACCEPT (no change required).** Acknowledged as transparency record only.

**Independent full-column sweep (the strongest evidence):** I tallied surface-form apostrophe code points across ALL word files for the 18 referenced Mayan varieties (`agu mvc ixl itz toj usp chf ctu kjb poh cak kek mam myn quc tzh tzo yua`):
- Result: **U+02BC (saltillo) = 250, U+0027 (ASCII) = 0.** This exactly matches the predicted post-fix total (155 pre-existing + 95 converted = 250) and confirms the normalization is complete with no missed cells.
- Uzbek sweep: **0 remaining ASCII apostrophes** in any `uz` surface cell across all files.

**New issues raised this round:** none. The sweep surfaced no stray U+0027, no over-conversion (e.g. no Uzbek cell wrongly given U+02BC instead of U+02BB), and no collateral IPA edits in the spot-checks.

### Scorecard
| Item | Verdict |
|------|---------|
| #1 uz hand | ✓ |
| #2 uz eye | ✓ |
| #3 mvc drink | ✓ |
| #4 ixl hand | ✓ |
| #5 mvc hand | ✓ |
| #6 ixl hello | ✓ |
| #7 agu column | ✓ |
| #8 itz/toj/usp | ✓ |
| #9 chf/ctu/kjb/poh | ✓ |
| #10 mvc fire/water | ✓ |
| #11 audit note | ✓ (no-op) |

10 actionable items applied and verified in live data; 1 no-op audit note acknowledged. Zero remaining ASCII apostrophes in scope.

**File status: CLOSED** — nothing left to address.
