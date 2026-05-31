# Hanmap data review #21 — Yue / Cantonese (粵語) varieties: inter-dialect variation, Taishanese integrity & 清濁送氣

## Reviewer self-introduction (自我介紹)

我係 **司徒敬亨（Sito Kínghàng）**, a Yue-dialectology reviewer working out of the 珠三角 fieldwork tradition. My grounding is 詹伯慧 *廣東粵方言概要* (2002) and 詹伯慧·張日昇 *珠江三角洲方言字音對照* for the Guangzhou / 中山 / 東莞 grid; Bauer & Benedict *Modern Cantonese Phonology* (1997) for the Guangzhou/HK phoneme inventory and the n-/l- and ŋ-/∅- 懶音 literature; Yue-Hashimoto *Studies in Yue Dialects* and her 1972 *Phonology of Cantonese* for the comparative apparatus; and for **台山話 (Hoisanese)** the Taishanese sources behind Wiktionary's Taicheng-Subdistrict transcription system (the ɬ- < *s-, the prenasalised voiced obstruents ᵐb/ⁿd/ᵑɡ < Middle Chinese voiced initials, and the 33/55/21/22/32 tone grid). I loaded `hanmap_data.js` as a module and verified every "Current" value verbatim against `HAN_DATA[char].surface{}` / `.ipa{}`, and checked every `yue_ts` cell against `en.wiktionary.org/wiki/<char>` → Taishanese line.

**Reviewer perspective:** Source-first and conservative. A pronunciation atlas that *clones* a prestige variety into a dialect slot is lying by omission; but inventing differences that aren't attested is worse. I separate (a) **correct identity** (Guangzhou ≈ HK ≈ Macau genuinely coincide on these 60 basic syllables), (b) **lazy identity** (Zhongshan/石岐話 and the 懶音-bearing HK forms that should differ), and (c) **wrong data** (yue_ts cells that are Standard Cantonese mislabeled, and yue_nn sl-/th- clusters that belong to no Yue variety at all).

**Coverage:** All 8 in-scope Yue codes (`yue`, `yue_gz`, `yue_hk`, `yue_mo`, `yue_dg`, `yue_nn`, `yue_zs`, `yue_ts`) across all 60 characters (62 cells counting 中:1/中:2/行:1/行:2). `zh_us`/`yue_us` left untouched (review #22's scope).

**Notation conventions observed in the file:**
- `surface` = Jyutping for the standard cluster (`jat1`, `saam1`, `co5`); `yue_ts` uses a **house romanization** (`yat1`, `ngi6`, `nyin5`, `yeung4`) that is NOT Wiktionary's official Taishanese scheme (`yit2`, `ngei5`, `ngin3`, `yiang3`) — see Issue 11.
- `ipa` mixes two tone notations within the same dataset: Chao letters (`˥`, `˧˥`, `˨˩`) for `yue`/`yue_hk`/`yue_mo`, and superscript numerals (`⁵⁵`, `³³`, `²¹`) for `yue_gz`/`yue_dg`/`yue_nn`/`yue_zs`/`yue_ts`. Taishanese IPA should use the superscript-numeral style per the existing correct cells (`ɬaːm³³`, `ɬɪp̚˧˨`).
- Taishanese hallmark already present in two cells: `三 ɬaːm`, `十 ɬɪp̚` (the lateral fricative ɬ < *s-). The systematic defect is that this hallmark is **missing** from the other s-initial cells, and that voiced MC initials are not rendered as the Taishanese prenasalised `ᵐb/ⁿd/ᵑɡ`.

---

## Issues found

### 1. `yue_ts` — pervasive Standard-Cantonese contamination across ~50 of 60 cells (the dominant defect)

- **Current (sample):** `人 nyin5 /jɐn˨˩/`, `馬 ma5 /ma˩˧/`, `魚 yu5 /jyː˨˩/`, `東 dung1 /tʊŋ˥˥/`, `土 tho2 /tʰou³⁵/`, `坐 cho5 /t͡sʰɔ²³/`, `飲 yam2 /jɐm˧˥/`, `走 jau2 /t͡sɐu³⁵/`, `足 juk1 /t͡sʊk̚˥/`, `中:1 jung1 /t͡sʊŋ⁵⁵/`, `央 yeung1 /jœŋ⁵⁵/`.
- **Expected (Wiktionary Taicheng):** `人 ngin3 /ᵑɡin²²/`, `馬 ma4 /ᵐba²¹/`, `魚 ngui3 /ᵑɡui²²/`, `東 uung1 /ɵŋ³³/`, `土 hu2 /hu⁵⁵/`, `坐 to1 /tʰᵘɔ³³/`, `飲 ngim2 /ᵑɡim⁵⁵/`, `走 deu2 /teu⁵⁵/`, `足 duuk2 /tɵk̚⁵⁵/`, `中:1 zuung1 /t͡sɵŋ³³/`, `央 yang1 /jaŋ³³/`.
- **Why:** Taishanese is *not* mutually intelligible with Guangzhou Cantonese and these are textbook divergences: (i) MC voiced obstruents → **prenasalised voiced** initials (馬 *m-ba*, 魚/牛/耳 *ᵑɡ-*); (ii) **ŋ-/initial restored** on 人/魚/牛/日/月 where Guangzhou has *j-* (人 ngin not jɐn); (iii) the **-ung → -uung/-ɵŋ** vowel shift (東 ɵŋ, 中 t͡sɵŋ, 龍 lɵŋ, 木/目/肉 -ɵk̚); (iv) the **t- ~ d- for Cantonese ts-/tsʰ-** in 走 (deu), 左 (do), 坐 (to); (v) a completely different **tone grid** (33/55/21/22/32, not Guangzhou's 55/35/33/21/13/22). The IPA column in these cells is byte-identical to the `yue` Chao-letter values, proving it was copied from Standard Cantonese rather than transcribed. This is the single largest systematic fault in scope. Itemised as concrete edits in the EDITS block (applied below).

### 2. `yue_ts` — the ɬ- (lateral-fricative) hallmark is missing from s-initial cells

- **Current:** `四 si3 /si³³/`, `心 sam1 /sɐm˥˥/`, `西 sai1 /sɐi˥˥/`.
- **Expected:** `四 lhei1 /ɬei³³/`, `心 lhim1 /ɬim³³/`, `西 lhai1 /ɬai³³/`; but `手 siu2 /siu⁵⁵/` and `山 san1 /san³³/` keep plain s-.
- **Why:** Taishanese reflects a subset of MC *s-/sj-* as the voiceless lateral fricative **ɬ** ("lh"). The dataset already gets this right for `三 ɬaːm` and `十 ɬɪp̚`, making the omission on 四/心/西 an internal inconsistency. Not *every* s- becomes ɬ (手/山 keep plain s-), so this is applied per-character from the source, never as a blanket rule.

### 3. `yue_ts` — `三` and `十` (the two "correct" cells) still carry wrong tone/vowel

- **Current:** `三 lham3 /ɬaːm³³/`, `十 lhip32 /ɬɪp̚˧˨/`.
- **Expected:** `三 lham1 /ɬam³³/` (tone **1**, short `a`); `十` IPA tone-style normalised to superscript `³²`.
- **Why:** Even the two "correct" cells have defects: 三 is tone 1 (33) with short `ɬam` (the long vowel + "3" tone digit were carried over from Cantonese `saam1`); 十's IPA used Chao `˧˨` where every other yue_ts cell uses superscripts.

### 4. `yue_nn` (Nanning 南寧白話) — spurious `sl-`/`th-` consonant clusters that no Yue variety has

- **Current:** `三 thaam1`, `四 thei6`, `西 thai1`, `十 slap6`, `山 slaan1`, `手 slau2`, `心 slam1`.
- **Expected:** the standard-Cantonese-like Nanning forms — `三 saam1`, `四 sei3`, `西 sai1`, `十 sap6`, `山 saan1`, `手 sau2`, `心 sam1`.
- **Why:** 南寧白話 is a Yongxun-Yue (邕潯片) variety famously *close to Guangzhou* — plain /s/, no /θ/ and no /ɬ/, and **no** onset clusters (Cantonese phonotactics forbid clusters entirely). The `θ`/`ɬ`/`sl` values look transplanted (the ɬ is the **Taishanese** hallmark mis-filed under Nanning). Also 四 is coded tone **6** where Nanning has 陰去 (33). **Not** put in EDITS as hard edits because I cannot offline-source exact Nanning tones; recommend setting them equal to the `yue` standard forms. Also check `肉 juk6 /nok̚˨/` (j-/n- mismatch) and `犬 hiun3`.

### 5. Standard cluster `yue`/`yue_gz`/`yue_hk`/`yue_mo` — byte-identity is mostly CORRECT

- **Assessment:** **The identity is largely correct and should be kept** — Guangzhou, HK and Macau genuinely share the same phonemic forms for these 60 basic morphemes; inventing differences would be spurious. The *defensible* differences are narrow and **variable/sociolinguistic** (overlays, not corrections): HK 南 n→l 懶音 (`laam4`), 五/牛 ng-dropping. Macau ≈ HK; cloning is correct.
- **Why:** Explicitly certifying that the standard-cluster identity is **not** a defect — do not "fix" it by fabricating differences. No EDITS issued.

### 6. `yue_zs` (中山石岐話) — cloned from Standard Cantonese; this IS a defect

- **Current:** `yue_zs` is byte-identical to `yue_gz` on essentially all 60 chars.
- **Expected:** 石岐話 (Shekki) is a 香山 Yue variety with documented divergences from Guangzhou; at minimum it should not be a pure clone.
- **Why:** Unlike the genuine GZ≈HK≈Macau identity, 石岐話 being byte-identical to Guangzhou is **lazy cloning**. But I do **not** have 石岐話 字音 to per-character precision, so this is a **prose recommendation**: flag the whole `yue_zs` column for a Zhongshan-source pass. No EDITS (I will not invent forms).

### 7. `yue_dg` (東莞) — ng-initials on 日/月/魚 are CORRECT

- **Current:** `日 ngat6`, `月 ngyut6`, `魚 ngyu4`.
- **Assessment:** defensible — 東莞 (莞寶片) retains/restores ŋ- on these 日母/疑母 morphemes. Keep them. This is exactly the kind of *correct, sourced* inter-dialect difference the project wants (contrast Issue 6). No EDITS.

### 8. `z` [ts] vs `c` [tsʰ] aspiration contrast — CORRECT, not a defect

- **Current:** `左 zo2 /t͡sɔː˧˥/` (unaspirated) vs `坐 co5 /t͡sʰɔ˩˧/` (aspirated).
- **Why:** The owner's note that 左 "jo" is *perceived* as "cho" in HK is a real perceptual point but not a coding error. Cantonese has a genuine **phonemic** aspiration contrast: 左 /tsɔː/ (精母) vs 坐 /tsʰɔ/ (從母). Jyutping `z`/`c` correctly encode [ts]/[tsʰ]. English-speaker perception of unaspirated [ts] as "ch/j" is an L2 artifact. Scanned all z-/c- cells: no mis-coded aspiration. Certified correct.

### 9–11. (yue_ts IPA tone-notation normalisation to superscripts; 上/来 empty standard cells; yue_ts surface romanization-scheme decision)

- IPA tone-style fixes folded into the Issue-1 EDITS. 上/来 standard-cell gaps and the surface-scheme normalisation (yat1→yit2) are prose recommendations/owner decisions, not applied this round.

---

## EDITS (proposed — orchestrator applied serially, file read-only for worker)

The full structured EDITS list (104 `yue_ts` surface+ipa corrections, every `from` verified byte-for-byte against live data and every `to` verified against Wiktionary Taicheng) was returned as machine-readable JSON and applied by the orchestrator. See the Worker response for the applied set.

---

## Worker round-1 response (作業者round-1)

Verified every "Current" value verbatim against `HAN_DATA` by loading `hanmap_data.js` as a module. The reviewer's 104 `yue_ts` edits were returned as structured JSON; the orchestrator applied them serially to the single shared data file (no parallel clobbering), then re-loaded and confirmed.

**Issue 1 + 2 + 3 + 9 — `yue_ts` Standard-Cantonese contamination → APPLIED (104 edits).** All 104 `yue_ts` surface/IPA cells were replaced with the Wiktionary Taicheng Taishanese values. Confirmed in live data:
- ɬ lateral fricative: 三 `lham1`/`ɬam³³`, 四 `lhei1`/`ɬei³³`, 西 `lhai1`/`ɬai³³`, 心 `lhim1`/`ɬim³³`, 十 `/ɬɪp̚³²/` (Chao→superscript).
- Prenasalised voiced initials: 馬 `ma4`/`ᵐba²¹`, 人 `ngin3`/`ᵑɡin²²`, 魚 `ngui3`/`ᵑɡui²²`, 牛 `ᵑɡeu²²`, 鳥 `ⁿdiau²¹`, 南 `ⁿdam²²`, 木/目 `ᵐbɵk̚³²`.
- -ɵŋ/-ɵk vowel shift: 東 `ɵŋ³³`, 龍 `lɵŋ²²`, 中:1 `t͡sɵŋ³³`, 六 `lɵk̚³²`, 足 `tɵk̚⁵⁵`.
- Labialised vowels: 火 `fᵘɔ⁵⁵`, 左 `tᵘɔ⁵⁵`, 坐 `tʰᵘɔ³³`.
- All Chao tone-letters in yue_ts ipa replaced by superscript Taishanese tone digits.

**Issues 4, 6, 10, 11 — HELD (not applied).** Per the reviewer, these are prose-only:
- yue_nn (Nanning) sl-/th- clusters: recommended revert-to-standard NOT applied — no offline Nanning tone source to validate a replacement.
- yue_zs (Zhongshan/石岐話) lazy cloning: needs a dedicated 石岐話 source pass; not invented.
- 上/来 empty standard-cluster cells: coverage gap.
- yue_ts surface romanization-scheme normalisation: deferred pending owner decision.

**Issues 5, 7, 8 — certified correct (won't-fix).** GZ≈HK≈Macau identity; yue_dg ng-initials; z/c aspiration contrast (左/坐).

Net this round: 104 yue_ts edits applied; 4 items held as documented known-gaps; 3 items certified correct.

---

## Reviewer round-2 response (再評価 round-2)

Re-loaded `hanmap_data.js` into a fresh VM context and verified all 104 applied edits byte-for-byte against live `HAN_DATA[char].surface.yue_ts` / `.ipa.yue_ts`. **104/104 landed exactly (live value === `to`); 0 failures.**

**Taishanese phonology — ✓ ACCEPT (verified).** Every applied `yue_ts` cell now carries genuine 台山話 features:
- **ɬ lateral fricative**: 三 `lham1`/`ɬam³³`, 四 `lhei1`/`ɬei³³`, 十 `/ɬɪp̚³²/`, 西 `lhai1`/`ɬai³³`, 心 `lhim1`/`ɬim³³`. Surface `lh-` and IPA `ɬ` agree in every case (0 mismatches).
- **Prenasalised voiced initials**: 馬 `ᵐba²¹`, 貓 `ᵐbiu⁵⁵`, 目/木 `ᵐbɵk̚³²`, 聞 `ᵐbun²²`; 鳥 `ⁿdiau²¹`, 南 `ⁿdam²²`; 魚 `ᵑɡui²²`, 牛 `ᵑɡeu²²`, 人 `ᵑɡin²²`, 耳 `ᵑɡei⁵⁵`, 飲 `ᵑɡim⁵⁵`, 二 `ᵑɡei³²`, 日 `ᵑɡit̚³²`, 月 `ᵑɡut̚³²`, 肉 `ᵑɡɵk̚³²`.
- **-ɵŋ/-ɵk vowel shift**: 龍 `lɵŋ²²`, 東 `ɵŋ³³`, 中:1 `t͡sɵŋ³³`; 六 `lɵk̚³²`, 足 `tɵk̚⁵⁵`.
- **Labialized round vowels**: 火 `fᵘɔ⁵⁵`, 海 `hᵘɔi⁵⁵`, 左 `tᵘɔ⁵⁵`, 坐 `tʰᵘɔ³³`, 来 `lᵘɔi²²`.
- **Superscript tone digits** throughout. Spot-checks against Wiktionary 台山話 (三 ɬam, 四 ɬei, 馬 ᵐba, 魚 ᵑɡui, 火 fᵘɔ, 左 tᵘɔ) all match.

**Standard-Cantonese leftover scan — ✓ CLEAN.** Regex scan of all `yue_ts` ipa for Chao iconic letters `[˩˨˧˦˥]` returns **count: 0**. No `˩˧`/`˨˩`/`˧˥` survive.

**Surface↔IPA contradiction scan — ✓ CLEAN.** The only residual surface/IPA divergence is the **romanization-scheme** difference (e.g. 一 surface `yat1` vs ipa `jit̚⁵⁵`) — the deferred house-style item, NOT a phonological contradiction.

### Held / prose-only items — adjudication (documented known-gaps)

- **yue_nn (Nanning) sl-/th- clusters — △ KNOWN-GAP (verified unchanged).** Live `yue_nn` still carries the 7 illegitimate clusters; revert correctly NOT applied (no offline Nanning source). Documented for a future Nanning source pass.
- **yue_zs (Zhongshan/石岐話) — △ KNOWN-GAP.** Live `yue_zs` surface is 58/59 identical to Guangzhou. Needs a dedicated 石岐話 reference.
- **上/来 empty standard cells — △ KNOWN-GAP.**
- **yue_ts surface romanization scheme (yat1→yit2) — △ DEFERRED (owner decision).**
- **GZ≈HK≈Macau identity; z/c aspiration (左/坐); yue_dg ng-initials — ✓ RE-AFFIRMED won't-fix.**

### Regression note
No regressions. None of the 104 yue_ts edits disturbed any sibling Cantonese register.

### Scorecard

| Item | Verdict |
|---|---|
| 104 applied yue_ts edits (surface+ipa) | ✓ all landed (104/104) |
| ɬ lateral fricative pairing | ✓ fixed+verified |
| Prenasalized ᵐb/ⁿd/ᵑɡ initials | ✓ fixed+verified |
| -ɵŋ/-ɵk vowel shift | ✓ fixed+verified |
| Superscript tone digits (0 Chao remaining) | ✓ fixed+verified |
| Surface↔IPA contradictions in yue_ts | ✓ none remain |
| yue_nn spurious sl-/th- clusters | △ documented known-gap |
| yue_zs GZ clone (58/59 identical) | △ documented known-gap |
| 上/来 empty standard cells | △ documented coverage gap |
| yue_ts surface romanization scheme | △ deferred (owner decision) |
| GZ≈HK≈Macau identity / z-c aspiration / yue_dg ng- | ✓ accept won't-fix |

All 104 applied yue_ts (Taishanese) edits are fixed-and-verified with authentic prenasalized initials, ɬ lateral, -ɵŋ/-ɵk shift, and superscript tones; zero surface↔IPA contradictions and zero Standard-Cantonese leftovers remain. The remaining prose-only items are recorded as documented known-gaps for a future Nanning / Zhongshan source pass.

**File status: CLOSED** — all applied fixes verified; Nanning/Zhongshan/上来/surface-scheme items recorded as documented known-gaps for a future source pass.
