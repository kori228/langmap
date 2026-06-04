# HanMap reviewer #57 — Zhuang / Tai / Bai / Proto-Tibeto-Burman (za, ptai, bca, ptb) round-2 audit

Follow-up to review #17 (Kra-Dai + Tai Sinoxenic). Source file: `/home/jounlai/langmap/hanmap_data.js` (READ-ONLY).

Scope: all 59 char blocks, columns `za` (Zhuang), `ptai` (Proto-Tai), `bca` (Central Bai), `ptb` (Proto-Tibeto-Burman), checked against:

- Pittayaporn 2009 (PTai reconstruction)
- Matisoff 2003 *Handbook of PTB* + STEDT
- Wei Qingwen 1989 *Sawndip Sawdenj* + Standard Zhuang Wuming-based orthography (1957/1982)
- Yang Liming 1989 *白語簡志* + Bai Wenzi (1958) Latin spelling

Findings are ordered roughly by severity / systemic impact.

---

## A. Systemic issues (apply across many chars)

### F01 — Bai column drifts into Pinyin orthography on many chars (CRITICAL)

The `bca` descriptor at lines 16054-16111 claims the surface uses "Bai Wenzi Latin orthography (1958)" with tone digits 1-8. But many entries are spelled in **Mandarin Pinyin**, not Bai Wenzi:

- 中:1 `bca: "zhong1"` / 中:2 `bca: "zhong4"` — `zh-` digraph is Pinyin; Bai Wenzi for retroflex/affricate is `zr-` or `j-` depending on dialect.
- 東 `bca: "dong1"`, 西 `bca: "xi1"`, 北 `bca: "bei4"`, 央 `bca: "yang1"`, 食 `bca: "zhix6"`, 上 `bca: "shanx4"`.
- The IPAs (ʐoŋ˥, ʐɿ˨²² etc.) confirm the underlying phones are retroflex, but the romanization is Pinyin, not the 1958 Bai Wenzi system the descriptor advertises.
- Compare with chars that **do** use authentic Bai Wenzi: 二 `nox3`, 五 `ngux3`, 六 `lox6`, 木 `mux6` (`-x` final = checked syllable in Bai Wenzi, no Pinyin equivalent).

Either standardize the column on Bai Wenzi (preferred, matches descriptor) or update the descriptor to say "mixed Bai Wenzi / Pinyin transcription".

### F02 — Standard Zhuang tone-letter table in descriptor is wrong (CRITICAL)

`za` descriptor at line 16334 (and translations 16335-16352) states:

> z=第1声, j=第2声, x=第3声, q=第4声, h=第5声, 無印=第6声

This is **inverted**. The official 1957/1982 Standard Zhuang convention (Wuming-based) is:

| Tone | Pitch | Letter |
|------|-------|--------|
| T1 | ˨˦ (24) | unmarked |
| T2 | ˧˩ (31) | z |
| T3 | ˥ (55) | j |
| T4 | ˦˨ (42) | x |
| T5 | ˧˥ (35) | q |
| T6 | ˧˧ (33) | h |
| T7 (short) | ˥ (55) | -p/-t/-k |
| T8 (long) | ˧ (33) | -b/-d/-g |

The actual `surface` field values in the data follow the **standard** convention (e.g. 三 `sam` unmarked = T1, 二 `ngeih` h = T6). It is **only the descriptor table** that is wrong. All 19 localized translations propagate the same incorrect mapping.

### F03 — `za` column mixes Sino-Zhuang loan stratum with native Tai vocabulary without flagging

The descriptor calls this column "Sino-Zhuang reading / 壮语汉字音". But the surface forms alternate uncontrollably between two strata:

- **Sino-Zhuang loans**: 一 `iet`, 二 `ngeih`, 三 `sam`, 七 `caet`, 八 `bet`, 十 `cib`, 月 `nyied`, 水 `suij`, 火 `foj`, 山 `san`
- **Native Tai (= Pittayaporn etymon)**: 五 `haj` (PTai *haː), 牛 `vaiz` (*ŋwɯa), 鳥 `roeg` (*nok), 日 `ngaed` (*ŋwan 'day'), 木 `moed` (*maj), 馬 `max` (*maː), 魚 `naz` (*plaː — but see F08), 手 `soux` (*mɯː), 足 `cug` (*tiːn), 走 `byaij` (*lɛːn), 坐 `naengh` (*naŋ)

This is a real Sino-Bai vs Sino-Zhuang difference (Bai has consistent literary stratum, Zhuang substitutes natives) — but the column header promises "Sino-Zhuang reading" and delivers native vocabulary half the time. Either rename the column ("Standard Zhuang reading, native or borrowed") or split into two layers as `za` (native) / `za_sino` (Sino-Zhuang loan reading, e.g. 五 ngoj, 牛 niuz, 鳥 deuj).

### F04 — Zhuang `ipa` tone contours don't match the orthographic tone letter

The `ipa` block treats `˧˧` (33) as the default contour for unmarked syllables, but Standard Zhuang T1 (unmarked letter) = `˨˦`, and ˧˧ is T6 (`-h`).

Concrete mismatches:

- 三 `za: "sam"` (T1) → expected `saːm˨˦`, file gives `saːm˧˧` (= T6 contour)
- 二 `za: "ngeih"` (T6) → expected `ŋei˧˧`, file gives `ŋei˨˦` (= T1 contour) — exactly swapped with 三
- 八 `za: "bet"` (T7 short) → file gives `pɛt̚˥` ✓ matches
- 一 `za: "iet"` (T7) → file gives `ʔjɛt̚˥` ✓
- 食 `za: "gwn"` (T1) → file gives `kɯn˧˧` (T6 contour again)

Looks like the tone-pitch lookup table used to generate the IPA column is built from the *descriptor's* inverted tone chart (F02), not the actual one. If F02 is fixed, this column should be re-derived.

---

## B. Proto-Tai (`ptai`) — Pittayaporn 2009 conformance

### F05 — Non-standard glottal-marker placement `*Xˀ.T`

Pittayaporn 2009 marks preglottalization on initial consonants (*ɓ, *ɗ, *ʔj, *ʔw) and tone categories as A/B/C/D. There is no convention for a `ˀ` between the rime and the tone category.

Affected entries:

- 火 `ptai: "*vajˀ.A"` (lines 3196/3294) — should be `*vaj.A`. (If the intent was the glottal-final variant, Pittayaporn writes that as `*vaʔ` not `*vajˀ`.)
- 頭 `ptai: "*krawˀ.C"` (lines 7621/7711) — should be `*kraw.C`.
- 耳 (cross-check) is `*qruː.A` — clean, no ˀ. So `*vajˀ`/`*krawˀ` look like authoring artifacts.

### F06 — 走 PTai 'walk/run' tone category

走 `ptai: "*lɛːn.B"` (line 12409). Pittayaporn 2009 reconstructs *lɛːnᴬ for 'to walk / to run' (Thai เดิน /dɤːnA1/, Lao ເລັ່ນ — both A-tone reflexes). B is the qu/yang category and would predict Thai mid-tone with rising contour; reflexes don't support that. Should be `*lɛːn.A`.

### F07 — 来 / 去 / 行:1 / 行:2 all share `*paj.A` — three of them are wrong

- 来 'come' `ptai: "*maː.A"` ✓ (Pittayaporn *maːᴬ)
- 去 'go' `ptai: "*paj.A"` ✓ (Pittayaporn *pajᴬ 'to go')
- 行:1 'to walk' `ptai: "*paj.A"` — 'walk' is *jaːŋᴬ or *paj is OK as 'go' but it's already in 去
- 行:2 'conduct/behaviour' `ptai: "*paj.A"` — semantically wrong. 行 'conduct' is a Sinitic abstract noun with no native Tai etymon; this row should be blank, or mapped to a Tai abstract like *kaːn.A 'work/affair', not the motion verb.

### F08 — 魚 `za: "naz"` is the wrong word

魚 row gives `za: "naz"` (`naː˨˩˧`, T2). But Standard Zhuang for 'fish' is **bya** (← PTai *plaːᴬ, as the row itself correctly records). `naz` means 'paddy/rice field' (← PTai *naː). This is a swap with 田.

`ptai: "*plaː.A"` is correct; only the `za` row needs to change from `naz`/`naː˨˩˧` to `bya`/`pjaː˨˦`.

### F09 — 月 `za: "nyied"` vs `ptai: "*ɓlɯan.A"` are different strata, not aligned

`nyied` /ɲet̚˩/ is a Sino-Zhuang reading from MC ngjwot. The native Zhuang word from PTai *ɓlɯan is **ndwen** /ɗɯan/. As-is the row implies *ɓlɯan > nyied, which is impossible (the *ɓl- cluster never becomes ɲ- in Tai). Either change `za` to `ndwen` to match `ptai`, or move `nyied` to a separate `za_sino` column.

Same structural issue for 水 (`za: "suij"` Sino-Zhuang vs `ptai: "*nam.C"` → native `raemx`) and 火 (`za: "foj"` Sino-Zhuang vs `ptai: "*vaj.A"` → native `feiz`).

### F10 — 上 `ptai: "*kɯn.A"` collides with 食 `ptai: "*kɯn.A"`

Both 上 (line 8462) and 食 (line 12000) carry `*kɯn.A`. Pittayaporn distinguishes:

- 上 'to ascend / above' = *kɯn.A (or *(k)ʰɯn.A) — debated
- 食 'to eat' = *kɯn.A ✓ (standard, Thai กิน)

Whether these are true homophones in PTai is contested. If kept as homophones, add a comment, because the row 上 currently has surface `za: "ciengx"` (= Sino-Zhuang reading of 上, MC zyangX → ɕiaŋ) which has zero phonological relationship to *kɯn 'ascend'. Most likely 上 should be `*kʰɯn.A` or simply blank.

### F11 — 六 `ptai: "*xrok.D"` — Pittayaporn uses `*hrok`

Pittayaporn 2009 reconstructs 'six' as *hrokᴰ (voiceless laryngeal /h/ + r), not *xrok with velar fricative. Same row for 鳥 `ptai: "*C̬.nok.D"` — the voicing-class brace `C̬` is correct Pittayaporn notation; just 六 needs `*hrok.D`. (This is the same convention bug flagged in #17.)

### F12 — 央 has no `ptai` entry, but Pittayaporn has *klaːŋᴬ 'middle' which is what 中:1 already uses

央 row (line 9223 → 9251) leaves `ptai` empty. 中:1 and 中:2 both use `ptai: "*klaːŋ.A"`. Semantically 央 'centre' is the closer gloss for *klaːŋ ('middle/centre, river-flat'). Either fill 央 with `*klaːŋ.A` or move it off 中.

---

## C. Proto-Tibeto-Burman (`ptb`) — Matisoff/STEDT conformance

### F13 — 一 `ptb: "*it"` is not a STEDT root

The file gives 一 `ptb: "*it"` on both surface and ipa. STEDT/Matisoff has no PTB reconstruction *it for 'one' — the most-cited candidates are *g-t(y)ik / *kat / *(k)wat (none widely accepted). `*it` looks like the Old Chinese / Sino-Tibetan 一 form copied into the PTB slot. Either replace with the STEDT root #2363 *(g-)t(y)ik (with a confidence note) or blank it.

### F14 — 肉 `ptb: "*sya-n"` — the `-n` suffix is non-canonical

Matisoff/STEDT root for 'flesh, meat, animal' is **\*sya** (#5793). The trailing `-n` would be the Old Chinese 肉 *nuk → *njuk-s reflex, not PTB. Should be `*sya` (the row already correctly handles 食 as `*dzya` without an OC suffix).

### F15 — Major PTB coverage gaps for core body / animal / nature words

These chars have well-established Matisoff/STEDT etyma but `ptb` is blank:

| Char | Suggested PTB | STEDT # | Confidence |
|------|---------------|---------|-----------|
| 牛 | *ŋwa | #54 | high |
| 馬 | *m-raŋ | #1265 | high |
| 手 | *l-(w)ak / *g-lak | #623 | high |
| 足 | *(r-)kaŋ | #614 | high |
| 目 | *mik / *myak | #34 | high |
| 口 | *m-ka(w) | #483 | medium |
| 頭 | *(d/m)-bu / *(s-)gaːŋ | #644 | medium |
| 虎 | *k-la | #2486 | high |
| 八 | *b-r-gyat | #2536 | high |
| 月 | *s-(g)la | #1016 | high |
| 水 | *ti(y) | #621 | high |
| 木 | *siŋ / *sik | #94 | high |
| 立 | *g-r(y)ap | #1496 | high |
| 聞 | *g/r-na | #468 | high |
| 飲 | *m-tuŋ / *ʔam | #2237 | medium |
| 来 | *la / *(s-)leŋ | — | medium |

Adding even half of these would bring the column close to the Matisoff *Handbook* coverage advertised in the `ptb` descriptor (line 17562).

### F16 — 山 `ptb: "*r-i"` is a marginal pick

`*r-i` (STEDT #602 'mountain, hill') exists but is far less attested than *(s-)gaːŋ or *g-laːŋ for 'mountain'. Worth a note in sources, or pair both forms with `⪤`.

### F17 — `ptb` IPA column duplicates the orthographic form

Every `ptb` entry that exists is the **same string** in `surface` and `ipa` (e.g. `*g-nis` / `*g-nis`). For other proto-languages in the file (e.g. `ptai` *saːm.A / *saːm˧, `pst` *sɨm / *sɨm) there is at least some surface↔IPA difference. PTB transcription is already in IPA-ish symbols, so this is OK in principle — but consistency would suggest using Matisoff's tonemark convention (no tones, but `-` morpheme boundary) in `surface` and pure phones (no `-`) in `ipa`, e.g. `*g-nis` / `*ɡnis`.

---

## D. Central Bai (`bca`) — Sino-Bai loan stratum

### F18 — 行:1 vs 行:2 are identical in Bai

行:1 (xíng 'to walk', MC haeng/heng level tone) and 行:2 (háng 'row / line / occupation', MC haeng level tone) collapse to one MC pronunciation, but the readings split in Mandarin (T2 vs T2 for xíng vs T2 for háng — actually both Tone 2 in Mandarin, only Cantonese splits them as hang4 vs hong4). Central Bai should retain the same MC-level reflex but the file repeats `bca: "hang2"` IPA `xaŋ˧˥` for both. Cantonese-style split (`hang2` xing vs `hong2` hang) would be the expected sino-Bai pattern if the loan layer came via Cantonese. Worth verifying against Yang Liming 1989 — at minimum mark this as a known merger.

### F19 — Bai tone numbers 1-8 vs MC tone-class predictions

Cross-check of Bai T-number vs expected sino-Bai reflex of MC tone class:

| Char | MC class | Expected Bai T | File `bca` | Match? |
|------|----------|---------------|------------|--------|
| 一 | rusheng (yinru) | T7 or T8 | `it6` (T6) | ✗ |
| 北 | rusheng | T7 or T8 | `bei4` (T4) | ✗ |
| 八 | rusheng | T7 or T8 | `be2` (T2) | ✗ |
| 六 | rusheng (yangru) | T8 | `lox6` (T6) | partial — Bai may merge ru into yang categories |
| 十 | rusheng | T8 | `zix6` (T6) | partial |
| 月 | rusheng | T8 | `nyuex4` (T4) | ✗ |
| 食 | rusheng | T8 | `zhix6` (T6) | partial |

A pattern: rusheng (entering) syllables are inconsistently assigned T2/T4/T6 instead of T7/T8. Central Bai does merge entering tones partially, but to T8 (yang-ru) or T6, not T2/T4. Worth verifying the entire entering-tone column.

### F20 — 龍 `bca: "long2"` — should not match Mandarin lóng

Mandarin lóng (T2). MC 龍 = ljowng (level tone, yang). Sino-Bai should preserve the yang-level reflex (Bai T2 in many descriptions = ˧˥ /35/). `long2` matches the MC class but the spelling `long` is the Pinyin form. Bai Wenzi `loux2` or `lonx2` would be more typical (with -x or no checked marker since not rusheng). Compare with 龍 yue `lung4` — Bai should be closer to that than to Mandarin. Same Pinyin-leak issue as F01.

### F21 — Loan layer divergence audit between `bca` and `za`

The two columns should differ on chars borrowed at different periods:

- **Old/Middle Chinese stratum** (both Bai and Zhuang received): 一 二 三 七 八 十 — both columns show Sinitic phonology ✓
- **Native Tai retained, Sino-Bai borrowed**: 五 (bca ngux3 sino, za haj native), 牛 (bca ngiux2 sino, za vaiz native), 鳥 (bca niux3 sino, za roeg native), 魚 (bca ngvx2 sino, za naz wrong word — see F08), 馬 (bca maq3 sino, za max — but max is native Tai *maː, just happens to look like Chinese). These divergences are correct in principle but the column descriptor for `za` doesn't acknowledge the native-vs-loan split (see F03).
- **Both share native or both share Sinitic for animals**: 犬 bca khoe4 sino (← MC khwen) vs za gienz — both sino but Zhuang `gienz` (T2) is a strange tone (犬 is shang-tone in MC, expected T3 or T5 not T2). Worth re-checking against Sawndip.

---

## E. Smaller / individual findings

### F22 — 海 has no `ptai` (line 4407 block, ends ~4609)

海 'sea' row: `bca: "hae3"`, `za: "haij"`, but `ptai` empty and `ptb` empty. PTai for 'sea/ocean' is *thalɛːᴬ (loan from Sanskrit) — fair to leave blank. But Zhuang `haij` /haːi˨˩/ is itself a Sino-Zhuang loan from MC *xojX, so the row could note `(Sino-Zhuang loan)` in sources. The `za` IPA tone ˨˩ for `-j` (=T2) doesn't match the standard T2 contour ˧˩ either (F04 again).

### F23 — 央 has no `ptai`, no `ptb`

See F12. Also: `za: "yangh"` /jaŋ˨˦/ — yangh ends in `-h` (T6) but IPA ˨˦ is T1 contour. Same F04 swap.

### F24 — 飲 `ptai: "*ɣɯn.A"` is non-standard

Pittayaporn 2009 has 'to drink' as **\*ɗɯːmᴬ** (Thai ดื่ม dɯ̀ːm, Lao ດື່ມ). *ɣɯn.A doesn't match any reflex set I can find and looks like a typo for 食 *kɯn.A. Should be `*ɗɯːm.A`.

### F25 — 走 `bca: "zvx3"` collides with 左 `bca: "zvx3"` and 坐 `bca: "zvx4"`

All three rows give Bai `zvx?` with only the tone digit distinguishing:

- 左 `zvx3` (line 9446)
- 走 `zvx3` (line 12367)
- 坐 `zvx4` (line 12571)

Bai Wenzi `zvx` would be /ʦɯ/ with x = checked syllable. But the file's own IPA for these three is `ʦɯ˨˩˦` (left & run) and `ʦɯ˨˩` (sit) — all open syllables, no glottal stop, so `-x` (checked marker in Bai Wenzi) is wrong. Spelling should drop the `-x` (e.g. `zv3`) or change `-x` to a tone-only marker. Most likely either the orthography is corrupted across all three rows, or the homophony is real but the `-x` shouldn't be there.

---

## Summary

Critical / systemic: F01 (Bai Pinyin leak), F02 (Zhuang tone-letter table inverted in descriptor), F03 (za stratum mixing), F04 (Zhuang IPA tone contours follow the inverted table).

High priority: F05-F08 (PTai notation + word swap on 魚), F13-F14 (spurious PTB *it, spurious PTB suffix on 肉), F15 (PTB coverage gaps on body parts / animals), F19 (Bai entering-tone reflexes), F24 (飲 PTai wrong root).

Medium / individual: F06, F07, F09-F12, F16-F18, F20-F23, F25.

---

**File:** `/home/jounlai/langmap/hanmap_reviews/57_open.md`
**Findings:** 25


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 15
- **policy/skip**: 18
- **headline**: za 魚 naz→bya (paddy field→fish), ptb 一 *it 削除, ptb 肉 -n drop, ptai 飲 *ɣɯn.A→*ɗɯːm.A, 走 .B→.A, 六 *xrok→*hrok, 行:1 *paj→*jaːŋ, 行:2 null
- **JSON**: /tmp/hm_edits_57.json
