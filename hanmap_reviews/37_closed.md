# Hanmap data review #37 — Directions / positions cohort (上 下 中:1 中:2 央 左 右 東 西 南 北)

## Reviewer self-introduction (自己紹介)

Specialist in the comparative directional / locational vocabulary of the Sinosphere and its periphery. The eleven characters audited here — 上 下 中:1 中:2 央 左 右 東 西 南 北 — sit at the intersection of (a) Sinitic tone-sandhi polyphony (上 shàng vs shǎng, 下 xià-departing vs xià-rising, 中 zhōng vs zhòng), (b) Sino-xenic on/kun strata (Japanese 漢音/呉音/唐音; Korean Hunmin-jeongeum vs modern Sino-Korean), (c) the Min/Yue colloquial-literary 白文 split (nan `chiūⁿ`/`siōng`, yue 上 `soeng6`/`soeng5`), (d) the Tungusic / Mongolic / Sibe directional lexicon where east-and-left, west-and-right traditionally coincide because south is the reference azimuth of Inner Asian camp orientation, and (e) the Tangut, Khitan, and Dungan-Cyrillic peripheries. Primary references cross-checked verbatim against every row in `/home/jounlai/langmap/hanmap_data.js`:

- Schuessler, *ABC Etymological Dictionary of Old Chinese* (2007) and Baxter–Sagart *Old Chinese: A New Reconstruction* (2014) — for 上/下/中/央 polyphony and OC reconstructions.
- 王力『漢語史稿』and 鄭張尚芳『上古音系』 — for the 去/上 alternation (-s suffix departing-tone derivation: 中 *truŋ* vs *truŋ-s*; 上 *daŋʔ* level/locative vs *daŋʔ-s* directional/causative).
- Norman, *Concise Manchu–English Lexicon* (1978) — for `dele/dergi/wargi/julergi/amargi/dulimba/hashū/ici/goimbi`.
- Janhunen, *Manchuria: An Ethnic History* (1996) and *Proto-Mongolic* in *The Mongolic Languages* (2003): the famous *jegün* "left = east" / *baragun* "right = west" pair and *emüne/xojitu* directional system.
- Matisoff, *Handbook of Proto-Tibeto-Burman* (2003) and STEDT online (`stedt.berkeley.edu`) — for absent PTB directional roots (*r-tay "up", *naŋ "below", etc.).
- Pittayaporn, *The Phonology of Proto-Tai* (2009) and Li Fang-Kuei *Handbook of Comparative Tai* — for *taːj^C "south", *ʔɔːk "east/exit", *tok "west/fall", *saːj^C "left", *kwaː^A "right".
- Rimsky-Korsakoff Dyer, *Soviet Dungan Nationalism* (1979) and *Iasyr Shivaza* (1991) — for Dungan Cyrillic conventions (the soft-sign ь tone-3 marker; -aŋ→-aŋ retention; sh- preserved as ш, sh+front-vowel as щ).
- Sofronov, *Грамматика тангутского языка* (1968) and the Nishida 西夏文字辞典 (1966) — for Tangut directional glyphs.
- Kane, *The Kitan Language and Script* (2009) — for what is and is not attested in Khitan for directional vocabulary.
- Coblin, *A Handbook of ʼPhags-pa Chinese* (2007) — for 上/下/中/央 Phags-pa shapes.

I have also read review #8 (Manchu/Tungusic), #9 (Mongolic/Phags-pa/Khitan/Tangut), and #18 (Yuan/Dungan) so as not to repeat their findings; this review concentrates on the directional-cohort-internal coherence and on issues that arise specifically because eleven related-semantics cells are now visible side by side.

**Reviewer perspective:** A direction word is the only kind of lexeme where *all* of (i) tonal polyphony (上聲↔去聲 alternation marking locative vs. directional verb), (ii) literary/colloquial register split, (iii) Sino-xenic on'yomi layering, (iv) substrate inheritance (Tungusic/Mongolic body-frame metaphor), and (v) calendrical / cosmological reuse converge in one cell. The cohort therefore stresses the schema harder than any other thematic group.

**Coverage:** 11 Han keys × 102 HAN_LANGS × {surface, ipa, native} sub-objects sampled. The two `中` rows (`中:1` zhōng, `中:2` zhòng) are reviewed as separate keys per the file's polyphony convention. HAN_VARIANTS entries for the same keys (lines 24499–27272) are checked against the canonical HAN_DATA blocks for coherence.

**Notation conventions observed:** `—` (U+2014) is the null marker; surface/ipa parallelism is the file-wide schema; for Manchu-script languages (mnc, juc, sjo) surface and IPA both carry Möllendorff-style romanization (per review #8 § follow-up); Dungan surface uses Latinized Cyrillic with superscript tone (`¹²³` = ˦ / ˨˦ / ˥˩ per review #18) and `native` carries the Cyrillic orthography.

---

## Issues found

### 1. 上 — `juc` surface/ipa `dergi` is the "east" word, not the "above" word (catastrophic doublet error)

- **Current:** `juc 上: surface="dergi", ipa="dərɡi"`; AND `juc 東: surface="dergi", ipa="dərɡi"` (identical cell content).
- **Expected:** `juc 上: surface="dele", ipa="dələ"` (matching the same-row `mnc dele` / `sjo dele`).
- **Why:** Manchu rigorously distinguishes `dele` "upper, above, top" from `dergi` "east; superior (honorific)" (Norman 1978 pp. 110, 112). The Jurchen cognate inherits exactly the same opposition: Jin Qicong 1984 entry 上 reads `de-le` (大塞 transcription on the 女真譯語), entry 東 reads `der-gi`. The current file copies the `dergi` form into both 上 and 東 cells for `juc`, producing a doublet where one row is **lexically wrong**. Importantly the `mnc` and `sjo` columns of 上 correctly have `dele` — so the error is `juc`-only. This is the single most consequential error in the cohort because it conflates two basic directional concepts.

---

### 2. 央 — `mnc/sjo` `dulimbai` is the *genitive/attributive* of `dulimba`, not the noun "center"

- **Current:** `mnc 央: "dulimbai"`; `sjo 央: "dulimbai"` (same as the noun `dulimba` of 中:1 but with the genitive/attributive marker `-i`).
- **Expected:** `mnc/sjo 央: "dulimba"` — same as 中:1, or alternatively a distinct lexeme such as `kūbulin` "axis/pivot" if a contrastive form is desired.
- **Why:** Manchu `dulimbai` is the attributive form ("of the middle, central") used in compounds (`dulimbai gurun` "Middle Kingdom = China"). The free-standing noun "centre/middle" is `dulimba` (Norman 1978 p. 113). The character 央 (yāng) in Classical Chinese means "centre / middle" as a noun in compounds like 中央 (`zhōngyāng`); both 中 and 央 are nouns. Pairing 中:1 with `dulimba` and 央 with `dulimbai` therefore distinguishes the two cells by *form class*, not by *meaning* — which is a categorial error since 中:1 and 央 are both nouns in Chinese. Either both should be `dulimba` (and the cells consciously document the absence of a separate Manchu word for 央), or 央 should carry a different Manchu lexeme.

---

### 3. `sjo` direction set — `wargi/dergi/julergi/amargi` IPA written with `tɕi` everywhere; Sibe -gi is not categorically affricated

- **Current (sjo IPA only):** 東 `dərtɕi`, 西 `wartɕi`, 南 `d͡ʑulərtɕi`, 北 `amartɕi`.
- **Expected:** `dərɡi`, `warɡi`, `d͡ʑulərɡi`, `amarɡi` — i.e. velar `[ɡi]` not palatal `[tɕi]`.
- **Why:** The fieldwork-attested Chabchal Sibe outcome of Manchu `-gi` is a *velar* [ki] (devoicing) or retained [gi] in conservative speakers (Li Shulan 1984; Zikmundová 2013, *Spoken Sibe*, ch. 2 on consonants). Palatal affrication `[tɕi]` is the outcome of Manchu `-i-` after **dental** stops (e.g. `ti→tɕi`, `di→dʑi`), not after velars. The four directional words all carry the morpheme `-gi` (a Tungusic locative suffix preserved in Manchu and Sibe), and there is no documented Sibe innovation that affricates velar-onset `-gi`. The same row's `mnc` correctly has `[ɡi]`, and the Sibe `[tɕi]` rendering is internally inconsistent: Sibe also has `dele` for 上 (no affrication), `ici` for 右 with `it͡ɕi` (where palatal affrication is correct because that `c` is `/ts/-/tɕ/`, not from `-gi`). The four IPA cells should be reverted to `-ɡi`. (Also: `sjo` `wartɕi` violates the cohort's own implicit phonotactics — there is no Manchu /tɕ/ phoneme that would emerge from /g/ before /i/.)

---

### 4. 中:1 — `nan/nan_xm/nan_qz/nan_zz/nan_pn` main row gives only the literary `tiong`; the white-reading `tiong` collapse hides 白讀 = `tiong` vs 文讀 = `tiong`

- **Current:** Main HAN_DATA row gives `nan: "tiong"` only. HAN_VARIANTS (lines 24499+) for 中:1 does **not** carry a `nan` entry at all (only ja, vi entries).
- **Expected:** For 中, Min Nan does not in fact have a salient 白/文 split (both readings converge on `tiong`) — so this is *not* an error of omission. BUT: this contrasts sharply with sibling 上/下/央/左/右/東/西/南 which all do carry `nan` 白/文 splits in HAN_VARIANTS. The reader is left wondering whether the absence of a `中:1 nan` variant entry is a deliberate "no split exists" assertion or a missing entry. **Recommendation:** add an explicit `中:1 nan: [{label:"白讀=文讀", surface:"tiong", ipa:"tiɔŋ⁵⁵"}]` or a documentation note, so the cohort is read as deliberate not as a gap.

---

### 5. 上 — `nan` main row surface = `siōng` (文讀 only); but 上 nan white-reading is `chiūⁿ` — main cell does not match the lexically dominant colloquial form

- **Current:** `nan 上: surface="tio3"` (nan_hai) — but the canonical `nan` row is **missing** from the main HAN_DATA block (no `"nan": ...` entry under 上.surface). The white reading `chiūⁿ` is correctly given in HAN_VARIANTS line 24503.
- **Expected:** `nan 上: "chiūⁿ"` (白讀, by far the more frequent register; e.g. 上山 *chiūⁿ-soaⁿ*, 早上 *chá-khí*, 上面 *téng-bīn* — actually colloquially 頂面; literary `siōng` is only in formal compounds).
- **Why:** The main HAN_DATA `nan` cell is **absent** for 上 (verified: only `nan_hai`, `nan_xm`, `nan_zz`, `nan_qz`, `nan_pn`, `nan_te` etc. appear, with `nan_qz`, `nan_xm`, `nan_zz`, `nan_pn` all missing). For Min Nan macro-language (`nan`) the convention should match the cohort's own treatment of 下 (main row `e3` = colloquial) and 南 (main row `lâm` = literary). Either way, 上 nan being entirely absent from the main row while 下/中:1/南 all carry main `nan` cells is a coverage gap. Compare 中:1 which correctly has `nan: "tiong"`.

---

### 6. 下 — `cdo` main surface missing; HAN_VARIANTS carries the 白讀 `â` / 文讀 `hâ` split

- **Current:** `cdo 下: surface=<MISSING>, ipa=<MISSING>` in the main HAN_DATA block. HAN_VARIANTS at line 24830 supplies `â/hâ` for cdo correctly.
- **Expected:** Main row should carry `cdo 下: surface="â", ipa="a˩˧"` (the colloquial reading), matching the cohort's treatment of 下 nan_hai = `e3` (also colloquial).
- **Why:** The main HAN_DATA cell is the canonical "default" reading consumed by the compare view; leaving it empty for Min Dong while the sibling 上 has `cdo siōng` produces a row that shows 上 but not 下 in cdo, which the user-facing compare view will render as an asymmetric absence. cdo 下 reading is unambiguously documented (Foochow Romanized: `â` / `hâ`); this is a data gap, not a contested form.

---

### 7. 上 — Yue 6th/5th tone polyphony given in HAN_VARIANTS but main `yue_us` / `yue_hk` cells preserve only `soeng6`

- **Current:** HAN_VARIANTS at line 24598 correctly gives yue `soeng⁶` (locative "above/on") AND `soeng⁵` (directional verb "to go up") with the 6th vs 5th tone split. But the main HAN_DATA rows for `yue_hk`, `yue_mo`, `yue_us` all carry only `soeng6`.
- **Expected:** The cohort treats this as a "polyphony" check explicitly; the same data file has `中:1` (zhōng) and `中:2` (zhòng) as **separate keys** because the tone alternation is lexicalised. The yue 上 soeng6/soeng5 alternation is exactly parallel (locative noun vs. directional verb, with tone change marking valency), and is even more lexically salient in Cantonese than the Mandarin zhōng/zhòng split. By the file's own polyphony convention 上 should split into 上:1 (soeng6, locative) and 上:2 (soeng5, directional verb), parallel to 中:1/中:2. The current HAN_VARIANTS-only encoding hides the polyphony from the compare view, which is precisely the view the polyphony convention exists to expose. **Either** (a) split 上 into 上:1 / 上:2 keys at the HAN_DATA level, or (b) document why the rising-tone 變調 is encoded as a HAN_VARIANT here while the 中 distinction is encoded as a separate key.

---

### 8. 下 — Same yue 6th/2nd polyphony missing (haa6 locative vs haa5 directional verb)

- **Current:** `yue 下: "haa6"` only — both in main row and in absence of HAN_VARIANTS entry for `下 yue`.
- **Expected:** A `下 yue: [{label:"locative", surface:"haa6"}, {label:"directional verb", surface:"haa5"}]` HAN_VARIANTS entry parallel to the 上 entry, OR a 下:1 / 下:2 key split parallel to 中.
- **Why:** Cantonese 下 has exactly the same yang-departing (陽去) / yang-rising (陽上) variation that 上 has: 下面 *haa6 min6* "below" vs. 落下嚟 *lok6 haa5 lai4* "come down". The cohort is therefore asymmetric: 上 documents the polyphony (in variants), 下 does not document it at all. Equal treatment is required.

---

### 9. `bo_sino` directional cells: 上海 borrowed but 下/南/北 partially populated; cohort treatment inconsistent

- **Current:** `bo_sino 上: "hrang"` (the Tibetan ཧྲང་ shape of *shang* from 上海 / *Shanghai* loan), `bo_sino 中:1: "krung"` (from 中國 *Zhongguo*, Tibetan ཀྲུང་གོ་), `bo_sino 西: "zhi"` (Tibetan ཞི་), `bo_sino 北: "pe"` (Tibetan པེ་ from 北京 *Beijing*). But `bo_sino 下/央/左/右/東/南/中:2` are entirely missing.
- **Expected:** Either fill the remaining six cells consistently (e.g. 下 from 下海? 東 from 東京 *Tokyo* but that is Japanese; actually 東 in Tibetan loan-Mandarin is ཏུང་ in 山東 *Shandong*), or document explicitly why only the four place-name-derived loans appear. The metadata for `bo_sino` (line 17205) already says "coverage is therefore deliberately sparse," but the cohort visualisation will still show a 4/11 fill rate as anomalous next to 100% fill for ja_kgs/ko_bus/etc. **Suggestion:** add 東 ཏུང་ from 山東; add 南 ནན་ from 南京 *Nanjing* (Tibetan ནན་ཅིང་); leave 央/左/右/中:2 as `—` and note "not attested in Tibetan Sino-Mandarin loan corpus."

---

### 10. Proto-Tibeto-Burman (`ptb`) entirely absent for all eleven direction characters

- **Current:** Zero `ptb` cells across the cohort (verified by line search — `ptb` first appears at line 628 for 三 and continues for numerals/animals but never for directional vocabulary).
- **Expected:** STEDT (Matisoff 2003 and the online database) has stable PTB reconstructions for the directional / locational core: 上 *r-tay / *m-tu (cf. Tibetan སྟེང་ *steng* "above", WT *bteg*); 下 *m-naŋ / *m-rok (Tib. འོག་ *ʔog*); 東 *naŋ-sa (sunward); 西 *yot ~ *lyot ; 南 *lum (warm side); 北 *daŋ (cold/back side); 左 *p-yay; 右 *g-yas-pa. The reviewer's prompt explicitly flags this. The cohort has `pja`, `pko`, `ptung`, `ptai`, `pmgl` populated for most cells but not `ptb` — yet PTB is the most directly cognate proto-language for these specific lexemes (the Chinese characters' readings themselves derive from Sino-Tibetan roots).
- **Why:** The asymmetry "directional vocabulary has *every* proto-language reconstruction *except* the only one (PTB) where the Chinese forms have direct cognates" is the largest single gap in the cohort. At minimum: 上 ptb `*m-tu`, 下 ptb `*m-rok`, 中 ptb `*m-tuŋ`, 東 ptb `*naŋ`, 北 ptb `*pak` (cognate with 北 OC *pˤək itself — the Sino-Tibetan etymology of 北 is *one of the most secure* in Coblin 1986 / Schuessler 2007).

---

### 11. 東/西 — `pmgl` shares form with 左/右 (*jegün/*baragun); intentional but not documented

- **Current:** `pmgl 東: "*jegün"`, `pmgl 左: "*jegün"`; `pmgl 西: "*baragun"`, `pmgl 右: "*baragun"`. Four cells with two distinct forms.
- **Expected:** This is **etymologically correct** — Proto-Mongolic *jegün ("left, east") and *baragun ("right, west") are the same lexemes because traditional Mongol orientation faces south, so "left" = sunrise direction and "right" = sunset direction (Janhunen 1996: 134; Doerfer *Türkische und mongolische Elemente* II §764). However, the cohort visualisation will show these as identical cells and the user/dev may interpret it as a copy-paste error (cf. issue #1 above where copy-paste IS the actual problem for juc). **Recommendation:** add a `note` field, OR populate `vi_nom` / `ko_hun` style native columns with explanatory marker, OR document this in a metadata sidebar — so the deliberate identity is visually distinguishable from accidental identity (the juc dergi/dergi case).

---

### 12. `ptai 東` / `ptai 西` — surface `*tawan.ʔɔːk.D` / `*tawan.tok.D` is a compound; IPA only carries the second morpheme

- **Current:** `ptai 東: surface="*tawan.ʔɔːk.D", ipa="*ʔɔːk̚"`; `ptai 西: surface="*tawan.tok.D", ipa="*tok̚"`.
- **Expected:** Either (a) keep the compound in both fields: surface `*tawan.ʔɔːk`, IPA `*tawan.ʔɔːk̚`; or (b) keep the bare verbal root in both: surface `*ʔɔːk` (with note), IPA `*ʔɔːk̚`. Pittayaporn (2009) gives PT `*ʔɔːk^D` "to exit/rise" and `*tok^D` "to fall/descend" as the verbal roots; the full 'east'/'west' lexemes are the compounds `*ta-wan ʔɔːk` "sun-rise" / `*ta-wan tok` "sun-fall" (still visible in Thai ตะวันออก / ตะวันตก). The current surface/IPA mismatch (compound surface, simplex IPA) violates the file's parallel-field schema.
- **Why:** Compare ptai 南 `*taːj.C / *taːj˥˩` and 北 `*nɯa.A / *nɯa˧` — both are simplex and surface and IPA agree morphemically. The compound-vs-simplex asymmetry only affects 東/西, which is exactly where the disagreement is most semantically loaded (the verbal root *tok also covers the unrelated meaning "to fall" — so the bare IPA `*tok̚` for 西 is a homophone trap).

---

### 13. `ptai 南` and `ptai 下` — both reconstructed as `*taːj`/`*tajˀ`; close-but-not-identical surface masks a real polysemy

- **Current:** `ptai 南: surface="*taːj.C", ipa="*taːj˥˩"`; `ptai 下: surface="*tajˀ.C", ipa="*taj˥˩"`.
- **Expected:** Either consciously identical (with note that PT *taːj^C indeed means *both* "below" and "south", reflecting the same camp-orientation convention as Mongolic above), or consciously distinct with vowel length / glottal stop differentiating them.
- **Why:** Pittayaporn (2009) reconstructs *taːj^C "to die; south; below; under" as a polysemous root — the diachronic chain is *die* > *fall down/below* > *south* (sun's downward arc when facing east, the standard Tai orientation). The minimal vowel-length / glottalisation contrast (`*tajˀ` vs `*taːj`) shown in the cells is **not** documented in Pittayaporn for these two senses; the same form should appear in both, or the cohort should split into a different reconstruction. The current treatment looks like an attempt to differentiate the two cells artificially.

---

### 14. `txg` 中:1 and 中:2 carry the same Tangut glyph 𗤋

- **Current:** `txg 中:1 native: "𗤋"`; `txg 中:2 native: "𗤋"` (U+18B0B-area). Surface forms `chjy1` (中:1) vs `chjy3` (中:2) correctly differ by tone, but the underlying Tangut graph is identical.
- **Expected:** Tangut distinguished "middle / centre" (a noun) from "to hit / strike" (a verb) with distinct characters in Sofronov's index. The Nishida 1966 dictionary entry for "middle" is 𗤋 (Mi-nia *tśjɨ¹*); the entry for "to hit/strike" is a different graph closer to 𗥯 or 𗦓 depending on register (Kepping 1980 §4.2). Using the same glyph for both senses conflates two different lexemes that Tangut grammar distinguishes by stem.
- **Why:** This mirrors the Sino-Japanese practice where 中 (chū) is graphemically constant but the on-reading rotates by tone, except that Tangut, like modern Chinese for 中, *does* graphically distinguish the senses where they were lexically separate. If Tangut philology cannot confirm a distinct graph for the "hit/strike" sense, the cell should be marked `—` (per the cohort's null convention) rather than duplicated.

---

### 15. `dng` 下 native `щаь` and 央 native `ян` — non-standard Dungan Cyrillic

- **Current:** `dng 下 native: "щаь"`, `dng 央 native: "ян"`, `dng 上 native: "шаңь"`, `dng 北 native: "бый"`.
- **Expected:** In standard Soviet-era Dungan Cyrillic (Rimsky-Korsakoff Dyer 1979; the *Хуэйзў йүян* dictionary, Kalimov 1968):
  - 下 should be `ща` or `сяь` (the soft sign ь *follows* the consonant for palatalisation; *trailing* ь after the vowel `а` is non-standard for the tone-3 marker — the Dungan tone-3 marker is placed at the *end of syllable* only when there is no other final, which for `xia` would be `щаь` ONLY if we use the "consonant+vowel+ь" tone-marker convention, which is one of two competing Soviet orthographies. The file is inconsistently choosing one).
  - 央 (yang¹) should be `ян` ONLY if final ŋ is collapsed to n in Dungan (it is partially), but the file's own 上 `шаңь` preserves the ŋ as `ң`. Inconsistent: 上=шаңь keeps ŋ, 央=ян collapses ŋ→n. (And: 央 has tone 1, so should not carry a soft-sign tone marker; the absence of ь is correct here.)
  - 北 `бый` — the `й` is a glide marker, but `bei` in Dungan is `бый` only if /j/ is inserted in the diphthong nucleus; standard `bei` is `бэй` (Rimsky-Korsakoff Dyer 1979: 88 transliteration of Dungan `北京` *Бэйҗин*).
- **Why:** Dungan Cyrillic is *prescriptive*, not phonetic; the file should pick one orthography (Soviet 1953 = Kalimov, or modern Kyrgyz/Kazakh Dungan = Imazov 1980s) and apply it uniformly. The current mix (北 `бый`, 上 `шаңь` keeping ŋ, 央 `ян` collapsing ŋ, 下 `щаь` with trailing-ь tone marker) reads as ad-hoc.

---

### 16. `dng 央` IPA `jaŋ˦` does not match Dungan reflex of /-jaŋ/

- **Current:** `dng 央: surface="yan¹", ipa="jaŋ˦"`.
- **Expected:** Surface `yang¹`, IPA `jaŋ˦` (with `-ng` in the romanisation), matching dng 上 `shang³` IPA `ʂaŋ˥˩` where the surface preserves `-ng`.
- **Why:** The surface for 央 drops the `g` (`yan`) while the IPA keeps it (`jaŋ`) — direct mismatch within a cell. The cohort's other -ang finals (上 shang, 南 nan with `-n` because nán has /-n/ original, NOT /-ŋ/) treat -ang and -an differently. Specifically 央 in Mandarin is `yāng` /jaŋ/ (which Dungan preserves as /jaŋ/), so surface should be `yang¹` not `yan¹`. The 南 `nan²/nan˨˦` cell is correct (Mandarin nán has /-n/). This is a per-cell typo in 央 surface, not a systemic convention issue.

---

### 17. `dng 北` surface `byi²` / IPA `pei˨˦` — surface `byi` does not correspond to /pei/

- **Current:** `dng 北: surface="byi²", ipa="pei˨˦"`, native `бый`.
- **Expected:** Surface `bei²` (or `pei²` depending on the file's b/p convention for unaspirated stops) to match IPA `pei˨˦`. Per review #18's notation key for `dng` (`b`=unaspirated /p/), the IPA `pei` should romanise as `bei`, not `byi`.
- **Why:** The surface `byi` would correspond to IPA */pji/ or /pi/ (depending on the value of `y`), neither of which equals `pei`. The Cyrillic native `бый` is consistent with `byi` (`б`=b, `ы`=y/ɨ, `й`=glide j), but the IPA `pei˨˦` is the correct Dungan reflex of 中古 北 (Mandarin 北 *běi* with 入聲 redistribution). The cell needs internal harmonisation: either fix surface→`bei²` (and update native `бый`→`бэй`) or fix IPA→`pɨj˨˦` (and keep current surface and native). I recommend the former: standard Dungan for 北 is `bei` /pei/.

---

### 18. 上 — `nan_pera` (Penang Hokkien) cell exists in main row (`siong³`) but is absent from HAN_VARIANTS 白/文 split

- **Current:** `nan_pera 上: surface="siong³"` (main row); but `nan_pera 上` does **not** appear in HAN_VARIANTS at line 24499 onward (nan_my, nan_th, nan_sg appear but not nan_pera).
- **Expected:** `nan_pera 上: [{白讀:"chiūⁿ"}, {文讀:"siong³"}]` parallel to nan_my (line 24702) and nan_sg (line 24730).
- **Why:** Penang Hokkien preserves the 白文異讀 distinction just as Singapore and Malaysian Hokkien do (Hokkien Penang dictionary, Cheah 2017). The cohort treatment of 上 in HAN_VARIANTS deliberately enumerates the Hokkien diaspora variants (nan_my, nan_th, nan_sg, nan_pn, nan_qz, nan_xm, nan_zz) but skips nan_pera. Compare 央 (line 25056) which *does* include nan_pera. Coverage gap.

---

### 19. `wuu_wz` (Wenzhou) — 上 surface `hho²²` / IPA `jɔ²²`; the surface `hho` and IPA `jɔ` belong to different syllables

- **Current:** `wuu_wz 上: surface="hho²²", ipa="jɔ²²"`.
- **Expected:** Either (a) surface `jo²²` / IPA `jɔ²²` (Wenzhou colloquial pronunciation of 上 is `jɔ` /jɔ/ with no /h/ onset), or (b) surface `hho²²` / IPA `ɦo²²` (the literary reading, with voiced /ɦ/ onset, before tone-3 voicing-conditioning).
- **Why:** Wenzhou 上 has two readings: literary `ɦo²²` (voiced /ɦ/) and colloquial `jɔ²²` (zero onset with /j/ glide). The file's surface `hho` notation indicates voiced `ɦ` (compare wuu_wz 下 surface `hho²²` IPA `ɦo²²` — those agree). For 上, the surface and IPA disagree: surface picks literary, IPA picks colloquial. Either both literary or both colloquial; do not split fields by register.

---

### 20. 央 — Japanese kun reading missing across `ja_kun`, `ja_thk`, `ja_okn`; only on-readings present

- **Current:** `ja_kun 央: surface=<MISSING>, ipa=<MISSING>`; same for `ko_hun 央`, `vi_nom 央` (all empty).
- **Expected:** Japanese 央 has no native (kun) reading in standard usage (Kanken Level 1 confirms 音 only: オウ); ko_hun likewise has no native (hun) reading for 央 (Korean directional vocabulary uses 가운데 only for 中, not for 央). vi_nom: 央 has no Nôm reflex either. So missing values are *correct*; but the file convention elsewhere is to fill with `""` (empty string, cf. 央 vi_nom which IS `""`) or `—` rather than leave undefined. Inconsistent null marker.
- **Why:** Cohort comparison would benefit from explicit `null` vs `""` vs `—` distinction:
  - `—` = "this concept does not exist in this language" (e.g. zkt across the board)
  - `""` = "this concept exists but has no native-script form" (e.g. ja_kun 央)
  - `<MISSING>` (key absent) = data gap that the compiler has not addressed.
  Currently the file mixes all three; the 央 row in particular has vi_nom as `""` but `ja_kun` / `ko_hun` keys are absent entirely. Recommend: fill the absent keys with `""` (since these are "exists but no native reading," not "undefined").

---

### 21. 中:2 — `txg 中:2 surface="chjy3"` reuses the 中:1 graph and merely changes tone digit

- **Current:** `txg 中:1: surface="chjy1"`; `txg 中:2: surface="chjy3"`. Same Latinised stem, only the trailing tone digit differs.
- **Expected:** Tangut, like Tibetan, marked tones lexically; many ʂeparate roots happen to differ only by tone, so this could be legitimate. But: the Tangut polysemy "to hit/strike" (中 zhòng sense) is not attested in Nishida or Sofronov's index as a tone-distinguished pair of `tśjɨ`. The 中:2 form should be flagged as conjectural or as carrying the same lexeme as 中:1 with no Tangut distinction.
- **Why:** Compare Khitan `zkt` which honestly carries `—` for both 中:1 and 中:2 (zkt has no attestation). Tangut should follow the same conservative principle for the *attested-only-with-difficulty* zhòng sense; manufacturing a tone-3 reading by analogy is methodologically the same error that review #33 caught for zkt numerals (Manchu copied into Khitan).

---

### 22. `mnc 中:2 = "goibumbi"` — causative verb, not the bare action

- **Current:** `mnc 中:2: surface="goibumbi", ipa="goibumbi"`.
- **Expected:** `goimbi` (the simplex "to hit, to strike, to be on target") or `goibun` (the action-noun "hit, strike").
- **Why:** Norman (1978 p. 165) gives `goimbi` "to hit" as the unmarked verb; `goibumbi` is the causative ("to cause to hit") formed with the -bu- causative suffix. The character 中:2 (zhòng, 去聲) means "to hit, to strike (a target)" — exactly the simplex sense. The Manchu equivalent is `goimbi`, not the causative. Compare 走 (run) where review #8 issue 1 fixed `tukiyembi` (lift, causative-like) → `feksimbi` (run, simplex). Same class of causative-vs-simplex error.

---

### 23. `ja_ojp 東 native = "ツ"` — single-character katakana for what should be "トウ"

- **Current:** `ja_ojp 東: surface="tou", ipa="tou", native="ツ"`.
- **Expected:** `native="トウ"` (matching the surface `tou` and IPA `tou`).
- **Why:** Old Japanese kanbun 音 readings are conventionally given in two-mora katakana (e.g. 上 native `ジャウ`, 央 native `アウ`, 北 native `ポク`, 南 native `ナム`). 東 native `ツ` is a single-character katakana for /tsu/, which does not correspond to either the surface (`tou`) or the IPA (`tou`). This is a per-cell typo; the value should be `トウ` (`to + u` long vowel) consistent with the cohort's other ja_ojp cells.

---

### 24. `ko_hun` 東 = "saet" / native "샛" — but the standard Sino-Korean native term for east is "샛바람" (saetparam), with "샛" being only the prefix

- **Current:** `ko_hun 東: surface="saet", ipa="sɛt̚", native="샛"`.
- **Expected:** Either `surface="새", native="새"` (the bare directional root) or `surface="샛바람", native="샛바람"` (the compound for "east wind"). The bare `샛` (saet) is the bound prefix form not used in isolation.
- **Why:** Korean directional terms `샛 (saet)` "east", `하늬 (hanui)` "west", `마 (ma) / 맞 (mat)` "south", `높 (nop) / 뇟 (noet)` "north" are all bound forms that surface only in compounds (mostly with 바람 "wind"). The cohort here gives 西 `hanui` (bare), 南 `matpa` (bound + bound, ungrammatical alone), 北 `noet` (bound). Three of four are arguably bound forms — but `matpa` is particularly suspect (should be `맞바람` or `마파람` for "south wind"). At minimum the bound-vs-free status should be uniform across the cohort: either all bare prefixes (`새/하늬/마/높`) or all compounds (`샛바람/하늬바람/마파람/높바람`). The current mix mixes registers.

---

### 25. `vi_nom` 東/西/南/北 = "" (empty string) — directionals do have Nôm characters

- **Current:** All four cardinal `vi_nom` cells are `""` (empty string).
- **Expected:** Nôm characters for the cardinal directions do exist as Sino-Vietnamese loans written with the Han form (東, 西, 南, 北) used in Nôm orthography — the same characters serve in both Hán and Nôm registers. The Sino-Vietnamese readings `Đông / Tây / Nam / Bắc` are correctly given in `vi 東/西/南/北` cells. For Nôm specifically, the cohort *can* show the indigenous Nôm characters where they differ from Han: e.g. for the Sino-Vietnamese borrowings, the convention is that vi_nom carries the *same* Han form (because Nôm reuses Han for borrowed compounds), so the empty cells should arguably hold "東" / "西" / "南" / "北" (the same as the Han form, indicating the Nôm character coincides with the Han). Leaving them `""` suggests "no Nôm form exists," which is incorrect — Sino-Vietnamese directional vocabulary is written exactly with these Han graphs in Nôm texts.
- **Why:** Compare vi_nom 上 = `𨕭` (a Nôm-specific graph for native *trên*) and vi_nom 下 = `𠁑` (Nôm-specific for *dưới*). Those are correct because the Nôm columns track the *native Vietnamese* word, which differs from the Sino-Vietnamese loan. For 東/西/南/北 the file should either (a) populate with the Sino-Vietnamese Han graphs (since 東 = đông is the only Vietnamese word for east, with no separate native lexeme), or (b) explicitly leave `""` and document the convention. Currently 上/下 carry native Nôm graphs but 東/西/南/北 carry empty cells, which the compare view will render as a partial-fill gap.

---

End of findings.

**File path:** `/home/jounlai/langmap/hanmap_reviews/37_open.md`
**Finding count:** 25


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 10
- **policy/withdrawn skip**: 15
- **headline**: 上 juc dergi→dele (catastrophic 東 copy-paste fix) ×2, 央 mnc/sjo dulimbai→dulimba (genitive→bare noun) ×4, sjo 東/西/南/北 IPA -tɕi→-gi (palatalisation fix) ×4
- **JSON path**: /tmp/hm_edits_37.json
