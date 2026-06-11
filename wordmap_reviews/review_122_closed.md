# Wordmap review #122 — Cantonese & Yue round-3 auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a Yue (粵) dialectologist and lexicographer carrying out a third-round audit of the Cantonese cluster of this dataset — the prestige Hong Kong/Guangzhou norm (`yue`), Guangzhou (`yue_gz`), Zhongshan/Shiqi (`yue_zs`), Dongguan (`yue_dg`), Nanning (`yue_nn`) and Taishanese/Hoisan-wa (`yue_ts`). I know this corpus's conventions intimately: each `words/<concept>.js` file stores `WORDS.<concept>.data.<code> = ["surface", "ipa"]`, several Pacific/Sinitic keys are emitted twice in two near-identical appended `data:` blocks (so any fix to such a key must be applied to BOTH occurrences), and the IPA slot carries Chao tone letters. My primary references are the LSHK 香港語言學學會 *Jyutping* romanisation scheme (1993/2002), Bauer & Benedict (1997) *Modern Cantonese Phonology* (Trends in Linguistics 102) for the segmental inventory, the long/short pair /aː/ vs /ɐ/, the affricate-palatalisation environment, and the Chao values of the citation tones (陰平 55/53, 陰上 35, 陰去 33, 陽平 21, 陽上 13, 陽去 22, 陰入 5, 中入 3, 陽入 2), and Matthews & Yip (2011) *Cantonese: A Comprehensive Grammar* for the 上聲 register split and everyday lexis. For the comparative sub-varieties I lean on Yue-Hashimoto (1972) and the Sei-yap descriptions cited in the project's own review #55. I read `docs/words/LANG_CODES.md` (which fixes `yue_gz` = Gaozhou… note: the doc labels it "Gaozhou Yue", but the data column behaves as a Guangzhou-prestige reading — I treat its phonology as prestige-equivalent, matching review #55/#93's own usage) and `docs/words/CONTRIBUTING.md`, and I re-grepped every closed review touching Yue (#11, #52, #55, #70, #88, #90, #93, #114) so as not to re-litigate the many items already fixed or adjudicated as won't-fix there (e.g. the Taishanese tone-column pass, the `yue_zs` ˥˧ 陰平 convention, the `yue_nn` 愛 /ŋ-/ onset, the `yue_gz` 爸爸 kin-tone, the checked-tone ˨/˨˨ notation question, and the duplicate-block structure). Every Current value below was re-grepped verbatim from the live files on 2026-06-11 and confirmed still present.

---

## Issues found

### 1. `yue` — eye — 眼 mis-toned low-falling ˧˩ for 陽上 (should be low-rising ˩˧)
- **File:** words/eye.js line 72
- **Current:** `["眼", "ŋaːn˧˩"]`
- **Expected:** `["眼", "ŋaːn˩˧"]`
- **Why:** 眼 is Jyutping *ngaan5*, tone category 陽上 = low-rising, Chao value 13 = ˩˧. The current ˧˩ is a falling contour (the value of 陽平 tone 4, 21), so the syllable is marked as the wrong tone — the exact same tone-category slip that review #55 issue #1 corrected for 你 *nei5* in `hello.js` (also 陽上, also written ˧˩). That fix did not propagate to this sister 陽上 word. All three other Yue varieties that record 眼 agree on the low-rising contour: `yue_zs` `ŋaːn˩˧` (line 349), `yue_dg` `ŋaːn˩˧` (lines 410/450), `yue_nn` `ŋaːn˩˧` (lines 411/451); only the prestige `yue` diverges. (LSHK Jyutping *ngaan5*; Bauer & Benedict 1997 §3 tone table, 陽上 = 13; Matthews & Yip 2011 on the 上聲 register split.)

---

### 2. `yue_gz` — eye — 眼 mis-toned high-rising ˧˥, erasing the 陽上/陰上 register split
- **File:** words/eye.js line 983
- **Current:** `["眼", "ŋaːn˧˥"]`
- **Expected:** `["眼", "ŋaːn˩˧"]`
- **Why:** 眼 *ngaan5* is 陽上 = low-rising 13 = ˩˧, not the high-rising 35 = ˧˥ (which is 陰上, tone 2). Marking it ˧˥ collapses 陽上 into 陰上 and erases the 上聲 register split — precisely the error review #55 issue #5 fixed for `yue_gz` 你 *nei5* (`hello.js`, ˧˥ → ˩˧). Within this same `yue_gz` column the genuine 陰上 words correctly carry ˧˥ (好 `hou˧˥`, 狗 `kɐu˧˥`, 手 `sɐu˧˥`, 火 `fɔ˧˥`, 水 `sɵi˧˥`), so applying ˧˥ to a 陽上 word makes 眼 indistinguishable from them. The sibling varieties all give the correct low-rising `ŋaːn˩˧` (`yue_zs/dg/nn`). (LSHK *ngaan5* = 13; Bauer & Benedict 1997, 陰上 35 vs 陽上 13.)

---

### 3. `yue` — thanks — 謝 transcribed with alveolo-palatal /t͡ɕ/ in the wrong environment
- **File:** words/thanks.js line 72
- **Current:** `["多謝", "tɔː˥t͡ɕɛː˨"]`
- **Expected:** `["多謝", "tɔː˥t͡sɛː˨"]`
- **Why:** 謝 is Jyutping *ze6*, initial /t͡s/ (the alveolar affricate series). In Cantonese the alveolar affricates /t͡s, t͡sʰ, s/ palatalise to the alveolo-palatal allophones [t͡ɕ, t͡ɕʰ, ɕ] ONLY before the close front vowels /iː/ and /yː/ (Bauer & Benedict 1997 §2; Cantonese phonology, palatalisation environment). 謝 has the nucleus /ɛː/ — a mid-open front vowel, NOT close — so the palatalising environment is absent and the surface initial is plain [t͡s]. Every sister Yue entry for this word correctly uses the alveolar series: `yue_zs` `tsɛː˨` (line 349), `yue_dg` `tsɛː˨` (lines 410/450), `yue_nn` `tse˨` (lines 411/451), `yue_gz` `tsɛ˨˨` (line 983); only the prestige `yue` writes /t͡ɕ/. The transcription is wrong on both the phonological rule and the sibling-consistency check. (Bauer & Benedict 1997 on /t͡s/→[t͡ɕ] / _ {iː, yː}; LSHK *ze6*.)

---

### 4. `yue` — moon — concept label `月亮` contradicts the colloquial Cantonese datum `月光`
- **File:** words/moon.js line 11 (label) vs line 72 (data)
- **Current:** label `yue: "月亮"`; data `yue: ["月光", "jyːt˨ kʷɔːŋ˥"]`
- **Expected:** harmonise the label to `月光` (the form every Yue datum uses), or document why the UI label keeps the written/Mandarin-style `月亮`
- **Why:** The everyday Cantonese word for the celestial moon is 月光 (*jyut6 gwong1*); 月亮 (*jyut6 loeng6*) is the written/Putonghua-influenced form. The data column reflects the colloquial reality — ALL six Yue varieties give 月光: `yue` (line 72), `yue_zs` (line 355), `yue_dg` (lines 416/456), `yue_nn` (lines 417/457), `yue_ts` (line 748), `yue_gz` (line 989). The UI `label.yue` (line 11) is the lone outlier at `月亮`, contradicting its own file's data. This is a label↔data consistency defect (label auditing is normally review #114's remit; flagging it here because the correct Cantonese form is the phonological one I audit). Matthews & Yip 2011 list 月光 as the basic colloquial noun. (Cf. review #114's method of catching labels that contradict their own file.)

---

### 5. `yue_nn` — mother / father — kinship-prefix 老 rendered `lau˧˩`, out of step with the variety's own 陽上 ˩˧ and /ou/ rime
- **File:** words/mother.js lines 417/457 (`老妈`); words/father.js lines 411/451 (`老窦`)
- **Current:** `['老妈', 'lau˧˩ma˥˥']` and `['老窦', 'lau˧˩tɐu˨˨']`
- **Expected:** review toward `lou˩˧…` (or document the Nanning 老-prefix reading) — at minimum reconcile the rime and tone with the variety's other reflexes
- **Why:** Two internal-consistency mismatches in the 老 syllable. (a) Tone: 老 is *lou5*, 陽上; this same `yue_nn` column transcribes the other 陽上 word 眼 as low-rising `ŋaːn˩˧` (eye.js lines 411/451), but here marks 老 as low-falling ˧˩, so two 陽上 syllables in one variety get different contours. (b) Rime: 老 and 好 share the /ou/ rime in Cantonese, and `yue_nn` keeps /ou/ in 好 `hou˧˥` (good.js line 411), yet writes 老 with /au/ (`lau`). The sibling `yue_zs` gives the expected `lou˩˧` in both 老母 (mother.js line 355) and 老豆 (father.js line 349). I flag this conservatively: Nanning does have documented rime shifts (e.g. 貓 `meu` for standard `maːu`, cat.js line 411), and the 老-prefix can carry a changed tone, so a sourced Nanning kinship reading could legitimately differ — but as it stands the entry is internally inconsistent with `yue_nn`'s own 眼 and 好. (Bauer & Benedict 1997 on /ou/ rime and 陽上 = 13; Yue-Hashimoto 1972 tone categories.)

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

- **122-1 (`yue` eye 眼 tone):** APPLIED (applied by orchestrator this round). eye.js:72 `["眼", "ŋaːn˧˩"]` → `["眼", "ŋaːn˩˧"]`. 陽上 = low-rising 13; siblings `yue_zs/dg/nn` all give `ŋaːn˩˧`. Clear tone-category slip.
- **122-2 (`yue_gz` eye 眼 tone):** APPLIED (applied by orchestrator this round). eye.js:983 `["眼", "ŋaːn˧˥"]` → `["眼", "ŋaːn˩˧"]`. ˧˥ is 陰上; 眼 is 陽上 = ˩˧. The `yue_gz` 陰上 words (好/狗/手/火/水) correctly keep ˧˥, so 眼 was collapsing the register split.
- **122-3 (`yue` thanks 謝 onset):** APPLIED (applied by orchestrator this round). thanks.js:72 `["多謝", "tɔː˥t͡ɕɛː˨"]` → `["多謝", "tɔː˥t͡sɛː˨"]`. /ts/→[tɕ] palatalisation applies only before close front /iː yː/; 謝 has /ɛː/, so plain [ts]. All siblings use the alveolar series. Clear error on rule + sibling-consistency.
- **122-4 (`yue` moon label↔data):** APPLIED (applied by orchestrator this round). moon.js:11 label `yue: "月亮"` → `yue: "月光"`. All six Yue data cells give 月光 (`jyːt˨ kʷɔːŋ˥`), and 月光 is the colloquial Cantonese moon; the label was the lone outlier contradicting its own file. Label↔data consistency fix.
- **122-5 (`yue_nn` 老 in 老妈/老窦):** HELD-WITH-RATIONALE. The reviewer flagged this conservatively and acknowledged Nanning's documented rime shifts (e.g. 貓 `meu`) mean a sourced Nanning 老-prefix kinship reading could legitimately diverge in both tone and rime. I attempted to source a Nanning-specific reading of 老母 / 老窦 (老) and could not find an authoritative Nanning value offline (general Cantonese `lou5` 陽上 is well attested, but the Nanning-column kinship-prefix reading specifically is not). Per the editing policy I do not guess a value into a variety with known idiosyncratic shifts. Recommend the reviewer either escalate to a Nanning-Yue source/linguist for the 老-prefix reading, or accept the current `lau˧˩` with a documented internal-inconsistency caveat (vs `yue_nn` 眼 `ŋaːn˩˧` and 好 `hou˧˥`). Left OPEN.

## Reviewer round-2 response (再評価 round-2)

I re-grepped every claimed value verbatim from the live files on 2026-06-11. Per-item adjudication:

- **122-1 (`yue` eye 眼 tone): ✓ ACCEPT.** Verified eye.js:72 now `["眼", "ŋaːn˩˧"]`. Correct 陽上 low-rising 13; matches siblings `yue_zs/dg/nn`.
- **122-2 (`yue_gz` eye 眼 tone): ✓ ACCEPT.** Verified eye.js:983 now `["眼", "ŋaːn˩˧"]`. Restores the 上聲 register split (陰上 ˧˥ vs 陽上 ˩˧); the `yue_gz` 陰上 words keep ˧˥ as expected.
- **122-3 (`yue` thanks 謝 onset): ✓ ACCEPT.** Verified thanks.js:72 now `["多謝", "tɔː˥t͡sɛː˨"]`. Plain alveolar [t͡s] before /ɛː/ is correct (palatalisation only before close front /iː yː/); consistent with all siblings.
- **122-4 (`yue` moon label↔data): ✓ ACCEPT.** Verified moon.js:11 label now `yue: "月光"`, harmonised with all six Yue data cells and the colloquial Cantonese form.
- **122-5 (`yue_nn` 老 in 老妈/老窦): ACCEPT-AS-KNOWN-LIMITATION (close with caveat).** Verified current live values: mother.js:417/457 `['老妈', 'lau˧˩ma˥˥']`, father.js:411/451 `['老窦', 'lau˧˩tɐu˨˨']` — still `lau˧˩`, unchanged. I raised this conservatively from the outset, explicitly acknowledging that Nanning's documented rime shifts mean a sourced 老-prefix reading could legitimately diverge in both rime and tone. The worker made a genuine offline-sourcing effort and credibly reports being unable to locate an authoritative Nanning-specific kinship-prefix value, and correctly declined to guess a value into a variety with known idiosyncratic shifts. This is exactly the loop-termination case: the only remaining open item is externally-sourced data that has been credibly documented as unsourceable offline, with no concretely actionable next step the dev team has not already attempted. Per the round-2 loop-termination policy I do NOT keep this open indefinitely. I accept the current `lau˧˩` reading with the following documented caveat rather than demanding the impossible again.

  **KNOWN LIMITATION (needs human linguist):** The `yue_nn` (Nanning) 老-prefix in 老妈 (mother) and 老窦 (father) is currently transcribed `lau˧˩` (low-falling /au/ rime). This is internally inconsistent with the same column's other 陽上 reflex 眼 `ŋaːn˩˧` (low-rising) and its /ou/-rime word 好 `hou˧˥`; the sibling `yue_zs` gives `lou˩˧`. General Cantonese supports `lou5` (陽上, /ou/, low-rising). No authoritative Nanning-Yue source for the kinship-prefix reading could be located offline, and Nanning's documented rime shifts mean its value could legitimately diverge, so the entry is left as-is pending verification by a Nanning-Yue specialist.

### New issues
None. Verification surfaced no new errors.

### Scorecard
| Item | Judgement |
|------|-----------|
| 122-1 | ✓ accept (verified) |
| 122-2 | ✓ accept (verified) |
| 122-3 | ✓ accept (verified) |
| 122-4 | ✓ accept (verified) |
| 122-5 | accept as documented known limitation (loop-termination; unsourceable offline) |

All four clear errors are fixed-and-verified in live data. The sole remaining item (122-5) was flagged conservatively, is credibly unsourceable offline, and is closed with an explicit known-limitation caveat per the round-2 loop-termination rule.

**File status: CLOSED** — nothing left to address.
