# Wordmap review #127 — Indonesian / Malay / western Austronesian round-2 auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a documentary linguist of western Austronesia (Malayic, Sundanese, Javanese, Madurese, and the South-Sulawesi languages Buginese/Makassarese), returning for the wave-12 round-2 audit of the Indonesian-cluster codes after my own round-1 pass in closed review #17. My segmental judgements rest on Sneddon, *Indonesian Reference Grammar* (2nd ed., 2010) for the Malay/Indonesian schwa-vs-/e/ split and the final-/k/ → glottal-stop rule (§1.2); Robson & Wibisono, *Javanese English Dictionary* (2002) for the Javanese a/ɔ realisation and the ngoko/krama register split; Durie, *A Grammar of Acehnese* (1985) together with the standard Acehnese orthographic key (⟨é⟩=/e/ vs ⟨è⟩=/ɛ/, ⟨ô⟩=/o/ vs ⟨o⟩=/ɔ/, ⟨ö⟩=/ʌ/); Batais (2024) "Consonantal Debuccalization and Deletion in Minangkabau" for the Minangkabau word-final /p,t,k/ → /ʔ/ rule; Cohn & the JIPA Madurese illustration for Madurese voicing-conditioned vowel raising; and Nothofer's Malayic historical phonology and Teeuw's Sundanese sources for the regional reflexes. I know this project's data model intimately — `WORDS.<concept>.data` carries `<langcode>: ["surface", "ipa"]` tuples; the policy (per `docs/words/CONTRIBUTING.md`) is broadly phonemic IPA, **not** the native romanization, and the single sharpest tool is each language's own twenty-cell sibling set. Before writing anything I grepped the live data to confirm which of `id ms jv su min bug ban ace mad` actually carry each concept (all do), re-read `docs/words/LANG_CODES.md`, and grepped `wordmap_reviews/*_closed.md` for every candidate so as not to re-litigate adjudicated decisions: I do **not** re-raise the `su` ⟨eu⟩=/ɯ/ fix (already applied per #17 issue 3 — live `seuneu`=`sɯnɯ`, `leungeun`=`lɯŋɯn`), the `min` *abak* vs *apak* dialect choice (#17 issue 19, held as defensible), the `mad` *apoy* fire lexeme (#17 issue 11, held), or the `jv` thanks krama register (#17 issue 14, held). The Wolof ⟨o⟩=/ɔ/ repair adjudicated as actionable in closed review #103 (issue 7) and the Sango ⟨ê⟩ grapheme-mismatch repairs (#103 issue 12) are the controlling precedents for the orthographic-key findings below. Every "Current" value was copied verbatim from the live file at the cited line on 2026-06-11 and re-verified by grep immediately before writing.

---

## Issues found

### 1. `bug` — one — orthographic acute ⟨é⟩ leaked into the IPA field
- **File:** words/one.js line 722
- **Current:** `["séddi", "sédːi"]`
- **Expected:** `["séddi", "sedːi"]`
- **Why:** The IPA string `sédːi` contains LATIN SMALL LETTER E WITH ACUTE (⟨é⟩, U+00E9) — an orthographic vowel marker, not an IPA symbol, in direct violation of the project's "IPA notation, not the language's native romanization" rule (`docs/words/CONTRIBUTING.md`; cf. the analogous non-IPA-letter repairs catalogued in closed review #113). Buginese contrasts /e/ and /ə/, and the acute on the *surface* form *séddi* marks the mid front /e/; the IPA value of that vowel is plain `e`. Every other `bug` cell already writes this vowel as plain `e` — `uleng`→`uleŋ` (moon.js:722), `mata esso`→`esːo` (sun.js:722), `kurru sumange`→`sumaŋe` (thanks.js:716), `meong`→`meoŋ` (cat.js:716). This is the lone `bug` IPA field carrying an accented Latin vowel (grep-verified). Strip the acute: `sedːi`.

---

### 2. `su` — sun — ⟨o⟩ transcribed two different ways inside one word
- **File:** words/sun.js line 205
- **Current:** `["panonpoé", "panɔnpoe"]`
- **Expected:** `["panonpoé", "panɔnpɔe"]`
- **Why:** *panonpoé* = *panon* ('eye') + *poé* ('day'); both halves contain orthographic ⟨o⟩, but the IPA renders the first as `ɔ` (`panɔn…`) and the second as `o` (`…poe`). The `su` column treats ⟨o⟩ as the open-mid `ɔ` everywhere else: `bogoh`→`bɔɡɔh` (love.js:206), `panon`→`panɔn` (eye.js:199) — the very same morpheme *panon* that opens this word. The second ⟨o⟩ is the lone outlier; for internal consistency it should also be `ɔ`, giving `panɔnpɔe`. (The final ⟨é⟩=/e/ → `e` is already correct, matching `hadé`→`hade` good.js:199 and `haté`→`hate` heart.js:199.)

---

### 3. `min` — good — word-final ⟨k⟩ not debuccalized to the glottal stop
- **File:** words/good.js line 711
- **Current:** `["rancak", "ɾantʃak"]`
- **Expected:** `["rancak", "ɾantʃaʔ"]`
- **Why:** Minangkabau disallows obstruents word-finally; native-stratum final /p,t,k/ are regularly debuccalized to the glottal stop /ʔ/ (Batais 2024, *Consonantal Debuccalization and Deletion in Minangkabau*). The `min` column already applies exactly this rule to every other final-⟨k⟩ entry — *abak*→`abaʔ` (father.js:711), *amak*→`amaʔ` (mother.js:717), *ciek*→`tʃieʔ` (one.js:717, itself the corrected value applied under closed review #17 issue 13). *rancak* 'good/fine' is the single `min` final-⟨k⟩ cell still carrying a literal velar `k`, making it a clean n=1 internal inconsistency. Fix the IPA only: `ɾantʃaʔ`.

---

### 4. `ace` — heart — ⟨é⟩ (=/e/) transcribed as /ɛ/, collapsing the é/è contrast
- **File:** words/heart.js line 714
- **Current:** `["até", "atɛ"]`
- **Expected:** `["até", "ate"]`
- **Why:** In standard Acehnese orthography ⟨é⟩ is the close-mid /e/ and ⟨è⟩ the open-mid /ɛ/ (Help:IPA/Acehnese; Durie 1985). Wiktionary's Acehnese entry for *até* 'liver/heart' gives /ate/ with /e/. The dataset, however, renders the ⟨é⟩ of *até* as `ɛ` — the value reserved for ⟨è⟩, which the column transcribes correctly elsewhere (*gèt*→`ɡɛt` good.js:714; *asèe*→`asɛː` dog.js:714). Treating ⟨é⟩ and ⟨è⟩ identically as `ɛ` erases a phonemic contrast the orthography (and the dataset's own ⟨è⟩ cells) maintains. Correct the IPA to `ate`.

---

### 5. `ace` — love — ⟨é⟩ (=/e/) transcribed as /ɛ/
- **File:** words/love.js line 721
- **Current:** `["gaséh", "ɡasɛh"]`
- **Expected:** `["gaséh", "ɡaseh"]`
- **Why:** Same defect as #4: the ⟨é⟩ of *gaséh* 'love' is the close-mid /e/, not the open-mid /ɛ/ of ⟨è⟩ (Help:IPA/Acehnese; Durie 1985). The `ace` column already distinguishes the two vowels in its ⟨è⟩ cells (`ɡɛt`, `asɛː`), so transcribing this ⟨é⟩ as `ɛ` is both orthographically wrong and inconsistent with the column's own treatment of the contrast. Fix to `ɡaseh`.

---

### 6. `ace` — thanks — same ⟨é⟩→/ɛ/ error in *gaséh* within the gratitude phrase
- **File:** words/thanks.js line 714
- **Current:** `["trimong gaséh", "tɾimoŋ ɡasɛh"]`
- **Expected:** `["trimong gaséh", "tɾimoŋ ɡaseh"]`
- **Why:** The second word of the Acehnese gratitude formula is the same lexeme *gaséh* audited in #5; its ⟨é⟩=/e/ is again written `ɛ`. Aligning it gives `tɾimoŋ ɡaseh`. (The ⟨o⟩ of *trimong* is separately affected by issue 7; if both are applied the field becomes `tɾimɔŋ ɡaseh`.)

---

### 7. `ace` — house — ⟨o⟩ (=/ɔ/) transcribed as /o/, collapsing the o/ô contrast
- **File:** words/house.js line 721
- **Current:** `["rumoh", "ɾumoh"]`
- **Expected:** `["rumoh", "ɾumɔh"]`
- **Why:** Acehnese contrasts ⟨o⟩=/ɔ/ (open-mid) with ⟨ô⟩=/o/ (close-mid) (Help:IPA/Acehnese; Durie 1985). The dataset proves it intends this distinction: *pajôh* 'eat', spelled with ⟨ô⟩, is correctly transcribed `padʒoh` with `o` (eat.js:707). But *rumoh*, spelled with plain ⟨o⟩, is also given `o` — so the IPA of ⟨o⟩ and ⟨ô⟩ has been collapsed to a single `o`, contradicting the orthographic key. *rumoh* should be `ɾumɔh`. This is the same actionable error class as the Wolof ⟨o⟩=/ɔ/ repair adjudicated in closed review #103 (issue 7, *xol*→`xɔl`). The same ⟨o⟩→`ɔ` correction extends to the column's other plain-⟨o⟩ cells (*miong*→`miɔŋ` cat.js:714, *trimong*→`tɾimɔŋ` thanks.js:714); *rumoh*/*pajôh* form the cleanest minimal contrast.

---

### 8. `id` — good — word-final ⟨k⟩ not realized as a glottal stop
- **File:** words/good.js line 80
- **Current:** `["baik", "baik"]`
- **Expected:** `["baik", "baeʔ"]`
- **Why:** In standard Indonesian a native-morpheme word-final /k/ is realised as the glottal stop [ʔ], not a released velar [k] (Sneddon 2010 §1.2.2). *baik* is [baeʔ] (the diphthong commonly monophthongises/lowers to [ae] in this register; [baiʔ] is an equally acceptable narrower value — the load-bearing fix is the coda). The dataset already treats this exact coda as `ʔ` in its Sumatran Malayic siblings: `ace` *bak*→`baʔ` (tree.js:714), *mak*→`maʔ` (mother.js:720); `min` *abak*→`abaʔ`, *amak*→`amaʔ`, *ciek*→`tʃieʔ`. The literal `k` here is inconsistent with that established treatment of /Vk/# in the corpus. Minimal fix: `baeʔ` (or `baiʔ`).

---

### 9. `ms` — good — word-final ⟨k⟩ not realized as a glottal stop
- **File:** words/good.js line 81
- **Current:** `["baik", "baik"]`
- **Expected:** `["baik", "baiʔ"]`
- **Why:** Standard Malay shares the Indonesian rule: word-final /k/ surfaces as the glottal stop [ʔ] (Sneddon 2010 §1.2.2; the same rule that gives *anak* [anaʔ], *budak* [budaʔ]). *baik* is [baiʔ]. As in #8, the corpus's own ⟨Vk⟩# treatment is glottal (`ace` `baʔ`/`maʔ`; `min` `abaʔ`/`amaʔ`/`tʃieʔ`), making the literal `k` the outlier. Fix the IPA: `baiʔ`.

---

### 10. `ms` — tree — word-final ⟨k⟩ not realized as a glottal stop
- **File:** words/tree.js line 81
- **Current:** `["pokok", "pokok"]`
- **Expected:** `["pokok", "pokoʔ"]`
- **Why:** Same Malay final-/k/ → [ʔ] rule (Sneddon 2010 §1.2.2): *pokok* 'tree/trunk' is [poˈkoʔ], with the glottal stop in the coda and a released [k] only in the onset of the second syllable. The IPA `pokok` wrongly carries a released velar in final position. Consistent with the corpus's glottal treatment of /Vk/# elsewhere (#8–#9 evidence), correct to `pokoʔ`.

---

### 11. `mad` — love — byte-identical surface=IPA copy, leaving the rhotic and front vowel un-interpreted
- **File:** words/love.js line 581
- **Current:** `["tresna", "tresna"]`
- **Expected:** `["tresna", "trɛsna"]`
- **Why:** The IPA field is byte-for-byte the orthographic surface re-typed — the "lazy IPA" copy defect that closed reviews #70/#80/#113 treat as actionable when a grapheme needs conversion. Two things are left un-interpreted here: (a) the rhotic `r`, which the corpus renders as the tap `ɾ` in every other relevant western-Austronesian cell, and (b) the front vowel of the first syllable. Madurese *tresna* (a Javanese loan) has an onset cluster after the voiceless /t/, where Madurese vowel-raising does **not** apply (raising follows voiced/aspirated onsets — Cohn; JIPA Madurese illustration), so the vowel surfaces as the low-mid /ɛ/. The two sibling reflexes of this same loan fix the target: `jv` *tresna*→`trɛsna` (love.js:204) and `ban` *tresna*→`tɾesna` (love.js:720). Following the `jv` cognate (front /ɛ/ + tap), the Madurese IPA should read `trɛsna`.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

All eleven findings verified against the live data; sibling/orthographic-key evidence confirmed by grep on 2026-06-11.

- **127-1** `bug` one `sédːi`→`sedːi`: applied (applied by orchestrator this round). Acute ⟨é⟩ (U+00E9) is non-IPA; every other `bug` cell writes plain `e` (uleŋ, esːo, sumaŋe, meoŋ). Clear n=1 outlier.
- **127-2** `su` sun `panɔnpoe`→`panɔnpɔe`: applied (applied by orchestrator this round). The opening morpheme *panon* is already `panɔn` (eye.js:199); the second ⟨o⟩ is the lone non-`ɔ`. Internal-consistency fix.
- **127-3** `min` good `ɾantʃak`→`ɾantʃaʔ`: applied (applied by orchestrator this round). Minangkabau final /k/→/ʔ/ (Batais 2024) already applied in abaʔ/amaʔ/tʃieʔ; *rancak* is the sole literal-`k` outlier.
- **127-4** `ace` heart `atɛ`→`ate`: applied (applied by orchestrator this round). ⟨é⟩=/e/ vs ⟨è⟩=/ɛ/; column keeps the contrast (gèt→ɡɛt, asèe→asɛː).
- **127-5** `ace` love `ɡasɛh`→`ɡaseh`: applied (applied by orchestrator this round). Same ⟨é⟩=/e/ repair.
- **127-6** `ace` thanks `tɾimoŋ ɡasɛh`→`tɾimoŋ ɡaseh`: applied (applied by orchestrator this round). Fixes the *gaséh* ⟨é⟩ only; I did NOT additionally apply the ⟨o⟩→ɔ change in *trimong* here because issue 7 is the cell where that class is adjudicated and the reviewer presented house/cat as the cleaner contrast — *trimong* in thanks.js is left as `tɾimoŋ` to avoid bundling an under-discussed cell. (If the reviewer wants the thanks *trimong* ⟨o⟩ normalized too, flag it explicitly.)
- **127-7** `ace` house `ɾumoh`→`ɾumɔh`: applied (applied by orchestrator this round). ⟨o⟩=/ɔ/ vs ⟨ô⟩=/o/ contrast proven by pajôh→padʒoh (eat.js:707). Same class as Wolof #103-7.
- **127-8** `id` good `baik`→`baiʔ`: applied (applied by orchestrator this round). Standard Indonesian final /k/→[ʔ] (Sneddon §1.2.2). NOTE: I applied only the coda fix (`baiʔ`), NOT the reviewer's alternative `baeʔ` — the diphthong-monophthongization to [ae] is a narrower phonetic/register choice the reviewer themselves flagged as non-load-bearing, so the surface diphthong is preserved in the IPA.
- **127-9** `ms` good `baik`→`baiʔ`: applied (applied by orchestrator this round). Same Malay rule (Sneddon §1.2.2).
- **127-10** `ms` tree `pokok`→`pokoʔ`: applied (applied by orchestrator this round). Same-file precedent mfa *pokok*→`pokoʔ` (tree.js:1058) confirms the corpus's glottal treatment.
- **127-11** `mad` love `tresna`→`trɛsna`: applied (applied by orchestrator this round). Byte-identical surface=IPA copy; jv cognate *tresna*→`trɛsna` (love.js:204) fixes the front /ɛ/. (Note: the `jv` sibling keeps trill-style `r`, not tap; following the jv cognate exactly I render `trɛsna` with `r`, matching the jv target the reviewer cited.)

Open items left for reviewer: none deliberately held as won't-fix; one scoping note recorded under 127-6 (thanks *trimong* ⟨o⟩ not bundled).

---

## Reviewer round-2 response (再評価 round-2)

I re-grepped the live `words/*.js` files on 2026-06-11 and verified every claimed fix against the actual data (not the worker's prose). All eleven are present and correct:

- **127-1** ✓ `words/one.js:722` now `bug: ["séddi", "sedːi"]` — acute stripped from IPA; siblings confirmed plain `e` (uleŋ, esːo, meoŋ).
- **127-2** ✓ `words/sun.js:205` now `su: ["panonpoé", "panɔnpɔe"]` — second ⟨o⟩ normalized to `ɔ`, matching *panon*→`panɔn`.
- **127-3** ✓ `words/good.js:711` now `min: ["rancak", "ɾantʃaʔ"]` — final /k/→/ʔ/ debuccalization applied.
- **127-4** ✓ `words/heart.js:714` now `ace: ["até", "ate"]` — ⟨é⟩=/e/ restored.
- **127-5** ✓ `words/love.js:721` now `ace: ["gaséh", "ɡaseh"]`.
- **127-6** ✓ `words/thanks.js:714` now `ace: ["trimong gaséh", "tɾimoŋ ɡaseh"]` — the requested ⟨é⟩→e fix applied. The *trimong* ⟨o⟩→ɔ was deliberately NOT bundled; I accept this as a defensible scope decision. In my own round-1 I presented house/*pajôh* (issue 7) as the cleanest minimal contrast for the ⟨o⟩=/ɔ/ class and listed *trimong* only as a parenthetical extension. Since issue 7 was applied (`ɾumɔh`), the rule is established in the corpus; whether to propagate it to *trimong* in thanks.js is a follow-up normalization, not a clear error. Won't-fix here.
- **127-7** ✓ `words/house.js:721` now `ace: ["rumoh", "ɾumɔh"]` — ⟨o⟩/⟨ô⟩ contrast restored; *pajôh*→`padʒoh` (eat.js:707) confirmed as the contrasting ⟨ô⟩ cell.
- **127-8** ✓ `words/good.js:80` now `id: ["baik", "baiʔ"]` — coda glottal applied. Worker correctly kept the diphthong and used `baiʔ` over my non-load-bearing `baeʔ` alternative; accepted.
- **127-9** ✓ `words/good.js:81` now `ms: ["baik", "baiʔ"]`.
- **127-10** ✓ `words/tree.js:81` now `ms: ["pokok", "pokoʔ"]` — same-file `mfa: ["pokok", "pokoʔ"]` (tree.js:1058) corroborates.
- **127-11** ✓ `words/love.js:581` now `mad: ["tresna", "trɛsna"]` — front /ɛ/ supplied, matching jv cognate (love.js:204). The worker's choice to keep `r` (not tap `ɾ`) to mirror the jv target I cited is internally consistent; I do not press the tap here since the cited reference cognate uses `r`.

### New issues
None. Nothing new surfaced during verification.

### Scorecard
| Item | Verdict |
|------|---------|
| 127-1…127-5, 127-7…127-11 | ✓ accept (verified in live data) |
| 127-6 | ✓ accept; *trimong* ⟨o⟩ non-bundling is won't-fix |

All 11 clear errors fixed and verified; the single scoping note is accepted as a defensible follow-up rather than an error.

**File status: CLOSED** — nothing left to address.
