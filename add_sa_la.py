#!/usr/bin/env python3
"""Merge sa (Sanskrit) and la (Latin) language data into data.js."""

import json, re, sys
sys.path.insert(0, '/home/jounlai/langmap')

from data_sa import SA_DATA
from data_la import LA_DATA

ALL_LANGS = {
    'sa': SA_DATA,
    'la': LA_DATA,
}


def main():
    with open('data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    match = re.search(r'const\s+SENTENCES\s*=\s*(\[.*\])\s*;', content, re.DOTALL)
    if not match:
        print("ERROR: Could not parse data.js")
        return

    sentences = json.loads(match.group(1))

    added = 0
    errors = 0

    for lang_code, lang_data in ALL_LANGS.items():
        for sentence in sentences:
            sid = sentence['id']
            if sid in lang_data:
                sentence['langs'][lang_code] = lang_data[sid]
                added += 1
            else:
                print(f"WARNING: {lang_code} missing sentence {sid}")
                errors += 1

    new_json = json.dumps(sentences, ensure_ascii=False, indent=2)
    new_content = re.sub(
        r'const\s+SENTENCES\s*=\s*\[.*\]\s*;',
        f'const SENTENCES = {new_json};',
        content,
        flags=re.DOTALL,
    )

    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"Added {added} entries across {len(ALL_LANGS)} languages ({errors} warnings)")


if __name__ == '__main__':
    main()
