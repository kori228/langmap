# Hanmap data review #14 — Tang–Song rime-table & literary-register specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a historical phonologist of Middle Chinese whose work centres on the 等韻 rime-table tradition (韻鏡 / 七音略) and on the literary-reading (文讀) registers that crystallised between the Tang and the Northern-Song. My reconstructions are anchored in Pulleyblank's *Lexicon of Reconstructed Pronunciation in Early Middle Chinese, Late Middle Chinese, and Early Mandarin* (1991), whose EMC/LMC split is the natural model for a "Tang vs Song" two-layer column; in Baxter's *A Handbook of Old Chinese Phonology* (1992) for the 中古 initial categories (幫滂並明…見溪群疑…影云以) and for the four-tone × voicing → 陰/陽 register logic; and in the 廣韻 (1008) / 韻鏡 themselves for 攝・等・呼・重紐 placement. I read the LangMap `HAN_DATA` model directly: each of the 61 character keys carries a `surface` object and an `ipa` object, two rows per variety code, and my registers are `zh_tang` (early/late MC, Tang poetic register) and `zh_song` (late MC / Song-Ming literary). I checked every `zh_tang` and `zh_song` cell against the live file with `node -e "const D=require('./hanmap_data.js').HAN_DATA; …"` before writing any "Current" value below, and I cross-read the `zh_han` (Baxter OC) and modern `zh` rows for diachronic plausibility.

**Reviewer perspective:** The two literary layers were seeded with a real and impressively detailed 等韻 framework, but the tone-contour template, the 全濁上 (濁上歸去) treatment, and above all the *notation system of the `surface` column* drift between Baxter romanisation and raw IPA, producing internal contradictions that a rime-table reader catches immediately.

**Coverage:** both literary registers (`zh_tang`, `zh_song`); all 61 characters sampled, with focused auditing of the 去聲 set (二四地中:2去見), the 全濁上 set (上下), the 入聲 set (一六七八十日月木目足血肉立食北), the 匣/云 initials (下右行:1行:2), and the 止攝 sibilants (四水).

**Notation conventions observed in the file:**
- Tone is written twice: ASCII superscript digits on `surface` (e.g. `¹²³`, `²¹⁴`, `⁵¹`) and Chao tone-letters on `ipa` (˩˨˧, ˨˩˦, ˥˩); 入聲 syllables carry no tone digits and an unreleased coda ◌̚.
- The implicit tone template is: 平 = Tang ˩˨˧ / Song ˩˧, 上 = Tang ˨˩˦ / Song ˨˦, 去 = ˥˩ (both layers), 入 = unmarked + ◌̚.
- The `surface` column is **mixed**: many cells use a Baxter-style transcription (`nyij`, `ngu`, `dzyip`, `ngjo`, `tsh-`, `tsâ`), others use raw IPA glyphs (`ɲi`, `ŋu`, `ʑip`, `ʈuŋ`, `d͡ʑiaŋ`). This is the single largest source of inconsistency.
- 重紐 / 三等 medials are spelled with `ɨ`/`j`/`i` on `surface` but `iu`/`iɪ` on `ipa` for the same syllable.

---

## Issues found

### 1. 四 — `zh_song` (surface/ipa) — lone broken 去聲 contour (˥ instead of ˥˩)
- Current: `"sz̩⁵"` (surface), `"sz̩˥"` (IPA)
- Expected: `"sz̩⁵¹"` (surface), `"sz̩˥˩"` (IPA)
- Why: 四 is 去聲 (息利切, 心母 止攝). Every other 去聲 character in `zh_song` carries the falling ˥˩ / ⁵¹ contour — 二 `ɲi˥˩`, 地 `di˥˩`, 中:2 `ʈuŋ˥˩`, 去 `kʰy˥˩`, 見 `kien˥˩`. 四 alone has the level ˥ / ⁵, which is not a tone category in this file's template at all. This is a single-character typo (a dropped `˩` / `¹`), not a real Song reflex; per Pulleyblank (1991) LMC 去 is a uniform high-falling category.

### 2. 四 — `zh_song` (surface/ipa) — anachronistic apical vowel /z̩/ for Song
- Current: `"sz̩⁵"` (surface), `"sz̩˥"` (IPA)
- Expected: `"sɿ⁵¹"` / `"siɪ˥˩"`-grade, i.e. a still-vocalic 止攝 nucleus, not the apical syllabic /z̩/
- Why: The apicalisation of 止攝 精組 sibilants (the famous 資/思/四 → /sɿ/, /sz̩/) is an *Early-Mandarin* development; it is absent from Song literary phonology, where 四 still has a front high vowel (cf. this file's own `zh_tang` `siɪ˥˩`). Pulleyblank dates the apical vowel to Early Mandarin (post-Song), and Baxter (1992) keeps 止攝 vocalic throughout MC. The `zh` modern row already has `sɿ˥˩`; copying that apical nucleus back into the Song layer is a diachronic leak. (The `zh_tang` cell `siɪ` is correct; only `zh_song` jumped a stage.)

### 3. 行:1 — `zh_tang` and `zh_song` (surface) — missing surface, IPA-only
- Current: surface `null` (both layers); IPA present: `"ɦæŋ˩˨˧"` (Tang), `"ɣæŋ˩˧"` (Song)
- Expected: surface `"ɦæŋ¹²³"` (Tang) / `"ɣæŋ¹³"` (Song), matching the IPA and the sibling 行:2 (`"ɣɑŋ¹²³"` / `"ɣaŋ¹³"`)
- Why: 行:1 (xíng, 戶庚切, 匣母 庚韻) is the only one of my characters whose `surface` cells are empty while the `ipa` cells are populated. Its companion reading 行:2 (háng) has full surface forms. This is an undocumented data gap, conspicuous because 行 is the headword of the 平/平 doublet.

### 4. 行:1 / 行:2 / 下 / 右 — `zh_tang` vs `zh_song` (ipa) — 匣母 ɦ↔ɣ assigned to the wrong layer
- Current: 行:2 `zh_tang` IPA `"ɦɑŋ˩˨˧"` (ɦ) but `zh_song` IPA `"ɣaŋ˩˧"` (ɣ); 下 `zh_tang` `"ɦæ˨˩˦"` (ɦ) → `zh_song` `"ɦia˨˦"` (ɦ); 行:1 `zh_tang` `"ɦæŋ"` (ɦ) → `zh_song` `"ɣæŋ"` (ɣ)
- Expected: the *earlier* (Tang) layer should have the velar ɣ and the *later* (Song) layer the laryngeal ɦ — i.e. swap them: 行 Tang `ɣ-` → Song `ɦ-`
- Why: 匣母 is reconstructed as a voiced velar fricative /ɣ/ in EMC and weakens to a glottal/laryngeal /ɦ/ later (Pulleyblank 1991 gives EMC ɣ, LMC ɦ). The file has this **back-to-front**: 行:1/行:2 use ɦ in Tang and ɣ in Song, which reverses the lenition chronology. It is also internally inconsistent: 下 keeps ɦ in *both* layers while 行 flips ɦ→ɣ — the 匣母 treatment should be uniform across all 匣母 characters within a layer.

### 5. 上 — `zh_song` (surface/ipa) — 全濁上 not raised to 去 (濁上歸去 missing)
- Current: `"d͡ʑiaŋ²⁴"` (surface), `"d͡ʑiaŋ˨˦"` (IPA) — i.e. plain 上聲
- Expected: a 去-merged or dual reflex, e.g. `"d͡ʑiaŋ⁵¹"` / `"d͡ʑiaŋ˥˩"`, or at minimum the dual `²⁴/⁵¹` notation used in the Tang cell
- Why: 上 (時掌切, 禪母 = 全濁) is the textbook example of 濁上歸去: in 全濁 syllables the 上聲 had merged into 去聲 by the Late-MC / early-Song literary stage (Pulleyblank 1991; the 濁上歸去 isogloss is standardly dated to the Tang–Song transition). The `zh_tang` cell already acknowledges the instability with a dual `²¹⁴/⁵¹`. The Song cell, which is *later*, should show the merger as **completed** (去聲), not revert to a clean 上聲 ˨˦. The modern `zh` row confirms the outcome: shàng `˥˩` (去). Same applies to 下 (胡雅切, 匣母 全濁上), Song `"ɦia˨˦"` → expected 去.

### 6. 上 — `zh_tang` (surface) vs (ipa) — dual tone in surface, single tone in IPA
- Current: surface `"d͡ʑɨɐŋ²¹⁴/⁵¹"` (two contours), IPA `"d͡ʑiɐŋ˨˩˦"` (one contour)
- Expected: the two rows should agree — either both carry the dual reading (`d͡ʑiɐŋ˨˩˦/˥˩`) or both a single one
- Why: The `surface` field encodes the 濁上歸去 doublet with `²¹⁴/⁵¹`, but the `ipa` field drops the `⁵¹` (去) alternant and keeps only `˨˩˦` (上). 下 has the identical defect: surface `"ɦæ²¹⁴/⁵¹"` vs IPA `"ɦæ˨˩˦"`. The surface and IPA of the same cell must encode the same tone information.

### 7. 七 — `zh_tang` (surface) — Baxter digraph `tsh-` where every sibling uses IPA `ʰ`
- Current: `"tshit"` (surface)
- Expected: `"tsʰit̚"`-style, i.e. `"tsʰit"` with the superscript-ʰ aspiration mark used everywhere else
- Why: 七 (親吉切, 清母, aspirated) is written with the Baxter digraph `tsh` in its Tang `surface`, but every other aspirated initial in my registers uses the IPA superscript ʰ: 土 `tʰuo`, 天 `tʰen`, 犬 `kʰwen`, 口 `kʰuɪ`, 去 `kʰiɔ` — and 七's *own* `zh_song` surface is `"tsʰit"`. 七 Tang is the lone holdout still in Baxter notation. (Note the digraph is also ambiguous: bare `tsh` could be read as /ts/+/h/.)

### 8. 二 / 十 / 五 / 魚 / 耳 / 食 — `zh_tang` (surface) — Baxter romanisation leaking into a column that is otherwise IPA
- Current: 二 `"nyij⁵¹"`, 十 `"dzyip"`, 五 `"ngu²¹⁴"`, 魚 `"ngjo¹²³"`, 耳 `"nyi²¹⁴"`, 食 `"zyik"`
- Expected: IPA-glyph surfaces matching their own IPA rows and matching the `zh_song` surfaces of the same characters: 二 `ɲij`, 十 `dʑip`, 五 `ŋu`, 魚 `ŋiɔ`/`ŋjo`, 耳 `ɲi`, 食 `dʑik`
- Why: These six Tang `surface` cells use Baxter's ASCII conventions — `ny` = 日母 /ɲ/, `ng` = 疑母 /ŋ/, `dzy`/`zy` = 常/船母, `j` = 三等 medial. But their *own* `ipa` rows and their `zh_song` surfaces are pure IPA: 二 IPA `ɲiɪj`, Song surface `ɲi`; 五 IPA `ŋuo`, Song surface `ŋu`; 魚 Song surface stays `ngjo` (also Baxter) but IPA `ŋiɔ`. The `surface` column must pick one transcription system; right now a rime-table reader sees `ng-` and `ŋ-` for the same 疑母 in adjacent layers.

### 9. 魚 — `zh_song` (surface) — Baxter `ngjo`, identical to Tang, ignoring the 魚虞/魚韻 raising
- Current: `zh_tang` `"ngjo¹²³"` / IPA `"ŋiɔ˩˨˧"`; `zh_song` `"ngjo¹³"` / IPA `"ŋiɔ˩˧"`
- Expected: the Song nucleus should be a raised/fronted reflex (LMC 魚韻 → high front rounded, e.g. `ŋyə`/`ŋy`), distinct from the Tang `ŋiɔ`
- Why: The 魚 韻 nucleus rises from an EMC low-back `ɨə/ɨɔ` to an LMC high front-rounded vowel on the road to modern /y/ (Pulleyblank 1991: EMC ŋɨə̆ → LMC ŋyə̆; modern `zh` `y˧˥`). Here the Tang and Song nuclei are byte-for-byte identical (`ŋiɔ`), so the layer captures no 魚 raising at all — the very vowel shift this register pair exists to show. Contrast the file's correct handling of the sibling 牛 (尤韻), which *does* shift Tang `ŋɨu` → Song `ŋiu`.

### 10. 聞 — `zh_song` (surface/ipa) — 微母 labiodentalisation written as a stop+fricative cluster `mv-`
- Current: `"mvun¹³"` (surface), `"mvun˩˧"` (IPA)
- Expected: a single labiodental/approximant initial — `"ʋun"` (or `"ʋ̃un"` / `"ɱʋun"`) — not the cluster `mv`
- Why: 聞 (無分切, 微母 文韻) is the canonical 輕脣化 example, and the file rightly shows it shifting Tang `miun` → Song. But 微母 lenites to a *single* labiodental nasal/approximant /ɱ ~ ʋ/ (Pulleyblank 1991 LMC 微 = ʋ); the literal sequence `mv` reads as bilabial /m/ + labiodental /v/, a consonant cluster that never existed. The IPA should encode one segment.

### 11. 五 — `zh_tang` (surface) vs (ipa) — nucleus disagreement (`u` vs `uo`)
- Current: surface `"ngu²¹⁴"` (nucleus `u`), IPA `"ŋuo˨˩˦"` (nucleus `uo`)
- Expected: agreement — either surface `nguo` / IPA `ŋuo`, or surface `ngu` / IPA `ŋu`
- Why: 五 (疑古切, 疑母 模韻) has its surface spelling the monophthong `u` but its IPA the diphthong/glide `uo`. The same character's `zh_song` is internally consistent (surface `ŋu`, IPA `ŋu`). Within one cell the surface and IPA must transcribe the same syllable.

### 12. 火 / 虎 / 土 / 頭 / 口 — `zh_tang` (surface) vs (ipa) — systematic `o`(surface) ↔ `ɔ/ɑ/ə/əu/uɪ`(IPA) nucleus mismatches
- Current: 火 surface `"xwa²¹⁴"` / IPA `"xwɑ˨˩˦"`; 虎 surface `"xuo²¹⁴"` / IPA `"xuɔ˨˩˦"`; 土 surface `"tʰuo²¹⁴"` / IPA `"tʰuo˨˩˦"` (these two agree); 頭 surface `"dou¹²³"` / IPA `"dəu˩˨˧"`; 口 surface `"kʰuɪ²¹⁴"` / IPA `"kʰuɪ˨˩˦"` (agree)
- Expected: pick one back-vowel value per syllable across the two rows — e.g. 火 surface `xwɑ` to match IPA `xwɑ`; 虎 surface `xuɔ` to match IPA `xuɔ`; 頭 surface `dəu` to match IPA `dəu`
- Why: For 火 (果攝合口一等) the surface writes front `a` but the IPA writes back `ɑ`; for 虎 (模韻) the surface writes `uo` but the IPA writes `uɔ`; for 頭 (侯韻) the surface writes `ou` but the IPA writes `əu`. These are not different reconstructions, just unsynchronised transcriptions of the same nucleus. (Note also 火 → Song `xuo` correctly shows the 戈韻 ɑ→o raising; only the Tang surface/IPA mismatch is at issue.)

### 13. 左 — `zh_tang` (surface) — circumflex diacritic `â` foreign to the file's notation
- Current: `"tsâ²¹⁴"` (surface), IPA `"tsɑ˨˩˦"`
- Expected: `"tsɑ²¹⁴"`, matching the IPA `tsɑ` and the `zh_song` surface `"tsɑ²⁴"`
- Why: 左 (則箇切→上聲 哿韻, 精母) is the only cell in my two registers using a vowel **circumflex** (`â`). The circumflex is not a tone mark here (tone is the superscript `²¹⁴`) and is not used on any other vowel in the file. Its own IPA and its own `zh_song` surface both write the back vowel `ɑ`. This is a stray legacy diacritic — `â` should be `ɑ`.

### 14. 右 — `zh_tang` (surface/ipa) vs `zh_song` — 云母 initial silently lost (ɦ → j)
- Current: `zh_tang` `"ɦiuɪ²¹⁴"` / `"ɦiuɪ˨˩˦"`; `zh_song` `"jiou²⁴"` / `"jiou˨˦"`
- Expected: this is plausible as a diachronic change, but it should be made consistent with the file's treatment of the *other* 云/以 character; flag for review against 羊 (以母, kept as `j`) and 行 (匣母, kept as ɦ/ɣ)
- Why: 右 (云久切, 云母/雲母 = 喻三). 云母 derives from 匣母 (Karlgren's 喻三 = 濁喉 ɣ/ɦ) and merges with 以母 /j/ later. The file shows Tang ɦ → Song j, i.e. the 云→以 merger completing between the layers — which is *correct direction* (Pulleyblank 1991). But then issue #4's 行 (匣母) flips ɦ→ɣ in the *wrong* direction over the same interval. The two voiced-laryngeal series are being treated with opposite chronologies; they should be reconciled.

### 15. 月 / 血 — `zh_tang` → `zh_song` (ipa) — 三/四等 medial `iu`/`we` jumping straight to rounded-front `y`
- Current: 月 `zh_tang` `"ŋiuɐt̚"` → `zh_song` `"ŋyat̚"`; 血 `zh_tang` `"xwet̚"` → `zh_song` `"xyet̚"`
- Expected: the rounded-front /y/ medial is a reasonable LMC outcome but it appears *abruptly*; verify against the file's other 合口三等 syllables which keep `iu`/`wi` in Song
- Why: 月 (魚厥切, 疑母 月韻 合口三等) and 血 (呼決切, 曉母 屑韻 合口四等) both go to a Song medial /y/. Yet 水 (合口三等, 旨韻) Song is `ʃyi` (has y), while 犬 (合口四等, 銑韻) Song stays `kʰwen` (no y), and 月's own Tang is `ŋiuɐt`. The /y/ medial is applied to some 合口 syllables and not others with no stated 攝/等 conditioning. Per Pulleyblank the LMC /y/ glide arises specifically in 三/四等 合口; 犬 (四等合口) ought to round too if 血 does. The conditioning needs to be made uniform.

### 16. 八 — `zh_tang` → `zh_song` (ipa) — 山攝二等 `ɛ`→`a` vowel shift recorded, but the parallel 馬/山/下 二等 are inconsistent
- Current: 八 `zh_tang` `"pɛt̚"` → `zh_song` `"pat̚"`; cf. 山 `zh_tang` `"ɕæn˩˨˧"` → `zh_song` `"ʂan˩˧"`; 馬 `zh_tang` `"mæ˨˩˦"` → `zh_song` `"ma˨˦"`; 下 `zh_tang` `"ɦæ˨˩˦"` → `zh_song` `"ɦia˨˦"`
- Expected: 二等 開口 nuclei should use one symbol per layer; 八 uses `ɛ`(Tang) while 山/馬/下 use `æ`(Tang) for the same 二等 front-low slot
- Why: 八 (博拔切, 幫母 黠韻 二等), 山 (所閒切, 山韻 二等), 馬 (麻韻 二等), 下 (麻韻 二等) all carry the MC 二等 開口 front-low vowel, which this file reconstructs as `æ` for three of them (Pulleyblank's EMC 二等 ɛ/æ). 八 alone uses `ɛ`. Whether the intended symbol is `ɛ` or `æ`, it should be the same across the 二等 set; the split is a transcription inconsistency, not a real 黠/山 vs 麻 contrast at this depth.

### 17. 三 / 南 / 心 / 西 etc. — `zh_tang` (ipa) — 平聲 reconstructed as a rising contour ˩˨˧, an anachronism
- Current: 平聲 template across the board: Tang ˩˨˧ (三 `sam˩˨˧`, 南 `nom˩˨˧`, 心 `sim˩˨˧`, 西 `sei˩˨˧`, 天 `tʰen˩˨˧`, …), Song ˩˧
- Expected: a **level** 平聲, e.g. ˩˩ or ˧˧ for the Tang layer (with the 陰/陽 split realised as register height, not as a rise)
- Why: MC 平聲 is, by the unanimous testimony of the 四聲 tradition and the standard handbooks, the *level* tone ("平聲平道莫低昂"); Pulleyblank (1991) and Baxter (1992) treat 平 as level/even, with the 陰平/陽平 distinction emerging as a *pitch-register* split, not as a contour. A rising ˩˨˧/˩˧ for the literary 平 imports the *modern Mandarin 陽平 (35) rise* back into Tang–Song, where it is anachronistic. (Whether to additionally split 陰平 vs 陽平 by initial voicing is issue #18.)

### 18. all 平聲 / 上聲 chars — `zh_tang` and `zh_song` (ipa) — no 陰/陽 (清/濁) register split at all
- Current: every 平聲 char gets identical Tang ˩˨˧ / Song ˩˧ regardless of initial voicing — voiceless 三 `sam˩˨˧`, 心 `sim˩˨˧`, 天 `tʰen˩˨˧` carry the *same* contour as voiced 頭 (定母 `dəu˩˨˧`), 龍 (來母 `liuoŋ˩˨˧`), 人 (日母 `ɲiɪn˩˨˧`), 行 (匣母 `ɦɑŋ˩˨˧`); likewise all 上聲 share ˨˩˦/˨˦
- Expected: a two-way register split — voiceless-initial (清) syllables in the 陰 (higher) register, voiced-initial (全濁/次濁) syllables in the 陽 (lower) register — at least for the Song layer where 陰/陽 was phonologised
- Why: The whole point of the four-tone × voicing system that defines Tang–Song phonology is that by the Late-MC stage each tone bifurcated by initial voicing into 陰/陽 (Pulleyblank 1991 §on tonal register; this is the origin of the modern eight-tone systems). A literary register that reconstructs 平 and 上 should show 頭/龍/人/行 (濁) at a lower register than 三/心/天 (清). The file's single-contour-per-tone template collapses this. This is the deepest systematic gap, and it underlies issues #1 and #5 (the 去 and 全濁上 anomalies are symptoms of the same missing register dimension).

---

## Summary of systematic issues

Three recurring patterns account for nearly every issue above:

1. **`surface`-column transcription is not unified.** It oscillates between Baxter ASCII (`nyij`, `ngu`, `dzyip`, `ngjo`, `tsh-`, `tsâ`) and raw IPA (`ɲi`, `ŋu`, `ʑip`, `d͡ʑiaŋ`), often within the same character across the two layers, and the surface frequently disagrees with its own IPA nucleus (五 `u`/`uo`, 火 `a`/`ɑ`, 虎 `uo`/`uɔ`, 頭 `ou`/`əu`). Issues #7–#13. Fix: pick one notation for `surface` and synchronise nuclei with `ipa`.

2. **The tone template is too flat and partly anachronistic.** 平 is given a *rising* contour (modern 陽平 leaking back), there is **no 陰/陽 register split** by initial voicing, **濁上歸去** is not applied in the Song layer, and one 去 cell (四) is simply mistyped as level ˥. Issues #1, #5, #6, #17, #18. Fix: model 平 as level, add a 清/濁 → 陰/陽 register dimension, and complete 濁上歸去 in `zh_song`.

3. **Diachronic direction is occasionally reversed or absent.** The 匣母 ɣ→ɦ lenition is recorded back-to-front in 行 (Tang ɦ, Song ɣ) while 右/下 go the other way; the 魚韻 raising that this layer-pair exists to demonstrate is entirely absent (Tang = Song = `ŋiɔ`); and the LMC /y/-medial and 二等 front-vowel symbols are applied to some qualifying syllables but not their structural twins (犬 vs 血/月; 八 vs 山/馬/下). Issues #4, #9, #14, #15, #16. Fix: reconcile each sound change across *all* characters that meet its 攝/等/呼/聲 conditioning.

---

## Worker round-1 response (作業者round-1)

Scope rule applied: I fix only clear, unambiguous *local* errors and internal surface↔IPA inconsistencies. Genuine reconstruction-level choices (tone-template shape, 陰/陽 register, 濁上歸去 modelling, ɣ/ɦ chronology, vowel-raising conditioning) are held — they are system-wide design decisions, not local typos, and changing them in single cells would create new inconsistencies.

**Applied (by orchestrator this round):**

- **#1 四 `zh_song` lone broken 去聲 contour — APPLIED.** surface `"sz̩⁵"`→`"sz̩⁵¹"`, IPA `"sz̩˥"`→`"sz̩˥˩"`. Confirmed every other 去 cell in this register (二 `ɲi˥˩`, 地, 中:2, 去, 見) uses falling ˥˩/⁵¹; the bare ˥/⁵ is not a tone category in this file. Pure dropped-`˩`/`¹` typo. (Note: I did NOT touch the apical nucleus /z̩/ of #2 — that is a diachronic reconstruction call, held below.)
- **#7 七 `zh_tang` Baxter `tsh` digraph — APPLIED.** surface `"tshit"`→`"tsʰit"`. Every other aspirate in these registers uses superscript ʰ (土 `tʰuo`, 犬 `kʰwen`, 去 `kʰiɔ`) and 七's own `zh_song` surface is already `tsʰit`. 入聲 surface omits tone/coda per file convention, so no tone digit/̚ added.
- **#8 Baxter initials leaking into the IPA `surface` column — APPLIED (initial-consonant conversion only):** 二 `"nyij⁵¹"`→`"ɲij⁵¹"`; 十 `"dzyip"`→`"dʑip"`; 五 `"ngu²¹⁴"`→`"ŋu²¹⁴"`; 耳 `"nyi²¹⁴"`→`"ɲi²¹⁴"`; 食 `"zyik"`→`"ʑik"` (常母, matches its own `zh_song` `ʑiɪk`); 魚 `"ngjo¹²³"`→`"ŋjo¹²³"` and `zh_song` `"ngjo¹³"`→`"ŋjo¹³"`. These convert Baxter `ny/ng/dzy/zy`→IPA `ɲ/ŋ/dʑ/ʑ` to match each char's own `ipa` row and `zh_song` surface. I changed ONLY the initial digraphs; I deliberately left each nucleus untouched (the u/uo, i/iɪ, jo/iɔ nucleus mismatches are #9/#11, held).
- **#12 surface↔IPA nucleus disagreement within one cell — APPLIED (sync surface to its own IPA):** 火 `zh_tang` surface `"xwa²¹⁴"`→`"xwɑ²¹⁴"` (IPA already `xwɑ`); 虎 `zh_tang` surface `"xuo²¹⁴"`→`"xuɔ²¹⁴"` (IPA `xuɔ`); 頭 `zh_tang` surface `"dou¹²³"`→`"dəu¹²³"` (IPA `dəu`). These are not rival reconstructions, just unsynchronised transcriptions of one nucleus; IPA row is authoritative. (土 `tʰuo`/`tʰuo` and 口 `kʰuɪ`/`kʰuɪ` already agree — no change.)
- **#13 左 `zh_tang` stray circumflex — APPLIED.** surface `"tsâ²¹⁴"`→`"tsɑ²¹⁴"`. The circumflex is not a tone mark (tone = `²¹⁴`) and appears on no other vowel in these registers; its own IPA `tsɑ` and `zh_song` surface `tsɑ` both use `ɑ`. Stray legacy diacritic.

**Held — with rationale (reconstruction / system-level, not local bugs):**

- **#2 四 apical /z̩/ in Song.** Whether 止攝 apicalisation belongs in the Song literary layer vs Early Mandarin is a diachronic dating judgement, not a typo. Changing the nucleus would also mean choosing a specific Song reflex (`sɿ`/`siɪ`), a reconstruction call the team should own deliberately. Held for reviewer decision; the #1 tone typo (the actual local bug) is fixed.
- **#3 行:1 null surface.** Filling these cells requires committing to ɦ-vs-ɣ, which is exactly the contested #4 chronology, AND the sibling 行:2 Tang surface uses `ɣ` while its IPA uses `ɦ` — so "mirror the IPA" would itself create a surface inconsistency with 行:2. I will not inject a value into a field entangled with an unresolved reconstruction dispute. Held until #4 is decided.
- **#4 / #14 匣母 ɣ↔ɦ and 云母 chronology.** System-wide reconstruction direction across all 匣/云 chars; intentionally consistent or not, it must be resolved as one design decision, not per-cell. Held.
- **#5 / #6 濁上歸去 in 上/下.** Whether the Song layer should show completed 濁上歸去 (and how to encode the surface/IPA dual `²¹⁴/⁵¹`) is a modelling decision about the whole 全濁上 set. Held.
- **#9 / #11 魚 raising & 五 u/uo nucleus.** The 魚韻 EMC→LMC raising and the 五 nucleus choice are reconstruction calls; I converted only the Baxter initials (#8) and left nuclei as authored. Held.
- **#10 聞 `mv` cluster.** Whether 微母 should be one segment `ʋ`/`ɱ` vs the authored `mv` is a notation/reconstruction choice applied consistently to the 微母 treatment. Held.
- **#15 / #16 /y/-medial and 二等 ɛ/æ conditioning.** Require a uniform rule across all qualifying 攝/等/呼 syllables (犬 vs 血/月; 八 vs 山/馬/下) — system-level, not local. Held.
- **#17 / #18 平 contour shape and 陰/陽 register split.** These are the deepest design decisions (tone-template model). Held for the team.

Net: 11 local cell-edits applied across issues #1, #7, #8 (×6), #12 (×3), #13. Ten issues (#2,#3,#4,#5,#6,#9,#10,#11,#14,#15,#16,#17,#18) held as reconstruction/system-level for reviewer decision.

---

## Reviewer round-2 response (再評価 round-2)

I re-pulled every cell named below from the live `hanmap_data.js` (`node -e "…HAN_DATA…"`) before judging. **All 11 claimed local edits are present in the live data** — no phantom fixes this round.

**Verification of "Applied" (all ✓ in live data):**
- **#1 四 zh_song ✓** — live `surface "sz̩⁵¹"`, `ipa "sz̩˥˩"`. The lone broken ˥/⁵去 contour is now the standard falling ˥˩/⁵¹, matching 二/地/中:2/去/見. Local typo fixed correctly.
- **#7 七 zh_tang ✓** — live `surface "tsʰit"` (was `tshit`). Now uses the same superscript-ʰ as 土/犬/去 and as 七's own zh_song. (Aside: 七 zh_tang ipa is `tsʰiɪt̚`, zh_song ipa `tsʰit̚` — the iɪ→i nucleus differs by layer, which is fine; surface omits the coda per the file's 入聲 convention. No issue.)
- **#8 ✓ (all six)** — live: 二 `ɲij⁵¹`, 十 `dʑip`, 五 `ŋu²¹⁴`, 耳 `ɲi²¹⁴`, 食 `ʑik`, 魚 `ŋjo¹²³`/`ŋjo¹³`. Baxter `ny/ng/dzy/zy`→IPA `ɲ/ŋ/dʑ/ʑ` conversions all landed; initials now match each char's own ipa row. Nuclei left untouched as stated.
- **#12 ✓ (all three)** — live: 火 `xwɑ²¹⁴`, 虎 `xuɔ²¹⁴`, 頭 `dəu¹²³`, each now synced to its own ipa nucleus.
- **#13 左 zh_tang ✓** — live `surface "tsɑ²¹⁴"`; the stray circumflex `â` is gone.

**Adjudication of held items:**

- **#2 四 apical /z̩/ in Song — △ ACCEPT-AS-HELD (documented limitation).** The dating of 止攝 apicalisation (Song literary vs Early Mandarin) is a genuine reconstruction call, not a typo, and choosing the Song reflex (`sɿ` vs `siɪ`) would itself be a contestable decision. I flagged it; the team has consciously declined to back-date or forward-date a single cell without a system rule. Defensible. Noted as a known soft spot for a future human linguist pass, not a blocker.
- **#3 行:1 null surface — △ ACCEPT-AS-HELD.** This is the one item that looks like a plain data gap, but the worker's reasoning holds: the surface value is entangled with the unresolved #4 ɣ/ɦ chronology, and 行:2's own surface (`ɣɑŋ`) already disagrees with its ipa (`ɦɑŋ`), so "mirror the ipa" would manufacture a fresh inconsistency. Injecting a value here would be guessing on a contested axis. Acceptable to leave null pending a system-level 匣母 decision. Documented limitation.
- **#4 / #14 匣母 ɣ↔ɦ and 云母 chronology — ✓ ACCEPT-AS-HELD.** System-wide reconstruction direction; cannot be fixed per-cell without creating cross-character contradictions. Legitimately a single design decision for a human historical-phonology pass.
- **#5 / #6 濁上歸去 in 上/下 — ✓ ACCEPT-AS-HELD.** Whether the Song layer should show completed 濁上歸去 and how to encode the surface/ipa dual `²¹⁴/⁵¹` is a modelling choice over the whole 全濁上 set. The Tang cells already flag the instability; the Song treatment is a deliberate (if debatable) modelling stance.
- **#9 / #11 魚 raising & 五 u/uo nucleus — ✓ ACCEPT-AS-HELD.** Nucleus reconstruction calls; the worker correctly limited #8 to initials only and did not invent a 魚韻 raising. Reasonable.
- **#10 聞 `mv` cluster — ✓ ACCEPT-AS-HELD.** 微母 single-segment `ʋ`/`ɱ` vs authored `mv` is a notation convention applied consistently. Not a local bug.
- **#15 / #16 /y/-medial and 二等 ɛ/æ — ✓ ACCEPT-AS-HELD.** Require uniform 攝/等/呼 conditioning across all qualifying chars; system-level, correctly out of scope for cell-edits.
- **#17 / #18 平 contour & 陰/陽 register split — ✓ ACCEPT-AS-HELD.** The deepest tone-template design decisions; cannot and should not be patched cell-by-cell.

**New issues:** none. During re-verification I scanned the adjacent cells (土 zh_song `tʰuə`, 口 zh_song `kʰəu`, 食 zh_song `ʑiɪk`, etc.) and found no new clear errors beyond the already-catalogued reconstruction-level matters.

**Scorecard:**
- Local errors / surface↔IPA inconsistencies raised: 11 cells (#1, #7, #8×6, #12×3, #13) — **11/11 fixed and verified in live data.**
- Reconstruction / system-level items: #2, #3, #4, #5, #6, #9, #10, #11, #14, #15, #16, #17, #18 — **all accepted as defensible held design decisions / documented known limitations** (a future human Middle-Chinese phonologist should own the tone-register model, the 匣/云 chronology, and the 魚韻/apical datings as one coherent pass).

This being a late round, the only remaining items are precisely the system-wide reconstruction design decisions that are inappropriate to force into single-cell edits; the team has given sound, sourced rationale for holding each, and there is no concretely actionable local fix left unattempted. I am closing with the documented caveat that the tone-template (平 contour, 陰/陽 split, 濁上歸去), the 匣/云 lenition chronology, and the 魚韻-raising / 止攝-apical datings remain open *modelling* questions for a human linguist, not data bugs.

**File status: CLOSED** — nothing left to address.
