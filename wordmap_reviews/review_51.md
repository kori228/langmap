# Wordmap review #51 — Phonetic transcription & IPA-consistency specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a phonetician specialising in cross-linguistic IPA transcription consistency — the discipline of making sure that a multilingual database transcribes comparable phenomena (stress, length, gemination, affrication, vowel reduction, tone) the *same way* across every language in the set, and that the symbols actually used are bona-fide IPA rather than orthographic or ASCII surrogates. My working method is to read each `[surface, ipa]` pair against the source orthography and against the *neighbouring* entries in the same variety, flagging both outright phonetic errors and "broad-vs-narrow" drift where one entry marks a feature its sister entries silently omit. My primary references for this review are the *Handbook of the International Phonetic Association* (IPA, 1999) — especially the illustrative transcriptions for Greek, French, Portuguese (European), Russian and Japanese — and Ladefoged & Maddieson, *The Sounds of the World's Languages* (Blackwell, 1996) for segment-inventory and length/gemination questions. For the script-`ɡ` (U+0261) vs ASCII-`g` (U+0067) question I follow the IPA's own typographic recommendation (Handbook §"The IPA chart", and the Association's policy that the single-storey ⟨ɡ⟩ is the reference glyph for the voiced velar plosive). Where I cite a vowel-reduction rule that *presupposes* a stress position, my point is the internal logic of the transcription itself: you cannot show reduced [ɐ]/[ɨ]/[ə] and then withhold the stress mark that licenses the reduction.

---

## Issues found

### 1. `el` — water — missing (orthographically given) stress mark
- **File:** `words/water.js` line 159
- **Current:** `["νερό", "neɾo"]`
- **Expected:** `["νερό", "neˈɾo"]`
- **Why:** Modern Greek stress is phonemic and is *printed* in the orthography by the tonos: ⟨νερό⟩ carries the accent on the final ⟨ό⟩, so the word is oxytone [neˈɾo]. Other `el` entries in this set (e.g. `mother` μητέρα → `miˈteɾa`, `father` πατέρας → `paˈteɾas`, `dog` σκύλος → `ˈskilos`) *do* mark stress; leaving it off here is an internal broad/narrow inconsistency, not a defensible broad choice. (Handbook of the IPA 1999, "Greek" illustration, where every polysyllable is stress-marked.)

---

### 2. `el` — love — missing stress mark
- **File:** `words/love.js` line 159
- **Current:** `["αγάπη", "aɣapi"]`
- **Expected:** `["αγάπη", "aˈɣapi"]`
- **Why:** ⟨αγάπη⟩ is paroxytone — the tonos sits on ⟨ά⟩ — so the citation form is [aˈɣapi]. Same inconsistency as #1: the sister entries mark Greek stress, this one omits it. (Handbook of the IPA 1999, Greek.)

---

### 3. `el` — sun — missing stress mark (and proparoxytone position)
- **File:** `words/sun.js` line 159
- **Current:** `["ήλιος", "ilios"]`
- **Expected:** `["ήλιος", "ˈili.os"]` (narrowly, with synizesis, `ˈiʎos`)
- **Why:** ⟨ήλιος⟩ is proparoxytone, accent on the initial ⟨ή⟩: [ˈili.os]. The current form not only omits stress but writes the high front vowel cluster as a flat `ilios`. In casual speech the /i/ before a vowel undergoes synizesis to a palatal glide/lateral, but at minimum the stress mark is obligatory and the syllable count must be recoverable. (Handbook of the IPA 1999, Greek; on synizesis see Arvaniti's Greek illustration therein.)

---

### 4. `el` — moon — missing stress + over-narrow prenasalisation
- **File:** `words/moon.js` line 159
- **Current:** `["φεγγάρι", "feŋɡaɾi"]`
- **Expected:** `["φεγγάρι", "feˈɡaɾi"]`
- **Why:** Two problems. (a) Stress: ⟨φεγγάρι⟩ accents ⟨ά⟩, so [feˈɡaɾi] (paroxytone) — the mark is missing. (b) The digraph ⟨γγ⟩ in standard contemporary Greek is most commonly a plain voiced velar stop [ɡ]; the prenasalised [ŋɡ] is a more conservative/careful realisation. Writing the prenasalised cluster here while transcribing other Greek stops plainly is a broad/narrow mismatch with the rest of the `el` set. (Handbook of the IPA 1999, Greek, on the variable realisation of voiced-stop digraphs.)

---

### 5. `el` — eye — missing stress mark
- **File:** `words/eye.js` line 159
- **Current:** `["μάτι", "mati"]`
- **Expected:** `["μάτι", "ˈmati"]`
- **Why:** ⟨μάτι⟩ is paroxytone (tonos on ⟨ά⟩): [ˈmati]. Unmarked here while e.g. `hand` χέρι → `ˈçeɾi` *is* marked. (Handbook of the IPA 1999, Greek.)

---

### 6. `el` — one — missing stress mark
- **File:** `words/one.js` line 159
- **Current:** `["ένα", "ena"]`
- **Expected:** `["ένα", "ˈena"]`
- **Why:** ⟨ένα⟩ carries the tonos on the initial ⟨έ⟩: [ˈena]. Same systematic omission. (Handbook of the IPA 1999, Greek.)

---

### 7. `el` — good — missing stress mark
- **File:** `words/good.js` line 159
- **Current:** `["καλό", "kalo"]`
- **Expected:** `["καλό", "kaˈlo"]`
- **Why:** ⟨καλό⟩ is oxytone — accent on the final ⟨ό⟩: [kaˈlo]. Omitting the mark also loses the contrast with the unrelated paroxytone *κάλο* "callus"; Greek stress is contrastive and must be transcribed. (Handbook of the IPA 1999, Greek.)

---

### 8. `el` — house / drink / cat — three more unmarked Greek polysyllables (consistency cluster)
- **File:** `words/house.js` line 159; `words/drink.js` line 159; `words/cat.js` line 159
- **Current:** `["σπίτι", "spiti"]`; `["πίνω", "pino"]`; `["γάτα", "ɣata"]`
- **Expected:** `["σπίτι", "ˈspiti"]`; `["πίνω", "ˈpino"]`; `["γάτα", "ˈɣata"]`
- **Why:** All three are paroxytone, accent printed on ⟨ί⟩/⟨ί⟩/⟨ά⟩ respectively, hence [ˈspiti], [ˈpino], [ˈɣata]. Grouped here because they are the same defect: the `el` column marks stress in roughly half its entries and omits it in the other half, which a reader cannot disambiguate. The whole `el` set should be normalised to mark stress everywhere. (Handbook of the IPA 1999, Greek.)

---

### 9. `ru` — water — vowel reduction shown but stress mark withheld
- **File:** `words/water.js` line 101
- **Current:** `["вода", "vɐda"]`
- **Expected:** `["вода", "vɐˈda"]`
- **Why:** The first-syllable [ɐ] is the *reduced* (akan'e) reflex of /o/, which is only licensed because the stress falls on the **second** syllable: вода́ [vɐˈda]. By writing [ɐ] but omitting the stress mark, the transcription asserts a reduction whose conditioning (stress) it then hides — internally contradictory. Compare `cat` кошка → `ˈkoʂkə` and `good` хороший → `xɐˈroʂɨj`, which *do* mark stress. (Handbook of the IPA 1999, "Russian" illustration; akan'e described there.)

---

### 10. `ru` — moon — same reduction-without-stress defect
- **File:** `words/moon.js` line 101
- **Current:** `["луна", "ɫʊna"]`
- **Expected:** `["луна", "ɫʊˈna"]`
- **Why:** [ʊ] in the first syllable is reduced unstressed /u/; the word is end-stressed луна́ [ɫʊˈna]. The dark [ɫ] is correctly velarised, but the missing stress mark again leaves the reduction unexplained. (Handbook of the IPA 1999, Russian.)

---

### 11. `ru` — fire / father / dog / thanks — unmarked stress on reduced-vowel words (cluster)
- **File:** `words/fire.js` line 101; `words/father.js` line 101; `words/dog.js` line 101; `words/thanks.js` line 101
- **Current:** `["огонь", "ɐɡonʲ"]`; `["отец", "ɐtʲet͡s"]`; `["собака", "sɐbakɐ"]`; `["спасибо", "spɐsʲibɐ"]`
- **Expected:** `["огонь", "ɐˈɡonʲ"]`; `["отец", "ɐˈtʲet͡s"]`; `["собака", "sɐˈbakɐ"]`; `["спасибо", "spɐˈsʲibɐ"]`
- **Why:** Each shows pre-tonic [ɐ] (and, in собака/спасибо, post-tonic [ɐ]) — the canonical akan'e reduction — which presupposes a stress that is left unwritten: ого́нь, оте́ц, соба́ка, спаси́бо. The `ru` column should mark stress on every polysyllable, as it already does for кошка/хороший, otherwise the reduced vowels are unmotivated. (Handbook of the IPA 1999, Russian; reduction degrees by distance from stress.)

---

### 12. `pt_eu` — fire — vowel reduction shown but stress mark missing
- **File:** `words/fire.js` line 99
- **Current:** `["fogo", "foɡu"]`
- **Expected:** `["fogo", "ˈfoɡu"]`
- **Why:** European Portuguese reduces unstressed final /o/ to [u]; the surfacing [u] in *fogo* [ˈfoɡu] is precisely the unstressed-final reflex, which only makes sense if the **first** syllable is stressed. Sister `pt_eu` entries mark this (`tree` árvore → `ˈaɾvuɾɨ`, `water` água → `ˈaɣwɐ`), so omitting it here is inconsistent. (Handbook of the IPA 1999, "Portuguese (European)" illustration, on unstressed-vowel reduction /o/→[u], /e/→[ɨ], /a/→[ɐ].)

---

### 13. `pt_eu` — eat / drink / thanks / heart — unmarked stress on reduced-vowel words (cluster)
- **File:** `words/eat.js` line 99; `words/drink.js` line 99; `words/thanks.js` line 99; `words/heart.js` line 99
- **Current:** `["comer", "kumɛɾ"]`; `["beber", "bɨbɛɾ"]`; `["obrigado", "obɾiɡadu"]`; `["coração", "kuɾɐsɐ̃w"]`
- **Expected:** `["comer", "kuˈmɛɾ"]`; `["beber", "bɨˈbɛɾ"]`; `["obrigado", "obɾiˈɡadu"]`; `["coração", "kuɾɐˈsɐ̃w"]`
- **Why:** All four exhibit the EP unstressed reductions /o/→[u] and /e/→[ɨ] in pre-tonic syllables (*comer* [kuˈmɛɾ], *beber* [bɨˈbɛɾ], *obrigado* [obɾiˈɣaðu/-ˈɡadu], *coração* [kuɾɐˈsɐ̃w]) — reductions that are only coherent relative to a marked stress. As with Russian, the `pt_eu` column marks stress on some entries and not others; it should be normalised. (Handbook of the IPA 1999, Portuguese (European).)

---

### 14. `de` — eat — missing word stress on a disyllable
- **File:** `words/eat.js` line 92
- **Current:** `["essen", "ɛsn̩"]`
- **Expected:** `["essen", "ˈɛsn̩"]`
- **Why:** *essen* is a trochaic disyllable [ˈɛsn̩] with the syllabic nasal carrying the second (unstressed) syllable. The set's own historical-German entry `de_lut` (Luther German) writes `ˈɛsːən` with the stress mark; the modern `de` form should likewise mark initial stress, both for consistency and because the syllabic [n̩] is licensed only in the unstressed syllable. (Duden *Aussprachewörterbuch*; Handbook of the IPA 1999, "German" illustration, stress on lexical roots.)

---

### 15. cross-cutting — ASCII `g` vs IPA script `ɡ` (U+0261) used inconsistently for the voiced velar plosive
- **File:** representative pair — `words/fire.js` line 516 (`la`) vs the Latin-script European entries; and broadly across all 20 files
- **Current:** e.g. `la: ["ignis", "ignis"]` (fire.js line 516) uses ASCII `g`, whereas English/Spanish/Italian/Greek entries use the IPA glyph `ɡ` (e.g. `good` en → `ɡʊd`, `cat` it → `ˈɡatto`, `eye` ru → `ɡɫas`).
- **Expected:** Normalise every voiced-velar-plosive symbol in the IPA slot to the single-storey IPA glyph `ɡ` (U+0261).
- **Why:** The database mixes two code points for one phoneme: the IPA reference glyph ⟨ɡ⟩ (U+0261) and the ASCII double-storey ⟨g⟩ (U+0067). The IPA's own typographic policy designates the single-storey ⟨ɡ⟩ as the official symbol for the voiced velar plosive (Handbook of the IPA 1999, chart and §"Symbol shapes"). Mixing them is a machine-level inconsistency (the strings are not equal even where the sound is identical) and should be globally normalised. *Recommendation, not a per-entry error* — but it affects dozens of entries in every file.

---

### 16. cross-cutting — IPA field is an exact copy of the orthography for near-phonemic but not transparent spellings
- **File:** e.g. `words/water.js` line 80 (`id`), line 81 (`ms`); `words/cat.js` line 282 (`af`)
- **Current:** `id: ["air", "air"]`; `ms: ["air", "air"]`; `af: ["kat", "kat"]`
- **Expected:** `id: ["air", " a.ir"]` (i.e. [ˈa.ir], two syllables) — at minimum disambiguate the vowel sequence; `af: ["kat", "kat"]` is acceptable, but `air` is not.
- **Why:** For genuinely phonemic Latin orthographies (Afrikaans *kat* [kat]) a surface≡IPA copy is defensible. But Indonesian/Malay ⟨air⟩ "water" is disyllabic [ˈa.ir] / [a.eːr] — the orthographic string ⟨air⟩ read as English-style [ɛə] or monosyllabic [air] is exactly the misreading the IPA field exists to prevent. Copying the orthography verbatim into the IPA slot here provides no phonetic information and is, for ⟨air⟩, positively misleading about syllable count. (Ladefoged & Maddieson 1996 on the value of an explicit syllabic transcription; Handbook of the IPA 1999, Indonesian-type vowel sequences.)

---

### 17. `ja` — thanks — long vowel length contrast is fine, but check the geminate-vs-length convention
- **File:** `words/thanks.js` line 57 (and `hello.js` line 57)
- **Current:** `thanks` → `["ありがとう", "aɾiɡatoː"]`; `hello` → `["こんにちは", "konnit͡ɕiwa"]`
- **Expected:** keep `aɾiɡatoː`; for *konnichiwa* use `konːit͡ɕiwa` (geminate nasal with length mark) **or** consistently write all long segments with doubled symbols.
- **Why:** The `ja` column uses the length mark [ː] for the long vowel in *arigatō* [aɾiɡatoː] but writes the moraic-nasal geminate in *konnichiwa* as a doubled letter ⟨nn⟩ rather than [nː]. Both notations are legal IPA, but using [ː] for one long segment and digraph-doubling for another within the *same column* is the broad/narrow inconsistency this review targets. Note too that the standard Tokyo realisation of moraic /N/ before /n/ is [n], so [konːit͡ɕiwa] is the cleaner transcription. (Handbook of the IPA 1999, "Japanese" illustration, on the moraic nasal and the length mark.)

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
