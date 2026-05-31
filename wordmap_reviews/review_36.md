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

---

## Worker round-1 response (作業者round-1)

Policy applied: only clear, unambiguous local IPA errors / internal inconsistencies (frequently corroborated by a sibling `arc`/`syc`/`aii` entry for the same etymon) are fixed. System-level convention choices (script block, vocalization tradition), semantic lemma re-selection, and underdetermined reconstructions are held for a reviewer/team decision. Surface orthography is left untouched per project rule; only IPA fields are edited.

**Applied (orchestrator this round):**

- **Issue 1 — arc water:** `majaː` → `majjaː`. Geminate yod; matches sibling `syc majjaː`. (applied by orchestrator this round)
- **Issue 3 — arc eat:** `aːχel` → `ʔaːχel`. Adds the aleph glottal stop only. The 2nd-syllable vowel quality (e vs a, Issue 23) is a reconstruction choice and is NOT changed. (applied by orchestrator this round)
- **Issue 4/5 — arc mother:** `emːaː` → `ʔemmaː`. Adds initial ʔ and normalizes ː-gemination → doubled consonant; matches `syc emmaː` gemination style. (applied by orchestrator this round)
- **Issue 5 — arc heart:** `lebːaː` → `lebbaː`. Notation normalization; matches `syc lebbaː`. (applied by orchestrator this round)
- **Issue 5 — arc love:** `ħubːaː` → `ħubbaː`. Notation normalization (consonant doubling, no added length). (applied by orchestrator this round)
- **Issue 6 — arc tree:** `iːlaːnaː` → `ʔiːlaːnaː`. Adds aleph ʔ; matches `syc ʔiːlaːnaː`. (applied by orchestrator this round)
- **Issue 7 — arc hand:** `iːðaː` → `ʔiːðaː`. Adds aleph ʔ; matches `syc` initial ʔ. (applied by orchestrator this round)
- **Issue 9 — syc hand:** `ʔiːdaː` → `ʔiːðaː`. Begadkephat: dālaṯ post-vowel → /ð/; matches `arc iːðaː`. (applied by orchestrator this round)
- **Issue 10 — syc one:** `ħad` → `ħað`. Begadkephat dālaṯ post-vowel; matches `arc ħað`. (applied by orchestrator this round)
- **Issue 11 — syc good:** `tˤaːbaː` → `tˤaːβaː`. Begadkephat bēṯ post-vowel; matches `arc tˤaːβaː` notation. (applied by orchestrator this round)
- **Issue 12 — syc house:** `bajtaː` → `bajθaː`. Begadkephat tāw post-diphthong; matches `aii beθa`. (applied by orchestrator this round)
- **Issue 13 — syc mother:** `emmaː` → `ʔemmaː`. Adds initial aleph ʔ. (applied by orchestrator this round)
- **Issue 14 — syc love:** `ħuːbbaː` → `ħubbaː`. Mater-lectionis wāw = short /u/, not /uː/. (applied by orchestrator this round)
- **Issue 15 — syc cat:** `ʃuːnaːraː` → `ʃunnaːraː`. Short /u/ + geminate /nn/. (applied by orchestrator this round)
- **Issue 16 — arc cat:** `ʃuːnaːraː` → `ʃunnaːraː`. Same fix as Issue 15. (applied by orchestrator this round)

**Held — needs reviewer/team decision (not a clear local error):**

- **Issue 2 — arc script block (Syriac vs Hebrew/square):** Held. This is a dataset-wide script-encoding convention spanning every `arc` entry in all 20 word files; re-encoding (including vocalization) is a system-level convention call, not a local error. Defer to team convention decision.
- **Issue 8 — arc sun `ʃemʃaː`→`ʃamʃaː`:** Held. The e/a first-vowel question is a vocalization-tradition reconstruction (Eastern Syriac reading vs reconstructed Imperial */šamšāʾ/). The dataset uses Syriac script+reading throughout `arc`; changing only the vowel here is a convention judgement, not an unambiguous error.
- **Issue 17 — syc drink (inflected ܐܫܬܝ vs citation ܫܬܐ):** Held. Genuinely a citation-form inconsistency, but the fix requires changing the surface orthography (per project rule, only on explicit instruction) AND choosing among reconstructions (`ʃeθaː` / `ʃtaː`). Needs reviewer sign-off on the replacement lemma + IPA.
- **Issue 18 — syc thanks (ܫܘܒܚܐ "glory"):** Held. Semantic lemma re-selection (surface + IPA) — a lexical/editorial choice, not a local IPA error.
- **Issue 19 — aii thanks (ܒܣܝܡܐ "pleasant"):** Held. Same as Issue 18 — lemma re-selection.
- **Issue 20 — aii one (script/IPA mismatch):** Held. Reviewer states the IPA `xa` is correct and should be retained; the only proposed change is optional modern-orthography re-spelling. No clear IPA error to fix.
- **Issue 21 — aii drink `ʃtaja`:** Held. Reviewer offers two mutually exclusive targets (`ʃθaːja` verbal noun vs `ʃaːθa` infinitive); the correct one is underdetermined.
- **Issue 22 — arc drink `ʃtaː`→`ʃeθaː`:** Held. Anaptyptic-vowel insertion + spirantization is an Imperial-period reconstruction choice, not an unambiguous error; the cluster form is valid under the Syriac reading the dataset otherwise uses.
- **Issue 23 — arc eat vowel harmonization (`ʔaːχal`):** The ʔ portion is applied via Issue 3. The remaining vowel-quality harmonization (el→al) is a reconstruction choice and is held.
- **Issue 24 — aii father `baba`→`baːba`:** Held. Compensatory lengthening is one realization; short-vowel /baba/ is also widely attested in Assyrian NENA. Not unambiguous.

Net: 15 IPA fixes applied across 13 word files; 10 items held for reviewer/team decision.

---

## Reviewer round-1 response (再評価 round-1)

I verified every claimed fix against the live per-word data files under `words/`. All 15 "applied" IPA edits are genuinely present in the live data — no phantom fixes this round.

### Verified applied (✓)

| Issue | File:line (live) | Live value | Verdict |
|---|---|---|---|
| 1 arc water | water.js:532 | `majjaː` | ✓ correct, matches syc |
| 3 arc eat | eat.js:525 | `ʔaːχel` | ✓ ʔ added |
| 4/5 arc mother | mother.js:531 | `ʔemmaː` | ✓ ʔ + doubled consonant |
| 5 arc heart | heart.js:525 | `lebbaː` | ✓ |
| 5 arc love | love.js:532 | `ħubbaː` | ✓ |
| 6 arc tree | tree.js:525 | `ʔiːlaːnaː` | ✓ |
| 7 arc hand | hand.js:525 | `ʔiːðaː` | ✓ |
| 9 syc hand | hand.js:906 | `ʔiːðaː` | ✓ spirantized dālaṯ |
| 10 syc one | one.js:912 | `ħað` | ✓ |
| 11 syc good | good.js:906 | `tˤaːβaː` | ✓ spirantized bēṯ |
| 12 syc house | house.js:913 | `bajθaː` | ✓ spirantized tāw |
| 13 syc mother | mother.js:912 | `ʔemmaː` | ✓ ʔ added |
| 14 syc love | love.js:913 | `ħubbaː` | ✓ short u |
| 15 syc cat | cat.js:906 | `ʃunnaːraː` | ✓ short u + nn |
| 16 arc cat | cat.js:525 | `ʃunnaːraː` | ✓ |

### Held items — adjudication

- **Issue 2 — arc script block (Syriac vs square/Hebrew):** △ ACCEPT-AS-HELD / won't-fix at item level. This is a legitimate scholarly point (Imperial Aramaic epigraphy is square Aramaic), but it is a genuine dataset-wide encoding+vocalization convention spanning every `arc` entry in all 20 files. Correctly escalated as a system-level convention decision, not a local error. Not blocking.
- **Issue 8 — arc sun `ʃemʃaː`→`ʃamʃaː`:** △ ACCEPT-AS-HELD. The e/a first-vowel is an Eastern-Syriac-reading vs reconstructed-Imperial */šamšāʾ/ judgement. Because the whole `arc` set is encoded in Syriac script with Syriac reading tradition (see Issue 2), keeping the Eastern reading is internally consistent. Defensible as held; tie to the Issue 2 decision.
- **Issue 17 — syc drink ܐܫܬܝ (1sg perfect) vs citation ܫܬܐ:** △ ACCEPT-AS-HELD. The reviewer point stands — `ʔeʃtiː` "I drank" is an inflected form, not a citation lemma — but the fix requires a surface-orthography change (forbidden without explicit instruction per project rule) plus a reconstruction choice. Correctly deferred for an editorial sign-off; not a local IPA error.
- **Issue 18 — syc thanks ܫܘܒܚܐ "glory":** △ ACCEPT-AS-HELD. Real semantic concern, but lemma re-selection (surface + IPA) is an editorial call, not a local IPA fix.
- **Issue 19 — aii thanks ܒܣܝܡܐ "pleasant":** △ ACCEPT-AS-HELD. Note `basima`/ܒܣܝܡܐ is in fact the routine colloquial "thank you" in spoken Assyrian Neo-Aramaic; the formal ܬܘܕܝ is also valid. Lemma choice, not an error.
- **Issue 20 — aii one (script/IPA mismatch):** ✓ ACCEPT held. Reviewer's own brief says IPA `xa` is correct and should be retained; the only proposal was optional re-spelling. Nothing to fix in IPA. Settled.
- **Issue 21 — aii drink `ʃtaja`:** △ ACCEPT-AS-HELD. The two proposed targets (`ʃθaːja` verbal noun vs `ʃaːθa` infinitive) are mutually exclusive and the intended slot is underdetermined; correctly held rather than guessed.
- **Issue 22 — arc drink `ʃtaː`→`ʃeθaː`:** △ ACCEPT-AS-HELD. Anaptyctic-vowel + spirantization is an Imperial-period reconstruction; under the Syriac reading the dataset otherwise uses, `ʃtaː` is internally valid. Tie to Issue 2.
- **Issue 23 — arc eat vowel harmonization:** ✓ ACCEPT. The ʔ portion is now live (`ʔaːχel`). The residual el→al vowel-quality harmonization is a reconstruction choice, properly held.
- **Issue 24 — aii father `baba`→`baːba`:** △ ACCEPT-AS-HELD. Both `baba` and `baːba` are attested across NENA dialects; not unambiguous. Reasonable to hold.

### New issue raised during verification

**NEW-1 — `father` aleph-initial glottal stop dropped in BOTH `arc` and `syc` (and `arc` uses the non-standard ː-gemination notation):**
- `words/father.js:525` — `arc: ["ܐܒܐ", "abːaː"]`
- `words/father.js:906` — `syc: ["ܐܒܐ", "abbaː"]`

The display string ܐܒܐ begins with ālap̄ ܐ = /ʔ/ — the identical aleph the worker already added a glottal stop to in `arc` eat/mother/tree/hand (Issues 3,4,6,7) and `syc` mother (Issue 13). By the review's own accepted standard, both father entries should begin with `ʔ`. Additionally, `arc` father `abːaː` uses the ː-after-consonant gemination notation that the worker itself rejected and normalized to doubled consonants in Issue 5 (mother/heart/love). The matching `syc` father already correctly uses `abbaː`.

This word simply was not in the original 24-issue list, but it is the same clear, sibling-corroborated class of error the team accepted everywhere else.
- **Fix:** `arc` `"abːaː"` → `"ʔabbaː"`; `syc` `"abbaː"` → `"ʔabbaː"`.

### Scorecard

- Applied fixes verified present in live data: 15 / 15 ✓
- Held items accepted as defensible / settled: 10 / 10
- New actionable issues: 1 (father ʔ-drop + arc gemination notation, both `arc` and `syc`)

The held items are all correctly escalated convention/editorial/underdetermined calls — I accept them. The only thing blocking closure is NEW-1, which is the exact same error class the team already fixed everywhere else and is sibling-corroborated, so it should be a quick local IPA edit.

**File status: OPEN** — Dev team must apply NEW-1: `words/father.js` arc `"abːaː"` → `"ʔabbaː"` and syc `"abbaː"` → `"ʔabbaː"`.
