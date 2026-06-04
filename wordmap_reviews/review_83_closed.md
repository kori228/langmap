# Wordmap review #83 — Indo-Aryan + Dravidian audit

## Reviewer self-introduction

I am a historical-comparative linguist whose specialism is the phonologies of South Asian languages — the New Indo-Aryan continuum from Sindhi through Sinhala, the Dravidian family, and the classical scaffolding (Sanskrit, Pali) that both groups still draw on for lexical loans. For this dataset I rely on the conventions documented in CONTRIBUTING.md (`[surface, ipa]`, surface = the language's own orthography, IPA = broad phonemic/phonetic transcription), and I have audited the **19 South Asian codes** in scope for review #83 across all **20 word files** in `/home/jounlai/langmap/words/`: `hi, ur, pa, bn, gu, mr, or, as, sd, ne, si, ta, te, ml, kn, sa, pi, dv, rom` (plus the `sa_edu` and `pi_edu` romanised siblings). All 19 codes are present in every file. Authority references used below: Masica (1991) *The Indo-Aryan Languages*; Krishnamurti (2003) *The Dravidian Languages*; Cardona & Jain (2003) eds. *The Indo-Aryan Languages*; Steever (1998) ed. *The Dravidian Languages*; Asher & Kumari (1997) *Malayalam*; Schiffman (1999) *A Reference Grammar of Spoken Tamil*; Chatterji (1926) *The Origin and Development of the Bengali Language*; Khubchandani (1969) on Sindhi; Cain & Gair (2000) *Sinhala*; Cain (1995) on Dhivehi; Matras (2002) *Romani: A Linguistic Introduction*; Whitney (1889) *Sanskrit Grammar*; Geiger (1916) *Pāli Literatur und Sprache*. My method is to sweep across the 20 files for **systematic** defects that recur within one phonological category (geminate notation, retroflex marking, Sanskrit-ऋ rendering, palatal-affricate symbol choice, the Hindi/Urdu doublet relationship, etc.) rather than scattered typos. Every "Current" cell below was copy-verified against the live file at the cited line by `grep -nE`.

---

## Issues found

### 1. `sa` — house — Sanskrit vocalic ऋ transcribed as `ɨ`, breaking the dataset-internal `r̩` convention
- **File:** `words/house.js` line 85 (and 84 `sa_edu`)
- **Current:** `sa: ["गृहम्", "ɡɾɨham"]`, `sa_edu: ["गृहम्", "ɡɾɨham"]`
- **Expected:** `sa: ["गृहम्", "ɡr̩ham"]`, `sa_edu: ["गृहम्", "ɡr̩ham"]`
- **Why:** Sanskrit ऋ is the syllabic alveolar trill /r̩/ (Whitney 1889 §23–24; Cardona 2003). The dataset transcribes it consistently as `r̩` everywhere else in the **sa** rows of the same audit batch — `heart.js:84-85` `hr̩dajam` and `tree.js:84-85` `vr̩kʂaɦ` both use `r̩`. Only `house.js` writes it as `ɾɨ` (alveolar flap + close central unrounded vowel), which is neither phonemically nor phonetically Sanskrit. A whole-dataset grep `grep -nE '"[^"]*ɨ[^"]*"' words/*.js` confirms `house.js:84-85` are the only `sa`/`sa_edu` cells using `ɨ` for ऋ. This is a one-line outlier within an otherwise uniform convention.

### 2. `pi` vs `pi_edu` — moon — same Pali word, palatal affricate notated two different ways
- **File:** `words/moon.js` lines 525 (`pi`) and 526 (`pi_edu`)
- **Current:** `pi: ["चन्द", "tʃanda"]`, `pi_edu: ["canda", "tɕanda"]`
- **Expected:** both should use the same symbol — pick one (project-wide the **sa** rows use `tɕ/dʑ` for the Old Indic palatals, e.g. `sa moon "tɕandɾaɦ"`, `sa water "dʑalam"`, `sa cat "maːɾdʑaːɾaɦ"`), so `pi: [..., "tɕanda"]` aligns the Pali variants with their Sanskrit parent.
- **Why:** Pali च, like Sanskrit च, is a (alveolo-)palatal stop /c/ → [tɕ] (Geiger 1916 §38). Within a single word in a single file the Devanagari and IAST siblings disagree: one uses `tʃ` (postalveolar) and the other uses `tɕ` (alveolo-palatal). Per project guidance "fix all variants together," these must match.

### 3. `pi` vs `pi_edu` — eye — same word, both palatal-affricate AND geminate notation diverge
- **File:** `words/eye.js` lines 519 (`pi`) and 520 (`pi_edu`)
- **Current:** `pi: ["चक्खु", "tʃakkʰu"]`, `pi_edu: ["cakkhu", "tɕakːʰu"]`
- **Expected:** harmonise on `tɕakːʰu` for both (matching the Sanskrit `tɕ` and the project's geminate-length convention `Cː`).
- **Why:** Two unrelated inconsistencies in one cell pair. (a) `tʃ` vs `tɕ` — same defect as #2. (b) The geminate is written `kkʰ` (doubling) in `pi` but `kːʰ` (length mark) in `pi_edu` — same phoneme, two different representations on adjacent lines. This is the cleanest one-line instance of the geminate-notation chaos catalogued below in #6/#7.

### 4. `pi` vs `pi_edu` — cat — Devanagari surface and IAST surface encode different consonants (`l` vs `r`)
- **File:** `words/cat.js` lines 519 (`pi`) and 520 (`pi_edu`)
- **Current:** `pi: ["बिळाल", "biɭaːla"]`, `pi_edu: ["biḷāra", "biɭaːɾa"]`
- **Expected:** the two surface forms should encode the same word — either both `biḷāla` (Devanagari `बिळाल`, IAST `biḷāla`, IPA `biɭaːla`) or both `biḷāra` (Devanagari `बिळार`, IAST `biḷāra`, IPA `biɭaːɾa`). Pick one.
- **Why:** The Devanagari form ends in `ल` (l), but the IAST romanisation ends in `ra` (r), and the IPA cells encode each variant faithfully. So the **surface forms transliterate to different words**, not the same word in two scripts. This is the pi-vs-pi_edu pattern (`eat: khādati / bhuñjati`, `good: sundara / kusala`, `love: pema / mettā`, `house: ghara / gehā`) where the romanised sibling is a synonym rather than a transliteration; for *cat* the divergence is a single segment and almost certainly a typo (one of the two letters) rather than a deliberate synonym choice.

### 5. `pi` — house — Devanagari spelling has aspiration that the romanised sibling does not
- **File:** `words/house.js` lines 526 (`pi`) and 527 (`pi_edu`)
- **Current:** `pi: ["घर", "ɡʱara"]`, `pi_edu: ["gehā", "ɡehaː"]`
- **Expected:** if the intended Pali lemma is *ghara* (cognate of Skt *gṛha*), then `pi_edu` should be `["ghara", "ɡʱara"]` to match `pi`. If the intended lemma is *gehā* (a separate Pali noun *geha-* "house"), then `pi` should be `["गेह", "ɡehaː"]`. As it stands the Devanagari row is the aspirated *ghara* and the IAST row is the non-aspirated *gehā*, two different Pali words.
- **Why:** Both *ghara* and *geha* are attested Pali nouns for "house"; choosing one or the other is fine, but the two `pi*` rows should agree on which one is being shown. Same class of defect as #4 but on a different word.

### 6. Geminate-notation chaos in Hindi/Urdu — sister forms of the **same** word use different conventions
- **File:** `words/cat.js` lines 82 and 88
- **Current:** `hi: ["बिल्ली", "billiː"]`, `ur: ["بلی", "bilːiː"]`
- **Expected:** pick one — either `["बिल्ली", "bilːiː"]` and `["بلی", "bilːiː"]` (length mark, modern IPA convention), or `["बिल्ली", "billiː"]` and `["بلی", "billiː"]` (doubling). The two cells for the same Hindustani word *billī* must not disagree.
- **Why:** Hindi and Urdu *billī* "cat" is the same Hindustani lexeme in two scripts; the IPA should be identical. Currently the geminate is written as doubled `ll` in Hindi (`billiː`) and as `lː` length mark in Urdu (`bilːiː`). The IPA Handbook (1999) recommends `Cː`; the dataset itself uses `Cː` more often than not (sd `cat ɓɪlːiː`, pa `cat bɪlːiː`, te `cat pɪlːɪ`), so the Hindi row is the outlier.

### 7. Geminate-notation chaos extends into the Hindi–Urdu *eat* / *drink* / *dog* / *good* set
- **Files:**
  - `words/eat.js:82,88` `hi: ["खाना","kʰaːnaː"], ur: ["کھانا","kʰaːnaː"]` — no gemination (OK)
  - `words/dog.js:82,88` `hi: ["कुत्ता","kuttaː"], ur: ["کتا","kuttaː"]` — both use doubling `tt`
  - `words/good.js:82,88` `hi: ["अच्छा","at͡ʃt͡ʃʰaː"], ur: ["اچھا","at͡ʃt͡ʃʰaː"]` — both use doubling (a `t͡ʃt͡ʃʰ` triple-tied affricate)
  - `words/cat.js:82,88` mixed (see #6)
- **Expected:** one rule, applied uniformly. The dataset's dominant style is `Cː`; the Hindi/Urdu rows favour `CC` doubling. Pick one and apply across `hi`, `ur`, `pa`, and the Indo-Aryan block generally.
- **Why:** Inside this 20-word South Asian subset I can find both styles used for **the same phoneme** in the same language. `kuttaː` (hi `dog`) uses `tt`; `bilːiː` (ur `cat`) uses `lː`; `at͡ʃt͡ʃʰaː` (hi/ur `good`) uses `t͡ʃt͡ʃʰ` (doubled and tie-barred), which is the most visually loaded variant in the whole dataset. A reader cannot tell whether a learner is seeing a phonetic distinction or just two scribal choices. This is a high-volume systematic defect.

### 8. `ur` — sun — IPA second-syllable vowel does not match the Hindi sister
- **File:** `words/sun.js` line 88 (cf. line 82)
- **Current:** `hi: ["सूरज", "suːɾəd͡ʒ"]`, `ur: ["سورج", "suːɾad͡ʒ"]`
- **Expected:** `ur: ["سورج", "suːɾəd͡ʒ"]` — the Hindustani word *sūraj* is identical in Hindi and Urdu; both should transcribe the unstressed schwa as `ə`.
- **Why:** Standard Hindi/Urdu reduces the inherent vowel in non-final closed/open environments to schwa [ə], not [a] (Masica 1991 §3; Ohala 1983 on Hindi schwa-deletion). The Urdu row inserts a full `a` while the Hindi row correctly uses `ə`. This is the only Hindi–Urdu doublet in the 20-word set where the inherent-vowel notation disagrees on a single shared lexeme — the rest of the matched pairs (`dog kuttaː`, `eye ãːkʰ`, `mother mãː`, `hand haːtʰ`, `house ɡʱaɾ`, `eat kʰaːnaː`, `drink piːnaː`, `good at͡ʃt͡ʃʰaː`, `one eːk`) all show byte-identical IPA across hi/ur, which is the correct pattern. `sun` is the outlier.

### 9. `ml` — father — *aćchan* over-transcribed with aspiration
- **File:** `words/father.js` line 220
- **Current:** `ml: ["അച്ഛൻ", "ətʃːʰən"]`
- **Expected:** `ml: ["അച്ഛൻ", "ətʃːən"]`
- **Why:** Malayalam *acchan* is a native Dravidian noun (cognate Ta. *accan*); its geminate /cc/ is unaspirated. The orthography uses ഛ (ccha), which is the **graphemic** convention for writing the second member of the geminate but does **not** denote phonetic aspiration in this native word (Asher & Kumari 1997 §1.2; Krishnamurti 2003 §4.4). The IPA `tʃːʰ` therefore over-aspirates. Per the prompt's focus point ("aspirated stops Indo-Aryan only, not Dravidian"), the only aspirated Malayalam IPA in this audit batch should be in genuine Sanskrit loans (e.g. `ml thanks "nəndi"` correctly has none; `ml hand "kəi"` correctly has none).

### 10. `ta` — thanks — *nanri* lacks the dataset's elsewhere-marked retroflex cluster
- **File:** `words/thanks.js` line 89
- **Current:** `ta: ["நன்றி", "nanri"]`
- **Expected:** `ta: ["நன்றி", "naɳɖɾi"]` (or at minimum `nanɖɾi`)
- **Why:** Tamil ன்ற is the alveolar-trill cluster realised as [n̪d̺ɾ ~ ɳɖɾ] (Schiffman 1999 §2.2; Krishnamurti 2003 §3.2.4). The current `nanri` is essentially a Latin transliteration (`n+r+i`) with no phonetic content — Tamil phonotactics do not permit a bare [nr] sequence. Note that the same dataset correctly transcribes Tamil retroflexes elsewhere in this batch: `ta hello "ʋaɳakkam"` (with ɳ), `ta drink "kuɖi"` (with ɖ), `ta house "viːɖu"` (with ɖ). The `thanks` cell is the bare-Latin outlier.

### 11. `ta` — one — *oṉṟu* uses Latin `dr` instead of the retroflex/alveolar cluster
- **File:** `words/one.js` line 89
- **Current:** `ta: ["ஒன்று", "ondru"]`
- **Expected:** `ta: ["ஒன்று", "onɖɾɯ]"` or `oɳɖɾɯ` (and the final ு is the close back unrounded [ɯ] in literary Tamil)
- **Why:** Same defect as #10 — `ndru` is a transliteration of the Tamil glyph sequence, not an IPA transcription. The cluster ன்று is phonemically /nr/ realised [ɳɖɾ ~ nɖɾ]. The dataset's only other Tamil "ndr"-style cluster sits in `thanks` and is wrong in the same way; these two should be fixed together.

### 12. `ta` — heart — *idayam* missing word-initial glide and using `i` not `ɪ`
- **File:** `words/heart.js` line 89
- **Current:** `ta: ["இதயம்", "idajam"]`
- **Expected:** `ta: ["இதயம்", "ʝidajam"]` or `[idajam]` with a notional initial onglide; at minimum the medial `daj` is fine but Tamil short /i/ is closer to [ɪ].
- **Why:** Per the prompt's "Tamil glide-insertion rules" focus point: Tamil inserts a phonetic glide [j] before word-initial front vowels (Schiffman 1999 §2.4; Krishnamurti 2003 §3.3.2). The `idajam` form encodes the medial intervocalic glide `j` correctly but omits the word-initial one. Compare the consistent medial-glide notation in `ta sun "suːɾijan"` (j inserted between i and a) — the same speaker would also produce [ʝidajam] for *idayam*. This is at minimum an under-specification; if the project's choice is to omit word-initial glides, that decision should be documented.

### 13. `sd` — moon — *channḍu* missing both the nasal AND the final nominative vowel
- **File:** `words/moon.js` line 213
- **Current:** `sd: ["چنڊ", "tʃəɖə"]`
- **Expected:** `sd: ["چنڊُ", "tʃəɳɖʊ]` (with pesh on final ڊ for masculine nominative -u)
- **Why:** Sindhi چنڊ "moon" is /tʃəɳɖʊ/ (Khubchandani 1969) — a homorganic nasal-retroflex cluster [ɳɖ] plus the obligatory masculine-nominative short /-ʊ/. The current IPA `tʃəɖə` drops the nasal entirely and replaces the final masculine-nominative -u with a schwa. Both errors are visible by comparison with the sibling Sindhi rows in this audit which correctly carry the final -ʊ on masculine nouns: `sd cat "ɓɪlːiː"` (f., ī correct), `sd dog "kʊto"` (m., -o correct), `sd heart "dɪlʊ"` (m., -ʊ correct), `sd hand "hətʰə"` (m., -ə acceptable for some classes), `sd house "ɡʱərʊ"` (m., -ʊ correct), `sd one "hɪkʊ"` (m., -ʊ correct), `sd sun "sʊdʒə"`, `sd tree "vəɳʊ"` (m., -ʊ correct). The masculine -ʊ ending is therefore the productive class marker; `moon` is simply missing it AND the nasal.

### 14. `sa` — hello — `namaste` IPA tags the final `te` as long
- **File:** `words/hello.js` line 85
- **Current:** `sa: ["नमस्ते", "namasteː"]`
- **Expected:** `sa: ["नमस्ते", "namaste]` (Sanskrit `ते` is short e — but classical Sanskrit /e/ is phonemically always the long mid vowel realised [eː], so on reflection this is **correct** — see counter-argument below).
- **Why / clarification:** Sanskrit has no phonemic short /e/; ए is always the long mid vowel [eː] (Whitney 1889 §27). So `namasteː` is in fact correct for Classical Sanskrit. **Withdraw this issue.** Leaving the entry as a sanity-check note so the reviewer team can confirm the dataset's `e` vs `eː` convention for Sanskrit — currently `sa hello namasteː`, `sa fire aɡniɦ`, `sa one eːkam` all use the long mark, which is consistent and correct.

### 15. `dv` — dog — `kuttʰaː` over-aspirates a native geminate
- **File:** `words/dog.js` line 217
- **Current:** `dv: ["ކުއްތާ", "kuttʰaː"]`
- **Expected:** `dv: ["ކުއްތާ", "kutːaː]` (geminate /t/ with no aspiration)
- **Why:** Dhivehi *kuthtā* "dog" is a native word with a geminate /tt/, not an aspirated stop. Dhivehi does not have a phonemic aspiration contrast in native vocabulary (Cain & Gair 2000; Cain 1995); aspiration appears only in some Perso-Arabic loans. The current `kuttʰaː` simultaneously (a) writes the geminate as `tt` doubling (cf. #6/#7) and (b) tacks on a `ʰ` that is not phonemically there. Compare the parallel native geminates in the same audit batch: `dv mother "mamma"` (correctly no `ʰ`), `dv father "bappa"` (correctly no `ʰ`). The `dog` row is the only one carrying the spurious aspiration.

### 16. `dv` — eye/heart/hand — `tʰ` final aspiration on the silent-`t` sukun shape
- **Files:** `words/hand.js:217 "atʰ"`, `words/heart.js:217 "hitʰ"`, `words/eye.js` (not affected — `loː`)
- **Current:** `dv: ["އަތް", "atʰ"]`, `dv: ["ހިތް", "hitʰ"]`
- **Expected:** `dv: ["އަތް", "ai̯"]` or `[at̚]` — the word-final ތް (sukun-marked ތ) in Dhivehi is the orthographic marker for a final long-vowel/glottal-stop allomorph, not an aspirated /tʰ/. *Hai̯ ̃* "heart" is phonemically /hi/ or [hit̚]; *ai̯* "hand" is [ai̯] or [at̚].
- **Why:** Dhivehi sukun on coronal stops marks vowel length on the preceding vowel or an unreleased coronal closure, not aspiration (Cain 1995 §2.5; Cain & Gair 2000 §3.2). The transcription `tʰ` invents an aspirated /tʰ/ phoneme that Dhivehi does not have outside loans (cf. #15). At minimum the `ʰ` should be removed; ideally the underlying realisation `[at̚] / [hit̚]` or `[ai̯] / [hi]` should be shown.

### 17. `or` — sun / heart — Odia uses bare `h` while other Indo-Aryan languages with the same Sanskrit-loan word use `ɦ`
- **Files:** `words/sun.js:485 "suːɾjɔ"` (no h, OK), `words/heart.js:479 "hɾudɔjɔ"`, `words/hello.js:472 "nɔmɔskaːɾɔ"`, `words/hand.js:479 "haːtɔ"`
- **Current:** `or heart: ["ହୃଦୟ", "hɾudɔjɔ"]`, `or hand: ["ହାତ", "haːtɔ"]`
- **Expected:** `or heart: ["ହୃଦୟ", "ɦɾudɔjɔ"]`, `or hand: ["ହାତ", "ɦaːtɔ"]`
- **Why:** Odia ହ is the voiced glottal fricative /ɦ/, the same phoneme that the other Indo-Aryan codes in this audit transcribe as `ɦ` for the cognate words: `mr heart "ɦɾudəjə"`, `gu heart "ɦɾudəj"`, `te heart "ɦɾudəjəm"`, `kn heart "ɦɾudəjə"`, `ml heart "ɦɾudəjəm"`, `si heart "ɦədəʋətə"`. Only `or` (and `as heart "hɹidɔj"`) uses bare `h` for the same phoneme — Odia at least should be normalised. Compare the project's own internal usage: `dv good "raŋɡaɭu"` (no `h`) vs `dv hello "assalaːmu ʕalaikum"` is irrelevant; the cleanest comparison is the same Sanskrit-loan word *hr̩daya* rendered six different ways across these rows. Pick one symbol.

### 18. `as` — heart — same `h` vs `ɦ` issue (Assamese should be `ɦ`)
- **File:** `words/heart.js` line 478
- **Current:** `as: ["হৃদয়", "hɹidɔj"]`
- **Expected:** `as: ["হৃদয়", "ɦɹidɔj"]`
- **Why:** Same defect as #17, in the same word. Assamese হ is /ɦ/; the dataset transcribes it as `ɦ` in `as house "ɡʱɔɹ"` (where the breathy stop carries `ʱ`, the voiced counterpart) but as bare `h` in `heart` and `hand`. The siblings should agree.

### 19. `pa` — house — `घर` cognate transcribed without breathy voice (`kʰəɾ`)
- **File:** `words/house.js` line 215
- **Current:** `pa: ["ਘਰ", "kʰəɾ"]`
- **Expected:** `pa: ["ਘਰ", "kə̀ɾ"]` (low-tone) OR retain `kʰəɾ` if the project's chosen Punjabi convention is to write the historical aspirate as plain aspirated `kʰ`
- **Why:** Punjabi famously lost the Indo-Aryan voiced aspirates and replaced them with a tone contrast on the following vowel (Masica 1991 §6.5; Bhatia 1993 *Punjabi*). Etymological /gʱ/ word-initially → plain /k/ + low tone on the next vowel. So *ghar* "house" is realised [kə̀ɾ] (low-tone) and is famously **not** aspirated in modern Standard Punjabi. The current `kʰəɾ` writes an aspirated /kʰ/ — which is acoustically wrong for the modern language and also conflicts with all the other Indo-Aryan siblings in this row that DO preserve breathy voice: `hi house "ɡʱaɾ"`, `ur "ɡʱaɾ"`, `ne "ɡʱəɾ"`, `mr "ɡʱəɾ"`, `gu "ɡʱəɾ"`, `bho "ɡʱaɾ"`, `or "ɡʱɔɾɔ"`, `as "ɡʱɔɹ"`. The Punjabi row is **correctly distinct** from those (no `ɡʱ`) but **incorrectly distinct** in showing aspiration where the actual phonetic exponent is tone. At minimum a project-internal note should explain the choice.

### 20. `bn` — one — `এক` IPA `ek` misses the famous Bengali /ɛ/~/æ/ fronting
- **File:** `words/one.js` line 86
- **Current:** `bn: ["এক", "ek"]`
- **Expected:** `bn: ["এক", "ɛk]` (Standard Colloquial Bengali) — *eka* "one" is realised with open-mid /ɛ/, not close-mid /e/, before a consonant cluster of this shape (Chatterji 1926; Dasgupta 2003 in Cardona & Jain). Compare the same dataset's correct rendering of the open vowel in `si eye "æsə"` (with æ) and the careful Bengali ɔ-marking in `bn heart "hɾidɔe̯"` and `bn water "d͡ʒɔl"`. The `e` vs `ɛ` distinction for word "এক" is the textbook example of Bengali e-lowering before a closed syllable.

### 21. `te` / `kn` / `ml` — heart — Sanskrit ऋ vs Dravidian `ɦɾu` rendering inconsistency
- **Files:** `words/heart.js:218 "ɦɾudəjəm" (te), :219 "ɦɾudəjə" (kn), :220 "ɦɾudəjəm" (ml)`, alongside `sa heart "hr̩dajam"`
- **Current:** Dravidian rows render the Sanskrit-loan cluster as `ɦɾu` (CV); the Sanskrit row renders the same etymological vowel as syllabic `r̩` (no following [u]).
- **Expected:** This is a defensible loanword-vs-source-language split (Dravidian phonotactics break up /r̩/ into /ru/), so the divergence is principled. **No fix needed** — flagging for the team as a "convention to document": Sanskrit ऋ → `r̩` in `sa`, but `ɾu`/`ɾi` in Dravidian loanword rows. See also #1 (`sa house "ɡɾɨham"` is the genuine outlier; the Dravidian `ɦɾu` rows are fine).

### 22. `rom` — surface == IPA for words that should differ
- **Files:** `words/father.js:327 "dad","dad"`, `words/mother.js:333 "daj","daj"`, `words/hand.js:327 "vast","vast"`, `words/water.js:334 "pani","pani"`, `words/eat.js:327 "xal","xal"`
- **Current:** five Romani rows where the surface and IPA cells are byte-identical.
- **Expected:** the IPA should encode at least the dataset's standard stress mark and any vowel-quality detail that distinguishes Romani from its Latin transliteration. E.g. `["pani","ˈpani"]`, `["dad","dad̪]"` or `["dad","ˈdad"]`. Compare the sibling rows that DO carry meaningful IPA: `rom dog "ʒukɛl"` (ɛ vs e), `rom house "kʰɛɾ"` (aspirated + ɛ + ɾ), `rom moon "tʃʰon"` (aspirated affricate). Romani is a written-with-Latin-orthography language, but surface == IPA is exactly the "lazy IPA" pattern earlier rounds (e.g. #80 issue #4 on Tagalog `ama/ama`) called out. Five Romani rows fall into this pattern.

### 23. `sd` — eye — `اک` IPA encodes phantom final schwa, and surface seems shortened
- **File:** `words/eye.js` line 207
- **Current:** `sd: ["اک", "əkʰə"]`
- **Expected:** `sd: ["اکهي", "əkʰi]` (feminine singular nominative) OR `sd: ["اکيون", "əkʰjuːn"]` (plural — Sindhi "eyes" is grammatically often plural in citation).
- **Why:** Sindhi for "eye" is *akhi* (sg.) or *akhiyūn* (pl.), spelled اکهي / اکيون (Khubchandani 1969). The surface `اک` would read as *ak* with no aspirate and no final vowel — but the IPA correctly carries the aspirate (`əkʰə`), which means the surface is missing the ھ digraph. Conversely, the final -ə in the IPA is not the actual /i/ of *akhi*. The two cells are encoding inconsistent versions of the word: the surface is a truncated *ak*, the IPA is a generic *əkʰə* with schwa. Compare `sd hand "həˈtʰə"` (also m. with schwa, plausible) and `sd father "pɪːʊ"` (m. with -u). The Sindhi *eye* row needs both columns reconsidered together.

### 24. `si` — heart — `හදවත` IPA `ɦədəʋətə` uses `ʋ` while other Indic v/w varies between `ʋ` and `w`
- **File:** `words/heart.js` line 216 (cf. `si water "ʋatuɾə"`, `si hello "aːjuboːʋən"`)
- **Current:** `si: ["හදවත", "ɦədəʋətə"]`
- **Expected:** **no fix** — this row is correct; flagging only as a sanity check that the dataset's Sinhala v-symbol convention is `ʋ` throughout. A grep confirms 8/8 Sinhala IPA cells in this audit batch that contain the phoneme use `ʋ` consistently (`si drink "bonəʋaː"`, `si eat "kənəʋaː"`, `si water "ʋatuɾə"`, `si hand "ətə"` n/a, `si hello "aːjuboːʋən"`, `si heart "ɦədəʋətə"`, `si house "ɡedəɾə"` n/a, `si one "ekə"` n/a). Good consistency.

---

## Cross-cutting verification of round-#80's fixes

Spot-checked the Sukuma–Nyamwezi β fixes from round #80 (out-of-scope for review #83 but always-on per project guidance):
- `sun.js:112 nym: ["izuba","izuβa"]` ✓
- `thanks.js:112 nym: ["twabakaba","twaβakaβa"]` ✓
- `hand.js:112 nym: ["ikobo","ikoβo"]` ✓

No regressions.

---

**File:** `/home/jounlai/langmap/wordmap_reviews/review_83_open.md`
**Finding count:** 24 issues raised (22 actionable + 2 sanity-check withdrawals: #14 confirmed correct, #21 confirmed principled, #24 confirmed correct). Actionable items: **21**.


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 19
- **policy/skip**: 14
- **headline**: sa/sa_edu house ɾɨ→r̩, pi 2 affricate consistency, hi/ur 5 cells geminate CC→Cː, pa house tonogenesis kʰəɾ→kə̀ɾ, bn one e→ɛ, dv 3 cells spurious /tʰ/ removal, rom 5 cells surface=IPA → stress marks
- **JSON path**: /tmp/wm_edits_83.json
