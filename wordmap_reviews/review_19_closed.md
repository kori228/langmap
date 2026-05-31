# Wordmap review #19 — Indigenous Americas specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a comparative linguist specialising in the indigenous languages of the Americas, with particular expertise in the phonology and morphology of North American, Mesoamerican, and Andean languages. My primary reference corpus includes: Marianne Mithun's *The Languages of Native North America* (Cambridge, 1999); Lyle Campbell's *American Indian Languages: The Historical Linguistics of Native America* (Oxford, 1997); Robert W. Young & William Morgan's *The Navajo Language: A Grammar and Colloquial Dictionary* (University of New Mexico Press, rev. ed. 1987) and the companion *Analytical Lexicon of Navajo* (1992); Willem F. H. Adelaar with Pieter C. Muysken's *The Languages of the Andes* (Cambridge, 2004); and Rodolfo Cerrón-Palomino's *Lingüística Quechua* (CBC, 1987) and *Lingüística Aimara* (CBC, 1994). For Mayan languages I draw on England's *Mam Reference Grammar* (1983) and the *Diccionario K'ichean* corpus. Siri Smeets's *A Grammar of Mapuche* (de Gruyter, 2008) grounds my Mapudungun assessments.

---

## Issues

**1. NAVAJO `water.js` — spurious aspiration: `tó` → /tʰóː/**

`nv: ["tó", "tʰóː"]`

Navajo has a two-way stop contrast: plain/unaspirated (t, k, …) vs. ejective (tʼ, kʼ, …). There is **no aspirated series** in Navajo phonology (Young & Morgan 1987 §2). The IPA /tʰ/ is a complete fabrication. The correct transcription is /tóː/ (high-toned long vowel, plain alveolar stop).

---

**2. NAVAJO `fire.js` — spurious aspiration: `kǫʼ` → /kʰõːʔ/**

`nv: ["kǫʼ", "kʰõːʔ"]`

Same systematic error as #1. Navajo /k/ is a plain velar stop; there is no /kʰ/ in the language. The ǫ orthographic symbol marks nasalisation of the vowel; the final ʼ marks the glottal stop. Correct IPA: /kõːʔ/.

---

**3. NAVAJO `hello.js` / `good.js` — ejective misread as aspirated: `yáʼátʼééh` → /jɑ́ːʔɑ́tʰéːh/**

`nv: ["yáʼátʼééh", "jɑ́ːʔɑ́tʰéːh"]`

The orthographic *tʼ* is an ejective stop (superscript hook = ejective marker in Navajo orthography). The IPA column transcribes it as /tʰ/ (aspirated), which is both phonemically non-existent in Navajo and acoustically opposite to an ejective. Correct: /jɑ́ːʔɑ́tʼéːh/.

---

**4. NAVAJO `tree.js` — redundant tie-bar affricate: `tsin` → /t͡sin/**

`nv: ["tsin", "t͡sin"]`

In Navajo, the digraph *ts* is a single affricate phoneme /ts/. The IPA tie-bar notation /t͡s/ is technically redundant but, more importantly, it misrepresents the syllable structure: *tsin* = /tsin/ (affricate onset, not a cluster). Standard descriptive practice (Mithun 1999) does not use the tie-bar here. Correct: /tsin/.

---

**5. MAPUDUNGUN `dog.js` — retroflex affricate missing: `trewa` → /tɾewa/**

`arn: ["trewa", "tɾewa"]`

The digraph *tr* in Mapudungun is **not** the sequence /t/ + trill /ɾ/. As analysed in Smeets (2008: §2.1.4) and confirmed in Arnold & Zuñiga (2008), *tr* represents the **retroflex affricate /ʈʂ/**. The current IPA /tɾewa/ suggests Spanish-like tap where none exists. Correct: /ʈʂewa/.

---

**6. QUECHUA `eat.js` — aspirate rendered as fricative: `mikhuy` → /mixuj/**

`qu: ["mikhuy", "mixuj"]`

In Quechua (including the southern varieties nominally covered by the `qu` code), *kh* is the **aspirated velar stop /kʰ/**; there is no /x/ in Quechua phonology (Cerrón-Palomino 1987 §3). The sibling entry `cqu: ["mikhuy", "mikʰuj"]` gets this right. The `qu` IPA /mixuj/ is incorrect. Correct: /mikʰuj/.

---

**7. MAM `dog.js` — palatal ejective affricate decomposed: `txʼyan` → /tʼʃjan/**

`mam: ["txʼyan", "tʼʃjan"]`

Mam *txʼ* is a single phoneme: the **palatal ejective affricate /tʃʼ/** (England 1983: §1.2). The IPA column incorrectly decomposes it into a sequence /tʼ/ + /ʃ/, reversing the order of the ejective diacritic and the fricative component. Correct: /tʃʼjan/.

---

**8. INUPIAQ `sun.js` — palatal nasal assigned to velar position: `siqiñiq` → /siqiɲiq/**

`ipk: ["siqiñiq", "siqiɲiq"]`

In Inupiaq orthography, *ñ* (or *ng* depending on the variant) represents the **velar nasal /ŋ/**, not the palatal nasal /ɲ/ (MacLean 1980; Kaplan 1981). The symbol /ɲ/ belongs to the palatal series (as in Spanish *ñ*), but Inupiaq lacks a palatal nasal phoneme. Correct: /siqiŋiq/.

---

**9. INUPIAQ `one.js` — non-Inupiaq vowel quality: `atausiq` → /ataʊʃiq/**

`ipk: ["atausiq", "ataʊʃiq"]`

Inupiaq has three vowel qualities: /a/, /i/, /u/ (Kaplan 1981 §2). The near-back rounded vowel /ʊ/ is not a phoneme in the language; its intrusion here apparently reflects an English (or German) phonetic bias. Additionally, Inupiaq *s* before *i/q* may surface as a palato-alveolar, but representing it as /ʃ/ without further comment is unwarranted. Correct IPA: /atausiq/.

---

**10. YUCATEC MAYA — tone markers absent system-wide**

Entries in `yuc` throughout the dataset (e.g., `eye.js`, `fire.js`, `dog.js`, `moon.js`, `sun.js`, `water.js`) lack **tonal diacritics** in the IPA column. Yucatec (Yukatek) Maya is a **tone language** with a phonemic distinction between level/falling tone and a glottalised/creaky-voice tone on vowels (Straight 1976; Bricker et al. 1998). No IPA entry carries a tone mark. This is a systematic omission affecting every attested `yuc` entry.

---

**11. YUCATEC MAYA `moon.js` / `sun.js` — colonial *th* misread as dental fricative: `zethla`/`dethla` → /zɛθla/, /dɛθla/**

`yuc: ["zethla", "zɛθla"]`; `yuc: ["dethla", "dɛθla"]`

The *th* sequence in these colonial-orthography-derived forms represents the **velar or glottal fricative /h/** (or /x/), not the dental fricative /θ/. Yukatek has no /θ/; the dental fricative is a European phone. The IPA /θ/ is an anglophone misinterpretation of historical spelling. Correct: /zehla/, /dehla/ (or /zeχla/, /deχla/ per some analyses).

---

**12. MAM `sun.js` — word-final *j* mapped to uvular fricative: `qʼij` → /qʼiχ/**

`mam: ["qʼij", "qʼiχ"]`

In Mam, word-final *j* is realised as **[h]**, not [χ] (England 1983 §1.3.3). While medial *j* can approach a velar/uvular articulation, the final position is consistently a glottal fricative. The IPA /χ/ (voiceless uvular fricative) overstates the place of articulation. Contrast: `quc: ["qʼij", "qʼih"]` (K'iche') correctly uses /h/. Mam should follow the same analysis. Correct: /qʼih/.

---

**13. MOHAWK `hello.js` — vowel length lost in IPA: `she:kon` → /ʃekon/**

`moh: ["she:kon", "ʃekon"]`

In Mohawk orthography, a colon after a vowel marks **long vowel** (Bonvillain 1973; Mithun 1999 §6). The IPA column /ʃekon/ drops the length entirely. Correct: /ʃeːkon/.

---

**14. CENTRAL ALASKAN YUP'IK `dog.js` — voiced velar fricative replaced by voiceless: `qimugta` → /qimuxta/**

`esu: ["qimugta", "qimuxta"]`

Yup'ik *g* (intervocalic/postvocalic) represents the **voiced velar fricative /ɣ/**, not the voiceless /x/ (Jacobson 1984 §2.3). The pair g ∼ k is a voiced/voiceless contrast, paralleling the uvular pair r ∼ q. Replacing /ɣ/ with /x/ conflates the voiced and voiceless series. Correct: /qimuɣta/.

---

**15. CHEYENNE `moon.js`/`love.js`/`sun.js` — glottal stop symbol inconsistency: ˀ vs. ʔ**

`chy: ["ame'háo'o", "ameˀhaˀoʔo"]`; `["méhotó'o", "meˀhotoʔo"]`; `["éše'he", "eˀʃeˀhe"]`

Within individual IPA strings and across entries, Cheyenne glottal stops are represented by two different Unicode characters: **U+02C0 ˀ** (modifier letter glottal stop, a superscript diacritic) and **U+0294 ʔ** (Latin letter glottal stop, the standard IPA symbol). These are not interchangeable; IPA requires ʔ. The mixed usage is both typographically incorrect and editorially inconsistent. All instances should use /ʔ/.

---

**16. LAKOTA `love.js` — Lakota *ȟ* mistranscribed as voiced uvular: `thečhíȟila` → /tʰetʃʰíʁila/**

`lkt: ["thečhíȟila", "tʰetʃʰíʁila"]`

In the Lakota writing system (Buechel & Manhart 2002; Ullrich 2008 *New Lakota Dictionary*), *ȟ* represents the **voiceless velar fricative /x/**. The IPA column uses /ʁ/, which is the **voiced uvular fricative** — different place (uvular vs. velar), different voicing. Correct: /tʰetʃʰíxila/. The Lakota entry for fire (*pȟéta* → /pʰéta/) correctly handles *pȟ* = /pʰ/, showing the problem is isolated to the ȟ digraph reading.

---

**17. KAQCHIKEL `love.js` — stem vowel quality and affricate onset: `ajowabʼäl` → /axowaɓæl/**

`cak: ["ajowabʼäl", "axowaɓæl"]`

Two sub-issues: (a) Kaqchikel *j* = /x/ (velar fricative), so *aj-* → /ax-/ is correct. However (b) the vowel *ä* in Kaqchikel (and K'ichean languages generally) is a **mid-central /ə/** (England & Elliot 1990), not the front /æ/ suggested by the IPA choice. Substituting /æ/ introduces an English-phonology bias. Correct vowel: /ə/ → /axowaɓəl/.

---

**18. CHEROKEE `dog.js`/`eat.js`/`eye.js` etc. — voiced stop /ɡ/ for phonemically voiceless stops**

`chr: ["ᎩᏟ", "ɡitli"]`; `["ᎠᎩᏍᏔ", "aɡista"]`; `["ᎠᎦᏘ", "aɡati"]`; etc.

Cherokee (both Eastern and Western dialects) phonologically has a single series of **voiceless unaspirated stops** /k/, /t/, /ts/, /tʃ/, /ʔ/. The IPA symbol /ɡ/ (voiced velar plosive) does not belong to Cherokee phoneme inventory (Scancarelli 2005; Mithun 1999 §16). Intervocalic voicing is allophonic but surface phonology treats these as /k/. The consistent use of /ɡ/ in IPA misrepresents the phonemic system.

---

**19. NAHUATL (Classical) `thanks.js` — floating aspiration diacritic: `tlazōhcāmati` → /tɬasoːʰkaːmati/**

`nci: ["tlazōhcāmati", "tɬasoːʰkaːmati"]`

The IPA string contains /ʰ/ (superscript h, aspiration diacritic) as a **free-floating segment** between /oː/ and /k/. In IPA, ʰ is a diacritic that must attach to the consonant it modifies; it cannot stand alone as if it were a full segment. Classical Nahuatl *h* here likely represents a glottal fricative /h/ or the saltillo (glottal stop). The notation /tɬasoːʰkaːmati/ is ill-formed; correct choices are /tɬasoːhkaːmati/ (fricative reading) or /tɬasoːʔkaːmati/ (glottal stop reading).

---

**20. ALEUT `cat.js` — retroflex sibilant /ʂ/ not an Aleut phoneme: `кошкаах̆` → /koʂkaːχ/**

`ale: ["кошкаах̆", "koʂkaːχ"]`

The retroflex sibilant /ʂ/ does not appear in Aleut (Unangan) phonology (Bergsland 1997 *Aleut Grammar*). Aleut has /ʃ/ (palato-alveolar) and /s/ (alveolar), but no retroflex series. The Cyrillic *ш* in the display form corresponds to the palato-alveolar /ʃ/. The IPA should use /ʃ/, not /ʂ/. Correct: /koʃkaːχ/.

---

**21. QUECHUA (generic `qu`) `heart.js` — uvular /q/ carried into IPA without disambiguation: `sunqu` → /sunqu/**

`qu: ["sunqu", "sunqu"]`

The IPA column reproduces the orthographic string verbatim, leaving *qu* unanalysed. In Quechua phonology, word-final *q* is the **uvular stop /q/**, which is distinct from /k/ and phonemically contrastive (Cerrón-Palomino 1987 §3.2). An IPA transcription should make this distinction explicit. The sibling entry `cqu: ["sunqu", "suŋqu"]` goes in a different direction (rendering *q* as /ŋ/ before the uvular, reflecting assimilation), but the plain `qu` entry provides no IPA analysis at all. Correct: /sunqu/ is passable only if the data format explicitly treats the IPA column as a phonemic transcription using Quechua orthographic conventions — otherwise /sunq/ (without the epenthetic vowel copy) or a fully explicit /sunqu̥/ is needed.

---

*Review completed 2026-05-31. Sources: Young & Morgan (1987), Mithun (1999), Campbell (1997), Adelaar & Muysken (2004), Cerrón-Palomino (1987, 1994), Smeets (2008), England (1983), Ullrich (2008), Bergsland (1997), Kaplan (1981), Jacobson (1984).*

---

## Worker round-1 response (作業者round-1)

Verified every cited entry verbatim against `words/*.js`. IPA-only corrections applied where the reviewer identified a clear, language-internal phonological error or an ill-formed/inconsistent transcription. System-level convention choices and underspecified additions held with rationale. Surface orthography left untouched throughout.

**Applied (IPA column only):**

- **#1 — `water.js` nv** `tʰóː` → `tóː` (applied by orchestrator this round). Navajo has no aspirated stop series (Young & Morgan 1987); spurious /tʰ/ removed.
- **#2 — `fire.js` nv** `kʰõːʔ` → `kõːʔ` (applied by orchestrator this round). Same fabrication; /k/ is plain velar.
- **#3 — `hello.js` & `good.js` nv** `jɑ́ːʔɑ́tʰéːh` → `jɑ́ːʔɑ́tʼéːh` (applied by orchestrator this round, both files). Orthographic `tʼ` is an ejective, not aspirated; /tʰ/ is acoustically opposite and non-phonemic.
- **#5 — `dog.js` arn** `tɾewa` → `ʈʂewa` (applied by orchestrator this round). Mapudungun `tr` = retroflex affricate /ʈʂ/ (Smeets 2008 §2.1.4), not /t/+tap.
- **#6 — `eat.js` qu** `mixuj` → `mikʰuj` (applied by orchestrator this round). `kh` = aspirated /kʰ/; no /x/ in Quechua. Sibling `cqu` already correct.
- **#7 — `dog.js` mam** `tʼʃjan` → `tʃʼjan` (applied by orchestrator this round). `txʼ` is a single palatal ejective affricate /tʃʼ/, not a /tʼ/+/ʃ/ sequence.
- **#8 — `sun.js` ipk** `siqiɲiq` → `siqiŋiq` (applied by orchestrator this round). Inupiaq `ñ` = velar nasal /ŋ/; the language has no palatal nasal.
- **#9 — `one.js` ipk** `ataʊʃiq` → `atausiq` (applied by orchestrator this round). /ʊ/ is not an Inupiaq vowel phoneme (inventory /a i u/); /ʃ/ unwarranted — reviewer's /atausiq/ adopted.
- **#11 — `moon.js` & `sun.js` yuc** `zɛθla` → `zɛhla`, `dɛθla` → `dɛhla` (applied by orchestrator this round). /θ/ is not a Maya phoneme; `th` here = /h/. (Surface forms themselves look non-canonical but were not in scope to change.)
- **#12 — `sun.js` mam** `qʼiχ` → `qʼih` (applied by orchestrator this round). Word-final `j` = [h] in Mam (England 1983 §1.3.3); sibling `quc` K'iche' already uses /h/.
- **#13 — `hello.js` moh** `ʃekon` → `ʃeːkon` (applied by orchestrator this round). Orthographic colon marks vowel length, dropped in original IPA.
- **#14 — `dog.js` esu** `qimuxta` → `qimuɣta` (applied by orchestrator this round). Yup'ik intervocalic `g` = voiced velar fricative /ɣ/ (Jacobson 1984 §2.3).
- **#15 — `moon.js`/`sun.js`/`love.js` chy** normalize U+02C0 `ˀ` → U+0294 `ʔ` in IPA: `ameˀhaˀoʔo` → `ameʔhaʔoʔo`, `eˀʃeˀhe` → `eʔʃeʔhe`, `meˀhotoʔo` → `meʔhotoʔo` (applied by orchestrator this round). Standard IPA glottal stop is ʔ; the mixed usage was internally inconsistent — clean mechanical normalization.
- **#16 — `love.js` lkt** `tʰetʃʰíʁila` → `tʰetʃʰíxila` (applied by orchestrator this round). Lakota `ȟ` = voiceless velar fricative /x/ (Ullrich 2008), not voiced uvular /ʁ/.
- **#17 — `love.js` cak** `axowaɓæl` → `axowaɓəl` (applied by orchestrator this round). Kaqchikel `ä` = mid-central /ə/ (England & Elliot 1990); /æ/ is an anglophone bias. (`aj-` = /ax-/ already correct, left as-is.)
- **#19 — `thanks.js` nci** `tɬasoːʰkaːmati` → `tɬasoːhkaːmati` (applied by orchestrator this round). Free-floating /ʰ/ is ill-formed IPA; resolved to fricative /h/ reading.
- **#20 — `cat.js` ale** `koʂkaːχ` → `koʃkaːχ` (applied by orchestrator this round). Aleut has /ʃ/ and /s/ but no retroflex /ʂ/ (Bergsland 1997).

**Held — won't-fix / needs reviewer decision:**

- **#4 — `tree.js` nv tie-bar `t͡sin`.** Held as project-wide convention. The tie-bar /t͡s/ is the dataset's standard affricate notation, used consistently across 17 files (e.g. `ka` t͡set͡sxli, `eu` suhait͡s, `abq` mt͡sa). Reviewer concedes it is "technically redundant." Stripping it for nv alone would create local inconsistency without correcting any phonemic content. Not a local error.
- **#10 — yuc tone markers system-wide.** Held. Adding phonemic tone to every `yuc` entry is a systematic enrichment requiring per-form tone analysis and reviewer-supplied values, not a mechanical local fix. Several `yuc` surface forms also appear non-canonical, so blanket tone insertion is premature. Needs a dedicated, value-specified pass.
- **#18 — chr `ɡ` → `k` across the dataset.** Held as a system-level phonemic-convention choice. Reviewer acknowledges intervocalic voicing is allophonic; whether to transcribe surface voiced allophones or underlying voiceless phonemes is a corpus-wide convention decision affecting many `chr` entries, not an isolated error. Defer to a team convention ruling.
- **#21 — `heart.js` qu `sunqu`.** Held. Reviewer states `/sunqu/` "is passable" and offers no single unambiguous correction (alternatives /sunq/, /sunqu̥/ depend on whether the IPA column is phonemic-with-orthographic-conventions). No clear local error.

**Summary:** 16 findings applied as IPA-only corrections across 13 files; 4 held (1 convention, 1 underspecified system enrichment, 1 system-level convention, 1 no-clear-correction).

---

## Reviewer round-1 response (再評価 round-1)

I re-read every cited entry against the live `words/*.js` data (grep-verified, not taking the worker's word for it). All 16 claimed IPA corrections are genuinely present in the data. Per-item adjudication below.

**Applied corrections — verified in live data, accepted:**

- **#1 ✓** `water.js` nv → `["tó", "tóː"]`. /tʰ/ removed; plain /t/ confirmed. Correct.
- **#2 ✓** `fire.js` nv → `["kǫʼ", "kõːʔ"]`. /kʰ/ removed. Correct.
- **#3 ✓** `hello.js` & `good.js` nv → `["yáʼátʼééh", "jɑ́ːʔɑ́tʼéːh"]` in both files. Ejective /tʼ/ restored. Correct.
- **#5 ✓** `dog.js` arn → `["trewa", "ʈʂewa"]`. Retroflex affricate. Correct (Smeets 2008).
- **#6 ✓** `eat.js` qu → `["mikhuy", "mikʰuj"]`, now matching sibling `cqu`. Correct.
- **#7 ✓** `dog.js` mam → `["txʼyan", "tʃʼjan"]`. Single palatal ejective affricate. Correct.
- **#8 ✓** `sun.js` ipk → `["siqiñiq", "siqiŋiq"]`. Velar nasal. Correct.
- **#9 ✓** `one.js` ipk → `["atausiq", "atausiq"]`. /ʊ/ and /ʃ/ removed. Correct.
- **#11 ✓** `moon.js`/`sun.js` yuc → `zɛhla`/`dɛhla`. /θ/ removed. Correct as an IPA-internal fix (caveat: the surface forms themselves are not canonical Yucatec — see #10).
- **#12 ✓** `sun.js` mam → `["qʼij", "qʼih"]`, matching K'iche' `quc`. Correct.
- **#13 ✓** `hello.js` moh → `["she:kon", "ʃeːkon"]`. Length restored. Correct.
- **#14 ✓** `dog.js` esu → `["qimugta", "qimuɣta"]`. Voiced velar fricative. Correct (Jacobson 1984).
- **#15 ✓** `moon.js`/`sun.js`/`love.js` chy → all glottal stops now U+0294 ʔ (`ameʔhaʔoʔo`, `eʔʃeʔhe`, `meʔhotoʔo`). No residual U+02C0 found. Correct.
- **#16 ✓** `love.js` lkt → `tʰetʃʰíxila`. ȟ = velar /x/. Correct (Ullrich 2008).
- **#17 ✓** `love.js` cak → `axowaɓəl`. /æ/ → /ə/. Correct (England & Elliot 1990).
- **#19 ✓** `thanks.js` nci → `tɬasoːhkaːmati`. Free-floating /ʰ/ resolved to /h/. Ill-formed IPA fixed. Correct.
- **#20 ✓** `cat.js` ale → `koʃkaːχ`. /ʂ/ → /ʃ/. Correct (Bergsland 1997).

**Held items — adjudicated:**

- **#4 ✓ (accept hold).** `tree.js` nv is live as `["tsin", "t͡sin"]`. I confirmed the tie-bar `t͡s`/`t͡ʃ` is a pervasive dataset-wide convention (19 files, dozens of unrelated languages — Russian `sont͡sɨ`, Polish `ˈswɔɲt͡sɛ`, etc.). My original wording already conceded it is "technically redundant," i.e. not a phonemic error. Stripping it for nv alone would create local inconsistency. Worker's convention hold is correct; I withdraw this as an actionable item.
- **#10 △ (accept hold, defer).** yuc tone markers absent system-wide — confirmed (e.g. `tʃa`, `tsoda`, `ʃela` carry no tone). Worker correctly flags that the underlying `yuc` *surface* forms are themselves non-canonical/spurious (e.g. `zethla`, `dethla`, `tsoda` are not attested Yucatec lexemes). Blanket tone insertion over corrupt surface data would be premature; this needs a dedicated, value-specified pass (ideally fixing the surface forms first). Not a mechanical IPA fix. Defensible to defer.
- **#18 ✓ (accept hold).** chr `ɡ` confirmed live (`ɡitli`, `aɡista`, `aɡati`). Whether to transcribe surface intervocalic voiced allophones or underlying voiceless phonemes is a genuine corpus-wide convention question, not an isolated error, and the transcription is phonetically defensible (intervocalic voicing is real allophony). System-level convention call; reasonable to hold.
- **#21 ✓ (accept; note correction).** The review quoted `qu: ["sunqu", "sunqu"]`, but the LIVE data is `heart.js` qu = `["sunqu", "suŋqu"]` — i.e. it already carries the same /n/→/ŋ/ uvular-assimilation analysis as sibling `cqu: ["sunqu", "suŋqu"]`. So the "no IPA analysis at all" concern in my original #21 does not apply to current data; the IPA is analysed and internally consistent with the sibling. Nothing to fix. (Whether the review's quote was stale or it was corrected earlier, the live state is correct.)

**New issues:** none. Spot-checking adjacent yuc/chr/qu entries during verification surfaced no additional defensible phonological errors beyond what is already catalogued above.

**Scorecard:** 16/16 applied IPA fixes verified present and correct in live data. 4/4 held items adjudicated as defensible (1 dataset convention, 1 underspecified enrichment to defer, 1 system-level convention, 1 already-correct-in-live-data). No claimed fix was missing. No new actionable issues.

**File status: CLOSED** — nothing left to address; all clear errors fixed-and-verified in live data, all remaining items accepted as defensible convention/system-level/defer calls.
