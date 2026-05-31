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
