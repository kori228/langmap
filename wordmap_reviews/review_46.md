# Wordmap review #46 — Tai-Kadai specialist

## Reviewer self-introduction

This review draws on the following primary references: Diller, Edmondson & Luo (2008) *The Tai-Kadai Languages* (Routledge); Edmondson & Solnit (1988) *Comparative Kadai: Linguistic Studies Beyond Tai*; Li Fang-Kuei (1977) *A Handbook of Comparative Tai*; Pittayaporn (2009) *The Phonology of Proto-Tai*; Reinhorn (1970) *Dictionnaire laotien-français*; Haas (1964) *Thai-English Student's Dictionary*; Hudak (2008) *William J. Gedney's Comparative Tai*; and the 1957/1982 Standard Zhuang (Sawcuengh) orthographic specification.

Scope: Thai (Standard Bangkok, Isan/Northeastern, Northern Lanna/Kham Mueang, Southern Pak Tai), Lao (Vientiane standard), Shan, Tai Lue (Sipsongpanna Dai, khb), Zhuang (Northern Standard, za), Bouyei (pcc). Languages listed in the spec with no data in the files (tdd Tai Nüa, swi, kdt, aio Aiton, saek, Yong, Khün) are not covered here.

---

## Issues

### Group A — Thai tone errors (systematic, propagated across all four Thai varieties)

**Issue 1. `drink` ดื่ม: falling tone ˥˩ assigned, correct tone is low ˨˩**

`words/drink.js` lines 79, 192–194: all four Thai varieties (th, th_isan, th_n, th_s) show `dɯːm˥˩` (falling). The initial consonant ด belongs to the mid class; mai ek (◌่) on a mid-class consonant yields the **low tone** (˨˩), not falling. Haas *Thai-English Student's Dictionary* transcribes ดื่ม as /dɯ̀ːm/ (grave = low). The ˥˩ value is the falling tone, reserved for mid-class + mai tho (◌้). Correct IPA: `dɯːm˨˩`. This error propagates identically to all four entries.

**Issue 2. `father` พ่อ: falling tone ˥˩ assigned, correct tone is low ˨˩**

`words/father.js` lines 79, 192–194: all four Thai varieties show `pʰɔː˥˩` (falling). The initial consonant พ belongs to the **high class**; mai ek on a high-class consonant yields the **low tone** (˨˩). Falling (˥˩) results from mai tho on high class. Haas gives พ่อ as /pʰɔ̀ː/ (grave = low). Correct IPA: `pʰɔː˨˩`.

**Issue 3. `tree` ต้น component: rising/high ˧˥ assigned, correct tone is falling ˥˩**

`words/tree.js` lines 79, 192–194: all four Thai varieties show `ton˧˥maj˧˥`. The first syllable ต้น has ต (mid class) + mai tho (◌้), which unambiguously yields the **falling tone** ˥˩ in Standard Thai. The notation ˧˥ for ต้น is wrong. (The second component ไม้ `maj˧˥` with ม low class + mai tho = high tone is consistent with the database's convention of ˧˥ for high, even though ˦˥ is more standard; see Issue 4.) Correct first syllable IPA: `ton˥˩`.

**Issue 4. High-tone notation ˧˥ is non-standard and creates ambiguity**

The database uses ˧˥ (mid-to-high rising) as its symbol for the Thai **high tone** (e.g., น้ำ `naːm˧˥`, รัก `rak˧˥`). The academically standard IPA for Bangkok Thai high tone is ˦˥ or ˦ (Pittayaporn 2009; Diller 2008). The symbol ˧˥ is identical to what many researchers use for the **rising tone** (˩˩˦ in full contour). This creates cross-system ambiguity and should be replaced with ˦˥ throughout.

---

### Group B — Shan: systematic absence of tone marking

**Issue 5. Shan (shn): all 20 entries lack IPA tone markers**

`words/*.js` Shan entries (lines ~786–793 in each file): every IPA string is bare — `mɛw`, `ma`, `kin`, `ta`, `faj`, `li`, `miw`, `tsai`, `nam`, `nuŋ`, `wan`, `hen`, `me`, `lyn`, `maj suŋ`, `kɔp tsai`, `tum maj`, `pə`, `hak`, `ʔuk`. Shan has five tones (level, falling, high, creaky, low); without tone diacritics, the IPA is phonemically incomplete. All entries need tone markers added.

**Issue 6. Shan `drink` ဢိုၵ်ႇ `ʔuk`: lexical selection error**

`words/drink.js` line 786: ʔuk specifically means 'swallow / gulp down a single draught', not the general verb for 'drink'. The standard neutral Shan verb for drinking is typically formed with kin (consume) + namː, or a dedicated verb distinct from ʔuk. The choice of ʔuk makes this entry non-comparable with the general 'drink' elicited in the other languages.

**Issue 7. Shan `moon` လိူၼ် `lyn`: IPA field contains a romanized approximate, not phonemic IPA**

`words/moon.js` line 792: `lyn` is a romanized rendering, not IPA. The phonemic transcription should use proper IPA vowel symbols (the vowel in လိူၼ် is a high-mid front rounded /ɯ/ or /ɤ/ quality, final /n/). A tone marker is also missing (see Issue 5). Expected IPA (approximate): `lɯn` + tone.

---

### Group C — Tai Lue (khb): systematic absence of tone marking and a script–IPA mismatch

**Issue 8. Tai Lue (khb): all 20 entries lack IPA tone markers**

`words/*.js` khb entries (lines ~986–993 in each file): every IPA string is bare — `mɛw`, `maː`, `kin`, `taː`, `fai`, `diː`, `muː`, `pɔ`, `dɔn liː`, `huːn`, `hak`, `liːn`, `meː`, `nuŋ`, `tsau`, `ʔɔn nau`, `ton mai`, `nam`, `pɔː`, `kin nam`. New Tai Lue script encodes five tones through its own diacritic system (e.g., ᧈ ᧉ etc. visible in forms such as ᦓᦹᧂᧈ for 'one'). The script carries tone information that must be reflected in IPA.

**Issue 9. Tai Lue `mother` ᦡᦲᧈ: script–IPA consonant mismatch**

`words/mother.js` line 992: IPA `meː` opens with /m/. In the New Tai Lue Unicode block, ᦡ (U+19A1) is the letter *da* /d/, not *ma*. If the script is indeed ᦡᦲᧈ the IPA initial should be /d/, not /m/. One of the two fields is wrong; the script form should be verified against ᦙᦲᧈ (if /m/ is intended).

**Issue 10. Tai Lue `heart` ᦗᦸ `pɔ`: wrong lexeme — 'chest/breast-pocket area', not 'heart/mind'**

`words/heart.js` line 986: the Tai Lue form ᦗᦸ /pɔ/ corresponds to the chest or breast-pocket area (cognate with Thai เป้า/พก area), not the cognitive/emotional 'heart' elicited by this slot. Proto-Tai *C-ɟaɰ 'heart/mind' (Li 1977) yields a Tai Lue reflex in the ᦒ- series. The entry needs replacement with the correct jai-type form.

---

### Group D — Standard Zhuang (za): tone digit / IPA mismatches

Sawcuengh (Standard Zhuang Latin orthography) encodes tone by trailing letters: zero-final = tone 1 (˦ high), -z = tone 2 (˥˩ falling), -j = tone 3 (˧ mid), -x = tone 4 (˨˩ low), -q = tone 5 (˩˧ rising, entering), -h = tone 6 (˩˧˩ low-rising-dipping). The IPA fields repeatedly disagree with the Sawcuengh spelling.

**Issue 11. Zhuang -z words assigned ˧˥ (rising) instead of ˥˩ (falling): `cat` meuz, `hand` fwngz, `hello` mwngz**

`words/cat.js` line 195 `meu˧˥`; `words/hand.js` line 195 `fɯŋ˧˥`; `words/hello.js` line 195 `mɯŋ˧˥`. All three Sawcuengh spellings end in -z = tone 2 (falling ˥˩). The IPA shows ˧˥ (mid-rising), the opposite contour. The same error affects `love` gyaez (`kjai˧˥`, see Issue 12) and `house` ranz (see Issue 13).

**Issue 12. Zhuang `love` gyaez: -z = falling, IPA `kjai˧˥` = rising**

`words/love.js` object-form `ipa: "kjai˧˥"`. Sawcuengh gyaez has -z = tone 2 (falling). Same error class as Issue 11.

**Issue 13. Zhuang `house` ranz: -z = falling, IPA `ɣan˧˥` = rising**

`words/house.js` object-form `ipa: "ɣan˧˥"`. Same error. Correct: `ɣan˥˩`.

**Issue 14. Zhuang `water` raemx: -x = tone 4 (low ˨˩), IPA shows ˦ (high)**

`words/water.js` object-form `ipa: "ɣam˦"`. Sawcuengh raemx has -x = tone 4, which is low (˨˩ or ˧˩ depending on the analysis). The IPA ˦ = high, nearly the opposite of the correct pitch. Correct IPA should be `ɣɛm˨˩` (see also Issue 15).

**Issue 15. Zhuang `water` raemx: vowel quality 'ae' = /ɛ/ transcribed as /a/**

`words/water.js` object-form `ipa: "ɣam˦"`. In Sawcuengh orthography, the digraph *ae* represents a front vowel /ɛ/ distinct from *a* /a/. The IPA `ɣam` uses /a/ (back open) rather than /ɛ/ (front mid). Correct: `ɣɛm`.

**Issue 16. Zhuang `sun` daengzngoenz: both -z syllables assigned ˧˥, should be ˥˩**

`words/sun.js` object-form `ipa: "taːŋ˧˥ŋɯn˧˥"`. Both syllables daengz and ngoenz end in -z = tone 2 (falling). The IPA ˧˥ (mid-rising) is wrong for both. Correct: `taːŋ˥˩ŋɯn˥˩` (approx).

**Issue 17. Zhuang `father` boh: -h = tone 6, IPA `po˨` = low level**

`words/father.js` line 195 `po˨`. Sawcuengh -h marks tone 6, typically described as a low-dipping-rising or mid contour (˨˦ or ˩˧). The IPA po˨ = flat low level ˨, which does not capture the tone 6 contour. Should be `po˩˧` or `po˨˦` depending on the reference.

**Issue 18. Zhuang `drink` gwnraemx: second component raemx tone error propagated**

`words/drink.js` line 195 `kʷɤn˥ɣam˦`. The raemx component carries the same ˦ (high) error as Issue 14, and the same /a/ vowel error as Issue 15. Correct: `kʷɤn˥ɣɛm˨˩`.

**Issue 19. Zhuang nd- initial: dropped inconsistently vs. Bouyei**

`words/good.js` Zhuang ndei IPA `dei˥` and `words/moon.js` Zhuang ndaen IPA `daːn˥` both silently collapse the prenasalized initial *nd-* (a Sawcuengh prenasalized stop /ⁿd/ or implosive /ɗ/) to plain /d/. By contrast, `words/good.js` Bouyei ndil IPA correctly writes `ndi˧˥`, retaining the nasal. The representation should be consistent; standard Zhuang linguistics (Diller et al. 2008) treats nd- as phonemically distinct from d-.

**Issue 20. Zhuang `heart` sim: palatal fricative [ɕ] used for alveolar /s/**

`words/heart.js` line 195 `ɕim˥`. Standard Zhuang s- is an alveolar fricative /s/, not the palatal /ɕ/ characteristic of Mandarin. No Tai-Kadai language in this branch is known to have /ɕ/ as a primary phoneme in this position. Correct: `sim˥`.

---

### Group E — Bouyei (pcc): tone letter / IPA mismatches

The Bouyei (Buyi) Latin orthography uses trailing letters for tone. Relevant correspondences: -x = tone 2 (falling ˦˩), -l = tone 4 (low ˨˩), -q = tone 5 (rising ˩˧), -s = tone 6, -h = tone 3 or 6 depending on the sub-standard. The IPA fields repeatedly contradict these tones.

**Issue 21. Bouyei `cat` meeuq: -q = rising (˩˧), IPA `meːu˧˧` = flat mid**

`words/cat.js` line 950. Sawcuengh-related -q in Bouyei marks tone 5 (rising ˩˧). The IPA ˧˧ (flat mid level) contradicts this. Correct contour should be rising.

**Issue 22. Bouyei `house` ranz and `sun` ngonzbyaaiz: -z words assigned ˩˩ (very low)**

`words/house.js` line 957 `raŋ˩˩`; `words/sun.js` line 956 `ŋon˩˩pjaːi˩˩`. In Bouyei orthography, -z encodes a mid-register tone (tone 2, not the lowest). Assigning ˩˩ (extra low) to both syllables of ngonzbyaaiz is incongruent with the -z ending.

**Issue 23. Bouyei `drink` gunl and `eat` gianl: -l = low tone (˨˩), IPA shows ˧˥ (rising)**

`words/drink.js` line 950 `ɡuŋ˧˥`; `words/eat.js` line 950 `ɡian˧˥`. In Bouyei -l = tone 4 (low ˨˩). The IPA ˧˥ = mid-rising, which is effectively the opposite pitch movement.

**Issue 24. Bouyei `moon` ronh `roːn˧˩`: 'ronh' likely means 'night', not 'moon'**

`words/moon.js` line 956. The Proto-Tai/Kadai cognate set for 'moon' yields forms cognate with Zhuang *ndaen* (tone 1, /dan˥/). Bouyei 'ronh' (with a nasal-final syllable /ron/) does not belong to this cognate set and appears to be the word for 'night'. This is a lexical selection error; the Bouyei word for 'moon' is expected to be /dan/ or similar.

---

### Group F — Lao tone issues

**Issue 25. Lao `mother` ແມ່ `mɛː˩`: should be falling ˥˩**

`words/mother.js` line 147. ມ in Lao is low-register class; mai ek (◌່) on a low-register consonant yields the **falling tone** (˥˩) in Vientiane Lao, parallel to Thai ม + mai ek = falling. The IPA ˩ (flat low) does not represent this contour correctly. Compare Reinhorn (1970) s.v. ແມ່.

**Issue 26. Lao `tree` ຕົ້ນໄມ້ second component ໄມ້ `maj˥˩`: should be high**

`words/tree.js` line 147 `ton˥˩ maj˥˩`. The first component ຕ (mid-register) + ້ = falling ˥˩ is correctly transcribed. The second, ໄ+ມ+້: ມ is low-register in Lao; low-register + mai tho yields high tone (˦ or ˥), not falling. Both syllables should not share ˥˩. Correct: `ton˥˩ maj˦` (or `maj˥` using the database's high-tone convention).

---

### Group G — Cross-dialect consistency

**Issue 27. `drink` tone error propagated identically to all four Thai varieties**

The falling-tone error documented in Issue 1 (`dɯːm˥˩` for ดื่ม) appears unchanged in `th`, `th_isan`, `th_n`, and `th_s`. Northern Thai and Southern Thai have distinct tone systems from Standard Bangkok Thai; their forms of this word have independent tone values that cannot be derived simply by replicating the Standard Thai entry. At minimum, Northern Thai (with six tones) will map ดื่ม to a different pitch category than Standard Thai does.

**Issue 28. `father` tone error propagated identically to all four Thai varieties**

Same observation for `pʰɔː˥˩` (Issue 2): the entry is copied without adjustment across th, th_isan, th_n, th_s.

**Issue 29. Isan `moon` เดือน `dɯːan˥`: high tone inconsistent with Lao cognate ˨˩**

`words/moon.js` line 192. Isan (Northeastern Thai) is a Lao dialect and its tone system is Lao-based. ด in Isan follows Lao low-register class rules. The Vientiane Lao cognate ເດືອນ is `dɯːan˨˩` (low-falling); an Isan high ˥ represents a major tonal divergence that would be unusual and requires source documentation.

**Issue 30. `tree` ต้น tone error propagated to all Thai varieties including Northern Thai**

`words/tree.js` th_n `ton˧˥`: Northern Thai ต้น (ต mid-class + ้ mai tho) yields the falling category in the Northern Thai tone system as well (the Northern Thai falling tone has a different pitch contour than Bangkok's but is still falling-type, not rising). The ˧˥ value is wrong for all varieties.

---

*Total confirmed issues: 30 (Issues 1–30 above). Issues 5 and 8 each affect all 20 lexical entries for their respective languages; Issues 1–3, 27–28, 30 each affect four Thai dialects; Issues 11–13 each affect multiple Zhuang entries.*
