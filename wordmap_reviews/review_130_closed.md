# Wordmap review #130 — Standard-average-European deep phonetics auditor (de/fr/es/it/en/pt)

## Reviewer self-introduction (ペルソナ自己紹介)

I am a phonetician specialising in the Standard-Average-European core — German, French, Spanish, Italian, English and Portuguese — and this is my wave-12 pass over the six highest-traffic columns of the Wordmap dataset. I know this data model intimately: each `words/<concept>.js` holds `WORDS.<concept> = { label, definition, data }`, and the `data` block is a `[surface, ipa]` tuple per language code; in my remit the relevant codes are `en`, `de`, `fr`, `it`, and the regionally-split Iberian pairs `es_eu`/`es_mx` and `pt_eu`/`pt_br` (there is no bare `es`/`pt` row in the `data` block). I have read `docs/words/CONTRIBUTING.md` (the "IPA, not romanisation" tuple contract) and `docs/words/LANG_CODES.md`, and I honour the conventions adjudicated in the closed reviews #01/#02/#21 and the later waves: the dataset writes the alveolar **tap** as `ɾ` and reserves plain `r` for a genuine **trill** (so Spanish *perro* `pero` is correct, not an error); geminates are spelled with **doubled letters** (`akkwa`, `ɡatto`, `ratt͡sje`), not a length colon; the modern `de` column marks stress **nowhere** (the *essen* stress request is settled won't-fix); and the `es_mx`/`pt_br` columns are deliberately stress-unmarked while `es_eu`/`pt_eu` carry `ˈ`. The Portuguese nasal off-glide is written as a bare `w`/`j` across the entire `pt` system, which I treat as a column-wide convention (nasality carried by the tilde on the nucleus), not a per-cell error. My reference works for the judgements below: Hall (2003) *Phonology* / Hall on German syllabics; Tranel (1987) *The Sounds of French*; Hualde (2005) *The Sounds of Spanish* (the β ð ɣ spirantisation rule); Krämer (2009) *The Phonology of Italian* (open/close e–o and geminates); Cruttenden (2014) *Gimson's Pronunciation of English* (RP rhotic = approximant [ɹ], never a trill); Mateus & d'Andrade (2000) *The Phonology of Portuguese* (EP intervocalic spirantisation). After twelve waves this area is genuinely clean — the French nasal quartet (ɛ̃ ɑ̃ ɔ̃ œ̃) is correct and distinct, the Spanish approximant allophony is uniform, the Italian length/geminate system is consistent — so I lead with only the sharp, sibling-proven residuals. Every Current value below was copied verbatim from the live file at the cited line on 2026-06-11.

---

## Issues found

### 1. `en` — tree — RP rhotic written as a trill `r`, breaking the column's own `ɹ` convention
- **File:** words/tree.js line 91
- **Current:** `["tree", "triː"]`
- **Expected:** `["tree", "tɹiː"]`
- **Why:** English (RP, the variety the whole `en` column encodes) has **no** alveolar trill /r/; its rhotic is the post-alveolar approximant [ɹ] (Cruttenden 2014 §9.7). The dataset already knows this — the sole other onset-cluster rhotic in the `en` column, *drink*, is transcribed `dɹɪŋk` with the approximant symbol `ɹ` (drink.js:91). A grep of the entire `en` column shows `triː` is the **only** plain-`r` cell: every other rhotic context is either `ɹ` (*drink*) or, being non-rhotic, simply has no r-symbol (*water* `ˈwɔːtə`, *father* `ˈfɑːðə`, *heart* `hɑːt`, *fire* `faɪə`, *mother* `ˈmʌðə`). The symbol `r` denotes a trilled rhotic (the Spanish/Italian *perro*/*rosso* sound) and is phonetically wrong for English; this is an n=1 symbol slip, identical in class to the `r`/`ɾ`/`ʁ` normalisations applied in earlier waves. Fix to `tɹiː` to match `dɹɪŋk`.

---

### 2. `pt_eu` — water — intervocalic /g/ spirantised to `ɣ` in *água* while the rest of the EP column keeps plain stops (n=1 outlier)
- **File:** words/water.js line 99
- **Current:** `["água", "ˈaɣwɐ"]`
- **Expected:** `["água", "ˈaɡwɐ"]` (align to the EP column's plain-stop treatment; *or*, in the other direction, spirantise the siblings — see Why)
- **Why:** European Portuguese spirantises intervocalic /b d g/ to [β ð ɣ] exactly as Spanish does (Mateus & d'Andrade 2000 §3), so [ˈaɣwɐ] is phonetically *defensible in isolation*. The problem is internal consistency: `água` is the **only** cell in the entire `pt_eu` column that shows a spirantised dorsal/coronal. Every other intervocalic /g d b/ in the same column is written as a plain **stop** — *fogo* `ˈfoɡu` (fire.js:99), *obrigado* `obɾiˈɡadu` (thanks.js:99, where the post-vocalic /b/, intervocalic /g/ and intervocalic /d/ are all stops). The `pt_br` sibling is `ˈaɡwɐ` with a stop (water.js:100), and review #11's #12 explicitly endorsed `ˈfoɡu` (stop) as the correct EP form. As written, the EP column applies the spirantisation rule to precisely one word and to nothing else — an indefensible n=1 split. The dataset's own decision elsewhere is the plain stop, so the consistency-preserving fix is `ˈaɡwɐ`; if the team instead wants the phonetically-richer reading, it must be applied uniformly (*fogo* → `ˈfoɣu`, *obrigado* → `oβɾiˈɣaðu`), as the `es_eu` column already does uniformly (`ˈaɣwa`, `ˈfweɣo`, `ˈaɾβol`, `ˈpaðɾe`). Either way, the lone spirantised `água` cannot stand against an otherwise all-stop EP column.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

- **130-1 (en tree `triː`→`tɹiː`):** applied (applied by orchestrator this round). Confirmed n=1 plain-`r` slip in the RP `en` column; sibling `en` *drink* is `dɹɪŋk` (drink.js:91). Aligned to approximant `ɹ`.
- **130-2 (pt_eu água `ˈaɣwɐ`→`ˈaɡwɐ`):** applied (applied by orchestrator this round). Sole spirantised dorsal in the EP column; siblings `ˈfoɡu` (fire.js:99), `ˈaɡwɐ` pt_br (water.js:100) are plain stops. Fixed toward the column's all-stop treatment.

## Reviewer round-2 response (再評価 round-2)

I re-verified both claimed fixes against the live `words/` data on 2026-06-11.

- **130-1 (en *tree* `triː`→`tɹiː`):** ✓ **ACCEPT.** Live `words/tree.js` now reads `en: ["tree", "tɹiː"]` — the approximant `ɹ`, matching the sibling onset-cluster rhotic *drink* `dɹɪŋk` (drink.js, verified live). The n=1 trilled-`r` slip in the RP `en` column is resolved.
- **130-2 (pt_eu *água* `ˈaɣwɐ`→`ˈaɡwɐ`):** ✓ **ACCEPT.** Live `words/water.js` now reads `pt_eu: ["água", "ˈaɡwɐ"]` — a plain stop, consistent with the rest of the EP column: *fogo* `ˈfoɡu` (fire.js:99) and *obrigado* `obɾiˈɡadu` (thanks.js:99), and matching the pt_br sibling `ˈaɡwɐ` (water.js:100). The lone spirantised dorsal outlier is eliminated; the column is now uniformly all-stop.

No new issues surfaced during verification. Both onset-cluster `r` and the EP stop treatment are now internally consistent across the cited siblings.

### Scorecard
| Item | Verdict |
|------|---------|
| 130-1 en tree → `tɹiː` | ✓ accept (verified live) |
| 130-2 pt_eu água → `ˈaɡwɐ` | ✓ accept (verified live) |

New issues: 0. Both fixes confirmed present in live data.

**File status: CLOSED** — nothing left to address.
