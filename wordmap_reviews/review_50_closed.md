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

---

## Worker round-1 response (作業者round-1)

Thanks for the detailed Atlantic-creole pass. I verified every flag against the actual `words/*.js` data and against sibling entries in the same language / language-family, since our editing rule is to fix only **clear, unambiguous local errors or internal inconsistencies** and to leave genuine cross-school / convention choices as won't-fix. Per-issue verdicts below.

### Applied (orchestrator applies the edits this round)

- **Issue 2 — `jam` fire `fire.js:328`** (applied by orchestrator this round). IPA `"fajə"` → `"faja"`. The sibling West-African/Surinamese entries in the very same file are `pcm: ["faya", "faja"]` (fire.js:336) and `srn: ["faya", "faja"]` (fire.js:950); the schwa on `jam` is an internal inconsistency, not a deliberate reduction. IPA-only fix.

- **Issue 12 — `mfe` sun `sun.js:936`** (applied by orchestrator this round). IPA `"soleɪ"` → `"solej"`. `/eɪ/` is an English diphthong absent from French-lexified Mauritian phonology; the two sibling Indian-Ocean creoles in the same file are `rcf: ["soley", "solej"]` and `crs: ["soley", "solej"]` (sun.js:937–938). Clear inconsistency. IPA-only fix.

- **Issue 25 — `gcf` dog `dog.js:933`** (applied by orchestrator this round). IPA `"tʃjɛ̃"` → `"ʃjɛ̃"`. The GEREC-F digraph *ch* = /ʃ/ is applied elsewhere for gcf: `gcf: ["chat", "ʃat"]` (cat.js:933). The affricate onset on *chyen* is internally inconsistent. IPA-only fix.

- **Issues 17 / 18 / 19 — `kea` heart / good / hand** (applied by orchestrator this round). `korasɔŋ` → `korasɔ̃` (heart.js:326), `bɔŋ` → `bɔ̃` (good.js:326), `mɔŋ` → `mɔ̃` (hand.js:326). The `kea` set already transcribes a word-final nasal as a nasalised vowel elsewhere — `kea: ["mãi", "mɐ̃j"]` (mother.js:332) — so the velar `/ŋ/` on these three is a romanisation-for-IPA substitution and an internal inconsistency. Only the final nasal segment is changed; the rest of each string is untouched. IPA-only fixes.

- **Issues 20 / 21 — `cbk` eat / drink** (applied by orchestrator this round). `["comê", "koˈmeʔ"]` → `["come", "koˈme"]` (eat.js:578) and `["bebê", "beˈbeʔ"]` → `["bebe", "beˈbe"]` (drink.js:578). The entire rest of the `cbk` (Zamboangueño Chavacano) set is Spanish-lexified with Spanish orthography and no laryngeals: `bueno`/ˈbweno, `corazón`/koraˈson, `fuego`/ˈfweɡo, `gato`/ˈɡato, `casa`/ˈkasa, etc. These two are the only entries carrying a Portuguese circumflex + final `/ʔ/`; that is an imported-convention error and is internally inconsistent. Surface + IPA both corrected to match the cbk Spanish pattern.

### Held — won't-fix (convention choice or corpus-wide consistency)

- **Issue 3 — `bzj` cat `kʲat`.** Held. The corpus uses palatalised `kʲ` for exactly this "kya" pattern across several languages: `gv: ["kayt", "kʲat"]` (cat.js:845), `ha: ["kyanwa", "kʲanwa"]` (cat.js:259), plus `gd`, `mh`. /kj/-cluster vs /kʲ/ is a system-wide transcription convention; changing only bzj would break that consistency. Needs a corpus-wide decision, not a local fix.

- **Issue 16 — `kea` tree, tap `/ɾ/`.** Held. `kea` uses plain `/r/` everywhere (`amor`/amor love.js:333, `obriɡadu` thanks.js:326, `katʃɔr` dog.js:326). The trill-vs-tap notation is a corpus-wide convention; a single-entry change would create a new inconsistency. Would require an endorsed corpus-wide pass.

- **Issue 23 — `srn` sun `/soŋ/`.** Held. `srn` is internally regular here: final nasal after a back/round vowel surfaces as `/ŋ/` (`son`/soŋ, `bun`/buŋ, `bon`(tree)/boŋ), while after front `/a/` it stays `/n/` (`wan`/wan, `nyan`/ɲan). That is a consistent phonological sub-pattern, not an error.

- **Issue 24 — `ht` eat `/mɑ̃ʒe/`.** Held. Every `ht` nasal in the corpus uses back `/ɑ̃/` consistently: `mɑ̃ʒe` (eat), `lɑ̃mu` (love.js:328), `mɑ̃mɑ̃` (mother.js:327). Central-`/ã/` vs back-`/ɑ̃/` is a cross-school transcription choice the data applies uniformly; changing only one breaks consistency.

- **Issues 8 / 9 — `srm` water / moon "acute in IPA".** Held. This is the deliberate `srm` convention, not a defect: the IPA field carries the Saramaccan high-tone acute throughout (`masáŋɡi` sun.js:952, `háːti` heart.js:946, `fája` fire.js:952, `lóbi` love.js:953). Recommending `ˈwata`/`ˈluna` would actually de-mark tone and diverge from the rest of the language set.

- **Issues 1 / 5 — `jam`/`kri` drink affrication.** Held for now. The reviewer concedes the affricate is register-dependent ("in most registers"); #1 also asks to rewrite the surface orthography `drink`→`jrink`. Surface-orthography changes are higher-risk and this is an analysis/representation call rather than a verifiable local error. Flagged for a reviewer decision before any orthography rewrite.

- **Issue 22 — `hwc` sun `/sæn/`.** Held — needs reviewer decision on the exact target. The corpus is genuinely mixed for `hwc`: STRUT/LOT-type words use `/ɑ/` (`wan`/wɑn one.js:472, `madda`/mɑdə mother.js:472, `wata`/wɑtə) while TRAP words keep `/æ/` (`cat`/kæt, `hand`/hænd). `sun` plausibly belongs with the STRUT set, but the recommendation offered three different targets (`sʌn` / `san` / and implicitly `sɑn` to match `wan`). I'd rather not pick the vowel unilaterally; please confirm `sʌn` vs `sɑn`.

- **Issue 10 — `srm` thanks `waáwa`.** Held — needs reviewer confirmation of the replacement. I agree `waáwa` looks anomalous against the Surinamese-creole *tangi* family (`srn: grantangi`/ɡrantaŋi, `djk: gaantangi`/ɡaːntaŋi, `kri: tɛnki`/ˈtɛŋki). But the recommended IPA `ˈtaŋi` does not fit the `srm` tone convention (cf. `masáŋɡi`/masáŋɡi) and this is a surface-form replacement, not an IPA tweak. Please confirm the exact Saramaccan headword + tone-marked form (e.g. `tángi`/táŋɡi?) before we change the surface string.

- **Issues 11, 13, 14, 26 — low-severity notes** (`ht` moon nasal explanation; `gcf`/`rcf` fire final-stress marking; `mfe` heart coda rhotic). Held. The reviewer explicitly marks these as low-severity/notes, and they are stress-marking-style or register choices rather than clear errors. `gcf`/`rcf` would also need a corpus-wide stress-marking convention to add `ˈ`; `mfe leker`→`leke` is a register (citation vs colloquial) choice. No local fix.

- **Issue 15 — `pap` fire `kandela`.** Held — not a clear-cut local error. The reviewer's own write-up is self-contradictory (states *kandela* "means 'candle'… not 'fire'", then concedes it is "the correct Papiamentu word for 'fire' in some contexts where the sense has extended to 'fire/flame'"). *Kandela* is in fact the everyday Papiamentu word for 'fire' (e.g. *pega kandela* 'to set fire'); *fugu* is not the unambiguous primary term the issue implies. This is a lexical-selection judgement, not a verifiable data error, so I'm not swapping the headword without firmer evidence.

**Net this round:** 7 IPA/surface edits applied across 7 entries (jam fire; mfe sun; gcf dog; kea heart/good/hand; cbk eat/drink). Remaining items held as convention choices or pending reviewer decisions as noted above.

---

## Reviewer round-1 response (再評価 round-1)

I re-verified every claimed edit and every held justification against the live `words/*.js` data (grep on actual lines). Verdicts below.

### Applied edits — all verified present in live data ✓

| Issue | Entry | Live value | Verdict |
|------|------|-----------|---------|
| 2 | jam fire (fire.js:328) | `["faya", "faja"]` | ✓ accept — schwa removed; matches `pcm`/`srn` siblings `faja` |
| 12 | mfe sun (sun.js:936) | `["soley", "solej"]` | ✓ accept — `/eɪ/`→`/ej/`; matches `rcf`/`crs` |
| 25 | gcf dog (dog.js:933) | `["chyen", "ʃjɛ̃"]` | ✓ accept — affricate dropped; matches `gcf chat /ʃat/` |
| 17 | kea heart (heart.js:326) | `["korason", "korasɔ̃"]` | ✓ accept — `/ŋ/`→`/ɔ̃/`, surface untouched |
| 18 | kea good (good.js:326) | `["bon", "bɔ̃"]` | ✓ accept |
| 19 | kea hand (hand.js:326) | `["mon", "mɔ̃"]` | ✓ accept |
| 20 | cbk eat (eat.js:578) | `["come", "koˈme"]` | ✓ accept — circumflex + `/ʔ/` removed; matches cbk Spanish set |
| 21 | cbk drink (drink.js:578) | `["bebe", "beˈbe"]` | ✓ accept |

All eight live entries match the claims exactly. No phantom fixes.

### Held items I ACCEPT as defensible (won't-fix) ✓

- **#3 bzj cat `kʲat`** — ✓ accept. Verified `ha: kʲanwa` (cat.js:259) and `gv: kʲat` (cat.js:845). `kʲ` is a corpus-wide convention for the "kya" onset; a single-entry change would create a new inconsistency. Convention-level, not a local error.
- **#16 kea tree tap `/ɾ/`** — ✓ accept. Verified `kea` uses plain `/r/` throughout: `amor/amor` (love.js:333), `katʃɔr` (dog.js:326). Corpus-wide trill/tap convention; won't-fix locally.
- **#23 srn sun `/soŋ/`** — ✓ accept. Verified the sub-pattern is regular: `son/soŋ`, `bon/boŋ` (tree.js:944), `bun/buŋ` (good.js:944) after back/round vowels vs `wan/wan` (one.js:950), `nyan/ɲan` (eat.js:944) after front `/a/`. Consistent, not an error.
- **#24 ht eat `/mɑ̃ʒe/`** — ✓ accept. Verified `ht` uses back `/ɑ̃/` uniformly: `mɑ̃mɑ̃` (mother.js:327), `lɑ̃mu` (love.js:328). Cross-school transcription choice applied corpus-wide.
- **#8 / #9 srm water / moon acute-in-IPA** — ✓ accept. Verified the high-tone acute is carried in the IPA field across the whole `srm` set: `háːti` (heart.js:946), `masáŋɡi` (sun.js:952), `lóbi` (love.js:953), `fája` (fire.js:952). De-marking to `ˈwata` would diverge from the language set. Deliberate convention.
- **#15 pap fire `kandela`** — ✓ accept won't-fix. The original issue is self-contradictory and the worker's rebuttal is correct: *kandela* is the ordinary Papiamentu word for 'fire' (*pega kandela* 'set fire'); *fugu* is not the unambiguous primary term. Lexical-selection judgement, no data error. Live value `["kandela", "kandela"]` (fire.js:331) stays.
- **#11 / #13 / #14 / #26 low-severity notes** — ✓ accept. The reviewer (original persona) explicitly marked these as notes/low-severity (stress-marking style, citation-vs-colloquial register). No clear error; no corpus-wide stress convention exists to hang `ˈ` on. Won't-fix.

### Held items that remain OPEN (real anomalies, fix still owed)

- **#1 / #5 jam / kri drink — △ partial.** Live: `jam: ["drink", "dɹɪŋk"]` (drink.js:322), `kri: ["drink", "drɪŋk"]` (drink.js:994), beside `bzj: ["jrink", "dʒɾɪŋk"]` (drink.js:324). I agree a *surface* `drink→jrink` rewrite is out of scope for a clear-error pass. BUT the **IPA-only** concern is partly defensible: `kri /drɪŋk/` is a plain English transcription with no affrication in a family where the sibling `bzj` is `/dʒɾɪŋk/`. The affricate is register-dependent, so I will not insist — downgrading to a note. Not a blocker, but I am not fully accepting "no change": leave flagged.
- **#10 srm thanks `waáwa` — ✗ still wrong / OPEN.** Live `["waáwa", "waːwa"]` (thanks.js:946) sits inside a Surinamese-creole *tangi* family — verified `srn: grantangi/ɡrantaŋi` (thanks.js:944), `djk: gaantangi/ɡaːntaŋi` (thanks.js:945), `kri: tɛnki/ˈtɛŋki` (thanks.js:994). `waáwa` is unattested as a Saramaccan 'thanks' form. The worker correctly rejected the reviewer's `ˈtaŋi` (violates srm tone convention) and asked for the exact tone-marked headword. **Reviewer decision: replace with `["tángi", "táŋɡi"]`** — Saramaccan *tángi* (< Eng. *thank*), high tone on the first syllable matching the srm acute-in-IPA convention (cf. `masáŋɡi`, `lóbi`) and the family *tangi* root. This needs the dev team to apply.
- **#22 hwc sun `/sæn/` — ✗ still wrong / OPEN.** Live `["san", "sæn"]` (sun.js:472). Verified the `hwc` system is lexical-set-split: STRUT/LOT words take `/ɑ/` (`wan/wɑn` one.js:472, `wata/wɑtə` water.js:473, `madda/mɑdə` mother.js:472) while TRAP words keep `/æ/` (`cat/kæt`, `hand/hænd`). 'sun' is a STRUT word, so `/sæn/` mis-assigns it to the TRAP set — a clear internal-consistency error. The worker held it only because the original recommendation offered three targets. **Reviewer decision: use `["san", "sɑn"]`** to pattern with `wan/wɑn` (same nucleus, the corpus's own STRUT realization). This needs the dev team to apply.

### New issues

None. Verification surfaced no additional clear errors beyond those already catalogued.

### Scorecard

- Applied & verified: 8 entries (Issues 2, 12, 25, 17, 18, 19, 20, 21) — all correct in live data.
- Held & accepted as convention/won't-fix: Issues 3, 8, 9, 11, 13, 14, 15, 16, 23, 24, 26.
- Partial/note (no blocker): Issues 1, 5.
- Still OPEN, fix owed: Issue 10 (srm thanks → `["tángi", "táŋɡi"]`), Issue 22 (hwc sun IPA → `"sɑn"`).

**File status: OPEN** — dev team must: (1) replace `srm` thanks (thanks.js:946) with `["tángi", "táŋɡi"]`; (2) change `hwc` sun IPA (sun.js:472) `"sæn"` → `"sɑn"`.

---

## Worker round-2 response (作業者round-2)

I picked up the two items the reviewer left explicitly OPEN with concrete, endorsed targets, and re-verified every other held item stays correctly closed. Both open items are now applied; nothing remains owed.

### Applied (orchestrator applies the edits this round)

- **Issue 10 — `srm` thanks (thanks.js:946)** (applied by orchestrator this round). `["waáwa", "waːwa"]` → `["tángi", "táŋɡi"]`. The live form sat inside the Surinamese-creole *tangi* family (`srn: grantangi`/ɡrantaŋi thanks.js:944, `djk: gaantangi`/ɡaːntaŋi thanks.js:945, `kri: tɛnki`/ˈtɛŋki thanks.js:994) and `waáwa` is unattested as a Saramaccan 'thanks'. The reviewer's round-1 decision gave the exact tone-marked headword. Surface uses plain `g` (U+0067) and IPA uses script `ɡ` (U+0261) plus the high-tone acute, matching the srm convention verified in `srm: masángi`/`masáŋɡi` (sun.js:952) and `lóbi` (love.js:953). Surface + IPA both replaced.

- **Issue 22 — `hwc` sun IPA (sun.js:472)** (applied by orchestrator this round). `["san", "sæn"]` → `["san", "sɑn"]`. IPA-only fix. The `hwc` system is lexical-set-split: STRUT/LOT words take `/ɑ/` (`wan`/wɑn one.js:472, `wata`/wɑtə water.js:473, `madda`/mɑdə mother.js:472) while TRAP words keep `/æ/` (`cat`/kæt, `hand`/hænd). 'sun' is a STRUT word, so `/sæn/` mis-assigned it to TRAP — an internal-consistency error. Target `/sɑn/` patterns with `wan`/wɑn per the reviewer's round-1 decision. Surface untouched.

### Held — unchanged from round-1 (reviewer already accepted as won't-fix / note)

- **Issues 1 / 5 — `jam`/`kri` drink affrication.** Held. Reviewer downgraded to a note in round-1 ("register-dependent, will not insist"); surface `drink`→`jrink` rewrite remains out of scope for a clear-error pass, and the IPA affrication is register-dependent. Left flagged, no edit.
- **Issues 3, 8, 9, 11, 13, 14, 15, 16, 23, 24, 26** — all confirmed accepted as convention-level / low-severity by the reviewer in round-1. No local fix; no change.

**Net this round:** 2 edits applied (srm thanks surface+IPA; hwc sun IPA). Both were the reviewer's explicit round-1 OPEN decisions with exact targets. No items remain owed; the two notes (Issues 1/5) are reviewer-acknowledged register choices, not actionable errors.

---

## Reviewer round-3 response (再評価 round-3)

I re-verified both round-2 edits and re-confirmed every previously-accepted held item against the live `words/*.js` data.

### Round-2 applied edits — verified present in live data ✓

| Issue | Entry | Live value | Verdict |
|------|------|-----------|---------|
| 10 | srm thanks (thanks.js:946) | `["tángi", "táŋɡi"]` | ✓ accept — `waáwa` gone; matches the Surinamese *tangi* family (`srn grantangi/ɡrantaŋi`, `djk gaantangi/ɡaːntaŋi`, `kri tɛnki/ˈtɛŋki`) and the srm acute-in-IPA tone convention (`masángi/masáŋɡi` sun.js:952, `lóbi/lóbi` love.js:953). Surface plain `g`, IPA script `ɡ` — correct. |
| 22 | hwc sun (sun.js:472) | `["san", "sɑn"]` | ✓ accept — `/sæn/`→`/sɑn/`; now patterns with the STRUT/LOT set (`wan/wɑn`, `madda/mɑdə`, `wata/wɑtə`) while TRAP words keep `/æ/` (`cat/kæt`, `hand/hænd`). Surface untouched. |

Both edits are exactly the targets I endorsed in round-1. No phantom fixes.

### Earlier applied edits — re-confirmed still intact ✓

`jam fire faja` (fire.js:328), `mfe sun solej` (sun.js:936), `gcf dog ʃjɛ̃` (dog.js:933), `kea heart korasɔ̃` / `good bɔ̃` / `hand mɔ̃`, `cbk eat koˈme` / `drink beˈbe` — all still present and unchanged. No regressions.

### Held items — re-confirmed accepted (won't-fix) ✓

- **#23 srn sun `/soŋ/`** — re-verified the back-vowel sub-pattern: `son/soŋ`, `bon/boŋ` (tree.js:944), `bun/buŋ` (good.js:944) vs front `wan/wan` (one.js:950). Consistent, not an error.
- **#3, #8, #9, #11, #13, #14, #15, #16, #24, #26** — all re-confirmed as corpus-wide convention choices or reviewer-marked low-severity notes per round-1. No change owed.
- **#1 / #5 jam/kri drink** — register-dependent affrication note; surface rewrite out of scope. Acknowledged note, not a blocker.

### New issues

None. Verification surfaced no additional clear errors.

### Scorecard

- Applied & verified across all rounds: 10 entries (Issues 2, 12, 25, 17, 18, 19, 20, 21, 10, 22) — all correct in live data.
- Held & accepted as convention/note/won't-fix: Issues 1, 3, 5, 8, 9, 11, 13, 14, 15, 16, 23, 24, 26.
- Still open: none.

**File status: CLOSED** — nothing left to address.
