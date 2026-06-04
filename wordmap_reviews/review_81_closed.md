# Wordmap review #81 — Bantu and East African round-2 audit

## Reviewer self-introduction (ペルソナ自己紹介)

I am a comparative-Bantuist / Afro-Asiaticist reviewer whose remit this round is the Bantu and East African block. Round #80 cleared a bounded β-contamination in the Sukuma–Nyamwezi (suk/nym) row by enforcing the dataset rule that the **surface** column carries the language's own practical orthography while the **IPA** column carries the phonemic/phonetic transcription (CONTRIBUTING.md "IPA conventions"). My job here is (a) regression-check that β cleanup, (b) sweep the 20 word files for class-prefix integrity, implosives (ɓ/ɗ), Zulu/Xhosa lateral fricatives (ɮ/ɬ), Amharic/Tigrinya ejectives, Ge'ez↔Latin transcription, and Hausa/Yoruba phoneme inventory, and (c) cross-check IPA consistency within a single language across all 20 files. Sources I rely on for this round: **Maganga & Schadeberg (1992)** for nym/suk b↔β and h, **Doke (1926, 1948)** and **Khumalo (1987)** for Zulu nguni laterals /ɮ/ /ɬ/ vs digraphs ⟨dl⟩ ⟨hl⟩ ⟨ndl⟩, **Newman (2000)** _Hausa Language_ for ɓ/ɗ/ƙ implosives and phonemic vowel length, **Bamgboṣe (1966)** and **Akinlabi & Liberman (2000)** for Yoruba tone and labial-velar /ɡ͡b/, **Leslau (1995)** _Reference Grammar of Amharic_ and **Voigt (1977)** for Ge'ez 1st–7th order vowel mapping in Amharic vs Tigrinya (1st order = /ə/~/ɛ/ Amh, /ə/ Tig; 6th order = /ɨ/), **Griefenow-Mewis (2001)** for Oromo phonemic length and gemination, and the dataset's own established conventions (e.g., **suk** ⟨v⟩ = /β/, ⟨b⟩ = /b/; **zu/xh** ⟨dl⟩ = /ɮ/ single phoneme; **am** Ge'ez 1st order = /ɛ/, 6th = /ɨ/). All "Current" values are copied verbatim from the live `words/*.js` files. The headline finding is a clean, four-cell systematic miss in `house.js` where Zulu/Swati/Ndebele/Northern-Ndebele all show the orthography ⟨indlu⟩ copied verbatim into the IPA slot (no /ɮ/), while their immediate Xhosa sibling renders it correctly as /indɮu/ — proving the four are the contaminated cells, not a deliberate convention choice.

---

## Issues found

### 1. `zu` — house — IPA is a verbatim copy of the orthography; the digraph ⟨dl⟩ = /ɮ/ is not transcribed (Nguni-cluster instance 1/4)
- **File:** `words/house.js` line 150
- **Current:** `["indlu", "indlu"]`
- **Expected:** `["indlu", "inɮu"]` (or `["indlu", "indɮu"]` if the prenasalised analysis is preferred — but consistently with the xh sibling)
- **Why:** In Zulu, orthographic ⟨dl⟩ is the **single phoneme** voiced lateral fricative /ɮ/, not a /d/+/l/ cluster (Doke 1926; Khumalo 1987). The IPA field here is byte-identical to the surface — `indlu` is *not* an IPA string, it is the orthography copy-pasted. The proof that this is wrong (and not a dataset convention) is the immediately adjacent Xhosa cell `house.js:279 xh: ["indlu", "indɮu"]`, which is a *different language with the same orthography and the same root* but does render the lateral fricative in IPA. Same orthographic ⟨dl⟩, two different IPA treatments — the zu cell is the outlier.

### 2. `ssw` — house — same ⟨dl⟩-not-transcribed defect as #1 (instance 2/4)
- **File:** `words/house.js` line 802
- **Current:** `["indlu", "indlu"]`
- **Expected:** `["indlu", "inɮu"]`
- **Why:** Swati (ssw) shares the Nguni ⟨dl⟩ = /ɮ/ digraph with Zulu and Xhosa. The cell is a verbatim spelling-copy with no IPA segment for the lateral fricative. The same xh sibling on line 279 of the same file is the in-file reference for the correct treatment.

### 3. `nbl` — house — same ⟨dl⟩-not-transcribed defect (instance 3/4)
- **File:** `words/house.js` line 803
- **Current:** `["indlu", "indlu"]`
- **Expected:** `["indlu", "inɮu"]`
- **Why:** Same Nguni ⟨dl⟩ = /ɮ/ phoneme as #1–#2; same byte-identical surface/IPA copy. Southern Ndebele (nbl) is Nguni and patterns with zu/xh/ssw.

### 4. `nd` — house — same ⟨dl⟩-not-transcribed defect (instance 4/4)
- **File:** `words/house.js` line 804
- **Current:** `["indlu", "indlu"]`
- **Expected:** `["indlu", "inɮu"]`
- **Why:** Same as #1–#3. A whole-file grep `grep -nE '"indlu",\s*"indlu"' words/house.js` returns exactly these four lines (zu/ssw/nbl/nd) — a clean, bounded Nguni-cluster contamination, while the Xhosa sibling on line 279 is the correctly-transcribed control. By the project's "fix all variants of one family together" guidance these four should be swept in the same pass.

---

### 5. `zu`, `nbl`, `nd`, `ssw` — eat — `ukudla` IPA renders ⟨dl⟩ as the cluster /dɮ/ instead of the single phoneme /ɮ/
- **File:** `words/eat.js` lines 150, 788, 789, 790
- **Current:** `zu: ["ukudla", "ukudɮa"]`, `ssw: ["kudla", "kudɮa"]`, `nbl: ["ukudla", "ukudɮa"]`, `nd: ["ukudla", "ukudɮa"]`
- **Expected:** IPA `ukuɮa` (and `kuɮa` for ssw), i.e. one phoneme /ɮ/ between the /u/ and /a/, no preceding /d/.
- **Why:** Intervocalic ⟨dl⟩ in Nguni is the single voiced lateral fricative /ɮ/ (Doke 1926; Khumalo 1987 §1.3) — the orthography ⟨d⟩+⟨l⟩ is a digraph, not a cluster /d/+/ɮ/. The current IPA /ukudɮa/ contains a phantom /d/ stop that is not in the actual phonology. This is distinct from the prenasalised ⟨ndl⟩ in `isandla` / `indlu`, where a homorganic nasal precedes the lateral fricative — in plain intervocalic ⟨dl⟩ there is no /d/. A whole-dataset check `grep -nE '"[^"]*udl[^"]*", *"[^"]*udɮ[^"]*"' words/` returns exactly these four lines.

---

### 6. `suk` — love — IPA shows word-initial /β/ for orthographic ⟨b⟩, contradicting the convention established by sun/hand
- **File:** `words/love.js` line 111
- **Current:** `["butogwa", "βutoɡwa"]`
- **Expected:** `["butogwa", "butoɡwa"]`
- **Why:** The convention this dataset settled on after round #80 is **Sukuma orthographic ⟨v⟩ = IPA /β/**, **orthographic ⟨b⟩ = IPA /b/** (Maganga & Schadeberg 1992). The witness is `sun.js:111 suk: ["ilyuva", "iʎuβa"]` (orthographic v → IPA β) and the Nyamwezi cells `sun.js:112 ["izuba", "izuβa"]` / `hand.js:112 ["ikobo", "ikoβo"]` which keep orthographic ⟨b⟩ in the **surface** column. Yet `love.js:111 suk` puts /β/ word-initially for orthographic ⟨b⟩. Word-initial Bantu /b/ is realised as a stop [b], not the spirantised [β] (which is the intervocalic reflex). The cell either has the wrong segment (most defensible /b/) or a still-undocumented stem-initial fortis distinction that needs a citation; either way it is internally inconsistent with the entire suk row established by round #80.

### 7. `nym` — love — IPA `butoɡwa` is internally fine but inconsistent with suk on the same line
- **File:** `words/love.js` line 112
- **Current:** `["butogwa", "butoɡwa"]`
- **Expected:** unchanged — flagged for paired audit with #6 only
- **Why:** Listed for completeness: if #6 is fixed (suk → /butoɡwa/), the two sibling cells become byte-identical, which is acceptable here (the languages happen to share the cognate and the same transcription). Without the #6 fix, the suk and nym IPA forms disagree on the initial segment for no documented reason. No edit to this cell — but reviewer round-2 should confirm that paired status holds after #6 is applied.

---

### 8. `om` — good — Oromo phonemic long /aː/ omitted; only the second long vowel is marked
- **File:** `words/good.js` line 266
- **Current:** `["gaarii", "ɡaɾiː"]`
- **Expected:** `["gaarii", "ɡaːriː"]`
- **Why:** Oromo ⟨aa⟩ is the orthographic representation of phonemic long /aː/ (Griefenow-Mewis 2001 §2). "gaarii" /ɡaːriː/ has two long vowels — both ⟨aa⟩ and ⟨ii⟩. The current IPA marks length only on the second (ɾiː) and drops it on the first (ɡa…). This is inconsistent with the dataset's own Oromo handling: `eat.js:266 om: ["nyaachuu","ɲaːtʃuː"]` correctly marks both /aː/ and /uː/; `water.js:273 om: ["bishaan","biʃaːn"]` correctly marks /aː/; `love.js:273 om: ["jaalala","dʒaːlala"]` correctly marks word-initial /aː/. Only `good.js` drops the initial long vowel.

---

### 9. `ti` — thanks — sixth-order Ge'ez vowels rendered as /ɛ/ instead of the /ɨ/ used elsewhere in ti
- **File:** `words/thanks.js` line 246
- **Current:** `["የቐንየለይ", "jɛqʼɛnjɛlɛj"]`
- **Expected:** `["የቐንየለይ", "jɨqʼɨnjɨlɨj"]` (or, if 1st-order /ə/ convention preferred, `jəqʼənjələj`)
- **Why:** All consonants in የቐንየለይ are written in either the 1st-order (in Tigrinya = /ə/) or 6th-order (= /ɨ/ or zero) — none are 4th-order. The convention this dataset uses for Tigrinya sixth-order is /ɨ/ (see `heart.js:246 ti: ["ልቢ","lɨbi"]`, `eat.js:246 ["ምብላዕ","mɨblaʕ"]`, `drink.js:246 ["ምስታይ","mɨstaj"]`, `good.js:246 ["ጽቡቕ","tsʼɨbuqʼ"]`, `love.js:253 ["ፍቕሪ","fɨqʼɾi"]`) and for 1st-order is /ə/ (`sun.js:252 ["ጸሓይ","tsʼəħaj"]`, `moon.js:252 ["ወርሒ","wərħi"]`). The current /jɛqʼɛnjɛlɛj/ uses /ɛ/ for every vowel, which is the Amharic 1st-order convention (am uses /ɛ/) — i.e. the cell was transcribed under Amharic rules and not switched to the Tigrinya rules used by every other ti cell.

### 10. `ti` — hello — same Amharic-rules-for-Tigrinya defect; 1st-order ሰ rendered /sɛ/ instead of /sə/ (or /sɨ/) and /a/ unnaturally lengthened
- **File:** `words/hello.js` line 246
- **Current:** `["ሰላም", "sɛlaːm"]`
- **Expected:** `["ሰላም", "səlam"]` (Tigrinya convention) or `["ሰላም", "sɨlam"]`
- **Why:** ሰ is 1st-order (in Tigrinya = /sə/), ላ is 4th-order /la/, ም is 6th-order (no vowel or /m/). The dataset's ti convention puts /ə/ for 1st-order and /ɨ/ for 6th-order — see #9's witness list. The current IPA `sɛlaːm` uses Amharic /ɛ/ (compare `am hello.js:151 ["ሰላም","sɛlam"]`, which is correct for Amharic) and additionally marks /aː/ as long, which is not justified for the Tigrinya pronunciation and is not used in any other ti cell. The two cells (hello.js am, hello.js ti) share the same Geʿez string but **must not** share the same IPA — Amharic uses /ɛ/, Tigrinya uses /ə/.

### 11. `ti` — dog — same defect: 1st-order ከ rendered /kɛ/ instead of /kə/ (or /kɨ/)
- **File:** `words/dog.js` line 246
- **Current:** `["ከልቢ", "kɛlbi"]`
- **Expected:** `["ከልቢ", "kəlbi"]` (or `kɨlbi`)
- **Why:** Same Tigrinya/Amharic vowel-rule mix-up as #9 and #10. ከ is 1st-order; in Tigrinya the standard mapping is /kə/, not /kɛ/. Inconsistent with `eye.js:246 ti: ["ዓይኒ","ʕajni"]` (where 6th-order ይ is treated as /j/ glide, the consistent ti pattern) and with the ə/ɨ rule used throughout the rest of the ti row.

---

### 12. `nym` — hello — surface uses orthographic ⟨d⟩ but Nyamwezi has no /d/ where this would be expected; cross-check needed against Maganga & Schadeberg
- **File:** `words/hello.js` line 112
- **Current:** `["mwadita", "mwadita"]`
- **Expected:** verification — likely `["mwadita", "mwaɗita"]` (implosive) OR a typo for `mwa[w]ita` / `mwagona`
- **Why:** Nyamwezi has phonemic implosives /ɓ/ and /ɗ/ (Maganga & Schadeberg 1992 §2.3) and they are written ⟨b⟩ and ⟨d⟩ in the practical orthography (i.e. orthographic ⟨d⟩ is phonemically [ɗ]). The IPA cell here is a verbatim spelling-copy `mwadita` — no implosive marker. Compare the sibling on line 111, `suk: ["mwangaluka","mwaŋɡaluka"]`, which correctly distinguishes orthography ⟨ng⟩ from IPA /ŋɡ/. The nym cell either (a) needs IPA `mwaɗita` (if the greeting is genuine) or (b) is a wrong root entirely — round-2 verification by the dev team should consult M&S 1992 for the actual Nyamwezi greeting form. Flagged as **OPEN-VERIFY** rather than direct-fix.

---

### 13. `suk` — heart — IPA `ŋɡoːlo` includes a long /oː/ but other suk cells in non-final/penultimate position do not show length consistently
- **File:** `words/heart.js` line 111
- **Current:** `["ngholo", "ŋɡoːlo"]`
- **Expected:** verification only — either `ŋɡolo` (no length) or apply penultimate length pattern across all suk cells
- **Why:** Sukuma/Nyamwezi (East Bantu) have penultimate lengthening as a phrase-level prosodic feature, not always represented in citation forms. Compare `heart.js:111 suk: ["ngholo","ŋɡoːlo"]` (penult marked) vs `eye.js:111 suk: ["liso","liso"]`, `tree.js:111 suk: ["mti","mti"]`, `fire.js:111 suk: ["moto","moto"]`, `house.js:111 suk: ["kaya","kaja"]`, `mother.js:111 suk: ["mayu","majʊ"]` (penult not marked). The suk row is inconsistent — heart and moon (`ng'wezi`,`ŋweːzi`) mark length; the rest do not. Flagged for convention decision: either remove the length on `ŋɡoːlo` to match the unmarked majority, or add penultimate length to the eye/tree/fire/house/mother cells. Not a direct fix.

---

### 14. `ha` — sun — Hausa phonemic vowel length absent; "rana" is /raː.naː/ (Newman 2000), not /ɾana/
- **File:** `words/sun.js` line 265
- **Current:** `["rana", "ɾana"]`
- **Expected:** `["rana", "ɾaːnaː"]`
- **Why:** Hausa vowel length is phonemic and is normally marked in IPA transcription (Newman 2000 §2.1). The citation form "rānā" (sun) has long /aː/ in both syllables. The dataset's own Hausa cells already mark vowel length when present (`water.js:266 ha: ["ruwa","ɾuːwa"]` long /uː/; `eat.js:259 ha: ["ci","tʃiː"]` long /iː/; `drink.js:259 ha: ["sha","ʃaː"]` long /aː/). Leaving `rana` with two short /a/s is internally inconsistent and phonemically wrong.

### 15. `ha` — father — Hausa "uba" /ˈuː.baː/ has long vowels; current IPA marks none
- **File:** `words/father.js` line 259
- **Current:** `["uba", "uba"]`
- **Expected:** `["uba", "uːbaː"]`
- **Why:** Same Hausa phonemic-length defect as #14. The citation form "ubā" "father" has both vowels long (Newman 2000; Bargery 1934). The IPA is a verbatim spelling-copy with no length and no stress. Internally inconsistent with the dataset's other length-marked ha cells.

### 16. `ha` — mother — same length-omitted defect; "uwa" → /uːwaː/
- **File:** `words/mother.js` line 265
- **Current:** `["uwa", "uwa"]`
- **Expected:** `["uwa", "uːwaː"]`
- **Why:** "uwā" "mother" is phonemically /uːwaː/ (Newman 2000). The IPA copies orthography. Same pattern as #14–#15: a small but bounded set of Hausa cells that escaped the length pass.

### 17. `ha` — eye — Hausa "ido" → /iː.doː/, both vowels long
- **File:** `words/eye.js` line 259
- **Current:** `["ido", "ido"]`
- **Expected:** `["ido", "iːdoː"]`
- **Why:** "īdō" "eye" is the standard Hausa citation form with both long vowels (Newman 2000). Same defect as #14–#16; closes the eye/sun/father/mother set of un-lengthened Hausa cells.

---

### 18. `nym` — cat — surface `paka` looks like a Swahili borrowing; Nyamwezi indigenous term unclear (verification only)
- **File:** `words/cat.js` line 112
- **Current:** `["paka", "paka"]`
- **Expected:** verification against Maganga & Schadeberg 1992 or a Nyamwezi dictionary
- **Why:** Both surface and IPA are `paka`, which is *exactly* the Swahili form (`sw paka`, `jmc paka`, `sbp paka`, `rwk paka`, `asu paka` all use it). Tanzanian Bantu languages did borrow widely from Swahili so this is not necessarily wrong, but the sibling Sukuma cell `cat.js:111 suk: ["kalulu","kalulu"]` uses a *different* root — and "kalulu" in much of Bantu is "hare" (a trickster character), not cat. Either nym has genuinely borrowed Swahili paka (likely) or the cell is a copy-paste from the sw row. Flagged for verification; no direct edit.

---

### 19. `xh` — eat — Xhosa "ukutya" rendered /ukutʲa/; ⟨ty⟩ in Xhosa is a *palatal ejective* /tʲʼ/ in many sources, not a plain palatalised stop
- **File:** `words/eat.js` line 272
- **Current:** `["ukutya", "ukutʲa"]`
- **Expected:** `["ukutya", "ukutʲʼa"]` (with ejective marker) — or document that this dataset's convention is plain palatalised
- **Why:** Xhosa ⟨ty⟩ in standard descriptions (Jordan 1942; Doke 1961; Cassimjee & Kisseberth 1992) is a voiceless palatal ejective stop /tʲʼ/ — not the plain palatalised /tʲ/. The current cell drops the ejective mark. This is parallel to `good.js:272 xh: ["lungile","luŋɡilɛ"]` and other xh cells where ejectives are not consistently marked. Flagged as either a real omission (most likely) or as evidence that the dataset's xh row deliberately suppresses the ejective contrast — in which case the convention should be documented.

---

### 20. `yo` — drink — `mu` IPA copies orthography with no tone; Yoruba "mu" is mid-tone (unmarked, so the IPA is *technically* fine, but compare to `eat.js yo`)
- **File:** `words/drink.js` line 149
- **Current:** `["mu", "mu"]`
- **Expected:** unchanged — flagged for cross-sibling reference only
- **Why:** Yoruba "mu" "drink" is correctly written and transcribed with no tone diacritic because mid tone is left unmarked in Yoruba orthography (Bamgboṣe 1966). The cell is correct. Listed here to confirm the reviewer ran the Yoruba tone-consistency check and found no actual defects in the 20-word yo row: tone-bearing surfaces (`ìyá`, `bàbá`, `ìfẹ́`, `ọkàn`, `ọwọ́`, `ọ̀kan`, `ológbò`, `iná`, `ajá`, `dára`, `ojú`, `ẹ kú`, `ẹ ṣé`, `oòrùn`, `oṣù`, `ilé`) all preserve the diacritics in IPA. No edit.

---

*All line numbers reference the state of the files as of the review date (2026-06-04). No data files were modified.*

---

**File path:** `/home/jounlai/langmap/wordmap_reviews/review_81_open.md`
**Finding count:** 20 (15 direct-fix, 4 verify-only, 1 confirmed-OK reference)


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 17
- **policy/skip**: 6
- **headline**: Nguni ⟨dl⟩=/ɮ/ 単一音素 IPA ×8 (house+eat zu/ssw/nbl/nd indɮu/ukuɮa), suk love β-cleanup regression butoɡwa, ti 3 cells Ge'ez ə/ɨ, ha 4 cells phonemic length /ː/, om gaarii initial /aː/
- **JSON path**: /tmp/wm_edits_81.json
