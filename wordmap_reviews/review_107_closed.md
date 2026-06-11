# Wordmap review #107 — Tibeto-Burman round-2 auditor (Tibetic, Burmese, Lolo-Burmese, NE India)

## Reviewer self-introduction (ペルソナ自己紹介)

I am a Tibeto-Burmanist returning for the round-2 audit of the codes covered in round-1 reviews #41 (Tibetic), #42 (Burmese/Lolo-Burmese) and #43 (NE India): `bo`, `dz`, `my`, `ii`, `lhu`, `lis`, `nxq`, `kac`, `mni`, `lus`, `new`, plus the Bodo-Garo and Tani neighbours. My references are Tournadre & Sangda Dorje (2003) *Manual of Standard Tibetan* for Lhasa register tone and the realization of silent prefixes and subscripts; Wheatley (1987) "Burmese" (in Comrie, *The World's Major Languages*) and Wiktionary's Okell-based Burmese IPA for creaky/checked-tone notation; Matisoff (2003) *Handbook of Proto-Tibeto-Burman* and his Lahu work for Lolo-Burmese cognate control; Gerner (2013) *A Grammar of Nuosu* (as tabulated on the Wikipedia Nuosu page) plus Wiktionary Nuosu lemmas and BabelStone's Liangshan Yi materials for the Yi syllabary (verified character-by-character with Python `unicodedata`); and the project docs `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md`. I have re-read the closed adjudications of #13, #41, #42, #43 and do not re-litigate any held/won't-fix item (the `˧˧` Yi tone convention, the corpus-wide no-tone policy for `lus`/`cnh`/`dz`, the Lisu Fraser-script scope call, the Naxi `ee`/`av` romanization, etc.). What I report below is a different and previously unexamined failure class: **lexical identity**. Round-1 #42 fixed the `ii` IPA column to agree with the script column, but nobody ever checked whether the script characters are the right Nuosu *words* — and in eleven of the twenty concepts they are not (the dataset currently shows 'ten' for 'one', 'gold' for 'water', 'chicken' for 'cat', 'I' for 'love', 'blood' for 'tree', 'horse' for 'good'). Every claim below was verified against the live `words/*.js` on 2026-06-11 and against an external source.

---

## Issues found

### 1. `ii` — one — the character shown is ꊰ *ci* 'TEN', not 'one'
- **File:** words/one.js line 189
- **Current:** `["ꊰ", "tsɿ˧˧"]`
- **Expected:** `["ꋍ", "tsʰɿ˨˩"]` (Nuosu Pinyin *cyp*; render tone per the pending Issue-13 convention if preferred)
- **Why:** ꊰ (U+A2B0 YI SYLLABLE CI) is the Nuosu numeral **ten**; the numeral **one** is ꋍ (U+A2CD YI SYLLABLE CYP), *cyp*. Both Wiktionary's `one` translation table ("Nuosu: ꋍ (cyp)") and languagesandnumbers.com's Northern Yi list (1 = *cyp*, 10 = *ci*, 30 = *suo ci* ꌕꊰ) confirm this. Note also that review #42 round-1 removed the aspiration on the ground that "YGPY `c` represents an unaspirated affricate" — that premise is wrong: in Nuosu Pinyin `z` = [ts] and `c` = [tsʰ] (Gerner 2013 chart on the Wikipedia Nuosu page), so even for the current (wrong) character ꊰ *ci* the correct IPA would be `tsʰɿ˧`. The fix must change both fields: ꋍ *cyp* = [tsʰɿ˨˩] (`-p` = low-falling ˨˩).

---

### 2. `ii` — water — the character shown is ꏂ *shy* 'GOLD/YELLOW', not 'water'
- **File:** words/water.js line 189
- **Current:** `["ꏂ", "ʐɿ˧˧"]`
- **Expected:** `["ꒉ", "ʑɿ˧˧"]` (Nuosu Pinyin *yy*)
- **Why:** ꏂ is U+A3C2 YI SYLLABLE SHY; Wiktionary's Nuosu entry for ꏂ glosses it 'gold; yellow' /ʂz̩˧/. The Nuosu noun 'water' is ꒉ (U+A489 YI SYLLABLE YY), Wiktionary /ʑz̩˧/ 'water'. Review #13 issue 22 discussed this entry but mis-identified the character as "*zzyx* water" and adjudicated only the tone; the character identity was never checked. The current IPA `ʐɿ` (voiced retroflex) is also wrong for *yy* (`y`-initial = palatal [ʑ]); the dataset's apical-vowel symbol `ɿ` can be retained.

---

### 3. `ii` — moon — ꃅꎖ is not the Nuosu word for 'moon'; the word is ꆪ *hlep*
- **File:** words/moon.js line 189
- **Current:** `["ꃅꎖ", "mu˧˧ɳa˧˧"]`
- **Expected:** `["ꆪ", "ɬɯ˨˩"]` (Nuosu Pinyin *hlep*)
- **Why:** Wiktionary's `moon` translation table gives Nuosu "ꆪ (hlep)" (U+A1AA YI SYLLABLE HLEP): `hl` = [ɬ], `e` = [ɯ], `-p` = low-falling. This is the regular reflex of PTB *s-la 'moon' (Matisoff 2003) — compare the dataset's own cognates `my` `la̰`, `bo` `tawa` (ཟླ་བ), `lus` `tʰla`. The current ꃅꎖ *mu nra* (MU + NRA) matches no attested Nuosu 'moon'; #42 round-1 only repaired the IPA to echo the (wrong) script.

---

### 4. `ii` — sun — ꉢꁡ ('I' + *bbap*) is not 'sun'; the word is ꉘꁮ *hxo bbu*
- **File:** words/sun.js line 189
- **Current:** `["ꉢꁡ", "ŋa˧˧ba˧˧"]`
- **Expected:** `["ꉘꁮ", "ho˧˧bu˧˧"]` (Nuosu Pinyin *hxo bbu*)
- **Why:** Wiktionary's `sun` translation table gives Nuosu "ꉘꁮ (hxo bbu)": ꉘ U+A258 HXO (`hx` = [h]) + ꁮ U+A06E BBU (`bb` = [b]). The current first character ꉢ (U+A262 NGA) is the first-person pronoun 'I' (Wiktionary ꉢ *nga* /ŋa˧/ "I, me"), and ꁡ (BBAP) completes no attested 'sun' compound. The #42 round-2 segmental fix (`ŋa˧˧ba˧˧`) faithfully transcribes a wrong string.

---

### 5. `ii` — eye — ꉜ *hxep* is not 'eye'; the word is ꑓ *nyuo*
- **File:** words/eye.js line 189
- **Current:** `["ꉜ", "xɛ˧˧"]`
- **Expected:** `["ꑓ", "ɲɔ˧˧"]` (Nuosu Pinyin *nyuo*)
- **Why:** Wiktionary's `eye` translation table gives Nuosu "ꑓ (nyuo)" (U+A453 YI SYLLABLE NYUO): `ny` = [ɲ], `uo` = [ɔ]. The current ꉜ (HXEP) corresponds to no attested 'eye'. History: the pre-#42 IPA here was `ȵi˧˧` — i.e. the IPA column originally pointed at the real ɲ-initial word, and the round-2 "fix" (`xɛ˧˧`) moved the entry *further* from the actual lexeme by trusting the wrong character.

---

### 6. `ii` — dog — ꈸ *mguop* is not 'dog'; the word is ꈌ *ke* [kʰɯ] (the pre-#42 IPA was right)
- **File:** words/dog.js line 189
- **Current:** `["ꈸ", "ŋɡwo˧˧"]`
- **Expected:** `["ꈌ", "kʰɯ˧˧"]` (Nuosu Pinyin *ke*)
- **Why:** Wiktionary's Nuosu entry ꈌ (U+A20C YI SYLLABLE KE) glosses 'dog', cognate with Tibetan ཁྱི — the PTB *kwəy 'dog' set (Matisoff 2003). Nuosu Pinyin `k` = [kʰ], `e` = [ɯ], so *ke* = [kʰɯ˧] — which is **exactly the original IPA** `kʰɯ˧˧` that stood here before #42 round-2 rewrote it to match the wrong character ꈸ (MGUOP). Sibling cognates in the live data confirm: `lis` `kwɛ`, `nxq` `kʰɯ˧`. Restore the IPA and correct the character.

---

### 7. `ii` — eat — ꋊ *cyt* is not 'eat'; the verb is ꋠ *zze* [dzɯ]
- **File:** words/eat.js line 189
- **Current:** `["ꋊ", "tsɿ˧˧"]`
- **Expected:** `["ꋠ", "dzɯ˧˧"]` (Nuosu Pinyin *zze*)
- **Why:** Wiktionary's Nuosu entry ꋠ (U+A2E0 YI SYLLABLE ZZE) glosses 'to eat', from PST *dzaʔ; BabelStone's Liangshan Yi lessons likewise give "ꋠ zze : to eat". Nuosu Pinyin `zz` = [dz], `e` = [ɯ]. The dataset's own cognate row supports the voiced affricate: `bo` ཟ *za*, `lis` `tsa` (< *dza*), `lhu` `tsâ`, `nxq` `d͡zo˧` — all PTB *dza 'eat' (Matisoff 2003). The pre-#42 IPA `dza˧˧` was nearly right; the round-2 rewrite to `tsɿ˧˧` (matching the wrong character ꋊ CYT) was a regression in lexical terms.

---

### 8. `ii` — love — ꉢ is the pronoun 'I'; the verb 'to love' is ꉂ *mgu*
- **File:** words/love.js line 189
- **Current:** `["ꉢ", "ŋa˧˧"]`
- **Expected:** `["ꉂ", "ŋɡu˧˧"]` (Nuosu Pinyin *mgu*)
- **Why:** Wiktionary's Nuosu entry ꉢ (U+A262 NGA) is the first-person pronoun "I, me" /ŋa˧/ (PST *ŋa — the same root as Burmese ငါ). The verb 'to love; to like' is ꉂ (U+A242 YI SYLLABLE MGU), *mgu*, with the prenasalized initial `mg` = [ŋɡ]. This is the same maximal-distance gloss-error class as the `bft` love ཤི "to die" fixed in #41 issue 1.

---

### 9. `ii` — cat — ꃬ *va* means 'CHICKEN'; 'cat' is ꀉꑐ *ax nyie*
- **File:** words/cat.js line 189
- **Current:** `["ꃬ", "vi˧˧"]`
- **Expected:** `["ꀉꑐ", "a˧˦ɲɛ˧˧"]` (Nuosu Pinyin *ax nyie*; `-x` = mid-rising ˧˦)
- **Why:** Wiktionary's Nuosu entry ꃬ (U+A0EC YI SYLLABLE VA) glosses 'chicken'. Wiktionary's `cat` translation table gives Nuosu "ꀉꑐ (ax nyie)" (U+A009 AX + U+A450 NYIE). The current IPA `vi˧˧` does not even match the wrong character (*va* = [va]). A barnyard-level lexical error: the cat map currently displays 'chicken' for 2M Nuosu speakers.

---

### 10. `ii` — hand — ꇐ *lu* is not 'hand'; the word is ꇇ *lot*
- **File:** words/hand.js line 189
- **Current:** `["ꇐ", "lu˧˧"]`
- **Expected:** `["ꇇ", "lo˥"]` (Nuosu Pinyin *lot*; `-t` = high ˥; render per the Issue-13 convention if preferred)
- **Why:** Wiktionary's `hand` translation table gives Nuosu "ꇇ (lot)" — U+A1C7 YI SYLLABLE LOT, [lo˥], the regular checked-tone reflex of PTB *lak 'hand/arm' (Matisoff 2003; cf. the dataset's `bo` ལག་པ *lakpa*, `lis` `la`, `grt` `jak`). The current ꇐ (U+A1D0 LU) is a different syllable; #42 issue 9 corrected the IPA toward it without checking the lexeme.

---

### 11. `ii` — tree — ꌦ *sy* means 'BLOOD / to die', not 'tree'
- **File:** words/tree.js line 189
- **Current:** `["ꌦ", "sɿ˧˧"]`
- **Expected:** `["ꌩꁧ", "sɹ̩˧˧bo˧˧"]` (Nuosu Pinyin *syr bbo*) — flag for Nuosu-literate confirmation of the compound before applying
- **Why:** Wiktionary's Nuosu entry ꌦ (U+A326 YI SYLLABLE SY) glosses noun 'blood' (PST *swiʔ) and verb 'to die' (PST *sij). It is not 'tree'. The Nuosu 'tree' morpheme is *syr* (retroflexed-vowel syllable ꌩ U+A329 SYR), conventionally compounded with *bbo* ꁧ (U+A067 BBO) — see Bender et al., *The Nuosu Book of Origins* (Univ. of Washington Press) glossary: "*syr* 'tree'; *bbo* (graph ꁧ)". Because I cannot cite a dictionary-verbatim compound spelling, I recommend the same handling as the `lif` script items in #43: hold for a sourced verbatim target, but the present 'blood' character is positively wrong.

---

### 12. `ii` — good — ꃅ *mu* means 'horse / to do', not 'good'; BabelStone gives ꉾ *he*
- **File:** words/good.js line 189
- **Current:** `["ꃅ", "mu˧˧"]`
- **Expected:** `["ꉾ", "xɯ˧˧"]` (Nuosu Pinyin *he*; BabelStone "ꉾ he : good")
- **Why:** Wiktionary's Nuosu entry ꃅ (U+A0C5 YI SYLLABLE MU) glosses noun 'horse' and verb 'to do, to make' — not the adjective 'good'. BabelStone's *600 Phrases in the Liangshan Yi Dialect* (Lesson 5) lists "ꉾ **he** : good" (Nuosu Pinyin `h` = [x], `e` = [ɯ], hence [xɯ˧]). Same wrong-lexeme class as issues 1–11; the IPA `mu˧˧` is faithfully transcribing the wrong word.

---

### 13. `ii` — fire — bare ꃆ *mup* is only half the word; Wiktionary gives ꃆꄔ *mup dut*
- **File:** words/fire.js line 189
- **Current:** `["ꃆ", "mu˧˧"]`
- **Expected:** `["ꃆꄔ", "mu˨˩tu˥"]` (Nuosu Pinyin *mup dut*; ꄔ = U+A114 DUT, `d` = [t])
- **Why:** Wiktionary's `fire` translation table gives Nuosu "ꃆꄔ (mup dut)". The single character ꃆ (MUP) was examined in #42 issue 6 only for its checked tone (`-p` = ˨˩, not ˧˧) and held pending the Issue-13 convention; the lexical incompleteness was never raised. Supplying the sourced two-syllable citation form resolves both halves at once (the first syllable carries ˨˩ from `-p`, the second ˥ from `-t`).

---

### 14. `ii` — drink — script ꄸ is DDI [di], IPA says [tu]: unflagged script↔IPA mismatch; lexeme also unverified
- **File:** words/drink.js line 189
- **Current:** `["ꄸ", "tu˧˧"]`
- **Expected:** mismatch must be resolved against a sourced Nuosu 'drink' (likely *ndo*-type); do **not** mechanically rewrite the IPA to `di˧˧`
- **Why:** ꄸ is U+A138 YI SYLLABLE DDI — Nuosu Pinyin `dd` = [d], `i` = [i] — which cannot yield the IPA `tu`. This is exactly the script↔IPA mismatch class that #42 fixed in ten other entries, but `drink` was absent from that review's list and remains broken. Given issues 1–12 above show the *script* column is the unreliable one in this language, the resolution should verify the lexeme externally first (note suspicious resemblance of `tu` to *dut*, the second syllable of 'fire', issue 13) rather than repeat the pattern of transcribing the wrong character.

---

### 15. `my` — father — wrong tone: ဖေ is low tone, IPA marks it high
- **File:** words/father.js line 145
- **Current:** `["အဖေ", "ʔəpʰé"]`
- **Expected:** `["အဖေ", "ʔəpʰè"]`
- **Why:** Burmese ေ with no tone mark (no း, no ့) is the low tone. Wiktionary gives အဖေ as /ʔəpʰè/. The dataset's own sibling row proves the inconsistency: `mother` အမေ — orthographically the identical tone class — is correctly `ʔəmè` (words/mother.js line 145), while `father` alone carries the acute (high-tone) mark. One-character IPA fix (é → è), per Wheatley (1987) on the three-way tone contrast.

---

### 16. `my` — love — checked-syllable vowel should be lax ɪ: ချစ် = [tɕʰɪʔ]
- **File:** words/love.js line 145
- **Current:** `["အချစ်", "ʔətɕʰiʔ"]`
- **Expected:** `["အချစ်", "ʔətɕʰɪʔ"]`
- **Why:** The rhyme -စ် (glottalized -c coda) surfaces with the lax vowel [ɪ] before ʔ (Wheatley 1987; Wiktionary အချစ် /ʔət͡ɕʰɪʔ/). The dataset already encodes this rule in `one` (words/one.js line 145): တစ် = `tɪʔ`. `love` (and `tree`, issue 17) are the only -စ် syllables left with tense `i`, an internal inconsistency in the same language column.

---

### 17. `my` — tree — same -စ် rhyme: သစ် = [θɪʔ], not [θiʔ]
- **File:** words/tree.js line 145
- **Current:** `["သစ်ပင်", "θiʔpìɴ"]`
- **Expected:** `["သစ်ပင်", "θɪʔpìɴ"]` (minimal fix; Wiktionary's full form is /θɪʔpɪ̀ɴ/, but `ìɴ` for -င် matches the corpus convention used in `hello` `mìɴɡəlà`)
- **Why:** Identical rule to issue 16: Wiktionary သစ်ပင် /θɪʔpɪ̀ɴ/; the dataset's own `one` `tɪʔ` (words/one.js line 145) sets the precedent for [ɪ] in checked syllables from -စ်. Only the first syllable need change to restore column-internal consistency.

---

### 18. `bo` — dog — ya-btags palatalization missing: ཁྱི is [cʰi˥], not plain [kʰi˥]
- **File:** words/dog.js line 184
- **Current:** `["ཁྱི", "kʰi˥"]`
- **Expected:** `["ཁྱི", "cʰi˥"]` (or at minimum `kʰji˥`)
- **Why:** In Lhasa Tibetan the velar series with subscript ya (ཀྱ ཁྱ གྱ) is realized as palatal stops [c cʰ ɟ] (Tournadre & Sangda Dorje 2003, phonology ch.; they transcribe ཁྱི 'dog' with the palatal aspirate). The current IPA deletes the subscript entirely, merging ཁྱི with a hypothetical ཁི — losing a phonemic contrast. The dataset's own Southern-Bodish siblings preserve the palatalization product (`dz` dog `tɕi`, line 707 of the same file), making bare `kʰ` for `bo` the lone unpalatalized outlier. The high register ˥ is correct and should be kept. (This is distinct from the held tie-bar/retroflex notation question of #41 issue 11: here a segment is absent, not differently notated.)

---

### 19. `dz` — hello — script is a phonetic respelling; ཟངས་པོ spells 'copper', the real orthography is སྐུ་གཟུགས་བཟང་པོ་(ལགས)
- **File:** words/hello.js line 700
- **Current:** `["ཀུ་ཟུ་ཟངས་པོ་ལ", "kuzu zaŋpo la"]`
- **Expected:** `["སྐུ་གཟུགས་བཟང་པོ་ལ", "kuzu zaŋpo la"]` (IPA unchanged; Omniglot's formal variant adds ལགས)
- **Why:** The greeting *kuzu zangpo la* is orthographically སྐུ་གཟུགས་བཟང་པོ་ལགས (*sku gzugs bzang po lags*): honorific 'body' (སྐུ་གཟུགས) + 'good' (བཟང་པོ) + polite ལ(གས) — so given by Omniglot's Dzongkha phrase list and standard Dzongkha primers (van Driem 1998). The live string fails on both words: ཀུ་ཟུ drops the silent prefixes ས- and ག- (which Tibetan-script orthography must keep precisely because they are silent), and ཟངས་པོ with ཟངས *zangs* spells 'copper', not *bzang* 'good'. This is the same malformed-compression class as the `dz` thanks བཀྲིན་ཆེ → བཀའ་དྲིན་ཆེ fix applied and verified in #41 issue 2. The IPA is fine as is.

---

### 20. `kac` — water — IPA field contains the orthographic digraph `hk`: not IPA at all
- **File:** words/water.js line 1068
- **Current:** `["hka", "hkaː˧"]`
- **Expected:** `["hka", "kʰaː˧"]`
- **Why:** In Jinghpaw romanization `hk` marks the aspirated velar [kʰ] (Hanson's orthography; Kurabe 2016 on Jinghpaw phonology). The IPA column has copied the digraph verbatim, producing an impossible [h]+[k] cluster. The dataset's own `kac` row already converts the parallel digraph correctly: `tree` `hpun` → `pʰun˧` (words/tree.js line 1062). One-token mechanical fix.

---

### 21. `kac` — sun — orthographic `j` rendered [ts], contradicting every other `kac` entry where j = [dʒ]
- **File:** words/sun.js line 1080
- **Current:** `["jan", "tsan˧"]`
- **Expected:** `["jan", "dʒan˧"]`
- **Why:** Jinghpaw `j` is the voiced postalveolar affricate [dʒ]. The `kac` column itself proves it three times over: `hello` `kaja i` → `kadʒa˧i˧` (hello.js:1055), `good` `kaja` → `kadʒa˧` (good.js:1062), `thanks` `chyeju kaba` → `tʃedʒu˧kaba˧` (thanks.js:1062). `sun` is the lone entry mapping `j` to [ts], which is neither the orthographic value nor a plausible Jinghpaw development of *tsyan* 'sun' (Matisoff 2003 gives Jingpho *jan* with the voiced affricate).

---

### 22. `kac` — cat — IPA drops the diphthong nucleus: `nyaung` is [ɲauŋ], not [ɲaŋ]
- **File:** words/cat.js line 1062
- **Current:** `["nyaung", "ɲaŋ˧"]`
- **Expected:** `["nyaung", "ɲauŋ˧"]`
- **Why:** Jinghpaw `-aung` is the diphthongal rhyme [auŋ]; the IPA omits the [u] glide present in the romanization. Sibling evidence in the same column: `love` `tsaw ra` → `tsau˧ra˧` (love.js:1069) correctly converts orthographic `aw` to [au]. The IPA as it stands transcribes a different (nonexistent) form *nyang*.

---

### 23. `lus` — cat — Mizo digraph `aw` = [ɔ], not [aw]: `zawhte` is [zɔʔte]
- **File:** words/cat.js line 706
- **Current:** `["zawhte", "zawʔte"]`
- **Expected:** `["zawhte", "zɔʔte"]`
- **Why:** In the Mizo alphabet the digraph `aw` represents the back rounded vowel [ɔ]/[ɔː] (Wikipedia "Mizo language" phonology table; Chhangte 1993). The IPA here has copied the orthographic letters `a`+`w` as a vowel-glide sequence, which is not a Mizo rhyme. The -h → ʔ conversion already done in this entry shows the column intends real IPA, so the vowel must be converted too. (This is a segmental-quality error, separate from the corpus-wide no-tone policy held in #43 issues 1/2.)

---

### 24. `lus` — thanks — IPA column is a verbatim copy of the orthography; `lawm` is [lɔːm]
- **File:** words/thanks.js line 706
- **Current:** `["ka lawm e", "ka lawm e"]`
- **Expected:** `["ka lawm e", "ka lɔːm e"]`
- **Why:** Same `aw` = [ɔː] rule as issue 23 (Wikipedia Mizo phonology; Chhangte 1993): *lawm* 'be glad/thank' is [lɔːm]. The IPA field currently contains the raw orthographic string including the letter `w`, i.e. no grapheme-to-phone conversion was performed at all on this entry — uniquely within the `lus` column, whose other rows (`tʰiŋkuŋ`, `tʃibai`, `zawʔte`) are genuine transcriptions.

---

### 25. `mni` — heart — ꯊꯋꯥꯏ *thawai* means 'soul/life'; the heart is ꯊꯃꯣꯏ *thamoi*
- **File:** words/heart.js line 696
- **Current:** `["ꯊꯋꯥꯏ", "tʰawai"]`
- **Expected:** `["ꯊꯃꯣꯏ", "tʰamoi"]`
- **Why:** Meitei distinguishes *thamoi* 'heart' from *thawai* 'soul, life-spirit'. Glosbe's Manipuri–English dictionary glosses *thamoi* as 'heart', and Meitei literary usage consistently opposes the two (e.g. the Heisnam Sabitri materials: "I only open up my heart (*thamoi*)"). Since every other concrete body-part term in the `mni` column is the plain anatomical word (`mit` eye, `khut` hand), the heart slot should be the anatomical/core term *thamoi*, not the spiritual *thawai*. Chelliah (1997) lists both lexemes separately.

---

### 26. `new` — water — ला spells 'MEAT'; Newar 'water' is लः with visarga
- **File:** words/water.js line 698
- **Current:** `["ला", "la"]`
- **Expected:** `["लः", "lʌ"]`
- **Why:** In Nepal Bhasa, *laḥ* लः is 'water' and *lā* ला is 'meat' — a textbook minimal pair (nepaliaustralian *Learn Nepal Bhasa* vocabulary; Omniglot Newar materials list *lah* 'water'). The dataset's own `new` column shows the visarga convention is available and used: `hand` ल्हाः `lʱaː` (hand.js:698), `good` बःलाः `bʌlaː` (good.js:698), `heart` नुगः `nuɡʌ` (heart.js:698) — and by that same column-internal convention syllable-final ः maps to the [ʌ]-type vowel, hence IPA `lʌ`. As written, the water map currently serves 'meat' to ~860K Newar speakers.

---

### 27. `lhu` — dog — IPA contains unconverted orthography `pʰeh`, and the ˇ tone letter is mapped inconsistently
- **File:** words/dog.js line 781
- **Current:** `["phuˇ-pheh", "pʰùpʰeh"]`
- **Expected:** `["phuˇ-pheh", "pʰùpʰɛʔ"]` as the minimal mechanical repair (final tone of the second syllable to be confirmed against Matisoff's *Dictionary of Lahu*)
- **Why:** Two defects. (a) The second syllable `pʰeh` is raw romanization sitting inside the IPA field: the dataset's own `lhu` `eye` row converts the identical orthographic rhyme — `mɛhˇ` → `mɛ̂ʔ` (eye.js:781), i.e. `e`→[ɛ] and `-h`→[ʔ] — so `pheh` must surface as [pʰɛʔ]-type, never as literal `eh`. (b) Within the `lhu` column the orthographic tone letter `ˇ` maps to high-falling `â` in `good` `daˇ`→`dâʔ` (good.js:781), `house` `yaˇ`→`jâʔ` (house.js:788), `hello`/`thanks` `-haˇ/-shaˇ`→`hâʔ/ʃâʔ`, but to low `à` in `drink` `dawˇ`→`dàʔ` (drink.js:781) and to `ù` here — the same diacritic cannot denote both tones (Matisoff 1973 on the Lahu tone inventory). This entry is where both problems intersect and is mechanically fixable; the column-wide ˇ mapping should be settled in the same pass.

---

### 28. `lhu` — sun — IPA contains the orthographic cluster `mv`, which is not a Lahu onset
- **File:** words/sun.js line 787
- **Current:** `["mvuhˇ-nyiˉ", "mvuʔ ɲí"]`
- **Expected:** `["mvuhˇ-nyiˉ", "mûʔɲí"]` (minimally: delete the orthographic `v`, i.e. `muʔ ɲí`)
- **Why:** Lahu has no [mv] onset cluster (consonant inventory in Matisoff 1973 *The Grammar of Lahu*); `mv-` is purely a device of the Lahu Roman orthography (as in *Mvuh* in scripture names), pronounced [m]+vowel. The IPA field has copied the orthographic `v` verbatim — the same residue class as issue 27(a) and as the `kac` `hk` in issue 20. Matisoff's form for 'sun' is *mûʔ-ni* ('sky' *mûʔ* + *ni*), supporting the high-falling checked first syllable already implied by the romanization's `-h` + `ˇ`. The stray space inside the IPA (against the hyphenated romanization) should go in the same edit.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

All current values verified verbatim against the live `words/*.js` on 2026-06-11. The `ii` (Nuosu) findings are a wrong-lexeme class; I spot-verified the reviewer's replacement targets against Wiktionary per-character entries (ꋍ *cyp* /tsʰz̩˨˩/ 'one', ꒉ *yy* /ʑz̩˧/ 'water', ꈌ *ke* /kʰɯ˧/ 'dog', ꋠ *zze* 'to eat') — all confirmed — so the reviewer's sourcing is reliable and I applied the well-cited wrong-lexeme corrections (surface + IPA together, as these are genuine data errors with sourced replacements).

- **107-1 ii one** ꊰ→ꋍ, `tsɿ˧˧`→`tsʰɿ˨˩`: applied (applied by orchestrator this round). Wiktionary ꋍ *cyp* /tsʰz̩˨˩/ 'one' confirmed; ꊰ *ci* is 'ten'.
- **107-2 ii water** ꏂ→ꒉ, `ʐɿ˧˧`→`ʑɿ˧˧`: applied (applied by orchestrator this round). Wiktionary ꒉ *yy* /ʑz̩˧/ 'water' confirmed; ꏂ *shy* is 'gold/yellow'.
- **107-3 ii moon** ꃅꎖ→ꆪ, `mu˧˧ɳa˧˧`→`ɬɯ˨˩`: applied (applied by orchestrator this round). Wiktionary moon table "ꆪ (hlep)".
- **107-4 ii sun** ꉢꁡ→ꉘꁮ, `ŋa˧˧ba˧˧`→`ho˧˧bu˧˧`: applied (applied by orchestrator this round). Wiktionary sun table "ꉘꁮ (hxo bbu)".
- **107-5 ii eye** ꉜ→ꑓ, `xɛ˧˧`→`ɲɔ˧˧`: applied (applied by orchestrator this round). Wiktionary eye table "ꑓ (nyuo)".
- **107-6 ii dog** ꈸ→ꈌ, `ŋɡwo˧˧`→`kʰɯ˧˧`: applied (applied by orchestrator this round). Wiktionary ꈌ *ke* /kʰɯ˧/ 'dog' confirmed; restores pre-#42 IPA.
- **107-7 ii eat** ꋊ→ꋠ, `tsɿ˧˧`→`dzɯ˧˧`: applied (applied by orchestrator this round). Wiktionary ꋠ *zze* 'to eat' confirmed.
- **107-8 ii love** ꉢ→ꉂ, `ŋa˧˧`→`ŋɡu˧˧`: applied (applied by orchestrator this round). ꉢ *nga* is pronoun 'I'; ꉂ *mgu* 'to love'.
- **107-9 ii cat** ꃬ→ꀉꑐ, `vi˧˧`→`a˧˦ɲɛ˧˧`: applied (applied by orchestrator this round). ꃬ *va* is 'chicken'; cat table "ꀉꑐ (ax nyie)".
- **107-10 ii hand** ꇐ→ꇇ, `lu˧˧`→`lo˥`: applied (applied by orchestrator this round). hand table "ꇇ (lot)" checked-tone reflex of PTB *lak.
- **107-11 ii tree**: HELD. The present character ꌦ *sy* is positively wrong (it is 'blood/to die'), but the reviewer's recommended replacement ꌩꁧ *syr bbo* is an unverified compound that the reviewer explicitly flagged "for Nuosu-literate confirmation before applying." I could not source the verbatim two-syllable compound spelling offline (Wiktionary 'tree' table did not surface a Nuosu row; ꁧ *bbo* is glossed 'tree/go/mountain'). Holding per the reviewer's own instruction; recommend reviewer supply a dictionary-verbatim compound or escalate to a Nuosu-literate human.
- **107-12 ii good** ꃅ→ꉾ, `mu˧˧`→`xɯ˧˧`: applied (applied by orchestrator this round). ꃅ *mu* is 'horse/to do'; BabelStone "ꉾ he : good".
- **107-13 ii fire** ꃆ→ꃆꄔ, `mu˧˧`→`mu˨˩tu˥`: applied (applied by orchestrator this round). Wiktionary fire table "ꃆꄔ (mup dut)"; supplies sourced two-syllable citation form and resolves the deferred checked-tone question.
- **107-14 ii drink**: HELD. Confirmed script↔IPA mismatch (ꄸ DDI [di] vs IPA `tu`), but the reviewer explicitly instructed NOT to mechanically rewrite the IPA to `di˧˧` because the lexeme itself is unverified (suspected to be a *ndo*-type word). I could not source a Nuosu 'drink' lexeme offline. Holding for a sourced 'drink' form; recommend reviewer/human linguist supply it.
- **107-15 my father** `ʔəpʰé`→`ʔəpʰè`: applied (applied by orchestrator this round). Toneless ေ = low tone; matches sibling `mother` `ʔəmè`. Wiktionary /ʔəpʰè/.
- **107-16 my love** `ʔətɕʰiʔ`→`ʔətɕʰɪʔ`: applied (applied by orchestrator this round). -စ် checked rhyme = lax [ɪ]; matches `one` `tɪʔ`.
- **107-17 my tree** `θiʔpìɴ`→`θɪʔpìɴ`: applied (applied by orchestrator this round). Same -စ် rule; first syllable only.
- **107-18 bo dog** `kʰi˥`→`cʰi˥`: applied (applied by orchestrator this round). ya-btags ཁྱ = palatal [cʰ] in Lhasa (Tournadre & Sangda Dorje 2003); sibling `dz` `tɕi`.
- **107-19 dz hello** surface ཀུ་ཟུ་ཟངས་པོ་ལ→སྐུ་གཟུགས་བཟང་པོ་ལ (IPA unchanged): applied (applied by orchestrator this round). Restores silent prefixes ས-/ག- and corrects ཟངས 'copper'→བཟང 'good'; Omniglot/van Driem 1998.
- **107-20 kac water** `hkaː˧`→`kʰaː˧`: applied (applied by orchestrator this round). `hk`=[kʰ]; matches `tree` `hpun`→`pʰun˧`.
- **107-21 kac sun** `tsan˧`→`dʒan˧`: applied (applied by orchestrator this round). Jinghpaw `j`=[dʒ]; matches hello/good/thanks `kadʒa`/`tʃedʒu`.
- **107-22 kac cat** `ɲaŋ˧`→`ɲauŋ˧`: applied (applied by orchestrator this round). `-aung`=[auŋ]; matches `love` `aw`→[au].
- **107-23 lus cat** `zawʔte`→`zɔʔte`: applied (applied by orchestrator this round). Mizo digraph `aw`=[ɔ] (Chhangte 1993).
- **107-24 lus thanks** `ka lawm e`→`ka lɔːm e`: applied (applied by orchestrator this round). Same `aw`=[ɔː] rule; IPA field was a raw orthography copy.
- **107-25 mni heart** ꯊꯋꯥꯏ→ꯊꯃꯣꯏ, `tʰawai`→`tʰamoi`: applied (applied by orchestrator this round). *thawai* is 'soul/life'; *thamoi* is anatomical 'heart' (Glosbe; Chelliah 1997). Anatomical term matches column convention (`mit`, `khut`).
- **107-26 new water** ला→लः, `la`→`lʌ`: applied (applied by orchestrator this round). ला *lā* is 'meat'; लः *laḥ* is 'water'. Final ः→[ʌ] per column convention (`bʌlaː`, `nuɡʌ`).
- **107-27 lhu dog** `pʰùpʰeh`→`pʰùpʰɛʔ`: applied (applied by orchestrator this round). Minimal mechanical repair of unconverted `eh`→[ɛʔ], matching `eye` `mɛhˇ`→`mɛ̂ʔ`. (Note: the column-wide ˇ tone-mapping inconsistency the reviewer raised — high-falling `â` vs low `à`/`ù` — is a broader convention question left for the reviewer to settle in a dedicated pass; not changed here. The first syllable `pʰù` is unchanged.)
- **107-28 lhu sun** `mvuʔ ɲí`→`muʔ ɲí`: applied (applied by orchestrator this round). Deleted orthographic `v` (Lahu has no [mv] onset; Matisoff 1973). I applied the minimal variant the reviewer offered (`muʔ ɲí`, stray space retained between syllables to match the existing two-token form) rather than the fuller respelling `mûʔɲí`, since the tone-letter remapping is the same unsettled column-wide ˇ question noted in 27.

Open/held this file: 107-11 (tree, unsourceable compound), 107-14 (drink, unverified lexeme). 26 of 28 applied.

## Reviewer round-2 response (再評価 round-2)

I re-verified every value against the live `words/*.js` on 2026-06-11 (grep of each `ii:`/`my:`/`bo:`/`dz:`/`kac:`/`lus:`/`mni:`/`new:`/`lhu:` row at the cited lines). Per-item adjudication:

**Nuosu (`ii`) wrong-lexeme class — all applied fixes present in live data:**
- 107-1 one ✓ `["ꋍ", "tsʰɿ˨˩"]` — correct *cyp*, aspiration + low-falling tone restored.
- 107-2 water ✓ `["ꒉ", "ʑɿ˧˧"]` — *yy*, palatal initial corrected.
- 107-3 moon ✓ `["ꆪ", "ɬɯ˨˩"]` — *hlep*.
- 107-4 sun ✓ `["ꉘꁮ", "ho˧˧bu˧˧"]` — *hxo bbu*.
- 107-5 eye ✓ `["ꑓ", "ɲɔ˧˧"]` — *nyuo*.
- 107-6 dog ✓ `["ꈌ", "kʰɯ˧˧"]` — *ke*, pre-#42 IPA restored.
- 107-7 eat ✓ `["ꋠ", "dzɯ˧˧"]` — *zze*.
- 107-8 love ✓ `["ꉂ", "ŋɡu˧˧"]` — pronoun→verb fixed.
- 107-9 cat ✓ `["ꀉꑐ", "a˧˦ɲɛ˧˧"]` — chicken→cat fixed.
- 107-10 hand ✓ `["ꇇ", "lo˥"]` — *lot*.
- 107-12 good ✓ `["ꉾ", "xɯ˧˧"]` — horse→good fixed.
- 107-13 fire ✓ `["ꃆꄔ", "mu˨˩tu˥"]` — *mup dut*, two-syllable citation form + checked tones.

**Other columns — all applied fixes present:**
- 107-15 my father ✓ `ʔəpʰè` (low tone, matches `mother`).
- 107-16 my love ✓ `ʔətɕʰɪʔ` (lax checked vowel).
- 107-17 my tree ✓ `θɪʔpìɴ`.
- 107-18 bo dog ✓ `cʰi˥` (ya-btags palatalization).
- 107-19 dz hello ✓ `སྐུ་གཟུགས་བཟང་པོ་ལ` (silent prefixes + copper→good).
- 107-20 kac water ✓ `kʰaː˧`.
- 107-21 kac sun ✓ `dʒan˧`.
- 107-22 kac cat ✓ `ɲauŋ˧`.
- 107-23 lus cat ✓ `zɔʔte`.
- 107-24 lus thanks ✓ `ka lɔːm e`.
- 107-25 mni heart ✓ `["ꯊꯃꯣꯏ", "tʰamoi"]` (soul→heart).
- 107-26 new water ✓ `["लः", "lʌ"]` (meat→water).
- 107-27 lhu dog ✓ `pʰùpʰɛʔ` (minimal `eh`→[ɛʔ]). The broader column-wide `ˇ`-tone-mapping inconsistency I raised is a real convention question, but it is genuinely a cross-entry policy call, not a single-cell error; I accept deferring it to a dedicated `lhu`-tone pass and won't hold this file for it.
- 107-28 lhu sun ✓ `muʔ ɲí` (orthographic `v` deleted). The retained inter-syllable space and the unconverted first-syllable tone fall under the same deferred `lhu` convention pass; accepted as won't-fix-here.

**Held items (loop-termination adjudication):**
- 107-11 ii tree △→ACCEPT-as-documented-limitation. The current ꌦ *sy* is positively wrong (it is 'blood / to die'), but my own round-1 text explicitly flagged the replacement compound ꌩꁧ *syr bbo* as "for Nuosu-literate confirmation before applying." The worker made a genuine offline research effort (Wiktionary 'tree' table yielded no Nuosu row; ꁧ *bbo* is ambiguously glossed). I cannot supply a dictionary-verbatim compound spelling offline either. Per loop-termination, I will not keep re-demanding an unsourceable verbatim form. **Known limitation — needs human Nuosu linguist**: the ꌦ 'blood' character should be replaced with the sourced 'tree' lexeme (likely ꌩꁧ *syr bbo*) once a printed Nuosu dictionary entry is available.
- 107-14 ii drink △→ACCEPT-as-documented-limitation. Confirmed script↔IPA mismatch (ꄸ DDI = [di] vs IPA `tu`), and my own round-1 instruction was NOT to mechanically rewrite to `di˧˧` because the lexeme is unverified. The worker correctly did not guess. **Known limitation — needs human Nuosu linguist**: supply a sourced Nuosu 'drink' lexeme (suspected *ndo*-type) and align both fields; do not auto-derive from the present wrong script.

**New issues:** none. Spot-checks during verification surfaced no further clear errors.

### Scorecard
- Applied & verified in live data: 26 / 28.
- Held, accepted as documented offline-unsourceable limitations (needs human linguist): 2 / 28 (tree, drink).
- Rejected/regressed: 0. Missing-but-claimed: 0. New issues: 0.

All clear, sourceable errors are fixed and verified. The only two remaining items are precisely the loop-termination case: positively-wrong source data whose correct replacement is not obtainable offline, now genuinely researched and documented as a known limitation rather than left as an open actionable demand.

**File status: CLOSED** — nothing left to address. (26/28 fixed-and-verified; the 2 held Nuosu items — tree, drink — are accepted as documented known limitations requiring a human Nuosu linguist, not actionable offline.)
