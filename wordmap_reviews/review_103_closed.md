# Wordmap review #103 — West African Niger-Congo round-2 auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a field linguist specializing in West African Niger-Congo (and the Chadic contact language Hausa), returning for the wave-11 round-2 audit of the codes `yo`, `ig`, `ha`, `wo`, `ff`, `ak`, `ee`, `bm`, `fon`, `mos`, `sg`, `gej` after the round-1 passes of reviews #10 and #40. I have read both closed round-1 files in full and I honor their adjudications: the orthography-mirroring broad-IPA convention (no tone marks where the practical orthography writes none — the Yoruba mid-unmarked policy, the toneless Igbo/Hausa rows), the `ŋw` rendering of the Igbo labial-velar nasal, the no-tie-bar `ɡb`/`kp` style, and the held lexical-selection items (`ff` *jam*, `wo` *safara*, `bm` *dumuni* / *ka ɲi*, `ak` *aniwa*) are all settled and are NOT re-raised here. What I hunt in this round are the sharp residuals that survive those conventions: n=1 grapheme→IPA mismatches against each language's own sibling cells (the class that the adjudicated `ha` `kaɾɛ`→`kaɾe` fix in #40 established as actionable), wrongly *placed* (not merely omitted) Hausa vowel length, lost Wolof geminates, non-IPA letters leaking into the IPA field, and ATR/vowel-quality slips. My references: Bamgboṣe (1966) *A Grammar of Yoruba*; Newman (2000) *The Hausa Language* and Newman & Newman (2007) *A Hausa–English Dictionary*; Welmers (1973) *African Language Structures*; Emenanjo (1978) *Elements of Modern Igbo Grammar* and Echeruo (1998) *Igbo–English Dictionary*; Fal, Santos & Doneux (1990) *Dictionnaire wolof–français* and the CLAD orthography; Arnott (1970) *The Nominal and Verbal Systems of Fula*; Westermann (1930) and Bole-Richard (1983) for Gbe (Ewe/Gen/Fon); Lefebvre & Brousseau (2002) *A Grammar of Fongbe*; Samarin (1967) for Sango; and the project docs `docs/words/CONTRIBUTING.md` (§IPA conventions: "Use IPA notation, not the language's native romanization") and `docs/words/LANG_CODES.md`. Every Current value below was verified verbatim (with codepoint checks where relevant) against the live files on 2026-06-11.

---

## Issues found

### 1. ig — drink — `aṅụ` is the noun 'bee/honey', not the verb 'drink'; the infinitive is `ịṅụ`
- **File:** words/drink.js line 248
- **Current:** `["aṅụ", "aŋʊ"]`
- **Expected:** `["ịṅụ", "ɪŋʊ"]`
- **Why:** The Igbo verb root for 'drink' is *-ṅụ*; its infinitive takes the harmonizing prefix *i-/ị-*, and since *ụ* is −ATR the prefix must be dotted: **ịṅụ** 'to drink' (Emenanjo 1978 on i-/ị- infinitive harmony; Echeruo 1998 s.v.; standard verb tables give "Ịṅụ — to drink, root ṅụ"). The surface `aṅụ` with the *a-* prefix is a different lexeme: *aṅụ* 'bee' (as in *mmanụ aṅụ* 'honey'). Sibling-entry evidence makes this a clean internal inconsistency, not a convention call: the dataset's own `ig` eat cell is the infinitive `iri` (words/eat.js line 248, root *-ri* with +ATR prefix *i-*), so 'drink' must parallel it as `ịṅụ`. The IPA follows mechanically with the corpus's established ị→`ɪ`, ụ→`ʊ` mapping (`ŋkɪta`, `ɔkʊ`, `ʊlɔ`): `ɪŋʊ`. This is the same class of signed-off semantic/citation-form defect as the applied `rup` *dadâ*→*mumâ* fix in review #26, not one of the held lexical-register items from #10.

---

### 2. ig — mother — plain `e` in `nne` rendered −ATR `ɛ`; n=1 outlier against the Igbo vowel-mapping system
- **File:** words/mother.js line 254
- **Current:** `["nne", "nːɛ"]`
- **Expected:** `["nne", "nːe"]`
- **Why:** Across the whole `ig` row the corpus maps the dotted (−ATR) vowels to lax IPA and the plain vowels to tense IPA: `ị`→`ɪ` (`ŋkɪta` dog.js:248), `ọ`→`ɔ` (`ɔkʊ` fire.js:254, `ʊlɔ` house.js:255, `ɔma` good.js:248), `ụ`→`ʊ` (`daːlʊ` thanks.js:248), and plain `i/o/u/a` stay `i/o/u/a` (`iɾi`, `obi`, `osisi`, `otu`, `aka`). `nne` contains the only orthographic plain ⟨e⟩ in the entire Igbo row, and it is the only cell that breaks the system, surfacing as `ɛ`. Igbo orthographic ⟨e⟩ is the +ATR mid front vowel /e/ (Emenanjo 1978; Welmers & Welmers 1968 transcribe *nne* with [e]); Igbo has no /ɛ/ phoneme to map it to. This is exactly the adjudicated `ha` `kaɾɛ`→`kaɾe` precedent from review #40 (same defect, same fix shape): an n=1 vowel-quality outlier against the corpus's own grapheme treatment. The geminate `nː` is fine per the `mːiɾi` convention.

---

### 3. ha — water — vowel length inverted: `ɾuːwa` marks the short vowel long and the long vowel short
- **File:** words/water.js line 266
- **Current:** `["ruwa", "ɾuːwa"]`
- **Expected:** `["ruwa", "ɾuwaː"]`
- **Why:** Hausa *ruwā* 'water' has a **short** first vowel and a **long** final /aː/: Newman & Newman (2007) cite **ruwā** (macron = long final ā only); Wiktionary's Newman-based entry gives /ɽú.wáː/ (Standard Kano [ɽʊ́.wáː]). The live IPA `ɾuːwa` is exactly backwards — long `uː`, short final `a`. This is not the held "length omission" convention of #40 issue 17: length IS marked in this cell, just on the wrong vowel, which makes it a positive segmental error. Note review #81 cited this cell in passing as "length already marked (`ɾuːwa` long /uː/)" without auditing the placement; the placement is wrong. The corpus's own `ha` sun cell `ɾaːnaː` (sun.js:265, *rānā*, both genuinely long) shows the correct pattern for comparison.

---

### 4. ha — eye — spurious initial length: `iːdoː` for *idṑ*, which has a short first vowel
- **File:** words/eye.js line 259
- **Current:** `["ido", "iːdoː"]`
- **Expected:** `["ido", "idoː"]`
- **Why:** Hausa 'eye' is **idò** with short /i/ and long final /oː/: Newman & Newman (2007) write *idò* (no macron on i); the Newman-based Wiktionary entry gives the citation form *idṑ* /ʔí.dòː/ ([ʔɪ́.dòː] Kano — the lax [ɪ] allophone itself diagnoses a short vowel, since long /iː/ does not laxen). The live `iːdoː` was introduced by review #81 (issue 17, "īdō ... both long vowels"), which over-applied length to the first syllable; the final `oː` half of that fix is correct and should be kept. Only the spurious initial `ː` should be removed.

---

### 5. ha — father & mother — same #81 over-application: `uːbaː` and `uːwaː` have spurious initial length
- **File:** words/father.js line 259; words/mother.js line 265
- **Current:** `["uba", "uːbaː"]` (father); `["uwa", "uːwaː"]` (mother)
- **Expected:** `["uba", "ubaː"]` (father); `["uwa", "uwaː"]` (mother)
- **Why:** Both kinship terms have a short initial vowel and a long final /aː/ in the standard citation forms: **ùbā** /ʔù.báː/ 'father' and **uwā** /ʔú.wáː/ 'mother' ([ʔʊ̀.báː], [ʔʊ́.wáː] Kano — again the lax [ʊ] allophone confirms shortness; Newman & Newman 2007 macron the final ā only). Review #81 (issues 15–16) claimed "both vowels long" for each and the applied fix wrote `uːbaː`/`uːwaː`; the final-`aː` half is right, the initial `uː` is not supported by Newman's lexicon. Same defect class as issue 4, fixed the same way: drop the initial length mark, keep the final one. (For the record, #81's `ɾaːnaː` sun fix is correct and untouched.)

---

### 6. wo — heart — orthographic `o` = /ɔ/ in Wolof, but `xol` is transcribed with tense `o`
- **File:** words/heart.js line 263
- **Current:** `["xol", "xol"]`
- **Expected:** `["xol", "xɔl"]`
- **Why:** In the CLAD standard Wolof orthography, plain ⟨o⟩ is the open-mid vowel /ɔ/ and only accented ⟨ó⟩ is /o/ (Fal, Santos & Doneux 1990; Diouf 2003). The corpus itself applies this rule everywhere else in the `wo` row: `ndox`→`ndɔx` (water.js:270) and `loxo`→`lɔxɔ` (hand.js:263). `xol` 'heart' is the lone cell where ⟨o⟩ surfaces as `o` — an n=1 internal inconsistency of exactly the adjudicated `kaɾɛ`/`kaɾe` type. Wolof *xol* is /xɔl/.

---

### 7. wo — moon — orthographic `ee` = /ɛː/ (long open e), but `weer` is transcribed `weːɾ`
- **File:** words/moon.js line 269
- **Current:** `["weer", "weːɾ"]`
- **Expected:** `["weer", "wɛːɾ"]`
- **Why:** CLAD Wolof orthography distinguishes ⟨e⟩ /ɛ/ from ⟨é⟩ /e/, and doubling marks length without changing quality: ⟨ee⟩ = /ɛː/, ⟨ée⟩ = /eː/ (Fal, Santos & Doneux 1990). The corpus's own `wo` cells obey the short-vowel half of the rule everywhere: `lekk`→`lɛkː` (eat.js:263), `benn`→`bɛnː` (one.js:269), `def`→`dɛf` (hello.js:263). *Weer* 'moon, month' therefore must be /wɛːɾ/; the live `weːɾ` silently promotes ⟨ee⟩ to the ⟨ée⟩ value, a grapheme-mapping error contradicted by the row's own siblings.

---

### 8. wo — love — geminate `gg` of `mbëggeel` lost in IPA, plus the same `ee` quality error
- **File:** words/love.js line 270
- **Current:** `["mbëggeel", "mbəɡeːl"]`
- **Expected:** `["mbëggeel", "mbəɡːɛːl"]`
- **Why:** Two defects in one cell. (a) Wolof gemination is phonemic and the corpus marks it consistently in this very row: `lekk`→`lɛkː`, `benn`→`bɛnː`. The root *bëgg* 'want/love' has geminate /ɡː/ (Fal, Santos & Doneux 1990 s.v. *bëgg*; the nominalization *mbëgg-eel* keeps it), yet the IPA writes singleton `ɡ` — the only `wo` cell where an orthographic geminate is dropped. (b) The suffix vowel ⟨ee⟩ is /ɛː/, not /eː/, exactly as in issue 7. Corrected form: /mbəɡːɛːl/.

---

### 9. ff — hand — `junngo` has a homorganic velar nasal: `dʒunːɡo` should be `dʒuŋːɡo`
- **File:** words/hand.js line 601
- **Current:** `["junngo", "dʒunːɡo"]`
- **Expected:** `["junngo", "dʒuŋːɡo"]`
- **Why:** In Fula orthography ⟨ng⟩ is the prenasalized velar /ŋɡ/, and in *junngo* 'hand' (ngo-class noun, Arnott 1970) the long nasal before /ɡ/ is velar [ŋː], not alveolar [nː] — nasal+stop sequences in Fula are strictly homorganic. The corpus itself encodes the velar reading of ⟨ng⟩ in the sibling `ff` cell `naange`→`naːŋɡe` (sun.js:607), so `dʒunːɡo` with alveolar `nː` is an n=1 internal inconsistency against the row's own convention as well as against Fula phonology. Expected /dʒuŋːɡo/ (length kept on the nasal, mirroring the orthographic ⟨nn⟩+⟨g⟩).

---

### 10. ee (and gej) — house — non-IPA letter `ƒ` (U+0192) left inside the IPA field; Ewe ⟨ƒ⟩ = /ɸ/
- **File:** words/house.js line 794 (`ee`); words/house.js line 795 (`gej`)
- **Current:** `["aƒe", "aƒe"]` (both lines; codepoint-checked: the second field contains U+0192 LATIN SMALL LETTER F WITH HOOK)
- **Expected:** `["aƒe", "aɸe"]` (both lines)
- **Why:** The Ewe/Gen letter ⟨ƒ⟩ is an orthographic device for the **voiceless bilabial fricative /ɸ/**, contrasting with ⟨f⟩ /f/ — Ewe is the textbook language for the /f/–/ɸ/ contrast (Westermann 1930; Ladefoged & Maddieson 1996; Bole-Richard 1983 gives Ewe /ɸ/ as the cognate of Fon /xʷ/ in exactly this 'house/home' etymon). U+0192 is not an IPA symbol at all, so the IPA field currently violates the project's own rule in `docs/words/CONTRIBUTING.md` §IPA conventions ("Use IPA notation, not the language's native romanization"). Every other `ee` cell uses true IPA (`ɣleti`, `ɖu`, `ŋku`, `t͡s`-less `tsi`...); these two cells are the only `ƒ` leak in the whole corpus (grep-verified). The surface forms stay as they are.

---

### 11. fon — sun — voiced `hw` transcribed as voiceless `xʷ`, collapsing the *hwè* 'sun' / *xwé* 'house' minimal pair
- **File:** words/sun.js line 997
- **Current:** `["hwe", "xʷe"]`
- **Expected:** `["hwe", "ɦʷe"]`
- **Why:** Fongbe has two distinct labialized dorsal fricatives: voiceless ⟨xw⟩ /xʷ/ and its **voiced** counterpart ⟨hw⟩ /ɦʷ/ (Lefebvre & Brousseau 2002, ch. 2; Bole-Richard 1983, who pairs Fon /ɦw/ with Ewe /β/ and Fon /xw/ with Ewe /ɸ/ in the Gbe cognate tables). The dataset transcribes both graphemes identically as `xʷ`: sun `hwe`→`xʷe` (sun.js:997) vs house `xwé`→`xʷe` (house.js:998). That collapses a real Fongbe phonemic contrast and manufactures a false homophone of the near-minimal pair *hwè* 'sun' / *xwé* 'house'. The house cell is correct; the sun cell needs the voiced symbol: /ɦʷe/ (a /ɣʷ/ rendering would also be defensible, but `ɦʷ` matches Lefebvre & Brousseau's analysis). Tone stays unmarked per the orthography-mirroring convention.

---

### 12. sg — tree — same grapheme ⟨ê⟩ transcribed two different ways inside one word: `kekɛ`
- **File:** words/tree.js line 893
- **Current:** `["kêkê", "kekɛ"]`
- **Expected:** `["kêkê", "kɛkɛ"]`
- **Why:** The corpus's established mapping for Sango ⟨ê⟩ is `ɛ`: `bê`→`bɛ` (heart.js:893), `lê`→`lɛ` (eye.js:893), `ndoyê`→`ndojɛ` (love.js:900), and ⟨ë⟩ likewise `nzë`→`nzɛ` (moon.js:899, an applied review-#10 fix). In `kêkê` the two occurrences of the *same grapheme in the same word* surface differently — first as `e`, then as `ɛ`. Whatever one thinks the right value of circumflexed e is, transcribing identical graphemes in identical contexts two ways within a single cell is indefensible; corpus convention (3 sibling cells) says both are `ɛ`. Samarin (1967) supports the open-mid quality for this vowel.

---

### 13. sg — house — `dâ` transcribed with back `ɑ`, the only `ɑ` in the Sango row; siblings map ⟨â⟩→`a`
- **File:** words/house.js line 900
- **Current:** `["dâ", "dɑ"]`
- **Expected:** `["dâ", "da"]`
- **Why:** Sango has a five-vowel oral system /i e a o u/ (plus mid-vowel quality detail and nasals) with no front/back /a/–/ɑ/ contrast (Samarin 1967; Diki-Kidiri). The corpus maps circumflexed ⟨â⟩ to plain `a` everywhere else: `lâ`→`la` (sun.js:899), `babâ`→`baba` (father.js:893). `dɑ` is the lone `ɑ` in the entire `sg` row (n=1 outlier) and encodes a vowel quality the language does not distinguish. Same internal-inconsistency class as the adjudicated `kaɾɛ`→`kaɾe` fix.

---

### 14. mos — sun — non-homorganic `nɡ` in `wəntinɡa`; sibling cell uses `ŋɡ`
- **File:** words/sun.js line 931
- **Current:** `["wəntinga", "wəntinɡa"]`
- **Expected:** `["wəntinga", "wəntiŋɡa"]`
- **Why:** Mooré ⟨ng⟩ is the homorganic velar nasal+stop (or final velar nasal); the corpus's own `mos` love cell encodes this: `nong`→`noŋɡ` (love.js:932). The sun cell leaves the alveolar `n` before `ɡ` — an n=1 mapping inconsistency within the row, and phonotactically wrong for a Gur language where nasal+velar clusters assimilate (Welmers 1973 on Gur nasal assimilation). Fix the IPA to `wəntiŋɡa`. Separately I flag (verification note, no change proposed): the surface ⟨ə⟩ is not a letter of the standard Burkina Mooré alphabet (a, e, ɛ, i, ɩ, o, u, ʋ + nasalized vowels), and the usual citation forms for 'sun' are *wĩndga* / *wĩntoogo*; the surface form deserves a sourced re-check in a future pass, but I do not propose an unsourced replacement here.

---

### 15. mos — hello — long `oo` of `yibeoogo` not marked, the only unmarked long vowel in the Mooré row
- **File:** words/hello.js line 918
- **Current:** `["ne y yibeoogo", "ne i jibeoɡo"]`
- **Expected:** `["ne y yibeoogo", "ne i jibeoːɡo"]`
- **Why:** Unlike the held Hausa length-omission convention, the `mos` row marks orthographic double vowels long **everywhere else**: `koom`→`koːm` (water.js:925), `roogo`→`roːɡo` (house.js:932), `baaga`→`baːɡa` (dog.js:925), `tɩɩg`→`tɪːɡ` (tree.js:925), `yʋʋga`→`jʊːɡa` (cat.js:925), `kiuugu`→`kiuːɡu` (moon.js:931), `sũur`→`sũːr` (heart.js:925). The greeting *ne y yibeoogo* 'good morning' contains the same ⟨oo⟩ in *yibeoogo* (cf. *roogo*) yet its IPA `jibeoɡo` is the lone cell that drops the length mark — an n=1 internal inconsistency, fixed by `jibeoːɡo`.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

All 15 findings verified verbatim against the live files (2026-06-11) and against the cited sibling cells. Every item is an affirmative segmental error, a wrong grapheme→IPA mapping that is an n=1 outlier against the row's own established treatment, a lost geminate, a non-IPA leak, or a citation-form/concept error — i.e. the actionable class, not the held tone/ATR-omission conventions. All 15 applied.

- **103-1 ig drink** (words/drink.js:248): `["aṅụ","aŋʊ"]`→`["ịṅụ","ɪŋʊ"]`. Citation-form fix: *aṅụ* 'bee' vs verb infinitive *ịṅụ* 'to drink'. Parallels sibling `ig` eat infinitive `["iri","iɾi"]` (eat.js:248). IPA follows corpus ị→ɪ, ụ→ʊ mapping. (applied by orchestrator this round)
- **103-2 ig mother** (words/mother.js:254): `nːɛ`→`nːe`. Plain ⟨e⟩ = +ATR /e/; the only plain-⟨e⟩ cell in the `ig` row, lone outlier surfacing as ɛ. Same class as adjudicated `ha kaɾɛ→kaɾe` (#40). (applied by orchestrator this round)
- **103-3 ha water** (words/water.js:266): `ɾuːwa`→`ɾuwaː`. Length is present but on the wrong vowel; *ruwā* has short /u/, long final /aː/. Cf. `ɾaːnaː` sun. (applied by orchestrator this round)
- **103-4 ha eye** (words/eye.js:259): `iːdoː`→`idoː`. Drop spurious initial length; *idò* has short /i/. (applied by orchestrator this round)
- **103-5 ha father+mother** (words/father.js:259, words/mother.js:265): `uːbaː`→`ubaː`, `uːwaː`→`uwaː`. Same #81 over-application; keep final aː, drop initial uː. (applied by orchestrator this round)
- **103-6 wo heart** (words/heart.js:263): `xol`→`xɔl`. Plain ⟨o⟩=/ɔ/ in CLAD Wolof; lone outlier vs `ndɔx`, `lɔxɔ`. (applied by orchestrator this round)
- **103-7 wo moon** (words/moon.js:269): `weːɾ`→`wɛːɾ`. ⟨ee⟩=/ɛː/, not /eː/; cf. `lɛkː`,`bɛnː`,`dɛf`. (applied by orchestrator this round)
- **103-8 wo love** (words/love.js:270): `mbəɡeːl`→`mbəɡːɛːl`. Restore lost geminate ɡː and ⟨ee⟩→ɛː. (applied by orchestrator this round)
- **103-9 ff hand** (words/hand.js:601): `dʒunːɡo`→`dʒuŋːɡo`. Homorganic velar nasal; cf. `naːŋɡe` (sun.js:607). (applied by orchestrator this round)
- **103-10 ee+gej house** (words/house.js:794,795): `aƒe`→`aɸe` (IPA field only, both lines). U+0192 is not IPA; ⟨ƒ⟩=/ɸ/. (applied by orchestrator this round)
- **103-11 fon sun** (words/sun.js:997): `xʷe`→`ɦʷe`. ⟨hw⟩=voiced /ɦʷ/ vs ⟨xw⟩=/xʷ/ (house.js:998); resolves false homophone. (applied by orchestrator this round)
- **103-12 sg tree** (words/tree.js:893): `kekɛ`→`kɛkɛ`. Same grapheme ⟨ê⟩ twice in one word transcribed two ways; corpus maps ⟨ê⟩→ɛ (`bɛ`,`lɛ`,`ndojɛ`). (applied by orchestrator this round)
- **103-13 sg house** (words/house.js:900): `dɑ`→`da`. Lone ɑ in the `sg` row; ⟨â⟩→a elsewhere (`la`,`baba`). (applied by orchestrator this round)
- **103-14 mos sun** (words/sun.js:931): `wəntinɡa`→`wəntiŋɡa`. Homorganic ⟨ng⟩; cf. `noŋɡ` (love.js:932). Surface-form re-check of `wəntinga` left as the reviewer's flagged future-pass note (not actioned — no sourced replacement proposed). (applied by orchestrator this round)
- **103-15 mos hello** (words/hello.js:918): `ne i jibeoɡo`→`ne i jibeoːɡo`. Mark long ⟨oo⟩; the `mos` row marks all other double vowels long. (applied by orchestrator this round)

Held / open: none beyond the reviewer's own explicit non-proposal (the `mos wəntinga` surface-form sourcing note, which the reviewer did not raise as a change this round).

---

## Reviewer round-2 response (再評価 round-2)

I re-verified all 15 applied fixes verbatim against the live `words/*.js` files on 2026-06-11 (grep + codepoint checks), and re-confirmed every cited sibling cell that the n=1-outlier arguments rest on. Every claimed fix is actually present in the live data — no phantom-applied items this round.

Per-item adjudication:

1. **ig drink** ✓ — drink.js:248 now `["ịṅụ","ɪŋʊ"]`. Citation-form parallel to sibling `ig` eat infinitive `["iri","iɾi"]` (eat.js:248) confirmed.
2. **ig mother** ✓ — mother.js:254 now `["nne","nːe"]`. Plain ⟨e⟩→`e` outlier resolved.
3. **ha water** ✓ — water.js:266 now `["ruwa","ɾuwaː"]`. Length moved to the long final /aː/.
4. **ha eye** ✓ — eye.js:259 now `["ido","idoː"]`. Spurious initial length dropped, final `oː` kept.
5. **ha father+mother** ✓ — father.js:259 `["uba","ubaː"]`, mother.js:265 `["uwa","uwaː"]`. Both initial-length over-applications corrected.
6. **wo heart** ✓ — heart.js:263 now `["xol","xɔl"]`. Matches `ndɔx`/`lɔxɔ`.
7. **wo moon** ✓ — moon.js:269 now `["weer","wɛːɾ"]`. ⟨ee⟩→/ɛː/.
8. **wo love** ✓ — love.js:270 now `["mbëggeel","mbəɡːɛːl"]`. Geminate `ɡː` restored and ⟨ee⟩→ɛː.
9. **ff hand** ✓ — hand.js:601 now `["junngo","dʒuŋːɡo"]`. Velar nasal; matches `naːŋɡe` (sun.js:607).
10. **ee+gej house** ✓ — house.js:794/795 now `["aƒe","aɸe"]` on both lines. Codepoint-verified: surface field keeps ⟨ƒ⟩ U+0192, IPA field is now ⟨ɸ⟩ U+0278. The non-IPA leak is gone.
11. **fon sun** ✓ — sun.js:997 now `["hwe","ɦʷe"]`. Voiced/voiceless contrast restored against house.js:998 `["xwé","xʷe"]`; false homophone resolved.
12. **sg tree** ✓ — tree.js:893 now `["kêkê","kɛkɛ"]`. Same-grapheme inconsistency resolved.
13. **sg house** ✓ — house.js:900 now `["dâ","da"]`. Lone `ɑ` removed; matches `la`/`baba`.
14. **mos sun** ✓ — sun.js:931 now `["wəntinga","wəntiŋɡa"]`. Homorganic ⟨ng⟩; matches `noŋɡ` (love.js:932). The surface-form `wəntinga` sourcing concern was explicitly NOT raised as a change in round-1 (a flagged future-pass note only), so it is not an open item here.
15. **mos hello** ✓ — hello.js:918 now `["ne y yibeoogo","ne i jibeoːɡo"]`. Long ⟨oo⟩ marked.

New issues raised this round: none. I looked for collateral errors while verifying the sibling cells and found nothing new and defensible.

Scorecard: 15 accepted (✓), 0 partial, 0 rejected, 0 new. All clear errors fixed and verified in live data; no remaining actionable items.

**File status: CLOSED** — nothing left to address.
