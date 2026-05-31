# Wordmap review #33 — Bengali + Eastern Indo-Aryan specialist

## Reviewer self-introduction

Primary references consulted: Chatterji, S.K. (1926) *The Origin and Development of the Bengali Language* (Calcutta UP); Klaiman, M.H. (1990) *Bengali* (in Comrie ed., *The Major Languages of South Asia, the Middle East and Africa*); Sen, S. (1992) *Bengali Phonology*; Goswami, G.C. (1982) *Structure of Assamese*; Mahapatra, B.P. (1989) *Oriya* (in Shapiro & Schiffman eds., *Language and Society in South Asia*); Bangla Academy *Bengali-English Dictionary*; Turner (1966) *Comparative Dictionary of Indo-Aryan Languages*; Das, S.K. (1999) *Bishnupriya Manipuri Grammar*.

Data inspected: all 20 word files × 8 language codes: `bn`, `as`, `or`, `bpy`, `syl`, `ctg`, `haj`, and `ccp` (Chakma — absent from all files).

---

## Issues

### CRITICAL — Vocabulary errors

**Issue 1 — `bpy` love: মুতি "muti" is the word for urine/urination, not love**
File: `words/love.js:706`
`bpy: ["মুতি", "muti"]`
মুতি (< Sanskrit mūtra) means "urine" or "to urinate" in both Bengali and Bishnupriya Manipuri. This is a deeply offensive substitution. The Bishnupriya Manipuri word for love/affection is মায়া /maja/ (cf. Bengali মায়া) or ভালাবাসা. Replace immediately.

**Issue 2 — `bpy` one: একতা "ektaː" is "unity/solidarity", not the numeral one**
File: `words/one.js:705`
`bpy: ["একতা", "ektaː"]`
একতা = "oneness, unity" (abstract noun). The numeral "one" in Bishnupriya Manipuri is এক /ek/, identical to Bengali. The current entry confuses the abstract noun for a numeral.

**Issue 3 — `haj` eye: sukhu "su.kʰu" is the word for happiness/pleasure, not eye**
File: `words/eye.js:337`
`haj: ['sukhu', 'su.kʰu']`
সুখু (< Sanskrit sukha) means "happiness, pleasure, comfort" — cognate with Bengali সুখ. The Hajong word for eye is চকু or চক (related to Bengali চোখ, Assamese চকু). "Sukhu" for "eye" is a critical lexical error.

**Issue 4 — `bpy` sun: বিল "bil" likely wrong lexical item**
File: `words/sun.js:705`
`bpy: ["বিল", "bil"]`
বিল in Bengali/Bishnupriya means "wetland, marsh, pond". The expected Bishnupriya Manipuri word for "sun" is রবি /ɾobi/ or সূর্য. Neighbouring `brx` (Bodo) has সান "san" and `mni` (Meitei) has ꯅꯨꯃꯤꯠ "numit"; `bpy` বিল as "sun" needs source verification. Flag for native speaker check.

---

### HIGH SEVERITY — Phonemic errors

**Issue 5 — `as` moon: জোন "zʊn" wrong vowel quality**
File: `words/moon.js:486`
`as: ["জোন", "zʊn"]`
The Assamese grapheme ো is the /o/ diacritic (mid back rounded vowel). Transcribing it as /ʊ/ (near-close back rounded) is a vowel quality error. Standard Assamese জোন = /zon/. The /ʊ/ might reflect a real dialectal reduction, but if so it needs a source; in the absence of one, /zon/ is correct.

**Issue 6 — `or` sun: ସୂର୍ଯ୍ୟ "suːɾdʒɔ" — Odia ଯ = /j/, not /dʒ/**
File: `words/sun.js:487`
`or: ["ସୂର୍ଯ୍ୟ", "suːɾdʒɔ"]`
Odia ଯ is the palatal approximant /j/, not the affricate /dʒ/. Bengali য word-initially became /dʒ/ (a well-known Eastern Indo-Aryan innovation), but Odia ଯ retained /j/ throughout. Correct transcription: /suːɾjɔ/. This same Bengali-centric mistake is absent from the Odia moon entry (ଚନ୍ଦ୍ର "tʃɔndɾɔ") but surfaces here.

**Issue 7 — `or` heart: ହୃଦୟ "ɦɾudɔjɔ" — word-initial /h/ should not be voiced /ɦ/**
File: `words/heart.js:481`
`or: ["ହୃଦୟ", "ɦɾudɔjɔ"]`
Odia ହ is a voiceless glottal fricative /h/ in initial position (Mahapatra 1989). The voiced glottal fricative /ɦ/ is the allophone in intervocalic position in some Indo-Aryan languages (notably Hindi), but Odia word-initial ହ = /h/. Correct: /hɾudɔjɔ/ (or with vocalic r: /hɾidɔjɔ/).

**Issue 8 — `bn` love: ভালোবাসা "bʰalobasa" — missing /ʃ/ and vowel length**
File: `words/love.js:86`
`bn: ["ভালোবাসা", "bʰalobasa"]`
Two errors in one entry. (a) Bengali স in this word is pronounced /ʃ/ (the standard Bengali rule: শ/স/ষ all → /ʃ/), so বাসা → /baːʃa/ not /basa/. (b) The বা syllable carries the long vowel /aː/. Correct transcription: /bʰalobaːʃa/.

**Issue 9 — `as` water: পানী "pani" — Assamese ী (long-ī) vowel unmarked**
File: `words/water.js:487`
`as: ["পানী", "pani"]`
The Assamese script পানী uses the diacritic ী which unambiguously marks the long vowel /iː/. The transcription /pani/ drops this length distinction. Assamese পানী = /paniː/. Compare Goswami (1982) on the long/short vowel distinction being phonemic in Assamese. Analogously, Bengali পানি (short /i/) and Assamese পানী (long /iː/) are in contrast.

**Issue 10 — `syl` / `ctg`: tones entirely absent across all 20 words**
Files: all `words/*.js` syl and ctg entries
Both Sylheti and Chittagonian possess phonemic tonal distinctions (often described as a two-level or pitch-accent system). Not a single entry in either language carries any tone diacritic (e.g., acute ˊ for high, grave ˋ for low, or macron for level). This is a systematic gap. While the IPA transcription system used in this project does not enforce tone marking, the absence across 20 entries for two tonal languages means the phonological distinctiveness of these varieties is entirely invisible to users. At minimum, a note in the entry metadata is warranted; ideally representative tones should be marked.

**Issue 11 — `as` heart: হৃদয় "ɹidɔi" — final য should give /j/ not /i/**
File: `words/heart.js:480`
`as: ["হৃদয়", "ɹidɔi"]`
In Assamese, word-final য is realised as the palatal semivowel /j/ (Goswami 1982: §3.2). The transcription shows /ɹidɔi/, treating the final segment as a vowel /i/. Correct: /ɹidɔj/. (The initial /ɹi/ for হৃ — h-dropping before the vocalic rhotic — is a known Assamese feature and is correctly rendered.)

---

### MEDIUM SEVERITY — Phonetic inaccuracies

**Issue 12 — `bn` moon: চাঁদ "t͡ʃãd" — nasalised /aː/ lacks length mark**
File: `words/moon.js:86`
`bn: ["চাঁদ", "t͡ʃãd"]`
The Bengali vowel চাঁ contains the long vowel grapheme আ (ā), giving a nasalised long /ãː/. The IPA should be /t͡ʃãːd/. The entry drops the length, making it indistinguishable from a word with short /a/.

**Issue 13 — `ctg` fire: আগ্যন "aɡːon" — গ্য rendered as geminate /ɡː/ without phonetic justification**
File: `words/fire.js:821`
`ctg: ["আগ্যন", "aɡːon"]`
The Chittagonian spelling আগ্যন contains the consonant cluster গ্য (g + ya). The IPA shows /aɡːon/ — a geminate velar stop — with the /j/ from য entirely lost. While Chittagonian does simplify some clusters, representing গ্য as /ɡː/ (rather than /ɡj/ or /ɡjɔn/) requires phonological justification. The current transcription is internally inconsistent: য in other entries does not collapse to length on the preceding consonant.

**Issue 14 — `syl` house: ঘর "gor" — aspiration of ঘ missing**
File: `words/house.js:820`
`syl: ["ঘর", "gor"]`
Sylheti ঘ is the voiced aspirated velar stop /ɡʱ/, cognate with Bengali/standard Bengali ঘ /ɡʱ/. The transcription /gor/ uses the plain unaspirated /g/, losing the aspiration entirely. The Chittagonian entry for house correctly shows /ɡɔr/, though it also drops aspiration. Compare Assamese ঘৰ "gʱɔɹ" (same file, line 487) which does mark the aspiration.

**Issue 15 — `or` cat: ବିଲେଇ "bɪlei" — lax /ɪ/ for Odia short-i is non-standard**
File: `words/cat.js:481`
`or: ["ବିଲେଇ", "bɪlei"]`
Odia ି (short-i diacritic) represents the close front vowel /i/, not the near-close lax /ɪ/ of English "bit". Odia does not have a tense/lax distinction for high vowels analogous to English. Standard Odia transcription uses /i/. Correct: /bilei/.

**Issue 16 — `bpy` hello: নমস্কার "nomoskar" — ɔ vowels and /ʃ/ for স missing**
File: `words/hello.js:699`
`bpy: ["নমস্কার", "nomoskar"]`
Compare Bengali নমস্কার /nɔmɔʃkaɾ/ (line 86 of the same file). The Bishnupriya entry shows /nomoskar/ with full /o/ vowels and /s/ for স. If Bishnupriya Manipuri genuinely realises the inherent vowels as /o/ rather than /ɔ/ and স as /s/ rather than /ʃ/, these are real dialectal features that should be noted; otherwise they look like simple copy errors losing the characteristic short-open-mid /ɔ/ and the Bengali/Bpy sibilant merger.

**Issue 17 — `or` house: ଘର "gʱɔɾɔ" — ASCII g instead of IPA ɡ**
File: `words/house.js:488`
`or: ["ଘର", "gʱɔɾɔ"]`
The entry uses ASCII `g` (U+0067) rather than IPA `ɡ` (U+0261). Within the same file, Odia tree ɡɔtʃʰɔ (line 481 of tree.js) correctly uses the IPA symbol. This is an internal inconsistency affecting font rendering and search/filter behaviour in the app. Same issue appears in Assamese house "gʱɔɹ" (house.js:487).

**Issue 18 — `bn` / `as` aspirated-consonant notation inconsistency: bʰ vs bʱ for ভ**
Files: `words/good.js`, `words/thanks.js`
Bengali ভালো uses "bʰalo" (good.js:86) but Assamese ভাল uses "bʱal" (good.js:480). Bengali ধন্যবাদ uses "dʰɔnnobad" (thanks.js:86) but Assamese ধন্যবাদ uses "dʱɔnjɔbad" (thanks.js:480). Both represent the same voiced aspirated (murmured) stop. The IPA convention is the right-facing hook diacritic: /bʱ/, /dʱ/. The project should standardise on one notation; mixing bʰ and bʱ within the same phoneme class across closely related languages creates confusion for users comparing entries.

---

### LOW SEVERITY — Notation and completeness

**Issue 19 — `haj` entries: syllable-boundary dot in IPA (bʱa.lo, ba.ba, ku.tʰu.ɾa, su.kʰu)**
Files: `words/good.js:337`, `words/father.js:337`, `words/dog.js:337`, `words/eye.js:337`
Entries: `['bhalo', 'bʱa.lo']`, `['baba', 'ba.ba']`, `['kuthura', 'ku.tʰu.ɾa']`, `['sukhu', 'su.kʰu']`
The IPA dot (·) indicates a syllable boundary in phonological transcription, but its use here is inconsistent with all other languages in the dataset (none of which use dots in their IPA column) and does not belong in narrow IPA transcriptions. Remove the dots: /bʱalo/, /baba/, /kutʰuɾa/.

**Issue 20 — `ccp` (Chakma) entirely absent from all 20 word files**
Files: all `words/*.js`
A grep for `ccp:` returns no results. Chakma (ISO 639-3: ccp) is a scheduled language of Bangladesh/India with approximately 300,000 speakers and its own Unicode script (Chakma script, U+11100–U+1114F). It is listed in the reviewer's specialist scope and presumably in the language metadata. Either the entries have not yet been added (in which case this is a coverage gap) or the language code used differs from `ccp`.

**Issue 21 — `ctg` sun: সূর্য "surdʒo" — long vowel /uː/ missing; and likely non-colloquial form**
File: `words/sun.js:821`
`ctg: ["সূর্য", "surdʒo"]`
(a) The Bengali/Sanskrit সূ carries the long vowel /uː/; the Chittagonian entry drops the length: /sur/ instead of /suːr/. (b) The Chittagonian colloquial word for "sun" is typically বেলা /bela/ (compare Hajong haj: bela "be.la" in the same file). Using the Sanskrit loanword সূর্য for Chittagonian while Hajong (a closely related language) uses the colloquial form creates an inconsistency in register, and the Sanskrit form may not reflect authentic Chittagonian everyday usage.

**Issue 22 — `as` tree: গছ "gɔs" — ASCII g for initial ɡ; consistent with Issue 17**
File: `words/tree.js:480`
`as: ["গছ", "gɔs"]`
Uses ASCII `g` (U+0067). Should be IPA `ɡ` (U+0261) for consistency with other entries such as `or` tree "ɡɔtʃʰɔ" in the same file (line 481). This is the same ASCII-vs-IPA symbol inconsistency as Issue 17.

---

## Summary table

| # | Lang | Word | Current IPA | Problem | Severity |
|---|------|------|-------------|---------|----------|
| 1 | bpy | love | মুতি "muti" | Wrong word: means urine | CRITICAL |
| 2 | bpy | one | একতা "ektaː" | Wrong word: means unity | CRITICAL |
| 3 | haj | eye | sukhu "su.kʰu" | Wrong word: means happiness | CRITICAL |
| 4 | bpy | sun | বিল "bil" | Suspect lexical item: means marsh | HIGH |
| 5 | as | moon | জোন "zʊn" | ো = /o/ not /ʊ/ | HIGH |
| 6 | or | sun | ସୂର୍ଯ୍ୟ "suːɾdʒɔ" | Odia ଯ = /j/ not /dʒ/ | HIGH |
| 7 | or | heart | ହୃଦୟ "ɦɾudɔjɔ" | Word-initial /h/ not /ɦ/ | HIGH |
| 8 | bn | love | ভালোবাসা "bʰalobasa" | Missing /ʃ/ and /aː/ | HIGH |
| 9 | as | water | পানী "pani" | ী = long /iː/ unmarked | HIGH |
| 10 | syl/ctg | all | (none) | Tones absent throughout | HIGH |
| 11 | as | heart | হৃদয় "ɹidɔi" | Final য = /j/ not /i/ | MEDIUM |
| 12 | bn | moon | চাঁদ "t͡ʃãd" | Nasalised /ãː/ lacks length | MEDIUM |
| 13 | ctg | fire | আগ্যন "aɡːon" | গ্য → /ɡː/ unjustified | MEDIUM |
| 14 | syl | house | ঘর "gor" | ঘ aspiration /ɡʱ/ missing | MEDIUM |
| 15 | or | cat | ବିଲେଇ "bɪlei" | /ɪ/ should be /i/ | MEDIUM |
| 16 | bpy | hello | নমস্কার "nomoskar" | /o/ for /ɔ/, /s/ for /ʃ/ | MEDIUM |
| 17 | or | house | ଘର "gʱɔɾɔ" | ASCII g not IPA ɡ | LOW |
| 18 | bn/as | multiple | bʰ vs bʱ | Aspirate notation inconsistent | LOW |
| 19 | haj | multiple | bʱa.lo etc. | IPA syllable dots non-standard | LOW |
| 20 | ccp | all | (absent) | Chakma not entered at all | LOW |
| 21 | ctg | sun | সূর্য "surdʒo" | Missing /uː/; non-colloquial form | LOW |
| 22 | as/or | tree/house | gɔs / gʱɔɾɔ | ASCII g not IPA ɡ | LOW |
