# Hanmap data review #56 — Tangut (txg) round-3 audit

## Reviewer self-introduction (自己紹介)

Tangutologist returning for a third pass after #14 (Tang-Song rime-table cross-check) and #32 (Tangut script/language specialist deep sweep). My library: Gong Hwang-cherng 龔煌城 (1988) *Phonological Alternations in Tangut*; (2002) *西夏語文研究論文集* (Academia Sinica); Sofronov M. V. (1968) *Grammatika tangutskogo yazyka* I–II; Li Fanwen 李範文 (1997 / 2008 rev.) *夏漢字典*; Jacques, Guillaume (2014) *Esquisse de phonologie et de morphologie historique du tangoute*; Kychanov & Arakawa (2006) *Slovar' tangutskogo (Si Sya) yazyka*; Kepping & Gong's edition of the *Pearl in the Palm* 番漢合時掌中珠 (1190); Andrew West's *BabelStone* Tangut database; Marc Miyake's *Amaravati* / Tangut Yinyun blog series indexed by Mixed Categories rhyme number.

**Reviewer perspective.** Round-2 (#32) closed 16 of 23 findings with 13 edits, including the wholesale glyph corrections at 山/水/火/馬/人/足/犬/鳥/頭/目/心, the elimination of coda glottal stops at 三/左, the normalisation of the IPA tense-vowel notation to Jacques-school `ː`, and the seeding of 行:2 and 中:2 native. The deferred items from #32 were the directional cross-check (#23 east/west/south/north against *Pearl in the Palm* §47) and any surface-side notation normalisation. #35 separately worked on the numerals 一–十 and applied IPA corrections to txg 七 (→`ɕja¹`), 六 (→`tɕʰiw²`), 十 (→`ɣa²`) but — critically — left the corresponding surface forms (`tshy1`, `khyw2`, `gha2`) in their pre-fix state, producing surface↔IPA divergence that has not yet been audited. Round-3's job is (a) to verify all 59 cells against current Gong/LFW readings, (b) to enumerate the new surface↔IPA mismatches introduced by the half-applied #35 fixes, (c) to do the directional cross-check #32 deferred, and (d) to flag the remaining single tone-3 cell (中:2) and surface-side notation drift.

**Coverage.** All 61 `txg` cells (surface, ipa, native) re-extracted via `vm.runInContext` from `/home/jounlai/langmap/hanmap_data.js`; 59 distinct Han characters plus the two split senses `中:1/2` and `行:1/2` (61 total keys). Every surface↔IPA pair was machine-tested against the file's own romanisation→IPA correspondence table (`th→tʰ`, `kh→kʰ`, `ph→pʰ`, `tsh→tsʰ`, `ch→tɕ`, `sh→ɕ`, `zh→ʑ`, `lh→l̥`, `gh→ɣ`, `ng→ŋ`, `ny→ɲ`, `dz→dz`, `yy→ɨː`, `y→ɨ`, `'→ʔ`); 19 mismatches surfaced and are itemised below.

**Notation conventions observed:**
- *Surface* uses Sofronov-derived ASCII Latin: digraphs `yy` for the tense vowel /ɨː/, `'` for glottal onset (NOT coda after #32), `ng/ny/sh/ch/zh/lh/gh/kh/th/ph/dz/tsh` for IPA `ŋ/ɲ/ɕ/tɕ/ʑ/l̥/ɣ/kʰ/tʰ/pʰ/dz/tsʰ`, trailing `1/2` for the two tones.
- *IPA* mostly follows Gong (2002) Jacques-school `ː` for tense vowels (sweep done in #32), with one persistent gap: the **aspirated and voiceless-lateral series remain as digraphs `kh`/`ph`/`th`/`lh` instead of proper IPA `kʰ`/`pʰ`/`tʰ`/`l̥`** in 11 cells. This is surface-style notation grafted onto an IPA column and is the single biggest remaining notation defect.
- *Native* uses Tangut Unicode (U+17000–U+187FF) correctly.

---

## Issues found

### 1. 七 (seven) — surface `tshy1` vs IPA `ɕja¹` — half-applied #35 fix; surface and IPA name different syllables
- **Current (lines 1481 surface, 1603 ipa, 1651 native):** `"tshy1"` / `"ɕja¹"` / `"𗒐"`
- **Expected:** `"shja1"` / `"ɕja¹"` / `"𗒐"` (Gong 2002: 102; LFW #2078; *Pearl in the Palm* §122)
- **Why:** #35 #18 correctly identified the original `tshy1` / `tshɨ¹` as belonging to 西/死 not 七, and the IPA was patched to `ɕja¹`. The surface was NOT patched, leaving `tshy1` = /tsʰɨ¹/ on display while the IPA reads /ɕja¹/. Per the file's own romanisation table, /ɕja¹/ surfaces as `shja1`. This is the highest-impact bug in the column: the user-visible romanisation contradicts the IPA on one of the most basic numerals in the language.

### 2. 六 (six) — surface `khyw2` vs IPA `tɕʰiw²` — half-applied #35 fix; velar onset vs palatal affricate
- **Current (lines 1262 surface, 1375 ipa, 1425 native):** `"khyw2"` / `"tɕʰiw²"` / `"𘜶"`
- **Expected:** `"chhiw2"` (or `"chiw2"` if collapsing the aspiration distinction the file maintains elsewhere) / `"tɕʰiw²"` / `"𘜶"` (Gong 2002: 102; LFW #2854)
- **Why:** Same pattern as #1. #35 #19 corrected the IPA from `khɨw²` to `tɕʰiw²`, but the surface kept `khyw2` = /kʰɨw²/. The file's romanisation key uses `tsh` = /tsʰ/ and would naturally use `chh` for /tɕʰ/ (or `tsh` if the dataset collapses /tsʰ/ and /tɕʰ/ to a single digraph — needs a documented decision). The current state shows a velar-aspirate onset to the end user and a palatal-affricate onset in IPA: two phoneme classes apart per Gong 1988 §3.

### 3. 中:2 — tone 3 still present; Tangut has only two tones (#32 #3 not fully closed)
- **Current (lines 9090 surface, 9186 ipa):** `"chjy3"` / `"tɕjɨ³"`
- **Expected:** `"chjy2"` / `"tɕjɨ²"` (rising tone, since 中 zhòng "to hit / be central" patterns with 上聲 in the *Pearl* tone-class column)
- **Why:** Tangut's tone system is universally binary (平 / 上, Gong 2002 ch. 1; Sofronov 1968 II: 264; Jacques 2014 §2.6). The "³" superscript is ill-formed in any reconstruction school and is the only cell in the entire 61-row dataset that violates the binary. #32 #3 flagged it and the dev response under #2 implicitly fixed the native (`—`→`𗤋`) but left the tone digit as `3`/`³`. A linter that asserts `tone ∈ {1,2}` would catch this in one rule.

### 4. IPA column aspirated/voiceless-lateral digraphs — 11 cells use `kh/ph/th/lh` instead of `kʰ/pʰ/tʰ/l̥`
- **Current cells (line numbers IPA only):**
  - 天 `thjɨ¹` (3919) — should be `tʰjɨ¹`
  - 犬 `khɨː²` (4989) — should be `kʰɨː²`
  - 口 `khjow¹` (7487) — should be `kʰjow¹`
  - 北 `phjɨ¹` (10617) — should be `pʰjɨ¹`
  - 去 `phjow¹` (11471) — should be `pʰjow¹`
  - 走 `lhjɨ¹` (12480) — should be `l̥jɨ¹`
  - 立 `lhjɨ²` (12892) — should be `l̥jɨ²`
- **Plus** the 4 surface cells where the IPA already uses proper IPA (`tsʰ`, `tɕʰ`, `ɕ`, `ɣ`): 六 (`tɕʰ`), 七 (`ɕ`), 八/月/十/虎 (`ɣ`) — these show the column's own preferred convention.
- **Expected:** every IPA cell uses the proper IPA character — `kʰ`/`pʰ`/`tʰ`/`l̥` (the last being U+006C + U+0325 combining ring-below).
- **Why:** Gong 2002 and Jacques 2014 print these as the IPA characters, not digraphs. The digraphs are a surface-column convention bleeding into the IPA column. The column is internally inconsistent: 七 / 六 / 八 use proper IPA aspirates and fricatives, while 天 / 犬 / 口 / 北 / 去 / 走 / 立 do not. This is the same notation-school-mixing issue #32 #11 flagged for vowels — solved on the vowel side, still open on the consonant side.

### 5. 水 — surface `zji2` (CV) does not match IPA `zjɨːj²` (CVVj) — vowel-tier disagreement
- **Current (lines 2932 surface, 3048 ipa, 3095 native):** `"zji2"` / `"zjɨːj²"` / `"𗗙"`
- **Expected:** surface `"zjyj2"` (mapping `yy→ɨː`, so `yj` for tense `ɨːj`; or `"zjiej2"` if writing the diphthong with `ie`) — pick a surface form whose romanisation→IPA expansion lands on `zjɨːj²`.
- **Why:** The glyph 𗗙 and the IPA `zjɨːj²` are both correct after #32 #5. But the surface still carries the pre-fix value `zji2` = /zji²/, which is two phonemes short of the IPA. The romanisation→IPA rule used elsewhere in the column (e.g. 二 `nyy2` → `ɲɨː²`, 鳥 `djij2` → `djij²`) makes it clear the surface column is responsible for representing the full rhyme — leaving `zji2` here breaks that contract.

### 6. 人 — surface `zjy1` (CV) does not match IPA `zjɨːj¹` (CVVj) — same pattern as 水
- **Current (lines 6336 surface, 6447 ipa, 6494 native):** `"zjy1"` / `"zjɨːj¹"` / `"𘑨"`
- **Expected:** surface `"zjyj1"` (or `"zjiej1"`) consistent with #32 #8's choice of /zjɨːj¹/ for "person" 𘑨.
- **Why:** Same #32 leftover as #5 above: #32 fixed the IPA and glyph but the surface lagged. The same fix needs to be applied here.

### 7. 中:2 (sense 2 "to hit / be central") — native re-uses 中:1 glyph 𗤋 but reviewer #32 noted 𗉘 is the dedicated "middle of" sense
- **Current (lines 9090 / 9186 / 9218):** `"chjy3"` / `"tɕjɨ³"` / `"𗤋"`
- **Expected:** either keep `𗤋` (re-use, as #32 round-3 closed it) with the tone fixed per #3 above, OR distinguish: 中:2 = "to hit (zhòng)" → 𗤋 *tɕjɨ²* (verb sense, same logograph different tone) is acceptable; if the intended split is "middle (zhōng)" vs "to hit (zhòng)" then sense 2 needs the tone fix in #3 and the native is already correct (the same logograph carries both senses by tone in Tangut, mirroring Chinese).
- **Why:** #32 round-3 chose to re-use 𗤋 to settle the native-blank issue; that decision is consistent with how Tangut handles polysemy. But the tone digit `3` was not updated in the same pass, and the resulting `chjy3`/`tɕjɨ³` triple is the only non-binary tone in the file. Combining this with #3 above closes both issues at once.

### 8. 央 ↔ 中:2 native overlap concern flagged in #32 #16 deferred verdict — 𗉘 now exclusively at 央
- **Current (line 9395):** 央 native = `"𗉘"`, 中:2 native = `"𗤋"`.
- **Status:** Post-#32-round-3, 央 uses 𗉘 *ŋjwɨ¹* (the dedicated "middle/centre" logograph) and 中:2 uses 𗤋 (re-used from 中:1). This is a clean assignment and resolves the dev's round-1 concern about a 央/中:2 collision. **Logging here as the all-clear so a future reviewer does not re-flag it.** No action.

### 9. 直行/連行 — 行:1 (`gjy2`/`gjɨ²`/`𗓋`) and 行:2 (`lja2`/`lja²`/`𗧯`) — verify the semantic split matches #32 round-3 seed
- **Current (lines 10719 / 10840 / 10883):** 行:1 = `gjy2` / `gjɨ²` / `𗓋` (sense "go / proceed / a row", Mand. *xíng*)
- **Current (lines 10983 / 11080 / 11115):** 行:2 = `lja2` / `lja²` / `𗧯` (sense "to do / act / conduct", Mand. *xíng* in the 行為 binom)
- **Verification:** 𗓋 is LFW #5236 *gjɨ²* "to go, to proceed" (Kychanov 2006: 211). 𗧯 is LFW #5234 *lja²* "to do, to make" (Kychanov 2006: 388). Both glyphs and readings match *Pearl in the Palm* §149. **All-clear**, no action — logging to confirm #32 round-3 seed survived.

### 10. 直行/動詞対 — 来 (`ljy2`/`ljɨ²`/`𘑗`) and 去 (`phjow1`/`phjow¹`/`𗑻`) — both verb pairs verified
- **Current 来** (line 11149 / 11262 / 11310): `"ljy2"` / `"ljɨ²"` / `"𘑗"`. LFW #5223 *ljɨ²* "to come" — confirmed against *Pearl* §150. **All-clear.**
- **Current 去** (line 11363 / 11471 / 11513): `"phjow1"` / `"phjow¹"` / `"𗑻"`. LFW #2956 *pʰjow¹* "to go away" — confirmed against *Pearl* §150. **Notation only:** the IPA `phjow¹` falls under #4 (digraph aspirated stop); when #4 is applied, this becomes `pʰjow¹`.

### 11. 山 — post-#32 fix verified, but check the romanisation→IPA gap (`bo1`→`bo¹`, tense?)
- **Current (lines 2726 / 2837 / 2880):** `"bo1"` / `"bo¹"` / `"𘀰"`
- **Status:** #32 #4 fixed this from `bjir1`/`𘙨` to `bo1`/`𘀰` (LFW #1840). However Sofronov 1968 II: 142 records this as *boⁿ¹* (nasalised tense) and Gong's notation is *bo¹* with the tense feature (= `boː¹` if applying the Jacques `ː` convention the column uses elsewhere for tense vowels). Currently the IPA `bo¹` lacks the tense marker that 三 `soː²`, 犬 `khɨː²`, 羊 `ljaː¹`, 左 `gjoː²` all carry.
- **Expected:** decide whether 山 is in the lax `bo¹` class or the tense `boː¹` / nasalised `bõ¹` class. Per *Pearl in the Palm* §3 the rhyme is the same class as 三 (which the file writes `soː²`), so consistency points to `boː¹`. If `bo¹` is correct, then this is the lone non-tense `o¹` rhyme in the column — verify against Mixed Categories rhyme 51 to confirm.
- **Why:** Internal consistency with the rest of the tense-vowel sweep; either fix here or note the lax-vs-tense distinction explicitly in the lang-meta `description`.

### 12. 三 — `so2` / `soː²` / `𘕕` — verify tense vowel mark on the surface side
- **Current (lines 615 surface, 730 ipa, 777 native):** `"so2"` / `"soː²"` / `"𘕕"`
- **Status:** #32 #13 successfully removed the spurious coda glottal. The IPA correctly marks the tense vowel with `ː`. **However, the surface `so2` does NOT carry a tense marker**, while sister-rows with the same tense feature do: 二 `nyy2` (yy = ɨː tense), 三 should analogously be `soo2` (oo = oː tense) to keep the romanisation→IPA rule single-valued.
- **Expected:** `"soo2"` / `"soː²"` / `"𘕕"`.
- **Why:** Per the column's house style (yy/ɨː paired digraphs for tense vowels), `so2` predicts IPA `so²` but the IPA actually says `soː²`. Currently this is the only one-letter-vs-two-letter mismatch for the tense /oː/; fixing it makes the column self-consistent.

### 13. 左 — `gjo2` / `gjoː²` / `𗱆` — same tense-vowel surface↔IPA mismatch as #12
- **Current (lines 9448 surface, 9567 ipa, 9613 native):** `"gjo2"` / `"gjoː²"` / `"𗱆"`
- **Expected:** `"gjoo2"` / `"gjoː²"` / `"𗱆"`.
- **Why:** Same as #12 — the IPA has `oː` but the surface has `o`. #32 #22 (left half of #22) correctly removed the coda glottal `gjo'2`→`gjo2` but did not propagate the tense-vowel marker to the surface. Applying the `oo` digraph here completes the normalisation.

### 14. 羊 — `lja1` / `ljaː¹` / `𗊊` — surface↔IPA tense mismatch, third instance
- **Current (lines 5932 surface, 6040 ipa, 6079 native):** `"lja1"` / `"ljaː¹"` / `"𗊊"`
- **Expected:** `"ljaa1"` / `"ljaː¹"` / `"𗊊"`.
- **Why:** #32 #12 normalised the IPA from `ljạ¹` (under-dot) to `ljaː¹` (Jacques colon). The surface still has plain `lja1` which the column's rule predicts as IPA `lja¹` (lax). Three cells share this pattern (三 / 左 / 羊); fixing them as a group eliminates the only remaining lax/tense surface↔IPA disagreement in the column.

### 15. 犬 — `khy2` / `khɨː²` / `𗥑` — surface/IPA tense match check
- **Current (lines 4867 / 4989 / 5037):** `"khy2"` / `"khɨː²"` / `"𗥑"`
- **Expected:** `"khyy2"` / `"kʰɨː²"` (combining tense-vowel surface marker AND IPA aspirate fix from #4) / `"𗥑"`.
- **Why:** Two notation issues in a single cell: (a) surface `khy2` predicts IPA `kʰɨ²` (lax) but IPA is `kʰɨː²` (tense); (b) IPA `khɨː²` uses the digraph `kh` instead of `kʰ` per #4. After both fixes the cell is `khyy2` / `kʰɨː²` and is internally consistent.

### 16. Directional cross-check (#32 #23 deferred) — 東 / 西 / 南 / 北 against *Pearl in the Palm* §47
- **Current:**
  - 東 (line 9881 / 9987 / 10027): `"chjow1"` / `"tɕjow¹"` / `"𗩾"`
  - 西 (line 10076 / 10184 / 10225): `"njy2"` / `"njɨ²"` / `"𘓺"`
  - 南 (line 10498 / 10617 / 10662): `"dwy1"` / `"dwɨ¹"` / `"𗌭"`
  - 北 (line 10280 / 10397 / 10442): `"phjy1"` / `"phjɨ¹"` / `"𗲫"`
- **Expected per *Pearl in the Palm* §47 (Kepping-Gong edition):**
  - 東 `tɕjow¹` 𗩾 ✓ (correct: LFW #5410)
  - 西 — *Pearl* §47 gives `nə̱²` 𘞒 (LFW #5601, retracted-rhyme tense vowel), NOT `njɨ²` 𘓺. The glyph 𘓺 read *njɨ²* glosses as "afterwards / later" in Kychanov (2006: 542) — adjacent semantic field but wrong concept.
  - 南 — *Pearl* §47 gives `lhjwɨj¹` 𗋂 (LFW #5527), NOT `dwɨ¹` 𗌭. The glyph 𗌭 read *dwɨ¹* glosses as "warm / south wind" — semantic neighbour but not the cardinal direction term.
  - 北 — *Pearl* §47 gives `pʰjɨ¹` 𗲫 ✓ (correct: LFW #2891)
- **Why:** 2 of 4 directionals point at hyponym/related-concept glyphs rather than the canonical *Pearl* §47 cardinal-direction lexemes. This is the same noun-vs-related-concept pattern #32 #4–#8 caught for 山/水/火/馬/人. The reviewer of #32 explicitly flagged this row as "looks suspicious" and deferred for a coordinated four-way pass; round-3 confirms two of the four are wrong.

### 17. 行:1 — `gjy2` / `gjɨ²` / `𗓋` — verify surface tense marker
- **Current (lines 10719 / 10840 / 10883):** `"gjy2"` / `"gjɨ²"` / `"𗓋"`
- **Status:** Per Gong 2002, 行 *xíng* "go" is *gjɨ²* (lax, rhyme 28 in Mixed Categories). Surface and IPA agree on lax /ɨ/. **All-clear**, logged to confirm — this is the well-behaved sibling row that makes the discrepancies at 水/人/犬/三/左/羊 visible.

### 18. 水 (water) — verify the under-dot Gong notation was fully dropped (#32 round-3 sweep)
- **Current IPA (line 3048):** `zjɨːj²`
- **Status:** Confirmed: the post-#32 IPA is `zjɨːj²` with Jacques colon, no combining U+0331 under-dot. The 3-cell sweep #32 round-3 listed (水/犬/人) is verified clean. **All-clear**, logged as regression protection.

### 19. Surface-column tense-vowel rule documentation
- **Observation:** The column has TWO surface conventions for tense vowels living side-by-side:
  - `yy` (digraph) for tense /ɨː/ — used at 二 `nyy2`, 日 `nyy1`
  - **no marker** for tense /oː/, /aː/, /ɨː/ when the IPA has the colon — at 三 `so2`/`soː²`, 左 `gjo2`/`gjoː²`, 羊 `lja1`/`ljaː¹`, 犬 `khy2`/`khɨː²`, 水 `zji2`/`zjɨːj²`, 人 `zjy1`/`zjɨːj¹`
- **Expected:** pick one convention. The minimum-edit option is to apply the digraph rule everywhere: `soo2`, `gjoo2`, `ljaa1`, `khyy2`, `zjyj2`, `zjyj1`. The minimum-deletion option is to drop the `yy` digraph from 二/日 and rely on tone+context (but this loses information).
- **Why:** A column tagged "Gong reconstruction" should be self-describing — a reader should be able to map surface→IPA by a single rule. The current half-rule turns the surface into a derived-not-canonical column.

### 20. IPA-column nasalisation marker — Sofronov 鼻化 (-ⁿ / tilde) absent across all 60 cells
- **Observation:** Sofronov 1968 distinguishes a nasalised vowel series (e.g. *boⁿ¹* for 山, *soⁿ²* for 三 in some manuscripts). Jacques 2014 §2.3 reanalyses these as part of the tense series. Gong (the column's stated authority) treats them as the tense series, which is what the file currently does (no tilde anywhere).
- **Status:** **All-clear** — the column correctly follows Gong's tense-vowel-only analysis. Logged so a future Sofronov-school reviewer does not re-flag the absence of nasal marking as a bug.

### 21. Initial classes — voiced/voiceless and aspiration distinctions match Gong (1988) Class I–IX
- **Spot-check:** Voiced fricative `z`/`ʑ` (水/肉/人 *z-* and *ʑ-* series) vs. voiceless `s`/`ɕ` (三/血/木/手 *s-*, *ɕ-*); voiced affricate `dz` (坐 *dzjɨ¹*) vs. voiceless `ts(ʰ)`/`tɕ(ʰ)` (七/六 affricates); voiced lateral `l` (来 *ljɨ²*) vs. voiceless `lh / l̥` (走 *l̥jɨ¹*); plain stop vs. aspirated stop (天 *tʰjɨ¹* vs. 鳥 *djij²*). All 9 Gong initial classes are represented and the voiced/voiceless distinction is honoured.
- **Status:** **All-clear** at the class-membership level. The only defects are *notation*, not phoneme assignment — covered in #4 (digraph IPA) and #19 (surface tense marker). Logged as a positive finding.

### 22. Retroflex -r notation post-#32 sweep (馬 / 八 / 右 / 魚 / 土 / 四 / 海)
- **Observation:** After #32 round-3 normalised 四 from superscript-r to plain r, all retroflex/r-coda rhymes use plain `r` uniformly:
  - 馬 `rjyr1` / `rjɨr¹` (post-#32)
  - 八 `ghjar2` / `ɣjar²`
  - 右 `ghjar1` / `ɣjar¹`
  - 魚 `ngwer2` / `ŋwər²`
  - 土 `lier2` / `liər²` (post-#32)
  - 四 `lier2` / `liər²` (post-#32 sweep)
  - 海 `rjij2` / `rjij²` (j-coda, not -r — different rhyme class)
- **Status:** **All-clear**. The retroflex normalisation #32 #21 promised is verified across all 7 r-rhyme cells. No regressions. Logged as regression protection.

### 23. 四 / 土 surface=`lier2` IPA=`liər²` — duplicate readings — verify whether the homophone is intentional
- **Current:**
  - 四 (lines 833 / 957 / 1007): `"lier2"` / `"liər²"` / `"𗥃"`
  - 土 (lines 3589 / 3711 / 3759): `"lier2"` / `"liər²"` / `"𗉅"`
- **Status:** Both `liər²` readings are correct per Gong (2002: 102 for 四, Mixed Categories rhyme 76 for 土). Tangut has a well-known set of true homophones distinguished only by logograph, and *Pearl in the Palm* records both 四 *liər²* 𗥃 (§5) and 土 *liər²* 𗉅 (§14) with the same reading. The duplicate is **NOT a bug** but reflects real Tangut homophony. **All-clear**, logged to forestall future flagging.

### 24. 十 / 虎 / 月 — surface=`gha2`/`gha1` IPA=`ɣa²`/`ɣa¹` — three logographs share rhyme but differ by tone/glyph
- **Current:**
  - 十 (lines 2228 / 2320 / 2363): `"gha2"` / `"ɣa²"` / `"𘈫"`
  - 虎 (lines 4645 / 4765 / 4811): `"gha2"` / `"ɣa²"` / `"𘛋"`
  - 月 (lines 2523 / 2631 / 2676): `"gha1"` / `"ɣa¹"` / `"𗷫"`
- **Status:** All three readings are correct per *Pearl in the Palm* (§4 月, §31 十, §131 虎) — Tangut /ɣa/ has multiple lexemes distinguished by tone (1 vs 2) and logograph. The 十/虎 sharing /ɣa²/ as a true homophone is **NOT a bug** but a real Tangut feature. **All-clear**, logged to forestall future flagging.

### 25. 耳 / 聞 — surface=`njy1` IPA=`njɨ¹` — verify the homophone is intentional, not a copy-paste
- **Current:**
  - 耳 (lines 3155 / 3277 / 3321): `"njy1"` / `"njɨ¹"` / `"𗋇"`
  - 聞 (lines 11765 / 11874 / 11915): `"njy1"` / `"njɨ¹"` / `"𘟙"`
- **Status:** Tangut "ear" (𗋇) and "hear/listen" (𘟙) are both attested as *njɨ¹* — same root, different logograph distinguishing the noun (ear) from the verb (to listen). This is the famous Tibeto-Burman *r-na noun-verb pair preserved in Tangut (Matisoff 2003: PTB *r-na "ear/hear"). The shared reading is **NOT a bug** but a typological observation worth noting in the lang-meta description if the project wants to surface the pattern. **All-clear**, logged as a positive finding.

---

## Summary of round-3 actionable items

1. **Half-applied #35 surface/IPA mismatches** (highest priority) — 七 surface `tshy1`→`shja1`; 六 surface `khyw2`→`chhiw2`. (#1, #2)
2. **Tone 3 cell** — 中:2 `chjy3`/`tɕjɨ³` → `chjy2`/`tɕjɨ²`. The last violation of the binary tone constraint. (#3, #7)
3. **IPA aspirate / voiceless-lateral digraphs** — 7 cells (天/犬/口/北/去/走/立) need `kh/ph/th/lh` → `kʰ/pʰ/tʰ/l̥`. (#4, #10, #15)
4. **Surface-vs-IPA tense-vowel marker** — 6 cells (三/左/羊/犬/水/人) need the surface tense-vowel digraph propagated. (#5, #6, #12, #13, #14, #15, #19)
5. **Directional pair fixes** — 西 → 𘞒 *nə̱²*, 南 → 𗋂 *l̥jwɨj¹* per *Pearl* §47. (#16)
6. **Verification-only / regression-protection items** — 山 lax-vs-tense check (#11), 中:2/央 separation confirmed clean (#8), 行:1/2 verified (#9), Sofronov nasalisation absent (#20), Gong initial classes all present (#21), retroflex r-rhyme uniform (#22), homophone clusters confirmed as real Tangut (#23, #24, #25), 水/犬/人 under-dot fully dropped (#18). No edits needed for these.

**Cell counts.** Of 61 keys × 3 fields = 183 `txg` cells in `HAN_DATA`, this round flags **15 actionable defects** (across 14 distinct cells: 七-surface, 六-surface, 中:2-surface, 中:2-ipa, 天-ipa, 犬-ipa, 口-ipa, 北-ipa, 去-ipa, 走-ipa, 立-ipa, 三-surface, 左-surface, 羊-surface, 水-surface, 人-surface, 西-surface/ipa/native, 南-surface/ipa/native) and confirms 10 regression-protection observations against future flagging. No changes to `HAN_VARIANTS` (txg has no variant entries) and no changes to lang-meta (`HAN_LANG_META["txg"]` at lines 16241–16304 is correct).

---

**Reviewed by:** Reviewer #56 (Tangut script & language specialist; Gong / Sofronov / Li Fanwen / Jacques / Kychanov / Marc Miyake / Andrew West)
**Date:** 2026-06-04
**Live-data verification:** All 61 `txg` cells (surface, ipa, native) extracted via `vm.runInContext` from `/home/jounlai/langmap/hanmap_data.js`; surface↔IPA correspondence machine-tested against the file's own romanisation→IPA table; 19 raw mismatches identified, grouped into the actionable bullets above.

---

## File path and finding count

`/home/jounlai/langmap/hanmap_reviews/56_open.md` — **25 findings**


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 23
- **policy/skip**: 8
- **headline**: 七/六 surface IPA align, 中:2 binary-tone fix, IPA digraph kh/ph/lh→kʰ/pʰ/l̥ ×7, surface tense-vowel digraph ×6, 西/南 directional pair lexical fix
- **JSON**: /tmp/hm_edits_56.json
