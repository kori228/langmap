# Wordmap review #72 — Dialect-differentiation & anti-duplication auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a comparative dialectologist and lexical-database auditor, and my standing brief on this project is twofold: (a) every dialect/variant code (`fr` vs `fr_qc`/`fr_be`/`fr_ch`, `es` vs `es_mx`/`es_ar`, `ja` vs `ja_oki`, `ko` vs `ko_bus`/`ko_jeju`, `nan_xm` vs `nan_zz`, the Abkhaz–Abaza pair `ab`/`abq`) must carry the *famous* lexical or phonetic difference from its parent and never be a lazy copy; and (b) the same `[surface, ipa]` array must never be reused for two semantically unrelated concepts under one code — the textbook signature of a wrong-row paste (cf. the historical `jaq` mother=one bug, since fixed). My method is programmatic: I `eval` each `WORDS.<concept>` object in Node, run a per-code cross-concept value-collision scan over all 20 files, screen out the legitimate homophones (greeting≈thanks, Persian *xordan* "eat/drink", Mizo *in* "drink/house", Noongar *ngangk* "sun/mother") and the `["—","—"]` gap rows, then read every surviving offending line verbatim before reporting. The reference works behind the linguistic judgements below: for French, **Walker (1984) _The Pronunciation of Canadian French_**, **Detey, Durand, Laks & Lyche (eds., 2016) _Varieties of Spoken French_ (the PFC project)** and **Côté (2012)** on Laurentian high-vowel laxing and the /œ̃/–/ɛ̃/ isogloss; for NW-Caucasian, **Chirikba (1996) _A Dictionary of Common Abkhaz_** and **O'Herin (2002) _Case and Agreement in Abaza_**; for the South/East Mande tone facts, **Vydrin (2016)** and **Le Saout / Bearth** on Dan and Mano tone; for the Trans-New-Guinea and Chadic gaps, **Fedden (2011) _A Grammar of Mian_**, the Engan and Nalca descriptive literature, and the Mafa-Daba Chadic wordlists; for Bambara, **Vydrin / Bailleul**'s Bambara lexica. Project docs leaned on: `docs/words/CONTRIBUTING.md` (the `[surface, ipa]` tuple contract and "IPA, not romanisation" rule) and `docs/words/LANG_CODES.md` (family + speaker counts, used to decide which gaps are real and which forms are well-documented enough to assert). Because this is the 8th wave the major-language dialect grids (Spanish, Portuguese, German, Cantonese, Korean, Min-nan) are now genuinely clean and well-differentiated, so I lead with the few sharp survivors and the cross-concept duplicates the scan still finds. Every "Current" value below was copied directly from the live file at the cited line; no data file was modified.

---

## Issues found

### 1. `fr_qc` / `fr_be` / `fr_ch` — one — /ɛ̃/ given to exactly the varieties that PRESERVE /œ̃/ (isogloss inverted)
- **File:** `words/one.js` lines 502, 504, 505 (parent `fr` at line 93)
- **Current:** `fr_qc: ["un", "ɛ̃"]`, `fr_be: ["un", "ɛ̃"]`, `fr_ch: ["un", "ɛ̃"]` — parent `fr: ["un", "œ̃"]`
- **Expected:** `fr_qc: ["un", "œ̃"]`, `fr_be: ["un", "œ̃"]`, `fr_ch: ["un", "œ̃"]`
- **Why:** This inverts the actual isogloss. The /œ̃/→/ɛ̃/ merger of *un* and *in* is a feature of **Parisian / hexagonal reference French** — i.e. the *parent* `fr` — whereas **Quebec (Laurentian), Belgian and Swiss** French are precisely the conservative varieties that **retain** the nasal front-rounded /œ̃/ and keep *un* /œ̃/ ≠ *brin* /ɛ̃/ as a live phonemic contrast (Walker 1984 §4; Detey et al. 2016, PFC points Québec/Liège/Neuchâtel; Côté 2012). As written, the data hands the merged Parisian value to the three regions that resist the merger while leaving the unmerged /œ̃/ on the standard label — the values should be flipped. (The parent `fr` keeping /œ̃/ is itself the conservative reading; if anything the *parent* could merge to /ɛ̃/ — but the firm, defensible correction is that the QC/BE/CH trio must not be more advanced than the standard.)

---

### 2. `fr_qc` — moon — Quebec high-vowel laxing not applied (`lyn`), though it IS applied to `merci`
- **File:** `words/moon.js` line 502
- **Current:** `fr_qc: ["lune", "lyn"]`
- **Expected:** `fr_qc: ["lune", "lʏn"]`
- **Why:** Laurentian (Quebec) French obligatorily laxes the high vowels /i y u/ → [ɪ ʏ ʊ] in closed syllables checked by a non-lengthening consonant — *lune* is the canonical textbook example, realised [lʏn] (Walker 1984 §3.2; Côté 2012). The dataset already encodes this very rule for the same variety one file over: `fr_qc` thanks `["merci", "mɛʁsɪ"]` (`thanks.js` L496) correctly laxes /i/→[ɪ] while `fr_be`/`fr_ch` keep tense `mɛʁsi` (L498–499). Leaving *lune* as the un-laxed Parisian [lyn] is therefore an internal inconsistency, not a transcription policy; it also leaves `fr_qc` moon byte-identical to `fr_be`/`fr_ch`/`fr_af` (all `lyn`, L503–505), erasing the one feature that should distinguish the Quebec row.

---

### 3. `abq` — eye — byte-identical to `abq` dog (`ла`/`la`); the Abkhaz sibling proves they must differ
- **File:** `words/eye.js` line 673 (cf. `words/dog.js` line 673)
- **Current:** `abq: ["ла", "la"]` for **eye** — byte-identical to `abq: ["ла", "la"]` for **dog**
- **Expected:** an Abaza word for "eye" distinct from "dog"; re-source from a published Abaza lexicon (the *bla*/*la* "eye" root, not the "dog" word)
- **Why:** A cross-concept duplicate between two semantically unrelated concepts — the wrong-row-paste signature. The decisive evidence is the immediately adjacent sibling **Abkhaz** `ab` (same Abkhaz-Abaza branch per `LANG_CODES.md`), which in the very same files cleanly distinguishes the two: `ab` dog `["ала", "aːla"]` (`dog.js` L672) vs `ab` eye `["абла", "abla"]` (`eye.js` L672). Abaza "dog" is indeed *la* (ла), so the **dog** cell is right and the **eye** cell has been copied from it (Chirikba 1996; O'Herin 2002). I flag rather than assert the exact Abaza surface, since I will not fabricate it offline — but the identity with "dog" cannot stand.

---

### 4. `dbq` — one — Daba "one" is a verbatim copy of `dbq` mother (`mma`/`mːa`), the jaq mother=one signature
- **File:** `words/one.js` line 268 (cf. `words/mother.js` line 268)
- **Current:** `dbq: ["mma", "mːa"]` for **one** — byte-identical to `dbq: ["mma", "mːa"]` for **mother**
- **Expected:** a Daba cardinal "1" distinct from the kinship word; re-source from a Daba/Mafa-Bata Chadic wordlist
- **Why:** This is the exact class as the fixed `jaq` mother=one bug. *mma* with a long nasal /mː/ is a transparent **mama-type kinship** form (and `dbq` father is the matching *daa* /daː/, `father.js` L262), so it is the "mother" cell that is correct and the numeral "one" that has been pasted from it. There is no plausible homophony making a Chadic cardinal identical to "mother"; Daba (Afro-Asiatic, Chadic, ~30K speakers per `LANG_CODES.md`) has a normal numeral system. The rest of the `dbq` row is well differentiated (water *yam*, eat *za*, drink *sa*, fire *kʷu*), which makes the one=mother identity stand out as an accidental duplicate, not a real lexical fact.

---

### 5. `nlc` — heart — byte-identical to `nlc` dog (`ngal`/`ŋal`), two unrelated concepts
- **File:** `words/heart.js` line 462 (cf. `words/dog.js` line 462)
- **Current:** `nlc: ["ngal", "ŋal"]` for **heart** — byte-identical to `nlc: ["ngal", "ŋal"]` for **dog**
- **Expected:** a Nalca word for "heart" distinct from "dog"; re-source from Nalca (Trans-New-Guinea) materials
- **Why:** "Dog" and "heart" are semantically unrelated, so a byte-identical array under one code is the wrong-row-paste signature, not homophony. The surrounding `nlc` row is otherwise sharply differentiated (water *mi*, eye *nye*, hand *ku*, sun *nyem*, moon *lakum*), so this pair is the outlier. One of the two cells is a copy of the other; the data should carry two distinct forms (Nalca descriptive literature).

---

### 6. `nlc` — eat — byte-identical to `nlc` mother (`ne`/`ne`)
- **File:** `words/eat.js` line 453 (cf. `words/mother.js` line 468)
- **Current:** `nlc: ["ne", "ne"]` for **eat** — byte-identical to `nlc: ["ne", "ne"]` for **mother**
- **Expected:** confirm and disambiguate; "eat" (verb) and "mother" (noun) should not share an unanalysed array
- **Why:** A second `nlc` cross-concept collision in a different file-pair, between a verb and a kinship noun with no plausible semantic link. Note that `nlc` drink is `["mi ne", "mi ne"]` (`drink.js` L462) — i.e. *mi* + *ne* — which suggests *ne* may be a real "consume/ingest" element, in which case the **mother** cell (or the bare **eat** cell) is the suspect copy. Either way the IPA is also a verbatim copy of the orthography (no vowel quality, no tone), so the two entries are accidentally rather than intentionally identical; confirm the senses and differentiate.

---

### 7. `mpt` — sun — byte-identical to `mpt` good (`kep`/`kep`), no semantic link
- **File:** `words/sun.js` line 965 (cf. `words/good.js` line 959)
- **Current:** `mpt: ["kep", "kep"]` for **sun** — byte-identical to `mpt: ["kep", "kep"]` for **good**
- **Expected:** a Mian word for "sun" distinct from "good"; re-source from Fedden (2011) _A Grammar of Mian_
- **Why:** "Sun" and "good" are unrelated concepts; a byte-identical array across them is a paste, not homophony. Mian (Trans-New-Guinea, Mountain Ok, ~3.5K speakers per `LANG_CODES.md`) is fully described in Fedden (2011), so the gap is fillable. One of the two `kep` cells is wrong. The IPA being a copy of the orthography (`kep`/`kep`) reinforces that the column was filled by copy-paste rather than transcribed.

---

### 8. `mpt` — love — byte-identical to `mpt` mother (`na`/`na`)
- **File:** `words/love.js` line 966 (cf. `words/mother.js` line 965)
- **Current:** `mpt: ["na", "na"]` for **love** — byte-identical to `mpt: ["na", "na"]` for **mother**
- **Expected:** confirm; *na* as "mother" is plausible (mama-type), so the **love** cell is the suspect copy
- **Why:** A second `mpt` collision. *na* is a credible "mother" kinship form, which makes the identical **love** cell the likely wrong-row paste (there is no general "love = mother" homophony to lean on, unlike greeting/thanks). Two independent cross-concept duplicates in one Mian row (this and #7) is itself diagnostic that several `mpt` cells were entered without checking against the rest of the row. Re-source from Fedden (2011).

---

### 9. `agq` — one — byte-identical to `agq` mother (`mò`/`mo`)
- **File:** `words/one.js` line 1016 (cf. `words/mother.js` line 1016)
- **Current:** `agq: ["mò", "mo"]` for **one** — byte-identical to `agq: ["mò", "mo"]` for **mother**
- **Expected:** verify the Aghem cardinal "1" against a Ring/Grassfields source; if it is genuinely *mɔ̀*, mark tone so it is intentionally distinct from "mother"
- **Why:** Same mother=one class as #4, lower confidence: some Ring (Grassfields Bantu) languages do have a numeral "one" of shape *mɔ̀*, so this *could* be a true near-homophone rather than a paste. But (a) the surface is byte-identical including the grave-accent tone, and (b) the IPA `mo` strips the very tone that would distinguish a numeral from the kinship noun. Per the `[surface, ipa]` IPA-not-romanisation rule, mark the lexical tone on at least one of the two so the identity is a documented fact, not an accidental collision (Aghem is tonal; the bare `mo` carries no tone at all).

---

### 10. `mev` — drink / eye — tone-stripped IPA makes two distinct Mano words identical (`mi`)
- **File:** `words/drink.js` line 611 and `words/eye.js` line 611
- **Current:** both `mev: ["mi", "mi"]`
- **Expected:** restore lexical tone, e.g. `["mì", "mì˨"]` (drink) vs a tone-marked "eye" form — per a Mano dictionary
- **Why:** Mano (Niger-Congo, South Mande, ~400K speakers per `LANG_CODES.md`) is a register-tone language in which minimal pairs are distinguished **by tone alone**. By writing the IPA with no tone diacritic, two unrelated concepts ("drink" verb, "eye" noun) collapse to the identical array `["mi","mi"]`, which both violates the anti-duplication rule and drops the phonemic information the `[surface, ipa]` contract exists to carry (Vydrin 2016; Bearth on Mano tone). The surface may legitimately share the segment string, but the IPA must mark tone so the entries are intentionally distinct.

---

### 11. `mev` — dog / heart — same tone-stripping collision (`gba`); also missing the /ɡ͡b/ tie bar
- **File:** `words/dog.js` line 611 and `words/heart.js` line 611
- **Current:** both `mev: ["gba", "ɡba"]`
- **Expected:** tone-marked IPA distinguishing the two Mano lexemes, written with the labial-velar tie bar (e.g. `ɡ͡bā` vs `ɡ͡bà` per source)
- **Why:** Same defect as #10 in the same language: "dog" and "heart" are semantically unrelated yet share a byte-identical tone-less array; in Mano they are separate words kept apart by tone (Vydrin 2016). Independently, the labial-velar should be the single phoneme /ɡ͡b/ (tie bar), not the digraph "ɡb", which the bare string implies is /ɡ/+/b/. Add tone + tie bar so the collision disappears.

---

### 12. `mev` / `dnj` — fire / hand & one — tone-stripped IPA makes distinct Mano AND Dan words identical (`kɔ`, `do`)
- **File:** `words/fire.js` line 617 (`mev`), `words/hand.js` line 611 (`mev`) & line 612 (`dnj`), `words/house.js` line 619 (`dnj`), `words/one.js` lines 617 (`mev`) & 618 (`dnj`)
- **Current:** `mev` fire `["kɔ","kɔ"]` = `mev` hand `["kɔ","kɔ"]`; `dnj` hand `["kɔ","kɔ"]` = `dnj` house `["kɔ","kɔ"]`; `mev` one `["do","do"]` = `dnj` one `["do","do"]`
- **Expected:** tone-marked IPA on each so the Mano fire≠hand, the Dan hand≠house, and the numerals are intentionally transcribed (e.g. Dan five-level tone marked per Vydrin 2016)
- **Why:** Three further tone-collisions across the two adjacent South/East-Mande rows. Mano "fire" vs "hand" and Dan "hand" vs "house" are unrelated concepts sharing tone-less arrays; Dan (Niger-Congo, Eastern/Southern Mande, ~1.6M speakers) has one of the densest tone systems in West Africa (up to five level tones, Vydrin 2016) and cannot have two such concepts genuinely homophonous without tone marking. Together with #10–#11 this is a systematic Mande tone-pass omission: the surfaces may overlap, but the IPA must encode the distinguishing tone to satisfy the IPA-not-romanisation rule and remove the spurious cross-concept identities. Listed jointly because it is one mechanical fix (a tone pass over `mev`/`dnj`).

---

### 13. `bm` — hello — Bambara greeting cell is a paste of the thanks formula, with wrong vowel/affricate
- **File:** `words/hello.js` line 595 (cf. `words/thanks.js` line 604)
- **Current:** `bm: ["i ni ce", "i ni tʃe"]` for **hello** — byte-identical to the **thanks** cell
- **Expected:** for *thanks* keep the formula but fix the IPA to `["i ni cɛ", "i ni t͡ʃɛ"]`; for *hello* supply a time-neutral greeting (e.g. a documented neutral form / `i ni sɔgɔma` "good morning") distinct from the thanking formula
- **Why:** *I ni cɛ* (lit. "you and the effort") is in standard descriptions the **thanking** expression, not the default greeting; Bambara greetings are the time-of-day "i ni X" set (Vydrin / Bailleul Bambara lexica). The hello cell being byte-identical to thanks is the cross-concept paste signature. Independently the IPA is wrong even for the thanks sense: orthographic *e* in *cɛ* is /ɛ/ (the word is *cɛ*, not *ce*), and *c* is the affricate /t͡ʃ/ (tie bar), so it should be /t͡ʃɛ/, not /tʃe/. At minimum correct the vowel/affricate; ideally differentiate the greeting. (Cf. the analogous Maninka `emk` hello=thanks `i ni se` collision, `hello.js`/`thanks.js`, same family — worth checking in the same pass.)

---

### 14. `ja_oki` — moon — Okinawan transcription `t͡ɕit͡ɕi` is the child-word *chichi*, not the 月 reflex
- **File:** `words/moon.js` line 60
- **Current:** `ja_oki: ["月", "t͡ɕit͡ɕi"]`
- **Expected:** verify against an Okinawan source; the expected reflex of 月 *tsuki* is *tsiki* [t͡siki]/[t͡ɕiki], not the fully reduplicated [t͡ɕit͡ɕi]
- **Why:** Standard Okinawan (Shuri-Naha) sound correspondences raise *u*→*i* and palatalise *ki*, giving 月 "moon" as *tsiki*, transcribed [t͡siki]/[t͡ɕiki] (Okinawan dictionaries; Karimata's Ryukyuan phonology). The data's `t͡ɕit͡ɕi` requires *both* syllables to become the affricate t͡ɕi, which is not the regular outcome for the *-ki* of *tsuki* and reads instead as the child kinship word *chichi*. Note the same code transcribes 月 correctly elsewhere is unavailable, but the adjacent `ja_oki` one `["一", "tʰiːt͡ɕi"]` (L60) shows the variety *can* keep a non-reduplicated reflex, highlighting moon as the outlier. I flag for verification rather than asserting a single replacement.

---

### 15. `nan_xm` / `nan_zz` — duplicate object keys still live in 17 files (data-loss hazard outside water/eat/hello)
- **File:** `words/one.js` lines 346–347 (first) vs 360–361 (second); same pattern in `eye.js` 340/354, `moon.js` 346/360, `fire.js` 346/360, `hand.js` 340/354, `heart.js` 340/354, `house.js` 347/361, `dog.js` 340/354, `drink.js` 340/354, etc.
- **Current (one):** L346 `nan_xm: ['一 (chi̍t / it)', 'tsit̚˦']`, L347 `nan_zz: ['一 (chi̍t / it)', 'tsit̚˩˨˩']` … later L360 `nan_xm: ['一', 'tsit̚˦']`, L361 `nan_zz: ['一', 'tsit̚˩˨˩']` (the plainer second copies overwrite the POJ-glossed first)
- **Expected:** a single key per code, retaining the Pe̍h-ōe-jī gloss `'一 (chi̍t / it)'`
- **Why:** Review #70 fixed this exact duplicate-key/overwrite defect in `water.js`/`eat.js`/`hello.js` only and explicitly deferred the remaining 17 files as a "mechanical block-dedup". It is still live: a JS object literal cannot hold two properties with the same key, so the **second** declaration silently wins and the richer POJ-glossed first copy (`(chi̍t / it)`, `(ba̍k-chiu)`, `(goe̍h-niû)`, `(hóe)`…) is dead code. The latent desync is real — e.g. in `one.js` the surviving second copies carry the per-variety tone split (Xiamen `tsit̚˦` vs Zhangzhou `tsit̚˩˨˩`) that any future single-block edit could break. Collapse each pair to one key and keep the romanised surface, completing the #70 follow-up across the remaining files.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
