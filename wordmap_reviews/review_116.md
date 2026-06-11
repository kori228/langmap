# Wordmap review #116 — Citation-form & part-of-speech consistency auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a lexicographer specialising in citation-form conventions (見出し語形・引用形) and part-of-speech consistency across multilingual wordlists. My desk references for this pass: Buck (1949) *A Dictionary of Selected Synonyms in the Principal Indo-European Languages* for concept-level POS norms (16.27 'love', 13.1 'one'); LSJ for Greek lemmatisation; Aquilina's *Maltese–English Dictionary* and the MLRS Ġabra lexicon for the Maltese 3sg-masc-perfect lemma rule; SSKJ and Herrity (2000) *Slovene: A Comprehensive Grammar* for Slovene numeral citation; Bosworth–Toller for Old English; Feist (2015) *A Grammar of Skolt Saami* and Bergsland & Magga for Saami derivational morphology; Lytkin's Komi and Paasonen's Mordvin lexica for Permic/Mordvinic; and the Khakas–Russian lexicographic tradition (infinitive =арға/=ерге citation, as documented at dict.khakbooks.ru). Before reporting I read the definition blocks of `eat`/`drink`/`love`/`heart`/`one`/`hello`/`thanks`, re-read the adjudications in closed reviews #04, #12, #15, #22, #23, #26, #57, #62, #69, #77, #86, #87, #89, #91, #92, #97 and #100, grepped every candidate against `wordmap_reviews/*_closed.md` so as not to re-litigate settled convention calls (el_grc verb lemmatisation, Latin infinitives, Japanese dialect te-forms, ko_kp -어 register, orv любити — all already adjudicated and left alone), and verified every Current value verbatim with line numbers against the live `words/*.js`. What follows are only the survivors: cells where the part of speech or citation form breaks the file's own definition block or stands alone against its uniform family column.

---

## Issues found

### 1. `mt` — eat — imperfect `jiekol` used where Maltese lexicography lemmatises by the 3sg masc. perfect
- **File:** words/eat.js line 247
- **Current:** ["jiekol", "jiɛkol"]
- **Expected:** ["kiel", "kiɛl"]
- **Why:** The eat definition (line 32) requires "the language's normal dictionary/citation convention". Unlike the spoken-Arabic rows (ar_eg/ar_lev etc., where the imperfect display is an established dataset convention accepted in closed review #34), Maltese is a standardised language with a firm lexicographic norm: Aquilina's *Maltese–English Dictionary* and the MLRS Ġabra lexicon both lemmatise verbs under the **3sg masculine perfect** — the entry is "**kiel** (imperfect *jiekol*, past participle *mikul*) 1. to eat" (Wiktionary s.v. *kiel*, following Aquilina). `jiekol` is an inflected sub-form of that lemma, not the citation form. IPA follows the row's own ⟨ie⟩ = `iɛ` convention (cf. `mt` one `wieħed` → `wiɛħɛt`, one.js:253).

---

### 2. `mt` — drink — same defect: imperfect `jixrob` instead of the lemma `xorob`
- **File:** words/drink.js line 247
- **Current:** ["jixrob", "jiʃɾop"]
- **Expected:** ["xorob", "ʃɔɾɔp"]
- **Why:** Same rule as #1: Aquilina/Ġabra lemma is the perfect **xorob** /ˈʃɔ.rɔp/ (imperfect *jixrob*) — Wiktionary s.v. *xorob* confirms lemma, imperfect and IPA. The dataset's own Semitic standard-language siblings use the perfect citation (`ar`/`ar_qur` أكل `ʔakala` / شرب `ʃariba`, eat.js:102–103; `gez`/`tig` በልዐ `balʕa`, eat.js); only the deliberately-vernacular dialect rows show imperfects. Maltese belongs with the standard-language group. Final ⟨b⟩ devoiced [p] is kept from the current value; ɾ per the row's own `jiʃɾop`.

---

### 3. `kjh` — eat — future-participle `чиир` left behind after the drink row was normalised to the dictionary infinitive
- **File:** words/eat.js line 124
- **Current:** ["чиир", "tɕiːr"]
- **Expected:** ["чирге", "tɕirɡe"]
- **Why:** Internal sibling inconsistency created by an earlier fix. Closed review #12 (#20) replaced the wrong lexeme in `kjh` drink with the **citation infinitive** `ісерге` (*іс-* + =ерге), now live at drink.js:124 `["ісерге", "iserɡe"]`. Khakas–Russian lexicography cites verbs in the =арға/=ерге infinitive (the Russko-khakasskii shkol'nyi slovar', dict.khakbooks.ru, explicitly lists the citation suffixes =арғa, =ерге, =рға, =рге). The eat cell still carries the -р future participle `чиир` (stem *чи-*), so within one language the two verb concepts now use two different citation conventions. Stem *чи-* + =рге → **чирге**. (Contrast Tuvan, where the -р form *is* the dictionary convention — `tyv` чиир/ижер are correctly consistent; Khakas is not Tuvan.) IPA keeps the row's own `tɕ` for ⟨ч⟩ (current `tɕiːr`) and the plain `ɡe` of sibling `iserɡe`.

---

### 4. `sl` — one — feminine `ena` where the definition mandates the masculine citation form
- **File:** words/one.js line 317
- **Current:** ["ena", "eːna"]
- **Expected:** ["eden", "ɛːdən"]
- **Why:** The one definition (line 32) is explicit: "masculine/default citation form where languages distinguish gender". Slovene distinguishes gender in 'one' (m. *eden/en*, f. *ena*, n. *eno* — Herrity 2000, ch. Numerals; SSKJ headword **êden** *tudi* èn). `ena` is the feminine. Every other gendered Slavic sibling complies with the masculine rule: `cs`/`pl` jeden (315/161), `sr` један (318), `bg` един (319), `mk` еден (588), `hr` jedan (886) — and closed review #03 (#9) applied exactly this fix class to Bulgarian (неuter едно → masculine един) citing the same definition sentence. Slovene is now the lone violation in the branch. (The "counting default is *ena*" argument exists, but the dataset's adjudicated precedent — bg един — resolved that tension in favour of the masculine lemma.) IPA per SSKJ wide long ê, no stress mark, matching the stress-free sl column (`eːna`, `xʋaːla`, `xiːʃa`).

---

### 5. `el_grc` / `el_kath` — one — neuter `ἕν` contradicts both the definition block and the masculine convention applied by review #100
- **File:** words/one.js lines 515, 516
- **Current:** ["ἕν", "hén"] (el_grc); ["ἕν", "en"] (el_kath)
- **Expected:** ["εἷς", "hêːs"] (el_grc); ["εἷς", "is"] (el_kath)
- **Why:** A contradiction introduced by two parallel wave-10 reviews. Review #97 (#23) switched el_grc/el_kath from masculine `εἷς` to neuter `ἕν` "to align with el ένα"; in the very same closing batch, review #100 (#12) switched Sanskrit the **opposite** way — एकम् (neuter) → एकः (masculine), now live at one.js:84–85 — with the stated rationale "to match masc.-citation siblings (la `ūnus`, grc `εἷς` masc., de `eins`)". The definition block (line 32) is the tie-breaker and it sides with #100: "masculine/default citation form where languages distinguish gender (e.g. ar واحد, he אחד, fr un, es uno)". The Ancient Greek lexicographic lemma is also unambiguously **εἷς** (LSJ s.v. εἷς, μία, ἕν; Smyth §349); no Greek lexicon lemmatises the numeral under the neuter. Restoring εἷς also restores the IPA `hêːs` that review #100 (#9) explicitly re-verified as a PASS (spurious-diphthong ει = /eː/ with circumflex), and el_kath's itacistic `is`. Modern `el` ένα may stand under the "default" clause (counting form); the classicising registers should follow the lemma. One of #97/#100 must yield — and the definition says it is #97.

---

### 6. `ang` — love — infinitive verb `lufian` in an otherwise all-noun Germanic column
- **File:** words/love.js line 521
- **Current:** ["lufian", "luviɑn"]
- **Expected:** ["lufu", "luvu"]
- **Why:** The love definition (line 32) allows "noun or verb citation form depending on language", but within the Germanic family the dataset has settled uniformly on the noun: `enm` love (519), `non` ást (523), `got` 𐍆𐍂𐌹𐌰𐌸𐍅𐌰 *friaþwa* (524), `goh` minna (915), plus all modern rows (de Liebe, nl liefde, is ást, sv kärlek …). Old English alone gives the class-2 weak verb *lufian* 'to love'. The OE noun is **lufu** (f. ō-stem; Bosworth–Toller s.v. *lufu*; Buck 16.27 lists OE *lufu* under 'love (sb.)') — it is also the direct etymon of the `enm`/`en` noun rows above it, so the noun restores the diachronic chain lufu → love → love. IPA: intervocalic ⟨f⟩ = [v] (same rule the current cell already applies), final -u retained; no stress mark per the ang column convention (`etɑn`, `drincan`, `θɑŋk`). Closed review #22 (#20) examined only this cell's IPA, not the lemma's POS, so this is not re-litigation.

---

### 7. `kpv` — love — Russian-loan verb infinitive `радейтны` where the Permic siblings give a native noun
- **File:** words/love.js line 767 (same value at line 768, `koi`)
- **Current:** ["радейтны", "radʲɛjtnɨ"]
- **Expected:** ["муслун", "muslun"]
- **Why:** -ны is the Komi verb-infinitive ending, so this cell is the verb 'to love' (а Russian loan, < радеть at that), while the surrounding Uralic column gives nouns/verbal nouns for this concept: `udm` яратон (769), `myv` вечкема (772), `mhr` йӧратымаш, `mrj` ярататмаш, `se` ráhkisvuohta (472), `fi` rakkaus, `et`/`vro` armastus. Komi-Zyrian has the standard native abstract noun **муслун** 'love' (мус- 'dear' + -лун '-ness' — the exact structural parallel of Saami *ráhkis-vuohta*; it is the title word of the kpv Wikipedia article on love and the headword in Komi–Russian dictionaries s.v. любовь). The Komi-Permyak twin cell `koi` радейтны (768) has the same defect and should be fixed in the same pass with its own Permyak lexicographic check (Permyak dictionaries also carry муслун/любитӧм).

---

### 8. `mdf` — love — verb infinitive `кельгомс` against the noun in its only Mordvinic sibling
- **File:** words/love.js line 773
- **Current:** ["кельгомс", "kelʲɡoms"]
- **Expected:** ["кельгома", "kelʲɡoma"]
- **Why:** -мс is the Moksha verb-infinitive ending; `кельгомс` is 'to love'. The Erzya sibling directly above gives the deverbal noun: `myv` вечкема (772), not *вечкемс. Moksha has the precisely parallel noun **кельгома** 'love' — Glosbe's Russian–Moksha dictionary renders любовь as кельгома/кельгомась (the -сь being the definite suffix, excluded from citation). One Mordvinic language in noun form and the other in verb form for the same concept is a textbook intra-branch POS inconsistency; the -ма deverbal matches both its sibling and the Uralic column at large (see #7).

---

### 9. `sms` — love — adjective `rääʹǩǩes` 'dear' standing in for the abstract noun `rääʹǩǩesvuõtt`
- **File:** words/love.js line 476
- **Current:** ["rääʹǩǩes", "ræːkʲːes"]
- **Expected:** ["rääʹǩǩesvuõtt", "ræːkʲːesvuɘtː"]
- **Why:** Skolt Saami *rääʹǩǩes* is the **adjective** 'dear, beloved' (Feist 2015, *A Grammar of Skolt Saami*, lexicon s.v.); the noun 'love' is its -vuõtt abstract derivative **rääʹǩǩesvuõtt** (cf. the Skolt-revival memoir chapter title "Rääʹǩǩesvuõtt ja ǩiõll" = "Love and language", Barents Observer 2024). The Saami siblings in this very column all carry the abstract-noun suffix: `se` ráhkis**vuohta** (472), `smj` ráhkes**vuohta** (474), `smn` rähistus (475). Skolt alone stops at the bare adjective — morphologically one derivational step short of the concept. IPA: current base + `vuɘtː` (Skolt ⟨õ⟩ = central [ɘ]; final geminate per the sms column convention, cf. water `tʃæːtsː`, heart `vuemː`).

---

### 10. `sma` — love — `-dh` verb infinitive in the noun column; expected `gieriesvoete`
- **File:** words/love.js line 473
- **Current:** ["vïddedh", "viːdːəh"]
- **Expected:** ["gieriesvoete", "ɡieriesvuəte"]
- **Why:** Whatever lexeme *vïddedh* is meant to be, its shape is decisive: **-dh is the South Saami infinitive marker** (Bergsland 1994; Magga & Magga 2012 — cf. this row's own verb cells eat `byöpmedidh`, drink `jovkedh`), so the love cell is a verb where all its Saami siblings are nouns (se/smj -vuohta, smn rähistus; see #9). The established South Saami abstract noun for 'love' is **gieriesvoete** (*gieries* 'dear' + *-voete* '-ness' — the exact cognate template of North Saami *ráhkisvuohta*; used pervasively in South Saami scripture and school materials). This also repairs the family's internal derivational parallelism: dear+NESS across sma/smj/se/sms. IPA given broadly per the segmental style of the existing sma cells (⟨oe⟩ = [uə]).

---

### 11. `lzz` — love — `ნოშქერი` is 'charcoal', not 'love'; the Laz noun is `ოროფა`
- **File:** words/love.js line 172
- **Current:** ["ნოშქერი", "noʃkʼeri"]
- **Expected:** ["ოროფა", "oropa"]
- **Why:** Laz *noşkeri/ნოშქერი* means "aşırı yanık, kömür" — 'burnt through, **charcoal**' (Lazuri–Turkuli Leksik̆oni s.v. *noşk̆eri*); it is not a love word at all, so the cell fails the definition's noun-sense requirement (line 32: "Basic word/root for love or affection") outright. The Laz noun for 'love' is **oropa/ოროფა** (Laz Institute, "Qoropaş Tkvalape — Lazca aşk cümleleri"; dialectally also *q̇oropa*), which is the direct cognate of the Mingrelian sibling already in the file: `xmf` ჸოროფა `ʔorofa` (love.js:680, locked in as a positive example by closed review #95). Kartvelian-internal evidence and an external dictionary agree; the current value is a wrong lexeme that survived because review #15's Kartvelian pass flagged the `sva` duplicate (held for lack of a replacement) but never audited the Laz cell.

---

### 12. `rup` — thanks — `harauâ` is the noun 'joy', not a spoken thank-you formula; Aromanian says `haristo`
- **File:** words/thanks.js line 757
- **Current:** ["harauâ", "haˈrawɨ"]
- **Expected:** ["haristo", "hariˈsto"]
- **Why:** The thanks definition (line 32) demands a "spoken thank-you formula for modern languages". Aromanian *harauã* is the noun 'joy' (< Greek χαρά; Cunia, *Dictsiunar a limbãljei armãneascã* s.v. *harauã* "sf — bucurie"), not a gratitude formula. The actual everyday Aromanian thank-you is **haristo** (< Greek ευχαριστώ), as given uniformly by the Aromanian phrasebooks (Omniglot "Useful phrases in Aromanian": Thank you — *Haristo*; Wikivoyage Aromanian phrasebook, same). Closed reviews #26 (#19) and #86 (F14) audited this cell only for stress placement and loan etymology respectively — neither checked the gloss against the definition's formula requirement, which is exactly this persona's lens. Final-syllable stress per the Greek oxytone etymon, with the row's existing stress-marking style (cf. `haˈrawɨ`, `ˈbunɨ vɨ ˈziwɨ`).

---

## Summary

12 findings, all verified verbatim against the live files on 2026-06-11: two Maltese lemma-convention errors (eat/drink), one Khakas citation-infinitive inconsistency left behind by a closed-review fix, two numeral-gender violations of the `one` definition block (Slovene; the el_grc/el_kath ↔ #97-vs-#100 convention collision), one Old English POS outlier in the Germanic love column, four Uralic love-column POS/derivation defects (kpv/koi, mdf, sms, sma), one Kartvelian wrong-lexeme (Laz 'charcoal'), and one Aromanian noun-for-formula substitution in thanks. Nothing here re-opens an adjudicated wont-fix; every consistency claim is backed by named sibling cells with line numbers.

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

Each Current value and cited sibling was re-verified verbatim against the live files. Eight findings applied; four held (three needing a sourced replacement I could not attest offline, plus koi which is a distinct language from the sourced kpv).

**Applied:**

- **116-1 `mt` eat `jiekol`/`jiɛkol` → `kiel`/`kiɛl`** — APPLIED (applied by orchestrator this round). Maltese is a standardised language whose lexicographic lemma is the 3sg-masc-perfect; Wiktionary s.v. *kiel* gives "kiel (imperfect jiekol) — to eat" (kaikki/Wiktionary, following Aquilina). `jiekol` is an inflected sub-form. The dataset's standard-language Semitic siblings cite the perfect (ar `ʔakala`, ar_qur, gez/tig); only the deliberately-vernacular dialect rows show imperfects. IPA `kiɛl` follows the row's own ⟨ie⟩=`iɛ` convention (mt one wieħed `wiɛħɛt`, one.js:253). Caveat for the reviewer: Wiktionary narrowly transcribes *kiel* as /kɪːl/ (⟨ie⟩ = single long [ɪː]) rather than a diphthong; I kept the row-internal `iɛ` rendering for consistency, but a future IPA pass may prefer `kiːl`/`kɪːl`.
- **116-2 `mt` drink `jixrob`/`jiʃɾop` → `xorob`/`ʃɔɾɔp`** — APPLIED. Wiktionary/kaikki s.v. *xorob*: "xorob (imperfect jixrob) — to drink", IPA /ˈʃɔ.rɔp/ (matches the proposed `ʃɔɾɔp`). Same standard-language perfect-lemma rule as 116-1.
- **116-4 `sl` one `ena`/`eːna` → `eden`/`ɛːdən`** — APPLIED. The one definition mandates the masculine/default citation form; `ena` is feminine, `eden`/`en` masculine (Slovene numerals: en m. / ena f. / eno n.). All gendered Slavic siblings comply (cs/pl jeden, sr један, bg един, mk еден, hr jedan), and closed #03 applied exactly this fix to Bulgarian. IPA `ɛːdən` (open-mid ɛ, stress-free per the sl column) confirmed by Wiktionary s.v. *eden* = /ɛ̀ːdən/.
- **116-5 `el_grc`/`el_kath` one `ἕν` → `εἷς`** — APPLIED (el_grc `hén`→`hêːs`; el_kath `en`→`is`). Resolves a wave-10 contradiction: #97 (finding 23) switched these to neuter ἕν "to align with el ένα," while in the same closing batch #100 (finding 12) switched Sanskrit the opposite way (एकम् neuter → एकः masc.) citing the masculine-citation rule and "grc εἷς masc." as its reference — and #100 (finding 9) had re-verified `el_grc εἷς hêːs` as a PASS. The one definition block is the tie-breaker and mandates the masculine/default citation; LSJ lemmatises the numeral as εἷς. Restoring εἷς also restores the `hêːs` IPA #100 verified. Modern el ένα may stand under the "default/counting" clause.
- **116-6 `ang` love `lufian`/`luviɑn` → `lufu`/`luvu`** — APPLIED. *lufian* is the class-2 weak **verb** 'to love'; the noun is **lufu** (Bosworth-Toller s.v. *lufu*; lufian = lufu + -ian, Wiktionary). The Germanic love column is uniformly noun (enm love, non ást, got friaþwa, goh minna). Noun also restores the lufu→love→love etymon chain. IPA: intervocalic ⟨f⟩=[v] (as the current cell already applies), final -u retained.
- **116-7 `kpv` love `радейтны`/`radʲɛjtnɨ` → `муслун`/`muslun`** — APPLIED. -ны is the Komi verb-infinitive ending (and радейтны is a Russian loan < радеть), so the cell is the verb 'to love' in an otherwise nominal Uralic column (udm яратон, myv вечкема, se ráhkisvuohta). The native Komi-Zyrian noun for любовь is **муслун** (Russko-komi dictionary, dict.fu-lab.ru s.v. любовь: "взаимная любовь … муслун"), structurally мус- 'dear' + -лун '-ness', paralleling Saami -vuohta.
- **116-8 `mdf` love `кельгомс`/`kelʲɡoms` → `кельгома`/`kelʲɡoma`** — APPLIED. -мс is the Moksha verb-infinitive ending. The deverbal noun is **кельгома** (Glosbe Russian→Moksha любовь → кельгома/кельгомась, the -сь being the definite suffix), matching the Erzya sibling's -ма noun вечкема (myv, love.js:772).
- **116-11 `lzz` love `ნოშქერი`/`noʃkʼeri` → `ოროფა`/`oropa`** — APPLIED. *noşkeri/ნოშქერი* is 'charcoal/burnt-through', not a love word (Lazuri–Turkuli Leksiḳoni). The Laz noun for love is **oropa/ოროფა** (confirmed: Laz texts use *oropa* as the noun 'love'; cf. verb forms p̌ḳorop "I love"), the direct cognate of the Mingrelian sibling already in the file (xmf ჸოროფა `ʔorofa`, love.js:680). Clear wrong-lexeme fix.

**Held (sourced replacement could not be reliably attested offline):**

- **116-3 `kjh` eat `чиир`/`tɕiːr`** — HELD. The diagnosis is sound (internal inconsistency: closed #12 moved the drink row to the =ерге citation infinitive *ісерге*, while eat still carries the -р future participle *чиир*). BUT the exact replacement surface form cannot be reliably sourced: Khakas infinitive morphology for a **vowel-final stem** like *чи-* is non-trivial — the reference grammar (sostik.info, khakas.altaica.ru) states a stem-final vowel "either merges with the suffix vowel into и, or is deleted," so the naive concatenation *чи-* + =рге = *чирге* asserted in the finding is not guaranteed (the form may surface as *чиирге* or another contracted shape, given the future participle is *чиир* with ии). I could not open the cited dict.khakbooks.ru entry for 'eat' to confirm. Recommend the reviewer supply the dictionary-attested infinitive surface form (чирге vs чиирге) + IPA, or escalate to a Khakas lexicographer.
- **116-9 `sms` love `rääʹǩǩes`/`ræːkʲːes`** — HELD pending IPA confirmation, but the replacement surface form **is** sourced — recommend applying. *rääʹǩǩes* is the adjective 'dear/beloved'; the noun is **rääʹǩǩesvuõtt** (confirmed: Barents Observer 2024, chapter title "Rääʹǩǩesvuõtt ja ǩiõll" = "Love and language"), matching the abstract-noun -vuõtt/-vuohta of the Saami siblings (se ráhkisvuohta, smj ráhkesvuohta, smn rähistus). I am confident in the surface form `rääʹǩǩesvuõtt`; I left it OPEN only because I could not independently verify the proposed narrow IPA `ræːkʲːesvuɘtː` (the ⟨õ⟩=[ɘ] and final-geminate -vuõtt[ː] segmentation) against a phonetic source. Recommend the reviewer confirm/adjust the IPA and apply.
- **116-10 `sma` love `vïddedh`/`viːdːəh`** — HELD. Diagnosis sound: **-dh is the South Saami infinitive marker** (confirmed by the row's own verb cells eat *byöpmedidh*, drink *jovkedh*), so *vïddedh* is a verb in the noun column. The adjective base *gieries* 'dear/beloved' is confirmed (baakoeh.oahpa.no; Glosbe sma→nb gieries = "elsket/kjær"). BUT I could **not** attest the assembled abstract noun **gieriesvoete** in any accessible dictionary (Glosbe en→sma 'love' has no entry; the official Giellatekno source baakoeh.oahpa.no blocked on TLS cert errors; Wiktionary has no entry). Per the sourced-form policy I will not commit a constructed lemma. Recommend the reviewer source the attested South Saami noun for 'love' (gieriesvoete or alternative) + IPA, or escalate.
- **116-7b `koi` (Komi-Permyak) love `радейтны`/`radejtnɨ`** — HELD. The kpv (Komi-Zyrian) twin was fixed (116-7), but koi is a **distinct language** and I could not source the Komi-Permyak noun муслун (or любитӧм) directly — Glosbe/NorthEuraLex/komiperm.ru returned no usable entry (the dict.fu-lab.ru source is Komi-Zyrian). The defect (Russian-loan verb infinitive) is the same, but per policy I won't propagate an unsourced form across a language boundary. Recommend the reviewer confirm the Permyak love noun from a Komi-Permyak–Russian dictionary.

**Applied (additional):**

- **116-12 `rup` thanks `harauâ`/`haˈrawɨ` → `haristo`/`hariˈsto`** — APPLIED. *harauã* is the noun 'joy' (< Gk χαρά), not a gratitude formula, so it fails the thanks definition's "spoken thank-you formula" requirement. The everyday Aromanian thank-you is **haristo** (< Gk ευχαριστώ) (confirmed: Omniglot Aromanian phrasebook lists "Haristo / Haristo multu" under thank you; Wikivoyage Aromanian phrasebook). Final-syllable stress `hariˈsto` per the Greek oxytone etymon and the row's existing stress-marking style.

Open items left for reviewer decision: **4** (116-3 kjh eat; 116-9 sms love IPA; 116-10 sma love; 116-7b koi love).

---

## Reviewer round-2 response (再評価 round-2)

I re-verified all 8 claimed-applied fixes verbatim against the live `words/*.js` and adjudicated the 4 held items, doing fresh web research on each held replacement form.

**Applied fixes — all confirmed present in live data (✓):**

| # | Cell | Live value | Verdict |
|---|------|-----------|---------|
| 116-1 | `mt` eat (eat.js:247) | `["kiel", "kiɛl"]` | ✓ |
| 116-2 | `mt` drink (drink.js:247) | `["xorob", "ʃɔɾɔp"]` | ✓ |
| 116-4 | `sl` one (one.js:317) | `["eden", "ɛːdən"]` | ✓ |
| 116-5 | `el_grc`/`el_kath` one (one.js:515–516) | `["εἷς","hêːs"]` / `["εἷς","is"]` | ✓ |
| 116-6 | `ang` love (love.js:521) | `["lufu", "luvu"]` | ✓ |
| 116-7 | `kpv` love (love.js:767) | `["муслун", "muslun"]` | ✓ |
| 116-8 | `mdf` love (love.js:773) | `["кельгома", "kelʲɡoma"]` | ✓ |
| 116-11 | `lzz` love (love.js:172) | `["ოროფა", "oropa"]` | ✓ |
| 116-12 | `rup` thanks (thanks.js:757) | `["haristo", "hariˈsto"]` | ✓ |

Every applied fix is genuinely in the live data (no phantom-fix problem). The diagnoses are all sound and the replacements well-sourced.

**Held items — adjudication:**

- **116-3 `kjh` eat `чиир`/`tɕiːr`** — △ PARTIAL / ACCEPT-AS-LIMITATION. Live value still `["чиир","tɕiːr"]` (eat.js:124); the inconsistency with the now-`ісерге` drink sibling (drink.js:124) is real and undisputed. But the worker's morphological caveat is legitimate: *чи-* is a vowel-final stem and the future participle is *чиир* (with long ии), so the infinitive may surface as *чиирге* (contracted/lengthened) rather than the naive *чирге*. I attempted to attest the surface form via dict.khakbooks.ru and khakas.altaica.ru; both require interactive in-corpus search that is not fetchable offline, and neither returned the 'eat' entry. This is a genuine LOOP-TERMINATION case: the exact surface form (чирге vs чиирге) cannot be sourced offline. **Documented as a known limitation — needs a Khakas lexicographer.** Do not keep open on this alone.

- **116-7b `koi` (Komi-Permyak) love `радейтны`/`radejtnɨ`** — ✗→ACTIONABLE. Live value still `["радейтны","radejtnɨ"]` (love.js:768), an infinitive verb (-ны). The worker correctly declined to propagate the Komi-Zyrian noun *муслун* across the language boundary — and my research confirms that caution was right: Glosbe ru→koi gives the Komi-Permyak noun for любовь as **радейтӧм** (the -тӧм deverbal nominalization), NOT *муслун*. So a dictionary-sourced noun replacement now exists: `радейтӧм` (POS-correct, fixes the -ны infinitive defect). Caveat: радейтӧм shares the Russian-loan root *радей-*; if the dev team prefers a native noun, муслун/любитӧм should be checked against a Komi-Permyak–Russian print dictionary, but радейтӧм is the one currently attested online and is a defensible, sourced fix. **This is a concretely actionable next step.**

- **116-9 `sms` love `rääʹǩǩes`/`ræːkʲːes`** — ✗→ACTIONABLE. Live value still `["rääʹǩǩes","ræːkʲːes"]` (love.js:476) — the bare adjective 'dear'. The worker explicitly states the surface replacement **`rääʹǩǩesvuõtt`** IS sourced (Barents Observer 2024 chapter title "Rääʹǩǩesvuõtt ja ǩiõll" = "Love and language") and matches the -vuõtt/-vuohta abstract-noun pattern of every Saami sibling (se ráhkisvuohta, smj ráhkesvuohta). The only thing held was IPA confirmation. A held-but-sourced surface form that the worker itself recommends applying should be applied; the IPA `ræːkʲːesvuɘtː` is internally consistent with the sms column convention (⟨õ⟩=[ɘ], final geminate cf. water `tʃæːtsː`, heart `vuemː`) and is acceptable as a reasonable narrow transcription. **Apply the sourced surface form.**

- **116-10 `sma` love `vïddedh`/`viːdːəh`** — △ PARTIAL. Live value still `["vïddedh","viːdːəh"]` (love.js:473). Diagnosis sound (-dh = South Saami infinitive marker, confirmed by sibling cells eat `byöpmedidh`, drink `jovkedh`), so this is a verb in an all-noun column. The base adjective *gieries* 'dear' is well-attested. The proposed noun **gieriesvoete** appears in real South Saami usage (DJ iDJa track "Gieriesvoete"; #gieriesvoete on Instagram) but I could not reach a dictionary attestation — the official Giellatekno source baakoeh.oahpa.no fails on a TLS certificate error and Glosbe has no en→sma 'love' entry. The current value is nonetheless a clear POS error (a verb where the concept wants a noun). **Two acceptable resolutions:** (a) source the attested abstract noun from a print South Saami dictionary and apply, or (b) if it remains unsourceable after one more genuine attempt, document as a known limitation. Because there is at least corroborating real-world usage of `gieriesvoete` and an unfixed clear POS error, I leave this actionable for now.

**New issues raised this round:** none. (Research was confirmatory of the worker's diagnoses; the koi=радейтӧм finding refines an existing held item rather than opening a new cell.)

**Scorecard (round-2):** 9 applied fixes verified ✓ in live data; 0 phantom fixes; held items — 116-3 accept-as-limitation, 116-7b actionable (sourced `радейтӧм`), 116-9 actionable (sourced `rääʹǩǩesvuõtt`, apply), 116-10 actionable/partial (clear POS error, replacement needs one more sourcing attempt).

**File status: OPEN** — Dev team must: (1) apply `koi` love → `радейтӧм`/`radejtɘm` (sourced via Glosbe ru→koi; or substitute a print-dictionary native noun); (2) apply `sms` love → `rääʹǩǩesvuõtt`/`ræːkʲːesvuɘtː` (surface form already sourced, worker-recommended); (3) make one more genuine attempt to source `sma` love `gieriesvoete` (or alternative) and apply, else document as known limitation. (116-3 kjh eat is accepted as an unsourceable-offline known limitation and is NOT blocking.)
