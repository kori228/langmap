# Wordmap review #126 — Philippine languages round-2 auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a Philippine-languages phonologist returning for the round-2 audit of the columns first surveyed in review #48 (Tagalog/Cebuano/Ilocano and the wider Central-Philippine/Mindanao set). My working references are Schachter & Otanes (1972) *Tagalog Reference Grammar* for Tagalog stress and the intervocalic/coda glottal stop, Rubino (2000) *Ilocano Dictionary and Grammar* for Ilocano vowel-sequence and reduplicative-length rules, Benton (1971) *Pangasinan Reference Grammar* and the *JIPA* illustration of Tausug (Suluk) for the small-vowel inventories, plus the live `docs/words/CONTRIBUTING.md` ("Use IPA notation, not the language's native romanization") and `docs/words/LANG_CODES.md`. Before writing a line I grepped the live `words/*.js` to fix the actual remit: the Philippine codes present are `tl`, `ceb`, `ilo`, `hil`, `war`, `bik`, `pam`, `pag`, `mrw`, `tsg`, `cbk` (Chavacano), plus the script row `otl` — there is no `fil`, `krj`, `hnn` or `bcl`. I deliberately do **not** re-open anything held in #48: the corpus-wide *tl/ilo never-mark-stress-except-on-the-glottal-initial-vowel* convention, the `hil`/`war` phonemic final /o/→[ɔ] convention (internally coherent, won't-fix), the `bik` patient-voice citation convention (`kakanon`/`inumon`), the `cbk` *comê/bebê* contested orthography, or the `ceb maayo` hiatus item (which is in fact transcribed correctly with `ʔ`). The three `bik` final-/o/ outliers normalized in #48 are confirmed fixed (`kalajo`/`kamot`/`kahoj`). What survived are sharper, single-cell defects: the corpus marks intervocalic and coda glottal stops faithfully (`paɡʔibiɡ`, `maʔajo`, `kaʔɔn`, `taɡipusɔʔɔn`, `paɡkamoʔot`) — so the handful of cells that *drop* the very same glottal in identical environments are local errors, not convention. Every Current value below was verified verbatim against the live file on the review date with line numbers.

---

## Issues found

### 1. `tl` — eat — *kumain* missing the intervocalic glottal stop and stress
- **File:** words/eat.js line 119
- **Current:** `["kumain", "kumain"]`
- **Expected:** `["kumain", "kumaˈʔin"]`
- **Why:** The root of *kumain* is *kain* 'eat', which Schachter & Otanes (1972) and every reference transcribe `[ˈka.ʔin]` — a disyllable with an obligatory intervocalic glottal stop between *ka* and *in* (the /a.i/ sequence is never a plain vowel cluster in Tagalog). The infixed actor-voice form *k‹um›ain* keeps that glottal: `/ku.ma.ʔin/`. The current IPA `kumain` both (a) drops the glottal stop and (b) lacks the penultimate stress mark that the dataset's own Tagalog convention places on the stressed vowel before a coda glottal. The corpus already marks exactly this segment in the sibling row `tl love` `pag-ibig → paɡʔibiɡ` (love.js:119), and across the family in `ceb maayo → maʔajo`, `hil kaon → kaʔɔn`, `tsg kaun → kaʔun`. This is the single Tagalog cell where a phonemic intervocalic /ʔ/ went untranscribed.

---

### 2. `ceb` — eat — *kaon* missing the intervocalic glottal stop
- **File:** words/eat.js line 200
- **Current:** `["kaon", "kaon"]`
- **Expected:** `["kaon", "kaʔon"]`
- **Why:** Cebuano *kaon* 'eat' is `/kaˈʔon/`: the /a.o/ across the syllable boundary is separated by a phonemic glottal stop. This is a *within-language* inconsistency, not a convention: the very same `ceb` column transcribes the identical V+V environment correctly in `ceb good` `maayo → maʔajo` (good.js:200). The Cebuano column otherwise omits only *word-initial* ʔ (a coherent choice — `usa→usa`, `iro→iɾo`, `inom→inom`, `adlaw→adlaw`), but *kaon* is medial, and the cross-sibling evidence is unanimous: `hil kaon → kaʔɔn` (eat.js:568), `war kaon → kaʔon` (eat.js:711), `tsg kaun → kaʔun` (eat.js:867). `kaon` is the lone outlier that drops it.

---

### 3. `hil` — sun — *adlaw* missing the word-initial glottal stop
- **File:** words/sun.js line 581
- **Current:** `["adlaw", "adlaw"]`
- **Expected:** `["adlaw", "ʔadlaw"]`
- **Why:** Unlike Cebuano/Maranao, the Hiligaynon column in this corpus **does** mark the phonemic word-initial glottal stop on every vowel-initial entry: `ido → ʔidɔ` (dog.js:575), `inom → ʔinɔm` (drink.js:575), `isa → ʔisa` (one.js:581). It also marks medial ʔ (`maayo → maʔajɔ`, `kaon → kaʔɔn`, `tagipusoon → taɡipusɔʔɔn`). The single vowel-initial `hil` entry that lacks the onset ʔ is `adlaw`. Hiligaynon /a/-initial words begin with /ʔ/ just as the other three do; this is a true intra-language inconsistency, so `adlaw → ʔadlaw`. (The final /a/ is unaffected by the hil final-/o/→[ɔ] convention, so no other change.)

---

### 4. `war` — sun — *adlaw* missing the word-initial glottal stop
- **File:** words/sun.js line 724
- **Current:** `["adlaw", "adlaw"]`
- **Expected:** `["adlaw", "ʔadlaw"]`
- **Why:** Exactly parallel to issue 3. The Waray column marks word-initial ʔ on its other vowel-initial entries — `usa → ʔusa` (one.js:724), `ayam → ˈʔajam` (dog.js:718), `inom → ʔinɔm` (drink.js:718) — and medial ʔ in `maupay → maʔupaj` (good.js:718), `kaon → kaʔon` (eat.js:711). `adlaw` is the one vowel-initial `war` cell without the onset glottal it phonemically carries; bring it into line as `ʔadlaw`.

---

### 5. `tsg` — tree — *kahuy* transcribed with a spurious /o/ (Tausug has no /o/)
- **File:** words/tree.js line 874
- **Current:** `["kahuy", "kahoj"]`
- **Expected:** `["kahuy", "kahuj"]`
- **Why:** Tausug (Suluk) has a three-vowel phonemic inventory /a i u/ — the *JIPA* illustration of Tausug states explicitly that "the difference between o and u is not distinctive"; there is no phonemic /o/. The surface is spelled with ⟨u⟩ (*kahuy*), and the Tausug column otherwise faithfully keeps /u/ everywhere: `kayu → kaju` (fire.js:880), `minum → minum` (drink.js:874), `magsukul → maɡsukul` (thanks.js:874), `pusuꞌ → pusuʔ` (heart.js:874), `kaun → kaʔun`. The IPA `kahoj` is the lone cell that lowers the surface ⟨u⟩ to a non-phonemic [o]; it should read `kahuj`, matching both the orthography and the rest of the column.

---

### 6. `pag` — sun — *agew* central vowel rendered as front /e/
- **File:** words/sun.js line 993
- **Current:** `["agew", "ˈʔaɡew"]`
- **Expected:** `["agew", "ˈʔaɡəw"]`
- **Why:** In the native Pangasinan four-vowel system (/a/, /ə/, /i/, /o~ʊ/; Benton 1971), orthographic ⟨e⟩ does **not** stand for the front mid /e/ of Spanish loans — it is the central vowel. Wiktionary transcribes Pangasinan *agew* 'sun, day' as `/ˈaɡɨw/ [ˈa.ɡɨʊ̯]` (a near-close central vowel); the standard phonemic analysis writes it /ə/. Either way the dataset's plain front /e/ is the one quality the vowel is **not**. The corpus already uses `ə` freely (e.g. in the Northern-Luzon and other columns), so `ˈʔaɡəw` is the correct rendering (narrow [ˈʔaɡɨw] also acceptable). See issues 7–9 for the rest of the affected cells.

---

### 7. `pag` — one — *sakey* central vowel rendered as front /e/
- **File:** words/one.js line 993
- **Current:** `["sakey", "saˈkej"]`
- **Expected:** `["sakey", "saˈkəj"]`
- **Why:** Same defect as issue 6: orthographic ⟨e⟩ in native Pangasinan *sakey* 'one' is the central vowel /ə/ (~[ɨ]), not front /e/. *sakey* is a core inherited numeral, not a Spanish loan, so the schwa analysis applies; the diphthong-final is /əj/, giving `saˈkəj`.

---

### 8. `pag` — tree — *kiew* central vowel rendered as front /e/
- **File:** words/tree.js line 987
- **Current:** `["kiew", "ˈkiew"]`
- **Expected:** `["kiew", "ˈkiəw"]`
- **Why:** Same defect as issues 6–7. Pangasinan *kiew* 'tree' has the native central ⟨e⟩ = /ə/, so the rime is /iəw/: `ˈkiəw`. The plain front /e/ in `ˈkiew` mis-states the vowel quality of the inherited word.

---

### 9. `pag` — hello — *maabig ya agew*: embedded *agew* central vowel rendered as front /e/
- **File:** words/hello.js line 980
- **Current:** `["maabig ya agew", "maˈʔabiɡ ja ˈʔaɡew"]`
- **Expected:** `["maabig ya agew", "maˈʔabiɡ ja ˈʔaɡəw"]`
- **Why:** The greeting embeds the same lexeme audited in issue 6 (*agew* 'day'); for internal consistency the central-vowel correction must travel here too: `ˈʔaɡew → ˈʔaɡəw`. (The rest of the phrase — the /a.a/ glottal in `maˈʔabiɡ` and the /j/ onset of `ja` — is already transcribed correctly.)

---

### 10. `ilo` — good — *nasayaat*: identical-vowel sequence is a glottal hiatus, not phonemic length
- **File:** words/good.js line 201
- **Current:** `["nasayaat", "nasajaːt"]`
- **Expected:** `["nasayaat", "nasajaʔat"]`
- **Why:** Rubino (2000) and the standard Ilocano phonology rule (also stated in the MTB-MLE orthography literature) is that "a sequence of vowels is pronounced with an intervening glottal stop," with the sole exceptions being /i+V/ and /u,o+V/ (which take a glide). The sequence here is /a+a/ — outside the exception set — so *na-sayaat* is `/nasajaˈʔat/`, with a glottal stop, not a long [aː]. Compensatory vowel-lengthening in Ilocano arises specifically when an underlying /ʔ/ is lost under reduplication; *sayaat* is not a reduplicated form, so that rule does not license [aː] here. The corpus marks exactly this V+V→ʔ pattern across the family (`tl paɡʔibiɡ`, `ceb maʔajo`, `hil maʔajɔ`), making `aː` the anomaly.

---

### 11. `ilo` — hello — *kablaaw*: identical-vowel sequence is a glottal hiatus, not phonemic length
- **File:** words/hello.js line 201
- **Current:** `["kablaaw", "kablaːw"]`
- **Expected:** `["kablaaw", "kablaʔaw"]`
- **Why:** Same rule as issue 10. *kablaaw* 'greeting' has an /a+a/ sequence (*kab-la-aw*) outside the /i+V/, /u,o+V/ glide exceptions, so it is realized with an intervening glottal stop: `/kablaˈʔaw/`. The `aː` length notation again over-applies the reduplicative compensatory-lengthening rule to a non-reduplicated lexeme (Rubino 2000). Note the standard spelling leaves the medial glottal unwritten (Ilocano would otherwise hyphenate, *kabla-aw*), which is why the surface shows bare ⟨aa⟩ — but the IPA must restore the /ʔ/.

---

### 12. `war` — hello — phrase-internal *aga* missing its word-initial glottal stop
- **File:** words/hello.js line 711
- **Current:** `["maupay nga aga", "maʔupaj ŋa aɡa"]`
- **Expected:** `["maupay nga aga", "maʔupaj ŋa ʔaɡa"]`
- **Why:** Within the same phrase the corpus already marks the morpheme-internal glottal in `maʔupaj`, and the Waray column elsewhere consistently gives vowel-initial words an onset /ʔ/ (`usa → ʔusa`, `ayam → ˈʔajam`, `inom → ʔinɔm`). The standalone Waray word *aga* 'morning' is /ʔaɡa/; after the ligature *nga* it remains glottal-initial (a glottal stop, not vowel-to-vowel liaison, separates *nga* and *aga*). The transcription drops it as bare `aɡa`, so `ʔaɡa` restores the onset to match the column's own convention. (Lower-confidence than 1–11 because some phrase-level fast-speech analyses elide it; flagged for the maintainer's call.)

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

All 12 findings verified verbatim and applied. Each is a within-language inconsistency or clear quality error with strong intra-column and cross-sibling anchors.

1. (126-1) tl eat kumain line 119: `kumain` → `kumaˈʔin`. Intervocalic /ʔ/ + penult stress; anchor tl love `paɡʔibiɡ` (Schachter & Otanes 1972). (applied by orchestrator this round)
2. (126-2) ceb eat kaon line 200: `kaon` → `kaʔon`. Medial /ʔ/; anchor ceb good `maʔajo`; siblings hil/war/tsg all `kaʔ-`. (applied by orchestrator this round)
3. (126-3) hil sun adlaw line 581: `adlaw` → `ʔadlaw`. Word-initial /ʔ/; hil marks it on ido/inom/isa. (applied by orchestrator this round)
4. (126-4) war sun adlaw line 724: `adlaw` → `ʔadlaw`. Parallel to #3; war marks usa/ayam/inom. (applied by orchestrator this round)
5. (126-5) tsg tree kahuy line 874: `kahoj` → `kahuj`. Tausug 3-vowel /a i u/, no /o/; surface ⟨u⟩ (JIPA Tausug illustration). (applied by orchestrator this round)
6. (126-6) pag sun agew line 993: `ˈʔaɡew` → `ˈʔaɡəw`. Native ⟨e⟩ = central /ə/~/ɨ/; Wikipedia confirms Pangasinan /ɨ/ native, /ɛ/ loan-only (Benton 1971). (applied by orchestrator this round)
7. (126-7) pag one sakey line 993: `saˈkej` → `saˈkəj`. Same; inherited numeral. (applied by orchestrator this round)
8. (126-8) pag tree kiew line 987: `ˈkiew` → `ˈkiəw`. Same. (applied by orchestrator this round)
9. (126-9) pag hello maabig ya agew line 980: `ˈʔaɡew` → `ˈʔaɡəw` (embedded agew). (applied by orchestrator this round)
10. (126-10) ilo good nasayaat line 201: `nasajaːt` → `nasajaʔat`. /a+a/ hiatus → glottal, not length (Rubino 2000). (applied by orchestrator this round)
11. (126-11) ilo hello kablaaw line 201: `kablaːw` → `kablaʔaw`. Same rule. (applied by orchestrator this round)
12. (126-12) war hello maupay nga aga line 711: `ŋa aɡa` → `ŋa ʔaɡa`. Word-initial /ʔ/ on aga; consistent with war convention. Reviewer flagged lower-confidence (fast-speech elision possible), but the column convention and the citation form /ʔaɡa/ support restoring the onset. (applied by orchestrator this round)

Remaining open: none.

## Reviewer round-2 response (再評価 round-2)

I verified all 12 claimed fixes verbatim against the live `words/*.js` files (grep on the actual `<code>:` keys, not stale line numbers) and re-checked every cross-sibling and intra-column anchor I cited in round-1. Every fix is present exactly as claimed and every anchor holds.

Per-item:
1. ✓ `tl eat` (eat.js:119) = `["kumain", "kumaˈʔin"]`. Intervocalic /ʔ/ + penult stress restored; anchor `tl love → paɡʔibiɡ` (love.js:119) confirmed live.
2. ✓ `ceb eat` (eat.js:200) = `["kaon", "kaʔon"]`. Medial /ʔ/; anchor `ceb good → maʔajo` (good.js:200) confirmed; siblings `hil/war/tsg` all `kaʔ-` confirmed.
3. ✓ `hil sun` (sun.js:581) = `["adlaw", "ʔadlaw"]`. Word-initial /ʔ/; anchors `ʔidɔ/ʔinɔm/ʔisa` confirmed live.
4. ✓ `war sun` (sun.js:724) = `["adlaw", "ʔadlaw"]`. Anchors `ʔusa/ˈʔajam/ʔinɔm` confirmed.
5. ✓ `tsg tree` (tree.js:874) = `["kahuy", "kahuj"]`. Spurious [o] removed; Tausug 3-vowel inventory; column anchors `kaju/minum/pusuʔ` confirmed.
6. ✓ `pag sun` (sun.js:993) = `["agew", "ˈʔaɡəw"]`. Front /e/ → central /ə/.
7. ✓ `pag one` (one.js:993) = `["sakey", "saˈkəj"]`. Inherited numeral; central vowel.
8. ✓ `pag tree` (tree.js:987) = `["kiew", "ˈkiəw"]`.
9. ✓ `pag hello` (hello.js:980) = `["maabig ya agew", "maˈʔabiɡ ja ˈʔaɡəw"]`. Embedded *agew* brought into line with #6.
10. ✓ `ilo good` (good.js:201) = `["nasayaat", "nasajaʔat"]`. /a+a/ hiatus → glottal, not [aː] (Rubino 2000).
11. ✓ `ilo hello` (hello.js:201) = `["kablaaw", "kablaʔaw"]`. Same rule.
12. ✓ `war hello` (hello.js:711) = `["maupay nga aga", "maʔupaj ŋa ʔaɡa"]`. Onset /ʔ/ on *aga* restored; this was my own lower-confidence item (fast-speech elision possible), but the citation-form /ʔaɡa/ and the war column convention make restoration the defensible choice, and I accept it.

New issues: none. During verification I checked no other Philippine cell for a regression and found none.

Scorecard: 12/12 accepted (✓). 0 partial, 0 rejected, 0 new.

All flagged defects were single-cell errors against the corpus's own glottal-stop and vowel-quality conventions; all are now fixed-and-verified in live data. Nothing remains for the dev team.

**File status: CLOSED** — nothing left to address.
