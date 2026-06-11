# Wordmap review #106 — Gallo-Romance & French lects round-2 auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I return for round 2 as the Gallo-Romance specialist who filed reviews #02 and #86, now auditing what survived the first hundred reviews across `fr`/`fr_qc`/`fr_be`/`fr_ch`/`fr_af`/`fr_class`/`fro`, `oc`, `ca`, `rm`, `wa`, `frp`, `co`, `fra_jer`, and the French-lexifier creoles (`ht`, `gcf`, `mfe`, `rcf`) that no other persona owns. My working library is Walker (1984) *The Pronunciation of Canadian French* (the high-vowel laxing and lengthening environments), Wheeler (2005) *The Phonology of Catalan* plus GDLC/DIEC2 for the open/closed mid-vowel lexicon, Sumien (2006) *La standardisation pluricentrique de l'occitan* for dialect-layer questions, Pope (1934) *From Latin to Modern French* for `fro`/`fr_class` periodization, Valdman (2007) *Haitian Creole–English Bilingual Dictionary* and the 1979 IPN official orthography for `ht`, Carpooran (2011) *Diksioner Morisien* and the 2011 *Lortografi Kreol Morisien* for `mfe`, Marchetti (1974) *Intricciate è cambiarine* for the Corsican `chj`/`ghj` palatals, and the Rifondou walon orthographic conventions for `wa`. Before writing anything I re-grepped every code in my remit in the live `words/*.js`, re-read `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md`, and checked every candidate against the adjudications in `wordmap_reviews/*_closed.md` — in particular I do **not** re-litigate the `oc` Gascon-flavour hold (#02/#25), the `ca amor` rhotic decision (#25), the `rm` mixed-idiom report (#94), or the duplicated `xag…zh_xa` block (#90). What remains below are sharp residues: rule environments misapplied (Quebec laxing in an open syllable), single-segment quality errors hiding behind correct surfaces, and two creole rows whose IPA contradicts the very orthography conventions the corpus itself applies one line away.

---

## Issues found

### 1. `fr_qc` — thanks — Quebec high-vowel laxing misapplied in a word-final OPEN syllable
- **File:** words/thanks.js line 494
- **Current:** `["merci", "mɛʁsɪ"]`
- **Expected:** `["merci", "mɛʁsi"]`
- **Why:** Laurentian laxing of /i y u/ → [ɪ ʏ ʊ] operates in **closed** syllables checked by a non-lengthening consonant (Walker 1984 §3.2; Côté 2012): *six* [sɪs], *lune* [lʏn] — but word-final open syllables keep the tense vowel: *si* [si], *merci* [mɛʁsi]. The final syllable of *merci* is open (/si/#), so [ɪ] is an over-application of the rule. Note carefully: closed review #72 cited this very row as "precedent" when (correctly) fixing `fr_qc` moon `lyn` → `lʏn` (`moon.js` L500, a genuine closed-syllable environment) — but the `merci` row itself was never audited, and the precedent inverts the rule's environment. Wiktionary lists no lax-vowel Canadian variant for *merci* either. The fix makes `fr_qc` thanks identical to `fr_be`/`fr_ch` (L496–497 `mɛʁsi`), which is simply correct here: *merci* offers no environment for any Quebec feature (no high vowel in closed syllable, no /t,d/+/i,y/ assibilation site, no lengthening consonant). The #72 *lune* fix is unaffected.

---

### 2. `ca` — dog — *gos* has a CLOSED stressed /o/, not open /ɔ/
- **File:** words/dog.js line 305
- **Current:** `["gos", "ɡɔs"]`
- **Expected:** `["gos", "ɡos"]`
- **Why:** Central/Eastern Catalan *gos* 'dog' is [ˈɡos] with the closed mid vowel — so given for Balearic, Central, Valencian and Northwestern alike (Wiktionary s.v. *gos*; GDLC `[gós]`); the open/closed contrast is lexical and unpredictable from spelling (Wheeler 2005, ch. 2). The corpus's other `ca` tonic mid-vowels are all correctly open where they should be — `bo` `bɔ` (good.js:305), `foc` `fɔk` (fire.js:311), `sol` `sɔl` (sun.js:311), `cor` `kɔr` (heart.js:305) — which makes `gos` the lone quality error. Closed review #86 (my round 1) touched this row only for vowel *reduction* in tonic monosyllables, not for the o/ɔ quality, so this is unadjudicated. IPA-only fix; per the adjudicated `ca` convention (#25 closing notes) no stress mark is added.

---

### 3. `ht` — cat — final /t/ of *chat* is pronounced in Haitian Creole; current IPA is a copy of French
- **File:** words/cat.js line 321
- **Current:** `["chat", "ʃa"]`
- **Expected:** `["chat", "ʃat"]`
- **Why:** The official Haitian Creole orthography (IPN 1979) is strictly phonemic — every written consonant is pronounced, and silent French finals are simply not written (cf. the corpus's own `ht` rows *bonjou* `bɔ̃ʒu` hello.js:321, *dife* fire.js:327, *dlo* water.js:328, where French final consonants/-r are dropped in BOTH spelling and IPA). The spelling ⟨chat⟩ therefore entails [ʃat] (Valdman 2007 s.v. *chat*); a pronunciation [ʃa] would be spelled *cha*. Sibling creoles in the same file confirm the lexifier's feminine-source final stop: `gcf` `["chat", "ʃat"]` (cat.js:931 — this exact value was verified and endorsed in a closed adjudication), `rcf` `["shat", "ʃat"]` (cat.js:929), `mfe` `["lisat", "lisat"]` (cat.js:928). The `ht` row alone reproduces Metropolitan French [ʃa].

---

### 4. `ht` — moon — *lalin* is [lalin]: orthographic ⟨in⟩ is oral /i/ + /n/, not a nasal vowel (re-opens #50 Issue 11, whose hold rested on a false premise)
- **File:** words/moon.js line 327
- **Current:** `["lalin", "lalɛ̃"]`
- **Expected:** `["lalin", "lalin"]`
- **Why:** In the IPN orthography the nasal-vowel graphemes are exactly ⟨an, en, on⟩ (= /ã ɛ̃ ɔ̃/); ⟨in⟩ spells oral /i/ followed by consonantal /n/ (*machin* [maʃin], *lalin* [lalin]). Wiktionary gives *lalin* /la.lin/; Valdman (2007) likewise. The corpus itself encodes this convention in the SAME file: `gcf` `["lalin", "lalin"]` (moon.js:937) and `mfe` `["lalinn", "lalin"]` (moon.js:934) — only the `ht` row carries a nasal [ɛ̃]. I am aware closed review #50 (Issue 11) held this as a "low-severity note": that hold was based on the reviewer's claim that "orthographically *in* … is /ɛ̃/ in HC phonology", which is factually wrong (that grapheme is ⟨en⟩), and the write-up was self-contradictory ("expected /lalɛ̃/ vs. correct /lalɛ̃/"). No correct expected value was ever weighed, so the value-level question was never genuinely adjudicated. With two byte-level sibling proofs and two dictionary sources, this is a clear local error: [lalɛ̃] would correspond to a spelling **lalen*.

---

### 5. `ht` — tree — *pyebwa*: ⟨e⟩ is /e/, ⟨è⟩ is /ɛ/
- **File:** words/tree.js line 321
- **Current:** `["pyebwa", "pjɛbwa"]`
- **Expected:** `["pyebwa", "pjebwa"]`
- **Why:** Same phonemic-orthography logic: IPN ⟨e⟩ = /e/, ⟨è⟩ = /ɛ/ (cf. the corpus's own `ht` *solèy* `sɔlɛj` sun.js:327 and *kè* `kɛ` heart.js:321, which correctly use ⟨è⟩ for /ɛ/, versus *je* `ʒe` eye.js:321 with ⟨e⟩ = /e/). *pyebwa* < Fr. *pied* + *bois* has /e/: Wiktionary /pjebwa/, Valdman (2007) *pyebwa* [pjebwa]. The same-file sibling `rcf` `["pyébwa", "pjebwa"]` (tree.js:929) already carries the correct [e]. One-symbol IPA fix.

---

### 6. `mfe` — dog — *lisien*: ⟨ien⟩ is the nasal rime /jɛ̃/, and the row contradicts the corpus's own `mfe` nasal marking
- **File:** words/dog.js line 928
- **Current:** `["lisien", "lisjen"]`
- **Expected:** `["lisien", "lisjɛ̃"]`
- **Why:** Morisien *lisien* 'dog' (< Fr. *le chien*) ends in the nasal vowel /ɛ̃/: in the Lortografi Kreol Morisien (2011) and in Carpooran's *Diksioner Morisien* (2011) the grapheme sequence ⟨ien⟩ spells [jɛ̃] (as in *bien*), while an audible [n] after an oral vowel is written with doubled ⟨nn⟩ (*lalinn*, *kann*). If the word were really [lisjen], it would be spelled *lisienn*. The corpus marks `mfe` nasals faithfully everywhere else — `bon` `bõ` (good.js:928), `manze` `mãze` (eat.js:921), `bonzour` `bõzuɾ` (hello.js:921) — and the same-file sibling `rcf` `["lisien", "lisjɛ̃"]` (dog.js:929) has exactly the expected rime. The `mfe` row alone de-nasalizes. (Symbol choice [ɛ̃] also matches the only other front nasal in the creole block, `rcf`/`gcf`.)

---

### 7. `mfe` — one — *enn*: doubled ⟨nn⟩ marks an ORAL vowel + /n/; the nasal [ẽ] contradicts the corpus's own *lalinn* row
- **File:** words/one.js line 934
- **Current:** `["enn", "ẽn"]`
- **Expected:** `["enn", "ɛn"]`
- **Why:** In Morisien orthography the doubled ⟨nn⟩ explicitly signals that the preceding vowel is oral and the /n/ consonantal: *lalinn* [lalin], *kann* [kan], *enn* [ɛn]. Wiktionary (citing Carpooran 2011) gives *enn* 'one, a(n)' as /ɛn/. A nasalized [ẽn] is doubly wrong: it both nasalizes the vowel and keeps the [n], i.e. it reads ⟨enn⟩ as if it were ⟨en⟩+⟨n⟩. The corpus already applies the correct convention to the same grapheme pattern in `mfe` `["lalinn", "lalin"]` (moon.js:934) — oral [i], no tilde — and in the sibling `rcf` `["inn", "in"]` (one.js:935). This row is the lone leak of nasality through ⟨nn⟩. Note also [ẽ] is not even the corpus's front-nasal symbol (`mfe` uses ɛ̃/ã/õ nowhere else with ẽ).

---

### 8. `wa` — house — *måjhon*: Walloon ⟨å⟩ is [ɔː] (cf. the corpus's own *åbe*), never [wa]
- **File:** words/house.js line 766
- **Current:** `["måjhon", "mwaˈʒõ"]`
- **Expected:** `["måjhon", "mɔːˈʒõ"]`
- **Why:** In the Rifondou walon orthography the grapheme ⟨å⟩ covers the regional realizations [ɔː]~[oː]~[ɑː] — a long back vowel, never a [wa] glide sequence. Wiktionary gives *måjhon* as /mɔː.ˈʒɔ̃/ (variant /mwɛː.ˈʒɔ̃/ for the *mwèjhon*-type dialects — note even that variant has [ɛː], not [a]). The corpus itself renders ⟨å⟩ correctly one file over: `wa` `["åbe", "ˈɔːb"]` (tree.js:759). The current [mwa-] is a chimera matching no attested variant — it looks like a French ⟨oi⟩ reading leaking into the Walloon row. I keep the corpus's `wa` nasal symbol [õ] (cf. `bondjoû` `bõˈd͡ʒu` hello.js:752, `bon` `bõ` good.js:759) and the stress mark already present in the row.

---

### 9. `co` — eye — *ochju*: ⟨chj⟩ is the voiceless palatal stop, not [kj]; breaks the corpus's own ⟨ghj⟩ = [dʒ] convention
- **File:** words/eye.js line 300
- **Current:** `["ochju", "ɔkju"]`
- **Expected:** `["ochju", "ɔtʃu"]`
- **Why:** Corsican ⟨chj⟩/⟨ghj⟩ are the voiceless/voiced palatal stops [c]/[ɟ] (Marchetti 1974; Wiktionary *ochju* /ˈo.cu/, /ˈo.tju/) — a single palatal segment, not velar [k] + glide [j]. The corpus has already committed to approximating the voiced member as an affricate: `co` `["ghjattu", "dʒattu"]` (cat.js:300) and `["manghjà", "mandʒa"]` (eat.js:300). Internal consistency then demands the voiceless counterpart [tʃ] in *ochju*; [kj] is wrong in both place and manner under either the precise ([c]) or the corpus's approximated ([tʃ]) convention. Vowel kept as the corpus's `co` [ɔ] (cf. *focu* `fɔku`, *core* `kɔre`).

---

### 10. `co` — good — *bonu* has open [ɔ] (< Lat. *bŏnum*); the lone closed-o outlier in the `co` set
- **File:** words/good.js line 300
- **Current:** `["bonu", "bonu"]`
- **Expected:** `["bonu", "bɔnu"]`
- **Why:** Corsican *bonu* is /ˈbɔnu/ (Wiktionary s.v. *bonu*, Corsican section — contrast Sardinian /ˈbonu/, which is a different language and was the subject of closed #24's `sc` fix, not this row). Latin short *ŏ* yields the open mid vowel, exactly as in the corpus's own `co` reflexes of *fŏcum*, *cŏr*, *sōl*-set: `focu` `fɔku` (fire.js:306), `core` `kɔre` (heart.js:300), `sole` `sɔle` (sun.js:306), `amore` `amɔre` (love.js:307). The `good` row is the only `co` entry rendering this vowel as closed [o] — an IPA-only, one-symbol consistency fix.

---

### 11. `fro` — eat — *mangier*: spurious palatal nasal [ɲ] and unglided ⟨ie⟩
- **File:** words/eat.js line 898
- **Current:** `["mangier", "maɲˈdʒier"]`
- **Expected:** `["mangier", "manˈdʒjer"]`
- **Why:** Old French *mangier* is /manˈdʒjer/ (Wiktionary "classical" /manˈd͡ʒjeːɾ/; Pope 1934 §§655ff. on infinitive *-ier*). The nasal before the affricate is plain dental [n] — Old French [ɲ] corresponds to the spellings ⟨gn/ign/ngn⟩ (*montaigne*, *seignor*), never to ⟨n⟩ + ⟨g⟩ where the ⟨g⟩ itself is the affricate of the following syllable; the current transcription double-counts the ⟨g⟩ as both palatalizer and affricate. Second, the *-ier* suffix is a rising diphthong [je]: the corpus's own `fro` rows already render this yod as [j] (`chien` `tʃjɛn` dog.js:905, `boivre` `ˈbojvrə` drink.js:905), so [ie] in hiatus is also an internal inconsistency. Expected form follows corpus `fro` style (no vowel-length or tap marks, cf. `merci` `mɛrˈsi` thanks.js:905).

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

All "Current" values verified verbatim and all cited same-file siblings confirmed. Every finding is a clear local error or an internal-consistency normalization with byte-level sibling proofs in the corpus. Finding 4 re-opens closed #50 Issue 11, but the reviewer correctly shows that hold rested on a false phonological premise (⟨in⟩≠/ɛ̃/; ⟨en⟩ is the nasal grapheme) and supplies two sibling proofs + two dictionaries, so the value-level error was never genuinely adjudicated — applying. All 11 applied.

- **106-1** `fr_qc` thanks *merci* `mɛʁsɪ`→`mɛʁsi` (thanks.js:494). Laxing applies only in closed syllables; final /si/# is open. Matches `fr_be`/`fr_ch` `mɛʁsi`. **Applied (applied by orchestrator this round).**
- **106-2** `ca` dog *gos* `ɡɔs`→`ɡos` (dog.js:305). Closed /o/ (GDLC, Wiktionary); lone quality error among `ca` mids. **Applied (applied by orchestrator this round).**
- **106-3** `ht` cat *chat* `ʃa`→`ʃat` (cat.js:321). Phonemic IPN orthography; siblings `gcf`/`rcf` `ʃat`, `mfe` `lisat`. **Applied (applied by orchestrator this round).**
- **106-4** `ht` moon *lalin* `lalɛ̃`→`lalin` (moon.js:327). ⟨in⟩=oral /in/; siblings `gcf`/`mfe` `lalin`; #50 hold rested on false premise. **Applied (applied by orchestrator this round).**
- **106-5** `ht` tree *pyebwa* `pjɛbwa`→`pjebwa` (tree.js:321). ⟨e⟩=/e/; sibling `rcf` `pjebwa`. **Applied (applied by orchestrator this round).**
- **106-6** `mfe` dog *lisien* `lisjen`→`lisjɛ̃` (dog.js:928). ⟨ien⟩ nasal rime; sibling `rcf` `lisjɛ̃`. **Applied (applied by orchestrator this round).**
- **106-7** `mfe` one *enn* `ẽn`→`ɛn` (one.js:934). Doubled ⟨nn⟩ = oral V + /n/; siblings *lalinn* `lalin`, `rcf` `in`. **Applied (applied by orchestrator this round).**
- **106-8** `wa` house *måjhon* `mwaˈʒõ`→`mɔːˈʒõ` (house.js:766). ⟨å⟩=[ɔː]; sibling *åbe* `ˈɔːb`. **Applied (applied by orchestrator this round).**
- **106-9** `co` eye *ochju* `ɔkju`→`ɔtʃu` (eye.js:300). ⟨chj⟩ palatal stop ≈ [tʃ] per corpus ⟨ghj⟩=[dʒ] siblings. **Applied (applied by orchestrator this round).**
- **106-10** `co` good *bonu* `bonu`→`bɔnu` (good.js:300). Open [ɔ] < Lat. *bŏnum*; siblings `fɔku`/`kɔre`/`sɔle`. **Applied (applied by orchestrator this round).**
- **106-11** `fro` eat *mangier* `maɲˈdʒier`→`manˈdʒjer` (eat.js:898). Plain dental [n] + glided ⟨ie⟩=[je]; sibling yod `tʃjɛn`/`ˈbojvrə`. **Applied (applied by orchestrator this round).**

Remaining open: 0.

---

## Reviewer round-2 response (再評価 round-2)

I re-grepped all 11 target rows in the live `words/*.js` and re-verified the cited same-file siblings. Every claimed fix is present verbatim in the live data and every sibling-consistency argument holds.

- **106-1 ✓** `fr_qc` thanks *merci* `mɛʁsɪ`→`mɛʁsi` confirmed at thanks.js:494; now matches `fr`/`fr_af`/`fr_be`/`fr_ch` `mɛʁsi`. Open final syllable /si/# correctly keeps tense [i].
- **106-2 ✓** `ca` dog *gos* `ɡɔs`→`ɡos` confirmed at dog.js:305. Closed mid /o/.
- **106-3 ✓** `ht` cat *chat* `ʃa`→`ʃat` confirmed at cat.js:321; siblings `gcf` `ʃat` (931), `fro` `tʃat` (905). The bare French rows (fr/fr_qc/fr_be/fr_ch `ʃa`) correctly retain the silent final.
- **106-4 ✓** `ht` moon *lalin* `lalɛ̃`→`lalin` confirmed at moon.js:327; siblings `gcf` `lalin` (937), `mfe`/`rcf` `lalin` (934/935). Oral ⟨in⟩ now consistent across the creole block.
- **106-5 ✓** `ht` tree *pyebwa* `pjɛbwa`→`pjebwa` confirmed at tree.js:321. ⟨e⟩=/e/ per IPN.
- **106-6 ✓** `mfe` dog *lisien* `lisjen`→`lisjɛ̃` confirmed at dog.js:928; sibling `rcf` `lisjɛ̃` (929). Nasal rime ⟨ien⟩ now matches.
- **106-7 ✓** `mfe` one *enn* `ẽn`→`ɛn` confirmed at one.js:934; sibling `rcf` `inn`/`in` (one.js:935) and `mfe` *lalinn* `lalin` (moon.js:934). Doubled ⟨nn⟩ = oral V + /n/, no leaked nasality.
- **106-8 ✓** `wa` house *måjhon* `mwaˈʒõ`→`mɔːˈʒõ` confirmed at house.js:766; sibling `åbe` `ˈɔːb` (tree.js:759). [wa] chimera removed; ⟨å⟩=[ɔː] and nasal [õ]/stress preserved.
- **106-9 ✓** `co` eye *ochju* `ɔkju`→`ɔtʃu` confirmed at eye.js:300; siblings `ghjattu` `dʒattu` (cat.js:300). Voiceless palatal approximated as [tʃ] consistent with the voiced ⟨ghj⟩=[dʒ] convention.
- **106-10 ✓** `co` good *bonu* `bonu`→`bɔnu` confirmed at good.js:300; siblings `focu` `fɔku` (fire.js:306), `core` `kɔre` (heart.js:300). Open [ɔ] < Lat. *bŏnum* now consistent (and distinct from `sc`/`ast`/`tsu` `bonu` which are other languages, correctly untouched).
- **106-11 ✓** `fro` eat *mangier* `maɲˈdʒier`→`manˈdʒjer` confirmed at eat.js:898; sibling yod `chien` `tʃjɛn` (dog.js:905), `boivre` `ˈbojvrə` (drink.js:905). Spurious [ɲ] removed, ⟨ie⟩ glided to [je].

### New issues
None. No collateral errors spotted during verification; the surrounding French-lect and creole rows in the touched files are internally consistent.

### Scorecard
- Accept (✓): 11/11
- Partial (△): 0
- Reject (✗): 0
- New issues: 0

All eleven were clear, well-sourced local errors or internal-consistency normalizations, each backed by byte-level same-file sibling proofs plus dictionary/grammar citations. All are now fixed and verified in live data. The one re-opened item (#106-4, formerly closed #50 Issue 11) was justifiably re-opened on a demonstrated false premise and is now corrected.

**File status: CLOSED** — nothing left to address.
