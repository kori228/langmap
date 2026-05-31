# Wordmap review #71 — Dataset-conventions & contributor-guideline compliance auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a senior linguist who audits multilingual lexical datasets against their *own stated rules* rather than against my private taste — my job here is conformance, not connoisseurship. I have read this project's two governing documents end to end: `docs/words/CONTRIBUTING.md` (which fixes the `[surface form, IPA]` two-slot contract, the "Use IPA notation, **not** the language's native romanization" rule, the inline-tone-diacritic rule, and the empty-IPA `''` allowance) and `docs/words/LANG_CODES.md` (the 1 000-code → family table I use to decide what writing system and what phonological inventory each row is *supposed* to reflect). My method is to read a whole language *row* across all 20 `words/*.js` files at once: a transcription convention that the same code obeys in 18 cells but breaks in two is an internal-consistency defect I can prove from the data itself, with the conforming siblings as evidence — no external citation needed, though I lean on the standard descriptive references for sanity checks (Holton & Tournadre's Tibetan/Tibetic phonology work and the **THL Simplified Phonetic Transcription** for Sherpa `xsr`; **Cain & Gair (2000), _Dhivehi (Maldivian)_** for `dv`; **Chacon / Mithun (1999) _The Languages of Native North America_** for the Iroquoian set `cay`/`onn`; **Jenny (2005) _The Verb System of Mon_** for `mnw`; **Arvaniti (2007) "Greek Phonetics"** for `el`; **Jones & Ward (1969) _The Phonetics of Russian_** for `ru`). Every "Current" value below was copied verbatim from the cited line after a fresh grep, and I confirmed each issue is still live (not already closed by reviews #01–#70 — in particular I checked that the Sino-Min duplicate-key defect closed in #70 is *not* what I am re-raising). No data file was modified.

---

## Issues found

### 1. `xsr` — hello — romanization sitting in the IPA slot (the row is otherwise true IPA)
- **File:** `words/hello.js` line 701
- **Current:** `["ཏ་ཤེས་ཏེ་ལེ", "tashi dele"]`
- **Expected:** `["ཏ་ཤེས་ཏེ་ལེ", "ʈʰaɕi tɕʰele"]` (or similar IPA; at minimum no `sh` digraph and no inter-word space carried as a single citation form)
- **Why:** CONTRIBUTING.md §"IPA conventions" states explicitly: "Use IPA notation, **not** the language's native romanization." `tashi dele` is plain THL/Wylie romanization (the digraph `sh` is not an IPA symbol, and the two-word string with a space is a transliteration of the greeting "tashi delek"). This is doubly indefensible because **every other Sherpa cell is already proper IPA**: `water.js` L708 `["ཆུ","tɕʰu"]`, `thanks.js` L710 `["ཐུགས་རྗེ་ཆེ","tʰuktɕetɕʰe"]`, `dog.js` L710 `["ཁྱི","kʰi"]`, `heart.js` L710 `["སྙིང","ɲiŋ"]`. The `hello` cell is the lone romanization leak in an otherwise IPA-clean row.

---

### 2. `xsr` — love — `ch` digraph in the IPA slot instead of the affricate the row uses elsewhere
- **File:** `words/love.js` line 717
- **Current:** `["བློ་ཆོ", "locho"]`
- **Expected:** `["བློ་ཆོ", "lotɕʰo"]`
- **Why:** Same rule as #1 (no romanization in the IPA slot). Tibetan ཆ is the aspirated alveolo-palatal affricate /tɕʰ/, which this very dataset writes correctly as `tɕʰ` in the Sherpa cells `water` (`tɕʰu`) and `thanks` (`…tɕʰe`). Writing it as the orthographic digraph `ch` here is an internal inconsistency, not a transcription choice.

---

### 3. `dv` — heart — `th` digraph where the same language writes aspirated /tʰ/ as `tʰ`
- **File:** `words/heart.js` line 217
- **Current:** `["ހިތް", "hith"]`
- **Expected:** `["ހިތް", "hitʰ"]`
- **Why:** Dhivehi (`dv`, Indo-Aryan per LANG_CODES.md) is transcribed in proper IPA throughout this dataset, and it consistently renders aspiration with the superscript ʰ: `hand.js` L217 `["އަތް","atʰ"]` and `dog.js` L217 `["ކުއްތާ","kuttʰaː"]`. The `heart` cell instead uses the Latin digraph `th`, which in IPA would read as /t/+/h/, not the aspirate. Given `hand` (އަތް → `atʰ`) is a direct structural parallel (word-final ތ), the correct form is `hitʰ`; `hith` is a romanization leak (CONTRIBUTING.md §"IPA conventions").

---

### 4. `cay` — eat — `kh` left untranslated while the rest of the Cayuga row is fully IPA-ized
- **File:** `words/eat.js` line 468
- **Current:** `["gekho", "ɡekho"]`
- **Why:** The Cayuga (`cay`) IPA slots throughout this dataset systematically *convert* the practical orthography to IPA — `g`→`ɡ`, `sh`→`ʃ`, `ǫ`→`õ`, `ʼ`→`ʔ`, vowel `:`→`ː` (e.g. `dog.js` L477 `["shǫkáos","ʃõkaos"]`, `house.js` L484 `["ganǫhsoot","ɡanõhsoːt"]`, `cat.js` L477 `["ditshokwáʔ","ditʃokwaʔ"]`). In the `eat` cell only `g`→`ɡ` was applied; the orthographic cluster `kh` (an aspirated /kʰ/ in the Lake-Iroquoian transcription tradition; Mithun 1999) was carried verbatim into the IPA. The IPA slot should not contain the orthographic digraph — minimally `ɡekʰo` — to match the file's own treatment of every other Cayuga form.

---

### 5. `onn` — eat — `kh` digraph carried into the IPA slot
- **File:** `words/eat.js` line 469
- **Current:** `["ekho:ne'", "ekhoːneʔ"]`
- **Why:** Onondaga (`onn`) is IPA-ized everywhere else in the dataset — `'`→`ʔ`, `:`→`ː`, `ǫ`→`õ`, `ny`→`nj` (e.g. `dog.js` L478 `["só:wa:s","soːwaːs"]`, `thanks.js` L478 `["nya:wę'","njaːwɛ̃ʔ"]`). The `eat` cell converted `'`→`ʔ` and `:`→`ː` but left the romanization `kh` intact. Per CONTRIBUTING.md the IPA slot must not hold the native romanization; this should be the aspirate /kʰ/ (`ekʰoːneʔ`), consistent with the rest of the row.

---

### 6. `onn` — eye — `th` digraph carried into the IPA slot
- **File:** `words/eye.js` line 478
- **Current:** `["oga:tha'", "oɡaːthaʔ"]`
- **Why:** Same defect as #5 in a different cell: the conversions `g`→`ɡ`, `:`→`ː`, `'`→`ʔ` were applied, but the orthographic `th` (aspirated /tʰ/) was left as a Latin digraph in the IPA. Expected `oɡaːtʰaʔ`. Listed separately because it is a distinct file/line, but it is the same systematic Onondaga romanization leak (CONTRIBUTING.md §"IPA conventions").

---

### 7. `mnw` — good — `kh` digraph for /kʰ/ in an otherwise IPA-clean Mon row
- **File:** `words/good.js` line 1070
- **Current:** `["ခိုဟ်", "khɔh"]`
- **Expected:** `["ခိုဟ်", "kʰɔh"]`
- **Why:** Mon (`mnw`, Austroasiatic) is transcribed with genuine IPA across the dataset, including symbols that are clearly *not* romanization — `ɓ`, `ɗ`, `ʔ`, `ŋ`, schwa `ə` (e.g. `water.js` L1074 `["ဍာ်","ɗaʔ"]`, `cat.js` L1070 `["ဗ္ဍိုၚ်","ɓɔŋ"]`, `fire.js` L1082 `["ပၟတ်","pəmoʔ"]`). The initial of ခိုဟ် is the aspirated velar ခ /kʰ/; rendering it as the Latin digraph `kh` (rather than `kʰ`) is the one romanization residue in the Mon row and violates the "IPA, not romanization" rule.

---

### 8. `el` — thanks — stress mark omitted although the row marks stress everywhere and the orthography pins it
- **File:** `words/thanks.js` line 159
- **Current:** `["ευχαριστώ", "efxaɾisto"]`
- **Expected:** `["ευχαριστώ", "efxaɾiˈsto"]`
- **Why:** Modern Greek (`el`) lexical stress is phonemic and is marked with `ˈ` consistently across this dataset: `father.js` L159 `paˈteɾas`, `water.js` L159 `neˈɾo`, `dog.js` L159 `ˈskilos`, etc. (Arvaniti 2007). The `thanks` cell omits the stress mark entirely, even though the Greek orthography places the acute accent on the *final* syllable (ευχαριστ**ώ** — oxytone): the word is /efxariˈsto/. Dropping the mark both breaks the file's own convention and contradicts the visible orthographic accent.

---

### 9. `el` — eat — stress mark omitted (τρώω is /ˈtro.o/)
- **File:** `words/eat.js` line 159
- **Current:** `["τρώω", "tɾoo"]`
- **Expected:** `["τρώω", "ˈtɾo.o"]`
- **Why:** Same convention as #8. τρ**ώ**ω carries the orthographic accent on the first ω → /ˈtro.o/, a stressed-initial disyllable with vowel hiatus. The IPA `tɾoo` marks neither the stress (which the rest of the `el` row marks, e.g. `ˈmati`, `ˈpino`, `ˈena`) nor the hiatus boundary `.` between the two /o/ vowels, so it reads as one long vowel.

---

### 10. `el` — fire & tree — stress mark omitted in two more Greek cells
- **File:** `words/fire.js` line 159 and `words/tree.js` line 159
- **Current:** `fire` `["φωτιά", "fotʲa"]` ; `tree` `["δέντρο", "ðendɾo"]`
- **Expected:** `fire` `["φωτιά", "foˈtʲa"]` (oxytone, accent on ά) ; `tree` `["δέντρο", "ˈðendɾo"]` (accent on δέ)
- **Why:** The same missing-stress defect as #8–#9, in cells whose Greek orthography again pins the stress unambiguously: φωτι**ά** is oxytone /foˈtʝa/, δ**έ**ντρο is proparoxytone-region /ˈðendro/. Both omit the `ˈ` that the `el` row otherwise carries on every polysyllable. Grouped because they are the remaining two instances of the identical convention break (Arvaniti 2007).

---

### 11. `ru` — hand — final stress dropped on an oxytone the file marks elsewhere
- **File:** `words/hand.js` line 101
- **Current:** `["рука", "rʊka"]`
- **Expected:** `["рука", "rʊˈka"]`
- **Why:** Russian (`ru`) stress is phonemic and drives vowel reduction; this dataset marks it with `ˈ` and shows reduction in the *unstressed* syllable — e.g. `water.js` L101 `["вода","vɐˈda"]` and `moon.js` L101 `["луна","ɫʊˈna"]`, both end-stressed disyllables with a reduced first vowel and a marked final stress (Jones & Ward 1969). рука is the same prosodic shape (unstressed reduced /ʊ/ + stressed final /a/, /rʊˈka/), yet its IPA omits the `ˈ`. The reduction is already encoded (`ʊ`), so the missing stress mark is an internal inconsistency, not a different analysis.

---

### 12. `nan_xm` / `nan_zz` — water vs the other 16 concepts — surface-form parenthetical POJ now diverges across files
- **File:** `words/water.js` line 347 (POJ present) vs `words/fire.js` lines 346 & 360 (POJ-bearing copy shadowed)
- **Current:** `water.js` L347 `nan_xm: ['水 (chúi)', 'tsui˥˧']` (single key, romanisation retained) — but `fire.js` still holds **two** `nan_xm` declarations, L346 `['火 (hóe)', 'hue˥˧']` and L360 `['火', 'hue˥˧']`, so the *live* value is the L360 copy **without** the `(hóe)` gloss.
- **Expected:** one consistent surface-form policy for Hokkien across all 20 files — either every `nan_xm`/`nan_zz` surface carries the parenthetical Pe̍h-ōe-jī (as water/eat/hello now do after review #70's dedup) or none do.
- **Why:** Review #70 closed the duplicate-key *data-loss* defect only in water/eat/hello, and it did so by **keeping** the POJ-bearing declaration. The remaining 17 files were left with both declarations, where the second (plain, no-POJ) wins. The net effect is a new, observable surface-format inconsistency: the map now shows `水 (chúi)` for water but bare `火` for fire, `好` for good, `狗` for dog, etc. This is not the structural duplicate-key issue #70 already flagged (I am not re-raising that); it is the *surface-presentation* divergence that the partial fix produced. The mechanical block-dedup the #70 worker scheduled should standardise on the POJ-bearing form so the Hokkien surface convention is uniform.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
