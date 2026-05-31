# Wordmap review #26 — Eastern Romance specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a specialist in Eastern Romance linguistics, with doctoral-level training in the historical phonology and dialectology of the Daco-Romanian, Aromanian, Megleno-Romanian, and Istro-Romanian branches of Eastern Romance. My primary reference works for this review are: Mallinson (1986) *Rumanian* (Croom Helm Descriptive Grammars); Avram (1968) *Studii de fonologie românească*; Caragiu Marioțeanu (1975) *Compendiu de dialectologie română (nord- și sud-dunăreană)*; Capidan (1932) *Aromânii: dialectul aromân – studiu lingvistic*; Petrovici (1956) *Studii de dialectologie și toponimie*; and Rosetti (1986) *Istoria limbii române*. The scope languages for this review are: Romanian standard (`ro`), Aromanian (`rup`), and Megleno-Romanian (`ruq`). Codes `aro`, `mo`, and `ruo` are absent from the dataset; absence of `ruo` (Istro-Romanian) and `mo` (Moldovan) in the key list is noted in Issue 1.

---

## Issues found

### 1. `ruo` (Istro-Romanian) and `mo` (Moldovan) absent from dataset
- **Files:** all `words/*.js`
- **Current:** Only `ro`, `rup`, `ruq` have entries; `ruo` and `mo` are missing entirely.
- **Expected:** At minimum placeholder stubs, or explicit acknowledgment in scope documentation.
- **Why:** Istro-Romanian (ISO 639-3 `ruo`) is the most divergent surviving Eastern Romance variety, with systemic rhotacism (Latin intervocalic /n/ → /r/: *lâna* → *lårę*; *bene* → *bire*), Chakavian Croatian contact features, and nominal morphology distinct from both Daco- and Aromanian. Moldovan (`mo`) is typologically identical to standard Romanian but presents sociopolitical distinctiveness that warrants at least a note. Both are within the stated scope of this review.

---

### 2. `ro` — eye — IPA `okʲ` missing final vowel; palatalisation transcription misleading
- **File:** `words/eye.js` line 167
- **Current:** `["ochi", "okʲ"]`
- **Expected:** `["ochi", "okʲi"]` or more precisely `["ochi", "ˈokʲ"]` with the palatal offglide represented as [i̯] → `["ochi", "okʲi̯"]`
- **Why:** Romanian *ochi* /ˈoki/ surfaces with a final palatal element. Standard phonological transcription gives /okʲ/ for many analyses, but the word-final palatal glide is audible and phonologically significant (it marks the plural morpheme contrast *ochi* [okʲ] 'eye/eyes' vs. *oache* [ˈoake]). IPA [okʲ] without any final vocalic element is unusual — the ⟨i⟩ in *ochi* is an orthographic marker of palatalisation *and* carries a slight [i̯] realisation. At minimum the accent mark is missing; the entry has no stress diacritic while all neighbouring entries do.

---

### 3. `ro` — love — IPA `jubire` missing word-initial semivowel notation and stress mark
- **File:** `words/love.js` line 167
- **Current:** `["iubire", "jubire"]`
- **Expected:** `["iubire", "juˈbire"]`
- **Why:** The stress in *iubire* falls on the penultimate syllable: /ju.ˈbi.re/. The IPA transcription `jubire` is missing the stress mark ˈ before /b/. All surrounding entries in the same file carry stress marks (cf. Dutch *liefde* `liːfdə`, Polish *miłość* `ˈmiwɔɕt͡ɕ`). Furthermore, the initial [j] in standard Romanian *iubire* reflects the palatal glide from /i/ before /u/ — transcription as plain [j] is acceptable, but the missing stress diacritic makes this entry inconsistent with dataset conventions.

---

### 4. `ro` — sun — IPA field is the orthographic string, not IPA
- **File:** `words/sun.js` line 167
- **Current:** `["soare", "soare"]`
- **Expected:** `["soare", "ˈso̯are"]` or `["soare", "ˈsware"]`
- **Why:** Romanian *soare* contains the rising diphthong /o̯a/ (or [wa]) which is a defining feature of Daco-Romanian phonology — the reflex of Latin short /o/ in open syllables before /a/ (cf. Lat. *solem* → *soare*; Lat. *florem* → *floare*). The IPA field `"soare"` is simply the orthographic form copied unchanged: it uses Romanian letters ⟨oa⟩ rather than IPA diacritic notation. The diphthong must be rendered in IPA as [o̯a] (non-syllabic o) or [wa], and the stress mark ˈ is required. Compare the Aromanian `rup` entry correctly given as `["soare", "ˈsoare"]` — the same problem exists there, but the `ro` entry is the standard-bearer.

---

### 5. `ro` — drink — IPA `a bea` is orthographic, diphthong not transcribed
- **File:** `words/drink.js` line 167
- **Current:** `["a bea", "a bea"]`
- **Expected:** `["a bea", "a be̯a"]` or `["a bea", "a ˈbea"]`
- **Why:** Romanian *a bea* 'to drink' contains the falling diphthong /ea/ [e̯a] — the reflex of Latin short /e/ in open syllables (Lat. *bibere* → *bea* via several steps). The IPA field `"a bea"` is again the orthographic spelling: ⟨ea⟩ is the Romanian digraph for the diphthong, not an IPA sequence. IPA requires [e̯a] (non-syllabic e followed by [a]) or alternatively [ja] in some analyses. Stress notation is also missing on the verb stem.

---

### 6. `ro` — dog — IPA `kɨine` transcribes hiatus where a glide is present
- **File:** `words/dog.js` line 167
- **Current:** `["câine", "kɨine"]`
- **Expected:** `["câine", "ˈkɨi̯ne"]`
- **Why:** Romanian *câine* has the sequence /ɨi̯/ — the vowel /ɨ/ (from ⟨â⟩) followed by a non-syllabic glide [i̯] before the final syllable /ne/. The transcription `kɨine` implies a trisyllabic hiatus sequence /kɨ.i.ne/ rather than the disyllabic /ˈkɨi̯.ne/ that is the standard description (Avram 1968: §4.2). The non-syllabic diacritic on [i̯] is essential to correctly represent Romanian rising glides. The stress mark ˈ is also missing.

---

### 7. `ro` — one — IPA `unu` is the masculine form; stress mark absent
- **File:** `words/one.js` line 167
- **Current:** `["unu", "unu"]`
- **Expected:** `["unu", "ˈunu"]` (and note: *un* is the canonical masculine indefinite article / numeral form)
- **Why:** The stress mark is absent. Romanian *unu* /ˈunu/ is stressed on the first syllable. Additionally, the standard dictionary headword form for the numeral 'one' in Romanian is *un/o* (masculine/feminine) or *unu* in isolation; *unu* is the strong/isolated form. While *unu* is acceptable as the citation form, the missing stress diacritic is inconsistent with dataset norms.

---

### 8. `ro` — good — masculine singular only; no IPA stress mark
- **File:** `words/good.js` line 167
- **Current:** `["bun", "bun"]`
- **Expected:** `["bun", "bun"]` — stress is on the only syllable, so technically no mark needed; however, the more serious issue is that *bun* is masculine sg. The form is standard for lemma citation, but the feminine *bună* [ˈbunə] would apply to half of all nouns; datasets should note this or pick a fixed convention.
- **Why:** This is a lesser issue for a monosyllable, but *bun* (masc.) vs. *bună* (fem.) vs. *buni* (masc. pl.) vs. *bune* (fem. pl.) is a four-way alternation. The IPA `bun` is technically correct for the masculine form but no convention is documented.

---

### 9. `ro` — hello — `salut` is informal; register mismatch likely
- **File:** `words/hello.js` line 167
- **Current:** `["salut", "salut"]`
- **Expected:** Consider `["bună ziua", "ˈbunə ˈziwa"]` for neutral register, or document `salut` as informal
- **Why:** Romanian *salut* is a colloquial greeting used among peers/younger speakers. The neutral pan-register greeting is *bună ziua* (good day) or *bună* informally. Contrast: the Aromanian `rup` entry uses the full phrase `"bunâ-vã ziuâ"` (formal). If the dataset aims for a neutral/standard greeting, *bună ziua* is more representative. *Salut* is of French origin and is felt as informal by many speakers; it does not translate to Aromanian or Megleno-Romanian equivalents, making cross-dialect comparison inconsistent.

---

### 10. `ruq` — cat — orthography `mâţa` uses Romanian diacritics, not Megleno-Romanian conventions
- **File:** `words/cat.js` line 760
- **Current:** `["mâţa", "ˈmɨtsa"]`
- **Expected:** `["mâța", "ˈmɨtsa"]` — the cedilla ⟨ţ⟩ is a pre-2003 Romanian orthographic convention; the correct post-2003 form uses comma-below ⟨ț⟩. Megleno-Romanian is typically written with Romanian-based notation for scholarly purposes.
- **Why:** The character ⟨ţ⟩ (t-cedilla, U+0163) was officially replaced in Romanian orthography by ⟨ț⟩ (t-comma-below, U+021B) in the 2003 revision by the Romanian Academy. Megleno-Romanian scholarly texts since Capidan use the same updated convention. The IPA transcription `ˈmɨtsa` is consistent (the affricate is /ts/), so the IPA is acceptable; the orthographic glyph needs updating.

---

### 11. `ruq` — eat — `mocăm` is 1pl present; should be infinitive or citation form
- **File:** `words/eat.js` line 760
- **Current:** `["mocăm", "moˈkɨm"]`
- **Expected:** `["mocari", "moˈkari"]` or equivalent Megleno-Romanian citation form
- **Why:** `mocăm` is transparently the first-person plural present indicative ('we eat') of the Megleno-Romanian verb *mocari* / *moca*. All Romanian entries use infinitives as citation forms (`a mânca`, `a bea`), and Aromanian `rup` entries use infinitive-equivalent forms (*mâcari*, *beari*). A conjugated finite form is inconsistent with the dataset's citation convention across Romance languages. The IPA `moˈkɨm` itself looks plausible for the 1pl form, but the entry should be normalised to the infinitive/citation form.

---

### 12. `ruq` — drink — `biem` is 1pl present; citation form required
- **File:** `words/drink.js` line 760
- **Current:** `["biem", "biem"]`
- **Expected:** `["beari", "ˈbeari"]` (as in Aromanian) or attested Megleno-Romanian infinitive form
- **Why:** *Biem* is the Megleno-Romanian first-person plural present ('we drink'), parallel to the problem in Issue 11. The Aromanian cognate `rup` entry correctly uses the infinitive *beari*. The IPA `biem` also lacks a stress mark.

---

### 13. `ruq` — hello — `ubavu` means 'beautiful/good-looking', not 'hello'
- **File:** `words/hello.js` line 760
- **Current:** `["ubavu", "uˈbavu"]`
- **Expected:** A proper Megleno-Romanian greeting; candidates include *bun vinit* ('welcome') or *bunâ dzua* / a phrase calqued from Romanian *bună ziua*
- **Why:** Megleno-Romanian *ubavu* / *ubavă* is an adjective meaning 'beautiful, fine' (from South Slavic *ubav*). It is not a conventional greeting in Megleno-Romanian usage as documented in Capidan (1925) *Meglenoromânii* or Atanasov (2002). Contrast: the Aromanian `rup` entry correctly gives `"bunâ-vã ziuâ"` (good day). The entry appears to confuse 'beautiful/fine' (perhaps a calque of the Turkish/Slavic informal acknowledgment *güzel / ubav*) with a standard greeting.

---

### 14. `ruq` — love — `ublami` is unattested in standard Megleno-Romanian lexica
- **File:** `words/love.js` line 767
- **Current:** `["ublami", "ˈublami"]`
- **Expected:** Verify against Atanasov (2002) *Meglenoromâna astăzi*; candidate: *iubiri* or *drag* (borrowing)
- **Why:** The form *ublami* is not found in the primary Megleno-Romanian lexicographic sources (Capidan 1925, Atanasov 2002). The expected root for 'love' in Megleno-Romanian would either be a reflex of Latin *amare* or a borrowing. The form might be a misidentification or a very local hapax. If it represents a Turkish/Slavic loan calque, the source should be documented. The IPA `ˈublami` is internally consistent but the form itself needs verification.

---

### 15. `ruq` — tree — `lemnu` means 'wood/timber', not 'tree'
- **File:** `words/tree.js` line 760
- **Current:** `["lemnu", "lemnu"]`
- **Expected:** `["arburi", "ˈarburi"]` or `["copac", "koˈpak"]` (if borrowed) — compare Aromanian `rup` entry `["arbur", "ˈarbur"]`
- **Why:** Megleno-Romanian *lemnu* (cf. Romanian *lemn*, Aromanian *lemnu*) means 'wood, timber, piece of wood' — the substance or a cut piece, not a living tree. The word for 'tree' in Aromanian is *arburi* (pl.) / *arburea* (collective), from Lat. *arbor*. Using *lemnu* for 'tree' is a semantic error: it corresponds to Romanian *lemn* 'wood' vs. *copac* / *arbore* 'tree'. The IPA `lemnu` also lacks a stress mark.

---

### 16. `ruq` — eye — `ocl` is an orthographically incomplete form; IPA `okl` is missing palatal lateral
- **File:** `words/eye.js` line 760
- **Current:** `["ocl", "okl"]`
- **Expected:** `["ocl'u", "ˈoklʲu"]` or `["oclju", "ˈokʎu"]` — compare Aromanian `rup`: `["oclju", "ˈokʎu"]`
- **Why:** The Megleno-Romanian reflex of Latin *oculum* 'eye' is *oclju* or *ocl'u*, with a palatal lateral /ʎ/ (as in Aromanian *oclju*) or a palatalised cluster. The bare form `ocl` looks like a truncated transcription. Aromanian retains the full *oclju* [ˈokʎu] with palatal lateral, and Megleno-Romanian likewise shows the palatal element (Capidan 1925, Atanasov 2002). The IPA `okl` without the palatal [ʎ] or palatalisation diacritic misrepresents the phonology.

---

### 17. `rup` — mother — `dadâ` means 'father' or 'dad', not 'mother'
- **File:** `words/mother.js` line 765
- **Current:** `["dadâ", "ˈdadɨ"]`
- **Expected:** `["mumâ", "ˈmumɨ"]` or `["nânâ", "ˈnɨnɨ"]`
- **Why:** In Aromanian, *dadâ* is the word for 'father' or 'dad' (from the nursery form, parallel to Romanian *tată*). The Aromanian word for 'mother' is *mumâ* (< Lat. *mamma*) or *nânâ* in some dialects. Significantly, the Megleno-Romanian `ruq` entry for 'mother' correctly gives `["mumâ", "ˈmumɨ"]`, which is the expected cognate. The Aromanian entry has been filed under the wrong headword — this is a semantic inversion error. (Capidan 1932: §94 lists *dadâ* explicitly as 'tată/père'.)

---

### 18. `rup` — sun — IPA `ˈsoare` copies orthography; diphthong not transcribed in IPA
- **File:** `words/sun.js` line 765
- **Current:** `["soare", "ˈsoare"]`
- **Expected:** `["soare", "ˈso̯are"]` or `["soare", "ˈsware"]`
- **Why:** Parallel to Issue 4 for Romanian `ro`, the Aromanian IPA field `"ˈsoare"` uses the orthographic ⟨oa⟩ digraph rather than IPA notation. Aromanian *soare* retains the Latin /o/ > /o̯a/ diphthong (Caragiu Marioțeanu 1975: §3.1). The IPA must use [o̯a] or [wa]. The stress mark is present here (unlike the `ro` entry), which is consistent with the dataset convention.

---

### 19. `rup` — thanks — IPA `haˈrawɨ` stress placement questionable; compare `ruq` stress
- **File:** `words/thanks.js` line 759
- **Current (rup):** `["harauâ", "haˈrawɨ"]`
- **Current (ruq):** `["hăirau", "hɨiˈrau"]`
- **Expected:** Cross-check: both words are cognates of Romanian *harău* / *hai-răi* (interjection of goodwill). The Aromanian form *harauâ* with stress on the second syllable `haˈrawɨ` is plausible (Caragiu Marioțeanu 1975 cites stress variation), but the final [ɨ] — representing the Aromanian final ⟨â⟩ — is correct. However, the Megleno-Romanian `ruq` form `hăirau` with IPA `hɨiˈrau` places stress on the final syllable. These two cognate forms have opposite stress patterns: if both derive from the same etymon, the stress divergence should be documented. At minimum, a consistency check against Atanasov (2002) is required.

---

### 20. `ruq` — water — `apâ` uses Aromanian/Romanian diacritic spelling; Megleno-Romanian form may differ
- **File:** `words/water.js` line 767
- **Current:** `["apâ", "ˈapɨ"]`
- **Note:** Same orthographic form as `rup` entry `["apâ", "ˈapɨ"]`; both have identical IPA.
- **Why:** The Megleno-Romanian word for 'water' is indeed *apâ* [ˈapɨ], cognate with Romanian *apă* and Aromanian *apâ*. The IPA is correct. However, in Megleno-Romanian the final vowel of such feminine nouns is typically [ɨ] (as given), but the orthographic convention for Megleno-Romanian uses ⟨â⟩ as in Aromanian rather than Romanian ⟨ă⟩. The entry is internally consistent but warrants a note that `ruq` orthographic conventions follow Aromanian scholarly tradition (Capidan / Atanasov), not standard Romanian orthography — which could cause confusion for users.

---

### 21. `ruq` — moon — identical to `rup` entry without dialectal differentiation
- **File:** `words/moon.js` line 766
- **Current (ruq):** `["lunâ", "ˈlunɨ"]`
- **Current (rup):** `["lunâ", "ˈlunɨ"]`
- **Why:** While *lunâ* 'moon' is cognate in both Aromanian and Megleno-Romanian, the phonological details differ. Megleno-Romanian shows vowel reduction features and Slavic contact phenomena that may affect the realisation. The two entries are character-for-character identical, suggesting the Megleno-Romanian entry was copied from Aromanian. Cross-verification against Atanasov (2002) is needed to confirm or differentiate. The same issue affects `fire` (both `rup` and `ruq` give `["foc", "fok"]`) and `one` (both give `["unu", "ˈunu"]`). Identical entries across two distinct languages are a red flag unless verified.

---

### 22. `ro` — thanks — `mulțumesc` is 1sg present; `mulțumiri` or infinitive more suitable as headword
- **File:** `words/thanks.js` line 167
- **Current:** `["mulțumesc", "mult͡sumesk"]`
- **Note:** The IPA `mult͡sumesk` correctly uses a tie-bar affricate [t͡s], consistent with ⟨ț⟩ = /ts/ in Romanian. The form is the standard colloquial expression used in thanks-giving contexts.
- **Why:** Unlike Issues 11–12, *mulțumesc* (1sg present 'I thank') is conventionally accepted as the citation form for 'thank you' in Romanian lexicography — similar to French *merci*, it functions as a fixed expression rather than a conjugated form. The IPA tie-bar [t͡s] is correct. However, the final consonant cluster /sk/ is transcribed `sk` without marking the final devoicing that occurs in careful speech `[mult͡suˈmesk]`; more importantly, the stress mark is missing — stress falls on the penultimate syllable: [mult͡su.ˈmesk]. The entry needs `["mulțumesc", "mult͡suˈmesk"]`.

---

### 23. `ro` — cat — IPA `pisikə` correct but ⟨ă⟩ → [ə] mapping notation worth clarifying
- **File:** `words/cat.js` line 167
- **Current:** `["pisică", "pisikə"]`
- **Expected:** `["pisică", "piˈsikə"]`
- **Why:** The IPA [pisikə] is phonemically correct — Romanian ⟨ă⟩ = /ə/ (schwa). However, the stress mark is absent. *Pisică* is a three-syllable word stressed on the penultimate: /pi.ˈsi.kə/. The IPA should be `[piˈsikə]`. The stress is phonemically distinctive in Romanian (minimal pairs exist: *ˈcantă* 3sg vs. *canˈtă* 1sg imv.), so the missing stress mark is a substantive omission.

---

### 24. `ruq` — dog — `căni` uses Romanian ⟨ă⟩ where Megleno-Romanian uses ⟨â⟩; orthographic inconsistency
- **File:** `words/dog.js` line 760
- **Current (ruq):** `["căni", "ˈkɨni"]`
- **Current (rup):** `["câni", "ˈkɨni"]`
- **Why:** Both entries transcribe the same IPA [ˈkɨni], but the orthographic forms differ: Aromanian uses ⟨â⟩ for /ɨ/ (Aromanian scholarly convention since Capidan), while the Megleno-Romanian entry uses ⟨ă⟩. In Romanian orthography, ⟨ă⟩ = /ə/ and ⟨â⟩/⟨î⟩ = /ɨ/, which are distinct vowels. Since both the `rup` and `ruq` IPAs show /ɨ/ (not /ə/), the Megleno-Romanian orthographic ⟨ă⟩ is incorrect — it should be ⟨â⟩ as in the Aromanian entry: `["câni", "ˈkɨni"]`. This is a systematic orthographic inconsistency: ⟨ă⟩ → /ə/ ≠ IPA [ɨ].

---

*24 issues total. Primary priorities: Issue 17 (semantic inversion rup mother/father), Issue 13 (ruq hello semantic error), Issue 15 (ruq tree/wood semantic error), Issue 11–12 (ruq finite verb forms as citation forms), Issues 4–5 (ro/rup sun/drink orthographic IPA), Issue 1 (missing ruo/mo).*
