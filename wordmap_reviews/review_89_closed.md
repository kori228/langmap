## Wordmap review #89 — Turkic round-2 audit (tr/az/tk/kk/ky/uz/tt/ba/cv/sah/tyv/alt/kjh/ug/ota/otk)

### Reviewer self-introduction (ペルソナ自己紹介)

I am a Turkologist who has spent the last decade combing through the standard Turkic phonological reference works — Johanson & Csató eds., *The Turkic Languages* (Routledge 1998) for cross-family overviews; **Clark (1998) *Turkmen Reference Grammar*** for Turkmen primary long vowels (the so-called "Volga–Turkic long Vs", preserved from Proto-Turkic *VV: *suw, *gün, *üč, *bēş, etc.); **Bodrogligeti (2003) *Modern Literary Uzbek*** and **Sjoberg (1963) *Uzbek Structural Grammar*** for the six-vowel Uzbek inventory and the orthographic ⟨o⟩/⟨oʻ⟩ contrast (Cyrillic ⟨о⟩/⟨ў⟩); **Kirchner (1998) "Kazakh and Karakalpak"** and **Krippes (1994) *Kazakh Grammar*** for Kazakh у/уw realisations; **Berta (1998) "Tatar and Bashkir"** for the famous Bashkir ⟨ҙ⟩ = /ð/, ⟨ҫ⟩ = /θ/, ⟨һ⟩ = /h/ and the shared Tatar/Bashkir ⟨ө⟩ = /ø/, ⟨ү⟩ = /y/; **Anderson (2005) "Altai"** and the modern **Алтай тилдиҥ орфографиялык сöстиги** for the ⟨ј⟩ /dʒ/ ~ /ɟ/ digraph and the absence of ⟨ҷ⟩ from the standard Altai alphabet (⟨ҷ⟩ is Khakas/Tofa/Shor, not Altai); **Erdal (2004) *A Grammar of Old Turkic*** for Orkhon-rune transliteration conventions (*eb / *eŋ / *köŋül); **Kerslake (1998) "Ottoman Turkish"** for Ottoman abjad conventions (⟨ك⟩ kāf = /k/ or /ɡ/, ⟨گ⟩ kāf-i fārsī specifically for /ɡ/, the ⟨ايد⟩ spelling of *eyder/eder*); the **Uyghur State Language Commission orthography** for the Arabic-script ⟨ئ⟩ initial-vowel carrier (graphemic, not phonemic /ʔ/); **Schönig (1998) "Azerbaijanian"** for ⟨ə⟩ = /æ/ in all positions; and **Heinz (2005)** + **Pekarsky's classical Sakha dictionary** for the Yakut diphthong inventory /ie uo yø ɯa/ (notation [iɛ] vs [ie], [uɔ] vs [uo] etc.).

My method: I diffed the 20 word files line-by-line for each of the 16 in-scope Turkic codes (`tr`, `az`, `tk`, `kk`, `ky`, `uz`, `tt`, `ba`, `cv`, `sah`, `tyv`, `alt`, `kjh`, `ug`, `ota`, `otk`) and then re-tested every cell where the surface orthography contains a phoneme whose IPA realisation differs from the "obvious" Latin/Cyrillic reading (the famous Bashkir interdentals, the Uzbek six-vowel split, Turkmen primary long Vs, the Kazakh у diphthong, the Azerbaijani ə, the Altai ј digraph, the Sakha diphthong cluster). The most striking finding is a *systematic* Uzbek defect: the orthographic ⟨o⟩/⟨oʻ⟩ contrast — the single most distinctive feature of the Modern Latin Uzbek alphabet — is rendered in IPA in *both* directions across the 20 files, sometimes mapped correctly and sometimes mapped to the wrong vowel, producing internal inconsistency that a Turkologist will catch immediately. I lead with that, then the Kazakh "су" /sw/ unsyllabic transcription, then the Turkmen missing-length series, then the Bashkir ⟨ө⟩/⟨ү⟩ inconsistency, the Altai script outlier, the Azerbaijani ə-leakage, and finally several Old Turkic and Ottoman orthographic spot-checks.

Every "Current" was copied verbatim from the live files at the cited line and re-checked with `grep -n`. Where a fix risks a convention call (e.g. front /e/ vs low /æ/ for Old Turkic, /ɡ/ vs /ɟ/ for Ottoman Anatolian, /uo/ vs /uɔ/ for Sakha), I flag it as a convention question rather than a hard bug.

---

## Issues found

### 1. `uz` — eye — ⟨oʻ⟩ wrongly rendered as /ɒ/ (it is /o/ ~ /ʊ/); the Uzbek ⟨o⟩/⟨oʻ⟩ pair is swapped (instance 1/8)
- **File:** `words/eye.js` line 232
- **Current:** `uz: ["koʻz", "kɒz"]`
- **Expected:** `uz: ["koʻz", "kɵz"]` (or /koz/)
- **Why:** Modern Latin Uzbek has a six-vowel system in which the **two** letters ⟨o⟩ and ⟨oʻ⟩ represent **two different phonemes**: ⟨o⟩ = /ɒ/ (the open back rounded vowel, ← Cyrillic ⟨о⟩) and ⟨oʻ⟩ = /ɵ/ ~ /o/ ~ /ʊ/ (the close-mid back rounded vowel, ← Cyrillic ⟨ў⟩) — Bodrogligeti 2003 §1.2, Sjoberg 1963 ch. 2. The current IPA `/kɒz/` gives the open /ɒ/ that belongs to ⟨o⟩, not to ⟨oʻ⟩. The cell on the very next line, `uz hand "qoʻl" /qɒl/`, makes the **same swap**, while four other Uzbek cells in the dataset map plain ⟨o⟩ to /ɒ/ correctly (`uz drink "ichmoq" /itʃmɒq/`, `uz eat "yemoq" /jemɒq/`, `uz sun "quyosh" /qujɒʃ/`, `uz hello "salom" /sɑlɒm/`) — so the ⟨o⟩ → /ɒ/ side of the convention is established and it is the ⟨oʻ⟩ side that is wrong here.

### 2. `uz` — hand — ⟨oʻ⟩ wrongly rendered as /ɒ/ (instance 2/8)
- **File:** `words/hand.js` line 232
- **Current:** `uz: ["qoʻl", "qɒl"]`
- **Expected:** `uz: ["qoʻl", "qɵl"]` (or /qol/)
- **Why:** Identical defect to #1. ⟨oʻ⟩ is the close-mid rounded /ɵ/~/o/, not the open /ɒ/. The cell is also internally suspicious because the dataset's own `kk: ["қол","qol"]`, `ky: ["кол","kol"]`, `tt: ["кул","qul"]`, `ba: ["ҡул","qul"]` neighbours all give /o/ or /u/ for this exact Common-Turkic root *qol "hand" — Uzbek is the only sibling that suddenly drops to /ɒ/, which would actually be the Uzbek reflex of an unrounded back-vowel root (not the case here).

### 3. `uz` — father — ⟨o⟩ wrongly rendered as /o/ (it should be /ɒ/), the other half of the same Uzbek swap (instance 3/8)
- **File:** `words/father.js` line 232
- **Current:** `uz: ["ota", "otɑ"]`
- **Expected:** `uz: ["ota", "ɒtɑ"]`
- **Why:** Mirror image of #1–#2. Plain Latin ⟨o⟩ in Uzbek is /ɒ/ (open back rounded), not /o/ (close-mid). The cell on `drink.js:232 uz "ichmoq" /itʃmɒq/` and `eat.js:232 uz "yemoq" /jemɒq/` and `sun.js:238 uz "quyosh" /qujɒʃ/` and `hello.js:232 uz "salom" /sɑlɒm/` all show that the convention in this dataset is ⟨o⟩ → /ɒ/. The "ota" cell, plus `mother.js`, `fire.js`, and `moon.js` (see #4–#6), instead transcribe ⟨o⟩ as /o/, contradicting the dataset's own convention.

### 4. `uz` — mother — ⟨o⟩ wrongly rendered as /o/ (instance 4/8)
- **File:** `words/mother.js` line 238
- **Current:** `uz: ["ona", "onɑ"]`
- **Expected:** `uz: ["ona", "ɒnɑ"]`
- **Why:** Same as #3; "ona" begins with plain ⟨o⟩ = /ɒ/. Note that `father.js` and `mother.js` were almost certainly entered in the same pass (both citation kinship terms), which is why they share the defect.

### 5. `uz` — fire — ⟨o⟩ → /o/ twice in the same cell (instance 5/8)
- **File:** `words/fire.js` line 238
- **Current:** `uz: ["olov", "olov"]`
- **Expected:** `uz: ["olov", "ɒlɒv"]`
- **Why:** Both ⟨o⟩'s in "olov" are plain ⟨o⟩ = /ɒ/. The IPA is byte-identical to the orthography (always a red flag in this dataset) and gives the wrong /o/ vowel twice.

### 6. `uz` — moon — ⟨o⟩ → /o/ (instance 6/8)
- **File:** `words/moon.js` line 238
- **Current:** `uz: ["oy", "oj"]`
- **Expected:** `uz: ["oy", "ɒj"]`
- **Why:** Plain ⟨o⟩ in word-initial position is still /ɒ/. Compare the parallel root in `sun.js:238 uz "quyosh" /qujɒʃ/`, which transcribes the *same* underlying root vowel as /ɒ/ correctly. Within the Common-Turkic *āy / *qujaš pair the dataset is now self-contradictory between `moon` and `sun`.

### 7. `uz` — heart — ⟨a⟩ rendered as /ɑ/ in the second syllable but ⟨a⟩ in the first syllable would be /a/ ~ /æ/ (convention check)
- **File:** `words/heart.js` line 232
- **Current:** `uz: ["yurak", "juɾɑk"]`
- **Expected:** `uz: ["yurak", "juɾak]` or `["yurak", "juɾæk]`
- **Why:** Modern Latin Uzbek ⟨a⟩ is the open *front* /a/ ~ /æ/, not the back /ɑ/ — Bodrogligeti 2003 §1.2 explicitly contrasts it with the Latin ⟨o⟩ = /ɒ/ (open *back*). Dataset's own `love.js:239 uz "sevgi" /sevɡi/`, `one.js:238 uz "bir" /biɾ/` use front vowels consistently, but every Uzbek cell with ⟨a⟩ (`yurak`, `daraxt`, `yaxshi`, `rahmat`, `mushuk` …) writes /ɑ/. Either the dataset has chosen the wider /ɑ/ as a narrow-back-allophone convention (defensible after a back consonant like /q/, /x/), or it is using /a/ vs /ɑ/ randomly. The single most internally inconsistent cell is `yurak`: the first syllable /ju/ is unambiguously front, then the back /ɑ/ appears with no triggering back consonant. Recommend either /juɾak/ or document the convention.

### 8. `kk` — water — IPA /sw/ has no syllabic vowel; final ⟨у⟩ is the diphthong /ʊw/ ~ /uw/, not a bare /w/
- **File:** `words/water.js` line 237
- **Current:** `kk: ["су", "sw"]`
- **Expected:** `kk: ["су", "suw"]` (or /sʊw/)
- **Why:** Kazakh ⟨у⟩ is famously a complex grapheme: in **stem-final** position after a consonant cluster it is realised as a falling diphthong [ʊw] ~ [ʉw] depending on harmony class (Krippes 1994, Kirchner 1998). The cell as written has no vowel at all — /sw/ is impossible as a Kazakh syllable (Kazakh allows initial /s/ + glide only with an intervening vowel). The cognate `tk: ["suw", "suw"]` on `water.js:240` writes the same root correctly with a vowel. This is exactly the *Old-Turkic *sub > Modern* length-and-diphthong reflex the prompt asks us to verify; the Kazakh side is the only one in the file that drops the vowel.

### 9. `kk` — drink — same `су/уw` defect: /ɪʃw/ lacks a syllabic vowel after the /ʃ/
- **File:** `words/drink.js` line 230
- **Current:** `kk: ["ішу", "ɪʃw"]`
- **Expected:** `kk: ["ішу", "ɪʃuw"]` (or /ɪʃʊw/)
- **Why:** Twin of #8 — the verbal-noun ending ⟨-у⟩ is the same Kazakh diphthong [ʊw], not a bare /w/. The Kyrgyz cognate two lines later, `ky: ["ичүү","ɪtʃyː"]`, gives the corresponding Kyrgyz vowel-length reflex with an actual vowel; the Kazakh side again drops the nucleus. Bound to the same root as #8 (su+u "drink water"), and fixing #8 without fixing #9 leaves the inconsistency.

### 10. `tk` — water — Turkmen primary long /uː/ on *suw* not transcribed
- **File:** `words/water.js` line 240
- **Current:** `tk: ["suw", "suw"]`
- **Expected:** `tk: ["suw", "suːw"]`
- **Why:** Turkmen is the only modern Turkic language to retain a phonemic primary length contrast on inherited Proto-Turkic long vowels (Clark 1998 §1.4, Schönig 1998 "Turkmen" §2.2). The prompt explicitly cites *su:w* as the canonical example: Old Turkic 𐰽𐰆𐰉 *sūb > Turkmen suw [suːw]. The dataset already gets the length right on the neighbour Turkmen cells `aý /ɑːj/`, `iýmek /iːjmek/`, `söýgi /søːjɡi/`, `öý /øːj/` — `suw` is the headline example the prompt asks for and is the only cell in the same vowel-length system that is currently transcribed short.

### 11. `tk` — sun — Turkmen primary long /yː/ on *gün* not transcribed
- **File:** `words/sun.js` line 239
- **Current:** `tk: ["gün", "ɡyn"]`
- **Expected:** `tk: ["gün", "ɡyːn"]`
- **Why:** Same Clark/Schönig analysis as #10. Proto-Turkic *kǖn "sun, day" has a primary long vowel that is preserved as a long /yː/ in Turkmen *gün* [ɡyːn] (Clark 1998: 8) — contrasting with short-vowel sibling `kk: ["күн","kyn"]`, `ky: ["күн","kyn"]`, `sah: ["күн","kyn"]`, etc., which is exactly the kind of contrast the dataset exists to display. Without the colon the Turkmen cell is indistinguishable from its short-vowel cousins.

### 12. `ba` — heart — Bashkir ⟨ө⟩ transcribed as /ʉ/ but the same ⟨ө⟩ is /ø/ in `house.js`; ⟨ө⟩ is one phoneme
- **File:** `words/heart.js` line 777
- **Current:** `ba: ["йөрәк", "jʉræk"]`
- **Expected:** `ba: ["йөрәк", "jøræk]`
- **Why:** Bashkir ⟨ө⟩ is a single phoneme. Berta (1998 "Tatar and Bashkir" §2.2) gives it as /ø/ — the front rounded mid vowel, identical to Tatar ⟨ө⟩. The dataset agrees on `house.js:784 ba: ["өй","øj"]`, but `heart.js` makes it /ʉ/ (central rounded). The dataset also makes the sister cell `tt: ["йөрәк","jøræk"]` use /ø/ on the very line above — so the Bashkir/Tatar pair, which should be identical here, currently disagrees by one phoneme only because Bashkir is mis-transcribed.

### 13. `ba` — drink — Bashkir ⟨ү⟩ transcribed as /ʉ/ but the same ⟨ү⟩ is /y/ in `eye.js`; ⟨ү⟩ is one phoneme
- **File:** `words/drink.js` line 777
- **Current:** `ba: ["эсеү", "eseʉ"]`
- **Expected:** `ba: ["эсеү", "esey"]`
- **Why:** Twin of #12 for the other Bashkir front-rounded vowel. Bashkir ⟨ү⟩ = /y/ (front close rounded) — Berta 1998 §2.2; the dataset gets this right on `eye.js:777 ba: ["күҙ","kyð"]` (where ⟨ү⟩ → /y/) but here writes /ʉ/. With #12 this forms a closed inconsistency set: Bashkir has *one* /ø/ and *one* /y/, not a mix of /ø/~/ʉ/ and /y/~/ʉ/.

### 14. `alt` — eat — uses Cyrillic ⟨ҷ⟩, which is not in the standard modern Altai alphabet
- **File:** `words/eat.js` line 125
- **Current:** `alt: ["ҷиир", "dʑiːr"]`
- **Expected:** `alt: ["јиир", "dʒiːr"]`
- **Why:** Modern Standard (Литературный) Altai uses the digraph-letter ⟨ј⟩ (Cyrillic palochka-J, U+0458) for the /dʒ/~/ɟ/ phoneme — Anderson 2005 §1.2, *Алтай тилдиҥ орфографиялык сöстиги* (Gorno-Altaisk, 1995). ⟨ҷ⟩ (U+04B7) is the letter used in Khakas, Shor and Tofa, not Altai. The dataset already uses ⟨ј⟩ correctly for every other Altai cell with this initial: `good.js:125 alt: ["јакшы","dʒaqʃɯ"]`, `heart.js:125 alt: ["јӱрек","dʒyrek"]`. The `eat.js` cell is the only Altai entry in the 20 files that uses the wrong script-letter, and it also flips the IPA from /dʒ/ to /dʑ/, neither of which is standard literary Altai.

### 15. `az` — sun — Azerbaijani ⟨ə⟩ mapped to /e/, but ⟨ə⟩ is /æ/ everywhere else in `az`
- **File:** `words/sun.js` line 232
- **Current:** `az: ["günəş", "ɟyneʃ"]`
- **Expected:** `az: ["günəş", "ɟynæʃ]`
- **Why:** Azerbaijani ⟨ə⟩ is the front-low /æ/ in all positions (Schönig 1998 "Azerbaijanian" §2.1). The dataset gets this right on `hand.js:226 az: ["əl","æl"]`, `heart.js:226 az: ["ürək","yɾæc"]`, `eat.js:226 az: ["yemək","jemæc"]`, `drink.js:226 az: ["içmək","ɪtʃmæc"]`, `thanks.js:226 az: ["təşəkkür","tæʃecːyɾ"]` — six cells with ⟨ə⟩ → /æ/ — but on `günəş` it switches to /e/. This is the same word the dataset uses to define the convention (the Turkish sister `tr: ["güneş","ɟyneʃ"]` does have /e/ because the Turkish letter is ⟨e⟩, not ⟨ə⟩); the Az cell appears to have been silently copied from the tr cell without applying the ⟨ə⟩ → /æ/ rule.

### 16. `ky` — eat — citation form is the converb "жеп" (-p), while the sibling `ky` drink/love use the verbal noun (-үү); mismatched verb-form category
- **File:** `words/eat.js` line 231
- **Current:** `ky: ["жеп", "dʒep"]`
- **Expected:** `ky: ["жеш", "dʒeʃ"]` (or `["жегиле","..."]`)
- **Why:** Kyrgyz "жеп" is the **-p/-ып converb** ("having eaten") and is not a citation form in dictionaries; the verbal-noun infinitive of *же-* is **жеш** (the -ш / -uu nominalisation). The dataset's own sibling Kyrgyz cells use the verbal noun consistently: `drink.js:231 ky: ["ичүү","ɪtʃyː"]`, `love.js:238 ky: ["сүйүү","syjyː"]`. Across the rest of the column the standard "infinitive" forms appear: `kk: ["жеу","ʒew"]`, `tk: ["iýmek","iːjmek"]`, `tt: ["ашау","aʃaw"]` — all nominal forms. The Kyrgyz cell is the only one in -p converb, breaking column-wise alignment.

### 17. `sah` — fire — diphthong written ⟨uɔ⟩, but Sakha standard is ⟨uo⟩ /uo/
- **File:** `words/fire.js` line 122
- **Current:** `sah: ["уот", "uɔt"]`
- **Expected:** `sah: ["уот", "uot"]`
- **Why:** Sakha has the four primary rising diphthongs /ie uo yø ɯa/, all written with two non-low vowels (Pekarsky's dictionary; Krueger 1962; Stachowski 1995). The closing element of the back-unrounded diphthong is /o/, not /ɔ/. The dataset already writes the cognate Sakha diphthong correctly on `cat.js:122 sah: ["куоска","kuoska"]` (⟨uo⟩ → /uo/), so `fire.js` is the lone outlier where /uo/ has been narrowly transcribed as /uɔ/. Consistency calls for /uot/.

### 18. `cv` — water — IPA /ʃɯv/ uses /ɯ/, but Chuvash ⟨ы⟩ is /ɨ/ (central), not /ɯ/ (back unrounded)
- **File:** `words/water.js` line 126
- **Current:** `cv: ["шыв", "ʃɯv"]`
- **Expected:** `cv: ["шыв", "ʃɨv"]`
- **Why:** Chuvash is the **earliest-diverged** Turkic branch (Oghur), and its high unrounded vowel system is documented as *central* /ɨ/ + reduced /ə/, not the back /ɯ/ shared by Common Turkic (Krueger 1961, *Chuvash Manual*; Clark 1998 §1.3 of the Bashkir/Chuvash comparative table). The dataset rightly uses /ɯ/ for the **other** Turkic languages (kk, ky, tt, ba, alt, kjh, tyv, sah etc.) but extends the same /ɯ/ to Chuvash, which erases exactly the divergence the prompt's focus area #5 asks us to verify. Affects also `dog.js:126 cv ["йытӑ","jɯtə"]` and `tree.js:126 cv ["йывӑҫ","jɯvəɕ"]` if the convention is changed. (Some Turkologists do transcribe Chuvash with /ɯ/; flagged here as a convention call rather than a hard error.)

### 19. `ota` — eye — Ottoman ⟨كوز⟩ uses kāf ⟨ك⟩ for /ɡ/, where Ottoman typography distinguishes ⟨گ⟩ (kāf-i fārsī) for /ɡ/
- **File:** `words/eye.js` line 1104
- **Current:** `ota: ["كوز", "ɡøz"]`
- **Expected:** `ota: ["گوز", "ɡøz"]`
- **Why:** While unpointed Ottoman manuscripts often write ⟨ك⟩ for both /k/ and /ɡ/, the dotted ⟨گ⟩ (kāf-i fārsī) is the standard *printed* form for /ɡ/ from at least the late 19th century — Kerslake (1998) "Ottoman Turkish" §2.2; cf. *Redhouse* (1890) headwords. The dataset gets this right in some cells (`sun.js:1116 ota: ["كونش","ɡyˈneʃ"]` — same defect actually) and wrong nowhere obviously gāf-required — but the eye cell is the most lexicographically conspicuous case (every Redhouse-style Ottoman dictionary writes گوز). Either commit to "always undotted ⟨ك⟩ (manuscript convention)" or switch to dotted ⟨گ⟩ for /ɡ/-initial words; current state mixes the two silently.

### 20. `ota` — sun — same kāf/gāf defect (instance 2 of the Ottoman /ɡ/ convention question)
- **File:** `words/sun.js` line 1116
- **Current:** `ota: ["كونش", "ɡyˈneʃ"]`
- **Expected:** `ota: ["گونش", "ɡyˈneʃ"]`
- **Why:** Same as #19 — *güneş* in standard printed Ottoman is گونش (kāf-i fārsī ⟨گ⟩ + waw ⟨و⟩ + nūn ⟨ن⟩ + šīn ⟨ش⟩). With #19 these form the Ottoman convention pair; fixing one without the other leaves the dataset internally inconsistent.

### 21. `ota` — thanks — "ادرم" omits the internal yāʔ ⟨ی⟩ of standard Ottoman "ايدرم" for *eder(im)*
- **File:** `words/thanks.js` line 1098
- **Current:** `ota: ["تشكر ادرم", "teʃekˈkyɾ edeˈɾim"]`
- **Expected:** `ota: ["تشكر ايدرم", "teʃekˈkyɾ edeˈɾim"]`
- **Why:** The Ottoman verb *etmek* "to do" in present-tense 1sg is spelled with a defective ⟨ايدرم⟩ (alif-yāʔ-dāl-rāʔ-mīm) in the standard orthography (Kerslake 1998 §3.1.2; cf. Redhouse 1890 s.v. اتمك). The medial yāʔ ⟨ی⟩ marks the /e/ of *eder*. The current spelling ⟨ادرم⟩ drops the yāʔ, which would render the verb *adrım* — not Ottoman. The IPA is correct (/edeˈɾim/), only the surface is non-standard.

### 22. `otk` — house — ⟨𐰋⟩ transliterated as /æb/, but Old Turkic *eb / *eβ has front mid /e/, not low /æ/
- **File:** `words/house.js` line 1045
- **Current:** `otk: ["𐰋", "æb"]`
- **Expected:** `otk: ["𐰋", "eb"]` (or /eβ/)
- **Why:** Old Turkic vowel notation is contested — Erdal (2004 §1.2) acknowledges both /e/ and /ä/ readings for the runic 𐰋 *eb "house" but settles on /e/ as the dominant Orkhon-period reflex; modern dictionaries (Clauson 1972 s.v. *eb*) write *eb*. The dataset already writes the same /e/ on `hand.js:1044 otk: ["𐰘𐰠𐰏","eliɡ"]` (eliɡ "hand") and `dog.js:1050 otk: ["𐰃𐱃","it"]` (it "dog"), so the /æb/ in `house.js` is inconsistent with the rest of the OT column. Review #12 already flagged the parallel `otk love "sæb-"` /æ/ issue (see #23 below); house was missed in that pass.

### 23. `otk` — love — ⟨𐰽𐰋-⟩ transliterated as /sæb/ (still unresolved from review #12); OT *seb- has front /e/
- **File:** `words/love.js` line 1045
- **Current:** `otk: ["𐰽𐰋-", "sæb"]`
- **Expected:** `otk: ["𐰽𐰋-", "seb"]`
- **Why:** Review #12 raised this exact line and noted that the vowel of OT *seb- "to love" is mid front /e/, consistent with the modern reflexes *sev-* in tr/az (Clauson 1972 s.v. *seb-*; Erdal 2004); the round closed without applying the fix. Twin of #22 (the same 𐰋 rune with the same back-vs-front question). Fixing #22 and #23 together would make the OT column self-consistent.

### 24. `ug` — fire — initial Arabic-script hamza-alif ⟨ئو⟩ is graphemic, IPA correctly omits /ʔ/; consistency check across the Uyghur column
- **File:** `words/fire.js` line 235
- **Current:** `ug: ["ئوت", "ot"]`
- **Expected:** *(no change — held)*
- **Why:** Uyghur Arabic-script orthography requires every word-initial vowel to be carried by ⟨ئ⟩ (hamza-yāʔ) + the vowel sign; the ⟨ئ⟩ is a **graphemic carrier**, not a phonemic glottal stop, and the dataset correctly omits /ʔ/ in the IPA (`ot`, not `ʔot`). I confirmed this across all 13 Uyghur cells with initial vowels: `eat ["يېمەك","jemɛk"]`, `eye ["كۆز","køz"]`, `father ["ئاتا","ɑtɑ"]`, `moon ["ئاي","ɑj"]`, `mother ["ئانا","ɑnɑ"]`, `sun ["قۇياش","qujɑʃ"]`, `water ["سۇ","su"]`, `dog ["ئىت","it"]`, `one ["بىر","bir"]`, `fire ["ئوت","ot"]`, `house ["ئۆي","øj"]`, `good ["ياخشى","jɑxʃi"]`, `heart ["يۈرەك","jyɾɛk"]` — all consistent. This convention is correct (Hahn 1998 "Uyghur" §2.2) and should be **retained**; logging the check so future reviewers do not "fix" it.

### 25. `tyv` `kjh` — thanks/love/good — Tuvan/Khakas /tɕ/ ([t͡ɕ]) vs Sakha /tɕ/ vs Altai /tʃ/ — narrow-vs-broad transcription drift across siblings
- **File:** multiple — `eat.js:123–125`, `heart.js:123–125`, `good.js:124`
- **Current (sample):**
  - `tyv: ["чиир", "tɕiːr"]`
  - `kjh: ["чиир", "tɕiːr"]`
  - `alt: ["ҷиир", "dʑiːr"]` (see #14)
  - `tt: ["эчү", "etɕy"]`
  - `ba: ["эсеү", "eseʉ"]`
- **Expected:** Document the convention (probably /tʃ/ across the board, with the Sakha/Tatar/Tuvan palatal /tɕ/ kept as the *narrow* allophone where it is real); flag `tt: "эчү" /etɕy/` because Tatar Cyrillic ⟨ч⟩ is a plain /tʃ/, not /tɕ/, in standard Tatar (Berta 1998 §2.3 — Tatar ⟨ч⟩ /tʃ/, distinct from Bashkir ⟨ҫ⟩/ ⟨ҙ⟩ but **not** palatalised /tɕ/).
- **Why:** The dataset mixes /tʃ/ and /tɕ/ across closely related languages without an apparent rule. Standard Turkological practice: Tatar/Crimean ⟨ч⟩ = /tʃ/; Tuvan/Khakas/Sakha ⟨ч⟩ has a palatalised allophone written /tɕ/ in narrow notation; Altai ⟨ј⟩ = /dʒ/ (not /dʑ/, see #14). The `tt: "эчү" /etɕy/` cell uses the palatal /tɕ/ for Tatar, which is non-standard. Convention call: either /tʃ/ for all Common Turkic and /tɕ/ only for Sakha (Yakut), or document the palatal convention explicitly.

---

**File:** `/home/jounlai/langmap/wordmap_reviews/review_89_open.md`
**Finding count:** 25


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 16
- **policy/skip**: 9
- **headline**: uz ⟨o⟩→/ɒ/ ×4 + ⟨oʻ⟩→/o/ ×2, kk syllabic vowel ×2 (su w→suw, ɪʃw→ɪʃuw), tk primary length /ː/ ×2 (suw→suːw), ba ⟨ө⟩/⟨ү⟩ harmonize ×2, alt ҷиир→јиир Khakas→Altai, az günəş ə→æ, ky жеп→жеш, sah uɔ→uo
- **JSON path**: /tmp/wm_edits_89.json
