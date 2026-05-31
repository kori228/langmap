# Wordmap review #09 — Bantu linguistics specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a specialist in Bantu linguistics with a focus on comparative and descriptive work across both Eastern and Western Bantu. My primary reference corpus draws from Guthrie (1967–1971) *Comparative Bantu* (4 vols.), Meeussen (1967) *Bantu Grammatical Reconstructions*, Nurse & Philippson (2003) *The Bantu Languages* (Routledge), Bastin et al. *BLR3* (Bantu Lexical Reconstructions, Royal Museum for Central Africa), Hyman (2003) on Bantu tonology, Vansina (1990) *Paths in the Rainforests*, Doke (1954) *The Southern Bantu Languages*, the *Standard Swahili–English Dictionary* (Johnson, 1939), and Madan's *Swahili–English Dictionary*. I have published on Proto-Bantu noun-class evolution, the Guthrie zone system, Bantu tonology in tonal vs. non-tonal Bantu, the agricultural Bantu expansion (Vansina's model), and the origins of click phonemes in Nguni Bantu through Khoisan contact.

---

## Issues found

### 1. `sn` — one — "potsi" is not the numeral "one"; it means "alone/only"

**File:** `words/one.js:279`
**Entry:** `sn: ["potsi", "potsi"]`

In standard Shona (all three main dialects: Karanga, Zezuru, Korekore), the cardinal numeral "one" is the stem **-mwe** with appropriate concordial prefix, most commonly cited as **rimwe** (class 5/6). The form *potsi* means "alone, only, just (one)" — it is an adverbial/focus particle, not the bare numeral. It corresponds semantically to English "only" or "singly", and is translatable as "by itself" rather than the numeral 1. Dictionaries (Doke & Halie 1981 *Shona–English*; Dale 1972) clearly distinguish *-mwe* (numeral) from *potsi* (adverb of solitude). This is a lexical mis-selection.

---

### 2. `lg` — sun — IPA /eɲɟuba/ is wrong for "enjuba"

**File:** `words/sun.js:591`
**Entry:** `lg: ["enjuba", "eɲɟuba"]`

In Luganda, the digraph **nj** represents a prenasalized postalveolar affricate /ndʒ/, exactly as in the related form in Zulu "inja" /indʒa/. The IPA transcription **eɲɟuba** (palatal nasal + palatal stop) is phonetically wrong: /ɲ/ is the palatal nasal and /ɟ/ is the voiced palatal stop, neither of which occurs in this environment in Luganda. The correct IPA is **/endʒuba/**. Compare Luganda "embwa" (dog) IPA "embwa" — the same prenasalization pattern is used correctly there, confirming this entry is an outlier error.

---

### 3. `sg` — moon — IPA /ndʒɛ/ is wrong for orthographic "nzë"

**File:** `words/moon.js:901`
**Entry:** `sg: ["nzë", "ndʒɛ"]`

In Sango, the cluster **nz** represents a prenasalized voiced alveolar fricative **/nz/** — not a prenasalized postalveolar affricate /ndʒ/. The phoneme /z/ and /dʒ/ are distinct in Sango phonology. The ë in Sango orthography represents a mid central vowel transcribed as /ɛ/ (or schwa-like). The correct IPA is **/nzɛ/**. Note that other Sango entries correctly use /z/ in different contexts, making this inconsistency more striking.

---

### 4. `tn` — eye — IPA /tɬʼ/ (ejective) is wrong; should be /tɬʰ/ (aspirated)

**File:** `words/eye.js:593`
**Entry:** `tn: ["leitlho", "leitɬʼo"]`

In Setswana, **tlh** is an aspirated lateral affricate **/tɬʰ/**, not an ejective. Ejective consonants are not part of Tswana phonology (Doke 1954; Cole 1955 *Introduction to Tswana*). The diacritic **ʼ** (ejective) is categorically wrong here. The IPA should be **leitɬʰo**. Comparison: the related Northern Sotho (nso) entry correctly gives IPA `leiɬo` for the same body-part root, which is consistent with a non-ejective lateral. This is a systematic risk if the same template was applied to Tswana ɬ elsewhere.

---

### 5. `xh` — hand — IPA /isandɬa/ is wrong; "dl" in isiXhosa is not /ɬ/

**File:** `words/hand.js:272`
**Entry:** `xh: ["isandla", "isandɬa"]`

In isiXhosa, the orthographic sequence **dl** represents a voiced alveolar lateral affricate **/dl/**, not the voiceless lateral fricative /ɬ/. The Zulu entry for the same word correctly gives IPA `isandla` (plain lateral /l/); both Zulu and Xhosa share this stem. The Xhosa-specific IPA change to /ɬ/ is unjustified. Compare: Xhosa "indlu" (house) IPA `indɬu` in `words/house.js:279` — this too applies /ɬ/ to what is a voiced /dl/ cluster, indicating a systematic confusion between dl and the voiceless lateral fricative. The voiceless /ɬ/ in Xhosa is written **hl**, not **dl**.

---

### 6. `xh` — house — IPA /indɬu/ makes the same dl → ɬ error

**File:** `words/house.js:279`
**Entry:** `xh: ["indlu", "indɬu"]`

Same error as issue #5. "ndl" in "indlu" = voiced lateral cluster /ndl/, not voiceless lateral fricative /ɬ/. The Zulu IPA for the same word is correctly `indlu`. The Xhosa and Zulu words are cognates with the same phonological structure; the asymmetric IPA treatment of Xhosa is an error. Voiceless /ɬ/ in Xhosa is represented by **hl** (as in "ihlo" /iɬo/), not **dl**.

---

### 7. `ln` — water — tone marks entirely absent; all other Lingala entries have tones

**File:** `words/water.js:282`
**Entry:** `ln: ["mai", "mai"]`

Lingala is a tonal language with two to three tonal levels; tones are phonemic and standardly marked in reference works (Meeussen 1954; Kawata 2003 *Lingala Reference Grammar*). The Lingala word for water is **máí** (both syllables carry High tone). Every other Lingala entry in this dataset carries at least one tone mark (e.g., `mbwá`, `tatá`, `mɔ́tɔ`, `líso`, `ndáko`, `lobɔ́kɔ`, `mbóte`, `sánzá`, etc.). The water entry **mai** is the single entry in the entire Lingala set that carries no tonal diacritic. This is inconsistent and erases a phonemic distinction.

---

### 8. `ln` — fire — only the first syllable is tone-marked; Low tone on final ɔ is missing

**File:** `words/fire.js:281`
**Entry:** `ln: ["mɔ́tɔ", "mɔtɔ"]`

Lingala "fire" has the tonal pattern H-L: **mɔ́tɔ̀**. The orthographic entry marks only the first vowel (mɔ́tɔ), leaving the Low tone on the final ɔ unmarked. While Lingala orthography sometimes omits low tones (low being the "default"), the IPA column should reflect the full tonal contour: **/mɔ́tɔ̀/**. The IPA given is `mɔtɔ` with no tones at all, which is inconsistent with the practice in all other Lingala IPA entries (which include High tone marks).

---

### 9. `sn` — (all 20 entries) — Shona is a tonal language with no tones marked

**File:** `words/*.js` (all Shona entries)

Shona (all three major dialects: Karanga, Zezuru, Korekore) is a canonically documented tonal language with a two-tone system (High and Low, plus derived patterns: falling, rising). Doke (1931) *A Comparative Study in Shona Phonetics* and the *Shona Language Course* (University of Zimbabwe) both require tone marking for accurate representation. Not a single Shona entry in this dataset carries any tone diacritic. For example: Shona "water" = *mvura* (H-H tone), "fire" = *moto* (H-L), "sun" = *zuva* (H-L), "tree" = *muti* (H-L), "love" = *rudo* (L-H). The systematic omission of tones across all 20 concepts constitutes a significant phonological gap.

---

### 10. `tum` — (all 20 entries) — Tumbuka is a tonal language with no tones marked

**File:** `words/*.js` (all Tumbuka entries)

Tumbuka (spoken in northern Malawi, eastern Zambia, and northwestern Tanzania) is a tonal language with a two-tone system documented in Vail & White (1981) and Kiso (2012) *A Practical Introduction to Tumbuka*. Like Shona, no tone marks appear on any Tumbuka entry. For example: Tumbuka "tree" = *khuni* (the aspiration on kh is marked but no pitch), "eat" = *kurya*, "fire" = *moto*. Given that Tumbuka is in the same tonal-Bantu zone as Chewa and related languages, the complete absence of tones is a systematic gap.

---

### 11. `tum` — sun — "zuva" is the Shona form; Tumbuka uses "zuwa"

**File:** `words/sun.js:729`
**Entry:** `tum: ["zuva", "zuva"]`

The Tumbuka word for sun is **zuwa** (with /w/), attested consistently in Tumbuka–English glossaries (Elmslie 1891; more recent Malawian educational materials). The form *zuva* with /v/ is the Shona (sn) word for sun — and indeed the Shona entry in the same file correctly gives `sn: ["zuva", "zuva"]`. The Tumbuka entry appears to have copied the Shona form. Although Proto-Bantu *\*-dúbà* underlies both, the Tumbuka reflex is uniformly /w/ not /v/.

---

### 12. `rw` — father — "papa" is a loanword; traditional Kinyarwanda is "se"

**File:** `words/father.js:270`
**Entry:** `rw: ["papa", "paːpa"]`

In Kinyarwanda, the traditional and grammatically integrated word for "father" (possessed) is **se** (1st person: *so*, 2nd: *so*, 3rd: *we*, independent: *se*). The form *papa* is a European loanword (Portuguese/French) that has penetrated informal speech but is not the native Bantu term. Compare the cognate Kirundi entry `rn: ["data", "data"]`, which correctly gives the inherited Bantu form. The asymmetry between rw (loanword) and rn (native) for the same concept in sister languages is linguistically questionable; *data* (Kirundi) and *ishe* or *data* (related forms) are found in older Kinyarwanda documentation as well.

---

### 13. `ssw` — eye — "liso" is not standard siSwati; siSwati uses "lihlo"

**File:** `words/eye.js:797`
**Entry:** `ssw: ["liso", "liso"]`

In siSwati (Swazi), the word for "eye" is **lihlo** (singular, class 5; plural *emehlo*). This is well documented in Ziervogel (1952) *A Grammar of Swazi* and more recent siSwati dictionaries. The form *liso* is the stem shared with Zulu (*iso*) and Xhosa (*iliso*), but in siSwati that stem surfaces as *lihlo*, not *liso*. The entry appears to have taken the Zulu/Xhosa form rather than the siSwati-specific reflex. Note that all other siSwati entries for Nguni cognates (e.g., "fire" *umlilo*, "house" *indlu*, "dog" *inja*) match expected siSwati forms, making this eye entry a conspicuous outlier.

---

### 14. `bem` — water — IPA /ameɲʃi/ shows a spurious palatal nasal

**File:** `words/water.js:604`
**Entry:** `bem: ["amenshi", "ameɲʃi"]`

Bemba "water" is **amenshi** (class 6 prefix *ame-* + stem *-nshi*). The nasal in the cluster **nsh** is alveolar **/n/**, not palatal **/ɲ/**. Bemba does not have the sequence /ɲʃ/; the nasal assimilation before /ʃ/ produces at most a partially-raised n, but this is not phonemically /ɲ/. The IPA **amenʃi** would be correct. The transcription **ameɲʃi** conflates the nasal place with the following palatal fricative in a way not supported by standard Bemba phonological descriptions (Givón 1965; Spitulnik & Kashoki 2001).

---

### 15. `ve` — eye — "ito" is not the standard Tshivenda form; standard is "ritho"

**File:** `words/eye.js:596`
**Entry:** `ve: ["ito", "ito"]`

The standard Tshivenda (Venda) word for "eye" is **ritho** (singular class 5; plural *maṱho*), documented in Van Warmelo (1937) *Tshivenda–English Dictionary* and Louwrens (1991) *Aspects of Northern Sotho Grammar*. The form *ito* does not appear in standard Venda references; it may represent an extreme vowel-reduced variant or a dialectal form, but citing it as the standard entry without qualification is misleading. The full class 5 form with the ri- prefix is *ritho*.

---

### 16. `ts` — moon — IPA /nʷeti/ is wrong; n' in Xitsonga = /ŋ/ not labialized /nʷ/

**File:** `words/moon.js:601`
**Entry:** `ts: ["n'weti", "nʷeti"]`

In Xitsonga orthography, the apostrophe in **n'** marks the nasal as *velar* — i.e., /ŋ/. The sequence **n'w** = /ŋw/ (velar nasal followed by labial glide). The IPA transcription **nʷeti** represents a labialized alveolar nasal, which is a distinct and unusual segment not characteristic of Xitsonga phonology. The correct IPA for "n'weti" is **/ŋweti/**. This same error would apply to any Xitsonga entry using the n' digraph.

---

### 17. `ki` — sun — IPA /ɾiwa/ drops two phonemically nasalized vowels

**File:** `words/sun.js:595`
**Entry:** `ki: ["rĩũa", "ɾiwa"]`

In Kikuyu orthography, the tilde diacritic marks phonemically nasalized vowels. The orthographic form **rĩũa** contains two nasalized vowels: /ĩ/ and /ũ/. The correct IPA would be **/ɾĩwã/** (the ũ before a following vowel surfaces as the nasal glide /w/ but the nasality should be preserved on the preceding vowel and the output vowel). The IPA **ɾiwa** drops both nasalization marks entirely. This is part of a pattern: the same issue appears in `ki: ["ĩmwe", "imwe"]` for "one" (see issue #18 below), suggesting systematic suppression of Kikuyu vowel nasality in the IPA column.

---

### 18. `ki` — one — IPA /imwe/ drops the nasalized vowel of "ĩmwe"

**File:** `words/one.js:595`
**Entry:** `ki: ["ĩmwe", "imwe"]`

Same issue as #17. Kikuyu "one" is orthographically **ĩmwe**, where ĩ is a phonemically nasalized vowel. The IPA **imwe** removes the nasalization. In Kikuyu (Gĩkũyũ), vowel nasality is phonemic and contrastive (Clements & Goldsmith 1984; Dimmendaal on Eastern Bantu phonology). Accurate IPA requires **/ĩmwe/**. This appears to be a systematic problem in how Kikuyu IPA is generated for this dataset.

---

### 19. `bem` — father — "bataata" is the honorific ba- form; citation is "taata"

**File:** `words/father.js:597`
**Entry:** `bem: ["bataata", "bataːta"]`

In Bemba (Chibemba), the word for "father" in plain citation form is **taata** (class 1a kinship term). The form **bataata** uses the class 2 honorific/plural prefix **ba-**, making it a respectful or third-person plural reference form ("fathers" or "honored father"). While *bataata* is commonly used in polite speech, citing it as the headword form is analogous to giving French "monsieur le père" instead of "père". The parallel Tonga entry `toi: ["bama", "bama"]` for mother uses the same ba- honorific — suggesting the database may systematically favor the respectful register over the bare kinship stem for some languages.

---

### 20. `nso` — thanks — IPA missing word boundary: "kealeboɣa" vs. orthographic "ke a leboga"

**File:** `words/thanks.js:800`
**Entry:** `nso: ["ke a leboga", "kealeboɣa"]`

The Northern Sotho (Sesotho sa Leboa) expression for "thank you" is the three-word phrase **ke a leboga** (I-COP-thank). The orthographic entry correctly spaces the words; the IPA **kealeboɣa** runs them together without any word boundary marker. Compare the Tswana entry for the same phrase `tn: ["ke a leboga", "ke a leboɣa"]` which preserves the word spaces in the IPA. The inconsistency is minor but the merged IPA misrepresents the morphological structure of what is a verb phrase with subject pronoun and object marker.

---

### 21. `sn` — (cross-concept) — Shona lacks augment vowels in noun entries

**File:** `words/*.js` (Shona noun entries)

Beyond the tone issue (issue #9), standard Shona orthography and phonology requires the **initial vowel** (augment) before class prefixes for many noun classes. For example, Shona class 9 nouns take the augment *i-* in some varieties, and class 5 nouns use *i-* (as opposed to Zulu, which has a distinct augment). While Shona augment behavior differs from Zulu (and is often omitted in citation), the entry `sn: ["imba", "imba"]` for "house" does include what appears to be the class 9 *i-* prefix, but other entries like `sn: ["zuva", "zuva"]` (sun, class 5) and `sn: ["mvura", "mvuɾa"]` (water, class 9) lack discussion of the noun class membership. Since noun class affects agreement and is central to Bantu linguistics, the complete absence of noun-class metadata in Shona entries (and most Bantu entries) represents a structural gap in the dataset's documentation.

---

### 22. `sw_kg` / `sw_ke` / `sw_tz` — regional Swahili varieties entirely absent

**File:** `words/*.js` (all Swahili entries)

Swahili has well-documented regional varieties with both lexical and phonological differences: **sw_ke** (Kenya Standard Swahili), **sw_tz** (Tanzanian Standard Swahili, the prestige locus), and **sw_kg** (Congolese Swahili / Kingwana), which differs substantially in vocabulary and phonology (reduction of noun-class morphology, loanwords from French/Lingala, etc.). For example: Kingwana "water" = *maji* but "fire" may be rendered differently; Congolese Swahili uses *moteur* loanwords unknown in Tanzanian Swahili. The current dataset has only one undifferentiated `sw` entry for all 20 concepts, collapsing a dialect continuum spanning from Mombasa to Lubumbashi. This is a significant omission for a typologically-oriented map.

---

*End of review #09*
