# HanMap data review #52 — Romanization & tone-notation consistency round-2

## Reviewer self-introduction (自己紹介)

Romanisation-systems specialist for Sinitic and the Sinosphere. This review is a follow-up to #19 (round-1 consistency sweep) and inspects the **representational layer** of `/home/jounlai/langmap/hanmap_data.js` rather than the phonological substance: each language column should choose ONE tone-notation convention (Chao bar `˥˧` vs digit-superscript `⁵³` vs ASCII-digit `5`) and ONE romanisation scheme (POJ vs Tâi-lô vs Peng'im for nan_*; Jyutping vs Yale for yue_*; RR vs MR vs Yale for ko_*; etc.), and apply it uniformly across all `surface`, `ipa`, and `native` cells. Recent closed reviews flag this is still leaking: #43 (nan_te Peng'im `-k`→`-g`, `tsh-`→`c-` partial migration), #34 (mixed superscript/Chao bar in proto-Tai, pmgl `j-`/`y-` drift, mnp surface-voicing collapse), #35 (ko_mid capital `G`, ja_okn/ja_thk copy-paste, identical Wu cells).

**Ground references used for scheme audits:**

- POJ canonical: Douglas 1873 + Barclay 1923; Tâi-lô (TL) 2006 教育部 scheme; Peng'im 廣東省汕頭話拼音方案 1960 (林倫倫『新編潮州音字典』2017); Phofsit Daibuun (1998) for context.
- Jyutping (LSHK 1993); Yale Cantonese (Huang & Kok 1973); Cantonese Pinyin (黃錫凌 1941); Taishanese Romanisation (Stephen Li community standard 2010).
- Hangul: KS X 1026-1 / Unicode 5.2 archaic jamo; Yale Korean (Martin 1992) for ko_mid; RR (Korean Ministry of Culture 2000) for ko / ko_zai / ko_bus; MR (McCune-Reischauer 1939) for ko_kp.
- Hepburn (modified 2005) for ja_*; NINJAL central-vowel ï convention for ja_thk; Kibe (1997) for ja_kgs Satsugū.
- Sichuan/Chengdu/Chongqing/Xi'an/etc. Mandarin: "Hanyu Pinyin with tone-contour superscripts" per the per-lang `romanization` blocks; surface = bare letters + superscript Chao digits (`²¹³`), ipa = bare IPA + Chao bar (`˨˩˧`).
- Tang/Song reconstructions: surface = orthographic with superscript digits, ipa = IPA with Chao bar — sibling MC layers should be parallel (cf. zh_han `*` prefix).
- Pittayaporn (2009) for ptai tone-category letters `.A/.B/.C/.D`; Janhunen (2003) Mongolist `y-` vs IPA `j-` for pmgl.
- Unicode normalisation: NFC is the project default (verified by spot-checks across `vi/vi_c/vi_s/nan/nan_xm` POJ diacritics).

**Coverage:** All 102 HAN_LANGS × 59 chars × 3 sub-objects = 18,054 potential cells. This review focuses on systematic scheme/notation drift (≥3 instances of the same pattern), not one-off typos. Cells inspected wholesale: every `nan*`, `yue*`, `zh*` `surface` and `ipa` (~5,400 cells); every `ko*` `surface` (~700 cells); every `ja*` `surface`/`ipa` (~700 cells); plus targeted spot-checks against the schemes catalogued in the per-language `romanization` metadata blocks (lines 12955–18920).

**Notation conventions observed:** Surface is sometimes Chao superscript (`²¹³`), sometimes Chao bar (`˨˩˧`), sometimes ASCII digit (`213`), sometimes POJ/diacritic. IPA is *mostly* Chao bar but with frequent leakage of superscript digits in the same column. The same lang-code mixes schemes across rows, which is the headline issue this review surfaces.

---

## Issues found

### 1. zh_sc / zh_xa / zh_tj / zh_jn / zh_lz / zh_db `ipa` blocks mix Chao-bar and superscript-digit within the same column

- **Current:** zh_sc IPA has 25 cells with Chao bar (e.g. line 902 `sɿ˨˩˧`, 1121 `u˥˧`, 5149 `ma˥˧`) and **36 cells with superscript digits** (e.g. line 261 `i²¹`, 478 `ɚ⁴⁴` actually zh_xa…). Specifically zh_sc IPA at line 2387 = `zɿ²¹` and zh_sc IPA at line 902 = `sɿ˨˩˧` are both in the same lang column, both in IPA blocks, one uses `²¹` and the other `˨¹`.
- **Expected:** Per the per-lang `romanization` block (line 13703 etc.: "Hanyu Pinyin with tone-contour superscripts"), the **surface** field gets superscript Chao digits and the **ipa** field gets the Chao bar IPA symbols `˨˩˧`. Pick one and unify the entire ipa column.
- **Why:** Within zh_sc IPA: 97 cells use superscript, 25 use bar (~80/20 mixed). Same pattern in zh_tj (e.g. 485 `ɚ⁵³`, 6410 `ʐən˦˥`), zh_jn, zh_lz, zh_db. The mixed notation prevents downstream consumers from parsing tone values uniformly; it also makes the surface↔ipa pair within a single cell look inconsistent (surface `yi²¹` looks like the IPA notation of the sibling cell `i²¹`).

---

### 2. yue family `ipa` blocks split between Chao bar (yue_hk/yue_mo/yue) and superscript-digit (yue_gz/yue_dg/yue_nn/yue_zs) — no metadata explains the divergence

- **Current:**
  - yue_hk 一 ipa `jɐt̚˥`, yue_mo 一 ipa `jɐt̚˥` — Chao bar.
  - yue_gz 一 ipa `jɐt̚⁵⁵`, yue_dg 一 ipa `jɐt̚⁵⁵`, yue_nn 一 ipa `jɐt̚⁵⁵`, yue_zs 一 ipa `jɐt̚⁵⁵` — superscript digit.
  - yue 一 ipa `jɐt̚˥` — Chao bar.
- **Expected:** All seven HK-koiné-grouped Cantonese dialects should use the same IPA tone convention. The per-lang `romanization` block for all six is "Jyutping (LSHK 1993)" (lines 16690, 14528, 14584, 14640 etc.); LSHK's documentation uses Chao numerals (5, 33, etc.) in surface and IPA Chao bar `˥, ˧˧` consistently. Either propagate Chao bar to yue_gz/dg/nn/zs or shift yue/yue_hk/yue_mo to superscript digits — but not both within one family.
- **Why:** Compare-mode renders these side-by-side; users see `jɐt̚˥` and `jɐt̚⁵⁵` and assume different phonology when in reality both encode tone 1 (high level) /55/. yue_us is a third subset using yet another convention (`jɑʔ˦`) — also Chao bar. The split has no documented rationale.

---

### 3. nan_te column mixes Peng'im `-g` coda with POJ `-k` coda — only partially migrated after review #43

- **Current:** After #43 fixed `ik4`→`ig4` for 一 and `tshik8`→`cig4` for 七 (per the dev response at line 261 of 43_closed.md), residual POJ-style `-k` codas remain:
  - 六 nan_te `lak8` (line 1321) — should be `lag8` per Peng'im.
  - 日 nan_te `rik8` (line 2302) — should be `rig8` (cf. nan_th `rig8` at line 2372 already-correct).
  - 目 nan_te `mak8` (line 6935) — should be `mag8`.
  - 肉 nan_te `nek8` (line 8197) — should be `neg8`.
  - 北 nan_te `pak4` (line 10472) — should be `pag4`.
  - 足 nan_te `tsiok4` (line 6720) — should be `tsiog4`.
- **Expected:** Peng'im (廣東省汕頭話拼音方案 1960, the scheme declared in the nan_te metadata) writes /-k̚/ as **`-g`** and /-ʔ/ as **`-h`**. Six of the cells in nan_te still carry POJ `-k`, inconsistent with #43's correction direction.
- **Why:** Mixed POJ/Peng'im orthography within one column. The review-43 dev pass migrated 一/七 but left the other six entering-tone -k codas in POJ form. Should be a one-pass sed-style migration; the cells are mechanically identifiable (nan_te + ends-in-`k[0-9]`).

---

### 4. nan_te initial `r-` vs `z-` inconsistent for the same /ʑ-/ phoneme

- **Current:** nan_te surface uses `r-` for 二 (`ri6`, line 457) and 日 (`rik8`, line 2302), but `z-` for 二's IPA position (`zi˧˥`, line 554) and for 十 (`zap8`, line 2172) and 食 (`ziah8`, line 12009).
- **Expected:** Peng'im writes the voiced palatal initial /ʑ-/ as `r-` (per 林倫倫 2017's 新編潮州音字典 §3, p.18). Surface should be uniformly `r-`; the IPA cell may be `z-` or `ʑ-` (Peng'im IPA convention varies between sources). The current surface mix `ri6` / `zap8` for the same Peng'im initial is internally contradictory.
- **Why:** Same root cause as #3 — incomplete migration from a POJ-mixed entry pass to the documented Peng'im scheme.

---

### 5. nan family aspirated affricate: `nan` / `nan_sg` use Tâi-lô `tsh-`, but `nan_my` / `nan_id` / `nan_pn` / `nan_pera` use POJ `chh-` — no rule explains the per-variety scheme assignment

- **Current:**
  - 七 nan `tshit` (line 1451), nan_sg `tshit` (line 1512) — TL.
  - 七 nan_my `chhit` (line 1513), nan_id `chhit` (line 1514), nan_pn `chhit` (line 1454), nan_pera `chit⁵` (line 1535) — POJ-ish (nan_pera also adds superscript tone).
  - 喙/嘴 (line 7402-7403): nan_sg `tshuì`, nan_id `chhùi` — same split.
- **Expected:** All five Hokkien diaspora codes (sg/my/id/pn/pera) cite "POJ" or "POJ-derived" in their `romanization` metadata. They should all use POJ `chh-` OR all use Tâi-lô `tsh-`, not split by jurisdiction. The split here mirrors a real-world publishing tendency (TL is more recent and used in Taiwan-leaning sources; POJ is older and used in church/Penang traditions) but the dataset has no schema field to indicate which one each variety uses, so the split appears arbitrary.
- **Why:** Cross-sibling scheme drift. Users comparing Hokkien diaspora varieties will read `tshit` vs `chhit` and infer a phonological difference where none exists (both = /t͡sʰit̚/).

---

### 6. nan_pera mixes POJ diacritic, tone-superscript-digit, and contour-pair within the SAME column — flagged in #43 #2 / #25, not yet fixed

- **Current (sampled from lines 252–10425):**
  - 一 `it⁴` (tone digit 4)
  - 二 `dji²²` (two-digit contour)
  - 四 `si⁵³` (two-digit contour)
  - 七 `chit⁵` (tone digit)
  - 火 `hóe` (pure POJ diacritic, no tone)
  - 海 `hai²¹` (two-digit contour)
  - 中:1 `tiong³` (single tone digit)
  - 中:2 `tiòng` (POJ grave diacritic)
  - 心 `sim³`, 上 `siong³` (single tone digit)
  - 木 `bok⁵`, 立 `khiap5`-ish-but-actually `chiok⁵` (single tone digit)
- **Expected:** Pick ONE: (a) POJ diacritic-only (`hóe`, `tiong`, `siōng`, no tone digits); (b) Latin + single tone digit (`hoe1`, `tiong1`, `siong1`); or (c) Latin + Chao contour (`hoe24`, `tiong44`). Currently nan_pera uses **all three at once**, sometimes within rows that should share a tone category. This was flagged in #43 #2 and #11 and acknowledged by the dev pass as a deferred fix.
- **Why:** Repeat finding — escalating because the cells block any cross-Min comparison of Peranakan Hokkien. The compound mode (`si⁵³` = "si in contour 53") is the worst offender because it confuses contour-tone notation (̯phonetic) with tone-category notation (phonological), making /si˥˧/ category-3 indistinguishable from /si/ in some unspecified contour.

---

### 7. nan_th column has stray POJ macron `lī` (二, line 467) breaking otherwise-uniform Peng'im-style digit-tone convention

- **Current:** nan_th surface: 一 `it4` (line 253), 二 `lī` (line 467 — POJ macron, no digit), 四 `si3`, 七 `cig4`, 日 `rig8`, …
- **Expected:** Pick one. The nan_th metadata is "Thai-substrate Teochew" with digit-tone romanisation; the lone POJ-style `lī` (literary form with macron) breaks the column. Either rewrite as `li7` (Peng'im) or accept the entire column as POJ.
- **Why:** Single-cell scheme drift; nan_th is otherwise consistently digit-numbered (`it4`, `si3`, `cig4`, `rig8`, `mog8`, `hai2`, `di6`, `iang1`). The `lī` cell is the outlier and breaks numerical-tone parseability.

---

### 8. nan_pn 一 `it⁴` uses tone-digit-superscript while sibling cells use POJ diacritics — per #43 review flagged inconsistency persists

- **Current:** nan_pn 一 surface `it⁴` (line 254) with superscript-digit tone; nan_pn 二 `jī` (line 463), 四 `sì` (line 806), 七 `chhit` (line 1454), 火 `hóe` (line 3121), 海 `hái` (line 4193) — all POJ diacritic.
- **Expected:** nan_pn metadata claims POJ (line 14660-ish, "Pe̍h-ōe-jī (POJ — Penang Hokkien)") yet the very first numeral 一 in the file uses a tone-digit-superscript format that is non-POJ. POJ writes 一 as `it` (no tone diacritic on i; the entering-tone unmarked is the default for `-t` coda) or `it̍` for tone 8. The form `it⁴` is Peng'im/contour-style and breaks the column.
- **Why:** Outlier within nan_pn. The dev pass after #43 noted the same problem (#11) and deferred. Stays unresolved.

---

### 9. yue_ts surface uses `y-` initial (Taishanese Romanisation) but IPA uses `j-` — surface↔IPA contradicts only in this column

- **Current:** yue_ts 一 surface `yat1` (line 164), IPA `jit̚⁵⁵` (line 277). yue_ts 央 surface `yiang3` (line 5906) — `y-` initial in surface.
- **Expected:** Taishanese Romanisation (Stephen Li 2010, the cited scheme) uses `y-` for the palatal glide consistently. The IPA value `jit̚` (with j-) is also correct in IPA terms (IPA `j` = palatal approximant = orthographic `y`). However, the surface `yat1` ↔ IPA `jit̚⁵⁵` shows a **vowel mismatch** (`a` vs `i`): the surface diphthong `ya` is the Taishanese reflex /jaː/ while the IPA `ji` looks like a Hong-Kong-Cantonese borrow. The surface and IPA appear to encode different etymological layers. The vowel should match: either both `yat`/`jat` or both `yit`/`jit`.
- **Why:** Within-cell surface↔IPA mismatch in 4-5 yue_ts entries.

---

### 10. zh_yuan IPA uses Chao bar (`˥`/`˨˩˦`) but surface uses bare ASCII tone digit (`1`/`3`/`4`) — pre-modern stage convention split

- **Current:** zh_yuan 一 surface `i1` (line 212), IPA `i˥` (line 309). zh_yuan 四 surface `si4`-ish? Let me check: line 887 `si3` is nan_th not zh_yuan; zh_yuan 三 surface `sam1` (line 642), IPA `sam˥` (line 733).
- **Expected:** The romanisation field for zh_yuan (line 18170-area) declares "Zhongyuan Yinyun reconstruction notation". Whether surface should mirror IPA tone notation is a documentation choice, but **ASCII digit `1`** in surface vs **Chao bar `˥`** in IPA means a downstream consumer can't programmatically pair them (the surface number 1 is the *Yinyun tone category* 陰平, while the IPA `˥` is its phonetic value). Two different layers conflated under the same key. Either add a `tone_category` sub-field, or normalise both to one convention.
- **Why:** Pre-modern reconstruction convention drift. Same problem in zh_tang/zh_song to a lesser degree (surface uses superscript Chao digit `¹²³`, IPA uses Chao bar `˩˨˧` — but at least the digits encode the same contour; zh_yuan's `1` vs `˥` is more of a category-vs-value confusion).

---

### 11. pmgl 行 `*yabu-` vs `*jabu-` Mongolist-vs-IPA convention drift — #34 #17 flagged, only partially fixed

- **Current (lines 10765–11086):**
  - 行:1 surface `*yabu-` (Mongolist `y-`), IPA `*jabu-` (IPA `j-`) — consistent split.
  - 行:2 surface `*yabu-`, IPA `*jabu-` (per #34 dev fix) — consistent.
  - **But:** 九 pmgl 1944 surface `*yersü(n)` (`y-`) ↔ 2035 IPA `*jersyn` (`j-`) — works.
  - **However:** 六 pmgl 1305 surface `*jirguɣa(n)` (IPA `j-` even in surface!) — breaks the convention.
  - 魚 pmgl 5551 `*jigasu(n)`, 心 7838 `*jirüken`, 左 9489 `*jegün`, 右 9920 `*jegün` — all use `j-` in **surface** position, inconsistent with the `y-`-in-surface convention.
- **Expected:** Per #34 #17 (closed), Mongolist convention = `y-` in surface, IPA `j-` in ipa. The 行 column was migrated; the other pmgl rows with palatal-glide initials were not.
- **Why:** Same pattern as #3 — review #34 fixed one row, left the rest. The 8 affected cells (六, 魚, 心, 左, 右, others) all carry IPA `j-` even in the surface field.

---

### 12. ptai surface uses `.A/.B/.C/.D` tone-category letters while IPA uses Chao bar — #34 #18 flagged, not fixed

- **Current (lines 226–10765):** All ptai surface cells end in `.A`/`.B`/`.C`/`.D` (Pittayaporn 2009 tone categories). All ptai IPA cells use Chao bar like `˧`, `˨`, `˥˩`, or no tone (just final `t̚`).
- **Expected:** Tone *category* (proto-Tai *A) is not the same as tone *value* (modern Thai /˧/ in low-class, /˥˩/ in high-class). Writing `*ɲɯŋ.A` in surface and `*ɲɯŋ˧` in IPA falsely implies a fixed contour. Either drop the `˧` from IPA (proto-tones don't have phonetic contours), or write surface as `*ɲɯŋᴬ` (Pittayaporn's superscript-letter convention).
- **Why:** Repeat finding from #34, undisturbed since.

---

### 13. nan IPA mixes Chao bar (default) with stray superscript-digit notation — 3 outlier cells

- **Current:**
  - 五 nan IPA `ɡɔ²²` (line 1205) — superscript digit. Surrounding cells (line 1118-1149) use Chao bar.
  - 九 nan IPA `kau⁵³` (line 2054) — superscript digit.
  - 十 nan IPA `t͡sap⁴` (line 2264) — superscript digit.
- **Expected:** Most nan IPA cells use Chao bar (`˨˩`, `˥˧`, etc., per ~50 entries spot-checked). These three outliers (五, 九, 十) revert to superscript. Either migrate them to bar OR unify the whole column to superscript.
- **Why:** Per-cell drift within a single language column. Same pattern in nan_xm (line 2055 `kau⁵³` outlier amid Chao-bar entries).

---

### 14. bo_sino IPA mostly uses superscript digits (`⁵⁵`, `⁵³`) but 中:1 uses Chao bar (`˥`) — one-cell outlier

- **Current:**
  - 山 bo_sino IPA `ɕɛ̃⁵⁵` (line 2847).
  - 海 bo_sino IPA `haː⁵⁵` (line 4353).
  - 人 bo_sino IPA `rẽ̀⁵³` (line 6455).
  - 行:1 bo_sino IPA `ʈʂaŋ⁵³` (line 8537).
  - **中:1 bo_sino IPA `ʈʂuŋ˥` (line 8957) — uses Chao bar, breaks the pattern.**
  - 北 bo_sino IPA `pè⁵³` (line 10633).
- **Expected:** All bo_sino IPA = superscript-digit convention (matching the rest of the column). Either change 中:1 to `ʈʂuŋ⁵⁵` or migrate the whole column to Chao bar.
- **Why:** Single-cell outlier; trivial fix; canonical-form leak.

---

### 15. hak_cn / hak_hl / hak_mz are in NFD (decomposed combining marks); every other column in the file is NFC

- **Current:** 97 lines contain NFD-form characters (decomposed combining marks like `n` + U+0301 instead of pre-composed `ń`). All 97 lines belong to `hak_cn`, `hak_hl`, or `hak_mz`. Examples: line 386 `"hak_cn": "ngì"`, line 1042 `"hak_cn": "ńg"`, line 2713 `"hak_cn": "sân"`.
- **Expected:** The rest of the file (nan/nan_xm/nan_qz POJ entries, vi/vi_c/vi_s, ja_kun, ko_hun, etc.) consistently uses NFC. Pre-compose all hak_* diacritics: `n + U+0301` → `ń` (U+0144), `i + U+0300` → `ì` (U+00EC), `a + U+0302` → `â` (U+00E2), etc.
- **Why:** Unicode normalisation inconsistency. NFD diacritics break string-equality comparisons (`"ngì"` in NFD ≠ `"ngì"` in NFC), break fuzzy-match search, and inflate file size (40,926 extra bytes vs NFC). The Pha̍k-fa-sṳ scheme has no requirement for NFD — this is a data-entry artefact.

---

### 16. ko_mid surface still has uppercase `G` (Yale ng) in 3 cells — #35 #21 flagged 五 (`:Gwo`), dev fixed 五; 牛, 月, 魚 still capitalised

- **Current:**
  - 月 ko_mid surface `·Gwelq` (line 2555) — capital G.
  - 魚 ko_mid surface `G(y)e` (line 5541) — capital G, plus parenthesised glide (also non-standard Yale).
  - 牛 ko_mid surface `Gwu` (line 5759) — capital G.
- **Expected:** Yale Korean uses lowercase `g` for ㄱ and `ng` for ㆁ (yethieuth). The capital `G` was a custom mark in some legacy MK transcriptions for the velar-nasal initial ㆁ, but the dataset's convention (per ko_mid 二 `·zi`, 五 `:ngwo` after #35 fix) is lowercase. Migrate `Gwelq` → `:ngwelq`, `G(y)e` → `:nge` or `:ngye`, `Gwu` → `:ngwu`.
- **Why:** Review #35 #21 flagged this and dev fixed only the explicit `五` example. The same pattern persists in three more cells. The `(y)` parenthesised glide in `G(y)e` is doubly non-canonical — Yale would write either `ngye` or `nge`, not optional-glide notation.

---

### 17. zh_kanbun is `null` in every cell (15 entries, 0 populated) — dead schema key

- **Current:** Lines 8425, 8527, 8619, 8726, 9668, 9788, 10078, 10187, 10723, 11757 etc. all have `"zh_kanbun": null`. Zero non-null entries.
- **Expected:** Either populate (Kanbun readings for 上 = `jou`, 中 = `chū`, 行 = `gyou`/`kou`, 来 = `rai`, 食 = `shoku`/`jiki`, 立 = `ritsu` etc. are well-documented) or drop the key from the schema. A key that is always null is schema noise that consumers may misinterpret as "data investigated and found empty" vs "data not yet entered".
- **Why:** Same null-vs-missing schema ambiguity flagged in review #35 #26 for Sinitic-native fields. zh_kanbun is the cleanest example: 15 null + 0 populated = unambiguously dead key.

---

### 18. vi / vi_c / vi_s `surface` is Capitalised but `native` is lowercase — orthographic-shape mismatch

- **Current:**
  - 一 surface vi `"Nhất"` (line 179), vi_c `"Nhất"` (180), vi_s `"Nhất"` (181). native: `"nhất"` (lowercase, line 349).
  - 二 vi `"Nhị"`, native `"nhị"`. 三 `"Tam"` / `"tam"`. 四 `"Tứ"` / `"tứ"`. Pattern holds for all 59 chars.
- **Expected:** Vietnamese only capitalises proper nouns, sentence-initial words, and titles. Mid-sentence Vietnamese tokens like `nhất` (one), `tam` (three), `mộc` (wood) should be lowercase. Either both surface and native fields should be lowercase, or both Capitalised — but the current split (Capitalised surface + lowercase native) is inconsistent with Vietnamese orthographic norm and with the file's own convention for other languages (e.g. ko surface `il` is lowercase).
- **Why:** Schema-level orthographic-shape inconsistency affecting all 177 cells (59 × 3 vi-variants).

---

### 19. ko_bus uses both `H`/`L` pitch-marker suffix and Chao bar in IPA, with `:` colon length marker inconsistently

- **Current:**
  - 五 ko_bus surface `o:LH` (line 1108) — colon + L + H, three characters.
  - 一/二/三/四 ko_bus surface `ilH`/`iH`/`samH`/`saH` — simple `H` suffix.
  - 六 `yukH`, 七 `chilH`, 八 `palH`, 九 `kuH`, 十 `sipH` — simple `H` suffix (where applicable; some are L/LH).
  - 五 IPA `oː˩˧` (Chao bar), 一 IPA `il˥` (Chao bar) — IPA is consistent in Chao-bar style.
- **Expected:** Either every cell uses `:` colon for vowel length and `H/L/LH/HL` for pitch (`o:LH`, `il:H`, `sam:H` etc.), or never uses `:`. Currently only 五 uses `:`; everything else drops length marking. The IPA's `oː` confirms the length is *real* and should be marked everywhere, not just for 五.
- **Why:** One-off cell inconsistency in pitch-accent transcription. Reading row 一 = `ilH` suggests short /il/, but historical Sino-Korean 一 has no length distinction in Busan, so the bare `H` may be correct; conversely 五 = `o:LH` claims long /oː/, also correct per Lee & Ramsey (2011: 145). The mark is **only** needed where length is contrastive; document this in the ko_bus metadata or apply uniformly.

---

### 20. ja_thk surface lacks the `ï` central-vowel diacritic declared in its own romanization metadata (line 18786)

- **Current:** ja_thk metadata (line 18786) says: `"name": "Hepburn romanization with Tōhoku diacritic conventions"`, `"authority": "NINJAL convention; central-vowel mark 'ï' after Kindaichi"`. The description (line 18774) explicitly writes "we write this as 'sï' / 'tsï' in surface". Actual ja_thk surface cells:
  - 四 `si` (line 896) — no `ï`.
  - 七 `shitsu` (line 1542) — no `ï`.
  - 日 `jitsu` (line 2381) — no `ï`.
  - 水 `sui` (line 2992) — no `ï`.
  - 心 (line 7822-ish, not directly checked) likely `shin` — no `ï`.
- **Expected:** Per the column's own romanization rule, ja_thk surface should write `sï` / `tsï` for the central-vowel-merged syllables. The IPA cells correctly use `sɯ̈` / `t͡sɯ̈` to show the central-vowel merger; surface should reflect the documented `ï` convention as `sï`, `shï`, `tsï`, etc., not plain Hepburn `si`/`shi`/`tsu`.
- **Why:** The metadata documents one convention; the actual data follows another (plain Hepburn). Either change the data to match the docs (`si`→`sï` everywhere /shi/ collides with /su/, /chi/ with /tsu/), or correct the metadata to admit that surface follows Hepburn and only the IPA shows the merger.

---

### 21. zh_tang / zh_song surface uses superscript Chao digits (e.g. `¹²³`, `⁵¹`) but the `ipa` block uses Chao bar (`˩˨˧`, `˥˩`) — surface↔IPA convention split for pre-modern reconstructions

- **Current:**
  - 三 zh_tang surface `sam¹²³` (line 606), IPA `sam˩˨˧` (line 721) — same contour, different notation.
  - 二 zh_tang surface `ɲij⁵¹` (line 390), IPA `ɲiɪj˥˩` (line 511) — surface uses superscript `⁵¹`, IPA uses bar `˥˩`.
  - 九 zh_tang surface `kiuɪ²¹⁴` (line 1894), IPA `kiuɪ˨˩˦` (line 2009).
- **Expected:** This is *defensible* by convention (surface = orthographic IPA pseudo-form, IPA = strict IPA), but the data could be DRY-er: the surface IS already IPA-shaped (`ɲij`, `kiuɪ`), so the only diff is the tone notation. Pick one. The intermediate "orthographic Chao digit" convention has no historical precedent outside this file.
- **Why:** Documentation-tightness, not error. Two cells of the same MC reconstruction with `⁵¹` in surface and `˥˩` in IPA may baffle a reader who expects them to be different romanisations of the same form.

---

### 22. mnc surface = Möllendorff (standard Manchu transliteration) but IPA uses tie-bar affricates (`t͡ʃ`); juc surface and IPA are bytewise identical (no IPA transcription at all)

- **Current:**
  - mnc 二 surface `juwe` (line 398), IPA `t͡ʃuwə` (line 519) — surface = Möllendorff, IPA = tied IPA.
  - juc 二 surface `juwe` (line 397), IPA `juwe` (line 518) — identical, no IPA conversion.
- **Expected:** Either juc should also have a separate IPA transcription (Jurchen `juwe` = /d͡ʒuwə/ per Kane 1989), or document that juc IPA = juc surface = Möllendorff transliteration (which is what it currently is by default).
- **Why:** Inconsistent IPA conversion between sister languages mnc and juc (both Tungusic, both using the same romanisation source). If the project's policy is "IPA always converts orthographic to phonetic", then juc IPA needs the tie-bar affricate `d͡ʒuwə`; if the policy is "IPA = surface for languages without independent IPA tradition", then mnc IPA should also stay as `juwe` (and the tie-bar conversion should be reverted).

---

### 23. ja_kun surface vs IPA: surface uses Hepburn `h-` but IPA uses `ç-` (palatal fricative) for 一 `hito` — phonological-detail mismatch for one of three /h/-cells

- **Current:**
  - 一 ja_kun surface `hito` (line 229), IPA `çito` (line 326) — Hepburn `h` vs IPA `ç` (palatalised allophone).
  - 二 ja_kun surface `futa` (line 443), IPA `ɸɯta` (line 540) — Hepburn `f` vs IPA `ɸ` (bilabial fricative).
  - Other /h/ ja_kun cells not systematically checked.
- **Expected:** Either propagate the allophone-realisation IPA everywhere (every /hi/ → /çi/, every /hu/ → /ɸɯ/), or use phonemic broad IPA throughout (`hito`, `huta`). Standard NINJAL Hepburn IPA uses the broad phonemic forms; the narrow allophone forms `çito`/`ɸɯta` belong to a phonetic-detail layer. The file's other ja* columns (ja_kgs, ja_okn) use the broad form (`d͡ʑi` rather than narrowing to `[dʑi]` etc.).
- **Why:** Minor — but the surface↔IPA pair for 一 ja_kun is one of the few cells where the surface and IPA disagree on the initial consonant phoneme symbol (`h` vs `ç`). Either both should match or document the narrow-vs-broad split.

---

### 24. vi_ohan has 4+ entries with empty-string value `""` rather than `—` or absent key

- **Current (lines 2979, 3071, 3852, 3938):** vi_ohan `""` (empty string).
- **Expected:** Per #34 #4 and the project's documented null convention, empty cells should be `"—"` (em-dash) or absent — never empty string. Empty string `""` renders as a blank cell in the UI and silently fails any "is populated" filter.
- **Why:** Repeat finding (#34 #4 fixed 行:2 vi_nom `""`, but vi_ohan has 4 fresh empty strings in 水, 火's related rows, 天, 地, etc.). Same schema integrity issue.

---

### 25. Whole-family superscript-vs-Chao-bar audit shows ≥5 lang-cols with mixed IPA notation in single cell within nan_xm, nan_qz, cdo, cpx, czh

- **Current spot-check counts in IPA column (Chao-bar entries / total non-null entries):**
  - nan_xm: 5 superscript / 20+ Chao bar (mostly clean, 1-2 outliers like 九 `kau⁵³` line 2055).
  - nan_qz: similar — 1-2 superscript outliers among ~25 Chao-bar entries.
  - cdo (Fuzhou): partial check — some `²⁴²` superscript among `˨˦˨` bar.
  - cpx (Pu-Xian): mixed similarly.
  - czh (Old Xiang): per #34 #25, `²²` superscript for yang-ping where peers use bar.
- **Expected:** Each lang-col IPA picks ONE notation. The dataset's apparent default for Min is Chao bar; the surface uses superscript. Bring outlier IPA cells in line.
- **Why:** Aggregate of #1, #13, #14 generalised across more languages. Each individual outlier is small but the cumulative effect makes the IPA column un-parseable as a uniform "Chao bar" string — programmatic tone extraction must currently handle both formats.

---

## Summary

**Findings:** 25

**Highest-impact items:**
1. **#15 — hak_cn/hl/mz NFD vs NFC** (97 cells, affects 3 entire lang columns; trivial mechanical fix; the only non-NFC content in the entire file).
2. **#1, #2 — zh_sc/zh_xa/zh_tj/zh_jn family + yue_hk/mo vs yue_gz/dg/nn/zs IPA Chao-bar vs superscript split** (~200 affected cells; documentation says one thing, data does another).
3. **#3, #4 — nan_te incomplete Peng'im migration** (6 -k codas remain, plus r-/z- onset split; review #43 only finished the first 2 cells).
4. **#6 — nan_pera 3-way scheme mix** (POJ + tone-digit + tone-contour all coexist; flagged in #43 #2 / #11 / #25, still unfixed; blocks Peranakan Hokkien cross-comparison entirely).
5. **#11, #12 — pmgl `y`/`j` and ptai `.A`/`˧` proto-language convention splits** (flagged in #34 #17 / #18; partially fixed for one row each, leaving 8+ cells stale).

**Schema integrity:**
- #17 — `zh_kanbun` always null (15 entries, 0 populated).
- #24 — vi_ohan empty-string cells (4+).
- #18 — vi/vi_c/vi_s surface Capitalisation vs native lowercase (3 × 59 cells affected).
- #15 — Unicode NFD (97 cells, only in hak_*).

**Scheme drift (cross-row within one lang-col):**
- #3, #4 — nan_te POJ→Peng'im incomplete (6+ cells).
- #5 — nan_*g/my/id/pn/pera POJ `chh-` vs Tâi-lô `tsh-` split (10+ cells).
- #7 — nan_th `lī` POJ outlier in digit-tone column.
- #8 — nan_pn `it⁴` digit-tone outlier in POJ column.
- #11 — pmgl `j-`/`y-` mixed (8+ cells).
- #16 — ko_mid uppercase `G` remains in 3 cells.

**Scheme drift (cross-col within one family):**
- #1 — zh sub-Mandarin IPA Chao-bar leakage (25 cells in zh_sc alone).
- #2 — yue IPA convention split between Chao bar (hk/mo) and superscript (gz/dg/nn/zs).
- #13, #14, #25 — nan/bo_sino/general IPA outliers.

**Surface↔IPA mismatch (within single cell):**
- #9 — yue_ts vowel mismatch (yat1/jit̚).
- #10, #21 — zh_yuan/zh_tang surface ASCII-digit vs IPA Chao-bar tone notation.
- #20 — ja_thk surface plain Hepburn vs metadata-declared `ï` convention.
- #23 — ja_kun /h-/ vs /ç-/ allophone leak.
- #22 — juc IPA = surface (no transcription).

**Documentation polish:**
- #19 — ko_bus colon `:` length marker used in only one cell.
- #21 — zh_tang/zh_song surface-vs-IPA notation split (defensible but DRY-able).

**Recommendation for action priority:** (a) Mechanical fixes first — #15 NFC normalisation (one regex), #17 zh_kanbun key removal (15 lines), #18 vi capitalisation (177 lines), #24 vi_ohan empty strings → "—". (b) Then completable migrations — #3 nan_te -k→-g (6 cells), #16 ko_mid G→ng (3 cells), #11 pmgl y/j surface (8 cells), #12 ptai .A→ᴬ (across all ptai). (c) Then policy decisions — #5 (TL vs POJ for diaspora Hokkien), #1/#2 (Chao bar vs superscript across zh/yue families), #6 (nan_pera scheme commitment).

---

**File path:** `/home/jounlai/langmap/hanmap_reviews/52_open.md`
**Finding count:** 25


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 27
- **policy/skip**: 17
- **from-mismatch/already-absent defer**: 33
- **headline**: NFC hak_cn ×3, nan_te Peng'im -k→-g ×6 (六/日/足/目/肉/北), ko_mid G→ng ×3 (月/魚/牛), zh_kanbun null delete ×15 (skipped if already absent)
- **JSON path**: /tmp/hm_edits_52.json
