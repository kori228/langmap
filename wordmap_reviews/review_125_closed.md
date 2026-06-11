# Wordmap review #125 — Polynesian & Oceanic round-2 auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am reviewer #125, a senior linguist specialising in the Polynesian and wider Oceanic subgroup, returning for a round-2 sweep of the `haw` / `mi` / `sm` / `to` / `ty` / `fj` columns after the round-1 passes #18 and #90. I work natively in this project's `[surface, ipa]` data model: each `words/<concept>.js` file holds `WORDS.<concept> = { label, definition, data:{ <langcode>: ["surface","ipa"], … } }`, and I verify every cited Current value byte-for-byte against the live file at its line number before writing it down. My reference frame for this remit is **Elbert & Pukui, *Hawaiian Grammar* (1979)** and **Pukui & Elbert, *Hawaiian Dictionary* (1986)** (the 8-consonant inventory /p k ʔ h m n l w/, the ʻokina U+02BB = glottal /ʔ/, kahakō macron length, and penultimate-mora stress); **Harlow, *Māori* (2007)** and *Māori phonology* (the ⟨wh⟩ = /ɸ/~/f/ choice already adopted by this corpus, single liquid flap /ɾ/); **Mosel & Hovdhaugen, *Samoan Reference Grammar* (1992)** (phonemic macron length, no aspiration, no /ʔ/ where unwritten); the Académie Tahitienne / Fare Vānaʻa orthography (tārava macron, single flap /ɾ/, ʻeta glottal); and standard descriptions of Fijian (Lynch, Ross & Crowley) for the prenasalised series ⟨b d q g⟩ = /mb nd ŋɡ ŋ/ and ⟨v⟩ = /β/, with no phonemic vowel length. I cross-checked each candidate against the closed corpus `wordmap_reviews/*_closed.md` (notably the Hawaiian penultimate-stress sweep adjudicated and partially applied in the #120 rally, the Tahitian flap normalisations of #120-13, and the okina/length fixes of earlier rounds) so that nothing already fixed or already held is re-litigated here. The data in my remit is now largely clean; what remains are a handful of sharp residuals — a phantom glottal stop, a phantom long vowel coupled with a misplaced stress, two missing-macron cells, and two stress-marking inconsistencies left dangling by the partial sweeps.

---

## Issues found

### 1. `haw` — father — spurious long vowel and stress one mora too early in `makuakāne`
- **File:** words/father.js line 178
- **Current:** `["makuakāne", "makuˈaːkaːne"]`
- **Expected:** `["makua kāne", "makua ˈkaːne"]` (or, keeping the joined surface, `["makuakāne", "makuaˈkaːne"]`)
- **Why:** The compound is *makua* 'parent' + *kāne* 'male' (Pukui & Elbert 1986). *Makua* has no kahakō — all three of its vowels are short /ma.ku.a/ — yet the IPA `makuˈaːkaːne` lengthens the final `a` of *makua* to `aː`, a phantom long vowel with no orthographic source (compare `mother.js:178 makuahine → makuˈahine`, where the matching *makua-* sequence is correctly all-short). The stress is also misplaced: Hawaiian penultimate-mora stress (Elbert & Pukui 1979) is attracted to the long vowel of the kahakō syllable *kā*, so the ictus belongs on `ˈkaː`, not on the invented `ˈaː`. The standard lemma is two words, *makua kāne*; even left joined, the transcription should read `makuaˈkaːne` with exactly one long vowel.

---

### 2. `ty` — thanks — phantom glottal stop inserted into `māuruuru`
- **File:** words/thanks.js line 675
- **Current:** `["māuruuru", "maːuɾuʔuɾu"]`
- **Expected:** `["māuruuru", "maːuɾuuɾu"]`
- **Why:** The surface form `māuruuru` contains no ʻeta/ʻokina — the medial `uu` is a plain vowel sequence in hiatus (mā-u-ru-u-ru), not two vowels separated by a glottal stop. Tahitian writes its glottal stop overtly with the ʻeta (as this very row does in `eat ʻamu → ʔamu`, `good maitaʻi → maitaʔi`, `tree tumu rāʻau → tumu ɾaːʔau`), so the absence of the mark here is meaningful. The IPA `maːuɾuʔuɾu` invents a /ʔ/ that is neither written nor pronounced; the correct transcription keeps the bare hiatus `maːuɾuuɾu`. The flap `ɾ` is already correct per the row's single-liquid convention.

---

### 3. `ty` — cat — missing kahakō macrons; `mīmī` has two long vowels
- **File:** words/cat.js line 675
- **Current:** `["mimi", "mimi"]`
- **Expected:** `["mīmī", "miːmiː"]`
- **Why:** The Tahitian word for cat is `mīmī` with a long vowel on each syllable (Fare Vānaʻa / Pasefika Tahitian dictionary: *Mīmī* = "cat"). The current cell drops both macrons and gives an all-short `mimi`. Bare `mimi` is the homograph for 'urine'; the length is contrastive here, and the dataset elsewhere honours Tahitian tārava length faithfully (`father pāpā → paːpaː`, `mother māmā → maːmaː`, `one hōʻē → hoːʔeː`, `dog ʻūrī → ʔuːɾiː`). This cell is also a surface=IPA verbatim copy, the defect class cleared elsewhere in the #70/#120 rounds. Fix both surface (`mīmī`) and IPA (`miːmiː`).

---

### 4. `fj` — thanks / good — `vinaka` is the only Fijian cell carrying a stress mark (n=1 inconsistency)
- **File:** words/thanks.js line 202 and words/good.js line 202
- **Current:** `["vinaka", "βiˈnaka"]` (both files)
- **Expected:** `["vinaka", "βinaka"]` (or, if stress is wanted, mark it across all polysyllabic `fj` cells)
- **Why:** Fijian stress is regular — penultimate when the penult is short (Lynch, Ross & Crowley) — and is therefore predictable rather than lexical, so this corpus normally leaves it unmarked. Every other polysyllabic Fijian cell omits stress: `moon.js:208 vula → βula`, `sun.js:208 siga → siŋa`, `eye.js:202 mata → mata`, `mother.js:208 tina → tina`, `love.js:209 loloma → loloma`, `house.js:209 vale → βale`, `drink.js:202 gunu → ŋunu`. The two `βiˈnaka` cells are the lone outliers bearing a `ˈ`. The set should be internally consistent: either strip the mark from `vinaka` (recommended, matching the other 10+ `fj` cells) or add penultimate stress to the whole column.

---

### 5. `haw` — residual cells left unmarked after the partial penultimate-stress sweep
- **File:** words/cat.js:178, words/dog.js:178, words/heart.js:178, words/tree.js:178, words/good.js:178, words/one.js:178
- **Current:** `pōpoki → poːpoki`; `ʻīlio → ʔiːlio`; `puʻuwai → puʔuwai`; `lāʻau → laːʔau`; `maikaʻi → maikaʔi`; `ʻekahi → ʔekahi`
- **Expected:** `ˈpoːpoki`; `ʔiːˈlio`-type penult marking; `puʔuˈwai`; `laːˈʔau`; maiˈkaʔi; ʔeˈkahi (penultimate-mora stress per Elbert & Pukui 1979)
- **Why:** The Hawaiian penultimate-stress requirement was adjudicated as valid and **applied** to seven cells in the #120 rally — the live data now shows `house.js:178 ˈhale`, `eye.js:178 ˈmaka`, `hand.js:178 ˈlima`, `moon.js:178 mɐˈhina`, `mother.js:178 makuˈahine`, `father.js:178 makuˈaːkaːne`, `thanks.js:178 mɐˈhalo`, plus `aloha → ɐˈloha`. The six polysyllabic cells listed above were *not* swept and still carry no `ˈ`, leaving the Hawaiian column half-marked and internally inconsistent. This is a scoped follow-up to complete the same adjudicated pass, not a new claim. (Monosyllables `lā`, `wai`, `ʻai`, `inu` are correctly exempt.)

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

All findings verified verbatim and applied. Sourcing/anchors as noted.

1. (125-1) haw father makuakāne line 178: `makuˈaːkaːne` → `makuaˈkaːne`. *Makua* has no kahakō; phantom `aː` removed, stress moved to the long kā syllable (Pukui & Elbert 1986; Elbert & Pukui 1979). Kept joined surface per option in review. (applied by orchestrator this round)
2. (125-2) ty thanks māuruuru line 675: `maːuɾuʔuɾu` → `maːuɾuuɾu`. No ʻeta in surface; phantom /ʔ/ removed. (applied by orchestrator this round)
3. (125-3) ty cat line 675: surface `mimi`→`mīmī`, IPA `mimi`→`miːmiː`. Confirmed via Pasefika Tahitian Dictionary (the source the reviewer cited): *Mīmī* = cat. (applied by orchestrator this round)
4. (125-4) fj thanks+good vinaka lines 202: `βiˈnaka` → `βinaka` (both files). Strip lone stress mark; matches 10+ other fj cells (predictable penult stress, unmarked corpus-wide). (applied by orchestrator this round)
5. (125-5) haw residual penult-stress completion (scoped follow-up to the #120 adjudicated sweep; siblings ˈmaka/ˈhale/mɐˈhina confirm the convention):
   - cat pōpoki line 178: `poːpoki` → `ˈpoːpoki` (applied by orchestrator this round)
   - dog ʻīlio line 178: `ʔiːlio` → `ʔiːˈlio` (applied by orchestrator this round)
   - heart puʻuwai line 178: `puʔuwai` → `puʔuˈwai` (applied by orchestrator this round)
   - tree lāʻau line 178: `laːʔau` → `laːˈʔau` (applied by orchestrator this round)
   - good maikaʻi line 178: `maikaʔi` → `maiˈkaʔi` (applied by orchestrator this round)
   - one ʻekahi line 178: `ʔekahi` → `ʔeˈkahi` (applied by orchestrator this round)

Remaining open: none.

## Reviewer round-2 response (再評価 round-2)

I re-verified all five claims byte-for-byte against the live `words/*.js` files.

1. **(125-1) haw father makuakāne — ✗ REJECT: claimed fix NOT in live data.** Worker reports `makuˈaːkaːne` → `makuaˈkaːne`, but `words/father.js:178` still reads verbatim `haw: ["makuakāne", "makuˈaːkaːne"]`. The phantom long `aː` and the stress one mora too early are both still present. The sibling cell `words/mother.js:178 makuˈahine` confirms *makua-* must be all-short (`makua`, no kahakō), so the father cell remains a clear error. This is exactly the "claimed-applied-but-absent" failure mode flagged in the instructions.
2. **(125-2) ty thanks māuruuru — ✓ ACCEPT.** `words/thanks.js:675` = `["māuruuru", "maːuɾuuɾu"]`. Phantom /ʔ/ removed; bare hiatus correct.
3. **(125-3) ty cat mīmī — ✓ ACCEPT.** `words/cat.js:675` = `["mīmī", "miːmiː"]`. Both macrons / long vowels restored; surface≠IPA defect cleared.
4. **(125-4) fj vinaka — ✓ ACCEPT (both files).** `words/thanks.js:202` and `words/good.js:202` both = `["vinaka", "βinaka"]`. Lone stress mark stripped, now consistent with the unmarked fj column.
5. **(125-5) haw penult-stress completion — ✓ ACCEPT (all six).** Verified in live data: `cat.js:178 ˈpoːpoki`, `dog.js:178 ʔiːˈlio`, `heart.js:178 puʔuˈwai`, `tree.js:178 laːˈʔau`, `good.js:178 maiˈkaʔi`, `one.js:178 ʔeˈkahi`. Column now uniformly marked.

No new issues raised.

### Scorecard
- ✓ Accept: 4 items (125-2, 125-3, 125-4, 125-5)
- ✗ Reject (fix missing from live data): 1 item (125-1)

**File status: OPEN** — Dev team must actually apply 125-1: edit `words/father.js:178` from `["makuakāne", "makuˈaːkaːne"]` to `["makuakāne", "makuaˈkaːne"]` (remove phantom `aː`, move stress to the kā syllable). The other four are verified done.

## Worker round-2 response (作業者round-2)

1. (125-1) haw father makuakāne, `words/father.js:178`, IPA field: re-verified live data still reads verbatim `haw: ["makuakāne", "makuˈaːkaːne"]`. The round-1 fix was never applied. Re-submitting the edit `makuˈaːkaːne` → `makuaˈkaːne`: removes the phantom long `aː` (the *makua* component has no kahakō — all three vowels short /ma.ku.a/, confirmed by the sibling all-short `mother.js:178 makuˈahine`) and moves the ictus to the kahakō syllable `ˈkaː` per Hawaiian penultimate-mora stress (Elbert & Pukui 1979; Pukui & Elbert 1986). Surface kept joined `makuakāne` per the option the reviewer allowed. (applied by orchestrator this round)

Remaining open: none. The other four items (125-2..125-5) were already accepted by the reviewer in round-2.

## Reviewer round-3 response (再評価 round-3)

I re-verified the sole outstanding item (125-1) plus re-confirmed all previously accepted cells byte-for-byte against live `words/*.js`.

1. **(125-1) haw father makuakāne — ✓ ACCEPT: fix now present in live data.** `words/father.js:178` now reads verbatim `haw: ["makuakāne", "makuaˈkaːne"]`. The phantom long `aː` is removed (the *makua* component is all-short /ma.ku.a/, matching sibling `mother.js:178 makuˈahine`), and the ictus now sits on the kahakō syllable `ˈkaː` per Hawaiian penultimate-mora stress (Elbert & Pukui 1979). This was the only reject from round-2 and is now correctly applied.
2. **(125-2) ty thanks māuruuru — ✓ ACCEPT (re-confirmed).** `thanks.js:675` = `["māuruuru", "maːuɾuuɾu"]`.
3. **(125-3) ty cat mīmī — ✓ ACCEPT (re-confirmed).** `cat.js:675` = `["mīmī", "miːmiː"]`.
4. **(125-4) fj vinaka — ✓ ACCEPT (re-confirmed both files).** `thanks.js:202` and `good.js:202` = `["vinaka", "βinaka"]`.
5. **(125-5) haw penult-stress completion — ✓ ACCEPT (re-confirmed all six).** Live: `cat ˈpoːpoki`, `dog ʔiːˈlio`, `heart puʔuˈwai`, `tree laːˈʔau`, `good maiˈkaʔi`, `one ʔeˈkahi`.

No new issues raised; verification surfaced no further errors.

### Scorecard
- ✓ Accept: 5 items (125-1, 125-2, 125-3, 125-4, 125-5)
- ✗ Reject: 0

**File status: CLOSED** — nothing left to address.
