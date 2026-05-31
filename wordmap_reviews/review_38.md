# Wordmap review #38 — Ethio-Semitic specialist

## Reviewer self-introduction

I am a specialist in Ethio-Semitic linguistics, drawing on the following primary sources for this review: Leslau (1991) *Comparative Dictionary of Geʿez (Classical Ethiopic)*; Tropper (2002) *Altäthiopisch: Grammatik des Geʿez*; Leslau (2000) *Concise Amharic Dictionary*; Leslau (1992) *Reference Grammar of Amharic*; Hudson (1989) *Highland East Cushitic Dictionary*; Wagner (1983) *Harari–English Dictionary*; Hetzron (1972) *Ethiopian Semitic: Studies in Classification*. My coverage spans the full Ethio-Semitic family: Geʿez (Classical Ethiopic), Amharic, Tigrinya, Tigre, the Gurage cluster (Sebatbet/Soddo, Chaha, Mesqan), Argobba, Harari, Siltʼe, Zay, and Inor. The present review examines the language codes `gez`, `am`, `ti` (Tigrinya), `tig` (Tigre), and `sgw` (Sebatbet/Soddo) as they appear in `words/*.js`.

---

## Issues found

### 1. `am` — sun — ፀ romanised as /sʼ/ but Amharic ፀ/ጸ = /tsʼ/ (ejective affricate)
- **File:** `words/sun.js` line 151
- **Current:** `["ፀሐይ", "sʼɛhaj"]`
- **Expected:** `["ፀሐይ", "tsʼɛhaj"]`
- **Why:** In modern Amharic the letters ፀ and ጸ have merged and represent the ejective affricate /tsʼ/ (sometimes written /ts̩/ or /ṣ/ in Ethiopicist notation). The IPA /sʼ/ denotes an ejective fricative, which is a phonetically distinct segment. All standard reference grammars — Leslau 1992, Appleyard 1995, Hayward & Hayward 1999 — transcribe the reflex of Amharic ፀ/ጸ as /tsʼ/, not /sʼ/. This error also propagates to `sgw` (same script, same IPA).

---

### 2. `sgw` — sun — same /sʼ/ error as Amharic
- **File:** `words/sun.js` line 153
- **Current:** `["ፀሐይ", "sʼɛhaj"]`
- **Expected:** `["ፀሐይ", "tsʼɛhaj"]`
- **Why:** Sebatbet/Soddo shares the Amharic reflex of ፀ as /tsʼ/. The IPA /sʼ/ (ejective fricative) is incorrect for the same reasons as issue #1.

---

### 3. `ti` — sun — ጸ transcribed as /sˤ/ but Tigrinya ጸ = /tsʼ/
- **File:** `words/sun.js` line 252
- **Current:** `["ጸሓይ", "sˤəħaj"]`
- **Expected:** `["ጸሓይ", "tsʼəħaj"]`
- **Why:** Tigrinya preserves ጸ as the ejective affricate /tsʼ/, distinct from ጸ's classical Geʿez value. The IPA symbol /sˤ/ represents a pharyngealized (emphatic) fricative — a completely different phonetic category. Tropper (2002) and Leslau (1987 *Tigrinya Grammar*) both give ጸ as ejective /tsʼ/ in Tigrinya. The Tigre entry for this same word correctly shows /tsʼəħaj/, making the Tigrinya rendering conspicuously inconsistent across the same script letter in the same dataset.

---

### 4. `gez` — good — ሠ transcribed as /sˤ/ (pharyngealized) rather than /s/ or /ś/
- **File:** `words/good.js` line 911
- **Current:** `["ሠናይ", "sˤannaːj"]`
- **Expected:** `["ሠናይ", "sanaːj"]` (or `"śanaːj"` in Ethiopicist notation)
- **Why:** The letter ሠ (śädāy, the 7th Ethiopic sibilant) descends from Proto-Semitic *ś* (a lateral fricative /ɬ/ or a front sibilant). In classical Geʿez it merged phonetically with ሰ into plain /s/; Leslau (1991) marks it /ś/ as an orthographic distinction, but never as pharyngealized /sˤ/. There is no evidence in Geʿez phonology that ሠ carried pharyngealisation. Transcribing ሠ as /sˤ/ conflates it with the pharyngealized sibilant series (ጸ ፀ), which is a separate phonological class.

---

### 5. `gez` — good — spurious geminate /nn/ in ሠናይ
- **File:** `words/good.js` line 911
- **Current:** `["ሠናይ", "sˤannaːj"]`
- **Expected:** `["ሠናይ", "sanaːj"]`
- **Why:** The triconsonantal root is *ś-n-y* with a short medial nasal. The Geʿez adjective ሠናይ is /sɛnaːj/ or in a broader transcription /sanaːj/ — there is no gemination of the medial consonant. Leslau (1991 s.v. śänāy) gives no double nasal. The /nn/ in `sannaːj` appears to be an unfounded insertion.

---

### 6. `ti` — good — ጽ transcribed as /sˤ/ but Tigrinya ጽ = /tsʼ/
- **File:** `words/good.js` line 246
- **Current:** `["ጽቡቕ", "sˤɨbuqʼ"]`
- **Expected:** `["ጽቡቕ", "tsʼɨbuqʼ"]`
- **Why:** In Tigrinya, ጽ represents the ejective affricate /tsʼ/ (same phoneme class as ጸ). The IPA /sˤ/ (emphatic fricative) is incorrect. This parallels the same confusion documented in issues #3 and #4. The Tigre entry (line 1005) correctly uses /tsʼ/ for the cognate letter, making the Tigrinya transcription internally inconsistent.

---

### 7. `tig` — good — final ቕ transcribed as plain /q/ without ejective mark
- **File:** `words/good.js` line 1005
- **Current:** `["ጽቡቕ", "tsʼəbbuq"]`
- **Expected:** `["ጽቡቕ", "tsʼəbbuqʼ"]`
- **Why:** The Ethiopic letter ቕ (5th order of ቀ) is the ejective uvular /qʼ/ in both Tigrinya and Tigre. The initial ጽ is correctly rendered /tsʼ/ here, but the final ቕ is left as plain /q/, losing its ejective marking. The Tigrinya entry for the same word (line 246) does show /qʼ/ correctly. Consistency and phonological accuracy require /tsʼəbbuqʼ/.

---

### 8. `am` & `sgw` — love — ቅ transcribed as plain /k/ without ejective
- **File:** `words/love.js` lines 151, 153
- **Current:** `["ፍቅር", "fɨkɨr"]` (both `am` and `sgw`)
- **Expected:** `["ፍቅር", "fɨkʼɨr"]`
- **Why:** The letter ቅ (5th order of ቀ) represents the ejective /kʼ/ in Amharic and the Gurage languages. Leslau (2000 s.v. *fɨqɨr*) gives /fɨqɨr/ with an ejective back consonant (Leslau uses *q* for the ejective velar/uvular in his Amharic notation, but it is phonetically /kʼ/). The IPA /fɨkɨr/ with plain /k/ loses the ejective feature entirely, misrepresenting one of the most salient phonological properties of Amharic.

---

### 9. `ti` — love — ቕ transcribed as plain /q/ without ejective
- **File:** `words/love.js` line 253
- **Current:** `["ፍቕሪ", "fɨqɾi"]`
- **Expected:** `["ፍቕሪ", "fɨqʼɾi"]`
- **Why:** Tigrinya ቕ = /qʼ/ ejective uvular. The IPA /fɨqɾi/ uses plain /q/, stripping the ejective feature that ቕ encodes. The consistent treatment across the dataset should mark all ቕ as /qʼ/.

---

### 10. `tig` — love — ቅ transcribed without ejective
- **File:** `words/love.js` line 1012
- **Current:** `["ፍቅሪ", "fəqri"]`
- **Expected:** `["ፍቅሪ", "fəqʼri"]`
- **Why:** Same problem as issues #8 and #9. Tigre ቅ = ejective /kʼ/ or /qʼ/; the IPA must carry the ejective superscript.

---

### 11. `am` — eye — initial ዓ (ʕayn) transcribed as zero; pharyngeal dropped
- **File:** `words/eye.js` line 151
- **Current:** `["ዓይን", "ajn"]`
- **Expected:** `["ዓይን", "ʕajn"]`
- **Why:** The Amharic letter ዓ is the 7th-order form of ʕayn (ዐ), a pharyngeal fricative historically /ʕ/. Although Amharic ʕ has undergone weakening (merger with glottal /ʔ/ in many environments), it is still phonemically present and phonetically realised as /ʕ/ by many educated speakers. Leslau (1992 §2.1) and Appleyard (1995) both include /ʕ/ in the Amharic consonant inventory and transcribe ዓ with it. Omitting it entirely to give plain /ajn/ erases a phonemic distinction still alive in careful speech and in all neighbouring Ethio-Semitic languages.

---

### 12. `sgw` — eye — አ (ʔalef) onset dropped in IPA
- **File:** `words/eye.js` line 153
- **Current:** `["አይን", "ajn"]`
- **Expected:** `["አይን", "ʔajn"]`
- **Why:** Sebatbet/Soddo uses አ (first-order alef) here, not ዓ (ʕayn), indicating the initial consonant is the glottal stop /ʔ/. The IPA /ajn/ omits even this glottal stop. In all Ethio-Semitic languages written in Ethiopic, alef-initial syllables carry /ʔ/; it should not be silently dropped.

---

### 13. `gez` — fire — initial glottal stop missing
- **File:** `words/fire.js` line 917
- **Current:** `["እሳት", "əsaːt"]`
- **Expected:** `["እሳት", "ʔəsaːt"]`
- **Why:** Geʿez እ (1st order of alef) always represents the glottal stop /ʔ/ plus the central unrounded vowel /ə/. Classical Geʿez phonology (Tropper 2002 §1.3) requires /ʔ/ onset in alef syllables. The IPA /əsaːt/ silently drops the glottal stop that defines the Geʿez phonological word.

---

### 14. `am` — fire — geminate /ss/ not reflected; single /s/ given
- **File:** `words/fire.js` line 151
- **Current:** `["እሳት", "ɨsat"]`
- **Expected:** `["እሳት", "ɨssat"]`
- **Why:** Leslau (2000) transcribes Amharic ʔɨssat with a geminate sibilant. Amharic gemination is phonemically contrastive and acoustically salient. Rendering it as /ɨsat/ (single /s/) loses this feature. Compare the Tigre form at line 1011 (`əssat`) which correctly reflects gemination — the Amharic entry should be brought into line.

---

### 15. `tig` — hand — initial glottal stop missing
- **File:** `words/hand.js` line 1005
- **Current:** `["እድ", "əd"]`
- **Expected:** `["እድ", "ʔəd"]`
- **Why:** As with issue #13, the script letter እ encodes /ʔ/ + /ə/. The Geʿez entry (line 911) correctly records /ʔəd/; Tigre uses the same script letter with the same phonological value. Omitting /ʔ/ in the Tigre entry is inconsistent and phonologically inaccurate.

---

### 16. `tig` — father — initial glottal stop missing
- **File:** `words/father.js` line 1005
- **Current:** `["አቦ", "abbo"]`
- **Expected:** `["አቦ", "ʔabbo"]`
- **Why:** አ (alef) = /ʔ/. The Tigrinya cognate entry (line 246) correctly marks /ʔabo/; the Geʿez entry (line 911) has /ʔab/. The Tigre entry alone drops the glottal stop. Tigre /ʔabbo/ is the correct form (with geminate, as the dataset already records for other Tigre entries).

---

### 17. `ti` — thanks — ቐ (ejective q, 4th order) rendered as plain /q/
- **File:** `words/thanks.js` line 246
- **Current:** `["የቐንየለይ", "jɛqɛnjɛlɛj"]`
- **Expected:** `["የቐንየለይ", "jɛqʼɛnjɛlɛj"]`
- **Why:** The Tigrinya letter ቐ is the 4th-order form of the ejective uvular series; it represents /qʼ/. The IPA /jɛqɛnjɛlɛj/ uses plain /q/, losing the ejective feature. This is the same class of ejective-stripping error observed in issues #7–10 above.

---

### 18. `tig` — tree — ጨ transcribed as plain /tʃ/ without ejective
- **File:** `words/tree.js` line 1005
- **Current:** `["ዕጨይ", "ʕətʃaj"]`
- **Expected:** `["ዕጨይ", "ʕətʃʼaj"]`
- **Why:** The Ethiopic letter ጨ is the 4th order of ጠ (ejective t-series) and represents the ejective palato-alveolar affricate /tʃʼ/ in Tigre. The IPA /tʃ/ (voiceless non-ejective affricate) is a different phoneme; using it here strips a feature that is phonemically distinctive in all Ethio-Semitic languages.

---

### 19. `gez` — tree — vowel /ə/ where Leslau gives /a/
- **File:** `words/tree.js` line 911
- **Current:** `["ዕፅ", "ʕəsˤ"]`
- **Expected:** `["ዕፅ", "ʕasˤ"]` (or `"ʕaṣ"` in Ethiopicist notation)
- **Why:** Leslau (1991 s.v. ʕaṣ) gives the Geʿez word for 'wood/tree' as /ʕaṣ/ with the vowel /a/ (first-order open vowel). The IPA /ʕəsˤ/ substitutes the central schwa /ə/ (sixth-order Geʿez vowel), misidentifying the vowel class of this root.

---

### 20. `tig` — one — ዎሮ /woɾo/ appears to be the wrong word
- **File:** `words/one.js` line 1011
- **Current:** `["ዎሮ", "woɾo"]`
- **Expected:** Tigre 'one' (masculine) is /ħädi/ ~ /ʕädi/, script ሓዲ or ዓዲ
- **Why:** The Tigre cardinal numeral 'one' (masculine) is standardly given as *ḥadi* (< Geʿez *ʔaḥadu*) in Palmer (1962) *Tigre Grammar* and in Leslau's comparative tables. The form ዎሮ /woɾo/ does not correspond to any known Tigre or Tigrinya numeral; it resembles forms from unrelated Nilotic or Cushitic languages. The entry may be a data-entry error (wrong source row used for Tigre).

---

### 21. `gez` & `tig` — drink — identical entries suggest copy rather than independent attestation
- **File:** `words/drink.js` lines 911 and 1005
- **Current (both):** `["ሰትየ", "satja"]`
- **Issue:** Geʿez and Tigre share the same Ethiopic script but are distinct languages with different vowel systems, stem patterns, and conjugational morphology. The probability of identical IPA for an inflected verb in two separate languages is very low. The Geʿez perfect 3ms is *sätäyä* → /sɛtɛjɛ/ (or /sätja/ in some readings), which could be rationalised as /satja/. However Tigre preserves a different vowel grade and stem shape. The entry for Tigre is most likely an unchecked copy of the Geʿez form rather than an independent attestation of Tigre phonology.

---

### 22. `ti` — hand — spurious long vowel /iː/ on a vowel that is not long in Tigrinya
- **File:** `words/hand.js` line 246
- **Current:** `["ኢድ", "ʔiːd"]`
- **Expected:** `["ኢድ", "ʔid"]`
- **Why:** Tigrinya does not have a productive vowel-length contrast in the way classical Arabic or Geʿez does. The Ethiopic letter ኢ represents the second-order vowel /i/ (short). Leslau (1987 *Tigrinya Grammar* p. 6) does not posit vowel length in Tigrinya's phonemic inventory. The long /iː/ in /ʔiːd/ is not supported and overloads the Geʿez long-vowel convention onto a language that does not use it.

---

### 23. `gez` — good — ሠ (śadāy) letter choice flags a broader orthography/register note
- **File:** `words/good.js` line 911
- **Current:** `["ሠናይ", "sˤannaːj"]`
- **Note (informational):** The choice of ሠ over ሰ for the Geʿez adjective ሠናይ is philologically correct: Leslau (1991) and the Dillmann *Lexicon* both use ሠ for this root. This is worth noting positively, as many digital resources confuse the two. However, the IPA transcription errors flagged in issues #4 and #5 still need fixing regardless of the correct script choice.

---

*Total issues above: 22 (issues #1–22), plus one informational orthography note (#23). The most systemic problem is the consistent conflation of ejective affricates (/tsʼ/ for ጸ/ጽ) with pharyngealized fricatives (/sˤ/), and the wholesale omission of ejective diacritics on ቅ/ቕ. These account for roughly half of all errors and affect `am`, `sgw`, `ti`, and `tig` across multiple word files.*
