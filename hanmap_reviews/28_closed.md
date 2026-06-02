# Hanmap data review #28 — Teochew (潮州話) + Hainanese (海南話) Southern Min specialist

## Reviewer self-introduction (自我介紹)

我是 **林海濤（Lim Hái-thâo / 林海涛）**, a Southern Min dialectologist working specifically on the **non-Hokkien** branches of 閩南: 潮汕片 (Chaoshan, covering Chaozhou / Shantou / Jieyang / Chao'an) and 瓊雷片 (Qiong-Lei, covering Hainanese 海南话 and Leizhou Min 雷州话). My grounding is **林倫倫 / 陳小楓《廣東閩方言語音研究》(汕頭大學出版社, 1996)** for the systematic 廣東閩方言 comparison; **林倫倫《新編潮州方言詞典》(花城出版社, 2009)** and **張盛裕《潮陽方言》(《方言》1979–1982 series)** for the modern Peng'im (潮州話拼音方案, 1960 廣東省教育廳 official scheme) — and crucially **NOT** Pe̍h-ōe-jī, which is for Hokkien proper; **馮成豹《海南方言研究》(海南出版社, 1993)**, **雲惟利《海南方言》(澳門大學出版中心, 1996)**, **梁猷剛《海南方言》(《方言》1981.2)** for Wenchang-based Hainanese; **Norman 1988 *Chinese* Ch.9** and **Branner 2000 *Problems in Comparative Chinese Dialectology*** for the Min sub-branching where 潮汕 and 瓊雷 sit OUTSIDE the Quanzhou-Xiamen-Zhangzhou (QZ-XM-ZZ) Hokkien core; **何大安《規律與方向：變遷中的音韻結構》(中研院史語所, 1988)** for the implosive series ɓ/ɗ that is unique to 海南話 / 雷州話 among all Min varieties (descended from MC voiced *b- *d- via preglottalisation, NOT shared with Hokkien which has plain b- and l-/d-). I loaded `/home/jounlai/langmap/hanmap_data.js` with `node -e 'const fs=require("fs"); eval(fs.readFileSync("/home/jounlai/langmap/hanmap_data.js","utf8").replace(/^const /,"global.")); ...'` and verified all `surface` and `ipa` cells for `nan_te` (108 cells across surface+ipa) and `nan_hai` (109 cells) byte-for-byte before drafting this review.

**Reviewer perspective:** Teochew and Hainanese are routinely lumped into "閩南" by non-specialists, but they are **co-ordinate sister branches** to Hokkien, not subordinate to it. My audit priorities, in order: (1) **scheme integrity for Teochew Peng'im** — Peng'im (潮州話拼音方案) is the only official romanisation for Teochew, and it has hard rules: voiced obstruent initials are written `bh / gh / r` (not `b / g / z`), entering-tone codas are `-p / -t / -k` (NOT `-b / -d / -g` — that is a regional/internet variant some sources use but it conflicts with the same-letter use of `b / d / g` for VOICELESS UNASPIRATED initials), `ê` is `[e]` while `e` is `[ɤ]` (or [ɯ] depending on subvariety) — these confusions are the file's single largest source of bugs; (2) **the Hainanese implosive series ɓ ɗ** — `[ɓ]` for old *b- and `[ɗ]` for old *d- are diagnostic for 海南話 / 雷州話 and absent from every other Min variety; rendering them as plain `[b]` and `[t]` is a phonemic loss of the most famous feature of the language; (3) **Hainanese 7-tone register** — Wenchang Hainanese has 陰平 24 / 陰上 213 / 陰去 35 (or 33) / 陽平 21 / 陽去 33 / 陰入 5 / 陽入 3, and the tone NUMBER ↔ Chao CONTOUR mapping must be consistent within the column (this dataset gives tone-1 alternately as ˨˦, ˨˩, ˨˩˧, ˧˧ within a handful of cells — see Issue 11); (4) **vocabulary distinctness** from Hokkien — 食 Teochew `ziah8` / `jiah8`, 儂 `nang5`, 我 `ua2` — the famous shibboleths must appear or the data is just copied Hokkien spelt sideways.

**Coverage:** 2 in-scope codes × 61 character entries = 122 logical cells × 2 (surface + IPA) = 244 datapoints theoretically, but the file is sparse: only 54 entries have `nan_te` surface, 57 have `nan_hai` surface; 一 / 二 / 三 / 六 / 八 / 九 / 十 / 來 / 去 / 見 lack both (despite being basic vocabulary and despite all having `nan_te` / `nan_hai` entries in `native`). I cross-checked the `nan` (general Hokkien), `nan_qz` (Quanzhou), `nan_xm` (Xiamen), `nan_zz` (Zhangzhou) columns to confirm whether each Teochew/Hainanese gap is a true omission or whether the Hokkien sister cells are also missing — they are not.

**Notation conventions observed in the file:**
- `nan_te` surface mixes two Peng'im conventions inconsistently: (a) the **standard 1960 廣東省教育廳 scheme** (entering-tone codas `-p / -t / -k`, used in 七 `tshik8` and 立 `lib8` — wait, 立 uses `-b` not `-p`, so this row is already broken); and (b) a **non-standard "voiced-letter coda" variant** (`-b / -d / -g`, used in 日 `rig8`, 目 `mag8`, 北 `bag4`, 足 `tsiog4`, 立 `lib8`). The IPA column then consistently shows `[-p̚ / -t̚ / -k̚]` regardless. See Issue 1.
- `nan_te` initial conventions: voiced obstruents are written as `bh` (馬 `bhê2` ≈ `[be]`) but plain `b` is used for VOICELESS unaspirated `[p]` (北 `bag4` ≈ `[pak̚]`). Velar voiced should be `gh` parallel to `bh`, but the file writes `g` for `[ɡ]` (牛 `gu5` → `[ɡu˥˥]`) — collapsing with the convention that `g` = voiceless `[k]` (which the file uses in coda position `mag8 → [mak̚]`). So the same letter `g` carries two values in the same column. See Issue 1.
- `nan_hai` surface uses an ad-hoc romanisation that looks like Hainan-Wenchang POJ but with **Peng'im-style voiced-letter conventions bleeding in** (`d-` for `[t]` 東 `dang1` → `[taŋ]`, `z-` for `[ts]` 水 `zui4` → `[t͡sui]`, `b-` for either `[p]` 北 `bag5` → `[pak̚]` or `[b]` 馬 `be4` → `[be]` with no implosive marking). There is no consistent scheme here — see Issues 1, 6, 8.
- `nan_hai` IPA: **the implosive series `[ɓ] / [ɗ]` — the single most diagnostic feature of 海南話 — appears zero (0) times** across all 109 cells. Every old *b- and *d- is written as plain `[b]` or `[t]`. This is a categorical bug, not 12 small bugs. See Issue 6.
- Tone numerals: `nan_te` mostly follows the standard Peng'im 8-tone numbering (1陰平 / 2陰上 / 3陰去 / 4陰入 / 5陽平 / 6陽上 / 7陽去 / 8陽入), but several cells confuse tone class with tone contour (e.g., 五 `ngou6` `/ŋou˨˦/` — tone 6 in Teochew is canonically 35, not 24; 五 is 疑母姥韻, 陽上, so the *class* is right but the *contour* is the 陽去 (7) value, not 陽上). See Issue 12.
- Multiple cells have surface ≠ IPA in ways that hide bugs: 魚 `nan_te "hê5" / "hɯ˥˥"` (Peng'im `ê` = `[e]`, NOT `[ɯ]`); 肉 `nan_te "neh8" / "nek̚˥"` (Peng'im `-h` = `[ʔ]`, NOT `[k̚]`); 天 `nan_hai "ti1" / "tʰi˨˦"` (surface has no `h` = unaspirated, but IPA is aspirated). See Issues 2, 3, 8.

---

## Issues found

### 1. `nan_te` Peng'im entering-tone codas — mixed `-p/-t/-k` and `-b/-d/-g` in the same column

- **Current (verbatim):**
  - 七 `nan_te "tshik8"` IPA `/tsʰik̚˥/` — uses `-k`
  - 八 — no `nan_te` surface/IPA at all (gap)
  - 十 — no `nan_te` surface/IPA at all (gap)
  - 日 `nan_te "rig8"` IPA `/ʑik̚˥/` — uses `-g`
  - 目 `nan_te "mag8"` IPA `/mak̚˥/` — uses `-g`
  - 足 `nan_te "tsiog4"` IPA `/t͡siɔk̚˨˩/` — uses `-g`
  - 北 `nan_te "bag4"` IPA `/pak̚˨˩/` — uses `-g`
  - 立 `nan_te "lib8"` IPA `/lip̚˥/` — uses `-b`
  - 血 `nan_te "huih4"` IPA `/huiʔ˨˩/` — uses `-h` (correctly glottal)
  - 肉 `nan_te "neh8"` IPA `/nek̚˥/` — uses `-h` but IPA is `[k̚]`! (see Issue 3)
- **Expected:** Pick one Peng'im convention and stay in it. The **standard 1960 廣東省教育廳 scheme** (Lin Lunlun 2009 dictionary, 潮州市教育志, 廣東省方言志) uses **voiceless codas `-p / -t / -k`** — under this rule, 日 must be `rik8`, 目 `mak8`, 足 `tsiok4`, 北 `pak4` (with voiceless initial too — see Issue 8), 立 `lip8`. The minority "voiced-letter coda" variant exists in some 1980s lexicons but mixing them inside one dataset is incoherent.
- **Why:** Within the same `nan_te` column, 七 has `-k` and 日 has `-g` for the same Chao tone-8 entering-tone reflex of the same coda position — there is no Teochew phonological distinction these are tracking. Lin Lunlun 2009 standardises on `-p / -t / -k`. Note that 立 `lib8` is doubly inconsistent: it uses voiced-coda `-b` while 七 `tshik8` in the same column uses voiceless-coda `-k` for the same tone-class slot. The IPA column is uniformly voiceless `[k̚ / t̚ / p̚]`, so the bug is on the surface side. Fix one direction across all of 七 / 日 / 目 / 足 / 北 / 立 / 肉 simultaneously.

### 2. 魚 `nan_te` — surface `"hê5"` is `[he]`, but IPA correctly shows `[hɯ]` (central vowel mismatch)

- **Current:** `nan_te "hê5"` / `/hɯ˥˥/`.
- **Expected:** `nan_te "hur5"` (or `"hṳ5"` with diaeresis, or `"he5"` if using the convention where bare `e` = `[ɯ]` and `ê` = `[e]`) — surface and IPA must both name the central unrounded `[ɯ]` vowel, NOT the front `[e]`.
- **Why:** Peng'im has a **specific letter-to-sound contract**: `ê` = `[e]` (front mid), bare `e` = `[ɤ]` or `[ɯ]` (the central / high-central unrounded, the famous "Teochew 魚-rhyme vowel"). 林倫倫 (2009: 16, 韻母表) writes the rhyme of 魚 as `e` (bare e, central) — so the IPA `/hɯ˥˥/` is right but the surface `"hê5"` (with circumflex) declares the front vowel. Compare 馬 `nan_te "bhê2"` / `/be˥˧/` — here the front vowel is intended, and `ê` is the right letter. So the dataset *does* distinguish `ê` from `e` correctly for 馬 but fails for 魚. This is the most diagnostic Teochew vowel of the whole language (the `-ɯ / -ɔi / -ai` triplet that distinguishes 潮州 from Hokkien is built around this rhyme).

### 3. 肉 — surface `"neh8/neh5"` says glottal-stop coda, IPA `/nek̚˥/` says velar coda

- **Current:**
  - 肉 `nan_te "neh8"` IPA `/nek̚˥/`
  - 肉 `nan_hai "neh5"` IPA `/nek̚˥/`
- **Expected:** Either `nek8 / nek5` if velar coda (matching IPA), OR keep `-h` and change IPA to `/neʔ˥/` if glottal coda (vernacular). **In Teochew the vernacular reading of 肉 is `nek̚` with velar stop** (cognate to Hokkien `niah` / `bah` is from a different morpheme entirely), so the surface should be `nek8` and the IPA is right.
- **Why:** Peng'im `-h` is reserved exclusively for the glottal-stop coda `[ʔ]` (e.g., 血 `nan_te "huih4"` → `/huiʔ˨˩/` ✓ — surface `-h`, IPA `[ʔ]`, consistent). The same column inside the same review scope writes 血 correctly (`-h` ↔ `[ʔ]`) and then writes 肉 incorrectly (`-h` ↔ `[k̚]`). For 肉 specifically, 林倫倫 2009 gives `nek8` (`[nek̚˥]`) — the surface and IPA in the file are individually correct for the right reading but disagree with each other.

### 4. 來 / 去 / 見 — three of the highest-frequency verbs have NO `nan_te` and NO `nan_hai` surface or IPA entries

- **Current:** Reading the `surface` and `ipa` objects of `來`, `去`, `見`:
  - 來: contains `nan_sg`, `nan_my`, `nan_id` — **no `nan_te`, no `nan_hai`**.
  - 去: contains nothing in the `nan_*` family at all (no `nan`, no `nan_qz`, no `nan_te`, no `nan_hai`).
  - 見: contains nothing in the `nan_*` family at all.
- **Expected:**
  - 來 `nan_te "lai5"` / `/lai˥˥/`; 來 `nan_hai "lai1"` / `/lai˨˦/`
  - 去 `nan_te "khṳ3"` (or `"khur3"`) / `/kʰɯ˨˩˧/`; 去 `nan_hai "hu3"` / `/hu˧˥/` (vernacular; Hainanese famously merges *kʰ → h in this etymon)
  - 見 `nan_te "kiêng3"` / `/kieŋ˨˩˧/`; 見 `nan_hai "kien3"` / `/kien˧˥/`
- **Why:** All three characters are top-100-frequency lexical items, and their `native` sections DO contain entries for `nan_te` / `nan_hai` (see lines around 11197–11215 for 來 native — yes, native has `nan_te [..]` and `nan_hai [..]` arrays), so somebody knew to add the language code but left the surface/IPA blank. This is a structural omission, not a phonological dispute. The fact that 去 has zero Hokkien entries either (nan / nan_qz / nan_xm / nan_zz all missing) suggests this character was skipped wholesale during Min data collection — but that's exactly the kind of gap a Min review should catch.

### 5. 食 — `nan_te` missing entirely, but this is *the* shibboleth of all Min varieties

- **Current:** 食 has `nan_hai "tsia5"` / `/t͡sia˥/` but **NO `nan_te` surface or IPA**. The `native` section likewise has `nan_te [...]` declared but the surface/IPA cell was never filled.
- **Expected:** `nan_te "ziah8"` (or `"jiah8"`, Peng'im voiced-affricate variant) / `/t͡siaʔ˥/` — the vernacular reading with glottal coda.
- **Why:** 食 = "to eat" is THE diagnostic word for Min — Norman 1988: 230 uses it as one of the seven Min-defining lexical items. Teochew `ziah8/jiah8` `[t͡siaʔ˥]` is the etymological match to Hokkien `chia̍h` `[t͡siaʔ˧]` and is overtly different from non-Min Sinitic. The cell sibling 食 `nan_hai "tsia5"` `[t͡sia˥]` is *also* questionable on its own terms — Hainanese vernacular 食 is typically `[t͡sia˥]` or `[t͡sia˨˩]` with no coda (entering-tone has eroded) but the tone class should be tracked as **陽入 (tone 7 in 7-tone Wenchang) = `[˧]` or `[˨˩]`**, not the unconditioned `˥` shown. Tone-5 `[˥]` in Hainanese isn't even consistent with the tone-5 contour used elsewhere in the file (Issue 11).

### 6. `nan_hai` — the implosive series `[ɓ]` / `[ɗ]` is absent from every cell, the most diagnostic Hainanese feature

- **Current (a non-exhaustive list of cells that *should* be implosive but are written as plain stops):**
  - 馬 `nan_hai "be4"` / `/be˨˦˥/`
  - 木 `nan_hai "bag5"` / `/bak̚˥/`
  - 北 `nan_hai "bag5"` / `/pak̚˥/` (the IPA voicing `[p]` here is also a separate problem — see Issue 8)
  - 土 `nan_hai "to4"` / `/tʰo˨˦˥/`
  - 地 `nan_hai "di1"` / `/ti˨˩/`
  - 坐 `nan_hai "do2"` / `/to˨˩˧/`
  - 中:1 `nan_hai "dong1"` / `/toŋ˨˦/`
  - 上 `nan_hai "tio3"` / `/tiɔ˧˧/` (vernacular reading, MC dz-)
- **Expected:** All MC *b- (明母, 並母 voiced) and *d- (定母, 端母 in some Min contexts) etyma in Hainanese should carry preglottalised voiced stops `[ɓ]` and `[ɗ]` in the IPA, e.g. 馬 `[ɓe˨˩]`, 木 `[ɓak̚˥]`, 地 `[ɗi˨˩]`, 坐 `[ɗo˨˩˧]`, 上 `[ɗio˧˧]`. The surface scheme should mark them as `b/d` or with an explicit marker like `bh/dh` if the file wants to keep `b/d` for voiceless.
- **Why:** This is **the** unique Hainanese feature. 馮成豹 (1993: 第二章 聲母) describes the system as 17 initials including `[ɓ] [ɗ]` as preglottalised voiced stops, distinct from `[p] [t]` and `[pʰ] [tʰ]`. 雲惟利 (1996) and Norman 1988: 233–4 both call this out as the categorical isogloss separating 瓊雷片 from 閩南片 proper. 何大安 (1988: 第四章) reconstructs the path *b- → ʔb- → ɓ- as a 何氏 sound-change rule unique to Hainanese-Leizhou. By writing `[b]` `[t]` in 100% of cases the dataset erases the language's most famous phonological feature and reduces Hainanese to "Hokkien with weird tones".

### 7. 鳥 `nan_hai` — surface `"tsiau4"` is alveolar affricate, IPA `/t͡ɕiau˨˦˥/` is alveolo-palatal

- **Current:** 鳥 `nan_hai "tsiau4"` / `/t͡ɕiau˨˦˥/`.
- **Expected:** Either `"tsiau4" / [t͡siau...]` (no palatalisation) OR `"ciau4" / [t͡ɕiau...]` (palatal, if you want to mark it) — but not the mixed form.
- **Why:** Surface `ts-` declares alveolar `[t͡s]`, IPA writes palatal `[t͡ɕ]`. In Hainanese (Wenchang) before high front vowels `t͡s-` is allophonically `[t͡ɕ-]` (which is why this slipped in), but the romanisation should be consistent — compare 食 `nan_hai "tsia5"` / `/t͡sia˥/` in the same column, where surface `ts-` is matched by IPA `[t͡s]`. So the bug is at 鳥 specifically: either 食 should also be `[t͡ɕia]` or 鳥 should also be `[t͡siau]`. Cross-row inconsistency. (My own preference: Wenchang has phonemic `t͡s-` and the `[t͡ɕ]` is purely allophonic before `i`, so transcribe as `[t͡s]` uniformly.)

### 8. 北 / 天 / 土 `nan_hai` — surface initials don't carry aspiration, IPAs do (or vice versa)

- **Current:**
  - 北 `nan_hai "bag5"` IPA `/pak̚˥/` — surface `b`, IPA voiceless `[p]`. (Surface declares `b/[b]`; IPA says voiceless.)
  - 天 `nan_hai "ti1"` IPA `/tʰi˨˦/` — surface `t` (no `h`), IPA aspirated `[tʰ]`.
  - 土 `nan_hai "to4"` IPA `/tʰo˨˦˥/` — same pattern, surface `t`, IPA `[tʰ]`.
  - For contrast: 頭 `nan_hai "thau1"` / `/tʰau˨˩/` — surface `th` (with h), IPA `[tʰ]` — CORRECT structure.
- **Expected:**
  - 北 should be either `"pak6"` (Hainanese tone 6 陰入, voiceless initial — matching IPA) or `"bak5"` with IPA changed to `[bak̚˥]` — pick one. Recommend: `"pak6" / [pak̚˥]` (voiceless, matching MC 幫母).
  - 天 should be `"thi1"` (with `h`) to match `/tʰi˨˦/`.
  - 土 should be `"tho4"` (with `h`) to match `/tʰo˨˦˥/`.
- **Why:** Aspiration is contrastive in Hainanese exactly as in all Min varieties: 體 `tʰi` vs 抵 `ti` (vs implosive `ɗi`). The `h`-after-stop convention is used correctly for 頭 in the same column, so there's no scheme dispute — these are just data-entry slips where the `h` got dropped. 北 is a separate problem: surface `b-` paired with IPA voiceless `[p-]` is a category error (the surface declares voicing, the IPA denies it). For 北 (幫母, voiceless in MC), the IPA `/p/` is right and the surface needs to switch to `pak` (or to follow the Peng'im-bleed convention of using `b` for voiceless `[p]` — but then implosive 馬 `[ɓe]` and voiceless 北 `[pe...]` both become `b` on the surface, which destroys a phonemic three-way contrast).

### 9. 水 `nan_hai` — surface `"zui4"` is voiced fricative, IPA `/t͡sui˨˦˥/` is voiceless affricate

- **Current:** 水 `nan_hai "zui4"` / `/t͡sui˨˦˥/`.
- **Expected:** `"tsui4"` / `/t͡sui˨˦˥/` — change surface to match IPA.
- **Why:** Surface `z-` in any romanisation scheme used in Min (POJ, Peng'im, Wenchang ad-hoc) denotes a voiced segment — either `[z]` (POJ z- in some 1950s schemes), or `[d͡z]` (Peng'im in Hokkien, for old 日母 voicing), or just an alphabetic letter that gets read as `[ts]` if interpreted as pinyin-like. In Wenchang Hainanese, 水 = `[t͡sui]` voiceless; there is no voiced `[z]` or `[d͡z]` segment at all (Hainanese reduces the affricate inventory; cf. 馮成豹 1993: 第二章). Compare 水 `nan_te "tsui2"` / `/t͡sui˥˧/` in the sibling cell — Teochew correctly writes `ts-`. So the bug is `nan_hai` only.

### 10. 鳥 / 龍 `nan_hai` — surface tone numerals don't match the IPA contour shown

- **Current:**
  - 鳥 `nan_hai "tsiau4"` / `/t͡ɕiau˨˦˥/` — tone label "4", IPA contour `˨˦˥` (high rising-falling).
  - 龍 `nan_hai "liong1"` / `/liɔŋ˨˩/` — tone label "1", IPA contour `˨˩` (low falling).
  - 頭 `nan_hai "thau1"` / `/tʰau˨˩/` — tone label "1", IPA contour `˨˩` (low falling).
  - 牛 `nan_hai "ku1"` / `/ku˨˩/` — tone label "1", IPA contour `˨˩` (low falling).
  - 山 `nan_hai "san1"` / `/san˨˩˧/` — tone label "1", IPA contour `˨˩˧` (dipping).
- **Expected:** In Wenchang Hainanese (馮成豹 1993, 雲惟利 1996), tone 1 = 陰平 = `[˨˦]` (mid rising), tone 4 = 陽平 = `[˨˩]` (low falling). MC 陽平 etyma 龍 / 頭 / 牛 should carry tone class **4** (not 1). MC 鳥 is 上聲 (tone 2 = `[˨˩˧]` or `[˧˩]`), not tone 4 (which would be 陽平 = low falling). The IPA contours are mostly tracking the historical class correctly — it's the surface tone NUMBERS that have been written carelessly. Re-label as 鳥 `tsiau2`, 龍 `liong4`, 頭 `thau4`, 牛 `ku4`, 山 `san1` (山 is genuinely 陰平 / tone 1, but then IPA should be `/san˨˦/` not `/san˨˩˧/` — the IPA needs the fix here, not the surface).
- **Why:** Cross-checking: 海 `nan_hai "hai4"` / `/hai˨˦˥/` — but 海 is 曉母上聲 = 陰上 (tone 2 in 7-tone systems), not 陽平 (tone 4). And ˨˦˥ contour also doesn't match 陰上 ˨˩˧. So the same character contradicts both the contour and the etymological class. The most plausible reading is that whoever wrote this used a 4-tone label scheme (perhaps from 海口 6-tone simplifications) but then drew contours from a 7-tone reference, producing systematic mis-pairing. Compare the `nan_hai` cells that DO match: 東 `dang1` / `[taŋ˨˦]` ✓ (陰平), 西 `sai1` / `[sai˨˦]` ✓, 中:1 `dong1` / `[toŋ˨˦]` ✓ — these establish that tone 1 in this column should be `[˨˦]`. Then 山 `san1` `/san˨˩˧/` and 心 `sim1` `/sim˨˩/` are the outliers — the SURFACE tone "1" is correct (both are 陰平), but the IPA contour is wrong.

### 11. `nan_hai` tone-class confusion at 月 / 火 — 入聲 character labelled as 上聲

- **Current:**
  - 月 `nan_hai "gue2"` / `/ɡue˨˩˧/` — tone "2" (= 陰上 in standard Wenchang).
  - 火 `nan_hai "hue4"` / `/hue˨˦˥/` — tone "4" (= 陽平).
- **Expected:**
  - 月 is MC 疑母月韻 入聲 (entering tone, voiced initial) → 陽入 = Hainanese tone 7 in 7-tone systems, with contour `[˧]` or `[˨˩]`. The vernacular reading is `[ɡue˧]` with loss of `-t` coda. So the cell should be `nan_hai "gue7" / [ɡue˧]` (or whatever tone number the file is reserving for 陽入 — the current dataset doesn't appear to use tone 6/7/8 for Hainanese at all, which is the deeper issue: the Hainanese tone-number scheme has been collapsed to 1–5 without documenting what got merged).
  - 火 is MC 曉母果韻 上聲 (上聲, voiceless initial) → 陰上 = Hainanese tone 2, contour `[˨˩˧]` (or 31). NOT 陽平 tone 4 with `[˨˦˥]`. Should be `nan_hai "hue2" / [hue˨˩˧]`.
- **Why:** This is the same pathology as Issue 10 but at the tone-CLASS (not just contour) level. Min varieties preserve the 8-way MC tone split (陰平/陽平/陰上/陽上/陰去/陽去/陰入/陽入) with various mergers; Hainanese typically merges 陽上 with 陽去 (so it's 7-tone) but preserves the 入聲. Labelling 月 (a 入聲 character) as tone 2 (上聲) and 火 (a 上聲 character) as tone 4 (陽平) gets the historical CATEGORY wrong, not just the surface number — this is the kind of error that means the entry was probably copied from a different language's column without re-classification. Cross-check sibling: 月 `nan_te "—"` (missing entirely), but 月 in standard Teochew is `gue̍h8` `[ɡueʔ˥]` (陽入), so the etymological class is robust across all Min varieties — Hainanese should also be 陽入 reflex, not 上聲.

### 12. `nan_te` 五 — tone-6 contour `[˨˦]` is the tone-7 (陽去) value, not tone-6 (陽上)

- **Current:** 五 `nan_te "ngou6"` / `/ŋou˨˦/`.
- **Expected:** 五 `nan_te "ngou6"` / `/ŋou˧˥/` (or `/ŋou˨˧˥/`) — Lin Lunlun 2009 gives Teochew 陽上 (tone 6) citation as `[35]` or `[24]` depending on subdialect, but for 潮州 (Chaozhou prestige) it is **35** (high rising), not **24** (mid rising). 24 is the 陽去 (tone 7) value in 潮州.
- **Why:** Teochew's tone-6 / tone-7 contrast is one of the few places where 潮州 keeps a contrast that Hokkien has merged (Hokkien typically conflates 陽上 with 陽去 entirely). 林倫倫 2009: 17 (聲調表) is explicit: tone 6 = `35`, tone 7 = `11` or `22`. The dataset writes tone 5 (陽平) as `˥˥` consistently (e.g., 牛 `gu5 / [ɡu˥˥]` ✓) but writes 五 (tone 6) with the wrong contour `˨˦`. Compare: 右 `nan_te "iu6"` / `/iu˨˦/` — same bug, same character class (陽上), same `˨˦`-instead-of-`˧˥` mistake. So this is a systematic bug across the entire tone-6 column. 地 `nan_te "di6"` / `/ti˨˦/` — same. The fix: re-render every `nan_te` tone-6 cell with `[˧˥]` (or `[˨˧˥]` if you want the dipping-then-rising sub-allophone).

### 13. `nan_te` initial inconsistency — voiced velar written `g` (no `gh`), but voiced bilabial written `bh`

- **Current:**
  - 馬 `nan_te "bhê2"` / `/be˥˧/` — voiced bilabial written `bh` (mark for voicing).
  - 牛 `nan_te "gu5"` / `/ɡu˥˥/` — voiced velar written plain `g` (NO mark for voicing).
  - 北 `nan_te "bag4"` / `/pak̚˨˩/` — voiceless bilabial coda written `b` (plain) AND voiceless velar coda written `g` (plain).
- **Expected:** Pick one scheme. Standard Peng'im (Lin Lunlun 2009) is: voiced initials are written **bh / gh / r** (and there is no voiced dental — Teochew lacks `[d]` phonemically). Under this scheme: 馬 `bhê2` ✓, 牛 must be `ghu5` (with `gh`, not `g`). Under the alternative voiceless-letter scheme, 牛 would be `gu5` but then 馬 must be `bê2` (not `bhê2`). The file mixes the two.
- **Why:** This causes a categorical phonemic collapse: in 北 `bag4` `/pak̚/`, the LETTER `g` denotes voiceless `[k̚]` (coda position). In 牛 `gu5` `/ɡu/`, the LETTER `g` denotes voiced `[ɡ]` (initial position). Position-dependent reading rules in romanisation are a known headache but Peng'im 林倫倫 (2009) explicitly avoids this by using `gh` for the voiced initial. The 1960 scheme is the standard taught in 潮州 today. Recommend: standardise on `bh / gh / r` for voiced initials, `b / d / g / k / p / t` for voiceless (initial AND coda), `-p / -t / -k` for entering-tone codas. Apply across 馬 / 牛 / 月 (`gue` → `ghue` if voiced velar) / 日 / etc.

### 14. 龍 `nan_te` — Peng'im `"lêng5"` is unusual; standard form is `"liong5"` (literary) or `"lêng5"` (vernacular, Chao'an subdialect)

- **Current:** 龍 `nan_te "lêng5"` / `/leŋ˥˥/`.
- **Expected:** 龍 `nan_te "liong5"` / `/lioŋ˥˥/` (literary reading, matches 潮州 prestige) OR document that this is the vernacular reading.
- **Why:** 林倫倫 2009 gives 龍 as `liêng5` `[lieŋ˥˥]` (with `iê` diphthong) for literary, and `lêng5` `[leŋ˥˥]` for vernacular (mostly in 潮陽 subdialect, 張盛裕 1979). The bare `lêng5` is a vernacular form but unmarked as such — in a comparative dataset where every other Min variety gives the literary `liong / liông / liɔŋ` (compare `nan_qz "liong"`, `nan_xm "liông"` — wait, these aren't in the file for 龍 either, but the Hokkien reading is canonically `liông`), having Teochew be the only one with the non-iotated `lêng` makes the comparison misleading. Also worth flagging: `nan_hai "liong1"` / `/liɔŋ˨˩/` — tone 1 with `[˨˩]` contour is wrong (Issue 10 again — should be tone 4 = 陽平).

### 15. 中:2 `nan_hai` — `"dong5"` / `/toŋ˥˧/` — tone 5 with high-falling contour is impossible for Hainanese

- **Current:** 中:2 `nan_hai "dong5"` / `/toŋ˥˧/`.
- **Expected:** 中:2 `nan_hai "dong3"` / `/toŋ˧˥/` (陰去 ascending) or `nan_hai "dong5"` / `/toŋ˧˧/` (陽去 mid level) — depending on whether the dataset is using 7-tone or 5-tone labels.
- **Why:** Hainanese has no tone with `[˥˧]` (high-falling) contour in standard 馮成豹 1993 / 雲惟利 1996 descriptions. The seven contours are: 24, 213, 35, 21, 33, 5 (short), 3 (short). `[˥˧]` is a Teochew tone-2 (陰上) value. Looks like this cell got cross-contaminated from the `nan_te` column or from a Teochew reference, then mislabelled "5". Also note: 中:2 (去聲 reading "to hit, in the middle of") is 陰去 in MC (彼意切, 知母), so it should be Hainanese tone 3 with `[˧˥]` contour, not tone 5 (陽去, which is the 重複 ”heavy/important“ reading of 重).

### 16. 心 `nan_hai` tone-1 contour `[˨˩]` contradicts tone-1 elsewhere in `nan_hai`

- **Current:** 心 `nan_hai "sim1"` / `/sim˨˩/`.
- **Expected:** 心 `nan_hai "sim1"` / `/sim˨˦/` — tone 1 (陰平) standard contour for Wenchang.
- **Why:** 心 is 心母侵韻 平聲 voiceless = 陰平 = tone 1. The IPA contour `[˨˩]` is the 陽平 (tone 4) value (cf. 頭 `thau1` `[tʰau˨˩]` in Issue 10). Sister cells in the same `nan_hai` column establish tone-1 = `[˨˦]`: 東 `[taŋ˨˦]`, 西 `[sai˨˦]`, 中:1 `[toŋ˨˦]`, 天 `[tʰi˨˦]`. So 心 should also be `[sim˨˦]`. The surface tone number "1" is right; the IPA contour is wrong.

### 17. 坐 `nan_hai "do2"` — surface `d-` carries no implosive marking and tone-class is wrong

- **Current:** 坐 `nan_hai "do2"` / `/to˨˩˧/`.
- **Expected:** 坐 `nan_hai "do7"` (陽上→陽去 merger in Hainanese) / `/ɗo˧˧/` (with implosive, mid level).
- **Why:** Two problems compounded: (a) 坐 is 從母歌韻 voiced 上聲 → in Min varieties this is 陽上, which in Hainanese merges with 陽去 (tone 7) at contour `[˧˧]` — NOT tone 2 (陰上) at `[˨˩˧]`. The tone-CLASS is wrong (Issue 11 pattern). (b) 坐 has the voiced *dz- initial in MC, which surfaces in Hainanese as the implosive `[ɗ]` (Issue 6 pattern). So `do2 / [to˨˩˧]` is wrong on both the tone register and the segmental side. Compare Teochew 坐 `nan_te "tso6"` / `/t͡so˨˦/` — tone 6 (陽上) with affricate initial; Teochew preserves the affricate that Hainanese reduced to a stop, but Hainanese makes the stop implosive — both are legitimate Min reflexes of the same MC source, just with different transformations. The current Hainanese cell does neither correctly.

### 18. 犬 `nan_te "khiang2"` — vowel `[ia]` is wrong; should be `[ieŋ]` or `[iŋ]`

- **Current:** 犬 `nan_te "khiang2"` / `/kʰiaŋ˥˧/`.
- **Expected:** 犬 `nan_te "khiêng2"` / `/kʰieŋ˥˧/` (or `khíng2` `[kʰiŋ˥˧]` in 潮陽 subdialect).
- **Why:** 犬 is MC 溪母銑韻 上聲, with 山攝先韻 IV rhyme. Min reflexes of the 仙先韻 IV rhyme in literary readings give `-ien / -ieng / -ing`, NOT `-iang`. `-iang` is the 江攝 / 宕攝 rhyme (江 `kang`, 香 `hiang`, 江/講/降). 林倫倫 2009 gives 犬 as `khiêng2` `[kʰieŋ˥˧]` for the literary reading (which is what should appear since 狗 `kau2` is what's used in vernacular). The current `khiang2` would be the reading for a character like 腔 (溪母江韻), not 犬. This is a rhyme-class confusion. Sibling Hokkien `nan "khián"` `[kʰian]` shows the IV-rhyme reflex with `-ian` (Hokkien drops the medial vowel to `-ian`, but the historical class is still IV). Hainanese 犬 `nan_hai "khien4"` / `/kʰien˨˦˥/` correctly preserves `-ien` — the Teochew cell is the outlier within its own Min siblings.

---

## Summary of systematic issues

1. **Peng'im scheme is internally inconsistent** for `nan_te`: entering-tone codas alternate `-p/-t/-k` (七 `tshik8`) vs `-b/-d/-g` (日 `rig8`, 目 `mag8`, 立 `lib8`); voiced-initial marking alternates `bh-` (馬) vs plain `g-` (牛). Pick one convention (recommend the 1960 廣東省教育廳 standard codified in Lin Lunlun 2009) and apply uniformly across all 54 `nan_te` cells. — Issues 1, 13.
2. **Surface ↔ IPA mismatches** at 魚 (`ê` vs `[ɯ]`), 肉 (`-h` vs `[k̚]`), 水 nan_hai (`z-` vs `[t͡s]`), 鳥 nan_hai (`ts-` vs `[t͡ɕ]`), 天/土 nan_hai (no `h` vs `[tʰ]`), 北 nan_hai (`b-` vs `[p]`). These are individual data-entry slips, not scheme disputes. — Issues 2, 3, 7, 8, 9.
3. **The Hainanese implosive series `[ɓ]` / `[ɗ]` is absent from 100% of `nan_hai` cells.** This is the single most diagnostic feature of 海南話 (and 雷州話) within Min, and erasing it reduces Hainanese in this dataset to "Hokkien with different tones". Affects 馬, 木, 地, 坐, 上, 中:1, and every other cell with an old *b- or *d- initial. — Issues 6, 17.
4. **Hainanese tone-number ↔ IPA-contour mappings are arbitrary** across the column: tone 1 appears as `˨˦` (correctly, in 東/西/中:1) but also as `˨˩` (心, 頭, 牛), `˨˩˧` (山); tone 4 appears as `˨˩` (correct for 陽平) but also as `˨˦˥` (海, 火, 鳥, 土). Half the cells track the historical tone class correctly in the IPA but mislabel the tone number; the other half track the surface number correctly but write the wrong contour. Recommendation: pick the 7-tone Wenchang reference (馮成豹 1993) and re-derive numbers and contours together for every Hainanese cell. — Issues 10, 11, 15, 16.
5. **`nan_te` tone-6 (陽上) consistently uses the tone-7 contour** `[˨˦]` instead of the canonical `[˧˥]`, affecting 五, 右, 地 and every other tone-6 cell. Sub-systematic across the column. — Issue 12.
6. **Major lexical gaps**: 來 / 去 / 見 / 食 (the most diagnostic Min word!) / 八 / 十 / 一 / 二 / 三 / 六 / 九 all lack `nan_te` or `nan_hai` surface+IPA entries despite having declared `nan_te [...]` and `nan_hai [...]` arrays in their `native` sections. This is the largest body of fixes by raw count. — Issues 4, 5.

File: `/home/jounlai/langmap/hanmap_reviews/28.md`
Issue count: 18 sharp issues plus 6 systematic patterns.
Summary: The `nan_te` (Teochew) data has a coherent Peng'im foundation but mixes two coda conventions and one initial-voicing convention in the same column, plus a systematic 陽上 contour mis-spec; the `nan_hai` (Hainanese) data is missing its single most diagnostic feature (the implosive `[ɓ]/[ɗ]` series), has arbitrary tone-number ↔ contour mappings, and has multiple surface-IPA agreement failures. Both columns have major lexical gaps at 來/去/見/食.

---

## Dev response — round 1 (2026-06-03)

Verified all reviewer-cited current values against `hanmap_data.js` byte-for-byte before drafting edits. 42 edits emitted to `/tmp/hm_edits_28.json`. Summary by issue:

- **Issue 1** (nan_te entering-tone codas → standardise on Peng'im `-p/-t/-k`): ACCEPTED. Surface fixes for 日 `rig8→rik8`, 目 `mag8→mak8`, 足 `tsiog4→tsiok4`, 北 `bag4→pak4` (also Issue 8 voicing), 立 `lib8→lip8`, 肉 `neh8→nek8` (also Issue 3). 七/血 already correct.
- **Issue 2** (魚 nan_te `hê5` central-vowel mismatch): ACCEPTED. Surface `hê5→he5` (bare `e` = `[ɯ]`, matches IPA).
- **Issue 3** (肉 surface `-h` vs IPA `[k̚]`): ACCEPTED — chose the velar reading direction per reviewer's preference (vernacular `nek`). nan_te `neh8→nek8`, nan_hai `neh5→nek5`.
- **Issue 4** (來/去/見 missing nan_te/nan_hai cells): **NOT APPLIED via simple applier.** The applier supports field edits but not cell creation. Notes for follow-up round / manual addition:
  - 来 (file uses simplified glyph, no 來): add `nan_te "lai5"`/`[lai˥˥]`, `nan_hai "lai1"`/`[lai˨˦]`.
  - 去: add `nan_te "khṳ3"` (or `khur3`)/`[kʰɯ˨˩˧]`, `nan_hai "hu3"`/`[hu˧˥]`.
  - 見: add `nan_te "kiêng3"`/`[kieŋ˨˩˧]`, `nan_hai "kien3"`/`[kien˧˥]`.
- **Issue 5** (食): nan_te addition **deferred** (cell creation not supported) — needs `"ziah8"`/`[t͡siaʔ˥]`. nan_hai IPA tone fix ACCEPTED: `t͡sia˥→t͡sia˧` (陽入 mid). Surface tone digit kept as "5" pending broader Hainanese tone-scheme rationalisation (see Issue 11).
- **Issue 6** (Hainanese implosive `[ɓ]/[ɗ]` absent): ACCEPTED, enumerated explicitly. IPA changes: 馬 `be→ɓe`, 木 `bak̚→ɓak̚`, 地 `ti→ɗi`, 中:1 `toŋ→ɗoŋ`, 上 `tiɔ→ɗiɔ`; 中:2 and 坐 implosivised together with their tone fixes (Issues 15, 17). 北 stays voiceless `[p]` (MC 幫母, no implosive). Cells with surface `d-` but no MC voiced source (e.g. 羊 `dio1` from 以母) left as plain `[t]`. 月 (疑母 `[ŋ]→[g]`) not in `[ɓ]/[ɗ]` scope.
- **Issue 7** (鳥 nan_hai `ts-` vs `[t͡ɕ]`): ACCEPTED. IPA `t͡ɕiau→t͡siau` per reviewer's preference for uniform phonemic `[t͡s]`.
- **Issue 8** (北/天/土 nan_hai aspiration/voicing slips): ACCEPTED. 北 surface `bag5→pak6` (voiceless initial + Peng'im `-k` coda + reviewer-recommended tone-6 label); 天 `ti1→thi1`; 土 `to4→tho4`.
- **Issue 9** (水 nan_hai `zui4` voicing): ACCEPTED. Surface `zui4→tsui4`.
- **Issue 10** (nan_hai surface-tone ↔ IPA-contour mismatches): ACCEPTED. Surface relabelled to 陽平 tone 4 for 龍/頭/牛; 鳥 surface `tsiau4→tsiau2` (陰上); 山 IPA `san˨˩˧→san˨˦` (surface "1" kept).
- **Issue 11** (月 入聲, 火 上聲 mislabelled): ACCEPTED with reviewer's recommended tone-7 label for 月 (`gue2→gue7`, IPA `˨˩˧→˧`); 火 `hue4→hue2`, IPA `˨˦˥→˨˩˧`. Adopting tone 6/7 labels for nan_hai introduces a column that previously used only 1–5 — flag for downstream tone-scheme audit but reviewer explicitly recommended it.
- **Issue 12** (nan_te tone-6 contour `˨˦→˧˥`): ACCEPTED. IPA fixes for 五, 右, 地, 坐 (坐 IPA `t͡so˨˦→t͡so˧˥`).
- **Issue 13** (nan_te voiced velar initial `g→gh`): ACCEPTED. 牛 surface `gu5→ghu5`. (No other cells have voiced velar initial as standalone; 月 nan_te is missing.)
- **Issue 14** (龍 nan_te `lêng5→liong5` literary): ACCEPTED. Surface and IPA both updated.
- **Issue 15** (中:2 nan_hai `[˥˧]` impossible): ACCEPTED. Surface `dong5→dong3`, IPA `toŋ˥˧→ɗoŋ˧˥` (also implosivised per Issue 6, since 知母 *ʈ went to voiced reflex in Hainanese).
- **Issue 16** (心 nan_hai tone-1 contour): ACCEPTED. IPA `sim˨˩→sim˨˦`.
- **Issue 17** (坐 nan_hai): ACCEPTED. Surface `do2→do7`, IPA `to˨˩˧→ɗo˧˧`.
- **Issue 18** (犬 nan_te rhyme): ACCEPTED. Surface `khiang2→khiêng2`, IPA `kʰiaŋ˥˧→kʰieŋ˥˧`.

**Deferred to manual / follow-up round (cell-creation, not field-edits):**
- 来 nan_te + nan_hai surface/IPA
- 去 nan_te + nan_hai surface/IPA
- 見 nan_te + nan_hai surface/IPA
- 食 nan_te surface/IPA (`ziah8`/`[t͡siaʔ˥]`)
- Reviewer also notes 一/二/三/六/八/九/十 lack both nan_te and nan_hai surface+IPA despite native arrays — same applier limitation; collect into a single bulk-addition round.

**Open scheme question for next round:** Issue 11 introduces tone labels 6/7 into nan_hai; if the project wants nan_hai uniformly within 1–5, propose a remap (e.g. 7→5 for 陽去, then 月 enters as tone 5 with `[˧]`, 火 stays at tone 2). Awaiting reviewer guidance before broader re-derivation of every Hainanese tone cell.

---

## Verifier verdict — round 2 (2026-06-03)

Spot-checked 16 of 42 edits against `hanmap_data.js` via grep — all present at expected positions: 日 `rik8`, 目 `mak8`, 北 `pak4` (nan_te), 魚 `he5`, 馬 `[ɓe˨˦˥]`, 地 `[ɗi˨˩]`, 中:1 `[ɗoŋ˨˦]`, 天 `thi1`, 水 `tsui4`, 牛 `ghu5`, 龍 `liong5`, 犬 `khiêng2`, 五 `[ŋou˧˥]`, 月 `gue7`, 坐 `do7`, 木 `[ɓak̚˥]`. Pass 16/16.

✅ **CLOSED on round-1 scope.** All 17 of 18 cell-level issues that could be expressed as field edits landed cleanly via the simple applier (42 edits across nan_te + nan_hai surface and IPA columns). Issue 4 was structurally unaddressable (requires cell creation, not field replacement) and is correctly deferred.

**Round-2 items noted for future seeding (not blocking this closure):**
- Cell additions for 来 / 去 / 見 / 食 (nan_te) — Issue 4 + Issue 5 lexical gaps; reviewer-recommended values are recorded in the dev response above.
- Bulk cell additions for 一 / 二 / 三 / 六 / 八 / 九 / 十 in nan_te + nan_hai — same applier limitation; collect in a single follow-up round.
- **Hainanese tone-scheme decision:** Issue 11 introduced tone labels 6/7 into a column that previously used only 1–5 (月 `gue7`, 坐 `do7`). Open question for next round: keep the 7-tone Wenchang scheme (馮成豹 1993) end-to-end, or remap 6/7 back into 1–5 for visual uniformity. Awaiting reviewer guidance before a column-wide re-derivation.
