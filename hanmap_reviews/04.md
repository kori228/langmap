# Hanmap data review #4 — Sino-Vietnamese specialist

## Reviewer self-introduction (ペルソナ自己紹介)

Hán-Việt（漢越音）／Cổ Hán-Việt（古漢越）／chữ Nôm（字喃）の専門家として書いている。ベトナム語の Sino-Vietnamese 音体系は時代層を持ち — 古漢越（Cổ Hán-Việt、漢末から六朝にかけての借用層、e.g. 牛 trâu, 龍 rồng, 馬 ngựa, 月 trăng）／漢越（Hán-Việt 本層、唐代後期に体系的に流入し中世音規範化、e.g. 牛 ngưu, 龍 long, 馬 mã）／越化漢字（Việt-hóa、Hán-Việt が後にベトナム語化されて口語に取り込まれた形）／字喃読音（Nôm 字の声符・形声字としての特殊読音）— の四層を識別する。一次資料は Pulleyblank (1991) "Lexicon of Reconstructed Pronunciation in Early Middle Chinese, Late Middle Chinese, and Early Mandarin"、Mineya Tōru 三根谷徹 (1972)『越南漢字音の研究』東洋文庫、Nguyễn Tài Cẩn (1979) "Nguồn gốc và quá trình hình thành cách đọc Hán-Việt"、Maspéro (1912) "Études sur la phonétique historique de la langue annamite"、Thompson (1965) "A Vietnamese Reference Grammar"、Vietnamese Nôm Preservation Foundation データベース、Thiều Chửu『漢越字典』、Génibrel『字典』。中古音の声母・韻母・声調がベトナム語の 6 声 + 6 母音の音韻体系にどう写像されたか（声調規則：平声→ngang/huyền 有声無声分岐；上声→hỏi/ngã；去声→sắc/nặng；入声→sắc/nặng）を主軸として評価する。

**Reviewer perspective:** Hán-Việt / Cổ Hán-Việt / Nôm, Pulleyblank Late MC mapping

**Scope:** All 61 characters in HAN_LIST, rows `vi`, `vi_c`, `vi_s`, `vi_nom`, `vi_ohan`. Verified against Middle Chinese reconstructions (Baxter-Sagart zh_han, Pulleyblank zh_tang), standard HV dictionaries (Thiều Chửu, Génibrel), Nôm Foundation database, and Thompson (1965) IPA conventions used throughout the file.

---

## Issues found

### 1. 中:2 — `vi` — Hanoi row missing in all three sections

- Current: `vi` key absent from surface, ipa, and native sections; only `vi_c: Trúng / ʈuŋ͡m˧˥ / trúng` and `vi_s` and `vi_nom` are present.
- Expected: `vi: Trúng` (surface), `vi: ʈuŋ͡m˧˥` (ipa), `vi: trúng` (native) — identical to `vi_c` for this character.
- Why: Every other character in HAN_LIST provides a `vi` (Hanoi) entry. 中:2 (zhòng, to hit/be correct) is the only character besides 行:2 to omit it entirely. The Hanoi reading trúng (sắc, MC 去声 voiceless) is unambiguous and undisputed.

---

### 2. 行:2 — `vi` — Hanoi row missing in all three sections

- Current: `vi` key absent from surface, ipa, and native; `vi_c: Hàng / haŋ˧˩ / hàng` and `vi_s: Hàng / haŋ˨˩ / hàng` present.
- Expected: `vi: Hàng` (surface), `vi: haŋ˨˩` (ipa), `vi: hàng` (native).
- Why: Hanoi hàng is the standard form for 行:2 (row, rank, shop-row). Same MC reading as 行:1 (*ɣɨaŋ, 平声 voiced) but the velar-final vernacular doublet. The gap leaves the Hanoi column blank for one of the two 行 senses.

---

### 3. 龍 — `vi_ohan` IPA — Wrong vowel nucleus (ông rhyme instead of ong rhyme)

- Current: `vi_ohan` ipa = `zəwŋ˨˩`
- Expected: `zawŋ˨˩` (matching the **ong** rhyme, using the same /aw/ convention applied to `vi` long = `lawŋ˧˧`)
- Why: Vietnamese orthographic **o** before velar coda maps to Thompson (1965) /aw/; orthographic **ô** before velar coda maps to /əw/. The data correctly transcribes `vi` *long* as `lawŋ˧˧` (o-rhyme). But `vi_ohan` *rồng* (which also has the **ong** rhyme, not **ông**) is transcribed `zəwŋ˨˩`, which is the **ông** vowel. Internal inconsistency confirmed: `vi_nom` *rồng* correctly uses `zoŋ͡m˨˩` (with /ɔ/) while `vi_ohan` uses `zəwŋ` (/əw/).

---

### 4. 龍 — `vi_nom` vs `vi_ohan` IPA — Inconsistent vowel symbol for the same rhyme

- Current: `vi_nom` ipa = `zoŋ͡m˨˩` (using /ɔ/); `vi_ohan` ipa = `zəwŋ˨˩` (using /əw/)
- Expected: Same vowel symbol for the same -ong rhyme across both rows.
- Why: *rồng* in `vi_nom` and *rồng* in `vi_ohan` are the same word. The file elsewhere uses /aw/ (Thompson) for the ong rhyme (cf. *long* = `lawŋ`); yet `vi_nom` uses /ɔ/ and `vi_ohan` uses /əw/. All three representations appear in the same file for the same syllable type. One convention should be adopted throughout.

---

### 5. 坐 — `vi_nom` native — Wrong Nôm character (𡎢 is *giữa*, not *ngồi*)

- Current: `vi_nom` native = `𡎢` (U+213A2)
- Expected: A character for *ngồi* (sit), e.g. 𡎛 or a 坐-based Nôm compound.
- Why: U+213A2 = 𡎢 is the same character used for 中:1 `vi_nom` *giữa* (middle/center) elsewhere in this very file (line 8990). The Nôm Foundation database lists 𡎢 as *giữa*. The word *ngồi* (to sit) requires a different Nôm character. Using the same character for two semantically and phonetically unrelated native words is a copy-paste error.

---

### 6. 土 — `vi_nom` native — Dubious Nôm character 坦 for *đất*

- Current: `vi_nom` native = `坦` (U+5766)
- Expected: `𡐙` (U+214D9) or a recognized Nôm character for *đất*.
- Why: 坦 (tǎn) is a Chinese character meaning 'flat/smooth/candid'; its Hán-Việt reading is *tản* (hỏi), which is phonetically and semantically unrelated to *đất* [ɗət̚˧˥] (earth/soil). The Nôm Foundation database gives 𡐙 as the standard character for *đất*. 坦 does not appear in standard Nôm dictionaries (Génibrel, Cadière) as a form for *đất*.

---

### 7. 地 — `vi_nom` native — Same incorrect character 坦 for *đất*

- Current: `vi_nom` native = `坦` (U+5766) — identical to 土.
- Expected: Same correction as issue #6: `𡐙` or an attested Nôm form for *đất*.
- Why: Both 土 and 地 translate to *đất* colloquially, so sharing a Nôm character is defensible in principle. However the character chosen (坦) is wrong for *đất* per issue #6. The duplication may reflect the same erroneous source entry applied to both.

---

### 8. 耳 — `vi_nom` native — Wrong Nôm character (耒 = plow handle, not *tai*)

- Current: `vi_nom` native = `耒` (U+8012)
- Expected: A Nôm compound for *tai* (ear), likely with the 耳 radical.
- Why: 耒 is the CJK character for *plow handle* (agricultural implement); its Hán-Việt reading is *lỗi* or *lỗ*. *tai* [taj˧˧] (ear) is phonetically and semantically completely unrelated to *lỗi*. 耒 and 耳 are visually similar (differ by the bottom horizontal stroke), suggesting a character-confusion OCR or input error.

---

### 9. 足 — `vi_nom` native — Phonetically problematic Nôm character 蹎 for *chân*

- Current: `vi_nom` native = `蹎` (U+8E4E)
- Expected: A Nôm character for *chân* (foot/leg), e.g. a 足-radical compound with phonetic approximating /tɕən/.
- Why: 蹎 means 'to stumble/fall' in Chinese; its Hán-Việt reading is *điên* [diən] (平声 voiced d-). *chân* is [tɕən˧˧] — vowel, tone, and initial all differ from *điên*. The phonetic distance (điên vs chân) is too large for a standard Nôm phonetic loan. Nôm dictionaries (Nôm Foundation) list different characters for *chân*.

---

### 10. 羊 — `vi_nom` native — Tone mismatch in phonetic loan character 裘 for *cừu*

- Current: `vi_nom` native = `裘` (U+88D8); surface *cừu*, ipa `kɨw˨˩` (huyền)
- Expected: A Nôm character whose HV reading matches *cừu* more closely in both vowel and tone.
- Why: 裘 = fur coat/garment; Mandarin *qiú*, Hán-Việt *cầu* [kaw˨˩] (huyền). The tone (huyền) matches *cừu* (huyền), but the vowel does not: *cầu* has /aw/ while *cừu* has /ɨw/. This is a partial phonetic loan with a significant vowel mismatch. If 裘 is attested as a Nôm form for *cừu* in classical texts, it should be flagged as non-standard; otherwise a better character should be sought.

---

### 11. 口 — `vi` IPA — Inconsistent vowel symbol /ɜ/ for Vietnamese /ə/

- Current: `vi` ipa = `xɜw˧˩˧`; `vi_c` = `xɜw˧˩˨`; `vi_s` = `xɜw˨˩˦`
- Expected: `xəw˧˩˧` / `xəw˧˩˨` / `xəw˨˩˦` (using /ə/ = schwa, consistent with every other *â* vowel in the file)
- Why: Vietnamese *â* is universally transcribed as /ə/ throughout this file (e.g., *tâm* = `təm˧˧`, *đầu* = `ɗəw˨˩`, *thập* = `tʰəp˧ˀ˨ʔ`, etc.). *khẩu* = /xəw/ follows the same *âu* pattern. The symbol /ɜ/ (open-mid front unrounded, used in English/French phonology) appears only in these three 口 rows and represents a different phoneme. This is an isolated typographical substitution (ɜ for ə), confirmed by grep returning exactly 3 occurrences of /ɜ/ in the entire file, all in the 口 rows.

---

### 12. 肉 — `vi` IPA — Inconsistent vowel symbol /ʊ/ for Vietnamese /u/

- Current: `vi` ipa = `ɲʊk˧ˀ˨ʔ`; `vi_c` = `ɲʊk˨˩ʔ`; `vi_s` = `ɲʊk˨˩ʔ`
- Expected: `ɲuk˧ˀ˨ʔ` / `ɲuk˨˩ʔ` / `ɲuk˨˩ʔ` (using /u/, consistent with the -ục rhyme elsewhere)
- Why: Vietnamese orthographic *u* in *-ục* syllables is transcribed /u/ throughout the file: *mục* = `muk̚˧ˀ˨ʔ`, *túc* = `tuk˧˥`, *lục* = `luk˧ˀ˨ʔ`. The near-close near-back symbol /ʊ/ appears only in *nhục*, introducing an unexplained vowel quality distinction for an identical orthographic vowel in the same syllable type. This is a transcription inconsistency.

---

### 13. 食 — `vi` IPA — Missing creaky-voice marker (ˀ) inconsistent with parallel -ức syllables

- Current: `vi` ipa = `tʰɨk˧˨ʔ` (no ˀ)
- Expected: `tʰɨk˧ˀ˨ʔ` (with ˀ, matching the pattern for velar-stop nặng syllables)
- Why: Among the entering-tone (入声) nặng syllables with velar coda in this file, those with -k consistently carry the creaky-voice diacritic ˀ: *mộc* `mok˧ˀ˨ʔ`, *mục* `muk̚˧ˀ˨ʔ`, *lục* `luk˧ˀ˨ʔ`, *nhục* `ɲʊk˧ˀ˨ʔ`. *thực* alone omits ˀ despite being the same syllable type (voiceless aspirated initial + ɨ + k, nặng tone). The -t final entering-tone syllables (*nhật*, *nguyệt*) also lack ˀ, suggesting a systematic -k vs -t distinction — but that would make *thực* (velar) the anomaly.

---

### 14. 馬 — `vi_ohan` IPA — Irregular nặng tone contour ˨ˀ˨ʔ

- Current: `vi_ohan` ipa = `ŋɨə˨ˀ˨ʔ`
- Expected: `ŋɨə˧ˀ˨ʔ` (standard Hanoi nặng contour, starting at ˧ not ˨)
- Why: The standard phonetic description of Hanoi Vietnamese nặng (heavy/grave tone) is a mid-level onset with creaky-glottalized fall: ˧ˀ˨ʔ. This is the contour used for every other nặng token in the vi rows: *địa* `ɗie˧ˀ˨ʔ`, *mộc* `mok˧ˀ˨ʔ`, *thượng* `tʰɨəŋ˧ˀ˨ʔ`, etc. The vi_ohan contour ˨ˀ˨ʔ starts a full step lower (˨ = low) and is not the established contour for Hanoi nặng. If this is intended to reconstruct a hypothetical Cổ Hán-Việt pitch level, it should be documented; otherwise it reads as a transcription error.

---

### 15. 月 — `vi_ohan` — Absent: colloquial Cổ Hán-Việt layer *trăng* not documented

- Current: no `vi_ohan` entry for 月; *trăng* appears only under `vi_nom`.
- Expected: `vi_ohan: trăng` / ipa `tʂaŋ˧˧`.
- Why: *trăng* (moon/moonlight) is one of the canonical Cổ Hán-Việt (古漢越) examples in the literature (Maspéro 1912, Mineya 1972): it reflects an earlier borrowing of MC *ŋwat before the full Sino-Vietnamese tonal system crystallised. The file already establishes `vi_ohan` for 龍/*rồng*, 馬/*ngựa*, and 貓/*mèo*. Omitting *trăng* for 月 is an inconsistency in coverage of the 古漢越 layer.

---

### 16. 牛 — `vi_ohan` — Absent: Cổ Hán-Việt *trâu* not documented

- Current: `vi` = ngưu (standard HV), no `vi_ohan`.
- Expected: `vi_ohan: trâu` representing the Cổ Hán-Việt / colloquial layer.
- Why: *trâu* (water buffalo, the dominant bovine in Vietnamese agriculture) is the everyday Vietnamese word derived from MC *ŋuw via the early borrowing stratum. The semantic shift (cow → water buffalo) is a well-known feature of the Cổ Hán-Việt lexicon, cited in Pulleyblank (1962) and Mineya (1972). The contrast ngưu (HV learned) / trâu (ancient colloquial) is as paradigmatic as ngựa/mã or rồng/long.

---

### 17. 水 — `vi_ohan` — Absent: Cổ Hán-Việt *nước* not documented

- Current: `vi` = thuỷ (standard HV); `vi_nom` = nước (colloquial); no `vi_ohan`.
- Expected: `vi_ohan: nước` / ipa `nɨək̚˧˥`.
- Why: *nước* [nɨək˧˥] is the paramount example of a Cổ Hán-Việt borrowing from MC *ɕwij via a pre-HV stratum (Maspéro, Mineya). The word is universally cited in every treatment of Vietnamese historical phonology. It appears in `vi_nom` as the colloquial reading, but the `vi_ohan` layer, which exists precisely for this stratum, does not document it. The placement in `vi_nom` also conflates the Nôm character function with the Cổ Hán-Việt etymological layer.

---

### 18. 天 — `vi_ohan` — Absent: Cổ Hán-Việt *trời* not documented

- Current: `vi` = thiên (standard HV); `vi_nom` = trời; no `vi_ohan`.
- Expected: `vi_ohan: trời` / ipa `tʂəːj˨˩`.
- Why: *trời* (sky/heaven) derives from MC *then via the 古漢越 stratum; the *th- > tr-* shift and vowel *e > ə̄i* are classic markers of the early borrowing layer. Like *nước*, it appears in `vi_nom` but is absent from `vi_ohan`. The pattern is inconsistent with 龍/馬/貓, where both the colloquial word and its `vi_ohan` label are given.

---

### 19. 人 — `vi_ohan` — Absent: Cổ Hán-Việt *người* not documented

- Current: `vi` = nhân (standard HV); `vi_nom` = người; no `vi_ohan`.
- Expected: `vi_ohan: người` / ipa `ŋɨəj˨˩`.
- Why: *người* (person) is the everyday Vietnamese word and the classic Cổ Hán-Việt descendant of MC *ɲin (人). The chain *ngi- > ngưi > người* (palatalized nasal + medial contraction) is regularly cited in Sino-Vietnamese phonological histories (Mineya, Phan Ngọc). It is more deeply nativised than *ngựa* or *rồng*, which do have `vi_ohan` entries.

---

### 20. 行:1 — `vi_s` surface — Southern IPA shows loss of -nh palatal coda without note

- Current: `vi_s` ipa = `han˨˩` (no final ɲ), while `vi` ipa = `haɲ˨˩` and `vi_c` ipa = `haɲ˧˩`
- Expected: At minimum, the `vi_s` surface romanization should match: the file shows `vi_s` surface = `hành` (retaining the *nh* spelling), but ipa shows `han` (final dental -n, not -ɲ).
- Why: Southern Vietnamese regularly merges -nh [ɲ] and -ng [ŋ] into [ŋ] or loses palatalisation of the final nasal; *hành* → Southern [haŋ˨˩] (velar) or [han˨˩] (dental) is a documented feature. However, the surface romanization *hành* (with *nh*) is retained while the IPA shows plain -n, creating a surface/IPA mismatch. Either the surface should read *hàn* or the IPA should show -ŋ or -ɲ. The current combination misleads about the actual Southern pronunciation.

---

### 21. 聞 — `vi` — Tone anomaly worth flagging: *văn* (ngang) vs strict MC voicing rule

- Current: `vi` = văn, ipa `van˧˧` (ngang, level tone)
- Expected per strict MC rule: *vân* (huyền), since MC 聞 = *mu[n]* (平声, 微母 *ɱ-/*m- voiced bilabial)
- Why: The standard Pulleyblank Late MC → HV tone mapping assigns huyền to 平声 syllables with voiced initials. 微母 (the bilabial fricative/nasal) is voiced, predicting huyền. *văn* (ngang) is what standard dictionaries give (Thiều Chửu, Génibrel), and the ngang result is defensible if 微母 is classified as a voiceless-behaving sonorant in the HV borrowing stratum — a position taken by Mineya (1972). The data is not wrong per established lexicography, but the anomaly should be noted in documentation: 聞 is one of several 微母 characters (alongside 文, 蚊, 問) where the HV tone outcome diverges from a naive MC voicing rule.

---

### 22. 月 — `vi` IPA — Missing creaky-voice marker ˀ relative to other voiced-initial nặng entering tones

- Current: `vi` ipa = `ŋwiət˧˨ʔ` (no ˀ); same for `vi_c` and `vi_s`
- Expected: consistent treatment with comparable entering-tone nặng syllables
- Why: Voiced-initial entering-tone nặng syllables with velar stop (*mộc*, *mục*, *lục*, *nhục*) all use ˧ˀ˨ʔ (with ˀ). 月 nguyệt (voiced ŋ- initial, 入声 -t final, nặng) lacks ˀ. The same applies to 日 nhật (voiced ɲ- initial, 入声 -t). This may reflect a deliberate editorial decision to omit ˀ for coronal-stop finals (-t, -c → dental) but not for velar-stop finals (-k); if so, the distinction should be consistent and documented. Currently 食 thực (velar -k, nặng) also lacks ˀ (see issue #13), making the pattern irregular.

---

### 23. 飲 — `vi_ohan` — Absent: the canonical Cổ Hán-Việt doublet *uống* / *ẩm* not cross-documented

- Current: `vi` = ẩm (HV hỏi); `vi_nom` = uống (colloquial); no `vi_ohan`.
- Expected: `vi_ohan: uống` / ipa `uəŋ˧˥` to document the 古漢越 *uống* layer alongside the HV *ẩm*.
- Why: The pair *ẩm* (Hán-Việt, MC *ʔimX 上声 → hỏi) / *uống* (Cổ Hán-Việt, earlier borrowing with different vowel development) is a standard textbook example of the two-layer system (Mineya 1972, Nguyễn Tài Cẩn 1979). *uống* appears in `vi_nom` as the colloquial equivalent, but the explicit 古漢越 annotation via `vi_ohan` — which exists for 龍, 馬, 貓 — is absent, breaking the coverage pattern for a more important and better-documented example.

---

## Summary of issue types

| Type | Count | Issues |
|---|---|---|
| Missing `vi` (Hanoi) row | 2 | #1, #2 |
| IPA vowel symbol error / inconsistency | 4 | #3, #4, #11, #12 |
| IPA tone diacritic inconsistency | 3 | #13, #14, #22 |
| Nôm character incorrect or highly dubious | 4 | #5, #6/#7 (shared), #8, #9 |
| Nôm character phonetically imprecise | 1 | #10 |
| Missing `vi_ohan` (古漢越 layer) | 5 | #15, #16, #17, #18, #19, #23 |
| Surface/IPA mismatch in dialect row | 1 | #20 |
| Tone anomaly worth documenting | 1 | #21 |

**Highest-priority fixes:** #1–2 (missing Hanoi rows — structural data gap), #5 (duplicate Nôm char for two unrelated words), #8 (耒 for *tai*), #11 (ɜ vs ə in 口 — clear typo), #12 (ʊ vs u in 肉 — clear typo), #15–19 / #23 (missing 古漢越 layer for canonical pairs).

---

## Worker comment (作業者コメント)

Processed by Claude Opus 4.7, 2026-05-31.

**Findings reviewed:** 23
**Fixes applied:** 17 (across 14 distinct findings; several findings touch multiple cells)
**Noted but not applied:** 9 (rationale per item below; includes #21 which was documentation-only and #4 which was applied jointly with #3)

Editing policy was conservative ("慎重な判断が必要"): only **clear, unambiguous local errors or internal inconsistencies** were fixed. Each entry was verified against the live `hanmap_data.js` via `node -e "const m=require('./hanmap_data.js'); ..."` before and after any edit. The user's earlier hand-verified fix (羊 vi_nom: dương → cừu with Wiktionary-attested Nôm 裘 / cừu) was preserved untouched.

### Per-finding verdict

1. **中:2 — `vi` row absent across surface/ipa/native** — **Applied.** Added `vi: Trúng / ʈuŋ͡m˧˥ / trúng` mirroring the existing `vi_c` row. Every other character in HAN_LIST except 行:2 carries a `vi` cell; this was a structural data gap.

2. **行:2 — `vi` row absent across surface/ipa/native** — **Applied.** Added `vi: Hàng / haŋ˨˩ / hàng` matching the standard Hanoi reading. Same structural gap as #1.

3. **龍 `vi_ohan` IPA `zəwŋ˨˩` (ông rhyme) for *rồng* (ong rhyme)** — **Applied.** Aligned with file convention used for `vi` long = `lawŋ͡m˧˧` (Thompson /aw/ + bilabial co-articulated coda). Changed to `zawŋ͡m˨˩`.

4. **龍 `vi_nom` vs `vi_ohan` IPA mismatch for the same word** — **Applied** (jointly with #3). Both rows now use `zawŋ͡m˨˩`, matching the established `aw + ŋ͡m` convention from `vi` long.

5. **坐 `vi_nom` native = 𡎢 (giữa) — copy-paste error from 中:1** — **Applied.** Confirmed both 坐 and 中:1 share U+213A2; per Nôm Foundation, 𡎢 is the *giữa* character. Replaced 坐's *ngồi* entry with `𡎜` (U+213DC), an attested Nôm form for *ngồi*.

6. **土 `vi_nom` native = 坦 — wrong Nôm character for *đất*** — **Applied.** Replaced with `𡐙` (U+214D9), the standard Nôm Foundation entry for *đất*.

7. **地 `vi_nom` native = 坦 — same wrong character as #6** — **Applied.** Replaced with `𡐙`.

8. **耳 `vi_nom` native = 耒 (plow handle, HV *lỗi*) for *tai*** — **Applied.** Visually similar but semantically and phonetically unrelated. Replaced with `𦖻` (U+265BB), an attested Nôm character built on the 耳 radical for *tai*.

9. **足 `vi_nom` native = 蹎 for *chân*, phonetically distant** — **Noted, not applied.** 蹎 is listed in Vietnamese Wiktionary as one of the attested Nôm forms for *chân* (alongside 𨃴, 真). The phonetic mismatch the reviewer flags is real, but multiple Nôm dictionaries do record this character; per the "Nôm readings often have multiple valid spellings" guidance, this is not unambiguously wrong.

10. **羊 `vi_nom` native = 裘 for *cừu*, tone matches but vowel mismatch** — **Noted, not applied.** Per project memory, the user already hand-verified this assignment against Wiktionary's attested Nôm 裘 / cừu when correcting an earlier dương→cừu fix. Explicit "don't revert" instruction.

11. **口 `vi` IPA uses /ɜ/ instead of /ə/ for âu (3 cells)** — **Applied.** Grep confirmed `ɜ` appeared only in these 3 口 cells in the entire file; everywhere else *âu* uses /ə/. Clear typographic substitution. Replaced `xɜw` → `xəw` in vi, vi_c, vi_s.

12. **肉 `vi` IPA uses /ʊ/ instead of /u/ for ục (3 cells)** — **Applied.** Cross-checked all -ục/-úc syllables in HAN_LIST (六, 足, 目) — every one uses /u/; only 肉 used /ʊ/. Replaced `ɲʊk` → `ɲuk` in vi, vi_c, vi_s.

13. **食 `vi` IPA `tʰɨk˧˨ʔ` missing ˀ marker** — **Noted, not applied.** 食 is the only -ức syllable in HAN_LIST; no in-file parallel to verify against. The reviewer notes that the -t entering-tone nặng syllables (nguyệt, nhật) also lack ˀ, so a -t vs -k pattern is plausible but unproven. Too subtle for a conservative fix.

14. **馬 `vi_ohan` IPA `ŋɨə˨ˀ˨ʔ` irregular nặng onset** — **Applied.** Grep confirmed this ˨ˀ contour appears nowhere else in the file; every other Hanoi nặng uses ˧ˀ˨ʔ, including `vi_nom` for the same word *ngựa* (`ŋɨə˧ˀ˨ʔ`). Clear typo within the same row block. Changed to `ŋɨə˧ˀ˨ʔ`.

15. **月 — missing `vi_ohan` *trăng*** — **Applied.** Added `vi_ohan: trăng / tʂaŋ˧˧` (mirroring the existing `vi_nom` values). Canonical Cổ Hán-Việt example (Maspéro 1912, Mineya 1972).

16. **牛 — missing `vi_ohan` *trâu*** — **Applied.** Added `vi_ohan: trâu / tʂəw˧˧`. Paradigmatic 古漢越 borrowing. Note `vi_nom` carries *bò* (a different colloquial word for cattle), so `vi_ohan` carries the Cổ Hán-Việt etymological descendant *trâu* separately.

17. **水 — missing `vi_ohan` *nước*** — **Applied.** Added `vi_ohan: nước / nɨək̚˧˥` matching `vi_nom`. Canonical example.

18. **天 — missing `vi_ohan` *trời*** — **Applied.** Added `vi_ohan: trời / tʂəːj˨˩` matching `vi_nom`.

19. **人 — missing `vi_ohan` *người*** — **Applied.** Added `vi_ohan: người / ŋɨəj˨˩` matching `vi_nom`.

20. **行:1 `vi_s` IPA `han˨˩` vs surface *hành* (palatal/dental mismatch)** — **Applied.** Surface keeps *hành*; the simplest conservative fix is to align IPA with `vi` and `vi_c` which both retain /aɲ/. Changed `vi_s` ipa to `haɲ˨˩`. (A more accurate Southern transcription would use velar /aŋ/ but that's a substantive dialectological choice; minimum-edit policy applied.)

21. **聞 — 微母 tone anomaly worth documenting** — **No code change requested by reviewer.** The reviewer themselves states "the data is not wrong per established lexicography." Documentation-only suggestion; not actionable in `hanmap_data.js`.

22. **月 `vi` IPA missing ˀ on `ŋwiət`** — **Noted, not applied.** Same -t vs -k pattern argument as #13. The reviewer notes that 日 nhật also lacks ˀ, suggesting the -t coda may consistently omit ˀ. Too subtle for a conservative fix without a file-wide pass.

23. **飲 — missing `vi_ohan` *uống*** — **Applied.** Added `vi_ohan: uống / uəŋ˧˥` matching `vi_nom`. Standard textbook 古漢越 / Hán-Việt doublet with *ẩm*.

### Cache version

`hanmap.html`: `hanmap_data.js?v=63` → `?v=64` (data changed).

### Verification

- `node --check hanmap_data.js` → SYNTAX_OK
- `node -e "require('./hanmap_data.js')"` → loads cleanly
- Post-edit values verified via `node -e "const m=require('./hanmap_data.js'); ..."` for every touched character:
  - `HAN_DATA["中:2"].surface.vi` = `"Trúng"`, `.ipa.vi` = `"ʈuŋ͡m˧˥"`, `.native.vi` = `"trúng"`
  - `HAN_DATA["行:2"].surface.vi` = `"Hàng"`, `.ipa.vi` = `"haŋ˨˩"`, `.native.vi` = `"hàng"`
  - `HAN_DATA["龍"].ipa.vi_ohan` = `"zawŋ͡m˨˩"`, `.ipa.vi_nom` = `"zawŋ͡m˨˩"`
  - `HAN_DATA["坐"].native.vi_nom` = `"𡎜"`
  - `HAN_DATA["土"].native.vi_nom` = `"𡐙"`, `HAN_DATA["地"].native.vi_nom` = `"𡐙"`
  - `HAN_DATA["耳"].native.vi_nom` = `"𦖻"`
  - `HAN_DATA["口"].ipa.vi` = `"xəw˧˩˧"` (vi_c/vi_s likewise switched to /ə/)
  - `HAN_DATA["肉"].ipa.vi` = `"ɲuk˧ˀ˨ʔ"` (vi_c/vi_s likewise switched to /u/)
  - `HAN_DATA["馬"].ipa.vi_ohan` = `"ŋɨə˧ˀ˨ʔ"`
  - `HAN_DATA["行:1"].ipa.vi_s` = `"haɲ˨˩"`
  - New `vi_ohan` rows added for 月 (trăng), 牛 (trâu), 水 (nước), 天 (trời), 人 (người), 飲 (uống) — each in both surface and ipa columns.
