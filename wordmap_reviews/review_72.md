# Wordmap review #72 — Dialect-differentiation & anti-duplication auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a comparative dialectologist and lexical-database auditor. My standing brief on this project is the variant-vs-parent convention: every dialect/variant code (`es_mx` vs `es_ar`, `fr` vs `fr_qc`, `ja` vs `ja_osa`, `ar` vs `ar_eg`, `pt_eu` vs `pt_br`, the `yue`/`zh` regional sets, `abq` vs its Abkhaz sibling `ab`) is expected to carry the *famous* lexical or phonetic difference from its standard, never a lazy copy, and the same `[surface, ipa]` array must never be reused for two semantically unrelated concepts under one code (the textbook signature of a wrong-row paste, cf. the historical `jaq` mother=one bug, now fixed). My method is programmatic: I `eval` each `WORDS.<concept>` object in Node, run a per-code cross-concept value-collision scan over all 20 files, then read every offending line verbatim before reporting. The reference works behind the linguistic judgements below: for French, **Walker (1984) _The Pronunciation of Canadian French_**, **Detey, Durand, Laks & Lyche (eds., 2016) _Varieties of Spoken French_ (the PFC project)**, and **Côté (2012) on Laurentian French laxing**; for the merger/non-merger of /œ̃/–/ɛ̃/, the PFC corpus survey; for NW-Caucasian, **Chirikba (1996) _A Dictionary of Common Abkhaz_** and **O'Herin (2002) _Case and Agreement in Abaza_**; for the Mande tone facts, **Vydrin (2016) on South Mande** and **Le Saout / Bearth on Dan/Mano tone**. The project docs I lean on are `docs/words/CONTRIBUTING.md` (the `[surface, ipa]` tuple contract and "IPA, not romanisation" rule) and `docs/words/LANG_CODES.md` (family + speaker counts, used to decide which gaps are real and which forms are well-documented enough to assert). Because this is the 8th review wave the major-language dialect grids (Spanish, Portuguese, German, Arabic, Cantonese, Mandarin regional) are now genuinely clean and well-differentiated, so I lead with the few sharp survivors rather than pad. Every "Current" value below was copied directly from the live file at the cited line; no data file was modified.

---

## Issues found

### 1. `fr_qc` / `fr_be` / `fr_ch` — one — /ɛ̃/ given to exactly the varieties that PRESERVE /œ̃/ (backwards)
- **File:** `words/one.js` lines 502, 504, 505 (and 503 `fr_af`)
- **Current:** `fr_qc: ["un", "ɛ̃"]`, `fr_be: ["un", "ɛ̃"]`, `fr_ch: ["un", "ɛ̃"]` (parent L93 `fr: ["un", "œ̃"]`)
- **Expected:** `fr_qc: ["un", "œ̃"]`, `fr_be: ["un", "œ̃"]`, `fr_ch: ["un", "œ̃"]`
- **Why:** This inverts the actual isogloss. The /œ̃/→/ɛ̃/ merger of *un* and *in* is a feature of **Parisian / hexagonal reference French** — i.e. the *parent* `fr` — whereas **Quebec (Laurentian), Belgian and Swiss** French are precisely the conservative varieties that **retain** the nasal front-rounded /œ̃/ and keep *un* /œ̃/ ≠ *brin* /ɛ̃/ as a live phonemic contrast (Walker 1984 §4; Detey et al. 2016, PFC points Québec/Liège/Neuchâtel; Côté 2012). As written, the data assigns the merged Parisian value to the three regions that resist the merger while leaving the *un*merged /œ̃/ on the standard label — the relationship should be flipped. (`fr_af` /ɛ̃/ at L503 is more variable across sub-Saharan norms; the firm, sourceable correction is the QC/BE/CH trio.)

---

### 2. `abq` — eye — identical to `abq` dog (`ла`/la); the Abkhaz sibling proves they must differ
- **File:** `words/eye.js` line 673 (cf. `words/dog.js` line 673)
- **Current:** `abq: ["ла", "la"]` for **eye** — byte-identical to `abq: ["ла", "la"]` for **dog**
- **Expected:** an Abaza word for "eye" distinct from "dog"; re-source from a published Abaza lexicon (the *bla*/*la* "eye" root, not the "dog" word)
- **Why:** This is a cross-concept duplicate between two semantically unrelated concepts — the wrong-row-paste signature. The decisive evidence is the immediately adjacent sibling **Abkhaz** `ab` (same Abkhaz-Abaza branch, per `LANG_CODES.md`), which in the very same files cleanly distinguishes the two: `ab` dog `["ала", "aːla"]` (`dog.js` L672) vs `ab` eye `["абла", "abla"]` (`eye.js` L672). Abaza "dog" is indeed *la* (ла), so the **dog** cell is right and the **eye** cell has been copied from it (Chirikba 1996; O'Herin 2002). I flag rather than assert the exact Abaza surface, since I will not fabricate it offline — but the identity with "dog" cannot stand.

---

### 3. `fr_qc` — moon — Quebec high-vowel laxing not applied (`lyn`), though it IS applied to `merci`
- **File:** `words/moon.js` line 502
- **Current:** `fr_qc: ["lune", "lyn"]`
- **Expected:** `fr_qc: ["lune", "lʏn"]`
- **Why:** Laurentian (Quebec) French obligatorily laxes the high vowels /i y u/ → [ɪ ʏ ʊ] in closed syllables checked by a non-lengthening consonant — *lune* is the canonical textbook example, realised [lʏn] (Walker 1984 §3.2; Côté 2012). The dataset already encodes this very rule for the same variety one file over — `fr_qc` thanks `["merci", "mɛʁsɪ"]` (`thanks.js` L496) correctly laxes /i/→[ɪ] — so leaving *lune* as the un-laxed Parisian [lyn] is an internal inconsistency, not a transcription policy. The fix mirrors the existing `merci` treatment.

---

### 4. `mev` — drink / eye — tone-stripped IPA makes two distinct Mano words identical (`mi`)
- **File:** `words/drink.js` line 611 and `words/eye.js` line 611
- **Current:** both `mev: ["mi", "mi"]`
- **Expected:** restore the lexical tone, e.g. `["mì", "mì˨"]` (drink) vs `["mɛ̃́/mìá", …]` (eye) — per a Mano dictionary
- **Why:** Mano (Niger-Congo, South Mande, ~400K speakers per `LANG_CODES.md`) is a register-tone language in which minimal pairs are distinguished **by tone alone**. By writing the IPA with no tone diacritic at all, two unrelated concepts ("drink" verb, "eye" noun) collapse to the identical array `["mi","mi"]`, which both violates the anti-duplication rule and drops phonemic information the `[surface, ipa]` contract is meant to carry (Vydrin 2016; Bearth on Mano tone). The surface may legitimately share the segment string, but the IPA must mark the tone so the entries are intentionally distinct rather than accidentally identical.

---

### 5. `mev` — dog / heart — same tone-stripping collision (`gba`)
- **File:** `words/dog.js` line 611 and `words/heart.js` line 611
- **Current:** both `mev: ["gba", "ɡba"]`
- **Expected:** tone-marked IPA distinguishing the two Mano lexemes (e.g. `ɡ͡bā` vs `ɡ͡bà` per source)
- **Why:** Same defect as #4 in the same language: "dog" and "heart" are semantically unrelated yet share a byte-identical tone-less array. In Mano these are separate words kept apart by tone (Vydrin 2016). Note also that the labial-velar should be written as the single phoneme /ɡ͡b/ (tie bar), not the digraph "ɡb", which the bare string implies is /ɡ/+/b/. Add tone + tie bar so the collision disappears.

---

### 6. `dnj` — hand / house — tone-stripped IPA makes two distinct Dan words identical (`kɔ`)
- **File:** `words/hand.js` line 612 and `words/house.js` line 619
- **Current:** both `dnj: ["kɔ", "kɔ"]`
- **Expected:** tone-marked IPA distinguishing "hand" from "house" (e.g. `kɔ̄` vs `kɔ̏`/`kɔ̰` per a Dan source)
- **Why:** Dan (Niger-Congo, Eastern/Southern Mande, ~1.6M speakers per `LANG_CODES.md`) has one of the densest tone systems in West Africa (up to five level tones; Vydrin 2016). "Hand" and "house" are unrelated concepts that here share the tone-less array `["kɔ","kɔ"]`; in Dan they are kept apart by tone. As in #4–#5, the surface may overlap but the IPA must encode the distinguishing tone, both to satisfy the `[surface, ipa]` IPA-not-romanisation rule and to remove the spurious cross-concept identity.

---

### 7. `mev` — fire / hand — tone-stripped IPA makes two distinct Mano words identical (`kɔ`)
- **File:** `words/fire.js` line 617 and `words/hand.js` line 611
- **Current:** both `mev: ["kɔ", "kɔ"]`
- **Expected:** tone-marked IPA distinguishing "fire" from "hand"
- **Why:** A third independent tone-collision in Mano (after #4 `mi` and #5 `gba`): "fire" and "hand" are unrelated concepts sharing the identical tone-less array. Three separate spurious homophone-pairs in one language is itself diagnostic that the Mano IPA column was filled without tone. The fix is systematic: a tone pass over all `mev` entries (Vydrin 2016; Le Saout). Listed separately because it is a distinct concept-pair/line set.

---

### 8. `bm` — hello — Bambara greeting cell is a paste of the thanks formula, with wrong vowel/affricate
- **File:** `words/hello.js` line 595 (cf. `words/thanks.js` line 604)
- **Current:** `bm: ["i ni ce", "i ni tʃe"]` for **hello** — identical to the **thanks** cell
- **Expected:** for *thanks* keep the formula but fix the IPA to `["i ni cɛ", "i ni t͡ʃɛ"]`; for *hello* supply a time-neutral greeting (e.g. `["i ni sɔgɔma", …]` morning / a documented neutral form) distinct from the thanking formula
- **Why:** *I ni cɛ* (lit. "you and the effort") is in standard descriptions the **thanking** expression, not the default greeting; Bambara greetings are the time-of-day "i ni X" set (Vydrin/Bailleul Bambara lexica). The hello cell being byte-identical to thanks is the cross-concept paste signature. Independently, the IPA is wrong even for the thanks sense: Bambara orthographic *e* in *cɛ* is /ɛ/ (the word is *cɛ*, not *ce*), and *c* is the affricate /t͡ʃ/ (tie bar), so it should be /t͡ʃɛ/, not /tʃe/. At minimum correct the vowel/affricate; ideally differentiate the greeting.

---

### 9. `ja_oki` — moon — Okinawan transcription `t͡ɕit͡ɕi` collides with the word for "father"-class items and needs verification
- **File:** `words/moon.js` line 60
- **Current:** `ja_oki: ["月", "t͡ɕit͡ɕi"]`
- **Expected:** verify against an Okinawan source; the expected reflex of 月 *tsuki* is *tsiki* [t͡siki]/[t͡ɕiki], not the fully reduplicated [t͡ɕit͡ɕi]
- **Why:** Standard Okinawan (Shuri-Naha) sound correspondences raise *u*→*i* and palatalise *ki*, giving 月 "moon" as *tsiki* — transcribed [t͡siki] or [t͡ɕiki] (Okinawan dictionaries; Karimata's Ryukyuan phonology). The data's `t͡ɕit͡ɕi` would require *both* syllables to become the affricate t͡ɕi, which is not the regular outcome for the *-ki* of *tsuki* and reads instead like the child-word *chichi*. The neighbouring `ja_rys` correctly keeps a [tsɨkɨ]-type reflex (`moon.js` L65 `["月", "t͡sɨkɨ"]`), which highlights `ja_oki` as the outlier to re-check. I flag for verification rather than assert a single replacement.

---

### 10. `nan_xm` / `nan_zz` — eye / one / mother — duplicate object keys still live (data-loss hazard outside water/eat/hello)
- **File:** `words/eye.js` lines 340–341 vs 354–355; `words/one.js` 346–347 vs 360–361; `words/mother.js` 346–347 vs 360–361 (same pattern for `yue_zs`/`yue_dg`/`yue_nn`/`zh_cq`/`zh_xa`)
- **Current (eye):** L340 `nan_xm: ['目睭 (ba̍k-chiu)', 'bak̚˦ tsiu˦']` … later L354 `nan_xm: ['目睭', 'bak̚˦ tsiu˦']` (the romanised first copy is overwritten by the plainer second)
- **Expected:** a single key per code, retaining the Pe̍h-ōe-jī gloss `'目睭 (ba̍k-chiu)'`
- **Why:** Review #70 fixed this exact duplicate-key/overwrite defect in `water.js`/`eat.js`/`hello.js` only, and explicitly deferred the remaining 17 files as a follow-up "mechanical block-dedup". It is still live here: a JS object literal cannot hold two properties with the same key, so the **second** declaration silently wins and the richer POJ-glossed first copy (`(ba̍k-chiu)`, `(chi̍t / it)`, `(lāu-bú)`) is dead code. In `one.js` the surviving second copies even carry the per-variety tone split (Xiamen `tsit̚˦` vs Zhangzhou `tsit̚˩˨˩`), so the latent desync hazard the earlier review described is real. I record it here so the deferred dedup is not lost; collapse each pair to one key and keep the romanised surface.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
