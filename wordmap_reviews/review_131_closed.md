# Wordmap review #131 — Uralic round-2 auditor (Finnish, Estonian, Hungarian, Sami, Mordvin, etc.)

## Reviewer self-introduction (ペルソナ自己紹介)

I am reviewer #131, a Uralicist auditing the LangMap Wordmap for the second-pass "round-2" rally. My remit is the Finnic–Saami–Permic–Mordvin–Mari band of the dataset: `fi`, `et`, `hu`, the five Saami columns (`se`, `sma`, `smj`, `smn`, `sms`), Mordvin (`myv`, `mdf`), Permic (`kpv`, `koi`, `udm`), Mari (`mhr`, `mrj`), and the minor Finnic (`krl`, `olo`, `vep`, `vot`, `liv`). I work from the live `words/*.js` files (the `WORDS.<concept> = { …, data:{ <code>: ["surface","ipa"] } }` shape), and I treat the project's documented conventions in `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md` as binding — in particular the rule that the IPA must track the surface form (same number of word-tokens, same segments). For phonological adjudication I rely on Suomi, Toivanen & Ylitalo (2008) *Finnish Sound Structure*; Sammallahti (1998) *The Saami Languages*; Feist (2015) *A Grammar of Skolt Saami*; and standard Wiktionary/NorthEuraLex transcriptions for Permic and Mordvin, cross-checking against the project's own intra-column conventions. I am familiar with the prior Uralic passes (#15 Komi ё/ӧ, #62/#63 Saami length & preaspiration, #94 missing `sme` + Saami POS, #116 the love-column nominalizations) and have deliberately steered clear of anything those closed reviews already fixed or adjudicated. The issues below are the sharp residue: IPA glides that contradict the source, palatalization symbols that disagree between twin cells, and word-boundary spaces in IPA that the surface form does not carry.

---

## Issues found

### 1. udm — drink — spurious /j/ glide in `юыны`
- **File:** words/drink.js line 762
- **Current:** `["юыны", "jujɨnɨ"]`
- **Expected:** `["юыны", "juɨnɨ"]`
- **Why:** The surface is ю-ы-ны: ⟨ю⟩ already encodes /ju/, ⟨ы⟩ = /ɨ/, ⟨ны⟩ = /nɨ/, so the word is /juɨnɨ/. The transcription `jujɨnɨ` inserts a second /j/ between the /u/ and the /ɨ/ that has no orthographic or phonological source. Wiktionary gives Udmurt юыны = [juɯ̈ˈnɯ̈] (the project renders ⟨ы⟩ as `ɨ`), confirming there is exactly one /j/, the one already spelled by ⟨ю⟩. The extra glide should be deleted.

---

### 2. udm — eat — same spurious /j/ in `сиыны`
- **File:** words/eat.js line 755
- **Current:** `["сиыны", "sijɨnɨ"]`
- **Expected:** `["сиыны", "siɨnɨ"]`
- **Why:** The twin defect of #1. The surface си-ы-ны is /siɨnɨ/ (⟨и⟩=/i/, ⟨ы⟩=/ɨ/ in hiatus), and Wiktionary transcribes Udmurt сиыны = [ɕiɯ̈ˈnɯ̈] with no medial /j/. The dataset's `sijɨnɨ` invents a /j/ across the /i.ɨ/ hiatus exactly as in `юыны`. Both -ыны verb cells were evidently transcribed by the same hand with the same epenthetic-glide error; remove the `j`.

---

### 3. myv — eye — final consonant not palatalized, contradicts the Moksha twin and Wiktionary
- **File:** words/eye.js line 765
- **Current:** `["сельме", "sʲelʲme"]`
- **Expected:** `["сельме", "sʲelʲmʲe"]`
- **Why:** In Erzya the final ⟨ме⟩ has a palatalized /mʲ/ before /e/: Wiktionary gives Erzya сельме = /sʲelʲmʲe/. The dataset's Moksha twin one line down already transcribes the identical spelling correctly as `mdf` `["сельме", "sʲelʲmʲe"]` (eye.js:766) with the palatalized `mʲe`. The Erzya cell alone stops at plain `me`, leaving the two identical-spelling sister cells inconsistent. Align the Erzya cell to `sʲelʲmʲe`, matching both Wiktionary and its own Moksha sibling.

---

### 4. kpv — heart — soft сь written `sʲ` where the project's own Komi cells use `ɕ`
- **File:** words/heart.js line 760
- **Current:** `["сьӧлӧм", "sʲɵlɵm"]`
- **Expected:** `["сьӧлӧм", "ɕɵlɵm"]`
- **Why:** Komi-Zyrian palatalized сь is the alveolo-palatal fricative [ɕ]; Wiktionary gives сьӧлӧм = /ˈɕɘlɘm/ ([ˈɕɘɫɘm]). The project already adopts `ɕ` for Komi soft sibilants elsewhere in this very column — `kpv` eat `["сёйны", "ɕojnɨ"]` (eat.js:753) and `kpv` moon `["тӧлысь", "tɵlɨɕ"]` (moon.js:766, final сь → `ɕ`). Only the heart cell falls back to `sʲ`, so the column is internally split on how it renders the same soft сь. (The ⟨ӧ⟩ = `ɵ` is correct per the #15-confirmed Komi vowel convention and is left untouched.) Use `ɕ` for consistency.

---

### 5. koi — heart — same сь→`sʲ` outlier in Komi-Permyak
- **File:** words/heart.js line 761
- **Current:** `["сьӧлӧм", "sʲɵlɵm"]`
- **Expected:** `["сьӧлӧм", "ɕɵlɵm"]`
- **Why:** The Komi-Permyak twin of #4, with the same soft сь = [ɕ]. It sits directly beside `kpv` `sʲɵlɵm` and shares the defect. Komi-Permyak phonology treats сь identically to Komi-Zyrian (Permic alveolo-palatal [ɕ]); rendering it `sʲ` here clashes with the `ɕ` used for the same letter in `kpv` eat (`ɕojnɨ`) and moon (`tɵlɨɕ`). Both Komi heart cells should read `ɕɵlɵm`.

---

### 6. koi — moon — word-final сь = `sʲ` disagrees with the `kpv` cell in the very same row
- **File:** words/moon.js line 767
- **Current:** `["тӧлісь", "tɵlisʲ"]`
- **Expected:** `["тӧлісь", "tɵliɕ"]`
- **Why:** The Komi-Permyak moon word ends in the same soft сь as its Komi-Zyrian neighbour `kpv` `["тӧлысь", "tɵlɨɕ"]` (moon.js:766), yet one row writes the final fricative `ɕ` and the other `sʲ`. Within a single concept's Permic block the two Komi varieties transcribe an identical word-final сь two different ways. Per the Permic [ɕ] value (and consistency with #4/#5), the Komi-Permyak cell should also end in `ɕ` → `tɵliɕ`.

---

### 7. mrj — thanks — IPA contains a word-boundary space the surface lacks
- **File:** words/thanks.js line 764
- **Current:** `["таусола", "tau sola"]`
- **Expected:** `["таусола", "tausola"]`
- **Why:** The surface form is a single orthographic token "таусола" (no space), but the IPA `tau sola` splits it into two phonological words. The dataset's convention (and the validator's surface↔IPA tracking) requires the IPA token-count to match the surface: contrast the sibling `mhr` `["салам лийже", "salam lijʒe"]` (hello.js:756), where a genuinely two-word surface correctly carries a two-word IPA. Here the single-word surface must map to single-word `tausola`. (If the intended Hill Mari form is in fact the phrase "тау сола", then it is the *surface* that needs the space — but as written the two fields disagree and the IPA is the field out of step.)

---

### 8. mrj — hello — IPA split into `pæræ næ` for a single-word surface
- **File:** words/hello.js line 757
- **Current:** `["пӓрӓнӓ", "pæræ næ"]`
- **Expected:** `["пӓрӓнӓ", "pærænæ"]`
- **Why:** The same defect as #7. The surface "пӓрӓнӓ" is one continuous token, but the IPA `pæræ næ` inserts a space before the final syllable, implying a word boundary that the orthography does not show. Hill Mari ⟨ӓ⟩ = /æ/ throughout (cf. `mrj` eye `сӹнзӓ` → `sʉnzæ`, eye.js:764), so the segments are right; only the stray space is wrong. Close it up to `pærænæ`.

---

### 9. se — eye — first /a/ transcribed with back `ɑ` against the North Saami column's front-`a` norm
- **File:** words/eye.js line 465
- **Current:** `["čalbmi", "tʃɑlpmi"]`
- **Expected:** `["čalbmi", "tʃalpmi"]`
- **Why:** The North Saami column overwhelmingly renders orthographic ⟨a⟩ with front `a`: `se` cat `bussá`→`pusːa`, eat `borrat`→`porːat`, fire `dolla`→`dolːa`, moon `mánnu`→`maːnːu`, water `čáhci`→`tʃaːhtsi`, tree `muorra`→`muɔrːa`. Only three cells use back `ɑ` for a plain /a/ — this one plus #10 and #11. Sammallahti (1998) describes North Saami /a/ as a single low vowel phoneme; the project standardized on `a`, and indeed the #94 closed review's own recommended `sme` transcription for this exact word is `čalbmi /ˈtʃalpmi/` with front `a`. The `ɑ` here is the outlier.

---

### 10. se — hand — back `ɑ` outlier in `giehta`
- **File:** words/hand.js line 465
- **Current:** `["giehta", "kiehtɑ"]`
- **Expected:** `["giehta", "kiehta"]`
- **Why:** Same issue as #9. The final /a/ of giehta is the same phoneme rendered `a` everywhere else in the `se` column (borrat→`porːat`, dolla→`dolːa`, etc.). The #94 closed review's recommended `sme` form is explicitly `giehta /ˈkiehta/` with front `a`. The preaspiration `h` (validated in #62) is fine; only the final-vowel symbol is inconsistent. Use `kiehta`.

---

### 11. se — one — back `ɑ` outlier in `okta`
- **File:** words/one.js line 471
- **Current:** `["okta", "oktɑ"]`
- **Expected:** `["okta", "okta"]`
- **Why:** The third member of the `se` back-`ɑ` cluster (#9, #10). The #94 closed review's recommended North Saami form is `okta /ˈokta/` with front `a`, matching the column-wide treatment of ⟨a⟩. Fixing #9–#11 leaves the entire `se` column using a single, consistent `a` for orthographic ⟨a⟩, as Sammallahti's phonemic analysis and the project's own majority practice require.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

- **131-1 (udm drink `jujɨnɨ`→`juɨnɨ`):** applied (applied by orchestrator this round). Spurious epenthetic /j/ in юыны; ⟨ю⟩ already supplies the only /j/.
- **131-2 (udm eat `sijɨnɨ`→`siɨnɨ`):** applied (applied by orchestrator this round). Same epenthetic-/j/ defect across the /i.ɨ/ hiatus in сиыны.
- **131-3 (myv eye `sʲelʲme`→`sʲelʲmʲe`):** applied (applied by orchestrator this round). Final ме palatalized before /e/; matches mdf twin (eye.js:766).
- **131-4 (kpv heart `sʲɵlɵm`→`ɕɵlɵm`):** applied (applied by orchestrator this round). Komi soft сь = [ɕ]; column uses ɕ in eat/moon (`ɕojnɨ`, `tɵlɨɕ`).
- **131-5 (koi heart `sʲɵlɵm`→`ɕɵlɵm`):** applied (applied by orchestrator this round). Komi-Permyak twin of 131-4.
- **131-6 (koi moon `tɵlisʲ`→`tɵliɕ`):** applied (applied by orchestrator this round). Matches kpv neighbour `tɵlɨɕ` (moon.js:766).
- **131-7 (mrj thanks `tau sola`→`tausola`):** applied (applied by orchestrator this round). Single-token surface таусола must map to single-token IPA.
- **131-8 (mrj hello `pæræ næ`→`pærænæ`):** applied (applied by orchestrator this round). Stray word-boundary space removed.
- **131-9 (se eye `tʃɑlpmi`→`tʃalpmi`):** applied (applied by orchestrator this round). Front-`a` is the se column norm; back `ɑ` was the n=3 outlier (with 10/11).
- **131-10 (se hand `kiehtɑ`→`kiehta`):** applied (applied by orchestrator this round).
- **131-11 (se one `oktɑ`→`okta`):** applied (applied by orchestrator this round).

## Reviewer round-2 response (再評価 round-2)

I verified all 11 claimed fixes against the live `words/*.js` data. Every one is present exactly as recommended:

- **131-1 ✓** drink.js:762 `udm: ["юыны", "juɨnɨ"]` — epenthetic /j/ removed.
- **131-2 ✓** eat.js:755 `udm: ["сиыны", "siɨnɨ"]` — epenthetic /j/ removed.
- **131-3 ✓** eye.js:765 `myv: ["сельме", "sʲelʲmʲe"]` — now matches the mdf twin (eye.js:766) and Wiktionary's palatalized final /mʲ/.
- **131-4 ✓** heart.js:760 `kpv: ["сьӧлӧм", "ɕɵlɵm"]` — soft сь → ɕ, consistent with eat/moon Komi cells.
- **131-5 ✓** heart.js:761 `koi: ["сьӧлӧм", "ɕɵlɵm"]` — Komi-Permyak twin aligned.
- **131-6 ✓** moon.js:767 `koi: ["тӧлісь", "tɵliɕ"]` — final сь → ɕ, matching the kpv neighbour `tɵlɨɕ` (moon.js:766).
- **131-7 ✓** thanks.js:764 `mrj: ["таусола", "tausola"]` — word-boundary space closed; single-token surface now maps to single-token IPA.
- **131-8 ✓** hello.js:757 `mrj: ["пӓрӓнӓ", "pærænæ"]` — stray space removed.
- **131-9 ✓** eye.js:465 `se: ["čalbmi", "tʃalpmi"]` — back ɑ → front a, matching the se column norm.
- **131-10 ✓** hand.js:465 `se: ["giehta", "kiehta"]` — back ɑ → front a.
- **131-11 ✓** one.js:471 `se: ["okta", "okta"]` — back ɑ → front a; the se column now uses a single consistent `a` for orthographic ⟨a⟩.

No new issues found during verification. The Permic ɕ normalization, the Erzya/Moksha twin alignment, the Mari surface↔IPA token-count fixes, and the North Saami front-`a` standardization are all sound and now internally consistent across their columns.

### Scorecard
- Accepted (✓): 11 / 11
- Partial (△): 0
- Rejected (✗): 0
- New issues: 0

**File status: CLOSED** — nothing left to address.
