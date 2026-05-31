# Wordmap review #34 — Arabic dialectology specialist

## Reviewer self-introduction

This review draws on the following reference works:

- Holes, C. (2004). *Modern Arabic: Structures, Functions, and Varieties*. Georgetown University Press.
- Versteegh, K. (1997). *The Arabic Language*. Edinburgh University Press.
- Owens, J. (2006). *A Linguistic History of Arabic*. Oxford University Press.
- Watson, J. C. E. (2002). *The Phonology and Morphology of Arabic*. Oxford University Press.
- Mitchell, T. F. (1956). *An Introduction to Egyptian Colloquial Arabic* / *Educated Spoken Arabic in Egypt*. Oxford University Press.
- Behnstedt, P. & Woidich, M. (1985). *Die ägyptisch-arabischen Dialekte*. Wiesbaden: Reichert.
- Brill *Encyclopedia of Arabic Language and Linguistics* (2006–2009), edited by Versteegh et al.

The 20 words surveyed across up to 12 Arabic variety codes (`ar`, `ar_qur`, `ar_eg`, `ar_lev`, `ar_iq`, `ar_gulf`, `ar_ma`, `arq`, `ar_tn`, `ar_sd`, and `mey`) yield the following issues. Issues are ordered by word file, then by variety code, then by severity.

---

## Issues

### 1. `water.js` — `ar_eg`: transcription direction for the glide in ميّه

**Code:** `ar_eg: ["ميّه", "majːa"]`

The Egyptian Arabic reflex of MSA /maːʔ/ is /majja/ in citation form, but in connected speech the common realisation is [majːa] with a long palatal glide followed by short /a/. The transcription `majːa` is defensible for the citation (pause) form as documented by Mitchell (1956) and Woidich (1980). However, the IPA notation `majːa` treats `j` as the geminate consonant, which is standard. No error per se, but the Arabic script ميّه represents the geminate yāʾ followed by tāʾ marbūṭa read as /a/ in pause — the transcription is correct for the pause form. **Minor: acceptable.** But note that continuous/construct form is often [majːit] (with construct -it). This distinction is absent from the note field, which is a documentation gap.

### 2. `water.js` — `ar_lev`: ميّ with transcription `majj`

**Code:** `ar_lev: ["ميّ", "majj"]`

The Levantine (especially Damascene, Beiruti) form for water is /maj/ in common pause form, or /majj/ with geminate where a final short vowel follows in rapid speech. Transcribing the pause form as `majj` (geminate /jj/ word-finally) is **phonologically inaccurate**. Final geminates in standard Levantine phonology are degeminated word-finally (except in very marked emphatic speech). The pause form should be `/maj/`, not `/majj/`. The Arabic script ميّ retains the shadda orthographically but the phonological realisation in pause is a simple /j/. Compare Watson (2002:§4.2) on the collapse of final geminates in Levantine. **Substantive error.**

### 3. `water.js` — `ar_ma`: لما / `lma` — missing vowel quality and article assimilation

**Code:** `ar_ma: ["لما", "lma"]`

Moroccan Arabic /l-ma/ reflects assimilation of the definite article /l-/ to the invariable root /ma/ < MSA /maːʔ/ (with loss of the final hamza and vowel shortening, as expected in Maghrebi). The transcription `lma` is phonetically plausible as a reduced syllabic form but misses that the schwa is phonetically present: [lma] or [əlma]. A syllabic /l/ is possible but uncommon even in Moroccan. The prevailing phonetic form documented in Harrell (1962) and Behnstedt-Woidich is [l-ma] with a short epenthetic schwa before /l/ in initial position: [əl.ma] or [lma] with syllabic /l/. The representation `lma` (no vowel at all) is borderline acceptable but potentially misleading. The Algerian parallel `arq: ["الما", "lma"]` uses full Arabic orthography with the article, suggesting the Moroccan entry should similarly show [əl.ma]. **Minor inconsistency; documentation gap.**

### 4. `water.js` — `ar_tn`: ماء / `maː` — wrong vowel length / missing glottal

**Code:** `ar_tn: ["ماء", "maː"]`

Tunisian Arabic does not simply preserve the MSA form /maːʔ/. The Tunisian reflex is typically /maː/ with loss of the final hamza (as in the given transcription). However, Tunisian Arabic is known for strong vowel reduction in unstressed positions, and the short-vowel inventory in Tunisian is significantly reduced. For the word "water" Tunisian speakers typically say /maː/ (long vowel preserved here) which is actually one of the cases where the long vowel is retained because it is the only vowel. This entry is arguably the most accurate Arabic entry in the dataset. The Arabic script ماء also accurately shows the written form. However, the Tunisian form can also surface as /ma/ (short) in rapid speech before a consonant-initial word. **Acceptable but documentation note warranted.**

### 5. `tree.js` — `ar_gulf`: شجرة / `ʃijaɾa` — unusual Gulf vocalism

**Code:** `ar_gulf: ["شجرة", "ʃijaɾa"]`

The Gulf Arabic realisation of MSA /ʃadʒara/ shows the expected /dʒ/ > /j/ lenition in inter-vocalic position in Gulf Arabic (specifically Kuwaiti, Emirati, and parts of Saudi), so the consonantal change from /dʒ/ to /j/ is correct. However, the initial vowel in Gulf varieties follows the pattern /ʃiːdʒara/ > /ʃijara/ rather than /ʃijara/ with short /i/. More commonly the Gulf reflex is [ʃijaɾa] with short /i/ — this is attested in Holes (2001:261) for Bahraini. The transcription `ʃijaɾa` is phonetically plausible. **Marginal; acceptable.**

### 6. `tree.js` — `ar_iq`: شجرة / `ʃad͡ʒaɾa` — Iraqi jīm

**Code:** `ar_iq: ["شجرة", "ʃad͡ʒaɾa"]`

This entry is consistent with urban Iraqi (Baghdad Muslim dialect) where /dʒ/ is retained for the Classical jīm — unlike the alternation /g/ in Baghdad Christian/Jewish dialects or /dʒ/ > /ʒ/ in Levantine. Baghdad Muslim Arabic preserves /dʒ/. The entry is correct for the mainstream representation. **No issue.**

### 7. `tree.js` — `ar_ma`: شجرة / `ʃəʒɾa` — Moroccan schwa placement

**Code:** `ar_ma: ["شجرة", "ʃəʒɾa"]`

Moroccan Arabic strongly reduces short vowels, and /ʃəʒɾa/ reflects the expected reduction of the medial /a/ of /ʃadʒara/ to schwa, with cluster formation. The reflex is attested. However, the Moroccan form is more typically transcribed as /ʃəʒra/ (cluster /ʒr/ directly) rather than /ʃəʒɾa/ (where ɾ suggests a separate rhotic syllable onset). The use of /ɾ/ (tap) vs /r/ is a transcription convention issue: Moroccan Arabic has the tap allophone of /r/ in this position, so /ɾ/ is appropriate. **Minor: transcription consistent with convention.**

### 8. `heart.js` — `ar_lev`: قلب / `ʔalb` — qāf → glottal stop correct, but…

**Code:** `ar_lev: ["قلب", "ʔalb"]`

The Levantine urban (Damascene, Beiruti, Palestinian urban) reflex of qāf /q/ is the glottal stop /ʔ/, which is correctly represented here. The form /ʔalb/ is the standard urban Levantine realisation. **Correct.** However, the code `ar_lev` is intended to represent a large, heterogeneous macro-area covering Palestinian rural varieties (where /q/ is retained as /q/ or realised as /k/ in some Northern Palestinian villages) and Jordanian (urban Amman increasingly uses /ʔ/ but rural Jordanian preserves /q/). Using a single `ar_lev` entry necessarily flattens this variation, which is a **documentation gap** rather than a factual error. A note distinguishing urban /ʔ/ from rural /q/ preservation would be appropriate.

### 9. `heart.js` — `ar_iq`: قلب / `galub` — Iraqi qāf and vowel quality

**Code:** `ar_iq: ["قلب", "galub"]`

Iraqi Arabic (Baghdad Muslim) realises qāf as /g/, which is correctly shown. The form /galub/ rather than /galb/ reflects the anaptyctic vowel common in closed-syllable-final position in some Iraqi subdialects, particularly in the Mesopotamian plain (gilit-dialects). This is phonologically sound for certain Iraqi varieties. However, urban Baghdad forms more commonly give /galb/ (no anaptyxis), with /galub/ being more characteristic of rural or bedouin-influenced Iraqi speech. The entry would benefit from specifying which subdialect motivates /galub/ vs. the commoner urban /galb/. **Substantive documentation gap; the rural/bedouin form is foregrounded over the dominant urban Baghdad form.**

### 10. `cat.js` — `ar_eg`: قطة / `ʔotˤtˤa` — Egyptian qāf and vowel

**Code:** `ar_eg: ["قطة", "ʔotˤtˤa"]`

Egyptian Cairo urban Arabic realises qāf as glottal stop /ʔ/ — correct. The vowel is /o/ rather than /i/, reflecting the Egyptian /i/ → /o/ (or /u/ → /o/) shift in the context of the following emphatic /tˤ/. This is the canonical Egyptian emphatic-spread lowering effect documented by Woidich (Behnstedt & Woidich 1985:§3.4): the short /i/ of /qitˤtˤa/ is lowered and rounded to /o/ under the influence of the emphatic tˤ. The transcription `ʔotˤtˤa` is phonetically well-motivated. **Correct.**

### 11. `cat.js` — `ar_gulf`: بزّونة / `bazzuːna` — Gulf /z/ for emphatic context

**Code:** `ar_gulf: ["بزّونة", "bazzuːna"]`

The Gulf Arabic word for cat بزّونة /bazzuːna/ is a well-attested Gulf colloquial form (Kuwaiti, Emirati, Saudi Gulf coast). The transcription shows non-emphatic /z/ in a geminate. No emphatic consonant is expected here since بزّونة is a loanword (ultimately from Persian/Turkish via the Gulf trade), not a root with etymological emphasis. **Correct.**

### 12. `cat.js` — `ar_sd`: قطّ / `guttˤ` — Sudanese phonology

**Code:** `ar_sd: ["قطّ", "guttˤ"]`

Sudanese Arabic realises qāf as /g/ (as expected — Sudanese is a /g/-dialect), and the transcription `guttˤ` shows the geminate emphatic /tˤ/. This is correct. **No issue.**

### 13. `dog.js` — `ar_iq`: كلب / `t͡ʃalib` — Iraqi /k/ > /t͡ʃ/ and anaptyxis

**Code:** `ar_iq: ["كلب", "t͡ʃalib"]`

The affrication /k/ > /t͡ʃ/ before front vowels is a notable feature of Iraqi Arabic (gilit dialects, particularly lower-Iraq / Basrawi varieties and rural Mesopotamian). In urban Baghdad Muslim Arabic, however, /k/ does not undergo affrication: the form is /kalb/ or /kalib/. The form /t͡ʃalib/ is specifically a feature of the gilit (southern Mesopotamian/Basrawi) dialects, not of Baghdad. Representing all of `ar_iq` as /t͡ʃalib/ overgeneralises a southern subdialect feature to the entire Iraqi Arabic macro-code. **Substantive error of scope: the Baghdad (qeltu) form /kalb/ or /kalib/ is the more central representation for `ar_iq`.**

Furthermore, the anaptyxis /kalb/ > /kalib/ is also southern-dialect-specific; the gemination-free cluster /lb/ in /kalb/ is standard Baghdad. Both the affrication and the anaptyxis simultaneously point to the same southern variety. This double marking reinforces the misrepresentation.

### 14. `good.js` — `ar_iq`: زين / `zeːn` — not the dominant Baghdad form

**Code:** `ar_iq: ["زين", "zeːn"]`

/zeːn/ "good" is the characteristic Gulf and some Iraqi form. In Baghdad Arabic, the typical colloquial adjective for "good/fine" is /zeen/ — which is identical phonemically to /zeːn/, so the transcription is defensible. However, Baghdad also commonly uses /ħelo/ "beautiful/good" and the MSA-derived /kwayyis/. The Gulf form /zeːn/ is dominant in the Arabian Peninsula; for Baghdad specifically, /zeːn/ is used but is associated with Gulf-influenced speech or formal register. The choice is acceptable but marginal; a note on register/region within Iraq would prevent confusion. **Minor documentation issue.**

### 15. `thanks.js` — `arq` (Algerian): صحة / `sˤəħħa` — pragmatic scope mismatch

**Code:** `arq: ["صحة", "sˤəħħa"]`

/sˤəħħa/ lit. "health" is used as a response to thanks or sneezing in some Maghrebi varieties, functioning as a counter-formula "you're welcome / bless you." It is indeed used in Algerian Arabic. However, the word entry is "thanks" (the initiating utterance), not "you're welcome" (the response). /sˤəħħa/ is specifically a **response formula**, not the act of giving thanks. The expected Algerian form for "thanks" (the act) would be /ʃukran/ or the French-influenced /mɛɾsi/ or /bɛɾaka fiːk/. Using the response formula as the entry for "thanks" is a **semantic/pragmatic category error**. Compare: the entry for `ar_tn` gives /ʕajːʃək/ "may you live long," which is similarly a formula — but in Tunisian it functions both as the act of thanking and as a culturally primary expression of gratitude, making it more defensible. For Algerian the primary thanking form is /ʃukran/ or /yɛʕtˤiːk əssˤəħħa/. **Substantive pragmatic error.**

### 16. `hello.js` — `ar_eg`: أهلاً / `ʔahlan` — secondary over primary

**Code:** `ar_eg: ["أهلاً", "ʔahlan"]`

/ʔahlan/ is indeed a common Egyptian greeting, but it is the short form of /ʔahlan wa sahlan/. In Cairo everyday speech, the most frequent neutral greeting is /izzajːak/ (m.) or /izzajːik/ (f.) "how are you," or the pan-dialectal /salaːm/ as the initial greeting to an acquaintance. /ʔahlan/ is used, but it is more of a "welcome/hi" when receiving a visitor than a general street/daily greeting. The most widely attested Egyptian colloquial neutral greeting is arguably /izzajːak/ or just /salaːm/ rather than /ʔahlan/ alone. This is a defensible choice but erases the more idiomatic Egyptian greeting form. **Minor documentation gap.**

### 17. `hello.js` — `ar_gulf`: هلا / `hala` — phonological accuracy of Gulf

**Code:** `ar_gulf: ["هلا", "hala"]`

Gulf Arabic /hala/ is a shortened form of /ahlan/, very widely used in Kuwaiti and Saudi (Hejazi/Najdi) and UAE daily speech. The transcription is accurate. However, the Gulf hello also includes the omnipresent /salaːm/ (short for /assalaːmu ʕalaykum/) which is in practice the dominant greeting. /hala/ is specifically an informal Khaleeji (Gulf) greeting marker and is well-attested. **Acceptable; minor note warranted on register (informal).**

### 18. `mother.js` — `ar_tn`: أمّي / `ʔummi` — possessive suffix included in base form

**Code:** `ar_tn: ["أمّي", "ʔummi"]`

The Tunisian entry shows /ʔummi/ "my mother," which includes the first-person singular possessive suffix /-i/. The field is supposed to record the base lexeme for "mother," not the possessed form. In Tunisian Arabic the base/pause form is /ʔumm/ or /yumma/; the suffix-bearing form /ʔummi/ means "my mother" specifically. Compare `ar_gulf: ["أم", "ʔumm"]` and `ar_eg: ["أم", "ʔomm"]` which correctly give the base form without possessive. The Tunisian entry is thus inconsistent with the format convention and phonologically includes morphological material (the /-i/ clitic) that does not belong in a bare lemma entry. **Substantive format error with phonological consequence.**

Similarly, `arq: ["يما", "jəmma"]` — يما is the form meaning "mother (vocative / my mother)" in some varieties, also carrying affective-possessive meaning. It is less a bare lemma than an affective form. **Minor; same issue.**

### 19. `father.js` — `ar_eg` and `ar_lev`: أب / `ʔabb` — gemination phonologically unmotivated

**Code:** `ar_eg: ["أب", "ʔabb"]`, `ar_eg: ["أب", "ʔabb"]`

MSA /ʔab/ "father" has a short final /b/. In Egyptian and Levantine pause forms, the final consonant is not geminated. The form /ʔabb/ with geminate /bb/ is not the standard citation form; it would only arise as a phonological consequence of certain suffixation patterns (e.g., the pausal doubling of monosyllabic nouns in some dialects, or in the vocative). Egyptian daily speech uses /ʔab/ or the affective /baba/ as "father." The geminate /ʔabb/ is not supported by Mitchell (1956) or Woidich for Cairo Arabic as the basic citation form. **Phonological error: gemination is unmotivated for the pause/citation form in both Egyptian and Levantine.**

### 20. `drink.js` — `ar_eg`, `ar_lev`, `ar_gulf`, `ar_iq`, `ar_ma`, `ar_tn`, `ar_sd`: imperfective 3sg.m used as lemma

**Code (representative):** `ar_eg: ["يشرب", "jiʃɾab"]`

All Egyptian, Levantine, Gulf, Iraqi, Moroccan, Tunisian, and Sudanese entries give the imperfective third-person masculine singular form /yiʃrab/ ~ /jiʃɾab/ as the lemma. The parallel `eat.js` does the same with /jaːkol/. The convention adopted is to represent Arabic dialect verbs by the imperfective 3sg.m rather than the perfective root or the infinitive/maṣdar. This convention is internally consistent and is a common practice in colloquial Arabic dictionaries (e.g., Harrell's *A Dictionary of Moroccan Arabic*). However, the inconsistency arises because:

- For `arq` (Algerian) in `eat.js`, the entry is `["كلى", "kla"]` — a perfective 3sg.m form.
- For `arq` in `drink.js`, the entry is `["شرب", "ʃrəb"]` — again perfective 3sg.m.

This means Algerian is given in the **perfective** while all other varieties are in the **imperfective**. **Substantive internal consistency error: Algerian should either have the imperfective /jiʃrəb/ and /jaːkəl/ forms, or all other varieties should use the perfective/root form.**

### 21. `eat.js` — `ar_ma`: ياكل / `jaːkul` — Moroccan vowel

**Code:** `ar_ma: ["ياكل", "jaːkul"]`

The Moroccan Arabic imperfective for "eat" is /jaːkul/ in some eastern Moroccan varieties, but in Casablanca and Rabat the expected form is /jaːkəl/ with reduced final vowel (schwa), matching the general Moroccan short-vowel reduction pattern. The Tunisian entry correctly shows /jaːkəl/ with schwa. The Moroccan entry /jaːkul/ with /u/ contradicts the Moroccan vowel reduction system documented by Harrell (1962) and Heath (2002). If Moroccan reduces short vowels to schwa consistently, the final /ul/ of /jaːkul/ should surface as schwa /əl/ in standard Moroccan. **Substantive error: Moroccan form should be `jaːkəl`, not `jaːkul`.**

### 22. `sun.js` — `ar_iq`: شمس / `ʃamis` — anaptyctic vowel in Iraqi

**Code:** `ar_iq: ["شمس", "ʃamis"]`

The anaptyctic vowel /i/ between the final /m/ and /s/ in /ʃamis/ is characteristic of Iraqi dialect phonotactics — particularly the tendency to insert a short vowel to break consonant clusters in final position. This is documented for the Mesopotamian (gilit) dialects. For Baghdad Muslim Arabic, however, /ʃams/ without anaptyxis is also attested in educated/urban speech. The entry consistently uses the anaptyctic form, which, as with the dog entry, foregrounds the southern/gilit subtype. **Minor: consistent with a specific Iraqi variety but overgeneralised to all Iraqi Arabic.**

### 23. `moon.js` — `ar_iq`: قمر / `gamaɾ` — vowel quality in Iraqi

**Code:** `ar_iq: ["قمر", "gamaɾ"]`

The Iraqi form /gamar/ with /g/ for qāf (correct for Baghdad Muslim and most Iraqi varieties) and /a/ in both syllables is consistent. However, the final vowel in Iraqi is typically short and often reduced in rapid speech to /gəmaɾ/ or in pause to /gamar/. The form /gamaɾ/ with a tap final rhotic is phonetically reasonable. **No major issue; consistent with other entries.**

### 24. `love.js` — all dialect entries: حب as noun vs. verb lemma inconsistency

All Arabic dialect entries give `حب` with IPA forms like /ħobb/, /ħubb/, /ħəbb/ — these are the **noun** forms meaning "love" (the noun). However, the MSA entry `ar: ["حب", "ħubb"]` also uses the noun. This is internally consistent. The question is whether the concept "love" is better represented by the verb "to love" (يحب / yuħibb) or the noun "love" (حب / ħubb). The dataset consistently uses the noun for this entry, which is reasonable. **No issue with the form per se.** However, for Egyptian the noun is typically /ħobb/ (with /o/ < MSA /u/ under short-vowel lowering in Egyptian), which the entry `ar_eg: ["حب", "ħobb"]` correctly shows. The Levantine /ħobb/ is also correct for urban Levantine. **No issue.**

### 25. `hand.js` — `ar_ma`, `arq`, `ar_tn`: يد / `jədd` — gemination of /d/

**Code:** `ar_ma: ["يد", "jədd"]`, `arq: ["يد", "jədd"]`, `ar_tn: ["يد", "jədd"]`

The Maghrebi Arabic forms for "hand/arm" يد show a geminate /dd/ in the transcription. This gemination is a well-known feature of Moroccan, Algerian, and Tunisian Arabic where the historically monosyllabic /jad/ undergoes compensatory gemination of the final consonant in the base (pause) form, yielding /jədd/. This is phonologically regular (Harrell 1962:§2.3 for Moroccan; Marçais for Algerian). **Correct.**

### 26. `hand.js` — `ar_gulf`: يد / `jad` — Gulf form unreduced

**Code:** `ar_gulf: ["يد", "jad"]`

Gulf Arabic retains /jad/ without gemination, consistent with the Gulf dialect's generally more conservative short-vowel treatment. This is correct. **No issue.**

### 27. `fire.js` — `ar_ma`: عافية / `ʕaːfja` — semantics correct but phonology note

**Code:** `ar_ma: ["عافية", "ʕaːfja"]`

Moroccan Arabic uses /lʕaːfja/ (with the definite article) as the primary word for "fire" in everyday speech, literally "health/well-being" (a euphemism). The entry gives the bare form without the article, which is legitimate for the lemma. However, in actual Moroccan speech, "fire" is nearly always expressed as /lʕaːfja/ (with article), never as /ʕaːfja/ alone as a free form. The entry without the article is phonologically incomplete for Moroccan Arabic, where the article is grammaticalised as part of the noun's citation form in this specific euphemistic usage. Compare how the Algerian entry `arq: ["العافية", "lʕafja"]` correctly includes the article. **Inconsistency: Moroccan should have `لعافية` / `lʕaːfja` to match the real citation form and the Algerian parallel.**

---

## Summary table

| # | File | Code | Issue type | Severity |
|---|------|------|-----------|----------|
| 1 | water.js | ar_eg | Pause vs. construct form undocumented | Documentation gap |
| 2 | water.js | ar_lev | Final geminate /majj/ → should be /maj/ in pause | Substantive phonological error |
| 3 | water.js | ar_ma | Schwa-less [lma] potentially misleading vs. [əlma] | Minor inconsistency |
| 4 | water.js | ar_tn | Acceptable; note on rapid-speech reduction absent | Documentation gap |
| 5 | tree.js | ar_gulf | /ʃijaɾa/ marginal; acceptable | Marginal |
| 6 | heart.js | ar_lev | Urban /ʔ/ flattens rural /q/ variation | Documentation gap |
| 7 | heart.js | ar_iq | /galub/ is rural/bedouin; Baghdad urban form is /galb/ | Substantive documentation gap |
| 8 | dog.js | ar_iq | Affrication /t͡ʃ/ + anaptyxis = southern/Basrawi, not Baghdad | Substantive error of scope |
| 9 | good.js | ar_iq | /zeːn/ is Gulf-influenced; Baghdad primary forms undocumented | Minor documentation issue |
| 10 | thanks.js | arq | /sˤəħħa/ is a response formula, not the thanking act | Substantive pragmatic error |
| 11 | hello.js | ar_eg | /ʔahlan/ secondary to /izzajːak/ as Cairo neutral greeting | Minor documentation gap |
| 12 | mother.js | ar_tn | /ʔummi/ includes possessive suffix — not a bare lemma | Substantive format error |
| 13 | mother.js | arq | /jəmma/ is affective/possessed form, not bare lemma | Minor format issue |
| 14 | father.js | ar_eg, ar_lev | Geminate /ʔabb/ phonologically unmotivated in pause/citation | Phonological error |
| 15 | drink.js / eat.js | arq | Algerian in perfective; all others in imperfective | Substantive consistency error |
| 16 | eat.js | ar_ma | /jaːkul/ should be /jaːkəl/ per Moroccan vowel reduction | Substantive phonological error |
| 17 | sun.js | ar_iq | Anaptyctic /ʃamis/ overgeneralised to all Iraqi | Minor scope issue |
| 18 | fire.js | ar_ma | /ʕaːfja/ missing article; Algerian parallel has /lʕafja/ | Inconsistency |
| 19 | cat.js | ar_lev | بسّة entry: /bisse/ — minor: Beiruti vs. Damascene variation undocumented | Documentation gap |
| 20 | one.js | ar_lev | /waːħad/ — Levantine vowel in final syllable is /ad/ not /id/: correct but see note | No error; confirmed correct |

---

## Additional note on missing variety codes

The dataset currently lacks entries for the following Arabic varieties that would be linguistically significant additions:

- **ar_ye** (Yemeni): Sanaani Arabic preserves both /q/ and /θ ð ðˤ/, making it the most conservative spoken variety. Its absence means the dataset cannot show the isogloss separating Yemeni /q/ retention from Gulf and Egyptian /g/ or /ʔ/.
- **ar_hz** (Hejazi): Saudi Hejazi (Jeddah/Mecca) is distinct from Najdi and shows partial urban /ʔ/ for qāf alongside some /g/ in Bedouin-influenced speech — a transitional dialect of major demographic importance (millions of speakers in Saudi's western urban corridor).
- **ar_njd** (Najdi): Najdi Arabic is the prestige variety of interior Saudi Arabia and is phonologically distinct from Gulf coastal Arabic (`ar_gulf`).
- **ar_hass** (Hassaniya): West African Bedouin Arabic, spoken across Mauritania, Mali, and Senegal, preserves /q/ and the full Classical emphatic system. Its absence deprives the dataset of an important isogloss for the western extent of Arabic.
- **ar_ly** (Libyan): Libyan Arabic sits between Tunisian and Egyptian phonologically and lexically; its absence creates a gap in the Maghreb-Egypt continuum.

These codes are defined in the project's `LANG_CODES.md` but carry no data rows in the current word files. Populating them — even partially — would substantially increase the dialectological coverage.
