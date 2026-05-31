# Wordmap review #60 — Continental West Germanic (Dutch/Frisian/Low German/Afrikaans) specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a phonologist specialising in the Continental West Germanic dialect continuum: Standard Dutch (nl) and its southern Limburgish (li) periphery, the three Frisian branches (West Frisian fy, North Frisian/Mooring frr, Saterland Frisian stq), the Low Saxon/Low German group (nds), the Ripuarian Kölsch (ksh), the Pennsylvania (pdc) and Plautdietsch (pdt) emigrant Germans, Afrikaans (af), and the Alemannic spread (gsw, Walliser gsw_w, Walser wae, Swabian swg, East Franconian vmf, Bavarian bar). My core references for this review are: **Van Dale Groot woordenboek van de Nederlandse taal** (15th ed.) for Standard Dutch lemma and pronunciation norms; **Collins & Mees, *The Phonetics of English and Dutch*** (5th ed., 2003) for the Dutch consonant/vowel system, the ⟨w⟩ = /ʋ/ approximant, the /v/–/f/ contrast and word-final obstruent devoicing; **Booij, *The Phonology of Dutch*** (1995) for syllable-final devoicing and /n/-deletion; **Tiersma, *Frisian Reference Grammar*** (1985) for West Frisian; **Fort, *Saterfriesisches Wörterbuch*** for stq; **Lass, *The Sounds of Afrikaans*** and Donaldson's *A Grammar of Afrikaans* for the Afrikaans long-vowel system; and the **SAOB/Lindow et al. *Niederdeutsche Grammatik*** for Low German. My focus areas are word-initial /v/ vs [f], final devoicing, the ui/ij diphthongs, Afrikaans long vowels, Low German long vowels, surface=ipa copies, and missing stress/length marks.

---

## Issues found

### 1. `af` — eat — Afrikaans ⟨ee⟩ wrongly transcribed as [iː]
- **File:** `words/eat.js` line 282
- **Current:** `["eet", "iːt"]`
- **Expected:** `["eet", "eːt"]`
- **Why:** Afrikaans ⟨ee⟩ is the long close-mid front vowel /eː/, not the close /iː/ (Donaldson 1993; Lass, *The Sounds of Afrikaans*). The verb *eet* is [eːt]. [iːt] would correspond to a spelling ⟨ie⟩, which does not exist here. The same vowel grapheme is handled correctly elsewhere only by accident; this is a clear vowel-quality error.

---

### 2. `af` — one — numeral *een* given the indefinite-article vowel [iː]
- **File:** `words/one.js` line 288
- **Current:** `["een", "iːn"]`
- **Expected:** `["een", "eːn"]`
- **Why:** Afrikaans famously distinguishes the numeral *één* /eːn/ "one" from the indefinite article *’n* [ə]. The numeral has long /eː/ (⟨ee⟩), so the correct transcription is [eːn]. [iːn] again imports a non-existent /iː/ reading. Cf. the Dutch cognate nl *een* "one" on line 160 of the same file, correctly given as [eːn].

---

### 3. `af` — tree — ⟨oo⟩ rendered as [uː] instead of the Afrikaans diphthong/[oː]
- **File:** `words/tree.js` line 282
- **Current:** `["boom", "buːm"]`
- **Expected:** `["boom", "boːm"]` (or diphthongal `[bʊəm]`)
- **Why:** Afrikaans ⟨oo⟩ is /oː/, frequently diphthongised to [ʊə] in the standard accent (Lass; Wissing in *Taalkommissie* phonology). It is never a plain long [uː] (that value belongs to ⟨oe⟩, as in *boek* [buk]). [buːm] misassigns the ⟨oe⟩ vowel to an ⟨oo⟩ word. Compare Dutch nl *boom* line 160 = [boːm], the correct value.

---

### 4. `af` — eye — same ⟨oo⟩ → [uː] error in *oog*
- **File:** `words/eye.js` line 282
- **Current:** `["oog", "uːx"]`
- **Expected:** `["oog", "oːx"]` (or `[ʊəx]`)
- **Why:** Identical to Issue 3: *oog* has ⟨oo⟩ = /oː/(~[ʊə]), not [uː]. The final velar fricative [x] is correct, but the nucleus must be /oː/. Cf. Dutch nl *oog* (eye.js line 160) correctly [oːx].

---

### 5. `nds` — drink — English approximant [ɹ] used in a Low German word
- **File:** `words/drink.js` line 289
- **Current:** `["drinken", "dɹɪŋkn"]`
- **Expected:** `["drinken", "drɪŋkn̩"]`
- **Why:** The English-style alveolar approximant [ɹ] has no place in Low German /r/, which is an apical trill/tap or (post-vocalically) the vocalised [ɐ]. Every other nds entry in this dataset uses [r] or [ɐ] (e.g. nds *Vader* fɑːdɐ, nds *Hart* haɐt). [dɹ-] is a stray Anglicism and is internally inconsistent. Note also the syllabic nasal should carry the syllabicity diacritic: [kn̩].

---

### 6. `fy` — water — West Frisian initial ⟨w⟩ should be /v/ but better as the labiodental, and the vowel is short where Frisian has half-long
- **File:** `words/water.js` line 498
- **Current:** `["wetter", "vɛtər"]`
- **Why:** West Frisian initial ⟨w⟩ before a vowel is the bilabial/labiodental /v/ — acceptable — but *wetter* has a short /ɛ/ followed by a geminate /t/; the transcription drops the gemination that distinguishes *wetter* (geminate) and conditions the short vowel. A more faithful value is [ˈvɛtər] with stress marked, since every Frisian polysyllable here lacks the stress mark that the Saterland Frisian (stq) entries do carry (cf. stq ˈvɔːtɐ). Flagged as a length/stress-marking inconsistency rather than an outright wrong segment.

---

### 7. `nl` — father — initial /v/ in *vader*: fine, but inconsistent with nl *fire*
- **File:** `words/father.js` line 160
- **Current:** `["vader", "vaːdər"]`
- **Why:** This is correct (Standard Dutch keeps a (partially) voiced [v] word-initially in careful speech; Collins & Mees 2003 §). The issue is consistency: nl *vuur* (fire.js line 160) is `["vuur", "vyːr"]` — there the long /yː/ is correctly marked, but note that in the increasingly common Randstad norm initial /v/ is realised [f] (Van de Velde's devoicing studies). If the dataset's policy is the conservative voiced norm, *vader* is right; flagging so the editors apply ONE policy to *vader*, *vuur*, *liefde* and the Afrikaans cognates uniformly.

---

### 8. `af` — water — initial ⟨w⟩ = [v] correct, but vowel/quality note
- **File:** `words/water.js` line 289
- **Current:** `["water", "vɑːtər"]`
- **Why:** Afrikaans ⟨w⟩ is [v] (correct here, contrasting with Dutch [ʋ]); good. However the same file's nl *water* (line 160) is `["water", "ʋaːtər"]` with the approximant [ʋ], and af correctly uses [v]. The two are right; I flag only that the Afrikaans first vowel is the back /ɑː/ — correct — but should be checked against the [aː]/[ɑː] policy used for nl, which uses front [aː]. The contrast af [ɑː] vs nl [aː] is genuine (Afrikaans backs ⟨a⟩); no change needed, recorded for the editors' QA pass.

---

### 9. `gsw` — water — odd half-long mark on intervocalic [sː]
- **File:** `words/water.js` line 291
- **Current:** `["Wasser", "vasːər"]`
- **Expected:** `["Wasser", "ˈvasər]` (or geminate `[ˈvasːər]` with stress)
- **Why:** The length mark on [sː] encodes a true Alemannic fortis/geminate /s/ (Swiss German preserves consonant gemination — Fleischer & Schmid 2006), so the [sː] is defensible. The real defect is the **missing primary stress**: every Alemannic disyllable should carry ˈ on the first syllable, and the parallel wae/gsw_w *Wasser* entries (vasːər / ʋasːər) likewise lack it. Either add stress to all or to none.

---

### 10. `vmf` — water — geminate marked but final schwa raises a consistency issue
- **File:** `words/water.js` line 294
- **Current:** `["Wasser", "vasːə"]`
- **Why:** East Franconian *Wasser* with apocope-tending final [ə] and a fortis [sː] is plausible, but the entry drops the final /r/ entirely (nds/gsw keep -ər/-ɐ). If the schwa already absorbs the /r/, that should be the vocalised [ɐ] as in the bar/nds entries, giving [ˈvasɐ]. As written it mixes a Standard-German-style [ə] with an Alemannic geminate and no stress mark. Flag for harmonisation with the bar *Wåssa* [vɔsɐ] treatment.

---

### 11. `pdt` — water — Plautdietsch *Wota*: missing length and questionable vowel
- **File:** `words/water.js` line 299
- **Current:** `["Wota", "vɔta"]`
- **Why:** Plautdietsch *Wota* (Standard Plautdietsch orthography) has the lowered/centralised long vowel from West Germanic *a* — typically [ʋoːta]/[voːtə] rather than short open [ɔ] (Mennonite Low German; cf. Cox/Driedger phonology). The transcription [vɔta] short-open-o with a full final [a] is closer to a spelling-pronunciation. At minimum the stressed vowel should be long. Recorded as a vowel-length/quality issue.

---

### 12. `li` — water — Limburgish *water* vowel length
- **File:** `words/water.js` line 500
- **Current:** `["water", "vatər"]`
- **Why:** Limburgish initial ⟨w⟩ = [v] is fine, but *water* in most Limburgish varieties has a long/half-long stressed nucleus (the cognate of Dutch /aː/), so [ˈvaːtər] is expected, not short [a]. The neighbouring nl entry has [ʋaːtər] with length; the Limburgish reflex is not shorter. Flagged as missing length. (Limburgish is also a tone language; the dataset's policy of omitting the push/drag-tone diacritic is noted but not faulted here.)

---

### 13. `frr` — water — North Frisian *weeter*: long [ɛː] good, but initial [v]
- **File:** `words/water.js` line 499
- **Current:** `["weeter", "vɛːtər"]`
- **Why:** The long [ɛː] for ⟨ee⟩ is correct for Mooring North Frisian, and the [v] for initial ⟨w⟩ is acceptable. The remaining gap is the **missing stress mark** ([ˈvɛːtər]) — consistent with the systemic under-marking of stress across the Frisian and Alemannic rows, while stq does mark it. One policy should be applied.

---

### 14. `fy` — fire — *fjoer* second-element length
- **File:** `words/fire.js` line 497
- **Current:** `["fjoer", "fjuːr"]`
- **Why:** West Frisian *fjoer* "fire" is the rising diphthong /jo/ → here rendered [fjuːr]. Tiersma (1985) gives the *fjoer* nucleus as the falling diphthong [uə]/[oə] rather than a plain long [uː]; the ⟨oe⟩ is [u(ə)]. A more faithful value is [fjuər]. Recorded as a vowel-quality (monophthong-for-diphthong) issue.

---

### 15. `ksh` — eye — Kölsch *Auch* vowel
- **File:** `words/eye.js` line 290
- **Current:** `["Auch", "aʊx"]`
- **Why:** Ripuarian/Kölsch *Auch* "eye" diphthong is correct as [aʊ], and final [x] is correct — but Kölsch ⟨au⟩ in this lexeme is typically the lower-onset [ɑu]/[aʊ] with a clearly velar [x]; the entry is essentially right. The flaggable point is that ksh, like the other German rows, omits the long-vowel/ stress information present in stq; here specifically check whether the editors intend [aux] vs [aʊx]. Minor; included for completeness of the ⟨au⟩ audit.

---

### 16. `pdc` — love — Pennsylvania German *liewe* intervocalic ⟨w⟩ = [v] vs [ʋ]
- **File:** `words/love.js` line 298
- **Current:** `["liewe", "liːvə"]`
- **Why:** In Pennsylvania German the intervocalic ⟨w⟩ in *liewe* (< Lieb-) is the labiodental approximant/fricative; [v] is acceptable, but the stressed long [iː] is right and the entry is largely sound. The genuine issue is the **noun vs verb sense**: the headword is the *noun* "love" (cf. nl *liefde*, af *liefde*, fy *leafde*), yet pdc gives *liewe* which is the **verb** "to love" / "dear". The expected noun is *Lieb* / *Liebe*. This is a word-sense mismatch with the rest of the row.

---

### 17. `pdt` — love — same noun/verb sense mismatch
- **File:** `words/love.js` line 299
- **Current:** `["leewen", "leːvən"]`
- **Why:** *leewen* (with the -en infinitive ending) is the Plautdietsch **verb** "to love/live-love", not the noun "love". The row elsewhere uses nouns (Dutch *liefde*, German-side *Leev/Liab/Liebe/Liebi*). Note ksh and nds in this same file give the noun *Leev* [leːf]. Expected pdt noun: *Leew* / *Leeftj*. Word-sense error parallel to Issue 16.

---

### 18. `bar` — water — Bavarian *Wåssa* initial [v] and rounded å
- **File:** `words/water.js` line 293
- **Current:** `["Wåssa", "vɔsɐ"]`
- **Why:** This entry is actually a model the others should follow: ⟨å⟩ = [ɔ] (Bavarian rounding of MHG /a/) and vocalised final [ɐ] are both correct. I flag only the **missing fortis/length** and **stress**: Bavarian *Wåssa* has a fortis [s] and initial stress, so [ˈvɔsɐ] (or [ˈvɔsːɐ]) would harmonise with the gsw/wae/vmf geminate treatment. Consistency item, not a wrong segment.

---

### 19. `stq` — good — Saterland Frisian *goud* diphthong onset
- **File:** `words/good.js` line 1096
- **Current:** `["goud", "ɡoʊt"]`
- **Why:** Saterland Frisian *goud* "good" is correctly final-devoiced to [t] (good ✓) and uses ⟨ou⟩. Fort's *Saterfriesisches Wörterbuch* gives the nucleus as [oːu̯]/[ou̯] — the offglide should be marked non-syllabic [ʊ̯] and ideally the onset is half-long. The bare [oʊ] reads as a centring English GOAT diphthong. Suggested [ˈɡoʊ̯t]. Length/glide-marking refinement.

---

### 20. `af` — hello — *hallo* final diphthong
- **File:** `words/hello.js` line 282
- **Current:** `["hallo", "ɦaləu"]`
- **Why:** Afrikaans final ⟨o⟩ in *hallo* is the long /oː/ or the diphthong [ʊə]; [əu] (a schwa-onset GOAT glide) misrepresents the open final vowel of this greeting and is unusual for Afrikaans, which lacks an [əu] phoneme in this position. Expected [ɦaˈloː] / [ɦaˈlʊə]. The initial [ɦ] (voiced glottal) is correctly Afrikaans. Vowel-quality issue.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

Editing policy applied: only clear, unambiguous local errors / internal inconsistencies are fixed. Stress/length-marking flags that the reviewer explicitly frames as system-wide policy choices ("one policy should be applied") are held — they are convention decisions for the editors, not local data bugs.

**1. `af` eat — `eet` [iːt] → [eːt]** — APPLIED (applied by orchestrator this round). Afrikaans ⟨ee⟩ = /eː/, never /iː/ (Donaldson 1993; Lass). Confirmed internally: the nl cognate in the same file (`eat.js` nl `eten` = `eːtə`) uses [eː]. Clear vowel-quality error. Only the IPA nucleus changed.

**2. `af` one — `een` [iːn] → [eːn]** — APPLIED (applied by orchestrator this round). Numeral *één* = /eːn/. Confirmed against nl cognate `one.js` line 160 `een` = `eːn`. IPA nucleus only.

**3. `af` tree — `boom` [buːm] → [boːm]** — APPLIED (applied by orchestrator this round). Afrikaans ⟨oo⟩ = /oː/; [uː] belongs to ⟨oe⟩. Confirmed against nl `boom` = `boːm` (same file line 160). I applied the plain monophthong [boːm] (the reviewer's primary value) rather than the optional diphthong [bʊəm], matching the nl treatment. IPA nucleus only.

**4. `af` eye — `oog` [uːx] → [oːx]** — APPLIED (applied by orchestrator this round). Same ⟨oo⟩=/oː/ error. Final [x] kept (correct). Confirmed against nl `oog` = `oːx` (same file line 160). IPA nucleus only.

**5. `nds` drink — `drinken` [dɹɪŋkn] → [drɪŋkn̩]** — APPLIED (applied by orchestrator this round). The English approximant [ɹ] is a stray Anglicism: every other nds /r/ in the corpus is [r]/[ɐ], and the de cognate in the very same file (`drink.js` line 92 `de` `trinken` = `tʁɪŋkn̩`) carries the syllabic-nasal diacritic. Applied both fixes: [ɹ]→[r] and added the syllabicity diacritic on the final nasal to match the de cognate. Surface unchanged.

### Held items

**6, 9, 10, 12, 13, 15, 18, 19 (stress/length/gemination harmonisation across fy/li/frr/ksh/gsw/vmf/bar/stq water+good rows)** — HELD. These are explicitly framed by the reviewer as a systemic stress/length-marking policy ("add to all or to none"). That is a cross-row convention decision for the editors, not a local unambiguous error; per project rule I do not invent a corpus-wide normalization the team has not endorsed. No current value is internally wrong on its own.

**7, 8** — HELD (reviewer self-marked "no change needed / correct"). Consistency QA notes only; nl *vader* [v], af *water* [ɑː] vs nl [aː] are all correct as stated.

**11 (`pdt` water `Wota` [vɔta])** — HELD. The long-vowel claim ([voːta]) is a plausible but contested phonetic refinement, not an unambiguous error; vowel length in Plautdietsch *Wota* varies by sub-dialect. Recommend reviewer escalate to a Plautdietsch source if a length change is desired.

**14 (`fy` fire `fjoer` [fjuːr] → [fjuər])** — HELD. Monophthong-vs-diphthong refinement; the ⟨oe⟩=[uə] reading is reasonable (Tiersma) but is a transcription-granularity choice consistent with how other monophthongal ⟨oe⟩ entries are handled here. Not a clear local error; left for an editor diphthong-policy pass.

**16 (`pdc` love `liewe`) & 17 (`pdt` love `leewen`) — noun/verb sense** — HELD. The row's own label note (`love.js` line 32/41) explicitly states: *"Basic word/root for love or affection — noun or verb citation form depending on language."* The dataset therefore deliberately permits a verb citation form, so a verb infinitive in this slot is sanctioned by the stated convention, not an error. I confirmed via authoritative sources that the *nouns* do exist (PA German noun "love" = *Luff*, HG "die Liebe", per the pdc.wikipedia English/PG/HG dictionary; Plautdietsch noun = *Leew*/*Leefta*, per Herman Rempel, *Kjenn Jie Noch Plautdietsch?*, ereimer.net English-to-Plautdietsch). But replacing the current verb forms would (a) override an explicit row-level convention and (b) for pdc break the lexeme family (the attested noun *Luff* is an English loan, a different etymon than *liewe*). Per project rule I hold rather than override a justified convention. If the editors decide the row should be noun-only for the Germanic cluster, the supported replacements are: pdt `["Leew", "leːf"]` (matches sibling nds/ksh `Leev` [leːf] exactly) and pdc noun `["Luff", ...]` (loan) — flagged for an editor decision.

**20 (`af` hello `hallo` [ɦaləu])** — HELD. *hallo* is a borrowed greeting whose final vowel realisation varies; [əu]/[oː] both occur and the proposed change also entails restructuring stress to [ɦaˈloː]. Not a clear-cut single-segment local error; left for editor review.

---

## Reviewer round-2 response (再評価 round-2)

I verified every applied fix against the live per-word data files (`grep`/`Read` on the current tree, not the review-date snapshot). All five "APPLIED" claims are genuinely present:

| # | Word | Code | Claimed | Live data | Verdict |
|---|------|------|---------|-----------|---------|
| 1 | eat | af | `eet` → `eːt` | `eat.js:282 af: ["eet", "eːt"]` | ✓ verified |
| 2 | one | af | `een` → `eːn` | `one.js:288 af: ["een", "eːn"]` | ✓ verified |
| 3 | tree | af | `boom` → `boːm` | `tree.js:282 af: ["boom", "boːm"]` | ✓ verified |
| 4 | eye | af | `oog` → `oːx` | `eye.js:282 af: ["oog", "oːx"]` | ✓ verified |
| 5 | drink | nds | `dɹɪŋkn` → `drɪŋkn̩` | `drink.js:289 nds: ["drinken", "drɪŋkn̩"]` | ✓ verified |

The four Afrikaans ⟨ee⟩/⟨oo⟩ vowel-quality corrections and the nds Anglicism+syllabicity fix are exactly what I asked for and match their nl cognates (`nl eːtə`, `eːn`, `boːm`, `oːx` and the de `tʁɪŋkn̩` syllabic-nasal model). These five were the only items I raised as clear, unambiguous local errors, and they are all closed.

**Adjudication of held items:**

- **6, 9, 10, 12, 13, 15, 18, 19 (stress/length/gemination harmonisation)** — ✓ ACCEPT the hold. I verified the inconsistency is real: `water.js:1100 stq ["Woater","ˈvɔːtɐ"]` carries the primary-stress mark while `fy/frr/li/gsw/gsw_w/wae/vmf/bar` (lines 489–491, 291, 293–295, 381) do not. But this is precisely the "add stress to all or to none" cross-row convention I myself framed as an editor policy decision, not a local data bug — no single value is wrong on its own. Holding is correct; I record it as a **known systemic limitation** (corpus-wide stress/length normalisation) for a future dedicated editor pass, not a blocker.

- **7, 8** — ✓ ACCEPT. I self-marked these "no change needed"; `father.js:160 nl ["vader","vaːdər"]` and `water.js:289 af ["water","vɑːtər"]` are correct as stated. QA notes only.

- **11 (`pdt` water `vɔta`)** — △ ACCEPT the hold as a documented limitation. The long-vowel reading [voːta] is a plausible Mennonite-Low-German refinement but is genuinely sub-dialect-variable (Cox/Driedger vs. spelling-pronunciation norms) and not offline-resolvable to a single authoritative value. Per late-round loop-termination, I will not re-demand impossible external sourcing; flagged as **needs-human-Plautdietsch-linguist**, not a blocker.

- **14 (`fy` fire `fjuːr`)** — △ ACCEPT the hold. Monophthong-vs-diphthong granularity for ⟨oe⟩; the [uə] reading (Tiersma) is reasonable but is a transcription-granularity policy consistent with other monophthongal ⟨oe⟩ entries here. Won't-fix-grade.

- **16, 17 (pdc/pdt love noun-vs-verb)** — ✓ ACCEPT the hold. I confirmed the row's own definition note in live data (`love.js:32`): *"noun or verb citation form depending on language."* A verb infinitive in this slot is therefore sanctioned by the explicit row-level convention, not an error. The worker also correctly preserved the lexeme family (the attested pdc noun *Luff* is an English loan, a different etymon). Defensible convention choice.

- **20 (`af` hello `ɦaləu`)** — △ ACCEPT the hold. Borrowed greeting with variable final-vowel realisation; the proposed change also restructures stress. Editor-review item, won't-fix-grade.

**New issues:** none. During verification I found no new errors; all entries are in the state described and the love.js convention is genuine.

### Scorecard
- Clear local errors raised: 5 (#1–5) — **all fixed and verified in live data.**
- Held items: all are either (a) reviewer-self-framed system-wide convention decisions, (b) reviewer-self-marked correct, (c) sub-dialect-variable refinements not offline-resolvable, or (d) sanctioned by an explicit row-level label convention. **None is a clear unfixed local error.**
- Remaining systemic note (non-blocking): corpus-wide stress/length-mark normalisation across the Frisian/Alemannic/Low-German rows — a future editor pass, documented as a known limitation.

Nothing remains that the dev team can concretely act on without making a corpus-wide convention decision (out of scope for this file) or sourcing sub-dialect data that is not offline-resolvable. Per late-round loop-termination, I close with the documented limitations above rather than re-demanding the impossible.

**File status: CLOSED** — nothing left to address.
