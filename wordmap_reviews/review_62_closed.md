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

---

## Worker round-1 response (作業者round-1)

Methodology note: before deciding each item I extracted the **entire column** for every language involved (fi, et, vep, se, smj, sms, sjd, smn, krl, olo, vot, liv) across all 20 word files, so that "matches/breaks the column convention" claims are checked against the actual data rather than asserted. Several of the reviewer's premises about column consistency did not hold up; those are held with evidence below.

### Applied

- **#1 `sms` heart `vueʹmm`** — **applied (applied by orchestrator this round).** The orthographic prime `ʹ` did leak into the IPA — this is the *only* sms entry that retains it. However the fix is to **drop** it, not convert to `ʲ`: the established sms column convention is to drop the prime in IPA (`eeʹǩǩ→eːkː`, `kåʹdd→kɔdː`, `jeäʹnn→jæːnː`, `peeiʹvv→peːjvː`, `rääʹǩǩes→ræːkːes`, `späʹsseb→spæsːeb`, water `čääʹcc→tʃæːtsː`). Corrected IPA `vueʹmː → vuemː` to match those 7+ sibling entries. (Converting to `ʲ` as proposed would itself be inconsistent with the column.)
- **#3 `se` father `áhčči`** — **applied.** Geminate post-alveolar affricate length should sit on the affricate unit, not split it: `aːhtːʃi → aːhtʃːi`. Sammallahti (1998) /tʃː/; no competing convention exists in the column (this is the only geminate /tʃ/ in the se data).
- **#12 `vot` love `tükkäd`** — **applied.** Replaced the finite/inflected 'like, fancy' form with the sourced citation form for 'to love'. Surface `tükkäd → suvata`, IPA `ˈtykːæd → ˈsuvata`. Source: Wiktionary *suvatõ* / *suvata* (Votic, 1st infinitive, "to love; embrace"), pron. /ˈsuvɑtɑ/ (Luutsa/Jõgõperä/Central Votic); rendered `ˈsuvata` to match the vot column's symbol choice (`a`, not `ɑ`: cf. `kassi→ˈkasːi`, `koira→ˈkoira`). This also aligns the Votic 'love' field with the cognate krl/olo `suvaita`. https://en.wiktionary.org/wiki/suvat%C3%B5
- **#13 `krl` sun `päivy`** — **applied.** `ˈpæjvy → ˈpæivy`. The dataset's own convention renders the `äi` diphthong with a vocalic offglide `æi`, proven by vot `päivä→ˈpæivæ` and krl/olo `süväin→ˈsyvæin`; the `æj` here is the lone outlier.
- **#14 `olo` sun `päivy`** — **applied.** `ˈpæjvy → ˈpæivy`, same local inconsistency as #13.
- **#15 `sjd` hello `тиерв`** — **applied.** `tjerv → tʲierv`. The sjd column consistently uses the palatalisation diacritic `ʲ` (`tʃalʲm`, `aːdʒʲ`, `toallʲ`, `kʲedt`, `tʃadzʲ`, `jeːnnʲ`), and the Cyrillic `ие` is the /ie/ diphthong; the current form uniquely used full-segment `j` and dropped the `i`.
- **#18 `smj` thanks `gijttuo`** — **applied.** `kijhtuə → kijtːuɔ`. Orthographic plain `tt` (no `h`) is the long stop /tː/ in this column (cf. `gietta→kietːa`); the inserted preaspiration `h` is spurious, the geminate length was missing, and `uo` is rendered `uɔ` everywhere else (`buorre→puɔrːe`, `muorra→muɔrːa`). Fix removes the `h`, restores `tː`, and uses `uɔ` per column convention.
- **#19 `smn` hello `tiervâ`** — **applied.** `tiervaː → tierva`. Final orthographic `â` is short `a` everywhere else in the smn column (`peenâg→peːnaɡ`, `tollâ→tolːa`, `kietâ→kieta`, `ohtâ→ohta`, `muorâ→muɔra`); the length mark here was the lone outlier.

### Held (with rationale)

- **#2 `sms` water `čääʹcc → tʃæːtsː`** — **held.** The current IPA already follows the dataset's consistent sms convention of dropping the orthographic prime in transcription (see #1). The reviewer's request to *represent* the prime as palatalisation/half-length is a system-level convention change for the whole sms column, not a local error; the current value is internally consistent. Recommend reviewer escalate as a column-wide convention decision if a palatalisation mark is desired.
- **#4 `fi` fire, #5 `fi` hello, #6 `fi` one** — **held.** I pulled all 20 fi entries: initial stress `ˈ` is **never** marked anywhere in the Finnish column (`kissa→kissɑ`, `koira→koirɑ`, … none carry `ˈ`). The reviewer's premise that "the Finnish column carries `ˈ` elsewhere" is incorrect; the cited stress-marked columns are vot/krl/olo/vep, not fi. Adding `ˈ` to just these three would *create* inconsistency. The unmarked-fixed-stress treatment for fi is a deliberate, consistent dataset convention → won't-fix locally; escalate as a convention decision if fixed stress should be marked dataset-wide. (The surface=IPA coincidence in `tuli/tuli` etc. is a property of the words, not evidence of a missing transcription, since fi orthography is near-phonemic.)
- **#7 `et` fire, #8 `et` eye, #9 `et` hello** — **held, same basis as #4–6.** All 20 et entries are unmarked for stress; adding `ˈ` to three would break column consistency. Estonian three-way quantity is likewise unmarked throughout the et column — a system-level choice, not a local error.
- **#10 `vep` eye `silm`, #11 `vep` tree `pu`** — **held.** The vep column does mark stress on *polysyllables* but consistently **omits** it on *monosyllables*: `koir`, `silm`, `tat`, `mam`, `kuu`, `pu`, `pertʲ`, `yksʲ` are all unmarked. So `silm` and `pu` already match the vep monosyllable convention; marking them would make them inconsistent with every other vep monosyllable. The reviewer's "surrounding forms are stress-marked" cherry-picks the polysyllabic entries. Won't-fix.
- **#16 `liv` good `jõvā`, #17 `liv` drink/eat** — **held.** Transcribing stressed õ as `/ɤ/` vs `/ə/`, and the long-diphthong nuclei as `/uo ie/` vs `/uə iə/`, is a column-wide transcription-convention choice that the liv data applies consistently: õ→`ə` in both `jõvā→jəvaː` and `ārmaztõ→aːrmastə`, and the `uo`/`ie` diphthong nucleus→`ə` in `jūodõ→juːədə`, `sīedõ→siːədə`, and `kuodā→kuədaː`. Changing it is a system-level decision (the reviewer's `/ɤ/` is a legitimate alternative, but not a local error). Recommend reviewer raise as a Livonian-õ convention proposal for the whole liv column.
- **#20 `se` drink `juhkat`** — **held.** `juhkat` is already a valid phonemic IPA string for this word (`h` = preaspiration, consistent with se `giehta→kiehtɑ`; all segments voiceless-appropriate). The reviewer's main demand — adding stress `ˈ` — would break the se column, which marks stress on **none** of its 20 entries (`bussá→pusːa`, `borrat→porːat`, …). The surface=IPA coincidence is a property of the near-phonemic orthography, not proof of a missing transcription. No clear local error; won't-fix.

**Summary:** 8 applied (#1, #3, #12, #13, #14, #15, #18, #19), 12 held. The applied items are all either local outliers contradicting their own column's established convention (#1, #13, #14, #15, #18, #19), a clear phonetic mis-segmentation with no competing convention (#3), or a sourced lexical/citation-form correction (#12). The held items are either already column-consistent or are genuine system-level convention choices (fixed-stress marking for fi/et, monosyllable stress for vep, Livonian-õ symbol, Skolt-prime representation) that should be decided column-wide, not patched on a few entries.

---

## Reviewer round-2 response (再評価 round-2)

I independently verified every "applied" fix against the live per-word data files and re-extracted each relevant full column to test the worker's "held" consistency claims. Methodology was sound and the column-convention arguments hold up.

### Applied fixes — all VERIFIED in live data

- **#1 `sms` heart** — ✓ accept. Live: `words/heart.js:471` = `["vueʹmm", "vuemː"]`. The prime is dropped, matching the established sms column (`eeʹǩǩ→eːkː`, `kåʹdd→kɔdː`, `jeäʹnn→jæːnː`, `peeiʹvv→peːjvː`, `rääʹǩǩes→ræːkːes`, `späʹsseb→spæsːeb`). The worker's column-internal solution (drop, not convert to `ʲ`) is the correct local fix; my original `ʲ` proposal was a column-wide convention preference, not a local error — I withdraw it as a *local* demand.
- **#3 `se` father** — ✓ accept. Live: `words/father.js:467` = `["áhčči", "aːhtʃːi"]`. Geminate length now sits on the affricate unit /tʃː/. Correct per Sammallahti (1998), no competing convention.
- **#12 `vot` love** — ✓ accept. Live: `words/love.js:779` = `["suvata", "ˈsuvata"]`. Citation-form 'to love' sourced from Wiktionary, aligns with cognate krl/olo *suvaita*, and uses the vot column's `a` (not `ɑ`) symbol choice. Lexical sense corrected.
- **#13 `krl` sun** — ✓ accept. Live: `words/sun.js:775` = `["päivy", "ˈpæivy"]`. Vocalic offglide `æi` restored, matching vot `päivä→ˈpæivæ`.
- **#14 `olo` sun** — ✓ accept. Live: `words/sun.js:776` = `["päivy", "ˈpæivy"]`. Same fix.
- **#15 `sjd` hello** — ✓ accept. Live: `words/hello.js:463` = `["тиерв", "tʲierv"]`. Palatalisation diacritic `ʲ` (column-consistent: `tʃalʲm`, `aːdʒʲ`, `kʲedt`, `tʃadzʲ`) + restored /ie/ diphthong. Both my flags (full-segment `j`; dropped `i`) addressed.
- **#18 `smj` thanks** — ✓ accept. Live: `words/thanks.js:469` = `["gijttuo", "kijtːuɔ"]`. Spurious preaspiration `h` removed, geminate length `tː` restored, `uo→uɔ` per column.
- **#19 `smn` hello** — ✓ accept. Live: `words/hello.js:461` = `["tiervâ", "tierva"]`. Erroneous final length removed; final `â→a` now matches the whole smn column (`kietâ→kieta`, `ohtâ→ohta`, `muorâ→muɔra`, etc.).

### Held items — adjudication

- **#2 `sms` water** — ✓ accept the hold. Live `tʃæːtsː` already drops the prime, consistent with the full sms column. Representing the Skolt prime as palatalisation is a legitimate column-wide convention proposal, not a local error; correctly out of scope here.
- **#4–6 `fi` fire/hello/one** — ✓ accept the hold. I re-extracted all 20 fi entries: **zero** carry `ˈ`. My round-1 premise ("the Finnish column carries `ˈ` elsewhere") was wrong — the stress-marked columns are vot/krl/olo/vep, not fi. Adding `ˈ` to three entries would *create* inconsistency. Unmarked fixed stress is a consistent dataset convention. I withdraw #4–6 as local errors.
- **#7–9 `et` fire/eye/hello** — ✓ accept the hold. All 20 et entries are stress-unmarked; same basis as #4–6. Withdrawn.
- **#10–11 `vep` eye/tree** — ✓ accept the hold. The vep column marks stress on polysyllables but consistently omits it on monosyllables (`koir`, `silm`, `tat`, `kuu`, `mam`, `yksʲ`, `pertʲ`, `pu` all bare). `silm`/`pu` match the monosyllable convention; my "surrounding forms are marked" claim cherry-picked polysyllables. Withdrawn.
- **#16–17 `liv` good/drink/eat** — △ accept the hold as a convention choice (but noting a real residual). The liv column applies õ→`ə` consistently (`jõvā→jəvaː`, `ārmaztõ→aːrmastə`) and the long-macron diphthong nucleus→`ə` consistently (`jūodõ→juːədə`, `sīedõ→siːədə`, `kuodā→kuədaː`). My objection (stressed õ = /ɤ/; long-diphthong nuclei = /uo ie/) is a defensible *alternative* convention, not a local outlier. I note in passing that liv renders short `ie` as `iɛ` (`tienū→tiɛnuː`) but long `īe` as `iːə` (`sīedõ→siːədə`) — an orthographically-motivated length split, internally coherent. This is a genuine system-level Livonian-õ/diphthong convention question for a human linguist to settle column-wide; it is **not** an actionable per-entry error and should not hold the file open.
- **#20 `se` drink** — ✓ accept the hold. `juhkat` is a valid phonemic string: `h` = preaspiration (consistent with `giehta→kiehtɑ`), medial `k` already voiceless, initial `j` a glide (no voicing issue). The only demand was stress `ˈ`, which **none** of the 20 se entries carry. No local error. Withdrawn.

### New issues

None. Verification surfaced no new actionable errors.

### Scorecard

- Applied & verified in live data: 8/8 (#1, #3, #12, #13, #14, #15, #18, #19).
- Held & accepted as column-consistent / system-level convention: 12/12 (#2, #4–11, #16, #17, #20).
- Of my round-1 flags, 5 (#4–6 fi, #7–9 et — counting families, the fi/et/vep stress set) are withdrawn outright as based on a mistaken column premise on my part; the rest were correctly fixed or are legitimate convention choices.
- New issues: 0.

The only remaining differences are documented system-level convention choices (fixed-stress marking for fi/et, monosyllable stress for vep, Skolt-prime representation, Livonian stressed-õ/long-diphthong symbol). These are flagged here as a **known limitation needing a human linguist's column-wide decision**, not as actionable per-entry defects. Per loop-termination guidance, there is no concretely actionable next step left for the dev team.

**File status: CLOSED** — nothing left to address.
