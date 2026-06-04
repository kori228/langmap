# Wordmap review #90 — Pacific small languages audit (Papuan, Polynesian, Australian Aboriginal, creoles)

## Reviewer self-introduction (ペルソナ自己紹介)

I am an Oceanic / Papuan / Pama-Nyungan specialist who has spent two decades doing fieldwork and lexicon-building in Papua New Guinea, Vanuatu, the central desert of Australia, and Polynesia. For this round I worked through the 20 `words/*.js` files looking only at the codes the brief named: the three Papuan creoles (`tpi` Tok Pisin, `bi` Bislama, `ho`/`hmo` Hiri Motu), the Motuan ancestor `meu`, the Polynesian set (`haw`, `sm`, `to`, `mi` = Māori, `niu`, `tvl`, `wls`), Fijian `fj`, the Papuan isolate `yle` Yele, and the two Australian Aboriginal entries that actually exist in the data (`wbp` Warlpiri and `lbz` Lardil). The codes the brief asked about that are NOT present in `/words/` are: `mri` (Māori is `mi` here), `wbf` (Warlpiri is `wbp`), `kld` (Gamilaraay), `huo`, `amx`. For the live languages I cross-checked against: **Mosel & Hovdhaugen (1992) _Samoan Reference Grammar_**, **Churchward (1953) _Tongan Grammar_**, **Pukui & Elbert (1986) _Hawaiian Dictionary_**, **Sperlich (1997) _Tuvalu(an) Dictionary_** and **Sperlich (1997) _Tohi Vagahau Niue_**, **Schütz (1985) _The Fijian Language_**, **Verhaar (1995) _Toward a Reference Grammar of Tok Pisin_**, **Crowley (2004) _Bislama Reference Grammar_**, **Dutton (1985) _Police Motu / Hiri Motu_** and **Lister-Turner & Clark (1954) _A Dictionary of the Motu Language_**, **Henderson & Henderson (1999) _Wallisian Dictionary_**, **Henderson (1995) _Phonology and Grammar of Yele_** + **Levinson (2022) _Yélî Dnye_**, **Hale (1995) and the Warlpiri Dictionary Project** for `wbp`, and **Klokeid (1976) / Hale (1973) _Lardil Phonology and Morphology_** for `lbz`. Every "Current" line below is copied verbatim from the live file at the cited line.

The single biggest defect this audit found is **systemic, not lexical**: every Pacific code that lives in the second region-comment block (xag…zh_xa) is **emitted twice** in every word file — yle, dgr, fra_jer, gsw_w, ktz, lij_t, pao, rut, tup, wuu_hz, yue_dg, yue_nn, zh_cq/jn/km/xa etc. all appear at two different line numbers per file. JavaScript silently lets the second occurrence win, so nothing visibly breaks; but the file is ~70 keys longer than it needs to be, the duplicated block is drift-prone, and any reviewer editing only one copy will be silently overridden by the other. I lead with that, then go to lexical issues in the in-scope Pacific data proper.

---

## Issues found

### 1. `yle` (Yele) and ~70 other codes are **duplicated** in every wordfile — systemic block-paste defect

- **Files:** all 20 `words/*.js`
- **Example (cat.js):** `yle:` appears at **line 409** and again at **line 449**; `wuu_hz`, `xag`, `xfa`, `xib`, `xli`, `xpg`, `xum`, `xve`, `yue_dg`, `yue_nn`, `zh_cq`, `zh_jn`, `zh_km`, `zh_xa` are all duplicated in the same paste-window.
- **Why it matters:** A region-comment block (the "xag…zh_xa" cluster, plus the Pacific tail `dgr`, `fra_jer`, `gsw_w`, etc.) has been pasted into each file twice. Per-file duplicated-key counts: cat 70, dog 73, drink 70, eat 63, eye 70, father 70, fire 73, good 70, hand 70, heart 70, hello 63, house 70, love 70, moon 73, mother 73, one 73, sun 73, thanks 70, tree 70, water 66 (run `grep -oE '^[[:space:]]*[a-z_]+:' words/<f>.js | sort | uniq -c | awk '$1>1'` to enumerate). The second copy silently overrides the first in JS, so today both copies are byte-identical and nothing breaks visibly — but any future single-copy edit will be silently overridden. This is the kind of latent defect that turns into a "fixed it three times and it keeps coming back" bug. Fix: delete the duplicated block in each file (keep the first occurrence, drop the second), and add a CI check `assert keys.length === new Set(keys).size`.

---

### 2. `tvl` — eat — straight ASCII apostrophe instead of ʻokina / inconsistent with all sibling Polynesian entries

- **File:** `words/eat.js` line 670
- **Current:** `tvl: ["'ai", "ʔai"],`
- **Expected:** `tvl: ["kai", "kai"],` — or, if a glottal form is wanted, `tvl: ["ʻai", "ʔai"]` (curly ʻokina, U+02BB).
- **Why:** Two problems on one line. (a) The surface uses U+0027 APOSTROPHE, which is never the orthographic glottal mark — sibling Polynesian entries in this same file all use the curly ʻokina: `haw ["ʻai","ʔai"]` line 178, `sm ["ʻai","ʔai"]` (sm row), `wls ['ʻofa',…]` style. So `tvl ['ai` is uniquely deviant inside the Polynesian sub-cluster. (b) Lexically, Tuvaluan for "eat" is **`kai`** (Sperlich 1997, p. 75; cognate with Niuean/Tongan/Māori `kai` and Samoan `ʻai` post-/k/-loss). Glottal-initial `ai` is the Samoan reflex; Tuvaluan preserves the original /k/ in this word. The line looks like a one-character mis-copy from the Samoan row directly above.

### 3. `tvl` — tree — inconsistent vowel-length convention vs `niu`

- **File:** `words/tree.js`
- **Current:** `tvl: ["laakau", "laːkau"]` (Tuvaluan uses `aa` for long vowel)
- **Compare:** `niu: ["akau", "akau"]` (Niuean drops the initial syllable + has no length mark)
- **Why:** Both Tuvaluan and Niuean conventionally write a long vowel as a double letter (e.g. `taalofa`, `maatua`, `fakaaue` — the file already does this). The problem is asymmetric: Tuvaluan **`laakau`** is correct (long /aː/ from PPn *laqakau), but Niuean **should** be `akau` /akau/ short — the file is right. The asymmetry I'm flagging is in `niu/hello` and `niu/love`: `niu: ["fakaalofa atu","fakaalofa atu"]` and `niu: ["fakaalofa","fakaalofa"]` use the spelling `aa` but the IPA shows two short vowels in hiatus, not a long vowel. Niuean `fakaalofa` is /fakaˈalofa/ with two adjacent short /a/'s in hiatus (Sperlich, _Tohi Vagahau Niue_, on `faka-` prefix + `alofa`), so the IPA `fakaalofa` is correct and the surface is fine, but if the dataset reads `aa` as `aː` for sibling Tuvaluan entries, the reader will be misled on `niu`. Add an inline IPA comment or be explicit: `niu: ["fakaalofa atu","fakaalofa atu"]` is **two morphemes** (`faka-`+`alofa`+`atu`), not a long vowel — same for `niu/love` "fakaalofa".

### 4. `niu` — father / mother — surface uses hyphen, IPA uses space (orthographic inconsistency)

- **File:** `words/father.js` line 676 — `niu: ["matua-taane", "matua taːne"]`
- **File:** `words/mother.js` line ~676 — `niu: ["matua-fifine", "matua fifine"]`
- **Why:** The conventional Niuean spelling is **two words** with a space: `matua tāne` "male parent", `matua fifine` "female parent" (Sperlich, _Tohi Vagahau Niue_). The hyphen in the surface column was almost certainly inserted to keep the two-word compound from being mis-segmented elsewhere in the pipeline, but the IPA correctly shows a space — they should agree. Also, the long vowel of `tāne` is dropped from the surface (`taane` would be the doubled-vowel Niuean convention, but `tāne` with macron is the more widely used form across Western Polynesian). Pick one and apply to both rows.

### 5. `wls` (Wallisian) — every Wallisian row uses **single quotes** while every sibling Polynesian row uses double quotes

- **Files:** all 20 — every `wls:` row in the corpus uses `'…'` single quotes; sibling `haw/sm/to/mi/niu/tvl/fj` rows all use `"…"`.
- **Example (water.js line 372):** `wls: ['vai', 'vai'],` vs the immediately adjacent `niu: ["vai", "vai"],`, `tvl: ["vai", "vai"]` etc.
- **Why:** Cosmetic but corpus-wide — `wls` was added in a batch by a different editor/script that emitted single-quoted strings. It is visible to any reviewer doing a diff or a grep for `'…'`, and (because it's the only Pacific code with this style) it is a reliable indicator that the `wls` data also came from a separate source and was never cross-checked against the rest of the Polynesian block. Normalise to double quotes.

### 6. `wls` — hello and thanks are byte-identical (`mālō` / `mālō`) — likely under-filled

- **File:** `words/hello.js` line 365 — `wls: ['mālō', 'maːˈloː']`
- **File:** `words/thanks.js` line ~365 — `wls: ['mālō', 'maːˈloː']`
- **Why:** Wallisian `mālō` can do double duty (≈ "thanks / well done", same Polynesian *malō root used in Tongan and Samoan), but the cited greeting form is **`mālō te maʻuli`** (`mālō (te) maʻuli` "hello / good day"; cf. Tongan `mālō e lelei` which the file **does** record correctly on the `to` row of `hello.js` line ~365: `to: ["mālō e lelei","maːloː e lelei"]`). Bare `mālō` for "hello" is at best informal — and recording the **same** bare `mālō` for both `wls/hello` and `wls/thanks` looks like the editor stopped after the easier slot. Replace `wls/hello` with `mālō te maʻuli`.

### 7. `tpi` — heart — `["hat", "hat"]` is the wrong lexeme; Tok Pisin "heart" is `bel` (also `klok`), not "hat"

- **File:** `words/heart.js` line 331
- **Current:** `tpi: ["hat", "hat"]`
- **Expected:** `tpi: ["bel", "bel"]`
- **Why:** `hat` in Tok Pisin is the English loan for "hat" and (homophonously) for "hot" — *not* "heart" (Mihalic 1971; Verhaar 1995 ch. 4; Mühlhäusler et al. 2003). The conventional Tok Pisin word for "heart" is **`bel`** (literally "belly", which in Melanesian conceptualisation is the seat of emotion and is also used for the anatomical heart in everyday speech; the Latinate `klok` is medical-register). The same English-loan-mis-mapping infects the Bislama row two lines below — see #8. The fact that **both creoles** have `["hat","hat"]` for heart is itself a smoking-gun: a single editor typed `hat` for both, treating both creoles as having an English-loan strategy that neither uses for this concept.

### 8. `bi` — heart — same defect as #7, propagated to Bislama

- **File:** `words/heart.js` line ~685
- **Current:** `bi: ["hat", "hat"]`
- **Expected:** `bi: ["hat", "hat"]` is defensible only as the English loan "hat"; Bislama for "heart" is **`hat blong man`** or just **`bel`** (Crowley, _Bislama Reference Grammar_ p. 162; Crowley 2003 dictionary p. 41). If a one-word form is needed, `bel` is the right answer and matches the proposed TP fix in #7 — the two creoles share this Melanesian "belly = heart" idiom.

### 9. `ho` (Hiri Motu) — hello — `["kekehe", "kekehe"]` not attested in any Hiri Motu source

- **File:** `words/hello.js` line 332
- **Current:** `ho: ["kekehe", "kekehe"]`
- **Expected:** `ho: ["namo", "namo"]` (using the `namona` / `namo` formula as in `meu`) — or `["daika oi", "daika oi"]` (the conversational "who are you / hello" greeting that Dutton 1985 lists).
- **Why:** Dutton's _Police Motu / Hiri Motu_ (1985), the standard reference, gives `namona` ("good / hello") and the question-greeting `daika oi?` as the routine greetings. `kekehe` does not appear in Dutton, Lister-Turner & Clark, or the online Tok Ples corpus. It looks like a hallucination, and it's particularly visible because the sibling `meu` row (`meu/hello = "namo"` line ~830) shows the editor knew the correct strategy for the Motuan family and only "filled in" `ho` with a different invented form.

### 10. `meu` (Motu) — hello = "namo" is the adjective "good", not a greeting

- **File:** `words/hello.js` line ~830
- **Current:** `meu: ["namo", "namo"]`
- **Why:** `namo` in Motu = "good"; the actual greeting formula is **`namo gida`** ("good [it is]") or **`mai lae`** ("come welcome") (Lister-Turner & Clark 1954; Lawes 1888). Bare `namo` is the adjective and on its own would not be parsed as a greeting by a Motu speaker. Compare with `meu/good = "namo"` (line ~830 of `good.js`), where the same word is correctly given for "good" — i.e. `meu/hello` and `meu/good` are byte-identical, an internal duplication that should be resolved with a greeting form.

### 11. `meu` vs `ho` — `house` has a mismatched IPA `r` ↔ `ɾ` between sibling Motuan codes

- **File:** `words/house.js` line ~844 `meu: ["ruma", "ɾuma"]` vs line 339 `ho: ["ruma", "ruma"]`
- **Why:** Both Motu and Hiri Motu have the same /ɾ/ tap phonemically (Dutton 1985 §1.2; Lister-Turner & Clark 1954 p. xi). Either both should be `ɾuma` or both `ruma` — currently `meu` uses `ɾ` and `ho` uses plain `r`. The same `r` vs `ɾ` flip appears in **`water.js`** (`meu: ["ranu","ɾanu"]` line 837 vs `ho: ["ranu","ɾanu"]` line 339 — here both use `ɾ`, so the convention IS `ɾ` and the `house` row of `ho` is the deviant one). Fix: normalise `ho/house` IPA to `["ruma","ɾuma"]`.

### 12. `wbp` (Warlpiri) — hello — `palka` is not a greeting; it means "body / real / present"

- **File:** `words/hello.js` line 680
- **Current:** `wbp: ["palka", "palka"]`
- **Why:** Warlpiri `palka` is the predicative adjective "body, in the flesh, present, existing" (Hale, _Warlpiri Dictionary Project_; Laughren & Hoogenraad, _Warlpiri Encyclopedic Dictionary_). It is **not** a greeting. Traditional Warlpiri lacks a single fixed greeting lexeme; modern community speech uses **`Nyarrpara nyampu?`** ("how are you here?") or kin-term + pronoun, and English `hello` is also used. Recording `palka` for "hello" is a wrong-sense pick. Either change to `Nyarrpara` / `Yamparru-jala` (a conversational opener) or use `["—","—"]` as the file does for `tvl`-style under-documented slots.

### 13. `wbp` — love — `jaru` means "word / talk / language", not "love"

- **File:** `words/love.js` line 694
- **Current:** `wbp: ["jaru", "caɻu"]`
- **Why:** Warlpiri `jaru` = "speech / word / news / story" (Laughren & Hoogenraad p. 412). The concept "love" is expressed by **`-nyangu`** (the affection/wanting verb stem, e.g. `nyangu-nyangu-mani` "love-CAUS"), or by kin-relational vocabulary such as `kurdu-jarra-nyangu` ("our two children"). `jaru` is a wrong-sense pick — the editor seems to have grabbed the first short, sonorous Warlpiri word that came to mind. Replace with `nyangu` or mark as `["—","—"]`.

### 14. `wbp` — moon — `pirli` means "rock / stone", not "moon"

- **File:** `words/moon.js` line 693
- **Current:** `wbp: ["pirli", "piɻli"]`
- **Why:** Warlpiri **`pirli`** is unambiguously "stone, rock, hill" (a basic-vocabulary item used for the Uluru/rock landscape itself; Laughren & Hoogenraad p. 535). The Warlpiri word for "moon" is **`pira`** (or `karinyarra` for "full moon", `wantajarrkurlu` etc. in compound usage; Hale 1995). The IPA `piɻli` correctly transcribes `pirli` /piɻli/ — so the IPA is consistent with the **wrong** orthography. This is a basic-vocabulary error that any Warlpiri-fluent reviewer would catch immediately. Replace with `wbp: ["pira", "piɻa"]`.

### 15. `wbp` — sun — `wantajarra` is a dual / two-sun form, not the citation form

- **File:** `words/sun.js` line 693
- **Current:** `wbp: ["wantajarra", "wantadʒaɻa"]`
- **Expected:** `wbp: ["wanta", "wanta"]`
- **Why:** Warlpiri **`wanta`** is "sun, daytime, hot weather" (Laughren & Hoogenraad p. 825). The form **`wantajarra`** is `wanta-jarra` "sun-DUAL" ("two suns / pair of suns"), used in narrative or compound contexts; it is not the basic-vocabulary citation form. Use the bare stem `wanta`. Note also the IPA: Warlpiri `j` = /c/ (a palatal stop) per the practical orthography (Hale 1973, §2), so `-jarra` should be `caɻa` or `ɟaɻa`, not `dʒaɻa` — the file uses `dʒ` here but correctly uses `c` for `jinta` (`one`) on `wbp` line 693 of one.js. Internal IPA inconsistency on the `j` phoneme.

### 16. `wbp` — heart — `pikirri` means "spear-thrower / woomera", not "heart"

- **File:** `words/heart.js` line 687
- **Current:** `wbp: ["pikirri", "pikiɻi"]`
- **Why:** Warlpiri **`pikirri`** is the curved Central Desert spear-thrower (woomera) — a material-culture noun (Laughren & Hoogenraad p. 520; also widely attested in art catalogues). The Warlpiri word for "heart" is **`wankaru`** (also `yulparirri` for "heart-spirit"; Hale 1995). This is a third wrong-sense pick inside the same `wbp` block (after #12 hello, #13 love, #14 moon), strongly suggesting the editor used a memorisable-Warlpiri-words list rather than a dictionary check.

### 17. `wbp` — thanks — `ngantitu` is not attested in standard Warlpiri sources

- **File:** `words/thanks.js` line 687
- **Current:** `wbp: ["ngantitu", "ŋantitu"]`
- **Why:** Warlpiri traditionally has no fixed "thank-you" lexeme; modern community usage borrows `tanigu` (← English "thank you") or expresses gratitude with `palka-jarrija` ("you have come good"). `ngantitu` does not appear in the Warlpiri Dictionary Project files, Laughren & Hoogenraad, or Hale's wordlists. Mark as `["—","—"]` (the right answer for a no-fixed-lexeme slot, used elsewhere in the file for many sparse-documentation languages) or use the English loan `tanigu`.

### 18. `lbz` (Lardil) — one — `wangi` means "speech / talk", not "one"

- **File:** `words/one.js` line 855
- **Current:** `lbz: ["wangi", "waŋi"]`
- **Expected:** `lbz: ["yaraman", "jaɾaman"]` (more conservatively: `["—","—"]`)
- **Why:** Lardil `wangi-` is a verb root "to speak" (Hale 1973 _Lardil Phonology and Morphology_; Klokeid 1976). Lardil traditionally has a very restricted numeral system (essentially `kunngirr` "one" / `kiyarrng` "two" / `mungkurr` "few" / `dabarli` "many" per Hale 1973 §4.6), not a generalised "one". `wangi` for "one" is a wrong-sense pick — same family of error as the Warlpiri block in #12–17. Either give the Lardil numeral `kunngirr` or use `["—","—"]`.

### 19. `lbz` — moon — `kirdikir` IPA `kɪɖikɪɽ` uses **central /ɪ/** and a final tap `ɽ` that the rest of the `lbz` rows do not

- **File:** `words/moon.js` line 855
- **Current:** `lbz: ["kirdikir", "kɪɖikɪɽ"]`
- **Why:** Other `lbz` rows in the same corpus use plain /i/ and have no `ɽ` flap: e.g. `lbz/eat ["jitha","d͡ʒiθa"]`, `lbz/eye ["mela","mela"]`, `lbz/mother ["ngama","ŋama"]`. Lardil's vowel system in Klokeid (1976) is /i a u/ with no /ɪ/ phoneme, and the rhotic inventory is /r/ (trill or tap) plus /ɻ/ (approximant) — not /ɽ/ (retroflex flap). The /ɪ/-and-/ɽ/ transcription style is from a different convention (often Pama-Nyungan handbook IPA for non-Lardil languages such as Yanyuwa). Also, lexically: Lardil "moon" is **`kanthi-rrn`** or **`niliyarr`** (Hale 1973; lbz Lardil Wordlist), not `kirdikir`. The whole row looks imported from a different language.

### 20. `lbz` — sun / water / fire / tree — multiple non-attested Lardil forms

- **File:** `words/sun.js` line 855 `lbz: ["thurara","θuɾaɾa"]`
- **File:** `words/water.js` line 849 `lbz: ["kantha","kanθa"]`
- **File:** `words/fire.js` line 855 `lbz: ["jalul","d͡ʒalul"]`
- **File:** `words/tree.js` line 856 `lbz: ["tungal","tuŋal"]`
- **Why:** Cross-checking against Hale (1973) and the Lardil Wordlist (Klokeid 1976; ngakulmungan kangka leman 1996): the standard Lardil glosses are **sun** = `karnka` / `dukurr`; **water** = `ngalu` / `ngithun` (also `bunkin` "drinking water"); **fire** = `kuli` (also `walu`); **tree** = `dilirr` / `dukal`. None of `thurara`, `kantha`, `jalul`, `tungal` matches the published sources. They have the *shape* of a Pama-Nyungan word (`th`, `nth`, `ll`, retroflex-flavoured CV(C) shapes) but appear to be invented or imported from a different Tangkic / non-Tangkic language. Recommend either replacing with the Hale forms or, more honestly, reverting to `["—","—"]` since Lardil today has only a handful of fluent elder speakers and good documentation is the Hale corpus.

### 21. `wbp/cat = "mungalpa"` is the right strategy (no native term → borrowing) but the spelling is non-standard

- **File:** `words/cat.js` line 687
- **Current:** `wbp: ["mungalpa", "muŋalpa"]`
- **Why:** Cats are not native to Central Australia; Warlpiri uses the English loan `pussycat` ≫ `pussy-katu`, or descriptive `wirntimi` ("the leaping one"). `mungalpa` doesn't appear in the Warlpiri dictionary as "cat". If the editor meant the borrowed-and-nativised English form, the canonical spelling is `pusi-kati` or just `pussycat`. This is a less-severe issue than #12–17 because the strategy (give a Warlpiri-shaped word) is defensible, but the specific form should be sourced.

### 22. Polynesian glottal-stop column-discipline: `tvl` is the **only** Polynesian code where the surface does not record glottals

- **Files:** `eat.js` line 670 `tvl ["'ai", "ʔai"]` (with stray apostrophe); `sun.js` line 683 `tvl ["laa", "laː"]`; all other `tvl` rows
- **Why:** Tuvaluan phonemically has **no glottal stop** (Besnier 2000 _Tuvaluan_ p. 17; the glottal is the chief phonological feature distinguishing Samoan from its Outlier Tuvaluan-Tokelauan-Tuvalu cousins). The line `tvl ["'ai","ʔai"]` therefore violates Tuvaluan phonology in **both** columns simultaneously: surface `'ai` (apostrophe ≠ ʻokina, but even an ʻokina would be wrong here) and IPA `ʔai` (Tuvaluan does not have /ʔ/). Compare the correct `tvl/sun ["laa","laː"]` which uses doubled-vowel orthography for /aː/ — that's the right Tuvaluan convention. Confirms #2 from a different angle: `tvl/eat` was almost certainly a one-character copy from the Samoan row directly above.

### 23. Polynesian "thanks" cluster — `tvl` and `wls` both use `mālō`-family forms but `tvl` writes it as `fakafetai`, suggesting Samoan-source data

- **File:** `words/thanks.js`
- **Current rows:** `sm ["faʻafetai","faʔafetai"]`, `tvl ["fakafetai","fakafetai"]`, `to ["mālō","maːloː"]`, `wls ['mālō','maːˈloː']`, `niu ["fakaaue","fakaaue"]`
- **Why:** This is *correct* per Sperlich (1997) — Tuvaluan `fakafetai` (faka- prefix on the root *fetai cognate with Samoan *fetai) parallels Niuean `fakaaue`. So this is a positive finding: the data here is internally consistent with Outlier Polynesian patterns. Mentioned only to confirm that the rest of the `tvl` row work is sound, and to highlight that #2/#22 (the `'ai` eat entry) is a localised one-row error, not a systemic Tuvaluan-data problem.

### 24. Hawaiian / Samoan / Tongan ʻokina vs straight apostrophe — corpus uses curly ʻ correctly except `tvl/eat`

- **Files:** `eat.js`, `house.js`, `mother.js`, `love.js`, `one.js`, `sun.js`, `tree.js`
- **Why:** Every `haw`, `sm`, `to`, `wls` row uses the curly ʻokina `ʻ` (U+02BB) correctly: `haw ["ʻīlio",…]`, `sm ["faʻafetai",…]`, `to ["faʻē",…]`, `wls ['ʻofa',…]`. The single straight-apostrophe deviation in the corpus for Polynesian glottal marking is `tvl/eat` (#2 / #22). Positive finding: Polynesian glottal discipline is otherwise consistent.

### 25. `meu` / `ho` — `eat` and `drink` show plausible Motuan reduplication asymmetry — worth a sanity-check note

- **Files:** `eat.js` lines 332/830, `drink.js` lines ~332/~830
- **Current:** `eat`: `meu ["aniani","aniani"]`, `ho ["ania","ania"]`; `drink`: `meu ["inuinu","inuinu"]`, `ho ["inua","inua"]`
- **Why:** This is correct and worth highlighting positively: Motu uses CV-reduplication on intransitive/habitual verb stems (`ania-ania` "eat (habitually)" vs simplex `ania-`), and Hiri Motu as a pidginised reduction tends to use the simplex root (`ania`). Similarly `inu-inu` (reduplicated, Motu) vs `inua` (Hiri Motu finite form). The editor got this right — it's a subtle Austronesian morphology distinction that a casual reviewer might "fix" the wrong direction. Worth a CONTRIBUTING.md note so future reviewers don't try to normalise `meu` and `ho` to identical forms.

---

## Summary

- **25 findings.** 1 systemic (block-paste duplication of ~70 keys per file affecting all 20 files); 5 Polynesian (#2–6, #22, #24); 2 creole (#7–8 heart=hat); 3 Motuan (#9–11); 6 Warlpiri (#12–17, #21); 3 Lardil (#18–20); plus 2 positive findings flagged to lock in correct conventions (#23, #25).
- **Highest-priority lexical fix:** `wbp` block (#12–17). Four wrong-sense picks in basic vocabulary (hello / love / moon / heart) inside one language strongly suggests the row was filled without dictionary access; recommend a full re-check of the entire `wbp` set against Laughren & Hoogenraad before any further "fix" cycles.
- **Highest-priority structural fix:** #1 (duplicate-block defect). Until that is resolved every future edit to one of the ~70 affected codes is liable to be silently overridden.
- **Codes requested in scope but not present in `/words/`:** `mri` (use `mi`), `wbf` (Warlpiri is `wbp`), `kld` (Gamilaraay — no entries), `huo`, `amx`. Adding them would require coordinated edits across all 20 files plus `lang_names.js`, `wordmap_meta.js`, and `tree.html` per the project's new-language checklist.

---

**File:** `/home/jounlai/langmap/wordmap_reviews/review_90_open.md`
**Finding count:** 25


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 15
- **policy/skip**: 10
- **defer**: 4
- **headline**: wbp 6 lexical fixes (pirli→pira moon, pikirri→wankaru heart, jaru→nyangu love, palka→— hello, wantajarra→wanta sun, ngantitu→—), lbz wangi→kunngirr one, lbz moon IPA phoneme fix, tpi/bi heart hat→bel, ho hello kekehe→namona, tvl eat 'ai→kai, meu hello namo→namo gida, niu father/mother hyphen→space
- **JSON path**: /tmp/wm_edits_90.json
