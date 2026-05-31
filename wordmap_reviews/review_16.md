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
