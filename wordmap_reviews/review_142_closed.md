# Wordmap review #142 — Vowel-length & gemination cross-family consistency auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a phonologist whose narrow speciality is contrastive quantity — phonemic vowel length and consonant gemination — and the diacritic machinery (the IPA length mark ⟨ː⟩ versus the orthography-driven double-letter convention) that encodes it in narrow transcription. My remit on this rally is the cross-family residue pass after the suprasegmental sweeps of reviews **#52** (tone), **#78** (stress & syllabic consonants) and **#117** (round-3 stress/length residue), all closed: I extend, I do not repeat. My working references are the per-language quantity descriptions I lean on daily — Suomi/Toivanen/Ylitalo, *Finnish Sound Structure* (2008) and Asu/Lippus/Pajusalu, *Eesti keele hääldus* / Lehiste's Estonian three-quantity work for the Finnic length-vs-geminate split; Krämer, *The Phonology of Italian* (2009) for stressed-open-syllable half-length and geminate spelling; Siptár & Törkenczy, *The Phonology of Hungarian* (2000) for the long-vowel and geminate consonant inventory; Allen, *Vox Latina* (1978) for Classical Latin macron-to-ː mapping; Watson, *The Phonology and Morphology of Arabic* (2002) for šadda/gemination; Árnason, *The Phonology of Icelandic and Faroese* (2011) for the positional (open/closed) length rule of the Insular Scandinavian column; and Hannahs, *The Phonology of Welsh* (2013) for Welsh monosyllabic length. I know this project's data model cold — `words/<concept>.js` holding `["surface","ipa"]` tuples, and the governing rule that a feature is either marked across all 20 concepts of a language or omitted across all 20 — and I grepped `ː`-counts and double-letter counts per language across all 20 files, isolated the outliers, and diffed them against the *applied* and *held* lists of the closed reviews (notably #01, #05, #31, #34, #83, #101) before reporting. Every Current value below was read verbatim from the live file at the cited line on 2026-06-11.

This is a heavily-worked seam: my honest finding is that the length-contrasting columns are now **substantially clean**. Finnish, Estonian, Hungarian, Czech, Slovak, Latvian, Latin, Italian, Sanskrit, Japanese, Welsh, Irish, Scottish Gaelic and Faroese all mark vowel length and gemination completely and self-consistently; the only items I might otherwise have raised — Icelandic `faðir` `faðɪɹ` (adjudicated short in #01 #18, applied) and the Tamil ன்ற cluster in `ondru`/`nanri` (explicitly **held** as a project-wide Tamil-IPA convention call in #05, #31 and #83) — are off-limits as already-decided. I therefore report a single, narrowly-scoped, genuinely-standing consistency issue rather than pad the count.

---

## Issues found

### 1. `ar_qur` / `ar_sd` — cat — word-final emphatic geminate قط notated `tˤː` against the column's doubling norm
- **File:** words/cat.js lines 102 and 245
- **Current:** `ar_qur: ["قط", "qitˤː"]` (line 102) and `ar_sd: ["قطّ", "ɡutˤː"]` (line 245)
- **Expected:** `ar_qur: ["قط", "qitˤtˤ"]` and `ar_sd: ["قطّ", "ɡutˤtˤ"]`
- **Why:** The very same lexeme — قط *qiṭṭ* 'cat', a word-final geminate emphatic ṭ — is transcribed **four** ways across this one file: `qitˤtˤ`-style doubling in MSA `ar: ["قطة", "qitˤtˤa"]` (cat.js:103) and Algerian `arq: ["قط", "qətˤtˤ"]` (cat.js:242), but ⟨ː⟩-style in `ar_qur` (`qitˤː`) and `ar_sd` (`ɡutˤː`). The project's adjudicated convention for Arabic is to **retain the geminate by doubling** in the citation-form IPA whenever the surface carries šadda: review #34 (closed) §"#2 water.js" rules that "the dataset systematically RETAINS the geminate in the citation-form IPA," citing `guttˤ`, `jədd`, `ħabb/ħubb/ħobb` — all doublings — and the directly-comparable final geminates in this corpus are doubled (`ʔumm` mother.js:102/103, `ħubb` love.js:102/103, `qətˤtˤ` cat.js:242). The two `tˤː` entries are the lone holdouts using the vowel-length mark ⟨ː⟩ for a consonant geminate, breaking comparability within a single etymological row. (Caveat for the closer: review #101 §47 quoted `qitˤː`/`ɡutˤː` as exemplars, but only to settle the **emphasis symbol** ⟨ˤ⟩ vs ⟨ɫ⟩ question — it did not adjudicate ⟨ː⟩ vs doubling; this consistency point is therefore unreviewed. Watson 2002 §1.5 on gemination.)

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

**142-1 `ar_qur` / `ar_sd` — cat — geminate emphatic ṭ notated `tˤː` vs doubling norm — APPLIED (applied by orchestrator this round)**
Verified live: cat.js:102 `ar_qur: ["قط", "qitˤː"]` and cat.js:245 `ar_sd: ["قطّ", "ɡutˤː"]`. The same etymon قط in this file is doubled elsewhere — `ar: ["قطة", "qitˤtˤa"]` (line 103) and `arq: ["قط", "qətˤtˤ"]` (line 242). Per closed review #34's adjudicated Arabic convention (citation-form IPA RETAINS the geminate by doubling), and to restore comparability within this single etymological row, both holdouts are converted from the vowel-length mark ⟨ː⟩ to consonant doubling: `qitˤː` → `qitˤtˤ`, `ɡutˤː` → `ɡutˤtˤ`. Clear internal-consistency fix; #101 §47 quoted these forms only for the ⟨ˤ⟩-vs-⟨ɫ⟩ question and did not adjudicate ⟨ː⟩-vs-doubling, so this is unreviewed and in-scope. IPA-only change; surface unchanged.

No items held open.

## Reviewer round-2 response (再評価 round-2)

I re-grepped the live `words/cat.js` and the cited comparison anchors on 2026-06-11.

**142-1 `ar_qur` / `ar_sd` — cat — geminate emphatic ṭ ⟨ː⟩ → doubling — ✓ ACCEPT (verified in live data)**
- `cat.js:102` now reads `ar_qur: ["قط", "qitˤtˤ"]` (was `qitˤː`).
- `cat.js:245` now reads `ar_sd: ["قطّ", "ɡutˤtˤ"]` (was `ɡutˤː`).
- Both holdouts are converted from the vowel-length mark ⟨ː⟩ to consonant doubling, restoring comparability within the single etymon row: `ar: ["قطة", "qitˤtˤa"]` (line 103) and `arq: ["قط", "qətˤtˤ"]` (line 242) already double.
- The doubling convention is independently confirmed for word-final geminates elsewhere in the corpus: `mother.js:102/103 ʔumm` and `love.js:102/103 ħubb`, consistent with closed review #34's adjudication that citation-form Arabic IPA retains the geminate by doubling.
- Surfaces unchanged; IPA-only edit, as claimed.

No new issues raised. The single standing item is fixed and verified; nothing else remains in scope.

### Scorecard
| Item | Verdict |
|------|---------|
| 142-1 ar_qur/ar_sd cat `tˤː`→`tˤtˤ` | ✓ accept (live-verified) |

**File status: CLOSED** — nothing left to address.
