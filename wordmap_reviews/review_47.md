# Wordmap review #47 — Hmong-Mien specialist

## Reviewer self-introduction

This review is grounded in the following primary references:

- Heimbach (1979) *White Hmong-English Dictionary* — definitive lexical and phonological reference for Mong Daw (mww), including the full RPA tone-letter system and phonetic realisations
- Lyman (1974) *Dictionary of Mong Njua* — principal reference for Green Hmong (Hmong Leng / hnj), tone values, and lexical contrasts with White Hmong
- Ratliff (2010) *Hmong-Mien Language History* — comparative Hmong-Mien reconstruction, proto-tones, and the historical phonology linking the tone-letter system to earlier laryngeal contrasts
- Downer (1973) "Tone change and tone shift in White Miao" — the canonical description of the eight-tone system and its Chao-numeral values for White Hmong; primary source for tone contour assignments
- Mortensen (2017) *Mong Leng (Green Hmong) Phonology* — Green Hmong tonal and segmental phonology, useful for comparing with the mww system applied here
- Niederer (1998) *Les langues hmong-mjuen, hmong-mien* — comparative overview of the branch, including Iu Mien, She, Bunu tonal systems

The data reviewed uses ISO code `hmn` with RPA (Romanized Popular Alphabet) orthography. The vocabulary and spelling conventions are those of White Hmong (Mong Daw, mww) specifically; the macrolanguage code `hmn` is technically imprecise but that ISO ambiguity is noted separately below.

---

## Issues

### ISSUE 1 — Fundamental: tone-marker letters in RPA are misread as phones throughout

**Background:** This issue underlies the majority of tone errors below and merits explicit statement. In the Hmong RPA system, the seven word-final consonant letters **b, j, v, s, m, g, d** are purely tonal diacritics; they have no phonetic consonant value. The eighth tone (mid 33) is written with no final letter. Hmong syllables are strictly open or end in a vowel; there are no underlyingly final stop, fricative, or nasal consonants. The RPA letters map as follows (Downer 1973; Heimbach 1979):

| RPA letter | Tone name | Chao value | IPA notation |
|---|---|---|---|
| b | high level | 55 | ˥˥ (or ˥) |
| j | high-falling | 52 | ˥˨ |
| v | mid-rising (breathy) | 35ʱ or 24ʱ | ˨˦ʱ |
| s | low | 21 | ˨˩ |
| m | low-creaky | 21ˀ | ˨˩ˀ |
| g | mid-falling breathy | 42ʱ | ˦˨ʱ |
| d | low-rising creaky | 213ˀ | ˨˩˦ˀ |
| (none) | mid level | 33 | ˧ |

The dataset systematically: (a) assigns wrong tone contours; (b) omits breathy/creaky phonation on g, v, m, and d tones; (c) in two cases treats the tone-marker letter as a nasal coda that nasalises the vowel nucleus (niam, siab). Every hmn IPA transcription in the dataset contains at least one error stemming from failure to apply this system correctly.

---

### ISSUE 2 — `water` words/water.js:203 — j-tone rendered as mid (˧) instead of high-falling (˥˨)

**Data:** `hmn: ["dej", "te˧"]`

The final letter **j** in *dej* is the tone marker for the high-falling tone (Chao 52 = ˥˨; Downer 1973; Heimbach 1979 s.v. *dej*). The IPA transcription shows ˧, which is the mid-level tone (tone 8, no-final-letter class). This is the wrong tone entirely. The correct transcription is /tɛ˥˨/. The syllable is phonetically [tɛ⁵²], a clearly falling contour from high-5 to mid-2.

The j-final error is replicated in `eat` (Issue 4 below), indicating the error is systematic: j is being confused with the "no final" category and rendered as the mid tone.

- **Recommended fix:** `te˧` → `tɛ˥˨`

---

### ISSUE 3 — `water` words/water.js:203 — vowel /e/ instead of /ɛ/

**Data:** `hmn: ["dej", "te˧"]`

The RPA vowel letter **e** in White Hmong maps consistently to open-mid front /ɛ/, not close-mid /e/ (Heimbach 1979; Ratliff 2010). Close-mid /e/ is not part of the White Hmong phonemic vowel inventory. This error also affects *dev* (dog, Issue 11) and *tes* (hand, Issue 16).

- **Recommended fix:** `te˧` → `tɛ˥˨` (combining with Issue 2)

---

### ISSUE 4 — `eat` words/eat.js:196 — j-tone rendered as mid (˧) instead of high-falling (˥˨)

**Data:** `hmn: ["noj", "nɔ˧"]`

The final letter **j** in *noj* is the high-falling tone marker (52 = ˥˨), identical to *dej* above. The IPA shows ˧ (mid level tone). Correct: /nɔ˥˨/.

- **Recommended fix:** `nɔ˧` → `nɔ˥˨`

---

### ISSUE 5 — `good` words/good.js:196 — no-final-letter tone rendered as ˥ (high) instead of ˧ (mid)

**Data:** `hmn: ["zoo", "tɕɔː˥"]`

*Zoo* has no final letter in RPA, meaning it carries the mid level tone (33 = ˧). The IPA shows ˥ (high level, tone 1 = b-tone). This is a systematic misassignment: no-final-letter words appear throughout the dataset with ˥ where ˧ is required (see also *ntoo*, *hli*, and *zoo* in *nyob zoo* below). Correct: /tsɔː˧/ or /tɕɔː˧/.

- **Recommended fix:** `tɕɔː˥` → `tɕɔː˧`

---

### ISSUE 6 — `tree` words/tree.js:196 — (a) no-final-letter tone ˥ instead of ˧; (b) prenasalisation of nt- omitted

**Data:** `hmn: ["ntoo", "tɔː˥"]`

Two errors:

**(a) Tone:** *ntoo* has no final letter → mid tone ˧. IPA shows ˥ (high). Correct: /ⁿtɔː˧/.

**(b) Onset prenasalisation:** In RPA, the digraph **nt** marks a prenasalised unaspirated alveolar stop /ⁿt/ (Heimbach 1979; Ratliff 2010 §3.2). The IPA transcription omits the nasal prefix entirely, showing only /t/. Prenasalised consonants are phonemically distinct from their non-nasalised counterparts in White Hmong; *toos* and *ntoos* are different words. The nasal element /ⁿ/ must be shown.

- **Recommended fix:** `tɔː˥` → `ⁿtɔː˧`

---

### ISSUE 7 — `moon` words/moon.js:202 — no-final-letter tone ˥ instead of ˧

**Data:** `hmn: ["hli", "ɬi˥"]`

*Hli* has no final letter → mid tone ˧. IPA shows ˥. The initial /ɬ/ (voiceless lateral fricative from *hl*) is correctly transcribed. Only the tone is wrong.

- **Recommended fix:** `ɬi˥` → `ɬi˧`

---

### ISSUE 8 — `mother` words/mother.js:202 — m-tone rendered as ˥ (high); creaky phonation absent; vowel nasalisation requires clarification

**Data:** `hmn: ["niam", "niã˥"]`

*Niam* = n + ia + **m** (tone marker). The final letter **m** marks the low-creaky tone (Chao 21ˀ = ˨˩ˀ). The IPA shows ˥ (high level), which is the b-tone: a complete inversion of the correct value. The tone on *niam* 'mother' is one of the lowest, most creaky tones in the system; rendering it as the highest level tone is the maximally wrong assignment.

Additionally, the m-tone requires a creaky/glottalised diacritic (ˀ or ̰) on the vowel or the tone numeral; none is shown.

The vowel /ã/ (nasalised) in the transcription plausibly reflects assimilation from the initial /n/, but the final RPA letter **m** is purely tonal and must not be read as a nasal coda inducing vowel nasalisation. If /ã/ is included, a note explaining its source is needed; otherwise it may lead readers to reconstruct a phonemic nasal consonant coda that does not exist in Hmong.

- **Recommended fix:** `niã˥` → `niɑ̰˨˩ˀ` (or `niã˨˩ˀ` if assimilatory nasalisation is retained with explanation)

---

### ISSUE 9 — `sun` words/sun.js:202 — (a) b-tone rendered as rising ˧˥ instead of high level ˥˥; (b) voiceless nasal onset hn- transcribed as voiced /n/

**Data:** `hmn: ["hnub", "nu˧˥"]`

Two errors:

**(a) Tone:** *hnub* ends in **b** → high level tone (55 = ˥˥). The IPA shows ˧˥ (rising from mid-3 to high-5, contour 35). A rising 35 contour is not the b-tone; it is a frequent mis-transcription that conflates tone 1 (level 55) with a rising contour. The same rising ˧˥ error appears in *ib* (one), *siab* (heart), *hlub* (love), and *nyob* (hello), confirming this is systematic.

**(b) Onset voicelessness:** The RPA digraph **hn** marks a voiceless dental nasal /n̥/ (Heimbach 1979; Ratliff 2010 §3.1). The IPA shows /n/ (fully voiced nasal), omitting the voiceless diacritic. White Hmong contrasts voiced /m, n, ŋ, ɲ/ with their voiceless counterparts /m̥, n̥, ŋ̊, ɲ̊/; *hnub* and *nub* are distinct. The voicelessness must be marked.

- **Recommended fix:** `nu˧˥` → `n̥u˥˥`

---

### ISSUE 10 — `father` words/father.js:196 — v-tone rendered as falling ˧˩ instead of rising-breathy ˨˦ʱ

**Data:** `hmn: ["txiv", "tɕi˧˩"]`

The final letter **v** marks the mid-rising (breathy) tone (Chao 24ʱ or 35ʱ per Downer 1973; ˨˦ʱ). The IPA shows ˧˩ — a mid-to-low falling contour that is the reverse of the correct rising trajectory. This error also affects *miv* (cat), *dev* (dog), *tsev* (house), and *qhov* (in 'eye'): five entries in total with v-final all show ˧˩ (falling) where ˨˦ʱ (rising) is required. An additional critical feature, breathy phonation (ʱ), is absent in all of them.

- **Recommended fix:** `tɕi˧˩` → `tɕi˨˦ʱ`

---

### ISSUE 11 — `cat` words/cat.js:196 — v-tone ˧˩ instead of ˨˦ʱ (same systematic error)

**Data:** `hmn: ["miv", "mi˧˩"]`

Identical v-tone error to Issue 10. Correct: /mi˨˦ʱ/.

- **Recommended fix:** `mi˧˩` → `mi˨˦ʱ`

---

### ISSUE 12 — `dog` words/dog.js:196 — v-tone ˧˩ instead of ˨˦ʱ; vowel /e/ instead of /ɛ/

**Data:** `hmn: ["dev", "te˧˩"]`

Two errors: the v-tone (see Issue 10) and the vowel quality: RPA **e** = /ɛ/, not /e/ (see Issue 3).

- **Recommended fix:** `te˧˩` → `tɛ˨˦ʱ`

---

### ISSUE 13 — `house` words/house.js:203 — v-tone ˧˩ instead of ˨˦ʱ

**Data:** `hmn: ["tsev", "tɕɛ˧˩"]`

V-tone error identical to Issues 10–12. The vowel quality /ɛ/ for RPA *e* is correct here.

- **Recommended fix:** `tɕɛ˧˩` → `tɕɛ˨˦ʱ`

---

### ISSUE 14 — `eye` words/eye.js:196 — (a) qhov: v-tone ˧˩ instead of ˨˦ʱ; (b) muag: g-tone ˧ missing falling contour and breathy phonation; (c) qh transcribed as velar /kʰ/ instead of uvular /qʰ/

**Data:** `hmn: ["qhov muag", "kʰɔ˧˩muã˧"]`

Three errors:

**(a)** *qhov*: v-tone error (see Issue 10). Correct: /qʰɔ˨˦ʱ/.

**(b)** *muag*: the final letter **g** marks the mid-falling breathy tone (Chao 42ʱ = ˦˨ʱ). IPA shows ˧ (flat mid level), omitting both the falling contour and the breathy phonation. The g-tone is one of the most phonetically distinctive tones in the system because of its strong breathy voice; rendering it as plain ˧ collapses it into the no-final-letter tone (tone 8). Correct: /muã˦˨ʱ/ or /mua˦˨ʱ/.

**(c)** The onset of *qhov* is RPA **qh**, which marks a uvular aspirated stop /qʰ/ (Heimbach 1979; Ratliff 2010 §3.1). White Hmong contrasts velar /k, kʰ/ with uvular /q, qʰ/; this is a phonemic contrast. The transcription /kʰ/ (velar) collapses the distinction. Correct onset: /qʰ/.

- **Recommended fix:** `kʰɔ˧˩muã˧` → `qʰɔ˨˦ʱmua˦˨ʱ`

---

### ISSUE 15 — `fire` words/fire.js:202 — (a) s-tone ˧˩ starts too high (should be ˨˩); (b) initial /t/ missing aspiration

**Data:** `hmn: ["taws", "tɑ˧˩"]`

Two errors:

**(a) Tone starting point:** The s-tone (Downer tone 4) is a low-falling or low-level tone with Chao values 21 or 22 (˨˩ or ˩˩). The IPA shows ˧˩, which starts at the mid level (3) and falls to low (1). The correct starting point is mid-low (2), not mid (3). While the distinction between ˧˩ and ˨˩ might seem minor, it is consistent with a broader pattern: the dataset uses ˧˩ for both the v-tone (whose starting point is correct at ˧) and the s-tone (whose correct starting point is ˨). The two tones are therefore merged in the IPA representation.

**(b) Aspiration:** In RPA, the letter **t** before vowels in White Hmong marks the aspirated alveolar stop /tʰ/ (Heimbach 1979 §2; Ratliff 2010 §3.1). The contrast is: RPA **d** = /t/ (unaspirated), RPA **t** = /tʰ/ (aspirated). The transcription omits the aspiration mark.

- **Recommended fix:** `tɑ˧˩` → `tʰɑ˨˩`

---

### ISSUE 16 — `hand` words/hand.js:196 — (a) s-tone ˧˩ instead of ˨˩; (b) aspiration missing; (c) vowel /e/ instead of /ɛ/

**Data:** `hmn: ["tes", "te˧˩"]`

Three errors, all parallel to Issues 15 and 3: the s-tone starting point is too high (˧˩ vs ˨˩); the initial RPA **t** = /tʰ/ is written as unaspirated /t/; and the vowel /e/ should be /ɛ/.

- **Recommended fix:** `te˧˩` → `tʰɛ˨˩`

---

### ISSUE 17 — `drink` words/drink.js:196 — s-tone ˧˩ instead of ˨˩

**Data:** `hmn: ["haus", "hɑu˧˩"]`

Same s-tone starting-point error as Issues 15–16. Initial **h** = /h/ is correctly transcribed. Vowel /ɑu/ for RPA *au* is reasonable.

- **Recommended fix:** `hɑu˧˩` → `hɑu˨˩`

---

### ISSUE 18 — `one` words/one.js:202 — b-tone rendered as rising ˧˥ instead of high level ˥˥

**Data:** `hmn: ["ib", "i˧˥"]`

*Ib* ends in **b** → high level tone (55 = ˥˥). Same contour error as *hnub* (Issue 9): the rising ˧˥ is used where a level ˥˥ is required. The b-tone does not rise; it is a sustained high-level tone from the start. Correct: /i˥˥/ or /i˥/.

- **Recommended fix:** `i˧˥` → `i˥˥`

---

### ISSUE 19 — `heart` words/heart.js:196 — (a) b-tone ˧˥ instead of ˥˥; (b) spurious vowel nasalisation /ã/ in *siab*

**Data:** `hmn: ["siab", "ɕiã˧˥"]`

Two errors:

**(a) Tone:** *siab* ends in **b** → high level 55 = ˥˥. IPA shows ˧˥ (rising). Same error as Issues 9, 18 (see Issue 9 for analysis).

**(b) Vowel nasalisation:** The transcription shows /ɕiã˧˥/, with the vowel /a/ nasalised to /ã/. The RPA nucleus of *siab* is the diphthong *ia* (/ia/). There is no nasal consonant anywhere in the phonemic string of *siab* — neither in the onset (initial /s/) nor in the rime (final letter **b** is a tone marker, not a nasal). There is no phonological source for the nasalisation of /a/. This error appears to arise from the same misreading of final RPA letters as consonants that produces the niam error (Issue 8); in *siab* there is even less basis for it, since **b** is a voiceless stop letter, not a nasal. The vowel should be /ia/ (non-nasalised).

- **Recommended fix:** `ɕiã˧˥` → `sia˥˥` (or `ɕia˥˥` if the palatalisation of /s/ before front vowel is retained)

---

### ISSUE 20 — `love` words/love.js:203 — b-tone ˧˥ instead of ˥˥

**Data:** `hmn: ["hlub", "ɬu˧˥"]`

*Hlub* ends in **b** → high level 55. IPA shows ˧˥ (rising). Onset /ɬ/ for *hl* is correctly transcribed. Same b-tone contour error as Issues 9, 18, 19.

- **Recommended fix:** `ɬu˧˥` → `ɬu˥˥`

---

### ISSUE 21 — `hello` words/hello.js:196 — (a) *nyob*: b-tone ˧˥ instead of ˥˥; (b) *zoo*: no-final tone ˥ instead of ˧

**Data:** `hmn: ["nyob zoo", "ɲɔ˧˥tɕɔː˥"]`

Two errors in the compound greeting:

**(a)** *Nyob* ends in **b** → high level 55 = ˥˥. IPA shows ˧˥ (rising). Same b-tone error as Issues 9, 18–20.

**(b)** *Zoo* has no final letter → mid level 33 = ˧. IPA shows ˥ (high). Same no-final error as Issues 5–7. This means the same word *zoo* ('good') is transcribed inconsistently: in `words/good.js` it has ˥ (wrong), and in `words/hello.js` the second element of the greeting has ˥ again (wrong). The consistent error direction confirms the no-final-letter → ˥ misassignment is rule-like.

- **Recommended fix:** `ɲɔ˧˥tɕɔː˥` → `ɲɔ˥˥tsɔː˧`

---

### ISSUE 22 — `thanks` words/thanks.js:196 — (a) *ua*: no-final tone ˥ instead of ˧; (b) *tsaug*: g-tone missing falling contour and breathy phonation; (c) affricate palatalization

**Data:** `hmn: ["ua tsaug", "uã˥tɕɑu˧"]`

Three errors:

**(a)** *Ua* has no final letter → mid tone ˧. IPA shows ˥. Same no-final → ˥ error as Issues 5–7.

**(b)** *Tsaug* ends in **g** → mid-falling breathy tone (Chao 42ʱ = ˦˨ʱ). IPA shows ˧ (flat mid), identical to the g-tone error in *muag* (Issue 14b). The breathy phonation is again absent.

**(c)** RPA *ts* = /ts/ (alveolar/dental affricate). IPA shows /tɕ/ (palatal affricate). While allophones before back vowels vs. front vowels differ in articulation point, the phonemic citation form is /ts/ and the palatal representation does not match the *au* environment here. The same /ts/→/tɕ/ substitution appears in *zoo*, *tsev*, and *tsaug*, suggesting a systemic choice to represent all RPA *ts* as /tɕ/ regardless of vowel environment.

- **Recommended fix:** `uã˥tɕɑu˧` → `ua˧tsɑu˦˨ʱ`

---

### ISSUE 23 — ISO code imprecision: `hmn` (macrolanguage) used for data that is specifically White Hmong (mww)

The ISO 639-3 code **hmn** is a macrolanguage designator covering all Hmong languages as a group, including at minimum White Hmong (mww / Mong Daw) and Green Hmong (hnj / Mong Njua). It is not a language-level code.

All twenty data entries reviewed use the RPA orthography as standardised for White Hmong (Mong Daw): the vocabulary items (*dej*, *taws*, *txiv*, *dev*, *tes*, *haus*, *niam*, etc.) correspond to the White Hmong lexical forms attested in Heimbach (1979). Green Hmong (Lyman 1974) shares many of these forms but has phonological differences, particularly in the realisation of tones 3 (v) and 6 (g). Using `hmn` to label data that is specifically White Hmong is imprecise. The correct code is **mww**. If the intent is to represent a pan-Hmong citation form, this should be documented; otherwise the code should be updated to `mww`.

---

### ISSUE 24 — Systematic: b-tone contour error is level/rising confusion across six entries

**Files:** heart.js:196, love.js:203, one.js:202, sun.js:202, hello.js:196 (nyob), and any future b-final entries

The correct b-tone contour is high **level** (Chao 55 = ˥˥ sustained). The dataset uniformly transcribes b-final syllables as ˧˥ (rising from mid to high). A rising 35 contour is not used for any of the eight White Hmong tones. The pattern ˧˥ in the dataset appears to reflect an incorrect assumption that the b-tone is a "rising high" rather than a level high. This should be corrected to ˥˥ (or written as a single ˥ for brevity) across all b-final entries.

---

### ISSUE 25 — Systematic: s-tone starting point too high — ˧˩ merges s-tone with v-tone direction

**Files:** fire.js:202, hand.js:196, drink.js:196

The s-tone (Chao 21 = ˨˩) starts at low-mid register (level 2). The dataset renders it as ˧˩ (starting at mid level 3), which is the same Chao starting point used for the v-tone initial register. This means the two tones are not distinguishable from the IPA alone. The fix ˧˩ → ˨˩ for all s-final entries resolves the merger and accurately places the s-tone in the low register where Downer (1973) and Heimbach (1979) locate it.

---

## Summary table

| Word | File | RPA | Current IPA | Primary error | Corrected IPA |
|---|---|---|---|---|---|
| water | water.js:203 | dej | te˧ | j-tone ˧→˥˨; /e/→/ɛ/ | tɛ˥˨ |
| eat | eat.js:196 | noj | nɔ˧ | j-tone ˧→˥˨ | nɔ˥˨ |
| good | good.js:196 | zoo | tɕɔː˥ | no-final ˥→˧ | tɕɔː˧ |
| tree | tree.js:196 | ntoo | tɔː˥ | no-final ˥→˧; missing ⁿ- | ⁿtɔː˧ |
| moon | moon.js:202 | hli | ɬi˥ | no-final ˥→˧ | ɬi˧ |
| mother | mother.js:202 | niam | niã˥ | m-tone ˥→˨˩ˀ; missing creaky | niã˨˩ˀ |
| sun | sun.js:202 | hnub | nu˧˥ | b-tone ˧˥→˥˥; /n/→/n̥/ | n̥u˥˥ |
| father | father.js:196 | txiv | tɕi˧˩ | v-tone ˧˩→˨˦ʱ | tɕi˨˦ʱ |
| cat | cat.js:196 | miv | mi˧˩ | v-tone ˧˩→˨˦ʱ | mi˨˦ʱ |
| dog | dog.js:196 | dev | te˧˩ | v-tone ˧˩→˨˦ʱ; /e/→/ɛ/ | tɛ˨˦ʱ |
| house | house.js:203 | tsev | tɕɛ˧˩ | v-tone ˧˩→˨˦ʱ | tɕɛ˨˦ʱ |
| eye | eye.js:196 | qhov muag | kʰɔ˧˩muã˧ | v-tone ˧˩→˨˦ʱ; g-tone ˧→˦˨ʱ; /kʰ/→/qʰ/ | qʰɔ˨˦ʱmua˦˨ʱ |
| fire | fire.js:202 | taws | tɑ˧˩ | s-tone ˧˩→˨˩; /t/→/tʰ/ | tʰɑ˨˩ |
| hand | hand.js:196 | tes | te˧˩ | s-tone ˧˩→˨˩; /t/→/tʰ/; /e/→/ɛ/ | tʰɛ˨˩ |
| drink | drink.js:196 | haus | hɑu˧˩ | s-tone ˧˩→˨˩ | hɑu˨˩ |
| one | one.js:202 | ib | i˧˥ | b-tone ˧˥→˥˥ | i˥˥ |
| heart | heart.js:196 | siab | ɕiã˧˥ | b-tone ˧˥→˥˥; spurious /ã/ | sia˥˥ |
| love | love.js:203 | hlub | ɬu˧˥ | b-tone ˧˥→˥˥ | ɬu˥˥ |
| hello (nyob) | hello.js:196 | nyob | ɲɔ˧˥ | b-tone ˧˥→˥˥ | ɲɔ˥˥ |
| hello (zoo) | hello.js:196 | zoo | tɕɔː˥ | no-final ˥→˧ | tsɔː˧ |
| thanks (ua) | thanks.js:196 | ua | uã˥ | no-final ˥→˧ | ua˧ |
| thanks (tsaug) | thanks.js:196 | tsaug | tɕɑu˧ | g-tone ˧→˦˨ʱ | tsɑu˦˨ʱ |
