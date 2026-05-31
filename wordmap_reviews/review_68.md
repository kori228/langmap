# Wordmap review #68 — Papuan / Trans-New-Guinea & Oceanic-contact specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a descriptive linguist working on the languages of New Guinea, with field and archival experience across two contact zones: (a) the Trans-New-Guinea (TNG) highland chains — Huli of the Tari basin (Engan family), Yagaria of the Eastern Highlands (Gorokan/Kainantu-Goroka), and the Ok-family language Mian of the Telefomin region — and (b) the Oceanic-into-Papuan contact belt of the Papuan Gulf and Central Province, centred on Motu (meu) and its trade pidgin/koine Hiri Motu (ho), with neighbouring Sepik (Abau, aau) for comparison. For this review my primary references are W. A. Foley, *The Papuan Languages of New Guinea* (Cambridge, 1986) for the areal phonological typology of prenasalised stops, the central vowels /ɨ ə/, and the [ɾ]/[l] question; A. Pawley's reconstructions and discussion of TNG sound correspondences (e.g. Pawley & Hammarström 2018, "The Trans New Guinea family"); for Motu/Hiri Motu the standard descriptive lexicography of Lister-Turner & Clark, *A Dictionary of the Motu Language of Papua* (2nd ed., 1954) and Dutton & Voorhoeve's Hiri Motu materials; for Mian, Fedden, *A Grammar of Mian* (Mouton, 2011); and for Huli, Rule's and Lomas' descriptions of the Huli sound system. My checks below target: surface-orthography copied verbatim into the IPA slot (the single most common defect in this scope), the Oceanic /a.u/ vowel sequence wrongly rendered with the English lax off-glide [ʊ]/[ɪ], inconsistent [r]/[ɾ] symbol choice within a single language, regular penultimate stress left unmarked in Motu, and prenasalised-stop and central-vowel transcription.

---

## Issues found

### 1. `hui` — eat — surface copied verbatim into the IPA slot
- **File:** `words/eat.js` line 952
- **Current:** `["na", "na"]`
- **Expected:** `["na", "ná"]`
- **Why:** The two array members are byte-for-byte identical, i.e. the orthography has simply been duplicated into the IPA field with no phonetic content added. Huli is a tone/pitch-accent language (Rule; Lomas 1988): the monosyllabic verb root *na* "eat" carries a lexical high pitch. At minimum the IPA must differ from the surface by marking the realised tone/accent; a bare `na` asserts nothing the orthography did not already. (Foley 1986 §4 on TNG pitch-accent; Lomas, Huli tone.)

### 2. `hui` — good — `poke` IPA identical to surface, stress unmarked
- **File:** `words/good.js` line 952
- **Current:** `["poke", "poke"]`
- **Expected:** `["poke", "ˈpoke"]`
- **Why:** Again surface = IPA with zero added information. A disyllable cannot be transcribed without indicating where the accent falls; Huli accent is lexical, and a transcription that is a mechanical copy of the spelling fails the basic purpose of the IPA column. (Foley 1986; Huli accent.)

### 3. `hui` — thanks — `wei` IPA = surface; vowel sequence unanalysed
- **File:** `words/thanks.js` line 952
- **Current:** `["wei", "wei"]`
- **Expected:** `["wei", "wei̯"]` (or `wej`)
- **Why:** Copy of orthography into IPA. The orthographic ⟨ei⟩ needs to be resolved as either a true diphthong/off-glide [ei̯]~[ej] or a disyllable [e.i]; leaving it as the bare digraph ⟨ei⟩ is an orthographic string, not a transcription. (Foley 1986 on glide/vowel-sequence transcription.)

### 4. `hui` — one — `mendene` shows no prenasalisation/accent analysis
- **File:** `words/one.js` line 958
- **Current:** `["mendene", "mendene"]`
- **Expected:** `["mendene", "ˈmendene"]` (verify whether ⟨nd⟩ = prenasalised [ⁿd])
- **Why:** Surface copied into IPA. Highlands TNG languages of this region (and Huli specifically) characteristically have prenasalised voiced stops; the medial ⟨nd⟩ of *mendene* should be checked against the prenasalised series [ⁿd] rather than a plain heterosyllabic [n.d], and a trisyllable must carry an accent mark. The mechanical copy hides both questions. (Foley 1986 §3, prenasalised stops as an areal feature.)

### 5. `hui` — house — `anda` ⟨nd⟩ not resolved as prenasalised stop
- **File:** `words/house.js` line 959
- **Current:** `["anda", "anda"]`
- **Expected:** `["anda", "anda"]` only if ⟨nd⟩ is genuinely [n.d]; otherwise `[aⁿda]`
- **Why:** Identical surface/IPA again. The recurring orthographic ⟨nd⟩ (here, in *mendene*, *danda*) and ⟨mb⟩ (*hambu*) across these Huli entries is exactly the environment where TNG prenasalised stops surface; the IPA column should commit to either [ⁿd] or [n.d] rather than reproducing the digraph. Whichever is chosen must be applied consistently to *anda / danda / mendene / hambu*. (Foley 1986 on the mb/nd/ŋg prenasalised series.)

### 6. `hui` — heart — `hambu` ⟨mb⟩ not resolved as prenasalised [ᵐb]
- **File:** `words/heart.js` line 952
- **Current:** `["hambu", "hambu"]`
- **Expected:** `["hambu", "ˈhaᵐbu"]` (if prenasalised) or `["hambu", "ˈhambu"]`
- **Why:** Surface = IPA. Same prenasalisation question as #5 for the labial series ⟨mb⟩, plus a missing accent on the disyllable. (Foley 1986.)

### 7. `meu` — love — Motu `lalokau` missing regular penultimate stress
- **File:** `words/love.js` line 846
- **Current:** `["lalokau", "lalokau"]`
- **Expected:** `["lalokau", "laloˈkau"]`
- **Why:** Motu has regular, predictable word stress on the penultimate mora/syllable (Lister-Turner & Clark 1954; standard Oceanic pattern). *lalokau* "love" is stressed *laloˈkau*. The IPA here is a verbatim copy of the orthography and marks no stress at all, which for a four-vowel Oceanic word is a real omission. (Lister-Turner & Clark, *Dictionary of the Motu Language*.)

### 8. `meu` — eat — reduplicated `aniani` left unstressed and unanalysed
- **File:** `words/eat.js` line 839
- **Current:** `["aniani", "aniani"]`
- **Expected:** `["aniani", "aniˈani"]`
- **Why:** *ani-ani* "eat" is a reduplicated Motu verb; the IPA is again an exact copy of the spelling. Penultimate stress falls on the second *a* (*aniˈani*). The transcription should mark the stress and may indicate the reduplicative boundary. (Lister-Turner & Clark 1954; Motu reduplication.)

### 9. `meu` — drink — reduplicated `inuinu` unstressed, IPA = surface
- **File:** `words/drink.js` line 839
- **Current:** `["inuinu", "inuinu"]`
- **Expected:** `["inuinu", "inuˈinu"]`
- **Why:** Same defect as #8: *inu-inu* "drink", reduplicated, copied verbatim with no stress. Expected penultimate stress *inuˈinu*. (Lister-Turner & Clark 1954.)

### 10. `meu` vs `ho` — water — same etymon transcribed with two different rhotic symbols
- **File:** `words/water.js` line 846 (`meu`) and line 339 (`ho`)
- **Current:** `meu ["ranu", "ɾanu"]` / `ho ["ranu", "ranu"]`
- **Expected:** one rhotic symbol for both; Motu has a single tap rhotic, so `ho` should read `ɾanu`
- **Why:** *ranu* "water" is the same Motu word in Motu (meu) and Hiri Motu (ho), but the IPA tap symbol is [ɾ] in one entry and plain [r] in the other. The Motu rhotic is a single alveolar tap/flap [ɾ] (Lister-Turner & Clark; Foley 1986 on the [ɾ]/[l] systems of the region). The `meu` value `ɾanu` is correct; the `ho` value `ranu` is both a surface-copy and a symbol mismatch. The two should agree. (Lister-Turner & Clark 1954.)

### 11. `meu` — house — `ruma` rhotic vs the [r]/[ɾ] used elsewhere
- **File:** `words/house.js` line 846
- **Current:** `["ruma", "ɾuma"]`
- **Expected:** `["ruma", "ˈɾuma"]`
- **Why:** The tap [ɾ] is correctly chosen here (good, and consistent with #10's recommendation), but penultimate stress is unmarked: *ˈɾuma*. Flagged so the stress convention is applied uniformly across the Motu set. (Lister-Turner & Clark 1954.)

### 12. `ho` — heart — Oceanic /a.u/ rendered with English lax [ʊ]
- **File:** `words/heart.js` line 332
- **Current:** `["kudouna", "kudoʊna"]`
- **Expected:** `["kudouna", "kudouna"]`
- **Why:** Motu/Hiri Motu has a five-vowel system /a e i o u/ with no lax [ʊ]; the orthographic ⟨ou⟩ of *kudouna* "heart/seat-of-emotion" is the vowel sequence /o.u/ (or /ou̯/), realised with cardinal close back rounded [u], **not** the English near-close [ʊ]. Importing [ʊ] mis-states the vowel inventory of an Oceanic language. (Foley 1986 on Oceanic vowel systems; Lister-Turner & Clark 1954.)

### 13. `ho` — love — `lalokau` final vowel rendered [ʊ], stress unmarked
- **File:** `words/love.js` line 339
- **Current:** `["lalokau", "lalokaʊ"]`
- **Expected:** `["lalokau", "laloˈkau"]`
- **Why:** Two problems. (a) The final orthographic ⟨u⟩ of *lalokau* is /u/ [u], not lax [ʊ] — same vowel-inventory error as #12. (b) Penultimate stress *laloˈkau* is unmarked. Note the `meu` entry of the very same word (line 846) keeps a plain `u`, so the `ho` [ʊ] is internally inconsistent as well. (Lister-Turner & Clark 1954.)

### 14. `ho` — thanks — `tanikiu` final vowel [ʊ]
- **File:** `words/thanks.js` line 332
- **Current:** `["tanikiu", "tanikiʊ"]`
- **Expected:** `["tanikiu", "taniˈkiu"]`
- **Why:** *tanikiu* "thank you" (a Hiri Motu courtesy borrowing ultimately reflecting English *thank you*) ends in the sequence /i.u/ with close [u], not lax [ʊ]; and penultimate stress is unmarked. The recurring [ʊ] across the `ho` entries (#12–#15) is a single systematic transcription error. (Dutton & Voorhoeve, Hiri Motu; Lister-Turner & Clark 1954.)

### 15. `ho` — tree — `au` rendered as English diphthong [aʊ]
- **File:** `words/tree.js` line 332
- **Current:** `["au", "aʊ"]`
- **Expected:** `["au", "au"]`
- **Why:** Motu *au* "tree/wood" is the vowel sequence /a.u/ (two cardinal vowels), realised [au] with full close back [u]; transcribing it [aʊ] imposes the English *MOUTH* diphthong on an Oceanic word. The parallel `meu` entry (line 839) correctly has `au`, so `ho` is both wrong and internally inconsistent. (Foley 1986; Lister-Turner & Clark 1954.)

### 16. `aau` — sun — Abau `ey` rendered with English [ɪ] off-glide
- **File:** `words/sun.js` lines 382 and 424
- **Current:** `['ey', 'eɪ']`
- **Expected:** `['ey', 'ej']` (or `[ei̯]`)
- **Why:** The orthographic ⟨ey⟩ uses ⟨y⟩ for the palatal glide (cf. the same convention in this language's *yapre* → `japɾɛ`, *yiha* → `jiha`, *ya* → `ja`, *yen* → `jɛn`, all transcribed with [j]). For consistency the glide in *ey* should be [j]/[i̯], i.e. [ej], not the English lax vocalic off-glide [ɪ]. The [eɪ] spelling silently switches glide conventions mid-language. (Foley 1986 on glide/vowel transcription; internal consistency with the other `aau` entries.)

### 17. `aau` — one — `rin` uses [r] while the rest of the language uses tap [ɾ]
- **File:** `words/one.js` lines 382 and 424
- **Current:** `['rin', 'rin']`
- **Expected:** `['rin', 'ɾin']`
- **Why:** Within the same language the rhotic is transcribed two ways: the tap [ɾ] in *yapre* → `japɾɛ` (good.js) but plain trill/approximant [r] here in *rin* "one" (and also a surface-copy, since the two fields are identical). A single language should use one rhotic symbol; the regional value (Foley 1986) is a tap [ɾ]. (Foley 1986 on [ɾ]/[r].)

### 18. `aau` — eat — `ra` IPA copied verbatim from surface
- **File:** `words/eat.js` lines 376 and 418
- **Current:** `['ra', 'ra']`
- **Expected:** `['ra', 'ɾa']`
- **Why:** Surface = IPA, and the rhotic-symbol issue of #17 recurs: the tap [ɾ] used elsewhere in this language is not applied here. A monosyllable *ra* "eat" should still be transcribed with the correct rhotic. (Foley 1986; internal consistency with `japɾɛ`.)

### 19. `aau` — water — `hu` IPA identical to surface
- **File:** `words/water.js` lines 383 and 425
- **Current:** `['hu', 'hu']`
- **Expected:** `['hu', 'hu']` only if the vowel is genuinely [u]; mark length/quality explicitly
- **Why:** The two fields are byte-identical, so the IPA adds nothing. For an Abau (Sepik) monosyllable the transcription should at minimum confirm the vowel quality (close back [u]) and, if relevant, any phonation/tone Abau is known to carry (Abau has been analysed as having lexical tone; Lock's Abau materials). A verbatim copy leaves this unverified. (Foley 1986 on Sepik tone; Lock, Abau grammar.)

### 20. `ygr` — Yagaria — multiple entries copy surface into the IPA slot, leaving accent unmarked
- **File:** `words/heart.js` line 960 (`nemo`); `words/water.js` line 967 (`nofa`); `words/one.js` line 966 (`kahene`); `words/sun.js` line 966 (`kena`)
- **Current:** e.g. `["nemo", "nemo"]`, `["nofa", "nofa"]`, `["kahene", "kahene"]`, `["kena", "kena"]`
- **Expected:** add accent, e.g. `["nemo", "ˈnemo"]`, `["kahene", "kaˈhene"]`
- **Why:** Across the Yagaria (ygr) set the IPA field is repeatedly a verbatim copy of the orthography. Yagaria (Gorokan, Eastern Highlands; Renck's *Yagaria Grammar* and dictionary) has word-level accent that is not recoverable from the bare spelling, so a disyllable/trisyllable transcription that merely reproduces the letters fails to encode the one thing the IPA column exists for. Each of these should carry an explicit accent mark. (Foley 1986 §4 on Gorokan accent; Renck, *A Grammar of Yagaria*.)

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
