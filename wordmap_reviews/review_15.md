# Wordmap review #15 — Caucasian + Uralic specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am Reviewer #15, a specialist in Caucasian and Uralic linguistics. My primary references include Hewitt (1995) *Georgian: A Structural Reference Grammar*; Smeets (1984) *Studies in West Circassian Phonology and Morphology*; Nichols (1994) *Ingush-English Dictionary*; Klimov (1969) *Etymological Dictionary of Kartvelian Languages*; Catford (1977) *Fundamental Problems in Phonetics*; Colarusso (2002) *Nart Sagas from the Caucasus*; Abondolo (1998) *The Uralic Languages*; Janhunen (1977) *Samojedischer Wortschatz*; Itkonen (various) *Lapin murteita*; and *Suomen Sanojen Alkuperä* (SSA). My audit methodology: (1) map each entry's Cyrillic/Georgian script to its canonical phoneme value using authoritative language-specific orthographic conventions; (2) compare the provided IPA romanization against expected output; (3) flag divergences that reflect systematic transcription errors, lexical substitution, or inter-language inconsistency.

---

## Issues found

### 1. `ka` — water — missing uvular ejective on ყ

**File:** `words/water.js` line 171  
**Entry:** `["წყალი", "t͡sʼqali"]`  
Georgian ყ (Qar) is the uvular ejective stop /qʼ/, one of the three ejective stops that define the Georgian consonant system (Hewitt 1995:§3.2). The cluster წყ = /tsʼqʼ/. The transcription `t͡sʼqali` omits the ejective diacritic on the uvular, yielding a plain uvular /q/ instead. **Correction:** `t͡sʼqʼali`.

---

### 2. `ka` — love — missing uvular ejective on ყ

**File:** `words/love.js` line 171  
**Entry:** `["სიყვარული", "siqvaruli"]`  
Same systematic error: ყ in სიყვარული = /qʼ/. **Correction:** `siqʼvaruli`.

---

### 3. `xmf` — water — missing uvular ejective on ყ

**File:** `words/water.js` line 682  
**Entry:** `["წყარი", "tsʼqari"]`  
Mingrelian shares the Georgian script and consonant inventory for loanwords and inherited Kartvelian roots. ყ in წყარი = /qʼ/. **Correction:** `tsʼqʼari`.

---

### 4. `agx` — water — lateral fricative used for pharyngeal fricative

**File:** `words/water.js` line 668  
**Entry:** `["хьед", "ɬed"]`  
In Agul (Northeast Caucasian, Lezgic branch), the digraph хь represents the pharyngeal fricative /ħ/, not the lateral fricative /ɬ/. The cognate Rutul entry in the same dataset (line 405/446: `['хьед', 'ħed']`) correctly uses ħ, confirming the expected value. The Agul transcription ɬed is internally inconsistent with its Lezgic sister language and phonologically incorrect. **Correction:** `ħed`.

---

### 5. `av` — dog — voiced pharyngeal used for Avar гь

**File:** `words/dog.js` line 658  
**Entry:** `["гьой", "ʕoj"]`  
In Avar, the digraph гь represents the voiceless glottal or pharyngeal fricative /h/ (Uslar's original analysis; Alekseev & Atayev 1998). The symbol ʕ is the *voiced* pharyngeal approximant/fricative, a distinct articulation. Avar гь is consistently voiceless. **Correction:** `hoj`.

---

### 6. `av` — drink — same гь → ʕ error

**File:** `words/drink.js` line 658  
**Entry:** `["гьекӏезе", "ʕekʼeze"]`  
Identical transcription error for Avar гь. **Correction:** `hekʼeze`.

---

### 7. `ce` — eye — pharyngealized series transcribed as ejective

**File:** `words/eye.js` line 656  
**Entry:** `["бӏаьрг", "bʼæɾɡ"]`  
In the Vainakh languages (Chechen, Ingush), the series written with the ӏ diacritic (бӏ, дӏ, гӏ, etc.) represents *pharyngealized* or *glottalized* consonants, not ejectives. The ejective notation bʼ implies a glottalic egressive stop, whereas бӏ is pharyngealized [bˤ] (or in some analyses a preglottalized form). The IPA diacritic for pharyngealization is ˤ, not ʼ. **Correction:** `bˤæɾɡ` (or `b̴æɾɡ` depending on analysis, but not `bʼ`).

---

### 8. `inh` — eye — same бӏ pharyngealization error

**File:** `words/eye.js` line 657  
**Entry:** `["бӏаьрг", "bʼæɾɡ"]`  
Ingush shares the Vainakh phonological system with Chechen. Identical error. **Correction:** `bˤæɾɡ`.

---

### 9. `myv` — dog — Russian-origin word for *cat* substituted

**File:** `words/dog.js` line 767  
**Entry:** `["киска", "kiska"]`  
Erzya (Mordvinic/Uralic) `киска` is a borrowing from Russian *кошка* diminutive-variant *киска* meaning *cat* (or affectionate *kitty*), not *dog*. The native Mordvinic word for dog is reflected in the cognate Moksha entry on the very next line: `mdf: ["пине", "pinʲe"]` (Moksha *пине* < Proto-Mordvinic \*pini). Erzya lacks a parallel native \*pini form due to replacement, but the correct Erzya term for dog is *ки* (ki) or dialectal forms thereof — not the Russian cat loanword. **Correction:** replace with the native Erzya word for dog.

---

### 10. `vep` — fire — 'warmth/heat' entered instead of 'fire'

**File:** `words/fire.js` line 777  
**Entry:** `["lämoi", "ˈlæmoi"]`  
Veps *lämoi* (< *läm-* root) means *warmth, heat* — not *fire*. The Veps cognate of Finnish *tuli* 'fire' is Veps *tuli* (attested in Kettunen's Veps vocabulary). All other Finnic languages in this dataset use the *tuli* cognate: Finnish *tuli*, Karelian *tuli*, Livonian *tūl*. The entry should be `tuli` /ˈtuli/. **Correction:** `["tuli", "ˈtuli"]`.

---

### 11. `tkr` — water — epiglottal symbol used instead of pharyngeal

**File:** `words/water.js` line 674  
**Entry:** `["хьад", "ʜad"]`  
ʜ is the IPA symbol for the *epiglottal* fricative — an extremely rare segment found in very few languages. In Tsakhur (Northeast Caucasian, Lezgic), хь represents the pharyngeal fricative /ħ/ (same articulation as Arabic ح), not the epiglottal. **Correction:** `ħad`.

---

### 12. `tkr` — drink — epiglottal symbol + anomalous double-i onset

**File:** `words/drink.js` line 667  
**Entry:** `["ийыхьес", "iijəʜes"]`  
Two problems: (a) ʜ should be ħ as above; (b) the onset `iij-` transcribes the initial ий as a long vowel plus glide, but Tsakhur и = /i/ (short) followed by й = /j/ — the double-i `ii` suggests a spurious vowel length. **Correction:** `ijəħes` (or verify the initial vowel-glide sequence against a Tsakhur dictionary).

---

### 13. `fi` — dog — flap used for Finnish trill /r/

**File:** `words/dog.js` line 156  
**Entry:** `["koira", "koiɾɑ"]`  
Finnish /r/ is a dental/alveolar trill [r], not a flap [ɾ]. The IPA symbol ɾ specifically denotes a tap/flap (e.g., Spanish *pero*). Finnish *koira* is standardly transcribed /koirɑ/ with a trill. **Correction:** `koirɑ`.

---

### 14. `fi` — sun — same flap error for Finnish /r/

**File:** `words/sun.js` line 156  
**Entry:** `["aurinko", "ɑuɾiŋko"]`  
Identical ɾ-for-r substitution. Finnish *aurinko* /ˈɑuriŋko/. **Correction:** `ɑuriŋko`.

---

### 15. `sva` — good and love — identical form for two different concepts

**Files:** `words/good.js` line 173 and `words/love.js` line 173  
**Entries:** both `["ხოჩა", "xotʃa"]`  
Svan *ხოჩა* (xoča) is well-attested as 'good, nice, beautiful' (Topuria & Gujejiani). Listing exactly the same form for the concept 'love' (without a gloss note indicating this is an adjectival/predicative construction) is misleading — Svan has a separate verb/noun root for the concept of love as an emotional state. The hello entry `xotʃapʰ` derives from the same root (greeting = "good [be]"), which further shows this is an adjective meaning 'good'. The 'love' entry should use the Svan noun/verb for affection, or at minimum flag the semantic extension.

---

### 16. `xmf` — drink — 'middle/center' entered instead of 'to drink'

**File:** `words/drink.js` line 675  
**Entry:** `["შუა", "ʃua"]`  
Mingrelian (and Georgian) *შუა* means 'middle, center, half' — not 'to drink'. This appears to be a data entry error. The Laz cognate for 'drink' is *ხცემა*, and the Mingrelian word for 'to drink' is distinct from *შუა*. This is the most severe lexical error in the Kartvelian section. **Correction:** replace with the correct Mingrelian verb for 'drink'.

---

### 17. `yrk` — eye — Nenets /w/ transcribed inconsistently as /v/

**File:** `words/eye.js` line 133  
**Entry:** `["сэв", "sev"]`  
In Nenets, the Cyrillic letter в typically represents the labio-velar approximant /w/. All other Nenets в-initial or в-containing entries in this dataset use /w/: dog *вэно* → `weno`; good *сава* → `sawa`; hello *аньˮторова* → `anʔtorova` (в = w). Only the eye entry uses /v/. The consistent phonological value for Nenets в is /w/. **Correction:** `sew`.

---

### 18. `kpv` — eat — Komi ё misread as ӧ

**File:** `words/eat.js` line 762  
**Entry:** `["сёйны", "ɕɵjnɨ"]`  
Komi-Zyrian Cyrillic distinguishes ё /jo/ from ӧ /ɵ/ (the centralized mid rounded vowel). The word is сёйны with ё = /jo/, not ӧ = /ɵ/. Transcribing ё as ɵ conflates two distinct Komi letters. Compare the correctly transcribed Komi heart: сьӧлӧм → `sʲɵlɵm` (with genuine ӧ). **Correction:** `sʲojnɨ` (or `ɕojnɨ` depending on analysis of the palatalized sibilant).

---

### 19. `ab` — water — spurious vowel length in Abkhaz аӡы

**File:** `words/water.js` line 679  
**Entry:** `["аӡы", "aːdzə"]`  
Abkhaz а in аӡы is a short vowel; the long vowel diacritic aː is not warranted by the Abkhaz form. The Abaza cognate on the following line (`abq: ["дзы", "d͡zə"]`) correctly uses a short vowel. Abkhaz has vowel length contrast, but аӡы does not bear a long vowel in standard descriptions (cf. Hewitt 1979 *Abkhaz*). **Correction:** `adzə`.

---

### 20. `lzz` — drink — ejective diacritic applied to plain Laz affricate

**File:** `words/drink.js` line 172  
**Entry:** `["ხცემა", "xt͡sʼema"]`  
In the Kartvelian languages, the Georgian/Laz letter ც (Tzan) represents the plain voiceless alveolar affricate /ts/ — *not* the ejective. The ejective form is spelled წ (Tzan with tick). The transcription `xt͡sʼema` incorrectly adds the ejective superscript ʼ. Compare: Georgian fire ცეცხლი → `t͡set͡sxli` (no ejective, correctly). **Correction:** `xt͡sema`.

---

### 21. `xmf` — moon — aspiration absent where Georgian script requires it

**File:** `words/moon.js` line 681  
**Entry:** `["თუთა", "tuta"]`  
Georgian/Mingrelian letter თ (Tan) represents the *aspirated* dental stop /tʰ/, not a plain /t/. The Laz cognate entry correctly transcribes the same word: `lzz: ["თუთა", "tʰutʰa"]`. The Mingrelian transcription `tuta` omits both aspiration marks. **Correction:** `tʰutʰa`.

---

### 22. `xmf` — eye — ejective written for aspirated Georgian თ

**File:** `words/eye.js` line 675  
**Entry:** `["თოლი", "tʼoli"]`  
Both languages write *თოლი* in Georgian script; Laz is correctly transcribed `tʰoli` (aspirate). Mingrelian has `tʼoli` with an ejective tʼ, which is a different phoneme (ejective, glottalic egressive). Georgian/Mingrelian თ is aspirated, not ejective. This is the mirror-image error to issue #21: the aspirate mark ʰ is replaced by the ejective mark ʼ. **Correction:** `tʰoli`.

---

## Summary statistics

- **Kartvelian errors (ka/lzz/xmf/sva):** 9 issues (systematic ყ→qʼ omission; თ→tʰ/tʼ confusion; wrong lexeme; duplicate form)  
- **Northeast Caucasian errors (agx/av/ce/inh/tkr):** 7 issues (pharyngeal vs lateral; гь symbol; бӏ pharyngealization; ʜ vs ħ)  
- **Uralic errors (myv/vep/fi/yrk/kpv):** 6 issues (wrong lexeme; flap vs trill; в/w inconsistency; ё/ɵ confusion)  
- **Total defensible issues:** 22
