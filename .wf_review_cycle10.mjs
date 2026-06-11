export const meta = {
  name: 'review-cycle-10workers',
  description: 'One wordmap review<->dev catch-ball round with 10 dev workers (2 review files each); closes files with nothing left to address',
  phases: [
    { title: 'Dev' },
    { title: 'Apply' },
    { title: 'Validate' },
    { title: 'Review' },
    { title: 'Close' },
  ],
}

// args: "101-120@1" — label range and round number. Round N: worker round-N, reviewer round-(N+1).
function parseArgs(a) {
  const s = typeof a === 'string' ? a : '101-120@1'
  const [head, roundRaw] = String(s).split('@')
  const round = roundRaw ? parseInt(roundRaw, 10) : 1
  let labels
  if (head.includes('-') && !head.includes(',')) {
    const [lo, hi] = head.split('-').map((x) => parseInt(x, 10))
    labels = []
    for (let i = lo; i <= hi; i++) labels.push(i)
  } else {
    labels = head.split(',').map((x) => parseInt(x, 10))
  }
  return { labels, round }
}
const { labels, round } = parseArgs(args)
const workerLabel = `round-${round}`
const reviewLabel = `round-${round + 1}`
const WORKERS = 10

const reviews = labels.map((n) => ({
  md: `wordmap_reviews/review_${n}.md`,
  closed: `wordmap_reviews/review_${n}_closed.md`,
  label: String(n),
}))

const dataDesc = 'the per-word data files under `words/` (e.g. `words/water.js`, `words/father.js`). Each file is `WORDS.<word> = { label:{...}, definition:{...}, data:{ <langcode>: ["surface", "ipa"], ... } }`. A review references files like `words/<word>.js` and language codes like `goh`, `de`, `is`. Reviews #114 may also reference the label{}/definition{} blocks inside the same words/*.js files — those are editable on the same terms.'

const DEV_PROMPT = (group) => `You are an engineer on the LangMap development team (corpus: wordmap). Your job this round (${workerLabel}) is to respond to the reviewer for ${group.length} review file(s) and apply clear, well-supported data fixes.

Review files assigned to you:
${group.map((r) => `- ${r.md}`).join('\n')}

Process EACH review file in turn, fully:
1. Read the review file in full. Understand the entire conversation so far: the reviewer's findings, any prior worker responses, and the reviewer's latest judgements / open + deferred + rejected items.
2. For each item that is STILL OPEN (not yet addressed, or reviewer marked it open/rejected), decide if it is a CLEAR, unambiguous data error or a well-defined mechanical normalization. Editing policy (project rule): ONLY fix clear, unambiguous local errors or internal inconsistencies, or a normalization the reviewer explicitly endorsed. Do NOT invent changes for genuine cross-school / system-level / convention choices the team already justified as won't-fix — for those, hold with rationale.
3. To locate exact current values, use grep/Read on ${dataDesc}. NEVER guess line content — copy it verbatim.
4. CONSTRAINTS:
   - You are READ-ONLY on all shared data files. DO NOT edit words/*.js. Instead RETURN your fixes as structured edits; the orchestrator applies them serially per file (this prevents parallel clobbering — a known failure mode in this project).
   - For each edit, \`old\` MUST be the exact current substring copied verbatim from the data file (include the language key and enough context to be UNIQUE within that file), and \`new\` is the same line with ONLY the target value changed. Never change text outside the specific field.
   - Honour the project segment/IPA conventions. Do not change surface orthography unless the reviewer flagged it as a clear error; often only the IPA value is corrected.
4b. SOURCED-FORM DEMANDS: If the reviewer demands a specific *sourced* native form (e.g. "replace the loanword with a native greeting", "this entry is actually a different concept"), you ARE permitted and expected to use WebSearch / WebFetch to find an authoritative form (dictionaries, grammars, reputable language resources). Only apply a change you can attribute to a credible source, and cite that source inline in your worker comment. If, after a genuine research effort, a demanded form CANNOT be sourced reliably, do NOT guess — state explicitly in your worker comment that it is unsourceable offline and recommend the reviewer either accept the current value with a documented caveat or escalate to a human linguist. (This prevents an endless loop.)
5. Append your worker comment to each review md ONLY (you own your assigned md files this phase — appending there is safe). Add a new section titled "## Worker ${workerLabel} response (作業者${workerLabel})". For each finding state: applied (mark "(applied by orchestrator this round)") or held-with-rationale. Be honest and specific (word + language code + field). Keep it concise but complete.

Return JSON: hasEdits, edits[] (file/old/new/finding — prefix each finding with the review number like "111-3"), remainingOpenCount (total items across your files deliberately left open as won't-fix or needing reviewer decision), summary.`

const DEV_SCHEMA = {
  type: 'object',
  required: ['hasEdits', 'summary', 'remainingOpenCount'],
  properties: {
    hasEdits: { type: 'boolean' },
    edits: {
      type: 'array',
      items: {
        type: 'object',
        required: ['file', 'old', 'new', 'finding'],
        properties: {
          file: { type: 'string', description: 'path relative to repo root, e.g. words/water.js' },
          old: { type: 'string' },
          new: { type: 'string' },
          finding: { type: 'string' },
        },
      },
    },
    remainingOpenCount: { type: 'integer' },
    summary: { type: 'string' },
  },
}

const APPLY_PROMPT = (file, edits) => `You are the APPLY worker for ONE data file. You exclusively own \`${file}\` this phase (no other worker touches it), so there is no concurrency risk.

Apply these ${edits.length} proposed edit(s) to \`${file}\`:
${JSON.stringify(edits.map((e, i) => ({ i, finding: e.finding, old: e.old, new: e.new })), null, 2)}

For each edit:
- Use the Edit tool with the given old_string -> new_string on ${file}.
- If old_string is not found, or not unique, or already applied (value already equals new), SKIP it and record it under failed with the reason. Do NOT force-change anything ambiguous.
- If two edits conflict (touch the same value differently), apply the first and record the second as failed with reason "conflict".
After all edits:
- Run \`node --check ${file}\` and report whether syntax is OK.
- Spot-confirm a couple of applied edits by re-reading the changed lines.

Return JSON: applied[] (finding, postValue), failed[] (finding, reason), syntaxOk.`

const APPLY_SCHEMA = {
  type: 'object',
  required: ['applied', 'failed', 'syntaxOk'],
  properties: {
    applied: { type: 'array', items: { type: 'object', required: ['finding'], properties: { finding: { type: 'string' }, postValue: { type: 'string' } } } },
    failed: { type: 'array', items: { type: 'object', required: ['finding', 'reason'], properties: { finding: { type: 'string' }, reason: { type: 'string' } } } },
    syntaxOk: { type: 'boolean' },
  },
}

const VALIDATE_PROMPT = `Validate the repo data after this round's edits.
- Run: node validate_wordmap_data.js  (report PASS/FAIL summary; note: a single pre-existing FAIL "bug.words.hello: both '—' but language is modern" is a known baseline and is NOT caused by this round)
- For each touched words/*.js file you can detect via \`git status --short words/\`, run \`node --check\` on it.
Return JSON: wordmapValidatorOk (true if no NEW failures beyond the known baseline), details (short text of what you ran and saw).`

const VALIDATE_SCHEMA = {
  type: 'object',
  required: ['details'],
  properties: {
    wordmapValidatorOk: { type: 'boolean' },
    details: { type: 'string' },
  },
}

const REVIEW_PROMPT = (r) => `You are the specialist reviewer (resume the persona described at the top of the file) for ONE review file. This is reviewer ${reviewLabel}.

Review file: ${r.md}

STEPS:
1. Read ${r.md} in full, including the development team's latest worker response just appended at the bottom.
2. VERIFY every fix the worker claims against the LIVE data in ${dataDesc} Use grep / Read to confirm actual current values. If a claimed "applied" fix is NOT actually present in the live data, call it out (this has happened before in this project).
3. Adjudicate each still-open / held / deferred item: accept (✓), partial (△), or reject (✗) with brief, sourced reasoning. You may raise genuinely NEW issues if you spot clear errors during verification, but do not pad — only real, defensible problems.
4. Append your review to ${r.md} ONLY (you own this md file). Add a section "## Reviewer ${reviewLabel} response (再評価 ${reviewLabel})" with your per-item judgements, any new issues, and a short scorecard.
5. DECIDE STATUS:
   - status = "closed" ONLY IF there is nothing left for the dev team to address: all clear errors are fixed-and-verified in live data, and every remaining item is something you (the reviewer) explicitly ACCEPT as a defensible cross-school / convention / system-level choice or otherwise won't-fix. If you close, end your appended section with a clear line: "**File status: CLOSED** — nothing left to address."
   - status = "open" if any clear error remains unfixed, any claimed fix is missing from live data, or you are raising a new actionable issue. End with "**File status: OPEN**" and a one-line list of what the dev team must do next.
   - LOOP-TERMINATION (round ${reviewLabel}): if the ONLY remaining open items are demands for externally-sourced data that the dev team has now EITHER fixed-with-a-credible-citation OR, after a genuine research effort, credibly documented as unsourceable offline, do NOT keep the file open indefinitely. Either (a) accept the now-sourced fix and CLOSE, or (b) if truly unsourceable, CLOSE with an explicit documented caveat (a "known limitation, needs human linguist" note) rather than demanding the impossible again. Only keep OPEN if there is a concretely actionable next step the dev team has not yet genuinely attempted. Verify any newly-applied sourced value against live data before accepting it.

Return JSON: status, newIssueCount, summary (one or two sentences: what you verified and why closed/open).`

const REVIEW_SCHEMA = {
  type: 'object',
  required: ['status', 'summary'],
  properties: {
    status: { type: 'string', enum: ['closed', 'open'] },
    newIssueCount: { type: 'integer' },
    summary: { type: 'string' },
  },
}

// ---- run ----
log(`Starting wordmap ${workerLabel}/${reviewLabel} cycle over ${reviews.length} review files with ${WORKERS} dev workers`)

// Chunk reviews into WORKERS groups (round-robin keeps pairs adjacent: [101,111],[102,112]... no — use contiguous pairs)
const groups = []
const per = Math.ceil(reviews.length / WORKERS)
for (let i = 0; i < reviews.length; i += per) groups.push(reviews.slice(i, i + per))

phase('Dev')
const devResults = await parallel(groups.map((g, gi) => () =>
  agent(DEV_PROMPT(g), { label: `dev${gi + 1}:${g.map((r) => r.label).join(',')}`, phase: 'Dev', schema: DEV_SCHEMA })))

const allEdits = []
devResults.forEach((d) => {
  if (d && d.hasEdits && Array.isArray(d.edits)) d.edits.forEach((e) => allEdits.push(e))
})
const byFile = {}
allEdits.forEach((e) => { (byFile[e.file] ||= []).push(e) })
const fileNames = Object.keys(byFile)
log(`Dev proposed ${allEdits.length} edits across ${fileNames.length} data files`)

phase('Apply')
const applyResults = fileNames.length
  ? await parallel(fileNames.map((f) => () =>
      agent(APPLY_PROMPT(f, byFile[f]), { label: `apply:${f.split('/').pop()}`, phase: 'Apply', schema: APPLY_SCHEMA })))
  : []
const totalApplied = applyResults.filter(Boolean).reduce((n, r) => n + (r.applied?.length || 0), 0)
const totalFailed = applyResults.filter(Boolean).reduce((n, r) => n + (r.failed?.length || 0), 0)
log(`Applied ${totalApplied} edits (${totalFailed} skipped/failed)`)

phase('Validate')
const validation = await agent(VALIDATE_PROMPT, { label: 'validate', phase: 'Validate', schema: VALIDATE_SCHEMA })
log(`Validation: ${validation?.details || 'n/a'}`)

phase('Review')
const reviewResults = await parallel(reviews.map((r) => () =>
  agent(REVIEW_PROMPT(r), { label: `review:${r.label}`, phase: 'Review', schema: REVIEW_SCHEMA })))

const toClose = reviews.filter((r, i) => reviewResults[i] && reviewResults[i].status === 'closed')
log(`Reviewers closed ${toClose.length}/${reviews.length} files`)

phase('Close')
let closed = []
if (toClose.length) {
  const closeRes = await agent(
    `Rename these CLOSED review files so the number drops out of processing. For EACH pair, run EXACTLY this shell command (one at a time) and confirm it succeeded:\n${toClose.map((t) => `  git mv "${t.md}" "${t.closed}"`).join('\n')}\nIf any \`git mv\` fails (e.g. source already moved), fall back to \`mv\` then \`git add\`. After all renames, run \`ls\` on the directory and \`git status --short\` to CONFIRM each *_closed.md now exists and the original is gone. Return JSON {renamed:[list of the new _closed.md paths that actually exist on disk]}. Do not return a name unless you verified the file exists.`,
    { label: 'close', phase: 'Close', schema: { type: 'object', required: ['renamed'], properties: { renamed: { type: 'array', items: { type: 'string' } } } } })
  closed = closeRes?.renamed || []
}

return {
  round,
  devEditsProposed: allEdits.length,
  applied: totalApplied,
  failed: totalFailed,
  validation: validation?.details,
  reviewStatuses: reviews.map((r, i) => ({ file: r.label, status: reviewResults[i]?.status || 'unknown', newIssues: reviewResults[i]?.newIssueCount || 0 })),
  closedCount: toClose.length,
  closed,
}
