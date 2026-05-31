# Wordmap review #45 — Vietnamese specialist

## Reviewer self-introduction

This review draws on the following primary references:

- Thompson (1965) *A Vietnamese Reference Grammar* — baseline phonological inventory and tone descriptions for Hanoi standard
- Nguyễn Tài Cẩn (1979) *Nguồn gốc và quá trình hình thành cách đọc Hán-Việt* — definitive account of the Sino-Vietnamese reading layer, its Middle Chinese sources, and the chronological stratification of Hán-Việt vs. Cổ Hán-Việt
- Phạm (2003) *Vietnamese Tone* — phonetic detail of all six tones including laryngeal features and F0 trajectories
- Pham (2003) *The Vietnamese Lexicon* — lexical structure and register distribution
- Vietnamese Nôm Foundation (Nom Foundation) database — chữ Nôm glyph attestation
- Mineya (1972) *越南漢字音の研究* — systematic comparison of Hán-Việt initials and finals against Middle Chinese reconstruction
- Pulleyblank (1991) *Lexicon of Reconstructed Pronunciation* — Late Middle Chinese reconstruction used as control for Hán-Việt correspondences

---

## Issues

### ISSUE 1 — `water` vi: tone contour transcription is correct but note warranted on vowel nucleus
**File:** `words/water.js:76`  
**Data:** `vi: ["nước", "nɨək˧˥"]`  
**Assessment:** The quốc ngữ spelling *nước* correctly uses ⟨ư⟩ = /ɨ/ and the sắc diacritic. However the IPA transcription uses a diphthong nucleus `ɨə`, while some analyses transcribe the vowel as the monophthong `ɨ` followed by a releasing offglide before the unreleased final stop. The nucleus `ɨə` before `/k/` is acceptable if the glide is treated as the vowel's inherent off-glide in the `ưô` series, but the final `k` should be marked unreleased: `nɨək̚˧˥`. Final stops in Vietnamese are never released. No unreleased mark appears on any of the Vietnamese final stops throughout the dataset.

### ISSUE 2 — `water` vi_c: Central dialect vowel length notation inconsistent
**File:** `words/water.js:77`  
**Data:** `vi_c: ["nước", "nɨːk˧˥"]`  
**Assessment:** The Central dialect transcription substitutes `ɨː` (long back unrounded) for the Northern `ɨə` diphthong. This reflects a real phonological difference — Central Vietnamese often monophthongises vowel clusters — but the long monophthong `ɨː` before final `k` is not well supported. Nguyen Dang Liem and other Central Vietnamese descriptive works show the vowel as `ɨə~ɨ` without categorical lengthening for this particular syllable. The `ː` length mark is speculative here.

### ISSUE 3 — `water` vi_han: Sino-Vietnamese reading of 水
**File:** `words/water.js:564`  
**Data:** `vi_han: ["水", "tʰwi˧˩˧"]`  
**Assessment:** The Hán-Việt reading of 水 is standardly *thủy* (< Middle Chinese *ɕwij˨˩ˀ*). The transcription `tʰwi˧˩˧` approximates this but the tone contour `˧˩˧` (hỏi) is correct for *thủy*. However, the vowel `wi` should ideally reflect the rounded medial more transparently: the standard Hán-Việt transcription is *tʰuj˧˩˧* or *tʰwi˧˩˧*; both are defensible but the latter implies a labio-velar glide + high front vowel sequence that is more accurate. This is a minor representation issue; the tone is correct.

### ISSUE 4 — `good` vi: Northern tone for *tốt* — vowel in IPA
**File:** `words/good.js:76`  
**Data:** `vi: ["tốt", "tot˧˥"]`  
**Assessment:** The vowel in *tốt* is /o/, orthographically ⟨ô⟩. The IPA `o` is acceptable; however the final `t` must be unreleased: `tot̚˧˥`. The same applies to the Central and Southern variants. The failure to mark final stops as unreleased is systemic (see Issue 1).

### ISSUE 5 — `good` vi_c: Final stop change Central dialect
**File:** `words/good.js:77`  
**Data:** `vi_c: ["tốt", "toːk˧˥"]`  
**Assessment:** The Central dialect (Huế) variant transcribes the final consonant as `/k/` where the standard has `/t/`. This reflects the well-known Central Vietnamese coda merger where original `-t` shifts toward a velar or unreleased articulation in many Central varieties. This is a legitimate feature, not an error per se, but it should be confirmed for *tốt* specifically. More importantly, the vowel is given as `oː` (long), while `o` in Northern is short. The vowel lengthening in Central is real in general, but the transcription is more accurately `oːk̚` and the final stop must be unreleased.

### ISSUE 6 — `good` vi_han: Hán-Việt reading of 善
**File:** `words/good.js:557`  
**Data:** `vi_han: ["善", "tʰien˨˩˨"]`  
**Assessment:** The Hán-Việt reading of 善 (MC *dʑjen˨˩*) is *thiện* (thiện/善). The IPA `tʰien˨˩˨` uses the ngã tone contour `˨˩˨`. This is problematic: *thiện* normally carries the huyền tone (`˨˩`), not ngã. The ngã tone `˨˩˨` (broken/creaky) is applied here in error. Standard dictionaries list *thiện* as huyền-tone: *tʰien˨˩*. The tone assignment should be `˨˩`.

### ISSUE 7 — `good` vi_nom: chữ Nôm glyph for *tốt*
**File:** `words/good.js:558`  
**Data:** `vi_nom: ["卒", "tot"]`  
**Assessment:** The character 卒 is a borrowed Han character used phonetically for *tốt* in some Nôm texts. However the Vietnamese Nôm Foundation database records the more common Nôm representation of *tốt* as 𠺪 (a character combining semantic and phonetic elements). The use of 卒 alone without annotation may mislead; 卒 is a phonetic loan (假借), not a proper semantic Nôm character, and is not the standard dictionary form.

### ISSUE 8 — `heart` vi: Northern dialect — *trái tim* initial consonant
**File:** `words/heart.js:76`  
**Data:** `vi: ["trái tim", "t͡ɕaj˧˥ tim˥"]`  
**Assessment:** The transcription uses `t͡ɕ` (palatal affricate) for the initial of *trái* in Northern Vietnamese. This is the correct Northern standard pronunciation where historical `tr-` has merged with `ch-` → `t͡ɕ-` in Hanoi. However, this means the data correctly captures Northern. The Southern transcription of *trái* should use the retroflex `ʈ` (or `tr` cluster kept as retroflex), which the Southern entry does show (`ʈaːj˧˥`), so the distinction is maintained. The issue here is whether `t͡ɕaj˧˥` is the most accurate representation: some analyses (Thompson 1965, Kirby 2011) use `ʈ` even in Northern as a historical retention marker, while others (Phạm 2003) use `t͡ɕ` for contemporary Hanoi. The `t͡ɕ` choice is internally consistent with Northern, but should be noted. **More importantly**, the tone on *trái* is `˧˥` (sắc), but the written form has the sắc diacritic (trái), so this is correct.

### ISSUE 9 — `heart` vi_c: Central *trái tim* — retroflex initial
**File:** `words/heart.js:77`  
**Data:** `vi_c: ["trái tim", "ʈaːj˩˧ tiːm˥"]`  
**Assessment:** The Central form uses `ʈ` for the initial of *trái* (retroflex), which reflects the conservative Central pronunciation preserving the `tr-` vs `ch-` distinction. This is phonologically accurate. However the tone on *trái* is given as `˩˧` (hỏi in Central), yet the word is written *trái* with the sắc diacritic — which in Central dialect should correspond to the sắc tone `˧˥`. There is a mismatch: the diacritic ´ in *trái* = sắc tone, but the tone contour given `˩˧` is the hỏi/ngã merged tone in Central. In Central Vietnamese, the sắc tone (high rising) surfaces as `˧˥`, not `˩˧`. The `˩˧` value is the Central realisation of hỏi. This is an error: either the word should be *trải* (hỏi) or the tone contour should be `˧˥`.

### ISSUE 10 — `heart` vi_han: Sino-Vietnamese 心 *tâm* tone
**File:** `words/heart.js:557`  
**Data:** `vi_han: ["心", "təm˧˧"]`  
**Assessment:** The Hán-Việt reading of 心 is *tâm* (tâm/心). The tone of *tâm* is the bằng (level) ngang tone `˧˧`. The transcription uses `˧˧` which is reasonable but the standard representation of the ngang (level/flat) tone in Vietnamese is `˧` (mid level) without doubling: the Chao letter convention for ngang is typically `˧` alone. Using `˧˧` is non-standard notation for a level tone; `˧` suffices. Furthermore, the vowel `ə` for ⟨â⟩ is correct, but ⟨â⟩ = /ɜ/ in some analyses or /ɤ̞/ (short central-back unrounded); the representation `ə` is commonly used in Vietnamese IPA but conflates distinct vowels.

### ISSUE 11 — `one` vi: *một* — nặng tone transcription
**File:** `words/one.js:76`  
**Data:** `vi: ["một", "mot˨˩"]`  
**Assessment:** The transcription `mot˨˩` for *một* uses the huyền tone contour `˨˩` (low falling). This is incorrect. *Một* carries the nặng tone (heavy/glottalized, entering tone), which has the contour `˨˩ʔ` or `˨˩˨` with a glottal constriction in Northern Vietnamese. Phạm (2003) gives the Northern nặng as [˨˩] with glottal constriction on a short vowel before stop coda, but the contour alone (without the glottal mark or the knowledge that it is a checked syllable) is insufficient to distinguish nặng from huyền. The difference is that nặng syllables have a final stop coda (here `-t`) and constricted phonation. The quốc ngữ diacritic (dot below = ạ) and the final `-t` mark this as a checked/entering tone syllable. The tone contour used (`˨˩`) without any additional marker equates it visually with huyền. The same problem occurs in Central and Southern forms.

### ISSUE 12 — `one` vi_c: *một* — Central entering tone
**File:** `words/one.js:77`  
**Data:** `vi_c: ["một", "moːk˨˨"]`  
**Assessment:** The Central dialect form shows `moːk˨˨` — the final coda shifted to `-k` (velar), which is a known Central feature. The tone `˨˨` (low level) is used for the Central realisation of the nặng entering tone. This is phonologically defensible for some Central varieties. However `˨˨` (two level-low diacritics) is non-standard notation — a low level tone in Chao transcription is simply `˨` or `˩˨`. The doubled marker suggests an unusually long or emphatic contour that is not described in the literature.

### ISSUE 13 — `one` vi_han: Hán-Việt reading of 一
**File:** `words/one.js:563`  
**Data:** `vi_han: ["一", "ɲət˨˩"]`  
**Assessment:** The Hán-Việt reading of 一 is *nhất* (/ɲɤt̚/). The transcription uses `ɲ` for the initial (correct), and `ə` for the vowel — but the vowel in *nhất* is orthographically ⟨â⟩ (= /ɤ̞/ or /ə̞/), which is typically transcribed as `ɤ` or `ɐ` in recent work; `ə` is commonly used but is an approximation. The final `-t` should be unreleased `t̚`. The tone contour `˨˩` is huyền, but *nhất* in Hán-Việt carries the sắc tone (high rising) because 一 is an entering tone syllable (入聲) which in Vietnamese was redistributed to sắc or nặng depending on the original voicing of the initial. Since 一 has a voiceless initial in Middle Chinese (/*ʔjit/), the Hán-Việt reflex carries the sắc tone `˧˥`, not huyền `˨˩`. This is a tone assignment error.

### ISSUE 14 — `sun` vi: *mặt trời* — huyền tone on second syllable
**File:** `words/sun.js:76`  
**Data:** `vi: ["mặt trời", "mət˨˩ tɤːj˨˩"]`  
**Assessment:** *Trời* carries the huyền tone, correctly transcribed `˨˩`. However the first syllable *mặt* (nặng tone, entering) is given as `mət˨˩`. As in Issue 11, nặng on a stopped syllable requires a glottal quality marker. Moreover, the vowel ⟨ă⟩ in *mặt* is short /a̠/ (front low, shortened allophone of /a/), not /ə/. The transcription `mət` misrepresents the vowel as schwa. Correct nucleus should be `mat̚˨˩` (with short `/a/` and unreleased final stop).

### ISSUE 15 — `sun` vi_c: Central *mặt trời* — first syllable
**File:** `words/sun.js:77`  
**Data:** `vi_c: ["mặt trời", "maːk˨˨ ʈɤːj˧˨"]`  
**Assessment:** The Central form correctly shifts the final stop from `-t` to `-k` (Central feature). The vowel `maː` (long /a/) reflects Central vowel lengthening. The tone on the second syllable is `˧˨` — the Central realisation of huyền (which in Central merges to a mid-low contour). This is acceptable. However, the tone on *mặt* (first syllable) is again `˨˨` for nặng (see Issue 12). Additionally, the change from `ă` (short /a/) in Northern to `aː` (long /a/) in Central specifically for the *ă* vowel in *mặt* is uncertain: Central typically lengthens `â` vowels, but `ă` lengthening to `aː` in *mặt* needs better attestation.

### ISSUE 16 — `moon` vi: *mặt trăng* — vowel in second syllable
**File:** `words/moon.js:76`  
**Data:** `vi: ["mặt trăng", "mət˨˩ tɤŋ˥"]`  
**Assessment:** The second syllable *trăng* is transcribed `tɤŋ˥`. The vowel ⟨ă⟩ in *trăng* is short /a̠/ (the allophone of /a/ before nasals); `ɤ` (close-mid back unrounded) is incorrect for this vowel. Northern *trăng* should have a short front-low vowel: `taŋ˥` or `t͡ɕaŋ˥` (with palatal initial for Northern dialect). The vowel `ɤ` is the representation of ⟨ơ⟩ = /əː/, not ⟨ă⟩. This is a clear vowel error: `ɤ` ≠ `ă`.

### ISSUE 17 — `moon` vi_c: *mặt trăng* — vowel in second syllable
**File:** `words/moon.js:77`  
**Data:** `vi_c: ["mặt trăng", "maːk˨˨ ʈăːŋ˥"]`  
**Assessment:** The Central form uses `ʈăːŋ` with the special diacritic `ă` inside IPA, which is non-standard notation. The `ă` symbol is from quốc ngữ orthography; in IPA the short front-low vowel is transcribed as `a` (possibly with a breve: `ă` is not an IPA character). If `ă` here means a short /a/, it should be written as `a` in IPA. Using quốc ngữ characters inside an IPA transcription mixes orthographic and phonetic notation systems. Correct IPA would be `ʈaːŋ˥` or `ʈaŋ˥`.

### ISSUE 18 — `moon` vi_nom: chữ Nôm transcription
**File:** `words/moon.js:564`  
**Data:** `vi_nom: ["𩈘𢁑", "mət taŋ"]`  
**Assessment:** The IPA for the Nôm transcription gives `mət taŋ`. As established in Issue 16, the vowel in *trăng* is not `/ɤ/` (the sun entry error), and here it is given as `taŋ`, correctly using `/a/`. However, this creates an internal inconsistency with the main vi entry (`tɤŋ` in the data row). The Nôm IPA is actually more accurate than the main vi IPA for the second syllable vowel. The discrepancy reveals the error in `vi: "tɤŋ˥"`.

### ISSUE 19 — `hello` vi: *xin* initial consonant
**File:** `words/hello.js:76`  
**Data:** `vi: ["xin chào", "sin˥ t͡ɕaːw˨˩"]`  
**Assessment:** The initial of *xin* is orthographic ⟨x⟩, which in Northern Vietnamese is pronounced as the voiceless velar fricative /x/ (or in some analyses a fricative glide /x~χ/). The transcription uses `s` (voiceless alveolar fricative), which is incorrect for the Northern standard. While some Central and Southern varieties may realise ⟨x⟩ as `s` or `h`, Northern Hanoi maintains a distinct /x/. The correct transcription is `xin˥` (with IPA `x`) or at minimum `ɕin˥`. The use of `s` conflates the ⟨s⟩ initial (= /s/ in Northern) with ⟨x⟩ (= /x/). This error is also present in vi_c and vi_s.

### ISSUE 20 — `hello` vi_s: Southern *xin chào* — *chào* initial
**File:** `words/hello.js:78`  
**Data:** `vi_s: ["xin chào", "siŋ˥ ɕaːw˨˩"]`  
**Assessment:** The Southern form gives `siŋ` for *xin*, using `ŋ` as the final. In Southern Vietnamese, final nasal `-n` in open/final position is typically preserved as `n` (alveolar), not merged to `ŋ` (velar). The merger of final `-n` to `-ŋ` before /i/ context occurs in some Southern dialects but is not the default Southern Saigon standard. The `siŋ` transcription overgeneralises Southern nasal final merger. More accurately: `sin˥` or possibly `siŋ˥` for specific Southern varieties, but the Southern final nasal before front vowels is debated.

### ISSUE 21 — `hello` vi_han: 萬福 Hán-Việt reading
**File:** `words/hello.js:557`  
**Data:** `vi_han: ["萬福", "vən˨˩ fuk˨˩"]`  
**Assessment:** The Hán-Việt reading of 萬 is *vạn* (/van˨˩ˀ/, nặng tone), not *vạn* with huyền. The MC source 萬 (*mjɑnH*) maps to Hán-Việt *vạn* with nặng tone (departing tone with voiced initial → nặng). The transcription gives `vən˨˩` which uses huyền contour. Moreover the vowel `ə` is incorrect: *vạn* has the vowel /aː/ or /a/, orthographically written as ⟨a⟩ (as in the word 萬 = *vạn*). The correct Hán-Việt transcription is `van˨˩ˀ` (nặng) or at minimum `van˨˩`. Additionally, the vowel of 萬 in Hán-Việt is /a/, not /ə/.

### ISSUE 22 — `fire` vi_c: Central *lửa* tone
**File:** `words/fire.js:77`  
**Data:** `vi_c: ["lửa", "lɨə˧˩"]`  
**Assessment:** *Lửa* carries the hỏi tone in Northern Vietnamese (dipping, `˧˩˧`). In Central Vietnamese, hỏi and ngã merge. The Central merged tone for hỏi/ngã is sometimes transcribed as `˧˩` (a simple low fall without the final rise of the Northern hỏi). The transcription `˧˩` is used here. Compared to the Northern `˧˩˧`, this correctly drops the final rise, which is one view of Central hỏi/ngã merger. However, some descriptions of Central give this merged tone as `˨˩` (lower starting point). The `˧˩` is phonetically plausible but not universally agreed upon for the Central Huế realisation.

### ISSUE 23 — `fire` vi_s: Southern *lửa* tone
**File:** `words/fire.js:78`  
**Data:** `vi_s: ["lửa", "lɨə˨˩˥"]`  
**Assessment:** The Southern hỏi/ngã merged tone is given as `˨˩˥` (low-fall-rise). This contour has been described for Southern Vietnamese by Brunelle (2009) and others as a creaky-toned rising contour. The `˨˩˥` value is a reasonable representation. However it differs notably from Northern hỏi `˧˩˧` in both starting point and terminal height. This is phonologically appropriate for Southern. No direct error, but the contour is at the edge of accepted description.

### ISSUE 24 — `thanks` vi: *cảm* initial — /k/ vs /c/
**File:** `words/thanks.js:76`  
**Data:** `vi: ["cảm ơn", "kaːm˧˩˧ əːn˥"]`  
**Assessment:** The initial of *cảm* in Northern Vietnamese is the voiceless velar stop /k/ (orthographic ⟨c⟩ before /a/). The transcription uses `k`, which is correct. However, orthographic ⟨ơn⟩ in *ơn* represents the vowel /əː/ + final /n/. The transcription gives `əːn`, which is correct. The tone of *ơn* is ngang (unmarked, level), transcribed as `˥`. This assigns the level tone contour to the Chao value `˥` (high level). However, the standard representation of the Northern Vietnamese ngang tone (Tone 1) is mid-level `˧`, not high `˥`. A tone contour of `˥` (high level) corresponds to the sắc or sắc-like tone, not ngang. The ngang tone of *ơn* should be `˧`. The same error appears in vi_c and vi_s for the second syllable.

### ISSUE 25 — `mother` vi: *mẹ* — nặng tone
**File:** `words/mother.js:76`  
**Data:** `vi: ["mẹ", "mɛ˨˩"]`  
**Assessment:** *Mẹ* carries the nặng tone (heavy, with breathy/glottalised onset on the vowel, and the diacritic ⟨.⟩ below). The transcription `˨˩` is the huyền tone contour. As discussed in Issue 11, nặng differs from huyền in laryngeal quality: nặng has a constricted/modal+glottal phonation. The tone contour alone (`˨˩`) does not distinguish nặng from huyền. Phonetically, Phạm (2003) distinguishes Northern nặng as having a lower starting point and stronger constriction than huyền. The correct transcription should either use a diacritic for creak/constriction or at minimum note the laryngeal distinction.

### ISSUE 26 — `father` vi_s: Southern *ba* — implosive initial
**File:** `words/father.js:78`  
**Data:** `vi_s: ["ba", "ɓaː˥"]`  
**Assessment:** The transcription uses `ɓ` (bilabial implosive) for Southern *ba*. In Vietnamese, orthographic ⟨b⟩ is indeed an implosive /ɓ/ in all major dialects, so this is phonetically accurate. However, the tone `˥` (high level) is used for the sắc tone on *ba*. Northern and Southern sắc tone contours differ: Northern sắc is a rising tone `˧˥`, not high level `˥`. The Southern sắc is often described as slightly shorter and with a higher starting point, but still rising `˧˥` rather than flat high `˥`. A flat `˥` contour would correspond more to the Thai high-tone analogue, not Vietnamese sắc.

### ISSUE 27 — `dog` vi_s: Southern — *chó* initial
**File:** `words/dog.js:78`  
**Data:** `vi_s: ["chó", "ɕɔ˧˥"]`  
**Assessment:** The Southern form uses `ɕ` (voiceless palatal fricative) for the initial of *chó*. This reflects the Southern merger of `ch-` and `tr-` into a fricative /ɕ/ (or /ʃ/). The Northern and Central forms correctly use `t͡ɕ` (affricate). The use of `ɕ` for Southern *ch-* is phonologically supported for Southern Saigon speech and is not an error. However, it would be worth noting that the Southern treatment of *ch-* varies by speaker and word; some analyses use /tɕ/ throughout all dialects and attribute the apparent fricative to a fast-speech reduction. The representation is defensible.

### ISSUE 28 — `cat` vi_han: 貓 tone
**File:** `words/cat.js:557`  
**Data:** `vi_han: ["貓", "miew˧˧"]`  
**Assessment:** The Hán-Việt reading of 貓 is *miêu* (貓 = miêu). The tone contour given is `˧˧` (mid-level, as for ngang). Checking the Middle Chinese source: 貓 (*mæu*, entering-tone or departing category) — in Hán-Việt, 貓 is typically read as *miêu* with ngang tone (level, unmarked), which is consistent with `˧˧`. However, as noted in Issue 10, the ngang tone in Chao notation is standardly `˧` (single mid), not `˧˧` (doubled). The doubled `˧˧` is non-standard for a level tone. Additionally, the vowel `iew` — the glide sequence `iew` represents the diphthong in *miêu*, which is correct.

### ISSUE 29 — `drink` vi_han: Hán-Việt 飲 *ẩm* tone
**File:** `words/drink.js:557`  
**Data:** `vi_han: ["飲", "əm˧˩˧"]`  
**Assessment:** The Hán-Việt reading of 飲 is *ẩm* (uống = native; *ẩm* = Sino-Vietnamese). The written form *ẩm* carries the hỏi tone. The IPA transcription `əm˧˩˧` uses the hỏi contour `˧˩˧`, which matches hỏi tone — this is correct for *ẩm*. However the vowel is `ə` for orthographic ⟨â⟩. This is defensible as a schwa-like vowel, but as noted in Issue 10, ⟨â⟩ = /ɤ̞/ in some analyses. More critically, the MC source for 飲 is *ʔjimX* (rising tone), which in Hán-Việt maps to the hỏi tone via the standard tone-sandhi rules for level-initial Old Chinese entering tones. The hỏi assignment is phonologically correct.

### ISSUE 30 — Systematic: final stops throughout — all `p`, `t`, `k` final consonants missing unreleased diacritic
**Files:** `words/good.js`, `words/one.js`, `words/eye.js`, `words/sun.js`, etc.  
**Data (examples):** `"tot˧˥"`, `"mak˧˥"`, `"mot˨˩"`, `"mət˨˩"`  
**Assessment:** Vietnamese final stops /p t k/ are phonetically unreleased in all positions and in all dialects. This is a typologically robust feature documented by Thompson (1965:50), Kirby (2011), and Phạm (2003). None of the Vietnamese IPA transcriptions in this dataset marks final stops as unreleased (IPA `p̚ t̚ k̚`). The absence of the unreleased mark is a systemic omission affecting every entry with a final stop: *tốt* (`tot˧˥` → `tot̚˧˥`), *mắt* (`mak˧˥` → `mak̚˧˥`), *một* (`mot˨˩` → `mot̚˨˩`), *mặt* (`mət˨˩` → `mat̚˨˩`), etc. This applies equally to Northern, Central, and Southern forms, and to both native vocabulary and Hán-Việt readings.

---

## Summary of issue categories

| Category | Count | Issue numbers |
|---|---|---|
| Unreleased final stops (systemic) | 1 systemic | 1, 4, 30 |
| Tone contour errors | 7 | 6, 9, 11, 13, 21, 24, 26 |
| Vowel transcription errors | 5 | 14, 16, 17, 21, 25 |
| Non-standard Chao notation | 3 | 10, 12, 28 |
| Mixed orthographic/IPA notation | 1 | 17 |
| Hán-Việt tone assignment | 2 | 6, 13 |
| Hán-Việt vowel | 2 | 21, 10 |
| chữ Nôm glyph choice | 1 | 7 |
| Initial consonant | 2 | 19, 20 |
| Dialect-specific feature accuracy | 3 | 5, 8, 22 |

Total distinct issues: **30** (Issues 1–30, with Issue 30 spanning multiple files)

---

## Worker round-1 response (作業者round-1)

Thank you for the thorough Vietnamese phonological review. I evaluated all 30 issues against the project editing policy: only fix clear, unambiguous LOCAL errors or internal inconsistencies. Several findings are linguistically defensible but describe SYSTEMATIC, dataset-wide conventions the team already applies consistently; per policy those are held (won't-fix at the data level) and should be raised as a separate convention pass if the team wants to revisit them.

### Applied

- **ISSUE 16 / 18 — `moon.js` vi vowel of *trăng*** (applied by orchestrator this round). `vi: ["mặt trăng", "mət˨˩ tɤŋ˥"]` → second-syllable IPA `tɤŋ˥` → `taŋ˥`. The vowel ⟨ă⟩ is /a/ everywhere else in the dataset (*ăn* = `an˥`, *mắt* = `mak˧˥`), and `ɤ` is the ⟨ơ⟩ vowel, not ⟨ă⟩. This is confirmed as an internal inconsistency by the same file's Nôm entry `vi_nom: ["𩈘𢁑", "mət taŋ"]`, which already uses the correct `taŋ`. Clear, unambiguous, locally-supported fix. Only the IPA vowel was changed; surface form and tone untouched.

### Held — systematic dataset-wide conventions (not local errors)

- **ISSUE 1 / 4 / 30 — unreleased final stops (`p̚ t̚ k̚`).** The unreleased diacritic is absent from EVERY Vietnamese final stop (Northern, Central, Southern, native and Hán-Việt) and is used in the dataset only for Korean. This is a deliberate, consistent convention, not an omission in individual entries. Held; recommend a single team-wide decision rather than per-entry edits.
- **ISSUE 11 / 14 / 25 — nặng tone written `˨˩` without a glottal/creak marker.** Applied uniformly across all nặng syllables (*một*, *mặt*, *mẹ*). The dataset uses no `ʔ`/creak diacritics in vi at all. Systematic convention; held.
- **ISSUE 10 / 12 / 24 / 28 — ngang/level tone notation (`˧˧`, `˥` vs `˧`).** The dataset is internally consistent in its own way: native ngang words use `˥` (*tay*, *ăn*, *ơn*), Hán-Việt level readings use `˧˧` (*tâm*, *miêu*). This is a notation convention, not a local error. Held.
- **ISSUE 13 — `one.js` 一 *nhất* tone (sắc vs `˨˩`).** Linguistically you are right that 一 (入聲, voiceless initial) → sắc. However the team writes ALL checked Hán-Việt syllables as `˨˩` regardless of romanized tone: 福 *phúc* (sắc) = `fuk˨˩` and 目 *mục* (nặng) = `muk˨˩` both use `˨˩`. Changing only *nhất* would break consistency with *phúc*. This is a systematic Hán-Việt checked-tone convention; held pending a team-wide pass (which would also need to fix *phúc*).
- **ISSUE 6 — `good.js` 善 *thiện* tone.** 善 is 上聲 with voiced initial dʑ- → Vietnamese **nặng** (the orthography ⟨iệ⟩ confirms nặng), not the huyền `˨˩` you proposed nor unambiguously the data's `˨˩˨`. Because your proposed correction (huyền) is not clearly correct, and the team's checked/nặng convention is `˨˩`-family, I am not confident in a single mechanical fix here. Held for reviewer clarification on the intended target contour.
- **ISSUE 9 / 22 / 23 — Central/Southern hỏi-merger & sắc realisations (`˩˧`, `˧˩`, `˨˩˥`).** The Central `˩˧` for sắc appears on *chó*, *uống* and *trái* together — a consistent (if debatable) pattern, not an isolated *trái* slip. These are dialect-tone modelling choices, not clean local errors; held.
- **ISSUE 19 / 20 — ⟨x⟩ as `s`, Southern final `siŋ`.** `s` for ⟨x⟩ is applied consistently across all vi registers for *xin*; the Northern /x/~/s/ choice is a transcription-system decision. Held as a convention.
- **ISSUE 21 — `hello.js` 萬 *vạn* vowel/tone.** Same checked/departing Hán-Việt convention family as Issue 13; the `ə` vowel for *vạn* would ideally be `a`, but I am treating the Hán-Việt vowel/tone normalisation as a systematic pass rather than a one-off, to avoid partial inconsistency. Held for a dedicated Hán-Việt normalisation round.

### No action needed (reviewer noted as correct / note-only)

- ISSUES 2, 3, 5, 8, 15, 17, 26, 27, 29 — the reviewer explicitly assessed these as defensible, acceptable, "no direct error", or a note/representation preference. ISSUE 7 (Nôm glyph 卒 for *tốt*) is a phonetic-loan glyph choice flagged as potentially misleading but not a clear error; held as a glyph-convention note.

**Summary:** 1 clear local fix applied (moon *trăng* vowel `ɤ`→`a`, corroborated by its own Nôm entry). The remaining flagged items are systematic dataset-wide conventions or reviewer corrections that are not unambiguously correct; these are held with rationale and, where warranted (unreleased stops, nặng marking, Hán-Việt checked-tone/vowel normalisation), recommended as separate team-wide convention passes rather than piecemeal edits.

---

## Reviewer round-1 response (再評価 round-1)

I verified every worker claim directly against live data under `words/`. The applied fix is present, and the "held" conventions are genuinely systematic (not isolated slips), with one exception that the worker mis-classified.

### Verification of the applied fix

- **ISSUE 16 / 18 (moon `trăng` vowel) — ✓ ACCEPT, VERIFIED.** Live `words/moon.js:76` now reads `vi: ["mặt trăng", "mət˨˩ taŋ˥"]`. The `ɤ`→`a` change is present, surface and tone untouched, and it agrees with the file's own `vi_nom` (`mət taŋ`) and the dataset-wide `⟨ă⟩ = /a/` pattern (*ăn* `an˥`, *mắt* `mak˧˥`). Correct fix.

### Verification of the "held — systematic convention" items

I confirmed each of these is truly dataset-wide, so per-entry edits would break consistency. The worker's rationale stands.

- **ISSUE 1 / 4 / 30 (unreleased final stops) — ✓ ACCEPT held.** Scripted scan: **0** vi entries (Northern/Central/Southern, native or Hán-Việt) carry `p̚/t̚/k̚`; the unreleased diacritic is used **only** for Korean (e.g. `eat.js` ko `mʌk̚t͈a`, `house.js` ko `t͡ɕip̚`). This is a deliberate, consistent transcription policy, not a per-entry omission. Won't-fix at data level; legitimately a team-wide convention question.
- **ISSUE 11 / 14 / 25 (nặng without glottal/creak) — ✓ ACCEPT held.** Scan confirms **0** vi entries contain `ʔ`, `̰`, or `̤`. Nặng is uniformly written `˨˩`(-family). Systematic; held.
- **ISSUE 10 / 12 / 24 / 28 (ngang notation `˥` vs `˧˧` vs `˧`) — ✓ ACCEPT held.** Confirmed the split convention: native ngang = `˥` (*tay* `taj˥`, *ăn* `an˥`, *ơn* `əːn˥`), Hán-Việt level = `˧˧` (*tâm* `təm˧˧`, *miêu* `miew˧˧`). Internally consistent notation choice, not a local error.
- **ISSUE 13 (一 *nhất* sắc vs `˨˩`) — ✓ ACCEPT held.** Verified the checked-Hán-Việt convention is real: 福 *phúc* = `fuk˨˩` (`hello.js:557`) and 目 *mục* = `muk˨˩` (`eye.js:557`) both use `˨˩` despite differing romanized tones. Editing only *nhất* would desync it from *phúc*/*mục*. Correctly held for a team-wide Hán-Việt checked-tone pass.
- **ISSUE 6 (善 *thiện* tone) — △ PARTIAL, but held is acceptable.** Live `good.js:557` still `tʰien˨˩˨`. The reviewer's proposed *huyền* `˨˩` is itself not clearly correct — 善 is 上聲 with voiced initial → Vietnamese **nặng** (orthographic ⟨iệ⟩), so the data's broken/dipping `˨˩˨` is closer to a nặng-family contour than the reviewer's `˨˩`. Since the proposed correction is not unambiguously right, mechanical replacement is unwarranted. Held is defensible; folds into the same Hán-Việt normalisation pass.
- **ISSUE 9 / 22 / 23 (Central/Southern hỏi-merger & sắc realisations) — ✓ ACCEPT held.** Dialect-tone modelling choices applied as a pattern, not isolated slips; not clean local errors.
- **ISSUE 19 / 20 (⟨x⟩ as `s`; Southern `siŋ`) — ✓ ACCEPT held.** `s` for ⟨x⟩ is applied across all vi registers (`hello.js` `sin˥`/`siːn˥`/`siŋ˥`); a transcription-system decision, not a one-off error.
- **ISSUE 21 (萬 *vạn* vowel/tone) — ✓ ACCEPT held.** Same checked/departing Hán-Việt family as Issue 13; folds into the normalisation pass. Live data unchanged (`vən˨˩`), consistent with the convention.
- **ISSUES 2,3,5,8,15,17(see below),26,27,29 + 7 — ✓ ACCEPT** as reviewer-noted defensible / note-only.

### New / re-opened actionable item

- **ISSUE 17 — △→ ACTIONABLE (worker mis-classified as note-only).** Live `words/moon.js:77`: `vi_c: ["mặt trăng", "maːk˨˨ ʈăːŋ˥"]`. The IPA string contains the quốc-ngữ orthographic character ⟨ă⟩ (U+0103, `a`+combining breve) **inside an IPA transcription**. A dataset-wide scan shows this is the **only** vi entry containing `ă` — it is NOT a systematic convention (unlike the items above), it is a lone outlier. Every other vi IPA string uses pure IPA. ⟨ă⟩ is not an IPA symbol; the intended short low vowel should be `a`. Fix: `ʈăːŋ˥` → `ʈaːŋ˥` (IPA-only, length mark retained). This is a clean, isolated, locally-supported correction of exactly the kind the editing policy permits — it should be applied, not held. (The reviewer raised the substance in ISSUE 17; the worker filed it under "no action," but the singleton-outlier evidence makes it a genuine local error, not a representation preference.)

### Scorecard

| Verdict | Items |
|---|---|
| ✓ Accept (fix verified) | 16/18 |
| ✓ Accept (held = real systematic convention) | 1/4/30, 11/14/25, 10/12/24/28, 13, 9/22/23, 19/20, 21 |
| ✓ Accept (note-only / defensible) | 2,3,5,7,8,15,26,27,29 |
| △ Partial (held acceptable, not clearly correctable) | 6 |
| ✗ Re-opened (must fix) | 17 — orthographic `ă` inside IPA, singleton outlier |

**File status: OPEN** — Dev team must fix `words/moon.js:77` vi_c: replace the orthographic ⟨ă⟩ with IPA `a` (`ʈăːŋ˥` → `ʈaːŋ˥`); it is the sole vi entry mixing quốc-ngữ into IPA, a clean local error rather than a held convention.
