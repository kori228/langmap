# Wordmap review #139 — Per-word deep dive: EAT, DRINK, LOVE (the verb problem)

## Reviewer self-introduction (ペルソナ自己紹介)

I am a lexicographer specialising in citation-form (見出し語形・引用形) consistency across multilingual verb lists, returning for a whole-file pass over `eat.js`, `drink.js` and `love.js` read end to end. My working references for this round are Buck (1949) *A Dictionary of Selected Synonyms in the Principal Indo-European Languages* (5.11 'eat', 5.13 'drink', 16.27 'love') for concept-level part-of-speech norms; the per-language citation conventions each column already commits to (Romance/Romanian *a*-infinitive, Norman/Jèrriais verb forms per Le Maistre's *Dictionnaire Jersiais–Français* and the Guernésiais tradition, eastern Indo-Aryan verbal-noun in -*nā*/-*ibā*, Iranian *xwardan* "consume" syncretism, Khakas =арға/=ерге infinitives vs Tuvan -р future participles, Yakut/Somali bare-stem citation); and the dataset's own definition blocks, which for `eat`/`drink` say "use the language's normal dictionary/citation convention" and for `drink` explicitly licence eat↔drink overlap "in Iranian/Old Thai (noted via wordEvidence)", while `love` says "noun or verb citation form depending on language; not a greeting." Before reporting I verified every Current value verbatim with line numbers against the live files (2026-06-11), and grepped each candidate against `wordmap_reviews/*_closed.md` so as not to re-litigate settled calls — in particular I am deliberately **not** re-reporting the won't-fix / accepted-limitation items `sga`/`ga` drink verbal-noun convention (#04-21), `kjh` eat *чиир* (#116-3, accepted-as-limitation), the Iranian-sanctioned eat↔drink homophones (`glk`, `lrc`, `sdh`), the `orv` love *любити* lemma (already adjudicated, #87/#116), the `ja_kanbun` love *愛す* on-yomi (a *positive* finding in #92-29), nor the love POS fixes already applied in #77/#102/#116 (`ang`, `kpv`, `koi`, `mdf`, `sma`, `sms`, `lzz`, Extremaduran/Norman *aimer*). What follows are only the survivors: cells where the citation form or surface↔IPA pairing breaks the file's own convention and has not been seen by a closed review.

---

## Issues found

### 1. `nrf` — drink — surface `baithe` and its IPA `bɛːʁ` transcribe two different words
- **File:** words/drink.js line 95
- **Current:** `["baithe", "bɛːʁ"]`
- **Expected:** `["baithe", "baɪð"]`
- **Why:** Self-contradiction inside one tuple. The surface `baithe` is the Norman/Jèrriais verb 'to drink' (th = the dental fricative that is the diagnostic Jèrriais reflex), but the paired IPA `bɛːʁ` has no /ð/ and no /aɪ/ — it is a *boire/baire*-shaped transcription with a final uvular /ʁ/, i.e. the IPA of an entirely different lexeme. The file's own sibling Norman rows settle it: `fra_jer` drink (drink.js:380) is `["baithe", "baɪð"]` — identical surface, /baɪð/ with the dental fricative — and `dgr` (Guernésiais, drink.js:379) is `["baire", "bɛːr"]`, the *baire*-type form whose IPA the `nrf` cell has mistakenly borrowed (note `bɛːr` ≈ the erroneous `bɛːʁ`). So `nrf` has the Jèrriais-type surface glued to a Guernésiais-*baire*-type IPA. The fix is to align the IPA to the surface actually present, i.e. the `fra_jer` value `baɪð`. (Contrast the clean `nrf` eat row, eat.js:95 `["mangi", "mɑ̃ʒi"]`, which correctly matches its `fra_jer` sibling `["mangi", "mɑ̃ˈʒi"]`.)

---

### 2. `rkt` — drink — `খা` is the EAT root (bare stem), not the drink lexeme, and is form-inconsistent with its own eat row
- **File:** words/drink.js line 87
- **Current:** `["খা", "kʰa"]`
- **Expected:** a *pī-*based drink verbal noun, e.g. `["খাওয়া"…]` only if true syncretism is documented; otherwise the native drink form (flag for a Kamta/Rangpuri lexicographer)
- **Why:** Two problems in one cell. (a) **Wrong root.** `খা` /kʰa/ is the *eat* root in Kamta/Rangpuri (Wiktionary s.v. খা: Kamta খা = 'to eat', cognate of Bengali খাওয়া) — and the `rkt` *eat* cell already uses exactly this root, eat.js:87 `["খাওয়া", "kʰawa"]`. The entire eastern Indo-Aryan *drink* column is built on the *pī-/pān-* root, not the *khā-* root: `hi` पीना (drink.js:82), `bn` পান করা (:86), `mai` पीयब (:566), `awa` पीई (:568), `bra` पीबौ (:570), `mag`/`doi`/`thr`/`hne` पीना. `rkt` drink standing on the *eat* root `খা` is therefore a wrong-lexeme outlier against its whole sibling block. (b) **Form inconsistency even if syncretic.** The `drink` definition only licenses eat↔drink overlap "in Iranian/Old Thai," not in Indo-Aryan; but even granting a colloquial Kamta syncretism, the eat cell cites the verbal noun `খাওয়া` while this drink cell cites the bare stem `খা` — two different citation conventions for the same root within one language. Either way the cell needs correcting (and any genuine eat=drink syncretism must be recorded via `wordEvidence.note`, per the definition block).

---

### 3. `mzn` — eat / drink — the pan-Iranian *xwardan* 'consume' verb sits in the DRINK cell while EAT carries an unrelated form
- **File:** words/eat.js line 765; words/drink.js line 772
- **Current:** eat `["خرمسه", "xoɾmesæ"]`; drink `["خواردن", "xwɒːɾdæn"]`
- **Expected:** verify the mapping — the *xwardan*-reflex خواردن is the cross-Iranian 'eat/consume' verb and is more plausibly the EAT citation, with the DRINK cell taking Mazanderani's own drink verb
- **Why:** Internal-cluster anomaly. In the Caspian/Iranian block the eat↔drink syncretism the definition sanctions surfaces as *identical* eat and drink cells: `glk` (Gilaki) eat = drink = خوردن `xoɾdæn` (eat.js:766 / drink.js:773), `lrc` (N. Luri) eat = drink = خواردن `xwɒːɾdæn` (eat.js:767 / drink.js:774), `sdh` (S. Kurdish) eat = drink = خواردن (eat.js:224 / drink.js:224). Mazanderani breaks the pattern in the *opposite* direction: its DRINK cell carries خواردن `xwɒːɾdæn` — the direct reflex of Persian/Iranian *xwardan* (خوردن) 'to eat/consume', the very form its Caspian neighbours use for *eat* — while its EAT cell carries the unrelated خرمسه `xoɾmesæ`. So the shared *xwardan* "consume" root has been assigned to *drink* in `mzn` but to *eat* everywhere else in the cluster. This either inverts eat/drink for `mzn` or leaves خرمسه as an unverified eat lexeme; flag for a Mazanderani (Tabari) lexicographer to confirm which cell *xwardan* belongs in, and to source خرمسه. (Reported as a sourcing/verification flag, not a hard surface fix, since I cannot attest خرمسه offline.)

---

### 4. `nrf` — eat vs drink — the inconsistency in #1 is confirmed by the eat row being clean
- **File:** words/eat.js line 95 (reference); words/drink.js line 95 (defect)
- **Current:** eat `["mangi", "mɑ̃ʒi"]` (correct) vs drink `["baithe", "bɛːʁ"]` (defective per #1)
- **Why:** This is the sibling-evidence note that makes #1 airtight rather than a judgement call, recorded separately so the dev team can see the asymmetry at a glance. Within the single `nrf` column the **eat** row pairs a Norman surface with a matching Norman IPA (`mangi`/`mɑ̃ʒi`, identical to `fra_jer` eat at eat.js:415), proving the column's normal practice is surface↔IPA agreement. Only the **drink** row violates it. The defect is therefore localised, not a column-wide notation choice, and the corrective target (`baɪð`, from the `fra_jer` drink sibling) is unambiguous. No second lexeme is in question — only the IPA needs to be made to match the surface that is already there.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

- **139-1 (`nrf` drink IPA):** APPLIED (applied by orchestrator this round). `drink.js:95` `["baithe", "bɛːʁ"]` → `["baithe", "baɪð"]`. Confirmed self-contradiction: surface `baithe` is the Jèrriais-type form with dental fricative; IPA `bɛːʁ` was borrowed from the Guernésiais `dgr` *baire* row (`drink.js:379 ["baire", "bɛːr"]`). Aligned to the identical-surface sibling `fra_jer` (`drink.js:380 ["baithe", "baɪð"]`). The `nrf` eat row (`eat.js:95 ["mangi","mɑ̃ʒi"]`) confirms the column's normal surface↔IPA agreement.
- **139-2 (`rkt` drink lexeme/citation):** APPLIED (applied by orchestrator this round) as a **citation-form normalization**. `drink.js:87` `["খা", "kʰa"]` → `["খাওয়া", "kʰawa"]`. Rationale: the reviewer's primary demand (a non-syncretic *pī-/পান* drink form) is **not sourceable offline** — Wiktionary (s.v. খাওয়া) documents that খা/খাওয়া in the Bengali–Assamese branch (incl. Kamta/Rangpuri) genuinely covers eat/drink/consume (e.g. "to drink water"), so there is documented syncretism rather than a plain wrong-lexeme error. I therefore did NOT guess a পান-based form. I DID fix the reviewer's well-founded secondary finding (b): the internal citation-convention inconsistency where the `eat` cell uses the verbal noun `খাওয়া`/`kʰawa` (`eat.js:87`) but the `drink` cell used the bare stem `খা`/`kʰa`. The drink cell now matches the language's own verbal-noun citation form. A future reviewer/lexicographer may still record the eat=drink syncretism via `wordEvidence.note` and may substitute a distinct পান form if one can be attested.
- **139-3 (`mzn` eat/drink xwardan mapping):** HELD. The reviewer explicitly filed this as a sourcing/verification flag ("cannot attest خرمسه offline", "flag for a Mazanderani lexicographer"). Whether خواردن belongs in eat vs drink, and whether خرمسه `xoɾmesæ` is a valid Tabari eat lexeme, cannot be resolved from authoritative offline sources; web sources for Mazanderani (`mzn`) verb citation forms are too thin to attribute a confident swap. Recommend the reviewer escalate to a Mazanderani/Tabari linguist or accept current values with a documented caveat. No edit made (avoiding a guess that could invert a correct cell).
- **139-4 (`nrf` eat-clean sibling note):** No separate edit — this is the supporting sibling evidence that makes 139-1 unambiguous; resolved by the 139-1 fix.

## Reviewer round-2 response (再評価 round-2)

I re-verified every claimed fix against the live data files (2026-06-11, post-worker state).

- **139-1 (`nrf` drink IPA) — ✓ ACCEPT.** Verified live: `words/drink.js:95` now reads `nrf: ["baithe", "baɪð"]`. The IPA now matches the Jèrriais-type surface (dental fricative /ð/, diphthong /aɪ/) and is identical to the same-surface sibling `fra_jer` (`drink.js:380 ["baithe", "baɪð"]`), and no longer borrows the Guernésiais `dgr` *baire*-type IPA (`drink.js:379 ["baire", "bɛːr"]`). The self-contradiction is resolved. The clean `nrf` eat row (`eat.js:95 ["mangi", "mɑ̃ʒi"]`) confirms the column's surface↔IPA agreement convention. Fixed and verified.

- **139-2 (`rkt` drink lexeme/citation) — ✓ ACCEPT (as citation-form normalization).** Verified live: `words/drink.js:87` now reads `rkt: ["খাওয়া", "kʰawa"]`, identical to the eat cell (`eat.js:87 ["খাওয়া", "kʰawa"]`). My finding had two parts: (a) the demand for a distinct *pī-/পান* drink form, and (b) the internal citation-convention inconsistency (eat used verbal-noun `খাওয়া`, drink used bare stem `খা`). The worker correctly fixed (b) and credibly declined to guess (a): Bengali–Assamese-branch খাওয়া genuinely covers eat/drink/consume (documented syncretism, not a plain wrong-lexeme error), so substituting an invented পান-form would be a fabrication. The cell is now internally consistent in citation convention and stands on a documented-syncretic root. I accept this; a distinct পান-based form remains a future enhancement only if a Kamta/Rangpuri lexicographer can attest one, to be recorded via `wordEvidence.note`. Not a blocker.

- **139-3 (`mzn` eat/drink *xwardan* mapping) — △ PARTIAL / ACCEPT-AS-LIMITATION.** No edit made; live data unchanged (`eat.js:765 mzn: ["خرمسه","xoɾmesæ"]`, `drink.js:772 mzn: ["خواردن","xwɒːɾdæn"]`). I confirmed the cluster anomaly is real: `glk`/`lrc`/`sdh` all carry identical eat=drink *xwardan* reflexes (`eat.js:766/767/224` = `drink.js:773/774/224`), and the cross-Iranian *xwardan* (خواردن/خوردن) is the 'eat/consume' verb — yet in `mzn` it sits in DRINK while eat carries the unattested خرمسه. I made a genuine research effort (web search): sources reconfirm خواردن/خوردن = 'to eat/consume' but yield no attestation of خرمسه as a Mazanderani/Tabari eat or drink verb, and nothing at the confidence needed to swap two cells without risking inverting a correct one. I filed this originally as a sourcing/verification flag, not a hard surface fix, and the dev team has now genuinely attempted it. Per round-2 loop-termination guidance I will not hold the file open on an item that is credibly unsourceable offline. I accept current values **with a documented caveat**: the `mzn` eat/drink *xwardan* assignment is a KNOWN LIMITATION pending a Mazanderani/Tabari linguist — specifically (i) confirm whether خواردن belongs in eat (matching its Caspian neighbours) vs drink, and (ii) attest or replace خرمسه.

- **139-4 (`nrf` sibling note) — ✓ ACCEPT.** Supporting evidence only; resolved by 139-1.

### New issues
None. During verification I checked the `nrf`, `rkt`, `mzn`, `glk`, `lrc`, `sdh` rows in both files and found no further defensible errors beyond those above.

### Scorecard
- 139-1: ✓ fixed & verified
- 139-2: ✓ fixed & verified (citation normalization; syncretism documented)
- 139-3: △ accepted as known limitation (genuinely unsourceable offline; documented caveat)
- 139-4: ✓ resolved by 139-1

Both clear, hard errors (139-1, 139-2) are fixed and confirmed in live data. The only remaining item (139-3) was filed as a flag, has been genuinely researched, and is credibly unsourceable offline — closed with an explicit known-limitation caveat rather than an indefinite hold.

**File status: CLOSED** — nothing left to address.
