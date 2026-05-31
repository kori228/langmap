# Wordmap review #77 — Lexical-semantics, register & nativeness sharp auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a lexical-semanticist by training, with a career spent on the denotation–register interface: whether a given surface form actually *names* the target concept in the neutral, citation register a comparative wordlist needs, rather than a near-synonym, a borrowed prestige term, an inflected/connective form, or the wrong part of speech. For this project I work the way the `definition{}` blocks ask me to: I read each concept's `en`/`ja` definition first (it encodes the intended sense — e.g. *heart* = "the basic emotional/cognitive heart/mind term", *love* = "noun or verb citation form … not a greeting", *good* = "attributive citation form preferred … avoid the adverb"), then I diff each cell against its own language family inside the same file, because the sibling rows are the project's own internal evidence of what the citation norm is. My standing references are **Buck, _A Dictionary of Selected Synonyms in the Principal Indo-European Languages_ (1949)** for the IE concept fields (heart 4.81, love 16.27, good 16.71); **Liddell–Scott–Jones, _A Greek-English Lexicon_ (9th ed.)** for the Ancient-Greek senses; **Steingass, _A Comprehensive Persian-English Dictionary_ (1892)** and **Hayyim's Persian-English** for the Persian native/borrowed split; the **Jersey/Guernsey Norman dictionaries (Le Maistre 1966; De Garis 1967)** and **Geriadur/ALPI Romance atlases** for the Gallo-Romance varieties; and for the Japanese dialect adjectival morphology the standard 国語/方言 grammars. I verified every "Current" value below verbatim against the live `words/*.js` files at the cited line on the review date; I modified no data file. My headline cluster is a nativeness defect in the Persian heart, plus a recurring part-of-speech (verb-for-noun) slip in the Romance/Norman *love* cells.

---

## Issues found

### 1. `fa` — heart — Arabic loan قلب where the native دل is the basic emotional-heart word
- **File:** `words/heart.js` line 106
- **Current:** `fa: ["قلب", "qælb"]`
- **Expected:** `fa: ["دل", "del"]`
- **Why:** The `heart` definition explicitly wants "the basic emotional/cognitive heart/mind term", anatomical/Arabic forms only "where it is the normal basic word". Persian قلب *qalb* is an Arabic loan and is the formal/anatomical word; the native, basic, emotion-seat lexeme is **دل *del*** (Buck 4.81; Steingass s.v. دل). The whole Iranian family in this very file already uses *del/dil*: `tg` дил (L221), `ku` dil (L222), `ckb` دڵ (L223), `mzn` دل (L774), `glk` دل (L775), `lrc` دل (L776), **`fa_clas` دل (L905) and `haz` دل (L1001)** — i.e. Classical Persian and the Hazaragi dialect of Persian both use دل, leaving only Modern Standard Persian with the loan. This is the textbook "borrowed term where a native one is standard" defect.

---

### 2. `prs` — heart — Dari repeats the same قلب-for-دل nativeness slip
- **File:** `words/heart.js` line 108
- **Current:** `prs: ["قلب", "qalb"]`
- **Expected:** `prs: ["دل", "dil"]`
- **Why:** Dari is Afghan Persian; the same argument as #1 applies and the same-family evidence is even closer — `haz` (Hazaragi, an Afghanistan Persian variety) at L1001 already has دل *dil*. Note that fa/prs use the *native* Persian word everywhere else they need a body part — `eye.js` L106/108 چشم, `hand.js` L106/108 دست — so the Arabic loan surfacing only in *heart* is an internal inconsistency, not a deliberate policy.

---

### 3. `ext` — love — Romance verb infinitive "queré" where every sibling uses the noun *amor*
- **File:** `words/love.js` line 763
- **Current:** `ext: ["queré", "keˈɾe"]`
- **Why:** `queré` is the Extremaduran infinitive *to love* (= Castilian *querer*), a verb. The `love` definition allows "noun OR verb citation form depending on language", but the entire Romance column here is a noun: `es`=Amor, `pt`=Amor, `fr` amour (L93), `nrf` amour (L95), `ca` amor (L312), `gl` amor (L313), `ast` amor (L762), `an` amor (L765), `scn` amuri (L305), `nap` ammore (L304), `lij` amô (L308). Extremaduran has the noun **amol/amor**; the verb infinitive is a part-of-speech outlier against its own immediate neighbours and against the project's noun-based label set. Expected: the noun, e.g. `["amol", "aˈmol"]` (sourced to a Extremeñu lexicon).

---

### 4. `fla` — love — same verb-for-noun slip, byte-identical to the Extremaduran error
- **File:** `words/love.js` line 764
- **Current:** `fla: ["queré", "keˈɾe"]`
- **Why:** Fala (Galician-Portuguese of Cáceres) here carries the identical verb infinitive `queré` as `ext` (L763) — a copy of the part-of-speech mistake in #3. Fala's noun is *amor* (cf. the Galician sibling `gl` amor, L313, and `mwl` amor L841). The cell should be the noun, not the infinitive. (Cross-check: `fla` correctly gives nouns/adjectives elsewhere — `eye.js` L757 oju, `hand.js` L757 mau, `good.js` L757 bõ — so *love* is the lone verb intruder.)

---

### 5. `fra_jer` — love — Jèrriais infinitive *aimer* (verb) where the Norman/French siblings use the noun *amour*
- **File:** `words/love.js` line 389 (and the duplicate declaration at L431)
- **Current:** `fra_jer: ['aimer', 'ɛˈme']`
- **Why:** `aimer` is the infinitive "to love", a verb. Its closest siblings are nouns: French `fr` amour (L93), Picard `pcd` amour (L94), Norman `nrf` amour (L95), Walloon `wa` amour (L768). Jèrriais has the noun **amour** (Le Maistre, _Dictionnaire Jersiais-Français_, 1966, s.v. *amour*). The verb-for-noun mismatch makes this Norman cell the odd one out in an otherwise uniform Gallo-Romance noun column.

---

### 6. `dgr` — love — Dgèrnésiais infinitive *oimaïr* (verb) for the noun "love"
- **File:** `words/love.js` line 388 (and the duplicate declaration at L430)
- **Current:** `dgr: ['oimaïr', 'wɛˈmajr']`
- **Why:** Guernsey Norman `dgr` `oimaïr` is the infinitive "to love" (= Jèrriais *aimer*, cf. #5), again a verb sitting in the noun column next to `fra_jer`, `nrf` amour, `fr` amour. Dgèrnésiais has the noun **amour** (De Garis, _Dictiounnaire Angllais-Guernésiais_, 1967). Same form-class fix as #3–#5: replace the infinitive with the noun.

---

### 7. `el_grc` — love — ἔρως (sexual passion) instead of the general "love/affection" term that matches Modern Greek αγάπη
- **File:** `words/love.js` line 518
- **Current:** `el_grc: ["ἔρως", "érɔːs"]`
- **Expected:** `el_grc: ["ἀγάπη", "aɡápɛː"]` (alternatively φιλία)
- **Why:** The `love` definition asks for the "basic word/root for love OR affection". Ancient Greek ἔρως is specifically *sexual/passionate desire* — LSJ s.v. ἔρως: "love, mostly of the sexual passion"; Buck 16.27 separates it from the general affection terms. The neutral, general-affection lexeme is **ἀγάπη / φιλία**, and it is exactly what the Modern Greek sibling `el` uses: αγάπη (L159). The diachronic pair el αγάπη ↔ el_grc ἔρως is a sense mismatch: every other historical sibling here gives the *general* love noun (`la` amor L517, `cu` любъвь L527, `non` ást, `got` 𐍆𐍂𐌹𐌰𐌸𐍅𐌰 friaþwa). ἀγάπη restores the like-for-like neutral sense and the el↔el_grc continuity.

---

### 8. `ja_osa` — good — connective て-form 良うて, not the attributive citation form the definition requires
- **File:** `words/good.js` line 58
- **Current:** `ja_osa: ["良うて", "joːte"]`
- **Expected:** `ja_osa: ["ええ", "eː"]` (Kansai attributive citation; alternatively the citation よい)
- **Why:** The `good` definition is explicit: 「連体辞書形を優先」 / "attributive citation form preferred", and standard `ja` complies with 良い (L57). 良うて *yōte* is the 連用形+て (connective "being good, and…") — it cannot stand attributively (one says ええ人 / *良うて人 is ungrammatical), so it is the wrong morphological slot for a citation wordlist. The natural Kansai/Osaka attributive citation adjective for "good" is **ええ** *ee*. This is a cluster: the same te-form error recurs at `ja_kyo` 良うて (L62), `ja_hir` 良うて (L63), `ja_aom` 良くて (L59) and `ja_hak` 良かって (L61) — all connective forms where the attributive citation is wanted; they should all be moved to the citation adjective for their variety (Kansai ええ, etc.). I flag `ja_osa` as the representative and list the siblings as the corroborating evidence.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
