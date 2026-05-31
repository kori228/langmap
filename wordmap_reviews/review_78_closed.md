# Wordmap review #78 — Suprasegmental placement & syllabification closer

## Reviewer self-introduction (ペルソナ自己紹介)

I am a phonologist whose research sits at the intersection of metrical theory and the phonetics–phonology interface: stress assignment, syllabic-consonant licensing, weight-by-position, and the surface diacritics that encode them in narrow IPA. For metrical placement I work from Hayes, *Metrical Stress Theory: Principles and Case Studies* (1995); for syllabic sonorants I rely on T. A. Hall, "The phonological word: a review" and his work on syllabic consonants in West Germanic and West Slavic, plus Bethin, *Slavic Prosody* (1998) for the syllabic liquids of Czech/Slovak/BCMS. For the individual varieties I lean on Cubberley, *Russian: A Linguistic Introduction* (2002) and the Russian vowel-reduction literature (Padgett & Tabain 2005); Arvaniti's *JIPA* "Modern Greek" illustrative sketch (1999/2007) for Greek lexical accent; Short's Czech and Slovak grammars (in Comrie & Corbett, *The Slavonic Languages*, 1993) for syllabic /r̩ l̩/; and Ashton, *Swahili Grammar* (1944) for Bantu penultimate stress. I know this project's data model intimately — every concept lives in `words/<id>.js` as `["surface","ipa"]` tuples (or the `{form,ipa,alt}` object), tone diacritics sit inline, and the working convention is that a language either marks a feature consistently across all 20 concepts or omits it consistently; my job is to catch the entries that break their own language's pattern. I read every "Current" value verbatim from the live file at the cited line before reporting, and I lean on the entry's own siblings as the primary evidence. The richest seams this pass are Greek lexical accent (which is *written* in the orthography, so there is no excuse for a dropped ˈ), Russian stress (where the vowel-reduction already transcribed pinpoints the missing mark), and West-Slavic syllabic liquids. No data files were modified.

---

## Issues found

### 1. `el` — thanks — Greek lexical accent dropped (ευχαριστ**ώ**)
- **File:** `words/thanks.js` line 159
- **Current:** `["ευχαριστώ", "efxaɾisto"]`
- **Expected:** `["ευχαριστώ", "efxaɾiˈsto"]`
- **Why:** Modern Greek has a single phonemic stress per word, marked in the orthography by the acute (Arvaniti, *JIPA* 1999/2007). The surface form carries the accent on the final ώ, so the citation IPA must place ˈ on that syllable. Every other polysyllabic Greek sibling in this file family marks it — `νερό → neˈɾo`, `καλό → kaˈlo`, `καρδιά → kaɾˈðʲa`, `πατέρας → paˈteɾas`, `μητέρα → miˈteɾa` — so the bare `efxaɾisto` is an internal inconsistency, not a convention choice.

---

### 2. `el` — fire — Greek lexical accent dropped (φωτι**ά**)
- **File:** `words/fire.js` line 159
- **Current:** `["φωτιά", "fotʲa"]`
- **Expected:** `["φωτιά", "foˈtʲa"]`
- **Why:** Same as #1. The orthographic accent on the final ά marks oxytone stress; the transcription must carry ˈ before the stressed syllable. Compare the accented siblings `neˈɾo`, `kaˈlo`, `aˈɣapi`. As written, φωτιά is the only Greek oxytone in the set with no stress mark.

---

### 3. `el` — tree — Greek lexical accent dropped (δ**έ**ντρο)
- **File:** `words/tree.js` line 159
- **Current:** `["δέντρο", "ðendɾo"]`
- **Expected:** `["δέντρο", "ˈðendɾo"]`
- **Why:** δέντρο is a paroxytone-on-the-penult, accent written on έ. Greek siblings that are likewise stem-stressed carry ˈ initially — `μάτι → ˈmati`, `γάτα → ˈɣata`, `σπίτι → ˈspiti`, `ένα → ˈena`, `ήλιος → ˈilios`. The unmarked `ðendɾo` breaks that pattern.

---

### 4. `el` — eat — Greek lexical accent dropped (τρ**ώ**ω)
- **File:** `words/eat.js` line 159
- **Current:** `["τρώω", "tɾoo"]`
- **Expected:** `["τρώω", "ˈtɾoo"]`
- **Why:** τρώω bears its accent on the first ώ (Arvaniti 1999). The hiatus `oo` is correct, but stress must be placed: `ˈtɾoo`. Cf. `πίνω → ˈpino` (the drink-verb sibling), which is correctly marked — the two basic verbs should be transcribed alike.

---

### 5. `ru` — tree — Russian stress mark missing on initial syllable (д**е́**рево)
- **File:** `words/tree.js` line 101
- **Current:** `["дерево", "dʲerʲɪvɐ"]`
- **Expected:** `["дерево", "ˈdʲerʲɪvɐ"]`
- **Why:** Russian stress is lexical and the transcription *already encodes* its location through vowel reduction — the reduced [ɪ] in the second syllable and [ɐ] in the final show that the stressed vowel is the first [e] (Cubberley 2002; Padgett & Tabain 2005). The set otherwise marks stress wherever vowel reduction appears: `вода → vɐˈda`, `собака → sɐˈbakɐ`, `спасибо → spɐˈsʲibɐ`, `хороший → xɐˈroʂɨj`. A reduced-vowel transcription with no ˈ is self-contradictory; де́рево needs the initial mark.

---

### 6. `ru` — love — Russian stress mark missing (люб**о́**вь)
- **File:** `words/love.js` line 101
- **Current:** `["любовь", "lʲʊbofʲ"]`
- **Expected:** `["любовь", "lʲʊˈbofʲ"]`
- **Why:** The first-syllable [ʊ] is the pretonic reduction of /u/; stress falls on the second syllable [o] (любо́вь), which is exactly why it surfaces as full [o] and not [ɐ]. The reduction the transcriber chose pins the stress, so ˈ must precede the second syllable, parallel to `вода → vɐˈda` and `отец → ɐˈtʲet͡s`.

---

### 7. `ru` — one — Russian stress mark missing (од**и́**н)
- **File:** `words/one.js` line 101
- **Current:** `["один", "ɐdʲin"]`
- **Expected:** `["один", "ɐˈdʲin"]`
- **Why:** оди́н is end-stressed; the pretonic /o/ reduces to [ɐ], which the transcription correctly shows. With the reduction present, the missing ˈ is an oversight — the stressed [i] of the second syllable needs the mark, exactly as `огонь → ɐˈɡonʲ` and `отец → ɐˈtʲet͡s` (same [ɐ]-pretonic shape) are handled.

---

### 8. `ru` — hello — Russian stress mark missing (прив**е́**т)
- **File:** `words/hello.js` line 101
- **Current:** `["привет", "prʲɪvʲet"]`
- **Expected:** `["привет", "prʲɪˈvʲet"]`
- **Why:** приве́т is stressed on the final syllable; the first syllable shows the reduced [ɪ] (pretonic /i/ after a palatalized consonant). The reduction marks the stress site, so ˈ belongs before the second syllable. The sibling forms with the same pretonic-reduction-plus-stress structure (`спасибо → spɐˈsʲibɐ`, `собака → sɐˈbakɐ`) all carry it.

---

### 9. `sr` — heart — syllabic /r̩/ ring missing (ср̩це)
- **File:** `words/heart.js` line 312
- **Current:** `["срце", "srt͡sɛ"]`
- **Expected:** `["срце", "sr̩t͡se"]`
- **Why:** In Serbian *srce* the /r/ is the syllable nucleus — a syllabic trill /r̩/ (Bethin, *Slavic Prosody* 1998; Comrie & Corbett 1993). The project already transcribes the identical Croatian and Bosnian cognates correctly two/three lines below: `hr → ˈsr̩t͡se` and `bs → ˈsr̩t͡se` (heart.js L882–883). The Serbian form is the same word and same pronunciation, so the dropped ring (and the unexplained [ɛ] vs the siblings' [e]) is a transcription error; minimally the syllabic-r ring must be added.

---

### 10. `sr` — tree — syllabic /r̩/ ring missing (др̩во)
- **File:** `words/tree.js` line 312
- **Current:** `["дрво", "drʋo"]`
- **Expected:** `["дрво", "dr̩ʋo"]`
- **Why:** *drvo* "tree" has a syllabic /r̩/ as its first-syllable nucleus, the textbook BCMS example of a vocalic liquid (Bethin 1998). As written, `drʋo` is an unpronounceable onset cluster with no nucleus in the first syllable. The Croatian and Bosnian siblings are transcribed correctly: `hr → ˈdr̩vo`, `bs → ˈdr̩vo` (tree.js L882–883). Serbian must match.

---

### 11. `cs` / `sk` — heart — syllabic /r̩/ ring missing in *srdce*
- **File:** `words/heart.js` lines 309 (cs) and 310 (sk)
- **Current:** `cs: ["srdce", "srt͡sɛ"]` / `sk: ["srdce", "srt͡sɛ"]`
- **Expected:** `cs: ["srdce", "sr̩t͡se"]` / `sk: ["srdce", "sr̩t͡se"]`
- **Why:** Czech and Slovak *srdce* "heart" has syllabic /r̩/ as the nucleus of the first syllable — one of the stock Czech examples of a vocalic liquid (Short, in *The Slavonic Languages* 1993; Bethin 1998). The transcription `srt͡sɛ` gives the first "syllable" no nucleus at all. The same project file marks the cognate BCMS forms with the ring (`hr/bs → ˈsr̩t͡se`), confirming the convention is available; the West-Slavic entries simply missed it. (The vowel should also be [e], not [ɛ], in both, matching the BCMS siblings, but the load-bearing fix is the syllabic ring.)

---

### 12. `sk` — sun — syllabic /l̩/ ring missing in *slnko*
- **File:** `words/sun.js` line 316
- **Current:** `["slnko", "slnko"]`
- **Expected:** `["slnko", "sl̩nko"]`
- **Why:** Slovak *slnko* "sun" has a syllabic /l̩/ between /s/ and /n/ — there is no vowel in the first syllable, the lateral *is* the nucleus (Short 1993; Bethin 1998). As transcribed, `slnko` has the impossible onset cluster /sln/ with no nucleus. Slovak liquids /r̩ l̩/ (and their long counterparts /r̩ː l̩ː/) are a defining feature of the language; the ring must be restored. This file even spells *sun* with the long-liquid logic absent, while the project elsewhere uses the ring (PIE `*sóh₂wl̥ → sóh₂wl̩` at sun.js L548), so the diacritic is in the inventory.

---

### 13. `sw` — moon — primary-stress mark mis-placed inside the /mw/ onset
- **File:** `words/moon.js` line 110
- **Current:** `["mwezi", "mˈwezi"]`
- **Expected:** `["mwezi", "ˈmwezi"]`
- **Why:** Swahili stress is regularly penultimate, and *mwezi* is disyllabic /ˈmwe.zi/ with /mw/ a tautosyllabic labialized onset of the first syllable (Ashton 1944). Placing ˈ as `mˈwezi` splits the onset — it asserts a syllable break between [m] and [w], which is wrong by onset maximization (Hayes 1995, §3 on syllable parsing): /mw/ is a single complex onset, so the stress mark must precede the whole onset. The sibling `love → uˈpendo` shows ˈ is meant to sit at the syllable edge, not mid-onset.

---

### 14. `nds` — eat — Low German syllabic /n̩/ ring missing in *eten*
- **File:** `words/eat.js` line 289
- **Current:** `["eten", "eːtn"]`
- **Expected:** `["eten", "eːtn̩"]`
- **Why:** The final `-en` of West-Germanic infinitives surfaces as a syllabic nasal /n̩/ after a coronal stop (Hall, on syllabic consonants in Germanic). The project marks this consistently: Standard German `de → essen [ɛsn̩]`, `trinken [tʁɪŋkn̩]`, Bavarian `bar → essn [ɛsn̩]`, and — crucially — the *same* Low German lemma in the sister file, `nds → drinken [drɪŋkn̩]` (drink.js L289), carries the ring. The bare `eːtn` for *eten* is the lone Low German infinitive missing its syllabic nucleus, an internal inconsistency.

---

### 15. `de_at` — eat — Austrian German syllabic /n̩/ ring missing in *essen*
- **File:** `words/eat.js` line 283
- **Current:** `["essen", "ɛsn"]`
- **Expected:** `["essen", "ɛsn̩"]`
- **Why:** Same syllabic-nasal licensing as #14: *essen* ends in /n̩/, the nasal being the nucleus of the second syllable (Hall). The Standard-German sibling on the line above the regional block, `de → essen [ɛsn̩]` (eat.js L92), and the Bavarian `bar → essn [ɛsn̩]` (L286) both carry the ring; `ɛsn` with no nucleus is the odd one out. (The Austrian drink form `de_at → trinken [tʁɪŋkŋ]` at drink.js L283 does mark a syllabic velar, so the omission here is an oversight, not a deliberate choice to drop syllabicity.)

---

### 16. `ms` — water — orthography copied into the IPA slot; onset + length unmarked, breaks from its own sibling
- **File:** `words/water.js` line 81
- **Current:** `["air", "air"]`
- **Expected:** `["air", "ˈa.ir"]` (minimally `[ʔair]` / `[ˈa.ir]`)
- **Why:** Malay *air* "water" is disyllabic /ˈa.ir/ with a syllable break between the two vowels (and typically a glottal onset [ʔa.ir]); the IPA field is byte-identical to the spelling, the classic "orthography in the IPA slot" defect for a vowel-hiatus word that *looks* monosyllabic to a non-Malay reader. The immediately preceding sibling for the same etymon, `id → ["air", "ˈa.ir"]` (water.js L80), is transcribed correctly with the explicit syllable dot and penultimate stress. Malay and Indonesian *air* are the same disyllable, so `ms` should match `id` rather than echo the spelling.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

All 16 findings verified verbatim against the live data files. Each is a clear internal inconsistency (a sibling entry in the same file already follows the cited convention) or an unambiguous transcription defect. Applying as follows:

1. **`el` thanks** — APPLIED (applied by orchestrator this round). `thanks.js` L159 IPA `efxaɾisto → efxaɾiˈsto`. Oxytone; siblings (`νερό neˈɾo`, `πατέρας paˈteɾas`) all mark stress. Matches the `el_kath` sibling on L512 `efxariˈsto`.
2. **`el` fire** — APPLIED. `fire.js` L159 `fotʲa → foˈtʲa`. Final-accented ά; only unmarked Greek oxytone in the set.
3. **`el` tree** — APPLIED. `tree.js` L159 `ðendɾo → ˈðendɾo`. Paroxytone δέντρο; matches `ˈmati`, `ˈspiti`.
4. **`el` eat** — APPLIED. `eat.js` L159 `tɾoo → ˈtɾoo`. Parallel to the drink-verb sibling `πίνω ˈpino` (drink.js L159).
5. **`ru` tree** — APPLIED. `tree.js` L101 `dʲerʲɪvɐ → ˈdʲerʲɪvɐ`. Reduction already encodes initial stress (де́рево).
6. **`ru` love** — APPLIED. `love.js` L101 `lʲʊbofʲ → lʲʊˈbofʲ`. Pretonic [ʊ] pins second-syllable stress (любо́вь).
7. **`ru` one** — APPLIED. `one.js` L101 `ɐdʲin → ɐˈdʲin`. [ɐ]-pretonic, end-stress (оди́н), matches `огонь ɐˈɡonʲ`.
8. **`ru` hello** — APPLIED. `hello.js` L101 `prʲɪvʲet → prʲɪˈvʲet`. Final stress (приве́т).
9. **`sr` heart** — APPLIED (syllabic ring only). `heart.js` L312 `srt͡sɛ → sr̩t͡sɛ`. Adds the load-bearing syllabic-/r̩/ nucleus, matching hr/bs `sr̩t͡se` (L882–883). HELD on the parenthetical [ɛ]→[e]: vowel quality is a separate per-entry choice the reviewer himself bracketed as secondary; not changing surface vowel without it being the flagged defect.
10. **`sr` tree** — APPLIED. `tree.js` L312 `drʋo → dr̩ʋo`. Syllabic /r̩/ nucleus; matches hr/bs `dr̩vo`.
11. **`cs`/`sk` heart** — APPLIED (syllabic ring only). `heart.js` L309 (cs) and L310 (sk) `srt͡sɛ → sr̩t͡sɛ`. Adds the nucleus the reviewer marked as the load-bearing fix. HELD on [ɛ]→[e] (reviewer bracketed it as secondary).
12. **`sk` sun** — APPLIED. `sun.js` L316 `slnko → sl̩nko`. Syllabic /l̩/ nucleus; ring already in inventory (PIE `sóh₂wl̩` L548).
13. **`sw` moon** — APPLIED. `moon.js` L110 `mˈwezi → ˈmwezi`. Moves ˈ to precede the tautosyllabic /mw/ onset; penultimate stress, edge placement like `uˈpendo`.
14. **`nds` eat** — APPLIED. `eat.js` L289 `eːtn → eːtn̩`. Syllabic nasal; matches sister-file `nds drinken drɪŋkn̩` (drink.js L289).
15. **`de_at` eat** — APPLIED. `eat.js` L283 `ɛsn → ɛsn̩`. Matches `de essen ɛsn̩` (L92) and `bar essn ɛsn̩` (L286).
16. **`ms` water** — APPLIED. `water.js` L81 IPA `air → ˈa.ir`. Removes orthography-in-IPA-slot; matches the `id air ˈa.ir` sibling (L80). Surface "air" unchanged.

Held items: none outright won't-fix. The only deliberate scope limits are the secondary [ɛ]→[e] vowel-quality tweaks for sr/cs/sk *heart* (#9, #11), which the reviewer himself parenthesized as not the load-bearing fix; the syllabic ring — the actual flagged defect — is applied in all three.

---

## Reviewer round-2 response (再評価 round-2)

I re-pulled every cited entry from the live `words/*.js` `data` maps (not the worker's prose) and checked each surface/IPA tuple verbatim. All 16 load-bearing fixes are present in live data:

1. **`el` thanks** ✓ — `thanks.js` el `["ευχαριστώ","efxaɾiˈsto"]`. ˈ on final syllable; matches el_kath `efxariˈsto`.
2. **`el` fire** ✓ — fire.js el `["φωτιά","foˈtʲa"]`. Oxytone marked.
3. **`el` tree** ✓ — tree.js el `["δέντρο","ˈðendɾo"]`. Paroxytone, initial ˈ.
4. **`el` eat** ✓ (better than claimed) — eat.js el `["τρώω","ˈtɾo.o"]`. Stress applied; live form also carries an explicit hiatus dot `o.o` (worker prose said `ˈtɾoo`). The stress placement — the flagged defect — is correct, and the added syllable boundary is an improvement, not a regression. Accepted.
5. **`ru` tree** ✓ — tree.js ru `["дерево","ˈdʲerʲɪvɐ"]`. Initial ˈ over reduced [ɪ]/[ɐ].
6. **`ru` love** ✓ — love.js ru `["любовь","lʲʊˈbofʲ"]`. ˈ before full-[o] tonic syllable.
7. **`ru` one** ✓ — one.js ru `["один","ɐˈdʲin"]`. End-stress over [ɐ]-pretonic.
8. **`ru` hello** ✓ — hello.js ru `["привет","prʲɪˈvʲet"]`. Final stress.
9. **`sr` heart** ✓ (ring); △ ([ɛ] held — now accepted as defensible) — heart.js sr `["срце","sr̩t͡sɛ"]`. Syllabic /r̩/ nucleus present. On re-examination the held [ɛ] is **not** an error to chase: Serbian's own entries in this corpus consistently transcribe /e/ as [ɛ] (`sr fire ʋatra`-block siblings `jɛsti`, `jɛdan`, `mɛsɛt͡s`), so `sr̩t͡sɛ` is internally consistent with sr's transcription style; the hr/bs [e] is a separate per-variety convention. Accepted as a defensible cross-variety choice, not a defect.
10. **`sr` tree** ✓ — tree.js sr `["дрво","dr̩ʋo"]`. Syllabic /r̩/ nucleus.
11. **`cs`/`sk` heart** ✓ (ring); △ ([ɛ] accepted) — heart.js cs `["srdce","sr̩t͡sɛ"]`, sk `["srdce","sr̩t͡sɛ"]`. Ring present in both. The held [ɛ] is here actually *correct* — Czech/Slovak short /e/ is [ɛ], and the cs/sk siblings throughout (`jɛsti`/`jɛdɛn`/`slunt͡sɛ`) use [ɛ]. No further change warranted.
12. **`sk` sun** ✓ — sun.js sk `["slnko","sl̩nko"]`. Syllabic /l̩/ nucleus.
13. **`sw` moon** ✓ — moon.js sw `["mwezi","ˈmwezi"]`. ˈ now precedes the tautosyllabic /mw/ onset; edge placement like `uˈpendo`.
14. **`nds` eat** ✓ — eat.js nds `["eten","eːtn̩"]`. Syllabic nasal ring; matches sister-file `nds drinken drɪŋkn̩`.
15. **`de_at` eat** ✓ — eat.js de_at `["essen","ɛsn̩"]`. Ring present; matches de `ɛsn̩`, bar `ɛsn̩`.
16. **`ms` water** ✓ — water.js ms `["air","ˈa.ir"]`. Orthography-in-IPA defect removed; matches id `ˈa.ir`. Surface "air" unchanged.

**New issues:** none. I checked the surrounding siblings while verifying (Slavic /e/~/ɛ/ split, Greek accent placement, Germanic syllabic-nasal block) and found no further unflagged inconsistencies in the touched entries.

### Scorecard
- Accepted (✓): 1,2,3,4,5,6,7,8,10,12,13,14,15,16 — fixes verified in live data.
- Accepted with the held vowel-quality now adjudicated as defensible (✓ ring / △→accept on [ɛ]): 9, 11.
- Rejected (✗): none.
- New actionable issues: 0.

The two previously-held [ɛ]→[e] items were the reviewer's own bracketed-as-secondary notes; on re-verification the [ɛ] transcriptions are internally consistent with each language's own conventions (Serbian-style [ɛ] for /e/; genuine Czech/Slovak short-e [ɛ]) and are therefore accepted as defensible, not won't-fix-by-fiat. Nothing remains for the dev team.

**File status: CLOSED** — nothing left to address.
