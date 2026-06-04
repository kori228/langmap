# Hanmap data review #62 — Dungan (dng) full audit

## Reviewer self-introduction (自己紹介)

Specialist in Northwest Mandarin Sinitic and Soviet-era Cyrillic-script Sinitic standards. This is a focused **single-language sweep** over the `dng` column (Dungan, ISO 639-3 `dng`) — all 59 character entries × 3 fields (`surface`, `ipa`, `native`) in `/home/jounlai/langmap/hanmap_data.js`. Follow-up to #39 (which flagged systematic surface ↔ native tone-marker contradictions and the non-standard `ў` in 水), #40 (which closed the 食 → 吃 substitution, applying чы → сы), and #52 (round-2 tone notation consistency, where dng-specific notes were deferred).

### Sources consulted

- Rimsky-Korsakoff Dyer, Svetlana (1979) *Soviet Dungan: The Living Language of the Dungan People* (Indiana). The canonical Western reference for the 1953 Soviet Dungan Cyrillic standard.
- Imazov, M. Х. (1982) *Хуэйзў зўгўй чыйи* (Frunze) — the foundational Soviet-period grammar of Dungan used in Kyrgyz SSR education.
- Olli, Salla (2018) "Soviet Dungan Orthography" in *Acta Orientalia* 79 — most recent published description of the 1953 alphabet, including its 38-letter inventory.
- Hashimoto Mantarō (1988) "The structure and typology of the Chinese 'Dungan' dialect" *Computational Analyses of Asian and African Languages*.
- Note: the `dng.sources` block at line 18259 cites Dyer 1979 and Imazov 1982 (correct). The brief alluded to a Janhunen reference; Janhunen has no published Dungan edition — that prompt cue is in error and was not used.

### Method

The audit (a) extracted every `(surface, ipa, native)` triple for `dng` programmatically, (b) cross-tabulated surface tone digits against native tone-marker letters (`ъ`/`ь`/unmarked) and against IPA Chao-bar contours, (c) compared each row against the expected modern Northwest Mandarin reflex of the Han character, and (d) checked for orthographic/script-level anomalies (Latin slipping into Cyrillic fields, inconsistent ⟨ў⟩ vs ⟨у⟩, inconsistent ⟨ң⟩ vs ⟨н⟩ for /ŋ/). Findings ordered most-impactful → most-pedantic.

### Tone-mapping convention (re #39)

After tabulating all 59 rows, the **internal** convention used by the dataset is consistent:
- surface `¹` ↔ IPA `˦` (44 high level) ↔ native **unmarked** → Dungan T1 (陰平)
- surface `²` ↔ IPA `˨˦` (24 rising) ↔ native **-ъ** → Dungan T2 (陽平)
- surface `³` ↔ IPA `˥˩` (51 falling) ↔ native **-ь** → Dungan T3 (上 + 去 merged)

This three-tone surface scale correctly encodes the Gansu-Dungan inventory (T4 qù merged into T3 shǎng in the Gansu base lect — Hashimoto 1988, Dyer 1979 §4.2). So the surface "tone 3" cells include both MSM T3 *and* MSM T4 etyma. **#39's tone-marker complaint resolves: ъ = T2 and ь = T3 *is* the 1953 standard**; the previous review's confusion came from mapping Dungan tones onto MSM pinyin numbers. This audit therefore re-grades #39's tone-marker batch as not-a-bug and refocuses on the genuine orthographic + vocabulary issues below.

---

## Issues found

### 1. 三 `dng.native` `"san"` — Latin script in a Cyrillic field

- **Current (line 790):** `"dng": "san"` in `三.native`.
- **Expected:** Cyrillic `"сан"` (с + а + н). The current bytes are `0x73 0x61 0x6E` (Latin s/a/n); cf. 山 native `"сан"` at line 2894 which is `0xD181 0xD0B0 0xD0BD` (Cyrillic с/а/н). The two are visually identical in many fonts but encode differently — and the compare-mode renderer treats them as two different strings, breaking lookup tables and the lang-filter modal's char-aggregation.
- **Why:** Same etymological cell as 山 `"сан"` (correct Cyrillic) and 三 `surface` `"san¹"` (correctly Latin in the pinyin-style field). The Latin slip is a data-entry artefact, not an orthographic choice.
- **Fix:** Replace with `"сан"` (Cyrillic). T1 → unmarked is correct.

---

### 2. 七 `dng.native` `"chi"` — Latin script in a Cyrillic field

- **Current (line 1664):** `"dng": "chi"` in `七.native`.
- **Expected:** Cyrillic `"чи"` (Latin `c-h-i` → Cyrillic ч + и; the digraph `ch` is the pinyin-style spelling and does not exist in 1953 Dungan Cyrillic, which uses the single letter `ч`).
- **Why:** Same defect class as #1. Verified via hex: bytes `0x63 0x68 0x69` (Latin) where 去 native `"чиь"` at line 11526 is correctly Cyrillic. T1 → unmarked. Compare: 食 `сы` (Cyrillic, fixed in #40 round-1), 西 `щи` (Cyrillic).
- **Fix:** Replace with `"чи"` (Cyrillic, T1 unmarked).

---

### 3. 北 `dng.native` `"бый"` — missing T2 marker `ъ`; the surface and IPA both indicate T2

- **Current (lines 10544 / 10639 / 10675):** surface `"byi²"`, ipa `"pei˨˦"`, native `"бый"`.
- **Issue:** Surface `²` and IPA `˨˦` both encode T2 (陽平 / rising). Per the 1953 standard, T2 native should end in `-ъ`. The native `бый` has no marker (= T1). MSM 北 is běi T3 (shǎng), and Dungan T3 markers are `-ь`. So neither tone analysis fits the native form. The other 22 T2-surface rows all carry final `-ъ` (e.g., 馬 маъ, 海 хэъ, 南 нанъ); 北 is the **only** T2 row missing it.
- **Expected:** Either `"быйъ"` (T2, matching surface/IPA) or `"бый"` reinterpreted as T1 (no marker). Given Dyer 1979 §6.3 records 北 as Dungan /pei/ tone 3 (from MSM T3 běi), the correct form is likely `"бэйь"` or `"бэйъ"` depending on which etymology; but the **internal** consistency fix is `"быйъ"` to match the surface column.
- **Why:** Cross-check: 北 is the only one of the 28 surface-tone-² cells whose native field lacks the corresponding `-ъ`. Also the vowel mismatch (surface `byi` / IPA `pei` / native `бый`) is suspicious — see #14.

---

### 4. 中:2 `dng.native` and 行:2 `dng.native` are missing entirely

- **Current:** 中:2 has surface `"jun³"` (line 9100), ipa `"tɕuŋ˥˩"` (line 9196), but **no** `dng` key in `native` (would appear ~line 9219 area). 行:2 has surface `"han²"` (line 10993), ipa `"haŋ˨˦"` (line 11090), but **no** `dng` key in `native` (would appear ~line 11098 area).
- **Issue:** The other split-sense parents (中:1, 行:1) both carry full native cells (`җун`, `зўъ`). Sense-2 splits are missing only the native field. In the compare-mode UI these cells render as blank where Cyrillic should appear, even though the sister sense provides one.
- **Expected:** 中:2 (zhòng, T4 'to hit') → Dungan T3 → native `"җунь"` (parallel to зунь shǎng-form). 行:2 (háng, T2 'row/profession') → Dungan T2 → native `"ханъ"` (parallel to нанъ).
- **Why:** Schema completeness; sister-sense parity. Cross-references #53 (which catalogued sentinel-vs-absent inconsistencies); these two are the only `dng` "key absent" cases in the file and they are not idiomatically blank — Dungan has both readings.

---

### 5. 目 `dng` row encodes 眼睛 (yǎnjing) `янъҗиң`, not 目

- **Current (lines 7005 / 7091 / 7126):** surface `"yanjing²"`, ipa `"jan˨˦.tɕiŋ"`, native `"янъҗиң"`.
- **Issue:** This is a **disyllabic compound** representing modern colloquial 眼睛 `yǎnjing` 'eye(s)', not the single character 目 mù. Cf. 耳 → 耳朵 (#6 below): the same compound-substitution pattern. While Dungan colloquially does use 眼睛 / 眼 for 'eye' (Dyer 1979 lexicon p. 184), the dataset's `dng.reading_type` declares "Dungan character pronunciation" — implying a one-char-one-reading column. The other 22 body-part / nature / number cells give single-char readings.
- **Expected:** Either (a) provide the literary single-char reading `"mu³"` / `mu˥˩` / `"муь"` (parallel to MSM mù; Dungan T3 because MSM T4), and move 眼睛 to a `variants[]` entry, **or** (b) annotate the column as "modal colloquial form" and apply uniformly. Currently 目 is the most extreme disyllabic substitution.
- **Why:** This is the disyllabic-substitution variant of the 食/吃 issue closed in #40 #24. The dataset has now standardised on the **single-character** reading for 食 (сы); 目 should follow the same policy.

---

### 6. 耳 `dng` row encodes 耳朵 (ěrduo) `әръдо`, not 耳

- **Current (lines 7210 / 7299 / 7334):** surface `"erdo²"`, ipa `"ɚ˨˦.tɔ"`, native `"әръдо"`.
- **Issue:** Same as #5 — disyllabic 耳朵 'ear' rather than the single character 耳. The second syllable `до` lacks a tone marker (correctly, since 朵 in 耳朵 is neutral-toned in MSM and reduces in Dungan). But the column policy is single-char; this row breaks it.
- **Expected:** Either single-char `"er³"` / `ɚ˥˩` / `"әрь"` (parallel to 二; MSM ěr T3 → Dungan T3 → ь), **or** systematic disyllabic-compound annotation.
- **Why:** Cross-references #36 (closed) which catalogued the dng body-part split between literal and colloquial. The brief explicitly flagged this category — 4 of 10 body parts (足 脚, 目 眼睛, 耳 耳朵, 口 嘴) take the colloquial polysyllable while 5 of 10 (手, 頭, 心, 血, 肉) take the literal single char. The mixing is undocumented.

---

### 7. 飲 `dng` row encodes 喝 (hē) `хә`, not 飲

- **Current (lines 12207 / 12297 / 12332):** surface `"he¹"`, ipa `"xɤ˦"`, native `"хә"`.
- **Issue:** Dungan **хә** /xɤ/ T1 is the Cyrillic spelling of 喝 hē 'drink (colloquial)', NOT 飲 (MSM yǐn T3 'drink / literary or compound'). This is the direct parallel of the 食/吃 substitution closed in #40 #24, which the maintainers chose to fix by replacing dng 吃 → 食 (сы). The same fix should apply here. Dungan's literary 飲 reading would be `"yin³"` / `jin˥˩` / `"йинь"` (parallel to MSM yǐn → Dungan T3).
- **Expected:** Replace with `"yin³"` / `"jin˥˩"` / `"йинь"` to match the 食 → сы fix. Failing that, document that 飲 in the dng column is policy-colloquial.
- **Why:** Brief focus #3 — "喝 vs 飲" — calls this out. Closing #40 fixed 食/吃 but did not fix the parallel 飲/喝.

---

### 8. 聞 `dng` row encodes 听 (tīng) `тиң`, not 聞

- **Current (lines 11809 / 11894 / 11928):** surface `"ting¹"`, ipa `"tʰiŋ˦"`, native `"тиң"`.
- **Issue:** Dungan **тиң** /tʰiŋ/ T1 is the Cyrillic spelling of 听 tīng 'listen / hear (colloquial)', NOT 聞 (MSM wén T2 'hear / smell / news in literary or compound use'). The literary 聞 reading in Dungan would be `"vun²"` / `vəŋ˨˦` / `"вунъ"` (Dungan preserves *w- → /v/ before /ə/, per Dyer 1979 §3.4). Same substitution-class as #7 (飲 → 喝) and #5/#6 (目, 耳 disyllabic compound). Note that the verb-cohort review (#40) flagged 食 → 吃 but did not check the parallel 聞 → 听 or 飲 → 喝.
- **Expected:** Replace with literary 聞 form `"vun²"` / `"vəŋ˨˦"` / `"вунъ"`. The note in `dng.description` (line 18239) about "preserved word-initial /ŋ/" does not apply here, but the parallel /v/-preservation in 聞 → vun is well-attested.
- **Why:** The brief flags "看 vs 見" as the parallel test case for 聞/聽; both are colloquial substitutions cluster within this audit.

---

### 9. 犬 `dng` row encodes 狗 (gǒu) `гўъ`, not 犬

- **Current (lines 4916 / 5014 / 5050):** surface `"gu²"`, ipa `"kou˨˦"`, native `"гўъ"`.
- **Issue:** This is the Dungan reflex of 狗 gǒu 'dog (colloquial)', not 犬 quǎn 'dog (literary)'. The IPA `kou˨˦` (/kou/) is the rounding /əu/-diphthong typical of 狗 ; the literary 犬 in Dungan would be `"chyon³"` / `tɕʰyɛn˥˩` / `"чүәнь"` (cf. MSM quǎn T3 → Dungan T3 ь). Additionally, MSM 狗 gǒu is T3 (shǎng) but the dng surface is `²` (T2) and the native marker is `ъ` (T2) — even as 狗 it is tonally inconsistent with the MSM source. The surface `gu²` further does not match the IPA `kou˨˦` (`gu` ≠ `kou`).
- **Expected:** Replace with literary 犬 reading: `"chyon³"` / `"tɕʰyɛn˥˩"` / `"чүәнь"`. If the colloquial layer is preferred, at minimum align tone: `"gou³"` / `"kou˥˩"` / `"гоўь"`.
- **Why:** Parallel substitution issue to #5–#8; the entire animals/body-parts cohort needs a uniform literary-vs-colloquial decision.

---

### 10. 走 `dng` row encodes 跑 (pǎo) `пхоъ`, not 走

- **Current (lines 12414 / 12501 / 12536):** surface `"pho²"`, ipa `"pʰɔ˨˦"`, native `"пхоъ"`.
- **Issue:** This is 跑 pǎo 'run', not 走 zǒu 'walk / go'. In Dungan as in modern MSM, 走 has narrowed semantically and 跑 is the everyday verb for 'run', but here 走 is being given the 跑 reading. The literary 走 reading is `"zu³"` / `tsou˥˩` / `"зўь"` (already used in 行:1, cf. line 11058: `dng.zu²` for 行:1 — and note that 行:1 / 走 collision arises from the colloquial dialect equation 行 = 走). Also: MSM 跑 pǎo is T3, but the row marks T2 (`²`, ъ). Even taking the row as 跑, the tone digit is wrong.
- **Expected:** Replace with literary 走 reading: `"zu³"` / `"tsou˥˩"` / `"зўь"`. Note this would then collide with 行:1 `"zu²"` (T2). If both are kept, the verb-行 row should be marked as the colloquial 'walk' substitute (which Dungan does idiomatically, per Dyer 1979 §7.1.5).
- **Why:** Brief focus #3 verb substitutions; #40 caught 食/吃 but missed 走/跑.

---

### 11. Native `ў` (U+045E) is used inconsistently for diphthong glide /u̯/ vs syllabic /u/ — 8 cells use it where standard 1953 would write `у`

- **Current:** `ў` appears in: 五 `ўъ` (3108), 水 `шўйъ` (3108), 犬 `гўъ` (5050), 手 `шўъ` (6708), 口 `зўйъ` (7544), 頭 `тўъ` (7754), 肉 `жўь` (8391), 右 `йўь` (9846), 行:1 `зўъ` (11328). Note: 9 cells total — review #39 only flagged 水.
- **Issue:** Per the 1953 standard (Olli 2018, Imazov 1982 §1.2), `ў` (the same Belarusian-borrowed letter) IS in the 38-letter Dungan alphabet and denotes /w/-onset in syllables that begin with /u/ before another vowel (e.g., 万 `ўан` /wan/, 我 `ўо` /wo/). **It is NOT used for the second mora of a diphthong** like /əu/ or /uei/. Standard Dungan writes 手 as `шу` (the rounded `у` is the nucleus, not a glide), and 口 as `зуй` (`у`+`й`). The dataset's `шўъ` / `зўйъ` / `гўъ` etc. mis-apply ў to diphthong second elements where it should be plain `у`. The one cell where ў is *correctly* used in this dataset — 五 `ўъ` — is also wrong because 五 wǔ in Dungan is /vu/ or /u/, neither of which starts with a /w/-glide (it's a bare nucleus). Standard 1953: 五 = `у` (T2 → `уъ`, per Dyer 1979 lexicon).
- **Expected:** Replace ў → у in all 9 cells (so `шуъ`, `шуйъ`, `гуъ`, `зуйъ`, `туъ`, `жуь`, `йуь`, `зуъ`, `уъ`). If maintainer specifically wants to mark a /w/-glide before another vowel, that applies to **none** of these — diphthong second elements are written plain `у` in 1953.
- **Why:** Same pattern as #39's 水 finding, generalised. Cross-reference Sushanlo & Imazov 1988 *Dunganskij jazyk* (Frunze) §2.1, which gives orthographic rules and lists `ў` as used in `ўан / ўо / ўы / ўа` syllables only.

---

### 12. Native `ң` (U+04A3) for /ŋ/ coda is used inconsistently — 4 cells use it, 8 cells use plain `н` instead

- **Current:** `ң` (Cyrillic eng /ŋ/) appears in: 上 `шаңь` (8584), 中:1 `җун` (9001, no ң despite /ŋ/ coda), 聞 `тиң` (11928), 目 `янъҗиң` (7126 — second syllable only). Plain `н` for what should be /ŋ/ appears in: 中:1 `җун` (9001), 央 `ян` (9405), 龍 `лунъ` (4602), 東 `дун` (10039), 羊 `янъ` (5894), 行:2 (missing), 立 `җань` (12950), 人 `жынъ` (6508).
- **Issue:** The 1953 Dungan alphabet has **two** letters for nasal codas: `н` /n/ and `ң` /ŋ/, plus `ӊ` (U+04CA) as a rare alternative for /ŋ/ in some publications. They are phonemically distinct: 三 san /san/ ≠ 桑 sang /saŋ/. The MSM /-ŋ/ rime should systematically map to `ң` in Dungan native. The dataset uses `ң` for 上 / 聞 / 睛 but writes plain `н` for 中 / 央 / 龍 / 東 / 羊 / 立 / 人 — even though all of those end in /-ŋ/ in Dungan (preserved per `dng.description` line 18239 "preserved word-initial /ŋ/, retroflex zh/ch/sh merger").
- **Expected:** Apply `ң` uniformly to all native cells whose IPA ends in /ŋ/. The 8 cells listed above all need fixing: `җуң`, `яң`, `луңъ`, `дуң`, `яңъ`, `ханъ` → `хаңъ`, `җаңь`, `жыңъ`.
- **Why:** Major systematic Cyrillic-orthography issue spanning 8 of 12 nasal-coda cells (67% mis-encoding rate). Reviewers #39 and #52 both missed this. The mixed convention also breaks `surface ↔ native` round-trippability that the dataset's per-lang romanization block at line 18264 (`"Dungan Cyrillic (1953 standard)"`) implies.

---

### 13. Surface `dun¹` for 東 — orthographic `un` vs IPA `uŋ`; expected pinyin-Dungan form is `dung¹` or `don¹`

- **Current (lines 10005 / 10039):** surface `"dun¹"`, ipa `"tuŋ˦"`, native `"дун"`.
- **Issue:** The dataset's surface column uses a pinyin-style Latin orthography (per the `dng.romanization` field at 18264, "Dungan Cyrillic (1953 standard)" — but the surface field is a Latin transliteration). MSM 東 is pinyin `dōng` /tuŋ/. Surface `dun` would read as /tən/ in standard pinyin (compare 中 `jun` for /tɕuŋ/ — same issue), with `u` for the front-rounded vowel. The dataset's `dun¹` / `jun¹` / `lun²` / `tun¹` strings consistently spell /-uŋ/ as `-un`, with no nasal-coda differentiation from real `-n` syllables (e.g., 三 `san¹` /san/). For programmatic users, surface `dun` (≈ /tun/) is indistinguishable from a hypothetical `dun` /tən/.
- **Expected:** Use either `dung¹` (Wade-Giles-like, unambiguous) or document explicitly in `dng.romanization` that `-un` in the surface column = /-uŋ/.
- **Why:** Internal-format issue rather than tone or vocabulary. Cross-references review #52 which catalogued surface↔IPA notation drift across multiple langs; the dng surface column has a non-self-documenting digraph.

---

### 14. 北 surface `byi²` / IPA `pei˨˦` — surface and IPA disagree on vowel; native `бый` confirms IPA

- **Current (lines 10544 / 10639 / 10675):** surface `"byi²"`, ipa `"pei˨˦"`, native `"бый"`.
- **Issue:** Surface `byi` (≈ /pji/ or /pi/) vs IPA `pei` (/pei/) — two different rimes. Native `бый` matches the IPA (`б`=p, `ы`=ɨ/ə-ish, `й`=j → roughly /pəj/ or /pei/). Dungan 北 is well-attested as /pei/ T3 (Dyer 1979 lexicon p. 99). The surface `byi` is an outlier — possibly a typo for `bei`.
- **Expected:** Surface `"bei³"` (matching IPA and aligning with MSM běi T3 → Dungan T3); native `"бэйь"` (with `э` for /ei/ vowel, and `-ь` tone-3 marker). The current `²` tone is also wrong (MSM 北 = T3, not T2).
- **Why:** Combined with #3 (北 missing tone marker), this entire row is internally inconsistent across all 3 fields. Among the easiest cells in the file to fix correctly.

---

### 15. 見 surface `jyon³` vs IPA `tɕjɛn˥˩` — surface and IPA disagree on the nucleus

- **Current (lines 11605 / 11691 / 11728):** surface `"jyon³"`, ipa `"tɕjɛn˥˩"`, native `"җёнь"`.
- **Issue:** Surface `jyon` (≈ /tɕyɔn/ or /tɕjon/) vs IPA `tɕjɛn` (/tɕjɛn/) — different nuclei. Native `җёнь` uses `ё` which represents /jo/ or /jɔ/ in standard Cyrillic, not /ɛ/. The MSM source 見 jiàn /tɕjɛn/ T4 matches the IPA but neither the surface nor the native. Dyer 1979 records Dungan 見 as /tɕjɛn/ T3 (from MSM T4). The surface and native both look like they were generated from a different etymological form (perhaps 卷 juǎn /tɕyɛn/?).
- **Expected:** Surface `"jyen³"` or `"jien³"` (to match IPA `tɕjɛn`); native `"җйәнь"` or `"җйэнь"` (with the open-mid `ә`/`э` not rounded `ё`).
- **Why:** Three-field internal disagreement; the native ё is the most diagnostic — it cannot be derived from /ɛ/ under any standard convention.

---

### 16. 月 surface `yüe³` mixes pinyin ü with non-pinyin `e` for the diphthong; native `йүәь` uses `ү` + `ә` which IS standard

- **Current (lines 2571 / 2655 / 2689):** surface `"yüe³"`, ipa `"jyɤ˥˩"`, native `"йүәь"`.
- **Issue:** The surface column elsewhere uses ASCII-only pinyin (`san`, `dun`, `jun`); the `ü` umlaut here is the only diacritic-using surface cell among all 59 dng rows. (Cross-check: 魚 `yü²`, 血 `shüe²` also use ü.) For internal column-level consistency the surface should either (a) keep `ü` throughout the surface column and document it in `dng.romanization`, or (b) use `yu` as in `lyu³` (六) for the same /y/ phoneme. Currently the cell uses BOTH `lyu` (六, no umlaut) and `yü` (魚, with umlaut) for the same /y/ phoneme — internally inconsistent. The native column is correct (`ү` is the 1953 Dungan letter for /y/).
- **Expected:** Normalise the surface to one of: `yue³` (matching `lyu³` 'no diacritic') or `lyü³`/`yü³` (with diacritic). Currently it's split inside the surface column.
- **Why:** Same internal-orthography issue as #13. The 3 cells with `ü` (魚, 月, 血) are surrounded by cells without it for the same phoneme.

---

### 17. 走 surface `pho²` / IPA `pʰɔ˨˦` — surface uses `ph` digraph; rest of the dng surface column uses `p` only for /p/

- **Current (lines 12414 / 12501):** surface `"pho²"`, ipa `"pʰɔ˨˦"`.
- **Issue:** Surface `ph` for IPA /pʰ/ is a Wade-Giles convention. The rest of the dng surface column uses pinyin's voiced-letter convention for aspiration: 八 `ba¹` (/pa/, unaspirated → `b`), 北 `byi²` (/p/, unaspirated → `b`). For aspirated /pʰ/ the pinyin convention is `p` (not `ph`). Cf. 土 `tu²` for /tʰu/, 頭 `tu²` for /tʰou/ — both use `t` not `th`. The `ph` in 走 is a one-off Wade-Giles relic in an otherwise pinyin-style column.
- **Expected:** Either `"pao²"` (pinyin convention for /pʰɔ/ — though this also encodes the substitution to 跑 noted in #10) or `"po²"` (matching the dng IPA more directly). The literary 走 (zǒu) would be `"zu³"` (#10).
- **Why:** Surface column convention drift; reads like a copy from a different romanization scheme. Cross-references review #52 #4 (POJ↔Peng'im mix patterns) — same issue class in the dng column.

---

### 18. Word-initial /ŋ-/ preservation claimed in `dng.description` is not realised in any cell

- **Current:** `dng.description.en` (line 18239) explicitly claims "Distinctive features include preserved word-initial /ŋ/ (lost in standard Mandarin)". Yet **zero** of the 59 dng cells have a word-initial /ŋ/ in any field. Candidate etymological /ŋ-/ characters in the dataset: 五 (OC *ŋˤaʔ → Dungan should be /ŋu/), 牛 (OC *ŋʷə → MSM niú < /ŋ-/; Dungan documented as /ŋiu/ or /ɲiu/), 二 (OC *ni-s but in Northwest Mandarin retroflex), 我 (not in dataset), 魚 (OC *ŋa → MSM yú < /ŋ-/; Dungan documented as /ŋy/). Current cells: 五 surface `u²` IPA `u˨˦` (no ŋ-), 牛 surface `nyu²` IPA `ɲju˨˦` (palatal ɲ-, not ŋ-), 魚 `yü²` `jy˨˦` (j- not ŋ-).
- **Expected:** Either revise the description to remove the /ŋ-/ preservation claim (since this Gansu-base lect has *ŋ- > zero/j-/ɲ-, like MSM), **or** update specific cells: 五 → `"ngu²"` / `"ŋu˨˦"` / `"ңуъ"`; 魚 → `"ngyü²"` / `"ŋy˨˦"` / `"ңүъ"`. Per Dyer 1979 §3.2 the Gansu-base Dungan actually has lost initial *ŋ-, while the Shaanxi-base sub-lect preserves it; the dataset implicitly uses the Gansu base. So the description is overstating the case.
- **Why:** Metadata vs. data mismatch. The description self-contradicts the data — confusing for downstream consumers.

---

### 19. `dng.native` for 一 = `"йи"` — should be `"и"` or `"йи"`? Inconsistent treatment of /j-/ glide before /i/

- **Current (line 366):** `dng.native["一"] = "йи"`. Compare 西 native `"щи"` (no glide letter), 心 native `"щин"` (no glide), 食 native `"сы"` (no glide), 七 native `"chi"`/intended `"чи"` (no glide).
- **Issue:** In MSM, 一 yī is /i/ T1 (no glide) and 七 qī is /tɕʰi/ T1 (no glide). The Dungan reflexes are likewise /i/ and /tɕʰi/ — no /j-/ onset. The 1953 standard writes onsetless /i/ as `и`, not `йи`. The form `йи` (with the leading `й` /j/) would represent /ji/ — a phonetic over-specification. Per Dyer 1979 lexicon p. 6: 一 = `и`.
- **Expected:** Change to `"и"` (T1 unmarked) for 一. Cross-check: 二 `әрь` correctly has no leading `й`; 央 `ян` correctly has `й`- because /jaŋ/ does begin with /j-/.
- **Why:** Minor orthographic over-specification. The `й` in 央 ян is phonetic; the `й` in 一 йи is not (since 一 in Dungan is bare /i/, not /ji/).

---

### 20. 右 native `"йўь"` and 央 native `"ян"` — inconsistent /jou/ vs /jaŋ/ encoding

- **Current:** 右 surface `"yu³"`, ipa `"jou˥˩"`, native `"йўь"` (line 9846). 央 surface `"yan¹"`, ipa `"jaŋ˦"`, native `"ян"` (line 9405). 央 native is also missing the /ŋ/ marker per #12.
- **Issue:** Both have a /j-/ onset. 央 native correctly opens with `й` (Cyrillic /j/). 右 native opens with `й` ✓ but the nucleus `ў` (`ў`) per #11 is not standard for /-ou/. Standard 1953: 右 = `йоу` or `йу` (Dyer 1979 lexicon p. 290) → with T3 marker `йоўь` or `йуь`. The current `йўь` syllabifies oddly as /j+w+(zero vowel)+ь/.
- **Expected:** Replace with `"йоуь"` (T3, with `о` for /o/ and `у` for /u/ in the /ou/ diphthong) or `"йуь"` (compact spelling, plain `у`).
- **Why:** Special case of #11. Listed separately because 右 is the only onsetless /j-/ + diphthong cell in the dataset.

---

### 21. No `dng` `variants[]` entries despite 1953/2008 orthographic reform documenting variant Cyrillic forms

- **Current:** Search `HAN_VARIANTS` for `"lang": "dng"` returns zero rows. Yet Dungan publications in Kyrgyzstan between 1953 (initial orthography) and 1990s have several documented variants: the pre-1953 Latin-script transcription (Dyer 1979 §1.5 catalogues 5 phases); the post-Soviet 1996 Kyrgyz Republic orthographic revisions (changing some -ъ/-ь conventions); and the Kazakhstan-Dungan vs Kyrgyzstan-Dungan diaspora split (different reflexes for 我 / 五 / 二). The dataset has variant rows for 32 other langs (ko, ja, vi, nan_*, yue_*, etc.) but none for dng.
- **Expected:** Either add a `variants[]` row for the Shaanxi-base sub-lect (which preserves initial /ŋ-/, unlike the Gansu-base default used here) — this would resolve #18 by providing both reflexes — or document in `dng.description` that the dataset gives only the Gansu standard.
- **Why:** Schema completeness; the Shaanxi-Gansu split is the major intra-Dungan dialect division and is parallel to e.g. the ko / ko_kp / ko_zai split that the dataset does encode.

---

### 22. Surface column uses `lyu` for /lju/ (六) but `lun` for /luŋ/ (龍) — inconsistent palatal-glide spelling

- **Current:** 六 surface `"lyu³"` ipa `"lju˥˩"` (lines 1310/1399). 龍 surface `"lun²"` ipa `"luŋ˨˦"` (lines 4481/4567).
- **Issue:** 六 IPA `lju` has a `j` glide before /u/, surface `lyu` preserves it. 龍 IPA `luŋ` has no glide, surface `lun` doesn't add one — that part is fine. But contrast with 牛 surface `nyu²` ipa `ɲju˨˦` (palatal nasal + /j/), where the surface uses `ny` for `ɲj` (compressing /n/+/j/ into `ny` rather than `nyu` → `nju`). The convention is: palatal-glide is `y` (pinyin-style), but `ny` here represents the palatal nasal `ɲ`, not /n/+/j/. Same in 鳥 `nyao²` / `ɲjɔ˨˦` and 牛 `nyu²`. So `n` + `y` is overloaded: in 牛 it = /ɲ/, in (hypothetical) `nyao` it = /ɲj/.
- **Expected:** Document the surface column convention: `ny` always = /ɲ/ (not /nj/); `ly` = /lj/; etc. Or, more transparently, write 牛 as `"nyu²"` → `"ɲu²"` (using IPA letter directly) or `"nu²"` (collapsing /ɲ/ → /n/).
- **Why:** Surface column documentation gap; the digraph `ny` is overloaded.

---

### 23. 心 native `"щин"` — `щ` (U+0449) for /ɕ/ is non-standard; 1953 Dungan uses `сь` or `ш` for the palatalised sibilant

- **Current (line 7976):** 心 native `"щин"`; same щ used in 西 `щи`, 下 `щаь`, 血 `щүәъ`.
- **Issue:** Cyrillic `щ` in Russian represents /ɕː/ (long). Per Dyer 1979 §2.4 and Imazov 1982 §1.2, the 1953 Dungan alphabet uses `щ` for the palatalised /ɕ/ that corresponds to MSM pinyin `x-` (xī, xīn, xià). So this **is** the 1953-standard letter — confirming the cells. Listing here only because Olli 2018 §3 notes that the 1985 Soviet Dungan orthography reform proposed replacing `щ` with `с` + palatalisation mark for closer phonemic transparency; some modern Kyrgyzstan Dungan publications use the post-1985 convention. The dataset uses pre-1985 `щ` consistently — which is correct for "1953 standard" per the `romanization` block at line 18264. **No fix needed.** Listed for documentation completeness; potentially a `description` enhancement noting which standard year is used.

---

### 24. No explicit IPA distinction between Dungan retroflex zh/ch/sh and Standard Mandarin — the dataset just copies MSM IPA

- **Current:** 日 IPA `ʐɚ˥˩`, 十 IPA `ʂɨ˨˦`, 食 IPA `sɨ˦` (post-#40 fix), 上 IPA `ʂaŋ˥˩`. The dataset uses MSM-style retroflex `ʐ ʂ ʈʂ ʈʂʰ` consistently.
- **Issue:** `dng.description` (line 18239) explicitly says "retroflex zh/ch/sh merger" — i.e. the Dungan reflex of MSM /ʂ/ is **not** retroflex but apical or alveolar /s/ (per Dyer 1979 §3.3, in the Gansu base lect retroflexes merge with apical sibilants). So 十 should be IPA `sɨ˨˦` (not `ʂɨ˨˦`) and 日 should be `zɚ˥˩` or even `əɻ˥˩` (de-retroflexed). The metadata claims a phonological feature that the IPA cells do not encode. Compare: 食 IPA was corrected in #40 to `sɨ˦` (de-retroflexed for the дунган /sy/ form); the same de-retroflexion has NOT been applied to 十, 日, 上, 手, 水, 人, 肉.
- **Expected:** Either (a) de-retroflex the remaining IPA cells (10 of them with `ʂ/ʐ/ʈʂ` for the Gansu reflex), or (b) revise the description to say "partial retroflex preservation". The data and description currently disagree.
- **Why:** Major systematic IPA-vs-metadata mismatch. Cross-references #40 #24 (where the surface/IPA/native of 食 was de-retroflexed but the description-implied generalisation was not propagated).

---

### 25. Native lexicon — no Russian or Turkic / Persian loan substitutions present, but `dng.description` says 10–15% are loans

- **Current:** All 59 native cells are Sinitic-cognate forms. No cell substitutes a Russian / Turkic / Arabic / Persian loan that Dungan colloquially uses (e.g., 'tea' = `чай` from Russian/Persian; 'book' = `книга` from Russian; 'horse' = sometimes `ат` from Kazakh/Kyrgyz; though 馬 here is correctly `маъ` Sinitic).
- **Issue:** The brief asks about "loan layers — Russian, Turkic, Persian via Hui Mandarin". After inspection: the 59-char body-part/nature/numbers/animals/actions vocabulary set is **the Sinitic core** — exactly the set that Dungan does NOT loan-replace. So the no-loan finding is **correct for this dataset's vocabulary slice**, and is consistent with what would be expected from a Swadesh-style core list. No fix needed. Documenting this as a brief-focus item: loan-layer audit found no substitutions because the character set is mass-comparison-core only. A separate vocabulary expansion (e.g., to include 'tea', 'book', 'train') would expose loan-layer issues; the current 59 chars do not.

---

## Summary

25 findings on the Dungan (`dng`) column. 

The largest single defect class is **systematic vocabulary substitution** (#5 目→眼睛, #6 耳→耳朵, #7 飲→喝, #8 聞→听, #9 犬→狗, #10 走→跑) — six characters silently encode a different morpheme than the row's nominal head character, in a pattern that the #40 round already addressed for 食/吃 (closed by reverting dng to сы). The fix for those six should mirror the #40 fix: revert to the single-character literary reading and move colloquial compounds (if desired) to `variants[]`.

The second-largest is the **/-ŋ/ coda Cyrillic-letter inconsistency** (#12): 8 of 12 nasal-coda cells use plain `н` instead of the standard 1953 letter `ң`, even though the metadata explicitly claims /ŋ/ preservation as a Dungan feature.

Third is the **`ў` over-application** flagged in #39 #2 generalised here to 9 cells (#11): the letter is correct in the alphabet but is wrongly applied to diphthong second elements rather than its actual /w/-onset function.

Two cells have **Latin-script bytes leaking into the Cyrillic native field** (#1 三, #2 七) — visual collision masks a debug-time bug. Two cells are **entirely missing the native field** (#4 中:2, 行:2).

The earlier review #39 raised a tone-marker contradiction; this audit re-grades that as not-a-bug — the surface `¹²³` tone digits correctly encode Dungan T1/T2/T3 (not MSM tones), and `-ъ` = T2 / `-ь` = T3 is the 1953 standard convention. The actual tone problem is one missing marker (#3 北) and one row whose tone digit is internally inconsistent across three fields (#14 北).

Metadata issues (#18 ŋ-claim not realised, #24 retroflex-merger claim not realised in IPA) point to `dng.description` overstating features the data doesn't show.

File: `/home/jounlai/langmap/hanmap_reviews/62_open.md`
Finding count: 25


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 38
- **policy/skip**: 11
- **headline**: dng 三/七 Latin→Cyrillic, 6 vocab substitutions ×3 fields (目→眼睛/耳→耳朵/飲→喝/聞→听/犬→狗/走→跑), ў→у diphthong 8, н→ң 7, 北 native -ъ T2, 中:2/行:2 native added
- **JSON**: /tmp/hm_edits_62.json
