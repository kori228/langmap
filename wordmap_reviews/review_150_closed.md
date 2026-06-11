# Wordmap review #150 — Senior holistic red-team — wave-12 closer & regression sweep

## Reviewer self-introduction (ペルソナ自己紹介)

私は本データセットの全20語ファイルを横断的に検証する第12波のクローザー兼リグレッション担当です。Reviews #01–120 (closed) を全件精読し、open reviews #121–137 の係争中項目も突き合わせた上で、既に修正済み・wont-fix 裁定済みの項目（hi/sa の `a`/`ə` 広狭表記 #05-22、ta `ondru`/`nanri` の ன்ற் クラスター #31/#05/#83、vi の未開放閉鎖音・⟨x⟩=`s` 規約 #45、is/fo の島嶼 `ɹ` 規約 #61/#105、sl/mk の音節 r̩ #03/#28 等）は意図的に再提出しません。手法は (a) **リグレッション抽出**：wave-11 (#101–120) で「適用済み」と記録された fix を live データで verbatim 照合（vi eye `mat˧˥`/heart `t͡ɕaːj˧˥`、pt_eu eat `kuˈmeɾ`/drink `bɨˈbeɾ`、ur sun `suːɾəd͡ʒ`、sw `haˈbari`/`aˈsante` — 全て live で確認、過剰修正なし）、(b) **各語ファイルの最も鋭い残存誤りの一掃**：話者数上位言語と語族ブロックの内部整合性（同一言語の他19セルを de-facto ハウススタイルとして扱い n=1 逸脱を狙う #74/#115 方式）、(c) `node --check` × 21 ファイル（20 word files + `validate_wordmap_data.js`、全て PASS）と `node validate_wordmap_data.js`（PASS）。参照文献: **Riad, _The Phonology of Swedish_ (2014)** および Engstrand の中部標準スウェーデン語 supradental 規則（⟨rt⟩→[ʈ]）; **Hualde & Ortiz de Urbina, _A Grammar of Basque_ (2003)** と Euskaltzaindia の Batua 発音規範（南部標準の無音 h）; **Ashton, _Swahili Grammar_ (1944)** の penult アクセント（closed #70/#78 で裁定済み）; **Nau, _Latvian_ (1998)** のラトビア語破擦音 [t͡s]/[d͡z]; プロジェクト文書 `docs/words/CONTRIBUTING.md`（"IPA notation, not the language's native romanization"）, `docs/words/LANG_CODES.md`、tie-bar 規約 #19、および全 closed review の裁定記録。すべての Current 値は 2026-06-11 時点の live ファイルから verbatim 再取得し、行番号付きで照合・grep 再確認済みです。

---

## Issues found

### 1. sv — heart — *hjärta* has a stray retroflex lateral [ɭ] in a word that contains no /l/
- **File:** words/heart.js line 164
- **Current:** `["hjärta", "jæːɭta"]`
- **Expected:** `["hjärta", "jæːʈa"]`
- **Why:** *hjärta* = h-j-ä-r-t-**a** — there is **no orthographic ⟨l⟩** in the word, yet the IPA contains a retroflex lateral `ɭ`. In Central Standard Swedish the supradental rule fuses ⟨r⟩+⟨t⟩ into a single retroflex stop [ʈ]: *hjärta* → [ˈjæ̌ʈːa] (Riad 2014 §3 on the retroflex/"supradental" series r+{t,d,n,l,s}→{ʈ,ɖ,ɳ,ɭ,ʂ}). The `ɭ` symbol is correct only when the source string is ⟨rl⟩ — which is exactly the case in this column's other supradental cell `sv love kärlek → ɕæːɭɛk` (love.js:164, ⟨rl⟩→[ɭ], verified correct by closed #61-20). The transcriber evidently carried the `ɭ` of *kärlek* over to *hjärta*, where the source cluster is ⟨rt⟩, not ⟨rl⟩. Sibling evidence confirms ⟨rt⟩ is a *t*-segment, not an *l*-segment: `no hjerte → jæɾtə` (heart.js:165) and `nn hjarte → jɑːɹtə` (heart.js:492) both keep a rhotic + *t*, never a lateral. Closed #61-20 examined only the *kärlek* cell and confirmed its `ɭ`; it never looked at *hjärta*, so this is not re-litigation.

---

### 2. eu — heart / tree — orthographic ⟨h⟩ treated inconsistently: dropped in *bihotz*, kept in *zuhaitz*
- **File:** words/heart.js line 169 (and words/tree.js line 169)
- **Current:** heart `["bihotz", "biot͡s"]` ; tree `["zuhaitz", "suhait͡s"]`
- **Expected:** unify on the silent-h (southern/Batua) reading → tree `["zuhaitz", "suait͡s"]` (or, if the team prefers the northern aspirated reading, heart → `bihot͡s`)
- **Why:** These are the **only two** Basque (`eu`) cells in the whole 20-word set that contain an orthographic ⟨h⟩ (grep of `^\s*eu:\s*\[` across all files: `kaixo`, `etxe`, `esku`, `aita`, `ama`, `eskerrik asko` carry none). They split exactly n=1 vs n=1: *bihotz* drops the h (`biot͡s`) while *zuhaitz* keeps it (`suhait͡s`). In the standard (Batua) pronunciation, based on the southern dialect majority, ⟨h⟩ is **silent** (Hualde & Ortiz de Urbina 2003 §1.4; Euskaltzaindia orthoepy) — only the northern Lapurdian/Zuberoan varieties realize [h]. The dataset already commits to the southern norm in *bihotz* `biot͡s`, so for internal consistency *zuhaitz* should likewise be `suait͡s`. (The ⟨z⟩→`s` laminal-merger and final ⟨tz⟩→`t͡s` are both already correct and held column-wide; only the h is at issue.)

---

### 3. lv — eye / drink — both Latvian affricate cells omit the dataset-wide tie bar
- **File:** words/eye.js line 316 (and words/drink.js line 316)
- **Current:** eye `["acs", "ats"]` ; drink `["dzert", "dzɛrt"]`
- **Expected:** eye `["acs", "at͡s"]` ; drink `["dzert", "d͡zɛrt"]`
- **Why:** Latvian ⟨c⟩ = the single affricate /t͡s/ and ⟨dz⟩ = /d͡z/ (Nau 1998 §2); *acs* 'eye' is [at͡s], *dzert* 'to drink' is [d͡zɛrt]. Closed review #19 (issue 4, HELD) established that "the tie-bar /t͡s/ is the dataset's standard affricate notation, used consistently across 17 files." The `lv` row's two affricate cells are the only Latvian rows containing one, and **both** write the bare digraph `ts`/`dz` with no tie bar — leaving them ambiguous between a true affricate and a stop+fricative cluster. The sibling Slavic/Baltic columns in the very same files mark it: `bg слънце → slɤnt͡sɛ` and `bg сърце → sɤrt͡sɛ` (sun.js:319 / heart.js:313), `cs/sk …t͡sɛ`. This is a clean per-language conformance gap to the #19 convention, affecting all (=both) `lv` affricate tokens.

---

### 4. sw — multiple — byte-identical surface==IPA disyllables still defy the adjudicated penult-stress convention
- **File:** words/cat.js line 110 (representative: `paka`); same defect at father.js:110 `baba`, mother.js:110 `mama`, tree.js:110 `mti`, eat.js:110 `kula`, fire.js:110 `moto`, good.js:110 `nzuri`, hand.js:110 `mkono`
- **Current:** `["paka", "paka"]`
- **Expected:** `["paka", "ˈpaka"]` (and likewise `ˈbaba`, `ˈmama`, `ˈmti`… on the penult)
- **Why:** Closed reviews #70/#78 adjudicated the Swahili treatment: byte-identical surface/IPA pairs are the "lazy-IPA" defect, and regular penultimate stress (Ashton 1944 §4) is to be shown — applied there to `moon.js:110 → ˈmwezi` and `love.js:110 → uˈpendo`, and extended by closed #115 (issues 13/14) to the trisyllables `haˈbari` (hello.js:110) and `aˈsante` (thanks.js:110). The `sw` column is therefore now **split**: four cells carry the adjudicated stress mark while the remaining disyllables sit as byte-identical pairs. #115 explicitly flagged this residue ("the same residue affects the remaining sw polysyllables, e.g. `moto`, `mama`, `kula`") and deferred only the *set-wide sweep* as a team decision — it did not adjudicate these cells as correct. I record the representative `paka` (and the cluster above) so the closer can complete the #70/#78/#115 pass in one motion; the penult is the first syllable in each disyllable, so the mark is informative and unambiguous. (The byte-identical `paka` rows of *other* languages — luo, mas, kln, kde… — are correctly left untouched, as #115 confirmed.)

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

### 150-1 — sv — heart — *hjärta* stray retroflex lateral [ɭ] → [ʈ] — APPLIED (applied by orchestrator this round)
Confirmed words/heart.js:164 `sv: ["hjärta", "jæːɭta"]`. *hjärta* (h-j-ä-r-t-a) has no orthographic ⟨l⟩; the Central Standard Swedish supradental rule fuses ⟨r⟩+⟨t⟩ into [ʈ] (Riad 2014 §3). The `ɭ` is correct only for ⟨rl⟩ — exactly the case in the column's *kärlek* `ɕæːɭɛk` (love.js:164, confirmed by closed #61-20), evidently carried over here. Sibling ⟨rt⟩ cells keep rhotic+t (no `jæːɭta`. Applied IPA `jæːɭta` → `jæːʈa`; surface unchanged.

### 150-2 — eu — heart/tree — inconsistent ⟨h⟩ → unify on silent-h — APPLIED (applied by orchestrator this round)
Confirmed words/heart.js:169 `eu: ["bihotz", "biot͡s"]` (h dropped) and words/tree.js:169 `eu: ["zuhaitz", "suhait͡s"]` (h kept). These are the only two `eu` cells with orthographic ⟨h⟩ and they split n=1/n=1. Standard Batua/southern pronunciation has silent ⟨h⟩ (Hualde & Ortiz de Urbina 2003 §1.4; Euskaltzaindia). The dataset already commits to the southern norm in *bihotz* `biot͡s`, so unify *zuhaitz* to drop the [h]. Applied tree.js IPA `suhait͡s` → `suait͡s`; surface unchanged.

### 150-3 — lv — eye/drink — missing tie bars on affricates — APPLIED (applied by orchestrator this round)
Confirmed words/eye.js:316 `lv: ["acs", "ats"]` and words/drink.js:316 `lv: ["dzert", "dzɛrt"]`. Latvian ⟨c⟩=/t͡s/, ⟨dz⟩=/d͡z/ (Nau 1998 §2). Closed #19 established the tie-bar as the dataset's standard affricate notation; both `lv` affricate cells lack it while sibling Slavic/Baltic cells in the same files mark it (bg `slɤnt͡sɛ`, `sɤrt͡sɛ`). Clean per-language conformance gap. Applied eye `ats`→`at͡s`, drink `dzɛrt`→`d͡zɛrt`; surfaces unchanged.

### 150-4 — sw — multiple — penult-stress on byte-identical disyllables — APPLIED (applied by orchestrator this round)
Confirmed byte-identical pairs: cat.js:110 `["paka","paka"]`, father.js:110 `baba`, mother.js:110 `mama`, tree.js:110 `mti`, eat.js:110 `kula`, fire.js:110 `moto`, good.js:110 `nzuri`, hand.js:110 `mkono`. This is the unfinished residue of an already-adjudicated convention, not a fresh system-level choice: closed #70/#78 adjudicated Swahili regular penultimate stress (Ashton 1944 §4) and applied it to moon.js (`ˈmwezi`) and love.js (`uˈpendo`), and #115 extended it to the trisyllables `haˈbari`/`aˈsante`. The disyllable cells were left as the deferred sweep, not adjudicated as correct. Penult = first syllable in each disyllable, so the mark is unambiguous. Applied the leading `ˈ` on the penult: paka→`ˈpaka`, baba→`ˈbaba`, mama→`ˈmama`, mti→`ˈmti`, kula→`ˈkula`, moto→`ˈmoto`, nzuri→`ˈnzuri`, mkono→`ˈmkono`. Note `nzuri`/`mkono` penult is still the first syllable (`nzu`/`mko`); stress placed there per the convention. Byte-identical rows of *other* languages (luo, mas, kln, kde…) left untouched per #115.

---

## Reviewer round-2 response (再評価 round-2)

I re-pulled every touched cell from the live data (2026-06-11) and verbatim-confirmed each applied value.

- **150-1 (sv hjärta) — ✓ ACCEPT.** Live `words/heart.js:164 sv: ["hjärta", "jæːʈa"]`. The stray `ɭ` is gone; ⟨r⟩+⟨t⟩ → [ʈ] is correct (Riad 2014 §3). Sibling `kärlek → ɕæːɭɛk` (love.js:164, genuine ⟨rl⟩) correctly retains its `ɭ`. Clean fix.
- **150-2 (eu zuhaitz) — ✓ ACCEPT.** Live `words/tree.js:169 eu: ["zuhaitz", "suait͡s"]` — silent ⟨h⟩ now matches `bihotz → biot͡s` (heart.js:169). Internal eu consistency restored on the only two h-bearing cells.
- **150-3 (lv affricates) — ✓ ACCEPT.** Live `words/eye.js:316 lv: ["acs", "at͡s"]` and `words/drink.js:316 lv: ["dzert", "d͡zɛrt"]`. Both tie-bars present; conforms to the #19 dataset-wide affricate convention and to sibling bg `slɤnt͡sɛ`/`sɤrt͡sɛ`.
- **150-4 (sw penult stress) — △ PARTIAL.** Seven of eight cells are correct and verified: `ˈpaka` (cat.js:110), `ˈbaba` (father.js:110), `ˈmama` (mother.js:110), `ˈmti` (tree.js:110), `ˈkula` (eat.js:110), `ˈmoto` (fire.js:110), `ˈnzuri` (good.js:110). For the disyllables, penult = first syllable, so the leading `ˈ` is right; `mti` is m̩-ti (syllabic nasal = penult syllable) → `ˈmti` defensible; `nzuri` has a prenasalized /ⁿz/ onset (nzu-ri), penult = first → `ˈnzuri` defensible.

  **NEW ISSUE 150-5 — sw `mkono` stress is on the wrong syllable.** Live `words/hand.js:110 sw: ["mkono", "ˈmkono"]`. Unlike the disyllables, `mkono` is **tri**syllabic: the word-initial m-before-consonant is syllabic [m̩], giving m̩-ko-no. Swahili regular penultimate stress (the very Ashton 1944 §4 / #70/#78 convention being applied here) therefore falls on `ko`, i.e. **`mˈkono`**, not on the antepenultimate syllabic nasal. The worker's own note ("`mkono` penult is still the first syllable `mko`") mis-syllabifies the word — `mko` is not a syllable; the syllabic m̩ is its own syllable. This is a fix that introduced a new convention violation, so it is actionable.
  - **Expected:** `words/hand.js:110 sw: ["mkono", "mˈkono"]`.

### Scorecard
- 150-1 ✓ | 150-2 ✓ | 150-3 ✓ | 150-4 △ (7/8 correct)
- New issues: 1 (150-5, sw `mkono` stress placement)

**File status: OPEN** — Dev team: change `words/hand.js:110 sw` IPA from `ˈmkono` to `mˈkono` (syllabic m̩ is its own syllable; penult is `ko`).

---

## Worker round-2 response (作業者round-2)

### 150-5 — sw — hand — `mkono` stress on wrong syllable → `mˈkono` — APPLIED (applied by orchestrator this round)
Confirmed live `words/hand.js:110 sw: ["mkono", "ˈmkono"]`. The reviewer is correct and the analysis is sourced/unambiguous: Swahili *mkono* 'hand/arm' is **tri**syllabic because the word-initial m-before-consonant is a syllabic nasal [m̩], yielding m̩-ko-no. Under the very penultimate-stress convention being applied (Ashton 1944 §4, adjudicated in closed #70/#78), stress falls on the penult `ko`, not on the antepenultimate syllabic nasal. The round-1 worker's note ("penult is still the first syllable `mko`") mis-syllabified the word — `mko` is not a single syllable; the syllabic m̩ stands alone. This is a self-inflicted convention violation introduced by the 150-4 fix, so it is a clear, actionable correction. Applied IPA `ˈmkono` → `mˈkono`; surface unchanged. The other seven 150-4 cells (disyllables `ˈpaka`/`ˈbaba`/`ˈmama`/`ˈmti`/`ˈkula`/`ˈmoto`/`ˈnzuri`) remain correct (penult = first syllable) and are untouched.

All other items (150-1, 150-2, 150-3, 150-4) were accepted by the reviewer in round-2; nothing further open.

---

## Reviewer round-3 response (再評価 round-3)

I re-pulled every touched cell from the live data (2026-06-11) and verbatim-confirmed each value.

- **150-1 (sv hjärta) — ✓ ACCEPT (re-confirmed).** Live `words/heart.js:164 sv: ["hjärta", "jæːʈa"]`. ⟨r⟩+⟨t⟩ → [ʈ] correct; no stray `ɭ`.
- **150-2 (eu zuhaitz) — ✓ ACCEPT (re-confirmed).** Live `words/tree.js:169 eu: ["zuhaitz", "suait͡s"]`, matching `bihotz → biot͡s` (heart.js:169). Silent-h unified.
- **150-3 (lv affricates) — ✓ ACCEPT (re-confirmed).** Live `words/eye.js:316 lv: ["acs", "at͡s"]` and `words/drink.js:316 lv: ["dzert", "d͡zɛrt"]`. Both tie-bars present.
- **150-4 (sw penult stress) — ✓ ACCEPT.** Seven disyllable cells re-confirmed in live data: `ˈpaka` (cat.js:110), `ˈbaba` (father.js:110), `ˈmama` (mother.js:110), `ˈmti` (tree.js:110), `ˈkula` (eat.js:110), `ˈmoto` (fire.js:110), `ˈnzuri` (good.js:110). Penult = first syllable; marks correct.
- **150-5 (sw mkono) — ✓ ACCEPT.** Live `words/hand.js:110 sw: ["mkono", "mˈkono"]`. The stress mark has moved from the antepenultimate syllabic nasal to the penult `ko` (m̩-ko-no), per Ashton 1944 §4 / closed #70/#78. My round-2 NEW ISSUE is now fixed-and-verified.

No new issues. All clear errors are fixed and confirmed in live data; nothing remains for the dev team to address.

### Scorecard
- 150-1 ✓ | 150-2 ✓ | 150-3 ✓ | 150-4 ✓ | 150-5 ✓
- New issues: 0

**File status: CLOSED** — nothing left to address.
