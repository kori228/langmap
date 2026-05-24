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

function main() {
    const { WORD_LIST, LANG_DATA } = loadDataModule();
    const WORDS = buildWords(WORD_LIST, LANG_DATA);
    console.log(`built ${Object.keys(WORDS).length} word entries`);
    for (const w of WORD_LIST) {
        const filled = Object.keys(WORDS[w.id].data).length;
        console.log(`  ${w.id}: ${filled} translations`);
    }
}
main();
