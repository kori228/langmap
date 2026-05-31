# Wordmap review #53 — Sinitic topolects (Wu / Jin / Xiang / Gan) specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a descriptive phonologist of the non-Mandarin Sinitic topolects, with primary fieldwork and reading focus on the Wu group (吴语) — Shanghainese (Taihu/北部吴语), Suzhou, Ningbo, Hangzhou, Jiaxing, Jinhua, and Wenzhou (Oujiang) — plus the Jin (晋语), Xiang (湘语), and Gan (赣语) groups. For this review my anchor references are: Jerry Norman, *Chinese* (Cambridge Language Surveys, 1988), especially ch. 8–9 on the Wu register split and the synchronic reflexes of the Middle Chinese voicing contrast; Qian Nairong (錢乃榮), *Dāngdài Wúyǔ yánjiū* / *Shànghǎihuà yǔfǎ* and his Wu-dialect tonological surveys, for the Shanghai and Suzhou tone categories and the 阴/阳 (yin/yang) register correlation with onset voicing; the *Hànyǔ Fāngyán Cíhuì* and *Hànyǔ Fāngyīn Zìhuì* (汉语方音字汇) for citation-tone values and segmental readings of Taiyuan (Jin), Changsha (Xiang), and Nanchang (Gan); and Cao Zhiyun's *Hànyǔ Fāngyán Dìtú Jí* for cross-point comparison. The diagnostic spine of this review is the Middle Chinese **voiced-obstruent → Wu voiced/breathy onset** correspondence and the **checked (入声 / ru) tone register split** (阴入 high-short vs 阳入 low-short), where the flagship `wuu` (Shanghainese) entry is internally inconsistent with the granular Wu points (`wuu_nb`, `wuu_sz`, `wuu_hz`, `wuu_jx`, `wuu_jh`) that follow proper IPA and category-correct tone letters.

---

## Issues found

### 1. `wuu` — sun — 太 transcribed as voiced /d/ (should be aspirated /tʰ/)
- **File:** `words/sun.js` line 74
- **Current:** `["太阳", "da˩jã˩"]`
- **Expected:** `["太阳", "tʰa˧˧ɦiã˩˩"]`
- **Why:** 太 is a Middle Chinese voiceless aspirated 透母 syllable; in Shanghainese it is /tʰa/ (yin-departing), never a voiced /d/. A voiced unaspirated /d/ onset would imply a 定母 (MC voiced) source, which 太 does not have. Compare `wuu_sz` 太阳 `tʰɛ˧˧ɦiɔ̃˨˧` (Suzhou), which correctly keeps aspiration on 太. The `da˩` is a straightforward onset error (Norman 1988 §8 on the MC voicing register split; Qian, Suzhou/Shanghai tone tables).

### 2. `wuu` — sun — 阳 missing its voiced /ɦ/ onset and yang-register tone
- **File:** `words/sun.js` line 74
- **Current:** `["太阳", "da˩jã˩"]`
- **Expected:** `["太阳", "tʰa˧˧ɦiã˩˩"]`
- **Why:** 阳 is a MC 以母 yang-register syllable; in Taihu Wu it surfaces with the voiced/breathy glottal onset /ɦ/ (the hallmark "voiced" series), as every other Wu point in this dataset writes it — `wuu_sz` `ɦiɔ̃˨˧`, `wuu_jx`/`wuu_jh` use ɦ-onsets for yang syllables. Writing a bare `jã` drops the very feature (onset voicing) that defines the yang register and that this review series is meant to test.

### 2b. `wuu` — eat — yin-ru checked tone given as mid ˧ instead of high ˥
- **File:** `words/eat.js` line 74
- **Current:** `["吃", "t͡ɕʰiʔ˧"]`
- **Expected:** `["吃", "t͡ɕʰiʔ˥"]`
- **Why:** 吃 is 阴入 (upper/yin checked). In Shanghainese the yin-ru citation tone is a high-short 5 (˥ʔ), as the granular Wu points uniformly show: `wuu_sz` `t͡ɕʰiɪʔ˥˥`, `wuu_hz` `tɕʰiʔ˥`, `wuu_jx`/`wuu_jh` `tɕʰiɪʔ˥`. A mid ˧ for a yin-ru syllable is category-wrong (Qian, Shanghai tone inventory: 阴入 5).

### 3. `wuu` — one — yin-ru ˧ should be ˥
- **File:** `words/one.js` line 74
- **Current:** `["一", "iʔ˧"]`
- **Expected:** `["一", "iʔ˥"]`
- **Why:** Same systematic error. 一 is yin-ru; every other Wu point gives high-short ˥ (`wuu_sz` `iɪʔ˥˥`, `wuu_hz` `iʔ˥`, `wuu_jx`/`wuu_jh` `iɪʔ˥`). The flagship `wuu` value ˧ is the lone outlier and is wrong for the yin-ru category.

### 4. `wuu` — drink — yin-ru ˧ should be ˥
- **File:** `words/drink.js` line 74
- **Current:** `["喝", "huəʔ˧"]`
- **Expected:** `["喝", "hʌʔ˥"]`
- **Why:** 喝 is yin-ru; high-short ˥ is required (`wuu_sz` `xəʔ˥˥`, `wuu_hz` `xəʔ˥`). The ˧ is the same checked-tone-register defect; the medial `uə` is also heavier than the other points' simple `ə`, but the load-bearing error is the tone.

### 5. `wuu` — house — yin-ru ˧ should be ˥
- **File:** `words/house.js` line 74
- **Current:** `["屋里", "oʔ˧li"]`
- **Expected:** `["屋里", "oʔ˥li"]`
- **Why:** 屋 is yin-ru; `wuu_jx`/`wuu_jh` correctly write `oʔ˥li`. The ˧ is again a miscategorized yin-ru.

### 6. `wuu` — moon — 月 (yang-ru) given mid ˧ and a low ˩ on 亮 inconsistent with register
- **File:** `words/moon.js` line 74
- **Current:** `["月亮", "ɲyəʔ˧liã˩"]`
- **Expected:** `["月亮", "ɲyəʔ˩˨liã˩"]`
- **Why:** 月 is 阳入 (lower/yang checked), which in Shanghainese is a low-short 12 (˩˨), as `wuu_nb` `ɲyəʔ˩˨liaŋ` and `wuu_jx` `ɦyøʔ˩˨liaŋ` show. The current ˧ neither matches yin-ru (˥) nor yang-ru (˩˨); it is a non-existent mid checked tone. (Norman 1988 on the ru-tone register split; Qian Wu tables.)

### 7. `wuu` — thanks — second 谢 carries no tone; yang-departing under-specified
- **File:** `words/thanks.js` line 74
- **Current:** `["谢谢", "ʑia˩ʑia"]`
- **Expected:** `["谢谢", "ʑia˨˧ʑia"]`
- **Why:** 谢 is a MC 邪母 yang-departing syllable. In a reduplicated 谢谢 Wu applies left-dominant tone sandhi where the whole disyllable is governed by the first syllable's category, so a bare ˩ on a yang-departing first syllable is too impoverished — the yang-departing citation contour in Shanghai is a rising 13/23 (˨˧), as `wuu_jx` `zia˨˨˧` and `wuu_hz` `ziɑ` patterns confirm. Either give the sandhi'd contour or the citation ˨˧; the lone low ˩ misrepresents the category.

### 8. `wuu` — tree — Sinological `ɿ` used where the dataset's IPA standard is `z̩`/`ʮ`
- **File:** `words/tree.js` line 74
- **Current:** `["树", "zɿ˩"]`
- **Expected:** `["树", "zz̩˨˩˧"]`
- **Why:** `ɿ` is a Sinological (Karlgren/IPA-China) symbol, not standard IPA; the rest of the Wu cohort writes the apical voiced sibilant rime in true IPA — `wuu_jx` `zz̩`, `wuu_jh` `dzz̩`, `wuu_hz` `zʮ`. Mixing the Sinological `ɿ` into an otherwise-IPA column is exactly the romanization-scheme mismatch flagged in this review's scope. (Also: 树 is yang-departing, so a bare ˩ under-specifies the tone — cf. `wuu_jx` `zz̩˨˨˧`.)

### 9. `wuu` — water — Sinological `ɿ` + likely wrong departing-tone contour
- **File:** `words/water.js` line 74
- **Current:** `["水", "sɿ˧˩"]`
- **Expected:** `["水", "sz̩˧˦"]`
- **Why:** Two issues. (a) `ɿ` again should be IPA `z̩`/`s̩` to match `wuu_jx` `sz̩`, `wuu_jh` `sz̩`. (b) 水 is yin-rising (阴上); the Shanghai yin-rising/qu citation tone is a rising 34/35, not a falling 31 (˧˩). The granular points give rising contours (`wuu_jx` `sz̩˧˩˧`, `wuu_sz` `sɿ˥˨`); a plain falling ˧˩ is not the Shanghai 上声 shape.

### 10. `wuu` — heart — yin-level transcribed `˥` is defensible but inconsistent apical handling note
- **File:** `words/heart.js` line 74
- **Current:** `["心", "ɕin˥"]`
- **Expected:** `["心", "ɕiɴ˥˧"]` (or `ɕin˥˨`)
- **Why:** Minor but real: Shanghai yin-level (阴平) is a high-falling 53, not a bare high level ˥; `wuu_nb` writes `siɴ˦˦` and `wuu_sz` `ɕin˦˦` (high level for those points), but for Shanghai proper the 阴平 is canonically 52/53 falling (Qian). A single ˥ tone-letter on the citation form under-specifies the contour.

### 11. `cjy` (Jin/Taiyuan) — yin-ru and yang-ru both written ˨, collapsing the entering-tone register split
- **File:** `words/one.js` line 571; `words/eat.js` line 565; `words/drink.js` line 565; `words/moon.js` line 571; `words/sun.js` line 571
- **Current:** `["一", "iəʔ˨"]`, `["吃", "t͡ʂʰəʔ˨"]`, `["喝", "xəʔ˨"]`, `["月亮", "yəʔ˨liɔ̃˩"]`, `["日头", "ʐəʔ˨tʰəu˩"]`
- **Expected:** yin-ru `iəʔ˨` / `t͡ʂʰəʔ˨` / `xəʔ˨` (2); yang-ru `yəʔ˥ʔ`-type and `ʐəʔ˥ʔ` (e.g. ˥˦) for 月/日
- **Why:** The defining Jin feature is a preserved glottal-stop 入声 that is split into 阴入 (low-short 2) and 阳入 (high-short ~54) at Taiyuan (汉语方音字汇, Taiyuan column). Here 一/吃/喝 (yin-ru) and 月/日 (yang-ru) are all given the same ˨, erasing the very register contrast that makes Jin diagnostically distinct from Mandarin. The `ʔ` retention is correctly captured; the tone register is not.

### 12. `cjy` (Jin) — 树 given the rising 213 contour instead of the departing tone
- **File:** `words/tree.js` line 565
- **Current:** `["树", "su˨˩˧"]`
- **Expected:** `["树", "su˦˥"]` (去声 ~45)
- **Why:** 树 is a 去声 (departing) word; at Taiyuan 去声 is a high rising ~45, whereas ˨˩˧ (213) is the 上声 (rising) contour. The value here borrows the 上声 shape (cf. `好` `xau˨˩˧`, correctly 上声), misassigning 树 to the wrong tone category (汉语方音字汇 Taiyuan tone classes).

### 13. `gan` (Gan/Nanchang) — 吃 with coda `-t` is the wrong checked rime
- **File:** `words/eat.js` line 567
- **Current:** `["吃", "t͡ɕʰiat˥"]`
- **Expected:** `["吃", "t͡ɕʰiɛʔ˥"]` (or `t͡ɕʰiʔ`)
- **Why:** Nanchang Gan does preserve entering-tone stop codas, but 吃 (MC 昌母 緝/質-type) is a /-ʔ/ ~ front-vowel checked syllable, not an `-iat`; the `-at` rime with low `a` is not the Nanchang reading. The neighboring 一 `it˥`, 喝 `hot˥`, 屋 `uk˥`, 月 `ŋyot˥` are coherent `-t/-k` finals, but `iat` for 吃 is an over-broad vowel. (汉语方音字汇, Nanchang.)

### 14. `gan` — eye — second syllable 睛 carries no tone
- **File:** `words/eye.js` line 567
- **Current:** `["眼睛", "ŋan˨˩t͡sin"]`
- **Expected:** `["眼睛", "ŋan˨˩t͡sin˦˨"]`
- **Why:** 睛 is a 阴平 syllable in Nanchang and should bear a tone letter; the cohort's `gan` 心 is `ɕin˦˨` (阴平 42), so 睛 should likewise carry ˦˨ (or the sandhi value), not be left toneless. A bare `t͡sin` with no tone is an incomplete transcription.

### 15. `hsn` (Xiang/Changsha) — 水 reduced to `ɕy`, losing the /yei/ rime and merging with 树
- **File:** `words/water.js` line 573; `words/tree.js` line 566
- **Current:** `["水", "ɕy˦˩"]` and `["树", "ɕy˩˧"]`
- **Expected:** `["水", "ɕyei˦˩"]` (树 stays `ɕy˩˧`)
- **Why:** In Changsha Xiang 水 is /ɕyei/ (a 止摄 syllable with the -ei offglide) while 树 is /ɕy/ (遇摄); writing both as bare `ɕy` makes them segmentally identical except for tone, which is not the Changsha reading. 水 needs its diphthongal rime restored (汉语方音字汇, Changsha; the two words are not homophonous segmentally).

### 16. `hsn` — eye — second syllable 睛 carries no tone
- **File:** `words/eye.js` line 566
- **Current:** `["眼睛", "ŋan˦˩t͡ɕin˧"]`
- **Expected:** consistent — fine if ˧ is intended for 睛
- **Why:** (Comparative note rather than an error.) `hsn` correctly tones 睛 as `t͡ɕin˧`, which highlights that the `gan` and `cjy` 眼睛 entries (Issues 14, and `cjy` `t͡ɕiŋ` toneless at `words/eye.js` line 565) are the inconsistent ones. Flagging `cjy` 眼睛 `niæ˨˩˧t͡ɕiŋ` (line 565): 睛 is toneless and should be `t͡ɕiŋ˩` (阴平 11 at Taiyuan) for parity.

### 17. `zh_jh` — eat — retroflex syllable written with no vowel/syllabic nucleus
- **File:** `words/eat.js` line 747
- **Current:** `["吃", "tʂʰʔ˥˥"]`
- **Expected:** `["吃", "tʂʰʅ˥˥"]` (or `tʂʰɿ`)
- **Why:** `tʂʰʔ` has a retroflex affricate followed directly by a glottal stop with no nucleus — phonotactically impossible. A Mandarin-leaning checked reading needs an apical retroflex vowel `ʅ`/`ɿ` (cf. `zh_zz` 吃 `tʂʰʅ˨˦`, which is well-formed). This is a typo where the apical rime was dropped.

### 18. `zh_jh` — moon — literal space inside the IPA and 亮 left toneless
- **File:** `words/moon.js` line 753
- **Current:** `["月亮", "yeʔ liaŋ"]`
- **Expected:** `["月亮", "yeʔ˥liaŋ˨˦"]`
- **Why:** The IPA string contains a literal space (`yeʔ liaŋ`) that appears nowhere else in the column, and 亮 carries no tone letter. Both are formatting/transcription defects: the entering syllable 月 needs its tone (˥-type) and 亮 (去声) needs a tone, and the stray space should be removed.

### 19. `zh_jh` — eye — surface reduced to single char 眼, breaking the 眼睛 series
- **File:** `words/eye.js` line 747
- **Current:** `["眼", "jɛn˨˩˦"]`
- **Expected:** `["眼睛", "..."]` consistent with the column
- **Why:** Every other variety in the eye file uses the disyllable 眼睛; `zh_jh` alone gives the monosyllable 眼. Either the word-sense was truncated or the gloss is inconsistent with the column. Worth aligning to 眼睛 unless the variety genuinely lexicalizes 眼 alone (which should then be footnoted).

### 20. `wuu_hz` (Hangzhou) — thanks — yang-departing reduplicant tones look transposed
- **File:** `words/thanks.js` line 403/444
- **Current:** `["谢谢", "ziɑ˩˩ziɑ˨˩"]`
- **Expected:** `["谢谢", "ziɑ˩˩ziɑ˩˩]` or `ziɑ˨˩ziɑ` (sandhi-consistent)
- **Why:** Minor consistency point within an otherwise good Hangzhou set: the two reduplicated 谢 syllables carry different tones (˩˩ then ˨˩) with no sandhi rationale given; in a left-dominant Wu sandhi domain the second copy is usually neutralized/copied, not independently re-toned. Either neutralize the second syllable or document the sandhi. (Lower-confidence than 1–19; raised for the editor's check.)

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
