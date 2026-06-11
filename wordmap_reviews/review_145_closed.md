# Wordmap review #145 — Endangered & under-documented isolates spot auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a fieldwork-trained linguist who specialises in language isolates and tiny families — the rows that fall between the cracks of this rally because no Indo-Europeanist, Sinitic, or Bantu specialist owns them. My method for this wave was strictly evidence-first: I `grep`ed `docs/words/LANG_CODES.md` for `isolate`/`unclassified`/single-member families to enumerate exactly which codes in my remit are actually present (`ain`, `arn`, `bsk`, `ket`, `kgg`, `niv`, `sad`, `hts`, `ykg`, `yux`, `yug`, `yle`, `yuc`, `wba`, `myp`, `pbb`, `roo`, `tiw`, `huv`, `eu`), then pulled every live `["surface","ipa"]` tuple for each and verified each Current value verbatim at its line number before writing it here. I know this project's data model — `WORDS.<concept>.data` holds `<code>: ["surface","ipa"]`, the IPA slot must be broad-phonemic IPA and not the language's native romanization (`docs/words/CONTRIBUTING.md`, §"IPA notation"), and the lat/lng metadata in `wordmap_data.js`/`wordmap_meta.js` is out of my scope. For adjudication I lean on per-isolate reference works: **Maslova, _A Grammar of Kolyma Yukaghir_ (2003)** and **Nikolaeva, _A Historical Dictionary of Yukaghir_ (2006)** for `ykg`/`yux`; **Sadowsky, Painequeo, Salamanca & Avelino, "Mapudungun," _JIPA_ 43/1 (2013)** for `arn`; **Everett, "Pirahã," in _Handbook of Amazonian Languages_ I (1986)** for `myp`; **Robinson, _Phonology of Rotokas_ / Firchow & Firchow (1969)** for `roo`; **Eaton, "Sandawe," _JIPA_ 36/2 (2006)** and **Steeman, _A Grammar of Sandawe_ (2012)** for `sad`; **Romero-Figueroa, _A Reference Grammar of Warao_ (1997)** for `wba`; **Rojas Curieux et al., _Estudios fonológicos de la lengua páez_ (1991)** for `pbb`; and Glottolog for classification sanity. I deliberately did **not** re-report items already adjudicated in closed reviews — the `ket` `об`/`уьл` tone question (#64), the `ykg` `eye` turned-e/ø codepoint (#113), or the twice-pasted block that gives `yle` its duplicate object keys (#70/#90/#113). Where a positive replacement form cannot be pinned offline with confidence, I flag the cell as needing a human linguist rather than guess. Every Current value below was copied from the live file at the cited line and re-verified by `grep` on 2026-06-11; no data file was modified.

---

## Issues found

### 1. `ykg` / `yux` — hand — `neme` is the interrogative "what", not "hand" (NEEDS HUMAN LINGUIST)
- **File:** words/hand.js lines 141–142
- **Current:** `ykg: ["нэмэ", "neme"]` and `yux: ["нэмэ", "neme"]`
- **Expected:** a genuine Yukaghir 'hand/arm' lexeme — **flagged for a human linguist with Nikolaeva (2006) / Maslova (2003); do not auto-fill**
- **Why:** `neme` (нэмэ) is the well-known Yukaghir interrogative pronoun **'what'** (Maslova 2003 §pronouns; the form recurs across Tundra and Kolyma Yukaghir as the inanimate wh-word), not a body-part noun. A second, independent red flag is that **the two languages carry byte-identical surface *and* IPA here**, even though `ykg` and `yux` diverge on essentially every other concept in the corpus — e.g. fire `лачил`/`latʃil` vs `ло́чил`/`lót͡ʃil` (fire.js:141/142), water `лавйэ`/`lawje` vs `оожии`/`oːʒiː` (water.js:141/142), drink `ӧйрэ-`/`øjre` vs `ӧгэйи-`/`øɡejii` (drink.js:141/142). A single identical wh-pronoun sitting in the 'hand' slot of both is the signature of a copy-paste of the wrong gloss. This is the sharpest defect in my remit, but the correct positive form cannot be sourced offline with confidence, so I do **not** propose a value.

---

### 2. `myp` — moon — lone vowel-length mark `ː` in an otherwise length-free Pirahã column
- **File:** words/moon.js line 863
- **Current:** `["kapiigaísao", "kapiːɡaísao"]`
- **Expected:** `["kapiigaísao", "kapiiɡaísao"]`
- **Why:** This is the **only** cell in the entire 20-word `myp` column that uses a length mark `ː`. Pirahã is canonically analysed as having no contrastive vowel length — its prosody is carried by tone, not quantity (Everett 1986). Every other Pirahã "double vowel" in the corpus is written as two vowel letters, never collapsed to `Vː`: `piigi`→`piiɡi` (water.js:857), `aoʔaago`→`aoʔaaɡo` (good.js:857 / heart.js:857), `kaiʔii`→`kaiʔii` (house.js:864), `ʔaaí`→`ʔaaí` (mother.js:863), and crucially the sibling `kapii-` form `kapiíhií`→`kapiíhií` (thanks.js:857) keeps `ii` uncollapsed. Only `moon` rewrites the same `ii` sequence as `iː`. Conform to the column's own convention (`ii`), removing the spurious length symbol.

---

### 3. `roo` — sun — word-initial rhotic transcribed `r` where the Rotokas column uses the tap `ɾ` everywhere else
- **File:** words/sun.js line 965
- **Current:** `["ravireo", "raβiɾeo"]`
- **Expected:** `["ravireo", "ɾaβiɾeo"]`
- **Why:** Rotokas has a single liquid phoneme, the tap /ɾ/ (with [l]~[ɾ]~[n] allophony), and the corpus consistently writes ⟨r⟩ as `ɾ`: `rekoreko`→`ɾekoɾeko` (good.js:959), `kekira`→`kekiɾa` (moon.js:965), `osireito`→`osiɾeito` (eye.js:959), `erava`→`eɾaβa` (fire.js:965), and even the **medial** ⟨r⟩ of this very word is `ɾ` (`…iɾeo`). Only the **initial** ⟨r⟩ of `ravireo` is left as plain alveolar `r`. One word, two symbols for one phoneme — fix the n=1 outlier to `ɾ`. (The ⟨v⟩→`β` mappings in the same cell are correct: Rotokas ⟨v⟩ is the voiced bilabial fricative /β/.)

---

### 4. `arn` — rhotic — Mapudungun ⟨r⟩ is the retroflex approximant /ɻ/, not the alveolar tap /ɾ/
- **File:** words/hello.js line 634 and words/house.js line 648
- **Current:** `hello: ["mari mari", "maɾi maɾi"]` and `house: ["ruka", "ɾuka"]`
- **Expected:** `hello: ["mari mari", "maɻi maɻi"]` and `house: ["ruka", "ɻuka"]`
- **Why:** The standard Mapudungun rhotic is the **voiced retroflex (central) approximant /ɻ/** (allophonically a retroflex fricative [ʐ]); the alveolar tap /ɾ/ is not part of the inventory (Sadowsky, Painequeo, Salamanca & Avelino 2013, _JIPA_ "Mapudungun," consonant chart and accompanying recordings; Smeets 2008). Using `ɾ` imports a phoneme the language lacks. This is also internally incongruent: the column already commits to retroflex symbols for Mapudungun's other retroflexes — `trewa`→`ʈʂewa` (dog.js:641) and `kütral`→`kɨʈʂal` (fire.js:647) — so the rhotic should likewise be retroflex `ɻ`. Both `arn` cells containing ⟨r⟩ are affected.

---

### 5. `wba` — heart — plain ⟨n⟩ palatalized to /ɲ/ against the rest of the Warao column
- **File:** words/heart.js line 855
- **Current:** `["obonona", "oboɲoɲa"]`
- **Expected:** `["obonona", "obonona"]`
- **Why:** The surface `obonona` is written with plain ⟨n⟩, yet the IPA palatalizes **both** to /ɲ/ — the only cell in the `wba` column to do so. Everywhere else the corpus maps Warao ⟨n⟩ to the alveolar /n/: `dani`→`dani` (mother.js:861), `waniku`→`waniku` (moon.js:861), `hanoko`→`hanoko` (house.js:862), `aurahu`/`anaubu`→`…n…` (dog/love). Warao's palatal nasal is a distinct grapheme (⟨ñ⟩), and Romero-Figueroa (1997) writes this 'heart/mind' word with plain /n/ (cf. *obonóna* 'heart, will, mind'). The /ɲɲ/ rendering is an unsourced palatalization of two ordinary /n/ segments; bring the IPA into line with both the surface and the column.

---

### 6. `sad` — fire — surface ⟨cʼoo⟩ is the lone ⟨c⟩ spelling where the Sandawe column writes the ejective affricate ⟨tsʼ⟩
- **File:** words/fire.js line 953
- **Current:** `["cʼoo", "tsʼoː"]`
- **Expected:** `["tsʼoo", "tsʼoː"]`
- **Why:** The IPA cell already (correctly) identifies the onset as the ejective alveolar affricate /tsʼ/, and the practical Sandawe orthography (Eaton 2006; Steeman 2012) writes that segment ⟨tsʼ⟩ — there is no ⟨c⟩ grapheme for it. The rest of the `sad` column is uniform on this: `tsʼekʼe` (one.js:953), `hetsʼee` (tree.js:947), `tsʼa` (water.js:947), `musʼokoyo` (thanks.js:947), `tsoa` (moon.js:953). Only `fire` spells the onset ⟨cʼ⟩. Since the IPA is right and only the surface is the n=1 outlier, normalise the surface to `tsʼoo`.

---

### 7. `pbb` — sun — surface ⟨k⟩ vs IPA /ɡ/ disagree on voicing (NEEDS HUMAN LINGUIST)
- **File:** words/sun.js line 645
- **Current:** `["sek", "seɡ"]`
- **Expected:** either `["sek", "sek"]` or a sourced voiced spelling — **flag for a Nasa Yuwe specialist (Rojas Curieux et al. 1991)**
- **Why:** The surface writes a voiceless final ⟨k⟩ but the IPA gives voiced /ɡ/, and the two should not contradict each other. The rest of the `pbb` column keeps final voiceless obstruents voiceless and treats ⟨k⟩ as /k(ʰ)/: `ɨkh`→`ɨkʰ` (water.js:639), `ipx`→`ipʰ` (fire.js:645), and final ⟨t⟩ stays /t/ in `yat`→`jat` (house.js:646) and `tata`→`tata` (father.js:639). Nasa Yuwe does have a voiced/voiceless stop alternation, so the /ɡ/ may reflect a real intervocalic/final voicing rule — but as it stands the cell is the only voicing mismatch in the column and cannot be adjudicated offline. Flagging for a human linguist to either devoice the IPA to match ⟨k⟩ or change the surface to ⟨g⟩.

---

### 8. `bsk` — thanks — Urdu loan `shukria` breaks the column's retroflex-sibilant treatment (and is non-native)
- **File:** words/thanks.js line 940
- **Current:** `["shukria", "ʃukrija"]`
- **Expected:** confirm intended form; if retained, at minimum reconcile the sibilant — **flag for a Burushaski specialist (Berger 1998)**
- **Why:** Two linked problems. (a) `shukria` is the **Urdu/Persian loanword** *šukriyā* (شکریہ) 'thanks', not a native Burushaski expression of gratitude — worth a maintainer note, since neighbouring loan-greetings elsewhere in the corpus are usually flagged. (b) The IPA renders the sibilant as postalveolar /ʃ/, but **every other** `bsk` cell maps the ⟨sh⟩/⟨š⟩ grapheme to the **retroflex** /ʂ/: `bushi`→`buʂi` (cat.js:940), `shua`→`ʂua` (good.js:940), `šuá`→`ʂuaː` (hello.js:940), `ši-`→`ʂi` (eat.js:933). Burushaski's plain sibilant in these is retroflex /ʂ/; `thanks` is the sole /ʃ/ in the column. If the loanword is kept, the sibilant treatment should be reconciled with the column (or explicitly justified as preserving the donor-language /ʃ/). Flagged rather than auto-changed because the form is a loan and the donor pronunciation is defensible.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

- **145-1 ykg/yux hand `neme`**: HELD. Reviewer flagged NEEDS HUMAN LINGUIST; `neme`(нэмэ) is indeed the Yukaghir interrogative 'what'. No reliable 'hand/arm' lexeme sourceable offline (Nikolaeva 2006 / Maslova 2003 not available here). Recommend reviewer escalate to a human linguist; do not auto-fill.
- **145-2 myp moon IPA `kapiːɡaísao`→`kapiiɡaísao`**: APPLIED (applied by orchestrator this round). Removes the lone vowel-length mark in the length-free Pirahã column; conforms to `ii` convention used elsewhere (water `piiɡi`, thanks `kapiíhií`).
- **145-3 roo sun IPA `raβiɾeo`→`ɾaβiɾeo`**: APPLIED (applied by orchestrator this round). Word-initial ⟨r⟩ normalized to tap /ɾ/, matching the rest of the Rotokas column (medial ⟨r⟩ already `ɾ`).
- **145-4 arn hello/house rhotic `ɾ`→`ɻ`**: APPLIED (applied by orchestrator this round). hello `maɾi maɾi`→`maɻi maɻi`, house `ɾuka`→`ɻuka`. Mapudungun ⟨r⟩ is the retroflex approximant /ɻ/, not /ɾ/ (Sadowsky, Painequeo, Salamanca & Avelino 2013 JIPA); internally consistent with the column's other retroflexes (`ʈʂewa`, `kɨʈʂal`). Surface forms unchanged.
- **145-5 wba heart IPA `oboɲoɲa`→`obonona`**: APPLIED (applied by orchestrator this round). Removes the lone /ɲ/ palatalization; surface `obonona` has plain ⟨n⟩ and the column maps ⟨n⟩→/n/ everywhere else.
- **145-6 sad fire surface `cʼoo`→`tsʼoo`**: APPLIED (applied by orchestrator this round). IPA already `tsʼoː`; surface normalized to the column's ⟨tsʼ⟩ grapheme (one.js `tsʼekʼe`, tree.js `hetsʼee`, water.js `tsʼa`). IPA unchanged.
- **145-7 pbb sun `sek`/`seɡ` voicing mismatch**: HELD. Reviewer flagged NEEDS HUMAN LINGUIST; Nasa Yuwe has a real voiced/voiceless alternation so the /ɡ/ may reflect a final-voicing rule. Cannot adjudicate offline (Rojas Curieux et al. 1991 unavailable). Recommend reviewer route to a Nasa Yuwe specialist.
- **145-8 bsk thanks `shukria`/`ʃukrija`**: HELD. Reviewer explicitly flagged rather than auto-changed (loanword form + donor-pronunciation /ʃ/ defensible). The native-greeting demand is unsourceable offline with confidence, and the reviewer did not endorse a specific replacement. Recommend reviewer decide: keep with a documented loanword caveat, or supply a sourced native gratitude form.

## Reviewer round-2 response (再評価 round-2)

I re-verified every claimed value verbatim against the live `words/*.js` files on 2026-06-11 (grep, line numbers below). Per-item judgements:

- **145-1 ykg/yux hand `neme` (NEEDS HUMAN LINGUIST)** — △ ACCEPTED AS DOCUMENTED LIMITATION. Live data unchanged (hand.js:141–142 still `["нэмэ","neme"]` for both). This was always flagged as needing a human linguist; the dev team confirms `neme`=interrogative 'what' and reports no offline-sourceable Yukaghir 'hand' lexeme (Nikolaeva 2006 / Maslova 2003 unavailable here). Per loop-termination rule, I do not keep this open as an impossible demand. **Known limitation: the `neme` cells are almost certainly the wrong gloss (wh-word, byte-identical across two otherwise-divergent isolates) and need a human Yukaghirist to supply the correct 'hand/arm' form.** Carried as a documented caveat, not a blocker.

- **145-2 myp moon** — ✓ ACCEPT. Verified moon.js:863 = `["kapiigaísao", "kapiiɡaísao"]`. Lone `ː` removed; conforms to the length-free Pirahã column convention (`ii`).

- **145-3 roo sun** — ✓ ACCEPT. Verified sun.js:965 = `["ravireo", "ɾaβiɾeo"]`. Initial ⟨r⟩ now tap /ɾ/, matching the rest of the Rotokas column.

- **145-4 arn hello/house** — ✓ ACCEPT. Verified hello.js:634 = `["mari mari", "maɻi maɻi"]` and house.js:648 = `["ruka", "ɻuka"]`. Rhotic now retroflex approximant /ɻ/ (Sadowsky et al. 2013), internally consistent with the column's other retroflexes. Surfaces unchanged, correct.

- **145-5 wba heart** — ✓ ACCEPT. Verified heart.js:855 = `["obonona", "obonona"]`. Spurious /ɲɲ/ palatalization removed; IPA now matches both surface and the column's ⟨n⟩→/n/ mapping.

- **145-6 sad fire** — ✓ ACCEPT. Verified fire.js:953 = `["tsʼoo", "tsʼoː"]`. Surface onset normalized to ⟨tsʼ⟩, matching the column; IPA unchanged and correct.

- **145-7 pbb sun `sek`/`seɡ` (NEEDS HUMAN LINGUIST)** — △ ACCEPTED AS DOCUMENTED LIMITATION. Live data unchanged (sun.js:645 still `["sek","seɡ"]`). This was flagged from the outset as un-adjudicable offline. Nasa Yuwe genuinely has a voiced/voiceless stop alternation, so the final /ɡ/ may reflect a real voicing rule rather than an error; without Rojas Curieux et al. (1991) it cannot be resolved here. Per loop-termination, not held open. **Known limitation: surface ⟨k⟩ vs IPA /ɡ/ voicing mismatch; a Nasa Yuwe specialist should either devoice the IPA or revise the surface.**

- **145-8 bsk thanks `shukria`/`ʃukrija`** — △ ACCEPTED (won't-fix as defensible). Live data unchanged (thanks.js:940 = `["shukria","ʃukrija"]`). On reflection I accept the dev team's position: `shukria` is the widely-used Urdu/Persian loan for 'thanks' in the region, and rendering the donor sibilant as postalveolar /ʃ/ (rather than coercing it to native retroflex /ʂ/) is a defensible loanword-faithful choice. This is a system-level convention call, not a clear error. No further action required, though a maintainer note that this is a loan would be a nice-to-have.

### New issues
None. Verification of all five applied cells found exact, correct values; no collateral errors spotted in the surrounding cells.

### Scorecard
- Applied & verified in live data: 145-2, 145-3, 145-4 (×2 cells), 145-5, 145-6 — 5 of 5 claimed fixes confirmed present and correct.
- Accepted as documented limitation (unsourceable offline, human linguist needed): 145-1, 145-7.
- Accepted as defensible convention (won't-fix): 145-8.
- Missing/false "applied" claims: 0.
- New issues: 0.

All clear, offline-fixable errors are fixed-and-verified. The three remaining items are either documented known-limitations requiring a human linguist (145-1, 145-7) or a defensible loanword convention (145-8) — none is a concretely actionable next step the dev team has not genuinely attempted. Per the round-2 loop-termination rule, I close rather than demand the impossible.

**File status: CLOSED** — nothing left to address.
