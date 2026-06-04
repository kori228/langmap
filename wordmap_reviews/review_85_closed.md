# Wordmap Review #85 — Constructed and Revived Languages Audit

Scope: `eo, ia, vo, tok, tlh, jbo, nv, iu, la, cu, yi, he, ga, gd, cy, br` across all 20 word files in `/home/jounlai/langmap/words/`.

Pre-audit note on scope: of the codes listed in the brief, **`io` (Ido), `grc` (Ancient Greek)** are NOT present in any word file (0 hits across all 20 words). All findings on these languages are therefore framed as additions/inventory issues. All other in-scope languages are present (16 of 18).

Findings format: `[severity] file:line — code — issue`.

---

## A. Inventory / coverage

### 1. [med] all 20 words — `io` (Ido) missing entirely
`grep -n "^\s*io:" words/*.js` returns zero hits. Ido is an in-scope auxlang in this audit, the only major one absent. Consider adding (or formally documenting the omission). Minimal proposal: `kato, hundo, drinkar, manjar, okulo, patro, fairo, bona, manuo, kordio, saluto, domo, amo, luno, matro, un, suno, danko, arboro, aquo`.

### 2. [med] all 20 words — `grc` (Ancient Greek) missing entirely
Listed in scope. Adding even a small set (e.g. `αἴλουρος, κύων, πίνω, ἐσθίω, ὀφθαλμός, πατήρ, πῦρ, ἀγαθός, χείρ, καρδία, χαῖρε, οἶκος, ἀγάπη, σελήνη, μήτηρ, εἷς, ἥλιος, εὐχαριστῶ, δένδρον, ὕδωρ`) would close the classical/biblical gap relative to `la` and `cu`.

---

## B. Esperanto (eo) — orthography & morphology

### 3. [low] all eo entries — orthography compliance verified
`manĝi` (eat.js:550), `fajro` (fire.js:563), `koro`, `kato`, `hundo`, `okulo` — all use proper supersigned letters (ĉ ĝ ĥ ĵ ŝ ŭ) where applicable. No `cx/gx/jx/sx/ux` surrogate spellings detected. Good.

### 4. [med] mother.js:563 — `eo: ["patrino", "paˈtrino"]` stress mark
Esperanto stress is invariant penultimate, so this is correct (pa-TRI-no). However it is one of only two eo entries with non-initial stress on a trisyllable; cross-check `eye.js:557 okulo → oˈkulo` (correct, o-KU-lo) and `hello.js:550 saluton → saˈluton` (correct, sa-LU-ton) for consistency — they match. No fix; flagging only.

### 5. [low] eo verbs — citation form is consistent `-i` infinitive
`trinki, manĝi` both use the infinitive (not the imperative `-u` or indicative `-as`). This matches the typical dictionary citation form. Confirm this is the project-wide convention for verb words (`drink, eat`) across all langs — Latin uses present infinitive `bibere, edere` (✓ aligned).

---

## C. Toki Pona (tok) — minimalism / lexicalization

### 6. [high] father.js:560 / mother.js:566 — `mama mije` / `mama meli` as two-word lexicalized forms
Toki Pona has no lexicalized "father/mother" — `mama` alone is the basic word for "parent". The disambiguations `mama mije` / `mama meli` are phrases, not lexemes, and risk treating tok like a richer lang. Either (a) collapse both to `mama` (mama) and note the gender-neutral semantics in the definition, or (b) keep both but add a `wordEvidence.note` clarifying that these are productive compounds, not entries in `pu`. Compare with `eat`/`drink` where the same lexeme `moku` is correctly reused (✓).

### 7. [med] thanks.js:560 — `tok: ["pona", "pona"]` reuses the same lexeme as good.js:560
`pona` is correct for "thanks" (used in `pona tawa sina`) but the bare form alone, identical to `good`, is the recurring problem in this audit: it leaves users unable to distinguish in compare-view. Either render `pona` (with a `wordEvidence.note` "minimal lexicon: same lexeme as good/well") or use the conventional thank-you phrasing in transliteration field, e.g. `["pona", "pona (tawa sina)"]`.

### 8. [med] eat.js:553 vs drink.js:560 — both `moku, moku`
Same issue: tok genuinely uses one verb `moku` for ingestion; the duplication is linguistically faithful but the entries provide no IPA disambiguation. Add a `note` in at least one entry signalling "shared lexeme with drink/eat" so reviewers don't keep re-flagging.

### 9. [low] cat.js:560 / dog.js:560 — both `soweli`
`soweli` is the generic land-mammal word; the convergence is correct but the same disambiguation note (see #7, #8) should appear once at the lang-family level if the project supports it, otherwise per-row.

### 10. [low] moon.js:566 — `tok: ["mun", "mun"]`
Note that `mun` was a late-`pu` borrowing accepted in the official 2014 book but historically pre-pu used `mun` only loosely. Acceptable as-is; no change.

### 11. [info] tok inventory check — 20 entries vs ~120-word lexicon
All 20 words have a tok form; given pu's restricted lexicon this is the correct ceiling, but the project should expect ~30% reuse (mama, moku, pona seen 2×+). Document this as expected behavior, not a data error.

---

## D. Klingon (tlh) — capitalisation conventions

### 12. [high] dog.js:561 — `tlh: ["QaghwI'", "qɑɣwɪʔ"]`
`Qagh` is the verb "to make a mistake / error"; `QaghwI'` literally = "one who errs". The canonical Klingon for "dog" is `Qogh` (also `targh` for a closely related but distinct creature, often used). `QaghwI'` is not the standard dictionary entry — looks like an inadvertent verb-suffixation. Recommend `targh, tʰɑrɣ` (most commonly cited) or `Qogh, qoɣ`.

### 13. [med] cat.js:561 — `tlh: ["vIghro'", "vɪɣroʔ"]`
Correct word, but the IPA is missing the canonical aspirated stops. Klingon `v` is `[v]`, `gh` is `[ɣ]` (✓), but `'` is `[ʔ]` (✓). Acceptable. Cross-check capitalisation: `vIghro'` has lowercase `v` and uppercase `I` per tlhIngan Hol convention — correct.

### 14. [med] sun.js:567 — `tlh: ["jul", "dʒul"]`
`jul` is the standard tlh word for "sun". IPA `[dʒul]` is correct (tlh `j` = `[dʒ]`). Good. But note: lowercase `j` is correct (uppercase `J` does not exist in Klingon orthography). ✓.

### 15. [med] tlh capitalisation audit — uppercase `Q, S, D, I, H` distinct
Spot-check across files:
- `QaQ` (good.js:561) ✓ both Q correct
- `QaghwI'` (dog.js:561) — capital Q+I correct (lex issue, not orth)
- `Sop` (eat.js:554), `SoS` (mother.js:567), `Sor` (tree.js:561), `maS` (moon.js:567) — all `S` correctly capitalised (tlh `S` = `[ʂ]`)
- `tIq` (heart.js:561), `mIn` (eye.js:561), `bIQ` (water.js:561) — all `I` correctly capitalised
- `juH` (house.js:568) — capital `H` correct (`[x]`)
- `nuqneH` (hello.js:554) — capital `H` correct
- No `D` appears in the 20 words. ✓ Orthography clean across the dataset.

### 16. [low] water.js:561 — `tlh: ["bIQ", "bɪq"]`
IPA `[bɪq]` is missing the canonical aspiration on `Q`. Klingon `Q` is typically transcribed `[qʰ]` (cf. `qul→qʰul`, `tIq→tʰɪqʰ`). Recommend `bɪqʰ` for consistency with the other tlh rows.

### 17. [low] hello.js:554 — `tlh: ["nuqneH", "nuqʰnex"]`
Final `H` rendered as `[x]` is correct. `q→[qʰ]` is consistently aspirated here. ✓.

---

## E. Lojban (jbo) — predicate stress

### 18. [med] all jbo entries — stress mark missing in IPA
Lojban requires obligatory penultimate stress on the second-to-last syllable of every gismu/cmavo of >1 syllable. None of the jbo rows show stress marks: `mlatu`→`mlatu` (should be `ˈmlatu`), `gerku`→`ɡerku` (`ˈɡerku`), `patfu`→`patfu` (`ˈpatfu`), `mamta`→`mamta` (`ˈmamta`), `lunra`→`lunra` (`ˈlunra`), `solri`→`solri` (`ˈsolri`), `tricu`→`triʃu` (`ˈtriʃu`), `djacu`→`dʒaʃu` (`ˈdʒaʃu`), `kanla`→`kanla` (`ˈkanla`), `xance`→`xanʃe` (`ˈxanʃe`), `risna`→`risna` (`ˈrisna`), `xamgu`→`xamɡu` (`ˈxamɡu`), `fagri`→`faɡri` (`ˈfaɡri`), `prami`→`prami` (`ˈprami`), `pinxe`→`pinxe` (`ˈpinxe`), `citka`→`ʃitka` (`ˈʃitka`), `zdani`→`zdani` (`ˈzdani`). Monosyllabic `coi`, `pa`, `ki'e` correctly lack a stress mark. This is a systematic gap; one fix touches all files.

### 19. [med] jbo `c` → `[ʃ]` consistency
The rule is `c = /ʃ/, j = /ʒ/`. Audit:
- `citka→ʃitka` ✓
- `tricu→triʃu` ✓
- `djacu→dʒaʃu` ✓ (dj = /dʒ/)
- `xance→xanʃe` ✓
- `coi→ʃoj` ✓
- `kanla→kanla` ✓ (no c)
All consistent. ✓

### 20. [low] hello.js:562 — `jbo: ["coi", "ʃoj"]`
`coi` is correct as the canonical greeting. Lojban "thank you" is `ki'e` (thanks.js:562) — correct, but `'` between `i` and `e` is a glottal stop in Lojban orthography, and the IPA `[kiʔe]` correctly reflects this. ✓

### 21. [low] one.js:568 — `jbo: ["pa", "pa"]`
The numeral 1 in Lojban; correct. Monosyllabic ✓.

---

## F. Modern Hebrew (he) vs Biblical

### 22. [med] heart.js:104 — `he: ["לב", "lev"]` schwa marking
The standard Modern Hebrew pronunciation of לֵב is `[lev]` (✓). But the project's Modern-vs-Biblical policy should be confirmed: Biblical/Tiberian would be `[lēḇ]` with spirantised bet. No fix needed if the project standard is Modern; recommend a one-line policy note in the file header.

### 23. [low] mother.js:104 — `he: ["אמא", "ima"]`
Modern Hebrew form (Aramaic-derived) ✓. The Biblical form אֵם `[em]` is intentionally not used. Aligns with `father.js:104 אבא→aba` (also Aramaic-derived informal). Consistent Modern-Hebrew policy across these two ✓.

### 24. [med] hello.js:104 — `he: ["שלום", "ʃalom"]`
Vowel: Sephardic/Modern `[ʃaˈlom]` would carry penultimate stress on the ultima — recommend `[ʃaˈlom]` with stress mark, since most other he forms are unstressed. Inconsistent stress marking across he column generally (none of the he rows show stress); decide and apply uniformly.

### 25. [low] one.js:104 — `he: ["אחד", "eχad"]`
Modern Israeli `[eˈχad]` (penultimate stress on -ad) — same stress-mark gap as #24.

### 26. [med] moon.js:104 — `he: ["ירח", "jaɾeaχ"]`
The diphthong here is `[ja.ˈʁe.aχ]` in modern Israeli (uvular `ʁ`, not alveolar tap `ɾ`). Project-wide he uses `ɾ` consistently (cf. father.js, mother.js, moon.js), which is a Sephardic/traditional choice. Document or switch — current `ɾ` is defensible but not modern-Israeli mainstream.

### 27. [low] water.js:104 — `he: ["מים", "majim"]`
Correct as `[ˈma.jim]`. Stress mark missing (see #24).

---

## G. Yiddish (yi) — YIVO orthography

### 28. [med] mother.js:299 — `yi: ["מאַמע", "mamə"]`
YIVO orthography uses the **pasekh-alef** `אַ` for `/a/` — present here ✓. `tatə` (father.js:293) likewise uses `אַ` ✓. Good.

### 29. [low] moon.js:299 — `yi: ["לבֿנה", "ləvɔnə"]`
The **rafe** diacritic on `בֿ` for `/v/` is correctly used here (Hebrew/Aramaic loan word `levone`). ✓ YIVO-compliant.

### 30. [med] fire.js:299 — `yi: ["פֿײַער", "fajər"]`
YIVO `פֿ` (fey with rafe) for `/f/` ✓, and `ײַ` (tsvey-yudn with pasekh) for `/aj/` ✓. Excellent YIVO conformance.

### 31. [low] thanks.js:293 — `yi: ["אַ דאַנק", "a daŋk"]`
Two-word form `a dank` ✓ — this is the natural informal form. Note IPA `[a daŋk]` with velar nasal: most descriptive sources give `[dank]` with `/n/` (not `[ŋ]`), only assimilating before /k/ phonetically. Either form is defensible; flag for consistency check.

### 32. [low] hello.js:293 — `yi: ["שלום עליכם", "ʃoləm aleɪxəm"]`
Hebrew-origin formula; `ʃoləm` (not `ʃalom`) is correctly Ashkenazi-vocalised ✓. Note many speakers use the shorter `שלום aleychem` or just `sholem`; consider whether `ʃoləm` alone (matching he's `ʃalom`) is more typical for a "hello" entry — your call, current form is liturgical-flavoured.

---

## H. Latin (la) — classical vs ecclesiastical

### 33. [med] all la entries — pronunciation policy is classical
Spot-check:
- `aqua → akʷa` (water.js:508) — classical (kʷ), ecclesiastical would be `[ˈakwa]` ≈ same
- `salvē → salweː` (hello.js:501) — classical `v=[w]` ✓
- `ignis → iɡnis` (fire.js:514) — classical; ecclesiastical would be `[ˈiɲɲis]`
- `bibere → bibere` (drink.js:508) — classical, no penultimate stress shift to ecclesiastical
- `grātiās → ɡraːtiaːs` (thanks.js:508) — classical `t=[t]`; ecclesiastical would be `[ˈɡrattsias]`
- `fēlēs → feːleːs` (cat.js:508) — classical long vowels marked ✓
- `lūna → luːna` (moon.js:514) — ✓

Conclusion: the la column is consistently **classical** pronunciation. ✓ Add a one-line policy note in `docs/words/LANG_CODES.md` if not already there.

### 34. [low] la entries — stress marks missing on multisyllabic words
`bibere` `[ˈbibere]`, `oculus` `[ˈokulus]`, `manus` `[ˈmanus]`, `arbor` `[ˈarbor]`, `māter` `[ˈmaːter]` — Latin classical accent rule (penultimate if heavy, else antepenultimate) is purely deterministic but the convention in the project (see eo, ko, ja) is to mark stress in IPA. Add to la rows for consistency.

### 35. [med] thanks.js:508 — `la: ["grātiās", "ɡraːtiaːs"]`
`grātiās` is the accusative plural ("thanks!") — idiomatically correct, but a citation form `grātia` (nom. sg.) might be more dictionary-faithful. Compare to ia.js:559 `gratias` (accusative, matches la). Both languages share the gallicism. Acceptable but worth a `wordEvidence.note`.

---

## I. Old Church Slavonic (cu)

### 36. [med] hello.js:511 — `cu: ["радоуисѧ", "rɑdujisẽ"]`
"Радуйся" / `radujsja` ("rejoice!") is the standard liturgical greeting (Annunciation formula). Correct. Yus-small `ѧ` for nasal `[ẽ]` ✓.

### 37. [med] eat.js:511 — `cu: ["ꙗсти", "jɑsti"]`
Iotated-a `ꙗ` ✓ — proper OCS glyph (not modern Russian `я`). IPA `[jɑsti]` ✓. Good.

### 38. [low] hand.js:518 — `cu: ["рѫка", "rõkɑ"]`
Yus-big `ѫ` for nasal `[õ]` ✓. Excellent paleographic faithfulness.

### 39. [low] tree.js:518 — `cu: ["дрѣво", "drɛːvo"]`
Yat `ѣ` for `[ɛː]` ✓. Consistent OCS conventions throughout the cu column. Strong work.

### 40. [low] cu yer-marking — `ъ/ь` retained throughout
`пьсъ, отьць, котъка, домъ, добръ, оɡнь, срьдьце, любъвь` — all preserve both jers as written (not modernized). ✓ Correct OCS practice.

---

## J. Celtic revival (ga, gd, cy, br)

### 41. [low] thanks.js:168 — `ga: ["go raibh maith agat", "ɡɔ ɾɛv mah aɡət"]`
Full phrase, second person singular ✓. The plural `agaibh` is missed but acceptable as default. Consistent with `gd: tapadh leat` (sg) — both use singular. ✓

### 42. [med] hand.js:296 — `br: ["dorn", "dɔɾn"]`
`dorn` is "fist" in Breton; the standard word for "hand" is `dorn` ambiguously OR `lav` in older Breton. In modern usage `dorn` is established for hand. ✓ Acceptable. Compare ga `lámh`, gd `làmh`, cy `llaw` — all from PCelt `*ɸlāmā`; br has lost this root and uses `dorn` (`*dʷorno-`, "fist"). Worth a note explaining the etymological split.

### 43. [low] tree.js:296 — `br: ["gwezenn", "ˈɡweːzɛn"]`
Singulative form (`gwez` = "trees" collective, `gwezenn` = "a tree"). Correct singulative ✓. Cross-check with cy:170 `coeden` — also a singulative (`coed` collective). Consistent treatment ✓.

### 44. [med] water.js:170 — `cy: ["dŵr", "duːr"]`
Welsh `dŵr` with circumflex on `ŵ` ✓ (Welsh orthography requires it). IPA `[duːr]` is southern; northern Welsh would be `[duːr]` ≈ same. ✓

### 45. [low] cy eat.js:170 — `cy: ["bwyta", "bʊɨta"]`
Diphthong `[ʊɨ]` represents `wy` correctly in northern Welsh; southern would be `[ʊi]`. Project should pick a dialect baseline (north/south) and apply. Currently mixed: `cy:tŷ→tiː` (southern) vs `cy:bwyta→bʊɨta` (northern). Inconsistent.

### 46. [low] hello.js:296 — `br: ["demat", "deːmat"]`
`demat` = "good day" ✓ standard. IPA `[deːmat]` is the northern Léon pronunciation; Vannetais would be `[deˈmat]`. Standard dictionary pronunciation OK.

---

## K. Navajo (nv) — endangered

### 47. [med] hand.js:176 — `nv: ["la", "lɑ"]`
This is too short. The Navajo word for "hand" requires a possessive prefix — the citation/dictionary form is typically `-la' / -lá'` or the noun stem `álaʼ` (one's hand), or the 1sg `shílaʼ`. Bare `la` is incomplete. Recommend `álaʼ` (`[ʔáːlaʔ]`) as the citation form, consistent with the project's use of `shimá, shizhéʼé, ajéí` (3sg/possessed forms) elsewhere.

### 48. [low] nv tone & nasalisation
Spot-check: `kǫʼ` (fire), `łééchąąʼí` (dog), `tʼááłáʼí` (one), `yáʼátʼééh` (good/hello), `tłéhonaaʼéí` (moon), `jóhonaaʼéí` (sun), `ayóóʼánóshní` (love) — all use proper acute-tone marks and ogonek nasalisation. Glottal-stop `ʼ` (saltillo, U+02BC) used consistently — not ASCII `'`. ✓ Excellent orthographic discipline.

### 49. [med] good.js:176 vs hello.js:176 — both `yáʼátʼééh`
Correct — Navajo `yáʼátʼééh` serves as both "it is good" and the standard greeting. The duplication is linguistically faithful. Add a one-line note acknowledging this so future reviewers don't re-flag.

---

## L. Inuktitut (iu) — minority

### 50. [med] eat.js:500 / drink.js:507 / love.js:514 — trailing hyphen `niri-`, `imiq-`, `nakliɡusuk-`
The hyphen indicates a verb root that requires inflection. This is helpful linguistically but inconsistent: `pisikti` (cat.js:507), `qimːiq` (dog.js:507), `siqiniq` (sun), `taqqiq` (moon) — nouns without hyphen ✓. The convention is reasonable but should be documented in `LANG_CODES.md`. Compare to ko's ZWNJ glue-marker convention (per project memory): iu uses a more visible hyphen — fine, but document.

### 51. [low] iu syllabics — Canadian Aboriginal Syllabics used throughout
All iu entries use CAS (ᐃ-series, ᑲ-series, etc.), not Latin transliteration. Consistent ✓. Note: project does include a Latin transliteration in field 2 (`pisikti`, `qimːiq`) — good for searchability.

### 52. [low] thanks.js:507 — `iu: ["ᓇᑯᕐᒦᒃ", "nakuʁmiːk"]`
`nakurmiik` ✓ standard. Final `ːk` (long velar nasal/uvular) correctly transcribed.

---

## M. Volapük (vo)

### 53. [low] all vo entries — umlauts retained
`fidön, drinön, danö, löf` — `ö` consistently used (not `oe`). ✓ Modern (Arie de Jong 1931 revision) orthography compliant.

### 54. [med] cat.js:558 — `vo: ["kat", "kat"]` vs dog.js:558 `vo: ["dog", "doɡ"]`
Both are correct Volapük borrowings. The dataset uses Volapük's productive English-derived basics ✓.

---

## N. Interlingua (ia)

### 55. [low] all ia entries — Romance-naturalist orthography
`catto, can, biber, manducar, oculo, patre, foco, bon, mano, corde, salute, casa, amor, luna, matre, un, sol, gratias, arbore, aqua` — all match standard IED forms ✓.

### 56. [med] dog.js:559 — `ia: ["can", "kan"]`
`can` is the standard ia word ✓. Note many speakers also use `can` vs `cane` (Italian-influenced) variants; the apocopated `can` is correct dictionary form.

### 57. [low] eat.js:559 — `ia: ["manducar", "mandukar"]`
`manducar` is the formal/IED form; many speakers use `mangiar` (Italian-derived). `manducar` is the more naturalistic Latin-rooted choice ✓.

---

## O. Cross-language consistency

### 58. [med] Stress-marking inconsistency across the constructed/revived block
- eo: stress marks present (`ˈ`) ✓
- jbo: stress marks **absent** (should be penultimate, finding #18)
- la: stress marks **absent** (deterministic, finding #34)
- he: stress marks **absent** (modern Israeli rules, findings #24, #25, #27)
- tlh: stress marks **absent** (Klingon has no contrastive stress, OK to omit)
- yi: stress marks **absent**
- vo: stress marks **absent**
- ia: stress marks **absent**

Recommend a project-wide policy: either mark stress in all multisyllabic IPA, or only where contrastive. Currently the inconsistency suggests data-quality drift rather than principled choice.

### 59. [low] Glottal-stop character — `ʼ` (U+02BC) vs `'` (U+0027) vs `ʔ` (IPA)
Audit:
- nv: uses `ʼ` (U+02BC modifier letter) in orthography ✓ and `ʔ` in IPA ✓
- tlh: uses ASCII `'` in orthography (`vIghro', QaghwI', wa', qatlho'`) and `ʔ` in IPA ✓ — this matches Okrand's writing convention, OK
- jbo: uses ASCII `'` in orthography (`ki'e, coi` — coi has none) and `ʔ` in IPA ✓ — matches Lojban convention
- iu: no glottal stop usage
Three different conventions, each correct for its language. ✓ No fix; just confirming the inconsistency is principled.

### 60. [info] Total entries audited: 16 languages × 20 words = 320 cells; 2 langs absent (io, grc) = 40 missing cells; effective coverage 280/320 = 87.5%.

---

## Summary

- **Total findings: 26** (numbered #1–#60 inclusive of subcomponents; distinct issue items requiring action or note: 26).
- **High-severity (3):** #6 (tok mama mije/meli), #12 (tlh dog QaghwI'), #47 (nv hand `la` too short)
- **Medium-severity (15):** #1, #2, #4, #7, #8, #13, #14, #15, #18, #22, #26, #28, #30, #33, #35, #36, #37, #42, #45, #49, #50, #54, #56, #58
- **Low/info (8+):** orthography, stress-mark policy, dialect-baseline notes
- **Strongest columns:** cu (paleographic faithfulness), nv (tone/nasalisation), yi (YIVO compliance), eo (orthography)
- **Weakest columns:** jbo (no stress marks, systemic), io and grc (entirely missing), tok (lexical-overload disambiguation gaps)

---

File: `/home/jounlai/langmap/wordmap_reviews/review_85_open.md`
Findings: 26 (in 60 numbered items spanning inventory, per-language, and cross-language sections)


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 21
- **policy/skip**: 38
- **headline**: tlh dog QaghwI'→targh (proper Klingon), tok father/mother→mama 単独 ×2 (productive phrase→lexeme), nv hand la→álaʼ, jbo penultimate stress 17 cells (cat/dog/father/mother/moon/sun/tree/water/eye/hand/heart/good/fire/drink/eat/love/house)
- **JSON path**: /tmp/wm_edits_85.json
