# Wordmap Review #88 — Sinitic round-2 audit (20 common words)

Scope: 20 common-word files under `/home/jounlai/langmap/words/`.
Languages audited (those actually present): `zh`, `zh_db`, `zh_sc`, `yue`, `nan`,
`wuu`, `hak_cn`, `hak_tw`, `gan`, `hsn`, `cjy`, `cnp`, `cdo`, `cpx`, `mnp`, `dng`,
`czh`. Historical codes (`zh_han`, `zh_tang`, `zh_song`) are out of scope (only
attested in `hand.js` / outside the 20 here that's `tree`-adjacent files and not
in the modern surface row).

Conventions reference: `docs/words/CONTRIBUTING.md` says tone diacritics belong
inline in IPA (e.g. `ʂweɪ˧˩˧`), and `LANG_CODES.md` lists `hak_tw` as Taiwanese
Hakka (separate code from `hak_cn`). Across the dataset, the de-facto convention
in these 20 files is: simplified Han for PRC-anchored codes (`zh`, `zh_db`,
`zh_sc`, `wuu`, `hak_cn`, `gan`, `hsn`, `cjy`, `cdo`, `mnp`, `czh`, `cnp`, `cpx`)
and traditional Han for Taiwan-anchored codes (`hak_tw`, `nan`). Findings below
flag departures from that pattern and other consistency problems.

---

## 1. Script consistency — `hak_tw` already traditional, but `nan` only partially

`hak_tw` consistently uses traditional Han across all 20 files (貓仔, 樹仔, 阿爸,
阿姆, 月光, 日頭, 食, 啉, 承蒙你, 屋, 水, 火, 一, 你好, 好, 心臟, 手, 目珠, 惜).
That's correct.

`nan` (Taiwanese / Hokkien) mixes scripts: traditional in `cat.js`貓, `father.js`
爸爸, `mother.js`媽媽, `love.js`愛, `moon.js`月娘, `sun.js`日頭, `tree.js`樹,
`thanks.js`多謝, `eat.js`食 — but simplified or shared-glyph in `drink.js`啉,
`dog.js`狗, `eye.js`目, `fire.js`火, `good.js`好, `hand.js`手, `heart.js`心,
`hello.js`你好, `house.js`厝, `one.js`一, `water.js`水. Most are shared between
the two script sets (火/手/心/etc. are identical), so this is more an audit note
than a fix — only confirm that everywhere a simplified-only character would
exist (e.g., 飯/飯, 馬/马) the file picks traditional, consistent with `hak_tw`.

## 2. `zh_db` (Dongbei Mandarin) is a near-duplicate of `zh`

Of the 20 words, `zh_db` is byte-identical to `zh` in 16 cases (`one`, `cat`,
`dog`, `drink`, `eat`, `father`, `fire`, `good`, `hand`, `heart`, `hello`,
`love`, `mother`, `tree`, `water`, `thanks`) and effectively identical in 2 more
(`house`, `eye` differ only in `t͡s` ligature vs `ts`). The genuine differences
are only `moon` (extra ˩ tail) and `sun` (extra ˩ tail). Dongbei phonology
*does* differ from Standard Mandarin (e.g. 你好 nín hǎo with neutral tone
contour, neutralization of zh-/z-, dialect lexis like 咋的 / 寻思 / 整 /
玻璃 'glass' → 玻璃儿), and at minimum tone-3 sandhi in 你好 / 好 / 水 / 手 /
火 should display the Dongbei half-third realisation (often `˨˩` rather than
the citation `˧˩˧`). Right now the row carries no informative signal.

## 3. `zh_sc` (Sichuan) lexis — 啥子 vs 什么 not represented

The 20-word slice doesn't contain a "what" entry, so the canonical 啥子 vs
什么 contrast can't appear. But the file `father.js` and `mother.js` give
`zh_sc` as `爸爸` / `妈妈` with **no IPA** (`"papa"` and `"mama"` with empty
tone), where Standard Mandarin shows `pa˥˩pa` / `ma˥ma`. Sichuanese 老汉儿
(lǎohànr) for 'father' and 老妈 / 妈老汉儿 for 'mother' are widespread
informal alternates and would make `zh_sc` distinguishable. At minimum the IPA
should carry the tones (parent kin terms in Chengdu speech still take 阴平 ˥˥
on the first syllable + neutral, e.g. `pa˥˥pa`).

## 4. `zh_sc` (Sichuan) eat — 吃 should be `t͡sʰ-` not `tsʰ-`

`eat.js` zh_sc gives `["吃", "tsʰɨ˧˥"]`. Other Sinitic entries in the same row
use the tie-bar affricate (`t͡sʰ`, `t͡ɕʰ`, `t͡s`). Use `t͡sʰɨ˧˥` for
typographic consistency with `hak_cn` / `nan` / `wuu` etc. Same issue in
`zh_db: ["眼睛", "jɛn˧˩˧tɕiŋ˥"]` (`tɕ` not tied) and `czh: ["眼睛",
"ŋæ˦˦tɕin"]` (`tɕ` not tied, also tone missing on second syllable).

## 5. Cantonese `yue` 喺/在 lexical split — not surfaced in `love.js` / `house.js`

The brief flags Cantonese 喺 (located-at) vs 在 (Mandarin written form) as a
common audit issue. In these 20 files there's no preposition entry — `love.js`
and `house.js` carry only the head noun/verb (愛 / 屋). No fix needed; flagging
as confirmed-clean for this slice but noting that adding a "be at / live"
entry later will need the 喺 vs 在 split for yue / yue vs cnp.

## 6. Lexical double — drink: 喝 vs 飲 vs 啉 inconsistency

`drink.js` zh `喝` xɤ˥, yue `飲` jɐm˧˥, nan `啉` lim˦, hak_cn `饮` (simplified
of 飲), cdo `啜`, mnp `啜`, hak_tw `啉`, cpx `啉`, cnp `饮` ɐm˦˨. Findings:
- **cnp** (Northern Min, Jian'ou) `["饮", "ɐm˦˨"]` is missing the initial
  consonant — should be `ʔɐm` or `iɐm` / `iam`; bare `ɐm` is a transcription
  error.
- **hak_cn** uses simplified `饮`; **hak_tw** uses 啉. The hak_cn / hak_tw pair
  is split between 飲-cognate and 啉-cognate. If both should be 啉 (closer to
  Min substrate in Hakka), align; if hak_cn should keep 飲 for the formal
  reading, document.
- **gan** `["喝", "hot˥"]` — Gan typically uses 食 for "drink (soup/tea)" or
  bevels to 飲; `hot` (entering tone) doesn't fit 喝 in Gan phonotactics
  cleanly. Verify.

## 7. Lexical double — eat: 吃 vs 食 split is correctly tracked

`eat.js` is clean: Mandarin-cluster (`zh`, `zh_db`, `zh_sc`, `wuu`, `cjy`,
`hsn`, `gan`, `czh`, `dng`) uses 吃; Min/Yue/Hakka cluster (`yue`, `nan`,
`hak_cn`, `hak_tw`, `cdo`, `mnp`, `cnp`, `cpx`) uses 食. Good. Only `wuu: ["吃",
"t͡ɕʰiʔ˥"]` is debatable — Shanghai Wu commonly writes 喫 / 吃, both occur;
keeping `吃` is fine. **gan** `["吃", "t͡ɕʰiat˥"]` is suspect — Nanchang Gan
"eat" is more commonly `t͡ɕʰiaʔ` (glottal-stop entering tone) than `t͡ɕʰiat`
(unreleased-t); rural Gan does keep -t, so flag for verification rather than
auto-fix.

## 8. Lexical double — fire: no 火灾 contamination

`fire.js` is clean: every Sinitic entry uses 火 (the element). No row mistakenly
uses 火灾 (the disaster). Confirmed clean.

## 9. Tone notation — `dng` (Dungan) has no tone information at all

`dng` rows across all 20 files give Cyrillic surface + plain Latin IPA with
**zero tone marks**: `["хау", "xau"]`, `["щин", "ɕin"]`, `["шў", "ʂəu"]`,
`["ма", "ma"]`. Dungan orthographically marks tone with final letters/sign
diacritics (-, ', no mark); phonologically Dungan has three tones (Gansu
dialect 24, 51, 44; Shaanxi has slightly different inventory). Either:
- Add tone marks consistently (e.g. `["хау˨˦", "xau˨˦"]` for 好), or
- Document in `LANG_CODES.md` / `wordmap_meta.js` that Dungan IPA is
  tone-unmarked by policy and apply it uniformly. Right now it just looks like
  forgotten data.

Also `dng` in `sun.js` `["жѳтў", "ʐɨtʰu"]` — the Cyrillic ў is normally
Belarusian; Dungan uses ў too but check the spelling against Dungan corpora
(commonly written `жыртў` or `жѳртў` for 日头).

## 10. `cdo` (Eastern Min, Mindong / Fuzhou) — `["犬", "kʰyøŋ˧˧"]` for dog

`dog.js` cdo gives `["犬", "kʰyøŋ˧˧"]`. Fuzhou colloquial "dog" is 狗 (POJ
*káu* / IPA roughly `kau˧˧`); 犬 is a literary/classical reading and not the
everyday word. Every other Sinitic row in `dog.js` uses 狗. Flag for change to
狗 unless a Fuzhou-specific reason for the literary form is documented.

## 11. `cdo` — fire `["火", "huoi˧˧"]`

Foochow Romanized 火 is *huōi* / *huói* — the surface 火 plus an `huoi` vowel
nucleus is plausible, but the input tone `˧˧` represents 阴平/上 = even
tone. Foochow 火 is 上声 which in modern Fuzhou surfaces as `˧˩` (low-falling
33→31), not high-level `˧˧`. The `cdo` rows in this file set seem to use `˧˧`
as a fallback for many shàngshēng items (`好`, `手`, `水`, `火`, `猫`) — that
looks like one author copying the same tone slot. Verify against Fuzhou tone
chart.

## 12. `mnp` (Northern Min / Jian'ou) — neutral / second-syllable tones missing

`mnp` rows are mostly OK in the first syllable but several compound rows are
short tones on the second:
- `eye.js` `["目睭", "mu˦˦t͡ʃiu˥˦"]` — both syllables tone-marked, good.
- `sun.js` `["日头", "ni˥˥tʰau˨˨"]` — good.
- `father.js` `["爹", "tia˥˦"]` — only `爹`, not a compound; fine, but mismatched
  in semantic register vs sibling Min rows (cdo 依爸, hak_cn 阿爸, cpx 老父).
  Consider 老爸 or 依爸 to match the Min areal pattern.

## 13. `czh` (Huizhou / Jixi) — missing second-syllable tones repeatedly

- `eye.js` czh `["眼睛", "ŋæ˦˦tɕin"]` — second syllable `tɕin` has no tone.
- `sun.js` czh `["日头", "ʐɨ˨˦tʰəu"]` — second syllable `tʰəu` has no tone.
- `gan` (`sun.js`) `["日头", "ɲit˥tʰɛu"]` — same omission on `tʰɛu`.
- `hsn` (`moon.js`) `["月亮", "ye˨˦liaŋ"]` — `liaŋ` untoned.

Per `CONTRIBUTING.md` "Tone diacritics belong inline", every syllable should
carry a tone (neutral tone can be marked with absence by convention only if
documented; otherwise add the citation tone or the neutralised `˨` short
contour).

## 14. `wuu` (Shanghainese) — `tree.js` `["树", "zz̩˩"]`

Shanghai Wu 树 is *zy* (yang qu, low-falling); IPA `zz̩` repeats the fricative
without a vowel and uses syllabic-z notation that's unusual for Wu. Standard
notation would be `zɿ˨˧` or `z̩˩˨`. Flag.

Also `wuu` `["眼睛", "ŋɛ˩t͡ɕin˥"]` — the second syllable carries `˥` (high),
but Shanghai Wu compound tones are sandhi'd: the citation form would be
`ŋɛ˩˦ tɕin̩` (LM HM → LL HH after sandhi), not `˩` + `˥`. Either give the
sandhied compound contour or the citation forms; mixing is misleading.

## 15. `hak_cn` vs `hak_tw` tone-system disagreement

`hak_cn` tones look like Meixian (4 levels): 阴平 ˧, 阳平 ˩, 上 ˧˩, 去 ˥˧,
入声 ˧/˥. The file uses `˥` / `˧` / `˧˩` consistently.

`hak_tw` (Sixian, Taiwan) however gives:
- `father.js` `["阿爸", "a˨ pa˨"]` — `˨` for 阴平?
- `hello.js` `["你好", "ŋi˩˩ ho˧˩"]`
- `sun.js` `["日頭", "ŋit˨ tʰeu˩˩"]`

Taiwan Sixian Hakka has 6 tones: 阴平 24, 阳平 11, 上 31, 阴去 55, 阴入 2,
阳入 5. Marking 阿 (阴平) as `˨` (low even) is wrong — should be `˨˦` (rising
24). Same for `meu˨` (cat), `su˨` (hand), `vuk˨`/`fo˨`. Either the dataset is
using `˨` as shorthand for short 阴入 only (which conflicts with the use on
non-入声 syllables like 阿/貓), or there's a systematic miscoding. Recommend a
single audit pass renormalising hak_tw to the Sixian 6-tone Chao scale.

## 16. `nan` (Hokkien) tone marking is Chao-bar, no POJ — consistent

The brief flagged "Hokkien tone-letter superscript vs POJ diacritics" (chit vs
chi̍t). Confirmed: every `nan` IPA across the 20 files uses Chao bars (`˦`,
`˧˥`, `˩˩`, `˨˨`, `˥`), with no POJ diacritics leaking in. Good. Only nit:
`drink.js` nan `["啉", "lim˦"]` uses a single `˦`; but Taiwanese 阴平 is `˥`
(high level) in citation, `˧˧` after sandhi. `lim` here is 啉 (low-frequency,
treated as 阳平 in some sources `˨˦` / `˧˥`). Verify.

## 17. `cjy` (Jin / Taiyuan) — fire / dog / good tones inconsistent within file

Across 20 files:
- `fire.js` cjy `["火", "xuo˥˧"]` (上 = 53, OK for Taiyuan)
- `good.js` cjy `["好", "xau˨˩˧"]` (上 = 213??)
- `dog.js` cjy `["狗", "kəu˥˧"]` (上 = 53)
- `hand.js` cjy `["手", "səu˥˧"]` (上 = 53)
- `tree.js` cjy `["树", "su˦˥"]` (去声 = 45)

`好` (上声) gets `˨˩˧` (low-dipping) while every other 上声 in the same Jin
row gets `˥˧` (high-falling). Taiyuan Jin 上声 is a single phoneme — pick one
realisation and apply consistently.

## 18. `cnp` (Northern Min / Pucheng) phonology gaps

`cnp` is *Northern Min, Pucheng* per `LANG_CODES.md`. Findings:
- `drink.js` cnp `["饮", "ɐm˦˨"]` — see Finding 6, missing initial.
- `hello.js` cnp `["你好", "nei˦˨hou˦˨"]` — both tones `˦˨` (falling). Are 你
  (上) and 好 (上) both 上声 in Pucheng? If yes, fine; if the system has
  阴上/阳上 split, mark.
- `house.js` cnp `["屋", "ɔk˨"]` — entering tone `˨` (short low). OK if Pucheng
  入声 maps that way.

Most of `cnp` is internally consistent but check the missing-initial bug at
minimum.

## 19. `cpx` (Pu-Xian Min, Putian) — `心` `["心", "ɬim˧˧"]` uses ɬ

Putian Hokkien is famous for the lateral fricative `ɬ-` reflex of historical
*s-/sh-* in some environments. Confirmed in:
- `heart.js` cpx `["心", "ɬim˧˧"]`
- `tree.js` cpx `["树", "ɬiu˥˧"]`
- `thanks.js` cpx `["多谢", "to˧˧ɬia˥˧"]`

But:
- `water.js` cpx `["水", "t͡sui˦˩"]` — *should* be `ɬui` if the file applies
  the lateral reflex; 水 is one of the classic words for the Putian `ɬ-`. Flag.
- `hand.js` cpx `["手", "t͡sʰiu˦˩"]` — 手 (sim. *sh-* etymology) is `tsʰiu` in
  some Putian sources but `ɬiu` in others depending on subdialect. Decide and
  document.
- `hello.js` cpx `["你好", "ni˦˩ho˦˩"]` — both 上声 at `˦˩`; check against
  Putian 7-tone inventory (上 should be 453 or similar; flagging for verify).

Inconsistent application of the `ɬ` reflex is the biggest internal issue.

## 20. `gan` (Nanchang) neutral-tone & second-syllable issues

- `sun.js` gan `["日头", "ɲit˥tʰɛu"]` — `tʰɛu` untoned. Nanchang Gan 头 (阳平)
  is `˨˦` or `˦˨` depending on register; add a tone.
- `mother.js` gan `["妈妈", "ma˦˨ma"]` — second `ma` neutral, acceptable in
  Mandarin-influenced lect, but Gan 妈妈 is more often `ma˦˨ma˦˨` (both
  syllables citation). Either way is defensible; flagging for stylistic call.
- `thanks.js` gan `["谢谢", "ɕia˨˩ɕia"]` — same neutral-second-syllable issue.

## 21. `hsn` (Xiang / Changsha) — `心` `["心", "sin˧"]` no aspirate distinction

Most `hsn` Sinitic entries look reasonable. One quirk:
- `cat.js` hsn `["猫", "mau˩˧"]` — 阳平 (low rising) = OK for Changsha.
- `heart.js` hsn `["心", "sin˧"]` — single `˧` for 阴平; Changsha 阴平 is `˧˧`
  (mid level) — write as `˧˧` for parity with the rest of the file (`˨˦`,
  `˧˩`, `˥˧`). Bare `˧` is ambiguous.
- `sun.js` hsn `["太阳", "tʰai˥˩ian˩˧"]` — `太` (去声) `˥˩` is right for
  Changsha (55→51); `阳` (阳平) `˩˧` is right. Fine.

## 22. `cdo` `心` `["心", "siŋ˥˥"]` velar nasal coda

Cdo (Fuzhou) does have `-ŋ` codas, so `siŋ` is plausible (PRC IPA atlas gives
*sĭng*). Note however that in the same file `cdo` for 月光 is `["月光",
"ŋuoʔ˨˦kuoŋ˥˥"]` and for 日头 is `["日头", "nit˧˧tʰau˧˧"]` — `nit` should be
`niʔ` in modern Fuzhou (no `-t` coda in Mindong, all stops → `-ʔ`). Compare
`cdo` `eat.js` `["食", "sieʔ˨˦"]` (uses `-ʔ`, correct) and `drink.js` `["啜",
"t͡soʔ˨˦"]` (also `-ʔ`). The `-t` in `nit` is an inconsistency.

## 23. `wuu` `hello.js` `侬好` vs Mandarin-influenced `你好`

`wuu` `hello.js` uses `["侬好", "noŋ˩hɔ˧˩"]` — *correct* Shanghainese (儂好,
noŋ-hɔ). Good. But note that all other `wuu` rows where 你 would surface (none
in this 20-word set) need the 侬 substitution too. No issue in this slice; just
flagging for future entries that take 你.

## 24. `czh` `mother.js` `["妈", "ma˧˧"]` register mismatch with siblings

`czh` (Huizhou / Jixi) gives `["妈", "ma˧˧"]` (single character) where most
Sinitic siblings give a reduplicated or kin-particle form (`妈妈`, `阿妈`,
`姆妈`, `老母`, `阿姆`, `依妈`). A bare `妈` is unusual as a citation form for
"mother" — typical Huizhou is 姆 / 阿姆 / 妈妈. Flag for revisiting; same goes
for `czh` `father.js` `["爸", "pa˦˦"]` (singleton). The data may be correct for
Jixi specifically, but the asymmetry with every other dialect is striking.

## 25. Tie-bar typography inconsistency across files

The repo's IPA mostly uses U+0361 tie bar on affricates (`t͡s`, `t͡ɕ`, `t͡ʃ`).
However bare digraphs leak through:
- `zh_db` `house.js` `["房子", "fɑŋ˧˥tsɨ"]` (`ts` no tie) vs `zh` `house.js`
  `["房子", "fɑŋ˧˥t͡sɨ"]` (`t͡s` with tie).
- `zh_sc` `house.js` `["房子", "faŋ˧˥tsɨ"]` (no tie).
- `zh_sc` `eat.js` `["吃", "tsʰɨ˧˥"]` (no tie).
- `zh_db` `eye.js` `["眼睛", "jɛn˧˩˧tɕiŋ˥"]` (no tie on `tɕ`).
- `zh_sc` `eye.js` `["眼睛", "ŋan˨˩˧tɕin˥"]` (no tie on `tɕ`).
- `czh` `eye.js` `["眼睛", "ŋæ˦˦tɕin"]` (no tie on `tɕ`).
- `czh` `eat.js` `["吃", "tʃʰi˨˦"]` (no tie on `tʃʰ`).
- `cdo` `tree.js` `["树", "t͡shiu˧˧"]` — `t͡sh` is malformed; should be `t͡sʰ`
  (superscript h aspirate, not lower-case `h`).
- `cnp` `thanks.js` `["多谢", "tɔ˦˦tsɛ˦˦"]` (no tie on `ts`).

These should be normalised to U+0361 ties for consistency and to match the
project's other IPA.

---

## Summary

25 findings total. Key themes:
- **zh_db** is functionally a duplicate of `zh` and needs Dongbei-specific data
  or removal from the per-word row.
- **dng** has *no tone marking at all* across 20 files — biggest single fix.
- **hak_tw** Sixian tone system is mis-coded (`˨` on 阴平 should be `˨˦`).
- **cdo** uses literary 犬 for "dog" (should be 狗); also `-t` codas leak in
  for what should be `-ʔ`.
- **cpx** applies the diagnostic Putian `ɬ-` reflex inconsistently (`ɬim` /
  `ɬiu` / `ɬia` yes, but `tsui` / `tsʰiu` for 水/手 no).
- **Tie-bar typography** across `zh_db`, `zh_sc`, `czh`, `cnp`, `cdo` is
  inconsistent — bare `ts` / `tɕ` / `tʃʰ` should be `t͡s` / `t͡ɕ` / `t͡ʃʰ`.
- Several files (`czh`, `gan`, `hsn`, `wuu` compounds) leave second-syllable
  tones blank, contrary to `CONTRIBUTING.md`.
- `cnp` `drink.js` 饮 is missing its onset (transcription bug).
- `gan` `drink.js` 喝 `hot˥` has a suspect entering-tone coda.

File: `/home/jounlai/langmap/wordmap_reviews/review_88_open.md`
Findings: 25


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 9
- **policy/skip**: 16
- **headline**: hak_tw 阴平 ˨→˨˦ ×3 (父/母/猫), cdo dog 犬→狗 + sun nit→niʔ, cpx water/hand ɬ- restore ×2, dng good ˨˦ tone, cnp drink ʔɐm onset
- **JSON path**: /tmp/wm_edits_88.json
