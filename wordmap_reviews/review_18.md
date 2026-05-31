# Wordmap review #18 — Polynesian / Oceanic / Australian / Papuan specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I specialize in the Oceanic branch of Austronesian, Australian Aboriginal languages, and Papuan linguistics. My documentary and analytical work spans the full spread of Polynesian (Nuclear Polynesian phonology and morphosyntax, Proto-Polynesian reconstruction), Melanesian (Fijian, Rotuman, and the Vanuatu/Solomons creoles), Micronesian (Marshallese, Pohnpeian, Yapese, Palauan), and Australian Aboriginal languages (Pama-Nyungan phonological typology, Tiwi, Warlpiri, the Western Desert languages). Primary reference sources for this review: Lynch, Ross & Crowley (2002) *The Oceanic Languages*; Marck (2000) *Topics in Polynesian Language and Culture History*; Pukui & Elbert (1986) *Hawaiian Dictionary* (revised ed.); Churchward (1940) *Rotuman Grammar and Dictionary*; Biggs (1990) *Complete English–Maori Dictionary*; Dixon (2002) *Australian Languages: Their Nature and Development*; Foley (1986) *The Papuan Languages of New Guinea*; Capell (1962) *A Linguistic Survey of the South-Western Pacific*; Rehg (1981) *Ponapean Reference Grammar*.

---

## Issues found

### 1. `fj` — hand — Fijian ⟨g⟩ = /ŋ/, not /ɡ/
- **File:** `words/hand.js` line 202
- **Current:** `["liga", "liɡa"]`
- **Expected:** `["liga", "liŋa"]`
- **Why:** In Fijian orthography the letter ⟨g⟩ represents the velar nasal /ŋ/, not the voiced velar stop /ɡ/. This is a core typological feature of the Fijian writing system (Lynch, Ross & Crowley, ch. 3): ⟨b⟩ = /mb/, ⟨d⟩ = /nd/, ⟨g⟩ = /ŋ/, ⟨q⟩ = /ŋg/, ⟨c⟩ = /ð/. Consequently *liga* is pronounced [liŋa], not [liɡa]. The same file correctly transcribes Fijian *siga* (sun) as [siŋa], confirming that the IPA for *liga* is wrong.

---

### 2. `fj` — drink — Fijian ⟨g⟩ = /ŋ/ (same systematic error)
- **File:** `words/drink.js` line 202
- **Current:** `["gunu", "ɡunu"]`
- **Expected:** `["gunu", "ŋunu"]`
- **Why:** Fijian *gunu* (drink) has word-initial ⟨g⟩, which by the same Fijian orthographic convention equals /ŋ/. The IPA [ɡunu] uses the wrong symbol. The correct transcription is [ŋunu]. This is a second instance of the same systematic misreading of Fijian ⟨g⟩ as /ɡ/ rather than /ŋ/. (Compare sun.js `fj: ["siga", "siŋa"]`, which is correct.)

---

### 3. `fj` — fire — spurious vowel length on *buka*
- **File:** `words/fire.js` line 208
- **Current:** `["buka", "mbukaː"]`
- **Expected:** `["buka", "mbuka"]`
- **Why:** Fijian does not have phonemic vowel length; all vowels are short (Lynch, Ross & Crowley §2.3). The prenasalized IPA [mb] for ⟨b⟩ is correct, but the trailing length marker [ː] on the final vowel is spurious. The word is /mbuka/ [mbuka].

---

### 4. `kky` — cat — ⟨th⟩ = dental stop [t̪], not fricative [θ]
- **File:** `words/cat.js` line 854
- **Current:** `["buthigan", "buθiɡan"]`
- **Expected:** `["buthigan", "but̪iɡan"]`
- **Why:** In Kuku-Yalanji (and Australian Aboriginal orthographies generally following the AIATSIS conventions), the digraph ⟨th⟩ represents a *laminal dental stop* [t̪], not the interdental fricative [θ] of English (Dixon 2002, §2.1). No Australian Aboriginal language has [θ] as a phoneme. Using θ (the IPA symbol for the English *th* in *thin*) is a systematic error importing English phonology into an Australian transcription.

---

### 5. `kky` — moon — same ⟨th⟩ = [t̪] error
- **File:** `words/moon.js` line 860
- **Current:** `["giitha", "ɡiːθa"]`
- **Expected:** `["giitha", "ɡiːt̪a"]`
- **Why:** The doubled ⟨ii⟩ correctly yields the long vowel [iː], but the final ⟨th⟩ again uses [θ] instead of the laminal dental stop [t̪]. This is the same systematic conflation of English ⟨th⟩ = [θ] with the Australian dental stop digraph.

---

### 6. `kky` — fire — same word as `kky` tree (likely data error)
- **File:** `words/fire.js` line 860 and `words/tree.js` line 854
- **Current (both):** `["yugu", "juɡu"]`
- **Why:** In Kuku-Yalanji, *yugu* means *tree / wood / stick*. The glossing of *yugu* as both "tree" and "fire" is suspicious; the meaning extension from "wood" to "fire" exists in some Australian languages but is not attested for Kuku-Yalanji in the literature (Hershberger & Hershberger 1982 *Kuku-Yalanji Dictionary*). The fire entry warrants verification against a primary Kuku-Yalanji source — it may be a copy-paste artefact from the tree entry.

---

### 7. `pjt` / `piu` — cat — *ngaya* = "I/me" (first-person pronoun), not "cat"
- **File:** `words/cat.js` lines 688, 690
- **Current:** `["ngaya", "ŋaja"]` (both pjt and piu)
- **Why:** In Pitjantjatjara and Pintupi-Luritja (and broadly across Western Desert languages), *ngaya* is the unambiguous first-person singular free pronoun "I / me" (Goddard 1985 *A Grammar of Yankunytjatjara* §7.2; Hansen & Hansen 1992 *Pintupi/Luritja Dictionary*). Entering a pronoun as the word for "cat" is a clear data error. The Pitjantjatjara word for cat (loanword) is typically *pusi* (from English *pussycat*) or a descriptive phrase.

---

### 8. `tiw` — cat — English compound used as display form
- **File:** `words/cat.js` line 850
- **Current:** `["pussycat", "pusikat"]`
- **Why:** The display string "pussycat" is a two-word English compound. While Tiwi speakers do use the English loanword, the display form should reflect the Tiwi adaptation of the borrowing, not the raw English source. The IPA correctly shows the Tiwi phonology [pusikat], so the underlying form is the Tiwi loanword; the display string should match the Tiwi spelling (e.g. *pussikat* or *pusikat* per Osborne 1974).

---

### 9. `tiw` — sun — ⟨rl⟩ = retroflex lateral [ɭ], not [rl]
- **File:** `words/sun.js` line 856
- **Current:** `["pumarli", "pumarli"]`
- **Expected:** `["pumarli", "pumaɭi"]`
- **Why:** In Tiwi orthography the digraph ⟨rl⟩ represents the retroflex lateral [ɭ] (Osborne 1974 *The Tiwi Language* §2.4). The current IPA copies the orthography verbatim and fails to resolve the digraph to its phonemic value. [pumaɭi] is the correct transcription.

---

### 10. `tiw` — dog — same ⟨rl⟩ = [ɭ] error
- **File:** `words/dog.js` line 850
- **Current:** `["marlapwawa", "marlapʷawa"]`
- **Expected:** `["marlapwawa", "maɭapʷawa"]`
- **Why:** The sequence ⟨rl⟩ in *marlapwawa* is again the retroflex lateral digraph [ɭ]. The IPA [marlapʷawa] leaves ⟨rl⟩ unresolved, treating them as separate /r/ + /l/. The correct transcription is [maɭapʷawa].

---

### 11. `ty` / `rap` / `wls` — multiple entries — ASCII apostrophe used instead of ʻ (U+02BB okina)
- **Files:** multiple (eat, dog, hello, good, one, tree, sun, love, mother — ty; hello, mother, sun, father — rap; love, mother, tree, sun — wls)
- **Example (ty eat):** `["'amu", "ʔamu"]` → should be `["ʻamu", "ʔamu"]`
- **Example (rap hello):** `["'iorana", "ʔioɾana"]` → should be `["ʻiorana", "ʔioɾana"]`
- **Example (wls love):** `["\'ofa", "ˈʔofa"]` → should be `["ʻofa", "ˈʔofa"]`
- **Why:** The correct Unicode character for the Polynesian glottal-stop marker is ʻ (LEFT SINGLE QUOTATION MARK MODIFIER / okina, U+02BB). Hawaiian (haw), Samoan (sm), and Tongan (to) entries throughout the dataset consistently use ʻ (U+02BB). Tahitian (ty), Rapanui (rap), and Wallisian (wls) entries inconsistently use the plain ASCII apostrophe U+0027 instead. This is a display inconsistency across three related languages that all use the same orthographic convention. The IPA column correctly uses ʔ in all cases, confirming that a glottal stop is intended; the display column alone is wrong.

---

### 12. `wls` — sun — missing vowel length on second vowel; cf. cognate Tongan *laʻā*
- **File:** `words/sun.js` line 380
- **Current:** `["la\'a", "ˈlaʔa"]`
- **Expected:** `["laʻā", "ˈlaʔaː"]`
- **Why:** The Wallisian word for sun is a cognate of Tongan *laʻā* (both from Proto-Polynesian *\*laʔā*). Tongan retains the long vowel on the second syllable (marked with macron ā, IPA [aː]); Wallisian ʻUvean has the same long vowel (Rensch 1984 *Grammar of Wallisian*). The current Wallisian entry uses a short [a] in the IPA and no macron in the display, while the parallel Tongan entry correctly shows [laʔaː]. In addition to the vowel-length issue, this entry uses ASCII apostrophe (see issue #11).

---

### 13. `mh` — water — Marshallese macron ā not reflected as [aː] in IPA
- **File:** `words/water.js` line 689
- **Current:** `["dān", "tʲan"]`
- **Expected:** `["dān", "tʲaːn"]`
- **Why:** In Marshallese, the macron on ā marks the *a*-class back/long vowel, which is phonetically [aː] (Bender 1969 *Spoken Marshallese* §2.2). Other Marshallese entries in this dataset correctly reflect the macron as [aː] (e.g. `hand.js`: *pā* → [pˠaː]; `eat.js`: *ṃōñā* → [mˠəɲˠaː]). The *dān* entry inconsistently drops the vowel length, yielding [tʲan] instead of [tʲaːn].

---

### 14. `mh` — father — same ā → [aː] omission
- **File:** `words/father.js` line 682
- **Current:** `["jemān", "tʲemʲan"]`
- **Expected:** `["jemān", "tʲemʲaːn"]`
- **Why:** Marshallese *jemān* "father" ends in ā, which should be [aː] in IPA. The current transcription [tʲemʲan] uses short [a], inconsistent with the correct treatment of macron vowels elsewhere in the Marshallese data (see issue #13).

---

### 15. `kos` — dog — "kosro" is the island name, not the Kosraean word for dog
- **File:** `words/dog.js` line 841
- **Current:** `["kosro", "kosɾo"]`
- **Why:** *Kosro* (also spelled *Kosrae*) is the name of the island where Kosraean is spoken — it is not a Kosraean lexical item meaning "dog". This appears to be a data-entry error in which the language-name/island-name was accidentally pasted into the word slot. The Kosraean word for dog is *in* (Kosraean–English Dictionary, College of the Marshall Islands).

---

### 16. `kos` — fire — entry suspiciously short; expected "ef"
- **File:** `words/fire.js` line 847
- **Current:** `["e", "e"]`
- **Why:** The Kosraean word for fire is *ef* (attested in Lee 1975 *Kosraean Reference Grammar* and multiple word lists). The single-segment entry "e" appears to be a truncated or corrupted form. It is possible that the final consonant /f/ was dropped during data entry.

---

### 17. `pon` — hello — orthography copied verbatim as IPA
- **File:** `words/hello.js` line 840
- **Current:** `["kaselehlie", "kaselehlie"]`
- **Expected:** `["kaselehlie", "kasɛlɛhliɛ"]` (approx.)
- **Why:** The IPA field is identical to the display field; no phonemic transcription has been performed. Pohnpeian has a rich vowel system and phonologically significant consonants that need IPA representation. The ⟨e⟩ and ⟨ie⟩ sequences represent distinct vowel qualities ([ɛ] and [iɛ] respectively). At minimum, a stress mark and vowel quality symbols should be present (Rehg 1981 §2). Several other Pohnpeian entries (e.g. *mwenge*, *mwahu*, *ihmw*) show proper IPA; this entry is an outlier.

---

### 18. `wbp` — dog — IPA [dʒaɳʈu] has questionable retroflex stop after retroflex nasal
- **File:** `words/dog.js` line 689
- **Current:** `["jarntu", "dʒaɳʈu"]`
- **Expected:** `["jarntu", "dʒaɳtu"]`
- **Why:** In Warlpiri orthography, ⟨rn⟩ = retroflex nasal /ɳ/ (Nash 1986 *Warlpiri Morpho-Syntax* §1.2). The word *jarntu* thus parses as /dʒa.ɳ.tu/. Post-retroflex-nasal 't' in Warlpiri remains a plain alveolar stop [t] in standard analyses (Laughren et al. 2006 *Warlpiri–English Dictionary*); the IPA [ʈ] (retroflex stop) in the final position is not phonemically justified. The expected IPA is [dʒaɳtu].

---

### 19. `rtm` — father — non-standard orthographic notation used in display form
- **File:** `words/father.js` line 203
- **Current:** `["öäpö", "øæpø"]`
- **Why:** The display form ⟨öäpö⟩ employs the umlaut-diacritic notation from Churchward's (1940) phonetic description of Rotuman, which predates and differs from the modern practical orthography. Present-day Rotuman literacy materials and government documents use a different orthography (Robinson 2006 *Gagaj Fäeag Rotuma*). The display should represent the contemporary standard spelling rather than a 19th/20th-century phonetic transcription. The same issue applies to `mother.js` *ö'ö* [øʔø]: modern Rotuman orthography would use a different representation.

---

### 20. `mh` — hello / love — identical *yokwe* used for two distinct concepts
- **Files:** `words/hello.js` line 682 and `words/love.js` line 689
- **Current (both):** `["yokwe", "jokwe"]`
- **Note:** In Marshallese, *yokwe* functions primarily as a salutation meaning "love / hello / greetings" — the same word genuinely covers both senses (Abo et al. 1976 *Marshallese–English Dictionary*). This is not a data error per se, but it risks misleading users who expect different words for "hello" and "love". A parenthetical gloss "(lit. love)" on the hello entry, or a note that the Marshallese word for love is also the standard greeting, would improve legibility. This is flagged as a labeling concern rather than a hard error.

---

### 21. `pjt` — dog / father — *papa* and *mama* may be loanword nursery forms, not native lexical items
- **Files:** `words/dog.js` line 688 (`pjt: ["papa", "papa"]`) and `words/father.js` line 688 (`pjt: ["mama", "mama"]`)
- **Why:** In Pitjantjatjara, the native word for father is *mama* (also "father's father" in some dialectal usage), so `father.js` may be acceptable (Goddard 1985). However, *papa* for "dog" has no attestation in Pitjantjatjara lexicographic sources; the native term for dingo/dog is *inu* (Goddard 1985 §4). *papa* appears to be either an English-influenced nursery borrowing or a further data-entry confusion. The entry warrants verification against a primary Pitjantjatjara word list.

---

### 22. `meu` — hello / good — same word *namo* used for two concepts
- **Files:** `words/hello.js` line 839 and `words/good.js` line 839
- **Current (both):** `["namo", "namo"]`
- **Note:** In Motu (Hiri Motu), *namo* means "good / fine / okay" and is secondarily used as an informal greeting. Using it for both "hello" and "good" is linguistically defensible (similar to English "good" appearing in "good morning"), but again risks misleading users. A more specific greeting form such as *oi namo* (as already used in `thanks.js`) or *do-re* would better distinguish the hello slot from the adjective.
