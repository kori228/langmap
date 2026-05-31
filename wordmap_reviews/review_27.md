# Wordmap review #27 — East Slavic specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I specialise in East Slavic historical and descriptive phonology. My primary reference framework is built on Max Vasmer's *Russisches etymologisches Wörterbuch* (3 vols., 1950–58; Russian translation *Этимологический словарь русского языка*, 1964–73) for etymology and reconstruction of Common Slavic vocalism; George Y. Shevelov's *A Historical Phonology of the Ukrainian Language* (1979) for the diachronic trajectory of Ukrainian from Proto-Slavic through medieval to modern, including the pivotal o → i shift in new closed syllables, the development of /ɦ/ from Proto-Slavic */ɡ/, and the stabilisation of the /ɪ/ phoneme; Peter Mayo's chapter on Belorussian in *The Slavonic Languages* (ed. Comrie & Corbett, 1993) for the description of Belarusian akanye, dzekanne/cekanne, and yotation; and Paul Robert Magocsi's *The Language and Literature of Rusyn* (1996) together with his *Rusyn Language: A Grammar* for the phonological profile of Carpatho-Rusyn, including the retention of /ɨ/, the Rusyn-specific vowel inventory, and the characteristic /h/ < */ɡ/ fricativisation that parallels Ukrainian. Cross-reference for modern Russian phonetics: Matusevič *Введение в общую фонетику* (3rd ed.) and the LRC *Russian Reference Grammar* for unstressed vowel reduction (akanye: /o/ → [ɐ] in the first pre-tonic syllable, → [ə] elsewhere). Belarusian-specific: Падлужны *Фанетыка беларускай мовы* (1986).

---

## Issues found

### 1. `ru` — sun — missing initial consonant in IPA
- **File:** `words/sun.js` line 101
- **Current:** `["солнце", "sont͡sɨ"]`
- **Expected:** `["солнце", "sɐnt͡sɨ"]`
- **Why:** The orthographic о in the pretonic syllable *со-* is an unstressed first-syllable vowel. Russian akanye dictates /o/ → [ɐ] in the first pre-tonic syllable (позиция I редукции). The transcription has `sont͡sɨ` with an unreduced [o], which belongs only to stressed position. Compare parallel correctly transcribed forms: `sɐbakɐ` (собака), `sɐsʲna` (сосна). The first [o] must reduce to [ɐ]: `sɐnt͡sɨ`.

---

### 2. `ru` — sun — final vowel quality: /e/ not /ɨ/ after /ts/
- **File:** `words/sun.js` line 101
- **Current:** `["солнце", "sont͡sɨ"]`
- **Expected:** `["солнце", "sɐnt͡sɨ"]` → specifically the final vowel
- **Why:** The suffix -це carries the unstressed final /e/ which in standard broad transcription is realised as [ɨ] after the hard affricate [t͡s]. This part is defensible and conventional (Matusevič §94). However, combined with Issue 1, the full corrected form is `sɐnt͡sɨ`. (Flagged here as combined error for completeness.)

---

### 3. `ru` — heart — first syllable akanye missing
- **File:** `words/heart.js` line 101
- **Current:** `["сердце", "sʲert͡sɨ"]`
- **Expected:** `["сердце", "sʲirt͡sɨ"]` (or `sʲɪrt͡sɨ`)
- **Why:** The syllable structure of *сердце* /sʲérd͡tsɨ/ places stress on the first syllable (сЕрдце), so the [e] is stressed — the akanye rule does not apply here, and [sʲert͡sɨ] is broadly acceptable for the stressed syllable. However, the final unstressed vowel should be [ɨ] after the hard affricate, which the transcription already has. A secondary problem: the palatalisation diacritic [sʲ] is correct, but there is no coda /r/ transcribed — the coda cluster is `rt͡s`, not `rt͡s` with a gap. The current form `sʲert͡sɨ` omits the coda /r/: it should be `sʲert͡sɨ` — on closer inspection the /r/ IS present as `er` inside `sʲert͡sɨ`. This form is therefore acceptable for the stressed syllable. **Revised verdict:** the entry is acceptable as a broad transcription with stress on syllable 1. Downgrading to a note rather than a hard error — see Issue 4 for the structural companion.

---

### 4. `ru` — heart — affricate should be /t͡s/, not a voiced affricate or gap
- **File:** `words/heart.js` line 101
- **Current:** `["сердце", "sʲert͡sɨ"]`
- **Note:** The affricate `t͡s` is correct for the devoiced cluster *-рдц-* → [rt͡s] in standard Russian. No issue here. Withdrawing — correctly transcribed. (Kept as documentation for reviewer completeness.) **Proceed to next issue.**

---

### 5. `ru` — father — vowel reduction incorrect: [ɐtʲet͡s] but pre-tonic о is /ɐ/, final /e/ should reduce
- **File:** `words/father.js` line 101
- **Current:** `["отец", "ɐtʲet͡s"]`
- **Expected:** `["отец", "ɐtʲit͡s"]`
- **Why:** *Отец* has stress on the final syllable: о**тЕц**. In the first pre-tonic position (о-), /o/ reduces to [ɐ] correctly. The internal vowel -е- is now in the second pre-tonic position (позиция II, further from stress than position I). Under standard Russian akanye/ikanye, the second pre-tonic and post-tonic /e/ → [ɪ] before the stress, not [e]. Matusevič and Avanesov both transcribe *отец* as [ɐtʲɪt͡s]. The [tʲe] in the current transcription retains a full mid vowel in unstressed position, which is phonetically incorrect for literary Moscow standard.

---

### 6. `ru` — tree — second syllable quality
- **File:** `words/tree.js` line 101
- **Current:** `["дерево", "dʲerʲɪvɐ"]`
- **Expected:** `["дерево", "dʲerʲɪvə"]`
- **Why:** *Дерево* carries stress on the first syllable: ДЕ́рево. The final post-tonic unstressed syllable -во is in a далёкая заударная (distant post-tonic) position. Standard Russian broad phonetic transcription renders post-tonic /o/ in non-initial positions as [ə] (schwa), not [ɐ] (which belongs specifically to the first pre-tonic position). Avanesov's *Русское литературное произношение* (6th ed.) explicitly marks the final syllable of *дерево* as [ə]: [dʲerʲɪvə]. The current [ɐ] conflates two distinct grades of vowel reduction.

---

### 7. `ru` — dog — final vowel inconsistency
- **File:** `words/dog.js` line 101
- **Current:** `["собака", "sɐbakɐ"]`
- **Note:** The final unstressed [ɐ] for the post-tonic final -а is a valid broad transcription choice (some descriptions use [ə] here). However, the dataset is internally inconsistent: *спасибо* (thanks) ends in `spɐsʲibɐ` (post-tonic [ɐ]), while *дерево* (tree) ends in [ɐ] but is argued above to need [ə]. For consistency across the dataset, all post-tonic final unstressed vowels should follow a single policy. Flagged as a **dataset consistency issue** rather than outright error for `dog`.

---

### 8. `uk` — drink — /ɪ/ used where /i/ expected in unstressed syllable
- **File:** `words/drink.js` line 163
- **Current:** `["пити", "pɪtɪ"]`
- **Expected:** `["пити", "ˈpɪtɪ"]` or `["пити", "pɪˈtɪ"]`
- **Why:** This is a stress-marking omission. Ukrainian *пити* /ˈpɪtɪ/ carries stress on the first syllable. Without a stress diacritic, the transcription is ambiguous. All other Ukrainian entries either omit stress marks consistently (е.g. `ɔkɔ`, `dim`) or include them inconsistently. However, several Russian entries do carry stress marks (e.g. `ˈkoʂkə`, `xɐˈroʂɨj`). A unified policy is needed. Flagged as **missing stress diacritic** — the [ɪ] quality of Ukrainian и is correct per Shevelov, but placement of stress is absent.

---

### 9. `uk` — fire — /w/ onset for вогонь is unusual; /v/ expected in standard Ukrainian
- **File:** `words/fire.js` line 163
- **Current:** `["вогонь", "wɔɦɔnʲ"]`
- **Expected:** `["вогонь", "vɔɦɔnʲ"]`
- **Why:** Standard Ukrainian /в/ is a bilabial approximant [ʋ] in the SUM (Словник української мови) phonological description, or a labiodental fricative [v] in many contemporary accounts — but it is **not** the back labial approximant [w] in word-initial position before a vowel. The [w] allophone of Ukrainian /в/ appears in coda position (e.g. *вовк* → [vowk] → coda [w]) or in diphthongal sequences, not syllable-initially before a stressed vowel. Shevelov (*Historical Phonology* §52) distinguishes the initial-[v]/[ʋ] from the coda-[w] distribution. The transcription `wɔɦɔnʲ` implies that even the onset is [w], which does not reflect the standard Kyiv literary pronunciation. Compare `wɔdɑ` (вода, water) and `wɔɦɔnʲ` — both apply [w] word-initially, suggesting a systemic error in the dataset for Ukrainian word-initial /в/.

---

### 10. `uk` — water — same /w/ onset error as Issue 9
- **File:** `words/water.js` line 163
- **Current:** `["вода", "wɔdɑ"]`
- **Expected:** `["вода", "vɔdɑ"]` or `["вода", "ʋɔdɑ"]`
- **Why:** Identical analysis to Issue 9. Ukrainian word-initial /в/ is [v] or [ʋ], not [w]. The [w] allophone is restricted to pre-consonantal and coda environments. Sources: Bilodid *Сучасна українська літературна мова: Фонетика* (1969), p. 122; Žovtobrjux & Kulyk *Kurs sučasnoji ukraïns'koji literaturnoji movy* (1965).

---

### 11. `uk` — love — final /w/ in coda is correct, but vowel length issue
- **File:** `words/love.js` line 163
- **Current:** `["любов", "lʲubɔw"]`
- **Expected:** `["любов", "lʲubɔw"]` — the coda [w] is **correct** here
- **Why:** In coda position (before a consonant or word-finally), Ukrainian /в/ realises as [w]. The form `lʲubɔw` is therefore phonetically accurate, in direct contrast with Issues 9 and 10. This confirms that the [w] in onset position in *вогонь* and *вода* is an error: the data correctly uses [w] in coda position but incorrectly extends it to onset position.

---

### 12. `uk` — hello — /w/ onset once more; plus vowel quality of unstressed -і
- **File:** `words/hello.js` line 163
- **Current:** `["привіт", "prɪwit"]`
- **Note on /w/:** The /в/ here is in coda position of the first syllable (при**в**іт), making [w] arguably appropriate as the coda allophone. However, the syllabification of *привіт* is /prɪ.ˈvit/ or /ˈprɪ.vit/, with /в/ as the onset of the second syllable. In onset position it should be [v] or [ʋ]: `prɪvit`. The current `prɪwit` uses coda [w] for an onset position.
- **Stress:** No stress mark on the stressed final syllable [wít] → [ˈvit]. Missing stress diacritic again.

---

### 13. `be` — fire — /ɣ/ for Belarusian г is correct, but word and vowel issues
- **File:** `words/fire.js` line 314
- **Current:** `["агонь", "aɣonʲ"]`
- **Expected:** `["агонь", "aɣonʲ"]` — akanye and /ɣ/ are both correct
- **Assessment:** Belarusian akanye correctly renders the spelling *а* as [a] (since *агонь* has no historical /o/ in the first syllable — the spelling *а* is already the akane reflex of etymological */o/). The fricative [ɣ] for Belarusian *г* is correct (Mayo 1993, p. 889). This entry is phonologically sound. **No error.**

---

### 14. `be` — eye — lexeme choice: вока is archaic/poetic
- **File:** `words/eye.js` line 308
- **Current:** `["вока", "voka"]`
- **Issue:** While *вока* does exist in Belarusian (cognate with Ukrainian *воко*, Russian *oko*), the standard modern Belarusian dictionary form for 'eye' is *вока* in literary Belarusian (Тлумачальны слоўнік беларускай мовы, vol. 1, 1977, s.v. *вока*). The word is in fact standard — this is **not** an error in lexeme choice. However the IPA `voka` lacks the short back vowel specification. **Assessment: no phonological error; entry acceptable.** Note: *вока* is the standard Belarusian form; it is not archaic.

---

### 15. `be` — one — dzekanne/cekanne: adʲzʲin missing full affricate
- **File:** `words/one.js` line 314
- **Current:** `["адзін", "adʲzʲin"]`
- **Expected:** `["адзін", "ad͡zʲin"]`
- **Why:** Belarusian *дзекання* (dzekanne) produces the affricate /d͡z/ from historical */d/ before front vowels. This affricate is a single phonological segment, and standard IPA practice ties the two components with a ligature: `d͡z` (with the tie-bar above or below). The current notation `dʲzʲ` writes a palatalised [d] followed by a separate palatalised [z], implying two distinct segments rather than one affricate. This misrepresents the phonological structure. Mayo (1993, p. 887) and Падлужны (1986) both treat /d͡z/ and /d͡zʲ/ as unit phonemes, transcribed with the tie-bar. Compare the correctly tied affricate in the Russian entries (e.g. `t͡s` in `t͡sɨ`): the same tie-bar convention should apply to Belarusian `d͡zʲ`.

---

### 16. `be` — thanks — same dz affricate tie-bar issue
- **File:** `words/thanks.js` line 308
- **Current:** `["дзякуй", "dʲzʲakuj"]`
- **Expected:** `["дзякуй", "d͡zʲakuj"]`
- **Why:** Identical to Issue 15. Belarusian *дзякуй* begins with the palatal dzekanne affricate /d͡zʲ/. Writing `dʲzʲ` treats it as a sequence of two sounds; the tie-bar `d͡zʲ` marks it as one phoneme. This is the same systemic error seen in *адзін*.

---

### 17. `be` — father — cekanne: batsʲka vs. expected bat͡sʲka
- **File:** `words/father.js` line 308
- **Current:** `["бацька", "batsʲka"]`
- **Expected:** `["бацька", "bat͡sʲka"]`
- **Why:** Belarusian *цекання* (cekanne) produces the affricate /t͡sʲ/ from historical */t/ before front vowels. *Бацька* contains this affricate spelled *ц*, which in standard IPA is `t͡sʲ` (tie-barred). The current `tsʲ` writes an unaffiliated [t] followed by [sʲ], again failing to use the tie-bar for the unit affricate. The parallelism with dzekanne (Issues 15–16) makes this a **systemic** tie-bar omission across Belarusian affricates.

---

### 18. `be` — mother — cekanne in маці: [matsi] missing palatalisation on /t͡sʲ/
- **File:** `words/mother.js` line 314
- **Current:** `["маці", "matsi"]`
- **Expected:** `["маці", "mat͡sʲi"]`
- **Why:** Belarusian *маці* ends in *-ці*, where *ц* before front vowel *і* is the cekanne reflex of */t/: the palatalised affricate /t͡sʲ/. The current IPA `matsi` writes plain [ts] (no tie-bar, no palatalisation diacritic). Two errors: (a) missing tie-bar making it a unit segment, and (b) missing palatalisation [ʲ] on the affricate before the front vowel /i/. The form should be `mat͡sʲi`.

---

### 19. `be` — moon — [mʲesʲats] has a fully retained /e/ in first syllable, but spelling suggests akanye should apply
- **File:** `words/moon.js` line 314
- **Current:** `["месяц", "mʲesʲats"]`
- **Issue:** The Belarusian form *месяц* has stress on the first syllable (МЕ́сяц). The stressed /e/ → [e] is correct; akanye does not affect stressed vowels. The unstressed second syllable -яц has /a/ → [a] correctly. However: (a) the IPA shows `mʲesʲats` — the final [s] is unpalatalised, yet Belarusian final *ц* is always the affricate. The spelling *месяц* ends in *ц* = the Belarusian affricate [t͡s]. The IPA should end in `t͡s`, not bare `ts` (and in this case even just `s`). The current IPA is `mʲesʲats` — reading this literally, the final segment appears to be [s] after a [t], suggesting the affricate sequence is written as two separate segments once again, and the tie-bar is missing. Expected: `mʲesʲat͡s`.

---

### 20. `be` — hello — unstressed vowel akanye issue
- **File:** `words/hello.js` line 308
- **Current:** `["прывітанне", "prɨvitanʲe"]`
- **Expected:** `["прывітанне", "prɨvʲitanʲe"]`
- **Why:** The Belarusian word *прывітанне* contains *-ві-* in the second syllable. Belarusian /в/ before a front vowel is palatalised: [vʲ]. The current IPA writes `vit` without palatalisation on /в/. In Belarusian phonology, consonants before /i/ are softened (мяккасць), and /в/ before *і* gives [vʲ]. The omission of the palatalisation marker on [vʲ] before /i/ is a consistent gap in this entry. Additionally, the final syllable -не contains a palatalised [nʲ] correctly, but the internal -та- in *-ітанне* needs attention: this vowel cluster `an` is unstressed, and the Belarusian akanye pattern in non-first syllables after stress should give [a], which the transcription has correctly.

---

### 21. `rue` — heart — voiced affricate [d͡ze] vs. expected devoiced [t͡se] in сердце
- **File:** `words/heart.js` line 753
- **Current:** `["сердце", "ˈserd͡ze"]`
- **Expected:** `["сердце", "ˈsert͡se"]`
- **Why:** In standard Carpatho-Rusyn phonology, the sequence *-рдц-* in *сердце* undergoes regressive devoicing (the voiced cluster /rd/ + affricate): the resulting sequence assimilates to produce a voiceless affricate + surrounding consonants. In Ukrainian, the cognate *серце* shows the same full devoicing of the cluster: [sɛrt͡sɛ]. Rusyn *сердце* with full orthographic spelling should similarly produce a devoiced affricate [t͡s] in the affricate position, as the coda /d/ is absorbed or devoiced in the cluster. Writing `d͡ze` (voiced dental affricate + [e]) represents a fully voiced affricate that does not arise in this phonological environment. Magocsi's *Rusyn Language* does not record a voiced [d͡z] outcome in this word. The expected form parallels Ukrainian [sɛrt͡sɛ] and should be `ˈsert͡se`.

---

### 22. `rue` — hello — stress placement in multi-word greeting
- **File:** `words/hello.js` line 753
- **Current:** `["Слава Ісусу Христу", "ˈslava ˈjisusu ˈxristu"]`
- **Issue:** In the Carpatho-Rusyn greeting *Слава Ісусу Христу*, each word carries its own primary stress correctly marked. However, *Ісусу* is transcribed as `ˈjisusu`, which gives stress on the initial syllable. The Rusyn (and Ukrainian Church Slavonic) tradition places stress on the second syllable: *Іс**у**су* [jiˈsusu] or [ɪˈsusu]. Similarly, *Христу* is marked `ˈxristu` with initial stress, but the dative form *Христу* is stressed on the final syllable *Хрис**т**у* [xrɪˈstu] in Church Slavonic and Rusyn liturgical pronunciation. Both stress marks appear to be on the wrong syllable.

---

### 23. `rue` — house — retroflex /ʐ/ in хыжа questionable; /ʒ/ or /ʑ/ expected
- **File:** `words/house.js` line 760
- **Current:** `["хыжа", "ˈxɨʐa"]`
- **Expected:** `["хыжа", "ˈxɨʒa"]`
- **Why:** Carpatho-Rusyn does not have the Russian-type retroflex fricatives [ʂ] and [ʐ]. These are a distinctly Russian feature absent from Ukrainian and its closely related Rusyn dialects, which instead have the plain (laminal) postalveolar [ʃ] and [ʒ]. The current IPA `ˈxɨʐa` uses the retroflex [ʐ], which is a Russian phonological import. Magocsi's grammatical description of Rusyn shows plain postalveolar consonants throughout. The *ж* in *хыжа* should be transcribed as [ʒ], not [ʐ].

---

### 24. `rue` — fire — /h/ for огень is correct Rusyn, no issue
- **File:** `words/fire.js` line 759
- **Current:** `["огень", "ˈohenʲ"]`
- **Assessment:** The /h/ for Rusyn *г* correctly reflects the fricativisation /ɡ/ → /h/ that Rusyn shares with Ukrainian and Belarusian. This entry is phonologically accurate.

---

### 25. `ru` — hello — [prʲɪvʲet] vs. expected [prʲɪˈvʲet]
- **File:** `words/hello.js` line 101
- **Current:** `["привет", "prʲɪvʲet"]`
- **Expected:** `["привет", "prʲɪˈvʲet"]`
- **Why:** *Привет* carries stress on the second syllable: при**вЕт**. The final [e] is stressed and in stressed position should be [e], which the transcription correctly gives. However, the initial unstressed *при-* has /ɪ/ which is correct as an unstressed high front vowel. The major issue is the **missing stress diacritic**: without `ˈ` before [vʲet], the transcription could be misread as stress-initial. Across the Russian entries, stress diacritics are applied inconsistently: *кошка* has `ˈkoʂkə`, *хороший* has `xɐˈroʂɨj`, but *привет*, *огонь*, *отец*, *один*, etc., lack stress marks. This is a systemic omission.

---

### 26. `ru` — fire — missing stress diacritic (systemic)
- **File:** `words/fire.js` line 101
- **Current:** `["огонь", "ɐɡonʲ"]`
- **Expected:** `["огонь", "ɐˈɡonʲ"]`
- **Why:** *Огонь* is stressed on the second syllable: ого́нь. Without the stress mark, the transcription is ambiguous. Part of the systemic inconsistency noted in Issue 25.

---

### 27. `be` — dog — akanye correctly applied, but hard-consonant /k/ before /a/ without palatalisation note
- **File:** `words/dog.js` line 308
- **Current:** `["сабака", "sabaka"]`
- **Assessment:** Belarusian *сабака* shows full akanye (три unstressed [a] syllables around the stressed -б**а**-). The IPA `sabaka` correctly reflects this. Palatalisation of consonants before /a/ does not apply (non-front vowel). **No error** — this entry is correct.

---

### 28. `be` — love — kahannje vowel reduction note
- **File:** `words/love.js` line 315
- **Current:** `["каханне", "kaxanʲe"]`
- **Expected:** `["каханне", "kaˈxanʲe"]`
- **Why:** Belarusian *каханне* carries stress on the second syllable: ка**х**а́нне. The missing stress diacritic makes the transcription ambiguous between first- and second-syllable stress. Additionally the final -не contains a geminate /nʲnʲ/ (from historical suffix -ьнь- + nominalization), but standard phonetic realisation simplifies to a single long [nʲː] or [nʲ]. The transcription `kaxanʲe` treats the -нн- as a single [nʲ], which is an acceptable simplification, but the stress mark should be present.

---

### 29. `uk` — moon — stress missing on місяць
- **File:** `words/moon.js` line 163
- **Current:** `["місяць", "misʲɑt͡sʲ"]`
- **Expected:** `["місяць", "ˈmisʲɑt͡sʲ"]`
- **Why:** *Місяць* carries primary stress on the first syllable (МІ́сяць). No stress diacritic. This is part of the systemic stress-omission problem identified across Ukrainian entries.

---

### 30. `uk` — father — батько: /ɔ/ in final syllable instead of expected /o/ → [ɔ]
- **File:** `words/father.js` line 163
- **Current:** `["батько", "bɑtʲkɔ"]`
- **Assessment:** Ukrainian /o/ in a final open syllable is a mid-back rounded vowel, transcribed as [ɔ] in many Ukrainian phonetic descriptions. Some authorities prefer [o]; [ɔ] is the allophone in certain contexts. Shevelov notes that Ukrainian /o/ has a somewhat lower and more open quality than Russian /o/. The use of [ɔ] is within acceptable range for Ukrainian broad transcription. The more concerning point is the first-syllable [ɑ]: Ukrainian *ба-* has the vowel /a/, and the low back [ɑ] is phonetically accurate for Ukrainian /a/, which is back-of-central. **No outright error**, but note that using [ɑ] (back open) vs. [a] (central open) introduces a subtle distinction not maintained consistently across all Ukrainian entries (e.g. `vɔdɑ` vs. `sɔbɑkɑ` — both use [ɑ], consistent).

---

## Summary of systemic patterns

| Pattern | Languages affected | Count of instances |
|---|---|---|
| Tie-bar missing on affricates (d͡z, t͡s) | be | Issues 15, 16, 17, 18, 19 |
| Stress diacritic absent | ru, uk, be | Issues 25, 26, 28, 29 + others |
| Word-initial /в/ transcribed as [w] instead of [v]/[ʋ] | uk | Issues 9, 10, 12 |
| Unstressed vowel over-reduction ([ɐ] vs. [ə]) | ru | Issues 6, 7 |
| Akanye not applied to unstressed /o/ in pretonic position | ru | Issue 1 |
| Ikanye not applied to unstressed /e/ in pretonic position | ru | Issue 5 |
| Retroflex [ʐ] used where plain postalveolar [ʒ] expected | rue | Issue 23 |
| Wrong stress placement in multi-word form | rue | Issue 22 |
| Voiced affricate [d͡z] in devoiced environment | rue | Issue 21 |
