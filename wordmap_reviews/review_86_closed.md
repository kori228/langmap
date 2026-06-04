# Wordmap Review #86 — Romance Vernaculars Audit

Scope: Romance non-standard codes across the 20 wordmap words in `/home/jounlai/langmap/words/`.
Codes verified present: `ca, oc, an, ast, gl, pt_eu, pt_br, sc, rm, fur, lld, vec, lmo, pms, nap, scn, ro, rup, ruq, fr_qc, fr_af, fr_be, fr_ch, la, lij, lij_t, rgn, egl, frp, eml, mwl, wa, fla, lad, cbk`.
Codes NOT present (do not exist in this dataset): `glg, pt_pt, sdc, src, sdn, lmo dialects, ro_md, aru, mo`. Aromanian uses `rup` (Glottocode/ISO macro) and Megleno-Romanian `ruq`. There is a Ladino entry `lad` (Judaeo-Spanish, not Ladin) — distinct from `lld` (Ladin).

Focus areas were: (1) Catalan article + apostrophe, (2) Sardinian /k/ before front vowels, (3) Romansh 5-variety distinction, (4) Romanian definite article suffix, (5) Aromanian Slavic/Greek loans, (6) Venetian /θ/ vs Italian /s/, (7) Quebec French diphthongization.

---

## Findings

### F1 — `ca` "hola" should not begin with silent /h/ in IPA, but transcription is OK; missing apostrophe pattern is by design (bare noun form)
- Files: `hello.js:305` (`ca: ["hola", "ɔlə"]`), `water.js:312` (`ca: ["aigua", "ajɣwə"]`), `house.js:312` (`ca: ["casa", "kazə"]`).
- Catalan citation form is bare; the apostrophe `l'aigua / l'home` only appears in syntactic context with a preceding definite article. Bare lemma is the correct headword convention used throughout this dataset (cf. fr `eau`, not `l'eau`). No fix; the focus-area concern doesn't apply to lemma form. Flag is informational — the dataset is internally consistent.

### F2 — `ca` "aigua" IPA `ajɣwə` is fine for Central Catalan, but the dataset's `ə` final vowel signals Central/Eastern dialect; cross-check vs other `ca` entries
- `ca` shows Eastern Catalan vowel reduction consistently: `casa kazə`, `cor kɔr`, `arbre aɾbɾə`, `mare maɾə`, `amor əmoɾ`, `pare paɾə`, `menjar mənʒa`. Consistent Eastern/Central choice. Good.
- However `ca: ["sol", "sɔl"]` (sun.js:311) and `ca: ["un", "un"]` and `ca: ["mà", "ma"]`, `ca: ["foc", "fɔk"]`, `ca: ["gos", "ɡɔs"]`, `ca: ["bo", "bɔ"]` all use unreduced vowels — these are tonic mono-syllables so /a/ is correct (not reduced). Internally consistent.

### F3 — Sardinian (sc) `gattu` for "cat" contradicts the focus claim that Sardinian preserves /k/ before front vowels
- File: `cat.js:506` `sc: ["gattu", "ɡattu"]`.
- Latin CATTUS — initial /k/ stays /k/ in Sardinian; expected `gattu` with /g/ is the result of voicing of intervocalic stop in many forms, but **initial** Sardinian shows `ga(t)tu` (Logudorese/Nuorese) and `gattu/jattu` in Campidanese; current form is plausible.
- More relevant check: `sc: ["kena"]`-type preservation is not testable from this 20-word set. The /k/ preservation focus is partly satisfied by `core` (heart.js:506) vs Italian `cuore` — Sardinian keeps the short Latin O without diphthongization, but `/k/` before /e/ is preserved as `[k]` in Logudorese vs Campidanese /tʃ/. The form `core` with `[k]` in IPA is correct for Logudorese-based standard `sc`. Good.

### F4 — Sardinian (sc) "drink" `bìere` IPA `biere` is missing the high vowel quality — should be `ˈbiɛɾɛ` or `ˈbiere` with stress
- File: `drink.js:506` `sc: ["bìere", "biere"]`.
- The orthography uses grave accent `ì` indicating stress on first syllable; IPA lacks stress mark. Compare `sc: ["àrbure", "arbure"]` (tree.js:506) — also missing stress despite orthographic stress accent. Inconsistent with `sc: ["gràtzias", "ɡrattsjas"]` (thanks.js:506) and `sc: ["ogru", "oɣru"]` which also lack the `ˈ` stress mark. Whole `sc` set seems to omit explicit stress marks; not a per-entry bug but a systematic gap vs neighboring lemmas like `fur: ["aghe", "ˈaɡe"]`.

### F5 — Sardinian (sc) "water" `abba` is Logudorese; Campidanese has `àcua` — should be noted as variety-specific
- File: `water.js:506` `sc: ["abba", "abba"]`.
- `abba` is the Logudorese/Nuorese form (Latin AQUA → /bb/ via the famous Sardinian retention). Campidanese `àcua/àkua` exists. Since the project uses macrocode `sc` (Sardinian, not specific dialect), `abba` is a defensible Logudorese-based choice. The focus area's missing `sdc/src/sdn` codes mean dialect-level distinction isn't available in this dataset; consider adding `src` (Logudorese) and `sdn` (Gallurese) for completeness if scope expands.

### F6 — Sardinian (sc) "eye" `ogru` `oɣru` — correct preservation of `-cl-` cluster as `-gr-` (a famous Sardinian sound change OCULUS > ogru)
- File: `eye.js:506`.
- This is one of the strongest Sardinianisms (vs Italian `occhio`, Spanish `ojo`). Good data.

### F7 — Romansh (rm) is a single code; the focus-area "5 varieties" (Sursilvan, Sutsilvan, Surmiran, Puter, Vallader, plus Rumantsch Grischun) is NOT represented
- All entries collapse to one `rm` code (e.g., `chasa`, `cor`, `mamma`, `bab`, `glina`, `egl`).
- The forms used (`chasa`, `glina`, `bab`, `egl`, `chaun`, `giat`) are mostly **Sursilvan**/Rumantsch Grischun. Vallader would give `chasa`/`glüna`/`bap`/`ögl`/`chaun`/`giat` — partially distinct.
- Recommendation: either add `rm_sur` (Sursilvan), `rm_val` (Vallader), `rm_put` (Puter) sub-codes, or document in CONTRIBUTING that `rm` = Rumantsch Grischun standard. The focus-area expectation cannot be met without sub-codes.

### F8 — Romansh (rm) "moon" `glina` is non-standard; the RG form is `glüna` and Sursilvan `glina` — flag dialect choice
- File: `moon.js:511` `rm: ["glina", "ɡlina"]`.
- `glina` is Sursilvan; Rumantsch Grischun normalizes to `glina` per the standard. OK if the implicit choice is Sursilvan.

### F9 — Romansh (rm) "one" `in` `in` is suspicious — RG/Sursilvan is `in/ina` (masc. `in`); good
- File: `one.js:511`. Latin UNUS > rm `in` (Sursilvan) or `ün` (Vallader). The form `in` is consistent with the Sursilvan-leaning choice in F7/F8.

### F10 — Romanian (ro) entries are bare lemmas, lacking the definite article suffix that the focus area mentions
- Files: `water.js:167 ro: ["apă", "apə"]`, `sun.js:167 ro: ["soare", "so̯are"]`, `moon.js:167 ro: ["lună", "lunə"]`, `father.js:167 ro: ["tată", "tatə"]`, `mother.js:167 ro: ["mamă", "mamə"]`.
- The wordmap convention is bare lemma everywhere (cf. `fr eau`, not `l'eau`; `de Wasser`, not `das Wasser`), so the lack of `apa`/`soarele`/`luna` (with suffixed article) is the **correct** lexicographic choice. The focus-area note about Romanian definite suffix is a linguistic feature, not a data error. Flag as informational; no fix needed.

### F11 — Romanian (ro) "to eat" infinitive `a mânca` includes the `a` particle but `to drink` `a bea` likewise — consistent
- Files: `eat.js:167 ro: ["a mânca", "a mɨnka"]`, `drink.js:167 ro: ["a bea", "a be̯a"]`.
- Compare other Romance verbs: `fr manger`, `it mangiare`, `es comer`, `pt comer`, `ca menjar` — none include the infinitive marker. Romanian's `a` is the long-infinitive particle and including it is defensible (it's part of the dictionary citation form). Consistent within `ro`, but stylistically inconsistent with sibling Romance languages. Consider standardizing to bare infinitive `mânca`/`bea` to align.

### F12 — Aromanian (rup) and Megleno-Romanian (ruq) "to eat" diverge: `mâcari` (rup, infinitive-noun form) vs `mocăm` (ruq, 1sg.pres) — citation forms inconsistent
- File: `eat.js:750 rup: ["mâcari", "mɨˈkari"]`, `eat.js:751 ruq: ["mocăm", "moˈkɨm"]`.
- `mocăm` is "we eat" (1pl) or 1sg in some analyses — not a lemma form. Should be `mancari` (Aromanian-style verbal noun) or `mâc` (1sg) for parallelism. Mismatched citation conventions across sibling languages.
- Compare `drink.js:758 ruq: ["biem", "biem"]` — also a finite "we drink" form, not citation. Systematic ruq issue.

### F13 — Aromanian (rup) "hello" `bunâ-vã ziuâ` is "good day to you (pl.)" — phrasal, while `ruq: ubavu` is single-word adjective "beautiful"
- File: `hello.js:750 rup: ["bunâ-vã ziuâ", "ˈbunɨ vɨ ˈziwɨ"]`, `hello.js:751 ruq: ["ubavu", "uˈbavu"]`.
- `ubavu` is a Slavic loan (from South Slavic убав "beautiful") used as greeting — interesting and matches focus-area expectation about Slavic loans, but it's not a typical Megleno-Romanian greeting; the standard is `bună ziua` cognate. `ubavu` is more "beautiful/good" as a wish.
- These two sibling forms should be more parallel; if `ruq` is going to gloss "good day" it should be similar in structure to `rup`.

### F14 — Aromanian (rup) "thanks" `harauâ` and (ruq) `hăirau` both derive from Turkish `hayır` (Slavic-Balkan substrate), satisfying focus-area Slavic/Greek+Turkish loans expectation
- Files: `thanks.js:757-758`. Good data — these are loans not Latin-derived, contrasting with `ro: mulțumesc` (Romanian). Confirms the focus-area thesis well.

### F15 — Aromanian (rup) "love" `vreari` (lit. "wanting/willing") and (ruq) `ublami` — distinct sources
- File: `love.js:764 rup: ["vreari", "ˈvreari"]`, `love.js:765 ruq: ["ublami", "ˈublami"]`.
- `vreari` is the Aromanian deverbal noun from "to want" (semantic shift); `ublami` looks like a borrowing from Macedonian/Bulgarian "ублами" — verify orthography; the more common Megleno form would be `vrere` parallel to `vreari`. Flag for sourcing.

### F16 — Venetian (vec) `/θ/` (the "thita veneta") is NOT marked in any IPA — `vec` "thanks" `grassie ɡrasje`, "house" `caxa ˈkaza`
- Files: `thanks.js:299 vec: ["grassie", "ɡrasje"]`, `house.js:306 vec: ["caxa", "ˈkaza"]`.
- The focus area asked for Venetian /θ/ vs Italian /s/. The voiceless interdental `[θ]` is dialectal (rural/Northern Veneto: zhent, casa→[ˈkaθa]) and the standard urban (Venice/Padua) form uses /s/ or /z/. Current data uses urban /s,z/ — defensible. However `caxa` orthographic `x` historically represented /z/ (sonorized), and the IPA `ˈkaza` is correct. Not a bug; the focus-area phenomenon is only visible in rural sub-varieties not represented.
- `vec: ["sol", "sol"]`, `vec: ["łuna", "ɫuna"]` — note the dark-l/L-with-stroke `ł` for the Venetian dark lateral, which is well represented. Good.

### F17 — Venetian (vec) "to eat" `magnàr maɲar` — infinitive ends in `-àr` (apocope of `-are`); IPA `maɲar` correct but missing stress mark `maˈɲar`
- File: `eat.js:299`. Stress on final syllable in oxytonic infinitive should be marked. Same issue: `vec: ["bévar", "bevar"]` (drink.js:299) — stress on first syllable per orthographic accent but no `ˈ` in IPA. Systematic stress-omission in `vec`.

### F18 — Quebec French (fr_qc) shows length marking `ːʁ` consistent with diphthongization-area phonetics, but the actual diphthong is not in IPA
- Files: `father.js:494 fr_qc: ["père", "pɛːʁ"]`, `mother.js:500 fr_qc: ["mère", "mɛːʁ"]`, `heart.js:494 fr_qc: ["cœur", "kœːʁ"]`, `love.js:501 fr_qc: ["amour", "amuːʁ"]`, `tree.js:494 fr_qc: ["arbre", "aːʁbʁ"]`.
- Focus-area expectation: Quebec realises long mid vowels with offglide ("père → [paɛ̯ʁ]"). Current data marks length only, not the actual Laurentian diphthongization. If you want to differentiate `fr_qc` from `fr_af/fr_be/fr_ch` phonetically, mark the diphthong: `paɛ̯ʁ / mɛɛ̯ʁ / kœœ̯ʁ / aʊ̯ʁ` etc. Currently only `lune lʏn` (moon.js:500) shows the famous /ʏ/ for /y/ laxing — that's correct and distinguishes from `fr_af/be/ch lyn`. Good for that one item; extend pattern.

### F19 — French varieties (fr_af, fr_be, fr_ch) are phonetically identical to Metropolitan `fr` across nearly all 20 words
- Sample: `water.js:494-497` all `eau o`. `fire.js fr_qc/af/be/ch feu fø`. `cat chat ʃa`. `hello`: only `fr_qc allô alo` differs (af/be/ch use `bonjour`).
- Swiss French has a famous `un/œ̃` vs `in/ɛ̃` merger and elongated vowels in some positions; `one.js:500-503` shows `fr_qc un œ̃`, `fr_af un ɛ̃` (Maghreb merged with the historical `ɛ̃`), `fr_be un œ̃`, `fr_ch un œ̃` — this is a thoughtful split. But other items don't reflect Belgian long-mid distinction (`belge brun/brin` distinction; the famous Belgian `huitante` vs Swiss `octante`). The phonetic data is mostly identical between fr_af/be/ch suggesting under-differentiation.

### F20 — `fr_af` (Maghreb French) treats `un` as `ɛ̃` (merged) while `fr_qc/be/ch` keep `œ̃` — looks inverted
- File: `one.js:500-503`.
- Maghrebi French typically maintains a fuller vowel inventory (less merger of `un/in`). The European merger is regional (Parisian); Belgian and Swiss typically keep `un = œ̃` distinct from `in = ɛ̃`. Quebec keeps `œ̃`. So the assignment `fr_af = ɛ̃` is unusual — Maghreb French varies and is more often described as keeping `œ̃`. Verify source.

### F21 — Galician (gl) "fire" `lume` vs Galician-Asturian `fla: ["lume"]` — both choose the inherited Latin LUMEN ("light") over FOCUS
- Files: `fire.js:306 gl: ["lume", "lume"]`, `fire.js:761 fla: ["lume", "ˈlume"]`.
- Good consistency in the NW Iberian group. Note Portuguese chose FOCUS (`fogo`) and Castilian chose FOCUS (`fuego`) — Galician+Asturian-Leonese kept LUMEN. Excellent dialectological accuracy.

### F22 — Galician (gl) "thanks" `grazas ɡɾasas` — but Galician standard uses normative spelling `grazas` with `z=[θ]` in conservative/checheo or `[s]` in seseo zones; IPA `ɡɾasas` reflects seseo
- File: `thanks.js:306`.
- The IPA `s` reflects the western coastal seseante variety; the normative pronunciation per RAG (Real Academia Galega) is `[ˈɡɾaθas]`. Choose one and document.

### F23 — Ladino (lad) is included but Ladin (lld) is also included — make sure the two are not confused
- `lad` (Judaeo-Spanish/Ladino): `water agua aɣwa`, `heart korasón koɾason`, `house kaza kaza`, `sun sol sol`, `mother madre madɾe`.
- `lld` (Ladin / Dolomitic Romance): `water ega ˈeɡa`, `heart cuer kweɾ`, `house ciasa ˈʧaza`, `sun surëdl suˈrəːdl`, `mother mëma ˈməma`.
- Both are correctly distinct; flagging because the focus-area mentioned Ladin and these ISO codes are often confused. Good.

### F24 — Friulian (fur) "house" `cjase ˈcaːse` — palatalized /c/ is marked correctly; consistent with `fur cjan caŋ` (dog.js:752)
- Files: `house.js:759`, `dog.js:752`, `cat.js:752 fur: ["gjat", "ɟat"]`.
- Friulian /cj/ /gj/ palatalization is well represented. Good data.

### F25 — Friulian (fur) "eye" `voli ˈvoli` — initial `v-` is anomalous; standard Friulian is `voli` /ˈvɔli/ (correct) from VOC ̅ULUM via lenition — confirm
- File: `eye.js:752`.
- Yes — Friulian famously has prosthetic /v/ before /o/ in some lexemes (VOCULUM > voli is from Latin diminutive; alternatively from oculu). The form is correct but pronunciation may have open `ɔ` not close `o`. Minor IPA vowel-quality question.

### F26 — Sicilian (scn) and Neapolitan (nap) "good" forms: scn `bonu bɔnu` vs nap `buono bwɔnə` — diphthongization vs no diphthongization is exactly right
- Files: `good.js:297-298`.
- Sicilian classically lacks the southern-Italian metaphony-induced diphthong (keeps `bonu`); Neapolitan diphthongizes (`buono`). Excellent dialect contrast. Same pattern visible in `nap: uocchio` vs `scn: occhiu` for eye, `nap: fuoco` vs `scn: focu`.

### F27 — Neapolitan (nap) consistently shows schwa `-ə` for unstressed final vowels (cane→[kanə], mano→[manə], casa→[kasə], gato→[ɡattə? no, jatto→jattə], pater→patə, sole→solə)
- Consistent across all words. Famous southern reduction. Good data quality.

### F28 — Latin (la) "to drink" `bibere bibere` and "to eat" `edere edere` lack vowel-length macrons in IPA despite orthographic vowels being short
- Files: `eat.js:501 la: ["edere", "edere"]`, `drink.js:508 la: ["bibere", "bibere"]`.
- Latin first-conjugation `edere` (eat) — vowels are short, IPA is correct. `bibere` — short i; correct. No issue. Compare `la: ["āqua"...]`-style: `water.js:508 la: ["aqua", "akʷa"]` — correctly shows /kʷ/. Consistent macron-as-length convention. Good.

### F29 — Latin (la) "hello" `salvē salweː` — `v` is correctly rendered as /w/ for classical Latin; consistent with `aqua /akʷa/`
- File: `hello.js:501`. Classical Latin /w/ for ⟨V⟩. Good.

### F30 — Walloon (wa) "thanks" `mèrci mɛrˈsi` final-stress is unusual — French-style penultimate `ˈmɛrsi` expected
- File: `thanks.js:759`. Walloon is mostly stress-final or mobile depending on variety; the marked stress may be East Walloon. Verify against `wa: ["bondjoû", "bõˈd͡ʒu"]` (hello.js:752) which also shows final stress. Possibly East Walloon (Liège) pattern. Internally consistent within `wa`.

---

## Summary
- Strongest data: Neapolitan/Sicilian metaphony contrast (F26, F27), Galician-Asturian LUMEN preservation (F21), Friulian palatalization (F24), Sardinian `ogru` (F6), Latin /kʷ/ /w/ (F28, F29), Ladino vs Ladin separation (F23).
- Systemic issues: missing stress marks in `sc` and `vec` IPA (F4, F17); Romansh varieties collapsed into one code (F7, F8); Aromanian/Megleno-Romanian citation-form inconsistency (F12, F13); under-differentiation of French sub-varieties (F18, F19, F20).
- Focus-area mismatches: Catalan apostrophe is by-design absent (F1); Romanian definite suffix is by-design absent (F10); Venetian /θ/ is dialect-only and not represented (F16); Quebec diphthongization only marked for /y→ʏ/, not for long-mid offglides (F18).
- Romance sub-codes confirmed absent from dataset: `glg, pt_pt, sdc, src, sdn, lmo dialects, ro_md, aru, mo`.

**File:** `/home/jounlai/langmap/wordmap_reviews/review_86_open.md`
**Findings:** 30


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 9
- **policy/skip**: 21
- **headline**: sc 4 stress marks (bìere/àrbure/gràtzias/ogru), vec 2 stress (magnàr/bévar), ruq citation form 2 (mocăm→mâcari, biem→beari), fr_af un ɛ̃→œ̃
- **JSON path**: /tmp/wm_edits_86.json
