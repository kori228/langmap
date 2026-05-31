# Wordmap review #64 — Basque & language-isolates specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a typologist and phonologist specialising in language isolates and small genetic units of Eurasia and the Americas: Basque (Euskara), the Yeniseian family (esp. Ket), Ainu, Nivkh (Gilyak), Burushaski, and the Misumalpan languages of Central America (Miskito, Sumo/Mayangna). My work centres on the phonetic detail that broad-transcription datasets routinely lose — Basque's contrastive /h/ and its three-way sibilant system, Ainu's pitch accent and vowel length, Ket's word tones, Nivkh's obstruent harmony and uvular series, and Burushaski's retroflex/aspirate inventory. For this review my primary sources are: Hualde & Ortiz de Urbina, *A Grammar of Basque* (Mouton de Gruyter, 2003), esp. the phonology chapters by Hualde; Trask, *The History of Basque* (1997); Refsing, *The Ainu Language: The Morphology and Syntax of the Shizunai Dialect* (1986) and Tamura, *The Ainu Language* (2000); Vajda, *Ket* (LINCOM, 2004) for Yeniseian tone; Gruzdeva, *Nivkh* (LINCOM, 1998); Berger, *Die Burushaski-Sprache von Hunza und Nager* (1998); and Norwood/CIDCA materials on Sumu/Mayangna (note: the dataset's `sum` is **Sumo/Mayangna**, a Misumalpan language of Nicaragua/Honduras — *not* Sumerian; this is the single most important framing point for the `sum` rows below). A recurring, mechanical problem across all six of my codes is the **surface=IPA copy**: an entry where the second array element is just the orthographic string re-typed, with no phonetic interpretation applied at all.

---

## Issues found

### 1. `eu` — heart — Basque /h/ is dropped and the sibilant is mis-typed
- **File:** `words/heart.js` line 169
- **Current:** `["bihotz", "biot͡s"]`
- **Expected:** `["bihotz", "bihot͡s̻"]`
- **Why:** *bihotz* contains orthographic ⟨h⟩, which is fully pronounced [h] in the northern (Lapurdian, Zuberoan, Nafarroa Beherea) dialects that preserve aspiration; rendering it as [biot͡s] silently adopts the aspiration-less southern norm and erases the very feature that makes Basque phonologically distinctive. Moreover ⟨tz⟩ is the **laminal** affricate /t͡s̻/, not the apical /t͡s̺/; Hualde (in Hualde & Ortiz de Urbina 2003, §1.2) stresses the three-way ⟨z⟩=[s̻] / ⟨s⟩=[s̺] / ⟨tz tx⟩ contrast. At minimum the /h/ should be represented or flagged. (Hualde & Ortiz de Urbina 2003, Phonology.)

### 2. `eu` — tree — laminal vs. apical sibilant not distinguished
- **File:** `words/tree.js` line 169
- **Current:** `["zuhaitz", "suhait͡s"]`
- **Expected:** `["zuhaitz", "s̻uhait͡s̻"]`
- **Why:** Word-initial ⟨z⟩ in *zuhaitz* is the laminal/dorsal sibilant /s̻/, contrasting with apical ⟨s⟩ /s̺/; transcribing it as plain [s] collapses a phonemic distinction. The transcription does correctly keep [h] here, which makes the omission of [h] in *bihotz* (Issue 1) internally inconsistent. (Hualde & Ortiz de Urbina 2003, §1.2.)

### 3. `eu` — sun — ⟨z⟩ rendered as undifferentiated [s]
- **File:** `words/sun.js` line 169
- **Current:** `["eguzki", "eɡuski"]`
- **Expected:** `["eguzki", "eɣus̻ki"]`
- **Why:** Two problems. (a) The ⟨z⟩ of *eguzki* is laminal /s̻/, not the apical [s] of the current transcription. (b) Intervocalic ⟨g⟩ is lenited to the approximant [ɣ] in Basque, exactly as ⟨d⟩→[ð] is correctly shown in *edan* (Issue 12); the stop [ɡ] is the post-pausal/post-nasal allophone, not the intervocalic one. (Hualde & Ortiz de Urbina 2003, §1.2.1, spirantisation of voiced stops.)

### 4. `eu` — moon — intervocalic ⟨g⟩ should be spirantised
- **File:** `words/moon.js` line 169
- **Current:** `["ilargi", "ilaɾɡi"]`
- **Expected:** `["ilargi", "ilaɾɣi"]`
- **Why:** Post-rhotic/intervocalic ⟨g⟩ in *ilargi* surfaces as the approximant [ɣ], parallel to the [ð] correctly given for *edan*. Using the plosive [ɡ] is the wrong allophone for this environment. (Hualde & Ortiz de Urbina 2003, voiced-stop spirantisation.)

### 5. `eu` — eye — intervocalic ⟨g⟩ allophone
- **File:** `words/eye.js` line 169
- **Current:** `["begi", "beɡi"]`
- **Expected:** `["begi", "beɣi"]`
- **Why:** Same spirantisation rule: *begi* has intervocalic ⟨g⟩ → [ɣ]. The stop [ɡ] is not the intervocalic realisation. (Hualde & Ortiz de Urbina 2003.)

### 6. `eu` — thanks — degemination of ⟨rr⟩ loses the trill
- **File:** `words/thanks.js` line 169
- **Current:** `["eskerrik asko", "eskerik asko"]`
- **Expected:** `["eskerrik asko", "es̻kerˈik as̺ko"]`
- **Why:** Orthographic ⟨rr⟩ in *eskerrik* is the **trill** /r/, contrasting phonemically with the tap /ɾ/ written ⟨r⟩; the current [eskerik] uses a single tap and so neutralises the rr/r contrast (cf. Basque minimal pairs like *ere* 'also' vs *erre* 'to burn'). Additionally both sibilants are mis-specified: ⟨sk⟩ ⟨sko⟩ contain apical /s̺/, while there is no marking of which is which. (Hualde & Ortiz de Urbina 2003, §1.2; Trask 1997 on the tap/trill contrast.)

### 7. `eu` — hello — sibilant + vowel of *kaixo*
- **File:** `words/hello.js` line 169
- **Current:** `["kaixo", "kaiʃo"]`
- **Expected:** `["kaixo", "kajʃo"]`
- **Why:** The transcription is essentially correct in treating ⟨x⟩ = [ʃ], but the ⟨ai⟩ sequence before a consonant is phonetically the diphthong [aj], not a hiatus [a.i]; a narrower transcription should show the glide. Minor, but consistent with how other diphthongs are handled elsewhere in the set. (Hualde & Ortiz de Urbina 2003, §1.1, diphthongs.)

### 8. `ain` — thanks — spurious long vowel inserted
- **File:** `words/thanks.js` line 155
- **Current:** `["イヤイライケレ", "ijairaːikeɾe"]`
- **Expected:** `["イヤイライケレ", "ijajrajkeɾe"]`
- **Why:** *iyairaykere* (イヤイライケレ) has no phonemic long vowel; Ainu vowel length is not contrastive in the way the [aː] here implies, and there is certainly no source for a lengthened [raː]. The katakana shows ライ = /raj/, a diphthong, so the sequence is /i.jaj.raj.ke.re/. The inserted [aː] is an error; the ⟨ai⟩ sequences should be the glide diphthong [aj]. (Refsing 1986; Tamura 2000, ch. on phonology — Ainu /j/ and diphthongs.)

### 9. `ain` — hello — final-syllable vowel and accent of *irankarapte*
- **File:** `words/hello.js` line 155
- **Current:** `["イランカラプテ", "iɾankaɾapute"]`
- **Expected:** `["イランカラプテ", "iˈrankarapte"]`
- **Why:** The standard citation form is *irankarapte*; the dataset has inserted an epenthetic [u] after the ⟨プ⟩ (pu) giving [...rapute], but the syllabic structure here is /rap.te/ — the ⟨プ⟩ writes a coda /p/, not /pu/ (Ainu katakana uses small/coda conventions for which the plain プ here represents syllable-final p). Ainu also has predictable pitch accent (Tamura 2000): the accent on this word falls on the second syllable. The epenthetic vowel and the missing accent are both defects. (Refsing 1986 §2; Tamura 2000.)

### 10. `ain` — hand — epenthetic final vowel in *tek*
- **File:** `words/hand.js` line 155
- **Current:** `["テク", "teku"]`
- **Expected:** `["テク", "tek"]`
- **Why:** 'hand' is *tek*, a closed monosyllable ending in /k/; テク is the conventional katakana spelling of coda /k/ (Ainu writes final consonants with a -u/-o kana). The transcription [teku] wrongly reads the orthographic vowel as phonemic, adding a syllable that does not exist. (Tamura 2000, Ainu word list; Refsing 1986.)

### 11. `ain` — eye — epenthetic final vowel in *sik*
- **File:** `words/eye.js` line 155
- **Current:** `["シク", "ɕiku"]`
- **Expected:** `["シク", "ɕik"]`
- **Why:** 'eye' is *sik* /ɕik/, a closed monosyllable; シク spells coda /k/, not a /ku/ syllable. As with *tek* (Issue 10) the dataset has read the kana mater-vowel as a real vowel. The palatalised onset [ɕ] is correctly given. (Tamura 2000; Refsing 1986.)

### 12. `ket` — father — vowel length / quality of *ɔb*
- **File:** `words/father.js` line 144
- **Current:** `["ɔб", "oːp"]`
- **Expected:** `["об", "oˀp"]` (or with the falling/glottalised tone marked)
- **Why:** Two issues. (a) The surface field is written with a stray Latin/IPA ⟨ɔ⟩ glued to Cyrillic ⟨б⟩ ("ɔб") — a mixed-script typo; the Ket Cyrillic orthography would write об. (b) More importantly, Ket is a **tone language** (Vajda 2004 distinguishes four tonemes, including a glottalised/"laryngealised" falling tone); the monosyllable *ōp* 'father' carries a specific toneme and a laryngeal feature that a flat [oːp] does not represent. At minimum the tone should be marked; the bare length mark [ːp] is not the same thing. (Vajda 2004, *Ket*, §2 tone.)

### 13. `ket` — water — Ket word tone not marked
- **File:** `words/water.js` line 144
- **Current:** `["уьл", "ulʲ"]`
- **Expected:** `["уьл", " úl(ʲ)"]` (high/even tone marked)
- **Why:** *ūlʲ* 'water' is a tone-bearing monosyllable in Ket; Vajda (2004) shows the four-way tonal contrast operates precisely on such short roots, and the lexical tone is the only thing distinguishing some near-homophones. The transcription [ulʲ] records segments but discards the toneme — the single most characteristic feature of Yeniseian phonology. (Vajda 2004, §2.)

### 14. `ket` — eye — toneless monosyllable / vowel quality
- **File:** `words/eye.js` line 144
- **Current:** `["де", "de"]`
- **Expected:** `["де", "déˀ"]` (glottalised falling tone)
- **Why:** *dèˀ* 'eye' is one of Vajda's textbook examples of a glottalised-tone monosyllable; the flat [de] gives neither the tone nor the laryngealisation. As with Issues 12–13, Ket lexical tone is being systematically omitted across this code. (Vajda 2004, §2.)

### 15. `niv` — thanks — Nivkh /ɯ/ in *tʰumg* not shown; aspiration
- **File:** `words/thanks.js` line 143
- **Current:** `["туьмг", "tumɡ"]`
- **Expected:** `["туьмг", "tʰɯmɡ"]`
- **Why:** The Nivkh Cyrillic digraph ⟨уь⟩ spells the high central/back unrounded vowel /ɯ/ (as the dataset itself correctly renders elsewhere — e.g. *ытык*→[ɯtɯk], *ымык*→[ɯmɯk] in this very code). Here it has been transcribed as plain [u], which is inconsistent and wrong. Nivkh also has a four-way stop contrast (plain/aspirated/voiced + the alternating series); word-initial /t/ here is the aspirated /tʰ/. (Gruzdeva 1998, *Nivkh*, phonology.)

### 16. `niv` — drink — palatalisation and obstruent series of *rakʲ*
- **File:** `words/drink.js` line 143
- **Current:** `["ракь", "rakʲ"]`
- **Expected:** `["ракь", "raqʲ" ~ "raɣʲ"]`
- **Why:** The soft-sign ⟨кь⟩ is correctly read as a palatalised dorsal, but Nivkh has a phonemic **uvular** series (q, qʰ, χ, ʁ) distinct from the velars, and Nivkh obstruents alternate (the well-known initial consonant mutation/обструентное чередование). A bare velar [kʲ] under-specifies which series this stop belongs to; given the low vowel /a/ the dorsal is typically uvular [q]. The entry should at least flag the velar/uvular distinction central to Nivkh. (Gruzdeva 1998, §2.2.)

### 17. `niv` — cat — borrowed Russian *koshka* tagged as Nivkh with Russian phonology
- **File:** `words/cat.js` line 143
- **Current:** `["кошка", "koʂka"]`
- **Expected:** `["кошка", "koʂka"]` — flag as Russian loan; same issue in `ket` cat (`words/cat.js` line 144, identical `["кошка", "koʂka"]`)
- **Why:** Both Nivkh and Ket simply give Russian *кошка* [koʂka]. This is defensible (there is no native domestic-cat word and both communities use the Russian term), but the entry is phonetically just Russian — including the Russian retroflex [ʂ] — and should be marked as a loan so it is not read as evidence about native Nivkh/Ket phonotactics. The duplication across two unrelated isolates with byte-identical IPA also indicates a copy rather than independent fieldwork. (Gruzdeva 1998; Vajda 2004 — neither lists a native felid term.)

### 18. `bsk` — water — Burushaski aspirated retroflex affricate
- **File:** `words/water.js` line 949
- **Current:** `["čhil", "tʂʰil"]`
- **Expected:** `["čhil", "ʈ͡ʂʰil"]`
- **Why:** Burushaski *čhil* 'water' begins with the **aspirated retroflex affricate**. The retroflex affricate should carry the retroflex tie/stop symbol ʈ͡ʂ (Berger 1998 transcribes a full ⟨čh⟩ = aspirated retroflex č). Writing it as [tʂʰ] with a plain dental [t] onset misrepresents the place of the stop portion as dental rather than retroflex; the whole affricate is retroflex. (Berger 1998, *Die Burushaski-Sprache von Hunza und Nager*, Bd. I, phonology.)

### 19. `bsk` — eye — bound form transcribed without retroflex marking and stripped of obligatory possessor
- **File:** `words/eye.js` line 942
- **Current:** `["-lčin", "ltʂin"]`
- **Expected:** `["-lčin", "-l̩t͡ʂin"]` (retroflex affricate; leading hyphen = inalienable prefix slot)
- **Why:** Burushaski body-part nouns are **inalienably possessed** and obligatorily carry a pronominal prefix; the lemma is correctly cited with a leading hyphen in the surface field, but the IPA drops the hyphen, hiding the bound status. The ⟨č⟩ here is again the retroflex affricate /t͡ʂ/ and should be marked retroflex, not given the plain [tʂ] sequence with a dental onset. (Berger 1998; Hualde-style narrow transcription conventions.)

### 20. `bsk` — hand — bound noun, IPA drops the possessor hyphen
- **File:** `words/hand.js` line 942
- **Current:** `["-rin", "rin"]`
- **Expected:** `["-rin", "-rin"]`
- **Why:** *-rén/-rin* 'hand' is another inalienably possessed body-part noun; the surface field correctly shows the prefix-requiring hyphen, but the IPA field silently removes it, so the bound morphological status (a defining trait of the Burushaski body-part lexicon, alongside *-us* 'heart', *-lčin* 'eye') is lost in the phonetic field. The three bound forms in this code (heart `-us`, eye `-lčin`, hand `-rin`) should be treated consistently. (Berger 1998, inalienable possession.)

### 21. `bsk` — good — retroflex sibilant onset of *shua*
- **File:** `words/good.js` line 942
- **Current:** `["shua", "ʂua"]`
- **Expected:** `["shua", "ʂuá"]` (mark stress/length) — vs. `hello` line 942 `["šuá", "ʂuaː"]`
- **Why:** This is correct in giving the retroflex [ʂ], but compare the `bsk` 'hello' entry *šuá* → [ʂuaː] (line 942 of hello.js): the same root *šuá* is transcribed once with a long final [aː] and once without, and the orthography differs (⟨shua⟩ vs ⟨šuá⟩). One of the two is wrong — Burushaski has phonemic vowel length, so [ʂua] and [ʂuaː] are not interchangeable. The pair should be reconciled. (Berger 1998, vowel length.)

### 22. `sum` — IDENTITY — `sum` is Sumo/Mayangna (Misumalpan), and most rows are surface=IPA copies
- **File:** `words/water.js` line 643 (and parallel rows across all 20 files)
- **Current:** `["was", "was"]` (water); cf. `one` `["as","as"]`, `love` `["walai","walai"]`, `good` `["pain","pain"]`, `hello` `["naksa","naksa"]`, `dog` `["suluk","suluk"]`
- **Expected:** genuine phonetic transcriptions, e.g. water `["was", "was"]`→ verify vowel [a]; the issue is that the IPA slot is a verbatim copy of the orthography
- **Why:** First, the framing: `sum` resolves in `lang_names.js` to **"Sumo"** and in `lang-filter.js` to the **Misumalpan** family — i.e. Sumo/Mayangna of Nicaragua/Honduras, sister to Miskito — **not Sumerian**. Any reviewer (or user) reading these as cuneiform-era Sumerian would be misled, so the dataset's intent should be confirmed and the rows checked against Norwood's Mayangna materials / CIDCA dictionaries. Second, at least 8 of the 20 `sum` rows have an IPA field that is a character-for-character copy of the Latin orthography (was, as, walai, pain, naksa, suluk, di, waiku), meaning no phonological interpretation (stress, vowel quality, the Mayangna /ʔ/ and prenasalised stops) has been applied. These should be re-transcribed, not echoed. (Norwood, *Gramática de la lengua sumu*; CIDCA Mayangna lexicon.)

### 23. `sum` — eat — orthographic ⟨r⟩ tapped but stress unmarked; check vowel
- **File:** `words/eat.js` line 636
- **Current:** `["piru", "piɾu"]`
- **Expected:** `["piru", "ˈpiɾu"]`
- **Why:** Unlike the copied rows in Issue 22, this row *does* interpret ⟨r⟩ as a tap [ɾ], which is good — but it is then inconsistent with rows like *nakra* (eye, [nakɾa], also tapped) versus the un-interpreted copies, showing the transcription was done piecemeal. Mayangna has predictable word stress (Norwood) which is unmarked throughout the code; adding it would make the tapped-r rows and the copied rows internally consistent. (Norwood, Mayangna grammar.)

### 24. `sum` — moon / cat / mother — final orthographic ⟨h⟩ taken as phonetic [h]
- **File:** `words/moon.js` line 642
- **Current:** `["waikuh", "waikuh"]`; cf. `cat` `["mistuh","mistuh"]`, `mother` `["nuh","nuh"]`, `fire` `["kuh","kuh"]`
- **Expected:** verify whether final ⟨h⟩ is a real segment, a glottal /ʔ/, or an orthographic vowel-length/quality marker, e.g. `["waikuh", "waikuʔ"]` or `["waikuh", "waiˈku"]`
- **Why:** Four `sum` rows end in orthographic ⟨h⟩ and all four simply re-copy it as [h] in the IPA. In Misumalpan orthographies a final ⟨h⟩ frequently marks vowel quality or a glottal feature rather than a true [h] coda; a literal word-final [h] in every one of these items is phonetically suspect and reads as an un-checked orthography-as-IPA copy (the same defect as Issue 22). These should be verified against a Mayangna phonemic description rather than echoed. (Norwood, *Gramática de la lengua sumu*; CIDCA.)

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
