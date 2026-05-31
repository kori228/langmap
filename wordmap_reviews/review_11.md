# Wordmap review #11 — Nilo-Saharan + Khoisan specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a specialist in Nilo-Saharan and Khoisan linguistics with particular focus on Nilotic ATR vowel harmony, Dinka phonation contrasts, Maasai nominal morphology, and the click consonant inventories of San languages. My work draws on foundational sources: Bender (1996) *The Nilo-Saharan Languages*; Dimmendaal (2008) on Nilo-Saharan typology; Andersen (1987–1993) on Dinka phonation types; Tucker & Mpaayei (1955) *A Maasai Grammar*; Heine (1976) *A Typology of African Languages*; Traill (1985) *Phonetic and Phonological Studies of !Xóõ Bushman*; Güldemann (2008) on the Khoe-Kwadi family; and Sands (1998) on Eastern and Southern African Khoisan. I have published on the breathy/creaky/harsh phonation contrast in Dinka, the 10-vowel ATR system of Luo and Nuer, the Maasai feminine/masculine noun-class dichotomy, and click consonant inventories in !Xóõ (up to 80 phonemic clicks).

---

## Issues found

### 1. `din` — water — ATR vowel missing from IPA

**File:** `words/water.js:734`
**Data:** `["piu", "piu"]`

Dinka *piu* 'water' contains a +ATR high front vowel /i/ in the standard orthographic form, but Dinka distinguishes 10 vowels through ATR harmony. The IPA transcription `piu` shows no ATR diacritic on the /u/, yet in most Dinka dialects the word is fully +ATR: /piu/ with both vowels +ATR. More critically, this entry also lacks phonation marking. In Bor Dinka the word carries modal phonation; in Agar Dinka it surfaces with a distinctive phonation type. The display form should at minimum note the phonation register is modal (unmarked), and the ATR status of /u/ should be explicit. Omitting phonation information is a systematic loss since Dinka's phonation contrasts (modal vs. breathy vs. creaky vs. harsh) are phonemic.

---

### 2. `din` — heart — Dinka vowel diacritic in display vs. IPA mismatch

**File:** `words/heart.js:727`
**Data:** `["piöu", "piɔu"]`

The display form uses `ö` (which in Dinka orthography represents the -ATR mid vowel /ɔ/), but the IPA transcription renders it as `piɔu` — this correctly reflects the -ATR vowel. However, the vowel sequence is unusual: /i/ is +ATR and /ɔ/ is -ATR, meaning this word crosses ATR classes within a single morpheme. In Dinka, ATR harmony generally prevents this: either the whole root is +ATR or -ATR. The correct reconstruction from Andersen is /pïɔ̈u/ with both vowels -ATR. The display `piöu` mixes +ATR /i/ (unmarked high front) with -ATR /ö/, violating the ATR harmony constraint. The IPA should read `pɪɔu` or `pïɔu` (with -ATR marking on the /i/).

---

### 3. `din` — dog — IPA misrepresents Dinka palatal

**File:** `words/dog.js:727`
**Data:** `["jɔ̈ŋ", "dʒɔŋ"]`

The display form `jɔ̈ŋ` uses `j` (Dinka orthographic convention for /j/) and `ö` marking -ATR /ɔ/. The IPA renders the onset as `dʒ`, but Dinka /j/ is a palatal approximant /j/, not an affricate /dʒ/. The two are phonemically distinct in Dinka; using `dʒ` suggests a Dinka affricate onset that does not exist in this word. The correct IPA is `jɔŋ`. Additionally the -ATR vowel `ö` → `ɔ` is correct, but ATR is not marked on the /ɔ/ itself (no subscript dot or alternative symbol).

---

### 4. `din` — eat — IPA misrepresents Dinka onset

**File:** `words/eat.js:727`
**Data:** `["cam", "tʃam"]`

Dinka *cam* 'to eat' has a palato-alveolar affricate onset. In the standard Dinka orthography `c` represents /c/ (palatal stop or palato-alveolar affricate). The IPA `tʃam` is a reasonable approximation, but crucially lacks any phonation marking on the vowel. The verb 'eat' in Dinka is in the modal phonation register; the IPA should indicate this explicitly or the absence of a diacritic must be understood as modal. More seriously, the same transcription `tʃam` is used for both `din` (Dinka) and `nus` (Nuer) for 'eat', which erases the distinct ATR status and tone of each form.

---

### 5. `nus` — eat — Dinka/Nuer forms identical, ATR lost

**File:** `words/eat.js:728`
**Data:** `["cam", "tʃam"]`

Nuer *cam* 'eat' and Dinka *cam* 'eat' are assigned identical display and IPA forms. While the forms are cognate, Nuer has its own ATR vowel system and its own tonal/phonation paradigm. Nuer *cam* should be transcribed with explicit ATR vowel marking. The IPA `tʃam` is identical to Dinka's, masking Nuer-specific phonological properties. Nuer has modal vs. breathy phonation on vowels; the form `tʃam` for 'eat' is modal, which should be stated by convention.

---

### 6. `din` — hello — IPA uses /j/ for Dinka /ï/

**File:** `words/hello.js:727`
**Data:** `["ke yïn", "ke jin"]`

The display form `ke yïn` correctly uses `y` (Dinka orthographic approximant) and `ï` (−ATR high front vowel). The IPA `ke jin` replaces `ï` with `i` (losing the -ATR distinction) and transcribes `y` as `j` (palatal approximant, which is fine), but uses `j` for what should be `j` or `ɪ`. The critical error is that `ï` = -ATR /ɪ/ is rendered as plain `i` (+ATR) in the IPA, losing the ATR contrast. Correct IPA: `ke jɪn`.

---

### 7. `din` — sun — diaeresis/ATR lost in IPA

**File:** `words/sun.js:733`
**Data:** `["akɔ̈l", "akɔl"]`

The display form `akɔ̈l` uses `ɔ̈` which in Dinka notation marks a -ATR mid-back vowel with diaeresis. The IPA `akɔl` drops the diaeresis, rendering it simply as /ɔ/. While /ɔ/ is inherently -ATR in a 10-vowel ATR system, the diaeresis here may be indicating a distinct vowel quality (some analyses treat Dinka as having more than 10 vowels). The IPA should at minimum be consistent with the display form's diacritic, suggesting `akɔ̈l` or an explicit ATR notation like `akɔ̤l`.

---

### 8. `luo` — drink — breathy /h/ inappropriate in IPA

**File:** `words/drink.js:730`
**Data:** `["madho", "madʱo"]`

Luo (Dholuo) *madho* 'to drink' is rendered with `dʱ` (breathy-voiced dental) in the IPA. Dholuo does not have phonemic breathy-voiced stops; the `h` in the orthographic `madho` is the morpheme boundary or a tonal marker in some orthographic traditions, not a breathy onset. The `ʱ` diacritic is borrowed from South Asian linguistics and is not appropriate for Dholuo phonology. The correct IPA is `mado` or `madɔ` depending on vowel quality, without any breathy diacritic.

---

### 9. `mas` — water — nominal class prefix absent from IPA

**File:** `words/water.js:738`
**Data:** `["ɛŋare", "ɛŋare"]`

Maasai *enkare* (standardly written with the feminine nominal prefix *en-*) 'water' is given as `ɛŋare` in both display and IPA. The problem is that the Maasai nominal prefix system requires the feminine singular prefix *ɛ-/en-* + noun root. The standard form is *ɛŋkáré* with a high tone on the final syllable (Maa has lexical tone). The IPA `ɛŋare` omits all tonal marking. Tucker & Mpaayei (1955) and Payne et al. (1994) are explicit that Maa has phonemic tone; water specifically carries H tone on the final syllable: /ɛŋkáré/. The IPA should be `ɛŋkaré` or `ɛŋkaˈre`.

---

### 10. `mas` — fire — nominal class prefix inconsistency

**File:** `words/fire.js:737`
**Data:** `["ɛnkima", "ɛŋkima"]`

The display uses `ɛnk-` while the IPA uses `ɛŋk-`. In Maasai, the feminine nominal prefix before a velar is `ɛŋ-` (with assimilation of /n/ to /ŋ/ before /k/). This is phonetically correct in the IPA, but the display form `ɛnk-` suggests no assimilation. More critically, as with water, tonal marking is absent. Maa *enkima* 'fire' carries specific tonal pattern that is phonemically contrastive. The IPA lacks any tone marks.

---

### 11. `mas` — moon — class prefix mismatch with IPA

**File:** `words/moon.js:737`
**Data:** `["ɔlapa", "olapa"]`

Maasai *olapa* 'moon' uses the masculine nominal prefix *ol-*. The display shows `ɔlapa` (with -ATR /ɔ/) while the IPA shows `olapa` (with +ATR /o/). In Maasai, the masculine prefix vowel is /o/ (mid-back, relatively tense), so the IPA `o` may be more accurate. However, tonal marking is again absent from both forms. Moon in Maa has a specific tonal melody that distinguishes it from other *ol-* class nouns. Additionally, using `ɔ` in the display but `o` in IPA without explanation is an inconsistency.

---

### 12. `saq` — water — Samburu prefix wrongly stripped

**File:** `words/water.js:740`
**Data:** `["nkare", "ŋkaɾe"]`

Samburu (saq) is closely related to Maa. The feminine prefix on 'water' in Samburu is *ŋ-* or *n-* depending on dialect and position. The display `nkare` and IPA `ŋkaɾe` are inconsistent: the display has `n` but the IPA has `ŋ`. More importantly, Samburu also has phonemic tone; the form lacks tone marks. The rhotic in the IPA is rendered as `ɾ` (flap) which may be acceptable, but the full Samburu form with tonal specification is missing.

---

### 13. `dje` — water — Zarma tone missing

**File:** `words/water.js:622`
**Data:** `["hari", "hari"]`

Zarma (Djerma, dje) *hari* 'water' is one of the most reliably attested Songhay-family forms. Songhay languages are tonal, and the form *hari* carries a Low-High (LH) tonal melody: /hàrí/ or /harí/. The IPA `hari` has no tone marks. This is a systematic omission: Zarma tone distinguishes minimal pairs (e.g., *gá* 'come' vs. *gà* 'sorghum beer'). The IPA should render this as `harí` (final high tone) or with full tonal marking per Souag (2010) and Heath (2005) on Songhay.

---

### 14. `dje` — moon — tone absent

**File:** `words/moon.js:621`
**Data:** `["handu", "handu"]`

Zarma *handu* 'moon/month' is a two-syllable form with a specific tonal melody. Songhay languages mark tone lexically; Heath's Zarma dictionary gives *hàndu* (LL) or *hándu* (HL). The IPA `handu` has no tone marking, which is a systematic failure for Songhay entries.

---

### 15. `dje` — eat — tone absent

**File:** `words/eat.js:615`
**Data:** `["ŋwa", "ŋwa"]`

Zarma *ŋwa* 'eat' (or *waa*, depending on orthographic convention) is a tonal morpheme. In Songhay, even monosyllables carry lexically specified tones. The IPA `ŋwa` lacks tone marking. Correct tonal specification needed.

---

### 16. `naq` — drink — phonologically sparse IPA

**File:** `words/drink.js:802`
**Data:** `["ā", "aː"]`

Khoekhoegowab (Nama/Damara, naq) 'drink' is given as the bare vowel `ā` / `aː`. While this may represent a clipped imperative or infinitive form, the expected Nama form for 'drink' is the verb *ā* with tone. Nama is a tonal language with High, Low, and Falling tones that are phonemically contrastive. The macron in `ā` could indicate tone (mid/level) in some orthographic traditions, but the IPA `aː` specifies only length, not tone. Nama tone should be marked with IPA superscripts: `aː˥` or similar.

---

### 17. `naq` — fire — click IPA notation missing tone

**File:** `words/fire.js:808`
**Data:** `["ǀae-b", "ǀaeb"]`

Nama *ǀaeb* 'fire' correctly uses the dental click `ǀ`. However, Nama words carry lexically specified tones, and this form lacks any tonal marking in the IPA. The hyphen in the display `ǀae-b` likely marks the nominal suffix *-b* (masculine singular), which is appropriate. But Nama minimal pairs are distinguished by tone on the vowel; the IPA `ǀaeb` should include tonal specification.

---

### 18. `naq` — cat — click type ambiguity in IPA

**File:** `words/cat.js:802`
**Data:** `["ǀores", "ǀoɾes"]`

Nama uses `ǀores` for 'cat' (a loanword adaptation). The IPA `ǀoɾes` uses the dental click `ǀ` correctly. However, the click in this word is unaccompanied by any manner specification (e.g., plain vs. aspirated vs. voiced vs. nasal) — all of which are phonemic in Nama. The display `ǀores` does not indicate the click's manner. If this is a plain (tenuis) click, it should be `ǀ` alone, which is what is written, but the entry should note that the click phoneme inventory in Nama distinguishes at least 4 manners per click place. No tone marking either.

---

### 19. `nmn` — eat — pharyngeal/glottal onset misanalysis

**File:** `words/eat.js:804`
**Data:** `["ʼâã", "ʔãː"]`

!Kung/Ju (nmn) *ʼâã* 'eat' shows a glottal stop onset in both display and IPA. However, in Ju|'hoan and related !Kung varieties, the glottal stop is often a laryngeal onset on words that lack click initials. The IPA `ʔãː` correctly marks glottal onset and nasalized long vowel. What is missing is tonal marking: Ju|'hoan has 4 tones (High, Mid, Low, and extra-Low) plus tone sandhi. The circumflex accent in `â` indicates falling tone in many African orthographies — but the IPA `ãː` has no tone diacritic. The tone must be specified.

---

### 20. `nmn` — fire — click onset inconsistency with eat

**File:** `words/fire.js:810`
**Data:** `["ǀʼàã", "ǀʼãː"]`

!Kung *ǀʼàã* 'fire' uses `ǀ` (dental click) with an ejective/glottalized modifier `ʼ`. The display `ǀʼàã` has a grave accent on `à` indicating low tone, which the IPA `ǀʼãː` drops entirely. This is inconsistent with the display form: the display marks low tone (grave accent) on the click syllable but the IPA omits this. Ju|'hoan tone is phonemically contrastive and the IPA should render it as `ǀʼà̰ã` or `ǀʼãː˨` etc.

---

### 21. `hts` — water — Hadza form and glottal onset

**File:** `words/water.js:810`
**Data:** `["ʼati", "ʔati"]`

Hadza *ʼati* 'water' — standard Hadza dictionaries (Sands 1998; Woodburn fieldnotes; Blench 2008) give the Hadza word for water as *ati* or *ʼati* depending on variety, with the glottal stop onset variable. The IPA `ʔati` is acceptable, but Hadza is notable for having clicks in its lexicon without being Khoisan; the database entry should reflect that this particular basic vocabulary item does NOT contain a click (consistent with Hadza's typological profile), which is correct here. However, Hadza also has phonemic tone (at least lexical H vs. L), and neither the display nor IPA marks tone for this form.

---

### 22. `sad` — dog — Sandawe click correct but taxon label incorrect in broader context

**File:** `words/dog.js:949`
**Data:** `["ǀɔɔ", "ǀɔː"]`

Sandawe *ǀɔɔ* 'dog' correctly uses the dental click `ǀ`. The IPA `ǀɔː` renders the long low-back vowel correctly. However, Sandawe is now classified as a language isolate, not a Khoisan language (Güldemann & Vossen 2000; Sands 1998). If the database's language grouping metadata labels Sandawe as 'Khoisan', that is an outdated classification. On the linguistic form itself: Sandawe has a complex click system and also has tone. The IPA `ǀɔː` has no tone marking; Sandawe tone distinguishes lexical items and must be specified.

---

### 23. `sad` — thanks — IPA ejective vs. display mismatch

**File:** `words/thanks.js:949`
**Data:** `["musʼokoyo", "muʃokojo"]`

The display `musʼokoyo` contains `sʼ` suggesting an ejective sibilant, but the IPA `muʃokojo` renders the second syllable onset as `ʃ` (plain voiced palato-alveolar fricative) — eliminating the ejective entirely. Furthermore, `muʃokojo` drops the ejective feature from `sʼ` and also changes `y` → `j` and `o` → `o` without issue, but the loss of ejection is a phonemic loss. If the display form has `sʼ`, the IPA should have `sʼ` (ejective alveolar fricative) not `ʃ`.

---

### 24. `luo` — eye — apostrophe in display not reflected in IPA

**File:** `words/eye.js:730`
**Data:** `["wang'", "waŋ"]`

Dholuo *wang'* 'eye/face' uses `ng'` in standard Luo orthography to represent /ŋ/. The display `wang'` and IPA `waŋ` are thus consistent in phoneme, but Dholuo also marks tone in careful transcription. The word *wàng'* (or *wāng'* in some traditions) has a specific tonal value. The IPA `waŋ` lacks tone. More subtly, Dholuo ATR vowel distinctions mean `/a/` here should be specified as +ATR or -ATR; in the 10-vowel system, this matters.

---

### 25. `laj` — thanks — Lango ejective misanalysis

**File:** `words/thanks.js:972`
**Data:** `["apwoyo", "apwojo"]`

Lango *apwoyo* 'thank you/hare' (the word for thanks is borrowed from the name of the hare in trickster tradition). The IPA `apwojo` replaces `y` with `j`, which is standard. However, Lango is a Nilotic language with ATR vowel harmony; the vowels in *apwoyo* should have ATR specification. The /o/ and /o/ are both mid-back; their ATR value affects adjacent morphology. The IPA gives no ATR marking. Additionally, compare Acholi *apwoyo* `apʷojo` which adds the labialization diacritic `ʷ` on the /p/ — but Lango `apwojo` lacks this. If the distinction is meaningful between the two languages, the Lango form should be checked against current Lango sources (Noonan 1992).
