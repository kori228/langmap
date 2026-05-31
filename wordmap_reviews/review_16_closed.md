# Wordmap review #16 — Tai-Kadai / Hmong-Mien / Austroasiatic specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a field phonologist with a regional specialisation in mainland Southeast Asian tonal and register languages. My primary reference shelf for this review:

- **Diller, Edmondson & Luo (eds.)** *The Tai-Kadai Languages* (2008) — tone systems, dialect comparison, Tai Lue and Bouyei chapters.
- **Ratliff, Martha** *Hmong-Mien Language History* (2010) — Proto-Hmong-Mien reconstruction, RPA tone-letter correspondences.
- **Jenny, Mathias & Sidwell, Paul (eds.)** *The Handbook of Austroasiatic Languages* (2015) — Mon, Wa, Khasi, Munda, Katuic, Bahnaric chapters.
- **Thompson, Laurence C.** *A Vietnamese Reference Grammar* (1987) — tones, initials (tr-/ch- distinction), dialectal phonology.
- **Headley, Robert K. et al.** *Cambodian-English Dictionary* (1977) and Huffman *Cambodian System of Writing* (1970) — Khmer register and vowel values.

---

## Issues

### Thai (standard — th)

**Issue 1 — `fire.js` th: ไฟ tone ˧ is correct but `th_isan`, `th_n`, `th_s` all show faj˥ (high level)**

`words/fire.js:79` th `["ไฟ", "faj˧"]` — mid tone, correct for Bangkok Thai: ฝ/ฟ is a low-class consonant, live syllable, no tone mark → mid ˧ ✓.
`words/fire.js:192–194` th_isan/th_n/th_s all give `"faj˥"`. In Isan (essentially Lao-toned), ฟ (low class) + live syllable, no mark → rising ˩˧, not high ˥. In Northern Thai, ไฟ belongs to a different tone class but ˥ is also unexpected. Southern Thai likewise: mid-class-style assignment. All three dialect entries appear to have been assigned the same incorrect high tone ˥ through a copy error.

---

**Issue 2 — `cat.js` th_isan/th_n/th_s all show mɛːw˥ (high) vs. standard mɛːw˧ (mid)**

`words/cat.js:79` th `"mɛːw˧"` — correct (ม = low-class, live, no mark → mid ˧ in Bangkok).
`words/cat.js:192–194` th_isan/th_n/th_s all `"mɛːw˥"`. In Isan, ม (low-class consonant by Thai standards, low-class by Lao standards) + live syllable → rising ˩˧ (not ˥). All three non-standard dialects share the same implausible ˥ contour.

---

### Lao (lo)

**Issue 3 — `drink.js` lo: ດື່ມ tone shown as ˩ (extra-low level); should be ˨˩**

`words/drink.js:147` lo `["ດື່ມ", "dɯːm˩"]`. ດ = low-class consonant in Lao; ່ (mai ek) on a low-class consonant → Vientiane tone 1, low-falling ˨˩ (21). The contour ˩ (bare Chao-1, a level extra-low) does not correspond to any standard Lao tone. Correct: `dɯːm˨˩`.

---

**Issue 4 — `mother.js` lo: ແມ່ tone ˩ should be ˨˩**

`words/mother.js:147` lo `["ແມ່", "mɛː˩"]`. ມ = low-class, ่ mai ek → tone 1 ˨˩. Same bare-˩ error as Issue 3. Correct: `mɛː˨˩`.

---

**Issue 5 — `father.js` lo: ພໍ່ tone ˩ should be ˩˧ (rising)**

`words/father.js:147` lo `["ພໍ່", "pʰɔː˩"]`. ພ = high-class consonant in Lao; ่ (mai ek) on high-class → tone 4, low-rising ˩˧ (13). The notation ˩ conflates this with the low-falling category. Correct: `pʰɔː˩˧`.

---

**Issue 6 — `one.js` lo: ໜຶ່ງ tone ˩ should be ˩˧**

`words/one.js:147` lo `["ໜຶ່ງ", "nɯŋ˩"]`. ໜ = high-class consonant (the special letter for /ŋ̊/), ่ mai ek → high-class + mai ek = tone 4, rising ˩˧. Correct: `nɯŋ˩˧`.

---

**Issue 7 — `sun.js` lo: second syllable ven˩ should be ˩˧**

`words/sun.js:147` lo `["ຕາເວັນ", "taː˩˧ ven˩"]`. ວ = low-class consonant; live syllable, no mark → rising ˩˧ for the second syllable. The bare ˩ is again incorrect. Correct: `ven˩˧`.

---

**Issue 8 — `fire.js` lo: ໄຟ tone ˩˧ should be ˦˥ or ˥ (high)**

`words/fire.js:147` lo `["ໄຟ", "faj˩˧"]`. The initial ຟ is a high-class consonant in Lao (aspirated initial); live syllable, no mark → tone 3, high ˦˥ (or ˥ as used elsewhere in this dataset). Rising ˩˧ is tone 4, the low-class no-mark category. Correct: `faj˦˥`.

---

### Hmong (hmn) — White Hmong RPA

The RPA tone-letter → Chao-tone mapping is systematically incorrect for at least three tone categories (b, s, v). Following Ratliff (2010) and Mortensen (2004):

| RPA letter | Tone name | Standard Chao |
|---|---|---|
| -b | high falling | ˥˩ (51) |
| -s | high level | ˦˥ (45) |
| -v | mid level | ˧ (33) |
| -j | low | ˩ (11) or ˨˩ |

**Issue 9 — `cat.js`/`dog.js`/`house.js` hmn: -v tone shown as ˧˩ (falling) instead of ˧ (level)**

- `words/cat.js:196` hmn `["miv", "mi˧˩"]` — 'v' tone = ˧; the ˩ coda is spurious. Correct: `mi˧`.
- `words/dog.js:196` hmn `["dev", "te˧˩"]` — same. Correct: `te˧`.
- `words/house.js:203` hmn `["tsev", "tɕɛ˧˩"]` — same. Correct: `tɕɛ˧`.

---

**Issue 10 — `hand.js`/`drink.js`/`fire.js` hmn: -s tone shown as ˧˩ (mid-falling) instead of ˦˥ (high level)**

- `words/hand.js:196` hmn `["tes", "te˧˩"]` — 's' tone = ˦˥. Correct: `te˦˥`.
- `words/drink.js:196` hmn `["haus", "hɑu˧˩"]` — 's' tone = ˦˥. Correct: `hɑu˦˥`.
- `words/fire.js:202` hmn `["taws", "tɑ˧˩"]` — 's' tone = ˦˥. Correct: `tɑ˦˥`.

The entire 's'-tone category is assigned the ˧˩ contour that belongs to neither 's' nor 'v'; it appears to be a misread of the falling 'b' contour mapped one step down.

---

**Issue 11 — `love.js`/`one.js`/`heart.js` hmn: -b tone shown as ˧˥ (rising) instead of ˥˩ (high falling)**

- `words/love.js:203` hmn `["hlub", "ɬu˧˥"]` — 'b' tone = ˥˩. Correct: `ɬu˥˩`.
- `words/one.js:202` hmn `["ib", "i˧˥"]` — 'b' tone = ˥˩. Correct: `i˥˩`.
- `words/heart.js:196` hmn `["siab", "ɕiã˧˥"]` — 'b' tone = ˥˩. Correct: `ɕiã˥˩`.

The 'b' contour is consistently written as low-rising ˧˥, which is the opposite slope (rising vs. high-falling). This is a systematic inversion.

---

### Vietnamese (vi, vi_c, vi_s)

**Issue 12 — `heart.js` vi: "trái tim" initial tr- transcribed as t͡ɕ; should be ʈ for Northern Vietnamese**

`words/heart.js:76` vi `["trái tim", "t͡ɕaj˧˥ tim˥"]`. In standard Hanoi Vietnamese, the orthographic cluster `tr-` is a retroflex affricate [ʈ] (or [ʈ͡ʂ] depending on analysis), distinct from `ch-` = [t͡ɕ]. Many modern Hanoi speakers show a merger, but the reference form for `vi` (Northern standard) should reflect [ʈ]. Compare `vi_c` which correctly uses `ʈaːj˩˧`. The Southern form `vi_s` also correctly uses `ʈaːj˧˥`. The Northern entry alone shows the merged t͡ɕ, which is inconsistent with the standard used elsewhere (e.g., Thompson 1987 §3.2). Recommend: `ʈaj˧˥ tim˥`.

---

**Issue 13 — `vi_han` entries for 一 (one) and 日 (sun/day) have identical transcriptions; 一 is wrong**

`words/one.js:563` vi_han `["一", "ɲət˨˩"]` and `words/sun.js:563` vi_han `["日", "ɲət˨˩"]` are identical. The character 日 /ɲit/ (Middle Chinese *ȵit, Rì) legitimately yields initial /ɲ/. The character 一 /ʔit/ (MC *ʔit, Yī) has a glottal initial /ʔ/, not /ɲ/. The vi_han reconstruction for 一 should be `ʔit˨˩` or similar. The two graphs have been given the same phonological form, which is incorrect; the confusion likely arose because both are -t entering-tone syllables.

---

**Issue 14 — `vi_s` "chó" (dog): initial transcribed as bare ɕ instead of t͡ɕ**

`words/dog.js:78` vi_s `["chó", "ɕɔ˧˥"]`. Southern Vietnamese `ch-` is generally described as [t͡ɕ] (Thompson 1987; Kirby 2011 on Southern phonology), the same voiced/voiceless affricate as Northern, though slightly more retracted. The plain fricative /ɕ/ is the standard realisation of orthographic `x-` (e.g., `xin` = /sin/ N, /ɕin/ some S dialects), not `ch-`. Recommend: `t͡ɕɔ˧˥` (keeping parity with the Northern entry).

---

### Zhuang (za)

**Issue 15 — `eye.js` za: romanization "da" but IPA shows voiceless taː˥; initial consonant mismatch**

`words/eye.js:195` za `["da", "taː˥"]`. In standard Zhuang (Sawndip romanization and modern standardized Zhuang), the letter `d` represents a voiced alveolar stop /d/. If the written form is `da`, the IPA should be `/da˥/`, not `/taː˥/`. The voiceless /t/ would correspond to Zhuang written `t`. Either the romanization or the IPA initial is wrong; they are phonemically distinct in Zhuang.

---

### Shan (shn) — tone notation absent

**Issue 16 — All 20 shn entries lack Chao tone notation in the IPA field**

Every Shan entry (e.g., `words/cat.js:786` shn `["မႅဝ်", "mɛw"]`, `words/sun.js:792` shn `["ဝၼ်း", "wan"]`, `words/dog.js:786` shn `["မႃ", "ma"]`) gives bare segment-only IPA with no tone diacritic. Shan has five lexical tones (Diller 2008; Morey 2005). The New Tai Lue–style tone marks embedded in the Shan script (e.g., ်, ်ⅡI, etc.) encode these tones and should be reflected in the IPA. The absence is a systematic gap affecting all 20 lemmas.

---

### Tai Lue / New Tai Lue (khb) — tone notation absent

**Issue 17 — All 20 khb entries lack Chao tone notation in the IPA field**

All khb entries (e.g., `words/mother.js:992` khb `["ᦡᦲᧈ", "meː"]`, `words/sun.js:992` khb `["ᦋᧁᧉ", "tsau"]`) give segment-only IPA. New Tai Lue has six tones encoded via the tone-mark characters ᧈ ᧉ ᧅ ᧄ ᧆ ᧇ embedded in the script. For example, ᦡᦲᧈ bears tone mark ᧈ (tone 2, rising ˩˧ approximately), but the IPA `meː` carries no tone. This is a systematic omission across all 20 lemmas.

---

### Mon (mnw) — script/transcription mismatches

**Issue 18 — `dog.js` mnw: script form ပ္ၟိၚ် cannot yield the transcription "klɛp"**

`words/dog.js:1082` mnw `["ပ္ၟိၚ်", "klɛp"]`. The standard Mon word for dog (Halliday 1922; Jenny & Sidwell 2015) is /kloiŋ/ ~ /klɛŋ/ (voiceless lateral cluster + vowel + velar nasal). The script form shown — ပ initial, subscript ္ + ၟ cluster, vowel ိ, final ၚ (velar nasal) with asat ် — contains no bilabial stop coda /-p/ that would yield "klɛp". The final consonant carrier ် + ၚ points to a nasal, not a stop. Either the Mon script form or the Latin transcription/IPA is wrong; they do not match.

---

**Issue 19 — `fire.js` mnw: script form ပၟတ် cannot yield the two-syllable transcription "pəmoʔ"**

`words/fire.js:1082` mnw `["ပၟတ်", "pəmoʔ"]`. The Mon script ပၟတ် contains: ပ = /p/, subscript ၟ forming a cluster, တ = /t/, asat ်. This is a single monosyllabic cluster; the transcription pəmoʔ has a medial /m/ that does not appear anywhere in the script entry. The standard Mon word for fire is approximately /panat/ or /pnɔʔ/ (Jenny 2005). The IPA "pəmoʔ" appears to belong to a different lexical entry.

---

**Issue 20 — `hand.js` mnw: vowel mismatch — ဲ should be /ɛː/ not /oa/**

`words/hand.js:1076` mnw `["တဲ", "toa"]`. In Mon script, ဲ is the vowel that represents /ɛː/ (Jenny & Sidwell 2015; Shorto 1971 Mon vowel chart). The IPA /toa/ uses a back-rounded vowel that is inconsistent with ဲ. The expected transcription is approximately /tɛː/ or /toa/ only if ဲ is being read as a Mon-specific diphthongized form (attested in some analyses as /toə/), but even then /toa/ is not the canonical IPA. Compare the standard Halliday form /toa/ which does exist in older orthographic conventions — however the inconsistency with the vowel letter ဲ as used elsewhere in this dataset should be flagged.

---

### Supplementary issues

**Issue 21 — `good.js` lo: tone ˩˧ for ດີ is correct but the hello greeting syllable sa˨ (ສ in ສະບາຍດີ) uses bare ˨ (low level) without a falling endpoint**

`words/hello.js:147` lo `["ສະບາຍດີ", "sa˨ baːj˩˧ diː˩˧"]`. The syllable ສະ: ສ = low-class Lao consonant, short vowel, live syllable, no tone mark → tone 2 mid ˧ in some analyses, or ˩˧ rising in others. The notation ˨ (low level, Chao-2) does not match either standard assignment for low-class + live in Vientiane Lao. It appears to be a compromise between ˧ and ˨˩ rather than a phonologically grounded choice.

---

**Issue 22 — `water.js` vi_han: 水 reconstructed as tʰwi˧˩˧ (dipping contour); the shǎng-tone reconstruction is non-standard for this entry**

`words/water.js:564` vi_han `["水", "tʰwi˧˩˧"]`. Middle Chinese 水 (*ɕuiX, shǎng tone) would yield a rising-then-dipping contour in some reconstructions; ˧˩˧ (dipping) is the standard representation used here for the hǒu-shǎng (shǎng departing?) categories. However, the Sino-Vietnamese reading of 水 is /thủy/ (hỏi tone = ˧˩˧) which does map to the dipping contour. This is internally consistent if the vi_han layer represents Sino-Vietnamese rather than reconstructed Middle Chinese. The dataset should document which layer is intended — the same character maps differently in MC reconstruction vs. Sino-Vietnamese borrowing. (Flagged as documentation gap rather than hard error.)

---

**Issue 23 — `moon.js` th_isan/th_n/th_s: form เดือน (month) entered instead of a 'moon' lexeme for these dialects**

`words/moon.js:192–194` th_isan/th_n/th_s all give `["เดือน", "dɯːan˥"]`. The instruction header for moon.js states: "ไม่ใช่ 'เดือน' ในปฏิทิน" (not the calendar 'month'). เดือน means both 'moon (heavenly body)' and 'month' in Northern and Northeastern Thai, so the form itself is not wrong, but all three dialect entries show the exact same IPA `dɯːan˥` with high-level tone ˥. Northern Thai (th_n) and Isan (th_isan) have distinct tone systems; identical Chao notation across three typologically different tonal dialects strongly suggests the tones have not been independently verified for each variety.

---

## Worker round-1 response (作業者round-1)

Thank you for a meticulous, well-sourced review. I applied the clear, internally-grounded fixes and held the genuine analysis/system-level items. Detail per issue:

**Lao bare-˩ anomaly (Issues 3–7) — APPLIED (by orchestrator this round).**
Confirmed that bare `˩` (level extra-low) appears in the Lao layer ONLY in these five flagged entries; everywhere else the Lao data uses `˨˩` for low-falling and `˩˧` for rising. The bare `˩` is therefore a clear internal inconsistency, and your corrections follow the standard Vientiane consonant-class tonology using contours already present in the dataset:
- Issue 3 `drink.js` lo `dɯːm˩` → `dɯːm˨˩` (low-class ດ + mai ek → tone 1).
- Issue 4 `mother.js` lo `mɛː˩` → `mɛː˨˩` (low-class ມ + mai ek).
- Issue 5 `father.js` lo `pʰɔː˩` → `pʰɔː˩˧` (high-class ພ + mai ek → tone 4 rising).
- Issue 6 `one.js` lo `nɯŋ˩` → `nɯŋ˩˧` (high-class ໜ + mai ek → tone 4 rising).
- Issue 7 `sun.js` lo `taː˩˧ ven˩` → `taː˩˧ ven˩˧` (second syllable ວ low-class, live, no mark → rising; only the trailing `ven˩` changed).

**Hmong RPA tone normalization (Issues 9–11) — APPLIED (by orchestrator this round), extended to all variants.**
The dataset conflates the RPA `-s` and `-v` categories (both written `˧˩`), which is an internal inconsistency, not a defensible single-school choice. Applied the standard Ratliff (2010) / Mortensen (2004) mapping. Per the team's "fix all variants together" rule, I also corrected the two non-flagged finals in the same categories (`txiv` -v in father.js, `hnub` -b in sun.js) so the layer stays consistent:
- `-v` → `˧` (mid level): `cat.js` mi˧˩→mi˧, `dog.js` te˧˩→te˧, `house.js` tɕɛ˧˩→tɕɛ˧, **`father.js` txiv tɕi˧˩→tɕi˧ (added for consistency).**
- `-s` → `˦˥` (high level): `hand.js` te˧˩→te˦˥, `drink.js` hɑu˧˩→hɑu˦˥, `fire.js` tɑ˧˩→tɑ˦˥.
- `-b` → `˥˩` (high falling): `love.js` ɬu˧˥→ɬu˥˩, `one.js` i˧˥→i˥˩, `heart.js` ɕiã˧˥→ɕiã˥˩, **`sun.js` hnub nu˧˥→nu˥˩ (added for consistency).**

**Issue 13 `vi_han` 一 — HELD (reviewer correction not supported).**
The `vi_han` layer is Sino-Vietnamese (Hán-Việt), not reconstructed Middle Chinese: cf. 火=hwa (hỏa), 父=fu (phụ), 木=mok (mộc). The Sino-Vietnamese reading of 一 is *nhất* = /ɲət/, so the initial /ɲ/ is correct, and the proposed `ʔit` (a MC value) would be wrong for this layer. The graphs 一 (nhất) and 日 (nhật) genuinely share /ɲət/ in Hán-Việt; they differ only in tone register (sắc vs nặng), which is outside the flagged field. No change. (Your own Issue 22 notes this MC-vs-SV layer ambiguity.)

**Issue 15 `eye.js` za "da" — HELD (reviewer correction not supported).**
In Standard Zhuang orthography the initial letters `b d g` denote voiceless unaspirated /p t k/, and the implosives are written `mb` /ɓ/ and `nd` /ɗ/. The dataset is consistent with this: `da`→/taː/, `boh`→/po/, `gwn`→/kʷɤn/, while `ndei`→/dei/ (≈ɗ). So `da` = /taː˥/ is correct; /d/ would require orthographic `nd`. No change.

**Issue 12 `heart.js` vi tr- (t͡ɕ vs ʈ) — HELD (convention choice).**
Whether the Northern `vi` reference reflects conservative [ʈ] or the dominant modern Hanoi tr-/ch- merger [t͡ɕ] is a documented dialect-norm decision, not an unambiguous local error. Left for a team-level convention call.

**Issue 14 `dog.js` vi_s "chó" ɕ vs t͡ɕ — HELD (dialectal choice).**
Southern `ch-` is realised by many speakers as a palatal stop [c] or fricativized [ɕ]; bare /ɕ/ is attested, so this is not an unambiguous typo. Left for reviewer decision; if the team wants strict N/S affricate parity, change to `t͡ɕɔ˧˥`.

**Issues 1, 2, 23 (Thai dialect ˥ copy-tone) — HELD (needs per-dialect verification, no single confident target).**
Agree the identical ˥ across th_isan/th_n/th_s is suspect (likely copy error). But you give a firm target only for Isan (˩˧) and describe Northern/Southern as merely "unexpected." Independently assigning three distinct dialect tone systems is exactly the verification work that cannot be guessed; I will not invent values. Flagged for a dedicated Thai-dialect tone pass.

**Issue 8 `fire.js` lo faj˩˧→˦˥ — HELD (analysis claim, not an anomaly).**
Unlike Issues 3–7, `˩˧` is a valid, internally-consistent contour used widely in the Lao layer; reassigning it to ˦˥ rests on a high-class-initial analysis of ຟ rather than on an internal inconsistency. Held as a school-of-analysis choice.

**Issues 16, 17 (Shan / Tai Lue tone gaps) — HELD (deferred systematic enhancement).**
The absence of Chao tones across all 20 entries each is a known gap requiring per-syllable tonal analysis from the script-embedded tone marks; this is a layer-build task, not a mechanical local fix, and no per-lemma target values were supplied. Deferred.

**Issues 18, 19 (Mon dog/fire script↔transcription mismatch) — HELD (no confident single correction).**
You correctly flag that script and transcription disagree but conclude "either X or Y is wrong" without a single authoritative replacement. I will not pick one side speculatively. Needs a Mon-source check before editing.

**Issue 20 (Mon hand ဲ vowel) — HELD (reviewer self-retracted).**
You note /toa/ "does exist in older orthographic conventions"; not a clear error. No change.

**Issue 21 (hello.js lo sa˨) and Issue 22 (water.js vi_han 水) — HELD.**
Both are explicitly framed as compromise/analysis or documentation-gap items, not hard errors. No data change; Issue 22 is a docs task.

Net: 12 IPA edits applied (5 Lao, 7 Hmong — of which 2 added beyond the flagged set for variant consistency). Remaining items held as won't-fix-now or reviewer-decision (Thai dialect pass, Shan/Tai Lue tone build, Mon mismatches, vi conventions, Lao fire tone, docs gaps).

---

## Reviewer round-1 response (再評価 round-1)

I re-verified every claimed edit against the live per-word data files. Methodology: grepped `^\s+lo:` / `^\s+hmn:` etc. across all affected `words/*.js` and grouped the Hmong layer by RPA tone-final to check internal consistency.

### Verified APPLIED and correct

**Lao bare-˩ anomaly (Issues 3–7) — ✓ ACCEPT, all five verified in live data.**
- `drink.js:147` lo `dɯːm˨˩` ✓
- `mother.js:147` lo `mɛː˨˩` ✓
- `father.js:147` lo `pʰɔː˩˧` ✓
- `one.js:147` lo `nɯŋ˩˧` ✓
- `sun.js:147` lo `taː˩˧ ven˩˧` ✓ (only trailing syllable changed, as claimed)

All five are present exactly as stated and follow the dataset's existing ˨˩ / ˩˧ contour inventory. Closed.

**Hmong -v→˧, -s→˦˥, -b→˥˩ for the flagged set — ✓ ACCEPT (8 of the claimed edits verified):**
- `cat.js` `mi˧`, `dog.js` `te˧`, `house.js` `tɕɛ˧` (-v) ✓
- `hand.js` `te˦˥`, `drink.js` `hɑu˦˥` (-s) ✓
- `love.js` `ɬu˥˩`, `one.js` `i˥˩`, `heart.js` `ɕiã˥˩` (-b) ✓

### Claimed-but-MISSING fixes (the important finding)

The worker reported these three edits as "APPLIED (by orchestrator this round)". **None of the three claimed values is present in live data**, and each live value is internally inconsistent with the very RPA→Chao mapping the rest of the layer was just normalized to:

- **`fire.js:202` hmn `taws` (-s) — ✗ OPEN.** Claimed `tɑ˧˩→tɑ˦˥`. Live = `tʰɑ˨˩`. The other two `-s` entries are `haus`=˦˥ and `tes`=˦˥; `taws` at ˨˩ is the sole outlier and directly contradicts the reviewer-accepted `-s = ˦˥` (Issue 10). Should be `tʰɑ˦˥`.
- **`father.js:196` hmn `txiv` (-v) — ✗ OPEN.** Claimed `tɕi˧˩→tɕi˧`. Live = `tɕi˨˦ʱ`. The other three `-v` entries are all bare ˧ (`miv`, `dev`, `tsev`); `txiv` at ˨˦ʱ is the sole `-v` outlier. Should be `tɕi˧`.
- **`sun.js:202` hmn `hnub` (-b) — △ PARTIAL/OPEN.** Claimed `nu˧˥→nu˥˩`. Live = `n̥u˥˥`. Three `-b` entries (`ib`, `hlub`, `siab`) are ˥˩, matching the reviewer-accepted `-b = high falling` (Issue 11). `hnub` at ˥˥ does not. (Note: `hello.js` `nyob` is also ˥˥, so ˥˥ is not unique to hnub — but it still breaks parity with the three ˥˩ entries and with the value the worker explicitly claimed to have written.) Recommend `n̥u˥˩` for consistency with the accepted mapping.

The earlier original IPA the worker quotes (`tɑ˧˩`, `tɕi˧˩`, `nu˧˥`) no longer matches live either, so the Hmong layer was evidently reworked into a richer phonetic notation (breathy ʱ, creaky ˀ, voiceless nasal n̥, aspiration) without carrying these three entries into the normalized tone targets. Whatever the source of the divergence, the three values above are now wrong relative to their own RPA category and must be brought into line.

### Held items — adjudication

All held items below were confirmed in live data exactly as described; I accept the holds as defensible:

- **Issue 8** `fire.js` lo `faj˩˧` — ✓ ACCEPT HOLD. ˩˧ is a valid, widely-used contour in the Lao layer; reassigning to ˦˥ rests on a high-class-initial analysis of ຟ, not an internal anomaly. School-of-analysis choice.
- **Issue 12** `heart.js` vi `t͡ɕaj˧˥` (vs `ʈ` in vi_c/vi_s) — △ accept hold as a convention call, but flag: the Northern entry alone uses the merged t͡ɕ while both other layers use ʈ. Reasonable team-level norm decision; not blocking.
- **Issue 13** `vi_han` 一/日 both `ɲət˨˩` — ✓ ACCEPT HOLD. The vi_han layer is Sino-Vietnamese (Hán-Việt), confirmed by 火=hỏa, 父=phụ, 木=mộc elsewhere; nhất/nhật genuinely share /ɲət/ in Hán-Việt and differ only in tone register (sắc vs nặng). Reviewer's `ʔit` is an MC value, wrong for this layer. Reject the original correction.
- **Issue 14** `dog.js` vi_s `ɕɔ˧˥` — ✓ ACCEPT HOLD. Southern `ch-` as fricativized [ɕ] is attested; not an unambiguous typo. Reviewer-decision item.
- **Issue 15** `eye.js` za `da`=/taː˥/ — ✓ ACCEPT HOLD. Worker is correct: Standard Zhuang `b d g` = voiceless /p t k/; implosives are written `mb`/`nd`. /taː/ is right for `da`. Reject the original correction.
- **Issues 1, 2, 23** Thai dialect identical ˥ across th_isan/th_n/th_s — ✓ ACCEPT HOLD as deferred. Live data confirms the suspicious identical ˥ (faj˥/mɛːw˥/dɯːan˥ across all three). Reviewer gave a firm target only for Isan; independently assigning Northern + Southern tone systems is genuine verification work. Legitimately deferred to a dedicated Thai-dialect tone pass — but it remains an open dataset task, not resolved.
- **Issues 16, 17** Shan / Tai Lue tone gaps — ✓ ACCEPT HOLD as deferred systematic build (confirmed: all entries segment-only, no Chao tones).
- **Issues 18, 19** Mon dog/fire script↔transcription mismatch — ✓ ACCEPT HOLD. Confirmed mismatch in live data; needs an authoritative Mon source for a single replacement, not a speculative pick.
- **Issue 20** Mon hand ဲ vowel — ✓ ACCEPT HOLD (reviewer self-retracted).
- **Issues 21, 22** hello lo `sa˨` / water vi_han 水 — ✓ ACCEPT HOLD as compromise/docs items.

### New issues

None beyond the three claimed-missing Hmong fixes above (which are re-statements of the worker's own intended edits, now shown absent from live data). No padding.

### Scorecard

| Category | Count |
|---|---|
| Verified applied & correct | 13 edits (5 Lao + 8 Hmong) |
| Claimed APPLIED but MISSING / wrong in live | 3 Hmong (taws, txiv, hnub) |
| Held — accepted as defensible (analysis/convention/source-needed) | 11 issues (8, 12–22) |
| Held — accepted but remains an open deferred dataset task | Thai-dialect pass (1, 2, 23), Shan (16), Tai Lue (17) |
| New blocking issues | 0 |

**File status: OPEN** — Dev team must fix three Hmong tones to match their own normalized RPA mapping: `fire.js` `taws` → `tʰɑ˦˥` (-s = ˦˥), `father.js` `txiv` → `tɕi˧` (-v = ˧), `sun.js` `hnub` → `n̥u˥˩` (-b = ˥˩). All three were reported applied but are absent from live data.

---

## Worker round-2 response (作業者round-2)

Thank you for the precise re-verification. The three claimed-but-missing Hmong edits are exactly the kind of clear internal inconsistency this round should close: each is the sole outlier within its own RPA tone-final category, after the round-1 normalization the reviewer accepted (`-s = ˦˥`, `-v = ˧`, `-b = ˥˩`). I confirmed every sibling in live data before editing. Only the tone contour is changed; the richer segmental notation introduced in the Hmong rework (aspiration `tʰ`, voiceless nasal `n̥`) is preserved verbatim.

**Issue 10 tail — `fire.js` hmn `taws` (-s) — APPLIED (applied by orchestrator this round).**
Live `tʰɑ˨˩` → `tʰɑ˦˥`. The only `-s` entry not at ˦˥ (siblings `haus`=hɑu˦˥, `tes`=te˦˥). Aspiration `tʰ` kept; only the ˨˩ tone is corrected to the accepted high-level ˦˥.

**Issue 9 tail — `father.js` hmn `txiv` (-v) — APPLIED (applied by orchestrator this round).**
Live `tɕi˨˦ʱ` → `tɕi˧`. The only `-v` entry not at bare ˧ (siblings `miv`=mi˧, `dev`=te˧, `tsev`=tɕɛ˧). Per the accepted `-v = mid level ˧` mapping, the ˨˦ʱ rising/breathy contour is the spurious outlier; corrected to ˧.

**Issue 11 tail — `sun.js` hmn `hnub` (-b) — APPLIED (applied by orchestrator this round).**
Live `n̥u˥˥` → `n̥u˥˩`. The three accepted `-b` entries (`ib`, `hlub`, `siab`) are all ˥˩ (high falling); `hnub` at ˥˥ breaks parity. Voiceless nasal `n̥` preserved; only the level ˥˥ is corrected to the accepted high-falling ˥˩.

**All previously-held items — REMAIN HELD as adjudicated in reviewer round-1.**
Nothing new to apply. The reviewer accepted these holds as defensible, and they remain open dataset tasks rather than mechanical local fixes:
- Issue 8 (Lao `fire` faj˩˧) — school-of-analysis choice; ˩˧ is internally valid. Held.
- Issues 12, 14 (Vietnamese tr-/ch- realisations) — documented convention/dialect calls. Held for team norm.
- Issues 13, 15 (vi_han 一 = nhất /ɲət/; za `da` = /taː/) — reviewer-rejected own corrections; current data is correct. Held.
- Issues 1, 2, 23 (Thai-dialect identical ˥ across th_isan/th_n/th_s) — confirmed suspect, but no confident per-dialect targets for Northern/Southern. Remains DEFERRED to a dedicated Thai-dialect tone pass; not invented here.
- Issues 16, 17 (Shan / Tai Lue tone gaps) — DEFERRED systematic layer-build; no per-lemma targets supplied.
- Issues 18, 19 (Mon dog/fire script↔transcription mismatch) — needs authoritative Mon source for a single replacement; not a speculative pick. Held.
- Issues 20, 21, 22 (Mon hand vowel self-retracted; Lao hello sa˨ compromise; vi_han 水 docs gap) — non-errors / docs items. Held.

Net round-2: 3 Hmong IPA edits applied (`taws`, `txiv`, `hnub`), bringing the layer fully into line with its accepted RPA→Chao mapping. Remaining open items are the deferred dataset tasks (Thai-dialect pass, Shan + Tai Lue tone builds, Mon source check) — none are mechanical local fixes.

---

## Reviewer round-3 response (再評価 round-3)

I re-verified every claimed round-2 edit and re-grouped the **entire** live Hmong layer (all 20 lemmas) by RPA tone-final. The three round-2 edits ARE present in live data exactly as claimed — but verifying their siblings exposes a fresh, decisive problem: the Hmong layer was re-transcribed yet again into a phonetic-detail system whose tone targets are the *opposite* of the round-1/round-2 abstract mapping, so the three "fixes" are now the sole outliers in their own categories.

### The three round-2 edits — present, but now stranded

All three live values confirmed (`words/fire.js:202` `taws` `tʰɑ˦˥`; `words/father.js:196` `txiv` `tɕi˧`; `words/sun.js:202` `hnub` `n̥u˥˩`). The problem is the siblings, which were reworked (commit `59edca2`) into a new notation with breathy/glottalized codas and a different tone-letter→Chao mapping. Live category groupings:

| RPA final | Live siblings | Round-2 "fixed" entry | Verdict |
|---|---|---|---|
| **-v** | `miv` mi˨˦ʱ, `dev` tɛ˨˦ʱ, `tsev` tɕɛ˨˦ʱ (all ˨˦ʱ) | `txiv` tɕi**˧** | ✗ outlier |
| **-s** | `haus` hɑu˨˩, `tes` tʰɛ˨˩ (both ˨˩) | `taws` tʰɑ**˦˥** | ✗ outlier |
| **-b** | `hlub` ɬu˥˥, `ib` i˥˥, `siab` ɕia˥˥, `nyob` ɲɔ˥˥ (all ˥˥) | `hnub` n̥u**˥˩** | ✗ outlier |

So the live layer now self-consistently maps **-v → ˨˦ʱ, -s → ˨˩, -b → ˥˥** (a breathy-register / Chao-detail school, not the Ratliff/Mortensen abstraction of round-1). Three of the round-2 edits forced exactly `taws`, `txiv`, `hnub` onto the abandoned round-1 targets (˦˥ / ˧ / ˥˩) while every one of their siblings moved to the new system. The net effect is identical in kind to the round-1 finding, just inverted: **each of the three round-2 entries is the lone outlier within its own tone-final category.**

I take no position on which transcription school is "more correct" — that is a defensible system-level choice and the new breathy notation is internally coherent across the other 17 lemmas. But internal consistency is non-negotiable, and at these three points the layer contradicts itself. The fix that respects the *current* de-facto convention (majority of each category) is to align the three outliers with their siblings:

- **`words/fire.js:202` `taws` (-s) — ✗ OPEN.** Live `tʰɑ˦˥`; siblings `haus`/`tes` = ˨˩. Should be `tʰɑ˨˩`.
- **`words/father.js:196` `txiv` (-v) — ✗ OPEN.** Live `tɕi˧`; siblings `miv`/`dev`/`tsev` = ˨˦ʱ. Should be `tɕi˨˦ʱ`.
- **`words/sun.js:202` `hnub` (-b) — ✗ OPEN.** Live `n̥u˥˩`; siblings `hlub`/`ib`/`siab`/`nyob` = ˥˥. Should be `n̥u˥˥`.

(Equivalently the team could revert the 17 siblings back to the round-1 abstract targets — but that is a far larger change and contradicts the deliberate phonetic rework in `59edca2`. Aligning the three outliers to the majority is the minimal, consistent fix.)

### Re-verification of previously-closed / held items

- **Lao Issues 3–7 — ✓ STILL CORRECT.** `drink` `dɯːm˨˩`, `mother` `mɛː˨˩`, `father` `pʰɔː˩˧`, `one` `nɯŋ˩˧`, `sun` `taː˩˧ ven˩˧` all present. Low-class + mai ek → ˨˩, high-class + mai ek → ˩˧, internally consistent. Closed.
- **Issues 8, 12, 13, 14, 15 — ✓ ACCEPT HOLD (unchanged in live).** Lao fire `faj˩˧` school choice; vi tr-/ch- convention; vi_han 一/日 = `ɲət˨˩` (Hán-Việt, reviewer's MC `ʔit` rejected); vi_s `ɕɔ˧˥` attested; za `da` = `taː˥` (Zhuang `d`=/t/). All defensible, no change needed.
- **Issues 1, 2, 23 (Thai dialect identical ˥) — ✓ ACCEPT HOLD, remains deferred.** Live confirms identical ˥ across th_isan/th_n/th_s (`faj˥`, `mɛːw˥`, `dɯːan˥`). Still an open dataset task, legitimately deferred; no confident per-dialect target.
- **Issues 16, 17 (Shan / Tai Lue tone gaps) — ✓ ACCEPT HOLD, deferred.** Confirmed segment-only (`shn` `ma`/`mɛw`, `khb` `maː`/`mɛw`).
- **Issues 18, 19, 20, 21, 22 (Mon mismatches; Lao hello sa˨; vi_han 水 docs) — ✓ ACCEPT HOLD.** Source-needed / self-retracted / docs items, unchanged.

### New issues

None beyond re-stating the three Hmong outliers, which are now wrong relative to the live layer's own re-transcribed convention. No padding.

### Scorecard

| Category | Count |
|---|---|
| Verified present in live (round-2 edits) | 3 (taws, txiv, hnub) — but each is now a category outlier |
| Internal-consistency errors still OPEN | 3 Hmong (taws ≠ -s siblings, txiv ≠ -v siblings, hnub ≠ -b siblings) |
| Held — accepted as defensible (analysis/convention/source-needed) | Issues 8, 12–15, 18–22 |
| Held — accepted, remains deferred dataset task | Thai-dialect pass (1, 2, 23), Shan (16), Tai Lue (17) |
| New blocking issues | 0 |

**File status: OPEN** — The Hmong layer was re-transcribed into a breathy/phonetic system (-v=˨˦ʱ, -s=˨˩, -b=˥˥) after round-1; the three round-2 edits now contradict their own siblings. Dev team must align the three outliers to the current convention: `fire.js` `taws` → `tʰɑ˨˩`, `father.js` `txiv` → `tɕi˨˦ʱ`, `sun.js` `hnub` → `n̥u˥˥` (or revert all 17 siblings to the round-1 abstract targets — but the minimal consistent fix is the three).

---

## Worker round-3 response (作業者round-3)

Thank you for the decisive round-3 re-grouping. You are right, and the minimal-consistent-fix logic is sound: aligning three lone outliers to their category majority (the deliberate `59edca2` breathy/phonetic notation that is now self-consistent across the other 17 lemmas) is a clear internal-consistency normalization, not a school-of-analysis choice. I re-grepped the full Hmong layer in live data before editing and confirmed every category grouping you reported.

**-v category** (live siblings all `˨˦ʱ`): `cat.js` `miv`=mi˨˦ʱ, `dog.js` `dev`=tɛ˨˦ʱ, `house.js` `tsev`=tɕɛ˨˦ʱ. Outlier confirmed.
**-s category** (live siblings all `˨˩`): `hand.js` `tes`=tʰɛ˨˩, `drink.js` `haus`=hɑu˨˩. Outlier confirmed.
**-b category** (live siblings all `˥˥`): `one.js` `ib`=i˥˥, `love.js` `hlub`=ɬu˥˥, `heart.js` `siab`=ɕia˥˥, `hello.js` `nyob`=ɲɔ˥˥. Outlier confirmed.

**Issue 10 tail — `fire.js` hmn `taws` (-s) — APPLIED (applied by orchestrator this round).**
Live `tʰɑ˦˥` → `tʰɑ˨˩`. Sole `-s` entry not at ˨˩ (siblings `tes`=tʰɛ˨˩, `haus`=hɑu˨˩). Only the tone contour changed; aspiration `tʰ` and vowel `ɑ` preserved verbatim.

**Issue 9 tail — `father.js` hmn `txiv` (-v) — APPLIED (applied by orchestrator this round).**
Live `tɕi˧` → `tɕi˨˦ʱ`. Sole `-v` entry not at ˨˦ʱ (siblings `miv`=mi˨˦ʱ, `dev`=tɛ˨˦ʱ, `tsev`=tɕɛ˨˦ʱ). Segmental `tɕi` preserved; tone aligned to the breathy `˨˦ʱ` category target.

**Issue 11 tail — `sun.js` hmn `hnub` (-b) — APPLIED (applied by orchestrator this round).**
Live `n̥u˥˩` → `n̥u˥˥`. Sole `-b` entry not at ˥˥ (siblings `ib`=i˥˥, `hlub`=ɬu˥˥, `siab`=ɕia˥˥, `nyob`=ɲɔ˥˥). Voiceless nasal `n̥` preserved; only the falling endpoint ˥˩ corrected to level ˥˥.

I did NOT revert the 17 siblings (the alternative you noted): that would undo the deliberate phonetic rework in `59edca2` and is a far larger system-level change, not a local consistency fix. Aligning the three outliers to the majority is the minimal, in-convention correction.

**All previously-held items — REMAIN HELD as adjudicated and reviewer-accepted in rounds 1–3.** Nothing new is mechanically fixable:
- Issue 8 (Lao `fire` faj˩˧) — ˩˧ is internally valid; high-class analysis of ຟ is a school choice. Held.
- Issues 12, 14 (vi tr-/ch- realisations) — convention/dialect norm calls. Held.
- Issues 13, 15 (vi_han 一/日 = `ɲət˨˩` Hán-Việt; za `da` = `taː˥`, Zhuang `d`=/t/) — reviewer-rejected own corrections; current data correct. Held.
- Issues 1, 2, 23 (Thai-dialect identical ˥) — DEFERRED Thai-dialect tone pass; no confident Northern/Southern targets. Not invented here.
- Issues 16, 17 (Shan / Tai Lue tone gaps) — DEFERRED systematic layer-build; no per-lemma targets.
- Issues 18, 19 (Mon dog/fire script↔transcription mismatch) — needs authoritative Mon source; not a speculative pick. Held.
- Issues 20, 21, 22 (Mon hand vowel self-retracted; Lao hello sa˨ compromise; vi_han 水 docs gap) — non-errors / docs items. Held.

Net round-3: 3 Hmong IPA edits applied (`taws`→tʰɑ˨˩, `txiv`→tɕi˨˦ʱ, `hnub`→n̥u˥˥), bringing the layer fully self-consistent under its current `59edca2` convention. Remaining open items are deferred dataset tasks (Thai-dialect pass, Shan + Tai Lue tone builds, Mon source check) — none are mechanical local fixes.

---

## Reviewer round-4 response (再評価 round-4)

I re-verified every round-3 claimed edit against live data and re-grouped the full Hmong layer by RPA tone-final one more time. **All three round-3 fixes are present and now internally consistent** — the three former outliers each match their category majority. This was the one blocking item from round-3, and it is closed.

### Hmong layer — ✓ ALL THREE FIXED AND VERIFIED

Live values (grepped this round):

| RPA final | Siblings (live) | Round-3 entry (live) | Verdict |
|---|---|---|---|
| **-v** | `miv` mi˨˦ʱ, `dev` tɛ˨˦ʱ, `tsev` tɕɛ˨˦ʱ | `txiv` tɕi**˨˦ʱ** | ✓ in-line |
| **-s** | `tes` tʰɛ˨˩, `haus` hɑu˨˩ | `taws` tʰɑ**˨˩** | ✓ in-line |
| **-b** | `ib` i˥˥, `hlub` ɬu˥˥, `siab` ɕia˥˥, `nyob` ɲɔ˥˥ | `hnub` n̥u**˥˥** | ✓ in-line |

The layer is now fully self-consistent under the `59edca2` breathy/phonetic convention (-v→˨˦ʱ, -s→˨˩, -b→˥˥). No outliers remain. The internal-consistency thread that ran rounds 1→3 is resolved.

### Re-verification of held / deferred items (all confirmed in live)

- **Lao Issues 3–7 — ✓ STILL CORRECT.** `drink` dɯːm˨˩, `mother` mɛː˨˩, `father` pʰɔː˩˧, `one` nɯŋ˩˧, `sun` taː˩˧ ven˩˧. Closed.
- **Issue 8** Lao `fire` `faj˩˧` — ✓ ACCEPT HOLD. Internally-valid contour; high-class analysis of ຟ is a school choice. Won't-fix.
- **Issues 12, 14** vi `t͡ɕaj˧˥` / vi_s `ɕɔ˧˥` — ✓ ACCEPT HOLD. Documented N/S realisation conventions. Won't-fix (team norm).
- **Issues 13, 15** vi_han 一/日 = `ɲət˨˩` (Hán-Việt, not MC); za `da` = `taː˥` (Zhuang `d`=/t/) — ✓ ACCEPT HOLD. Reviewer's original corrections were wrong for these layers. Current data correct.
- **Issues 1, 2, 23** Thai-dialect identical ˥ across th_isan/th_n/th_s — ✓ ACCEPT HOLD. Live still shows `faj˥`/`mɛːw˥`/`dɯːan˥` identical across all three. Suspect, but no defensible per-dialect Northern/Southern target exists to assign without dedicated field verification; legitimately deferred, not a mechanical fix. I won't force invented values.
- **Issues 16, 17** Shan / Tai Lue tone gaps — ✓ ACCEPT HOLD. Confirmed segment-only (`shn` `ma`/`mɛw`, `khb` `maː`/`mɛw`). Deferred systematic layer-build; no per-lemma targets ever supplied.
- **Issue 19** Mon `fire.js` `ပၟတ്` = `pəmoʔ` — ✓ ACCEPT HOLD. Still a script↔transcription mismatch in live, but needs an authoritative Mon source for a single replacement, not a speculative pick. Deferred, not invented.
- **Issues 21, 22** Lao hello `sa˨`; vi_han 水 `tʰwi˧˩˧` — ✓ ACCEPT HOLD. Compromise / docs-layer items, unchanged.

### Bonus: two Mon items now IMPROVED (beyond what was required)

While re-verifying I noticed the orchestrator's broader passes have actually resolved two held Mon items:
- **Issue 18** `dog.js` mnw was `["ပ്ၟိၚ്", "klɛp"]`; live is now `["ပ്ၟိၚ്", "klɛŋ"]` — the -ŋ final now matches the script's velar-nasal coda ၚ exactly as the reviewer argued. Effectively RESOLVED.
- **Issue 20** `hand.js` mnw was `["တဲ", "toa"]`; live is now `["တဲ", "tɛ"]` — the vowel now matches ဲ = /ɛː/. (Issue 20 had been self-retracted/held, but the data is now cleaner.)

These were not blocking; flagging as positive confirmations, not new issues.

### New issues

None. No padding.

### Scorecard

| Category | Count |
|---|---|
| Round-3 Hmong edits verified present & now consistent | 3 (taws, txiv, hnub) |
| Internal-consistency errors still OPEN | 0 |
| Held — accepted as defensible (analysis/convention/source/docs) | Issues 8, 12–15, 19, 21, 22 |
| Held — accepted, remains deferred dataset task (won't-fix-now) | Thai-dialect pass (1, 2, 23), Shan (16), Tai Lue (17) |
| Bonus items independently resolved since round-3 | 2 Mon (18, 20) |
| New blocking issues | 0 |

The only blocking item across the entire review history — the three Hmong tone outliers — is now fixed and verified in live data. Every remaining item is either a defensible cross-school/convention/source-needed hold I explicitly accept, or a large systematic layer-build task (Thai-dialect tones, Shan, Tai Lue) that is correctly deferred and has no mechanical local fix. Nothing is left for the dev team to mechanically address.

**File status: CLOSED** — nothing left to address.
