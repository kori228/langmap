# Wordmap review #76 — Historical & reconstructed-forms rigor specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a historical-linguistics specialist whose work centres on the attested-vs-reconstructed boundary: I spend my days adjudicating whether a cited form belongs in a manuscript edition or behind an asterisk, and whether its phonological gloss reflects the language's own period or a later/modern reading bled backwards. For this project I parse `words/*.js` directly, eval the `WORDS.<word>` objects, and read each historical cell verbatim before flagging it; I am fluent in the data model (two-element `[surface, ipa]` tuples, the historical/classical code set `la sa sa_edu pi cu goh gmh osx non got ang enm en_em el_grc egy akk sux hit fro nci och ojp`, the convention that *attested* forms carry no `*` while *reconstructed* ones do — verified live: every `och` Old-Chinese cell is starred, every `ojp` Man'yōgana cell is not). My citations are the standard period grammars: **Weiss (2009) _Outline of the Historical and Comparative Grammar of Latin_**; **Whitney (1889) _Sanskrit Grammar_** and **Macdonell (1910) _Vedic Grammar_**; **Ringe (2006) _From Proto-Indo-European to Proto-Germanic_** and **Wright (1910) _Grammar of the Gothic Language_** for Gothic, **Wright & Wright (1925) _Old English Grammar_** for OE; **Sihler (1995) _New Comparative Grammar of Greek and Latin_** for the Greek spurious-diphthong cases; **Lunt (2001) _Old Church Slavonic Grammar_** for the jers. Every "Current" value below was copied straight from the file at the cited line; no data file was modified. My findings cluster on three recurring period-pronunciation hazards: Gothic digraph values, Old English long diphthongs, and the Old-Church-Slavonic jers — plus a sharp Sanskrit palatal-series inconsistency between the `sa` / `sa_edu` variants.

---

## Issues found

### 1. `got` — one — Gothic `ai` in *ains* is a true diphthong, not monophthong /ɛː/
- **File:** `words/one.js` line 525
- **Current:** `["𐌰𐌹𐌽𐍃", "ɛːns"]`
- **Expected:** `["𐌰𐌹𐌽𐍃", "ains"]`
- **Why:** Gothic *ains* "one" (< PGmc \*ainaz, Ringe 2006 §3.2; Wright 1910 §24) has the genuine falling diphthong /ai/; the monophthongal value /ɛː/ that Gothic ⟨ai⟩ carries elsewhere is restricted to the "broken" position before /h/, /ƕ/, /r/ — which is not the environment here (⟨ai⟩ before /n/). The transcription /ɛːns/ wrongly applies the broken-vowel reading. The file itself proves diphthongs are transcribed as such: `got` *augo* (eye, `eye.js` L519) is `ɑuɣoː`, keeping ⟨au⟩ → /ɑu/. So /ɛːns/ is both phonologically wrong and internally inconsistent with the ⟨au⟩ treatment.

---

### 2. `got` — hello — same Gothic `ai`-diphthong error in *hails*
- **File:** `words/hello.js` line 510
- **Current:** `["𐌷𐌰𐌹𐌻𐍃", "hɛːls"]`
- **Expected:** `["𐌷𐌰𐌹𐌻𐍃", "hails"]`
- **Why:** *hails* "hale, whole" (the greeting; < PGmc \*hailaz, cf. ON *heill*) has ⟨ai⟩ before /l/, again the diphthong /ai/, not broken /ɛː/ (Wright 1910 §24; Ringe 2006). The neighbouring Old Norse cognate in this same row, `non` *heill* (`hello.js` L509) is correctly transcribed `hɛilː` with the diphthong — so the Gothic sibling losing its diphthong to /ɛː/ is a clear, sourced error and a cross-language inconsistency.

---

### 3. `ang` — eye — Old English long diphthong ⟨ēa⟩ flattened to a monophthong /eː/
- **File:** `words/eye.js` line 516
- **Current:** `["ēage", "eːɑɣe"]`
- **Expected:** `["ēage", "æːɑɣe"]`
- **Why:** OE *ēage* "eye" has the long diphthong ⟨ēa⟩ = /æːɑ/ (Wright & Wright 1925 §50, §132), not the long front monophthong /eː/. Rendering ⟨ēa⟩ as /eː/ erases the first (low-front) element of the diphthong entirely. Note the same file keeps Old Norse *auga* (`eye.js` L518) as `ɑuɣɑ` with its diphthong intact, so the OE flattening is the outlier.

---

### 4. `ang` — tree — Old English ⟨ēo⟩ length placed on the wrong diphthong element
- **File:** `words/tree.js` line 516
- **Current:** `["trēow", "treoːw"]`
- **Expected:** `["trēow", "treːow"]`
- **Why:** OE *trēow* "tree" carries the long diphthong ⟨ēo⟩ = /eːo/, i.e. the length sits on the **first** (mid-front) element (Wright & Wright 1925 §50, §134). The current `treoːw` places the length mark on the **second** element (/eoː/), which both mistranscribes the quantity and contradicts the macron over the first vowel in the surface form ⟨ēow⟩. The fix moves the length to /eː/.

---

### 5. `ang` — heart — orthography re-entered as IPA; short diphthong ⟨eo⟩ and stress unmarked
- **File:** `words/heart.js` line 516
- **Current:** `["heorte", "heorte"]`
- **Expected:** `["heorte", "ˈheorte"]`
- **Why:** The IPA field is byte-identical to the spelling. OE *heorte* "heart" has the short diphthong ⟨eo⟩ = /eo/ and root-initial stress (Wright & Wright 1925 §50). At minimum the citation form should mark stress (and ideally show that final ⟨e⟩ = /e/, ⟨t⟩ between vowels stays /t/). As written the transcription encodes nothing the spelling does not, the "orthography in the IPA slot" defect this audit targets.

---

### 6. `cu` — heart — Old Church Slavonic jers given the *post-fall* (palatalization-only) reading, anachronistic for OCS
- **File:** `words/heart.js` line 520
- **Current:** `["срьдьце", "srʲdʲtse"]`
- **Expected:** `["срьдьце", "sĭrĭdĭtse"]` (i.e. front jer ь = reduced /ɪ/, e.g. `sɪrɪdɪtse`)
- **Why:** In canonical Old Church Slavonic the jers were still pronounced as reduced vowels — front ь ≈ /ĭ/ [ɪ], back ъ ≈ /ŭ/ [ɤ] (Lunt 2001 §2.2, §2.4). The current `srʲdʲtse` treats every ь as mere palatalization with **no vowel**, which is the *late East-Slavic, post-fall-of-the-jers* pronunciation — anachronistic for the `cu` (OCS) layer. The dataset already vocalizes back jers elsewhere (`домъ` → `domɤ`, `добръ` → `dobrɤ`, `котъка` → `kotɤkɑ`), so the unvocalized front jers here are also internally inconsistent.

---

### 7. `cu` — dog — front jer dropped while the back jer in the same word is vocalized (internal inconsistency)
- **File:** `words/dog.js` line 520
- **Current:** `["пьсъ", "pʲsɤ"]`
- **Expected:** `["пьсъ", "pɪsɤ"]`
- **Why:** *пьсъ* /pĭsŭ/ "dog" has a front jer ь and a back jer ъ. The current transcription vocalizes the **back** jer (ъ → /ɤ/) but reduces the **front** jer to bare palatalization (ь → /ʲ/), so the two reduced vowels of the same word are treated by two different principles. In canonical OCS both are syllabic reduced vowels (Lunt 2001 §2.4): ь = [ɪ], ъ = [ɤ], giving /pɪsɤ/. This is the same anachronism as #6 and is contradicted by the project's own front-jer vocalization in #8.

---

### 8. `cu` — father — front jer vocalized in one position but not the other, *within the same word*
- **File:** `words/father.js` line 520
- **Current:** `["отьць", "otʲɪtsʲ"]`
- **Expected:** `["отьць", "otɪtsɪ"]`
- **Why:** *отьць* /otĭtsĭ/ "father" has two front jers. The current `otʲɪtsʲ` vocalizes the **first** ь (→ /ɪ/) but reduces the **second** ь to bare palatalization /ʲ/ — two contradictory treatments of the identical jer in one four-letter word. Per Lunt (2001 §2.4) both should surface as the reduced front vowel [ɪ]: /otɪtsɪ/. This entry is the clinching evidence that the OCS jer transcriptions across the dataset (#6, #7) follow no single rule; harmonizing on the *vocalized* reading (which this very file already uses for the first jer) is the OCS-correct choice.

---

### 9. `sa_edu` vs `sa` — water — the same palatal ज is transcribed /dʒ/ in one Sanskrit variant and /dʑ/ in the other
- **File:** `words/water.js` lines 84–85
- **Current:** L84 `sa_edu: ["जलम्", "dʒalam"]` vs L85 `sa: ["जलम्", "dʑalam"]`
- **Expected:** `sa_edu: ["जलम्", "dʑalam"]` (match `sa`)
- **Why:** ⟨ज⟩ is one phoneme (the voiced palatal, Whitney 1889 §40), and the two cells are the *same Sanskrit word in the same script* — they must not assign it two different IPA values. `sa` uses the alveolo-palatal /dʑ/; `sa_edu` uses the postalveolar /dʒ/. The alveolo-palatal series is the one the dataset uses for the voiceless counterpart च = /tɕ/ (see #11), so `sa_edu`'s /dʒ/ is the outlier and should be /dʑ/.

---

### 10. `sa_edu` vs `sa` — cat — same ज split (/dʒ/ vs /dʑ/) recurs
- **File:** `words/cat.js` lines 84–85
- **Current:** L84 `sa_edu: ["मार्जारः", "maːɾdʒaːɾaɦ"]` vs L85 `sa: ["मार्जारः", "maːɾdʑaːɾaɦ"]`
- **Expected:** `sa_edu: ["मार्जारः", "maːɾdʑaːɾaɦ"]`
- **Why:** Identical surface ⟨मार्जारः⟩ in both Sanskrit variants, but ⟨ज⟩ is /dʒ/ in `sa_edu` and /dʑ/ in `sa`. This is the same systematic split as #9 (it appears in every ज-bearing pair, two so far), confirming the `dʒ`↔`dʑ` divergence is a copy-time inconsistency, not a deliberate dialect distinction. Harmonize `sa_edu` onto the alveolo-palatal /dʑ/.

---

### 11. `sa_edu` — water — voiceless /tɕ/ but voiced /dʒ/: the palatal series is internally split by place of articulation
- **File:** `words/water.js` line 84 (with `moon.js` line 84 as the comparison)
- **Current:** `water.js` L84 `sa_edu: ["जलम्", "dʒalam"]`; `moon.js` L84 `sa_edu: ["चन्द्रः", "tɕandɾaɦ"]`
- **Expected:** make the voiced member alveolo-palatal too: `dʑalam`
- **Why:** Within `sa_edu` itself the voiceless palatal च is transcribed alveolo-palatal /tɕ/ (moon) while the voiced palatal ज is postalveolar /dʒ/ (water) — the two members of a single Sanskrit stop series (Whitney 1889 §40 groups च छ ज झ ञ as one homorganic class) are placed at two different articulators. A coherent transcription keeps both at the same place: /tɕ/ ↔ /dʑ/. This is the root cause behind #9–#10 and is fixed by the same `dʒ → dʑ` change.

---

### 12. `el_grc` — one — Ancient Greek *εἷς* shown with a true diphthong /ei̯/ instead of the spurious-diphthong long monophthong /eː/
- **File:** `words/one.js` line 517
- **Current:** `["εἷς", "hêi̯s"]`
- **Expected:** `["εἷς", "hêːs"]`
- **Why:** Attic *εἷς* "one" derives from \*sem-s → \*hens → *εἷς*; the ⟨ει⟩ here is the **spurious diphthong**, i.e. a compensatorily-lengthened close /eː/, **not** the genuine diphthong /ei̯/ (Sihler 1995 §201, §229.2 on Greek ⟨ει⟩ spurious vs genuine; the genuine /ei̯/ survives only where it reflects inherited \*ei). Transcribing /hêi̯s/ with the glide treats a monophthong as a diphthong. The rough breathing /h/ and circumflex are correct; only the vocalic value needs to be the long monophthong /eː/.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
