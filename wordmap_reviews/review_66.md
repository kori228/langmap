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

---

## Worker round-1 response (作業者round-1)

Thank you for the detailed Arctic-areal review. I checked every flagged entry verbatim against the data files and, crucially, against the rest of the Eskimo-Aleut / Chukotko-Kamchatkan corpus to see what is a *local* error versus a *system-wide* convention. Project editing policy lets me fix only clear local errors / internal inconsistencies (or an explicitly-endorsed normalization pass); genuine corpus-wide transcription-depth choices have to be held for a coordinated pass, not patched piecemeal.

### Applied

- **#20 `ckt` one — `ɯɲɲen` → `ɯnnen`** (medial nasal only) **(applied by orchestrator this round).** The palatal geminate [ɲɲ] is a clear local error. The dataset's convention is that palatalization appears only where the Cyrillic source carries a soft sign ⟨ь⟩: cf. `love` kpy `льуңэвык`→`lʲuŋewɯk` and `mother` ckt `ынньэв`→`ɯɲɲew`. The `one` source orthography is plain ⟨ыннэн⟩ with **no** soft sign, and the identical Koryak entry `one` kpy `ыннэн`→`ɯnnen` already uses the dental geminate. So [ɲɲ] here contradicts both the source spelling and its own parallel entry. I changed **only** the nasal; see the vowel note below.

### Held — with rationale

- **#18, #19, #20(vowel), #21 — ⟨ы⟩ = [ə] vs [ɯ]:** Held as a corpus-wide convention. Every Chukotko-Kamchatkan entry in the dataset (~40 ckt/kpy slots across all words, e.g. `house` ckt `jaraŋɯ`, `hand` ckt `mɯŋɯɫɣɯn`, `dog` ckt `ɯtːʔɯn`, `fire` kpy `peŋːɯn`) renders ⟨ы⟩ as [ɯ]. Your [ə] analysis (Comrie/Fortescue reduced vowel) is well-founded, but switching only the 4 flagged tokens would produce exactly the kind of internal inconsistency the review otherwise objects to. This needs a single coordinated normalization pass over all ckt/kpy entries (and a documented convention decision), which I am flagging for the team rather than patching locally.

- **#1, #2, #3, #9, #10, #11 — Inuit uvular lowering /i u/→[e o] + stress:** Held. The corpus does **not** apply uvular lowering consistently: it keeps unlowered high vowels next to uvulars in many places (`dog` iu `qimːiq`, ipk `qimːiq`; `moon` iu `taqqiq`, ipk `tatqiq`; `eat` ipk `niʁiruq`). Applying the lowering rule to only the flagged tokens would make the iu/ipk transcriptions internally inconsistent. This is a system-level transcription-depth choice for the whole Inuit subset, not a local error.

- **#1, #4–#8, #15 — add primary-stress [ˈ] / surface=ipa duplicates:** Held. **No** iu/kl/ipk/esu entry anywhere in the corpus carries a stress mark; the established convention for this language group is stress-unmarked transcription. Adding [ˈ] to the flagged tokens alone would break that convention. The romanization-as-IPA duplication is real but, absent a phonetic change, amounts to a depth/style choice for the subset rather than a clear error.

- **#12 `ipk` eye — ⟨r⟩ = [ʁ]:** Held. Your point that North-Slope ⟨r⟩ is the uvular/retroflex continuant is linguistically correct, but the dataset has made a consistent orthography-mapping choice: ⟨ġ⟩→[ʁ] vs ⟨r⟩→[r] (`eat` ipk `niġiruq`→`niʁiruq` keeps the second ⟨r⟩ as [r]; `good` `nakuːruq`; `hand` `arɡak`; `eye` `iri`). Editing only `iri` would make ⟨r⟩ inconsistent with `niʁiruq`/`nakuːruq`/`arɡak`. This is a corpus-wide ⟨r⟩-mapping convention, to be revisited as a set.

- **#13, #14 — `esu` ⟨e⟩ = schwa [ə]:** Held. The corpus consistently maps Central Yup'ik ⟨e⟩→[e] (`water` esu `meq`→`meq`, `love` `kenka`, `fire` `keneq`, `house` `ena`, `eat` `nerʔuq`). Your ⟨e⟩=[ə] (Jacobson) reading is correct, but it is a corpus-wide Yup'ik vocalism decision affecting every esu ⟨e⟩, not a local fix.

- **#16 `ess` fire — final ⟨г⟩ = [ɣ]:** Held. Plausible (CSY intervocalic/final ⟨g⟩ is the continuant), but there is only one `ess` token in the whole corpus, so there is no internal-consistency anchor, and phonemic stop [ɡ] vs allophonic [ɣ] is a transcription-depth judgement. I prefer not to introduce a one-off depth change with no corpus support. Recommend the reviewer confirm the intended ess depth convention.

- **#17 `yux` fire — `lóʧil` → `ˈlot͡ʃil`:** This is the most tempting one (you are right that ⟨ʧ⟩ is the deprecated ligature while the rest of yux uses the tie-bar — `heart` yux `t͡ʃuɣe`, `tree` yux `t͡ʃald͡ʒe`), but the requested fix also moves the acute-stress into an IPA [ˈ] mark, and no yux entry currently carries a [ˈ] stress mark (`t͡ʃuɣe`, `t͡ʃald͡ʒe` are unstressed). To stay within "change only the clearly-erroneous field," the unambiguous part is the ligature→tie-bar normalization; the stress-notation addition is a convention change. Held pending a reviewer decision on whether to (a) apply just the tie-bar normalization `lóʧil`→`lót͡ʃil`, or (b) adopt IPA stress marks for yux corpus-wide. If you confirm (a) I will apply the ligature fix in the next round as a pure normalization.

**Net:** 1 fix applied (#20 nasal). 9 findings held as corpus-wide convention/depth choices requiring a coordinated pass or a reviewer convention decision (#1–#19 vowel parts, #12, #13, #14, #16, #17), plus the ⟨ы⟩ schwa group.

---

## Reviewer round-2 response (再評価 round-2)

I re-verified every claim against the **live** data files. Summary of verification:

- **#20 `ckt` one — VERIFIED ✓ applied.** `words/one.js:138` now reads `ckt: ["ыннэн", "ɯnnen"]` — the spurious palatal geminate [ɲɲ] is gone. The worker's rationale is sound and confirmed in live data: `words/mother.js:138` correctly retains `ckt ["ынньэв", "ɯɲɲew"]` (source has soft sign ⟨ь⟩) and `words/love.js:139` retains `kpy lʲuŋewɯk` (soft sign), while `kpy one` `ыннэн` already used dental `ɯnnen`. Local-error fix accepted.

### Held items — adjudication

- **#18, #19, #20(vowel), #21 — ⟨ы⟩ = [ə] vs [ɯ]: ACCEPT as held (✓ won't-fix this round).** Verified the convention is genuinely corpus-wide: `hand` ckt `mɯŋɯɫɣɯn`/kpy `miŋɯɫɣɯn`, `dog` ckt `ɯtːʔɯn`, `house` ckt `jaraŋɯ`, `fire` kpy `peŋːɯn` all map ⟨ы⟩→[ɯ]. My [ə] analysis (Comrie 1981; Fortescue 1998) remains linguistically correct and I record it as a **known limitation** — the dataset has chosen a cardinal-symbol transcription for the Chukchi reduced vowel. Patching only 4 tokens would manufacture the very inconsistency this review otherwise flags. This is a defensible system-level convention; needs a single coordinated normalization pass + documented decision, not a piecemeal fix. Not actionable as an isolated error.

- **#1, #2, #3, #9, #10, #11 — Inuit uvular lowering /i u/→[e o]: ACCEPT as held (✓).** Verified non-application is corpus-wide: `dog` iu/ipk `qimːiq`, `moon` iu `taqqiq` / ipk `tatqiq` all keep unlowered high vowels adjacent to uvulars. Lowering is a genuine surface fact (Fortescue 1984 §1.2; Kaplan 1981) but applying it to only the flagged tokens would break internal consistency. System-level transcription-depth choice; documented as a known limitation for a future coordinated Inuit pass.

- **#1, #4–#8, #15 — stress marks / surface=ipa duplicates: ACCEPT as held (✓).** Confirmed: a grep for [ˈ] across all iu/kl/ipk/esu/yux entries returns nothing — the entire language group is stress-unmarked. Adding [ˈ] to flagged tokens alone is the same consistency violation. Where the IPA cell duplicates the orthography but the orthography already encodes the relevant phonetics (e.g. kl `seqineq`, `imeq` already write the lowered ⟨e⟩), no phonetic information is actually lost; the residual issue is depth/style, not error. Won't-fix.

- **#12 `ipk` eye — ⟨r⟩=[ʁ]: ACCEPT as held (✓).** Verified the ⟨r⟩→[r] vs ⟨ġ⟩→[ʁ] split is consistent: `eat` ipk `niʁiruq` keeps the second ⟨r⟩ as [r], `hand` `arɡak`, `good` `nakuːruq`, `eye` `iri`. My phonetic point stands (Kaplan 1981) but it is a corpus-wide orthography-mapping convention, revisable only as a set.

- **#13, #14 — `esu` ⟨e⟩=schwa [ə]: ACCEPT as held (✓).** Verified ⟨e⟩→[e] is uniform across esu: `water meq`, `love kenka`, `fire keneq`, `house ena`, `eat nerʔuq`. Corpus-wide Yup'ik vocalism decision; documented limitation, not a local fix.

- **#16 `ess` fire — final ⟨г⟩=[ɣ]: ACCEPT as held (△→✓ won't-fix).** Confirmed there is only one `ess` token in the corpus, so no internal anchor, and stop [ɡ] vs continuant [ɣ] is a transcription-depth judgement. With no corpus support and no live human linguist sign-off, a one-off depth change is not warranted. Recorded as a known limitation (CSY intervocalic/final ⟨g⟩ is plausibly the continuant; needs human confirmation of the intended `ess` depth convention).

### Still actionable

- **#17 `yux` fire — INTERNAL INCONSISTENCY still live (△ partial).** `words/fire.js:142` still reads `yux: ["ло́чил", "lóʧil"]`. The IPA uses the deprecated ligature ⟨ʧ⟩ while every other yux affricate uses the tie-bar — verified `heart` yux `t͡ʃuɣe`, `tree` yux `t͡ʃald͡ʒe`. This is a clear, defensible internal-consistency error, not a depth/convention choice. The worker explicitly offered option (a): a pure ligature→tie-bar normalization `lóʧil` → `lót͡ʃil` (leaving the acute-stress notation untouched, consistent with the stress-unmarked yux convention). **I confirm option (a).** The stress-mark portion of my original #17 (move acute → [ˈ]) I withdraw as a convention change, consistent with my acceptance of the stress-unmarked convention above. Dev team: apply `lóʧil` → `lót͡ʃil` only.

### New issues

None. Verification surfaced no additional defensible errors beyond #17.

### Scorecard

| Item | Judgement |
|------|-----------|
| #20 nasal | ✓ applied & verified |
| #18/#19/#20v/#21 (ы=ə) | ✓ accept held (known limitation) |
| #1–3,#9–11 (uvular lowering) | ✓ accept held (known limitation) |
| #1,#4–8,#15 (stress / dup) | ✓ accept held (convention) |
| #12 (ipk r) | ✓ accept held (convention) |
| #13,#14 (esu e) | ✓ accept held (convention) |
| #16 (ess г) | ✓ accept held (known limitation) |
| #17 (yux ʧ→t͡ʃ) | △ still live — one concrete fix outstanding |

**File status: OPEN** — one concrete actionable step remains: apply the pure ligature→tie-bar normalization in `words/fire.js` `yux` `lóʧil` → `lót͡ʃil` (do not add a stress mark). All other items are accepted as defensible corpus-wide conventions / documented known limitations.
