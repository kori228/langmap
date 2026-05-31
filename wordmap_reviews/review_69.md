# Wordmap review #69 — Lexical semantics & word-sense / glossing specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a lexical-typology and word-sense / glossing specialist. My work concerns the cross-linguistic comparison of *concepts* (not just forms): whether the lexeme placed in a given slot actually denotes the intended sense, whether two slots that share an identical surface form do so by genuine polysemy or by an editing error, and whether an entry is a false friend, a register mismatch, or a borrowed greeting masquerading as a native word. Rather than covering one family, my remit is cross-cutting: I sample every language in the dataset and flag concept/lexeme mismatches. My primary references for this review are: Carl Darling Buck, *A Dictionary of Selected Synonyms in the Principal Indo-European Languages* (1949) — the standard work for distinguishing near-synonymous concept fields ('good' vs 'well', 'love' N vs V, 'house' vs 'home'); Morris Swadesh's basic-vocabulary conventions and the *World Loanword Database* (Haspelmath & Tadmor, 2009) for borrowing; the *Concepticon* / CLLD concept-list resources (List et al.) for sense disambiguation; and the *Intercontinental Dictionary Series* (IDS) for African and Pacific data. For individual languages I lean on standard descriptive dictionaries: Pukui & Elbert (*Hawaiian Dictionary*), Capell (*Motu*), Carlson (*A Grammar of Supyire*), Westermann/Capo for the Gbe cluster, and the *Vai script* tables of Tuchscherer & Hair. I assume the slot definitions stated in each file's `definition:` block (e.g. 'love' = noun/verb root, *not* a greeting; 'good' = attributive adjective, *not* the adverb 'well' or a greeting response).

---

## Issues found

### 1. `vai` — cat / heart — single Vai syllabogram given two different disyllabic readings
- **File:** `words/cat.js` line 807 and `words/heart.js` line 807
- **Current:** `["ꖢ", "musu"]` (cat) and `["ꖢ", "sɛni"]` (heart)
- **Expected:** distinct, correctly-spelled Vai sequences — cat spelled with two syllabograms reading "musu" and heart spelled with two syllabograms reading "sɛni", each glyph-string matching its own reading (not the single glyph ꖢ for both)
- **Why:** The Vai script is a *syllabary*: one glyph = one CV syllable. A single character ꖢ cannot simultaneously be read "musu" and "sɛni" — both are disyllabic and would each require two syllabograms. Compare the file's own correctly-spelled multi-syllable Vai entries (`dog` = ꕝꖣ "dɛni", `water` = ꕜꕩ "daja"). The identical glyph in two unrelated concept slots with two different IPA values is a copy/placeholder error, not genuine polysemy. (Tuchscherer & Hair, Vai syllabary tables.)

### 2. `kjb` — good — 'eye/face' word copied into the 'good' slot
- **File:** `words/good.js` line 1080
- **Current:** `["sat", "sat"]`
- **Expected:** `["watxʼ", "watʃʼ"]`
- **Why:** Q'anjob'al (kjb) *sat* means 'face / eye / surface' — and indeed the file's own `eye.js` line 1086 correctly has `kjb: ["sat", "sat"]`. The adjective 'good' in Q'anjob'al is *watxʼ*. Every Mayan sibling in the 'good' file uses the *utz/watxʼ* field, never *sat* (quc/cak *utz*, kek *us*, ctu *utsat*). The 'good' slot is holding the 'eye' lexeme — a wrong-sense duplication. (Buck §16.71 'good'; Q'anjob'al lexicography, e.g. *Diccionario Q'anjob'al*.)

### 3. `dsh` — house / moon — identical surface 'mar', and the two IPAs even disagree
- **File:** `words/house.js` line 276 and `words/moon.js` line 275
- **Current:** house `["mar", "maɾ"]`; moon `["mar", "mar"]`
- **Expected:** two distinct lexemes; at minimum the 'house' (Daasanach *mar* 'house/homestead') and 'moon' slots should not be the same word, and the IPA must be internally consistent
- **Why:** Daasanach (dsh) 'house' and 'moon' are not the same word, yet both slots carry the spelling *mar*. The internal inconsistency is itself a giveaway: 'house' transcribes the rhotic as a tap [maɾ] but 'moon' writes a plain [mar]. A genuine homophone would have one fixed pronunciation. One of these two is a mis-copied placeholder; the 'moon' lexeme (Daasanach *arrab*/*ʔar*-type) should be restored. (Tosco, *A Grammatical Sketch of Dhaasanac*.)

### 4. `spp` — good / drink — verb 'to drink' placed in the 'good' slot
- **File:** `words/good.js` line 811 and `words/drink.js` line 811
- **Current:** both `["nyaha", "ɲaha"]`
- **Expected:** good `["nyahã", "ɲãhã"]`-type adjective vs. drink = its own verb; the two slots must not share *nyaha*
- **Why:** In Supyire (spp), *nyàhà* is a verb in the 'drink/consume' field, not the attributive adjective 'good'. The 'good' definition explicitly asks for the attributive adjective and to avoid borrowed/wrong-field forms. The same form appearing under two unrelated concepts (and 'eat' is correctly a different root *kanyi*, 'water' = *lwɔ*) indicates the 'good' slot was filled with the drink verb. (Carlson, *A Grammar of Supyire*, lexicon.)

### 5. `wbt` — house / mother — 'camp/home/country' word copied into 'mother'
- **File:** `words/house.js` line 704 and `words/mother.js` line 703
- **Current:** both `["ngurra", "ŋuɻa"]`
- **Expected:** mother = a kin term (Warlpiri/Western-Desert *ngamardi* / *ngamaji* type), distinct from *ngurra*
- **Why:** In Warlpiri and the wider Western Desert bloc (wbt), *ngurra* is the well-known word for 'camp / home / country / place' — legitimately 'house/home' — but it is **not** the word for 'mother'. The kin term is *ngamardi*/*ngamaji* (← *ngama* 'breast'). The 'mother' slot has been filled with the 'home' lexeme: a wrong-sense duplication. (Laughren et al., *Warlpiri Encyclopaedic Dictionary*; Buck §2.36 'mother'.)

### 6. `xul` — one / sun — numeral and celestial body share 'guma'
- **File:** `words/one.js` line 702 and `words/sun.js` line 702
- **Current:** both `["guma", "ɡuma"]`
- **Expected:** two distinct lexemes; the numeral 'one' and 'sun' should not be identical
- **Why:** This is exactly the canonical wrong-slot error my brief targets ("a 'mother' slot holding the word for 'one'"). The numeral 'one' and the noun 'sun' are not plausibly homophonous here, and the language's other slots are all distinct (moon = *birrang*, water = *kungal*, eye = *mil*). One slot — most likely 'sun' — has been mis-filled with the numeral. Each should carry its own lexeme. (Swadesh-list convention: numerals and nature terms are separate concept fields.)

### 7. `xul` — hand / heart — body-part terms collapsed to 'mara'
- **File:** `words/hand.js` line 696 and `words/heart.js` line 696
- **Current:** both `["mara", "maɻa"]`
- **Expected:** distinct 'hand' and 'heart' lexemes
- **Why:** A second collision in the same language: 'hand' and 'heart' are distinct concept fields (Buck §4.33 'hand', §4.43 'heart') and are not normally one word. Given that xul already shows a numeral/sun collision (#6), this is consistent with bulk mis-fill rather than real polysemy. The two slots should be disambiguated. (IDS body-part section.)

### 8. `mpt` — love / mother — affective verb and kin term share 'na'
- **File:** `words/love.js` line 966 and `words/mother.js` line 965
- **Current:** both `["na", "na"]`
- **Expected:** distinct lexemes; 'love' (verb/root) ≠ 'mother' (kin noun)
- **Why:** In Mian (mpt) the kin term and the 'love' root are separate concept fields. The 'love' definition states the slot is the affection root, not a greeting and not an unrelated noun. A monosyllable *na* doing duty for both 'love' and 'mother' is the signature of a slot-fill error; compare the language's distinct 'good'/'sun' values. The slots should hold their own forms. (Buck §16.27 'love'; §2.36 'mother'.)

### 9. `mpt` — good / sun — adjective and celestial noun share 'kep'
- **File:** `words/good.js` line 959 and `words/sun.js` line 965
- **Current:** both `["kep", "kep"]`
- **Expected:** distinct adjective 'good' and noun 'sun'
- **Why:** A second mpt collision: the attributive adjective 'good' and the noun 'sun' are unrelated concept fields and should not be the identical form *kep*. Together with #8 this points to several mpt slots having been filled from the wrong column. (Concepticon: GOOD and SUN are distinct concept sets.)

### 10. `dnj` — hand / house — 'kɔ' in two unrelated slots, conflicting with siblings
- **File:** `words/hand.js` line 612 and `words/house.js` line 619
- **Current:** both `["kɔ", "kɔ"]`
- **Expected:** distinct 'hand' and 'house' lexemes
- **Why:** Dan (dnj) 'hand' and 'house' are different words; the file's neighbouring Mande entries do not show this homophony, and dnj's other slots are all distinct (eye = *ŋkɛ̃*, water = *yi*, eat = *dɛ*). 'hand' = *kɔ* may be correct, but 'house' being the *same* monosyllable is a wrong-sense duplication and should be replaced with the actual 'house' lexeme. (Vydrin, Mande lexical comparison.)

### 11. `mev` — dog / heart — animal noun and body-part noun share 'gba'
- **File:** `words/dog.js` line 611 and `words/heart.js` line 611
- **Current:** both `["gba", "ɡba"]`
- **Expected:** distinct 'dog' and 'heart' lexemes
- **Why:** In Maan/Mann (mev), *gba* is in the chest/heart field, but 'dog' is a separate root. 'dog' and 'heart' are not homophonous concept fields anywhere in basic vocabulary; having the identical form in both is a copy error. (Buck §3.62 'dog', §4.43 'heart'.) Note mev also shows drink = eye = *mi* (lines 611), a second suspicious collision in the same language warranting a sweep.

### 12. `nlc` — eat / mother — verb and kin term share 'ne'
- **File:** `words/eat.js` line 462 and `words/mother.js` line 468
- **Current:** both `["ne", "ne"]`
- **Expected:** distinct 'eat' (verb) and 'mother' (kin) lexemes
- **Why:** In Nalik (nlc) the 'drink' slot is *mi ne* (line 462) and 'eat' is *ne*, suggesting *ne* is a consumption verb root — which makes its appearance in the 'mother' slot a wrong-sense duplication. 'mother' should be the Nalik kin term (*tina*/*nana*-type), not the eat verb. (Volker, *Nalik Grammar*.)

### 13. `aja` — mother — IPA fails to mark the open-o that distinguishes 'mother' from 'drink'
- **File:** `words/mother.js` line 797
- **Current:** `["no", "no"]`
- **Expected:** `["nɔ", "nɔ"]`
- **Why:** In the Gbe cluster the kin term 'mother' is *nɔ* with **open** [ɔ] (cf. Fon `mother` = `["nɔ", "nɔ"]`, mother.js line 999), whereas the 'drink' verb is *nù/nú* with close [u]/[o]. Aja (aja) currently has 'mother' = *no* [no] **and** 'drink' = *no* [no] (drink.js line 791), collapsing the open/close vowel contrast and making the two concepts false friends. The 'mother' entry should show the open vowel [nɔ] to match its Gbe cognates and separate it from the drink verb. (Capo, *A Comparative Phonology of Gbe*; Buck §2.36.)

### 14. `aja` — drink — Gbe 'drink' is *nu*, not *no*
- **File:** `words/drink.js` line 791
- **Current:** `["no", "no"]`
- **Expected:** `["nu", "nu"]`
- **Why:** The pan-Gbe verb 'to drink' is *nù/nú* with a close back vowel — preserved in the dataset's own Fon entry `drink` = `["nu", "nu"]` (drink.js line 993). The Aja transcription *no* [no] both lowers the vowel incorrectly and makes 'drink' identical to the (also mis-transcribed) 'mother' slot. Restoring [nu] fixes the vowel and removes the false-friend overlap with 'mother'. (Capo, *Comparative Phonology of Gbe*.)

### 15. `enq` — fire / tree — 'ita' in two unrelated nature-term slots
- **File:** `words/fire.js` line 944 and `words/tree.js` line 938
- **Current:** both `["ita", "ita"]`
- **Expected:** distinct 'fire' and 'tree' lexemes
- **Why:** Enga (enq) 'fire' and 'tree' are separate concept fields; the language's other Enga slots are all distinct (house = *anda*, sun = *niko*, moon = *kana*, eat = *nepenge*). Two unrelated nature nouns sharing the exact form *ita* with no tonal/length difference is the hallmark of a slot-fill duplication rather than real homophony, and at least one slot should be corrected. (Lang, *Enga Dictionary*; Swadesh items FIRE and TREE.)

### 16. `kmu` — drink / eat — consumption verbs collapsed to 'ne'
- **File:** `words/drink.js` line 458 and `words/eat.js` line 458
- **Current:** both `["ne", "ne"]`
- **Expected:** distinct 'eat' and 'drink' verbs
- **Why:** Khmu (kmu) lexicalises 'eat' and 'drink' separately (eat *cìa/cha*; drink *ʔɔ̀ːk/hoom*). The 'water' slot is a different root (*nai*, line 465), so *ne* is not simply the language's water/consume root spilling over. Two core Swadesh verbs sharing one monosyllable is a wrong-sense duplication; the 'drink' slot in particular should carry the distinct drink verb. (Suwilai Premsrirat, *Khmu* lexicon; Buck §5.13 'eat', §5.15 'drink'.)

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
