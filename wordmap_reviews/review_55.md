# Wordmap review #55 — Yue (Cantonese) & Pinghua specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a phonologist and lexicographer specialising in the Yue (粵) dialect group — Guangzhou/Hong Kong prestige Cantonese, the Sei-yap (四邑) varieties (Taishan/Toisan in particular), Dongguan (莞寶) Cantonese, and the southern Guangxi varieties (Nanning Cantonese and the Pinghua continuum) — with a working command of the comparative Yue tone-category framework. For this review my primary references are the LSHK 香港語言學學會 *Jyutping* romanisation scheme (Linguistic Society of Hong Kong, 1993/2002 revision) and its canonical six-vowel-length plus stopped-rime system; Bauer & Benedict (1997) *Modern Cantonese Phonology* (Trends in Linguistics 102) for the segmental inventory, the long/short pair /aː/ vs /ɐ/, the rounded mid-front nucleus /ɵ ~ œ/, and the Chao tone-letter values of the nine citation tones (55/53, 35, 33, 21, 13, 22, 5, 3, 2); Yue-Hashimoto (1972) *Phonology of Cantonese* and the *Hong Kong Cantonese Syllabary* for tone-category assignment; for the Sei-yap data I rely on Yiu (2009) and Him Mark Lai's Taishanese descriptions documenting the characteristic voiceless lateral /ɬ/ reflex of *s-/*ɕ-; and for Pinghua/Nanning comparison the *Guangxi Yue and Pinghua* survey volumes. My checks below target: Jyutping↔IPA consistency, the six-tone vs nine-tone (entering-tone) marking, the long/short vowel contrast (aː vs ɐ), final stops -p/-t/-k, and surface-copied-into-IPA slots.

---

## Issues found

### 1. `yue` — hello — 你 nei5 mis-toned as low-falling (should be low-rising 13)
- **File:** `words/hello.js` line 72
- **Current:** `["你好", "neːi˧˩hɔːu˧˥"]`
- **Expected:** `["你好", "nei˩˧ hou˧˥"]`
- **Why:** 你 is Jyutping *nei5*, tone category 陽上 = low-rising, Chao value 13 = ˩˧. The current ˧˩ is a falling contour (the value of tone 4, 21), so the syllable is marked as the wrong tone. Note the project's own `yue_zs` entry (line 356) correctly has `nei˩˧`. (LSHK Jyutping *nei5*; Bauer & Benedict 1997 §3 tone table, 陽上 = 13.)

### 2. `yue` — hello — 好 rime over-specified as /ɔːu/; standard nucleus is /ou/
- **File:** `words/hello.js` line 72
- **Current:** `["你好", "neːi˧˩hɔːu˧˥"]`
- **Expected:** `["你好", "nei˩˧ hou˧˥"]`
- **Why:** 好 is Jyutping *hou2*; the rime is the diphthong /ou/, not a long /ɔːu/. A length mark on a mid-open /ɔː/ before the off-glide is not a Cantonese rime in the LSHK inventory. The project's `yue_zs`, `yue_dg`, `yue_nn` all give `hou˧˥` for the same word; only the prestige `yue` entry diverges. (Bauer & Benedict 1997, rime /ou/; LSHK *hou2*.)

### 3. `yue` — good — 好 rime /ɔːu/ inconsistent with all sister entries
- **File:** `words/good.js` line 72
- **Current:** `["好", "hɔːu˧˥"]`
- **Expected:** `["好", "hou˧˥"]`
- **Why:** Same word 好 *hou2* as #2. Within this single file the rime is transcribed three different ways: `yue` = ɔːu, `yue_zs/dg/nn` = ou, `yue_gz` = ɔu. The LSHK/standard value is /ou/ (e.g. 好 *hou2*, 路 *lou6*). The prestige reading should match `hou˧˥`. (LSHK Jyutping; Bauer & Benedict 1997.)

### 4. `yue_gz` — good — 好 rime /ɔu/ vs standard /ou/
- **File:** `words/good.js` line 985
- **Current:** `["好", "hɔu˧˥"]`
- **Expected:** `["好", "hou˧˥"]`
- **Why:** `yue_gz` is Guangzhou Cantonese, phonologically identical to the prestige norm for this rime. 好 *hou2* has nucleus /o/ (close-mid), not /ɔ/ (open-mid). The /ɔu/ spelling conflates the 好-rime with the distinct 好≠ rime set. Compare correct `hou˧˥` at lines 412/413. (Bauer & Benedict 1997 §2.)

### 5. `yue_gz` — hello — 你 nei5 mis-toned as high-rising 35
- **File:** `words/hello.js` line 985
- **Current:** `["你好", "nei˧˥hɔu˧˥"]`
- **Expected:** `["你好", "nei˩˧hou˧˥"]`
- **Why:** 你 *nei5* is 陽上 low-rising 13 = ˩˧, not the high-rising 35 = ˧˥ (which is tone 2, 陰上). Marking it ˧˥ makes 你 and 好 share an identical contour, erasing the 上聲 register split. Also 好 rime /ɔu/→/ou/ as in #4. (LSHK *nei5* = 13.)

### 6. `yue_ts` — water — Taishanese 水 should have voiceless lateral /ɬ/, not /l/
- **File:** `words/water.js` line 751
- **Current:** `["水", "lui˧˧"]`
- **Expected:** `["水", "ɬui˧˧"]`
- **Why:** The Sei-yap (Taishan/Toisan) hallmark is the merger of Middle Chinese *s-/*ɕ-/*sj- to the voiceless alveolar lateral fricative /ɬ/. 水 (MC *ɕ-) is the textbook example, realised [ɬui]. A plain voiced /l/ here is the reflex of a different initial series (來母 *l-) and neutralises the very feature Taishanese is famous for. The project's own `yue_ts` entries are otherwise consistent with /ɬ/ (食 `ɬik`, 手 `ɬau`, 心 `ɬim`), and the neighbouring Pinghua `cnp` reads `ɬui`. (Yiu 2009; Him Mark Lai, Taishanese phonology.)

### 7. `yue_ts` — father — second syllable 爸 missing its tone mark
- **File:** `words/father.js` line 744
- **Current:** `["阿爸", "a˧˧pa"]`
- **Expected:** `["阿爸", "a˧˧pa˥"]` (high-level)
- **Why:** The IPA leaves the second syllable *pa* completely untoned, while every other syllable in the file carries a Chao tone letter. 爸 in the kinship reduplicative/prefixed form is high-level; it must be marked (≈ ˥). An unmarked syllable is not a valid citation transcription in this dataset. (Bauer & Benedict 1997, citation-tone requirement.)

### 8. `yue_ts` — mother — second syllable 妈 missing its tone mark
- **File:** `words/mother.js` line 750
- **Current:** `["阿妈", "a˧˧ma"]`
- **Expected:** `["阿妈", "a˧˧ma˥"]` (high-level)
- **Why:** Parallel to #7: the 妈 syllable has no tone letter. 阿妈 has the high-level reading on 妈; the bare *ma* must be toned (≈ ˥) to match the rest of the corpus. (Same source.)

### 9. `yue_ts` — sun — 頭 transcribed `hau˧˧`, wrong initial and wrong tone
- **File:** `words/sun.js` line 750
- **Current:** `["日头", "ɲit˨˨hau˧˧"]`
- **Expected:** `["日头", "ɲit˨˨hau˨˩"]` (initial should be /h/ only if 頭 has lenited; otherwise /tʰau/) — at minimum the tone is wrong
- **Why:** 頭 is 陽平 (low-falling, *tau4*-category), so the tone should be a low/falling contour, not the mid-level ˧˧. Compare the prestige `yue` 頭 `tʰɐu˨˩` and `yue_gz` `tʰɐu˧˧`. The mid-level ˧˧ on a 陽平 syllable is a tone-category error; the 日 syllable `ɲit˨˨` is fine. (Yue-Hashimoto 1972, 陽平 = low register.)

### 10. `yue_ts` — thanks — 多 initial dropped: `ɔ˨˨` lacks the /t/ onset
- **File:** `words/thanks.js` line 744
- **Current:** `["多谢", "ɔ˨˨ɬɛ˧˨"]`
- **Expected:** `["多谢", "tɔ˨˨ɬɛ˧˨"]`
- **Why:** 多 is *to1* with initial /t/. The first syllable is transcribed as a bare vowel `ɔ`, dropping the onset entirely — almost certainly a typo (the /t/ fell out). Every sister reading keeps the onset: `yue` `tɔː`, `yue_zs` `tɔ`, `yue_dg` `tɔː`, `yue_gz` `tɔ`. The high-level/陰平 tone is also questionable (多 *to1* is high-level ˥, not ˨˨), but the missing initial is the hard error. (LSHK *do1*.)

### 11. `yue_dg` — water — Dongguan 水 /sui/ vs /sɵy/: front-rounded nucleus lost
- **File:** `words/water.js` line 419
- **Current:** `["水", "sui˧˥"]`
- **Expected:** `["水", "sɵy˧˥"]`
- **Why:** 水 *seoi2* has the rounded mid-central/front nucleus + front-rounded off-glide rime /ɵy/ (LSHK *eoi*). The prestige `yue` (line 72) and `yue_nn`/`yue_zs`/`yue_gz` all keep `sɵy`/`sɵi`. Rendering it as plain /sui/ collapses /ɵy/ into the unrounded /ui/ series and is not characteristic of Dongguan Cantonese (which retains the *eoi* rime). If Dongguan genuinely monophthong-shifts here it must be sourced; absent that, this looks like a fall-back to a Mandarin-style /ui/. (Bauer & Benedict 1997, rime /ɵy/.)

### 12. `yue_zs` — heart — 心 tone marked 53 (falling) but 陰平 here is high-level
- **File:** `words/heart.js` lines 349 / 358
- **Current:** `['心', 'sɐm˥˧']`
- **Expected:** `['心', 'sɐm˥']` (or `˥˥`)
- **Why:** 心 is *sam1*, 陰平. In the Zhongshan (石岐) citation system the project elsewhere treats 陰平 stops/level syllables as high level; here the falling 53 contour is used inconsistently — note `yue_zs` 多 is `tɔ˥˧` (also 陰平) while the prestige `yue` 心 is high-level `sɐm˥`. Either the variety has a genuinely falling 陰平 (then it must be applied uniformly and sourced) or this should be ˥. Flagging the internal inconsistency. (Yue-Hashimoto 1972 tone categories.)

### 13. `yue` — heart vs sun — 陰平 marked ˥ (single letter) but elsewhere ˥˥/˥˧ — length/contour notation inconsistent
- **File:** `words/heart.js` line 72 (`sɐm˥`) vs `words/sun.js` line 72
- **Current:** heart `["心", "sɐm˥"]`; mother `["媽媽", "maː˥maː˥"]`
- **Expected:** consistent two-letter 陰平 notation, e.g. `sɐm˥˥` / `maː˥˥`
- **Why:** Hong Kong/Guangzhou 陰平 is conventionally written as level 55 (˥˥) or, for the falling allotone, 53 (˥˧). A single ˥ is ambiguous between "high" and "55". The dataset mixes one-letter ˥ (here, mother) with two-letter ˥˥ (e.g. `yue_gz` 心 `sɐm˥˥`, `yue_dg` `sɐm˥˥`). For machine-comparability the 陰平 should use a consistent two-tone-letter form. (Chao tone-letter convention; LSHK tone 1 = 55.)

### 14. `yue_nn` — love — 爱 given /ŋ/ onset; Nanning 影母 字 normally has zero/glottal onset
- **File:** `words/love.js` lines 420 / 460
- **Current:** `['爱', 'ŋɔi˧˧']`
- **Expected:** `['爱', 'ɔi˧˧']` (or with a sourced /ŋ-/ if Nanning truly has it)
- **Why:** 愛 is a 影母 (zero-initial) syllable; standard Cantonese is *oi3* [ɔːi]. The prestige `yue` (line 72) and `yue_zs`/`yue_dg`/`yue_gz` all have onsetless `ɔi`. Adding an /ŋ-/ to 愛 is the over-application of the 疑母/影母 *ng-* prothesis that affects 我/牙-type words, not 影母 words like 愛. If Nanning regularly prefixes /ŋ/ to all open-back syllables this needs an explicit source, since it contradicts the rest of the corpus. (Bauer & Benedict 1997 on ng-/zero alternation; 影母 vs 疑母 split.)

### 15. `yue_ts` — eye — 眼 nucleus short /a/ (ŋan) vs long /aː/ (ŋaːn) — length contrast
- **File:** `words/eye.js` line 744
- **Current:** `["眼", "ŋan˧˧"]`
- **Expected:** `["眼", "ŋaːn˧˧"]` (and verify tone is 陽上)
- **Why:** 眼 *ngaan5* has the LONG nucleus /aː/ before /-n/; the long/short pair /aːn/ vs /ɐn/ is phonemic in Yue. The prestige `yue` has `ŋaːn`, as do `yue_zs/dg/gz`. Writing `ŋan` (with short /a/, i.e. the /ɐ/-slot) neutralises the central length contrast that Bauer & Benedict treat as foundational. (Note: `yue_nn` line 413 `ŋan` has the same problem.) Also the 陽上 tone of 眼 should be low-rising, not mid-level ˧˧. (Bauer & Benedict 1997, /aː/ vs /ɐ/.)

### 16. `yue_nn` — eye — 眼 short /a/ vs long /aː/
- **File:** `words/eye.js` lines 413 / 453
- **Current:** `['眼', 'ŋan˩˧']`
- **Expected:** `['眼', 'ŋaːn˩˧']`
- **Why:** Same length issue as #15: 眼 *ngaan5* has long /aː/. The tone ˩˧ (陽上 low-rising) is correct here; only the vowel length is wrong relative to the long-nucleus rime, and it diverges from `yue_zs/dg` `ŋaːn`. (Bauer & Benedict 1997.)

### 17. `yue_ts` — cat — 猫 transcribed `miau`; Taishan rime/tone deviates from /aːu/ pattern
- **File:** `words/cat.js` line 744
- **Current:** `["猫", "miau˨˨"]`
- **Expected:** review — likely `["猫", "meu˨˩"]` or `["猫", "miau˨˩"]` (tone)
- **Why:** 貓 is 陽平-readable in many Yue varieties (the colloquial 陽平/mid reading), and the mid-level ˨˨ here conflicts with the 陽平 low contour seen elsewhere; also the medial glide /-i-/ in `miau` is unusual for Sei-yap, where the comparison form `yue_nn` is `meu` (no /i/ medial). At minimum the rime should be reconciled with the `meu`/`maːu` set rather than introducing a Mandarin-like /iau/. Flagging for source check. (Yiu 2009; cf. `yue_nn` 猫 `meu˥˥`.)

### 18. `yue_gz` — sun — 頭 tone ˧˧ (mid-level) for a 陽平 syllable
- **File:** `words/sun.js` line 991
- **Current:** `["日头", "jɐt˥˥tʰɐu˧˧"]`
- **Expected:** `["日头", "jɐt˨tʰɐu˨˩"]`
- **Why:** Two problems. (a) 日 is *jat6*, 陽入 (entering tone, low register, value 2 = ˨), but is marked ˥˥ (high-level 陰平) — a tone-category error; the prestige `yue` correctly has `jɐt˨`. (b) 頭 *tau4* is 陽平, low-falling 21 = ˨˩, not mid-level ˧˧. The prestige `yue` reads `tʰɐu˨˩`. (Yue-Hashimoto 1972, 陽入 / 陽平 categories.)

### 19. `yue_dg` — sun — 日 entering-tone written with a doubled mid letter `˨˨` is fine, but 头 tone needs check
- **File:** `words/sun.js` lines 418 / 458
- **Current:** `['日头', 'jɐt˨˨tʰɐu˨˩']`
- **Expected:** confirm 日 *jat6* 陽入 is short low-stopped (˨); `tʰɐu˨˩` 陽平 OK
- **Why:** Minor/consistency: the entering-tone syllable 日 (ending in stop /-t/) is given a two-letter level ˨˨, whereas stopped (入聲) syllables in the prestige `yue` use a single ˨ (e.g. `jɐt˨`). Entering tones are short and conventionally take a single tone letter; the doubled letter implies a long contour incompatible with a checked syllable. Recommend ˨. (LSHK checked-tone convention; Bauer & Benedict 1997 on 入聲 brevity.)

### 20. `yue_ts` — moon — 月 entering-tone marked mid `˧˧`; 陽入 should be low
- **File:** `words/moon.js` line 750
- **Current:** `["月光", "ɲut˧˧kwɔŋ˨˨"]`
- **Expected:** `["月光", "ɲyt˨kwɔŋ˥˥"]` (tone/rime review)
- **Why:** 月 is *jyut6*, 陽入 (low entering), so a low tone-letter is expected, not mid ˧˧; and 光 is 陰平 (high), which sits oddly as ˨˨ (low). The two tones look swapped/mis-leveled relative to the prestige `yue` `jyːt˨ kʷɔːŋ˥`. The rime /ut/ vs front-rounded /yt/ in 月 also warrants a check against Sei-yap data. (Yue-Hashimoto 1972, 陽入 = low; 陰平 = high.)

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
