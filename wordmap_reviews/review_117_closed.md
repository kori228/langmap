# Wordmap review #117 — Suprasegmental residue closer (stress, length, tone) round-3

## Reviewer self-introduction (ペルソナ自己紹介)

I am a metrical phonologist returning for the round-3 residue pass after the suprasegmental sweeps of reviews #52 (tone) and #78 (stress placement & syllabic consonants). My framework for stress assignment and syllable parsing is Hayes, *Metrical Stress Theory: Principles and Case Studies* (1995), supplemented per language by Ambrazas (ed.), *Lithuanian Grammar* (1997) and the DLKŽ/VLKK accentuation norms for Lithuanian; Lehiste & Ivić and the Štokavian accentological tradition for BCMS; Drettas, *Aspects pontiques* (1997) and the written-accent convention of Greek for Pontic; Paul, *Zazaki: Grammatik und Versuch einer Dialektologie* (1998) for Zazaki; Jukes, *Makassarese* (2006) for Makassar penultimate stress; Sullivan, *A Maguindanaon Dictionary* (1986) for Maguindanaon; Paul (Hermann), *Mittelhochdeutsche Grammatik* and Einhorn, *Old French: A Concise Handbook* (1974) for the historical Germanic/Romance columns. I know this project's data model cold — `words/<concept>.js` holding `["surface","ipa"]` tuples, the per-language rule that a feature is either marked across all 20 concepts or omitted across all 20, and the review-rally history in `wordmap_reviews/*_closed.md`. My method this round is forensic: grep per-language stress-mark counts across all 20 files, isolate the outliers, and — critically — diff the *applied* fix lists in the closed reviews against the live data, because a mass-application script that works from a "representative" line list leaves exactly the kind of residue this pass exists to catch. Every Current value below was read verbatim from the live file at the cited line on 2026-06-11, and every candidate was grepped against `wordmap_reviews/*_closed.md` to confirm it is neither already fixed nor adjudicated won't-fix.

---

## Issues found

### 1. `lt` — eat & thanks — initial stress missing on two of Lithuanian's marked-stress column (2 entries)
- **File:** words/eat.js line 314; words/thanks.js line 314
- **Current:** `["valgyti", "vɐlɡʲiːtʲɪ"]` (eat); `["ačiū", "ɐtʃʲuː"]` (thanks)
- **Expected:** `["valgyti", "ˈvɐlɡʲiːtʲɪ"]`; `["ačiū", "ˈɐtʃʲuː"]`
- **Why:** Lithuanian has free lexical stress, and the lt column marks it: 13 of the 14 other polysyllabic lt entries carry `ˈ` — `labas → ˈlabɐs` (hello.js:314), `tėvas → ˈtʲeːvɐs` (father.js:314), `širdis → ˈʃʲɪrdʲɪs` (heart.js:314), `akis → ˈakʲɪs` (eye.js:314), `saulė → ˈsaʊlʲeː` (sun.js:320), `motina → ˈmotʲɪnɐ` (mother.js:320). *Válgyti* and *àčiū* are both first-syllable-stressed (DLKŽ accentuation; Ambrazas 1997 §Phonology), so the bare `vɐlɡʲiːtʲɪ` and `ɐtʃʲuː` are internal inconsistencies, not a convention choice. Issues 1–3 together are the complete set of six unstressed lt polysyllables; I split them by stress position so each Expected value is independently checkable.

---

### 2. `lt` — moon — mėnùlis: second-syllable stress missing
- **File:** words/moon.js line 320
- **Current:** `["mėnulis", "mʲeːnʊlʲɪs"]`
- **Expected:** `["mėnulis", "mʲeːˈnʊlʲɪs"]`
- **Why:** *Mėnùlis* is stressed on the second syllable (accent paradigm 2; DLKŽ), i.e. [mʲeːˈnʊlʲɪs] — the transcription already encodes this indirectly, since the short lax [ʊ] of the stressed syllable contrasts with the long unstressed [eː]. The dataset's own narrow style for medial stress is shown by `mother → ˈmotʲɪnɐ` (mother.js:320) and the rest of the marked lt column (see issue 1). Hayes (1995) treats Lithuanian as the canonical free-stress system — exactly the type where the IPA is incomplete without the mark.

---

### 3. `lt` — fire, hand & water — three end-stressed nouns missing `ˈ` (3 entries)
- **File:** words/fire.js line 320; words/hand.js line 314; words/water.js line 321
- **Current:** `["ugnis", "uɡʲnʲɪs"]`; `["ranka", "rɐŋkɐ"]`; `["vanduo", "vɐnduɔ"]`
- **Expected:** `["ugnis", "uɡʲˈnʲɪs"]`; `["ranka", "rɐŋˈkɐ"]`; `["vanduo", "vɐnˈduɔ"]`
- **Why:** *Ugnìs*, *rankà*, *vanduõ* are all end-stressed in the nominative singular citation form (accent paradigms 4/2/3ᵃ respectively; DLKŽ; Ambrazas 1997). Their transcriptions already show the reduced/short pretonic vocalism (`ɐ`, `ʊ`-grade) that only makes sense relative to a stress site — the same self-contradiction review #78 flagged for Russian `lʲʊbofʲ → lʲʊˈbofʲ` (#78 issue 6, applied). With these three plus issues 1–2 fixed, the lt column becomes fully consistent: every polysyllable marked, monosyllable `šuo` (dog.js:314) legitimately bare.

---

### 4. `sr` — heart — срце still has no stress mark after the #78 ring fix; hr/bs twins carry it
- **File:** words/heart.js line 312
- **Current:** `["срце", "sr̩t͡sɛ"]`
- **Expected:** `["срце", "ˈsr̩t͡sɛ"]`
- **Why:** Review #78 issue 9 added the syllabic-/r̩/ ring (applied), and review #87 issue 4 had stress added to twelve sr polysyllables ("sr Cyrillic stress ×12" in the dev response) — but срце was in neither list, so it is now the only sr entry with a correct nucleus and no accent mark. The orthographic-twin entries in the same file are `hr → ["srce", "ˈsr̩t͡se"]` (heart.js:880) and `bs → ["srce", "ˈsr̩t͡se"]` (heart.js:881); Štokavian *sȑce* has initial (falling) accent (Lehiste & Ivić). The [ɛ] was already adjudicated as a defensible sr-wide convention in #78 round-2, so only the `ˈ` is requested.

---

### 5. `sr` — fire, good, hello, house, love & thanks — the six polysyllables the #87 stress sweep missed (6 entries)
- **File:** words/fire.js line 318; words/good.js line 312; words/hello.js line 312; words/house.js line 319; words/love.js line 319; words/thanks.js line 312
- **Current:** `["ватра", "ʋatra"]`; `["добар", "dɔbar"]`; `["здраво", "zdraʋo"]`; `["кућа", "kut͡ɕa"]`; `["љубав", "ʎubaʋ"]`; `["хвала", "xʋala"]`
- **Expected:** `["ватра", "ˈʋatra"]`; `["добар", "ˈdɔbar"]`; `["здраво", "ˈzdraʋo"]`; `["кућа", "ˈkut͡ɕa"]`; `["љубав", "ˈʎubaʋ"]`; `["хвала", "ˈxʋala"]`
- **Why:** Review #87 issue 4 demanded stress on *every* multisyllabic sr entry ("the pattern is exhaustive across all 20 files") but supplied a representative list of twelve lines; the apply script edited exactly those twelve, so the sr column is now split 13-marked / 6-unmarked (plus срце, issue 4) — the worst kind of residue, because the old "uniform per-language convention" defence from review #03 no longer holds. All six are initial-stressed in Štokavian (*vȁtra, dȍbar, zdrȁvo, kȕća, ljúbav, hvála*), and each has a marked Latin-script twin in its own file: `hr ˈʋatra`/`bs ˈvatra` (fire.js:886–887), `hr ˈdobar`/`bs ˈdobar` (good.js:880–881), `bs ˈzdravo` (hello.js:874), `hr ˈkuːt͡ɕa`/`bs ˈkut͡ɕa` (house.js:887–888), `hr ˈʎuːbaf`/`bs ˈʎubav` (love.js:887–888), `hr ˈxʋaːla`/`bs ˈxvala` (thanks.js:880–881). Mirroring the bs short-vowel variants (no length) keeps the sr no-length convention intact.

---

### 6. `pnt` — eye — ομμάτιν: the orthography writes the accent, the IPA drops it
- **File:** words/eye.js line 833
- **Current:** `["ομμάτιν", "omːatin"]`
- **Expected:** `["ομμάτιν", "omˈmatin"]` (or `["ομμάτιν", "oˈmːatin"]` if the single-symbol geminate is kept)
- **Why:** Pontic Greek, like Standard Greek, writes lexical stress with the acute — ομμ**ά**τιν is accented on the penult (Drettas 1997). The pnt column marks stress on all 13 of its other polysyllables: `ˈɣata` (cat.js:833), `ˈskilos` (dog.js:833), `kaliˈmera` (hello.js:826), `efxariˈsto` (thanks.js:833), `karˈði` (heart.js:833), `neˈron` (water.js:833), etc. `omːatin` is the lone unmarked polysyllable — exactly the defect class review #78 closed for `el` (issues 1–4, all applied), here surviving in the Pontic column. Splitting the geminate across the boundary (`omˈmatin`) follows the dataset's own precedent `mak angnginung → ʔaŋˈŋinuŋ` (drink.js:990).

---

### 7. `fro` — water — eve: the only Old French polysyllable with no stress mark
- **File:** words/water.js line 905
- **Current:** `["eve", "ɛːvə"]`
- **Expected:** `["eve", "ˈɛːvə"]`
- **Why:** Old French stress falls on the last full vowel; a word-final schwa is never stressed, so *eve* (< L. *aqua*) is [ˈɛvə] (Einhorn 1974 §3). The fro column marks this systematically on every comparable schwa-final disyllable: `pere → ˈpɛrə` (father.js:905), `mere → ˈmɛrə` (mother.js:911), `lune → ˈlynə` (moon.js:911), `arbre → ˈarbrə` (tree.js:905), `boivre → ˈbojvrə` (drink.js:905). `ɛːvə` is the single polysyllabic fro entry without `ˈ` — a pure outlier against ten marked siblings.

---

### 8. `gmh` — water — wazzer: stress mark dropped in the #20 degemination fix and never restored
- **File:** words/water.js line 920
- **Current:** `["wazzer", "watser"]`
- **Expected:** `["wazzer", "ˈwatser"]`
- **Why:** Middle High German has fixed root-initial stress (Paul, *Mittelhochdeutsche Grammatik*), and every other polysyllabic gmh entry carries `ˈ`: `ˈkatsə` (cat.js:920), `ˈfatər` (father.js:920), `ˈmuoːtər` (mother.js:926), `ˈetsən` (eat.js:913), `ˈhertsə` (heart.js:920), `ɡəˈɡryːətsət` (hello.js:913). Closed review #20 itself gave the target as /ˈwatser/ when removing the spurious geminate, and its worker log explicitly notes "existing absence of leading stress on water left as-is" — i.e. the omission was acknowledged but deliberately left outside that fix's scope, never adjudicated as correct. This closes that acknowledged gap; `watser` is the lone unmarked gmh polysyllable.

---

### 9. `mak` — water — jene: the only Makassarese polysyllable with no stress mark
- **File:** words/water.js line 990
- **Current:** `["jene", "dʒene"]`
- **Expected:** `["jene", "ˈdʒene"]`
- **Why:** Makassarese stress is penultimate (Jukes 2006 §2), and the mak column marks stress on all 19 of its other entries, including every other disyllable: `ˈbapaʔ` (father.js:990), `ˈpepeʔ` (fire.js:996), `ˈʔati` (heart.js:990), `ˈbadʒiʔ` (good.js:990), `ˈseʔɾe` (one.js:996), `buˈlaŋ` (moon.js:996). On the penultimate rule and the shape-matched siblings (*ati*, *baji'*), *je'ne'* takes initial stress: `ˈdʒene`. A 19/20-marked column with one bare cell is a transcription gap, whatever stress analysis one prefers.

---

### 10. `mdh` — moon — bulan: review #48's own Expected was `buˈlan`; the applied lexeme swap dropped the stress
- **File:** words/moon.js line 994
- **Current:** `["bulan", "bulan"]`
- **Expected:** `["bulan", "buˈlan"]`
- **Why:** Closed review #48 replaced the semantically wrong *ulan-ulan* 'drizzle' with *bulan* and wrote the Expected tuple as `["bulan", "buˈlan"]` (review_48_closed.md:102); the round-2 confirmation quoted the bare `["bulan","bulan"]` and the stress silently fell out of the applied value. The live mdh column is otherwise fully stress-marked — 17 of 18 polysyllables carry `ˈ`, and the final-stress pattern for plain disyllables is uniform: `maˈta` (eye.js:988), `liˈma` (hand.js:988), `kaˈkan` (eat.js:981), `ʔaˈpoj` (fire.js:994), `kaˈju` (tree.js:988), `waˈlaj` (house.js:995). `bulan` is now the lone bare polysyllable; restoring `buˈlan` completes #48's own fix (Sullivan 1986).

---

### 11. `zza` — hello & thanks — silam and sıpas: the only Zazaki polysyllables with no stress mark (2 entries)
- **File:** words/hello.js line 838; words/thanks.js line 845
- **Current:** `["silam", "silam"]`; `["sıpas", "sɯpas"]`
- **Expected:** `["silam", "siˈlam"]`; `["sıpas", "sɯˈpas"]`
- **Why:** The zza column marks stress on all 13 of its other polysyllables, with a clean internal pattern: consonant-final disyllables take final stress — `pisîk → piˈsiːk` (cat.js:845), `kuçeg → kuˈt͡ʃɛɡ` (dog.js:845), `adır → aˈdɯɾ` (fire.js:851), `aşmî → aʃˈmiː` (moon.js:851) — while vowel-final ones take initial (`ˈzɛrːe`, `ˈkɛjɛ`, `ˈdaɾɛ`). Zazaki stress is regularly word-final on nouns (Paul 1998 §Phonologie), and both *silam* (< Ar. *salām*) and *sıpas* (< *spas*) are consonant-final disyllables, so the marked-sibling pattern predicts `siˈlam`, `sɯˈpas`. The dataset's own Turkic cell for the same loan agrees: `gag selam → seˈlam` (hello.js:228). These two cells, both flat copies of the orthography, are the only unmarked zza polysyllables.

---

### 12. `egl` — eat — magnèr: stress mark splits an intervocalic onset (`maɲˈɛɾ`)
- **File:** words/eat.js line 303
- **Current:** `["magnèr", "maɲˈɛɾ"]`
- **Expected:** `["magnèr", "maˈɲɛɾ"]`
- **Why:** Orthographic ⟨gn⟩ in Emilian *magnèr* is the single segment /ɲ/. By onset maximization a lone intervocalic consonant syllabifies as the onset of the following — here stressed — syllable (Hayes 1995 §3 on syllable parsing): ma.ˈɲɛɾ, never maɲ.ˈɛɾ, which asserts a vowel-initial stressed syllable and a [ɲ] coda that Emilian does not license. The IPA stress mark goes at the syllable edge, before the whole onset. This is the same defect class as review #78 issue 13 (`sw mwezi: mˈwezi → ˈmwezi`, applied); the egl column's own `amôr → aˈmoːɾ` (love.js:310) shows the correct V.ˈCV placement, and the superficially similar siblings `it manˈd͡ʒaːre` / `lmo maɲˈdʒaː` are fine because there the nasal is a genuine coda before a following affricate onset — `maɲˈɛɾ` has no such following consonant.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

I verified every Current value verbatim against live data and grepped each full per-language column across all 20 word files to confirm the reviewer's internal-consistency claims. Every one of the 12 findings is a clean suprasegmental residue: the named language column marks the feature on all comparable siblings and the flagged cell(s) are the sole outlier(s). All are applied as IPA-only stress-mark additions (no surface orthography touched), except #12 which is an IPA stress-position correction.

- **117-1 `lt` eat valgyti, thanks ačiū** — applied. The lt column marks initial stress on every polysyllable (`ˈnamɐs`, `ˈtʲeːvɐs`, `ˈakʲɪs`, `ˈsaʊlʲeː`, `ˈmotʲɪnɐ`, `ˈɡʲɛrtʲɪ`, …); `vɐlɡʲiːtʲɪ`/`ɐtʃʲuː` are the only unmarked initial-stress entries. → `ˈvɐlɡʲiːtʲɪ`, `ˈɐtʃʲuː`. (applied by orchestrator this round)
- **117-2 `lt` moon mėnulis** — applied. Second-syllable stress (DLKŽ acc. paradigm 2); column-consistent medial marking. → `mʲeːˈnʊlʲɪs`. (applied by orchestrator this round)
- **117-3 `lt` fire ugnis, hand ranka, water vanduo** — applied. End-stressed nominatives; their reduced pretonic vocalism already presupposes a stress site. With 1–3 fixed the entire lt polysyllable column is marked (`šuo` legitimately bare as a monosyllable). → `uɡʲˈnʲɪs`, `rɐŋˈkɐ`, `vɐnˈduɔ`. (applied by orchestrator this round)
- **117-4 `sr` heart срце** — applied. Štokavian *sȑce* initial accent; same-file twins `hr/bs srce → ˈsr̩t͡se`. → `ˈsr̩t͡sɛ`. (applied by orchestrator this round)
- **117-5 `sr` fire ватра, good добар, hello здраво, house кућа, love љубав, thanks хвала** — applied. Confirmed the #87 sweep landed 13/19+срце and left exactly these six bare; each has a stressed Latin twin in its own file (mirroring the bs short-vowel variant keeps the sr no-length convention). → `ˈʋatra`, `ˈdɔbar`, `ˈzdraʋo`, `ˈkut͡ɕa`, `ˈʎubaʋ`, `ˈxʋala`. (applied by orchestrator this round)
- **117-6 `pnt` eye ομμάτιν** — applied. Lone unmarked pnt polysyllable; orthographic acute on penult. Geminate split across the boundary per dataset precedent (`mak ʔaŋˈŋinuŋ`). → `omˈmatin`. (applied by orchestrator this round)
- **117-7 `fro` water eve** — applied. Final schwa unstressable; every other schwa-final fro disyllable marked (`ˈpɛrə`, `ˈmɛrə`, `ˈlynə`, `ˈarbrə`, `ˈbojvrə`). → `ˈɛːvə`. (applied by orchestrator this round)
- **117-8 `gmh` water wazzer** — applied. Fixed root-initial stress; lone unmarked gmh polysyllable (`ˈkatsə`, `ˈfatər`, `ˈetsən`, `ˈhertsə`, …). → `ˈwatser`. (applied by orchestrator this round)
- **117-9 `mak` water jene** — applied. Penultimate stress (Jukes 2006); the 20th and only unmarked mak cell. → `ˈdʒene`. (applied by orchestrator this round)
- **117-10 `mdh` moon bulan** — applied on internal-consistency grounds. NB: the cited #48 provenance is imprecise — review_48_closed.md confirmed/applied the bare `["bulan","bulan"]` (lines 260/291/313), not `buˈlan` (the `buˈlan` at line 102 was an earlier suggestion the closing reviewer overrode). However the live mdh column independently justifies the fix: every CV.CV(C) disyllable takes final stress (`kaˈkan`, `liˈma`, `maˈta`, `kuˈtiŋ`, `kaˈju`, `waˈlaj`) and `bulan` is the lone bare polysyllable. → `buˈlan`. (applied by orchestrator this round)
- **117-11 `zza` hello silam, thanks sıpas** — applied. Consonant-final zza disyllables take final stress (`piˈsiːk`, `kuˈt͡ʃɛɡ`, `aˈdɯɾ`, `aʃˈmiː`); both flagged cells are consonant-final disyllables and the only unmarked zza polysyllables. → `siˈlam`, `sɯˈpas`. (applied by orchestrator this round)
- **117-12 `egl` eat magnèr** — applied. ⟨gn⟩ = single /ɲ/; by onset maximization a lone intervocalic consonant is the onset of the following stressed syllable (ma.ˈɲɛɾ), so the mark belongs before the whole onset. Sibling `amôr → aˈmoːɾ` confirms V.ˈCV; the `it manˈd͡ʒaːre`/`lmo maɲˈdʒaː` cases differ (nasal is a genuine coda before a following affricate). → `maˈɲɛɾ`. (applied by orchestrator this round)

All 12 applied; 0 held.

---

## Reviewer round-2 response (再評価 round-2)

I re-read the full file and the worker round-1 response, then verified all 12 claimed fixes verbatim against live `words/*.js` and re-grepped the cited sibling columns to confirm the internal-consistency arguments still hold.

**Verification of applied fixes (all confirmed present in live data on 2026-06-11):**

- **117-1** ✓ eat.js:314 `["valgyti","ˈvɐlɡʲiːtʲɪ"]`; thanks.js:314 `["ačiū","ˈɐtʃʲuː"]`. Initial stress, column-consistent.
- **117-2** ✓ moon.js:320 `["mėnulis","mʲeːˈnʊlʲɪs"]`. Acc. paradigm 2 medial stress.
- **117-3** ✓ fire.js:320 `uɡʲˈnʲɪs`; hand.js:314 `rɐŋˈkɐ`; water.js:321 `vɐnˈduɔ`. End-stressed nominatives; the lt polysyllable column is now uniformly marked (`šuo` legitimately bare).
- **117-4** ✓ heart.js:312 `["срце","ˈsr̩t͡sɛ"]`. Matches same-file hr/bs `ˈsr̩t͡se` minus the convention-adjudicated [ɛ].
- **117-5** ✓ All six: fire `ˈʋatra` (matches hr twin fire.js:886 exactly, no length — sr convention intact), good `ˈdɔbar`, hello `ˈzdraʋo`, house `ˈkut͡ɕa`, love `ˈʎubaʋ`, thanks `ˈxʋala`. The 13/6 split is closed.
- **117-6** ✓ eye.js:833 `["ομμάτιν","omˈmatin"]`. Geminate split across boundary per dataset precedent; lone unmarked pnt polysyllable resolved.
- **117-7** ✓ water.js:905 `["eve","ˈɛːvə"]`. (Note: the unrelated `hot` `eve` in fire.js:464 is a different language/lexeme, correctly untouched.)
- **117-8** ✓ water.js:920 `["wazzer","ˈwatser"]`. Root-initial stress restored.
- **117-9** ✓ water.js:990 `["jene","ˈdʒene"]`. Penultimate; matches mak `ˈbapaʔ`/`ˈʔati`/`ˈbadʒiʔ` pattern. (shp `jene` at 962 is a different language, untouched — correct.)
- **117-10** ✓ moon.js:994 `["bulan","buˈlan"]`. I accept the worker's transparent provenance correction: the `buˈlan` at review_48_closed.md:102 was a superseded suggestion, not the applied value. The fix nonetheless stands on column-internal grounds — mdh disyllables are uniformly final-stressed (`maˈta`, `liˈma`, `kaˈkan`), so `buˈlan` is correct and `bulan` was the lone bare outlier. Note pam/pag `buˈlan` (moon.js:992-993) corroborate the same Central-Philippine/-adjacent pattern; the many bare `bulan` entries elsewhere belong to other (unmarked-convention) language columns and are correctly left alone.
- **117-11** ✓ hello.js:838 `siˈlam`; thanks.js:845 `sɯˈpas`. Consonant-final final stress, matching `kuˈt͡ʃɛɡ`/`aˈdɯɾ`/`piˈsiːk`.
- **117-12** ✓ eat.js:303 `["magnèr","maˈɲɛɾ"]`. Onset-maximization placement (ma.ˈɲɛɾ); the separate eml `maˈɲɛːr` at eat.js:824 already had correct placement and is consistent.

**New issues:** none. Spot-checks of adjacent same-language cells turned up no collateral errors.

**Scorecard:** 12 accepted (✓), 0 partial, 0 rejected, 0 new. All fixes present and correct in live data; every sibling-consistency claim re-verified.

**File status: CLOSED** — nothing left to address.
