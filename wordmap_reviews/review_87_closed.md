# Wordmap review #87 — Slavic round-2 audit

## Reviewer self-introduction (ペルソナ自己紹介)

I am a Slavic-focused historical phonologist and lexicographer. My day-to-day reference shelf for this round: Comrie & Corbett's *The Slavonic Languages* (Routledge 1993) for cross-Slavic citation forms and phoneme inventories; Lunt's *Old Church Slavonic Grammar* (7th ed., 2001) for OCS (`cu`) and Old East Slavic (`orv`); Lunt's *Old Russian Phonology* and Zaliznjak for `orv`; Sussex & Cubberley's *The Slavic Languages* (CUP 2006); the *Handbook of the IPA* (1999) and *Illustrations of the IPA* for Russian (Padgett & Tabain 2005), Ukrainian (Pompino-Marschall et al. 2017), Polish (Jassem 2003), Czech (Dankovičová 1997), Slovak (Hanulíková & Hamann 2010), Slovene (Šuštaršič et al. 1999), Croatian (Landau et al. 1999), Bulgarian (Klagstad 1958, Ternes & Vladimirova-Buhtz 1999), Macedonian (Friedman 2002); the dataset's own conventions in `docs/words/CONTRIBUTING.md` (the `[surface, ipa]` tuple, `ˈ` primary stress, `t͡s`/`t͡ʃ` ligatures, vocalic-r `r̩`, `ɫ` for Russian hard /l/); and a verbatim re-read of the live 20 `words/*.js` files, plus a spot-check of round-#80 fixes (still clean — no regressions detected in the Slavic block).

**Scope check.** I verified the language list against the actual files. Present and audited: `ru, uk, be, pl, cs, sk, sl, sr, hr, bs, mk, bg, cu, orv, hsb, dsb, csb, szl, rue, rup, ruq` (Rusyn `rue`, Aromanian `rup` and Megleno-Romanian `ruq` are *not* Slavic — they share the geographic cluster but I do not red-team them here as Slavic). Absent (despite the prompt's "verify which exist"): `me` (Montenegrin), `ru_oid`, `pjs`, `pck`, `sx` — no entries anywhere in `words/*.js`. The absence of `me` is the more interesting one given the explicit BCMS scope; I flag it once below (#18) rather than 20 times.

---

## Issues found

### 1. `uk` — water — initial /v/ before a vowel transcribed as ⟨w⟩; primary stress unmarked
- **File:** `words/water.js` line 163
- **Current:** `["вода", "wɔdɑ"]`
- **Expected:** `["вода", "vɔˈdɑ"]` (or `[ʋɔˈdɑ]`)
- **Why:** Ukrainian /v/ surfaces as the labio-velar approximant [w] only in the coda — i.e. word-finally and before a following consonant ("вовк", "любо́в"). Before a *vowel* (as here, в- + о-) it is the labiodental [v] or, allophonically, [ʋ]. The Pompino-Marschall et al. 2017 *JIPA* illustration of Ukrainian is explicit on this distribution. Additionally, lexical stress in Ukrainian "вода́" is final (oxytone, *vodá*), and the dataset marks `ˈ` for Russian (`ru: ["вода", "vɐˈda"]` immediately above on line 101) and for Polish, Croatian, Macedonian, etc. on the same word — so the missing `ˈ` here is a local omission, not a convention.

### 2. `uk` — fire — same word-initial /v/ → ⟨w⟩ defect; stress unmarked (instance 2 of the same systematic uk problem)
- **File:** `words/fire.js` line 163
- **Current:** `["вогонь", "wɔɦɔnʲ"]`
- **Expected:** `["вогонь", "woˈɦonʲ]` (or `[ʋoˈɦonʲ]`)
- **Why:** "вого́нь" begins with в- + о-; same allophonic rule as #1 — [w] is wrong word-initially before a vowel, [v]/[ʋ] is required. Stress is on the second syllable in standard Ukrainian. The `ɦ` itself is correctly distinguished from Russian `ɡ` (compare `ru: ["огонь", "ɐˈɡonʲ"]` on line 101) — that part is fine.

### 3. `cs` / `sk` — primary stress on the initial syllable is never marked, despite being phonemic-conventional and marked everywhere else
- **Files & lines (multisyllabic entries only; monosyllables exempt):**
  - `cat.js` 309 `cs: ["kočka", "kot͡ʃka"]`, 310 `sk: ["mačka", "mat͡ʃka"]`
  - `dog.js` — n/a (monosyllabic)
  - `drink.js` 309 `cs ["pít","piːt"]` mono ok; 310 `sk: ["piť","pɪc"]` mono ok
  - `eat.js` 309 `cs ["jíst","jiːst"]` mono ok; 310 `sk: ["jesť","jɛsc"]` mono ok
  - `eye.js` 309 `cs ["oko","oko"]`, 310 `sk ["oko","oko"]`
  - `father.js` 309 `cs ["otec","otɛt͡s"]`, 310 `sk ["otec","otɛt͡s"]`
  - `fire.js` 315 `cs ["oheň","oɦɛɲ"]`, 316 `sk ["oheň","oɦeɲ"]`
  - `good.js` 309 `cs ["dobrý","dobriː"]`, 310 `sk ["dobrý","dobriː"]`
  - `hand.js` 309 `cs ["ruka","ruka"]`, 310 `sk ["ruka","ruka"]`
  - `heart.js` 309 `cs ["srdce","sr̩t͡sɛ"]`, 310 `sk ["srdce","sr̩t͡sɛ"]`
  - `hello.js` 309 `cs ["ahoj","aɦoj"]`, 310 `sk ["ahoj","aɦoj"]`
  - `love.js` 316 `cs ["láska","laːska"]`, 317 `sk ["láska","laːska"]`
  - `moon.js` 315 `cs ["měsíc","mɲɛsiːt͡s"]`, 316 `sk ["mesiac","mɛsɪat͡s"]`
  - `mother.js` 315 `cs ["matka","matka"]`, 316 `sk ["matka","matka"]`
  - `one.js` 315 `cs ["jeden","jɛdɛn"]`, 316 `sk ["jeden","jɛdɛn"]`
  - `sun.js` 315 `cs ["slunce","slunt͡sɛ"]`, 316 `sk ["slnko","sl̩nko"]`
  - `thanks.js` 309 `cs ["děkuji","ɟɛkuji"]`, 310 `sk ["ďakujem","ɟakujɛm"]`
  - `water.js` 316 `cs ["voda","voda"]`, 317 `sk ["voda","voda"]`
- **Expected:** prepend `ˈ` to the first syllable, e.g. `cs ["kočka","ˈkot͡ʃka"]`, `cs ["dobrý","ˈdobriː"]`, `cs ["měsíc","ˈmɲɛsiːt͡s"]`, `sk ["jeden","ˈjɛdɛn"]`, etc.
- **Why:** Czech and Slovak have **fixed word-initial primary stress** (Dankovičová 1997 §"Stress"; Hanulíková & Hamann 2010 §3). The dataset's own policy marks `ˈ` for fixed-initial stress in Polish (e.g. `pl: ["matka","ˈmatka"]` line 161 of `mother.js`), Upper Sorbian (`hsb ["ruka","ˈruka"]`), Lower Sorbian (`dsb ["ruka","ˈruka"]`), Kashubian, Macedonian, Slovene — every other fixed-stress Slavic — but the entire `cs`/`sk` block is unmarked across all 20 files. This is one systematic omission, not 30 independent typos; per the "fix all variants of one family together" guidance it should be repaired as a single sweep.

### 4. `sr` (Cyrillic) — primary stress never marked, even though the orthographic-twin `hr` and `bs` mark it on the same word
- **Files & lines (representative; the pattern is exhaustive across all 20 files):**
  - `cat.js` 312 `sr ["мачка","mat͡ʃka"]`  vs hr 880 `["mačka","ˈmaːt͡ʃka"]`, bs 881 `["mačka","ˈmat͡ʃka"]`
  - `eye.js` 312 `sr ["око","ɔkɔ"]`  vs hr 880 `["oko","ˈoːko"]`, bs 881 `["oko","ˈoko"]`
  - `father.js` 312 `sr ["отац","otat͡s"]`  vs hr 880 `["otac","ˈotat͡s"]`, bs 881 `["otac","ˈotat͡s"]`
  - `hand.js` 312 `sr ["рука","ruka"]`  vs hr 880 `["ruka","ˈruːka"]`, bs 881 `["ruka","ˈruka"]`
  - `mother.js` 318 `sr ["мајка","majka"]`  vs hr 886 `["majka","ˈmaːjka"]`, bs 887 `["majka","ˈmajka"]`
  - `one.js` 318 `sr ["један","jɛdan"]`  vs hr 886 `["jedan","ˈjɛdan"]`, bs 887 `["jedan","ˈjɛdan"]`
  - `eat.js` 312 `sr ["јести","jɛsti"]`  vs hr 873 `["jesti","ˈjɛsti"]`, bs 874 `["jesti","ˈjɛsti"]`
  - `drink.js` 312 `sr ["пити","piti"]`  vs hr 880 `["piti","ˈpiːti"]`, bs 881 `["piti","ˈpiti"]`
  - `water.js` 319 `sr ["вода","ʋoda"]`  vs hr 880 `["voda","ˈʋoda"]`, bs 881 `["voda","ˈvoda"]`
  - `moon.js` 318 `sr ["месец","mɛsɛt͡s"]`  vs hr 886 `["mjesec","ˈmjeːset͡s"]`, bs 887 `["mjesec","ˈmjɛsets"]`
  - `sun.js` 318 `sr ["сунце","sunt͡se"]`  vs hr 886 `["sunce","ˈsuːnt͡se"]`, bs 887 `["sunce","ˈsunt͡se"]`
  - `tree.js` 312 `sr ["дрво","dr̩ʋo"]`  vs hr 880 `["drvo","ˈdr̩vo"]`, bs 881 `["drvo","ˈdr̩vo"]`
- **Expected:** mirror the hr/bs marking on every multisyllabic sr entry — e.g. `sr ["мачка","ˈmat͡ʃka"]`, `sr ["око","ˈɔkɔ"]`, `sr ["рука","ˈruka"]`, `sr ["мајка","ˈmajka"]`, `sr ["вода","ˈʋoda"]`, etc.
- **Why:** sr and hr/bs are the same dialect base (Štokavian) in different scripts; the dataset already documents this with the "Cyrillic~Latin twin" rationale (see prompt). Marking stress on hr but not on sr violates the documented BCMS twinning. It is also documented project policy (memory: `feedback_cross_sibling_role_consistency.md`) that role/marking consistency across siblings is required.

### 5. `cs`/`sk`/`bs` — vowel length not consistently marked across BCMS-equivalent and Slovene cognates
- **File:** `words/heart.js` lines 309–312, 880–881
- **Current:** `cs ["srdce","sr̩t͡sɛ"]`, `sk ["srdce","sr̩t͡sɛ"]`, `sl ["srce","sərt͡sɛ"]`, `sr ["срце","sr̩t͡sɛ"]`, `hr ["srce","ˈsr̩t͡se"]`, `bs ["srce","ˈsr̩t͡se"]`
- **Observation:** All six neighbours converge on a syllabic-r transcription, which is correct (this is the prompt's "Czech vocalic l/r" check — Czech `srdce`, `sk slnko`, sr/hr/bs `srce`, `drvo`, all `r̩`/`l̩`). The Czech and BCMS lines correctly use `r̩`; the Slovene line correctly uses inserted `ə` ("sərtsɛ"), reflecting the standard view (Šuštaršič et al. 1999) that Slovene syllabic r is phonologically /ər/. The Macedonian line `mk ["срце","ˈsərt͡sɛ"]` (heart.js line 582) and `mk ["дрво","ˈdərvɔ"]` (tree.js 582) likewise correctly use schwa-r, matching Friedman 2002. **This is a positive finding** — no fix needed, but it should be preserved against future rewrites that would "regularise" everything to `r̩`.

### 6. `ru` — heart "сердце": missing primary stress; unstressed final ⟨е⟩ after hard /t͡s/ should reduce to [ə], not [ɨ]
- **File:** `words/heart.js` line 101
- **Current:** `["сердце", "sʲert͡sɨ"]`
- **Expected:** `["сердце", "ˈsʲert͡sə"]`
- **Why:** Standard Russian "се́рдце" is stressed on the first syllable; the dataset marks `ˈ` for stressed Russian elsewhere on the same row of files (`ru ["кошка","ˈkoʂkə"]` cat.js 101, `ru ["дерево","ˈdʲerʲɪvə"]` tree.js 101). After the hard sibilant/affricate /t͡s/, post-tonic unstressed /e/ → [ə] (or [ɨ] only in pre-tonic position in some descriptions); Padgett & Tabain 2005 give post-tonic word-final reduced vowel as schwa. Compare the parallel `ru ["кошка","ˈkoʂkə"]` which correctly uses post-tonic [ə]. The [ɨ] here is the wrong reduction grade *and* the stress is missing.

### 7. `ru` — sun "солнце": missing stress mark; same post-tonic [ɨ] → [ə] issue
- **File:** `words/sun.js` line 101
- **Current:** `["солнце", "sont͡sɨ"]`
- **Expected:** `["солнце", "ˈsont͡sə"]`
- **Why:** Russian "со́лнце" is stressed on the first syllable (the л is silent, correctly omitted in the IPA). Post-tonic final ⟨e⟩ after hard /t͡s/ reduces to [ə] in standard Moscow pronunciation, matching the pattern in #6 and the dataset's own `ˈkoʂkə`. Without `ˈ` the entry also fails the dataset's own akan'e/stress convention.

### 8. `bg` — phoneme ⟨ъ⟩ is transcribed as [ɐ] everywhere; conventional Bulgarian IPA is [ɤ]
- **Files & lines (every Bulgarian entry containing ⟨ъ⟩):**
  - `good.js` 313 `bg ["добър","dɔbɐr"]`
  - `hand.js` 313 `bg ["ръка","rɐka"]`
  - `heart.js` 313 `bg ["сърце","sɐrt͡sɛ"]`
  - `fire.js` 319 `bg ["огън","ɔɡɐn"]`
  - `house.js` 320 `bg ["къща","kɐʃtɐ"]`  ← *and* final ⟨а⟩ wrongly given as [ɐ]
  - `sun.js` 319 `bg ["слънце","slɐnt͡sɛ"]`
  - `tree.js` 313 `bg ["дърво","dɐrvɔ"]`
- **Expected:** Replace [ɐ] with [ɤ] for the ⟨ъ⟩ phoneme: `["добър","ˈdɔbɤr"]`, `["ръка","rɤˈka"]`, `["сърце","sɤrˈt͡sɛ]`, `["огън","ˈɔɡɤn]`, `["къща","ˈkɤʃta]`, `["слънце","ˈslɤnt͡sɛ]`, `["дърво","dɤrˈvɔ]`.
- **Why:** The Bulgarian "голяма ерова гласна" (ъ) is described in every standard reference — Klagstad 1958, Ternes & Vladimirova-Buhtz 1999 (the *JIPA* illustration), Wood 1987 — as a mid-back unrounded vowel [ɤ], **not** the near-open central [ɐ] that Russian uses for reduced /o/. Using [ɐ] makes Bulgarian ⟨ъ⟩ look like Russian akan'e, which is exactly the wrong phonological generalisation. (`house.js` 320 compounds the error: final ⟨а⟩ in "къща" is unstressed and reduces to [ɐ] in colloquial Bulgarian, but ⟨ъ⟩ in the stem must still be [ɤ] — the entry has them backwards in spirit, treating ⟨ъ⟩ like ⟨а⟩.) Stress on Bulgarian content words is *phonemic* (Ternes & Vladimirova-Buhtz 1999), and none of the bg entries marks it either — addressing that here as part of the same sweep.

### 9. `be` — Belarusian uses bare `ts` everywhere instead of the dataset's `t͡s` tie-bar ligature
- **Files & lines:**
  - `drink.js` 308 `be ["піць","pʲitsʲ"]`
  - `eat.js` 308 `be ["есці","jesʲtsʲi"]`
  - `father.js` 308 `be ["бацька","batsʲka"]`
  - `heart.js` 308 `be ["сэрца","sɛrtsa"]`
  - `mother.js` 314 `be ["маці","matsʲi"]`
  - `moon.js` 314 `be ["месяц","mʲesʲats"]`
  - `one.js` 314 `be ["адзін","adʲzʲin"]`  ← `dz` likewise missing the tie-bar
  - `sun.js` 314 `be ["сонца","sontsa"]`
  - `thanks.js` 308 `be ["дзякуй","dʲzʲakuj"]`  ← `dz` also un-ligatured
- **Expected:** `t͡s`, `d͡z` (with U+0361 combining double inverted breve), matching every other Slavic line: `sr ["отац","otat͡s"]`, `pl ["jeden","ˈjɛdɛn"]` (no ts), `pl ["dziękuję","d͡ʑɛŋˈkujɛ]`, `cs ["otec","otɛt͡s"]`, etc.
- **Why:** The dataset standardises the affricate ligature (cf. `t͡ʃ`, `d͡ʐ`, `t͡ɕ`, `d͡ʑ` used throughout). Bare `ts` is ambiguous between two segments and an affricate. All other Slavic languages in the same files use `t͡s`; only the `be` block consistently breaks the convention. This is one systematic transcription-typography error, not nine independent ones.

### 10. `be` — primary stress unmarked across the board, although Belarusian stress is phonemic (and the orthographic akan'e in ⟨вада⟩/⟨сабака⟩/⟨агонь⟩ only makes sense relative to it)
- **Files & lines:**
  - `water.js` 315 `be ["вада","vada"]`  → expected `[vaˈda]`
  - `dog.js` 308 `be ["сабака","sabaka"]` → expected `[saˈbaka]`
  - `eye.js` 308 `be ["вока","voka"]` → expected `[ˈvoka]`
  - `fire.js` 314 `be ["агонь","aɣonʲ"]` → expected `[aˈɣonʲ]`
  - `hand.js` 308 `be ["рука","ruka"]` → expected `[ruˈka]`
  - `sun.js` 314 `be ["сонца","sontsa"]` → expected `[ˈsont͡sa]`
  - `moon.js` 314 `be ["месяц","mʲesʲats]` → expected `[ˈmʲesʲat͡s]`
  - `one.js` 314 `be ["адзін","adʲzʲin"]` → expected `[aˈd͡zʲin]`
  - `mother.js` 314 `be ["маці","matsʲi"]` → expected `[ˈmat͡sʲi]`
  - `father.js` 308 `be ["бацька","batsʲka"]` → expected `[ˈbat͡sʲka]`
- **Why:** The choice between vada/voda, sabaka/sobaka, agon'/ogon' *is* the akan'e/ikan'e alternation, which is conditioned by stress; without `ˈ` the reader cannot recover the unreduced /o/ syllable. Every other phonemic-stress language in the dataset (ru, uk, bg, sl, BCMS) marks `ˈ` — be should too.

### 11. `uk` — primary stress unmarked on most multisyllabic entries (Ukrainian stress is phonemic and free)
- **Files & lines:**
  - `cat.js` 163 `uk ["кішка","ˈkiʃkɑ"]`  ✓ marked — OK
  - `dog.js` 163 `uk ["собака","sɔbɑkɑ"]` → expected `[soˈbɑkɑ]`
  - `drink.js` 163 `uk ["пити","pɪtɪ"]` → expected `[ˈpɪtɪ]`
  - `eat.js` 163 `uk ["їсти","jistɪ"]` → expected `[ˈjisti]`  (and final /и/ → [ɪ] like the first syllable)
  - `eye.js` 163 `uk ["око","ɔkɔ"]` → expected `[ˈɔko]`
  - `father.js` 163 `uk ["батько","bɑtʲkɔ"]` → expected `[ˈbɑtʲko]`
  - `fire.js` 163 `uk ["вогонь","wɔɦɔnʲ"]` → expected `[voˈɦonʲ]` (also #2)
  - `hand.js` 163 `uk ["рука","rukɑ"]` → expected `[ruˈkɑ]`
  - `house.js` 163 `uk ["дім","dim"]` mono ok
  - `love.js` 163 `uk ["любов","lʲubɔw"]` → expected `[lʲuˈbɔw]`
  - `moon.js` 163 `uk ["місяць","misʲɑt͡sʲ]` → expected `[ˈmisʲɑt͡sʲ]`
  - `mother.js` 163 `uk ["мати","mɑtɪ"]` → expected `[ˈmɑti]` (also see #15 re vowel)
  - `one.js` 163 `uk ["один","ɔdɪn"]` → expected `[oˈdɪn]`
  - `sun.js` 163 `uk ["сонце","sɔnt͡sɛ"]` → expected `[ˈsɔnt͡sɛ]`
  - `thanks.js` 163 `uk ["дякую","dʲɑkuju"]` → expected `[ˈdʲɑkuju]`
  - `tree.js` 163 `uk ["дерево","dɛrɛwɔ"]` → expected `[ˈdɛrɛwo]`
- **Why:** Ukrainian stress is lexically distinctive and free (Pompino-Marschall et al. 2017 §2); the dataset marks `ˈ` on Russian and on the uk `cat.js` entry, so the unmarked ones are local omissions. Note that `eat.js` `[jistɪ]` is doubly wrong — `и` is /ɪ/ but `і` is /i/, and the stress is on the first syllable.

### 12. `bs` — uses labiodental ⟨v⟩ in IPA while sr and hr use the labio-dental approximant ⟨ʋ⟩ on the *same word*
- **Files & lines (all six Bosnian IPA entries with /v/):**
  - `water.js` 880 `hr ["voda","ˈʋoda"]` vs 881 `bs ["voda","ˈvoda"]` vs 319 `sr ["вода","ʋoda"]`
  - `fire.js` 886 `hr ["vatra","ˈʋatra"]` vs 887 `bs ["vatra","ˈvatra"]` vs 318 `sr ["ватра","ʋatra"]`
  - `love.js` 887 `hr ["ljubav","ˈʎuːbaf"]` (final-devoiced) vs 888 `bs ["ljubav","ˈʎubav"]` (no final devoicing!) vs 319 `sr ["љубав","ʎubaʋ"]`
  - `hello.js` 874 `bs ["zdravo","ˈzdravo"]` vs 312 `sr ["здраво","zdraʋo"]`
- **Expected:** Pick one for BCMS and apply it: either `ʋ` (Landau et al. 1999 JIPA Croatian) or `v` (some Bosnian descriptions). The most defensible is `ʋ` for all three, since they share Štokavian phonology. At minimum, `bs` should not be the odd-one-out within the same tuple cluster, and `bs ljubav ˈʎubav` should match `hr ˈʎuːbaf` in either devoicing or not — currently they disagree on **both** length *and* final-devoicing for the same dialect.

### 13. `rue` — Rusyn "hello" is a Greek-Catholic *religious* greeting, not the neutral everyday greeting the field is for
- **File:** `words/hello.js` line 744
- **Current:** `["Слава Ісусу Христу", "ˈslava jiˈsusu xriˈstu"]`
- **Expected:** `["Здраво", "ˈzdravo"]` or `["Витай","ˈvɪtaj"]`
- **Why:** The definition on line 264 explicitly says: "Neutral everyday greeting. Time-of-day forms / blessings ('peace') only when no neutral form exists." "Слава Ісусу Христу" ('Glory to Jesus Christ') is precisely the kind of blessing the policy rules out: it is the liturgical greeting used among Greek-Catholic Rusyns, with the formulaic reply "Слава наві́ки" — it is not the everyday hello. Standard secular Rusyn options include "Здра́во", "Здра́в'я", or "Вита́й". Also note the IPA "jiˈsusu" — word-initial Cyrillic ⟨І⟩ in Rusyn is /i/, not /ji/; should be `iˈsusu`.

### 14. `orv` — "огнь" surface form is paired with an IPA that belongs to "огонь"
- **File:** `words/fire.js` line 1021
- **Current:** `["огнь", "oɡonu"]`
- **Expected:** either align the surface to the IPA — `["огонь","oɡonĭ"]` — or align the IPA to the surface — `["огнь","oɡnĭ"]` / `["огнь","oɡnʲ"]`.
- **Why:** The orv (Old East Slavic) reflex has the form **огнь** (no internal vowel, ending in soft yer ь) or, after the late-OES pleophony, **огонь**. The current entry has the *bare* form ⟨огнь⟩ in the surface column but transcribes it as ⟨o-ɡ-o-n-u⟩ — three syllables with two internal vowels — which is the value for a fully vocalised ⟨огонь⟩ (or even the post-yer Russian form). The cu sibling on line 524 has the matching pair `cu ["огнь","oɡnʲ"]`, which is internally consistent; orv on 1021 is not. (Note also that the dataset's own orv transliteration uses `ĭ` for ь and `ŭ` for ъ — see `orv ["сьрдьце","sĭrdĭtse"]` heart.js 1015 and `orv ["пьсъ","pĭsŭ"]` dog.js 1015 — so the floating `u` here is doubly out of place.)

### 15. `cu` vs `orv` — the OCS/OES yer transcription scheme is inconsistent across files of the same family
- **Files & lines:**
  - `cat.js` 518 `cu ["котъка","kotɤkɑ"]` vs 1015 `orv ["котъка","kotŭka"]`
  - `dog.js` 518 `cu ["пьсъ","pɪsɤ"]` vs 1015 `orv ["пьсъ","pĭsŭ"]`
  - `father.js` 518 `cu ["отьць","otɪtsɪ"]` vs 1015 `orv ["отьць","otĭtsĭ"]`
  - `good.js` 518 `cu ["добръ","dobrɤ"]` vs 1015 `orv ["добръ","dobrŭ"]`
  - `heart.js` 518 `cu ["срьдьце","sɪrɪdɪtse"]` vs 1015 `orv ["сьрдьце","sĭrdĭtse"]`
  - `house.js` 525 `cu ["домъ","domɤ"]` vs 1022 `orv ["домъ","domŭ"]`
  - `love.js` 525 `cu ["любъвь","lʲubɤvɪ"]` vs 1022 `orv ["любити","ljubiti"]`  ← *also* a wrong lemma; orv "любити" is the verb 'to love', not the noun "любъвь" the cu form requires
  - `sun.js` 524 `cu ["слъньце","slɤnɪtse"]` vs 1021 `orv ["сълньце","sŭlnĭtse"]`
- **Expected:** decide on one convention per language and use it consistently. The orv column already uses the standard pedagogical *transliteration* (ĭ/ŭ for the front/back yer) — Lunt and Schenker both use this. The cu column inconsistently uses [ɪ] and [ɤ], which is the *modern Bulgarian-recension liturgical* reading; that is defensible for cu only if explicitly chosen as a policy. If cu is meant to be Common OCS rather than modern liturgical OCS, ĭ/ŭ should be used as in orv. Either way, `love.js` orv ↦ "любити" is the wrong lemma (verb, not noun) and breaks parity with cu "любъвь".

### 16. `cu` — heart "срьдьце" transcribed as [sɪrɪdɪtse] inserts a second epenthetic ⟨ɪ⟩ that isn't in the surface form
- **File:** `words/heart.js` line 518
- **Current:** `["срьдьце", "sɪrɪdɪtse"]`
- **Expected:** `["срьдьце", "sɪrdɪtse"]` (or, in the ĭ/ŭ transliteration convention, `["сьрдьце","sĭrdĭtse"]` matching the orv form on line 1015)
- **Why:** The OCS form ⟨срьдьце⟩ has exactly two front-yer letters ⟨ь⟩ (after р and after д), not three. The current IPA inserts an extra [ɪ] between [s] and [r] (sɪr…) that has no orthographic source — the surface starts with ⟨ср⟩, not ⟨сьр⟩. Either the surface should be ⟨сьрдьце⟩ to match the IPA (this is actually the better-attested Old Russian spelling, and is exactly what orv has on line 1015), or the IPA should drop the spurious [ɪ]. Compare the cleanly-paired `orv ["сьрдьце","sĭrdĭtse"]` directly below.

### 17. `mk` — moon: lexical choice "месечина" is the *moonlight*, not the celestial body
- **File:** `words/moon.js` line 588
- **Current:** `["месечина", "mɛˈsɛt͡ʃina"]`
- **Expected:** `["месечина","mɛˈsɛt͡ʃina"]` is defensible as a *secondary* sense, but the citation form for the celestial body in standard Macedonian is **месечина** *or* **месец** depending on register; the prompt's definition (`moon.js` 339–340) is explicit that the slot is "the natural satellite of Earth, not the calendar month". Both Macedonian dictionaries (Толковен речник на македонскиот јазик) gloss **месечина** as both 'moon' and 'moonlight/light of the moon', while **месец** is unambiguously 'month' in modern usage — so this is actually one of the rare cases where the Macedonian sibling correctly diverges from the rest (sr месец, bg месец, etc.), because in Macedonian *месец* has narrowed to 'month'. **This is a positive finding** — round 80 (or earlier) likely already debated this; flagging it here to prevent a future "fix" from replacing **месечина** with **месец**, which would be a regression for Macedonian specifically.

### 18. Scope gap — `me` (Montenegrin) is absent from every word file, despite being explicitly listed in the prompt's BCMS scope
- **Evidence:** `grep -lE "^\s*me\s*:" words/*.js` returns nothing for all 20 files.
- **Why:** Montenegrin is recognised as its own standard since the 2007 constitution, with two distinctive sounds (ś/ź → [ɕ]/[ʑ]) not found in sr/hr/bs. The dataset already differentiates `hr`/`bs`/`sr` triplets on every Slavic word; adding `me` would let the dataset show the famous Montenegrin reflex e.g. "śekira"/"sjekira" or "đe"/"gdje". This is a scope-level decision, not a bug per se, but the prompt asks the reviewer to "verify which exist" — so logging the absence. The same is true of `ru_oid`, `pjs`, `pck`, `sx` mentioned in the prompt; none are present and several are unlikely to be defensible additions (`pjs` and `pck` are not standard Glottolog or ISO 639-3 codes for any West Slavic micro-language I can locate; `sx` is the ISO 639-3 for Slovincian but the standard code is `sla-slo`/`csb` cluster — Slovincian is usually treated as a Kashubian dialect today and may be out of scope).

### 19. `cs` — moon "měsíc" IPA `mɲɛsiːt͡s` retains the conservative pre-vocalic palatal articulation of ⟨mě⟩; modern standard Czech has [mɲɛ] only word-initially under specific descriptions and increasingly [ɲɛ] in fluent speech
- **File:** `words/moon.js` line 315
- **Current:** `["měsíc", "mɲɛsiːt͡s"]`
- **Expected:** keep `mɲɛsiːt͡s` (it is the most-cited careful-speech value, Dankovičová 1997 §"Consonants" specifically lists [mɲ] as the realisation of orthographic ⟨mě⟩) but **add primary stress**: `["měsíc","ˈmɲɛsiːt͡s"]` per #3. The transcription itself is fine; only the missing `ˈ` needs fixing.
- **Note:** This is a sub-case of #3; calling it out separately because the unusual `mɲ` cluster sometimes attracts spurious "simplification" fixes — preserve it.

### 20. `csb` — eye "òkò" IPA `ʷɔkʷɔ` puts labialisation marks on two vowels with no consonant host
- **File:** `words/eye.js` line 750
- **Current:** `["òkò", "ʷɔkʷɔ"]`
- **Expected:** `["òkò","wɔkwɔ"]` (or `[ˈwɔkwɔ]` with stress)
- **Why:** The IPA superscript `ʷ` is a *secondary-articulation* diacritic that attaches to a base consonant (e.g. /kʷ/, /tʷ/). It cannot stand alone before a vowel — `ʷɔ` is not a well-formed IPA unit. The Kashubian *labialisation of initial /o/* (the famous "ò" → [wɔ]) is realised as the *approximant* [w] before the vowel, exactly as the dataset already transcribes for the same phenomenon in `csb` "okno"-type words and as `wɔ`. Compare the sibling `csb ["wokò" ...]`-style entries elsewhere and `hsb ["woko","ˈvɔkɔ"]`. The fix is to replace the floating `ʷ` with `w`. (The Kashubian phenomenon itself — `ò` = [wɔ] — is correctly identified; only the IPA character is wrong.)

### 21. `csb` — cat "kòt" IPA `kʷɔt` (same labialisation question, different direction): here `kʷ` is *defensible* but inconsistent with #20
- **File:** `words/cat.js` line 750
- **Current:** `["kòt", "kʷɔt"]`
- **Expected:** either keep `kʷɔt` and fix #20 to `kwɔt`, *or* change this to `kwɔt` for consistency. Choose one convention for Kashubian initial-`ò` labialisation across the whole dataset.
- **Why:** Same phonological phenomenon (initial-syllable rounding of /o/ → [wɔ] or [ʷɔ]) gets two different IPA shapes within the same csb sub-corpus: `kʷɔt` (with `ʷ` attached to /k/, defensible as secondary labialisation of the consonant) but `ʷɔkʷɔ` (with `ʷ` floating, ungrammatical IPA). Pick one. The clearest documented convention (Topolińska 1980; Stone 1993 in Comrie & Corbett) is the segmental `w`: "wòda" [wɔda], "kòt" [kwɔt], "òkò" [wɔkwɔ].

---

**File:** `/home/jounlai/langmap/wordmap_reviews/review_87_open.md`
**Findings:** 21


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 64
- **policy/skip**: 11
- **headline**: cs/sk initial ˈ stress mass add ×30, sr Cyrillic stress ×12, be ts/dz→t͡s/d͡z ×9, bg ⟨ъ⟩ [ɐ]→[ɤ] ×7, uk /v/→/w/+stress ×2, ru сердце/солнце ˈ+ə ×2, rue hello liturgical→everyday, orv огнь IPA fix
- **JSON path**: /tmp/wm_edits_87.json
