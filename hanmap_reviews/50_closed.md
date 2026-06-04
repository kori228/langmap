# Hanmap data review #50 — Hakka dialectology round-2 (hak_cn, hak_hl, hak_mz, hak_tw)

## Reviewer self-introduction (ペルソナ自己紹介)

I am the same Hakka-dialectology reviewer as Post #11, returning for a focused round-2 sweep. My toolkit remains Hashimoto's *The Hakka Dialect* (1973) for the canonical Meixian six-tone system (陰平 44, 陽平 11, 上 31, 去 53, 陰入 1, 陽入 5), David Prager Branner's *Problems in Comparative Chinese Dialectology* (2000) for the Southern-Chinese stratal model, the **客家語拼音方案 (Pinfa)** and Taiwan MOE **臺灣客家語拼音方案** for romanisation norms, plus the MOE Hailu canon: 陰平 53, 陽平 55, 上 24, 陰去 11, 陽去 33, 陰入 5, 陽入 2. I loaded `HAN_DATA` from `hanmap_data.js` and dumped every Hakka cell across all 61 character keys (59 base + the 中:1/中:2 and 行:1/行:2 splits) before drafting a single line below.

**Reviewer perspective:** Post #11 (closed) caught the most flagrant defects — illegal word-initial /z/, superscript-digit tone leaks, Hanyu-Pinyin `x/q` contamination on `hak_tw` surfaces, ring-above diacritic typos in `hak_hl`, missing 人/北 cells, the 中:2 `⁵⁵`→`˥˥` notation leak, and the 山/心/天/東 陰平 Sixian→Meixian leak in `hak_cn`. Issue #11/#16 was the only deferred item: the cn↔mz "two labels for one Meixian dialect" drift on 28/61 chars, accepted-as-held.

This round-2 takes a step back and audits the **whole tone-system geometry** of each register against its own internal claim. The pattern that jumps out is not a few bad cells but **systematic category-leak across registers**: `hak_hl` advertises itself as Hailu but uses Sixian tone values on the majority of 陰平 / 上 / 陰去 / 陽去 syllables; `hak_tw` is internally coherent as Sixian for the most part but has at least one tone-number/category mismatch (五 ng2 vs 上聲); `hak_mz` has stray 陰平 values on 上聲 nouns (馬/鳥/坐); and 足 has had `hak_cn` correctly mark it as 陰入 (˨) while the three other registers all give it 陽入 (˥), the opposite of the 中:1 problem fixed in round-1.

**Coverage:** all 4 Hakka registers (`hak_cn`, `hak_hl`, `hak_mz`, `hak_tw`); all 61 character keys re-read from `hanmap_data.js`; cross-checked against the Hashimoto, Branner, Pinfa, and MOE inventories. Spot-audited tone-category groupings (陰平, 陽平, 上, 陰去, 陽去, 陰入, 陽入) for internal consistency within each register.

**Notation conventions reaffirmed:** `hak_cn`/`hak_hl`/`hak_mz` surfaces use PFS/Pinfa-style diacritics (^ = 陰平, ´ = 上, ` = 去, ´ below = 陽入, unmarked = 陽平); `hak_tw` uses MOE tone-numbers 1–6 with `b/d/g/j/z/c/s` for voiceless `/p t k tɕ ts tsʰ s/`. IPA tones are Chao tone-letters; checked syllables carry ◌̚. The apical vowel /ɨ/ is written `ṳ` in PFS (`hak_cn`/`hak_mz`), `ii` in MOE Pinfa (`hak_tw`), and replaced by /i/ after retroflex /ʃ/ in `hak_hl` (Hailu has the retroflex series 知ʈʂ/章ʈʂ).

---

## Issues found

### 1. `hak_hl` register-wide — Hailu tone values systematically replaced by Sixian values
- Current: most 陰平 syllables in `hak_hl` are `˨˦` (=Sixian 陰平), not the Hailu `˥˧`. Sample: 山 `san˨˦`, 心 `sim˨˦`, 天 `tʰien˨˦`, 東 `tuŋ˨˦`, 西 `si˨˦`, 中:1 `tɕuŋ˨˦`. Only 三 `sam˥˧` carries the correct Hailu value (and 央 `joŋ˥˥` is wrong in a different direction — see #4).
- Expected: every Hailu 陰平 should be `˥˧`. E.g. 山 `san˥˧`, 心 `sim˥˧`, 天 `tʰien˥˧`, 東 `tuŋ˥˧`, 西 `si˥˧`, 中:1 `tɕuŋ˥˧`.
- Why: Hailu's defining contrast with Sixian is precisely the 陰平/陽平 inversion — Hailu 陰平 is high-falling 53 (almost the same shape as Sixian 去 55), Hailu 陽平 is high-level 55. Hashimoto (1973) and MOE臺灣客家語拼音方案 both give 53 for Hailu 陰平. The current `hak_hl` cells effectively spell *Sixian Hakka*, not Hailu, for most of the 陰平 inventory. The single correct token (三 `sam˥˧`) proves the convention is known to the data — it just wasn't applied consistently.

### 2. `hak_hl` register-wide — 上聲 written as `˧˩` (Sixian) instead of `˨˦` (Hailu)
- Current: 上聲 cells in `hak_hl` are mostly `˧˩`: 水 `sui˧˩`, 火 `fo˧˩`, 土 `tʰu˧˩`, 海 `hoi˧˩`, 虎 `fu˧˩`, 犬 `kʰien˧˩`, 馬 `ma˧˩`, 鳥 `tiau˧˩`, 手 `ʃiu˧˩`, 耳 `ŋi˧˩`, 口 `kʰieu˧˩`, 左 `tso˧˩`, 飲 `jim˧˩`, 走 `tseu˧˩`. Only 五 `ŋ̩˨˦` and 九 `kiu˨˦` carry the Hailu value.
- Expected: every 上聲 syllable in `hak_hl` should be `˨˦`.
- Why: Hailu 上聲 = 24 (low-rising) in all standard descriptions (MOE; Hashimoto 1973). The PFS/Pinfa surface mark is the same acute (´) for both Sixian and Hailu 上聲, so the romanised surfaces (e.g. `súi`, `fó`, `khién`) are tone-category-correct — but the IPA gives the wrong contour. The fact that 五 and 九 already use `˨˦` makes this a within-register inconsistency, not just a convention disagreement.

### 3. `hak_hl` 陽平 — half the items use Hailu `˥˥`, half use Sixian `˨˦`
- Current: 来 `loi˥˥`, 行:1 `haŋ˥˥` (correct Hailu 陽平), but 魚 `ŋ˨˦`, 牛 `ŋiu˨˦`, 羊 `joŋ˨˦`, 龍 `liuŋ˨˦`, 人 `ŋin˨˦`, 頭 `tʰeu˨˦`, 南 `nam˨˦`, 聞 `vun˨˦` (Sixian 陰平 value 24 — wrong category and wrong contour).
- Expected: all Hailu 陽平 should be `˥˥`; e.g. 魚 `ŋ˥˥`, 牛 `ŋiu˥˥`, 人 `ŋin˥˥`, 来 (already correct), 行:1 (already correct).
- Why: Hailu 陽平 = high-level 55 (this is the famous Hailu/Sixian inversion). The `˨˦` cells effectively assign Sixian's 陰平 value to Hailu 陽平 syllables — a double error (both category and contour). The two correct cells (来, 行:1) confirm the convention; the other 8 leaked.

### 4. `hak_hl` 央 `joŋ˥˥` — 陰平 syllable given the 陽平 value
- Current: 央 surface `yông` (circumflex = 陰平 in PFS), IPA `joŋ˥˥`.
- Expected: `joŋ˥˧` (Hailu 陰平).
- Why: 央 is 影母 平聲 = 陰平. The surface correctly carries the circumflex (陰平). But `˥˥` is the Hailu 陽平 value, so this cell mis-assigns 央 to 陽平. Compare same-register 三 `sam˥˧` (correctly Hailu 陰平); 央 should pattern with 三, not with 来 `loi˥˥` (which is 陽平).

### 5. `hak_hl` 陰去 (二/上/下/中:2/四/地/右/去/見/貓) — three different wrong values used
- Current: 上 `soŋ˥˥`, 下 `ha˥˥`, 中:2 `tɕuŋ˥˥`, 四 `si˥˥`, 地 `tʰi˥˥`, 右 `ju˥˥`, 貓 `meu˨˦` — all use Hailu 陽平 value `˥˥` or Sixian 陰平 `˨˦`. Then 二 `ŋi˧˧`, 去 `hi˧˧`, 見 `kien˧˧` use `˧˧` (Hailu 陽去).
- Expected: 陰去 in Hailu = `˩˩`. e.g. 上 `soŋ˩˩`, 下 `ha˩˩`, 中:2 `tɕuŋ˩˩`, 四 `si˩˩`, 地 `tʰi˩˩`, 右 `ju˩˩`, 去 `hi˩˩`, 見 `kien˩˩`, 貓 `meu˩˩`.
- Why: Hailu inverts both 平 and 去 with respect to Sixian — Hailu 陰去 = 11, 陽去 = 33. The `˥˥` (Hailu 陽平) and `˨˦` (Sixian 陰平) cells are simply wrong category. Note: 二 is 日母去聲 = 陽去 → `˧˧` is correct (kudos), so 二 stays. But 去 and 見 are 溪母去/見母去 = **陰去** → `˩˩`, not `˧˧`. So the three `˧˧` cells need splitting: 二 stays, 去/見 move to `˩˩`.

### 6. `hak_hl` 陽去 (上, 下, 中:2 if treated 知母去, 地, 右, 行:2) — should be `˧˧`, not `˥˥`
- Current: 上 `soŋ˥˥`, 下 `ha˥˥`, 地 `tʰi˥˥`, 右 `ju˥˥`, 行:2 `hoŋ˥˥`.
- Expected: `˧˧` (Hailu 陽去). E.g. 上 `soŋ˧˧`, 下 `ha˧˧`, 地 `tʰi˧˧`, 右 `ju˧˧`, 行:2 `hoŋ˧˧`.
- Why: 上 (禪母上 → 濁上歸去), 下 (匣母去), 地 (定母去), 右 (云母去), 行:2 (匣母去) are all in Hakka 陽去 (voiced-onset historical class). Hailu 陽去 = 33. The `˥˥` cells share the same defect as #5 (using Hailu 陽平 value for 去 syllables). The reviewer notes this overlaps #5 — once a register decides whether 上/下/地/右/行:2 are 陰去 or 陽去 (the literature varies), the cells need to pick `˩˩` or `˧˧` consistently. Currently they pick the third, **wrong** value `˥˥` for all of them. (Compare correct `hak_mz` `˥˧` which is the Meixian 去 contour applied uniformly.)

### 7. `hak_tw` 五 `ng2` / `ŋ̩˩˩` — 上聲 character given 陽平 tone-number
- Current: 五 surface `ng2`, IPA `ŋ̩˩˩`.
- Expected: surface `ng3`, IPA `ŋ̩˧˩`.
- Why: Sixian tones are 1=陰平 24, 2=陽平 11, 3=上 31, 4=去 55, 5=陰入 2, 6=陽入 5. 五 is 疑母上聲, so it must be tone 3 in Sixian. The surface `ng2` claims 陽平, and the IPA `˩˩` matches 陽平 — internally consistent within the cell, but **both wrong** vs the character's tone class. Compare correct sibling registers: `hak_cn` ńg/ŋ̩˧˩, `hak_hl` ńg/ŋ̩˨˦ (with the correct surface acute = 上聲), `hak_mz` ńg/ŋ̍˧˩. Sixian standard sources (MOE Hakka dictionary) give 五 as `ng3` (tone 3) unambiguously.

### 8. 足 — `hak_hl`, `hak_mz`, `hak_tw` give 陽入 (`˥`/tone-6) for what is 陰入 in `hak_cn`
- Current: `hak_cn` chiuk / `tɕiuk̚˨` (= 陰入 in cn's 2-system), but `hak_hl` chiuk / `tɕiuk̚˥`, `hak_mz` chiuk / `tɕiuk̚˥`, `hak_tw` `jiug6` / `tɕiuk̚˥` (all 陽入 high).
- Expected: 足 is 精母 入聲 = **陰入** (voiceless unaspirated initial → upper register). E.g. `hak_hl` `tɕiuk̚˨`, `hak_mz` `tɕiuk̚˩`, `hak_tw` surface `jiug5` and IPA `tɕiuk̚˨`.
- Why: 足 (將玉切, 精母) is a textbook 陰入 syllable in every Hakka description; the same-row neighbours 七 (清母 → 陰入) and 八 (幫母 → 陰入) are correctly low in all four registers (`˨`/`˩`). Only `hak_cn` 足 is correct; the other three registers all have 足 as 陽入, which contradicts both the historical class and the within-register 陰入 pattern (七/八/血/北). NB: this is the symmetric counterpart to round-1's 六 fix (where `hak_cn` was the *wrong* one and three siblings were right).

### 9. `hak_mz` 馬, 鳥 — 上聲 nouns mis-tagged as 陰平 (`˦˦`)
- Current: 馬 `má` / `ma˦˦`, 鳥 `tiáu` / `tiau˦˦`.
- Expected: 馬 `ma˧˩`, 鳥 `tiau˧˩`.
- Why: 馬 (明母上) and 鳥 (端母上) are 上聲. Meixian 上聲 = 31 (˧˩) per Hashimoto (1973). The surfaces correctly carry the acute (´ = 上聲 in PFS): `má`, `tiáu`. The other three registers all give `˧˩` for both: `hak_cn` `ma˧˩` / `tiau˧˩`, `hak_hl` `ma˧˩` / `tiau˧˩`, `hak_tw` `ma3` / `diau3` (= `˧˩`). The `˦˦` (Meixian 陰平) value is impossible for an unambiguously 上聲 word and is internally contradicted by same-register 馬/鳥 of class 上. Compare correct same-register `hak_mz` 上聲 nouns: 五 `ŋ̍˧˩`, 九 `kiu˧˩`, 水 `sui˧˩`, 虎 `fu˧˩` — all `˧˩` as expected.

### 10. `hak_mz` 坐 `tsʰo˦˦` — 上聲 given 陰平 value
- Current: 坐 surface `chho`, IPA `tsʰo˦˦`.
- Expected: `tsʰo˧˩` (Meixian 上) or `tsʰo˥˧` (if treated 陽去 via 濁上歸去).
- Why: 坐 is 從母上 (濁上). In Meixian most 濁上 either stay 上 (˧˩) or move to 去 (˥˧). `˦˦` (陰平) is impossible for a historical 上 syllable. The surface `chho` has no diacritic — which in PFS marks 陽平, also inconsistent with `˦˦`. Compare same-character `hak_hl` `tsʰo˩˩` and `hak_tw` `co2/tsʰo˩˩` (both treat 坐 as 陽平 via the 從母 voiced-onset → 陽 series); `hak_cn` `tsʰo˨˦` (Sixian-leak 陽平 value). All four registers disagree on 坐 — this is a separate sub-issue (see #14), but `hak_mz`'s `˦˦` is uniquely wrong because 坐 cannot be 陰平 in any analysis.

### 11. `hak_mz` 行:2 `hong` / `hoŋ˩˩` — surface missing 去聲 grave, IPA wrong category
- Current: 行:2 surface `hong` (no diacritic, = 陽平 in PFS), IPA `hoŋ˩˩` (Meixian 陽平).
- Expected: surface `hòng` (grave = 去), IPA `hoŋ˥˧` (Meixian 去).
- Why: 行:2 is the 去聲 reading "conduct, deeds" (匣母去). It must be 去聲, not 陽平. The correct sibling `hak_cn` `hòng` / `hoŋ˥˥` shows the grave-marked surface and 去聲 contour. `hak_mz`'s `hong` / `hoŋ˩˩` mis-assigns it to 陽平 (which is what 行:1 "walk" is). Same defect carries over to `hak_tw` `hong2/hoŋ˩˩` — both `hong` surface and tone 2 are 陽平 markings, but 行:2 is 去聲 → should be `hong4/hoŋ˥˥` in `hak_tw`. (`hak_hl` `hong/hoŋ˥˥` has the right tone for Hailu 陽平 — but per #6 this is the wrong category for 陽去; should be `hoŋ˧˧`. Surface still needs the grave.)

### 12. `hak_mz` 四 `sɿ˥˧` — apical /ɿ/ vowel inconsistent with cn/hl/tw `si`
- Current: `hak_mz` 四 surface `sì`, IPA `sɿ˥˧` (only Meixian-labelled cell that uses /ɿ/ for 四).
- Expected: align with sibling registers: either all four use `si` (plain /i/) for 四, or `hak_mz` keeps `sɿ` and `hak_cn` also moves to `sɿ` for the same Meixian/Meizhou speech.
- Why: 四 is 心母去聲. In Hakka the vowel of 四 is often the apical /ɿ/ after dental /s/ in northern descriptions, but PFS conventionally writes it as `i` (the surface `sì` makes no /ɿ/ vs /i/ distinction). The within-file convention is `si` in `hak_cn`/`hak_hl`/`hak_tw` and `sɿ` only in `hak_mz`. Given that `hak_cn` and `hak_mz` are supposedly the same Meixian/Meizhou speech (per round-1 #16), they should agree on this phonetic detail. The mismatch is also the only `/ɿ/` outside the 十/食 (`ɨ`) set in the file.

### 13. `hak_cn` 五 `ŋ̩˧˩` vs `hak_mz` 五 `ŋ̍˧˩` — different combining marks (`̩` U+0329 vs `̍` U+030D)
- Current: `hak_cn` 五 IPA uses syllabicity mark U+0329 `ŋ̩`; `hak_mz` uses U+030D `ŋ̍` (high vertical line).
- Expected: pick one. U+0329 (combining vertical line below) is IPA-standard for syllabicity; U+0330D is non-standard for syllabicity (it's the IPA stress/syllable boundary mark above).
- Why: Both characters render visually similar but encode different IPA semantics. The file uses U+0329 elsewhere (`hak_hl` `ŋ̩˨˦`, `hak_tw` `ŋ̩˩˩`); only `hak_mz` uses U+030D. Per the project rule that registers in the same family should be coded consistently, the `hak_mz` cell should use U+0329 to match `hak_cn`/`hak_hl`/`hak_tw`. (This is a notational consistency issue, parallel to round-1 #3's `⁵⁵`→`˥˥`.)

### 14. 坐 — all four registers disagree on tone category (陽平 vs 上 vs 陽去 vs 陰平)
- Current: `hak_cn` `tsʰo˨˦` (cn 陽平 24-leak), `hak_hl` `tsʰo˩˩` (= 陰去 in hl or 陽平 in Sixian), `hak_mz` `tsʰo˦˦` (陰平 — impossible), `hak_tw` `co2/tsʰo˩˩` (Sixian 陽平 11).
- Expected: pick one of the two defensible analyses and apply it across all four — either (a) literary/standard 坐 = 上聲 (Meixian ˧˩, Hailu ˨˦, Sixian tone 3 `co3` / `tsʰo˧˩`), or (b) colloquial 坐 = 陽平 via 從母 voiced-onset (Meixian/Sixian ˩˩ or ˨˦, surface unmarked). The widely-cited *literary* form is 上聲. The MOE Sixian dictionary gives both `co1` (陽平) and `co3` (上聲); the more common reading is `co1`.
- Why: As written, 坐 spans four different tone categories across four registers that should differ only on contour values, not on category. The `hak_mz` 陰平 value is impossible (#10); the others are at least defensible but not coherent. This is a separate issue from #10's "可能性" question because the resolution requires picking *which* tone category 坐 carries in the file's convention — a small system-level decision.

### 15. `hak_tw` 中:1 surface `zung1` — Pinfa `z` for /tʃ/ is non-standard in MOE Sixian
- Current: 中:1 surface `zung1`, IPA `tʃuŋ˨˦`. Same with 中:2 `zung3` / `tʃuŋ˥˥`.
- Expected: surface `zhung1` (and `zhung3`) if the file's MOE convention includes the retroflex series 知 column, or stick with the plain `z` BUT then change IPA to `ts` (plain dental). In MOE Sixian, `z` = /ts/ (dental) — there is no retroflex /tʃ/ in mainstream Sixian, the 知/章 columns merged to dental /ts/.
- Why: MOE Hakka Pinfa uses `zh/ch/sh` for retroflex /tʂ tʂʰ ʂ/ only when retroflex is phonemic (mostly Hailu/Dapu). Sixian 中 is /tsuŋ/ (no retroflex) — so the IPA should be `tsuŋ˨˦`, not `tʃuŋ˨˦`. If the file wants to keep `tʃ` as the Sixian-Hakka 知章 reflex (some analyses, e.g. Hashimoto retains /tʃ/ as a Hakka archaism), the surface should be `zhung` to match. As written, surface (Sixian dental) and IPA (Hakka archaic retroflex) disagree. Sibling row `hak_hl` `zhûng/tɕuŋ˨˦` at least makes the alveolopalatal /tɕ/ consistent with the `zh` surface; `hak_tw` mixes the two systems.

### 16. `hak_cn` vs `hak_mz` literary tone-contour split — `hak_cn` mixes Meixian and Sixian
- Current: `hak_cn` uses Sixian-style values for **陽平** (˨˦ across 龍/魚/牛/羊/貓/頭/南/行:1/来/聞/坐 — 11 chars) and Sixian-style ˥˥ for **去** (二/上/下/中:2/右/行:2/去/見/地/四). `hak_mz` consistently uses Meixian-canonical values: 陽平 ˩˩, 去 ˥˧.
- Expected: per round-1 #16, the team-level decision is whether `hak_cn` denotes Meixian-standard (= `hak_mz`, canonical Meixian) or a "mainland Hakka mix" (some other convention). The current `hak_cn` is neither: it picks Sixian values for 陽平 and 去 but Meixian values for 陰平 (˦˦, after round-1's #14 fix). This is provably hybrid — no single attested Hakka lect uses Meixian 陰平 + Sixian 陽平 + Sixian 去.
- Why: This is a re-instance of round-1 #16, kept open here because the round-1 hold note explicitly invited a future sanctioned pass. The provable local errors that sat under it (#4, #14 in round-1) were fixed individually; the system-level convention question remains. Recommend the team either (a) collapse `hak_cn` onto canonical Meixian (= `hak_mz` letterset) and merge the two as the same Meixian/Meizhou speech, or (b) document `hak_cn` as a distinct lect (Mainland Hakka pinyin / PKBlue?) with an explicitly documented hybrid tone-set, and use `hak_mz` as the Meixian/Meizhou canonical.

### 17. Surface tone-marking gap: `hak_hl`/`hak_mz`/`hak_tw` 行:2 lacks the 去聲 mark
- Current: 行:2 surfaces — `hak_cn` `hòng` (grave ✓), `hak_hl` `hong` (no mark), `hak_mz` `hong` (no mark), `hak_tw` `hong2` (tone 2 = 陽平).
- Expected: All four should mark 去聲. `hak_hl` `hòng`, `hak_mz` `hòng`, `hak_tw` `hong4`.
- Why: 行:2 is unambiguously 去聲 (matches the `hak_cn` cell that already marks it). Three registers all spell it as if 陽平, paralleling 行:1. The surface convention requires a 去聲 mark when the character is 去; the IPA-side defects are covered in #11, but the surfaces also need the grave / tone-4 mark.

### 18. `hak_cn` 天 IPA `tʰiɛn˦˦` uses /ɛ/ where siblings use /e/
- Current: `hak_cn` 天 `tʰiɛn˦˦` (open-mid /ɛ/), `hak_hl` 天 `tʰien˨˦`, `hak_mz` 天 `tʰien˦˦`, `hak_tw` 天 `tʰiɛn˨˦`.
- Expected: pick one — either all four use /e/ (close-mid, the more common transcription in Pinfa) or all four use /ɛ/.
- Why: Two registers use /ɛ/, two use /e/, for the same Hakka rhyme /-ien/. This is a within-file phonetic inconsistency. Cross-character check: 犬 uses `kʰien` in all four registers (close-mid /e/), 見 uses `kien` in all four (close-mid /e/), 口 uses `kʰieu` in three registers + `kʰeu` in `hak_mz` (see #19). So `e` is the dominant convention; 天's `ɛ` is the outlier and should be normalised to `e`.

### 19. `hak_mz` 口 `kʰeu˧˩` — missing /-i-/ medial vs all three sibling registers
- Current: `hak_mz` 口 surface `khiéu`, IPA `kʰeu˧˩` (no /i/ medial in IPA).
- Expected: `kʰieu˧˩` (with /i/ medial, matching surface `khiéu` and matching sibling registers).
- Why: 口 (溪母上) in PFS surface is uniformly `khiéu` (with /i/ medial in the spelling). The other three registers give IPA `kʰieu˧˩` with the /i/ glide. `hak_mz` 口 surface still has the `i` (`khiéu`) but the IPA dropped it — a surface↔IPA mismatch within the same cell. Either the /i/ is present (correct, matches surface + siblings) or it isn't (then the surface should be `khéu`). The simpler fix is `kʰieu`.

### 20. `hak_tw` 飲 surface `yim3` — uses `y` where MOE Pinfa uses `i`
- Current: `hak_tw` 飲 surface `yim3`, IPA `jim˧˩`. Compare `hak_tw` 央 surface `iong1` (uses `i`), 羊 `iong2` (uses `i`), 一 `id5` (uses `i`), 右 `iu4` (uses `i`).
- Expected: `im3` (no glide letter) or `yim3`-style only if the file's MOE convention explicitly uses `y-` before high front vowels. Given that the `hak_tw` row uses `i-` for every other glide-initial syllable (一, 羊, 央, 右), 飲 should be `im3` to match.
- Why: MOE 臺灣客家語拼音方案 writes the palatal glide as `i` before a vowel, not `y`. The single `y` in `yim3` is a PFS/Pinfa leak (compare `hak_cn`/`hak_hl`/`hak_mz` `yím` which is correct PFS). Within `hak_tw`'s own row, `y` appears only on 飲; every other glide-initial uses `i`. Standalone consistency fix; same defect as round-1 #9/#10/#11 (Pinyin/PFS contamination on `hak_tw` surfaces), but it slipped past round-1's sweep because it only affects one cell.

### 21. `hak_hl` 中:1/中:2 IPA `tɕuŋ` vs `hak_cn`/`hak_mz` `tʃuŋ` — Hailu retroflex vs Meixian alveolopalatal
- Current: 中:1 `hak_hl` `zhûng/tɕuŋ˨˦`, 中:2 `hak_hl` `zhung/tɕuŋ˥˥`. Other registers use `tʃ`.
- Expected: For Hailu the 知/章 initials should be **retroflex** /tʂ/, not alveolopalatal /tɕ/. So `zhûng/tʂuŋ˥˧` (also with corrected 陰平 per #1), `zhung/tʂuŋ˩˩` (also with corrected 陰去 per #5).
- Why: Hailu is the only Sixian-Hailu pair where retroflex /tʂ tʂʰ ʂ/ is phonemic (the very feature that distinguishes Hailu's `zh/ch/sh` series from Sixian's plain `z/c/s`). MOE Hailu transcription uses /tʂ/. `tɕ` is the alveolopalatal — appropriate for /tɕiuk/ before /i/ (足) but not for /tʂuŋ/ before /u/. Compare `hak_hl` 手 `shiú/ʃiu˧˩` and 食 `shi̍t/ʃit̚˥` — these use /ʃ/ (post-alveolar, close to /ʂ/), which is closer to right. The 中 cells should similarly use /tʂ/ (or at least /tʃ/ to match `hak_hl` 手 and the historical Hashimoto transcription), not /tɕ/.

### 22. `hak_tw` 中:1/中:2 IPA `tʃuŋ` — Sixian should be dental /ts/, not post-alveolar /tʃ/
- Current: `hak_tw` 中:1 `zung1/tʃuŋ˨˦`, 中:2 `zung3/tʃuŋ˥˥`.
- Expected: `zung1/tsuŋ˨˦`, `zung3/tsuŋ˥˥` (Sixian merged 知章 to dental /ts/, MOE convention writes `z`).
- Why: This is the deeper version of #15. The surface `z` in MOE Sixian Pinfa = /ts/ (dental, no retroflex), but the IPA `tʃ` is post-alveolar — inconsistent. Round-1 fixed the illegal /z/ in this same cell by writing `tʃ`, but that import value came from `hak_cn` (where the historical analysis retains /tʃ/). For `hak_tw` specifically, the standard MOE transcription is /ts/. Either change the IPA to `tsuŋ` (match Sixian standard) or change the surface to `zhung` (acknowledge a retroflex/post-alveolar reading — but this is non-MOE).

---

## Summary of systematic issues

1. **Hailu register-wide tone-system leak** (#1, #2, #3, #5, #6) — `hak_hl` advertises itself as Hailu but uses Sixian tone values on the majority of 陰平 / 上 / 陽平 / 陰去 / 陽去 syllables. The Hailu values are present only sporadically (三, 五, 九, 来, 行:1, 二). This is the biggest finding of the round: roughly 30+ of 61 `hak_hl` cells need contour fixes to match the Hailu canon.
2. **Cross-register category-letter errors** — 足 in 3 of 4 registers (#8), 馬/鳥/坐 in `hak_mz` (#9, #10), 五 in `hak_tw` (#7), 行:2 in three registers (#11, #17).
3. **Surface↔IPA mismatches** — 口 in `hak_mz` (#19), 央/天 vowel split in `hak_cn` vs siblings (#18), 中:1/中:2 retroflex/dental confusion in `hak_hl`/`hak_tw` (#21, #22).
4. **Romanisation contamination on `hak_tw`** — `yim3` instead of `im3` for 飲 (#20), continuing the round-1 #9/#10/#11 pattern.
5. **Apical-vowel convention drift** — `hak_mz` 四 uses /ɿ/ where `hak_cn` uses /i/ for the same dialect-pair (#12); `hak_mz` syllabic ŋ uses non-standard U+030D (#13).
6. **System-level cn↔mz convention question** (#16, carryover from round-1 #11/#16) — `hak_cn` is provably hybrid Meixian-陰平 + Sixian-陽平/去; awaiting sanctioned normalization pass.
7. **Notation glitches** — non-standard syllabicity mark (#13).

The Hailu register is the most heavily affected; it would benefit from a single tone-table-driven normalization pass (Hailu 陰平 53 / 陽平 55 / 上 24 / 陰去 11 / 陽去 33 / 陰入 5 / 陽入 2) rather than per-cell fixes.

---

**File path:** `/home/jounlai/langmap/hanmap_reviews/50_open.md`
**Finding count:** 22


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 58
- **policy/skip**: 7
- **headline**: hak_hl Hailu tone 完全復元 ×41 (陰平 ˨˦→˥˧, 上聲 ˧˩→˨˦, 陽平 ˨˦→˥˥, 陰去/陽去), hak_mz 8, hak_tw 9 (五 ng2→ng3, 中:1/2 dental, 飲 im3, 足 陰入, 行:2 去聲)
- **JSON path**: /tmp/hm_edits_50.json
