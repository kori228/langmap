# Wordmap review #66 — Eskimo-Aleut & Paleosiberian (Arctic) specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am an Arctic-areal philologist specializing in the Eskimo-Aleut (Inuit, Yupik, Aleut) and Paleosiberian (Chukotko-Kamchatkan, Yukaghir) families, with field and archival experience across West Greenlandic (Kalaallisut), Eastern Canadian Inuktitut, North Slope Iñupiaq, Central Siberian (St. Lawrence Island) Yupik, Central Alaskan Yup'ik, Atkan/Eastern Aleut, Chukchi, Koryak, Itelmen, and Tundra/Kolyma Yukaghir. My phonological judgements rest principally on Michael Fortescue, Steven Jacobson & Lawrence Kaplan, *Comparative Eskimo Dictionary, with Aleut Cognates* (2nd ed., 2010, ANLC); Michael Fortescue, *Language Relations across Bering Strait* (1998); Fortescue, *West Greenlandic* (Croom Helm Descriptive Grammars, 1984); Lawrence Kaplan, *Phonological Issues in North Alaskan Iñupiaq* (1981); Steven Jacobson, *Yup'ik Eskimo Dictionary* (2nd ed., 2012); Michael Krauss's work on St. Lawrence Island Yupik; Knut Bergsland, *Aleut Dictionary / Unangam Tunudgusii* (1994); and Irina Nikolaeva, *A Historical Dictionary of Yukaghir* (2006) plus Bernard Comrie's surveys of Chukotko-Kamchatkan. The recurrent problems in this dataset are: (a) the IPA slot being filled with a romanization or the bare orthography (surface=ipa copies), (b) failure to mark the **uvular lowering** of /i u/ to [e o] adjacent to /q ʁ/ that is the single most diagnostic surface fact of Inuit phonetics, (c) missing consonant/vowel **length** and Greenlandic double-consonant gemination, and (d) inconsistent tie-bars / stray acute-accent marks in the Yukaghir affricates.

---

## Issues found

### 1. `iu` — water — romanization in the IPA slot, no uvular lowering
- **File:** `words/water.js` line 516
- **Current:** `["ᐃᒪᖅ", "imaq"]`
- **Expected:** `["ᐃᒪᖅ", "iˈmaq"]`
- **Why:** The second element is the bare ICI romanization, not a phonetic transcription — it carries no stress and no allophonic detail. Even retained as-is the consonant ⟨q⟩ is the uvular stop [q], which the romanization conveniently coincides with, but a genuine IPA form should at minimum mark the (default penultimate/peak) stress. Fortescue (*Comparative Eskimo Dictionary*, headword *imǝq* "water") gives the stop as uvular [q]; the entry is acceptable orthographically but the IPA cell is a copy, not a transcription.

### 2. `iu` — sun — IPA copies romanization; misses uvular lowering [e]
- **File:** `words/sun.js` line 515
- **Current:** `["ᓯᕿᓂᖅ", "siqiniq"]`
- **Expected:** `["ᓯᕿᓂᖅ", "siˈqineq"]`
- **Why:** In Inuit the high vowels /i u/ lower to [e o] in contact with a uvular (/q ʁ/). The syllable ⟨niq⟩ before final uvular /q/ is realized [neq], so *siqiniq* surfaces [siˈqineq]. Writing the IPA identical to the abstract romanization "siqiniq" suppresses exactly the lowering that distinguishes Inuit phonetics. (Fortescue, *West Greenlandic* 1984, §1.2 on uvular lowering; CED *sǝqiniq*.)

### 3. `iu` — one — IPA copies romanization; uvular lowering not shown
- **File:** `words/one.js` line 515
- **Current:** `["ᐊᑕᐅᓯᖅ", "atausiq"]`
- **Expected:** `["ᐊᑕᐅᓯᖅ", "ataˈuseq"]`
- **Why:** Final /...siq/ before the uvular surfaces with the lowered allophone [seq]; the diphthong /au/ is [au]. The IPA cell is again the bare romanization with no phonetic content and no stress. (CED *atauçiq* "one"; Fortescue 1984 §1.2.)

### 4. `kl` — sun — surface=ipa copy; lowered [e] and final uvular not marked
- **File:** `words/sun.js` line 661
- **Current:** `["seqineq", "seqineq"]`
- **Expected:** `["seqineq", "seˈqineq"]`
- **Why:** The Kalaallisut orthography already writes the lowered vowels ⟨e⟩ (so the spelling is correct), but the IPA element is a verbatim duplicate of the orthographic string and therefore carries no stress and does not distinguish the orthographic ⟨q⟩ from a velar. A true IPA form is [seˈqineq] with the uvular [q] and the regular West Greenlandic peak stress. Duplicating the surface in the IPA slot is the recurrent dataset error flagged in my focus list. (Fortescue 1984.)

### 5. `kl` — water — surface=ipa copy of *imeq*
- **File:** `words/water.js` line 662
- **Current:** `["imeq", "imeq"]`
- **Expected:** `["imeq", "iˈmeq"]`
- **Why:** Same defect: the IPA is a verbatim copy. Phonemically /imiq/, the form surfaces [iˈmeq] — the ⟨e⟩ is precisely the uvular-lowered reflex of /i/ before final /q/, which is what the Greenlandic spelling encodes. The IPA cell must be a transcription [iˈmeq] (uvular stop, stress marked), not a re-paste of the orthography. (CED *imǝq*; Fortescue 1984 §1.2.)

### 6. `kl` — thanks — surface=ipa copy; uvular /q/ unmarked
- **File:** `words/thanks.js` line 655
- **Current:** `["qujanaq", "qujanaq"]`
- **Expected:** `["qujanaq", "quˈjanaq"]`
- **Why:** Both the initial and final consonants are uvular [q]; the IPA element is an exact duplicate of the orthography and lacks stress. Transcribe as [quˈjanaq]. (Fortescue 1984.)

### 7. `kl` — eye — surface=ipa copy
- **File:** `words/eye.js` line 655
- **Current:** `["isi", "isi"]`
- **Expected:** `["isi", "ˈisi"]`
- **Why:** IPA is a verbatim copy of the orthography with no stress. West Greenlandic *isi* "eye" has initial peak stress [ˈisi]; the duplicate string adds no phonetic information. (Fortescue 1984; CED *iri/iji* set.)

### 8. `kl` — cat — surface=ipa copy; ⟨ts⟩ value not transcribed
- **File:** `words/cat.js` line 655
- **Current:** `["qitsuk", "qitsuk"]`
- **Expected:** `["qitsuk", "ˈqitsuk"]`
- **Why:** The IPA is identical to the orthography. The initial is uvular [q]; ⟨ts⟩ is the West Greenlandic [ts] cluster/affricate, and stress is initial. The IPA cell needs to be a transcription [ˈqitsuk], not a paste of the spelling. (Fortescue 1984.)

### 9. `ipk` — water — surface=ipa copy of *imiq*
- **File:** `words/water.js` line 830
- **Current:** `["imiq", "imiq"]`
- **Expected:** `["imiq", "iˈmeq"]`
- **Why:** North Slope Iñupiaq, like all Inuit, lowers /i/ to [e] adjacent to the final uvular /q/, so underlying *imiq* surfaces [iˈmeq]. The IPA cell is a verbatim copy of the underlying spelling and therefore hides the lowering and the stress. (Kaplan 1981, *Phonological Issues in North Alaskan Iñupiaq*, ch. on uvular lowering; CED *imǝq*.)

### 10. `ipk` — sun — IPA misses uvular lowering of both high vowels
- **File:** `words/sun.js` line 829
- **Current:** `["siqiñiq", "siqiŋiq"]`
- **Expected:** `["siqiñiq", "seˈqiŋeq"]`
- **Why:** The palatal nasal ⟨ñ⟩ = [ŋ̟]/[ɲ] is reasonably rendered [ŋ], but both /i/ vowels flanking uvulars lower: the first ⟨si⟩ before /q/ → [se], and the final ⟨ñiq⟩ before /q/ → [ŋeq]. The given IPA keeps the unlowered high vowels throughout. Correct surface is [seˈqiŋeq]. (Kaplan 1981; CED *sǝqiniq*.)

### 11. `ipk` — one — surface=ipa copy; no uvular lowering
- **File:** `words/one.js` line 829
- **Current:** `["atausiq", "atausiq"]`
- **Expected:** `["atausiq", "ataˈuseq"]`
- **Why:** Identical to the `iu` case (#3): final /siq/ → [seq] by uvular lowering, and the IPA element is a verbatim copy of the orthography with no stress. (Kaplan 1981; CED *atauçiq*.)

### 12. `ipk` — eye — surface=ipa copy
- **File:** `words/eye.js` line 823
- **Current:** `["iri", "iri"]`
- **Expected:** `["iri", "ˈiɣi"]`
- **Why:** In North Slope Iñupiaq the orthographic ⟨r⟩ is the voiced uvular/velar fricative, not an apical [r]; the IPA must not copy the orthographic ⟨r⟩ unchanged. Iñupiaq *iri* "eye" is realized with the fricative onset of the second syllable — compare the cognate set CED *iri/iji* (PE *iʀi*), where the medial reflex is the uvular continuant. Render [ˈiʁi] (or [ˈiɣi] for the velar realization), not the letter ⟨r⟩. (Kaplan 1981 §2 on Iñupiaq ⟨r⟩ = [ʁ]; CED.)

### 13. `esu` — fire — surface=ipa copy of *keneq*
- **File:** `words/fire.js` line 828
- **Current:** `["keneq", "keneq"]`
- **Expected:** `["keneq", "kəˈnəq"]`
- **Why:** Central Alaskan Yup'ik orthographic ⟨e⟩ represents schwa /ə/, not [e]. The IPA cell is a verbatim copy of the orthography and so wrongly implies a true mid-front [e] in both syllables; the correct phonetic form is [kəˈnəq] with two schwas and a final uvular. (Jacobson, *Yup'ik Eskimo Dictionary* 2012, orthography key: ⟨e⟩ = [ə]; *keneq* "fire".)

### 14. `esu` — house — surface=ipa copy; ⟨e⟩ = schwa not transcribed
- **File:** `words/house.js` line 829
- **Current:** `["ena", "ena"]`
- **Expected:** `["ena", "ˈəna"]`
- **Why:** Same Yup'ik orthography-vs-IPA confusion: ⟨e⟩ is schwa [ə]. The IPA must be [ˈəna], not a paste of the spelling "ena" that reads as cardinal [e]. (Jacobson 2012; *ena* "house".)

### 15. `esu` — tree — surface=ipa copy; final schwa unrendered
- **File:** `words/tree.js` line 822
- **Current:** `["napa", "napa"]`
- **Expected:** `["napa", "ˈnapa"]`
- **Why:** The IPA is a verbatim duplicate of the orthography with no stress mark; at minimum the initial peak stress [ˈnapa] must be supplied so the cell is a transcription rather than a re-paste. (Jacobson 2012, *napa* "(standing) tree/post".)

### 16. `ess` — fire — vowel reduction over-applied / first vowel mistranscribed
- **File:** `words/fire.js` line 830
- **Current:** `["кэныг", "kənəɡ"]`
- **Expected:** `["кэныг", "kəˈnəɣ"]`
- **Why:** Two points. (a) St. Lawrence Island Yupik final orthographic ⟨г⟩ here represents the voiced uvular/velar fricative, not the stop [ɡ]; intervocalic and final ⟨g⟩ in CSY is the fricative [ɣ] (uvular [ʁ] adjacent to back vowels). The IPA gives a plosive [ɡ], which is wrong for this slot. (b) Stress is unmarked. Render [kəˈnəɣ]. (Krauss / Jacobson, St. Lawrence Island Yupik phonology; CED *kǝnǝʀ* "fire".)

### 17. `yux` — fire — non-standard affricate symbol and stray acute in IPA
- **File:** `words/fire.js` line 142
- **Current:** `["ло́чил", "lóʧil"]`
- **Expected:** `["ло́чил", "ˈlot͡ʃil"]`
- **Why:** Two defects. (a) The IPA uses the deprecated ligature ⟨ʧ⟩, whereas every other Yukaghir affricate in this dataset (e.g. yux *heart* line 142 `t͡ʃuɣe`, *tree* `t͡ʃald͡ʒe`) uses the tie-bar ⟨t͡ʃ⟩; the entry is internally inconsistent. (b) The Cyrillic source marks stress with the acute on ⟨о́⟩, but the IPA copies the acute *over the vowel* (ó) instead of using the IPA primary-stress mark [ˈ] before the stressed syllable. Correct IPA: [ˈlot͡ʃil]. (Nikolaeva, *A Historical Dictionary of Yukaghir* 2006, Kolyma/Tundra Yukaghir transcription conventions.)

### 18. `ckt` — drink — palatalized/uvular cluster: missing length is fine but check ⟨мԓ⟩
- **File:** `words/drink.js` line 138
- **Current:** `["рымԓыӄэн", "rɯmɫɯqen"]`
- **Expected:** `["рымԓыӄэн", "rəmɫəqen"]`
- **Why:** Chukchi orthographic ⟨ы⟩ is the reduced/schwa vowel [ə] (the "recessive" vowel of Chukchi vowel harmony), not the high central [ɯ]. Throughout the ckt entries ⟨ы⟩ has been transcribed [ɯ], but in Chukotko-Kamchatkan phonology this letter denotes schwa [ə] (it triggers no harmonic class of its own and surfaces as a reduced vowel). The dominant/recessive harmony alternation operates on /e~i/, /o~u/, /e~a/, with [ə] neutral. Render [rəmɫəqen]. (Comrie, *The Languages of the Soviet Union* 1981, Chukchi vowel-harmony section; Fortescue, *Language Relations across Bering Strait* 1998, ch. 3 on Chukotko-Kamchatkan vocalism.)

### 19. `ckt` — water — same ⟨ы⟩ = schwa, not [ɯ]
- **File:** `words/water.js` line 138
- **Current:** `["мимыԓ", "mimɯɫ"]`
- **Expected:** `["мимыԓ", "miməɫ"]`
- **Why:** As in #18, the reduced vowel ⟨ы⟩ of *mimǝɫ* "water" is the harmonically neutral schwa [ə]. Transcribing it as cardinal high central [ɯ] mis-states the Chukchi vowel system, in which [ə] is the reduced grade that surfaces in non-dominant contexts. (Comrie 1981; CED/Bering-Strait *mimǝl*.)

### 20. `ckt` — one — geminate/nasal and schwa both mis-set
- **File:** `words/one.js` line 138
- **Current:** `["ыннэн", "ɯɲɲen"]`
- **Expected:** `["ыннэн", "ənnen"]`
- **Why:** Two issues. (a) Initial ⟨ы⟩ = schwa [ə] (see #18), not [ɯ]. (b) The medial ⟨нн⟩ is a geminate dental nasal [nn], not a palatal [ɲɲ] — Chukchi *ǝnnen* "one" has a plain dental geminate; the palatal value [ɲ] is unmotivated here (contrast kpy *one* line 139 `ɯnnen`, which correctly uses dental [n] but wrongly keeps [ɯ]). Render [ənnen]. (Comrie 1981; Fortescue 1998 Chukotko-Kamchatkan reconstructions.)

### 21. `kpy` — one — ⟨ы⟩ = schwa, not [ɯ]
- **File:** `words/one.js` line 139
- **Current:** `["ыннэн", "ɯnnen"]`
- **Expected:** `["ыннэн", "ənnen"]`
- **Why:** Koryak shares the Chukchi reduced-vowel system; orthographic ⟨ы⟩ is schwa [ə]. The dental geminate [nn] is already correct here, so only the vowel needs fixing to [ənnen]. (Comrie 1981; Fortescue 1998.)

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
