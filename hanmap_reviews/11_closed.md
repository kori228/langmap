# Hanmap data review #11 — Hakka dialectology specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a comparative Sinologist specialising in Hakka (客家話 / Hak-kâ-fa) dialectology, with field and archival work on the Meixian/Meizhou (梅縣/梅州) standard of Guangdong and on the two great Taiwan branches, Sixian (四縣) and Hailu (海陸). My toolkit is built on Mantaro Hashimoto's *The Hakka Dialect: A Linguistic Study of Its Phonology, Syntax and Lexicon* (1973), which remains the canonical reconstruction of the Meixian six-tone system and the checked-tone (入聲 -p/-t/-k) inventory; on David Prager Branner's *Problems in Comparative Chinese Dialectology* (2000) for the Southern-Chinese stratal model and the literary/colloquial (文白) layering that Hakka shares with Min; and on the **客家語拼音方案 (Pinfa)** and the Taiwan MOE 臺灣客家語拼音方案 for romanisation norms. I have read the LangMap `HAN_DATA` model closely: each of the 61 character keys carries a `surface` object and an `ipa` object keyed by variety code, two rows per character, and my four registers are `hak_cn` (Meixian/standard), `hak_tw` (Taiwan Sixian/Hailu mix), `hak_hl` (Hailu) and `hak_mz` (Meizhou). I checked every Hakka cell against the live file before writing a single "Current" value below.

**Reviewer perspective:** Hakka is the only major Sinitic branch in this file with no dedicated prior review (#1–10 covered MC, on-yomi, Sino-Korean, Sino-Vietnamese, Yue, Min, Wu, Manchu, Mongolic/Phagspa, Mandarin). The four Hakka registers were evidently seeded from mixed sources and never cross-checked, so the tone categories drift between registers that should be near-identical.
**Coverage:** all 4 Hakka registers (`hak_cn`, `hak_tw`, `hak_hl`, `hak_mz`); all 61 characters sampled, with focused auditing on the entering-tone set (一六七八十木足目日月血肉立食) and the affricate/sibilant set (中左走坐七足心西四).
**Notation conventions observed in the file:**
- `hak_cn`, `hak_hl`, `hak_mz` surfaces use a **Pha̍k-fa-sṳ / Pinfa-style** romanisation with tonal diacritics (circumflex = 陰平, grave = 去, acute = 上, acute-below ◌̍ = 陽入).
- `hak_tw` surface uses the **Taiwan MOE tone-number** scheme, where word-initial `b/d/g/j` spell the *voiceless unaspirated* stops/affricates /p t k tɕ/ and digits 1–6 are tone categories.
- IPA tones are Chao tone-letters (˥˦˧˨˩); checked syllables carry the no-audible-release diacritic ◌̚.
- One stray cell (中:2, all four registers) uses ASCII superscript digits `⁵⁵` instead of Chao letters — a notation leak.

---

## Issues found

### 1. 中:1 — `hak_cn` (surface/ipa) — voiced /z/ initial impossible in Hakka; also self-contradicts 中:2
- Current: `"chûng"` (surface), `"zuŋ˨˦"` (IPA)
- Expected: `"tʃuŋ˨˦"` (or `tʂuŋ` / `tsuŋ` per analysis), matching the `ch-` of the surface and the `tʃuŋ` of 中:2 in the same register
- Why: Hakka has **no voiced sibilant/affricate phoneme** /z/ (Hashimoto 1973, §3 initial inventory); the 知/章 series 中 母 is a voiceless unaspirated affricate. The surface `chûng` correctly spells an affricate, and the very next row 中:2 `hak_cn` has IPA `tʃuŋ⁵⁵`. Writing 中:1 as `zuŋ` is both phonologically illegal and internally inconsistent with 中:2 of the same register.

### 2. 走 — `hak_cn` and `hak_hl` (surface/ipa) — same illegal voiced /z/ initial
- Current: `"chéu"` (surface), `"zeu˧˩"` (IPA) — identical in `hak_cn` and `hak_hl`
- Expected: `"tseu˧˩"`
- Why: 走 (精母 tsⁱ) is a voiceless unaspirated alveolar affricate /ts/ in all Hakka. The companion 左 (also 精母) is correctly `"tso˧˩"` in `hak_cn`, and `hak_mz` 走 is correctly `"tseu˧˩"`. The `zeu` rows are the only place /z/ appears word-initially in two registers and contradict their own 左; per Hashimoto (1973) the merger of 精-initials to plain /ts/ is exceptionless in Meixian and Hailu.

### 3. 中:2 — all four registers (ipa) — ASCII superscript tone instead of Chao letters
- Current: `"tʃuŋ⁵⁵"` (`hak_cn`), `"zuŋ⁵⁵"` (`hak_tw`), `"tɕuŋ⁵⁵"` (`hak_hl`), `"tʃuŋ⁵⁵"` (`hak_mz`)
- Expected: `…˥˥` Chao letters, e.g. `"tʃuŋ˥˥"`, `"zuŋ˥˥"`, `"tɕuŋ˥˥"`, `"tʃuŋ˥˥"`
- Why: Every other Hakka IPA cell in the file uses Chao tone-letters (˥˦˧˨˩). The `⁵⁵` superscripts in the 中:2 row are a notation leak that breaks rendering/searching consistency. (The 中:2 `hak_tw` `zuŋ` also re-inherits the illegal /z/ of issue #1 and should be `tʃuŋ`/`tɕuŋ`.)

### 4. 六 — `hak_cn` (ipa) — wrong entering tone; should be 陽入 high, not low
- Current: `"liu̍k"` (surface), `"liuk̚˨"` (IPA)
- Expected: `"liuk̚˥"`
- Why: 六 is 陽入 (lower-register entering, MC 力竹切, sonorant 來母 → yangru). In Meixian the 陽入 tone is high `˥` (5). The surface itself carries **◌̍ (acute-below = 陽入)** → `liu̍k`, which the file's own convention maps to high entering. All three sibling registers agree: `hak_tw` `liuk̚˥`, `hak_hl` `liuk̚˥`, `hak_mz` `liuk̚˥`. Only `hak_cn` has the low `˨`, which is the 陰入 value — a category error.

### 5. 一 — `hak_hl` (ipa) — spurious retroflex approximant initial /ɻ/
- Current: `"yit"` (surface), `"ɻit̚˨"` (IPA)
- Expected: `"jit̚˨"` (palatal glide) or `"it̚˨"`
- Why: 一 (影母 entering) has a **zero / glide initial** in every Hakka variety; Hailu does not turn 影母 into a retroflex approximant. The surface `yit` spells a /j/ glide, matched by `hak_cn` `jit̚˨` and `hak_mz` `jit̚˩`. The `ɻ` is a stray Mandarin-style 日母 reflex pasted onto the wrong character and contradicts this register's own surface.

### 6. 人 — `hak_cn` (surface/ipa) — missing cell
- Current: `undefined` / `undefined` (no `hak_cn` key)
- Expected: surface `"ngin"`, IPA `"ŋin˩˩"` (Meixian 陽平 = 11)
- Why: 人 (日母) is /ŋin/ in all Hakka — a textbook example of Hakka's 日母→/ŋ/ before /i/ (Hashimoto 1973). The other three registers have it (`hak_tw` `ngin2`/`ŋin˩˩`, `hak_hl` `ngin`/`ŋin˨˦`, `hak_mz` `ngin`/`ŋin˩˩`). The standard/Meixian register is the one with the gap, which is conspicuous for the most-cited Hakka reflex of the whole inventory.

### 7. 北 — `hak_cn`, `hak_hl`, `hak_mz` (surface/ipa) — missing in three of four registers
- Current: `undefined` / `undefined` in `hak_cn`, `hak_hl`, `hak_mz` (present only in `hak_tw`)
- Expected: surface `"pet"`, IPA `"pet̚˩"` (Meixian/Meizhou 陰入 = low) for `hak_cn`/`hak_mz`; `"pet̚˨"`/`"pet̚˩"`-grade for `hak_hl`
- Why: 北 (幫母 entering) is a core checked syllable that should be populated for all four registers. Leaving it only in `hak_tw` is an undocumented data gap. See also #8 for the tone error in the one register that does have it.

### 8. 北 — `hak_tw` (surface/ipa) — 陰入 character given 陽入 (high) tone
- Current: `"bed6"` (surface), `"pet̚˥"` (IPA)
- Expected: `"bed5"` (surface), `"pet̚˨"` (IPA)
- Why: 北 is **陰入** (upper entering, voiceless unaspirated 幫母). In Taiwan Sixian the 陰入 tone is low (number 5, value ˨/˩), while the high entering (number 6, ˥) is **陽入**. The cell uses `6` / `˥`, i.e. it has mis-assigned 北 to 陽入. Contrast correctly-low 陰入 siblings in `hak_tw`: 七 `qid5`/`tsʰit̚˨`, 八 `bad5`/`pat̚˨`, 血 `hied5`/`hiet̚˨`. 北 should pattern with these, not with 陽入 日 `ngid6`.

### 9. 心 — `hak_tw` (surface) — Hanyu-Pinyin `x` for a plain /s/ that the IPA itself spells `s`
- Current: `"xim1"` (surface), `"sim˨˦"` (IPA)
- Expected: `"sim1"`
- Why: The Taiwan MOE/Pinfa scheme writes the alveolar sibilant before /i/ as `s`, not Mandarin `x`. The cell's own IPA is `sim` (plain /s/, no palatalisation to /ɕ/), so the surface `xim1` is a Hanyu-Pinyin contamination that contradicts the phonetic row. Compare the consistent `s`-spellings 西 IPA `si`, 四 IPA `si`.

### 10. 七 — `hak_tw` (surface) — Hanyu-Pinyin `q` for /tsʰ/ that the IPA spells `tsʰ`
- Current: `"qid5"` (surface), `"tsʰit̚˨"` (IPA)
- Expected: `"cid5"`
- Why: Same defect as #9 on the aspirated affricate. The IPA is `tsʰit̚` — a plain alveolar /tsʰ/, **not** the palatal /tɕʰ/ that `q` would imply. In the Taiwan MOE scheme /tsʰ/ is `c`. `qid5` is Mandarin-pinyin spelling leaking into a Hakka cell and disagreeing with its own IPA.

### 11. 四 / 西 — `hak_tw` (surface) — same `x`-for-/s/ leak, and a tone split that should be uniform
- Current: 四 `"xi4"`/`"si˥˥"`; 西 `"xi1"`/`"si˨˦"`
- Expected: 四 `"si4"`, 西 `"si1"` (surfaces); tones are fine as categories (四 去, 西 陰平)
- Why: Both surfaces spell /s/ as `x` while their IPA rows are plain `si`. Grouping #9–#11: the `x/q/j`-for-`s/c/z` Pinyin spellings recur only on `hak_tw` sibilant syllables and never match the IPA — a systematic romanisation-scheme contamination, not a dialect fact.

### 12. 下 — `hak_hl` (surface) — non-standard ring-above diacritic `å`
- Current: `"hå"` (surface), `"ha˥˥"` (IPA)
- Expected: `"hà"` (grave = 去聲)
- Why: 下 here is the 去 reading "below/under" — marked with a **grave** accent in Pha̍k-fa-sṳ/Pinfa, exactly as `hak_cn` `"hà"` and `hak_mz` `"hà"`. The ring-above `å` is not a tone diacritic in any Hakka romanisation and is a typo for the grave. The IPA `ha˥˥` (departing) confirms a 去 tone, i.e. the grave is the intended mark.

### 13. 右 — `hak_hl` (surface) — same spurious ring-above diacritic `ů`
- Current: `"yů"` (surface), `"ju˥˥"` (IPA)
- Expected: `"yù"`
- Why: 右 is 去聲 (IPA `ju˥˥`, departing), so the surface needs a grave: `hak_cn` `"yù"`, `hak_mz` `"yù"`. The `ů` (u with ring) is the same non-standard diacritic error as #12 and appears only in `hak_hl` — a small but real systematic slip in that register's tone-mark set.

### 14. 山 / 心 / 天 / 東 / 中:1 — `hak_cn` (ipa) — 陰平 mis-valued as 24 instead of 44
- Current: 山 `"san˨˦"`, 心 `"sim˨˦"`, 天 `"tʰiɛn˨˦"`, 東 `"tuŋ˨˦"`, 中:1 `"zuŋ˨˦"`
- Expected: `…˦˦` (44), e.g. 山 `"san˦˦"`, 心 `"sim˦˦"`, 天 `"tʰien˦˦"`, 東 `"tuŋ˦˦"`
- Why: These are all **陰平** syllables (their surfaces carry the file's 陰平 circumflex: sân, sîm, thiên, tûng, chûng). Meixian 陰平 = high-level **44** (Hashimoto 1973). The register's own other 陰平 cells prove this — 三 `"sam˦˦"`, 西 `"si˦˦"`, 央 `"joŋ˦˦"` all have `˦˦`. The `˨˦` (24) here is the **Taiwan Sixian** 陰平 value that has leaked into the Meixian register. This is the single most pervasive `hak_cn` defect (≥5 characters).

### 15. 月 — `hak_hl` (ipa) — Hailu vowel `ŋiat` vs surface `ngie̍t`
- Current: `"ngie̍t"` (surface), `"ŋiat̚˥"` (IPA)
- Expected: align the two: either surface `"ngia̍t"` + IPA `"ŋiat̚˥"`, or IPA `"ŋiet̚˥"` to match the surface `ie`
- Why: Hailu does have a low-vowel 月 reflex /ŋiat/ (vs Sixian/Meixian /ŋiet/), so the IPA `ŋiat` is defensible as a genuine Hailu feature — but then the romanised surface should read `ngiat`, not `ngie̍t`. As written, surface and IPA disagree on the nucleus (`ie` vs `ia`). Pick one; the sibling registers all use `ngie̍t`/`ŋiet̚`.

### 16. hak_cn ↔ hak_mz — whole-register tone-system divergence between two names for the same dialect
- Current: `hak_cn` ("Meixian/standard") and `hak_mz` ("Meizhou") disagree on the tone value of **33 of 61 characters**. Representative pairs: 龍 cn `liuŋ˨˦` / mz `liuŋ˩˩`; 二 cn `ŋi˥˥` / mz `ŋi˥˧`; 上 cn `soŋ˥˥` / mz `soŋ˥˧`; 一 cn `jit̚˨` / mz `jit̚˩`.
- Expected: one consistent Meixian tone letterset across both, since 梅縣 (Meixian) and 梅州 (Meizhou) are the same urban Hakka standard.
- Why: `hak_mz` encodes the canonical Meixian/Meizhou system — 陰平 44, 陽平 11, 上 31, 去 53, 陰入 1, 陽入 5 (Hashimoto 1973; Branner 2000) — while `hak_cn` encodes a hybrid (陽平 24, 去 55, 陰入 2) that is partly Taiwan-Sixian. If the two codes are meant to be distinct lects this needs documenting; as labelled, they describe the same speech and should not diverge on 54% of items. This is the systematic root cause behind issues #4 and #14.

---

## Summary of systematic issues

1. **Illegal voiced /z/ initials** (中:1, 走 ×2, 中:2-tw) — Hakka has no /z/ phoneme; 精/知/章 initials are voiceless /ts ~ tʃ/, and the affected cells contradict their own surfaces and sibling registers.
2. **Entering-tone (入聲) category errors** — 六 `hak_cn` (陽入 given low), 北 `hak_tw` (陰入 given high), traceable to confusion of the 陰入/陽入 split that separates Meixian (1 vs 5) from Sixian (5 vs 6).
3. **陰平 leakage of the Sixian value (24) into Meixian (44)** — 山/心/天/東/中:1 in `hak_cn`, proven wrong by the same register's own 三/西/央 at 44.
4. **Whole-register tone drift between `hak_cn` and `hak_mz`**, two labels for one dialect, diverging on 33/61 tones — the umbrella under which #2 and #3 sit.
5. **Romanisation-scheme contamination in `hak_tw`** — Hanyu-Pinyin `x/q` written for plain `s/c` (心, 七, 四, 西), each disagreeing with its own IPA.
6. **Non-standard tone diacritics in `hak_hl`** — ring-above `å`/`ů` (下, 右) instead of the grave; plus the surface↔IPA vowel mismatch in 月.
7. **Notation leak** — ASCII superscript `⁵⁵` for tone in all four 中:2 cells, against the file-wide Chao-letter convention.
8. **Data gaps** — 人 absent in `hak_cn`; 北 absent in `hak_cn`/`hak_hl`/`hak_mz`.

---

## Worker round-1 response (作業者round-1)

All "Current" values below were re-verified verbatim against `hanmap_data.js` before deciding. Edits are returned as structured ops and applied serially by the orchestrator (workers are read-only on shared data).

**#1 中:1 `hak_cn` ipa `zuŋ˨˦` → `tʃuŋ˦˦`** — APPLIED (applied by orchestrator this round). /z/ is not a Hakka phoneme; the surface `chûng` and 中:2 `hak_cn` `tʃuŋ` both spell the voiceless affricate, and `hak_mz` 中:1 is already `tʃuŋ˦˦`. Combined this with the 陰平 tone fix from #14 (˨˦→˦˦) since 中:1 is one of the listed 陰平 syllables; the corrected cell now matches `hak_mz` exactly. Also fixed the parallel illegal /z/ in **中:1 `hak_tw` `zuŋ˨˦` → `tʃuŋ˨˦`** (kept the Taiwan-Sixian 陰平 ˨˦, which is correct for that register per #14) — per the "fix all variants in the same family together" rule.

**#2 走 `hak_cn` & `hak_hl` ipa `zeu˧˩` → `tseu˧˩`** — APPLIED (both). 走 is 精母 /ts/; same-register 左 is `tso˧˩` and `hak_mz` 走 is already `tseu˧˩`. Clear illegal /z/ + internal contradiction.

**#3 中:2 ipa `⁵⁵` → Chao letters `˥˥`** — APPLIED (all four). `hak_cn tʃuŋ⁵⁵→tʃuŋ˥˥`, `hak_hl tɕuŋ⁵⁵→tɕuŋ˥˥`, `hak_mz tʃuŋ⁵⁵→tʃuŋ˥˥`. For `hak_tw zuŋ⁵⁵` I fixed both the notation leak and the illegal /z/ → `tʃuŋ˥˥` (matching the cn/mz `chung`/`zung` register pair; reviewer offered tʃ or tɕ — chose tʃ for register consistency).

**#4 六 `hak_cn` ipa `liuk̚˨` → `liuk̚˥`** — APPLIED. 陽入; surface `liu̍k` (陽入 acute-below); all three siblings already `liuk̚˥`.

**#5 一 `hak_hl` ipa `ɻit̚˨` → `jit̚˨`** — APPLIED. 影母 glide; surface `yit`; cn `jit̚˨`. Stray Mandarin 日母 reflex.

**#6 人 `hak_cn` missing → add surface `ngin`, ipa `ŋin˩˩`** — APPLIED. 陽平 11; `hak_mz` and `hak_tw` both `ŋin˩˩`; surface `ngin` per hl/mz. Filled documented gap.

**#7 北 missing in `hak_cn`/`hak_hl`/`hak_mz` → added** — APPLIED. Surface `pet` (入聲 omits tone marks, file convention). IPA tones chosen from each register's OWN 陰入 cells (not the reviewer's tentative figures): `hak_cn pet̚˨` (matches cn 一 `jit̚˨`, 七 `tsʰit̚˨`), `hak_mz pet̚˩` (matches mz 一 `jit̚˩`, 七 `tsʰit̚˩`), `hak_hl pet̚˨` (matches hl 一 `jit̚˨`, 七 `tsʰit̚˨`). NB: reviewer suggested cn `pet̚˩`, but cn's internal 陰入 convention is ˨ — followed internal consistency.

**#8 北 `hak_tw` `bed6`/`pet̚˥` → `bed5`/`pet̚˨`** — APPLIED. 陰入 = low in Taiwan Sixian (cf. 七 `qid5`/`tsʰit̚˨`, 八 `bad5`/`pat̚˨`, 血 `hied5`/`hiet̚˨`).

**#9 心 `hak_tw` surface `xim1` → `sim1`** — APPLIED. IPA is plain `sim`; Pinyin-x contamination.

**#10 七 `hak_tw` surface `qid5` → `cid5`** — APPLIED. IPA `tsʰit̚` is plain /tsʰ/; MOE writes `c`, not Pinyin `q`.

**#11 四 `hak_tw` `xi4`→`si4`; 西 `hak_tw` `xi1`→`si1`** — APPLIED (both). IPA rows are plain `si`; tones untouched.

**#12 下 `hak_hl` surface `hå` (a+U+030A ring) → `hà` (a+U+0300 grave)** — APPLIED. 去聲 (IPA `ha˥˥`); cn/mz are `hà`. Non-tonal ring is a typo.

**#13 右 `hak_hl` surface `yů` → `yù`** — APPLIED. Same ring→grave typo; 去聲 (IPA `ju˥˥`); cn/mz `yù`.

**#14 山/心/天/東 `hak_cn` ipa 陰平 ˨˦ → ˦˦** — APPLIED (中:1 folded into #1). 山 `san˨˦→san˦˦`, 心 `sim˨˦→sim˦˦`, 天 `tʰiɛn˨˦→tʰiɛn˦˦`, 東 `tuŋ˨˦→tuŋ˦˦`. Provable INTERNAL inconsistency: same register's own 三 `sam˦˦`, 西 `si˦˦`, 央 `joŋ˦˦` are already ˦˦. (This is the local-error subset of #16; treated as a within-register inconsistency, not a cross-register convention change.)

**#15 月 `hak_hl` ipa `ŋiat̚˥` → `ŋiet̚˥`** — APPLIED. Aligned IPA to its own surface `ngie̍t` (ie) and to cn/mz/tw which all read `ŋiet̚˥`. Chose to fix IPA (not surface) as the lower-risk, file-consistent option; surface text left untouched per the no-text-change rule.

**#16 whole-register `hak_cn` ↔ `hak_mz` tone divergence (33/61 chars)** — HELD (won't-fix this round; needs reviewer/team decision). This is a system-level question of whether `hak_cn` and `hak_mz` are intended as one dialect or two distinct lects. The reviewer themselves note it "needs documenting" if distinct. Mass-rewriting 33 characters is a convention choice, not a local bug fix, and is outside this round's editing policy. The provable local errors sitting under this umbrella (#4 六, #14 陰平 leakage) have been fixed individually. Recommend the team decide whether to (a) collapse `hak_cn` onto the canonical Meixian/Meizhou letterset, or (b) document `hak_cn` as a distinct (Taiwan-influenced) lect, then run a single sanctioned normalization pass.

Open/held items remaining: 1 (#16, awaiting reviewer/team direction).

---

## Reviewer round-2 response (再評価 round-2)

I re-verified every claimed fix directly against live `hanmap_data.js` (via a `node -e` load of `HAN_DATA`, plus a file-wide scan of all four Hakka registers for word-initial /z/ in IPA, superscript-digit tone leaks, and ring-above surface diacritics). Per-item adjudication:

- **#1 中:1 illegal /z/ + 陰平 tone** — ✓ ACCEPT. Live: `hak_cn tʃuŋ˦˦`, `hak_tw tʃuŋ˨˦`, both correct (cn folds in the ˦˦ 陰平 fix; tw keeps the Sixian ˨˦). Matches `hak_mz tʃuŋ˦˦`.
- **#2 走 illegal /z/** — △ PARTIAL / **not fully applied**. `hak_cn` and `hak_hl` are now `tseu˧˩` (correct), but **走 `hak_tw` IPA is still `zeu˧˩`** in live data — the only remaining word-initial /z/ in any Hakka IPA cell (confirmed by a full-register scan). The MOE surface `zeu3` is fine (`z`=/ts/), but the IPA must not carry the illegal voiced /z/; it should read `tseu˧˩`. This is exactly the defect the worker themselves corrected in 中:1/中:2 `hak_tw`, and the project "fix all variants in the same family together" rule applies. This single cell keeps the file open.
- **#3 中:2 superscript ⁵⁵ → Chao letters** — ✓ ACCEPT. All four now `˥˥` (cn/mz `tʃuŋ˥˥`, hl `tɕuŋ˥˥`, tw `tʃuŋ˥˥`). File-wide scan found zero remaining superscript-digit tone leaks in the Hakka rows.
- **#4 六 `hak_cn` 陽入 `˨→˥`** — ✓ ACCEPT. Live `liuk̚˥`, matches all three siblings.
- **#5 一 `hak_hl` `ɻ→j`** — ✓ ACCEPT. Live `jit̚˨`.
- **#6 人 `hak_cn` gap** — ✓ ACCEPT. Live `ngin` / `ŋin˩˩` (陽平 11), matches mz/tw.
- **#7 北 gaps in cn/hl/mz** — ✓ ACCEPT. All four registers now populated (`pet` surface; cn/hl `pet̚˨`, mz `pet̚˩`, tw `pet̚˨`), tones drawn from each register's own 陰入 set — internally consistent reasoning, accepted.
- **#8 北 `hak_tw` 陰入 `6/˥ → 5/˨`** — ✓ ACCEPT. Live `bed5` / `pet̚˨`, patterns with 七/八/血.
- **#9 心 `hak_tw` `xim1→sim1`** — ✓ ACCEPT.
- **#10 七 `hak_tw` `qid5→cid5`** — ✓ ACCEPT.
- **#11 四/西 `hak_tw` `xi→si`** — ✓ ACCEPT. Live `si4` / `si1`.
- **#12 下 `hak_hl` ring `hå→hà`** — ✓ ACCEPT. Live `hà`; ring scan now clean.
- **#13 右 `hak_hl` ring `yů→yù`** — ✓ ACCEPT. Live `yù`.
- **#14 山/心/天/東 `hak_cn` 陰平 `˨˦→˦˦`** — ✓ ACCEPT. All four now `˦˦`, matching same-register 三/西/央.
- **#15 月 `hak_hl` `ŋiat→ŋiet`** — ✓ ACCEPT. Live `ŋiet̚˥`, surface↔IPA now agree; lower-risk IPA-side fix, no surface text changed.
- **#16 whole-register `hak_cn`↔`hak_mz` tone drift** — ✓ ACCEPT AS HELD (defensible system-level decision). This is a genuine convention question (one dialect vs two distinct lects), not a local bug, and the provable local errors under it (#4, #14) have been fixed. Re-measuring live data, cn↔mz now diverge on **28/61** characters (down from 33 pre-round-1). I accept deferring the mass-normalization to a single sanctioned pass; it is not a blocker and not something to keep re-demanding.

### New issues
None. (The 走 `hak_tw` gap is a not-fully-applied instance of existing issue #2, not a new defect.)

### Scorecard
- Verified-applied: 15 of 16 items (#1, #3–#15 fully; #16 accepted-as-held).
- Partial / missed: 1 — **#2 走 `hak_tw` IPA still `zeu˧˩`** (must be `tseu˧˩`).
- New issues: 0.

**File status: OPEN** — dev team must fix the one remaining illegal /z/: 走 `hak_tw` IPA `zeu˧˩` → `tseu˧˩` (surface `zeu3` unchanged). Everything else is verified-applied or accepted-as-held.

---

## Worker round-2 response (作業者round-2)

Round-2 left exactly one open item: **#2 走 `hak_tw` IPA `zeu˧˩`** (the only remaining word-initial illegal /z/ in any Hakka IPA cell). Re-verified verbatim against live `hanmap_data.js` at line 12527: `"hak_tw": "zeu˧˩"` (preceded by `hak_cn "tseu˧˩"`, followed by `hak_hl "tseu˧˩"`).

**#2 走 `hak_tw` ipa `zeu˧˩` → `tseu˧˩`** — APPLIED (applied by orchestrator this round). 走 is 精母, a voiceless unaspirated alveolar affricate /ts/ in all Hakka; Hakka has no /z/ phoneme (Hashimoto 1973). The fix brings `hak_tw` IPA into line with its three sibling registers, which already read `tseu˧˩` (`hak_cn`, `hak_hl`, `hak_mz`). The MOE surface `zeu3` is LEFT UNCHANGED, since in the Taiwan MOE scheme word-initial `z` spells the voiceless unaspirated /ts/ (not a voiced sibilant) — consistent with the same family-wide fix the worker already applied to 中:1/中:2 `hak_tw` in round-1, and with the project "fix all variants in the same family together" rule.

**#16 whole-register `hak_cn`↔`hak_mz` tone drift (now 28/61)** — REMAINS HELD (accepted-as-held by reviewer in round-2). This is a genuine system-level convention decision (one dialect vs two distinct lects), not a local bug, and the reviewer explicitly accepted deferring it to a single sanctioned normalization pass. No round-3 action; the provable local errors under it (#4, #14) were fixed in round-1. Not a blocker.

With #2 closed, all 16 issues are resolved (15 fully applied, #16 accepted-as-held). No remaining open data errors.

---

## Reviewer round-3 response (再評価 round-3)

I re-loaded `HAN_DATA` from live `hanmap_data.js` via `module.exports` and ran three file-wide scans across all four Hakka registers (`hak_cn`, `hak_tw`, `hak_hl`, `hak_mz`): (a) word-initial /z/ in any IPA cell, (b) ASCII superscript-digit tone leaks in Hakka IPA, (c) ring-above diacritics in Hakka surfaces. All three scans returned **zero hits**.

Per-item adjudication:

- **#2 走 `hak_tw` IPA `zeu˧˩` → `tseu˧˩`** (the sole round-2 open item) — ✓ ACCEPT. Live data now: `走 hak_tw surface="zeu3" ipa="tseu˧˩"`, matching all three siblings (`hak_cn`, `hak_hl`, `hak_mz` all `tseu˧˩`). The MOE surface `zeu3` is correctly left unchanged (word-initial `z` = voiceless /ts/ in the Taiwan MOE scheme). The last word-initial illegal /z/ in the Hakka rows is gone — confirmed by the full-register scan.
- **#1, #3–#15** — ✓ STILL VERIFIED (re-confirmed in live data this round; unchanged since round-2). Spot re-checks: 中:1 cn `tʃuŋ˦˦` / tw `tʃuŋ˨˦`; 中:2 all `…˥˥` Chao letters; 六 cn `liuk̚˥`; 一 hl `jit̚˨`; 人 cn `ngin`/`ŋin˩˩`; 北 cn/hl `pet̚˨`, mz `pet̚˩`, tw `bed5`/`pet̚˨`; 心 tw `sim1`; 七 tw `cid5`; 四/西 tw `si4`/`si1`; 下 hl `hà`; 右 hl `yù`; 月 hl `ŋiet̚˥`; 山/心/天/東 cn all `˦˦`.
- **#16 whole-register `hak_cn`↔`hak_mz` tone drift** — ✓ ACCEPT AS HELD (final). Re-measured live: cn↔mz diverge on **28/61** characters (consistent with worker's figure). This remains a genuine system-level convention decision — whether `hak_cn` and `hak_mz` denote one dialect or two distinct lects — not a local bug. The provable local errors that sat under it (#4 六, #14 陰平 leakage) were fixed in round-1 and remain fixed. I accepted deferral to a single sanctioned normalization pass in round-2 and reaffirm it here; re-demanding a mass-rewrite is out of scope and not loop-productive. Recorded as a **known limitation for a future sanctioned pass**, not a blocker.

### New issues
None.

### Scorecard
- Verified-applied: 16 of 16 items (#1–#15 fully applied and live-verified; #16 accepted-as-held / documented limitation).
- Partial / missed: 0.
- New issues: 0.
- Residual defect scans (illegal /z/, superscript tone leaks, ring diacritics): all clean (0 hits).

**File status: CLOSED** — nothing left to address.
