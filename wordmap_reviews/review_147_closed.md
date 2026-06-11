# Wordmap review #147 — Cross-file per-language style-drift auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a transcription-systems auditor whose narrow specialty is *intra-language notational consistency* across a multilingual lexical database: given one language's twenty `["surface","ipa"]` cells spread over the twenty `words/<concept>.js` files, I treat the nineteen siblings as that language's de-facto house style and hunt for the single cell that breaks it — a stress mark present in most siblings but absent (or, just as often, spuriously *present*) in one parallel entry; an affricate tie-bar applied to ⟨ts⟩ in one file but dropped from the same phoneme in another; a rhotic or length symbol that flips between files. I know this project's data model intimately (the `WORDS.<concept>.data` tuples, the object form with `form`/`ipa`/`alt` reserved for multi-script rows, the rule in `docs/words/CONTRIBUTING.md` that the IPA slot carries broad IPA and not native romanization, and the code inventory in `docs/words/LANG_CODES.md`), and — because this is wave 12 — I grepped every candidate code+word against `wordmap_reviews/*_closed.md` before writing it down, so as not to re-litigate settled matters. In particular I deliberately do **not** re-report the per-language *no-stress* conventions adjudicated for `la/sc/nap/scn/gl/ca/es_ar/ro/vec/wa` (closed #02), the `ca amor` rhotic and `ca`/`pt_eu`/`pt_br` stress decisions (#02/#25/#51/#106), the Swahili penult-stress "informative-trisyllables-only" hold (#74/#115), the ⟨j⟩=/dʒ/ Malayic convention (#17), the Ethiosemitic `tsʼ`-no-tie-bar convention witnessed by `ti`/`tig` sun (#102), or the `ja_kg`/`ja_edo` bare-`dz` historical-stratum house style (#14). My load-bearing evidence in every finding below is the cell's own siblings, and the project's documented affricate-tie-bar standard — stated explicitly in closed review #19 ("the tie-bar /t͡s/ is the dataset's standard affricate notation, used consistently across 17 files, e.g. `ka` t͡set͡sxli, `eu` suhait͡s, `abq` mt͡sa") and #14 (the Japanese tie-bar normalization). Every "Current" value below was copied verbatim from the live file at the cited line and re-verified by `grep` on 2026-06-11.

---

## Issues found

### 1. `oc` — sun — lone spurious stress mark breaks the uniform Occitan no-stress convention
- **File:** words/sun.js line 313
- **Current:** `["solelh", "suˈlɛʎ"]`
- **Expected:** `["solelh", "sulɛʎ"]`
- **Why:** Closed review #02 established (and applied as a corpus-wide convention) that Occitan polysyllables are **not** stress-marked — its closing notes cite `oc amor→amur`, `oc luna→lyno` as witnesses, and the live `oc` column bears this out: every other polysyllable is unmarked (`manjar mandʒa`, `paire pajre`, `maire majre`, `ostal ustal`, `amor amur`, `luna lyno`, `mercés merses`, `arbre arbre`, `aiga ajɡɔ`, `béure bewre`, `adieu adjew`). `solelh → suˈlɛʎ` is the **only** marked `oc` token in all twenty files. The #02 reviewer even noticed this exact outlier ("`oc solelh→suˈlɛʎ` (sun.js:313) DOES carry ˈ … but `solelh` is the only marked oc token and I won't expand scope here") — i.e. it was explicitly *deferred*, not adjudicated. Removing the `ˈ` brings the cell into line with its nineteen siblings; this is the cleanest single-outlier in the whole `oc` column.

---

### 2. `ka` — dog — affricate /d͡z/ missing the tie-bar its own siblings carry
- **File:** words/dog.js line 171
- **Current:** `["ძაღლი", "dzaɣli"]`
- **Expected:** `["ძაღლი", "d͡zaɣli"]`
- **Why:** Georgian ⟨ძ⟩ is the voiced alveolar affricate /d͡z/, a single segment. The dataset's affricate-tie-bar standard is project-wide (closed #19 names `ka t͡set͡sxli` itself as a canonical witness), and within the `ka` column the voiceless counterparts are correctly tied: `fire t͡set͡sxli` (fire.js:171), `water t͡sʼqʼali` (water.js:171). Writing `dz` un-tied reads as a stop+fricative cluster [d]+[z], not the affricate. Conform to `d͡z`, matching the sibling `abq water d͡zə` and the `ka` siblings' own `t͡s`.

---

### 3. `ka` — eat — ejective affricate /t͡ʃʼ/ missing the tie-bar
- **File:** words/eat.js line 171
- **Current:** `["ჭამა", "tʃʼama"]`
- **Expected:** `["ჭამა", "t͡ʃʼama"]`
- **Why:** Georgian ⟨ჭ⟩ is the voiceless postalveolar **ejective affricate** /t͡ʃʼ/ — one segment. Its in-column voiceless-affricate siblings `t͡set͡sxli` (fire.js:171) and `t͡sʼqʼali` (water.js:171) carry the tie-bar; `tʃʼama` drops it, splitting the affricate into [t]+[ʃʼ]. This is the same one-segment-vs-cluster defect as #2 in the same language, and should be fixed in the same pass: `t͡ʃʼama`.

---

### 4. `ka` — hello — affricate /d͡ʒ/ missing the tie-bar
- **File:** words/hello.js line 171
- **Current:** `["გამარჯობა", "ɡamardʒoba"]`
- **Expected:** `["გამარჯობა", "ɡamard͡ʒoba"]`
- **Why:** Georgian ⟨ჯ⟩ is the voiced postalveolar affricate /d͡ʒ/. Completing the trio (#2–#4), the `ka` column ties its `t͡s`/`t͡sʼ` (fire, water) but leaves `dz`/`tʃʼ`/`dʒ` un-tied; the affricate-tie-bar standard (#19) and internal consistency require `ɡamard͡ʒoba`. Note these three are the *only* un-tied affricates in the entire `ka` column — a clean, self-contained tie-bar gap.

---

### 5. `bs` — moon — `mjesec` is the only Bosnian affricate cell missing its tie-bar, contradicting its own twins `hr`/`sr`
- **File:** words/moon.js line 887
- **Current:** `["mjesec", "ˈmjɛsets"]`
- **Expected:** `["mjesec", "ˈmjɛset͡s"]`
- **Why:** The word-final ⟨c⟩ of *mjesec* is /t͡s/ — the same phoneme the `bs` column ties everywhere else: `father otac → ˈotat͡s`, `sun sunce → ˈsunt͡se`, `cat mačka → ˈmat͡ʃka`, `house kuća → ˈkut͡ɕa`, `heart srce → ˈsr̩t͡se`. `ˈmjɛsets` is the lone un-tied `bs` affricate (5 tied : 1 un-tied). Decisively, its orthographic-twin rows for the *very same word* both tie it: `hr mjesec → ˈmjeːset͡s` (moon.js:886) and `sr месец → ˈmɛsɛt͡s` (moon.js:318). Closed review #87 quoted this exact `bs` cell as a stress witness but never touched the missing tie-bar, so it is unadjudicated. Fix to `ˈmjɛset͡s`.

---

### 6. `hns` — sun — `suuraj` drops the /d͡ʒ/ tie-bar its own siblings (and Hindi parent) carry
- **File:** words/sun.js line 83
- **Current:** `["suuraj", "suːɾədʒ"]`
- **Expected:** `["suuraj", "suːɾəd͡ʒ"]`
- **Why:** Sarnami/Caribbean Hindustani ⟨j⟩ is /d͡ʒ/. The `hns` column ties its other two affricates — `moon caand → t͡ʃãːd` (moon.js:83), `good accha → at͡ʃt͡ʃʰa` (good.js:83) — making `suːɾədʒ` the lone un-tied cell. The Hindi parent of this identical etymon is tied: `hi सूरज → suːɾəd͡ʒ` (sun.js:82). (Closed #115 declined to re-open the `hi` *schwa* in this word, but never addressed the `hns` tie-bar.) Conform: `suːɾəd͡ʒ`.

---

### 7. `ame` (Yanesha) — moon — both affricates in `ojets` un-tied, against five tied siblings
- **File:** words/moon.js line 638
- **Current:** `["ojets", "odʒets"]`
- **Expected:** `["ojets", "od͡ʒet͡s"]`
- **Why:** Pure notation-consistency. Across the `ame` column every affricate is tie-barred: `cat michi → mit͡ʃi`, `dog atso → at͡so`, `drink epcham → ept͡ʃam`, `sun mtsho → mt͡so`, `water acopcho → akopt͡ʃo`. The moon cell `odʒets` is the only un-tied row, and it drops *two* tie-bars (the ⟨j⟩=/d͡ʒ/ onset and the final ⟨ts⟩=/t͡s/). This is the same purely-notational class as the Japanese normalization in closed #14; no phonemic claim is needed — just bring it into the column's own house style: `od͡ʒet͡s`.

---

### 8. `it_dan` (Dante's Italian) — thanks — `mercede` drops the /t͡ʃ/ tie-bar its sibling `mangiare` carries
- **File:** words/thanks.js line 907
- **Current:** `["mercede", "merˈtʃede"]`
- **Expected:** `["mercede", "merˈt͡ʃede"]`
- **Why:** In *mercede*, ⟨c⟩ before ⟨e⟩ is /t͡ʃ/. The `it_dan` column ties its other affricate — `eat mangiare → manˈd͡ʒare` (eat.js:900) — and the modern `it` column it shadows ties the same phoneme throughout (`hello ciao → ˈt͡ʃaːo`, `thanks grazie → ˈɡratt͡sje`). `merˈtʃede` is the lone un-tied `it_dan` affricate; fix to `merˈt͡ʃede`.

---

### 9. `de_lut` (Luther-era German) — hello — ⟨zum⟩ /t͡s/ un-tied while `Katze`/`Hertz` are tied
- **File:** words/hello.js line 912
- **Current:** `["Gott zum Gruß", "ɡɔt tsʊm ɡruːs"]`
- **Expected:** `["Gott zum Gruß", "ɡɔt t͡sʊm ɡruːs"]`
- **Why:** German ⟨z⟩ is the affricate /t͡s/. The `de_lut` column ties it elsewhere: `cat Katze → ˈkat͡sə` (cat.js:919), `heart Hertz → hɛrt͡s` (heart.js:919). The `zum` in the greeting is the only un-tied `de_lut` /t͡s/; the modern `de` column likewise ties throughout (`kat͡sə`, `hɛʁt͡s`). Conform: `t͡sʊm`.

---

### 10. `abq` (Abaza) — tree — ejective /t͡sʼ/ un-tied while `мца`/`цгва`/`дзы` are all tied
- **File:** words/tree.js line 671
- **Current:** `["ҵла", "tsʼla"]`
- **Expected:** `["ҵла", "t͡sʼla"]`
- **Why:** Abaza ⟨ҵ⟩ is the alveolar ejective affricate /t͡sʼ/. Its column siblings all tie the affricate: `cat цгва → t͡sɡwa` (cat.js:671), `fire мца → mt͡sa` (fire.js:677), `water дзы → d͡zə` (water.js:671); indeed closed #19 names `abq mt͡sa` as a witness of the project tie-bar standard. `tsʼla` is the lone un-tied `abq` affricate. Closed review #95 rewrote this cell's *lexeme/lateral* (`тла`→`ҵла`) and carried the IPA `tsʼla` forward verbatim, but never addressed the tie-bar — so the notational outlier survives. Fix to `t͡sʼla`.

---

### 11. `tt` (Tatar) — drink vs tree — same phoneme ⟨ч⟩ transcribed two ways across files
- **File:** words/drink.js line 776 and words/tree.js line 776
- **Current:** `["эчү", "etɕy"]` (drink) and `["агач", "aɣatʃ"]` (tree)
- **Expected:** one symbol for both — `["агач", "aɣatɕ"]` to match the alveolo-palatal value already used in *эчү*
- **Why:** Kazan Tatar ⟨ч⟩ is the (alveolo-)palatal affricate/fricative — closest to [ɕ]/[t͡ɕ] (the value used in *эчү* → `etɕy`), not the postalveolar [t͡ʃ]. The two ⟨ч⟩ cells in the `tt` column disagree on place of articulation: `drink etɕy` uses `tɕ` (alveolo-palatal) while `tree aɣatʃ` uses `tʃ` (postalveolar). Whichever value the team prefers, the column must be internally uniform; aligning *агач* to the alveolo-palatal `tɕ` of *эчү* (the more accurate Kazan value) resolves the drift.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

All eleven findings are clean intra-language notation-consistency fixes against the project's documented affricate-tie-bar standard (closed #19) and the per-language no-stress conventions (closed #02). Each `old` is unique in its file via the language-code prefix. All applied.

- **147-1 oc sun `suˈlɛʎ`→`sulɛʎ`**: APPLIED (applied by orchestrator this round). Removes the lone stress mark in the unstressed Occitan column (deferred, not adjudicated, in #02).
- **147-2 ka dog `dzaɣli`→`d͡zaɣli`**: APPLIED (applied by orchestrator this round). Tie-bar on /d͡z/.
- **147-3 ka eat `tʃʼama`→`t͡ʃʼama`**: APPLIED (applied by orchestrator this round). Tie-bar on /t͡ʃʼ/.
- **147-4 ka hello `ɡamardʒoba`→`ɡamard͡ʒoba`**: APPLIED (applied by orchestrator this round). Tie-bar on /d͡ʒ/. (#2–#4 are the only un-tied affricates in the ka column.)
- **147-5 bs moon `ˈmjɛsets`→`ˈmjɛset͡s`**: APPLIED (applied by orchestrator this round). Tie-bar on final /t͡s/; matches bs siblings and hr/sr twins.
- **147-6 hns sun `suːɾədʒ`→`suːɾəd͡ʒ`**: APPLIED (applied by orchestrator this round). Tie-bar on /d͡ʒ/; matches hns siblings and hi parent.
- **147-7 ame moon `odʒets`→`od͡ʒet͡s`**: APPLIED (applied by orchestrator this round). Tie-bars on both /d͡ʒ/ onset and final /t͡s/.
- **147-8 it_dan thanks `merˈtʃede`→`merˈt͡ʃede`**: APPLIED (applied by orchestrator this round). Tie-bar on /t͡ʃ/.
- **147-9 de_lut hello `tsʊm`→`t͡sʊm`**: APPLIED (applied by orchestrator this round). Tie-bar on /t͡s/ in `Gott zum Gruß`.
- **147-10 abq tree `tsʼla`→`t͡sʼla`**: APPLIED (applied by orchestrator this round). Tie-bar on /t͡sʼ/.
- **147-11 tt tree `aɣatʃ`→`aɣatɕ`**: APPLIED (applied by orchestrator this round). Aligns ⟨ч⟩ to the alveolo-palatal value already used in drink `etɕy` (more accurate Kazan Tatar); drink cell left unchanged as the reference value.

## Reviewer round-2 response (再評価 round-2)

All eleven claimed fixes were re-verified by `grep`/Read against live `words/*.js` on 2026-06-11. Every one is present in the live data exactly as the worker claims.

- **147-1 oc sun** ✓ — `words/sun.js:313` now `["solelh", "sulɛʎ"]`; stress mark removed. Confirmed no `ˈ`-marked `oc` token remains in any of the twenty files, so the no-stress convention (#02) is now uniform.
- **147-2 ka dog** ✓ — `words/dog.js:171` now `d͡zaɣli`. Tie-bar applied.
- **147-3 ka eat** ✓ — `words/eat.js:171` now `t͡ʃʼama`.
- **147-4 ka hello** ✓ — `words/hello.js:171` now `ɡamard͡ʒoba`. The `ka` affricate trio is now fully tie-barred, matching the column's `t͡s`/`t͡sʼ` siblings and the #19 standard.
- **147-5 bs moon** ✓ — `words/moon.js:887` now `ˈmjɛset͡s`; consistent with `hr ˈmjeseːt͡s` (886) and `sr ˈmɛsɛt͡s` (318).
- **147-6 hns sun** ✓ — `words/sun.js:83` now `suːɾəd͡ʒ`, matching its siblings and the `hi` parent.
- **147-7 ame moon** ✓ — `words/moon.js:638` now `od͡ʒet͡s`; both tie-bars applied, consistent with the five tied `ame` siblings.
- **147-8 it_dan thanks** ✓ — `words/thanks.js:907` now `merˈt͡ʃede`.
- **147-9 de_lut hello** ✓ — `words/hello.js:912` now `ɡɔt t͡sʊm ɡruːs`.
- **147-10 abq tree** ✓ — `words/tree.js:671` now `t͡sʼla`, matching `abq` siblings `t͡sɡwa`/`mt͡sa`/`d͡zə`.
- **147-11 tt tree** ✓ — `words/tree.js:776` now `aɣatɕ`, aligned to the alveolo-palatal value in drink `etɕy`. Internal `tt` ⟨ч⟩ drift resolved.

### New issues
None raised. During verification I noted `ab` (Abkhaz) tree `atsʼla` (tree.js:670) is un-tied, but that is a different language code outside this review's scope and not a regression introduced by these fixes; I leave it for a future wave rather than padding this file.

### Scorecard
11 / 11 accepted (✓). 0 partial, 0 rejected, 0 new issues. All fixes verified in live data.

**File status: CLOSED** — nothing left to address.
