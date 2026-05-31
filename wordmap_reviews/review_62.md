# Wordmap review #62 — Finnic & Saami (Uralic) specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a comparative Uralicist specialising in the Finnic and Saami branches, with field and archival experience across the Gulf of Finland (Finnish, Estonian, Võro, Votic, Livonian) and the Olonets–Ladoga and Veps region (Karelian Proper, Livvi/Olonets, Veps), as well as the full Saami chain from South (sma) through Lule (smj), North (se), Inari (smn) and Skolt (sms) to Kildin (sjd). For the Finnic varieties I lean primarily on A. Laanest, *Einführung in die ostseefinnischen Sprachen* (Buske, 1982) for the phonological systems — vowel harmony, the õ/ə vowel of Estonian, Võro and Livonian, the three-way quantity opposition of Estonian, and the half-long/overlong contrasts — supplemented by Viitso's surveys of Livonian. For the Saami varieties I rely on P. Sammallahti, *The Saami Languages: An Introduction* (Davvi Girji, 1998) for consonant gradation, preaspiration, the diphthong inventories, and the Skolt/Kildin palatalisation and glottalisation suprasegmentals. My review here concentrates on the points the brief asks for: vowel harmony, gemination and length, Saami consonant gradation, the õ vowel, surface strings copied verbatim into the IPA slot, and missing stress/length marking.

---

## Issues found

### 1. `sms` — heart — orthographic soft-sign `ʹ` leaked into the IPA string
- **File:** `words/heart.js` line 471
- **Current:** `["vueʹmm", "vueʹmː"]`
- **Expected:** `["vueʹmm", "vueʲmː"]`
- **Why:** The IPA field still contains the Skolt orthographic modifier letter `ʹ` (U+02B9 MODIFIER LETTER PRIME), which is an orthographic suprasegmental marking palatalisation, not an IPA segment. Per Sammallahti (1998), the Skolt "soft sign" marks palatalisation of the preceding/whole syllable; in a phonetic transcription it must be rendered as the IPA superscript /ʲ/ (or as a glottalisation/half-long mark where appropriate), never carried over as the raw orthographic prime. This is a surface-into-IPA leak.

### 2. `sms` — water — orthographic apostrophe-prime leaked into IPA
- **File:** `words/water.js` line 478
- **Current:** `["čääʹcc", "tʃæːtsː"]`
- **Why:** The orthography `čääʹcc` carries the palatalisation/half-long prime `ʹ` before the geminate `cc`. The IPA `tʃæːtsː` silently drops it, so the diacritic is neither leaked (good) nor represented (bad). The Skolt suprasegmental on `čääʹcc` should surface as palatalisation or as the "suprasegmental" quantity Sammallahti (1998) describes; transcribing the geminate affricate simply as `tsː` loses the contrastive mark. Compare the inconsistent treatment in #1, where the same prime *was* copied through.

### 3. `se` — father — geminate placement on the affricate is mis-segmented
- **File:** `words/father.js` line 467
- **Current:** `["áhčči", "aːhtːʃi"]`
- **Expected:** `["áhčči", "aːhtʃːi"]`
- **Why:** Orthographic `čč` is a geminate post-alveolar affricate. The current IPA `htːʃ` lengthens the stop component `t` before the fricative release, which is not how a geminate affricate is realised. Per Sammallahti (1998), the long affricate is /tʃː/ — the length sits on the affricate as a unit. The preaspiration `h` is correctly present; only the length-bearing element is wrong.

### 4. `fi` — fire — IPA is a verbatim copy of the orthography, missing primary stress
- **File:** `words/fire.js` line 156
- **Current:** `["tuli", "tuli"]`
- **Expected:** `["tuli", "ˈtuli"]`
- **Why:** Finnish has fixed word-initial primary stress (Laanest 1982). Every other Finnic entry in this dataset that I review (vot, krl, olo, vep) carries the `ˈ` mark; the Finnish column omits it throughout, and here the IPA is byte-identical to the surface form, indicating no transcription was actually performed. Add initial `ˈ`.

### 5. `fi` — hello — surface=IPA copy, no stress
- **File:** `words/hello.js` line 156
- **Current:** `["hei", "hei"]`
- **Expected:** `["hei", "ˈhei"]`
- **Why:** Same defect as #4: the IPA string equals the orthography. `hei` is a falling diphthong /hei̯/ under fixed initial stress; minimally the stress mark, and ideally the non-syllabic diacritic on the glide (`hei̯`), should appear.

### 6. `fi` — one — surface=IPA copy
- **File:** `words/one.js` line 156
- **Current:** `["yksi", "yksi"]`
- **Expected:** `["yksi", "ˈyksi"]`
- **Why:** Identical surface and IPA again; Finnish initial stress is unmarked. (Laanest 1982.)

### 7. `et` — fire — surface=IPA copy, Estonian quantity/stress unmarked
- **File:** `words/fire.js` line 326
- **Current:** `["tuli", "tuli"]`
- **Expected:** `["tuli", "ˈtuli"]`
- **Why:** Estonian likewise has fixed initial stress (Laanest 1982). The IPA is a literal copy of the orthography. Marking initial `ˈ` brings it in line with the rest of the dataset's stress-marked Finnic forms and signals that a transcription, not a copy, was made.

### 8. `et` — eye — surface=IPA copy
- **File:** `words/eye.js` line 320
- **Current:** `["silm", "silm"]`
- **Expected:** `["silm", "ˈsilm"]`
- **Why:** Same copy defect; add initial stress. The monosyllable `silm` is short Q1, so no length is needed, only the stress mark.

### 9. `et` — hello — surface=IPA copy
- **File:** `words/hello.js` line 320
- **Current:** `["tere", "tere"]`
- **Expected:** `["tere", "ˈtere"]`
- **Why:** IPA equals orthography; add fixed initial stress (Laanest 1982).

### 10. `vep` — eye — surface=IPA copy, no stress
- **File:** `words/eye.js` line 771
- **Current:** `["silm", "silm"]`
- **Expected:** `["silm", "ˈsilm"]`
- **Why:** Every other Veps entry in this set is stress-marked (`ˈkaʒi`, `ˈsydæin`, etc.); this monosyllable was left as a bare copy of the orthography. Veps has initial stress (Laanest 1982).

### 11. `vep` — tree — surface=IPA copy
- **File:** `words/tree.js` line 771
- **Current:** `["pu", "pu"]`
- **Expected:** `["pu", "ˈpu"]`
- **Why:** Copy defect; the surrounding Veps forms are stress-marked, so this is an inconsistency, not a deliberate choice.

### 12. `vot` — love — wrong word-sense (verb form, not the love noun/root)
- **File:** `words/love.js` line 779
- **Current:** `["tükkäd", "ˈtykːæd"]`
- **Why:** The headword glosses "basic word/root for love or affection — noun or verb citation form … not a greeting." Votic `tükätä` ~ `tükkäd` denotes 'to like / to be fond of / to fancy', a 2sg/finite form, and is a much weaker affectional verb than the intended sense; it is also given as an inflected form, not a citation. A Votic root in the 'love' field (cf. *suvata* 'to love', shared with Karelian *suvaita*) would match the intended sense and the citation-form convention better. The IPA `ˈtykːæd` itself (front-harmonic, geminate `kː`) is internally consistent; the issue is lexical selection.

### 13. `krl` — sun — IPA inserts a glide not present in the surface form
- **File:** `words/sun.js` line 775
- **Current:** `["päivy", "ˈpæjvy"]`
- **Expected:** `["päivy", "ˈpæivy"]`
- **Why:** Orthographic `äi` is a falling diphthong /æi/; the transcription `pæjvy` re-analyses the second element as a consonantal glide /j/, which is not the Karelian realisation of the diphthong nucleus. Per Laanest (1982) the offglide of such Finnic diphthongs is the vowel /i/ (optionally `i̯`), not /j/. Same defect appears in `olo` below.

### 14. `olo` — sun — diphthong offglide mis-transcribed as /j/
- **File:** `words/sun.js` line 776
- **Current:** `["päivy", "ˈpæjvy"]`
- **Expected:** `["päivy", "ˈpæivy"]`
- **Why:** Identical to #13: Livvi/Olonets `äi` is the diphthong /æi/ (offglide vowel `i̯`), not /æj/. The two readings should be harmonised, and both should use the vocalic offglide.

### 15. `sjd` — hello — Cyrillic `и` mis-transcribed and stress/length absent
- **File:** `words/hello.js` line 472
- **Current:** `["тиерв", "tjerv"]`
- **Expected:** `["тиерв", "tʲierv"]`
- **Why:** Kildin Saami `тиерв` opens with a palatalised onset before the diphthong /ie/. The current `tjerv` both (a) writes palatalisation as a full segment /j/ rather than the palatalisation diacritic /ʲ/ used consistently elsewhere in the sjd column (`toallʲ`, `tʃadzʲ`, `aːdʒʲ`), and (b) drops the /i/ element of the `ие` diphthong entirely, collapsing /ie/ to /e/. Per Sammallahti (1998) on Kildin, the onset is /tʲ/ and the nucleus is the diphthong /ie/.

### 16. `liv` — good — õ vowel realisation and missing length consistency
- **File:** `words/good.js` line 773
- **Current:** `["jõvā", "jəvaː"]`
- **Why:** Livonian `õ` is transcribed here as schwa /ə/, but in stressed position (Laanest 1982; Viitso) Livonian `õ` is an unrounded close-mid/close back-central vowel, conventionally /ɤ/ or /ɯ/, distinct from a reduced schwa. Compare the Livonian `liv` 'drink' `jūodõ → juːədə` and 'eat' `sīedõ → siːədə`, where the *unstressed final* `õ` is reasonably /ə/, but the *stressed* `õ` in `jõvā` should not be the same reduced schwa. Recommend `/ɤvaː/` (or `/ɯvaː/`) for the stressed õ. This is exactly the õ-vowel point flagged in the review focus.

### 17. `liv` — drink/eat — stressed vs reduced õ collapsed to one symbol
- **File:** `words/drink.js` line 773; `words/eat.js` line 773
- **Current:** `["jūodõ", "juːədə"]` ; `["sīedõ", "siːədə"]`
- **Why:** Here the *first* `o`/`e`-coloured element of the long diphthong `ūo`/`īe` is rendered as schwa `ə` (`juːədə`, `siːədə`), which conflates the falling long diphthong nucleus with the genuinely reduced word-final `õ`. The diphthongs are /uo/ and /ie/ (Viitso; Laanest 1982), so the expected transcriptions are nearer `/juːodə/` and `/siːedə/`, reserving `ə` for the final reduced vowel only. As written, two phonologically different vowels carry the same symbol.

### 18. `smj` — thanks — preaspiration invented where the orthography shows a plain geminate
- **File:** `words/thanks.js` line 469
- **Current:** `["gijttuo", "kijhtuə"]`
- **Why:** Lule Saami `gijttuo` has the geminate stop `tt`; the IPA `kijhtuə` inserts a preaspiration `h` (`htː`→ rendered `ht`) that the spelling does not motivate and also drops the length. Per Sammallahti (1998) Lule Saami preaspiration is written orthographically (e.g. `htt`); a plain orthographic `tt` is the long stop /tː/, so the form should be `/kihtːuo/`→ minimally `/kitːuo/` without the inserted `h`. Either the `h` is spurious or the geminate length is missing; both cannot be dropped as in the current `htuə`.

### 19. `smn` — hello — final length added that the diphthong word does not carry
- **File:** `words/hello.js` line 470
- **Current:** `["tiervâ", "tiervaː"]`
- **Expected:** `["tiervâ", "tierva"]`
- **Why:** Inari Saami orthographic final `â` is the reduced/short back vowel /a/ (as correctly transcribed for `smn` 'tree' `muorâ → muɔra`, 'hand' `kietâ → kieta`, 'one' `ohtâ → ohta`). Here the very same `â` is given a length mark `aː`, which is inconsistent with every other `smn` entry and with the value of `â` in Sammallahti (1998). The final vowel should be short /a/.

### 20. `se` — drink — preaspiration in `juhkat` lost in the IPA
- **File:** `words/drink.js` line 467
- **Current:** `["juhkat", "juhkat"]`
- **Why:** The IPA is a verbatim copy of the orthography and, crucially, the orthographic `hk` of North Saami `juhkat` represents preaspiration of the stop, i.e. /ˈjuhkat/ with the `h` functioning as preaspiration on /k/ (Sammallahti 1998), and the initial stop should pattern with the dataset's voiceless rendering of North Saami stops (cf. `se` 'eat' `borrat → porːat`). A bare copy `juhkat` neither marks stress, nor the gradation/voicelessness, nor distinguishes the preaspiration from a plain /h/+/k/ cluster. At minimum `/ˈjuhkat/` with explicit preaspiration is expected.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
