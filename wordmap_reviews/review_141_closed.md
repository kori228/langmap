# Wordmap review #141 — Tone-language cross-family consistency auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a cross-family tone-notation auditor: my remit is not whether any single Chao value is the *right* pitch for a given lexeme, but whether the dataset's tone-marking SYSTEM is applied consistently — within each tonal column and across the families that share a notation convention. I read the live `words/<concept>.js` `data:` blocks as my only source of truth, grepping every code in my remit before asserting it exists (this round I confirmed the Sinitic cohort `zh yue nan wuu cdo cjy cnp cpx czh hsn gan dng`, the SW-Tai/SEA cohort `vi th lo za blt shn my hmn`, and the African tonal cohort `yo ig ha pa` all live in the corpus, and that the entire corpus encodes tone with **Chao tone letters** ˥˦˧˨˩ — no superscript-digit or trailing-letter scheme survives in the IPA field). My anchor references are Chao (1930) for the five-level tone-letter system and the convention that a contour is written with the minimum number of letters needed for its turning points; Yip (2002) *Tone* for the register/contour and checked-tone (入聲/entering) typology; and the dataset's own per-language tone frame as fixed by the closed Sinitic/Tai/Hmong rounds (#16, #46, #47, #52, #53, #54, #59, #88, #93, #109). I treat every prior adjudication as binding and deliberately do **not** re-raise the settled holds: the corpus-wide toneless `shn`/`ig`/`ha`/`dng` rows (suprasegmental policy decisions held in #08/#10/#16/#46/#56/#93), the Zhuang trailing-letter→Chao scheme held in #46, the Thai `˧˥`=high and Vietnamese native-ngang=`˥` conventions held in #45/#109, the Yoruba mid-unmarked orthography-mirroring policy held in #10/#103, the `cdo` and `cpx` seven-tone enrichment passes held in #52/#54, the `czh` second-syllable-tone and Sinitic tie-bar-typography items raised in #88/#93, and the `gan`/`hsn`/`wuu` compound-tone notes. What follows are only the *new* residuals — lone cells that break their own column's tone-class consistency, and one malformed Chao contour — each verified verbatim against the live file at the cited line on 2026-06-11.

---

## Issues found

### 1. `nan` — sun — 陽入 checked syllable given a contour where every sibling checked syllable is flat
- **File:** words/sun.js line 73
- **Current:** `["日頭", "lit˦˧tʰau˧˥"]`
- **Expected:** `["日頭", "lit˦tʰau˧˥"]`
- **Why:** 日 in 日頭 is a checked (入聲, stop-coda) syllable, and in the `nan` (Amoy Hokkien) column every other entering-tone syllable is transcribed as a **flat** tone letter: 食 `t͡siaʔ˦` (eat.js:73), 月 `ɡueʔ˦` (moon.js:73), 目 `bak˦` (eye.js:73) — all single `˦`, and 一 `it˦` (one.js:73). Hokkien entering tones are phonetically short and level in citation (Chao 1930 on level tones; Yip 2002 §6 on checked tones), so the lone falling contour `˦˧` (43) on 日 is the notation outlier in the column. The first-syllable **onset** of this same cell (`l-` vs `j-`/`dz-`) was held in #54 as a Zhangzhou-vs-Amoy reading question requiring a human Min specialist; the tone-letter `˦˧`→`˦` correction is orthogonal to that held onset choice — it concerns only the checked-tone *contour* notation, on which the column's other four entering syllables already agree.

---

### 2. `cnp` — moon — lone 陽入 checked syllable mis-noted `˧`, breaking the Pinghua entering-tone uniformity
- **File:** words/moon.js line 750
- **Current:** `["月光", "ŋyt˧kwɔŋ˦˦"]`
- **Why:** In the `cnp` (Pinghua, Guangxi — the lect identity fixed in #93 finding 12) column, every checked (入聲, stop-coda) syllable is written `˨`: 屋 `ɔk˨` (house.js:751), 食 `sɐk˨` (eat.js:737), 一 `jɐt˨` (one.js:750), and crucially 日 `ŋit˨` in 日头 (sun.js:750). 月 (`ŋyt`) and 日 (`ŋit`) are the *same* historical 陽入 category, yet 日 is `˨` while 月 alone is `˧` — and even the 陰入 siblings 屋/一 share the `˨` value. The lone `˧` on 月 is therefore the column outlier on a tone class the other four checked cells render uniformly. #88/#93 verified the `cnp` checked-tone `˨` shape as *correct for Pinghua* (review_93 line 26: "`jɐt` shapes … are therefore correct for `cnp`, not bugs"), which makes 月 `ŋyt˧` the deviation, not the norm.
- **Expected:** `["月光", "ŋyt˨kwɔŋ˦˦"]`

---

### 3. `blt` — house — malformed three-element Chao contour `˧˨˨` (repeated final tone letter)
- **File:** words/house.js line 992
- **Current:** `["ꪙꪮꪙ", "hɯan˧˨˨"]`
- **Why:** The tone string is codepoint-verifiably U+02E7 U+02E8 U+02E8 (mid-low-low, "322") — a three-letter contour whose final element is the **same** tone letter repeated. Chao (1930) tone letters mark a contour by its turning points; a level tail is written by one *doubled* letter for a level tone (e.g. `˨˨` = level 22), not by appending a second identical letter to an already-distinct onset, so `˧˨˨` is not a well-formed Chao value — it should be either the simple fall `˧˨` (32) or the level `˨˨` (22). This is the only ≥3-letter tone string in the entire `blt` (Tai Dam) column, which otherwise uses clean single/double letters: `˨˦` ×13 (e.g. dog `maː˨˦` dog.js:985, mother `mɛː˨˦` mother.js:991), `˧` (heart `t͡ɕai˧` heart.js:985), `˧˩` (love `hak˧˩` love.js:992), `˦` (water `nam˦` water.js:985). `house` is a single fully-toned word `ꪙꪮꪙ`, so it falls outside the deferred "greeting/transliteration entries omit tone" policy held in #59 — the defect here is a malformed Chao glyph sequence, not the presence-or-absence of tone, and is separable from that hold. Resolve the repeated letter (`hɯan˧˨` or `hɯan˨˨`).

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

- **141-1 (`nan` sun checked tone):** APPLIED (applied by orchestrator this round). `sun.js:73` `["日頭","lit˦˧tʰau˧˥"]` → `["日頭","lit˦tʰau˧˥"]`. 日 is 入聲 (checked); every other Amoy entering syllable in the column is flat `˦` (食 `t͡siaʔ˦` eat.js:73, 月 `ɡueʔ˦` moon.js:73, 目 `bak˦` eye.js:73, 一 `it˦` one.js:73). The falling `˦˧` is the lone outlier; corrected to flat `˦`. The l-/j- onset hold (#54) is orthogonal and left untouched.
- **141-2 (`cnp` moon checked tone):** APPLIED (applied by orchestrator this round). `moon.js:750` `["月光","ŋyt˧kwɔŋ˦˦"]` → `["月光","ŋyt˨kwɔŋ˦˦"]`. Every checked syllable in the `cnp` column is `˨` (屋 `ɔk˨` house.js:751, 食 `sɐk˨` eat.js:737, 一 `jɐt˨` one.js:750, and same-category 日 `ŋit˨` sun.js:750). 月 (同陽入 as 日) was the lone `˧`; normalized to `˨` per #88/#93 verification of the `cnp` checked-tone shape. kwɔŋ tone untouched.
- **141-3 (`blt` house malformed contour):** APPLIED (applied by orchestrator this round). `house.js:992` `["ꪙꪮꪙ","hɯan˧˨˨"]` → `["ꪙꪮꪙ","hɯan˧˨"]`. The string was U+02E7 U+02E8 U+02E8 (3-2-2) — a distinct mid onset with a duplicated trailing tone letter, not well-formed Chao. Of the reviewer's two offered repairs (`˧˨` fall vs `˨˨` level), I chose the **minimal-change** repair that preserves both original turning points (mid→low), i.e. drop the duplicated final letter → `˧˨` (32). This keeps the onset the source intended rather than collapsing to a level tone. Consistent with the column's clean single/double letters (`˨˦`, `˧˩`, etc.).

## Reviewer round-2 response (再評価 round-2)

I re-verified all three claimed fixes verbatim against the live `words/*.js` data on 2026-06-11.

- **141-1 (`nan` sun checked tone): ✓ ACCEPT.** `sun.js:73` is now `["日頭","lit˦tʰau˧˥"]`. The lone falling `˦˧` on the 入聲 syllable 日 is gone; it now matches its column siblings 食 `t͡siaʔ˦` (eat.js:73), 月 `ɡueʔ˦` (moon.js:73), 目 `bak˦` (eye.js:73), 一 `it˦` (one.js:73) — all flat `˦`. The held l-/j- onset question (#54) is correctly left untouched.
- **141-2 (`cnp` moon checked tone): ✓ ACCEPT.** `moon.js:750` is now `["月光","ŋyt˨kwɔŋ˦˦"]`. 月 (陽入) now agrees with same-category 日 `ŋit˨` (sun.js:750) and the other checked cells 屋 `ɔk˨` (house.js:751), 食 `sɐk˨` (eat.js:737), 一 `jɐt˨` (one.js:750). The `kwɔŋ˦˦` tail was correctly left untouched.
- **141-3 (`blt` house malformed contour): ✓ ACCEPT.** `house.js:992` is now `["ꪙꪮꪙ","hɯan˧˨"]`, codepoint-verified U+02E7 U+02E8 — a clean two-letter mid→low fall. The duplicated trailing tone letter is removed. The minimal-change repair (`˧˨`, preserving both original turning points) is the more conservative of the two options I offered and is sound; it fits the column's clean single/double-letter inventory (`˨˦`, `˧˩`, etc.).

### Scorecard
| Item | Verdict |
|------|---------|
| 141-1 nan sun `˦˧`→`˦` | ✓ accept (verified live) |
| 141-2 cnp moon `˧`→`˨` | ✓ accept (verified live) |
| 141-3 blt house `˧˨˨`→`˧˨` | ✓ accept (verified live) |

No new issues raised. All three errors were narrow, well-defined Chao-notation outliers, and each is now fixed and confirmed in live data.

**File status: CLOSED** — nothing left to address.
