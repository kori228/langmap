# Word Map: per-word file split — design

Author: Jounlai Cho (Heuron Inc.) + Claude
Date: 2026-05-18
Status: draft (awaiting user review)

## Background and goals

Currently the LangMap wordmap stores all data for all words inline in
`wordmap_data.js`:

- A `WORD_LIST` array of 20 concept entries (each with `id`, multi-lang
  `label`, multi-lang `definition`).
- 934 language entries, each holding all 20 translations inline:
  `eo: { name: 'Esperanto', …, words: { water:['akvo','akvo'], … } }`.
- Sparse per-language `altWordForms` for languages with multiple writing
  systems (e.g. Zhuang Sawndip ↔ Sawcuengh Latin, Khitan small-script
  ↔ Romanization).

The current shape works for ~20 concepts but doesn't scale gracefully to
30-50. Adding a new concept today means appending to `WORD_LIST` *and*
touching every one of the 934 language entries.

The user wants to expand the concept list to ~30-50 and considers manual
authoring an important workflow. The design goal:

> One file per concept. Adding a new concept = creating one new file plus
> one manifest line. The file should be human-readable, editable
> with a plain text editor, and self-contained (all knowledge about the
> concept lives in one place).

## Scope

In scope:
- New directory `words/` with one JS file per concept.
- New `word_manifest.js` defining display order.
- Migration of the existing 20 concepts (water/fire/sun/…) from inline
  storage into the new structure.
- Updated `wordmap_data.js` (language metadata only, no inline words).
- Updated `validate_wordmap_data.js` covering the new structure.
- Contributor documentation in English and Japanese.
- Auto-generated language-code reference (`docs/words/LANG_CODES.md`).

Out of scope (deliberately):
- The actual addition of new concepts beyond the existing 20. The user
  will author new concepts separately once the infrastructure ships.
- Splitting language metadata into per-language files. Languages stay
  consolidated in `wordmap_data.js`.
- Adding a build step. All loading happens via `<script>` tags at
  runtime; no bundling/compilation required.
- Lazy loading. All per-word files are loaded eagerly at startup
  (language detail and comparison modals reference all words at once;
  see "Loading strategy" below).

## Final shape

### Directory layout

```
/home/jounlai/langmap/
├── word_manifest.js            ← ordered list of concept IDs
├── words/
│   ├── water.js                ← 1 file per concept (label + definition + translations)
│   ├── fire.js
│   ├── sun.js
│   └── …                       (currently 20 files; grows to ~30-50)
├── wordmap_data.js             ← language metadata only (lat/lng/name/native/…)
├── wordmap_meta.js             ← unchanged (per-language meta + sources)
├── wordmap.html                ← reads word_manifest.js, injects <script> tags
├── docs/
│   └── words/
│       ├── CONTRIBUTING.md     ← English contributor manual
│       ├── CONTRIBUTING.ja.md  ← Japanese version
│       └── LANG_CODES.md       ← 934-language code reference (auto-generated)
└── tools/
    ├── migrate_inline_words_to_files.py   ← one-time migration
    └── generate_lang_codes_md.py          ← regenerator for LANG_CODES.md
```

### Per-word file format

```js
/**
 * water - drinkable water (H₂O)
 *
 * New entries: see docs/words/CONTRIBUTING.md / CONTRIBUTING.ja.md
 * Language codes: see docs/words/LANG_CODES.md
 */
WORDS.water = {
  // UI label shown in the word selector. Required: en, ja. Other UI
  // languages fall back to en at render time if missing.
  label: {
    en: 'Water', ja: '水', ko: '물', /* … */
  },
  // Long-form description shown in modals and tooltips. Required: en, ja.
  definition: {
    en: 'Drinkable water (H₂O); the basic substance, not a body of water.',
    ja: '飲用・生活用の水 (H₂O)。川・湖・海などの水域そのものではない。',
    /* … */
  },
  // Per-language translations. Two valid shapes:
  //   tuple  : [form, ipa]                — for simple cases (~95% of entries)
  //   object : { form, ipa, alt, source } — when alt scripts or sources apply
  data: {
    // === East Asia ===
    ja:  ['水',    'mizu'],
    ko:  ['물',    'mul'],
    zh:  ['水',    'ʂweɪ˧˩˧'],
    yue: ['水',    'sɵy˧˥'],

    // === Southeast Asia ===
    vi:  ['nước',  'nɨək˧˥'],

    // === Multi-script case (object form) ===
    za:  {
      form:   '淰',
      ipa:    'rɐmˀ˧˥',
      alt: [
        { form: 'raemx',           script: 'Latin (Sawcuengh)',
          source: '1957/1982 official orthography' },
        { form: '𭜯 / 淋 / 𭰽',     script: 'Sawndip (古壮字)',
          source: 'za.wikipedia.org Raemx' },
      ],
      source: {
        title: 'za.wikipedia.org',
        url:   'https://za.wikipedia.org/wiki/Raemx',
      },
    },

    // === Europe ===
    en:  ['water',  'wɔːtər'],
    de:  ['Wasser', 'vasɐ'],
    /* … */
  },
};
```

Formatting conventions (style only — not enforced by tooling):
- Column-align `form` and `ipa` within each region group for readability.
- Region comments (`// === East Asia ===`) are free-form; group however
  makes sense for the editor.
- Missing IPA: use empty string (`['water', '']`).
- Language has no equivalent for this concept: omit the row entirely.

### Word ordering

A single source of truth for display order:

```js
// word_manifest.js
const WORD_ORDER = [
  'water', 'fire', 'sun', 'moon',
  'mother', 'father', 'eat', 'drink',
  'love', 'heart', 'tree', 'house',
  'dog', 'cat', 'hand', 'eye',
  'hello', 'thanks', 'one', 'good',
  // new concepts go here in display order
];
```

The selector in `wordmap.html` iterates `WORD_ORDER`. Reordering = edit
one line. The filename (`words/water.js`) and the manifest entry
(`'water'`) and the in-memory key (`WORDS.water`) all agree, so the same
identifier grep-finds everything related to a concept.

### Loading strategy

Eager-load all per-word files at startup via static `<script>` tags
synthesized from the manifest.

`wordmap.html` includes a tiny inline loader:

```html
<script src="word_manifest.js?v=…"></script>
<script src="wordmap_data.js?v=…"></script>
<script>
  // Synthesize <script> tags for every word in WORD_ORDER. The browser
  // downloads them in parallel; load order doesn't matter because each
  // file just writes to a different WORDS[id] slot. We then await all
  // load events before booting the rest of the app.
  (function () {
    window.WORDS = window.WORDS || {};
    const remaining = new Set(WORD_ORDER);
    function maybeBoot() {
      if (remaining.size === 0) {
        document.dispatchEvent(new Event('langmap:words-loaded'));
      }
    }
    for (const id of WORD_ORDER) {
      const s = document.createElement('script');
      s.src = `words/${id}.js?v=${WM_ASSET_VERSION.words}`;
      s.onload  = () => { remaining.delete(id); maybeBoot(); };
      s.onerror = () => { console.error('failed to load word', id); };
      document.head.appendChild(s);
    }
  })();
</script>
```

The main app (the inline IIFE in `wordmap.html`) waits for
`langmap:words-loaded` before constructing `LANG_DATA[code].words`
lookups.

Rationale for eager + parallel:
- Language detail and comparison modals show ALL words at once, so we
  need every file resolved before those open.
- 30-50 small (~50-100KB each) parallel HTTP requests over HTTP/2 are
  fine; total bytes are about the same as the current single 5,049-line
  file.
- No build step required.
- Failures are non-fatal at boot — a missing word just won't appear in
  the selector — though a console error is logged.

Why not lazy: the modals immediately reference everything, so lazy load
would just trade a "slow startup" problem for a "modal opens after a
network round-trip" problem.

### Runtime merge into LANG_DATA

Existing consumers throughout `wordmap.html` read `LANG_DATA[code].words[wordId]`.
We keep that shape. After all `WORDS.*` files load, a single merge pass
populates `LANG_DATA[code].words`:

```js
for (const id of WORD_ORDER) {
  const w = WORDS[id];
  if (!w || !w.data) continue;
  for (const [code, entry] of Object.entries(w.data)) {
    if (!LANG_DATA[code]) continue;
    if (!LANG_DATA[code].words) LANG_DATA[code].words = {};
    if (Array.isArray(entry)) {
      LANG_DATA[code].words[id] = entry;            // [form, ipa]
    } else {
      LANG_DATA[code].words[id] = [entry.form, entry.ipa];
      if (entry.alt) {
        LANG_DATA[code].altWordForms = LANG_DATA[code].altWordForms || {};
        LANG_DATA[code].altWordForms[id] = entry.alt;
      }
    }
  }
}
// Also derive the legacy WORD_LIST shape:
window.WORD_LIST = WORD_ORDER.map(id => ({
  id,
  label:      WORDS[id].label,
  definition: WORDS[id].definition,
}));
```

No code outside this merge needs to change.

### Migration

A one-time migration script `tools/migrate_inline_words_to_files.mjs`
(Node, not Python — `wordmap_data.js` is real JS with multi-line
strings, escape sequences, and template literals, so the cheapest
reliable parser is the JS engine itself):

1. Loads `wordmap_data.js` under Node (it already only assigns to
   `LANG_DATA` / `WORD_LIST`, no DOM dependency) and reads the
   resulting in-memory objects.
2. For each existing `wordId` in `WORD_LIST`:
   - Collects per-language `[form, ipa]` from `LANG_DATA[code].words[wordId]`.
   - Collects matching `LANG_DATA[code].altWordForms[wordId]` if present
     and folds it into the object form.
3. Writes `words/<wordId>.js` with the per-word file structure above,
   preserving region comments where reasonable (best-effort grouping by
   the existing top-level family/region order in `wordmap_data.js`).
4. Emits a stripped `wordmap_data.js` with `WORD_LIST`, `words: {…}`,
   and `altWordForms: {…}` removed from each language entry.

The migration is reviewed visually (diff per file) before the migration
commit lands. A `pre-word-split` git tag is placed on the commit
preceding the migration so rollback is one `git reset` away.

The migration script itself stays in the repo as documentation of how
the transposition was done.

### Validator updates

`validate_wordmap_data.js` gets new checks:

1. **Manifest forward-coverage**: every ID in `WORD_ORDER` has a
   corresponding `words/<id>.js` that defines `WORDS.<id>`.
2. **Manifest reverse-coverage**: every file in `words/` is registered
   in `WORD_ORDER` (no orphan files).
3. **Language-code integrity**: every key of `WORDS.<id>.data` exists
   in `LANG_DATA`.
4. **Label completeness**: `WORDS.<id>.label.en` and `label.ja` required.
5. **Definition completeness**: `WORDS.<id>.definition.en` and
   `definition.ja` required.
6. **Tuple integrity**: tuple-form entries are arrays of length 2 with
   non-empty `form`.
7. **Object integrity**: object-form entries have a non-empty `form`,
   `alt` (if present) is an array, and each alt entry has both `form`
   and `script`.

`ASSET_KEY_BY_PATH` gets:
```js
'words/*.js':       'words',
'word_manifest.js': 'words',
```

Drift check (cache-version vs `?v=` URL) continues to work via the
existing path-pattern logic.

### Cache versioning

`WM_ASSET_VERSION` gains one new key:

```js
const WM_ASSET_VERSION = {
  styles:    78,
  data:     214,   // bumped: words/altWordForms removed from this file
  meta:     190,
  metaI18n:  15,
  filter:    31,
  names:    108,
  trivia:    27,
  triviaI18n: 3,
  words:      1,   // NEW: covers word_manifest.js + every words/*.js
};
```

Policy: any change to any per-word file or to `word_manifest.js` bumps
the single `words` counter. Per-file versions are not introduced —
they would balloon the registry without an operationally meaningful
benefit.

The inline loader in `wordmap.html` reads `WM_ASSET_VERSION.words` and
appends `?v=…` to every synthesized `<script src>`.

### Contributor documentation

Three new files under `docs/words/`:

#### `docs/words/CONTRIBUTING.md` (English)

Section outline:

1. Repository structure (where per-word files live and why)
2. **Adding a new concept (5 steps)** — create `words/<id>.js`, fill
   `label`/`definition`/`data`, append the ID to `WORD_ORDER`, run
   the validator, commit
3. **Adding a new translation to an existing concept (3 steps)** — open
   the relevant `words/<id>.js`, add the row in the right region block,
   run the validator
4. File format spec (tuple vs object, IPA conventions, alt scripts,
   sources)
5. Looking up language codes (link to `LANG_CODES.md`)
6. Citing sources
7. Local preview workflow (`python3 server.py`)
8. Pull-request etiquette and review checklist

#### `docs/words/CONTRIBUTING.ja.md` (Japanese)

Same outline, translated. Each step's example code is identical to the
English version (kept literal so contributors switching between manuals
see the same lines).

#### `docs/words/LANG_CODES.md` (auto-generated)

Tab-separated table of every code currently in `LANG_DATA`, with:

| Code | English name | Japanese name | Family | Speakers |

Generated by `tools/generate_lang_codes_md.py`, which reads
`wordmap_data.js` (for `name`, `lat`, `lng`), `lang_names.js` (for
localized display names), and `wordmap_meta.js` (for family + speakers).
Header documents which script regenerated it and when.

Contributors who add a new language ALSO regenerate `LANG_CODES.md` as
part of the same commit (the validator can verify the file is
up-to-date by re-running the generator and comparing output).

## Backwards compatibility

- `LANG_DATA[code].words[wordId]` continues to return `[form, ipa]` —
  populated by the runtime merge, identical shape to today.
- `LANG_DATA[code].altWordForms[wordId]` continues to exist — populated
  from object-form entries' `alt` field.
- `WORD_LIST` global continues to exist — derived from `WORD_ORDER` +
  `WORDS.<id>.label / .definition`.

No consumer in `wordmap.html` or its modals needs to change.

## Risks / open questions

1. **Region comment preservation.** Existing `wordmap_data.js` groups
   languages by family/region via section banner comments. Loading the
   JS under Node loses comments. The migration produces flat
   (un-grouped) files; a follow-up commit can re-group them by family
   using the existing `wordmap_meta.js` family data. Decision: ship
   flat, regroup in a separate commit.

2. **Validator drift check on `words/*.js` glob.** The current
   `ASSET_KEY_BY_PATH` is a string-to-string map. Globs are new. The
   validator update extends it to walk `Object.entries(map)` twice —
   once for exact paths, once for glob patterns (`words/*.js`).

3. **Auto-generated `LANG_CODES.md` staleness.** If a contributor adds a
   language but forgets to regenerate, the file lags. The validator
   runs the generator and diffs the result against the checked-in
   `LANG_CODES.md` — fails if stale.

## Implementation order

1. Land the migration script + run it once. Verify diffs visually. Tag
   `pre-word-split` on the parent commit.
2. Land the per-word files + stripped `wordmap_data.js`.
3. Land the runtime loader + merge logic in `wordmap.html`. Verify in
   the browser that all 20 concepts still render and all comparison
   modals work.
4. Land the updated validator and run it green.
5. Land the contributor docs and the `LANG_CODES.md` generator.
6. Add a brief note to top-level README pointing to `docs/words/`.

Each step lands as its own commit so rollback granularity stays fine.

## Acceptance criteria

- `python3 server.py` serves the page and every existing word displays
  identically to before the split (visual diff via comparing zoom-7
  screenshots of the wordmap for a sampled set of concepts).
- `node validate_wordmap_data.js` passes with zero new failures.
- Adding a single new concept (test: pick a placeholder like `"book"`)
  is possible with **only** these edits: create `words/book.js`, append
  `'book'` to `WORD_ORDER`, bump `WM_ASSET_VERSION.words`.
- The contributor docs are committed and the language-code reference
  generator produces a non-empty `LANG_CODES.md`.
