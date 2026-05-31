# Wordmap review #43 — Tibeto-Burman NE India specialist

## Reviewer self-introduction

My expertise covers the Tibeto-Burman languages of Northeast India and Myanmar, with particular depth in the Kuki-Chin, Naga, Bodo-Garo, Tani, and Kiranti families. Core references informing this review: Bareh (1985) *Encyclopedia of North-East India*; Burling (2003) "The Tibeto-Burman Languages of Northeast India" in Thurgood & LaPolla (eds.) *The Sino-Tibetan Languages*; van Driem (2001) *Languages of the Himalayas* (Brill); Marrison (1967) "The Classification of the Naga Languages of Northeast India"; Chelliah (1997) *A Grammar of Meithei* (Mouton de Gruyter); Coupe (2007) *A Grammar of Mongsen Ao* (Mouton de Gruyter); LaPolla & Huang (2003) *A Grammar of Qiang*; Grierson (1903–1928) *Linguistic Survey of India* Vol. III (TB families); Jacquesson (2008) on Bodo-Garo; Post (2007, 2015) on Tani group (Adi, Galo, Apatani, Nyishi); van Driem (1987) *A Grammar of Limbu* (Mouton de Gruyter).

Languages present in the dataset within my scope: `lus` (Mizo/Lushai), `cnh` (Hakha Chin/Hakha Lai), `aoz` (Ao Naga/Chungli), `mni` (Manipuri/Meitei), `brx` (Bodo), `grt` (Garo), `adi` (Adi), `lif` (Limbu — Kiranti, adjacent area). Notable absences: `ctd` (Tedim Chin), `cfm` (Falam Chin), `lep` (Lepcha), `mjw` (Karbi/Mikir), `apt` (Apatani), `njz` (Nyishi) — none represented in the current word files.

---

## Issues found

### 1. `lus` — systematic: IPA lacks all tonal markers across all 20 entries
- **Files:** all `words/*.js`
- **Current:** every `lus:` IPA field has bare segmental transcription with no suprasegmental content
- **Expected:** each IPA form should carry tone diacritics or IPA tone letters (˥˦˧˨˩)
- **Why:** Mizo/Lushai is a four-tone language. In the standard Mizo orthographic system, tones are encoded orthographically: an unmarked syllable = high level tone (Tone 1); final `-a` = low/falling (Tone 3); final `-h` = falling/checked low (Tone 4); a glottal stop coda = Tone 2. None of the IPA transcriptions reflect this. Per Chhangte (1993) and Burling (2003), the IPA form for `tui` (water, high tone) should be at minimum `/tui˦/`; `ni` (sun, high) = `/ni˦/`; `mei` (fire, high) = `/mei˦/`; `ei` (eat) and `in` (drink/house) each carry a specific tone. The current IPA entries are phonologically inert for a language whose tone contrasts are lexically distinctive.

---

### 2. `lus` — love — orthographic `-h` tone marker silently dropped from IPA
- **File:** `words/love.js` line 715
- **Current:** `["hmangaih", "hmaŋai"]`
- **Expected:** `["hmangaih", "hmaŋai˩"]` (low/falling tone) or `["hmangaih", "hmaŋaiʔ"]` if analysed as checked
- **Why:** In Mizo orthography, final `-h` is not a pronounced consonant: it marks low falling tone (Tone 4) on the syllable. The IPA transcription `hmaŋai` silently deletes this marker without substituting any tonal diacritic or IPA tone letter. The omission is doubly problematic: (a) it makes the IPA form phonologically incomplete, and (b) it creates the false impression that `hmangaih` and an uninflected `hmaŋai` are identical, when the final `-h` changes the word's prosodic identity. This issue is latent in all Mizo entries (see Issue 1) but is most visible here because the orthographic `-h` is present yet unaccounted for in the IPA.

---

### 3. `lus` / `cnh` — good — non-standard retroflex diacritic in orthographic field
- **Files:** `words/good.js` line 708 (lus), line 975 (cnh)
- **Current:** `["ṭha", "tʰa"]` for both Mizo and Hakha Chin
- **Expected:** `["tha", "tʰa"]`
- **Why:** The display form `ṭha` uses U+1E6D LATIN SMALL LETTER T WITH DOT BELOW, the standard Indological notation for a retroflex stop. Neither Mizo/Lushai nor Hakha Lai (Hakha Chin) uses retroflex consonants, and neither language's standard romanisation employs dot-below diacritics. The word for 'good' in Mizo is orthographically `tha` (plain digraph `th` = aspirated alveolar stop, IPA /tʰ/). The same applies to Hakha Lai. The dot-below notation is borrowed from Sanskrit/Hindi romanization conventions where it has a completely different phonetic meaning. Both entries should display `tha`, not `ṭha`.

---

### 4. `cnh` — systematic: IPA lacks all tonal markers across all 20 entries
- **Files:** all `words/*.js`
- **Current:** every `cnh:` IPA field has bare segmental transcription
- **Expected:** Hakha Lai tone contrasts must be marked in IPA
- **Why:** Hakha Chin (Hakha Lai) has three lexical tones, conventionally marked in the Hakha Lai Written Standard through orthographic conventions (including gemination of final consonants to indicate tone class). The IPA fields carry no tonal content whatsoever. Per Marrison (1967) and Burling (2003), Hakha Lai tone is phonemically contrastive. Entries like `ti` (water), `ni` (sun), `thla` (moon) differ from potentially homophonous forms only by tone; the IPA as transcribed cannot distinguish them.

---

### 5. `cnh` — house — IPA copies orthographic geminate `inn` verbatim
- **File:** `words/house.js` line 982
- **Current:** `["inn", "inn"]`
- **Expected:** `["inn", "in"]` (with appropriate tone diacritic once tone is added)
- **Why:** In the Hakha Lai Written Standard, double final consonants (e.g. `nn`, `ll`) are a tone-marking convention, not a phonological geminate. The word for 'house' is phonemically /in/ (a single final nasal). The IPA field `inn` incorrectly represents this as a geminate nasal or an unusually long consonant. IPA `nn` means a geminate (lengthened) nasal, which is phonetically wrong; the correct IPA is `/in/` (with tone if tone system is implemented). This is the only `cnh` entry where the orthographic tone-marking convention leaks directly into the IPA field.

---

### 6. `brx` — hello — Hindi loanword used instead of native Bodo greeting
- **File:** `words/hello.js` line 703
- **Current:** `["खुशी", "kʰuʃi"]`
- **Expected:** a native Bodo greeting expression, e.g. `["बिनोइ बिबार", "binoi bibar"]` or similar
- **Why:** `खुशी` (khushi) is a Persian-origin word widely used in Hindi/Urdu meaning 'happiness' or 'pleasure'. It is used in a greeting function in Bodo contact speech ('I am pleased/happy [to see you]'), but it is not a native Bodo lexical item. Bareh (1985) and all documentary sources on Bodo list native greeting expressions that do not involve this borrowing. For a language map representing Bodo as a distinct TB language, using the pan-South-Asian loanword `खुशी` in the greeting slot misrepresents the language's own greeting conventions.

---

### 7. `grt` — hello — Sanskrit/Hindi `namaste` given for Garo greeting
- **File:** `words/hello.js` line 1074
- **Current:** `["namaste", "namaste"]`
- **Expected:** a native Garo greeting, e.g. a form of `na·angjok` or `solaage` or similar
- **Why:** `namaste` is a Sanskrit-origin pan-Indian greeting with no roots in the Bodo-Garo family. Garo (a Bodo-Garo language of the Tibeto-Burman branch) has its own greeting conventions documented in Joseph & Burling (2006) *The Tibeto-Burman Languages of Northeast India*. Using `namaste` is equivalent to listing 'hello' under English for French — it is a contact-language choice that erases the native greeting system.

---

### 8. `grt` — glottal stop `·` inconsistently rendered in IPA across entries
- **Files:** multiple `words/*.js`
- **Current:** `eat.js` `["cha·a", "tʃaʔa"]`; `fire.js` `["wa·al", "waʔal"]` (· → ʔ); but `drink.js` `["ring·a", "riŋa"]`; `heart.js` `["ja·rik", "dʒarik"]`; `moon.js` `["ja·tong", "dʒatoŋ"]`; `water.js` `["chi·", "tʃi"]` (· → silent)
- **Expected:** consistent treatment — either the `·` always maps to `ʔ` in IPA, or it is consistently omitted everywhere
- **Why:** The `·` separator in the Garo romanised display forms appears in six entries and is handled two different ways: as a glottal stop `/ʔ/` in two entries (eat, fire) and as a null segment in four others (drink, heart, moon, water). In Garo morphophonology, the mid-dot typically marks a morpheme boundary, not a glottal stop (Joseph & Burling 2006). If the `·` is being used as a morpheme-boundary marker, it should not surface as `ʔ` in any IPA transcription. If it does represent a glottal stop, it must be transcribed as `ʔ` consistently. The current split is an inconsistency error.

---

### 9. `adi` — tree and mother share identical form `ane`
- **Files:** `words/tree.js` line 704, `words/mother.js` line 710
- **Current (tree):** `["ane", "ane"]`; **Current (mother):** `["ane", "ane"]`
- **Expected (tree):** `["um", "um"]` or `["po", "po"]` per Post (2007) on Adi
- **Why:** In Adi (a Tani-branch language), 'mother' is `ane` (attested in numerous Tani languages including Apatani, Galo, Nyishi — cognate with Proto-Tani *a-ne*). 'Tree' in Adi is `um` or `porom`, not `ane`. The two entries share the identical string `["ane", "ane"]`, which is almost certainly a data-entry error — the mother form has been duplicated into the tree slot. Post (2015) *A Reference Grammar of Galo* and related Tani documentation gives no support for `ane` as 'tree'.

---

### 10. `adi` — sun — IPA `/ɲ/` questionable for Tani `donyi`
- **File:** `words/sun.js` line 710
- **Current:** `["donyi", "doɲi"]`
- **Expected:** `["donyi", "donzi"]` or `["donyi", "doɲi"]` (see note)
- **Why:** `Donyi` (or `Doŋyi`) is the Adi/Tani word for sun, also the name of the solar deity in Donyi-Polo religion — this is correctly identified. The IPA `/ɲ/` (palatal nasal) for the `ny` sequence is the standard Indo-Aryan romanisation reading. However, Post (2007, 2015) and other Tani specialists transcribe the segment as a palatalised dental affricate or `/nz/` cluster in many Tani languages, not as a palatal nasal. The correct IPA is language-internal: in core Adi the segment is closer to `/nj/` or `/ɲ/` depending on dialect, but the form `doɲi` using a nasalised palatal alone may underrepresent the affricate component. At minimum this entry warrants a note that `/ɲ/` is a broad reading.

---

### 11. `brx` — water — IPA vowel `/ɔ/` for Devanagari `ऐ` is incorrect
- **File:** `words/water.js` line 710
- **Current:** `["दै", "dɔi"]`
- **Expected:** `["दै", "dai"]`
- **Why:** Devanagari `दै` = `द` (da) + `ै` (vowel sign AI = /ai/ diphthong). The standard phonetic value of the AI vowel in Bodo is /ai/ (front diphthong), not /ɔi/ (which involves a back rounded vowel). The IPA `/ɔ/` is the open-mid back rounded vowel used for the vowel in 'thought' (British RP), which is phonetically unlike the Bodo AI. Standard Bodo dictionaries and Jacquesson (2008) give the word for water as /dai/. The substitution of `/ɔ/` for `/a/` in the first component of the diphthong is a transcription error.

---

### 12. `aoz` — sun — `manas` questionable; may conflate 'sky/heaven' with 'sun'
- **File:** `words/sun.js` line 692
- **Current:** `["manas", "manas"]`
- **Expected:** verify against `"sunong"` or dialect-specific Ao form
- **Why:** Coupe (2007) *A Grammar of Mongsen Ao* documents the Mongsen Ao lexicon in detail. The form `manas` does not appear in Coupe's sun vocabulary; the Mongsen Ao word for 'sun' involves forms related to 'day' (`ni`-type roots widespread in TB). The form `manas` is more widely attested in the area as a borrowing meaning 'sky', 'heaven', or a deity name (cf. Sanskrit *manas* 'mind'), and appears in some Naga religious contexts as a sky-spirit name. If `manas` is the Chungli Ao (the other major Ao dialect) form, this should be dialect-labelled. As given, the entry conflates what may be a deity/sky name with the lexical item 'sun'.

---

### 13. `lif` — good — Limbu script `ᤖᤣ` does not correspond to IPA `nuba`
- **File:** `words/good.js` line 701
- **Current:** `["ᤖᤣ", "nuba"]`
- **Expected:** correct Limbu script for `nuba`, e.g. `ᤏᤢᤙᤠ` (NA + U-vowel + BA + A-vowel)
- **Why:** Unicode analysis: `ᤖ` = U+1916 LIMBU LETTER RA; `ᤣ` = U+1923 LIMBU VOWEL SIGN EE. The script form `ᤖᤣ` therefore reads as `ree` in Limbu — RA + EE vowel. The IPA `nuba` (= Limbu for 'good', attested in van Driem 1987 and Subba 1992) would require a script form beginning with LIMBU LETTER NA (`ᤏ`). The displayed script is simply wrong for this word; the IPA is likely correct and the script form has been mis-entered.

---

### 14. `lif` — moon — Limbu script `ᤍᤣ` does not correspond to IPA `laːba`
- **File:** `words/moon.js` line 707
- **Current:** `["ᤍᤣ", "laːba"]`
- **Expected:** correct Limbu script for `laːba`, beginning with LIMBU LETTER LA (`ᤗ`)
- **Why:** `ᤍ` = U+190D LIMBU LETTER DA; `ᤣ` = LIMBU VOWEL SIGN EE. The script reads `dee`, not `laːba`. The IPA `laːba` (Limbu for moon, per van Driem 1987) begins with /l/, which in Limbu script is written with LA (`ᤗ`), not DA. This is the same class of error as Issue 13: the IPA is phonetically plausible but the script display form is wrong.

---

### 15. `lif` — water — Limbu script `ᤁᤡᤱ` does not correspond to IPA `tʃʰwaɾaŋ`
- **File:** `words/water.js` line 708
- **Current:** `["ᤁᤡᤱ", "tʃʰwaɾaŋ"]`
- **Expected:** correct Limbu script for `tʃʰwaɾaŋ` (Limbu `chiwarang`)
- **Why:** `ᤁ` = LIMBU LETTER KA; `ᤡ` = LIMBU VOWEL SIGN I; `ᤱ` = LIMBU SMALL LETTER NGA. The script reads `kiŋ`. The IPA `tʃʰwaɾaŋ` (Limbu `chiwarang`, the standard word for water per van Driem 1987) begins with an aspirated palato-alveolar affricate and has four phonological segments. The word `kiŋ` (script reading) and `tʃʰwaɾaŋ` (IPA) bear no phonological relationship to each other. This is a severe script-IPA mismatch and the most phonetically disparate of the Limbu script errors.

---

### 16. `lif` — one — Limbu script `ᤏᤡᤳ` does not match IPA `tʰik`
- **File:** `words/one.js` line 707
- **Current:** `["ᤏᤡᤳ", "tʰik"]`
- **Expected:** IPA `nik` or script correction; Limbu 'one' per van Driem (1987) = `ɛk` or `ik`/`thik`
- **Why:** `ᤏ` = LIMBU LETTER NA; `ᤡ` = LIMBU VOWEL SIGN I; `ᤳ` = LIMBU SMALL LETTER TA. The script reads `nit`. The IPA `tʰik` begins with an aspirated stop, not a nasal. If the IPA `tʰik` is correct (van Driem 1987 gives `thik` for one in some Limbu dialects), then the initial `ᤏ` (NA) is wrong; the correct Limbu letter for aspirated T is `ᤌ` (THA, U+190C). This is another script-IPA mismatch of the same systematic type as Issues 13–15.

---

### 17. `lif` — father — Limbu script `ᤐᤠᤐ���` does not match IPA `aːbaː`
- **File:** `words/father.js` line 701
- **Current:** `["ᤐᤠᤐᤠ", "aːbaː"]`
- **Expected:** Limbu script for `aːbaː` should use initial vowel letter and LETTER BA
- **Why:** `ᤐ` = LIMBU LETTER PA; `ᤠ` = LIMBU VOWEL SIGN A. The sequence `ᤐ��ᤐᤠ` reads as `paapaa` (PA + long-A + PA + long-A). The IPA `aːbaː` begins with a vowel (`aː`) and contains `b` — neither initial vowel nor BA letter appears in the script. The script `ᤐ` (PA, voiceless bilabial stop) ≠ IPA `b` (voiced bilabial), and the script has no initial vowel before the first consonant. This is again a script-display form that was entered for a different word than the IPA describes.

---

### 18. `lif` — sun — Limbu script `ᤛᤡᤥᤔᤡ` does not match IPA `ɲaːmpʰʌ`
- **File:** `words/sun.js` line 707
- **Current:** `["ᤛᤡᤥᤔᤡ", "��aːmpʰʌ"]`
- **Expected:** Limbu script for `ɲaːmpʰʌ` should begin with a palatal nasal letter
- **Why:** `ᤛ` = LIMBU LETTER SA (voiceless alveolar fricative); the IPA begins with `ɲ` (palatal nasal). These are phonetically unrelated. The script form decodes as approximately `si-oo-mi` (SA + I-vowel + OO-vowel + MA + I-vowel), while the IPA `ɲaːmpʰʌ` has a completely different consonant profile. This is the fifth in a cluster of Limbu script display errors (Issues 13–18) where the script form and IPA form are phonologically incompatible, strongly suggesting that a wrong Unicode block or incorrectly sourced script data was used when populating the Limbu entries.

---

### 19. `brx` — fire — `वाथार` / `watʰaɾ` questionable; may be 'flame/light' not core 'fire'
- **File:** `words/fire.js` line 709
- **Current:** `["वाथार", "watʰaɾ"]`
- **Expected:** verify against standard Bodo `["जोयो", "dʒojo"]` or `["जोयो", "dʒoːjo"]`
- **Why:** The standard Bodo word for fire documented in Grierson (1903) and later in Jacquesson's Bodo-Garo studies is a form related to `jwi/joi/joyo`, not `vathar/wathar`. The form `वाथार` (vathar ~ wathar) does appear in some Bodo sources but appears to designate 'flame', 'light', or 'spark' rather than the base lexical item 'fire'. Using a marked or restricted sense term in the core lexical slot for 'fire' risks misrepresenting Bodo vocabulary. At minimum the form should be verified against a documentary Bodo dictionary.

---

### 20. `brx` — systematic: IPA lacks tonal markers
- **Files:** all `words/*.js`
- **Current:** every `brx:` IPA field has bare segmental transcription
- **Expected:** Bodo tone contrasts should be represented in IPA
- **Why:** Bodo has a two-register tonal system (high vs. low / level vs. falling, depending on the analytical framework), documented in Jacquesson (2008) and in the Bodo literary standard. The IPA entries for Bodo — like those for Mizo (Issue 1) and Hakha Chin (Issue 4) — carry zero tonal content. Examples: Bodo `se` (one), `san` (sun), `no` (house) each belong to specific tone classes that distinguish them from minimal pairs. The IPA as transcribed cannot serve as a phonological reference for Bodo.

---

### 21. `mni` — hello — `ꯈꯨꯔꯨꯝꯖꯔꯤ` is a phrase-level expression, not a single lexical item
- **File:** `words/hello.js` line 698
- **Current:** `["ꯈꯨꯔꯨꯝ��ꯔꯤ", "kʰuɾumdʒaɾi"]`
- **Note / Expected:** The form `kʰuɾumdʒaɾi` (`khurumjari`) is a conventionalised greeting phrase in Meitei meaning approximately 'I bow to you / I pay respects' — a formal greeting. Per Chelliah (1997) *A Grammar of Meithei*, it is a grammatically complex form involving the honorific register. This is not a problem per se (many 'hello' entries across the dataset use polite phrases), but the IPA transcription `kʰuɾumdʒaɾi` contains a /dʒaɾi/ sequence where the Meitei Mayek script `ꯖꯔꯤ` = JIL(dʒa) + RAI(r) + I-vowel, yielding `dʒaɾi` with the inherent vowel of RAI. This analysis is consistent. Flagged for completeness as the register level (formal honorific) should ideally be noted.

---

### 22. Notable absences: Tedim Chin, Lepcha, Karbi/Mikir, Falam Chin, Apatani, Nyishi
- **Files:** all `words/*.js`
- **Languages missing:** `ctd` (Tedim/Zomi Chin), `lep` (Lepcha/Róng), `mjw` (Karbi), `cfm` (Falam Chin), `apt` (Apatani), `njz` (Nyishi)
- **Why this matters:** The dataset includes Mizo, Hakha Chin, and Ao Naga — major languages of NE India — but omits several languages of comparable documentation and speaker population. Tedim Chin (`ctd`, 300k+ speakers in Chin State and Manipur) has a rich tonal system with five tones analysed in Henderson (1965) and Stern (1963), and its absence alongside Hakha Chin creates an incomplete picture of the Kuki-Chin branch. Lepcha (`lep`) has its own indigenous script (the Róng script) and is the heritage language of Sikkim; van Driem (2001) documents it in detail. Karbi/Mikir (`mjw`) is the only Karbi-group TB language with significant speaker population in Assam and deserves inclusion alongside Bodo and Garo as a representative Assam TB language. The Tani subgroup is represented only by `adi` (Adi), leaving Apatani (`apt`) and Nyishi (`njz`) — both with distinct phonological profiles and the Nyishi having tonal contrasts — unrepresented.

---

## Summary

The data for NE India Tibeto-Burman languages contains **four systemic tonal-suppression errors** affecting entire language sets:

1. **Mizo/Lushai `lus`** (20/20 entries): zero tone marks. Mizo is a four-tone language; the omission is complete.
2. **Hakha Chin `cnh`** (20/20 entries): zero tone marks; additionally the orthographic geminate `inn` (house) is copied raw into IPA.
3. **Bodo `brx`** (20/20 entries): zero tone marks for a two-register tonal language.
4. **Limbu `lif`** (at least 6/20 entries confirmed): the Limbu script display form and the IPA transcription are phonologically incompatible — different words entirely — indicating a systematic data-sourcing error in the script field. Confirmed mismatches: good, moon, water, one, father, sun.

Beyond tone, the following specific errors are noted:

- `lus` / `cnh` good: non-standard retroflex diacritic `ṭha` (Issues 3)
- `lus` love: orthographic tone marker `-h` silently deleted from IPA (Issue 2)
- `cnh` house: orthographic geminate `inn` used verbatim as IPA (Issue 5)
- `brx` hello: Hindi loanword `खुशी` substituted for native Bodo greeting (Issue 6)
- `grt` hello: pan-Indian `namaste` substituted for Garo native greeting (Issue 7)
- `grt` mid-dot `·`: rendered as glottal stop `ʔ` in 2 entries, ignored in 4 others — inconsistency (Issue 8)
- `adi` tree: identical to mother (`ane`) — probable copy error (Issue 9)
- `adi` sun: palatal nasal `/ɲ/` for `ny` in `donyi` may underrepresent the affricate realisation (Issue 10)
- `brx` water: IPA `/ɔ/` for Devanagari `ऐ` (AI diphthong) should be `/a/` (Issue 11)
- `aoz` sun: `manas` may be a sky/deity name rather than the basic 'sun' lexeme (Issue 12)
- `brx` fire: `वाथार` may denote 'flame/light' rather than core 'fire' (Issue 19)
- Six languages entirely absent: `ctd`, `lep`, `mjw`, `cfm`, `apt`, `njz` (Issue 22)
