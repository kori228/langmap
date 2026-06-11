# Wordmap review #115 — Intra-language cross-word consistency round-2 (fresh language sample)

## Reviewer self-introduction (ペルソナ自己紹介)

I am a phonetician and lexical-database auditor running the second intra-language consistency pass: like reviewer #74 I treat each language's other nineteen cells in `words/<concept>.js` as the de-facto house style and hunt for the single cell that breaks it — but on a **fresh sample** of language codes that #74 did not touch (#74 covered `el`, `gl`, `lt`, `tl`, `pt_eu`, `eo`; I took `sw`, `tr`, `pl`, `nl`, `hu`, `hi`, `bn`, `ta`, `th`, `vi`, `ko`, `fa`, `he`, `am`, each verified by grep to carry all 20 concepts). I know this project's data model (`WORDS.<concept>.data` tuples `[surface, ipa]`, conventions per `docs/words/CONTRIBUTING.md`, codes per `docs/words/LANG_CODES.md`) and — because this is wave 11 — I grepped `wordmap_reviews/*_closed.md` for every candidate before writing it down, so as not to re-litigate adjudicated decisions: I deliberately do **not** re-report `hi sun suːɾəd͡ʒ` (schwa deliberately set by #32/#83), `bn moon/love` vowel length (set by #33), `he eat leχol` and `he moon jaˈʁeaχ` (set by #35/#98), the vi unreleased-stop / nặng / ⟨x⟩=`s` conventions (held system-wide by #45), or the Tamil voiced-allophone convention (held by #31). For the linguistics I lean on **Haas, _Thai-English Student's Dictionary_ (1964)** and **Iwasaki & Ingkaphirom, _A Reference Grammar of Thai_ (2005)** for the Thai tone-class rules; **Kirby (2011) "Vietnamese (Hanoi Vietnamese)," _JIPA_ 41** and **Thompson (1965)** for the Hanoi tr/ch merger and finals; **Gussenhoven (1999) "Dutch," _IPA Handbook_** for the shortness of Dutch /i y u/; **Siptár & Törkenczy, _The Phonology of Hungarian_ (2000)** for the geminate in *egy*; **Keane (2004) "Tamil," _JIPA_ 34** for [ʋ] and glide notation; **Lazard, _A Grammar of Contemporary Persian_ (1992)** and **Mahootian (1997)** for the Persian stable vowels; **Ashton, _Swahili Grammar_ (1944)** for penultimate stress. Columns I audited and found internally clean: `tr` (uniform [c]/[ɟ] fronting, taps, no stress), `pl` (uniform stress + tie-bar affricates), `ko` (uniform lenis/fortis, unreleased finals, intervocalic voicing), `am` (uniform ejectives and ɨ/ɛ values). Every "Current" value below was copied verbatim from the live file at the cited line on 2026-06-11 and re-verified by grep immediately before writing.

---

## Issues found

### 1. `th` — father — พ่อ given low tone `˨˩`; พ is a LOW-class consonant, so mai ek yields the falling tone — exactly as the column's own แม่ shows
- **File:** words/father.js line 79
- **Current:** `["พ่อ", "pʰɔː˨˩"]`
- **Expected:** `["พ่อ", "pʰɔː˥˩"]`
- **Why:** Review #46 (closed) changed the original `pʰɔː˥˩` to `pʰɔː˨˩` on the stated premise that "พ belongs to the high class; mai ek on a high-class consonant yields the low tone." The rule is right but the class assignment is wrong: พ is a **low-class** consonant (its high-class counterpart is ผ); the high class is ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (Iwasaki & Ingkaphirom 2005 §2; Smyth 2002 §1.5). Low class + mai ek = **falling** tone: พ่อ is /pʰɔ̂ː/ (Haas 1964 *phɔ̂ɔ*). The column's own structurally identical cell proves it: แม่ (low-class ม + mai ek) = `mother.js` L79 `["แม่","mɛː˥˩"]`, and บ้าน (falling) = `house.js` L79 `baːn˥˩`, while the genuine high-class+mai-ek cells correctly carry low tone (`one.js` L79 หนึ่ง `nɯŋ˨˩`). Note also that #46's edit only reached the standard `th` row: `father.js` L192–194 still carry the correct `th_isan`/`th_n`/`th_s` `pʰɔː˥˩`, so the standard-Thai cell is now the lone wrong outlier among the four Thai varieties *and* against its own tone-class siblings. Restore `˥˩`.

---

### 2. `vi` — eye — *mắt* transcribed with final `k` where every other orthographic ⟨t⟩ coda in the column keeps [t]
- **File:** words/eye.js line 76
- **Current:** `["mắt", "mak˧˥"]`
- **Expected:** `["mắt", "mat˧˥"]`
- **Why:** The `vi` row is the Northern/Hanoi register (separate `vi_c`/`vi_s` rows exist), and Hanoi Vietnamese preserves final /-t/ as [t] — the -t → -k merger after non-front vowels is a *Southern* feature, encoded in this dataset precisely in the `vi_c` rows (`sun.js` L77 `maːk˨˨`, per closed review #45). Within the `vi` column itself every other orthographic ⟨t⟩ coda is [t]: `moon.js` L76 *mặt* `mət˨˩` (the very same rime ⟨ặt⟩!), `sun.js` L76 *mặt* `mət˨˩`, `good.js` L76 *tốt* `tot˧˥`, `one.js` L76 *một* `mot˨˩`. `mak` is the lone -k reflex in the Northern row (Kirby 2011; Thompson 1965 §4). Change the coda only; vowel and tone are already correct.

---

### 3. `vi` — moon — *trăng* onset ⟨tr⟩ as plain `t`, against the column's adjudicated `t͡ɕ` for ⟨tr⟩/⟨ch⟩
- **File:** words/moon.js line 76
- **Current:** `["mặt trăng", "mət˨˩ taŋ˥"]`
- **Expected:** `["mặt trăng", "mət˨˩ t͡ɕaŋ˥"]`
- **Why:** No Vietnamese variety realises ⟨tr⟩ as plain [t]: Hanoi merges ⟨tr⟩ with ⟨ch⟩ as [t͡ɕ] (Kirby 2011 §"Consonants"), Saigon keeps retroflex [ʈ]. This dataset's `vi` row already settled the question: `heart.js` L76 *trái tim* = `t͡ɕaj˧˥ tim˥`, and closed review #16 (issue 12) explicitly adjudicated that merged `t͡ɕ` as the accepted team norm for Northern ⟨tr⟩ (won't-fix on [ʈ]); ⟨ch⟩ cells agree (`dog.js` L76 *chó* `t͡ɕɔ˧˥`, `hello.js` L76 *chào* `t͡ɕaːw˨˩`). The `taŋ` onset slipped through review #45, whose fix targeted only the vowel (`tɤŋ`→`taŋ`) and whose own Expected offered "`taŋ˥` or `t͡ɕaŋ˥`" without adjudicating the onset. Align the onset with the adjudicated convention: `t͡ɕaŋ˥`.

---

### 4. `vi` — sun — *trời* onset ⟨tr⟩ as plain `t` — same defect as #3, different file
- **File:** words/sun.js line 76
- **Current:** `["mặt trời", "mət˨˩ tɤːj˨˩"]`
- **Expected:** `["mặt trời", "mət˨˩ t͡ɕɤːj˨˩"]`
- **Why:** Same onset defect as #3: orthographic ⟨tr⟩ rendered as bare [t], which is not a possible value in any dialect, while the column's adjudicated treatment of ⟨tr⟩ is `t͡ɕ` (`heart.js` L76 *trái* `t͡ɕaj˧˥`, accepted as the team norm in closed review #16). Vowel `ɤː` (⟨ơ⟩) and huyền `˨˩` are correct; fix the onset only.

---

### 5. `nl` — mother — /u/ transcribed long `uː` where the column's own *goed* shows the correct short [u]
- **File:** words/mother.js line 160
- **Current:** `["moeder", "muːdər"]`
- **Expected:** `["moeder", "mudər"]`
- **Why:** Standard Dutch /i y u/ are phonetically **short** except before /r/ (Gussenhoven 1999, _IPA Handbook_, "Dutch": the tense high vowels are lengthened only before /r/). The column encodes exactly this rule elsewhere: `good.js` L160 *goed* = `xut` (same phoneme /u/, short), and `fire.js` L160 *vuur* = `vyːr` (high vowel long *because* of the following /r/). *moeder* has /u/ before /d/, so the length mark is wrong; `muːdər` is the lone over-long high vowel not conditioned by /r/ — apart from the parallel case in #6. The genuinely long `aː`/`eː`/`oː` cells (`vaːdər`, `eːtə`, `boːm`, `maːn`) are unaffected.

---

### 6. `nl` — love — /i/ in *liefde* over-long; same Gussenhoven rule as #5
- **File:** words/love.js line 160
- **Current:** `["liefde", "liːfdə"]`
- **Expected:** `["liefde", "lifdə"]`
- **Why:** Same defect as #5 on /i/: Dutch ⟨ie⟩ = short [i] except before /r/ (Gussenhoven 1999). *liefde* = [ˈlifdə] (Heemskerk & Zonneveld, _Uitspraakwoordenboek_ 2000). The column's evidence: `goed` `xut` shows high tense vowels written short, `vuur` `vyːr` shows ː reserved for the pre-/r/ position. (Closed review #01 quoted `liːfdə` only as evidence for initial [v]; the vowel length was never adjudicated.)

---

### 7. `hu` — one — *egy* missing its geminate: the column writes `ː` for every other geminate
- **File:** words/one.js line 157
- **Current:** `["egy", "ɛɟ"]`
- **Expected:** `["egy", "ɛɟː"]`
- **Why:** Hungarian *egy* ends in a geminate palatal stop in citation form — [ɛɟː] (Siptár & Törkenczy 2000 §4.1 list *egy* among the lexical geminates; cf. Wiktionary hu *egy* [ˈɛɟː]). The `hu` column marks gemination with the length mark everywhere it occurs: `drink.js` L157 *inni* `inːi`, `eat.js` L157 *enni* `ɛnːi`, and degemination is not at issue word-finally after a vowel. `ɛɟ` is the lone unmarked geminate in the column; add `ː`.

---

### 8. `fa` — hello — lone tap `ɾ` in a column that writes the rhotic as `r` in all six other cells
- **File:** words/hello.js line 106
- **Current:** `["درود", "doɾuːd"]`
- **Expected:** `["درود", "doruːd"]`
- **Why:** Mixed rhotic symbols for the same phoneme. The `fa` column transcribes ر as plain `r` in every other cell, including the directly comparable intervocalic positions: `cat.js` L106 `ɡorbe`, `eat.js` L106 `xordæn`, `father.js` L106 `pedær`, `mother.js` L106 `mɒːdær`, `sun.js` L106 `xorʃiːd`, `tree.js` L106 `deræxt`. Only *dorud* carries the tap symbol. (Closed reviews #06/#96 discussed this cell's word choice and its `uː` — both held — but never the rhotic.) Conform the one outlier to the column's `r`.

---

### 9. `fa` — drink — stable vowel /iː/ of the infinitive *-idan* left unmarked while the column marks it in *xorshid*
- **File:** words/drink.js line 106
- **Current:** `["نوشیدن", "nuːʃidæn"]`
- **Expected:** `["نوشیدن", "nuːʃiːdæn"]`
- **Why:** The `fa` column uses length marks for the three stable vowels (ا `ɒː`, و `uː`, ی `iː`): `sun.js` L106 خورشید `xorʃiːd`, `good.js` L106 `xuːb`, `house.js` L106 `xɒːne` — and closed review #06 (#7) confirmed this length convention as the corpus style. The ی of the infinitive suffix ـیدن is the same stable /iː/ (Lazard 1992 §2; Mahootian 1997), yet *nushidan* is the one cell that writes it bare `i` — note the very same word already marks its و as `uː`. Add the length mark: `nuːʃiːdæn`.

---

### 10. `ta` — cat — diphthong ஐ written `ai` where the column writes the glide as `j`
- **File:** words/cat.js line 89
- **Current:** `["பூனை", "puːnai"]`
- **Expected:** `["பூனை", "puːnaj"]`
- **Why:** Mixed glide notation for the same vocalic offglide. The `ta` column renders the /ai/-offglide with the IPA glide `j` everywhere else: `hand.js` L89 கை `kaj` (the same ஐ vowel sign), `dog.js` L89 நாய் `naːj`, `heart.js` L89 `idajam`, `sun.js` L89 `suːɾijan` (Keane 2004 uses [ɛ̆i̯ ~ aj]-type offglides, and the project house style per `th faj˧`, `vi taj˥` is `j`). *puːnai* is the lone `ai` spelling — a transliteration residue, not a different sound. Change to `puːnaj`.

---

### 11. `ta` — house — வ as `v` where the column's other வ cell uses `ʋ`
- **File:** words/house.js line 89
- **Current:** `["வீடு", "viːɖu"]`
- **Expected:** `["வீடு", "ʋiːɖu"]`
- **Why:** Tamil வ is the labiodental approximant [ʋ] (Keane 2004, _JIPA_ 34, consonant chart), and the column already encodes it that way in its other வ word: `hello.js` L89 வணக்கம் `ʋaɳakkam` (a cell closed review #31 called "among the better-formed Tamil transcriptions"). `viːɖu` is the only `ta` cell using the fricative letter `v` for this phoneme — the same two-symbol split closed review #83 (#24) checked and praised Sinhala for *not* having (8/8 `si` cells use `ʋ`). Conform to `ʋ`.

---

### 12. `ta` — eat — geminate written `pː` while the column's four other geminates are written with doubling
- **File:** words/eat.js line 89
- **Current:** `["சாப்பிடு", "saːpːiɖu"]`
- **Expected:** `["சாப்பிடு", "saːppiɖu"]` (minimal, conforms to the in-column majority) — or, if the team prefers the dataset-wide `Cː` direction taken for Hindi/Urdu in review #83, normalise the other four instead (`appaː`→`apːaː`, `ammaː`→`amːaː`, `nalla`→`nalːa`, `ʋaɳakkam`→`ʋaɳakːam`)
- **Why:** Mixed gemination notation for the same phonological object inside one column: `father.js` L89 அப்பா `appaː`, `mother.js` L89 அம்மா `ammaː`, `good.js` L89 நல்ல `nalla`, `hello.js` L89 வணக்கம் `ʋaɳakkam` all double the consonant letter, while *sāppiṭu* alone uses the length mark (`pː`). Closed reviews #31 and #83 each blessed one of the two notations in isolation (#31: "geminate /pː/ is correctly noted"; #31: kk "correctly doubled") without noticing they conflict; review #83's dev round did adjudicate `CC`→`Cː` for the hi/ur rows but left Tamil untouched. Whichever direction the team picks, the 4-vs-1 split inside `ta` should not stand; the one-edit fix is `saːppiɖu`.

---

### 13. `sw` — hello — *habari* still surface==IPA with no stress, against the adjudicated Swahili penult-stress convention
- **File:** words/hello.js line 110
- **Current:** `["habari", "habari"]`
- **Expected:** `["habari", "haˈbari"]`
- **Why:** Closed reviews #70/#78 adjudicated the Swahili treatment: byte-identical surface/IPA cells are the "lazy IPA" defect, and regular penultimate stress (Ashton 1944 §4) is to be shown — applied there to `moon.js` L110 `ˈmwezi` and `love.js` L110 `uˈpendo`. The column is now split: 2 cells carry the adjudicated stress mark, while trisyllabic *habari* — exactly the shape where the mark is informative — remains a byte-identical pair. Apply the same convention: `haˈbari`. (The same residue affects the remaining sw polysyllables, e.g. `moto`, `mama`, `kula`; I flag the two trisyllables where the mark carries real information and leave the set-wide sweep as a team decision, mirroring #74's Tagalog reasoning.)

---

### 14. `sw` — thanks — *asante* same surface==IPA / missing adjudicated stress as #13
- **File:** words/thanks.js line 110
- **Current:** `["asante", "asante"]`
- **Expected:** `["asante", "aˈsante"]`
- **Why:** Identical defect to #13 in a different file: trisyllabic, penult-stressed *asante* (Ashton 1944) sits as a byte-identical surface/IPA pair while its column siblings `ˈmwezi` and `uˈpendo` carry the stress mark that reviews #70/#78 established as the Swahili convention. Add the penult stress: `aˈsante`.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

All 14 findings are intra-language consistency fixes with named sibling evidence; every Current value and every cited sibling was re-verified verbatim against the live files. All 14 applied.

- **115-1 `th` father พ่อ `pʰɔː˨˩`→`pʰɔː˥˩`** — APPLIED (applied by orchestrator this round). Review #46's edit rested on a false class assignment: it called พ "high class." พ (pho phan) is a **LOW-class** consonant; its high-class counterpart is ผ (pho phung) (confirmed: thai-notes.com lesson 8 "Low Class Consonants: ล, ค, พ, ฟ, ฮ"; polytranslator Thai alphabet). Low class + mai ek = **falling** tone ˥˩. Internally consistent with the column's own แม่ (low ม + mai ek = `mɛː˥˩`, mother.js:79) and บ้าน `baːn˥˩`, and the three other Thai variety rows still carry the correct `pʰɔː˥˩` (father.js:192–194). The standard row was the lone outlier.
- **115-2 `vi` eye mắt `mak˧˥`→`mat˧˥`** — APPLIED. Northern/Hanoi register preserves final -t as [t]; -t→-k is the Southern feature, already encoded in vi_c. All other ⟨t⟩ codas in the vi column are [t] (moon mặt `mət`, one một `mot`, good tốt `tot`). Coda only changed.
- **115-3 `vi` moon trăng onset `taŋ`→`t͡ɕaŋ`** — APPLIED. ⟨tr⟩ as bare [t] is not a possible value in any variety; Hanoi merges ⟨tr⟩/⟨ch⟩ to [t͡ɕ], the adjudicated team norm (closed #16; sibling heart trái `t͡ɕaj`). Onset only.
- **115-4 `vi` sun trời onset `tɤːj`→`t͡ɕɤːj`** — APPLIED. Same defect as 115-3; onset only.
- **115-5 `nl` mother moeder `muːdər`→`mudər`** — APPLIED. Dutch /u/ is short except before /r/ (Gussenhoven 1999); column shows goed `xut` (short /u/) and vuur `vyːr` (long only because of /r/). /u/ before /d/, so length mark wrong.
- **115-6 `nl` love liefde `liːfdə`→`lifdə`** — APPLIED. Same rule on /i/ (⟨ie⟩ short except before /r/).
- **115-7 `hu` one egy `ɛɟ`→`ɛɟː`** — APPLIED. Citation *egy* ends in a geminate palatal stop [ɛɟː] (Siptár & Törkenczy 2000); the hu column marks gemination with ː everywhere (inni `inːi`, enni `ɛnːi`). Note: only the standard `hu` row changed; `ohu` (Old Hungarian) left as-is (out of this review's scope).
- **115-8 `fa` hello درود `doɾuːd`→`doruːd`** — APPLIED. Every other fa cell writes ر as plain `r`, including intervocalic (ɡorbe, xordæn, pedær, xorʃiːd). Lone tap conformed.
- **115-9 `fa` drink نوشیدن `nuːʃidæn`→`nuːʃiːdæn`** — APPLIED. The ـیدن suffix ی is the stable /iː/ the column marks elsewhere (xorʃiːd, xuːb); same word already marks its و as uː.
- **115-10 `ta` cat பூனை `puːnai`→`puːnaj`** — APPLIED. Offglide written `j` everywhere else in the ta column (kaj, naːj, idajam, suːɾijan). Transliteration residue.
- **115-11 `ta` house வீடு `viːɖu`→`ʋiːɖu`** — APPLIED. Tamil வ = [ʋ] (Keane 2004); the column's other வ word is ʋaɳakkam. Lone fricative-letter spelling conformed.
- **115-12 `ta` eat சாப்பிடு `saːpːiɖu`→`saːppiɖu`** — APPLIED (minimal one-edit fix). The ta column's four other geminates double the consonant (appaː, ammaː, nalla, ʋaɳakkam); only this cell used the length mark. Closed #83 adjudicated CC→Cː for hi/ur but explicitly left Tamil untouched, so the Tamil column's own 4-cell CC majority is the house style to conform to.
- **115-13 `sw` hello habari `habari`→`haˈbari`** — APPLIED. Penult-stress + non-byte-identical IPA is the adjudicated Swahili treatment (closed #70/#78; siblings ˈmwezi, uˈpendo). Trisyllabic, so the mark is informative.
- **115-14 `sw` thanks asante `asante`→`aˈsante`** — APPLIED. Same convention; note `rwk asante` (a different language) left untouched.

Open items left for reviewer: none.

---

## Reviewer round-2 response (再評価 round-2)

I re-verified all 14 claimed fixes against the live `words/*.js` files on 2026-06-11 (grep, exact-string). Every "APPLIED" claim is genuinely present in the data, with the correct target value, and every sibling cell I cited as evidence still carries the value my original review relied on. Per-item:

1. **th father พ่อ** — ✓ accept. `father.js:79` now `["พ่อ", "pʰɔː˥˩"]`. Tone-class reasoning confirmed: พ is low-class, low+mai-ek=falling. Siblings live: `mother.js:79` แม่ `mɛː˥˩` (verified), `house.js` บ้าน `baːn˥˩`, and the three other Thai rows `father.js:192–194` all `pʰɔː˥˩`. Standard row no longer an outlier.
2. **vi eye mắt** — ✓ accept. `eye.js:76` `["mắt","mat˧˥"]`; `vi_s`/`vi_c` keep their Southern -k reflexes, correctly untouched.
3. **vi moon trăng** — ✓ accept. `moon.js:76` `mət˨˩ t͡ɕaŋ˥`. Sibling `heart.js:76` trái `t͡ɕaːj˧˥` (verified) confirms the ⟨tr⟩→t͡ɕ norm.
4. **vi sun trời** — ✓ accept. `sun.js:76` `mət˨˩ t͡ɕɤːj˨˩`; onset only changed, vowel/tone intact.
5. **nl mother moeder** — ✓ accept. `mother.js:160` `mudər`. `af` cognate at L288 correctly left long (separate language). Siblings `good.js:160` `xut`, `fire.js:160` `vyːr` confirm the pre-/r/-only length rule.
6. **nl love liefde** — ✓ accept. `love.js:160` `lifdə`.
7. **hu one egy** — ✓ accept. `one.js:157` `ɛɟː`; `ohu` (Old Hungarian, L158) correctly left as `ɛɟ` — out of scope. Siblings `inːi`/`ɛnːi` verified.
8. **fa hello درود** — ✓ accept. `hello.js:106` `doruːd`; `fa_clas` (L896) `duruːd` correctly untouched (different lemma/register).
9. **fa drink نوشیدن** — ✓ accept. `drink.js:106` `nuːʃiːdæn`. Sibling `sun.js:106` خورشید `xorʃiːd`, `good.js:106` خوب `xuːb` confirm the stable-vowel length convention. `prs` (L108) is a distinct row, correctly untouched.
10. **ta cat பூனை** — ✓ accept. `cat.js:89` `puːnaj`. Sibling `hand.js:89` கை `kaj` verified.
11. **ta house வீடு** — ✓ accept. `house.js:89` `ʋiːɖu`. Sibling `hello.js:89` வணக்கம் `ʋaɳakkam` verified.
12. **ta eat சாப்பிடு** — ✓ accept. `eat.js:89` `saːppiɖu`, conforming to the in-column CC majority (`appaː`, `ammaː`, `nalla`, `ʋaɳakkam` — all verified). The one-edit minimal fix is the correct choice given #83 left Tamil out of its Cː sweep.
13. **sw hello habari** — ✓ accept. `hello.js:110` `haˈbari`. Siblings `moon.js:110` `ˈmwezi`, `love.js:110` `uˈpendo` verified; other-language Swahili-loan rows (`ksb`,`jmc`,`asu`,`ny`,`tum`,`toi`) correctly left byte-identical.
14. **sw thanks asante** — ✓ accept. `thanks.js:110` `aˈsante`; `rwk asante` (L117, different language) correctly untouched.

### New issues
None. Verification surfaced no new errors; the worker correctly scoped every edit to the standard target row and left sibling-language/register rows alone.

### Scorecard
- Accept (✓): 14 / 14
- Partial (△): 0
- Reject (✗): 0
- New issues: 0

All 14 fixes are linguistically sound, present in live data, and scoped correctly. Nothing remains for the dev team.

**File status: CLOSED** — nothing left to address.
