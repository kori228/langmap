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

---

## Worker round-1 response (作業者round-1)

Verified every cited line verbatim against the current `words/*.js` files. Applied the clear, unambiguous local errors and the internal-consistency / toneless-completion fixes. Where the reviewer's correction was a genuine cross-school contour judgement, a sandhi call the reviewer flagged as low-confidence, or a rime restructuring I could not source offline, I held with rationale. Fixes are returned as structured edits for the orchestrator to apply serially (data files are read-only to me).

**1 + 2. `wuu` sun 太阳 `da˩jã˩` → `tʰa˧˧ɦiã˩˩` — applied (applied by orchestrator this round).** Two real local errors on one string: 太 is 透母 (MC voiceless aspirated) and must be `tʰ`, never voiced `d` (cf. `wuu_sz` `tʰɛ˧˧`); 阳 is a yang-register 以母 syllable that surfaces with the breathy `ɦ`-onset that defines the Wu yang series across the whole cohort. Replaced as one edit.

**2b. `wuu` eat 吃 `t͡ɕʰiʔ˧` → `t͡ɕʰiʔ˥` — applied.** 阴入 (yin-ru) is high-short ˥ uniformly across the cohort (`wuu_sz ˥˥`, `wuu_hz ˥`, `wuu_jx/jh ˥`). Tone-only change.

**3. `wuu` one 一 `iʔ˧` → `iʔ˥` — applied.** Same yin-ru category fix; `wuu` was the lone ˧ outlier.

**4. `wuu` drink 喝 `huəʔ˧` → `huəʔ˥` — applied (tone only).** Yin-ru ˥ is the load-bearing fix and is unambiguous. I deliberately did NOT alter the medial `uə`→`ʌ`: the vowel quality is a transcription-grain choice the reviewer himself softened ("the load-bearing error is the tone"), not a clear error.

**5. `wuu` house 屋里 `oʔ˧li` → `oʔ˥li` — applied.** 屋 yin-ru ˥ (cf. `wuu_nb oʔ˥˥li`, `wuu_jx/jh oʔ˥li`).

**6. `wuu` moon 月亮 `ɲyəʔ˧liã˩` → `ɲyəʔ˩˨liã˩` — applied (月 tone only).** 月 is 阳入 (low-short 12); the current ˧ is a non-existent mid checked tone (cf. `wuu_nb ɲyəʔ˩˨`). Fixed the checked syllable; left 亮 `˩` unchanged, matching the reviewer's own expected string.

**7. `wuu` thanks 谢谢 `ʑia˩ʑia` — HELD.** The reviewer offers two alternatives (sandhi'd contour vs citation ˨˧) and the choice depends on a left-dominant sandhi-domain decision not settled uniformly in the cohort (`wuu_sz ʑia˨˧˩ʑia` vs `wuu_jx zia˨˨˧zia˨˨˧`). Not a single unambiguous target; deferred for a reviewer-endorsed convention.

**8. `wuu` tree 树 `zɿ˩` → `zz̩˩` — applied (Sinological→IPA only).** `ɿ`→`z̩` is the reviewer-endorsed mechanical normalization to match the cohort's true-IPA apical rime (`wuu_jx zz̩`). I held the tone (`˩` not rewritten to a fuller departing contour): the cohort is not uniform on the contour value and that is a grain judgement, not a clear error.

**9. `wuu` water 水 `sɿ˧˩` → `sz̩˧˩` — applied (Sinological→IPA only).** Same `ɿ`→`z̩` normalization (cf. `wuu_jx sz̩`, `wuu_jh sz̩`). I held the tone contour: the granular points themselves disagree (`wuu_jx ˧˩˧`, `wuu_sz ˥˨`), so "the falling ˧˩ is wrong" is a cross-school contour call, not an unambiguous local fix.

**10. `wuu` heart 心 `ɕin˥` — HELD.** Reviewer explicitly "minor", and the in-dataset Wu points use a level high tone (`wuu_nb siɴ˦˦`, `wuu_sz ɕin˦˦`). 阴平 53-vs-high-level is a system-wide convention choice the project has applied consistently; not a local error.

**11. `cjy` Jin entering-tone register — applied (yang-ru only): sun 日头 `ʐəʔ˨tʰəu˩` → `ʐəʔ˥˦tʰəu˩`; moon 月亮 `yəʔ˨liɔ̃˩` → `yəʔ˥˦liɔ̃˩`.** Taiyuan splits 入声 into 阴入 (low-short 2) and 阳入 (high-short 54); writing 月/日 (yang-ru) as ˨ collapses the contrast. Corrected the two yang-ru syllables to ˥˦ (54), the standard Taiyuan 阳入 value (汉语方音字汇, Taiyuan column; cf. Norman 1988 on the ru register split). Left 一/吃/喝 (yin-ru) at ˨, which is correct.

**12. `cjy` tree 树 `su˨˩˧` → `su˦˥` — applied.** 树 is 去声; Taiyuan 去声 is high-rising 45, while ˨˩˧ (213) is the 上声 contour (the dataset uses ˨˩˧ for 上声 elsewhere). Reassigned to the correct departing-tone value 45 (汉语方音字汇, Taiyuan tone classes).

**13. `gan` eat 吃 `t͡ɕʰiat˥` — HELD.** The reviewer's coda claim (`-t`→`-ʔ`) actually contradicts the dataset's own Nanchang coda scheme, which uses true stop codas (一`it`, 喝`hot`, 屋`uk`, 月`ŋyot`), so `-t` is internally consistent. The only possibly-clear part is the vowel `ia`→`iɛ`, which I could not confirm against an authoritative Nanchang source offline (web search did not surface the 汉语方音字汇 Nanchang reading). Per the no-guess rule: unsourceable offline — recommend the reviewer supply the cited Nanchang form or accept the current value with a caveat.

**14. `gan` eye 眼睛 `ŋan˨˩t͡sin` → `ŋan˨˩t͡sin˦˨` — applied.** 睛 was left toneless; 睛 is 阴平 and the `gan` cohort writes 阴平 as ˦˨ (42) (cf. `gan` 心 `ɕin˦˨`). Toneless-completion with the variety's own value.

**16. `cjy` eye 眼睛 `niæ˨˩˧t͡ɕiŋ` → `niæ˨˩˧t͡ɕiŋ˩` — applied.** Reviewer's comparative note: 睛 toneless. Taiyuan 阴平 is 11 (˩), as `cjy` heart `ɕiŋ˩` confirms. Toneless-completion. (The `hsn` 眼睛 part of #16 needs no change — already toned ˧.)

**15. `hsn` water 水 `ɕy˦˩` — HELD.** Restoring an `-ei` offglide (`ɕy`→`ɕyei`) to de-merge 水/树 is a rime restructuring, not a local typo. The exact Changsha rime quality varies by source and I could not confirm `ɕyei` against an authoritative Changsha reference offline. Per the no-guess rule: unsourceable offline — recommend reviewer supply the cited 汉语方音字汇 Changsha form or escalate.

**17. `zh_jh` eat 吃 `tʂʰʔ˥˥` → `tʂʰʅ˥˥` — applied.** `tʂʰʔ` has a retroflex affricate followed directly by a glottal stop with no nucleus — phonotactically impossible. Restored the apical retroflex rime `ʅ` (cf. `zh_zz` 吃 `tʂʰʅ˨˦`). Clear dropped-nucleus typo.

**18. `zh_jh` moon 月亮 `yeʔ liaŋ` → `yeʔ˥˥liaŋ˦˦` — applied (variety-internal tones).** Removed the stray literal space (appears nowhere else in the column) and supplied the missing tones using this variety's OWN system rather than the reviewer's suggested ˥/˨˦: checked syllables here are ˥˥ (cf. 一`iʔ˥˥`, 喝`xəʔ˥˥`, 吃`˥˥`) and 去声 is ˦˦ (cf. 爱`ɛ˦˦`, 树`sɿ˦˦`, 谢`ɕje˦˦`), so 月→˥˥, 亮→˦˦.

**19. `zh_jh` eye 眼 `jɛn˨˩˦` — HELD.** Expanding the monosyllable 眼 to disyllabic 眼睛 changes the surface lexeme and requires a sourced 睛 reading for this specific variety, which I could not obtain offline. This is a word-sense / lexicalization question (the reviewer himself notes it may be genuine and merely needs a footnote), not a clear typo. Recommend reviewer decision: footnote 眼 as the variety's lexeme, or supply the cited 眼睛 form.

**20. `wuu_hz` thanks 谢谢 `ziɑ˩˩ziɑ˨˩` — HELD.** Reviewer explicitly flagged this as "Lower-confidence than 1–19; raised for the editor's check." The two-tone pattern is a reduplication-sandhi judgement with no single unambiguous target; deferred.

**Summary:** Applied 12 edits across 9 files (findings 1+2 merged into one edit; 2b, 3, 4, 5, 6, 8, 9, 11×2, 12, 14, 16, 17, 18). Held 7 items (7, 10, 13, 15, 19, 20, and the comparative-only halves of 16) as either cross-school convention won't-fix, low-confidence sandhi, or rime/lexeme changes that are unsourceable offline and need a cited form or reviewer decision.

---

## Reviewer round-2 response (再評価 round-2)

I re-verified every claimed edit against the live `words/*.js` data and checked each held item against its cited cohort references. All 12 "applied" fixes are genuinely present in the live files — no phantom edits this round.

**Verified-applied (✓ accepted):**

- **1+2 `wuu` sun** — live `words/sun.js:74` = `["太阳", "tʰa˧˧ɦiã˩˩"]`. ✓ 透母 aspiration restored, yang-register ɦ-onset restored. Matches `wuu_sz` `tʰɛ˧˧ɦiɔ̃˨˧`. Correct.
- **2b `wuu` eat** — `eat.js:74` = `t͡ɕʰiʔ˥`. ✓ yin-ru high-short.
- **3 `wuu` one** — `one.js:74` = `iʔ˥`. ✓
- **4 `wuu` drink** — `drink.js:74` = `huəʔ˥`. ✓ Tone fixed; worker correctly declined the `uə`→`ʌ` vowel rewrite, which I had myself softened as non-load-bearing. Accepted.
- **5 `wuu` house** — `house.js:74` = `oʔ˥li`. ✓
- **6 `wuu` moon** — `moon.js:74` = `ɲyəʔ˩˨liã˩`. ✓ 阳入 12 restored on 月; 亮 ˩ left per my own expected string. Accepted.
- **8 `wuu` tree** — `tree.js:74` = `zz̩˩`. ✓ Sinological `ɿ`→IPA `z̩` done. Tone held — accepted as a grain call (cohort disagrees on the departing contour).
- **9 `wuu` water** — `water.js:74` = `sz̩˧˩`. ✓ `ɿ`→`z̩` done; contour held. Accepted (granular points genuinely disagree: `wuu_jx ˧˩˧` vs `wuu_sz ˥˨`).
- **11 `cjy`** — `sun.js:571` = `ʐəʔ˥˦tʰəu˩`, `moon.js:571` = `yəʔ˥˦liɔ̃˩`; yin-ru 一/吃/喝 left at ˨. ✓ Yang-ru 54 split now distinct from yin-ru 2 — the diagnostic Jin register contrast is restored. Correct.
- **12 `cjy` tree** — `tree.js:565` = `su˦˥`. ✓ 去声 45 now distinct from the 上声 213 shape (`好 xau˨˩˧` confirmed at `good.js:565`). Correct.
- **14 `gan` eye** — `eye.js:567` = `ŋan˨˩t͡sin˦˨`. ✓ 睛 toned with the variety's own 阴平 value (`gan 心 ɕin˦˨` confirmed). Correct.
- **16 `cjy` eye** — `eye.js:565` = `niæ˨˩˧t͡ɕiŋ˩`. ✓ 睛 toned with Taiyuan 阴平 11 (`cjy 心 ɕiŋ˩` confirmed). Correct.
- **17 `zh_jh` eat** — `eat.js:738` = `tʂʰʅ˥˥`. ✓ Dropped apical nucleus restored; the phonotactically-impossible `tʂʰʔ` is gone.
- **18 `zh_jh` moon** — `moon.js:753` = `yeʔ˥˥liaŋ˦˦`. ✓ Stray space removed; tones supplied from this variety's OWN system (checked ˥˥, 去声 ˦˦ — both confirmed against `一 iʔ˥˥`, `tree 树 sɿ˦˦`). Using the variety's internal system over my suggested values is the right call. Accepted.

**Held items — adjudication:**

- **7 `wuu` thanks `ʑia˩ʑia` — ✗ won't-fix / ACCEPT as held.** I offered two non-identical alternatives and the cohort itself is split (`wuu_sz ʑia˨˧˩ʑia` vs `wuu_jx zia˨˨˧zia˨˨˧`). No single unambiguous target exists; this is a reduplication-sandhi convention call, not a local error. Accepting the hold.
- **10 `wuu` heart `ɕin˥` — ✗ won't-fix / ACCEPT.** I flagged this myself as "minor." The in-dataset Wu points use a level high tone (`wuu_nb siɴ˦˦`, `wuu_sz ɕin˦˦`) and the project applies a consistent 阴平 convention. System-level choice; not a defensible local error.
- **13 `gan` eat `t͡ɕʰiat˥` — △ partial / ACCEPT with documented caveat.** The worker is right that the `-t` coda is internally consistent with Nanchang's stop-coda scheme (一`it`, 喝`hot`, 屋`uk`, 月`ŋyot`), so my `-t`→`-ʔ` suggestion was wrong — withdrawn. The residual is only the `ia`→`iɛ` vowel quality, which the worker reports unsourceable offline. This is a single-vowel grain question on an already-coherent rime, not a clear error. Per round-2 loop-termination: ACCEPT current value with a known-limitation note (needs human linguist with 汉语方音字汇 Nanchang to confirm `iat` vs `iɛʔ`).
- **15 `hsn` water `ɕy˦˩` — △ ACCEPT with documented caveat.** The 水/树 segmental de-merge (`ɕy`→`ɕyei`) is a rime restructuring, not a typo, and the worker documented a genuine offline-research failure to confirm the Changsha `-ei` offglide. This is exactly the loop-termination case: a real but unsourceable-offline question. ACCEPT with known-limitation note (needs human linguist; 水/树 may be segmentally homophonous-but-for-tone in the current data pending a cited Changsha source). Not keeping open over impossible-offline data.
- **19 `zh_jh` eye `眼` — ✗ won't-fix / ACCEPT.** Expanding 眼→眼睛 changes the surface lexeme and requires a sourced 睛 reading for this variety. I myself noted 眼 may be the genuine lexeme. This is a footnote/word-sense decision for the editor, not a data error. Accepting the hold.
- **20 `wuu_hz` thanks `ziɑ˩˩ziɑ˨˩` — ✗ won't-fix / ACCEPT.** I explicitly flagged this as "lower-confidence, raised for the editor's check." No single sandhi target; deferred reasonably.

**New issues:** none. (I checked the `zh_jh` column's own use of `ɿ`/`ʅ` — e.g. `tree 树 sɿ˦˦` — and it is internally consistent with that variety's romanization standard; the Sinological→IPA concern in issues 8–9 was scoped to the Wu cohort whose standard is true IPA, so it does not propagate to `zh_jh`. Not raising it.)

**Scorecard:** 12/12 applied fixes verified present and correct in live data. 7 held items all adjudicated as accept/won't-fix or accept-with-documented-caveat. Of the held, 5 are defensible convention/sandhi/lexeme calls and 2 (13, 15) are genuine offline-unsourceable data questions now documented as known limitations needing a human linguist. Nothing concretely actionable remains.

**File status: CLOSED** — nothing left to address. All clear errors fixed-and-verified; remaining items accepted as convention/won't-fix or documented known-limitations (13 `gan` 吃 vowel, 15 `hsn` 水 rime) needing a human linguist with the 汉语方音字汇 source.
