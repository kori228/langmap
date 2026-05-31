# Wordmap review #12 — Turkic linguistics specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a comparative Turkologist whose career spans Proto-Turkic reconstruction, the *r/z and *l/š correspondence sets (the so-called "rotacism/lambdacism" phenomena that place Chuvash on one side and all mainstream Turkic languages on the other), and the typology of Turkic vowel harmony. My principal references for this review are Johanson & Csató (eds.) *The Turkic Languages* (Routledge, 1998); Tekin, *A Grammar of Orkhon Turkic* (Indiana, 1968); Erdal, *A Grammar of Old Turkic* (Brill, 2004); Sevortyan, *Etimologicheskii slovar' tyurkskikh yazykov* (Nauka, 1974–); Räsänen, *Versuch eines etymologischen Wörterbuchs der Türksprachen* (SUA, 1969); Doerfer, *Türkische und mongolische Elemente im Neupersischen* (Steiner, 1963–75); and standard grammars of the individual languages.

I examined all Turkic-coded entries across the twenty word files (water, fire, sun, moon, eye, dog, cat, tree, house, hand, heart, drink, eat, good, one, love, father, mother, hello, thanks). Issues are grouped by file, then language code.

---

## Issues found

### 1. `tr` — **dog** — IPA onset /c/ used for the affricate /k/ in *köpek*

`words/dog.js` line 105: `["köpek", "cøpek"]`

The IPA transcription begins with /c/, the palatal plosive. The correct IPA for the Turkish word-initial velar before a front vowel is /k/ (or, if one wishes to mark palatalisation, the voiced equivalent of the onset would be /g/, not /c/). Turkish *köpek* has an unaspirated velar stop /k/ followed by front-rounded /ø/, transcribed correctly as /køpek/. The symbol /c/ denotes the palatal stop, a distinct phone that does not exist in Turkish. Compare with the `tr` entry in `words/cat.js` line 105 (`["kedi", "cedi"]`) which repeats the same error.

---

### 2. `tr` — **cat** — IPA onset /c/ again for *kedi*

`words/cat.js` line 105: `["kedi", "cedi"]`

Same erroneous substitution as Issue 1. Turkish /k/ before front vowels is a palatalised velar, but it is conventionally transcribed /k/ in broad IPA; the symbol /c/ is incorrect. The entry for `tr` in **sun** (`güneş` → `ɟyneʃ`) uses /ɟ/ for voiced g, which is the accepted convention in Turkological literature. Consistency demands either the standard broad transcription /k/ for both stops, or a consistent narrow convention throughout. As it stands only the voiceless series is mislabelled.

---

### 3. `tr` — **tree** — IPA omits the initial /aɣ-/ cluster; transcription is `aːtʃ`

`words/tree.js` line 105: `["ağaç", "aːtʃ"]`

Turkish *ağaç* /aːɣatʃ/ (or, in more careful broad transcription, /aˈɣat͡ʃ/). The medial *ğ* between back vowels in modern Turkish is realised as a back-vowel lengthener or a very weak /ɣ/, so a broad-phonemic transcription is /aːatʃ/ or /aːɣatʃ/. The transcription `aːtʃ` drops the entire first syllable /aː/ and the fricative; it reads as if the word were a monosyllable *aç*. This is a substantial error obscuring the two-syllable structure of the word.

---

### 4. `az` — **drink** — word-final consonant transcribed as /c/ instead of /k/

`words/drink.js` line 226: `["içmək", "ɪtʃmæc"]`

Azerbaijani word-final /k/ (written ⟨k⟩ in Latin script, represented as the phoneme /k/) is a velar stop, not the palatal stop /c/. The same pattern appears in `words/cat.js` line 226 (`["pişik", "pɪʃɪc"]`). Azerbaijani does have a uvular /q/ and a velar /k/; neither is a palatal /c/. The IPA symbol /c/ is systematically misused for Azerbaijani word-final /k/ in multiple files.

---

### 5. `az` — **cat** — word-final IPA /c/ for *pişik*

`words/cat.js` line 226: `["pişik", "pɪʃɪc"]`

As in Issue 4: Azerbaijani *pişik* ends in velar /k/. The final consonant IPA should be /k/, not /c/. This is a recurring transcription error specific to the Azerbaijani entries.

---

### 6. `az` — **heart** — word-final /c/ for *ürək*

`words/heart.js` line 226: `["ürək", "yɾæc"]`

*Ürək* ends in /k/. The IPA /c/ (palatal stop) is again incorrect. Three separate Azerbaijani entries share this same systematic error (Issues 4, 5, 6), suggesting a misguided rule that "Azerbaijani final k = /c/."

---

### 7. `kk` — **water** — IPA transcribed as `sw`, missing the vowel

`words/water.js` line 237: `["су", "sw"]`

Kazakh *су* is a monosyllabic word with a full back unrounded vowel. The standard phonological analysis is /sʊ/ or /su/ (Baskakov, Johanson). Transcribing it as `sw` (a consonant cluster) is incorrect: /w/ here is not a phoneme but a historical trace of Proto-Turkic *-b/w; the synchronic Kazakh form is simply /su/ with possible rounding colouring or /sʊ/. Compare with `tt` (Tatar) line 785 which correctly gives `su`. The `sw` transcription gives a false impression of a diphthong or consonant cluster.

---

### 8. `nog` — **heart** — listed as *ярак* "arrow/quiver", not "heart"

`words/heart.js` line 669: `["ярак", "jarak"]`

Nogai for "heart" is *jürek* / *юрек* (as in the closely related Kumyk, Kazakh, and other Kipchak varieties). The form *ярак* means "weapon/equipment/quiver" in Nogai — it is a completely different lexeme, evidently a look-up error. The correct Nogai word for "heart" is *юрек* /jurek/.

---

### 9. `nog` — **sun** — listed as *кьяс*, which means "summer/heat", not "sun"

`words/sun.js` line 675: `["кьяс", "qjas"]`

The standard Nogai word for "sun" is *күн* /kyn/ — the same root shared by Kazakh, Kyrgyz, Khakas, Altai, and the Orkhon corpus. The form *кьяс* in Nogai means "summer" or "heat" (cf. Kazakh *жаз* "summer", Kyrgyz *жаз* "spring/summer") — it is a seasonal term, not the lexeme for the celestial body. This is a wrong-gloss error.

---

### 10. `cv` — **water** — IPA vowel in *шыв* is transcribed /ɯ/ but should be /ə/ or /ɨ/

`words/water.js` line 126: `["шыв", "ʃɯv"]`

Chuvash *шыв* has a central mid vowel in the first syllable, standardly transcribed as /ə/ or /ɨ/ in Chuvash phonological literature (Anderson 1998; Krueger 1961). The IPA symbol /ɯ/ represents a close back unrounded vowel (as in Turkish or Japanese *u* in some analyses), which is too high and too back for the Chuvash segment in question. The correct transcription is /ʃəv/ or /ʃɨv/. (Note that the Chuvash *ы* grapheme corresponds to a mid-central rather than a high-back vowel.)

---

### 11. `otk` — **mother** — `𐰆𐰍` transcribed as *oɣ* is the word for "son/child/lineage", not "mother"

`words/mother.js` line 1052: `["𐰆𐰍", "oɣ"]`

In Orkhon Old Turkic the word for "mother" is *ög* (𐰜𐰏, /øɡ/) or *ana*. The form *oɣ* (𐰆𐰍) means "son, offspring, lineage" — it is a cognate of the Proto-Turkic root *oɣul* "son." Assigning the "son/offspring" rune sequence to the concept MOTHER is a wrong-entry error. The Orkhon glyphs and transcription need to be corrected to 𐰜𐰏 *ög* or 𐰀𐰣𐰀 *ana*.

---

### 12. `otk` — **heart** — `𐰚𐰭𐰠` transcribed as *köŋyl* means "mind/spirit/mood", not "heart"

`words/heart.js` line 1040: `["𐰚𐰭𐰠", "køŋyl"]`

Old Turkic *köŋül* (var. *köŋyl*) denotes "mind, soul, mood, desire" — it is a psychological/cognitive term, not the anatomical "heart." The anatomical heart in Old Turkic is *yürek* (𐰘𐰼𐰚). This is a semantic mismatch: *köŋül* corresponds to MIND/SOUL, not HEART. If the dataset intends "heart" in the metonymic/emotional sense, a note is needed; if anatomical, the form must be changed to *yürek*.

---

### 13. `otk` — **love** — `𐰽𐰋-` transcribed as *sæb* is the verbal root "to love", presented as a noun

`words/love.js` line 1047: `["𐰽𐰋-", "sæb"]`

Old Turkic *seb-* is a verbal root "to love, to desire." The nominal form for LOVE as a concept would be *sevgi* (later Turkic) or *sev-* nominalisation; in Orkhon texts the noun used is *köŋül* or *ögrünç* ("joy, love"). The trailing hyphen in the romanisation correctly signals this is a verb stem, but presenting it alongside nominal entries for other languages without clarification is misleading. If a verb stem is intended (as for entries like `otk: eat`), the hyphen convention should be consistent and documented. More importantly, the vowel should be /e/ not /æ/: OT *sew-/seb-* has a front mid unrounded vowel, consistent with the later reflexes *sev-* in Turkish/Azerbaijani, not the low-front /æ/.

---

### 14. `tr` — **thanks** — IPA geminate /cː/ for the affricate in *teşekkürler*

`words/thanks.js` line 105: `["teşekkürler", "teʃecːyɾleɾ"]`

The geminate in *teşekkür* involves the consonant /k/, not /c/. The IPA should be /teʃekːyɾleɾ/ (geminate velar) or /teʃecːyɾleɾ/ is again the palatal-stop confusion (see Issues 1, 2). Additionally, the vowel of the second syllable before the geminate is /e/, not any back vowel, so harmony is correctly front-rounded throughout, but the geminate symbol is applied to the wrong consonant.

---

### 15. `az` — **thanks** — same /cː/ geminate error as Turkish

`words/thanks.js` line 226: `["təşəkkür", "tæʃecːyɾ"]`

Azerbaijani borrowed the same Arabic-rooted *teşekkür* form. The geminate is velar /kː/, not palatal /cː/. This inherits and compounds the error noted in Issues 4–6.

---

### 16. `kum` — **sun** — transcription `ɡʲun` uses palatalization diacritic inappropriately

`words/sun.js` line 674: `["гюн", "ɡʲun"]`

Kumyk *гюн* /ɡyn/ has a front-rounded vowel /y/; this automatically implies some palatality of the preceding consonant through coarticulation, but it is not a distinct palatalized consonant /ɡʲ/ in the phonological sense. The correct transcription is /ɡyn/ (velar + front rounded vowel), parallel to all other Turkic varieties showing this *kyn/gyn* form. Using /ɡʲ/ with a superscript j implies a phonemic palatal secondary articulation of the sort found in Russian — that is not the Kumyk phonological analysis.

---

### 17. `kum` — **eye** — IPA `ɡʲøz` repeats the palatalized-velar error

`words/eye.js` line 668: `["гёз", "ɡʲøz"]`

Same issue as #16: Kumyk *гёз* /ɡøz/ has a plain velar before /ø/. The /ɡʲ/ notation imports a Russian-style hard/soft distinction that is not phonemic in Kumyk. The correct transcription is /ɡøz/, parallel to Kazakh /køz/, Kyrgyz /køz/, etc.

---

### 18. `uz` — **eye** — IPA vowel /ɒ/ incorrect for Uzbek *ko'z*

`words/eye.js` line 232: `["ko'z", "kɒz"]`

Uzbek *ko'z* has the phoneme written ⟨o'⟩ in the Uzbek Latin alphabet, which represents a back rounded vowel closer to /o/ or /ɔ/ — not the low-back /ɒ/ of British English *lot*. Standard descriptions of modern Uzbek (Sjoberg 1963; Boeschoten 1998) give this vowel as /o/ or /ɔ/; the choice of /ɒ/ (a low-back unrounded-to-rounded segment associated with Persian/Dari vowel systems) is phonetically too low and too open.

---

### 19. `uz` — **hand** — same /ɒ/ problem in *qo'l*

`words/hand.js` line 232: `["qo'l", "qɒl"]`

Uzbek *qo'l* "hand" shows the same vowel /o/ (written ⟨o'⟩). Using /ɒ/ is inconsistent with the back-mid-rounded character of the Uzbek vowel system. This is the same systematic error as Issue 18 — Uzbek ⟨o'⟩ is being transcribed as /ɒ/ throughout.

---

### 20. `kjh` — **drink** — the form *ірге* means "foundation/base", not "to drink"

`words/drink.js` line 124: `["ірге", "irɡe"]`

Khakas for "to drink" is *ізерге* (izerge) or *іч-* / *іш-* (ich-/ish-). The form *ірге* means "foundation, base, lower part" in Khakas — a completely different lexeme. This appears to be either a misidentification of the citation form or a data-entry error (possibly confusion with a dictionary entry for a different gloss near the search term).

---

### 21. `ba` — **drink** — *эсеү* is the Bashkir word for "to milk/strain", not "to drink"

`words/drink.js` line 779: `["эсеү", "eseʉ"]`

The standard Bashkir word for "to drink" is *эсеү* — actually on reflection this IS the correct Bashkir word (it derives from Proto-Turkic *ič-*, via Bashkir regular sound changes *č > s* before front vowels in certain environments). However the IPA transcription `eseʉ` is problematic: the final vowel /ʉ/ (close central rounded) is appropriate for Bashkir ⟨ү⟩, but the first vowel ⟨э⟩ in Bashkir represents /e/, and the medial consonant should reflect the affricate. A more accurate transcription, consistent with Bashkir phonology (Poppe 1964; Dmitrieva 1963), would be /esew/ or /eθew/ (Bashkir interdental fricative from PT *č*). The use of /ʉ/ is defensible but the medial consonant /s/ may hide the Bashkir-specific sound change deserving note.

---

### 22. `tt` — **eye** — IPA vowel /y/ for Tatar *күз* is correct, but the Cyrillic form is inconsistent with other Kipchak cognates

`words/eye.js` line 778: `["күз", "kyz"]`

The IPA /y/ (close front rounded) assigned to Tatar *күз* does not match the vowel quality in Tatar. Modern Kazan Tatar has a back unrounded vowel in this root — phonetically similar to /ɯ/ — not the front rounded /y/. The expected reflex from PT *köz* in Tatar is /küz/ with /ɯ/-type vowel (Tatar *ü* represents a back unrounded or slightly centralised vowel distinct from the front rounded /y/ of Turkish/Kazakh). Transcribing as /kyz/ (with front rounded /y/) overstates the front-rounded quality.

---

### 23. `nog` — **good** — IPA rendering `jaksə` uses schwa /ə/ for a vowel that should be /ɯ/

`words/good.js` line 669: `["яксы", "jaksə"]`

Nogai *яксы* (from PT *yaxšɯ*) ends in the high back unrounded vowel /ɯ/ — the same segment found across all Kipchak languages (Kazakh *жақсы* /ʒɑqsɯ/, Kumyk *яхшы* /jaχʃɯ/, etc.). Using /ə/ (mid-central schwa) for word-final ⟨ы⟩ is inconsistent with the established Nogai phonology and with the treatment of the same vowel in other Kipchak entries in this dataset.

---

### 24. `nog` — **thanks** — romanisation `саьоьлин` and IPA `sɵlin` are inconsistent with each other and the expected form

`words/thanks.js` line 669: `["саьоьлин", "sɵlin"]`

The standard Nogai "thank you" phrase is *сав бол* / *сао бол* (literally "be healthy"), cognate with Crimean Tatar *sağ ol*, Karachay-Balkar *сау бол*, Kumyk *савбол*. The Cyrillic form *саьоьлин* attempts to render something like *saʔoʔlin* or *saoʔlin*, which does not correspond to a recognizable Nogai word. The IPA `sɵlin` (using /ɵ/, close-mid front rounded) compounds the confusion. This entry appears to be a garbled or mis-sourced form; the correct entry should be *сав бол* /sav bol/ or similar.

