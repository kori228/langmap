# HanMap Review #63 — Native Script Audit (Unihan, kana, hangul, Tangut/Khitan/Jurchen)

Scope: every `native.<lang>` cell across all 61 HAN_LIST entries × 28 langs that actually populate `native` (`bo_sino`, `dng`, `ja_kgs`, `ja_kun`, `ja_ojp`, `ja_okn`, `ja_thk`, `juc`, `ko`, `ko_bus`, `ko_hun`, `ko_kp`, `ko_mid`, `ko_zai`, `mnc`, `sjo`, `txg`, `vi`, `vi_c`, `vi_nom`, `vi_s`, `yue_dg`, `yue_gz`, `yue_nn`, `yue_ts`, `yue_zs`, `zh_phagspa`, `zkt`).

Note: zh / zh_sc / yue / yue_hk / yue_mo and all Mandarin sub-dialects do **not** carry a `native` field (they reuse the head HAN_LIST glyph for display). So focus #1 (Han variant 龍/龙 simplified vs traditional in `native`) is not applicable — variant choice lives in the headword `HAN_LIST` itself, where it is consistently traditional (`龍/馬/鳥/見/聞/來→来/頭/...`). HAN_LIST does use the simplified-style `来` (not `來`) for the verb, which is the one inconsistency in the headword set; that is out of scope for `native`-only review.

Findings are numbered. Each cites a HAN char + lang. All cell values quoted are read-only references; no edits made.

---

## 1. Dungan (`dng`) — Latin where Cyrillic expected
`dng` is consistently Cyrillic for 59/61 entries, but two entries are bare Latin transliterations:

- `三 dng = "san"` — expected Cyrillic `сан` (matches the pattern of `山 dng = "сан"`).
- `七 dng = "chi"` — expected Cyrillic `чи` (or `чы` per Dungan orthography).

Two more entries have no `dng` cell at all: `中:2`, `行:2`. Since the simplex senses (`中:1`, `行:1`) both have Dungan, the divergent senses should either reuse the same form or be deliberately marked. Currently they are silently missing.

## 2. Korean (`ko`) — `来` violates Sino-Korean dueum rule at headword position
`来 ko = "래"`, but `ko_bus = "내"` and `ko_zai = "내"`. South-Korean modern orthography applies dueum (initial-rule) so 來 reads `내` at word-initial (내일 來日, 내년 來年). The dictionary headword reading in 표준국어대사전 is `내`. The current `ko = "래"` matches DPRK (`ko_kp = "래"` ✓) but contradicts the explicit SK Busan/Zainichi cells. Either `ko` should be `내` (SK standard) or the explanatory rationale should be documented; current state is inconsistent across the SK siblings.

## 3. Korean (`ko_kp`) — `立` correctly retains initial-ㄹ but check `五/六/龍` cluster
DPRK retains initial liquids: `龍 ko_kp = 룡 ✓`, `六 ko_kp = 륙 ✓`, `立 ko_kp = 립 ✓`. Pattern is consistent. No bug — recording as a verified-positive checkpoint so future drift catches the eye.

## 4. Korean Hun (`ko_hun`) — `央` missing native hun
`央 ko_hun` is absent while all other category-37 (`位置`) chars carry a Korean hun (`上=위`, `下=아래`, `中:1=가운데`, etc.). Expected value: `가운데` (same as 中:1) or perhaps `한복판`. Should be filled in or explicitly em-dashed for parity.

## 5. Middle Korean (`ko_mid`) — `三` and `龍` missing tone marker
Most CJK monosyllables in `ko_mid` carry an explicit tone-dot prefix (`·` 거성, `:` 상성, none = 평성). The choice for these particular chars:
- `三 ko_mid = "삼"` (no tone mark) — Hunmong Jahoe records 三 as 평성, so unmarked is actually correct. Verified-positive.
- `龍 ko_mid = "룡"` (no tone mark) — Hunmong Jahoe lists 龍 as 평성 룡; unmarked is fine.
- `天 ko_mid = "텬"`, `頭 ko_mid = "두"`, `中:1 ko_mid = "듕"`, `南 ko_mid = "남"`, `東 ko_mid = "동"`, `西 ko_mid = "셔"`, `心 ko_mid = "심"`, `聞 ko_mid = "문"`, `羊 ko_mid = "양"`, `貓 ko_mid = "묘"`, `山 ko_mid = "산"`, `人 ko_mid = "ᅀᅵᆫ"` — all unmarked, all attested as 평성. Pattern internally consistent.

No bug — recording for traceability since reviewer #63's focus included MK chuhanmun verification.

## 6. Middle Korean (`ko_mid`) — `央` uses ᅙ-initial (`ᅙᅣᆼ`)
`央 ko_mid = "ᅙᅣᆼ"` (jamo U+1159 ㆆ + U+1163 ㅑ + U+11BC ㅇ). The 여린히읗 (ㆆ) initial here represents the MC glottal-stop onset of 央 (影母 ʔ-). Modern Korean has 앙 (ㅇ-initial = null). The MK form with ㆆ is correct per *Dongguk Jeongun* and *Hunmin Jeongeum* spelling, which preserved the ʔ-母 distinction. Verified-positive (a non-obvious cell that is right).

## 7. Middle Korean (`ko_mid`) — `行:1` and `行:2` use ssang-hieuh (ᅘ)
`行:1 ko_mid = "ᅘᆡᆼ"` and `行:2 ko_mid = "ᅘᅡᆼ"` use U+1158 ssanghieuh. Historical MK Sino-Korean for 行 (匣母 ɣ-) was a voiced fricative often spelled with ᅘ in 동국정운 reformed orthography. Plausible; the reformed-spelling convention is in use. Verified-positive.

## 8. Middle Korean (`ko_mid`) — `肉` jungseong `ᆎ` (U+118E)
`肉 ko_mid = "·ᅀᆎᆨ"` uses U+1140 ᅀ + U+118E ᆎ + U+11A8 ᆨ. U+118E is HANGUL JUNGSEONG YO-YA. Hunmong Jahoe attestation for 肉 in Middle Korean is closer to `ᅀᆔᆨ` (U+1194 jungseong YU-I) ~ `ᅀᆑᆨ` (U+1191). U+118E (yo-ya) is unusual for a Sino-Korean reading of 肉 — please verify against a primary MK source (e.g., 訓蒙字會, 千字文). Possible typo: U+118E ᆎ vs U+1194 ᆔ.

## 9. Middle Korean (`ko_mid`) — `血` jungseong `ᆑ` (U+1191)
`血 ko_mid = "·ᄒᆑᇙ"` uses U+1191 ᆑ HANGUL JUNGSEONG YE-O. Hunmong Jahoe records 血 as `·혈` (modern-style 혈). The ᆑ rendering is documented in some 18th-c. sources but unusual for the canonical MK list. Worth a primary-source check; if 訓蒙字會 has 혈, the current value is over-archaized.

## 10. Japanese kun (`ja_kun`) — missing where surface has a kun reading
Two chars have `surface.ja_kun` populated but no `native.ja_kun`:
- `中:2 surface.ja_kun = "ataru"` → `native.ja_kun` missing. Expected: `あたる`.
- `行:2 surface.ja_kun = "okonau"` → `native.ja_kun` missing. Expected: `おこなう`.

This is a coverage gap, not a typo. Surface/native mismatch means the kana cell will show empty in the compare grid for these dual-reading splits.

## 11. Japanese (`ja_ojp`) — `貓` missing Old Japanese reading
`貓 ja_ojp` is absent while every other animal char carries OJP. Surface/native parity check fails. Old Japanese onyomi was probably `ベウ` or `メウ` (which yielded modern ビョウ). Recommend filling.

## 12. Japanese (`ja_okn`, `ja_thk`) — `海`/`来` use chōonpu (ー) where katakana convention is suspicious
- `海 ja_okn = "キー"` (ki + chōonpu) — Okinawan Sino-Japanese reading. Chōonpu is fine for modern katakana, but for a "native script" cell representing a historical/dialectal onyomi, a more idiomatic spelling might be `キイ`. Cross-check with `ja_thk = "カイ"` which uses the standard カイ. The OKN form being completely different (キー vs カイ) is plausible (Okinawan reflex of Middle Chinese 海 = /hai/ → /kii/ in Shuri), but verify chōonpu vs キイ convention.
- `来 ja_okn = "リー"` (vs `ja_thk = "ライ"`). Same comment.

## 13. Vietnamese Nôm (`vi_nom`) — 6 cells are empty strings (silent gaps)
The following cells exist but hold `""`:
- `央 vi_nom = ""`
- `東 vi_nom = ""`
- `西 vi_nom = ""`
- `南 vi_nom = ""`
- `北 vi_nom = ""`
- `行:2 vi_nom = ""`

This is the worst native-coverage gap in the file. Nom usually reuses the Han graph for Sino-Vietnamese vocabulary (東/西/南/北 are often just the Han with the Sino-Viet reading), so the cells could legitimately be `東/西/南/北/央`. Or proper Nom forms exist (`東` is sometimes `䰜`, `南` is often `𠄼`). Either way, empty-string is worse than em-dash — a blank cell looks like missing data rather than "same as Han" or "no Nom form".

## 14. Vietnamese Nôm (`vi_nom`) — `土` and `地` share `𡐙` (đất)
- `土 vi_nom = "𡐙"`
- `地 vi_nom = "𡐙"`

Both map to 𡐙 = đất ("earth/land"). Semantically 𡐙 fits 地 (đất = land/ground) more than 土 (which is soil/dirt and is conventionally written 土 itself in Nom, or 圡). The duplication suggests one of them is wrong: probably `土 vi_nom` should be `土` (Han reuse for Sino-Viet "thổ") or a Nom-specific graph for đất/bùn, and only `地` should keep 𡐙.

## 15. Vietnamese Nôm (`vi_nom`) — `行:1` and `去` share `𠫾` (đi)
- `行:1 vi_nom = "𠫾"`
- `去 vi_nom = "𠫾"`

Both map to 𠫾 (đi, "to go"). This is semantically defensible (both mean "go" in Vietnamese), but for a one-Han-one-Nom mapping, 行:1 is sometimes written `𠫾` only when the verb sense is intended, and the Sino-Vietnamese "hành" sense usually reuses 行 itself. Worth a note acknowledging the deliberate semantic overlap, or differentiating them.

## 16. Vietnamese (`vi_c`) — never differs from `vi`
`vi_c` (Central Vietnamese) is byte-identical to `vi` for all 61 chars. `vi_s` legitimately differs on `一` (nhứt) and `日` (nhựt). If Central truly doesn't have distinct Sino-Viet readings, this is fine; but the surface tier also shows zero `vi`/`vi_c` divergence, so the column carries no information. Either populate Central variants (e.g., 中 might be "trung" with central tonal coloring) or document this as expected.

## 17. Cantonese (`yue_*`) — only `来` populated, and `yue_hk`/`yue_mo` missing the colloquial 嚟
`yue_dg / yue_gz / yue_nn / yue_zs = 嚟` for 来, but `yue_ts = 來` (Taishanese keeps the Han form), and crucially `yue_hk` and `yue_mo` have no `native` entry at all for 来. HK/Macau Cantonese definitively uses 嚟 for the colloquial verb (lai/lei4). The `yue_hk` and `yue_mo` cells should be `嚟` too. Also, no other char (去/食/飲/見/聞/坐/立/坐) has a `native.yue_*` cell at all, even though Cantonese has well-known vernacular substitutions (e.g., 食 stays 食 but 喝→飲, 看→睇 etc.). Coverage is sparse and inconsistent.

## 18. Khitan small script (`zkt`) — only 3 chars populated (1/61, 月/61, 馬/61)
- `一 zkt = "𘬺"` (U+18B3A) — single graph, plausible for "one" (Khitan *em-).
- `月 zkt = "𘭖𘭚𘭯"` (U+18B56 U+18B5A U+18B6F) — 3-graph cluster. Khitan "moon/month" (sair) is normally a 2-graph cluster; 3 is high. Verify against Kane (2009) / Wu & Janhunen Khitan small-script tables.
- `馬 zkt = "𘭤𘭞"` (U+18B64 U+18B5E) — 2-graph cluster for "morin"-like Khitan word. Plausible.

All other 58 chars are em-dash. Since Khitan small script is partially decoded and many of these basic-vocab words (一二三四五六七八九十/日/天/地/水/火) are *known* in Khitan epigraphy, the coverage is far below what the field supports. This is a content gap, not a script error. Codepoints used are all in U+18B00–U+18CFF (Khitan Small Script block) ✓.

## 19. Jurchen (`juc`) — 61/61 em-dash; cell is decorative-only
Every `juc` cell is `"—"`. The Jurchen script is partially decoded; Jin-dynasty epigraphy and the Jurchen-Chinese vocabulary (女真譯語) attest forms for 一/二/三 (emu/juwe/ilan, same as Manchu — they share substrate) and most basic-vocab items. So 100% em-dash understates available data. Reviewer #63 focus item #7 confirmed: no populated cells exist. Recommend either (a) populate from Jin Qixi & Jurchen Reader, or (b) drop the column from the schema if the dataset will never carry data.

## 20. Khitan small / Tangut codepoint sanity ✓
- All `txg` (Tangut) cells fall within U+17000–U+187FF (Tangut block + Tangut Components + Tangut Supplement). 61/61 valid. Verified-positive — no off-block characters.
- All `zkt` populated cells are within U+18B00–U+18CFF (Khitan Small Script). 3/3 valid. Verified-positive.
- All `mnc`/`sjo` cells fall within U+1800–U+18AF (Mongolian + Manchu Ali Gali). 61/61 each, valid.

## 21. Sibe (`sjo`) — 60/61 identical to Manchu, except `一`
`一 mnc = ᡝᠮᡠ` (U+185D Manchu E + mu) but `一 sjo = ᠡᠮᡠ` (U+1821 Mongolian E + mu). Sibe orthography conventionally uses Mongolian-block letters (since Sibe is written in a Mongolian-script-derived orthography), while Manchu uses Manchu-block letters. The U+1821 Mongolian-E spelling for `一` in `sjo` is therefore correct.

But the other 60 `sjo` cells are byte-identical to `mnc`, meaning they use Manchu-block letters (e.g., ᡨ U+1868 not the Mongolian variant). Either (a) `sjo` should systematically remap all initials/medials to Mongolian-block codepoints, or (b) the `一` correction should be reverted to keep the policy uniform ("sjo = mnc for this dataset"). Currently inconsistent.

## 22. Phags-pa (`zh_phagspa`) — missing codas on stop-finals
Several Middle-Chinese stop-final (入聲) entries lack the expected final consonant:
- `八 zh_phagspa = "ꡌ"` (just p) — MC *pat / *pɛt, should end in -t (ꡈ U+A848). Missing coda.
- `立 zh_phagspa = "ꡙꡞ"` (li) — MC *lip, should end in -p (ꡌ U+A84C). Missing coda.
- `食 zh_phagspa = "ꡔꡞ"` (zi) — MC *zhik, should end in -k (ꡀ U+A840 / ꡂ U+A842 / final marker). Missing coda.
- `一 zh_phagspa = "ꡗꡞ"` — MC *ʔit, no final -t. (But the `juc/mnc/zkt` analog shows the same simplification — Phags-pa convention may collapse short stop codas in some Yuan-period orthography. Worth double-checking against Junast's *八思巴字研究*.)
- `日 zh_phagspa = "ꡔꡞ"` — MC *ɲit, no final -t. Same comment.

Contrast: `三 zh_phagspa = "ꡛꡋ"` ends in -n (ꡋ), but MC 三 = *sam ends in -m. Should be `ꡛꡏ` (ꡏ U+A84F final-m), not `ꡛꡋ` final-n. Likely a typo — m/n confusion is the single most common Phags-pa transcription error.

## 23. Phags-pa (`zh_phagspa`) — `南` correct, contrast with #22
`南 zh_phagspa = "ꡋꡏ"` (n+m) for MC *nam — correctly ends in -m. So the codebase *does* distinguish ꡏ from ꡋ; the `三` entry in #22 looks like a one-off typo, not a systematic policy.

## 24. Phags-pa (`zh_phagspa`) — 中:1 and 中:2 identical
Both = `ꡄꡦꡃ`. Phags-pa doesn't mark tone, so the level-tone (中) and departing-tone (仲) homograph are indeed written the same. Verified-positive — no action needed but worth recording since reviewer focus included disambiguation of split senses.

## 25. Tibetan-Sino (`bo_sino`) — sparse coverage (7/61)
Only `山, 海, 人, 上, 中:1, 西, 北` carry Sino-Tibetan transcriptions. The convention (e.g., `山 = ཧྲན་`, `海 = ཧའེ་`, `人 = རེན་`) appears to be Lhasa-Tibetan transliterations of Mandarin readings (shan, hai, ren), each terminated with a tsheg `་`. The character set is consistent and inside the Tibetan block U+0F00–U+0FFF. 54/61 chars carry no `bo_sino` cell at all — coverage gap; either populate the full set with Lhasa transliterations of the standard pinyin, or document the deliberate subset (e.g., these are the chars that appear in widely-known Sino-Tibetan placename/loan corpora).

---

**Path:** `/home/jounlai/langmap/hanmap_reviews/63_open.md`
**Findings:** 25


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 16
- **policy/skip**: 9
- **headline**: vi_nom 央/東/西/南/北/行:2 empty→glyph + 土/去 differentiate ×8, zh_phagspa 三 m/n typo + 8/立/食 stop codas ×4, dng 三/七 Cyrillic (#62 overlap), ko_mid 肉 jungseong U+118E→U+1194, ko 来 래→내
- **JSON**: /tmp/hm_edits_63.json
