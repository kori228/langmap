# Wordmap review #79 — Phonemic/phonetic broadness-policy & allophony specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a phonologist whose work centres on the boundary between phonemic and narrow-phonetic transcription — specifically the question of *which* predictable allophonic detail a broad transcription should and should not record (aspiration, post-obstruent tensing, final devoicing, nasal-place assimilation, vowel nasalization, unreleased-stop marking). My touchstone reference for the cross-linguistic phonetics of these processes is Ladefoged & Maddieson, *The Sounds of the World's Languages* (Blackwell, 1996), supplemented by the standard descriptive handbooks (e.g. the *Handbook of the IPA* illustrations for Korean, Japanese, Thai, Dutch, Russian). I have studied this project's data model closely: each `words/<concept>.js` file carries a `data` block of `<langcode>: ["surface", "ipa"]` tuples (or the object form with `alt`/`source` for multi-script languages), and the dataset's stated policy is **broadly phonemic with selective phonetic detail**. The single most useful tool for adjudicating "how broad is broad here" is the dataset's own **per-language sibling evidence**: when a language's twenty concept-entries are mutually consistent about a given allophone, a lone entry that over- or under-specifies it is almost always the error. Every issue below is anchored to that internal norm and verified verbatim against the live files. I do **not** demand new narrow detail the language's siblings don't already carry; I flag only *inconsistent* broadness — a predictable allophone recorded in one cell but left broad in its siblings (or the reverse), a notation switched mid-language, or a phonetically vacuous diacritic.

---

## Issues found

### 1. `ja_oki` — one — lone aspiration mark on a stop the rest of Okinawan leaves unaspirated
- **File:** `words/one.js` line 60
- **Current:** `["一", "tʰiːt͡ɕi"]`
- **Expected:** `["一", "tiːt͡ɕi"]`
- **Why:** This is the **only** aspirated stop in the entire Ryukyuan set (ja_oki / ja_mvi / ja_rys) across all twenty concepts — a grep for `ʰ` in those three codes returns this single hit. Every other Okinawan onset stop is transcribed unaspirated: `tida` (sun, line 60), `tiː` (hand, line 60), `t͡ɕit͡ɕi` (moon, line 60), `kadi` (eat, line 60), `kukuɾu` (heart, line 60). Okinawan does not contrast aspiration on /t/, and the dataset's own Ryukyuan norm is a broad, aspiration-free transcription; the lone `tʰ` here over-specifies a feature its siblings uniformly omit. (Ladefoged & Maddieson 1996 on aspiration as a contrastive vs. allophonic property; internal Ryukyuan sibling evidence.)

### 2. `nan` — eat — phonetically vacuous unreleased diacritic on a glottal stop, inconsistent with the same lect's other ʔ-coda
- **File:** `words/eat.js` line 73
- **Current:** `["食", "t͡siaʔ̚˦"]`
- **Expected:** `["食", "t͡siaʔ˦"]`
- **Why:** The Min Nan glottal-stop ("entering-tone") coda is transcribed two ways inside the **same** `nan` lect: with a redundant unreleased mark here (`ʔ̚`) but plain in `moon` 月娘 → `ɡueʔ˦niu˧˥` (line 73). An unreleased diacritic [˭/̚] marks the suppression of an oral-stop release burst; a glottal stop [ʔ] has no oral release to suppress, so `ʔ̚` adds nothing and is internally inconsistent with the plain `ɡueʔ` of the parallel entry. The broad value used by the lect's own sibling is plain [ʔ]. (Ladefoged & Maddieson 1996 §3 on stop release and the [ ̚ ] diacritic; internal `nan` sibling evidence.)

### 3. `ko_jeju` — thanks — missing obligatory post-obstruent tensing that every sibling (and ko_jeju itself elsewhere) records
- **File:** `words/thanks.js` line 69
- **Current:** `["고맙수다", "komap̚suda"]`
- **Expected:** `["고맙수다", "komap̚s͈uda"]`
- **Why:** In Korean, /s/ after an obstruent coda undergoes obligatory fortis-tensing (경음화) → [s͈]. The four sibling `thanks` entries that share the 고맙ㅅ… environment all record it: ko `komap̚s͈ɯmnida`, ko_kp / ko_bus / ko_yb identical (lines 66–68, 70). Crucially **ko_jeju itself applies this very rule** in `hello` 옵서 → `op̚s͈ʌje` (hello.js line 69), where /s/ after the same [p̚] coda is tensed. Leaving `su` plain here under-specifies an allophone the lect demonstrably marks elsewhere — an internal ko_jeju inconsistency, not just a cross-dialect one. (Handbook of the IPA, Korean illustration, on post-obstruent tensing; internal sibling evidence.)

### 4. `ko_kp` / `ko_yb` — hello — fortis stop written as a geminate `kk` instead of the [͈] diacritic used everywhere else in Korean
- **File:** `words/hello.js` lines 67 and 70
- **Current:** `["안녕하십니까", "annjʌŋhaɕimnikka"]`
- **Expected:** `["안녕하십니까", "annjʌŋhaɕimnik͈a"]`
- **Why:** The Korean fortis (tense) series is notated with the under-double-vertical-line diacritic throughout the corpus — [t͈] in `eat` 먹다 → `mʌk̚t͈a` (eat.js line 66), [s͈] in `thanks`/`hello` (thanks.js lines 66–68, 70; hello.js line 69). Here the fortis ㄲ of 십니까 is instead spelled as a doubled `kk`, which reads as a geminate /k.k/ rather than a single tense [k͈]. The notation should match the [s͈]/[t͈] convention the rest of Korean uses: `nik͈a`. (Handbook of the IPA, Korean; internal Korean notation norm.)

### 5. `nl` — hello — Dutch /h/ as voiceless [h] in one entry, voiced [ɦ] in all its consonants-initial siblings
- **File:** `words/hello.js` line 160
- **Current:** `["hallo", "hɑloː"]`
- **Expected:** `["hallo", "ɦɑloː"]`
- **Why:** Northern Standard Dutch realises /h/ as the voiced glottal [ɦ], and the dataset's `nl` entries are otherwise unanimous about this: `huis` → `ɦœʏs` (house.js 160), `hond` → `ɦɔnt` (dog.js 160), `hart` → `ɦɑrt` (heart.js 160), `hand` → `ɦɑnt` (hand.js 160). The lone voiceless `h` in `hallo` switches the symbol for the same phoneme mid-language with no conditioning environment to justify it. (Handbook of the IPA, Dutch illustration; internal `nl` sibling evidence.)

### 6. `ru` — hand — reduced pretonic vowel shown but the conditioning stress mark omitted, unlike its siblings
- **File:** `words/hand.js` line 101
- **Current:** `["рука", "rʊka"]`
- **Expected:** `["рука", "rʊˈka"]`
- **Why:** Russian vowel reduction is stress-conditioned, and this entry already commits to a reduced pretonic [ʊ] for unstressed о/у — which only makes sense if stress is final. Yet the stress mark is absent, whereas the `ru` siblings that show the same pretonic reduction all carry it: `вода` → `vɐˈda` (water.js 101), `собака` → `sɐˈbakɐ` (dog.js 101), `луна` → `ɫʊˈna` (moon.js 101), `отец` → `ɐˈtʲet͡s` (father.js 101), `хороший` → `xɐˈroʂɨj` (good.js 101). Showing the *effect* of stress (reduction) while hiding its *location* is internally incoherent. (Ladefoged & Maddieson 1996 on stress-conditioned reduction; internal `ru` sibling evidence.)

### 7. `ru` — tree — same omission: pretonic reduction recorded, stress mark missing
- **File:** `words/tree.js` line 101
- **Current:** `["дерево", "dʲerʲɪvɐ"]`
- **Expected:** `["дерево", "ˈdʲerʲɪvə"]`
- **Why:** Дерево is stressed on the first syllable, and the transcription already reflects post-tonic reduction (the final ⟨о⟩ → a reduced vowel). But it carries no stress mark, against the `ru` norm established in #6, and it even reduces the final ⟨о⟩ to [ɐ] where the parallel post-tonic reduction in `кошка` → `ˈkoʂkə` (cat.js 101) uses [ə]; the matching value is `ˈdʲerʲɪvə`. The cell both omits the sibling-standard stress mark and uses a more open post-tonic reduction vowel than its closest sibling. (Internal `ru` sibling evidence; Handbook of the IPA, Russian, on the [ə]/[ɐ] reduction degrees.)

### 8. `th` — water — long vowel against the unanimous short vowel of every Tai sibling
- **File:** `words/water.js` line 79
- **Current:** `["น้ำ", "naːm˧˥"]`
- **Expected:** `["น้ำ", "nam˧˥"]`
- **Why:** น้ำ "water" is the textbook case of an orthographically-long vowel pronounced short in citation Thai, and the dataset's own Tai-Kadai siblings agree on the short value: th_isan / th_n / th_s all `nam˧˥` (water.js lines 192–194) and `soa` (Thai Song) `nam˧˩` (line 148). Only the standard `th` cell writes the long [aː]. With four sibling entries unanimous on short [a] and the well-known irregular shortening of this exact lexeme, the lone long vowel is the outlier. (Handbook of the IPA, Thai, on the irregular short realization of น้ำ; internal Tai sibling evidence.)

### 9. `hns` — good — geminate affricate transcribed as a [t]+[tʃʰ] stop-plus-affricate cluster
- **File:** `words/good.js` line 83
- **Current:** `["accha", "attʃʰa"]`
- **Expected:** `["accha", "at͡ʃt͡ʃʰa"]` (or at least `at͡ʃʰa`)
- **Why:** Hindi अच्छा is a geminate (long) palatal affricate /tʃː/, transcribed in the standard cells with the affricate symbol on **both** halves: hi `at͡ʃt͡ʃʰaː`, ur `at͡ʃt͡ʃʰaː` (good.js lines 82, 88). The hns value instead writes a plain alveolar stop `t` for the first half (`a-t-tʃʰ-a`), positing a [t]+[t͡ʃʰ] cluster that does not exist in the word — the geminate is affricate throughout. The first element must be an affricate, matching the Hindustani siblings. (Ladefoged & Maddieson 1996 on affricate geminates; internal hi/ur sibling evidence.)

### 10. `hns` — moon — nasal rendered as a full [n] segment, against the nasalized-vowel treatment the same lect uses for `eye`
- **File:** `words/moon.js` line 83
- **Current:** `["caand", "tʃaːnd"]`
- **Expected:** `["caand", "t͡ʃãːd"]`
- **Why:** The Hindustani etymon चाँद carries a nasalized vowel (chandrabindu), recorded as such in the standard cells: hi `t͡ʃãːd`, ur `t͡ʃãːd` (moon.js lines 82, 88). The hns cell instead denasalizes the vowel and inserts a full nasal consonant `aːn` — but **hns itself keeps the nasalized-vowel treatment** in `eye` आँख → `ãːkʰ` (eye.js line 83). So within hns the same nasalization phenomenon is broad-nasalized in one entry and segmentalized in another; the `eye`-consistent value is `t͡ʃãːd`. (Handbook of the IPA on phonemic vowel nasalization; internal hns sibling evidence.)

### 11. `el` — tree — prenasalized cluster fine, but the sibling-standard stress mark is missing
- **File:** `words/tree.js` line 159
- **Current:** `["δέντρο", "ðendɾo"]`
- **Expected:** `["δέντρο", "ˈðendɾo"]`
- **Why:** The Greek `el` entries mark lexical stress on essentially every polysyllable — `ˈɣata`, `ˈskilos`, `paˈteɾas`, `feˈŋɡaɾi`, `aˈɣapi`, `miˈteɾa` (cat/dog/father/moon/love/mother, all line 159) — and the prenasalized ⟨ντ⟩ → [nd] here is correctly broad. But δέντρο (stress on the antepenult-of-two, δέ-) carries no stress mark, breaking the `el` norm. (`τρώω` → `tɾoo`, `φωτιά` → `fotʲa`, `ευχαριστώ` → `efxaɾisto` share the same omission and should be reviewed together: `ˈtɾoo`, `foˈtʲa`, `efxaɾiˈsto`.) Flagged as the cleanest case because the polysyllable and stress position are unambiguous. (Internal `el` sibling evidence; Handbook of the IPA, Greek.)

### 12. `pt_eu` — love — pretonic reduction recorded but stress mark omitted, unlike the European-Portuguese siblings
- **File:** `words/love.js` line 99
- **Current:** `["amor", "ɐmoɾ"]`
- **Expected:** `["amor", "ɐˈmoɾ"]`
- **Why:** European Portuguese reduces unstressed /a/ to [ɐ], and this cell already shows that pretonic [ɐ] — which presupposes final stress on *-mor*. Yet no stress mark is given, whereas the oxytone `pt_eu` siblings with identical structure mark it: `beber` → `bɨˈbɛɾ`, `comer` → `kuˈmɛɾ` (drink/eat, line 99), `coração` → `kuɾɐˈsɐ̃w` (heart.js 99), `obrigado` → `obɾiˈɡadu` (thanks.js 99). As in the Russian cases (#6–#7), the transcription shows reduction's effect while hiding its cause. (Ladefoged & Maddieson 1996 on stress-conditioned reduction; internal `pt_eu` sibling evidence.)

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
