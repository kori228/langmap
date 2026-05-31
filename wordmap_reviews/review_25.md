# Wordmap review #25 — Iberian Romance (non-Castilian) specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a specialist in the non-Castilian Romance varieties of the Iberian Peninsula and southern France, with particular depth in Catalan phonology (following Wheeler, Yates & Dols, *A Comprehensive Catalan Grammar*, 1999), Portuguese phonology (following Mateus & d'Andrade, *The Phonology of Portuguese*, 2000), the variation and historical layering of Ibero-Romance (following Penny, *Variation and Change in Spanish*, 2000), and the pluricentric standardisation of Occitan (following Sumien, *La standardisation pluricentrique de l'occitan*, 2006). My coverage includes Eastern and Western Catalan, Valencian, the Galician-Portuguese continuum, European and Brazilian Portuguese, Aragonese, Asturian-Leonese, Mirandese, all five major Occitan dialect zones, and Old Spanish/Castilian.

Scope examined: `words/cat.js`, `dog.js`, `drink.js`, `eat.js`, `eye.js`, `father.js`, `fire.js`, `good.js`, `hand.js`, `heart.js`, `hello.js`, `house.js`, `love.js`, `moon.js`, `mother.js`, `one.js`, `sun.js`, `thanks.js`, `tree.js`, `water.js` — codes `ca`, `ca_va`, `gl`, `pt`, `pt_eu`, `pt_br`, `pt_ao`, `pt_mz`, `an`, `ast`, `leo`, `mwl`, `oc`, `oc_lang`, `oc_prov`, `oc_gasc`, `oc_lim`, `osp`.

---

## Issues found

### 1. `ca` — love — IPA drops final /ɾ/
- **File:** `words/love.js` line 312
- **Current:** `["amor", "əmo"]`
- **Expected:** `["amor", "əˈmoɾ"]`
- **Why:** Eastern Catalan *amor* ends in a tapped /ɾ/ that is fully pronounced; the rhotic is never deleted in this word in any Catalan variety. Additionally stress falls on the final syllable and should be marked. Compare the cognate Occitan entry which correctly retains /r/ in `amur`.

---

### 2. `ca` — eat — stress mark missing on polysyllabic IPA
- **File:** `words/eat.js` line 305
- **Current:** `["menjar", "mənʒa"]`
- **Expected:** `["menjar", "mənˈʒa"]`
- **Why:** Eastern Catalan -ar infinitives carry final-syllable stress (oxytone pattern). The unstressed initial /mən-/ is correct, but the lack of a primary-stress diacritic `ˈ` before the stressed syllable makes the transcription phonetically ambiguous. Wheeler & Yates §2.5 require stress marking for all polysyllables in phonemic transcription.

---

### 3. `ca` — thanks — stress mark missing
- **File:** `words/thanks.js` line 305
- **Current:** `["gràcies", "ɡɾasiəs"]`
- **Expected:** `["gràcies", "ˈɡɾasiəs"]`
- **Why:** The orthographic grave accent on ⟨à⟩ already signals initial syllable stress; the IPA transcription should confirm it. The vowel representation (unstressed -es → /əs/) is correct for Eastern Catalan.

---

### 4. `ca` — drink — stress mark missing
- **File:** `words/drink.js` line 305
- **Current:** `["beure", "bewɾə"]`
- **Expected:** `["beure", "ˈbewɾə"]`
- **Why:** *Beure* is paroxytone (stress on penult); the IPA lacks the stress diacritic. The vowel and rhotic are correctly transcribed.

---

### 5. `ca` — hello — stress mark missing
- **File:** `words/hello.js` line 305
- **Current:** `["hola", "ɔlə"]`
- **Expected:** `["hola", "ˈɔlə"]`
- **Why:** *Hola* is paroxytone. The quality /ɔ/ (open-mid o) for the stressed initial vowel is correct Eastern Catalan; the final /ə/ (unstressed -a reduction) is correct. Only the stress diacritic is absent.

---

### 6. `ca_va` — Valencian — no entries present (coverage gap)
- **Files:** all `words/*.js`
- **Current:** no `ca_va:` key in any file
- **Expected:** Valencian forms alongside Eastern Catalan `ca:`
- **Why:** Valencian is the southernmost major Catalan variety with phonologically distinct features: unstressed /a/ and /e/ are NOT reduced to /ə/ (retained vowels, unlike Eastern), the palatal lateral /ʎ/ is retained, and stressed /ɔ/ is typically /o/. For example, Valencian *mà* 'hand' = /ˈma/ (same form as `ca` here), but *mare* 'mother' = /ˈmaɾe/ (not /maɾə/). The absence of `ca_va` leaves a meaningful phonological contrast undocumented across all 20 entries.

---

### 7. `gl` — thanks — seseo: /θ/ should be /s/
- **File:** `words/thanks.js` line 306
- **Current:** `["grazas", "ɡɾaθas"]`
- **Expected:** `["grazas", "ˈɡɾasas"]`
- **Why:** Standard Galician (Real Academia Galega norm) exhibits *seseo*: the graphemes ⟨z⟩ and ⟨c/ç⟩ before front vowels map to the single sibilant /s/, not to the Castilian dental fricative /θ/. Using /θ/ imposes Castilian phonology onto Galician. Additionally the primary stress on the initial syllable is unmarked.

---

### 8. `gl` — heart — seseo and stress both wrong
- **File:** `words/heart.js` line 306
- **Current:** `["corazón", "koɾaθon"]`
- **Expected:** `["corazón", "koɾaˈson"]`
- **Why:** Same seseo issue as #7: Galician /z/ → /s/. Moreover stress falls on the final syllable (-zón) and must be marked. The use of /θ/ here could actively mislead learners about the Galician sibilant system, which crucially differs from Castilian.

---

### 9. `gl` — good — vowel quality: /bɔ/ should be /bo/
- **File:** `words/good.js` line 306
- **Current:** `["bo", "bɔ"]`
- **Expected:** `["bo", "bo"]`
- **Why:** Galician does not maintain a productive phonemic contrast between /o/ and /ɔ/ in the way Catalan does. The standard Galician stressed /o/ in *bo* is close-mid [o], not open-mid [ɔ]. The /ɔ/ notation falsely aligns Galician with the Catalan vowel system. Mateus & d'Andrade discuss the parallel Portuguese /o/ → [o] in stressed open syllables.

---

### 10. `gl` — cat — stress mark missing
- **File:** `words/cat.js` line 306
- **Current:** `["gato", "ɡato"]`
- **Expected:** `["gato", "ˈɡato"]`
- **Why:** *Gato* is paroxytone; the stress diacritic is absent. Note also that in gheada areas of Galicia, word-initial /g/ is realised as [h] or [x], giving [ˈhato]; a note to this effect would acknowledge an important dialectal variable.

---

### 11. `pt_eu` — hello — stress mark missing
- **File:** `words/hello.js` line 99
- **Current:** `["olá", "ɔla"]`
- **Expected:** `["olá", "ɔˈla"]`
- **Why:** European Portuguese *olá* is oxytone; the acute accent in the orthography signals final stress, but the IPA transcription omits the `ˈ` diacritic.

---

### 12. `pt_eu` — love — stress mark missing
- **File:** `words/love.js` line 99
- **Current:** `["amor", "ɐmoɾ"]`
- **Expected:** `["amor", "ɐˈmoɾ"]`
- **Why:** *Amor* is oxytone. The EP vowel reduction /a/ → /ɐ/ in unstressed position is correctly applied to the initial syllable; the final stressed syllable /ˈmoɾ/ simply needs the diacritic.

---

### 13. `pt_eu` — tree — stress mark missing
- **File:** `words/tree.js` line 99
- **Current:** `["árvore", "aɾvuɾɨ"]`
- **Expected:** `["árvore", "ˈaɾvuɾɨ"]`
- **Why:** *Árvore* is proparoxytone (stress on antepenult); the vowel reductions /o/ → /u/ and final /e/ → /ɨ/ are correctly rendered for EP, but the stress position is unmarked.

---

### 14. `pt_br` — dog — stress mark missing
- **File:** `words/dog.js` line 100
- **Current:** `["cachorro", "kaʃohu"]`
- **Expected:** `["cachorro", "kaˈʃohu"]`
- **Why:** BP *cachorro* is paroxytone. The rhotic reduction /r/ → [h] in the coda is correctly represented for BP, but the primary stress on the penult syllable is unmarked.

---

### 15. `pt_br` — tree — stress mark missing
- **File:** `words/tree.js` line 100
- **Current:** `["árvore", "aɾvoɾi"]`
- **Expected:** `["árvore", "ˈaɾvoɾi"]`
- **Why:** *Árvore* proparoxytone in BP as well; unstressed final /e/ → /i/ is correctly rendered for BP, but stress position is unmarked.

---

### 16. `pt_ao` / `pt_mz` — Angolan and Mozambican Portuguese — no entries (coverage gap)
- **Files:** all `words/*.js`
- **Current:** no `pt_ao:` or `pt_mz:` keys anywhere
- **Expected:** at least a representative entry for each variety
- **Why:** African Portuguese varieties (especially Angolan and Mozambican) preserve unstressed vowel quality that EP reduces (no /ɨ/ schwa; full /e/, /o/ in all positions, similar to BP but with distinct prosody). This is a significant phonological difference that the dataset states it covers by listing these codes. Their complete absence is a documentation gap.

---

### 17. `leo` — Leonese — no entries (coverage gap)
- **Files:** all `words/*.js`
- **Current:** no `leo:` key anywhere
- **Expected:** Leonese forms
- **Why:** Leonese (Llionés) is the co-official language of Castile and León alongside Castilian, and is genetically distinct from Asturian (despite the Asturian-Leonese grouping). Its vowel system, diphthongisation patterns, and treatment of Latin initial /f-/ differ from both Asturian and Castilian. The code is listed as in-scope but zero entries appear.

---

### 18. `oc_lang` / `oc_prov` / `oc_gasc` / `oc_lim` — Occitan dialects — no entries (coverage gap)
- **Files:** all `words/*.js`
- **Current:** no dialect sub-codes for Occitan
- **Expected:** at minimum Gascon entries where Languedocien differs significantly
- **Why:** The single `oc` code appears to mix phonological features from different dialects (see issues #19–#26 below). Gascon in particular has undergone changes absent elsewhere: Latin /f-/ → /h-/, loss of final /n/, vowel fronting /u/ → /y/. Without dialect codes, the `oc` entries are phonologically incoherent.

---

### 19. `oc` — dog — final nasal dropped from IPA
- **File:** `words/dog.js` line 307
- **Current:** `["can", "ka"]`
- **Expected:** `["can", "kan"]`
- **Why:** In standard Occitan (IEO Languedocien norm), word-final consonants written in the spelling are pronounced. *Can* /kan/ retains its final nasal. The transcription /ka/ represents only the Gascon (and some Béarnais) realization, not standard Languedocien. This is part of a systematic pattern of final-consonant deletion affecting several `oc` entries (see also #20, #21).

---

### 20. `oc` — hand — final nasal dropped from IPA
- **File:** `words/hand.js` line 307
- **Current:** `["man", "ma"]`
- **Expected:** `["man", "man"]`
- **Why:** Same issue as #19. Standard Languedocien *man* 'hand' = /man/; the final /n/ is pronounced. The /ma/ transcription again reflects a Gascon-influenced reading rather than the standard variety.

---

### 21. `oc` — good — final nasal dropped and vowel shifted
- **File:** `words/good.js` line 307
- **Current:** `["bon", "bu"]`
- **Expected:** `["bon", "bɔn"]` (Languedocien) or `["bon", "bu"]` if labelled Gascon
- **Why:** Standard Languedocien *bon* = /bɔn/ (with final /n/ and stressed open-mid /ɔ/). The IPA /bu/ omits the final nasal and substitutes /u/ for /ɔ/, which is characteristic of Gascon vowel-shift and final nasal deletion. If Gascon is intended, the entry needs a dialect label.

---

### 22. `oc` — fire — diphthong onset wrong
- **File:** `words/fire.js` line 313
- **Current:** `["fuòc", "fjɔk"]`
- **Expected:** `["fuòc", "fwɔk"]`
- **Why:** The Occitan digraph ⟨uò⟩ represents a labio-velar glide onset /w/ (a rising diphthong), not a palatal glide /j/. *Fuòc* = /fwɔk/. The notation /fjɔk/ would correspond to a palatal diphthong that does not exist for this word in any Occitan variety.

---

### 23. `oc` — moon — front-rounded vowel and final vowel quality both wrong
- **File:** `words/moon.js` line 313
- **Current:** `["luna", "lyno"]`
- **Expected:** `["luna", "ˈluno"]` (Gascon) or `["luna", "ˈluna"]` (Languedocien)
- **Why:** Two problems. First, /y/ (front-rounded vowel) is a French phoneme but not standard Occitan; Languedocien has /u/. Second, feminine -a endings: in standard Languedocien, -a is retained as /a/, making the correct form /ˈluna/. The /o/ ending points to Gascon, where feminine -a → /o/ is regular — but then the vowel of the stressed syllable would also need to be the Gascon /u/ → giving /ˈlyno/ only in a highly Gascon-influenced reading that should be labelled as such.

---

### 24. `oc` — one — front-rounded vowel
- **File:** `words/one.js` line 313
- **Current:** `["un", "yn"]`
- **Expected:** `["un", "un"]`
- **Why:** As in #23, /y/ is French-influenced and absent from standard Occitan. Languedocien *un* = /un/. The /yn/ transcription imports French phonology wholesale.

---

### 25. `oc` — hello — *adieu* is a farewell, not a greeting, in standard Occitan
- **File:** `words/hello.js` line 307
- **Current:** `["adieu", "adjew"]`
- **Expected:** `["bonjorn", "bunˈd͡ʒuɾn"]` (Languedocien) or note Gascon dual usage
- **Why:** In standard Occitan (Languedocien/IEO), *adieu* is primarily a farewell ('goodbye'). It functions as a bidirectional greeting only in Gascon (and colloquial usage in parts of Provence). The neutral greeting in standard Occitan is *bonjorn* /bunˈd͡ʒuɾn/. Listing *adieu* without qualification misrepresents the greeting/farewell distinction.

---

### 26. `oc` — eat — stress mark missing
- **File:** `words/eat.js` line 307
- **Current:** `["manjar", "mandʒa"]`
- **Expected:** `["manjar", "manˈd͡ʒa"]`
- **Why:** *Manjar* is oxytone; stress on the final syllable is unmarked. Note also that IEO/Alibèrt uses the tie-bar notation /d͡ʒ/ for the affricate to distinguish it from a sequence of separate phonemes.

---

### 27. `mwl` — heart — /θ/ is a Castilianism, wrong for Mirandese
- **File:** `words/heart.js` line 834
- **Current:** `["coraçon", "koɾaˈθoŋ"]`
- **Expected:** `["coraçon", "koɾaˈt͡soŋ"]` (if ⟨ç⟩ = affricate) or `["coraçon", "koɾaˈsoŋ"]`
- **Why:** Mirandese (as described in the *Convenção Ortográfica da Língua Mirandesa*, 1999) does not have the Castilian dental fricative /θ/. The grapheme ⟨ç⟩ in Mirandese represents either /t͡s/ (reflecting older Ibero-Romance) or /s/ depending on the scholar. What it does not represent is /θ/. The entry imports Castilian phonology into a language that belongs to the Asturian-Leonese branch.

---

### 28. `mwl` — cat — word-initial /ɣ/ incorrect in citation form
- **File:** `words/cat.js` line 834
- **Current:** `["gato", "ˈɣatu"]`
- **Expected:** `["gato", "ˈɡatu"]`
- **Why:** In Mirandese, voiced stops /b d ɡ/ are lenited to fricatives [β ð ɣ] in intervocalic and post-vocalic positions, following the Asturian-Leonese pattern. In citation form (word-initial position, after silence), /ɡ/ remains a stop. The use of /ɣ/ at the onset of the headword form is phonologically incorrect; it is an allophone, not the citation-form phoneme.

---

### 29. `ast` — eye — word-initial /ɣ/ incorrect in citation form
- **File:** `words/eye.js` line 755
- **Current:** `["güeyu", "ˈɣweʝu"]`
- **Expected:** `["güeyu", "ˈɡweʝu"]`
- **Why:** The same issue as #28. Asturian does not spirantize /ɡ/ to [ɣ] in word-initial position after silence. The digraph ⟨gü-⟩ represents a labiovelar stop onset /ɡw/ at the left edge of the word. Lenition to /ɣ/ only applies after vowels in connected speech.

---

### 30. `ast` — father / mother — hypocoristic forms chosen over standard lexical entries
- **Files:** `words/father.js` line 755; `words/mother.js` line 761
- **Current:** `["pa", "pa"]` and `["ma", "ma"]`
- **Expected:** `["pai", "paj"]` / `["padre", "ˈpadɾe"]` (father); `["mái", "maj"]` / `["madre", "ˈmaðɾe"]` (mother)
- **Why:** Asturian *pa* and *ma* are informal baby-talk/hypocoristic contractions. The standard lexical citation forms are *pai* (father) and *mái* (mother) — cognate with Galician *pai* / *nai* — or the Latinism *padre* / *madre* in more formal registers. Providing the bare hypocoristic as the headword creates a false parallel with, e.g., English "dad/mum" rather than "father/mother."

---

### 31. `osp` — heart — wrong sibilant affricate: /ʣ/ (voiced) for ⟨ç⟩ (voiceless)
- **File:** `words/heart.js` line 924
- **Current:** `["coraçón", "koɾaˈʣon"]`
- **Expected:** `["coraçón", "koɾaˈt͡son"]`
- **Why:** The Old Spanish sibilant system distinguished four dental/alveolar sibilants: ⟨ç⟩ = voiceless dental affricate /t͡s/ (as in modern Italian *pizza*), ⟨z⟩ = voiced dental affricate /d͡z/, ⟨ss⟩ = voiceless sibilant /s/, and ⟨s⟩ intervocalic = voiced /z/. *Coraçón* is spelled with ⟨ç⟩, which maps to voiceless /t͡s/, not to the voiced /d͡z/ (= IPA /ʣ/) represented in the current transcription. This is a direct reversal of the voicing value.

---

### 32. `osp` — house — IPA voicing is correct but deserves a note
- **File:** `words/house.js` line 931
- **Current:** `["casa", "ˈkaza"]`
- **Note:** The /z/ for the intervocalic ⟨s⟩ of Old Spanish *casa* is actually phonologically correct: in Old Spanish, single ⟨s⟩ between vowels was the voiced sibilant /z/ (contrasting with geminate ⟨ss⟩ = /s/). This entry is right and stands as a useful counterexample to the merger; it is noted here because reviewers unfamiliar with the Old Spanish sibilant system may incorrectly flag it as an error.

---

### 33. `oc` — house — stress mark missing
- **File:** `words/house.js` line 314
- **Current:** `["ostal", "ustal"]`
- **Expected:** `["ostal", "usˈtal"]`
- **Why:** Occitan *ostal* 'house' is oxytone (stress on final syllable); the unstressed initial /u-/ is correctly rendered (unstressed /o/ → /u/ in Languedocien), but the primary stress diacritic is absent.

---

*Review completed 2026-05-31. Total issues identified: 33 (31 errors/gaps + 1 phonological note + 1 structural observation). Most critical: Occitan systematic final-consonant deletion (#19–#21), Galician seseo violations (#7–#8), Old Spanish sibilant voicing reversal (#31), and Catalan amor missing rhotic (#1). Coverage gaps for `ca_va`, `pt_ao`, `pt_mz`, `leo`, and all Occitan dialect sub-codes represent a significant underdocumentation of the declared scope.*
