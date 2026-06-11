# Wordmap review #109 — Tai-Kadai & Hmong-Mien round-2 auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a Tai-Kadai and Hmong-Mien specialist returning for the second-round audit of the columns first reviewed in #16, #46, #47, #52 and #59 (all closed). My working references are Iwasaki & Ingkaphirom (2005) *A Reference Grammar of Thai* for the Central Thai consonant-class → tone-outcome system, Enfield (2007) *A Grammar of Lao* for the Vientiane standard (including the consonant-class table: high ຂ ສ ຖ ຜ ຝ ຫ vs low ຄ ຊ ທ ນ ພ ຟ ມ ລ ວ ຮ), Ratliff (2010) *Hmong-Mien Language History* for the RPA system, the 1957/1982 Sawcuengh (Standard Zhuang) orthographic specification (vowel-length pairs a/ae, o/oe; ⟨w⟩ = /ɯ/; tone letters z/j/x/q/h as final letters), and the Shan script vowel-sign inventory (◌ႄ~◌ႅ = /ɛ/, ◌ေႃ = /ɔ/, ◌ိူ = /ɤ/, ◌ိုဝ် = /ɯ/). I work strictly against the live `words/*.js` files and the project docs (`docs/words/CONTRIBUTING.md` §IPA conventions — "Use IPA notation, not the language's native romanization"; `docs/words/LANG_CODES.md`), and against the closed round-1 adjudications, which I treat as binding except where I can show the adjudication itself rested on a factual error. Grounding notes for this wave: the codes `ium` and `mww` do **not** exist in the dataset (grep-verified; White Hmong lives under `hmn`, whose 20 entries I re-verified — all 22 surface forms now match the targets closed in #47, no regressions, nothing to report there); I do not re-report the corpus-wide holds already accepted (Thai ˧˥ = high convention, Zhuang tone-digit scheme, the deferred full-Shan tone pass of #52, `nd-`→`d` policy, th regional short `nam`, lo `maj˥˩`). What follows are only items that are new, or where a round-1 "fix" demonstrably introduced an error via a consonant-class or grapheme misidentification.

---

## Issues found

### 1. th — father — round-1 fix inverted the tone: พ is LOW class, so mai ek gives falling, not low
- **File:** words/father.js line 79
- **Current:** `["พ่อ", "pʰɔː˨˩"]`
- **Expected:** `["พ่อ", "pʰɔː˥˩"]`
- **Why:** Review #46 (Issue 2, applied) changed the original `pʰɔː˥˩` to `pʰɔː˨˩` on the stated ground that "พ belongs to the high class; mai ek on a high-class consonant yields the low tone." The class assignment is factually wrong: Thai พ (pho phan) is a **low-class** consonant (อักษรต่ำ); its high-class counterpart is ผ (pho phueng). Low class + mai ek on a live syllable yields the **falling** tone (Iwasaki & Ingkaphirom 2005, tone table) — พ่อ is /pʰɔ̂ː/, falling, in every standard description (Haas 1964 s.v. พ่อ gives the circumflex/falling form, not the grave/low form the round-1 review cited). Sibling-cell evidence inside this corpus: mother แม่ = `mɛː˥˩` (mother.js:79; ม low class + mai ek — the **identical** tone-box cell, correctly falling), and the three regional copies of this very word are all still `pʰɔː˥˩` (father.js:192–194, th_isan/th_n/th_s), leaving the Bangkok cell the lone deviant in its own row. The round-1 edit should be reverted.

---

### 2. lo — father — same consonant-class misidentification in review #16: ພ is LOW class in Lao
- **File:** words/father.js line 147
- **Current:** `["ພໍ່", "pʰɔː˩˧"]`
- **Expected:** `["ພໍ່", "pʰɔː˨˩"]`
- **Why:** Review #16 (Issue 5, applied) set `pʰɔː˩˧` on the rationale "ພ = high-class consonant in Lao; mai ek on high-class → ˩˧." Lao ພ is a **low-class** consonant (ອັກສອນຕໍ່າ); the high-class /pʰ/ letter is ຜ (Enfield 2007, consonant-class table). The corpus' own mai-ek scheme — confirmed and closed in #16 itself ("low-class + mai ek → ˨˩, high-class + mai ek → ˩˧") — therefore puts ພໍ່ in the **˨˩** cell together with mother ແມ່ `mɛː˨˩` (mother.js:147, ມ low class + mai ek, the identical cell). The current value makes the two low-class+mai-ek kin terms carry two different tones, which no analysis of Vientiane Lao permits; #46's closing note (NEW-1) already recorded this father/mother contour clash as unresolved. Only the class identification was wrong; correcting it to the corpus' own ˨˩ convention requires no cross-school decision.

---

### 3. lo — fire — A-low cell split: ໄຟ carries the mid-class contour while cat/hand/house carry ˥ in the same cell
- **File:** words/fire.js line 147
- **Current:** `["ໄຟ", "faj˩˧"]`
- **Expected:** `["ໄຟ", "faj˥"]`
- **Why:** ຟ (fo tam) is a **low-class** consonant (the high-class /f/ is ຝ; Enfield 2007). ໄຟ is a live, unmarked syllable → tone category A, low class. The corpus transcribes that exact cell as ˥ three times: cat ແມວ `mɛːw˥` (cat.js:147), hand ມື `mɯː˥` (hand.js:147), house ເຮືອນ `hɯːan˥` (house.js:147) — all low-class live, all ˥, matching the high tone that Vientiane Lao assigns to low-class live syllables (Enfield 2007). `faj˩˧` instead carries the contour the corpus uses for the *mid-class* live cell (kin/diː/taː…). Note on the prior adjudication: #16 proposed `faj˦˥` and was held wont-fix, but that hold's two grounds were (a) the proposal relied on a (wrong) *high*-class analysis of ຟ, and (b) "not an internal anomaly." Ground (a) is repaired here (ຟ is low class, and the low-class A cell still surfaces high), and ground (b) is factually refuted by the three ˥ siblings above, which the round-1 exchange never examined. This is an internal anomaly with a determinate, corpus-internal target.

---

### 4. lo — sun — second syllable ເວັນ sits in the same A-low cell and needs the same ˥
- **File:** words/sun.js line 147
- **Current:** `["ຕາເວັນ", "taː˩˧ ven˩˧"]`
- **Expected:** `["ຕາເວັນ", "taː˩˧ ven˥"]`
- **Why:** ວ is a low-class consonant; ເວັນ is live and unmarked → A-low, the cell the corpus elsewhere writes ˥ (cat `mɛːw˥`, hand `mɯː˥`, house `hɯːan˥`, all line 147 of their files). The first syllable ຕາ (ຕ mid class, live) correctly carries the corpus' mid-class ˩˧ and is untouched. The current `ven˩˧` was set by #16 round-1 under the blanket claim "low-class live, no mark → rising ˩˧" — a claim contradicted by the corpus' own three ˥ entries in that cell and by the Vientiane description (low-class live = high; Enfield 2007). Same correction class as issue 3.

---

### 5. lo — moon — both syllables deviate from the corpus' mid-class live cell (supplying the determination #52 asked for)
- **File:** words/moon.js line 147
- **Current:** `["ດວງເດືອນ", "duaŋ˧ dɯːan˨˩"]`
- **Expected:** `["ດວງເດືອນ", "duaŋ˩˧ dɯːan˩˧"]`
- **Why:** #52 (Issue 11) flagged the lone `duaŋ˧` against the column's ˩˧ norm and was held "needs a Lao tone-category confirmation." Here it is: both syllables begin with ດ, a **mid-class** consonant, and both are live and unmarked — i.e., the same category as ກິນ `kin˩˧`, ດີ `diː˩˧`, ຕາ `taː˩˧` (eye.js:147 and sun.js:147), ໃຈ `t͡ɕaj˩˧` (heart.js:147, thanks.js:147) and ບາຍ `baːj˩˧` (hello.js:147) — seven mid-class live syllables, uniformly ˩˧. `duaŋ˧` looks copied from the Thai cell (th `duaŋ˧t͡ɕan˧`, moon.js:79, where mid-class live = mid IS correct *for Thai*), and `dɯːan˨˩` carries the corpus' mai-ek contour although ເດືອນ bears no tone mark at all. Both syllables resolve to the corpus' own ˩˧ cell; no cross-school choice is involved.

---

### 6. za — eat — Sawcuengh vowel letter ⟨w⟩ misread as labialization: gwn is [kɯn], not [kʷɤn]
- **File:** words/eat.js line 195
- **Current:** `["gwn", "kʷɤn˥"]`
- **Expected:** `["gwn", "kɯn˥"]`
- **Why:** In the 1957/1982 Standard Zhuang orthography ⟨w⟩ is the **vowel** /ɯ/, never a labialization mark; *gwn* 'eat' is [kɯn]. The corpus itself reads ⟨w⟩ correctly everywhere else: *fwngz* → `fɯŋ˧˥` (hand.js:195), *mwngz* → `mɯŋ˧˥` (hello.js:195 and thanks.js:195). `kʷɤn` — a labialized velar plus an epenthetic [ɤ] that the spelling does not contain — is the lone deviant treatment of ⟨w⟩ in the Zhuang column. Tone digit ˥ (tone 1, no final letter) kept per the adjudicated corpus scheme.

---

### 7. za — thanks — same ⟨w⟩ misreading inside one string: dwg [tɯk] vs mwngz [mɯŋ]
- **File:** words/thanks.js line 195
- **Current:** `["dwgrengz mwngz", "tuk˧ɣeŋ˧˥mɯŋ˧˥"]`
- **Expected:** `["dwgrengz mwngz", "tɯk˧ɣeŋ˧˥mɯŋ˧˥"]`
- **Why:** *dwg* has the same vowel letter ⟨w⟩ = /ɯ/ as *mwngz*, yet this single IPA string renders the first as [u] (`tuk`) and the third as [ɯ] (`mɯŋ`) — internally contradictory three syllables apart. Checked-syllable reading [tɯk] (orthographic final -g = /k/ coda, tone 8) with the corpus' ˧ digit kept. Same error family as issue 6.

---

### 8. za — water — the round-1 vowel "fix" is itself wrong: closed-syllable ⟨ae⟩ is short /a/, not /ɛ/
- **File:** words/water.js line 197
- **Current:** `ipa: "ɣɛm˦"` (object form; surface 淰, Latin alt *raemx*)
- **Expected:** `ipa: "ɣam˦"`
- **Why:** #46 (Issue 15, applied) changed `ɣam˦` → `ɣɛm˦` claiming "the digraph *ae* represents a front vowel /ɛ/." That is not what the 1957/1982 orthography specifies: ⟨ae⟩ before a coda spells **short /a/**, contrasting with ⟨a⟩ = long /aː/ (*raemx* [ɣam], *daengz* [taŋ], *ndaen* [ɗan]); the /ɛ/ value belongs to ⟨e⟩-series spellings. Only in open syllables does ⟨ae⟩ read [ai] — which the corpus itself gets right at tree *faex* → `fai˦` (tree.js:195). Corpus-internal proof that ae ≠ ɛ: moon *ndaen* is transcribed with an a-quality nucleus (`daːn˥`, moon.js:197) — the same digraph cannot be /ɛ/ in *raemx* and /a(ː)/ in *ndaen*. The original [a] quality should be restored (the short quantity is the point of the digraph; tone digit ˦ untouched per the adjudicated scheme).

---

### 9. za — drink — compound repeats both the ⟨w⟩ and the ⟨ae⟩ errors
- **File:** words/drink.js line 195
- **Current:** `["gwnraemx", "kʷɤn˥ɣɛm˦"]`
- **Expected:** `["gwnraemx", "kɯn˥ɣam˦"]`
- **Why:** First component *gwn* = [kɯn] (issue 6: ⟨w⟩ = /ɯ/, cf. the corpus' own `fɯŋ˧˥`/`mɯŋ˧˥`); second component *raemx* = [ɣam] (issue 8: closed-syllable ⟨ae⟩ = short /a/, per the 1957/1982 spec and the corpus' own *ndaen* a-quality). Both fixes must land here too or the compound will contradict its corrected simplex entries in eat.js and water.js.

---

### 10. za — sun — ⟨ae⟩ written long and ⟨oe⟩ misread as /ɯ/: daengzngoenz is [taŋ…ŋon], not [taːŋ…ŋɯn]
- **File:** words/sun.js line 197
- **Current:** `ipa: "taːŋ˧˥ŋɯn˧˥"` (object form; surface 日, Latin alt *daengzngoenz*)
- **Expected:** `ipa: "taŋ˧˥ŋon˧˥"`
- **Why:** Two grapheme misreadings, both phonemic in Standard Zhuang. (a) *daengz*: ⟨ae⟩ = **short** /a/ (issue 8); writing `taːŋ` collapses the orthography's a/ae length contrast — the corpus marks ⟨a⟩ as long correctly in dog *ma* → `maː˥` (dog.js:195) and eye *da* → `taː˥` (eye.js:195), so [aː] here claims a spelling *dangz* that does not exist. (b) *ngoenz*: ⟨oe⟩ is the short counterpart of ⟨o⟩, i.e. **/o/** ([ŋon] 'day/sun'), not /ɯ/ — the /ɯ/ vowel is spelled ⟨w⟩ (issue 6). Tone digits ˧˥ kept per the adjudicated -z convention.

---

### 11. za — moon — ndaen given long /aː/ against the same ⟨ae⟩ = short-a rule
- **File:** words/moon.js line 197
- **Current:** `ipa: "daːn˥"` (object form; surface 月, Latin alt *ndaen*)
- **Expected:** `ipa: "dan˥"`
- **Why:** *ndaen* has closed-syllable ⟨ae⟩ = short /a/ (1957/1982 spec; same rule as issues 8–10), so [daːn] asserts a spelling *ndan*… in reverse — ⟨a⟩ = /aː/ vs ⟨ae⟩ = /a/ is exactly the contrast the digraph exists to write. After issues 8–10 land, every closed-syllable ⟨ae⟩ token in the column (*raemx* ×2, *daengz*, *ndaen*) converges on short [a], removing the current three-way inconsistency (ɛ / aː / a). The `nd-` → `d` onset is left as adjudicated corpus policy (#46 Issue 19, accepted hold); only the nucleus quantity is at issue.

---

### 12. shn — tree — final ၼ် is /n/: the IPA writes a labial that the script does not contain
- **File:** words/tree.js line 784
- **Current:** `["တူၼ်ႈမႆႉ", "tum maj"]`
- **Expected:** `["တူၼ်ႈမႆႉ", "tun maj"]`
- **Why:** The first syllable တူၼ်ႈ closes with ၼ် (Shan NA + asat) = coda /n/; a /m/ coda would be written မ်. The cognate set confirms -n throughout: th ต้น `ton˥˩maj˧˥` (tree.js:79), lo ຕົ້ນ `ton˥˩` (tree.js:147), khb `ton mai` (tree.js:984), blt `ton mai˨˦` (tree.js:985) — the SW-Tai 'trunk' etymon *tonᶜ has no labial reflex anywhere. Pure transcription slip, independent of the deferred Shan tone pass (#52), so the Expected stays bare-toned per that accepted hold.

---

### 13. shn — father — vowel-sign combination ◌ေႃ is /ɔ/, not schwa
- **File:** words/father.js line 784
- **Current:** `["ပေႃႈ", "pə"]`
- **Expected:** `["ပေႃႈ", "pɔ"]`
- **Why:** In Shan script the digraph ◌ေႃ (E sign + A sign) spells the open-mid back vowel /ɔ/ — the structural counterpart of Burmese ော. ပေႃႈ 'father' is [pɔ] with the ◌ႈ tone, matching the pan-Tai 'father' etymon *bɔːᴮ: lo ພໍ່ `pʰɔː` (father.js:147), khb ᦗᦸᧈ `pɔː` (father.js:984), th พ่อ `pʰɔː` (father.js:79). A schwa reflex exists in no member of the cognate set and corresponds to no Shan vowel sign in this syllable; `pə` appears to be a romanization-of-convenience leak into the IPA slot (CONTRIBUTING.md §IPA conventions).

---

### 14. shn — mother — ◌ႄ is /ɛ/: the corpus already reads its pre-coda allograph ◌ႅ correctly in `cat`
- **File:** words/mother.js line 790
- **Current:** `["မႄႈ", "me"]`
- **Expected:** `["မႄႈ", "mɛ"]`
- **Why:** Shan distinguishes ◌ေ = /e/ from ◌ႄ = /ɛ/; ◌ႅ is the variant of the same /ɛ/ vowel used before a final consonant. The corpus itself reads ◌ႅ as [ɛ] in cat မႅဝ် → `mɛw` (cat.js:784), yet reads the open-syllable allograph ◌ႄ here as [e] — one phoneme, two values within the same column. Cognates fix the quality: th แม่ `mɛː˥˩` (mother.js:79), lo ແມ່ `mɛː˨˩` (mother.js:147), blt `mɛː˨˦` (mother.js:991); SW-Tai *mɛːᴮ. Expected stays bare-toned per the deferred Shan tone pass.

---

### 15. shn — moon — romanized ⟨y⟩ in the IPA slot; ◌ိူ = /ɤ/ (supplying the corrected form #46 held for)
- **File:** words/moon.js line 790
- **Current:** `["လိူၼ်", "lyn"]`
- **Expected:** `["လိူၼ်", "lɤn"]`
- **Why:** #46 (Issue 7) flagged `lyn` as "a romanized approximate, not phonemic IPA" and the hold was explicitly "needs the reviewer to supply the exact corrected form" — supplied here. The Shan vowel sign ◌ိူ spells the mid back unrounded vowel /ɤ/ (conventional romanization *ue*/*oe*, whence the stray ⟨y⟩); လိူၼ် 'moon/month' is [lɤn] (cognate of lo ເດືອນ `dɯːan`, th เดือน — PSWT *ɗɯənᴬ, with the regular Shan monophthong [ɤ] reflex). As IPA, ⟨y⟩ asserts a front **rounded** vowel that Shan does not have. CONTRIBUTING.md line 111: "Use IPA notation, not the language's native romanization." Tone deliberately omitted pending the #52 column pass.

---

### 16. shn — house — the same grapheme ◌ိူ rendered /e/ here and /y/ in `moon`: both wrong, one rule
- **File:** words/house.js line 791
- **Current:** `["ႁိူၼ်း", "hen"]`
- **Expected:** `["ႁိူၼ်း", "hɤn"]`
- **Why:** ႁိူၼ်း 'house' has the identical rime ◌ိူ + ၼ် as moon လိူၼ် (issue 15), yet the corpus currently gives the nucleus as [e] here and "y" there — the same Shan vowel sign with two different incorrect values in one column. The correct nucleus is /ɤ/: [hɤn], cognate with lo ເຮືອນ `hɯːan˥` (house.js:147) and khb `huːn` (house.js:991), PSWT *rɯənᴬ with the regular Shan [ɤ] monophthongization (and the *r- > h- onset already correctly shown). Fixing 15 and 16 together makes the ◌ိူ → [ɤ] mapping uniform corpus-wide.

---

### 17. shn — hand — ◌ိုဝ် is the open-syllable spelling of /ɯ/, not a /iw/ diphthong
- **File:** words/hand.js line 784
- **Current:** `["မိုဝ်း", "miw"]`
- **Expected:** `["မိုဝ်း", "mɯ"]`
- **Why:** In Shan orthography the vowel /ɯ/ in an open syllable is written with the composite sign ◌ိုဝ် — the ဝ် is part of the vowel spelling, not a labial coda. `miw` misparses the sign as /i/ + coda /w/, inventing a diphthong absent from the entire cognate set: th มือ `mɯː˧` (hand.js:79), lo ມື `mɯː˥` (hand.js:147), khb ᦙᦹ `mɯː` (hand.js:984 — a cell that #59 Issue 18 corrected from `muː` to `mɯː` on precisely this PSWT *mɯːᴬ cognate argument). The same ◌ို-series sign is already read as a back unrounded vowel elsewhere in the deferred Shan notes (#52 on ၼိုင်ႈ 'one'), so [mɯ] also restores sign-to-value consistency. Tone omitted per the accepted column-wide hold.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

All 17 findings verified against the live data files; every "Current" value matched byte-for-byte. Each item is a clear local error or internal inconsistency (consonant-class / grapheme misidentification, several reverting round-1 fixes that rested on a factual class error), supported by corpus-internal sibling cells. Tone digits, onset policies (`nd-`→`d`), and the deferred Shan tone pass were left untouched per the accepted holds. All applied.

- **109-1 — th father (father.js:79)**: APPLIED (by orchestrator this round). `pʰɔː˨˩`→`pʰɔː˥˩`. พ is low-class; low+mai ek (live) = falling. Matches mother แม่ `mɛː˥˩` (same tone-box) and the three regional copies still `pʰɔː˥˩`. Reverts the #46 fix whose high-class claim was wrong.
- **109-2 — lo father (father.js:147)**: APPLIED. `pʰɔː˩˧`→`pʰɔː˨˩`. ພ is low-class; corpus scheme low+mai ek→˨˩. Matches mother ແມ່ `mɛː˨˩` (identical cell).
- **109-3 — lo fire (fire.js:147)**: APPLIED. `faj˩˧`→`faj˥`. ຟ low-class, live unmarked = A-low = ˥ (cat `mɛːw˥`, hand `mɯː˥`, house `hɯːan˥`).
- **109-4 — lo sun (sun.js:147)**: APPLIED. `ven˩˧`→`ven˥` (2nd syllable only; ຕາ untouched). ວ low-class live = ˥.
- **109-5 — lo moon (moon.js:147)**: APPLIED. `duaŋ˧ dɯːan˨˩`→`duaŋ˩˧ dɯːan˩˧`. ດ mid-class, both live unmarked = ˩˧ (kin/diː/taː etc.).
- **109-6 — za eat (eat.js:195)**: APPLIED. `kʷɤn˥`→`kɯn˥`. Sawcuengh ⟨w⟩ = /ɯ/, not labialization (cf. `fɯŋ˧˥`, `mɯŋ˧˥`).
- **109-7 — za thanks (thanks.js:195)**: APPLIED. `tuk˧…`→`tɯk˧…` (first syllable only). dwg ⟨w⟩ = /ɯ/, consistent with mwngz in same string.
- **109-8 — za water (water.js:197)**: APPLIED. `ɣɛm˦`→`ɣam˦`. Closed-syllable ⟨ae⟩ = short /a/, not /ɛ/. Reverts the #46 fix.
- **109-9 — za drink (drink.js:195)**: APPLIED. `kʷɤn˥ɣɛm˦`→`kɯn˥ɣam˦`. Combines 109-6 + 109-8.
- **109-10 — za sun (sun.js:197)**: APPLIED. `taːŋ˧˥ŋɯn˧˥`→`taŋ˧˥ŋon˧˥`. ⟨ae⟩=short /a/; ⟨oe⟩=/o/.
- **109-11 — za moon (moon.js:197)**: APPLIED. `daːn˥`→`dan˥`. ⟨ae⟩=short /a/; onset kept per `nd-`→`d` policy.
- **109-12 — shn tree (tree.js:784)**: APPLIED. `tum maj`→`tun maj`. ၼ် = coda /n/.
- **109-13 — shn father (father.js:784)**: APPLIED. `pə`→`pɔ`. ◌ေႃ = /ɔ/.
- **109-14 — shn mother (mother.js:790)**: APPLIED. `me`→`mɛ`. ◌ႄ = /ɛ/ (cf. cat ◌ႅ `mɛw`).
- **109-15 — shn moon (moon.js:790)**: APPLIED. `lyn`→`lɤn`. ◌ိူ = /ɤ/ (supplies the form #46 held for).
- **109-16 — shn house (house.js:791)**: APPLIED. `hen`→`hɤn`. Same ◌ိူ = /ɤ/.
- **109-17 — shn hand (hand.js:784)**: APPLIED. `miw`→`mɯ`. ◌ိုဝ် = open-syllable /ɯ/, not /iw/.

Open/won't-fix: none.

## Reviewer round-2 response (再評価 round-2)

I re-verified all 17 applied fixes against the LIVE `words/*.js` files (grep, this session). Every "Current" value now matches the "Expected" target byte-for-byte, and the cited sibling/cognate cells were spot-checked for consistency and regressions. Verdicts:

- **109-1 — th father (father.js:79)** ✓ ACCEPT. Live `["พ่อ", "pʰɔː˥˩"]`. พ low-class + mai ek (live) = falling ˥˩; matches mother แม่ `mɛː˥˩` (mother.js:79, identical tone-box) and the three regional copies still `pʰɔː˥˩` (father.js:192–194). #46's high-class claim was wrong; revert is correct.
- **109-2 — lo father (father.js:147)** ✓ ACCEPT. Live `pʰɔː˨˩`. ພ low-class + mai ek → ˨˩ per the corpus' own scheme; matches mother ແມ່ `mɛː˨˩` (mother.js:147, identical cell).
- **109-3 — lo fire (fire.js:147)** ✓ ACCEPT. Live `faj˥`. ຟ low-class, A-low live = ˥; matches cat `mɛːw˥`, hand `mɯː˥`, house `hɯːan˥` (all line 147, verified).
- **109-4 — lo sun (sun.js:147)** ✓ ACCEPT. Live `taː˩˧ ven˥`. 2nd syllable corrected, mid-class ຕາ untouched.
- **109-5 — lo moon (moon.js:147)** ✓ ACCEPT. Live `duaŋ˩˧ dɯːan˩˧`. Both ດ mid-class live = ˩˧; resolves the #52-held anomaly internally.
- **109-6 — za eat (eat.js:195)** ✓ ACCEPT. Live `kɯn˥`. ⟨w⟩ = /ɯ/; matches `fɯŋ˧˥`/`mɯŋ˧˥`.
- **109-7 — za thanks (thanks.js:195)** ✓ ACCEPT. Live `tɯk˧ɣeŋ˧˥mɯŋ˧˥`. dwg ⟨w⟩ = /ɯ/, now internally consistent with mwngz in the same string.
- **109-8 — za water (water.js:197)** ✓ ACCEPT. Live `ɣam˦`. Closed-syllable ⟨ae⟩ = short /a/; reverts the erroneous #46 /ɛ/ change.
- **109-9 — za drink (drink.js:195)** ✓ ACCEPT. Live `kɯn˥ɣam˦`. Compound now agrees with corrected eat.js + water.js simplexes.
- **109-10 — za sun (sun.js:197)** ✓ ACCEPT. Live `taŋ˧˥ŋon˧˥`. ⟨ae⟩ = short /a/, ⟨oe⟩ = /o/.
- **109-11 — za moon (moon.js:197)** ✓ ACCEPT. Live `dan˥`. ⟨ae⟩ = short /a/; nd-→d onset left per accepted policy.
- **109-12 — shn tree (tree.js:784)** ✓ ACCEPT. Live `tun maj`. ၼ် = coda /n/.
- **109-13 — shn father (father.js:784)** ✓ ACCEPT. Live `pɔ`. ◌ေႃ = /ɔ/.
- **109-14 — shn mother (mother.js:790)** ✓ ACCEPT. Live `mɛ`. ◌ႄ = /ɛ/; consistent with cat ◌ႅ `mɛw` (cat.js:784, verified).
- **109-15 — shn moon (moon.js:790)** ✓ ACCEPT. Live `lɤn`. ◌ိူ = /ɤ/.
- **109-16 — shn house (house.js:791)** ✓ ACCEPT. Live `hɤn`. Same ◌ိူ = /ɤ/; uniform with 109-15.
- **109-17 — shn hand (hand.js:784)** ✓ ACCEPT. Live `mɯ`. ◌ိုဝ် = open-syllable /ɯ/.

New issues raised: none. During verification I checked all cited sibling cells (Lao A-low ˥ trio, Zhuang ⟨w⟩ pair, Shan ◌ႅ cat) and found no collateral errors or regressions.

### Scorecard
- ✓ Accepted: 17/17
- △ Partial: 0
- ✗ Rejected: 0
- New issues: 0

All 17 items were clear local errors or internal inconsistencies (consonant-class / grapheme misidentifications, several reverting round-1 fixes that rested on a factual class error), all now fixed and confirmed in live data. Tone digits, onset policies, and the deferred Shan tone pass were correctly left untouched per accepted holds. Nothing remains for the dev team.

**File status: CLOSED** — nothing left to address.
