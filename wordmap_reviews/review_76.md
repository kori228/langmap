# Wordmap review #76 — Historical & reconstructed-forms rigor specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a historical-linguistics specialist whose daily work sits on the attested-vs-reconstructed boundary: deciding whether a cited form belongs in a manuscript edition or behind an asterisk, and whether its phonological gloss reflects the language's *own* period or a later/modern reading bled backwards. For this project I read `words/*.js` directly, `eval` the `WORDS.<word>` objects in Node, and copy each historical cell verbatim before flagging it. I am fluent in the data model (two-element `[surface, ipa]` tuples; the historical/classical code set `la sa sa_edu vsa pi cu goh gmh osx non got ang enm en_em el_grc gmy egy cop akk sux hit fro nci ave kho gez hbo ko_gor ko_mid och ojp ja_chu ja_heian ja_kanbun cqu cmg juc chb`) and in the project's asterisk convention — *attested* forms carry no `*`, *reconstructed* ones do (verified live: every `och` Old-Chinese cell and every `ko_gor` Goryeo-Korean cell is starred; every `ojp`/`ave`/`gmy` attested cell is not — that policy is clean and I report nothing against it). My citations are the standard period grammars: **Weiss (2009) _Outline of the Historical and Comparative Grammar of Latin_**; **Whitney (1889) _Sanskrit Grammar_** and **Macdonell (1910) _Vedic Grammar for Students_**; **Ringe (2006) _From Proto-Indo-European to Proto-Germanic_** and **Wright (1910) _Grammar of the Gothic Language_** for Gothic; **Wright & Wright (1925) _Old English Grammar_** for OE; **Sihler (1995) _New Comparative Grammar of Greek and Latin_** for the Greek spurious diphthongs; **Lunt (2001) _Old Church Slavonic Grammar_** for the jers. The project docs I lean on are `docs/words/CONTRIBUTING.md` (the `[surface, ipa]` contract and the "IPA, not romanisation" rule) and `docs/words/LANG_CODES.md` (which fixes each code's period and family). My findings cluster on three recurring period-pronunciation hazards: Gothic ⟨ai⟩ outside the breaking environment, Old English long diphthongs flattened or mis-quantified, the Old-Church-Slavonic front jers left unvocalized while the back jers are vocalized — plus a sharp Sanskrit vocalic-ṛ inconsistency where the project's own `vsa` cell is the proof. Every "Current" value below was copied straight from the file at the cited line; no data file was modified.

---

## Issues found

### 1. `got` — one — Gothic ⟨ai⟩ in *ains* is a true diphthong, not broken /ɛː/
- **File:** `words/one.js` line 525
- **Current:** `["𐌰𐌹𐌽𐍃", "ɛːns"]`
- **Expected:** `["𐌰𐌹𐌽𐍃", "ains"]`
- **Why:** Gothic *ains* "one" (< PGmc \*ainaz; Ringe 2006 §3.2; Wright 1910 §24) has the genuine falling diphthong /ai/. The monophthongal value /ɛː/ that ⟨ai⟩ carries elsewhere is restricted to the "broken" position **before /h/, /ƕ/, /r/** — not the environment here (⟨ai⟩ before /n/). /ɛːns/ wrongly applies the broken-vowel reading. The file itself proves diphthongs are kept as diphthongs: `got` *augō* (`eye.js` L519) is `ɑuɣoː` with ⟨au⟩ → /ɑu/, so /ɛːns/ is both phonologically wrong and internally inconsistent with the ⟨au⟩ treatment.

---

### 2. `got` — hello — same Gothic ⟨ai⟩-diphthong error in *hails*
- **File:** `words/hello.js` line 510
- **Current:** `["𐌷𐌰𐌹𐌻𐍃", "hɛːls"]`
- **Expected:** `["𐌷𐌰𐌹𐌻𐍃", "hails"]`
- **Why:** *hails* "hale, whole" (the greeting; < PGmc \*hailaz, cf. ON *heill*) has ⟨ai⟩ **before /l/** — again the diphthong /ai/, not broken /ɛː/ (Wright 1910 §24; Ringe 2006). The decisive cross-language evidence is in the very same row: the Old Norse cognate `non` *heill* (`hello.js` L509) is correctly transcribed `hɛilː` *with* its diphthong, so the Gothic sibling losing its diphthong to /ɛː/ is both a sourced error and an internal inconsistency.

---

### 3. `got` — mother — third Gothic ⟨ai⟩ error: *aiþei* broken to /ɛː/ before /þ/
- **File:** `words/mother.js` line 525
- **Current:** `["𐌰𐌹𐌸𐌴𐌹", "ɛːθiː"]`
- **Expected:** `["𐌰𐌹𐌸𐌴𐌹", "aiθiː"]`
- **Why:** Gothic *aiþei* "mother" has ⟨ai⟩ **before /þ/**, which is *not* one of the three breaking consonants (/h ƕ r/); the vowel is therefore the inherited diphthong /ai/, not broken /ɛː/ (Wright 1910 §24, §95; Ringe 2006 §3.2). This is the same mis-application of the broken reading as #1 and #2, in a third file — and the final ⟨ei⟩ is rightly kept as the long monophthong /iː/, so the entry already knows the digraph values; only the ⟨ai⟩ needs the diphthong. The three together (`ains`, `hails`, `aiþei`) show the ⟨ai⟩→/ɛː/ default was applied without checking the following consonant.

---

### 4. `ang` — eye — Old English long diphthong ⟨ēa⟩ flattened to monophthong /eː/
- **File:** `words/eye.js` line 516
- **Current:** `["ēage", "eːɑɣe"]`
- **Expected:** `["ēage", "æːɑɣe"]`
- **Why:** OE *ēage* "eye" has the long diphthong ⟨ēa⟩ = /æːɑ/ (Wright & Wright 1925 §50, §132; the first element is the long low-front /æː/, the second the back glide /ɑ/). Rendering ⟨ēa⟩ as /eː/ erases the low-front first element entirely and turns a diphthong into a mid monophthong. The same file keeps Old Norse *auga* (`eye.js` L518) as `ɑuɣɑ` with its diphthong intact, so the OE flattening is the outlier, not a transcription policy.

---

### 5. `ang` — tree — Old English ⟨ēo⟩ length placed on the wrong diphthong element
- **File:** `words/tree.js` line 516
- **Current:** `["trēow", "treoːw"]`
- **Expected:** `["trēow", "treːow"]`
- **Why:** OE *trēow* "tree" carries the long diphthong ⟨ēo⟩ = /eːo/ — the length sits on the **first** (mid-front) element (Wright & Wright 1925 §50, §134). The current `treoːw` puts the length mark on the **second** element (/eoː/), which both mistranscribes the quantity and contradicts the surface form's own macron over the first vowel (⟨ē⟩ow). Moving the length to /eː/ aligns IPA with spelling.

---

### 6. `ang` — heart — orthography re-entered as IPA; short diphthong ⟨eo⟩ and stress unmarked
- **File:** `words/heart.js` line 516
- **Current:** `["heorte", "heorte"]`
- **Expected:** `["heorte", "ˈheorte"]`
- **Why:** The IPA field is byte-identical to the spelling — it encodes nothing the orthography does not. OE *heorte* "heart" has the short diphthong ⟨eo⟩ = /eo/ and root-initial stress (Wright & Wright 1925 §50). At minimum the citation form should mark stress (`ˈheorte`); ideally it should make explicit that ⟨eo⟩ is the diphthong /eo/. As written this is the "orthography pasted into the IPA slot" defect this audit targets, and it is the only `ang` cell in the dataset whose two fields are identical.

---

### 7. `cu` — heart — Old Church Slavonic jers given the *post-fall* (palatalization-only) reading
- **File:** `words/heart.js` line 520
- **Current:** `["срьдьце", "srʲdʲtse"]`
- **Expected:** vocalized front jers, e.g. `["срьдьце", "sɪrɪdɪtse"]`
- **Why:** In canonical OCS the jers were still pronounced as reduced vowels — front ь ≈ [ɪ], back ъ ≈ [ɤ] (Lunt 2001 §2.2, §2.4). The current `srʲdʲtse` treats every ь as mere palatalization with **no vowel** — the *late East-Slavic, post-fall-of-the-jers* pronunciation, anachronistic for the `cu` (OCS / liturgical) layer per `LANG_CODES.md`. The dataset already vocalizes **back** jers elsewhere (`добръ`→`dobrɤ`, `домъ`→`domɤ`, `котъка`→`kotɤkɑ`), so leaving the front jers unvocalized is also internally inconsistent.

---

### 8. `cu` — dog — front jer dropped while the back jer in the same word is vocalized
- **File:** `words/dog.js` line 520
- **Current:** `["пьсъ", "pʲsɤ"]`
- **Expected:** `["пьсъ", "pɪsɤ"]`
- **Why:** *пьсъ* /pĭsŭ/ "dog" has a front jer ь and a back jer ъ. The current transcription vocalizes the **back** jer (ъ → /ɤ/) but reduces the **front** jer to bare palatalization (ь → /ʲ/), so the two reduced vowels of one four-letter word are treated by two different principles. In canonical OCS both are syllabic reduced vowels (Lunt 2001 §2.4): /pɪsɤ/. The same back-vocalized/front-dropped split recurs in `sun` (`слъньце`→`slɤnʲtse`, L526) and `love` (`любъвь`→`lʲubɤvʲ`, L527), confirming it is a systematic policy gap, not a one-off.

---

### 9. `cu` — father — front jer vocalized in one position but not the other, *within the same word*
- **File:** `words/father.js` line 520
- **Current:** `["отьць", "otʲɪtsʲ"]`
- **Expected:** `["отьць", "otɪtsɪ"]`
- **Why:** *отьць* /otĭtsĭ/ "father" has two identical front jers, yet `otʲɪtsʲ` vocalizes the **first** ь (→ /ɪ/) but reduces the **second** ь to bare palatalization /ʲ/ — two contradictory treatments of the same letter in one word. Per Lunt (2001 §2.4) both should surface as the reduced front vowel [ɪ]: /otɪtsɪ/. This is the clinching evidence that the OCS front-jer transcriptions follow no single rule; harmonizing on the *vocalized* reading (which this very cell already uses for the first jer) is the OCS-correct fix and reconciles #7–#8.

---

### 10. `sa` / `sa_edu` — heart — Sanskrit vocalic ṛ written as a consonant+vowel sequence /ɾɨ/, not the syllabic rhotic
- **File:** `words/heart.js` lines 84–85 (with `vsa` L1037 as the comparison)
- **Current:** L84 `sa_edu: ["हृदयम्", "hɾɨdajam"]`, L85 `sa: ["हृदयम्", "hɾɨdajam"]`
- **Expected:** `["हृदयम्", "hr̩dajam"]` (syllabic ṛ), matching the project's own `vsa`
- **Why:** The vowel sign ृ / ऋ is the **vocalic ṛ**, a single syllabic rhotic [r̩], not the two-segment sequence consonant /ɾ/ + vowel /ɨ/ (Whitney 1889 §24; Macdonell 1910 §22). The decisive evidence is internal: the Vedic-Sanskrit cell for the identical word, `vsa: ["हृदयम्", "hr̩dajam"]` (`heart.js` L1037), correctly writes the syllabic /r̩/. So `sa` and `sa_edu` are the outliers; they should adopt the same /r̩/.

---

### 11. `sa` / `sa_edu` — tree — the same vocalic-ṛ mis-transcription recurs (/ɾɨ/ for /r̩/)
- **File:** `words/tree.js` lines 84–85 (with `vsa` L1037 as the comparison)
- **Current:** L84 `sa_edu: ["वृक्षः", "vɾɨkʂaɦ"]`, L85 `sa: ["वृक्षः", "vɾɨkʂaɦ"]`
- **Expected:** `["वृक्षः", "vr̩kʂaɦ"]`, matching `vsa`
- **Why:** *vṛkṣaḥ* "tree" again has vocalic ृ, which `sa`/`sa_edu` render as the consonant+vowel /ɾɨ/ while the sibling `vsa: ["वृक्षः", "vr̩kʂaɦ"]` (`tree.js` L1037) correctly uses syllabic /r̩/ (Whitney 1889 §24). Two independent ृ-bearing words (#10 heart, #11 tree) showing the identical `sa`/`sa_edu` ↔ `vsa` split confirms this is a systematic transcription choice in the `sa`/`sa_edu` cells, not a typo — and the project already has the correct convention on hand in `vsa`.

---

### 12. `sa_edu` vs `sa` — water — the same palatal ज transcribed /dʒ/ in one Sanskrit variant, /dʑ/ in the other
- **File:** `words/water.js` lines 84–85
- **Current:** L84 `sa_edu: ["जलम्", "dʒalam"]`, L85 `sa: ["जलम्", "dʑalam"]`
- **Expected:** `sa_edu: ["जलम्", "dʑalam"]` (match `sa`)
- **Why:** ⟨ज⟩ is one phoneme — the voiced palatal stop (Whitney 1889 §40) — and these are the *same Sanskrit word in the same Devanāgarī* under two registers, so they must not assign it two IPA values. `sa` uses the alveolo-palatal /dʑ/; `sa_edu` uses the postalveolar /dʒ/. The alveolo-palatal series is the one the dataset uses for the *voiceless* counterpart च = /tɕ/ (`moon.js` L84 `sa_edu: ["चन्द्रः", "tɕandɾaɦ"]`), so within `sa_edu` itself the voiceless palatal is /tɕ/ but the voiced palatal is /dʒ/ — a single homorganic stop series split across two articulators. Harmonizing `sa_edu`'s ⟨ज⟩ onto /dʑ/ fixes both the cross-register and the intra-register inconsistency.

---

### 13. `sa_edu` vs `sa` — cat — the /dʒ/↔/dʑ/ split for ज recurs in a second word
- **File:** `words/cat.js` lines 84–85
- **Current:** L84 `sa_edu: ["मार्जारः", "maːɾdʒaːɾaɦ"]`, L85 `sa: ["मार्जारः", "maːɾdʑaːɾaɦ"]`
- **Expected:** `sa_edu: ["मार्जारः", "maːɾdʑaːɾaɦ"]`
- **Why:** Identical surface ⟨मार्जारः⟩ in both registers, but ⟨ज⟩ is /dʒ/ in `sa_edu` and /dʑ/ in `sa`. This is the same systematic split as #12, now confirmed in every ज-bearing `sa`/`sa_edu` pair in the corpus (water, cat) — diagnostic of a copy-time divergence, not a deliberate register distinction. The third sibling `vsa: ["मार्जारः", "maːrdʑaːraɦ"]` (`cat.js` L1037) also uses /dʑ/, so /dʑ/ is the two-to-one majority and `sa_edu`'s /dʒ/ is the lone outlier.

---

### 14. `el_grc` — one — Ancient Greek *εἷς* shown with a genuine diphthong /ei̯/ instead of the spurious-diphthong long monophthong /eː/
- **File:** `words/one.js` line 517
- **Current:** `["εἷς", "hêi̯s"]`
- **Expected:** `["εἷς", "hêːs"]`
- **Why:** Attic *εἷς* "one" derives from \*sem-s → \*hens → *εἷς*; its ⟨ει⟩ is the **spurious diphthong** — a compensatorily-lengthened close /eː/ — **not** the genuine diphthong /ei̯/, which survives only where it reflects inherited \*ei (Sihler 1995 §201, §229.2 on Greek ⟨ει⟩ spurious vs genuine). Transcribing /hêi̯s/ with the glide treats a monophthong as a diphthong. The rough breathing /h/ and the circumflex are correct; only the vocalic value should be the long monophthong /eː/. Contrast `house.js` L518 `el_grc: ["οἶκος", "oîkos"]`, where ⟨οι⟩ *is* a genuine diphthong from \*woikos and is rightly kept — so the dataset does distinguish the two cases; εἷς is simply on the wrong side.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

I verified every "Current" value verbatim against the live data files and confirmed each cited cross-reference. All 14 findings are clear, well-sourced corrections (period-pronunciation errors and/or internal inconsistencies the dataset itself disproves). All applied.

1. **`got` one `words/one.js` L525** — `ɛːns` → `ains`. ⟨ai⟩ before /n/ is outside the breaking environment /h ƕ r/; inherited diphthong /ai/. Confirmed internally by `got` *augō* `ɑuɣoː` (eye L519) keeping ⟨au⟩. **(applied by orchestrator this round)**
2. **`got` hello `words/hello.js` L510** — `hɛːls` → `hails`. ⟨ai⟩ before /l/, not a breaking consonant. ON sibling `non heill` `hɛilː` (L509) keeps its diphthong. **(applied by orchestrator this round)**
3. **`got` mother `words/mother.js` L525** — `ɛːθiː` → `aiθiː`. ⟨ai⟩ before /þ/, not breaking; final ⟨ei⟩=/iː/ left intact. **(applied by orchestrator this round)**
4. **`ang` eye `words/eye.js` L516** — `eːɑɣe` → `æːɑɣe`. OE long diphthong ⟨ēa⟩ = /æːɑ/ (Wright & Wright 1925 §50). **(applied by orchestrator this round)**
5. **`ang` tree `words/tree.js` L516** — `treoːw` → `treːow`. OE ⟨ēo⟩ length on first element /eːo/, matching the macron in the surface ⟨trēow⟩. **(applied by orchestrator this round)**
6. **`ang` heart `words/heart.js` L516** — `heorte` → `ˈheorte`. IPA was byte-identical to spelling; minimal safe normalization is to mark root-initial stress. Orthography otherwise unchanged (⟨eo⟩ already maps to /eo/). **(applied by orchestrator this round)**
7. **`cu` heart `words/heart.js` L520** — `srʲdʲtse` → `sɪrɪdɪtse`. Canonical OCS front jers ь = reduced [ɪ] (Lunt 2001 §2.4), not bare palatalization; dataset already vocalizes back jers (`kotɤkɑ`, `jedinɤ`). **(applied by orchestrator this round)**
8. **`cu` dog `words/dog.js` L520** — `pʲsɤ` → `pɪsɤ`. Front jer ь → /ɪ/; back jer ъ → /ɤ/ already present, so harmonizing both as syllabic. **(applied by orchestrator this round)**
9. **`cu` father `words/father.js` L520** — `otʲɪtsʲ` → `otɪtsɪ`. Two identical ь treated inconsistently (first vocalized, second not); harmonize on the vocalized [ɪ] the cell already uses. **(applied by orchestrator this round)**
10. **`sa`/`sa_edu` heart `words/heart.js` L84–85** — `hɾɨdajam` → `hr̩dajam` (both). Vocalic ṛ is syllabic /r̩/, matching the project's own `vsa` `hr̩dajam` (L1037). **(applied by orchestrator this round)**
11. **`sa`/`sa_edu` tree `words/tree.js` L84–85** — `vɾɨkʂaɦ` → `vr̩kʂaɦ` (both). Same vocalic-ṛ fix; `vsa` `vr̩kʂaɦ` (L1037) is the in-corpus model. **(applied by orchestrator this round)**
12. **`sa_edu` water `words/water.js` L84** — `dʒalam` → `dʑalam`. ⟨ज⟩ = single alveolo-palatal /dʑ/; matches `sa` (L85) and the dataset's voiceless counterpart च=/tɕ/ (`moon` sa_edu `tɕandɾaɦ`). `sa` left unchanged. **(applied by orchestrator this round)**
13. **`sa_edu` cat `words/cat.js` L84** — `maːɾdʒaːɾaɦ` → `maːɾdʑaːɾaɦ`. Same ज=/dʑ/ harmonization; `sa` (L85) and `vsa` (L1037) both already /dʑ/. **(applied by orchestrator this round)**
14. **`el_grc` one `words/one.js` L517** — `hêi̯s` → `hêːs`. Attic *εἷς* ⟨ει⟩ is the spurious (compensatorily-lengthened) diphthong = long monophthong /eː/, not genuine /ei̯/ (Sihler 1995 §201, §229.2). Breathing + circumflex retained. Genuine diphthongs elsewhere (e.g. `house` el_grc `oîkos`) correctly kept. **(applied by orchestrator this round)**

No items held or rejected; all 14 are unambiguous corrections backed by both cited grammars and the dataset's own contradicting cells.

---

## Reviewer round-2 response (再評価 round-2)

I re-`eval`/grepped every cited cell in the live data files. All 14 round-1 fixes are present and correct verbatim:

- **#1 `got` one** `words/one.js` L523 = `["𐌰𐌹𐌽𐍃", "ains"]` — ✓ accept. ⟨ai⟩/n outside breaking env; matches `got augō` `ɑuɣoː`.
- **#2 `got` hello** `words/hello.js` L510 = `["𐌷𐌰𐌹𐌻𐍃", "hails"]`; ON `non heill` L509 `hɛilː` intact — ✓ accept.
- **#3 `got` mother** `words/mother.js` L523 = `["𐌰𐌹𐌸𐌴𐌹", "aiθiː"]`; final ⟨ei⟩=/iː/ kept — ✓ accept.
- **#4 `ang` eye** `words/eye.js` L514 = `["ēage", "æːɑɣe"]`; `non auga` L516 `ɑuɣɑ` intact — ✓ accept.
- **#5 `ang` tree** `words/tree.js` L514 = `["trēow", "treːow"]`; length on first element, matches macron — ✓ accept.
- **#6 `ang` heart** `words/heart.js` L514 = `["heorte", "ˈheorte"]`; IPA no longer byte-identical to spelling — ✓ accept (minimal stress-marking normalization).
- **#7 `cu` heart** `words/heart.js` L518 = `["срьдьце", "sɪrɪdɪtse"]` — ✓ accept; both front jers vocalized [ɪ] (Lunt 2001 §2.4).
- **#8 `cu` dog** `words/dog.js` L518 = `["пьсъ", "pɪsɤ"]` — ✓ accept; front ь→ɪ, back ъ→ɤ harmonized.
- **#9 `cu` father** `words/father.js` L518 = `["отьць", "otɪtsɪ"]` — ✓ accept; both ь now [ɪ].
- **#10 `sa`/`sa_edu` heart** `words/heart.js` L84/L85 = `hr̩dajam` (both), matches `vsa` L1035 — ✓ accept.
- **#11 `sa`/`sa_edu` tree** `words/tree.js` L84/L85 = `vr̩kʂaɦ` (both), matches `vsa` L1035 — ✓ accept.
- **#12 `sa_edu` water** `words/water.js` L84 = `dʑalam`, matches `sa` L85 — ✓ accept.
- **#13 `sa_edu` cat** `words/cat.js` L84 = `maːɾdʑaːɾaɦ`, matches `sa` L85 and `vsa` L1035 `maːrdʑaːraɦ` — ✓ accept.
- **#14 `el_grc` one** `words/one.js` L515 = `["εἷς", "hêːs"]`; spurious-diphthong long monophthong; genuine-diphthong `house el_grc oîkos` untouched — ✓ accept.

### New issues (round-2) — the OCS front-jer fixes left two named instances behind

Issue #8 of round-1 explicitly identified the unvocalized-front-jer defect as "a systematic policy gap, not a one-off" and named **`sun` (`слъньце`→`slɤnʲtse`)** and **`love` (`любъвь`→`lʲubɤvʲ`)** as further instances. The orchestrator fixed only the three filed cells (heart/dog/father); these two named cells were left in the *old* unvocalized state and are now internally inconsistent with the corrected cells. Verified live:

- **NEW-1. `cu` sun — front jer ь before ц left unvocalized** — `words/sun.js` L524 `cu: ["слъньце", "slɤnʲtse"]`. The back jer ъ is vocalized (→ /ɤ/) but the front jer ь before ц is reduced to bare palatalization `nʲ`. To match the now-fixed `heart`/`dog`/`father`, the front jer should surface as [ɪ]: expected `slɤnɪtse`. (Lunt 2001 §2.4; same principle as accepted #7–#9.)
- **NEW-2. `cu` love — word-final front jer ь left unvocalized** — `words/love.js` L525 `cu: ["любъвь", "lʲubɤvʲ"]`. The back jer ъ is vocalized (→ /ɤ/) but the word-final front jer ь is bare `ʲ`; cf. the accepted `father` cell where word-final ь is `ɪ` (`otɪtsɪ`). Expected `lʲubɤvɪ` (the initial `lʲ` before ю is legitimate palatalization from the front vowel and should stay). Per Lunt 2001 §2.4.

These are not new demands for external data — they are the *same* sourced fix already accepted for #7–#9, applied to the two cells the original reviewer pre-identified. They are concretely actionable.

### Scorecard
- Round-1 items accepted (✓): 14 / 14, all verified in live data.
- New actionable issues (round-2): 2 (`cu sun`, `cu love` — front-jer vocalization, completing the systematic OCS fix).
- Partial / rejected: 0.

**File status: OPEN** — Dev team must vocalize the remaining front jers per round-1 issue #8: `words/sun.js` `slɤnʲtse`→`slɤnɪtse`, and `words/love.js` `lʲubɤvʲ`→`lʲubɤvɪ`.
