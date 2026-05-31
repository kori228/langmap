# Wordmap review #10 — West African Niger-Congo specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I work on Niger-Congo tonal systems, Akan vowel harmony, and Atlantic consonant mutation. My primary references are Williamson & Blench (2000) *Niger-Congo: an overview*; Hyman (1975) *A Theory of Phonological Weight* and Hyman (2003) "Tone systems"; Welmers (1973) *African Language Structures*; the Awoyale *Comprehensive Yoruba–English Dictionary*; Echeruo (1998) *Igbo–English Dictionary*; Christaller (1875/1933) *Dictionary of the Asante and Fante Language*; Westermann & Bryan (1952) *Languages of West Africa*; Boyd (1989) on Adamawa; Creissels et al. (2008) on Mande; Doneux (1975) on Atlantic; the SIL *Fulfulde Lexicon*; and Greenberg (1963) *The Languages of Africa*.

---

## Issues found

### 1. `yo` — water — missing tone marks on orthographic form

**File:** `words/water.js`
**Entry:** `yo: ["omi", "omi"]`

The Yoruba word for water is /omi/ with a high tone on *o* and a mid tone on *mi*. In standard Yoruba orthography the vowels carry diacritics: `omi` should be `omi` with a high-tone diacritic on the first syllable (`ómi` or, since Yoruba treats the opening vowel as H, many dictionaries write `omi` with the H on *o*). The Awoyale dictionary gives **òmi** (L-M) or **omi** depending on dialect, but tone is always marked. The current orthographic form is entirely bare of tone marks, which violates the ISO/SIL Yoruba orthography convention and makes the entry indistinguishable from a toneless language. The IPA field likewise shows `omi` with no diacritics, so neither field carries tonal information.

---

### 2. `yo` — drink — missing tone marks

**File:** `words/drink.js`
**Entry:** `yo: ["mu", "mu"]`

Yoruba *mu* (to drink) is a high-tone monosyllable: orthographic **mú**, IPA /mú/. Both fields are bare. For a strictly tonal language this is linguistically inaccurate.

---

### 3. `yo` — tree — missing tone marks

**File:** `words/tree.js`
**Entry:** `yo: ["igi", "iɡi"]`

Standard Yoruba orthography: **igi** (low–low), IPA /ìɡì/. Neither field carries tone diacritics.

---

### 4. `yo` — eat — missing initial tone

**File:** `words/eat.js`
**Entry:** `yo: ["jẹ", "dʒɛ"]`

*jẹ* (to eat) is a high-tone verb: **jẹ́** /dʒɛ́/. The acute on ẹ is absent; the IPA field also lacks the high-tone mark. Compare the consistent marking on `bàbá`, `ìfẹ́`, etc., which shows the dataset intends to mark tone — making the bare `jẹ` an oversight rather than a policy choice.

---

### 5. `yo` — mother — IPA /ìjá/ correct but orthography `ìyá` inconsistency note

**File:** `words/mother.js`
**Entry:** `yo: ["ìyá", "ìjá"]`

This entry is internally consistent: Yoruba orthographic ⟨y⟩ maps to IPA /j/, so `ìjá` is correct. No error here, flagged only to note consistency with the rest of the dataset. (Not counted as a full issue.)

---

### 6. `ig` — mmiri — IPA syllabicity misrepresented

**File:** `words/water.js`
**Entry:** `ig: ["mmiri", "mːiɾi"]`

Igbo *mmiri* is a bisyllabic word [m̩.mi.ɾi] where the initial *m* is a syllabic nasal carrying its own tone (typically high). The IPA `mːiɾi` transcribes it as a geminate *m* followed by a rhotic-final syllable, losing the syllabic-nasal status and the associated tonal slot. A defensible IPA would be [m̩.mí.ɾí] or at minimum [mːí.ɾí] with high-tone marks. Neither the orthography nor the IPA field marks tone in any Igbo entry across the entire dataset — a systematic omission for a language with 2-tone + downstep.

---

### 7. `ig` — nkịta — nasalization of initial cluster

**File:** `words/dog.js`
**Entry:** `ig: ["nkịta", "ŋkɪta"]`

The transcription `ŋkɪta` replaces the orthographic prenasalized stop ⟨nk⟩ with a velar nasal + stop. In Igbo phonology ⟨nk⟩ in this position is a homorganic prenasalized stop /ŋk/, so the IPA rendering is correct in principle. However the dot-under ị (pharyngeal/ATR-retracted vowel) maps to IPA /ɪ/, which is acceptable but drops the pharyngealization feature that some Igbo phonologists (including Williamson 1966) treat as distinct from simple lax /ɪ/. Notation is defensible but lossy.

---

### 8. `ig` — ọkụ — dot-under vowels lose ATR contrast in IPA

**File:** `words/fire.js`
**Entry:** `ig: ["ọkụ", "ɔkʊ"]`

Igbo dot-under vowels ọ, ụ are typically analyzed as /ɔ, ʊ/ (−ATR), which the IPA column correctly renders. However, this is a one-feature shorthand: Igbo vowel harmony requires specifying the full [±ATR] value of every vowel in the word, and the IPA `ɔkʊ` does not signal that both vowels belong to the same (−ATR) set. This is a systematic representation gap across all Igbo entries.

---

### 9. `ak` — owia (sun) — IPA /oɥia/ uses wrong glide

**File:** `words/sun.js`
**Entry:** `ak: ["owia", "oɥia"]`

The Twi/Akan form *owia* (sun) has a labio-velar glide /w/, not the labio-palatal glide /ɥ/ (which is characteristic of French *nuit*). IPA /oɥia/ is incorrect; the correct transcription is /owia/ or, in more precise Twi phonology, /ow̹ia/ with rounded glide. The symbol /ɥ/ does not occur in Akan phonological inventories.

---

### 10. `ak` — nsuo — missing ATR and tone

**File:** `words/water.js`
**Entry:** `ak: ["nsuo", "nsuo"]`

Twi *nsuo* (water) is a Standard Twi noun with high tone on *suo*: **nsúo** /nsúo/. Both orthographic and IPA fields are toneless. Akan is a tonal language with documented 2-level tone (±high) plus downstep; the omission is systematic across all `ak` entries and is particularly conspicuous for a language whose ATR vowel harmony is one of the most-studied features in West African phonology. The vowel *uo* also involves an ATR+ sequence that is unmarked in the current IPA.

---

### 11. `ak` — aniwa (eye) — non-standard form

**File:** `words/eye.js`
**Entry:** `ak: ["aniwa", "aniwa"]`

The standard Twi (Asante/Akuapem) word for eye is **ani** /ani/ or **aniwa** in some dialects. The form *aniwa* is attested in some Fante-influenced sources but is not the neutral citation form; Christaller (1875) gives **aniwá** (eye-ball) as a compound. The bare form `aniwa` without a tone mark and without specifying the Twi sub-dialect is misleading. If the Fante form is intended, that should be noted; if Asante Twi, `ani` is preferred.

---

### 12. `ff` — ndiyam — IPA missing prenasalization feature

**File:** `words/water.js`
**Entry:** `ff: ["ndiyam", "ndijam"]`

Pulaar/Fulfulde *ndiyam* (water, noun class *ndi-*) has a prenasalized initial /nd/. The IPA correctly writes `ndijam`. However, the final *-m* is a noun class suffix marker that is actually realized as a bilabial nasal coda, but in rapid speech in many Fulfulde dialects it is syllabic: [ndi.jam]. More importantly, Fulfulde is tonal in northern dialects (e.g., Sokoto Fulfulde has H/L tone contrast); the IPA gives no tonal information. Also `ndijam` would be better rendered `ndijàm` with low tone on the final syllable.

---

### 13. `ff` — good — lexical choice issue

**File:** `words/good.js`
**Entry:** `ff: ["jam", "dʒam"]`

Fulfulde/Pulaar *jam* primarily means 'peace, well-being' (cf. greeting *jam tan* 'just peace'). For 'good' as an adjective, the more standard citation form is **moƴƴo** or **moɗɗo** (good/fine as adjective). Using *jam* for 'good' is a semantic conflation common in learner materials but is rejected by descriptive grammarians (Boyd 1989; Arnott 1970). The entry is confusable with the greeting particle.

---

### 14. `ff` — love — IPA transcription of implosive

**File:** `words/love.js`
**Entry:** `ff: ["yiɗde", "jiɗːe"]`

The Fulfulde verb *yiɗde* (to love/like) contains a retroflex implosive ɗ, which the orthography marks with a hook-d ⟨ɗ⟩ and the IPA with ɗ — this is correct. However `jiɗːe` shows a geminate implosive (ɗː), which is phonetically unusual; Fulfulde geminates are typically analyzed as long consonants only for plain stops and sonorants, not for implosives. The correct IPA is [jiɗe] or [jiˀɗe] (with glottalization), not [jiɗːe].

---

### 15. `ee` — nyo (good) — IPA /ɲo/ misrepresents Ewe phonology

**File:** `words/good.js`
**Entry:** `ee: ["nyo", "ɲo"]`

In Ewe, the digraph ⟨ny⟩ does represent a palatal nasal, so IPA /ɲo/ is correct as a segmental transcription. However, Ewe is a tonal language with 3–4 tones (Westermann 1930); neither the orthographic form nor the IPA carries any tone mark. The Ewe word *nyo* (good) has a mid or high tone; the absence of tonal marking is a systematic omission across all `ee` entries (all 20 entries reviewed are unmarked for tone).

---

### 16. `fon` — sin (water) — questionable lexical item

**File:** `words/water.js`
**Entry:** `fon: ["sin", "sĩ"]`

The standard Fon (Fongbe) word for water is **sin** with a nasalized vowel, which is represented in the IPA as `sĩ`. This is phonetically acceptable. However, multiple Fongbe references (Lefebvre & Brousseau 2002; Capo 1991) give the form as **sin** /sĩ/ only in some contexts; the more general Fon word is **sin** but in Abomey Fon the form is closer to **sin** ~ **yi**. The nasalized vowel in the IPA is correct, but the orthographic form `sin` lacks a tilde or any nasalization diacritic, creating an inconsistency between the orthographic and IPA representations.

---

### 17. `fon` — dog — orthographic nasal not in IPA

**File:** `words/dog.js`
**Entry:** `fon: ["avun", "avũ"]`

The Fon word for dog is written *avun* with a final ⟨n⟩, but the IPA gives `avũ` — a nasalized vowel with no final consonant. In Fongbe, final ⟨n⟩ after a vowel marks nasalization of that vowel rather than a separate nasal consonant (Capo 1991). The IPA `avũ` is therefore the correct representation. However the mismatch between the orthographic ⟨n⟩ and the IPA (which omits any nasal consonant) may confuse users who expect the IPA to mirror the written form. The representation is technically defensible but requires a note that ⟨Vn#⟩ → /Ṽ/ in Fon.

---

### 18. `sg` — ngu (water) — IPA /ŋɡu/ adds a stop not present

**File:** `words/water.js`
**Entry:** `sg: ["ngu", "ŋɡu"]`

Sango *ngu* (water) has a prenasalized velar stop initial in some analyses, but the dominant description of Sango (Samarin 1967; Diki-Kidiri 1977) treats the initial as simply a velar nasal /ŋ/ with a following vowel: /ŋù/ (with low tone). The IPA `ŋɡu` implies a full prenasalized stop [ŋɡ], which may over-represent the Sango phonology. More critically, the IPA entirely omits the low tone (grave diacritic): the correct IPA is /ŋù/ or /ŋɡù/.

---

### 19. `sg` — nzë (moon) — IPA /ndʒɛ/ misrepresents the fricative cluster

**File:** `words/moon.js`
**Entry:** `sg: ["nzë", "ndʒɛ"]`

Sango *nzë* (moon) contains a prenasalized alveolar fricative /nz/ — a prenasalized sibilant, not an affricate. The IPA `ndʒɛ` replaces /nz/ with /ndʒ/ (prenasalized palato-alveolar affricate), which is a distinct phoneme in Sango. The correct IPA is /nzɛ/ with the appropriate tone mark. This is a categorical phoneme misidentification.

---

### 20. `sg` — nzöni (good) — IPA vowel /nzøni/ uses front rounded vowel

**File:** `words/good.js`
**Entry:** `sg: ["nzöni", "nzøni"]`

Sango *nzöni* uses the diaeresis ⟨ö⟩ as a Sango orthographic convention to mark a mid-central or schwa-like vowel, which varies in realization. The IPA `nzøni` uses /ø/ — the close-mid front rounded vowel of French/Swedish — which is probably not the intended phoneme. Diki-Kidiri's Sango lexicon transcribes this vowel as /ə/ (mid-central unrounded) or /o/ depending on context. The /ø/ rendering is an over-Europeanization of the vowel quality.

---

### 21. `wo` — fire — lexical item 'safara' is Arabic loanword

**File:** `words/fire.js`
**Entry:** `wo: ["safara", "safaɾa"]`

Wolof *safara* is a borrowing from Arabic *siḥr* / via a Mandé intermediary, and it specifically means 'charm, magical preparation, amulet' or 'burned offerings/incense' in Wolof religious contexts — not simply 'fire'. The neutral Wolof word for fire is **dëkk** (in some dialects) or more commonly **safara** is only used for ritual fire/fumigation. The primary Wolof word for fire in non-ritual contexts is **wax** (northern dialects) or more typically **dëkk bu tang** (hot place). Several recent Wolof dictionaries (Diouf 2003) list the basic word for fire as **tànn** or give **safara** only under the ritual/incense sense. Using *safara* as the default form for 'fire' conflates a cultural/religious register item with a basic vocabulary item.

---

### 22. `bm` — eat — 'dumuni' is a noun, not a verb

**File:** `words/eat.js`
**Entry:** `bm: ["dumuni", "dumuni"]`

Bambara *dumuni* is a verbal noun / gerund ('the act of eating, a meal') rather than the bare verb. The infinitive/citation form of the verb 'to eat' in Bambara is **dun** (or **don** in some dialects). Using the nominalized form *dumuni* for the concept 'eat' (verb) is a register/category mismatch. Creissels & Grégoire (1993) consistently list **dun** as the verb stem.

---

### 23. `bm` — good — 'ka ɲi' is a predicate construction, not a lexical adjective

**File:** `words/good.js`
**Entry:** `bm: ["ka ɲi", "ka ɲi"]`

Bambara *ka ɲi* is the predicative construction meaning 'it is good / to be good' — the auxiliary *ka* is the infinitive/equative particle. The adjectival/bare form used attributively is simply **ɲi** or the nominalized **ɲɛya** (goodness). Representing a full predicate clause as the entry for the adjective 'good' is inconsistent with how other languages in the dataset treat adjectives (e.g., `wo: ["baax", ...]` which is the bare adjective root).

---

### 24. `gaa` — water — tone missing; drink = water (homophony unmarked)

**File:** `words/water.js` and `words/drink.js`
**Entries:** `gaa: ["nu", "nu"]` (water) and `gaa: ["nu", "nu"]` (drink)

Ga *nu* means both 'water' and 'to drink', distinguished primarily by tone and syntactic position. The IPA `nu` for both entries lacks any tone mark. Kropp Dakubu (1987) transcribes water as **nú** (high tone) and the verb drink as **nu** (mid/low). Leaving both entries as bare `nu` with identical IPA makes the dataset appear to conflate two distinct lexical items. At minimum, the tone contrast should be marked.

---

### 25. `kbp` — father — IPA /tʃaː/ for ⟨caa⟩

**File:** `words/father.js`
**Entry:** `kbp: ["caa", "tʃaː"]`

Kabiye (Kabiyè) uses ⟨c⟩ for a palatal stop /c/ (as in IPA), not for the affricate /tʃ/. The IPA `tʃaː` misidentifies the Kabiye phoneme: it should be /caː/ (palatal stop + long vowel). Palatal stops /c, ɟ/ are well documented in Gur languages including Kabiye (Delord 1976); rendering /c/ as /tʃ/ is a systematic affricate-for-stop error.

---

### 26. `dag` — water — vowel quality in IPA

**File:** `words/water.js`
**Entry:** `dag: ["kom", "kɔm"]`

Dagbani *kom* (water) is standardly transcribed with a mid-back vowel /o/ (as in the orthographic ⟨o⟩), not the open-mid /ɔ/. Olawale Adesanya and SIL Dagbani materials transcribe this as /kom/ ~ /kɔm/ dialectally, but the standard Tamale-dialect Dagbani form (which is the prestige form) has /o/, not /ɔ/. The IPA `kɔm` over-opens the vowel relative to native-speaker and published descriptions (Olawale & Kantanka 2005). Compare `mos: ["koom", "koːm"]` (Mooré), the cognate form, which correctly uses /o/.

---

### 27. `ee` — dzo (fire) — missing tone

**File:** `words/fire.js`
**Entry:** `ee: ["dzo", "dzo"]`

Ewe *dzo* (fire) is a high-tone syllable in virtually all Ewe dialects (Westermann 1930; Ansre 1961). The IPA `dzo` carries no tone diacritic. This is part of the systematic Ewe tone-marking omission (see issue 15), but the fire entry is especially salient because *dzo* is also the root of the Ewe deity name Dzo and is a core vocabulary item used as a test case in Ewe tonal studies.

---

### 28. `snk` — jiyi (water) — reduplication may reflect citation artifact

**File:** `words/water.js`
**Entry:** `snk: ["jiyi", "dʒiji"]`

Soninke *jiyi* (water) appears to be a reduplicated or inflected form. The basic Soninke root for water is **ji** /dʒi/ (cognate with Manding *ji*). The form *jiyi* is attested but is the possessed/definite form ('the water') rather than the bare citation form. Diallo (1983) *Lexique Soninké-Français* gives **ji** as the stem. Presenting *jiyi* as the default headword is equivalent to using 'the water' rather than 'water' for an English entry.

---

### Summary table

| # | Code | Concept | Type of issue |
|---|------|---------|---------------|
| 1 | yo | water | Tone marks absent (both fields) |
| 2 | yo | drink | Tone marks absent |
| 3 | yo | tree | Tone marks absent |
| 4 | yo | eat | High-tone mark absent on verb |
| 6 | ig | water | Syllabic nasal misrepresented as geminate; no tone |
| 7 | ig | dog | ATR vowel /ɪ/ under-specified |
| 8 | ig | fire | Systematic ATR harmony not encoded in IPA |
| 9 | ak | sun | Wrong IPA glide /ɥ/ instead of /w/ |
| 10 | ak | water | Tone and ATR absent throughout |
| 11 | ak | eye | Non-standard dialectal form, no sub-dialect label |
| 12 | ff | water | Tone absent in tonal Fulfulde dialects |
| 13 | ff | good | *jam* = peace/well-being, not 'good' (adj.) |
| 14 | ff | love | Geminate implosive /ɗː/ phonologically invalid |
| 15 | ee | good | Systematic tone-mark omission across all Ewe entries |
| 16 | fon | water | Orthographic form lacks nasalization diacritic |
| 17 | fon | dog | Orth./IPA mismatch for nasal-final vowel convention |
| 18 | sg | water | /ŋɡu/ adds stop; low tone absent |
| 19 | sg | moon | /ndʒɛ/ misidentifies prenasalized fricative /nz/ |
| 20 | sg | good | /ø/ incorrect for Sango ⟨ö⟩; should be /ə/ |
| 21 | wo | fire | *safara* = ritual/incense fire, not basic 'fire' |
| 22 | bm | eat | *dumuni* is a noun (meal), not the verb stem |
| 23 | bm | good | *ka ɲi* is a predicate clause, not a bare adjective |
| 24 | gaa | water/drink | Homophony unresolved; tone absent |
| 25 | kbp | father | /tʃ/ used for palatal stop /c/ |
| 26 | dag | water | /ɔ/ over-opens vowel; standard form has /o/ |
| 27 | ee | fire | Tone absent on high-tone syllable *dzo* |
| 28 | snk | water | *jiyi* is definite/possessed form, not citation form |
