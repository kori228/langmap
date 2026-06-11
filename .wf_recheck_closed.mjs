export const meta = {
  name: 'recheck-closed-wordmap-reviews',
  description: 'Re-audit all closed WordMap reviews (#01-120) for residual actionable items wrongly left unfixed, verify vs live data, apply clear fixes',
  phases: [
    { title: 'Scan' },
    { title: 'Apply' },
    { title: 'Validate' },
  ],
}

// All closed wordmap reviews are review_<NN>_closed.md for NN in 1..150.
const NN = []
for (let i = 1; i <= 150; i++) NN.push(i)
const pad2 = (n) => (n < 10 ? '0' + n : '' + n)
const files = NN.map((n) => `wordmap_reviews/review_${pad2(n)}_closed.md`)

// Batch into ~19 scanners (150 closed reviews, ~8 each).
const SCANNERS = 19
const groups = []
const per = Math.ceil(files.length / SCANNERS)
for (let i = 0; i < files.length; i += per) groups.push(files.slice(i, i + per))

const SCAN_PROMPT = (group, gi) => `You are a QA auditor doing a SAFETY RE-CHECK of already-CLOSED WordMap review files. The rally closed these files, but some may have been closed while a CLEAR, unambiguous data error was still left unaddressed (held/deferred/rejected by mistake), or a fix was claimed "applied" but never actually landed in the live data. Your job is to catch those residual items — conservatively.

Closed review files assigned to you (read each in FULL, including all worker + reviewer rounds at the bottom):
${group.map((f) => `- ${f}`).join('\n')}

The live word data is in words/<concept>.js: WORDS.<concept> = { data:{ <langcode>: ["surface","ipa"], ... } } (20 files: water fire sun moon mother father eat drink love heart tree house dog cat hand eye hello thanks one good).

FOR EACH closed review, hunt ONLY for these two residual-error classes:
1. CLAIMED-BUT-MISSING: the worker/reviewer said a fix was "applied" / accepted, but the LIVE data does NOT actually contain that value (it was clobbered, never applied, or mis-applied). Verify by grep/Read on the actual words/*.js file.
2. CLEAR-ERROR-LEFT-OPEN: an item the reviewer marked held / deferred / rejected / "won't-fix" that is in fact a CLEAR, unambiguous, sourced data error (a typo, a wrong codepoint, a mismatched surface/IPA, a wrong-concept entry) — NOT a defensible cross-school/convention choice. Be strict: if the hold was a reasonable convention/system-level decision, LEAVE IT. Only flag things that are objectively wrong.

DO NOT invent new findings outside what these closed reviews already discussed. DO NOT re-open defensible convention choices. This is a conservative safety net, not a fresh review.

For every issue you DO flag, you MUST have verified the current live value verbatim (copy it exactly with the language key and enough context to be a UNIQUE substring within that file), and give the corrected line with ONLY the target value changed.

Return JSON: { findings: [ { review: "<NN>", file: "words/<word>.js", langcode, old: "<verbatim unique current substring>", new: "<corrected>", kind: "claimed-but-missing"|"clear-error-left-open", why: "<short sourced reason>" } ], scanned: <count>, note: "<one line: how clean the batch was>" }. If a batch is fully clean, return findings: [].`

const SCAN_SCHEMA = {
  type: 'object',
  required: ['findings', 'scanned'],
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        required: ['review', 'file', 'old', 'new', 'kind', 'why'],
        properties: {
          review: { type: 'string' },
          file: { type: 'string' },
          langcode: { type: 'string' },
          old: { type: 'string' },
          new: { type: 'string' },
          kind: { type: 'string' },
          why: { type: 'string' },
        },
      },
    },
    scanned: { type: 'integer' },
    note: { type: 'string' },
  },
}

const APPLY_PROMPT = (file, edits) => `You are the APPLY worker for ONE data file. You exclusively own \`${file}\` this phase.

Apply these ${edits.length} proposed edit(s) (from a safety re-check of closed reviews) to \`${file}\`:
${JSON.stringify(edits.map((e, i) => ({ i, review: e.review, why: e.why, old: e.old, new: e.new })), null, 2)}

For each edit:
- Use the Edit tool with old_string -> new_string on ${file}.
- If old_string is not found, not unique, or already equals new (already correct), SKIP it and record under failed with the reason. Do NOT force anything ambiguous.
After all edits: run \`node --check ${file}\` and report syntax OK/fail. Spot-confirm a couple of applied edits by re-reading.

Return JSON: applied[] (review, postValue), failed[] (review, reason), syntaxOk.`

const APPLY_SCHEMA = {
  type: 'object',
  required: ['applied', 'failed', 'syntaxOk'],
  properties: {
    applied: { type: 'array', items: { type: 'object', required: ['review'], properties: { review: { type: 'string' }, postValue: { type: 'string' } } } },
    failed: { type: 'array', items: { type: 'object', required: ['review', 'reason'], properties: { review: { type: 'string' }, reason: { type: 'string' } } } },
    syntaxOk: { type: 'boolean' },
  },
}

phase('Scan')
log(`Re-checking ${files.length} closed reviews across ${groups.length} scanners`)
const scanResults = await parallel(groups.map((g, gi) => () =>
  agent(SCAN_PROMPT(g, gi), { label: `scan:${g[0].match(/_(\d+)_/)[1]}-${g[g.length-1].match(/_(\d+)_/)[1]}`, phase: 'Scan', schema: SCAN_SCHEMA })))

const allFindings = []
scanResults.filter(Boolean).forEach((r) => { if (Array.isArray(r.findings)) allFindings.push(...r.findings) })
const totalScanned = scanResults.filter(Boolean).reduce((n, r) => n + (r.scanned || 0), 0)
log(`Scanned ${totalScanned} reviews; ${allFindings.length} residual actionable findings`)

const byFile = {}
allFindings.forEach((e) => { if (e.file && e.old && e.new) (byFile[e.file] ||= []).push(e) })
const fileNames = Object.keys(byFile)

phase('Apply')
const applyResults = fileNames.length
  ? await parallel(fileNames.map((f) => () =>
      agent(APPLY_PROMPT(f, byFile[f]), { label: `apply:${f.split('/').pop()}`, phase: 'Apply', schema: APPLY_SCHEMA })))
  : []
const totalApplied = applyResults.filter(Boolean).reduce((n, r) => n + (r.applied?.length || 0), 0)
const totalFailed = applyResults.filter(Boolean).reduce((n, r) => n + (r.failed?.length || 0), 0)
log(`Applied ${totalApplied} residual fixes (${totalFailed} skipped/already-correct)`)

phase('Validate')
const validation = await agent(
  `Run \`node validate_wordmap_data.js\` and report the PASS/FAIL summary line and any ERRORS (the only known baseline is wbp.words.hello/thanks which should now PASS via the cultural-absence exemption). Then run \`node --check\` on every words/*.js file shown by \`git status --short words/\`. Return JSON: { validatorOk, details }.`,
  { label: 'validate', phase: 'Validate', schema: { type: 'object', required: ['details'], properties: { validatorOk: { type: 'boolean' }, details: { type: 'string' } } } })
log(`Validation: ${validation?.details || 'n/a'}`)

return {
  scanned: totalScanned,
  findings: allFindings.length,
  applied: totalApplied,
  failed: totalFailed,
  validation: validation?.details,
  detail: allFindings.map((f) => ({ review: f.review, file: f.file, langcode: f.langcode, kind: f.kind, why: f.why })),
}
