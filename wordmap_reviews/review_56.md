# Wordmap review #56 — Mandarin / Pinyin standard-phonology specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a phonologist specialising in Standard Chinese (Putonghua / 普通话) and the broader Mandarin (官话) dialect continuum, with particular attention to Hanyu Pinyin orthographic correctness, the segmental realisation of the retroflex and palatal series, erhua, the neutral tone (轻声), and the tonal arithmetic of citation versus sandhi forms. My documentary scope for this review is the Beijing-based standard (`zh`) together with the regional Mandarin lects in this dataset — Northeastern/Dongbei (`zh_db`), Sichuan (`zh_sc`), Chengdu (`zh_cd`), Chongqing (`zh_cq`), Xi'an (`zh_xa`), Kunming (`zh_km`), Wuhan (`zh_wh`), Jinan (`zh_jn`), Kaifeng (`zh_kf`), Hefei (`zh_hf`), Nanjing (`zh_nj`), Tianjin (`zh_tj`), Lanzhou (`zh_lz`) — and the Cyrillic-written Dungan diaspora variety (`dng`). Primary reference works consulted: San Duanmu, *The Phonology of Standard Chinese* (2nd ed., Oxford, 2007), especially §§2–3 (segments) and ch. 11 (tone and the neutral tone); the official *Hanyu Pinyin Scheme* (汉语拼音方案, 1958, GB/T 16159) and Lee & Zee's IPA *Illustration of Standard Chinese* (JIPA 33, 2003) for the canonical IPA values; the *汉语方言概要* (Yuan Jiahua) and the *汉语方音字汇* for regional tone-letter values; and Rimsky-Korsakoff Dyer's work on Dungan tonology. Tone marks are read as Chao tone-letters throughout.

---

## Issues found

### 1. `zh` — sun — 阳 is full Tone 2 (rising), not low level
- **File:** `words/sun.js` line 71
- **Current:** `["太阳", "tʰaɪ̯˥˩jɑŋ˩"]`
- **Expected:** `["太阳", "tʰaɪ̯˥˩jɑŋ˧˥"]`
- **Why:** 太阳 *tàiyáng*: the second syllable 阳 *yáng* carries Tone 2 (陽平), whose citation contour is a high-rising 35 = ˧˥. It is a fully toned syllable here (it is not lexically neutralised the way 月亮's 亮 or 房子's 子 are). The transcription `jɑŋ˩` (low level 11) is neither the Tone-2 value nor the neutral-tone value and is simply wrong. Cf. Lee & Zee (2003) Tone 2 = [35]; Duanmu (2007) §11. The standard onset 阳 = [j] is fine.

### 2. `zh_db` — all 20 words — Dongbei Mandarin copied verbatim from the Beijing standard
- **File:** `words/*.js` line 181 in each file (e.g. `words/water.js:181`)
- **Current:** e.g. `["水", "ʂweɪ̯˧˩˧"]`, `["太阳", "tʰaɪ̯˥˩jɑŋ˩"]`, `["眼睛", "jɛn˧˩˧tɕiŋ˥"]` — segment-for-segment, tone-for-tone identical to the `zh` rows
- **Expected:** distinct Dongbei values (at minimum a lower/dipped Tone 1 ~ [44]/[˦˦] rather than [55], and the well-known Tone-1↔Tone-2 register adjustments)
- **Why:** Across every one of the 20 words `zh_db` is a byte-for-byte clone of the standard `zh` IPA (only the affricate tie-bars differ — see #3). Northeastern Mandarin is precisely *famous* for not matching Beijing: a notably lower Tone 1 and characteristic Tone-1/Tone-2 reassignments (袁家骅 *汉语方言概要*; 贺巍 on 东北官话). A regional row that reproduces the standard verbatim conveys no dialect information and is almost certainly placeholder data inherited from `zh`.

### 3. `zh` / `zh_db` — internal tie-bar (͡) inconsistency on affricates
- **File:** `words/house.js` lines 71 vs 181; `words/eye.js` lines 71 vs 181; cf. `words/eat.js` line 71
- **Current:** `zh` 房子 = `fɑŋ˧˥t͡sɨ` (with U+0361 tie) but `zh_db` = `fɑŋ˧˥tsɨ` (no tie); `zh` 眼睛 = `jɛn˧˩˧t͡ɕiŋ˥` (tie) but `zh_db` = `jɛn˧˩˧tɕiŋ˥` (no tie); yet `zh` 吃 = `ʈʂʰɨ˥` carries **no** tie on the retroflex affricate
- **Expected:** one consistent convention — either tie all affricates (`t͡s`, `t͡ɕ`, `ʈ͡ʂ`) or none
- **Why:** Chinese has a three-way affricate contrast (dental [ts]/[tsʰ], palatal [tɕ]/[tɕʰ], retroflex [ʈʂ]/[ʈʂʰ]). Mixing tied and untied notation within the same variety, and between `zh` and its clone `zh_db`, is an internal-consistency defect. Duanmu (2007) §2 treats these uniformly as single segments; the dataset should pick one notation.

### 4. `zh` — eye — 睛 in 眼睛 is the neutral tone, not full Tone 1
- **File:** `words/eye.js` line 71
- **Current:** `["眼睛", "jɛn˧˩˧t͡ɕiŋ˥"]`
- **Expected:** `["眼睛", "jɛn˧˥t͡ɕiŋ]` (neutral 2nd syllable; 眼 surfaces as Tone 2 by T3 sandhi) or, if citation forms are preferred, `["眼睛", "jɛn˧˩˧t͡ɕiŋ]` with the neutral 睛 left unmarked
- **Why:** 眼睛 *yǎnjing* is a textbook neutral-tone (轻声) word — the second syllable 睛 loses its underlying Tone 1 and is realised as a short, pitch-determined neutral syllable (Duanmu 2007, ch. 11; 现代汉语词典 lemmatises it 眼睛 yǎn·jing with the dot). Writing `t͡ɕiŋ˥` (full high-level 55) over-specifies it as a stressed Tone 1. Compare this file's own treatment of 妈妈 `ma˥ma` and 谢谢 `ɕjɛ˥˩ɕjɛ`, where the neutral second syllable is correctly left tone-less.

### 5. `zh` — hello — 你好 is the canonical T3+T3 → T2+T3 sandhi case, given only in citation form with no note
- **File:** `words/hello.js` line 71
- **Current:** `["你好", "ni˧˩˧xaʊ̯˧˩˧"]`
- **Expected:** surface `["你好", "ni˧˥xaʊ̯˧˩˧"]` (or keep citation but flag the sandhi)
- **Why:** 你好 *nǐhǎo* is *the* paradigm example of third-tone sandhi: a Tone 3 before another Tone 3 raises to Tone 2 (35), so the actual pronunciation is [ni˧˥ xau˧˩˧], never [ni˧˩˧ xau˧˩˧] (Duanmu 2007 §11.4; Chao 1968 §2.6). Other Mandarin rows here (`zh_cd`, `zh_km`, `zh_xa` etc.) likewise give two stacked dipping tones. As the single most cited sandhi word in the language, leaving it in unmarked double-citation form misrepresents the spoken form.

### 6. `zh` — moon — 亮 written with [lj] glide cluster; coda/medial notation
- **File:** `words/moon.js` line 71
- **Current:** `["月亮", "ɥɛ˥˩ljɑŋ˩"]`
- **Expected:** `["月亮", "ɥɛ˥˩liɑŋ]` (medial [i], neutral 亮)
- **Why:** Two points. (a) 亮 *liàng* in 月亮 *yuèliang* is neutral-toned (现代汉语词典: 月亮 yuè·liang), so the `˩` tone-digit again over-marks a 轻声 syllable that should be left unmarked or written as the low neutral allotone. (b) Standard Chinese analyses the high front element of *liang* as a prenuclear glide/medial [i] within [liɑŋ], not a consonantal [j] forming an onset cluster [lj]; Duanmu (2007) §3 explicitly rejects true onset clusters in the standard. The onset 月 = [ɥɛ] is correctly transcribed.

### 7. `dng` — all words — Dungan tone is entirely missing from the IPA
- **File:** `words/*.js` (dng rows): `water.js:757` `["щүй","ɕy"]`, `fire.js:756` `["хуә","xuə"]`, `sun.js:756` `["жѳтў","ʐətʰu"]`, `mother.js:756` `["ма","ma"]`, `eat.js:750` `["чы","tʂʰɨ"]`, etc.
- **Current:** IPA with no tone letters at all (`ɕy`, `xuə`, `ʐətʰu`, `ma`, `tʂʰɨ` …)
- **Expected:** add Dungan tone letters, e.g. 水 ~ [ɕy˨˩] / 火 [xuə˨˩] etc. per the variety's three-tone system
- **Why:** Dungan (东干语) is a tonal Mandarin variety — the Gansu/Shaanxi-based dialects underlying it have a reduced **three**-tone system (I ˨˦, II ˥˩, III ˨˩ in the standard descriptions; Rimsky-Korsakoff Dyer; 海峰 on 东干语声调). Every other Mandarin row in this dataset carries Chao tone-letters; the `dng` rows alone are toneless, which is a systematic under-specification, not a property of the language.

### 8. `dng` — sun — Cyrillic surface ↔ IPA segment mismatch (тў vs tʰu)
- **File:** `words/sun.js` line 756
- **Current:** `["жѳтў", "ʐətʰu"]`
- **Expected:** `["жѳтў", "ʐ̩tʰu]` (or revise the vowel) plus a tone — see #7
- **Why:** The surface 日头 *žѳtw* uses Dungan ⟨ѳ⟩ for the syllabic/apical vowel of 日 (the 止-shè apical), but the IPA renders it as a mid schwa [ə]; the apical vowel of 日 in NW Mandarin is the retroflex syllabic [ʐ̩]/[ɻ̩], not [ʐə]. The same syllable is transcribed [ʐʅ]/[ʐɿ]/[ʐɨ] in the `zh_tj`, `zh_lz`, `zh_xa` rows of this very word, so [ʐə] here is internally inconsistent.

### 9. `zh_wh` — sun — 阳 lacks its velar nasal coda (ian for iaŋ)
- **File:** `words/sun.js` line 1074
- **Current:** `["太阳", "tʰai˥˧ian˨˩˧"]`
- **Expected:** `["太阳", "tʰai˥˧iaŋ˨˩˧"]`
- **Why:** 阳 *yáng* has the rime -ang [-iɑŋ] with a velar nasal coda in all Mandarin including Wuhan. The transcription `ian` gives an alveolar -n coda, collapsing 阳 [iaŋ] with e.g. 盐 [ian]. The parallel `zh_wh` moon row (`words/moon.js:1068` `yɛ˨˩˧lian`) shows the same -ŋ→-n slip on 亮 *liàng*. Wuhan does *not* merge -n/-ŋ in these rimes (赵元任 *湖北方言调查报告*), so the nasal should be [ŋ].

### 10. `zh_xa` — water — surface 水 with IPA [fei] needs the apical/retroflex justification, and is inconsistent with the dataset's own NW forms
- **File:** `words/water.js` line 424
- **Current:** `["水", "fei˥˧"]`
- **Expected:** `["水", "fei˥˧"]` is defensible **only** with documentation; cf. neighbouring rows
- **Why:** This is flagged for verification, not as a certain error: Xi'an's labiodental reflex of 水 *shuǐ* (ʂu- → f-/pf-) is real and well known, and 树 is likewise given as `fu˥˥` here. But note that Lanzhou (`zh_lz`) keeps 水 as `sui˥˧` and 树 as `sɨ˨˦` — i.e. de-retroflexed but *not* labiodentalised. The two NW rows therefore encode different sound-change stages; the reviewer should confirm the Xi'an [f-] reflex against 张维佳's 西安方音 data rather than leave it to read as a typo for [sui].

### 11. `zh_jn` — eat — apical-vowel symbol [ʅ] after a retroflex initial
- **File:** `words/eat.js` line 415 (and the duplicate at 455)
- **Current:** `["吃", "tʂʰʅ˨˩˧"]`
- **Expected:** `["吃", "tʂʰʐ̩˨˩˧"]` (or the dataset's chosen retroflex-apical symbol, used consistently)
- **Why:** The vowel of 吃 after the retroflex affricate [tʂʰ] is the **retroflex** apical vowel, for which IPA uses [ʐ̩]/[ɻ̩]; the symbol [ʅ] (Karlgren/Chao sinological letter for the retroflex apical) is acceptable sinological practice, but the dataset mixes conventions wildly for this exact slot: `zh` = `ʈʂʰɨ`, `zh_db` = `ʈʂʰɨ`, `zh_kf` = `tʂʰʅ`, `zh_nj` = `tʂʰʔ`, `zh_xa` = `tʂʰɿ`, `dng` = `tʂʰɨ`. Note `zh_xa` even uses [ɿ] (the *dental* apical letter) after a retroflex initial, which is contradictory. Pick one apical-vowel notation across the Mandarin rows (Duanmu 2007 §2 writes [ɻ̩]).

### 12. `zh_nj` — eat — onset retroflex but rime reduced to a bare glottal stop
- **File:** `words/eat.js` line 353 (dup 362)
- **Current:** `["吃", "tʂʰʔ˥"]`
- **Expected:** `["吃", "tʂʰʅʔ˥"]` (apical vowel + glottal-stop checked coda)
- **Why:** Nanjing keeps the 入聲 (entering-tone, checked) category with a final glottal stop, which is correctly shown. But `tʂʰʔ` has *no vowel nucleus at all* — the retroflex affricate is followed directly by [ʔ]. Every syllable needs a syllabic nucleus; the apical vowel ([ʅ]/[ʐ̩]) is missing before the glottal stop. Compare `zh_nj` 一 = `iʔ˥` and 喝 = `xəʔ˥`, which correctly retain a nucleus before [ʔ].

### 13. `zh_lz` (Lanzhou) — Tone 1 marked as mid-level [33] across the board
- **File:** `words/mother.js` line 755 (`ma˧˧`), `words/cat.js` line 749 (`mau˧˧`), `words/eat.js` line 749 (`tʂʰɨ˧˧`), `words/one.js` line 755 (`ji˧˧`)
- **Current:** Tone-1 syllables consistently `˧˧` (33)
- **Expected:** verify against Lanzhou's documented Tone 1
- **Why:** Flagged for consistency-checking: Lanzhou (兰州话) 陰平 is usually described as a mid-low or low value, but the cluster of `˧˧` here is suspiciously uniform and identical to the Tianjin pattern's neighbour treatment. The reviewer should confirm the [33] value against 张文轩's 兰州方言 tone table; if Lanzhou 陰平 is actually [31]/[level-low], the `˧˧` rows are systematically off. (This is a verification flag, not a certain error.)

### 14. `zh` — drink — vowel of 喝 should be back unrounded [ɤ], confirm it is not [ə]
- **File:** `words/drink.js` line 71
- **Current:** `["喝", "xɤ˥"]`
- **Expected:** `["喝", "xɤ˥"]` — correct; noted here only to contrast with the regional rows
- **Why:** The standard `zh` value [xɤ] is right (Pinyin ⟨e⟩ = the back unrounded mid vowel [ɤ], Duanmu 2007 §2; Lee & Zee 2003). I record it because several regional rows render 喝 as [xo] (`zh_sc` `xo˧˥`, `zh_cd` `xo˨˩`, `zh_km` `xo˦˦`, `zh_cq` `xo˥`) — that rounded [o] is a genuine SW-Mandarin feature and should stay, but `zh_lz` gives `xɛ˧˧` (front [ɛ]), which is an outlier worth confirming against Lanzhou data rather than being a copy error from a different rime.

### 15. `zh` — one — Tone-1 [55] given, but 一 *yī* almost never surfaces in citation Tone 1 (sandhi note absent)
- **File:** `words/one.js` line 71
- **Current:** `["一", "i˥"]`
- **Expected:** `["一", "i˥"]` is the correct **citation** form; flag the heavy sandhi
- **Why:** This is the correct dictionary/citation value (一 *yī*, 陰平 55). I flag it for the same reason as #5: 一 is, with 不, the most sandhi-active morpheme in the language (→ Tone 2 before Tone 4, → Tone 4 before Tones 1/2/3; Duanmu 2007 §11.5). A bare `i˥` with no accompanying note risks the same misread as 你好. If the dataset's policy is citation-only this is fine; the consistency point is that the policy be stated, because elsewhere (e.g. `zh_jn` 一 = `i˨˩˧`, a Tone-3-shaped value) regional rows are giving non-citation contours.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
