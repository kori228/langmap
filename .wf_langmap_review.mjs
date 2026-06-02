export const meta = {
  name: 'langmap-review',
  description: 'LangMap data.js per-language expert review (30 reviewers) + dev catch-ball (10 devs) until closed',
  phases: [
    { title: 'Review' },
    { title: 'Audit' },
    { title: 'Dev' },
    { title: 'Apply' },
    { title: 'Validate' },
    { title: 'Close' },
  ],
}

// args = { mode:'generate'|'cycle', round:int, files:[int,...]|null }
// NOTE: args is unreliable for scriptPath invocations in this harness — it can
// silently fall back to defaults. So FORCE below is the source of truth; EDIT IT
// before each launch. args, if delivered, still overrides.
const FORCE = { mode: 'cycle', round: 13, files: [5, 7, 9, 11, 13, 17, 22, 24, 26] }
const mode = (args && args.mode) || FORCE.mode
const round = (args && args.round) || FORCE.round
const onlyFiles = (args && Array.isArray(args.files)) ? args.files : (Array.isArray(FORCE.files) ? FORCE.files : null)

const GROUPS = [
  ['Japonic — modern standard & mainland dialects', ['ja','ja_edo','ja_kyo','ja_osa','ja_aom','ja_hir','ja_mvi']],
  ['Japonic — historical stages, Ryukyuan & Ainu', ['ja_heian','ja_hak','ja_oki','ja_rys','ain']],
  ['Koreanic — Standard, regional & historical', ['ko','ko_bus','ko_em','ko_jeju','ko_kp','ko_mid','ko_yb']],
  ['Sinitic — Mandarin & historical Chinese stages', ['zh','zh_db','zh_sc','zh_han','zh_tang','zh_song','wuu']],
  ['Sinitic — Southern varieties & SW-China minorities', ['yue','nan','hak_cn','cdo','ii','za','hmn']],
  ['Gallo-Romance — French varieties, Occitan, Catalan, Romansh', ['fr','fr_be','fr_ch','fr_qc','fr_af','oc','ca','rm']],
  ['Ibero-Romance — Spanish varieties', ['es_mx','es_ar','es_cl','es_co','es_pe','es_cu','es_an','es_eu']],
  ['West-Iberian Romance & Romance-based creoles', ['pt_br','pt_eu','gl','lad','ht','pap']],
  ['Italo-Romance & Romanian', ['it','nap','scn','vec','sc','ro']],
  ['Classical & ancient Indo-European', ['la','ine','hit','got','el_grc','cu','non']],
  ['English — national/regional varieties', ['en','en_au','en_ie','en_sco','en_in','en_sg','en_yk','en_ck']],
  ['English — social/historical varieties & English creoles', ['en_aave','en_app','en_south','enm','en_ang','sco','jam','pcm']],
  ['West-Germanic — continental', ['de','de_at','de_by','de_gsw','nds','nl','af','fy']],
  ['North-Germanic & Yiddish', ['sv','da','no','nn','is','fo','yi']],
  ['Slavic — East, West & South', ['ru','uk','be','bg','sr','sl','pl','cs','sk']],
  ['Baltic, Celtic, Hellenic, Albanian, Armenian & Basque', ['lt','lv','ga','cy','br','el','sq','hy','eu']],
  ['Indo-Aryan — Northern (Hindustani belt)', ['hi','ur','bn','pa','bho']],
  ['Indo-Aryan — Eastern & Western', ['as','or','ne','mr','gu']],
  ['Indic classical & Dravidian', ['sa','pi','si','sd','rom','ta','te','kn','ml']],
  ['Iranian & Georgian', ['fa','ps','ku','ckb','tg','ka']],
  ['Turkic', ['tr','az','kk','ky','uz','tk','ug']],
  ['Mongolic, Tungusic & Uralic', ['mn','mn_cn','mnc','fi','et','hu']],
  ['Arabic — MSA & spoken varieties', ['ar','ar_eg','ar_gulf','ar_iq','ar_lev','ar_ma','ar_sd','ar_tn']],
  ['Other Semitic & Ancient Near East', ['he','am','ti','mt','arc','akk','sux','egy','cop']],
  ['Austronesian — Insular Southeast Asia', ['id','ms','jv','su','tl','ceb','ilo']],
  ['Austronesian — Pacific & Madagascar', ['mi','haw','sm','fj','pau','mg']],
  ['Mainland Southeast Asia (Tai-Kadai, Austroasiatic, Tibeto-Burman)', ['th','th_isan','th_n','th_s','lo','km','my','bo']],
  ['Vietnamese & Pacific creoles', ['vi','vi_c','vi_s','vi_nom','hwc','tpi']],
  ['African — Niger-Congo, Nilotic & Cushitic', ['sw','yo','ig','ha','zu','xh','sn','ny','rw','ln','wo','so','om']],
  ['Constructed languages & Indigenous Americas', ['eo','tok','tlh','jbo','qu','gn','nv','chr','myn','nci','iu']],
]
const pad2 = (n) => (n < 10 ? '0' + n : '' + n)
const all30 = GROUPS.map((g, i) => ({
  n: i + 1, nn: pad2(i + 1), theme: g[0], codes: g[1],
  slice: `/tmp/langmap_slices/${pad2(i + 1)}.md`,
  md: `langmap_reviews/${pad2(i + 1)}.md`,
  closed: `langmap_reviews/${pad2(i + 1)}_closed.md`,
}))
const targets = onlyFiles ? all30.filter((r) => onlyFiles.includes(r.n)) : all30

const DATA_DESC = `the single shared data file \`data.js\` (a JS array \`SENTENCES\` of 100 sentences; each sentence = {id, title, segments{A..K:color}, langs{ <code>: [ ["RoleLetter","surface text"], ... ] }}). Same role-letter across languages = same syntactic role / colour. A language's array lists its segments IN THE ORDER THAT LANGUAGE WRITES THEM, so the *sequence of role-letters* encodes that language's word order (e.g. SOV vs SVO).`

const TOOLS_DESC = `TOOLS to inspect LIVE data cheaply and exactly (do NOT load all of data.js into context — it is ~6 MB):
- \`node .wf_langmap_query.mjs <id> <code> [<code> ...]\` → prints the current alignment for those languages in sentence <id> (with the title). Use this to read the EXACT current value of any cell.
- \`node .wf_langmap_query.mjs <id>\` → all languages for that sentence (useful to compare against the reference/other members of a family).
- You may also grep data.js for a specific surface string, but the query tool is preferred because surface strings repeat.`

// =================== GENERATE (initial reviews) ===================
const GEN_PROMPT = (r) => `You are the world's foremost expert reviewer for this language group:

**Group ${r.nn}: ${r.theme}**
Languages you own (code → you must judge each one): ${r.codes.join(', ')}

You are reviewing the data behind LangMap (https://langmap.heuron.com/), a multilingual WORD-ORDER comparison map. Your data slice is at \`${r.slice}\` — READ IT IN FULL first. It contains all 100 sentences, each showing the English (en) and Japanese (ja) reference segmentations plus every language in your group. ${DATA_DESC}

${TOOLS_DESC}

YOUR JOB — review your group's data for three things, per sentence, accurately and in fine detail:
1. **表現の自然さ (naturalness)**: Is each language's sentence what a fluent native speaker would actually say? Flag awkward calques, wrong register, non-idiomatic word choice, wrong loanword vs native term, wrong script/orthography, missing diacritics, gender/agreement/case errors, wrong dialect-marking (a dialect row must show the FAMOUS distinctive features of that variety, not just the standard form re-spelled).
2. **セグメント分けの正しさ (segmentation correctness)**: Does the sequence of role-letters correctly capture THIS language's real word order? Are clitics/particles/agglutinative suffixes split the way the project does it (e.g. agglutinative suffixes get their own segment, often with a ZWNJ \\u200C glue-prefix; modal/auxiliary verbs match the reference language's role-letter, not relabelled as subject)? Are there wrongly-merged or wrongly-split chunks, mis-assigned role-letters, or adjacent duplicate role-letters that should be merged?
   **PROJECT POLICY — PREFER SPLITTING:** when a chunk *could* legitimately be either one segment or several (a particle/clitic/auxiliary/suffix that maps to a distinct role, a fused word that corresponds to multiple reference-language roles), PREFER THE FINER SPLIT. Flag under-segmented (over-fused) cells where a genuinely separable element is glued into a neighbour. The ONLY hard limit is: do not produce two ADJACENT segments with the SAME role-letter (those must stay merged) — but two adjacent segments with DIFFERENT role-letters are good and preferred over one fused chunk.
3. **データの適切さ (data appropriateness)**: missing data, placeholder/wrong-language content, a cell that actually holds a different word than intended, inconsistencies between closely-related varieties in your group.

WRITE your review to \`${r.md}\` (create it; you exclusively own this file). Structure (write the prose in Japanese to match the project's other review files; keep codes/IPA/example surface forms verbatim):
- \`# LangMap データレビュー #${r.nn} — ${r.theme}\`
- \`## レビュアー自己紹介 (ペルソナ)\` — invent a credible specialist persona for THIS group: name/handle, credentials, the grammars/dictionaries/corpora you rely on, and which of your languages you are most authoritative on. 1 substantial paragraph.
- \`## 検証範囲\` — which languages × which sentences you actually checked.
- \`## 指摘事項 (Issues found)\` — a numbered list. For EACH issue give: the sentence number + language code; **Current:** the exact current alignment (copy verbatim, e.g. \`A:「…」 B:「…」\`); **Problem:** what is wrong and WHY (cite a concrete grammatical/lexical reason — be specific, not vague); **Proposed fix:** the corrected form — if it is a segmentation change, give the FULL corrected role-letter+surface sequence so a developer can apply it directly. Mark each issue's confidence: 【確実】(certain, well-sourced) / 【蓋然】(probable) / 【要検討】(judgement call).
- Be rigorous and concrete. Prefer a smaller number of SOLID, defensible findings over a long list of vague ones. It is fine to also note "this language's data is largely correct" where true. Aim to surface every genuinely wrong cell you can defend.

Return JSON: issueCount (number of distinct issues you logged), certainCount (how many are 【確実】), summary (2 sentences).`

const GEN_SCHEMA = {
  type: 'object',
  required: ['issueCount', 'summary'],
  properties: {
    issueCount: { type: 'integer' },
    certainCount: { type: 'integer' },
    summary: { type: 'string' },
  },
}

// =================== AUDIT (round-4 reviewer-first: split granularity + dialect naturalness) ===================
const AUDIT_PROMPT = (r) => `You are the specialist reviewer for Group ${r.nn}: ${r.theme} — RESUME the persona at the top of \`${r.md}\`. This is a FOCUSED round-${round} audit on TWO dimensions the earlier rounds under-covered.
Languages: ${r.codes.join(', ')}.

${DATA_DESC}

${TOOLS_DESC}

Your machine-flagged audit targets are in \`/tmp/langmap_suspect/${r.nn}.md\` — READ IT. It lists, per language, every cell that matched the owner's heuristics: ⛔ a 3-way-or-wider compound role-letter (e.g. \`A|D|E\` — very likely over-fused), ⚠️ a 2-way compound (e.g. \`B|F\` — suspect), ▼N = N segments short vs the English reference. Each target shows the live alignment + en/ja reference.

DIMENSION 1 — SEGMENTATION GRANULARITY (owner directive: PREFER SPLITTING):
For EACH flagged cell, verify the live value (\`node .wf_langmap_query.mjs <id> <code>\`), then judge:
- **SPLIT** if the fused chunk contains a genuinely separable element that maps to a DIFFERENT role-letter (a particle, clitic, auxiliary/copula, case-marked noun, possessive, demonstrative, adposition, etc.) AND splitting will NOT create two adjacent segments with the SAME role-letter. Give the FULL corrected alignment. Prioritise ⛔ 3+way compounds — these can almost always be reduced to at least a 2-way, often fully.
- **KEEP** ONLY if the fusion is genuinely LINGUISTICALLY INSEPARABLE in this language (a single word/morpheme inherently covers two roles with no separable element — like Japanese 兄 = "(my) older brother" where "my" has no independent word). A ▼ shortage is OFTEN legitimate typology (pro-drop of a relative-clause subject, a case suffix replacing an adposition, no articles) — do NOT invent splits for those. Justify each KEEP in one line.
  CRITICAL — "low priority", "minor", "優先度低", or effort is NEVER a valid reason to KEEP. KEEP must rest on inseparability alone. STRONGEST tell: **if ANY sibling variant in the same family already splits this cell, then every variant with the same structure MUST be SPLIT too** (fix-all-variants). E.g. if standard zh splits adjective+的 / noun as \`G:宝贵的\` \`C:经历\`, then zh_sc/zh_db/zh_song/zh_tang and the Cantonese/Min siblings (嘅/之 + noun) must likewise split \`C|G\` → \`G:形容詞+的/嘅/之\` + \`C:名詞\`. A portmanteau like Portuguese \`desse\`=de+esse may keep the contracted part fused but must still split off the following noun (\`A|D:desse\` + \`E:restaurante\`).

DIMENSION 2 — DIALECT / NON-STANDARD NATURALNESS:
For any DIALECT, historical stage, creole, or minority variety in your group, spot-check whether each row is what a real speaker of THAT variety would say, or merely the standard language re-spelled / a calque. Flag rows that are "plausible-looking but actually unnatural" (the owner specifically raised this). Give the natural form where you can defend it.

OUTPUT: APPEND to \`${r.md}\` (you own it) a section \`## ラウンド${round} 監査 — 分割粒度・方言自然さ (レビュアー)\`. List each SPLIT recommendation (sentence#, code, current → proposed full alignment, why) and each naturalness fix, plus a short note on how many flagged cells you judged KEEP (legit) vs SPLIT. Mark confidence 【確実】/【蓋然】/【要検討】. Write prose in Japanese.

Return JSON: splitCount (actionable splits you recommend), naturalnessCount, keepCount (flagged cells you judged legitimately fused/short), summary.`
const AUDIT_SCHEMA = {
  type: 'object',
  required: ['splitCount', 'summary'],
  properties: {
    splitCount: { type: 'integer' },
    naturalnessCount: { type: 'integer' },
    keepCount: { type: 'integer' },
    summary: { type: 'string' },
  },
}

// =================== SWEEP (comprehensive one-pass compound resolution) ===================
const SWEEP_PROMPT = (r) => `You are a LangMap data engineer doing a COMPREHENSIVE one-pass compound-segmentation sweep for Group ${r.nn}: ${r.theme}.
Languages: ${r.codes.join(', ')}.

${DATA_DESC}

${TOOLS_DESC}

Your COMPLETE inventory of remaining compound cells for this group is in \`/tmp/langmap_sweep/${r.nn}.md\` — READ IT. For each sentence it shows the en/ja reference and ALL sibling variants' alignments, so you can see who already splits a given role-pair.

POLICY (owner directive): PREFER SPLITTING. For EVERY compound cell (a role-letter containing "|"), decide:
- **SPLIT** if it contains a separable element mapping to a DIFFERENT role AND splitting creates NO two ADJACENT segments with the same role-letter. STRONGEST trigger: if ANY sibling variant in this group already splits the same cell, every variant with that structure MUST split (fix-all-variants). "Low priority" is NEVER a reason to KEEP.
  - Contiguity rule: a determiner+possessive+noun order (e.g. it「Il mio gatto」) IS splittable → \`E:「Il mio」 A:「gatto」\`. A determiner+noun+possessive order (e.g. nap「'O gatto mio」) is NOT cleanly splittable (the possessive wraps the noun) → KEEP.
- **KEEP** only for genuine linguistic inseparability: suffixal/enclitic elements (Persian -am, Italian -ma), agglutinated case suffixes (Georgian -ši), circumpositions (Kurdish bi…re), synthetic single-word verbs, portmanteau where only part separates (split off only the separable part), single-token concepts (a 24h-clock hour, a compound noun), or a role simply absent (typological omission).

PROCESS: for each compound cell, verify the LIVE value with \`node .wf_langmap_query.mjs <id> <code>\` (copy exact surface), then decide. Surface text must stay byte-identical — only re-segment at existing token boundaries; never invent/alter characters. Mind RTL scripts (keep each token intact).

OUTPUT:
1. Return your SPLIT edits in \`edits[]\` (op "replace" with the FULL corrected alignment is safest). Each: {id, lang, op:"replace", segments:[[role,surface],...], finding}. Do NOT edit data.js (orchestrator applies serially).
2. APPEND to \`${r.md}\` a section \`## 包括スイープ — 群${r.nn} 全複合セル一括判定 (作業者 round ${round})\` summarising SPLIT count vs KEEP count and the KEEP rationale for the inseparable ones (be specific).

Return JSON: splitCount, keepCount, edits[], summary.`
const SWEEP_SCHEMA = {
  type: 'object',
  required: ['splitCount', 'summary'],
  properties: {
    splitCount: { type: 'integer' },
    keepCount: { type: 'integer' },
    edits: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'lang', 'op', 'finding'],
        properties: {
          id: { type: 'integer' }, lang: { type: 'string' },
          op: { type: 'string', enum: ['replace', 'retag', 'settext', 'remove'] },
          finding: { type: 'string' }, _md: { type: 'string' },
          segments: { type: 'array', items: { type: 'array', items: { type: 'string' } } },
          find: { type: 'string' }, newSeg: { type: 'string' }, newText: { type: 'string' }, nth: { type: 'integer' },
        },
      },
    },
    summary: { type: 'string' },
  },
}

// =================== DEV (catch-ball: fix + rebut) ===================
const DEV_PROMPT = (bucket) => `You are an engineer on the LangMap development team. This is dev round ${round}. You OWN these ${bucket.length} review file(s) — handle EACH one:
${bucket.map((r) => `  - ${r.md}  (Group ${r.nn}: ${r.theme}; languages: ${r.codes.join(', ')})`).join('\n')}

${DATA_DESC}

${TOOLS_DESC}

FOR EACH of your review files, do this:
1. Read the whole file: the reviewer's findings and any prior exchange.
2. For each still-open issue, VERIFY the reviewer's claim against the LIVE data using the query tool (copy the real current value — never trust the quoted value blindly). Then judge it as a DEVELOPER:
   - If the issue is a CLEAR, well-supported error (the reviewer is demonstrably right — natural-speech error, wrong segmentation/word-order, mis-tagged role-letter, adjacent duplicate role-letters, placeholder/wrong-language cell, missing diacritic, etc.): FIX IT by returning a structured edit (see below). Mark it "(applied by orchestrator this round)".
   - If the reviewer's claim is WRONG, overreaching, or a leap (e.g. it conflicts with an established project convention, demands a stylistic preference, mis-reads the role-letter scheme, or asserts something a quick check refutes): DO NOT change the data. Instead REBUT it with a concrete developer-side rationale (cite the live value, the convention, or counter-evidence). Be specific and fair — concede where the reviewer is partly right.
   - If it needs an external source you cannot verify, say so honestly (don't guess) and ask the reviewer to supply a citation.
3. CONSTRAINTS:
   - You are READ-ONLY on data.js. DO NOT edit data.js yourself. RETURN edits as structured objects; the orchestrator applies them serially via a deterministic patcher (this prevents parallel clobbering of the shared file).
   - Project rules to honour (do NOT "fix" these): agglutinative suffix segments may carry a leading ZWNJ \\u200C; never create adjacent segments with the SAME role-letter (merge instead); a modal/auxiliary verb takes the reference language's role-letter, not a relabel to subject; when fixing a segment ID never gratuitously change the surface text; split a fused dialect chunk at word boundaries to match the reference language's structure.
   - **SPLIT-PREFERENCE POLICY (owner directive):** when the choice is between splitting a chunk into multiple segments vs keeping it fused, PREFER SPLITTING (finer granularity). Treat a reviewer's well-founded "this should be split into X + Y" as a CLEAR error to FIX (not a stylistic preference to rebut), as long as the split yields DIFFERENT role-letters and does not create adjacent same-role-letter duplicates. Conversely, be skeptical of any request to MERGE separable elements — only merge when the elements are genuinely a single inseparable unit OR the split would create adjacent identical role-letters.
4. APPEND your developer response to the SAME md file (you own it). Add a section: \`## 開発チーム回答 — round ${round} (作業者)\`. For each issue: state APPLIED (with the edit) or HELD/REBUTTED (with rationale). Be concise but complete and honest.

DISPLAY-PRESERVATION (important): the applier mirrors the app's render rule and GUARANTEES the rendered text is unchanged by a split — it auto-inserts a ZWNJ glue marker when a split has no space at the boundary (no-space languages, or splitting inside a contiguous string), and rejects any "replace" that would actually change the rendered characters (token reorder, duplication, character change). So: provide the FULL corrected cell with clean surface tokens; you do NOT need to add ZWNJ yourself. If a claimed split keeps getting rejected as display-changing, it is NOT a clean re-segmentation — for a NO_SPACE language whose surface has internal spaces (e.g. egy hieroglyphic transliteration, which renders without inter-segment spaces) a split would drop those spaces, so treat it as KEEP / documented limitation rather than forcing it.

EDIT FORMAT (return in \`edits[]\`). Each edit targets one (sentence id, language) cell:
  - \`op:"replace"\` + \`segments\`: full corrected alignment as an array of [roleLetter, surface] pairs — USE THIS for any segmentation/word-order/split/merge change (safest).
  - \`op:"retag"\` + \`find\` (exact current surface) + \`newSeg\` (+ \`nth\` if that surface repeats) — change only a role-letter.
  - \`op:"settext"\` + \`find\` + \`newText\` (+ \`nth\`) — change only the surface text.
  - \`op:"remove"\` + \`find\` (+ \`nth\`) — delete a segment.
  Always include \`id\`, \`lang\`, \`op\`, \`finding\` (short description), and \`_md\` (your file's NN, e.g. "${bucket[0].nn}").

Return JSON: hasEdits, edits[], heldCount (issues you rebutted/held), summary.`

const DEV_SCHEMA = {
  type: 'object',
  required: ['hasEdits', 'summary'],
  properties: {
    hasEdits: { type: 'boolean' },
    edits: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'lang', 'op', 'finding'],
        properties: {
          id: { type: 'integer' },
          lang: { type: 'string' },
          op: { type: 'string', enum: ['replace', 'retag', 'settext', 'remove'] },
          finding: { type: 'string' },
          _md: { type: 'string' },
          segments: { type: 'array', items: { type: 'array', items: { type: 'string' } } },
          find: { type: 'string' },
          newSeg: { type: 'string' },
          newText: { type: 'string' },
          nth: { type: 'integer' },
        },
      },
    },
    heldCount: { type: 'integer' },
    summary: { type: 'string' },
  },
}

// =================== APPLY (single writer of data.js) ===================
const APPLY_PROMPT = (edits) => `You are the APPLY worker. You EXCLUSIVELY own data.js this phase (no other agent touches it — zero concurrency risk).

There are ${edits.length} proposed structured edit(s) for data.js. Do EXACTLY this:
1. Write the following JSON array verbatim to \`/tmp/langmap_round_${round}_edits.json\` (use the Write tool):
\`\`\`json
${JSON.stringify(edits, null, 2)}
\`\`\`
2. Run: \`node .wf_langmap_apply.mjs /tmp/langmap_round_${round}_edits.json\`
   (The applier mutates the SENTENCES object and rewrites data.js with identical formatting; it reports applied[]/failed[] and any adjacentWarnings.)
3. Run \`node --check data.js\` to confirm syntax is valid.
4. If the applier reports any \`failed\` edits, report them faithfully (do NOT hand-edit data.js to force them — a failure means the \`find\` text was wrong/ambiguous and the reviewer/dev must revisit).

Return JSON: appliedCount, failedCount, syntaxOk, failedDetail (array of short strings), warnings (the adjacentWarnings array, possibly empty).`

const APPLY_SCHEMA = {
  type: 'object',
  required: ['appliedCount', 'syntaxOk'],
  properties: {
    appliedCount: { type: 'integer' },
    failedCount: { type: 'integer' },
    syntaxOk: { type: 'boolean' },
    failedDetail: { type: 'array', items: { type: 'string' } },
    warnings: { type: 'array', items: { type: 'string' } },
  },
}

const VALIDATE_PROMPT = `Validate data.js after this round's edits.
- Run \`node --check data.js\` (report ok/fail).
- Run \`node .wf_langmap_query.mjs 1 ja en\` as a smoke test that the file still loads and returns sane alignments.
- Report whether the file is healthy.
Return JSON: syntaxOk, details (one or two sentences).`
const VALIDATE_SCHEMA = {
  type: 'object',
  required: ['details'],
  properties: { syntaxOk: { type: 'boolean' }, details: { type: 'string' } },
}

// =================== REVIEW (re-verify after dev) ===================
const REVIEW_PROMPT = (r) => `You are the specialist reviewer for Group ${r.nn}: ${r.theme} — RESUME the exact persona written at the top of \`${r.md}\`. This is reviewer round ${round + 1}.
Languages: ${r.codes.join(', ')}.

${DATA_DESC}

${TOOLS_DESC}

STEPS:
1. Read \`${r.md}\` in full, especially the development team's latest \`## 開発チーム回答 — round ${round}\` response at the bottom.
2. VERIFY every fix the dev claims to have applied against the LIVE data, using the query tool (\`node .wf_langmap_query.mjs <id> <code>\`). If a claimed "applied" fix is NOT actually present in the live data, call it out.
3. Adjudicate each item the dev addressed: accept (✓), partial (△), or reject (✗) with brief, concrete reasoning.
   - Where the dev REBUTTED your earlier point: judge their rebuttal honestly. If their developer-side rationale is sound (a real convention, a correct reading of the data, valid counter-evidence), CONCEDE and drop the item. If their rebuttal is itself mistaken, hold firm and explain why with evidence. Do not insist on stylistic preferences or unsourced claims.
   - **SPLIT-PREFERENCE POLICY (owner directive):** the project prefers FINER segmentation. If you still see a separable element (particle, clitic, auxiliary, suffix, or a fused word covering multiple reference roles) glued into a neighbour, raise/keep it as an actionable split — as long as the split gives DIFFERENT role-letters and creates no adjacent same-role-letter duplicates. Do NOT accept a dev's choice to keep something fused when it can legitimately be split; only accept fusion for genuinely inseparable units or where splitting would create adjacent identical role-letters.
   - You may raise a genuinely NEW clear error if you find one while verifying, but do not pad.
4. APPEND to \`${r.md}\` (you own it): a section \`## レビュアー再評価 — round ${round + 1}\` with per-item judgements (✓/△/✗), any concessions, any new issue, and a short scorecard.
5. DECIDE STATUS:
   - "closed" ONLY IF nothing actionable remains: every clear error is fixed-and-verified in live data, and every remaining point is one you ACCEPT as a defensible convention / the dev's sound rebuttal / a documented won't-fix. End the section with: \`**ファイル状態: CLOSED — 残課題なし**\`.
   - "open" if any clear error is still unfixed, a claimed fix is missing from live data, or you raise a new actionable issue. End with \`**ファイル状態: OPEN**\` and a one-line list of exactly what the dev must do next.
   - LOOP-TERMINATION (round ${round + 1} may be late): do not keep a file open over pure stylistic preference or an externally-unsourceable demand the dev has genuinely investigated. In that case CLOSE with an explicit "known limitation" caveat rather than looping forever. Keep OPEN only for a concretely actionable, defensible next step.

Return JSON: status ('closed'|'open'), newIssueCount, conceded (how many of your earlier points you accepted the dev's rebuttal on), summary.`

const REVIEW_SCHEMA = {
  type: 'object',
  required: ['status', 'summary'],
  properties: {
    status: { type: 'string', enum: ['closed', 'open'] },
    newIssueCount: { type: 'integer' },
    conceded: { type: 'integer' },
    summary: { type: 'string' },
  },
}

// =================== RUN ===================
if (mode === 'generate') {
  phase('Review')
  log(`Generating ${targets.length} initial expert reviews (30-reviewer fan-out)`)
  const res = await parallel(targets.map((r) => () =>
    agent(GEN_PROMPT(r), { label: `review:${r.nn} ${r.codes[0]}…`, phase: 'Review', schema: GEN_SCHEMA })))
  const rows = targets.map((r, i) => ({ nn: r.nn, theme: r.theme, issues: res[i]?.issueCount ?? null, certain: res[i]?.certainCount ?? null }))
  const total = rows.reduce((n, x) => n + (x.issues || 0), 0)
  log(`Initial review complete: ${total} issues across ${targets.length} files`)
  return { mode, totalIssues: total, files: rows }
}

// consistency mode: cross-sibling role-letter consistency audit, then apply/validate/review/close
if (mode === 'consistency') {
  const CONS_PROMPT = (r) => `You are a LangMap data engineer auditing CROSS-SIBLING role-letter CONSISTENCY for Group ${r.nn}: ${r.theme}.
Languages: ${r.codes.join(', ')}.

${DATA_DESC}

${TOOLS_DESC}

Your flagged cells are in \`/tmp/langmap_consistency/${r.nn}.md\` — READ IT. Each flagged cell is a language that DUPLICATES a role-letter in a sentence where NONE of its siblings do (an outlier). This often means a role-letter MIS-ASSIGNMENT: a segment was given a letter that already exists in the cell, when it should carry a DIFFERENT role-letter that its siblings/the en·ja reference use for the same element.

FOR EACH flagged cell, verify live (\`node .wf_langmap_query.mjs <id> <code>\`), compare to the sibling alignments + en/ja reference in the brief, and decide:
- **FIX (retag)** if one of the duplicated segments clearly should be a DIFFERENT, sibling-consistent role-letter. Classic case: a copula / "that-it-is" / complementizer wrongly given an adjective/object letter when siblings use D (is) or H (that). Return a \`retag\` edit changing ONLY the role-letter (never the surface). Pick the letter the siblings + reference use for that element, and make sure it is DEFINED in that sentence's segment set (don't introduce an undefined letter — if no defined letter fits, prefer the reference's letter for that role).
- **KEEP** if the duplicate is genuinely correct for this language's structure (e.g. a determiner complex "a new" split around the noun as D…E…D because the adjective is postposed; a role that legitimately recurs). Justify in one line.

CONSTRAINTS: change role-letters only (use op "retag" with the exact current surface as \`find\`, plus \`newSeg\`; add \`nth\` if that surface repeats). Never alter surface text. Do not introduce a role-letter not defined in that sentence's segments unless the reference itself uses it there.

OUTPUT: return your retag edits in \`edits[]\`; APPEND to \`${r.md}\` a section \`## 兄弟整合性監査 — 群${r.nn} (作業者 round ${round})\` listing each FIX (with the sibling/reference justification) and each KEEP (with reason).

Return JSON: fixCount, keepCount, edits[], summary.`
  const CONS_SCHEMA = { type: 'object', required: ['fixCount', 'summary'], properties: { fixCount: { type: 'integer' }, keepCount: { type: 'integer' }, edits: DEV_SCHEMA.properties.edits, summary: { type: 'string' } } }
  phase('Dev')
  log(`Cross-sibling consistency audit over ${targets.length} groups`)
  const res = await parallel(targets.map((r) => () => agent(CONS_PROMPT(r), { label: `cons:${r.nn}`, phase: 'Dev', schema: CONS_SCHEMA })))
  const allEdits = []; res.filter(Boolean).forEach((d) => { if (Array.isArray(d.edits)) d.edits.forEach((e) => allEdits.push(e)) })
  log(`Consistency audit proposed ${allEdits.length} retag edits`)
  phase('Apply')
  const applyRes = allEdits.length ? await agent(APPLY_PROMPT(allEdits), { label: 'apply:data.js', phase: 'Apply', schema: APPLY_SCHEMA }) : { appliedCount: 0, failedCount: 0, syntaxOk: true }
  log(`Applied ${applyRes?.appliedCount || 0} (${applyRes?.failedCount || 0} failed)`)
  phase('Validate')
  const val = await agent(VALIDATE_PROMPT, { label: 'validate', phase: 'Validate', schema: VALIDATE_SCHEMA })
  log(`Validation: ${val?.details || 'n/a'}`)
  phase('Review')
  const reviewResults = await parallel(targets.map((r) => () => agent(REVIEW_PROMPT(r), { label: `rev:${r.nn}`, phase: 'Review', schema: REVIEW_SCHEMA })))
  const toClose = targets.filter((r, i) => reviewResults[i] && reviewResults[i].status === 'closed')
  log(`Reviewers closed ${toClose.length}/${targets.length}`)
  phase('Close')
  let closed = []
  if (toClose.length) {
    const closeRes = await agent(`Rename these CLOSED review files. For EACH run \`git mv\` (fall back to \`mv\` then \`git add\`):\n${toClose.map((t) => `  git mv "${t.md}" "${t.closed}"`).join('\n')}\nThen \`ls langmap_reviews\` to confirm. Return JSON {renamed:[paths that exist]}.`, { label: 'close', phase: 'Close', schema: { type: 'object', required: ['renamed'], properties: { renamed: { type: 'array', items: { type: 'string' } } } } })
    closed = closeRes?.renamed || []
  }
  return { mode, round, edits: allEdits.length, applied: applyRes?.appliedCount || 0, failed: applyRes?.failedCount || 0, statuses: targets.map((r, i) => ({ nn: r.nn, status: reviewResults[i]?.status || 'unknown' })), closedThisRound: toClose.map((t) => t.nn), stillOpen: targets.filter((r, i) => reviewResults[i]?.status !== 'closed').map((r) => r.nn) }
}

// verify mode: review-only (verify live data + close), no dev edits
if (mode === 'verify') {
  phase('Review')
  log(`Reviewer verification over ${targets.length} files (verify applied splits + close)`)
  const reviewResults = await parallel(targets.map((r) => () =>
    agent(REVIEW_PROMPT(r), { label: `rev:${r.nn}`, phase: 'Review', schema: REVIEW_SCHEMA })))
  const toClose = targets.filter((r, i) => reviewResults[i] && reviewResults[i].status === 'closed')
  log(`Reviewers closed ${toClose.length}/${targets.length}`)
  phase('Close')
  let closed = []
  if (toClose.length) {
    const closeRes = await agent(
      `Rename these CLOSED review files. For EACH run \`git mv\` (fall back to \`mv\` then \`git add\`):\n${toClose.map((t) => `  git mv "${t.md}" "${t.closed}"`).join('\n')}\nThen \`ls langmap_reviews\` to confirm. Return JSON {renamed:[paths that exist]}.`,
      { label: 'close', phase: 'Close', schema: { type: 'object', required: ['renamed'], properties: { renamed: { type: 'array', items: { type: 'string' } } } } })
    closed = closeRes?.renamed || []
  }
  return {
    mode, round,
    statuses: targets.map((r, i) => ({ nn: r.nn, status: reviewResults[i]?.status || 'unknown', newIssues: reviewResults[i]?.newIssueCount || 0 })),
    closedThisRound: toClose.map((t) => t.nn), stillOpen: targets.filter((r, i) => reviewResults[i]?.status !== 'closed').map((r) => r.nn),
  }
}

// sweep mode: comprehensive one-pass compound resolution per group, then apply/validate/review/close
if (mode === 'sweep') {
  phase('Dev')
  log(`Comprehensive compound sweep over ${targets.length} groups`)
  const sweepRes = await parallel(targets.map((r) => () =>
    agent(SWEEP_PROMPT(r), { label: `sweep:${r.nn}`, phase: 'Dev', schema: SWEEP_SCHEMA })))
  const allEdits = []
  sweepRes.filter(Boolean).forEach((d) => { if (Array.isArray(d.edits)) d.edits.forEach((e) => allEdits.push(e)) })
  const totSplit = sweepRes.reduce((n, x) => n + (x?.splitCount || 0), 0)
  log(`Sweep proposed ${allEdits.length} split edits (${totSplit} reported splits)`)

  phase('Apply')
  const applyRes = allEdits.length
    ? await agent(APPLY_PROMPT(allEdits), { label: 'apply:data.js', phase: 'Apply', schema: APPLY_SCHEMA })
    : { appliedCount: 0, failedCount: 0, syntaxOk: true }
  log(`Applied ${applyRes?.appliedCount || 0} (${applyRes?.failedCount || 0} failed); syntax ${applyRes?.syntaxOk ? 'OK' : 'BROKEN'}`)

  phase('Validate')
  const val = await agent(VALIDATE_PROMPT, { label: 'validate', phase: 'Validate', schema: VALIDATE_SCHEMA })
  log(`Validation: ${val?.details || 'n/a'}`)

  phase('Review')
  const reviewResults = await parallel(targets.map((r) => () =>
    agent(REVIEW_PROMPT(r), { label: `rev:${r.nn}`, phase: 'Review', schema: REVIEW_SCHEMA })))
  const toClose = targets.filter((r, i) => reviewResults[i] && reviewResults[i].status === 'closed')
  log(`Reviewers closed ${toClose.length}/${targets.length}`)

  phase('Close')
  let closed = []
  if (toClose.length) {
    const closeRes = await agent(
      `Rename these CLOSED review files. For EACH run \`git mv\` (fall back to \`mv\` then \`git add\`):\n${toClose.map((t) => `  git mv "${t.md}" "${t.closed}"`).join('\n')}\nThen \`ls langmap_reviews\` to confirm. Return JSON {renamed:[paths that exist]}.`,
      { label: 'close', phase: 'Close', schema: { type: 'object', required: ['renamed'], properties: { renamed: { type: 'array', items: { type: 'string' } } } } })
    closed = closeRes?.renamed || []
  }
  return {
    mode, round, sweepEdits: allEdits.length, applied: applyRes?.appliedCount || 0, failed: applyRes?.failedCount || 0,
    syntaxOk: applyRes?.syntaxOk,
    statuses: targets.map((r, i) => ({ nn: r.nn, status: reviewResults[i]?.status || 'unknown', newIssues: reviewResults[i]?.newIssueCount || 0 })),
    closedThisRound: toClose.map((t) => t.nn), stillOpen: targets.filter((r, i) => reviewResults[i]?.status !== 'closed').map((r) => r.nn),
  }
}

// audit mode: reviewer-first focused pass, THEN fall through to the cycle ----
if (mode === 'audit') {
  phase('Audit')
  log(`Round-${round} focused audit (split granularity + dialect naturalness) over ${targets.length} files`)
  const auditRes = await parallel(targets.map((r) => () =>
    agent(AUDIT_PROMPT(r), { label: `audit:${r.nn}`, phase: 'Audit', schema: AUDIT_SCHEMA })))
  const splits = auditRes.reduce((n, x) => n + (x?.splitCount || 0), 0)
  const nat = auditRes.reduce((n, x) => n + (x?.naturalnessCount || 0), 0)
  log(`Audit surfaced ${splits} split recommendations + ${nat} naturalness fixes`)
}

// cycle (runs for mode 'cycle' AND continues after 'audit') -------------------
log(`Catch-ball round ${round} over ${targets.length} open files (10-dev team)`)
phase('Dev')
const NUM_DEVS = 10
const buckets = Array.from({ length: NUM_DEVS }, () => [])
targets.forEach((r, i) => buckets[i % NUM_DEVS].push(r))
const liveBuckets = buckets.filter((b) => b.length)
const devResults = await parallel(liveBuckets.map((bucket, bi) => () =>
  agent(DEV_PROMPT(bucket), { label: `dev${bi + 1}:[${bucket.map((r) => r.nn).join(',')}]`, phase: 'Dev', schema: DEV_SCHEMA })))
const allEdits = []
devResults.filter(Boolean).forEach((d) => { if (Array.isArray(d.edits)) d.edits.forEach((e) => allEdits.push(e)) })
log(`Dev team proposed ${allEdits.length} structured edits to data.js`)

phase('Apply')
const applyRes = allEdits.length
  ? await agent(APPLY_PROMPT(allEdits), { label: 'apply:data.js', phase: 'Apply', schema: APPLY_SCHEMA })
  : { appliedCount: 0, failedCount: 0, syntaxOk: true }
log(`Applied ${applyRes?.appliedCount || 0} edits (${applyRes?.failedCount || 0} failed); syntax ${applyRes?.syntaxOk ? 'OK' : 'BROKEN'}`)

phase('Validate')
const val = await agent(VALIDATE_PROMPT, { label: 'validate', phase: 'Validate', schema: VALIDATE_SCHEMA })
log(`Validation: ${val?.details || 'n/a'}`)

phase('Review')
const reviewResults = await parallel(targets.map((r) => () =>
  agent(REVIEW_PROMPT(r), { label: `rev:${r.nn}`, phase: 'Review', schema: REVIEW_SCHEMA })))
const toClose = targets.filter((r, i) => reviewResults[i] && reviewResults[i].status === 'closed')
log(`Reviewers closed ${toClose.length}/${targets.length} files this round`)

phase('Close')
let closed = []
if (toClose.length) {
  const closeRes = await agent(
    `Rename these CLOSED review files so they drop out of processing. For EACH, run \`git mv\` (fall back to \`mv\` then \`git add\` if git mv fails):\n${toClose.map((t) => `  git mv "${t.md}" "${t.closed}"`).join('\n')}\nThen run \`ls langmap_reviews\` and \`git status --short langmap_reviews\` to CONFIRM each *_closed.md exists and the original is gone. Return JSON {renamed:[paths that actually exist]}.`,
    { label: 'close', phase: 'Close', schema: { type: 'object', required: ['renamed'], properties: { renamed: { type: 'array', items: { type: 'string' } } } } })
  closed = closeRes?.renamed || []
}

return {
  mode, round,
  devEdits: allEdits.length,
  applied: applyRes?.appliedCount || 0,
  failed: applyRes?.failedCount || 0,
  syntaxOk: applyRes?.syntaxOk,
  warnings: (applyRes?.warnings || []).length,
  statuses: targets.map((r, i) => ({ nn: r.nn, status: reviewResults[i]?.status || 'unknown', newIssues: reviewResults[i]?.newIssueCount || 0, conceded: reviewResults[i]?.conceded || 0 })),
  closedThisRound: toClose.map((t) => t.nn),
  stillOpen: targets.filter((r, i) => reviewResults[i]?.status !== 'closed').map((r) => r.nn),
}
