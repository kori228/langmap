# Wordmap review #133 — Albanian, Armenian, isolates round-2 auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a historical-and-descriptive phonologist of the Balkan and Caucasian fringe, returning for a round-2 pass on this dataset's Albanian (`sq`), Arbëreshë (`aae`), Armenian (Eastern `hy` / Western `hyw`), Basque (`eu`) and the other isolates that live in the European/Caucasus blocks of `words/*.js`. I know this corpus's conventions intimately: the two-element `["surface","ipa"]` array, the house decision to write the **trill /r/ as plain `r`** and the **tap /ɾ/ as `ɾ`** (confirmed by the adjudicator of review #64 against the Basque `eskerrik`/`ilaɾɣi` evidence), the deliberate use of tie-bar affricates `t͡s t͡ʃ d͡ʒ` where they are written at all, and the system-wide policy — upheld in the closed adjudications of #64 and #95 — of *not* marking narrow features such as Basque laminal/apical s̻/s̺, diphthong glides, or Ket tone. I have re-read reviews #04, #64 and #95 in full and have deliberately steered clear of items those reviews closed (the Basque spirantisation set, already applied; the `eu` aspiration/sibilant narrow features, held; the Western-Armenian voicing of `hyw/fire կրակ→ɡɾɑk`, which review #04 explicitly re-verified as an intentionally-kept form; the `hyw չ/ձ` affricate-shift claims of #95-11, which I checked against Vaux 1998 / Wikipedia's Classical-orthography table and found to be linguistically contested — ⟨չ⟩ is the Classical *aspirate* /t͡ʃʰ/ and correctly *stays* aspirate in Western, so the live `ɑtʃkʰ` is right). The references I lean on here are Newmark, Hubbard & Prifti (1982) *Standard Albanian* and Demiraj (1997) for Albanian/Arbëreshë; Dum-Tragut (2009) *Armenian: Modern Eastern Armenian* and Vaux (1998) *The Phonology of Armenian* for the Armenian stress and stop systems; Hualde & Ortiz de Urbina (2003) for Basque; plus the project's own `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md`. Every Current value below was grepped verbatim from the live file at the cited line.

---

## Issues found

### 1. `sq` — heart — single ⟨r⟩ of *zemër* rendered as the trill instead of the tap
- **File:** words/heart.js line 318
- **Current:** ["zemër", "zɛmər"]
- **Expected:** ["zemër", "zɛməɾ"]
- **Why:** Standard Albanian contrasts the tap ⟨r⟩ /ɾ/ with the trill ⟨rr⟩ /r/ (Newmark et al. 1982 §1.2); *zemër* has a single orthographic ⟨r⟩, so it is the tap /ɾ/. This corpus writes the tap as `ɾ` and reserves plain `r` for the trill — every other `sq` row obeys this: `mirë`→`miɾə`, `dorë`→`dɔɾə`, `dashuri`→`daʃuɾi`, `përshëndetje`→`pəɾʃəndɛtjɛ`, `faleminderit`→`falɛmindɛɾit` (all single ⟨r⟩ = `ɾ`), while `zjarr`→`zjar` correctly uses plain `r` for ⟨rr⟩. The `zɛmər` here breaks that scheme: it reads as a trill, contradicting both the orthography and every sibling `sq` entry.

---

### 2. `aae` — heart — same tap/trill error in Arbëreshë *zemër*
- **File:** words/heart.js line 319
- **Current:** ["zemër", "zɛmər"]
- **Expected:** ["zemër", "zɛməɾ"]
- **Why:** Identical defect in the Arbëreshë row directly below #1 (the two were evidently transcribed together). Arbëreshë keeps the pan-Albanian tap/trill ⟨r⟩/⟨rr⟩ contrast (Demiraj 1997 §7), and single ⟨r⟩ is the tap. The `aae` code is otherwise consistent with `ɾ` for single ⟨r⟩ — `dashuri`→`daʃuɾi`, `kalemera`→`kalɛmɛɾa`, `faleminderit`→`falɛmindɛɾit`, `dora`→`dɔɾa`, `mirë`→`miɾə` — so `zɛmər` is the lone outlier and should be `zɛməɾ`.

---

### 3. `aae` — fire — ⟨rr⟩ of *zjarr* transcribed as a tap (back-to-front of the rr/r contrast)
- **File:** words/fire.js line 325
- **Current:** ["zjarr", "zjaɾ"]
- **Expected:** ["zjarr", "zjar"]
- **Why:** This is the mirror image of #1–2: *zjarr* is spelled with the digraph ⟨rr⟩, i.e. the **trill** /r/, which the corpus writes as plain `r`. The `aae` row instead gives `zjaɾ` (the tap symbol), neutralising the trill. The standard-Albanian `sq` row in the very same file, line 324, gets it right: `zjarr`→`zjar` (plain `r` = trill). The two adjacent rows therefore disagree on the value of the identical ⟨rr⟩ grapheme; `aae` is the one in error. (Newmark et al. 1982: ⟨rr⟩ = trill /r/, contrasting with tap ⟨r⟩ /ɾ/, e.g. *rri* 'stay' vs *ri* 'new'.)

---

### 4. `aae` — moon — surface is the definite form *hëna* but the IPA still ends in schwa
- **File:** words/moon.js line 325
- **Current:** ["hëna", "hənə"]
- **Expected:** ["hëna", "həna"]
- **Why:** Surface/IPA mismatch on the final vowel. The Arbëreshë surface is the **definite** form *hëna* (= 'the moon'), whose final ⟨a⟩ is /a/; the IPA `hənə` ends in /ə/, which is the vowel of the *indefinite* `sq` form *hënë*→`hənə` (line 324) — the transcription was plainly copied from the standard-Albanian row and the definite ending was not updated. ⟨ë⟩ = /ə/ and ⟨a⟩ = /a/ are distinct phonemes in Albanian (Newmark et al. 1982 §1.1), so the final segment must change. The sibling definite forms in `aae` confirm the pattern: hand `dora`→`dɔɾa` and mother `mëma`→`məma` both correctly end the IPA in `a`. Expected `həna`.

---

### 5. `hyw` — eat — Western Armenian *udel* is missing the regular final stress
- **File:** words/eat.js line 175
- **Current:** ["ուտել", "udel"]
- **Expected:** ["ուտել", "uˈdel"]
- **Why:** Armenian stress is regularly word-final (on the last full-vowel syllable) in both varieties (Dum-Tragut 2009 §1.3). The Eastern partner row, line 174, marks it: `hy: ["ուտել","uˈtel"]`. The Western row applies the voicing shift (t→d) correctly but drops the stress mark, leaving `udel` unstressed while its Eastern twin is stressed — an internal inconsistency, not a value the Western variety would lack. Expected `uˈdel`.

---

### 6. `hyw` — drink — Western Armenian *χəmel* is missing the regular final stress
- **File:** words/drink.js line 175
- **Current:** ["խմել", "χəmel"]
- **Expected:** ["խմել", "χəˈmel"]
- **Why:** Same defect as #5. The Eastern row, line 174, is `hy: ["խմել","χəˈmel"]` — schwa-epenthesis before the /χm/ cluster (correctly present in both rows) plus final stress on the full vowel /e/. The Western row keeps the epenthetic `ə` but omits the stress mark its Eastern twin carries. By the final-stress rule (Dum-Tragut 2009; the schwa is not stress-bearing, so stress falls on `mel`) the Western form is `χəˈmel`.

---

### 7. `hy` — thanks — Eastern Armenian *šnorhakalut'yun* missing the final stress its Western twin carries
- **File:** words/thanks.js line 174
- **Current:** ["շնորհակալություն", "ʃnoɾhɑkɑlutʰjun"]
- **Expected:** ["շնորհակալություն", "ʃnoɾhɑkɑluˈtʰjun"]
- **Why:** The reverse asymmetry to #5–6. Here it is the **Eastern** row that lacks the final-stress mark, while the Western partner, line 175, has it: `hyw: ["շնորհակալութիւն","ʃnoɾhɑɡɑluˈtʰjun"]`. By the same regular ultimate-stress rule (Dum-Tragut 2009 §1.3) the stress in -ություն /-utʰjun/ falls on the final syllable in Eastern too. The pair should be harmonised; expected `ʃnoɾhɑkɑluˈtʰjun`.

---

### 8. `aae` — cat — affricate written without the tie bar the standard-Albanian sibling uses
- **File:** words/cat.js line 319
- **Current:** ["macja", "matsja"]
- **Expected:** ["macja", "mat͡sja"]
- **Why:** Orthographic ⟨c⟩ in both Standard Albanian and Arbëreshë is the affricate /t͡s/ (Newmark et al. 1982 §1.2; Demiraj 1997). The standard-Albanian row immediately above, line 318, transcribes exactly this segment **with** the tie bar — `sq: ["mace","mat͡sɛ"]` — whereas the Arbëreshë row writes the bare sequence `ts`. Within this single concept file the same affricate is thus notated two different ways; since `sq/mat͡sɛ` sets the local precedent (and is the only other affricate-bearing Albanian row in the corpus), the `aae` row should match it as `mat͡sja` so the `ts` is not misread as a /t/+/s/ cluster.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

All 8 items verified verbatim against the live files and are clear, internally-consistent fixes (tap/trill ⟨r⟩↔⟨rr⟩ house convention, ⟨ë⟩=/ə/ vs ⟨a⟩=/a/, regular Armenian final stress harmonised between hy/hyw twins, tie-bar affricate matching the sq sibling). None touch a settled cross-school convention.

- **133-1** `sq` heart `zɛmər`→`zɛməɾ` (single ⟨r⟩ = tap): applied by orchestrator this round.
- **133-2** `aae` heart `zɛmər`→`zɛməɾ`: applied by orchestrator this round.
- **133-3** `aae` fire `zjaɾ`→`zjar` (⟨rr⟩ = trill, matches sq sibling line 324): applied by orchestrator this round.
- **133-4** `aae` moon `hənə`→`həna` (definite *hëna*, final ⟨a⟩=/a/): applied by orchestrator this round.
- **133-5** `hyw` eat `udel`→`uˈdel` (final stress, matches hy twin): applied by orchestrator this round.
- **133-6** `hyw` drink `χəmel`→`χəˈmel`: applied by orchestrator this round.
- **133-7** `hy` thanks `ʃnoɾhɑkɑlutʰjun`→`ʃnoɾhɑkɑluˈtʰjun`: applied by orchestrator this round.
- **133-8** `aae` cat `matsja`→`mat͡sja` (tie-bar, matches sq `mat͡sɛ`): applied by orchestrator this round.

Remaining open: 0.

---

## Reviewer round-2 response (再評価 round-2)

I re-grepped every cited line in the live data files. All eight applied values are present verbatim — no phantom fixes this round.

- **133-1** ✓ ACCEPT — `words/heart.js:318` now `sq: ["zemër", "zɛməɾ"]`. Single ⟨r⟩ = tap `ɾ`, consistent with house convention and every other `sq` row.
- **133-2** ✓ ACCEPT — `words/heart.js:319` now `aae: ["zemër", "zɛməɾ"]`. Matches the `sq` sibling.
- **133-3** ✓ ACCEPT — `words/fire.js:325` now `aae: ["zjarr", "zjar"]`. ⟨rr⟩ = trill `r`, agreeing with the `sq` row at line 324.
- **133-4** ✓ ACCEPT — `words/moon.js:325` now `aae: ["hëna", "həna"]`. Definite final ⟨a⟩ = /a/; surface/IPA now agree.
- **133-5** ✓ ACCEPT — `words/eat.js:175` now `hyw: ["ուտել", "uˈdel"]`. Final stress harmonised with the `hy` twin (`uˈtel`, line 174).
- **133-6** ✓ ACCEPT — `words/drink.js:175` now `hyw: ["խմել", "χəˈmel"]`. Final stress added; matches `hy` line 174.
- **133-7** ✓ ACCEPT — `words/thanks.js:174` now `hy: ["շնորհակալություն", "ʃnoɾhɑkɑluˈtʰjun"]`. Stress now parallels the `hyw` twin at line 175.
- **133-8** ✓ ACCEPT — `words/cat.js:319` now `aae: ["macja", "mat͡sja"]`. Tie-bar affricate matches the `sq` sibling `mat͡sɛ` (line 318).

No new issues. While confirming 133-7 I noticed `thanks.js:956` `hy_grab: ["շնորհակալութիւն", "ʃnoɾhɑkɑlutʰiwn"]` is an intentionally distinct Grabar (Classical) form with classical -iwn orthography and unstressed citation style — out of scope and not an error.

### Scorecard
- Accept (✓): 8/8
- Partial (△): 0
- Reject (✗): 0
- New issues: 0

**File status: CLOSED** — nothing left to address.
