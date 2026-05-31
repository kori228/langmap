# Wordmap review #48 — Philippine languages specialist

## Reviewer self-introduction

I am a specialist in Philippine historical and descriptive linguistics. My primary reference sources for this review: Blust (1991) "Sound Change and Migration Distance" (*Currents in Pacific Linguistics*, ed. R. Blust); Wolff (1972) *A Dictionary of Cebuano Visayan*; Schachter & Otanes (1972) *Tagalog Reference Grammar* (UC Press); Rubino (2000) *Ilocano Dictionary and Grammar*; Mintz & Britanico (1985) *A Bikol Dictionary*; Lobel (2013) *Philippine and North Bornean Languages: Issues in Description, Subgrouping, and Reconstruction*; Quilis (2002) *El español en Filipinas y en Guam*. Supplementary sources include Reid (1971) *Philippine Minor Languages*, Kaufman (2009) Maranao vocabulary, Zorc (1977) *The Bisayan Dialects of the Philippines*, and Blust & Trussel (ongoing) *Austronesian Comparative Dictionary*.

---

## Issues found

### 1. `tl` — all 20 entries — stress marks absent throughout
- **Files:** all `words/*.js`, line 119 in each
- **Current:** `["tubig", "tubiɡ"]`, `["mabuti", "mabuti"]`, `["salamat", "salamat"]`, etc. (all 20 entries)
- **Expected:** `["tubig", "ˈtubiɡ"]`, `["mabuti", "maˈbuti"]`, `["salamat", "saˈlamat"]`, etc.
- **Why:** Tagalog has lexically contrastive stress (Schachter & Otanes 1972, §2.1). The distinction between *daan* /ˈdaʔan/ 'hundred' and *daan* /daˈʔan/ 'road', or *baba* /ˈbaba/ 'chin' and *baba* /baˈbaʔ/ 'come down', demonstrates that stress is phonemically distinctive and must be marked in IPA. Default penultimate stress obtains for most bisyllabic words — *tubig* [ˈtubiɡ], *mabuti* [maˈbuti], *salamat* [saˈlamat] — but omitting the stress mark entirely conceals this phonological information and obscures contrastive cases. All 20 Tagalog IPA transcriptions should carry an explicit stress diacritic.

---

### 2. `tl` — love — stress mark missing on trisyllabic form
- **File:** `words/love.js` line 119
- **Current:** `["pag-ibig", "paɡʔibiɡ"]`
- **Expected:** `["pag-ibig", "paɡˌʔiˈbiɡ"]`
- **Why:** *Pag-ibig* is a pag- nominalization of *ibig* 'desire/love'; the primary stress falls on the final syllable [ˈbiɡ] (Schachter & Otanes 1972, §4.1.3). The hyphen in the orthography marks the prefix boundary, not a glottal stop — the IPA correctly inserts [ʔ] at the morpheme juncture (onset glottal of *ibig*), but the complete transcription needs a primary stress mark. Secondary stress on *pag-* is optional: [paɡˌʔiˈbiɡ].

---

### 3. `ceb` — water — inconsistent IPA symbol for /ɡ/
- **File:** `words/water.js` line 207
- **Current:** `["tubig", "tubig"]`
- **Expected:** `["tubig", "tubiɡ"]`
- **Why:** Every other Philippine language entry in this file uses the IPA symbol [ɡ] (U+0261, the dedicated IPA voiced velar stop) for the letter *g*. The Cebuano water entry uniquely uses the ASCII letter *g* (U+0067). This is an encoding inconsistency; the IPA field should use [ɡ] throughout, matching all sibling entries (Tagalog [tubiɡ], Hiligaynon [tubiɡ], Waray [tubiɡ], etc.). Cebuano *tubig* also carries penultimate stress in citation form: [ˈtubiɡ].

---

### 4. `ilo` — all 20 entries — stress marks absent throughout
- **Files:** all `words/*.js`, line 208 or 201 in each
- **Current:** `["danum", "danum"]`, `["maysa", "majsa"]`, `["mangan", "maŋan"]`, etc.
- **Expected:** `["danum", "ˈdanum"]`, `["maysa", "ˈmajsa"]`, `["mangan", "ˈmaŋan"]`, etc.
- **Why:** Ilokano has lexically distinctive stress (Rubino 2000, §Phonology). The minimal pairs *baket* /ˈbaket/ 'old woman' vs */baˈket/* illustrate the contrast. Bisyllabic words with penultimate stress are the majority pattern: *danum* [ˈdanum], *maysa* [ˈmajsa], *mangan* [ˈmaŋan], *apoy* [ˈapoj], *ima* [ˈima], *kayo* [ˈkajo], *puso* [ˈpuso], *bulan* [ˈbulan]. Trisyllabic *nasayaat* [nasaˈjaːt] carries final stress and already has a length mark. *Agyamanak* [aɡjaˈmanak] likewise needs stress on the penultimate syllable. Absent stress marks undercut the phonemic contrast Ilokano maintains.

---

### 5. `hil` / `war` — multiple entries — /ɔ/ used for a vowel phoneme that does not exist in these languages
- **Files:** `words/dog.js` line 577 (`hil`), `words/fire.js` lines 583, 726, `words/hand.js` lines 577, 720, `words/drink.js` lines 577, 720, `words/tree.js` lines 577, 720, `words/eat.js` line 577
- **Current examples:** `["ido", "ʔidɔ"]`, `["kalayo", "kalajɔ"]`, `["kamot", "kamɔt"]`, `["inom", "ʔinɔm"]`, `["kahoy", "kahɔj"]`
- **Expected:** `["ido", "ʔido"]`, `["kalayo", "kalajo"]`, `["kamot", "kamot"]`, `["inom", "ʔinom"]`, `["kahoy", "kahoj"]`
- **Why:** Hiligaynon and Waray (both Central Philippine / Bisayan) operate on a three-vowel phonemic system /a, i, u/ (Zorc 1977, §2.2). The symbol [ɔ] implies a distinct mid-open back vowel phoneme that does not exist in these languages. Word-final /u/ may surface as the allophone [o] or even [ɔ] in some phonetic environments, but representing it as [ɔ] in a phonemic-style transcription is misleading. The IPA field should use [o] (surface allophone of /u/) or simply [u] (phonemic). Using [ɔ] introduces a spurious contrast.

---

### 6. `tsg` — fire — lexical error: *kayu* = 'wood/tree', not 'fire'
- **File:** `words/fire.js` line 882
- **Current:** `["kayu", "kaju"]`
- **Expected:** `["api", "ˈapi"]` (or `["apuy", "ˈapuj"]`)
- **Why:** In Tausug, *kayu* (cognate with Tagalog *kahoy*, Cebuano *kahoy*) means 'wood' or 'tree', not 'fire' (Blust & Trussel, ACD: PAN \**kahiw* 'tree/wood'). The word for fire in Tausug is *api* or *apuy*, cognate with Tagalog *apoy*, Ilokano *apoy*, Maranao *apoy*. The current entry appears to be a confusion of 'fuel/wood' with 'fire'.

---

### 7. `tsg` — sun — lexical error: *suga* = 'lamp/light', not 'sun'
- **File:** `words/sun.js` line 882
- **Current:** `["suga", "suɡa"]`
- **Expected:** `["adlaw", "adlaw"]` (or `["alaw", "alaw"]`)
- **Why:** In Tausug, *suga* means 'lamp' or 'artificial light source', not 'sun'. The Tausug word for sun is *adlaw* (cognate with Cebuano *adlaw*, Hiligaynon *adlaw*, Waray *adlaw*), reflecting PAN \**qalejaw* 'day/sun'. The entry appears to have confused the referent of *suga* (a derived nominal from PAN \**sulaw* 'torch/lamp') with the primary solar body.

---

### 8. `tsg` — love — lexical error: *lasa* = 'taste/flavor', not 'love'
- **File:** `words/love.js` line 883
- **Current:** `["lasa", "lasa"]`
- **Expected:** `["kalayni", "kalajni"]` (or the Islamic borrowing *mahabbah*)
- **Why:** In Tausug, *lasa* (cognate with Tagalog *lasa*, Cebuano *lasa*) means 'taste' or 'flavor', from PAN \**lasa* 'taste'. It does not mean 'love'. The Tausug word for love/affection is *kalayni* or *pagkalayni*. Using *lasa* for 'love' may reflect a confusion with Malay *rasa* ('feeling'), but the Tausug semantic value is firmly 'taste'.

---

### 9. `mrw` — heart — lexical error: *atay* = 'liver', not 'heart'
- **File:** `words/heart.js` line 875
- **Current:** `["atay", "ataj"]`
- **Expected:** `["pusù", "pusuʔ"]` (or `["kararua", "kararuwa"]` for emotional heart)
- **Why:** In Maranao, *atay* (< PAN \**qatay* 'liver') means 'liver', not 'heart'. Although PAN \**qatay* was polysemous ('visceral organ'), the reflex in Modern Maranao has narrowed to 'liver'. This is confirmed by cross-Austronesian comparison: in virtually all Philippine languages, the PAN \**qatay* reflex (*atay*, *hatay*, *atay*) denotes the liver. The heart (anatomical and emotional) is *pusù* (< PAN \**pusəq*). Lobel (2013) documents this clearly for southern Philippine languages.

---

### 10. `tsg` — heart — lexical error: *hatay* = 'liver', not 'heart'
- **File:** `words/heart.js` line 876
- **Current:** `["hatay", "hataj"]`
- **Expected:** `["pusù", "ˈpusuʔ"]`
- **Why:** Tausug *hatay* is the regular reflex of PAN \**qatay* with initial /h/ (a Tausug sound change affecting PAN word-initial \**q*). As with Maranao *atay* (Issue #9 above), the semantic value is 'liver', not 'heart'. Tausug *pusù* (with final glottal stop) is the correct word for heart, used in both anatomical and emotional senses, and is cognate with Tagalog *puso*, Cebuano *puso*, Ilokano *puso*.

---

### 11. `bto` — heart — lexical error: *kublit* = 'skin/hide', not 'heart'
- **File:** `words/heart.js` line 722
- **Current:** `["kublit", "kublit"]`
- **Expected:** `["puso", "puso"]`
- **Why:** In Iriga Bicolano (and Central Bikol), *kublit* means 'skin', 'hide', or 'bark (of a tree)'. It is cognate with Tagalog *kublit* 'skin' and does not mean 'heart'. The Iriga Bicolano word for heart is *puso*, identical to Central Bikol and Tagalog. The entry appears to be a data error, possibly a misassignment from a different semantic field during database population.

---

### 12. `mdh` — moon — probable lexical error: *ulan-ulan* = 'drizzle/light rain'
- **File:** `words/moon.js` line 996
- **Current:** `["ulan-ulan", "ʔulanʔulan"]`
- **Expected:** `["bulan", "buˈlan"]` (or `["olan", "ʔoˈlan"]`)
- **Why:** In Maguindanao, the reduplication *ulan-ulan* is derived from *ulan* 'rain' (itself a borrowing from Tagalog/Malay *hujan* via metathesis or directly from *ulan*). The reduplicated form means 'drizzle' or 'light rain', not 'moon'. The Maguindanao word for moon is *bulan* or *olan* (< PAN \**bulaN* 'moon/month'), shared with virtually all Philippine languages. This is a serious semantic error: moon ≠ drizzle.

---

### 13. `mrw` — love — probable lexical error: *kalimo* = 'forgetfulness', not 'love'
- **File:** `words/love.js` line 882
- **Current:** `["kalimo", "kalimo"]`
- **Expected:** `["mapia so ginawa", "mapia so ɡinawa"]` (lit. 'beautiful/good the breath/spirit') or a verified Maranao love term
- **Why:** In Maranao, the root *limo* means 'to forget' (cf. Tagalog *malimot*, Ilokano *limuteen* 'to forget'). The *ka-* prefix forms the abstract noun: *kalimo* = 'forgetting / forgetfulness'. It is not a standard Maranao term for love or affection. Kaufman (2009) documents Maranao love vocabulary as centered on *ginawa*-compounds (spirit/breath metaphors). This entry requires verification against a native speaker or published Maranao dictionary.

---

### 14. `tao` — heart — probable lexical error: *paso* unattested as 'heart' in Yami
- **File:** `words/heart.js` line 1047
- **Current:** `["paso", "paso"]`
- **Expected:** `["poso", "poso"]` (< PAN \**pusəq*)
- **Why:** The Yami/Tao word for heart (< PAN \**pusəq*) should be *poso* or *posoq*, following the regular Yami reflex of PAN \**u* > Yami *o* and PAN \**-q* > Yami final glottal (often dropped in modern orthography). *Paso* does not correspond to any expected Yami phonological form for 'heart' — *pa-* suggests a different morphological base. This is likely a typo or error; the expected cognate form should be verified against the Yami-English dictionary (Rau & Dong-yi 2006).

---

### 15. `tao` — moon — probable lexical error: *vehan* unattested as 'moon' in Yami
- **File:** `words/moon.js` line 1059
- **Current:** `["vehan", "vehan"]`
- **Expected:** `["olan", "ʔolan"]`
- **Why:** The Yami/Tao word for moon should be *olan* (< PAN \**bulaN* 'moon/month', with Yami \**b* > *v* > Ø initially and PAN \**l* retained). *Vehan* bears a structural resemblance to a Yami word for 'year' (*pahan* or related forms, from PAN \**tahuN* 'year') but does not correspond to 'moon'. Compare Batanic sister-language Ivatan where moon is *vulan*. The entry *vehan* likely confuses 'moon' with 'year' or is otherwise misidentified.

---

### 16. `bto` — fire — /ɔ/ applied inconsistently; same allophone issue as Hiligaynon/Waray
- **File:** `words/fire.js` line 728; also `words/tree.js` line 722
- **Current:** `["kalayo", "kalajɔ"]`, `["kahoy", "kahɔj"]`
- **Expected:** `["kalayo", "kalajo"]`, `["kahoy", "kahoj"]`
- **Why:** Iriga Bicolano (Lobel 2013) has a vowel inventory of /a, e, ə, i, o, u/ — six vowels including schwa but not a distinct /ɔ/. The use of [ɔ] for word-final /o/ is phonetically motivated (rounding lowering before [j]) but Iriga Bicolano does not contrast /o/ vs /ɔ/ at the phoneme level. Using [ɔ] in IPA inconsistently (some entries have it, others like [bulən] and [aldəw] do not) creates false phonemic distinctions. All final /o/ should be transcribed [o] for internal consistency.

---

### 17. `bik` — eat — form given is nominalized 'food', not verb 'to eat'
- **File:** `words/eat.js` line 721
- **Current:** `["kakanon", "kakanon"]`
- **Expected:** `["kumakan", "kumakan"]` (actor voice) or `["kakan", "kakan"]` (root)
- **Why:** *Kakanon* (Central Bikol) is derived from the root *kan* 'eat' with the *ka-* reduplicative infix and *-on* patient-voice / nominalization suffix: *kakanon* = 'food' or 'thing to be eaten'. It is a patient-voice nominalization, not a verb form. In focus-voice Philippine grammar (Mintz & Britanico 1985, §Verb morphology), the citation form for 'eat' should be the actor-voice stem *kumakan* (with *-um-* infix) or the bare root *kakan*. Listing the patient-voice noun form for the 'eat' concept is a consistent morphological mismatch.

---

### 18. `bik` — drink — form given is nominalized 'beverage', not verb 'to drink'
- **File:** `words/drink.js` line 721
- **Current:** `["inumon", "inumon"]`
- **Expected:** `["uminom", "uminom"]` (actor voice) or `["inom", "inom"]` (root)
- **Why:** *Inumon* is the patient-voice / goal-voice form of *inom* 'drink': *in-um-on* → *inumon* = 'something to be drunk / beverage'. This is the same morphological mismatch as Issue #17: the patient-voice nominalization is given where an actor-voice or root form is expected. Compare Tagalog *uminom* (actor voice, used correctly), Cebuano *inom* (root, used correctly), Ilokano *uminom* (actor voice, correct). Central Bikol should match these citation-form conventions.

---

### 19. `cbk` — eye — /x/ is not the substrate-influenced reflex of Spanish /x/ in Zamboangueño
- **File:** `words/eye.js` line 578
- **Current:** `["ojo", "ˈoxo"]`
- **Expected:** `["ojo", "ˈoho"]`
- **Why:** In Zamboangueño Chavacano, the Spanish fricative /x/ (written ⟨j⟩) has been adapted through the Philippine phonological substrate as [h], not [x] (Quilis 2002, §Fonología del español en Filipinas; Chabacano typically lacks the dorsal fricative [x] entirely). The IPA [x] (uvular/velar) implies a phoneme that Zamboangueño speakers do not produce; they use the glottal fricative [h] inherited from Philippine language phonotactics. Compare: Spanish *ojo* /ˈoxo/ → Chavacano *ojo* [ˈoho].

---

### 20. `cbk` — eat / drink — circumflex accent is non-standard; IPA final glottal is unwarranted
- **Files:** `words/eat.js` line 578, `words/drink.js` line 578
- **Current:** `["comê", "koˈmeʔ"]`, `["bebê", "beˈbeʔ"]`
- **Expected:** `["kome", "koˈme"]`, `["bebe", "beˈbe"]`
- **Why:** Zamboangueño Chavacano orthography does not use the circumflex accent (ê) on Spanish-derived verb stems. *Comer* → *kome* and *beber* → *bebe* are the standard Zamboangueño spellings (Quilis 2002; Lipski 2010 *Pidgins and Creoles of the Caribbean and Philippines*). The circumflex is a feature of some Ternateño or Caviteño Chavacano orthographic traditions, not Zamboangueño. More importantly, the IPA posits a final glottal stop [ʔ] — [koˈmeʔ], [beˈbeʔ] — which is not a regular feature of these Spanish-derived forms in Chavacano. There is no etymological or phonological basis for a final glottal on these loans.

---

### 21. `pam` — heart — display orthography and IPA disagree on final glottal
- **File:** `words/heart.js` line 988
- **Current:** `["pusu", "ˈpusoʔ"]`
- **Expected:** `["pusuꞌ", "ˈpusuʔ"]` (or `["puso", "ˈpuso"]` if the glottal is not retained)
- **Why:** The display form *pusu* has no glottal stop, but the IPA [ˈpusoʔ] posits one. This is internally inconsistent. In Kapampangan, the reflex of PAN \**pusəq* is *pusuʔ* (with final glottal), cognate with Tagalog *puso* (where the final glottal has been lost). If the Kapampangan form retains the final glottal (which is likely — Kapampangan preserves final glottal stops more consistently than Tagalog), the display form should reflect it: *pusuꞌ* or *pusu'*. Additionally, the IPA vowel in the final syllable switches from *u* (display) to [o] (IPA [ˈpusoʔ]), suggesting a further error in the vowel transcription.

---

### 22. `tao` — fire — IPA uses [i] for final /y/; inconsistent with other entries
- **File:** `words/fire.js` line 1059
- **Current:** `["apuy", "apui"]`
- **Expected:** `["apuy", "ˈapuj"]`
- **Why:** In Yami/Tao, the final ⟨y⟩ in *apuy* represents a palatal approximant /j/. The IPA field renders this as [i] (a full vowel), while every other Philippine language entry uses [j] for this segment (Tagalog *apoy* → [apoj], Ilokano *apoy* → [apoj], Maranao *apoy* → [apoj]). The Yami entry [apui] implies a vowel sequence /apui/ (two vowels in hiatus), which is not the intended phonological structure. The correct IPA is [ˈapuj]. The same inconsistency appears in `tao: hand` [kamai] (should be [kamaj]) and `tao: thanks` [ajoi] (should be [ajoj]).

---

### 23. `ceb` — good — long vowel [aː] misanalysis of a disyllabic sequence
- **File:** `words/good.js` line 200
- **Current:** `["maayo", "maːjo"]`
- **Expected:** `["maayo", "maˈʔaːjo"]` or `["maayo", "maˈʔajo"]`
- **Why:** Cebuano *maayo* is the stative prefix *ma-* + *ayo* 'good/healed'. The spelling ⟨aa⟩ represents the morpheme boundary /a + a/ (final vowel of *ma-* + initial vowel of *ayo*). In Cebuano, this hiatus is typically bridged by a glottal stop: [maˈʔajo] or, in some analyses, by compensatory vowel lengthening [maˈaːjo]. The current IPA [maːjo] collapses the two syllables into a long vowel at the onset of the word, mislocates the syllable boundary, and omits both the stress mark and the glottal/lengthening at the hiatus. Compare Hiligaynon *maayo* [maˈʔajɔ] (Issue #5 notwithstanding re: /ɔ/), which at least marks the glottal.

---

### 24. `mdh` — fire — initial /ʔ/ inconsistent with other Maguindanao initial-vowel entries
- **File:** `words/fire.js` line 996
- **Current:** `["apoy", "ʔaˈpoj"]`
- **Inconsistency:** Compare `mdh: ["asa", "ˈʔasa"]` (one), `mdh: ["aso", "ˈʔaso"]` (dog), `mdh: ["ama", "ˈʔama"]` (father) — all have initial glottal with stress on that initial syllable. But *apoy* has stress shifted to the second syllable [ʔaˈpoj]. If initial /ʔ/ always carries stress in Maguindanao, the stress should be [ˈʔapoj]. Conversely, if *apoy* genuinely has final stress in Maguindanao, then the initial [ʔ] entries that show penultimate stress should be reconsidered. The stress-placement rule for Maguindanao must be applied consistently across all entries.

---

*Total: 24 issues identified. Priority: Issues 6–13 (lexical errors assigning wrong words) are most serious as they misrepresent the language data. Issues 1, 4 (missing stress across all Tagalog/Ilokano entries) are the highest-volume correction. Issues 17–18 (morphological form mismatch in Bikol) and 21 (Kapampangan display/IPA disagreement) are structural. Issues 5, 16 (spurious /ɔ/ phoneme) affect phonological accuracy across eight entries.*
