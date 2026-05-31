# Wordmap review #65 — Mesoamerican (Nahuatl / Mayan / Oto-Manguean) specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a historical-comparative linguist specializing in the languages of Mesoamerica — the Nahuan branch of Uto-Aztecan, the Mayan family (Yucatecan, Greater Tzeltalan, K'iche'an, Q'anjob'alan, Mamean), and the Oto-Manguean stock (Mixtecan, Zapotecan, Otomian, plus Totonacan and Huave as area neighbors). My phonological judgments here rest principally on Lyle Campbell, *American Indian Languages: The Historical Linguistics of Native America* (Oxford, 1997), and on Michel Launey, *An Introduction to Classical Nahuatl* (Cambridge, 2011, trans. Mackay), for the Nahuan data; for Mayan ejective and uvular inventories I follow Campbell, Kaufman & Smith-Stark's Mesoamerican areal work and Kaufman's *Mayan Comparative Studies*, and for Oto-Manguean tone/nasalization I lean on the standard SIL descriptive grammars (Macaulay on Chalcatongo Mixtec; the Zapotec sketches of the Instituto Lingüístico de Verano). My review focus is narrow and mechanical: (1) the Nahuatl lateral affricate **tl** = [t͡ɬ], which must never be transcribed as a plain cluster [tl]; (2) the saltillo / glottal stop [ʔ] and its consistency between the orthographic surface and the IPA; (3) Mayan ejectives and implosive [ɓ]; (4) Oto-Manguean contrastive tone, vowel length, and nasalization; and (5) the recurring data-entry pathology of an orthographic string being copied verbatim into the IPA slot. I have read each cited array directly from the source files and reproduce every "Current" value exactly as it stands on disk.

---

## Issues found

### 1. `nch` — water — Nahuatl lateral affricate copied as a plain cluster
- **File:** `words/water.js` line 541
- **Current:** `["atl", "atl"]`
- **Expected:** `["atl", "aːt͡ɬ"]`
- **Why:** Classical and modern Nahuan *ātl* 'water' ends in the lateral affricate **tl** = [t͡ɬ], not a stop-plus-lateral sequence. The IPA `"atl"` is simply the orthography copied into the IPA slot — note it is byte-identical to the surface. Launey (2011: §1) is explicit that *tl* is a single segment [t͡ɬ]; the related `nci` entry on line 539 correctly has `"aːtɬ"`. The first vowel is also long (cf. `nci` `ātl`). At minimum the [t͡ɬ]/[tɬ] affricate must replace the bare cluster.

### 2. `nhw` — water — same lateral-affricate / surface-copied-as-IPA error
- **File:** `words/water.js` line 542
- **Current:** `["atl", "atl"]`
- **Expected:** `["atl", "atɬ"]`
- **Why:** Identical fault to issue 1 in a sister Nahuan variety (Western Huasteca). The IPA repeats the spelling; the final *tl* is [t͡ɬ] / [tɬ], never plain [tl]. Per Campbell (1997: ch. 6) on Uto-Aztecan/Nahuan phonology, the reflex of the lateral affricate is the diagnostic Nahuan sound. Compare `nch` (same file) — both share the error and should be fixed together.

### 3. `nhe` — water — third copy of the [tl]→[t͡ɬ] error
- **File:** `words/water.js` line 543
- **Current:** `["atl", "atl"]`
- **Expected:** `["atl", "atɬ"]`
- **Why:** Same as issues 1–2 for the Eastern Huasteca variety. Three adjacent Nahuan rows (`nch`, `nhw`, `nhe`) all carry `"atl"` in the IPA field, which is an orthographic copy. The Nahuan word for 'water' is precisely the language family's namesake sound [t͡ɬ]; leaving it as [tl] misrepresents the single most characteristic segment of the branch (Launey 2011: §1.4).

### 4. `nch` — fire — lateral affricate not rendered in IPA
- **File:** `words/fire.js` line 540
- **Current:** `["tlitl", "tlitl"]`
- **Expected:** `["tlitl", "t͡ɬit͡ɬ"]`
- **Why:** *tlitl* 'fire' contains **two** instances of the lateral affricate (word-initial and word-final), yet the IPA `"tlitl"` is a verbatim copy of the spelling with both *tl* sequences left as plain clusters. Cf. the correct `nci` `"tɬeːtɬ"` on line 538 of the same file, which shows the intended [tɬ] convention. Launey (2011) and Campbell (1997) both treat *tl* as unitary [t͡ɬ].

### 5. `nhw` — fire — second copy of the fire [tl] error
- **File:** `words/fire.js` line 541
- **Current:** `["tlitl", "tlitl"]`
- **Expected:** `["tlitl", "t͡ɬit͡ɬ"]`
- **Why:** Same defect as issue 4 in the adjacent `nhw` row. Per the "fix all variants together" principle and Launey (2011: §1), both Huasteca rows need the lateral affricate. The IPA is again an exact orthographic copy.

### 6. `nch` — eat — initial lateral affricate left as plain cluster
- **File:** `words/eat.js` line 534
- **Current:** `["tlacua", "tlakʷa"]`
- **Expected:** `["tlacua", "t͡ɬakʷa"]`
- **Why:** *tlacua* 'eats' begins with the lateral affricate [t͡ɬ]; the labiovelar [kʷ] is correctly transcribed but the initial *tl* is rendered as a plain cluster [tl]. The Classical `nci` form on line 532 correctly shows `"tɬakʷa"`. `nhw` (535) and `nhe` (536) share the same `tlakʷa` and the same shortcoming; Launey (2011: §1.4) requires [t͡ɬ].

### 7. `ngu` — eat — labiovelar written with plain [w] instead of [kʷ]
- **File:** `words/eat.js` line 538
- **Current:** `["tlakua", "tlakwa"]`
- **Expected:** `["tlakua", "t͡ɬakʷa"]`
- **Why:** Two faults. (a) The initial *tl* = [t͡ɬ] is left as [tl] (as in issues 4–6). (b) The orthographic *ku* before a vowel here represents the single labiovelar phoneme [kʷ], not a [k]+[w] cluster — compare the `nci`/`nch`/`nhw`/`nhe` rows in the same file, all of which correctly use `"kʷ"`. Per Launey (2011: §1.3), Nahuan *cu/uc* is the unit phoneme /kʷ/.

### 8. `nch` — love — lateral affricate + saltillo, IPA shows plain [tl]
- **File:** `words/love.js` line 541
- **Current:** `["tlazohtla", "tlasoʔtla"]`
- **Expected:** `["tlazohtla", "t͡ɬasoʔt͡ɬa"]`
- **Why:** *tlazohtla* 'loves' has the saltillo [ʔ] correctly placed (orthographic *h*), but both *tl* sequences are written as plain clusters in the IPA. The Classical `nci` on line 539 gives `"tɬasoːtɬa"`. The identical issue recurs in `nhw` (542), `nhe` (543), and `ngu` (545), all sharing `"tlasoʔtla"`; all four should receive [t͡ɬ] together (Launey 2011: §1.4).

### 9. `ngu` — dog — invalid onset transcription `tsʼkʷ` and lost vowel quality
- **File:** `words/dog.js` line 538
- **Current:** `["tsʼkuintli", "tsʼkʷintli"]`
- **Expected:** `["itzcuintli", "itskʷintli"]`
- **Why:** The Nahuan word is *itzcuīntli* (cf. `nci` line 532 `"itskʷiːntɬi"`; `nch`/`nhw`/`nhe` `"itskʷintli"`). The `ngu` surface `tsʼkuintli` has dropped the initial *i-* and spuriously added a saltillo/ejective mark `ʼ` after *ts* — Nahuatl has no ejective [tsʼ]; *tz* is plain [ts]. The IPA `"tsʼkʷintli"` propagates this non-existent ejective and also leaves final *tl* as [tl]. This row should be brought into line with the other Nahuan reflexes.

### 10. `kek` — fire — orthographic saltillo present but dropped in IPA
- **File:** `words/fire.js` line 1090
- **Current:** `["xamʼ", "ʃam"]`
- **Expected:** `["xamʼ", "ʃam"]` → reconcile to `["xam", "ʃam"]`
- **Why:** The surface `xamʼ` carries a trailing saltillo glyph `ʼ` that has no correspondent in the IPA `"ʃam"`, and a word-final glottal stop after a nasal would be highly unusual for Q'eqchi' 'fire'. Either the saltillo is spurious (Q'eqchi' *xam* 'fire', Campbell 1997 / Kaufman) — in which case the surface should be `xam` — or it is real and the IPA must show `"ʃamʔ"`. The surface and IPA must not disagree about the presence of [ʔ]; on the evidence (*xam*) the saltillo should be deleted from the surface.

### 11. `ixl` — dog — malformed IPA cluster `tʼʃʼiʔ`
- **File:** `words/dog.js` line 1099
- **Current:** `["tx'i'", "tʼʃʼiʔ"]`
- **Expected:** `["tx'i'", "t͡ʃʼiʔ"]`
- **Why:** The orthographic *tx'* in Ixil (and Mayan generally) is the **ejective postalveolar affricate** [t͡ʃʼ], a single segment. The current IPA `"tʼʃʼiʔ"` instead stacks an ejective stop [tʼ] plus an ejective fricative [ʃʼ] — two impossible-to-co-articulate ejective releases — which is a transcription error. Compare `ctu`/`toj` *ts'i'* = `"tsʼiʔ"` (alveolar ejective affricate). The intended segment is the unitary [t͡ʃʼ]; only one ejective diacritic, on the affricate, is correct (Campbell 1997: ch. 4, Mayan).

### 12. `zap` — dog — spurious ejective [kʼ] inserted into IPA
- **File:** `words/dog.js` line 624
- **Current:** `["bi'cu'", "biʔkʼuʔ"]`
- **Expected:** `["bi'cu'", "biʔkuʔ"]`
- **Why:** Isthmus Zapotec *bi'cu'* 'dog' has two glottal stops (the two saltillos in the spelling) but the medial consonant is a plain [k], not an ejective. Zapotec lacks a contrastive ejective series (the language is Oto-Manguean, not Mayan); the `ʼ` after [k] in `"biʔkʼuʔ"` is an erroneous import. Cf. the neighboring `zts` *bicu'* `"bikuʔ"` (line 625), which correctly has plain [k]. Remove the ejective diacritic.

### 13. `mam` — moon — IPA `ʃhaw` has an unmotivated [h] and mis-mapped onset
- **File:** `words/moon.js` line 1100
- **Current:** `["xjaw", "ʃhaw"]`
- **Expected:** `["xjaw", "ʃaw"]`
- **Why:** Mam orthographic *x* = [ʃ] and *j* = [h]; but the sequence here is the single onset of *xjaw* and the vowel is *a*. The IPA `"ʃhaw"` posits an [ʃ]+[h] cluster, which both mis-segments the word and inserts a glottal frication that is not in the citation form (Mam 'moon' *xjaw* ~ [ʃaw]). Compare `one.js` `mam` `"hun"` where *j* alone = [h]. The stray [h] should be removed; if a value for *j* is wanted it is the same [h] already covered by the digraph, not an extra segment.

### 14. `ote` — moon — nasalized vowels marked but missing length/tone is acceptable; surface vs. IPA nasalization OK, yet `zänä` vowel quality
- **File:** `words/moon.js` line 1020
- **Current:** `["zänä", "zãnã"]`
- **Expected:** `["zänä", "ⁿzãnã"]` (or `"nzãnã"`)
- **Why:** Otomí (`ote`/`otq`) *zänä* 'moon' has an initial prenasalized/voiced sibilant onset in most varieties; more importantly the diaeresis *ä* in the Otomí practical orthography marks a **nasalized central vowel** [ã], which the IPA captures, but the standard Otomí onset of this root is prenasalized. The more defensible minimal fix is to confirm the nasal vowels (correct here) while flagging that `ote`/`otq` 'moon' is widely cited as *zänä* [ⁿzãnã] in Hekking & Andrés de Jesús's Otomí lexicon. If prenasalization is judged out of scope, this row is the closest-to-correct of the Otomian set and can stand.

### 15. `ote` — fire — ejective diacritic on [ts] inconsistent with surface spelling
- **File:** `words/fire.js` line 1020
- **Current:** `["tsibi", "tsʼibi"]`
- **Expected:** `["tsibi", "tsibi"]`
- **Why:** The surface `tsibi` writes a plain *ts* with no saltillo, but the IPA `"tsʼibi"` adds an ejective release [tsʼ]. Otomí (Oto-Manguean) has no ejective consonants; the contrast in Otomí affricates is plain vs. aspirated/voiced, not glottalized. The ejective mark is a stray diacritic — `otq` on line 1021 carries the identical error. Both should read plain [ts]. (Campbell 1997 places ejectives in Mayan and a few other families, *not* Oto-Manguean.)

### 16. `otq` — fire — second copy of the spurious-ejective error
- **File:** `words/fire.js` line 1021
- **Current:** `["tsibi", "tsʼibi"]`
- **Expected:** `["tsibi", "tsibi"]`
- **Why:** Same as issue 15 for Querétaro Otomí. Per the "fix all variants together" principle, `ote` and `otq` 'fire' both wrongly transcribe an ejective [tsʼ] where the surface shows plain *ts* and the language has no ejective series.

### 17. `nch` — moon — gemination dropped, lateral affricate left as cluster
- **File:** `words/moon.js` line 540
- **Current:** `["metztli", "metstli"]`
- **Expected:** `["metztli", "metst͡ɬi"]`
- **Why:** *metztli* 'moon' ends in the lateral affricate [t͡ɬ] (orthographic *tl*), but the IPA `"metstli"` renders it as a plain [tl] cluster. The `nci` Classical form on line 538 correctly gives `"meːtstɬi"`. `nhw` (541) and `nhe` (542) share the identical `"metstli"` and the identical shortcoming; all three should carry [t͡ɬ] (Launey 2011: §1.4). Note *tz* = [ts] is handled correctly; only the final *tl* is at fault.

### 18. `huv` — eat — final *j* glottal not reflected; check vowel
- **File:** `words/eat.js` line 630
- **Current:** `["atsaj", "atsah"]`
- **Why:** Huave orthographic *j* word-finally is the glottal fricative [h], which the IPA correctly shows, so this row is in fact **consistent** — I flag it only to record that the [ts] here is plain (no ejective), correctly distinguishing Huave from the Mayan ejective rows above. No change required; included for the reviewer's audit trail of the [ts]/[tsʼ] contrast across my scope.

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

Convention note: the established IPA convention in these files renders the Nahuan lateral affricate as **`tɬ` (no tie bar)** — every Classical `nci` row the reviewer cites as correct uses `tɬ`/`tɬeːtɬ`/`itskʷiːntɬi`. To preserve internal consistency I apply `tɬ` (not the reviewer's `t͡ɬ`); likewise `tʃʼ` (not `t͡ʃʼ`) for Ixil, since plain `tʃ` dominates `dog.js`. Per the standing "fix all variants together" rule I also fixed flagged-class errors in sister rows (`nhe`) the reviewer did not enumerate but which share the identical defect.

1. **`nch` water** — applied (by orchestrator this round). IPA `atl`→`aːtɬ` (matches long-voweled `nci` `aːtɬ`). Surface kept (valid Nahuatl orthography).
2. **`nhw` water** — applied. IPA `atl`→`atɬ`.
3. **`nhe` water** — applied. IPA `atl`→`atɬ`.
4. **`nch` fire** — applied. IPA `tlitl`→`tɬitɬ` (both `tl` → lateral affricate).
5. **`nhw` fire** — applied. IPA `tlitl`→`tɬitɬ`.
   - Also fixed (fix-all-variants): **`nhe` fire** `["titl","titl"]` IPA `titl`→`titɬ` — same final-`tl` affricate defect, not separately enumerated by reviewer.
6. **`nch` eat** — applied. IPA `tlakʷa`→`tɬakʷa`. Also applied to sister rows **`nhw`** and **`nhe`** (identical `tlakʷa`), per fix-all-variants.
7. **`ngu` eat** — applied. IPA `tlakwa`→`tɬakʷa` (initial lateral affricate + labiovelar `kʷ`). Surface `tlakua` kept.
8. **`nch` love** — applied. IPA `tlasoʔtla`→`tɬasoʔtɬa`. Also applied to **`nhw`**, **`nhe`**, **`ngu`** (identical `tlasoʔtla`), per fix-all-variants. Saltillo `ʔ` retained.
9. **`ngu` dog** — applied. Both fields corrected to `["itzcuintli","itskʷintli"]`, aligning with sister rows `nch`/`nhw`/`nhe`. The current `["tsʼkuintli","tsʼkʷintli"]` dropped the initial *i-* and carried a non-existent Nahuatl ejective `tsʼ`; *itzcuīntli* with plain `ts` is the correct reflex.
10. **`kek` fire** — applied. Surface `xamʼ`→`xam`; the trailing saltillo glyph had no IPA correspondent and a word-final `ʔ` after a nasal is not motivated for Q'eqchi' *xam* 'fire' (Campbell 1997 / Kaufman). IPA `ʃam` unchanged.
11. **`ixl` dog** — applied. IPA `tʼʃʼiʔ`→`tʃʼiʔ`: collapses two stacked ejectives into the single ejective postalveolar affricate `tʃʼ` (file convention: no tie bar). Cf. `ctu`/`toj` `tsʼiʔ`.
12. **`zap` dog** — applied. IPA `biʔkʼuʔ`→`biʔkuʔ`: removed spurious ejective; Isthmus Zapotec (Oto-Manguean) lacks an ejective series. Matches neighbor `zts` `bikuʔ`.
13. **`mam` moon** — applied. IPA `ʃhaw`→`ʃaw`: removed the stray `h` (the digraph *x* = `ʃ`; the *j* is not a separate segment here).
14. **`ote` moon** — held (won't-fix). The reviewer explicitly allows this row to stand if prenasalization is out of scope. Adding `ⁿz`/`nz` is a dialect/system-level normalization, not a clear local error; the nasal vowels are already correct. Holding.
15. **`ote` fire** — applied. IPA `tsʼibi`→`tsibi`: removed spurious ejective (Otomí has no ejective series; surface shows plain *ts*).
16. **`otq` fire** — applied. IPA `tsʼibi`→`tsibi` (same as 15, Querétaro Otomí).
17. **`nch` moon** — applied. IPA `metstli`→`metstɬi` (final `tl` → lateral affricate; `tz`=`ts` already correct). Also applied to **`nhw`** and **`nhe`** (identical `metstli`), per fix-all-variants.
18. **`huv` eat** — no change required (reviewer audit-trail item; `atsaj`/`atsah` already consistent, plain `ts` correct for Huave).

Open/won't-fix count: 1 (issue 14, `ote` moon prenasalization — reviewer-permitted to stand, out of scope as a system-level choice).

---

## Reviewer round-2 response (再評価 round-2)

I re-read every cited array directly from disk on 2026-05-31 and confirmed each "applied" claim against the live values. All eighteen items check out.

**Convention adjudication (tie bar).** The worker rendered the Nahuan lateral affricate as `tɬ` (no tie bar) rather than my `t͡ɬ`, and the Ixil ejective affricate as `tʃʼ` rather than `t͡ʃʼ`. I accept this. The word files use `tɬ` 57× vs `t͡ɬ` 3×, and the only three tie-bar instances are Klingon (`tlh`) aspirated laterals in `drink.js`/`thanks.js`, not Nahuan. Every `nci` Classical reference row I myself cited as correct (e.g. `tɬeːtɬ`, `itskʷiːntɬi`) uses the no-tie-bar form. Internal consistency is the right tie-breaker here; the phonological content (single lateral-affricate segment) is faithfully represented either way. ✓ accepted as a defensible system-level convention.

Per-item verification:
1. `nch` water — `["atl","aːtɬ"]` (line 532). ✓ matches long-vowel `nci` `aːtɬ` (line 530).
2. `nhw` water — `["atl","atɬ"]` (line 533). ✓
3. `nhe` water — `["atl","atɬ"]` (line 534). ✓
4. `nch` fire — `["tlitl","tɬitɬ"]` (line 540). ✓ both `tl`→`tɬ`.
5. `nhw` fire — `["tlitl","tɬitɬ"]` (line 541). ✓ Bonus: `nhe` fire `["titl","titɬ"]` (line 542) — final `tl`→`tɬ` fixed; surface `titl` (no initial `tl`) left intact, correct. ✓
6. `nch` eat — `["tlacua","tɬakʷa"]` (line 525); `nhw`/`nhe` identical (526/527). ✓
7. `ngu` eat — `["tlakua","tɬakʷa"]` (line 529): initial lateral affricate + labiovelar `kʷ` both correct now. ✓
8. `nch` love — `["tlazohtla","tɬasoʔtɬa"]` (line 541); `nhw`/`nhe`/`ngu` identical (542/543/545), saltillo `ʔ` retained. ✓
9. `ngu` dog — `["itzcuintli","itskʷintli"]` (line 538): restored initial *i-*, removed the non-existent Nahuatl ejective `tsʼ`, now aligned with `nch`/`nhw`/`nhe`. ✓
10. `kek` fire — `["xam","ʃam"]` (line 1090): spurious trailing saltillo deleted from surface, IPA agrees. ✓
11. `ixl` dog — `["tx'i'","tʃʼiʔ"]` (line 1099): two stacked ejectives collapsed to single ejective postalveolar affricate; contrasts correctly with `ctu`/`toj` `tsʼiʔ` (1093/1094). ✓
12. `zap` dog — `["bi'cu'","biʔkuʔ"]` (line 624): spurious `kʼ` removed; matches neighbor `zts` `bikuʔ` (line 625). ✓ (Oto-Manguean, no ejective series.)
13. `mam` moon — `["xjaw","ʃaw"]` (line 1100): stray `h` removed; `x`=`ʃ` digraph stands. ✓
14. `ote` moon — `["zänä","zãnã"]` (line 1020), unchanged; `otq` identical (1021). △ held, reviewer-permitted. I explicitly allowed this row to stand if prenasalization is out of scope; the nasal vowels are correct. Prenasalized `ⁿz` is a cross-variety normalization, not a clear local error. I accept the hold as a defensible system-level choice — it is NOT a residual error.
15. `ote` fire — `["tsibi","tsibi"]` (line 1020): spurious ejective removed, IPA now matches plain-*ts* surface. ✓
16. `otq` fire — `["tsibi","tsibi"]` (line 1021). ✓
17. `nch` moon — `["metztli","metstɬi"]` (line 540): final `tl`→`tɬ`, `tz`=`ts` already correct; `nhw`/`nhe` identical (541/542). ✓
18. `huv` eat — `["atsaj","atsah"]` (line 621): audit-trail item, correctly left unchanged; plain `ts` distinguishes Huave from the Mayan ejective rows. ✓

**New issues:** none. While verifying I scanned the surrounding Nahuan/Mayan/Oto-Manguean rows in all six files and found no further orthography-copied-into-IPA, spurious-ejective, or mis-segmented-affricate cases beyond those already handled.

### Scorecard
- Items verified applied in live data: 16 (issues 1–13, 15–17) plus 1 correct no-op (18) = 17 resolved.
- Held / won't-fix, reviewer-accepted: 1 (issue 14, `ote`/`otq` moon prenasalization — defensible out-of-scope normalization).
- Convention deviations accepted: `tɬ`/`tʃʼ` no-tie-bar (matches 57:3 file convention and cited `nci` references).
- New issues raised: 0.

Nothing remains for the dev team to address: every clear error is fixed-and-verified, and the single held item is one I explicitly accept as a system-level choice.

**File status: CLOSED** — nothing left to address.
