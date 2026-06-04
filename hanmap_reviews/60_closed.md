# HanMap data review #60 — Sino-Vietnamese round-3 audit (vi / vi_c / vi_s / vi_nom / vi_ohan)

## Reviewer self-introduction

Round-3 audit of all five Vietnamese codes against `/home/jounlai/langmap/hanmap_data.js` (read-only). This pass builds directly on reviews #4 / #31 / #46. #46 closed the tr- /ʈ/→/tʂ/ sweep, 牛 vi_ohan trâu restoration, 馬 vi ngã onset (˧ˀ˥), 走 schwa-breve removal, and 月 vi_ohan giăng /z/→/j/. I re-extracted every `HAN_DATA[k].{surface,ipa,native}.{vi,vi_c,vi_s,vi_nom,vi_ohan}` cell programmatically (HAN_LIST = 61 keys when 中:1/中:2/行:1/行:2 are counted separately, all audited).

Working sources (overlap with #46 plus stratum-specific additions): Maspéro (1912); Mineya Tōru (1972); Nguyễn Tài Cẩn (1979); Pulleyblank (1962, 1991); Thompson (1965); Haudricourt (1953, 1954); Schuessler (2007); Alves (2007, 2016); Nguyễn Đình-Hoà (1997); Cao Xuân Hạo (1998) on Southern phonology; Hoàng Thị Châu (1989) on regional dialects; Phan John (2010, 2013) on Sino-Vietnamese strata; Nôm Na Tự Điển / Vietnamese Nôm Preservation Foundation; Lê Văn Quán (1981); Vũ Văn Kính (1992) *Bảng tra chữ Nôm*; Nguyễn Quang Hồng (2014) *Tự điển chữ Nôm dẫn giải*.

**Scope:** rows `vi`, `vi_c`, `vi_s`, `vi_nom`, `vi_ohan` across surface, ipa, native columns. New emphases per task focus: (a) Nôm-graph vs Han-graph distinction in vi_nom, (b) Maspéro-Mineya OHan layer validation in vi_ohan, (c) Central (Nghệ-Tĩnh / Huế) tone alignment, (d) Southern v→j and ɨə→ɨː realisations, (e) post-#46 residue.

---

## Issues found

### 1. 日 — `vi` IPA `ɲət˧˨ʔ` lacks creaky-onset `ˀ`, breaking the file-wide nặng-stop pattern

- **Current:** `ipa.vi = "ɲət˧˨ʔ"`.
- **Expected:** `ipa.vi = "ɲət˧ˀ˨ʔ"` (with creaky-glottalisation onset `ˀ`).
- **Why:** Every other Hanoi nặng-stop syllable in the file uses `˧ˀ˨ʔ`: 六 `luk˧ˀ˨ʔ`, 七 — no, 七 is sắc; 十 `tʰəp˧ˀ˨ʔ`, 木 `mok˧ˀ˨ʔ`, 目 `muk̚˧ˀ˨ʔ`, 肉 `ɲuk˧ˀ˨ʔ`, 食 `tʰɨk˧ˀ˨ʔ`, 立 `ləp˧ˀ˨ʔ`. The same coda set occurs on non-stop nặng (二 `ɲi˧ˀ˨ʔ`, 地 `ɗie˧ˀ˨ʔ`, 上 `tʰɨəŋ˧ˀ˨ʔ`, 下 `ha˧ˀ˨ʔ`, 坐 `twa˧ˀ˨ʔ`). 日 and 月 (see #2) are the only two cells that drop the `ˀ`. Thompson (1965) and Nguyễn Đình-Hoà (1997) treat nặng as carrying tense/creaky phonation throughout, regardless of the coda; the `ˀ` is the file's chosen marker for that phonation. This is a pure typo-class outlier.

### 2. 月 — `vi` IPA `ŋwiət˧˨ʔ` lacks creaky-onset `ˀ`, twin of #1

- **Current:** `ipa.vi = "ŋwiət˧˨ʔ"`.
- **Expected:** `ipa.vi = "ŋwiət˧ˀ˨ʔ"`.
- **Why:** Same pattern as #1. 日 and 月 are byte-grep neighbours in the original data block (both nature-category nặng-finals) and almost certainly were edited together; the `ˀ` was forgotten on both. With #1 fixed, this becomes the lone outlier; fixing both together is cleaner and brings 14/14 vi nặng-stops to a uniform `˧ˀ˨ʔ` shape.

### 3. 中:2 — `vi_c` retroflex stop `ʈ` remains after #46 swept `ʈ→tʂ` elsewhere

- **Current:** `ipa.vi_c = "ʈuŋ͡m˨˩˧"`.
- **Expected:** `ipa.vi_c = "tʂuŋ͡m˨˩˧"`.
- **Why:** Review #46 issue #4 documented file-wide convention as `tʂ` for Hanoi *tr-*. The round-1 fix swept 中:1 vi/vi_c/vi_s and 中:2 vi/vi_s/vi_nom from `ʈ` to `tʂ` (six replacements), but the 中:2 vi_c cell was missed in the JSON edit list. Result: 中:2 is now the sole cell in the file with retroflex `ʈ`, breaking the convention #46 set out to establish. Tone `˨˩˧` is correct (Central non-entering sắc per #46 issue #1 fix) — only the initial needs to swap.

### 4. 牛 — `vi_ohan` IPA missing `< *etymon` annotation that #46 affirmed as the pattern

- **Current:** `ipa.vi_ohan = "tʂəw˧˧"` (no inline reconstruction).
- **Expected:** `ipa.vi_ohan = "tʂəw˧˧ < *ŋʷə"` (or another Maspéro/Pulleyblank-style reconstruction).
- **Why:** Review #46 issue #5 explicitly re-affirmed the inline `< *LH-form` pattern as the file's vi_ohan convention, and the round-1 fix restored *trâu* but omitted the `< *etymon` tail. The current state leaves 牛 vi_ohan IPA byte-distinct from vi_nom *bò* `ɓɔ˨˩` (so #46 #6 is technically closed), but the OHan stratum signal is still encoded only as a phonetic form, with no etymological pointer. Compare the populated peers: 龍 `zawŋ͡m˨˩ < *bləwŋ`, 馬 `ŋɨə˧ˀ˨ʔ < *ŋraːʔ`, 頭 `ɗəw˨˩ < *dô`. 牛 should join them. Pulleyblank (1991) reconstructs MC 牛 as \*ŋuw / LH \*ŋʷə; Schuessler (2007) gives OC \*ŋwə.

### 5. 貓 — `vi_ohan` IPA still byte-identical to `vi_nom` (residue from #46 issue #7 ACCEPT not applied)

- **Current:** `ipa.vi_nom = "mɛw˨˩"`, `ipa.vi_ohan = "mɛw˨˩"` — byte-identical.
- **Expected:** `ipa.vi_ohan = "mɛw˨˩ < *mæu"` (Schuessler 2007 LH for 貓) or similar.
- **Why:** #46 issue #7 explicitly flagged this and proposed the `< *mæu` annotation. The round-1 apply note lists 17 edits + 12 skips; this one was apparently in the skip bucket. The defect is identical to what #46 closed for 龍/馬/頭/牛(per #4 above): the OHan layer is present lexically (*mèo* is correct as OSV) but offers no information beyond the vi_nom layer because the IPA is identical. Either add the `< *etymon` tail or drop the vi_ohan cell.

### 6. 行:2 — `vi_nom` half-blanked: surface "hàng" + IPA `haŋ˨˩` present, native left as empty string

- **Current:** `surface.vi_nom = "hàng"`, `ipa.vi_nom = "haŋ˨˩"`, `native.vi_nom = ""` (empty string).
- **Expected:** Per review #46 issue #11 ACCEPT decision, all three vi_nom slots of 行:2 should be blank (matching 央/東/西/南/北 cluster). The current state is the worst of both — `hàng` is a Hán-Việt Việt-hoá reading (Nguyễn Tài Cẩn 1979 stratum 3), not Nôm-native; the surface and IPA still carry it, but the `native` column was zeroed in some intermediate edit, leaving the row incoherent: a Nôm-column reading with no Nôm graph.
- **Why:** Either the round-1 apply for #46 #11 cleared `native.vi_nom` and then stopped, or a subsequent edit blanked the native cell. Compare 行:1 which fully populates `surface=đi / ipa=ɗi˧˧ / native=𠫾` — internally coherent. The remedy is to finish what #46 started: blank `surface.vi_nom` and `ipa.vi_nom` for 行:2 as well (or, alternatively, restore the native cell — but #46 already adjudicated against that path). Note: review #46 listed this as one of its 12 "policy/skip" items, so the policy decision may have explicitly carved 行:2 out — flagging so the next pass decides whether the half-blanked state is intentional. If intentional, it should be normalised: pick "all blank" or "all populated."

### 7. 來 — character key `来` (U+6765, simplified) persists despite #46 issue #20 noting it as the sole simplified key

- **Current:** `HAN_LIST` contains `"来"` (U+6765, simplified-Chinese form).
- **Expected:** `"來"` (U+4F86, traditional form used in Vietnamese imperial-era Hán-Nôm corpora).
- **Why:** Review #46 issue #20 flagged this as a list-level / character-key concern that affects the Vietnamese native column. The fix would change one entry in `HAN_LIST` and one top-level key in `HAN_DATA`. Every other character in the list is in its traditional form (龍 not 龙, 馬 not 马, 見 not 见, 飲 not 饮, 見 not 见). #46 round-1 left this as a non-applied finding (presumably because it would touch all 98 languages, not just Vietnamese). Flagging again because (a) it is genuinely cross-language and the Vietnamese reviewer is the natural advocate, (b) the Vietnamese surface row reads "Lai" for the character `来` which Vietnamese readers would not recognise from imperial-era texts — the reading attaches to 來.

### 8. 心 — `vi_ohan` slot empty; canonical OSV reflex *tim* (heart) not exposed

- **Current:** `surface.vi_ohan = undefined`, `ipa.vi_ohan = undefined`, `native.vi_ohan = undefined`.
- **Expected:** `surface.vi_ohan = "tim"`, `ipa.vi_ohan = "tim˧˧ < *səm"` (or simply `tim˧˧`).
- **Why:** Review #46 issue #18 proposed adding this. The round-1 apply was 17/29 edits; this one is in the skip bucket. Schuessler (2007) and Alves (2016) both list 心 → *tim* (heart, the organ) as a canonical Cổ Hán-Việt borrowing alongside Hán-Việt *tâm*. The pattern parallels: 月 → giăng (OHan) vs nguyệt (HV); 馬 → ngựa (OHan) vs mã (HV); 頭 → đầu (OHan) vs đầu/HV (which collapsed). The current vi_nom slot has *lòng* (a different Vietic native word for inside/feelings), so adding vi_ohan = *tim* does not displace anything.

### 9. 飲 — `vi` initial `ʔ` retained, all other vowel-initial vi cells lack `ʔ` (convention break)

- **Current:** 飲 `vi/vi_c/vi_s = ʔəm…`; 央 `vi = "ɨəŋ˧˧"`; 食 `vi_nom = "an˧˧"`; 飲 `vi_nom = "uəŋ˧˥"` (no `ʔ`).
- **Expected:** Pick one convention file-wide. Either (a) add `ʔ` to 央 vi/vi_c/vi_s + 食 vi_nom + 飲 vi_nom, or (b) drop `ʔ` from 飲 vi/vi_c/vi_s. Option (b) is one cell-cluster's worth of edits; option (a) is five.
- **Why:** This was flagged in #46 issue #10 as a decision-point that #46 explicitly punted to a later pass. It is now the next-pass. The current state — `ʔ` on 飲 *ẩm* only — is conventionally indefensible: Vietnamese vowel-initial syllables uniformly carry a phonetic glottal onset (Thompson 1965, Cao Xuân Hạo 1998), so either it is always phonemic (Thompson's analysis) or always sub-phonemic (Đoàn Thiện Thuật's analysis). Marking it for *ẩm* alone misleads readers into thinking the *ẩm* onset is somehow different.

### 10. Stop-coda diacritic `̚` (U+031A) sprinkled inconsistently across entering syllables

- **Current:** `̚` present on: 一 vi_nom *một* `mot̚`, 水 vi_nom *nước* `nɨək̚`, 土 vi_nom *đất* `ɗət̚`, 地 vi_nom *đất* `ɗət̚`, 虎 vi_nom *cọp* `kɔp̚`, 目 vi `muk̚`, 目 vi_c `muk̚`, 目 vi_nom *mắt* `mat̚`. **Missing** from: 目 vi_s `muk` (sibling!), 六 vi/vi_c/vi_s `luk`, 七 `tʰət`, 八 `ɓaːt`, 十 `tʰəp`, 日 `ɲət`, 月 `ŋwiət`, 木 `mok`, 足 `tuk`, 血 `hwiət`, 肉 `ɲuk`, 北 `ɓak`, 食 `tʰɨk`, 立 `ləp`, etc.
- **Expected:** Pick one convention. Either always mark stop-finals as unreleased (`̚`) or never. The intra-row 目 vi/vi_c (with `̚`) vs 目 vi_s (without) split is the clearest inconsistency — same coda, same etymon, three columns, two transcription conventions.
- **Why:** The unreleased-stop diacritic is a phonetic refinement: Vietnamese entering syllables are universally unreleased (Thompson 1965 §1.2, Đoàn Thiện Thuật 1977). Marking it on 6 entries while omitting it on 50+ peers makes the marked entries look phonologically special, which they are not. Same convention-break category as #9. Fix by sweeping `̚` onto all stop-final entries or stripping it from the eight cells above.

### 11. 央 / 東 / 西 / 南 / 北 / 行:2 — `vi_nom` cells stored as the em-dash literal `"—"` rather than empty / undefined

- **Current:** Six rows store `surface.vi_nom = "—"`, `ipa.vi_nom = "—"` (em-dash, U+2014). Three more `vi_ohan` cells (水, 天, 人, 飲) also use `"—"`.
- **Expected:** Match the bulk convention (`undefined` / key absent) used by 60+ other "not applicable" cells. The em-dash is a display sentinel that has leaked into the data layer.
- **Why:** Review #46 issue #16/#17 flagged the empty-string variant (`""`); the current data actually uses the em-dash glyph `—`, which is *worse* than empty string because it now sorts and renders as actual content. Downstream consumers (search, similarity calculations, CSV exports) will see `"—"` as a real Sino-Vietnamese reading. The hanmap.html renderer presumably special-cases em-dash to display as "—" anyway; the convention should be to store `undefined` and let the renderer emit the em-dash for missing values.

### 12. 目 — `vi_s` IPA `muk˨˩ʔ` drops both the creaky `ˀ` (no, ok for vi_s) AND the unreleased `̚` that vi/vi_c carry

- **Current:** `ipa.vi = "muk̚˧ˀ˨ʔ"`, `ipa.vi_c = "muk̚˨˩ʔ"`, `ipa.vi_s = "muk˨˩ʔ"` — vi_s alone lacks the `̚`.
- **Expected:** `ipa.vi_s = "muk̚˨˩ʔ"` (matching vi_c).
- **Why:** Sub-case of #10, called out separately because the inconsistency is intra-row (three columns of the same etymon). Southern Vietnamese preserves the unreleased-stop coda as much as Central does; if vi_c has `̚`, vi_s should too. This is the strongest single piece of evidence that #10 is a real defect rather than an authorial convention choice.

### 13. 右 — `vi_nom` native graph `沛` is plain Han (HV: bái/phái), not Nôm-specific

- **Current:** `native.vi_nom = "沛"` (U+6C9B).
- **Expected:** Either `𠰜` (U+20C1C) phải Nôm graph (Nguyễn Quang Hồng 2014 entry for *phải* 'right'), or annotate that 沛 is a phonetic-borrow Hán-graph reuse.
- **Why:** Task focus #1 calls for distinguishing Han-graph reuse from native Nôm. 沛 is plain Hán with HV reading *bái/phái* meaning 'abundant, copious' — phonetically borrowed into Nôm for *phải* 'right, must, suffer' on phono-similarity grounds. This is legitimate Nôm practice (phép phiên thanh, sound-loan), but it makes 右 vi_nom the **only** vi_nom cell in the file whose `native` slot is a plain Han character with no semantic re-purposing radical added (compare 渃 for nước = 水 + 若 phonetic — semantic-radical Nôm; 蹎 for chân = 足 + 真 phonetic — semantic-radical Nôm). 沛 has no such reformation. Either swap to the semantic-radical variant or document the loan strategy.

### 14. 来 — `vi_nom` native graph `𦤾` (U+2693E) is unusual for *đến*; corpus prefers `典` or `旦` (phono-borrows)

- **Current:** `native.vi_nom = "𦤾"`.
- **Expected:** `典` (U+5178, HV: điển, phono-borrow for *đến*) or `旦` (U+65E6, HV: đán, phono-borrow). The Nôm Foundation database lists both as primary; 𦤾 is rare-attested.
- **Why:** Task focus #1 (Unihan supplement check). 𦤾 (U+2693E, in CJK Ext B) is composed of 至 (semantic, "arrive") + 至 (redundant); the Unihan kIRG_VSource attestations for *đến* prioritise 典 in Truyện Kiều editions and 旦 in 19th-c. Buddhist texts. Lê Văn Quán 1981 §2.7 cites *đến* = 典 as the phono-semantic prototype. The 𦤾 attestation may be a hapax. Flagging as a lower-confidence finding; if the project source for vi_nom Nôm graphs is the VNPF database, verify which 来→đến entry was selected.

### 15. 五 / 耳 / 馬 / 右 — `vi` ngã IPA `˧ˀ˥` does not match the `˦ˀ˥`-style Hanoi descriptions in some sources

- **Current:** All four use `˧ˀ˥` (mid creaky rising).
- **Expected:** **Non-finding / cross-check confirmation.** #46 issue #2 fixed 馬 from `˦ˀ˥` (outlier) to `˧ˀ˥` (matches peers). The current state is uniform. Including this entry to **block** a future reviewer from "fixing" them back to `˦ˀ˥` on the basis of Nguyễn Đình-Hoà (1997) which uses `˦ˀ˥` (high-onset). The file convention is Thompson/Mineya `˧ˀ˥`; #46 ratified it.
- **Why:** Cross-check only. Do not edit.

### 16. 一 / 日 — `vi_s` surface uses dialect spelling (*Nhứt* / *Nhựt*) but the same-row Hán-Việt-only characters (e.g. 七 / 月 / 北) keep the standard

- **Current:** 一 vi_s `Nhứt` (dialect form, matches IPA), 日 vi_s `Nhựt` (dialect form, matches IPA). But 七 vi_s `Thất` (standard, NOT `Thớt` or similar dialect form), 北 vi_s `Bắc` (standard).
- **Expected:** **Non-finding / convention check.** #46 issue #8/#9 fixed 一 and 日 vi_s surface to match the native/IPA dialect forms. The remaining vi_s entries (七 *Thất*, 北 *Bắc*, etc.) are correct — Southern Vietnamese has no distinctive dialect form for those, so the standard spelling stands. The mixed-surface-convention is intentional: surface = "dialect form if one exists, otherwise standard."
- **Why:** Cross-check only. Do not edit. Including so the convention is documented for the next pass.

### 17. 來/来 — no `vi_ohan` despite being a candidate for Cổ Hán-Việt *lại* vs HV *lai*

- **Current:** 来 `vi_ohan = undefined` (all three columns).
- **Expected:** Consider adding `vi_ohan = lại / laːj˧ˀ˨ʔ` (the dialectal/literary form 'to come again') if the file's vi_ohan policy intends to capture older HV strata.
- **Why:** Lower-confidence finding. *lại* (with nặng tone) for 'to come, to return' is documented in Nguyễn Tài Cẩn (1979) as one of his "Hán-Việt cổ" stratum-2 entries, contrasting with stratum-3 *lai* (sắc tone, in compounds: *tương lai* 'future', *vãng lai* 'coming and going'). This would parallel the 月 → trăng/giăng split (modern HV vs Cổ HV). Flagging at low confidence because *lại* as an independent verb is more often analysed as Vietic.

### 18. 右 — `vi` ngã IPA `hɨw˧ˀ˥` uses simple `hɨw`, but `h` should arguably be `ɣ` (Hanoi *h-* origin)

- **Current:** `ipa.vi = "hɨw˧ˀ˥"`.
- **Expected:** **Non-finding / cross-check confirmation.** Hanoi *h-* in *hữu* is consistently /h/, not /ɣ/. The file is correct. Including only because some reviewers cite Pulleyblank's MC 右 \*ɦuwk and over-correct.
- **Why:** Cross-check only.

### 19. 上 — `vi_s` IPA `tʰɨːŋ˨˩˨` correctly monophthongises /ɨə/ → /ɨː/ (Southern); `vi_c` keeps /ɨə/

- **Current:** vi `tʰɨəŋ˧ˀ˨ʔ`, vi_c `tʰɨəŋ˨˩ˀ`, vi_s `tʰɨːŋ˨˩˨`.
- **Expected:** **Non-finding / cross-check confirmation.** Cao Xuân Hạo (1998) documents the Southern /ɨə/ → /ɨː/ monophthongisation; the file correctly captures it for 上 (and 羊, 央, 食 → no, 食 keeps /ɨk/). The Central column correctly preserves /ɨə/ (Huế conservatism).
- **Why:** Cross-check only. Note: this is *one* example of correctly-applied dialect phonology, in contrast with #10 (`̚` inconsistency) and #20 below (palatal-coda) where the same Southern shifts are mis-applied. The next pass can use 上 as the gold standard.

### 20. 行:1 — `vi_s` IPA `haɲ˨˩` retains palatal `ɲ` coda; true Saigon has velar `haŋ˨˩`

- **Current:** `ipa.vi_s = "haɲ˨˩"`.
- **Expected:** `ipa.vi_s = "haŋ˨˩"` (Southern velar-merger).
- **Why:** Review #46 issue #19 documented this as "closed with a caveat" — flagged as a known Hanoi-phonology-in-Southern-column data limitation. Re-opening to mark it as a genuine finding rather than a closed one: the sibling 行:2 vi_s correctly uses velar `haŋ˨˩`, so the inconsistency is now intra-row-pair (行:1 vs 行:2 in the same character group). Either fix 行:1 vi_s to velar or document why the same `行` character takes different Southern codas in its two senses (it doesn't — both senses share the same syllable phonologically; the split is purely a leftover from an earlier minimum-edit pass).

### 21. 聞 — `vi_s` IPA `jan˧˧` correctly shows Southern v→j; but `vi_c` `van˧˨` keeps /v/ — verify Huế behaviour

- **Current:** vi `van˧˧`, vi_c `van˧˨`, vi_s `jan˧˧`.
- **Expected:** **Non-finding / cross-check confirmation, with caveat.** Hoàng Thị Châu (1989) describes Huế as preserving /v/ (older labio-dental approximant /ʋ/, distinct from Saigon /j/ and Hanoi /v/). The file's vi_c `van˧˨` is acceptable as a simplification (Huế /v/ ≈ Hanoi /v/), but a strict Central transcription would use /ʋ/. Flagging at low confidence in case the next pass wants to add /ʋ/ as a third realisation.
- **Why:** Cross-check only.

### 22. 心 / 頭 — `vi_nom` IPA tones `lɔŋ˨˩` / `ɗəw˨˩` are huyền (low-falling); confirms native Vietic origin

- **Current:** 心 vi_nom = `lòng / lɔŋ˨˩`, 頭 vi_nom = `đầu / ɗəw˨˩`.
- **Expected:** **Non-finding / cross-check confirmation.** Both are Vietic-origin words with huyền tone (from Mon-Khmer *-h/*-ɦ codas, per Haudricourt 1954). Correctly transcribed. The 頭 vi_nom/vi_ohan IPA byte-identity (both `ɗəw˨˩`, vi_ohan adds `< *dô`) is the intended `< *LH-form` pattern.
- **Why:** Cross-check only. Including because the round-1 fix for #46 #18 (心 → tim) needs to coexist with the existing *lòng* — they are two different Vietic-stratum words for the same Han graph, and both belong in the data: *lòng* in vi_nom (general Nôm reading), *tim* in vi_ohan (organ-specific OHan reflex). See #8 above.

### 23. 七 / 八 / 北 — `vi` IPA tone `˧˥` (sắc, level) on -t/-k stops; peers 一 also `˧˥` — verify against Hanoi-entering convention

- **Current:** All four use `˧˥` (rising) for stop-final sắc; vi_c/vi_s use `˦˥` (high-rising).
- **Expected:** **Non-finding / cross-check confirmation.** Hanoi sắc on stop-finals is canonically `˧˥` (Thompson 1965); Central/Southern entering sắc is higher, `˦˥`. The file correctly applies the split. Distinguishing it from non-entering sắc (四 vi `˧˥`, vi_c `˨˩˧` per #46 issue #1) which has a different vi_c contour. The file's two sắc patterns are well-aligned.
- **Why:** Cross-check only. Documenting because the asymmetry (vi_c entering `˦˥` vs vi_c non-entering `˨˩˧`) looks like it could be a data error but is correct Central phonology.

---

## Summary of issue types

| Type | Count | Issue numbers |
|---|---|---|
| Hanoi nặng-stop creaky-onset `ˀ` outliers | 2 | #1 (日), #2 (月) |
| #46 round-1 apply residue (skip-bucket items) | 4 | #3 (中:2 vi_c ʈ), #4 (牛 vi_ohan no etymon tail), #5 (貓 vi_ohan byte-id), #8 (心 vi_ohan tim) |
| Half-applied #46 ACCEPT items | 1 | #6 (行:2 vi_nom half-blanked) |
| Cross-language list-level | 1 | #7 (来 simplified key) |
| Convention break (vowel-initial `ʔ`) | 1 | #9 |
| Convention break (stop-coda `̚`) | 2 | #10 (file-wide), #12 (目 vi_s intra-row) |
| Data hygiene (em-dash sentinel in data) | 1 | #11 |
| Nôm-graph quality (Han-borrow vs native Nôm) | 2 | #13 (右 沛), #14 (来 𦤾) |
| Southern phonology mis-applied | 1 | #20 (行:1 vi_s ɲ) |
| Possible vi_ohan addition (low confidence) | 1 | #17 (来 → lại) |
| Non-findings / cross-check confirmations | 5 | #15, #16, #18, #19, #21, #22, #23 (7 entries, several cells) |

**Highest-priority fixes (clear-cut typo or strict file convention break):**
- #1 (日 vi `ɲət˧˨ʔ` → `ɲət˧ˀ˨ʔ`)
- #2 (月 vi `ŋwiət˧˨ʔ` → `ŋwiət˧ˀ˨ʔ`)
- #3 (中:2 vi_c `ʈuŋ͡m˨˩˧` → `tʂuŋ͡m˨˩˧`)
- #6 (行:2 vi_nom: blank all three or fully restore)
- #12 (目 vi_s `muk˨˩ʔ` → `muk̚˨˩ʔ`)

**Secondary fixes (#46 residue ready to land):**
- #4 (牛 vi_ohan add `< *ŋʷə` tail)
- #5 (貓 vi_ohan add `< *mæu` tail)
- #8 (心 vi_ohan add *tim* row)

**Decision-point fixes (file-wide convention calls):**
- #9 (vowel-initial `ʔ` — five-cell add vs one-cluster strip)
- #10 (stop-coda `̚` — sweep on or sweep off)
- #11 (em-dash literal — normalise to undefined)
- #7 (来 → 來 — list-level, cross-language)

**Lower-confidence / corpus-dependent:**
- #13 (右 沛 Nôm-graph quality)
- #14 (来 𦤾 Nôm-graph attestation)
- #17 (来 → vi_ohan *lại*)
- #20 (行:1 vi_s ɲ → ŋ, re-opening #46 closed item)

---

**File path:** `/home/jounlai/langmap/hanmap_reviews/60_open.md`
**Finding count:** 23 (12 actionable findings + 7 cross-check confirmations + 4 lower-confidence / corpus-dependent items)


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 23
- **policy/skip**: 11
- **headline**: 日/月 vi creaky ˀ ×2, 中:2 vi_c ʈ→tʂ, 行:2 vi_nom native →—, 目 vi_s ̚ unreleased, em-dash literals→null 18 cells (vi_nom 5 chars + vi_ohan 4 chars)
- **JSON**: /tmp/hm_edits_60.json
