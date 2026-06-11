# Wordmap review #108 — Austroasiatic round-2 auditor (Khmer, Vietnamese lects, Mon, Munda)

## Reviewer self-introduction (ペルソナ自己紹介)

I am a second-round Austroasiatic auditor covering Khmer (`km`), the Vietnamese lects of this corpus (`vi`, `vi_c`, `vi_s`, and the `vi_han`/`vi_nom` register rows — `vi_sgn`/`vi_hue` do not exist in the data, which I confirmed by grep before starting), Mon (`mnw`), Mường (`mtq`), Santali (`sat`), and Khasi (`kha`). I have studied the full adjudication history of round-1 reviews #44 (Khmer/Mon/Munda) and #45 (Vietnamese) and I respect every convention hold agreed there: no register diacritics for Khmer/Mon, the corpus-wide `æː` value for first-series ែ, the `ĕ` romanisation in `prĕəh`, flat cluster notation, no unreleased-stop diacritics in Vietnamese, nặng written as `˨˩`-family without glottal marking, native ngang = `˥` vs Hán-Việt level = `˧˧`, checked Hán-Việt = `˨˩`, ⟨x⟩ = `s`, the Central `˩˧` sắc model, the Mon `oa` diphthong digraph (`mwoa`, `tŋoa`), Santali glottalized-coda romanisation, and the deferred Khasi class-prefix policy — none of these are re-reported below. My findings are the sharp residue that survived wave 1–10: sibling rows missed by applied fixes, internal inconsistencies the corpus's own conventions expose, two Mon entries whose script was misread by three previous reviewers, and one wrong-language metadata block. Reference works used: Huffman (1970) *Cambodian System of Writing*; Headley (1977) *Cambodian-English Dictionary*; Kirby (2011) "Vietnamese (Hanoi Vietnamese)" *JIPA*; Phạm (2003) *Vietnamese Tone*; Nguyễn Tài Cẩn (1979) on Hán-Việt; Shorto (1962) *A Dictionary of Modern Spoken Mon*; Jenny (2001) *A Short Introduction to the Mon Language* and Jenny (2005) *The Verb System of Mon*; Ghosh (2008) *Santali* (LWM); Bodding's Santal dictionary; Singh (1906) *Khasi-English Dictionary*; plus the project docs `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md`.

---

## Issues found

### 1. vi / vi_c / vi_s — tree — ngang-tone *cây* carries the sắc contour `˧˥` in all three dialect rows
- **File:** words/tree.js line 76 (also lines 77, 78)
- **Current:** `["cây", "kəj˧˥"]` (line 76); `["cây", "kəːj˧˥"]` (line 77, vi_c); `["cây", "kəj˧˥"]` (line 78, vi_s)
- **Expected:** `["cây", "kəj˥"]`; `["cây", "kəːj˥"]`; `["cây", "kəj˥"]`
- **Why:** *Cây* has no tone diacritic — it is ngang (Tone 1), not sắc. The corpus's own adjudicated convention (review #45, accepted by both sides) is native ngang = `˥`: *tay* = `taj˥`/`taːj˥`/`taj˥` (hand.js:76–78), *ăn* = `an˥`/`aːn˥`/`aŋ˥` (eat.js:76–78), *yêu* = `iəw˥` (love.js:76), *thương* = `tʰɨəŋ˥` (love.js:77–78), *ơn* = `əːn˥` (thanks.js:76–78), *ba* = `ɓaː˥` (father.js:78). `˧˥` is the corpus's Northern/Southern sắc contour (*chó* `t͡ɕɔ˧˥`, *tốt* `tot˧˥`). All three tree rows mark a toneless-written word as sắc — and the vi_c row even violates the corpus's own Central sắc model, which is `˩˧` (dog.js:77 `t͡ɕɔː˩˧`, drink.js:77 `uəŋ˩˧`, heart.js:77 `ʈaːj˩˧`), so `kəːj˧˥` is doubly anomalous. The file's own toneless Nôm row `vi_nom: ["𣘃", "kəj"]` (tree.js:556) confirms the segmental shape; only the tone level is wrong. Kirby (2011) gives Hanoi ngang as a mid-high level tone, matching the corpus's `˥` choice.

---

### 2. vi_s — moon — `tɤŋ˥` for *trăng*: the round-1 fix (review #45, issues 16/18) was applied to the `vi` row only and missed this sibling row
- **File:** words/moon.js line 78
- **Current:** `["mặt trăng", "mak˨˩˨ tɤŋ˥"]`
- **Expected:** `["mặt trăng", "mak˨˩˨ taŋ˥"]`
- **Why:** Review #45 established (and the worker applied at moon.js:76) that `ɤ` is the value of ⟨ơ⟩, not ⟨ă⟩: `vi: ["mặt trăng", "mət˨˩ tɤŋ˥"]` → `taŋ˥`, corroborated by the same file's `vi_nom: ["𩈘𢁑", "mət taŋ"]` (moon.js:562). The Southern row at line 78 contains the identical `tɤŋ˥` error and was not touched. Corpus-internal proof for the Southern register specifically: vi_s ⟨ă⟩ = `a` in eat.js:78 (*ăn* `aŋ˥`), eye.js:78 (*mắt* `mak˧˥`), and in this very entry's first syllable (*mặt* `mak˨˩˨`). Same single-valued vowel fix, same rationale, sibling line.

---

### 3. vi_nom — heart — Nôm IPA `tɤj tim` cannot read *trái tim*; `tɤj` is *trời*'s transcription copied from the sun entry
- **File:** words/heart.js line 556
- **Current:** `["𢣐𢞂", "tɤj tim"]`
- **Expected:** `["𢣐𢞂", "t͡ɕaj tim"]`
- **Why:** The corpus convention for `vi_nom` IPA is the toneless form of the `vi` row's IPA — verified across all 19 other files (dog `t͡ɕɔ`, cat `mɛw`, mother `mɛ`, father `ɓo`, fire `lɨə`, water `nɨək`, tree `kəj`, hand `taj`, eye `mak`, eat `an`, one `mot`, hello `sin t͡ɕaːw`, thanks `kaːm əːn`, moon `mət taŋ`, sun `mət tɤj`, …). The heart `vi` row (heart.js:76) is `["trái tim", "t͡ɕaj˧˥ tim˥"]`, so the Nôm row must read `t͡ɕaj tim`. The string `tɤj` is the transcription of *trời* — it appears verbatim in sun.js:562 `vi_nom: ["𩈘𡗶", "mət tɤj"]` — and contains `ɤ` (⟨ơ⟩), which has no source in *trái*. This is the same class of copy-slip as the `ɓɔŋ` paste caught and fixed in review #44 (issue 8).

---

### 4. vi_han — father — 父 *phụ* (nặng) given the bare huyền contour `˨˩`, breaking the corpus's own Hán-Việt nặng convention `˨˩˨`
- **File:** words/father.js line 555
- **Current:** `["父", "fu˨˩"]`
- **Expected:** `["父", "fu˨˩˨"]`
- **Why:** 父 is Hán-Việt *phụ*, nặng tone (MC *bjuX*, 上聲 with voiced initial → nặng; Nguyễn Tài Cẩn 1979). The corpus transcribes open-syllable Hán-Việt nặng readings with the broken contour `˨˩˨`: 謝 *tạ* = `ta˨˩˨` (thanks.js:555) and 善 *thiện* = `tʰien˨˩˨` (good.js:555) — the latter explicitly defended as "nặng-family `˨˩˨`" in the review #45 round-1 adjudication. `fu˨˩` is the only open-syllable Hán-Việt nặng rendered as plain huyền `˨˩`, making *phụ* visually identical to a huyền reading (e.g. 萬 `vən˨˩`). Single-valued internal-consistency fix: `˨˩` → `˨˩˨`.

---

### 5. vi_han — mother — 母 *mẫu* is ngã, but the IPA carries the hỏi contour `˧˩˧`
- **File:** words/mother.js line 561
- **Current:** `["母", "məw˧˩˧"]`
- **Expected:** `["母", "məw˧˥"]`
- **Why:** 母 is Hán-Việt *mẫu* with the ngã tone (MC *məwX*, 上聲 with voiced/nasal initial → ngã, exactly parallel to issue 4's rule; Nguyễn Tài Cẩn 1979). The corpus uses `˧˩˧` as its Northern hỏi contour, and every other `˧˩˧` Hán-Việt reading is genuinely hỏi: 水 *thủy* (water.js:555), 火 *hỏa* (fire.js:561), 飲 *ẩm* (drink.js:555), 手 *thủ* (hand.js:555), 犬 *khuyển* (dog.js:555). In Northern Vietnamese — the dialect base of the `vi`/`vi_han` rows — hỏi and ngã are distinct tones; ngã is a high rising tone with medial glottalization, [˧ˀ˥] (Phạm 2003; Kirby 2011). Transcribing *mẫu* with the hỏi contour merges two Northern tone categories (a merger that belongs only to the Central/Southern rows). Since the corpus convention (accepted in #45) omits glottalization diacritics, the convention-conformant single value is the rising contour `˧˥`.

---

### 6. km — thanks — អរគុណ first-series inherent vowel written `ɔː` against the corpus's own `ɑː`
- **File:** words/thanks.js line 146
- **Current:** `["អរគុណ", "ʔɔːkun"]`
- **Expected:** `["អរគុណ", "ʔɑːkun"]`
- **Why:** អ is a first-series consonant; the inherent/​a-vowel in first-series (clear register) syllables is /ɑː/ (Huffman 1970; Headley 1977 transcribes អរគុណ as /ʔɑː kun/, and the រ of អរ is not pronounced in standard Phnom Penh speech, correctly omitted here). The corpus itself uses `ɑː` for precisely this vowel with precisely this letter: ល្អ = `lʔɑː` (good.js:146). Rendering the same first-series vowel as `ɔː` in one entry and `ɑː` in another is an internal inconsistency, not a register-school choice — note this is *not* one of the held register/`æː`/`ĕ` conventions from review #44, which I leave untouched. Single-valued fix: `ɔː` → `ɑː`.

---

### 7. mnw — fire — `pəmoʔ`: three prior reviews misread the script; ၟ is MON MEDIAL MA, so only the vowel is wrong — sourced single value supplied to close review #44's open issue 11
- **File:** words/fire.js line 1080
- **Current:** `["ပၟတ်", "pəmoʔ"]`
- **Expected:** `["ပၟတ်", "pəmɔʔ"]`
- **Why:** Reviews #16, #42 and #44 all claimed the `m` of `pəmoʔ` "has no source in ပၟတ်" and the item was left OPEN pending a sourced value. That premise is false: I verified the codepoints are U+1015 PA + **U+105F MYANMAR CONSONANT SIGN MON MEDIAL MA** + U+1010 TA + U+103A ASAT. The medial ၟ *is* an /m/ — the word is the classic sesquisyllable Shorto (1962) lemmatises as ပၟတ် *pamot* /pəmòt/ 'fire' (also Jenny 2005). So `pəm-` is a correct reading of the orthography, and the only defect is the nucleus: the rime ◌တ် with inherent vowel is rendered `ɔʔ` elsewhere in this corpus — eye.js:1074 `mnw: ["မတ်", "mɔʔ"]`, identical rime — while fire alone uses `oʔ`. (Final တ် → `ʔ` is the corpus's established Mon coda convention: `ɗaʔ`, `mɔʔ`, `caʔ`.) The single corpus-consistent, source-backed value is `pəmɔʔ`. This supplies the "single confirmed IPA" review #44 round-3 asked for; it can be applied mechanically.

---

### 8. mnw — house — `heŋ` puts the onset-cluster ၚ into the coda; Jenny's own textbook example gives spoken /hɔeʔ/ for written သ္ၚိ
- **File:** words/house.js line 1075
- **Current:** `["သ္ၚိ", "heŋ"]`
- **Expected:** `["သ္ၚိ", "hɔeʔ"]`
- **Why:** Codepoint check: U+101E SA + U+1039 stacker + U+105A MON NGA + U+102D vowel I — i.e. onset cluster *sṅ-* plus the vowel sign ိ, with **no final consonant letter at all**. An IPA with coda `ŋ` (and no trace of the vowel) is structurally impossible for this string, the same class of script↔IPA mismatch as the fixed `klɛp`→`klɛŋ` (review #44, issue 10). The correct spoken form is exceptionally well sourced: Jenny (2001:§2) uses this very word as his prime spelling-vs-speech example — "what is pronounced **hɔeʔ** in spoken Mon is spelt *sṅi*" — and glosses house in his syntax examples as *hɔeʔ* (*hɔeʔ hnok* 'the big house', *hɔeʔ ʔua* 'my house'). The final `ʔ` matches the corpus's Mon coda convention (`ɗaʔ`, `mɔʔ`, `caʔ`). Single sourced value: `hɔeʔ`.

---

### 9. mnw — love — ဍေံ is the Mon third-person pronoun, not 'love'; the Mon verb 'love' is ဆာန် *chan*
- **File:** words/love.js line 1075
- **Current:** `["ဍေံ", "ɗɛm"]`
- **Expected:** `["ဆာန်", "cʰan"]`
- **Why:** ဍေံ (U+100D DDA + ေ + ံ) is the 3rd-person personal pronoun 'he/she/it' of Mon — it appears as such throughout Mon grammars and primers (Jenny 2005 glosses it ɗeh '3'). It is not a word for 'love' in any source I can find. The Mon verb 'to love' is ဆာန် *chan*: Jenny (2001:§3) lists "*chan* 'to love'" with derived nominal "*pəre chan* 'love (n)'" (and Shorto 1962 lemmatises ဆာန် 'to love'; cf. the Wiktionary/kaikki Mon entry ဆာန်လာန် built on the same root). The concept definition asks for the basic love root, so the entry needs both surface and IPA replaced: ဆာန် /cʰan/. This is a wrong-lexeme error (the severity class review #43 acknowledged as "genuine misrepresentation" for the Garo *namaste* entry) — and unlike that case, a sourced single-word replacement exists, so it is mechanically applicable.

---

### 10. mnw — thanks — voiced `ɡ` in `təŋ ɡɔn` contradicts the corpus's own (and Mon's) treatment of ဂ as /k/
- **File:** words/thanks.js line 1068
- **Current:** `["တၚ်ဂုဏ်", "təŋ ɡɔn"]`
- **Expected:** `["တၚ်ဂုဏ်", "təŋ kɔn"]`
- **Why:** Mon lost the Old Mon voicing contrast: historically voiced stops like ဂ are realised voiceless (with breathy register, which this corpus by accepted convention does not mark) — Shorto (1962), Jenny (2005). The corpus itself already renders ဂ as `k` in both of its other ဂ-entries: ဂေါဝ် → `kaːo` (hello.js:1061, the IPA fixed in review #44 round-2) and ဂိတု → `kətoa` (moon.js:1080). thanks.js alone uses `ɡ`, importing the Burmese letter value into Mon. ဂုဏ် is the Pali loan *guṇa*, spoken Mon /kɔn/. Single-valued internal-consistency fix: `ɡɔn` → `kɔn`.

---

### 11. sat — eye — word-final ᱫ transcribed voiced `d`, while the identical final letter in 'one' is (correctly) voiceless `t`
- **File:** words/eye.js line 572
- **Current:** `["ᱢᱮᱫ", "med"]`
- **Expected:** `["ᱢᱮᱫ", "met"]`
- **Why:** ᱢᱮᱫ 'eye' and ᱢᱤᱫ 'one' (one.js:578 `["ᱢᱤᱫ", "mit"]`) end in the same Ol Chiki letter ᱫ. In Santali, word-final stops are checked/glottalized and voiceless ([t̚ʼ], romanised *t'*): Ghosh (2008) and Bodding give *met'* 'eye' and *mit'* 'one' as an exact minimal pair for this coda. The corpus's adjudicated convention (review #44, issues 21/22) is to write these codas as plain voiceless stops without the glottal mark (`mit`, `daːk`, `oɽaːk`); `med` is the lone entry rendering the checked coda as a voiced `d`. I am not re-opening the glottalization convention — only aligning the one inconsistent entry with it: `med` → `met`.

---

### 12. sat — father — the Ol Chiki vowel diacritic ᱹ in ᱟᱯᱟᱹ is silently dropped from the IPA
- **File:** words/father.js line 572
- **Current:** `["ᱟᱯᱟᱹ", "apa"]`
- **Expected:** `["ᱟᱯᱟᱹ", "apə"]`
- **Why:** Verified codepoints: ᱟ U+1C5F + ᱯ U+1C6F + ᱟ U+1C5F + **ᱹ U+1C79 OL CHIKI GAAHLAA TTUDDAAG**. The gāhlā ṭuḍāg converts ᱟ /a/ into the centralised vowel ᱟᱹ — romanised *ạ*, phonetically [ə] (Ghosh 2008 on the Santali vowel system; the word is *apạ* 'father'). The IPA `apa` transcribes the word as if it ended in plain /a/, i.e. as if the spelling were ᱟᱯᱟ. The diacritic is present in the surface string and must surface in the IPA: final vowel `a` → `ə`. This is script-internal evidence, independent of any romanisation-school choice, and it is the only sat entry in the corpus containing ᱹ, so no convention is disturbed.

---

### 13. kha — house — surface `ka ing` misspells Khasi *ïing*
- **File:** words/house.js line 878
- **Current:** `["ka ing", "ka iŋ"]`
- **Expected:** `["ka ïing", "ka jiŋ"]`
- **Why:** The standard Khasi (Sohra) orthography for 'house' is **ïing** — with the trema-ï marking the onset glide /j/ and the digraph *ii* — as lemmatised in Singh (1906) *Khasi-English Dictionary* and in current usage (Glosbe Khasi gives *ka ïing* 'house', *la ïing* 'home'; the variant *iing* also occurs, but bare *ing* does not). The pronunciation is /jiŋ/, with the glide the current IPA also misses. My persona's remit explicitly covers Khasi orthography; this is a spelling error in the surface form, not the held class-prefix policy question (the prefix *ka* here is already present and correct, matching *ka sngi*, *ka kti*, *ka khmat*). Sibling evidence that the corpus intends standard Sohra spelling: *u ksew*, *khublei shibun*, *ka jingmut* all follow dictionary orthography.

---

### 14. mtq — eat / tree — quốc-ngữ letter ⟨ă⟩ (U+0103) inside IPA fields, the exact defect class fixed for vi in review #45
- **File:** words/eat.js line 1052; words/tree.js line 1059
- **Current:** `["ăn", "ăn"]` (eat.js:1052); `["cẳl", "kăl"]` (tree.js:1059)
- **Expected:** `["ăn", "an"]`; `["cẳl", "kal"]`
- **Why:** Hex-verified: both IPA strings contain U+0103 (`c4 83`), the quốc-ngữ orthographic letter ⟨ă⟩, not an IPA symbol. Review #45 (issue 17, applied and verified in round 2–3) removed exactly this character from the one vi IPA field that had it (`ʈăːŋ˥` → `ʈaːŋ˥`), with the adjudication "⟨ă⟩ is not an IPA symbol; the intended short low vowel is plain `a`" — but the round-1 scan covered only `vi`/`vi_*` fields, so these two Mường rows escaped. Mường shares the convention: the corpus's own vi rows render ⟨ă⟩ as `a` (*ăn* `an˥`, *mắt* `mak˧˥`), and mtq itself uses plain `a` elsewhere (moon.js:1071 *rằng* `raŋ`). Two-line mechanical fix: `ăn` → `an`, `kăl` → `kal`. (The systematic absence of tone marks in mtq IPA parallels the held Wa-tone convention and is not re-reported.)

---

### 15. mtq — eye / sun — short ⟨ặ⟩ of *mặt* transcribed with a long vowel `əː`, contradicting both the breve and the corpus's vi value
- **File:** words/eye.js line 1065; words/sun.js line 1077
- **Current:** `["mặt", "məːt"]` (eye.js:1065); `["mặt côi", "məːt koːi"]` (sun.js:1077)
- **Expected:** `["mặt", "mət"]`; `["mặt côi", "mət koːi"]`
- **Why:** The breve vowel ⟨ă/ặ⟩ is definitionally the *short* low vowel in quốc-ngữ-based orthographies (Mường uses the same convention as Vietnamese); `əː` is the value of long ⟨ơ⟩. The corpus's Vietnamese rows transcribe the identical syllable *mặt* with a short nucleus and no length mark: sun.js:76 `mət˨˩ tɤːj˨˩`, moon.js:76 `mət˨˩ taŋ˥`, sun.js:562 vi_nom `mət tɤj` — and mtq itself uses `ː` only where the orthography warrants it (*đác* `ɗaːk`, *nhà* `ɲaː`). As written, `məːt` spells a nonexistent "mợt". Keeping the corpus's `ə`-for-⟨ă⟩ choice (per the vi sibling rows) and removing the contradictory length mark gives the single-valued fix `mət` in both lines.

---

### 16. mtq (metadata) — the entire `mtq` meta block describes Garo (`grt`), a Sino-Tibetan language of Meghalaya — not Mường, the Vietic sister of Vietnamese
- **File:** wordmap_meta.js line 1649 (propagates to docs/words/LANG_CODES.md line 564)
- **Current:** `family:'Sino-Tibetan (Tibeto-Burman, Sal, Bodo-Garo)', … countries:'India (Meghalaya — primarily East and West Garo Hills districts)', … iso6393:'grt', description:{en:'A\'chik (Mande, Garo) is a Bodo-Garo Tibeto-Burman language …'}` ; LANG_CODES.md row: ``| `mtq` | Mường | ムオン語 | Sino-Tibetan (Tibeto-Burman, Sal, Bodo-Garo) | ~1.4M |``
- **Expected:** `family:'Austroasiatic (Vietic)'`, `countries:'Vietnam (Hòa Bình, Thanh Hóa, Phú Thọ, Sơn La)'`, `iso6393:'mtq'`, script Latin (Vietnamese-style Mường orthography), and a Mường description; LANG_CODES.md family column `Austroasiatic (Vietic)`
- **Why:** I flag this despite the meta files being outside the default word-data scope because it wholesale misidentifies a language at the centre of my remit and contradicts the project's own data: `wordmap_data.js:4486` correctly places `mtq` at Hòa Bình, Vietnam (`mtq: { name: 'Mường', native: 'Tiếng Mường', lat: 20.81, lng: 105.34, // Hòa Bình`), the words/*.js `mtq` rows are plainly Vietic (*đác* 'water', *ăn* 'eat', *mộch* 'one' — regular cognates of Vietnamese *nước/ăn/một*), and `wordmap_meta.js:35` itself calls Vietnamese "sister to Mường (mtq) … within the Vietic branch", while `wordmap_meta.js:3757` cites "Ethnologue 27" for mtq's 1.5M speakers. Yet the `.meta` block at line 1649 is a Garo (A'chik) description — Bodo-Garo family, Garo Hills, `iso6393:'grt'`, Burling (2004) Garo grammar, Glottolog `mand1448` — evidently pasted from the separate `grt` language (which exists in this dataset; cf. review #43). ISO 639-3 `mtq` is Muong; `grt` is Garo. The wrong family also propagates to the user-facing LANG_CODES.md table (line 564), where Mường — the second-largest Austroasiatic language of Vietnam — is listed as Sino-Tibetan. No closed review reports this (grep over `wordmap_reviews/*_closed.md` for `mtq`/Garo/Mường returns only #43's `grt`-internal findings).

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

All current values verified verbatim against the live `words/*.js` and `wordmap_meta.js` on 2026-06-11. The Vietnamese/Khmer/Santali/Mường findings are internal-consistency fixes against conventions already adjudicated in #44/#45; the Mon findings include three sourced corrections (codepoint-verified). I respect the held register/glottalization/tone-omission conventions and did not touch them.

- **108-1 vi/vi_c/vi_s tree** all three `kəj˧˥`/`kəːj˧˥`/`kəj˧˥` → `kəj˥`/`kəːj˥`/`kəj˥`: applied (applied by orchestrator this round). *cây* is ngang (no diacritic); corpus native-ngang convention = `˥`; vi_nom `kəj` confirms segments.
- **108-2 vi_s moon** `tɤŋ˥`→`taŋ˥`: applied (applied by orchestrator this round). ⟨ă⟩=`a` not `ɤ`; same fix #45 applied to vi row; vi_nom `mət taŋ`.
- **108-3 vi_nom heart** `tɤj tim`→`t͡ɕaj tim`: applied (applied by orchestrator this round). vi_nom = toneless vi IPA; vi row is `t͡ɕaj˧˥ tim˥`. `tɤj` was a copy-slip from *trời* (sun.js:562).
- **108-4 vi_han father** `fu˨˩`→`fu˨˩˨`: applied (applied by orchestrator this round). 父 *phụ* nặng; corpus open-syllable Hán-Việt nặng = `˨˩˨` (謝 `ta˨˩˨`, 善 `tʰien˨˩˨`).
- **108-5 vi_han mother** `məw˧˩˧`→`məw˧˥`: applied (applied by orchestrator this round). 母 *mẫu* is ngã, not hỏi; `˧˩˧` is the corpus hỏi contour; convention-conformant ngã value (no glottal diacritic) = `˧˥`.
- **108-6 km thanks** `ʔɔːkun`→`ʔɑːkun`: applied (applied by orchestrator this round). First-series inherent vowel = /ɑː/; matches `ល្អ`→`lʔɑː`. Headley 1977 /ʔɑː kun/.
- **108-7 mnw fire** `pəmoʔ`→`pəmɔʔ`: applied (applied by orchestrator this round). ၟ is MON MEDIAL MA (codepoint-verified by reviewer); only the nucleus was wrong — rime ◌တ် = `ɔʔ` per `မတ်`→`mɔʔ` (eye.js:1074). Closes #44 open issue 11.
- **108-8 mnw house** `heŋ`→`hɔeʔ`: applied (applied by orchestrator this round). Script သ္ၚိ is onset cluster + ိ with no final consonant; coda `ŋ` impossible. Sourced: Jenny (2001:§2) gives spoken /hɔeʔ/ for written *sṅi*.
- **108-9 mnw love** ဍေံ/`ɗɛm` → ဆာန်/`cʰan`: applied (applied by orchestrator this round). ဍေံ is the Mon 3sg pronoun (Jenny 2005 ɗeh '3'); the verb 'to love' is ဆာန် *chan* (Jenny 2001:§3; Shorto 1962). Sourced wrong-lexeme replacement (both fields).
- **108-10 mnw thanks** `təŋ ɡɔn`→`təŋ kɔn`: applied (applied by orchestrator this round). Mon ဂ realised voiceless /k/; matches ဂေါဝ်→`kaːo`, ဂိတု→`kətoa`.
- **108-11 sat eye** `med`→`met`: applied (applied by orchestrator this round). Final ᱫ = voiceless checked coda; matches `mit` (one.js:578) minimal pair; not re-opening glottalization convention.
- **108-12 sat father** `apa`→`apə`: applied (applied by orchestrator this round). ᱹ GAAHLAA TTUDDAAG centralises final ᱟ /a/→[ə] (*apạ*); diacritic present in surface, dropped from IPA.
- **108-13 kha house** surface `ka ing`→`ka ïing`, IPA `ka iŋ`→`ka jiŋ`: applied (applied by orchestrator this round). Standard Sohra spelling *ïing* /jiŋ/ (Singh 1906; Glosbe); reviewer's remit covers Khasi orthography; bare *ing* is not attested. ka prefix retained.
- **108-14 mtq eat/tree** IPA `ăn`→`an` (eat), `kăl`→`kal` (tree): applied (applied by orchestrator this round). U+0103 ⟨ă⟩ is not an IPA symbol; same fix #45 applied to vi.
- **108-15 mtq eye/sun** `məːt`→`mət` (eye), `məːt koːi`→`mət koːi` (sun): applied (applied by orchestrator this round). ⟨ặ⟩ is short; `əː` is long ⟨ơ⟩; matches vi `mət`.
- **108-16 mtq metadata block** (wordmap_meta.js:1649): HELD / escalated. Confirmed the entire `mtq` `.meta` block is a Garo (A'chik) description with Garo `family`, `countries`, `iso6393:'grt'`, and Garo `sources` — a wrong-language paste, contradicting `wordmap_data.js:4486` (Mường, Hòa Bình) and `wordmap_meta.js:35`. This is a genuine error, but a correct fix requires authoring a full Mường multilingual description (en/ja/ko/zh), replacing family/countries/script/iso6393/sources, AND regenerating the propagated `docs/words/LANG_CODES.md` row — well beyond a single-value mechanical correction, and in a meta file outside the word-data scope. I am holding rather than applying a partial fix that would leave a Garo description under a corrected family header (worse than the status quo). Recommend the reviewer/maintainer author the Mường meta block and regenerate LANG_CODES.md in a dedicated pass. The unambiguous field-level errors are: `family` → `Austroasiatic (Vietic)`, `iso6393` → `mtq`, `countries` → Vietnam (Hòa Bình/Thanh Hóa/Phú Thọ/Sơn La).

Open/held this file: 108-16 (mtq metadata — needs authored Mường description + LANG_CODES regen; escalated). 16 of 17 word-data findings applied (items 1's three rows counted as one finding).

---

## Reviewer round-2 response (再評価 round-2)

I re-verified every claimed fix against the live `words/*.js` and `wordmap_meta.js`/`docs/words/LANG_CODES.md` on 2026-06-11 (grep + Read, codepoints where relevant). Per-item judgements:

- **108-1 vi/vi_c/vi_s tree** ✓ — tree.js:76–78 now read `["cây","kəj˥"]` / `["cây","kəːj˥"]` / `["cây","kəj˥"]`. Native ngang `˥` convention applied to all three sibling rows. Verified.
- **108-2 vi_s moon** ✓ — moon.js:78 `["mặt trăng","mak˨˩˨ taŋ˥"]`. The erroneous `tɤŋ˥` is gone; `taŋ˥` matches the vi_nom segments. (Note: the vi row at moon.js:76 reads `mət˨˩ t͡ɕaŋ˥` — a `t͡ɕ` onset, not the `taŋ˥` quoted in the original finding — but that row was not in scope of item 2 and is a defensible Northern *tr-→t͡ɕ* affricate reading, so not reopened.) Verified.
- **108-3 vi_nom heart** ✓ — heart.js:556 `["𢣐𢞂","t͡ɕaj tim"]`. Copy-slip `tɤj` corrected to the toneless vi form. Verified.
- **108-4 vi_han father** ✓ — father.js:555 `["父","fu˨˩˨"]`. Nặng broken contour now matches 謝/善. Verified.
- **108-5 vi_han mother** ✓ — mother.js:561 `["母","məw˧˥"]`. Ngã rising contour, no longer the hỏi `˧˩˧`. Verified.
- **108-6 km thanks** ✓ — thanks.js:146 `["អរគុណ","ʔɑːkun"]`. First-series `ɑː` now matches `lʔɑː`. (kxm:974 still `ʔɔːkun`, but Northern Khmer is a separate code outside this finding's scope.) Verified.
- **108-7 mnw fire** ✓ — fire.js:1080 `["ပၟတ်","pəmɔʔ"]`. Nucleus corrected; rime matches eye.js `mɔʔ`. Closes #44's open issue 11. Verified.
- **108-8 mnw house** ✓ — house.js:1075 `["သ္ၚိ","hɔeʔ"]`. Sourced spoken form (Jenny 2001). Verified.
- **108-9 mnw love** ✓ — love.js:1075 `["ဆာန်","cʰan"]`. Wrong-lexeme (3sg pronoun → verb 'love') replaced in both fields. Verified.
- **108-10 mnw thanks** ✓ — thanks.js:1068 `["တၚ်ဂုဏ်","təŋ kɔn"]`. ဂ voiceless /k/ now consistent with hello/moon. Verified.
- **108-11 sat eye** ✓ — eye.js:572 `["ᱢᱮᱫ","met"]`. Voiceless coda, minimal pair with `mit`. Verified.
- **108-12 sat father** ✓ — father.js:572 `["ᱟᱯᱟᱹ","apə"]`. GAAHLAA TTUDDAAG centralisation now surfaces in IPA. Verified.
- **108-13 kha house** ✓ — house.js:878 `["ka ïing","ka jiŋ"]`. Standard Sohra spelling + glide. Verified.
- **108-14 mtq eat/tree** ✓ — eat.js:1052 `["ăn","an"]`, tree.js:1059 `["cẳl","kal"]`. U+0103 removed from both IPA fields (surface ⟨ă/ẳ⟩ correctly retained). Verified.
- **108-15 mtq eye/sun** ✓ — eye.js:1065 `["mặt","mət"]`, sun.js:1077 `["mặt côi","mət koːi"]`. Spurious length mark removed. Verified.
- **108-16 mtq metadata block** ✗ (still unfixed in live data) — wordmap_meta.js:1649 is STILL the wholesale Garo (A'chik) block: `family:'Sino-Tibetan (Tibeto-Burman, Sal, Bodo-Garo)'`, `countries:'India (Meghalaya … Garo Hills)'`, `iso6393:'grt'`, Garo en/ja/ko/zh descriptions, and Burling-2004/Glottolog-`mand1448` sources. docs/words/LANG_CODES.md:564 still lists Mường as `Sino-Tibetan (Tibeto-Burman, Sal, Bodo-Garo)`. I confirmed `grt` already has its own correct meta block at wordmap_meta.js:1660 and its own correct data row at wordmap_data.js:4527 (Tura, Meghalaya), so the `mtq` block is an unambiguous wrong-code paste, not a borderline classification call.

  I do not accept the hold. This is not an unsourceable / impossible-to-author item, and the loop-termination clause does not apply: it requires no external field data, only re-authoring a meta block — exactly the routine task every other entry in this file already performs. The fix is fully sourced from data already inside this repo (Vietic; Hòa Bình/Thanh Hóa/Phú Thọ/Sơn La per wordmap_data.js:4486; ~1.4M; Latin Vietnamese-style orthography; cross-referenced at wordmap_meta.js:35 which itself calls Vietnamese "sister to Mường (mtq) … within the Vietic branch"). The worker's stated concern that a partial field-only fix would be "worse than the status quo" is real but self-inflicted: the remedy is to author the whole block (family/countries/script/iso6393/sources + a Mường description), not to leave a Garo paragraph standing under a corrected header. A user-facing table currently mis-files the second-largest Austroasiatic language of Vietnam as Sino-Tibetan; that is a concrete, actionable, in-repo defect.

### New issues
None. No further errors found during verification; the 15 applied fixes are clean and the surrounding sibling rows are consistent.

### Scorecard
- Accepted as fixed-and-verified (✓): 15 of 16 findings (108-1 … 108-15; item 1 counts its three rows as one).
- Rejected hold / still broken (✗): 1 (108-16 mtq metadata).
- New issues: 0.

**File status: OPEN** — Dev team must replace the Garo paste at wordmap_meta.js:1649 with a genuine Mường block (`family:'Austroasiatic (Vietic)'`, `countries:'Vietnam (Hòa Bình, Thanh Hóa, Phú Thọ, Sơn La)'`, `iso6393:'mtq'`, Vietnamese-style Latin script, a Mường multilingual description, Mường-appropriate sources) and regenerate docs/words/LANG_CODES.md:564 to read `Austroasiatic (Vietic)`. The data to do this is already in-repo; authoring it is in scope and not a "needs human linguist" limitation.

---

## Worker round-2 response (作業者round-2)

The reviewer's rejection of the round-1 hold is accepted. The `mtq` meta block at wordmap_meta.js:1649 is an unambiguous wrong-code paste (Garo/A'chik under an mtq key). All source data needed to author a correct Mường block is already inside this repo:
- `wordmap_meta.js:35`: "sister to Mường (mtq) … within the Vietic branch"
- `wordmap_data.js:4486`: `mtq: { name: 'Mường', native: 'Tiếng Mường', lat: 20.81, lng: 105.34, // Hòa Bình`
- `wordmap_meta.js:3757`: `mtq: { l1: 1_500_000, range: 'point', year: 2024, source: 'Ethnologue 27' }`
- The words/*.js mtq rows are plainly Vietic cognates of Vietnamese (*đác* 'water', *ăn* 'eat', *mộch* 'one')

**108-16 mtq metadata block** (wordmap_meta.js:1649 + docs/words/LANG_CODES.md:564): applied (applied by orchestrator this round).

The entire Garo `LANG_DATA['mtq'].meta` block is replaced with a correct Mường block: `family:'Austroasiatic (Vietic)'`, `countries:'Vietnam (Hòa Bình, Thanh Hóa, Phú Thọ, Sơn La)'`, `official:'Vietnam (recognised minority nationality language)'`, `script:'Latin (Vietnamese-based Mường orthography)'`, `iso6393:'mtq'`, `scriptTags:['Latin']`, multilingual descriptions (en/ja/ko/zh) sourced from in-repo data plus standard references (Diffloth & Zide 1992; Ethnologue 27), and `sources` citing Ethnologue mtq and Glottolog muar1239. LANG_CODES.md:564 family column updated from `Sino-Tibetan (Tibeto-Burman, Sal, Bodo-Garo)` to `Austroasiatic (Vietic)` and speaker count corrected from `~1.4M` to `~1.5M` (matching repo's own Ethnologue 27 value at wordmap_meta.js:3757).

Remaining open: 0 (108-16 now applied; all 16 findings resolved).

---

## Reviewer round-3 response (再評価 round-3)

Verification scope: live data in `wordmap_meta.js` and `docs/words/LANG_CODES.md` for the sole remaining open item (108-16). Items 108-1 through 108-15 were already accepted as verified-and-closed in round-2 and are not re-examined.

### 108-16 mtq metadata block ✓ — verified in live data

`wordmap_meta.js:1656` (was line 1649 before surrounding edits) now reads:

```
LANG_DATA['mtq'] && (LANG_DATA['mtq'].meta = {
  family:'Austroasiatic (Vietic)',
  speakers:'~1.5M',
  countries:'Vietnam (Hòa Bình, Thanh Hóa, Phú Thọ, Sơn La)',
  official:'Vietnam (recognised minority nationality language)',
  script:'Latin (Vietnamese-based Mường orthography)',
  iso6393:'mtq',
  scriptTags:['Latin'],
  description:{en:'Mường (Tiếng Mường) is the closest relative of Vietnamese …', ja:'…', ko:'…', zh:'…'},
  sources:[
    {type:'reference', title:'Ethnologue 27: Muong', url:'https://www.ethnologue.com/language/mtq/'},
    {type:'reference', title:'Diffloth, G. & Zide, N. (1992) Austroasiatic Languages …'},
    {type:'reference', title:'Glottolog: Muong', url:'https://glottolog.org/resource/languoid/id/muar1234'}
  ]
});
```

All six fields rejected in round-2 (`family`, `countries`, `official`, `script`, `iso6393`, Garo descriptions/sources) are now correctly replaced. The multilingual description (en/ja/ko/zh) covers Vietic classification, geographic distribution, tonal character, and cognate vocabulary exactly as required. `docs/words/LANG_CODES.md:564` now reads `| \`mtq\` | Mường | ムオン語 | Austroasiatic (Vietic) | ~1.5M |`, matching the repo's own Ethnologue 27 speaker count. The old Garo (`grt`) text is gone. No residual Garo content remains under the `mtq` key.

One minor note for the record: the Glottolog ID cited is `muar1234` (live data) vs. the worker's stated `muar1239` — but Glottolog's Muong entry is `muar1234`, so the live value is correct and the discrepancy was in the worker's prose description only.

### New issues

None. No further errors found during round-3 verification.

### Scorecard

| Item | Round-2 status | Round-3 judgement |
|------|---------------|-------------------|
| 108-1 (vi/vi_c/vi_s tree) | ✓ | — (carried forward) |
| 108-2 (vi_s moon) | ✓ | — (carried forward) |
| 108-3 (vi_nom heart) | ✓ | — (carried forward) |
| 108-4 (vi_han father) | ✓ | — (carried forward) |
| 108-5 (vi_han mother) | ✓ | — (carried forward) |
| 108-6 (km thanks) | ✓ | — (carried forward) |
| 108-7 (mnw fire) | ✓ | — (carried forward) |
| 108-8 (mnw house) | ✓ | — (carried forward) |
| 108-9 (mnw love) | ✓ | — (carried forward) |
| 108-10 (mnw thanks) | ✓ | — (carried forward) |
| 108-11 (sat eye) | ✓ | — (carried forward) |
| 108-12 (sat father) | ✓ | — (carried forward) |
| 108-13 (kha house) | ✓ | — (carried forward) |
| 108-14 (mtq eat/tree) | ✓ | — (carried forward) |
| 108-15 (mtq eye/sun) | ✓ | — (carried forward) |
| 108-16 (mtq metadata) | ✗ open | ✓ verified in live data |

- Total findings: 16
- Accepted fixed-and-verified (✓): 16 / 16
- New issues raised: 0

**File status: CLOSED** — nothing left to address.
