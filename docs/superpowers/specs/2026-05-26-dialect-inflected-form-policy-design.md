# Dialect-variety inflected-form display policy

**Date:** 2026-05-26
**Status:** Approved (brainstorming) — pending implementation
**Trigger:** User observation that JA/KO regional-variety verb/adjective entries inconsistently mix dictionary citation forms and inflected forms, with no documented principle. Many varieties just copy the standard form, losing the dialect-distinguishing morphology.

## Problem

For verb-like concepts (`eat`, `drink`, `love`, `good`), regional-variety rows of an umbrella language can show:

- Different lexical roots (`食う` vs `食べる`, `묵다` vs `먹다`)
- Different inflectional categories (some show 連体形, some 意志形, some 〜て形)
- No inflection at all — just a copy of the standard citation form (`ja_osa: 食べる`, `ko_kp: 먹다`)

The third category is the worst: it produces "dialect" rows that contain zero dialect information. Example (current state):

```
ja_osa:  食べる   ← identical to ja
ja_hak:  食べる   ← identical to ja
ja_kyo:  食べる   ← identical to ja
ko_kp:   먹다     ← identical to ko
ko_bus:  묵다     ← lexical variant only, no inflectional dialect info
ko_yb:   먹다     ← identical to ko
```

Meanwhile, the one row that *does* show dialect-natural morphology is `ko_jl: 묵어 / 마셔 / 좋아부러` — a connective form (〜아/어) with optional dialect auxiliary (부러). This is the model to generalize.

The issue is cross-cutting and applies beyond Japonic/Koreanic (Sinitic, Romance, Tai have similar latent inconsistencies), but this spec scopes the first iteration to JA + KO modern regional varieties.

## Policy

### Core rule

For rows with `coverage: 'regional-variety'` or `coverage: 'base-copy-with-notes'` whose `parentCode` is `ja` or `ko`, verb/adjective concept words MUST use the **connective form** (the morphological category where dialect音便 / 어미 differences are most visible):

| Family | Connective form | Cognate role |
|---|---|---|
| Japonic (`ja`) | 〜て形 / 連用形 (食べて, 飲んで, 良くて) | Sentence connector + casual ender |
| Koreanic (`ko`) | 〜아/어 形 (먹어, 마셔, 좋아) | 반말 종결어미 + 연결어미 |

These two forms are morphologically parallel: both are built on the stem + a unifying ending, both serve as connector AND casual sentence-ender, both undergo phonological reductions that **vary systematically by dialect** (撥音便 / ウ音便 / 縮約 / 補助용언 attachment).

### Parent treatment

The parent rows `ja` and `ko` themselves keep their **dictionary citation form** (`食べる`, `먹다`):

- Preserves cross-language comparability (`en: eat`, `de: essen`, `ja: 食べる`, `ko: 먹다`).
- Does not break the existing CONTRIBUTING C3 default ("use the language's normal dictionary citation form").
- The policy in this spec is an **additive rule for regional-variety rows**, not a replacement of C3.

Trade-off accepted: the parent row and the dialect rows will show different morphological categories (`ja: 食べる` vs `ja_osa: 食べて`). This is acknowledged in CONTRIBUTING and is the price of keeping both cross-language and intra-family comparability legible.

### Out of scope (deferred to later phases)

These groups are explicitly **not** changed by this spec:

| Group | Codes | Reason |
|---|---|---|
| Ryukyuan languages | `ja_oki`, `ja_mvi`, `ja_rys` | Independent language family with its own verb morphology — needs Ryukyuan-specific policy, not a JA-dialect rule |
| Jeju | `ko_jeju` | Sister language to Korean (Koreanic family) with own paradigm |
| Historical stages | `ja_edo`, `ja_kanbun`, `ja_heian`, `ja_chu`, `ko_mid`, `ko_em`, `ko_gor` | Period-appropriate forms must respect period grammar |
| Other umbrella languages | Sinitic (`zh_*`), Romance, Tai, etc. | Future phases; same philosophy may apply but requires per-family research |
| Other concept words | `love` and all 16 non-verb/adjective concepts | `love` is contributor's deferred call this round; nouns/numerals/greetings don't inflect |

## Scope

### Concepts in trial (3)

- `eat` (動詞 / 동사)
- `drink` (動詞 / 동사)
- `good` (形容詞 / 형용사)

### Dialect rows in trial

**JA (7 rows):**
`ja_osa`, `ja_aom`, `ja_hak`, `ja_kyo`, `ja_hir`, `ja_kg`, `ja_sd`

**KO (5 rows):**
`ko_kp`, `ko_bus`, `ko_yb`, `ko_hg`, `ko_jl` (already done — used as reference model)

### Total cells affected

3 concepts × 12 rows = 36 cells maximum. `ko_jl` is already compliant for all 3 concepts (3 cells already correct), so the new edits are **≤ 33 cells**.

## Data shape

No new fields. The existing `[surface, ipa]` tuple in `words/<concept>.js` carries the inflected form directly. Citation form and inflectional category are recorded in `wordmap_data.js` per-cell `wordEvidence`:

```js
// wordmap_data.js excerpt (illustrative)
ja_osa: {
  // ...
  wordEvidence: {
    eat:   { evidence: 'direct', source: '...', formType: 'connective-te', note: 'connective 〜て form per dialect-variety policy; citation 食う/食べる' },
    drink: { evidence: 'direct', source: '...', formType: 'connective-te', note: '...; citation 飲む' },
    good:  { evidence: 'direct', source: '...', formType: 'connective-te', note: '...; citation 良え/ええ' },
  }
}
```

New `formType` values introduced:
- `'connective-te'` — Japonic 〜て / 連用形
- `'connective-eo-a'` — Koreanic 〜아/어

These join the existing `formType` vocabulary (`'inflected-form'`, `'compound'`, `'greeting-formula'`, `'thanks-formula'`, `'bound-stem'`).

## Per-cell target values (initial draft — requires native verification)

### JA — eat

| Code | Current | Target | Notes |
|---|---|---|---|
| ja_osa | 食べる | 食べて | tabete |
| ja_aom | 食う | 食って | kutte (撥音便なし、促音便) — verify Aomori actually does 食って vs 食うて |
| ja_hak | 食べる | 食うて | Hakata typically 食う > 食うて (ウ音便) — verify |
| ja_kyo | 食べる | 食べて | tabete — Kyoto 食べる is standard register; older 京言葉 may prefer 食う > 食うて |
| ja_hir | 食べる | 食べて | tabete |
| ja_kg | 食ぼっか | 食って or 食うて | Kagoshima 食う > 食うて (ウ音便) typical for 九州; current 食ぼっか is volitional, will be replaced |
| ja_sd | 食う | 食って | kutte — Sendai 食う standard |

### JA — drink

| Code | Current | Target | Notes |
|---|---|---|---|
| ja_osa | 飲む | 飲んで | nonde |
| ja_aom | 飲む | 飲んで | nonde |
| ja_hak | 飲む | 飲うで | Hakata ウ音便 nōde — verify |
| ja_kyo | 飲む | 飲んで | nonde (modern Kyoto); older 京 may be 飲うで |
| ja_hir | 飲む | 飲んで | nonde |
| ja_kg | 飲んで | 飲うで | Kagoshima typically ウ音便 — verify |
| ja_sd | 飲む | 飲んで | nonde |

### JA — good

| Code | Current | Target | Notes |
|---|---|---|---|
| ja_osa | 良え | 良うて | ē → yōte (Kansai ウ音便) |
| ja_aom | 良い | 良くて | yokute (Aomori standard 〜くて) |
| ja_hak | 良か | 良かって | Hakata 〜か形の連用 yokatte |
| ja_kyo | 宜し | 良うて(ええて) | Existing 宜し is questionable — Kyoto says ええ; 〜て form ええて/良うて. **Flag for separate fix.** |
| ja_hir | 良え | 良うて | Hiroshima Kansai-adjacent ウ音便 yōte |
| ja_kg | 良か | 良かって | Kagoshima 〜か形 yokatte |
| ja_sd | いい | 良くて | Sendai standard yokute |

### KO — eat

| Code | Current | Target | Notes |
|---|---|---|---|
| ko_kp | 먹다 | 먹어 | meogeo (Pyongyang standard 〜어) |
| ko_bus | 묵다 | 묵어 | mugeo (Busan stem 묵 + 〜어) — matches ko_jl |
| ko_yb | 먹다 | 먹어 | meogeo |
| ko_hg | 먹다 | 먹어 | meogeo (Hamgyong) |
| ko_jl | 묵어 | 묵어 | (already correct) |

### KO — drink

| Code | Current | Target | Notes |
|---|---|---|---|
| ko_kp | 마시다 | 마셔 | masyeo (contraction 마시+어) |
| ko_bus | 마시다 | 마셔 | masyeo |
| ko_yb | 마시다 | 마셔 | masyeo |
| ko_hg | 마시다 | 마셔 | masyeo |
| ko_jl | 마셔 | 마셔 | (already correct) |

### KO — good

| Code | Current | Target | Notes |
|---|---|---|---|
| ko_kp | 좋다 | 좋아 | joa |
| ko_bus | 좋다 | 좋아 | joa |
| ko_yb | 좋다 | 좋아 | joa |
| ko_hg | 좋다 | 좋아 | joa |
| ko_jl | 좋아부러 | 좋아부러 | (already correct — 좋아 + 부러 emphatic aux) |

## Implementation steps

1. **CONTRIBUTING.md C3 addition** — new subsection "Regional-variety verb/adjective forms (Japonic / Koreanic)" documenting the policy, parent-treatment rule, scope, and `formType` vocabulary additions.
2. **`words/eat.js`** — update ≤ 11 cells (7 JA + 4 KO; ko_jl unchanged).
3. **`words/drink.js`** — update ≤ 11 cells.
4. **`words/good.js`** — update ≤ 11 cells.
5. **`wordmap_data.js`** — for each of the 12 affected dialect rows, ensure `wordEvidence` exists and add `formType` + citation-form `note` for eat/drink/good cells. Several of these rows currently have no `wordEvidence` block (just `{}`) — add a minimal one of shape `{ wordEvidence: { eat: { evidence: 'direct', source: '<grammar reference>', formType: 'connective-te', note: 'citation: 食べる' }, drink: {...}, good: {...} } }`.
6. **Cache-buster bump** in `wordmap.html`: `words` and `data` keys both increment by 1; matching `<script src="wordmap_data.js?v=...">` line bumped too.
7. **Validator run** — `node validate_wordmap_data.js` must PASS.

Recommended commit shape: **one bundled commit** covering all three concepts, the CONTRIBUTING addition, and the cache-buster bump, with the commit message listing all changed cells and explicitly flagging which need native-speaker verification.

## Validation strategy

- Existing validator (`validate_wordmap_data.js`) runs unchanged. It already enforces `[surface, ipa]` shape and cross-file consistency. The dialect-variety form change is data-side only and does not require new validator checks for this trial.
- No new test infrastructure. Native-speaker review is the validation mechanism for the linguistic correctness of each cell — this is the existing project model (per CONTRIBUTING).
- Commit messages MUST mark cells that need native verification (specifically `ja_aom`, `ja_kg`, `ja_hak`, `ja_kyo` 一部) so reviewers can target them.

## Risks and acknowledged trade-offs

1. **Per-dialect音便 may be wrong without native verification.** Several JA dialect 〜て forms are educated guesses (Hakata 食うて, Kagoshima 飲うで). The change still strictly improves on the current state (which copies the standard form, showing zero dialect info), but a follow-up native-speaker pass is expected.
2. **ja_kyo 宜し is a pre-existing data issue.** Will be flagged but not fixed in this spec to keep scope focused.
3. **Parent / dialect morphological mismatch** (ja=食べる, ja_osa=食べて) is intentional — see "Parent treatment" above. CONTRIBUTING addition must explicitly document this so future contributors don't "normalize" it back.
4. **Concept policy split.** CONTRIBUTING C3 currently has one rule for "verb forms (eat/drink/love)". This spec adds a second rule that applies only to regional varieties of Japonic/Koreanic. The C3 wording must make the layered rule explicit, otherwise contributors will hit ambiguity.
5. **No automated guard prevents regression.** A contributor could re-flatten `ja_osa: 食べる` and the validator would not complain. Acceptable for trial scope; if the policy survives the trial, a future validator check could whitelist permitted form categories per parentCode.

## Success criteria

- All ≤ 33 affected cells display dialect-natural connective forms (or equivalent — for already-compliant `ko_jl`, unchanged).
- CONTRIBUTING C3 has a new subsection documenting the rule, with parent-treatment caveat and `formType` vocabulary.
- `validate_wordmap_data.js` PASSes.
- Browser sanity check on wordmap.html confirms dialect rows now visibly differ from the standard row for eat/drink/good.
- A follow-up issue is filed (informally, via commit message hook) flagging `ja_kyo 宜し` for separate review.
