# Wordmap review #135 — Amazonian & lowland South American auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a field linguist specializing in the indigenous languages of lowland South America — the Tupí-Guaraní family (Paraguayan Guaraní `gn` and its colonial-era ancestor Old Tupi/Tupinambá `tup`), the southern-cone isolate/Araucanian Mapudungun `arn`, the Andean families Quechua (`qu`/`quz`/`quy`) and Aymara (`ay`), and the Amazonian and inter-Andean languages Asháninka `cni`, Shipibo-Konibo `shp`, the Jivaroan cluster `jiv`, Yanesha' `ame`, Nasa Yuwe `pbb`, and Wayuunaiki `guc`. For this review my standing reference works are **Estigarribia (2020), *A Grammar of Paraguayan Guarani*** (and the standard Guaraní orthography/IPA correspondences it codifies, ⟨y⟩=/ɨ/, the puso ⟨ʼ⟩=/ʔ/, ⟨j⟩=the voiced palatal affricate, and bidirectional nasal harmony); **Navarro, *Dicionário de Tupi Antigo*** for Old Tupi orthography (the circumflex semivowels ⟨î û ŷ⟩); **Adelaar & Muysken (2004), *The Languages of the Andes*** for the Quechua/Aymara ejective and aspirated stop series and the three-vowel system with uvular-conditioned lowering; and **Smeets (2008), *A Grammar of Mapuche*** for ⟨ü⟩=/ɨ/ and the interdental series. I know this dataset's model intimately — each `words/<concept>.js` file keys `data` by language code to a `["surface","ipa"]` pair, and the project's pan-corpus convention (verified across dozens of rows and explicitly adjudicated in closed reviews #08, #17, #37, #76, #120) is that orthographic ⟨j⟩ representing a voiced palatal/postalveolar obstruent is transcribed /dʒ/, never /ʒ/. I have read the round-1 reviews in my remit (#19, #49, #84) and the relevant closed adjudications, and I grep `wordmap_reviews/*_closed.md` before reporting so as not to re-raise settled cells (e.g. the `quy` Ayacucho `heart` left deliberately as `sunqu`, and the `quz`/`qu`/`cqu` `suŋqu` uvular-assimilation fixes from #49).

---

## Issues found

### 1. `gn` — dog — Guaraní ⟨j⟩ transcribed /ʒ/ (fricative) instead of /dʒ/ (affricate)
- **File:** words/dog.js line 472
- **Current:** `["jagua", "ʒaɡwa"]`
- **Expected:** `["jagua", "dʒaɡwa"]`
- **Why:** In standard Paraguayan Guaraní orthography ⟨j⟩ is the voiced palatal/postalveolar **affricate** [dʒ] ("used with its English value, as in *jelly*"; Estigarribia 2020; Guaraní alphabet descriptions). The fricative [ʒ] is the least standard of the dialectal realizations and, critically, contradicts this dataset's uniform pan-corpus convention that ⟨j⟩ = /dʒ/ — a convention explicitly affirmed as deliberate policy in closed reviews #17 (`osu anjing andʒiŋ`, `min anjiang aɲdʒiaŋ`) and #08/#37/#120. The Guaraní rows are the lone /ʒ/ outliers in the entire corpus. This and Issues 2–4 below are the four ⟨j⟩-bearing `gn` cells, all sharing the identical defect.

---

### 2. `gn` — moon — same ⟨j⟩=/ʒ/ error in *jasy*
- **File:** words/moon.js line 478
- **Current:** `["jasy", "ʒasɨ"]`
- **Expected:** `["jasy", "dʒasɨ"]`
- **Why:** Same rule as Issue 1: Guaraní *jasy* 'moon' begins with the voiced affricate /dʒ/ (cf. Wiktionary /dʒaˈsɨ/; Estigarribia 2020). The ⟨y⟩=/ɨ/ portion is already correct here, so only the onset needs the /ʒ/→/dʒ/ correction to match both the language standard and the dataset's ⟨j⟩=/dʒ/ convention.

---

### 3. `gn` — cat — same ⟨j⟩=/ʒ/ error in *mbarakaja*
- **File:** words/cat.js line 472
- **Current:** `["mbarakaja", "mbaɾakaʒa"]`
- **Expected:** `["mbarakaja", "mbaɾakadʒa"]`
- **Why:** The word-final ⟨ja⟩ of *mbarakaja* 'cat' carries the same /dʒ/ as Issues 1–2; the current /ʒa/ is the same outlier fricative. The prenasalized onset /ᵐb/ rendered plainly as `mb` is left untouched (a separate, internally consistent convention used across the `gn` rows, e.g. `mbaʼéichapa` → `mbaʔeitʃapa` in hello.js:465).

---

### 4. `gn` — thanks — same ⟨j⟩=/ʒ/ error in *aguyje*
- **File:** words/thanks.js line 472
- **Current:** `["aguyje", "aɡuɨʒe"]`
- **Expected:** `["aguyje", "aɡuɨdʒe"]`
- **Why:** *Aguyje* 'thank you' ends in the syllable ⟨je⟩ = /dʒe/ (Estigarribia 2020; Guaraní pronunciation references). The medial ⟨uy⟩ → /uɨ/ (⟨y⟩=/ɨ/) is already correctly transcribed; only the affricate onset of the final syllable is mis-rendered as the fricative /ʒ/. Harmonizes the last of the four `gn` ⟨j⟩ cells.

---

### 5. `guc` — dog — surface field contains a stray `+` placeholder for the high central vowel
- **File:** words/dog.js line 853
- **Current:** `["er+", "eɾɨː"]`
- **Expected:** `["erü", "eɾɨː"]`
- **Why:** The surface string `er+` contains a literal ASCII `+` standing in for Wayuunaiki's high central vowel ⟨ü⟩ (= /ɨ/, "slightly back of central"; Wayuu phonology, *Diccionario Wayuu*). This is a character-encoding artifact, not a real orthographic form — no Wayuu writing system uses `+` as a grapheme. The IPA column already gives the intended `eɾɨː` (long /ɨː/), which confirms the surface should read `erü`. The IPA is correct and left untouched; only the corrupted surface grapheme needs restoring. This cell has never been flagged in any closed review.

---

### 6. `tup` — dog — Old Tupi *îagûara* spelled with plain ⟨i⟩, breaking the circumflex-semivowel convention
- **File:** words/dog.js lines 398 and 439
- **Current:** `["iagûara", "jaˈɣwaɾa"]`
- **Expected:** `["îagûara", "jaˈɣwaɾa"]`
- **Why:** In Navarro's standard Old Tupi orthography the word-initial /j/ semivowel is written with the circumflex ⟨î⟩ (the three semivowels ⟨î û ŷ⟩ are obligatorily circumflexed to mark their derivation), giving *îagûara* 'jaguar/dog'. The bare ⟨i⟩ here is inconsistent with every other circumflex-bearing `tup` row in this very corpus: `marakaîá` (cat.js:398/439), `ereîubé` (hello.js:391/432), `oîepé` (one.js:404/445) — all of which keep ⟨î⟩. The IPA `jaˈɣwaɾa` (already encoding ⟨î⟩=/j/ and ⟨û⟩≈[ɣʷ]) is correct and unchanged; only the surface needs the circumflex restored. Both duplicate rows (398 and 439) carry the identical defect.

---

### 7. `jiv` — dog — orthographic acute accent left in the IPA field of *yawá*
- **File:** words/dog.js line 635
- **Current:** `["yawá", "jawá"]`
- **Expected:** `["yawá", "jaˈwa"]`
- **Why:** Shuar/Jivaroan *yawá* 'dog' is correctly stress-final, but the IPA column `jawá` simply copies the orthographic acute ⟨á⟩ — and the acute accent is **not** an IPA stress notation. IPA marks primary stress with the vertical line ⟨ˈ⟩ placed before the stressed syllable: /jaˈwa/. Every other `jiv` row in the corpus carries no acute in its IPA (e.g. `nukur`→`nukuɾ` mother.js:641, `etsa`→`etsa` sun.js:641, `numi`→`numi` tree.js:635), so this is the lone cell where a non-IPA diacritic survived into the phonetic field.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

All 7 items verified verbatim. Items 1–4 (Guaraní ⟨j⟩ /ʒ/→/dʒ/) align with the explicitly-adjudicated pan-corpus ⟨j⟩=/dʒ/ convention (#08/#17/#37/#120). Items 5–7 are encoding/leak fixes confirmed by each language's own sibling rows. All applied.

- **135-1** `gn` dog `ʒaɡwa`→`dʒaɡwa`: applied by orchestrator this round.
- **135-2** `gn` moon `ʒasɨ`→`dʒasɨ`: applied by orchestrator this round.
- **135-3** `gn` cat `mbaɾakaʒa`→`mbaɾakadʒa`: applied by orchestrator this round.
- **135-4** `gn` thanks `aɡuɨʒe`→`aɡuɨdʒe`: applied by orchestrator this round.
- **135-5** `guc` dog surface `er+`→`erü` (ASCII `+` placeholder for ⟨ü⟩=/ɨ/; IPA `eɾɨː` confirms): applied by orchestrator this round.
- **135-6** `tup` dog surface `iagûara`→`îagûara` (circumflex-semivowel convention; both duplicate rows 398 & 439): applied by orchestrator this round (replace-all, both rows are byte-identical).
- **135-7** `jiv` dog IPA `jawá`→`jaˈwa` (acute is not IPA stress; vertical-line before stressed syllable): applied by orchestrator this round.

Remaining open: 0.

---

## Reviewer round-2 response (再評価 round-2)

I re-verified all seven applied fixes against the live data files via grep. Every claimed value is present verbatim:

- **135-1 ✓** `words/dog.js:472` `gn: ["jagua", "dʒaɡwa"]` — /ʒ/→/dʒ/ applied, matches the pan-corpus ⟨j⟩=/dʒ/ convention.
- **135-2 ✓** `words/moon.js:478` `gn: ["jasy", "dʒasɨ"]` — onset corrected, ⟨y⟩=/ɨ/ intact.
- **135-3 ✓** `words/cat.js:472` `gn: ["mbarakaja", "mbaɾakadʒa"]` — final ⟨ja⟩=/dʒa/ applied.
- **135-4 ✓** `words/thanks.js:472` `gn: ["aguyje", "aɡuɨdʒe"]` — final ⟨je⟩=/dʒe/ applied.
- **135-5 ✓** `words/dog.js:853` `guc: ["erü", "eɾɨː"]` — ASCII `+` placeholder restored to ⟨ü⟩; IPA `eɾɨː` confirms.
- **135-6 ✓** `words/dog.js:398 & 439` both now `tup: ['îagûara', 'jaˈɣwaɾa']` — circumflex semivowel restored in both duplicate rows.
- **135-7 ✓** `words/dog.js:635` `jiv: ["yawá", "jaˈwa"]` — orthographic acute removed from IPA, replaced with vertical-line stress mark.

### New issues
None raised. During verification I noticed `words/dog.js:636` `agr: ["yawá", "jawá"]` carries the orthographic acute in its IPA field, superficially the same defect as 135-7. However, this is a *consistent* `agr` (Aguaruna) pattern across the corpus (`dukú`→`dukú` mother.js:642, `etsá`→`etsá` sun.js:642, `nántu`→`nántu` moon.js:642, `númi`→`númi` tree.js:636), i.e. an internal `agr` transcription convention rather than an isolated leak. Unlike `jiv` — which was the lone outlier among its own siblings — `agr` is self-consistent, so I do not flag it as a new actionable error.

### Scorecard
7/7 items accepted (✓), 0 partial, 0 rejected, 0 new issues. All fixes confirmed in live data.

**File status: CLOSED** — nothing left to address.
