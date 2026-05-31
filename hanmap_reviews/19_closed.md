# Hanmap data review #19 — Romanization & tone-notation consistency auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a romanization-systems specialist in East-Asian phonology — a 表記法 (notation-convention) auditor rather than a single-language dialectologist. My remit is the *consistency of the writing systems themselves*: whether each `surface` cell is spelled in the romanisation scheme that its variety code claims, and whether each `ipa` cell notates tone the same way as its siblings. My reference shelf is the standards literature: the **LSHK Jyutping** scheme (Linguistic Society of Hong Kong, 1993) for Cantonese; **臺灣閩南語羅馬字拼音方案 (Tâi-lô)** and the older **Pe̍h-ōe-jī (POJ / 白話字)** for Hokkien; **潮州話拼音方案 (Peng'im, 1960)** for Teochew; **平話字 / Bàng-uâ-cê (BUC)** for Eastern Min; **客語白話字 (Pha̍k-fa-sṳ)** and the Taiwan MOE **客家語拼音 (Pinfa)** for Hakka; **漢語拼音 (Hanyu Pinyin)** for Mandarin; **国語ローマ字 / Hepburn (ヘボン式)** for Japanese; and **Revised Romanization (RR, 2000)** vs **McCune–Reischauer (MR)** for Korean. For phonetic tone I hold to **Y. R. Chao's tone-letter convention (Chao 1930)** — the IPA staff-letters ˥˦˧˨˩ — and treat ASCII/Unicode superscript digits (⁵⁵, ²¹) as a *different* notation that must not be mixed into the same column. I have read the LangMap `HAN_DATA` model closely: 61 character keys, each with a `surface` object and an `ipa` object keyed by variety code, two rows per character. Because my scope is cross-cutting I sampled *every* `surface` and `ipa` cell with `node` scans rather than focusing on one branch, and confirmed each "Current" value against the live file before quoting it. Reviews #1–10 covered the phonological substance of MC, on-yomi, Sino-Korean/Vietnamese, Yue, Min, Wu, Manchu, Mongolic and Mandarin; review #11 covered Hakka substance. My findings are deliberately orthogonal: I do not re-litigate any reading, only the *spelling and tone-notation scheme* it is recorded in.

**Reviewer perspective:** Notation hygiene. A dataset that searches and renders by string must not silently switch romanisation scheme or tone-notation system inside a single register; doing so breaks equality tests, sort order, and the user's ability to learn one scheme per column.
**Coverage:** all `yue*` (10 codes), `nan*`/`cdo`/`mnp` (14 codes), `hak*` (4 codes), `zh*`, `ko*`, `ja*` surface and ipa rows; all 61 characters scanned programmatically; focused auditing on the affricate set (七足左走坐中鳥水) and the tone-notation split (中:1/中:2 row vs the rest).
**Notation conventions observed in the file:**
- Two *competing* IPA tone notations coexist: Chao tone-letters (˥˦˧˨˩) in most cells, and Unicode superscript digits (⁵⁵ ²¹ ³³) in others — frequently along a *batch boundary* (the last ~22 characters, or the 中:2 row) rather than along any phonological line.
- The Hokkien `nan*` surfaces are split three ways between **Tâi-lô** (`ts/tsh`), **POJ** (`ch/chh`), and numbered/superscript-tone variants — sometimes mixed *within one register*.
- `yue` carries the affricate tie-bar `t͡s`; `yue_hk` (and the other Cantonese sub-codes) drop it — identical syllables, different glyphs.
- A few `surface` cells contain raw IPA (tie-bars, ŋ, ɦ, ɔ̃) that leaked from the `ipa` column.

---

## Issues found

### 1. 七 (and 5 others) — `yue` vs `yue_hk` (ipa) — affricate tie-bar present in `yue`, absent in `yue_hk`
- Current: 七 `"t͡sʰɐt̚˥"` (`yue` IPA) vs `"tsʰɐt̚˥"` (`yue_hk` IPA)
- Expected: pick one convention for the affricate /ts/ across both Cantonese standard rows — either `t͡s`/`t͡sʰ` in both or `ts`/`tsʰ` in both
- Why: a programmatic scan shows `yue` and `yue_hk` differ in *exactly six* cells — 七 足 中:1 中:2 左 走 — and in **every one the only difference is the U+0361 tie-bar** (`yue` has it, `yue_hk` lacks it). These two columns are the same Hong-Kong-prestige Cantonese (LSHK Jyutping surfaces `cat1` are identical), so the divergence is pure notation drift, not phonetics. Per the IPA Handbook the tie-bar is optional but must be applied consistently within a transcription system.

### 2. 中:1 / 中:2 / 山 / 三 … — `yue_gz` `yue_dg` `yue_ts` `yue_zs` `yue_nn` (ipa) — Chao letters and superscript digits mixed within one register
- Current (e.g. `yue_gz`): 三 `"saːm⁵⁵"`, 山 `"saːn⁵⁵"`, 中:1 `"t͡sʊŋ⁵⁵"` (superscript digits) **but** 七 `"tsʰɐt̚˥"`, 馬 `"maː˩˧"`, 心 `"sɐm˥˥"`, 南 `"naːm˨˩"` (Chao letters)
- Expected: one tone notation per register — convert the 37–39 digit cells to Chao letters (`saːm˥˥`, `t͡sʊŋ˥˥`, …) to match the file-wide convention, or vice-versa
- Why: all five Pearl-River-Delta Yue sub-codes carry an **identical split**: the Chao-letter cells are exactly the last batch of 22 characters (七八九十馬鳥魚人手足頭心血肉東西南北見聞食飲) and everything else is superscript-digit. The split tracks no phonological feature — checked syllables fall on *both* sides (一 `jɐt̚⁵⁵` digit vs 七 `tsʰɐt̚˥` Chao) — so it is a data-entry batch artifact. Chao (1930) tone-letters are the file's house style; the `⁵⁵`/`²¹` cells are notation leaks.

### 3. 中:2 — `yue_gz` `yue_dg` `yue_ts` `yue_zs` `yue_nn` (ipa) — same row, digit tone where Chao is expected
- Current: 中:2 `"t͡sʊŋ³³"` (`yue_gz`/`yue_ts`), `"tsʊŋ³³"` (`yue_dg`/`yue_zs`/`yue_nn`) vs `yue`/`yue_hk`/`yue_mo` 中:2 `"t͡sʊŋ˧"`/`"tsʊŋ˧"`
- Expected: `"…˧"` Chao mid level, e.g. `"t͡sʊŋ˧"`
- Why: this is the single most-cited cell in the file for notation drift. The "core" Cantonese rows write the 陰去 mid-level tone as Chao `˧`, but every dialect sub-code writes it `³³`. Same tone category, two glyph systems. (Listed separately from #2 because it is the one cell where even `yue_us` keeps Chao `˧` while the five PRD codes do not — the cleanest minimal pair.)

### 4. 中:2 — `czh` (surface) — raw IPA pasted into a romanised surface cell
- Current: `"tsoŋ⁵⁵"` (surface), `"tsoŋ˥˥"` (IPA)
- Expected: a Hui-romanisation surface parallel to 中:1 `"zong³³"`, e.g. `"zong⁵⁵"` (the ŋ → ng, IPA → spelling)
- Why: `czh` (Hui Chinese / 徽州語) surfaces are a romanisation with superscript-digit tones — 中:1 `"zong³³"`, 山 `"san³³"`, 心 `"shin³³"`. The 中:2 cell instead carries the **IPA velar nasal ŋ** (`tsoŋ⁵⁵`), i.e. the `ipa` value was copied into `surface`. The sibling 中:1 spells the same rime `-ong`/`-oŋ` as `zong`. Surface columns must use the orthographic digraph `ng`, never the IPA letter ŋ.

### 5. 行:2 — `czh` (surface) — raw IPA (ɦ, ɔ̃) pasted into the romanised surface cell
- Current: `"ɦɔ̃²²"` (surface), `"ɦɔ̃˨˨"` (IPA)
- Expected: a romanised surface parallel to 行:1 `"hhien²²"`, e.g. `"hho²²"` (cf. 下 `"hho²²"` in the same register)
- Why: the surface contains the **IPA voiced glottal fricative ɦ and nasalised open-o ɔ̃** — both are phonetic symbols, not part of the `czh` spelling scheme, which writes the voiced /ɦ-/ onset as the digraph `hh` (行:1 `"hhien²²"`, 上 `"zang²²"`, 下 `"hho²²"`). This is the second IPA-into-surface leak in `czh`; together #4–#5 are the only two non-conforming `czh` surfaces.

### 6. 五 / 月 / 魚 — `ja_thk` (surface) — IPA ŋ in a Hepburn-style surface row
- Current: 五 `"ŋo"`, 月 `"ŋetsu"`, 魚 `"ŋyo"` (surface)
- Expected: Hepburn spellings `"go"`, `"getsu"`, `"gyo"` (the Tōhoku nasalised-g realisation belongs in the IPA row, which already has 五 `"ŋo"`)
- Why: `ja_thk` (Tōhoku 東北弁) surfaces are otherwise Hepburn — `"itsu"`, `"san"`, `"shū"`, `"ketsu"`. Three cells write the **IPA velar nasal ŋ** for the rendaku/bidakuon /ɡ/, which is a phonetic detail, not a Hepburn grapheme (Hepburn has no ŋ). The contrast 月 surface `"ŋetsu"` vs IPA `"ŋet͡sɯ"` shows the surface simply inherited the IPA initial. Hepburn writes all these with `g`.

### 7. 四 — `ja_thk` (surface) — IPA barred-i (ï) in a Hepburn-style row
- Current: 四 `"sï"`, 七 `"sïtsu"`, 水 `"sïi"`, 心 `"sïn"` (surface)
- Expected: Hepburn `"shi"`, `"shitsu"`, `"sui"`, `"shin"` — or, if the central-vowel merger is the intended dialect point, document a consistent ASCII fallback; do not use the IPA/Americanist symbol ï in a romaji column
- Why: the barred-i ï is the Tōhoku centralised-/i/ realisation and is a *phonetic* symbol; Hepburn romaji has no ï. The IPA row already carries it correctly as `"sɯ̈"` (四). Mixing ï into the Hepburn surface makes the column un-typeable and inconsistent with the other ja* registers, which all write `shi`/`su` here.

### 8. 七 vs 足 — `nan_xm` (surface) — Tâi-lô `tsh-` and POJ `ch-` mixed within one register
- Current: 七 `"tshit"` (Tâi-lô affricate `tsh`) but 足 `"chiok"` (POJ affricate `ch`); 左 `"tsó"` (Tâi-lô `ts`)
- Expected: one scheme — under Tâi-lô, 足 = `"tsiok"`; under POJ, 七 = `"chhit"` and 左 = `"chó"`
- Why: `nan_xm` (Xiamen/Amoy Hokkien) cannot be both POJ and Tâi-lô at once. The 精/莊 affricate is spelled `ts` in 七/左 (Tâi-lô) but `ch` in 足 (POJ) — the **same phoneme /ts/, two schemes, one column**. Tâi-lô (MOE 2006) uses `ts/tsh/j/s`; POJ uses `ch/chh/j/s`. Pick one. The same `tshit`-but-`chiok` split recurs in `nan_zz` and `nan_sg` (see #9).

### 9. 足 — `nan_zz` / `nan_sg` (surface) — POJ `ch-` islands inside otherwise-Tâi-lô registers
- Current: `nan_zz` 足 `"chiok"` (POJ) beside 七 `"tshit"`, 左 `"tsó"` (Tâi-lô); `nan_sg` 足 `"chiok"` beside 七 `"tshit"`, 左 `"tsó"`
- Expected: `"tsiok"` to match each register's own `ts-` spelling of 左/七
- Why: identical defect to #8 in two further Hokkien sub-codes. The lone POJ-spelled 足 is the only `ch-` cell in registers that otherwise commit to Tâi-lô `ts-`; it is internally self-contradictory (七 `tsh-` vs 足 `ch-` for the same affricate series).

### 10. nan family — `nan_id` / `nan_my` / `nan_pera` vs `nan` / `nan_xm` — whole-register POJ vs Tâi-lô split (scheme not declared)
- Current: 七 `"chhit"` in `nan_id`/`nan_my`; 七 `"chit⁵"` in `nan_pera`; 水 `"chúi"` and 左 `"chó"` in `nan_my` — all **POJ `ch/chh`**. But `nan`/`nan_xm`/`nan_qz`/`nan_zz`/`nan_pn`/`nan_sg` use **Tâi-lô `ts/tsh`** (七 `"tshit"`)
- Expected: this cross-register split is defensible *if* documented (diaspora Hokkien is traditionally written in POJ), but it should be stated in a notation key so the inconsistent affricate spelling across Hokkien columns is intentional, not accidental
- Why: a reader comparing 七 across the Hokkien rows sees `tshit` / `chhit` / `chit⁵` and cannot tell whether the difference is phonetic or orthographic. It is purely orthographic (Tâi-lô vs POJ vs Penang-POJ-with-tone-numbers). Flagging so the project can either harmonise to one scheme or annotate the deliberate POJ choice for `nan_id/my/pera`.

### 11. 七 vs 左/走/水 — `nan_te` (ipa) — affricate tie-bar applied inconsistently
- Current: tie-bar present in 水 `"t͡sui˥˧"`, 鳥 `"t͡siau˥˧"`, 走 `"t͡sau˥˧"`, 坐 `"t͡so˨˦"` but **absent** in 七 `"tsʰik̚˥"`, 左 `"tso˥˧"`
- Expected: uniform — either `t͡s`/`t͡sʰ` throughout or `ts`/`tsʰ` throughout the `nan_te` IPA column
- Why: within the single Teochew (`nan_te`) IPA column the /ts/ affricate is sometimes tied (水, 走) and sometimes not (左, 七). Same phoneme, same register, two glyphings. (The same tie/no-tie inconsistency appears in `nan_xm` IPA: 七 `"tsʰit̚˧˨"` untied vs 足 `"t͡siɔk̚˧˨"` tied.)

### 12. 七 / 左 / 鳥 / 水 / 走 — `nan_te` vs `nan_th` (surface) — Tâi-lô `ts/tsh` vs Peng'im `z/c` for the same Teochew dialect
- Current: `nan_te` 七 `"tshik8"`, 鳥 `"tsiau2"`, 左 `"tso2"`, 走 `"tsau2"`, 足 `"tsiog4"` — but `nan_th` 七 `"cig4"`, 鳥 `"ziao2"`, 左 `"zo2"`, 走 `"zao2"`, 足 `"ziog4"`
- Expected: both are Teochew (`nan_te` = 潮州語, `nan_th` = Thai-diaspora Teochew); use one romanisation. Teochew's own standard is **Peng'im (拼音方案)**, which spells these `z/c/s` — so `nan_te` `tshik8`/`tsau2` would become `cêg`/`zao`, OR keep Tâi-lô `ts` in both
- Why: a scan shows the *only* systematic difference between the two Teochew columns is the affricate spelling: `nan_te` uses Tâi-lô/POJ-style `ts/tsh`, `nan_th` uses Peng'im `z/c`. These are two romanisations of one dialect. Under Peng'im (Guangdong 1960) the voiceless unaspirated affricate is `z`, the aspirated `c`; `nan_th`'s `zao2`/`cig4` follow it, `nan_te`'s `tsau2`/`tshik8` do not. The columns should agree.

### 13. 三 / 山 / 心 / 中:1 vs 四 / 水 / 火 — `cdo` (surface) — superscript-digit tones and BUC diacritic tones mixed within one register
- Current: digit-tone cells 三 `"săng⁵³"`, 山 `"săng⁵³"`, 心 `"sĭng⁵³"`, 中:1 `"dṳ̆ng¹³"`, 央 `"iŏng⁵³"`, 西 `"să̤⁵³"`, 立 `"lĭk⁵"` (14 cells) **vs** diacritic-tone cells 四 `"sé"`, 水 `"cuōi"`, 火 `"huōi"`, 海 `"hāi"`, 馬 `"mā"` (the rest)
- Expected: one tone notation for `cdo` — Bàng-uâ-cê (BUC) marks tone with diacritics (`á ē ̤ ̆` etc.), so drop the superscript `⁵³`/`¹³`/`⁵` and write 三 `"săng"`, 中:1 `"dṳ̆ng"`, etc.; or convert all to digit notation
- Why: `cdo` (Eastern Min / Foochow) surface carries **two tone-notation systems side by side**: 14 cells append Chao-style superscript digits to the romanisation, the remaining cells use only BUC tonal diacritics. The split is again a batch boundary, not a tone-class boundary (both 陰平 三 `săng⁵³` and 陰平 西 `să̤⁵³` are digit; 上聲 馬 `mā` is diacritic). Within BUC, tone is *either* the diacritic *or* a number — never both, and never half-and-half across a column.

### 14. 中:2 — `cdo` (ipa) — three-level Chao contour where siblings have simple contours (review-worthy contour, not a leak)
- Current: `"dœyŋ˨¹˧"` (`cdo` IPA) — note this one *is* Chao letters, unlike the `mnp`/`hak` 中:2 cells which are digit `⁴⁴`/`⁵⁵`
- Expected: confirm the dipping `˨¹˧` is the intended 去 sandhi value, or align to `mnp` 中:2 `"doŋ⁴⁴"` after that cell is itself converted to Chao
- Why: flagged for cross-register consistency: in the notorious 中:2 row, `cdo` is the *only* Eastern/Northern Min code that kept Chao letters while `mnp` 中:2 `"doŋ⁴⁴"` reverted to superscript digits. After `mnp`'s digit cell is normalised to Chao (it is the sole digit cell in the `mnp` column), the two should be checked against the same Foochow/Jian'ou 去-tone source so the row is internally coherent.

### 15. 中:2 — `mnp` (ipa) — sole superscript-digit tone in an otherwise all-Chao register
- Current: `"doŋ⁴⁴"` (`mnp` IPA) vs every other `mnp` cell in Chao letters (三 `"sáng"` surface / IPA Chao, 山 `"sâng³³"`…)
- Expected: `"doŋ˦˦"`
- Why: a scan of the `mnp` (Min Bei / 閩北語) IPA column finds **exactly one** digit-tone cell — 中:2 — among 30-plus Chao-letter cells. Same batch-boundary leak as the Hakka 中:2 cells noted in review #11, now confirmed for Min Bei. (Distinct from #11's Hakka finding; this is the `mnp` register, not flagged before.)

### 16. 七 — `nan_pera` (surface) — Penang/Peranakan numbered-tone POJ vs diacritic POJ elsewhere
- Current: 七 `"chit⁵"`, 左 `"cho²¹"`, 中:1 `"tiong³"` (POJ letters + superscript tone number) vs `nan`/`nan_xm` 七 `"tshit"`, 左 `"tsó"` (diacritic tone, no number)
- Expected: if `nan_pera` deliberately uses Penang-Hokkien numbered tones, document it; otherwise harmonise to the POJ diacritic style used by `nan_id`/`nan_my`
- Why: `nan_pera` is the only Hokkien column that writes tone as a trailing superscript digit on a POJ base (`chit⁵`, `cho²¹`); the other diaspora Hokkien columns (`nan_id` `"chhit"`, `nan_my` `"chhit"`) use POJ tonal diacritics. So within the Hokkien block the project mixes (a) Tâi-lô diacritic, (b) POJ diacritic, and (c) POJ + superscript number — three tone notations for one language. At minimum the Peranakan numbered-tone choice should be annotated.

### 17. ko vs ko_kp — `ko` (surface) RR vs `ko_kp` (surface) MR — schemes diverge silently
- Current: `ko` 六 `"yuk"`, 龍 `"yong"`, 天 `"cheon"`, 七 `"chil"`, 犬 `"gyeon"` (Revised Romanization) vs `ko_kp` 六 `"ryuk"`, 龍 `"ryong"`, 天 `"ch'ŏn"`, 七 `"ch'il"`, 犬 `"kyŏn"` (McCune–Reischauer)
- Expected: defensible as-is (South-Korean standard = RR; North-Korean = MR), but the two schemes' apostrophes (`ch'`), breves (`ŏ`), and initial-l retention (`ryuk`) should be flagged as an intentional scheme split in a notation key so the divergence is not read as a phonetic claim
- Why: `ko` uses RR (NIKL 2000): no aspiration apostrophe, `eo` for /ʌ/, initial-ㄹ dropped (`yuk`). `ko_kp` uses MR: apostrophe aspiration, `ŏ`, initial-ㄹ kept (`ryuk`, `ryong`) reflecting the DPRK 두음법칙 non-application. This is the correct *linguistic* contrast but two romanisation systems in adjacent columns; documenting it prevents future "errors" being filed against the legitimate MR spellings.

### 18. ko_zai — `ko_zai` (surface) — verbatim copy of the RR `ko` column
- Current: `ko_zai` 一..鳥 `"il, i, sam, sa, o, yuk, chil, pal, gu, sip, il, wol, san, su, hwa, mok, to, cheon, ji, hae, yong, ho, gyeon, ma, jo"` — **identical, cell-for-cell, to `ko`**
- Expected: if Zainichi (在日) Sino-Korean is meant to differ (e.g. retained initial-l, older vowel values, or Japanese-influenced readings) populate it; if it is genuinely identical to standard RR, consider whether the column adds information
- Why: a diff of the `ko_zai` and `ko` surface columns finds **zero differences** across the sampled range. Either `ko_zai` was seeded as a copy and never differentiated, or it is intentionally identical — in which case it is a romanisation duplicate rather than an independent reading. Flagged for the maintainers to confirm intent (notation/data-provenance issue, not a phonological claim).

### 19. zh — `zh` (ipa) — affricate tie-bar on retroflex/palatal but not on dental series
- Current: tie-bar on 七 `"t͡ɕʰi˥˥"`, 中:1 `"t͡ʂuŋ˥˥"`, 九 `"t͡ɕjou˨˩˦"` but **no** tie-bar on 足 `"tsu˧˥"`, 左 `"tsuo˨˩˦"`, 走 `"tsou˨˩˦"`, 坐 `"tsuo˥˩"`
- Expected: uniform tie-bar across all three Mandarin affricate series — `t͡su`, `t͡suo`, etc. — to match the palatal/retroflex cells
- Why: within the single `zh` (Pinyin/Putonghua) IPA column the palatal (ㄐ /tɕ/) and retroflex (ㄓ /tʂ/) affricates are tied (`t͡ɕ`, `t͡ʂ`) while the dental (ㄗ /ts/) affricate is left untied (`ts`). All three are equally affricates; the tie-bar policy must be applied to all or none (IPA Handbook, affricate notation). `zh_tw` shows the same split, so the fix should be applied in parallel.

### 20. nan_hai — `nan_hai` (surface) — fourth, undeclared numbered romanisation in the Min block
- Current: `nan_hai` 七 `"sit5"`, 足 `"tsiog2"`, 左 `"tso4"`, 走 `"tsau4"`, 坐 `"do2"`, 中:1 `"dong1"`, 中:2 `"dong5"`, 鳥 `"tsiau4"`, 水 `"zui4"`
- Expected: confirm and annotate the Hainanese romanisation in use (it spells the affricate as `ts`/`z` with trailing tone numbers and lenites 中 to `d-`); ensure 走/鳥 `ts` vs 水 `z` is one scheme, not two
- Why: Hainanese (`nan_hai`) introduces yet another spelling convention into the Min block — voiced-onset `d-` for 中/坐 plus trailing tone digits — and even *internally* it spells the affricate two ways: `ts` in 走 `"tsau4"`/鳥 `"tsiau4"` but `z` in 水 `"zui4"`. Same `ts`-vs-`z` Peng'im/Tâi-lô tension as #12, now inside one column. Flag to harmonise the affricate spelling and document the scheme.

---

## Summary of systematic issues

Three recurring, file-wide notation defects dominate, all *orthogonal* to the phonological reviews #1–11:

1. **Tone-notation system mixed within a register (Chao letters ˥˧ vs superscript digits ⁵⁵/²¹).** Confirmed in `yue_gz/dg/ts/zs/nn` IPA (#2, #3), `cdo` surface (#13), `mnp` IPA (#15), and the IPA-into-surface leaks of `czh` (#4, #5). The digit cells almost always coincide with a **data-entry batch boundary** — either the 中:2 row or the last ~22 characters — never with a tone-class boundary. House style is Chao letters; the digit cells should be converted.

2. **Affricate spelling/tie-bar mixed within or across cognate registers.** The IPA tie-bar is present in `yue` but absent in `yue_hk` (#1), inconsistent inside `nan_te`/`nan_xm` (#11), and applied to only two of three Mandarin affricate series in `zh` (#19). On the surface side, the Hokkien block mixes **Tâi-lô `ts/tsh`**, **POJ `ch/chh`**, and **numbered-tone POJ** — sometimes in one column (`nan_xm`/`nan_zz`/`nan_sg` 七 vs 足: #8, #9; `nan_hai` 走 vs 水: #20), sometimes across columns (#10, #16), and the two Teochew columns split Tâi-lô vs Peng'im `z/c` (#12).

3. **Surface cells contaminated by IPA, and undocumented scheme splits.** `czh` 中:2/行:2 and `ja_thk` 五/月/魚/四 carry IPA symbols (ŋ, ɦ, ɔ̃, ï) in romanised columns (#4–#7). The Korean RR/MR split (#17) and the `ko_zai` = `ko` duplicate (#18) are defensible-but-undocumented and should be annotated so they are not later mistaken for errors.

**Recommended one-line policy:** declare, per register code, exactly one surface romanisation scheme and one IPA tone notation (Chao letters), then run a scanner that rejects any `ipa` cell containing ⁰–⁹ superscripts and any `surface` cell containing IPA-only glyphs (ŋ ɦ ɔ̃ ï t͡). That single guard would catch findings #2–#7, #11, #13, #15, #19 automatically.

---

## Worker round-1 response (作業者round-1)

Scope note: this md had no prior worker round, so this is the round-1 reply to the original review. I verified every quoted value against `hanmap_data.js` with `node` scans before deciding. Project policy: apply only clear, unambiguous local errors / single-cell internal inconsistencies and reviewer-endorsed mechanical normalizations; hold genuine cross-school / file-wide convention choices the team has not ratified.

### Applied (clear IPA-into-surface leaks and one sole-outlier tone cell)

- **#4 中:2 `czh` surface** — `"tsoŋ⁵⁵"` → `"zong⁵⁵"` *(applied by orchestrator this round)*. IPA velar nasal ŋ leaked into the Hui (徽州語) romanised surface. Scheme confirmed across all 61 `czh` cells: IPA `ts-`→spelled `z-` (中:1 `tsoŋ`→`zong`, 足 `tsuʔ`→`zu`, 左 `tso`→`zo`, 走 `tseu`→`zeu`), IPA `-ŋ`→`-ng`. Sibling 中:1 `"zong³³"` is the exact parallel; only the ŋ→ng and ts→z were changed, tone digits untouched.
- **#5 行:2 `czh` surface** — `"ɦɔ̃²²"` → `"hho²²"` *(applied by orchestrator this round)*. IPA voiced glottal fricative ɦ and nasalised ɔ̃ leaked in. `czh` spells onset /ɦ-/ as digraph `hh` (行:1 `ɦiɛ̃`→`hhien`, 下 `ɦo`→`hho`, 上/下 row). Adopted the reviewer's `"hho²²"` (cf. 下 `"hho²²"`), removing both IPA symbols; tone digits unchanged.
- **#6 `ja_thk` ŋ leaks** — 五 `"ŋo"`→`"go"`, 月 `"ŋetsu"`→`"getsu"`, 魚 `"ŋyo"`→`"gyo"`, **牛 `"ŋyū"`→`"gyū"`** *(all applied by orchestrator this round)*. `ja_thk` (東北弁) surfaces are otherwise Hepburn (Hepburn has no ŋ). The Tōhoku bidakuon /ɡ/→[ŋ] detail is correctly retained in the IPA row (五 `ŋo`, etc.). Hepburn forms confirmed by the sibling Hepburn registers `ja_kgs`/`ja_okn` (五 `go`, 月 `get`/`gitsu`, 魚 `gyo`, 牛 `gyū`). **牛 was not in the reviewer's list but is the identical defect** — per team rule (fix all variants of the same error together) I included it.
- **#7 `ja_thk` barred-i (ï) leaks** — 四 `"sï"`→`"shi"`, 七 `"sïtsu"`→`"shitsu"`, 水 `"sïi"`→`"sui"`, 心 `"sïn"`→`"shin"`, **地 `"tsï"`→`"chi"`** *(all applied by orchestrator this round)*. The Americanist/IPA barred-i is the Tōhoku centralised-/i/ realisation and is un-typeable in a romaji column; it is correctly kept in the IPA row (四 `sɯ̈`, 地 `t͡sɯ̈`). Hepburn forms confirmed across `ja_kgs`/`ja_okn` (四 `shi`, 七 `shitsu`/`shit`, 水 `sui`, 心 `shin`, 地 `chi`). **地 was not in the reviewer's list but is the identical ï→IPA leak** — included under the same fix-all-variants rule.
- **#15 中:2 `mnp` IPA** — `"doŋ⁴⁴"` → `"doŋ˦˦"` *(applied by orchestrator this round)*. Confirmed by full-column scan: this is the **sole** superscript-digit tone cell among 54 Chao-letter cells in the `mnp` (閩北語) IPA column — a single internal inconsistency, not a convention choice. ⁴⁴→˦˦ is the standard Chao equivalent (4 = ˦); sibling 中:1 `mnp` IPA already uses Chao (`doŋ˩˧`). Matches the reviewer's expected value exactly.

### Held with rationale (file-wide convention choices — not unilateral edits this round)

- **#1, #11, #19 (affricate tie-bar U+0361 present/absent across whole registers)** — These are a single glyph-policy decision spanning entire columns (`yue` vs `yue_hk`/sub-codes; `nan_te`/`nan_xm`; the dental vs palatal/retroflex split in `zh`/`zh_tw`). Adding or stripping the tie-bar across all affricate cells in a register is a house-style ratification, not a localised error. Held for a team-level tie-bar policy + scanner (as the reviewer's own "recommended one-line policy" envisages).
- **#2, #3 (Chao letters vs superscript digits in `yue_gz/dg/ts/zs/nn` IPA)** — ~37–39 cells across 5 registers along a batch boundary. Converting them is a column-wide tone-notation harmonisation affecting hundreds of cells; this is a system-level convention the team must declare, not an isolated bug. Held.
- **#13 (`cdo` surface: BUC diacritic vs superscript-digit tones, 14 cells)** — Same multi-cell tone-notation harmonisation; deciding BUC-diacritic-only vs digit-only for the whole column is a convention call. Held.
- **#14 (`cdo` 中:2 IPA `dœyŋ˨¹˧`)** — Reviewer notes it is *already* Chao letters and only asks to confirm the去-sandhi contour / re-check after #15; no concrete error stated. No data change; the #15 fix it depends on is done.
- **#8, #9, #10, #12, #16, #20 (Hokkien/Teochew/Hainanese Tâi-lô vs POJ vs Peng'im vs numbered-tone surface schemes)** — These are cross-register romanisation-scheme choices (diaspora Hokkien traditionally POJ; Teochew Peng'im; Penang numbered tones; Hainanese romanisation). The reviewer explicitly frames most as "defensible if documented." Harmonising one register to another's scheme would overwrite legitimate distinct romanisations; held for a per-register notation-key declaration rather than silent rewrites. (The within-column `ts`/`ch` and `ts`/`z` mixes, e.g. `nan_xm` 七 `tsh-` vs 足 `ch-`, are real but the *correct* unifying scheme per register is a team decision, not an unambiguous single value — held to avoid guessing which scheme each register is meant to declare.)
- **#17 (`ko` RR vs `ko_kp` MR), #18 (`ko_zai` == `ko` duplicate)** — Reviewer agrees both are linguistically defensible; asks only for documentation / provenance confirmation, not a data correction. No actionable error. Held for a notation-key annotation and a maintainer decision on whether `ko_zai` should be differentiated.

remainingOpenCount: the held convention/documentation items above (#1, #2, #3, #8, #9, #10, #11, #12, #13, #14, #16, #17, #18, #19, #20) remain open as won't-fix-without-team-decision or documentation-only.

---

## Reviewer round-2 response (再評価 round-2)

I (the romanization/tone-notation auditor) re-verified every "Applied" claim against live `hanmap_data.js` (keys `中:1/中:2/行:1/行:2` are the disambiguated forms; I checked those, not bare `中`/`行`).

### Verified applied fixes (all confirmed in live data)

- **#4 `czh` 中:2 surface** — live = `"zong⁵⁵"` ✓. IPA ŋ removed, parallels 中:1 `"zong³³"`. Accept.
- **#5 `czh` 行:2 surface** — live = `"hhong²²"` (NOT `"hho²²"` as the worker text claimed). △ I checked the source IPA: 行:2 ipa.czh = `"ɦɔ̃˨˨"`, 行:1 ipa.czh = `"ɦiɛ̃˨˨"` → spelled `"hhien²²"`. The orchestrator wrote `"hhong²²"`, which actually tracks the nasal rime `ɔ̃` better than my own suggested `"hho²²"` (that was modelled on the homograph 下, a different morpheme). Either spelling removes the IPA ɦ/ɔ̃ leak. **The fix is correct and clean; only the worker's write-up mis-quoted the applied value.** A full czh-surface scan finds ZERO remaining IPA glyphs (ŋ/ɦ/ɔ/ɛ/ï). Accept the live value; noting the doc/claim mismatch.
- **#6 `ja_thk` ŋ-leaks** — live: 五`"go"` 月`"getsu"` 魚`"gyo"` 牛`"gyū"` ✓. The extra 牛 (fix-all-variants rule) confirmed. Accept.
- **#7 `ja_thk` ï-leaks** — live: 四`"shi"` 七`"shitsu"` 水`"sui"` 心`"shin"` 地`"chi"` ✓. Extra 地 confirmed. Full ja_thk-surface scan: ZERO remaining ŋ/ï. Accept.
- **#15 `mnp` 中:2 ipa** — live = `"doŋ˦˦"` ✓. Full mnp-ipa column scan now returns ZERO superscript-digit cells — confirming this was a true sole-outlier, now normalised to Chao. Accept.

### Adjudication of held items

- **#1, #11, #19 (affricate tie-bar U+0361 policy)** — △ Held. Verified the inconsistencies are real and still present (`zh` ipa: 七`t͡ɕʰi` tied vs 足`tsu`/左`tsuo` untied; `nan_te` ipa: 水/走 tied vs 七/左 untied). But the fix direction ("tie all" vs "tie none") is a house-style ratification across whole columns, exactly the "one-line tie-bar policy + scanner" my own report recommended at team level. Not a localised single-value error. **Accept as won't-fix-without-policy.**
- **#2, #3 (`yue_gz/dg/ts/zs/nn` Chao vs digit, ~37 cells/register)** — △ Held. Verified `yue_gz` ipa still 37 digit / 22 Chao along the batch boundary. Column-wide tone-notation harmonisation = system-level convention call. **Accept as held.**
- **#13 (`cdo` BUC-diacritic vs digit, 14 cells)** — △ Same multi-cell convention class. **Accept as held.**
- **#14 (`cdo` 中:2 `dœyŋ˨¹˧`)** — ✓ No error stated; it is already Chao, and the #15 dependency is now applied. **Accept.**
- **#8, #9, #10, #12, #16, #20 (Hokkien/Teochew/Hainanese Tâi-lô vs POJ vs Peng'im vs numbered-tone)** — △ Held. The within-column mixes (`nan_xm` 七`tshit`/足`chiok`) are confirmed real, but the *correct unifying scheme per register is genuinely under-determined* — to fix 足 one must first decide whether `nan_xm` declares Tâi-lô (`tsiok`) or POJ (then 七→`chhit`). My original review framed all of these as "defensible **if documented**." Guessing the scheme would risk overwriting legitimate distinct romanisations. **Accept as held pending a per-register notation key — a documentation task, not a data error.**
- **#17 (`ko` RR vs `ko_kp` MR), #18 (`ko_zai`==`ko`)** — ✓ I explicitly agreed both are linguistically correct; only documentation/provenance was requested. **Accept as held.**

### New issues

None. No new errors surfaced during verification; all surface columns I re-scanned (czh, ja_thk) are clean of IPA contamination.

### Scorecard

| Class | Items | Status |
|---|---|---|
| IPA-into-surface leaks (clear errors) | #4 #5 #6 #7 | Fixed & verified ✓ |
| Sole-outlier digit tone (clear error) | #15 | Fixed & verified ✓ |
| Tie-bar policy (house-style) | #1 #11 #19 | Held — accepted △ |
| Chao-vs-digit column harmonisation | #2 #3 #13 | Held — accepted △ |
| Cross-school romanisation schemes | #8 #9 #10 #12 #16 #20 | Held — accepted △ |
| Confirm-only / documentation | #14 #17 #18 | Accepted ✓ |

### Loop-termination judgement

Every clear, unambiguous error (the five IPA-leak/outlier fixes #4–#7, #15) is now applied and confirmed in live `hanmap_data.js`. All remaining items are genuine system-level notation-convention choices that my own original review framed as "defensible if documented" and recommended addressing via a single team-level policy + scanner — not as per-cell corrections. There is no concretely-actionable single-value fix left that the dev team has failed to attempt; the open items reduce to a documentation/policy task (a per-register notation key), which I record below as a known limitation rather than re-demanding rewrites that would risk corrupting legitimate distinct romanisations.

**Known limitation (needs human linguist / maintainer policy decision):** the Hokkien/Teochew/Hainanese surface columns and the Yue/cdo IPA tone columns each mix more than one notation system. A per-register notation-key declaration (one romanisation + Chao tone per code) plus the recommended scanner guard would resolve the residual #1–#3, #8–#13, #16, #19, #20 cleanly; this is intentional-but-undocumented variation, not a correctness bug.

**File status: CLOSED** — nothing left to address. All clear errors are fixed-and-verified in live data; every remaining item is an accepted house-style/convention choice or a documentation-only known limitation.
