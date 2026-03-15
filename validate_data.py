#!/usr/bin/env python3
"""
LangMap Data Validator / データバリデーションスクリプト

Checks data.js for common errors before committing.
See CONTRIBUTING.md for the full list of rules.

Usage:
    python3 validate_data.py
    python3 validate_data.py --fix  # Auto-fix adjacent same-ID segments
"""

import re
import sys
import json

# All language codes
REQUIRED_LANGS = {
    'ja', 'osa', 'aom', 'oki', 'hak', 'ja_edo', 'ain',
    'ko', 'kp', 'bus', 'jeju',
    'zh', 'yue', 'nan', 'wuu', 'zh_classical', 'bo',
    'vi', 'vi_nom',
    'th', 'id', 'ms', 'tl', 'mg', 'my', 'jv', 'km', 'lo', 'mi', 'haw',
    'sa', 'hi', 'ta', 'fa', 'mn', 'tr', 'bn', 'ur', 'te', 'ka',
    'ar', 'ar_eg', 'he', 'am', 'egy', 'sw', 'yo', 'zu',
    'en', 'en_aave', 'en_south', 'en_app', 'en_ie', 'en_sco', 'en_yk', 'en_ck',
    'nl', 'de',
    'ga', 'cy', 'eu',
    'la', 'fr', 'it', 'es_eu', 'es_mx', 'pt_eu', 'pt_br',
    'ru', 'uk', 'pl', 'fi', 'hu', 'el', 'hy',
    'nv', 'qu',
}

# Languages that do NOT use spaces between words
NO_SPACE_LANGS = {
    'ja', 'osa', 'aom', 'oki', 'ja_edo',
    'ko', 'kp', 'bus',
    'zh', 'yue', 'nan', 'wuu', 'zh_classical',
    'th',
    'vi_nom',
}

# Valid segment IDs (single uppercase letters)
VALID_SEGMENT_IDS = set('ABCDEFGHIJKLMNOPQRSTUVWXYZ')

# Common simplified Chinese characters that should be traditional in Cantonese
SIMPLIFIED_CHARS = {
    '车': '車', '东': '東', '马': '馬', '鱼': '魚', '鸟': '鳥',
    '长': '長', '门': '門', '见': '見', '贝': '貝', '风': '風',
    '书': '書', '学': '學', '电': '電', '飞': '飛', '机': '機',
    '头': '頭', '买': '買', '卖': '賣', '开': '開', '关': '關',
    '听': '聽', '说': '說', '读': '讀', '写': '寫', '认': '認',
    '识': '識', '语': '語', '话': '話', '请': '請', '让': '讓',
    '给': '給', '对': '對', '过': '過', '进': '進', '还': '還',
    '运': '運', '动': '動', '园': '園', '医': '醫', '药': '藥',
    '钱': '錢', '银': '銀', '铁': '鐵', '钟': '鐘', '时': '時',
    '点': '點', '热': '熱', '冷': '冷', '饭': '飯', '饮': '飲',
    '汤': '湯', '脑': '腦', '经': '經', '线': '線', '网': '網',
    '号': '號', '华': '華', '国': '國', '区': '區', '图': '圖',
    '馆': '館', '厅': '廳', '楼': '樓', '层': '層', '广': '廣',
    '场': '場', '种': '種', '岁': '歲', '体': '體', '发': '發',
    '气': '氣', '从': '從', '这': '這', '个': '個', '么': '麼',
    '为': '為', '会': '會', '将': '將', '来': '來', '与': '與',
    '后': '後', '里': '裡', '面': '麵', '着': '著',
}


def load_data(filepath='data.js'):
    """Load and parse data.js"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract JSON array from "const SENTENCES = [...];"
    match = re.search(r'const\s+SENTENCES\s*=\s*(\[.*\])\s*;', content, re.DOTALL)
    if not match:
        print("ERROR: Could not parse data.js - expected 'const SENTENCES = [...];'")
        sys.exit(1)

    try:
        sentences = json.loads(match.group(1))
    except json.JSONDecodeError as e:
        print(f"ERROR: Invalid JSON in data.js: {e}")
        sys.exit(1)

    return sentences


def check_adjacent_same_id(sentence, lang_code, segments):
    """Check for adjacent segments with the same ID"""
    errors = []
    for i in range(len(segments) - 1):
        if segments[i][0] == segments[i + 1][0]:
            seg_id = segments[i][0]
            errors.append(
                f"  [{lang_code}] Adjacent same-ID segments: "
                f"[\"{seg_id}\", \"{segments[i][1]}\"] + [\"{seg_id}\", \"{segments[i+1][1]}\"] "
                f"→ merge into one"
            )
    return errors


def check_flipped_segments(sentence, lang_code, segments, defined_ids):
    """Check for flipped [text, segID] instead of [segID, text]"""
    errors = []
    for seg in segments:
        if len(seg) != 2:
            errors.append(f"  [{lang_code}] Invalid segment length: {seg}")
            continue
        seg_id, text = seg[0], seg[1]
        # If first element is NOT a valid segment ID but second element IS
        if seg_id not in defined_ids and text in defined_ids:
            # Exception: English "I" looks like a segment ID
            if seg_id == 'I' and lang_code == 'en':
                continue
            errors.append(
                f"  [{lang_code}] Possibly flipped segment: [\"{seg_id}\", \"{text}\"] "
                f"→ should be [\"{text}\", \"{seg_id}\"]?"
            )
        # Check if segment ID is valid
        if seg_id not in VALID_SEGMENT_IDS:
            # Could be a flipped English "I"
            if seg_id == 'I' and lang_code == 'en':
                continue
            errors.append(
                f"  [{lang_code}] Invalid segment ID: \"{seg_id}\" in {seg}"
            )
    return errors


def check_missing_langs(sentence, langs_data):
    """Check for missing language entries"""
    errors = []
    present = set(langs_data.keys())
    missing = REQUIRED_LANGS - present
    if missing:
        errors.append(f"  Missing languages: {', '.join(sorted(missing))}")
    extra = present - REQUIRED_LANGS
    if extra:
        errors.append(f"  Unknown languages: {', '.join(sorted(extra))}")
    return errors


def check_segment_ids_match(sentence, langs_data, defined_ids):
    """Check that all languages use the same set of segment IDs"""
    errors = []
    for lang_code, segments in langs_data.items():
        used_ids = set()
        for seg in segments:
            if len(seg) == 2 and seg[0] in VALID_SEGMENT_IDS:
                used_ids.add(seg[0])
        missing_ids = defined_ids - used_ids
        extra_ids = used_ids - defined_ids
        if missing_ids:
            errors.append(f"  [{lang_code}] Missing segment IDs: {', '.join(sorted(missing_ids))}")
        if extra_ids:
            errors.append(f"  [{lang_code}] Undefined segment IDs: {', '.join(sorted(extra_ids))}")
    return errors


def check_yue_simplified(sentence, segments):
    """Check Cantonese for simplified Chinese characters"""
    errors = []
    for seg in segments:
        text = seg[1] if len(seg) == 2 else ''
        found = []
        for char in text:
            if char in SIMPLIFIED_CHARS:
                found.append(f"{char}→{SIMPLIFIED_CHARS[char]}")
        if found:
            errors.append(
                f"  [yue] Simplified Chinese found in \"{text}\": {', '.join(found)}"
            )
    return errors


def check_vi_nom_latin(sentence, segments):
    """Check Chữ Nôm for Latin (quốc ngữ) characters"""
    errors = []
    latin_pattern = re.compile(r'[a-zA-Zàáâãèéêìíòóôõùúýăđĩũơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]', re.IGNORECASE)
    for seg in segments:
        text = seg[1] if len(seg) == 2 else ''
        if latin_pattern.search(text):
            errors.append(
                f"  [vi_nom] Latin characters found: \"{text}\" — must use Hán-Nôm characters"
            )
    return errors


def check_zh_classical_modern(sentence, segments):
    """Check Classical Chinese for overly modern vocabulary"""
    # Just flag common modern words that should be classical
    modern_to_classical = {
        '我想': '吾欲/余欲',
        '想要': '欲',
        '吃饭': '食',
        '他们': '彼等',
        '我们': '吾等',
    }
    errors = []
    full_text = ''.join(seg[1] for seg in segments if len(seg) == 2)
    for modern, classical in modern_to_classical.items():
        if modern in full_text:
            errors.append(
                f"  [zh_classical] Modern Chinese \"{modern}\" found — use classical \"{classical}\""
            )
    return errors


def fix_adjacent_same_id(sentences):
    """Auto-fix adjacent same-ID segments by merging them"""
    fixed_count = 0
    for sentence in sentences:
        for lang_code, segments in sentence.get('langs', {}).items():
            i = 0
            while i < len(segments) - 1:
                if segments[i][0] == segments[i + 1][0]:
                    sep = '' if lang_code in NO_SPACE_LANGS else ' '
                    segments[i] = [segments[i][0], segments[i][1] + sep + segments[i + 1][1]]
                    segments.pop(i + 1)
                    fixed_count += 1
                else:
                    i += 1
    return fixed_count


def validate(filepath='data.js', auto_fix=False):
    sentences = load_data(filepath)
    total_errors = 0
    total_warnings = 0

    print(f"Validating {len(sentences)} sentences across {len(REQUIRED_LANGS)} languages...\n")

    for sentence in sentences:
        sid = sentence.get('id', '?')
        title = sentence.get('title', '?')
        defined_ids = set(sentence.get('segments', {}).keys())
        langs_data = sentence.get('langs', {})
        errors = []
        warnings = []

        # Check missing languages
        errors.extend(check_missing_langs(sentence, langs_data))

        # Check segment IDs match definition
        warnings.extend(check_segment_ids_match(sentence, langs_data, defined_ids))

        for lang_code, segments in langs_data.items():
            # Check adjacent same-ID
            errors.extend(check_adjacent_same_id(sentence, lang_code, segments))

            # Check flipped segments
            errors.extend(check_flipped_segments(sentence, lang_code, segments, defined_ids))

            # Language-specific checks
            if lang_code == 'yue':
                warnings.extend(check_yue_simplified(sentence, segments))
            elif lang_code == 'vi_nom':
                errors.extend(check_vi_nom_latin(sentence, segments))
            elif lang_code == 'zh_classical':
                warnings.extend(check_zh_classical_modern(sentence, segments))

        if errors or warnings:
            print(f"Sentence {sid}: {title}")
            for e in errors:
                print(f"  ERROR: {e}")
                total_errors += 1
            for w in warnings:
                print(f"  WARN:  {w}")
                total_warnings += 1
            print()

    print("=" * 60)
    print(f"Total: {len(sentences)} sentences, {total_errors} errors, {total_warnings} warnings")

    if total_errors == 0 and total_warnings == 0:
        print("All checks passed!")

    if auto_fix and total_errors > 0:
        sentences = load_data(filepath)
        fixed = fix_adjacent_same_id(sentences)
        if fixed > 0:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            new_json = json.dumps(sentences, ensure_ascii=False, indent=2)
            new_content = re.sub(
                r'const\s+SENTENCES\s*=\s*\[.*\]\s*;',
                f'const SENTENCES = {new_json};',
                content,
                flags=re.DOTALL,
            )
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"\nAuto-fixed {fixed} adjacent same-ID segments.")

    return total_errors


if __name__ == '__main__':
    auto_fix = '--fix' in sys.argv
    filepath = 'data.js'
    for arg in sys.argv[1:]:
        if not arg.startswith('--'):
            filepath = arg

    errors = validate(filepath, auto_fix)
    sys.exit(1 if errors > 0 else 0)
