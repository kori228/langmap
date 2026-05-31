# Wordmap review #63 — Hungarian & Ob-Ugric specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a Uralic linguist specialising in Hungarian and the two Ob-Ugric languages, Mansi (mns) and Khanty (kca), with a working knowledge of the Old Hungarian (ohu) layer reconstructed from the Tihany Charter and the Halotti beszéd. For Hungarian phonology and orthography I rely on Kenesei, Vago & Fenyvesi, *Hungarian* (Descriptive Grammars, Routledge, 1998), and on Siptár & Törkenczy, *The Phonology of Hungarian* (OUP, 2000) for the segmental inventory — crucially the fact that orthographic ⟨a⟩ is the open back rounded [ɒ], ⟨á⟩ is the long unrounded [aː], the palatals ⟨gy ty ny⟩ are [ɟ c ɲ], and ⟨r⟩ is an alveolar trill [r], never a tap. For Ob-Ugric I use Honti's comparative Ob-Ugric studies (*Chrestomathia Ostiacica*, 1984; *Die ostjakische Sprache*, and his reconstructions of Proto-Ob-Ugric vocalism) together with Riese, *Vogul* (LINCOM, 2001) for Mansi and the standard Khanty cyrillic-orthography conventions. My review checks Hungarian vowel length and quality, the gy/ty/ny palatals, vowel harmony, and — most urgently — several Ob-Ugric cells where a Russian loanword and its Russified IPA have been pasted in as if they were native Ugric forms.

---

## Issues found

### 1. `kca` — cat — Russian loanword pasted into a Khanty cell, IPA is Russian
- **File:** `words/cat.js` line 137
- **Current:** `["кошка", "koʂka"]`
- **Expected:** `["кеши", "kɛʃi"]` (or another genuine Khanty form; at minimum not the bare Russian)
- **Why:** `кошка` is simply the Russian word *кошка* 'cat', and the IPA `koʂka` is its Russian pronunciation with the retroflex [ʂ] of Russian ⟨ш⟩. This is a placeholder copy, not a Khanty entry. Cats are non-native to the Ob region and the usual reflex is an adapted loan (Khanty ⟨ш⟩ is a plain postalveolar [ʃ], not Russian retroflex [ʂ]). The cell needs a real Khanty surface form with a Khanty-phonology IPA.

---

### 2. `mns` — cat — identical Russian loanword + Russian IPA
- **File:** `words/cat.js` line 874
- **Current:** `["кошка", "koʂka"]`
- **Expected:** a genuine Mansi form (e.g. an adapted `кошка` → `[koʃka]`), not the verbatim Russian
- **Why:** Same defect as #1: the Mansi cell is the bare Russian *кошка* with Russian IPA `koʂka`. Even if Mansi borrows the word, Mansi has no retroflex [ʂ]; ⟨ш⟩ is [ʃ]. Per Riese, *Vogul* (2001), the Mansi sibilant inventory is /s ʃ ɕ/, so [ʂ] is impossible. The duplication of the exact same string across kca and mns is the tell-tale sign of a copy-paste placeholder.

---

### 3. `ohu` — cat — modern Hungarian form in the Old Hungarian slot, wrong vowel quality
- **File:** `words/cat.js` line 158
- **Current:** `["macska", "matʃka"]`
- **Expected:** `["macska", "mɒt͡ʃkɒ"]`
- **Why:** Two problems. (a) The IPA `matʃka` uses Cardinal [a] for both vowels, but Hungarian (and the Old Hungarian reflex) has open back rounded [ɒ] for ⟨a⟩ — cf. the modern `hu` cell on line 157, `mɒt͡ʃkɒ`. (b) The affricate ⟨cs⟩ is the single segment [t͡ʃ] and should carry a tie bar; `tʃ` reads as a stop+fricative cluster. Both follow Kenesei et al. (1998: ch. on phonology).

---

### 4. `ohu` — dog — wrong word sense (a breed term, not the generic 'dog')
- **File:** `words/dog.js` line 158
- **Current:** `["kuvasz", "kuvas"]`
- **Expected:** `["kutya", "kucɒ"]` or an attested Old Hungarian generic for 'dog'
- **Why:** *kuvasz* is the name of a specific livestock-guardian **breed** (itself a Turkic loan), not the everyday word for 'dog'; it is a register/word-sense mismatch with the headword. Every other language cell here gives the generic term (cf. `hu` `kutya` on line 157). If an archaic generic is wanted, ⟨ty⟩ would still need to surface as the palatal [c].

---

### 5. `hu` — love — missing initial stress / fine, but `ohu` love uses a tap for ⟨r⟩
- **File:** `words/love.js` line 158
- **Current:** `["szèrēlm", "sɛɾeːlm"]`
- **Expected:** `["szèrēlm", "sɛreːlm"]`
- **Why:** The IPA renders ⟨r⟩ as the alveolar **tap** [ɾ]. Hungarian /r/ is a phonemic alveolar **trill** [r] in all positions (Siptár & Törkenczy 2000: §3); the tap [ɾ] is not part of the Hungarian inventory and is wrong for the Old Hungarian reflex too. Use [r].

---

### 6. `ohu` — love — implausible final cluster /lm/ with no transition
- **File:** `words/love.js` line 158
- **Current:** `["szèrēlm", "sɛreːlm"]` (after fixing #5)
- **Expected:** `["szèrēlëm", "sɛreːlɛm"]` or a form with the etymological final vowel
- **Why:** The reconstructed Old Hungarian shape preserves the stem vowel of the *-lVm* deverbal-noun suffix (cf. modern *szerelem* [sɛrɛlɛm], `hu` line 157). A bare word-final [lm] cluster is phonotactically un-Hungarian and contradicts the very point of an archaic entry; either restore the vowel or align with the modern trisyllable.

---

### 7. `hu` — hello — `szia` IPA missing the glide / hiatus
- **File:** `words/hello.js` line 157
- **Current:** `["szia", "siɒ"]`
- **Expected:** `["szia", "sijɒ"]`
- **Why:** *szia* is pronounced with an intervocalic palatal glide [sijɒ] (hiatus-filling [j] between the high front vowel and the following vowel is regular in Hungarian — Siptár & Törkenczy 2000: §5 on hiatus). The bare `siɒ` collapses two syllables into a diphthong that Hungarian does not have.

---

### 8. `ohu` — hello — `isten hozott` long /tː/ is over-marked and register is odd
- **File:** `words/hello.js` line 158
- **Current:** `["ìstèn hozott", "iʃtɛn hozotː"]`
- **Expected:** `["ìstèn hozott", "iʃtɛn hozotː]"` → keep [tː] but note ⟨s⟩ = [ʃ] is correct; the issue is the unmarked phrase stress and the missing space-final analysis
- **Why:** The segmental transcription is actually defensible (⟨s⟩ = [ʃ], geminate ⟨tt⟩ = [tː]). The real problem is that *isten hozott* ('God brought you', a welcome) is a full clause, not a lexical greeting parallel to the other cells; flag as a word-sense/register mismatch with the headword "hello" rather than a transcription error.

---

### 9. `kca` — heart — breve vowel ⟨ӑ⟩ flattened to plain [a] in IPA
- **File:** `words/heart.js` line 137
- **Current:** `["сӑм", "sam"]`
- **Expected:** `["сӑм", "sɐm"]` (reduced/short central back vowel)
- **Why:** Khanty cyrillic ⟨ӑ⟩ (a with breve) marks the short reduced vowel, conventionally [ɐ]/[ə]-like, distinct from full ⟨а⟩ [a]. Transcribing it as plain [a] erases the very length/quality contrast the breve encodes (Honti, *Chrestomathia Ostiacica* 1984, vocalism tables). Compare the Mansi cognate `сым` [sɨm] on line 874, which correctly shows a non-[a] nucleus.

---

### 10. `kca` — mother — ⟨ӑ⟩ again flattened to [a]
- **File:** `words/mother.js` line 137
- **Current:** `["ӑңки", "aŋki"]`
- **Expected:** `["ӑңки", "ɐŋki"]`
- **Why:** Same as #9: the breve ⟨ӑ⟩ is the reduced vowel and must not be rendered as full [a]. The velar-nasal ⟨ң⟩ → [ŋ] is correct. Consistency with the breve convention is required across the kca cells (cf. sun line 137 `xatəl`, which correctly uses [ə] for ⟨ә⟩).

---

### 11. `mns` — heart — `сым` [sɨm] is good, but check `mns` father ⟨ӓщ⟩
- **File:** `words/father.js` line 874
- **Current:** `["ӓщ", "æɕ"]`
- **Expected:** `["ӓщ", "æɕ"]` (segmentally OK) — flag only the vowel length
- **Why:** ⟨ӓ⟩ = [æ] and ⟨щ⟩ = the alveolo-palatal [ɕ] are both correct for Mansi (Riese 2001). This cell is sound; I include it as a positive control. If anything, northern Mansi often has a long [æː] here, but I will not assert length without the source dialect specified, so I leave the surface as-is and note it for the editors.

---

### 12. `ohu` — father — `āpá` double long vowels plausible but stress unmarked
- **File:** `words/father.js` line 158
- **Current:** `["āpá", "aːpaː"]`
- **Expected:** `["āpá", "ˈaːpaː]"`
- **Why:** Segmentally [aːpaː] is fine (both ⟨ā⟩ and ⟨á⟩ = long [aː]). Hungarian has fixed word-initial primary stress (Kenesei et al. 1998); since several other cells are bare of stress this is a consistency note rather than an error, but for a citation-form transcription initial [ˈ] would be the norm.

---

### 13. `ohu` — moon — surface marks a long ⟨ȍ⟩ but IPA gives a short [o]
- **File:** `words/moon.js` line 158
- **Current:** `["hȍld", "hold"]`
- **Expected:** `["hȍld", "hoːld"]` (if ⟨ȍ⟩ encodes length) or fix the surface diacritic
- **Why:** The surface uses the double-grave ⟨ȍ⟩ (the convention this dataset uses elsewhere for an Old Hungarian long/marked vowel — cf. `jȍw`, `kȍszȍnèm`, `hȍld`), yet the IPA `hold` shows a plain short [o]. There is an internal mismatch: either the diacritic is meant to mark length (then IPA should be [hoːld]) or it is decorative (then it is misleading). The modern reflex *hold* is [hold], so the diacritic+IPA pairing is inconsistent. Resolve the convention.

---

### 14. `ohu` — good — `jȍw` IPA `joːw` mixes a long vowel with a labial glide coda
- **File:** `words/good.js` line 158
- **Current:** `["jȍw", "joːw"]`
- **Expected:** `["jȍw", "joːw]"` — verify the [w] coda against the source
- **Why:** Here the ⟨ȍ⟩→[oː] length mapping IS applied (unlike #13), which makes the moon cell's [o] inconsistent across the same ⟨ȍ⟩ grapheme. The bilabial [w] coda reflects the Old Hungarian *-w* that became modern *-ó* (jó); this is defensible per the standard *-w > -ó* monophthongisation, but the dataset must apply the ⟨ȍ⟩=[oː] rule **uniformly** (see #13). Flagged as a cross-cell consistency error.

---

### 15. `ohu` — mother — `ènyē` correctly palatal but check ⟨e⟩ vs ⟨è⟩ quality
- **File:** `words/mother.js` line 158
- **Current:** `["ènyē", "ɛɲeː"]`
- **Why:** Good: ⟨ny⟩ → palatal [ɲ] and the long ⟨ē⟩ → [eː] are correct (Kenesei et al. 1998). The open ⟨è⟩ → [ɛ] is also right. I cite this as a model cell; the only refinement is that the double-grave/grave system (ȍ, è, ē, ī …) used across the ohu cells is idiosyncratic and undocumented — the editors should add a key to docs so reviewers can verify length intent (this is what makes #13/#14 ambiguous).

---

### 16. `mns` — moon — `эрь` [erʲ] is almost certainly the wrong lexeme for 'moon'
- **File:** `words/moon.js` line 880
- **Current:** `["эрь", "erʲ"]`
- **Expected:** a genuine Mansi 'moon' form (northern Mansi *этпос* / *ёнгхып* type), not `эрь`
- **Why:** Mansi *эрь* does not mean 'moon'; the attested northern Mansi word for moon/month is *этпос* (Riese, *Vogul* 2001, lexicon). `эрь` looks like a stray or mis-keyed entry. The IPA [erʲ] with palatalised final ⟨рь⟩ is internally consistent with the cyrillic, but the **lexical choice** is the problem. This needs verification against a Mansi dictionary before publication.

---

### 17. `kca` — love — `наматты` glossed as 'love' but is a verb stem; length mark in IPA
- **File:** `words/love.js` line 137
- **Current:** `["наматты", "namatːɯ"]`
- **Expected:** verify sense (noun 'love' vs verb 'to love'); IPA geminate OK
- **Why:** The other cells in love.js are split between noun and verb senses; the Khanty `наматты` appears to be an infinitive/verbal-noun (the *-ты* ending parallels eat `лэты` [lətɯ], drink `яңхты` [jaŋxtɯ]) i.e. 'to love/think', whereas `hu` *szerelem* is a **noun**. This is a part-of-speech mismatch with the headword's apparent noun sense. The geminate [tː] and final [ɯ] are transcribed consistently with the other -ты cells, so the IPA is fine; the issue is sense alignment.

---

### 18. `mns` — love — `эрыглыктэ` long verb form vs noun headword
- **File:** `words/love.js` line 881
- **Current:** `["эрыглыктэ", "erɨɡlɨkte"]`
- **Expected:** verify sense; IPA segmentally OK
- **Why:** Same part-of-speech concern as #17: `эрыглыктэ` is a finite/derived **verb** form ('he loves' / 'to love'), not the noun 'love (szerelem)' the headword uses. The IPA `erɨɡlɨkte` correctly shows ⟨ы⟩ = [ɨ] and the velar [ɡ], so the transcription is good; flag the noun/verb mismatch for the editors to reconcile across the love.js row.

---

### 19. `hu` — thanks — `köszönöm` lacks initial stress; vowels otherwise correct
- **File:** `words/thanks.js` line 157
- **Current:** `["köszönöm", "køsønøm"]`
- **Expected:** `["köszönöm", "ˈkøsønøm"]`
- **Why:** The front-rounded harmony is correctly transcribed (⟨ö⟩ = [ø] throughout — good vowel-harmony fidelity, Kenesei et al. 1998). The only refinement is fixed word-initial primary stress [ˈ], absent here. Consistency note rather than a hard error, but for a citation form it should be marked (and the parallel `ohu` cell `kȍszȍnèm` [køsønɛm] shows the expected open final ⟨è⟩=[ɛ], correctly).

---

### 20. `kca` — thanks — `пӑсиве` ⟨ӑ⟩ flattened to [a] (third instance)
- **File:** `words/thanks.js` line 137
- **Current:** `["пӑсиве", "pasive"]`
- **Expected:** `["пӑсиве", "pɐsive"]`
- **Why:** As in #9 and #10, the breve ⟨ӑ⟩ is the reduced vowel and is rendered as full [a]. This is now a **systematic** kca transcription error across heart, mother, and thanks — every ⟨ӑ⟩ in the kca cells is mapped to [a], erasing the reduced-vowel contrast that is central to Khanty vocalism (Honti 1984). Recommend a global pass on all kca ⟨ӑ⟩ → [ɐ].

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

Thank you for the thorough Uralic-specialist review. I applied the clear, unambiguous local/IPA fixes and the endorsed kca breve-vowel normalization pass; I held the genuine convention/sense/stress items with rationale. All edits below are returned as structured edits and applied serially by the orchestrator (we do not edit shared data files in parallel).

### Applied (IPA / mechanical normalization only — surfaces untouched)

- **#1 `kca` cat — `words/cat.js`** `koʂka` → `koʃka` **(applied by orchestrator this round)**. I could not source a reliable native non-loan Khanty form (`кеши` is not attestable in the dictionaries I could reach offline/online), so per your "at minimum not the bare Russian / Khanty ⟨ш⟩ is plain [ʃ]" guidance I kept the surface and corrected only the IPA: the Russian retroflex [ʂ] is impossible in Khanty, ⟨ш⟩ = postalveolar [ʃ]. Surface left as is and flagged for editors to source a native form.
- **#2 `mns` cat — `words/cat.js`** `koʂka` → `koʃka` **(applied by orchestrator this round)**. Exactly your endorsed adapted form `[koʃka]`; Mansi /s ʃ ɕ/ has no retroflex (Riese 2001).
- **#3 `ohu` cat — `words/cat.js`** `matʃka` → `mɒt͡ʃkɒ` **(applied by orchestrator this round)**. Both ⟨a⟩ = open back rounded [ɒ] (matching `hu` line 157), and ⟨cs⟩ = single affricate [t͡ʃ] with tie bar. Clear internal inconsistency.
- **#5 `ohu` love — `words/love.js`** `sɛɾeːlm` → `sɛreːlm` **(applied by orchestrator this round)**. Hungarian /r/ is the alveolar trill [r]; tap [ɾ] is not in the inventory (Siptár & Törkenczy 2000). Matches modern `hu` [sɛrɛlɛm].
- **#7 `hu` hello — `words/hello.js`** `siɒ` → `sijɒ` **(applied by orchestrator this round)**. Hiatus-filling palatal glide [j] is regular in *szia*; bare `siɒ` mis-collapses the two syllables.
- **#9 `kca` heart — `words/heart.js`** `sam` → `sɐm` **(applied by orchestrator this round)**. Breve ⟨ӑ⟩ = reduced vowel [ɐ], not full [a].
- **#10 `kca` mother — `words/mother.js`** `aŋki` → `ɐŋki` **(applied by orchestrator this round)**.
- **#20 `kca` thanks — `words/thanks.js`** `pasive` → `pɐsive` **(applied by orchestrator this round)**.
- **`kca` house — `words/house.js`** `xat` → `xɐt` **(applied by orchestrator this round)**. Not in your list but caught by the endorsed global ⟨ӑ⟩→[ɐ] pass: `["хӑт", "xat"]` had the same flattening (per our "fix all variants together" rule). This completes the kca breve normalization across heart, mother, thanks, and house. (`sun`/`хатәл` already correctly uses [ə] for ⟨ә⟩.)

### Held with rationale (won't-fix this round / needs reviewer or editor decision)

- **#4 `ohu` dog (`kuvasz`)** — held. Agreed *kuvasz* is a breed term, a real sense mismatch, but the only "fix" offered (`kutya`/[kucɒ]) is the modern `hu` form copied into the `ohu` slot, which would just duplicate line 157. Changing the chosen archaic lexeme is a reconstruction/lexical-choice call. Recommend editors pick an *attested* Old Hungarian generic; I will not invent/guess one. Surface orthography is not a clear local error.
- **#6 `ohu` love final `/lm/`** — held. Requires a surface change (`szèrēlm` → `szèrēlëm`), i.e. altering the reconstructed Old-Hungarian shape. That is a reconstruction decision, not a local IPA bug; out of scope for mechanical fixes.
- **#8 `ohu` hello (`isten hozott`)** — held. You confirm the segmental IPA is defensible; the only issue is a clause-vs-lexeme register mismatch. Flag for editors, no transcription change.
- **#12 `ohu` father stress** — held. You yourself mark this a consistency note, not an error; initial [ˈ] is unmarked across many ohu cells, so adding it to one would create new inconsistency. Defer to a global stress-policy decision.
- **#13 `ohu` moon (`hȍld`/`hold`)** + **#14 `ohu` good (`jȍw`/`joːw`)** — held as a pair. This is the undocumented double-grave ⟨ȍ⟩ length convention you flag in #15 as ambiguous. The two cells disagree, but with no documented key I cannot determine which direction is canonical; "resolve the convention" is a system-level editor decision, not a clear local error. Recommend the editors add the ⟨ȍ/è/ē/ī⟩ key to docs and then normalize.
- **#15 `ohu` mother, #11 `mns` father** — positive controls, no change requested; agreed, left as is.
- **#16 `mns` moon (`эрь`)** — held after research. `эрь` is not attestable as 'moon'; Northern Mansi *этпос* is reliably attested as 'month' (and Mansi, like many Uralic languages, shares the moon/month lexeme) — sources: Wikivoyage Mansi phrasebook months list and the Wiktionary Northern Mansi lemma `во̄ртур э̄тпос`. However you yourself hedged the replacement ("*этпос* / *ёнгхып* type ... needs verification") and I could **not** source a single authoritative surface+IPA pair (length/vowel quality of *этпос* varies by dialect and I will not guess the IPA). Per the no-guess rule I leave the cell unchanged and recommend the reviewer/editor either confirm a dialect-specific *этпос*/*ёнгхып* form with IPA or escalate to a Mansi lexicographer. Strong candidate for a sourced fix next round once a citation form is fixed.
- **#17 `kca` love (`наматты`), #18 `mns` love (`эрыглыктэ`)** — held. You confirm both IPAs are internally consistent; the concern is noun-vs-verb sense alignment across the love.js row. That is a cross-row editorial reconciliation, not a local transcription error.
- **#19 `hu` thanks stress** — held, same rationale as #12 (consistency note, defer to global stress policy).

### Summary
9 edits applied (all IPA-only / mechanical; no surface orthography changed): cat ×3, love ×1, hello ×1, and the kca breve-vowel pass ×4 (heart, mother, thanks, house). 11 findings held: sense/register mismatches (#4, #8, #17, #18), reconstruction/surface choices (#6), the ambiguous ⟨ȍ⟩ length convention (#13/#14), stress consistency notes (#12, #19), positive controls (#11, #15), and the `mns` moon lexeme (#16, actionable but not yet reliably sourceable to a single IPA — flagged for next round).

---

## Reviewer round-2 response (再評価 round-2)

I verified every claimed "applied" fix against the live data files (grep on `words/*.js`). All 9 applied edits are present and correct in the live data:

### Applied fixes — VERIFIED ✓
- **#1 kca cat** ✓ `words/cat.js:137` = `["кошка", "koʃka"]` — retroflex [ʂ]→[ʃ] corrected. Surface still the bare Russian loan, but per my own "at minimum not the bare Russian" wording and the worker's documented inability to source a native form offline, I accept the IPA-only fix and the editor flag. Not a clear local error anymore.
- **#2 mns cat** ✓ `words/cat.js:874` = `["кошка", "koʃka"]` — matches my endorsed [koʃka]. Accept.
- **#3 ohu cat** ✓ `words/cat.js:158` = `["macska", "mɒt͡ʃkɒ"]` — both [ɒ] and the tie-barred [t͡ʃ] applied, matching `hu` line 157. Accept.
- **#5 ohu love** ✓ `words/love.js:158` = `["szèrēlm", "sɛreːlm"]` — tap [ɾ]→trill [r]. Accept.
- **#7 hu hello** ✓ `words/hello.js:157` = `["szia", "sijɒ"]` — hiatus glide [j] inserted. Accept.
- **#9 kca heart** ✓ `words/heart.js:137` = `["сӑм", "sɐm"]`. Accept.
- **#10 kca mother** ✓ `words/mother.js:137` = `["ӑңки", "ɐŋki"]`. Accept.
- **#20 kca thanks** ✓ `words/thanks.js:137` = `["пӑсиве", "pɐsive"]`. Accept.
- **kca house (bonus)** ✓ `words/house.js:137` = `["хӑт", "xɐt"]` — correct application of the endorsed global ⟨ӑ⟩→[ɐ] pass per the "fix all variants together" rule. Good catch; accept.

The kca breve normalization is now systematic and complete (heart, mother, thanks, house; sun `хатәл` already correct). This fully resolves the systematic issue I raised in #20.

### Held items — adjudication
- **#4 ohu dog (`kuvasz`)** — △ ACCEPT-AS-HELD. `words/dog.js:158` unchanged. The worker is right that the only concrete replacement I offered (`kutya`/[kucɒ]) merely duplicates the `hu` cell. Picking an *attested* Old Hungarian generic is a reconstruction call I am not positioned to source offline either. Genuine sense mismatch, but won't-fix without a sourced archaic lexeme. Documented limitation.
- **#6 ohu love `/lm/`** — ✗→won't-fix. Requires altering the reconstructed surface; a reconstruction decision, not a transcription bug. Accept as held.
- **#8 ohu hello (`isten hozott`)** — accept as held; I myself confirmed the segmental IPA is defensible. Register flag for editors only.
- **#12 ohu father stress, #19 hu thanks stress** — accept as held. I labelled both consistency notes, not errors. Adding [ˈ] to isolated cells would create new inconsistency; defer to a global stress policy.
- **#13 ohu moon / #14 ohu good (⟨ȍ⟩ length)** — accept as held PAIR. This is the undocumented double-grave convention I flagged as ambiguous in #15. With no documented key, "resolve the convention" is a system-level editor decision. The two cells genuinely disagree (`hȍld`→[hold] short vs `jȍw`→[joːw] long), but I cannot declare a canonical direction without the dataset's own length key. Editor action, not a dev fix.
- **#11 mns father, #15 ohu mother** — positive controls; no change requested. Confirmed unchanged. Fine.
- **#17 kca love / #18 mns love (noun/verb sense)** — accept as held; both IPAs verified internally consistent. Cross-row POS reconciliation is editorial.
- **#16 mns moon (`эрь`)** — ✗ STILL OPEN. `words/moon.js:880` is still `["эрь", "erʲ"]`. This is NOT a convention or stress note — it is a demonstrable LEXICAL error: `эрь` does not mean 'moon' in Mansi, and the worker's own round-1 research confirms this and identifies the attested Northern Mansi `этпос` (cited Wiktionary `во̄ртур э̄тпос`, Wikivoyage). The parallel kca cell correctly uses a real 'moon' word (`тылащ`/[tɯlaɕ], moon.js:137), so an outright wrong lexeme in the mns cell stands out.

  The worker declined to fix only because exact dialectal vowel-length for the IPA is uncertain. That is over-cautious: the surface `этпос` is attested and citable, and a **broad, length-agnostic** transcription is fully defensible and strictly better than a wrong lexeme. The Cyrillic is phonetically transparent — э=[e], т=[t], п=[p], о=[o], с=[s] → broad [etpos] (no length marks claimed). Replacing a wrong word with an attested word + a broad IPA is a concrete, actionable step that has not yet been attempted, and it does not violate the no-guess rule (we are not inventing a surface; we are using a cited attested one and a conservative broad IPA).

### New issues
None. No new defensible errors found during verification.

### Scorecard
- Applied & verified in live data: 9/9 ✓ (no phantom/missing fixes — good)
- Held items accepted as defensible (sense/reconstruction/convention/stress/positive-control): #4, #6, #8, #11, #12, #13, #14, #15, #17, #18, #19
- Still open (clear lexical error, concrete next step available): #16 mns moon

**File status: OPEN** — Next step (single item): in `words/moon.js:880`, replace the non-'moon' lexeme `["эрь", "erʲ"]` with the attested Northern Mansi moon word `["этпос", "etpos"]` (broad, length-agnostic IPA; do not invent length marks). If after a further genuine attempt no attested surface can be confirmed, document `эрь` as a known-limitation needs-human-Mansi-lexicographer caveat in the cell/notes and we will close.

---

## Worker round-2 response (作業者round-2)

Thank you for the round-2 adjudication. One actionable item remained open (#16 `mns` moon); I researched it and am applying a sourced fix. All previously held convention/sense/stress/reconstruction items remain held with the rationale already accepted in your round-2 response.

### Applied this round (sourced lexical fix)

- **#16 `mns` moon — `words/moon.js:880`** `["эрь", "erʲ"]` → `["э̄тпос", "eːtpos"]` **(applied by orchestrator this round)**. Confirmed via two independent sources that the attested Northern Mansi word for moon/month is **э̄тпос**:
  - Wiktionary, *Appendix:Northern Mansi Swadesh list*, entry #148 "moon" = **э̄тпос** (https://en.wiktionary.org/wiki/Appendix:Northern_Mansi_Swadesh_list).
  - Wikivoyage, *Mansi phrasebook*, months section, where every month is built as "[X] э̄тпос" (e.g. *Та̄л котиль э̄тпос*, *Лӯпта э̄тпос*) (https://en.wikivoyage.org/wiki/Mansi_phrasebook).

  Two notes on the exact form vs. your proposed `["этпос", "etpos"]`:
  1. **Surface:** the authentically attested orthography carries the macron on the first vowel — **э̄тпос** (э̄ = long [eː]) — across both sources, so I used the macron form rather than a bare `этпос`. The macron is the dataset-faithful attested spelling, not an invented mark.
  2. **IPA:** because the attested surface explicitly marks vowel length with the macron, the faithful broad transcription is **`eːtpos`** (э̄=[eː], т=[t], п=[p], о=[o], с=[s]). The `eː` here transcribes the attested orthographic macron — it is not an invented length mark, so it honours your "do not invent length marks" caveat while keeping the surface/IPA pair internally consistent (surface marks length ⇒ IPA shows it). If the editors prefer to drop the macron in both fields for a strictly length-agnostic citation (`["этпос", "etpos"]`), that is also defensible and matches your exact proposal — I flag it as an editor preference; either way the wrong lexeme `эрь` is removed. This resolves the only OPEN item.

### Still held (unchanged, per your accepted round-2 adjudication)

- **#4** ohu dog (`kuvasz`) — held; needs an attested archaic generic, unsourceable offline. **#6** ohu love `/lm/` — held; reconstruction/surface decision. **#8** ohu hello (`isten hozott`) — held; segmental IPA defensible, register flag only. **#11/#15** positive controls — no change. **#12/#19** stress consistency notes — defer to global stress policy. **#13/#14** ⟨ȍ⟩ length convention — held pair; undocumented convention, editor decision. **#17/#18** love noun/verb sense — held; cross-row editorial reconciliation.

### Summary
1 edit applied (the sole remaining OPEN item, #16 `mns` moon: wrong lexeme `эрь` → sourced attested `э̄тпос`/[eːtpos]). 0 items left genuinely open as dev-actionable; the remaining held items are accepted editor/convention/reconstruction decisions, not local data errors.

---

## Reviewer round-3 response (再評価 round-3)

I re-verified every applied fix against the live data files (grep on `words/*.js`). No regressions; the one round-2 item is resolved.

### The sole open item — #16 `mns` moon — VERIFIED & ACCEPTED ✓
- **`words/moon.js:880`** is now `["э̄тпос", "eːtpos"]` (confirmed live; surface codepoints = э + combining macron U+0304 + тпос). The wrong lexeme `эрь` (which does not mean 'moon') has been removed and replaced with the attested Northern Mansi moon/month word **э̄тпос**, cited from two independent sources (Wiktionary Northern Mansi Swadesh list #148; Wikivoyage Mansi phrasebook months). The IPA `eːtpos` faithfully transcribes the attested orthographic macron (э̄=[eː]) and does not invent a length mark — it reflects the cited surface. This is exactly the concrete, sourced fix I asked for in round-2, and it is strictly better than the prior wrong lexeme. **Accept.** (The macron-vs-bare `этпос` choice is a defensible editor preference; either is internally consistent. No further dev action needed.)
- Parallel sanity check: `kca` moon `words/moon.js:137` = `["тылащ", "tɯlaɕ"]` — a genuine 'moon' word, internally consistent. Fine.

### Re-verification of all prior applied fixes (no regression) ✓
cat: kca `koʃka` (137), mns `koʃka` (874), ohu `mɒt͡ʃkɒ` (158) — all intact. love ohu `sɛreːlm` (158). hello hu `sijɒ` (157). kca breve pass: heart `sɐm`, mother `ɐŋki`, thanks `pɐsive`, house `xɐt` — all intact. No phantom or reverted edits.

### Held items — final adjudication (all accepted as defensible, won't-fix)
- **#4 ohu dog (`kuvasz`)** — △ accepted as known limitation. `words/dog.js:158` still `["kuvasz", "kuvas"]`. Genuine sense mismatch (breed term vs generic), but the only offered replacement merely duplicates the `hu` cell; an *attested* Old Hungarian generic is not sourceable offline by either party. Documented limitation, needs a human Hungarian historical lexicographer — not an indefinitely-loopable dev item.
- **#6 ohu love `/lm/`** — ✗ won't-fix; reconstruction/surface decision, not a transcription bug.
- **#8 ohu hello (`isten hozott`)** — accepted; segmental IPA defensible, register flag is editorial only.
- **#11 mns father, #15 ohu mother** — positive controls, no change requested.
- **#12 ohu father stress, #19 hu thanks stress** — accepted as consistency notes; defer to a global stress policy. Adding [ˈ] to isolated cells would create new inconsistency.
- **#13 ohu moon / #14 ohu good (⟨ȍ⟩ length)** — accepted as held pair; undocumented double-grave convention, a system-level editor decision requiring a documented length key, not a local data error.
- **#17 kca love / #18 mns love (noun/verb sense)** — accepted; both IPAs internally consistent, cross-row POS reconciliation is editorial.

### New issues
None. (Noted in passing: many non-Ugric cells in `cat.js` — evn, eve, yrk, itl, ykg, yux, niv, ket — still carry the bare Russian `кошка`/`koʂka`. These are outside this Hungarian/Ob-Ugric reviewer's persona scope and were never part of this review's findings; flagging only for whichever specialist owns those rows. Not an item for this file.)

### Scorecard
- Applied & verified in live data this round: 1/1 ✓ (#16 mns moon, sourced + cited)
- All prior applied fixes re-verified, no regression: 9/9 ✓
- Held items, all accepted as defensible (sense/reconstruction/convention/stress/positive-control/known-limitation): #4, #6, #8, #11, #12, #13, #14, #15, #17, #18, #19
- Still open: none

**File status: CLOSED** — nothing left to address. The one lexical error (#16) is fixed with a credible citation and verified in live data; all remaining items are accepted editor/convention/reconstruction decisions or documented known limitations, not dev-actionable data errors.
