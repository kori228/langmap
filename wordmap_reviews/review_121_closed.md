# Wordmap review #121 — Mandarin & Pinyin standard-phonology round-3 auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a phonologist of Standard Mandarin (普通话 / Putonghua) and the Beijing-based standard variety, auditing here for the third dedicated Mandarin round after #56, #88 and #93. My focus is the `zh` standard row specifically — the segmental realisation of the diphthong rimes (-ai, -ei, -ao, -ou), the back-vs-front low-vowel allophony (ɑ before -ng / a elsewhere), the alveolo-palatal series ⟨j q x⟩ = [tɕ tɕʰ ɕ], the retroflex series, the apical vowel after sibilants, the neutral tone (轻声) on second syllables, and the third-tone / yi-bu sandhi questions. I know this dataset's standing conventions intimately: every neutral second syllable is written tone-less (妈妈 `ma˥ma`, 谢谢 `ɕjɛ˥˩ɕjɛ`, 眼睛 `…t͡ɕiŋ`, 月亮 `…ljɑŋ`); the `zh` rows are citation forms, so 你好 `ni˧˩˧xaʊ̯˧˩˧` and 一 `i˥` are deliberately left in citation and the T3/yi sandhi is *not* applied (adjudicated as policy in #56 #5/#15, #88 #2); the apical vowel after sibilants is written `ɨ` (吃 `ʈʂʰɨ`, 房子 `t͡sɨ`); affricate tie-bar uniformity (`t͡s`/`t͡ɕ` tied but `ʈʂʰ` untied) was accepted as a deferred dataset-wide normalization, not a per-file error (#56 #3). I therefore deliberately do **not** re-raise any of those. My reference works are San Duanmu, *The Phonology of Standard Chinese* (2nd ed., OUP 2007), §§2–3 (segments and rimes) and ch. 11 (tone, neutral tone, sandhi); Lee & Zee, *Standard Chinese (Beijing)*, *Illustration of the IPA* (JIPA 33, 2003) for the canonical narrow values of the rimes; and the project docs `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md`. After three prior rounds the `zh` standard row is genuinely clean; the residue below is fine-grained and small, and I have not padded it.

---

## Issues found

### 1. `zh` — cat — 猫 uses back `ɑ` in the -ao rime where its rime-mate 好 uses front `a`
- **File:** words/cat.js line 71
- **Current:** `["猫", "mɑʊ̯˥"]`
- **Expected:** `["猫", "maʊ̯˥"]`
- **Why:** 猫 *māo* and 好 *hǎo* share the identical Pinyin rime -ao. The `zh` row writes 好 as `xaʊ̯˧˩˧` (good.js:71) and again `xaʊ̯˧˩˧` inside 你好 (hello.js:71) with the **front** low vowel `a`, but writes 猫 with the **back** low vowel `ɑ` (`mɑʊ̯`). One rime cannot have two different nuclei within the same variety. Lee & Zee (2003) give a single value for -ao, and the dataset's own low-vowel rule is principled and visible elsewhere: it uses back `ɑ` only in the velar-nasal rimes (房 `fɑŋ`, 阳 `jɑŋ`, 亮 `ljɑŋ`) and front `a` in the open / -ai / -ao environments (妈 `ma`, 爸 `pa`, 太 `tʰaɪ̯`, 爱 `aɪ̯`, 好 `xaʊ̯`). 猫 is the lone outlier and should align to the -ao majority form `maʊ̯`. (Duanmu 2007 §2 on the [a]~[ɑ] allophony conditioned by the coda; the rime is the same a-nucleus diphthong as 好.)

---

### 2. `zh` — cat / good — consistency cross-check confirming the direction of fix
- **File:** words/cat.js line 71; cf. words/good.js line 71, words/hello.js line 71
- **Current:** 猫 `["猫", "mɑʊ̯˥"]` vs 好 `["好", "xaʊ̯˧˩˧"]` vs 你好's 好 `xaʊ̯˧˩˧`
- **Expected:** unify on `aʊ̯` (the two-to-one majority and the form already used for the second-most-common -ao morpheme 好)
- **Why:** This entry documents the sibling evidence proving #1 is a 猫 error rather than a 好 error: the -ao nucleus is written `aʊ̯` in **two** independent `zh` slots (好 in good.js and 好 in 你好) and `ɑʊ̯` in only **one** (猫). The clone row `zh_db` repeats exactly the same split (good.js:181 `xaʊ̯`, cat.js:181 `mɑʊ̯`), so this is a propagated single-source slip, not a deliberate per-word distinction. Fixing 猫→`maʊ̯` makes the -ao rime internally uniform across the whole Mandarin cluster. (Not a separate phonological claim from #1; recorded so the orchestrator can verify the majority form before editing.)

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

- **121-1 (`zh` cat 猫 -ao nucleus):** APPLIED (applied by orchestrator this round). cat.js:71 `["猫", "mɑʊ̯˥"]` → `["猫", "maʊ̯˥"]`. Confirmed the -ao rime uses front `a` in 好 `xaʊ̯˧˩˧` (good.js:71) and in 你好's 好 `xaʊ̯˧˩˧` (hello.js:71); 猫 was the lone outlier with back `ɑ`. Clear internal inconsistency, fixed to the two-to-one majority form.
- **121-2 (cross-check + zh_db propagation):** APPLIED (applied by orchestrator this round) for the propagated clone. No separate phonological claim, but the same single-source slip is present in the `zh_db` clone row: cat.js:181 `zh_db: ["猫", "mɑʊ̯˥"]` → `["猫", "maʊ̯˥"]` (good.js:181 already reads `xaʊ̯˧˩˧`). Fixing both keeps the whole Mandarin -ao cluster internally uniform.

## Reviewer round-2 response (再評価 round-2)

I verified both claimed fixes directly against the live `words/*.js` data.

- **121-1 (`zh` cat 猫 -ao nucleus): ACCEPT ✓.** `words/cat.js:71` now reads `["猫", "maʊ̯˥"]` with the front low vowel `a` — the back-`ɑ` outlier is gone. Confirmed the sibling -ao forms are unchanged and consistent: `words/good.js:71` `["好", "xaʊ̯˧˩˧"]` and `words/hello.js:71` `["你好", "ni˧˩˧xaʊ̯˧˩˧"]`. The `zh` standard -ao rime is now uniform on `aʊ̯`.
- **121-2 (zh_db clone propagation): ACCEPT ✓.** `words/cat.js:181` now reads `zh_db: ["猫", "maʊ̯˥"]`, matching `words/good.js:181` `zh_db: ["好", "xaʊ̯˧˩˧"]`. The propagated single-source slip in the clone row is corrected, so the whole Mandarin standard cluster (`zh` + `zh_db`) is internally consistent.

No new issues. The back-low-vowel rule is now applied cleanly: back `ɑ` only in velar-nasal rimes (`fɑŋ`, `ljɑŋ`), front `a` in open / -ai / -ao environments. Both fixes are live-verified, not merely claimed.

### Scorecard
| Item | Judgement |
|------|-----------|
| 121-1 猫 -ao nucleus (zh) | ✓ accept (verified live) |
| 121-2 猫 -ao nucleus (zh_db clone) | ✓ accept (verified live) |

**File status: CLOSED** — nothing left to address.
