# Wordmap review #02 — Romance linguistics specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I specialise in the historical and descriptive phonology of the Romance language family, from Vulgar Latin through all major and minor daughter languages. My framework draws on Meyer-Lübke's *Romanisches Etymologisches Wörterbuch* (REW) for etyma and daughter-language reflexes; Posner (1996) *The Romance Languages* for comparative typology; Penny (2002) *A History of the Spanish Language* and Williams (1962) *Origin and Growth of the Portuguese Language* for Ibero-Romance; Bourciez *Phonétique française* and Pope (1934) *From Latin to Modern French* for Gallo-Romance; Maiden (1995) *A Linguistic History of Italian* and Rohlfs *Grammatica storica della lingua italiana* for Italo-Romance; Nandriş and Rosetti for Romanian; the IEO (Institut d'Estudis Occitans) normative grammar for Occitan; and the standard dictionaries (DLE, Treccani, Le Petit Robert, Houaiss, DRAG) for synchronic verification. My reviewing criterion is that every IPA transcription must (a) carry an explicit primary-stress mark `ˈ` except in monosyllables, (b) use correct IPA symbols (not orthographic stand-ins), and (c) reflect the phonology of the stated variety, not a related but distinct dialect or era.

---

## Issues found

### 1. `la` — *fire* (`ignis`) — /gn/ transcribed as /ŋn/ instead of /ɡn/

**File:** `words/fire.js` line 516  
**Current:** `["ignis", "iŋnis"]`  
**Expected:** `["ignis", "ˈiɡnis"]`  

Classical Latin spelled and pronounced the cluster *gn* as the stop sequence /ɡn/, not as velar nasal + stop /ŋn/. The velar-nasal allophone [ŋ] occurs in Latin only before /k/ and /ɡ/ within a single morpheme (e.g. *angulus* /ˈaŋɡulus/); it does not arise across the *gn* cluster where /ɡ/ is the onset of the second syllable. The received Classical pronunciation taught by Allen (1965) *Vox Latina* is explicitly /ˈiɡ.nis/. The /ŋn/ transcription is a borrowing from Italian intuition (*igni* → assimilation in Italian pedagogy) incorrectly backdated to Latin. Additionally, the stress mark is absent.

---

### 2. `gl` — *heart* (`corazón`) — /θ/ does not exist in Galician

**File:** `words/heart.js` line 306  
**Current:** `["corazón", "koɾaθon"]`  
**Expected:** `["corazón", "koɾaˈson"]`  

Galician phonology has no interdental fricative /θ/. The seseo merger — the collapse of the medieval sibilant distinction — is a defining feature of Galician; the reflex of both Castilian /s/ and /θ/ is Galician /s/. The word "corazón" in Galician is a Castilianism (native Galician preferred *coração* historically) and in any case is pronounced /koɾaˈson/ in contemporary Galician. Transcribing it with /θ/ treats it as Castilian. The stress mark is also absent.

---

### 3. `gl` — *thanks* (`grazas`) — same /θ/ error

**File:** `words/thanks.js` line 306  
**Current:** `["grazas", "ɡɾaθas"]`  
**Expected:** `["grazas", "ˈɡɾasas"]`  

"Grazas" (from Latin GRATIAS via *graças*) contains /s/ in Galician throughout, including at the morpheme boundary -z-. The DRAG (Dicionario da Real Academia Galega) transcribes the word as /ˈɡɾasas/. Same /θ/-intrusion error as issue 2 above; Galician is a seseo language.

---

### 4. `es_ar` — *eye* (`ojo`) — Rioplatense /x/ transcribed as /ʃ/

**File:** `words/eye.js` line 502  
**Current:** `["ojo", "oʃo"]`  
**Expected:** `["ojo", "ˈoxo"]`  

The Rioplatense (Argentine/Uruguayan) phoneme known as *žeísmo* or *sheísmo* affects only the palatal phoneme spelled *ll/y*, realised as [ʃ] or [ʒ]. The velar fricative /x/ (spelled *j* or *g* before front vowels) is unaffected: *ojo* is /ˈoxo/ in Buenos Aires speech. Assigning /ʃ/ to the velar fricative confuses two entirely distinct phonological processes. (Compare: the *es_sgl* Golden Age entry correctly uses /ʃ/ because in 16th-century Castilian the *j*-phoneme really was a post-alveolar /ʃ/; that historical form has been incorrectly carried forward into the modern Argentine entry.)

---

### 5. `ca` — *love* (`amor`) — final /ɾ/ elided and stress mark absent

**File:** `words/love.js` line 312  
**Current:** `["amor", "əmo"]`  
**Expected:** `["amor", "əˈmoɾ"]`  

Eastern Catalan reduces unstressed /a/ → [ə] (schwa), so the initial vowel is correctly /ə/. However, two errors remain: (a) word-final /ɾ/ is retained in nominal forms in citation pronunciation — the deletion rule applies mainly to infinitive endings in colloquial speech and is not categorical for nouns; (b) the stress mark is absent. The DIEC2 (Institut d'Estudis Catalans dictionary) and Recasens (1993) transcribe "amor" as /əˈmoɾ/.

---

### 6. `ro` — *love* (`iubire`) — stress mark absent, wrong position implied

**File:** `words/love.js` line 167  
**Current:** `["iubire", "jubire"]`  
**Expected:** `["iubire", "juˈbire"]`  

Romanian "iubire" is oxytone on the antepenultimate: the stress falls on -bi-, giving /juˈbi.re/. Without the stress mark the reader cannot determine syllable prominence. Additionally the initial /j/ correctly represents the palatal glide onset, but /jubire/ with no stress reads as level-tone, which is wrong.

---

### 7. `ro` — *sun* (`soare`) — orthographic letters used in IPA field, no stress

**File:** `words/sun.js` line 167  
**Current:** `["soare", "soare"]`  
**Expected:** `["soare", "ˈso̯are"]`  

The IPA field literally duplicates the orthographic form. Romanian "soare" contains a rising diphthong /o̯a/ (or /wa/ in some analyses), not two separate vowels. The correct narrow transcription is [ˈso̯a.re]; a broad IPA transcription would be /ˈso̯are/. The same orthographic-as-IPA problem affects the infinitive entry for *drink* (issue 9 below).

---

### 8. `ro` — *dog* (`câine`) — stress mark absent and diphthong not marked

**File:** `words/dog.js` line 167  
**Current:** `["câine", "kɨine"]`  
**Expected:** `["câine", "ˈkɨi̯ne"]`  

Romanian "câine" is stressed on the first syllable /ˈkɨi̯ne/; the /ɨi̯/ sequence is a falling diphthong (semivowel /i̯/ in coda position). The current transcription /kɨine/ omits the stress diacritic and writes the diphthong as two full vowels, misrepresenting the syllable structure.

---

### 9. `ro` — *drink* (`a bea`) — orthographic string used as IPA

**File:** `words/drink.js` line 167  
**Current:** `["a bea", "a bea"]`  
**Expected:** `["a bea", "a ˈbe.a"]`  

The IPA field repeats the orthographic string verbatim. The letters happen to be IPA-compatible individually, but there is no stress mark and the hiatus structure /ˈbe.a/ is not indicated. Romanian verbs in the infinitive bear stress on the root vowel: /a ˈbe.a/.

---

### 10. `oc` — *fire* (`fuòc`) — Occitan /u/ = /y/, not transcribed as /j/

**File:** `words/fire.js` line 313  
**Current:** `["fuòc", "fjɔk"]`  
**Expected:** `["fuòc", "ˈfyɔk"]`  

In standard Languedocian Occitan (IEO norm), the letter *u* represents the rounded front vowel /y/ (as in French *lune*), parallel to the Old French and Catalan treatment of Latin Ū. The word "fuòc" (< Latin FOCUM) thus begins with /fy-/, not with /f/ + palatal glide /j/. The transcription /fjɔk/ conflates the Occitan rounded-front vowel with a palatal approximant, which is an error of vowel quality. The stress mark is also absent.

---

### 11. `oc` — *moon* (`luna`) — final -a → /o/ is a Gascon isogloss, not standard Languedocian

**File:** `words/moon.js` line 313  
**Current:** `["luna", "lyno"]`  
**Expected:** `["luna", "ˈlyna"]` (Languedocian) or label as Gascon variant

The change of word-final Latin -A to /o/ is one of the defining Gascon isoglosses (cf. Rohlfs 1935; Bourciez §473). In standard literary Languedocian, final -a is retained as /a/ (possibly slightly reduced to [ɐ] in casual speech, but never /o/). The transcription /lyno/ — with both the pan-Occitan /y/ (correct) and the Gascon final /o/ (Gascon-specific) — mixes two dialect layers. If the "oc" code targets standard Languedocian, the IPA should be /ˈlyna/.

---

### 12. `fro` — *fire* (`feu`) — monophthong /fø/ anachronistic for Old French

**File:** `words/fire.js` line 913  
**Current:** `["feu", "fø"]`  
**Expected:** `["feu", "few"]`  

The rounded front monophthong /ø/ in French "feu" is a product of late Middle French / early Modern French monophthongisation. In Old French (11th–13th centuries), the reflex of Latin FOCUM was the diphthong /ew/ (Pope 1934 §§537, 543; Bourciez §192): written *feu*, pronounced /few/. The *fro* code represents this early period, where /ø/ had not yet emerged. The modern /fø/ is identical to what *fr_class* or modern *fr* carry and should not be attributed to *fro*.

---

### 13. `vec` — *moon* (`łuna`) — /ɰ/ incorrect for Venetian barred-*l*

**File:** `words/moon.js` line 305  
**Current:** `["łuna", "ɰuna"]`  
**Expected:** `["łuna", "wuna"]` or `["łuna", "lʷuna"]`

Venetian orthographic *ł* represents a lateral that has been vocalised in most Venetian dialects; the result is typically a labial-velar approximant [w] (as in Venetian "łuna" → [wuna]) or in some varieties a weakened lateral. The IPA symbol /ɰ/ is the voiced **velar** approximant (the consonant in Korean 으), which is not a known realisation of Venetian *ł*. Repetti (2000) and Maiden & Parry *Dialects of Italy* consistently describe the Venetian reflex as [w] or [ɰ~ɰ̞] only in the most conservative conservative analyses, but the standard description is [w]. The /ɰ/ transcription is a significant phonetic error.

---

### 14. `wa` — *thanks* (`mèrci`) — Walloon uses uvular /ʁ/, not alveolar flap /ɾ/

**File:** `words/thanks.js` line 761  
**Current:** `["mèrci", "mɛɾˈsi"]`  
**Expected:** `["mèrci", "mɛʁˈsi"]`

Walloon rhotic consonantism follows the same northern Gallo-Romance uvular pattern as Standard French: the rhotic is the uvular fricative or trill /ʁ/, not the alveolar tap /ɾ/ (which is an Ibero-Romance / Italian feature). The Walloon dictionaries (Remacle, Piron) and the descriptions in Bruneau *Étude phonétique des patois d'Ardenne* consistently note the uvular rhotic. Using /ɾ/ imports an alien phoneme.

---

### 15. `la` — *pater*, *māter*, *edere*, *bibere*, *salvē* — stress marks absent

**Files:** `words/father.js:510`, `words/mother.js:516`, `words/eat.js:510`, `words/drink.js:510`, `words/hello.js:510`  
**Current examples:** `["pater","pater"]`, `["edere","edere"]`, `["bibere","bibere"]`, `["salvē","salweː"]`  
**Expected:** `["pater","ˈpater"]`, `["edere","ˈedere"]`, `["bibere","ˈbibere"]`, `["salvē","ˈsalweː"]`

Classical Latin stress is rule-governed (penultimate if heavy, antepenultimate otherwise) and must be marked in IPA for polysyllables. All four of the above polysyllabic Latin entries are missing the primary-stress mark. Monosyllables *cor*, *sol*, *fēlēs* etc. require no mark, but polysyllables do. (Note: *lūna*, *ūnus*, *oculus*, *manus*, *bonus*, *grātiās* correctly carry stress marks in other entries, making the omissions in these entries an inconsistency.)

---

### 16. `sc` (Sardinian) — systematic absence of stress marks

**Files:** Multiple (e.g. `words/fire.js:514`, `words/dog.js:508`, `words/water.js:515`, `words/hand.js:508`)  
**Examples:** `["fogu","foɣu"]`, `["cane","kane"]`, `["abba","abba"]`, `["manu","manu"]`  
**Expected:** `["fogu","ˈfoɣu"]`, `["cane","ˈkane"]`, `["abba","ˈabba"]`, `["manu","ˈmanu"]`

No Sardinian entry across any of the 20 word files carries a stress mark. Sardinian (both Logudorese and Campidanese) has a stress system that is not entirely predictable and can differ from Latin inheritance in derived forms; the absence of ˈ throughout is an editorial gap affecting all polysyllabic entries. Stress placement in Sardinian is documented in Bolognesi (1998) and Jones (1993).

---

### 17. `nap` / `scn` — stress marks absent on polysyllabic entries

**Files:** Multiple Neapolitan and Sicilian entries  
**Examples:** `nap ["vevere","vevərə"]`, `nap ["àrvero","arvərə"]`, `scn ["vìviri","viviri"]`, `scn ["àrbulu","arbulu"]`  
**Expected:** `["vevere","ˈvevərə"]`, `["àrvero","ˈarvərə"]`, `["vìviri","ˈviviri"]`, `["àrbulu","ˈarbulu"]`

The orthographic forms of Neapolitan and Sicilian already carry written accent marks (àrvero, vìviri, àrbulu) showing stress placement, yet the corresponding IPA fields omit the ˈ diacritic. This is an inconsistency: the information is available in the lemma but not reflected in the phonetic transcription.

---

### 18. `pt_eu` — multiple polysyllabic entries missing stress marks

**Files:** `words/drink.js:99`, `words/fire.js:99`, `words/eat.js:99`, `words/eye.js:99`  
**Current:** `["beber","bɨbɛɾ"]`, `["fogo","foɡu"]`, `["comer","kumɛɾ"]`, `["olho","oʎu"]`  
**Expected:** `["beber","bɨˈbɛɾ"]`, `["fogo","ˈfoɡu"]`, `["comer","kuˈmɛɾ"]`, `["olho","ˈoʎu"]`

European Portuguese has both vowel reduction (unstressed /e/ → /ɨ/, unstressed /o/ → /u/) and distinctive stress placement. The reduced vowels are correctly transcribed in some entries (e.g., /bɨ-/ in "beber"), but without the stress mark the point of contrast — that /ɛ/ in the second syllable is the *stressed* open-mid vowel — is lost. The single correctly stressed entry `["água","ˈaɣwɐ"]` shows the convention exists; the remaining polysyllables should follow it.

---

### 19. `ro` — *mulțumesc* — stress mark absent

**File:** `words/thanks.js` line 167  
**Current:** `["mulțumesc", "mult͡sumesk"]`  
**Expected:** `["mulțumesc", "mult͡suˈmesk"]`

"Mulțumesc" is the first-person singular present of *a mulțumi* 'to thank'. In Romanian, this conjugated form bears stress on the final syllable: /mult͡suˈmesk/. The absence of the stress mark leaves the phonetic structure ambiguous and inconsistent with the phonological description of Romanian verb stress.

---

### 20. `ro` — *thanks* — also: affricate /t͡s/ for *mulțumesc* requires checking letter *ț*

**File:** `words/thanks.js` line 167  

A subordinate note on the same entry: Romanian orthographic *ț* = /t͡s/ (the dental affricate), so "mulțumesc" → /mult͡suˈmesk/ is phonemically accurate. However, the cluster *lt͡s* is unusual cross-linguistically; the actual phonetics are [mʊlt͡suˈmesk] with slight assimilation. This is not an error but an observation: the /t͡s/ is correctly chosen; the stress mark (issue 19) is the actionable fix.

---

### 21. `la` — *salvē* — stress mark absent on polysyllable

**File:** `words/hello.js` line 510  
**Current:** `["salvē", "salweː"]`  
**Expected:** `["salvē", "ˈsalweː"]`

"Salvē" is a two-syllable word: sal- (heavy, CVC) + -wēː (long). By the Classical Latin stress rule, stress falls on the penultimate *if* it is heavy; "sal-" is heavy and so takes the stress: /ˈsal.weː/. The omission of ˈ follows the same Latin stress-omission pattern noted in issue 15.

---

*Total issues: 21. Files sampled: all 20 `words/*.js` files. Romance codes examined: it, es, es_eu, es_mx, es_ar, es_co, es_cl, es_cu, es_pe, es_an, es_sgl, pt, pt_eu, pt_br, fr, fr_qc, fr_be, fr_ch, fr_class, fr_af, ca, oc, ro, co, wa, rm, an, ast, gl, mwl, sc, nap, scn, vec, lmo, fur, lld, la, fro, osp, it_dan.*
