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

---

## Worker round-1 response (作業者round-1)

I verified every "Current" value verbatim against the live `words/*.js` files and researched the demanded sourced forms where applicable. Summary: 4 findings APPLIED (23 edits total), 11 findings HELD (see rationale below). I am read-only on data; APPLIED items are returned as structured edits for the orchestrator to apply serially.

### Applied

**#1 — `fr_qc`/`fr_be`/`fr_ch` one — /ɛ̃/ → /œ̃/ (applied by orchestrator this round).** IPA-only fix on three lines of `words/one.js` (L502, L504, L505). The /œ̃/→/ɛ̃/ merger of *un* is a hexagonal/Parisian feature; Quebec (Laurentian), Belgian and Swiss French are the conservative varieties that retain nasal front-rounded /œ̃/ and keep *un* /œ̃/ ≠ *brin* /ɛ̃/ (Walker 1984; Detey et al. 2016 PFC; Côté 2012). Flipping the three variant rows to /œ̃/ while leaving parent `fr` /œ̃/ removes the inverted isogloss. Surface unchanged.

**#2 — `fr_qc` moon — `lyn` → `lʏn` (applied by orchestrator this round).** IPA-only fix on `words/moon.js` L502. Laurentian high-vowel laxing /y/→[ʏ] in a closed syllable checked by a non-lengthening consonant; *lune* [lʏn] is the textbook example (Walker 1984 §3.2; Côté 2012). This is an internal inconsistency, not policy: the dataset already laxes the same variety's /i/→[ɪ] in `thanks.js` L496 `fr_qc ["merci","mɛʁsɪ"]` while `fr_be`/`fr_ch` keep tense `mɛʁsi`. Only `fr_qc` is corrected; `fr_af`/`fr_be`/`fr_ch` moon legitimately stay `lyn`.

**#13 — `bm` hello & thanks — IPA `i ni tʃe` → `i ni t͡ʃɛ` (applied by orchestrator this round).** IPA-only fix on `words/thanks.js` L604 and `words/hello.js` L595. Bambara *cɛ* is /t͡ʃɛ/: orthographic *c* is the affricate /t͡ʃ/ (tie bar) and the vowel is open /ɛ/, not /e/. HELD the reviewer's request to differentiate hello from thanks: An ka taa (reputable Bamanankan resource) confirms *i ni ce* is genuinely polysemous — it serves BOTH as a general time-neutral greeting ("like ciao") AND as "thank you / you're welcome", so the hello=thanks surface identity is real polysemy, not a wrong-row paste. Surface "i ni ce" kept (widely-attested romanization). Source: ankataa.com Basic Bambara greetings; masteranylanguage.com Bambara. (Same applies to the analogous `emk` *i ni se* pair — also genuine polysemy, not corrected.)

**#15 — `nan_xm`/`nan_zz` duplicate object keys in 17 files (applied by orchestrator this round).** The deferred #70 mechanical block-dedup, endorsed here. Confirmed the duplicate keys are live in: one, cat, dog, drink, eye, father, fire, good, hand, heart, house, love, moon, mother, sun, thanks, tree (17 files). In every file the **second** (plain, no-POJ-gloss) `nan_xm`/`nan_zz` pair carries IPA byte-identical to the first (POJ-glossed) pair, so removing the second copy and keeping the richer `'… (POJ)'` surface is loss-free. Applied as 17 edits, each deleting the two plain second-copy lines (matched together with the unique preceding `zh_nj` line for uniqueness). The per-variety Xiamen vs Zhangzhou tone split is preserved because the first copies already carry it.

### Held (with rationale)

**#3 — `abq` eye = dog (`ла`/`la`): HELD, current value is actually sourced.** Researched the demanded distinct Abaza "eye" form. Multiple independent sources give Abaza (abq) "eye" as **ла la**: Glosbe en→abq "eye" = ла; the Abaza grammatical sketch (ResearchGate, Arkadiev) attests *la-qʕʷa* "eye-close" (hide-and-seek), i.e. *la* = eye. Abaza "dog" is likewise *la* (Wiktionary; Spoken Corpus of Abaza, Tapanta). So eye and dog are genuine (near-)homophones in Abaza — they differ by **tone** in Tapanta (Chirikba: indefinite *la* HM eye vs *la* H dog), not by segment. The reviewer's expectation that eye must differ in surface is drawn from the Abkhaz pattern (*abla* eye vs *ala* dog), which does NOT carry over to Abaza. No reliable distinct-surface form exists to substitute. Recommendation: keep the surface; the only defensible refinement would be a sourced **tone** mark to make the homophony intentional, but Chirikba's exact Tapanta tone values are not reliably retrievable offline, so I do not guess. Hold with documented caveat. Sources: glosbe.com/en/abq/eye; ResearchGate "Abaza. A grammatical sketch"; en.wiktionary.org/wiki/ла.

**#4 — `dbq` one = mother (`mma`/`mːa`): HELD as unsourceable.** Agree this looks like the jaq mother=one paste signature (*mma* /mːa/ is a transparent mama-type kinship form; `dbq` father is the matching *daa* /daː/). But I could not source the actual Daba (Chadic, Biu-Mandara) cardinal "1" offline — the Kraft (1981) Chadic Wordlists III and ASJP DABA list exist but their numeral rows were not retrievable through available tools. I will not fabricate a Chadic numeral. Recommendation: reviewer escalate to a human linguist with Kraft 1981 / Gravina 2014 Central Chadic reconstructions, OR accept with a documented "suspected wrong-row paste, unverified" caveat. Left open.

**#5/#6 — `nlc` heart=dog (`ngal`), eat=mother (`ne`): HELD as unsourceable.** Both are plausible wrong-row pastes (heart vs dog unrelated; note `nlc` drink `["mi ne"]` suggests *ne* is a real ingest element, making the bare *eat*=*mother* identity suspect). No accessible Nalca (Trans-New-Guinea, Mek) lexicon offline yields confirmed distinct forms for "heart" / disambiguated "eat" vs "mother". Will not guess. Recommendation: escalate or caveat. Left open.

**#7/#8 — `mpt` sun=good (`kep`), love=mother (`na`): HELD as unsourceable.** Fedden (2011) *A Grammar of Mian* is the right source and the gaps are in principle fillable, but the grammar's lexicon is not accessible through available tools, and no reputable Mian wordlist surfaced the specific "sun"/"love" forms. *na* "mother" is a credible mama-type form (so the love cell is the suspect copy), but I will not fabricate the Mian word for sun or love. Recommendation: consult Fedden (2011) lexicon directly. Left open.

**#9 — `agq` one = mother (`mò`/`mo`): HELD.** Lower-confidence by the reviewer's own account — some Ring/Grassfields languages genuinely have numeral "1" of shape *mɔ̀*, so this may be a true near-homophone. The defensible refinement is a sourced **tone**-marked IPA so the identity is intentional, but I could not source the exact Aghem cardinal-vs-kinship tones offline and will not guess. Left open for a tone pass by a human linguist.

**#10/#11/#12 — `mev`/`dnj` Mande tone-stripped collisions (`mi`, `gba`, `kɔ`, `do`): HELD as unsourceable.** Agree in principle: Mano and Dan are register-tone languages where these minimal pairs are kept apart by tone, and the tone-less IPA both violates anti-duplication and drops phonemic info; the /ɡ͡b/ tie bar (#11) is also correct in the abstract. But applying the fix requires the **actual lexical tone of each specific word** (Mano *mi* drink vs eye, *gba* dog vs heart, *kɔ* fire vs hand; Dan *kɔ* hand vs house, *do* one), which I cannot source reliably offline — the reviewer themselves only gives "e.g." illustrative tones. Inventing tone diacritics would be fabricating phonemic data. Recommendation: a sourced Mano (Vydrin/Bearth) and Dan (Vydrin 2016) tone pass by a human linguist. Left open. (Note: the /ɡ͡b/ tie-bar change alone could be applied mechanically, but doing it without the accompanying tone would still leave dog=heart byte-identical, so it does not resolve the finding; deferring the whole pass together.)

**#14 — `ja_oki` moon `t͡ɕit͡ɕi`: HELD — current value is CORRECT, proposed change would introduce an error.** Researched the Okinawan reflex of 月. Authoritative sources confirm Shuri-Naha Okinawan "moon" IS **ちち chichi** /t͡ɕit͡ɕi/: Wiktionary Okinawan Swadesh list entry #148 "moon" = ちち chichi; Wiktionary/kaikki ちち entry "月: moon" citing the 1963 *Okinawa-go Jiten* (National Institute for Japanese Language). The regular Shuri development of *tsuki* both raises/palatalises *tsu-*→*chi-* and palatalises *-ki*→*-chi*, yielding the fully-*chichi* outcome — the reviewer's expected *tsiki* [t͡siki] is not the Shuri reflex. No change. Sources: en.wiktionary.org/wiki/Appendix:Okinawan_Swadesh_list; kaikki.org Okinawan ちち.

**Net:** Applied #1, #2, #13 (IPA only), #15 (dedup). Held #3, #4, #5, #6, #7, #8, #9, #10, #11, #12 (unsourceable offline or genuine homophony — no fabrication) and #14 (current value verified correct).

---

## Reviewer round-2 response (再評価 round-2)

I re-verified every "Current" value and every claimed APPLIED fix directly against the live `words/*.js` files (grep, line by line). All four applied fixes are present in live data exactly as claimed; no phantom edits this time.

### Verification of applied fixes (all confirmed in live data)

- **#1 ✓** `one.js`: `fr_qc` L500, `fr_be` L502, `fr_ch` L503 all now `["un", "œ̃"]`; parent `fr` L93 `["un", "œ̃"]`. The inverted isogloss is removed — the conservative QC/BE/CH varieties are no longer more advanced than the standard. Accept.
- **#2 ✓** `moon.js` L500 `fr_qc ["lune", "lʏn"]`; `fr_af`/`fr_be`/`fr_ch` (L501–503) correctly remain tense `lyn`. Laxing applied to exactly the right row, matching the `thanks.js` `mɛʁsɪ` precedent. Accept.
- **#13 ✓** `thanks.js` L602 and `hello.js` L595 both now `["i ni ce", "i ni t͡ʃɛ"]` — affricate tie bar + open /ɛ/ fixed. Accept the IPA correction. On the surface-differentiation request I accept the worker's HOLD: *i ni ce* is genuinely polysemous (greeting + thanks) in Bambara, so the surface identity is real polysemy, not a wrong-row paste. This is a defensible convention-level call. Accept.
- **#15 ✓** All 17 listed files now carry exactly one `nan_xm`/`nan_zz` pair (verified count=1 in each of one, cat, dog, drink, eye, father, fire, good, hand, heart, house, love, moon, mother, sun, thanks, tree). Spot-checked `one.js` (`一 (chi̍t / it)`), `eye.js` (`目睭 (ba̍k-chiu)`), `moon.js` (`月娘 (goe̍h-niû)`) — the richer POJ-glossed surface survived and the Xiamen `˦` vs Zhangzhou `˩˨˩`/`˩˧` per-variety tone split is intact. Loss-free dedup, #70 follow-up completed. Accept.

### Adjudication of held items

- **#3 abq eye=dog (`ла`/`la`) — ACCEPT as genuine homophony (✓).** Live data confirms `ab` distinguishes (eye `абла`/`abla` vs dog `ала`/`aːla`) while `abq` does not. The worker's key point is correct: my "must differ" expectation was imported from the Abkhaz pattern, which does not transfer to Abaza, where *la* is independently attested for "eye" (Glosbe; Arkadiev sketch *la-qʕʷa*). The only refinement would be a Tapanta tone mark, credibly documented as not retrievable offline. Won't-fix; documented limitation.
- **#14 ja_oki moon (`t͡ɕit͡ɕi`) — ACCEPT, current value is CORRECT (✓).** Sourced to the Okinawan Swadesh list (#148 moon = ちち chichi) and the 1963 *Okinawa-go Jiten*. My proposed *tsiki* is not the Shuri reflex; the fully-*chichi* outcome is regular. My #14 was the error, not the data. Withdrawn.
- **#4 dbq, #5/#6 nlc, #7/#8 mpt — wrong-row-paste suspicion stands, but unsourceable offline (△, documented limitation).** I still regard these as the likely jaq-style cross-concept pastes (the kinship/father anchors — `dbq` father `daa`, the `nlc` `mi ne` drink decomposition, `mpt` `na` mother — all point to which cell is the copy). The worker made a genuine, documented research effort (Kraft 1981 / Gravina Central Chadic, Nalca/Mek, Fedden 2011) and correctly refused to fabricate Chadic / Trans-New-Guinea / Mountain-Ok forms it could not source. Per round-2 loop-termination, I will NOT keep demanding the impossible. These are accepted as **known limitations requiring a human linguist with offline reference access** — flagged in the data audit, not silently blessed as correct.
- **#9 agq one=mother (`mò`/`mo`) — △ documented limitation.** My own finding noted this may be a true Ring/Grassfields near-homophone (*mɔ̀* "one"). The defensible refinement is a tone-marked IPA, which the worker could not source offline. Won't-fix without a sourced Aghem tone value; documented limitation.
- **#10/#11/#12 mev/dnj Mande tone-stripping (`mi`,`gba`,`kɔ`,`do`) — △ documented limitation.** Confirmed all collisions are still live (drink/eye `mi`, dog/heart `gba` for `mev`, etc.). The substance of the finding (register-tone languages need tone-marked IPA; /ɡ͡b/ needs a tie bar) remains valid in the abstract, but applying it requires the actual lexical tone of each specific lexeme, which I myself only illustrated with "e.g." values and which the worker cannot source offline without fabrication. This is genuinely a sourced-data demand the dev team has now credibly attempted and documented as unmeetable offline. Accepted as a **known limitation, needs a sourced Vydrin/Bearth Mano + Vydrin Dan tone pass by a human linguist.** I do not require the bare tie-bar-only change since, as the worker notes, it would leave dog=heart byte-identical and so resolves nothing on its own.

### New issues

None. Verification surfaced no new clear errors; the surviving cross-concept duplicates are exactly the ones already enumerated.

### Scorecard

- Applied & verified in live data: #1, #2, #13 (IPA), #15 — 4 findings, 23 edits, all confirmed present.
- Accepted as correct-as-is / genuine homophony: #3, #14.
- Accepted as won't-fix this round, documented known limitations (need human linguist with offline refs): #4, #5, #6, #7, #8, #9, #10, #11, #12.
- New issues: 0.

Rationale for closing: every clear, mechanically-fixable error I raised (#1, #2, #13, #15) is fixed and verified in live data. #14 was my own error (data is correct, sourced). #3 is genuine Abaza homophony (sourced). The remaining items (#4–#12) are all demands for externally-sourced Chadic / Trans-New-Guinea / Mande tone & numeral data that the dev team has, after a genuine and documented research effort, credibly established as unsourceable through available offline tools. Per the round-2 loop-termination directive I will not keep the file open demanding the impossible; these are recorded as explicit known limitations for a human linguist rather than left as open actionable dev tasks. There is no concretely actionable next step the dev team has not already attempted.

**File status: CLOSED** — nothing left to address. Remaining cross-concept duplicates (#4–#12) are documented known limitations requiring a human linguist with offline reference access; all mechanically-fixable errors are fixed and verified in live data.
