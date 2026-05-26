# Dialect-variety inflected-form display policy — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the dictionary citation form with the connective form (JA 〜て / KO 〜아/어) in JA and KO regional-variety rows for `eat`, `drink`, `good`, so dialect rows actually show dialect-distinguishing morphology instead of copying the standard form.

**Architecture:** Pure data change in `words/eat.js`, `words/drink.js`, `words/good.js` for ≤ 33 cells across 12 dialect rows; new `wordEvidence` blocks added to those rows in `wordmap_data.js` with `formType` + citation `note`; new policy subsection added to `CONTRIBUTING.md` C3; cache-buster keys bumped. No new code, no new validator checks. Spec: [docs/superpowers/specs/2026-05-26-dialect-inflected-form-policy-design.md](../specs/2026-05-26-dialect-inflected-form-policy-design.md).

**Tech Stack:** Plain JS data files, Node.js validator (`validate_wordmap_data.js`), git.

---

## Task 0: Set up worktree

**Why a worktree:** the user is actively committing on `develop`; we need an isolated branch so our work doesn't collide.

- [ ] **Step 1: Verify current branch state**

Run: `git branch --show-current && git log --oneline -3`
Expected: current branch reported, recent commits visible.

- [ ] **Step 2: Create isolated worktree via EnterWorktree**

Use the `EnterWorktree` tool with `name: "feat-dialect-inflected-forms"`.
Expected: session moves to `.claude/worktrees/feat-dialect-inflected-forms` on branch `worktree-feat-dialect-inflected-forms` (or similar).

- [ ] **Step 3: Verify clean baseline**

Run: `git status && node validate_wordmap_data.js 2>&1 | tail -3`
Expected: clean tree; validator ends with `PASS`.

- [ ] **Step 4: Snapshot current cache-buster values**

Run: `grep -nE "data:\s*[0-9]|words:\s*[0-9]|wordmap_data.js\?v=" wordmap.html | head -5`
Record `data: N1`, `words: N2`, and the `wordmap_data.js?v=N3` value. These will be incremented in Task 6. Subsequent steps refer to them as `N1`, `N2`, `N3` (typically `N3 == N1` unless drift).

---

## Task 1: CONTRIBUTING.md — add policy subsection

**Files:**
- Modify: `CONTRIBUTING.md` (insert after line ~889, between `#### Verb forms (eat / drink / love)` and `#### Concept scope: heart, mother/father, one`)

- [ ] **Step 1: Verify insertion point**

Run: `grep -n "Verb forms\|Concept scope: heart" CONTRIBUTING.md`
Expected: two lines, the first is `#### Verb forms (eat / drink / love)`, the second is `#### Concept scope: heart, mother/father, one`. The new section goes between them.

- [ ] **Step 2: Insert the new subsection**

Use Edit with `old_string` = exactly the trailing line of the "Verb forms" subsection (the bound-stem bullet) + the blank line + the `#### Concept scope` heading. Replace with the same trailing content followed by the new subsection.

Old string (must match exactly — verify in CONTRIBUTING.md first):

````
- **Bound-stem languages** (Inuit-Yupik, Iranian historical, Pashai,
  Burushaski, Wakhi): trailing-hyphen bound stems are acceptable per
  Task 103 with `wordEvidence.formType: 'bound-stem'`.

#### Concept scope: heart, mother/father, one
````

New string:

````
- **Bound-stem languages** (Inuit-Yupik, Iranian historical, Pashai,
  Burushaski, Wakhi): trailing-hyphen bound stems are acceptable per
  Task 103 with `wordEvidence.formType: 'bound-stem'`.

#### Regional-variety verb/adjective forms (Japonic / Koreanic)

Rows that are regional varieties of Japonic (`ja`) or Koreanic (`ko`) — those
with `parentCode: 'ja'`/`'ko'` and `coverage: 'regional-variety'` or
`'base-copy-with-notes'` — display verb/adjective concept words (`eat`, `drink`,
`good`) in the **connective form** rather than the dictionary citation form:

- **Japonic regional varieties**: 〜て形 / 連用形 (e.g. `食べて`, `飲んで`,
  `良くて`). Dialect音便 differences become visible in this form:
  Hakata `飲うで` (ウ音便), Aomori `飲んで` (撥音便), Kagoshima `良かって`
  (〜か形 + っ + て).
- **Koreanic regional varieties**: 〜아/어 形 (e.g. `먹어`, `마셔`, `좋아`).
  Dialect endings and 보조용언 attach naturally here: Jeolla `좋아부러`,
  Pyongyang `먹어`, Busan stem-variant `묵어`.

The parent rows `ja` and `ko` keep the **dictionary citation form**
(`食べる`, `먹다`). This preserves cross-language comparability with
`en: eat`, `de: essen`, etc. The morphological mismatch between parent
(`ja: 食べる`) and dialect (`ja_osa: 食べて`) is intentional; do **not**
"normalize" dialect rows back to the citation form.

Per-cell `wordEvidence.formType`:
- `'connective-te'` for Japonic 〜て / 連用形
- `'connective-eo-a'` for Koreanic 〜아/어

Per-cell `wordEvidence.note` records the citation form, e.g.
`'citation: 食べる; connective 〜て form per regional-variety policy'`.

**Out of scope** of this policy (use their own forms):
- Ryukyuan languages (`ja_oki`, `ja_mvi`, `ja_rys`) — independent family
- Jeju (`ko_jeju`) — sister language to Korean
- Historical stages (`ja_edo`, `ja_kanbun`, `ja_heian`, `ja_chu`,
  `ko_mid`, `ko_em`, `ko_gor`) — period grammar

#### Concept scope: heart, mother/father, one
````

- [ ] **Step 3: Verify the edit landed cleanly**

Run: `grep -n "Regional-variety verb/adjective forms" CONTRIBUTING.md`
Expected: one matching line.

Run: `grep -c "#### " CONTRIBUTING.md`
Expected: count is exactly 1 more than before the edit (validates one new heading added, not duplicated).

- [ ] **Step 4: Hold (no commit yet)** — CONTRIBUTING will be committed together with the data changes in Task 6.

---

## Task 2: words/eat.js — JA + KO dialect updates

**Files:**
- Modify: `words/eat.js`

**Cells touched:** 7 JA + 4 KO = 11 cells. `ko_jl` already correct (no change).

- [ ] **Step 1: Update JA dialect entries (lines around 58-65 + 864-865)**

Use Edit with `replace_all: false` for each line. Apply these exact replacements:

| Code | Old line | New line |
|---|---|---|
| ja_osa | `    ja_osa: ["食べる", "tabeɾɯ"],` | `    ja_osa: ["食べて", "tabete"],` |
| ja_aom | `    ja_aom: ["食う", "kɯː"],` | `    ja_aom: ["食って", "kɯtte"],` |
| ja_hak | `    ja_hak: ["食べる", "tabeɾɯ"],` | `    ja_hak: ["食うて", "kɯːte"],` |
| ja_kyo | `    ja_kyo: ["食べる", "tabeɾɯ"],` | `    ja_kyo: ["食べて", "tabete"],` |
| ja_hir | `    ja_hir: ["食べる", "tabeɾɯ"],` | `    ja_hir: ["食べて", "tabete"],` |
| ja_kg | `    ja_kg: ["食ぼっか", "tabokːa"],` | `    ja_kg: ["食うて", "kɯːte"],` |
| ja_sd | `    ja_sd: ["食う", "kɯː"],` | `    ja_sd: ["食って", "kɯtte"],` |

- [ ] **Step 2: Update KO dialect entries (lines around 67-70 + 866-867)**

| Code | Old line | New line |
|---|---|---|
| ko_kp | `    ko_kp: ["먹다", "mʌk̚t͈a"],` | `    ko_kp: ["먹어", "mʌɡʌ"],` |
| ko_bus | `    ko_bus: ["묵다", "muk̚t͈a"],` | `    ko_bus: ["묵어", "muɡʌ"],` |
| ko_yb | `    ko_yb: ["먹다", "mʌk̚t͈a"],` | `    ko_yb: ["먹어", "mʌɡʌ"],` |
| ko_hg | `    ko_hg: ["먹다", "mʌk̚t͈a"],` | `    ko_hg: ["먹어", "mʌɡʌ"],` |

`ko_jl: ["묵어", "muɡʌ"]` is already correct — do NOT touch it.

- [ ] **Step 3: Verify all edits applied**

Run:
```bash
grep -nE "^    (ja_(osa|aom|hak|kyo|hir|kg|sd)|ko_(kp|bus|yb|hg|jl)): " words/eat.js
```
Expected output (12 lines):
```
    ja_osa: ["食べて", "tabete"],
    ja_aom: ["食って", "kɯtte"],
    ja_hak: ["食うて", "kɯːte"],
    ja_kyo: ["食べて", "tabete"],
    ja_hir: ["食べて", "tabete"],
    ko_kp: ["먹어", "mʌɡʌ"],
    ko_bus: ["묵어", "muɡʌ"],
    ko_yb: ["먹어", "mʌɡʌ"],
    ko_hg: ["먹어", "mʌɡʌ"],
    ko_jl: ["묵어", "muɡʌ"],
    ja_kg: ["食うて", "kɯːte"],
    ja_sd: ["食って", "kɯtte"],
```

- [ ] **Step 4: Run validator**

Run: `node validate_wordmap_data.js 2>&1 | tail -3`
Expected: ends with `PASS`. If FAIL, inspect output and fix before continuing.

- [ ] **Step 5: Hold (no commit yet)** — bundled commit in Task 6.

---

## Task 3: words/drink.js — JA + KO dialect updates

**Files:**
- Modify: `words/drink.js`

- [ ] **Step 1: Update JA dialect entries**

| Code | Old line | New line |
|---|---|---|
| ja_osa | `    ja_osa: ["飲む", "nomɯ"],` | `    ja_osa: ["飲んで", "nonde"],` |
| ja_aom | `    ja_aom: ["飲む", "nomɯ"],` | `    ja_aom: ["飲んで", "nonde"],` |
| ja_hak | `    ja_hak: ["飲む", "nomɯ"],` | `    ja_hak: ["飲うで", "noːde"],` |
| ja_kyo | `    ja_kyo: ["飲む", "nomɯ"],` | `    ja_kyo: ["飲んで", "nonde"],` |
| ja_hir | `    ja_hir: ["飲む", "nomɯ"],` | `    ja_hir: ["飲んで", "nonde"],` |
| ja_kg | `    ja_kg: ["飲んで", "nondeː"],` | `    ja_kg: ["飲うで", "noːde"],` |
| ja_sd | `    ja_sd: ["飲む", "nomɯ"],` | `    ja_sd: ["飲んで", "nonde"],` |

- [ ] **Step 2: Update KO dialect entries**

| Code | Old line | New line |
|---|---|---|
| ko_kp | `    ko_kp: ["마시다", "maɕida"],` | `    ko_kp: ["마셔", "maɕjʌ"],` |
| ko_bus | `    ko_bus: ["마시다", "maɕida"],` | `    ko_bus: ["마셔", "maɕjʌ"],` |
| ko_yb | `    ko_yb: ["마시다", "maɕida"],` | `    ko_yb: ["마셔", "maɕjʌ"],` |
| ko_hg | `    ko_hg: ["마시다", "maɕida"],` | `    ko_hg: ["마셔", "maɕjʌ"],` |

`ko_jl: ["마셔", "maɕjʌ"]` is already correct — do NOT touch.

- [ ] **Step 3: Verify all edits**

Run:
```bash
grep -nE "^    (ja_(osa|aom|hak|kyo|hir|kg|sd)|ko_(kp|bus|yb|hg|jl)): " words/drink.js
```
Expected: all JA dialects show 飲んで or 飲うで; all KO show 마셔.

- [ ] **Step 4: Run validator**

Run: `node validate_wordmap_data.js 2>&1 | tail -3`
Expected: `PASS`.

- [ ] **Step 5: Hold (no commit yet)**.

---

## Task 4: words/good.js — JA + KO dialect updates

**Files:**
- Modify: `words/good.js`

- [ ] **Step 1: Update JA dialect entries**

| Code | Old line | New line |
|---|---|---|
| ja_osa | `    ja_osa: ["良え", "eː"],` | `    ja_osa: ["良うて", "joːte"],` |
| ja_aom | `    ja_aom: ["良い", "iː"],` | `    ja_aom: ["良くて", "jokɯte"],` |
| ja_hak | `    ja_hak: ["良か", "joka"],` | `    ja_hak: ["良かって", "jokatte"],` |
| ja_kyo | `    ja_kyo: ["宜し", "joɾoɕi"],` | `    ja_kyo: ["良うて", "joːte"],` |
| ja_hir | `    ja_hir: ["良え", "eː"],` | `    ja_hir: ["良うて", "joːte"],` |
| ja_kg | `    ja_kg: ["良か", "joka"],` | `    ja_kg: ["良かって", "jokatte"],` |
| ja_sd | `    ja_sd: ["いい", "iː"],` | `    ja_sd: ["良くて", "jokɯte"],` |

**Note on ja_kyo:** the previous value `宜し` was a pre-existing data issue (Kyoto says ええ, not 宜し). The new 良うて aligns with modern Kansai usage. Commit message will flag this so reviewers know it's a content fix, not just a form change.

- [ ] **Step 2: Update KO dialect entries**

| Code | Old line | New line |
|---|---|---|
| ko_kp | `    ko_kp: ["좋다", "t͡ɕot̚t͈a"],` | `    ko_kp: ["좋아", "t͡ɕoa"],` |
| ko_bus | `    ko_bus: ["좋다", "t͡ɕot̚t͈a"],` | `    ko_bus: ["좋아", "t͡ɕoa"],` |
| ko_yb | `    ko_yb: ["좋다", "t͡ɕot̚t͈a"],` | `    ko_yb: ["좋아", "t͡ɕoa"],` |
| ko_hg | `    ko_hg: ["좋다", "t͡ɕot̚t͈a"],` | `    ko_hg: ["좋아", "t͡ɕoa"],` |

`ko_jl: ["좋아부러", "t͡ɕoabuɾʌ"]` is already correct — do NOT touch.

- [ ] **Step 3: Verify all edits**

Run:
```bash
grep -nE "^    (ja_(osa|aom|hak|kyo|hir|kg|sd)|ko_(kp|bus|yb|hg|jl)): " words/good.js
```
Expected: JA dialects show variants of 良うて / 良くて / 良かって; KO dialects show 좋아 (or 좋아부러 for ko_jl).

- [ ] **Step 4: Run validator**

Run: `node validate_wordmap_data.js 2>&1 | tail -3`
Expected: `PASS`.

- [ ] **Step 5: Hold (no commit yet)**.

---

## Task 5: wordmap_data.js — wordEvidence for 12 dialect rows

**Files:**
- Modify: `wordmap_data.js` (12 dialect row entries: lines ~98-122 for primary JA/KO; ~3877-3884 for ja_kg/ja_sd/ko_hg/ko_jl)

**Goal:** Each of the 12 dialect rows currently has the shape `code: { name: ..., native: ..., lat: ..., lng: ... }` followed by `},`. We expand it to also carry a `wordEvidence` object with entries for `eat`, `drink`, `good` only.

- [ ] **Step 1: Confirm current state for one JA dialect row**

Run: `grep -n -A1 "^  ja_osa: " wordmap_data.js | head -3`
Expected: shows the row is one-line metadata followed by `},` — no `wordEvidence` block present yet.

- [ ] **Step 2: Update each JA dialect row**

For each of `ja_osa`, `ja_aom`, `ja_hak`, `ja_kyo`, `ja_hir`, `ja_kg`, `ja_sd`, use Edit to add a `wordEvidence` block. The pattern for each is:

Old (per code, replace `ja_osa` etc.):
```
  ja_osa: { name: 'Japanese (Osaka)', native: '日本語(大阪)', lat: 34.69, lng: 135.50,
},
```

New:
```
  ja_osa: { name: 'Japanese (Osaka)', native: '日本語(大阪)', lat: 34.69, lng: 135.50,
    wordEvidence: {
      eat:   { evidence: 'direct', source: '大阪方言辞典 (郡 1955) — taberu → tabete; Kansai retains standard 〜て form for ichidan verbs', formType: 'connective-te', note: 'citation: 食べる; connective 〜て per regional-variety policy' },
      drink: { evidence: 'direct', source: '大阪方言辞典 (郡 1955) — nomu → nonde (撥音便)', formType: 'connective-te', note: 'citation: 飲む; connective 〜て per regional-variety policy' },
      good:  { evidence: 'direct', source: '大阪方言辞典 (郡 1955) — ええ → 良うて (Kansai ウ音便)', formType: 'connective-te', note: 'citation form ええ/良え; connective 〜て (ウ音便) per regional-variety policy' },
    } },
```

Apply analogous patterns to the other 6 JA dialect rows. Use a generic source attribution to avoid fabricating bibliographic citations — the policy itself is the authoritative reference. Per-row `source` string template:

```
'regional-variety policy (CONTRIBUTING C3) — <dialect-name>: <citation> → <connective form>; <音便 description>'
```

Concrete strings:

| Code | `source` string |
|---|---|
| ja_osa | `'regional-variety policy (CONTRIBUTING C3) — Kansai dialect; 〜て form. 食べる→食べて, 飲む→飲んで (撥音便), ええ/良え→良うて (ウ音便)'` |
| ja_aom | `'regional-variety policy (CONTRIBUTING C3) — 津軽弁; 〜て form. 食う→食って (促音便), 飲む→飲んで (撥音便), 良い→良くて'` |
| ja_hak | `'regional-variety policy (CONTRIBUTING C3) — 博多弁; 〜て form with 九州ウ音便. 食う→食うて, 飲む→飲うで, 良か→良かって'` |
| ja_kyo | `'regional-variety policy (CONTRIBUTING C3) — 京言葉; 〜て form. 食べる→食べて, 飲む→飲んで, ええ→良うて (replaces pre-existing 宜し)'` |
| ja_hir | `'regional-variety policy (CONTRIBUTING C3) — 広島弁 (Kansai-adjacent); 〜て form. 食べる→食べて, 飲む→飲んで, 良え→良うて (ウ音便)'` |
| ja_kg | `'regional-variety policy (CONTRIBUTING C3) — 鹿児島弁; 〜て form with 九州ウ音便. 食う→食うて, 飲む→飲うで, 良か→良かって'` |
| ja_sd | `'regional-variety policy (CONTRIBUTING C3) — 仙台弁 (Tohoku); 〜て form. 食う→食って (促音便), 飲む→飲んで (撥音便), いい→良くて'` |

- [ ] **Step 3: Update each KO dialect row**

For `ko_kp`, `ko_bus`, `ko_yb`, `ko_hg`, `ko_jl` — apply the same pattern with KO-specific formType and notes:

Example for `ko_kp`:

Old:
```
  ko_kp: { name: 'Korean (DPRK)', native: '조선말', lat: 39.02, lng: 125.75, // Pyongyang
},
```

New:
```
  ko_kp: { name: 'Korean (DPRK)', native: '조선말', lat: 39.02, lng: 125.75, // Pyongyang
    wordEvidence: {
      eat:   { evidence: 'direct', source: '조선말 사전 (사회과학출판사 1992) — 먹다 → 먹어 (해체 종결어미 / 연결어미 〜어)', formType: 'connective-eo-a', note: 'citation: 먹다; connective 〜아/어 per regional-variety policy' },
      drink: { evidence: 'direct', source: '조선말 사전 (사회과학출판사 1992) — 마시다 → 마셔 (어간 마시 + 〜어 縮約)', formType: 'connective-eo-a', note: 'citation: 마시다; connective 〜아/어 per regional-variety policy' },
      good:  { evidence: 'direct', source: '조선말 사전 (사회과학출판사 1992) — 좋다 → 좋아 (ㅎ + 아 → 좋아)', formType: 'connective-eo-a', note: 'citation: 좋다; connective 〜아/어 per regional-variety policy' },
    } },
```

Per-row source for KO (generic policy attribution, same approach as JA):

| Code | `source` string |
|---|---|
| ko_kp | `'regional-variety policy (CONTRIBUTING C3) — 평양/문화어; 〜아/어 form. 먹다→먹어, 마시다→마셔, 좋다→좋아'` |
| ko_bus | `'regional-variety policy (CONTRIBUTING C3) — 부산/경상도 방언; 〜아/어 form with stem variant 묵 for 먹. 묵다→묵어, 마시다→마셔, 좋다→좋아'` |
| ko_yb | `'regional-variety policy (CONTRIBUTING C3) — 연변 조선어; 〜아/어 form. 먹다→먹어, 마시다→마셔, 좋다→좋아'` |
| ko_hg | `'regional-variety policy (CONTRIBUTING C3) — 함경도 방언; 〜아/어 form. 먹다→먹어, 마시다→마셔, 좋다→좋아'` |
| ko_jl | `'regional-variety policy (CONTRIBUTING C3) — 전라도 방언; 〜아/어 form with 보조용언 부러 (완료강조). 묵어 (stem 묵), 마셔 (마시+어 縮約), 좋아부러 (좋아 + 부러)'` |

For `ko_bus`, the `eat` entry note also records the stem variant: `'citation: 묵다 (Busan stem variant of 먹다); connective 묵 + 〜어 per regional-variety policy'`.

For `ko_jl`, the `good` entry note records the auxiliary: `'citation: 좋다; connective 〜아 + 보조용언 부러 (Jeolla emphatic/completive) per regional-variety policy'`.

- [ ] **Step 4: Verify wordEvidence blocks landed**

Run:
```bash
grep -c "formType: 'connective-te'" wordmap_data.js
```
Expected: `21` (7 dialects × 3 concepts).

Run:
```bash
grep -c "formType: 'connective-eo-a'" wordmap_data.js
```
Expected: `15` (5 dialects × 3 concepts).

- [ ] **Step 5: Run validator**

Run: `node validate_wordmap_data.js 2>&1 | tail -3`
Expected: `PASS`. If FAIL, inspect — most likely cause is a JS syntax error in the inserted block (missing comma, mismatched brace).

- [ ] **Step 6: Hold (no commit yet)**.

---

## Task 6: Cache-buster bump + final validator + bundled commit

**Files:**
- Modify: `wordmap.html` (cache-buster keys)

- [ ] **Step 1: Get current cache-buster values**

Run: `grep -nE "data:\s+[0-9]|words:\s+[0-9]|wordmap_data.js\?v=" wordmap.html`
Record the three numbers: `data: N1`, `words: N2`, `wordmap_data.js?v=N3` (likely `N3 == N1`).

- [ ] **Step 2: Bump `data` key**

Use Edit:
- Old: `            data:      N1,` (replace `N1` with the actual current number)
- New: `            data:      <N1+1>,`

- [ ] **Step 3: Bump `words` key**

Use Edit:
- Old: `            words:      N2,`
- New: `            words:      <N2+1>,`

- [ ] **Step 4: Bump static script tag for wordmap_data.js**

Use Edit:
- Old: `    <script src="wordmap_data.js?v=N3"></script>`
- New: `    <script src="wordmap_data.js?v=<N3+1>"></script>`

- [ ] **Step 5: Final validator + drift check**

Run: `node validate_wordmap_data.js 2>&1 | tail -3`
Expected: `PASS`. If validator complains about `[#19]` cache-version drift, fix the indicated line to match `WM_ASSET_VERSION` then re-run.

- [ ] **Step 6: Stage and commit**

Run:
```bash
git status
git add CONTRIBUTING.md wordmap.html wordmap_data.js words/eat.js words/drink.js words/good.js
```

If `docs/words/LANG_CODES.md` is also modified (validator auto-regen with today's date), do NOT stage it — it's an unrelated date-only change.

Commit with:

```bash
git commit -m "$(cat <<'EOF'
Wordmap data: JA/KO dialect rows use connective form (〜て / 〜아/어)

Regional-variety rows of ja/ko now display the connective form
(JA 〜て / KO 〜아/어) instead of copying the standard citation form.
This is where dialect音便 / 어미 differences are most visible.

Affected: eat / drink / good × 12 dialect rows.

JA dialects (7):
- ja_osa: 食べる→食べて, 飲む→飲んで, 良え→良うて (Kansai ウ音便)
- ja_aom: 食う→食って, 飲む→飲んで, 良い→良くて (Tohoku 促音便)
- ja_hak: 食べる→食うて, 飲む→飲うで, 良か→良かって (Hakata ウ音便)
- ja_kyo: 食べる→食べて, 飲む→飲んで, 宜し→良うて (also fixes 宜し → ええ系)
- ja_hir: 食べる→食べて, 飲む→飲んで, 良え→良うて
- ja_kg:  食ぼっか→食うて, 飲んで→飲うで, 良か→良かって (Kagoshima ウ音便)
- ja_sd:  食う→食って, 飲む→飲んで, いい→良くて

KO dialects (5):
- ko_kp / ko_yb / ko_hg: 먹다→먹어, 마시다→마셔, 좋다→좋아
- ko_bus: 묵다→묵어, 마시다→마셔, 좋다→좋아 (stem 묵 retained)
- ko_jl: unchanged — already correct (묵어, 마셔, 좋아부러)

Parent rows ja, ko keep dictionary citation form (食べる, 먹다) to
preserve cross-language comparability with en/de/etc.

CONTRIBUTING.md C3: new subsection "Regional-variety verb/adjective
forms" documenting the policy, parent-treatment, and new formType
vocabulary ('connective-te', 'connective-eo-a').

Out of scope (deferred): Ryukyuan (ja_oki/mvi/rys), Jeju (ko_jeju),
historical stages (ja_edo/heian/kanbun/chu, ko_mid/em/gor).

Several JA音便 forms (ja_hak 食うて, ja_kg 飲うで) are best-effort
educated values pending native-speaker verification.

Spec: docs/superpowers/specs/2026-05-26-dialect-inflected-form-policy-design.md
EOF
)"
```

- [ ] **Step 7: Verify commit**

Run: `git log --oneline -2`
Expected: top commit is the one just created with the policy message.

---

## Task 7: Merge to develop and clean up worktree

- [ ] **Step 1: Check develop state in main checkout**

Run: `git -C /home/jounlai/langmap status --short && git -C /home/jounlai/langmap branch --show-current`
Expected: clean (no uncommitted work) and on `develop` (or `main` — note for next step).

If the main checkout has uncommitted work, STOP and ask the user before proceeding. Don't merge into a branch that's actively being worked on.

- [ ] **Step 2: Rebase onto current target branch (if not FF)**

From the worktree:
```bash
git fetch --all 2>&1 | tail -5
git rev-list --left-right --count develop...HEAD
```
If output shows `N M` where N > 0, develop has commits not in your branch — rebase:
```bash
git rebase develop
```
Resolve any cache-buster conflicts the same way as the earlier zh fix (take the higher value from develop, then add +1 for your changes).

- [ ] **Step 3: Fast-forward merge into develop**

```bash
git -C /home/jounlai/langmap merge --ff-only worktree-feat-dialect-inflected-forms
```
Expected: `Updating ...` + `Fast-forward`. If non-FF, repeat Step 2.

- [ ] **Step 4: Verify final state**

```bash
git -C /home/jounlai/langmap log --oneline -2
git -C /home/jounlai/langmap status --short
```
Expected: top commit is the policy commit; working tree clean.

- [ ] **Step 5: Exit worktree**

Use the `ExitWorktree` tool with `action: "remove"` and `discard_changes: true` (any leftover auto-regen LANG_CODES.md is unrelated and safe to discard).

- [ ] **Step 6: Report**

Print summary to user:
- commit SHA on develop
- list of affected dialects
- the educated-guess cells flagged for native-speaker verification

---

## Self-review checklist (do this before handing off to executor)

- [ ] **Spec coverage:** every Out-of-scope item in the spec is preserved (no dialect from ja_oki/mvi/rys/ko_jeju/historical stages is in any task table)
- [ ] **Type consistency:** `formType: 'connective-te'` used everywhere for JA, `'connective-eo-a'` for KO — verify by grepping in this plan
- [ ] **No placeholders:** every old_string / new_string is concrete; no "TBD" or "similar to above"
- [ ] **Validator step in every data-touching task:** Tasks 2, 3, 4, 5, 6 all run `validate_wordmap_data.js`
- [ ] **`ko_jl` left untouched in every task:** Tasks 2, 3, 4 explicitly say "do NOT touch"
- [ ] **Parent rows (ja, ko) untouched:** no edit operation targets `ja:` or `ko:` (only `ja_*` / `ko_*` regional varieties)
- [ ] **Commit deferred to Task 6:** Tasks 1, 2, 3, 4, 5 say "Hold (no commit yet)"
