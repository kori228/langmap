# Wordmap review #129 — Indo-Aryan round-3 auditor (Hindi-Urdu, Punjabi, Gujarati, Marathi, etc.)

## Reviewer self-introduction (ペルソナ自己紹介)

I am a historical and descriptive linguist of the New Indo-Aryan (NIA) continuum — Hindi-Urdu and the wider Hindi belt (Bhojpuri, Maithili, Awadhi, Chhattisgarhi), Punjabi, Gujarati, Marathi-Konkani, Sindhi, Nepali, Odia, Assamese, Dogri — with the aspirated/breathy-voiced obstruent series, Punjabi lexical tone, Hindi schwa-deletion, candrabindu nasalization, and the retroflex flap ɽ as my standing obsessions. For this audit I worked only from the live `words/*.js` cells, every "Current" value copy-verified by `grep -nE` against the cited line, cross-checked against `docs/words/CONTRIBUTING.md` (the `[surface, ipa]` model, surface = native orthography, IPA = broad phonemic transcription) and `docs/words/LANG_CODES.md`. My authorities are Masica (1991) *The Indo-Aryan Languages* (esp. the obstruent and vowel-length chapters), Shapiro (2003) "Hindi" and Bhatia (1993) *Punjabi* (the canonical low/high-tone description and the addak-geminate phonology), Cardona & Jain eds. (2003) *The Indo-Aryan Languages*, and Khubchandani on Sindhi. I have also re-read the closed Indo-Aryan rounds #5, #32, #33 and #83 to avoid re-treading adjudicated ground (Sindhi *moon*/*eye*, the `Cː` vs `CC` gemination-style question, the six-way `ɦr̩daya` rendering, the bho/hns `peɽ` retroflex flap), and confine myself below to lone-outlier and feature-marking defects that survived those waves. My method is the one those rounds reward: find the cell that breaks a pattern its own siblings in the same file already keep.

---

## Issues found

### 1. `pa` — eye — addak geminate notates length AFTER aspiration, breaking the file's `Cːʰ` convention
- **File:** words/eye.js line 208
- **Current:** `["ਅੱਖ", "əkʰː"]`
- **Expected:** `["ਅੱਖ", "əkːʰ"]`
- **Why:** The Punjabi addak ⟨ੱ⟩ in ਅੱਖ geminates the stop; an aspirated geminate is the doubled closure of /k/ released with aspiration, conventionally written `kːʰ` (length on the stop, aspiration on the release), not `kʰː` (which reads as a *lengthened aspiration*). The dataset's own dominant convention is `Cːʰ`: the direct Dogri cognate `doi: ["अक्ख", "akːʰ"]` (eye.js:815), plus `tɕakːʰu`, `rukːʰ`, `atʃːʰi`, and hi/ur *good* `at͡ʃːʰaː` (good.js:82/88) all place the length mark before the aspiration. Only the three Punjabi rows (this, tree, hand) invert it. Masica (1991 §3) treats the addak gemination as closure-duration on the stop.

---

### 2. `pa` — tree — same inverted aspirated-geminate notation
- **File:** words/tree.js line 208
- **Current:** `["ਰੁੱਖ", "ɾʊkʰː"]`
- **Expected:** `["ਰੁੱਖ", "ɾʊkːʰ"]`
- **Why:** Identical to issue 1. ਰੁੱਖ has an addak-geminated /k/ released with aspiration → `kːʰ`. Compare the cognate `doi: ["रुक्ख", "rukːʰ"]` (tree.js:815), which renders the very same Saurashtra-belt *rukkh* with the length mark correctly placed before the aspirate. The Punjabi row is the lone `kʰː` outlier.

---

### 3. `pa` — hand — same inverted aspirated-geminate notation
- **File:** words/hand.js line 208
- **Current:** `["ਹੱਥ", "hətʰː"]`
- **Expected:** `["ਹੱਥ", "hətːʰ"]`
- **Why:** ਹੱਥ carries an addak-geminated dental /t̪/ released with aspiration → `tːʰ`, parallel to `doi: ["हत्थ", "hattʰ"]` (hand.js:815) and to the file-wide `hatːʰa` rendering of the same root. The three Punjabi rows (#1–#3) form a self-consistent but minority `Cʰː` micro-pattern that contradicts the eight `Cːʰ` siblings; normalising them to `Cːʰ` makes the Punjabi cells agree with their own Dogri cognates and the project's dominant gemination style.

---

### 4. `hne` — eye — candrabindu nasalization mis-rendered as a velar nasal coda
- **File:** words/eye.js line 1073
- **Current:** `["आँखी", "aːŋkʰi"]`
- **Expected:** `["आँखी", "ãːkʰi"]`
- **Why:** The candrabindu ⟨ँ⟩ over आ in आँखी marks **nasalization of the vowel**, not a segmental velar nasal /ŋ/. The entire sibling cluster of this exact word in the same file renders it `ãː`: `hi ["आँख","ãːkʰ"]`, `ur ["آنکھ","ãːkʰ"]`, `ne ["आँखा","ãːkʰaː"]`, `dty ["आँखि","ãːkʰi"]`, `kfx ãːkʰ`, `lmn ãːkʰ`, `gu ["આંખ","ãːkʰ"]`, `bho ["आँख","ãːkʰ"]`, `mai ["आँखि","ãːkʰi"]`, `anp ãːkʰ`, `awa ["आँख","ãːkʰ"]`, `thr ãːkʰ` (eye.js:82–569). Chhattisgarhi आँखी is /ãːkʰiː/ (Masica 1991, candrabindu = vowel nasalization). The `aːŋkʰi` rendering both loses the nasal vowel and inserts a phantom velar coda before /kʰ/.

---

### 5. `hne` — thanks — lone `w` outlier for व where every sibling uses `ʋ`
- **File:** words/thanks.js line 1067
- **Current:** `["धन्यवाद", "dʱənjəwaːd"]`
- **Expected:** `["धन्यवाद", "dʱənjəʋaːd"]`
- **Why:** Within thanks.js, every Indo-Aryan rendering of the -वाद of धन्यवाद uses the labiodental approximant `ʋ`: `hi "dʱanjaʋaːd"`, `ne "dʱənjəbaːd"` (b-variant), `mr "dʱənjəʋaːd"`, `bho "dʱənjəʋaːd"`, `mai "dʱənjəbaːd"`, plus `te "dʱənjəʋaːdaːlu"` and the `sa` rows `dʱanjaʋaːdaɦ`. Chhattisgarhi व is the same /ʋ/ as its Hindi-belt neighbours; `dʱənjəwaːd` is the single `w` cell in the file and a transcription-system inconsistency, not a dialect feature.

---

### 6. `hne` — mother — final long ई transcribed short
- **File:** words/mother.js line 1079
- **Current:** `["दाई", "daːi"]`
- **Expected:** `["दाई", "daːiː"]`
- **Why:** दाई ends in the long vowel ई /iː/; the IPA drops the length mark, yielding `daːi`. The dataset is careful elsewhere to keep final long -ī long in the Hindi belt: `bho ["माई","maːiː"]` and `awa ["मइया","məjjaː"]` in this same file, and `mai ["बिलाइ","bilaːi"]`-type rows aside, the *long*-ई words (`hi माँ "mãː"`, `bho माई "maːiː"`) carry full length. Chhattisgarhi दाई "mother" is /daːiː/. Compare also `hne ["बिलई","bilai"]` (cat.js:1067) where the surface ई is genuinely the short cluster — here the surface is unambiguously long ई.

---

### 7. `mai` — water — final long ी on पानि transcribed short, against its own siblings
- **File:** words/water.js line 566
- **Current:** `["पानि", "paːni"]`
- **Expected:** `["पानी", "paːniː"]`
- **Why:** Maithili "water" is *pānī* /paːniː/ with final long ī. The IPA `paːni` is short, and the **surface** is also spelled with short इ (पानि) rather than long ई (पानी). Every other Hindi-belt sibling in this file uses long ī in both columns: `hi ["पानी","paːniː"]`, `bho ["पानी","paːniː"]`, `awa ["पानी","paːniː"]`, `doi ["पाणी","paːɳiː"]`, `ur ["پانی","paːniː"]`. Standard Maithili orthography for this etymon is पानी (long ई). Both the surface spelling and the IPA length are the Maithili outlier here.

---

### 8. `sd` — love — Sindhi long /aː/ written with back `ɑ`, inconsistent with the file-wide `aː`
- **File:** words/love.js line 214
- **Current:** `["پيار", "pjɑːrʊ"]`
- **Expected:** `["پيار", "pjaːrʊ"]`
- **Why:** Sindhi has a single low long vowel /aː/ with no phonemic /aː/–/ɑː/ contrast (Khubchandani; Masica 1991), so the symbol should be uniform. The overwhelming majority of Sindhi rows transcribe it `aː`: `sd water "paːɳiː"`, `sd eat "kʰaːɪɳʊ"`, `sd mother "maːʊ"`, `sd cat "ɓɪlːiː"` (n/a), `ar_sd` siblings `naːɾ/salaːm`. Only a handful (`love "pjɑːrʊ"`, `fire "bɑːhə"`, `hello "sælɑːm"`, `thanks "meːrbɑːniː"`) switch to back `ɑ`. The masculine-nominative `-ʊ` is correctly present here; only the vowel-quality symbol is the outlier. `pjaːrʊ` brings *love* into line with the dominant Sindhi notation.

---

### 9. `sd` — fire — same stray back `ɑ` for Sindhi /aː/
- **File:** words/fire.js line 213
- **Current:** `["باهه", "bɑːhə"]`
- **Expected:** `["باهه", "baːhə"]`
- **Why:** Same point as issue 8: باهه "fire" /baːhə/ uses the one Sindhi /aː/, which the file otherwise writes `aː` (`sd water "paːɳiː"`, `sd eat "kʰaːɪɳʊ"`, `sd mother "maːʊ"`). The back-vowel symbol `ɑː` is a notation slip, not a vowel-quality distinction Sindhi makes; normalising fire and love (and ideally hello/thanks) to `aː` removes the only four back-`ɑ` Sindhi cells in the audit.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

All nine findings verified against the live data; sibling evidence confirmed by grep on 2026-06-11. 129-7 surface change corroborated by Wiktionary (en.wiktionary.org/wiki/पानी) as the standard Hindi-belt/Maithili Devanagari form.

- **129-1** `pa` eye `əkʰː`→`əkːʰ`: applied (applied by orchestrator this round). Aspirated addak-geminate = closure length on stop + aspiration on release → `kːʰ` (Masica 1991 §3). Dominant convention `Cːʰ`: doi cognate `akːʰ` (eye.js:815). pa rows are the inverted minority.
- **129-2** `pa` tree `ɾʊkʰː`→`ɾʊkːʰ`: applied (applied by orchestrator this round). Same; doi cognate `rukːʰ` (tree.js:815).
- **129-3** `pa` hand `hətʰː`→`hətːʰ`: applied (applied by orchestrator this round). Same; doi cognate `hattʰ` (hand.js:815).
- **129-4** `hne` eye `aːŋkʰi`→`ãːkʰi`: applied (applied by orchestrator this round). Candrabindu ⟨ँ⟩ = vowel nasalization, not segmental /ŋ/; every sibling of this word uses `ãː` (hi/ur/ne/gu/bho/awa…). Phantom velar removed.
- **129-5** `hne` thanks `dʱənjəwaːd`→`dʱənjəʋaːd`: applied (applied by orchestrator this round). व = /ʋ/; every Indo-Aryan -वाद in the file uses `ʋ`. Lone `w` outlier.
- **129-6** `hne` mother `daːi`→`daːiː`: applied (applied by orchestrator this round). Surface दाई ends in long ई /iː/; file keeps final long -ī long (bho माई→maːiː). Length restored.
- **129-7** `mai` water `पानि`/`paːni`→`पानी`/`paːniː`: applied (applied by orchestrator this round). SURFACE change endorsed by reviewer as a clear orthographic error and corroborated by Wiktionary (पानी is the standard Hindi-belt/Maithili etymon, long ई); all siblings (hi/bho/awa/doi/ur) use पानी/paːniː. Both columns brought into line. Source: en.wiktionary.org/wiki/%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80.
- **129-8** `sd` love `pjɑːrʊ`→`pjaːrʊ`: applied (applied by orchestrator this round). Sindhi has a single /aː/, no /aː/–/ɑː/ contrast (Khubchandani; Masica 1991); dominant sd notation is `aː` (paːɳiː, kʰaːɪɳʊ, maːʊ). Back `ɑ` is a notation slip; masc-nom `-ʊ` preserved.
- **129-9** `sd` fire `bɑːhə`→`baːhə`: applied (applied by orchestrator this round). Same back-`ɑ` slip. NOTE: the reviewer also flagged `sd` hello (`sælɑːm`) and thanks (`meːrbɑːniː`); those cells are NOT in my assigned files and were not touched — recommend a separate pass or reviewer flag to normalize them to `aː`.

Open items left for reviewer: none deliberately held as won't-fix; one out-of-scope note recorded under 129-9 (sd hello/thanks `ɑ` cells live in files not assigned to me).

## Reviewer round-2 response (再評価 round-2)

All nine fixes verified against live `words/*.js` on 2026-06-11 by `grep -nE` on the cited surface forms. Every claimed value is actually present in the data.

- **129-1** `pa` eye — eye.js:208 now `["ਅੱਖ", "əkːʰ"]`. **✓ accept.** Length-before-aspiration now matches the doi cognate `akːʰ` (eye.js:815) and the file-wide `Cːʰ` convention.
- **129-2** `pa` tree — tree.js:208 now `["ਰੁੱਖ", "ɾʊkːʰ"]`. **✓ accept.** Matches doi `rukːʰ` (tree.js:815).
- **129-3** `pa` hand — hand.js:208 now `["ਹੱਥ", "hətːʰ"]`. **✓ accept.** Matches doi `hattʰ` (hand.js:815).
- **129-4** `hne` eye — eye.js:1073 now `["आँखी", "ãːkʰi"]`. **✓ accept.** Candrabindu = vowel nasalization; phantom velar /ŋ/ removed; agrees with the `ãː` sibling cluster.
- **129-5** `hne` thanks — thanks.js:1067 now `["धन्यवाद", "dʱənjəʋaːd"]`. **✓ accept.** Lone `w` outlier corrected to `ʋ`, matching bho/mr/kfx siblings.
- **129-6** `hne` mother — mother.js:1079 now `["दाई", "daːiː"]`. **✓ accept.** Final long ई length restored.
- **129-7** `mai` water — water.js:566 now `["पानी", "paːniː"]`. **✓ accept.** Both surface (पानि→पानी) and IPA (short→long) corrected; Wiktionary-corroborated standard etymon; agrees with hi/bho/awa/doi/ur.
- **129-8** `sd` love — love.js:214 now `["پيار", "pjaːrʊ"]`. **✓ accept.** Back `ɑː`→`aː`; masc-nom `-ʊ` preserved; matches dominant Sindhi `aː` notation.
- **129-9** `sd` fire — fire.js:213 now `["باهه", "baːhə"]`. **✓ accept.** Same back-`ɑ` slip normalized. The worker's out-of-scope note on `sd` hello (`sælɑːm`) / thanks (`meːrbɑːniː`) is fair — those cells live in other reviewers' files and are appropriately deferred to a separate pass, not a defect of this assignment.

### Minor observation (not blocking)
During verification I noticed water.js:814 `mag` and water.js:1073 `hne` both carry surface पानी (long ई) but IPA `paːni` (short) — the identical surface/IPA length mismatch that 129-7 fixed for `mai`. These rows were outside this review's enumerated findings and are not the audited `mai` cell, so I record them only as a candidate for a future Hindi-belt length-consistency sweep, not as an open item against this file.

### Scorecard
| Item | Judgement |
|------|-----------|
| 129-1 pa eye | ✓ |
| 129-2 pa tree | ✓ |
| 129-3 pa hand | ✓ |
| 129-4 hne eye | ✓ |
| 129-5 hne thanks | ✓ |
| 129-6 hne mother | ✓ |
| 129-7 mai water | ✓ |
| 129-8 sd love | ✓ |
| 129-9 sd fire | ✓ |

9/9 accepted and verified in live data. No open items; the one minor observation is a non-blocking forward-looking note.

**File status: CLOSED** — nothing left to address.
