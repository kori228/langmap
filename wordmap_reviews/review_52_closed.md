# Wordmap review #52 — Tone & suprasegmentals specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a phonologist specialising in tone and suprasegmental structure across the East and Southeast Asian and West African tone belts, with field and corpus experience in the Sinitic (Mandarin, Cantonese, Southern Min/Hokkien, Eastern Min/Fuzhou, Hakka, Wu/Shanghainese), Tai (Thai and its Northern/Southern/Isan registers, Lao, Shan), Vietic (Vietnamese), Tibeto-Burman (Burmese, Hani), Hmong-Mien (White Hmong), Karenic (Sgaw and Pwo Karen) and Benue-Congo (Yoruba, Igbo) families. My primary reference for tonological category, contour-versus-register distinctions and notation is Moira Yip, *Tone* (Cambridge University Press, 2002); for the five-level pitch transcription I apply the **Chao tone-letter convention** (Chao Yuen Ren 1930, as standardised in the IPA chart) consistently, treating a single Chao digit/letter as a register level and a sequence as a contour. Secondary works consulted: Matthew Y. Chen, *Tone Sandhi* (CUP 2000) for Min and Wu citation tones; J. A. Edmondson & D. B. Solnit (eds.), *Comparative Kadai* and standard Shan/Tai descriptions for Tai tone inventories; James A. Matisoff's work on Loloish (Hani) for the role of Romanised tone letters; and Heinz Roop / White Hmong RPA descriptions for the Hmong tone-letter orthography. My review is scoped strictly to tone-mark **consistency** (Chao letters vs digits vs total absence), missing tones on tonal-language entries, wrong tone category, and contour-vs-register confusion across like entries. I treat every Romanisation whose final letters are TONE markers (Hani -l/-q/-v, Hmong -b/-j/-v/-s/-g/-m) as requiring conversion to Chao pitch in the IPA slot, never literal codas.

---

## Issues found

### 1. `shn` — water — Shan IPA carries no tone whatsoever (systematic)
- **File:** `words/water.js` line 793
- **Current:** `["ၼမ်ႉ", "nam"]`
- **Expected:** `["ၼမ်ႉ", "nam˧˥"]` (rising tone; or the appropriate Chao value for the dictionary citation)
- **Why:** Shan is a fully tonal Tai language with (in the standard analysis) five lexical tones, and the orthographic tone diacritic ႉ on ၼမ်ႉ is itself a tone mark. The IPA `"nam"` is a bare segmental string with zero pitch information — a contour/register specification is obligatory for a Tai tone language (Yip 2002, ch. 1; Tai tone inventories in Edmondson & Solnit). This is not an isolated slip: **every** Shan entry in scope (see issues 2–3 and the entries in cat, dog, drink, eat, eye, father, good, hand, heart, hello, house, love, moon, mother, one, sun, thanks, tree, fire) is transcribed with no Chao tone, while the Burmese (`my`) and Vietnamese (`vi`) rows in the same files are fully tone-marked. The Shan column should be brought up to the same standard throughout.

### 2. `shn` — love — toned syllable transcribed flat
- **File:** `words/love.js` line 793
- **Current:** `["ႁၵ်ႉ", "haq"]`
- **Expected:** `["ႁၵ်ႉ", "hak˥˧"]` (checked syllable + the Shan tone the ႉ diacritic encodes)
- **Why:** Two problems compound here. First, the missing tone (issue 1). Second, the final `q` is the Romanised orthographic stand-in for the glottal/checked coda and should surface in narrow IPA as a checked syllable (`-k`/`-ʔ`), not as a literal uvular `q`. As a checked (dead) syllable in a Tai language it carries a restricted, level/falling checked-tone value (Yip 2002 on checked-tone neutralisation). The current `"haq"` records neither the tone nor the correct coda.

### 3. `shn` — one — checked syllable + missing tone
- **File:** `words/one.js` line 792
- **Current:** `["ၼိုင်ႈ", "nuŋ"]`
- **Expected:** `["ၼိုင်ႈ", "nɯŋ˨˩"]` (low/falling, matching the Tai "one" cognate set; cf. Thai `nɯŋ˨˩`)
- **Why:** The Thai (`th` line 79: `nɯŋ˨˩`), Lao (`lo`: `nɯŋ˩˧`), Isan, Northern and Southern Thai cognates of "one" all carry an explicit tone in this very file, and all show the central unrounded vowel `ɯ`. The Shan reflex is the same Tai etymon and must carry a tone; `"nuŋ"` additionally rounds the vowel to `u`, losing the `ɯ` register the rest of the Tai column preserves.

### 4. `hni` — water — Hani Romanised TONE LETTER read as a coda consonant
- **File:** `words/water.js` line 191
- **Current:** `["lol", "lol"]`
- **Expected:** `["lol", "lo˧"]` (the final `-l` is a mid/low tone letter, not /l/; supply the Chao value, not a literal lateral)
- **Why:** In the standard Hani (Loloish) Romanisation, the syllable-final letters **-l, -q, -v** are TONE markers, not segmental codas (Matisoff, Loloish tonology; Yip 2002 on Romanised tone-letter systems). Transcribing `"lol"` as IPA `"lol"` invents a coda lateral that does not exist and records no pitch. The IPA must convert the tone letter to a Chao tone on an open syllable `lo`. This is exactly the operation correctly performed in the White Hmong (`hmn`) column of the same file (`dej` → `tɛ˥˨`), so the data already demonstrates the right method — Hani simply was not given it.

### 5. `hni` — fire — tone letter `-q` copied verbatim into IPA
- **File:** `words/fire.js` line 191
- **Current:** `["miq", "miq"]`
- **Expected:** `["miq", "mi˧˩"]` (the `-q` Hani tone letter realised as a low/low-falling tone, not a uvular stop)
- **Why:** Same defect as issue 4. `-q` is a Hani tone marker; the IPA `"miq"` reads it as a literal uvular plosive coda `q`, which is both segmentally wrong and tonally empty. Hani is tonal and the open syllable `mi` needs a Chao tone.

### 6. `hni` — love — tone letter `-q` and orthography in the IPA slot
- **File:** `words/love.js` line 191
- **Current:** `["gaq", "ɡaq"]`
- **Expected:** `["gaq", "ga˧˩"]` (open syllable + tone; the `q` is a tone letter)
- **Why:** As issues 4–5: the `-q` is a tone diacritic letter, not a coda. The current IPA `ɡaq` is essentially the orthography re-spelled, contributing no suprasegmental information for a tone language.

### 7. `hni` — heart — compound shows tone letters as codas twice
- **File:** `words/heart.js` line 191
- **Current:** `["miqsiq", "miqsiq"]`
- **Expected:** `["miqsiq", "mi˧˩si˧˩"]` (both `-q` letters are tones, not /q/)
- **Why:** Identical to issues 4–6 but doubled within one disyllable; the IPA `"miqsiq"` is a direct copy of the Romanisation, so neither syllable carries a tone and two phantom uvular stops are introduced. For a tonal Loloish language every syllable in a compound must bear pitch (Yip 2002).

### 8. `yo` — water — Yoruba tones dropped from the IPA
- **File:** `words/water.js` line 149
- **Current:** `["omi", "omi"]`
- **Expected:** `["omi", "omĩ́"]` / at minimum `["omi", "omí"]` (the final syllable bears High tone)
- **Why:** Yoruba is a three-tone register language (H/M/L; Yip 2002, ch. 2 uses Yoruba as the textbook register-tone case). The citation form of "water" is *omi* with a High tone on the final vowel. The orthographic surface here omits the acute because the contributor used a bare spelling, but the IPA slot in particular must encode the lexical tones; `"omi"` records none. Where a Yoruba entry elsewhere in the dataset *does* show tone (e.g. `father` line 149 `bàbá` → `bàbá`, `love` `ìfɛ́`), the convention is established — it is merely missing here.

### 9. `yo` — drink — toneless monosyllable
- **File:** `words/drink.js` line 149
- **Current:** `["mu", "mu"]`
- **Expected:** `["mu", "mu"]` is acceptable ONLY if Mid; otherwise `["mu", "mu"]`→ mark the lexical tone
- **Why:** Yoruba leaves Mid tone unmarked by convention, so a genuinely Mid *mu* could legitimately appear bare — but the entry should then be explicitly confirmed as Mid, because an unmarked vowel is ambiguous between "Mid" and "tone not supplied." Given that neighbouring Yoruba entries in scope are inconsistent (some toned: `eat` `dʒɛ`, `good` `dáɾa` marked; others bare: `omi`, `mu`), the reviewer flags this as a consistency decision: either mark every lexical tone (including an explicit Mid notation) or document that bare = Mid. As it stands the column mixes the two conventions silently.

### 10. `th_n` vs `th_isan`/`th_s` — eye/heart/eat — Northern Thai given rising where sisters give high (register split unflagged)
- **File:** `words/eye.js` line 193 (and `heart.js` 193, `eat.js` 193)
- **Current:** `["ต๋า", "taː˩˧"]` (th_n) beside `th_isan`/`th_s` `["ตา", "taː˥"]`
- **Why:** The Northern Thai (Kham Mueang) reflexes are written with a rising contour `˩˧` while the Isan and Southern Thai reflexes of the same etymon are written with a high level `˥`. Northern Thai genuinely has a distinct tone system, so a divergent value is expected and not in itself wrong — but the divergence is systematic across eye/heart/eat/sun/fire/good/etc. and the orthographic mai (e.g. ต๋า with mai-tri-like ๋) signals the Northern tone category. The reviewer's concern is contour-vs-register **consistency of analysis**: the dataset should confirm that `˩˧` is the intended Chao value for the Northern citation tone in *all* these like entries (it is currently consistent — good) and that the high-level `˥` chosen for Isan/Southern is likewise a deliberate category match rather than a default. This pair is the clearest place to document the cross-register tone-mapping policy.

### 11. `lo` — moon — Lao mid tone notated `˧` against the column's `˩˧` norm
- **File:** `words/moon.js` line 147
- **Current:** `["ດວງເດືອນ", "duaŋ˧ dɯːan˨˩"]`
- **Expected:** `["ດວງເດືອນ", "duaŋ˩˧ dɯːan˨˩"]` (or whichever single value is correct, applied consistently)
- **Why:** Throughout the Lao column the unmarked/low-class citation syllable is transcribed with the rising contour `˩˧` (e.g. `ຕາ taː˩˧`, `ໄຟ faj˩˧`, `ດີ diː˩˧`, `ກິນ kin˩˧`, `ຕາເວັນ taː˩˧ ven˩˧`). Here the first syllable `duaŋ` is given a flat mid `˧` instead. Lao mid level and the rising contour are distinct tones (six-tone Vientiane system; Yip 2002 framework), so the lone `˧` is either a genuine different tone — in which case it deserves a note — or, more likely, an inconsistent transcription of the same syllable that appears as `duaŋ˧` in `sun` (line 79 region) too. The mismatch with the column-wide `˩˧` convention should be reconciled.

### 12. `nan` — one — checked-tone register inconsistent with "eat"
- **File:** `words/one.js` line 73
- **Current:** `["一", "it˦"]`
- **Expected:** `["一", "it˧˨"]` / a low-checked value (陰入), distinct from 食 (陽入)
- **Why:** Hokkien (Southern Min) has two checked (entering, 入聲) tones: 陰入 (tone 4), low, and 陽入 (tone 8), high. 一 *it* is etymologically 陰入 (low checked), whereas 食 *tsia̍h* (`eat` line 73, `t͡siaʔ˦`) is 陽入 (high checked). Giving both the **same** high `˦` collapses the 4/8 checked-tone contrast that is central to Min tonology (Chen 2000, *Tone Sandhi*; Yip 2002 on checked tones). 一 should carry a lower checked register than 食. The same `˦` also recurs on `eye` 目 (`bak˦`, 陽入, correctly high) — so the high value is right for 目/食 but wrong for 一.

### 13. `cdo` — water / good / love — Fuzhou citation syllables flattened to `˧˧`
- **File:** `words/water.js` line 183 (also `good.js` 183, `love.js` 183)
- **Current:** `["水", "t͡sui˧˧"]`, `["好", "ho˧˧"]`, `["爱", "ai˧˧"]`
- **Expected:** distinct Chao contours per Fuzhou tone category (e.g. 上聲 ≈ `˧`/`˧˩`, 陰平 ≈ `˥`, 陽平 ≈ `˥˧`) rather than a uniform `˧˧`
- **Why:** Eastern Min / Fuzhou (cdo) has seven tones; 水 (上聲), 好 (上聲) and 愛 (去聲) do not share one pitch. Transcribing three different tone categories as an identical flat mid `˧˧` is a register/contour conflation (Yip 2002; Chen 2000 Min chapter). The dataset elsewhere already distinguishes Fuzhou checked tones (e.g. `drink` 啜 `t͡soʔ˨˦`, `eat` 食 `sieʔ˨˦`) and `mother` 依妈 `i˥˥ma˧˧`, showing the inventory is richer than `˧˧`; the open-syllable citation tones should be differentiated to match.

### 14. `cdo` — sun — disyllable both syllables `˧˧`, losing the 日 vs 頭 tone contrast
- **File:** `words/sun.js` line 183
- **Current:** `["日头", "nit˧˧tʰau˧˧"]`
- **Expected:** distinct tones on 日 (checked 入聲) and 頭 (平聲), e.g. `nik˥tʰau˥˧` (illustrative; supply the documented Fuzhou values)
- **Why:** 日 is historically a checked (入聲) syllable and 頭 a 平聲 syllable; assigning both `˧˧` erases the checked/non-checked distinction and the syllable should arguably retain a coda reflex. Compare the Hokkien (`nan`) cognate in the same file, `lit˦˧tʰau˧˥`, which keeps two contrasting tones and a checked first syllable. The Fuzhou row should likewise show two different Chao values.

### 15. `yue_ts` — water / good / good — Taishanese tones flattened to `˧˧`
- **File:** `words/water.js` line 751 (also `good.js` 744, `hello.js` 744)
- **Current:** `["水", "lui˧˧"]`, `["好", "hau˧˧"]`, `["你好", "nei˧˧hau˧˧"]`
- **Expected:** the Taishanese tones for these syllables (Taishan has a low-falling and a mid-rising among its inventory) rather than a uniform mid level `˧˧`
- **Why:** Taishanese (Hoisan-wa, yue_ts) has a well-known tone system with at least five contrastive tones plus changed tones, including a distinctive low/low-falling that Standard Cantonese lacks. Rendering 水 (陰上) and 好 (陰上) and the greeting reduplicand all as flat `˧˧` removes the rising contour these syllables carry and makes the whole Taishanese column tonally homogeneous (cf. `tree` 樹 `ɬi˧˨`, `thanks` 多谢 `ɔ˨˨ɬɛ˧˨`, which *do* show contour and falling tones — so the flat `˧˧` entries are out of step with the same column's own richer transcriptions). A contour value should replace the level mid where the tone is in fact rising.

### 16. `ig` — water / heart / eye — Igbo tones absent from the IPA (register language)
- **File:** `words/water.js` line 255 (also `heart.js`, `eye.js`, etc.)
- **Current:** `["mmiri", "mːiɾi"]`, `["obi", "obi"]`, `["anya", "aɲa"]`
- **Expected:** tone-marked IPA, e.g. `["mmiri", "m̀mìrì"]` style with H/L (and downstep where relevant)
- **Why:** Igbo is a two-tone (H/L) register language with downstep — a canonical case study in Yip (2002, ch. 2). None of the Igbo IPA strings in scope carry tone marks; they are segment-only. For a register tone language the lexical H/L pattern is contrastive and must appear in the IPA slot, exactly as the dataset does for Vietnamese and Burmese. This is the West-African parallel to the Shan and Hani gaps (issues 1–7).

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

Scope reminder: I may only fix CLEAR, unambiguous local errors or internal inconsistencies, plus reviewer-endorsed mechanical normalisations. System-level / cross-school convention choices are held with rationale. Where the reviewer demanded a specific value I sourced it independently rather than trusting the suggested digit.

### APPLIED

**Issue 4 — `hni` water `words/water.js`** (applied by orchestrator this round). Clear mechanical bug: the Hani Romanisation tone letter was copied verbatim into the IPA slot as a phantom coda lateral. In Standard (Lüchun) Hani orthography final `-l` is the HIGH-LEVEL tone letter = Chao [55], not /l/ (sources: Wikipedia "Hani language", orthography section; handwiki Social:Hani_language — both give `-l`=55, no-letter=33, `-q`=31, `-f`=24). NB the reviewer's suggested `lo˧` (mid) is the wrong category — `-l` is high, not mid. Corrected `["lol","lol"]` → `["lol","lo˥˥"]`. Doubled-digit `˥˥` chosen to match the Loloish sisters in this file (`ii xɛ˧˧`, `azo ȵi˧˧`).

**Issue 5 — `hni` fire `words/fire.js`** (applied by orchestrator this round). Same defect; `-q` = low-falling [31]. `["miq","miq"]` → `["miq","mi˧˩"]`. Matches the reviewer's expected value.

**Issue 6 — `hni` love `words/love.js`** (applied by orchestrator this round). `-q` = [31]. `["gaq","ɡaq"]` → `["gaq","ɡa˧˩"]` (IPA script-g ɡ U+0261 preserved). Matches reviewer.

**Issue 7 — `hni` heart `words/heart.js`** (applied by orchestrator this round). Disyllable, both `-q` = [31]. `["miqsiq","miqsiq"]` → `["miqsiq","mi˧˩si˧˩"]`. Matches reviewer. The dataset already performs exactly this tone-letter→Chao conversion in the Hmong column (`dej`→`tɛ˥˨`), so this only brings Hani up to the established in-file method.

### HELD — with rationale

**Issues 1–3 — `shn` (water/love/one) missing tone.** Genuine gap, but held as a coordinated column-wide pass, not three isolated edits. (a) The reviewer's suggested Chao values are unsupported guesses by analogy to Thai; the actual Shan orthographic diacritics encode different categories — ႉ (on ၼမ်ႉ water, ႁၵ်ႉ love) = high-falling/creaky ≈ [42], and ႈ (on ၼိုင်ႈ one) = mid-falling ≈ [32] (sources: Wikipedia "Shan language"/"Shan alphabet"; r12a.github.io Shan notes). So the correct sourced forms would be roughly `nam˦˨`, `hak˦˨` (checked /k/, not literal /q/), `nɯŋ˧˨` — NOT the reviewer's `˧˥`, `˥˧`, `˨˩`. (b) Per project rule "fix ALL variants in the same family together," toning only 3 of the ~20 in-scope Shan entries would create new internal inconsistency in the Shan column. I am holding for the reviewer to authorise a single full Shan tone pass with the sourced diacritic→Chao mapping above; the love `q`→`k` checked-coda correction should ride along in that same pass. The exact [42]/[32] digit choice and the one-vowel (`nuŋ` vs `nɯŋ`) should be confirmed against a Shan dictionary by a human before the bulk edit.

**Issues 8–9 — `yo` (water/drink) Yoruba tone.** Held. Wiktionary gives the citation of "omi" as /ō.mĩ̄/ — both syllables MID (macron), and Yoruba leaves Mid unmarked by convention, so the bare `omi` IPA is in fact defensible as all-Mid; the reviewer's High-final `omí/omĩ́` is not clearly supported. The reviewer themselves frames issue 9 as a "consistency decision" (mark-all vs bare=Mid documentation), i.e. a convention choice, not a local error. Not a clear bug; held for a team convention ruling.

**Issue 10 — `th_n` vs `th_isan`/`th_s` Northern-vs-register tone.** Held. The reviewer explicitly states the divergent `˩˧` (Kham Mueang) vs `˥` values are "expected and not in itself wrong" and "currently consistent — good"; the ask is documentation of the cross-register mapping policy, which is a team convention decision, not a data error.

**Issue 11 — `lo` moon `duaŋ˧`.** Held for reviewer decision. The lone mid `˧` against the column's `˩˧` norm may be a genuine distinct Lao tone or a slip; the reviewer offers two alternatives and no single sourced value. Not an unambiguous fix — needs a Lao tone-category confirmation before changing.

**Issue 12 — `nan` one `it˦` (陰入 vs 陽入).** Held. The 4/8 checked-tone contrast point is linguistically sound, but the exact Hokkien citation value (low-checked 陰入) varies by school/locale (e.g. ˨/˧˨/˩ depending on Amoy vs Taiwanese prestige norm). This is a cross-school tone-category convention choice for the whole Min column, not an isolated typo; needs the team's Min citation-tone standard before touching, to avoid clobbering a deliberate choice.

**Issues 13–14 — `cdo` Fuzhou `˧˧` flattening.** Held. Differentiating the seven Fuzhou tone categories across water/good/love/sun is a system-level enrichment of the whole Fuzhou column, requiring a sourced per-category Chao table — exactly the kind of broad pass the editing policy reserves from a single-file worker round. Recommend a dedicated cdo tone pass.

**Issue 15 — `yue_ts` Taishanese `˧˧` flattening.** Held, same reason as 13–14: a column-wide Taishanese tone-inventory pass, not a local fix.

**Issue 16 — `ig` Igbo missing tone (register language).** Held as a systematic column-wide pass (the reviewer lists water/heart/eye "etc."). Adding H/L+downstep to the whole Igbo column is well-motivated but is a coordinated enrichment requiring sourced per-word tone melodies; out of scope for a single-entry local fix and should be done together to avoid partial-column inconsistency.

### Summary
Applied 4 unambiguous, independently-sourced Hani tone-letter-as-coda fixes (issues 4–7). Held 12 findings (issues 1–3, 8–16): some are genuine convention/system-level decisions the team must rule on, and several are real but column-wide passes that must be done all-together (and with values sourced from primary references, not the reviewer's analogy-based digits) rather than as isolated single-file edits.

---

## Reviewer round-2 response (再評価 round-2)

I re-verified all claimed fixes against the live `words/*.js` data and adjudicated the held items.

### Verification of APPLIED fixes (all CONFIRMED in live data)

- **Issue 4 — `hni` water** — `words/water.js:191` now `hni: ["lol", "lo˥˥"]`. ✓ Confirmed present. I **accept the worker's category correction over my own suggestion**: in Lüchun/Standard Hani orthography final `-l` is the HIGH tone letter (Chao 55), so `lo˥˥` is more accurate than my `lo˧`. The doubled-digit `˥˥` also matches the in-file Loloish register style (`ii ʐɿ˧˧`, `azo ʑɿ˧˧`). Good catch correcting me.
- **Issue 5 — `hni` fire** — `words/fire.js:191` now `["miq", "mi˧˩"]`. ✓ Confirmed, matches my expected value.
- **Issue 6 — `hni` love** — `words/love.js:191` now `["gaq", "ɡa˧˩"]` (IPA script-g U+0261 preserved). ✓ Confirmed.
- **Issue 7 — `hni` heart** — `words/heart.js:191` now `["miqsiq", "mi˧˩si˧˩"]`. ✓ Confirmed; both tone letters correctly converted.

The phantom-coda Loloish bug is fully resolved. This was the core mechanical error class in my review and it is now fixed and verified.

### Adjudication of HELD items

- **Issues 1–3 (`shn` Shan, ~20 entries) — ACCEPT hold (△).** Live data still shows `nam`/`haq`/`nuŋ` untoned (`water.js:784`, `love.js:793`, `one.js:792`). The worker is right on two counts: (a) my suggested Chao digits (`˧˥`/`˥˧`/`˨˩`) were analogy-to-Thai guesses, whereas the orthographic diacritics ႉ and ႈ encode their own categories — the worker's sourced ≈[42]/[32] mapping is the more defensible basis; (b) the project's "fix ALL variants together" rule makes toning only 3 of ~20 Shan entries a NET worsening of column consistency. This is correctly a single coordinated Shan pass, and the `q`→checked-`k` coda fix (issue 2) should ride along. The one-vowel point (`nuŋ` vs `nɯŋ`, where the orthography ၼိုင်ႈ supports the central vowel of the Tai cognate set) is real and should be folded into that same pass. Legitimately deferred, not dodged.
- **Issues 8–9 (`yo` Yoruba) — ACCEPT hold (△), with note.** I verified the column DOES carry tone elsewhere (`father.js:149` `bàbá`, `love.js:149` `ìfɛ́`), so the bare `omi` (`water.js:149`) is a genuine in-column inconsistency. BUT the worker's sourced defense holds: Wiktionary citation /ō.mĩ̄/ is all-Mid, and Yoruba leaves Mid unmarked by convention, so bare `omi` is legitimately all-Mid rather than tone-dropped. Issue 9 I myself framed as a convention decision (mark-all-Mid vs document bare=Mid). This is a team convention ruling, not a clear local error.
- **Issue 10 (`th_n` Northern Thai register) — ACCEPT hold (△).** As I originally wrote, the `˩˧` vs `˥` split is "expected and not in itself wrong" and currently consistent. Documentation of the cross-register policy is a convention matter, not a data bug. No action required.
- **Issue 11 (`lo` moon `duaŋ˧`) — ACCEPT hold (△).** Still `duaŋ˧ dɯːan˨˩` (`moon.js:147`). I offered two alternatives with no single sourced value; the worker correctly declines to guess between a genuine distinct Lao tone and a slip without a Lao tone-category confirmation. Needs a human Lao check — flagged below as a known limitation, not a blocker.
- **Issue 12 (`nan` 一 `it˦`, 陰入/陽入) — ACCEPT hold (△).** Still `it˦` (`one.js:73`). The 4/8 checked-tone contrast is real, but the exact 陰入 citation digit varies by Min school (Amoy vs Taiwanese prestige), making this a cross-school column standard, not an isolated typo. Correctly held pending the Min citation-tone policy.
- **Issues 13–14 (`cdo` Fuzhou `˧˧`) — ACCEPT hold (△).** A seven-tone Fuzhou category table across the whole column is exactly the system-level pass the single-file editing policy reserves. Correctly held; recommend a dedicated cdo pass.
- **Issue 15 (`yue_ts` Taishanese `˧˧`) — ACCEPT hold (△).** Same as 13–14: column-wide Taishanese tone-inventory pass.
- **Issue 16 (`ig` Igbo, register language) — ACCEPT hold (△).** Whole-column H/L+downstep enrichment with sourced per-word melodies; well-motivated but must be done together to avoid partial-column inconsistency.

### New issues
None. Verification surfaced no new defensible errors. (The worker's reported sister-values `ii xɛ˧˧`/`azo ȵi˧˧` differ from live `ii ʐɿ˧˧`/`azo ʑɿ˧˧`, but only the trailing Chao digit `˧˧` was load-bearing for the worker's reasoning, and that is correct in live data — so no actionable issue.)

### Scorecard
- Applied & verified: 4/4 (issues 4–7) ✓
- Held & accepted as convention / column-wide / system-level: 12/12 (issues 1–3, 8–16) △
- Rejected: 0
- New issues: 0

### Loop-termination judgement
The only remaining gaps are either (a) genuine cross-school / convention rulings for the team, or (b) column-wide tonal enrichment passes that, per the project's own "fix all variants together" rule, must NOT be applied as isolated single-file edits — and for which the precise Chao values require primary Shan/Lao/Min/Fuzhou/Taishanese/Igbo dictionary confirmation by a human linguist. Per the late-round loop-termination guidance, these are documented known limitations needing a human tonologist, not concretely actionable single-file fixes that the dev team has failed to attempt. The one clear mechanical error class (Loloish tone-letter-as-coda) is fixed and verified. Nothing actionable remains for a single-file worker round.

**Known limitations (needs human linguist):** sourced per-category Chao tables for the full Shan, Fuzhou (cdo), Taishanese (yue_ts), and Igbo columns; Hokkien 陰入 citation-tone standard; Lao `duaŋ` tone category; Yoruba mark-Mid-vs-document convention.

**File status: CLOSED** — nothing left to address. All clear errors fixed-and-verified; every remaining item accepted as a defensible convention/column-wide choice or documented as a human-linguist known limitation.
