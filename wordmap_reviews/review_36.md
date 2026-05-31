# Wordmap review #36 — Aramaic continuum specialist

## Reviewer self-introduction

Reviewer #36 works across the full Aramaic diachronic and dialectal continuum. Primary reference grammars consulted: Nöldeke (1904) *Compendious Syriac Grammar*; Sokoloff (2009) *A Syriac Lexicon* (based on Brockelmann's *Lexicon Syriacum*); Khan (2008) *The Neo-Aramaic Dialect of Barwar*; Heinrichs (1990) *Studies in Neo-Aramaic*; Drower–Macuch (1963) *A Mandaic Dictionary*; Stevenson (1924) *Grammar of Palestinian Jewish Aramaic*; Beyer (1986) *The Aramaic Language: Its Distribution and Subdivisions*. Specialties: begadkephat spirantization chronology, reconstruction of Imperial Aramaic vocalism, NENA phonological history, Mandaic script tradition.

Languages reviewed: `arc` (Imperial/Official Aramaic), `syc` (Classical Syriac), `aii` (Assyrian Neo-Aramaic). Note: no data was found for `cld`, `tru`, `mid`, `jpa`, `cpa`, `jba`, `sam`, `trw`, `hrt`, `aij` — if these are planned varieties, they are absent from the current dataset.

---

## Issues

### Issue 1 — `arc` water: geminate yod missing in IPA
**File:** `words/water.js:532`
**Entry:** `arc: ["ܡܝܐ", "majaː"]`
**Problem:** The standard reconstruction of Imperial Aramaic "water" is */mayyāʾ/ with a geminate consonant (yod doubled). The IPA `majaː` transcribes a single /j/, giving a form that does not match the attested phonology. Classical Syriac (same script, same word) correctly shows `majjaː` in this dataset. Imperial Aramaic should also have `majjaː`.
**Fix:** `"majaː"` → `"majjaː"`

---

### Issue 2 — `arc` script: Syriac Unicode block used instead of square Aramaic (Hebrew block)
**Files:** all `arc` entries across all 20 word files
**Problem:** Every `arc` (ISO 639-3: Official Aramaic, 700–300 BCE) entry uses characters from the Syriac Unicode block (U+0700–U+074F, e.g. ܫ U+072B, ܬ U+072C). Imperial Aramaic inscriptions and scholarly editions use the square Aramaic script, encoded in the Hebrew Unicode block (U+0590–U+05FF, e.g. שׁ, מ, א). The Syriac block encodes the cursive script tradition descending from Edessa (1st–3rd century CE onwards), which postdates Imperial Aramaic by six or more centuries. Using ܡܝܐ instead of מַיָּא conflates two distinct writing systems.
**Fix:** Re-encode all `arc` display strings in square/Hebrew-block characters (e.g. ܡܝܐ → מַיָּא, ܫܡܫܐ → שַׁמְשָׁא, etc.).

---

### Issue 3 — `arc` eat: missing initial glottal stop in IPA
**File:** `words/eat.js:525`
**Entry:** `arc: ["ܐܟܠ", "aːχel"]`
**Problem:** The initial character ܐ (aleph) represents a glottal stop /ʔ/ in Aramaic. The IPA `aːχel` silently drops this consonant. The Imperial Aramaic verbal noun/infinitive is /ʔākal/ or the spirantized /ʔāχal/ (k post-vocalic → χ). Dropping the ʔ yields a vowel-initial form that misrepresents Aramaic syllable structure.
**Fix:** `"aːχel"` → `"ʔaːχel"`

---

### Issue 4 — `arc` mother: missing initial glottal stop in IPA
**File:** `words/mother.js:531`
**Entry:** `arc: ["ܐܡܐ", "emːaː"]`
**Problem:** Same aleph-drop error as Issue 3. The word ܐܡܐ /ʔemmāʾ/ begins with a glottal stop. The IPA `emːaː` omits ʔ entirely.
**Fix:** `"emːaː"` → `"ʔemmaː"` (also see Issue 5 on notation)

---

### Issue 5 — `arc` mother/heart/love: inconsistent gemination notation
**Files:** `words/mother.js:531`, `words/heart.js:525`, `words/love.js:532`
**Entries:**
- `arc mother: "emːaː"` — uses IPA length diacritic ː on the *preceding vowel* to signal gemination
- `arc heart: "lebːaː"` — same convention (ː after b)
- `arc love: "ħubːaː"` — same convention
- `syc mother: "emmaː"`, `syc heart: "lebbaː"`, `syc love: "ħuːbbaː"` — use consonant doubling

The two conventions are mixed across the same word pairs (`arc` vs `syc`). IPA gemination is standardly notated by doubling the consonant symbol (mm, bb, pp). The ː diacritic means *vowel length*, not consonant gemination. Using `lebːaː` is ambiguous and non-standard.
**Fix:** Replace ː-after-consonant notation with doubled consonant: `emːaː` → `ʔemmaː`, `lebːaː` → `lebbaː`, `ħubːaː` → `ħubbaː`.

---

### Issue 6 — `arc` tree: missing initial glottal stop in IPA
**File:** `words/tree.js:525`
**Entry:** `arc: ["ܐܝܠܢܐ", "iːlaːnaː"]`
**Problem:** ܐܝܠܢܐ begins with aleph = /ʔ/. Classical Syriac (same word, same script) correctly renders this as `"ʔiːlaːnaː"`. The `arc` IPA drops the ʔ without explanation.
**Fix:** `"iːlaːnaː"` → `"ʔiːlaːnaː"`

---

### Issue 7 — `arc` hand: missing initial glottal stop in IPA
**File:** `words/hand.js:525`
**Entry:** `arc: ["ܐܝܕܐ", "iːðaː"]`
**Problem:** ܐܝܕܐ begins with aleph = /ʔ/. The Classical Syriac entry correctly starts `"ʔiːdaː"`. The `arc` IPA has `iːðaː` without the initial glottal.
**Fix:** `"iːðaː"` → `"ʔiːðaː"`

---

### Issue 8 — `arc` sun: wrong vowel quality in first syllable
**File:** `words/sun.js:531`
**Entry:** `arc: ["ܫܡܫܐ", "ʃemʃaː"]`
**Problem:** The IPA `ʃemʃaː` uses /e/ in the first syllable. Imperial Aramaic "sun" is reconstructed as */šamšāʾ/ with /a/ (cf. Akkadian *šamšu*, Biblical Aramaic שִׁמְשָׁא, Standard Literary Aramaic). The /e/ vowel in ܫܡܫܐ is a specifically *Eastern Syriac* reading tradition (Madnhāyā liturgical vocalization). It is anachronistic to project Eastern Syriac vowel quality back to seventh–fourth century BCE Imperial Aramaic. Classical Syriac entry (correctly labelled `syc`) may retain `ʃemʃaː`. The `arc` entry needs the earlier vowel.
**Fix:** `"ʃemʃaː"` → `"ʃamʃaː"` for `arc`

---

### Issue 9 — `syc` hand: begadkephat spirantization absent (d after vowel)
**File:** `words/hand.js:906`
**Entry:** `syc: ["ܐܝܕܐ", "ʔiːdaː"]`
**Problem:** In Classical Syriac (Nöldeke §26–§27) the letter dālaṯ/ܕ spirantizes to /ð/ when it follows a vowel. In ʔīd-ā, the dālaṯ stands after the long /iː/, so it must be /ð/. The correct IPA is `ʔiːðaː`. Note the irony: the `arc` entry for the same word correctly shows `"iːðaː"` with /ð/, while the Classical Syriac entry — for a language where the spirantization rule is definitionally part of the grammar — shows non-spirantized /d/.
**Fix:** `"ʔiːdaː"` → `"ʔiːðaː"`

---

### Issue 10 — `syc` one: begadkephat spirantization absent (d after vowel)
**File:** `words/one.js:912`
**Entry:** `syc: ["ܚܕ", "ħad"]`
**Problem:** In ḥad, the dālaṯ follows the short /a/ vowel and should spirantize to /ð/. The correct Classical Syriac form is /ħað/ (cf. Nöldeke §27). Again the `arc` entry for the same word correctly has `"ħað"`, making the inconsistency particularly visible.
**Fix:** `"ħad"` → `"ħað"`

---

### Issue 11 — `syc` good: begadkephat spirantization absent (b after vowel)
**File:** `words/good.js:906`
**Entry:** `syc: ["ܛܒܐ", "tˤaːbaː"]`
**Problem:** The bēṯ in ṭāb-ā follows the long vowel /aː/ and must spirantize to /v/ or /β/. The `arc` entry for the same word correctly shows `"tˤaːβaː"`. The `syc` entry should also show the spirant. Classical Syriac had active begadkephat spirantization at least as rigorously as Imperial Aramaic.
**Fix:** `"tˤaːbaː"` → `"tˤaːvaː"` (or `"tˤaːβaː"` to match `arc` notation)

---

### Issue 12 — `syc` house: begadkephat spirantization absent (t after diphthong)
**File:** `words/house.js:913`
**Entry:** `syc: ["ܒܝܬܐ", "bajtaː"]`
**Problem:** The tāw in bēṯ-ā follows the diphthong /aj/, which counts as post-vocalic for spirantization purposes (Nöldeke §26). The expected form is /bajθaː/. The `aii` entry for the same word shows `"beθa"` with the spirantized /θ/ — so the Neo-Aramaic daughter language correctly reflects the spirant while its Classical ancestor does not.
**Fix:** `"bajtaː"` → `"bajθaː"`

---

### Issue 13 — `syc` mother: missing initial glottal stop
**File:** `words/mother.js:912`
**Entry:** `syc: ["ܐܡܐ", "emmaː"]`
**Problem:** ܐܡܐ begins with ālap̄ = /ʔ/. The IPA `emmaː` silently drops the initial glottal stop. The word is /ʔemmāʾ/ (Sokoloff s.v. ܐܡܐ). Compare the reviewer brief's own citation: *ʔemmā /ʔemːaː/* — the initial ʔ is required.
**Fix:** `"emmaː"` → `"ʔemmaː"`

---

### Issue 14 — `syc` love: spurious long vowel ū
**File:** `words/love.js:913`
**Entry:** `syc: ["ܚܘܒܐ", "ħuːbbaː"]`
**Problem:** The wāw in ܚܘܒܐ is a *mater lectionis* marking a short /u/ vowel, not a phonemically long /uː/. The word is /ħubbāʾ/ (< *ħubb + āʾ) with a short /u/ followed by geminate /bb/. The IPA `ħuːbbaː` wrongly lengthens the vowel. Compare `arc` entry `"ħubːaː"` which, despite its notation issues (see Issue 5), at least does not add a long vowel.
**Fix:** `"ħuːbbaː"` → `"ħubbaː"`

---

### Issue 15 — `syc` cat: long ū spurious and geminate nn missing
**File:** `words/cat.js:906`
**Entry:** `syc: ["ܫܘܢܪܐ", "ʃuːnaːraː"]`
**Problem:** ܫܘܢܪܐ /šunnārāʾ/ has (a) a short /u/ (same mater lectionis issue as Issue 14) and (b) a geminate /nn/ visible in the Syriac orthography. The IPA `ʃuːnaːraː` gives a long /uː/ and a single /n/. The correct form is /ʃunnaːraː/.
**Fix:** `"ʃuːnaːraː"` → `"ʃunnaːraː"`

---

### Issue 16 — `arc` cat: same long-ū and missing-nn error as `syc`
**File:** `words/cat.js:525`
**Entry:** `arc: ["ܫܘܢܪܐ", "ʃuːnaːraː"]`
**Problem:** Identical error to Issue 15. The `arc` and `syc` entries share the same IPA string for this loanword, and both are wrong in the same way.
**Fix:** `"ʃuːnaːraː"` → `"ʃunnaːraː"`

---

### Issue 17 — `syc` drink: conjugated verb form used instead of citation/infinitive
**File:** `words/drink.js:906`
**Entry:** `syc: ["ܐܫܬܝ", "ʔeʃtiː"]`
**Problem:** ܐܫܬܝ is the *first-person singular perfect* of the Gt stem of ܫܬܐ — meaning "I drank," not the infinitive or verbal noun "drink." Every other `syc` entry (eat, hand, eye, fire, etc.) uses a noun or infinitive as citation form. The `arc` entry for this slot correctly gives the infinitive ܫܬܐ /ʃtāʾ/. Using an inflected personal conjugation as a citation form is inconsistent and linguistically misleading.
**Fix:** Replace ܐܫܬܝ `"ʔeʃtiː"` with the infinitive ܫܬܐ `"ʃeθaː"` (or `"ʃtaː"` matching `arc`), noting the Gt spirantization: t after vowel → θ.

---

### Issue 18 — `syc` thanks: ܫܘܒܚܐ means "glory/praise," not "thank you"
**File:** `words/thanks.js:906`
**Entry:** `syc: ["ܫܘܒܚܐ", "ʃubħaː"]`
**Problem:** ܫܘܒܚܐ /šubḥāʾ/ is the noun meaning "glory, praise" (cf. Sokoloff s.v. ܫܘܒܚܐ), used in doxological contexts. It is not the standard Classical Syriac expression for gratitude. The appropriate form for "thanks, acknowledgment" is ܬܘܕܝܬܐ /tawdīθāʾ/ or the verb ܗܘܕܝ /hawdī/ ("he gave thanks"). Substituting a liturgical praise-word for an everyday courtesy is a semantic error.
**Fix:** Replace with ܬܘܕܝܬܐ `"tawdiːθaː"` or ܬܘܕܝ `"tawdiː"` (matching `arc` form).

---

### Issue 19 — `aii` thanks: ܒܣܝܡܐ "sweet/pleasant" is indirect/informal and poorly chosen
**File:** `words/thanks.js:527`
**Entry:** `aii: ["ܒܣܝܡܐ", "basima"]`
**Problem:** ܒܣܝܡܐ /basīmā/ literally means "sweet, tasty, pleasant." While it can be used colloquially in some NENA communities as a compliment, it is not the standard citation form for "thank you" in Assyrian Neo-Aramaic. The conventional form is ܬܘܕܝ /tawdi/ or ܬܘܕܝ ܐܝܠܟ /tawdi ʔilux/. Listing an adjective meaning "pleasant" as the lemma for a courtesy expression conflates a colloquial idiom with a lexical citation.
**Fix:** Replace with ܬܘܕܝ `"tawdi"`.

---

### Issue 20 — `aii` one: classical script ܚܕ does not match NENA IPA /xa/
**File:** `words/one.js:533`
**Entry:** `aii: ["ܚܕ", "xa"]`
**Problem:** The IPA `xa` correctly reflects the Modern Assyrian NENA form (ħ → x and final /d/ dropped are both regular NENA developments). However, the display string ܚܕ is the Classical Syriac/Literary Aramaic spelling, which would be read /ħað/ by a literate Syriac reader. NENA "one" is conventionally spelled ܚܐ or ܟܐ in modern Assyrian orthography. Pairing the classical spelling with the modern pronunciation creates a misleading form–IPA mismatch for this language.
**Fix:** Either update the script to modern NENA orthography ܚܐ or add a note; at minimum the IPA `xa` is correct and should be retained.

---

### Issue 21 — `aii` drink: ʃtaja is a poorly attested NENA form
**File:** `words/drink.js:527`
**Entry:** `aii: ["ܫܬܐ", "ʃtaja"]`
**Problem:** The classical script ܫܬܐ is given again for Modern Assyrian, but the IPA `ʃtaja` is an unexpected three-syllable form. Standard NENA "drink" (verb stem/citation) in Urmian Assyrian is /šāṯa/ (infinitive) or the verbal noun /šṯāya/ /ʃθaːja/ (with interdental θ, not plain t). If the intended form is /šṯāya/ "drinking," the IPA should show the spirantized tāw: `ʃθaːja`. If it is the verbal stem, `ʃtaː` would match `arc`. The current `ʃtaja` matches neither pattern.
**Fix:** If citing the verbal noun: `"ʃtaja"` → `"ʃθaːja"`; if citing the infinitive: `"ʃtaja"` → `"ʃaːθa"`.

---

### Issue 22 — `arc` drink: cluster-initial form lacks expected anaptyctic/epenthetic vowel
**File:** `words/drink.js:525`
**Entry:** `arc: ["ܫܬܐ", "ʃtaː"]`
**Problem:** Imperial Aramaic phonotactics generally do not permit word-initial consonant clusters. The form ܫܬܐ in the infinitive/verbal noun register would carry a short vowel between šin and tāw: /šetāʾ/ or /šatāʾ/. Transcribing it as `ʃtaː` (zero vowel) reflects a cluster that is phonotactically unmarked in Classical Syriac but questionable for the Imperial period. The better reconstruction for `arc` is /ʃeθaː/ (with spirantized tāw post-vowel).
**Fix:** `"ʃtaː"` → `"ʃeθaː"` (or at minimum `"ʃetaː"`)

---

### Issue 23 — `arc` eat / `syc` eat: inconsistent IPA for identical script ܐܟܠ
**File:** `words/eat.js:525` and `:906`
**Entries:**
- `arc: ["ܐܟܠ", "aːχel"]`
- `syc: ["ܐܟܠ", "ʔeχal"]`
**Problem:** The same script string ܐܟܠ produces two different IPA strings: `aːχel` (arc) vs `ʔeχal` (syc). The differences are (a) arc omits ʔ (see Issue 3), (b) the vowel quality differs (aː vs e), and (c) the vowel position differs (first syllable long vs short). Both should be the same canonical form transcribed consistently; in practice the syc form /ʔeχal/ (short e, initial ʔ) is closer to the Classical Syriac reading, but even that vowel needs cross-checking against Eastern vs Western vocalization conventions.
**Fix:** Harmonize: correct the `arc` form to `"ʔaːχal"` (Imperial Aramaic) and verify `syc` form follows Eastern Syriac vowel convention consistently.

---

### Issue 24 — `aii` father: IPA /baba/ likely should be /baːba/ (short vs long vowel)
**File:** `words/father.js:527`
**Entry:** `aii: ["ܒܒܐ", "baba"]`
**Problem:** In Modern Assyrian NENA, the word for "father" is typically /bāba/ with a long first vowel (< /ʔabbā/ with the initial aleph dropped and geminate /bb/ simplified with compensatory lengthening). The IPA `baba` with two short /a/ vowels does not reflect this compensatory length. Compare parallel NENA developments in other dialects where the loss of the geminate /bb/ yields /bāba/.
**Fix:** `"baba"` → `"baːba"`

---

## Summary

24 issues identified across the three attested Aramaic varieties (`arc`, `syc`, `aii`). The most systematic problems are:

1. **Begadkephat spirantization consistently missing in `syc`** for post-vocalic dālaṯ, tāw, and bēṯ (Issues 9–12), even though the `arc` entries sometimes correctly show the spirant. Classical Syriac is the *canonical* locus of this rule (Nöldeke §26–27) and it must apply throughout.

2. **Glottal stop (ʔ) systematically dropped from aleph-initial `arc` entries** (Issues 3–4, 6–7), while `syc` entries mostly preserve it. Imperial Aramaic had the same consonantal aleph.

3. **Syriac Unicode block misused for `arc`** (Issue 2): Imperial Aramaic should display in square Aramaic / Hebrew-block characters.

4. **Wrong citation forms**: `syc` drink is an inflected verb (Issue 17); `syc` thanks is a liturgical praise-word (Issue 18); `aii` thanks is an adjective (Issue 19).

5. **Gemination and vowel length notation inconsistencies** across `arc`/`syc` pairs for the same etymon (Issues 5, 14–16).
