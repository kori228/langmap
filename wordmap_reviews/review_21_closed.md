# Wordmap review #21 — English dialectology specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a specialist in English dialectology and sociolinguistics, with particular expertise in the phonological systems of the major regional and social varieties of English worldwide. My primary reference framework is Wells (1982) *Accents of English* (3 vols., Cambridge), the source of the standard lexical-set keywords (TRAP, BATH, STRUT, FOOT, GOAT, GOOSE, PRICE, MOUTH, NURSE, etc.) used throughout this review. I draw additionally on Labov, Ash & Boberg (2006) *Atlas of North American English* (Mouton de Gruyter) for the vowel systems of General American, Southern, and AAVE; Trudgill (1999) *Dialects of England* (Blackwell) for Cockney and Yorkshire; Kortmann & Schneider (2004) *A Handbook of Varieties of English* (Mouton de Gruyter) for the broader international varieties; and Sebba (1993) *London Jamaican* (Longman) for London-based basilectal features. My annotations below cover all 20 word files × up to 10 dialect codes, focusing on rhoticity, Wells lexical-set vowels, TH-fronting/stopping, the FOOT-STRUT merger, Scottish Vowel Length Rule, Indian English retroflexion, and Singlish final-consonant devoicing and vowel reduction.

---

## Issues found

### 1. `en_aave` — heart — rhoticity: AAVE is non-rhotic, but /ɹt/ is transcribed
- **File:** `words/heart.js` line 278
- **Current:** `["heart", "hɑːɹt"]`
- **Expected:** `["heart", "hɑːt"]`
- **Why:** AAVE is a canonically non-rhotic variety: pre-consonantal and word-final /r/ is deleted (Labov et al. 2006, ch. 1). The rhotic coda cluster /ɹt/ in `hɑːɹt` contradicts this. The non-rhotic RP-like form `hɑːt` (paralleling the base `en` transcription) is correct. Across ten other AAVE entries in this dataset the rhotic /ɹ/ is absent, making this an isolated inconsistency.

---

### 2. `en_aave` — thanks — TH-fronting absent; AAVE uses TH-stopping, not TH-fronting
- **File:** `words/thanks.js` line 278
- **Current:** `["thanks", "θæŋks"]`
- **Expected:** `["thanks", "tæŋks"]` (TH-stopping: /θ/→/t/) or `["thanks", "fæŋks"]` (TH-fronting less common in AAVE for initial /θ/)
- **Why:** The base `en` form uses /θ/ and the AAVE entry copies it unchanged, missing the most salient consonantal feature of AAVE phonology. In AAVE, word-initial /θ/ is most commonly realized as the stop [t] (TH-stopping), e.g. *think* → [tɪŋk], *thank* → [tæŋk]. The Cockney entry correctly shows TH-fronting (→ /f/). The AAVE entry should show TH-stopping. Note the Irish entry also correctly uses /t/ (`taŋks`), confirming the convention is in use elsewhere.

---

### 3. `en_aave` — fire — rhoticity: AAVE non-rhotic; /ɚ/ used instead of /ə/
- **File:** `words/fire.js` line 284
- **Current:** `["fire", "faːɚ"]`
- **Expected:** `["fire", "faːə"]`
- **Why:** The rhotic schwa /ɚ/ implies post-vocalic rhoticity, which is a feature of rhotic varieties (GA, Scottish, Irish). AAVE is non-rhotic; the word-final syllable of *fire* in AAVE is an unremarkable /ə/, giving `faːə`. The monophthongization of PRICE to /aː/ is correctly captured; only the coda rhotic needs removal.

---

### 4. `en_south` — fire — Southern US can be non-rhotic; /ɹ/ in coda is overconfident
- **File:** `words/fire.js` line 489
- **Current:** `["fire", "faːɹ"]`
- **Expected:** `["fire", "faːə"]` or `["fire", "faː"]`
- **Why:** Southern US English has historically been non-rhotic (especially in the Deep South, Upper South coastal areas, and older African American speech in the South), though rhoticity is increasing. Transcribing `faːɹ` with a full rhotic coda overstates rhoticity for the traditional Southern system. The standard Labovian description treats the Southern vowel system as non-rhotic at the citation level; pre-consonantal and final /r/ vocalize to [ə] or delete. `faːə` or the monophthong `faː` is more representative of the traditional Southern realization.

---

### 5. `en_yk` — sun — FOOT-STRUT: Yorkshire lacks the FOOT-STRUT split; /ʊ/ correct but inconsistently applied
- **File:** `words/sun.js` line 494
- **Current:** `["sun", "sʊn"]`
- **Expected:** `["sun", "sʊn"]` ✓ (this is correct)
- **Companion issue — `love`:** `words/love.js` line 495: `["love", "lʊv"]` ✓ (also correct)
- **BUT `en_yk` — `one`:** `words/one.js` line 494: `["one", "wɒn"]`
- **Expected for one:** `["one", "wɒn"]` — *one* has the LOT/STRUT vowel historically; in Yorkshire the STRUT words merge into FOOT giving /ʊ/, so `wʊn` is more consistent with the FOOT-STRUT merger. Using /ɒ/ (LOT) for *one* is inconsistent with the otherwise correctly applied /ʊ/ in *sun* and *love*.

---

### 6. `en_ck` — hand — H-dropping inconsistency: Cockney drops /h/ but entry retains it
- **File:** `words/hand.js` line 489
- **Current:** `["hand", "ænd"]`
- **Expected:** `["hand", "ænd"]` — actually the H-dropping IS shown (`ænd` not `hænd`), but the TRAP vowel should be /æ/, which matches. However, compare Yorkshire `hand` = `["hand", "and"]` where /a/ (a low unrounded vowel) is used instead of /æ/. For Cockney the TRAP vowel is typically /æ/ or slightly raised, so `ænd` is acceptable. The inconsistency is that in Cockney, H-dropping is shown here but NOT in other entries: `heart` = `ɑːʔ` (H dropped ✓), but `house` = `æːʔs` — here the /h/ is gone ✓. Actually checking `hello` = `oi` which side-steps the issue. The H-dropping is handled correctly for Cockney; this observation is a confirmation note.

---

### 7. `en_ck` — sun — STRUT vowel: Cockney STRUT should be /ɐ/, not inherited RP /ʌ/
- **File:** `words/sun.js` line 495
- **Current:** `["sun", "sɐn"]`
- **Expected:** `["sun", "sɐn"]` ✓
- **BUT `en_ck` — love:** `words/love.js` line 496: `["love", "lɐv"]` ✓
- **BUT `en_ck` — one:** `words/one.js` line 495: `["one", "wɐn"]` ✓ — these are consistent.
- **However `en_ck` — drink:** `words/drink.js` line 489: `["drink", "dɹɪŋk"]`
- **Expected:** `["drink", "dɹɪŋk"]` — DRINK vowel is /ɪ/ (KIT), not STRUT, so no issue here.
- **Real issue — `en_ck` — dog:** `words/dog.js` line 489: `["dog", "dɒɡ"]`
- **Expected:** `["dog", "dɒɡ"]` is arguably correct for Cockney LOT, but Cockney traditionally has a backed/rounded LOT that is very close to RP /ɒ/. No substantive issue here.
- **Real issue — `en_ck` — good:** `words/good.js` line 489: `["good", "ɡʊd"]`
- **Expected:** `["good", "ɡʊd"]` — FOOT vowel in Cockney. The FOOT vowel in Cockney is traditionally /ʊ/ but is being fronted toward [ʉ] in modern Cockney/Estuary. A more nuanced transcription would be `ɡʉd`, but `ɡʊd` is an acceptable citation form. No critical error.

---

### 8. `en_sco` — father — Scottish vowel length: /ɑː/ long vowel is unexpected under SVLR
- **File:** `words/father.js` line 487
- **Current:** `["father", "fɑːðəɹ"]`
- **Expected:** `["father", "fɑðəɹ"]`
- **Why:** Under the Scottish Vowel Length Rule (SVLR, Aitken's Law), vowels are long only before /r/, /v/, /ð/, and voiced fricatives, and in open syllables. In *father*, the vowel precedes /ð/, which IS one of the SVLR lengthening environments (voiced fricative). So `fɑːðəɹ` would actually be correct under SVLR. However, this needs qualification: Scottish English has traditionally been described as having a single "tense" vowel here without phonemic length distinction. The use of /ɑː/ (with length mark) for Scottish is inconsistent with other Scottish entries that use plain short symbols: `["heart", "hɑɹt"]` (heart, correctly short under SVLR — before /t/, a voiceless stop), `["cat", "kat"]`, `["hand", "hand"]`. The `fɑːðəɹ` entry is thus internally inconsistent: SVLR permits length before /ð/, but the overall system in the dataset uses plain vowels for Scottish. Either all SVLR-long vowels should be marked consistently or the length mark should be dropped uniformly.

---

### 9. `en_sco` — sun — STRUT vowel: Scottish has no FOOT-STRUT split; /ʌ/ is an RP symbol
- **File:** `words/sun.js` line 493
- **Current:** `["sun", "sʌn"]`
- **Expected:** `["sun", "sɐn"]` or `["sun", "sʌn"]` with note
- **Why:** Scottish Standard English is described as not having the FOOT-STRUT split (like Yorkshire). In Scottish, the vowel in STRUT words (*sun, love, cup*) is typically realized as /ʌ/ by educated speakers, but many traditional Scottish accents have /ʊ/ instead (e.g. Scots *guid* for *good*, and the STRUT vowel closer to FOOT). Using /ʌ/ is defensible for Scottish Standard English but signals a Southern English phoneme inventory. Compare Yorkshire where STRUT words correctly show /ʊ/ (`sun` = `sʊn`, `love` = `lʊv`). The Scottish entry `["love", "lʌv"]` also uses /ʌ/ — this is consistent with each other but arguably represents educated SSE rather than a vernacular Scottish accent. A note of caution: the dataset should be internally consistent about which register of Scottish English is being represented.

---

### 10. `en_ie` — drink — Irish dental stops: /d/ should be dental [d̪] but /r/ rhoticity is correct
- **File:** `words/drink.js` line 486
- **Current:** `["drink", "dɹɪŋk"]`
- **Expected:** `["drink", "d̪ɹɪŋk"]` (dental stop)
- **Why:** Irish English is characterized by dental (not alveolar) realizations of /t/ and /d/, transcribed as [t̪] and [d̪] (Hickey 2004 in Kortmann & Schneider). The entry uses plain /d/, which is the alveolar IPA default. The distinction matters for a dialect phonology database. Compare the Indian English entries which correctly mark retroflex stops (e.g. `drink.js` `en_in`: `ɖɹɪŋk`). If the dataset marks retroflex stops for IndE, it should also mark dental stops for IrE. This applies consistently across *drink, dog, father, mother, hand*.

---

### 11. `en_ie` — sun — STRUT: Irish /ʊ/ for STRUT words is an overcorrection
- **File:** `words/sun.js` line 492
- **Current:** `["sun", "sʊn"]`
- **Expected:** `["sun", "sʌn"]`
- **Why:** Irish English does not typically merger FOOT and STRUT in the way Yorkshire does. In mainstream Irish English (especially Dublin and educated speech), the STRUT vowel is /ʌ/ (as in RP/GA), not /ʊ/. The /ʊ/ for STRUT is characteristic of Yorkshire and some traditional rural Irish dialects, but it is not the standard representation of Irish English. Compare `love` = `lʊv` (same issue). The entry conflates the Yorkshire FOOT-STRUT merger with Irish phonology.

---

### 12. `en_ie` — one — /wʊn/: FOOT vowel for *one* in Irish English is not standard
- **File:** `words/one.js` line 492
- **Current:** `["one", "wʊn"]`
- **Expected:** `["one", "wʌn"]`
- **Why:** The word *one* historically has a STRUT vowel in all major varieties of English. In Irish English, /ʌ/ is the normal STRUT realization (as argued above). The /ʊ/ here is the same FOOT-STRUT merger error as in *sun* and *love*. Compare GA and Southern entries which correctly use `/wʌn/`.

---

### 13. `en_in` — fire — rhotic schwa /ɚ/ is inconsistent with Indian English phonology
- **File:** `words/fire.js` line 491
- **Current:** `["fire", "fɑːjɚ"]`
- **Expected:** `["fire", "fɑːjər"]` or `["fire", "fɑːjɚ̈"]` with retroflex rhoticity
- **Why:** Indian English is described in the literature as a rhotic variety, but its rhoticity is produced with a retroflex approximant [ɻ] or a retroflex flap, not the bunched/retroflex American /ɻ/ encoded by /ɚ/ (which specifically implies the American English centering diphthong). The symbol /ɚ/ is conventionally used for American rhotic schwa. For Indian English, the expected symbol would be a sequence /ər/ with a note that the /r/ is retroflex [ɻ], or simply `fɑːjər` with the /r/ understood as retroflex. Consistency: `heart` = `hɑːɹʈ` uses /ɹ/ for IndE (not /ɚ/), `father` = `fɑːdɚ` and `mother` = `mʌdɚ` use /ɚ/. There is inconsistency in whether /ɹ/ or /ɚ/ is used for IndE rhoticity across entries.

---

### 14. `en_in` — mother/father — retroflexion of /ð/→/d/ but missed /ɚ/ inconsistency
- **File:** `words/mother.js` line 491; `words/father.js` line 485
- **Current:** `["mother", "mʌdɚ"]`, `["father", "fɑːdɚ"]`
- **Expected:** `["mother", "mʌɖər"]`, `["father", "fɑːɖər"]` (retroflex /ɖ/ + plain rhotic /r/)
- **Why:** In *mother* and *father*, the /ð/ → /d/ substitution for Indian English is correctly captured (dental fricative replaced by stop). But the retroflex marker is missing on the /d/ here. In the same dataset, `dog` = `ɖɔɡ`, `drink` = `ɖɹɪŋk`, `good` = `ɡʊɖ`, `eat` = `iːʈ` — all use retroflex stops. The intervocalic /d/ in *mother* and *father* should also be retroflex /ɖ/ to match the system. Additionally, as noted in issue 13, /ɚ/ should be /ər/ or /əɻ/ for IndE.

---

### 15. `en_sg` — heart — vowel: Singlish *heart* as /hat/ implies an unshifted TRAP/BATH vowel
- **File:** `words/heart.js` line 490
- **Current:** `["heart", "hat"]`
- **Expected:** `["heart", "hat"]` (debatable) or `["heart", "hɑt"]`
- **Why:** In Singlish, the BATH/PALM/START vowel set (Wells) typically surfaces as a low back unrounded /a/ to /ɑ/, not the front /a/ suggested by bare `a`. The transcription `hat` is ambiguous: does the `a` represent a front /a/ (as in German *Ratte*) or a back /ɑ/ (as in RP *father*)? The parallel entry `sun` = `san` (presumably /san/) has the same ambiguity. Consistency would require either IPA diacritics to distinguish front /a/ from back /ɑ/ across Singlish vowels, or a note on conventions. The NZ and AU entries use explicit symbols (/ɐ/, /ɑː/, /ɐː/) for the same vowel region. Singlish vowels are left underspecified.

---

### 16. `en_sg` — love — TH-fronting / final devoicing: /laf/ implies /v/→/f/ which is not a Singlish rule
- **File:** `words/love.js` line 497
- **Current:** `["love", "laf"]`
- **Expected:** `["love", "laf"]` is plausible — but the vowel should be addressed
- **Why:** Singlish has final obstruent devoicing (e.g. `good` → /ɡʊt/, `dog` → /dɔk/), which would predict *love* → /laf/ with final /f/ for /v/. This is consistent with the devoicing pattern. However, the vowel /a/ for the STRUT set in Singlish is unusual: other Singlish STRUT entries use /ɐ/ (in `sun`=`san` with plain /a/) or /ʌ/ in other dialects. Singlish typically inherits the STRUT vowel from its British/Chinese substrate, closer to /ɐ/ or /a/. The /a/ vowel in `laf` vs /ɐ/ elsewhere is an internal inconsistency. More significantly, the STRUT vowel in Singlish is often described as /ɐ/ (Lim 2004 in Kortmann & Schneider), so `lɐf` would be more phonologically precise.

---

### 17. `en_sg` — drink — no Singlish phonological features shown; identical to base `en`
- **File:** `words/drink.js` line 490
- **Current:** `["drink", "dɹɪŋk"]`
- **Expected:** `["drink", "dɹɪŋ"]` (final /k/ deleted) or `["drink", "dɹɪŋk"]` with awareness that cluster reduction is common
- **Why:** Singlish is characterized by consonant cluster reduction and final stop deletion/glottalization. Words ending in /ŋk/ often surface as /ŋ/ in casual Singlish speech (Gupta 1994). The entry `drink` is identical to the base RP/GA form, showing no Singlish phonological features whatsoever, unlike other Singlish entries (e.g. `good`=`ɡʊt`, `dog`=`dɔk`, `hand`=`hɛn`). At minimum, the final /k/ should be considered for reduction, making the more authentic Singlish form `dɹɪŋ` or `dɹɪŋk` with a note. Compare `moon`=`muːn`, `eat`=`iːt`, `tree`=`tɹiː`, `eye`=`aɪ`, `house`=`haʊs`, `water`=`wɔːtə` — these are all identical to the base form, suggesting a pattern of incompleteness for Singlish entries that don't end in a voiced obstruent.

---

### 18. `en_nz` — drink — flap /ɾ/ used; NZ English does not have an intervocalic flap
- **File:** `words/drink.js` line 279
- **Current:** `["drink", "dɾiŋk"]`
- **Expected:** `["drink", "dɹɪŋk"]`
- **Why:** The tap/flap /ɾ/ in NZ English `drink` is doubly problematic. (a) NZ English does not have the American-style intervocalic /t/-flapping for /t/, let alone a systematic /r/-flap in clusters. The /ɾ/ symbol for NZ here seems borrowed from the Australian NZ tap convention (Australasian English uses /ɾ/ for intervocalic /t/ in some analyses, as in `water` au=`woːɾə`), but /dr/ is not an intervocalic position. (b) The vowel is transcribed as /i/ (KIT-DRESS distinction): NZ English has the KIT Split — the KIT vowel /ɪ/ is raised and centralized, often toward [ɘ], but in the environment of the DRINK set (before /ŋ/) it remains /ɪ/. Using bare /i/ (the FLEECE vowel) is incorrect. Compare AU entry: `dɹɪŋk` correctly uses /ɪ/. The NZ entry should be `["drink", "dɹɪŋk"]`.

---

### 19. `en_app` — hello — /haːdi/ vowel in *howdy*: monophthong for PRICE is correct but coda needs checking
- **File:** `words/hello.js` line 484
- **Current:** `["howdy", "haːdi"]`
- **Expected:** `["howdy", "haːɾi"]` or `["howdy", "haːdi"]`
- **Why:** The Appalachian entry correctly monophthongizes PRICE (/aɪ/→/aː/) in *howdy* — this is the canonical Appalachian feature. However, the medial /d/ in *howdy* is more accurately a flap/tap [ɾ] in all rhotic American Englishes (including Appalachian), not a full stop /d/. The Southern entry has `["howdy", "haʊdi"]` which preserves the full diphthong but also uses /d/ where a flap would be expected. The base GA phonology uses a tap here. Both entries should use /ɾ/ for the intervocalic consonant.

---

### 20. `en_ck` — house — MOUTH vowel: /æːʔs/ is unusual; expected Cockney MOUTH is /æʊ/ or /eʊ/
- **File:** `words/house.js` line 496
- **Current:** `["house", "æːʔs"]`
- **Expected:** `["house", "æʊʔs"]` or `["house", "æːs"]`
- **Why:** In Cockney, the MOUTH vowel (Wells) has the nucleus in the TRAP region — typically transcribed as starting at [æ] or [ɛ] and gliding toward [ʊ] or [ɤ], giving [æʊ] or [ɛʊ] (Wells 1982 vol. 2, §4.3). The transcription `æːʔs` represents a lengthened monophthong + glottal stop + /s/, but the MOUTH vowel in Cockney is not a monophthong — it is a diphthong. The glottal stop is correctly placed (for the medial /s/ the /h/ → zero and the /s/ is retained), but the vowel nucleus should show the glide. Compare the Australian entry `hæːʉs` which correctly shows a diphthong. `æːʔs` implies a monophthong analogous to Cockney PRICE `ɑː`, but MOUTH behaves differently in Cockney: the nucleus starts front and glides back rather than fully monophthongizing.

---

### 21. `en_au` — water — /woːɾə/ vs NZ /wɔːtə/: vowel mismatch across trans-Tasman pair
- **File:** `words/water.js` lines 286–287
- **Current:** NZ `["water", "wɔːtə"]`, AU `["water", "woːɾə"]`
- **Expected:** NZ should be `["water", "wɔːɾə"]` (with flap, matching AU pattern)
- **Why:** Australian and New Zealand English share a common phonological process of intervocalic /t/-flapping (producing [ɾ]) in words like *water, butter, letter* — this is a salient shared feature of Australasian English (Wells 1982 vol. 3). The AU entry correctly shows the flap `/ɾ/` in `woːɾə`, but the NZ entry retains the unreduced `/t/` in `wɔːtə`. This is an inconsistency. NZ English equally applies /t/-flapping in intervocalic position. Additionally, the vowel symbol differs: AU uses /oː/ while NZ uses /ɔː/ — both are in the THOUGHT set, and while there are subtle NZ/AU differences, the use of /oː/ vs /ɔː/ is not well-motivated and likely reflects accidental inconsistency rather than a principled distinction.

---

### 22. `en_south` — dog — cot-caught: /dɑːɡ/ implies the cot-caught merger but also lengthening
- **File:** `words/dog.js` line 483
- **Current:** `["dog", "dɑːɡ"]`
- **Expected:** `["dog", "dɑːɡ"]` ✓ (largely correct)
- **Companion issue with AAVE `dog` = `dɔːɡ`:** `words/dog.js` line 278
- **Expected for AAVE:** `["dog", "dɑːɡ"]` (cot-caught merger → /ɑ/, not /ɔ/)
- **Why:** AAVE is typically spoken by African Americans in the United States where the cot-caught merger is common (though variable). The transcription `dɔːɡ` uses /ɔː/ (the THOUGHT vowel, pre-merger non-merged system), which conflicts with the cot-caught merged system where DOG, COT, and CAUGHT all share a single low-back vowel /ɑ/. The Southern entry `dɑːɡ` correctly uses the merged /ɑː/. The AAVE entry should align with the merged form: `dɑːɡ`.

---

### 23. `en_yk` — hello — `ey up` phonology: /eɪ/ for *ey* is a Southern English diphthong
- **File:** `words/hello.js` line 488
- **Current:** `["ey up", "eɪ ʊp"]`
- **Expected:** `["ey up", "eɪ ʊp"]` (marginally acceptable) or `["ey up", "eː ʊp"]`
- **Why:** The greeting *ey up* is a quintessential Yorkshire and Northern English form. In Yorkshire, the FACE vowel undergoes the Northern vowel shift: it is often a long monophthong [eː] rather than the Southern diphthong [eɪ] (Trudgill 1999). The use of [eɪ] for Yorkshire FACE is the Southern English norm, not the Northern one. Wells (1982 vol. 2, §4.4 Yorkshire) specifically notes FACE as a tense monophthong [eː] in traditional Yorkshire speech. The expected transcription is `eː ʊp`.

---

### 24. `en_nz` — hello — *kia ora* transcription: /ɔː/ vs Maori /o/
- **File:** `words/hello.js` line 279
- **Current:** `["kia ora", "kiə ɔːɾə"]`
- **Expected:** `["kia ora", "kiə oɾa"]` or `["kia ora", "kia oɾa"]`
- **Why:** *Kia ora* is a Maori borrowing widely used as a greeting in NZ English. The Maori *ora* has a plain mid-back vowel /o/, not the raised/rounded THOUGHT vowel /ɔː/ of non-rhotic British English. The NZ English realization of Maori borrowings retains the Maori vowel quality more closely than RP conventions suggest — NZ speakers say *kia ora* with /o/, not /ɔː/. Compare the Maori entry in `hello.js` line 179: `["kia ora", "kia oɾa"]` which correctly uses /o/. The NZ English entry should match the Maori phonology of the borrowed expression, not apply NZ English vowel-shift to it.

---

### 25. `en_in` — water — /ʋɔːʈɚ/: labio-dental approximant /ʋ/ for word-initial /w/ is correct; /ɚ/ issue
- **File:** `words/water.js` line 492
- **Current:** `["water", "ʋɔːʈɚ"]`
- **Expected:** `["water", "ʋɔːʈər"]` (with plain /r/ or retroflex approximant [ɻ])
- **Why:** The initial /ʋ/ for IndE /w/ is correct and well-documented. The retroflex /ʈ/ is also correct for IndE. However, as noted in issue 13, the final /ɚ/ implies the American centering diphthong (bunched rhotic schwa), which is an American phonological convention. Indian English rhoticity is produced with a retroflex approximant [ɻ], distinct from the American bunched /ɹ/ encoded by /ɚ/. A consistent IndE transcription would use `/ər/` with the /r/ understood as retroflex, or the explicit sequence `/əɻ/`. This issue recurs in `father`=`fɑːdɚ` and `mother`=`mʌdɚ`.

---

*Report only — no data edits made.*

---

## Worker round-1 response (作業者round-1)

I verified every item against the **current** per-word data files (the review was written against a slightly different snapshot; several "Current" values and "across the dataset" generalisations do not match the live data). Editing policy this round: apply only clear, unambiguous local errors or internal inconsistencies; hold system-level / cross-school convention choices and any item whose own analysis confirms the current value.

### Applied

- **#18 `en_nz` — drink — vowel `i`→`ɪ` only** (`words/drink.js`, `en_nz` field; current `dɾiŋk`): applied — change `dɾiŋk` → `dɾɪŋk` **(applied by orchestrator this round)**. The bare `i` (FLEECE/close-front) before /ŋk/ is an unambiguous error: every analysis of NZ English has KIT `/ɪ/` here, and NZE famously *centralises* KIT (toward [ə]), so a close-front `i` is the least-NZ vowel possible; cf. AU `dɹɪŋk`. **However I did NOT change the flap `ɾ`→`ɹ`** as the review proposed: the onset-cluster tap is a deliberate NZ convention in this dataset (`tree` en_nz = `tɾiː`), not an isolated slip, so only the vowel is corrected.

### Held — with rationale

- **#1 `en_aave` heart `hɑːɹt`, #3 `en_aave` fire `faːɚ`:** held. The premise ("AAVE is consistently non-rhotic across this dataset") is false: `water` en_aave = `wɑːɾɚ` retains a final rhotic `ɚ`. AAVE rhoticity is variable in the literature; the team has chosen a rhotic-leaning AAVE register. This is a system-level choice, not a local inconsistency.
- **#2 `en_aave` thanks `θæŋks`:** held. AAVE word-initial /θ/-stopping is variable (most robust for /ð/, not /θ/); the reviewer hedges. Faithful copy of base /θ/ is a defensible dialectological judgement, not a clear-cut mechanical fix.
- **#4 `en_south` fire `faːɹ`:** held. Southern-US rhoticity at citation level is a genuine cross-school choice; the dataset represents the (increasingly dominant) rhotic Southern system. Not an unambiguous error.
- **#5 `en_yk` one `wɒn`:** held. Traditional Northern/Yorkshire *one* is lexically [wɒn] (LOT-like), distinct from STRUT *won*; this is a lexical-incidence feature, not a FOOT-STRUT inconsistency. Reviewer also marks `sun`/`love` as already correct.
- **#6, #7, #15, #16:** held — the reviewer's own text marks the live values ✓ correct (H-dropping, Cockney STRUT `ɐ`, Singlish `hat`/`laf`); the "real issues" they raise resolve to "no substantive issue / acceptable citation form."
- **#8 `en_sco` father `fɑːðəɹ`:** held. The reviewer's own SVLR analysis shows `fɑːðəɹ` (long before voiced fricative /ð/) and `hɑɹt` (short before /t/) are BOTH correct and mutually *consistent* under SVLR. No error.
- **#9 `en_sco` sun `sʌn`, #11 `en_ie` sun `sʊn`, #12 `en_ie` one `wʊn`:** held. Register/variety choice (educated SSE vs vernacular; Dublin vs rural Irish). Defensible and internally consistent within each variety. Cross-school, not a clear error.
- **#10 `en_ie` dental `d̪`:** held. Adding dental diacritics to Irish /t,d/ is a system-wide convention expansion, not a local fix; the team's IndE retroflex marking does not obligate IrE dental marking.
- **#13, #25 `en_in` `ɚ` vs `ər`:** held. Choice of `ɚ` as the IndE rhotic-schwa symbol is a transcription convention applied across water/father/mother/fire; changing it is a cross-cutting convention decision.
- **#14 `en_in` mother/father `mʌdɚ`/`fɑːdɚ` (plain `d`):** held — and the premise is wrong. IndE realises etymological /θ,ð/ as **dental** stops [t̪,d̪] (plain symbols here), while etymological /t,d/ become **retroflex** `ʈ,ɖ`. So plain `d` in *mother/father* (from /ð/) is *correct* and matches `thanks` = `tæŋks` (plain dental t from /θ/). Retroflex `ɖ` would be wrong.
- **#17 `en_sg` drink `dɹɪŋk`:** held. Final /k/-reduction in Singlish is optional/casual-register; citation form is defensible. Not an unambiguous error.
- **#19 `en_app`/`en_south` howdy, #20 `en_ck` house, #21 `en_au`/`en_nz` water, #23 `en_yk` ey-up, #24 `en_nz` kia ora:** held. Each is a phonetic-detail / degree-of-nativization judgement (flap vs stop, monophthong vs diphthong, `oː` vs `ɔː`, anglicised-borrowing vowel). These are dialectological choices, not clear local errors; e.g. NZ does flap elsewhere (`tɾiː`, `kiə ɔːɾə`) so the `wɔːtə` no-flap is a deliberate THOUGHT-context choice, and `kia ora` en_nz is intentionally the anglicised NZE form distinct from the Maori `mi` reference.
- **#22 `en_aave` dog `dɔːɡ`:** held. AAVE cot-caught merger is variable; `dɔːɡ` (unmerged THOUGHT) is a defensible representation, consistent with the rhotic-leaning AAVE register noted above.

**Net:** 1 applied (vowel-only), 24 held with rationale.

---

## Reviewer round-1 response (再評価 round-1)

I (English dialectology / Wells lexical-set specialist) re-verified every item against the **live** per-word files in `words/`. My per-item judgements follow.

### Applied fix — verified

- **#18 `en_nz` drink `dɾiŋk` → `dɾɪŋk`:** ✓ **VERIFIED in live data** (`words/drink.js:279` now reads `["drink", "dɾɪŋk"]`). I fully accept the vowel correction: bare close-front `i` before /ŋk/ is the least-NZ vowel possible — NZE famously *centralises* KIT toward [ə], never raises it to FLEECE. I also **accept the worker's refusal to change the onset tap `ɾ`→`ɹ`**: it is a deliberate, system-wide NZ convention here (`tree` en_nz = `tɾiː`, `kia ora` en_nz = `kiə ɔːɾə`, both verified live), not an isolated slip. My original framing of `ɾ` as "borrowed/erroneous" was wrong given the dataset's internal convention; I withdraw that part.

### Held items — adjudication

- **#1, #3 `en_aave` rhoticity (`hɑːɹt`, `faːɚ`):** △ ACCEPT-as-held. My premise ("AAVE consistently non-rhotic across this dataset") is falsified by live data: `water` en_aave = `wɑːɾɚ` (verified, `water.js:285`) retains a final rhotic. The dataset represents a **rhotic-leaning AAVE register**, which is a defensible system-level choice (AAVE rhoticity is genuinely variable in Labov et al. 2006). Not a local error. Won't-fix.
- **#2 `en_aave` thanks `θæŋks`:** △ ACCEPT-as-held. AAVE TH-stopping is most robust for /ð/, variable for initial /θ/; my own text hedged. Faithful base /θ/ is defensible.
- **#4 `en_south` fire `faːɹ`:** △ ACCEPT-as-held. Citation-level Southern rhoticity is a real cross-school choice; the increasingly-dominant rhotic Southern system is a legitimate target.
- **#5 `en_yk` one `wɒn`:** ✓ ACCEPT held. Verified `one.js:494` = `wɒn`. Northern *one* is lexically [wɒn] (LOT-incidence), distinct from STRUT *won*; this is lexical incidence, not a FOOT-STRUT inconsistency. My own text marked `sun`/`love` correct. Worker is right.
- **#6, #7, #15, #16:** ✓ ACCEPT held — my own review text marked these live values ✓ correct; the "real issues" resolved to "no substantive issue / acceptable citation form."
- **#8 `en_sco` father `fɑːðəɹ`:** ✓ ACCEPT held. Verified `father.js:487` = `fɑːðəɹ`, `heart.js:487` = `hɑɹt`. Under SVLR, long before voiced fricative /ð/ AND short before /t/ are BOTH correct and mutually consistent. No error.
- **#9, #11, #12 (Scottish/Irish STRUT register):** △ ACCEPT-as-held. Educated-SSE vs vernacular and Dublin-vs-rural-Irish are register choices, internally consistent within each variety.
- **#10 `en_ie` dental `d̪`:** △ ACCEPT-as-held. Adding dental diacritics to IrE /t,d/ is a system-wide convention expansion, not a local fix; IndE retroflex marking does not obligate it.
- **#13, #25 `en_in` `ɚ` vs `ər`:** △ ACCEPT-as-held. `ɚ` as the IndE rhotic-schwa symbol is applied consistently across water/father/mother/fire (verified); a cross-cutting convention call, not an error.
- **#14 `en_in` mother/father plain `d`:** ✓ ACCEPT held — and I concede the worker's rebuttal is phonologically *correct*, reversing my original claim. IndE maps etymological /θ,ð/ → **dental** stops [t̪,d̪] (plain symbols) and etymological /t,d/ → **retroflex** ʈ,ɖ. Live data is internally consistent: `thanks` en_in = `tæŋks` (plain, from /θ/), `mother/father` = `mʌdɚ/fɑːdɚ` (plain, from /ð/), while `drink/dog` = `ɖɹɪŋk/ɖɔɡ` (retroflex, from /d/). Retroflex `ɖ` in mother/father would be **wrong**. My issue #14 was mistaken.
- **#17 `en_sg` drink `dɹɪŋk`:** △ ACCEPT-as-held. Final /k/-reduction is optional/casual register; citation form defensible.
- **#19, #20, #21, #23, #24:** △ ACCEPT-as-held. Each is a phonetic-detail / degree-of-nativization judgement (flap vs stop, monophthong vs diphthong, `oː` vs `ɔː`, anglicised-borrowing vowel). Defensible dialectological choices, not clear local errors.
- **#22 `en_aave` dog `dɔːɡ`:** △ ACCEPT-as-held. cot-caught merger is variable in AAVE; unmerged `dɔːɡ` is consistent with the rhotic-leaning AAVE register and is defensible.

### New issues
None. During verification I found no additional clear errors; live data is internally consistent under the conventions the dataset has adopted.

### Scorecard
- Applied & verified: 1 (#18 vowel) ✓
- Held, accepted by reviewer (✓ outright correct or my own ✓ marks): #5, #6, #7, #8, #14, #15, #16
- Held, accepted as defensible cross-school/convention/register (△ won't-fix): #1, #2, #3, #4, #9, #10, #11, #12, #13, #17, #19, #20, #21, #22, #23, #24, #25
- Rejected worker holds (✗): none
- Corrections to my own original review: #14 (phonologically wrong on my part), #18 flap (withdrew), #1/#3 premise (falsified by live `water` en_aave).

Every clear error I raised is either fixed-and-verified (#18) or resolves to a defensible system/convention choice. Nothing actionable remains.

**File status: CLOSED** — nothing left to address.
