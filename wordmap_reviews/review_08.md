# Wordmap review #08 — Afro-Asiatic (non-Semitic) specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a comparative Afroasiaticist whose work covers all five non-Semitic branches of Greenberg's family: Cushitic, Berber, Chadic, Omotic, and the Egyptian-Coptic continuum. My monograph on the consonantal root across Cushitic and Berber draws on Tosco (2003), Hetzron (1980), and Frajzyngier & Shay (2012). For Berber phonology I rely principally on Chaker (1996) and Kossmann (2013); for Hausa on Newman (2000); for Egyptian-Coptic on Loprieno (1995), Allen (2014), and Crum (1939). My specific areas of contention are: Omotic's disputed position, the implosive-vs-breathy distinction in Cushitic, Berber consonant tension (geminate vs simple vs emphatic), and the vowel-quality reconstruction of Coptic omega.

Sources cited throughout: Frajzyngier & Shay (2012) *The Afroasiatic Languages*; Tosco (2003) *The Cushitic Languages*; Chaker (1996) *Manuel de linguistique berbère*; Newman (2000) *The Hausa Language*; Hetzron (1980) "Limits of Cushitic"; Loprieno (1995) *Ancient Egyptian: A Linguistic Introduction*; Allen (2014) *Ancient Egyptian Phonology*; Crum (1939) *A Coptic Dictionary*; Kossmann (2013) *The Arabic Influence on Northern Berber*.

---

## Issues found

### 1. `so` — drink/eat/hand/love — Somali orthographic `c` misread as /tʃ/ (four entries)

**Files:** `drink.js:265`, `eat.js:265`, `hand.js:265`, `love.js:272`

In the standard Somali orthography (SRC 1972), the letter `c` represents the pharyngeal approximant /ʕ/, not the palato-alveolar affricate /tʃ/. This is one of the most distinctive features of Somali phonology and is well established in all reference grammars (Saeed 1999; Orwin 1995). The four affected entries:

| file | display | current IPA | correct IPA |
|------|---------|-------------|-------------|
| drink.js | `cab` | `tʃab` | `ʕab` |
| eat.js | `cun` | `tʃun` | `ʕun` |
| hand.js | `gacmo` | `ɡatʃmo` | `ɡaʕmo` |
| love.js | `jacayl` | `dʒatʃajl` | `dʒaʕajl` |

The pharyngeal /ʕ/ and the affricate /tʃ/ are entirely different places of articulation. The error would mislead any reader attempting to pronounce these words.

---

### 2. `om` — drink/mother — Oromo `dh` is implosive /ɗ/, not breathy /dʱ/

**Files:** `drink.js:266`, `mother.js:272`

In the Qubee (Latin) orthography for Oromo (Afaan Oromoo), the digraph `dh` represents the voiced alveolar implosive /ɗ/, not a breathy-voiced stop /dʱ/. This is unambiguous in Griefenow-Mewis (2001) and confirmed by all instrumental studies of Oromo phonetics. The two affected entries:

| file | display | current IPA | correct IPA |
|------|---------|-------------|-------------|
| drink.js | `dhuguu` | `dʱuɡuː` | `ɗuɡuː` |
| mother.js | `haadha` | `haːdʱa` | `haːɗa` |

Implosives and breathy consonants differ in laryngeal setting: implosives involve a raised glottis with inward airflow; breathy consonants involve a spread glottis. They are cross-linguistically and phonetically distinct. Using /dʱ/ (the symbol for a breathy voiced stop, as found in Indo-Aryan languages) for an Oromo implosive is a category error.

---

### 3. `ha` — all 20 entries — Hausa tones absent throughout

**Files:** all `ha:` entries across all 20 word files

Hausa is a fully tonal language with three contrastive tones: High (H), Low (L), and Falling (F). Tone is lexically contrastive in Hausa — minimal pairs such as `màːlàm` (teacher, L.L) vs. `máːlàm` (H.L) are well documented in Newman (2000). None of the 20 Hausa IPA transcriptions carry any tone diacritics. Representative affected entries: `ruwa` /ɾuːwa/ (expected: /ɾùːwâ/ or /ɾúːwā/ depending on analysis), `rana` /ɾana/ (expected /ɾàːnā/), `ido` /ido/ (expected /ídô/), `wuta` /wuta/ (expected /wùːtā/).

This is a systemic omission affecting the entire Hausa dataset and renders the IPA column non-functional for tone-sensitive uses.

---

### 4. `ha` — one — implosive /ɗ/ transcribed with ejective diacritic /dʼ/

**File:** `one.js:265`

Entry: `ɗaya` → IPA `dʼaja`

Hausa `ɗ` is the voiced alveolar implosive /ɗ/. In IPA, the correct symbol is `ɗ` (Unicode U+0257). The transcription `dʼ` uses the ejective apostrophe (`ʼ`, U+02BC), which denotes an ejective consonant — a fortis stop with simultaneous glottal closure and upward larynx movement. Implosives and ejectives are phonetically and aerodynamically opposite: ejectives have positive supra-glottal air pressure, implosives have negative. The correct IPA for this word is /ɗaja/. (Note: the related `ƙauna` → /kʼauna/ in love.js is *correct*, because Hausa `ƙ` is genuinely an ejective /kʼ/.)

---

### 5. `egy` — hand — ꜥrt transcribed as /dʒeɾet/

**File:** `hand.js:513`

Entry: `𓂝𓂋𓏏` → IPA `dʒeɾet`

The three hieroglyphs are: 𓂝 (Gardiner D36, "forearm", representing the uniliteral **ꜥ**, the pharyngeal), 𓂋 (D21, representing **r**), and 𓏏 (X1, representing **t**, the feminine suffix). The word is therefore **ꜥrt** /ˈʕaːɾat/ (Middle Egyptian reconstruction per Allen 2014). The first consonant ꜥ is a pharyngeal approximant /ʕ/, emphatically not the palato-alveolar affricate /dʒ/. The error may stem from confusing Gardiner D36 with the sign 𓆓 (I10, the horned viper, representing **f**) or with some other sign. This is one of the most consequential errors in the Egyptian dataset.

---

### 6. `egy` — water — final /w/ of *mw* dropped

**File:** `water.js:520`

Entry: `𓈗` → IPA `muː`

The hieroglyph 𓈗 (Gardiner N35A, "ripple of water") is used as a logogram for the word **mw** (plural: **mww**). The standard Middle Egyptian reconstruction is /muːw/ (Loprieno 1995 §3.2; Allen 2014 §2.5). The Coptic reflex ⲙⲟⲟⲩ /moːu/ confirms the historical bilabial glide. Dropping the final /w/ to give /muː/ omits a root consonant and breaks the direct correspondence with the Coptic cognate shown in the same dataset.

---

### 7. `egy` — dog — reduplication /juːjuː/ is unattested

**File:** `dog.js:513`

Entry: `𓃡` → IPA `juːjuː`

The hieroglyph 𓃡 (Gardiner E16/E17, "lying dog") functions both as a determinative and as an ideographic logogram for the Egyptian word **iw** 'dog'. The standard Middle Egyptian reconstruction is /juːw/ (Allen 2014). The transcription /juːjuː/ appears to be an erroneous reduplication, unattested in any Egyptological source. It may have originated from confusing the sign with Gardiner E17 used in longer word spellings, but the reconstructed phonology remains /juːw/.

---

### 8. `cop` — father/fire/drink — Coptic ⲱ (omega) transcribed as /ɔː/ instead of /oː/

**Files:** `father.js:524`, `fire.js:530`, `drink.js:524`

Affected entries:

| file | display | current IPA | correct IPA |
|------|---------|-------------|-------------|
| father.js | `ⲉⲓⲱⲧ` | `ejɔːt` | `ejoːt` |
| fire.js | `ⲕⲣⲱⲙ` | `krɔːm` | `kroːm` |
| drink.js | `ⲥⲱ` | `sɔː` | `soː` |

Sahidic Coptic ⲱ (omega) is standardly reconstructed as the long close-mid back rounded vowel /oː/ (Vergote 1945; Loprieno 1995; Reintges 2004). The open-mid /ɔː/ would be appropriate for some analyses of Bohairic or Fayyumic, but the dataset appears to use Sahidic script forms throughout (ⲥⲱ 'drink', ϩⲏⲧ 'heart' etc. are Sahidic). Using /ɔː/ introduces an inconsistency with the chosen dialect baseline.

---

### 9. `bej` — water — vowel length missing from *yam*

**File:** `water.js:1011`

Entry: `yam` → IPA `jam`

Beja (Cushitic outlier, North Cushitic) has contrastive vowel length. The word for water is **yām** with a long vowel /jaːm/ (Hudson 1976; Roper 1928; note also the near-cognate Arabic /jaːm/ which may be a Beja loanword into early Arabic or vice versa). The transcription /jam/ (short vowel) is incorrect. Beja also has /jaːm/ as its citation form in Tosco (2003, p. 112). Compare the correctly long-vowelled `baab` /baːb/ (father) and `gaal` /ɡaːl/ (one) in the same Beja dataset, showing that the data entry pipeline can handle long vowels — the omission in 'water' appears to be a one-off error.

---

### 10. `shy` — sun — geminate `tt` in *ittij* incorrectly transcribed as /tʃ/

**File:** `sun.js:743`

Entry: `ittij` → IPA `itʃiʒ`

In Tashawit (Chaoui Berber, Algeria), the word for sun/daylight is `ittij` with a geminate dental stop `tt` /tː/. This is the cognate of Kabyle `iṭij` (emphatic `ṭ` = /tˤ/) and should be transcribed as /itːiʒ/. The current IPA /itʃiʒ/ substitutes the palato-alveolar affricate /tʃ/ for the geminate stop /tː/ — a different place and manner of articulation entirely. Compare: the same file correctly transcribes Kabyle `iṭij` as /itˤiʒ/ (emphatic, not affricate), and Tashelhit `tiṭṭ` (eye) as /titˤː/ (emphatic geminate). The Tashawit sun entry is inconsistent with these correct treatments.

---

### 11. `tmh` — dog — glide /j/ transcribed as diphthong nucleus /ɪ/

**File:** `dog.js:887`

Entry: `aydi` → IPA `aɪdi`

All other Berber varieties in the dataset (Kabyle, Tashelhit, Tarifit, Central Atlas Tamazight) correctly transcribe the cognate word `aydi` as /ajdi/, with the palatal glide /j/. Tamasheq `aydi` (Tuareg dog) uses the same etymon and the `y` is phonemically a glide. The transcription /aɪdi/ introduces a diphthong nucleus /ɪ/ (close-mid front), which is neither attested in Tuareg phonological inventories nor consistent with how this segment is transcribed for the same word in four related varieties in the same database.

---

### 12. `so` — water/all entries — Somali pitch accent (lexical tone) absent

**File:** `water.js:272` and all `so:` entries

While Somali is not as fully tonal as Hausa, it has a grammatically and lexically significant accent/pitch system (Hyman 1981; Orwin 1995 §2.3). The accent distinguishes grammatical categories: e.g., the absolutive vs. subject case of nouns uses accent contrast. `biyo` (water) in the absolutive case carries pitch on the first syllable; in other cases the pitch shifts. The complete absence of pitch/accent marking in all 20 Somali entries means that the IPA transcriptions are consistent with no specific case form, which is phonologically underspecified.

---

### 13. `rif` — sun — lemma *dhish* is non-standard and unexpected

**File:** `sun.js:742`

Entry: `dhish` → IPA `ðiʃ`

All other Berber varieties in the dataset use forms of Proto-Berber \*tafukt for 'sun': Tashelhit `tafukt`, Central Atlas `tafukt`, Tamasheq `tafuk`, Tashawit `ittij` (dialectal but attested). Tarifit (Riffian) also uses `tafukt` as the standard word for sun (Kossmann 1999; Stroomer 2001). The form `dhish` /ðiʃ/ does not appear in major Tarifit lexicographic sources. It may be a dialectal term for sunlight/sunshine rather than 'sun', or may be a data entry error. At minimum a source citation is needed; at worst the lemma is wrong.

---

### 14. `egy` — heart — ꜣb/jb initial consonant ambiguity distorts IPA

**File:** `heart.js:513`

Entry: `𓇋𓃀` → IPA `jib`

The hieroglyph sequence 𓇋 (Gardiner M17, reed = **i**/**j**) + 𓃀 (Gardiner E34, hare = **wn** or as phonetic complement) gives the word **jb** 'heart'. The initial 𓇋 in Middle Egyptian represents both the vowel **i** (when used as a vowel letter) and the consonant **j**. Loprieno (1995 §2.3.1) reconstructs **jb** as /ˈʔiːb/ (with initial glottal stop) for Late Middle Egyptian, since by that stage the historical j had shifted to /ʔ/ in many positions. Transcribing it as /jib/ (with palatal approximant /j/) represents an earlier Old Egyptian phonological stage but without indicating the period. The entry conflates two chronologically distinct reconstructions without disambiguation.

---

### 15. `cop` — eat — ⲟⲩ before a vowel should be /w/, not /u/

**File:** `eat.js:524`

Entry: `ⲟⲩⲱⲙ` → IPA `uɔːm`

In Sahidic Coptic, the digraph ⲟⲩ functions as /u/ when syllable-final but as the semivowel /w/ when it immediately precedes another vowel. In `ⲟⲩⲱⲙ`, ⲟⲩ precedes ⲱ (a vowel), so it represents /w/: the word is /woːm/ (with the correction for ⲱ = /oː/ noted in Issue 8 above). The current transcription /uɔːm/ treats ⲟⲩ as a full vowel nucleus and misrepresents the syllable structure. This is well established in Coptic grammars: Lambdin (1983 §2.3) and Layton (2004 §5.3) both specify the semivocalic behaviour of ⲟⲩ before vowels.

---

### 16. `egy` — hello — reconstruction `jined-ħeɾek` diverges from scholarly consensus

**File:** `hello.js:513`

Entry: `𓇋𓈖𓂧𓉔𓂋𓎡` → IPA `jined-ħeɾek`

The hieroglyph sequence spells the Middle Egyptian greeting **ind-ħr.k** (literally "take [your] face," i.e., "how are you"). The verb is **ind** (or **nd** in some analyses), NOT **jined**. Loprieno (1995 §9.1.2) and Faulkner (1962) both cite the citation form as /ˈʔin.dəħ ħaːɾak/ (masc. sg.) or similar. The insertion of an extra syllable `-je-` to produce `jined` is unattested. It may reflect confusion with the prefix conjugation morphology, but no major Egyptological grammar supports the form `jined` as a citation form of this greeting.

---

### 17. `sid` — water — stress/length placement may misassign length

**File:** `water.js:1104`

Entry: `waayyo` → IPA `waːjːo`

Sidaama (Highland East Cushitic; Anbessa & Crass 2002) has the word for water as **waayyo** /wajjoː/, with geminate medial /jː/ and a final long vowel /oː/. The transcription /waːjːo/ places the length mark on the initial vowel (`aː`) and shows a short final /o/, giving a different syllable weight distribution than the attested form. Sidaama is a mora-timed language and the length placement is phonologically significant. Compare the same file's `sid` entries for 'fire': `giiraa` /ɡiːraː/ correctly marks final length; the water entry appears to have shifted the length to the wrong position.

---

### 18. `rif` / `shy` — one — geminate `jj` transcribed as affricate /dʒː/

**Files:** `one.js:742`, `one.js:743`

Entries: `ijj` → IPA `idʒː` (both Tarifit and Tashawit)

In Berber, a geminate palatal glide `jj` is phonemically /jː/ (a long palatal approximant). It is not an affricate. The affricate /dʒ/ is a different segment (it appears in Berber in loanwords and in some dialects through fortition, but not as the regular reflex of a Proto-Berber *j). Tashelhit and Central Atlas Tamazight have the cognate `yan` /jan/ for 'one'; the Tarifit/Tashawit `ijj` is a contracted form of the same etymon with a geminate glide. The IPA /idʒː/ implies a geminate voiced affricate, which is both phonemically unjustified and inconsistent with the cross-Berber data in the same dataset.

---

### 19. `om` — drink — Oromo verb form is infinitive; could note morphological status

**File:** `drink.js:266`

Entry: `dhuguu` → IPA `ɗuɡuː` (correcting for Issue 2 above)

A secondary concern beyond the implosive error: Oromo `dhuguu` is the infinitive form (marked by the suffix `-uu`). The same convention applies to `nyaachuu` (eat.js), `nyaachuu`, etc. This is not an error per se if the dataset consistently uses infinitive forms for Oromo verbs. However, it is worth flagging that the inflected/conjugated stem would be `dhug-` /ɗuɡ/, and users comparing across Cushitic languages might not recognize the `-uu` as an infinitive suffix rather than part of the root.

---

### 20. `cop` — cat — dialect of ⲉⲙⲟⲩ not specified; Bohairic vs Sahidic ambiguity

**File:** `cat.js:524`

Entry: `ⲉⲙⲟⲩ` → IPA `emu`

The word for cat, ⲉⲙⲟⲩ, exists in both Sahidic and Bohairic Coptic but with different pronunciations: Sahidic /emu/, Bohairic /emu/ — these happen to be similar, but the broader issue is that the dataset uses Sahidic script conventions for most entries (e.g., ⲙⲟⲟⲩ 'water' = Sahidic) while some IPA transcriptions reflect Bohairic phonology (ⲉⲓⲱⲧ 'father' as /ejɔːt/ leans Bohairic). The mixed dialect basis is not documented. Crum (1939) distinguishes the two dialects throughout; the dataset should declare which dialect is the primary baseline. For ⲉⲙⲟⲩ specifically, the IPA /emu/ is acceptable for Sahidic but a note on dialect would prevent misinterpretation.

---

### 21. `egy` — sun — reconstruction `riːʕa` lacks standard Egyptological notation cross-reference

**File:** `sun.js:519`

Entry: `𓇳` → IPA `riːʕa`

The hieroglyph 𓇳 (Gardiner N5, "sun disk") is the ideogram for the sun and the solar deity **Rꜥ**. The conventional transliteration is **rꜥ** and the standard Middle Egyptian reconstruction is /ˈriːʕa/ or /ˈrɑːʕ/ depending on the chronological period assumed (Loprieno 1995 §3.3 gives /riːʕa/ for Old Kingdom). The transcription /riːʕa/ is defensible for a specific period. However, using this single form without a period label may be misleading: the Late Egyptian/Coptic reflex is ⲣⲏ /reː/ (shown correctly in the same dataset), showing significant vowel reduction. Cross-referencing the stage assumed for the hieroglyphic IPA would improve consistency with the Coptic entry on the facing row.

---

## Summary

The most critical systematic errors are:

1. **Somali `c` = /ʕ/ not /tʃ/** — four entries directly wrong (Issues 1, 12)
2. **Oromo `dh` = /ɗ/ not /dʱ/** — two entries directly wrong (Issue 2)
3. **Hausa tones absent** — systemic, all 20 entries (Issue 3)
4. **Egyptian hand ꜥrt = /ʕaːɾat/ not /dʒeɾet/** — pharyngeal misidentified as affricate (Issue 5)
5. **Coptic ⲱ = /oː/ not /ɔː/** — three entries (Issue 8)
6. **Egyptian dog /juːw/ not /juːjuː/** — spurious reduplication (Issue 7)

These six problems alone cover 28+ individual field errors and represent failures at the level of orthographic convention (Somali), phonological typology (Oromo implosives, Hausa tones), and Egyptological reconstruction (Egyptian and Coptic).
