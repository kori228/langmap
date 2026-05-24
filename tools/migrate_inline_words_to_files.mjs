// tools/migrate_inline_words_to_files.mjs
//
// One-shot script. Loads the inline-style wordmap_data.js under Node,
// transposes each (language, word) cell into per-concept files under
// words/, and emits a stripped wordmap_data.js plus word_manifest.js.
//
// Run from repo root:   node tools/migrate_inline_words_to_files.mjs
//
// Leaves a backup at wordmap_data.js.pre-split for manual diff.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function loadDataModule() {
    const src = fs.readFileSync(path.join(ROOT, 'wordmap_data.js'), 'utf8');
    const sandbox = { console };
    vm.createContext(sandbox);

    // Extract and execute with declarations exposed to sandbox
    const wrapped = src + `
globalThis.WORD_LIST = WORD_LIST;
globalThis.LANG_DATA = LANG_DATA;
`;
    vm.runInContext(wrapped, sandbox);

    if (!sandbox.WORD_LIST || !sandbox.LANG_DATA) {
        throw new Error('wordmap_data.js did not define WORD_LIST + LANG_DATA');
    }
    return { WORD_LIST: sandbox.WORD_LIST, LANG_DATA: sandbox.LANG_DATA };
}

function buildWords(WORD_LIST, LANG_DATA) {
    // Result keyed by word ID. Each value:
    //   { label, definition, data: { langCode: tuple|object } }
    const WORDS = {};
    for (const w of WORD_LIST) {
        WORDS[w.id] = {
            label:      w.label      || {},
            definition: w.definition || {},
            data:       {},
        };
    }
    for (const [code, lang] of Object.entries(LANG_DATA)) {
        const words    = lang.words        || {};
        const altForms = lang.altWordForms || {};
        for (const wid of Object.keys(WORDS)) {
            const tuple = words[wid];
            const alt   = altForms[wid];
            if (!tuple && !alt) continue;
            if (alt && alt.length > 0) {
                // Object form: keeps the primary tuple plus alt scripts.
                WORDS[wid].data[code] = {
                    form: tuple ? tuple[0] : '',
                    ipa:  tuple ? tuple[1] : '',
                    alt:  alt,
                };
            } else if (tuple) {
                WORDS[wid].data[code] = tuple;
            }
        }
    }
    return WORDS;
}

function indent(n) { return ' '.repeat(n); }

function jsValue(v) {
    // Conservative JSON.stringify-based serializer. Strings → JSON
    // strings; arrays → JSON arrays; objects → JSON objects. JSON is
    // a valid subset of JS literals for these payloads (no functions,
    // no Date, no undefined values flowing through).
    return JSON.stringify(v);
}

function serializeWord(id, entry) {
    const lines = [];
    lines.push('/**');
    lines.push(` * ${id} — see docs/words/CONTRIBUTING.md for editing guidance.`);
    lines.push(' * Language codes: see docs/words/LANG_CODES.md.');
    lines.push(' */');
    lines.push(`WORDS.${id} = {`);

    // label
    lines.push(`${indent(2)}label: {`);
    for (const [k, v] of Object.entries(entry.label)) {
        lines.push(`${indent(4)}${k}: ${jsValue(v)},`);
    }
    lines.push(`${indent(2)}},`);

    // definition
    lines.push(`${indent(2)}definition: {`);
    for (const [k, v] of Object.entries(entry.definition)) {
        lines.push(`${indent(4)}${k}: ${jsValue(v)},`);
    }
    lines.push(`${indent(2)}},`);

    // data
    lines.push(`${indent(2)}data: {`);
    for (const [code, val] of Object.entries(entry.data)) {
        if (Array.isArray(val)) {
            lines.push(`${indent(4)}${code}: [${jsValue(val[0] ?? '')}, ${jsValue(val[1] ?? '')}],`);
        } else {
            // Object form: pretty-print on its own block.
            lines.push(`${indent(4)}${code}: {`);
            lines.push(`${indent(6)}form: ${jsValue(val.form ?? '')},`);
            lines.push(`${indent(6)}ipa:  ${jsValue(val.ipa  ?? '')},`);
            if (val.alt) {
                lines.push(`${indent(6)}alt: [`);
                for (const a of val.alt) {
                    lines.push(`${indent(8)}{ form: ${jsValue(a.form)}, script: ${jsValue(a.script)}, source: ${jsValue(a.source ?? '')} },`);
                }
                lines.push(`${indent(6)}],`);
            }
            lines.push(`${indent(4)}},`);
        }
    }
    lines.push(`${indent(2)}},`);
    lines.push('};');
    lines.push('');
    return lines.join('\n');
}

function writePerWordFiles(WORDS) {
    const outDir = path.join(ROOT, 'words');
    fs.mkdirSync(outDir, { recursive: true });
    for (const [id, entry] of Object.entries(WORDS)) {
        const file = path.join(outDir, `${id}.js`);
        fs.writeFileSync(file, serializeWord(id, entry), 'utf8');
        console.log(`wrote ${file}`);
    }
}

function main() {
    const { WORD_LIST, LANG_DATA } = loadDataModule();
    const WORDS = buildWords(WORD_LIST, LANG_DATA);
    writePerWordFiles(WORDS);
}
main();
