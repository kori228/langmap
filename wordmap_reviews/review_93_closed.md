# Wordmap Review #93 — Sinitic round-3 audit (20 common words)

Scope: 20 common-word files under `/home/jounlai/langmap/words/`. Builds on
#88 (Sinitic round-2, which closed `dng`-good ˨˦, `hak_tw` 阿/貓/手 阴平
˨→˨˦, `cdo` dog 犬→狗 / `nit→niʔ`, `cpx` 水/手 `ɬ-` restoration, `cnp`
drink `ʔɐm` onset). The Sinitic codes actually present across the 20 files:

Mandarin/Northern cluster — `zh`, `zh_db`, `zh_sc`, `zh_cq`, `zh_jh`, `zh_jn`,
`zh_kf`, `zh_lz`, `zh_tj`, `zh_cd`, `zh_hf`, `zh_km`, `zh_nj`, `zh_wh`,
`zh_xa`, `zh_zz`, `dng`.

Cantonese cluster — `yue`, `yue_gz`, `yue_ts`, `yue_zs`, `yue_dg`, `yue_nn`,
`cnp` (Pinghua).

Hokkien (Min Nan) cluster — `nan`, `nan_xm`, `nan_zz`, `nan_qz`, `nan_te`,
`nan_pn`, `nan_hai`. Other Min — `cdo`, `cpx`, `mnp`.

Hakka — `hak_cn`, `hak_tw`, `hak_hl`. Wu — `wuu`, `wuu_hz`, `wuu_sz`, `wuu_nb`,
`wuu_wz`, `wuu_jh`, `wuu_jx`. Jin — `cjy`. Xiang — `hsn`. Gan — `gan`.
Hui — `czh`. (Historical `zh_han` / `zh_song` / `zh_tang` / `zh_wenyan` out of
scope.)

Key correction to #88's framing: `cnp` is **Pinghua** (Guangxi), not "Northern
Min, Pucheng". `wordmap_meta.js` / `lang_names.js` confirm this. The
Pinghua-correct features (`-m` codas, `ɬ-` lateral, Cantonese-adjacent rimes,
`sɐm/sɐu/jɐt` shapes) are therefore correct for `cnp`, not bugs.

---

## 1. Systematic duplicate Sinitic rows in every one of 20 word files

Every `*.js` in `words/` has the same `data:` row repeated twice for the same
subset of codes. Concretely, in **all 20 files** the keys `wuu_jh`, `wuu_jx`,
`yue_zs`, `zh_cd`, `zh_hf`, `zh_kf`, `zh_nj` appear *twice* back-to-back; and
the keys `wuu_hz`, `yue_dg`, `yue_nn`, `zh_cq`, `zh_jn`, `zh_km`, `zh_xa`
(and sometimes `wmt`, `aau`, `ani`, `bdk`, …) appear *twice* with identical
values. Sample (`/home/jounlai/langmap/words/dog.js`):

```js
347:    wuu_jh: ['狗', 'kei˥˧˥'],
348:    wuu_jx: ['狗', 'kɤu˧˩˧'],
349:    yue_zs: ['狗', 'kɐu˧˥'],
350:    zh_cd: ['狗', 'kəu˥˧'],
...
354:    wuu_jh: ['狗', 'kei˥˧˥'],   // duplicate
355:    wuu_jx: ['狗', 'kɤu˧˩˧'],   // duplicate
356:    yue_zs: ['狗', 'kɐu˧˥'],    // duplicate
...
401:    wuu_hz: ['狗', 'kɤɯ˥˧'],
410:    yue_dg: ['狗', 'kɐu˧˥'],
...
442:    wuu_hz: ['狗', 'kɤɯ˥˧'],   // duplicate
450:    yue_dg: ['狗', 'kɐu˧˥'],   // duplicate
```

Identical pattern in `cat.js`, `drink.js`, `eat.js`, `eye.js`, `father.js`,
`fire.js`, `good.js`, `hand.js`, `heart.js`, `hello.js`, `house.js`,
`love.js`, `moon.js`, `mother.js`, `one.js`, `sun.js`, `thanks.js`, `tree.js`,
`water.js` (verified by `grep | sort | uniq -c | awk '$1>1'`). JS object
literal semantics mean the second occurrence silently wins (so behaviour is
unaffected), but the dataset is structurally polluted. One mass de-dup
pass across all 20 files. **Highest-priority structural fix.**

## 2. `dng tree` is `["фу", "fu"]` — wrong character entirely

`/home/jounlai/langmap/words/tree.js:748` gives Dungan `["фу", "fu"]`. Dungan
"tree" descends from Mandarin 树 (shù) — the Cyrillic should be `шў`
(`ʂu`), not `фу` (`fu`). `фу` would be Mandarin 副/夫/付 etc. Same Cyrillic
shape `фу` is used by `dng` for `house.js` (`фоңзы` 房子) — likely
a copy-paste from another row. **Wrong-word transcription bug.** Sample
expected: `["шў", "ʂu"]` (with a Dungan tone if dataset adopts tone marking
per #88 finding 9 / round-2 partial fix).

## 3. `dng` tone marking still absent on 19 of 20 entries

#88 finding 9 flagged the Dungan tone-marking absence; round-2 fixed only
`good.js dng: ["хау˨˦", "xau˨˦"]`. The remaining 19 still carry no tone:
`hand.js шў/ʂəu`, `heart.js щин/ɕin`, `cat.js мау/mau`, `dog.js гу/ku`,
`drink.js хә/xə`, `eat.js чы/tʂʰɨ`, `eye.js янҗин/jan tɕin`,
`father.js ба/pa`, `fire.js хуә/xuə`, `hello.js ни хау/ni xau`,
`house.js фоңзы/faŋ tsɨ`, `love.js ай/ai`, `moon.js юә/yə`,
`mother.js ма/ma`, `one.js и/i`, `sun.js жѳтў/ʐɨtʰu`,
`thanks.js дуәще/duəɕe`, `tree.js фу/fu` (see #2), `water.js щүй/ɕy`.
Either complete the round-2 policy (tones on all 20) or document the
absence as policy in `LANG_CODES.md`. The split state is the bad outcome.

## 4. `dng dog` `["гу", "ku"]` — missing diphthong

Mandarin 狗 is `gǒu` /koʊ̯/. Dungan reflex is normally `гәу` (`kəu`) with
the front-low rounded vowel preserved. Bare `гу/ku` collapses to `gū`/`gū`
which would be 估/古 etc., not 狗. Likely transcription error; replace
with `гәу/kəu` (+ low/dipping tone).

## 5. `nan_xm` / `nan_zz` surface text includes POJ in parentheses (cross-sibling display drift)

Every `nan_xm` and `nan_zz` row across 20 files carries POJ in the surface
slot, e.g. `'食 (chia̍h)'`, `'貓 (niau)'`, `'狗 (káu)'`, `'目睭 (ba̍k-chiu)'`.
But the sibling Hokkien rows `nan_te`, `nan_pn`, `nan_qz`, `nan_hai`, and
the main `nan` give clean Han only. Display inconsistency — the column will
visually outlier the two `nan_xm` / `nan_zz` rows everywhere. Either strip
the parenthetical POJ from nan_xm/nan_zz, or add identical POJ annotations
to the four other Hokkien siblings + `nan` (the cross-sibling display+role
consistency rule from `feedback_cross_sibling_role_consistency.md` applies
to script choice too).

## 6. Hokkien tie-bar typography splits 3-vs-3 across siblings

For affricates `ts/tsʰ/tʃ/dz/dʑ`, the Hokkien rows split:
- **Tie bar used**: `nan_te` (`t͡siaʔ`, `t͡sui`, `t͡sʰiu`), `nan_qz`
  (`t͡siaʔ`, `t͡sui`, `t͡sʰu`, `d͡ʑit`).
- **Bare digraph**: `nan` (`tsʰu`), `nan_xm` (`tsiaʔ`), `nan_zz` (`tsiaʔ`),
  `nan_pn` (`tsʰiu`, `tsʰu`, `tsit`), `nan_hai` (`tsʰiu`, `tsʰu`).
The split is cleanly between contributors, not phonological. Same project-wide
convention (U+0361 tie bar) should be applied to all six Hokkien codes for
parity. Same applies to `dʑit` / `dzit̚` / `ʒik` in 日 (Yang Ru initial),
which has phonological variation between dialects *and* notation variation
between contributors.

## 7. `nan_qz` (Quanzhou Hokkien) 阴上 tone is internally inconsistent

Quanzhou Hokkien 阴上 (Yin Shang) is `˥˧` (high-falling) or `˥˥` per most
sources. The 20 files mark Yin Shang inconsistently:
- `good.js nan_qz: ["好", "ho˧˥"]` — `˧˥` (mid-rising).
- `fire.js nan_qz: ["火", "hə˧˥"]` — `˧˥`.
- `hand.js nan_qz: ["手", "t͡sʰiu˧˥"]` — `˧˥`.
- `water.js nan_qz: ["水", "t͡sui˨˨"]` — `˨˨` (low-level).
- `hello.js nan_qz: ["汝好", "li˧˥ho˧˥"]` — `˧˥`.

All five are Yin Shang. Four are `˧˥`, one (`水`) is `˨˨`. Either the file
should pick a single Yin Shang realisation (`˥˧` per Norman / 杨秀芳;
`˧˥` as one renormalised system), or `水` is the outlier and should align
to `˧˥` like its siblings.

## 8. `nan_qz` 一 `it` (literary) — register split with `tsit` colloquial siblings

`one.js nan_qz: ["一", "it˨˨"]` uses the literary reading `it` (entering
tone for read pronunciation). Every other Hokkien sibling that gives a
single form gives the colloquial `tsit` (or `t͡sit`): `nan_xm/nan_zz`
parenthesise both (`chi̍t / it`), `nan_pn tsit˥˥`, `nan_te t͡sek˨˨` (the
Teochew colloquial). For consistency, `nan_qz` should give `t͡sit˨˦` (or
match `˥˧` Yin Ru) as colloquial reading; `it` only if a literary-form
policy is documented.

Tone `˨˨` for 阴入 in Quanzhou is also wrong direction — Quanzhou 阴入 is
`˥` (high short). `˨˨` is 阳入 territory. Either `it˥` (literary) or
`t͡sit˥˨` / `t͡sit˨˦` (colloquial Quanzhou), but not `it˨˨`.

## 9. `nan_pn` (Penang Hokkien) entering / short tones use long contour notation

Penang Hokkien is a Zhangzhou-derived overseas Hokkien. Its checked tones
should mark stop coda + short duration: `tsit˥` (高短) / `tsit˨` (低短).
But the file gives `["一", "tsit˥˥"]`, `["食", "tsiaʔ˥˥"]`, `["目", "bak˥˥"]`
— `˥˥` is a *level* contour normally used for long syllables, applied here
to checked (-t / -ʔ / -k) syllables. Either drop one tone letter (`tsit˥`)
or accept that 入聲 marking is by convention long-contour in this dataset
— but then `nan_xm tsit̚˦` (with explicit unreleased mark + `˦`) and
`nan_te t͡sek˨˨` are using a different convention in the same row. Pick one.

## 10. `nan_hai` (Hainanese) 食 `["食", "tʰeʔ˥˥"]` — aspiration anomaly

Hainanese famously fronts/voices initial *ts-* — actual modern Hainanese
"eat" is `tek` / `teʔ` (unaspirated). `tʰeʔ` with aspiration is irregular
for the Hokkien-cognate stem (cf. nan_xm `tsiaʔ`, nan_qz `t͡siaʔ`, nan_pn
`tsiaʔ`, nan_te `t͡siaʔ`). If Hainan does aspirate (some sources do show
`tʰek` for the literary reading), document; otherwise normalise to `teʔ`.

## 11. `nan_hai` 水 `["水", "zui˨˩˧"]` — initial `z-` and `213` contour

Hainanese voicing reflexes are real (Hainanese has retained / re-introduced
voiced obstruents), but `zui` here vs other Hokkien `tsui/t͡sui` is the
strongest distinguishing feature in the row — confirm whether modern
Hainanese 水 is `zui` (some sources) or `tsui` / `sui` (others). Tone
`˨˩˧` (dipping) on a Yin Shang syllable is also unusual — Hainanese
Yin Shang is more typically `˨˩˧` *or* `˨˩` flat; check.

## 12. `cnp` (Pinghua) actually correct as Pinghua, not Northern Min — meta-correction

Following on #88 finding 18, which read `cnp` as "Northern Min Pucheng":
the meta and lang_names confirm `cnp` = **Pinghua** (Guangxi).
The `cnp` rows are therefore phonologically *correct* as Pinghua:
- `心 sɐm˦˦`, `手 sɐu˦˨`, `日头 ŋit˨tʰɐu˦˦` — Cantonese-area `-m/-ɐu` codas.
- `水 ɬui˦˨` — the `ɬ-` reflex shared with neighbouring Nanning Cantonese
  (yue_nn) and Zhuang substrate.
- `屋 ɔk˨` — entering-tone short syllable.
- `饮 ʔɐm˦˨` — round-2 fixed initial.
- `眼 ŋɐn˦˨` — single morpheme (eye), Pinghua-appropriate.

The data is internally coherent for Pinghua. **No change** needed to the
phonology — but if reviewer notes from #88 referenced "Pucheng Min Bei", those
need to be retracted in the record.

## 13. `yue_gz` (Guangzhou Cantonese) 月 marked `˥˥` — wrong tone category

`moon.js yue_gz: ["月光", "jyt˥˥kwɔŋ˥˥"]`. The character 月 is Yang Ru
(low entering) in Cantonese; standard Guangzhou is `jyt˨` (low entering,
sometimes shorter `˨`). High-level `˥˥` is Yin Ping or Yin Ru territory
— compare `one.js yue_gz: ["一", "jɐt˥˥"]` which *is* Yin Ru and correctly
high. Marking 月 as `jyt˥˥` conflicts with `yue` main row (`月光 jyːt˨
kʷɔːŋ˥`), `yue_zs` (`jyt˨`), `yue_dg` (`jyt˨`), `yue_nn` (`ŋyt˨`).
Fix to `jyt˨` (or whatever short-low convention this dataset uses for Yang Ru).

## 14. `yue_gz` 爸爸 `["爸爸", "paː˨˩paː˨˩"]` — kin-tone vs Yang Ping confusion

Standard Cantonese kin term 爸爸 is *bàh-bā* / *bàh-bāh* — first syllable
in some renderings as Yang Ping `˨˩`, second is the kin-vocative high `˥˥`.
The file marks both syllables `˨˩` (low-falling). Compare yue_dg, yue_nn,
yue_ts all using `pa˥˥` on the second syllable. Citation `paː˨˩paː˨˩`
suggests reading-tone, not vocative; likely an authoring slip.

## 15. `yue_ts` (Taishanese) 月 `jut˧˧` — Yang Ru tone

`moon.js yue_ts: ["月光", "ɲut˧˧kwɔŋ˨˨"]`. Taishanese Yang Ru is `˧˨` (mid-
falling) or `˨˩` per Cheng (1973). `˧˧` (mid-level) is the citation form
for Yin Qu in Taishan. 月 should be `ɲut˧˨` (or `ŋut˧˨`). The `kwɔŋ˨˨`
for 光 (Yin Ping) is also wrong — Taishanese Yin Ping = `˧˧`. `˨˨` is
Yang Ping. Both syllables of the compound look swapped.

## 16. `yue_ts` 火 `["火", "fɔ˧˧"]` — Yin Shang vs Yin Qu

Taishanese 上声 is `˥˥` (high level / changed tone) typically. `˧˧` is
Yin Qu. 火 (Yin Shang) should be `fɔ˥˥` not `fɔ˧˧`. Compare `yue_gz
fɔ˧˥`, `yue_nn fɔ˧˥`, `yue_dg fɔ˧˥` (all 35 rising = Yin Shang). 

## 17. `yue_zs` (Zhongshan / Shiqi Cantonese) script mixing

`yue_zs` mixes traditional and simplified Han across the 20 files:
trad in `cat 貓`, `drink 飲`, `father 老豆`, `love 愛`, `sun 日頭`,
`thanks 多謝`, `tree 樹`; but simplified in `dog 狗` (shared), `eye 眼`
(shared), `fire 火` (shared), `good 好` (shared), `hand 手` (shared),
`hello 你好` (shared), `house 屋` (shared), `mother 老母` (shared),
`one 一` (shared), `water 水` (shared). Most are character-shared so this
is mostly a non-issue, but `飲` and `愛` and `樹` reveal `yue_zs` is
choosing traditional for words with simp/trad splits. Recommend explicit
"yue_zs uses traditional throughout" policy (matches `hak_tw` / `nan_xm`).

## 18. `czh` (Huizhou / Jixi) 上声 systematically marked `˦˦`

Jixi Huizhou 上声 in published descriptions (Zhao 1934; Jianghuai Hui survey)
is `˨˩˨` (low-dipping) or `˨˧` (low-rising). The 20-file dataset marks
nearly every Jixi Shang as `˦˦` (high level), which is Yin Ping in Jixi:
- `dog kəu˦˦`, `hand səu˦˦`, `good hau˦˦`, `water ɕy˦˦`, `tree ɕy˦˦`,
  `fire xu˦˦`, `love ai˦˦` (去).
The wholesale `˦˦` looks like one-tone fallback. Same Jixi 阴去 is `˧˥`
in most sources, so `love ai˦˦` and `tree ɕy˦˦` (both 去) are also off.

## 19. `czh` second-syllable tones missing (carryover from #88 finding 13)

`eye.js czh: ["眼睛", "ŋæ˦˦tɕin"]` — `tɕin` no tone. `sun.js czh:
["日头", "ʐɨ˨˦tʰəu"]` — `tʰəu` no tone. `hello.js czh: ["你好", "n˦˦hau˦˦"]`
the 你 is bare `n` (should be syllabic `n̩`); both tones now present.
Same issue persists on `eye` and `sun`. Also `czh hello` `n` lacks the
syllabic underdot — should be `n̩˦˦`.

## 20. `cdo` (Fuzhou / Eastern Min) — finding 11 from #88 still open

`fire.js cdo: ["火", "huoi˧˧"]` is unchanged from #88. Fuzhou 上声 surfaces
as `˧˩` (low-falling) in modern descriptions. `huoi˧˧` (high-level) is
Yin Qu / Yin Ping in Fuzhou. Also `good ho˧˧`, `water t͡sui˧˧`, `hand
t͡sʰiu˧˧`, `dog kau˧˧` (all Yin Shang) all share the same `˧˧` fallback.
Compare `eat sieʔ˨˦` (Yang Ru — different tone), so the file *does*
distinguish; only Yin Shang is using `˧˧` as the placeholder.

## 21. `cdo` 树 `["树", "t͡shiu˧˧"]` — malformed `t͡sh`

Aspirate marker should be U+02B0 modifier letter small h (`ʰ`), not the
lower-case Latin `h`. So `t͡sh` → `t͡sʰ`. Compare `cdo hand t͡sʰiu˧˧`
(correctly `t͡sʰ`) in the same file family. (#88 finding 25 flagged this;
not in dev round-1 patch list — still open.)

## 22. `cdo` 心 `["心", "siŋ˥˥"]` initial `s-` vs Foochow `sing` reading

Fuzhou Romanized 心 is *sĭng* with initial `s-`. The IPA `siŋ˥˥` is fine
(`˥˥` Yin Ping confirmed). Cross-check: `cdo thanks "谢谢" sia˧˧sia`
— second `sia` neutral-untoned. Foochow 谢 (Yang Qu) should be `siā` /
`sia˨˦˨` or `sia˨˦˨`; `˧˧` first syllable then neutralised second is
acceptable lect-internally if reduplication-neutral, but the citation form
would mark both. Same issue as #88 finding 13 for compound second syllable.

## 23. `mnp` (Min Bei / Jian'ou) 心 `["心", "siŋ˥˦"]` second-syllable tone present, but `心` is monosyllabic — tone fine

`mnp` rows mostly look healthy. Note: `mnp father: ["爹", "tia˥˦"]` — using
爹 for "father" rather than the 老爸 / 阿爸 / 老父 areal Min pattern
(cdo 依爸, cpx 老父, nan_qz 老父, nan_hai 父, nan_xm 老爸). Jian'ou
*does* use 爹 colloquially, but if the row's intent is to surface the Min
"old father" areal lexeme, either swap to 老爸 / 老父 or document. (#88
finding 12 also flagged this; not in round-1 dev patch list.)

## 24. `wuu` (Shanghainese) 树 `["树", "zz̩˩"]` — unchanged from #88 finding 14

The malformed syllabic-z `zz̩` (double `z` then combining underdot) is
still present. Shanghai 树 standard IPA is `zɿ˨˧` or `zz̩˨˧` (with single
prefix z). Either renormalise to `zɿ˨˧` or use proper syllabic marker
without duplicating the consonant.

## 25. `wuu_nb` (Ningbo Wu) second-syllable compound tones missing

- `moon.js wuu_nb: ["月亮", "ɲyəʔ˩˨liaŋ"]` — `liaŋ` untoned.
- `sun.js wuu_nb: ["日头", "ɲiʔ˩˨dɤu"]` — `dɤu` untoned.
- `father.js wuu_nb: ["阿爸", "aʔ˦˦pa"]` — `pa` untoned.
- `house.js wuu_nb: ["屋里", "oʔ˥˥li"]` — `li` untoned.
- `thanks.js wuu_nb: ["谢谢", "ɕia˨˧ɕia"]` — second `ɕia` untoned.

Ningbo Wu has citation + sandhi forms. The pattern of marking first syllable
only is the same Wu compound-tone shorthand as `wuu` main row (#88 finding 14),
but is unprincipled — either give the sandhi'd compound contour, or both
citation forms. (`wuu_sz`, `wuu_hz`, `wuu_jh`, `wuu_jx` all *do* mark both
syllables.)

---

## Summary

25 findings. Major themes:

- **Structural**: Every `words/*.js` file has duplicate rows for `wuu_hz`,
  `wuu_jh`, `wuu_jx`, `yue_zs`, `yue_dg`, `yue_nn`, `zh_cd`, `zh_hf`, `zh_kf`,
  `zh_nj`, `zh_cq`, `zh_jn`, `zh_km`, `zh_xa`. One mass de-dup pass needed
  (finding 1).
- **Wrong-word bug**: `dng tree` `["фу", "fu"]` is the wrong morpheme
  entirely; should be `["шў", "ʂu"]` (finding 2).
- **Carryover from #88 unfixed**: `dng` tones (19/20 still untoned, finding 3),
  `cdo` 火 / 上声 fallback `˧˧` (finding 20), `cdo` 树 `t͡sh` typo (21),
  `wuu` 树 `zz̩˩` (24), `czh` second-syllable tones (19), `mnp` 爹 register
  (23), `hsn` / `wuu` compound second-syllable tones (25).
- **Cross-sibling display drift**: nan_xm / nan_zz carry POJ in surface text
  (finding 5); Hokkien tie-bar split 3-vs-3 across siblings (6); yue_zs
  script mixing (17).
- **Meta-correction**: `cnp` = **Pinghua** (Guangxi), not Northern Min as #88
  read it (finding 12).
- **Tone-category bugs**: `yue_gz` 月 marked `˥˥` should be `˨` (13);
  `yue_ts` 月光 both syllables wrong tone (15); `yue_ts` 火 `˧˧` should
  be `˥˥` (16); `czh` 上 wholesale `˦˦` (18); `nan_qz` 阴上 inconsistent
  (`˧˥` vs `˨˨`) (7); `nan_qz` 一 literary `it˨˨` mis-toned (8).
- **Phonological flags**: `nan_hai` 食 aspiration (10), 水 `zui` initial (11);
  `nan_pn` checked-syllable contour notation (9); `dng` dog vowel (4);
  `yue_gz` 爸爸 kin tone (14).

File: `/home/jounlai/langmap/wordmap_reviews/review_93_open.md`
Findings: 25


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 9
- **policy/skip**: 16
- **headline**: dng tree фу→шў/ʂu (wrong morpheme — 树), cdo trees t͡sh→t͡sʰ, cdo 火/水/手/好 Yin Shang ˧˧→˧˩, yue_ts 火 fɔ˧˧→fɔ˥˥, yue_gz 月 ˥˥→˨ Yang Ru, nan_qz 水 ˨˨→˧˥
- **JSON**: /tmp/wm_edits_93.json
