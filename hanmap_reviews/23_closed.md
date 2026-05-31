# Hanmap data review #23 — Southeast-Asian Hokkien (閩南語/福建話) diaspora grid

## Reviewer self-introduction (自我介紹)

Guá sī **Tan Sū-bí (陳思敏)**, a Penang-born (Tanjong Tokong) descriptive linguist working on the Southern Min diaspora. My native register is **Penang Hokkien** (檳城福建話, Zhangzhou-based 漳州腔 with heavy Malay/English contact); I have working command of **Singapore Hokkien** (廈門腔-leaning, Amoy + Quanzhou mix) and **Medan Hokkien** (棉蘭福建話, also 漳州腔), and field training on the 漳泉 (Zhangzhou/Quanzhou) dialect grid. My reference apparatus: **Douglas 1873 / Barclay 1923** *Chinese–English Dictionary of the Vernacular of Amoy*; **周長楫《閩南方言大詞典》(2006)** and **《廈門方言詞典》(1993)**; **Bodman 1955** *Spoken Amoy Hokkien*; for Penang **Luc de Gijzel 2009** *Penang Hokkien Dictionary* and **Tan Choon Hoe 2008**; and the Wiktionary Min-Nan 漳泉 reading tables (POJ/Tâi-lô). I loaded `hanmap_data.js` as a module and verified every "Current" value verbatim against `HAN_DATA[char].surface{}` / `.ipa{}`.

**Reviewer perspective.** The owner's worry is "**the MY/ID/SG forms look cloned from Amoy.**" My brief is to separate three things that look alike but are not: **(a)** cells *correctly identical* because the morpheme has no 漳泉 split (四 sì, 海 hái, 虎 hó͘, 心 sim — uniform across the whole Hokkien continuum); **(b)** *lazy cloning* that should differ — which in this dataset surfaces not in the vowels (the diagnostic morphemes 火/雞/魚/飯/黃 aren't in the file) but in **romanization system** and **typos**; and **(c)** cells already correctly differentiated (Hainanese nan_hai, Teochew nan_te, and the *tone columns*, which are NOT cloned).

**Coverage (state it plainly).** The Hokkien grid is **very sparse**. Of 60 characters, only ~24 carry any nan-family data, and only ~10 have the full SEA + mainland-reference set. The classic **漳泉-split diagnostic morphemes are entirely absent**: 火 (hué/hé), 雞 (ke/koe), 魚 (hî/hû/hɨ), 飯 (pn̄g), 黃/方 (-ng/-uiⁿ), 豬/書/居 (Quanzhou central vowel ɨ). I will **not** invent 45 rows; where a SEA variety is missing but its mainland parent exists, I list it as a **seeding recommendation**, not an edit.

**Notation conventions observed.**
- `surface` = POJ-style diacritics (`ó͘`, `â`, `kiâⁿ`; nasal `ⁿ`), except **nan_pera**, which uses **numbered-tone** surfaces (`si⁵³`, `pak⁵`).
- `ipa` = true IPA with Chao tone-letters and checked stops with ̚.
- **Sibilant romanization is split by system**: Tâi-lô `ts`/`tsh` vs POJ `ch`/`chh`. This split is the crux of issue #1.

---

## Issues found

### 1. nan_pn (Penang) is romanized in Amoy-Tâi-lô `tsh`/`ts`, but Penang Hokkien is the canonical `chh`/`ch` variety
- **Current:** 七 nan_pn `tshit`; 左 nan_pn `tsó`. Meanwhile 七 nan_my/nan_id `chhit`; 左 nan_my `chó`.
- **Expected:** 七 nan_pn `chhit`; 左 nan_pn `chó`.
- **Why:** Penang Hokkien is the archetypal `chh`/`ch` community (de Gijzel 2009, Tan Choon Hoe). The dataset has it backwards — "Malaysian-general" and "Medan" correctly use `chh`, but Penang itself is in Amoy `tsh`. This is the "looks cloned from Amoy" symptom in the romanization layer. (IPA `tsʰ`/`ts` correct, untouched — surface-only fix.)

### 2. Single varieties mix two romanization systems internally
- **Current:** nan_xm / nan_zz / nan_sg: 七 `tshit` (Tâi-lô) but 足 `chiok` (POJ).
- **Expected:** one system per column — normalize 足 → `tsiok` for the Tâi-lô-leaning Amoy/mainland columns.
- **Why:** `chiok` is POJ, `tshit`/`tsó` are Tâi-lô. Mixing them means 足 and 七 are transcribed in mutually inconsistent orthographies within one variety. IPA untouched.

### 3. 貓 nan_pera — surface `niau³` keeps initial n-, but IPA drops it (`/iau˧/`)
- **Current:** surface `niau³`, ipa `/iau˧/`. **Expected:** ipa `/niau˧/`.
- **Why:** Perak Hokkien does not drop the 貓 initial; every sibling cell has `n-` in both columns. The bare `/iau˧/` is a dropped-`n` typo (surface↔IPA disagreement).

### 4. 見 nan_pera — surface `kian⁵³` (literary) vs IPA `/kĩ˥˧/` (colloquial) — two different syllables
- **Current:** surface `kian⁵³`, ipa `/kĩ˥˧/`. **Expected:** surface `kì⁵³` (align to the colloquial 白讀 the IPA encodes).
- **Why:** `kian` (文讀 kiàn) and `kĩ` (白讀 kìⁿ) are different readings of 見. A basic-vocab atlas favors the colloquial 'see' = kìⁿ; align surface to the IPA.

### 5. nan_id (Medan) is under-populated (empty on 左/犬/右/足) — seeding recommendation
- Medan Hokkien is Zhangzhou-based ≈ Penang on segments. Where nan_pn exists and nan_id is empty, seed nan_id from the Penang/Zhangzhou form with Medan's tone, written `chh`/`ch`. Flagged as **sparse-coverage seeding** (cells empty → no `from` edit).

### 6. Correctly-identical cells — certifying these are NOT cloning (no edit)
- 四 sì, 海 hái, 虎 hó͘, 心 sim, 北 pak, 土 thó͘ are segmentally identical across the SEA grid — these morphemes have **no 漳泉 split**; differentiating them would be falsification. Crucially the **tone columns already differ correctly** (nan_pn `˦˨`, nan_sg `˥˧`/`˩`, nan_id `˥˩`/`˨˦`, nan_pera `˨˩`), so these rows are *not* cloned.

### 7–8. nan_pn/nan_my tone realizations; Hainanese & Teochew distinctness — certified correct (no edit)
- nan_pn vs nan_my given *distinct* tone letters (good, not cloned). Hainanese (nan_hai: implosive-source initials, s→t/h shifts, 虎 `hu` not hó͘, 牛 `ku`) and Teochew (nan_te) are correctly distinct and must **not** be flattened toward Amoy.

---

## EDITS (proposed — orchestrator applied serially)
7 structured edits returned as JSON (5 orthography-consistency, 2 Perak surface↔IPA mismatches). The 漳泉-diagnostic morphemes and empty nan_id cells were left as prose seeding recommendations (fabricating a `from` for an absent cell is unverifiable).

---

## Worker round-1 response (作業者round-1)

Loaded `hanmap_data.js`, verified every "Current" value, and the orchestrator applied all 7 edits serially (disjoint from #21's yue_* and #22's zh_us/yue_us). Confirmed in live data:
- 七 nan_pn `tshit`→`chhit`; 左 nan_pn `tsó`→`chó` (Penang POJ chh/ch).
- 足 nan_xm/nan_zz/nan_sg `chiok`→`tsiok` (Tâi-lô ts normalization).
- 貓 nan_pera ipa `iau˧`→`niau˧` (n- restored); 見 nan_pera surface `kian⁵³`→`kì⁵³` (colloquial align).

The seeding recommendations (Issue 5 + the absent 漳泉-diagnostic morphemes) were NOT applied — they require adding real source data / new characters, not correcting existing cells.

---

## Reviewer round-2 response (再評価 round-2)

Re-loaded `hanmap_data.js` in a fresh VM and verified every applied edit verbatim.

**Applied edits — ✓ ALL ACCEPT (verified).**
- 七 nan_pn `chhit` /tsʰit̚/; 左 nan_pn `chó` /tsɔ/. A scan of all nan_pn affricate cells now returns only POJ `ch(h)`; no stray Tâi-lô `ts(h)-` remains in the Penang column.
- 足 nan_xm/nan_zz/nan_sg all now `tsiok` /t͡siɔk̚/; a scan of those three columns for surviving `ch-`/`chh-` returns empty. (nan_pera correctly keeps its own `chiok⁵` POJ scheme — out of scope, untouched.)
- 貓 nan_pera ipa now `niau˧`, matching surface `niau³`. 見 nan_pera now `kì⁵³` /kĩ˥˧/ — surface and IPA agree on the colloquial 白讀.

**Reaffirmed prose-only findings (documented backlog):**
- **SPARSE COVERAGE — 漳泉 diagnostics — △ KNOWN-GAP.** Verified: 火/魚 carry nan cells only for nan_te/nan_hai/nan_th; **雞/飯/黃/豬 are entirely absent from `HAN_DATA`**. These are precisely the morphemes whose vowel split would differentiate Zhangzhou- from Quanzhou-line descendants. Nothing to correct — the cells don't exist. **Recommend seeding from nan_zz/nan_qz parents.**
- **nan_id (Medan) under-populated — △ KNOWN-GAP.** Verified empty on 左/犬/右/足. **Recommend seeding from nan_zz in POJ chh/ch.** This is the concrete substance behind the owner's "MY/ID/SG look cloned" concern — where Medan looks identical it is largely because the differentiating cells are *empty*, not wrongly homogenised.
- **CERTIFIED-CORRECT (won't-fix):** 四/海/虎/心 segment-identity (no 漳泉 split, tones already differentiated); Hainanese & Teochew distinctness — do not homogenize.

### Scorecard

| Item | Verdict |
|---|---|
| 七 nan_pn → chhit; 左 nan_pn → chó (Penang chh/ch) | ✓ fixed+verified |
| 足 nan_xm/nan_zz/nan_sg → tsiok (Tâi-lô ts) | ✓ fixed+verified |
| 貓 nan_pera ipa → niau˧ (n- restored) | ✓ fixed+verified |
| 見 nan_pera → kì⁵³ (colloquial align) | ✓ fixed+verified |
| 漳泉 diagnostics 火/雞/魚/飯/黃/豬 no nan cells | △ known-gap — seed from 漳/泉 parent |
| nan_id (Medan) empty on 左/犬/右/足 | △ known-gap — seed from nan_zz in chh/ch |
| 四/海/虎/心 identity (tones already split) | ✓ certified-correct |
| nan_hai / nan_te distinctness | ✓ certified-correct, do not homogenize |

All 7 applied edits are fixed-and-verified: the Penang `chh/ch` and Tâi-lô `ts` orthography is now internally consistent, and both Perak surface↔IPA mismatches are resolved. The actionable orthography/mismatch defects are closed. The owner's "MY/ID/SG look cloned" concern is confirmed to be **substantially a coverage artifact** (empty nan_id cells + absent 漳泉-diagnostic morphemes), not a contamination defect.

**File status: OPEN (round-2)** — Dev next step: seed existing-character cells (NO new characters — owner ruled character-addition out of scope as a heavy synchronized change). See round-3.

---

## Worker round-3 response (作業者round-3) — seeding existing characters

Owner constraint: **no new characters** (adding 雞/飯/黃/豬 would touch HAN_LIST, categories, every language column and cache-busters — declined). So 雞/飯/黃/豬 are dropped from the backlog. The remaining feasible seeding — on characters **already in HAN_LIST** — was done. 44 cells added (verified absent before insertion; `HAN_LIST` count unchanged at 61).

**Group A — 火 / 魚 seeded to expose the 漳泉 split (9 codes each, 36 cells).** Verified against Wiktionary Min-Nan 漳泉 tables + Penang/Medan/Singapore Hokkien sources. The specialist **corrected the initial brief**: the 火 split is Amoy **hé** vs Zhangzhou **hué/hóe** vs Quanzhou **hér** (central vowel ə), not the reverse; and Penang/Medan 魚 is the attested **hû** (海澄/同安 -u reflex), not hî — only Amoy/Zhangzhou/Singapore take **hî**, Quanzhou **hîr** (ɯ).
- 火: `nan/nan_xm hé /he˥˧/`, `nan_zz hué /hue˥˧/`, `nan_qz hér /hə˥˥/`, `nan_pn hóe /hue˦˨/`, `nan_my hóe /hue˥˨/`, `nan_sg hué /hue˥˧/`, `nan_id hóe /hue˥˧/`, `nan_pera hóe²¹ /hue˨˩/`.
- 魚: `nan/nan_xm hî /hi˨˦/`, `nan_zz hî /hi˩˧/`, `nan_qz hîr /hɯ˨˦/`, `nan_pn hû /hu˨˦/`, `nan_my hû /hu˨˧/`, `nan_sg hî /hi˨˦/`, `nan_id hû /hu˨˦/`, `nan_pera hû⁵ /hu˥/`.
- Romanization per file convention: mainland + Singapore = Tâi-lô (hué/hî); Penang/Malaysian/Medan = POJ (hóe/hû); Perak = numbered-tone surface. IPA tone-letters derived from sibling cells (上聲 / 陽平 registers per code).

**Group B — nan_id (Medan) gap-fill on 左/犬/右/足 (8 cells).** Seeded from the `nan_zz` (Zhangzhou) parent in POJ chh/ch with Medan's tone register: 左 `chó /tsɔ˥˧/`, 犬 `khián /kʰian˥˧/`, 右 `iū /iu˨˩/`, 足 `chiok /t͡siɔk̚˧˨/`.

---

## Reviewer round-4 response (再評価 round-4)

Re-loaded `hanmap_data.js` fresh and verified all 44 added cells in live data; `HAN_LIST` unchanged at 61 (no character added, per owner constraint). The **漳泉 split is now visible** on the two diagnostic morphemes — 火 hé(廈)/hué(漳)/hér(泉) and 魚 hî(廈漳)/hîr(泉)/hû(檳城·棉蘭) — directly answering the owner's "MY/ID/SG look cloned" concern with attested, sourced differentiation. The nan_id column is no longer one-sided on 左/犬/右/足. The 火/魚 forms are cross-checked against Wiktionary + the Penang/Medan/Singapore Hokkien literature (the Penang/Medan **hû** for 魚 and the Amoy **hé** for 火 are the attested, not the naive, reflexes).

| Item | Verdict |
|---|---|
| 火 漳泉 split seeded (9 codes) | ✓ added+verified |
| 魚 漳泉 split seeded (9 codes, hû for Penang/Medan) | ✓ added+verified |
| nan_id gap-fill 左/犬/右/足 (Zhangzhou parent, chh/ch) | ✓ added+verified |
| No new characters added (HAN_LIST = 61) | ✓ owner constraint honored |
| 雞/飯/黃/豬 character-addition | ✗ out of scope (owner declined) — dropped from backlog |
| round-1 orthography + Perak mismatch fixes (7) | ✓ still verified |
| 四/海/虎/心 identity; nan_hai/nan_te distinctness | ✓ certified-correct |

All feasible (no-new-character) seeding is complete and verified; the 漳泉 vowel split and Medan column now differentiate the SEA Hokkien varieties. The only remaining item — adding 雞/飯/黃/豬 as new characters — is explicitly out of scope per the owner.

**File status: CLOSED** — existing-character seeding done and verified; new-character additions declined by owner and removed from the backlog.
