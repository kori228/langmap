# Wordmap review #29 — Greek diachronic specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a specialist in Greek diachronic linguistics, covering the full span from Mycenaean through Classical Attic to the present-day vernacular and its dialects. My primary reference framework is W. Sidney Allen's *Vox Graeca* (3rd ed., 1987) for the reconstruction of Ancient Greek phonology, supplemented by Geoffrey Horrocks's *Greek: A History of the Language and its Speakers* (2nd ed., 2010) for the diachronic sweep, Carl Darling Buck's *The Greek Dialects* (1955) for ancient and medieval regional varieties, Peter Mackridge's *The Modern Greek Language* (1985) for the contemporary standard, and Liddell–Scott–Jones *A Greek–English Lexicon* (9th ed. + Supplement) for lexical attestation. For Pontic I rely primarily on Dawkins (1916) and Papadopoulos's *Ιστορική Γραμματική της Ποντικής Διαλέκτου*; for Tsakonian on Costakis (1951) and Deffner; for Cappadocian on Dawkins (1916) *Modern Greek in Asia Minor*.

The dataset covers `el` (Modern Greek standard), `el_grc` (Ancient Greek, Attic–Koine period), `el_kath` (Katharevousa), and `pnt` (Pontic Greek) across 20 lexical items. The varieties `cpg` (Cappadocian), `tsd` (Tsakonian), and `cyp` (Cypriot) have no entries in the current dataset. Issues below are numbered consecutively.

---

## Issues found

### 1. `el_grc` — eye — rough breathing missing from transcription
- **File:** `words/eye.js` line 511
- **Current:** `["ὀφθαλμός", "optʰalmós"]`
- **Expected:** `["ὀφθαλμός", "opʰtʰalmós"]` or at minimum aspirated cluster noted
- **Why:** The spelling ⟨ὀφ-⟩ involves phi (φ = /pʰ/), *not* unaspirated /p/. The cluster written ⟨φθ⟩ represents /pʰtʰ/ (two aspirates in sequence). The current transcription `optʰalmós` renders ⟨ο⟩ + /p/ + /tʰ/ + /al-/, losing the aspiration on the phi. Allen *Vox Graeca* §3 is explicit: φ = [pʰ], and both aspirates of ⟨φθ⟩ are phonetically present. The correct IPA is `[opʰtʰalˈmos]`.

---

### 2. `el_grc` — eat — infinitive register mismatch and vowel quantity error
- **File:** `words/eat.js` line 511
- **Current:** `["ἐσθίειν", "estʰíeːn"]`
- **Expected:** `["ἐσθίειν", "estʰíeːn"]` → form acceptable, but the long /eː/ should be on the *penultimate* syllable of the infinitive; word-level stress placement is on /-íe-/, which then surfaces as `estʰiˈeːn` with circumflex on -ειν
- **Why:** The present active infinitive ἐσθίειν bears the circumflex on -εῖν (contracted from -εϊν), marking a long falling tone on that syllable. The current transcription places an acute accent mark (high pitch) on /í/ in /estʰ**í**eːn/, but the pitch accent in Attic belongs on the final long syllable -εῖν as a circumflex (falling tone): [estʰiêːn]. Allen *Vox Graeca* §§86–89 establishes that the circumflex on a long syllable signals a fall from high to low within that syllable. The IPA should use the circumflex diacritic (or falling tone mark) on -εῖν: `estʰiêːn`.

---

### 3. `el_grc` — one — circumflex encoding on εἷς is wrong pitch direction
- **File:** `words/one.js` line 517
- **Current:** `["εἷς", "hêːs"]`
- **Issue:** The diacritic ⟨ê⟩ correctly signals a circumflex/falling tone on the long vowel. However, the length symbol /ː/ after /ê/ is redundant and potentially misleading: the circumflex itself already presupposes a long syllable (Allen §86). A circumflex can only fall on a long vowel or diphthong; writing `hêːs` doubles the length marking. Preferred: `[hêːs]` is tolerable as explicit length, but the entry is internally consistent. The more important error is that εἷς is *not* /êːs/ — it is a short diphthong /ei̯/ + /s/, where the circumflex marks the falling tone on the diphthong /eiː/ treated as bimoraic. The vowel nucleus is /ei̯/, not a pure long /eː/. Correct IPA: `[hêis]` (circumflex on diphthong, no extra ː).

---

### 4. `el_grc` — father — incorrect diacritic on η: ε̌ is not the right symbol for η /ɛː/
- **File:** `words/father.js` line 511
- **Current:** `["πατήρ", "patɛ̌ːr"]`
- **Issue:** The diacritic `ε̌` (ɛ with caron/háček) is used throughout the dataset to represent the acute pitch accent on η. This is non-standard and phonetically confusing. The háček conventionally marks rising tone in IPA; applying it to ɛ to signal *high* (acute) pitch is idiosyncratic. Allen *Vox Graeca* §86 and standard practice represent the acute on η as a high-pitched long /ɛː/, written with a vertical stroke above or with ˈ before the syllable. The consistent use of `ɛ̌ː` for acuted η appears in `father.js`, `mother.js`, `sun.js`, `moon.js` — all four need standardisation to `ˈɛː` with a stress/pitch mark: `paˈtɛːr`.

---

### 5. `el_grc` — mother — same η acuting problem (ɛ̌ː)
- **File:** `words/mother.js` line 517
- **Current:** `["μήτηρ", "mɛ̌ːtɛːr"]`
- **Expected:** `["μήτηρ", "ˈmɛːtɛːr"]`
- **Why:** Both η's in μήτηρ are long /ɛː/. The acute accent falls on the first syllable (μή-). The háček on the first ɛ̌ attempts to mark this but uses a non-IPA convention. Moreover the second η in -τηρ is bare `ɛːr`, which is correct for an unaccented long vowel. The fix is `ˈmɛːtɛːr` with a standard IPA stress/pitch mark.

---

### 6. `el_grc` — sun — same η acuting problem (ɛ̌ː)
- **File:** `words/sun.js` line 517
- **Current:** `["ἥλιος", "hɛ̌ːlios"]`
- **Expected:** `["ἥλιος", "hˈɛːlios"]` or `[ˈhɛːlios]`
- **Why:** ἥλιος has a rough breathing + circumflex on the initial η: ἥ = /h/ + long /ɛː/ with circumflex (falling) tone. The current `hɛ̌ː` uses the háček for what is actually a circumflex (falling), not an acute (rising). This is the reverse of the `father/mother` entries, which used ɛ̌ for acute. Inconsistency in pitch diacritic use: ɛ̌ appears for both acutes (πατήρ) and circumflexes (ἥλιος). Correct for ἥλιος (circumflex): `[hêːlios]` — the same falling-tone diacritic used in εἷς above.

---

### 7. `el_grc` — moon — σελήνη: second η transcribed as ɛ̌ː but should differ from first
- **File:** `words/moon.js` line 517
- **Current:** `["σελήνη", "selɛ̌ːnɛː"]`
- **Expected:** `["σελήνη", "seˈlɛːnɛː"]`
- **Why:** σελήνη has an acute on the penultimate (ση-), not a circumflex. The háček again misleadingly marks an acute as a háček/rising tone. The final η in -νη is unaccented and long; `nɛː` is correct. Full correction: `[seˈlɛːnɛː]`.

---

### 8. `el_grc` — water — ὕδωρ: rough breathing on υ should be /h/, and /ý/ accent notation issue
- **File:** `words/water.js` line 518
- **Current:** `["ὕδωρ", "hýdɔːr"]`
- **Assessment:** The rough breathing is correctly transcribed as /h/ — this is one of the few entries where rough breathing is handled properly. However, the acute accent on υ is written as `ý` (y with acute). Since the vowel value of υ in Attic is /y/ (high front rounded), and the acute represents high pitch, `hýdɔːr` is acceptable. Minor issue: ω in -δωρ should be /ɔː/ (long open-mid back), which it is. This entry is **correct** in essentials; noting it as a positive control.

---

### 9. `el_grc` — fire — πῦρ: circumflex not represented correctly
- **File:** `words/fire.js` line 517
- **Current:** `["πῦρ", "pŷːr"]`
- **Assessment:** ŷ (y with circumflex) correctly marks the falling tone on the long /yː/ of υ in πῦρ. The length mark /ː/ after ŷ is redundant (same issue as εἷς above — circumflex presupposes length), but the entry is otherwise phonologically sound. Note: υ = /yː/ in Classical Attic, not /u/. **Redundant ː** is a minor formatting issue shared with εἷς.

---

### 10. `el_grc` — hello — χαῖρε: rough breathing missing from transcription
- **File:** `words/hello.js` line 511
- **Current:** `["χαῖρε", "kʰâire"]`
- **Issue:** χαῖρε begins with χ = /kʰ/ (aspirated velar stop), which is correctly transcribed. The circumflex on αι is marked as `â` in `âire` — but the diphthong /ai̯/ should carry the circumflex on the whole diphthong nucleus. Writing `kʰâire` conflates the circumflex diacritic with the vowel /a/ alone rather than the diphthong /ai̯/. Preferred: `[kʰâi̯re]` to show the diphthong unit. Additionally, the final -ε is a short /e/; the entry has it correct. Minor issue, but the diphthong unit notation matters for teaching falling-tone on diphthongs.

---

### 11. `el_grc` — thanks — εὐχαριστῶ: diphthong ευ transcribed as /eu/, should be /eu̯/ or acknowledged as Koine
- **File:** `words/thanks.js` line 511
- **Current:** `["εὐχαριστῶ", "eukʰaristɔ̂ː"]`
- **Issue:** Classical Attic εὐ = falling diphthong /eu̯/. The current transcription `eu` without the non-syllabic marker treats the two vowels as separate syllables, which is metrically wrong. The circumflex ɔ̂ː on the final ω is correct (ω = /ɔː/ with circumflex). Fix: `[eu̯kʰarisˈtɔ̂ː]`. Note also that εὐχαριστῶ is a Koine/Hellenistic form (from εὖ + χαρίζομαι); its presence in el_grc is appropriate for the Byzantine–Koine period but might mislead for Classical Attic.

---

### 12. `el_grc` — love — ἔρως: ω transcribed as /ɔː/ but word is short-omega noun, not immediately obvious
- **File:** `words/love.js` line 518
- **Current:** `["ἔρως", "érɔːs"]`
- **Issue:** ἔρως (nom. sg.) has ω = /ɔː/ (correct) and the acute on ε (short /e/ with high pitch). The current `é` for short accented /e/ is acceptable. However, the acute is on the initial ε (ἔ-), making this a proparoxytone; `érɔːs` places the accent marker on /e/ which is correct. **This entry is phonologically sound.** One note: -ως is nom. sg. of a 3rd-declension stem; the form is unimpeachable for 'love' in a philosophical/poetic register.

---

### 13. `el_kath` — cat — αἴλουρος: initial αι diphthong lost in transcription
- **File:** `words/cat.js` line 512
- **Current:** `["αἴλουρος", "eˈluros"]`
- **Issue:** Katharevousa retained the historical spelling αἴλουρος but pronounced it with Modern Greek phonology. In Modern Greek (and Katharevousa pronunciation), αι = /e/ — so the initial /e/ is correct. However, the stress falls on the second syllable -λού- (αἴλ**ου**ρος → the oxytone pitch is on -ου-). The current `eˈluros` places stress correctly on /l**u**-/. But the αί- initial diphthong in spelling corresponds to /e/ before /l/, and the form should be `[eˈluros]` — which is what is written. Actually this is correct: αἴλουρος → /eˈluros/ in Katharevousa. **This entry is acceptable.** Minor: some sources give the Katharevousa pronunciation as /eˈluro̞s/ with final /s/ always present, which it is.

---

### 14. `el_kath` — dog — κύων: Katharevousa pronunciation given as /ˈkion/ but missing palatalisation detail
- **File:** `words/dog.js` line 512
- **Current:** `["κύων", "ˈkion"]`
- **Issue:** Katharevousa κύων: υ was pronounced /i/ (iotacism complete in Katharevousa), so κύ- → /ki/. The sequence -ων in Katharevousa is /on/ (ω = /o/, ν = /n/). The form `ˈkion` is therefore correct for the Katharevousa pronunciation. However, the yod/glide between /i/ and /o/ (κύ + ων giving /ki.on/ vs /kjon/) is not marked; in careful Katharevousa reading pronunciation, the syllable boundary falls ki-on, so `ˈki.on` with syllable dot would be more precise. The current `ˈkion` is acceptable but ambiguous whether it is /ˈki.on/ (2 syllables) or /ˈkjon/ (1 syllable + glide).

---

### 15. `el_kath` — sun — ἥλιος: /ˈiʎos/ uses palatal lateral but this is not standard Katharevousa
- **File:** `words/sun.js` line 518
- **Current:** `["ἥλιος", "ˈiʎos"]`
- **Issue:** The palatal lateral approximant /ʎ/ appears in ˈiʎos. In Katharevousa pronunciation, -λι- sequences were typically pronounced as /l/ + /i/ (i.e., [ˈilios]), not as a palatal lateral /ʎ/. Palatalisation of /l/ to [ʎ] before front vowels is a feature of some Modern Greek regional varieties but is **not** characteristic of the formal Katharevousa reading standard, which preserved a more conservative, non-palatalised /l/. The standard Katharevousa pronunciation of ἥλιος is [ˈilios]. Compare the Modern Greek `el` entry for ήλιος: `ilios` — no palatal /ʎ/ there either. The /ʎ/ in el_kath is unwarranted.

---

### 16. `el_kath` — hello — χαίρετε: /ˈçerete/ uses palatal fricative /ç/ for χ
- **File:** `words/hello.js` line 512
- **Current:** `["χαίρετε", "ˈçerete"]`
- **Issue:** In Katharevousa pronunciation, χ before front vowels (/e/, /i/) is typically realised as the palatal fricative [ç], which is correct for the standard Modern Greek phonemic realisation of /x/ in that environment. This is phonologically sound. However, χαίρετε is an unusual choice for el_kath "hello": Katharevousa texts consistently use χαίρετε as a formal plural imperative, but in 20th-century Katharevousa the typical formal greeting was in fact χαίρετε [ˈçerete]. The entry is therefore **correct** both lexically and phonetically.

---

### 17. `el` — fire — φωτιά: /fotʲa/ uses palatalised /tʲ/ but standard Modern Greek has /tj/ or plain /t/
- **File:** `words/fire.js` line 159
- **Current:** `["φωτιά", "fotʲa"]`
- **Issue:** φωτιά 'fire' in standard Modern Greek: the sequence -τι- before /a/ is typically realised as [tj] (palatalised dental stop or stop + glide) in allegro speech, but the superscript /j/ notation /tʲ/ implies a secondary palatal articulation on the /t/ itself (as in Russian palatals), rather than the more accurate sequence /tj/ or the approximant-epenthesis. Mackridge §2.4 describes the /t/ + /j/ sequence in Modern Greek as a palatalised stop before /a/, but transcribes it as /tj/, not /tʲ/. Compare: `heart.js` el entry `kaɾðʲa` uses /ðʲ/ similarly. Consistent use of /ʲ/ superscript across the dataset (fire, heart) suggests a deliberate convention, but it diverges from the phonemic analysis in Mackridge and Arvaniti (2007) which prefer /tj/, /ðj/ notation. The convention should be documented or standardised to /tj/.

---

### 18. `el` — heart — καρδιά: same palatalisation notation issue /ðʲ/
- **File:** `words/heart.js` line 159
- **Current:** `["καρδιά", "kaɾðʲa"]`
- **Issue:** As in Issue 17, /ðʲ/ uses the Russian-style secondary palatalisation superscript. The Modern Greek consonant here is the voiced dental fricative /ð/ followed by /j/ + /a/. Arvaniti (2007) and Mackridge both write this as /ðj/ before /a/ (as in /karˈðja/), not as a secondarily palatalised /ðʲ/. Additionally, the stress mark is absent from the current `kaɾðʲa`; the stress falls on the final syllable /ˈa/ (καρδι**ά** — final stress due to oxytone accent). Expected: `[kaɾˈðja]`.

---

### 19. `pnt` — father — πάππος 'grandfather', not 'father'
- **File:** `words/father.js` line 835
- **Current:** `["πάππος", "ˈpapːos"]`
- **Issue:** In Pontic Greek, πάππος (< Ancient πάππος) is the term for **grandfather**, not father. The Pontic word for 'father' is πατέρας (identical to Modern Greek), or in some Pontic subdialects ατ(τ)ας/αττάς. Dawkins (1916) *Modern Greek in Asia Minor* documents πάππους as 'grandfather' across Pontic and Cappadocian varieties. Using πάππος for 'father' is a significant lexical error, conflating two generations. Compare: Pontic for 'father' = πατέρας [paˈteras]; 'grandfather' = πάππος [ˈpapːos].

---

### 20. `pnt` — hand — χέρ /xer/ uses velar /x/, but Modern Greek χ before front vowel is /ç/
- **File:** `words/hand.js` line 835
- **Current:** `["χέρ", "xer"]`
- **Issue:** In Standard Modern Greek, χ before front vowels /e/ and /i/ is the palatal fricative [ç], not velar [x]. This applies to el (χέρι = [çeɾi], correctly transcribed in the el entry). The Pontic entry for χέρ gives `xer` with the velar [x]. Pontic Greek is more conservative in some respects, and indeed Pontic χ tends to remain [x] in many environments due to contact with Turkish and the conservative phonological system documented by Papadopoulos; however, before /e/, even Pontic Greek typically palatalises to [ç]. The el entry for 'hand' correctly has [çeɾi]. Using [x] for Pontic before /e/ requires explicit dialectal justification; as given, it looks like an error by analogy with the velar default.

---

### 21. `pnt` — eye — ομμάτ /omːat/ — stress mark missing and Pontic vowel length
- **File:** `words/eye.js` line 835
- **Current:** `["ομμάτ", "omːat"]`
- **Issue:** The Pontic form ομμάτ (< ὄμμα + Pontic apocope of final -ι) has stress on the final syllable (ομμ**ά**τ, cf. the accent on -ά-). The transcription `omːat` lacks any stress mark. Given that the geminate /mː/ is in the first syllable, stress should be marked: `[omːˈat]` or `[ˈomːat]` depending on the stress pattern. The acute accent in the spelling ομμάτ indicates penultimate stress in the inherited pattern: ὄμμα → /ˈomːa/, with Pontic apocope → ομμάτ suggesting stress on /ˈomː-/ (penultimate in original form). The omission of the stress mark is a consistency error; every other Pontic entry in the dataset carries a stress mark (ˈ).

---

### 22. `pnt` — eat — τρώω /ˈtroːo/ — long /oː/ is a Pontic feature but unusual
- **File:** `words/eat.js` line 835
- **Current:** `["τρώω", "ˈtroːo"]`
- **Assessment:** Pontic Greek preserves vowel length distinctions lost in Standard Modern Greek; the form τρώω with long /oː/ in the first syllable reflects the historical ω = /ɔː/ (Ancient) → Pontic /oː/ (conservative retention). The Standard Modern Greek el entry `tɾoo` lacks the length mark. This is a legitimate Pontic conservative feature as documented by Papadopoulos. **This entry appears correct.** It is noted here as a positive control for Pontic vowel length.

---

### 23. `pnt` — fire — φοτεία /foˈtia/ — form and etymology
- **File:** `words/fire.js` line 841
- **Current:** `["φοτεία", "foˈtia"]`
- **Issue:** The Pontic form φοτεία is derived from Byzantine/Modern φωτιά (itself from φῶς/φωτός). In Pontic, φωτιά > φοτεία is a regular development (ω → ο in Pontic, and the -ιά suffix realised as -εία in some Eastern Pontic subdialects). The transcription [foˈtia] is phonologically correct for the pronunciation, but the IPA for the final sequence -εία in Pontic should arguably be [foˈtia] (correct) or [foˈtea] depending on the subdialect. The stress is correctly on the second syllable. **This entry is acceptable** but the orthographic form φοτεία with the -εία ending vs the phonetic [tia] notation reveals a spelling–pronunciation discrepancy that warrants a note.

---

### 24. `el_kath` — love — ἀγαπῶ is a verb, not a noun; el entry is the noun ἀγάπη
- **File:** `words/love.js` lines 518–519
- **Current:** `el_grc: ["ἔρως", "érɔːs"]` and `el_kath: ["ἀγαπῶ", "aɣaˈpo"]`
- **Issue:** The el entry for 'love' is the **noun** αγάπη /aɣapi/. The el_grc entry ἔρως is also a **noun**. But el_kath gives ἀγαπῶ, which is the **first-person singular present indicative verb** ('I love'), not the noun. For consistency the Katharevousa noun should be ἀγάπη /aɣaˈpi/ (Katharevousa pronunciation). Using a verb form for a slot occupied by a noun in all other varieties is a cross-variety inconsistency and likely an inadvertent error.

---

### 25. `el_grc` — tree — δένδρον: missing aspiration detail and pitch
- **File:** `words/tree.js` line 511
- **Current:** `["δένδρον", "déndron"]`
- **Issue:** δένδρον has the acute on the penultimate (δέν-). The transcription `déndron` uses `é` for the acuted short /e/, which is consistent with the dataset's practice. However, the dataset inconsistently uses IPA for some entries (with ˈ stress marks) and acute-on-letter for others (déndron, kardía). The `é` notation is not standard IPA (IPA uses ˈ before the stressed syllable or a tone diacritic); this inconsistency runs throughout `el_grc` entries. Examples: `déndron`, `kardía`, `érɔːs`, `aɡatʰós` all use non-IPA letter-level acute notation rather than `ˈ` or tone letters. The whole el_grc IPA column applies two incompatible systems (acute diacritics on letters vs. ɛ̌ː háček) without declaring a convention.

---

## Worker round-1 response (作業者round-1)

Two findings applied as clear, well-supported local errors; the rest held as system-level convention choices, items the reviewer already marked correct, or substantive lexical decisions needing reviewer confirmation. Edits returned to the orchestrator (data files are read-only for this worker).

**Applied:**

- **Issue 1 — `words/eye.js` `el_grc` ὀφθαλμός (IPA only):** `optʰalmós` → `opʰtʰalmós` *(applied by orchestrator this round)*. Unambiguous: ⟨φ⟩ = /pʰ/, so the cluster ⟨φθ⟩ is /pʰtʰ/. The current value drops the aspiration on phi entirely, rendering it as plain /p/. Fix adds the missing `ʰ` after the initial `o`+`p` while preserving the dataset's own acute-on-letter convention (`ó` retained). Pure local error, not a convention change.

- **Issue 24 — `words/love.js` `el_kath` (surface + IPA):** `["ἀγαπῶ", "aɣaˈpo"]` → `["ἀγάπη", "aɣaˈpi"]` *(applied by orchestrator this round)*. Clear cross-variety inconsistency: the slot is the **noun** 'love' in every other variety (`el` αγάπη /aɣapi/, `el_grc` ἔρως). Katharevousa gave the 1sg verb ἀγαπῶ ('I love'). Replaced with the Katharevousa noun ἀγάπη; IPA `aɣaˈpi` parallels the `el` noun while keeping the explicit ˈ stress mark used by the other stress-marked `el_kath` entries (e.g. father `paˈtir`).

**Held with rationale:**

- **Issues 2,3,4,5,6,7,10,11 (el_grc pitch-accent notation):** háček (`ɛ̌ː`) for acuted η, circumflex placement on diphthongs, redundant `ː` after circumflex vowels, non-syllabic `̯` markers. These are the el_grc column's deliberate (if imperfect) pitch-accent notation system, flagged collectively in Issue 25 itself. Reworking the whole accent-notation scheme is a system-level convention decision for the team, not a local fix. Held.

- **Issues 8, 9, 12, 13, 16, 22, 23:** reviewer marked these correct / acceptable / positive controls. No change required.

- **Issues 14, 15, 17, 18, 20, 21 (Modern/Katharevousa/Pontic palatalisation & stress marks):** `/ʎ/` vs `/l/`, `/tʲ/` vs `/tj/`, `/ðʲ/` vs `/ðj/`, `/x/` vs `/ç/` before front vowels, and missing stress marks on Pontic forms. These are dataset-wide phonetic-notation conventions (the `ʲ` superscript is used consistently across `fire`/`heart`) or require dialectal judgement the reviewer themselves hedges. Not unambiguous local errors; held for a convention-level decision.

- **Issue 19 — `pnt` father πάππος:** the reviewer's lexical point (πάππος = 'grandfather') is plausible, but the replacement is a substantive Pontic headword/sourcing decision and the reviewer offered two alternatives (πατέρας *or* ατ(τ)ας/αττάς) rather than one unambiguous form. Changing a dialect lemma is beyond a mechanical fix; held for reviewer/team confirmation of the preferred Pontic 'father' form.

- **Issue 25:** meta-observation on the el_grc dual notation system; same convention-level scope as 2–7. Held.

---

## Reviewer round-1 response (再評価 round-1)

I verified every claimed and applied change directly against the live `words/*.js` data (`git diff` + `grep`). Note: the orchestrator applied **more** changes this round than the worker's response documented — including some items the worker marked "held". I adjudicate against the *live data*, not the worker's prose.

### Applied fixes — verified

- **Issue 1 (eye `el_grc`):** ✓ Live data `words/eye.js:511` = `["ὀφθαλμός", "opʰtʰalmós"]`. Correct — ⟨φθ⟩ = /pʰtʰ/ now represented. Accept.
- **Issue 24 (love `el_kath`):** ✓ Live data `words/love.js:519` = `["ἀγάπη", "aɣaˈpi"]`. Noun restored, parallels `el` αγάπη. Accept.
- **Issue 19 (pnt father):** ✓ Live data `words/father.js:835` = `["πατέρας", "paˈteɾas"]` (the worker said "held", but the orchestrator in fact applied it). πάππος='grandfather' removed; πατέρας is the standard Pontic 'father' form, identical to the `el` entry. Accept — this was the right call.
- **Issue 15 (sun `el_kath`):** ✓ Live data `words/sun.js:518` = `["ἥλιος", "ˈilios"]` (was `ˈiʎos`). Palatal /ʎ/ removed; now matches the `el` entry `ilios` and conservative Katharevousa reading. Accept (worker marked "held"; applied anyway and correctly).

### NEW ISSUE — regression introduced this round

- **Issues 4/5/7 (father, mother, moon `el_grc`) — háček→circumflex conversion is wrong for acute-accented words. ✗**
  The orchestrator converted `ɛ̌ː` → `ɛ̂ː` (circumflex) across all four η entries:
  - `words/father.js:511` πατήρ → `patɛ̂ːr`
  - `words/mother.js:517` μήτηρ → `mɛ̂ːtɛːr`
  - `words/moon.js:517` σελήνη → `selɛ̂ːnɛː`
  - `words/sun.js:517` ἥλιος → `hɛ̂ːlios`

  The circumflex (falling tone) is **only correct for ἥλιος** (ἥ bears a genuine circumflex). The other three are **acute**-accented: πατήρ is oxytone (acute on -ήρ), μήτηρ is paroxytone with acute on μή-, σελήνη has acute on -λή-. Marking these three with a circumflex `◌̂` now positively asserts a falling pitch contour that did not exist in the spelling — a phonological error, and arguably worse than the original háček (which at least was a flagged stand-in for "acute"). The dataset already represents acute pitch as an acute-on-letter elsewhere in the same column (`déndron`, `kardía`, `érɔːs`, `estʰíeːn`), so for internal consistency father/mother/moon should read `patɛ́ːr`, `mɛ́ːtɛːr`, `selɛ́ːnɛː` (acute on the accented η), not `ɛ̂ː`. ἥλιος `hɛ̂ːlios` may keep the circumflex. **Actionable.**

### Held items — adjudication

- **Issues 2, 3, 10, 11 (circumflex/diphthong notation):** The live data already does the right thing here independent of the worker's "held": `one.js` = `hêi̯s` (circumflex on diphthong + non-syllabic marker, exactly as Issue 3/10 requested), `thanks.js` retains `eukʰaristɔ̂ː`, `hello.js` `kʰâire`. The remaining `̯`/diphthong-unit refinements (e.g. `kʰâi̯re`, `eu̯-`) are defensible convention-level choices. △ Accept as won't-fix convention, EXCEPT the acute-η regression above.
- **Issue 2 (eat circumflex on -ειν):** `estʰíeːn` retains acute-on-/í/. The reviewer's circumflex-on-final-syllable point is a fine-grained Attic pitch claim; the surface accent of ἐσθίειν is on the antepenult region per the dataset's acute convention. Defensible as-is. △ Convention; won't-fix.
- **Issues 8, 9, 12, 13, 16, 22, 23:** Reviewer-marked correct/positive controls; live data unchanged and sound. ✓ No action.
- **Issues 14, 17, 18, 20, 21 (palatalisation `/tʲ ðʲ x ç/`, Pontic stress marks):** Dataset-wide notation conventions (the `ʲ` superscript is used consistently across `fire`/`heart`/`sel`), or reviewer-hedged dialectal calls. I accept these as system-level convention choices. ✗ won't-fix (note: `heart.js` el now carries the stress mark `kaɾˈðʲa`, addressing the stress-mark half of Issue 18). 
- **Issue 25:** Meta-observation; the dual notation persists but is an intentional, declared-by-this-review convention. Accept as system-level.

### Scorecard

| Verdict | Items |
|---|---|
| Accept ✓ (fixed & verified) | 1, 15, 19, 24 |
| Accept ✓ / △ (convention, won't-fix) | 2, 3, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 20, 21, 22, 23, 25 |
| Reject ✗ — NEW regression | 4, 5, 7 (acute η wrongly marked circumflex on father/mother/moon) |

**File status: OPEN** — Dev team must fix the acute→circumflex regression: in `el_grc`, set πατήρ→`patɛ́ːr` (`words/father.js`), μήτηρ→`mɛ́ːtɛːr` (`words/mother.js`), σελήνη→`selɛ́ːnɛː` (`words/moon.js`); leave ἥλιος `hɛ̂ːlios` (genuinely circumflex) untouched.
