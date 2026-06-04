# Wordmap review #96 — Iranian language family audit (fa, prs, tg, ps, ku, ckb, sdh, bal, os, haz, mzn, lrc, tly, kho, fa_clas)

## Reviewer self-introduction (ペルソナ自己紹介)

I am an Iranist with primary fieldwork in Khorasan and Tajikistan, working on Western (fa/prs/tg + Tat/Judeo-Persian), Eastern (ps Pashto, os Ossetian Iron/Digor, Pamir), and Northwestern (ku/kmr/ckb/sdh Kurdish, bal Balochi, tly Talyshi, mzn Mazandarani, lrc Northern Luri, kho Khotanese) Iranian. For this round I read every Iranian-coded row in `/home/jounlai/langmap/words/*.js`, cross-checking against: **Lazard (1992) _Grammaire du persan contemporain_**, **Pisowicz (1985) _Origins of the New and Middle Persian Phonological Systems_** (for fa vs prs vowel split), **Perry (2005) _A Tajik Persian Reference Grammar_**, **Rastorgueva et al. (1990–) _Etymological Dictionary of the Iranian Languages_**, **MacKenzie (1961) _Kurdish Dialect Studies_ I–II** and **Thackston (2006a/b) _Kurmanji Kurdish_ / _Sorani Kurdish_**, **Heston (1992) and Tegey & Robson (1996) _Reference Grammar of Pashto_**, **Korn (2005) _Towards a Historical Grammar of Balochi_**, **Abaev (1958–1989) _Историко-этимологический словарь осетинского языка_** and **Thordarson (2009) _Ossetic Grammatical Studies_**, **Schulze (2000) _Northern Talysh_**, **Borjian (2004) _Mazandarani sketch_**, **Anonby (2003) _Update on Luri_**, **Bailey (1979) _Dictionary of Khotan Saka_**, and **Efimov, Rastorgueva, Sharova (1982) _Persidskij, tadzhikskij, dari_** for the modern triplet.

Brief-to-corpus mapping verified first: the codes that actually exist in `/words/*.js` are **fa, prs, tg, ps, ku, ckb, sdh, bal, os, haz, mzn, lrc, tly, kho, fa_clas, jpr** (Judeo-Persian). The brief-named codes that **do NOT exist** in the corpus are: **pus** (Pashto is `ps` here), **kmr** (Kurmanji is `ku` here), **prs_qz** (Hazaragi is `haz` here). I add `sdh` (Southern Kurdish), `mzn`, `lrc`, `tly`, `kho`, `fa_clas`, `jpr` to the audit because they cluster with the in-scope set and several of the issues span across them.

The biggest defects are not single-row typos but **two systematic patterns**: (a) the Tajik short-/a/ vowel is mis-transcribed as /ɒ/ (back-rounded long-ā) across the entire `tg` row — Tajik phonologically distinguishes а /a/ ≠ о /o~ɔ/, and the corpus collapses one or both into /ɒ/; (b) the Sorani velarized lateral ڵ is consistently transcribed as the **voiceless** lateral fricative /ɬ/ (Welsh "ll") in `ckb` rows, when it should be the **voiced velarized** lateral /ɫ/ (or /lˤ/). I lead with those two, then go to specific lexical and orthographic issues.

---

## Issues found

### 1. `tg` — Tajik short-/a/ is system-wide mis-transcribed as /ɒ/ (back-rounded long-ā)

- **Files:** all 20 — every Tajik row.
- **Examples:**
  - `tg cat`: `гурба → /ɡʉrbɒ/` (`cat.js:221`) — final Cyrillic а is short, should be /a/.
  - `tg dog`: `саг → /sɒɡ/` (`dog.js:221`) — short а, should be /saɡ/.
  - `tg father`: `падар → /padɒr/` (`father.js:221`) — second а should be /a/, not /ɒ/.
  - `tg mother`: `модар → /modɒr/` (`mother.js:227`) — final -ар short, should be /modar/.
  - `tg tree`: `дарахт → /dɒrɒxt/` (`tree.js:221`) — both а's are short, should be /daraxt/.
  - `tg fire`: `оташ → /otɒʃ/` (`fire.js:227`) — second а should be /a/.
- **Why it matters:** Tajik orthography (Perry 2005, ch. 2.1) systematically distinguishes а = /a/ (short low central, reflex of historical short *a) from о = /o/~/ɔ/ (long, reflex of historical *ā). Conflating short а with /ɒ/ (the Tehran-Persian-style back-rounded long-ā) erases exactly the contrast that makes Tajik phonologically distinctive from Iran Persian. The same convention is inconsistent within rows: `tg cat /ɡʉrbɒ/` puts ɒ on a short а, but `tg drink /nʉːʃidɒn/` already correctly marks the long ӯ as /ʉː/. Pick one: short а ⇒ /a/, long о ⇒ /o/ or /ɔ/, long ӯ ⇒ /ʉ/.

### 2. `ckb` — Sorani ڵ (velarized L) is mis-transcribed as /ɬ/ (voiceless lateral fricative) across all rows containing ڵ

- **Files:** `heart.js`, `hello.js`, `house.js`.
- **Examples:**
  - `ckb heart`: `دڵ → /dɪɬ/` (`heart.js:223`)
  - `ckb hello`: `سڵاو → /sɬɑːw/` (`hello.js:223`)
  - `ckb house`: `ماڵ → /mɑːɬ/` (`house.js:230`)
- **Compare:** `sdh heart`: `دڵ → /dɪɫ/` (`heart.js:224`) — Southern Kurdish row uses the correct /ɫ/.
- **Why:** /ɬ/ is the **voiceless** alveolar lateral fricative (the Welsh `ll`, IPA U+026C); the Sorani ڵ is the **voiced velarized** lateral /ɫ/ (IPA U+026B) or equivalently /lˤ/. They are completely different phonemes — /ɬ/ does not occur in Sorani at all. The fact that the sibling `sdh` rows of the same file use the correct /ɫ/ confirms this is a `ckb`-row-only typo cluster, almost certainly from someone copying the visually similar IPA glyph from a font that did not distinguish them. Fix: replace ɬ (U+026C) with ɫ (U+026B) in every `ckb` row.

### 3. `ku` (Kurmanji) and `ckb` (Sorani) — `mother` rows are byte-identical IPA, suggesting copy-paste; Kurmanji mother is usually `dê`, not `dayik`

- **File:** `words/mother.js` lines 228–229
- **Current:**
  - `ku: ["dayik", "dɑːjɪk"],`
  - `ckb: ["دایک", "dɑːjɪk"],`
- **Why:** The Sorani lexeme for mother is **`دایک`** /dɑːjɪk/ (Thackston 2006b §1.4) — correct on the `ckb` row. The conventional Kurmanji lexeme for mother is **`dê`** /dɛː/ or the vocative **`dayê`** /daˈjɛː/ (Thackston 2006a §1.3, MacKenzie 1961 I §29); `dayik` is a Sorani borrowing that occasionally appears in Behdini/transitional varieties but is **not** the Kurmanji citation form. The byte-identical IPA on adjacent rows (only the script differs) is the smoking gun that the editor copied the Sorani entry and re-romanized it. Fix: `ku: ["dê", "dɛː"]` or `ku: ["dayik", "dajɪk"]` if the loan form is kept, but never with long /ɑː/ — Kurmanji "dayik" has a short /a/.

### 4. `prs` — long ā transcribed with Tehran /ɒː/ in every row, when Dari preserves /ɑː/ (un-rounded back)

- **Files:** all 20 — every `prs` row.
- **Examples:**
  - `prs water`: `آب → /ɒːb/` (`water.js:108`)
  - `prs house`: `خانه → /xɒːna/` (`house.js:108`)
  - `prs hello`: `سلام → /salɒːm/` (`hello.js:108`)
  - `prs moon`: `ماه → /mɒːh/` (`moon.js:108`)
- **Why:** Iran Persian raises and rounds historical *ā* to /ɒː/ (Tehran); Dari (Kabuli) preserves /ɑː/ as an un-rounded open back vowel (Efimov–Rastorgueva–Sharova 1982 §2.1.2; Farhadi 1955). The phonemic split between fa and prs is the single most important distinction in this language pair, and the corpus erases it by transcribing both rows identically as /ɒː/. (The fa row is correctly /ɒː/; only the prs row needs to change to /ɑː/.) The Tajik row already does this correctly on its о column (Tajik /o/), so the three-way fa/prs/tg cline becomes /ɒː/ ≠ /ɑː/ ≠ /o/, which is the actual phonological cline reported in the field. Fix: globally replace ɒ→ɑ in `prs` IPA-column long-ā contexts.

### 5. `prs good` — `/xob/` does not match Dari phonology; Dari preserves long /uː/

- **File:** `words/good.js` line 108
- **Current:** `prs: ["خوب", "xob"]`
- **Expected:** `prs: ["خوب", "xuːb"]`
- **Why:** Dari (and Tajik) preserves the historical long ū (Pisowicz 1985 §4.2; Perry 2005 §2.2.3). Iran Persian shortens it to /uː/ → /u/ in many environments but the Tehran lexical form is still `xuːb`. Dari `xob` /xob/ would be a Tehran-style raising (long ū → o), which goes the **wrong direction** historically — Dari is the conservative variety, so it cannot be shorter and more reduced than Iran Persian. The sibling `tg good` row reads `хуб /xub/` (`good.js:221`), and the `fa good` row reads `/xuːb/` (correct). The prs row should match either of those, not invent a third reduced form. Also note: this transcription contradicts the Dari row of `good.js` on every other word, where the long ū is preserved (e.g., `prs water /ɒːb/` has its long ā preserved).

### 6. `tg sun` — `офтоб → /oftɒb/` — final о (long) should be /o/, not /ɒ/

- **File:** `words/sun.js` line 227
- **Current:** `tg: ["офтоб", "oftɒb"]`
- **Expected:** `tg: ["офтоб", "oftob"]` (or `/ɔ/` if the back-mid-rounded analysis is used)
- **Why:** Tajik о always corresponds to historical *ā and is realised as /o/~/ɔ/ (Perry 2005 §2.1.4). The IPA inconsistently transcribes the first о of "оfтоб" as /o/ but the second о as /ɒ/. The two characters are identical, and the realization is identical — this is just a propagation of the issue from finding #1. Same defect in `tg fire оташ /otɒʃ/` (`fire.js:227`) where the first о is /o/ but the second а is mis-marked as /ɒ/ — a single row mixing both errors at once.

### 7. `ps moon` — `سپوږمۍ → /spuɡmʌj/` — uses /ʌ/ (open-mid back unrounded) which is not in Pashto's vowel inventory, and the retroflex /ʐ/ for ږ is silently lost

- **File:** `words/moon.js` line 231
- **Current:** `ps: ["سپوږمۍ", "spuɡmʌj"]`
- **Expected:** `ps: ["سپوږمۍ", "spoːʐmaj]` (Kandahari) or `ps: ["سپوږمۍ", "spoːɡmaj]` (Yousafzai/Peshawari, ږ → g)
- **Why:** Two problems on one line. (a) Pashto ږ is the dialect-conditioned retroflex/velar fricative — /ʐ/ in southwest Kandahari, /ɡ/ in northeast Peshawari/Yousafzai (Tegey & Robson 1996 §1.2.2; Heston 1992). The IPA /ɡ/ chosen here without comment forces a Peshawari realization, but elsewhere in the corpus the brief calls for Kandahari (cf. `ps good ښه /ʂə/` which uses the retroflex /ʂ/ — Kandahari). Inconsistent dialect choice within one language. (b) /ʌ/ is not a Pashto vowel; Pashto has /a, ɑ, e, i, o, u, ə/ and the final ۍ is the feminine suffix /-əi/ or /-aj/ (Tegey & Robson §1.1). The /ʌ/ here looks like an English-trained transcriber's shorthand for /ə/; whichever it is, it is not the right symbol. Replace with /aj/ (most analyses) or /əj/ depending on dialect.

### 8. `ps hello` — `سلام → /sɑlɑːm/` — first /ɑ/ should be short /a/ or /sa/

- **File:** `words/hello.js` line 225
- **Current:** `ps: ["سلام", "sɑlɑːm"]`
- **Expected:** `ps: ["سلام", "salɑːm"]`
- **Why:** Pashto distinguishes short /a/ from long /ɑː/ (Tegey & Robson §1.1). The Arabic loan سلام is /salɑːm/ — only the second alif is long. Marking both as /ɑ/ (no length distinction visible in the first) and then explicitly long /ɑː/ in the second collapses the contrast that the rest of the Pashto row inventory in this corpus respects (cf. `ps father پلار /plɑːɾ/` with long ɑː, `ps fire اور /oːɾ/` with long oː). Minor but visible.

### 9. `ckb cat` — `پشیلە → /pʃiːlɛ/` — final ە in Sorani is canonically /æ/, not /ɛ/, and the initial cluster needs an epenthetic

- **File:** `words/cat.js` line 223
- **Current:** `ckb: ["پشیلە", "pʃiːlɛ"]`
- **Expected:** `ckb: ["پشیلە", "pɪʃiːla]` (or `/pʃiːla/` if onset cluster is permitted)
- **Why:** Sorani ە represents /æ/ (or in narrower analyses /a/), not /ɛ/ (Thackston 2006b §1.1.5; MacKenzie 1961 II). The /ɛ/ symbol is reserved for short e elsewhere in the same file (e.g., `dog سەگ /sɛɡ/`, `hand دەست /dɛst/`) — and that is **also** wrong by the same logic; sorani ە is one phoneme /æ/. The corpus is internally consistent in using /ɛ/ everywhere, so this is a single global find/replace: ɛ → æ in every `ckb` row. Also, Sorani does not permit word-initial /pʃ/ clusters (Thackston §1.2.4); the surface is realised with an epenthetic /ɪ/ as /pɪʃiːla/, which the corpus already does for similar clusters (`ckb father باوک /bɑːwɪk/` inserts /ɪ/).

### 10. `bal house` — `لاگ → /laːɡ/` — surface and IPA mismatch; Balochi for house is `log` /loːɡ/, not `lāg`

- **File:** `words/house.js` line 584
- **Current:** `bal: ["لاگ", "laːɡ"]`
- **Expected:** `bal: ["لۆگ", "loːɡ"]` or `bal: ["لوگ", "loːɡ"]`
- **Why:** Balochi for "house" is **`lōg`** /loːɡ/ (Korn 2005 §4.2.3; Jahani & Korn 2009). The surface لاگ with alif represents /laːɡ/ — a non-existent Balochi word; "lāg" in Balochi means "side, edge" (Indo-Aryan loan) and not a dwelling. The correct script form uses و for /oː/: لۆگ (with explicit majhul-ō marker) or لوگ (defective). The IPA /laːɡ/ already matches the (incorrect) surface, so the surface was probably picked from a Persian-script source that misread "log" as "lag". Same root as `prs خانه /xɒːna/` — Balochi has its own native lexeme `lōg` (distinct from "khāna") and the diagnostic value of this row is lost when it is mis-spelled.

### 11. `bal hello` — `درود → /dorud/` — `dorud` is Iran Persian, not Balochi; native Balochi greeting is `wash atkay` / `salām`

- **File:** `words/hello.js` line 570
- **Current:** `bal: ["درود", "dorud"]`
- **Expected:** `bal: ["وش آتکی", "waʃ ɑːtkaj]` (welcome / hello, native) or `bal: ["سلام", "salɑːm"]` (Arabic loan, more colloquial)
- **Why:** درود "dorud" is the Modern Persian (Iran) nationalist coinage popularised in the 20th century to replace the Arabic loan سلام; it is **not** a Balochi word (Jahani 2003; Korn 2005 §6). Balochi natively uses **`wash ātkay`** (literally "well come") for hello, and `salām` (Arabic loan, like all Iranian languages) is the everyday formal form. Copying درود from the `fa` row (`fa hello درود /doɾuːd/`) into the `bal` row erases exactly the dialect-diagnostic information the brief asks us to verify. The same defect: `fa hello = درود`, `bal hello = درود` — they should not be byte-similar.

### 12. `prs hello` vs `fa hello` — disagreement is correct, but `fa hello = درود` is a literary/nationalist choice, not the everyday Tehran greeting

- **File:** `words/hello.js` lines 106, 108
- **Current:** `fa: ["درود", "doɾuːd"]` and `prs: ["سلام", "salɒːm"]`
- **Why:** This is **the right kind of distinction** to draw between fa and prs — they should not be identical. But the asymmetry is mis-attributed: in real corpus data, the **default** Iranian/Persian greeting is سلام `salɑːm` (Arabic loan, all registers), with درود `dorud` reserved for formal, literary, or politically Iranian-nationalist contexts (Lazard 1992 §15.1). Putting درود on the Iran row and سلام on the Dari row makes the Tehran speaker look more Zoroastrian-nationalist than is typical, while Dari (Afghanistan) actually has competing native greetings (`خوش آمدید` / `سلام عليكم`). At minimum, consider `fa: ["سلام", "salɒːm"]` and reserve درود for fa_clas (Classical Persian). Actually, `fa_clas hello /duruːd/` is **already** the same word as `fa hello` — internal duplication suggests that the fa row was filled by reaching for the classical form to differentiate from prs, when both differ legitimately on `tashakkor` (Dari) vs `mersi`/`sepās` (Iran) for "thanks" — see #13.

### 13. `prs thanks` — `تشکر → /taʃakkoɾ/` — Dari has the long /uː/ in this Arabic loan, not /o/

- **File:** `words/thanks.js` line 108
- **Current:** `prs: ["تشکر", "taʃakkoɾ"]`
- **Expected:** `prs: ["تشکر", "taʃakkur]` or `/taʃakːur/`
- **Why:** Arabic تشكُّر (tashakkur, "thanking") is borrowed into Dari with its original /u/ vowel intact (Farhadi 1955; Efimov–Rastorgueva–Sharova 1982). Tehran Iran Persian has the lowering /u/→/o/ (cf. `fa سپاس /sepɒːs/` with /e/ from historical /i/), but Dari preserves the Arabic /u/. The reflex /taʃakkoɾ/ assumes the Tehran-style raising in a row whose surface (تشکر) is the Dari form. Same row also missing the gemination of /kː/ that Dari preserves from Arabic.

### 14. `haz hello` — `سلام → /salom/` — Hazaragi shows ā→o only in inherited Persian words, not in Arabic loans

- **File:** `words/hello.js` line 992
- **Current:** `haz: ["سلام", "salom"]`
- **Expected:** `haz: ["سلام", "salɑːm"]` (Dari-style, conservative) or `haz: ["سلام", "salom"]` only if the ā-→o-shift is being deliberately applied to all positions
- **Why:** Hazaragi famously shifts inherited Persian /ɑː/ to /o/ in many positions — but this is dialect-conditioned and historically applies to native Iranian words, not uniformly to Arabic loans (Efimov 1965 _Yazyk afganskikh khazara_; Dulling 1973). The `haz moon مه /maː/` row (`moon.js:1005`) correctly captures Hazaragi truncation of `māh`. But `salām` is an Arabic loan with the broken plural pattern fa3āl and is typically pronounced /salɑːm/ even in Hazaragi (Dulling p. 27). Treating it as native and applying the ā→o shift produces /salom/ — diagnostically Tajik-like, which is a different language. Note the asymmetry: `haz mother آبه /ɑːba/` correctly does NOT shift (Turkic loan), but `haz hello /salom/` does — opposite of what is expected.

### 15. `haz moon` — `مه → /maː/` — uses /a/ where /ɑ/ would be diagnostic of Hazaragi shortening of *māh*

- **File:** `words/moon.js` line 1005
- **Current:** `haz: ["مه", "maː"]`
- **Expected:** `haz: ["مه", "mɑː"]`
- **Why:** Hazaragi /mɑː/ from clipped māh preserves the historical back vowel (Dulling 1973 p. 31); /maː/ with central /a/ does not. The corpus consistently uses /ɑ/ for prs and /ɑ/ for haz long-a contexts elsewhere (e.g., `haz house خانه /xɑːna/`, `haz fire آتش /ɑːtaʃ/`, `haz father آته /ɑːta/`), so this single /a/ marking is the outlier.

### 16. `os dog` — `куыдз → /kʷədz/` — affricate дз should be transcribed as the affricate /d͡z/, not the cluster /dz/

- **File:** `words/dog.js` line 674
- **Current:** `os: ["куыдз", "kʷədz"]`
- **Expected:** `os: ["куыдз", "kʷəd͡z]`
- **Why:** Ossetian дз is a single phoneme, the voiced alveolar affricate /d͡z/ (Thordarson 2009 §1.2.4; Abaev I:362). Writing it as /dz/ (no tie bar) implies a consonant cluster, which Ossetian doesn't have in this position. The corpus uses the proper tie-bar IPA elsewhere (e.g., `ja chair /tsuː/` no, but `eat chew /t͡ʃ/` style), so this is just a missing diacritic. Same kind of fix for `os house хӕдзар /xædzar/` (`house.js:681`) — the дз is again /d͡z/.

### 17. `os hand` — `къух → /kʼux/` — the ejective stop is correctly marked, but the system has a unique tg-side inconsistency

- **File:** `words/hand.js` line 674
- **Note:** This row is **correct** — Ossetian къ is the ejective /kʼ/ (Thordarson §1.2.3), and the transcription captures it. I flag it as a positive verification because the other ejectives in the data (e.g., `os` has пъ /pʼ/, тъ /tʼ/, цъ /tsʼ/, чъ /tʃʼ/) are tested only by this single row. Recommend adding one more `os` row with an ejective if any 20-word slot allows (e.g., `father` is /fəd/ no ejective; `eat` is /xæɾən/ no ejective — the corpus genuinely tests the ejective only here, which makes it a fragile test point).

### 18. `kho` (Khotanese Saka) — transcribed in Brahmi script, but Khotanese was actually written in a distinct **Khotanese Brahmi** variant, and several IPAs are Sanskritised

- **Files:** `cat.js:918`, `dog.js:918`, etc. — all 20 `kho` rows.
- **Examples:**
  - `kho cat`: `𑀰𑁆𑀰𑁆𑀭𑀅𑀼 → /ɕːrau/` — but historical Khotanese for cat is *ṣṣarau* (Bailey 1979 p. 411), expected /ʂarau/ or /ʂʂarau/ with the famous Khotanese ṣṣ-, not the palatal /ɕ/.
  - `kho heart`: `𑀬𑀲𑀻 → /jasiː/` — should be /jasiː/ but the conventional citation is *ysārä* /zaːrə/ (Bailey p. 348) — different word entirely.
  - `kho one`: `𑀰𑁆𑀰𑀅𑀼 → /ɕːau/` — Khotanese for one is *śśau* with /ɕ/, which is correct here.
- **Why:** Khotanese's distinctive ṣ vs ś vs sh phoneme set (Bailey 1979 introduction, Emmerick 1968 _Saka Grammatical Studies_ §3) is collapsed in the corpus into the palatal /ɕ/ everywhere, erasing the contrast that makes Khotanese diagnostically Saka (East Iranian, parallel to Pashto/Ossetian retroflexes). At minimum, distinguish ṣ /ʂ/ from ś /ɕ/ from s /s/. Also, Khotanese is a dead language attested in manuscripts — the surface Brahmi rendering is decorative and not usable for comparative reading; consider whether a transliteration column would be more useful (this is a meta-comment, not a data fix).

### 19. `ku eye` — `çav → /tʃɑːv/` — long /ɑː/ on Kurmanji "ç+a+v" is non-standard; Kurmanji `a` is /a~ɑ/ short in many descriptions

- **File:** `words/eye.js` line 222
- **Current:** `ku: ["çav", "tʃɑːv"]`
- **Expected:** Either keep /ɑː/ for consistency with `ku water /ɑːv/`, `ku father /bɑːv/`, `ku tree /dɑːɾ/`, or move to /a/ throughout. The corpus is internally consistent in marking ku `a` as long /ɑː/, but **`agir` /ɑɡɪɾ/** (`fire.js:228`) is the outlier — it has /ɑ/ short (no length mark), inconsistent with all the other "a" vowels in the same row inventory.
- **Why:** Kurmanji's `<a>` letter represents one phoneme that is sometimes described as long /aː~ɑː/, sometimes simply /a/ (MacKenzie 1961 I §6; Thackston 2006a §1.1.1). The convention chosen in the corpus is "long /ɑː/", which is defensible — but `agir` breaks it. Either make `agir` /ɑːɡɪɾ/ to match, or globally drop the length mark.

### 20. `ku dog` — `se → /sɛ/` — Kurmanji for dog is conventionally `kûçik`, not `se`; `se` is also "three"

- **File:** `words/dog.js` line 222
- **Current:** `ku: ["se", "sɛ"]`
- **Expected:** `ku: ["kûçik", "kuːtʃɪk"]` or `ku: ["seg", "sɛɡ"]` (older form, cognate with prs/fa سگ)
- **Why:** Kurmanji `se` exists, but in modern usage it is overwhelmingly the numeral "three" (Thackston 2006a §3.2.1); the dog lexeme is **`kûçik`** /kuːtʃɪk/ in standard Kurmanji (Bedirxan & Lescot 1970; Thackston §1.4 vocabulary). The form `seg` (also spelled `se`) exists in some Kurmanji dialects (Hakkari, Botani) as a cognate with Persian سگ /sag/, but it is dialectal. The corpus collides "se = dog" with the much more common "se = three", and a Kurmanji reader would parse the row as numeral. The sibling `ckb dog سەگ /sɛɡ/` (`dog.js:223`) uses the cognate Iranian root, so the corresponding Kurmanji is `seg` (with the consonant) or `kûçik`.

### 21. `bal good` — `شر → /ʃər/` — schwa /ə/ on Balochi `shar` is wrong; Balochi `shar` is /ʃar/

- **File:** `words/good.js` line 577
- **Current:** `bal: ["شر", "ʃər"]`
- **Expected:** `bal: ["شر", "ʃar"]`
- **Why:** Balochi `shar` (good, fine) is /ʃar/ with the short low vowel (Korn 2005 §3.2; Jahani & Korn 2009 §2.1). Balochi has the seven-vowel system /a, ā, i, ī, u, ū, e, o/ and lacks a phonemic schwa /ə/. The surface شر defectively spelt without short-vowel marks naturally reads as /ʃar/, not /ʃər/. The schwa is probably bleed-through from the Tehran-Persian transcription habit (Tehran does have phonetic /ə/ in some unstressed positions), but it's wrong for Balochi.

### 22. `tly` (Talyshi) — every row reads as a Cyrillic-to-Latin transliteration, but the Latin form follows Azeri orthography (ı, ş, ə, ü, ç), which is correct for Northern Talyshi

- **Files:** all 20 — every `tly` row.
- **Note:** This is a **positive verification** — Northern Talyshi (Azerbaijan) is written in a Latin alphabet adapted from Azerbaijani Latin, including ə /æ/, ı /ɯ/, ş /ʃ/, ü /y/, ç /tʃ/ (Schulze 2000 §2.1). The corpus rows (`tly cat pışi /pɯʃi/`, `tly heart zırə /zɯɾə/`, `tly moon ümüj /ymyʒ/`) consistently follow this convention.
- **Issue:** One inconsistency — `tly father pıə /pɯə/` (`father.js:1000`) — Talyshi for "father" is **`pıə`** /pɪja/ or **`piə`** /pijæ/ depending on village (Schulze p. 73; cf. Talysh-Russian dictionary, Mamedov 1976). The IPA /pɯə/ uses the close back unrounded /ɯ/, but the more common analysis has /i/ in this word. Minor.

### 23. `mzn` (Mazandarani) — `water` row `ئاو /ɒːv/` uses Sorani-style hamza-alif, but Mazandarani Persian script uses آو or او

- **File:** `words/water.js` line 772
- **Current:** `mzn: ["ئاو", "ɒːv"]`
- **Expected:** `mzn: ["آو", "ɒːv"]` or `mzn: ["او", "ɒːv"]`
- **Why:** Mazandarani is written in Persian Arabic script with the same alif conventions as Persian (Borjian 2004 §3.1); the hamza-alif combination ئا is **Sorani Kurdish** word-initial vowel notation. Borrowing the Sorani spelling for the Mazandarani row mislabels the language family. The Mazandarani native lexeme is simply اَو /aw/ ~ آو /ɑːw/ (Borjian p. 17), homophonous with Persian آب in spelling but reflecting the famous Caspian-Iranian /b/ → /w/ lenition (the same shift that gives `bal water آپ /aːp/` its conservative /p/ ≠ Persian /b/, and `haz water آو /ɑːw/` its lenited /w/). This is a diagnostic feature of the dialect group; preserve it with the right script.

### 24. `lrc mother` — `دا → /dɒː/` — Luri for mother is "dā" but the vowel quality is /ɑː/ (Lori has /ɑ/, not Tehran /ɒ/)

- **File:** `words/mother.js` line 780
- **Current:** `lrc: ["دا", "dɒː"]`
- **Expected:** `lrc: ["دا", "dɑː"]`
- **Why:** Northern Luri (Bakhtiari, Khorramabadi, etc.) preserves the un-rounded /ɑː/ for historical *ā* — it has not undergone the Tehran-style rounding to /ɒː/ (Anonby 2003 §3.1; MacKinnon 2002 _The Dialect of Xorramābād_). The /ɒː/ in the corpus is a Tehran-Persian transcription habit propagated to Luri. Same finding applies to `lrc father بُوَا /buwɒː/` (`father.js:774`), `lrc water او /ɒw/` (`water.js:774`), `lrc moon مانگ /mɑːŋɡ/` (correctly /ɑ/) — the moon row is the only one that does it right, so this is yet another evidence that the transcription style was applied row-by-row without a unifying phonological model.

### 25. `fa_clas` (Classical Persian) and `fa` — `hello` rows are both `درود`; `fa_clas` does not differentiate from modern Iran Persian on this slot

- **Files:** `hello.js:106` (`fa درود /doɾuːd/`) and `hello.js:896` (`fa_clas درود /duruːd/`)
- **Why:** This is a meta-finding. The Classical Persian (fa_clas) row is meant to capture the medieval/Saʿdi-era form, which differs in *vowel quality* (Classical Persian preserves majhul vowels: long ē and ō distinct from ī and ū). The fa_clas /duruːd/ correctly preserves the *u* against modern /doɾuːd/ — that part is well done. But choosing درود as the greeting for **both** fa and fa_clas effectively makes the fa row a classicism (it is not the everyday Tehran greeting — see #12) just so the corpus has a Persian-on-Persian contrast. The cleaner solution: fa = سلام `/salɒːm/`, fa_clas = درود `/duruːd/`, prs = سلام `/salɑːm/`. The three rows then differ on /ɒː/ vs /uː/ vs /ɑː/ — phonologically informative.

---

**File:** `/home/jounlai/langmap/wordmap_reviews/review_96_open.md`
**Findings:** 25


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 32
- **policy/skip**: 11
- **headline**: tg short-/a/ ɒ→a ×15 (Tehran→Tajik), prs long-ā /ɒː/→/ɑː/ ×6 (Tehran→Dari), ckb ڵ /ɬ/→/ɫ/ ×3, ku mother dayik→dê + dog se→kûçik, bal house+hello, kho ɕ→ʂ retroflex ×2, ps moon /ʌ/→/ʐ/, mzn water hamza-alif
- **JSON**: /tmp/wm_edits_96.json
