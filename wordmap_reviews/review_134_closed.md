# Wordmap review #134 — Mesoamerican round-2 auditor (Nahuatl, Maya, Oto-Manguean, Mixe-Zoque)

## Reviewer self-introduction (ペルソナ自己紹介)

I am a historical-comparative linguist of Mesoamerica returning for a wave-12 round-2 pass, narrowly scoped to the Nahuan branch of Uto-Aztecan (`nci`, `nhx`, `nch`, `nhw`, `nhe`, `ngu`, `ppl`), the Mayan family (Yucatecan `yua`/`myn`, Kʼicheʼan `quc`/`cak`/`usp`/`poh`, Mamean `mam`/`agu`/`ixl`, Qʼanjobʼalan `kjb`, Greater Tzeltalan `tzo`/`tzh`, Cholan `ctu`/`chf`, Kekchi `kek`), and the Oto-Manguean stock (Mixtecan `mix`/`xtm`/`mxv`, Zapotecan `zap`/`zts`, Otomian `ote`/`otq`/`maz`). My checklist is mechanical and well-trodden in this project: (1) the Nahuatl lateral affricate **tl** = [t͡ɬ], which must never appear as a plain cluster [tl] in a tɬ-bearing variety; (2) the saltillo / glottal stop [ʔ] and Nahuatl's lack of voiced stops; (3) Mayan ejectives (kʼ qʼ tsʼ chʼ), the implosive [ɓ] orthographic ⟨bʼ⟩, and the Yucatec ⟨j⟩ = /h/ (never /x/~/χ/) rule; (4) Mamean retroflex ⟨tx⟩; (5) Oto-Manguean tone/length internal consistency between surface and IPA. I verified each Current value verbatim against the live files at the cited line on 2026-06-11, and I grepped every candidate against `wordmap_reviews/*_closed.md` first. I deliberately do **not** re-open settled items: the `love.js` Nahuatl tɬ fix of closed **#65**, the `thanks.js` `nci` free-floating /ʰ/ fix of **#19**, the `zap` dog spurious-ejective removal of **#65**, the ctu/chf/kjb/poh saltillo-apostrophe normalization of **#75**, and the established Yucatec-⟨j⟩=/h/ rule of **#84** are all left intact (and indeed used as evidence below). My desk references are Launey (2011) *An Introduction to Classical Nahuatl*; England (1983) *A Grammar of Mam, a Mayan Language*; Bricker (1998) *A Dictionary of the Maya Language as Spoken in Hocabá*; Campbell, Kaufman & Smith-Stark on the Mesoamerican linguistic area; and the project docs `docs/words/CONTRIBUTING.md` (IPA, not native romanization) and `docs/words/LANG_CODES.md`.

---

## Issues found

### 1. `nch` — thanks — Nahuatl `tla-` written as plain cluster, not the lateral affricate
- **File:** words/thanks.js line 532
- **Current:** `["tlazohcamati", "tlasoʔkamati"]`
- **Expected:** `["tlazohcamati", "tɬasoʔkamati"]`
- **Why:** Word-initial *tla-* is the same indefinite-object prefix /tɬa-/ that closed review **#65** already corrected for this exact variety in `love.js` (`nch` *tlazohtla* → `tɬasoʔtɬa`, line 539) and that `nch` already carries in `eat.js` line 525 (*tlacua* → `tɬakʷa`), `fire.js` line 538 (`tɬitɬ`) and `moon.js` line 538 (`metstɬi`). Central Huasteca Nahuatl (`nch`) retains the lateral affricate, so the IPA must read `tɬasoʔkamati` (Launey 2011 §1.4). Only the initial `tl` is affected; the saltillo `ʔ` and the rest stand.

---

### 2. `nhe` — thanks — same `tla-` lateral-affricate omission
- **File:** words/thanks.js line 534
- **Current:** `["tlazohcamati", "tlasoʔkamati"]`
- **Expected:** `["tlazohcamati", "tɬasoʔkamati"]`
- **Why:** `nhe` (Eastern Huasteca Nahuatl) is a tɬ-bearing variety: it has `tɬasoʔtɬa` in `love.js` line 541 (fixed under #65), `tɬakʷa` in `eat.js` line 527, and `tɬitɬ` in `fire.js` line 540. The `thanks.js` cell is the lone survivor with a plain initial `tl`. Correct to `tɬasoʔkamati` for consistency with the same variety's own rows (Launey 2011 §1.4).

---

### 3. `nhw` — thanks — same `tla-` lateral-affricate omission
- **File:** words/thanks.js line 533
- **Current:** `["tlazohcamati", "tlasoʔkamati"]`
- **Expected:** `["tlazohcamati", "tɬasoʔkamati"]`
- **Why:** `nhw` (Western Huasteca Nahuatl) carries `tɬasoʔtɬa` (`love.js` 540, #65), `tɬakʷa` (`eat.js` 526), `tɬitɬ` (`fire.js` 539). The `thanks.js` row's initial `tl` is inconsistent with all of them. → `tɬasoʔkamati`.

---

### 4. `ngu` — thanks — same `tla-` lateral-affricate omission
- **File:** words/thanks.js line 536
- **Current:** `["tlazohcamati", "tlasoʔkamati"]`
- **Expected:** `["tlazohcamati", "tɬasoʔkamati"]`
- **Why:** Central Guerrero Nahuatl (`ngu`) has the affricate in `love.js` line 543 (`tɬasoʔtɬa`, #65) and `eat.js` line 529 (`tɬakʷa`). The `thanks.js` initial `tl` should be `tɬ` to match. (Note: `nhx`, Isthmus-Mecayapan, genuinely lacks /tɬ/ — *takʷa*, *aʔtli* — so `nhx` line 531 `tlasoʔkamati` is correctly NOT flagged.)

---

### 5. `ngu` — fire / moon / heart / water / drink — lateral affricate lost in IPA across five concepts
- **File:** words/fire.js line 542; words/moon.js line 542; words/heart.js line 536; words/water.js line 536; words/drink.js line 536
- **Current:** fire `["tletl", "tletl"]`; moon `["metztli", "metstli"]`; heart `["yolotl", "jolotl"]`; water `["atl", "atl"]`; drink `["atli", "atli"]`
- **Expected:** fire `["tletl", "tɬetɬ"]`; moon `["metztli", "metstɬi"]`; heart `["yolotl", "jolotɬ"]`; water `["atl", "atɬ"]`; drink `["atli", "atɬi"]`
- **Why:** `ngu` is the same Guerrero variety that already uses [t͡ɬ] in `eat.js` line 529 (`tɬakʷa`) and `love.js` line 543 (`tɬasoʔtɬa`); Guerrero Nahuatl unquestionably retains the lateral affricate (Launey 2011 §1.4). These five cells copy the orthographic ⟨tl⟩ into the IPA verbatim — a romanization leak (CONTRIBUTING.md, "IPA notation, not the language's native romanization"). Sibling varieties confirm the targets: `nch`/`nhe` give `metstɬi` (moon 538/540), `nci` gives `meːtstɬi`. A fix-all-variants pass is appropriate here.

---

### 6. `nch` — heart — final `-tl` not rendered as the lateral affricate
- **File:** words/heart.js line 532
- **Current:** `["yollotl", "jolːotl"]`
- **Expected:** `["yollotl", "jolːotɬ"]`
- **Why:** `nch` is otherwise a fully tɬ-marking variety (`tɬitɬ` fire 538, `metstɬi` moon 538, `tɬakʷa` eat 525, `aːtɬ`→see #7, `tɬasoʔtɬa` love 539). This single cell leaves the word-final ⟨tl⟩ as a plain cluster `jolːotl`; it should be `jolːotɬ`, matching `nci`'s `joːlːoːtɬ` (line 530) and the variety's own treatment of ⟨tl⟩ elsewhere (Launey 2011 §1.4).

---

### 7. `nch` — water — spurious vowel length copied from the Classical row
- **File:** words/water.js line 532
- **Current:** `["atl", "aːtɬ"]`
- **Expected:** `["atl", "atɬ"]`
- **Why:** The surface is plain *atl* with no macron, yet the IPA carries a long /aː/. The two immediately following sister varieties render the identical surface *atl* as short: `nhw` line 533 `["atl", "atɬ"]` and `nhe` line 534 `["atl", "atɬ"]`. Only the Classical `nci` line 530 has the long vowel, written with the macron surface *ātl* → `aːtɬ`. Modern Huasteca Nahuatl (`nch`) has lost contrastive vowel length and shows no length marking elsewhere; the `aː` here is a stray copy from the `nci` row directly above. The affricate `tɬ` is correct and retained.

---

### 8. `yua` — house — Yucatec ⟨j⟩ transcribed as velar /x/ instead of glottal /h/
- **File:** words/house.js line 622
- **Current:** `["naj", "nax"]`
- **Expected:** `["naj", "nah"]`
- **Why:** Closed review **#84** (issue 26) adjudicated the firm rule that Yucatec ⟨j⟩ = /h/, never /χ/~/x/ (Bricker 1998); Kʼicheʼ-branch /x/ belongs to the dedicated `quc`/`cak`/`mam` codes, not Yucatec. `yua`'s own rows obey this: `jaant`→`haːnt` (eat 608), `jaʼ`→`haʔ` (water 615), `uj`→`uh` (moon 621), `jun`→`hun` (one 621). This `house` cell is one of only two `yua` outliers that use /x/. → `nah`.

---

### 9. `yua` — love — Yucatec ⟨j⟩ transcribed as velar /x/ instead of glottal /h/
- **File:** words/love.js line 622
- **Current:** `["yaakuntej", "jaːkuntex"]`
- **Expected:** `["yaakuntej", "jaːkunteh"]`
- **Why:** Same defect as #8 and the same #84 rule. The word-final ⟨j⟩ of *yaakuntej* is /h/, not /x/; the initial ⟨y⟩→/j/ and the long ⟨aa⟩→/aː/ are already correct. Six `yua` cells use /h/ for ⟨j⟩ and only `house` and `love` deviate to /x/; both should be /h/ → `jaːkunteh` (Bricker 1998).

---

### 10. `agu` — dog — Awakateko ⟨txʼ⟩ given a plain alveolar value, colliding with the identical `ixl` surface
- **File:** words/dog.js line 1096
- **Current:** `["txʼiʼ", "tsʼiʔ"]`
- **Expected:** `["txʼiʼ", "tʃʼiʔ"]`
- **Why:** Awakateko (`agu`) and Ixil (`ixl`) carry the byte-identical surface `txʼiʼ` on adjacent lines (1096, 1097), but the IPA disagrees: `agu` has `tsʼiʔ` while `ixl` correctly has `tʃʼiʔ`. The Mamean digraph ⟨txʼ⟩ is the (retro)laminal post-alveolar ejective affricate, not the plain alveolar /tsʼ/ — Awakateko writes the plain alveolar ejective as ⟨tzʼ⟩, a distinct phoneme (England 1983 on the Mamean retroflex/post-alveolar series). Mapping ⟨txʼ⟩→/tsʼ/ erases that contrast and is internally incompatible with the very next row. Align with `ixl`: `tʃʼiʔ` (or, if the project later adopts the full retroflex glyph, `ʈʂʼiʔ`).

---

### 11. `ctu` — hand — orthographic implosive ⟨bʼ⟩ copied verbatim into the IPA
- **File:** words/hand.js line 1085
- **Current:** `["kʼabʼ", "kʼabʼ"]`
- **Expected:** `["kʼabʼ", "kʼaɓ"]`
- **Why:** The IPA is a byte-for-byte copy of the orthographic surface, retaining ⟨bʼ⟩, which in Cholan orthography denotes the glottalized/implosive bilabial /ɓ/, not a sequence /b/+/ʼ/. The project already renders this segment correctly for every other Mayan language with the same root: `yua` line 615 `kʼabʼ`→`kʼaɓ`, `quc` line 1080 `qʼabʼ`→`qʼaɓ`, `ixl` line 1091 `qʼabʼ`→`qʼaɓ`. (Closed **#75** normalized only the *surface* apostrophe here; it did not touch the IPA.) `ctu` correctly uses real IPA for its other glottals — e.g. `water.js` `jaʼ`→`haʔ` — so this is a leak, not a convention. → `kʼaɓ`.

---

### 12. `ctu` — hello — same orthographic implosive ⟨bʼ⟩ leak in the IPA
- **File:** words/hello.js line 1072
- **Current:** `["kabʼ", "kabʼ"]`
- **Expected:** `["kabʼ", "kaɓ"]`
- **Why:** Identical to #11 in the same language. The final ⟨bʼ⟩ is the implosive /ɓ/ and must not be copied verbatim into the IPA column. Per the dataset's own treatment of ⟨bʼ⟩→/ɓ/ in `yua`/`quc`/`ixl` (hand), the IPA should read `kaɓ`.

---

### 13. `xtm` — mother — surface macron ⟨ā⟩ contradicts the high-tone acute in its own IPA and the sibling Mixtec rows
- **File:** words/mother.js line 631
- **Current:** `["na'ān", "naʔán"]`
- **Expected:** `["na'án", "naʔán"]`
- **Why:** The IPA `naʔán` marks the final vowel with an acute (high tone), but the surface writes it with a macron ⟨ā⟩, which in Mixtec practical orthographies marks mid tone (or simply is not the high-tone diacritic) — the two columns disagree about the tone of the same vowel. The two sibling Mixtec lects give the internally consistent form: `mix` line 627 `["na'án", "naʔán"]` and `mxv` line 632 `["na'án", "naʔán"]`, both with the acute on the surface. `xtm` is the lone outlier; its surface should be `na'án` to agree with its own IPA and with `mix`/`mxv` (Macaulay, Chalcatongo Mixtec, on tone orthography).

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

All 13 items verified verbatim. Each is a clear romanization-leak or internal-inconsistency fix consistent with the variety's own sibling rows and closed-review precedents (#65 tɬ, #84 Yucatec ⟨j⟩=/h/, #75 implosive ⟨bʼ⟩=/ɓ/). All applied.

- **134-1** `nch` thanks → `tɬasoʔkamati`: applied by orchestrator this round.
- **134-2** `nhe` thanks → `tɬasoʔkamati`: applied by orchestrator this round.
- **134-3** `nhw` thanks → `tɬasoʔkamati`: applied by orchestrator this round.
- **134-4** `ngu` thanks → `tɬasoʔkamati`: applied by orchestrator this round.
- **134-5** `ngu` fire `tɬetɬ`, moon `metstɬi`, heart `jolotɬ`, water `atɬ`, drink `atɬi`: applied by orchestrator this round (5 cells).
- **134-6** `nch` heart `jolːotl`→`jolːotɬ`: applied by orchestrator this round.
- **134-7** `nch` water `aːtɬ`→`atɬ` (length is a stray copy from Classical nci; nhw/nhe show short): applied by orchestrator this round.
- **134-8** `yua` house `nax`→`nah`: applied by orchestrator this round.
- **134-9** `yua` love `jaːkuntex`→`jaːkunteh`: applied by orchestrator this round.
- **134-10** `agu` dog `tsʼiʔ`→`tʃʼiʔ` (⟨txʼ⟩, aligns with ixl sibling): applied by orchestrator this round.
- **134-11** `ctu` hand `kʼabʼ`→`kʼaɓ`: applied by orchestrator this round.
- **134-12** `ctu` hello `kabʼ`→`kaɓ`: applied by orchestrator this round.
- **134-13** `xtm` mother surface `na'ān`→`na'án` (acute matches own IPA + mix/mxv siblings): applied by orchestrator this round.

Note for reviewer (not applied, out of this review's flagged scope): heart.js `nhw` (533) and `nhe` (534) also carry plain `jolːotl`, and hand.js `toj` (1086) carries the `kʼabʼ` IPA leak — same defects as flagged cells but not raised here; recommend a follow-up item.

Remaining open: 0.

---

## Reviewer round-2 response (再評価 round-2)

I re-verified all 13 applied fixes verbatim against the live `words/*.js` files on 2026-06-11 (grep by langcode; line numbers have drifted but cells matched unambiguously).

**Per-item adjudication — all 13 ACCEPTED (✓):**

- **134-1..4** `nch`/`nhw`/`nhe`/`ngu` thanks → `tɬasoʔkamati`: all four live (thanks.js 532/533/534/536). ✓
- **134-5** `ngu`: fire `tɬetɬ` (542), moon `metstɬi` (542), heart `jolotɬ` (536), water `atɬ` (536), drink `atɬi` (536) — all five present. ✓
- **134-6** `nch` heart → `jolːotɬ` (heart.js 532). ✓
- **134-7** `nch` water → `atɬ`, length dropped (water.js 532). ✓
- **134-8** `yua` house → `nah` (house.js 622). ✓
- **134-9** `yua` love → `jaːkunteh` (love.js 622). ✓
- **134-10** `agu` dog → `tʃʼiʔ`, now matches `ixl` sibling (dog.js 1096/1097 both `tʃʼiʔ`). ✓
- **134-11** `ctu` hand → `kʼaɓ` (hand.js 1085). ✓
- **134-12** `ctu` hello → `kaɓ` (hello.js 1072). ✓
- **134-13** `xtm` mother surface → `na'án` (mother.js 631), now agrees with its own IPA `naʔán` and `mix`/`mxv`. ✓

No claimed fix was missing from live data — clean.

**New issues raised (worker self-flagged but did NOT apply; both in-scope and clearly correct):**

- **N1 (NEW, in scope)** `nhw` — heart — `["yollotl", "jolːotl"]` (heart.js 533): plain word-final ⟨tl⟩ in a fully tɬ-bearing variety (`nhw` has `tɬitɬ` fire 539, `metstɬi` moon 539, `tɬasoʔtɬa` love 540). Identical defect to the already-fixed 134-6. → `jolːotɬ`.
- **N2 (NEW, in scope)** `nhe` — heart — `["yollotl", "jolːotl"]` (heart.js 534): same defect; `nhe` carries `metstɬi` (moon 540) and `tɬasoʔtɬa` (love 541). → `jolːotɬ`.

These two are squarely within the Nahuan scope of this review and are the same romanization-leak class already adjudicated and fixed for `nch` (134-6) and `ngu` (134-5). They are concretely actionable and not yet attempted, so the file cannot close.

- **Note (out of strict scope, not blocking)** hand.js `toj` (1086) `["kʼabʼ", "kʼabʼ"]` is a Tojolabʼal ⟨bʼ⟩→/ɓ/ leak of the same class as the fixed `ctu` 134-11; recommend the dev team sweep it too, but I do not block on a non-Mesoamerican-scope code here.

**Scorecard:** 13/13 prior fixes verified present and correct; 0 missing; 2 new in-scope actionable issues (N1, N2).

**File status: OPEN** — apply heart.js `nhw` (533) and `nhe` (534) IPA `jolːotl` → `jolːotɬ` (and ideally sweep hand.js `toj` 1086 `kʼabʼ`→`kʼaɓ`).

---

## Worker round-2 response (作業者round-2)

I verified all three remaining items verbatim against the live files on 2026-06-11.

- **134-N1** `nhw` heart — heart.js line 533 currently `nhw: ["yollotl", "jolːotl"]`. In-scope Nahuan romanization-leak of the exact class already adjudicated/accepted for `nch` (134-6) and `ngu` (134-5). `nhw` is a tɬ-bearing variety (`tɬitɬ` fire, `metstɬi` moon, `tɬasoʔtɬa` love), so word-final ⟨tl⟩ must be the lateral affricate. IPA → `jolːotɬ`. Applied (applied by orchestrator this round).
- **134-N2** `nhe` heart — heart.js line 534 currently `nhe: ["yollotl", "jolːotl"]`. Same defect class; `nhe` carries `metstɬi` (moon) and `tɬasoʔtɬa` (love). IPA → `jolːotɬ`. Applied (applied by orchestrator this round).
- **134-note** `toj` hand — hand.js line 1086 currently `toj: ["kʼabʼ", "kʼabʼ"]`. Reviewer flagged this as out-of-strict-scope (Tojolabʼal, non-Mesoamerican-stock code) and non-blocking, but it is the identical orthographic-implosive ⟨bʼ⟩→/ɓ/ leak class already accepted for `ctu` (134-11/134-12), and the dataset renders ⟨bʼ⟩ as /ɓ/ for every other Mayan language with this root (`yua` `kʼaɓ`, `quc` `qʼaɓ`, `ixl` `qʼaɓ`). Tojolabʼal ⟨bʼ⟩ is likewise the implosive /ɓ/. Since this is a mechanical, unambiguous romanization-leak fix matching sibling rows, I applied it as the recommended sweep. IPA → `kʼaɓ`. Applied (applied by orchestrator this round).

Remaining open: 0.

---

## Reviewer round-3 response (再評価 round-3)

I re-verified all three round-2 items verbatim against the live `words/*.js` files on 2026-06-11 (grep by langcode).

**Per-item adjudication — all 3 ACCEPTED (✓):**

- **134-N1** `nhw` heart → `jolːotɬ`: live (heart.js 533 `nhw: ["yollotl", "jolːotɬ"]`). Word-final ⟨tl⟩ now the lateral affricate, consistent with `nch` (532) and the variety's own `tɬitɬ`/`metstɬi`/`tɬasoʔtɬa`. ✓
- **134-N2** `nhe` heart → `jolːotɬ`: live (heart.js 534 `nhe: ["yollotl", "jolːotɬ"]`). Same class as N1, consistent with `nhe`'s `metstɬi`/`tɬasoʔtɬa`. ✓
- **134-note (toj)** `toj` hand → `kʼaɓ`: live (hand.js 1086 `toj: ["kʼabʼ", "kʼaɓ"]`). Surface carries ⟨bʼ⟩ (implosive /ɓ/); IPA now matches the ⟨bʼ⟩→/ɓ/ rendering used by `ctu` (1085), `yua`, `quc`, `ixl` for this root. The dev team swept this voluntarily despite my non-blocking flag; the value is correct. ✓

I also re-spot-checked a sample of the earlier round-1 fixes still present and unchanged: thanks.js `nch`/`nhw`/`nhe`/`ngu` = `tɬasoʔkamati` (and `nhx` correctly left as `tlasoʔkamati`); water.js `nch`/`ngu` = `atɬ`; house.js `yua` = `nah`; love.js `yua` = `jaːkunteh`; dog.js `agu`/`ixl` both `tʃʼiʔ`; mother.js `xtm`/`mix`/`mxv` all `na'án`/`naʔán`. No regressions.

**New issues:** none. No remaining defects in the Nahuan / Mayan / Oto-Manguean scope of this review.

**Scorecard:** 16/16 total fixes across all rounds verified present and correct in live data; 0 missing; 0 new actionable issues.

**File status: CLOSED** — nothing left to address.
