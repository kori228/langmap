# Wordmap review #50 — Atlantic Creoles specialist

## Reviewer self-introduction

My analysis draws primarily on Holm (1989) *Pidgins and Creoles*, vols 1–2 (Cambridge); Smith (1987) *Pidgins and Creoles: An Introduction* (Blackwell); Cassidy & Le Page (1980) *Dictionary of Jamaican English*, 2nd ed. (Cambridge); Coelho (1880–1886) "Os dialectos românicos ou neolatinos na África, Ásia e América," *Boletim da Sociedade de Geografia de Lisboa*; Lefebvre (1998) *Creole Genesis and the Acquisition of Grammar* (Cambridge); Bickerton (1981) *Roots of Language* (Karoma); and above all the APiCS *Atlas of Pidgin and Creole Language Structures* (Michaelis, Maurer, Haspelmath & Huber, eds., 2013, Oxford). IPA checking was cross-referenced against individual grammar sketches in the APiCS companion volumes and the SIL Ethnologue.

---

## Issues

### Issue 1 — `jam` drink: orthography is plain English, not Jamaican Creole orthography (`drink.js:322`)

**Current:** `["drink", "dɹɪŋk"]`  
**Problem:** The Cassidy–JLP orthographic system and the Jamaican Language Unit standard both write the English-origin consonant cluster differently in Patwa: initial /dr/ is realised as an affricate and written **jrink** or **drink** in popular spelling, but the canonical basilectal/mesolectal form in Cassidy is *jrink* /dʒɹɪŋk/. The IPA already given for Belizean Creole (`bzj`: `"jrink", "dʒɾɪŋk"`) is more phonetically explicit than what is here. The Patwa form should at minimum show the affricate onset. A better entry: `["jrink", "dʒɹɪŋk"]`.

---

### Issue 2 — `jam` fire: IPA schwa is wrong for citation form (`fire.js:328`)

**Current:** `["faya", "fajə"]`  
**Problem:** The second syllable vowel in Jamaican *faya* is a full low-back /a/, not the reduced schwa /ə/. Schwa appears in casual running speech but Cassidy's headword transcription, corroborated by Winford (2000) *The Creole Languages of the Caribbean*, gives /faja/ with final /a/. The IPA should be `"faja"` (matching the Sranan and Nigerian Pidgin entries in the same file, which are correctly transcribed).

---

### Issue 3 — `bzj` cat: palatalisation diacritic misused (`cat.js:324`)

**Current:** `["kyat", "kʲat"]`  
**Problem:** The Belizean Creole form is commonly written *kyat* in creole orthography. However, *kʲat* with a palatalization superscript represents a softened (Russian-style) consonant—not the correct analysis. What is happening phonetically is an English /kj/ onset cluster followed by /æ/, often transcribed /kjat/ or /kæt/ in BZJ sources (Escure 2004, APiCS). The IPA should be `"kjat"` (consonant + approximant onset), not `"kʲat"`.

---

### Issue 4 — `pcm` thanks: orthographic *tanx* but IPA /taŋks/ mismatch (`thanks.js:330`)

**Current:** `["tanx", "taŋks"]`  
**Problem:** The written form *tanx* represents a simplified spelling without the final /s/; it should be read /taŋk/ or /taŋks/. The IPA /taŋks/ is internally inconsistent with the orthography, which drops the final *s*. Nigerian Pidgin forms attested in Gut (2008) and Faraclas (1996) APiCS chapter give either *tanki* (with the Dutch/Akan-influenced suffix, as in Krio *tɛnki*) or *tenks*, not *tanx*. The recommended form is `["tanki", "taŋki"]`, matching the West African creole pattern (cf. Krio `tɛnki`); alternatively *tenks* /tɛŋks/.

---

### Issue 5 — `kri` drink: plain English spelling and IPA `/drɪŋk/` with plain /d/, missing affrication (`drink.js:994`)

**Current:** `["drink", "drɪŋk"]`  
**Problem:** Krio, like Jamaican, realises the English /dr/ cluster as an affricate. Jones & Awoyemi (APiCS, Ch. 18) and Fyle & Jones (1980) *A Krio–English Dictionary* confirm that initial /dr/ in Krio is /dʒr/ or /dʒ/ in most registers. The IPA `/drɪŋk/` looks like English, not Krio. Expected: `["drink", "dʒɹɪŋk"]` or at minimum `"dʒrɪŋk"`.

---

### Issue 6 — `kri` heart: phoneme /at/ vs. expected /at/ with Krio open vowel quality (`heart.js:994`)

**Current:** `["at", "at"]`  
**Problem:** The Krio word for 'heart' (< English *heart*) is typically realised with an open back vowel. Fyle & Jones give /ɑt/ or /ɑːt/ (cf. APiCS Krio chapter, Michaelis 2013). The IPA entry `"at"` uses the front-central /a/ which does not capture the back-quality of the vowel in Krio. Should be `"ɑt"`.

---

### Issue 7 — `kri` house: phoneme /ɔs/ but expected form is *os* with mid-open /ɔ/ and likely final devoicing not marked (`house.js:1001`)

**Current:** `["os", "ɔs"]`  
**Problem:** The Krio word for 'house' is *os* /ɔs/—this is phonetically plausible, but Fyle & Jones and APiCS both give the long vowel variant /ɔːs/ for the citation form in Krio. The short vowel /ɔs/ may be adequate for a minimal entry, but a length mark would be more accurate: `"ɔːs"`.

---

### Issue 8 — `srm` water: Portuguese-origin form erased; Saramaccan *wáta* is English-layer, not Portuguese-layer (`water.js:953`)

**Current:** `["wáta", "wáta"]`  
**Problem:** Saramaccan has a bifurcated lexicon: roughly 50% English-origin and 35–40% Portuguese-origin vocabulary (Smith 1987, Bakker et al. APiCS). For 'water', Saramaccan uses *wáta* (English layer) as confirmed in Migge (APiCS Ch. 30) and Good (2004). The form and tone-marked orthography are consistent with Saramaccan conventions. However, the IPA `"wáta"` uses an acute accent as a tone mark in the orthography field but provides no standard IPA tonal diacritic (e.g. `wáta` should map to `ˈwata` in IPA or use `wá.ta` with a high-tone mark /wá.ta/ = /w[H]a.ta/). The current entry confusingly uses the same acute-marked string for both orthography and IPA columns. Recommended: IPA `"ˈwata"` or `"wá˥ta"` to distinguish the representation.

---

### Issue 9 — `srm` moon: *lúna* is unexpected in a language with African substrate sun/moon vocabulary (`moon.js:952`)

**Current:** `["lúna", "lúna"]`  
**Problem:** Saramaccan's Portuguese lexical stratum does include *lúna* 'moon' (< Port. *lua/luna*), attested in Price (1975) and APiCS. However, Saramaccan also uses *wéti náiti* (lit. 'white night') in certain contexts. *lúna* is acceptable as the primary form. The issue is the IPA representation: as with Issue 8, the same acute-accented string appears in both fields without IPA tonal notation. The IPA should use standard diacritics: `"ˈluna"` with stress or a tonal equivalent.

---

### Issue 10 — `srm` thanks: *waáwa* is not a recognised 'thank you' form (`thanks.js:946`)

**Current:** `["waáwa", "waːwa"]`  
**Problem:** This form does not appear in any standard Saramaccan reference: not in Rountree & Glock (1977) *Saramaccan for Beginners*, not in APiCS Ch. 30 (Migge), not in Winford & Migge (2007). The expected Saramaccan word for 'thanks/thank you' is *mi tángi yu* (phrase) or simply *tángi* (< English *thank*). *waáwa* may be a confusion with a different language entirely. Recommended: `["tángi", "ˈtaŋi"]`.

---

### Issue 11 — `ht` moon: IPA /lalɛ̃/ is wrong; expected /lalɛ̃/ vs. correct /lalɛ̃/ (`moon.js:327`)

**Current:** `["lalin", "lalɛ̃"]`  
**Problem:** The Haitian Creole word *lalin* 'moon' derives from French *la lune*. The vowel in the final syllable is /ɛ̃/ (nasal front mid-open) in some analyses, but CODOFIL and Valdman (2007) *Haitian Creole–English Bilingual Dictionary* give the final nasal vowel as /ɛ̃/ — orthographically *in* which is /ɛ̃/ in HC phonology. This is actually correct per Haitian Creole phonology. The issue is more subtle: the orthography is *lalin* but the final nasal /ɛ̃/ mapped to *in* in Haitian Creole is standard. However, a user seeing IPA /lalɛ̃/ alongside written *lalin* without explanation may be confused; the vowel quality /ɛ̃/ vs. /ɪ̃/ distinction is phonologically real in HC (DeGraff 2007). This is a low-severity note rather than a clear error, but worth flagging.

---

### Issue 12 — `mfe` sun: IPA /soleɪ/ uses /eɪ/ diphthong (English value), should be /solɛj/ (`sun.js:936`)

**Current:** `["soley", "soleɪ"]`  
**Problem:** Mauritian Creole is French-lexified; the final element in *soley* is the palatal approximant /j/ with a preceding /ɛ/ (< Fr. *soleil* /sɔlɛj/). The diphthong /eɪ/ is an English value that does not exist in Mauritian Creole phonology. Compare the correctly-transcribed Réunion Creole and Seychellois Creole entries in the same file: `rcf: ["soley", "solej"]` and `crs: ["soley", "solej"]`, both using /ej/. The MFE entry should be `"solej"` (or `"sɔlɛj"` for greater precision), not `"soleɪ"`.

---

### Issue 13 — `gcf` (Guadeloupean/Antillean Creole) fire: IPA /dife/ loses vowel quality (`fire.js:939`)

**Current:** `["difé", "dife"]`  
**Problem:** The orthographic accent in *difé* (Antillean creole orthography GEREC-F) marks a final /e/ that in Guadeloupean Creole is a close-mid /e/, consistent with the representation. However, the initial vowel /i/ in *di-* is short and unstressed; the acute on the final *é* specifically marks final-syllable tone/stress in GEREC-F. The IPA `"dife"` is minimally adequate, but lacks the final stress mark `/diˈfe/`. Compare: Haitian *dife* /dife/ (no stress marking) vs. Guadeloupean which traditionally stresses final open syllables. Low severity but inconsistent with IPA conventions.

---

### Issue 14 — `rcf` (Réunion Creole) fire: *dofé* IPA /dofe/ vs. expected */difé/ — vowel discrepancy unexplained (`fire.js:937`)

**Current:** `["dofé", "dofe"]`  
**Problem:** The Réunion Creole form is genuinely *dofé* (< Fr. *du feu*, with /o/ from article *du*), distinct from Haitian/Mauritian/Seychellois *dife* (< Fr. *du feu* with /i/ vowel lowering). The Réunion form with /o/ is confirmed by Chaudenson (1974) *Le lexique du parler créole de La Réunion*. This entry is factually correct. However, the IPA uses /dofe/ without the final stress that GEREC-F orthography's acute marks: should be `"doˈfe"`. Minor issue.

---

### Issue 15 — `pap` fire: *kandela* 'candle' is not 'fire' in Papiamentu (`fire.js:331`)

**Current:** `["kandela", "kandela"]`  
**Problem:** *Kandela* in Papiamentu means 'candle' (< Sp./Port. *candela*), not 'fire'. The correct Papiamentu word for 'fire' is *kandela* in some contexts (where the sense has extended to 'fire/flame') but the primary, unambiguous word is **fugu** (< Sp. *fuego*) or **kandela** for a candle/flame in controlled contexts. APiCS Ch. 50 (Kouwenberg on Papiamentu) and Birmingham (2004) *Papiamentu–English Dictionary* clearly distinguish *fugu* 'fire' from *kandela* 'candle'. The entry should be `["fugu", "fuɡu"]`.

---

### Issue 16 — `kea` tree: *arvi* — not the most widely attested form; standard Santiago/Badiu form is *arvi* but IPA needs checking (`tree.js:326`)

**Current:** `["arvi", "arvi"]`  
**Problem:** Cape Verdean Crioulo (Santiago variety = kea) for 'tree' is *arvi* < Port. *árvore*. This is phonologically plausible, but Alexandre & Pereira (2017) *Dicionário do Crioulo de Santiago* and the APiCS chapter on Cape Verdean (Lang 2013) give the IPA as /arvi/ or /aɾvi/, with a tapped /ɾ/ rather than a trill /r/. The current IPA `"arvi"` uses a plain /r/ symbol (which in IPA conventionally denotes an alveolar trill), not the tap /ɾ/ that is characteristic of CV Crioulo. Should be `["arvi", "aɾvi"]`.

---

### Issue 17 — `kea` heart: *korason* IPA /korasɔŋ/ — final /ŋ/ is incorrect for Cape Verdean Crioulo (`heart.js:326`)

**Current:** `["korason", "korasɔŋ"]`  
**Problem:** Cape Verdean Crioulo realises word-final nasal in *korason* as a nasal vowel or word-final /n/, not a velar nasal /ŋ/. APiCS Cape Verdean chapter (Lang 2013) and Alexandre & Pereira give /korasõ/ or /korasɔ̃/ (nasalised vowel) or /korasɔn/ — not /korasɔŋ/. The /ŋ/ is the value used for some romanisation conventions (seen also in `kea` 'good' = `"bɔŋ"` — same error pattern), but in IPA this denotes a different phoneme. All `kea` entries with word-final nasal notation using /ŋ/ appear to have been generated by substituting a romanisation convention for IPA. See also `kea` *bon* /bɔŋ/ (good), *mon* /mɔŋ/ (hand).

---

### Issue 18 — `kea` good: *bon* IPA /bɔŋ/ — same final nasal error as Issue 17 (`good.js:326`)

**Current:** `["bon", "bɔŋ"]`  
**Problem:** As per Issue 17, word-final orthographic *n* in Cape Verdean Crioulo represents a nasal vowel /õ/ or /ɔ̃/, not the velar nasal /ŋ/. The IPA should be `"bɔ̃"` or `"bõ"` to match the French-creole pattern (compare Haitian *bon* /bɔ̃/, Guadeloupean *bon* /bõ/, Mauritian *bon* /bõ/ — all consistently nasalised vowels). Cape Verdean creoles are Portuguese-based but the nasal vowel pattern follows the same IPA convention.

---

### Issue 19 — `kea` hand: *mon* IPA /mɔŋ/ — same final nasal error (`hand.js:326`)

**Current:** `["mon", "mɔŋ"]`  
**Problem:** Same systematic issue as Issues 17–18. The form *mon* (< Port. *mão*) has a nasalised vowel; IPA /mɔ̃/ or /mõ/, not /mɔŋ/.

---

### Issue 20 — `cbk` (Chavacano) eat: *comê* with final glottal stop /koˈmeʔ/ is questionable (`eat.js:578`)

**Current:** `["comê", "koˈmeʔ"]`  
**Problem:** Chavacano (Zamboangueño) 'eat' is typically spelled *come* or *kumé* in modern orthography, and the phonological form is /koˈme/ or /kuˈme/ — no final glottal stop. The circumflex in *comê* and the glottal stop /ʔ/ in the IPA appear to be imported from Brazilian Portuguese romanisation conventions, not Chavacano phonology. Standard references (Forman 1972 *Zamboangueño Chavacano Dictionary*; APiCS Ch. 45, Steinkrüger) give /kome/ or /kume/ without any final laryngeal. Recommended: `["come", "koˈme"]`.

---

### Issue 21 — `cbk` drink: same glottal-stop import error (`drink.js:578`)

**Current:** `["bebê", "beˈbeʔ"]`  
**Problem:** Parallel to Issue 20. Chavacano *bebe* 'drink' (< Sp. *beber*) has no final glottal stop. The circumflex and /ʔ/ again reflect a Portuguese orthographic convention erroneously applied. Recommended: `["bebe", "beˈbe"]`.

---

### Issue 22 — `hwc` sun: /sæn/ — Hawaiian Creole 'sun' is not /sæn/ (`sun.js:472`)

**Current:** `["san", "sæn"]`  
**Problem:** The Hawaiian Creole English form *san* for 'sun' should have the vowel /ʌ/ or /a/ (cf. substrate-influenced AAVE-like vowel), not /sæn/ which is a Northern Cities Shift or standard American English value. Tonouchi (2001) and Sakoda & Siegel (2003) *Pidgin Grammar: An Introduction to the Creole Language of Hawaii* give the vowel as /a/ or /ʌ/ in HCE, not /æ/. The IPA should be `"sʌn"` or `"san"`.

---

### Issue 23 — `srn` sun: final /ŋ/ in /soŋ/ — is this a nasal consonant or nasalised vowel? (`sun.js:950`)

**Current:** `["son", "soŋ"]`  
**Problem:** In Sranan Tongo the word for 'sun' is *son* and the final segment is a nasal consonant /n/ in careful speech, but in rapid speech it may produce nasalisation of the vowel. APiCS Ch. 28 (Winford & Plag) and Winford (2003) consistently transcribe it as /son/ with final /n/, not /soŋ/ with a velar nasal. The velar /ŋ/ appears to be an error. Recommended IPA: `"son"`.

---

### Issue 24 — `ht` eat: IPA /mɑ̃ʒe/ uses /ɑ̃/ but standard Haitian Creole phonology has /ã/ or /ɑ̃/ inconsistently across the file (`eat.js:321`)

**Current:** `["manje", "mɑ̃ʒe"]`  
**Problem:** Haitian Creole *manje* 'eat/food' (< Fr. *manger*) has a nasal vowel that Valdman (2007) transcribes as /mãʒe/ with the low central nasal /ã/, not the back-of-mouth /ɑ̃/. The distinction matters: Haitian Creole front/central nasals are /ã ɛ̃ õ/ (Dejean 1980; Valdman 2007). Using /ɑ̃/ introduces a back-vowel quality absent from standard descriptions. Compare the same file's *manman* 'mother' (mother.js:327) where `/mɑ̃mɑ̃/` carries the same issue. Recommended for *manje*: `"mãʒe"`.

---

### Issue 25 — `gcf` dog: /tʃjɛ̃/ — the /tʃ/ onset for *chyen* is non-standard for Antillean Creole (`dog.js:933`)

**Current:** `["chyen", "tʃjɛ̃"]`  
**Problem:** Guadeloupean/Antillean Creole phonology does not have an affricate /tʃ/ in this position. The onset of *chyen* (< Fr. *chien* 'dog') is a palatal fricative /ʃ/ followed by the palatal approximant /j/, giving /ʃjɛ̃/ — not the affricate cluster /tʃj/. The GEREC-F orthography uses *ch* for /ʃ/ throughout. APiCS Martinican/Guadeloupean chapters (Colot & Ludwig 2013) confirm /ʃjɛ̃/. Recommended: `"ʃjɛ̃"`.

---

### Issue 26 — `mfe` heart: *leker* IPA /lekeɾ/ — final rhotic quality note (`heart.js:930`)

**Current:** `["leker", "lekeɾ"]`  
**Problem:** The Mauritian Creole word *leker* (< Fr. *le cœur* 'the heart') is transcribed with a final tapped /ɾ/. Mauritian Creole has largely lost post-vocalic /r/ in colloquial speech; Baker & Hookoomsing (1987) *Morisyen* give /lekɛ/ or /leke/ without a final rhotic for the common form. The final /ɾ/ may represent a citation form or a conservative register, but for a word-map entry representing everyday speech the form without the coda rhotic, `"leke"` or `"lekɛ"`, is more representative.

---

*Total issues: 26*

---

## Summary by language

| Code | Issues |
|------|--------|
| jam | #1 (drink affrication), #2 (fire vowel) |
| bzj | #3 (cat palatalization) |
| pcm | #4 (thanks form) |
| kri | #5 (drink affrication), #6 (heart vowel), #7 (house vowel length) |
| srm | #8 (water IPA notation), #9 (moon IPA notation), #10 (thanks wrong form) |
| ht | #11 (moon nasal), #24 (eat nasal vowel quality) |
| mfe | #12 (sun diphthong /eɪ/), #26 (heart final rhotic) |
| gcf | #13 (fire final stress), #25 (dog affricate) |
| rcf | #14 (fire stress) |
| pap | #15 (fire = candela not fugu) |
| kea | #16 (tree tapped r), #17 (heart /ŋ/), #18 (good /ŋ/), #19 (hand /ŋ/) |
| cbk | #20 (eat glottal stop), #21 (drink glottal stop) |
| hwc | #22 (sun vowel /æ/) |
| srn | #23 (sun /ŋ/) |

### Highest-priority fixes

1. **Issue 15** — `pap` fire: *kandela* ≠ 'fire'; should be *fugu*. This is a wrong-word error.
2. **Issue 10** — `srm` thanks: *waáwa* unattested; should be *tángi*.
3. **Issues 17–19** — `kea` systematic /ŋ/ for word-final nasal vowel: affects at least 3 entries, likely systemic across all kea entries.
4. **Issues 20–21** — `cbk` glottal-stop import: affects eat and drink, likely systemic in all cbk IPA entries using circumflex orthography.
5. **Issues 1, 5** — `jam`/`kri` drink affrication: classic lexifier-orthography-substitution error.
