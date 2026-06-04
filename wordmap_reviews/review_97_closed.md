# Wordmap Review #97 — Greek Family Audit

**Scope:** el (Modern/Demotic), el_grc (Ancient/Classical), el_kath (Katharevousa), pnt (Pontic) across 20 words.

**Codes actually present in `words/*.js`:** `el`, `el_grc`, `el_kath`, `pnt`.
**Codes asked about but NOT present:** `tsd` (Tsakonian), standalone `grc` (Ancient Greek uses `el_grc` here only).

**Status:** OPEN

---

## Findings

### Pontic (pnt) — lexical / morphological accuracy

1. **`father` — pnt `πατέρας` is standard-Modern-Greek, not characteristically Pontic.**
   `/home/jounlai/langmap/words/father.js:833`
   Pontic Greek's distinctive lexeme is **`κύρης`** (or `πάππος`/`αφέντες` for "father/master"); identical-to-Modern `πατέρας` defeats the point of including Pontic as a separate variety.

2. **`mother` — pnt `μάνα` is fine but is also the el-colloquial form.**
   `/home/jounlai/langmap/words/mother.js:839`
   Pontic more characteristically uses **`μάνα`** (OK) but the doublet **`μάννα`** with geminate /n/ better reflects Pontic phonology; consider noting this. (Low priority — current form is defensible.)

3. **`eat` — pnt `τρώω` should be `τρώγω` (Pontic preserves /ɣ/).**
   `/home/jounlai/langmap/words/eat.js:826`
   Pontic is famous for retaining the classical γ in τρώγω; the loss of intervocalic γ to give `τρώω` is a Demotic innovation that Pontic mostly resists. Compare cl. τρώγειν → pnt τρώγω, el τρώω.

4. **`drink` — pnt `πίνω` misses Pontic's hallmark infinitive.**
   `/home/jounlai/langmap/words/drink.js:833`
   Pontic is one of the only modern Greek varieties to **retain the infinitive** (`πίνειν` / shortened `πιν`). Showing it as just `πίνω` (= identical to el and el_kath) erases the single most-cited Pontic feature in the dataset.

5. **`eye` — pnt `ομμάτ` is a heavily reduced form; canonical Pontic is `ομμάτιν`.**
   `/home/jounlai/langmap/words/eye.js:833`
   Pontic typically preserves the classical-derived neuter `-ιν` (`ὀμμάτιον` → `ομμάτιν`). Truncating to `ομμάτ` loses the diagnostic preservation that the audit explicitly flags as a Pontic feature (final -ν retention).

6. **`fire` — pnt `φοτεία` should be `φωτία` (preserve ω, drop spurious ε).**
   `/home/jounlai/langmap/words/fire.js:839`
   Standard Pontic spelling is **`φωτία`** (with ω, mirroring `φωτιά` minus the iotacised /a/). The current `φοτεία` mis-spells the vowel (ο for ω) and inserts an etymologically unjustified ε.

7. **`sun` — pnt `ήλεν` is non-standard; expected `ήλιον`.**
   `/home/jounlai/langmap/words/sun.js:839`
   Pontic neuter from `ἥλιος` → `ήλιον` (retaining classical -ν). `ήλεν` looks like a typo for the article `ήλιον`/`ήλιν`; no widely-attested Pontic dialect has this form.

8. **`thanks` — pnt `ευχαριστώ` is identical to Modern; consider `σπολλάτη` or `σ' ευχαριστώ`.**
   `/home/jounlai/langmap/words/thanks.js:833`
   The classical-derived `σπολλάτη` (< εἰς πολλὰ ἔτη) is a famous Pontic formula. Even if `ευχαριστώ` is used colloquially, it provides zero contrast with `el`/`el_kath`.

9. **`cat` — pnt `γάτα` identical to el is a missed contrast.**
   `/home/jounlai/langmap/words/cat.js:833`
   Pontic frequently uses **`κάτα`** (with unvoiced initial κ, reflecting older borrowing) or `κατί`. `γάτα` is a recent loan from standard Greek.

10. **Pontic IPA inconsistency: `τρώω` shown as `ˈtroːo` while el is `ˈtɾo.o`.**
    `/home/jounlai/langmap/words/eat.js:826` vs `:159`
    Pontic /r/ is the same tap /ɾ/ as el, not the geminate/long realisation implied by `troːo`. Also the long o `oː` is unmotivated. Should be `ˈtɾo.o` (matching el) — or, better, `ˈtɾoɣo` if corrected to `τρώγω` (finding 3).

### Ancient/Classical Greek (el_grc) — orthography & reconstructed pronunciation

11. **`cat` — el_grc IPA `aíluːros` mis-places the pitch on the second element of αι.**
    `/home/jounlai/langmap/words/cat.js:509`
    The acute on `αἴλουρος` sits on the diphthong; reconstructed Attic carries the pitch on the **first** mora of a short diphthong, so the IPA should be `áiluːros`, not `aíluːros`.

12. **`drink` / `eat` — el_grc uses infinitive (`πίνειν`, `ἐσθίειν`) while other words use finite forms.**
    `/home/jounlai/langmap/words/drink.js:509`, `/home/jounlai/langmap/words/eat.js:502`
    Mixing 1sg present (`χαῖρε`, `ἀγαθός`, `εὐχαριστῶ`) with bare infinitives for verbs is inconsistent. Either pick the lemma citation form (typically 1sg present in Ancient Greek lexicography: `πίνω`, `ἐσθίω`) for ALL verbs, or use infinitive everywhere. Currently only `drink`/`eat` are infinitives.

13. **`hello` — el_grc `χαῖρε` vs el_kath `χαίρετε` are different numbers (sg vs pl).**
    `/home/jounlai/langmap/words/hello.js:502-503`
    Classical citation form for the greeting is `χαῖρε` (2sg imperative). Katharevousa using the plural/polite `χαίρετε` is plausible but produces a register mismatch with el `γεια σου` (informal singular). Pick one register across the family.

14. **`good` — el_grc `ἀγαθός` (masc) vs el `καλό` (neuter) — gender mismatch across the row.**
    `/home/jounlai/langmap/words/good.js:159,509,510,833`
    el and pnt give the neuter `καλό`; el_grc and el_kath give the masculine `ἀγαθός`. For consistent comparison, either supply neuter `ἀγαθόν` for the classical forms or masculine `καλός` for the modern.

### Modern Greek (el) — minor

15. **`hello` — el `γεια σου` IPA `ʝa su` is missing the stress mark.**
    `/home/jounlai/langmap/words/hello.js:159`
    Should be `ˈʝa su` (or `ˈʝa.su`) to match the convention used elsewhere in the file.

16. **`fire` — el IPA `foˈtʲa` palatalised /tʲ/ is unusual; standard transcription is `foˈtça` or `foˈtja`.**
    `/home/jounlai/langmap/words/fire.js:159`
    Modern Greek's "synizesis" of <ι> before vowel is usually rendered /ʝ/ or palatalisation of the preceding consonant as /c/ /ç/, not the Slavic-style /tʲ/. Minor — but check for cross-row consistency with similar Greek palatalisations elsewhere.

### Katharevousa (el_kath) — register & form

17. **`hello` — el_kath uses `χαίρετε` but el_grc uses `χαῖρε`; Katharevousa would normally cite the classical form.**
    `/home/jounlai/langmap/words/hello.js:503`
    Katharevousa is built to preserve classical morphology. If the classical citation is the 2sg `χαῖρε`, Katharevousa should match (`χαῖρε`), not switch to the 2pl polite.

18. **`cat` — el_kath IPA `eˈluros` drops the diphthong αι rendering.**
    `/home/jounlai/langmap/words/cat.js:510`
    In Katharevousa-era pronunciation, αι is /e/ — that's fine — but the leading `e` should perhaps be `eˈluros` (as given) only if the unstressed first syllable is reduced. Compare modern Greek `αίλουρος` → `ˈeluros` in lexica. The current `eˈluros` shifts stress to the antepenult-relative wrong syllable; should be **`ˈeluros`** (stress on αι, matching the acute in `αἴλουρος`).

### Cross-row systematic patterns

19. **Final -ν retention is inconsistent across pnt entries.**
    Retained: `νερόν` (water), `αγάπην` (love), `δέντρον` (tree), `φέγγον` (moon), `πατέρας`-no-ν (father).
    Dropped: `χέρ` (hand), `σπίτ` (house), `καρδί` (heart), `ομμάτ` (eye, see finding 5).
    Pontic is supposed to be a final-ν **preserving** dialect (per the audit prompt). The dropped-ν neuters in `hand`/`house`/`heart`/`eye` reflect a more colloquial Pontic; a more consistent classicising representation would be `χέριν`, `σπίτιν`, `καρδίν`, `ομμάτιν`. Pick a stratum and apply it uniformly.

20. **el_grc IPA uses /ʰ/ for aspirates and /ː/ for length but is inconsistent about diphthong length.**
    Examples: `χαῖρε` `kʰâire` (no length on αι), `οἶκος` `oîkos` (no length on οι), but `χείρ` `kʰéːr` (length on ει), `εἷς` `hêːs` (length on ει).
    Classical αι/οι are *short* diphthongs and ει/ου became *long* monophthongs by Attic — so the current treatment is actually correct, but the visual inconsistency (some marked `ː`, some not) deserves a comment in the doc/legend to head off confusion.

21. **`tree` — el_kath IPA `ˈðenðron` uses Modern /ð/ for δ; el_grc IPA `déndron` uses /d/.**
    `/home/jounlai/langmap/words/tree.js:510` vs `:509`
    This is correct (Katharevousa writes classical δ but pronounces modern /ð/), but worth a one-line confirmation in the legend that el_kath IPA is *modern phonology over classical orthography*.

22. **Absence of `tsd` (Tsakonian) and `grc` (separate) — by design or oversight?**
    The audit asked to verify these exist. They do not. If Tsakonian (a true Doric descendant with `α` for `η`, e.g. `νερό`→`ννερέ`, `ήλιος`→`άλιε`) is to be added, this would be the place. Flagging for product decision; no edit recommended without scope confirmation.

23. **`one` — pnt `εν` matches el neuter `ένα`, but el_grc/el_kath give masculine `εἷς`.**
    `/home/jounlai/langmap/words/one.js:159,515,516,839`
    Same gender-mismatch pattern as `good` (finding 14). For a numeric "one" used as a citation form, neuter is the cross-linguistically standard pick — consider `ἕν` for el_grc and `ἕν` for el_kath to align.

---

## Summary

- **Pontic (pnt) is the weakest variety**: 8 of 20 entries are either identical to Standard Modern Greek or mis-spelled/under-classicised. Findings 1–10 and 19 cluster here.
- **el_grc** is mostly clean; main issues are gender mismatch with `el` for citation forms (`good`, `one`) and the verb-form inconsistency between infinitive and finite (`drink`/`eat` vs others).
- **el_kath** is largely correct but `hello` register and `cat` stress placement need attention.
- **el (Demotic)** is solid; one missing stress mark and one debatable IPA detail.
- **`tsd` and standalone `grc` do not exist** in the dataset — product decision needed.

---

**File:** `/home/jounlai/langmap/wordmap_reviews/review_97_open.md`
**Findings:** 23


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 13
- **policy/skip**: 10
- **headline**: pnt 6 (father πατέρας→κύρης, eat τρώω→τρώγω, drink πίνω→πίνειν infinitive, eye, fire φοτεία→φωτία, sun ήλεν→ήλιον), el_kath good ἀγαθόν+one ἕν+hello χαῖρε+cat stress, el_grc good/one neuter, el hello stress
- **JSON**: /tmp/wm_edits_97.json
