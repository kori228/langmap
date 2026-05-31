# Wordmap review #23 — Classical Latin specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a specialist in Classical Latin phonology, Vulgar Latin, and Ecclesiastical Latin, with additional competence in the early history of the Romance languages as Latin's daughter tradition. My primary reference corpus for this review: W. Sidney Allen (1978) *Vox Latina: A Guide to the Pronunciation of Classical Latin* (2nd ed., Cambridge); Andrew Sihler (1995) *New Comparative Grammar of Greek and Latin* (Oxford); Michael Weiss (2009) *Outline of the Historical and Comparative Grammar of Latin* (Beech Stave Press); Charlton T. Lewis & Charles Short *A Latin Dictionary* (Oxford/Perseus); P. G. W. Glare et al. *Oxford Latin Dictionary* (2nd ed., 2012); A. Ernout & A. Meillet *Dictionnaire étymologique de la langue latine* (4th ed., Klincksieck). Secondary sources consulted: James Clackson & Geoffrey Horrocks (2007) *The Blackwell History of the Latin Language*; Harm Pinkster (2015) *Oxford Latin Syntax*.

---

## Issues found

### 1. `drink` — citation form is the infinitive, not a finite verb form
- **File:** `words/drink.js` line 510
- **Current:** `["bibere", "bibere"]`
- **Expected:** `["bibō", "ˈbi.boː"]`
- **Why:** The stated convention for verb entries in this dataset is **1sg present active indicative** (matching, e.g., Greek entries which use 1sg: `el_kath` "πίνω"). *Bibere* is the **present active infinitive**; the correct citation form is **bibō** /ˈbi.boː/ (1sg pres. act. ind.). Using the infinitive is a common Anglophone classroom habit (influenced by English dictionaries) but it is not the classical standard citation form. Latin grammar dictionaries (Lewis & Short, OLD) list verbs under the 1sg present, not the infinitive.

---

### 2. `eat` — citation form is the infinitive, not a finite verb form
- **File:** `words/eat.js` line 510
- **Current:** `["edere", "edere"]`
- **Expected:** `["edō", "ˈe.doː"]`
- **Why:** Same problem as `drink`: *edere* is the **present active infinitive** of *edō*. The 1sg present active indicative is **edō** /ˈe.doː/. The IPA transcription "edere" moreover fails to mark the quantity: the first *e* is short /e/, the second syllable has short *e* followed by /r/, and the final *e* is short — none of this is marked. The correct 1sg form also eliminates the ambiguity since *edere* is homophonous with the infinitive of *ēdere* (< *ex-dare*, "to give out"), a distinct verb.

---

### 3. `love` — citation form is the noun, not the verb
- **File:** `words/love.js` line 517
- **Current:** `["amor", "amor"]`
- **Expected:** `["amō", "ˈa.moː"]` (if verbal) or `["amor", "ˈa.mor"]` (if nominal, with stress marked)
- **Why:** The concept "love" is represented as a verb in the vast majority of other language entries in this dataset (e.g., `el_kath` "ἀγαπῶ" is 1sg verb; `ang` "lufian" is infinitive verb). If a verb is intended, the correct form is **amō** /ˈa.moː/ (1sg pres. act. ind.). If the noun *amor* (3rd decl. m.) is intended, its IPA must include stress: /ˈa.mor/. The current IPA "amor" (no stress mark) treats both syllables as unstressed, which is incorrect — Classical Latin always carries stress, here antepenultimate rule does not apply (only two syllables), so stress falls on the first syllable: /ˈa.mor/.

---

### 4. `fire` — /iŋnis/ is wrong; Classical Latin gn = /gn/, not /ŋn/
- **File:** `words/fire.js` line 516
- **Current:** `["ignis", "iŋnis"]`
- **Expected:** `["ignis", "ˈig.nis"]`
- **Why:** This is a well-known Classical Latin phonology error. Allen (1978, pp. 21–23) documents explicitly that the sequence ⟨gn⟩ in Classical Latin was pronounced /gn/ — a stop followed by a nasal — not /ŋn/ (velar nasal + nasal), which is a post-classical and Ecclesiastical reanalysis. The word *ignis* "fire" is consistently cited by Allen as /ˈig.nis/. The [ŋ] allophone of /n/ before velars (as in English "sing") is an assimilation process *within* the velar + nasal cluster that was distinct in Classical Latin: ⟨ng⟩ gave /ŋg/, but ⟨gn⟩ gave /gn/ (not the reverse). Furthermore the stress mark is missing: *ignis* is a 2-syllable word, stressed on the first: /ˈig.nis/.

---

### 5. `fire` — missing stress mark in IPA
- **File:** `words/fire.js` line 516
- **Current:** `["ignis", "iŋnis"]`
- **Expected:** `["ignis", "ˈig.nis"]`
- **Why:** Beyond the /gn/ vs /ŋn/ issue above, the IPA representation "iŋnis" carries no stress diacritic [ˈ]. Every polysyllabic Latin entry in this dataset should carry IPA stress: *ignis* is stressed on the initial syllable by the antepenultimate rule (light penult /-nis/ → stress retreats to /-ig-/).

---

### 6. `drink` — IPA "bibere" lacks stress and quantity marks
- **File:** `words/drink.js` line 510
- **Current:** `["bibere", "bibere"]`
- **Expected:** `["bibō", "ˈbi.boː"]` (corrected form)
- **Why:** Even if one accepted the infinitive as citation form, "bibere" in IPA is missing (a) any stress mark and (b) any vowel-length distinctions. The correct Classical IPA for the infinitive would be /ˈbi.be.re/ — all three syllables short, stress on the first (antepenult) — which should at minimum be /ˈbi.be.re/. The entry "bibere" is a plain romanization, not IPA.

---

### 7. `eat` — IPA "edere" lacks stress and quantity marks
- **File:** `words/eat.js` line 510
- **Current:** `["edere", "edere"]`
- **Expected:** `["edō", "ˈe.doː"]` (corrected form)
- **Why:** Same problem as `drink` above: the IPA field "edere" is an unmodified romanization. The infinitive *edere* would be /ˈe.de.re/ (all short vowels, stress antepenult). The data field is not usable as IPA.

---

### 8. `hand` — /ʊ/ in IPA is anachronistic for Classical Latin
- **File:** `words/hand.js` line 510
- **Current:** `["manus", "manʊs"]`
- **Expected:** `["manus", "ˈma.nus"]`
- **Why:** The symbol /ʊ/ (near-close near-back rounded vowel, as in English "foot") is a vowel quality distinction that does not apply to Classical Latin. Classical Latin had a **quantity** (length) opposition /u/ vs /uː/, not a quality opposition /u/ vs /ʊ/. Allen (1978, pp. 47–52) is explicit that short /u/ in Classical Latin was not lowered or laxed to [ʊ] — it remained a true close back vowel, only shorter. Using /ʊ/ imports an English phonemic category onto Latin. *Manus* /ˈma.nus/ is a 4th-declension noun; the final -us is short /u/, correctly rendered as /nus/, not /nʊs/. Stress is also missing.

---

### 9. `eye` — same /ʊ/ anachronism
- **File:** `words/eye.js` line 510
- **Current:** `["oculus", "okulʊs"]`
- **Expected:** `["oculus", "ˈo.ku.lus"]`
- **Why:** Same issue as `hand`: /ʊ/ in the final syllable imposes an English phonemic category. Classical Latin short /u/ = /u/ (short duration, not laxed quality). *Oculus* /ˈo.ku.lus/: three syllables, penult is light (-ku-), so stress falls on antepenult /ˈo-/. Note also that the syllabification mark and the mid-vowel in the penult need to be short /u/ (not /ʊ/).

---

### 10. `good` — same /ʊ/ anachronism
- **File:** `words/good.js` line 510
- **Current:** `["bonus", "bonʊs"]`
- **Expected:** `["bonus", "ˈbo.nus"]`
- **Why:** *Bonus* has short final -us; the correct IPA is /ˈbo.nus/ with plain /u/, not /ʊ/. Additionally the stress mark is absent; *bonus* is stressed on the first syllable by the same antepenult rule (light penult -nu-).

---

### 11. `one` — same /ʊ/ anachronism
- **File:** `words/one.js` line 516
- **Current:** `["ūnus", "uːnʊs"]`
- **Expected:** `["ūnus", "ˈuː.nus"]`
- **Why:** *Ūnus*: the first syllable is long /uː/ (correctly marked in the orthography and the IPA), but the final -us is again incorrectly rendered /ʊ/ instead of short /u/. The stress mark is also absent; /ˈuː.nus/ is correct (heavy penult → penultimate stress).

---

### 12. `house` — same /ʊ/ anachronism
- **File:** `words/house.js` line 517
- **Current:** `["domus", "domʊs"]`
- **Expected:** `["domus", "ˈdo.mus"]`
- **Why:** *Domus* is a 4th-declension noun; the final -us is short. /ʊ/ is again the wrong symbol. Stress: two syllables, first is heavy (-do-), so /ˈdo.mus/.

---

### 13. `fire` — stress mark absent (second notation of issue)
- **File:** `words/fire.js` line 516 (see also Issue 4–5 above)
- **Why:** Consolidated here for completeness: all five of `hand`, `eye`, `good`, `one`, `house` lack IPA stress marks. A pattern of missing stress diacritics /ˈ/ runs across nearly every Latin IPA entry.

---

### 14. `dog` — IPA /kanis/ lacks stress and syllable boundary
- **File:** `words/dog.js` line 510
- **Current:** `["canis", "kanis"]`
- **Expected:** `["canis", "ˈka.nis"]`
- **Why:** *Canis* is stressed on the first syllable (antepenult rule: penult is light, -ni- is a short open syllable). The IPA "kanis" has no stress mark. Additionally there is no phonological error in the consonants or vowels here, but the missing stress is a representational deficiency consistent across Latin entries.

---

### 15. `father` — IPA /pater/ lacks stress mark
- **File:** `words/father.js` line 510
- **Current:** `["pater", "pater"]`
- **Expected:** `["pater", "ˈpa.ter"]`
- **Why:** *Pater* is bisyllabic; by default bisyllabic Latin words are stressed on the first syllable. The IPA "pater" carries no stress. This is also inconsistent with `māter` which similarly lacks a stress mark (see Issue 16).

---

### 16. `mother` — IPA /maːter/ lacks stress mark
- **File:** `words/mother.js` line 516
- **Current:** `["māter", "maːter"]`
- **Expected:** `["māter", "ˈmaː.ter"]`
- **Why:** *Māter* /ˈmaː.ter/: the penult syllable -māː- is heavy (long vowel), so stress falls there. The IPA "maːter" is missing the stress diacritic /ˈ/ before the first syllable. The vowel length macron is correctly present in the orthographic field.

---

### 17. `tree` — IPA /arbor/ lacks stress mark
- **File:** `words/tree.js` line 510
- **Current:** `["arbor", "arbor"]`
- **Expected:** `["arbor", "ˈar.bor"]`
- **Why:** *Arbor* is bisyllabic; stressed on the first syllable. IPA "arbor" has no /ˈ/. Compare with *cor* below (Issue 18) which is monosyllabic and needs no stress mark — but *arbor* clearly requires one.

---

### 18. `heart` — IPA /kor/ is acceptable but lacks syllable dot context
- **File:** `words/heart.js` line 510
- **Current:** `["cor", "kor"]`
- **Expected:** `["cor", "kor"]` — acceptable as-is for a monosyllable
- **Why:** *Cor* /kor/ is monosyllabic; no stress mark is needed, and the transcription is correct. This entry is one of the few Latin entries without error. (No change required; noted for completeness.)

---

### 19. `thanks` — grātiās is the accusative plural, not the classical "thank you" formula; and IPA long -āːs- on -ia- is wrong
- **File:** `words/thanks.js` line 510
- **Current:** `["grātiās", "ɡraːtiaːs"]`
- **Expected:** `["grātiās", "ˈɡraː.ti.aːs"]` (stress corrected) or better `["grātias agō", "ˈɡraː.ti.as ˈa.ɡoː"]`
- **Why:** Two issues here. First, the IPA renders the second syllable -ti- as containing a long vowel in -ia-: "tiaːs" implies the /a/ before /s/ is long /aː/. In Classical Latin *grātia* (1st decl. f.), the base vowel of the stem is short in the plural form *grātiās* — the ā in grātia/grātiās is in the first syllable of *grātia-* (the ā of *grāti-*), while the accusative plural ending *-ās* carries a long /aː/. The current IPA "ɡraːtiaːs" suggests the sequence is /ɡraːt.iaːs/ as if the /i/ and /a/ merge into a single long /aː/, which is wrong: the three syllables are /ˈɡraː.ti.aːs/. Second, *grātiās* alone (accusative plural) is not the classical formula for "thanks": the conventional phrase is **grātias agō** ("I give thanks," 1sg present, literally "I drive gratitude"). Providing only *grātiās* without the verb leaves an incomplete expression. The fr_class entry "grâces" is the cognate noun, similarly incomplete.

---

### 20. `love` — amor IPA lacks stress mark (parallel to Issue 17 for arbor)
- **File:** `words/love.js` line 517
- **Current:** `["amor", "amor"]`
- **Expected:** `["amō", "ˈa.moː"]` (if verbal) or `["amor", "ˈa.mor"]` (if nominal)
- **Why:** Whether treating this as the noun *amor* or as the verb *amō*, the IPA field "amor" carries no stress diacritic. *Amor* is bisyllabic and stressed on the first syllable: /ˈa.mor/.

---

### 21. `hello` — salvē IPA /salweː/ is almost correct but missing stress; also avē should be noted as the more common salutation
- **File:** `words/hello.js` line 510
- **Current:** `["salvē", "salweː"]`
- **Expected:** `["salvē", "ˈsal.weː"]`
- **Why:** *Salvē* is the 2sg imperative of *salvēre* ("to be well"). The IPA "salweː" is phonetically reasonable — [w] for the Classical value of /v/ (Allen 1978, pp. 40–41 confirms /w/) and /eː/ for the long ē are both correct. The only deficiency is the missing stress mark. *Salvē* is bisyllabic with a heavy first syllable (/-al-/ contains a vowel + consonant cluster before the next consonant), so the penult stress rule applies: /ˈsal.weː/. Additionally, *avē* /ˈa.weː/ (also spelled *havē*) was arguably the more common casual greeting in Plautus and in military contexts (also preserved in "Ave Maria"); the choice of *salvē* is defensible but editors should note *avē* as a variant.

---

### 22. `cat` — fēlēs is acceptable Classical Latin, but the word history and alternatives deserve a note; IPA is correct
- **File:** `words/cat.js` line 510
- **Current:** `["fēlēs", "feːleːs"]`
- **Expected:** `["fēlēs", "ˈfeː.leːs"]` (stress mark missing)
- **Why:** The IPA "feːleːs" correctly marks both long vowels, and /f eː l eː s/ is phonologically accurate. The only error is the missing stress diacritic. *Fēlēs* (also spelled *fēlis*) is a 3rd-declension noun; the penult is heavy (long ē), so stress falls on the penult: /ˈfeː.leːs/. Note: *cattus/catta* is the Late Latin/Vulgar Latin form that gave all the Romance descendants (Fr. *chat*, It. *gatto*, Sp. *gato*), as seen in the `it_dan` and `fr_class` entries. The choice of *fēlēs* is appropriate for Classical Latin but the tension with the Romance data is worth flagging.

---

### 23. `sun` — sōl IPA /soːl/ is correct; no issues (comparative note)
- **File:** `words/sun.js` line 516
- **Current:** `["sōl", "soːl"]`
- **Expected:** `["sōl", "soːl"]` — correct as-is
- **Why:** *Sōl* is monosyllabic; /soːl/ correctly marks the long ō. No stress mark needed for a monosyllable. This is one of the cleanest Latin entries.

---

### 24. `moon` — lūna IPA /luːna/ lacks stress mark
- **File:** `words/moon.js` line 516
- **Current:** `["lūna", "luːna"]`
- **Expected:** `["lūna", "ˈluː.na"]`
- **Why:** *Lūna* /ˈluː.na/: the penult syllable -lū- is heavy (long vowel), so stress falls on the penult. The IPA "luːna" is missing /ˈ/. The vowel quantities themselves are correctly transcribed.

---

### 25. `water` — aqua IPA /akʷa/ is phonetically defensible but the labiovelar notation inconsistency
- **File:** `words/water.js` line 517
- **Current:** `["aqua", "akʷa"]`
- **Expected:** `["aqua", "ˈak.wa"]` or `["aqua", "ˈa.kʷa"]`
- **Why:** Two sub-issues. First, the stress mark is absent: *aqua* is bisyllabic with a light penult (-qu-a has the -a- as short, open syllable), so stress falls on the antepenult — which IS the first syllable: /ˈak.wa/ or /ˈa.kʷa/. Second, the notation /kʷ/ for Latin ⟨qu⟩ is phonologically debated. Allen (1978, pp. 18–20) treats Latin ⟨qu⟩ as a labiovelar /kʷ/, a single phoneme, which makes /ˈa.kʷa/ the preferred bracketing. The current "akʷa" — with the labiovelar /kʷ/ split across what might be read as two syllables — is ambiguous. With the stress mark and syllable dot added, /ˈa.kʷa/ is the canonical Allen representation.

---

### 26. Summary of systemic problems

| Error type | Affected entries |
|---|---|
| Citation form is infinitive instead of 1sg present | `drink` (bibere→bibō), `eat` (edere→edō) |
| Citation form is noun instead of verb | `love` (amor→amō) |
| /ʊ/ used for Classical Latin short /u/ | `hand`, `eye`, `good`, `one`, `house` |
| /ŋn/ used for Classical Latin /gn/ | `fire` |
| Stress mark /ˈ/ absent | virtually all polysyllabic entries |
| IPA identical to romanization (no phonological content) | `drink` (bibere), `eat` (edere) |
| Incomplete expression given | `thanks` (grātiās without agō) |
| IPA vowel length error in multi-syllable sequence | `thanks` (tiaːs syllabification) |
