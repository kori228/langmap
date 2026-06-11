# Wordmap review #132 — Baltic & Balto-Slavic round-2 auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am the round-2 Baltic auditor, returning after the round-1 Baltic pass (review #04) and the suprasegmental sweeps that touched the Lithuanian column in reviews #74 (intra-column stress consistency) and #117 (the full lt stress sweep). My remit is the four Baltic codes that actually exist in the live data — `lt` (standard Lithuanian, Aukštaitian base), `lv` (standard Latvian), `prg` (revived/Neo-Prussian, i.e. Prūsiskan, the orthography this dataset uses for Old Prussian), and `sgs` (Samogitian/žemaičių). I know this project's data model cold: each `words/<concept>.js` holds `WORDS.<concept>.data` as `<code>: ["surface","ipa"]` tuples, the IPA slot carries broad-phonemic IPA (not native romanization, per `docs/words/CONTRIBUTING.md`), and the governing house rule is that a feature is either marked across a language's whole 20-concept column or omitted across all of it — so a single cell that breaks its column is a defect, not a style choice. My reference grammars are Ambrazas (ed.), *Lithuanian Grammar* (1997) and Mathiassen, *A Short Grammar of Lithuanian* (1996) for Lithuanian pitch/stress and the ė≈/eː/ vs e≈/ɛ/ split; Nau, *Latvian* (LWM 217, 1998) and the Wikipedia/Wiktionary `Help:IPA/Latvian` norms for the Latvian broken tone, the long vowels (ā ē ī ū → ː), palatalization (ķ ļ ņ ģ), and the crucial native-⟨o⟩ = /uɔ/ rule; Mažiulis, *Prūsų kalbos etimologijos žodynas* and Schmalstieg, *An Old Prussian Grammar* (1974) for Prussian lexis; and Wikipedia's *Samogitian language* description for the `ou`/`ėi` digraphs and the lowered ė. I deliberately do **not** re-report items already adjudicated in closed reviews: the lt `/æ/→/ɛ/` and spurious-`/ɐː/` cluster and the lt heart `rʲ` (review #04 #4–6/#12–13), the complete lt stress sweep (#117 #1–3, #74 #6–7), the prg `ck`=/k/ corrections (#20 #9–10), and the prg `poūton` /oʊ/ hold (#20 #24, explicitly won't-fix) and prg fire `panːo` geminate hold (#04 #22). Every Current value below was read verbatim from the live file at the cited line and re-verified by grep on 2026-06-11; each consistency flag cites its sibling evidence explicitly.

---

## Issues found

### 1. `prg` — tree — `garbs` is the Prussian word for *mountain*, not *tree*
- **File:** words/tree.js line 317
- **Current:** `["garbs", "ɡarbs"]`
- **Expected:** `["garrin", "ˈɡarin"]` (Elbing/Neo-Prussian *garrin* ~ *garian* "tree"); IPA `ˈɡarin`
- **Why:** This is a semantic error. Prussian `garbs`/`garbis` (← root *-garb-*, cognate with Slavic *gъrbъ* "hump", Lith. *garbana*) means **"mountain, hill"** — Mažiulis (*Prūsų kalbos etimologijos žodynas*) reconstructs *garbis* "Berg" from the many Germanized Prussian toponyms (e.g. *Gailgarben*), and Kurschat's Lith.-German dictionary glosses Prussian *garbs* as "a mountain". The attested Prussian word for *tree* is the Elbing-Vocabulary **garian/garrin** (neuter), the standard Swadesh entry and the form the Neo-Prussian (Prūsiskan) standard this column otherwise follows also uses. `garbs` ("mountain") in the tree slot is the same class of error as review #04 #1 (Greek *πάππος* "grandfather" filed under *father*): a real-but-wrong-concept lemma.

---

### 2. `lv` — hand — native Latvian ⟨o⟩ is the diphthong /uɔ/, lost here
- **File:** words/hand.js line 316
- **Current:** `["roka", "ˈrɔka"]`
- **Expected:** `["roka", "ˈruɔka"]`
- **Why:** In native (non-loan) Latvian words the letter ⟨o⟩ spells the diphthong **/uɔ/**, not the monophthong /ɔ/ (Nau 1998 §2; `Help:IPA/Latvian`). *roka* "hand/arm" is a native word and is pronounced [ˈru͜ɔka]; Wiktionary gives **[ɾùoka]** (the grave marking the broken tone the column otherwise omits). The dataset's own house style for native ⟨o⟩ is visible one file over: `tree.js` line 316 `lv` = `["koks", "kuɔks"]` correctly renders ⟨o⟩ → /uɔ/ (Wiktionary `koks` = [kùoks]). `roka`→`ˈrɔka` is therefore an internal contradiction — the only other native-⟨o⟩ entry in the lv column transcribes the very diphthong this one drops. (Note: review #04 #20 changed `ruɔka`→`ˈrɔka` on the stated rationale that "/uɔ/ is Lithuanian, not Latvian"; that premise is mistaken — /uɔ/ is precisely the native Latvian value of ⟨o⟩, and the surviving sibling `kuɔks` proves the column knows it. New sibling evidence, hence re-opened.)

---

### 3. `lv` — column-wide — stress marked on only 2 of 20 cells (`ˈkacis`, `ˈrɔka`)
- **File:** words/cat.js line 316 and words/hand.js line 316
- **Current:** `cat` = `["kaķis", "ˈkacis"]`; `hand` = `["roka", "ˈrɔka"]` — the only two lv cells carrying `ˈ`
- **Expected:** either drop the mark from both (→ `kacis`, `ruɔka`/`rɔka`) to match the column, or mark all 20
- **Why:** Latvian has fixed, fully predictable word-initial stress (Nau 1998 §2.4), so it is the canonical case for *omitting* the mark — and 18 of the 20 lv cells do omit it: `tēvs → teːvs` (father.js:316), `māte → maːtɛ` (mother.js:322), `saule → saulɛ` (sun.js:322), `mēness → meːnɛs` (moon.js:322), `uguns → uɡuns` (fire.js:322), `ūdens → uːdɛns` (water.js:323), `mīlestība → miːlɛstiːba` (love.js:323), etc. Only `ˈkacis` (cat.js:316) and `ˈrɔka` (hand.js:316) carry `ˈ` — both introduced by review #04 (#4 and #20) as side-effects of unrelated segmental fixes, never as a column-level stress decision. The per-language all-or-nothing rule (the same logic that drove the lt sweep in #117) makes these two the outliers. The cleanest resolution is to drop the two marks, since predictable initial stress is the dataset's reason to leave Latvian unmarked; the segmental fix in issue #2 (`ˈrɔka`→`ruɔka`) can absorb the hand cell.

---

### 4. `sgs` — dog / moon / water — the `ou` digraph is a diphthong, here monophthongized inconsistently
- **File:** words/dog.js line 315; words/moon.js line 321; words/water.js line 322
- **Current:** `dog` = `["šou", "ʃoː"]`; `moon` = `["mienou", "mʲeːnuː"]`; `water` = `["vondou", "vɔnduː"]`
- **Expected:** a single diphthongal value for `ou`, e.g. `dog` `ʃɔu`, `moon` `mʲeːnɔu`, `water` `vɔndɔu` (Samogitian `ou` ≈ [ɔu]/[ou], the reflex of standard-Lith. *uo/ō*)
- **Why:** In Samogitian orthography `ou` is one of the two characteristic added **digraph diphthongs** (`ou`, `ėi`) — Wikipedia, *Samogitian language* (Phonology): northern Samogitian turns *uo* into *ọu* [ɔu]. It is a diphthong, not a long monophthong. The three `ou`-words here both (a) collapse the diphthong to a monophthong and (b) do so *inconsistently*: `mienou` and `vondou` give /uː/, while `šou` gives /oː/. There is no phonological basis for the same digraph yielding /uː/ in two cells and /oː/ in a third; at minimum the value must be unified, and on the source it should be the diphthong [ɔu]. (Contrast the parallel `au` digraph, which the column *does* keep diphthongal: `saulė → sauleː`, sun.js:321.)

---

### 5. `sgs` — eye / heart — letter ⟨ė⟩ transcribed /ɛː/ here but /eː/ in six sibling cells
- **File:** words/eye.js line 315 and words/heart.js line 315
- **Current:** `eye` = `["akės", "akʲɛːs"]`; `heart` = `["šėrdės", "ʃʲɛːrdʲɛːs"]`
- **Expected:** align ⟨ė⟩ to the column value /eː/ → `eye` `akʲeːs`, `heart` `ʃʲeːrdʲeːs` (or, if the lowered Samogitian ė is intended, apply /ɛː/ uniformly across the whole column)
- **Why:** A broad-phonemic column must give one grapheme one value. Six sgs cells render ⟨ė⟩ as **/eː/** — `katė → katʲeː` (cat.js:315), `gertė → ɡʲɛrteː` (drink.js:315), `valgītė → vaɫɡʲiːteː` (eat.js:315), `ognės → ɔɡneːs` (fire.js:321), `saulė → sauleː` (sun.js:321), `meilė → …leː` (love.js:322) — but two render it **/ɛː/**: `akės` and `šėrdės`. The sharpest evidence is a near-minimal pair of identical `-ės` endings: `ognės → ɔɡneːs` vs `akės → akʲɛːs` — same suffix, two different vowels. Two of twenty is the outlier set; the column majority is /eː/.

---

### 6. `sgs` — love — spurious length on the first element of the `ei` diphthong
- **File:** words/love.js line 322
- **Current:** `["meilė", "mʲɛːileː"]`
- **Expected:** `["meilė", "mʲɛileː"]`
- **Why:** The transcription `mʲɛːileː` puts a long `ɛː` on the first half of the `ei` diphthong (m-ʲ-**ɛː**-i-l-eː), i.e. it reads the diphthong as long-vowel-plus-glide. Diphthong elements are not transcribed long in this dataset's Baltic columns: the parallel sgs diphthong cell `saulė → sauleː` (sun.js:321) writes `au` as plain `au` with no length on the first element, and the lt sibling `meilė → ˈmʲɛɪlʲeː` (love.js:321) likewise writes the `ei` nucleus as short `ɛɪ`. The lone `ɛː` here is an over-transcription inconsistent with both its sgs and its lt siblings; the trailing `eː` (the ⟨ė⟩) is correct per issue #5.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

- **132-1 (prg tree `garbs`/`ɡarbs`→`garrin`/`ˈɡarin`):** applied (applied by orchestrator this round). Sourced: Elbing Vocabulary entry 628 "Garian" glossed "Bom" (Baum, tree); entry 028 "Grabis/[Garbis]" glossed "Berg" (mountain) — F. Kortlandt, edition of the Elbing Vocabulary (kortlandt.nl/editions/elbv.html). So `garbs` is indeed the mountain word; the tree word is Elbing *garian*, normalized in the revived-Prussian (Prūsiskan) standard the column follows as *garrin* /ˈɡarin/ (⟨rr⟩ marks preceding short vowel, not gemination). Applied the reviewer's recommended Neo-Prussian form.
- **132-2 (lv hand `ˈrɔka`→`ruɔka`):** applied (applied by orchestrator this round). Native ⟨o⟩ = /uɔ/ (Nau 1998); sibling `kuɔks` (tree.js:316) proves the column rule. Stress mark also dropped per 132-3.
- **132-3 (lv stress, cat `ˈkacis`→`kacis`):** applied (applied by orchestrator this round). Latvian has predictable initial stress and 18/20 lv cells omit `ˈ`; the two marked cells (cat, hand) were #04 side-effects. Dropped both marks (hand absorbed via 132-2).
- **132-4 (sgs ou digraph → diphthong `ɔu`):** applied (applied by orchestrator this round). dog `ʃoː`→`ʃɔu`, moon `mʲeːnuː`→`mʲeːnɔu`, water `vɔnduː`→`vɔndɔu`. Wikipedia (*Samogitian language*, Phonology) confirms `ou` is a digraph diphthong, not a monophthong; current cells both monophthongized and disagreed (/uː/ vs /oː/). Unified to the sourced diphthong [ɔu].
- **132-5 (sgs ė `/ɛː/`→`/eː/`):** applied (applied by orchestrator this round). eye `akʲɛːs`→`akʲeːs`, heart `ʃʲɛːrdʲɛːs`→`ʃʲeːrdʲeːs`. Column majority (6 cells incl. `ognės→ɔɡneːs`, near-minimal pair with `akės`) renders ⟨ė⟩ as /eː/.
- **132-6 (sgs love `mʲɛːileː`→`mʲɛileː`):** applied (applied by orchestrator this round). Diphthong first element not transcribed long; cf. sgs `sauleː` and lt `ˈmʲɛɪlʲeː`.

## Reviewer round-2 response (再評価 round-2)

I re-grepped every cited cell against the live data files on 2026-06-11. All six fixes are present and correct:

- **132-1** ✓ tree.js:317 `prg: ["garrin", "ˈɡarin"]`. The semantic error (`garbs` = mountain) is corrected; the worker's Elbing Vocabulary citation (entry 628 "Garian"/"Bom"; entry 028 "Grabis/Garbis"/"Berg", Kortlandt edition) is credible and confirms the mountain-vs-tree distinction. ⟨rr⟩ marking a preceding short vowel (not gemination) is the correct Prūsiskan convention. Accepted.
- **132-2** ✓ hand.js:316 `lv: ["roka", "ruɔka"]`. Native ⟨o⟩ = /uɔ/ restored, matching sibling `kuɔks` (tree.js:316); stress mark dropped. Accepted.
- **132-3** ✓ cat.js:316 `lv: ["kaķis", "kacis"]` — mark dropped; hand absorbed via 132-2. The lv column is now uniformly stress-unmarked (predictable initial stress). Accepted.
- **132-4** ✓ dog.js:315 `ʃɔu`, moon.js:321 `mʲeːnɔu`, water.js:322 `vɔndɔu`. The `ou` digraph is now a unified diphthong [ɔu] across all three cells; the prior /uː/-vs-/oː/ inconsistency is gone. Accepted.
- **132-5** ✓ eye.js:315 `akʲeːs`, heart.js:315 `ʃʲeːrdʲeːs`. ⟨ė⟩ now /eː/ matching the 6-cell column majority (near-minimal pair `ognės→ɔɡneːs` vs `akės→akʲeːs` now aligned). Accepted.
- **132-6** ✓ love.js:322 `mʲɛileː`. Spurious length on the `ei` diphthong's first element removed; consistent with sgs `sauleː` and lt `ˈmʲɛɪlʲeː`. Accepted.

No new issues spotted during verification.

### Scorecard
| Item | Judgement |
|------|-----------|
| 132-1 prg tree garrin | ✓ accept |
| 132-2 lv hand ruɔka | ✓ accept |
| 132-3 lv stress drop | ✓ accept |
| 132-4 sgs ou → ɔu | ✓ accept |
| 132-5 sgs ė → eː | ✓ accept |
| 132-6 sgs love ei length | ✓ accept |

All six items applied and verified in live data. No held, partial, or rejected items; no new issues.

**File status: CLOSED** — nothing left to address.
