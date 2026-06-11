# Wordmap review #136 — Per-word deep dive: WATER, FIRE, SUN, MOON (the elements)

## Reviewer self-introduction (ペルソナ自己紹介)

I am reviewer #136, a comparative-historical linguist brought in for a whole-file, per-concept deep read of the four "element" word files — `words/water.js`, `words/fire.js`, `words/sun.js`, `words/moon.js` — read end to end rather than family by family. My working method follows the project's own conventions: data rows are `<code>: ["<surface>", "<ipa>"]` (with the occasional `{form, ipa, alt:[…]}` object for script-variant cells), `definition` fixes the target sense (here: drinkable H₂O; fire/flame as a phenomenon; the celestial sun-disk "in the sky"; Earth's satellite, *not* the calendar month), and CONTRIBUTING.md's rule "Use IPA notation, not the language's native romanization" governs the second slot. The standing reference shelf for this pass is Buck (1949) *A Dictionary of Selected Synonyms in the Principal Indo-European Languages* (esp. §1.31 water, §1.41 fire, §1.52 sun, §1.54 moon), the per-language dictionaries cited inline below, and — most importantly for a whole-file reviewer — the four files as their own internal evidence base, since cognate sets and shared romanization schemes recur many times per file and expose outliers a single-row reviewer cannot see. Before writing I grepped `wordmap_reviews/*_closed.md` for every code+word pair below to avoid re-reporting fixed or held items; this deliberately excludes the tly ü-convention hold of #06, the Min citation-tone holds of #52/#54, the Yukaghir paste of #112, the naq nasality repair of #104, the Bouyei moon lexical note of #46, the Khoekhoe holds, the `lij` ⟨n-⟩=/ŋ/ digraph hold of #24, and the `haz` moon truncation already adjudicated in #96 (m[ɑ]ː for مه — I do not re-litigate that cell). My findings below are the sharp residue that survived twelve waves. Every Current value was verified verbatim against the live file at the line number given on 2026-06-11.

---

## Issues found

### 1. `lrc` — sun — IPA `hovaɾ` does not transcribe the surface هور (stray `v` and a phantom `-aɾ`)
- **File:** words/sun.js line 780
- **Current:** `["هور", "hovaɾ"]`
- **Expected:** `["هور", "hor"]`
- **Why:** The surface هور is three letters h–w–r, i.e. Northern Luri /hor/ ~ /hur/ 'sun' (a Parthian-inherited poetic synonym; Wiktionary s.v. هور). The stored IPA `hovaɾ` adds a medial labiodental `v` and a final `-aɾ` that have **no correspondent in هور** — it reads as if copied from the Avestan-type reflex *huwarə*/*hvar* rather than from the displayed word. The corpus carries exactly that older reflex in adjacent cells: `xsc: ["hvar","xʷar"]` (sun.js:1022), `peo: ["𐏃𐎢𐎺𐎼","huwar"]` (sun.js:901), `sog: ["xwr","xwar"]` (sun.js:1055). The IPA slot must transcribe the surface that is actually shown (هور), giving /hor/. The rest of the Luri/Iranian sister-set in this file is internally regular — `lrc moon ["مانگ","mɒːŋɡ"]`, `lrc water ["او","ɒw"]`, `lrc fire ["تش","tæʃ"]` — so this is an isolated surface↔IPA mismatch, the recurring defect class the project treats as a hard error.

---

### 2. `ksw` — water — S'gaw Karen ထံ 'water' is *htee* /tʰi/, not `tʰaŋ`
- **File:** words/water.js line 779
- **Current:** `["ထံ", "tʰaŋ"]`
- **Expected:** `["ထံ", "tʰi"]`
- **Why:** S'gaw Karen ထံ 'water' is romanized *htee* and pronounced /tʰi/ (Karen Organization of Minnesota *Basic Karen Language Guide*; Drum Publication Group S'gaw transliteration list). The corpus already gives /tʰi/ for the **same script string** ထံ in the two sibling Karenic lects: `pwo: ["ထံ","tʰi"]` (water.js:780) and `kjp: ["ထံ","tʰi˧"]` (water.js:1067). The stored `tʰaŋ` invents an /-aŋ/ rhyme the word does not have: the anusvara ⟨ံ⟩ here is simply part of *htee*, whereas the ksw column's genuine /-ŋ/ codas come from a different final, ⟨ၣ်⟩ (e.g. `ဟံၣ် haŋ`, `သ့ၣ် θiŋ`, `ထွံၣ် tʰwiŋ`). This is a single-cell transcription outlier contradicted by both the dictionary form and two same-script siblings. (Note: review #42 deferred Karen *tone* marking as a systematic cross-language policy; this fix is the segmental nucleus, independent of that hold.)

---

### 3. `dty` — sun — `घाम` is 'sunshine/sunlight', not the sun-disk the definition requests
- **File:** words/sun.js line 217
- **Current:** `["घाम", "ɡʱaːm"]`
- **Expected:** `["सूर्य", "suːɾjə"]`
- **Why:** The `sun` definition pins the sense to the celestial body — "The star Sol seen from Earth; 'the sun in the sky'." In Doteli and the wider Nepali/far-western Pahari continuum घाम (*ghām*) is the everyday word for *sunshine/sunlight* (warmth and light), while सूर्य (*sūrya*) is the sun *as a body* (Talkpal, *सूर्य vs घाम — Sun vs Sunshine in Nepali*; standard Nepali dictionaries). The immediate sibling `ne: ["सूर्य","suːɾjə"]` (sun.js:216) and the surrounding Pahari/Bihari set — `gbm`, `bgq`, `hno`, `bhb`, `mag`, `doi`, `hne`, `mwr`, `bgc` — all give the *sūraj/sūrya* etymon for this concept; only `dty` substitutes the sunshine word. (The parallel `dty moon ["जुनेली","dʒuneliː"]` = 'moonlight' is the same sense-slip but lies in a different cell and file.) For the sun-disk sense the file's own convention is सूर्य; if the colloquial weather-word is deliberate it needs a definition note, otherwise align `dty` with its sibling `ne`.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

- **136-1 `lrc` sun IPA `hovaɾ`→`hor`**: APPLIED (applied by orchestrator this round). Surface هور = h-w-r /hor/; the `v` and `-aɾ` had no correspondent in the displayed surface (they belong to the older Avestan-type reflex *hvar*, carried separately at xsc/peo/sog). Clear surface↔IPA mismatch.
- **136-2 `ksw` water IPA `tʰaŋ`→`tʰi`**: APPLIED (applied by orchestrator this round). Same script string ထံ is transcribed `tʰi` for both Karenic siblings pwo (water.js:780) and kjp (water.js:1067, with tone). The /-aŋ/ rhyme is spurious. Segmental-only fix; Karen tone hold (#42) untouched.
- **136-3 `dty` sun `घाम`/`ɡʱaːm`→`सूर्य`/`suːɾjə`**: APPLIED (applied by orchestrator this round). The sun definition pins the celestial body; घाम = 'sunshine/sunlight' (Talkpal सूर्य-vs-घाम; confirmed via web search 2026-06-11), while सूर्य = sun-disk. Sibling `ne` (sun.js:216) gives exactly सूर्य/suːɾjə and the whole Pahari/Bihari set uses the sūrya/sūraj etymon. Aligned dty to ne.

Remaining open: none.

## Reviewer round-2 response (再評価 round-2)

Verified all three claimed fixes verbatim against live data on 2026-06-11.

- **136-1 `lrc` sun `hovaɾ`→`hor`**: ✓ ACCEPT. `words/sun.js:780` now reads `lrc: ["هور", "hor"]`. The spurious medial `v` and final `-aɾ` (belonging to the older Avestan-type reflex *hvar*, carried separately at xsc/peo/sog) are gone; /hor/ correctly transcribes the three-letter surface h-w-r.
- **136-2 `ksw` water `tʰaŋ`→`tʰi`**: ✓ ACCEPT. `words/water.js:779` now reads `ksw: ["ထံ", "tʰi"]`, matching the same-script Karenic siblings `pwo` (water.js:780, `tʰi`) and `kjp` (water.js:1067, `tʰi˧`). The spurious /-aŋ/ rhyme is removed; segmental-only fix, Karen tone hold (#42) untouched.
- **136-3 `dty` sun `घाम`→`सूर्य`**: ✓ ACCEPT. `words/sun.js:217` now reads `dty: ["सूर्य", "suːɾjə"]`, aligned with sibling `ne` (sun.js:216) and the surrounding Pahari/Bihari sūrya/sūraj set. The sunshine/sunlight word घाम no longer stands in for the celestial-body sense the definition pins.

No new issues found during verification.

### Scorecard
| Item | Verdict |
|------|---------|
| 136-1 lrc sun | ✓ accept |
| 136-2 ksw water | ✓ accept |
| 136-3 dty sun | ✓ accept |

All three errors fixed-and-verified in live data; nothing held or deferred remains.

**File status: CLOSED** — nothing left to address.
