# Wordmap review #124 — Wu / Jin / Xiang / Gan Sinitic topolect round-2 auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a descriptive phonologist of the non-Mandarin Sinitic topolects, with primary reading and fieldwork focus on the Northern Wu (北部吴语 / Taihu) lects — Shanghai (`wuu`), Suzhou (`wuu_sz`), Ningbo (`wuu_nb`), Hangzhou (`wuu_hz`), Jiaxing/Jinhua (`wuu_jx`, `wuu_jh`) — and on the Oujiang outlier Wenzhou (`wuu_wz`), alongside the Jin (`cjy`), Xiang (`hsn`), and Gan (`gan`) groups. I know this dataset's model intimately: each `words/<concept>.js` file carries a flagship `wuu` row at line 74 plus a granular Wu cohort (`wuu_jh`, `wuu_jx`, `wuu_hz`, `wuu_nb`, `wuu_sz`, `wuu_wz`) lower in the `data:` block, with `wuu_hz`/`wuu_jh`/`wuu_jx` still duplicated across the twice-pasted block (the de-dup tech-debt noted in closed reviews #70/#90/#93), so a `wuu_hz` fix must be applied at BOTH line copies. My diagnostic spine is the Middle Chinese **voiced-obstruent → Wu voiced/breathy onset** correspondence and the **register split** (阴/阳, yin/yang) that ties onset voicing to tone register, including the **checked-tone (入声) split** (阴入 high-short vs 阳入 low-short). Anchor references: Chen (2008) on Wu tone sandhi and the register split; Qian Nairong (錢乃榮, 2003) *Shanghainese* and his Suzhou/Ningbo tone surveys for the 阴上/阴去/入声 citation values; Norman, *Chinese* (1988) ch. 8 on the MC voicing register split; and the project docs `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md`. Round-1 of this remit was review #53 (closed); I have read its adjudication and deliberately do NOT re-raise the items held there (the Shanghai 上声 falling-contour grain call on `水`/`好`/`狗`/`手`, the `心 ɕin˥` 阴平 convention, the `谢谢` reduplication-sandhi hold, or the `ɿ`→`z̩` cohort normalization, which the orchestrator explicitly accepted holding for the granular points). Every Current value below was verified verbatim against the live file at the cited line as of 2026-06-11.

---

## Issues found

### 1. `wuu` — love — 爱 (yin-departing) given a falling tone where both close siblings agree on rising
- **File:** words/love.js line 74
- **Current:** `["爱", "ɛ˧˩"]`
- **Expected:** `["爱", "ɛ˧˧˥"]`
- **Why:** 爱 is 影母 去声 = **阴去** (yin-departing). The Shanghai 阴去 citation tone is a rising 334/335, not a falling 31. The two in-cohort Wu points that share the same Taihu sub-school both write the rising contour and **agree exactly**: `wuu_jx` `love.js:355` `["爱", "ɛ˧˧˥"]` and `wuu_hz` `love.js:408` `["爱", "ɛ˧˧˥"]`. This is materially stronger than the Shanghai 上声 falling-contour call that review #53 *held* (issues #9/#10), because there the granular points genuinely disagreed (`wuu_jx ˧˩˧` vs `wuu_sz ˥˨`); here the relevant siblings are unanimous on `˧˧˥`. The flagship `ɛ˧˩` is the lone outlier and mis-assigns 阴去 the shape of 阴上 (Qian 2003 Shanghai tone table; Chen 2008 on the Shanghai citation inventory).

---

### 2. `wuu_sz` — love — 爱 (阴去) carries the Suzhou 阴上 contour, collapsing 去/上
- **File:** words/love.js line 1057
- **Current:** `["爱", "ɛ˥˨"]`
- **Expected:** `["爱", "ɛ˦˩˨"]`
- **Why:** In Suzhou the **阴上** (yin-rising) citation tone is `˥˨` (52, high-falling) and the dataset applies it uniformly across every 阴上 syllable in the `wuu_sz` column: `好` `good.js:1050` `hɔ˥˨`, `水` `water.js:1056` `sɿ˥˨`, `手` `hand.js:1056` `sɤ˥˨`, `狗` `dog.js:1062` `kɤ˥˨`, `火` `fire.js:1062` `hu˥˨`. But 爱 is 影母 **阴去**, a *different* category that Suzhou keeps distinct: the Suzhou 阴去 is a low-dipping/rising-fall 412/523, not the 52 高降 of 阴上 (Qian 2003 Suzhou tone table). Marking 爱 `˥˨` merges 阴去 into 阴上. The other Wu points keep 爱 distinct from their own 阴上 value (`wuu_jx`/`wuu_hz` `ɛ˧˧˥`, `wuu_wz` `love.js:1058` `ai˦˨`), confirming 爱 is not a 阴上-shaped syllable.

---

### 3. `wuu_nb` — one — 一 (yin-ru) given the low-short 阳入 tone instead of high-short 阴入
- **File:** words/one.js line 988
- **Current:** `["一", "iʔ˩˨"]`
- **Expected:** `["一", "iʔ˥˥"]`
- **Why:** Ningbo Wu retains the entering-tone register split: **阴入** (yin-ru) = high-short (`˥˥`/5), **阳入** (yang-ru) = low-short (`˩˨`/12). 一 is 影母, an unambiguous **yin-ru** syllable, so it must be high-short. The same `wuu_nb` column already proves the correct yin-ru value on another 影母 yin-ru syllable: `屋` in `house.js:989` `["屋里", "oʔ˥˥li"]`. The low `˩˨` here is the **阳入** value, mis-applied (Qian 2003 Ningbo tone inventory; cf. the flagship `wuu` `one.js:74` `iʔ˥`, fixed in review #53). See also #4 and #5 — this is a systematic three-syllable register defect in the Ningbo column, with 屋 as the lone correctly-marked anchor.

---

### 4. `wuu_nb` — eat — 吃 (yin-ru) given the low-short 阳入 tone instead of high-short 阴入
- **File:** words/eat.js line 975
- **Current:** `["吃", "t͡ɕʰiʔ˩˨"]`
- **Expected:** `["吃", "t͡ɕʰiʔ˥˥"]`
- **Why:** 吃 (溪/昌母) is **阴入**; Ningbo 阴入 is high-short `˥˥`, not the low-short `˩˨` of 阳入 (same split as #3). Note this `˩˨` value was referenced in closed reviews #73 (tie-bar uniformity) and #113 (a duplicate-block regression note) — but those treated only the *tie-bar* and the value's *presence*; neither flagged that `˩˨` is the **wrong register** for a yin-ru syllable. The correct anchor is `wuu_nb` 屋 `house.js:989` `oʔ˥˥` (yin-ru, high), and the flagship `wuu` `eat.js:74` `t͡ɕʰiʔ˥`. A voiceless-aspirated yin onset on a low-register `˩˨` tone is internally contradictory.

---

### 5. `wuu_nb` — drink — 喝 (yin-ru) given the low-short 阳入 tone instead of high-short 阴入
- **File:** words/drink.js line 982
- **Current:** `["喝", "hoʔ˩˨"]`
- **Expected:** `["喝", "hoʔ˥˥"]`
- **Why:** 喝 (晓母) is **阴入**; Ningbo 阴入 is high-short `˥˥`. Same systematic error as #3/#4 — the `wuu_nb` column gives three yin-ru syllables (一, 吃, 喝) the 阳入 `˩˨` value while one yin-ru (屋, `oʔ˥˥`) is correct. The siblings confirm yin-ru is high: `wuu_sz` `drink.js:1050` `xəʔ˥˥`, `wuu_hz` `drink.js:401` `xəʔ˥`, and the flagship `wuu` `drink.js:74` `huəʔ˥`. The aspirated/voiceless `h-` onset is itself a yin diagnostic; pairing it with low `˩˨` register is contradictory.

---

### 6. `wuu_nb` — thanks — 谢 (邪母, yang) given a voiceless onset instead of the required voiced one
- **File:** words/thanks.js line 982
- **Current:** `["谢谢", "ɕia˨˧ɕia"]`
- **Expected:** `["谢谢", "ʑia˨˧ɕia"]`
- **Why:** 谢 is MC 邪母 — a voiced fricative, a **yang-register** syllable — and across the entire Wu cohort it surfaces with a voiced onset: `wuu` `thanks.js:74` `ʑia`, `wuu_jx` `thanks.js:348` `zia`, `wuu_hz` `thanks.js:401` `ziɑ`, `wuu_sz` `thanks.js:1050` `ʑia`, `wuu_wz` `thanks.js:1051` `zia`. Ningbo's voiceless `ɕ-` is the lone outlier and is internally inconsistent: the tone `˨˧` here is the *low* (yang) register, yet the onset is voiceless — but Wu yang register is precisely defined by the voiced/breathy onset (Norman 1988 §8; Chen 2008). A yang-register low tone with a voiceless onset cannot co-occur in a faithful Taihu transcription; the onset should be voiced `ʑ`. (This is distinct from review #93 issue #25, which flagged only the *untoned second* `ɕia` as the known Ningbo compound shorthand — the first-syllable onset voicing was not raised there.)

---

### 7. `wuu_sz` — moon — 月 (yang-ru) given a non-existent mid-level checked tone
- **File:** words/moon.js line 1062
- **Current:** `["月亮", "ɦyɪʔ˧˧liɑ̃˨˧"]`
- **Expected:** `["月亮", "ɦyɪʔ˨˧liɑ̃˨˧"]`
- **Why:** 月 is 疑母 入声 = **阳入** (yang-ru). A checked syllable closed by `-ʔ` must carry a *short* entering-tone register value; Suzhou 阳入 is a low-rising short tone (commonly 23). A mid-level `˧˧` is not a possible 入声 contour at all — and every other point in this very row marks 月 as low-short: `wuu` `moon.js:74` `ɲyəʔ˩˨`, `wuu_jh` `moon.js:353` `ɦyøʔ˩˨`, `wuu_jx` `moon.js:354` `ɦyøʔ˩˨`, `wuu_hz` `moon.js:407` `yøʔ˩˨`, `wuu_nb` `moon.js:988` `ɲyəʔ˩˨`. The breathy `ɦ-` onset present on `wuu_sz` confirms yang register, yet the tone reads non-low `˧˧` — an internal contradiction (Qian 2003 Suzhou 入声 split). Parallel to review #53 issue #6, which fixed exactly this "non-existent mid checked tone" defect on the flagship `wuu` 月.

---

### 8. `wuu_hz` — house — 子 suffix (精母, yin) voiced as /dz/ instead of voiceless /ts/
- **File:** words/house.js line 408 (duplicated at line 449)
- **Current:** `['房子', 'vɑŋ˨˩dzɿ˨˩']`
- **Expected:** `['房子', 'vɑŋ˨˩tsɿ˨˩']`
- **Why:** The noun suffix 子 is MC 精母 — a voiceless unaspirated affricate, a **yin-register** syllable — and surfaces as voiceless `ts`. Every Mandarin sibling on this same `房子` string writes `tsɿ`: `zh_nj` `house.js:360` `fɑŋ˩˧tsɿ`, `zh_cq` `house.js:419` `faŋ˨˩.tsɿ˥`, `zh_km` `house.js:421` `faŋ˧˩tsɿ`, `zh_xa` `house.js:422` `faŋ˨˦tsɿ`. A voiced `dz` would imply a 从母 (MC voiced) source, which 子 does not have. Hangzhou Wu is the heavily Mandarin-substratum Wu point (官话底層) and has largely lost the full Wu voiced obstruent series in such suffixal position, so `dz` is doubly wrong here. The head syllable 房 (奉母, yang) is correctly voiced `v`, which makes the suffix's spurious voicing stand out. Fix: `dzɿ` → `tsɿ`. **Note:** the `wuu_hz` row is duplicated, so the edit must be applied at BOTH line 408 and line 449.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

All 8 findings verified verbatim against the live files (2026-06-11) and applied. Each is a clear register/voicing/contour error with unanimous or near-unanimous in-cohort Wu sibling anchors, consistent with the MC voicing register split and the 入声 yin/yang split (Norman 1988 §8; Chen 2008; Qian 2003 tone tables).

1. (124-1) wuu love 爱 line 74: `ɛ˧˩` → `ɛ˧˧˥`. 阴去 rising contour; siblings wuu_jx/wuu_hz both `ɛ˧˧˥`. (applied by orchestrator this round)
2. (124-2) wuu_sz love 爱 line 1057: `ɛ˥˨` → `ɛ˦˩˨`. 阴去 ≠ 阴上 `˥˨`; Suzhou 阴去 is low-dipping. (applied by orchestrator this round)
3. (124-3) wuu_nb one 一 line 988: `iʔ˩˨` → `iʔ˥˥`. 影母 yin-ru high-short; anchor wuu_nb 屋 `oʔ˥˥`. (applied by orchestrator this round)
4. (124-4) wuu_nb eat 吃 line 975: `t͡ɕʰiʔ˩˨` → `t͡ɕʰiʔ˥˥`. 阴入 high-short. (applied by orchestrator this round)
5. (124-5) wuu_nb drink 喝 line 982: `hoʔ˩˨` → `hoʔ˥˥`. 阴入 high-short; voiceless h- onset = yin diagnostic. (applied by orchestrator this round)
6. (124-6) wuu_nb thanks 谢谢 line 982: `ɕia˨˧ɕia` → `ʑia˨˧ɕia`. 邪母 yang voiced onset; whole cohort voiced. (applied by orchestrator this round)
7. (124-7) wuu_sz moon 月亮 line 1062: `ɦyɪʔ˧˧liɑ̃˨˧` → `ɦyɪʔ˨˧liɑ̃˨˧`. 阳入 checked tone cannot be mid-level `˧˧`; breathy ɦ- = yang. (applied by orchestrator this round)
8. (124-8) wuu_hz house 房子 lines 408 AND 449: `dzɿ˨˩` → `tsɿ˨˩` (both duplicate copies). 精母 voiceless yin suffix. (applied by orchestrator this round)

Remaining open: none.

## Reviewer round-2 response (再評価 round-2)

All 8 claimed fixes verified verbatim against the live `words/*.js` files as of 2026-06-11. Every value matches the Expected target exactly.

1. (124-1) ✓ ACCEPT — `words/love.js:74` `wuu` 爱 now `["爱", "ɛ˧˧˥"]`. 阴去 rising contour, matches siblings `wuu_jx`/`wuu_hz` `ɛ˧˧˥`.
2. (124-2) ✓ ACCEPT — `words/love.js:1057` `wuu_sz` 爱 now `["爱", "ɛ˦˩˨"]`. Suzhou 阴去 low-dipping, no longer collapsed into 阴上 `˥˨`.
3. (124-3) ✓ ACCEPT — `words/one.js:988` `wuu_nb` 一 now `["一", "iʔ˥˥"]`. 影母 yin-ru high-short; matches anchor `wuu_nb` 屋 `oʔ˥˥`.
4. (124-4) ✓ ACCEPT — `words/eat.js:975` `wuu_nb` 吃 now `["吃", "t͡ɕʰiʔ˥˥"]`. 阴入 high-short, register/onset now consistent.
5. (124-5) ✓ ACCEPT — `words/drink.js:982` `wuu_nb` 喝 now `["喝", "hoʔ˥˥"]`. 阴入 high-short, voiceless h- onset now matches yin register.
6. (124-6) ✓ ACCEPT — `words/thanks.js:982` `wuu_nb` 谢谢 now `["谢谢", "ʑia˨˧ɕia"]`. 邪母 yang voiced onset, consistent with whole Wu cohort.
7. (124-7) ✓ ACCEPT — `words/moon.js:1062` `wuu_sz` 月亮 now `["月亮", "ɦyɪʔ˨˧liɑ̃˨˧"]`. 阳入 checked tone now low-short `˨˧`, no longer the impossible mid-level `˧˧`; breathy ɦ- onset now consistent.
8. (124-8) ✓ ACCEPT — `words/house.js` `wuu_hz` 房子 now `['房子', 'vɑŋ˨˩tsɿ˨˩']` at BOTH line 408 and line 449 (duplicate block). 精母 voiceless yin suffix; both copies fixed.

New issues raised this round: none. During verification I incidentally noted `wuu_nb` 爱 at `love.js:989` reads `ai˥˧` (not part of any flagged item) — this is a 阴去 falling value and is internally consistent with the Ningbo column, not an error to raise here.

Scorecard: 8/8 accepted (✓), 0 partial, 0 rejected, 0 new issues. All clear errors fixed and verified in live data; nothing remaining for the dev team.

**File status: CLOSED** — nothing left to address.
