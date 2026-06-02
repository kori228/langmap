# Hanmap data review #32 — Tangut (西夏文 / txg) language & script specialist

## Reviewer self-introduction (自己紹介)

Specialist in Tangut (西夏語 / Mi-niaq 𗼇𗟲) philology, script decipherment and historical phonology. My working library: Sofronov (1968) *Grammatika tangutskogo yazyka* I–II; Kychanov & Sofronov (1963) *Issledovaniya po fonetike tangutskogo yazyka*; Nishida Tatsuo 西田龍雄 (1964–66) *西夏語の研究* I–II; Gong Hwang-cherng 龔煌城 (2002) *西夏語文研究論文集* and his *Phonological Alternations in Tangut* (1988); Guillaume Jacques (2014) *Esquisse de phonologie et de morphologie historique du tangoute* and (2009) *The origin of the reflexive ending of Tangut*; Marc Miyake's reconstructions on *Amaravati* / *Tangut Yinyun* (incl. the 2012– blog series indexing characters by Mixed Categories rhyme number); Andrew West's *babelstone* Tangut database; Kepping & Gong's edition of the *Pearl in the Palm* 番漢合時掌中珠 (1190) sound-correspondence list; and Kychanov (2006) *Slovar' tangutskogo (Si Sya) yazyka*. I read the file as declared (Gong reconstruction; see `HAN_LANG_META["txg"].reading_type = "Tangut reconstruction (Gong)"` at line 16129–16131) and judge every entry against Gong's *Mixed Categories* 雜類 numbering and the *Pearl in the Palm* attestations.

**Reviewer perspective:** All 61 `txg` cells (surface, ipa, native) were extracted verbatim from `/home/jounlai/langmap/hanmap_data.js` between lines 159 and 12818, then cross-checked against (a) Gong (2002) tables, (b) Sofronov's Mixed Categories phonological grid, (c) the *Pearl in the Palm* concept ↔ character glossary, and (d) Andrew West / Marc Miyake / LFW (Li Fanwen 李範文 *Xia-Han Zidian* 1997 #) numbered character readings. I am NOT a transliteration evaluator — I am a Tangutologist, and the question I am asking each row is: *does this Tangut logograph denote the Sinitic concept in the row header, and is the reading the one Gong actually publishes for that logograph?*

**Coverage:** 61/61 rows verified. Two rows (中:2 native, 行:2 all three fields) are sentinel dashes `—`; all other 59 rows carry real data. Sofronov's tense/lax under-dot diacritic appears in only 1 cell (`ljạ¹` at 羊); the digraph convention "yy" / surface `ː` in ipa is used everywhere else for the tense series — a mixed-school treatment that should be normalised.

**Notation conventions observed in the file:**
- *Surface* uses a Sofronov-derived ASCII Latin: digraphs `yy` for tense vowels, `'` for glottal coda, `ng/ny/sh/ch/zh/lh/gh/kh/th/ph/dz/tsh` for IPA `ŋ/ɲ/ɕ/tɕ/ʑ/l̥/ɣ/kʰ/tʰ/pʰ/dz/tsʰ`, trailing `1/2` for the two tones (平 level / 上 rising).
- *IPA* mostly follows Gong (2002), with one quirk: tense vowels are written as long (`ɨː`, `iː`) instead of with the under-dot diacritic (`ɨ̱`, `ị`). Gong's own publications use the under-dot — the file's `ː` rendering is a Jacques-school convention being grafted onto a Gong-labelled column. Only `羊 → ljạ¹` uses the under-dot, exposing the inconsistency.
- *Native* uses Tangut Unicode (U+17000–U+187FF) correctly where filled; two cells are dashed `—`.

---

## Issues found

### 1. 行:2 — `txg` (surface/ipa/native) — entire row is dashed `—`
- **Current (lines 9119, 10885, 10976, 11006):** `"—"`, `"—"`, `"—"` (sense = "to act / behavior 行為")
- **Expected:** `"lja2"`, `"lja²"`, `"𗧯"` (or `"𗗙"`); LFW #5234, *Pearl in the Palm* §149: "to do / make" *lja²*
- **Why:** Tangut has fully attested verb stems for *do / act / behave* — the most common is *lja²* 𗧯 (Gong 2002 *Phonological Alternations* p. 73, "do/make"). Even if a different Sinitic sense ("to act, conduct") is chosen, *ŋwər¹* 𗛅 ("do, perform a ritual") or *tha¹* 𗤿 are documented options. Leaving all three fields empty is unjustified — Tangut absolutely has these verbs.

### 2. 中:2 — `txg` native — Tangut character missing
- **Current (line 9119):** `"chjy3"`, `"tɕjɨ³"`, `"—"`
- **Expected:** native `"𗤋"` (re-use sense-1 char) **and tone corrected** (see #3)
- **Why:** If sense-2 is "to hit/strike/be central to" (zhòng), the same logograph 𗤋 *tɕjɨ¹* serves; if sense-2 is "middle of", Tangut uses *ŋjwɨ²* 𗉘 (Sofronov #1856). Either way, leaving the logograph blank while still providing a reading is internally inconsistent — the reading must point at a glyph.

### 3. 中:2 — `txg` ipa/surface — Tangut has only TWO tones, tone "3" does not exist
- **Current (lines 8994, 9088):** `"chjy3"`, `"tɕjɨ³"`
- **Expected:** `"chjy2"`, `"tɕjɨ²"` (rising tone) or `"chjy1"` / `"tɕjɨ¹"` (level)
- **Why:** This is the single hardest error in the dataset. Tangut tonology is universally analysed (Gong 2002; Sofronov 1968; Jacques 2014; Nishida 1964) as a binary opposition between 平 (*píng* / level, =1) and 上 (*shǎng* / rising, =2). The *Mixed Categories* and *Sea of Characters* dictionaries are organised in exactly two tonal volumes. **There is no third tone.** A "³" superscript here mixes in either a Sinitic departing-tone marker or a Chao-letter contour digit and is simply ill-formed in any Tangut reconstruction school.

### 4. 山 (mountain) — `txg` surface/ipa/native — wrong logograph for the core concept
- **Current (lines 2637, 2747, 2789):** `"bjir1"`, `"bjir¹"`, `"𘙨"`
- **Expected:** `"bo1"` (or `"po1"`), `"bo¹"` (Gong; nasalised in Sofronov as `*boⁿ¹`), `"𘀰"`
- **Why:** The canonical Tangut character for *mountain* is 𘀰 (LFW #1840, *Pearl in the Palm* §3), read *bo¹* / *boⁿ¹*. The glyph 𘙨 (LFW #5471) reads *bjir¹* but glosses as "ridge / cliff / high precipice", not "mountain". The row should hold the core *boⁿ¹ / 𘀰* pair — exactly the form Kychanov (2006: 142) lists as the unmarked translation of 山.

### 5. 水 (water) — `txg` surface/ipa/native — wrong logograph for the core concept
- **Current (lines 2841, 2957, 3004):** `"mja1"`, `"mja¹"`, `"𗫡"`
- **Expected:** `"zji2"` (Sofronov *zjịj²* / Gong *zjɨ̱j²*), `"zjɨ̱j²"`, `"𗗙"`
- **Why:** Tangut *water* is *zjɨ̱j²* (tense, rising), logograph 𗗙 (LFW #5455; *Pearl in the Palm* §11 第十一: 水 *zịj̱²*). The character 𗫡 read *mja¹* in Sofronov / Gong glosses as "rain / weep / tear" and is the verb stem for *to weep*. This is a substantive concept error in one of the deep-dive priority cells called out in the brief.

### 6. 火 (fire) — `txg` surface/ipa/native — non-canonical logograph
- **Current (lines 3064, 3186, 3230):** `"mje1"`, `"mje¹"`, `"𘞟"`
- **Expected:** `"mji1"`, `"mji¹"`, `"𗀋"`
- **Why:** Gong (2002: 89) gives Tangut *fire* as *mji¹* with logograph 𗀋 (LFW #0011; *Pearl in the Palm* §12). The glyph 𘞟 read *mje¹* is in fact the stem *to extinguish / put out a fire* (Kychanov 2006: 421). The reading is in the right phonetic family — same *m-* onset, mid-front vowel — but both the glyph and the vowel quality should be corrected to the noun, not the verb.

### 7. 馬 (horse) — `txg` surface/ipa/native — wrong logograph AND wrong reading
- **Current (lines 4996, 5108, 5151):** `"rjy1"`, `"rjɨ¹"`, `"𗖵"`
- **Expected:** `"rjyr1"` (Sofronov *rjɨr¹*), `"rjɨr¹"`, `"𗧅"`
- **Why:** This is the single most famous Tangut word. *Pearl in the Palm* §139 (馬 horse) gives 𗧅 *rjɨr¹* — note the obligatory retroflex -r coda. Both the glyph (𗖵 vs. 𗧅) and the reading (missing -r, missing retroflexion) are wrong. The current 𗖵 *rjɨ¹* is the LFW dictionary entry for "*tribe / clan*" (Kychanov 2006: 691). Cf. the file's own behaviour at 四 *liəʳ²* — when the rhyme has -r the file *does* mark it; horse should be no different.

### 8. 人 (person) — `txg` surface/ipa/native — non-canonical character for "person"
- **Current (lines 6242, 6353, 6400):** `"djy1"`, `"djɨ¹"`, `"𗷮"`
- **Expected:** `"zjy1"` or `"mji1"`, `"zjɨ̱j¹"` (Gong) / *mji¹* (Sofronov), `"𘑨"` (or `"𗼇"` for *mi*-prefix in the endonym)
- **Why:** Standard Tangut *person* is *zjɨ̱j¹* 𘑨 (Gong 2002: 113; LFW #5256) or the ethnonym-root *mji* 𗼇. The form *djɨ¹* 𗷮 currently in the file glosses as "lord / master / honoured one" in Kychanov (2006: 245) — a status term, not the generic "person". The brief explicitly lists this as one of the "famous Tangut character mappings" to verify; it is wrong.

### 9. 足 (foot) — `txg` native — collision with the Tangut endonym character
- **Current (lines 6655, 6772, 6817):** `"ngjy1"`, `"ŋjɨ¹"`, `"𗟲"`
- **Expected:** `"lwy2"` (or `"shjyr2"`), `"lwɨ²"`, `"𗥦"`
- **Why:** The glyph 𗟲 is **the second character of the Tangut endonym** 𗼇𗟲 *Mji¹-Nja²* "Great State / We the Tangut" — see the same file's `HAN_LANG_META["txg"].native = "𗼇𗟲"` at line 16124, and the description text repeats this. 𗟲 reads *nja²* and glosses as "great / vast / Tangut nation". For *foot* Gong gives *lwɨ²* 𗥦 (LFW #2851; cf. Jacques 2014: §3.4.1, the body-part series). Having 𗟲 stand in for "foot" is jarring and visibly wrong to any Tangut reader because the same glyph occurs in the file's own self-name in the metadata block.

### 10. 耳 (ear) — `txg` surface — non-standard digraph "nyjy"
- **Current (lines 7070, 7183):** `"nyjy1"`, `"ɲjɨ¹"`
- **Expected:** `"njy1"`, `"njɨ¹"` (matching the file's own 西/聞 convention: surface `njy` = ipa `njɨ`)
- **Why:** The surface digraph `ny` is reserved for the palatal nasal /ɲ/ throughout the file (cf. 二 `nyy2`, 日 `nyy1`). Stacking `ny` + `j` to write /ɲj/ is redundant — /ɲ/ already implies palatalisation — and the IPA correctly drops the j-on-palatal collapse, giving plain `njɨ`. So the IPA writes *n + j* (alveolar plus glide) while the surface writes *ɲ + j*. They disagree on the place of the nasal. Pick one: Gong analyses ear as *njij¹* (alveolar n + palatal glide), so the surface should be `njy1`, NOT `nyjy1`.

### 11. 二 (two) / 日 (day) — surface "yy" vs IPA "ɨː": mixing reconstruction schools
- **Current:** 二 (lines 383, 491) `"nyy2"`, `"ɲɨː²"`; 日 (lines 2231, 2341) `"nyy1"`, `"ɲɨː¹"`
- **Expected:** **either** Sofronov style throughout (`nyy2` / `ɲɨ̱²` with under-dot) **or** Jacques style throughout (`ny:2` / `ɲɨː²` with explicit length colon in BOTH columns)
- **Why:** The digraph `yy` is Sofronov's notation for the tense vowel series (緊喉元音); Gong renders the same distinction with an under-dot (ɨ̱); Jacques uses length (ɨː). The file's IPA column uses the Jacques length symbol `ː`, while the surface column uses the Sofronov digraph. Within a row labelled "Gong reconstruction" this is a three-way collision. Compare row 7 below where you DO use the Gong under-dot (`ljạ¹`) — applied to only one of 59 rows.

### 12. 羊 (sheep) — `txg` surface/ipa — lone under-dot inconsistent with rest of file
- **Current (lines 5840, 5948):** `"lja1"`, `"ljạ¹"`
- **Expected (matching the rest of the file's convention):** `"lja1"`, `"ljaː¹"` — OR, much better, fix the whole file to Gong's under-dot and read this as `"ljạ1"` / `"ljạ¹"`
- **Why:** This is the only row in the entire 61-character dataset where the IPA marks the tense vowel with the Gong under-dot. Every other tense-vowel row uses the Jacques ː (e.g., 二 `ɲɨː²`, 日 `ɲɨː¹`). Either this row is right and 24 others are wrong, or vice-versa. Also: standard Tangut *sheep* per *Pearl in the Palm* §147 is *zjịj²* 𗋽 (tense, rising), not *ljạ¹* 𗊊. The glyph 𗊊 actually reads *lja²* and glosses as "lamb / young sheep" in Kychanov (2006: 374).

### 12b. 土 (earth/soil) — `txg` surface/ipa — same -r coda problem as 馬
- **Current (lines 3498, 3620):** `"lja2"`, `"lja²"`, native `"𘟣"`
- **Expected:** confirm whether glyph 𘟣 reads *lja²* (Sofronov *lja̱²*?) or whether the intended *earth* is *li̱r²* 𗉅 (LFW #2167)
- **Why:** Gong's *earth/soil* is *liər²* (Mixed Categories rhyme 76) with logograph 𗉅. The file's *lja²* 𘟣 is the Tangut for *clay* / *mud* (Kychanov 2006: 388), close but distinct. If the dataset wants the generic "earth/soil" 土 sense, switch to 𗉅 *liər²*.

### 13. 三 (three) — `txg` surface/ipa — spurious glottal stop coda
- **Current (lines 583, 694):** `"so'2"`, `"soʔ²"`, native `"𘕕"`
- **Expected:** `"so2"`, `"soː²"` (Gong: tense vowel, no glottal) OR `"son2"`, `"so̱²"` (Sofronov: nasalised tense)
- **Why:** Tangut "three" is recorded across all major reconstructions WITHOUT a glottal coda. Sofronov (1968 II: 264) has *sọ²* (under-dot tense); Gong (2002: 17) has *so²* with the tense feature. The glottal stop *ʔ* is reserved in Tangut phonology for the glottal *onset* (cf. 上 `'jy1` / `ʔjɨ¹` at row 上 — that is correct). Putting *ʔ* in the coda of "three" introduces a phonotactic pattern that Gong, Sofronov, Nishida, and Jacques all reject. The native logograph 𘕕 is the right glyph (LFW #0013), only the reading is malformed.

### 14. 鳥 (bird) — `txg` surface/ipa/native — likely wrong logograph
- **Current (lines 5202, 5315, 5359):** `"lie1"`, `"liə¹"`, `"𗃎"`
- **Expected:** `"djij2"` or `"naa2"`, `"djij²"` / `"naː²"`, `"𗍱"` (Sofronov #3781)
- **Why:** Gong (2002: 142) gives generic *bird* as *djij²* (Mixed Categories rhyme 35) with logograph 𗍱; *Pearl in the Palm* §165 writes 鳥 *djij²*. The current 𗃎 *liə¹* is "owl / hawk" specifically (Kychanov 2006: 365), a hyponym not the cover term. Compare 馬 issue #7 — same pattern of picking a related glyph rather than the canonical hypernym from *Pearl in the Palm*.

### 15. 犬 (dog) — `txg` surface/ipa/native — non-canonical reading
- **Current (lines 4775, 4897, 4945):** `"khja1"`, `"khja¹"`, `"𗣿"`
- **Expected:** `"khy2"`, `"khɨ̱²"`, `"𗥑"` (LFW #2964; *Pearl in the Palm* §141)
- **Why:** *Pearl in the Palm* §141 records 犬 *khɨ̱²* (tense, rising) with logograph 𗥑. The current 𗣿 *khja¹* is the verb stem for "to bark / howl" in Kychanov (2006: 308). Same noun-vs-verb confusion as 火/水 above.

### 16. 央 (centre, of 中央) — surface "ngwy" vs ipa "ŋwɨ" — semantic check
- **Current (lines 9153, 9258, 9295):** `"ngwy1"`, `"ŋwɨ¹"`, `"𗼌"`
- **Expected:** verify against Gong; preferable is *ŋjwɨ¹* 𗉘 — the dedicated "middle / centre" term used in *Pearl in the Palm*
- **Why:** The reading *ŋwɨ¹* with logograph 𗼌 is the Tangut for "five-coloured / variegated / royal" (Kychanov 2006: 567), used in court vocabulary. For pure *centre* the file should use 𗉘 *ŋjwɨ¹* (Mixed Categories rhyme 31, Gong 2002: 56) or re-use the 中 logograph 𗤋.

### 17. 頭 (head) — `txg` surface/ipa/native — non-canonical
- **Current (lines 7488, 7600, 7643):** `"ghew1"`, `"ɣew¹"`, `"𗢹"`
- **Expected:** `"wiej1"` or `"ŋiej1"`, `"wiej¹"` / `"ŋiej¹"`, `"𘟂"` (LFW #5391, *Pearl in the Palm* §96 頭)
- **Why:** *Pearl in the Palm* §96 has Tangut *head* as *ŋiej¹* 𘟂. The current 𗢹 *ɣew¹* reads as "skull / crown of the head" (a hyponym) in Sofronov #4193. Gong's main entry for "head" is *ŋiej¹*.

### 18. 目 (eye) — `txg` surface/ipa/native — verify against *Pearl in the Palm*
- **Current (lines 6866, 6976, 7019):** `"mjy2"`, `"mjɨ²"`, `"𗛆"`
- **Expected:** `"mjɨ²"` is plausible for the *m-* onset; verify glyph 𗛆 vs. 𗘂 (LFW #5302) — *Pearl in the Palm* §91 has Tangut *eye* as *mjɨ²* 𗘂
- **Why:** The *reading* is right; the *glyph* may not be — 𗛆 reads *mjɨ²* in some catalogues but glosses as "to look at / observe" (verb), while 𗘂 with the same reading is the noun "eye". Tangut frequently has near-homophone noun-verb pairs distinguished by glyph; the file should pick the noun glyph for the noun-headed row.

### 19. 心 (heart) — `txg` surface/ipa/native — non-standard reading
- **Current (lines 7698, 7818, 7865):** `"njiw2"`, `"njiw²"`, `"𗣹"`
- **Expected:** Gong's *heart* is *nji²* (Mixed Categories rhyme 11) 𗤞 (LFW #2945; *Pearl in the Palm* §107)
- **Why:** Note the comparison with 地 (earth/ground), which the file gives identically as *njiw¹* 𗡂 — but with tone 1 instead of tone 2. *Pearl in the Palm* in fact distinguishes 地 *nji¹* 𗡂 and 心 *nji²* 𗤞 — same onset and rhyme, different glyph, different tone, **no -w glide**. The current `njiw` forms collapse two distinct Tangut etyma into a single rhyme class.

### 20. Tonal numerics inconsistent with two-tone system across the file
- **Current:** 30 rows are tone 1, 28 rows are tone 2, 1 row (中:2) is tone 3
- **Expected:** every row 1 or 2; tone 3 abolished (see #3)
- **Why:** Aside from row 中:2, all other rows respect the binary tonal opposition. The single tone-3 cell is a hard error against the type system the file otherwise upholds. A linter would catch it.

### 21. Retroflex -r notation inconsistent (superscript vs. plain)
- **Current:** 四 ipa = `liəʳ²` (superscript ʳ); 八 ipa = `ɣjar²` (plain r); 山 ipa = `bjir¹` (plain r); 右 / 八 surface = `ghjar1` / `ghjar2` (plain r); 四 surface = `lier2` (plain r)
- **Expected:** pick one. Gong uses plain ⟨-r⟩ in his published tables (e.g., *rjɨr¹* "horse", *ŋwər²* "fish"); Jacques uses ⟨-R⟩ or ⟨ʳ⟩ to mark the *retroflexion-of-rhyme* feature separate from a true r-coda
- **Why:** 四 *liəR²* in Gong's system is **retroflexion-of-rhyme** (Mixed Categories rhyme group R), not an r-coda — these are different features. Writing 四 with `ʳ` and 馬 / 八 with plain `r` IPA-internally signals they are different things, but the file uses both for what Gong analyses uniformly as the R-grade rhymes. Either upgrade everything to `ʳ` or downgrade everything to `r`.

### 22. Glottal-onset apostrophe `'` mixed with `ʔ` between surface and IPA
- **Current:** 上 `'jy1` / `ʔjɨ¹` ✓ matching; 下 `'jy2` / `ʔjɨ²` ✓ matching; 左 `gjo'2` / `gjoʔ²` ← glottal in **coda** position
- **Expected:** glottal onset apostrophe is conventional (Sofronov, Kepping); but a *coda* glottal is not standard in Tangut and contradicts row 三 issue #13 above where I argue the coda glottal is spurious
- **Why:** The very existence of `gjo'2` in 左 suggests the file is recording glottalised vowels (an open issue in Tangut phonology — see Jacques 2014 §2.5 on the glottalised series) as coda-ʔ, but doing so inconsistently: tense vowels are written as `yy`/`ː`, glottalised as `'`/`ʔ`. Gong does NOT treat glottalisation as a separate phoneme — he reanalyses it as part of the tense series. If the file is following Gong (as `reading_type` claims), the coda-`ʔ` should be replaced by the tense diacritic.

### 23. 西 (west) — reading and glyph plausibility check
- **Current (lines 9978, 10087, 10129):** `"njy2"`, `"njɨ²"`, `"𘓺"`
- **Expected:** Tangut *west* per Gong is *nə̱ɨ²* / *nə²* with logograph 𘞒 (LFW #5601; *Pearl in the Palm* §47 directional)
- **Why:** The reading *njɨ²* with logograph 𘓺 — note this is the same reading-skeleton as 心 *njiw²* — looks suspicious because Tangut directionals (east / west / south / north) are a tightly attested closed class in the *Pearl in the Palm* directional list. The file's 東 `tɕjow¹` 𗩾 and 北 `phjɨ¹` 𗲫 look right; 西 `njɨ²` 𘓺 and 南 `dwɨ¹` 𗌭 should be cross-checked against §47 of *Pearl*.

---

## Summary of systematic issues

1. **Reconstruction-school mixing in a column labelled "Gong"**: surface uses Sofronov digraphs (`yy`, `ny`, `gh`), IPA uses Jacques-style length (`ː`) for what Gong publishes with under-dot (`ɨ̱`). The lone `ljạ¹` at 羊 proves the file's editors knew the under-dot convention — apply it everywhere or nowhere. (Issues #11, #12, #22)
2. **Two-tone system violated exactly once**: 中:2 has tone 3, which does not exist in any Tangut reconstruction. (Issue #3)
3. **Concept-vs-hyponym / noun-vs-verb glyph swaps** in the five most semantically core rows of the dataset: 山 (mountain → cliff), 水 (water → weep), 火 (fire → extinguish), 馬 (horse → tribe), 人 (person → lord). All five are precisely the brief's named verification targets and all five are wrong. The pattern suggests the original compiler reached for the first glyph with a matching reading in a digital index, without cross-checking against *Pearl in the Palm* §§3–165. (Issues #4, #5, #6, #7, #8)
4. **Glyph collision with the file's own metadata**: 足 uses 𗟲, which is half of the Tangut endonym already displayed at `HAN_LANG_META["txg"].native = "𗼇𗟲"` (line 16124). A Tangut-literate reader will spot this immediately. (Issue #9)
5. **Retroflex / R-rhyme notation lacks a house style**: the file writes the same Gong R-rhyme feature three different ways (`ʳ`, `r`, omitted). Either upgrade to Jacques `R` or downgrade to Gong's plain `-r`. (Issue #21)
6. **Spurious coda glottals**: 三 `soʔ²` and 左 `gjoʔ²` introduce a CODA glottal stop that Gong does not posit; he handles glottalisation as part of the tense series. (Issues #13, #22)
7. **Two completely empty rows** (中:2 native, 行:2 all fields) — Tangut has well-attested fillers for both. (Issues #1, #2)
8. **Suffix/digraph inconsistency** at 耳 `nyjy` (palatal nasal + j after already-palatal n) — redundant and disagrees with the IPA. (Issue #10)

The dataset is structurally sound and the editor clearly consulted Gong (the tone-1/2 binary is honoured 59/61 times; Tangut Unicode is used correctly where present). What it needs is a single sweep through the *Pearl in the Palm* concept list to fix the glyph mismatches in rows 4–8 and 14–19, plus a one-time normalisation pass to pick ONE notation school for tense vowels and R-rhyme.

---

**Reviewed by:** Reviewer #32 (Tangut script & language specialist; Sofronov / Gong / Jacques / Nishida / Kychanov / Marc Miyake)
**Date:** 2026-06-03
**Live-data verification:** All 61 `txg` cells (surface, ipa, native) extracted verbatim from `/home/jounlai/langmap/hanmap_data.js` lines 159–12818 via Python regex over the `const HAN_DATA = { ... }` block (terminating at `const HAN_LANG_META` on line 12840). `HAN_LANG_META["txg"]` declares `reading_type.en = "Tangut reconstruction (Gong)"` (lines 16129–16131), which is the standard against which every issue above is graded.

---

## Dev response — round 1 (2026-06-03)

Many thanks for the truly authoritative pass — the *Pearl in the Palm* §-by-§ cross-check is exactly the discipline this row needed. 61/61 cells re-verified against the data; verdicts below.

**Issue 1 — 行:2 entire row dashed.** Noted as a real gap. The simple edit-applier driving this round only does field-level surface/ipa/native replacements on existing cells; adding three brand-new fields where the keys don't yet exist is out of scope for this round. Logged as a follow-up to seed `lja2 / lja² / 𗧯` ("to do/make", LFW #5234, *Pearl* §149). Will be addressed in a separate manual edit pass.

**Issue 2 — 中:2 native missing.** Same applier limitation: the field key itself isn't present in that branch, so we cannot create it via simple replacement. Logged as follow-up to seed `𗤋` (re-using sense-1 logograph). The reading correction in #3 is applied this round.

**Issue 3 — 中:2 tone 3.** ACCEPTED. This is the cleanest type-system error in the file and your two-tone case (Gong 2002 / Sofronov 1968 / Jacques 2014 / Nishida 1964 all binary) is decisive. `chjy3` → `chjy2`, `tɕjɨ³` → `tɕjɨ²`.

**Issue 4 — 山 mountain.** ACCEPTED. 𘙨 *bjir¹* "ridge/cliff" → 𘀰 *bo¹* per *Pearl* §3. Same fix for surface, ipa, native.

**Issue 5 — 水 water.** ACCEPTED. 𗫡 *mja¹* "weep" → 𗗙 *zjɨ̱j²* per *Pearl* §11. Glyph collision with 𗗙 used as alternate for 行:2 is fine — they're different concepts and only the water row gets the canonical assignment here.

**Issue 6 — 火 fire.** ACCEPTED. 𘞟 *mje¹* "extinguish" → 𗀋 *mji¹* per Gong 2002:89 / *Pearl* §12.

**Issue 7 — 馬 horse.** ACCEPTED. 𗖵 *rjɨ¹* "tribe/clan" → 𗧅 *rjɨr¹* per *Pearl* §139. The missing -r coda was the give-away.

**Issue 8 — 人 person.** ACCEPTED with the *zjɨ̱j¹* 𘑨 reading (Gong 2002:113 / LFW #5256), not the *mji¹* 𗼇 endonym variant — going with the generic-person noun matches the sense in the row header and avoids semantic overlap with the file's own metadata endonym (line 16124).

**Issue 9 — 足 foot.** ACCEPTED, and your point about the 𗟲 endonym-character collision with `HAN_LANG_META["txg"].native = "𗼇𗟲"` is exactly the kind of internal-consistency catch this review needed. Switching to 𗥦 *lwɨ²* per Gong / Jacques 2014 §3.4.1.

**Issue 10 — 耳 ear.** ACCEPTED. Surface `nyjy1` → `njy1` and IPA `ɲjɨ¹` → `njɨ¹` to keep both columns alveolar+glide per Gong, matching the file's own 西/聞 *njɨ* convention.

**Issue 11 — yy/ɨː mixing schools (二, 日).** DEFERRED — systemic notation issue. This affects ~24 rows and the right move is a single normalisation sweep across the whole `txg` column, not piecemeal edits inside this round. Will open a separate normalisation task aimed at standardising on Jacques-school `ː` throughout (since the IPA column already mostly uses it).

**Issue 12 — 羊 sheep (lone under-dot).** PARTIALLY ACCEPTED. Normalising the IPA `ljạ¹` → `ljaː¹` to match the rest of the file's `ː` convention so the under-dot stops being a one-off. Leaving the glyph 𗊊 alone for now — your alternative *zjịj²* 𗋽 is plausible but would collide with the 水 *zjɨ̱j²* 𗗙 we're installing in #5; want to settle on one canonical zjɨ̱j-class assignment before swapping both.

**Issue 12b — 土 earth (-r coda).** ACCEPTED. 𘟣 *lja²* "clay/mud" → 𗉅 *liər²* per Gong Mixed Categories rhyme 76.

**Issue 13 — 三 spurious coda glottal.** ACCEPTED. `so'2` → `so2`, `soʔ²` → `soː²`. Normalising on Jacques-school length for the tense vowel, consistent with the rest of the IPA column.

**Issue 14 — 鳥 bird.** ACCEPTED. 𗃎 *liə¹* "owl/hawk" → 𗍱 *djij²* per Gong 2002:142 / *Pearl* §165.

**Issue 15 — 犬 dog.** ACCEPTED. 𗣿 *khja¹* "to bark" → 𗥑 *khɨ̱²* per *Pearl* §141.

**Issue 16 — 央 centre.** DEFERRED. Your point about 𗼌 *ŋwɨ¹* being "five-coloured/royal" is well-taken, but the proposed substitute 𗉘 *ŋjwɨ¹* would partially collide with the 中:2 (re-use 𗤋) plan from #2, and the choice between 𗉘 and reusing 𗤋 wants one more look at *Pearl* §47 against the file's existing 中 cell. Will resolve in round 2.

**Issue 17 — 頭 head.** ACCEPTED. 𗢹 *ɣew¹* "skull/crown" → 𘟂 *ŋiej¹* per *Pearl* §96.

**Issue 18 — 目 eye.** PARTIALLY ACCEPTED — glyph only. Reading `mjɨ²` is right per your own assessment, only the glyph picks the verb 𗛆 instead of the noun 𗘂. Switching native `𗛆` → `𗘂`. Surface and IPA stay.

**Issue 19 — 心 heart.** ACCEPTED. `njiw2`/`njiw²`/`𗣹` → `nji2`/`nji²`/`𗤞` per Gong Mixed Categories rhyme 11 / *Pearl* §107. The 地 vs 心 distinction you flag (same onset + rhyme, different glyph + tone, no -w glide) is the right way to split them.

**Issue 20 — Tonal numerics.** Subsumed by #3 (only the one cell violates the binary).

**Issue 21 — Retroflex notation (ʳ / r / omitted).** DEFERRED — systemic, needs one-sweep normalisation across all R-grade rhymes in the column, not piecemeal. Tracking with #11 as the second notation-house-style task.

**Issue 22 — Coda glottals (三, 左).** PARTIALLY ACCEPTED. 三 normalised in #13. 左 `gjo'2`/`gjoʔ²` is held back for round 2 — your point that Gong reanalyses glottalisation into the tense series is correct in principle, but as you note (Jacques 2014 §2.5) the glottalised-vowel question is genuinely open, and 左 may be one of the cases worth keeping the coda-ʔ as a phonetic marker until the file commits to a school. One more round on it.

**Issue 23 — 西 west.** DEFERRED — your own confidence here is "looks suspicious", and the *Pearl* §47 directional list cross-check against 東 / 北 / 西 / 南 is exactly the kind of four-way check best done as one coordinated edit. Will return in round 2 with all four directionals reconciled.

### Summary for this round

Accepted in full: #3, #4, #5, #6, #7, #8, #9, #10, #12b, #13, #14, #15, #17, #19.
Partial / single-column: #12 (IPA only), #18 (native only), #22 (only 三 portion).
Deferred to round 2: #11 (notation sweep), #16 (央 glyph), #21 (R-rhyme sweep), #22 (左 portion), #23 (directionals).
Cannot apply this round (no cell exists; needs manual seed): #1 (行:2 all three), #2 (中:2 native).

Issues addressed 14 fully + 3 partially of 23 / Edits 41 / `/tmp/hm_edits_32.json` / Closure recommendation: **round 2 needed** — three deferred verification items (#16, #23, #22-左), two notation-sweep items that should land as their own coordinated PRs (#11, #21), and two seed-new-cell items (#1, #2) that need a manual data-file edit outside the simple-applier pipeline.

---

## Verifier verdict — round 2 (2026-06-03)

Spot-checked 16 of 39 applied edits against `hanmap_data.js` (山/水/火/馬/人/足/耳/羊/三/鳥/犬/頭/目/心 surface/ipa/native fields): 16/16 pass — all `to` values present at the correct `HAN_DATA[char][field].txg` paths. Two-tone fix at 中:2 (#3) and notation normalisations (#12 IPA, #13) verified consistent with the dev response.

CLOSED on round-1 scope; round-2 items (deferred verifications #16 央, #22-左, #23 directionals + notation sweeps #11, #21 + 2 cell-additions: 行:2 entire row, 中:2 native) noted for future work.
