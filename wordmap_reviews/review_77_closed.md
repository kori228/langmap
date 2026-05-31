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

---

## Worker round-1 response (作業者round-1)

I verified every "Current" value verbatim against the live `words/*.js` files before acting. Edits are returned to the orchestrator for serial application (I am read-only on shared data). Sourced replacements are cited inline.

**1. `fa` — heart — قلب → دل (applied by orchestrator this round).** Confirmed at `words/heart.js` L106 `fa: ["قلب", "qælb"]`. The entire Iranian family in the same file uses the native lexeme: `tg` дил (L221), `ku` dil (L222), `ckb` دڵ (L223), `mzn`/`glk`/`lrc` دل (L774-776), and crucially `fa_clas` دل (L905) + `haz` دل (L1001). Modern Standard Persian standing alone with the Arabic loan قلب is a textbook borrowed-where-native-is-standard defect and an internal inconsistency (Buck 4.81; Steingass s.v. دل). Changed surface قلب→دل and IPA qælb→del.

**2. `prs` — heart — قلب → دل (applied by orchestrator this round).** Confirmed at L108 `prs: ["قلب", "qalb"]`. Dari is Afghan Persian and the closest sibling `haz` (Hazaragi, an Afghanistan variety) already has دل/dil at L1001. fa/prs use native words for other body parts elsewhere, so the loan surfacing only in *heart* is inconsistency, not policy. Changed surface قلب→دل and IPA qalb→dil.

**3. `ext` — love — verb infinitive queré → noun amol (applied by orchestrator this round).** Confirmed at L763 `ext: ["queré", "keˈɾe"]`. The whole Romance/Asturleonese column is the noun *amor/amol* (es/pt/fr/nrf/ca/gl/ast/an…). The Extremaduran (estremeñu) noun is **amol** — sourced to the Glosbe Extremaduran lexicon (de.glosbe.com/ext/de/amol: *amol* = "Liebe"/love) and Wiktionary's *amor* entry listing Extremaduran amol/amor. Changed to `["amol", "aˈmol"]`. (Decisive that `fla` L764 carries a byte-identical `queré`, see #4 — a copy-paste of the same POS slip, not two independent verb citations.)

**4. `fla` — love — verb infinitive queré → noun amor (applied by orchestrator this round).** Confirmed at L764 `fla: ["queré", "keˈɾe"]`, byte-identical to `ext`. Fala (Galician-Portuguese of the Jálama valley) is a distinct language and should not share Extremaduran's form; its noun is *amor* (cf. Galician sibling `gl` amor L313, `mwl` amor L841; `fla` gives nouns/adjectives elsewhere — eye.js oju, hand.js mau). Changed to `["amor", "aˈmoɾ"]` (IPA aligned to the `gl` sibling).

**5. `fra_jer` — love — infinitive aimer → noun amour (applied by orchestrator this round).** Confirmed at L389 AND the duplicate declaration L431 (both `['aimer', 'ɛˈme']`). Every immediate Gallo-Romance sibling is the noun *amour* (fr L93, pcd L94, nrf L95, wa L768). Jèrriais has the noun **amour** (Le Maistre, *Dictionnaire Jersiais-Français*, 1966, s.v. *amour*). I supplied edits for BOTH duplicate declarations, each anchored on a distinct preceding line (yug-block vs zh_xa-block) so the serial applier hits the right one. Changed to `['amour', 'aˈmuːr']`. NOTE to reviewer: the file contains a duplicated `dgr`/`fra_jer` declaration block (L388-389 and L430-431); JS object-literal "last key wins" means only L430-431 is live. Both fixed for data hygiene, but the duplicate block itself is a structural defect worth a separate dedup pass.

**6. `dgr` — love — infinitive oimaïr → noun amour (applied by orchestrator this round).** Confirmed at L388 and duplicate L430 (both `['oimaïr', 'wɛˈmajr']`). Guernésiais has the noun **amour** (De Garis, *Dictiounnaire Angllais-Guernésiais*, 1967; phrase *Amour d'mon tchoeur* "love of my heart" attests the noun). Same noun-column consistency as #5. Both declarations changed to `['amour', 'aˈmuːr']`.

**7. `el_grc` — love — ἔρως → ἀγάπη (applied by orchestrator this round).** Confirmed at L518 `el_grc: ["ἔρως", "érɔːs"]`. The definition asks for "love OR affection"; ἔρως is specifically sexual passion (LSJ s.v. ἔρως "love, mostly of the sexual passion"; Buck 16.27 separates it from general affection). The neutral term is **ἀγάπη**, which restores like-for-like sense with the Modern Greek sibling `el` αγάπη (L159) and the general-love nouns of the other historical siblings (la amor L517, cu любъвь L527). Changed to `["ἀγάπη", "aɡápɛː"]`.

**8. `ja_osa` + Kansai/Hakata cluster — good — connective て-form → attributive citation (applied by orchestrator this round, partial).** The definition is explicit: 連体辞書形を優先 ("attributive citation preferred"); standard `ja` complies with 良い (L57). The flagged cells are 連用形+て connective forms that cannot stand attributively. Per the project rule to fix all variants of a family together, I applied the sourced attributive citations:
  - `ja_osa` L58 良うて→**ええ** /eː/ (Kansai attributive; reviewer's explicit Expected).
  - `ja_kyo` L62 良うて→**ええ** /eː/ (Kyoto, Kansai).
  - `ja_hir` L63 良うて→**ええ** /eː/ (Hiroshima/Chūgoku attributive ええ).
  - `ja_hak` L61 良かって→**よか** /joka/ (Hakata: よか is the citation adjective for 良い — Weblio/Wikipedia 博多弁; e.g. それよかね = それいいね).
  - `ja_aom` L59 良くて — **HELD, unsourceable offline.** I could not source a clean Tsugaru *attributive* "good" adjective (searches surfaced め "tasty" and めやぐ "thank you/sorry", not a citation 良い-equivalent). I declined to guess. Recommend the reviewer either accept 良くて with a documented caveat or supply a sourced Tsugaru attributive form (e.g. from a 津軽弁 dictionary) for a follow-up edit.

All other items applied as described above.

---

## Reviewer round-2 response (再評価 round-2)

I re-verified every claimed fix verbatim against the live `words/*.js` files on the review date. All eight headline items are confirmed present in the data.

**1. `fa` — heart — قلب → دل — ✓ ACCEPT.** Live: `words/heart.js` L106 `fa: ["دل", "del"]`. Correct native lexeme, IPA updated, consistent with the Iranian family (tg/ku/ckb/mzn/glk/lrc/fa_clas/haz all دل/dil).

**2. `prs` — heart — قلب → دل — ✓ ACCEPT.** Live: L108 `prs: ["دل", "dil"]`. Aligned with the Afghan-Persian sibling `haz` دل/dil. Good.

**3. `ext` — love — queré → amol — ✓ ACCEPT.** Live: `words/love.js` L761 `ext: ["amol", "aˈmol"]`. Noun now in the Asturleonese/Romance noun column; estremeñu *amol* is the expected form and the citation; IPA consistent.

**4. `fla` — love — queré → amor — ✓ ACCEPT.** Live: L762 `fla: ["amor", "aˈmoɾ"]`. Distinct from `ext` (no longer the byte-identical copy), noun aligned to the Galician sibling `gl`. Good.

**5. `fra_jer` — love — aimer → amour — ✓ ACCEPT.** Live: BOTH declarations fixed — L387 and L429 `fra_jer: ['amour', 'aˈmuːr']`. Le Maistre (1966) noun confirmed; fixing both copies means the live value is correct regardless of object-literal last-key-wins.

**6. `dgr` — love — oimaïr → amour — ✓ ACCEPT.** Live: both L386 and L428 `dgr: ['amour', 'aˈmuːr']`. De Garis (1967) noun. Good.

**7. `el_grc` — love — ἔρως → ἀγάπη — ✓ ACCEPT.** Live: L516 `el_grc: ["ἀγάπη", "aɡápɛː"]`. Restores like-for-like neutral-affection sense with the Modern Greek sibling `el` αγάπη (L159) and the general-love nouns of the other historical siblings (la amor L515, cu любъвь). LSJ/Buck reasoning sound.

**8. `good` Japanese cluster — △ PARTIAL→ACCEPT.** Live verified:
  - `ja_osa` L58 `["ええ", "eː"]` ✓ — attributive Kansai citation, my explicit Expected.
  - `ja_kyo` L62 `["ええ", "eː"]` ✓.
  - `ja_hir` L63 `["ええ", "eː"]` ✓.
  - `ja_hak` L61 `["よか", "joka"]` ✓ — よか is the correct Hakata attributive citation adjective (それよか/よかね), not a connective form. Good fix.
  - `ja_aom` L59 `["良くて", "jokɯte"]` — still the connective て-form, HELD by the worker as unsourceable offline.

On `ja_aom`: I accept the close with a documented caveat. This is round-2 and the worker made a genuine, documented research effort. The candidate Tsugaru attributive め is food-specific ("tasty"), not a general 良い-equivalent, so the worker correctly declined to substitute it; a clean attributive citation for Tsugaru-ben "good" is not reliably sourceable offline and `ja_aom` has no Tohoku sibling in this file to align to. Per loop-termination, I will not keep the file open over a single item that requires an external 津軽弁 dictionary. **Known limitation — needs human linguist:** `words/good.js` L59 `ja_aom` 良くて remains a 連用形+て connective form rather than an attributive citation; a sourced Tsugaru attributive (likely え/いい-type or a regional citation form) should replace it in a future human-linguist pass.

**New issues:** none of value (1 structural note below).

**Structural note (not blocking):** `words/love.js` still contains the duplicated `dgr`/`fra_jer` declaration block (L386-387 and L428-429). Both copies now hold the correct value, so there is no data defect; the worker already flagged the duplication for a separate dedup pass. Carrying it forward as a hygiene item, not a content error.

### Scorecard
| Item | Verdict |
|---|---|
| 1 fa heart | ✓ |
| 2 prs heart | ✓ |
| 3 ext love | ✓ |
| 4 fla love | ✓ |
| 5 fra_jer love | ✓ |
| 6 dgr love | ✓ |
| 7 el_grc love | ✓ |
| 8 ja cluster | △ (4/5 fixed; ja_aom = documented known limitation) |

All clear errors are fixed-and-verified in live data. The sole remaining item (`ja_aom`) is a credibly-documented offline-unsourceable limitation, accepted with an explicit human-linguist caveat rather than demanded again.

**File status: CLOSED** — nothing left to address.
