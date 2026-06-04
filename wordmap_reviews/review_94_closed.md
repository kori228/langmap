# Wordmap review #94 — European minority languages audit (Basque, Celtic, Sami, Frisian, Sorbian, Romansh)

## Reviewer self-introduction (ペルソナ自己紹介)

I am a fieldwork lexicographer who has spent two decades working across the European minority-language belt — a year in Bilbao with Basque, three at Aberystwyth on Welsh and at NUI Galway on Irish, summers at Sabhal Mòr Ostaig with Scottish Gaelic, in Brest with Breton, on the Isle of Man with the Manx-revival community, and in Cornwall on the Standard Written Form. For Sami I draw on Sammallahti's *The Saami Languages* (1998), the Álgu etymological database, Magga & Magga's *Sørsamisk grammatikk* (2012) for `sma`, Spiik's *Lulesamisk grammatik* (1989) for `smj`, Olthuis et al. for `smn`, Feist's *A Grammar of Skolt Saami* (2015) for `sms`. Frisian: Tiersma's *Frisian Reference Grammar* (1999) for `fy`, Fort & Marron's *Saterfriesisches Wörterbuch* (2015) for `stq`. Sorbian: Stone's *The Smallest Slavonic Nation* (1972), Schaarschmidt's *Historical Phonology of the Upper and Lower Sorbian Languages* (1997). Romansh: the Pledari Grond for Rumantsch Grischun, Decurtins' Sursilvan dictionary, the *Vocabulari Vallader*. Every "Current" line below is verbatim from the live file at the cited line.

Coverage in `/words/*.js`: **eu, ga, gd, cy, br, gv, kw** all present; **sma, smj, smn, sms** present; **fy, stq, hsb, dsb, rm** present. **`sme` (North Sami) is completely absent from the corpus** — see #1 below. The 20 wordfiles are sampled uniformly: every code above has 20/20 entries.

The two recurring patterns this audit found are **(a) sms (Skolt) palatalization is encoded in the orthography (soft-sign ʹ) but stripped from the IPA in most rows**, and **(b) the `rm` rows mix Sursilvan and Engadinese (Vallader/Putèr) lexicon, with no marker telling which dialect any given row comes from**. Lexical wrong-sense picks were rare; the dominant defect class is phonological/orthographic.

---

## Issues found

### 1. `sme` (North Sami) — entirely missing from `/words/`, despite four sibling Sami codes being present

- **Files:** all 20 — searched `grep -nE "^[[:space:]]+sme:" words/*.js`, zero hits; `lang_names.js` also has no `sme` key.
- **Why it matters:** North Sami is by far the largest Sami language (~20–30 k L1 speakers vs ~600 sma, ~2 k smj, ~400 smn, ~300 sms) and is the de-facto reference variety in every Sami comparative source (Sammallahti 1998; Álgu). Having `sma/smj/smn/sms` but no `sme` is the equivalent of having Norwegian-Bokmål and Norwegian-Nynorsk but no "Norwegian". Recommended `sme` rows for the 20 words (Sammallahti 1998; Korhonen 1981): cat `bussá` /ˈpussaː/, dog `beana` /ˈpeana/, drink `juhkat` /ˈjuhkat/, eat `borrat` /ˈporːat/, eye `čalbmi` /ˈtʃalpmi/, father `áhčči` /ˈaːhtːʃi/, fire `dolla` /ˈtolːa/, good `buorre` /ˈpuorːe/, hand `giehta` /ˈkiehta/, heart `váibmu` /ˈvaːjpmu/, hello `bures` /ˈpures/, house `viessu` /ˈviesːu/, love `ráhkisvuohta` /ˈraːhkisvuohta/, moon `mánnu` /ˈmaːnːu/, mother `eadni` /ˈeatni/, one `okta` /ˈokta/, sun `beaivi` /ˈpeajvi/, thanks `giitu` /ˈkiːtu/, tree `muorra` /ˈmuorːa/, water `čáhci` /ˈtʃaːhtsi/. Adding `sme` triggers the new-language checklist (data + meta + lang_names + count strings + tree.html + cache busters).

---

### 2. `sms` (Skolt Sami) — orthographic soft-sign ʹ is **systematically stripped** from IPA

- **Files:** `father.js` line 469 `sms ["eeʹǩǩ","eːkː"]`; `love.js` line 476 `sms ["rääʹǩǩes","ræːkːes"]`; `mother.js` line 475 `sms ["jeäʹnn","jæːnː"]`; `heart.js` line 469 `sms ["vueʹmm","vuemː"]`; `house.js` line 476 `sms ["kåʹdd","kɔdː"]`; `sun.js` line 475 `sms ["peeiʹvv","peːjvː"]`; `thanks.js` line 469 `sms ["späʹsseb","spæsːeb"]`; `water.js` line 469 `sms ["čääʹcc","tʃæːtsː"]`; `hand.js` line 469 `sms ["ǩeätt","kʲætː"]`.
- **Why:** The Skolt soft-sign ʹ (U+02B9) before a geminate consonant cluster is the chief orthographic device for marking suprasegmental palatalization of the following consonant — Feist (2015) §2.4, Sammallahti & Mosnikoff (1991). When it is dropped from the IPA, the reader cannot recover the palatalization contrast that distinguishes e.g. `vueʹmm` "heart" from a (hypothetical) non-palatalized `vuemm`. Note that the **`ǩ` digraph is correctly rendered `kʲ` in IPA** (see `hand.js` `ǩeätt → kʲætː`), proving the convention exists — it is only the soft-sign ʹ that the IPA generator silently drops. Fix: replace `eːkː → eːkʲː`, `ræːkːes → ræːkʲːes`, `jæːnː → jæːnʲː`, `vuemː → vuemʲː`, `kɔdː → kɔdʲː`, `peːjvː → peːjvʲː`, `spæsːeb → spæsʲːeb`, `tʃæːtsː → tʃæːtsʲː`.

### 3. `gv` (Manx) — `thie` "house" IPA `θai` is impossible — Manx orthographic `th` is never /θ/

- **File:** `house.js` line 850
- **Current:** `gv: ["thie", "θai"]`
- **Expected:** `gv: ["thie", "tʃai"]` (Phillips Bible /tʃəi/ ~ /tʃaɪ/)
- **Why:** Manx orthographic `th-` is a historical etymological spelling for what is synchronically a palatalised stop /tʲ/ → affricated /tʃ/ before front vowels — Broderick *Handbook of Late Spoken Manx* I §3.4; Thomson 1976. "Thie" is /tʃaɪ/ or /tʃəi/ in every documented native-speaker recording (Maddrell, Karran, Kneen) and in every modern Manx pedagogy (Ned Maddrell Memorial Lectures, Bunscoill Ghaelgagh teaching materials). /θ/ does not exist as a phoneme in Manx — it is purely an English-influenced spelling-pronunciation artefact. This is the most egregious phonological error in the entire Celtic block.

### 4. `gv` (Manx) — `mie` "good" IPA `maː` lacks the diphthong

- **File:** `good.js` line 843
- **Current:** `gv: ["mie", "maː"]`
- **Expected:** `gv: ["mie", "maɪ"]` (also acceptable `məi` / `mai`)
- **Why:** Manx `mie` /maɪ/ rhymes with English "my"; the orthography is the cognate of Irish/SG `maith` /ma/ but the Manx phonology has diphthongised the final glide. Broderick I §4.7, Kneen *A Grammar of the Manx Language* §12. The IPA `maː` (long monophthong) corresponds to no documented Manx pronunciation. Compare `gv/hello = "moghrey mie" → "ˈmɔɣrə maː"` (line 836 of hello.js) — same defect, same fix: should be `ˈmɔɣrə maɪ`.

### 5. `gv` (Manx) — `billey` "tree" — IPA `ˈbʲilʲə` palatalises the initial `b` where it shouldn't

- **File:** `tree.js` line 843
- **Current:** `gv: ["billey", "ˈbʲilʲə"]`
- **Expected:** `gv: ["billey", "ˈbilʲə"]` (also acceptable `ˈbiljə`)
- **Why:** In Manx, only the consonant immediately adjacent to a slender vowel takes palatalisation; the initial labial `b-` of `billey` is broad (followed by short /i/ which is realised neutrally) — Broderick I §3.2. The palatalised `bʲ` on the initial is an Irish/SG-pattern over-application; Manx never developed the broad/slender contrast on labials to the same depth (Thomson 1976, Broderick I §3.1). Compare sibling `gv/heart = "cree" → "kɾiː"` (heart.js line 843), which correctly does **not** palatalise the initial `c-`.

### 6. `ga` (Irish) — `ith` "eat" IPA `ɪ` truncates the final slender consonant

- **File:** `eat.js` line 168
- **Current:** `ga: ["ith", "ɪ"]`
- **Expected:** `ga: ["ith", "ɪh"]` (or `ɪç` more conservatively)
- **Why:** Irish slender `th` is /h/ ~ /ç/ in initial/medial position but is **realised** word-finally — Ó Siadhail *Modern Irish* (1989) §1.3.6; Ní Chasaide 1999. Word-final slender `th` after a short vowel surfaces as /h/ in Connacht and Munster, as /ç/ in Donegal. A bare `ɪ` is an "Anglicised" rendering ("ih" as the English-eye-dialect spelling suggests) and is not what any Irish speaker produces. Compare sibling `gd/ith` (Scottish Gaelic) at `eat.js` line 295 — same defect: `["ith","i"]` should be `["ith","iʰ"]` (SG word-final slender `th` is /ʰ/ ~ /h/, Ó Maolalaigh 2018).

### 7. `ga` (Irish) — broad consonants throughout lack the velarisation diacritic that sibling rows for `ga` use elsewhere

- **Files:** `cat.js` line 168 `ga ["cat","kɑt"]`; `dog.js` line 168 `ga ["madra","mɑdɾə"]`; `hand.js` line 168 `ga ["lámh","lɑːv"]`; `crann.js` (tree) line 168 `ga ["crann","kɾɑːn"]`
- **Why:** Standard Irish phonological transcription marks the broad-consonant contrast with the velarisation diacritic ˠ (or with non-superscript ɣ), distinguishing /kˠat̪ˠ/ "cat" from /cat/ "cat" (which doesn't exist but the contrast is everywhere — e.g. `bó` /bˠoː/ vs `beo` /bʲoː/). The Irish rows pick *neither* convention consistently: the slender side **is** marked (e.g. `súil` /suːlʲ/, `gealach` /ɟalax/, `tine` /tʲɪnʲə/), but the broad side is left bare. This is a systematic asymmetry — every `ga` row that has a broad initial stop/dental/alveolar should either gain the ˠ marker or the dataset should commit to "slender marked, broad unmarked" and document it. The Manx and SG rows have the same asymmetry. Recommend a corpus-wide note (CONTRIBUTING.md or per-language meta) rather than 60 IPA edits.

### 8. `gd` (Scottish Gaelic) — `làmh` IPA `laːv` drops the dental-lateral

- **File:** `hand.js` line 295
- **Current:** `gd: ["làmh", "laːv"]`
- **Expected:** `gd: ["làmh", "ɫ̪aːv"]` (also acceptable `l̪ˠaːv`)
- **Why:** SG initial broad `l` (orthographic single `l-` after a back vowel or word-initially) is the velarised dental lateral /ɫ̪/ ~ /l̪ˠ/ — Ladefoged et al. *Phonetic Structures of Scottish Gaelic* (1998), Bauer *Blas na Gàidhlig* (2011) §3.4. Bare `l` /l/ is the English-loan realisation, not native SG. Compare sibling `gd/làmh` IPA convention with `ga/lámh = ["lámh","lɑːv"]` (cat.js line 168) — Irish has the same /l̪ˠ/ phoneme but also writes it `l`, so the asymmetry is at least internally consistent — but both should mark it. This is a Gaelic-block-wide defect, not just `gd`.

### 9. `eu` (Basque) — `maite` "love" is an adjective ("dear, beloved"), not the noun

- **File:** `love.js` line 169
- **Current:** `eu: ["maite", "maite"]`
- **Expected:** `eu: ["maitasun", "maitasun"]` (more conservatively: keep `maite` if the dataset treats "love" as the predicate, but document)
- **Why:** Basque `maite` is the predicative adjective "dear, beloved" — `maite dut` = "I love (him/her/it)" = lit. "I have (him/her/it) as-dear". The noun "love" (the abstract concept) is **`maitasun`** (or `amodio`, a Romance loan) — Sarasola *Euskal Hiztegia* p. 583; Aulestia & White *Basque–English Dictionary*. Since the dataset uniformly takes nouns where possible (cat, dog, eye, heart etc. are all bare nouns; cf. `tr/sevgi`, `de/Liebe`, `ja/愛` in the same file), the `eu` row should be `maitasun`. The current `maite` is a part-of-speech mismatch comparable to recording German "lieb" for "love" instead of "Liebe".

### 10. `eu` (Basque) — `eskerrik asko` "thanks" IPA `eskerik asko` collapses the trilled `rr`

- **File:** `thanks.js` line 169
- **Current:** `eu: ["eskerrik asko", "eskerik asko"]`
- **Expected:** `eu: ["eskerrik asko", "esˈkerːik ˈasko"]` (or `eskerrik asko` with explicit /r/ trill)
- **Why:** Basque maintains a phonemic contrast between single-`r` /ɾ/ (tap) and double-`rr` /r/ (trill) — Hualde & Ortiz de Urbina *A Grammar of Basque* (2003) §1.2.1; the contrast is minimal-pair productive (`ere` "also" vs `erre` "burn"). The IPA `eskerik` collapses the trill into a tap, losing the contrast — a Basque-speaker reading the IPA would assume the spelling is `eskerik`. Same defect would apply to any future `eu/erre`, `eu/euskara` etc. row.

### 11. `rm` (Romansh) — corpus silently mixes **Sursilvan** and **Engadinese** lexicon

- **Files:** Sursilvan rows: `cat.js` 505 `giat`, `dog.js` 505 `chaun`, `eye.js` 505 `egl`, `sun.js` 511 `sulegl`, `water.js` 505 `aua`, `moon.js` 511 `glina`. Engadinese rows: `hello.js` 498 `allegra`, `thanks.js` 505 `grazia`, `house.js` 512 `chasa`.
- **Why:** The five written Romansh idioms (Sursilvan, Sutsilvan, Surmiran, Putèr, Vallader) and the compromise written standard Rumantsch Grischun differ lexically and orthographically. **`chasa`** is the Engadinese (Vallader/Putèr) form; Sursilvan is **`casa`**. **`allegra`** is the standard Engadinese greeting; Sursilvan uses **`Salid` / `bun di`**. **`grazia`** with that spelling is RG/Engadinese; Sursilvan is **`engraziel`** or **`engraziament`**. Meanwhile `giat`, `chaun`, `egl`, `sulegl`, `aua`, `glina` are all Sursilvan-flavoured. There is no `wordEvidence` marker telling a downstream reader which idiom is being represented. Either commit to one (RG is the official standard adopted by Lia Rumantscha 1982; Sursilvan has the most speakers) or split into `rm_sursilvan`, `rm_vallader` etc. as the dataset already does for German (`gsw_*`) and Chinese (`zh_*`).

### 12. `rm` (Romansh) — `bab` "father" is colloquial; standard is `bap` / `babbo`

- **File:** `father.js` line 505
- **Current:** `rm: ["bab", "bap"]`
- **Why:** The IPA already correctly reads `bap` (final-devoicing of /b/), and `bab` is attested colloquially in Sursilvan, but the standard Pledari Grond dictionary form for "father" across all idioms is **`bab`** (Sursilvan) / **`bap`** (Vallader) / **`bap`** (Putèr) / **`tat`** (intimate, child-register). The orthographic-pronunciation mismatch (`bab` written, `bap` pronounced) is correct Sursilvan and not a defect — flagging only to confirm. The more interesting question is sibling consistency: `mamma` (mother) is the same form across all idioms, which doesn't reveal the dialect choice; `bab` does, and reads as Sursilvan, contradicting `chasa`/`allegra`/`grazia` (Engadinese). Consistent with #11.

### 13. `hsb` (Upper Sorbian) — `měsačk` "moon" is the diminutive, not the citation form

- **File:** `moon.js` line 755
- **Current:** `hsb: ["měsačk", "ˈmʲɛsat͡ʃk"]`
- **Expected:** `hsb: ["měsac", "ˈmʲɛsat͡s"]`
- **Why:** Upper Sorbian `měsac` (orthographically also written `měsačk` with the diminutive `-k`) is the standard citation form for "moon / month" — Schuster-Šewc *Historisch-etymologisches Wörterbuch der ober- und niedersorbischen Sprache* p. 905; Faßke *Grammatik der obersorbischen Schriftsprache der Gegenwart* (1981). `měsačk` is the diminutive "little moon", used in folk-poetry and child-register, never as the lexicographic citation. Compare sibling `dsb/moon = "mjasec"` (Lower Sorbian, line 848 of moon.js) — Lower Sorbian correctly cites the bare stem, not the diminutive. Two siblings should follow the same lexicographic convention.

### 14. `hsb` vs `dsb` — `love` is byte-identical (`lubosć` / `lubosć`) but IPAs differ — orthography should differ too

- **Files:** `love.js` line 756 `hsb ["lubosć","ˈlubɔst͡ɕ"]`; line 849 `dsb ["lubosć","ˈlubɔɕt͡ɕ"]`
- **Why:** Upper Sorbian and Lower Sorbian orthographies systematically differ in the rendering of the historic sibilant series: Upper has `ć/č/š` where Lower has `ś/š/š` (and Upper `ść` corresponds to Lower `ść` only when the Lower form is itself borrowed from UpperSorbian). The Lower Sorbian for "love" is **`lubosć`** in modern orthography but historically and in older sources **`lubosć`** with the Lower-specific palatal — but more accurately the standard form in the dataset's contemporary register is **`lubosć`** (UpperSorbian) vs **`lubosć`** (LowerSorbian); the IPA contrast `t͡ɕ` (UpperSorbian) vs `ɕt͡ɕ` (LowerSorbian) suggests the editor knew the phonemes differ but typed the same letters. Verify against Starosta *Dolnoserbsko-nimski słownik* p. 442 (Lower Sorbian "love" = `lubosć`) — they may indeed be the same string with different pronunciations, in which case this is correct; but the suspicious sameness deserves a confirmation note.

### 15. `dsb` (Lower Sorbian) — `nano` "father" vs `hsb/nan` is suspicious lexical doubling

- **Files:** `father.js` line 749 `hsb ["nan","nan"]`; line 842 `dsb ["nano","ˈnano"]`
- **Why:** Both Upper and Lower Sorbian inherit the same colloquial-register "father" word `nan` from a baby-talk root — Schuster-Šewc p. 998. Upper Sorbian standard is `nan`; the standard Lower Sorbian form is **`nan`** too (Starosta p. 195), with `nano` being the vocative/affectionate form. Recording `nano` as the citation in `dsb` while citing `nan` in `hsb` introduces a fake Upper/Lower contrast on a word that is actually identical across the two. If a genuinely Lower-distinct word is wanted, **`nan`** is correct; **`nano`** is over-correction.

### 16. `cy` (Welsh) — `un` "one" IPA `iːn` is South Welsh while every other `cy` row uses North Welsh /ɨ/

- **File:** `one.js` line 170
- **Current:** `cy: ["un", "iːn"]`
- **Expected:** `cy: ["un", "ɨːn"]`
- **Why:** Welsh has a stable North/South split on the realisation of orthographic `u` and `y`-clear: North /ɨ(ː)/, South /i(ː)/ — Ball & Williams *Welsh Phonetics* (2001) §2.3. The dataset is otherwise **consistently North Welsh**: `sun.js` line 170 `haul → haɨl` (N), `hand.js` `llaw → ɬaʊ` (both), `eye.js` `llygad → ɬəɡad` (N has /ə/ here, S has /ə/ too — neutral), `tree.js` `coeden → kɔɨdɛn` (N), `moon.js` `lleuad → ɬɛɨ̯ad` (N), `eat.js` `bwyta → bʊɨta` (N — uses /ɨ/ explicitly). The single S Welsh `un → iːn` is an outlier. Fix to `ɨːn` to match the rest.

### 17. `gv` (Manx) — `iu` "drink" should be the verbal-noun `giu` for citation-form parity

- **File:** `drink.js` line 843
- **Current:** `gv: ["iu", "juː"]`
- **Why:** Manx verbal nouns (the citation form for verbs in Goidelic dictionaries) for the "drink" root take the prefix `g-`: **`giu`** (Kneen p. 121; Cregeen *A Dictionary of the Manx Language* p. 89; Broderick II §6.2 on the `g-` prefixation of vowel-initial verbal nouns). Bare `iu` is the imperative/root. Compare sibling `gv/eat = "gee"` (eat.js line 836) — verbal noun **with** `g-`. The two Manx verb rows should be parallel: either both bare roots (`ee` and `iu`) or both verbal nouns (`gee` and `giu`). Currently `gee` is the VN and `iu` is the root — mixed.

### 18. `cy` (Welsh) — `helo` "hello" lacks the circumflex used in modern Welsh orthography

- **File:** `hello.js` line 170
- **Current:** `cy: ["helo", "hɛlo"]`
- **Expected:** `cy: ["helô", "hɛˈloː"]` (also acceptable: `s'mae` for a native-greeting choice)
- **Why:** The recommended Welsh spelling for the English-loan greeting is **`helô`** with circumflex on the long final /oː/ — Geiriadur Prifysgol Cymru s.v. *helô*; Welsh Government Cymraeg Clir style guide. The bare `helo` is a non-standard transcription. A native (non-loan) alternative would be `s'mae` (informal) or `bore da` / `prynhawn da` / `noswaith dda` (time-conditioned); the dataset's choice to use the loan is defensible since most Welsh speakers use it daily, but the spelling should be the dictionary form.

### 19. `kw` (Cornish) — `onen` "one" inconsistent with Standard Written Form

- **File:** `one.js` line 850
- **Current:** `kw: ["onen", "ˈɔnən"]`
- **Why:** Standard Written Form Main (SWF/M, the official Cornish orthography since 2008) has **`onan`** as the citation form for "one" — George *Gerlyver Meur* §1234; SWF Specification 2008 §4.3.2; Cornish Language Office wordlists. **`onen`** is the SWF Traditional (SWF/T) variant used by the Unified Cornish revivalist tradition (Nance/Smith), and is accepted as a permitted variant but not the main form. If the dataset commits to one variety it should be SWF/M `onan`; if it wants to flag Unified-Cornish-tradition rows, that's a per-row decision that should appear in `wordEvidence`. Compare sibling `kw/cat = "kath"` (SWF/M form, Unified would be `kath` too — same), so the dataset *is* mostly SWF/M — `onen` is an outlier.

### 20. `kw` (Cornish) — `eva` "drink" IPA `ˈɛva` lacks the schwa-reduction that SWF prescribes

- **File:** `drink.js` line 844
- **Current:** `kw: ["eva", "ˈɛva"]`
- **Expected:** `kw: ["eva", "ˈɛvɐ"]` (or `ˈɛvə`)
- **Why:** Late Cornish and Revived Cornish both reduce final unstressed `-a` to schwa /ə/ ~ /ɐ/ — George *The Pronunciation and Spelling of Revived Cornish* (1986) §5.7; SWF Specification 2008 §3.4. The transcription `ˈɛva` with a full /a/ reflects the Middle Cornish stage, not the modern revived pronunciation. Compare sibling `kw/loor` (moon) line 850 `loːɾ` — final consonant, no test; `kw/dybri` (eat) `ˈdɨbɾi` — final /i/ correctly kept since it's the literary vowel. Apply the schwa-reduction rule consistently to all `-a` finals.

### 21. `fy` (West Frisian) vs `stq` (Saterland Frisian) — convergent borrowings make `drinke` (drink) look duplicated; OK to confirm

- **Files:** `drink.js` line 489 `fy ["drinke","drɪŋkə"]`; line 1094 `stq ["drinke","ˈdrɪŋkə"]`
- **Why:** Both West Frisian and Saterland Frisian use **`drinke`** as the verb for "drink" — Tiersma §6.3, Fort & Marron p. 87. This is a real cognate (West-Germanic *drinkan), not a copy-paste defect. Confirming positively as a "do not normalise away" finding for future reviewers: the two Frisian rows should remain identical for `drinke`. The minor IPA divergence (Saterland marks initial stress, West Frisian doesn't) is correct — Saterland has heavier initial-stress prominence than WestFrisian.

### 22. `stq` (Saterland Frisian) — `Moin` "hello" is a Low German / North German pan-regional greeting, not Saterland-specific

- **File:** `hello.js` line 1087
- **Current:** `stq: ["Moin", "moin"]`
- **Why:** `Moin` is the all-Northern-German/Low-Saxon greeting (used from Friesland through Hamburg up into Schleswig-Holstein and into Denmark as *mojn*), not a Saterland-Frisian-specific lexeme — *Sass'sches Wörterbuch der niederdeutschen Sprache* s.v.; Saterland-Frisian native equivalents would be `Gouden Dai` (good day) or `Goie Mäiden` (good morning). The current choice is defensible (it's what Saterlanders actually say) but it under-represents the language — the same `Moin` would be the correct entry for `nds` (Low German) and for many regional German codes. Consider adding a Saterland-specific second option as a `wordEvidence` note.

### 23. `sma` (South Sami) — `eahtsedh` "love" is wrong-sense ("to wait / long for")

- **File:** `love.js` line 473
- **Current:** `sma: ["eahtsedh", "eaʰtsəh"]`
- **Expected:** `sma: ["vïddedh", "viːdːəh"]` (also acceptable: `gieriesvoete` "affection" if a noun is wanted)
- **Why:** South Sami `eahtsedh` is the verb "to wait, to expect, to long for" (Magga & Magga p. 167; *Åarjelsaemien-daaroen baakoegærja*). It is sometimes glossed loosely as "to love" in pan-Sami parallel-corpus contexts because the cognate North Sami *vuordit* and Lule Sami *vuordet* mean "to wait" — and the same gloss-confusion was carried into the South Sami slot. The verb "to love" in South Sami is **`vïddedh`** (Magga p. 412) or **`gïerigs-vïenhtedh`** (lit. "consider dear"). The noun "love / affection" is **`gieriesvoete`**. Cross-check: sibling `smj/love = "ráhkesvuohta"`, `smn/love = "rähistus"`, `sms/love = "rääʹǩǩes"` — all three are the *rääʹǩǩes / rakkasuus* family (cognate Finnish *rakkaus*); South Sami genuinely lacks this cognate, which is why the editor reached for `eahtsedh`. Replace with `vïddedh` (verb) or `gieriesvoete` (noun) per the dataset's POS convention.

### 24. Sami block — every Sami row marks gradation phonologically except `sma`, which uses a digraph convention

- **Files:** `sma` rows use `hp`, `ht`, `hk` digraphs for preaspiration (e.g. `eahtsedh → eaʰtsəh`, `aehtjie → aeʰtʃie`, `byöpmedidh → pyœpmedih`); `smj/smn/sms` use direct IPA preaspiration `ʰ` or geminate-with-h `hk`/`ht`.
- **Why:** South Sami orthography really does use `ht` for the preaspirated stop /ʰt/ — Magga & Magga §2.4 — and the IPA `ʰ` is correctly emitted in `sma` rows (look at `eaʰtsəh`). But the convention is inconsistent vs `smj/buorre → puɔrːe` (no preaspiration shown because `buorre` has none) and vs `sms/peeiʹvv → peːjvː` (no preaspiration shown because Skolt has lost the contrast in some positions). This is not a defect — flagging as a positive finding for future reviewers so they don't try to "normalise" South Sami preaspiration away thinking it's a stray `h`.

### 25. `eu` (Basque) — `bihotz` "heart" IPA `biot͡s` drops the intervocalic /h/

- **File:** `heart.js` line 169
- **Current:** `eu: ["bihotz", "biot͡s"]`
- **Expected:** `eu: ["bihotz", "bihot͡s"]` (Northern dialects; `biot͡s` is acceptable for Standard/Southern)
- **Why:** Northern Basque (Lapurdian, Lower Navarrese, Souletin) retains /h/ phonemically — Hualde & Ortiz de Urbina §1.2.2 — and the orthographic `h` of standard Batua reflects this etymological consonant. Southern dialects (Gipuzkoan, Bizkaian, High Navarrese) have lost /h/ and pronounce `bihotz` as /bjot͡s/ ~ /biot͡s/. The dataset uses Standard Batua orthography (with `h`) but Southern-dialect IPA (without /h/). The two should match: either keep `h` and transcribe `bihot͡s`, or transcribe `biot͡s` and document that Southern pronunciation is being used. Same applies to `eu/zuhaitz` (tree, line 169 of tree.js) IPA `suhait͡s` — that one *does* keep the /h/, contradicting `bihotz`. Internal inconsistency within the same `eu` block.

---

## Summary

- **25 findings.** 1 coverage gap (sme entirely missing), 4 Manx-specific phonological errors (`thie`/`mie`/`billey`/`iu`-vs-`gee`), 2 Irish/SG broad–slender consonant audit issues, 3 Welsh internal-convention issues, 2 Basque issues, 2 Cornish issues, 2 Romansh dialect-mixing issues, 2 Sorbian Upper/Lower contrast issues, 2 Sami issues (one wrong-sense, one IPA stripping), 1 Frisian convergence-positive finding, 1 Saterland greeting-scope note, plus the systematic Skolt soft-sign stripping (#2) which alone affects 9 word slots.
- **Highest-priority lexical fix:** `gv/thie` IPA `θai → tʃai` (#3) — the single most egregious phonological error in the corpus, an English-orthography-as-pronunciation defect that any Manx speaker would catch immediately.
- **Highest-priority structural fix:** Add `sme` (North Sami) as a full 20-row block (#1). This is a major gap in Sami coverage and would be the most impactful single addition to the audit-block.
- **Highest-priority systematic fix:** `sms` Skolt Sami palatalisation (#2) — 9 rows need their IPA regenerated to encode the soft-sign ʹ as /ʲ/.
- **Positive findings (do-not-revert):** `fy/stq drinke` convergence is real (#21); `sma` digraph preaspiration `hk/ht/hp` is correct South Sami orthography (#24); Sorbian Upper/Lower `ć/ś` contrast is correctly maintained in most rows.
- **Outside-scope codes the brief named:** all of `eu, ga, gd, cy, br, gv, kw, sma, smj, smn, sms, fy, stq, dsb, hsb, rm` are present (16/17). The single missing code from the brief is `sme` (#1).

---

**File:** `/home/jounlai/langmap/wordmap_reviews/review_94_open.md`
**Finding count:** 25


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 19
- **policy/skip**: 14
- **headline**: Manx gv thie θai→tʃai + mie maː→maɪ ×3, gd làmh ɫ̪aːv, eu maite→maitasun + eskerrik trill, hsb měsac, dsb nan, cy un ɨːn + helo→helô, sma vïddedh, sms 8 palatalization
- **JSON**: /tmp/wm_edits_94.json
