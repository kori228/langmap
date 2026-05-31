# Wordmap review #67 — Australian Aboriginal languages specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a documentary linguist specialising in the phonology and practical orthographies of Australian Aboriginal languages, with field and archival experience across the Western Desert dialect chain (Pitjantjatjara, Pintupi-Luritja, Ngaanyatjarra), Warlpiri and the Ngumpin–Yapa group, the Arandic languages (Mparntwe/Eastern and Western Arrernte), the Pilbara Ngayarda group (Nyamal and neighbours), and the south-west Nyungar (Noongar) revitalisation varieties. My core references for this review are R. M. W. Dixon, *Australian Languages: Their Nature and Development* (Cambridge, 2002) — especially the chapters on the pan-Australian consonant inventory, the four-coronal series, and the absence of a phonemic voicing contrast — and the experimental-phonetics work of Andrew Butcher (notably "Australian Aboriginal Languages: Consonant-Salient Phonologies and the 'Place-of-Articulation Imperative'", 2006, and his EPG/EMA studies of Arrernte and Pitjantjatjara coronals with Marija Tabain). For the Arandic vowel system I lean on Breen & Pensalfini (1999) "Arrernte: A Language with No Syllable Onsets" and Harold Koch's Arandic descriptions; for Nyungar, the Bindjareb/Wadjak orthographic conventions of the Noongar Boodjar dictionary tradition. The recurring problems below cluster around four well-known pitfalls in transcribing these languages: (a) the **four-way coronal contrast** and homorganic-cluster assimilation (retroflex `rt/rn/rl` vs alveolar `t/n/l` vs dental `th/nh/lh` vs palatal `tj/ny/ly`); (b) the **velar-nasal initial** [ŋ]; (c) the **total lack of a voicing contrast** in stops; and (d) the Arandic **reduced central-vowel system**, where orthographic ⟨e⟩ is a schwa.

---

## Issues found

### 1. `pjt` — hello — `ly` digraph is palatal lateral [ʎ], not [lj]
- **File:** `words/hello.js` line 688
- **Current:** `["palya", "palja"]`
- **Expected:** `["palya", "paʎa"]`
- **Why:** In the standardised Western Desert orthography the digraph ⟨ly⟩ represents the **single laminal-palatal lateral phoneme** /ʎ/, not a cluster of alveolar /l/ + glide /j/. *palya* "good/fine/hello" is /paʎa/ throughout Pitjantjatjara (Dixon 2002, §2.3 on the palatal lateral as a member of the four-way lateral series; Tabain & Butcher EPG work on Pitjantjatjara laterals). The sequence [lj] would wrongly imply two segments and an alveolar place. Note the dataset already transcribes the identical form correctly as [paʎa] for `nha`, `olg`, `adt` and `wbt` (e.g. `words/hello.js` lines 692–697), so `pjt`/`piu` are the outliers.

---

### 2. `piu` — hello — same `ly` → [ʎ] error
- **File:** `words/hello.js` line 690
- **Current:** `["palya", "palja"]`
- **Expected:** `["palya", "paʎa"]`
- **Why:** Pintupi-Luritja shares the Western Desert phoneme inventory; ⟨ly⟩ = /ʎ/. Same reasoning as #1 (Dixon 2002, §2.3). The [lj] reading is internally inconsistent with the dataset's own [paʎa] for the cognate forms.

---

### 3. `pjt` — good — `palya` palatal lateral
- **File:** `words/good.js` line 688
- **Current:** `["palya", "palja"]`
- **Expected:** `["palya", "paʎa"]`
- **Why:** Identical word and identical error to #1. ⟨ly⟩ = /ʎ/ (Dixon 2002).

---

### 4. `piu` — good — `palya` palatal lateral
- **File:** `words/good.js` line 690
- **Current:** `["palya", "palja"]`
- **Expected:** `["palya", "paʎa"]`
- **Why:** See #2; ⟨ly⟩ = /ʎ/.

---

### 5. `pjt` — thanks — `palya` palatal lateral
- **File:** `words/thanks.js` line 688
- **Current:** `["palya", "palja"]`
- **Expected:** `["palya", "paʎa"]`
- **Why:** Same lexeme, same ⟨ly⟩ = /ʎ/ rule (Dixon 2002). The [lj] transcription should be unified with the rest of the dataset.

---

### 6. `piu` — thanks — `palya` palatal lateral
- **File:** `words/thanks.js` line 690
- **Current:** `["palya", "palja"]`
- **Expected:** `["palya", "paʎa"]`
- **Why:** See #2 and #5.

---

### 7. `pjt` — love — `mukulya` palatal lateral
- **File:** `words/love.js` line 695
- **Current:** `["mukulya", "mukulja"]`
- **Expected:** `["mukulya", "mukuʎa"]`
- **Why:** *mukulya* (the root of *mukulya-ringanyi* "to love/be fond of") contains the same ⟨ly⟩ = /ʎ/ palatal lateral. [mukulja] mis-segments it as /l/ + /j/ (Dixon 2002, §2.3; cf. the [paʎa] treatment elsewhere in the same file).

---

### 8. `piu` — love — `mukulya` palatal lateral
- **File:** `words/love.js` line 697
- **Current:** `["mukulya", "mukulja"]`
- **Expected:** `["mukulya", "mukuʎa"]`
- **Why:** See #7; ⟨ly⟩ = /ʎ/.

---

### 9. `wbp` — love — Warlpiri `j` is voiceless palatal stop, not voiced affricate
- **File:** `words/love.js` line 696
- **Current:** `["jaru", "dʒaɻu"]`
- **Expected:** `["jaru", "caɻu"]`
- **Why:** Australian languages, Warlpiri included, have **no phonemic voicing contrast** in stops, and the conventional phonetic value of the laminal-palatal series is a stop, not a post-alveolar affricate (Dixon 2002, §2.2; Butcher 2006 on the "place-of-articulation imperative" and the under-use of voicing). Warlpiri ⟨j⟩ = /c/ (laminal-palatal stop), realised [c]~[ɟ̟] but transcribed [c] in the broad citation form. Using [dʒ] both adds a spurious voicing specification and substitutes an affricate for a stop. The dataset itself transcribes the Western Desert cognate ⟨tj⟩ as [c] (e.g. `words/drink.js` `tjikini` → [cikini]), confirming [c] is the house convention.

---

### 10. `wbp` — one — `jinta` palatal stop
- **File:** `words/one.js` line 695
- **Current:** `["jinta", "dʒinta"]`
- **Expected:** `["jinta", "cinta"]`
- **Why:** Same as #9: ⟨j⟩ = /c/, no voicing contrast (Dixon 2002; Butcher 2006). [dʒinta] should be [cinta].

---

### 11. `wbp` — dog — `jarntu`: palatal stop + retroflex cluster assimilation
- **File:** `words/dog.js` line 689
- **Current:** `["jarntu", "dʒaɳtu"]`
- **Expected:** `["jarntu", "caɳʈu"]`
- **Why:** Two errors. (i) Initial ⟨j⟩ = /c/, not [dʒ] (see #9). (ii) The ⟨rnt⟩ sequence is a **homorganic retroflex cluster**: ⟨rn⟩ is the retroflex nasal /ɳ/ (correctly given), and a stop within a homorganic nasal+stop cluster shares that retroflex place, so the ⟨t⟩ is retroflex /ʈ/, not alveolar [t]. The dataset already does this correctly for `wbt` *tjirntu* → [cinʈu] (`words/sun.js` line 703) and for `nha` *parntany* → [paɳʈaɲ]; `wbp` *jarntu* should likewise be [caɳʈu]. (Dixon 2002 §2.3 on coronal clusters; Butcher 2006 on retroflex assimilation.)

---

### 12. `adt` — eat — `nh` digraph is dental [n̪], not palatal [ɲ]
- **File:** `words/eat.js` line 694
- **Current:** `["ngalkanha", "ŋalkaɲa"]`
- **Expected:** `["ngalkanha", "ŋalkan̪a"]`
- **Why:** In pan-Australian practical orthography the digraph ⟨nh⟩ denotes the **laminal-dental nasal** /n̪/, a distinct member of the four-way coronal nasal series (/n̪ n ɳ ɲ/); the palatal nasal /ɲ/ is written ⟨ny⟩, not ⟨nh⟩ (Dixon 2002, §2.3; Butcher 2006 on the laminal dental/palatal contrast). Transcribing ⟨nh⟩ as [ɲ] collapses the dental–palatal distinction. Note this very dataset writes the palatal form as ⟨ny⟩ → [ɲ] (e.g. `adt` *nyangka* → [ɲaŋka]) and treats other languages' ⟨nh⟩ as a laminal (`nha` *nhurra* → [ɳ…]), so the [ɲ] here is an internal inconsistency as well as a place error.

---

### 13. `adt` — drink — `nh` dental nasal
- **File:** `words/drink.js` line 694
- **Current:** `["ulpanha", "ulpaɲa"]`
- **Expected:** `["ulpanha", "ulpan̪a"]`
- **Why:** Same as #12: ⟨nh⟩ = /n̪/ (laminal dental), not palatal /ɲ/ (Dixon 2002 §2.3).

---

### 14. `adt` — love/thanks — `mukunha` dental nasal
- **File:** `words/love.js` line 701
- **Current:** `["mukunha", "mukuɲa"]`
- **Expected:** `["mukunha", "mukun̪a"]`
- **Why:** Same ⟨nh⟩ = /n̪/ rule (Dixon 2002 §2.3; Butcher 2006). The same form recurs at `words/thanks.js` line 694 with the identical [mukuɲa] error and should be corrected in parallel.

---

### 15. `adt` — good — `ngarrkanha` dental nasal
- **File:** `words/good.js` line 694
- **Current:** `["ngarrkanha", "ŋaɻkaɲa"]`
- **Expected:** `["ngarrkanha", "ŋaɻkan̪a"]`
- **Why:** Final ⟨nh⟩ = laminal dental /n̪/, not palatal [ɲ] (Dixon 2002 §2.3). (Separately, ⟨rr⟩ is the alveolar tap/trill — here transcribed [ɻ], the retroflex glide; in strict Australianist practice ⟨rr⟩ = [r]/[ɾ] and single ⟨r⟩ = [ɻ]. The [ɻ] for ⟨rr⟩ recurs widely in the dataset; I flag the dental-nasal issue as the primary correction here.)

---

### 16. `aer` — water — Arrernte orthographic ⟨e⟩ is schwa /ə/
- **File:** `words/water.js` line 698
- **Current:** `["kwatye", "kʷatʲe"]`
- **Expected:** `["kwatye", "kʷatʲə"]`
- **Why:** Arrernte has a famously reduced vowel system (the central/high contrast plus /a/), in which orthographic ⟨e⟩ represents the **schwa /ə/**, and word-final ⟨e⟩ is the predictable terminal schwa that arises from the language's VC(C) syllabification (Breen & Pensalfini 1999, "Arrernte: A Language with No Syllable Onsets"; Koch's Arandic phonology). Transcribing final ⟨e⟩ as the cardinal front [e] mis-states the central quality. (The labialised /kʷ/ and palatalised /tʲ/ are correctly captured.)

---

### 17. `aer` — sun — Arrernte ⟨e⟩ schwa; ⟨rr⟩ trill
- **File:** `words/sun.js` line 697
- **Current:** `["arrenge", "aɾɛŋe"]`
- **Expected:** `["arrenge", "arəŋə"]`
- **Why:** Two Arandic issues. (i) Both ⟨e⟩ vowels are schwa /ə/, not [ɛ]/[e] (Breen & Pensalfini 1999). (ii) Arrernte ⟨rr⟩ is the **alveolar trill** /r/, contrasting with the single-⟨r⟩ retroflex continuant /ɻ/; rendering ⟨rr⟩ as the tap [ɾ] under-specifies the trill (Dixon 2002 §2.2; Butcher 2006). The velar nasal /ŋ/ for ⟨ng⟩ is correct.

---

### 18. `aer` — good/love — `mwerre` schwa and trill
- **File:** `words/good.js` line 691
- **Current:** `["mwerre", "mʷɛɾɛ"]`
- **Expected:** `["mwerre", "mʷərə"]`
- **Why:** *mwerre* "good" — both ⟨e⟩ vowels are /ə/ (Breen & Pensalfini 1999), so [ɛ] is wrong, and ⟨rr⟩ is the trill /r/ rather than the tap [ɾ] (Dixon 2002 §2.2). The same form recurs at `words/love.js` line 698 with the identical [mʷɛɾɛ] and should be corrected in parallel. (The labialised /mʷ/ is correct.)

---

### 19. `aer` — father — `arrweke` schwa vowels
- **File:** `words/father.js` line 691
- **Current:** `["arrweke", "aɾʷɛkɛ"]`
- **Expected:** `["arrweke", "arʷəkə"]`
- **Why:** *arrweke* "father" — the two ⟨e⟩ graphemes are schwa /ə/, not [ɛ] (Breen & Pensalfini 1999); and ⟨rr⟩ = trill /r/, here mis-rendered as the labialised tap [ɾʷ] (the labialisation belongs to the rhotic cluster ⟨rrw⟩, which is fine, but the manner should be trill). (Dixon 2002 §2.2.)

---

### 20. `aer` — cat — `kele` schwa vowel
- **File:** `words/cat.js` line 691
- **Current:** `["kele", "kɛle"]`
- **Expected:** `["kele", "kələ"]`
- **Why:** *kele* (a borrowing/established form for "dog/cat") shows the Arandic ⟨e⟩ = /ə/ vowel in both positions; both [ɛ] and the final [e] should be schwa (Breen & Pensalfini 1999; Koch). The velar /k/ is correct.

---

### 21. `nys` — house — `mia` lacks the medial glide
- **File:** `words/house.js` line 702
- **Current:** `["mia", "mia"]`
- **Expected:** `["mia", "maja"]`
- **Why:** This is also a **surface = IPA copy** (the second array element merely repeats the orthography). Nyungar *mia* / *maya* "house, home, camp" is phonetically /maja/ — Australian languages disallow true vowel hiatus, and the orthographic ⟨i⟩ here represents the palatal glide /j/ before /a/ (the form is widely written *maya* in the Noongar dictionary tradition; Dixon 2002 §2.4 on the avoidance of vowel sequences). A bare [mia] with hiatus is not a possible Nyungar surface form. Recommend [maja] (or at minimum [mija] if the first vowel is retained as /i/).

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

I verified every current value verbatim against the data files and confirmed each cited internal-consistency anchor. All 21 findings are clear, well-supported IPA corrections that bring the flagged outliers into line with the dataset's own established house conventions. I am applying all of them. Where a finding noted a parallel occurrence in a sibling file (mukunha in thanks.js; mukunha/mwerre in love.js), I include those parallel edits too.

Confirmed anchors (verbatim):
- `words/hello.js`: `nha`/`olg`/`adt`/`wbt` already give `["palya","paʎa"]` (lines 692–697); `pjt`/`piu` are the only `palja` outliers. Confirms ⟨ly⟩ = /ʎ/.
- `words/drink.js`: `pjt`/`piu` `["tjikini","cikini"]` confirms ⟨tj⟩ → [c], i.e. the laminal-palatal stop, the house convention. Supports ⟨j⟩ → [c] for Warlpiri.
- `words/sun.js`: `wbt` `["tjirntu","cinʈu"]` and `mpj` `['tjirntu','cɪɳʈu']` confirm the ⟨rnt⟩ homorganic retroflex cluster → [ɳʈ]/[nʈ]. Supports `jarntu` → [caɳʈu].

Per-finding disposition:

1. `pjt` hello — applied (applied by orchestrator this round). IPA `palja` → `paʎa`.
2. `piu` hello — applied (applied by orchestrator this round). `palja` → `paʎa`.
3. `pjt` good — applied (applied by orchestrator this round). `palja` → `paʎa`.
4. `piu` good — applied (applied by orchestrator this round). `palja` → `paʎa`.
5. `pjt` thanks — applied (applied by orchestrator this round). `palja` → `paʎa`.
6. `piu` thanks — applied (applied by orchestrator this round). `palja` → `paʎa`.
7. `pjt` love — applied (applied by orchestrator this round). `mukulja` → `mukuʎa`.
8. `piu` love — applied (applied by orchestrator this round). `mukulja` → `mukuʎa`.
9. `wbp` love — applied (applied by orchestrator this round). `dʒaɻu` → `caɻu` (⟨j⟩ = voiceless laminal-palatal stop /c/; no voicing contrast).
10. `wbp` one — applied (applied by orchestrator this round). `dʒinta` → `cinta`.
11. `wbp` dog — applied (applied by orchestrator this round). `dʒaɳtu` → `caɳʈu` (initial ⟨j⟩ → [c]; ⟨rnt⟩ homorganic retroflex cluster → [ɳʈ]).
12. `adt` eat — applied (applied by orchestrator this round). `ŋalkaɲa` → `ŋalkan̪a` (⟨nh⟩ = laminal dental /n̪/, not palatal /ɲ/).
13. `adt` drink — applied (applied by orchestrator this round). `ulpaɲa` → `ulpan̪a`.
14. `adt` love (mukunha) — applied (applied by orchestrator this round). `mukuɲa` → `mukun̪a`. Parallel occurrence in `words/thanks.js` `adt` `["mukunha","mukuɲa"]` also applied → `mukun̪a`.
15. `adt` good — applied (applied by orchestrator this round). `ŋaɻkaɲa` → `ŋaɻkan̪a` (final ⟨nh⟩ = /n̪/). The ⟨rr⟩=[ɻ] sub-note was flagged by the reviewer as a system-wide pattern and explicitly NOT the primary correction; left as-is for Western Desert/Arandic ⟨rr⟩ outside Arrernte (see #16-20 for the Arrernte-specific ⟨rr⟩=trill fixes the reviewer did request).
16. `aer` water — applied (applied by orchestrator this round). `kʷatʲe` → `kʷatʲə` (Arrernte final ⟨e⟩ = schwa).
17. `aer` sun — applied (applied by orchestrator this round). `aɾɛŋe` → `arəŋə` (both ⟨e⟩ = /ə/; ⟨rr⟩ = trill /r/).
18. `aer` good (mwerre) — applied (applied by orchestrator this round). `mʷɛɾɛ` → `mʷərə`. Parallel occurrence in `words/love.js` `aer` `["mwerre","mʷɛɾɛ"]` also applied → `mʷərə`.
19. `aer` father — applied (applied by orchestrator this round). `aɾʷɛkɛ` → `arʷəkə` (⟨rr⟩ = trill /r/; both ⟨e⟩ = /ə/).
20. `aer` cat — applied (applied by orchestrator this round). `kɛle` → `kələ`.
21. `nys` house — applied (applied by orchestrator this round). `mia` → `maja`. This was also a surface=IPA copy; the orthographic ⟨i⟩ before /a/ is the palatal glide /j/, and Australian languages disallow true vowel hiatus. The form is widely written *maya* in the Noongar dictionary tradition.

Note on #15 ⟨rr⟩=[ɻ]: I did NOT apply a blanket ⟨rr⟩→[r] change across the corpus. The reviewer themselves scoped that as a recurring system-wide convention question and named the dental nasal as the primary fix for #15. The Arrernte (`aer`) ⟨rr⟩→trill fixes in #17-19 ARE applied because the reviewer requested them explicitly and they are paired with the schwa corrections in the same forms.

remainingOpenCount: 0 (all findings applied; no items held as won't-fix).

---

## Reviewer round-2 response (再評価 round-2)

I re-verified all 21 findings against the **live data** (grep of the actual `aer/pjt/piu/wbp/adt/nys` entries in each `words/*.js`). Verbatim confirmations of every claimed "applied" fix:

| # | File:lang | Live value now | Verdict |
|---|-----------|----------------|---------|
| 1 | hello pjt | `["palya","paʎa"]` | ✓ |
| 2 | hello piu | `["palya","paʎa"]` | ✓ |
| 3 | good pjt | `["palya","paʎa"]` | ✓ |
| 4 | good piu | `["palya","paʎa"]` | ✓ |
| 5 | thanks pjt | `["palya","paʎa"]` | ✓ |
| 6 | thanks piu | `["palya","paʎa"]` | ✓ |
| 7 | love pjt | `["mukulya","mukuʎa"]` | ✓ |
| 8 | love piu | `["mukulya","mukuʎa"]` | ✓ |
| 9 | love wbp | `["jaru","caɻu"]` | ✓ |
| 10 | one wbp | `["jinta","cinta"]` | ✓ |
| 11 | dog wbp | `["jarntu","caɳʈu"]` | ✓ (initial [c] + homorganic [ɳʈ] both present) |
| 12 | eat adt | `["ngalkanha","ŋalkan̪a"]` | ✓ |
| 13 | drink adt | `["ulpanha","ulpan̪a"]` | ✓ |
| 14 | love adt | `["mukunha","mukun̪a"]` | ✓; parallel **thanks adt** `["mukunha","mukun̪a"]` ✓ |
| 15 | good adt | `["ngarrkanha","ŋaɻkan̪a"]` | ✓ (dental nasal fixed; ⟨rr⟩=[ɻ] sub-note correctly scoped out as system-wide convention — accepted) |
| 16 | water aer | `["kwatye","kʷatʲə"]` | ✓ |
| 17 | sun aer | `["arrenge","arəŋə"]` | ✓ (both ⟨e⟩=schwa, ⟨rr⟩=trill) |
| 18 | good aer | `["mwerre","mʷərə"]` | ✓; parallel **love aer** `["mwerre","mʷərə"]` ✓ |
| 19 | father aer | `["arrweke","arʷəkə"]` | ✓ |
| 20 | cat aer | `["kele","kələ"]` | ✓ |
| 21 | house nys | `["mia","maja"]` | ✓ (hiatus removed; surface=IPA copy resolved) |

20 of 21 findings (and the love.js/thanks.js `mukunha` + love.js `mwerre` parallels) are fully applied and verified in live data. Clean work.

### New issue (1) — incomplete #18 parallel: `mwerre` in `thanks.js` `aer` still un-fixed

The worker explicitly committed under #18 to correct **every parallel occurrence of `mwerre`** to `mʷərə`. There are three `aer` entries corpus-wide containing this lexeme:

- `words/good.js:691` → `["mwerre","mʷərə"]` ✓ fixed
- `words/love.js:698` → `["mwerre","mʷərə"]` ✓ fixed
- `words/thanks.js:691` → `["unte mwerre", "untɛ mʷɛɾɛ"]` ✗ **MISSED**

The `mwerre` component of *unte mwerre* "thank you" is the identical lexeme and is still transcribed `mʷɛɾɛ`, i.e. with cardinal [ɛ] for the schwa vowels and the tap [ɾ] for the trill ⟨rr⟩ — exactly the error #18 corrects elsewhere. This is internally inconsistent with the now-fixed `mʷərə` in good.js/love.js and is squarely inside the reviewer's stated #18 scope, not an out-of-scope expansion. **Required fix:** the `mʷɛɾɛ` substring of `untɛ mʷɛɾɛ` → `mʷərə`. (The `untɛ` portion also carries Arandic ⟨e⟩=schwa, so a fully consistent value would be `untə mʷərə`, but the in-scope, must-do correction is the `mwerre` half.)

### Scope note (NOT new issues — accepted as out-of-scope)

During verification I observed the Arandic ⟨e⟩→non-schwa pattern persists in many `aer` forms in words this review never examined (`hand` iltʲe, `moon` aɾŋʷe, `eye` alkŋe, `fire` uɾe, `tree` aɾne, `heart` atʲɛŋe, `one` aɲɛnte, `hello` wɛɾte, `drink` altʲɛɾe, `eat` aɾlkɛŋe, `house` ahɛntʲe). These are real instances of the same schwa principle but were **not findings in review #67**; raising them here would be scope-padding. They belong to whichever review owns those words. I deliberately do **not** count them as new issues — only the in-scope #18 parallel above.

### Scorecard
- Findings verified applied in live data: 20/21 + 2 parallels (mukunha-thanks, mwerre-love).
- New actionable issues: 1 (thanks.js aer `mwerre` parallel of #18, not applied).
- Accepted won't-fix / out-of-scope: ⟨rr⟩=[ɻ] system convention (#15 sub-note); corpus-wide aer schwa in non-#67 words.

**File status: OPEN** — Dev team must apply the missed #18 parallel: in `words/thanks.js:691`, fix `aer` `["unte mwerre","untɛ mʷɛɾɛ"]` so the `mwerre` portion reads `mʷərə` (ideally `["unte mwerre","untə mʷərə"]`).
