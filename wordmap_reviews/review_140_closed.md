# Wordmap review #140 — Per-word deep dive: TREE, HOUSE, DOG, CAT, HAND, EYE, HEART, ONE, GOOD

## Reviewer self-introduction (ペルソナ自己紹介)

私は LangMap Wordmap データセットの語彙意味論・歴史音韻論を専門とするレビュアー #140 で、本ラリー第12波として、TREE / HOUSE / DOG / CAT / HAND / EYE / HEART / ONE / GOOD の9ファイルを「語義のずれ」「surface↔IPA 不一致」「転写の外れ値」の三本立てで精査しました。My method is sibling-anchored: for each suspect cell I compare it against (a) the same lexeme in genealogically adjacent rows of the *same* file, (b) the same language's treatment of the same orthographic letter across the 20-word corpus, and (c) the established conventions adjudicated in the closed reviews. Every "Current" value below was re-grepped verbatim from the live `words/*.js` at the cited line on 2026-06-11, and I confirmed each error still stands and is not already fixed or held wont-fix (I grepped `wordmap_reviews/*_closed.md` for each language+word before reporting). The richest seam this pass was the **Indo-Aryan `kfr` (Kachhi) row**, which systematically reads the Gujarati-script consonant letters as if their romanized digraphs were English/IPA values — exactly the ⟨th⟩→[θ] misreading class adjudicated for Yucatec in closed review #19. Reference works underpinning the judgements: Buck (1949) *A Dictionary of Selected Synonyms in the Principal Indo-European Languages* for the cardinal/'good'/body-part semantics; Swadesh-list lexicography for the generic-vs-specific sense control; Masica (1991) *The Indo-Aryan Languages* and Cardona & Jain (2003) for the NIA stop/affricate inventories; the Douglas–Barclay POJ tradition and Branner (2000) for Min (`nan_te`); Forvo/RAE descriptive Andalusian phonology for `es_an`; Toso's *Grammatica del genovese* and the Académia Ligùstica do Brénno orthography for Ligurian (`lij`); Vance (2008) *The Sounds of Japanese* and Frellesvig (2010) for the Japanese historical strata (`ja_kanbun`); plus the project docs `docs/words/CONTRIBUTING.md` ("IPA notation, not the language's native romanization"), `docs/words/LANG_CODES.md`, and the adjudication record of all closed reviews #01–120.

---

## Issues found

### 1. kfr — hand — Gujarati-script ⟨થ⟩ /tʰ/ rendered as the dental fricative [θ], a phoneme absent from the language
- **File:** words/hand.js line 366
- **Current:** `['હથ', 'həθ']`
- **Expected:** `['હથ', 'hətʰ']`
- **Why:** Kachhi (`kfr`, Indo-Aryan, Sindhic) is here written in Gujarati script; final ⟨થ⟩ is the voiced-less aspirated dental stop /tʰ/ ("th"), not the dental fricative /θ/, which no Indo-Aryan lect in this corpus has. The error is a romanization-as-IPA misread of the digraph ⟨th⟩ — the same class adjudicated for Yucatec ⟨th⟩→/θ/ in closed review #19. The sibling evidence is decisive: the *identical* Gujarati letter is `tʰ` in `gu hand હાથ → haːtʰ` (hand.js:215), and every other IA 'hand' uses the aspirated stop (`hi haːtʰ`, `bhb haːtʰ`). The same `kfr` row even renders aspirated ⟨ख⟩ correctly as a stop one file over: `kfr eye અખ → əkʰ` (eye.js:366). Only the manner is wrong — stop, not fricative.

---

### 2. kfr — tree — palatal affricate /dʒʱ/ flattened to a plain stop [ɟ] (aspiration + affrication both lost)
- **File:** words/tree.js line 366
- **Current:** `['ઝાડ', 'ɟɑːɗ']`
- **Expected:** `['ઝાડ', 'dʒʱaːɖ']`
- **Why:** The surface ⟨ઝાડ⟩ is byte-identical to `gu tree ઝાડ` (tree.js:215). Initial ⟨ઝ⟩ = the voiced aspirated palato-alveolar affricate /dʒʱ/ ("jh"), so the cell must read `dʒʱ`, exactly as the three sibling rows with the same grapheme do: `gu ઝાડ → dʒʱaːɖ`, `mr झाड → dʒʱaːɖ` (tree.js:213), `bhb झाड़ → dʒʱaːɽ` (tree.js:835). The `kfr` value instead writes `ɟ` (a plain, unaspirated *stop*), losing both affrication and aspiration; the nucleus `ɑː` is also a stray outlier against the siblings' `aː`. Masica (1991 §3) on the OIA palatal series. Part of the same `kfr` mis-transcription cluster as #1 and #3.

---

### 3. kfr — house — ⟨ઘ⟩ /ɡʱ/ written with the implosive letter [ɠ], an impossible "aspirated implosive"
- **File:** words/house.js line 373
- **Current:** `['ઘર', 'ɠʱəɾ']`
- **Expected:** `['ઘર', 'ɡʱəɾ']`
- **Why:** ⟨ઘ⟩ is the voiced aspirated velar stop /ɡʱ/ ("gh"). The current IPA uses `ɠ` U+0260 (the *implosive* ɠ) plus the aspiration sign `ʱ` — a contradiction, since voiced aspirates (breathy-voiced stops) and implosives are mutually exclusive articulations, and ⟨घ/ઘ⟩ is never implosive. The identical grapheme is `ɡʱ` in every sibling: `gu ઘર → ɡʱəɾ` (house.js:222), `mr घर → ɡʱəɾ` (house.js:220), `hi घर → ɡʱaɾ` (house.js:82); even the closely related Sindhic neighbour `sd گهر → ɡʱərʊ` (house.js:214) uses plain `ɡʱ`. (Kachhi *does* have an implosive series, but ⟨gh⟩ is not a member of it.) Third member of the `kfr` segmental-misread cluster.

---

### 4. nan_te — eye — Teochew 目 onset /b/ mis-transcribed as [m], the lone outlier in the whole Southern Min column
- **File:** words/eye.js line 741
- **Current:** `["目", "mak˥˥"]`
- **Expected:** `["目", "bak˥˥"]`
- **Why:** 目 *bak/bok* 'eye' begins with /b/ across the entire Min cluster, and this dataset writes it so everywhere else: `nan 目 → bak˦` (eye.js:73), `nan_pn → bak˥˥` (eye.js:980), `nan_qz → bak˦˦` (eye.js:1058), `nan_hai → bak˨˨` (eye.js:1059), plus the binome rows `nan_xm/nan_zz 目睭 → bak̚…` (eye.js:340–341) and `hak_tw 目珠 → muk…` for the Hakka cognate. Only the Teochew (`nan_te`) cell reads `mak`, substituting a nasal [m] for the voiced stop /b/. Teochew has /b/ (e.g. it shares the *bak* reading); the review-#54 Min audit tone-checked this column but never caught the onset. The tone `˥˥` is left untouched — only the spurious b→m change is the error.

---

### 5. es_an — dog — Andalusian *perro* given [h] for the rolled /r/, an aspiration that targets /x/, never the rhotic
- **File:** words/dog.js line 503
- **Current:** `["perro", "peho"]`
- **Expected:** `["perro", "pero"]`
- **Why:** Andalusian Spanish (`es_an`) aspirates coda /s/ and realizes the velar /x/ as [h] — and the dataset captures exactly that elsewhere in the same column: `es_an eye ojo → oho`, `es_an heart corazón → koɾasɔ̃`. But word-medial ⟨rr⟩ in *perro* is the trill/tap rhotic /r/, which Andalusian does **not** turn into [h]. Every sibling Spanish-variety 'dog' confirms the rhotic: `es_co perro → pero`, `es_cl → pero`, `es_ar → pero`, `es_mx → pero` (dog.js:498–502, 98), `es_eu → ˈpero`. The `peho` value erroneously runs the /x/→[h] rule onto the rhotic; correct is `pero`. (Surface left unchanged.)

---

### 6. lij — cat — the corpus's only Ligurian geminate: *gatto* given [ɡatːu] in a row that degeminates everywhere else
- **File:** words/cat.js line 301
- **Current:** `["gatto", "ɡatːu"]`
- **Expected:** `["gatto", "ɡatu"]`
- **Why:** Ligurian/Genoese lost the Latin geminate consonants (Toso, *Grammatica del genovese*); the language has no phonemic /tː/. This cell is the **single** `lij` entry in the entire 20-word corpus carrying a length mark — a codepoint sweep of all `lij` rows (tree `ɛrbu`, house `kaːza`, hand `maŋ`, heart `kwoː`, eye `ødʒu`, dog `kaŋ`, good `buŋ`…) shows no other geminate consonant. The decisive sibling is the Ligurian-variety row for this very word: `lij_t cat → ˈɡatu` (cat.js:390/432) — single /t/. The `ɡatːu` simply imports the Italian double-⟨tt⟩ spelling into the IPA; the genuine Ligurian pronunciation is degeminate [ˈɡatu]. (Surface ⟨gatto⟩ left as-is; only the spurious length removed.)

---

### 7. ja_kanbun — one — Hepburn romanization `hitotsu` sitting in the IPA slot
- **File:** words/one.js line 552
- **Current:** `["一", "hitotsu"]`
- **Expected:** `["一", "ɸitotu"]`
- **Why:** `hitotsu` is Hepburn romaji, not IPA — ⟨h⟩ for the historical bilabial /ɸ/, the ⟨ts⟩ digraph for the affricate, and the rounded ⟨u⟩. The classical-stratum siblings render the *same word* in proper IPA with the labial fricative and bare digraph: `ja_heian 一つ → ɸitotu` and `ja_chu 一つ → ɸitotu` (one.js:553–554). This is precisely the romaji-in-IPA defect that closed review #14 fixed for `ja_kanbun father` (`chichi` → `t͡ɕit͡ɕi`, "every other `ja_kanbun` entry uses IPA"). The #14 hold on `ja_kanbun moon` *tsuki* concerned only the tie-bar on an already-IPA value; it did **not** sanction the ⟨h⟩-for-/ɸ/ Hepburn spelling, which is the error here. Aligning to the Heian/Chūsei siblings gives `ɸitotu`. (The `一` vs `一つ` surface mismatch is a separate, lesser matter; the load-bearing fix is removing romaji from the IPA field.)

---

### 8. aiw — good — surface field contains the IPA letter ⟨ɡ⟩ U+0261 instead of orthographic ⟨g⟩ U+0067
- **File:** words/good.js line 152
- **Current:** `["ɡoodi", "ɡoːdi"]`
- **Expected:** `["goodi", "ɡoːdi"]`
- **Why:** The surface/orthography column must not contain IPA glyphs (`docs/words/CONTRIBUTING.md`: surface = the language's own romanization, IPA in column 2). The first character of the Awngi (`aiw`) surface is `ɡ` U+0261 (LATIN SMALL LETTER SCRIPT G), an IPA symbol — whereas the same row writes ordinary ASCII `g` U+0067 in its other surfaces: `aiw love gaya`, `aiw thanks galatoma`. This is the same codepoint-hygiene class swept in closed review #113 (the lone-ASCII-`g` / confusable-letter findings); the script-g leaked into the *surface* slot only here. One-codepoint fix in the surface field; the IPA `ɡoːdi` (correctly using U+0261) is fine. (Whether *goodi* is a genuine Awngi item or an English-contact form is a separate lexical question this fix does not prejudge.)

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

All eight findings are clear, sibling-anchored mechanical IPA/codepoint corrections; all APPLIED (applied by orchestrator this round).

- **140-1 (`kfr` hand):** `hand.js:366` `['હથ','həθ']` → `['હથ','hətʰ']`. ⟨થ⟩=/tʰ/ aspirated stop, not fricative /θ/ (no IA lect here has /θ/). Sibling `gu હાથ → haːtʰ` (hand.js:215); same row renders aspirated ⟨ખ⟩ as stop `əkʰ` (eye.js:366).
- **140-2 (`kfr` tree):** `tree.js:366` `['ઝાડ','ɟɑːɗ']` → `['ઝાડ','dʒʱaːɖ']`. ⟨ઝ⟩=/dʒʱ/. Surface byte-identical to `gu ઝાડ → dʒʱaːɖ` (tree.js:215); siblings `mr`, `bhb` agree. Also fixes stray nucleus `ɑː`→`aː` per siblings.
- **140-3 (`kfr` house):** `house.js:373` `['ઘર','ɠʱəɾ']` → `['ઘર','ɡʱəɾ']`. ⟨ઘ⟩=/ɡʱ/ breathy-voiced stop; implosive ɠ U+0260 + ʱ is contradictory. Siblings `gu/mr/hi/sd` all `ɡʱ`.
- **140-4 (`nan_te` eye):** `eye.js:741` `["目","mak˥˥"]` → `["目","bak˥˥"]`. 目 onset is /b/ across the whole Min column (`nan bak˦`, `nan_pn/qz/hai bak…`); only Teochew read `mak`. Tone `˥˥` untouched.
- **140-5 (`es_an` dog):** `dog.js:503` `["perro","peho"]` → `["perro","pero"]`. Andalusian /x/→[h] does not target the rhotic /r/ in *perro*; every Spanish-variety sibling has `pero`. Surface unchanged.
- **140-6 (`lij` cat):** `cat.js:301` `["gatto","ɡatːu"]` → `["gatto","ɡatu"]`. Ligurian has no phonemic geminates; sole length-marked `lij` cell in corpus. Sibling `lij_t → ˈɡatu` (cat.js:390). Surface unchanged.
- **140-7 (`ja_kanbun` one):** `one.js:552` `["一","hitotsu"]` → `["一","ɸitotu"]`. Removes Hepburn romaji from IPA field (h→ɸ, ts digraph, rounded u); matches classical siblings `ja_heian`/`ja_chu` `ɸitotu` (one.js:553-554). Same class as closed #14. Surface `一`/`一つ` mismatch left as a separate lesser matter.
- **140-8 (`aiw` good):** `good.js:152` `["ɡoodi","ɡoːdi"]` → `["goodi","ɡoːdi"]`. Surface first char was script-g U+0261 (verified); replaced with ASCII g U+0067 per surface=orthography rule. IPA field (correctly U+0261) untouched.

## Reviewer round-2 response (再評価 round-2)

I re-grepped all eight cells in the live `words/*.js` on 2026-06-11. Every claimed fix is present byte-for-byte.

- **140-1 ✓** `words/hand.js:366` now `['હથ','hətʰ']`. Fricative→aspirated stop applied; matches `gu haːtʰ`.
- **140-2 ✓** `words/tree.js:366` now `['ઝાડ','dʒʱaːɖ']`. Affricate+aspiration restored and nucleus `ɑː`→`aː`; matches `gu`/`mr`/`bhb`.
- **140-3 ✓** `words/house.js:373` now `['ઘર','ɡʱəɾ']`. Impossible aspirated-implosive removed; matches `gu/mr/hi/sd`.
- **140-4 ✓** `words/eye.js:741` now `["目","bak˥˥"]`. Onset m→b applied, tone untouched; matches the whole Min column.
- **140-5 ✓** `words/dog.js:503` now `["perro","pero"]`. Spurious /x/→[h] removed from rhotic; matches all Spanish siblings.
- **140-6 ✓** `words/cat.js:301` now `["gatto","ɡatu"]`. Geminate length mark removed; matches `lij_t ˈɡatu`.
- **140-7 ✓** `words/one.js:552` now `["一","ɸitotu"]`. Hepburn romaji replaced with IPA; matches `ja_heian`/`ja_chu` (one.js:553–554). The noted `一`/`一つ` surface mismatch is correctly flagged as separate and lesser — not a blocker.
- **140-8 ✓** `words/good.js:152` surface verified via xxd: first byte now `0x67` (ASCII g U+0067); IPA still `c9a1` (script-g U+0261, correct). Codepoint-hygiene fix landed in the right field.

No new issues spotted during verification: each sibling anchor I spot-checked (gu, mr, bhb, the Min column, the Spanish column, lij_t, the ja classical strata) is internally consistent with the applied values.

Scorecard: 8 accepted (✓), 0 partial, 0 rejected. 0 new issues.

**File status: CLOSED** — nothing left to address.
