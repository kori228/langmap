# Wordmap review #05 — Indo-Aryan + Dravidian specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a comparative linguist specialising in Indo-Aryan and Dravidian phonology with a focus on historical morphophonology. My monographs cover retroflex consonant typology across Indo-Aryan, schwa-deletion in Hindi-Urdu, Dravidian agglutination and gemination patterns, Sanskrit sandhi and the PIE → Proto-Indo-Iranian → Indo-Aryan chain, and Dravidian–Indo-Aryan convergence as a Sprachbund phenomenon. Primary references used in this review: Masica (1991) *The Indo-Aryan Languages* (CUP); Krishnamurti (2003) *The Dravidian Languages* (CUP); Cardona & Jain (2003) *The Indo-Aryan Languages* (Routledge); Turner (1962–1966) *CDIAL*; Burrow & Emeneau (1984) *DEDR* (2nd ed.); Schiffman (1999) *A Reference Grammar of Spoken Tamil*; Monier-Williams *Sanskrit-English Dictionary*; Andronov (2003) *A Grammar of the Brahui Language*; Grierson *Linguistic Survey of India* for minor IA varieties.

---

## Issues found

### 1. `bn` — thanks — voiced aspirate ধ transcribed with voiceless-aspirate symbol /dʰ/

- **File:** `words/thanks.js` line 86
- **Word:** ধন্যবাদ
- **Current IPA:** `dʰɔnnobad`
- **Expected IPA:** `dʱɔnnobad`
- **Source:** Bengali phoneme inventory — ধ is the **voiced** aspirated dental stop /d̪ʱ/, not the voiceless aspirated /d̪ʰ/. The IPA diacritic `ʰ` attached to a voiced stop yields a voiceless aspirate (a logical contradiction for Bengali); the correct diacritic is `ʱ` (breathy/murmured voice). Compare: Nepali and Marathi entries in the same file correctly use `/dʱ/` for ध.

---

### 2. `hi` / `sa` / `sa_edu` — thanks — voiced aspirate ध transcribed with voiceless-aspirate symbol /dʰ/

- **Files:** `words/thanks.js` lines 82, 84, 85
- **Words:** धन्यवाद (hi, sa), धन्यवादाः (sa_edu)
- **Current IPA:** `dʰanjaʋaːd` / `dʰanjaʋaːdaɦ` / `dʰanjaʋaːdaːɦ`
- **Expected IPA:** `dʱ…` (all three)
- **Source:** Sanskrit and Hindi ध = voiced aspirated dental /d̪ʱ/. The same error as issue #1. Nepali (`dʱənjəbaːd`), Marathi (`dʱənjəʋaːd`), and Assamese (`dʱɔnjɔbad`) in the same file use the correct `ʱ` diacritic. The inconsistency suggests a data-entry error at the hi/sa/sa_edu layer.

---

### 3. `sa_edu` — good — voiced aspirate ध transcribed with voiceless-aspirate symbol /dʰ/

- **File:** `words/good.js` line 84
- **Word:** साधु
- **Current IPA:** `saːdʰu`
- **Expected IPA:** `saːdʱu`
- **Source:** Sanskrit ध = /d̪ʱ/ (voiced aspirated). साधु /saːdʱu/ (Monier-Williams s.v. sādhu). The Vedic Sanskrit entry in the same file has `saːdhu` (raw ASCII digraph — see issue #4 below), making this a triply inconsistent set.

---

### 4. `vsa` — good — ध transcribed with raw ASCII digraph "dh" rather than IPA

- **File:** `words/good.js` line 1037
- **Word:** साधु
- **Current IPA:** `saːdhu`
- **Expected IPA:** `saːdʱu`
- **Source:** `dh` is not a valid IPA token; it parses as /d/ + /h/ in sequence, not as the aspirated stop. All other aspirated consonants in the dataset use the superscript modifier (e.g. `kʰ`, `tʰ`). Should be `dʱ` to match the voiced aspirated phoneme.

---

### 5. `bn` — good / love — voiced aspirate ভ transcribed with voiceless-aspirate symbol /bʰ/

- **Files:** `words/good.js` line 86; `words/love.js` line 86
- **Words:** ভালো / ভালোবাসা
- **Current IPA:** `bʰalo` / `bʰalobasa`
- **Expected IPA:** `bʱalo` / `bʱalobasa`
- **Source:** Bengali ভ = voiced aspirated bilabial /bʱ/. The same systematic error as issues #1–#3. Assamese and Odia (same dataset) correctly use `/bʱ/` for ভ/ଭ in the same file (`bʱal`, `bʱɔlɔ`).

---

### 6. `tcy` — father / mother — appa/amma labels are swapped

- **Files:** `words/father.js` line 1000; `words/mother.js` line 1006
- **father.js current:** `tcy: ["ಅಮ್ಮೆ", "ammeː"]` — *amme* = MOTHER
- **mother.js current:** `tcy: ["ಅಪ್ಪೆ", "appeː"]` — *appe* = FATHER
- **Expected:** father.js → ಅಪ್ಪೆ /appeː/; mother.js → ಅಮ್ಮೆ /ammeː/
- **Source:** Tulu (Dravidian): *amme* (ಅಮ್ಮೆ) = mother; *appe* (ಅಪ್ಪೆ) = father — consistent with the pan-Dravidian root pattern *ammā* (DEDR 168) for mother and *appā* (DEDR 184) for father (cf. Kannada ಅಮ್ಮ/ಅಪ್ಪ, Telugu అమ్మ/అప్ప, Tamil அம்மா/அப்பா). The two entries are transposed.

---

### 7. `rmy` — water — *paji* is not an attested Vlax Romani form

- **File:** `words/water.js` line 335
- **Word:** paji
- **Current IPA:** `paji`
- **Expected word/IPA:** `pani` / `pani`
- **Source:** In all well-documented Vlax Romani dialects (Kalderash, Lovari, Ursari, Churari), "water" is *pani* — a direct Indo-Aryan retention from Skt./Pkt. *pānī* (CDIAL 8223). The form *paji* does not appear in Boretzky & Igla (1994) *Wörterbuch Romani*, nor in Matras (2002) *Romani: A Linguistic Introduction*. This looks like a transcription error or typo for *pani*.

---

### 8. `pi` — good — *sundara* means "beautiful," not "good"

- **File:** `words/good.js` line 521
- **Current word:** सुन्दर / *sundara*
- **Current IPA:** `sundara`
- **Expected word:** *sādhu* or *kusala* / `saːdʱu` or `kusala`
- **Source:** Pali *sundara* = beautiful, fine-looking (PED s.v.). The semantically appropriate term for "good/skillful/beneficial" in Pali is *kusala* (as the `pi_edu` entry correctly gives) or *sādhu*. The `pi` (Devanagari Pali) and `pi_edu` entries present completely different lexemes for the same concept, with `pi` being the wrong semantic field.

---

### 9. `pi` — house — घर is a Hindi/Devanagari form, not Pali orthography for *ghara*

- **File:** `words/house.js` line 528
- **Word:** घर
- **Current IPA:** `ɡʰara`
- **Expected IPA:** `ɡʱara` (if the word is Pali *ghara*)
- **Source:** (a) Pali *ghara* written in Devanagari should be घर, which is formally identical to Hindi घर — the Devanagari script entry is thus ambiguous at best, and the IPA `ɡʰara` uses the **voiceless** aspirated /ɡʰ/ for घ, whereas Pali/Sanskrit घ = voiced aspirated /ɡʱ/. This is the same voiced-vs-voiceless aspirate error pattern seen in issues #1–#5. (b) The `pi_edu` entry gives *gehā* `ɡehaː`, a different Pali word (< Skt. gṛha via gaha), making the two entries non-parallel.

---

### 10. `pi` — eye — IPA affricate and gemination differ from `pi_edu` for the same word

- **File:** `words/eye.js` lines 521–522
- **pi:** चक्खु `tʃakkʰu` — uses post-alveolar /tʃ/, writes geminate as explicit double-k
- **pi_edu:** cakkhu `tɕakːʰu` — uses palatal /tɕ/, writes geminate as length-mark /kː/
- **Expected:** Pali *cakkhu* contains the palatal /tɕ/ (Sanskrit *cakṣu-* → Pali *cakkhu*); the correct affricate is /tɕ/ and the geminate should be /kː/. The `pi` entry is doubly inconsistent: wrong affricate symbol and different gemination notation for an identical word.

---

### 11. `vsa` — tree — व transcribed as /w/ instead of /ʋ/ or /v/

- **File:** `words/tree.js` line 1037
- **Word:** वृक्षः
- **Current IPA:** `wr̩kʂaɦ`
- **Expected IPA:** `vr̩kʂaɦ` (or `ʋr̩kʂaɦ`)
- **Source:** Sanskrit/Vedic व is a labio-dental approximant /ʋ/ or voiced fricative /v/ — not the bilabial approximant /w/. All other Vedic Sanskrit entries in the dataset with व use /v/ (cf. `sa: ["वृक्षः", "vɾɨkʂaɦ"]` directly above it in the same file). The lone use of /w/ in `vsa` tree is an inconsistency; even for Vedic Sanskrit, the bilabial /w/ reconstruction applies only in very specific pre-vocalic cluster environments and is not the consensus for initial/medial position.

---

### 12. `sa` / `vsa` — heart — syllabic ṛ (ृ) rendered inconsistently as /ɾɨ/ vs /r̩/

- **File:** `words/heart.js` lines 85, 1037
- **sa:** हृदयम् `hɾɨdajam` — represents ṛ as /ɾɨ/ (a tap followed by high-back vowel)
- **vsa:** हृदयम् `hr̩dajam` — represents ṛ as /r̩/ (syllabic r)
- **Expected:** /r̩/ (the IPA syllabic diacritic, U+0331 or combining subscript ring) is the standard representation of Sanskrit syllabic ṛ. The same inconsistency appears in `words/house.js` (sa/sa_edu `ɡɾɨham` vs vsa `gr̩ham`) and `words/tree.js` (sa `vɾɨkʂaɦ` vs vsa `wr̩kʂaɦ`). The ɾɨ sequence is a phonetic approximation, not standard Sanskrit IPA notation.

---

### 13. `as` — water — word-final ী (long ī) unmarked in IPA

- **File:** `words/water.js` line 487
- **Word:** পানী
- **Current IPA:** `pani`
- **Expected IPA:** `paniː` (at minimum)
- **Source:** Assamese পানী: the vowel grapheme ী marks the long /iː/ vowel in the Assamese writing system. While Assamese has reduced some length contrasts compared to Hindi (पानी /paːniː/), the final ী is consistently realized as /iː/ in careful speech. All parallel entries (hi, bn, ne, pa, or, mr, gu, bho, awa) record the length. The current `pani` drops the length entirely.

---

### 14. `mag` — water — word-final ी (long ī spelling) mismatches IPA /i/ (no length)

- **File:** `words/water.js` line 823
- **Word:** पानी
- **Current IPA:** `paːni`
- **Expected IPA:** `paːniː`
- **Source:** Magahi पानी is spelled with the long ī diacritic ी, yet the IPA renders the final vowel as short /i/. The script–IPA mismatch requires justification; if Magahi genuinely shortens the final vowel, the spelling should be पानि (as in the Maithili entry which consistently uses short-i spelling and short /i/ IPA). As written, the internal inconsistency between spelling and transcription is unexplained.

---

### 15. `as` — heart — initial হ lost in IPA; ৃ represented as /ɹ/ rather than /ɦɾ/ or /hɹ/

- **File:** `words/heart.js` line 480
- **Word:** হৃদয়
- **Current IPA:** `ɹidɔi`
- **Expected IPA:** `hɹidɔi` or `hɾidɔi`
- **Source:** Assamese হৃ (ha + vocalic ṛ): the হ provides an initial /h/ onset. While Assamese ৃ is realized closer to /i/ than Sanskrit ṛ, the initial /h/ of হ is not deleted in standard Assamese pronunciation. The transcription `ɹidɔi` loses the /h/ entirely. Compare Bengali হৃদয় `hɾidɔe̯` (same file), which retains the /h/.

---

### 16. `ta` — love — word-final ள் (dental lateral) correctly /l/ but medial lenition of த to /d/ should be noted as a systematic pattern

- **File:** `words/love.js` line 89
- **Word:** காதல்
- **Current IPA:** `kaːdal`
- **Assessment:** The IPA is **correct** — Tamil த between vowels lenites to /d/ (or /ð/ in some analyses), and final ல் is dental /l/ not retroflex ள் /ɭ/. However, the companion entry `words/thanks.js` Tamil நன்றி `nanri` (issue #17) merits attention.

---

### 17. `ta` — thanks — ற் transcribed as /r/ instead of alveolar trill /r/ or tap; the ன்+ற் cluster needs care

- **File:** `words/thanks.js` line 89
- **Word:** நன்றி
- **Current IPA:** `nanri`
- **Expected IPA:** `nand̺ɾi` or at minimum `nanɾi`
- **Source:** In Tamil, ற் in medial position after a nasal (ன்ற்) is realised as the sequence /nd̺r/ or /ndr/ (alveolar closure + trill); Schiffman (1999 §3.2) gives the rule that ன் + ற் → /ndr/. The current transcription `nanri` shows the nasal but omits the oral stop component of the cluster. The IPA should be at least `nanɾi` (with retroflex flap) or more precisely `nand̺ɾi`. Compare: Tulu (`words/thanks.js:1000`) `solmelu` — no issue there.

---

### 18. `sa_edu` — thanks — form धन्यवादाः is nominative plural, oddly formal

- **File:** `words/thanks.js` line 84
- **Word:** धन्यवादाः
- **Current IPA:** `dʰanjaʋaːdaːɦ` (also see issue #2 for the dʰ error)
- **Assessment:** The -āḥ ending marks nominative plural in Sanskrit *a*-stems (dhanyavādāḥ = "expressions of gratitude"). The expected citation form for a lexical entry for "thanks" would be the singular *dhanyavādaḥ* (as given in `sa:`) or the indeclinable *dhanyavāda*. The plural form is an unusual pedagogical choice for a single-word concept slot; the `sa:` entry correctly uses the singular.

---

### 19. `pi` — eat — खादति (Devanagari) vs `pi_edu` bhuñjati — cross-dialect mismatch with no annotation

- **File:** `words/eat.js` lines 521–522
- **pi:** खादति `kʰaːdati`
- **pi_edu:** bhuñjati `bʱuɲd͡ʒati`
- **Source:** Both *khādati* (to chew/gnaw) and *bhuñjati* (to eat/enjoy) exist in Pali (PED). However, the standard everyday verb for eating in Pali canonical texts is *bhuñjati*; *khādati* is specifically "to chew" (harder foods). The `pi` entry's preference for *khādati* over *bhuñjati* is phonologically fine but semantically narrower than the concept "eat." More critically, there is no annotation explaining why the two sub-entries give different verbs.

---

### 20. `pi` — love — पेम (general affection) vs `pi_edu` mettā (Buddhist loving-kindness) are different semantic concepts

- **File:** `words/love.js` lines 528–529
- **pi:** पेम `pema`
- **pi_edu:** mettā `metːaː`
- **Source:** *Pema* (Pali pema < Skt. preman) = affection, love (secular or personal). *Mettā* = loving-kindness, a specific Buddhist meditative virtue (one of the brahmavihāras). These are not interchangeable translations of "love." For a wordmap that represents everyday vocabulary, *pema* (pi:) is the better choice; *mettā* should be annotated as a technical term. The lack of any note on this semantic divergence is misleading.

---

### 21. `kru` — water — आम /aːm/ is the Hindi word for "mango" or "common," not Kurukh for "water"

- **File:** `words/water.js` line 582
- **Word:** आम
- **Current IPA:** `aːm`
- **Expected:** Kurukh (Oraon) word for water is *nīr* (cognate with Dravidian DEDR 3731 *nīr*) or a borrowing; certainly not आम
- **Source:** In Hindi/Urdu, आम /aːm/ means "mango" (< Skt. āmra) or "common/ordinary." In Kurukh (North Dravidian, Jharkhand/Chhattisgarh), water is *nīr* or a closely related form (cf. DEDR 3731; Grierson LSI vol. IV). The entry आम /aːm/ appears to be a data error — possibly a wrong-language substitution or a Hindi gloss that was accidentally placed in the Kurukh field.

---

### 22. `hi` — thanks — vowel quality in first syllable: /a/ vs expected schwa /ə/

- **File:** `words/thanks.js` line 82
- **Word:** धन्यवाद
- **Current IPA:** `dʰanjaʋaːd` (also see issue #2 for dʰ error)
- **Expected IPA:** `dʱənjəʋaːd` (schwa-deletion applies; the syllable धन् in connected speech is /dʱən/ not /dʱan/)
- **Source:** Hindi schwa-deletion rules (Masica 1991 §8.2; Ohala 1983): in धन्यवाद, the ध syllable bears an inherent schwa /ə/, not full /a/. Standard Hindi pronunciation is /dʱənjəʋaːd/ with deleted schwas at न् and व् positions. The transcription `dʰanjaʋaːd` with full /a/ in the first syllable does not reflect standard Hindi phonology (and conflates two errors: voicing of aspirate + vowel quality).

---

*End of review — 22 issues documented.*
