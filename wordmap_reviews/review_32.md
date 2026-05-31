# Wordmap review #32 — Hindi-Urdu / Hindustani specialist

## Reviewer self-introduction

This review applies the following reference authorities:

- Shapiro (1989) *A Primer of Modern Standard Hindi* — phonology, morphology, citation-form conventions
- McGregor (1993) *The Oxford Hindi-English Dictionary* — standard lexical forms and IPA renditions
- Platts (1884) *A Dictionary of Urdu, Classical Hindi, and English* — register and Persianate–Sanskritic distinctions
- Schmidt (1999) *Urdu: An Essential Grammar* — Urdu script, phonology, and morphosyntax
- Mohan (1990) *Trinidad Bhojpuri: A Morphological Study* — Bhojpuri citation forms vs. Hindi
- Damsteegt (1988) *Sarnami Hindustani* — Sarnami (hns) phonology, lexicon, and diaspora divergences

---

## Issues

### Issue 1 — `good.js` hi: IPA uses palatal affricate t͡ɕ where Hindi has postalveolar t͡ʃ

**File:** `words/good.js` line 82
**Data:** `hi: ["अच्छा", "at͡ɕt͡ɕʰaː"]`

Hindi अच्छा /atʃːʰaː/ is a geminate postalveolar affricate. The file renders it with the palatal IPA symbol t͡ɕ (the Japanese/Chinese consonant), which belongs to a more front articulation. Standard Hindi phonology (Shapiro 1989 §2.3; McGregor) places this consonant as postalveolar t͡ʃ, not palatal t͡ɕ. The Urdu entry on line 88 correctly uses `at͡ʃt͡ʃʰaː`.

**Correction:** change `"at͡ɕt͡ɕʰaː"` → `"at͡ʃt͡ʃʰaː"` (matching the Urdu entry's own IPA and standard descriptions).

---

### Issue 2 — `moon.js` hi: IPA uses palatal t͡ɕ again; Urdu entry also uses t͡ɕ inconsistently with IPA conventions

**File:** `words/moon.js` lines 82, 88
**Data:**
```
hi: ["चाँद", "t͡ɕãːd"]
ur: ["چاند", "t͡ɕãːd"]
```

Hindi/Urdu ch (च/چ) is postalveolar t͡ʃ, not palatal t͡ɕ. The same data entry also uses `tʃaːnd` for hns on line 83, which is the correct postalveolar symbol — making the inconsistency within a single file visible. Both hi and ur should use `t͡ʃãːd`.

**Correction:** `"t͡ɕãːd"` → `"t͡ʃãːd"` for both hi and ur.

---

### Issue 3 — `drink.js` hns: citation form `pi` is not the Sarnami infinitive

**File:** `words/drink.js` line 83
**Data:** `hns: ["pi", "pi"]`

Sarnami (hns), as documented in Damsteegt (1988), forms its verb citation/infinitive with a suffix analogous to its Bhojpuri-Awadhi source. The bare stem `pi` corresponds to the imperative singular or the bare root, not a citation/infinitive form. The infinitive in Sarnami is `piibe` or `piyab` (parallel to Bhojpuri पिए/piye being the subjunctive, not an infinitive either — see Issue 4). Presenting the bare root as the entry is inconsistent with all other verb entries in the file, which use full infinitive/dictionary forms (hi पीना, ur پینا). The display entry `pi` lacks the -na/-be morpheme that marks it as a verb citation form.

**Correction:** Verify Damsteegt (1988) §verbal morphology; update to `piibe` or the attested Sarnami infinitive, and flag that hns citation convention differs.

---

### Issue 4 — `drink.js` bho: `पिए` is a subjunctive/conjunctive form, not the Bhojpuri infinitive

**File:** `words/drink.js` line 482
**Data:** `bho: ["पिए", "pɪe"]`

Mohan (1990) describes Bhojpuri verb citation forms ending in `-al` (past participle base) or the infinitive in `-e` / `-ab`. The form पिए /pie/ is a subjunctive or conjunctive participle form ("having drunk"), not the infinitive dictionary form. The standard Bhojpuri infinitive is **पिअल** (pial) or **पियाव** in some dialects, or at minimum **पियब** (piyab) as the prospective/infinitive that parallels the Maithili and Awadhi forms shown in the same file (mai पीयब, awa पीई). Using पिए as a citation form treats Bhojpuri like Hindi and misrepresents its morphological system.

**Correction:** Replace with the Bhojpuri infinitive; cross-check against Mohan (1990).

---

### Issue 5 — `eat.js` hns: `khaae` is a conjunctive participle, not a Sarnami infinitive

**File:** `words/eat.js` line 83
**Data:** `hns: ["khaae", "kʰaːe"]`

Parallel to Issue 3: `khaae` in Sarnami/Bhojpuri morphology is the conjunctive participle ("having eaten"), not the citation/infinitive form. The Sarnami infinitive for 'eat' would be `khaabe` or equivalent. Using the conjunctive participle as the citation form is inconsistent with the Hindi (`khānā`) and Urdu (`kʰānā`) infinitive conventions and misrepresents Sarnami verbal morphology as documented in Damsteegt (1988).

**Correction:** Replace with the attested Sarnami infinitive form.

---

### Issue 6 — `eat.js` bho: `खाए` is conjunctive participle, not Bhojpuri infinitive

**File:** `words/eat.js` line 482
**Data:** `bho: ["खाए", "kʰaːe"]`

Same issue as eat.js hns: खाए is the conjunctive participle in Bhojpuri ("having eaten"), not the infinitive citation form. The Bhojpuri infinitive is **खाइब** (khāib) or **खाएब** (khāeb), which the Maithili entry in the same file actually shows correctly (mai खाएब). The Bhojpuri entry should match this pattern.

**Correction:** `बho: ["खाइब", "kʰaːib"]` or the attested infinitive per Mohan (1990).

---

### Issue 7 — `love.js` ur: `محبت` transcribed as `mohabːat` — vowel quality error

**File:** `words/love.js` line 88
**Data:** `ur: ["محبت", "mohabːat"]`

Urdu محبت is transcribed from Arabic *muħabbat* (root ح-ب-ب). The first vowel in standard Urdu pronunciation is /ə/ or /ʊ/ (short u), not /o/. Schmidt (1999) and Platts clearly give the form as /mʊħabbat/ or /məħabbat/. The /o/ transcription implies a long mid vowel that is not present. Additionally, the medial consonant is the Arabic ħ (voiceless pharyngeal fricative), absent from the transcription entirely — though in colloquial Urdu it may reduce, the citation form should reflect /ħ/.

**Correction:** `"mohabːat"` → `"mʊħabbat"` (or at minimum `"mʊhabbat"` if the pharyngeal is treated as elided in spoken Urdu citation, but /o/ is wrong regardless).

---

### Issue 8 — `father.js` ur: `والد` transcribed as `vaːlid` — wrong initial consonant

**File:** `words/father.js` line 88
**Data:** `ur: ["والد", "vaːlid"]`

Urdu والد begins with wāw (و), which in Urdu is /w/, not /v/. The /v/ ~ /w/ variation exists in Urdu as a marginal allophone, but the standard citation form in Urdu phonology (Schmidt 1999 §phonology) is /waːlid/. Transcribing with /v/ reflects Hindi pronunciation tendencies (where /w/ ~ /v/ merger is common) or over-Persianization, but the standard Urdu dictionary form is /waːlid/.

**Correction:** `"vaːlid"` → `"waːlid"`.

---

### Issue 9 — `tree.js` hns: Romanization `ped` with IPA `peɖ` — retroflex mark inconsistency vs. Hindi

**File:** `words/tree.js` line 83
**Data:** `hns: ["ped", "peɖ"]`

Hindi पेड़ ends in the retroflex flap /ɽ/ (ड़), not the retroflex stop /ɖ/. The IPA `peɖ` uses the retroflex stop symbol ɖ, but the Devanagari spelling पेड़ and standard Hindi phonology dictate /peːɽ/, with the retroflex flap ɽ. The hi entry on line 82 correctly uses `"peːɽ"`. The hns entry uses a different (incorrect) IPA symbol ɖ. Sarnami inherited this word from Bhojpuri/Awadhi; both preserve the flap ɽ.

**Correction:** `"peɖ"` → `"peɽ"` (retroflex flap, matching hi).

---

### Issue 10 — `tree.js` hi: missing vowel length on `peːɽ` vs. Romanization convention

**File:** `words/tree.js` line 82
**Data:** `hi: ["पेड़", "peːɽ"]`

Minor inconsistency: the hi IPA correctly marks vowel length (`peːɽ`), but the hns romanization `ped` implies a short vowel without length marker. The Sarnami descendant word for 'tree' preserves the long /eː/ from the source. While this is a romanization (not IPA) convention issue, having `ped` vs. the IPA `peɖ` (Issue 9) compounds the confusion. The romanization should ideally be `peeR` (Damsteegt-style) or at minimum be consistent with the IPA.

---

### Issue 11 — `thanks.js` hi: transcription `dʰanjaʋaːd` — approx correct but ʋ vs. w/v allophone not flagged

**File:** `words/thanks.js` line 82
**Data:** `hi: ["धन्यवाद", "dʰanjaʋaːd"]`

This is borderline: the medial consonant in धन्यवाद is व, which in standard Hindi is the labiodental approximant /ʋ/ (as written). This is correct per McGregor. However, the Bhojpuri entry on line 482 uses `dʱənjəʋaːd` — which applies breathy-voice marking to the initial dh but also preserves ʋ, while Maithili, Awadhi, and Magahi all use `dʱənjəbaːd` (with /b/). This shows that in eastern dialects the medial consonant becomes /b/. The hi ʋ is correct for Standard Hindi; the discrepancy is consistent across the file. The only small concern is that the schwa reduction in `dʰanjaʋaːd` should produce /dʱənjwaːd/ or /dʰənjawaːd/ — the full-vowel rendering of the prefix syllable should be /ə/, not /a/. The first syllable धन् is /dʰən/ with reduced schwa, not /dʰan/ as if it had a full /a/.

**Correction:** Consider `"dʰənjəwaːd"` or `"dʰənjawaːd"` — the धन syllable carries a schwa, not /a:/.

---

### Issue 12 — `thanks.js` hns: `dhanyabaad` uses -baad instead of expected -vaad/waad

**File:** `words/thanks.js` line 83
**Data:** `hns: ["dhanyabaad", "dʰanjabaːd"]`

Sarnami is a Caribbean Hindustani with Bhojpuri-Awadhi roots. Damsteegt (1988) attests the word as **dhaniyawaad** or **dhanyawaad** — the final element derives from Hindi/Urdu *vaad* (वाद/واد, meaning 'speech/expression'), not *baad* (meaning 'after'). The eastern dialect (and Bhojpuri) shift of v > b is attested, so *dhanyabaad* may reflect actual Sarnami phonology. However, the IPA `dʰanjabaːd` must then also be correct. The key flag is: if the Romanization shows `b`, the entry should note this as a Sarnami phonological variant of the Hindi/Urdu form with /v/ or /w/. As-is it looks like an error rather than a documented b < v shift.

**Flag:** Add a note confirming b < v is the attested Sarnami (or source Bhojpuri) form, not a typo.

---

### Issue 13 — `hello.js` hns: `namaste` — Sarnami standard greeting is more typically `namasté` or `salaam`, not Sanskrit-register namaste

**File:** `words/hello.js` line 83
**Data:** `hns: ["namaste", "namaste"]`

The Sarnami community in Suriname, as documented by Damsteegt (1988) and in descriptions of Surinamese Hindustani culture, uses *namasté* with final stress as the primary greeting, which has been reinforced by the Hindu cultural identity in the diaspora. This is acceptable. However, the IPA transcription `namaste` (no final stress or length marking) is underspecified — the final /eː/ in Sarnami has a quality distinct from Sanskrit-inherited forms, typically closer to [e] or [eː]. Compare hi IPA `namasteː` (line 82) which marks the final long vowel. The hns IPA should mirror the actual vowel quality.

**Correction:** `"namaste"` (IPA) → `"namasteː"` or at minimum align with the hi IPA on line 82.

---

### Issue 14 — `hello.js` bho: `प्रणाम` — Sanskritic register, not the most common Bhojpuri everyday greeting

**File:** `words/hello.js` line 482
**Data:** `bho: ["प्रणाम", "pɾəɳaːm"]`

While प्रणाम is used in Bhojpuri as a respectful greeting, everyday Bhojpuri speakers (Mohan 1990; fieldwork-based descriptions) more commonly use **प्रनाम** /pɾənaːm/ (with loss of retroflex ण) or the colloquial **जोहार** (*johār*) in many Bhojpuri-speaking regions. Using the tatsama Sanskrit form प्रणाम as the citation form presents the most formal/Sanskritic register rather than the vernacular Bhojpuri. This is a register mismatch parallel to using संस्कृत forms for vernacular languages elsewhere in the dataset.

**Flag/Consider:** either use जोहार (the distinctly Bhojpuri greeting attested in Bhojpuri dictionaries) or note the register explicitly.

---

### Issue 15 — `hello.js` bho: IPA `pɾəɳaːm` — retroflex nasal in Bhojpuri

**File:** `words/hello.js` line 482
**Data:** `bho: ["प्रणाम", "pɾəɳaːm"]`

The retroflex nasal ɳ in Bhojpuri pronunciation of प्रणाम is debatable. Bhojpuri phonology (Mohan 1990) shows that Sanskrit tatsama words with ण often realize it as dental /n/ in vernacular speech. The IPA ɳ may represent the orthographic form more than actual Bhojpuri phonology. If the intent is the Bhojpuri vernacular pronunciation, /n/ (prənaːm) is more accurate. If the Sanskrit citation form is intended, ɳ is defensible.

**Flag:** clarify whether this is vernacular Bhojpuri phonology or the written/tatsama form's pronunciation.

---

### Issue 16 — `mother.js` hns: `mai` — disambiguation needed; mai is also first-person pronoun in Bhojpuri/Sarnami

**File:** `words/mother.js` line 83
**Data:** `hns: ["mai", "mai"]`

In Bhojpuri and Sarnami Hindustani, *mai* / *maai* (माई) is indeed an attested word for 'mother' (also used in the Bhojpuri entry line 488 as `माई`). However, *mai* without gemination or length marking is also the first-person singular pronoun in Bhojpuri and closely related varieties ("I"). Damsteegt (1988) attests the mother form as **maai** /maːi/ with a long vowel, distinguishing it from the pronoun *mai* /mai/. The Romanization `mai` with the IPA `mai` (short vowel) conflates the two; the correct Sarnami form for 'mother' should be `maai` /maːi/ or equivalent.

**Correction:** `hns: ["maai", "maːi"]` — the long vowel is phonemically contrastive in distinguishing 'mother' from 'I'.

---

### Issue 17 — `water.js` hns: IPA `paːni` lacks final vowel length compared to hi `paːniː`

**File:** `words/water.js` line 83
**Data:** `hns: ["paani", "paːni"]`
Compare: `hi: ["पानी", "paːniː"]` (line 82)

Hindi पानी has a final long /iː/. The Sarnami entry IPA gives `paːni` with a short final /i/. Damsteegt (1988) documents Sarnami *paani* as inheriting the long final vowel from the source dialect, though there is some shortening in Surinamese Sarnami in wordfinal position. If the final vowel is genuinely shortened to /i/ in Sarnami, this should be flagged as a documented phonological difference; otherwise it is an inconsistency. The Romanization `paani` is also inconsistent — `aa` marks length in mid-position but the final /i/ is unmarked for length.

**Flag:** verify whether Sarnami final /iː/ → /i/ is attested (Damsteegt §phonology) or whether this is an oversight.

---

### Issue 18 — `dog.js` ur: `کتا` transcribed as `kuttaː` — geminate tt inconsistent with Urdu orthography

**File:** `words/dog.js` line 88
**Data:** `ur: ["کتا", "kuttaː"]`

Urdu کتا is written with a single ت (tā), not a shadda (gemination marker). The IPA `kuttaː` implies a geminate /tː/, which would be spelled کتّا in Urdu. Standard Urdu phonology (Platts; Schmidt 1999) gives /kutaː/ for کتا — a single /t/ with long final /aː/. The geminate form `kuttā` is standard Hindi (कुत्ता, with halant indicating gemination), but the Urdu script does not mark the geminate. Either the Urdu script should be کتّا (with shadda) to match the IPA `kuttaː`, or the IPA should be `kutaː` to match the written form کتا.

**Correction:** Either add shadda to Urdu: `"کتّا"` (if geminate pronunciation is intended), or correct IPA to `"kutaː"` (if the standard Urdu form without geminate is intended). The hi form correctly has कुत्ता / kuttaː.

---

### Issue 19 — `heart.js` hi and ur both show `dil` — Persianate register choice not flagged

**File:** `words/heart.js` lines 82, 88
**Data:**
```
hi: ["दिल", "dil"]
ur: ["دل", "dil"]
```

Using दिल /دل (from Persian دل) for Hindi 'heart' is a valid colloquial choice, as noted in the file's definition policy ("emotional/cognitive heart"). However, दिल is a Persianate loanword shared by both Hindi and Urdu — this is one case where Hindi and Urdu share the same lexical root rather than diverging (Platts attests it in both). The dataset correctly shows the same phonological form for both. The issue is a mild one: the definition policy says "basic emotional/cognitive heart/mind term," but for Hindi, **हृदय** (hṛday) or **मन** (man) are also frequent, and for more educated register **हृदय** is the Sanskritic term. The choice of दिल vs हृदय for hi is not flagged in the entry. This is lower severity but worth noting for consistency with the register-documentation practice.

**Flag:** add wordEvidence note that hi दिल is the Persianate colloquial form; हृदय is the Sanskritic alternative.

---

### Issue 20 — `fire.js` bho: `आगि` with IPA `aːɡɪ` — short high back vowel ɪ vs. expected ɪ or i

**File:** `words/fire.js` line 488
**Data:** `bho: ["आगि", "aːɡɪ"]`

Bhojpuri आगि ends in the suffix vowel that in Bhojpuri phonology is /ɪ/ (short, lax). Mohan (1990) describes this final vowel as a short /i/ or /ɪ/. The data uses ɪ (lax high front), which is acceptable, but note that the Maithili entry (line 574) uses `"aːɡi"` with plain /i/ for the same word structure. This inconsistency suggests the IPA quality of the final vowel is not being applied uniformly across eastern Indo-Aryan languages in the dataset.

**Flag:** standardize the IPA for this suffix vowel across Bhojpuri (bho), Maithili (mai), and Awadhi (awa) entries for fire.

---

### Issue 21 — `sun.js` hi: `suːɾad͡ʒ` — medial schwa missing; should be `suːɾəd͡ʒ` or `suːɾd͡ʒ`

**File:** `words/sun.js` line 82
**Data:** `hi: ["सूरज", "suːɾad͡ʒ"]`

Hindi सूरज — the medial vowel in -रज is orthographic /a/ (inherent vowel of ज). In standard Hindi schwa-deletion phonology (Shapiro 1989 §schwa deletion), word-final inherent vowels are deleted before a consonant cluster or at word boundary. The form सूरज in normal pronunciation is /suːɾəd͡ʒ/ (with schwa-reduced medial) or /suːɾd͡ʒ/ (with full deletion). The IPA `suːɾad͡ʒ` with full /a/ vowel reads as if the inherent vowel is fully realized — this is not standard Hindi pronunciation. Compare the hns entry (line 83): `"suːɾadʒ"` has the same issue. However, Maithili (line 574) and Awadhi (line 576) both correctly give `"suːrəd͡ʒ"` with schwa, suggesting the template was set from eastern dialects and the hi entry was not independently reviewed.

**Correction:** `"suːɾad͡ʒ"` → `"suːɾəd͡ʒ"` (schwa) or `"suːɾd͡ʒ"` (full deletion) per standard Hindi schwa-deletion rules.

---

### Issue 22 — `sun.js` hns: `suuraj` with IPA `suːɾadʒ` — same schwa issue propagated to Sarnami

**File:** `words/sun.js` line 83
**Data:** `hns: ["suuraj", "suːɾadʒ"]`

The IPA for Sarnami also has the unreduced /a/ in the medial position (Issue 21 extended). Damsteegt (1988) records Sarnami *suuraj* with a schwa-like reduced vowel in this position. The IPA `suːɾadʒ` overstates the vowel quality.

**Correction:** `"suːɾadʒ"` → `"suːɾədʒ"`.

---

### Issue 23 — `one.js` hi: IPA `eːk` — vowel length on एक disputed; standard is short /e/

**File:** `words/one.js` line 82
**Data:** `hi: ["एक", "eːk"]`

Hindi एक 'one' — the vowel in एक is the native Hindi vowel represented by the ए akshar. In standard Hindi phonology (Shapiro 1989; McGregor), this vowel in एक is /eː/ (long) before a final consonant in a historically open syllable. The length marking `eːk` is defensible and follows some IPA transcription traditions for Hindi (cf. Ohala 1983). However, the Urdu entry (line 88) `"eːk"` and the Bhojpuri entry (line 488) `"ek"` (short) are inconsistent with each other. If एक is /eːk/ for Hindi and Urdu, then Bhojpuri, which shares this form, should also be /eːk/ or the difference should be noted. The inconsistency (long for hi/ur, short for bho) appears unintentional.

**Flag:** standardize: either all use `eːk` or add a note that Bhojpuri has undergone vowel shortening.

---

### Issue 24 — `good.js` hns: IPA `attʃʰa` — gemination consistent but vowel length on final -a missing

**File:** `words/good.js` line 83
**Data:** `hns: ["accha", "attʃʰa"]`

The hi entry correctly has `at͡ʃt͡ʃʰaː` with a final long /aː/. The Sarnami entry has `attʃʰa` with a short final /a/. In Sarnami (Damsteegt 1988), the word *acchā* is used with variable final vowel length — the final /aː/ may shorten in Sarnami prosodic environments. If this is documented shortening, it should be noted; if it is a transcription oversight, the final /aː/ should be added.

**Correction or Flag:** align with hi `at͡ʃt͡ʃʰaː` → `attʃʰaː` unless Sarnami final shortening is attested.

---

### Issue 25 — `cat.js` ur: `بلی` — missing geminate in IPA; `bilːiː` vs. written script

**File:** `words/cat.js` line 88
**Data:** `ur: ["بلی", "bilːiː"]`

Urdu بلی is written without a shadda (gemination mark), so the script form suggests /biliː/ without gemination. The IPA `bilːiː` implies a geminate /lː/. If the geminate is phonetically present (which it may be in careful speech as a contrast with بِلی /biliː/), the Urdu spelling should include shadda: بِلّی. Without the shadda, the script form and IPA are inconsistent. Hindi बिल्ली with halant correctly indicates the geminate; Urdu should either use بلّی or the IPA should be `biliː`.

**Correction:** Urdu script → `"بلّی"` (with shadda to mark geminate) if the IPA `bilːiː` is correct.

---

### Summary table

| # | File | Code | Problem type | Severity |
|---|------|------|--------------|----------|
| 1 | good.js | hi | t͡ɕ should be t͡ʃ (palatal vs. postalveolar) | Medium |
| 2 | moon.js | hi, ur | t͡ɕ should be t͡ʃ (same error in two entries) | Medium |
| 3 | drink.js | hns | bare stem `pi` not an infinitive citation form | High |
| 4 | drink.js | bho | पिए is subjunctive/conjunctive, not infinitive | High |
| 5 | eat.js | hns | khaae is conjunctive participle, not infinitive | High |
| 6 | eat.js | bho | खाए is conjunctive participle, not infinitive | High |
| 7 | love.js | ur | mohabːat — wrong vowel /o/ for Arabic-origin muħabbat | Medium |
| 8 | father.js | ur | vaːlid should be waːlid (w not v initial) | Medium |
| 9 | tree.js | hns | IPA ɖ (retroflex stop) should be ɽ (retroflex flap) | Medium |
| 10 | tree.js | hns | romanization length unmarked vs. hi/IPA | Low |
| 11 | thanks.js | hi | first syllable dʰan- should be dʰən- (schwa) | Low |
| 12 | thanks.js | hns | b < v shift in -baad should be documented | Low |
| 13 | hello.js | hns | IPA final vowel `namaste` should be `namasteː` | Low |
| 14 | hello.js | bho | प्रणाम is Sanskritic register; जोहार more vernacular | Medium |
| 15 | hello.js | bho | ɳ may be /n/ in Bhojpuri vernacular | Low |
| 16 | mother.js | hns | `mai` (short) conflates mother/pronoun; should be `maai` /maːi/ | High |
| 17 | water.js | hns | IPA `paːni` vs. hi `paːniː` — final length discrepancy | Low |
| 18 | dog.js | ur | کتا + `kuttaː` — shadda missing in script or IPA wrong | Medium |
| 19 | heart.js | hi | दिल Persianate form not flagged in register note | Low |
| 20 | fire.js | bho | ɪ vs. i inconsistency across eastern Indo-Aryan entries | Low |
| 21 | sun.js | hi | `suːɾad͡ʒ` should be `suːɾəd͡ʒ` (schwa deletion rule) | Medium |
| 22 | sun.js | hns | same schwa error propagated to Sarnami | Medium |
| 23 | one.js | bho | `ek` (short) vs. hi/ur `eːk` (long) — undocumented difference | Low |
| 24 | good.js | hns | final /a/ should be /aː/ unless Sarnami shortening documented | Low |
| 25 | cat.js | ur | بلی without shadda inconsistent with IPA bilːiː | Medium |
