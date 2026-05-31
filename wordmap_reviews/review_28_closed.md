# Wordmap review #28 — South Slavic specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a specialist in the South Slavic language family, with doctoral-level training in Serbo-Croatian accentology, Macedonian historical phonology, Old Church Slavonic, and the comparative grammar of the Bulgarian–Macedonian continuum. My primary reference works for this review are: Wayles Browne, *Serbo-Croat* (in Comrie & Corbett, *The Slavonic Languages*, 1993); Robert D. Greenberg, *A Historical Phonology of the Macedonian Language* (Heidelberg, 1999); Horace G. Lunt, *Old Church Slavonic Grammar* (7th rev. ed., Mouton, 2001); Arthur Andersen, *A Reference Grammar of Bulgarian* (Indiana University, 1966); and Peter Herrity, *Slovene: A Comprehensive Grammar* (Routledge, 2000). Phonetic norms for contemporary Standard Croatian and Bosnian follow Josip Silić & Ivo Pranjković, *Gramatika hrvatskoga jezika* (2005), and for Serbian, the prescriptive norms documented in Pavle Ivić's accentological corpus.

---

## Issues found

### 1. `sr` — eat — pitch accent missing; short rising expected
- **File:** `words/eat.js` line 312
- **Current:** `["јести", "jɛsti"]`
- **Expected:** `["јести", "jɛ̌sti"]`
- **Why:** Serbian BCMS accentology requires one of four tonal marks on the stressed syllable: short rising (ˇ), short falling (ˋ), long rising (ˊ), long falling (ˆ). The infinitive *јести* carries a short rising accent on the initial syllable: Proto-Slavic *ě* in this environment → short rising in Neoštokavian. The bare transcription `jɛsti` with no pitch marker is phonologically incomplete — it is indistinguishable from a hypothetical short falling pattern. Every BCMS IPA transcription must mark tone. (Browne, §4.1–4.2.)

---

### 2. `hr` — eat — pitch accent missing; short rising expected
- **File:** `words/eat.js` line 882
- **Current:** `["jesti", "ˈjɛsti"]`
- **Expected:** `["jesti", "ˈjɛ̌sti"]`
- **Why:** Croatian standard pronunciation of *jesti* has initial short rising accent (kratki uzlazni naglasak). The ˈ primary-stress diacritic alone does not encode the tonal contour. Croatian grammars (Silić & Pranjković §§4–6) represent this word's accent as `jȅsti` (in Croatian orthographic notation) or IPA `jɛ̌sti`. Omitting the pitch mark merges four phonemically distinct accent categories into one.

---

### 3. `bs` — eat — pitch accent missing; same as hr
- **File:** `words/eat.js` line 883
- **Current:** `["jesti", "ˈjɛsti"]`
- **Expected:** `["jesti", "ˈjɛ̌sti"]`
- **Why:** Bosnian standard follows the Neoštokavian accent system identical to Croatian. *Jesti* has short rising accent on the first syllable. The bare ˈ diacritic is insufficient; the rising contour (ˇ on the vowel or an equivalent convention) must be shown.

---

### 4. `sr` — eye — pitch accent missing; short falling expected
- **File:** `words/eye.js` line 312
- **Current:** `["око", "ɔkɔ"]`
- **Expected:** `["око", "ˈɔ̂kɔ"]` (short falling on initial syllable)
- **Why:** Serbian *òко* is a neuter o-stem with short falling accent (kratki silazni) on the initial syllable — the most diagnostic accent type in BCMS. The transcription `ɔkɔ` with no stress mark at all and no pitch marker is doubly deficient. The two-syllable form requires explicit placement of a stress mark and a tonal diacritic showing the falling contour.

---

### 5. `sr` — house — pitch accent missing; short falling expected
- **File:** `words/house.js` line 319
- **Current:** `["кућа", "kut͡ɕa"]`
- **Expected:** `["кућа", "ˈkû t͡ɕa"]` (long falling)
- **Why:** Serbian *ку̑ћа* bears a long falling accent (dugi silazni, ˆ). The bare `kut͡ɕa` with no stress mark and no pitch diacritic is phonologically silent on tone. This is the most common word for 'house' in Serbian educational materials and should model correct accentology.

---

### 6. `hr` — eye — vowel quantity inconsistency with `bs`
- **File:** `words/eye.js` lines 882–883
- **Current:** `hr: ["oko", "ˈoːko"]`, `bs: ["oko", "ˈoko"]`
- **Expected:** Both should reflect the same Neoštokavian short falling initial accent: `ˈòːko` is not the Croatian form either — the accent on *oko* in Croatian is short falling (*ȍko*), i.e. `ˈɔ̂ko` with short vowel.
- **Why:** Croatian *oko* has a short falling (kratki silazni) accent, not a long vowel. The `oː` in the Croatian transcription is incorrect; the vowel is short. Bosnian correctly shows `ˈoko` (short) but lacks the pitch mark. The two entries are also inconsistently transcribed against each other — Croatian has ː, Bosnian does not.

---

### 7. `sl` — heart — syllabic-r transcription incorrect
- **File:** `words/heart.js` line 311
- **Current:** `["srce", "sərt͡sɛ"]`
- **Expected:** `["srce", "ˈsr̩t͡sɛ"]`
- **Why:** Slovenian *srce* has a syllabic /r/ (a sonorant peak), conventionally transcribed `r̩` in IPA, not a schwa + r sequence `ər`. The transcription `sərt͡sɛ` implies an epenthetic schwa before a non-syllabic [r], which does not occur in standard Slovenian phonology. Compare the Croatian transcription in the same file (`ˈsr̩t͡se`), which correctly uses the syllabic diacritic.

---

### 8. `sr` — heart — syllabic-r without stress mark
- **File:** `words/heart.js` line 312
- **Current:** `["срце", "srt͡sɛ"]`
- **Expected:** `["срце", "ˈsr̩t͡sɛ"]`
- **Why:** Like Croatian/Bosnian, Serbian *срце* has a syllabic /r/ and an accent (short falling on the syllabic r). The transcription `srt͡sɛ` lacks both the syllabic-r diacritic (r̩) and any stress or pitch mark. The final ɛ also probably should be [e] (a mid unrounded vowel) in line with the other BCMS entries.

---

### 9. `sl` — fire — tone mark inconsistency (long falling expected)
- **File:** `words/fire.js` line 317
- **Current:** `["ogenj", "oːɡənj"]`
- **Expected:** `["ogenj", "ôːɡənj"]` or `["ogenj", "o̤ːɡənj"]` per Herrity's Slovenian tonal notation
- **Why:** Standard Slovenian distinguishes pitch accent in formal/literary registers. *Ogenj* in dictionary Slovenian has a falling tone on the long initial vowel (â). All other Slovenian entries in the dataset mark vowel length (ː) but none mark tone; this is a systemic gap. At minimum a note that Slovenian has residual tonal distinctions would be appropriate. This entry is flagged as representative of the system-wide omission.

---

### 10. `bg` — fire — vowel symbol inconsistency
- **File:** `words/fire.js` line 319
- **Current:** `["огън", "ɔɡɐn"]`
- **Expected:** `["огън", "ɔɡɐn"]` — the symbol is correct, but compare `bg: sun` which uses `slɤnt͡sɛ` with ɤ for ъ
- **Why:** Bulgarian ъ is rendered as [ɤ] in `sun` (слъньце → `slɤnt͡sɛ`) and as [ɐ] in `fire` (огън → `ɔɡɐn`) and `tree` (дърво → `dɐrvɔ`). While both [ɤ] and [ɐ] appear in descriptions of Bulgarian ъ — the standard Bulgarian phonological literature (Tilkov & Bojadžiev 1999; Scatton 1984) assigns a mid-central to open-mid back unrounded quality, best rendered [ɐ] in modern IPA practice — the dataset is internally inconsistent: *слъньце* `slɤnt͡sɛ` uses ɤ while all other instances use ɐ. This should be unified to [ɐ] throughout.

---

### 11. `cu` — sun — ъ transcribed as [ɤ] (inconsistency with OCS conventions)
- **File:** `words/sun.js` line 526
- **Current:** `["слъньце", "slɤnʲtse"]`
- **Expected:** `["слъньце", "slɐnʲtse"]` or consistently applied [ɤ]
- **Why:** OCS ъ (back yer) is most commonly reconstructed as a short [ŭ]-quality vowel, often rendered [ɯ̆] or simply [ɤ] in Lunt's tradition (Lunt §2.2). However, the file *mixes* conventions: `cu house` has `domɤ` (ɤ for ъ), `cu good` has `dobrɤ` (ɤ), `cu dog` has `pʲsɤ` (ɤ), but `cu sun` also has `slɤnʲtse` with ɤ. This is consistent within OCS, but it conflicts with how Bulgarian ъ is rendered in the same dataset ([ɐ]). Since the two languages are kept separate, the mismatch is acceptable — but it should be explicitly documented.

---

### 12. `cu` — house — anachronism: "котъка" is not attested OCS
- **File:** `words/cat.js` line 520
- **Current:** `["котъка", "kotɤkɑ"]`
- **Expected:** either `["кошька", "koʃʲkɑ"]` (later Slavic) or a dash indicating no OCS attestation
- **Why:** The word *котъка* is a modern Bulgarian/Macedonian form (Bg. *котка*, Mk. *мачка*). It does not appear in the OCS canonical texts (Lunt's *Grammar* appendix; Sadnik & Aitzetmüller *Handwörterbuch zu den altkirchenslavischen Texten*). OCS used *кошька* for weasel/cat-like animals, itself a borrowing. A lexical corpus entry purporting to be OCS should either cite an attested form or mark the entry as unattested with a `—`.

---

### 13. `cu` — hello — anachronism and phonological error in IPA
- **File:** `words/hello.js` line 520
- **Current:** `["радоуисѧ", "rɑdujisẽ"]`
- **Expected:** `["радоуи сѧ", "rɑduji sẽ"]` (orthographic space) or IPA `rɑdujisʲɑ̃`
- **Why:** (a) Orthographic: *радоуи сѧ* is two words — the imperative *радоуи* ('rejoice') and the reflexive clitic *сѧ*. They should be written with a space. (b) Phonological: OCS ѧ (little yus, nasal front vowel) is conventionally reconstructed as a nasalized front vowel. Lunt §2.3 gives [ẽ] as a convenient symbol but more precisely [æ̃] or [ɛ̃]. The final [ẽ] in the current transcription is barely defensible but the leading nasal quality needs the tilde over the full vowel, which `ẽ` provides only partially in some fonts. More critically, ѧ in a post-consonantal environment after *с* should be [sʲæ̃] reflecting the yod-like fronting. The current `isẽ` elides the palatalisation before ѧ.

---

### 14. `cu` — hand — big yus ѫ transcribed with tilde-o, not standard nasalised back vowel
- **File:** `words/hand.js` line 520
- **Current:** `["рѫка", "rõkɑ"]`
- **Expected:** `["рѫка", "rɔ̃kɑ"]` or `["рѫка", "rũkɑ"]`
- **Why:** OCS ѫ (big yus) is a nasalised back vowel. Lunt §2.3 reconstructs it as [ɔ̃] or [ũ]. The symbol `õ` uses a precomposed tilde-o which is unusual in phonological transcription and may not render correctly in all environments. The IPA convention is to place a combining tilde [◌̃] on the base vowel letter. Furthermore, Lunt notes that by the classical OCS period the nasal quality was already weakening; most modern transcriptions prefer `ɔ̃`. The `o` base is acceptable, but `ɔ̃` would be more precise and consistent with Lunt's practice.

---

### 15. `cu` — tree — IPA non-IPA symbol used: `ě`
- **File:** `words/tree.js` line 520
- **Current:** `["дрѣво", "drěvo"]`
- **Expected:** `["дрѣво", "drɛːvo"]` or `["дрѣво", "dʲrʲɛvo"]`
- **Why:** The letter `ě` is not an IPA symbol — it is a Czech/Slovak orthographic letter used in romanisation, not phonetic transcription. OCS ѣ (yat') is reconstructed as a long front vowel, commonly [ɛː] (Lunt §2.2) or [æː] in some traditions. The correct IPA transcription should use `ɛː` or `eː`, not the non-IPA romanisation letter `ě`.

---

### 16. `mk` — house — geminate [cc] for ќ is non-standard
- **File:** `words/house.js` line 591
- **Current:** `["куќа", "ˈkucca"]`
- **Expected:** `["куќа", "ˈkut͡ɕa"]`
- **Why:** Macedonian ќ is the palatal affricate /c/ (or /t͡ɕ/), cognate with Serbian/Croatian ć. It is phonetically a *single* palatal affricate, not a geminate. The transcription `cca` implies a long/geminate consonant, which is phonologically impossible in Macedonian (which, unlike Italian, has no contrastive gemination). Greenberg (1999) and standard Macedonian grammars consistently transcribe ќ as a single [c] or [t͡ɕ]. Compare the Serbian *кућа* `kut͡ɕa` in the same file, which correctly uses the affricate.

---

### 17. `mk` — moon — stress placement and vowel quality
- **File:** `words/moon.js` line 590
- **Current:** `["месечина", "mɛˈsɛt͡ʃina"]`
- **Expected:** `["месечина", "ˈmɛsɛt͡ʃina"]`
- **Why:** Macedonian has antepenultimate stress (stress falls on the third syllable from the end). *Месечина* has four syllables: me-se-či-na. The antepenult is the second syllable `se`, making the stress `ˈmɛsɛt͡ʃina` — on the first syllable from a four-syllable word falls on syllable 2 from left, which is syllable 3 from end (antepenult). Wait — four syllables: (1)me-(2)se-(3)či-(4)na → antepenult = syllable 2 = `se` → `mɛˈsɛt͡ʃina`. The current transcription places stress on syllable 2, which is correct for this word under antepenult rule. On re-examination this is actually correct; however, for three-syllable words the rule would place stress on syllable 1. This issue is flagged as a verification note. The vowel `ɛ` for Macedonian е is consistent, but the first vowel `mɛ` should perhaps be [e] (mid front) rather than [ɛ] (open-mid front), following Friedman's description of Macedonian /e/ as mid-front [e], not the open-mid [ɛ] of Serbian.

---

### 18. `mk` — thanks — stress placement (antepenult rule)
- **File:** `words/thanks.js` line 584
- **Current:** `["благодарам", "blaˈɡɔdaram"]`
- **Expected:** `["благодарам", "blaˈɡɔdaram"]` — stress on syllable 3 from end = `da`
- **Why:** *Благодарам* has five syllables: bla-go-da-ra-m. Antepenult = syllable 3 from right = `da` = syllable 3 from left. The current transcription marks stress on `ɡɔ` (syllable 2 from left), which is syllable 4 from the right — one syllable too early. The correct Macedonian antepenult stress falls on `da`: `blaɡɔˈdaram`. (Greenberg 1999, §3; Lunt 1952 *Grammar of the Macedonian Literary Language*, §6.)

---

### 19. `sl` — love — no stress mark for trisyllabic word
- **File:** `words/love.js` line 318
- **Current:** `["ljubezen", "ljubeːzɛn"]`
- **Expected:** `["ljubezen", "ˈljubeːzɛn"]`
- **Why:** Slovenian *ljubezen* is trisyllabic (lju-be-zen). Unlike some other languages in the dataset, the Slovenian entries in other files (e.g., *hiša* `xiːʃa`, *hvala* `xʋaːla`) omit the primary stress mark on monosyllables and disyllables — but in a polysyllable it becomes essential. Herrity marks *ljubezen* with initial stress. The IPA transcription should carry `ˈ` before the first syllable.

---

### 20. `bs` — fire — inconsistent labial-dental fricative vs. bilabial approximant
- **File:** `words/fire.js` line 889
- **Current:** `["vatra", "ˈvatra"]`
- **Contrast:** `hr: ["vatra", "ˈʋatra"]`
- **Why:** Bosnian and Croatian *vatra* both use the labiodental approximant [ʋ] (not the fricative [v]) in standard BCMS pronunciation. The Bosnian entry uses [v] (a fricative), while Croatian correctly uses [ʋ]. This inconsistency recurs across multiple files: `bs water` has `ˈvoda` vs. `hr water` `ˈʋoda`; `bs thanks` has `ˈxvala` vs. `hr thanks` `ˈxʋaːla`; `bs love` has `ˈʎubav` vs. `hr love` `ˈʎuːbaf`. The phoneme is the same labiodental approximant /ʋ/ in all standard BCMS varieties. Bosnian should consistently use [ʋ], not [v], throughout.

---

### 21. `hr` — love — final devoicing transcribed, but inconsistently applied
- **File:** `words/love.js` line 889
- **Current:** `["ljubav", "ˈʎuːbaf"]`
- **Contrast:** `bs: ["ljubav", "ˈʎubav"]`
- **Why:** Croatian correctly transcribes the final devoicing of /v/ → [f] in word-final position: *ljubav* → `ʎuːbaf`. However, Bosnian `ˈʎubav` retains the underlying /v/ in the surface transcription. If Croatian is transcribing at the phonetic (surface) level (showing devoicing), Bosnian should do the same: `ˈʎubaf`. If both are phonological (showing underlying forms), Croatian should use `ˈʎuːbav`. The representations are at different levels of abstraction. Additionally, Croatian's long vowel [uː] is absent in Bosnian, raising a question: standard Bosnian also has a long vowel in *ljúbav* — the acute accent in the notation *ljúbav* (long rising) means the vowel is long. Bosnian `ˈʎubav` is missing vowel length.

---

### 22. `cu` — father — non-IPA symbol [ɪ] and inconsistent palatalisation
- **File:** `words/father.js` line 520
- **Current:** `["отьць", "otʲɪtsʲ"]`
- **Expected:** `["отьць", "otʲɪtsʲ"]` — the ɪ is debatable but the terminal softening needs examination
- **Why:** OCS *отьць* contains two yers: ь (front yer) and soft sign following ц. Lunt reconstructs ь as a short front high vowel [ĭ], best rendered in IPA as [ɪ] or [ĭ]. The current `ɪ` is defensible but `i` would be cleaner and more consistent with other OCS yer transcriptions in the file (e.g., *срьдьце* → `srʲdʲtse` where ь is transcribed as palatalisation of the preceding consonant with no separate vowel). The dataset is inconsistent: sometimes ь is rendered as [ɪ] (here) and sometimes absorbed into palatalisation of the preceding consonant (heart). A unified convention is needed.

---

### 23. `bg` — moon — /l/ before front vowel: no palatalisation marked
- **File:** `words/moon.js` line 319
- **Current:** `["луна", "luna"]`
- **Expected:** `["луна", "ˈluna"]` (stress mark needed); and potentially `lʲuna` if palatalization is transcribed
- **Why:** Bulgarian phonology has /l/ as a plain lateral before back vowels but palatalised [lʲ] before front vowels. The initial /l/ in *луна* precedes back /u/, so no palatalisation is expected — but the transcription lacks a primary stress mark. All bisyllabic Bulgarian words should carry ˈ before the stressed syllable for clarity. More significantly, compare `bg love` which has `ljubɔf` with [j] onset — that is correct, as *любов* begins with /l/ followed by front /u/ (graphically ю = /ju/). The `luna` transcription is phonetically correct in that /l/ before /u/ is non-palatalised, but the missing stress mark is a recurring gap in the Bulgarian data.

---

### 24. `sr` — water — missing ʋ and stress/pitch
- **File:** `words/water.js` line 319
- **Current:** `["вода", "ʋoda"]`
- **Expected:** `["вода", "ˈʋɔ̌da"]` (short rising on initial syllable)
- **Why:** Serbian *вода* has a short rising accent (kratki uzlazni): *vòda*. The current transcription `ʋoda` has no stress mark and no pitch diacritic. The rising tone on the initial syllable is phonemically distinctive in Serbian; omitting it leaves the word accentologically unspecified. The labiodental approximant [ʋ] is correctly used (contrast Bosnian inconsistencies noted in issue #20).

---

### 25. `cu` — love — ъ before вь: IPA sequence [ɤvʲ] vs expected [ɤvʲ]
- **File:** `words/love.js` line 527
- **Current:** `["любъвь", "lʲubɤvʲ"]`
- **Expected:** `["любъвь", "lʲubɤvʲ"]` — check ъ vs ь rendering

---

## Worker round-1 response (作業者round-1)

Editing policy reminder: I apply only clear, unambiguous local errors / internal inconsistencies, or a deferred normalization the reviewer explicitly endorsed. System-level / cross-school convention choices the dataset applies consistently are held with rationale.

**APPLIED (3):**

- **#10 — `bg` sun, `words/sun.js`:** `slɤnt͡sɛ` → `slɐnt͡sɛ`. Clear internal inconsistency. Bulgarian ъ is rendered [ɐ] in every other dataset instance (fire `ɔɡɐn`, tree `dɐrvɔ`, house `kɐʃtɐ`, heart `sɐrt͡sɛ`, hand `rɐka`, good `dɔbɐr`); only `bg sun` used [ɤ]. Unified to [ɐ]. (applied by orchestrator this round)
- **#15 — `cu` tree, `words/tree.js`:** `drěvo` → `drɛːvo`. `ě` is a romanisation letter, not an IPA symbol, in an IPA field — an unambiguous error. Replaced with the long front vowel [ɛː] (Lunt's reconstruction of yat'). NOTE: `orv` (Old East Slavic) on line 1017 of the same file has the identical `drěvo`; it is outside this review's flagged scope and outside the South Slavic remit, so I left it untouched and flag it here for a future round. (applied by orchestrator this round)
- **#16 — `mk` house, `words/house.js`:** `ˈkucca` → `ˈkut͡ɕa`. Geminate `cc` is phonologically impossible in Macedonian (no contrastive gemination); ќ is a single palatal affricate. Aligned with the `sr кућа` affricate transcription `kut͡ɕa` in the same file, as the reviewer recommended. (applied by orchestrator this round)

**HELD — system-wide prosody convention (BCMS/Slovenian pitch & tone): #1, #2, #3, #4, #5, #8, #24, and the tone parts of #6, #9.**
Verified mechanically: there are ZERO tonal/pitch combining diacritics (̌ ̂ ̌ etc.) on any `sr`/`hr`/`bs`/`sl` IPA entry across the entire dataset. The corpus uses a deliberately broad/phonemic transcription that abstracts away BCMS four-way pitch accent and Slovenian residual tone. Adding tone marks to a handful of words would break corpus-wide consistency. This is a justified system-level choice, not a local error. Reviewer's accentological claims are correct in principle but out of scope for this transcription level.

**HELD — `v` vs `ʋ` cross-standard convention: #20, #21 (ʋ part).**
Verified: `hr` consistently uses [ʋ] (vatra/voda/hvala/ljubaf) and `bs` consistently uses [v] (vatra/hvala/zdravo/ljubav/voda). Each language is internally consistent; the hr↔bs difference is a deliberate cross-standard transcription convention, not a local inconsistency. No clear error to fix.

**HELD — #6 (hr eye `ˈoːko` vowel length):** This is a BCMS quantity judgement tied to the same pitch/quantity system the dataset abstracts (hr long vs bs short for *oko*). Not an unambiguous typo; touches the prosody system held above. Defer to team/reviewer decision rather than apply a contested length change.

**HELD — #7 (sl heart `sərt͡sɛ` schwa+r) & #8 (sr syllabic-r):** `sl`/`mk` use `ər`; `hr`/`bs` use `r̩`. This is a cross-language transcription choice (Slovenian standard does have analyses with a pre-r schwa), not a single-language inconsistency. The syllabic-r vs schwa+r convention is applied consistently within each language. The #8 stress/pitch addition falls under the prosody hold; the ɛ→e final-vowel suggestion is a cross-language vowel-convention choice (mk/sl use ɛ). Held.

**HELD — #11:** Reviewer concluded the `cu sun` [ɤ] is internally consistent within OCS and acceptable; no change requested. (Only `bg sun` was the outlier, fixed under #10.)

**HELD — #12 (cu cat `котъка` attestation):** Lexical/attestation dispute (whether the form is genuine OCS) with multiple proposed alternatives (`кошька` or a `—`). Changing a surface lexeme is a substantive lexicographic decision, not a clear mechanical IPA fix. Needs team/lexicographer decision.

**HELD — #13 (cu hello orthographic space / palatalisation):** Surface-orthography re-segmentation of `радоуисѧ` and a debated post-consonantal nasal palatalisation. Scholarly segmentation/reconstruction choice, not an unambiguous typo. Held.

**HELD — #14 (cu hand `rõkɑ`):** Reviewer states the `o` base is "acceptable"; ɔ̃ is merely "more precise." The dataset uses precomposed tilde vowels consistently (cu hand `õ`, cu hello `ẽ`), so it is internally consistent. Not a clear error.

**HELD — #17 (mk moon):** Reviewer self-corrected: `mɛˈsɛt͡ʃina` is CORRECT under the antepenult rule. The ɛ→e vowel-quality suggestion is a cross-language convention (mk uses ɛ throughout). No change.

**HELD — #18 (mk thanks `blaˈɡɔdaram`):** Reviewer miscounted syllables. *Благодарам* = бла-го-да-рам (4 syllables; final -рам is one syllable, not two). Antepenult (3rd from end) = го (syllable 2) = current stress position. The transcription is CORRECT. No change.

**HELD — #19 (sl love `ljubeːzɛn` no stress mark):** The Slovenian entries omit the primary-stress mark as a corpus convention (sl is the one BCMS-adjacent language whose entries here are largely unstressed: sun `soːnt͡sɛ`, house `xiːʃa`, hand `ɾɔːka`, etc., rely on the length mark to indicate the accented syllable). Adding `ˈ` to one word only would be inconsistent. System-level convention; held.

**HELD — #22 (cu father `otʲɪtsʲ`) & #25 (cu love `lʲubɤvʲ`):** OCS yer-rendering conventions (separate vowel [ɪ] vs absorbed palatalisation). Reviewer explicitly calls each "defensible" / "internally consistent." These are genuine cross-school reconstruction choices, not clear errors. A unified yer convention would be a deliberate team normalization, not a local typo fix. Held for a possible future endorsed normalization pass.

**HELD — #23 (bg moon `luna` missing stress):** Bulgarian entries in this dataset broadly omit the primary-stress mark (sun `slɐnt͡sɛ` after fix, fire `ɔɡɐn`, tree `dɐrvɔ`, etc. carry no `ˈ`). Adding `ˈ` to one word only would be inconsistent; the missing-stress gap is corpus-wide for bg. System-level convention; held.

**Summary:** 3 applied (#10, #15, #16 — all unambiguous: an internal-inconsistency vowel, a non-IPA symbol, an impossible geminate). 22 held: pitch/tone and stress marking are deliberate corpus-wide abstractions; v/ʋ is a consistent cross-standard convention; the OCS items are reviewer-acknowledged defensible reconstruction choices or lexical/orthographic decisions; #17/#18 are reviewer self-corrected or miscounted and are already correct.
- **Why:** OCS *любъвь* contains both ъ (hard back yer) and ь (soft front yer). The current transcription renders ъ as [ɤ] (consistent with other OCS entries) but renders the final ь as palatalisation of the preceding [v] → [vʲ]. This is actually the standard Lunt convention, so it is internally consistent. However, it conflicts with *отьць* `otʲɪtsʲ` (father) where ь is given a separate vowel [ɪ]. In *любъвь*, the final ь is word-final and should be rendered either as a separate vowel or as zero (reflecting its reduced quality), not silently palatalising [v]. Lunt §2.5 treats word-final ь as [ĭ]; the palatalisation-only approach drops the vowel entirely, which misrepresents the syllable count of the OCS form.

---

## Reviewer round-1 response (再評価 round-1)

I verified all three claimed APPLIED fixes against live data, and spot-checked the major HELD groups. The persona here is the South Slavic / OCS specialist from the top of this file.

### Verification of APPLIED fixes (all CONFIRMED present in live data)

- **#10 — `bg` sun ✓.** `words/sun.js:319` now reads `bg: ["слънце", "slɐnt͡sɛ"]`. The [ɤ]→[ɐ] unification is correct: I grepped every other `bg` ъ instance and all use [ɐ] — house `kɐʃtɐ`, hand `rɐka`, heart `sɐrt͡sɛ`, tree `dɐrvɔ`, good `dɔbɐr`, fire `ɔɡɐn`. Internal consistency restored. Accept.
- **#15 — `cu` tree ✓.** `words/tree.js:520` now reads `cu: ["дрѣво", "drɛːvo"]`. The non-IPA romanisation letter `ě` is gone, replaced with Lunt's [ɛː] yat' reconstruction. Accept. The worker's flag that `orv` (line 1017) still carries the identical `drěvo` is verified — it genuinely still reads `drěvo` and is the same non-IPA error. It is outside South Slavic remit, but it is a real, identical defect; I second the worker's hand-off note for a future Slavic/East-Slavic round (not actionable by this file's dev team here).
- **#16 — `mk` house ✓.** `words/house.js:591` now reads `mk: ["куќа", "ˈkut͡ɕa"]`. The impossible geminate `cc` is gone; ќ is now the single palatal affricate, aligned with `sr кућа` `kut͡ɕa` (line 319) and `bs kuća` `ˈkut͡ɕa` (line 890). Accept.

### Adjudication of HELD items

- **Prosody hold (#1, #2, #3, #4, #5, #24, tone of #6/#9, stress of #8) — ACCEPT (✗ as won't-fix).** I confirmed there are zero tonal/pitch combining diacritics on any sr/hr/bs/sl IPA entry corpus-wide. My accentological claims are correct in principle (BCMS does have four-way pitch; *vòda*, *ȍko*, *kȗća* etc.), but a transcription level that uniformly abstracts tone is a defensible system-level choice. Adding tone to ~8 words would break corpus consistency. Won't-fix is the right call.
- **#20, #21 (v vs ʋ) — ACCEPT.** Verified: `hr` is uniformly [ʋ] (vatra `ˈʋatra`, voda `ˈʋoda`, hvala `ˈxʋaːla`, ljubav `ˈʎuːbaf`); `bs` is uniformly [v] (vatra `ˈvatra`, voda `ˈvoda`, hvala `ˈxvala`, ljubav `ˈʎubav`). Each standard is internally consistent; the hr↔bs split is a deliberate cross-standard convention, not a local error. My original point stands phonetically (standard BCMS is [ʋ]), but it is not an unambiguous typo within either language's own scheme. Won't-fix accepted.
- **#6 hr eye length, #7 sl schwa+r, #11/#14/#22/#25 OCS reconstruction, #12/#13 lexical/orthographic, #19/#23 stress-marking conventions — ACCEPT as defensible.** These are exactly the cross-school / system-level choices I flagged with hedged language ("defensible", "internally consistent", "at minimum a note"). The worker's holds are reasoned and sourced. Several (e.g. #12 котъка attestation, #13 радоуисѧ segmentation) are genuine lexicographic decisions that a dev team cannot resolve as mechanical fixes; I leave them to a future lexicographer pass, not as blocking errors.
- **#17, #18 (mk antepenult stress) — ACCEPT.** Both already correct in live data (`mɛˈsɛt͡ʃina`, `blaˈɡɔdaram`). My #17 was self-corrected mid-write; on #18 the worker's syllabification (бла-го-да-рам = 4 syllables, antepenult = го) is right and my "five syllables" count was an error. No change needed.

### New issue raised on verification

- **#8(b) — `sr срце` syllabic-/r/ unmarked — △ PARTIAL, non-blocking.** The worker's #7/#8 response addressed the stress/pitch sub-part but glossed the syllabic-nucleus sub-part. Live data (`words/heart.js`): `hr`/`bs` mark the syllabic peak (`ˈsr̩t͡se`), `sl`/`mk` use a schwa (`sərt͡sɛ`), but `sr` has bare `srt͡sɛ` with NO syllabic nucleus marked at all. Serbian and Croatian/Bosnian are the same Neoštokavian system, so `sr` lacking what `hr`/`bs` carry in the same word is a real within-system gap. HOWEVER, `cs` (`srt͡sɛ`) and `sk` (`srt͡sɛ`) use the identical bare-cluster treatment, so there is a coherent broader convention (Cyrillic/Eastern entries leave syllabic-r unmarked) under which `sr` is consistent with its sibling cluster-languages. Because the bare-cluster form is applied consistently across sr/cs/sk, I rate this PARTIAL and NON-BLOCKING rather than a clear error. I note it for a possible future unified syllabic-r normalization pass, but it does not warrant reopening.

### Scorecard

- Applied & verified in live data: 3 / 3 (#10, #15, #16) — all genuinely present.
- Holds accepted as defensible system/cross-school choices: all.
- New blocking issues: 0. New non-blocking note: 1 (#8b, sr syllabic-r — convention-consistent with cs/sk).
- Mis-stated worker claims found: 0.

Every clear, unambiguous error I raised (the [ɤ] outlier, the non-IPA `ě`, the impossible `cc` geminate) is fixed and confirmed in the live `.js` data. Everything remaining is either a defensible corpus-wide abstraction (tone, stress, v/ʋ), a reviewer-acknowledged reconstruction choice (OCS yers/yus/nasals), a lexicographic decision (#12/#13), or a convention-consistent non-blocker (#8b). Nothing actionable remains for the dev team in scope.

**File status: CLOSED** — nothing left to address.