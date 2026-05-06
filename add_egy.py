#!/usr/bin/env python3
"""LEGACY SENTENCE MAP TOOL.

This edits data.js (sentence/order map), NOT wordmap_data.js.
Do not use for Word Map language data.

Merge missing egy (Ancient Egyptian) sentences into data.js.
"""

import json, os, re, sys

if '--i-know-this-edits-data-js' not in sys.argv:
    raise SystemExit('Refusing to edit data.js without explicit legacy flag --i-know-this-edits-data-js')

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from data_egy import EGY_DATA

def main():
    with open('data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    match = re.search(r'const\s+SENTENCES\s*=\s*(\[.*\])\s*;', content, re.DOTALL)
    if not match:
        print("ERROR: Could not parse data.js")
        return

    sentences = json.loads(match.group(1))

    added = 0
    skipped = 0

    for sentence in sentences:
        sid = sentence['id']
        if sid in EGY_DATA:
            if 'egy' not in sentence['langs']:
                sentence['langs']['egy'] = EGY_DATA[sid]
                added += 1
            else:
                skipped += 1

    new_json = json.dumps(sentences, ensure_ascii=False, indent=2)
    new_content = re.sub(
        r'const\s+SENTENCES\s*=\s*\[.*\]\s*;',
        f'const SENTENCES = {new_json};',
        content,
        flags=re.DOTALL,
    )

    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"Added {added} egy entries (skipped {skipped} existing)")


if __name__ == '__main__':
    main()
