# Wordmap review #119 — Coverage-hole & em-dash policy auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a documentary lexicographer specialising in coverage policy: when a cell may legitimately be empty (`—`), when emptiness is itself an error, and when a filled cell in a closed-corpus language is an over-claim. I work daily with attestation-bounded dictionaries — eDIL for Old/Middle Irish, Köbler's Althochdeutsches/Altsächsisches Wörterbuch and Lexer's Mittelhochdeutsches Handwörterbuch for old Germanic, del Olmo Lete & Sanmartín's *DUL* for Ugaritic, Krahmalkov's *Phoenician-Punic Dictionary*, Beeston et al.'s *Sabaic Dictionary*, Porten & Yardeni's *TAD* for the Aramaic letters, Kurilov's Юкагирско-русский словарь and Nikolaeva's *A Historical Dictionary of Yukaghir*, and Bloomfield's Menominee materials. For this wave I ran a full grid audit of the 20 `words/*.js` files: per-language em-dash counts, surface/IPA em-dash contract checks against `docs/words/CONTRIBUTING.md`, absent-key detection, and attestation spot-checks of every ancient lect's `hello`/`thanks`/`cat` cells. The grid is structurally clean — **all 1000 language codes are present in all 20 files (zero absent keys), and there is not a single em-dash-surface/real-IPA contract violation** — so everything below is about cells whose *emptiness or filledness* is wrong: living/old languages left `["—","—"]` where a well-attested form exists in the standard dictionary, and closed-corpus languages carrying forms that are not in their corpora at all. I checked every candidate against `wordmap_reviews/*_closed.md` before reporting (notably: the `hit` sun/hello/thanks/cat em-dashes were adjudicated correct in closed #100 and are not re-raised; the systemic duplicate-block defect was reported in closed #90 and deferred, so it is noted at the end but not re-numbered).

---

## Issues found

### 1. ykg — tree — basic-vocabulary hole: Tundra Yukaghir 'tree' is in every dictionary, yet the cell is `—`
- **File:** words/tree.js line 141
- **Current:** `["—", "—"]`
- **Expected:** `["саал", "saːl"]`
- **Why:** Tundra Yukaghir *saal* (са:л/саал) 'tree; wood; forest' is core basic vocabulary, headworded in Kurilov 2001 (Юкагирско-русский словарь) and in Nikolaeva's *A Historical Dictionary of Yukaghir* (TY *sa:l*); the Surrey "Endangered Languages and Cultures of Siberia" Tundra Yukaghir lexical-word list gives *saa-l* 'tree; forest, taiga'. The row's own coverage shows the inversion plainly: `ykg cat` is filled with the bare Russian loan `["кошка","koʂka"]` (cat.js:141) while the native Swadesh-list item 'tree' is left intentionally-empty. An em-dash is for genuinely unattested/inapplicable meanings (cf. the deliberate `ykg hello/thanks` gaps); 'tree' in a living, dictionary-documented Siberian language does not qualify.

---

### 2. mez — thanks — Menominee `Wāēwāēnen` is on the same tribal language sheet the `hello` cell was filled from
- **File:** words/thanks.js line 339
- **Current:** `["—", "—"]`
- **Expected:** `["Wāēwāēnen", "wɛːwɛːnen"]`
- **Why:** The Menominee Nation's own "Menominee Language 1 — Greetings & Leave takings" vocabulary (menominee-nsn.gov) lists *Posoh* 'hello' and *Wāēwāēnen* 'thank you' side by side; this dataset took `mez hello: ["Posoh","posoh"]` (hello.js) but left `thanks` empty — a half-harvested source. *Wāēwāēnen* is the standard, universally taught Menominee gratitude word (cf. Bloomfield's Menominee lexicon; Glosbe en–mez 'thank you'). IPA note: in the standard Menominee alphabet the digraph ⟨āē⟩ is the long open vowel /ɛː/ (Bloomfield's ɛ̄), hence /wɛːwɛːnen/, not a mechanical aː+eː spell-out.

---

### 3. goh — thanks — Old High German `danc` is amply attested; the em-dash under-claims the corpus
- **File:** words/thanks.js line 908
- **Current:** `["—", "—"]`
- **Expected:** `["danc", "daŋk"]`
- **Why:** OHG *danc* (also *thanc*) 'Dank, Gunst, Gnade' is a headword in Köbler's Althochdeutsches Wörterbuch with double-digit attestations (Otfrid, Notker; the verb *dankōn* likewise). The file's own Germanic siblings have the cognate filled: `ang: ["þanc","θɑŋk"]` (line 514), `non: ["þǫkk","θɔkː"]` (line 516), `got: ["𐌸𐌰𐌲𐌺𐍃","θɑŋks"]` (line 517). Leaving the three continental West Germanic stages empty (see #4, #5) while Old English, Old Norse and Gothic are filled is inconsistent treatment of one and the same etymon (*þank-*) under the project's own omission policy — `—` is for unattested meanings, not unfilled cells.

---

### 4. gmh — thanks — Middle High German `danc` (Lexer) missing for the same reason
- **File:** words/thanks.js line 920
- **Current:** `["—", "—"]`
- **Expected:** `["danc", "daŋk"]`
- **Why:** Lexer, Mittelhochdeutsches Handwörterbuch s.v. *danc* stm. 'Gedanke; Dank' — extremely common, including the fixed gratitude formula *des habe danc* and the verb *danken*. The `gmh` row is otherwise complete (19/20, hello filled with the courtly greeting `gegrüezet`, line not at issue), so this is the row's single coverage hole, and the etymon is filled in `ang`/`non`/`got` (thanks.js:514–517). Final ⟨c⟩ = /k/ after devoicing; /daŋk/ matches the dataset's `ang` /θɑŋk/ convention.

---

### 5. osx — thanks — Old Saxon `thank` is in the Heliand; em-dash unjustified
- **File:** words/thanks.js line 924
- **Current:** `["—", "—"]`
- **Expected:** `["thank", "θaŋk"]`
- **Why:** Old Saxon *thank* st.M. 'Dank, Gnade, Wille' is attested c. 18× in the Heliand corpus (Köbler, Altsächsisches Wörterbuch s.v. *thank*; also *thankon* 'danken'). Same sibling argument as #3/#4: the `osx` row fills `hello` with `heil` but leaves the equally-attested `thank` empty, while `ang þanc`, `non þǫkk`, `got 𐌸𐌰𐌲𐌺𐍃` stand filled three lines apart. Old Saxon ⟨th⟩ = /θ/, matching the dataset's `ang` /θɑŋk/.

---

### 6. sga & mga — thanks — `atloirgaim` is a ghost form: eDIL has no such word
- **File:** words/thanks.js line 939 (sga), line 953 (mga)
- **Current:** `["atloirgaim", "atloiɾɡim"]` (both lines, identical)
- **Expected:** `["atlochur", "atloxur"]`
- **Why:** eDIL's headword for 'gives thanks' is **ad-tluichethar**, with attested forms *atluchur, atlochur, atlochor, atluchedar* etc. ("atlochur do Dia" — 'I give thanks to God'); a direct eDIL search confirms **no form `atloirgaim` exists anywhere in the dictionary**. The current string looks like a corruption (intrusive ⟨irg⟩, plus a Modern-Irish-style 1sg ending *-aim* bolted onto an Old Irish deponent). Both the Old Irish and Middle Irish cells carry the same invented string and the same non-IPA-corrupt transcription (`ɾɡ` cluster that corresponds to nothing in the lemma). Replace with the attested deponent 1sg *atlochur* (lenited ⟨ch⟩ = /x/), or at minimum the verbal-noun *atlugud (buide)*.

---

### 7. sga & mga — hello — `fochen` 'welcome!' is a textbook Old Irish greeting; the em-dash is a coverage hole
- **File:** words/hello.js line 932 (sga), line 946 (mga)
- **Current:** `["—", "—"]`
- **Expected:** `["fochen", "foxʲen"]`
- **Why:** eDIL s.v. **fochen** 'welcome' (variant of *mochen*) — a fully conventionalised salutation formula with abundant saga attestations, e.g. *"fochen Conall, cride licce"* and *"'Fo chen dóib,' ol Ailill ⁊ Medb"* (Táin cycle). The dataset's stated practice for ancient lects is to fill `hello` whenever a conventional greeting/welcome formula is attested in the corpus — its own `goh: heil`, `osx: heil`, `gmh: gegrüezet`, `orv: здравъ`, `uga: 𐎌𐎍𐎎` cells all do exactly this — so leaving both Irish stages empty is inconsistent application of the same policy to a *better*-attested formula.

---

### 8. oar — hello — the Aramaic epistolary `šlm` greeting is the best-attested salutation in the whole Northwest Semitic corpus
- **File:** words/hello.js line 387
- **Current:** `["—", "—"]`
- **Expected:** `["שלם", "ʃəlaːm"]`
- **Why:** Old Aramaic letters open with the *šlm* greeting formula as a matter of genre (Hermopolis and Elephantine correspondence: *šlm ʾḥy* 'greetings, my brother'; *šlm wšrrt šlḥt lk* — Porten & Yardeni, *TAD*; Fitzmyer on Aramaic epistolography). The dataset already fills the identical formula for every sibling: `phn: ["𐤔𐤋𐤌","ʃalom"]` (hello.js:892), `hbo: ["שלום","ʃaːloːm"]` (947), `arc: ["ܫܠܡܐ","ʃlaːmaː"]` (516), `uga: ["𐎌𐎍𐎎","ʃalaːmu"]`. The `oar` row uses Hebrew square script elsewhere (`מין` water.js:394, `אב` father.js:394), so `שלם` is script-consistent. Leaving precisely the Old Aramaic cell empty is an arbitrary hole, not a policy decision.

---

### 9. uga — thanks — `𐎁𐎗𐎋 baːriku` is 'to bless', not 'thanks'; no gratitude formula is attested in Ugaritic
- **File:** words/thanks.js line 900
- **Current:** `["𐎁𐎗𐎋", "baːriku"]`
- **Expected:** `["—", "—"]`
- **Why:** Ugaritic *b-r-k* is 'to bless' (del Olmo Lete & Sanmartín, *DUL* s.v. /b-r-k/); in the letters and votive texts the blessing runs from deity to human (*ilm tǵrk tšlmk* 'may the gods guard you, keep you well'), and no conversational thank-you formula is attested anywhere in the corpus. Filling `thanks` with the 'bless' root is exactly the over-claim the em-dash policy exists to prevent, and it breaks the dataset's own discipline for closed corpora: `hit thanks`, `sux thanks`, `peo thanks`, `ave thanks`, `gmy thanks` are all (correctly, per closed #100) `—`. The invented vocalisation `baːriku` compounds the problem. (`uga hello` `𐎌𐎍𐎎` is fine — the epistolary *šlm* greeting IS attested — only `thanks` is the over-reach.)

---

### 10. phn & xpu — thanks — same over-claim: Phoenician/Punic `brk` 'to bless' presented as 'thanks'
- **File:** words/thanks.js line 899 (phn), line 913 (xpu)
- **Current:** `["𐤁𐤓𐤊", "barak"]` (both lines, identical)
- **Expected:** `["—", "—"]`
- **Why:** Krahmalkov, *Phoenician-Punic Dictionary* s.v. *BRK* I: 'to bless'; in the votive corpus the formula is *k šmʿ qlʾ ybrkʾ* 'because he/she heard his voice (and) blessed him' — the **deity** blesses the dedicant, never a speaker thanking an interlocutor. No conversational gratitude formula is attested in Phoenician or Punic. Both cells should follow the corpus-bounded policy used for `hit`/`sux`/`peo`/`ave` and the (correct) em-dash already in the `xpu` row (`xpu cat` is `—`, cat.js:913). Note the pair also shows mechanical row-cloning: byte-identical surface+IPA for two lects centuries and a sea apart.

---

### 11. xsa — thanks — `𐩦𐩫𐩧 ʃakar` is the Arabic root; the gratitude root actually attested in the Sabaic corpus is `ḥmd`
- **File:** words/thanks.js line 916
- **Current:** `["𐩦𐩫𐩧", "ʃakar"]`
- **Expected:** `["𐩢𐩣𐩵", "ħamad"]`
- **Why:** Sabaic dedicatory inscriptions express 'to praise/thank (a deity)' with **ḥmd**: the verbal sentence *f-ḥmdw* 'and they thanked', and the ubiquitous formula *ḥmdm b-ḏt…* 'in gratitude because…' in the Almaqah dedications (Beeston, Ghul, Müller & Ryckmans 1982, *Sabaic Dictionary* s.v. ḤMD). A root š-k-r as 'thank' is not the Sabaic corpus formula — `𐩦𐩫𐩧` is Arabic *šakara* back-projected into Old South Arabian letters. Replace with the attested skeleton 𐩢𐩣𐩵 (ḥ-m-d; conventional vocalisation /ħamad/ in the same CaCaC style as the row's `ʔakal` eat / `ʃataja` drink), or failing that em-dash it — but the current cell is a different language's word.

---

### 12. chb — thanks — `chibchachoa` is unattested in the Muisca colonial sources; it reads as ethnonym + *cho* 'good'
- **File:** words/thanks.js line 1022
- **Current:** `["chibchachoa", "tʃibtʃatʃoa"]`
- **Expected:** `["—", "—"]`
- **Why:** Muisca (Muysccubun) is a closed corpus: everything we have comes from the colonial grammars and vocabularies (Lugo 1619; the anonymous manuscripts edited in González de Pérez 1987, *Diccionario y gramática chibcha*; the muysca.cubun.org corpus project). The greeting `chb hello: ["chibu","tʃibu"]` (hello.js:1015) IS in those sources (*chibú* '¿estás ahí?/hola'). But no source records a thanks formula `chibchachoa`; the string is not findable in the colonial corpus and decomposes suspiciously as the (Spanish-era) ethnonym *chibcha* + *cho* 'good' + interrogative/emphatic *-a* — i.e. it looks assembled, not attested. Under the policy applied to every other closed-corpus lect in this file (`hit`/`sux`/`peo`/`ave`/`gmy thanks` = `—`), this cell must be em-dashed unless a folio citation can be produced.

---

## Audit notes (non-numbered)

- **Absent-key audit (lens d): clean.** All 1000 language codes are present as keys in all 20 word files; the CONTRIBUTING.md absent-key-vs-em-dash distinction is currently moot because the dataset uniformly uses explicit `—` rows. No inconsistent treatment found.
- **Em-dash contract audit (lens b): clean.** Zero cells with `—` surface + real IPA or real surface + `—` IPA; no partial em-dashes inside longer strings.
- **Known, still-live structural defect (not re-numbered):** the duplicated region block (`aau…zh_xa`, plus the 7-row `wuu_jh…zh_nj` cluster) reported as closed #90 issue 1 and deferred there is still present in every file (e.g. cat.js 374–415 vs 416–455); both copies remain byte-identical, so the em-dash counts above are unaffected, but several rows cited in this review (`rut`, `bdk`, `khv`, etc.) physically exist twice per file. Line numbers given here always reference the *first* (authoritative-by-position) copy except where the grep hit is unique.
- `hit sun/hello/thanks/cat` em-dashes: adjudicated correct in closed #100; deliberately not re-raised.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

All 12 items are clear coverage/attestation errors well-supported by the reviewer's sibling-policy argument and corroborated by external sources. Verified each Current value verbatim against the live files; none of the cited rows are duplicated in the dup-block (each grep-unique), so line targeting is safe.

- **119-1 ykg tree** — applied (orchestrator). `["—","—"]` → `["саал","saːl"]`. Tundra Yukaghir *saa-l* 'tree; forest, taiga' confirmed in Nikolaeva *A Historical Dictionary of Yukaghir* / Kurilov 2001 via Surrey "Endangered Languages of Siberia" lexical list. Living dictionary-documented language; em-dash was an unjustified hole.
- **119-2 mez thanks** — applied (orchestrator). `['—','—']` → `["Wāēwāēnen","wɛːwɛːnen"]`. Confirmed on the Menominee Nation's own "Menominee Language 1 — Greetings & Leave takings" sheet (menominee-nsn.gov) and Glosbe en–mez; same source `hello: Posoh` was already harvested. IPA ⟨āē⟩ = long /ɛː/ per standard Menominee alphabet.
- **119-3 goh thanks** — applied (orchestrator). → `["danc","daŋk"]`. OHG *danc* headword in Köbler's Althochdeutsches Wörterbuch; etymon filled in siblings `ang þanc`/`non þǫkk`/`got 𐌸𐌰𐌲𐌺𐍃` (verified lines 514/516/517).
- **119-4 gmh thanks** — applied (orchestrator). → `["danc","daŋk"]`. MHG *danc* (Lexer); same sibling argument.
- **119-5 osx thanks** — applied (orchestrator). → `["thank","θaŋk"]`. Old Saxon *thank* (Heliand; Köbler Altsächsisches Wörterbuch); ⟨th⟩ = /θ/ matching `ang` /θɑŋk/.
- **119-6 sga & mga thanks** — applied (orchestrator). `["atloirgaim","atloiɾɡim"]` → `["atlochur","atloxur"]` (both). eDIL headword is *ad-tluichethar* with attested 1sg deponent *atlochur/atluchur* ("atluchur bude" 'I give thanks', per eDIL and An Etymological Dictionary of the Gaelic Language). No form *atloirgaim* exists — it is a corruption. Lenited ⟨ch⟩ = /x/ matches row style.
- **119-7 sga & mga hello** — applied (orchestrator). → `["fochen","foxʲen"]` (both). eDIL *fochen* 'welcome' (variant of *mochen*), conventionalised saga salutation; consistent with dataset's practice of filling ancient-lect `hello` for attested greeting formulae (`goh heil`, `gmh gegrüezet`, etc.).
- **119-8 oar hello** — applied (orchestrator). → `['שלם','ʃəlaːm']`. Old Aramaic epistolary *šlm* greeting (Hermopolis/Elephantine; Porten & Yardeni TAD) is the genre salutation; siblings `phn 𐤔𐤋𐤌`, `hbo שלום`, `arc ܫܠܡܐ`, `uga 𐎌𐎍𐎎` all fill it. `oar` uses Hebrew square script elsewhere (water מין, father אב), so שלם is script-consistent. (Kept single-quote string style of the existing cell.)
- **119-9 uga thanks** — applied (orchestrator). `["𐎁𐎗𐎋","baːriku"]` → `["—","—"]`. Ugaritic *b-r-k* is 'to bless' (DUL), deity→human; no conversational thank-you attested. Over-claim; em-dash per closed-corpus policy (`hit/sux/peo/ave/gmy thanks` = —). `uga hello` šlm untouched (correctly attested).
- **119-10 phn & xpu thanks** — applied (orchestrator). `["𐤁𐤓𐤊","barak"]` → `["—","—"]` (both). Phoenician/Punic *brk* 'to bless' (Krahmalkov); deity blesses dedicant, no gratitude formula attested. Same corpus-bounded em-dash policy.
- **119-11 xsa thanks** — applied (orchestrator). `["𐩦𐩫𐩧","ʃakar"]` → `["𐩢𐩣𐩵","ħamad"]`. Sabaic gratitude root is *ḥmd* (*f-ḥmdw* 'and they thanked', *ḥmdm b-ḏt…*; Beeston et al. Sabaic Dictionary; corroborated by Almaqah-dedication literature). š-k-r is Arabic back-projection. Conventional CaCaC vocalisation /ħamad/ matches row's `ʔakal`/`ʃataja`.
- **119-12 chb thanks** — applied (orchestrator). `["chibchachoa","tʃibtʃatʃoa"]` → `["—","—"]`. Muisca is a closed colonial corpus; *chibchachoa* is not attested in Lugo 1619 / González de Pérez 1987 / muysca.cubun.org and decomposes suspiciously (ethnonym *chibcha* + *cho* 'good' + *-a*). `chb hello: chibu` is genuinely sourced and untouched. Em-dash per closed-corpus policy.

Open items deliberately left: 0.

---

## Reviewer round-2 response (再評価 round-2)

I re-verified all 12 claimed fixes against the LIVE data files (not the worker's prose). Every claimed value is physically present:

- **119-1 ykg tree** ✓ — `words/tree.js:141` = `["саал", "saːl"]`. Tundra Yukaghir *saal* 'tree/wood/forest', core Swadesh item. Accept.
- **119-2 mez thanks** ✓ — `words/thanks.js:339` = `['Wāēwāēnen', 'wɛːwɛːnen']`. Menominee gratitude word; same sheet `hello: Posoh` was harvested. Accept.
- **119-3 goh thanks** ✓ — `:908` = `["danc", "daŋk"]`. Etymon filled in siblings `ang þanc` (514), `non þǫkk` (516), `got 𐌸𐌰𐌲𐌺𐍃` (517) verified. Accept.
- **119-4 gmh thanks** ✓ — `:920` = `["danc", "daŋk"]`. MHG Lexer headword. Accept.
- **119-5 osx thanks** ✓ — `:924` = `["thank", "θaŋk"]`. Note `ofs: ["thank","θank"]` at line 515 already filled the same form for Old Frisian, reinforcing the sibling argument. Accept.
- **119-6 sga & mga thanks** ✓ — `:939` & `:953` both = `["atlochur", "atloxur"]`. Ghost form *atloirgaim* removed; eDIL-attested deponent 1sg *atlochur* in place. Accept.
- **119-7 sga & mga hello** ✓ — `hello.js:932` & `:946` both = `["fochen", "foxʲen"]`. eDIL *fochen* 'welcome', attested saga salutation. Accept.
- **119-8 oar hello** ✓ — `hello.js:387` = `['שלם', 'ʃəlaːm']`. Hebrew square script consistent with `oar` water `מין` and father `אב` (verified). Sibling *šlm* formula filled across NW Semitic. Accept.
- **119-9 uga thanks** ✓ — `:900` = `["—", "—"]`. 'Bless' over-claim removed; consistent with closed-corpus em-dashes `sux`(527)/`hit`(529)/`peo`(895)/`ave`(896)/`gmy`(910). `uga hello 𐎌𐎍𐎎` correctly untouched. Accept.
- **119-10 phn & xpu thanks** ✓ — `:899` & `:913` both = `["—", "—"]`. 'Bless' over-claim removed both lects. Accept.
- **119-11 xsa thanks** ✓ — `:916` = `["𐩢𐩣𐩵", "ħamad"]`. Sabaic *ḥmd* gratitude root replaces Arabic-back-projected š-k-r; CaCaC vocalisation matches row siblings `eat ʔakal` / `drink ʃataja` (verified). Accept.
- **119-12 chb thanks** ✓ — `:1022` = `["—", "—"]`. Unattested *chibchachoa* em-dashed per closed-corpus policy; `chb hello chibu` (sourced) correctly retained. Accept.

### New issues
None. The fixes are clean, the substitutions are sourced, and I found no collateral errors during cross-verification of the cited sibling rows.

### Scorecard
12/12 accepted (✓). 0 partial, 0 rejected, 0 missing-from-live-data, 0 new issues. Every over-claim correction (uga/phn/xpu/chb) is consistent with the dataset's own closed-corpus em-dash discipline, and every coverage-hole fill (ykg/mez/goh/gmh/osx/sga/mga/oar) and ghost-form correction (sga/mga *atlochur*, xsa *ḥmd*) is dictionary-grounded and present in the live files.

**File status: CLOSED** — nothing left to address.
