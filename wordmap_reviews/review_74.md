# Wordmap review #74 — Intra-language cross-word consistency specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a phonetician and lexical-data auditor whose specialty is *intra-language* internal consistency: given a single language's 20 transcriptions in this dataset, I treat the other 19 as the de-facto house style and hunt for the one entry that breaks it — a phoneme rendered with the wrong allophone, a stress mark present in nineteen siblings and missing in the twentieth, a vowel quality that flips, or one cell that is over-narrow while the rest are broad. I know this project's data model well: each `words/<concept>.js` holds `WORDS.<concept>.data` as `<code>: ["surface", "ipa"]` tuples (object form with `form`/`ipa`/`alt` only for multi-script langs), IPA is broad-phonemic IPA (not native romanization), tone goes inline, and the per-language metadata I do not touch lives in `wordmap_data.js`; I read `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md` to confirm conventions. For the linguistic adjudication behind each flag I lean on standard descriptions: for Russian, **Jones & Ward, _The Phonetics of Russian_ (1969)** and **Timberlake, _A Reference Grammar of Russian_ (2004)** on obligatory lexical stress and the akan'e/reduction it conditions; for Dutch, **Booij, _The Phonology of Dutch_ (1995)** and **Gussenhoven (1999) "Dutch," _IPA Handbook_** on the voiced glottal [ɦ]; for Hawaiian, **Elbert & Pukui, _Hawaiian Grammar_ (1979)**; for Italian, **Krämer, _The Phonology of Italian_ (2009)**. Every "Current" value below was copied verbatim from the live file at the cited line and re-verified by grep on 2026-05-31; the evidence for each consistency flag is the sibling entries, which I cite explicitly. I deliberately did **not** re-report items already fixed in waves #01–70 (e.g. the Hawaiian/Swahili/Tagalog "IPA = orthography" cluster, the nan duplicate-key defect); the issues below are residue those passes did not reach.

---

## Issues found

### 1. `ru` — hand — final lexical stress unmarked, breaking the file's own akan'e-implies-stress pattern
- **File:** `words/hand.js` line 101
- **Current:** `["рука", "rʊka"]`
- **Expected:** `["рука", "rʊˈka"]`
- **Why:** рука́ is end-stressed, and the transcription already *encodes* that by reducing the pre-tonic /u/→[ʊ] (Jones & Ward 1969; Timberlake 2004). The dataset's Russian style is to write the stress mark on polysyllables — cf. the directly parallel final-stress nouns `water.js` L101 `["вода", "vɐˈda"]` and `moon.js` L101 `["луна", "ɫʊˈna"]`, plus `dog.js` `sɐˈbakɐ`, `father.js` `ɐˈtʲet͡s`, `thanks.js` `spɐˈsʲibɐ`. This entry reduces the vowel but omits the ˈ, so it is the lone outlier; restore `rʊˈka`.

---

### 2. `ru` — one — final stress mark missing (cf. `отец` ɐˈtʲet͡s)
- **File:** `words/one.js` line 101
- **Current:** `["один", "ɐdʲin"]`
- **Expected:** `["один", "ɐˈdʲin"]`
- **Why:** оди́н is end-stressed; the pre-tonic о→[ɐ] reduction is already shown, proving the stress position was known. It is exactly the shape of `father.js` L101 `["отец", "ɐˈtʲet͡s"]` (same `ɐ…ˈ…` pretonic-reduced, final-stressed pattern) and `fire.js` L101 `["огонь", "ɐˈɡonʲ"]`, both of which carry ˈ. This one does not — inconsistent.

---

### 3. `ru` — hello — stress mark missing on приве́т
- **File:** `words/hello.js` line 101
- **Current:** `["привет", "prʲɪvʲet"]`
- **Expected:** `["привет", "prʲɪˈvʲet"]`
- **Why:** приве́т is end-stressed. The sibling polysyllables that mark stress (`vɐˈda`, `ɫʊˈna`, `sɐˈbakɐ`, `spɐˈsʲibɐ`, `xɐˈroʂɨj`) establish the convention; the pre-tonic /i/ here is even rendered [ɪ], the reduced pretonic value, yet the tonic syllable bears no mark. Add ˈ before the final syllable.

---

### 4. `ru` — love — stress mark missing on любо́вь
- **File:** `words/love.js` line 101
- **Current:** `["любовь", "lʲʊbofʲ"]`
- **Expected:** `["любовь", "lʲʊˈbofʲ"]`
- **Why:** любо́вь is end-stressed; pretonic /u/→[ʊ] is already written (the akan'e/reduction marker), so the stress locus is known but unmarked. Same omission as #1–#3; the marked-stress siblings (#1's list) are the evidence. (For completeness, the *initial*-stressed polysyllables `heart.js` L101 `["сердце","sʲert͡sɨ"]`→`ˈsʲert͡sɨ`, `tree.js` L101 `["дерево","dʲerʲɪvɐ"]`→`ˈdʲerʲɪvɐ`, and `sun.js` L101 `["солнце","sont͡sɨ"]`→`ˈsont͡sɨ` share the same defect and should be fixed in the same pass — they are listed here as a cluster rather than four more separate items.)

---

### 5. `nl` — hello — plain [h] where the rest of the Dutch set uses voiced [ɦ]
- **File:** `words/hello.js` line 160
- **Current:** `["hallo", "hɑloː"]`
- **Expected:** `["hallo", "ɦɑloː"]`
- **Why:** This file's Dutch transcriptions render orthographic word-initial `h` as the voiced glottal fricative [ɦ] in *every* other case: `dog.js` L160 `["hond","ɦɔnt"]`, `hand.js` L160 `["hand","ɦɑnt"]`, `heart.js` L160 `["hart","ɦɑrt"]`, `house.js` L160 `["huis","ɦœʏs"]`. Standard Netherlandic Dutch /h/ is [ɦ] (Booij 1995; Gussenhoven 1999). `hallo` alone uses [h], so it is the inconsistent entry — switch to `ɦɑloː`.

---

### 6. `haw` — hello & love — over-narrow [ɐ] + stress mark, unlike all 18 other Hawaiian entries (broad [a], no stress)
- **File:** `words/hello.js` line 178 and `words/love.js` line 178
- **Current:** both `["aloha", "ɐˈloha"]`
- **Expected:** `["aloha", "aloha"]` in both (to match the file's broad style), or — if the project wants the narrower realization — add the same [ɐ]+stress treatment to the rest of the Hawaiian set; do not leave a single lexeme narrow while the rest are broad
- **Why:** Every other Hawaiian cell transcribes unstressed /a/ as plain [a] and carries **no** stress mark: `eye.js` L178 `["maka","maka"]`, `hand.js` L178 `["lima","lima"]`, `moon.js` L178 `["mahina","mahina"]`, `thanks.js` L178 `["mahalo","mahalo"]`, `fire.js` L178 `["ahi","ahi"]`, even the long-vowel forms `tree.js` `["lāʻau","laːʔau"]` and `father.js` `["makuakāne","makuakaːne"]` omit ˈ. *aloha* /aˈloha/ has the same penultimate-stress, reducible-/a/ profile as `mahina`, `mahalo`, `makuahine` — yet only `aloha` got the narrow [ɐ] and the ˈ (a relic of the wave-#01–70 fix that touched only these two cells). The result is an internal inconsistency: this lexeme is now transcribed to a different standard than its 18 siblings. Pick one standard and apply it uniformly; the minimal, consistent fix is to broaden `aloha` back to `["aloha","aloha"]`.

---

### 7. `nl` — hello — long final [oː] in an unstressed open syllable, inconsistent with the file's unstressed-schwa treatment
- **File:** `words/hello.js` line 160
- **Current:** `["hallo", "hɑloː"]`
- **Expected:** `["hallo", "ɦaˈloː"]` (or at least mark which syllable is long/stressed)
- **Why:** A secondary point on the same cell as #5. In Dutch *hallo* the stress and the long vowel fall on the second syllable (ha-LÓO), so the [oː] length is correct only if it is understood as the stressed syllable — but no other Dutch entry marks stress, and several mark final unstressed vowels as reduced [ə] (`eat.js` `eːtə`, `drink.js` `drɪŋkə`, `love.js` `liːfdə`). Leaving `hɑloː` with an unmarked long final vowel and a *short* [ɑ] first syllable implies first-syllable prominence, the opposite of the real stress. Either add the stress mark (`ɦaˈloː`) or, if the file's policy is to omit Dutch stress entirely, the cell at minimum should not look stress-final-by-length-alone while the spelling-initial [ɑ] stays short. Flagged as a consistency/clarity issue, secondary to #5.

---

### 8. `it` — (whole set is consistent) — note: no actionable Italian outlier found
- **File:** `words/*.js` line 96 (all 20)
- **Current:** e.g. `tree.js` L96 `["albero", "ˈalbero"]`, `thanks.js` L96 `["grazie", "ˈɡratt͡sje"]`
- **Expected:** no change
- **Why:** Recorded for transparency, not as a defect. I audited the Italian column for the usual length/stress-consistency traps and it passes: stressed open syllables carry length (`ˈkaːne`, `ˈmaːno`, `ˈluːna`), stressed *closed* or pre-geminate syllables correctly omit length (`ˈalbero` /al./, `ˈɡratt͡sje` before /tts/, `ˈɡatto` before /tt/), and non-initial stress is marked where it falls (`aˈmoːre`, `manˈd͡ʒaːre`). This is the model the Russian and Dutch columns above fail to meet; I include it so the reviewer can see the comparison standard rather than mistake the Italian set for unreviewed.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
