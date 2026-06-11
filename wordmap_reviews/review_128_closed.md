# Wordmap review #128 — Dravidian round-3 auditor (Tamil/Telugu/Kannada/Malayalam)

## Reviewer self-introduction (ペルソナ自己紹介)

I am reviewer #128, a Dravidianist brought back for a third-round audit of the South-Dravidian and minor-Dravidian columns of the Wordmap dataset (`ta` Tamil, `te` Telugu, `kn` Kannada, `ml` Malayalam, plus the minor codes `tcy` Tulu, `brh` Brahui, and the Indo-Aryan `kok` Konkani that travels with this regional block). I know this project's data model intimately — each `words/<concept>.js` exposes `WORDS.<concept> = { label, definition, data:{ <code>: ["surface","ipa"], … } }`, the IPA slot must carry broad-phonemic IPA and not a romanization (`docs/words/CONTRIBUTING.md`), and language codes follow `docs/words/LANG_CODES.md`. Because this is wave 12 and reviews #01–120 are all closed, I grepped `wordmap_reviews/*_closed.md` for every candidate before committing it, so as not to re-litigate adjudicated decisions: I deliberately do **not** re-report the Tamil phonetic-voiced-allophone convention (`kaːdal`, `kuɖi`, `saːppiɖu` — held system-wide by #31), the Tamil ன்ற romanization-style clusters `ondru`/`nanri` (held by #31/#83 as a convention call with no single unambiguous target), the `te əɡni` Sanskrit-loan editorial note (#31), the te/kn/tcy schwa-vs-`a` inherent-vowel split on `namaskaːɾa` (#31, editorial), the brh `kann` 'eye' lexeme question (held by #31 pending a Brahui dictionary), or the te/kn/ml `ɦ`-onset of *hṛdayam* (held by #31 as a systematic choice). For the linguistics I lean on **Krishnamurti (2003) _The Dravidian Languages_** (the inherent-vowel centralization, the ட/ட்ட and ర/ఱ retroflex series, the ल/ळ ⇄ ಲ/ಳ dental-vs-retroflex lateral contrast), **Asher & Kumari (1997) _Malayalam_** (the samvṛtōkāram half-vowel, the chillu letters, and single-vs-geminate ട), and the closed adjudications of **reviews #31 and #83**. The issues below are the sharp residue those passes did not reach: they are all either an IPA symbol that contradicts its own surface grapheme, or a single cell that breaks its own language's house style. Every "Current" value was copied verbatim from the live file at the cited line and re-verified by grep (and, where a Kannada/Tulu lateral was at stake, by Unicode codepoint) on 2026-06-11.

---

## Issues found

### 1. `tcy` — heart — retroflex `ɭ` written for the dental letter ಲ
- **File:** words/heart.js line 998
- **Current:** `["ಕಂಜೆಲ್", "kandʒeɭ"]`
- **Expected:** `["ಕಂಜೆಲ್", "kandʒel"]`
- **Why:** The final glyph of ಕಂಜೆಲ್ is ಲ (U+0CB2, the **dental/alveolar** LA = /l/) plus virama — not the retroflex ಳ (U+0CB3, LLA = /ɭ/). The dataset distinguishes the two letters correctly everywhere else in the Tulu column: tcy moon `ತಿಂಗೊಳು` carries the *retroflex* ಳ and is rightly transcribed `tiŋɡoɭu` (moon.js:1004), while tcy good `ಪೊರ್ಲು` carries the *dental* ಲ and is rightly `poɾlu` (good.js:998). The heart cell is the lone place where ಲ is mis-mapped to retroflex `ɭ`. (Krishnamurti 2003 §3.2.4 on the phonemic ल/ळ contrast.) Fix the IPA to `kandʒel`.

---

### 2. `ml` — house — spurious geminate `ʈː` on a single ட
- **File:** words/house.js line 227
- **Current:** `["വീട്", "ʋiːʈː"]`
- **Expected:** `["വീട്", "ʋiːʈə"]`
- **Why:** വീട് *vīṭ(ŭ)* 'house' contains a **single** retroflex ട /ʈ/, not the geminate ട്ട /ʈʈ/ — there is no doubling in the orthography to license the length mark `ː`. The gemination `ʈː` is therefore phonetically wrong (Asher & Kumari 1997 §2: *vīṭ* has one ʈ). Worse, it is internally inconsistent: the dataset reserves `ː` on Malayalam laterals/nasals strictly for *genuinely doubled* glyphs — eye `കണ്ണ്` ണ്ണ → `kəɳːə` (eye.js:220) and one `ഒന്ന്` ന്ന → `onːə` (one.js:226). Those two sibling cells also model the correct treatment of the word-final virama consonant: the samvṛtōkāram half-vowel is written `ə`. House should follow them: a single `ʈ` plus the final `ə`, i.e. `ʋiːʈə`.

---

### 3. `kn` — house — short ఎ written `ɛ`, the lone non-`e` outlier
- **File:** words/house.js line 226
- **Current:** `["ಮನೆ", "mənɛ"]`
- **Expected:** `["ಮನೆ", "məne"]`
- **Why:** The short front vowel ಎ /e/ of ಮನೆ is the same phoneme the Kannada column transcribes as `e` in every other cell: cat `ಬೆಕ್ಕು` `bekːu` (cat.js:219), fire `ಬೆಂಕಿ` `beŋkɪ` (fire.js:225), good `ಒಳ್ಳೆಯ` `oɭːejə` (good.js:219). `mənɛ` is the only Kannada row that lowers it to `ɛ`. Telugu — the closest sibling system — uses no `ɛ` at all. This is a one-cell quality flip with no phonological motivation (Krishnamurti 2003 §2.2: Kannada short /e/); normalize to `məne`.

---

### 4. `tcy` — sun — rhotic written `r` instead of the tap `ɾ`
- **File:** words/sun.js line 1004
- **Current:** `["ಸೂರ್ಯ", "suːrja"]`
- **Expected:** `["ಸೂರ್ಯ", "suːɾja"]`
- **Why:** The Dravidian ర/ರ is a tap [ɾ] (Krishnamurti 2003 §2.3), and the Tulu column transcribes it as `ɾ` in almost every cell: good `poɾlu` (good.js:998), drink `paɾpini` (drink.js:998), love `pɾiːti` (love.js:1005), tree `maɾa` (tree.js:998), hello `namaskaːɾa` (hello.js:991). Sun `suːrja` uses the *trill* symbol `r` instead — the only deviation besides water (see #5). It is also out of step with the identical-script Kannada cell `ಸೂರ್ಯ` `suːɾjə` (sun.js:225), which correctly has `ɾ`. Fix to `suːɾja`.

---

### 5. `tcy` — water — same rhotic `r`→`ɾ` slip
- **File:** words/water.js line 998
- **Current:** `["ನೀರ್", "niːr"]`
- **Expected:** `["ನೀರ್", "niːɾ"]`
- **Why:** The companion deviation to #4. ನೀರ್ ends in the tap ರ, which the rest of the Tulu column writes `ɾ`, and which the cognate Tamil cell already writes correctly: ta water `நீர்` `niːɾ` (water.js:89). (Review #31 issue 25 discussed only the *lexeme* cognancy of this Tulu row, quoting `/niːr/`, and did not touch the `r`/`ɾ` symbol choice — so this is not a re-litigation.) Bring the rhotic in line with the column: `niːɾ`.

---

### 6. `tcy` — cat — unmarked geminate ಚ್ಚ and a short final ఎ
- **File:** words/cat.js line 998
- **Current:** `["ಪುಚ್ಚೆ", "putʃe"]`
- **Expected:** `["ಪುಚ್ಚೆ", "puttʃeː"]`
- **Why:** Two slips in one cell. (a) ಪುಚ್ಚೆ contains the **geminate** affricate ಚ್ಚ /tːʃ ~ ttʃ/, but the IPA `putʃe` shows a single `tʃ`. The Tulu column marks gemination by *doubling* the segment — father `ಅಪ್ಪೆ` → `appeː` (father.js:998), mother `ಅಮ್ಮೆ` → `ammeː` (mother.js:1004), house `ಇಲ್ಲ್` → `ill` (house.js:1005) — so the geminate affricate should be doubled: `puttʃ…`. (b) The final ఎ here is the same long-rendered vowel that father/mother give as `eː`; cat alone drops it to short `e`. Aligning both: `puttʃeː`. (Krishnamurti 2003 §2.4 on Tulu final-vowel length.)

---

### 7. `brh` — mother — gemination doubled where Brahui's house style uses `ː`
- **File:** words/mother.js line 852
- **Current:** `["لمّا", "lummaː"]`
- **Expected:** `["لمّا", "lumːaː"]`
- **Why:** The shadda (ّ) on لمّا marks a geminate /mm/, exactly as the shadda on کنّا (eat) and پنّنگ (drink) does. Brahui's own cells render that shadda-geminate with the length mark `ː`: eat `kunːa` (eat.js:839), drink `pinːinɡ` (drink.js:846) — and this matches the broad non-Tamil Dravidian house style throughout the dataset (te `kukːə`, `naːnːə`; kn `tɪnːu`, `kəɳːu`; ml `kəɳːə`, `onːə`). Mother `lummaː` is the one Brahui cell that *doubles* the consonant instead, making it the outlier. (I leave the held `brh` eye `kann` aside per #31; this is purely the gemination-notation normalization.) Fix to `lumːaː`.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

All seven findings verified against the live data; sibling evidence and (for 128-1) Unicode codepoints confirmed by grep/python on 2026-06-11.

- **128-1** `tcy` heart `kandʒeɭ`→`kandʒel`: applied (applied by orchestrator this round). Final glyph is ಲ (U+0CB2, dental LA=/l/), not retroflex ಳ (U+0CB3); verified by codepoint. Column maps ಲ→l (poɾlu) and ಳ→ɭ (tiŋɡoɭu) correctly elsewhere. Clean n=1 mis-map.
- **128-2** `ml` house `ʋiːʈː`→`ʋiːʈə`: applied (applied by orchestrator this round). വീട് has a single ട /ʈ/ (no orthographic doubling to license `ː`); `ː` is reserved for genuine geminates (kəɳːə, onːə), and the final virama half-vowel is written `ə`.
- **128-3** `kn` house `mənɛ`→`məne`: applied (applied by orchestrator this round). ಎ /e/ is `e` in every other kn cell (bekːu, beŋkɪ, oɭːejə); `ɛ` is unmotivated lone outlier.
- **128-4** `tcy` sun `suːrja`→`suːɾja`: applied (applied by orchestrator this round). Dravidian ర is tap [ɾ]; tcy writes `ɾ` everywhere (poɾlu, paɾpini, pɾiːti, maɾa); cognate kn `suːɾjə` agrees.
- **128-5** `tcy` water `niːr`→`niːɾ`: applied (applied by orchestrator this round). Same tap-rhotic slip; cognate ta `niːɾ` (water.js:89). Not a re-litigation of #31's lexeme discussion.
- **128-6** `tcy` cat `putʃe`→`puttʃeː`: applied (applied by orchestrator this round). Geminate ಚ್ಚ doubled per column style (appeː, ammeː), and final ఎ rendered long `eː` to match father/mother. Both slips fixed.
- **128-7** `brh` mother `lummaː`→`lumːaː`: applied (applied by orchestrator this round). Shadda-geminate is rendered with `ː` in brh (kunːa, pinːinɡ) and the broad non-Tamil Dravidian house style; *lummaː* is the lone doubled-consonant outlier. Held `brh` eye left untouched per #31.

Open items left for reviewer: none. All seven are clear n=1 outlier / orthographic-key corrections with same-column sibling evidence.

## Reviewer round-2 response (再評価 round-2)

I re-verified all seven applied fixes against the live `words/*.js` files by grep on 2026-06-11, and spot-checked the cited sibling cells. Every claimed value is actually present in the data.

- **128-1** `tcy` heart — ✓ ACCEPT. heart.js:998 now `["ಕಂಜೆಲ್", "kandʒel"]`. Final glyph ಲ (dental LA) correctly → `l`; sibling poɾlu (ಲ→l) / tiŋɡoɭu (ಳ→ɭ) confirm the key.
- **128-2** `ml` house — ✓ ACCEPT. house.js:227 now `["വീട്", "ʋiːʈə"]`. Single ட → single `ʈ`, samvṛtōkāram final `ə`, consistent with kəɳːə / onːə geminate convention.
- **128-3** `kn` house — ✓ ACCEPT. house.js:226 now `["ಮನೆ", "məne"]`. Short ಎ → `e` now matches every other kn cell; lone `ɛ` outlier removed. (Note kfa:372 `mane` is a different code, out of this review's scope.)
- **128-4** `tcy` sun — ✓ ACCEPT. sun.js:1004 now `["ಸೂರ್ಯ", "suːɾja"]`. Tap `ɾ` now agrees with cognate kn `suːɾjə` (sun.js:225) and the rest of the Tulu column.
- **128-5** `tcy` water — ✓ ACCEPT. water.js:998 now `["ನೀರ್", "niːɾ"]`. Tap-rhotic normalized; matches ta `niːɾ`. Distinct from the held #31 lexeme discussion.
- **128-6** `tcy` cat — ✓ ACCEPT. cat.js:998 now `["ಪುಚ್ಚೆ", "puttʃeː"]`. Geminate ಚ್ಚ doubled per father `appeː` / mother `ammeː` column style; final vowel lengthened to `eː` to match siblings.
- **128-7** `brh` mother — ✓ ACCEPT. mother.js:852 now `["لمّا", "lumːaː"]`. Shadda-geminate rendered `ː` consistent with brh eat `kunːa` / drink `pinːinɡ`; lone doubled-consonant outlier removed. Held `brh` eye untouched per #31.

New issues raised this round: none. Verification turned up no new contradictions.

### Scorecard
| Item | Verdict |
|------|---------|
| 128-1 tcy heart | ✓ accept |
| 128-2 ml house | ✓ accept |
| 128-3 kn house | ✓ accept |
| 128-4 tcy sun | ✓ accept |
| 128-5 tcy water | ✓ accept |
| 128-6 tcy cat | ✓ accept |
| 128-7 brh mother | ✓ accept |

All 7/7 fixes applied and verified in live data. Nothing held, deferred, or unsourceable remains.

**File status: CLOSED** — nothing left to address.
