# Hanmap data review #46 — Sino-Vietnamese round-2 audit (vi / vi_c / vi_s / vi_nom / vi_ohan)

## Reviewer self-introduction

Round-2 audit of all five Vietnamese codes against `/home/jounlai/langmap/hanmap_data.js` (read-only). Working sources: Maspéro (1912) *Études sur la phonétique historique de la langue annamite*; Mineya Tōru (1972) *越南漢字音の研究*; Nguyễn Tài Cẩn (1979) *Nguồn gốc và quá trình hình thành cách đọc Hán-Việt*; Pulleyblank (1981, 1991); Thompson (1965) *A Vietnamese Reference Grammar*; Haudricourt (1953, 1954); Schuessler (2007) *ABC Etymological Dictionary*; Alves (2007, 2016); Vietnamese Nôm Preservation Foundation database; Lê Văn Quán (1981) *Chữ Nôm — Nguồn gốc và Cấu tạo*. Re-extracted every `HAN_DATA[k].{surface,ipa,native}.{vi,vi_c,vi_s,vi_nom,vi_ohan}` cell programmatically. This pass focuses on **what reviews #4 and #31 left behind**: post-fix residue, cross-row inconsistencies that only emerge after their changes landed, and previously-out-of-scope patterns (capitalization, tone-system regularity across 5 codes, vowel/glottal/initial conventions). HAN_LIST in the file has 61 keys (counting `中:1`, `中:2`, `行:1`, `行:2` separately); audited all 61.

**Scope:** rows `vi`, `vi_c`, `vi_s`, `vi_nom`, `vi_ohan` across surface, ipa, native columns.

---

## Issues found

### 1. 中:2 — `vi_c` IPA tone identical to `vi`, breaking the file-wide Central sắc pattern

- **Current:** `ipa.vi = "ʈuŋ͡m˧˥"`, `ipa.vi_c = "ʈuŋ͡m˧˥"`, `ipa.vi_s = "ʈuŋ͡m˧˥"` — all three identical.
- **Expected:** `ipa.vi_c = "ʈuŋ͡m˨˩˧"` (Central Huế falling-rising for non-entering sắc).
- **Why:** 中:2 *trúng* is sắc tone with sonorant -ng coda (non-entering). The file is internally consistent on the Central sắc split: stop-final entering syllables use `˦˥` (一 `ɲət˦˥`, 七 `tʰət˦˥`, 八 `ɓaːt˦˥`, 北 `ɓak˦˥`), while non-entering sắc uses `˨˩˧` (四 `tɨ˨˩˧`, 去 `xɨ˨˩˧`, 見 `kiən˨˩˧`). 中:2 *trúng* belongs in the second class. The Hanoi `˧˥` was copy-pasted into the vi_c slot when the row was added (review #4 issue #1, round-1 fix). vi_s `ʈuŋ͡m˧˥` is correct (Southern sắc is `˧˥` for non-entering).

### 2. 馬 — `vi` IPA ngã onset `˦ˀ˥` is the sole outlier in the four-character ngã set

- **Current:** `ipa.vi = "maː˦ˀ˥"`.
- **Expected:** `ipa.vi = "maː˧ˀ˥"`.
- **Why:** Every other Hanoi ngã syllable in the file uses `˧ˀ˥` (mid creaky rising): 五 `ŋu˧ˀ˥`, 耳 `ɲi˧ˀ˥`, 右 `hɨw˧ˀ˥`. 馬 alone uses `˦ˀ˥` (high onset). Thompson (1965) and Mineya (1972) describe Hanoi ngã as starting mid; the `˦` is not the documented contour. Same row's `vi_nom` ngựa uses `˧ˀ˨ʔ` (nặng), so this is not a tone-class confusion — it's a value-level typo on the ngã onset.

### 3. 走 — `vi` / `vi_c` / `vi_s` IPA uses combining breve `ə̆` not present in any other vi cell

- **Current:** `ipa.vi = "tə̆w˧˩˧"`, `ipa.vi_c = "tə̆w˧˩˨"`, `ipa.vi_s = "tə̆w˨˩˦"` (each contains U+0259 + U+0306).
- **Expected:** `"təw˧˩˧"` / `"təw˧˩˨"` / `"təw˨˩˦"` — plain schwa, matching every other *âu* rhyme.
- **Why:** File-wide grep for U+0306 (combining breve) returns only these three 走 cells. Every other *-âu* vi entry uses plain `ə`: 頭 `ɗəw˨˩`, 口 `xəw˧˩˧`, 心 `təm˧˧`. Vietnamese *â* is uniformly /ə/; the breve has no phonological role here. Likely a copy-paste from a source that distinguished a hypothetical short-vs-long schwa.

### 4. 中:1 / 中:2 — `vi` IPA uses retroflex `ʈ` for *tr-*, conflicting with file convention `tʂ` for all other tr-

- **Current:** 中:1 `vi/vi_c/vi_s = ʈuŋ͡m…`; 中:2 `vi/vi_c/vi_s/vi_nom = ʈuŋ͡m…` — retroflex stop /ʈ/.
- **Expected:** `tʂuŋ͡m…` to match the rest of the file's Hanoi tr- convention.
- **Why:** All other *tr-*initial cells in the file (月 `tʂaŋ˧˧`, 天 `tʂəːj˨˩`, 上 `tʂen˧˧`, 左 `tʂaːj˧˥`, plus 月 vi_ohan `tʂaŋ˧˧`) use the affricate /tʂ/, which is the Hanoi reading standardly transcribed in Thompson (1965) and Nguyễn Đình-Hoà (1997). Only the 中 character uses /ʈ/, including in vi_nom — making 中:2 vi_nom *trúng* the lone tr- vi_nom cell with /ʈ/ versus four others with /tʂ/. Either the file should standardise on one (Hanoi reformed tr- = /tʂ/ ≈ /tɕ/) or document the choice.

### 5. 牛 — `vi_ohan` is *bò* (Vietic), not *trâu* (canonical Cổ Hán-Việt reflex of 牛)

- **Current:** `surface.vi_ohan = "bò"`, `ipa.vi_ohan = "ɓɔ˨˩"` — byte-identical to `vi_nom`.
- **Expected:** `surface.vi_ohan = "trâu"`, `ipa.vi_ohan = "tʂəw˧˧ < *ŋʷə"` (or omit the inline reconstruction to match Maspéro/Mineya tradition).
- **Why:** *bò* is Proto-Vietic (cf. Bahnar *poː*, Mon-Khmer cognates); it never went through Han. The canonical Cổ Hán-Việt reflex of 牛 MC \*ŋuw is *trâu* 'water buffalo' — explicitly cited in Maspéro 1912, Mineya 1972, Pulleyblank 1962, Schuessler 2007, Alves 2016, and in review #4 issue #16 which originally added `vi_ohan: trâu / tʂəw˧˧` in round-1. The current `vi_ohan = "bò"` is byte-identical to vi_nom, displaying the exact "byte-identical layer-copy" symptom that review #31 issues #17/#18 explicitly diagnosed elsewhere. Either #4's *trâu* fix was overwritten, or a later edit replaced it with vi_nom *bò*.

### 6. 牛 — `vi_ohan` byte-identical to `vi_nom` (same finding-type as 貓, masked by re-fill)

- **Current:** 牛 `surface.vi_nom = surface.vi_ohan = "bò"`; `ipa.vi_nom = ipa.vi_ohan = "ɓɔ˨˩"`.
- **Expected:** vi_ohan should differ from vi_nom by carrying the OHan etymological reflex (per #5, *trâu*).
- **Why:** Adjacent to #5. Same byte-identity pattern as 貓 *mèo* below (#7) — at minimum the vi_ohan layer should expose a different lexeme or annotate the OHan source inline (the file already uses the `< *LH-form` annotation pattern on 龍 `zawŋ͡m˨˩ < *bləwŋ`, 馬 `ŋɨə˧ˀ˨ʔ < *ŋraːʔ`, 頭 `ɗəw˨˩ < *dô`).

### 7. 貓 — `vi_ohan` byte-identical to `vi_nom`, no LH annotation

- **Current:** `surface.vi_ohan = "mèo"`, `ipa.vi_ohan = "mɛw˨˩"` — byte-identical to `vi_nom`.
- **Expected:** `ipa.vi_ohan = "mɛw˨˩ < *mæu"` (Schuessler 2007 reconstructs 貓 LH \*mæu) or comparable annotation.
- **Why:** 貓 → mèo is a real Cổ Hán-Việt borrowing (the canonical OHan layer for the felidae term in Vietnamese, alongside Hán-Việt *miêu*), so unlike #5/#6 the lexeme is correct. The defect is that the vi_ohan cell is byte-identical to vi_nom, replicating the exact issue review #31 #17/#18 flagged and that the round-1 fix addressed for 龍/馬 (and round-3 for 頭) using the inline `< *LH-form` pattern. 貓 was missed.

### 8. 一 — `vi_s` surface *Nhất* does not match `vi_s` native *nhứt* / IPA `ɲɨt˦˥`

- **Current:** `surface.vi_s = "Nhất"`, `native.vi_s = "nhứt"`, `ipa.vi_s = "ɲɨt˦˥"`.
- **Expected:** `surface.vi_s = "Nhứt"` (matching native + IPA).
- **Why:** Surface, native, and IPA are supposed to be three views of the same dialect form. The Southern vernacular reading is *nhứt* (vowel *ư* /ɨ/) — that's what the native column and the IPA reflect (the IPA shows /ɨt/, not /ət/). The surface column kept the Hanoi spelling *Nhất*. Either the Southern dialect column intends to surface only the standardised Hán-Việt orthography (in which case native and IPA should also normalise to *nhất* / `ɲət˦˥`) or it intends to surface the dialect-specific form (in which case surface should read *Nhứt*). The current three-way split is internally inconsistent.

### 9. 日 — `vi_s` surface *Nhật* does not match `vi_s` native *nhựt* / IPA `ɲɨt˨˩ʔ`

- **Current:** `surface.vi_s = "Nhật"`, `native.vi_s = "nhựt"`, `ipa.vi_s = "ɲɨt˨˩ʔ"`.
- **Expected:** `surface.vi_s = "Nhựt"` (matching native + IPA).
- **Why:** Same pattern as #8. *nhựt* is the well-attested Southern colloquial reflex of 日 (cf. *chủ nhựt* 'Sunday' in Southern usage); the IPA reflects it (/ɨ/, not /ə/). Surface should follow native.

### 10. 飲 vs 央 vs 食 — vowel-initial vi IPA is inconsistent in marking initial `ʔ`

- **Current:** 飲 `vi = "ʔəm˧˩˧"` (with /ʔ/); 央 `vi = "ɨəŋ˧˧"` (no /ʔ/); 食 `vi_nom = "an˧˧"` ; 飲 `vi_nom = "uəŋ˧˥"` (no /ʔ/).
- **Expected:** Pick one convention and apply uniformly. Either always write `ʔ` before vowel-initial syllables (then add to 央 *ương*, 食 *ăn*, 飲 *uống*) or never (then drop from 飲 *ẩm*).
- **Why:** Vietnamese vowel-initial syllables phonetically carry a glottal-stop onset. Thompson (1965) treats /ʔ/ as phonemic. The file marks it on 飲 *ẩm* (in vi/vi_c/vi_s) but omits it from every other vowel-initial cell. This is the same kind of localised convention break flagged in review #4 issues #11 (/ɜ/ vs /ə/) and #12 (/ʊ/ vs /u/).

### 11. 行:2 — `vi_nom` is *hàng* with bare Han 行 in native slot (review #31 #7 "blank" not applied)

- **Current:** `surface.vi_nom = "hàng"`, `ipa.vi_nom = "haŋ˨˩"`, `native.vi_nom = "行"` (U+884C, raw Han).
- **Expected:** Per review #31 issue #7 round-1 ACCEPT, vi_nom should be **blank** (surface/ipa/native all empty), matching the treatment of 央/東/西/南/北.
- **Why:** *hàng* is Hán-Việt Việt-hoá (Nguyễn Tài Cẩn 1979 stratum 3), not Nôm-native; the bare 行 in `native` is the unmodified Han character, exactly the "layer-copy" pattern review #31 set out to eliminate. The vi_nom IPA `haŋ˨˩` is byte-identical to vi `haŋ˨˩`. Review #31 round-1 explicitly proposed and accepted blanking this cell; the fix is not in live data.

### 12. 月 — `vi_ohan` IPA `zaŋ˧˧` for *giăng* uses Hanoi /z/, contradicting the *giăng*-only Northern-conservative provenance

- **Current:** `surface.vi_ohan = "trăng / giăng"`, `ipa.vi_ohan = "tʂaŋ˧˧ / zaŋ˧˧"`.
- **Expected:** The /z/ vs /j/ split is well-defined: Hanoi *gi-* = /z/, Central/Southern *gi-* = /j/. *giăng* is documented (Haudricourt 1953) as the conservative Northern (Nghệ–Tĩnh and older Hanoi literary) reflex of *blăŋ. Encoding it as `zaŋ˧˧` in the **vi_ohan** column treats it as modern Hanoi pronunciation, which obscures the historical Nghệ–Tĩnh provenance that motivated listing it in the first place. Either rewrite as `jaŋ˧˧` (true conservative Northern /j/) or drop /giăng/ and leave only /trăng/.
- **Why:** The whole point of issuing both *trăng* and *giăng* (per review #31 round-1 fix to issue #16) was to expose the *bl- → tr-/gi-* split. Re-transcribing *giăng* as Hanoi /z/ collapses it back into the modern register and loses the historical signal.

### 13. 中:2 — `vi_nom` byte-identical to `vi`/`vi_c`/`vi_s` surface and IPA; native 衷 is phonetic reuse

- **Current:** `surface.vi = vi_c = vi_s = vi_nom = "Trúng" / "trúng"`; `ipa.vi = vi_c = vi_s = vi_nom = "ʈuŋ͡m˧˥"`; `native.vi_nom = "衷"`.
- **Expected:** Per the file's own pattern for Sino-only entries (cf. 央/東/西/南/北 where vi_nom was blanked because no Vietic root exists), 中:2 *trúng* in the verbal sense 'to hit (target)' has no Vietic root either; it is Hán-Việt Việt-hoá. The cell could be blanked, or if retained, the native column needs to be a disambiguating Nôm rather than 衷 (which is a Han character with HV reading *trung* 'inner heart', repurposed phonetically).
- **Why:** This is precisely the "vi_nom layer-copy" cluster review #31 #1/#2/#4/#5/#6 addressed — and 中:2 was selected for a different treatment (keep + use 衷 as phonetic reuse) by review #31 round-1 #12 counter. Round-3 of review #4 then added 中:2 to vi/vi_c/vi_s (round-1 fix #1). The two passes together left the row with byte-identical Sino-Vietnamese readings in all five Vietnamese codes — exactly the symptom #31 was trying to eliminate. Decision point for next pass: does the project treat 中:2 as a Sino-only row (blank vi_nom) or as a Hán-Việt-Việt-hoá row (keep, accept the identity but document)?

### 14. 食 — `vi_c` / `vi_s` IPA `tʰɨk˨˩ʔ` lacks the creaky ˀ that the `vi` ˧ˀ pattern would predict

- **Current:** `ipa.vi = "tʰɨk˧ˀ˨ʔ"` (with ˀ, fixed in review #4 N1 round-3); `vi_c = vi_s = "tʰɨk˨˩ʔ"` (no ˀ).
- **Expected:** Per review #4 round-3 worker rationale: the vi_c/vi_s register uses `˨˩ʔ` (no creaky) for all stop-final entering nặng (六, 木, 目, 肉, 十, 立, 日, 月 all match). 食 is consistent with peers in vi_c/vi_s.
- **Why:** This is a **non-finding / cross-check confirmation** — included only to flag that any future "regularise vi_c/vi_s ˀ" sweep should NOT touch 食 vi_c/vi_s (review #4 round-3 reviewer #04 explicitly withdrew his round-2 sub-proposal here). Noting it so a future reviewer doesn't re-open the closed item.

### 15. 五 — `vi_s` IPA `ŋu˨˩˦` differs from `vi_c` `ŋu˨˩ˀ`; same applies to 耳/馬/右 (ngã class)

- **Current:** ngã class: 五 vi_c `˨˩ˀ` / vi_s `˨˩˦`; 耳 vi_c `˨˩ˀ` / vi_s `˨˩˦`; 馬 vi_c `˨˩ˀ` / vi_s `˨˩˦`; 右 vi_c `˨˩ˀ` / vi_s `˨˩˦`.
- **Expected:** The pattern is consistent: Central (Huế) merges ngã with nặng (creaky `˨˩ˀ`); Southern merges ngã with hỏi (low rising `˨˩˦`). This is correctly captured in the data.
- **Why:** **Non-finding / cross-check confirmation**, included so the next pass is aware: ngã treatment is regular, do not "fix" the vi_c/vi_s asymmetry. Noting because it superficially looks like the kind of unmotivated split that a reviewer might flag.

### 16. 央 — vi_nom surface/ipa/native all empty strings rather than `undefined`

- **Current:** `surface.vi_nom = ""`, `ipa.vi_nom = ""`, `native.vi_nom = ""` (empty strings).
- **Expected:** Compare with 東/西/南/北 — those are also empty strings, so this is consistent within the cluster. But 95% of other "absent" cells in the file are `undefined` (the key is missing), not `""`. Consider whether keeping the empty-string sentinel for these six blanked vi_nom rows is intentional (it makes the layer-copy-blanking explicit) or whether it should be normalised to deleting the key.
- **Why:** **Data hygiene observation, low priority.** The rendering layer (`hanmap.html`) likely handles both as "no data", but consistency matters for downstream consumers. If the empty string is intentional ("we considered this cell, and decided it should be blank"), it should be documented.

### 17. 水 / 天 / 人 / 飲 — `vi_ohan` is empty strings; review #31 round-1 ACCEPT blanks not normalised to undefined

- **Current:** 水 `vi_ohan.surface = "", ipa.vi_ohan = ""`; same shape for 天, 人, 飲.
- **Expected:** Either delete the keys (matching the bulk-undefined convention for absent cells) or document the empty-string-as-marker convention. Same observation as #16 but for vi_ohan rather than vi_nom.
- **Why:** Review #31 round-1 (issues #13/#14/#15/#19) ACCEPTed blanking these four vi_ohan cells because *người/nước/trời/uống* are Vietic / debated, not Cổ Hán-Việt. The blanking landed as empty strings rather than key deletion. Cross-checking against other languages in the file (e.g. `vi_ohan` for 一, 二, 三 is `undefined`, key absent), the four blanked cells stand out as the only ones with explicit `""`. Low priority but should be uniform.

### 18. 心 — `vi_nom` *lòng* assignment displaces the more canonical OSV *tim* for 心

- **Current:** `surface.vi_nom = "lòng"`, `ipa.vi_nom = "lɔŋ˨˩"`, `native.vi_nom = "𢚸"`.
- **Expected:** Consider adding `vi_ohan: tim / tim˧˧` separately. *lòng* in vi_nom is correct (it is one of the Vietic native words for 'heart/inside/mind' written with this character in Nôm corpora), but the Cổ Hán-Việt reflex of 心 MC \*sim is *tim* 'heart' (the organ), documented in Schuessler 2007 and Alves 2016 alongside Hán-Việt *tâm*. The current row exposes neither.
- **Why:** Symmetric to the additions review #4 made for 月/牛/水/天/人/飲 (round-1 fixes #15–#19, #23). 頭 *đầu* was added in round-3 of #31. 心 → *tim* is in the same canonical OSV set and was missed.

### 19. 行:1 — `vi_s` IPA `haɲ˨˩` retains Hanoi palatal `ɲ` despite Southern coda merger

- **Current:** `ipa.vi_s = "haɲ˨˩"` (palatal coda).
- **Expected:** True Southern Vietnamese has `haŋ˨˩` (velar merger). Review #4 issue #20 round-1 explicitly took the "minimum-edit" path of copying Hanoi /ɲ/ into vi_s; round-2 accepted it as a conservative resolution.
- **Why:** **Non-finding / re-opened note**: this was closed in review #4 with the explicit caveat that the cell is Hanoi phonology placed in a Southern column, "a data-quality limitation, not an error." Flagging again because if the project ever adds Southern phonology properly (separate from data structure changes), this is the cell to fix. Sibling 行:2 vi_s correctly uses velar `haŋ˨˩` — so the inconsistency is within the same row pair.

### 20. 来 — character key is simplified 来 (U+6765), but Vietnamese tradition uses traditional 來

- **Current:** HAN_LIST contains `"来"` (U+6765).
- **Expected:** Vietnamese Hán/Nôm tradition exclusively uses traditional 來 (U+4F86). Every other CJK character in HAN_LIST appears in its traditional form (e.g. 龍 not 龙, 馬 not 马, 見 not 见, 飲 not 饮). 来 is the only simplified-Chinese character key in the list.
- **Why:** This is a **list-level / cross-language** observation, not specifically a Vietnamese-column issue, but it directly affects what Vietnamese reviewers see in the native column: a Sino-Vietnamese reading "Lai" pegged to a character (来) that never appeared in Vietnamese imperial-era texts. The Vietnamese surface and IPA are correct for *lai* either way; the issue is the head character.

### 21. 行:1 — `vi_nom` *đi* and `去` `vi_nom` *đi* share the same Nôm glyph 𠫾, no disambiguation

- **Current:** Both 行:1 and 去 have `native.vi_nom = "𠫾"` (U+20AFE).
- **Expected:** Either acknowledge the shared Nôm (it is one glyph reused for the same Vietnamese verb *đi*, which is semantically correct), or distinguish by sense ID convention. 行:1 *đi* (to go, verb of motion) and 去 *đi* (to go, to leave) are the same Vietnamese verb; sharing 𠫾 is etymologically correct (Lê Văn Quán 1981 §2.4: 𠫾 = 多+去, phono-semantic).
- **Why:** **Non-finding / observation.** Unlike the parallel case in 土/地 sharing `𡐙` for *đất* (where review #4 round-1 fixed both together to the correct Nôm), this is the intended behaviour: 行:1 *đi* and 去 *đi* genuinely share the Nôm 𠫾. Including this entry so the next pass doesn't flag it as a duplicate.

### 22. 火 — vi_nom IPA `lɨə˧˩˧` for *lửa* uses /ɨə/ but standard Hanoi *ưa* = /ɨə/ or /ɨɤ/ depending on transcription

- **Current:** `ipa.vi_nom = "lɨə˧˩˧"`.
- **Expected:** Consistent with file convention. The /ɨə/ transcription matches 水 *nước* `nɨək̚˧˥`, 馬 *ngựa* `ŋɨə˧ˀ˨ʔ`, 人 *người* `ŋɨəj˨˩`, 上 *trên* / no — wait, 上 vi_nom = `tʂen˧˧` not /ɨə/. The file uniformly uses /ɨə/ for *ưa* rhyme.
- **Why:** **Non-finding / convention check.** Confirmed consistent. Including only to head off a potential round-3 reviewer flagging /ɨə/ vs /ɨɤ/ — file convention is /ɨə/.

### 23. Capitalization convention — `vi` capitalized, `vi_nom` and `vi_ohan` lowercase: undocumented but consistent

- **Current:** All 61 `surface.vi` / `vi_c` / `vi_s` cells are capitalized (Nhất, Tam, Trúng, …). All 50+ populated `surface.vi_nom` and `surface.vi_ohan` cells are lowercase (một, ba, trúng, trăng, giăng, …).
- **Expected:** Consistent (no change needed). Documenting because the task focus #1 specifically asked about capitalization convention.
- **Why:** The convention reflects display semantics: vi/vi_c/vi_s show the formal Sino-Vietnamese citation form (treated as a proper noun-like citation), vi_nom and vi_ohan show the native Vietnamese lexeme in its natural lowercase form. This is internally consistent throughout the file; the only minor irregularity is the 8/9 surface-vs-native mismatch on 一/日 vi_s where surface follows the cap convention but encodes the wrong dialect form.

---

## Summary of issue types

| Type | Count | Issue numbers |
|---|---|---|
| Cross-row IPA tone/pattern outliers | 4 | #1 (中:2 vi_c), #2 (馬 vi ngã), #3 (走 breve), #4 (中 /ʈ/) |
| vi_ohan layer-copy / mis-attribution | 3 | #5 (牛 bò), #6 (牛 byte-id), #7 (貓 byte-id) |
| Surface/native/IPA internal mismatch | 2 | #8 (一 vi_s), #9 (日 vi_s) |
| Glottal-stop initial inconsistency | 1 | #10 (ʔ in 飲 vs 央/食) |
| Layer-copy residue from prior reviews | 2 | #11 (行:2 not blanked), #13 (中:2 vi_nom) |
| OHan-layer signal preservation | 1 | #12 (月 giăng /z/) |
| Missing canonical OSV addition | 1 | #18 (心 → tim) |
| Data hygiene (empty string vs undefined) | 2 | #16, #17 |
| Non-findings / cross-check confirmations | 5 | #14, #15, #19, #21, #22 |
| List-level / character-key | 1 | #20 (来 simplified) |
| Convention confirmation | 1 | #23 (capitalization) |

**Highest-priority fixes:** #1 (中:2 vi_c tone, breaks an established systematic pattern), #2 (馬 vi ngã onset, sole outlier in 4-character ngã set), #5/#6 (牛 vi_ohan = bò is canonically wrong), #11 (行:2 vi_nom layer-copy persists despite #31 ACCEPT).

**Lower-priority / decision-point fixes:** #4 (tr- /ʈ/ vs /tʂ/ — file-wide convention call), #10 (vowel-initial /ʔ/ — file-wide convention call), #13 (中:2 vi_nom — Sino-only vs HV-Việt-hoá policy).

---

**File path:** `/home/jounlai/langmap/hanmap_reviews/46_open.md`
**Finding count:** 23 (15 actionable findings + 5 non-finding cross-checks + 1 list-level + 1 convention-confirmation + 1 data-hygiene pair)


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 17
- **policy/skip**: 12
- **headline**: 中:2 vi_c IPA ˨˩˧ Central pattern, 馬 vi maː ˧ˀ˥ ngã align, 走 vi breve removal, tr- /ʈ/→/tʂ/ ×6, 牛 vi_ohan bò→trâu restore, 月 vi_ohan giăng z→j
- **JSON path**: /tmp/hm_edits_46.json
