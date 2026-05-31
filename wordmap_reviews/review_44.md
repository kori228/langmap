# Wordmap review #44 — Khmer + Mon + Munda specialist

## Reviewer self-introduction

My expertise covers the Austroasiatic family with particular depth in its Mon-Khmer and Munda branches. Primary reference texts I work from: Headley (1977) *Cambodian-English Dictionary*; Huffman (1970) *Cambodian System of Writing and Beginning Reader*; Bauer (1982) *The Morphology and Syntax of Spoken Mon*; Bhattacharya (1975) *Studies in Comparative Munda Linguistics*; Sidwell (2010) "The Austroasiatic Central Riverine Hypothesis"; Jenny & Sidwell (2014) *The Handbook of Austroasiatic Languages*. I also draw on Diffloth (1972) for Bahnaric and Katuic reconstruction and Zide (1965) for Munda morphophonology.

My focal specialisation is register phonation (modal vs breathy vs creaky voice) in Khmer and Mon, sesquisyllabic (minor-syllable + main-syllable) structure, and the glottalized/implosive consonant inventory of Munda languages.

---

## Issues

### KHMER (km)

**Issue 1 — water.js: IPA omits register notation for ទឹក /tɨk/**
- File: `words/water.js:146` — `km: ["ទឹក", "tɨk"]`
- Current IPA: `tɨk`
- Khmer operates via a two-register system conditioned by the initial consonant class. ទ is a second-series (breathy/low-register) consonant, so the vowel inherits breathy-register phonation. The transcription `tɨk` looks identical to how a first-series (clear-register) syllable would be rendered. Standard practice (Huffman 1970, Headley 1977) distinguishes the register; the breathy-register realisation is closer to /dɨk/ or transcribed with the low-register marker. Simply writing `tɨk` implies clear-voice modal phonation and misrepresents the contrast to learners.
- Recommended fix: `tɨk` → `dɨk` (using the voiced initial that signals second register) or add a register diacritic note.

**Issue 2 — good.js: IPA for ល្អ encodes a non-phonemic glottal stop mid-cluster**
- File: `words/good.js:146` — `km: ["ល្អ", "lʔɑː"]`
- Current IPA: `lʔɑː`
- ល្អ is written with the subscript ្អ but in natural Khmer the sequence is realised as a syllable-initial cluster /lʔ-/ only in hyper-formal or reading pronunciation. Colloquially the glottal-stop component assimilates and the realisation is [lɑː] with a low/creaky-register onset. Inserting `ʔ` as a segment between `l` and `ɑː` misrepresents the phonology; the register distinction is in the voice quality of the vowel, not a literal glottal stop consonant.
- Recommended fix: `lʔɑː` → `lɑː` (second-register vowel); if a register marker is used system-wide, tag as second-register.

**Issue 3 — house.js: IPA for ផ្ទះ flattens the sesquisyllabic structure**
- File: `words/house.js:146` — `km: ["ផ្ទះ", "pdɛəh"]`
- Current IPA: `pdɛəh`
- ផ្ទះ has the orthographic cluster ផ្ទ-. In Khmer phonology this is not a simple onset cluster; it is a reduced minor syllable /pə-/ plus the main syllable /tɛːh/ — a canonical sesquisyllabic pattern. Rendering it as `pdɛəh` suppresses the schwa of the minor syllable and presents a non-native-like two-consonant onset.
- Recommended fix: `pdɛəh` → `pə.tɛːh` (or `pʰdɛːh` if the aspiration-spread reading is preferred, but the schwa-reduction analysis is standard in Huffman 1970).

**Issue 4 — sun.js: non-standard IPA diacritic `ĕ` in prĕəh**
- File: `words/sun.js:580` — `km: ["ព្រះអាទិត្យ", "prĕəh ʔaːtɨt"]`
- `prĕəh` uses `ĕ` (IPA is not a recognised IPA symbol; it is a romanisation convention from Huffman/Headley). Within a strict IPA string the correct representation would use the full diphthong: /priəh/ or /prĕːəh/ rendered as [prɨəh]. The mixed romanisation/IPA hybrid `ĕ` is inconsistent with every other Khmer IPA entry.
- Recommended fix: `prĕəh` → `prɨəh` (IPA-only).

**Issue 5 — moon.js: same non-standard `ĕ` issue; register of ចន្ទ ignored**
- File: `words/moon.js:146` — `km: ["ព្រះចន្ទ", "prĕəh cɑn"]`
- Same `ĕ` problem as above. Additionally, ចន្ទ /cɑn/ is a first-series (clear-voice) syllable, which is correctly implied by `c-`; but cɑn lacks the final nasal in careful speech — the correct realisation is /caːn/ not /cɑn/ (short /ɑ/ is not the standard vowel here). Headley (1977) gives ចន្ទ as /cɑːn/.
- Recommended fix: `prĕəh cɑn` → `prɨəh caːn`.

**Issue 6 — eat.js: register ambiguity for ញ៉ាំ**
- File: `words/eat.js:146` — `km: ["ញ៉ាំ", "ɲam"]`
- ញ is a second-series consonant (inherently breathy register). The musically-marked vowel ា in second-series context realises as a nasalised /am/ with breathy phonation. `ɲam` looks exactly like an unregistered IPA form. The entry should signal the second-series realisation — the colloquial form in Phnom Penh Khmer is actually closer to [ɲɔam] or [ɲɔːm] rather than plain [ɲam].
- Recommended fix: `ɲam` → `ɲɔam` (or at minimum note the breathy-register voice quality).

**Issue 7 — dog.js: vowel /æː/ is non-standard for ឆ្កែ**
- File: `words/dog.js:146` — `km: ["ឆ្កែ", "cʰkæː"]`
- The vowel symbol æː is drawn from romanisation conventions rather than standard Khmer IPA. The accepted IPA transcription of ែ in first-series (clear-register) context — which applies here since ឆ is first-series — is /ɛː/. Headley (1977) and Huffman (1970) both transcribe this vowel as /ɛː/.
- Recommended fix: `cʰkæː` → `cʰkɛː`.

---

### MON (mnw)

**Issue 8 — hello.js: entry appears to be a phrase, not a word; IPA is mis-segmented**
- File: `words/hello.js:1070` — `mnw: ["ပ္ဍဲဂေါဝ်", "ɓɔŋ kaow"]`
- The display form ပ္ဍဲဂေါဝ် does not literally mean "hello." ပ္ဍဲ is a locative particle ("at/in") and ဂေါဝ် is a pronoun/title. The phrase is a greeting formula whose IPA is given as `ɓɔŋ kaow` — but `ɓɔŋ` is the IPA listed for Mon *cat* (see cat.js:1070), not for any element in this string. The IPA is plainly wrong: the written characters ပ္ဍဲဂေါဝ် should romanise closer to /pɗɛ kaow/. The `ɓɔŋ` transcription has been copy-pasted from the cat entry in error.
- Recommended fix: audit the origin of `ɓɔŋ` in this entry and replace with accurate IPA for the greeting form (tentatively /pɗɛ kaow/ or the Mon conventional greeting တၚ်ဂေါဝ်).

**Issue 9 — cat.js: register marking missing for ဗ္ဍိုၚ်**
- File: `words/cat.js:1070` — `mnw: ["ဗ္ဍိုၚ်", "ɓɔŋ"]`
- Mon is a two-register language. ဗ is a breathy-register initial; the IPA `ɓɔŋ` uses an implosive `ɓ` which approximates the breathy-voice onset but does not fully signal the register phonation of the vowel. Bauer (1982) notes that Mon vowels in the breathy register have clearly distinct quality and duration from their clear-register counterparts. A phonemic transcription should mark the register, e.g. /bɔ̤ŋ/ (breathy-voice diacritic on the vowel).
- Recommended fix: `ɓɔŋ` → `b̤ɔŋ` or `bɔ̤ŋ` (IPA breathy-voice diacritic).

**Issue 10 — dog.js: IPA /klɛp/ is inconsistent with the written Mon ပ္ၟိၚ်**
- File: `words/dog.js:1082` — `mnw: ["ပ္ၟိၚ်", "klɛp"]`
- The script form ပ္ၟိၚ် represents a Mon word with initial cluster ပ္ၟ (p+subscript-ŋ or similar), a vowel ိ (i), and a final ၚ် /ŋ/. The expected reading is something like /pŋiŋ/ or /klɛŋ/ — but the IPA given is /klɛp/ with a final plosive /p/ that does not correspond to any character in ပ္ၟိၚ်. The final ၚ် is the nasal /ŋ/. The IPA final /p/ is an error.
- Recommended fix: `klɛp` → `klɛŋ` (or review the script form for accuracy).

**Issue 11 — fire.js: IPA /pəmoʔ/ does not match Mon script ပၟတ်**
- File: `words/fire.js:1082` — `mnw: ["ပၟတ်", "pəmoʔ"]`
- ပၟတ် has initial ပၟ (p + subscript), vowel implicit (inherent /a/), and final တ် which in Mon orthography represents a stop-final /t/ or /ʔ/. The IPA `pəmoʔ` contains an /m/ and /o/ that do not correspond to any character in the script. This looks like a different word's transcription attached to the wrong script. The expected IPA from the written form would be something like /pnɔʔ/ or /pnɑt/.
- Recommended fix: verify the correct Mon word for "fire" (likely ပၟတ် = /pnɔʔ/ ~ /pnɑt/); discard the `pəmoʔ` IPA which is internally inconsistent with the script.

**Issue 12 — hand.js: IPA /toa/ inconsistent with written တဲ**
- File: `words/hand.js:1076` — `mnw: ["တဲ", "toa"]`
- တဲ in Mon script has initial တ /t/ and the vowel ဲ which in Mon is typically /ɛ/ or /e/. Bauer (1982) gives the Mon word for hand as /tɛ/ or /te/. The IPA `toa` introduces a rounded vowel /o/ plus offglide /a/ that is not supported by the script or established Mon phonology for this word.
- Recommended fix: `toa` → `tɛ` (or `/te/` per Bauer 1982).

**Issue 13 — one.js: IPA /mwoa/ is a non-phonemic representation for မွဲ**
- File: `words/one.js:1088` — `mnw: ["မွဲ", "mwoa"]`
- မွဲ has initial မ /m/, medial ွ (labialisation), and vowel/final ဲ. The labialised onset can be rendered as /mʷ-/ but the vowel ဲ is /ɛ/ not /oa/. The sequence `mwoa` is a romanisation hybrid rather than IPA. Mon "one" is typically /moa/ or /mwɛ/ in established sources; the vowel needs to be standardised to IPA.
- Recommended fix: `mwoa` → `mwɛ` (if labialised onset + /ɛ/ vowel), or verify against Bauer (1982).

**Issue 14 — sun.js: IPA /tŋoa/ for တ္ၚဲ contains the same romanisation-hybrid vowel**
- File: `words/sun.js:1088` — `mnw: ["တ္ၚဲ", "tŋoa"]`
- တ္ၚဲ has initial cluster တ္ၚ /tŋ/ and vowel ဲ /ɛ/. The IPA `tŋoa` again uses `oa` for what should be /ɛ/ or /e/. The consonant cluster itself — /tŋ/ — is unusual and may reflect a sesquisyllabic minor-syllable reduction (the first element being a reduced syllable), which the flat two-consonant cluster notation hides.
- Recommended fix: `tŋoa` → `tŋɛ`; consider adding minor-syllable notation if the structure is /tə.ŋɛ/.

---

### WA (wbm)

**Issue 15 — water.js: tone missing for Wa /rɔm/**
- File: `words/water.js:1078` — `wbm: ["rom", "rɔm"]`
- Wa is a tonal language with at least four tones (high, mid, low, falling). The display form `rom` and IPA `rɔm` carry no tone mark. Every Wa lexical entry should bear a tone diacritic; its absence makes the entry phonologically incomplete and potentially misleading (homophonous tone classes merge).
- Recommended fix: add the appropriate tone number or IPA tone mark, e.g. `rɔm˩` (low) or `rɔm˥` depending on the actual tone.

**Issue 16 — consistent absence of tone marks across all Wa entries**
- Files: all wbm entries (meo, dim, cha, ɔk, so, ngai, sao, nuim, maiʔ, ngo, ti, rɔm, hak, etc.)
- Not a single Wa entry across any of the 20 word files carries a tone mark. Wa is well-documented as tonal (Diffloth 1980; Sidwell 2014), contrasting minimally by tone. The systematic omission of all tone marks is a structural deficiency, not an isolated slip.
- Recommended fix: audit all wbm IPA strings and add tone marks from a reliable Wa dictionary source.

**Issue 17 — drink.js: Wa display form is a raw IPA string, not native script or romanisation**
- File: `words/drink.js:1065` — `wbm: ["ɔk", "ɔk"]`
- The display field (first element of the pair) should contain the native form — in Wa's case, either the Myanmar-script orthography used in Shan State or a standardised Latin romanisation. Instead, the display field contains the IPA symbol `ɔk` directly, which is phonetic notation rather than a display form. Every other language in the dataset uses a distinct display and IPA string; this entry collapses them.
- Recommended fix: provide a display-field form in Wa Latin orthography (e.g. `ok` or the Wa script equivalent) separate from the IPA.

---

### KHASI (kha)

**Issue 18 — water.js: gender prefix missing; bare `um` is phonologically incomplete**
- File: `words/water.js:880` — `kha: ["um", "um"]`
- Khasi noun classes are marked by prefixes (u-, ka-, i-, etc.). The word for water in Khasi is `ka um` (feminine class prefix + the root `um`). The data stores only the bare root `um`, dropping the obligatory gender prefix. The form `um` alone is not a free-standing nominal in natural Khasi; it requires the class prefix. Cf. `ka sngi` (sun) and `ka ing` (house) which are correctly given with their prefix.
- Recommended fix: `["um", "um"]` → `["ka um", "ka um"]`.

**Issue 19 — love.js: Khasi `ieid` is an informal/baby-talk or dialectal form; IPA `iəid` is unreliable**
- File: `words/love.js:880` — `kha: ["ieid", "iəid"]`
- The Khasi word for love is typically `ieid` /iej/ in standard Khasi (written `ieid` in the standard orthography), but the IPA `iəid` introduces a mid-central vowel /ə/ that does not appear in the standard phonological analysis. The standard transcription is /jej/ or /ied/. The sequence `iəid` looks like a misparse of the orthographic `ei` digraph as two separate vowels.
- Recommended fix: `iəid` → `jej` (or `ied` following established Khasi phonology references).

**Issue 20 — dog.js: IPA for `u ksew` fails to parse the sesquisyllabic onset cluster**
- File: `words/dog.js:873` — `kha: ["u ksew", "u ksew"]`
- `u ksew` has the class prefix `u` and the root `ksew`. The IPA field is identical to the display field, meaning no phonetic analysis has been attempted. The root /ksew/ is itself a sesquisyllabic structure: /kə.sew/ with a minor syllable reduced schwa before the main syllable. Presenting `ksew` as-is hides this structure and gives readers an unpronounceable onset cluster.
- Recommended fix: IPA should be `u kə.sew` or `u kəsɔː` (the vowel `ew` in Khasi is /ɔː/ or /ew/; verify against a Khasi dictionary).

---

### SANTALI (sat)

**Issue 21 — water.js: transcription omits the glottalized coda**
- File: `words/water.js:581` — `sat: ["ᱫᱟᱜ", "daːk"]`
- The Santali word for water is conventionally `dak` or `da'k` in Munda linguistics literature. Bhattacharya (1975) and Zide (1965) both record a glottalized or ejective coda on this form; the Ol Chiki spelling ᱫᱟᱜ ends with ᱜ which represents the final /k/ — but Santali is known for having glottalized (checked) stops in this position, typically transcribed /daʔk/ or /dak'/ in Munda phonological studies. The plain `daːk` with no glottalisation mark loses a distinctive Munda feature.
- Recommended fix: `daːk` → `daʔk` (or `dak'` depending on the notation convention), and reconsider the long vowel `aː` — the form is typically short /dak/.

**Issue 22 — one.js: Santali `mit` has a final glottalized stop that is unmarked**
- File: `words/one.js:580` — `sat: ["ᱢᱤᱫ", "mit"]`
- Santali 'one' (ᱢᱤᱫ) is /mit/ in many analyses, but Bhattacharya (1975) consistently marks the final stop as glottalized or with a short checked vowel: /miʔ/ or /mit'/ in several Munda comparative studies. The Ol Chiki letter ᱫ is the consonant D/T and its phonological value in final position in Santali involves this glottalized feature. Without the glottal marking, a systematic Munda feature is erased.
- Recommended fix: verify final consonant realisation; if glottalized, mark as `miʔt` or `mit'`.

**Issue 23 — thanks.js: entry is an Indic (Hindi) loan, not a native Santali lexeme**
- File: `words/thanks.js:574` — `sat: ["ᱫᱷᱚᱱᱭᱚᱵᱟᱫ", "dʱonjobad"]`
- ᱫᱷᱚᱱᱭᱚᱵᱟᱫ is a straightforward Ol Chiki rendering of Hindi *dhanyavad* (धन्यवाद), a direct loan. Santali does not have a native word for "thanks" in the same pragmatic sense, but the borrowed form should at minimum be flagged as an Indic calque. The IPA `dʱonjobad` uses aspirated /dʱ/ which is accurate for the Hindi source but the Santali phonological system does not natively distinguish aspirated vs unaspirated voiced stops; this may be an over-faithful rendering of the source language rather than actual Santali phonology.
- Recommended fix: flag as loanword; revise IPA to reflect Santali phonological adaptation, likely `donzobad` or `donjobad`.

**Issue 24 — love.js: `dulaɽi` is a Hindi/Bengali loan; Santali has a native term**
- File: `words/love.js:581` — `sat: ["ᱫᱩᱞᱟᱲᱤ", "dulaɽi"]`
- `dulaɽi` is borrowed from Hindi/Bengali *dulari* (प्रिय/দুলারি). Using a loan for "love" is acceptable if no native form exists, but Santali does have native emotional vocabulary (e.g., `ñutu` or `bhuʈu` for affection in some analyses). At minimum this should be noted as a borrowed term, and the retroflexed flap /ɽ/ in the IPA should be verified against Santali phonology, which does distinguish retroflex consonants natively.
- Recommended fix: note as loanword; verify /ɽ/ vs /r/ or /ɾ/ in Santali phonological context.

---

### HO (hoc)

**Issue 25 — drink.js: Ho `nu` / `nu` — no phonological analysis provided**
- File: `words/drink.js:937` — `hoc: ["nu", "nu"]`
- The display and IPA fields are identical, meaning no phonetic transcription has been supplied. Ho, like other Munda languages, has a complex vowel system with ATR (advanced tongue root) and length distinctions. The bare `nu` tells us nothing about vowel quality or length. Comparative Munda data suggests the root for "drink" across Munda may have ATR specification; for Ho, the form should at minimum carry a vowel length mark or ATR diacritic.
- Recommended fix: add IPA analysis, e.g. `nuː` with appropriate ATR notation if needed.

**Issue 26 — water.js: Ho `daa` / `daː` — inconsistency between display and IPA**
- File: `words/water.js:944` — `hoc: ["daa", "daː"]`
- The display uses a non-standard digraph `daa` (doubled `a` for length) while the IPA correctly uses `daː`. This mixed-convention within the same entry is inconsistent. If the display field is to use native orthography or a standardised Ho romanisation, the doubling convention should be consistent; if it is raw IPA, it should use `daː` uniformly.
- Recommended fix: standardise display to `da` (or `da'` if there is a glottalised variant) with IPA `daː`.

---

### BRU (bru)

**Issue 27 — fire.js: display `oih` vs IPA `ʔoiʔ` — initial glottal stop missing in display**
- File: `words/fire.js:1083` — `bru: ["oih", "ʔoiʔ"]`
- The IPA correctly posits an initial glottal stop /ʔ/ and a final glottal stop /ʔ/, but the display form `oih` writes neither. The final `h` in Bru romanisation typically represents a final fricative or aspiration, not a glottal stop. The disparity between display `oih` (implying final /h/) and IPA `ʔoiʔ` (implying final /ʔ/) is a direct contradiction; one of them is wrong.
- Recommended fix: decide whether the final is /h/ or /ʔ/ and make display and IPA consistent.

**Issue 28 — sun.js: `mat plei` — the compound's minor syllable structure is not reflected in IPA**
- File: `words/sun.js:1089` — `bru: ["mat plei", "mat plei"]`
- Bru `mat plei` is likely a compound meaning "sun-eye" or "sky-eye" (cf. Mon *mat* 'eye'). The display and IPA are identical, so no phonological analysis has been applied. The word `plei` contains a consonant cluster /pl/ that in Katuic languages typically reflects a sesquisyllabic origin /pəlei/; flattening it as `plei` hides the minor syllable.
- Recommended fix: IPA should be `mat pə.lei` or `mat plei˥` with a tone mark.

---

### MUNDARI (mun) / General Munda observation

**Issue 29 — Mundari (mun) entries appear entirely absent from the dataset**
- Code `mun` returns zero hits across all word files. Mundari is one of the better-documented Munda languages (alongside Santali), spoken by over 1.1 million people in Jharkhand. Its absence leaves a significant gap in the Munda branch coverage. The Ho (hoc) entries partially fill this gap but Mundari has distinct phonological features including a more robust series of glottalized stops.
- Recommended fix: add `mun` entries; Bhattacharya (1975) and the EMELD documentation project provide reliable Mundari wordlists.

---

### CROSS-CUTTING

**Issue 30 — Register phonation uniformly absent across all Khmer and Mon entries**
- Affects: all `km` and `mnw` IPA strings
- Neither Khmer nor Mon carries any systematic register or phonation marker (breathy-voice diacritic `̤`, creaky-voice diacritic `̰`, or register superscript) in any of the 20 word files. Both languages are phonologically register languages (Diffloth 1989; Jenny 2005), meaning that the phonation quality of the nuclear vowel is lexically distinctive. An IPA representation that omits all register marking is structurally incomplete for these two languages. The absence is particularly striking for Mon, where register mergers and splits are the primary diachronic engine distinguishing Mon from Proto-Mon-Khmer; the current transcriptions give a false impression that Mon phonology is similar to a non-register language like Vietnamese.
- Recommended fix: adopt a consistent system-wide approach to register notation for register languages (at minimum add `̤` for breathy-register vowels in Khmer/Mon entries).
