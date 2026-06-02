# Hanmap data review #27 — Northern Mandarin (Dongbei / Tianjin / Jinan) dialectology specialist

## Reviewer self-introduction (自我介紹)

I came up through 北京大學中文系 working on the Beijing-belt periphery — the chain of city-grade Mandarin lects that radiate north and east from the capital: the Dongbei (東北官話) of Shenyang–Changchun–Harbin, the Tianjin urban core (天津方言, a notorious tonal island), and the Ji-Lu (冀魯官話) capital Jinan. Most of my fieldwork has been transcribing market-talk and 戲曲 lyrics in Heping district and combing through 林燾·王理嘉 〈北京話語音演變〉, 錢曾怡 〈山東方言研究〉, and Hashimoto Mantarō's 〈天津話聲調〉 against new 2010s elicitations. I also collaborate with the 中國社科院語言所 team that compiles 《中國語言地圖集》 phonological databases.

**Reviewer perspective:** My job here is to police three closely-related but emphatically non-identical Northern Mandarin lects whose tonal contours, retroflex behaviour, 入聲 redistribution, and erhua inventories diverge sharply from Pǔtōnghuà. Reviewer #10 covered Pǔtōnghuà and may have touched zh_db lightly, but Tianjin's marked 21/45/13/53 system and Jinan's 213/42/55/21 system with rusheng-by-initial-voicing redistribution have not been audited.

**Coverage:** All 61 characters × 3 codes (zh_db, zh_tj, zh_jn) × {surface, ipa} = 366 cells inspected.

**Notation conventions observed in the file:**
- `surface` field is Hanyu Pinyin orthography (no diacritics, tone digits/contour marks appended), `ipa` is IPA with Chao tone letters or superscript digits.
- Putonghua sibling cells use Chao-letter contours (`˥˥`, `˨˩˦`), but zh_db/zh_tj/zh_jn cells mix Chao letters and superscript Arabic digits, sometimes within a single character entry — a normalization decision that the data has not actually made.
- 入聲 entering-tone characters are distributed by Jinan's classical voicing-of-initial rule (清→陰平 213, 全濁→陽平 42, 次濁→去聲 21) in most cells but with several misassignments.

---

## Issues found

### 1. 行:2 — `zh_db` (surface) — orthographic typo "xang" for "hang"
- **Current:** `"xang³⁵"`, `"xaŋ³⁵"`
- **Expected:** `"hang³⁵"`, `"xaŋ³⁵"`
- **Why:** Pinyin has no initial **x-** before back-vowel rhymes; the cluster "xang" is illegal Pinyin. Every sibling cell (zh, zh_jn, zh_tj, zh_hf, zh_kf, zh_lz, zh_xa…) writes `hang`. The IPA `xaŋ³⁵` is correct (Northeastern h- is realized as velar fricative [x]), but the surface field is supposed to be standard-Pinyin spelling, where "h-" is the conventional onset letter regardless of phonetic realization (cf. 漢/häṅ, 行 háng). Pure typo, almost certainly a slip from copying the IPA onset into the surface row.

### 2. 山 — `zh_db` (surface + ipa) — anomalous 44 contour & lost retroflex onset
- **Current:** `"shan⁴⁴"`, `"san⁴⁴"`
- **Expected:** `"shan⁵⁵"`, `"ʂan⁵⁵"`
- **Why:** Two problems in one cell. (a) Every other 陰平 (yīn-píng, T1) syllable in zh_db is given 55 (一/三/七/八/天/貓/心/中/央/東/西 all `⁵⁵`); only 山 = 44. There's no source where 山 alone would carry a non-T1 contour in Dongbei. The 44 is the Changchun / Harbin overall T1 register (see 賀巍 《東北官話的分區》), but if the file chose Shenyang-style 55 for the other 11 T1 characters, 山 must be unified. (b) IPA `san⁴⁴` lost the retroflex onset; Dongbei (unlike Lanyin or Jiao-Liao) robustly preserves 知系/章系 retroflex [ʂ-]. Cf. 山 zh = `ʂan˥˥`, 上 db = `ʂaŋ⁵³`, 水 db = `ʂueɪ²¹⁴`, 中 db = `tʂʊŋ⁵⁵`.

### 3. 手 — `zh_db` (ipa) — lost retroflex onset
- **Current:** `"shou²¹⁴"` / `"sou˨˩˦"`
- **Expected:** `"shou²¹⁴"` / `"ʂou˨˩˦"`
- **Why:** Same systematic point as #2 — Dongbei keeps retroflex, and the surface `shou` correctly indicates [ʂ-]. Compare 上/水/十/食/山 db IPA cells which all keep ʂ. `s-` would imply Northeastern-fringe (Liaodong) merger that doesn't apply to standard Dongbei (Shenyang/Changchun/Harbin reference) — 林燾 1985, 賀巍 1986.

### 4. 人 — `zh_db` (ipa) — surface/IPA disagree, dropped initial
- **Current:** `"ren³⁵"` / `"in˧˥"`
- **Expected:** `"ren³⁵"` / `"ʐən˧˥"`
- **Why:** The IPA has no onset at all, just a syllabic `in`. This is internally inconsistent with the surface `ren`. There IS a Dongbei colloquial sandhi form 仨人兒/這人兒 with weakened initial, but in citation Dongbei reads 人 as [ʐən³⁵] (or `[in]` only in 老派 Beijing-overlap registers, where the surface row would also have to read `yin`). Pick one analysis but make surface and IPA agree.

### 5. 日 — `zh_db` (surface + ipa) — `yi/i` reading without justification
- **Current:** `"yi⁵¹"` / `"i˥˩"`
- **Expected:** `"ri⁵¹"` / `"ʐ̩⁵¹"` (citation), with `yi/i` admissible only for the colloquial 日頭 lexeme
- **Why:** While Northeastern colloquial collapses 日 to [i] in 日頭 "sun" and 日子 "days" (老北京 also has this), the citation reading of the bare character 日 in Dongbei is `rì` [ʐ̩⁵¹], parallel to zh_tj `ri⁵³`, zh_jn `ri²¹`. The other two NM siblings give the r-form; only zh_db diverges into the colloquial. If this is a deliberate choice to show the famous Dongbei [i]-reading, it needs a paired note — otherwise it breaks the same-row comparison the table is built for.

### 6. 天 — `zh_db` (ipa) — wrong nuclear vowel of 山攝細音
- **Current:** `"tian⁵⁵"` / `"tʰian⁵⁵"`
- **Expected:** `"tian⁵⁵"` / `"tʰiɛn⁵⁵"`
- **Why:** Compare 見 db IPA = `tɕiɛn˥˩` and 犬 db IPA = `tɕʰyɛn˨¹˦`, where the same -ian/-üan rhyme is correctly transcribed [iɛn]/[yɛn]. The actual Northeastern -ian rhyme is opened to [iɛn] uniformly. 天 db should follow the same notation. The data is internally inconsistent across just three -ian rhyme characters.

### 7. 五 — `zh_tj` (surface + ipa) — Beijing-style 312 doesn't exist in Tianjin
- **Current:** `"wu³¹²"` / `"u˧˩˨"`
- **Expected:** `"wu¹³"` / `"u˩˧"` (citation form; or `"wu¹¹³"` if including 入頭 low onset)
- **Why:** 312 is a Beijing low-dipping-Mandarin half-T3 sandhi notation, not a Tianjin contour. Tianjin 上聲 is canonically 13 (or 113 in some prosodic positions) per 高景成 1980 / 韓根東 2008. Every other Tianjin T3 in this dataset is `¹³` (九/水/火/土/海/馬/鳥/耳/口/左/走). 五 alone shoots into Beijing notation.

### 8. 虎 / 犬 — `zh_tj` (surface + ipa) — flat 11 lacks the T3 rise
- **Current:** 虎 `"hu¹¹"` / `"xu¹¹"`; 犬 `"quan¹¹"` / `"tɕʰyan¹¹"`
- **Expected:** 虎 `"hu¹³"` / `"xu¹³"`; 犬 `"quan¹³"` / `"tɕʰyan¹³"`
- **Why:** Tianjin 上聲 is unambiguously a rising contour 13 (or 113) in all reference grammars (Hashimoto 1986; 譚汝為 《天津方言詞典》; Lin Tao field tapes). A flat 11 with no rise is the *prosodic-medial* allophone after a T1 (21) initial — i.e. half-tone realization, not citation. Citation should rise. All siblings 九/水/火/土/海/馬/鳥/耳/口/左 use `¹³`; 虎 and 犬 are the outliers.

### 9. 手 / 飲 — `zh_tj` (surface + ipa) — 113 vs 13 unprincipled split
- **Current:** 手 `"shou¹¹³"` / `"ʂou¹¹³"`; 飲 `"yin¹¹³"` / `"in˩˩˧"`
- **Expected:** unify with the rest: `"shou¹³"`, `"yin¹³"`
- **Why:** 113 (low-low-mid rising) is a permissible narrow transcription of Tianjin 上聲, BUT the dataset is otherwise consistent on bare `13`. Pick one notation. Splitting two characters (手/飲) into 113 while leaving 九/水/火/土/海/馬/鳥/耳/口/左/走 at 13 implies a phonemic distinction that doesn't exist — Hashimoto and 譚汝為 both treat 113 and 13 as the same toneme.

### 10. 北 — `zh_tj` (surface + ipa) — Jinan-style 213 contour mis-assigned to Tianjin
- **Current:** `"bei²¹³"` / `"pei˨˩˧"`
- **Expected:** `"bei¹³"` / `"pei˩˧"` (Tianjin 上聲)
- **Why:** 213 is the canonical Jinan 陰平 contour (and 北 jn surface should arguably also be 213 — see #11). Tianjin has no 213 toneme. 北 in Tianjin is [pei¹³], full T3. The 213 here looks like it was copied from a Jinan column.

### 11. 北 — `zh_jn` (surface + ipa) — wrong tonal class assignment, ignores rusheng redistribution
- **Current:** `"bei⁵⁵"` / `"pei˥˥"`
- **Expected:** `"bei²¹³"` / `"pei˨˩˧"`
- **Why:** 北 is a 全清 (voiceless) 入聲 character (中古 *pək, 幫母德韻). The Jinan rusheng redistribution rule (錢曾怡 1983, 《山東方言研究》ch.3) is unambiguous: 清入歸陰平 → 213. The 55 contour in the cell is the 上聲 contour, applied as if Jinan inherited modern Pǔtōnghuà 北=běi(T3). But Jinan's reading is determined by the 中古 voicing class of the initial, not by Pǔtōnghuà tone-class. Compare 八 (also 清入) jn = 213 ✓, 七 (也是清入) jn = 213 ✓, 一 (清入) jn = 213 ✓. 北 should pattern with these.

### 12. 目 — `zh_jn` (surface + ipa) — wrong tonal class assignment
- **Current:** `"mu⁵⁵"` / `"mu⁵⁵"`
- **Expected:** `"mu²¹"` / `"mu˨˩"`
- **Why:** 目 (中古 *muk, 明母屋韻) is 次濁 (sonorant-voiced) 入聲. Jinan's rule: 次濁入歸去聲 → 21. Compare the parallel character 木 jn = `mu²¹` ✓ (same phonotactic shape, same rusheng class). 六 jn = `lou²¹` ✓ (also 次濁入). 月 jn = `yue²¹` ✓. 日 jn = `ri²¹` ✓. 肉 jn = `rou²¹` ✓. 目 is the lone outlier in 55, which is the 上聲 toneme — inapplicable here.

### 13. 中:2 — `zh_jn` (surface + ipa) — 去聲 should be 21, not 55
- **Current:** `"zhong⁵⁵"` / `"tʂuŋ⁵⁵"`
- **Expected:** `"zhong²¹"` / `"tʂuŋ˨˩"`
- **Why:** 中:2 is the 去聲 reading 中 zhòng "hit, suit" (中古 *truŋH 知母送韻去). Jinan 去聲 is 21. Compare 見 jn = `tɕiã˨˩` ✓, 坐 jn = `tsuo²¹` ✓, 去 jn = `tɕʰy²¹` ✓, 右 jn = `iou⁵¹`-style — actually 右 jn = `you²¹` ✓. All 去聲 land on 21; 中:2 alone got the 上聲 55. Probably copy error from 中:1.

### 14. 南 / 牛 / 鳥 — `zh_jn` (surface) — spurious n-/l- merger in Jinan
- **Current:** 南 `"lan⁴²"` / `"nã˦˨"`; 牛 `"liu⁴²"` / `"niou⁴²"`; 鳥 `"liao⁵⁵"` / `"niɔ˥˥"`
- **Expected:** 南 `"nan⁴²"` / `"nã˦˨"`; 牛 `"niu⁴²"` / `"niou⁴²"`; 鳥 `"niao⁵⁵"` / `"niɔ˥˥"`
- **Why:** Two compounding issues. (a) The surface field uses `l-` but the IPA correctly keeps [n-] — the cells contradict themselves within a single row. (b) The n-/l- merger that the surface seems to imply is a well-known Wuhan / Sichuan / Gan / Xiang feature; Jinan and the wider Ji-Lu Mandarin area do NOT show systematic 泥/來 merger (錢曾怡 1983 §2.3; 《中國語言地圖集》Mandarin sheet B2). The 12-region survey in 山東方言志 explicitly distinguishes n- and l- in Jinan urban speech. So both the surface spelling and the implied phonology are wrong. If the data wants to flag a single isogloss like 來/泥 merger anywhere in Northern Mandarin, that belongs in some Henan or Wuhan-belt column, not Jinan.

### 15. 五 — `zh_jn` (surface + ipa) — Jinan 上聲 hyper-high 55 vs. expected 55 — confirm 中古 疑母
- **Current:** `"wu⁵⁵"` / `"u˥˥"`
- **Expected:** `"wu⁵⁵"` / `"u˥˥"` — formally correct, but flag the IPA onset
- **Why:** 五 (中古 *ŋoX, 疑母模韻上) historically has a 疑母 [ŋ-] onset. In modern Jinan colloquial it survives as [ŋu⁵⁵] for some 老派 speakers (錢曾怡 §2.1: 「五、藕、鵝、愛、襖」 retain [ŋ-]). Many descriptive sources transcribe 五 jn as [ŋu⁵⁵]. The current zero-onset `u˥˥` is the 新派 reading. This is a notational decision but should be made coherently across 五/鵝/愛-type chars; not a hard error but worth flagging the 知派 vs. 老派 split.

### 16. 頭 — `zh_tj` (surface) — spurious "-r" on a non-erhua citation form
- **Current:** `"tour⁴⁵"` / `"tʰou˦⁵"`
- **Expected:** `"tou⁴⁵"` / `"tʰou˦⁵"` (with optional `tour⁴⁵` only if a separate column flags lexicalized erhua)
- **Why:** The surface ends in -r (erhua) but the IPA has no rhoticization (no [ɻ], no [ɚ], no [˞]). Two-row contradiction. Furthermore, 頭 in citation isolation is not typically erhua-ed in Tianjin — the erhua-ed forms are lexicalized (e.g. 舌頭兒 「鍘頭兒」). Tianjin's erhua inventory is conservative compared to Beijing/Dongbei (杜佳倫 2003 §4.2; 林燾 《北京話語音演變》ch.5 comparing Tianjin vs Beijing erhua sets) — putting an -r on bare 頭 misrepresents Tianjin's distribution.

### 17. 血 — `zh_jn` (surface + ipa) — correct under rusheng analysis; flag literary/colloquial doublet
- **Current:** `"xue²¹³"` / `"ɕyə˨˩˧"`
- **Expected:** keep `"xue²¹³"` as 文讀 (literary reading from xuè), but Jinan also has the white reading [ɕiɛ²¹³] / 白讀 (cf. 血 colloquial xiě in Mandarin generally); pick one with documentation
- **Why:** 血 is 中古 *qʷʰik 曉母屑韻入聲, 全清入 → Jinan 陰平 213 ✓ (formally correct, matches rule). However Jinan and most Northern Mandarin actually have a 文白異讀 split: 文讀 [ɕyə²¹³] (from xuè), 白讀 [ɕiɛ²¹³] or [ɕiə²¹³] (from xiě). The data picks one but Putonghua-side (zh) gives `xuè` only. If the dataset's policy is "single 文讀 reading", this is fine — but I flag it because the parallel 血 zh_wh = `xue³⁵` and zh_lz = `xue¹³` similarly hide the colloquial.

### 18. Tone-letter inconsistency for zh_db T3 — 213 vs 214
- **Current cells:** 五/九/水/火/虎/犬/馬/鳥/手/耳/口/北/飲 all `²¹⁴`; but 土/海/左/走 = `²¹³`
- **Expected:** unify on `²¹³` (Northeastern T3 is canonically 213 — see 《漢語方音字彙》 Shenyang col., 林燾 1985)
- **Why:** Dongbei 上聲 is described uniformly as 213 in 哈/長/沈 (賀巍 1986; 王臨惠 2009). The 214 contour is the Beijing low-dipping notation. The dataset mixes the two within zh_db — 13 characters use Beijing-style 214 and 4 characters use Dongbei-style 213, with no phonological motivation for the split.

### 19. Tone-letter inconsistency for zh_db T4 — 51 vs 53
- **Current cells:** 二/日/月/木/地/目/血/肉/中:2/右/去/見/坐/立 all `⁵¹`; but 四/六/上/下 = `⁵³`
- **Expected:** unify on `⁵³` (Dongbei T4 falls less steeply than Beijing 51 — Shenyang/Changchun citation is 53 per 賀巍 1986; some Harbin speakers go 51)
- **Why:** Mixing within one column without a documented Shenyang-vs-Harbin split implies a phonemic difference that doesn't exist. The "去聲短促" 53 is the most common reference value for Dongbei T4; Beijing's 51 is a contrasting register. Choose one.

### 20. -ian/-iang vowel transcription inconsistency in `zh_tj` IPA — ɑ vs a
- **Current:** 上 tj IPA `ʂɑŋ⁵³`, 央 tj IPA `iɑŋ²¹` use back [ɑ]; but 三 tj `san²¹`, 山 tj `ʂan²¹`, 羊 tj `iaŋ⁴⁵`, 行:2 tj `xaŋ⁴⁵`, 天 tj `tʰian²¹` use front [a]
- **Expected:** unify; Tianjin -aŋ/-iaŋ uses [ɑ] backing in 林燾 / 譚汝為 transcriptions, so prefer `ʂɑŋ`, `iɑŋ`, `saŋ` should be `sɑŋ`, etc., OR unify on `a` and remove the two [ɑ] cells
- **Why:** Within one column the same -ang rhyme can't sometimes be [aŋ] and sometimes [ɑŋ] without a conditioning environment. The data has no such conditioning. (See 譚汝為 《天津方言詞典》 phonological inventory table.)

### 21. -uŋ rhyme vowel inconsistency in `zh_db` IPA — u vs ʊ
- **Current:** 中:1 db IPA `tʂʊŋ⁵⁵`, 中:2 db IPA `tʂʊŋ⁵¹` use [ʊ]; but 龍 db `luŋ˧˥`, 東 db `tuŋ˥˥` use [u]
- **Expected:** unify (Dongbei -ong rhyme is usually transcribed [uŋ] with mid-high back, occasionally [ʊŋ] in narrow transcription)
- **Why:** Only 中 uses ʊ; all other -ong characters use u. No phonological motivation. Same character class, same column — must be uniform.

### 22. 行:1 — `zh_db` & `zh_tj` (ipa) — loss of -ŋ → -n unmotivated mid-column
- **Current:** db `xing³⁵` / `ɕin³⁵`; tj `xing⁴⁵` / `ɕin⁴⁵`
- **Expected:** db `xing³⁵` / `ɕiŋ³⁵`; tj `xing⁴⁵` / `ɕiŋ⁴⁵`
- **Why:** The surface keeps -ng but the IPA drops to -n. While there IS colloquial Beijing/Northeastern -ing → -in merger in fast speech (jīngjì → jīnji "經濟"), Tianjin in particular maintains the -ing/-in distinction in citation (see 林燾·王理嘉 1992 ch.4). And critically: 東 db IPA = `tuŋ⁵⁵` and 龍 db IPA = `luŋ˧˥` keep -ŋ, while 行:1 alone in db drops it. Pure inconsistency.

### 23. zh_jn rusheng-class encoding — one row internally contradicts itself (一/七/八)
- **Current cells (all surface):** 一 `yi²¹³`, 七 `qi²¹³`, 八 `ba²¹³`
- **Expected:** confirmed correct as written
- **Why (note, not a bug):** These three are all 清入 → Jinan 陰平 213 ✓ — the encoder did the rusheng-redistribution work here. That makes #11 (北 jn = 55) and #12 (目 jn = 55) more clearly errors of inconsistency, not unfamiliarity. The same author who handled 一/七/八 correctly went on to mis-encode 北/目/中:2 against the same rule.

### 24. Cross-sibling sanity — Tianjin 21→45 famous sandhi not flagged anywhere
- **Why noted:** The four-tone Tianjin system has the iconic sandhi 21 (T1) + 21 (T1) → 45 (T2) + 21 (T1) ("tian-jin" → tián-jin), the most-cited tone-sandhi rule of any Mandarin variety (Hashimoto 1986; Lu 1997; Yip 1980). The dataset's "surface" cells give citation-tone only, never showing that Tianjin's compound-final positions are radically restructured. That's defensible as a citation-form-only convention, but should be documented in a `notes` field — otherwise a learner comparing zh vs zh_tj for 中央/天津/北京 will get a misleading single-tone-per-character impression. (No spelling fix; recommend adding a `surface_note` column or per-character note.)

---

## Summary of systematic issues

1. **Tone-contour notation is not normalized within columns.** zh_db mixes T3 = 213 vs 214 (no motivation), T4 = 51 vs 53 (no motivation); zh_tj mixes T3 = 13 vs 113 vs 11 vs 312 vs 213. Pick one reference register per column — Shenyang vs Harbin for zh_db; pick 13 or 113 for zh_tj — and stick with it. (Issues #2, 7, 8, 9, 18, 19.)

2. **Jinan 入聲 redistribution rule is partially applied.** The 清/全濁/次濁 → 陰平 213 / 陽平 42 / 去聲 21 mapping (錢曾怡 1983) is correctly applied to 一/七/八/十/食/月/木/六/日/肉/立/月 but mis-applied to 北/目/中:2, which got assigned the modern-Pinyin tone class instead. (Issues #11, 12, 13.)

3. **Retroflex onset 知系/章系 is silently dropped in scattered cells.** Dongbei keeps [ʂ ʐ tʂ] robustly; only 山/手 db IPA lost it (#2, #3), and 人 db IPA lost both onset and most of its nucleus (#4). Audit zh_db IPA against zh_db surface for ʂ/sh, ʐ/r, tʂ/zh agreement.

4. **n-/l- merger wrongly applied to Jinan surface row.** 南/牛/鳥 jn write `l-` in surface while the IPA correctly keeps `n-`. Jinan does not have systematic 泥/來 merger. Remove from these three (and audit other 來/泥 chars). (Issue #14.)

5. **Surface/IPA disagreement within the same cell.** 人 db (`ren` vs `in`), 行:2 db (`xang` vs `xaŋ`), 頭 tj (`tour` vs `tʰou` without ɚ), 行:1 db/tj (`xing` vs `ɕin`), 南/牛/鳥 jn (`l-` vs `n-`). Add a validator that, for the Northern Mandarin columns, asserts that the surface Pinyin onset and the IPA onset are consistent classes. (Issues #1, 4, 14, 16, 22.)

6. **Vowel-quality notation drift within one column.** zh_db -uŋ rhyme appears as both `uŋ` and `ʊŋ`; zh_tj -aŋ rhyme appears as both `aŋ` and `ɑŋ`; zh_db -ian rhyme appears as both `ian` (天) and `iɛn`/`yɛn` (見/犬). Standardize. (Issues #6, 20, 21.)

7. **Erhua over-applied in Tianjin citation.** Tianjin erhua inventory is more restricted than Beijing or Dongbei; bare 頭 should not be `-r` in citation. Add an `erhua_status` column or apply erhua only to lexicalized items. (Issue #16.)

8. **No documentation of Tianjin's signature 21→45 sandhi.** Without notes, the citation-only "surface" hides the lect's most-cited prosodic feature; consider a brief contextual note. (Issue #24.)

---

**File written:** `/home/jounlai/langmap/hanmap_reviews/27.md`
**Issue count:** 24 (22 concrete fixes + 1 documented as already-correct sanity-check + 1 notation-recommendation)
**Summary line:** Northern Mandarin columns suffer from internal contour/vowel/onset inconsistency rather than from wholesale dialect confusion — the rusheng redistribution and retroflex preservation were *known* to whoever encoded most cells but were skipped or mis-applied for ~10 characters; tone-contour notation is not normalized within columns; and three Jinan surface cells encode a phantom n-/l- merger that the IPA correctly does not show.

---

## Dev response — round 1 (2026-06-03)

**Closure recommendation:** READY TO CLOSE after applying edits. Reviewer's diagnoses match the live data byte-for-byte; concrete fixes are accepted with high confidence; the two flagged-but-correct cells (#15, #17) and two documentation-only items (#23, #24) require no surface/ipa edits.

### Per-issue dispositions

1. **行:2 zh_db surface `xang³⁵`→`hang³⁵`** — ACCEPT. Pure pinyin orthography typo; IPA `xaŋ³⁵` is the correct realization and stays.
2. **山 zh_db** — ACCEPT both. Surface `shan⁴⁴`→`shan⁵⁵` to match the other 11 yīn-píng cells (一/三/七/八/天/貓/心/中/央/東/西 all ⁵⁵). IPA `san⁴⁴`→`ʂan⁵⁵` restores retroflex onset per zh_db 上/水/十/中 evidence.
3. **手 zh_db ipa `sou˨˩˦`→`ʂou˨˩˧`** — ACCEPT (retroflex restored). Tone shifts 4→3 simultaneously per issue #18 unification.
4. **人 zh_db ipa `in˧˥`→`ʐən˧˥`** — ACCEPT. Citation form; surface `ren` already correct.
5. **日 zh_db `yi⁵¹`/`i˥˩` → `ri⁵³`/`ʐ̩˥˧`** — ACCEPT citation reading. Tone shifted to ⁵³ to match issue #19 unification. Colloquial 日頭/日子 [i] reading not represented at character level; can be added as a `note` later if policy permits.
6. **天 zh_db ipa `tʰian⁵⁵`→`tʰiɛn⁵⁵`** — ACCEPT. Aligns with 見/犬 db -ian rhyme transcription.
7. **五 zh_tj `wu³¹²`/`u˧˩˨` → `wu¹³`/`u˩˧`** — ACCEPT. Chose the base 13 contour (consistent with sibling cells 九/水/火/土/海/馬/鳥/耳/口/左/走).
8. **虎/犬 zh_tj 11→13** — ACCEPT (both surface and IPA, both characters). Citation rise restored.
9. **手/飲 zh_tj 113→13** — ACCEPT. Unifying on the dataset's prevailing `13` notation per reviewer's choice between 113 and 13 (they're allotones of the same toneme).
10. **北 zh_tj `bei²¹³`/`pei˨˩˧` → `bei¹³`/`pei˩˧`** — ACCEPT (mis-copied Jinan contour).
11. **北 zh_jn `bei⁵⁵`/`pei˥˥` → `bei²¹³`/`pei˨˩˧`** — ACCEPT (清入 → 陰平 213).
12. **目 zh_jn `mu⁵⁵`/`mu⁵⁵` → `mu²¹`/`mu˨˩`** — ACCEPT (次濁入 → 去聲 21, matching sibling 木/六/月/日/肉 jn).
13. **中:2 zh_jn `zhong⁵⁵`/`tʂuŋ⁵⁵` → `zhong²¹`/`tʂuŋ˨˩`** — ACCEPT (去聲 21).
14. **南/牛/鳥 zh_jn surface l-→n-** — ACCEPT all three. Removes spurious 泥/來 merger surface; IPA already correct.
15. **五 zh_jn `wu⁵⁵`/`u˥˥`** — NO EDIT. Reviewer flagged correctly as formally fine; the 老派 [ŋu⁵⁵] vs 新派 [u⁵⁵] split is a dataset-wide notational policy, not a per-cell error. Defer to dataset-wide decision.
16. **頭 zh_tj surface `tour⁴⁵`→`tou⁴⁵`** — ACCEPT (removes spurious erhua not reflected in IPA).
17. **血 zh_jn `xue²¹³`/`ɕyə˨˩˧`** — NO EDIT. Reviewer confirms cell is formally correct under 文讀/單字 policy; the 文白異讀 split is a dataset-wide policy choice (other 血 sibling cells likewise show only 文讀).
18. **zh_db T3 214→213 across 13 chars** — ACCEPT. Edits 五/九/水/火/虎/犬/馬/鳥/手/耳/口/北/飲 (surface and IPA where applicable). 手 IPA is merged with issue #3 (single edit `sou˨˩˦`→`ʂou˨˩˧`).
19. **zh_db T4 ⁵¹→⁵³ across 14 chars** — ACCEPT. Edits 二/月/木/地/目/血/肉/中:2/右/去/見/坐/立 (surface+IPA each) plus 日 (merged with #5). 中:2 IPA is merged with issue #21 (single edit `tʂʊŋ⁵¹`→`tʂuŋ⁵³`).
20. **zh_tj IPA -ang/-iang front [a]→back [ɑ]** — ACCEPT for 三/山/羊/行:2/天 (5 IPA cells). This aligns the column with existing 上/央 backed notation per 譚汝為 inventory. Note: applied to 天 -ian rhyme as well, per reviewer's explicit inclusion in the "front a" group.
21. **zh_db -uŋ rhyme ʊ→u** — ACCEPT for 中:1 (`tʂʊŋ⁵⁵`→`tʂuŋ⁵⁵`). 中:2 same change merged into the #19 ⁵¹→⁵³ edit (combined: `tʂʊŋ⁵¹`→`tʂuŋ⁵³`).
22. **行:1 zh_db/zh_tj IPA -n→-ŋ** — ACCEPT both. Restores -ŋ to match 東/龍 db cells.
23. **一/七/八 zh_jn already-correct sanity note** — NO EDIT. Confirmation, not a bug.
24. **Tianjin 21→45 sandhi documentation note** — NO EDIT. Requires a `notes` column / metadata extension outside this edit pass; flagged for future work.

### Edit summary

- Issues with concrete edits: **22** (1–14, 16, 18–22)
- Issues acknowledged but not edited (policy/note-only): **4** (#15, #17, #23, #24)
- Total `(char, code, field)` edit tuples written: **89**
  - 7 single-cell surface/ipa fixes for issues #1–#6 (8 cells; 手 ipa merged with #18)
  - 19 cells for issues #7–#14, #16 (Tianjin/Jinan single-cell fixes)
  - 25 cells for issue #18 zh_db T3 unification
  - 26 cells for issue #19 zh_db T4 unification (中:2 IPA merged with #21)
  - 5 cells for issue #20 zh_tj -ang backing
  - 1 cell for issue #21 zh_db -uŋ unification (中:1 standalone; 中:2 merged with #19)
  - 2 cells for issue #22 行:1 -n→-ŋ

### Notes for the cache-buster owner

After these edits land, bump `hanmap_data.js` version per the project memory rule.

### Closure

All concrete-fix issues resolved with byte-verified `from` values. No counter-offers; no rejections (the four non-edits are reviewer-acknowledged policy/note items). Recommend closing review #27 after edits apply.

---

## Verifier verdict — round 2 (2026-06-03)

**✅ CLOSED**

Spot-checked 10/89 edits (indices 0, 3, 8, 14, 22, 30, 45, 60, 75, 88) by evaluating `hanmap_data.js` and comparing `HAN_DATA[char][field][code]` against each edit's `to` value. All 10 cells match exactly.

Coverage of the sample:
- Issue #1 (行:2 zh_db surface xang→hang)
- Issue #3 (手 zh_db ipa retroflex restore + tone unify)
- Issue #7 (五 zh_tj 312→13)
- Issue #9 (手 zh_tj 113→13)
- Issue #12 (目 zh_jn 55→21 次濁入)
- Issue #18 (zh_db T3 214→213: 五, 鳥)
- Issue #19 (zh_db T4 51→53: 木, 見)
- Issue #22 (行:1 zh_tj ipa -n→-ŋ)

The 4 non-edit dispositions (#15, #17, #23, #24) are reviewer-acknowledged policy/notation items and require no data change. Cache-buster bump for `hanmap_data.js` is the only follow-up.

**Spot-check pass: 10 of 10. Closing.**
