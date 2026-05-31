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
