# Wordmap review #70 — Data-structure & cross-field consistency auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a corpus-engineering and lexical-database auditor: my work is not the phonology of any one language but the *internal consistency* of the data structure that holds 1 000 languages × 20 concepts. My method is programmatic — I parse every `words/*.js` file with Node, eval the `WORDS.<word>` object, and run set-difference, duplicate-key, value-collision and placeholder scans across the whole matrix, then read the offending lines verbatim before reporting. For the linguistic sanity-checks that back up a structural flag I lean on the standard descriptive references for the affected varieties: for the Min-nan (Hokkien) entries, the **Taiwan Ministry of Education 《臺灣閩南語常用詞辭典》 (2011)** and **Douglas–Barclay, _Chinese-English Dictionary of the Vernacular or Spoken Language of Amoy_ (1873/1923)** for Pe̍h-ōe-jī romanisation; for Indonesian/Malay, **Soderberg & Olson (2008) "Indonesian," _JIPA_ 38(2)**; for the Polynesian/Austronesian set, **Elbert & Pukui (1979) _Hawaiian Grammar_** and the **POLLEX online comparative database (Greenhill & Clark 2011)**; for Swahili, **Ashton (1944) _Swahili Grammar_** and the **Helsinki Corpus of Swahili (HCS 2.0)**; for Tagalog, **Schachter & Otanes (1972) _Tagalog Reference Grammar_**. The IPA conventions I check against are the **IPA Handbook (1999)**. Every "Current" value below was copied directly from the file at the cited line; no data file was modified. The headline finding is structural and affects all 20 files simultaneously, so I lead with it.

---

## Issues found

### 1. `nan_xm` / `nan_zz` — water — duplicate object keys silently drop the Pe̍h-ōe-jī gloss (data loss, repeats in all 20 files)
- **File:** `words/water.js` lines 347–348 (first occurrence) and lines 361–362 (second occurrence)
- **Current:** L347 `nan_xm: ['水 (chúi)', 'tsui˥˧']` … L361 `nan_xm: ['水', 'tsui˥˧']` (and `nan_zz` L348 `['水 (chúi)', …]` vs L362 `['水', …]`)
- **Expected:** a single entry per code, retaining the romanised surface: `nan_xm: ['水 (chúi)', 'tsui˥˧']`
- **Why:** A JavaScript object literal cannot hold two properties with the same key — the **later** assignment silently overwrites the earlier one. Here `nan_xm` and `nan_zz` are each declared twice; the surviving (second) copy is the one *without* the Pe̍h-ōe-jī romanisation `(chúi)`, so the richer first entry is dead code. This same overwrite occurs in **every one of the 20 word files** (cat L340/L354, eat L340/L354, hello L340/L354, etc.). Either delete the second, plainer block or merge the romanisation into the surviving key — but the two-key state must not stand.

---

### 2. `nan_xm` / `nan_zz` — hello — duplicate key drops the 你好 / 汝好 character distinction
- **File:** `words/hello.js` lines 340–341 vs lines 354–355
- **Current:** L340 `nan_xm: ['你好 (lí-hó)', 'li˥˧ ho˥˧']`, L341 `nan_zz: ['汝好 (lí-hó)', 'li˥˧ ho˥˧']` overwritten by L354 `nan_xm: ['你好', …]`, L355 `nan_zz: ['汝好', …]`
- **Expected:** one key each, keeping the POJ gloss: `nan_xm: ['你好 (lí-hó)', 'li˥˧ ho˥˧']`
- **Why:** Same duplicate-key overwrite as #1. Note the surface forms here genuinely differ between the two varieties (你 vs 汝), so the entry carries real information; the duplicate-key pattern is a structural booby-trap that happens to preserve the right character only because both copies agree. The fix is the same: collapse to a single key and keep the romanisation.

---

### 3. `nan_xm` / `nan_zz` — eat — duplicate key, tone differs between the two declarations of `nan_zz`
- **File:** `words/eat.js` line 341 vs line 355
- **Current:** L341 `nan_zz: ['食 (chia̍h)', 'tsiaʔ̚˩˨˩']` vs L355 `nan_zz: ['食', 'tsiaʔ̚˩˨˩']`
- **Expected:** `nan_zz: ['食 (chia̍h)', 'tsiaʔ̚˩˨˩']`
- **Why:** Again the second copy wins and the `(chia̍h)` POJ gloss is lost. I single this file out because the *Xiamen* tone here is `tsiaʔ̚˦` while *Zhangzhou* is `tsiaʔ̚˩˨˩` — a real lexical-tone difference that the duplicate-key mechanism makes fragile: any future editor touching only one of the two blocks will desynchronise the surface and IPA. One key per code removes that risk.

---

### 4. `id` / `ms` — water — orthography copied verbatim into the IPA slot
- **File:** `words/water.js` lines 80–81
- **Current:** `id: ["air", "air"]` / `ms: ["air", "air"]`
- **Expected:** `id: ["air", "ʔair"]` / `ms: ["air", "air"]` (minimally `[ˈa.ir]`)
- **Why:** The IPA field is byte-identical to the orthography, which is the classic "orthography in the IPA slot" defect. Indonesian *air* "water" is disyllabic /ˈa.ir/ (often with onset glottal [ʔair]) per Soderberg & Olson (2008); writing "air" as the transcription implies a single English-like /ɛə/ syllable, which is wrong. The same file transcribes other Indonesian items properly, so this is an internal inconsistency, not a convention choice.

---

### 5. `sw` — moon — orthography in IPA slot; inconsistent with the file's own Swahili transcriptions
- **File:** `words/moon.js` line 110
- **Current:** `sw: ["mwezi", "mwezi"]`
- **Expected:** `sw: ["mwezi", "mˈwezi"]` (i.e. /mweːzi/ with the antepenult-default stress, Swahili `e` = [ɛ])
- **Why:** The IPA equals the orthography. Compare `words/eye.js` line 110, where the same language is transcribed properly as `sw: ["jicho", "dʒitʃo"]` (orthographic `j`→/dʒ/, `ch`→/tʃ/). Swahili penultimate stress is phonemically regular (Ashton 1944), so the citation form should carry a stress mark; leaving the field as a copy of the spelling is the lazy-IPA pattern this audit targets.

---

### 6. `sw` — dog — prenasalised onset not shown; orthography in IPA slot
- **File:** `words/dog.js` line 110
- **Current:** `sw: ["mbwa", "mbwa"]`
- **Expected:** `sw: ["mbwa", "ᵐbwa"]` (or `[ᵐɓwa]`)
- **Why:** Swahili *mbwa* opens with a prenasalised voiced stop /ᵐb/, a single phoneme, not the sequence /m/+/b/ that the literal string "mbwa" suggests. The transcription must encode the prenasalisation (Ashton 1944; HCS). As written the IPA is just the spelling, so it neither marks the prenasal unit nor the stress.

---

### 7. `sw` — love — orthography in IPA slot, vowel quality unmarked
- **File:** `words/love.js` line 110
- **Current:** `sw: ["upendo", "upendo"]`
- **Expected:** `sw: ["upendo", "uˈpendo"]` (Swahili `e`,`o` = [ɛ],[ɔ]; penult stress)
- **Why:** Identical surface and IPA again. The file elsewhere distinguishes the two (`jicho`→`dʒitʃo`), so this entry is internally inconsistent. At minimum the penultimate stress should be shown; ideally the mid vowels rendered [ɛ]/[ɔ].

---

### 8. `haw` — love & hello — orthography in IPA slot AND identical [surface,ipa] reused across two concepts
- **File:** `words/love.js` line 178 and `words/hello.js` line 178
- **Current:** both `haw: ["aloha", "aloha"]`
- **Expected:** `haw: ["aloha", "ɐˈloha"]` in both files
- **Why:** Two problems compound here. (a) The IPA is a copy of the spelling; Hawaiian *aloha* is /ɐˈloha/ with penultimate stress and the characteristic [ɐ] quality of unstressed /a/ (Elbert & Pukui 1979). (b) The byte-identical pair `["aloha","aloha"]` is reused for the distinct concepts *love* and *hello*. The lexical overlap is real (aloha covers both senses), so the surface reuse is acceptable — but the transcription should still be corrected in both, and the duplication shows the IPA was filled by copy-paste rather than transcribed.

---

### 9. `id` — hello — orthography in IPA slot
- **File:** `words/hello.js` line 80
- **Current:** `id: ["halo", "halo"]`
- **Expected:** `id: ["halo", "ˈhalo"]`
- **Why:** IPA equals orthography. Indonesian *halo* is /ˈhalo/; the field carries no syllabification or stress and is simply the spelling re-entered. Flagged as part of the systematic Indonesian "lazy IPA" cluster (see #4).

---

### 10. `tl` — one — initial glottal stop and stress omitted (orthography in IPA slot)
- **File:** `words/one.js` line 119
- **Current:** `tl: ["isa", "isa"]`
- **Expected:** `tl: ["isa", "ʔiˈsa"]`
- **Why:** Tagalog vowel-initial words begin with a phonemic glottal stop, and *isa* "one" carries final stress: /ʔiˈsa/ (Schachter & Otanes 1972). The IPA as written is just the orthography, encoding neither feature. The same lazy pattern recurs across the Tagalog set (e.g. `dog.js` L119 `tl: ["aso","aso"]`, properly /ˈʔaso/).

---

### 11. `tl` — dog — initial glottal stop and stress omitted
- **File:** `words/dog.js` line 119
- **Current:** `tl: ["aso", "aso"]`
- **Expected:** `tl: ["aso", "ˈʔaso"]`
- **Why:** As in #10, *aso* "dog" is /ˈʔaso/ with an initial glottal stop and penultimate stress (Schachter & Otanes 1972). The IPA slot reproduces the spelling and drops both. Listed separately because it is a distinct file/line, but it is the same systematic Tagalog defect.

---

### 12. `fj` — good & thanks — identical [surface,ipa] reused across two concepts, and orthography in IPA slot
- **File:** `words/good.js` line 202 and `words/thanks.js` line 202
- **Current:** both `fj: ["vinaka", "vinaka"]`
- **Expected:** `fj: ["vinaka", "viˈnaka"]` (Fijian `v` = [β]; penult stress) in both files
- **Why:** Two issues: (a) the IPA copies the spelling and ignores that Fijian orthographic `v` is the bilabial fricative [β] and that stress is penultimate — better /βiˈnaka/; (b) the byte-identical entry is reused for *good* and *thanks*. The semantic overlap (vinaka = "good" and the thanking expression) is genuine, so the reuse is defensible, but the transcription should be corrected and the two files brought into deliberate, not accidental, agreement.

---

### 13. `gaa` — drink & water — identical [surface,ipa] reused across two distinct concepts
- **File:** `words/drink.js` line 582 and `words/water.js` line 589
- **Current:** both `gaa: ["nu", "nu"]`
- **Expected:** verify and disambiguate; the drink (verb) and water (noun) senses of Ga *nu* should at least be confirmed rather than left as a copy-paste, and the IPA given as /nũ/ if the vowel is nasal
- **Why:** The exact pair `["nu","nu"]` appears under two different concepts for the same code. Ga *nu* can mean both "water" and "drink/hear", so this may be a true homophone — but the audit flag stands because (a) the IPA is a verbatim copy of the orthography (no tone, no nasality marked) and (b) an identical array across two concepts is exactly the signature of an unverified paste. Confirm the senses and add tone/nasality so the two entries are intentionally, not coincidentally, identical.

---

### 14. `rut` — hand & tree — identical [surface,ipa] reused across two unrelated concepts (probable wrong-sense paste)
- **File:** `words/hand.js` lines 398 & 439 and `words/tree.js` lines 398 & 439
- **Current:** all four `rut: ['хыл', 'χɨl']`
- **Expected:** confirm *tree*; Rutul *хыл* /χɨl/ is "hand/arm", so the *tree* entry is suspect and should be re-sourced
- **Why:** The same array is used for *hand* and *tree*, two semantically unrelated concepts — unlike the greeting/thanks overlaps above, there is no plausible homophony linking "hand" and "tree" in Rutul. This is the classic signature of a copy-paste error where the wrong row was duplicated. (Note also that `rut` is declared twice in each file — lines 398 and 439 — the same duplicate-key structural defect as #1; both copies happen to agree, but the second silently wins.)

---

### 15. `rut` — love & thanks — placeholder `["—","—"]` in a living, well-described language
- **File:** `words/love.js` lines 405 & 446 and `words/thanks.js` lines 398 & 439
- **Current:** `rut: ['—', '—']` (love and thanks)
- **Expected:** real Rutul forms; the language is filled in for *eye* (`['ул','ul']`), *tree*, *hand*, *water* (`['хьед','ħed']`), so the gap is an unfilled cell, not an unattested item
- **Why:** A `—` placeholder is appropriate for fragmentary/extinct corpora, but Rutul (a living NE-Caucasian language with published lexica) is populated for several other concepts in this dataset. The *love*/*thanks* cells being empty while the rest of the row is filled marks them as accidental gaps to be completed, not principled blanks. (Each is also duplicated per the #1 key defect — both copies are `—`.)

---

### 16. `kry` — dog — orthography in IPA slot (surface === ipa) with an ejective that needs no orthographic apostrophe in IPA
- **File:** `words/dog.js` line 369
- **Current:** `kry: ['xveqʼ', 'xveqʼ']`
- **Expected:** `kry: ['xveqʼ', 'χːʷeqʼ']` (or at least an IPA distinct from the Latin transliteration)
- **Why:** Surface and IPA are byte-identical, but the Latin practical orthography and a phonemic IPA transcription should not coincide here: Kryts (a Lezgic language) has a uvular series where orthographic `x` is the voiceless uvular fricative /χ/, not /x/, and the `qʼ` is a uvular ejective /qʼ/. Re-entering the romanisation as the IPA leaves the velar-vs-uvular contrast unmarked. (Kry is also among the codes declared twice per file — the #1 structural defect.)

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
