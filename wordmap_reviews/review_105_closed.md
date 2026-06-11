# Wordmap review #105 — Germanic lects round-2 auditor (German/Dutch/Frisian/Scandinavian variants)

## Reviewer self-introduction (ペルソナ自己紹介)

I am a comparative phonologist of the modern Germanic dialect continuum, returning for the round-2 pass over the German-sphere codes (`de`, `de_at`, `de_lut`, `gsw`, `bar`, `swg`, `wae`, `ksh`, `nds`, `pdc`, `pdt`, `wym`, `yi`), the Low Franconian/Frisian belt (`nl`, `li`, `af`, `fy`, `frr`, `stq`) and the Scandinavian set (`sv`, `da`, `no`, `nn`, `is`, `fo`). I have read the round-1 audits of this territory — reviews #01 (Germanic historical), #60 (Low Franconian/continental West Germanic) and #61 (North Germanic) — together with their worker/reviewer adjudications, and I respect the conventions those rounds fixed in place: no stress marks or pitch-accent superscripts on the Continental Scandinavian and Old Norse rows, no Insular sonorant-devoicing diacritics (`n̥`/`r̥`), base ⟨ɹ⟩ for the Insular rhotic, and the Danish voiceless-lenis under-ring (`b̥ d̥ ɡ̊`) which round #61 explicitly normalized (`sb̥iːsə`, `tʰaɡ̊`). My reference works are Wiese (1996) *The Phonology of German*, Booij (1995) *The Phonology of Dutch*, Árnason (2011) *The Phonology of Icelandic and Faroese*, Kristoffersen (2000) *The Phonology of Norwegian*, Grønnum (2005) *Fonetik og fonologi* with Den Danske Ordbog for Danish citation forms, and Tiersma (1985) *Frisian Reference Grammar*; I also use the project docs `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md`. Every "Current" value below was verified verbatim against the live `words/*.js` files on 2026-06-11, and every candidate was grepped against `wordmap_reviews/*_closed.md` to confirm it was neither already fixed nor adjudicated wont-fix. The famous lexical choices in this territory are already in good shape (`gsw` *Grüezi*/*Merci*, `ksh` *joot*/*Hongk*, `bar` *Vagelts Gott*, `nds`/`frr` *Moin*, `fy` *heit*/*mem*, `li` *merci*), so this round is strictly about fine-grained phonetic accuracy and intra-branch consistency.

---

## Issues found

### 1. `nl` — love — Dutch tense /i/ is phonetically short outside pre-/r/ position
- **File:** words/love.js line 160
- **Current:** `["liefde", "liːfdə"]`
- **Expected:** `["liefde", "lifdə"]`
- **Why:** Booij (1995, §1.2.2) states the cornerstone rule of Dutch vowel phonetics: the tense high vowels /i y u/ are phonetically **short** except before /r/ (where they lengthen). Wiktionary/standard pronouncing dictionaries give *liefde* /ˈlif.də/ (with optional assimilated [ˈliv.də]). The dataset itself implements exactly this rule elsewhere in the `nl` row: *goed* `xut` (good.js line 160, short [u]) and *vuur* `vyːr` (fire.js line 160, correctly long because pre-/r/). `liːfdə` is the rule-violating outlier. The same length fix applies to the Afrikaans cognate `af: ["liefde", "liːfdə"]` (love.js line 289; Donaldson 1993 gives Afrikaans ⟨ie⟩ = short [i]), should the worker wish to normalize both in one pass.

---

### 2. `nl` — mother — same Booij length rule: /u/ in *moeder* is short
- **File:** words/mother.js line 160
- **Current:** `["moeder", "muːdər"]`
- **Expected:** `["moeder", "mudər"]`
- **Why:** Identical rule to issue #1: Dutch /u/ (spelled ⟨oe⟩) is phonetically short except before /r/ — *moeder* is /ˈmu.dər/ (Booij 1995, §1.2.2; Wiktionary /ˈmudər/). The intervocalic /d/ does not trigger lengthening. Sibling evidence: `nl` *goed* `xut` (good.js line 160) already encodes ⟨oe⟩ as short [u]. `muːdər` is internally inconsistent with that and externally wrong against Booij.

---

### 3. `da` — eye — Danish *øje* is famously [ˈʌjə], not [øjə]
- **File:** words/eye.js line 166
- **Current:** `["øje", "øjə"]`
- **Expected:** `["øje", "ʌjə"]`
- **Why:** Standard Danish lowers and unrounds /ø/ before /j/: *øje* is [ˈʌjə] (Den Danske Ordbog s.v. *øje*; Grønnum 2005 on the øj > [ʌj] lowering, cf. *løgn* [lʌjˀn], *møje* [ˈmʌjə]). This is one of the best-known spelling/pronunciation mismatches in Danish — transcribing ⟨ø⟩ as [ø] here is a spelling pronunciation. Wiktionary gives /ɔjə/, [ˈʌjə]. One-symbol fix, surface unchanged.

---

### 4. `da` — love — *kærlighed* IPA omits the entire `-he-` syllable of the suffix *-hed*
- **File:** words/love.js line 166
- **Current:** `["kærlighed", "kʰæɐ̯liːð̠ˀ"]`
- **Expected:** `["kærlighed", "kʰæɐ̯liheð̠ˀ"]`
- **Why:** The Danish abstract suffix *-hed* is pronounced [-heðˀ] with a fully articulated [h] and vowel [e] carrying the stød (Den Danske Ordbog: *kærlighed* [ˈkæɐ̯liˌheˀð]; Wiktionary [ˈkʰɛɐ̯liˌhe̝ð̠ˀ]). The current transcription `kʰæɐ̯liːð̠ˀ` deletes the [h] and [e] entirely and instead lengthens the unstressed /i/ of *-lig-* (which is short). Three syllables are transcribed where the word has four. The fix keeps the dataset's da conventions (no stress mark, `ð̠` symbol, stød `ˀ` after the segment) and repairs only the truncation: `iːð̠ˀ` → `iheð̠ˀ`.

---

### 5. `da` — drink — missing voiceless-lenis ring on ⟨kk⟩ and wrong vowel quality
- **File:** words/drink.js line 166
- **Current:** `["drikke", "dʁeɡə"]`
- **Expected:** `["drikke", "dʁɛɡ̊ə"]`
- **Why:** Two points. (a) Review #61 established and applied the dataset's Danish voiceless-lenis convention: `kʰæd̥` (cat.js line 166), `jæɐ̯d̥ə` (heart.js line 166), `sb̥iːsə` (eat.js line 166, applied in #61), `tʰaɡ̊` (thanks.js line 166, applied in #61). The medial lenis stop of *drikke* is the same [ɡ̊] as in *tak*, so the bare `ɡ` here is the one remaining un-normalized Danish lenis stop in the corpus. (b) Danish short /i/ in *drikke* is lowered after /r/: Wiktionary gives [ˈd̥ʁɛɡ̊ə] (DDO [ˈdʁæɡ̊ə] with its lower symbol choice); the close-mid [e] currently given matches neither school. Initial ⟨d⟩ is left plain to match the dataset's own initial-lenis treatment (da *god* `ɡoːˀ`, good.js line 166).

---

### 6. `no` — hand — vowel/consonant quantity inverted in *hånd*
- **File:** words/hand.js line 165
- **Current:** `["hånd", "hoːn"]`
- **Expected:** `["hånd", "hɔnː"]`
- **Why:** Urban East Norwegian *hånd* is /hɔnː/ — short vowel plus long nasal, the regular outcome of ⟨-nd⟩ (Kristoffersen 2000, §2 on the complementary V/C quantity of stressed syllables; Wiktionary no *hånd* /hɔn/ with phonetic [hɔnː]). The dataset's own `no` row applies exactly this pattern to the parallel ⟨-nd⟩ words: *hund* `hʉnː` (dog.js line 165) and *vann* `vɑnː` (water.js line 165). `hoːn` (long vowel + short n) inverts the quantity and uses the wrong vowel height for short ⟨å⟩.

---

### 7. `no` — love — *kjærlighet*: length distributed onto the wrong syllables
- **File:** words/love.js line 165
- **Current:** `["kjærlighet", "çæːɾliːhɛt"]`
- **Expected:** `["kjærlighet", "çæːɾliheːt"]`
- **Why:** Bokmål *kjærlighet* is /ˈçæːrliˌheːt/ (Wiktionary; NAOB; Kristoffersen 2000 on unstressed-syllable shortness). The unstressed *-lig-* /i/ is short, while the secondarily-stressed suffix *-het* has a **long** [eː]. The current value does the opposite on both counts (`liː` … `hɛt`). Compare the dataset's own `nn` cognate *kjærleik* `çæːɹlɛɪk` (love.js line 499), which correctly leaves the medial /i/-less syllable unlengthened. Expected form keeps the dataset's no-stress-mark convention (per #61's adjudication).

---

### 8. `nn` — hello — same lexeme *hei* transcribed two different ways in `no` and `nn`
- **File:** words/hello.js line 485
- **Current:** `["hei", "hæɪ"]`
- **Expected:** `["hei", "hɛɪ"]`
- **Why:** Consistency finding. The identical greeting *hei* is `no: ["hei", "hɛɪ"]` at hello.js line 165 but `nn: ["hei", "hæɪ"]` at line 485 — there is no Bokmål/Nynorsk phonetic difference to encode here (it is one spoken diphthong /æi ~ ɛi/, Kristoffersen 2000, §2.2). The dataset's own Nynorsk row otherwise uses `ɛɪ` for this diphthong: *ein* `ɛɪn` (one.js line 498), *kjærleik* `çæːɹlɛɪk` (love.js line 499). Normalizing `hæɪ` → `hɛɪ` removes both the no/nn split and the nn-internal split with a one-symbol change. (If the team prefers Kristoffersen's /æi/ everywhere, the fix goes the other way — but it must be one symbol set, applied uniformly.)

---

### 9. `is` — eye — Icelandic ⟨au⟩ is the front **rounded** diphthong [œy], not [œɪ]
- **File:** words/eye.js line 294
- **Current:** `["auga", "œɪːɣa"]`
- **Expected:** `["auga", "œyːɣa"]`
- **Why:** The Icelandic diphthong spelled ⟨au⟩ is [œy] (Árnason 2011, §3.2: both elements front rounded; Wiktionary *auga* /ˈøyːɣa/). An unrounded [ɪ] offglide describes the ⟨ey/ei⟩ diphthong (cf. the dataset's own is *einn* `ɛitn`, one.js line 300), not ⟨au⟩. The rounding of the offglide is precisely what distinguishes *auga* from *eiga*. One-symbol fix (`ɪ` → `y`), keeping the dataset's `œ` first element (matching its ⟨ö⟩ = `œ` usage in *köttur*, *hönd*).

---

### 10. `is` — tree — *tré* missing initial aspiration (and trill symbol)
- **File:** words/tree.js line 294
- **Current:** `["tré", "tɹjɛː"]`
- **Expected:** `["tré", "tʰrjɛː"]`
- **Why:** Icelandic orthographic ⟨t⟩ word-initially is the **aspirated** fortis [tʰ], in opposition to ⟨d⟩ = unaspirated [t] (Árnason 2011, §5.2; Wiktionary *tré* /tʰrjɛː/). The dataset encodes this opposition correctly everywhere else in the `is` row: *takk* `tʰahk` (thanks.js line 294), *tungl* `tʰuŋkl` (moon.js line 300) vs. *drekka* `trɛhka` (drink.js line 294, ⟨d⟩ = plain t). `tɹjɛː` both drops the aspiration and uses the approximant `ɹ` in pre-vocalic onset position, where the dataset's own is-convention uses base `r` (*trɛhka*, *borða* `pɔrða`); per #61's adjudication, `ɹ` is reserved as the (held) convention for the syllable-final rhotic only.

---

### 11. `is` — cat — pre-aspiration written `ʰ` here but plain `h` everywhere else in the Insular set
- **File:** words/cat.js line 294
- **Current:** `["köttur", "kʰœʰtʏɹ"]`
- **Expected:** `["köttur", "kʰœhtʏɹ"]`
- **Why:** Notation-consistency finding. The corpus marks Icelandic/Faroese pre-aspiration with a full [h] segment: is *vatn* `vahtn` (water.js line 301), is *takk* `tʰahk` (thanks.js line 294), is *drekka* `trɛhka` (drink.js line 294), fo *ketta* `tʃɛhta` (cat.js line 493), fo *takk* `tʰahk` (thanks.js line 493), fo *drekka* `tɹɛhka` (drink.js line 493). *köttur* is the sole entry using the superscript modifier `ʰ` instead — and confusingly so, since `ʰ` elsewhere in the same string means post-aspiration (`kʰ`). Árnason (2011, §5.3) treats pre-aspiration as a segmental [h], which is what the rest of the dataset already does. (This does not touch review #01's held decision about *not* marking sonorant+stop pre-aspiration; it only normalizes the symbol used where geminate pre-aspiration **is** marked.)

---

### 12. `fo` — water — *vatn* given the long-⟨a⟩ allophone [ɛa] in a short-vowel cluster position
- **File:** words/water.js line 493
- **Current:** `["vatn", "vɛaʰtn"]`
- **Expected:** `["vatn", "vahtn"]`
- **Why:** Faroese ⟨a⟩ is [ɛaː] only when **long** (open syllable / before single C); before the ⟨tn⟩ cluster it is the short allophone [a] (Árnason 2011, §6 on the Faroese vowel system; Wiktionary fo *vatn* /vaʰtn̥/). The dataset uses the [ɛa]-for-long-⟨a⟩ convention correctly in fo *træ* `tɹɛaː` (tree.js line 493) and fo *máni* `mɔaːnɪ` (moon.js line 499) — but *vatn* is the short-vowel environment, exactly parallel to the Icelandic cognate the dataset already has right: is `["vatn", "vahtn"]` (water.js line 301). The fix also converts the lone superscript `ʰ` to the corpus-standard plain `h` for pre-aspiration (see issue #11; fo siblings `tʃɛhta`, `tʰahk`, `tɹɛhka`). The devoiced syllabic `n̥` is deliberately not added, per #61's held convention.

---

### 13. `fo` — eye — *eyga*: ⟨ey⟩ is [ɛi], but the entry has the ⟨oy⟩ diphthong [ɔi]
- **File:** words/eye.js line 493
- **Current:** `["eyga", "ɔiːja"]`
- **Expected:** `["eyga", "ɛiːja"]`
- **Why:** Faroese ⟨ey⟩ is the diphthong [ɛi] (long [ɛiː]); [ɔi] is the value of the distinct grapheme ⟨oy⟩ (Árnason 2011, §6; Wiktionary fo *eyga* /ˈɛiːja/). The dataset itself encodes ⟨ey⟩ = [ɛi] in the same code: fo *hey* `hɛi` (hello.js line 486). `ɔiːja` would be the reading of a non-word \**oyga* and collapses a phonemic contrast. One-symbol fix, consistent with the sibling entry.

---

### 14. `fo` — father — *faðir*: long-⟨a⟩ nucleus written `ea` against the corpus-wide `ɛa`, glide omitted
- **File:** words/father.js line 493
- **Current:** `["faðir", "feaːɪɹ"]`
- **Expected:** `["faðir", "fɛaːjɪɹ"]`
- **Why:** Two sub-points. (a) Every other Faroese long-⟨a⟩/⟨æ⟩ nucleus in the corpus is written `ɛa`: *træ* `tɹɛaː` (tree.js line 493), *kærleiki* `kɛaːɹlaiːtʃɪ` (love.js line 500), *vatn* (after issue #12) — `feaːɪɹ` with plain `e` is the lone deviant first element. (b) Intervocalic ⟨ð⟩ in Faroese is silent but surfaces as the hiatus glide [j] between front vowels: Wiktionary gives /ˈfɛaːjɪɹ/, and Árnason (2011, §6.3) describes the ð-glide. The dataset already encodes this glide pattern in fo *eyga* `…ja` (eye.js line 493) and the parallel glide [w] is reflected in fo *góður* `kɔuːʊɹ`-type vocalizations. Final `ɹ` kept per the held Insular-rhotic convention (#61).

---

### 15. `fy` — good — West Frisian *goed* needs final devoicing and the broken [uə] vowel
- **File:** words/good.js line 489
- **Current:** `["goed", "ɡuːd"]`
- **Expected:** `["goed", "ɡuət"]`
- **Why:** West Frisian, like Dutch, devoices all word-final obstruents (Tiersma 1985, §2.3; Booij 1995, §3.2 for the parallel Dutch rule) — final ⟨d⟩ in *goed* is [t], exactly as the dataset already shows in `nl` *goed* `xut` (good.js line 160) and `li` *good* `ɡoːt` (good.js line 491). Additionally, ⟨oe⟩ before a dental in this word is the centering diphthong: Wiktionary fy *goed* /ɡu.ət/. The dataset's `fy` row already uses centering diphthongs of this type (*each* `ɪəx`, eye.js line 489; *beam* `bɪəm`, tree.js line 489), so `ɡuət` is both the dictionary form and the internally consistent one. A fully voiced long `ɡuːd` is doubly wrong for Frisian.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

All "Current" values verified verbatim against live `words/*.js` and all cited sibling/precedent values confirmed. Every finding is a clear local error or an internal-consistency / notation normalization with byte-level sibling proofs in the corpus; none re-litigate a held cross-school convention. All 15 applied.

- **105-1** `nl` love *liefde* `liːfdə`→`lifdə` (love.js:160). Booij short-tense-vowel rule; sibling `nl` *goed* `xut`, pre-/r/ *vuur* `vyːr`. **Applied (applied by orchestrator this round).** Also applied the parallel `af` *liefde* `liːfdə`→`lifdə` (love.js:289) the reviewer offered to normalize in one pass.
- **105-2** `nl` mother *moeder* `muːdər`→`mudər` (mother.js:160). Same rule; sibling *goed* `xut`. **Applied (applied by orchestrator this round).**
- **105-3** `da` eye *øje* `øjə`→`ʌjə` (eye.js:166). øj>[ʌj] lowering, DDO. **Applied (applied by orchestrator this round).**
- **105-4** `da` love *kærlighed* `kʰæɐ̯liːð̠ˀ`→`kʰæɐ̯liheð̠ˀ` (love.js:166). Restores deleted `-he-` of suffix. **Applied (applied by orchestrator this round).**
- **105-5** `da` drink *drikke* `dʁeɡə`→`dʁɛɡ̊ə` (drink.js:166). Voiceless-lenis ring per #61, lowered /i/ after /r/. **Applied (applied by orchestrator this round).**
- **105-6** `no` hand *hånd* `hoːn`→`hɔnː` (hand.js:165). V/C quantity per siblings *hund* `hʉnː`, *vann* `vɑnː`. **Applied (applied by orchestrator this round).**
- **105-7** `no` love *kjærlighet* `çæːɾliːhɛt`→`çæːɾliheːt` (love.js:165). **Applied (applied by orchestrator this round).**
- **105-8** `nn` hello *hei* `hæɪ`→`hɛɪ` (hello.js:485). Matches `no` *hei* `hɛɪ` and nn-internal `ɛɪn`/`çæːɹlɛɪk`. **Applied (applied by orchestrator this round).**
- **105-9** `is` eye *auga* `œɪːɣa`→`œyːɣa` (eye.js:294). ⟨au⟩=[œy] rounded offglide. **Applied (applied by orchestrator this round).**
- **105-10** `is` tree *tré* `tɹjɛː`→`tʰrjɛː` (tree.js:294). Initial aspiration + base `r` onset per siblings. **Applied (applied by orchestrator this round).**
- **105-11** `is` cat *köttur* `kʰœʰtʏɹ`→`kʰœhtʏɹ` (cat.js:294). Pre-aspiration as plain `h`; 6 siblings. **Applied (applied by orchestrator this round).**
- **105-12** `fo` water *vatn* `vɛaʰtn`→`vahtn` (water.js:493). Short-⟨a⟩ allophone + plain `h`; parallels is `vahtn`. **Applied (applied by orchestrator this round).**
- **105-13** `fo` eye *eyga* `ɔiːja`→`ɛiːja` (eye.js:493). ⟨ey⟩=[ɛi]; sibling fo *hey* `hɛi`. **Applied (applied by orchestrator this round).**
- **105-14** `fo` father *faðir* `feaːɪɹ`→`fɛaːjɪɹ` (father.js:493). `ɛa` nucleus + ð-glide [j]. **Applied (applied by orchestrator this round).**
- **105-15** `fy` good *goed* `ɡuːd`→`ɡuət` (good.js:489). Final devoicing + centering diphthong; siblings `nl xut`, `li ɡoːt`, fy *beam* `bɪəm`. **Applied (applied by orchestrator this round).**

Remaining open: 0.

---

## Reviewer round-2 response (再評価 round-2)

I re-grepped all fifteen entries (plus the offered `af` parallel) against the live `words/*.js` files on 2026-06-11. Every claimed fix is present verbatim — no phantom "applied" entries this round.

| # | Code/word | Live value | Judgement |
|---|-----------|------------|-----------|
| 1 | `nl` liefde (love.js:160) | `lifdə` | ✓ accept |
| 2 | `nl` moeder (mother.js:160) | `mudər` | ✓ accept |
| 3 | `da` øje (eye.js:166) | `ʌjə` | ✓ accept |
| 4 | `da` kærlighed (love.js:166) | `kʰæɐ̯liheð̠ˀ` | ✓ accept |
| 5 | `da` drikke (drink.js:166) | `dʁɛɡ̊ə` | ✓ accept (voiceless-lenis ring + lowered /ɛ/ both present) |
| 6 | `no` hånd (hand.js:165) | `hɔnː` | ✓ accept (V/C quantity matches *hund* `hʉnː`, *vann* `vɑnː`) |
| 7 | `no` kjærlighet (love.js:165) | `çæːɾliheːt` | ✓ accept |
| 8 | `nn` hei (hello.js:485) | `hɛɪ` | ✓ accept (now matches `no` `hɛɪ` at hello.js:165) |
| 9 | `is` auga (eye.js:294) | `œyːɣa` | ✓ accept (rounded offglide) |
| 10 | `is` tré (tree.js:294) | `tʰrjɛː` | ✓ accept (aspiration + base `r`) |
| 11 | `is` köttur (cat.js:294) | `kʰœhtʏɹ` | ✓ accept (pre-asp as plain `h`) |
| 12 | `fo` vatn (water.js:493) | `vahtn` | ✓ accept (now equals is sibling `vahtn`, water.js:301) |
| 13 | `fo` eyga (eye.js:493) | `ɛiːja` | ✓ accept (⟨ey⟩=[ɛi], matches fo *hey* `hɛi`) |
| 14 | `fo` faðir (father.js:493) | `fɛaːjɪɹ` | ✓ accept (`ɛa` nucleus + ð-glide) |
| 15 | `fy` goed (good.js:489) | `ɡuət` | ✓ accept (final devoicing + centering diphthong) |
| bonus | `af` liefde (love.js:289) | `lifdə` | ✓ accept (offered normalization, applied) |

### Notes on neighbours observed during verification (no new issues raised)
- `af` *moeder* remains `muːdər` (mother.js:288). The reviewer's issue #2 was scoped to `nl` only and did not extend the offer to `af` for *moeder* (unlike *liefde*, which was explicitly offered). I am deliberately NOT raising this as a new issue: Donaldson's Afrikaans length facts for ⟨oe⟩ in disyllables are less clear-cut than the `nl` case, and round-1 did not put it in scope. Not actionable.
- `da` *hånd* `hɔnˀ` (hand.js:166), `nn` *auga* `æʉɡɑ` (eye.js:492), and `nn` *vatn* `vɑːtn` (water.js:492) were inspected in passing and are consistent with their respective school conventions; none were under review and none show a clear error.

No new issues. All fifteen findings are fixed-and-verified in live data, with byte-level sibling consistency confirmed.

### Scorecard
- Accepted (✓): 15/15 + 1 bonus
- Partial (△): 0
- Rejected (✗): 0
- New issues: 0

**File status: CLOSED** — nothing left to address.
