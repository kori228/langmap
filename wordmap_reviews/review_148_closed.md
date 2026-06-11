# Wordmap review #148 — Stress-placement correctness auditor (lexical-stress languages)

## Reviewer self-introduction (ペルソナ自己紹介)

I am reviewer #148, a Slavic- and Romance-trained phonologist who audits primary-stress (and, where the column marks it, pitch-accent and vowel-length) placement in languages whose stress is contrastive or rule-governed. I know this dataset's `words/<concept>.js` model intimately — each entry is `<langcode>: ["surface", "ipa"]`, the `el`/`it`/`ru` columns mark primary stress with `ˈ`, the `ru` column encodes akanye reduction (о→[ɐ] pretonic, [ə] far post-tonic) that is *licensed only by* the stress it presupposes, and the `hr` (Standard Croatian) column — uniquely among the BCS columns (`sr`, `bg`, `sk`, `cs`, `be` mark neither stress nor length) — marks BOTH primary stress with `ˈ` AND phonemic vowel length with `ː`. Because New-Štokavian standard Croatian is non-oxytonic and its length is post-tonically as well as tonically contrastive, the `hr` column is the one place in my remit where a `ː` on the wrong syllable is a sharp, falsifiable error rather than a stylistic choice. For this pass I verified each Greek written accent against the orthography (Arvaniti 2007, *Handbook of the IPA* Greek illustration), each Russian stress against Avanesov's *Русское литературное произношение* and Wiktionary, and each BCS form against Wiktionary's Serbo-Croatian accent notation (kȕća-style four-accent diacritics) cross-checked against Landau et al.'s Croatian IPA illustration. I rely on the project docs `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md`, and on the adjudications in closed reviews #51/#52/#117 (Greek stress restoration) and #27/#03 (the Russian post-tonic [ɐ]/[ə] policy, which I treat as settled and do NOT re-litigate). After eleven waves the `ru`, `el`, `it`, `pl` stress columns are essentially clean on placement; my value this wave is the one `hr` length-position error that survived, reported alongside the sibling evidence that isolates it.

---

## Issues found

### 1. `hr` — moon — Croatian vowel length sits on the wrong syllable in *mjesec*
- **File:** words/moon.js line 886
- **Current:** `["mjesec", "ˈmjeːset͡s"]`
- **Expected:** `["mjesec", "ˈmjeseːt͡s"]`
- **Why:** Standard (New-Štokavian) Croatian *mjȅsēc* has a **short** falling accent on syllable 1 and a **long** vowel on syllable 2: Wiktionary gives `/mjêseːt͡s/` (circumflex = falling on the first ⟨je⟩; macron/ː on the second ⟨e⟩). The headword diacritic ⟨ȅ⟩ is the short-falling accent — the shortest of the four Štokavian accents and the only one confined to word-initial position (Serbo-Croatian phonology; Landau, Croatian IPA illustration), so the **tonic** vowel is unambiguously short. The current transcription inverts both facts at once: it lengthens the tonic `je` (`mjeː`) — a length grade the word does not have — and shortens the post-tonic `se`, which is the syllable that is actually long. Crucially, every *other* length-marked `hr` entry places `ː` correctly on a genuinely-long **stressed** vowel — `sunce` `ˈsuːnt͡se` (sȗnce), `ruka` `ˈruːka` (/rǔːka/), `majka` `ˈmaːjka` (/mâːjka/), `hvala` `ˈxʋaːla` (/xʋǎːla/), `ljubav` `ˈʎuːbaf` (/ʎǔːbaʋ/) — so `mjesec` is the lone column outlier, the only `hr` word whose long vowel is post-tonic, and the only one where the `ː` has been mis-attached to the tonic syllable. The stress mark `ˈ` is correctly initial and must stay; only the `ː` moves from the first vowel to the second, yielding `ˈmjeseːt͡s`.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

### 148-1 — hr — moon — *mjesec* length-position — APPLIED (applied by orchestrator this round)
Confirmed live at words/moon.js:886 `hr: ["mjesec", "ˈmjeːset͡s"]`. Standard New-Štokavian *mjȅsēc* has short falling accent on the initial ⟨je⟩ and a long post-tonic ⟨e⟩ (Wiktionary /mjêseːt͡s/; the ⟨ȅ⟩ short-falling accent is confined to word-initial position). The current cell mis-attaches `ː` to the tonic vowel and drops it from the genuinely-long post-tonic. The reviewer's sibling evidence (sunce `ˈsuːnt͡se`, ruka `ˈruːka`, majka `ˈmaːjka`, hvala `ˈxʋaːla`, ljubav `ˈʎuːbaf` — all with `ː` on a long *stressed* vowel) isolates *mjesec* as the lone outlier. Stress mark stays initial; only `ː` moves. Applied `ˈmjeːset͡s` → `ˈmjeseːt͡s`.

---

## Reviewer round-2 response (再評価 round-2)

### 148-1 — hr — moon — *mjesec* length-position — ✓ ACCEPT
Verified live at words/moon.js:886: `hr: ["mjesec", "ˈmjeseːt͡s"]`. The `ː` now sits on the long post-tonic ⟨e⟩ (`seː`), and the tonic ⟨je⟩ is correctly short, matching Standard New-Štokavian *mjȅsēc* (Wiktionary /mjêseːt͡s/: short-falling on syllable 1, long on syllable 2). The `ː` was correctly removed from the tonic vowel. Stress mark `ˈ` remains word-initial as required.

Sibling consistency re-confirmed against live data — every other length-marked `hr` cell still places `ː` on a long *stressed* vowel:
- hand.js:880 `ˈruːka`
- love.js:887 `ˈʎuːbaf`
- mother.js:886 `ˈmaːjka`
- sun.js:886 `ˈsuːnt͡se`
- thanks.js:880 `ˈxʋaːla`

*mjesec* was the lone outlier (post-tonic length); it is now corrected and is the only `hr` entry where length is legitimately post-tonic, which is exactly what the New-Štokavian accent system predicts for *mjȅsēc*. No regression introduced.

### New issues
None. Verification surfaced no additional errors in the `hr`/length columns I audited.

### Scorecard
| Item | Verdict |
|------|---------|
| 148-1 hr/moon *mjesec* length-position | ✓ ACCEPT (verified in live data) |

The sole reported error is fixed and verified; no held, deferred, or new items remain.

**File status: CLOSED** — nothing left to address.
