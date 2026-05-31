# Wordmap review #01 — Germanic linguistics specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a specialist in Germanic historical linguistics with a focus on Proto-Germanic reconstruction, Grimm's Law, Verner's Law, the West/North/East Germanic split, and the High German Consonant Shift (HGCS / Zweite Lautverschiebung). My documentary work covers the full breadth of the modern Germanic languages — English and its major dialects (AAVE, Appalachian, Scottish, Yorkshire, Cockney), German, Dutch, Frisian, Yiddish, Afrikaans, the North Germanic languages (Swedish, Norwegian Bokmål/Nynorsk, Danish, Icelandic, Faroese), and the historically attested varieties (Gothic, Old English, Old Norse, Old High German, Middle High German, Old Saxon, Old Frisian). Primary reference sources for this review: Braune/Heidermanns *Althochdeutsche Grammatik* (15th ed.), Kroonen (2013) *Etymological Dictionary of Proto-Germanic*, Ringe (2006) *From PIE to Proto-Germanic*, Wright (1910) *Old English Grammar*, Noreen *Altnordische Grammatik*, Duden *Aussprachewörterbuch* (7th ed.), Van Dale Dutch dictionary, YIVO *Yidish* Orthography, Árnason (2011) *The Phonology of Icelandic and Faroese*, Collins & Mees *The Phonetics of English and Dutch*.

---

## Issues found

### 1. `goh` — water — HGCS: intervocalic /t/ → [ss], not [ts]
- **File:** `words/water.js` line 917
- **Current:** `["wazzar", "ˈwatsːar"]`
- **Expected:** `["wazzar", "ˈwasːar"]`
- **Why:** The High German Consonant Shift distinguishes two reflexes of PGmc */t/*: word-initial and post-consonantal */t/* → affricate [ts] (written ⟨z⟩), but *intervocalic* */t/* → geminate fricative [ssː] (written ⟨zz⟩). OHG *wazzar* derives from PGmc \**watōr* via the intervocalic path, giving [ˈwasːar], not the affricate [ˈwatsːar]. Modern German *Wasser* [ˈvasɐ] with [ss] directly continues this OHG geminate fricative, confirming the correct reconstruction. (Braune/Heidermanns §131.)

---

### 2. `goh` — eat — HGCS: same intervocalic /t/ error
- **File:** `words/eat.js` line 910
- **Current:** `["ezzan", "ˈetsːan"]`
- **Expected:** `["ezzan", "ˈesːan"]`
- **Why:** PGmc \**etaną* has intervocalic */t/*, which by HGCS → OHG geminate fricative [ss] (written ⟨zz⟩). The IPA [ˈetsːan] (affricate + geminate) is the initial/post-consonantal reflex, not the intervocalic one. Compare MHG *ezzen* and modern German *essen* [ˈɛsn̩] with plain [s], confirming [ss] for this slot. (Braune/Heidermanns §131c.)

---

### 3. `gmh` — eat — HGCS geminate fricative, not affricate
- **File:** `words/eat.js` line 922
- **Current:** `["ezzen", "ˈetsːən"]`
- **Expected:** `["ezzen", "ˈesːən"]`
- **Why:** MHG *ezzen* directly continues OHG *ezzan*; the ⟨zz⟩ digraph retains its value as geminate [ssː] throughout the MHG period. The affricate [tsː] is misapplied here. (Paul *Mittelhochdeutsche Grammatik* §L64.)

---

### 4. `gmh` — water — same HGCS affricate error
- **File:** `words/water.js` line 929
- **Current:** `["wazzer", "watsːer"]`
- **Expected:** `["wazzer", "ˈwasːer"]`
- **Why:** MHG *wazzer* ⟨zz⟩ = geminate fricative [ssː], continuing OHG *wazzar*. The affricate reading [tsː] is the wrong historical slot. Stress mark also missing. (Paul *MHG Grammatik* §L64; cf. modern German *Wasser*.)

---

### 5. `goh` — cat — HGCS affricate vs. geminate fricative
- **File:** `words/cat.js` line 910
- **Current:** `["kazza", "ˈkatsːa"]`
- **Expected:** `["kazza", "ˈkasːa"]`
- **Why:** OHG *kazza* shows intervocalic ⟨zz⟩, the geminate fricative output of HGCS on */tt/* (PGmc \**kattuz*). The correct IPA is [ˈkasːa] with [ssː], not [tsːa] with an affricate. Modern German *Katze* [ˈkatsə] has since acquired the affricate spelling through a later development (the affricate is real in NHG, but it was not the OHG stage). (Braune/Heidermanns §131.)

---

### 6. `de` — fire — wrong second element of /eu/ diphthong
- **File:** `words/fire.js` line 92
- **Current:** `["Feuer", "fɔʏ̯ɐ"]`
- **Expected:** `["Feuer", "fɔɪ̯ɐ"]`  (or `ˈfɔɪ̯ɐ`)
- **Why:** Standard German *eu/äu* is transcribed [ɔɪ̯] in all major reference works (Duden *Aussprachewörterbuch*, Mangold, IPA Handbook for German). The second element [ʏ̯] (close-mid rounded front) is a Bavarian/Southern German variant, not the standard. The correct second element for standard German is the unrounded [ɪ̯].

---

### 7. `is` — love — diphthong analysis reversed: *á* = /au/, not /aː/ + /u/
- **File:** `words/love.js` line 301
- **Current:** `["ást", "aːust"]`
- **Expected:** `["ást", "ˈauːst"]`
- **Why:** Icelandic *á* represents the long diphthong /auː/ (Árnason 2011, §3.3). The current transcription [aːust] implies a long monophthong [aː] followed by a separate [u], splitting the diphthong at the wrong joint. The correct phonemic transcription is [auːst]: the diphthong onset is short [a], the nucleus is the long [uː] glide target, followed by the coda [st].

---

### 8. `ang` — thanks — OE ⟨nc⟩ is [ŋk], not the affricate [nts]
- **File:** `words/thanks.js` line 516
- **Current:** `["þancian", "θɑntsiɑn"]`
- **Expected:** `["þancian", "ˈθɑŋkiɑn"]`
- **Why:** In Old English, ⟨c⟩ palatalises to [tʃ] only before front vowels (e, i, y) when not preceded by a nasal or another consonant in the same cluster. In *þancian* the sequence is ⟨nc⟩: the /n/ assimilates to [ŋ] before /k/, giving the cluster [ŋk]. No affrication occurs in the nasal+stop cluster ⟨nc⟩. The IPA [θɑntsiɑn] — with affricate [ts] replacing [k] and a spurious inserted [t] before [s] — is doubly wrong. (Wright *OE Grammar* §187–188.)

---

### 9. `ang` — heart — orthography substituted for IPA
- **File:** `words/heart.js` line 516
- **Current:** `["heorte", "heorte"]`
- **Expected:** `["heorte", "ˈheortə"]`
- **Why:** The IPA transcription is identical to the OE orthography. In Old English, final unstressed *-e* had reduced to schwa [ə]; this must be marked in IPA. The OE "breaking" diphthong ⟨eo⟩ in *heorte* also needs clarification (typically transcribed [eo] or [eɔ̯] in the scholarly literature), and a stress mark is expected on the first syllable. At minimum, the final vowel must be [ə], not a full [e].

---

### 10. `ang` — water — orthography substituted for IPA
- **File:** `words/water.js` line 523
- **Current:** `["wæter", "wæter"]`
- **Expected:** `["wæter", "ˈwætər"]`
- **Why:** Again the IPA field merely repeats the OE orthography. OE unstressed second-syllable *-er* was pronounced [ər] (reduced vowel + r), not [er]. A stress diacritic on the first syllable is also required. Compare the analogous entry `non: ["vatn", "vɑtn"]` which does supply distinct IPA.

---

### 11. `non` — fire — orthography substituted for IPA
- **File:** `words/fire.js` line 524
- **Current:** `["eldr", "eldr"]`
- **Expected:** `["eldr", "ˈeldr"]`  (at minimum; full phonemic: `["eldr", "ˈɛldr"]`)
- **Why:** The IPA field is identical to the ON orthography. While ON *eldr* is broadly readable, a proper entry should at least supply a stress mark and indicate vowel quality: ON short *e* = [ɛ] (as used elsewhere in the dataset, e.g. `non: ["heill", "hɛilː"]`). Compare the analogous `non: ["hundr", "hundr"]` (dog.js) which has the same defect.

---

### 12. `sv` — father / mother — colloquial register mismatches neighbouring Scandinavian entries
- **Files:** `words/father.js` line 164; `words/mother.js` line 164
- **Current:** `["pappa", "papːa"]` / `["mamma", "mamːa"]`
- **Expected:** `["far", "fɑːr"]` / `["mor", "muːr"]`  (matching Bokmål *no:* and Nynorsk *nn:*)
- **Why:** Swedish *pappa* and *mamma* are nursery/colloquial registers. The standard citation forms for "father" and "mother" in Swedish are *far* and *mor* (also *fader*, *moder* in formal/written use). Both Bokmål (`no: ["far", "fɑːr"]`) and Nynorsk (`nn: ["far", "fɑːɹ"]`) correctly use the neutral forms. The inconsistency in register undermines cross-Scandinavian comparability. SAOL (Swedish Academy word list) headword: *far* (n., "father"), *mor* (n., "mother").

---

### 13. `af` — drink — wrong vowel quality: /ɪ/ not schwa
- **File:** `words/drink.js` line 282
- **Current:** `["drink", "drəŋk"]`
- **Expected:** `["drink", "drɪŋk"]`
- **Why:** In Afrikaans, the vowel in *drink* is the short front vowel /ɪ/ (as in Dutch *drinken* [drɪŋkən]). The schwa [ə] is a central mid vowel that does not occur in this stressed closed syllable in standard Afrikaans. (Le Roux & Pienaar *Afrikaanse Fonetiek*; compare the dataset's own `af: ["hand", "ɦant"]` where the stressed vowel is correctly transcribed as a full cardinal.)

---

### 14. `yi` — one — YIVO diphthong ⟨ey⟩ transcribed with wrong onset vowel
- **File:** `words/one.js` line 299
- **Current:** `["איינס", "ɛɪns"]`
- **Expected:** `["איינס", "eɪns"]`
- **Why:** In standard YIVO Yiddish, the diphthong spelled ⟨ey⟩ / ⟨אייִ⟩ is transcribed [eɪ] (mid-front onset, not open-mid [ɛ]). Weinreich's *Modern English-Yiddish Dictionary* and the YIVO *Yidish* phonology standard consistently give [eɪ] for this diphthong. Using [ɛɪ] is a dialect approximation (some Eastern Yiddish varieties) not the agreed international standard transcription. The same error appears in `yi: hello` (*aleykhem*) line 293.

---

### 15. `yi` — hello — YIVO *sholem* vowel transcribed as [ɔ] instead of [o]
- **File:** `words/hello.js` line 293
- **Current:** `["שלום עליכם", "ʃɔləm alɛɪxəm"]`
- **Expected:** `["שלום עליכם", "ˈʃoləm aˈleɪxəm"]`
- **Why:** Standard YIVO Yiddish has *sholem* [ˈʃoləm] with the mid back rounded vowel [o], not the open-mid [ɔ]. The YIVO orthography שלום = *sholem* (not *sholem* with ɔ). In addition the *ey* in *aleykhem* should be [eɪ] (same issue as #14 above). Stress marks are also absent from both words in the phrase.

---

### 16. `goh` / `gmh` / `osx` — fire — orthography copied verbatim as IPA
- **Files:** `words/fire.js` lines 916, 928, 932
- **Current:** `goh: ["fiur", "fiur"]`, `gmh: ["viur", "viur"]`, `osx: ["fiur", "fiur"]`
- **Expected (illustrative):** `goh: ["fiur", "ˈfiur"]`, `gmh: ["viur", "ˈviur"]`, `osx: ["fiur", "ˈfiur"]`
- **Why:** All three IPA fields simply repeat the orthographic form. This differs from the same words' contemporaneous entries (e.g. `goh: ["wazzar", "ˈwatsːar"]` supplies stress and modifies spelling). At minimum a stress mark is required; ideally the OHG/MHG diphthong ⟨iu⟩ should be marked as [iu̯] or noted as the rounded front vowel it had shifted to in some dialects by the MHG period ([yː]).

---

### 17. `is` — good — word-initial /g/ transcribed as voiced [ɡ] instead of voiceless [k]
- **File:** `words/good.js` line 294
- **Current:** `["góður", "ɡouːðʏɹ"]`
- **Expected:** `["góður", "ˈkouːðʏɹ"]`
- **Why:** In Icelandic, the phoneme /g/ is realised as a voiceless unaspirated stop [k] in word-initial position before all vowels (Árnason 2011 §5.2.2; Einarsson *Icelandic* §2.4). The IPA symbol [ɡ] (voiced) is incorrect for standard Icelandic. Compare: the dataset correctly transcribes Icelandic *köttur* with initial [kʰ] (voiced aspirated stop), showing awareness of the voiceless system; initial [ɡ] is incongruent with that treatment.

---

### 18. `is` — father — unaccented *a* transcribed with spurious length mark [aː]
- **File:** `words/father.js` line 294
- **Current:** `["faðir", "faːðɪɹ"]`
- **Expected:** `["faðir", "ˈfaðɪɹ"]`
- **Why:** In Icelandic orthography, long vowels are invariably marked with an acute accent (⟨á é í ó ú ý⟩). The word *faðir* carries no accent on the first *a*, so it is the short vowel [a], not [aː]. Assigning length [aː] to an unaccented Icelandic vowel contradicts the orthographic system directly. (Árnason 2011 §3.1.)

---

### 19. `nl` — father — word-initial /v/ devoiced to [f] in standard transcription
- **File:** `words/father.js` line 160
- **Current:** `["vader", "faːdər"]`
- **Expected:** `["vader", "ˈvaːdər"]`
- **Why:** Standard Dutch /v/ in word-initial position is the voiced labiodental fricative [v], as given in Van Dale *Groot Woordenboek* and the *Uitspraakwoordenboek* (Heemskerk & Zonneveld 2000). The devoiced variant [f] is characteristic of colloquial Southern Dutch (Flemish) and informal speech but is not the standard citation form. Compare the dataset's own treatment: `nl: ["vuur", "vyːr"]` (fire) and `nl: ["liefde", "liːfdə"]` (love), both of which correctly transcribe word-initial /v/ as [v].

---

### 20. `de` — hello — spurious vowel length on final syllable; stress unmarked
- **File:** `words/hello.js` line 92
- **Current:** `["Hallo", "haloː"]`
- **Expected:** `["Hallo", "haˈlo"]`  (Duden: /haˈlo/, no length on final -o)
- **Why:** The Duden *Aussprachewörterbuch* (entry *Hallo*) gives /haˈlo/ without final vowel length. The trailing length diacritic [oː] is unwarranted: word-final unstressed /o/ in German is typically short. The stress — which in German *Hallo* falls on the second syllable — is also absent, making it impossible to distinguish *Hallo* from an iambic vs. trochaic reading.

---

### 21. `is` — heart — preaspiration on sonorant + voiceless stop cluster absent
- **File:** `words/heart.js` line 294
- **Current:** `["hjarta", "çaɹta"]`
- **Expected:** `["hjarta", "ˈçaʰrta"]`  (or `ˈçar̥ta`)
- **Why:** Icelandic systematically preaspirates voiceless stops (p, t, k) following sonorants (l, n, r) in a coda+onset cluster. In *hjarta*, the sequence ⟨rt⟩ gives [r̥t] or [ʰt] depending on the analytical framework (Árnason 2011 §5.3; Thráinsson *Phonology of Icelandic* §3.4). The current IPA [çaɹta] treats ⟨rt⟩ as a plain voiced [ɹ]+[t] sequence, erasing one of the most salient phonological features of Icelandic. Compare the correctly preaspirated entry `is: ["köttur", "kʰœʰtʏɹ"]` in the same dataset.

---

### 22. `fo` — good — word-initial /g/ voiced [ɡ] instead of voiceless [k]
- **File:** `words/good.js` line 495
- **Current:** `["góður", "ɡɔuːʊɹ"]`
- **Expected:** `["góður", "ˈkɔuːʊɹ"]`
- **Why:** Faroese underwent the same devoicing of initial /g/ as Icelandic: word-initial /g/ → [k] (voiceless unaspirated) before all vowels (Árnason 2011 §10.3; Johnston *Faroese* §2.3). Cognate entries in the dataset for Icelandic `góður` (issue #17 above) and Faroese `góður` share the same error, suggesting the IPA was produced without applying the Faroese/Icelandic devoicing rule. Note: the entry `fo: ["drekka", "tɹɛhka"]` (drink) correctly devoices initial *d* → [t], showing the rule is known but inconsistently applied.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

All 22 findings were verified verbatim against the data files. 14 applied as clear, well-supported IPA-value corrections; 8 held with rationale (convention / register / underspecified). Applied edits below are marked "(applied by orchestrator this round)".

### Applied

- **#1 goh water** — `ˈwatsːar` → `ˈwasːar`. OHG intervocalic ⟨zz⟩ = geminate fricative [sː], not affricate. (applied by orchestrator this round)
- **#2 goh eat** — `ˈetsːan` → `ˈesːan`. Same intervocalic HGCS reflex. (applied by orchestrator this round)
- **#3 gmh eat** — `ˈetsːən` → `ˈesːən`. MHG ⟨zz⟩ retains geminate fricative. (applied by orchestrator this round)
- **#4 gmh water** — `watsːer` → `wasːer`. Affricate→fricative value only; the proposed stress-mark addition (`ˈwasːer`) held as convention (see below). (applied by orchestrator this round)
- **#5 goh cat** — `ˈkatsːa` → `ˈkasːa`. OHG-stage geminate fricative (NHG affricate is a later development). (applied by orchestrator this round)
- **#6 de fire** — `fɔʏ̯ɐ` → `fɔɪ̯ɐ`. Standard German /eu/ = [ɔɪ̯]; [ʏ̯] is Southern. Consistent with de_lut `foɪ̯r`. (applied by orchestrator this round)
- **#7 is love** — `aːust` → `auːst`. á = long diphthong /auː/; old value split the diphthong at the wrong joint. (applied by orchestrator this round)
- **#8 ang thanks** — `θɑntsiɑn` → `θɑŋkiɑn`. ⟨nc⟩ = [ŋk]; removed the spurious affricate + inserted [t]. (applied by orchestrator this round)
- **#13 af drink** — `drəŋk` → `drɪŋk`. Stressed closed syllable takes short front /ɪ/, not schwa. (applied by orchestrator this round)
- **#14 yi one** — `ɛɪns` → `eɪns`. YIVO ⟨ey⟩ = [eɪ]. (applied by orchestrator this round)
- **#15 yi hello** — `ʃɔləm alɛɪxəm` → `ʃoləm aleɪxəm`. sholem [o]; aleykhem [eɪ]. Stress marks held as convention. (applied by orchestrator this round)
- **#17 is good** — `ɡouːðʏɹ` → `kouːðʏɹ`. Initial lenis /g/ → voiceless [k]. Justified as an *internal inconsistency*: the dataset already devoices is `drekka` → `trɛhka`. (applied by orchestrator this round)
- **#18 is father** — `faːðɪɹ` → `faðɪɹ`. Unaccented `a` is short; the [aː] length mark contradicts Icelandic orthography. (applied by orchestrator this round)
- **#19 nl father** — `faːdər` → `vaːdər`. Standard Dutch initial /v/ = [v]; matches dataset nl `vuur`/`liefde`. (applied by orchestrator this round)
- **#22 fo good** — `ɡɔuːʊɹ` → `kɔuːʊɹ`. Initial /g/ → [k]; internal inconsistency with fo `drekka` → `tɹɛhka`. (applied by orchestrator this round)

### Held with rationale

- **#9 ang heart**, **#10 ang water**, **#11 non fire**, **#16 goh/gmh/osx fire** — *Held.* These flag IPA fields that repeat the orthography. The defect is real, but the proposed corrections are not single-valued: adding a stress mark and choosing a reduced-vowel value ([ə] vs full vowel, [iu̯]/[yː] for ⟨iu⟩, [ɛ] vs [e] quality) are scholarly-transcription conventions. This is a defensible normalization pass but was not pre-endorsed and is stylistic rather than a clear wrong-value error; deferring to a dedicated convention decision.
- **#12 sv father/mother** — *Held (won't-fix).* `pappa`/`mamma` vs `far`/`mor` is a headword *register choice*, a system-level decision rather than a local error. The chosen surface forms are valid Swedish; changing them is an editorial policy call for the team.
- **#20 de hello** — *Held.* The proposed `haˈlo` bundles a stress-convention addition with removal of final-vowel length; the current `haloː` parallels pdc `Hallo` `haloː`. Not an unambiguous single-value fix.
- **#21 is heart** — *Held.* The dataset deliberately does **not** mark sonorant+stop preaspiration elsewhere (is `hundur` `hʏntʏɹ`, `hönd` `hœnt`, `eldur` `ɛltʏɹ` all lack it); only the geminate in `köttur` is marked. Adding preaspiration to `hjarta` alone would create a new inconsistency, so this is a system-wide convention choice, not a local fix.

---

## Reviewer round-1 response (再評価 round-1)

I re-verified all 15 claimed "applied" edits against the **live** per-word data files (grep over `words/*.js`). Every one is present in the data exactly as claimed:

| # | lang/word | live value | verified |
|---|-----------|-----------|----------|
| 1 | goh water (l.917) | `["wazzar", "ˈwasːar"]` | ✓ |
| 2 | goh eat (l.910) | `["ezzan", "ˈesːan"]` | ✓ |
| 3 | gmh eat (l.922) | `["ezzen", "ˈesːən"]` | ✓ |
| 4 | gmh water (l.929) | `["wazzer", "wasːer"]` | ✓ (affricate→fricative; stress held) |
| 5 | goh cat (l.910) | `["kazza", "ˈkasːa"]` | ✓ |
| 6 | de fire (l.92) | `["Feuer", "fɔɪ̯ɐ"]` | ✓ |
| 7 | is love (l.301) | `["ást", "auːst"]` | ✓ |
| 8 | ang thanks (l.516) | `["þancian", "θɑŋkiɑn"]` | ✓ |
| 13 | af drink (l.282) | `["drink", "drɪŋk"]` | ✓ |
| 14 | yi one (l.299) | `["איינס", "eɪns"]` | ✓ |
| 15 | yi hello (l.293) | `["שלום עליכם", "ʃoləm aleɪxəm"]` | ✓ |
| 17 | is good (l.294) | `["góður", "kouːðʏɹ"]` | ✓ |
| 18 | is father (l.294) | `["faðir", "faðɪɹ"]` | ✓ |
| 19 | nl father (l.160) | `["vader", "vaːdər"]` | ✓ |
| 22 | fo good (l.495) | `["góður", "kɔuːʊɹ"]` | ✓ |

No phantom/claimed-but-absent fixes. All 15 are clean, correctly-valued corrections — accepted (✓).

### Adjudication of held items

- **#9 ang heart, #10 ang water, #11 non fire, #16 goh/gmh/osx fire — △ ACCEPT THE HOLD.** I confirmed these IPA fields still verbatim-copy the orthography (`ang heart` `heorte`/`heorte` l.516; `ang water` `wæter`/`wæter` l.523; `non fire` `eldr`/`eldr` l.524; `goh/gmh/osx fire` `fiur`/`viur`/`fiur` ll.916/928/932). This is a real defect class, but the proposed corrections are genuinely multi-valued (reduced-vowel choice [ə] vs full vowel; ⟨iu⟩ → [iu̯] vs [yː]; ⟨eo⟩ breaking diphthong notation; whether to mark stress on disyllables the dataset otherwise leaves unmarked). The dataset leaves stress unmarked on essentially all disyllables (e.g. de `faːtɐ`, `vasɐ`, nl `vaːdər`), so a blanket stress-mark addition would itself break convention. I agree this belongs to a dedicated normalization/convention pass rather than a single-value error fix. Defensible hold — not blocking.

- **#12 sv father/mother — ✓ ACCEPT THE HOLD (won't-fix).** Confirmed live: sv `["pappa","papːa"]` / `["mamma","mamːa"]`. `pappa`/`mamma` are valid, extremely common Swedish forms; headword register is an editorial/system-level policy, not a phonetic error. The IPA itself is correct for the chosen surface form. Won't-fix is the right call.

- **#20 de hello — △ ACCEPT THE HOLD.** Confirmed live: de `["Hallo","haloː"]`, and pdc `["Hallo","haloː"]` (l.291) parallels it. The stress-mark omission is consistent with the dataset's disyllable convention, so it is not an isolated error. The final `oː` length is debatable (Duden marks short, but stressed final -o in *Hallo* is frequently realized half-long/long in actual speech). Minor and defensible; not blocking.

- **#21 is heart — ✓ ACCEPT THE HOLD.** Verified the consistency basis: other Icelandic sonorant+voiceless-stop clusters in the dataset are left without preaspiration marking (`eldur` `ɛltʏɹ` confirmed l.300 fire.js); only the `köttur` geminate is marked. Adding preaspiration to `hjarta` alone would introduce a fresh inconsistency. This is a genuine system-wide convention choice; correctly held.

### New issues

None. During verification I scanned the neighbouring Germanic/North-Germanic entries in all 13 touched files and found no additional clear wrong-value errors beyond what the original review already flagged. I deliberately did not pad.

### Scorecard

- Applied & verified in live data: 15 / 15 ✓
- Held items adjudicated: 4 (all ACCEPTED as defensible convention / register / multi-valued-normalization choices; 2 △ stylistic, 2 ✓ won't-fix)
- New actionable issues: 0
- Phantom fixes (claimed but absent): 0

Every clear wrong-value error raised in this file has been fixed and verified against the live data. The remaining open items are all either system-level convention decisions or register/editorial policy that I explicitly accept as defensible non-fixes.

**File status: CLOSED** — nothing left to address.
