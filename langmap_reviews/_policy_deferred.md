# LangMap Policy-Deferred Findings

This document collects findings from reviews #61, #76, #79, #82, #83, #84, #85, #86
that were deferred because they require an owner-level policy decision rather than
a single-cell edit. Each entry records the source review, the issue, the candidate
options, and (where reasonable) a recommendation. Apply once the corresponding
policy is settled.

---

## #82-A Aramaic-like pro-drop E-role definition (review #82, issue #21 — ar_sd / ar_tn #76)
**Status**: policy decision needed
**Issue**: In #76, the E-role is used in some languages for the subordinate-clause subject ("I"). In ar_sd / ar_tn the E-slot is occupied by a predicate noun/adjective (سعادة / فرحان) rather than a subject. ar is pro-drop, so the natural fix is to drop E entirely; but that conflicts with treating E as a stable cross-language role.
**Options**:
- A: Allow E to be empty in pro-drop languages (consistent with `_omission_guidelines.md` B.1) and move سعادة/فرحان into D (predicate fusion).
- B: Redefine E to allow predicate complements in pro-drop languages for psych-state sentences (i.e., make E semantically wider).
**Recommendation**: A — preserve role-letter semantics; treat dropped E as a legitimate pro-drop omission and merge the predicate into D.

---

## #82-B Classical Chinese apodosis correlative 「故」 (review #82, issue #26 — zh_han #79)
**Status**: policy decision needed
**Issue**: In Classical Chinese, 「以...故...」 is a correlative pair, and 故 ought to head the apodosis. Current zh_han fuses 故 into B as 「故悲也」. Whether 故 should be split into the new F role (apodosis correlative, introduced for modern Sinitic in review #82) depends on which Classical syntactic school is preferred.
**Options**:
- A: Split F:故 / B:悲也 (Yang Bojun 1992 line; matches modern Sinitic chunking from review #82).
- B: Keep fused B:故悲也 (Wang Li line; treats Classical apodosis differently from modern).
**Recommendation**: A — consistency with the modern Sinitic family (zh / yue / nan / cdo / wuu …) and with the new F-role from review #82 outweighs the school divergence.

---

## #82-C Celtic VSO + bod split — B/E doubling (review #82, issues #27, #29 — cy / ga)
**Status**: policy decision needed
**Issue**: Welsh (cy) and Irish (ga) VSO syntax legitimately produces two B-role segments (Mae … drist) and/or two E-role segments (bod … wedi symud). This collides with the palette's 1-letter-1-role assumption. Same issue appears for the head-noun vs resumptive subject in #1 cy/ga (siwt / culaith placed under F).
**Options**:
- A: Extend palette for Celtic with dedicated role-letters (e.g., a new role for apodosis-predicate and a new role for resumptive subject).
- B: Treat the duplicated letter as native to Celtic VSO and document the exception.
- C: Force a merge (e.g., B:Mae drist) to satisfy 1-letter-1-role at the cost of split chunking.
**Recommendation**: B — least disruptive; document Celtic as a permitted exception alongside the existing `feedback_cross_sibling_role_consistency.md` outlier exemptions.

---

## #83-A JA/KO psych-verb active vs passive voice canonicalization (review #83, issues #18, #19, #23 — #77 ja, ko; #88 ja)
**Status**: typological policy decision needed
**Issue**: EN #77 uses overt periphrastic passive ("was surprised"); ja / ko use intransitive psych verbs (驚いた / 놀랐다). For #88, ja uses a lexical transitive (変える) while ko uses morphological causative (변화시키다). Should LangMap align voice strategy with EN, or honor each language's natural construction?
**Options**:
- A: Keep current natural-language strategies (ja/ko stay active psych; #88 stays lexical/morphological per language).
- B: Force passive alignment with EN reference (rewrite ja → 驚かされた, ko → 놀라게 됐다).
- C: Add a voice-strategy metadata field per cell so the visualization can flag the mismatch without rewriting the source.
**Recommendation**: A — natural-form preservation; mismatch is a typological feature, not a defect.

---

## #83-B Hungarian passive strategy unification (review #83, issues #17, #20 — #93 hu, #66 hu)
**Status**: policy decision needed
**Issue**: Hungarian dropped morphological passive in the 20c. Currently #93 uses 3pl impersonal (rendeznek), #66 uses adjectival past participle (borított). Inconsistent across event vs state.
**Options**:
- A: Document policy as "event-passive → 3pl impersonal; state-passive → adjectival participle"; keep current data.
- B: Switch all to `van + V-va/-ve` periphrastic passive for uniformity.
- C: Switch all to 3pl impersonal.
**Recommendation**: A — document the two-pronged Hungarian strategy and keep current data.

---

## #83-C Inuktitut (iu) native consultation (review #83, issues #5, #14 — #93 iu, #66 iu)
**Status**: blocked on native consult
**Issue**: Lexical stem mismatches detected: ᐃᓕᓐᓂᐊᖅᑐᑦ (learn) used where celebrate is needed (#93); ᒪᑐᐃᖓᔪᖅ (close) used where covered is needed (#66). Proposed fixes (ᐱᙳᐊᖅᐹᓪᓕᕐᑐᑦ / ᐊᐳᐃᖅᓯᒪᔪᖅ) are dictionary-supported but dialect variation and derivational morphology warrant native speaker review before applying.
**Options**:
- A: Apply proposed fixes now (Spalding 1998 supports both).
- B: Hold until Inuktitut native speaker / corpus consult.
**Recommendation**: B — preserve Inuktitut data integrity; queue for native review.

---

## #83-D Korean benefactive auxiliary -주다 (review #83, issue #24 — #94 ko)
**Status**: register policy decision needed
**Issue**: ko #94 uses 열어준다 (open + benefactive -주다) for "Language learning opens new doors." Natural in Korean but adds a benefactive nuance absent from EN/JA reference.
**Options**:
- A: Keep 열어준다 (natural Korean form; benefactive implication harmless).
- B: Switch to neutral 연다 (closer to EN/JA neutral transitive).
**Recommendation**: A — natural-form preservation, parallel to my #94 ဖွင့်ပေးသည် (also benefactive).

---

## #84-A Basque allocutive forms (review #84, issue #25 — eu request sentences)
**Status**: policy decision needed
**Issue**: All eu request sentences use familiar imperative + Mesedez (mid-register). Could use 2sg.formal allocutive (hitz egizu, emaiozu, erakuts iezadazu, esaidazu) to match the formal politeness of Mesedez.
**Options**:
- A: Keep familiar imperative + Mesedez as a documented mid-register policy.
- B: Promote all eu request verbs to 2sg.formal allocutive for register consistency.
**Recommendation**: A — register choice is owner-determined; current is internally consistent.

---

## #84-B Egyptian hieroglyphic (egy) bulk audit (review #84, issue #27 — #49 egy and family)
**Status**: bulk audit required
**Issue**: egy data has multi-role fusion (e.g., #49 egy C|E|F|G:𓅱𓂝𓏏 𓂋 𓅓𓂋𓇋𓏏 𓂝𓂝𓏏) systematically across sentences. Role-letter palette is not functional for egy.
**Options**:
- A: Dedicated review round to decompose egy NPs throughout the dataset.
- B: Treat egy as a low-resource language where multi-role fusion is the norm; document the exception.
**Recommendation**: A — schedule a dedicated egy structural review (similar to #79's apodosis F-role introduction); the current state hides palette utility for Middle Egyptian.

---

## #84-C ar_eg subject prefix as A-segment (review #84, issue #28 — #28 ar_eg)
**Status**: policy decision needed
**Issue**: ar_eg `تقترح` includes the 2sg subject prefix `ت-` inside the verb. Per `feedback_modal_verb_not_subject`, an independent pronoun would be A. The prefix is bound morphology so cannot be independent, but B|C fusion notation could surface it.
**Options**:
- A: Use B|C composite tag to make the subject prefix visible (analogous to #28 sw `B|C:unaweza kupendekeza` adopted in #84).
- B: Keep prefix invisible (standard Arabic morphology convention; conventional in MSA chunking).
**Recommendation**: A — B|C composite makes role-letter coverage explicit without disturbing the surface string; matches the precedent already established for sw in #84.

---

## #85-A Klingon AI lexical canonicalization (review #85, issue #22 — #88 tlh)
**Status**: KLI review pending
**Issue**: AI is unattested in TKD/KGT. Review #85 chose `yablI'` (KLI Hol Yejyo provisional) over `De'wI' yab` (fan-coined compound).
**Options**:
- A: Keep `yablI'` (KLI provisional, applied in #85).
- B: Revert to `De'wI' yab` pending official KLI ruling.
**Recommendation**: A — already applied; revisit if KLI publishes a different canonical form.

---

## #85-B Lojban grandmother nested-be vs lujvo (review #85, issue #24 — #51 jbo)
**Status**: Lojban style preference
**Issue**: jbo #51 uses nested `lo mamta be lo mamta be mi`. The lujvo `bemma` is registered in jbovlaste but uncommon.
**Options**:
- A: Keep nested-be (current, transparent for learners).
- B: Switch to `lo bemma be mi` (compact lujvo).
**Recommendation**: A — reviewer flagged as 要検討 and noted nested form is acceptable; no defect.

---

## #85-C Lojban relative possessor `be mi` separation (review #85, issue #25 — #46 jbo)
**Status**: Lojban style preference
**Issue**: `G:be mi` is separated from `B:lo pendo` even though `be` is a structural connector.
**Options**:
- A: Keep current G-role separation (transparent).
- B: Merge to `B|G:lo pendo be mi`.
**Recommendation**: A — reviewer marked non-actionable.

---

## #76-A Spanish palette role redefinitions (review #76, 11 deferred items)
**Status**: palette-level policy decision needed
**Issue**: The following all require redefining palette letter semantics across the Spanish dialect family:
- **#65** all 8 es variants invert C/D from EN (palette role-semantic mismatch).
- **#7** periphrastic future copula `va a estar`: single-C fused across 6 variants; if #21 (already applied as voy a + inf split) is the policy, #7 should split too.
- **#54** `hay que` (impersonal modal) vs `debemos` (personal modal): both target D; needs unified rule.
- **#41** NP-internal D/F/C ordering (libro/interesante swap) related to #65.
- **#49** B-letter conflict between `B:me` (clitic) and `B:el camino` (object) in `dígame / dime`.
- **#55** es_an `me tomo` reflexive: B|C split conflicts with adjacent B:café (non-adjacent B duplicate).
- **#67** light-verb `hago ejercicio`: single-D acceptable; needs explicit policy.
- **#76** subordinate clause position: 5 variants front main clause D, 3 front C-clause; sibling-divergent.
- **#81** `dolor de cabeza` vs `me duele la cabeza`: 8 variants drop B and D entirely; palette role redefinition needed.
- **#16** D=does and E=? missing for "what time"; B.3 covers most.
- **#89** all 8 variants use B=modal, D=verb; conflicts with `feedback_modal_verb_not_subject` (D=modal).
**Options**:
- A: Run a dedicated Spanish palette policy round to settle each cell's role semantics.
- B: Accept current state as documented dialect variation.
**Recommendation**: A — schedule a Spanish-palette policy round; many of these collide with `feedback_cross_sibling_role_consistency`.

---

## #79-A Turkic / Mongolic / Sinhala Q-particle remainder (review #79)
**Status**: cherry-picked; remainder pending
**Issue**: Review #79 applied the highest-impact Q-particle splits (tk/uz/ky/kk #10 ZWNJ split; mn_cn #28/#40/#68; mr #10/#28/#40/#68; tl/ceb #28/#68 ba; mg #40/#68 ve; eo/jbo #28/#40/#68; yo/ku/wo remainder). Holdovers explicitly deferred to next round:
- **my** #16 / #28 / #68 `လား / လဲ` (3 sentences remaining).
- **si** #4 / #28 / #68 `ද` (3 sentences remaining; only #10 applied).
- **tl / ceb** #10 / #40 `ba` partial splits (`ka bang`, `ka ba og`, `Alam mo ba`).
- **ja_aom #99 / ja_hak #99 / ja_osa #4** wh-Q fusion (allowed by `_omission_guidelines.md` B.6 but family-consistency audit candidates).
**Options**:
- A: Sweep remainder in a follow-up Q-particle round.
- B: Accept current state (intonation/typological allowance).
**Recommendation**: A — finish the sweep so the Q-particle policy is uniformly applied across the dataset.

---

## #61-A en_ie habitual `do be V-ing` remainder (review #61)
**Status**: partially applied; remainder pending policy
**Issue**: Three en_ie sentences had `do be V-ing` removed in #61 (#8, #73, #83). Remaining sentences with the construction (#3, #6, #14, #45, #55, #67, #92) were not changed. Filppula (1999) confirms habitual aspect is rural-only and dying; STIE uses standard progressive.
**Options**:
- A: Strip remaining `do be V-ing` to align en_ie with STIE.
- B: Keep remaining as flavor; document as rural Hiberno-English marker.
**Recommendation**: B — leftover instances were judged stylistically valid by reviewer; only the over-application cases were removed. Keep as-is.

---

## #61-B fr_af West African strong-adverb selection (review #61, issue #6)
**Status**: blocked on geographic policy
**Issue**: fr_af currently uses Metropolitan `vraiment`. Pöll 2001 documents `fan` (Wolof, Senegal), `déh` (Côte d'Ivoire), `wallaye` (broader). Each is region-specific; which fr_af should anchor to is undecided.
**Options**:
- A: Pick a base region for fr_af (e.g., Senegal → `fan`).
- B: Stay with regionally neutral `vraiment`.
**Recommendation**: A — fix a base region per `feedback_constructed_lang_midatlantic.md` analogy (real-world cultural anchor); without it, fr_af becomes Metropolitan-shaped.

---

## #61-C de_at / de_by Bavarian/Austrian register policy (review #61, issue #9)
**Status**: policy decision needed
**Issue**: Several de_at / de_by sentences match Hochdeutsch exactly; Bavarian/Austrian flavor is opportunity-missed but Austrian written register IS Hochdeutsch-leaning.
**Options**:
- A: Keep Hochdeutsch surface for de_at written register.
- B: Push toward Bavarian/Austrian colloquial for color.
**Recommendation**: A — written register policy; addressed case-by-case when colloquial markers genuinely change meaning.

---

## Summary
- **Policy items**: 17 entries across reviews #61 / #76 / #79 / #82 / #83 / #84 / #85 / #86.
- **Dominant themes**:
  1. **Palette role-semantic redefinition** (Spanish #76 cluster, Celtic VSO #82, Aramaic palette anomalies #86).
  2. **Voice / mood typological canonicalization** (ja/ko psych verbs, Hungarian passive, ko benefactive).
  3. **Native consult required** (iu lexical stems, KLI new-word ruling).
  4. **Register / regional anchor selection** (eu allocutive, fr_af base region, de_at colloquial).
  5. **Q-particle / chunking sweep remainder** (#79 Turkic/Mongolic/Indic leftovers, #84 egy bulk audit).
  6. **Style preferences in constructed languages** (jbo nested-be vs lujvo, jbo be-separation).
