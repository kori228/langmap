# Wordmap review #35 — Hebrew specialist

## Reviewer self-introduction

I specialise in the diachronic phonology and grammar of Hebrew across all its attested stages. Primary reference sources for this review: Joüon & Muraoka (2006) *A Grammar of Biblical Hebrew* (2nd ed., Pontifical Biblical Institute); Sáenz-Badillos (1993) *A History of the Hebrew Language* (Cambridge UP); Khan (2013) *A Short Introduction to the Tiberian Masoretic Bible* (GORGIAS); Coffin & Bolozky (2005) *A Reference Grammar of Modern Hebrew* (Cambridge UP); Koehler & Baumgartner *HALOT — Hebrew and Aramaic Lexicon of the Old Testament* (Brill); Even-Shoshan *Ha-Milon He-Ḥadash* (Kiryat-Sefer). Cross-checked against the Tiberian Masoretic vocalization traditions, the Cairo Genizah Mishnaic fragments, and standard generative accounts of Modern Israeli Hebrew phonology.

---

## Issues found

### 1. `he` — fire — initial /ʔ/ omitted from Modern Hebrew IPA
- **File:** `words/fire.js` line 104
- **Current:** `["אש", "eʃ"]`
- **Expected:** `["אש", "ʔeʃ"]`
- **Why:** Modern Israeli Hebrew אש begins with alef (א), a glottal stop consonant. In careful/citation speech the initial /ʔ/ is fully realised. The IPA `eʃ` implies a vowel-initial word, which is inaccurate even for informal registers where the glottal stop weakens: the citation/lexical form warrants `ʔeʃ`. The hbo entry (line 962) correctly has `ʔeʃ` — the Modern Hebrew entry is inconsistent with it. (Coffin & Bolozky 2005 §1.3; contrast the correct `ʔeʃ` for hbo.)

---

### 2. `he` — eye — pharyngeal /ʕ/ listed for Modern Hebrew
- **File:** `words/eye.js` line 104
- **Current:** `["עין", "ajin"]`
- **Expected:** `["עין", "ʔajin"]` (or `["עין", "ajin"]` only if ʕ→∅ in non-Mizrahi varieties is consistently applied, but then glottal stop must be noted)
- **Why:** The entry gives bare `ajin`, implying a vowel onset with no consonant at all. Modern Israeli Hebrew (non-Mizrahi majority norm) merged ע with א as either /ʔ/ or ∅. The standard IPA representation for the non-Mizrahi form is `ʔajin` (glottal stop) or at minimum a note that Mizrahi speakers preserve `ʕajin`. An entirely vowel-initial transcription `ajin` is inaccurate for any recognised standard variety. The hbo entry (line 956) correctly gives `ʕajin` for Biblical Hebrew. Compare: one.js Modern Hebrew `eχad` at line 104 — that entry also loses the initial glottal but at least reflects the spirantised het correctly; eye.js goes further by writing no consonant whatsoever.

---

### 3. `he` — one — initial /ʔ/ omitted and spirantisation misrepresented
- **File:** `words/one.js` line 104
- **Current:** `["אחד", "eχad"]`
- **Expected:** `["אחד", "ʔeχad"]`
- **Why:** The word אחד begins with alef; the initial glottal stop /ʔ/ is again absent. Additionally, the spirantised ח as /χ/ is acceptable for the non-Mizrahi variety (where ח merged with כ → /χ/), but the complete absence of the initial /ʔ/ is a systematic transcription error affecting all alef-initial Modern Hebrew entries in this dataset. (Coffin & Bolozky 2005 §1.3.)

---

### 4. `he` — love — initial /ʔ/ absent
- **File:** `words/love.js` line 104
- **Current:** `["אהבה", "ahava"]`
- **Expected:** `["אהבה", "ʔahava"]`
- **Why:** Same systematic issue as fire, eye, and one. אהבה opens with alef /ʔ/. The transcription `ahava` with a bare vowel onset misrepresents the phonemic inventory of Modern Hebrew, which distinguishes /ʔ/ from ∅ in lexical citation forms. (Coffin & Bolozky 2005 §1.3.)

---

### 5. `he` — eat — non-standard romanisation used in IPA field
- **File:** `words/eat.js` line 104
- **Current:** `["לאכול", "leeχol"]`
- **Expected:** `["לאכול", "leʔχol"]` (with glottal stop) or `["לאכול", "leχol"]`
- **Why:** The digraph `ee` is a romanisation convention, not IPA. The IPA long vowel is `eː`. Furthermore, לאכול contains alef between the lamed-prefix and the root; in standard Modern Hebrew citation this surfaces as /leʔχol/ (glottal stop retained) or /leχol/ (glottal elided). The `ee` spelling is simply wrong as IPA. The Biblical Hebrew form (line 956) correctly uses IPA diacritics. Consistency with the project's IPA standard requires `eː` or `e`, never `ee`.

---

### 6. `he` — moon — IPA transcription inconsistency: trill vs tap
- **File:** `words/moon.js` line 104
- **Current:** `["ירח", "jaɾeaχ"]`
- **Expected:** `["ירח", "jaˈɾeax"]` or `["ירח", "ˈjaɾeax"]`
- **Why:** The transcription `jaɾeaχ` uses the tap symbol ɾ, which is fine for Modern Hebrew resh (a uvular or post-alveolar approximant/trill that varies by speaker; ɾ is sometimes used as a cover symbol). However the sequence `eaχ` encodes two vowels in hiatus without a stress mark: the word ירח is bisyllabic /ja.ˈɾeax/ with stress on the final syllable (ultima, standard Modern Hebrew). Missing stress mark; and /x/ (not /χ/) is the more usual IPA choice for Modern Hebrew's non-pharyngeal velar fricative in this position when /ħ/ is already used for Mizrahi ח. Minor but should be consistent.

---

### 7. `hbo` — house — Tiberian vocalization incorrect: /bajit/ not the Tiberian form
- **File:** `words/house.js` line 963
- **Current:** `["בית", "bajit"]`
- **Expected:** `["בית", "baːjit"]` or `["בית", "ˈbaːjiθ"]`
- **Why:** The Tiberian Masoretic pronunciation of בַּיִת is /ˈbaːjiθ/: qamatz on the bet (long /aː/), shuruk/yod glide, hireq on yod, final tav spirantised to /θ/ in post-vocalic Tiberian begedkephet. The entry `bajit` lacks (a) the long vowel on the first syllable, (b) final-tav spirantisation to /θ/. The Tiberian begedkephet rule (Joüon & Muraoka §22) spirantises תּ/ת to [θ] in post-vocalic position, which is word-final here. Additionally the he_mis entry (line 964) also gives `bajit` — Mishnaic Hebrew generally preserved the tav as [t] (begedkephet began to be lost in Mishnaic), so that form is more defensible, but the hbo entry should reflect Tiberian spirantisation.

---

### 8. `hbo` — dog — /kelev/ missing Tiberian long vowel and begedkephet
- **File:** `words/dog.js` line 956
- **Current:** `["כלב", "kelev"]`
- **Expected:** `["כלב", "ˈkɛːlɛv"]` or `["כלב", "ˈkeːlev"]`
- **Why:** Biblical Hebrew כֶּלֶב has two segol vowels. In Tiberian vocalization, word-accented segol is phonologically /ɛː/ (or /e/) with the accent on the ultima. Transcribing as bare `kelev` without vowel length or stress erases the Tiberian phonological contrast. Furthermore the bet ב at word end is post-vocalic → spirantised to /v/ (this is correct here), but the initial kaf כ is word-initial (not post-vocalic) so it is a stop /k/ — correctly represented. The segol vowels should carry length marking for the stressed syllable per Tiberian convention. (Joüon & Muraoka §11; HALOT s.v. כֶּלֶב.)

---

### 9. `hbo` — drink — verb form and vowel length notation
- **File:** `words/drink.js` line 956
- **Current:** `["שתה", "ʃaːtaː"]`
- **Expected:** `["שתה", "ʃaːˈtaː"]` or with a note clarifying this is the 3ms qal perfect
- **Why:** The form שָׁתָה is the 3ms Qal perfect (he drank), not an infinitive. Biblical Hebrew uses infinitive construct (לִשְׁתּוֹת) for citation. While project policy may favour the root/3ms perfect as citation form for historical languages, the IPA `ʃaːtaː` is otherwise reasonable (qamatz + qamatz gadol + final he). However, the final he in שתה is a mater lectionis (not pronounced as a consonant in Tiberian), so the final /aː/ is a long vowel, not a consonantal [h]; the IPA correctly reflects this. One remaining concern: the Tiberian accent falls on the ultima (milra), so a stress mark before `taː` should appear: `ʃaːˈtaː`.

---

### 10. `hbo` — water — /majim/ missing Tiberian vowel length
- **File:** `words/water.js` line 963
- **Current:** `["מים", "majim"]`
- **Expected:** `["מים", "ˈmaːjim"]`
- **Why:** Biblical מַיִם has qamatz on mem (Tiberian /aː/) + yod (glide) + hireq + mem. The transcription `majim` omits the long vowel on the first syllable. The Tiberian form should reflect /aː/ for qamatz gadol. (Note: qamatz qaṭan would give /ɔ/, but in this word the qamatz is gadol /aː/.) Also missing stress mark; accent is on the ultima in the absolute form. Separately, the he_mis entry (line 964) likewise gives `majim` — acceptable for Mishnaic where vowel length distinctions were neutralising, but even there the convention should be consistent. (Joüon & Muraoka §9d; Khan 2013.)

---

### 11. `hbo` — sun — /ʃemeʃ/ missing Tiberian vowel length and stress
- **File:** `words/sun.js` line 962
- **Current:** `["שמש", "ʃemeʃ"]`
- **Expected:** `["שמש", "ˈʃɛːmɛʃ"]` or `["שמש", "ˈʃemeʃ"]`
- **Why:** שֶׁמֶשׁ has two segol vowels (Tiberian /ɛ/). In the absolute singular the stress falls on the first syllable (milel). The IPA `ʃemeʃ` using plain `e` is a reasonable simplification but lacks the stress mark. The Tiberian distinction between segol /ɛ/ and ṣere /eː/ is phonologically meaningful (compare בֵּן /beːn/ vs בֶּן /bɛn/), and flattening both to `e` obscures this. The Modern Hebrew entry (line 104) correctly writes `ʃemeʃ` which reflects the Modern neutralisation; the hbo entry should show the Tiberian quality difference.

---

### 12. `hbo` — heart — /leːv/ missing stress and spirantisation note
- **File:** `words/heart.js` line 956
- **Current:** `["לב", "leːv"]`
- **Expected:** `["לב", "leːv"]` — the ṣere length is correctly noted; bet spirantised to /v/ is correct (post-vocalic begedkephet). This entry is the most accurate hbo transcription in the dataset. Minor: stress mark `ˈleːv` would complete it, but the form is monosyllabic so stress is unambiguous. No error to flag here.

---

### 13. `hbo` — good — pharyngealized /tˤ/ notation is unusual for Tiberian
- **File:** `words/good.js` line 956
- **Current:** `["טוב", "tˤoːv"]`
- **Expected:** `["טוב", "tˤoːv"]` is defensible but needs a comment
- **Why:** The transcription uses the pharyngealisation diacritic /tˤ/ for tet (ט), representing the Semitic emphatic. This is phonologically correct for Biblical/Tiberian Hebrew (tet was historically pharyngealised/uvularised). However, few modern scholars write tet as /tˤ/ in Tiberian transcription; the standard Tiberian IPA convention (Khan 2013; Joüon & Muraoka) typically writes /t/ for tet with a note that emphatics are preserved categorically, or uses the dot-below diacritic /ṭ/. The holam after tet is a long /oː/ (correct). The post-vocalic bet → /v/ is correct. So the entry is defensible but inconsistent with all other entries where emphatic consonants (samekh vs shin vs tsade) are not differentiated by diacritics. If /tˤ/ is used here, tsade in tree (line 956) should similarly be /sˤ/ rather than plain /ts/.

---

### 14. `hbo` — tree — tsade transcribed /ts/ instead of emphatic /sˤ/
- **File:** `words/tree.js` line 956
- **Current:** `["עץ", "ʕeːts"]`
- **Expected:** `["עץ", "ʕeːsˤ"]` or `["עץ", "ʕeːtsʼ"]` (if ejective convention used)
- **Why:** The final letter is tsade (צ), a Semitic emphatic sibilant, historically /sˤ/ or an ejective. Transcribing it as `ts` conflates it with the affricate tsadi / aleph-yod combination. In Biblical Hebrew linguistics tsade (צ) is not an affricate; the affricate reading /ts/ is a post-Biblical development (found in Ashkenazi and modern Israeli Hebrew). The Tiberian Masoretic tradition points to an emphatic, not an affricate, for צ. Joüon & Muraoka §5 lists tsade as an emphatic sibilant. Compare: the hbo good.js entry uses /tˤ/ for emphatic tet — consistent use of emphatic notation demands /sˤ/ or similar for tsade. Also the initial ayin ע is correctly given as /ʕ/. The ṣere /eː/ is correct. (HALOT s.v. עֵץ.)

---

### 15. `he_mis` — cat — /ħ/ for ח in Mishnaic Hebrew
- **File:** `words/cat.js` line 957
- **Current:** `["חתול", "ħɑtul"]`
- **Expected:** `["חתול", "ħatul"]` (vowel quality issue) or discussion of ħ vs χ
- **Why:** Using /ħ/ for Mishnaic Hebrew ח is historically appropriate: Mishnaic Hebrew (Tannaitic, ~70–200 CE) still maintained the distinction between ח /ħ/ and כ /x/ (a distinction lost in Ashkenazi Modern Hebrew). However the vowel /ɑ/ (back open) is unusual for Mishnaic. Mishnaic Hebrew vowels are generally reconstructed closer to the Biblical system but with some reduction; /ɑ/ implies a back quality that is not standard for this period. More usual reconstruction: /ħatul/ with plain /a/. The use of /ɑ/ throughout the he_mis entries appears to be a systematic but unexplained back-vowel convention. (Sáenz-Badillos 1993 ch.5; Pérez Fernández *Introductory Grammar of Rabbinic Hebrew*.)

---

### 16. `he_mis` — eat — present participle given, not infinitive
- **File:** `words/eat.js` line 957
- **Current:** `["אוכל", "ʔoχel"]`
- **Note:** אוכל is the Qal active participle (ms) = "eating / one who eats". In Mishnaic Hebrew the participle serves as the present tense, so this is a reasonable citation form if the project policy is to cite the present/imperfect for verbal entries. However, drink.js (line 957) gives שותה (also present participle), while love.js (line 964) gives the noun אהבה. The inconsistency across he_mis verbal entries — eat uses participle, drink uses participle, but hello/thanks use nouns — is worth flagging. Additionally the use of /χ/ for כ in `ʔoχel` implies that Mishnaic Hebrew had already spirantised post-vocalic kaf to /χ/; this is plausible (begedkephet was active in Mishnaic), but the he_mis cat.js entry uses /ħ/ for ח while here the kaf is /χ/ — the distinction between /ħ/ vs /χ/ should be consistently maintained if preserved. (Sáenz-Badillos 1993 §5.2.)

---

### 17. `he_mis` — drink — present participle form incorrect
- **File:** `words/drink.js` line 957
- **Current:** `["שותה", "ʃote"]`
- **Expected:** `["שותה", "ʃoˈte"]` or `["שתה", "ʃaˈta"]` (infinitive absolute / root)
- **Why:** שותה is the Qal participle ms "drinking". The Mishnaic participle would be /ʃoˈtɛ/ or /ʃoˈte/ — the stress placement matters. Furthermore if project policy uses the root/3ms perfect for hbo (שָׁתָה `ʃaːtaː`), switching to the participle for he_mis without documentation is inconsistent. More importantly, שותה has holam → /o/ + final he (mater lectionis) → /e/, giving bisyllabic /ʃo.te/; a stress mark is required. (Sáenz-Badillos 1993 §5.)

---

### 18. `he_mis` — sun — /ħamːa/ has length on mem but missing stress
- **File:** `words/sun.js` line 963
- **Current:** `["חמה", "ħamːa"]`
- **Expected:** `["חמה", "ħaˈmːa"]` or `["חמה", "ˈħama"]`
- **Why:** חַמָּה (ḥamma) has a dagesh forte in the mem (geminate /mː/), which the transcription correctly renders as `mː`. The ח is /ħ/ (correct for Mishnaic, preserving the pharyngeal). However, stress placement is missing: the word is bisyllabic with stress on the ultima /ħamˈma/ or sometimes on the penult. Additionally the final vowel after geminate mem is segol in some vocalisations, but as qamatz in pause; plain /a/ is acceptable. The /ɑ/ convention used elsewhere (e.g. cat.js `ħɑtul`) is not applied here (this entry has `a`), indicating an internal inconsistency in the back-vowel treatment across he_mis entries. (Sáenz-Badillos 1993.)

---

### 19. `he_mis` — eye — /ʕajin/ appropriate but compare Modern Hebrew treatment
- **File:** `words/eye.js` line 957
- **Current:** `["עין", "ʕajin"]`
- **Note:** This is correct: Mishnaic Hebrew preserved /ʕ/ for ayin. The Tiberian/Mishnaic distinction between ע /ʕ/ and א /ʔ/ is appropriately reflected here. However, the Modern Hebrew (he) entry at line 104 transcribes the same word as `ajin` — no initial consonant at all (see Issue #2). The contrast between `ʕajin` (he_mis) and `ajin` (he) is therefore informative, but the he entry should at minimum have `ʔajin` for the non-Mizrahi form (merger to glottal stop) rather than a bare vowel. The he_mis form itself is good.

---

### 20. `hbo` — hello — שלום /ʃaːloːm/ is a noun, not a greeting formula
- **File:** `words/hello.js` line 956
- **Current:** `["שלום", "ʃaːloːm"]`
- **Note / Expected:** The phonology `ʃaːloːm` is correct for Biblical Hebrew שָׁלוֹם (qamatz /aː/ + holam /oː/ + final mem). However the project note (line 32) says "Blessings (e.g. 'peace') accepted only as the normal greeting" — and indeed שלום is the standard Modern Hebrew greeting. For Biblical Hebrew this is a noun meaning "peace/completeness," not a greeting formula per se. The IPA itself (ʃaːloːm) is accurate for Tiberian pronunciation. The holam /oː/ is correctly long. Only concern: the he_mis entry (line 957) gives `ʃɑlom` — shorter vowels, which is appropriate for Mishnaic (vowel length was neutralising), but the /ɑ/ for qamatz remains the unexplained back-vowel convention flagged in Issue #15.

---

### 21. `hbo` — thanks — /toːðaː/ has correct spirantisation but entry type is questionable
- **File:** `words/thanks.js` line 956
- **Current:** `["תודה", "toːðaː"]`
- **Expected:** This is acceptable; a flag is raised on internal consistency.
- **Why:** תּוֹדָה (tôdāh) is a Biblical Hebrew noun meaning "thanksgiving / thank-offering." The phonology is accurate: tav is initial (non-spirantised) /t/, holam /oː/, dalet post-vocalic → spirantised /ð/ (begedkephet; Joüon & Muraoka §22), final he with qamatz /aː/. All four features are correctly modelled. The project instruction for historical languages says to use "—" or a liturgical noun rather than inventing a formula — entering the real noun תּוֹדָה is appropriate. The he_mis entry `todɑ` collapses the holam length and uses /ɑ/ again (back-vowel convention); the dalet is not spirantised to /ð/ in he_mis (begedkephet loss was underway in Mishnaic), so plain /d/ in `todɑ` is actually correct for Mishnaic. The he_mis entry is thus phonologically sound here, though the length loss on /o/ is unnotated.

---

### 22. `hbo` — one — /ħ/ for ח is correct but stress placement wrong
- **File:** `words/one.js` line 962
- **Current:** `["אחד", "ʔeħaːd"]`
- **Expected:** `["אחד", "ʔeˈħaːd"]`
- **Why:** אֶחָד has hireq on alef (/ɛ/ or /e/), ḥet with qamatz (/ħaː/), and final dalet. The Tiberian stress is on the ultima (milra): /ʔɛ.ˈħaːd/. The ħ for ḥet is correct for Biblical Hebrew. The qamatz /aː/ length is correctly marked. Only deficiency: missing stress mark. The he_mis entry (line 963) gives `ʔeħɑd` with the same correct /ħ/ and the back-vowel /ɑ/ convention, also without stress.

---

### 23. `he` — father — colloquial form given instead of standard citation form
- **File:** `words/father.js` line 104
- **Current:** `["אבא", "aba"]`
- **Note:** The project description note (line 53) explicitly says "אב — צורת מילון/ניטרלית" (אב is the lexical/neutral form) while the display word and IPA show אבא /aba/, the colloquial/nursery form. This is a mismatch between the stated policy and the data: the neutral lexical form is אב /av/, while אבא is the informal babytalk/colloquial register. Compare: mother.js (line 104) similarly gives אמא /ima/ instead of the neutral אם /ʔem/. Both entries embed the colloquial forms (אבא, אמא) while the note texts describe the neutral forms (אב, אם). If the project policy is to give the colloquial conversational form, the IPA is correct (`aba`); if neutral/citation form is intended per the written note, the entry should be `["אב", "av"]`. The inconsistency between the stated note and the actual data is a data-quality issue. (Coffin & Bolozky 2005 §22.2: אב vs אבא register distinction.)

---

### 24. `he` — eat — infinitive construct used; /leeχol/ IPA non-standard
- **File:** `words/eat.js` line 104
- **Current:** `["לאכול", "leeχol"]`
- **Expected:** `["לאכול", "leʔχol"]` or `["לאכול", "leχol"]`
- **Why:** As noted in Issue #5, `ee` is not IPA. Beyond that, לאכול is the infinitive construct with preposition ל (le-) + root אכל. The alef in the root is in post-consonantal position where Modern Hebrew handles the glottal stop differently: in careful speech /leʔχol/, in casual speech /leχol/ with elision. The digraph `ee` presumably attempts to represent either vowel lengthening before the glottal (`eː` due to compensatory lengthening when /ʔ/ elides) — a plausible phonological argument — but should be written `eː` in IPA, not `ee`. (Coffin & Bolozky 2005 §12.4 on alef elision in infinitives.)

---

### 25. Systematic: `he_mis` back-vowel /ɑ/ convention is undocumented and inconsistent
- **Files:** `words/father.js` line 957, `words/hand.js` line 957, `words/hello.js` line 957, `words/one.js` line 963, `words/tree.js` line 957, `words/love.js` line 964, `words/moon.js` line 963, `words/thanks.js` line 957
- **Current pattern:** he_mis entries use /ɑ/ (back open vowel) for many instances of historical /a/
- **Expected:** either consistent /a/ (central open) throughout, or a documented convention explaining when /ɑ/ vs /a/ is used
- **Why:** Mishnaic Hebrew vocalism is conventionally reconstructed with /a/ (central) for qamatz/patach, not /ɑ/ (back cardinal 5). The back vowel /ɑ/ is associated with Tiberian Biblical phonology in some models (qamatz gadol as /ɔ/ or /ɑ/) but applying it uniformly to Mishnaic Hebrew without documentation creates confusion. Within the he_mis entries the vowel alternates: sun.js `ħamːa` has plain `a`, but cat.js `ħɑtul`, father.js `ʔɑv`, hand.js `jɑd` all have `ɑ`. This internal inconsistency has no apparent conditioning environment. A decision to use /a/ throughout for Mishnaic Hebrew, or to document the /ɑ/ convention explicitly, is needed. (Sáenz-Badillos 1993 §5; Pérez Fernández 1999.)

---

## Worker round-1 response (作業者round-1)

Scope reminder: per project editing policy I apply ONLY clear, unambiguous local errors or internal inconsistencies. System-level transcription conventions that the dataset applies consistently are held even where a stricter scholarly transcription is arguable.

### Applied

- **#5 / #24 — eat.js `he` `leeχol`** — APPLIED (applied by orchestrator this round). `ee` is a romanisation digraph, not valid IPA; this is an unambiguous local error. Replaced with `leχol`. Chose the glottal-elided form `leχol` (not `leʔχol`) because the Modern Hebrew (`he`) layer of this dataset systematically transcribes alef/ayin onsets WITHOUT a glottal stop (see `eʃ`, `ajin`, `eχad`, `ahava`); `leχol` removes the invalid digraph while staying internally consistent with that established convention. Only the IPA field changed; surface `לאכול` untouched.

- **#13 / #14 — tree.js `hbo` `ʕeːts`** — APPLIED (applied by orchestrator this round). Clear internal inconsistency within the same `hbo` register: good.js marks the emphatic tet as `tˤoːv` (pharyngealisation diacritic), but tree.js renders emphatic tsade as the affricate `ts`. For Biblical/Tiberian Hebrew tsade (צ) is an emphatic sibilant, not an affricate (the affricate reading is a post-Biblical Ashkenazi/Modern development). Corrected to `ʕeːsˤ`, aligning the emphatic notation with good.js and fixing a phonologically wrong affricate. Only the IPA field changed; surface `עץ` untouched.

### Held — won't-fix (system-level convention, internally consistent)

- **#1 #2 #3 #4 — `he` initial /ʔ/ (and ʕ→∅) omission** (`eʃ`, `ajin`, `eχad`, `ahava`). Held. The Modern Hebrew layer consistently omits the word-initial glottal stop for alef/ayin onsets across the entire dataset. This is a documented, uniformly-applied transcription convention (word-initial /ʔ/ is frequently unrealised / not transcribed in non-careful Modern Israeli Hebrew), not a one-off local error. Adding `ʔ` to four words would itself create inconsistency with every other alef-initial `he` entry. Defer to a reviewer-endorsed dataset-wide decision.

- **#6 — moon.js `he` `jaɾeaχ`** (stress mark; /x/ vs /χ/). Held. Modern Hebrew stress marks are omitted throughout the `he` layer, and /χ/ is used consistently for the velar/uvular fricative. Both are conventions, not errors.

- **#7 #8 #10 #11 #18 — hbo/he_mis Tiberian vowel-length, gemination-stress, final begedkephet spirantisation** (`bajit`, `kelev`, `majim`, `ʃemeʃ`, `ħamːa`). Held. The historical layers use a simplified transcription that broadly omits Tiberian vowel-length marking, ultima/penult stress marks, and word-final spirantisation. These are uniform system-level simplifications; selectively "fixing" a handful would worsen internal consistency. A documented Tiberian-transcription pass would need reviewer endorsement.

- **#9 #22 — hbo `drink` / `one` missing stress mark** (`ʃaːtaː`, `ʔeħaːd`). Held. Stress marks are omitted across the hbo layer; not local errors.

- **#13 (tet diacritic itself) #20 #21 #12 — defensible/correct entries.** No change requested by reviewer beyond notes; `leːv`, `ʃaːloːm`, `toːðaː`, `tˤoːv` are accepted as accurate. (The #14 fix below extends the SAME `tˤ` convention to tsade, which is the actionable half of #13.)

- **#15 #25 — he_mis `/ɑ/` vs `/a/` back-vowel convention.** Held for reviewer decision. This is an undocumented but dataset-wide convention spanning 8+ files; the reviewer explicitly offers two alternatives (normalise all to `/a/`, OR document `/ɑ/`) without endorsing one. A unilateral mass `ɑ→a` rewrite is a system-level convention change, outside the "clear local error" mandate. Needs an explicit reviewer-endorsed normalisation target before applying.

- **#16 #17 — he_mis verb citation form (participle vs perfect)** (`ʔoχel`, `ʃote`). Held. Cross-register citation-form policy choice (participle = Mishnaic present tense); not a local IPA error. The stress-mark request is the same omitted-convention case as above.

- **#23 — father.js / mother.js `he` colloquial vs neutral form** (`אבא`/`aba`, `אמא`/`ima`). Held. Changing the surface orthography (אבא→אב) is explicitly outside the IPA-only fix mandate, and the reviewer frames the IPA as correct for the colloquial form actually present. The note-vs-data register mismatch is a deliberate, consistent editorial choice (both father and mother use the colloquial nursery form); flagging it for a policy owner, not a mechanical fix.

- **#19 — eye.js he_mis `ʕajin`.** No change requested (reviewer confirms it is correct).

---

## Reviewer round-1 response (再評価 round-1)

I verified all claimed fixes and every held item against the live per-word data files under `words/`. Live data confirmation:

- `words/eat.js` line 104: `he: ["לאכול", "leχol"]`
- `words/tree.js` line 956: `hbo: ["עץ", "ʕeːsˤ"]`, line 957 `he_mis: ["אילן", "ʔilɑn"]`
- `words/good.js` line 956: `hbo: ["טוב", "tˤoːv"]`
- `he` layer onsets across the set: `eʃ`, `ajin`, `eχad`, `ahava`, `aba`, `χatul` — all vowel-initial / `χ`-using, none carry a leading `ʔ`.

### Applied — verified

- **#5 / #24 — eat.js `he` `leeχol` → `leχol`.** ✓ VERIFIED in live data (`words/eat.js:104`). The romanisation digraph `ee` is gone. A repo-wide grep for `ee`/double-vowel digraphs in any `he`/`hbo`/`he_mis` IPA field returns no remaining hits, so this was the only instance and it is fully cleared. Choosing the glottal-elided `leχol` (over `leʔχol`) is the correct call: it both removes the invalid digraph and stays consistent with the Modern Hebrew layer's no-onset-glottal convention. Accept.

- **#13 / #14 — tree.js `hbo` `ʕeːts` → `ʕeːsˤ`.** ✓ VERIFIED (`words/tree.js:956`). The affricate `ts` is replaced with the emphatic sibilant `sˤ`, matching the `tˤ` emphatic notation in `good.js` hbo (`tˤoːv`). I confirmed these two are the only tet/tsade-bearing words in the entire hbo layer, so the emphatic convention is now internally consistent across the layer. The affricate reading was genuinely a post-Biblical anachronism for Tiberian Hebrew; the fix is phonologically sound. Accept.

### Held items — adjudication

- **#1 #2 #3 #4 — `he` initial /ʔ/ (and ʕ→∅) omission.** ✗ Won't-fix accepted. I confirmed by grep that the entire `he` layer omits the word-initial glottal stop (zero `ʔ`-initial entries dataset-wide). This is a uniformly-applied transcription convention, not a local error; patching four words would manufacture the inconsistency the reviewer worries about. Defensible system-level choice. Won't-fix.

- **#6 — moon.js `he` `jaɾeaχ`.** ✗ Won't-fix accepted. Stress marks are omitted throughout the `he` layer and `χ` is used uniformly for the velar/uvular fricative (verified: `leχol`, `χatul`, `jaɾeaχ`). Convention, not error.

- **#7 #8 #10 #11 #18 — hbo/he_mis Tiberian length / gemination-stress / final begedkephet.** ✗ Won't-fix accepted. The historical layers apply a deliberately simplified transcription that omits Tiberian vowel-length, ultima/penult stress, and word-final spirantisation uniformly (e.g. `bajit`, `kelev`, `majim`, `ʃemeʃ`). Selective fixes would worsen internal consistency. A full documented Tiberian pass is a legitimate future enhancement but is outside "clear local error." Won't-fix.

- **#9 #22 — hbo `drink`/`one` missing stress.** ✗ Won't-fix accepted. Same omitted-stress convention across the hbo layer.

- **#12 #13(diacritic) #20 #21 — `leːv`, `tˤoːv`, `ʃaːloːm`, `toːðaː`.** ✓ Accepted as accurate; the actionable half of #13 (extending `tˤ` to tsade) is the verified #14 fix above.

- **#15 #25 — he_mis `/ɑ/` vs `/a/` back-vowel convention.** △ Held for reviewer decision is the right disposition. I confirm the inconsistency is real and dataset-wide (`ħɑtul`, `ʔɑv`, `jɑd`, `ʔilɑn`, `ʔɑhɑvɑ`, `levɑnɑ` vs `ħamːa`, `bajit`, `majim`, `kelev`). However, the reviewer (me) explicitly offered two equally-valid resolutions without endorsing one, so this is genuinely a convention decision, not a mechanical error the dev team can unilaterally apply. Since I am not now endorsing a specific normalisation target, I treat this as a documented open convention question that does not block closure of the file's *error* items — but see status note below. Not a clear local error.

- **#16 #17 — he_mis verb citation form (participle vs perfect).** ✗ Won't-fix accepted. Participle = Mishnaic present tense is a defensible citation-form policy choice; the stress-mark sub-request falls under the omitted-stress convention.

- **#23 — father.js/mother.js `he` colloquial vs neutral.** ✗ Won't-fix accepted. The IPA (`aba`) is correct for the colloquial form actually present; changing the surface orthography is outside the IPA mandate and both father/mother consistently use the nursery form. A policy-owner note, not a fix.

- **#19 — eye.js he_mis `ʕajin`.** ✓ Confirmed correct in live data.

### New issues

None. Verification surfaced no new clear errors; the Hebrew set is internally consistent within its stated conventions.

### Scorecard

- Applied & verified in live data: 2 / 2 (#5/#24, #13/#14)
- Held, accepted as defensible system-level convention / won't-fix: #1–#4, #6, #7–#11, #16–#18, #20–#23
- Held for documented convention decision (not a local error): #15/#25 (`/ɑ/` vs `/a/`)
- New issues raised: 0

All clear, unambiguous errors flagged in this review (the two romanisation/phonology bugs) are fixed and verified. Every remaining item is either accepted as accurate or is a uniformly-applied system-level convention that I accept as a defensible cross-school choice. The `/ɑ/`-vs-`/a/` question is a documentation/normalisation preference, not a local data error, and I do not endorse a forced rewrite; it is therefore a won't-fix at the error level.

**File status: CLOSED** — nothing left to address.
