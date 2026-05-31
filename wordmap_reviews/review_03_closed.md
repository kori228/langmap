# Wordmap review #03 — Slavic linguistics specialist

## Reviewer self-introduction (ペルソナ自己紹介)

My primary research field is Proto-Slavic phonology and the comparative-historical grammar of the Slavic language family. My work draws on Shevelov's *A Prehistory of Slavic* (1964) and Carlton's *Introduction to the Phonological History of the Slavic Languages* (1991) for the reconstruction of Common Slavic vowel and consonant systems, including the three palatalization series and the open-syllable constraint that drove the CoRoC pleophony (East Slavic) vs. metatony and liquid-metathesis (South and West Slavic) split. For Old Church Slavonic, I work from the Codex Marianus and Codex Zographensis in the text-critical tradition, relying on Vaillant's *Manuel du vieux slave* and Lunt's *Old Church Slavonic Grammar* for canonical IPA reconstructions. Etymological control is exercised with Vasmer's *Etymologisches Wörterbuch der russischen Sprache*, Brückner's *Słownik etymologiczny języka polskiego*, and Skok's *Etymologijski rječnik hrvatskoga ili srpskoga jezika*. I have also worked on Slavic accentology (the Stang–Dybo law, neo-acute retraction) and on the modern dialecto-logical continua from Kashubian through Slovak to Macedonian.

---

## Issues found

### 1. `ru` — *water* — missing stress mark in IPA

- **File:** `words/water.js` line 101
- **Current:** `["вода", "vɐda"]`
- **Expected:** `["вода", "vɐˈda"]`
- **Note:** Russian has free lexical stress; вода́ is stressed on the second syllable. The IPA transcription `vɐda` is unambiguous as to vowel quality (the unstressed /o/ reduces to [ɐ] correctly), but the primary stress diacritic `ˈ` before `da` is absent. Wiktionary (ru), Zalizniak's *Grammatical Dictionary of the Russian Language*, and every major Russian learner resource agree on /vɐˈda/. This is a systematic omission visible across multiple Russian entries (see also issues 2, 3, 4, 5, 6).

---

### 2. `ru` — *one* — missing stress mark in IPA

- **File:** `words/one.js` line 101
- **Current:** `["один", "ɐdʲin"]`
- **Expected:** `["один", "ɐˈdʲin"]`
- **Note:** оди́н has fixed stress on the second syllable: /ɐˈdʲin/. Without the stress mark the transcription suggests initial stress, which is incorrect.

---

### 3. `ru` — *hello* — missing stress mark in IPA

- **File:** `words/hello.js` line 101
- **Current:** `["привет", "prʲɪvʲet"]`
- **Expected:** `["привет", "prʲɪˈvʲet"]`
- **Note:** приве́т has stress on the second syllable /prʲɪˈvʲet/. The vowel qualities are correctly transcribed (unstressed /и/ as [ɪ]), but the stress mark is absent.

---

### 4. `ru` — *sun* — missing stress mark in IPA

- **File:** `words/sun.js` line 101
- **Current:** `["солнце", "sont͡sɨ"]`
- **Expected:** `["солнце", "ˈsont͡sɨ"]`
- **Note:** со́лнце has fixed initial stress. The silent /l/ (reflected in spelling but not pronunciation) is correctly omitted from the IPA. The missing `ˈ` before the first syllable is a stress-mark omission.

---

### 5. `ru` — *dog* — missing stress mark in IPA

- **File:** `words/dog.js` line 101
- **Current:** `["собака", "sɐbakɐ"]`
- **Expected:** `["собака", "sɐˈbakɐ"]`
- **Note:** соба́ка has stress on the second syllable. Unstressed /o/ correctly renders as [ɐ] in first pre-tonic position, and unstressed final /a/ as [ɐ], both correct — but again the primary stress diacritic is absent.

---

### 6. `ru` — *hand* — missing stress mark; wrong vowel symbol for unstressed /u/

- **File:** `words/hand.js` line 101
- **Current:** `["рука", "rʊka"]`
- **Expected:** `["рука", "rʊˈka"]`
- **Note:** рука́ is stressed on the second syllable. More importantly, the symbol `ʊ` (near-close near-back) is used for the unstressed first syllable — in standard Russian phonetic transcription unstressed /u/ is typically kept as [u] (it does not reduce to [ʊ] the way /o/ reduces to [ɐ]), though some phoneticians accept [ʊ] for a reduced unstressed /u/. Either way, the stress mark must be present.

---

### 7. `sr` — systematic missing stress marks across all multisyllabic entries

- **Files:** multiple
- **Affected entries:** `вода` `ʋoda` (water.js:319), `добар` `dɔbar` (good.js:312), `рука` `ruka` (hand.js:312), `срце` `srt͡sɛ` (heart.js:312), `отац` `otat͡s` (father.js:312), `љубав` `ʎubaʋ` (love.js:319), `ватра` `ʋatra` (fire.js:318), `хвала` `xʋala` (thanks.js:312), `здраво` `zdraʋo` (hello.js:312), `мачка` `mat͡ʃka` (cat.js:312), `јести` `jɛsti` (eat.js:312), `сунце` `sunt͡se` (sun.js:318), `мајка` `majka` (mother.js:318), `месец` `mɛsɛt͡s` (moon.js:318)
- **Note:** Every Serbian entry in the dataset is missing the primary stress diacritic `ˈ`. Serbian retains the four-tone pitch-accent system (long/short rising/falling), so a minimal representation should at least mark the position of the primary accent with `ˈ`. All these words have fixed or highly predictable stress: ˈʋoda, ˈdobar, ˈruka, ˈsrt͡sɛ, ˈotat͡s, ˈʎubaʋ, ˈʋatra, ˈxʋala, ˈzdraʋo, ˈmat͡ʃka, ˈjɛsti, ˈsunt͡se, ˈmajka, ˈmɛsɛt͡s.

---

### 8. `bg` — systematic missing stress marks across all multisyllabic entries

- **Files:** multiple
- **Affected entries:** `вода` `vɔda` (water.js:320), `огън` `ɔɡɐn` (fire.js:319), `куче` `kut͡ʃɛ` (dog.js:313), `сърце` `sɐrt͡sɛ` (heart.js:313), `здравей` `zdravɛj` (hello.js:313), `баща` `baʃta` (father.js:313), `добър` `dɔbɐr` (good.js:313), `дърво` `dɐrvɔ` (tree.js:313), `любов` `ljubɔf` (love.js:320), `слънце` `slɤnt͡sɛ` (sun.js:319), `майка` `majka` (mother.js:319), `ръка` `rɐka` (hand.js:313), `благодаря` `blaɡɔdarʲa` (thanks.js:313), `едно` `ɛdnɔ` (one.js:319), `луна` `luna` (moon.js:319), `котка` `kɔtka` (cat.js:313), `къща` `kɐʃtɐ` (house.js:320)
- **Expected stress positions:** вода́ `vɔˈda`, огъ́н `ɔˈɡɐn`, куче́ `kuˈt͡ʃɛ`, сърце́ `sɐrˈt͡sɛ`, здравей `zdraˈvɛj`, баща́ `baˈʃta`, до́бър `ˈdɔbɐr`, дъ́рво `ˈdɐrvɔ`, любо́в `ljuˈbɔf`, сла́нце `ˈslɤnt͡sɛ`, ма́йка `ˈmajka`, ръка́ `rɐˈka`, благодаря́ `blaɡɔdaˈrʲa`, едно́ `ɛdˈnɔ`, луна́ `luˈna`, ко́тка `ˈkɔtka`, къ́ща `ˈkɐʃtɐ`
- **Note:** Bulgarian has fixed stress that must be learned lexically (it is not as free as Russian but moves unpredictably in paradigms). Omitting it entirely is a significant deficiency across the entire Bulgarian dataset.

---

### 9. `bg` — *one* — wrong citation form (neuter едно instead of masculine един)

- **File:** `words/one.js` line 319
- **Current:** `["едно", "ɛdnɔ"]`
- **Expected:** `["един", "ɛˈdin"]`
- **Note:** The task brief specifies masculine/base form for languages with grammatical gender. The citation form for "one" in Bulgarian (as in all Bulgarian dictionaries and grammars, including Stefanova's *Bulgarian Grammar*) is the masculine **един** /ɛˈdin/. The neuter **едно** is used for neuter nouns (едно дете 'one child') and informally as a non-specific article, but it is not the headword form. Macedonian by contrast uses маж. form **еден** (correctly given), making the Bulgarian choice inconsistently gendered.

---

### 10. `cs` — *moon* — spurious palatalization /mɲ/ in IPA

- **File:** `words/moon.js` line 315
- **Current:** `["měsíc", "mɲɛsiːt͡s"]`
- **Expected:** `["měsíc", "ˈmɲɛsiːt͡s"]` or more accurately `["měsíc", "ˈmɛsiːt͡s"]`
- **Note:** The digraph **mě** in Czech is pronounced /mɲɛ/ only in a minority of conservative/regional pronunciations; standard contemporary Czech has **mě** → [mɲɛ] in some environments but [mjɛ] in fast speech. The combination `mɲ` is not standard IPA for Czech — the palatal nasal /ɲ/ belongs to the sequence, but it represents a (rapidly receding) glide pronunciation. The Mluvnice češtiny (1986) and Palková's *Fonetika a fonologie češtiny* (1994) both give měsíc as /ˈmɲɛsiːts/ in formal style but /ˈmjɛsiːts/ is now dominant. More critically, the stress mark `ˈ` is absent entirely.

---

### 11. `cu` — *dog* — IPA transcription of ъ as /ɤ/ is contested; missing syllabic structure

- **File:** `words/dog.js` line 520
- **Current:** `["пьсъ", "pʲsɤ"]`
- **Expected:** `["пьсъ", "pĭsŭ"]` (or `"pʲɪsʊ"` in IPA approximation)
- **Note:** The reconstruction of Old Church Slavonic yers is a foundational issue. The back yer **ъ** is conventionally reconstructed as /ŭ/ (an ultrashort high back vowel), not as /ɤ/ (the mid-back unrounded vowel of Mongolian). The symbol `ɤ` appears throughout the OCS entries (домъ `domɤ`, добръ `dobrɤ`, ѥдинъ `jedinɤ`) and reflects a conflation with the Bulgarian sound written **ъ** in modern Bulgarian, which has indeed merged to /ɐ/~/ɤ/ in stressed syllables. But OCS reconstruction should use /ŭ/ or the IPA approximation /ʊ/. The parallel *orv* (Old East Slavic) entry on the same file correctly uses `pĭsŭ`. Consistency between OCS and OES columns is broken.

---

### 12. `cu` — *hand* — IPA for ѫ (big yus) uses tilde-nasal ˜ on wrong vowel; transcription inconsistency

- **File:** `words/hand.js` line 520
- **Current:** `["рѫка", "rõkɑ"]`
- **Expected:** `["рѫка", "rɔ̃kɑ"]` or conventionally `"rõnkɑ"` / `"rǫkɑ"`
- **Note:** The big yus **ѫ** represents the back nasal vowel, reconstructed as /ɔ̃/ (nasalized mid-back rounded) in most OCS handbooks (Vaillant, Lunt), not /õ/ (which would be close-mid front rounded nasalized, the vowel of French *bon* written differently). The diacritic `˜` placed on `o` in Unicode produces a different character from `ɔ̃`. The *orv* entry on the same word correctly writes `rǫka` using the IPA nasal-hook convention. The Codex Marianus tradition and Shevelov (1964, §45) reconstruct **ѫ** as /ɔ̃/ or /ũ/ (nasalized back vowel); /õ/ is typographically misleading.

---

### 13. `cu` — *tree* — Latin-script "ě" embedded in IPA field

- **File:** `words/tree.js` line 520
- **Current:** `["дрѣво", "drěvo"]`
- **Expected:** `["дрѣво", "ˈdrɛːvo"]` (or `"drěvo"` moved to a `form` field, not the IPA field)
- **Note:** The IPA field for OCS дрѣво contains `drěvo`, which uses the Latin háček-e `ě` — this is a Slavic transliteration convention (yat), not a valid IPA symbol. The vowel should be transcribed as /ɛː/ or /ie/ (the Proto-Slavic *ě₂ was a long front vowel; in OCS it is /ě/ = [jɛ] in some positions or [ɛː] depending on the manuscript tradition). The same issue appears in *orv* `drěvo` (line 1017), but there it may be intentional transliteration. In the IPA column it is an error; `ě` is not an IPA character.

---

### 14. `cu` — *heart* — IPA does not reflect the affricate in -це

- **File:** `words/heart.js` line 520
- **Current:** `["срьдьце", "srʲdʲtse"]`
- **Expected:** `["срьдьце", "srĭdĭt͡sɛ"]` or in IPA `"srdʲt͡sɛ"`
- **Note:** The word **срьдьце** contains the suffix *-це* derived from *-ьce* which triggers the third palatalization on the preceding dental and yields the affricate /t͡s/. The current IPA `srʲdʲtse` writes `ts` as two separate segments and omits the affricate tie-bar. The parallel *-це* ending in other OCS forms in this dataset (e.g., добръ, слъньце) is handled with `t͡s`, so the omission of the tie-bar here is inconsistent. Additionally, the /dʲ/ before /t/ would normally be in complementary distribution or assimilate; `srʲdʲtse` represents an implausible surface cluster. Standard reconstruction (Lunt 1959, §7.2) gives *srĭdĭ-ce* with the affricate: /srĭdʲt͡sɛ/ approximately.

---

### 15. `uk` — *water* and *fire* — /w/ used for prevocalic в, which should be /v/

- **Files:** `words/water.js` line 163, `words/fire.js` line 163
- **Current (water):** `["вода", "wɔdɑ"]`; **Current (fire):** `["вогонь", "wɔɦɔnʲ"]`
- **Expected (water):** `["вода", "vɔˈdɑ"]`; **Expected (fire):** `["вогонь", "vɔˈɦɔnʲ"]`
- **Note:** In Ukrainian phonology, the grapheme **в** has two principal allophones: [v] before vowels and voiced consonants, and [w] ~ [u̯] before voiceless consonants and word-finally. Before a vowel (**вода** /vɔˈdɑ/, **вогонь** /vɔˈɦɔnʲ/) the realization is bilabial-labiodental [v], not the glide [w]. Using /w/ in prevocalic position follows an older typological tradition but is inconsistent with the mainstream Ukrainian phonological descriptions (Shevelov 1979, Žovtobrjux 1979, and contemporary Ukrainian dialectological literature). The inconsistency is visible within the same dataset: **вогонь** uk uses `wɔɦɔnʲ` but the Russian/Polish cognates correctly use `v`-initial IPA. Additionally both entries lack stress marks.

---

### 16. `sl` — *heart* — /ə/ used for syllabic /r/ in srce, should be /r̩/

- **File:** `words/heart.js` line 311
- **Current:** `["srce", "sərt͡sɛ"]`
- **Expected:** `["srce", "ˈsr̩t͡sɛ"]`
- **Note:** Slovenian **srce** contains a syllabic /r/ (the vocalic rhotic), which the IPA represents as /r̩/ (r with syllabicity mark) or /r̥̩/. Writing `ərt͡sɛ` misanalyses the syllable peak as a schwa followed by /r/, implying an extra vowel that does not exist in the underlying form. The Croatian and Bosnian entries for the same word correctly use `ˈsr̩t͡se` (heart.js:882–883). The Macedonian entry `ˈsərt͡sɛ` (heart.js:584) has the same schwa error. This is an inconsistency within a single file: three entries use /r̩/ but Slovenian and Macedonian use /ər/.

---

### 17. `mk` — *fire* — non-standard word form оган vs. standard огин

- **File:** `words/fire.js` line 590
- **Current:** `["оган", "ˈɔɡan"]`
- **Expected:** `["огин", "ˈɔɡin"]` (standard Macedonian)
- **Note:** The standard Macedonian word for fire is **огин** /ˈɔɡin/ (Конески *Речник на македонскиот јазик*, Toporov & Uspensky). The form **оган** is a dialectal western Macedonian variant (cf. the Vardar dialect area documented by Koneski). Since the dataset targets the standard/literary language, **огин** should be the citation form. This is an unusual case where a dialectal item appears to have displaced the standard literary form.

---

### 18. `bg` — *thanks* — spurious palatalization on final /r/ in IPA

- **File:** `words/thanks.js` line 313
- **Current:** `["благодаря", "blaɡɔdarʲa"]`
- **Expected:** `["благодаря", "blaɡɔdaˈrja"]` or `"blaɡodaˈrja"`
- **Note:** Bulgarian **благодаря** 'I thank' ends in the sequence **-ря** = /rja/ where **я** is the iotated **а** (= /ja/). The IPA `rʲa` with a superscript palatalization diacritic on /r/ implies a single palatalized rhotic followed by /a/, which is the Russian analysis (Russian has true phonemic soft consonants, i.e. /rʲ/). Bulgarian does not have phonemic palatalized consonants; the sequence is /r/ + /j/ + /a/, conventionally written /rja/ (Mirčev, *Историческа граматика*, §44). The stress mark is also absent: благодаря́ is stressed on the final syllable /blaɡɔdaˈrja/.

---

### 19. `be` — *hello* — citation form is a noun (прывітанне 'greeting'), not a greeting formula

- **File:** `words/hello.js` line 308
- **Current:** `["прывітанне", "prɨvitanʲe"]`
- **Expected:** `["вітаю", "vʲiˈtaju"]` or `["добры дзень", "ˈdobrɨ ˈdzʲenʲ"]`
- **Note:** The task convention specifies a neutral everyday greeting. **Прывітанне** is the abstract noun 'greeting, salutation' — it is never used as a standalone greeting formula (analogous to offering "salutation" instead of "hello" in English). The natural colloquial Belarusian greeting is **вітаю** /vʲiˈtaju/ 'I greet (you)', or the calque **прывет** (informal, from Russian), or the neutral **добры дзень** 'good day'. Submitting the abstract noun for this slot violates the greeting-word convention that the dataset applies to every other language.

---

### 20. `cu` — *hello* — OCS "радоуисѧ" written as one token; small yus IPA uses wrong nasal symbol

- **File:** `words/hello.js` line 520
- **Current:** `["радоуисѧ", "rɑdujisẽ"]`
- **Expected:** `["радоуи сѧ", "rɑˈdujɪ sẽ"]` (or the ѧ more precisely as `ɛ̃`)
- **Note (orthography):** The OCS liturgical greeting **радоуи сѧ** (Luke 1:28; Codex Marianus fol. 143r; cf. the Annunciation formula χαῖρε) is canonically written as two tokens: the imperative *радоуи* and the clitic reflexive *сѧ*. Concatenating them into one orthographic word creates a ghost-form not found in any manuscript tradition.
- **Note (IPA):** The small yus **ѧ** = front nasal vowel is reconstructed as /ẽ/ (nasalized front mid vowel) or more precisely /ɛ̃/. The symbol `ẽ` uses a tilde on `e` (U+1EBD), but the IPA standard represents the vowel quality with `ɛ` (open-mid front) + combining tilde `̃` → `ɛ̃`. The distinction matters for front-vowel precision in the reconstruction of the Common Slavic nasal vowel system (Shevelov 1964 §43).

---

### 21. `sr`/`hr`/`bs` — inconsistent labiodental approximant: ʋ vs. v within Shtokavian

- **Files:** `words/fire.js` (sr:318, hr:888, bs:889), `words/water.js` (sr:319, hr:889, bs:890), `words/thanks.js` (sr:312, hr:882, bs:883)
- **Pattern observed:** Serbian entries consistently use `ʋ` (labiodental approximant), Croatian entries consistently use `ʋ`, but Bosnian entries use plain `v` (labiodental fricative).
- **Examples:** sr `ʋatra` / hr `ˈʋatra` / bs `ˈvatra` (fire); sr `ʋoda` / hr `ˈʋoda` / bs `ˈvoda` (water); sr `xʋala` / hr `ˈxʋaːla` / bs `ˈxvala` (thanks).
- **Expected:** All three varieties of Shtokavian (the basis of standard Serbian, Croatian, and Bosnian) share the same phoneme /ʋ/ (voiced labiodental approximant, not fricative). This is uncontroversial in Slavic phonology (Ivić *Die serbokroatischen Dialekte*, Lisac *Hrvatska dijalektologija*). Bosnian entries should use `ʋ` for consistency, or all three should use `v` if a simplified convention is adopted — but mixing `ʋ` and `v` within the same phoneme across the three registers is an error.

---

### 22. `ru` — *love* — missing stress mark; also final /fʲ/ is correct but unstressed /ʊ/ debatable

- **File:** `words/love.js` line 101
- **Current:** `["любовь", "lʲʊbofʲ"]`
- **Expected:** `["любовь", "lʲʊˈbofʲ"]`
- **Note:** любо́вь has stress on the second syllable; the missing `ˈ` before `bofʲ` is required. The vowel `ʊ` in the first syllable is acceptable for the slightly laxed unstressed pre-tonic /u/ in Russian, though many transcriptions keep it as `u`. The final devoicing of /v/ → [f] and its palatalization `fʲ` before the soft sign are correctly captured.

---

### 23. `sk` — *eat* — IPA for Slovak jesť transcribes /ť/ as plain /c/ (velar) rather than /c/ (palatal)

- **File:** `words/eat.js` line 310
- **Current:** `["jesť", "jɛsc"]`
- **Expected:** `["jesť", "jɛsc"]` — the palatal stop `c` (IPA: voiceless palatal stop) is phonetically correct for Slovak /ť/, so this is not wrong in itself, but `c` is easily confused with the velar /k/ variant. A more standard treatment would be `ˈjɛsc` (adding the stress mark) since Slovak has fixed initial stress. The absence of `ˈ` is the primary issue.
- **Addendum:** Slovak has fixed stress on the initial syllable, yet no entry in the Slovak dataset carries a stress diacritic. A systematic stress-mark omission affects `jɛdɛn` (one), `jɛsc` (eat), `pɪc` (drink), `laːska` (love), `dobriː` (good), `voda`, `strom`, `srt͡sɛ`, `mat͡ʃka`, `pɛs`, `mɛsɪat͡s` — all multisyllabic and all without `ˈ`.

---

### 24. `be` — *water* — missing stress mark; vowel akanye correctly reflected but mark absent

- **File:** `words/water.js` line 315
- **Current:** `["вада", "vada"]`
- **Expected:** `["вада", "vaˈda"]`
- **Note:** Belarusian вада́ has stress on the second syllable, just as the etymologically parallel Russian вода́. Belarusian akanye (unstressed /o/ → /a/) is correctly shown in the spelling вада and in the IPA `va-`, but the primary stress `ˈ` before `da` is absent. The same omission applies to be "рука" `ruka` (hand.js:308) — stress should be `ruˈka`, and be "каханне" `kaxanʲe` (love.js:315) — stress should be `kaˈxanʲe`.

---

*Total defensible issues identified: 24 (covering stress-mark omissions, IPA symbol errors, OCS reconstruction mismatches, Slavic-internal dialectal inconsistencies, a citation-form selection error, and one word-form error).*

---

## Worker round-1 response (作業者round-1)

Thanks for the thorough Slavic review. I investigated each item against the actual per-language data and the project's stated conventions. One clear, convention-violating error is fixed; the remainder are held as either deliberate per-language transcription conventions, defensible linguistic variants, or system-level normalizations that should not be applied piecemeal.

### Applied

- **#9 `bg` *one* — citation form neuter едно → masculine един.** (applied by orchestrator this round) The concept definition itself mandates the masculine/base form ("в языках с родом — мужская/основная форма (ar واحد, he אחد, fr un, es uno)"), and every other gendered Slavic sibling in `one.js` follows it (mk еден, sr један, cs/sk/pl jeden, hr/bs jedan). Bulgarian едно is neuter and is the lone violation. Fixed surface едно→**един** and IPA `ɛdnɔ`→`ɛdin`. I deliberately did NOT add a stress mark (`ɛˈdin`) because all 20 bg entries in the dataset are uniformly stress-free (see #8 below); adding stress to just this one entry would introduce a new inconsistency.

### Held — uniform per-language convention (not a local error)

- **#7 `sr` stress / #8 `bg` stress (mark only) / #23 `sk` stress / #10 `cs` stress / #18 `bg` stress.** Verified: sr (0/40 with `ˈ`), bg (0/20), sk (0/all multisyllabic), cs (0/all), be (0/all) are *uniformly* stress-free across the entire dataset. This is a settled per-language convention, not scattered omissions. Adding `ˈ` to every multisyllabic entry of these five languages is a system-level normalization the team has not endorsed in round-1; per the editing policy I hold rather than unilaterally re-convention an entire language family. Recommend a team-level decision if stress marking is desired corpus-wide.

- **#15 `uk` /w/ vs /v/.** uk uses `w` for в *consistently* in every position — prevocalic (water `wɔdɑ`, fire `wɔɦɔnʲ`, tree `dɛrɛwɔ`), final (love `lʲubɔw`), and in `prɪwit`. The [w]~[ʋ] analysis of Ukrainian в is a legitimate scholarly position. Changing only water+fire to /v/ would break uk-internal consistency. Held as a deliberate uk-wide convention.

- **#11 `cu` ъ=ɤ / #12 `cu` ѫ=õ / #13 `cu` ѣ=ě / #20 `cu` ѧ=ẽ.** The OCS (`cu`) column uses its own consistent transliteration-flavoured IPA: back yer ъ→`ɤ` everywhere (добръ `dobrɤ`, котъка `kotɤkɑ`, домъ `domɤ`, ѥдинъ `jedinɤ`, слъньце `slɤnʲtse`, любъвь `lʲubɤvʲ`), and yat ě / yus õ / ẽ as transliteration symbols. Re-aligning `cu` to the `orv` (Old East Slavic) breve/hook convention (`pĭsŭ`, `rǫka`, `ǫ`) would break `cu`-internal consistency — these are two distinct columns with two distinct notational systems. The "correct" reconstruction symbols are also contested across handbooks. Held as a system-level convention choice for the OCS column; flagging for a possible future unified-OCS-notation pass.

### Held — defensible linguistic variant (reviewer correction not unambiguous)

- **#1–#6, #22 `ru` stress (+ #6/#22 `ʊ`).** Russian is internally split: cat `ˈkoʂkə` and good `xɐˈroʂɨj` carry stress, the rest do not. So it is ambiguous whether the convention is "stress" or "no stress." Adding `ˈ` to ~12 entries on the basis of 2 outliers is a broad normalization, not a clear local fix; held pending a corpus-wide stress decision (same as #7/#8). The `ʊ` for reduced unstressed /u/ is used consistently (hand `rʊka`, love `lʲʊbofʲ`) and you concede some phoneticians accept it — not an error.

- **#16 `sl`/`mk` schwa vs /r̩/.** Slovenian srce genuinely has a phonetic schwa before syllabic r ([ˈsəːrt͡sɛ]), distinct from Croatian [ˈsr̩t͡se]; Macedonian orthoepy likewise vocalizes syllabic r as [ər]. The hr/bs /r̩/ entries are correct for those languages, but sl/mk `ərt͡sɛ` is defensible and not a clear error. Held.

- **#17 `mk` *fire* оган vs огин.** The standard Macedonian lemma (Дигитален речник / Речник на македонскиот јазик) is **оган**; огин is at best a co-variant, not the unambiguous standard. The reviewer's direction (оган dialectal, огин standard) is contested/arguably reversed. Held as not a clear error.

- **#19 `be` *hello* прывітанне.** Belarusian "Прывітанне!" is in everyday use as a greeting interjection, exactly parallel to Russian "Привет" (itself the noun/interjection, accepted in `ru` hello). The claim that it is "never" a standalone greeting is overstated. Held.

- **#21 `bs` v vs ʋ.** Same situation as #15/#7: a register-level notation choice (Bosnian column uses plain `v`, sr/hr use `ʋ`) applied consistently within each register; normalizing across registers is a convention decision, not a local error. Held.

- **#14 `cu` *heart* affricate tie-bar.** `srʲdʲtse` is in the same transliteration-flavoured `cu` notation as the rest of the OCS column (cf. #11–#13); the orv parallel `sĭrdĭtse` likewise writes plain `ts`. This rolls into the OCS-notation pass noted above rather than a standalone fix. Held.

### Summary
Applied 1 clear, convention-violating data error (#9). Held the remaining 23 as either uniform per-language conventions (#7/#8/#10-mark/#11/#12/#13/#14/#15/#18-mark/#20/#21/#23), defensible linguistic variants (#1-6/#16/#17/#19/#22), or broad stress-normalization decisions that require team-level sign-off rather than piecemeal edits.

---

## Reviewer round-1 response (再評価 round-1)

I re-verified every item against the live `words/*.js` data (via `node` extraction of each `<lang>: ["surface","ipa"]` pair). My findings as the Slavic specialist:

### Verification of the one applied fix

- **#9 `bg` *one*** — VERIFIED in live data: `words/one.js:319` now reads `bg: ["един", "ɛdin"]`. Surface and IPA both corrected from neuter едно→masculine **един**, consistent with the masculine/base-form convention and the gendered Slavic siblings (mk еден, sr један, jeden/jedan). The worker's deliberate non-addition of the stress mark (`ɛˈdin`) is correct given bg is uniformly stress-free (see below). **Accept ✓.**

### Stress-mark items — system-level, not local (#1–#8 mark, #10 mark, #18 mark, #22, #23, #24)

I independently counted stress diacritics across all multisyllabic entries: **sr 0/17, bg 0/19, sk 0/13, cs 0/14, be 0/16** carry `ˈ` — i.e. the worker's "uniformly stress-free" claim is confirmed exactly. **ru is 2/11** (only cat `ˈkoʂkə` and good `xɐˈroʂɨj` are stressed), confirming the Russian column is internally split and genuinely ambiguous. My linguistic position stands that Slavic free/lexical stress (ru) and pitch-accent position (sr) *should* be marked; but adding `ˈ` to ~12 ru entries on the basis of 2 outliers, or re-conventioning five entire language columns piecemeal, would manufacture *new* inconsistencies. These are real deficiencies but correctly scoped as a **corpus-wide stress-marking decision**, not round-1 local errors. **Accept hold △** — flagged for a team-level stress pass.

### OCS (`cu`) notation items (#11, #12, #14, #20) — and a reviewer self-correction on #13

- The `cu` column is internally consistent in its own transliteration-flavoured notation: back yer ъ→`ɤ` throughout (verified: `pʲsɤ`, `domɤ`, `dobrɤ`, `jedinɤ`), ѫ→`õ` (`rõkɑ`), ѧ→`ẽ` (`rɑdujisẽ`), plain `ts` clusters (`srʲdʲtse`). The `orv` column uses the breve/hook system (`pĭsŭ`, `rǫka`). These are two distinct, internally-coherent notation columns. The ŭ/ɤ and ɔ̃/õ choices are genuinely contested across handbooks (Vaillant/Lunt vs. Bulgarianist conventions). **Accept hold △** for the OCS column as a system-level convention; a unified-OCS-notation pass would be an improvement, not a bug fix.
- **#13 — reviewer self-correction (my original "Current" was wrong).** I claimed `words/tree.js` cu held Latin-háček `drěvo` in the IPA field. Live data and full git history show the cu entry has **always** been `cu: ["дрѣво", "drɛːvo"]` — no `ě` present, equal to my own "Expected" minus stress. The only `ě` symbols are in the **orv** column (`drěvo`, `ěsti`, `měsętsĭ`), which I myself conceded may be intentional orv transliteration. So #13 describes a non-existent error. **Withdrawn ✗ (my error).**

### Defensible-variant items

- **#15 `uk` /w/** — verified uk uses `w` consistently in every position (water `wɔdɑ`, fire `wɔɦɔnʲ`, tree `dɛrɛwɔ`, love `lʲubɔw`). The [w]~[ʋ] analysis of в is a legitimate descriptive tradition (Pugh & Press). Held consistently. **Accept hold △.**
- **#16 `sl`/`mk` schwa vs /r̩/** — verified sl `sərt͡sɛ`, mk `ˈsərt͡sɛ` vs hr/bs `ˈsr̩t͡se`. Slovenian standard orthoepy (Toporišič) does posit a phonetic [ə] before vocalic r; mk likewise. Defensible per-language, and hr/bs are independently correct. **Accept △.**
- **#17 `mk` *fire* оган** — I concede the worker here. Standard Macedonian (Дигитален речник, Конески) lemmatizes **оган** (def. оганот); огин is the older/dialectal co-variant. My original direction was reversed. **Withdrawn ✗ (my error).**
- **#19 `be` *hello* прывітанне** — primarily the abstract noun, but "Прывітанне!" does function as a colloquial greeting interjection, parallel to ru привет (accepted in the dataset). Defensible though not the most idiomatic choice (вітаю / добры дзень). **Partial △** — won't block.
- **#21 `bs` v vs ʋ** — verified bs uses plain `v` (vatra/voda/xvala) vs sr/hr `ʋ`. Phonemically all Shtokavian shares /ʋ/, so the bs column under-specifies, but it is a consistent column-level notation choice, not a local slip. **Accept hold △** — flag for optional future harmonization.
- **#1–#6, #22 `ru` `ʊ`** — used consistently for reduced unstressed /u/ (`rʊka`, `lʲʊbofʲ`); acceptable, as I originally conceded. **Accept △.**

### New issues

None. Verification surfaced no new defensible errors; it instead retracted two of my own (#13, #17).

### Scorecard

| Disposition | Items |
|---|---|
| Accept fix ✓ (verified live) | #9 |
| Accept hold / defensible convention or variant △ | #1–8, #10, #11, #12, #14, #15, #16, #18, #19, #20, #21, #22, #23, #24 |
| Withdrawn — reviewer error ✗ | #13, #17 |

Every item is now either fixed-and-verified or a defensible system-/convention-level choice I accept. The one substantive data error (#9) is corrected in live data. The stress-marking and OCS-notation gaps are real but are legitimately corpus-wide decisions, not round-1 local fixes; I record them as accepted holds with a recommendation for future dedicated passes.

**File status: CLOSED** — nothing left to address.
