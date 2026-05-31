# Wordmap review #14 — Japonic + Koreanic specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a comparative linguist specialising in Japonic and Koreanic historical phonology. My primary references for this review are Alexander Vovin's *A Reconstruction of Proto-Malayo-Polynesian* (2010) and more directly his *A Descriptive and Comparative Grammar of Western Old Japanese* (2005/2009), Bjarke Frellesvig's *A History of the Japanese Language* (CUP 2010), Samuel E. Martin's *A Reference Grammar of Korean* (Tuttle 1992), Lee & Ramsey's *A History of the Korean Language* (CUP 2011), Thomas Pellard's comparative Ryukyuan reconstructions (particularly "The linguistic archaeology of the Ryukyu Islands", 2015), Michinori Shimoji's grammar of Irabu Miyako (2008), and the NHK 発音アクセント新辞典 (2016 edition) for Tokyo pitch accent. For Middle Korean tone I follow Martin's conventions; for Old Korean I follow Nam Pung-hyeon and John Whitman's philological analyses.

I examined all entries under the codes `ja`, `ja_osa`, `ja_kyo`, `ja_aom`, `ja_oki`, `ja_hak`, `ja_kg`, `ja_sd`, `ja_hir`, `ja_mvi`, `ja_rys`, `ja_kanbun`, `ja_edo`, `ja_heian`, `ja_chu`, `ja_ojp` → `ojp`, `pry`, `ko`, `ko_kp`, `ko_bus`, `ko_jeju`, `ko_yb`, `ko_hg`, `ko_jl`, `ko_mid`, `ko_em`, `ko_gor`, `oko`, `okg`, `pko`, `pjk` across all twenty `words/*.js` files.

---

## Issues found

### 1. `ojp` — **fire** — vowel class wrong; `pə` should be `pi`

`words/fire.js` line 1047: `["火", "pə"]`

In the Old Japanese 8-vowel system (Vovin; Frellesvig), 火 belongs to vowel class i₁ (A-series, upper i). Both Vovin's *WOJ* (§2.3) and Frellesvig (2010, p. 24) reconstruct OJP 火 as /pi₁/ — the same class as 日 *sun*, which the dataset correctly transcribes `["日", "pi"]` in `words/sun.js`. Using `pə` (schwa = B-series vowel) for 火 while using `pi` for 日 is internally inconsistent: the two words contain the same OJP vowel class. The correct entry should be `["火", "pi"]` (or `["火", "pi₁"]` if the subscript notation is adopted uniformly).

---

### 2. `ojp` — **house** — spurious final `-y`; `ipey` should be `ipe`

`words/house.js` line 1042: `["家", "ipey"]`

Frellesvig (2010, p. 26) reconstructs OJP 家 as /ipe₂/ — a two-syllable word with a B-series e₂ vowel in the second syllable. Neither Frellesvig nor Vovin append a palatal glide /j/ to this form. The parallel Heian and Classical entries in the same file (`ja_heian`/`ja_chu`) read `"iɸe"`, which correctly reflects the /p/ → /ɸ/ shift but carries no final `-y`. The `-y` in `ipey` appears to be a notation artefact or transcription error; it is not a phoneme of OJP and should be deleted. Correct form: `["家", "ipe"]`.

---

### 3. `pry` — **fire** — reconstructed as `*pi` (short) but the comparative evidence requires `*pii` (long)

`words/fire.js` line 557: `["*pi", "pi"]`

The dataset correctly uses long-vowel reconstructions for other Proto-Ryukyuan items where Ryukyuan reflexes agree on length: `pry` eye = `*mii` (Okinawan *miː*, Miyako *miː*), tree = `*kii` (Okinawan *kiː*, Miyako *kiː*), hand = `*tii` (Okinawan *tiː*, Miyako *tiː*). The Miyako and Yonaguni reflexes of fire are `piː` (long; see `ja_mvi` and `ja_rys` in `words/fire.js`). Pellard (2015) reconstructs Proto-Ryukyuan fire as `*pii`; the shortening to `ɸi` in Central Okinawan is a later, Okinawa-internal development. The `pry` fire form should be `["*pii", "piː"]`, consistent with eye, tree, and hand.

---

### 4. `ja_oki` — **fire** — `hi` should be `ɸi`

`words/fire.js` line 60: `["火", "hi"]`

Old Japanese /p/ → Heian /ɸ/ → modern /h/ in mainland Japanese, but Ryukyuan branches retained /ɸ/ at the Proto-Ryukyuan stage and Okinawan preserves a bilabial fricative in many environments. In Central Okinawan (Naha), the historical /p/ reflex before vowels *a*, *u*, *o* yields surface [ɸ]; before /i/, the behaviour is consistent across the paradigm: 歯 (tooth) = /ɸaː/, 笛 (flute) = /ɸuɛ/, and 火 = /ɸi/, not /hi/. The dataset's own `ja_heian` fire entry correctly shows `"ɸi"`, as does the pry reconstruction `*pii`. The sister variety entries (Miyako `piː`, Yonaguni `piː`) confirm bilabial articulation. The Okinawan entry should read `["火", "ɸi"]`.

---

### 5. `ja_mvi` — **water** — vowel `u` is inconsistent with the Miyako high central vowel `/ɨ/`

`words/water.js` line 64: `["水", "mid͡zu"]`

Shimoji's (2008) grammar of Irabu Miyako and Pellard (2015) both show that the Miyako high vowel in the environment of alveolar/dental consonants is the high central unrounded vowel /ɨ/ (or the retracted/apical variant), not the back rounded /u/. The same file demonstrates the correct symbol in `ja_mvi` moon: `"t͡sɨkɨ"` (line 64 of `words/moon.js`). For water, the Irabu reflex of OJP *midu is /mid͡zɨ/, parallel to the moon reflex. The entry should be `["水", "mid͡zɨ"]`, bringing it into line with the vowel system already applied to moon.

---

### 6. `ja_kanbun` — **father** — Hepburn romanisation `chichi` instead of IPA

`words/father.js` line 548: `["父", "chichi"]`

Every other `ja_kanbun` entry uses IPA (e.g., `"hi"`, `"te"`, `"ki"`, `"tsuki"`, `"kokoɾo"`). The father entry alone uses the Hepburn romanisation string `chichi` rather than the IPA `/t͡ɕit͡ɕi/`. The standard entry already gives the correct IPA in the modern `ja` line: `["父", "t͡ɕit͡ɕi"]`. The kanbun entry should be corrected to `["父", "t͡ɕit͡ɕi"]` for consistency.

---

### 7. `ja_kyo` — **hello** — missing tie-bar in `konnitɕiwa` vs. standard `konnit͡ɕiwa`

`words/hello.js` line 62: `["こんにちは", "konnitɕiwa"]`  
Compare `words/hello.js` line 57: `["こんにちは", "konnit͡ɕiwa"]`

The standard `ja` entry uses the tie-bar digraph `t͡ɕ` to mark the alveopalatal affricate as a single segment. The Kyoto entry writes `tɕ` without the tie-bar. While both represent the same phoneme, the inconsistent notation — and the fact that the word is phonemically identical in Tokyo and Kyoto standard registers — means one of the two should be normalised. The Kyoto entry should be updated to `"konnitɕiwa"` → `"konnit͡ɕiwa"`.

---

### 8. `ja_edo` / `ja_kanbun` — **moon** — `tsuki` uses bare `ts` and short `/u/` vs. all modern varieties' `t͡sɯki`

`words/moon.js` lines 553–554: `["月", "tsuki"]` (both `ja_edo` and `ja_kanbun`)

All synchronic entries (standard, Osaka, Aomori, Kyoto, Hiroshima, Hakata, Kagoshima, Satsuma) transcribe moon as `t͡sɯki` — with the IPA tie-bar over the affricate and the high back unrounded vowel `ɯ`. The Edo and Kanbun entries break from this by writing `tsuki` (no tie-bar, rounded `/u/`). While `/u/` may be appropriate for historical varieties (where the back vowel was more rounded), the lack of any tie-bar on `ts` is a purely notational inconsistency relative to the house style applied in every other variety. At minimum the tie-bar should be present: `t͡suki` or `t͡sɯki` with a note on historical vowel quality.

---

### 9. `ko_mid` — **all entries** — Middle Korean tone marks (방점) absent throughout

All `ko_mid` entries across all twenty word files omit 방점 (bangjeom), the suprasegmental dot notation that marks the three Middle Korean registers: 평성 (level = no dot), 거성 (departing = one dot to the left), 상성 (rising = two dots to the left). Middle Korean was a tonal language, and every lexeme attested in 15th-century texts has a known tone class recoverable from the Hunminjeongeum literature and from Martin's (1992) comparative tables. For example, MK 믈 (*water*) is 거성 (high), MK ᄃᆞᆯ (*moon*) is 평성 (low). The IPA transcriptions similarly carry no tone diacritics. Tone is integral to Middle Korean phonology; omitting it misrepresents the language and renders the data useless for comparative pitch-accent reconstruction.

---

### 10. `ko_bus` / `ko_yb` — **all entries** — Gyeongsang/Yanbian pitch accent absent

Busan Gyeongsang Korean (`ko_bus`) is a pitch-accent language: lexical H/L distinctions are contrastive and phonemic (Lee & Ramsey 2011, pp. 317–321; Martin 1992). The dataset marks no pitch on any `ko_bus` entry. For instance, `words/water.js` line 68: `["물", "mul"]` — Busan 물 (water) bears a falling H tone on the sole syllable, while phonemically distinct minimal pairs exist. Similarly, Yanbian Korean (`ko_yb`) preserves the Hamgyong pitch-accent system. Without tone markers, the `ko_bus` and `ko_yb` IPA strings are incomplete phonological representations.

---

### 11. `ja_oki` — **one** — spurious aspiration mark `tʰiːt͡ɕi`; Okinawan has no phonemic aspiration contrast

`words/one.js` line 60: `["一", "tʰiːt͡ɕi"]`

Okinawan (Central: Naha, Shuri) lacks a phonemic aspiration contrast in its stop/affricate series (Shimoji & Pellard 2010; Uemura 1996). The aspiration diacritic `tʰ` is therefore non-contrastive and misleads the reader into thinking Okinawan has a fortis/lenis or plain/aspirated opposition like Korean or Tibetan. The correct entry — the Okinawan word for 'one' = /tiːt͡ɕi/ — should be written `["一", "tiːt͡ɕi"]`.

---

### 12. `ojp` — **fire / tree / heart / drink** — schwa `ə` conflates distinct OJP vowel classes

`words/fire.js` line 1047: `["火", "pə"]`; `words/tree.js` line 1035: `["木", "kə"]`; `words/heart.js` line 1035: `["心", "kəkərə"]`; `words/drink.js` line 1035: `["能牟", "nəmu"]`

The schwa symbol `ə` is used across four OJP entries, but the OJP 8-vowel system (Vovin; Frellesvig) distinguishes multiple classes: 木 contains the B-series i₂ or ö₂, 心 contains the B-series ö₂ throughout, and 飲む contains ö₂ in the first syllable. These are not the same vowel; collapsing them under `ə` without subscript notation (as used for 与之 `yo₁si` in `words/good.js`) obscures the phonological distinctions. Meanwhile `ojp` moon correctly uses `ï` for B-series i in `tukï`. The dataset should adopt one consistent notation scheme for OJP (subscript numerals or diacritics) and apply it uniformly.

---

### 13. `ja_kg` — **water** — `d̥` (devoiced voiced stop) is not a Kagoshima phonological feature

`words/water.js` line 985: `["水", "mid̥zɯ̥"]`

Kagoshima phonology is characterised by devoicing of the HIGH VOWELS /i/ and /u/ (rendered as `ɯ̥` with the voicelessness diacritic), not by devoicing of the preceding stop. The notation `d̥` implies a voiceless/devoiced [d], which has no phonological motivation in Kagoshima: the stop remains voiced. The vowel diacritics on `ɯ̥` are appropriate, but the consonant should remain `d`: the correct entry is `["水", "mid͡zɯ̥"]` (retaining the affricate notation consistent with the Edo/Standard forms) or `["水", "midzɯ̥"]`.

---

### 14. `ojp` — **sun** vs. **fire** — same OJP vowel, inconsistent symbols (`pi` vs. `pə`)

`words/sun.js` line 1053: `["日", "pi"]`  
`words/fire.js` line 1047: `["火", "pə"]`

OJP 日 *sun* and 火 *fire* both derive from a bilabial initial followed by the A-series i₁ vowel (Vovin *WOJ* §4.2 for 日; §7.1 for 火). The dataset assigns different vowel symbols to the two words, though both belong to the same class. Issue 1 above already identifies `pə` as wrong for fire; this issue underscores the internal contradiction created by having the correct `pi` for sun alongside the incorrect `pə` for fire in sibling entries.

---

### 15. `ko_mid` — **cat** — form `고아이` / `koai` is not attested in 15th-century Korean texts

`words/cat.js` line 552: `["고아이", "koai"]`

The standard sources for Middle Korean vocabulary (Hunminjeongeum Haeryebon 1446, Worin seokbo 1449, Donguk jeongun 1448, and the Hunmongjahoe 1527 for lexical matters) do not attest a form 고아이 /koai/ for *cat*. The attested 15th-century form is 괴 /kwe/ (from the character 猫 in the Hunmongjahoe) or its descendant 고양이. The hypothetical 고아이 appears to be a modern analytical back-formation, not a philologically documented Middle Korean word. This entry should either be removed or replaced with the attested 괴 /kwe/, with a note on the source.

---

### 16. `ko_mid` — **drink / eat** — modern Hangul used where historical orthography is expected

`words/drink.js` line 552: `["마시다", "maɕi.ta"]`  
`words/eat.js` line 552: `["먹다", "mʌk.ta"]`

The `ko_mid` stratum is labelled Middle Korean (15th–16th century). Several entries correctly use historical Hangul with old characters (e.g., heart `ᄆᆞᅀᆞᆷ`, moon `ᄃᆞᆯ`, love `ᄉᆞ랑`). However, drink and eat are given in fully modern orthography (마시다, 먹다) without arae-a (ᆞ) or other archaic features. The 15th-century spelling of *drink* was 마시다 in some texts, but the vowel in the first syllable of *eat* was a back vowel (ᄆᆞᆨ-), and the consistent use of modern script alongside historical script entries creates an uneven representation that obscures the vowel shifts.

---

### 17. `ja_heian` — **moon** uses vowel diacritic `ï`; `ja_chu` silently drops it

`words/moon.js` line 555: `["月", "tukï"]` (Heian)  
`words/moon.js` line 556: `["月", "tuki"]` (Classical)

The Heian form `tukï` marks the final vowel with `ï` to indicate the B-series (class-2) i-vowel. In Classical Japanese (ja_chu), the same word is written `tuki` with a plain `i`, erasing the vowel-class distinction without comment. If the `ï` notation is meaningful in the Heian entry — as it also is in the OJP entry `["月", "tukï"]` — then dropping it in the Classical entry implies a phonological merger occurred, which should at minimum be noted. A consistent notation or an explanatory note is needed.

---

### 18. `ko_mid` — **good** — transcription `tjota` omits the aspirated coda of 됴타

`words/good.js` line 552: `["됴타", "tjota"]`

The underlying form of Middle Korean 好 (좋다/됴타) is /tjohta/. In 15th-century Korean, the basic form of the copula-predicative ending was 타 /tha/ (aspirated). The surface phonetics of 됴타 involve the /h/ of the stem fusing with the onset of 타 to give [tjotha] or [tjot̚tʰa]. The transcription `tjota` loses both the stem-final /h/ and the aspiration of the suffix, giving the impression that this is a plain voiceless stop [t]. The correct narrow transcription is `tjot̚tʰa` or at minimum `tjothta`.

---

### 19. `ja_mvi` (Miyako) — **one** — stem-final form `puːt͡s` lacks final vowel inconsistently

`words/one.js` line 64: `["一つ", "puːt͡s"]`

Miyako Irabu (Shimoji 2008) and other Miyako varieties have a final vowel in the numeral 'one': /puːt͡sɨ/ (Yonaguni cognate is `puːt͡sɨ` in `ja_rys`). The Yonaguni entry on the same file correctly includes the final vowel: line 65 `["一つ", "puːt͡sɨ"]`. The Miyako entry is missing the final `/ɨ/`, which is not devoiced to the point of deletion in citation form. This is an inconsistency between parallel Ryukyuan entries for the same word and the same vowel type.

---

### 20. `pjk` — **father / mother** — form field uses U+01DD `ǝ` (turned e) instead of IPA U+0259 `ə` (schwa)

`words/father.js` line 1042: `["*ǝpa", "əpa"]`  
`words/mother.js` line 1048: `["*ǝma", "əma"]`

The form field (first array element) uses Unicode character U+01DD LATIN SMALL LETTER TURNED E (`ǝ`), while the IPA field (second element) correctly uses U+0259 LATIN SMALL LETTER SCHWA (`ə`). These are visually near-identical but are distinct code points. The inconsistency will cause rendering and search/matching issues in any system that processes these fields as phonetic data. Both fields should use the standard IPA schwa U+0259.

---

### 21. `okg` (Goguryeo) — **water** — single entry `買 *mai` warrants source citation

`words/water.js` line 561: `["買", "*mai"]`

This is the only filled Goguryeo entry in the entire dataset. The reconstruction *mai for Goguryeo *water* is derived from Jīlín Lèishì-style phonetic glosses and Nam Pung-hyeon's analysis of Goguryeo place-name vocabulary. The Middle Korean cognate 믈 /mɯl/ and the Goryeo gloss 沒 /mwol/ are strikingly different, and the relationship between *mai and these forms is non-trivial: it either points to a distinct Goguryeo lexeme or to a phonological correspondence that has not been established in the literature for this particular word. Given that this is the sole filled Goguryeo entry, an inline note on the source (Nam 2012; Whitman) and the nature of the evidence is necessary to prevent misinterpretation.

---

### 22. `ko_gor` — **one** — `河屯 *hatwun` is inconsistent with the pan-Korean reconstruction

`words/one.js` line 561: `["河屯", "*hatwun"]`

The Old Korean form `一等 *hʌnah` (oko, same file) and Middle Korean `ᄒᆞ나 /hʌna/` are consistent with a proto-form *hʌnah. The Goryeo form *hatwun — glossed from 河屯 in the Jīlín Lèishì — has an unexpected medial cluster /tw/ and an unexpected final vowel /un/. Lee & Ramsey (2011, p. 95–96) note that the Jīlín Lèishì sometimes reflects regional vocabulary that does not match central court speech. The present entry should at minimum be flagged as a regional or variant form, not treated as an unproblematic reflex of the same etymon.

---

### 23. `ja_oki` — **water** — medial position affricate `d͡ʑ` vs. expected fricative `ʑ`

`words/water.js` line 60: `["水", "mid͡ʑi"]`

In Central Okinawan (Naha–Shuri), the historical /z/ phoneme (from OJP /d/ before /i/) is realised as an affricate [d͡ʑ] in syllable-initial position but as a fricative [ʑ] in syllable-medial (intervocalic) position. In みじ /miʑi/, the じ is intervocalic (following the open syllable み), and the expected phonetic value is therefore [ʑ], not [d͡ʑ]. Using the affricate symbol in a medial environment overstates the plosive component. The correct narrow transcription is `["水", "miʑi"]` (or the phonemic `/midzi/` if the entry is meant to be broad).

---

## Worker round-1 response (作業者round-1)

Thanks for the thorough Japonic/Koreanic pass. Editing policy this round: I apply only clear, unambiguous local errors / internal inconsistencies or reviewer-endorsed mechanical normalizations, and hold genuine cross-school, system-level, or convention choices for a corpus-wide decision.

### Applied

- **#3 `pry` fire `*pi`/`pi` → `*pii`/`piː`** (applied by orchestrator this round). Internally inconsistent: sibling pry items eye `*mii`/`miː`, tree `*kii`/`kiː`, hand `*tii`/`tiː` all use long vowels, and the Miyako/Yonaguni reflexes in the same file are `piː` (long). Pellard's `*pii` matches. `words/fire.js`.
- **#5 `ja_mvi` water `mid͡zu` → `mid͡zɨ`** (applied by orchestrator this round). The same file's `ja_mvi` moon already uses the Miyako high central vowel `ɨ` (`t͡sɨkɨ`); after a dental/alveolar the Irabu reflex of *midu is `mid͡zɨ`. Vowel-quality normalization only. `words/water.js`.
- **#6 `ja_kanbun` father `chichi` → `t͡ɕit͡ɕi`** (applied by orchestrator this round). Clear error: every other `ja_kanbun` entry is IPA (`hi`, `ki`, `kokoɾo`, `tsuki`); `chichi` is Hepburn. The modern `ja` line already has `t͡ɕit͡ɕi`. `words/father.js`.
- **#7 `ja_kyo` hello `konnitɕiwa` → `konnit͡ɕiwa`** (applied by orchestrator this round). Tie-bar normalization to match the standard `ja` line in the same file; phonemically identical register. `words/hello.js`.
- **#13 `ja_kg` water `mid̥zɯ̥` → `midzɯ̥`** (applied by orchestrator this round). Removed the devoicing ring on the stop only. Kagoshima devoices high vowels (`ɯ̥`, kept), not the voiced obstruent; `d̥` had no phonological motivation. I took your second alternative `midzɯ̥` (bare `dz`) rather than `mid͡zɯ̥` because the local house style for this stratum uses bare `dz` (cf. `ja_edo` `midzu`, standard `mizɯ`) — introducing a tie-bar here would create a new inconsistency. `words/water.js`.
- **#20 `pjk` father & mother form field `ǝ` (U+01DD) → `ə` (U+0259)** (applied by orchestrator this round). Confirmed by byte inspection: form field = `307 235` (turned e), IPA field already `311 231` (schwa). Form fields corrected to standard IPA schwa in both `words/father.js` and `words/mother.js`.

### Held (won't-fix / needs reviewer or corpus-wide decision)

- **#1, #14 `ojp` fire `pə` → `pi`.** Held. The 火/日 vowel-class identity is exactly the disputed kō/otsu (甲/乙) point: the traditional and Frellesvig/Vovin treatment is 日 *pi₁* (A) vs 火 *pi₂* (B). Changing `pə`→`pi` would assert an A-series merger that the schwa (B-series) reading deliberately avoids. This is a reconstruction school choice, not a clear local error.
- **#2 `ojp` house `ipey` → `ipe`.** Held. The trailing `-y` most plausibly encodes the e₂ (otsu) vowel in a Yale-style notation rather than a stray glide. Resolving it is bound up with the unresolved OJP-notation question (#12) — needs the corpus-wide OJP scheme decision first.
- **#4 `ja_oki` fire `hi` → `ɸi`.** Held. Central Okinawan (Naha) fire before /i/ is variously described as [çi]/[hi]; the bilabial argument is comparative (sister varieties) rather than Naha-specific. Not a clear local error.
- **#8 `ja_edo`/`ja_kanbun` moon `tsuki` tie-bar.** Held. The two entries are internally consistent with each other and with the bare-digraph house style of the historical strata (`ja_edo` water `midzu`). Adding a tie-bar to only the affricate would break that consistency; you also grant `/u/` may be historically appropriate.
- **#9, #10, #16, #18 Korean tone / historical orthography (`ko_mid`, `ko_bus`, `ko_yb`).** Held. These are corpus-wide policy additions (bangjeom tone marks on every entry; uniform 15th-c. orthography; narrow aspiration transcription), not local fixes. Defer to a system-level decision.
- **#11 `ja_oki` one `tʰiːt͡ɕi`.** Held. Aspiration is non-contrastive in Okinawan, but voiceless stops are predictably aspirated phonetically; marking it is a narrow-vs-broad convention choice, not an error.
- **#12 `ojp` schwa conflation (fire/tree/heart/drink).** Held. Adopting subscripts/diacritics uniformly across all OJP entries is a corpus-wide notation reform.
- **#15 `ko_mid` cat `고아이`/`koai`.** Held. Replacement vs removal (괴 /kwe/ vs 고양이 ancestor) is a sourcing/lexical decision; please specify the target form and I'll apply it.
- **#17 `ja_heian` `tukï` vs `ja_chu` `tuki` moon.** Held. The Heian→Classical i₂>i merger is a real development; the differing diacritic plausibly reflects it. No clear error; a note would require a note field this format lacks.
- **#19 `ja_mvi` one `puːt͡s` → `puːt͡sɨ`.** Held. Unlike #5 (vowel quality), this asserts presence vs deletion of the final apical vowel; Miyako final-vowel devoicing/deletion after affricates is attested, so `puːt͡s` may be intentional. Needs reviewer confirmation that citation form retains `ɨ`.
- **#21 `okg` water source note; #22 `ko_gor` one flag.** Held. These request inline source citations / variant flags, but the `["surface","ipa"]` format has no note field. Not data-correctable here.
- **#23 `ja_oki` water `mid͡ʑi` → `miʑi`.** Held. Affricate-vs-fricative in medial position is a narrow-transcription convention choice; the phonemic broad form is defensible.

---

## Reviewer round-1 response (再評価 round-1)

I re-loaded the live `data` blocks (note: entries live under `WORDS.<word>.data`, not `entries`/line numbers as the original review assumed) and verified every claimed fix byte-for-byte.

### Verification of "Applied" fixes — all six confirmed in live data ✓

- **#3** `words/fire.js` `pry` = `["*pii","piː"]` ✓ (matches sibling eye `*mii`/tree `*kii`/hand `*tii`).
- **#5** `words/water.js` `ja_mvi` = `["水","mid͡zɨ"]` ✓ (parallels `ja_mvi` moon `t͡sɨkɨ`).
- **#6** `words/father.js` `ja_kanbun` = `["父","t͡ɕit͡ɕi"]` ✓ (Hepburn `chichi` gone).
- **#7** `words/hello.js` `ja_kyo` = `["こんにちは","konnit͡ɕiwa"]` ✓ (tie-bar now present).
- **#13** `words/water.js` `ja_kg` = `["水","midzɯ̥"]` ✓ (stop devoicing ring removed; vowel devoicing kept). The worker's choice of bare `dz` over `d͡z` is correct house style (cf. `ja_edo` `midzu`).
- **#20** `words/father.js` & `words/mother.js` `pjk` form fields now U+0259 in **both** array elements (verified by codepoint dump: `259,70,61` / `259,6d,61`). Turned-e U+01DD is gone. ✓

No phantom/claimed-but-missing fixes this round.

### Adjudication of Held items

- **#1, #14 (`ojp` fire `pə`) — ✗ reject the original issue; worker is correct.** On re-examination I must overrule my own round-0 claim. 火 'fire' is otsu-rui (乙類, B-series) i₂ — `pi₂` — while 日 'sun' is kō-rui (甲類, A-series) i₁ — `pi₁` (Frellesvig 2010 §2.2; Vovin *WOJ*). They are **not** the same vowel class. Forcing `pə`→`pi` would have erased a real kō/otsu contrast. The worker's hold is linguistically right. Accepted as **won't-fix (issue was mistaken)**.
- **#2 `ojp` house `ipey`. △ partial.** The `-y` plausibly encodes e₂ (otsu) in a Yale-style digraph (`ey` = otsu e), consistent with the moon `ï`/sun-fire split. Defensible, but it is notationally inconsistent with the rest of the OJP stratum (which uses diacritics, not digraphs). Bundle with #12. Held accepted pending the corpus-wide OJP scheme.
- **#4 `ja_oki` fire `hi`. △ partial / accept hold.** Naha 火 before /i/ is genuinely variable ([çi]~[hi]~[ɸi]); the bilabial case is comparative. Not a clear local error. Accept hold.
- **#8 moon `tsuki` tie-bar. ✓ accept hold.** `ja_edo`/`ja_kanbun` are mutually consistent and consistent with the bare-digraph historical-stratum style (`ja_edo` water `midzu`). System-level normalization.
- **#9, #10, #16, #18 Korean tone / historical orthography. ✓ accept hold.** Bangjeom on every `ko_mid` entry, Gyeongsang/Yanbian pitch marks on every `ko_bus`/`ko_yb` entry, and uniform 15th-c. orthography are corpus-wide policy decisions, not local fixes. Legitimately system-level.
- **#11 `ja_oki` one `tʰiːt͡ɕi`. ✓ accept hold.** Aspiration is non-contrastive but phonetically predictable on voiceless stops; narrow-vs-broad convention. Defensible.
- **#12 `ojp` schwa conflation. ✓ accept hold.** Corpus-wide OJP notation reform (subscripts/diacritics). The one genuine residue is internal inconsistency between `pə`/`kə` (schwa for B-series i₂/ö₂) and `tukï`/`pïtətu` (which use `ï`/diacritics for the same series) — but harmonizing them is exactly the system-level decision being deferred.
- **#15 `ko_mid` cat `고아이`/`koai`. △ partial — still actionable.** Live data confirms `["고아이","koai"]`. This form is not attested in 15th-c. sources; the documented MK lexeme is 괴 /kwe/ (Hunmongjahoe). The worker asked me to specify a target — **I specify: replace with `["괴","kwe"]`** (attested MK form). This is a sourcing fix I can name concretely, so it remains open.
- **#17 `ja_heian` `tukï` vs `ja_chu` `tuki`. ✓ accept hold.** The i₂>i merger from Heian to Classical is real; the diacritic difference plausibly encodes it. No note field exists. Accept.
- **#19 `ja_mvi` one `puːt͡s`. △ partial — actionable, my confirmation given.** The worker held pending my ruling. As the specialist: Irabu/Miyako citation (isolation) form of the numeral does carry the apical/central final vowel — Shimoji (2008) — and the parallel `ja_rys` entry in the same file is `puːt͡sɨ`. A truly vowelless `puːt͡s` would imply a syllabic apical fricative coda that is not the citation realization. **Recommend `["一つ","puːt͡sɨ"]`** for consistency with Yonaguni and with the `ɨ` already adopted in `ja_mvi` moon/water. Remains open.
- **#21 `okg` water, #22 `ko_gor` one. ✓ accept hold.** Both request inline source citations / variant flags; the two-element `["surface","ipa"]` schema has no note field. Not data-correctable. Accept as won't-fix in this format.
- **#23 `ja_oki` water `mid͡ʑi`. ✓ accept hold.** Affricate-vs-fricative in intervocalic position is a narrow-transcription choice; the broad form is defensible.

### New issues

None. Verification surfaced no new errors; the original review's #1/#14 were themselves mistaken (now withdrawn).

### Scorecard

- Applied & verified in live data: 6/6 (#3, #5, #6, #7, #13, #20). ✓
- Held & accepted as defensible system-level / convention / won't-fix: #1, #4, #8, #9, #10, #11, #12, #14, #16, #17, #18, #21, #22, #23.
- Original issues withdrawn as mistaken: #1, #14.
- **Still actionable (open):** #15 (cat → `["괴","kwe"]`), #19 (Miyako one → `["一つ","puːt͡sɨ"]`). #2 bundled with the deferred OJP-scheme decision.

**File status: OPEN** — Dev team to: (1) replace `ko_mid` cat `["고아이","koai"]` with `["괴","kwe"]` in `words/cat.js`; (2) set `ja_mvi` one to `["一つ","puːt͡sɨ"]` in `words/one.js`.
