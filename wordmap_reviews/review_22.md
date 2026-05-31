# Wordmap review #22 — Historical English specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a specialist in the diachronic phonology and morphology of English from its earliest attested forms through the Early Modern period. My primary references are Hogg (1992) *Cambridge History of the English Language* vol. 1 (Old English); Lass (1992) and (1999) in the same series (Middle English and Early Modern English respectively); Mitchell & Robinson (2012) *A Guide to Old English* (8th ed.); Burnley (1992) *The Language of Chaucer*; Crystal (2016) *The Oxford Dictionary of Original Shakespearean Pronunciation*; the *Bosworth-Toller Anglo-Saxon Dictionary*; the *Middle English Dictionary* (MED); and the *Oxford English Dictionary* (OED). I also draw on Mossé (1952) *A Handbook of Middle English* and Dobson (1968) *English Pronunciation 1500–1700* for phonological detail.

---

## Issues

### Issue 1 — `thanks.js` ang IPA: /θɑntsiɑn/ is impossible for Old English

**File:** `words/thanks.js` line 516  
**Current:** `ang: ["þancian", "θɑntsiɑn"]`  
**Problem:** The IPA transcription /θɑntsiɑn/ introduces an affricate /ts/ that has no basis in Old English phonology. The OE verb *þancian* 'to thank' contains ‹c› intervocalically following a front environment, but here the preceding vowel is /a/ (back), so the ‹c› is velar /k/, not palatalised to /tʃ/ and certainly not to /ts/. The /ts/ sequence does not belong to the OE consonant inventory at all. Correct IPA: /ˈθɑnkiɑn/.  
**Reference:** Mitchell & Robinson (2012) §2 on OE consonant values; Hogg (1992) §7.4 on OE palatalisation (requires front vowel context).

---

### Issue 2 — `thanks.js` ang: wrong word class / wrong lemma for 'thanks'

**File:** `words/thanks.js` line 516  
**Current:** `ang: ["þancian", "θɑntsiɑn"]`  
**Problem:** *þancian* is the **verb** 'to thank', i.e. the infinitive. The semantic slot is 'thanks' (the noun / exclamation). The appropriate OE lemma for 'thanks / gratitude' is the noun *þanc* (masc. a-stem, nom. sg.) or its plural *þancas*. The verb infinitive *þancian* (-ian class 2 weak verb) belongs in a 'thank (v.)' entry, not a 'thanks' entry. Parallel entries for Old Norse *þǫkk*, Gothic *þagks* all use the noun.  
**Reference:** Bosworth-Toller s.v. *þanc*; Mitchell & Robinson (2012) §8 (weak verbs class 2).

---

### Issue 3 — `water.js` ang IPA: /wæter/ has no stress, no vowel quantity marking

**File:** `words/water.js` line 523  
**Current:** `ang: ["wæter", "wæter"]`  
**Problem:** The IPA transcription is identical to the orthographic form, with no stress mark and no explicit vowel quality on the second syllable. OE *wæter* has primary stress on the first syllable: /ˈwæter/. More significantly, the second vowel ‹e› should be transcribed as short /e/: /ˈwætər/ (with schwa) is a ME/modern convention; for OE the unstressed second syllable ‹er› retains a distinct short vowel, not schwa: /ˈwæter/. The stress diacritic is missing entirely. Inconsistent with all other OE entries in the same dataset (e.g. `goh: ["wazzar", "ˈwatsːar"]` has stress).  
**Reference:** Hogg (1992) §2.1 (OE stress); Mitchell & Robinson (2012) §1 on IPA conventions.

---

### Issue 4 — `water.js` en_em IPA: /ˈwætər/ is incorrect for Early Modern English

**File:** `words/water.js` line 522  
**Current:** `en_em: ["water", "ˈwætər"]`  
**Problem:** The transcription /ˈwætər/ reflects a modern RP or American vowel quality. In Early Modern English (c. 1590–1650), *water* was pronounced with a rounded back vowel /ɔː/ (or an open /ɑː/) before /t/, not the front /æ/. The lengthening and retraction of /a/ before /w/ + /C/ was in progress during the EME period, heading toward the modern /wɔːtər/. Dobson (1968) §§64–65 documents the lowering and rounding before /w/. Crystal (2016) reconstructs Shakespeare's *water* as approximately /ˈwɒtər/ ~ /ˈwɔːtər/. The current form /ˈwætər/ is an anachronism reflecting a later RP form (post-1700).  
**Reference:** Dobson (1968) §§64–65; Lass (1999) §3.1.3 (vowels before /w/).

---

### Issue 5 — `father.js` ang IPA: /fæder/ has no stress marker (same pattern as water)

**File:** `words/father.js` line 516  
**Current:** `ang: ["fæder", "fæder"]`  
**Problem:** IPA transcription is identical to the spelling with zero stress marking. OE initial-stress rule requires /ˈfæder/. Furthermore the ‹e› in the second syllable should be marked as a (short) /e/, and the final ‹r› in OE was a trill or tap [r], which could be marked /r/ or /ɾ/. Contrast with entries for other languages in the same block that all carry stress marks (e.g. `goh: ["fater", "ˈfatɛr"]`).  
**Reference:** Hogg (1992) §2.1; Mitchell & Robinson (2012) Introduction.

---

### Issue 6 — `father.js` en_em IPA: /ˈfɑːðər/ — /ɑː/ is post-GVS but the second vowel /ð/ is correct; however the R must be audible (rhotic)

**File:** `words/father.js` line 515  
**Current:** `en_em: ["father", "ˈfɑːðər"]`  
**Problem:** EME was fully rhotic: the ‹r› in *father* was pronounced as a full rhotic approximant or trill, not as the vocalic schwa-R of modern non-rhotic accents. The IPA /ər/ is the modern non-rhotic convention. For EME the correct representation should make the rhotic explicit: /ˈfɑːðər/ with a note that /r/ is tapped/trilled, or more precisely /ˈfaːðɚ/ with a rhotic vowel, or the transcription should use /ˈfɑːðɹ/ or /ˈfɑːðər/ with the understanding that /r/ is realised. Also, the vowel /ɑː/ in *father* is arguably already fully backed/lengthened by EME — this part is defensible, though Crystal (2016) reconstructs it as /ˈfaːðer/ with a lower front/central onset. The non-rhotic schwa-R notation is the main error.  
**Reference:** Lass (1999) §4.5 (rhoticity in EME); Crystal (2016) s.v. *father*.

---

### Issue 7 — `fire.js` enm: *fyr* is the OE/early ME form; Chaucerian ME form should be *fir* or *fuir*

**File:** `words/fire.js` line 520  
**Current:** `enm: ["fyr", "fyːr"]`  
**Problem:** The Chaucerian Middle English form of 'fire' is **not** *fyr* (that is the Old English form, also used in early ME). By Chaucer's time (late 14th century) the standard Late ME form was *fir* or *fyr* (dialectally), and the MED attests *fir*, *fyr*, *fuir*, *fire*. The IPA /fyːr/ preserves the OE rounded vowel /yː/; however, by Chaucer's ME the OE /yː/ had already unrounded to /iː/ in the East Midland dialect (Chaucer's own dialect): the ME pronunciation would be /fiːr/. Citing *fyr* with /fyːr/ effectively re-labels an OE phonology as ME. The rounded /yː/ was retained in Northern and Scottish dialects but not in Chaucer's London English.  
**Reference:** Lass (1992) §1.6.2 on unrounding of OE /yː/→ME /iː/ in East Midland; MED s.v. *fyr*, *fir*.

---

### Issue 8 — `fire.js` en_em: /fəir/ — the EME reflex of ME /iː/ via GVS should be /əɪ/ → /ʌɪ/ not /fəir/

**File:** `words/fire.js` line 521  
**Current:** `en_em: ["fyre", "fəir"]`  
**Problem:** The IPA /fəir/ transcribes the vowel with schwa onset /ə/ + /i/ + /r/. In Early Modern English the Great Vowel Shift raised ME /iː/ (in *fir*/*fire*) to a diphthong. The standard EME reconstruction for the reflexes of ME /iː/ is /əɪ/ or /ʌɪ/ (mid-central + high front), not /fəir/ which looks like a sequence of three segments with the /r/ phonemically integrated into the nucleus. Crystal (2016) reconstructs *fire* for Shakespeare as /fʌɪr/ (with audible rhotic). The notation /fəir/ is non-standard and potentially misleading; the vowel onset should be /ʌ/ not /ə/.  
**Reference:** Lass (1999) §2.2.1 (GVS); Crystal (2016) s.v. *fire*; Dobson (1968) §§138–139.

---

### Issue 9 — `house.js` en_em IPA: /huːs/ — EME post-GVS reflex of OE/ME /uː/ should be diphthong /ʌu/ ~ /əu/

**File:** `words/house.js` line 522  
**Current:** `en_em: ["house", "huːs"]`  
**Problem:** The Great Vowel Shift moved ME /uː/ (in *hous*) to the diphthong /ʌʊ/ ~ /əʊ/ ~ /au/ during the EME period. Retaining /huːs/ for Early Modern English is incorrect; it represents the ME or even OE stage. By Shakespeare's time *house* was pronounced approximately /hʌʊs/ or /həʊs/. Crystal (2016) reconstructs it as /hʌus/. The IPA /huːs/ would be the form for ME (which is correctly given as `enm: ["hous", "huːs"]`), not EME.  
**Reference:** Lass (1999) §2.2.1 (GVS, /uː/→/ʌʊ/); Crystal (2016) s.v. *house*; Dobson (1968) §§157–160.

---

### Issue 10 — `moon.js` en_em: /muːn/ — GVS should give diphthong, not pure long vowel

**File:** `words/moon.js` line 521  
**Current:** `en_em: ["moone", "muːn"]`  
**Problem:** OE *mōna* / ME *mone* /moːnə/ had its vowel raised by the GVS to /muːn/ in ME and then further diphthongised in EME. However, *moon* is a GVS Class 1 (ME /oː/→EME /uː/) word, meaning that at the EME stage the reflex is indeed /uː/ (this shift happened earlier than the /uː/→diphthong shift). So the EME form /muːn/ is defensible for the earliest EME. The deeper problem is the graphic spelling "moone" which is a ME spelling convention retained as an archaism — it is appropriate for the citation form. This item is a borderline case rather than a clear error, but should be flagged: the vowel /uː/ in EME *moon* is a completed GVS product and is correctly /muːn/. **No correction required** — flagged for completeness.  
**Reference:** Lass (1999) §2.2.1 (ME /oː/→EME /uː/); Dobson (1968) §§100–103.

---

### Issue 11 — `one.js` en_em: /oːn/ — EME pronunciation of *one* was NOT /oːn/

**File:** `words/one.js` line 521  
**Current:** `en_em: ["one", "oːn"]`  
**Problem:** The word *one* in Early Modern English was pronounced /wʌn/ (with initial /w/ and the STRUT vowel), not /oːn/. The form /oːn/ is the Chaucerian ME pronunciation. The dramatic shift whereby ME *oon* /oːn/ acquired an initial /w/ glide and changed its vowel to /ʌ/ occurred during the 15th–16th centuries, and by Shakespeare's time the pronunciation was unambiguously /wʌn/. Crystal (2016) gives Shakespeare's *one* as /wʌn/. Retaining /oːn/ for the EME entry perpetuates the ME phonology for the wrong period. This is a significant error.  
**Reference:** Lass (1999) §3.1.4 (*one* exceptionalism); Crystal (2016) s.v. *one*; OED s.v. *one*, pronunciation history.

---

### Issue 12 — `drink.js` enm: /drɪŋkən/ — short /ɪ/ for ME *drinken* is wrong; should be /iː/ or /ɪː/

**File:** `words/drink.js` line 514  
**Current:** `enm: ["drinken", "drɪŋkən"]`  
**Problem:** The MED attests Middle English *drinken* (strong verb class III) with the vowel of the infinitive from OE *drincan* (Class III strong verb), which has a short /i/ in the infinitive. However, ME /ɪ/ as a phoneme symbol in a Middle English context should be /i/ (short). Using /ɪ/ (a modern lax vowel symbol) imports a post-ME distinction. In standard ME transcription conventions (as in Lass 1992), the short high front vowel of ME is written /i/, not /ɪ/. The use of /ɪ/ here is an anachronism. Correct: /ˈdrinkən/.  
**Reference:** Lass (1992) §1.4 on ME vowel inventory conventions; Mossé (1952) §§13–14.

---

### Issue 13 — `drink.js` ang: /drinkɑn/ — OE *drincan* has palatal /k/ before nasal, not /nk/ cluster followed by /ɑ/

**File:** `words/drink.js` line 516  
**Current:** `ang: ["drincan", "drinkɑn"]`  
**Problem:** OE *drincan* is a Class III strong verb. The ‹c› in *drincan* before ‹a› (back vowel context of the infinitive ending) is the velar /k/. The IPA /drinkɑn/ is actually reasonable for OE — the sequence /nk/ + /ɑn/ is correct. However, the stress marker is missing: /ˈdrinkɑn/. Additionally, in OE the infinitive ending *-an* has a short vowel /ɑ/, which is correctly shown as /ɑ/ here, but conventionally the syllable should be /ɑn/ with no stress. The form is phonologically defensible but lacks the initial stress mark present on all comparable entries (goh, osx, etc.).  
**Reference:** Hogg (1992) §2.1 (stress); Mitchell & Robinson (2012) §§18–19 (strong verbs).

---

### Issue 14 — `heart.js` ang: /heorte/ — no stress, and the diphthong eo needs IPA treatment

**File:** `words/heart.js` line 516  
**Current:** `ang: ["heorte", "heorte"]`  
**Problem:** The OE diphthong ‹eo› in *heorte* represents the short diphthong /eo/ (as in Hogg's notation). Writing /heorte/ is simply repeating the orthography as IPA. The IPA transcription should be /ˈheorte/ at minimum (stress marker required), and ideally the diphthong should be represented in IPA notation. The OE short diphthong /eo/ can be transcribed /eo̯/ or /e͡o/ to distinguish it from a vowel + glide sequence. As with *wæter* and *fæder*, the absence of a stress marker is inconsistent with all the Germanic sibling entries.  
**Reference:** Hogg (1992) §5.3 (OE diphthongs); Mitchell & Robinson (2012) §1.

---

### Issue 15 — `eye.js` ang: /eːɑɣe/ — transcription of OE *ēage* is problematic

**File:** `words/eye.js` line 516  
**Current:** `ang: ["ēage", "eːɑɣe"]`  
**Problem:** OE *ēage* (neut. a-stem, nom./acc. sg.) is transcribed /eːɑɣe/. The long vowel ‹ē› is correctly /eː/. The ‹a› after it represents the second element of the long diphthong *ēa* /eːɑ/ (which is indeed how the long diphthong is often analysed). However, the IPA /eːɑɣe/ treats ‹ēa› as a sequence /eːɑ/ rather than the long diphthong /eːɑ̯/ — which is fine analytically, but then the final ‹e› of *ēage* is left dangling at the end. OE *ēage* has the structure /eːɑ-ge/ where ‹g› between vowels is the palatal fricative [j] or [ɣ] (depending on analysis). The final ‹e› is the nom. sg. ending of neuter a-stems. So /eːɑɣe/ accounts for all four segments but the stress marker is absent: correct to /ˈeːɑɣe/. The voiced velar fricative /ɣ/ for intervocalic ‹g› is a legitimate reading in West Saxon.  
**Reference:** Hogg (1992) §§5.6, 7.7; Mitchell & Robinson (2012) §2.

---

### Issue 16 — `sun.js` enm: *sonne* /sɔnːə/ — ME vowel should be /ʊ/ or /u/, not /ɔ/

**File:** `words/sun.js` line 520  
**Current:** `enm: ["sonne", "sɔnːə"]`  
**Problem:** ME *sonne* derives from OE *sunne* with OE /u/ (short). In Middle English the short /u/ before a nasal in an open syllable was raised or retained as /ʊ/. The Chaucerian East Midland form has /ʊ/ not /ɔ/. The /ɔ/ vowel in Chaucer's ME represents the reflex of OE /o/ or lengthened forms, not OE /u/. ME *sonne* = /ˈsunə/ or /ˈsʊnə/, not /sɔnːə/. The /ɔ/ quality is a Southern/Southwestern dialectal feature not characteristic of the standard ME citation form. MED s.v. *sunne* (sun n.) gives no /ɔ/ variant for this item.  
**Reference:** Lass (1992) §1.6.1; MED s.v. *sunne*; Burnley (1992) §§2.1–2.2 on Chaucerian vowels.

---

### Issue 17 — `sun.js` en_em: *sunne* /sʊn/ — the spelling *sunne* is ME, not EME; should be *sun*

**File:** `words/sun.js` line 521  
**Current:** `en_em: ["sunne", "sʊn"]`  
**Problem:** The citation form *sunne* (with final ‹-ne›) is a Middle English spelling. By the Early Modern English period the standard spelling had regularised to *sun* (OED s.v. *sun*, first *sun* spellings predominate from 1500 onward). The IPA /sʊn/ is defensible for the EME vowel quality (short /ʊ/ in the foot), but attaching it to the spelling *sunne* creates a mismatch: the spelling belongs to the ME entry while the IPA belongs to EME. The citation form for the EME entry should be *sun*.  
**Reference:** OED s.v. *sun* (spelling history); Lass (1999) §1.2 on EME orthographic regularisation.

---

### Issue 18 — `hello.js` enm: *hail* /hɛːl/ — ME greeting *hail* has /ai/ diphthong, not /ɛː/ monophthong

**File:** `words/hello.js` line 514  
**Current:** `enm: ["hail", "hɛːl"]`  
**Problem:** ME *hail* / *heil* (from ON *heill*) has the ME diphthong /ai/ or /ei/, not the long monophthong /ɛː/. The MED s.v. *heil* (interj.) attests the form consistently with ‹ei›/‹ai› spelling, indicating a diphthong. ME /ɛː/ is the reflex of OE ‹ǣ›, not of an ON diphthong. Transcribing *hail* as /hɛːl/ conflates the ME reflex of OE /æː/ (open ē, written ‹ē›/‹ǣ›) with the diphthong from ON /ei/. Correct IPA for ME *hail*: /hail/ or /hɛil/, not /hɛːl/.  
**Reference:** Lass (1992) §1.7 (ME diphthongs from ON); MED s.v. *heil*.

---

### Issue 19 — `tree.js` ang: /treoːw/ — the diphthong sequence is non-standard

**File:** `words/tree.js` line 516  
**Current:** `ang: ["trēow", "treoːw"]`  
**Problem:** OE *trēow* (neut., 'tree/wood') has the long diphthong *ēo* /eːo/ (or /eo̯ː/). The transcription /treoːw/ places the length marker after the /o/, suggesting the long vowel is on the /o/ component: /treoːw/. By conventional analysis (Hogg 1992; Campbell 1959), the OE long diphthong *ēo* has primary length on the first element /eː/ plus a short glide to /o/: /ˈtreow/ or /ˈtreːow/, not /treoːw/ which implies a long /oː/ nucleus with a short /e/ onset. The length placement is inverted. Additionally, the /w/ coda is correct (from the OE neuter nom./acc. *-ow* ending).  
**Reference:** Hogg (1992) §5.6 on long diphthongs; Campbell (1959) *Old English Grammar* §§40–42.

---

### Issue 20 — `love.js` ang: *lufian* /luviɑn/ — intervocalic ‹f› in OE should be /v/ (correct), but stress marker absent

**File:** `words/love.js` line 523  
**Current:** `ang: ["lufian", "luviɑn"]`  
**Problem:** The voicing of /f/ to /v/ intervocalically in OE *lufian* is correctly shown as /v/ in /luviɑn/ — this is phonologically accurate (OE *f* = /v/ between voiced segments). However, the primary stress marker is absent: it should be /ˈluviɑn/. This continues the same pattern seen in *wæter*, *fæder*, and *heorte*. The OE infinitive ending *-ian* (class 2 weak) should carry /iɑn/ (two syllables), which is correct in /luviɑn/ — the vowel quality is appropriate.  
**Reference:** Hogg (1992) §7.3.1 (OE /f/~/v/ allophony); §2.1 (stress).

---

### Issue 21 — `good.js` en_em: /ɡʊːd/ — the length mark on /ʊ/ is non-standard for EME

**File:** `words/good.js` line 515  
**Current:** `en_em: ["good", "ɡʊːd"]`  
**Problem:** In EME phonological descriptions, the vowel of *good* is standardly described as having undergone the GVS raising from ME /oː/ → EME /uː/. Crystal (2016) transcribes Shakespeare's *good* as /ɡuːd/. The symbol /ʊː/ (lax + long) is a theoretically awkward combination: by the IPA tense/lax convention, /ʊ/ is inherently a short/lax vowel. Using /ʊː/ (long lax) is non-standard and mixes two orthogonal features. The correct symbol for the long high back vowel is /uː/. If the intent is to show that by EME the vowel had not yet fully reached the high position and was still somewhat mid-high, a more precise transcription would use /ʏː/ or note that it was in transition, but the conventional symbol is /uː/.  
**Reference:** Lass (1999) §2.2.1; Crystal (2016) s.v. *good*; IPA chart conventions.

---

### Issue 22 — `thanks.js` enm: *gramercy* /ɡraːmɛrsiː/ — long final vowel /iː/ is unlikely for ME

**File:** `words/thanks.js` line 514  
**Current:** `enm: ["gramercy", "ɡraːmɛrsiː"]`  
**Problem:** ME *gramercy* (from Old French *grant merci*) ends in *-ci* / *-cy*. The final vowel in ME was short /i/, not the long /iː/. Long /iː/ in word-final position without a following consonant is unusual for ME content words borrowed from French — the French final /i/ was typically short. The MED s.v. *gramerci* does not indicate a long final vowel. The transcription /ɡraːmɛrsiː/ also places a long /aː/ on the first syllable ‹gra-›; ME *gra-* (from French *grant*) would have short /a/ in this unstressed–secondary stress environment, or at most a half-long vowel. Both length marks are questionable.  
**Reference:** MED s.v. *gramerci*; Lass (1992) §1.5 (French loans in ME); Burnley (1992) §3 on French-derived vocabulary.

---

### Issue 23 — `eat.js` en_em: *eate* — the spelling is anomalous for EME

**File:** `words/eat.js` line 515  
**Current:** `en_em: ["eate", "eːt"]`  
**Problem:** The Early Modern English spelling of the verb 'to eat' was *eat* (OED s.v. *eat*, lemma form from c. 1500). The form *eate* with final ‹e› is a Chaucerian or early ME spelling convention, not the standard EME form. EME standardisation led to *eat* (without final ‹e›) as the prevailing form by 1550–1600. Attaching the EME IPA /eːt/ to the spelling *eate* creates an inconsistency: the spelling looks like ME, the phonology is given as EME. Furthermore, the IPA /eːt/ implies a pure long vowel; Crystal (2016) gives Shakespeare's *eat* as /iːt/ (the GVS raising of ME /eː/ to /iː/ was complete in most environments by 1600), making /eːt/ yet another GVS staging error — it represents the ME vowel, not the fully-shifted EME vowel.  
**Reference:** OED s.v. *eat* (forms list); Crystal (2016) s.v. *eat*; Lass (1999) §2.2.1 (ME /eː/ → EME /iː/ via GVS).

---

### Issue 24 — `mother.js` en_em: /ˈmʊðər/ — non-rhotic transcription for a rhotic period; also vowel quality

**File:** `words/mother.js` line 521  
**Current:** `en_em: ["mother", "ˈmʊðər"]`  
**Problem:** As noted for *father* (Issue 6), the non-rhotic /ər/ notation is inappropriate for EME, which was fully rhotic. Beyond the rhoticity issue, the vowel /ʊ/ for *mother* in EME is the short high back vowel. Crystal (2016) reconstructs *mother* as /ˈmʌðer/ with the STRUT vowel /ʌ/ rather than /ʊ/. The OE *mōdor* > ME *moder* had the ME /oː/ in the first syllable, which in EME underwent a shortening + lowering in this environment, giving approximately /ʌ/ rather than /ʊ/. The distinction between /ʌ/ and /ʊ/ was being established in EME (the STRUT-FOOT split), making this a subtle but important issue.  
**Reference:** Crystal (2016) s.v. *mother*; Lass (1999) §2.2.3 (FOOT-STRUT split); Dobson (1968) §§61–63.

---

### Issue 25 — `hello.js` ang: *wes hāl* — the form is an imperative phrase; IPA lacks stress

**File:** `words/hello.js` line 516  
**Current:** `ang: ["wes hāl", "wes haːl"]`  
**Problem:** OE *wes hāl* is the standard West Saxon greeting, literally 'be (thou) whole/well'. The IPA /wes haːl/ is reasonable but lacks stress markers. *wes* (2sg. imperative of *wesan*) would carry primary stress as the main verbal element: /ˈwes ˈhaːl/ (both words stressed in a two-word phrase) or /ˈwes hɑːl/. The vowel of *wes* is a short /e/ which is correctly unmarked. The long /aː/ of *hāl* is correctly marked. The only issue is the absence of stress markers — a pattern found across all OE entries.  
**Reference:** Mitchell & Robinson (2012) §§8, 14; Hogg (1992) §2.1.

---

### Summary of most critical issues

| # | File | Layer | Error type | Severity |
|---|------|-------|-----------|----------|
| 1 | thanks.js | ang IPA | Impossible /ts/ affricate in OE | High |
| 2 | thanks.js | ang lemma | Verb infinitive used for noun/exclamation slot | High |
| 4 | water.js | en_em IPA | Modern /æ/ instead of EME /ɔː/ | High |
| 7 | fire.js | enm IPA | OE rounded /fyːr/ retained instead of ME unrounded /fiːr/ | High |
| 9 | house.js | en_em IPA | GVS diphthongisation ignored; /huːs/ = ME not EME | High |
| 11 | one.js | en_em IPA | ME /oːn/ given for EME which was /wʌn/ | High |
| 16 | sun.js | enm IPA | /ɔ/ for vowel from OE /u/ is dialectally wrong for standard ME | High |
| 23 | eat.js | en_em | Spelling *eate* is ME; IPA /eːt/ is pre-GVS (also ME) | High |
| 8 | fire.js | en_em IPA | /fəir/ non-standard; should be /fʌɪr/ or /faɪr/ | Medium |
| 18 | hello.js | enm IPA | Diphthong /ai/ wrongly monophthongised to /ɛː/ | Medium |
