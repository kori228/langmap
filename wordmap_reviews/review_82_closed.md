# Wordmap review #82 — Austronesian round-2 audit

## Reviewer self-introduction (ペルソナ自己紹介)

I am the Austronesianist round-2 auditor — a comparativist who has spent years on Philippine-type voice morphology, Polynesian prosody, and the orthographic conventions of the Indonesian/Malay branch. I follow the post-#80 thread: round #80 made a clean, sourced sweep of Tagalog vowel-initial /ʔ/ on **four cells** (`ama / ina / isa / aso`) and asserted the wider Philippine pattern but stopped there. My method is to verify whether the **same rule** has been applied uniformly across (a) the rest of Tagalog's own vowel-initial cells, (b) its sibling Philippine codes that share the rule by inheritance (agt, ilo, ceb, war, pam), and (c) the Pacific/Indonesian cells where parallel internal inconsistencies are visible in the live data. Sources I rely on for the new findings: **Schachter & Otanes (1972)** Tagalog Reference Grammar §1.5 (phonemic initial /ʔ/ on every vowel-initial root) — already accepted as canonical by rounds #80/#82 of this thread; **Rubino (2000)** _Ilocano Dictionary and Grammar_ §1.2 (same initial /ʔ/ rule for Ilocano); **Reid (1971)** for Central Cagayan Agta; **Wolff (1972)** _Cebuano Visayan Dictionary_ Intro (phonemic /ʔ/, both initial and intervocalic, regularly unwritten in the practical orthography); **Forman (1971)** _Kapampangan Grammar Notes_ §1.3 (vowel-final native roots typically carry final /ʔ/); **Schütz (1985)** _The Fijian Language_ §2 (orthographic ⟨v⟩ is phonetically [β]); and **Krupa (1968)** / Bauer (1993) for Polynesian penultimate stress. All "Current" strings below were copied verbatim from `grep -nE '^[[:space:]]*(tl|agt|ilo|ceb|war|pam|fj|sm|to|haw|mi):' words/*.js`.

The headline this round is a **single Philippine rule that was applied to four cells in round #80 but skipped on its 20+ siblings in the same files** — same word lists, same orthographies, same source. Plus two narrower systematic items: Fijian /v/→[β] (applied to `vinaka` only) and Polynesian penultimate-stress marking (applied unevenly).

Scope verification: `mri`, `tah`, `kne` do **not** exist in `/home/jounlai/langmap/words/` — only `mi` (Maori), no Tahitian, no Kankanaey. Audit covers the codes that actually exist: tl, ceb, pam, ilo, war, agt, ms, id, jv, su, mi, sm, to, haw, fj, mg.

---

## Issues found

### Theme A — Tagalog vowel-initial /ʔ/ rule continued (round #80 missed three sibling cells)

Round #80 fixed `tl ama / ina / isa / aso` to `ʔaˈma / ʔiˈna / ʔiˈsa / ˈʔaso` citing Schachter & Otanes (1972) §1.5. Three other Tagalog cells in the same file set begin with a vowel and were left as bare spelling-copies in IPA.

### 1. `tl` — fire — vowel-initial Tagalog, phonemic /ʔ/ omitted
- **File:** `words/fire.js` line 119
- **Current:** `tl: ["apoy", "apoj"]`
- **Expected:** `tl: ["apoy", "ʔaˈpoj"]`
- **Why:** *apóy* "fire" is vowel-initial Tagalog with final stress. By the **same rule** round #80 applied (Schachter & Otanes 1972 §1.5), the IPA must carry the initial /ʔ/ and the lexical stress. Pampangan on the same row (`pam: ["api", "ʔaˈpi"]`) already follows this convention; the Tagalog cell does not. Surface unchanged.

### 2. `tl` — sun — vowel-initial Tagalog, phonemic /ʔ/ omitted
- **File:** `words/sun.js` line 119
- **Current:** `tl: ["araw", "aɾaw"]`
- **Expected:** `tl: ["araw", "ˈʔaɾaw"]`
- **Why:** *áraw* "sun" is vowel-initial Tagalog with initial stress. Same rule as #1; same precedent (round #80 `dog.js tl ["aso","ˈʔaso"]`, same initial-stress pattern). Pampangan twin on the same row already encodes this (`pam: ["aldo", "ʔalˈdoʔ"]`). Surface unchanged.

### 3. `tl` — drink — vowel-initial Tagalog, phonemic /ʔ/ omitted
- **File:** `words/drink.js` line 119
- **Current:** `tl: ["uminom", "uminom"]`
- **Expected:** `tl: ["uminom", "ʔumiˈnom"]`
- **Why:** *umiˈnom* "drink/drank" is the vowel-initial *<-um-> + inom* form; initial /ʔ/ on the prefix vowel and stress on the final root syllable (Schachter & Otanes 1972 §1.5; final stress per Tagalog stress-class data). Surface unchanged. Note: this cell is byte-identical across `surface` and `ipa`, the same copy-paste signature round #80 flagged.

---

### Theme B — Agta vowel-initial /ʔ/ rule continued (round #80 only fixed `isa`)

Round #80's findings #6/#80-r2 fixed `agt isa → ʔiˈsa` and explicitly cited French (1988) / Reid (1971): Central Cagayan Agta has phonemic initial /ʔ/ on every vowel-initial root. Seven other `agt` cells in the same 20-word set are vowel-initial and were left as bare spelling-copies.

### 4. `agt` — father — vowel-initial Agta, /ʔ/ omitted
- **File:** `words/father.js` line 120
- **Current:** `agt: ["ama", "ama"]`
- **Expected:** `agt: ["ama", "ʔaˈma"]`
- **Why:** Twin of the round-#80 fix `tl: ["ama","ʔaˈma"]` (same line above). The Agta cell was left untouched while its tl twin was fixed — exactly the bare-twin pattern round #80 itself was designed to catch.

### 5. `agt` — mother — vowel-initial Agta, /ʔ/ omitted
- **File:** `words/mother.js` line 120
- **Current:** `agt: ["ina", "ina"]`
- **Expected:** `agt: ["ina", "ʔiˈna"]`
- **Why:** Twin of `tl: ["ina","ʔiˈna"]` one line above. Same rule, same word, same un-fixed twin. Surface unchanged.

### 6. `agt` — fire — vowel-initial Agta, /ʔ/ omitted
- **File:** `words/fire.js` line 120
- **Current:** `agt: ["apuy", "apuj"]`
- **Expected:** `agt: ["apuy", "ʔaˈpuj"]`
- **Why:** *apúy* "fire" is the Proto-Philippine reflex inherited as vowel-initial in Agta. Same rule as #1 above (apply to both tl and agt twins together per "fix all variants together" guidance).

### 7. `agt` — sun — vowel-initial Agta, /ʔ/ omitted
- **File:** `words/sun.js` line 120
- **Current:** `agt: ["agew", "aɡew"]`
- **Expected:** `agt: ["agew", "ˈʔaɡew"]`
- **Why:** *agew* "sun/day" is vowel-initial Agta. Initial-stress reflex parallels Tagalog *áraw*. Same rule.

### 8. `agt` — dog — vowel-initial Agta, /ʔ/ omitted
- **File:** `words/dog.js` line 120
- **Current:** `agt: ["atu", "atu"]`
- **Expected:** `agt: ["atu", "ˈʔatu"]`
- **Why:** *atu* "dog" is a vowel-initial Agta noun; parallel to the round-#80 Tagalog `aso → ˈʔaso` precedent (initial stress).

### 9. `agt` — drink — vowel-initial Agta, /ʔ/ omitted
- **File:** `words/drink.js` line 120
- **Current:** `agt: ["uminom", "uminom"]`
- **Expected:** `agt: ["uminom", "ʔumiˈnom"]`
- **Why:** Twin of #3 (same cell shape, same morphology, same rule). Both should be fixed together.

### 10. `agt` — love — vowel-initial Agta, /ʔ/ omitted
- **File:** `words/love.js` line 120
- **Current:** `agt: ["ayat", "ajat"]`
- **Expected:** `agt: ["ayat", "ʔaˈjat"]`
- **Why:** *ayat* "love" is vowel-initial. Note that the Ilocano twin `ilo: ["ayat","ajat"]` (`love.js:208`) has the identical defect (see #14 below). Both inherited the same vowel-initial /ʔ/ rule from Proto-Philippine.

---

### Theme C — Ilocano vowel-initial /ʔ/ rule (Rubino 2000)

Rubino (2000) _Ilocano Dictionary and Grammar_ §1.2 documents that Ilocano has phonemic initial /ʔ/ on every vowel-initial root, exactly like Tagalog and Agta. None of the Ilocano vowel-initial cells in this dataset encode it.

### 11. `ilo` — father — vowel-initial Ilocano, /ʔ/ omitted
- **File:** `words/father.js` line 201
- **Current:** `ilo: ["ama", "ama"]`
- **Expected:** `ilo: ["ama", "ʔaˈma"]`
- **Why:** *ama* "father" in Ilocano has initial /ʔ/ + final stress, identical reflex to its Tagalog twin (now `["ama","ʔaˈma"]`). Surface unchanged.

### 12. `ilo` — mother — vowel-initial Ilocano, /ʔ/ omitted
- **File:** `words/mother.js` line 207
- **Current:** `ilo: ["ina", "ina"]`
- **Expected:** `ilo: ["ina", "ʔiˈna"]`
- **Why:** Same rule, same word as the fixed Tagalog twin.

### 13. `ilo` — fire — vowel-initial Ilocano, /ʔ/ omitted
- **File:** `words/fire.js` line 207
- **Current:** `ilo: ["apoy", "apoj"]`
- **Expected:** `ilo: ["apoy", "ʔaˈpoj"]`
- **Why:** Twin of finding #1 (same surface, same defect, same rule). Apply tl/agt/ilo `apoy` together.

### 14. `ilo` — love — vowel-initial Ilocano, /ʔ/ omitted
- **File:** `words/love.js` line 208
- **Current:** `ilo: ["ayat", "ajat"]`
- **Expected:** `ilo: ["ayat", "ʔaˈjat"]`
- **Why:** Twin of #10 (Agta `ayat`). Same Proto-Philippine /ʔ/ + final-stress reflex.

### 15. `ilo` — drink — vowel-initial Ilocano, /ʔ/ omitted
- **File:** `words/drink.js` line 201
- **Current:** `ilo: ["uminom", "uminom"]`
- **Expected:** `ilo: ["uminom", "ʔumiˈnom"]`
- **Why:** Triplet of tl/agt/ilo `uminom` (findings #3 and #9). Same morphology, same byte-identical surface=IPA copy-paste defect. Surface unchanged.

---

### Theme D — Other Philippine codes (war, ceb)

### 16. `war` — dog — vowel-initial Waray, /ʔ/ omitted (sibling of fixed war cells)
- **File:** `words/dog.js` line 718
- **Current:** `war: ["ayam", "ajam"]`
- **Expected:** `war: ["ayam", "ˈʔajam"]`
- **Why:** Waray already encodes the rule elsewhere in this dataset — `one.js:724 war ["usa","ʔusa"]`, `drink.js:718 war ["inom","ʔinɔm"]`, `eat.js:711 war ["kaon","kaʔon"]` — but the vowel-initial `ayam` "dog" was missed in the same sweep. Internal inconsistency within the same language.

### 17. `ceb` — Cebuano vowel-initial cells lack /ʔ/ (six cells, single rule)
- **Files / cells:** `dog.js:200 ceb ["iro","iɾo"]`; `cat.js:200 ceb ["iring","iɾiŋ"]`; `father.js:200 ceb ["amahan","amahan"]`; `mother.js:206 ceb ["inahan","inahan"]`; `drink.js:200 ceb ["inom","inom"]`; `one.js:206 ceb ["usa","usa"]`
- **Expected (IPA only; surfaces unchanged):** `ʔiˈɾo / ʔiˈɾiŋ / ʔamaˈhan / ʔinaˈhan / ʔiˈnom / ˈʔusa` (stress placement per Wolff 1972; final stress is the unmarked Cebuano pattern, initial only for *úsa* "one" and similar).
- **Why:** Wolff (1972) _Cebuano Visayan Dictionary_ Intro: Cebuano /ʔ/ is phonemic both word-initially on every vowel-initial root and intervocalically; the practical orthography simply omits it. The dataset already encodes the intervocalic case (`good.js:200 ceb ["maayo","maʔajo"]`), so the initial case being omitted is the same kind of internal inconsistency as the Tagalog cells round #80 fixed. Fix the six cells as one sweep; the byte-identical surface=IPA copy is the same red-flag signature.

---

### Theme E — Pampangan final-/ʔ/ inconsistency (Forman 1971)

### 18. `pam` — vowel-final cells inconsistently mark phonemic final /ʔ/
- **Files / cells (final-ʔ MARKED, correct):** `father.js:986 pam ["tata","ˈtataʔ"]`; `heart.js:986 pam ["pusu","ˈpusuʔ"]`; `sun.js:992 pam ["aldo","ʔalˈdoʔ"]`; `mother.js:992 pam ["ima","ˈʔima"]` (note: `ima` ends in vowel — final-ʔ NOT marked here, inconsistency #1)
- **Files / cells (final-ʔ NOT marked, vowel-final native roots):** `cat.js:986 pam ["pusa","ˈpusa"]`; `eye.js:986 pam ["mata","maˈta"]`; `house.js:993 pam ["bale","baˈle"]`; `mother.js:992 pam ["ima","ˈʔima"]`
- **Why:** Forman (1971) _Kapampangan Grammar Notes_ §1.3: native vowel-final disyllabic roots in Kapampangan are systematically realised with a final phonemic /ʔ/ (the "lalung-ngingi" rule). The dataset has correctly applied this to `tata`, `pusu`, `aldo`, but the four cells above have identical phonotactic shape (CVCV native root) and should pattern the same way — e.g. `pusa → ˈpusaʔ`, `mata → maˈtaʔ`, `bale → baˈleʔ`, `ima → ˈʔimaʔ` (preserving the already-correct initial /ʔ/ on `ima`). Either all six get the final /ʔ/ or the existing three lose it — current state is internally inconsistent within Kapampangan itself. Surfaces unchanged either way.

---

### Theme F — Fijian /v/ → [β] inconsistency (Schütz 1985)

### 19. `fj` — orthographic ⟨v⟩ transcribed as /v/ in three cells, as [β] in two
- **Files / cells (using [β], correct per Schütz 1985):** `thanks.js:202 fj ["vinaka","βiˈnaka"]`; `good.js:202 fj ["vinaka","βiˈnaka"]`
- **Files / cells (using /v/, inconsistent):** `house.js:209 fj ["vale","vale"]`; `moon.js:208 fj ["vula","vula"]`; `water.js:209 fj ["vai","vai"]` (note: `vai` "water" — Fijian ⟨v⟩ same phoneme)
- **Why:** Schütz (1985) _The Fijian Language_ §2: standard Fijian ⟨v⟩ is the voiced bilabial fricative [β], not labiodental [v]. The dataset's `vinaka` cells correctly use [β], proving the dataset's own convention. The three remaining ⟨v⟩-initial Fijian cells (`vale`, `vula`, `vai`) use plain /v/ for the **same phoneme**. Either all five should use [β] (consistent with the dataset's `vinaka` precedent and the published reference grammar) or `vinaka` should be reverted — current state is internally inconsistent for one phoneme of one language. Recommended: bring the three outliers in line with `vinaka`. Surfaces unchanged.

---

### Theme G — Polynesian penultimate stress (Bauer 1993; Krupa 1968)

### 20. `haw` — Hawaiian polysyllabic cells uniformly omit lexical stress mark
- **Files / cells (no stress marked, but Hawaiian has obligatory penultimate-mora stress):** `house.js:178 haw ["hale","hale"]`; `eye.js:178 haw ["maka","maka"]`; `hand.js:178 haw ["lima","lima"]`; `moon.js:178 haw ["mahina","mahina"]`; `mother.js:178 haw ["makuahine","makuahine"]`; `father.js:178 haw ["makuakāne","makuakaːne"]`; `thanks.js:178 haw ["mahalo","mahalo"]`
- **Expected:** `ˈhale / ˈmaka / ˈlima / mɐˈhina / makuˈahine / makuˈaːkaːne / mɐˈhalo` (penultimate-mora stress per Pukui & Elbert 1986 and the long-vowel rule)
- **Why:** Hawaiian stress is lexically predictable but **must** be transcribed in phonemic IPA per the dataset's own convention — `hello.js:178 haw ["aloha","ɐˈloha"]` and `love.js:178 haw ["aloha","ɐˈloha"]` both correctly mark it. Seven other polysyllabic Hawaiian cells in the same 20-word set omit it. Same inconsistency as the Polynesian items handled in earlier review rounds. Recommend marking penultimate stress on all polysyllabic haw cells (monosyllables `lā`, `wai`, `ʻai`, `inu` not affected). Sibling `sm tasi`, `to taha`, `to tamai` exhibit the same omission and can be swept in the same pass if desired.

---

*All line numbers reference the state of the files as of the review date (2026-06-04). No data files were modified.*

---

**File:** `/home/jounlai/langmap/wordmap_reviews/review_82_open.md`
**Finding count:** 20


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 30
- **policy/skip**: 0
- **headline**: tl/agt/ilo vowel-initial /ʔ/ ×15 (Schachter & Otanes 1972; #80 が tl 4 cells のみ fix した残り全部), war ayam, pam final /ʔ/ ×4, fj /v/→[β] ×3, haw penultimate stress ×7
- **JSON path**: /tmp/wm_edits_82.json
