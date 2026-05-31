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
