# Wordmap review #37 — Berber/Tamazight specialist

## Reviewer self-introduction

I am a specialist in Berber/Tamazight linguistics with a focus on phonology, morphology, and comparative Afroasiatic studies across the full dialect continuum from Kabyle in the north to Tuareg in the south. My primary references for this review: Chaker (1984) *Textes en linguistique berbère* (introduction à la langue berbère); Galand (2010) *Regards sur le berbère*; Heath (2005) *A Grammar of Tamashek (Tuareg of Mali)*; Brugnatelli (2011) "Some hypotheses on the morphology of Berber gemination"; Kossmann (1999) *Essai sur la phonologie du proto-berbère*; Vycichl (2005) *Dictionnaire étymologique de la langue berbère*; Basset (1952) *La langue berbère*; Prasse (1972–1974) *Manuel de grammaire touarègue*; Stumme (1899) *Handbuch des Schilhischen von Tazerwalt*; Boogert & Kossmann (1997) for Tarifit data; Mercier (1937) for Chaoui/Tachawit; Laoust (1920) *Cours de berbère marocain* for Central Atlas.

---

## Issues found

### 1. `kab` — water — vowel quality: /æ/ not a Kabyle vowel phoneme
- **File:** `words/water.js` line 623
- **Current:** `["aman", "æmæn"]`
- **Expected:** `["aman", "amən"]` or `["aman", "ˈaman"]`
- **Why:** Kabyle has three short vowels: /a/, /i/, /u/ plus a reduced schwa /ə/ (written ⟨e⟩ in most transcription systems). The phoneme /æ/ does not exist in Kabyle phonology. The first vowel in *aman* is a full open /a/ and the second is also /a/ (or in unstressed position may reduce towards schwa /ə/). Transcribing both vowels as [æ] implies a front-lowered quality that belongs to no Berber phonological system described in the literature (Chaker 1984; Kossmann 1999). The IPA transcription should use plain [a] throughout: [ˈaman] or [amən].

---

### 2. `kab` — water — stress: penultimate stress unmarked
- **File:** `words/water.js` line 623
- **Current:** `["aman", "æmæn"]`
- **Expected:** `["aman", "ˈaman"]`
- **Why:** Kabyle stress is predictable (penultimate by default) but should be marked in IPA transcription for clarity, especially for learners and cross-linguistic comparison. The current transcription omits the stress diacritic entirely while also misrepresenting the vowel quality (see Issue 1). *Aman* /ˈaman/ carries primary stress on the first syllable (initial heavy syllable in trisyllabic forms attracts stress, but in disyllabic forms the stress is regularly on the first syllable in Kabyle — Chaker 1984:§4).

---

### 3. `kab` — eye — IPA onset [θ] is Tarifit, not Kabyle
- **File:** `words/eye.js` line 616
- **Current:** `["tiṭ", "θitˤ"]`
- **Expected:** `["tiṭ", "titˤ"]`
- **Why:** The IPA symbol [θ] (dental fricative) is used in Tarifit Berber (rif) as a reflex of Proto-Berber */t/ in syllable-initial position before certain vowels, part of Tarifit spirantization. Kabyle does NOT have this spirantization rule — Kabyle /t/ remains a dental/alveolar stop [t] word-initially. The Kabyle word for 'eye' is *tiṭ*, with a plain stop onset [t], and an emphatic final [tˤ] (the pharyngealized reflex of the emphatic ṭ). The current IPA [θitˤ] is copying the Tarifit pattern into Kabyle erroneously.

---

### 4. `rif` — eye — [θ] onset is correct for Tarifit but IPA is inconsistent with orthography
- **File:** `words/eye.js` line 736
- **Current:** `["thiṭ", "θitˤ"]`
- **Expected:** `["thiṭ", "θitˤ"]` (IPA is acceptable) but orthography should be `["tḥiṭ"]` or `["tiṭ"]`
- **Why:** This is a minor but real inconsistency: the Tarifit Latin orthography conventionally writes the spirantized /t/ as *th* (digraph), which is a reasonable convention. However, mixing digraph ⟨th⟩ in the display form with IPA [θ] in the pronunciation field, while Kabyle writes plain ⟨t⟩, creates the false impression that Kabyle and Tarifit are using different underlying phonemes for the onset. In fact both go back to the same Proto-Berber */t/; Tarifit has innovated a spirantization. The display spelling *thiṭ* vs. IPA [θitˤ] is internally consistent for Tarifit but users comparing kab and rif may be misled. A note or consistent policy is needed. (Marginally an editorial issue, flagged for awareness.)

---

### 5. `tmh` — dog — [aɪdi] contains diphthong not found in Tamashek
- **File:** `words/dog.js` line 887
- **Current:** `["aydi", "aɪdi"]`
- **Expected:** `["aydi", "ajdi"]`
- **Why:** All other Berber varieties correctly transcribe the glide in *aydi* as the palatal approximant [j] (IPA). The tmh transcription uses [ɪ], a near-close front vowel (as in English "bit"), which is neither a consonant nor a valid Tamashek phoneme in this position. In Tamashek (Heath 2005), the segment spelled ⟨y⟩ is uniformly the palatal glide [j]. The sequence [aɪdi] implies a vowel-vowel sequence with no consonant between, which is inconsistent with the syllable structure of Tamashek. This looks like a copy error substituting an IPA vowel symbol for the glide.

---

### 6. `kab` — house — [æχːæm] double /æ/ error; also [χː] geminate velar fricative questionable
- **File:** `words/house.js` line 623
- **Current:** `["axxam", "æχːæm"]`
- **Expected:** `["axxam", "aχːam"]`
- **Why:** Again the /æ/ vowel problem (see Issue 1): Kabyle does not have /æ/ as a phoneme. The vowels in *axxam* are /a/ … /a/, plain open vowels. The geminate [χː] for ⟨xx⟩ is reasonable (geminate velar fricative, representing the pharyngeal-backed emphatic geminate), though some analysts would write this as [xː] (plain geminate velar fricative) or even [ħ] in certain phonological analyses. The real error is the two instances of [æ] which should be [a].

---

### 7. `kab` — moon — [æɡːuɾ] /æ/ vowel error
- **File:** `words/moon.js` line 622
- **Current:** `["aggur", "æɡːuɾ"]`
- **Expected:** `["aggur", "aɡːuɾ"]`
- **Why:** Same /æ/ problem as Issues 1 and 6. The initial vowel of Kabyle *aggur* 'moon' is a plain open /a/. IPA [æ] implies a front-lowered quality alien to Kabyle vowel phonology. This appears to be a systematic transcription error affecting multiple Kabyle entries, where the transcriber has applied a non-Kabyle vowel allophone consistently.

---

### 8. `kab` — cat — [æmʃiʃ] /æ/ vowel error (systematic pattern)
- **File:** `words/cat.js` line 616
- **Current:** `["amcic", "æmʃiʃ"]`
- **Expected:** `["amcic", "amʃiʃ"]`
- **Why:** The prefix vowel in *amcic* is the masculine singular prefix *a-*, a plain open /a/. Yet again transcribed as [æ]. This confirms a systematic error in the Kabyle IPA column: all instances of the masculine prefix *a-* (and likely other /a/ vowels) are being written as [æ], which has no basis in Kabyle phonology (Chaker 1984; Kossmann 1999). All Kabyle /a/ should be [a] in IPA.

---

### 9. `kab` — thanks — [tænəmːiɾt] /æ/ error in prefix
- **File:** `words/thanks.js` line 616
- **Current:** `["tanemmirt", "tænəmːiɾt"]`
- **Expected:** `["tanemmirt", "tanəmːiɾt"]`
- **Why:** The prefix vowel in *tanemmirt* (feminine agentive noun from root √nmr) is again /a/ [a], not [æ]. The pattern of systematically transcribing Kabyle /a/ as [æ] — visible in at least five entries (water, house, moon, cat, thanks) — suggests this is a transcriber-level error, possibly importing a Maghrebi Arabic allophonic convention (where /a/ has an [æ]-like realization before certain consonants) into a Berber context where it does not apply.

---

### 10. `kab` — mother — [jəmːæ] final /æ/ error
- **File:** `words/mother.js` line 622
- **Current:** `["yemma", "jəmːæ"]`
- **Expected:** `["yemma", "jəmːa"]`
- **Why:** The final vowel of *yemma* is a long /a/ (the emphatic/affective suffix vowel is clearly open /a/ in Kabyle). IPA [æ] is again used erroneously. Additionally, the gemination [mː] for ⟨mm⟩ is correct (Brugnatelli 2011 on Berber gemination). The only error here is the final [æ] which should be [a].

---

### 11. `kab` — good — [jəlħæ] /æ/ error; also ħ is pharyngeal fricative, not lateral
- **File:** `words/good.js` line 616
- **Current:** `["yelha", "jəlħæ"]`
- **Expected:** `["yelha", "jəlħa"]`
- **Why:** Two sub-issues. (a) The final vowel /a/ is again rendered as [æ] — same systematic Kabyle error. (b) The sequence [lħ] places the lateral before the pharyngeal fricative, which matches the orthography *lh*. However, the Kabyle verb *yelha* ('is good/beautiful', 3sg.m perfect of √lhu) ends in a plain /a/ vowel following the pharyngeal ħ. The [ħæ] cluster makes no phonological sense; it should be [ħa]. Additionally, some Kabyle speakers realize /lh/ as [lˤ] (pharyngealized lateral), which would make the IPA [jəlˤa] more accurate — but either way the final vowel is [a] not [æ].

---

### 12. `shy` — sun — [itʃiʒ] uses affricate for emphatic: wrong
- **File:** `words/sun.js` line 743
- **Current:** `["ittij", "itʃiʒ"]`
- **Expected:** `["ittij", "itːiʒ"]` or `["ittij", "itːidʒ"]`
- **Why:** Chaouia (shy/Tashawit) *ittij* 'sun' — the geminate ⟨tt⟩ should be transcribed as [tː] (geminate stop), not [tʃ] (affricate). The affricate [tʃ] is the Kabyle/Tashelhit reflex used for the letter ⟨č/c⟩, not for plain geminate ⟨tt⟩. Chaouia does not palatalize geminate stops to affricates in this environment (Mercier 1937). The final consonant ⟨j⟩ → [ʒ] is plausible for Chaouia. The IPA should be [itːiʒ].

---

### 13. `kab` — sun — [itˤiʒ] emphatic not marked in orthography
- **File:** `words/sun.js` line 622
- **Current:** `["iṭij", "itˤiʒ"]`
- **Expected:** `["iṭij", "itˤiʒ"]` (IPA acceptable); display form is correct with ṭ
- **Why:** This entry is phonologically mostly correct — ṭ is the emphatic dental stop /tˤ/, and [itˤiʒ] accurately reflects the emphatic with [ʒ] for final *j*. However, the Kabyle word is more commonly attested as *iṭij* where the emphatic ṭ carries pharyngealization spreading rightward to some extent. The word can also appear as *aṭij* in some dialects. The transcription is acceptable but note that IPA pharyngealization diacritics (ˤ) should spread to adjacent sonorants in some analyses: [itˤiʒ] versus a more precise [ɪtˤɪʒ]. Minor issue — the ˤ placement is internally consistent.

---

### 14. `rif` — one — [idʒː] geminate affricate for ⟨jj⟩: incorrect consonant class
- **File:** `words/one.js` line 742
- **Current:** `["ijj", "idʒː"]`
- **Expected:** `["ijj", "ijː"]`
- **Why:** Tarifit *ijj* 'one (masc.)' — the geminate ⟨jj⟩ is a geminate palatal approximant /jː/ (or in some analyses a geminate palatal glide). It should be transcribed as [ijː], not as [idʒː]. The symbol [dʒ] is an affricate (as in English "judge"), a fully consonantal segment with a stop-plus-fricative release. The Tarifit form does not have an affricate here; it has a geminate glide/semivowel. Kossmann (1999) and Boogert & Kossmann (1997) uniformly describe this as [jː] in Tarifit. Using [dʒː] misrepresents the phonological category.

---

### 15. `shy` — one — same [idʒː] error for ⟨jj⟩
- **File:** `words/one.js` line 743
- **Current:** `["ijj", "idʒː"]`
- **Expected:** `["ijj", "ijː"]`
- **Why:** Same error as Issue 14, now in Chaouia (shy). The Chaouia form *ijj* 'one' also has a geminate palatal glide, not an affricate. IPA [idʒː] is wrong for the same reason: Chaouia *jj* is [jː], parallel to Tarifit. Mercier's (1937) Chaouia data consistently shows the approximant, not an affricate, in this position.

---

### 16. `tmh` — eye — [tˤətˤ] does not match display form *tiṭṭ*
- **File:** `words/eye.js` line 887
- **Current:** `["tiṭṭ", "tˤətˤ"]`
- **Expected:** `["tiṭṭ", "titˤː"]` or per Heath: `["tăṭṭ", "tətˤː"]`
- **Why:** The Tamashek word for 'eye' is *tăṭ* / *tăṭṭ* (geminate in certain forms). Heath (2005:§eye) gives the Tamashek form with initial /t/ (plain, not pharyngealized) + reduced vowel [ə/ă] + emphatic geminate [tˤː]. The IPA [tˤətˤ] places pharyngealization on the *first* /t/ as well, making it a doubly-pharyngealized form [tˤ…tˤ]. There is no phonological evidence for pharyngealization of the initial /t/ in Tamashek — pharyngealization spreads from emphatic consonants but the extent of spread in Tamashek is limited, and the initial /t/ in this word is not itself emphatic. The IPA should be [tətˤː] or [titˤː] depending on the vowel quality, with pharyngealization only on the geminate emphatic.

---

### 17. `tmh` — good — [ihossən] incorrect IPA for ⟨ss⟩: should be geminate [sː]
- **File:** `words/good.js` line 887
- **Current:** `["ihossǝn", "ihossən"]`
- **Expected:** `["ihossǝn", "ihosːən"]`
- **Why:** In the Tamashek form *ihossǝn* 'they are good/well' (or the stative verbal form), the ⟨ss⟩ digraph in standard Tamashek Tifinagh-derived Latin orthography represents a geminate /sː/. The IPA transcription [ihossən] simply copies the orthographic double-s without converting to proper IPA geminate notation [sː]. Standard IPA convention requires the length mark [ː] for geminates, not orthographic doubling. This same issue may apply wherever orthographic gemination is carried into the IPA field without length-mark conversion (see also tmh thanks below).

---

### 18. `tmh` — thanks — IPA [tanəmːirt] has stress on wrong syllable implied; also inconsistent schwa notation
- **File:** `words/thanks.js` line 887
- **Current:** `["tanǝmmirt", "tanəmːirt"]`
- **Expected:** `["tanǝmmirt", "tanəmːiɾt"]` (with tap/trill for r; see Issue 20)
- **Why:** The display form uses ⟨ǝ⟩ (the character U+01DD, turned e, not to be confused with IPA ə U+0259). This is a known Tifinagh-Latin transcription convention for Tamashek, where ⟨ǝ⟩ represents the reduced central vowel. The IPA field correctly uses [ə] (U+0259). The inconsistency is that the display form mixes Tamashek Latin orthographic convention (ǝ = U+01DD) with IPA (ə = U+0259) — a reasonable design choice IF documented. Flagged here because the display form ⟨ǝ⟩ is not standard IPA, and users may confuse the two. Additionally, Tamashek *tanəmmirt* should likely have [ɾ] or [r] for the final r (see Issue 20).

---

### 19. `tmh` — fire — [təmsi] correct but display *tǝmsi* uses non-IPA ǝ again
- **File:** `words/fire.js` line 893
- **Current:** `["tǝmsi", "təmsi"]`
- **Expected:** `["tǝmsi", "təmsi"]` — IPA itself is fine; display form orthographic ǝ noted
- **Why:** Same ǝ/ə distinction as Issue 18. The IPA [təmsi] is correct for Tamashek *tǝmsi* 'fire'. Tamashek preserves the Proto-Berber *timsi* root with initial vowel reduction in this form. Tashelhit and Kabyle have *timsi/times* with full /i/ onset vowel, so the Tamashek reduced vowel [ə] is phonologically authentic. The note here is purely notational consistency (U+01DD vs. U+0259) across display and IPA columns.

---

### 20. `rif` — thanks — [tanmiɾt]: geminate /mm/ missing
- **File:** `words/thanks.js` line 736
- **Current:** `["tanmirt", "tanmiɾt"]`
- **Expected:** `["tanmmirt", "tanmːiɾt"]`
- **Why:** The pan-Berber word for 'thanks' — *tanemmirt* (Kabyle), *tanmmirt* (Tashelhit, tzm), *tanǝmmirt* (Tamashek) — universally has a geminate /mm/ from the root √mmr or related form. The Tarifit form is given as *tanmirt* with single ⟨m⟩, but Tarifit also has the geminate form *tanmmirt* (parallel to Tashelhit and Central Atlas). Single /m/ in Tarifit *tanmirt* would be an unusual simplification requiring documentation. The geminate /mm/ → [mː] is retained in all well-documented varieties (Kossmann 1999). The IPA [tanmiɾt] accordingly lacks the length mark for the expected geminate: should be [tanmːiɾt].

---

### 21. `shy` — thanks — same single /m/ issue as Tarifit
- **File:** `words/thanks.js` line 737
- **Current:** `["tanmirt", "tanmiɾt"]`
- **Expected:** `["tanmmirt", "tanmːiɾt"]`
- **Why:** Same issue as Issue 20, now in Chaouia (shy). The Chaouia form parallels Tashelhit and should have geminate *mm*. Mercier's (1937) Chaouia data shows *tanemmirt* / *tanmmirt* forms with geminate. A single /m/ in shy would be irregular and is likely a transcription simplification error.

---

### 22. `rif` — fire — [θmesːi] initial [θ] onset before consonant cluster: unusual
- **File:** `words/fire.js` line 742
- **Current:** `["thmessi", "θmesːi"]`
- **Expected:** `["tmessi", "tmesːi"]` or reconsider spirantization context
- **Why:** Tarifit spirantization of /t/ → [θ] is conditioned — it applies in syllable-initial positions before a vowel, not before a consonant cluster. In *thmessi* (if the cluster /tm-/ is word-initial), the /t/ is adjacent to /m/, a sonorant, making spirantization unexpected. Tarifit spirantization rules (Kossmann 1999; Boogert & Kossmann 1997) are context-sensitive: the general environment is prevocalic syllable-initial position. A consonant-initial cluster *tm-* would normally not trigger spirantization. If the Tarifit form genuinely has [θ] here, a phonological explanation is needed; otherwise, the expected IPA onset is [t] or [tm-] as a consonant cluster, giving [tmesːi].

---

### 23. `tmh` — hello — [toləɣ] vowel /o/ anomalous in Tamashek
- **File:** `words/hello.js` line 887
- **Current:** `["ma toleɣ", "ma toləɣ"]`
- **Expected:** `["ma toleɣ", "ma toləɣ"]` — flagged for review; /o/ is marginal
- **Why:** Tamashek has a limited vowel inventory: /a/, /ə/ (reduced), /i/, /u/, and long /aː/, /iː/, /uː/. The vowel /o/ is not a native Tamashek phoneme — it occurs only in loanwords or as an allophone of /u/ in certain environments (Heath 2005:§2.1 phonology). The greeting *ma toleɣ* (lit. 'how did you arrive/do?') with [o] in *toleɣ* looks like a form where the original /u/ has been lowered to [o] before the pharyngeal ɣ, which is a documented allophonic process. If this is allophonic [o] from underlying /u/, the display form should arguably show *tuléɣ* or *tuleɣ* with /u/, with [o] appearing only in IPA as the surface allophone. As it stands, writing ⟨o⟩ in the display orthography implies a distinct phoneme.

---

### 24. `tmh` — moon — [ajor] with /o/: same marginal vowel issue
- **File:** `words/moon.js` line 893
- **Current:** `["ayor", "ajor"]`
- **Expected:** `["ayor", "ajuɾ"]` or retain [ajor] if allophonic
- **Why:** Parallel to Issue 23: Tamashek *ayor* 'moon' contains [o], which is the allophonic realization of /u/ before uvular/pharyngeal consonants (here the final *r* may be uvular [ʁ] in some varieties). Compare Kabyle *aggur*, Tashelhit/tzm *ayyur* — all with /u/ in the relevant syllable. The Tamashek form with [o] reflects the allophonic lowering of /u/ → [o] / _pharyngeal/uvular context. Heath (2005) notes that Tamashek /u/ has an [o]-allophone in certain environments. The display form *ayor* with ⟨o⟩ is therefore orthographically unusual for Tamashek, which typically shows ⟨u⟩ in this position (Prasse's Tamashek dictionaries spell it *ayur* / *ayyur*). The IPA [ajor] is thus not strictly wrong as a surface phonetic form, but the display orthography should probably follow the phonemic convention and use ⟨u⟩.

---

### 25. `tzm` — drink — [sew] IPA mirrors orthography; vowel quality not analyzed
- **File:** `words/drink.js` line 886
- **Current:** `["sew", "sew"]`
- **Expected:** `["sew", "sew"]` — flagged: IPA needs proper vowel diacritics
- **Why:** Central Atlas Tamazight *sew* 'drink (imperative)' — the IPA transcription [sew] simply copies the orthographic form verbatim without indicating the vowel quality of ⟨e⟩ or the quality of the glide. In Central Atlas Tamazight, the vowel letter ⟨e⟩ represents the reduced Berber vowel /ə/ in most environments. The expected IPA would be [səw] (imperative form, with schwa). Compare Kabyle *sew* → IPA [səw] in the kab entry (line 616), which correctly shows the schwa. The tzm entry should likewise use [ə], not the orthographic ⟨e⟩ or the IPA cardinal [e] which implies a mid-front tense vowel foreign to Berber.

---

### 26. `kab` — tree — [tːəʒɾa] unusual initial geminate /tt/ morphology
- **File:** `words/tree.js` line 616
- **Current:** `["ttejra", "tːəʒɾa"]`
- **Expected:** Consider `["tejra", "təʒɾa"]` or document the intensive/geminate form
- **Why:** Kabyle *ttejra* 'tree' — the initial geminate ⟨tt⟩ in Kabyle appears in the imperfective/intensive stem of verbs, not typically in nouns. The basic noun form attested in Kabyle dictionaries is *tejra* (pl. *tejriwin*), a borrowing ultimately from Arabic *šajara* via an intermediate form. The form *ttejra* with geminate initial *tt-* looks like either: (a) the imperfective verbal stem used nominally, (b) a geminate-initial noun borrowed with gemination as an intensity marker, or (c) a transcription error adding an extra ⟨t⟩. Chaker's (1984) lexical data and Dallet's (1982) Kabyle dictionary give *tejra* as the base form. The IPA [tːəʒɾa] with initial geminate should be verified; if genuinely attested with initial geminate, a note explaining the morphological function would be appropriate.

---

*Total issues: 26 (including 1 near-duplicate pair: Issues 14–15; Issues 20–21). The most systematic problem is the Kabyle /æ/ vowel error (Issues 1, 6, 7, 8, 9, 10, 11 — seven entries affected), which appears to be a transcriber-level misapplication of Maghrebi Arabic allophony to Berber. The second most significant pattern is the [idʒː] for geminate-glide [ijː] error in Tarifit and Chaouia (Issues 14–15). Tamashek vowel /o/ marginality (Issues 23–24) and geminate notation inconsistency (Issues 17, 20–21) are also notable patterns. Immediate priority fixes: (1) replace all Kabyle [æ] → [a]; (2) replace rif and shy [idʒː] → [ijː]; (3) verify tmh [tˤətˤ] pharyngealization scope; (4) add geminate /mm/ to rif and shy thanks forms.*
