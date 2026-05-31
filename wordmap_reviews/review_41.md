# Wordmap review #41 — Tibetan / Bodish dialectology specialist

## Reviewer self-introduction

I specialise in the historical phonology and synchronic dialectology of the Tibetic branch of Sino-Tibetan, drawing on: Tournadre & Sangda Dorje (2003) *Manual of Standard Tibetan* (Snow Lion); Beyer (1992) *The Classical Tibetan Language* (SUNY); Goldstein (2001) *The New Tibetan-English Dictionary of Modern Tibetan* (UC Press); DeLancey (2003) *Lhasa Tibetan* in Thurgood & LaPolla *The Sino-Tibetan Languages*; van Driem (1998) *Dzongkha* (CNWS); Bielmeier (2017) *Comparative Dictionary of Tibetan Dialects* (Verlag); and Sun (1986) *Aspects of the Phonology of Amdo Tibetan* (*Linguistics of the Tibeto-Burman Area*). My core competence covers the four major Tibetan dialect clusters — Central (Ü-Tsang/Lhasa), Khams, Amdo, Southern (Dzongkha, Sikkimese, Sherpa) — plus the archaic Western group: Ladakhi (lbj), Balti (bft), and Purik; together with Old/Classical Tibetan orthography and Wylie transliteration conventions.

---

## Issues found

### 1. `bft` — love — completely wrong lexical entry (ཤི "to die")
- **File:** `words/love.js` line 185
- **Current:** `["ཤི", "ʃi"]`
- **Expected:** a Balti word for love/affection, e.g. `["དགའ་བ", "gaba"]` or the locally attested `["མུག་ཚར", "muktsʰar"]`
- **Why:** ཤི (*shi*) in Classical Tibetan and in all major Tibetan dialects means "to die / death" (cf. Classical འཆི་བ *'chi ba* "death", colloquial ཤི *shi* "die"). It does not mean "love" or "affection" in any Tibetan variety. This is the most serious lexical error in the Tibetan dataset: the gloss is off by the maximum possible semantic distance. Balti love/affection typically derives from the same root as Central Tibetan དགའ (dga') "to like / love", or uses borrowed Urdu/Persian terms in some registers. The entry ཤི/*ʃi* for Balti love must be replaced.

---

### 2. `dz` — thanks — Tibetan script does not match IPA (wrong orthograph for Dzongkha)
- **File:** `words/thanks.js` line 709
- **Current:** `["བཀྲིན་ཆེ", "kadrintɕe"]`
- **Expected:** `["བཀའ་དྲིན་ཆེ", "kadrintɕe"]`
- **Why:** The IPA *kadrintɕe* correctly reflects the standard Dzongkha phrase of thanks "Ka-drin-che" from the Classical Tibetan བཀའ་དྲིན་ཆེ (*bka' drin che*, literally "great kindness"). The Tibetan orthograph supplied — བཀྲིན་ཆེ — is a malformed compression: it has collapsed the syllable boundary and omitted the འ (*a-chung*) in བཀའ. The consonant cluster ཀྲིན (*krin*) has no etymological basis here; the correct syllabic parsing is བཀའ (bka') + དྲིན (drin) + ཆེ (che). Compare: Balti `bft` correctly uses བཀའ་དྲིན་ཆེ on line 185. The Dzongkha entry's script must be corrected to བཀའ་དྲིན་ཆེ to match both the IPA and the cognate Balti form.

---

### 3. `khg` — father — aspirated script ཕ contradicts unaspirated IPA /p/
- **File:** `words/father.js` line 187
- **Current:** `["ཨ་ཕ", "apa"]`
- **Expected:** either `["ཨ་ཕ", "apʰa"]` (if script is correct) or `["ཨ་པ", "apa"]` (if IPA is correct)
- **Why:** ཕ (*pha*) is the aspirated bilabial stop in the Tibetan script, corresponding to IPA /pʰ/. The IPA transcription "apa" uses unaspirated /p/. Compare: (a) Lhasa `bo` correctly pairs ཨ་ཕ with *apʰa˥*; (b) Dzongkha `dz` and Ladakhi `lbj` correctly pair ཨ་པ (unaspirated པ) with *apa*. The Khams entry alone mixes aspirated script with unaspirated IPA. Khams Tibetan retains the aspiration contrast; if the word is pronounced /apʰa/ in Khams (as strongly implied by the shared script form with Lhasa), the IPA must read *apʰa*. If Khams has truly reduced the aspiration, the script should use unaspirated ཨ་པ. The current mismatch must be resolved.

---

### 4. `dz` — systemic: tone marks absent throughout all Dzongkha entries
- **Files:** all `words/*.js`, line ~709–716
- **Current:** all Dzongkha IPA transcriptions are toneless (e.g. *me*, *dawa*, *lekɕom*, *tɕi*, *za*, *ɲiŋ*, *tɕʰu*, etc.)
- **Expected:** tone marks on each syllable (˥ HIGH or ˩˧ LOW minimum)
- **Why:** Dzongkha has a binary H/L tone register system closely parallel to Lhasa Tibetan, extensively described in van Driem (1998). The absence of tone marks makes Dzongkha the only Bodish language in the dataset treated as atonal. This is factually incorrect and inconsistent: the immediately adjacent `bo` (Lhasa) entries carry tone marks throughout. Examples requiring correction: *me* (fire, LOW register from sonorant m-) → *me˩˧*; *tɕʰu* (water, HIGH from aspirated ch-) → *tɕʰu˥*; *tɕi* (dog, palatalized from aspirated ཁ) → *tɕi˥*; *dawa* (moon, LOW from voiced prefix) → *dawa˩˧*.

---

### 5. `khg` — systemic: tone marks absent throughout all Khams Tibetan entries
- **Files:** all `words/*.js`, line ~187
- **Current:** all Khams IPA transcriptions are toneless (e.g. *me*, *dawa*, *jakpo*, *tʰuŋ*, *za*, etc.)
- **Expected:** tone marks reflecting Khams tonal register
- **Why:** Khams Tibetan has a well-attested tone system. While the details differ from Lhasa — Khams has been described variously as having 2 to 4 tones depending on the sub-variety — the absence of any tone marking treats Khams as an atonal language, which it is not. The Khams entries mirror Lhasa phonetically in many cases but without tonal annotation, making them phonologically incomplete. Given that `bo` carries tone marks and Khams forms like *tʰuŋ*, *za*, *kʰi* are near-identical to Lhasa forms in consonants but differ in tone contour, the Khams entries need tonal annotation consistent with Khams tonology (cf. Bielmeier 2017).

---

### 6. `lbj` — systemic: tone marks absent throughout all Ladakhi entries
- **Files:** all `words/*.js`, line ~186
- **Current:** all Ladakhi IPA transcriptions are toneless (e.g. *tɕʰu*, *kʰi*, *tʰuŋ*, *za*, *ɲiŋ*, etc.)
- **Expected:** tonal annotation for Ladakhi
- **Why:** Ladakhi has a phonemic pitch-accent / register tone system that distinguishes minimal pairs. Although Ladakhi tonology has been analysed as a two-register system (high vs. low, with some analyses adding falling contours), it is unambiguously not toneless. Treating Ladakhi as atonal is linguistically inaccurate. At a minimum, the same H/L register notation used for `bo` should be applied to `lbj` entries, making the dataset internally consistent across Central and Western Tibetan.

---

### 7. `bo` — thanks — wrong vowel in རྗེ syllable (*t͡ɕi* for expected *t͡ɕe*)
- **File:** `words/thanks.js` line 184
- **Current:** `["ཐུགས་རྗེ་ཆེ", "tʰuːt͡ɕi˥ t͡ɕʰe˥"]`
- **Expected:** `["ཐུགས་རྗེ་ཆེ", "tʰukdʑe˥ t͡ɕʰe˥"]` or `["ཐུགས་རྗེ་ཆེ", "tʰukt͡ɕe˥ t͡ɕʰe˥"]`
- **Why:** རྗེ (*rje*) contains the vowel *e* (Tibetan gigu + a-chen vowel chain gives *e*). There is no phonological rule in Lhasa Tibetan that shifts *rje* → [tɕi] — the vowel /e/ is preserved in the syllable འུགས་རྗེ→ [tɕe] even when the r-superfix induces affrication of j → tɕ. Goldstein (2001) and Tournadre (2003) both transcribe ཐུགས་རྗེ་ཆེ as */tʰukt͡ɕe t͡ɕʰe/* or */tʰukdʑe tɕʰe/*. The IPA *t͡ɕi* is an unexplained vowel substitution. Additionally, the long vowel notation *tʰuː* for ཐུགས (thugs) is unusual: in Lhasa, ཐུགས before རྗེ normally surfaces as a short syllable with unreleased stop coda [tʰuk], not a lengthened vowel.

---

### 8. `lbj` — thanks — ཆེ loses aspiration (/tɕe/ for expected /tɕʰe/)
- **File:** `words/thanks.js` line 186
- **Current:** `["ཐུགས་རྗེ་ཆེ", "tʰuktɕetɕe"]`
- **Expected:** `["ཐུགས་རྗེ་ཆེ", "tʰuktɕetɕʰe"]`
- **Why:** ཆེ (*che*) contains the aspirated palatal initial ཆ, corresponding to IPA /tɕʰ/ in all Tibetan dialects. In Ladakhi, the aspiration contrast is phonemically active. The transcription *tɕe* (unaspirated) for ཆེ is incorrect; the final syllable must be *tɕʰe*. Compare: Lhasa `bo` correctly transcribes the same ཆེ as *t͡ɕʰe˥*.

---

### 9. `lbj` — hello — IPA uses postalveolar /dʒ/ for Tibetan alveolo-palatal /dʑ/
- **File:** `words/hello.js` line 186
- **Current:** `["ཇུ་ལེ", "dʒule"]`
- **Expected:** `["ཇུ་ལེ", "dʑule"]`
- **Why:** The Tibetan letter ཇ (*ja*) represents a voiced palatal affricate, which in modern phonological description of Tibetan dialects corresponds to IPA /dʑ/ (alveolo-palatal), not /dʒ/ (postalveolar). The distinction matters: /dʒ/ is the English "j" (as in *judge*) — postalveolar; /dʑ/ is the Japanese じ (*ji*) — palatal. Ladakhi Julley (ཇུ་ལེ) uses the alveolo-palatal onset throughout all dialectological descriptions of Ladakhi. The IPA symbol /dʒ/ misrepresents the place of articulation.

---

### 10. `khg` — hello — alveolar flap /ɾ/ inappropriate for Khams Tibetan
- **File:** `words/hello.js` line 187
- **Current:** `["ཨ་རོ", "aɾo"]`
- **Expected:** `["ཨ་རོ", "aro"]` or `["ཨ་རོ", "aɹo"]`
- **Why:** The IPA symbol /ɾ/ denotes an alveolar tap or flap, a sound primarily found in Spanish, Portuguese, and some other Romance languages. Tibetan dialects — including Khams — do not use an alveolar tap. The Tibetan letter ར (*ra*) in Khams is realised as a retroflex or rhotic approximant [ɹ] or [r] (trill/approximant), not a flap. Using /ɾ/ imports a Romance IPA symbol into a Tibetan context where it is phonetically and typologically unmotivated. The same symbol ɾ also appears in the `lad` (Ladino) entries in this file — it is correct there; the Khams entry must have been transcribed from a Romance-language template in error.

---

### 11. `bo` — hello — *t͡ʂ* should be retroflex *ʈʂ* for bkra cluster
- **File:** `words/hello.js` line 184
- **Current:** `["བཀྲ་ཤིས་བདེ་ལེགས", "t͡ʂaɕi˥ telek˩˧"]`
- **Expected:** `["བཀྲ་ཤིས་བདེ་ལེགས", "ʈʂaɕi˥ telek˩˧"]`
- **Why:** The Tibetan consonant cluster བཀྲ (*bkra*) involves a *ra btags* subscript (ར as subscript under ཀ). The ra-subscript in Tibetan historically and in modern Lhasa realisation produces retroflexion of the initial consonant. The resulting sound is a retroflex affricate IPA /ʈʂ/ — written with the retroflex hook, *not* with a tie-bar t͡ʂ. The tie-bar notation *t͡ʂ* represents a dental stop + postalveolar fricative affricate (English *ch* territory), whereas *ʈʂ* is a single retroflex affricate. Tournadre & Sangda Dorje consistently use *ʈʂ* for this Tibetan sound. The tie-bar symbol conflates two IPA characters that represent a categorically different place of articulation.

---

### 12. `bft` — eat — Balti should preserve voiced /z/, not devoice to /s/ like Lhasa
- **File:** `words/eat.js` line 185
- **Current:** `["ཟ", "sa"]`
- **Expected:** `["ཟ", "za"]`
- **Why:** ཟ (*za*) has a voiced sibilant initial /z/. In Lhasa Tibetan, voiced consonants are devoiced with compensatory low-register tone: ཟ → [sa˩˧]. However, Balti is characterised in the literature (Bielmeier 2017; Emmeneau 1980 on Balti) precisely by its *conservative* preservation of voiced consonants that are devoiced in Central Tibetan. The parallel entries for Ladakhi (lbj) and Khams (khg) both correctly give *za* (preserving the voiced sibilant). The Balti transcription *sa* appears to have mistakenly copied the Lhasa devoiced form. Compare: `lbj eat` = *za*; `khg eat` = *za*; `bft eat` = *sa* (anomalous).

---

### 13. `bo` — tree — compound ཤིང་སྡོང is Classical/literary; ཤིང alone is the everyday word
- **File:** `words/tree.js` line 184
- **Current:** `["ཤིང་སྡོང་", "ɕiŋ˥toŋ˥"]`
- **Expected:** `["ཤིང་", "ɕiŋ˥"]`
- **Why:** ཤིང་སྡོང (*shing sdong*) literally means "tree-trunk" or "woody plant stump" — a Classical Tibetan compound. The everyday modern Lhasa word for "tree" is simply ཤིང (*shing*) [ɕiŋ], as used in all Tibetan dialect entries in the same file (bft, lbj, khg, dz all give ཤིང without the compound). Goldstein (2001) lists ཤིང as the primary colloquial term for "tree / wood" and ཤིང་སྡོང as a more formal / botanical register term. Using the compound for the Lhasa entry while all dialect equivalents use the simplex creates an inconsistency and makes the Lhasa entry uncharacteristically literary compared to its cognates.

---

### 14. `bo` — thanks — long vowel *tʰuː* for ཐུགས lacks phonological motivation
- **File:** `words/thanks.js` line 184
- **Current:** `["ཐུགས་རྗེ་ཆེ", "tʰuːt͡ɕi˥ t͡ɕʰe˥"]`
- **Why (supplementing issue 7):** ཐུགས (*thugs*) has a short high vowel /u/ followed by a final -gs cluster. In Lhasa, the -gs coda reduces to an unreleased stop [k] or glottal stop [ʔ]: ཐུགས → [tʰuk] or [tʰuʔ]. Vowel lengthening (:) as compensation for lost coda is not a feature of standard Lhasa Tibetan phonology (unlike, say, Cantonese where it is systematic). Tournadre transcribes ཐུགས་རྗེ་ཆེ as [tʰukdʑe tɕʰe] with a short vowel. The notation *tʰuː* introduces an unattested lengthened vowel and should be corrected to *tʰuk* with unreleased coda.

---

### 15. `dz` — dog — aspiration potentially lost in palatalization of ཁྱི
- **File:** `words/dog.js` line 709
- **Current:** `["ཁྱི", "tɕi"]`
- **Expected (disputed):** `["ཁྱི", "tɕʰi"]`
- **Why:** ཁྱི (*khyi*) contains the aspirated velar ཁ (*kha*). In Dzongkha phonology, aspirated velar + palatal glide (*kʰy-*) undergoes palatalization to an affricate. The question is whether the aspiration is preserved: *kʰy* → *tɕʰ* or *tɕ*. van Driem (1998) gives [tɕʰi] for ཁྱི in Dzongkha (aspirated affricate, maintaining the aspiration from ཁ). The same palatalization applies to ཁྱིམ (*house*) at line 716, transcribed *tɕim* — also potentially missing aspiration. If van Driem's transcription is taken as authoritative, both dz *dog* and dz *house* should use the aspirated *tɕʰ*.

---

### 16. `dz` — house — same aspiration question as dog (ཁྱིམ → *tɕim* vs. *tɕʰim*)
- **File:** `words/house.js` line 716
- **Current:** `["ཁྱིམ", "tɕim"]`
- **Expected (disputed):** `["ཁྱིམ", "tɕʰim"]`
- **Why:** See issue 15. ཁྱིམ (*kʰyim*) has the same aspirated ཁ initial. If Dzongkha palatalization preserves aspiration (as van Driem documents), the IPA should be *tɕʰim* not *tɕim*. The dog and house entries should be made consistent with each other and with the authoritative source on Dzongkha.

---

### 17. `bo` — drink — verb stem form འཐུང vs. colloquial ཐུང; tone register ambiguity
- **File:** `words/drink.js` line 184
- **Current:** `["འཐུང་", "tʰuŋ˥"]`
- **Note:** `bft` at line 185 uses `["ཐུང་", "tʰuŋ"]` (without འ prefix)
- **Why:** The འ (*a-chung*) prefix in འཐུང (*'thung*) marks the present/imperative verb stem in Classical Tibetan; the aspirated ཐུང (*thung*) without prefix is the past/perfect stem. In modern Lhasa colloquial speech "to drink" is uniformly [tʰuŋ] from the root, with the འ prefix lost. The script འཐུང represents a Classical orthographic form. Whether to use the Classical spelling འཐུང or the modern phonologically transparent ཐུང (as Balti does) is a lexicographic choice, but the inconsistency between `bo` (Classical script) and `bft` (modern/bare root script) for what is the same root form is noteworthy and may indicate inconsistent sourcing.

---

### 18. `lbj` — moon — conservative cluster *zlawa* is correct but merits annotation
- **File:** `words/moon.js` line 186
- **Current:** `["ཟླ་བ", "zlawa"]`
- **Why (positive note with caveat):** The Ladakhi form *zlawa* correctly preserves the Classical Tibetan consonant cluster *zl-* (from ཟླ་བ *zla ba*), demonstrating Ladakhi's conservative phonology vs. Lhasa *tawa* and Khams/Balti *dawa*. This is linguistically accurate and highlights the archaic stratum of Western Tibetan. However, the initial [zl-] cluster in Ladakhi is specifically a *voiced lateral-initial cluster preceded by a fricative*, realised as [zl] or [dl] depending on sub-variety (Leh vs. Zanskar). Sources including Bielmeier (2017) note variation: some Ladakhi speakers realise this as [la] or [dla]. Transcribing uniformly as *zlawa* for all Ladakhi reflects the most conservative/prestigious Leh variety and is acceptable, but this should be noted as Leh standard rather than pan-Ladakhi.

---

### 19. Amdo Tibetan (ISO 639-3: *adx* or dialect codes) absent from dataset entirely
- **Files:** all `words/*.js`
- **Current:** no `adx` or Amdo-labelled entries
- **Why:** Amdo Tibetan (spoken by ~1.5M speakers in Qinghai, Gansu, Sichuan) is one of the four major Tibetan dialect clusters and the most typologically distinctive: it is **completely non-tonal** (the only major Tibetic dialect without tone), preserves the largest inventory of consonant clusters (e.g., Classical *bzhi* "four" → Amdo [uʐe] or [ɲʑi], vs. Lhasa [ʐi˩˧]; Classical *dgu* "nine" → Amdo [rku] or [ɡu], vs. Lhasa [ku˩˧]). Its absence from the dataset is a significant gap: the non-tonal Amdo variety is typologically essential for demonstrating the full range of Tibetic phonological diversity, and its presence would provide a strong contrastive counterpoint to tonal Lhasa.

---

### 20. `khg` — sun, moon, good, hand, eye — Khams forms identical to Lhasa; dialectal differentiation missing
- **Files:** `words/sun.js`, `words/moon.js`, `words/good.js`, `words/hand.js`, `words/eye.js`
- **Current:** khg and bo give identical IPA (e.g. sun: both *ɲima*; eye: both *mik*; hand: both *lakpa*)
- **Why:** While Khams Tibetan shares much lexicon with Central Tibetan, its phonology is distinctly different: Khams preserves voiced obstruents (*g-, d-, b-, dz-, z-*) that are devoiced in Lhasa; it has different tone contours; it may have different vowel realisations. The current Khams entries in sun, moon (dawa vs. Lhasa tawa is different — that's correct), good, hand, and eye are phonetically identical to Lhasa despite these languages being mutually unintelligible in natural speech. At minimum, the Khams tonal contours differ from Lhasa even where the root consonants happen to be identical (e.g. *ɲima* HIGH in Lhasa may have a different contour in Khams). The dataset gives the impression that Khams is merely a tone-less variant of Lhasa.

---

### 21. `bo` — hello — two-word IPA uses a single tone mark mid-utterance, ambiguous scope
- **File:** `words/hello.js` line 184
- **Current:** `["བཀྲ་ཤིས་བདེ་ལེགས", "t͡ʂaɕi˥ telek˩˧"]`
- **Why:** The transcription places ˥ at the end of the first word (*t͡ʂaɕi˥*) and ˩˧ at the end of the second (*telek˩˧*). This notation implies the tone mark applies to the entire word/prosodic unit rather than individual syllables. However, Tibetan tone operates syllable by syllable: བཀྲ (*bkra*) and ཤིས (*shis*) are separate syllables with potentially different tones. ཤིས (*shis*, aspirated sh-) → HIGH (˥); བཀྲ (*bkra*, voiced prefix b + voiceless k) → also HIGH (˥) by Tournadre's analysis. Both syllables of *tashi* are HIGH. Similarly, བདེ (*bde*) and ལེགས (*legs*) are separate syllables: both are LOW/falling from their voiced prefixes. Per-syllable tone marking (e.g. *ʈʂa˥ɕi˥ te˩˧lek˩˧*) would be more phonologically precise and consistent with how the rest of the dataset handles multi-syllable Tibetan words.

---

### 22. `lbj` — cat — *pila* devoicing of byi- noted; but comparison with bft *bjila* shows different treatment of same script
- **File:** `words/cat.js` lines 185–186
- **Current:** `bft: ["བྱི་ལ", "bjila"]` vs. `lbj: ["བྱི་ལ", "pila"]`
- **Why (informational issue):** The same Tibetan script བྱི་ལ (*byi la*) is transcribed as *bjila* (Balti) and *pila* (Ladakhi). This correctly reflects the phonological difference: Balti preserves the voiced labial onset [bj-], while Ladakhi devoices the cluster to [p-]. This is a genuine linguistic distinction and the transcriptions are appropriate. However, Dzongkha at line 709 has `["བྱི་ལ", "bila"]` — Dzongkha gives a voiced unaspirated [b-] for the same script form, i.e. the b- is preserved but the palatal glide [y/j] is lost. Dzongkha thus occupies a phonological middle position. These three divergent realisations of the same script form (Balti *bjila*, Ladakhi *pila*, Dzongkha *bila*) are instructive evidence of the Bodish dialect chain — the data is largely correct here, but the Dzongkha loss of the palatal glide ([bj] → [b]) may warrant a note or source citation.
