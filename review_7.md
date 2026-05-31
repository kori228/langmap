# Hanmap data review #7 — Wu Chinese dialectology specialist

## Reviewer self-introduction (ペルソナ自己紹介)

吳語方言学を専門とする研究者として書いている。吳語の特徴的体系 — 中古音由来の三項対立（無声無気/無声有気/有声）の初頭子音保持、それに対応する高低レジスター二分割による調系（Chao 調値で 4-tone × 2-register 系統）、入聲のグロタル止音 -ʔ 保持 — を主要な評価軸とする。一次資料は『上海話大詞典』(吴連生主編，上海辭書出版社 2008)、『蘇州方言詞典』(葉祥苓 1993)、『温州方言詞典』(游汝杰 1998)、『杭州方言詞典』(鮑士傑 1998)。理論文献は錢乃榮『上海方言』(上海大学出版社 2007)、Norman (1988) Chinese 第8章、Ballard (1969) "Phonological History of Wu"、You Rujie 游汝杰『漢語方言學導論』。蘇州方言を最も保守的なベースライン、上海方言を merger が進んだ実用基準、温州方言（甌語）を最も革新的な辺境として三者を比較しながら、本データを検証する。

**Reviewer perspective:** 吳語 voiced-initial retention, register-tone split, Suzhou/Wenzhou divergence

---

## Issues found

### 1. 日 — wuu / wuu_sz / wuu_hz / wuu_nb / wuu_jx — missing entries (5 of 7 dialects)

- Current: `N/A` in all five nodes; only wuu_jh and wuu_wz are populated
- Expected: wuu `niq¹²` / `ɲiʔ¹²` (陽入 T8, voiced 日母); wuu_sz `niq²³` / `ɲiʔ²³`; wuu_hz `niq²¹³` / `niʔ²¹³`; wuu_nb `niq²¹³` / `ɲiʔ²¹³`; wuu_jx `niq²¹³` / `ɲiʔ²¹³` (per 上海話大詞典 and 蘇州方言詞典)
- Why: 日 (MC 日母 ɲ voiced, 陽入聲) is among the most basic vocabulary items in any dialectal survey. Wu's 3-way initial contrast is specifically demonstrated by words with 日母. The gapped five nodes cannot be reviewed for register correctness while empty.

---

### 2. 月 — wuu / wuu_sz / wuu_hz / wuu_nb / wuu_jx — missing entries (5 of 7 dialects)

- Current: `N/A` in all five nodes; only wuu_jh `hhyuoq²¹²`/`ŋyəʔ²¹²` and wuu_wz `hhy²¹³`/`ɦy²¹³`
- Expected: wuu `hhyuoq¹²` / `ŋyəʔ¹²` (陽入 T8, voiced 疑母); analogous low-register 入聲 forms for the remaining four nodes
- Why: 月 (MC 疑母 voiced, 陽入聲) should show a voiced initial ŋ/ɦ and T8 陽入 in all mainstream Wu dialects. The gap deprives the data of the only 疑母+入聲 exemplar visible to a cross-dialect comparison.

---

### 3. 食 — wuu / wuu_sz / wuu_hz / wuu_nb / wuu_jx — missing entries (5 of 7 dialects)

- Current: `N/A` in all five nodes; only wuu_jh `zeq²¹²`/`zəʔ²¹²` and wuu_wz `zai²¹²`/`zai²¹²`
- Expected: wuu `zeq¹²`/`zəʔ¹²` (陽入 T8, voiced 禪母); analogous forms for the other four nodes
- Why: 食 (MC 禪母 dʑ voiced, 陽入聲) is the standard test case for voiced-initial 入聲 in Wu. Its absence from the five primary nodes means Wu's defining 陽入/陰入 register split has no 禪母 exemplar for those varieties.

---

### 4. 人 — wuu — missing entry (general Shanghainese)

- Current: `N/A` / `N/A`
- Expected: `nyin²³` / `ɲin²³` (陽平 T2, voiced 日母; per 錢乃榮 上海話大詞典)
- Why: 人 is among the highest-frequency vocabulary items. All sub-nodes carry data; its absence from the wuu node specifically leaves a gap in the most-referenced variety.

---

### 5. 目 — wuu — missing entry (general Shanghainese)

- Current: `N/A` / `N/A`
- Expected: `moq¹²` / `moʔ¹²` (陽入 T8, voiced 明母)
- Why: 目 (MC 明母 voiced, 陽入聲) should appear in the wuu node. wuu_sz already has `moq²³`/`moʔ²³`; the Shanghai entry is simply absent.

---

### 6. 血 — wuu — missing entry (general Shanghainese)

- Current: `N/A` / `N/A`
- Expected: `xyuoq⁵⁵` / `ɕyəʔ⁵⁵` (陰入 T7, voiceless 曉母)
- Why: 血 (MC 曉母 voiceless, 陰入聲) is populated for all six sub-nodes but absent from wuu. Its absence removes the key 曉母 陰入 counterpart that contrasts with voiced-initial 陽入 forms.

---

### 7. 上 — wuu — missing entry (general Shanghainese)

- Current: `N/A` / `N/A`
- Expected: `zang²³` / `zɑŋ²³` (陽 register, voiced 禪母; standard Shanghai form)
- Why: 上 (MC 禪母 voiced) is present in all six sub-nodes; absent only from wuu.

---

### 8. 見 — wuu — missing entry (general Shanghainese)

- Current: `N/A` / `N/A`
- Expected: `ji⁵³` / `tɕiɛ⁵³` (陰去 T5, voiceless 見母)
- Why: 見 (MC 見母 voiceless, 陰去聲) is populated for six sub-nodes; absent only from wuu.

---

### 9. 鳥 — wuu / wuu_sz / wuu_hz / wuu_nb / wuu_jx — wrong register (voiceless initial with LOW tone)

- Current: wuu `tio²³`/`tiɔ²³`; wuu_sz `tio²³`/`tiɔ²³`; wuu_hz `tio²¹³`/`tiɔ²¹³`; wuu_nb `tio²¹³`/`tiɔ²¹³`; wuu_jx `tio²³`/`tiɔ²³`
- Expected: wuu `tio³⁵`/`tiɔ³⁵` (陰上 T3, voiceless 端母); same HIGH register for sub-nodes (per 蘇州方言詞典; cf. wuu_wz correctly shows `tie³⁵`/`tiɛ³⁵`)
- Why: 鳥 (MC 端母 t- voiceless, 上聲 陰) must produce a HIGH-register tone in Wu. Tone ²³ is the 陽平/陽上/陽去 merged low register, which can only originate from a voiced initial. The voiceless t- in the surface form is contradicted by the low-register tone numeral. Wenzhou (wuu_wz) already records the correct HIGH ³⁵, confirming the other five nodes are misassigned. Comparable voiceless-initial words—東 `tong⁵³`, 天 `thi⁵³`, 土 `thu³⁵`—consistently show HIGH register.

---

### 10. 立 — wuu / wuu_sz — 入聲 glottal with 陽平 tone numeral

- Current: wuu `lliq²³`/`liɪʔ²³`; wuu_sz `lliq²³`/`liɪʔ²³`
- Expected: wuu `lliq¹²`/`liɪʔ¹²` (陽入 T8 in Shanghai); wuu_sz `lliq²³` with tone marking for 陽入 in Suzhou
- Why: 立 (MC 来母 voiced, 入聲 陽) in Shanghai yields T8 陽入 = superscript `¹²`. The surface suffix `q` and IPA `ʔ` explicitly mark a glottal-stop 入聲 syllable, yet the tone numeral `²³` encodes 陽平—a completely different tone class with no glottal component. Within the file's own notation, `²³` is the 陽平 tone for words like 地, 龍, 頭; it is never used for 入聲. Cf. 六 wuu `loq¹²`/`loʔ¹²` and 肉 wuu `nnyoq¹²`/`ɲioʔ¹²`, both voiced 陽入, both correctly marked `¹²`.

---

### 11. 六 — wuu_nb — voiced 来母 陽入 filed as HIGH-register (⁵⁵)

- Current: wuu_nb `loq⁵⁵`/`loʔ⁵⁵`
- Expected: wuu_nb `loq²³`/`loʔ²³` or `loq¹²`/`loʔ¹²` (陽入 LOW register)
- Why: 六 (MC 来母 voiced, 陽入聲) must fall in the LOW-register 陽入 group. Superscript `⁵⁵` is the Ningbo 陰入 T7 tone (from voiceless initials, as in 七 `tshiq⁵⁵`, 一 `iq⁵⁵`). Assigning it to a voiced-initial character erases the register split that is Wu's core defining feature. Every other node correctly assigns 六 a low-register entry: wuu `¹²`, wuu_sz `³` (local 陽入), wuu_hz `²`, wuu_jx `²³`.

---

### 12. 日 — wuu_jh — voiced 日母 陽入 filed as HIGH-register (⁵⁵)

- Current: wuu_jh `niq⁵⁵`/`niʔ⁵⁵`
- Expected: wuu_jh `niq²¹²`/`niʔ²¹²` (陽入 LOW register; cf. Jinhua's 陽入 pattern)
- Why: 日 (MC 日母 voiced, 陽入聲) must produce a LOW-register 陽入 tone. Jinhua's 陰入 is `⁵⁵` (as seen in, e.g., 一 `iq⁵⁵` across the Wu cluster), but 日母 is voiced; its 入聲 reflex belongs to 陽入. The ⁵⁵ mark contradicts the voiced initial.

---

### 13. 耳 — wuu_jh — voiced 日母 陽上 filed as HIGH-register (⁵³)

- Current: wuu_jh `hher⁵³`/`ɦɚ⁵³`
- Expected: wuu_jh LOW-register tone for 陽上聲 (cf. other dialects: wuu `²³`, wuu_sz `²⁴`, wuu_hz `²¹³`)
- Why: 耳 (MC 日母 voiced, 上聲 陽) should yield a low-register reading throughout Wu. The IPA retains the voiced initial `ɦ-`, confirming the 陽 category, but `⁵³` is a HIGH tone. Internally inconsistent: a voiced-initial syllable cannot yield the HIGH-register contour in any regular Wu tone correspondence.

---

### 14. 二 — wuu — surface/IPA initial mismatch

- Current: surface `nyi²³`, IPA `n̩²³`
- Expected: IPA `ɲi²³` (palatal nasal + vowel; matching surface `ny-`) or surface `ny²³` consistent with syllabic IPA
- Why: The surface romanization `nyi` implies an onset /ɲ/ followed by vowel /i/. The IPA `n̩` is a syllabic alveolar nasal with no palatal feature and no vowel segment. These are different phonological representations of the same syllable. Suzhou correctly shows `ɲi³¹`; Shanghai should analogously show `ɲi²³`.

---

### 15. 二 — wuu_wz — surface/IPA mismatch (vowel entirely absent)

- Current: surface `nyi²²`, IPA `ŋ²²`
- Expected: IPA `ŋi²²` or `ɲi²²` matching the vowel `i` present in surface
- Why: The surface form carries a visible `i` nucleus (`nyi`). The IPA `ŋ` is a bare syllabic velar nasal with no vowel. In Wenzhou the palatal nasal onset is merged into a velar in some environments, but the rhyme nucleus is not deleted. The `i` vowel should appear in the IPA transcription.

---

### 16. 五 — wuu_hz — initial ŋ present in surface, absent in IPA

- Current: surface `ngu²¹³`, IPA `u²¹³`
- Expected: IPA `ŋ̍²¹³` (syllabic velar nasal, as in wuu, wuu_sz, wuu_nb, wuu_jx, wuu_jh) or `ŋu²¹³`
- Why: 五 (MC 疑母 voiced) has a velar nasal onset in all other Wu sub-nodes. The surface `ngu` explicitly encodes `ng` = /ŋ/. The IPA `u` drops this onset entirely. Hangzhou, though Mandarin-influenced, does not delete the 疑母 initial for 五; the vowel-initial reading in Mandarin (wǔ) is a separate development that does not apply to the Wu stratum.

---

### 17. 肉 — wuu_hz — surface voiced-nasal initial vs IPA sibilant (major contradiction)

- Current: surface `nnyoq²¹³`, IPA `zoʔ²¹³`
- Expected: either surface `zoq²¹³`/IPA `zoʔ²¹³` (Hangzhou Mandarin-influenced sibilant reading) OR surface `nnyoq²¹³`/IPA `ɲioʔ²¹³` (conservative Wu reading)
- Why: The surface prefix `nny` is the file's convention for the voiced palatal nasal /ɲ/ (cf. 肉 wuu `nnyoq¹²`/`ɲioʔ¹²`, wuu_sz `nnyoq²³`/`ɲioʔ²³`). The IPA `z` is a completely different segment. For Hangzhou, where Mandarin influence might produce a sibilant onset (analogous to 人 wuu_hz `zen²¹³`/`zən²¹³`), the surface form should be changed to `zoq` to reflect this. As it stands, surface and IPA describe two contradictory phonemes.

---

### 18. 耳 — wuu_nb — IPA `ɦŋ̩²¹³` appears to be a typographic error

- Current: wuu_nb `hher²¹³`/`ɦŋ̩²¹³`
- Expected: `ɦɚ²¹³` (matching every other Wu node: wuu `ɦɚ²³`, wuu_sz `ɦɚ²⁴`, wuu_hz `ɦɚ²¹³`, wuu_jx `ɦɚ²³`, wuu_jh `ɦɚ⁵³`)
- Why: `ɦŋ̩` (voiced glottal fricative + syllabic velar nasal) is phonologically incoherent as a single rhyme for 耳 in Ningbo Wu. The rhyme 耳 has a retroflex or central vowel nucleus throughout Wu; `ɦɚ` is consistent across all other nodes. The `ŋ̩` appears to be a copy-paste error.

---

### 19. 走 — wuu_hz — surface/IPA vowel mismatch

- Current: surface `tseu⁵³`, IPA `tsei⁵³`
- Expected: either `tsei⁵³`/`tsei⁵³` (front vowel) or `tseu⁵³`/`tsɤɯ⁵³` (back rounded vowel, as in all other nodes)
- Why: The surface `eu` and IPA `ei` represent different rhymes. In Shanghainese/Wu, `eu` transcribes the back unrounded vowel `ɤɯ` (as in wuu `tsɤɯ³⁵`, wuu_sz `tsɤɯ⁵¹`), while `ei` is a front diphthong. Hangzhou should not be the only dialect where 走 has a front-vowel rhyme; the `ei` in IPA looks like a mistake inherited from Jinhua wuu_jh `tsei³⁵`/`tsei³⁵` (where the vowel shift is genuine).

---

### 20. 西 — wuu_jx — surface `xi` (implies ɕ) vs IPA `si` (dental sibilant)

- Current: surface `xi⁵³`, IPA `si⁵³`
- Expected: IPA `ɕi⁵³` consistent with surface `xi` and with all other nodes (wuu `ɕi⁵³`, wuu_sz `ɕi⁴⁴`, wuu_hz `ɕi³³⁴`, wuu_nb `ɕi⁵³`, wuu_jh `ɕi⁵³⁵`)
- Why: The file uses `x` in surface romanization to represent the palatal fricative /ɕ/ (see 心 wuu `xin⁵³`/`ɕin⁵³`). The IPA column for wuu_jx deviates to `s` (dental). Jiaxing Wu does not have a dental sibilant for 心母 words in this environment; `/ɕ/` is the expected reflex.

---

### 21. 坐 — wuu_jx — surface/IPA vowel mismatch

- Current: surface `zzo²¹³`, IPA `zu²¹³`
- Expected: IPA `zo²¹³` matching the surface vowel `o` (as in wuu_hz `zzo²¹³`/`zo²¹³`, wuu_jh `zzo²¹³`/`zo²¹³`, wuu_wz `zzo²¹³`/`zo²¹³`)
- Why: Every other node that shows the `zzo` surface form pairs it with IPA `zo`. Jiaxing alone has `zu`, which would imply a different (higher back) rhyme. Given the consistent `zo` elsewhere, this looks like a transcription slip.

---

### 22. wuu_wz — systematic absence of glottal stop on ALL 入聲 entries

- Current: all 入聲 characters in wuu_wz lack `ʔ` notation in both surface and IPA columns. Examples: 七 `tshei²¹³`/`tsʰei²¹³`; 八 `po²¹³`/`po²¹³`; 六 `lieu²¹³`/`lɤu²¹³`; 十 `zai²¹³`/`zai²¹³`; 木 `moe²¹³`/`mø²¹³`; 足 `jy²¹³`/`tɕy²¹³`; 北 `peu²¹³`/`pɤ²¹³`; 肉 `nnau²¹³`/`ȵau²¹³`; 立 `llai²¹³`/`lai²¹³`
- Expected: Wenzhou T7 陰入 = `ʔ²¹³`; T8 陽入 = `ʔ²¹²` (per Cao Zhiyun 1980 Wenzhou phonology; Norman 1988 §3.4)
- Why: Wenzhou is a fully 8-tone system that retains 入聲 as glottalized syllables (creaky voice / final glottal stop). The `ʔ` (or `˨˩` creaky diacritic) is obligatory in the IPA column. Omitting it collapses Wenzhou's T7/T8 onto its regular non-入聲 tones ²¹³, making phonologically distinct syllables appear identical. The distinction between 陰入 and 陽入 is also lost: currently both show `²¹³` with no differentiation, whereas T7 should be `ʔ²¹³` (low-checked rising) and T8 `ʔ²¹²` (low-checked level/falling). This affects roughly 15 characters in the dataset.

---

### 23. 一 — wuu_wz — tone contour ³¹³ not a standard Wenzhou tone

- Current: surface `yi³¹³`, IPA `ji³¹³`
- Expected: `yiq²¹³`/`jiʔ²¹³` (Wenzhou T7 陰入 with glottal, per Norman 1988)
- Why: `³¹³` is a three-level contour that does not correspond to any of the eight documented Wenzhou tones (T1=33, T2=31, T3=35, T4=42, T5=13, T6=22, T7≈ʔ213, T8≈ʔ212). The notation `³¹³` (mid-low-mid) does not appear on any other Wenzhou entry in the file, making it both unique and unverifiable. 一 (MC 影母 陰入聲) should receive T7 陰入 with glottal marking, consistent with the corrected notation called for in issue 22.

---

### 24. 飲 — wuu_sz — 影母 glottal initial missing (Suzhou more conservative than Shanghai)

- Current: wuu_sz `in⁵¹`/`in⁵¹`; wuu_hz `in⁵³`/`in⁵³`; wuu_nb `ing³⁵`/`iŋ³⁵`; wuu_jx `in³⁴`/`in³⁴`
- Expected: wuu_sz at minimum `ʔin⁵¹`/`ʔin⁵¹`; the glottal initial was preserved more robustly in Suzhou than in Shanghai (per 蘇州方言詞典)
- Why: The general Shanghainese entry correctly shows `in³⁵`/`ʔin³⁵` (IPA carries `ʔ`). Suzhou is the most conservative mainstream Wu dialect, retaining archaic features dropped by Shanghai. If Shanghai preserves the 影母 glottal initial for 飲, Suzhou cannot lose it. The `ʔ` onset should appear in the Suzhou IPA at a minimum, and arguably in the surface form. The other sub-nodes (hz, nb, jx) also lack the `ʔ` initial; these are less conservative varieties, so the omission is less acute but still warrants review.

---

### 25. 三 — wuu / wuu_sz / wuu_nb / wuu_jx — nasalization missing from IPA (咸攝 -am rhyme)

- Current: wuu `se⁵³`/`sɛ⁵³`; wuu_sz `se⁴⁴`/`sɛ⁴⁴`; wuu_nb `se⁵³`/`sɛ⁵³`; wuu_jx `se⁵³`/`sɛ⁵³`
- Expected: wuu `se⁵³`/`sɛ̃⁵³`; wuu_sz `se⁴⁴`/`sɛ̃⁴⁴`; wuu_nb `se⁵³`/`sɛ̃⁵³`; wuu_jx `se⁵³`/`sɛ̃⁵³` (nasalized vowel from MC 咸攝 -am; per 錢乃榮 and Suzhou dictionary)
- Why: 三 (MC 心母, 咸攝 下平 覃韻 or 先韻 depending on analysis—in practice, Wu treats it as 咸攝) develops a nasalized vowel in Wu because the original MC coda was nasal (-m). 山 (MC 生母, 山攝 入聲 or 平聲) has no nasal coda and gives a non-nasalized vowel. The file's Hangzhou entry (`wuu_hz`) correctly distinguishes: 三 = `sæ̃³³` (nasalized) vs 山 = `sɛ³³` (plain). The four nodes that show unnasal `sɛ` for 三 collapse this distinction into a homophone with 山. The surface forms are identical (`se`), but the IPA must carry the tilde.

---

### 26. 右 — wuu_jh — voiced 匣母 initial entirely absent

- Current: wuu_jh `iu²⁴`/`iu²⁴`
- Expected: wuu_jh `hhieu²⁴`/`ɦiu²⁴` or similar (voiced fricative/approximant onset, matching MC 匣母 voiced initial)
- Why: 右 (MC 匣母 ɦ voiced) retains a voiced initial in every other Wu sub-node: wuu `hheu²³`/`jɤ²³`, wuu_sz `hheu³¹`/`jɤ³¹`, wuu_hz `hheu²¹³`/`jɤ²¹³`, wuu_nb `hheu²¹³`/`jɤ²¹³`, wuu_jx `hheu²²`/`jɤ²²`, wuu_wz `hhau²²`/`jau²²`. The Jinhua entry `iu²⁴` lacks any initial consonant in both surface and IPA. Wu's three-way initial contrast (aspirated / unaspirated / voiced) is predicated on voiced initials being preserved; a completely initialless form for a 匣母 word in Jinhua would be anomalous and requires verification against a primary source such as the Jinhua municipal dialect survey (金華方言調查).

---

## Worker comment (作業者コメント)

Processed by Claude Opus 4.7, 2026-05-31.

**Findings reviewed:** 26
**Fixes applied:** 15 edits across 11 of the 26 findings
**Noted but not applied:** 15 findings (rationale below)

Editing policy was conservative: only **clear, unambiguous local errors or internal inconsistencies** were fixed. Speculative additions across many nodes, dialect-specific tone replacements where the exact value was uncertain, or systematic claims requiring file-wide rewrites were documented and skipped. Each entry was verified against the live `hanmap_data.js` via `node -e "const {HAN_DATA}=require(\"./hanmap_data.js\"); ..."` before and after each edit.

### Per-finding verdict

1. **日 — 5 missing nodes** — Noted, not applied: a large data-addition request across 5 sub-nodes (wuu/wuu_sz/wuu_hz/wuu_nb/wuu_jx) from a single reviewer claim. Adding 10 new values per character without independent primary-source verification is beyond a conservative review. Pattern suggests these characters were intentionally deferred; recommend a dedicated data-fill pass.

2. **月 — 5 missing nodes** — Noted, not applied: same rationale as #1.

3. **食 — 5 missing nodes** — Noted, not applied: same rationale as #1.

4. **人 wuu — missing** — **Applied.** All 6 sub-nodes carry data; only the parent `wuu` is empty. Added surface `nyin²³` / IPA `ɲin²³` per reviewer (錢乃榮 上海話大詞典); tone `²³` matches Shanghai 陽平 convention used elsewhere in the file (cf. 二 wuu).

5. **目 wuu — missing** — **Applied.** Added surface `moq¹²` / IPA `moʔ¹²` (Shanghai 陽入 = `¹²`, consistent with 六/十/木/肉 wuu).

6. **血 wuu — missing** — **Applied.** Added surface `xyuoq⁵⁵` / IPA `ɕyəʔ⁵⁵`. All five Wu sub-nodes (nb/sz/hz/jx/jh) carry exactly this form, making the wuu gap a clear oversight.

7. **上 wuu — missing** — **Applied.** Added surface `zang²³` / IPA `zɑŋ²³`. Matches wuu_hz exactly and is consistent with the file's use of `²³` for Shanghai 陽 register.

8. **見 wuu — missing** — Noted, not applied: reviewer's proposed tone `⁵³` does not match Shanghai 陰去 = `³⁵` as used elsewhere in the file (cf. 飲 wuu `in³⁵`). The exact correct value for wuu is uncertain; skipping rather than introducing a wrong tone.

9. **鳥 — wrong register (voiceless + LOW tone)** — **Applied for wuu only.** Changed wuu surface `tio²³`→`tio³⁵` and IPA `tiɔ²³`→`tiɔ³⁵`. Reviewer's core observation (voiceless 端母 上聲 → 陰上 HIGH register; cf. wuu_wz `tie³⁵`) is sound. Limited to wuu where the Shanghai 陰上 = `³⁵` pattern is well-attested in the file (水 `sy³⁵`, 火 `xuo³⁵`, 手 `xiu³⁵`). Skipped wuu_sz/wuu_hz/wuu_nb/wuu_jx where dialect-specific 陰上 contours are less certain.

10. **立 — 入聲 glottal with 陽平 tone numeral** — **Applied for wuu only.** Changed wuu surface `lliq²³`→`lliq¹²` and IPA `liɪʔ²³`→`liɪʔ¹²`. Shanghai 陽入 = `¹²` is consistent (cf. 六/十/木/肉/目 wuu). Skipped wuu_sz: surveying all wuu_sz 入聲 entries shows `²³` is actually the Suzhou 陽入 tone in this file (cf. 十/木/肉/目 wuu_sz all `²³`), so wuu_sz `lliq²³` is in fact correct under the file's Suzhou convention.

11. **六 wuu_nb — voiced 陽入 filed as HIGH (⁵⁵)** — **Applied.** Changed surface `loq⁵⁵`→`loq²¹³` and IPA `loʔ⁵⁵`→`loʔ²¹³`. Confirmed by surveying all wuu_nb 入聲 entries: voiceless 陰入 = `⁵⁵` (一/七/八/足/血/北); voiced 陽入 = `²¹³` (十/月/木/肉/目/立). 六 is voiced 来母, so `²¹³` is the unambiguously correct register.

12. **日 wuu_jh — voiced 陽入 filed as HIGH (⁵⁵)** — **Applied.** Changed surface `niq⁵⁵`→`niq²¹²` and IPA `niʔ⁵⁵`→`niʔ²¹²`. wuu_jh voiced 陽入 = `²¹²` (cf. 十/月/食 wuu_jh). Skipped the alternate `²³` value (also attested in 肉/立 wuu_jh): the reviewer specified `²¹²` and it is the more common 陽入 contour in the data.

13. **耳 wuu_jh — voiced 陽上 filed as HIGH (⁵³)** — Noted, not applied: reviewer's observation (voiced ɦ- requires LOW register) is sound, but the exact replacement tone for wuu_jh 陽上 is ambiguous in the data (馬 `mo²¹`, 鳥 `tio²¹`, 二 `nyi²¹³`, 五 `ngu²¹³` all attested). Skipped rather than guess.

14. **二 wuu — surface/IPA initial mismatch (nyi vs n̩)** — **Applied.** Changed IPA `n̩²³` → `ɲi²³` to match surface `nyi²³` and the convention used by all other Wu sub-nodes. Clear isolated typo.

15. **二 wuu_wz — surface/IPA mismatch (vowel absent)** — **Applied.** Changed IPA `ŋ²²` → `ɲi²²` to match surface `nyi²²`. Reviewer offered two alternatives (`ŋi²²` or `ɲi²²`); picked `ɲi` for consistency with the other 6 Wu sub-nodes which all use `ɲi`.

16. **五 wuu_hz — initial ŋ in surface, absent in IPA** — **Applied.** Changed IPA `u²¹³` → `ŋ̍²¹³`. All other Wu sub-nodes for 五 use `ŋ̍²X` IPA against `ngu` surface; the bare `u` was a clear typo.

17. **肉 wuu_hz — surface nny vs IPA z** — **Applied.** Changed surface `nnyoq²¹³` → `zoq²¹³` (keeping the IPA `zoʔ²¹³`). Hangzhou's Mandarin-influenced sibilant reading for 肉 is well-documented (parallel to 人 wuu_hz `zen²¹³`/`zən²¹³`); harmonising the surface to the IPA matches Hangzhou phonology.

18. **耳 wuu_nb — IPA `ɦŋ̩²¹³` typo** — **Applied.** Changed IPA `ɦŋ̩²¹³` → `ɦɚ²¹³`. All other Wu sub-nodes for 耳 use `ɦɚ` IPA; the `ŋ̩` segment was clearly a copy-paste error.

19. **走 wuu_hz — surface/IPA vowel mismatch** — Noted, not applied: surface `tseu` vs IPA `tsei` is a genuine inconsistency, but the direction of fix is uncertain. Hangzhou's rhyme for 走 is variable across sources; without a primary-source check, harmonising either way risks introducing a wrong vowel.

20. **西 wuu_jx — IPA `si` should be `ɕi`** — **Applied.** Changed IPA `si⁵³` → `ɕi⁵³`. File uses `x` in surface for /ɕ/ consistently (cf. 心 wuu `xin⁵³`/`ɕin⁵³`); all other Wu sub-nodes for 西 have `ɕi` IPA. Clear typo.

21. **坐 wuu_jx — IPA `zu` should be `zo`** — **Applied.** Changed IPA `zu²¹³` → `zo²¹³`. All other `zzo` surface entries (wuu_hz, wuu_jh, wuu_wz) pair with `zo` IPA; wuu_jx was the lone outlier.

22. **wuu_wz — systematic missing ʔ on all 入聲** — Noted, not applied: a substantive systematic claim affecting ~15 entries. The presence/absence of glottal stop in Wenzhou 入聲 is contested in the literature (some sources, especially recent koine descriptions, do report the glottal as largely lost in modern Wenzhou). A file-wide pass touching 15+ entries on a debated point is beyond a conservative single-review fix.

23. **一 wuu_wz tone `³¹³`** — Noted, not applied: tied to #22. Until the broader Wenzhou 入聲 convention is settled, fixing this single tone in isolation risks introducing further inconsistency.

24. **飲 wuu_sz — missing 影母 ʔ initial** — Noted, not applied: adding a `ʔ` onset across one or more sub-nodes is a substantive change. The reviewer's argument (Suzhou is conservative → must preserve what Shanghai preserves) is plausible but not strictly verified against 蘇州方言詞典 here.

25. **三 — missing nasalisation across 4 nodes** — Noted, not applied: the surface forms `se` carry no nasal marker either; the nasalisation would need to be added consistently to both surface (with a digraph or diacritic) and IPA across 4 nodes. Beyond a single-entry consistency fix.

26. **右 wuu_jh — voiced 匣母 initial absent** — Noted, not applied: reviewer themselves notes this "requires verification against a primary source such as 金華方言調查". Without that verification, not safe to add an initial that is genuinely absent in the data.

### Cache version

`hanmap.html`: `hanmap_data.js?v=63` → `?v=64` (data changed).

### Verification

- `node --check hanmap_data.js` → SYNTAX_OK
- `node -e "require(\"./hanmap_data.js\")"` → loads cleanly
- Post-edit cross-check via `HAN_DATA[c].surface/ipa[wuu_*]` confirms every applied edit took effect; values match this comment.
