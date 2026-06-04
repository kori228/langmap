# Wordmap Reviewer #99 — Berber / Tuareg / North African audit

Scope: kab (Kabyle), shi (Tashelhit), tzm (Central Atlas Tamazight), rif (Tarifit/Riffian), tmh (Tamasheq/Tuareg), and the Maghrebi Arabic varieties present (`ar`, `ar_qur`, `ar_eg`, `ar_lev`, `ar_gulf`, `ar_iq`, `ar_ma`, `ar_tn`, `ar_sd`, `arq`) across the 20 words in `/home/jounlai/langmap/words/`.

Codes confirmed PRESENT (target set): kab, shi, tzm, rif, tmh, ar_ma, ar_tn, arq, ar_eg, ar_lev, ar_gulf, ar_iq, ar_sd, ar_qur, ar.
Codes from prompt that DO NOT EXIST in `words/*.js`: taq, thv, nys-as-Berber (`nys` is Noongar — Australian, not Berber), arz, ar_dz, ar_ly, ar_tn-as-`aeb`, aeb, ary, ayl, zen, zgh, ber.

Each entry below cites a specific file and the offending pair; words/*.js are read-only per instructions.

---

## A. Script / orthography

1. **No Tifinagh anywhere** — `grep -P "[ⵀ-⵿]"` over `/home/jounlai/langmap/words/*.js` returns zero hits. Every Berber row (kab/shi/tzm/rif/tmh) uses Berber-Latin only. For Standard Moroccan Tamazight (tzm in Morocco) and especially Tuareg (tmh), Tifinagh is the indigenous and frequently the *official* script. If the project shows Han for zh, Hangul for ko, etc., it should at minimum offer Tifinagh as the primary form for tzm and tmh, with Berber-Latin as the romanisation alt — current setup inverts the convention. Suggested forms (illustrative, not for direct paste): `aman` → ⴰⵎⴰⵏ, `afus` → ⴰⴼⵓⵙ, `tafukt` → ⵜⴰⴼⵓⴽⵜ, `tamemmirt` → ⵜⴰⵏⵎⵎⵉⵔⵜ.

2. **`rif` uses ad-hoc `th/dh` digraphs while IPA already has /θ ð/** — `house.js` rif `["thaddart", "θadːaɾt"]`, `fire.js` `["thmessi", "θmesːi"]`, `sun.js` `["dhish", "ðiʃ"]`, `eye.js` `["thiṭ", "θitˤ"]`. The form column mixes Berber-Latin with English-style `th`/`dh`. Standard Tarifit conventions use plain `t`/`d` (the spirantisation is allophonic/predictable) or the diacritic forms `ṯ`/`ḏ`. Recommend either `taddart / tmessi / tiṭ` (un-marked) or `ṯaddart / ṯmessi / ḏiš / ṯiṭ` (marked) — but not the English-style digraphs which clash with Berber-Latin where `t`+`h` would normally be two segments.

3. **`sun.js` rif `["dhish", "ðiʃ"]` form/IPA mismatch** — the romanisation transcribes `š` as `sh` (English convention) but Berber-Latin uses `c` or `š` (e.g. cf. `cat.js` rif `"mucc"` using `c` for /tʃ/, and `good.js` rif `"šenmu"` using `š`). The same file uses two different conventions for the postalveolar sibilant. Pick one and be consistent — either `dhic` or `ḏiš`.

---

## B. Berber lexicon

4. **`good.js` rif `["šenmu", "ʃenmu"]` is not the standard Tarifit word for "good"** — the usual Tarifit attributive predicate is `iṣbeḥ` / `yelha` / `icnu` (kab `yelha`, shi `ifulki`). `šenmu` (~"pretty") is a marked aesthetic term. Either swap to `yelha`/`icnu` for parity with kab `yelha`, or document the choice in a `wordEvidence.note`.

5. **`one.js` rif `["ijj", "ijː"]` — IPA missing palatal** — Tarifit "one" is realised [ iʒʒ ] or [ iʝʝ ] (gemination of the palatalised j), not the simple geminated semivowel /jː/. Compare with shi `"yan", "jan"` and kab `"yiwen", "jiwən"` — the rif form has a distinct affricate quality that the current IPA hides.

6. **`tree.js` rif `["asɣar", "asʁaɾ"]` glosses "tree" with the word for "(piece of) wood/log/firewood"** — `asɣar` is "wood/firewood" in most Berber varieties; "tree" is `tasejjert` / `taseklut` / `addag`. Compare shi/tzm `aseklu` (correct: "tree"). Likely a wood↔tree polysemy slip; flag for confirmation with a Tarifit informant or document polysemy in note.

7. **`thanks.js` rif `["tanmirt", "tanmiɾt"]` is missing the gemination found in every sister Berber** — kab `tanəmːiɾt`, shi `tanmːiɾt`, tzm `tanmːiɾt`, tmh `tanəmːiɾt` all have geminated /mː/. rif should be `tanəmmirt` / `tanmːiɾt`. The current `tanmirt` underrepresents Tarifit phonology and breaks cross-dialect comparability.

8. **`eat.js` tmh `["ekš", "əkʃ"]` vs sister Berber `ečč / čč / ečč` — apparent reflex split is real but worth a note** — Tuareg famously preserves the velar /k/ where Northern Berber palatalised to /tʃ/ (Proto-Berber *kk̲). This is a teaching moment of the cluster; consider adding a `wordEvidence.note` flagging this is a regular sound correspondence (k ↔ čč) rather than letting it look like a vocabulary mismatch.

9. **`mother.js` tmh `["ma", "ma"]` is a hypocoristic, not the lexical word** — Tuareg for mother is `anna` (also `ánnaː`/`ma`-`s` "his mother"). `ma` alone is the form-of-address baby-talk. Compare how `father.js` tmh gives `abba` (lexical) not `ba`. If `ma` is kept for parity with the other Berber `yemma`-type, document it; otherwise `anna` is the canonical lexical entry.

10. **`hello.js` tmh `["ma toleɣ", "ma toləɣ"]` is a fragment "what is your news?" (literally "what / 2sg-news")** — this is not a greeting per se but the question that follows the greeting. The canonical Tuareg greeting is `salam alikum` (loan) or `mâ təlla?` / `mátulid?`. If the intent is a non-Arabic-loan native-Berber greeting, `azul` (which all four Northern Berbers use here) is itself a 20th-century revitalist coinage — none of the five rows reflect the pre-modern native greeting. Add a `wordEvidence.note` on the *azul* row that this is a recent pan-Berber neologism, not pre-colonial usage.

---

## C. Maghrebi Arabic phonology

11. **`ar_ma` is inconsistent on the /q/ → /g/ rule** — `moon.js` `["قمر", "qmɐɾ"]` and `heart.js` `["قلب", "qəlb"]` keep /q/, while urban Moroccan Arabic typically realises قمر as [gmɐɾ] (rural/Bedouin substrate) or [qmɐɾ] (urban). Either is defensible, but make the choice consistent across the file and add a brief note. `ar_gulf` and `ar_iq` correctly show the /q/→/g/ shift (`ɡalb`, `ɡamaɾ`); ar_ma is inconsistent with itself — it keeps /q/ for these two but the same dialect drops urban /q/→[ʔ] for other lexemes.

12. **`arq` (Algerian) and `ar_ma` (Moroccan) both give `lma` / `الما` for water with an attached definite article on a non-article-bearing surface form** — `water.js` arq `["الما", "lma"]`, ar_ma `["لما", "lma"]`. The IPA `lma` correctly shows the assimilated article + ma, but the form column should match: ar_ma `لما` and arq `الما` use *different* article conventions (one written attached, one separate-with-alif) for the same phonological output. Pick one orthographic convention across Maghrebi for the assimilated article.

13. **Emphatic /tˤ/ on `cat.js` ar_eg `["قطة", "ʔotˤtˤa"]` — /q/→/ʔ/ correct, but ar_ma `["مشّ", "məʃʃ"]` loses the emphatic colouring even though Moroccan `mešš` is often phonetically [mə̆ʃˁʃˁ]** — not critical, but the Egyptian row is meticulous about /tˤ/ marking while the Moroccan row gives a plain transcription. Audit emphatic marking conventions across the Maghrebi rows.

14. **`cat.js` ar_sd (Sudanese) `["قطّ", "ɡuttˤ"]` — IPA `ɡuttˤ` correctly shows /q/→/g/, but the geminate emphatic /tˤː/ should be doubled: `ɡutˤːtˤ` or `ɡutˤː`** — current `tt` followed by `ˤ` only marks the second segment as emphatic, which is phonetically wrong (emphasis spreads over the whole geminate).

15. **`fire.js` ar_tn `["نار", "naːɾ"]` — Tunisian commonly uses `عافية` (`ʕafja`) for "fire" as well, parallel to ar_ma and arq** — the three Maghrebi rows split here (Moroccan `ʕaːfja`, Algerian `lʕafja`, Tunisian `naːɾ`). This is plausible regional variation (Tunisian retains MSA `nār` more strongly), but worth confirming. The Algerian form has the article (`العافية`/`lʕafja`) while Moroccan has bare `عافية`/`ʕaːfja` — definiteness inconsistency across sister Maghrebi rows.

16. **`mother.js` arq `["يما", "jəmma"]` — note this is a *Berber substrate borrowing*** — `yəmma` is the same `yemma` seen in kab/rif/tzm rows above it. Algerian Arabic has borrowed the Berber kinship term wholesale. This is exactly the Berber-Arabic substrate feature in the prompt; consider a `wordEvidence.note` cross-referencing the kab/rif/tzm `yemma` row. Tunisian by contrast keeps Arabic `ʔummi`, and Moroccan goes with the hypocoristic `mmi` (Arabic root, Berber-style geminate prefix pattern).

17. **`thanks.js` arq `["صحة", "sˤəħħa"]` vs ar_tn `["عيّشك", "ʕajːʃək"]` are both authentic, but neither is "thanks" lexically — both are wish/blessing formulas** ("[for your] health" / "[may God] make you live"). This is fine documentation of *how* Maghrebis say thanks, but `wordEvidence.note` should clarify these are blessing formulas, not the lexical root √ʃkr (which all other Arabic rows give).

18. **`father.js` ar_ma `["بّا", "bba"]` matches the Berber rows for "father" (`baba`)** — this is again the Berber substrate. The geminate-initial /bb-/ is anomalous in Arabic but regular in Berber kinship vocatives. Worth a substrate note paralleling finding #16.

19. **`hello.js` ar_tn `["أسلامة", "ʔasleːma"]` — Tunisian `aslāma` is a Berber-substrate-influenced reduction of "السلام عليكم"** — the form is standard Tunisian, but the spelling `أسلامة` (with hamza-alif and tā marbūṭa) is non-canonical; usually written `عسلامة`/`السلامة`. Verify the orthography against a Tunisian source.

---

## D. Cross-row consistency

20. **Schwa marking is inconsistent across the Maghrebi rows** — Algerian `arq` aggressively marks /ə/ (`kəlb`, `qətˤː`, `ʃrəb`, `qəlb`, `ʃʃəms`, `lʕafja`), Moroccan `ar_ma` mostly marks it (`kəlb`, `məʃʃ`, `jədd`, `qəlb`, `ʃəms`, `mzjaːn`), Tunisian `ar_tn` marks it inconsistently (`jaːkəl` ✓ but `kalb` / `qalb` / `ʃams` use full /a/). Maghrebi Arabic short-vowel reduction to /ə/ is the defining areal feature; Tunisian rows should show it more (e.g. `kəlb` not `kalb`). Audit ar_tn pass for short-vowel→schwa.

21. **`eat.js` arq `["كلى", "kla"]` is the perfective/past 3msg ("he ate"), but the rest of the column is imperfective (`ياكل` / "he-eats")** — kab/shi/rif/tzm/tmh all give the imperative/bare stem; ar/ar_eg/ar_lev/ar_gulf/ar_iq/ar_ma/ar_tn/ar_sd all give imperfective `yaːkəl/jaːkol`. Algerian `kla` is past tense, breaking the column's tense convention. Either `يأكل / jakul` (imperfective parallel to the sisters) or document the tense mismatch.

22. **`drink.js` arq `["شرب", "ʃrəb"]` is bare stem/imperative, not the imperfective the sister rows give** (`jiʃɾab` / `jiʃɾəb`). Same tense-paradigm inconsistency as finding #21 — Algerian column drifts to a different verb form.

23. **`tree.js` tzm `["aseklu", "aseklu"]` form-IPA is identical (no IPA transcription)** — same pattern in `aman`, `afus`, `ul`, `ifulki`. Many Berber rows treat Berber-Latin as already IPA (which it nearly is). But for non-trivial words like `aseklu` the stress and the realisation of `e` as [ɛ]/[ə] is worth marking — `aseklu` → `asəklu` or `aˈseklu`. Audit the column: ~70% of Berber rows have form==IPA.

24. **`heart.js` kab/shi/tzm/rif/tmh all `["ul", "ul"]`** — exact match across five varieties is *expected* for this Berber root, but it raises a verification question: is it really invariant in Tuareg? Tuareg "heart" can also be `ul` but some sources give `iwən`/`man`. Confirm tmh `ul` against a Tamasheq source; the five-way uniformity is suspiciously clean.

25. **Missing Hassaniya/Mauritanian Arabic (thv)** — the prompt called this out specifically. No `thv` / `mey` row anywhere in `words/*.js`. Given that the project already has 5 Berber varieties and 8 Arabic varieties, adding Hassaniya would meaningfully complete the Saharan/Maghrebi continuum. Hassaniya is the cleanest example of strong Berber substrate in an Arabic variety (kinship terms, kinship-numeral system, certain phonotactics). Strong candidate for a future addition. Likewise: Moroccan Standard Tamazight `zgh` (the official orthography form of tzm), Libyan Arabic `ayl`/`ar_ly`, and Zenaga `zen` (Mauritanian Berber).

---

File: `/home/jounlai/langmap/wordmap_reviews/review_99_open.md`
Findings: 25


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 5
- **policy/skip**: 20
- **headline**: rif thanks tanmirt geminate /mː/ restore, tmh mother ma→anna canonical + hello complete form, ar_sd cat ɡutˤː emphatic-geminate, ar_tn thanks شكراً
- **JSON**: /tmp/wm_edits_99.json
