# Hanmap data review #22 — US-heritage Mandarin & Cantonese (zh_us / yue_us)

## Reviewer self-introduction (自我介紹)

I'm **Karen Lai-Hoffman (黎家恩)**, a sociophonetician and second-generation ABC (華僑) — Cantonese (Toishan/Sze Yup background) and Mandarin heritage speaker raised in the San Gabriel Valley and the SF Chinatown orbit. My training is in heritage-language phonology and incomplete acquisition: **Polinsky 2018 (*Heritage Languages and Their Speakers*)** and **Montrul 2016 (*The Acquisition of Heritage Languages*)** for the tone-merger / reduced-inventory predictions; **Polinsky & Kagan 2007** for "baseline drift"; **Yang 2015** and **Wiener & Goss 2019** on heritage Mandarin tone production; **Chang, Yao, Haynes & Rhodes 2011 (JASA)** on heritage-Mandarin VOT/segment transfer from English; and for Cantonese-American "Chinatown" phonology **Wong & Hall-Lew 2014**, **Wong 2007 (*Two-faced Cantonese*)**, plus the standard 懶音 (lazy-sound) literature (**Bauer & Benedict 1997**; **To, McLeod & Cheung 2015**). I reviewed **only `zh_us` and `yue_us`** (the Yue dialect grid belongs to review #21).

**Reviewer perspective:** The dataset currently encodes the *teacher's citation target*, not what an ABC heritage speaker **produces**. A heritage form is not a random error — it is a **systematic, English-filtered, reduced realization** of the standard. My job is to convert these 60 cells from "textbook standard with a US label" into an internally consistent Americanized system: retroflex merger and English-r in Mandarin; ng-drop, n/l-merger, and coda-stop weakening in Cantonese; and **tone leveling** across both. Where a heritage realization genuinely coincides with the standard (火 fo, 馬 ma, 八 ba), I leave it.

**Coverage:** All 60 `HAN_LIST` characters (incl. 中:1/中:2, 行:1/行:2), both `surface` and `ipa`, for `zh_us` and `yue_us` only. Every "Current" value below was loaded verbatim from `HAN_DATA`.

**Notation conventions observed:**
- `zh_us` **surface** = Hanyu Pinyin + superscript-numeral tone; **ipa** = full standard-Mandarin IPA with retroflexes (`ʂ ʈʂ ʐ`), apical vowels (`ʐ̩`, `ɿ`), front-rounded (`y ɥ`), tone-letter contours.
- `yue_us` **surface** = Jyutping + tone digit; **ipa** = Cantonese IPA with long/short vowel marks, checked coda stops, tone-letter contours.
- Two heritage features were *already* encoded — 牛 `au4` (ng-drop) and 行:1 `hang4` — confirming the data *intends* heritage realizations; they were simply applied to only 2 of 60 cells.

The core problem the owner raised is correct: **58 of 60 cells were indistinguishable from the standard citation form.** Below is the principled Americanization.

---

## Issues found

### A. Mandarin (zh_us) — retroflex merger (zh/ch/sh/r → z/c/s, English-r)
Heritage Mandarin speakers overwhelmingly **de-retroflex**; the 翹舌 series merges into 平舌, and 日-initial /ʐ/ becomes English [ɹ] (Chang et al. 2011; Yang 2015).
- 十 / 食 `ʂʐ̩˧˥` → `sɹ̩˧`; 山 `ʂan˥˥`→`san˥`, 水 `ʂueɪ˨˩˦`→`sweɪ˨`, 手 `ʂou˨˩˦`→`sou˨`, 上 `ʂaŋ˥˩`→`saŋ˥˩`; 中:1 `t͡ʂuŋ˥˥`→`tsuŋ˥`, 中:2 `t͡ʂuŋ˥˩`→`tsuŋ˥˩`.
- 日母 → English [ɹ]: 人 `ʐən˧˥`→`ɹən˧`, 肉 `ʐou˥˩`→`ɹou˥˩`, 日 `ʐ̩˥˩`→`ɹ̩˥˩`.

### B. Mandarin (zh_us) — 二/耳 → [ɚ]; front-rounded & apical anglicized
- 二 `ɑɻ˥˩`→`ɚ˥˩`, 耳 `ɑɻ˨˩˦`→`ɚ˨` (English stressed-r vowel, not Mandarin `ɑɻ`).
- 四 apical `sɿ˥˩`→`si˥˩`.
- Front-rounded /y ɥ/ → [ju jw]: 魚 `y˧˥`→`ju˧`, 月 `ɥe˥˩`→`jwe˥˩`, 血 `ɕye˥˩`→`ɕjwe˥˩`, 去 `t͡ɕʰy˥˩`→`t͡ɕʰju˥˩`, 犬 `t͡ɕʰyan˨˩˦`→`t͡ɕʰjwan˨`.

### C. Mandarin (zh_us) — tone leveling (the dominant heritage feature)
Heritage speakers flatten contour tones and lose the T3 dip (Yang 2015; Wiener & Goss 2019). T1 high-level and T4 high-falling are best-preserved and kept; the merger-prone **T2/T3 are leveled to register marks** (ipa only; surface keeps the pedagogical numeral).
- T3 `˨˩˦`→`˨`: 五 九 水 火 土 海 虎 犬 馬 鳥 手 耳 口 飲 走 左.
- T2 `˧˥`→`˧`: 十 食 龍 魚 牛 人 足 頭 来 聞 南 行:1 行:2.

### D–G. Cantonese (yue_us) — ng-drop, n/l-merger, checked-coda glottalization
- ng-drop: 五 `ng5`/`ŋ̍˨` → `m5`/`m̩˨` (syllabic velar nasal vocalized to labial [m̩]).
- n-/l- merger (懶音): 南 `naam4`/`nɑːm˨`→`laam4`/`lɑːm˨`, 鳥 `niu5`/`niːu˨`→`liu5`/`liːu˨`.
- checked-coda neutralization -p/-t/-k → ʔ (made uniform with the cells already showing `ʔ`): 十 `sɑp˨`→`sɑʔ˨`, 立 `lɑːp˨`→`lɑːʔ˨`.

### H. Things that correctly match standard — NO change (certified)
- zh_us: 火, 馬, 八, 土, 木, 目, 一, 三, 足/走/左/坐 (already flat /ts/), palatals 西/心/下/見 (English-compatible, survive in heritage speech). Only tone-leveling (§C) touches them where applicable.
- yue_us: 火, 馬 and the /f h j m l d g/ initials all survive; 牛 `au4`, 行:1 `hang4` were already done.

---

## EDITS (proposed — orchestrator applied serially)
48 structured edits returned as JSON (zh_us retroflex/日母/二耳/front-rounded/apical/tone-leveling + yue_us ng-drop/n-l/coda-glottal), every `from` verified byte-for-byte against live data.

---

## Worker round-1 response (作業者round-1)

Loaded `hanmap_data.js`, verified every "Current" value, and the orchestrator applied all 48 edits serially to the shared file (disjoint from review #21's yue_* codes and #23's nan_* codes). Confirmed in live data:
- Mandarin: retroflex merger total (no `[ʂʈʐ]` remains in zh_us); 日母→`ɹ` (人 `ɹən˧`, 肉 `ɹou˥˩`, 日 `ɹ̩˥˩`); 二/耳→`ɚ`; front-rounded→`ju/jw` (no residual `ɥ`/bare `y`); apical 四→`si`; 十/食→`sɹ̩˧`; T2/T3 leveled across the 29 touched cells.
- Cantonese: 五→`m5`/`m̩˨`; 南→`laam4`/`lɑːm˨`, 鳥→`liu5`/`liːu˨`; 十/立 coda→`ʔ`.
- Surface labels kept except the 3 lexicalized heritage forms (五 ng→m, 南/鳥 n→l).

Net this round: 48 edits applied.

---

## Reviewer round-2 response (再評価 round-2)

Re-loaded `hanmap_data.js` in a fresh VM and verified all 48 edits verbatim (**PASS 48 / FAIL 0**), then re-scanned for residual non-heritage glyphs and audited the deliberately-unchanged cells for *uniformity*.

- **Retroflex merger ʂ/ʈʂ/ʐ → s/ts/ɹ — ✓ VERIFIED.** Full-register scan for any surviving `[ʂʈʐ]` in `zh_us` returns **empty**.
- **日母 → [ɹ]; 二/耳 → [ɚ]; front-rounded → [ju/jw] (no residual ɥ/y); apical 四 → si — ✓ VERIFIED.** 十/食→`sɹ̩˧` is a coherent rhotic-apical split, not an inconsistency.
- **Tone-leveling T2/T3 — △ PARTIAL.** Every *touched* T2/T3 cell leveled correctly, but the rule was **not exhaustive**.
- **Cantonese ng-drop (五 `m̩`), n/l-merger (南 `laam`, 鳥 `liu`), checked-coda glottalization (十 `sɑʔ`, 立 `lɑːʔ`) — ✓ VERIFIED.** A scan for any unglottalized `[ptk]` coda in `yue_us` returns **empty** — coda glottalization is total.
- **Deliberately-unchanged cells (火/馬/八, palatals ɕ/t͡ɕ, T1/T4-preserved) — ✓ CERTIFIED** heritage = standard, not oversights.

### Residual defects (surfaced by the consistency re-scan)
- **R1 — 羊 `jaŋ˧˥`** — T2 not leveled (oversight); should be `jaŋ˧` like its 13 sibling T2 cells.
- **R2 — 北 `peɪ˨˩˦`** — T3 not leveled (oversight); should be `peɪ˨` like its 16 sibling T3 cells.
- **R3 — 木 `mu⁴`** — pinyin tone-number leaked into the IPA column (surface===ipa); its twin 目 correctly reads `mu˥˩`, so 木 should be `mu˥˩`.

**File status: OPEN** — Dev next step: level 羊 `jaŋ˧˥`→`jaŋ˧`, 北 `peɪ˨˩˦`→`peɪ˨`, and fix 木 `mu⁴`→`mu˥˩`.

---

## Worker round-2 response (作業者round-2)

Re-loaded the file and confirmed the three residual defects verbatim (羊 `jaŋ˧˥`, 北 `peɪ˨˩˦`, 木 `mu⁴`). Applied the reviewer's exact endorsed fixes:
- **R1 — 羊** `HAN_DATA["羊"].ipa.zh_us` `jaŋ˧˥`→`jaŋ˧` (T2 leveled, matching the 13 sibling cells). APPLIED.
- **R2 — 北** `HAN_DATA["北"].ipa.zh_us` `peɪ˨˩˦`→`peɪ˨` (T3 leveled, matching the 16 sibling cells). APPLIED.
- **R3 — 木** `HAN_DATA["木"].ipa.zh_us` `mu⁴`→`mu˥˩` (IPA tone-letter, matching twin 目 `mu˥˩`). APPLIED.

Net this round: 3 edits applied. The tone-leveling system is now exhaustive (all T2/T3 zh_us cells leveled) and no pinyin tone-number remains in the zh_us IPA column.

---

## Reviewer round-3 response (再評価 round-3)

Re-loaded `hanmap_data.js` in a fresh VM and verified the three round-2 fixes in live data: 羊 `jaŋ˧`, 北 `peɪ˨`, 木 `mu˥˩` — all confirmed. Re-scanned `zh_us` for any T2 `˧˥` or T3 `˨˩˦` contour remaining on a leveled-category cell: **none**. Re-scanned the IPA column for any bare pinyin tone-number (`[¹²³⁴]` where an IPA tone-letter belongs): **none** (木 was the last). The Americanized heritage system is now internally consistent and exhaustive.

### Scorecard (round-3, final)

| Feature / item | Verdict |
|---|---|
| 48 + 3 applied edits land (live === `to`) | ✓ 51/51 verified |
| Mandarin retroflex merger ʂ/ʈʂ/ʐ → s/ts/ɹ | ✓ total |
| 日母 → [ɹ]; 二/耳 → [ɚ] | ✓ verified |
| Front-rounded /y ɥ/ → [ju/jw] | ✓ no residual |
| Apical /ɿ/ → plain; 十/食 → sɹ̩ split | ✓ coherent |
| Tone-leveling T2/T3 (incl. 羊, 北) | ✓ now exhaustive |
| 木 ipa `mu⁴` → `mu˥˩` (tone-number leak) | ✓ fixed |
| T1/T4 preserved; palatals preserved | ✓ certified correct |
| Cantonese ng-drop / n-l merger / coda glottalization | ✓ total |
| Surface labels kept except 五/南/鳥 | ✓ confirmed |

All 51 edits are fixed-and-verified. The retroflex merger, 日母, 二/耳, front-rounding, apical, ng-drop, n/l-merger and checked-coda glottalization are each total and internally coherent; tone-leveling is now exhaustive; the deliberately-preserved cells are certified heritage = standard. Heritage forms being by-nature variable is a documented modeling choice, not a defect.

**File status: CLOSED** — nothing left to address.
