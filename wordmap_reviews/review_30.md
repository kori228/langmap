# Wordmap review #30 — Sanskrit / Pali / Prakrit specialist

## Reviewer self-introduction

I am a specialist in Old Indo-Aryan with textual and phonological expertise spanning the full diachronic span from the Ṛgvedic hymns to the late Apabhraṃśa transition. My core reference shelf for this review: Whitney (1889) *Sanskrit Grammar*; Macdonell (1916) *A Vedic Grammar for Students*; Burrow (1955) *The Sanskrit Language*; Pischel (1900) *Grammatik der Prakrit-Sprachen*; Geiger (1916) *Pāli Literatur und Sprache*; Monier-Williams *Sanskrit-English Dictionary* (2nd ed.); Apte *The Practical Sanskrit-English Dictionary*; PED = Pali Text Society *Pali-English Dictionary* (Rhys Davids & Stede). Phonological standards: IPA Handbook and standard academic Indological practice (breathy-voiced stops marked with ʱ; voiceless aspirates with ʰ; visarga as a voiceless glottal fricative).

---

## Issues found

### 1. `thanks.js` sa / sa_edu — voiced aspirated dh written with voiceless aspirate marker dʰ
- **Files:** `words/thanks.js` lines 84–85
- **Current:** `sa_edu: ["धन्यवादाः", "dʰanjaʋaːdaːɦ"]`, `sa: ["धन्यवादः", "dʰanjaʋaːdaɦ"]`
- **Expected IPA:** `dʱanjaʋaːdaːɦ` / `dʱanjaʋaːdaɦ`
- **Why:** Sanskrit *dh* (ध) is a breathy-voiced dental stop. In strict IPA the diacritic for breathy (murmured) voice is the sub-subscript ʱ, yielding /dʱ/. The superscript ʰ unambiguously marks voiceless aspiration (compare /tʰ/, /kʰ/). Writing /dʰ/ therefore implies a voiceless aspirated [d̤ʰ], which is phonetically contradictory. The same error appears in `good.js` sa_edu (see issue 2). This is the single most common transcription mistake for Sanskrit voiced aspirates. (Whitney §37; Burrow p. 78.)

### 2. `good.js` sa_edu — sādhu: voiced aspirate dh written dʰ, same error
- **File:** `words/good.js` line 84
- **Current:** `sa_edu: ["साधु", "saːdʰu"]`
- **Expected IPA:** `["साधु", "saːdʱu"]`
- **Why:** साधु = *sādhu* (dental *dh* = voiced aspirated /dʱ/). Same systematic voiceless-aspirate marker error as issue 1. Correct: /saːdʱu/.

### 3. `house.js` pi — Pali *ghara*: voiced aspirated gh written ɡʰ instead of ɡʱ
- **File:** `words/house.js` line 528
- **Current:** `pi: ["घर", "ɡʰara"]`
- **Expected IPA:** `["घर", "ɡʱara"]`
- **Why:** Pali *ghara* (घर, "house") contains the voiced aspirated velar stop /ɡʱ/. The pmh entry on line 530 of the same file correctly writes `ɡʱaɾa`, exposing the inconsistency. The ʰ superscript (voiceless aspirate) is wrong; ʱ (breathy voice) is required. (Geiger §22; compare the same pmh correction within the same file.)

### 4. `eat.js` vsa — 1st person singular *admi* "I eat" instead of 3rd person singular
- **File:** `words/eat.js` line 1037
- **Current:** `vsa: ["अद्मि", "admi"]`
- **Expected:** `vsa: ["अत्ति", "atti"]` (or root form `["अद्", "ad"]`)
- **Why:** All other verbal entries in the dataset cite the 3rd person singular present indicative active (e.g., *khādati*, *pibati*, *snihyati*). अद्मि = *admi* is unambiguously 1sg ("I eat"), formed from root AD + athematic suffix *-mi*. The 3sg would be *atti* (अत्ति), from AD + *-ti* with internal sandhi. Presenting a 1sg form breaks the citation-form convention used throughout the file. (Whitney §621; Macdonell §136.)

### 5. `good.js` pi vs pi_edu — two entirely different Pali words
- **File:** `words/good.js` lines 521–522
- **Current:** `pi: ["सुन्दर", "sundara"]`, `pi_edu: ["kusala", "kusala"]`
- **Why:** These are lexically distinct Pali words with different semantic fields. *Sundara* (सुन्दर) means "beautiful, handsome, pleasant" — it does not cover the moral/general sense of "good". *Kusala* (कुसाल), the pi_edu selection, is the standard Buddhist ethical term for "wholesome, skillful, meritorious" and is the correct Pali rendering of "good" in virtually all Theravāda canonical contexts. The pi entry has pulled in the aesthetics/beauty lexeme rather than the ethical one. (PED: *kusala* p. 220; *sundara* p. 717.)

### 6. `house.js` pi vs pi_edu — two different Pali words for "house"
- **File:** `words/house.js` lines 528–529
- **Current:** `pi: ["घर", "ɡʰara"]`, `pi_edu: ["gehā", "ɡehaː"]`
- **Why:** *Ghara* and *geha* are both Pali words for "house/home", but they are etymologically and formally distinct (*ghara* < Skt *gṛha* via one route; *geha* < same root but different Pali phonological development). Presenting them as parallel forms of the same entry without labelling implies they are the same word. More importantly, *gehā* in pi_edu appears to be a plural (*geha* + plural -ā = "houses"), not the nominative singular. The canonical citation should be singular *gehaṃ* or *gharo* (masculine). (PED: *geha* p. 250; *ghara* p. 260.)

### 7. `love.js` pi vs pi_edu — two different Pali words from different semantic registers
- **File:** `words/love.js` lines 528–529
- **Current:** `pi: ["पेम", "pema"]`, `pi_edu: ["mettā", "metːaː"]`
- **Why:** *Pema* (पेम) is secular affective love/attachment. *Mettā* (मेत्ता) is the Buddhist spiritual virtue of loving-kindness/benevolence — a technical Dhamma term belonging to the four *brahmavihāras*. The two are not interchangeable: the Pāli Canon consistently distinguishes *pema* (can be negative/possessive attachment) from *mettā* (unconditional goodwill). Presenting them side-by-side as alternative entries for "love" conflates a secular and a technical-religious concept. (PED: *pema* p. 450; *mettā* p. 540.)

### 8. `eat.js` pi vs pi_edu — two different Pali verbs
- **File:** `words/eat.js` lines 521–522
- **Current:** `pi: ["खादति", "kʰaːdati"]`, `pi_edu: ["bhuñjati", "bʱuɲd͡ʒati"]`
- **Why:** *Khādati* means "to chew/gnaw, to eat (esp. solid food)". *Bhuñjati* means "to enjoy, to eat, to partake of" (broader sense, more common in canonical contexts for eating a meal). These are distinct lexemes. Unusually, the pi entry *khādati* is identical to sa/sa_edu *khādati*, suggesting the Pali entry may have been copied from the Sanskrit without adaptation. The standard Pali verb for eating is *bhuñjati* (pi_edu is correct); the pi entry should match. (PED: *bhuñjati* p. 510; *khādati* p. 232.)

### 9. `thanks.js` pi vs pi_edu — different grammatical forms (verb 1sg vs. nominal)
- **File:** `words/thanks.js` lines 521–522
- **Current:** `pi: ["अनुमोदामि", "anumodaːmi"]`, `pi_edu: ["anumodanā", "anumodanaː"]`
- **Why:** *Anumodāmi* (अनुमोदामि) is a conjugated 1st person singular verb "I rejoice / I express approval / I thank." *Anumodanā* (pi_edu) is the corresponding verbal noun "rejoicing, approval, thanksgiving." They are related but formally distinct: one is a verb form, the other a nominal. Mixing a conjugated verb (pi) with a verbal noun (pi_edu) under a single "thanks" entry is inconsistent. If the dataset cites verbal entries in 3sg (per the convention observed elsewhere), *anumodati* would be the form to match; if a nominal is preferred, *anumodanā* works, but pi and pi_edu should match in category. (PED: *anumodanā* p. 45.)

### 10. `cat.js` pi vs pi_edu — different word variants (biḷāla vs. biḷāra) presented as equivalents
- **File:** `words/cat.js` lines 521–522
- **Current:** `pi: ["बिळाल", "biɭaːla"]` (biḷāla), `pi_edu: ["biḷāra", "biɭaːɾa"]` (biḷāra)
- **Why:** PED lists *biḷāra* as the primary form (masculine, "cat") and *biḷāla* as a less common variant. The Devanagari बिळाल ends in ल (la) while the roman pi_edu ends in -ra — these are genuinely different phonological forms (final lateral vs. rhotic). Presenting them side-by-side without noting that they represent variant forms is misleading. The primary lemma should be *biḷāra* in both slots. (PED: *biḷāra* p. 487.)

### 11. `eye.js` pi vs pi_edu — inconsistent IPA for the same Pali word *cakkhu*
- **File:** `words/eye.js` lines 521–522
- **Current:** `pi: ["चक्खु", "tʃakkʰu"]`, `pi_edu: ["cakkhu", "tɕakːʰu"]`
- **Why:** Both entries represent the same Pali word *cakkhu* (चक्खु, "eye"). Yet the IPA diverges: pi uses /tʃ/ (postalveolar affricate) and pi_edu uses /tɕ/ (alveolopalatal affricate). Pali *c* is a palatal affricate; /tɕ/ (pi_edu) is the more accurate symbol for the Pali/Sanskrit palatal series. Additionally, pi writes *kk* as the sequence /k.kʰ/ (geminate with aspiration separate), while pi_edu correctly shows /kːʰ/ with length diacritic. The two entries should use a consistent IPA convention.

### 12. `moon.js` pi vs pi_edu — inconsistent IPA for the same Pali word *canda*
- **File:** `words/moon.js` lines 527–528
- **Current:** `pi: ["चन्द", "tʃanda"]`, `pi_edu: ["canda", "tɕanda"]`
- **Why:** *Canda* (चन्द, "moon") has the same palatal affricate inconsistency as *cakkhu* (issue 11). pi transcribes *c* as /tʃ/ (postalveolar); pi_edu as /tɕ/ (palatal). One consistent symbol must be chosen; /tɕ/ better reflects the palatal articulation of the Pali/Sanskrit palatal series.

### 13. `fire.js` pi vs pi_edu — inconsistent geminate notation for *aggi*
- **File:** `words/fire.js` lines 527–528
- **Current:** `pi: ["अग्गि", "aɡɡi"]`, `pi_edu: ["aggi", "aɡːi"]`
- **Why:** Both represent Pali *aggi* (अग्गि, "fire"). Gemination is notated two different ways: /ɡɡ/ (doubling the symbol) in pi versus /ɡː/ (length diacritic) in pi_edu. Standard IPA practice for geminates uses the length diacritic /ɡː/. The pi notation /aɡɡi/ should be standardised to /aɡːi/ to match pi_edu. (IPA Handbook, §3.5.)

### 14. Visarga transcribed systematically as ɦ (voiced glottal fricative) — should be h
- **Files:** `words/fire.js` line 84 (`aɡniɦ`), `words/hello.js` line 84 (`namaskaːɾaɦ`), `words/hand.js` line 84 (`hastaɦ`), `words/water.js` line 1050 (`aːpaɦ`), and all other entries with final visarga (ḥ), across sa, sa_edu, vsa lines
- **Why:** Sanskrit visarga (ḥ, ः) is a voiceless glottal (or pharyngeal) fricative in pause position, realised as /h/ or /ħ/. It is not the voiced /ɦ/. The symbol ɦ is the voiced glottal fricative — using it for visarga creates a systematic phonological inversion. Visarga should be transcribed /h/ (or simply /ʰ/ as a devoiced allophone). This error appears in every single Sanskrit/Vedic entry with a visarga-final nominative. (Whitney §170; Burrow p. 93.)

### 15. Syllabic ṛ (vocalic r) transcribed inconsistently: ɾɨ (sa/sa_edu) vs r̩ (vsa)
- **Files:** `words/heart.js` lines 85, 1037; `words/house.js` lines 85, 1044; `words/tree.js` lines 85, 1037
- **Examples:** `heart.js` sa: `hɾɨdajam` vs vsa: `hr̩dajam`; `house.js` sa: `ɡɾɨham` vs vsa: `gr̩ham`
- **Why:** Sanskrit vocalic ṛ (ृ) is a syllabic rhotic. Two competing IPA notations appear in the same dataset: sa/sa_edu use /ɾɨ/ (flap + close central vowel) while vsa uses /r̩/ (syllabic r with syllabicity mark). The notation /r̩/ is the standard scholarly IPA choice; /ɾɨ/ is a phonetic approximation more suited to modern Hindi. Furthermore, using ɾ (tap/flap) rather than r (trill) for the syllabic rhotic is inaccurate: the Sanskrit syllabic ṛ has traditionally been reconstructed with a trill articulation, not a flap. The dataset should normalise to /r̩/ throughout.

### 16. `cat.js` sa / sa_edu — IPA uses ɾ (tap) for Sanskrit r throughout; should be r (trill)
- **File:** `words/cat.js` lines 84–85
- **Current:** `["मार्जारः", "maːɾdʒaːɾaɦ"]`
- **Expected:** `["मार्जारः", "maːrdʒaːraɦ"]`
- **Why:** Classical Sanskrit र (r) is conventionally transcribed as a dental/alveolar trill /r/, not a flap /ɾ/. The flap ɾ is characteristic of Hindi/Marathi phonology, not of Classical Sanskrit. This affects mārajāraḥ but the same ɾ substitution appears in `hello.js` (namaskaːɾaɦ), `sun.js` (suːɾjaɦ), and `mother.js` (maːtaː is fine; no r). The Classical Sanskrit r should be /r/ uniformly. (Whitney §23; Burrow p. 74–75.)

### 17. `cat.js` vsa — IPA uses dʑ for *j* while sa/sa_edu use dʒ — inconsistent symbol for same phoneme
- **File:** `words/cat.js` lines 84–85 vs line 1037
- **Current:** sa/sa_edu: `"maːɾdʒaːɾaɦ"` (postalveolar dʒ); vsa: `"maːrdʑaːraɦ"` (alveolopalatal dʑ)
- **Why:** Sanskrit *j* (ज) is a voiced palatal (or alveolopalatal) affricate. Phonetically /dʑ/ (vsa) is more accurate for the Sanskrit palatal series; /dʒ/ (sa/sa_edu) is the postalveolar used for the English *j*. However, whichever convention is adopted, it must be used consistently throughout a single dataset. Using dʒ for Classical entries and dʑ for Vedic entries for the same phoneme creates confusion. The entire Old Indo-Aryan section should standardise on one symbol.

### 18. `thanks.js` sa_edu — plural form dhanyavādāḥ inconsistent with sa singular dhanyavādaḥ
- **File:** `words/thanks.js` lines 84–85
- **Current:** `sa_edu: ["धन्यवादाः", "dʰanjaʋaːdaːɦ"]` (nominative plural), `sa: ["धन्यवादः", "dʰanjaʋaːdaɦ"]` (nominative singular)
- **Why:** *Dhanyavādaḥ* (धन्यवादः, nominative singular) and *dhanyavādāḥ* (धन्यवादाः, nominative plural) are different inflectional forms. If the citation convention is nominative singular for nouns (as used consistently for *agniḥ*, *hasthaḥ*, *netraṃ*, etc.), sa_edu should match sa with the singular. The plural form in sa_edu appears to be an error of form selection, perhaps influenced by English "thanks" (a plurale tantum in English usage, but not a constraint on Sanskrit citation form).

### 19. `love.js` pmh — long vowel peːma for Maharashtri *pema* is unjustified
- **File:** `words/love.js` line 530
- **Current:** `pmh: ["पेम", "peːma"]`
- **Compare:** `pi: ["पेम", "pema"]` (same Devanagari, short /e/)
- **Why:** Both pi and pmh write the same Devanagari पेम, representing *pema* "love". The pi entry correctly transcribes short /e/ as /e/; the pmh entry inflates this to long /eː/ without phonological justification. Maharashtri Prakrit *pema* (from Sanskrit *prema*, which loses the /r/ cluster) has a short /e/ in all standard references. The long /eː/ in pmh appears to be an error. (Pischel §79 on Maharashtri vowel correspondences.)

### 20. `tree.js` pmh — Pali form *rukkha* used unchanged for Maharashtri Prakrit
- **File:** `words/tree.js` line 523
- **Current:** `pmh: ["रुक्ख", "rukːʰa"]`
- **Why:** The Maharashtri (pmh) entry is identical to the Pali entry (pi, pi_edu lines 521–522: *rukkha* / रुक्ख). While Maharashtri Prakrit and Pali both descend from Sanskrit *vṛkṣa* via cluster simplification, Maharashtri typically yields *rūkkha* (with compensatory lengthening of the preceding vowel: ū) or *rukkha*, but the form should be independently verified from Maharashtri dramatic texts (Kālidāsa's Prākrits, Hāla's *Sattasaī*) rather than simply copied from the Pali. If the form happens to be identical, the entry should still reflect an independent Maharashtri source. As it stands, pmh appears to have been filled by duplicating the Pali form. (Pischel §270 on OIA kṣ clusters in Maharashtri.)

### 21. `love.js` vsa — *snihyati* IPA snihjati confusingly reuses ɦ symbol (elsewhere = visarga)
- **File:** `words/love.js` line 1044
- **Current:** `vsa: ["स्निह्यति", "snihjati"]`
- **Why:** Within this dataset ɦ is used to transcribe visarga (see issue 14). In *snihyati*, the ɦ represents the consonantal *h* (ह) in the verbal stem *snih-*, not a visarga. The IPA string /snihjati/ therefore creates an internal ambiguity: a reader seeing ɦ will expect it to be a final voiceless-fricative visarga, but here it is a mid-word consonant. A cleaner transcription would distinguish: use /h/ for the consonantal *h* in the stem (giving /snɪhjəti/) or, since the existing convention maps visarga → ɦ everywhere, at least note the distinction. This is a symbol-collision problem caused by the visarga-as-ɦ convention throughout.

### 22. `water.js` sa / sa_edu — *jalam* chosen; Vedic/Classical distinction vs vsa *āpaḥ* unexplained
- **File:** `words/water.js` lines 84–85 vs 1050
- **Current:** sa/sa_edu: `["जलम्", "dʒalam"]`; vsa: `["आपः", "aːpaɦ"]`
- **Why:** The choice is not wrong per se — *jala* is a legitimate Classical Sanskrit word for water — but the contrast with vsa requires comment. The Vedic entry correctly cites *āpaḥ* (आपः, the canonical Vedic word for water, f. plural *āpas*; RV passim). The Classical *jalam* is neuter nominative singular from the root *jal-*. What is absent in the data is any entry for *udakam* (उदकम्), the most frequent prose Sanskrit word for water in the Brāhmaṇas and Upaniṣads and the direct cognate of Pali *udaka* (which appears correctly in pi/pi_edu). The chain *āpaḥ → udakam → jalam* representing Vedic → early Classical → later Classical registers is lost when sa/sa_edu skip the *udaka* stage used by Pali.

---

*Total: 22 issues identified. Most critical for data integrity: issues 1–3 (systematic aspirate-marker inversion affecting all breathy-voiced stops in Sanskrit/Pali entries); issue 4 (wrong verbal person for Vedic Sanskrit citation); issues 5–9 (pi vs pi_edu showing completely different lexemes or grammatical categories across five word files). Issue 14 (visarga → ɦ) is the single largest systematic error, affecting every nominative-singular Sanskrit entry with visarga.*
