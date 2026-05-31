# Wordmap review #73 — Diacritic, Unicode & orthographic-hygiene specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a general linguist who specialises in the *codepoint-level* hygiene of phonetic corpora: my day job is making sure that what looks like IPA on screen is actually the right Unicode, that diacritics are composed and ordered the way the Handbook prescribes, and that look-alike letters from Cyrillic/Greek/Latin blocks are not silently mixed. For this project I parse every `words/*.js` file programmatically (regex over the `[surface, ipa]` tuples), then walk each string character-by-character checking `unicodedata.name()` and `unicodedata.normalize('NFC', …)`, before reading the offending line verbatim. My reference frame is the **Handbook of the International Phonetic Association (1999)** — specifically its typographic conventions for the tie bar (t͡s), the modifier letters ˈ U+02C8 (stress) and ː U+02D0 (length), and the ejective apostrophe ʼ vs the glottal stop ʔ — together with **Unicode Standard Annex #15 (UAX#15, Normalization)** for NFC consistency and the long-standing **ɡ (U+0261) reference-glyph policy** that keeps ASCII g out of IPA. I also lean on **Pullum & Ladusaw, _Phonetic Symbol Guide_ (2nd ed., 1996)** for the canonical codepoints. I am familiar with this dataset's conventions: the project has clearly converged on (a) NFC throughout (verified: zero non-NFC strings remain), (b) modifier-letter ʼ U+02BC for surface saltillo/glottalisation, (c) ʔ U+0294 for the glottal-stop phoneme in the IPA field, and (d) the Greek-derived IPA letters β/θ/χ U+03B2/03B8/03C7 being legitimate (so they are *not* "mixed-script" errors). My report is therefore not a list of mojibake — that has been cleaned — but a set of *residual* ordering, consistency and wrong-codepoint defects that survive in otherwise-clean rows. Every "Current" value below was copied directly from the file at the cited line; no data file was modified.

---

## Issues found

### 1. `mvc` — dog — ejective diacritic mis-ordered inside the affricate (`tʼʃ` → `tʃʼ`)
- **File:** `words/dog.js` line 1101
- **Current:** `["txʼyaan", "tʼʃjaːn"]`
- **Expected:** `["txʼyaan", "tʃʼjaːn"]`
- **Why:** The intended segment is the ejective post-alveolar affricate /tʃʼ/. Per the Handbook of the IPA (1999), the ejective mark ʼ U+02BC attaches to the *whole* affricate and is written after the second element: `tʃʼ`. The current string places ʼ between the stop and the fricative (`t` + ʼ + `ʃ`), which parses as an ejective /tʼ/ followed by a plain /ʃ/ — a different sequence. The sibling Mam form is correct: `mam` line 1100 `["txʼyan", "tʃʼjan"]` has `tʃʼ`. The surface `txʼyaan` (orthographic `tx` = /tʃ/) confirms one affricate, so the IPA must be `tʃʼjaːn`.

---

### 2. `itl` — dog / hand / tree — word-initial glottal stop written with modifier letter ʼ U+02BC instead of ʔ U+0294
- **File:** `words/dog.js` line 140; `words/hand.js` line 140; `words/tree.js` line 140
- **Current:** `["ʼат", "ʼat"]` (dog) / `["ʼух", "ʼux"]` (hand) / `["ʼурх", "ʼurx"]` (tree)
- **Expected:** IPA `"ʔat"` / `"ʔux"` / `"ʔurx"` (surface unchanged)
- **Why:** In the IPA field a *word-initial* ʼ U+02BC MODIFIER LETTER APOSTROPHE is ill-formed: a modifier letter has no base to modify, and a leading glottal-stop phoneme is ʔ U+0294. This is settled by Itelmen's own data: `water.js` line 140 transcribes the glottal stop correctly as `itl: ["иʔ", "iʔ"]` (ʔ U+0294). The project convention elsewhere is identical — surface ʼ maps to IPA ʔ (e.g. `dog.js` line 803 `hts: ["…", "koŋɡwesi"]`-cluster mate `hts: ["ʼaha", "ʔaha"]` in `eye.js` line 803; `crx` `["ʼoonjuh", "ʔoːndʒuh"]` in `eat.js` line 957). The three `itl` IPA fields are the only ones carrying the wrong codepoint word-initially.

---

### 3. `bfa` — dog — intervocalic glottal stop in IPA written with ʼ U+02BC instead of ʔ U+0294
- **File:** `words/dog.js` line 732
- **Current:** `["ngoʼlo", "ŋoʼlo"]`
- **Expected:** `["ngoʼlo", "ŋoʔlo"]`
- **Why:** The IPA `ŋoʼlo` reproduces the surface apostrophe verbatim: a vowel followed by ʼ U+02BC (modifier letter) followed by /l/. A glottal stop between /o/ and /l/ is the phoneme ʔ U+0294, not the modifier letter (Handbook 1999; Pullum & Ladusaw 1996). The dataset's standing rule — surface ʼ, IPA ʔ — is applied consistently in the neighbouring glottalic entries (the `hts`/`crx` cluster, see #2); here the IPA was filled by copying the surface ʼ rather than transcribing it.

---

### 4. `mvc` — drink — surface form mixes ASCII apostrophe U+0027 and modifier letter ʼ U+02BC in one string
- **File:** `words/drink.js` line 1089
- **Current:** `["k'aaʼn", "kʼaːʔn"]`
- **Expected:** `["kʼaaʼn", "kʼaːʔn"]`
- **Why:** The surface string contains two different "apostrophes": the first is ASCII `'` U+0027 (after `k`), the second is ʼ U+02BC (after `aa`). They are meant to be the same saltillo grapheme. The IPA correctly distinguishes them (ejective `kʼ` then glottal `ʔ`), but the surface must use one consistent character; the dataset's chosen surface glottalic character is the modifier letter ʼ U+02BC (used by essentially every other Mayan/Mesoamerican row, e.g. `mvc` `hand.js` 1095 `mam`/`agu`). The stray U+0027 is a copy-paste residue.

---

### 5. `mvc` — hand — surface mixes modifier letter ʼ U+02BC and ASCII apostrophe U+0027
- **File:** `words/hand.js` line 1095
- **Current:** `["q'obʼ", "qʼob"]`
- **Expected:** `["qʼobʼ", "qʼob"]`
- **Why:** Same defect as #4, in the same language: the first apostrophe is ASCII `'` U+0027 (after `q`), the trailing one is ʼ U+02BC (after `b`). Compare the sibling Mam row `hand.js` line 1094 `mam: ["qʼobʼ", "qʼob"]`, which uses ʼ U+02BC in *both* positions. The `mvc` surface should match.

---

### 6. `ixl` — hand — surface mixes modifier letter ʼ U+02BC and ASCII apostrophe U+0027
- **File:** `words/hand.js` line 1093
- **Current:** `["qʼab'", "qʼaɓ"]`
- **Expected:** `["qʼabʼ", "qʼaɓ"]`
- **Why:** The leading glottalic is ʼ U+02BC (`qʼ`), but the word-final one is ASCII `'` U+0027. Both render the Ixil saltillo and must be the same codepoint. The immediately adjacent Mam/Mvc rows (lines 1094–1095) use ʼ U+02BC, and the file's broader Mayan block is uniform on ʼ U+02BC; the trailing U+0027 here is the lone exception.

---

### 7. `ixl` — hello — surface mixes ASCII apostrophe U+0027 and modifier letter ʼ U+02BC
- **File:** `words/hello.js` line 1078
- **Current:** `["nima'la kuxhewchʼa", "nimaʔla kuʃewtʃʼa"]`
- **Expected:** `["nimaʼla kuxhewchʼa", "nimaʔla kuʃewtʃʼa"]`
- **Why:** Within one surface string the saltillo after `nima` is ASCII `'` U+0027 while the one in `chʼa` is ʼ U+02BC. The IPA disambiguates them correctly (glottal `ʔ` then ejective `tʃʼ`), so the surface inconsistency is purely a codepoint-hygiene issue. The dataset's surface convention (and this very entry's second apostrophe) is ʼ U+02BC; the first should match.

---

### 8. `ja_kanbun` — father — tie bar present here but absent in the same lemma's other Kanbun rows (intra-code inconsistency)
- **File:** `words/father.js` line 548
- **Current:** `["父", "t͡ɕit͡ɕi"]`
- **Expected:** `["父", "tɕitɕi"]` (drop the tie bars to match the rest of `ja_kanbun`)
- **Why:** The same pseudo-code `ja_kanbun` is transcribed **without** tie bars in the other concepts — `moon.js` line 554 `["月", "tsuki"]` and `one.js` line 554 `["一", "hitotsu"]` both write `ts` untied. Only the father.js row carries the tied `t͡ɕit͡ɕi`. The Handbook of the IPA (1999) makes the tie bar optional, but a single notional variety must be internally consistent across the corpus. Either add tie bars to the moon/one rows or (matching the majority of the `ja_kanbun` cells) drop them here.

---

### 9. `wuu_jh` / `wuu_jx` / `wuu_hz` — eat — tie bar dropped in three Wu sub-dialects while the rest of the Wu cluster keeps it
- **File:** `words/eat.js` lines 347 (`wuu_jh`), 348 (`wuu_jx`), 394 (`wuu_hz`)
- **Current:** `wuu_jh: ['吃', 'tɕʰiɪʔ˥']`, `wuu_jx: ['吃', 'tɕʰiɪʔ˥']`, `wuu_hz: ['吃', 'tɕʰiʔ˥']`
- **Expected:** `'t͡ɕʰiɪʔ˥'` / `'t͡ɕʰiɪʔ˥'` / `'t͡ɕʰiʔ˥'` (add the tie bar to match the cluster)
- **Why:** The same affricate /t͡ɕʰ/ in the same Wu sub-tree is tied in the head and the other branches — `wuu` line 74 `"t͡ɕʰiʔ˥"`, `wuu_nb` line 975 `"t͡ɕʰiʔ˩˨"`, `wuu_sz` line 1043 `"t͡ɕʰiɪʔ˥˥"` — but untied in `wuu_jh/_jx/_hz`. Tie-bar presence should be uniform within a dialect family (Handbook 1999). Bring the three outliers into line with the tied majority.

---

### 10. `de_at` / `de_lut` — cat — affricate untied while standard `de` ties it (intra-cluster inconsistency)
- **File:** `words/cat.js` lines 283 (`de_at`), 921 (`de_lut`)
- **Current:** `de_at: ["Katze", "kɑtsə"]`, `de_lut: ["Katze", "ˈkatsə"]`
- **Expected:** `"kɑt͡sə"` / `"ˈkat͡sə"`
- **Why:** Standard German `de` line 92 is `["Katze", "kat͡sə"]` with the tie bar on /t͡s/; the Austrian and Lutheran varieties of the *same word* drop it. Identical phoneme, identical dialect family — the tie-bar treatment must be consistent (Handbook 1999). Match the standard `de` row.

---

### 11. `de_at` / `de_lut` — heart — same /t͡s/ tie-bar inconsistency as #10
- **File:** `words/heart.js` lines 283 (`de_at`), 921 (`de_lut`)
- **Current:** `de_at: ["Herz", "hɛɐts"]`, `de_lut: ["Hertz", "hɛrts"]`
- **Expected:** `"hɛɐt͡s"` / `"hɛrt͡s"`
- **Why:** Standard `de` line 92 is `["Herz", "hɛʁt͡s"]` with /t͡s/ tied; the two German sub-varieties write the same final affricate untied. As in #10 this is a within-family tie-bar inconsistency, not a phonetic difference. (I deliberately do *not* flag the `de_lut` surface "Hertz" with -tz, which is a defensible Early-New-High-German / Luther spelling matching its IPA `hɛrts`; only the tie bar is at issue.)

---

### 12. `vi_nom` — dog — tie bar dropped versus the modern Vietnamese rows
- **File:** `words/dog.js` line 558
- **Current:** `["𤝞", "tɕɔ"]`
- **Expected:** `["𤝞", "t͡ɕɔ"]`
- **Why:** The two living Vietnamese rows tie the initial affricate — `vi` line 76 `"t͡ɕɔ˧˥"`, `vi_c` line 77 `"t͡ɕɔː˩˧"` — while the Nôm-script row writes it untied. Same /t͡ɕ/, same language; the tie bar should be uniform across the `vi` cluster (Handbook 1999).

---

### 13. `vi_nom` — hello — tie bar dropped versus the modern Vietnamese rows
- **File:** `words/hello.js` line 549
- **Current:** `["吀嘲", "sin tɕaːw"]`
- **Expected:** `["吀嘲", "sin t͡ɕaːw"]`
- **Why:** Parallel to #12 in the greeting file: `vi` line 76 `"sin˥ t͡ɕaːw˨˩"` and `vi_c` line 77 `"siːn˥ t͡ɕaːw˧˨"` tie /t͡ɕ/, but `vi_nom` writes `tɕaːw` untied. Bring the Nôm row into line with the rest of its cluster.

---

### 14. `it_dan` — eat — affricate untied while standard `it` ties it
- **File:** `words/eat.js` line 900
- **Current:** `["mangiare", "manˈdʒare"]`
- **Expected:** `["mangiare", "manˈd͡ʒare"]`
- **Why:** Standard Italian `it` line 96 is `["mangiare", "manˈd͡ʒaːre"]` with /d͡ʒ/ tied; the Dante/older variety `it_dan` of the very same verb drops the tie bar. Same affricate, same language — uniform tie-bar treatment per the Handbook (1999). (The vowel-length difference `aːre` vs `are` is a separate, legitimate distinction and is not what I am flagging.)

---

### 15. `fa_clas` — eye — affricate untied while modern `fa` ties it
- **File:** `words/eye.js` line 905
- **Current:** `["چشم", "tʃaʃm"]`
- **Expected:** `["چشم", "t͡ʃaʃm"]`
- **Why:** Modern Persian `fa` line 106 is `["چشم", "t͡ʃeʃm"]` with /t͡ʃ/ tied; Classical Persian `fa_clas` writes the same onset affricate untied. The vowel difference (`e` vs `a`) is a real historical change and is fine; the tie-bar presence, however, should be consistent across the `fa` cluster (Handbook 1999).

---

### 16. `ar_qur` — tree — affricate untied while the other Arabic varieties tie it
- **File:** `words/tree.js` line 102
- **Current:** `["شجرة", "ʃadʒara"]`
- **Expected:** `["شجرة", "ʃad͡ʒara"]`
- **Why:** The MSA and dialectal rows all tie the medial /d͡ʒ/ — `ar` line 103 `"ʃad͡ʒara"`, `ar_iq` line 240 `"ʃad͡ʒaɾa"`, `ar_sd` line 245 `"ʃad͡ʒaɾa"` — but the Quranic-register row `ar_qur` writes it untied. Same root شجرة, same affricate; the tie bar should be uniform within the Arabic cluster (Handbook 1999).

---

### 17. `ko_em` — good — affricate untied while every other Korean variety ties it
- **File:** `words/good.js` line 556
- **Current:** `["좋다", "tɕotʰa"]`
- **Expected:** `["좋다", "t͡ɕotʰa"]`
- **Why:** The entire Korean block ties the initial /t͡ɕ/ — `ko` line 66 `"t͡ɕotʰa"`, plus `ko_kp`/`ko_bus`/`ko_jeju`/`ko_yb` (lines 67–70) and `ko_hg`/`ko_jl` (lines 980–981), all `t͡ɕoa…`. Only Early-Modern Korean `ko_em` writes `tɕotʰa` untied. With seven sibling rows tied, the lone untied cell is the inconsistency to fix (Handbook 1999).

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

All 17 findings are codepoint/diacritic-hygiene defects or within-cluster tie-bar inconsistencies. Each was verified verbatim against the cited line (and the cited sibling rows), and each correction is a clear, mechanical normalization toward an established sibling form. All 17 are applied.

1. `mvc` dog — IPA `tʼʃjaːn` → `tʃʼjaːn`. Confirmed codepoints: t + ʼU+02BC + ʃ. Re-orders the ejective ʼ to attach after the affricate's second element, matching sibling `mam` `tʃʼjan`. **(applied by orchestrator this round)**
2. `itl` dog/hand/tree — word-initial IPA ʼU+02BC → ʔU+0294: `ʼat`→`ʔat`, `ʼux`→`ʔux`, `ʼurx`→`ʔurx`. Surface unchanged. Matches Itelmen's own `water.js` `iʔ` (ʔU+0294). **(applied by orchestrator this round)**
3. `bfa` dog — intervocalic IPA `ŋoʼlo` (ʼU+02BC) → `ŋoʔlo` (ʔU+0294). Surface unchanged. **(applied by orchestrator this round)**
4. `mvc` drink — surface `k'aaʼn`: first apostrophe is ASCII U+0027, second is ʼU+02BC. Normalize to `kʼaaʼn` (both ʼU+02BC). IPA unchanged. **(applied by orchestrator this round)**
5. `mvc` hand — surface `q'obʼ` (leading U+0027) → `qʼobʼ` (ʼU+02BC), matching sibling `mam` `qʼobʼ`. IPA unchanged. **(applied by orchestrator this round)**
6. `ixl` hand — surface `qʼab'` (trailing U+0027) → `qʼabʼ` (ʼU+02BC). IPA unchanged. **(applied by orchestrator this round)**
7. `ixl` hello — surface `nima'la kuxhewchʼa` (first apostrophe U+0027) → `nimaʼla kuxhewchʼa` (ʼU+02BC). IPA unchanged. **(applied by orchestrator this round)**
8. `ja_kanbun` father — IPA `t͡ɕit͡ɕi` → `tɕitɕi` (drop tie bars), matching the majority of `ja_kanbun` cells (`moon.js` `tsuki`, `one.js` `hitotsu`, both untied). Took the reviewer's "match the majority / drop them here" option. **(applied by orchestrator this round)**
9. `wuu_jh`/`wuu_jx`/`wuu_hz` eat — add tie bar to /t͡ɕʰ/: `tɕʰiɪʔ˥`→`t͡ɕʰiɪʔ˥` (×2) and `tɕʰiʔ˥`→`t͡ɕʰiʔ˥`, matching tied `wuu`/`wuu_nb`/`wuu_sz`. **(applied by orchestrator this round)**
10. `de_at`/`de_lut` cat — `kɑtsə`→`kɑt͡sə`, `ˈkatsə`→`ˈkat͡sə`, matching standard `de` `kat͡sə`. **(applied by orchestrator this round)**
11. `de_at`/`de_lut` heart — `hɛɐts`→`hɛɐt͡s`, `hɛrts`→`hɛrt͡s`, matching `de` `hɛʁt͡s`. (de_lut surface "Hertz" left unchanged per reviewer.) **(applied by orchestrator this round)**
12. `vi_nom` dog — `tɕɔ`→`t͡ɕɔ`, matching `vi`/`vi_c`. **(applied by orchestrator this round)**
13. `vi_nom` hello — `sin tɕaːw`→`sin t͡ɕaːw`, matching `vi`/`vi_c`. **(applied by orchestrator this round)**
14. `it_dan` eat — `manˈdʒare`→`manˈd͡ʒare` (vowel length left untouched per reviewer), matching `it` `manˈd͡ʒaːre`. **(applied by orchestrator this round)**
15. `fa_clas` eye — `tʃaʃm`→`t͡ʃaʃm` (vowel `a` left untouched), matching `fa` `t͡ʃeʃm`. **(applied by orchestrator this round)**
16. `ar_qur` tree — `ʃadʒara`→`ʃad͡ʒara`, matching `ar`/`ar_iq`/`ar_sd`. **(applied by orchestrator this round)**
17. `ko_em` good — `tɕotʰa`→`t͡ɕotʰa`, the lone untied outlier among 7 tied Korean siblings. **(applied by orchestrator this round)**

No items held or left open. All corrections are surface-codepoint or tie-bar normalizations supported by an internal sibling row; no orthographic surface text was altered except the apostrophe-codepoint normalizations the reviewer explicitly flagged (#4–#7).

---

## Reviewer round-2 response (再評価 round-2)

I re-verified every claimed fix programmatically against the live `words/*.js` data (parsing each `WORDS.<word>.data[<code>]` tuple and dumping `unicodedata`-style codepoints with `String.codePointAt`). Each correction is present in the live data at the exact codepoint level claimed.

Per-item adjudication:

1. **mvc dog ✓** — IPA now `tʃʼjaːn` = U+0074 U+0283 **U+02BC** U+006A U+0061 U+02D0 U+006E. The ʼ now follows the affricate's second element (`tʃ`), as the Handbook prescribes; matches sibling `mam` `tʃʼjan`. Verified.
2. **itl dog/hand/tree ✓** — all three IPA fields now lead with **U+0294** ʔ (`ʔat` / `ʔux` / `ʔurx`); surfaces unchanged (still ʼ U+02BC). Consistent with Itelmen `water.js` `iʔ`. Verified.
3. **bfa dog ✓** — IPA `ŋoʔlo` = U+014B U+006F **U+0294** U+006C U+006F; surface `ngoʼlo` unchanged. Verified.
4. **mvc drink ✓** — surface now `kʼaaʼn` = both apostrophes **U+02BC**, no stray U+0027 remaining. Verified.
5. **mvc hand ✓** — surface `qʼobʼ` = both **U+02BC**; byte-identical to sibling `mam` surface `qʼobʼ`. Verified.
6. **ixl hand ✓** — surface `qʼabʼ` = both **U+02BC**. Verified.
7. **ixl hello ✓** — surface `nimaʼla kuxhewchʼa` = both saltillos **U+02BC**, no U+0027. Verified.
8. **ja_kanbun father ✓** — IPA now `tɕitɕi` (untied), matching the untied majority `moon` `tsuki` / `one` `hitotsu`. Reviewer's "match the majority" option taken. Verified.
9. **wuu_jh/_jx/_hz eat ✓** — all three now carry the tie bar **U+0361**: `t͡ɕʰiɪʔ˥` ×2 and `t͡ɕʰiʔ˥`, matching `wuu`/`wuu_nb`/`wuu_sz`. Verified.
10. **de_at/de_lut cat ✓** — `kɑt͡sə` / `ˈkat͡sə`, tie bar U+0361 present, matching `de` `kat͡sə`. Verified.
11. **de_at/de_lut heart ✓** — `hɛɐt͡s` / `hɛrt͡s` tied, matching `de` `hɛʁt͡s`; `de_lut` surface "Hertz" correctly left intact per my original carve-out. Verified.
12. **vi_nom dog ✓** — `t͡ɕɔ` tied, matching `vi`/`vi_c`. Verified.
13. **vi_nom hello ✓** — `sin t͡ɕaːw` tied. Verified.
14. **it_dan eat ✓** — `manˈd͡ʒare` tied (vowel length untouched as I requested). Verified.
15. **fa_clas eye ✓** — `t͡ʃaʃm` tied (vowel `a` untouched). Verified.
16. **ar_qur tree ✓** — `ʃad͡ʒara` tied, now byte-identical to `ar`. Verified.
17. **ko_em good ✓** — `t͡ɕotʰa` tied, now identical to `ko`. Verified.

New issues raised this round: none. The fixes are confined to exactly the codepoints flagged; I checked that no surface orthography was altered beyond the four explicitly-requested apostrophe normalizations (#4–#7), and the spot-checked sibling rows used as targets (mam, de, vi, ar, ko) are unchanged and still match.

### Scorecard
- Items: 17. Accepted (✓): 17. Partial (△): 0. Rejected (✗): 0. New: 0.
- All corrections are within-dataset codepoint/tie-bar normalizations sourced to an internal sibling row plus the Handbook of the IPA (1999); no external citation was required, none is outstanding.

**File status: CLOSED** — nothing left to address.
