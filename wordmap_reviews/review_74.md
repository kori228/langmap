# Wordmap review #74 — Intra-language cross-word consistency specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a phonetician and lexical-data auditor whose specialty is *intra-language* internal consistency: given a single language's twenty transcriptions in this dataset, I treat the other nineteen as the de-facto house style and hunt for the one cell that breaks it — a stress mark present in most siblings but absent in a parallel one, a phoneme rendered with the wrong allophone, a vowel quality that flips, or one entry transcribed narrow while the rest are broad. I know this project's data model: each `words/<concept>.js` holds `WORDS.<concept>.data` as `<code>: ["surface", "ipa"]` tuples (object form with `form`/`ipa`/`alt` reserved for multi-script languages), the IPA slot must carry broad-phonemic IPA and *not* native romanization (CONTRIBUTING.md §"IPA conventions"), tone/stress diacritics live inline, and the per-language lat/lng metadata I do not touch lives in `wordmap_data.js`; I read `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md` to confirm conventions and language families. For the linguistic adjudication behind each flag I lean on standard descriptions: for Modern Greek, **Arvaniti (2007) "Greek Phonetics: The State of the Art"** and **Holton, Mackridge & Philippaki-Warburton, _Greek: A Comprehensive Grammar_ (1997)** on obligatory written stress; for Galician, **Regueira (1996) "Galician," _JIPA_** on the velar realization of word-final /n/; for Lithuanian, **Ambrazas (ed.), _Lithuanian Grammar_ (1997)** and **Mathiassen (1996)** on fixed lexical stress; for Tagalog, **Schachter & Otanes, _Tagalog Reference Grammar_ (1972)** on phonemic glottal stop before initial vowels; for European Portuguese, **Cruz-Ferreira (1999) "Portuguese," _IPA Handbook_** and **Mateus & d'Andrade, _The Phonology of Portuguese_ (2000)**. Every "Current" value below was copied verbatim from the live file at the cited line and re-verified by grep on 2026-05-31; the evidence for each consistency flag is the sibling entries, which I cite explicitly. I deliberately did **not** re-report items already addressed in waves #01–70 (the Hawaiian/Swahili/Tagalog "IPA = orthography" cluster, the nan/Min duplicate-key defect); the issues below are the residue those passes did not reach.

---

## Issues found

### 1. `el` — fire — stress mark missing on oxytone φωτιά
- **File:** `words/fire.js` line 159
- **Current:** `["φωτιά", "fotʲa"]`
- **Expected:** `["φωτιά", "foˈtʲa"]`
- **Why:** φωτιά is written with the acute on the final syllable (φω-τιά), i.e. it is oxytone, and Modern Greek lexical stress is obligatory and contrastive (Arvaniti 2007). This file's Greek column marks stress on essentially every polysyllable — `water.js` L159 `["νερό","neˈɾo"]`, `moon.js` L159 `["φεγγάρι","feˈŋɡaɾi"]`, `mother.js` L159 `["μητέρα","miˈteɾa"]`, `father.js` L159 `["πατέρας","paˈteɾas"]`, `good.js` L159 `["καλό","kaˈlo"]` — so the unmarked `fotʲa` is the outlier. Restore the ˈ before the stressed final syllable.

---

### 2. `el` — eat — stress mark missing on τρώω
- **File:** `words/eat.js` line 159
- **Current:** `["τρώω", "tɾoo"]`
- **Expected:** `["τρώω", "ˈtɾoo"]`
- **Why:** τρώω carries the acute on the first ω (τρώ-ω) — paroxytone, stress on the penult. Every other disyllable/polysyllable in the Greek column marks stress (see the list in #1, plus `drink.js` L159 `["πίνω","ˈpino"]`, the exact same verb-shape paroxytone, which *is* marked). The verb cell `tɾoo` is the lone unmarked sibling; add ˈ: `ˈtɾoo`.

---

### 3. `el` — tree — stress mark missing on paroxytone δέντρο
- **File:** `words/tree.js` line 159
- **Current:** `["δέντρο", "ðendɾo"]`
- **Expected:** `["δέντρο", "ˈðendro"]`
- **Why:** δέντρο is written δέ-ντρο with the acute on the penult (paroxytone). Compare the directly parallel paroxytone nouns that *do* mark stress: `house.js` L159 `["σπίτι","ˈspiti"]`, `dog.js` L159 `["σκύλος","ˈskilos"]`, `cat.js` L159 `["γάτα","ˈɣata"]`, `eye.js` L159 `["μάτι","ˈmati"]`, `one.js` L159 `["ένα","ˈena"]`. This cell omits the mark. (Secondary: the ρ here sits in the /ndr/ onset cluster; either tap is defensible, so I leave the [ɾ]→[r] question aside — the load-bearing fix is the stress.)

---

### 4. `el` — thanks — stress mark missing on oxytone ευχαριστώ
- **File:** `words/thanks.js` line 159
- **Current:** `["ευχαριστώ", "efxaɾisto"]`
- **Expected:** `["ευχαριστώ", "efxariˈsto"]`
- **Why:** ευχαριστώ is oxytone (acute on the final -ώ). It is the longest Greek string in the set and the only multi-syllable Greek word with no stress mark at all, whereas its oxytone siblings `νερό`→`neˈɾo`, `καλό`→`kaˈlo`, `πατέρας`/`μητέρα` etc. all carry ˈ. Mark the final syllable: `efxariˈsto`. (The pre-tonic ρ is intervocalic, so it should also read as the tap the rest of the row uses, `efxariˈsto` — matching `neˈɾo`/`miˈteɾa`.)

---

### 5. `gl` — heart — word-final ⟨n⟩ transcribed [n] where the rest of the Galician set has velar [ŋ]
- **File:** `words/heart.js` line 306
- **Current:** `["corazón", "koɾason"]`
- **Expected:** `["corazón", "koɾasoŋ"]`
- **Why:** In Galician, word-final orthographic ⟨n⟩ is realized as the velar nasal [ŋ], and this dataset's Galician column applies that rule everywhere else: `dog.js` L306 `["can","kaŋ"]`, `hand.js` L306 `["man","maŋ"]`, `one.js` L312 `["un","uŋ"]` (Regueira 1996, _JIPA_ 26). `corazón` ends in the same word-final ⟨n⟩ yet is transcribed with the alveolar [n]. It is the lone alveolar-final outlier; bring it in line as `koɾasoŋ`.

---

### 6. `lt` — father — lexical stress mark missing on tė́vas
- **File:** `words/father.js` line 314
- **Current:** `["tėvas", "tʲeːvɐs"]`
- **Expected:** `["tėvas", "ˈtʲeːvɐs"]`
- **Why:** tė́vas is initial-stressed, and the Lithuanian column marks stress on parallel initial-stress disyllables: `mother.js` L320 `["motina","ˈmotʲɪnɐ"]`, `house.js` `["namas","ˈnamɐs"]`, `good.js` L314 `["geras","ˈɡʲɛrɐs"]`, `hello.js` `["labas","ˈlabɐs"]`. `tėvas` has exactly the C-V́-CVs shape of `geras`/`namas` but no ˈ — the lone unmarked initial-stress disyllable. Add the mark (Ambrazas 1997).

---

### 7. `lt` — one — lexical stress mark missing on víenas
- **File:** `words/one.js` line 320
- **Current:** `["vienas", "vʲɪɛnɐs"]`
- **Expected:** `["vienas", "ˈvʲɪɛnɐs"]`
- **Why:** víenas is initial-stressed and structurally identical to `good.js` L314 `["geras","ˈɡʲɛrɐs"]` (both `-as`-final initial-stress adjectives/numerals), which carries the mark, as do `ˈmotʲɪnɐ`, `ˈnamɐs`, `ˈlabas`. This cell is unmarked — same omission as #6, distinct file/line. Add ˈ.

---

### 8. `tl` — dog — initial glottal stop **and** stress mark, unlike the broad rest of the Tagalog set
- **File:** `words/dog.js` line 119
- **Current:** `["aso", "ˈʔaso"]`
- **Expected:** `["aso", "ʔaso"]` (drop the stress mark to match the file's broad style), or — if the project wants glottal+stress — apply it to every vowel-initial Tagalog entry rather than two of them
- **Why:** Tagalog has a phonemic glottal stop before word-initial vowels, but this dataset transcribes the Tagalog column **broadly**: it omits both the initial [ʔ] and any stress mark in every other vowel-initial cell — `mother.js` L119 `["ina","ina"]`, `father.js` L119 `["ama","ama"]`, `fire.js` L119 `["apoy","apoj"]`, `sun.js` L119 `["araw","aɾaw"]`, `drink.js` L119 `["uminom","uminom"]`. Only `aso` (`ˈʔaso`) and `isa` (see #9) got the narrow [ʔ]+ˈ treatment, so they are the two outliers transcribed to a different standard than their 18 siblings. The minimal consistent fix is to broaden them; otherwise add [ʔ] and stress uniformly.

---

### 9. `tl` — one — same narrow glottal+stress outlier as #8
- **File:** `words/one.js` line 119
- **Current:** `["isa", "ʔiˈsa"]`
- **Expected:** `["isa", "isa"]` (broad, to match siblings) — or apply the [ʔ]+stress treatment set-wide
- **Why:** `isa` /ʔiˈsa/ has the same vowel-initial profile as `ina`, `ama`, `apoy`, `araw`, `uminom` (all transcribed broad, no initial [ʔ], no stress). It is the second of only two Tagalog cells that mark both the initial glottal stop and lexical stress; the other eighteen do neither. This is an internal-standard mismatch identical to #8 (different file/line). Pick one standard and apply it uniformly.

---

### 10. `pt_eu` — love — oxytone amor left unstressed while parallel oxytones are marked
- **File:** `words/love.js` line 99
- **Current:** `["amor", "ɐmoɾ"]`
- **Expected:** `["amor", "ɐˈmoɾ"]`
- **Why:** In European Portuguese the stress drives the vowel reduction the column already encodes — note that the unstressed initial /a/ is reduced to [ɐ] here, proving the stress is final, yet no ˈ is written. The two other oxytones in the EP column both mark final stress: `eat.js` L99 `["comer","kuˈmɛɾ"]` and `drink.js` L99 `["beber","bɨˈbɛɾ"]` (and `thanks.js` L99 `["obrigado","obɾiˈɡadu"]`, `heart.js` L99 `["coração","kuɾɐˈsɐ̃w"]`). `amor` reduces the pre-tonic vowel like its siblings but omits the stress mark; add ˈ (Cruz-Ferreira 1999; Mateus & d'Andrade 2000).

---

### 11. `pt_eu` — hello — oxytone olá unstressed, breaking the column's reduce-and-mark pattern
- **File:** `words/hello.js` line 99
- **Current:** `["olá", "ɔla"]`
- **Expected:** `["olá", "ɔˈla"]`
- **Why:** olá bears the orthographic acute on the final -á (oxytone). The EP column marks final stress on its other oxytones (`kuˈmɛɾ`, `bɨˈbɛɾ`, `obɾiˈɡadu`, `kuɾɐˈsɐ̃w` per #10's list). `ɔla` is unmarked, so the reader cannot tell it from a first-stressed word; add ˈ before the final syllable: `ɔˈla`.

---

### 12. `eo` — (whole set is consistent) — note: no actionable Esperanto outlier found
- **File:** `words/*.js` (Esperanto row, e.g. `water.js` L557, `eye.js` L559)
- **Current:** e.g. `water.js` `["akvo","ˈakvo"]`, `eye.js` `["okulo","oˈkulo"]`, `mother.js` `["patrino","paˈtrino"]`
- **Expected:** no change
- **Why:** Recorded for transparency, not as a defect, so the next reviewer need not re-audit it. Esperanto stress is invariably penultimate, and this dataset marks it on the penult in **every** Esperanto cell without exception — `ˈakvo`, `ˈfajro`, `ˈsuno`, `ˈpatro`, `paˈtrino`, `oˈkulo`, `saˈluton`, `ˈbona`. This is the very model the Greek (#1–4), Lithuanian (#6–7), and European-Portuguese (#10–11) columns fail to meet; I include it as the comparison standard rather than let the Esperanto set be mistaken for unreviewed.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
