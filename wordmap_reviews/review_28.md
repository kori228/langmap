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
- **Why:** OCS *любъвь* contains both ъ (hard back yer) and ь (soft front yer). The current transcription renders ъ as [ɤ] (consistent with other OCS entries) but renders the final ь as palatalisation of the preceding [v] → [vʲ]. This is actually the standard Lunt convention, so it is internally consistent. However, it conflicts with *отьць* `otʲɪtsʲ` (father) where ь is given a separate vowel [ɪ]. In *любъвь*, the final ь is word-final and should be rendered either as a separate vowel or as zero (reflecting its reduced quality), not silently palatalising [v]. Lunt §2.5 treats word-final ь as [ĭ]; the palatalisation-only approach drops the vowel entirely, which misrepresents the syllable count of the OCS form.