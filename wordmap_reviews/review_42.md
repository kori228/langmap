# Wordmap review #42 — Burmese / Karen / Lolo-Burmese specialist

## Reviewer self-introduction

This review applies the following reference works: Wheatley (1985) *Burmese*; Okell (1969) *A Reference Grammar of Colloquial Burmese*; Bradley (1979) *Proto-Loloish*; Burling (1967) *Proto-Lolo-Burmese*; Solnit (1997) *Eastern Kayah Li*; Manson (2010) *A Grammar of Kayan*; Matisoff (2003) *Handbook of Proto-Tibeto-Burman*.

Languages examined: Burmese (my), Rakhine (rki), Mon (mnw), Karen Sgaw (ksw), Karen Pwo (pwo), Kayah Li (kjp), Yi/Nuosu (ii), Hani (hni), Lahu (lhu), Lisu (lis), Naxi (nxq).

---

## Issues

### Yi/Nuosu (ii) — Script-IPA systematic mismatches

**Issue 1 — Yi father: BO syllable transcribed as /da/**
- File: `words/father.js`
- Data: `ii: ["ꀊꀧ", "a˧˧da˧˧"]`
- Unicode: ꀊ = YI SYLLABLE A (/a/), ꀧ = YI SYLLABLE BO (/bo/)
- Script compound reads /a˧bo˧/ (a-prefix + father root), but IPA column shows `a˧˧da˧˧`
- The second syllable is written as /da/ which does not match the BO syllable at all
- Correction: `a˧bo˧` (or per Nuosu Pinyin: a-bo → /a˧bo˧/)

**Issue 2 — Yi moon: NRA syllable transcribed as /hy/**
- File: `words/moon.js`
- Data: `ii: ["ꃅꎖ", "mu˧˧hy˧˧"]`
- Unicode: ꃅ = YI SYLLABLE MU, ꎖ = YI SYLLABLE NRA (/nra/ or /ɳra/)
- IPA shows `hy˧˧` for the NRA syllable — /hy/ bears no resemblance to /nra/
- Correction: `mu˧nra˧` or, per Nuosu description of moon (mu + nra = "sky object"), `mu˧ɳa˧`

**Issue 3 — Yi sun: NGA+BBAP transcribed as /ȵi˧˧mo˧˧/**
- File: `words/sun.js`
- Data: `ii: ["ꉢꁡ", "ȵi˧˧mo˧˧"]`
- Unicode: ꉢ = YI SYLLABLE NGA (/ŋa/), ꁡ = YI SYLLABLE BBAP (/bap/, checked high tone)
- IPA column gives `ȵi˧˧mo˧˧` — both syllables are wrong: ŋ- initial becomes ȵ-, vowels /a/ and /ap/ become /i/ and /o/
- This looks like an independently sourced IPA for a different form (possibly Sani Yi or another dialect), pasted without cross-checking against the script entry
- Correction: `ŋa˧bap˥` (with appropriate checked-tone marking on second syllable)

**Issue 4 — Yi thanks: VO+CO transcribed as /ka˧˧tɕʰɿ˧˧/**
- File: `words/thanks.js`
- Data: `ii: ["ꃰꊿ", "ka˧˧tɕʰɿ˧˧"]`
- Unicode: ꃰ = YI SYLLABLE VO (/vo/), ꊿ = YI SYLLABLE CO (/tso/)
- IPA `ka˧˧tɕʰɿ˧˧` matches neither syllable; /ka/ is not VO, /tɕʰɿ/ is not CO
- Both syllables have wrong initials and wrong vowels
- Correction: `vo˧tso˧`

**Issue 5 — Yi hello: RRE+KU transcribed as /su˧˧kɤ˧˧/**
- File: `words/hello.js`
- Data: `ii: ["ꂿꎆꈐ", "mo˧˧su˧˧kɤ˧˧"]`
- Unicode: ꂿ = MO (/mo/ — correct for first syllable), ꎆ = YI SYLLABLE RRE (/rre/ or retroflex), ꈐ = YI SYLLABLE KU (/ku/)
- Second syllable RRE is transcribed as `su˧˧` — /rre/ ≠ /su/
- Third syllable KU is transcribed as `kɤ˧˧` — /ku/ ≠ /kɤ/; the back unrounded vowel is wrong
- Correction: `mo˧rre˧ku˧` (adjusting for dialectal tone)

**Issue 6 — Yi fire: MUP (checked tone) transcribed with mid-level tone ˧˧**
- File: `words/fire.js`
- Data: `ii: ["ꃆ", "mu˧˧"]`
- Unicode: ꃆ = YI SYLLABLE MUP — the `-p` suffix in Yi Government Pinyin (YGPY) marks a high checked (entering) tone, not mid level
- The correct transcription for a checked syllable is approximately `mu˥ʔ` or `mu˥` depending on analysis; `mu˧˧` is wrong
- Correction: `mu˥ʔ` (high checked)

**Issue 7 — Yi eat: CYT (checked low tone) transcribed as /dza˧˧/**
- File: `words/eat.js`
- Data: `ii: ["ꋊ", "dza˧˧"]`
- Unicode: ꋊ = YI SYLLABLE CYT — `-t` suffix marks low checked tone; vowel is `y` (apical/retroflex unrounded)
- IPA `dza˧˧` has wrong initial (dz ≠ cy-type affricate), wrong vowel (a ≠ apical y), and wrong tone (mid level ≠ low checked)
- Correction: `tsɿ˩ʔ` (or `tsɿ˩` depending on checked-tone analysis in Nuosu)

**Issue 8 — Yi eye: HXEP (checked) transcribed as /ȵi˧˧/**
- File: `words/eye.js`
- Data: `ii: ["ꉜ", "ȵi˧˧"]`
- Unicode: ꉜ = YI SYLLABLE HXEP — initial HX- in YGPY is a voiceless velar or uvular fricative /x~χ/, vowel -e-, `-p` = checked high tone
- IPA `ȵi˧˧` is palatalized /ȵ/ + front vowel /i/ at mid tone — completely different initial, vowel, and tone
- Correction: `xep˥` (approximately /xɛp˥/)

**Issue 9 — Yi hand: LU syllable transcribed as /la˧˧/**
- File: `words/hand.js`
- Data: `ii: ["ꇐ", "la˧˧"]`
- Unicode: ꇐ = YI SYLLABLE LU (/lu/)
- IPA shows `la˧˧` — vowel /a/ ≠ /u/; the syllable is clearly LU not LA
- Nuosu Yi hand = lu˧ (mid tone), matching the script but not the IPA
- Correction: `lu˧`

**Issue 10 — Yi one: CI transcribed as /tsʰɿ/ (spurious aspiration)**
- File: `words/one.js`
- Data: `ii: ["ꊰ", "tsʰɿ˧˧"]`
- Unicode: ꊰ = YI SYLLABLE CI — in YGPY, `c` represents an unaspirated affricate /ts/ (not aspirated /tsʰ/)
- Nuosu Yi 'one' = ci [tsɿ˧], unaspirated; the aspirated /tsʰɿ/ would correspond to YGPY `ch`
- Correction: `tsɿ˧`

**Issue 11 — Yi dog: MGUOP (labiovelar + checked) transcribed as /kʰɯ˧˧/**
- File: `words/dog.js`
- Data: `ii: ["ꈸ", "kʰɯ˧˧"]`
- Unicode: ꈸ = YI SYLLABLE MGUOP — initial MGU- represents a prenasalized labiovelar /ᵑɡw-/ or /ŋɡu-/; `-p` = checked high tone
- IPA `kʰɯ˧˧` has wrong initial (simple aspirated velar instead of prenasalized), wrong vowel, and wrong tone class
- Correction: `ŋɡwop˥` (approximately)

**Issue 12 — Yi house: YI syllable (/ji/) transcribed as /ɣɯ˧˧/**
- File: `words/house.js`
- Data: `ii: ["ꑳ", "ɣɯ˧˧"]`
- Unicode: ꑳ = YI SYLLABLE YI (/ji/) — standard palatal glide + front vowel
- IPA `ɣɯ˧˧` uses a voiced velar fricative /ɣ/ and back unrounded vowel /ɯ/ — both are wrong
- Nuosu Yi house = yi [ji˧], matching the script character
- Correction: `ji˧`

**Issue 13 — Yi: all IPA entries use non-standard double tone letter ˧˧**
- All Yi IPA entries throughout all word files use doubled mid-level diacritic `˧˧` (e.g., `vi˧˧`, `la˧˧`, `si˧˧`)
- Standard Chao tone notation for a single mid-level tone is a single `˧`, not doubled `˧˧`
- A doubled `˧˧` would imply a two-unit level-pitch span, appropriate for Chinese Mandarin-style second-tone contour notation but not for Nuosu Yi single syllables
- All Yi IPA entries should use single Chao letters: `˥`, `˧`, or `˩` where appropriate
- This is a cross-cutting notation error affecting every Yi entry

---

### Rakhine (rki)

**Issue 14 — Rakhine moon: tone/phonation absent**
- File: `words/moon.js`
- Data: `rki: ["လ", "la"]`
- Standard Burmese moon = `la̰` (creaky low phonation); Rakhine varieties share the same Burmese script base and the syllable should carry phonation marking
- The bare `la` gives no information about phonation or tone; at minimum the entry needs a phonation diacritic or tone mark to be comparable to the Standard Burmese entry

**Issue 15 — Rakhine good, cat, heart: transcriptions are copies of Standard Burmese with no Rakhine-specific features**
- Files: `words/good.js`, `words/cat.js`, `words/heart.js`
- `rki good`: `káuɴ` — identical to Standard Burmese `káuɴ`
- `rki cat`: `tɕàuɴ` — identical to Standard Burmese `tɕàuɴ`
- `rki heart`: `n̥əlóuɴ` — identical to Standard Burmese `n̥əlóuɴ`
- Rakhine dialect diverges from Standard Burmese in vowel qualities, the preserved rhotic (visible correctly in `rki water ɹeː`), and in register/tone contrasts; identical transcriptions suggest these three were copied rather than independently attested
- At minimum, the vowel of `rki good` (ကောင်း) should reflect Rakhine phonology; in some analyses Rakhine raises or fronts the /au/ nucleus

**Issue 16 — Rakhine eat: tone/length absent**
- File: `words/eat.js`
- Data: `rki: ["စား", "sa"]`
- Standard Burmese eat = `sá` (high tone, long); Rakhine IPA is just `sa` with no tone or length
- This is underspecified compared to both the Standard Burmese entry and to the quality of other Rakhine entries like `rki water ɹeː` which does include length

---

### Karen Sgaw (ksw) and Karen Pwo (pwo)

**Issue 17 — Karen Sgaw and Karen Pwo: tones entirely absent across all entries**
- Both ksw and pwo are tonal languages; Sgaw Karen has at least four tones; Pwo Karen similarly
- Reviewing all IPA entries: `tʰaŋ`, `θiŋ`, `θa`, `haŋ`, `mi`, `mu`, `la`, `pa`, `su`, `ta`, `ʔiŋ`, `ʔeŋ`, `baŋ ta sa`, `ta bju` — none carries a tone mark
- This is a systematic omission; Matisoff (2003) and Bradley (1979) both emphasize that tonal distinctions in Karen languages are phonemic and cannot be omitted in any phonological transcription
- All Karen (ksw, pwo) IPA entries need tonal marking

**Issue 18 — Karen Sgaw fire: glottal stop misplaced in IPA**
- File: `words/fire.js`
- Data: `ksw: ["မ့ၣ်ဖီ", "mʔiŋ pʰi"]`
- The glottal stop in `mʔiŋ` is placed after the onset consonant, yielding a CVC structure with medial glottal — a highly marked and unlikely configuration for this language
- The Karen Sgaw script `မ့ၣ်` represents a vowel-marked syllable (likely /mɛ̃/ or /mə̃/); the ŋ is a final from the asat-nasalized vowel marker in Sgaw Karen orthography
- The IPA should be something like `mɛ̃˥ pʰi˧` (fire + classifier); `mʔiŋ` does not reflect the script

**Issue 19 — Karen Pwo cat: sʰ notation is non-standard IPA**
- File: `words/cat.js`
- Data: `pwo: ["ဆဲၣ်", "sʰain"]`
- `sʰ` (aspirated fricative) is not a standard IPA symbol and does not appear in IPA charts; aspirated fricatives in Karen are sometimes cited but transcription should use `sʰ` only as a convention explicitly noted, or better as `ɕ` or `s` with a separate diacritic
- If the intent is to mark a fortis/aspirated sibilant, the notation needs clarification

---

### Kayah Li (kjp)

**Issue 20 — Kayah Li father: script ဖ- = /pʰ/ but IPA gives unaspirated /p/**
- File: `words/father.js`
- Data: `kjp: ["ဖါ", "pa˧"]`
- In Karen-family scripts including the Kayah Li writing system, ဖ represents an aspirated bilabial stop /pʰ/
- The IPA transcription `pa˧` gives the unaspirated variant; the correct IPA should be `pʰa˧`
- Contrast with `pwo father: ဖါ pʰa` (correct aspiration) — Kayah Li has the same script symbol but the aspiration is dropped in the IPA

---

### Hani (hni)

**Issue 21 — Hani: tones entirely absent across all entries**
- Hani (Akha-Hani branch, Tibeto-Burman) is tonal, with Hani proper typically described as having six tones in some analyses
- All IPA entries use bare syllables without tone: `mil`, `ne`, `miq`, `xa`, `leju`, `miqsiq`, `ɲul`, `amal`, `xal`, `mol`, `za`, `adal`, `ɡaq`, `ɡaq sai`, `niaxuq maxuq`, `lol`, `tiul`, `dol`
- The entries ending in `-q` may represent low checked tone (a convention in some Hani romanizations where final -q = glottal stop/low register), but tones on non-checked syllables are uniformly absent
- The task specification notes: "Hani water = lol oq lol — tone diacritic letters at end"; the data shows only `lol` with no such diacritic letters

**Issue 22 — Hani water: missing tone-diacritic structure**
- File: `words/water.js`
- Data: `hni: ["lol", "lol"]`
- Per the standard Hani tonal romanization, tones are indicated by post-syllabic letters (`q` = low checked, `l` = low level, `v` = low falling, etc. in the Hani orthography used in China)
- The entry `lol` without any tonal letter gives an incomplete picture; full form should resemble `lo˨q` or the romanization equivalent

---

### Lahu (lhu)

**Issue 23 — Lahu water: vowel /ɯ/ diverges significantly from expected /ɔ/**
- File: `words/water.js`
- Data: `lhu: ["ɨˆ", "ɯ̂"]`
- The task specification explicitly flags that Lahu water = `ɣ̱ɔ́ʔ` (high glottalized)
- The data gives `ɯ̂` — a high back unrounded vowel, whereas canonical Lahu water has a mid back rounded vowel /ɔ/ with a high glottalized tone
- This is either a different dialect form or an error; the discrepancy is substantial

**Issue 24 — Lahu thanks: /ʃ/ in IPA is non-native for Lahu**
- File: `words/thanks.js`
- Data: `lhu: ["a-bo-shaˇ", "abôʃâʔ"]`
- Lahu's alveopalatal consonant is typically /ɕ/ (or the affricate /tɕ/), not the postalveolar fricative /ʃ/
- In Matisoff's Lahu grammar, the relevant series is the alveopalatal fricative; /ʃ/ is a common approximation used in folk romanizations but is inaccurate in strict IPA
- Correction: `abôɕâʔ`

**Issue 25 — Lahu mother: entry is bare /e/ with no tone**
- File: `words/mother.js`
- Data: `lhu: ["e", "e"]`
- A single toneless `e` is phonologically incomplete for Lahu; all other Lahu entries carry tone diacritics in the romanization column (e.g., `haˆ`, `yaˇ`, `nyiˉ-ma`)
- The mother entry stands out as anomalous; the expected form would include a tone marker (Matisoff cites Lahu mother forms with tone)

---

### Lisu (lis)

**Issue 26 — Lisu: Fraser script not used; all entries in romanized Latin**
- Lisu is written in the Fraser script (Lisu syllabary, Unicode block A4D0–A4FF), which has been in official use since the 1910s and is the community-recognized orthography
- All Lisu entries use a romanized Latin transcription (e.g., `yi`, `a-nyi`, `kwe`, `hkyim`) without Fraser-script display characters
- The task specification notes that the Fraser script form should be shown for Lisu water as `ꓭꓲꓹ`
- Other comparable languages in the dataset display their native script; Lisu should too (or at minimum, the issue should be flagged as a deliberate scope decision rather than omission)

---

### Naxi (nxq)

**Issue 27 — Naxi father: romanization av → IPA a˧ (labiodental element dropped)**
- File: `words/father.js`
- Data: `nxq: ["av", "a˧"]`
- The romanization `av` suggests a final labiodental or labial off-glide /v/ or /w/, but the IPA column renders this as bare `a˧` with no trace of the second element
- This is an inconsistency between the display romanization and the IPA column

**Issue 28 — Naxi: romanization convention 'ee' = /ɯ/ is unexplained**
- The data uses `ee` in romanization to correspond to IPA `/ɯ/` consistently (water: `gee`→`ɡɯ˧`; fire: `mee`→`mɯ˧`; dog: `kee`→`kʰɯ˧`; house: `pee-mei`→`pɯ˧mi˧`)
- This is a non-standard folk romanization; the high back unrounded vowel /ɯ/ is not `ee` in any standard Naxi romanization system
- Users without the IPA column would read `ee` as /iː/, not as /ɯ/; at minimum this convention needs documentation, and ideally should be replaced by a more transparent romanization

---

### Mon (mnw)

**Issue 29 — Mon fire: IPA pəmoʔ appears to be a compound reconstruction, not a phonological transcription**
- File: `words/fire.js`
- Data: `mnw: ["ပၟတ်", "pəmoʔ"]`
- `pəmoʔ` has a structure /pə+moʔ/ that looks like a morphological compound (prefix + root) being written as a single IPA string, which is unusual
- Standard Mon fire is /poʔ mɔʔ/ (a compound) or simply /mɔʔ/ for the root; `pəmoʔ` conflates prefix and root without a syllable boundary, potentially misleading

**Issue 30 — Mon sun: IPA tŋoa contains the complex onset /tŋ-/**
- File: `words/sun.js`
- Data: `mnw: ["တ္ၚဲ", "tŋoa"]`
- The onset /tŋ-/ is highly marked typologically; Mon does have complex onsets but the notation `tŋoa` should be verified
- The Mon script တ္ၚ- (ta + stacked nya) would historically give a /tɲ-/ or /tŋ-/ cluster; the IPA might be more accurately rendered as /tŋoa/ but the diphthong `-oa` also warrants verification as a notation convention specific to this dataset's Mon transcription system

---

*Total issues filed: 30*
