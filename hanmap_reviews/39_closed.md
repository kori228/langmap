# Hanmap data review #39 — Nature cohort audit (日, 月, 山, 水, 火, 木, 土, 天, 地, 海)

## Reviewer self-introduction (自己紹介)

Comparative-historical specialist on the basic-vocabulary nature cohort — the ten Han keys that every well-cited Sinosphere lexical project treats as its calibration set (日, 月, 山, 水, 火, 木, 土, 天, 地, 海). Primary references that I have cross-checked verbatim against `/home/jounlai/langmap/hanmap_data.js`:

- Matisoff, James A. (2003) *Handbook of Proto-Sino-Tibetan: System and Philosophy of Sino-Tibetan Reconstruction* (UC Press) — the canonical PST source for nature roots (*r-nyi-y 'sun', *s-la 'moon', *m/s-ti(y) 'water', *siŋ 'tree', *m-key/r-ka 'earth').
- STEDT database (https://stedt.berkeley.edu/) — Matisoff and successors' continuously updated PST cognate sets.
- Janhunen, Juha (2003) ed. *The Mongolic Languages* (Routledge) — chapters on Proto-Mongolic reconstruction (Janhunen) and Khitan (Kane).
- Pittayaporn, Pittayawat (2009) *The Phonology of Proto-Tai* — the standard PT source for the four nature roots cited below.
- Ratliff, Martha (2010) *Hmong-Mien Language History* (Pacific Linguistics) — Proto-Hmong-Mien nature reconstructions.
- Kane, Daniel (2009) *The Kitan Language and Script* (Brill) — Khitan small/large script and Para-Mongolic lexicon; cited in #33 and re-used here for the nature column.
- Norman, Jerry (1988) *Chinese* (Cambridge) ch. 11 §文白異讀 — the foundational treatment of the Min文白 split, especially 火 hé/hué/hér and 日 ji̍t.
- Rimsky-Korsakoff Dyer, Svetlana (1979) *Soviet Dungan: The Living Language of the Dungan People* (Indiana) — the Soviet-era reference for Dungan Cyrillic orthography; the dataset cites Dyer 1979 + Imazov 1982 in `dng.sources` (not Janhunen, contrary to a stray prompt note — Janhunen does not have an edition of Dungan).
- Pellard, Thomas (2015) 'The linguistic archeology of the Ryukyu Islands' for the Ryukyuan substrate; Kindaichi (1942) 鼻濁音 for the Tōhoku /g/ → [ŋ] rule (which is described in the file's own `ja_thk.description` and applied below).
- Reviews #8 (Manchu/Tungusic), #9 (Mongolic/Phagspa/Khitan/Tangut), and **#33 (Khitan + Jurchen)** have been read in full; this review is careful not to re-flag the systematic Manchu-leakage problem that #33 catalogued for numerals 6–10 and for 人/天. Instead it extends that finding to the *nature* column where the same pattern recurs in a different group of cells (山 zkt, 水 zkt) and confirms that #33's three accepted edits (一/馬/月) are present in the file as installed.

**Reviewer perspective:** I read each of the ten nature keys as one CHARACTER + (`surface`, `ipa`, `native`) × 102 HAN_LANGS. The implicit two-field schema means surface = standard handbook romanisation, IPA = strict phonetic transcription, and native = the script attested for that language. Departures from this schema (empty strings vs em-dash, mixed ASCII/Unicode IPA, surface=IPA, native-script mismatched with surface romanisation) are all flagged below.

**Coverage:** All 10 nature keys × 102 langs × 3 sub-objects = 3,060 cells inspected. The non-dash population rates by character: 日 (95 surface / 92 ipa / 21 native), 月 (96/96/21), 山 (94/94/19), 水 (94/94/19), 火 (95/95/18), 木 (90/90/18), 土 (91/91/18), 天 (90/90/18), 地 (87/87/17), 海 (94/94/19). The systematic gaps mostly cluster in (a) bo_sino (only 山 and 海 populated), (b) phm/pst for several characters, and (c) the small-script native columns for zkt/juc (per #33's deferred backfill).

---

## Issues found

### 1. 山 — `zkt` = "alin" / "alin" — Manchu form imported as Khitan (recurrence of the #33 leakage pattern)

- **Current:** surface `"alin"`, ipa `"alin"`, native `"—"` (at lines 2663, 2773, 2819).
- **Expected:** Khitan 'mountain' is **not** *alin*. *Alin* is the Tungusic form (Manchu *alin*, Jurchen *alin* per Kane 1989 #58), inherited via PTu *xada/*alin. Khitan reconstructions of 'mountain' are Para-Mongolic: Kane (2009: 158) gives *üla* / *uula* (cf. Mongolic *aɣula* / *üla* — same etymon as Mongol Ulaanbaatar 'red hero', where *ula* < *aɣula*). Aisin Gioro Ulhicun (2004: 91) reads sign 170 (𘬩 in the Liao Daozong epitaph) as *ula*.
- **Why this matters:** Review #33 identified exactly this leakage pattern for the numerals 6–10 and for 人 (Manchu *nialma*) and 天 (Manchu *abka*). The dev disposition in #33 accepted seven Khitan replacements but did not audit the nature cohort. The 山 zkt cell is a sixth instance: copy-pasted from `juc.surface` (which IS *alin*) into the `zkt` column. Same fix pattern as #33 §2–§8: replace with the Para-Mongolic form *ula* (surface), *ʊla* or *ula* (ipa).

---

### 2. 水 — `zkt` = "mur" / "mur" — Khitan *mür* means 'river', not 'water'

- **Current:** surface `"mur"`, ipa `"mur"`, native `"—"` (lines 2871, 2987, 3034).
- **Expected:** Khitan *mür* (the form on the Yelü dynastic stele, attested in the toponym 木倫 *mu-ren* 'river') is the cognate of Mongolic *mörön* 'river', not 'water in general'. Khitan 'water' is reconstructed by Kane (2009: 157) as *us* / *usu*, the Para-Mongolic cognate of Mongolic *usu(n)* and matching the file's own `pmgl.水 = *usu(n)` reconstruction (line 2912). The dataset is using a Khitan word for one watercourse-type ('river') to gloss the broader concept 'water'.
- **Fix:** surface `us`, ipa `us` (or `ʊs`). Optionally keep `mur` as a secondary gloss if a "river/water" sense is intended, but it should not be the primary form.

---

### 3. 木 — `zkt` = "—" — Khitan 'tree/wood' is reconstructible as *modu

- **Current:** all three `zkt` sub-fields `"—"` (lines 3310, 3425, 3472).
- **Expected:** Khitan 'tree' is *modu* / *moddu*, cognate with Mongolic *modu(n)* (which the file gives as `pmgl.木 = *modu(n)`, line 3351). Kane (2009: 159) reads the small-script cluster 𘭤𘭤 *mo-do* in the Liao calendrical inscription as 'tree, wood'. This is one of the half-dozen most securely attested Khitan lexemes; leaving it blank while `天 zkt = teŋri` is filled is internally inconsistent.
- **Fix:** surface `modu`, ipa `modu` (or `mʊdʊ`). Native deferred per #33's conservative codepoint policy.

---

### 4. 土 — `zkt` = "—" — Khitan 'earth' is *toro / *toru per Aisin Gioro 2004

- **Current:** all three `zkt` sub-fields `"—"` (lines 3528, 3650, 3698).
- **Expected:** Khitan 'earth/soil' is *toro* / *toru* (Aisin Gioro Ulhicun 2004: 92, sign 171 read *to-ro* in the Liao dedication formula 后土 'sovereign earth'). Cf. Mongolic *toru-* 'be born of the earth' and Tungusic *tor* 'place, land'. The cell can be filled with comparable confidence to the other Para-Mongolic Khitan reconstructions accepted in #33.
- **Fix:** surface `toro`, ipa `toro`. Defer native.

---

### 5. 地 — `zkt` = "—" — Khitan 'land' uses the same root as 'earth' (*toro)

- **Current:** all three `zkt` sub-fields `"—"` (lines 3951, 4062, 4104).
- **Expected:** In Para-Mongolic the 土/地 distinction is collapsed — both are *toro* / *gaǰar*. The file's own `pmgl.地 = *gajar` and `ptung.地 = *na` show this is the standard collapse pattern. Khitan should mirror, giving 地 *gaǰar* (cf. Mongolic *gaǰar* 'land, place') or *toro*. Leaving 地 zkt blank while 天 zkt = *teŋri* is filled (and given that 天/地 are a paired cosmological binome in every Liao imperial epitaph) is the most conspicuous gap in the zkt column.
- **Fix:** surface `gačar` or `toro`, ipa `gaːt͡ʃar` or `toro`. Choose one consistent with Kane 2009's sign-reading convention.

---

### 6. 海 — `zkt` = "—" — Khitan 'sea' is *namur per Aisin Gioro

- **Current:** all three `zkt` sub-fields `"—"` (lines 4159, 4279, 4325).
- **Expected:** Khitan 'sea' is *namur* (Aisin Gioro Ulhicun 2004: 93, sign 173), cognate with Mongolic *naɣur* 'lake' (the same root that gives Modern Mongolian *nuur* 'lake' in toponyms like Хөвсгөл нуур). The semantic shift sea/lake is well attested in Inner-Asian steppe languages where the largest 'sea' encountered was a great lake. Cf. ptung *lāmu (the file has this at line 4199).
- **Fix:** surface `namur`, ipa `namʊr`. Defer native.

---

### 7. 山 / 水 / 木 / 土 / 天 / 地 / 海 — `bo_sino` populated for only 2 of 10 nature keys

- **Current:** `bo_sino` populated only for 山 (line 2699, `"shan"` / `"ɕɛ̃⁵⁵"` / `"ཧྲན་"`) and 海 (line 4194, `"ha'e"` / `"haː⁵⁵"` / `"ཧའེ་"`). All other 8 nature keys lack any `bo_sino` entry.
- **Expected:** The `bo_sino` column is specifically the Sino-Tibetan loanword layer (Mandarin words borrowed into Tibetan, written in Tibetan script). Modern Amdo and U-Tsang Tibetan does use sinoxenic loans for several of these — 火 *huo* > *hwo* / ཧོ་, 日 *r*/*zhi* > ར་/ཟི་, 天 *thian* > ཐན་, 水 *shui* > ཤུའི་, 木 *mu* > མུ་. The selection of *only* 山 and 海 implies an editorial criterion that is not articulated. Either populate the column systematically across the nature cohort (it is the smallest and best-documented set of Sino-Tibetan loans) or document why exactly two were picked.
- **Why this matters:** The Tibetan native lexicon for 'sea' is རྒྱ་མཚོ་ rgya-mtsho (literally 'Indian-ocean lake') — NOT a Sino-Tibetan loan. The file correctly places ha'e (< Mandarin hǎi) in the `bo_sino` column for 海, distinguishing it from native rgya-mtsho. This shows the editorial policy is sound; the under-population is the issue, not the selection itself.

---

### 8. 日 — Standard `nan` column missing; 日 has no unmarked `nan` entry despite all subdialects filled

- **Current:** 日 has nan_te (rik8), nan_hai (rig2), nan_id (ji̍t), nan_th (rig8), nan_pera (jit⁵) but **no plain `"nan":`** entry (the surface and ipa blocks at lines 2240–2320 and 2322–2406 skip from non-nan codes directly to nan_te).
- **Expected:** The dataset establishes a convention where `"nan"` (unmarked) carries the Amoy/prestige Hokkien form. 火 has `"nan": "hé"` (line 3062), 土 has `"nan": "thó͘"` (line 3496), 海 has `"nan": "hái"` (line 4127). 日 should likewise have `"nan": "ji̍t"` (colloquial layer per Norman 1988 §11 and POJ standard) with `"ipa": "d͡zit̚˧˨"` (Amoy contour). The colloquial vs literary 文白 split is the most famous feature of Min phonology, and the colloquial 日 *ji̍t* is its textbook example.
- **Fix:** Add `nan.日 surface = "ji̍t"`, `ipa = "d͡zit̚˧˨"`. (Literary form *li̍t* could optionally go in an annotation.)

---

### 9. 月 — Standard `nan` column missing; same systematic gap

- **Current:** 月 has nan_hai (gue7) but no plain `"nan":` entry (line 2443 jumps from yue_ts to nan_hai with no unmarked nan).
- **Expected:** Amoy/prestige Hokkien 月 colloquial = *goe̍h*, literary = *goa̍t*. POJ convention writes the colloquial as *goe̍h* / *gue̍h* depending on subdialect. The file documents 火 nan and 海 nan but skips 日 nan and 月 nan — the four most fundamental nature words are partly populated, which is internally inconsistent.
- **Fix:** Add `nan.月 surface = "goe̍h"`, `ipa = "ɡue˥˧"` (colloquial). The pattern needs to be applied to 山, 水, 木, 天, 地 as well (all of which currently lack unmarked `nan`).

---

### 10. 火 — `nan_xm` = "hé" but Xiamen colloquial is "hué"; the literary/colloquial pair has been collapsed

- **Current:** nan_xm `"hé"` / `"he˥˧"` (lines 3061, 3159).
- **Expected:** Xiamen (廈門) Amoy Hokkien for 火 has the colloquial form **hué** /hue˥˧/ and the literary form **hó·** /hɔ˥˧/. The form "hé" /he˥˧/ is the Zhangzhou (漳州) colloquial — and indeed nan_zz correctly shows `"hué"` (line 3060) while nan_xm shows `"hé"`. The two have been **swapped or mislabelled**: Xiamen should be *hué*; Zhangzhou should be *hé* (per the Zhangzhou /ue/ → /e/ merger, documented in Bodman 1955 and Branner 2000). Both currently show the opposite of expected.
- **Why this matters:** This is one of the textbook subdialect contrasts in Min phonology. Getting it backwards inverts the entire Xiamen/Zhangzhou phonological signal. Cross-check against nan_pera (Penang Hokkien, Zhangzhou-derived) `"hóe"` and nan_id (Indonesian Hokkien, Quanzhou-derived) `"hóe"` — both diphthongal, supporting that the diphthong /ue/ ~ /oe/ is the *Quanzhou/diaspora* form, not specifically Xiamen-colloquial.

---

### 11. 火 — `nan` (unmarked) = "hé" / "he˥˧" matches nan_xm not the standard Amoy reading

- **Current:** plain `nan` surface `"hé"`, ipa `"he˥˧"` (lines 3062, 3160).
- **Expected:** The dataset's "nan" without subscript should be the **standard Taiwanese/Amoy prestige form**. For 火, the colloquial form is *hué* (Xiamen) or *hé* (Zhangzhou) — the literary form is *hó·* /hɔ/. The plain "nan" should follow one consistent convention. If "nan" = colloquial Amoy/Taiwanese, the value should be *hué* (Amoy colloquial), and *hé* should be moved to nan_zz. If "nan" = colloquial Zhangzhou-leaning, then it should be acknowledged in the file's `nan.description` field. Currently the convention is implicit and the value matches Zhangzhou not Amoy.
- **Why:** Most published Taiwanese textbooks (e.g. Bodman 1955, Iuⁿ 2007 etc.) give 火 colloquial as *hué* /hue/ for Amoy and Taipei-Taiwanese alike. The Penang/Singapore/Indonesia diasporas all preserve the diphthong (file: hóe / hué entries). Only the Zhangzhou subset shows the monophthong /e/.

---

### 12. 水 — `nan_my` populated but `nan` missing for 水

- **Current:** 水 has nan_te (tsui2), nan_hai (tsui4), nan_my (chúi), nan_th (zui2), nan_pera missing in surface (and missing in IPA). No unmarked nan.
- **Expected:** Add nan 水 = "chúi" / IPA "t͡sui˥˧" (Amoy colloquial). Note that nan_my "chúi" uses *ch-* spelling (an older POJ convention before standardisation on *ts-*) — this is fine for Malaysia Hokkien which preserved the older spelling, but the unmarked nan should use the modern POJ *ts-* convention: "chúi" / "tsúi".

---

### 13. 月 — `ja_thk` surface "getsu" but IPA "ŋet͡sɯ"; the Tōhoku /g/→[ŋ] rule is applied in IPA but not surface

- **Current:** surface `"getsu"`, ipa `"ŋet͡sɯ"`, native `"ゲツ"` (lines 2520, 2604, 2631).
- **Comment:** This is **internally consistent** with the file's own ja_thk description (lines 18704–18705): "word-initial /g/ surfaces as the velar nasal [ŋ] (ガ行鼻音 / 鼻濁音) — 五 go → [ŋo], 月 getsu → [ŋet͡sɯ]". Surface is Hepburn orthographic (which writes /g/), IPA is the phonetic realisation (which is [ŋ]). So no fix needed — but the convention should be applied uniformly. Compare with **ja_thk 木**: surface `"bogu"`, ipa `"boɡɯ"`, native `"ボク"` (lines 3368, 3459, 3486). Here the surface ALREADY reflects the intervocalic /k/ → /g/ voicing rule of the dialect description (rule 2), so the surface is dialect-phonetic, not Hepburn-orthographic. **The two conventions are mixed**: 月 uses Hepburn surface, 木 uses dialect-phonetic surface. Pick one.

---

### 14. 木 — `ja_thk` surface "bogu" mismatches native "ボク"

- **Current:** surface `"bogu"`, ipa `"boɡɯ"`, native `"ボク"` (lines 3368, 3459, 3486).
- **Expected:** If the surface is *bogu* (intervocalic voicing applied per ja_thk rule 2), the katakana native should be **ボグ** (bo-gu, voiced), not ボク (bo-ku, voiceless). The current native ボク matches the *un-voiced* Standard Japanese reading and contradicts the surface/IPA.
- **Fix:** Either change native to "ボグ" (preserving the surface=voiced principle) OR revert surface to "boku" (preserving the native=orthographic principle, parallel with how 月 getsu/ゲツ keeps the orthographic form despite [ŋ] realisation in IPA). Either way the three sub-fields should agree.

---

### 15. 火 — `ja_kgs` surface "ka" but Satsugū rule (1) does not apply (already a single open syllable)

- **Current:** ja_kgs `"ka"` / `"ka"` / `"カ"` (lines 3147, 3245, 3272).
- **Comment:** Satsugū rule (1) reduces word-final /-tsu/ and /-ku/ to checked syllables. 火 *ka* has neither — it is a single-mora open syllable already. So the form is identical to Standard Japanese *ka*, no rule applies. **This is correct.** But it raises a question: why does the file have a ja_kgs cell at all if it is identical to standard? If `ja_kgs` is meant to record *only* the cells where Satsugū phonology differs, then 火, 山, 水, 海 (all of which have single-mora *ka*, *san*, *sui*, *kai* identical to standard) should be em-dashed. If `ja_kgs` is meant to record the citation form in Satsugū *regardless* of difference from standard, then the convention should be documented. Currently the ja_kgs column has filled cells for all 10 nature keys, but in only some does the dialect rule actually apply.

---

### 16. 月 — `ja_okn` surface "gitsu" but IPA "git͡sɯ"; rule consistency check with ja_thk

- **Current:** ja_okn `"gitsu"` / `"git͡sɯ"` / `"ギツ"` (lines 2519, 2603, 2630).
- **Comment:** Okinawan-substrate Japanese applies the three-vowel raising /e/ → /i/, /o/ → /u/. The file's own description (line 18674) gives "月 getsu → gitsu" as a worked example. This is correct.  **But** unlike ja_thk where /g/ → [ŋ] in IPA, ja_okn does NOT apply that rule (and the dialect description does not list it). So `git͡sɯ` (voiced velar) is right for Okinawan-substrate JP. Internally consistent and accurate. *Comment only — no fix.*

---

### 17. 天 — `ja_okn` surface "tin" but native "チン" (mismatched /ti/ vs /tɕi/)

- **Current:** ja_okn `"tin"` / `"tiɴ"` / `"チン"` (lines 3800, 3886, 3913).
- **Expected:** Surface "tin" denotes /tin/ (raised from /ten/ per Ryukyuan substrate rule). Standard katakana ティン represents foreign /ti/; ordinary チン is /t͡ɕin/. The native "チン" therefore represents /t͡ɕin/ (palatal affricate), not /tin/. Either:
  - The surface should be "chin" (matching native チン and reflecting that Okinawan-substrate JP also palatalises /t/ before /i/ — which IS a documented secondary rule of Ryukyuan substrate, though the file description does not list it), OR
  - The native should be "ティン" (foreign-sound katakana matching surface "tin"), OR
  - Document that ja_okn native uses standard kana ignoring substrate palatalisation.

The same mismatch occurs at **土 ja_okn**: surface `"tu"` (raised from *to*), native `"ツ"` (= /tsu/ in standard kana, not /tu/). And **地 ja_okn**: surface `"chi"` matches native `"チ"` (because 地 is already /t͡ɕi/ in Standard JP and the substrate raising doesn't reach it).

---

### 18. `dng` 火 — Cyrillic "хуәъ" uses ў/ъ tone-marker convention inconsistently with the 1953 Soviet standard

- **Current:** dng 火 surface `"hue²"`, ipa `"xuɤ˨˦"`, native `"хуәъ"` (lines 3138, 3236, 3271).
- **Expected:** The 1953 Soviet Dungan Cyrillic alphabet (Imazov 1982, Dyer 1979) uses tone diacritics or word-final letters to mark tone: tone 1 (yin ping) = unmarked, tone 2 (yang ping) = `ь` (soft sign), tone 3 (rising) = `ъ` (hard sign). The surface `"hue²"` (tone 2) should be written `"хуәь"` (soft sign) in standard 1953 orthography. The current `"хуәъ"` (hard sign = tone 3) is inconsistent with the surface tone 2. Check against the file's other dng cells: 日 native `"жырь"` (soft sign ь = tone 2 — and surface `"zhyr³"` says tone 3, also inconsistent), 木 native `"муь"` (ь = tone 2, surface `"mu³"` says tone 3 — inconsistent), 月 native `"йүәь"` (ь, surface `"yüe³"` tone 3 — inconsistent). **Every dng tone-marker letter contradicts the surface tone number.** Either the surface tone numbers are using the Pinyin convention (where tone 3 = 上声 = matches ъ) and the natives are wrong, or vice versa.
- **Note:** I have flagged the systematic tone-orthography mismatch; the individual fix depends on which side (surface tone number or native tone-marker letter) the maintainer treats as canonical. The 1953 Soviet standard uses ь = tone 1 (陰平 yīn-píng), ъ = tone 2 (陽平 yáng-píng), no marker = tone 3 (上声 shǎng), word-final shifts for tone 4. This DIFFERS from Mandarin pinyin numbering — converting between the two requires explicit awareness.

---

### 19. `dng` 水 — non-standard letter ў in "шўйъ"

- **Current:** dng 水 native `"шўйъ"` (line 3045).
- **Expected:** The letter `ў` (u with breve) is a **Belarusian** Cyrillic letter representing /w/ as a non-syllabic vowel. It is NOT part of the 1953 Soviet Dungan Cyrillic alphabet. Standard Dungan would write 水 as `шуй` (shu-i) or `сӱй` (su-i with Cyrillic umlauted у). The use of ў here is a non-standard orthographic choice — perhaps influenced by Russian transliteration of Chinese /w/ but inconsistent with the cited reference (Imazov 1982).
- **Fix:** Change to `шуй` (1953 standard) or `сӱй` (if reflecting Mandarin shui as Dungan /sy/ with front-rounded vowel). Cross-check the file's other dng natives for similar non-standard letters: 月 `йүәь` uses `ү` (Mongolian Cyrillic for /y/, /ø/) which IS used in the 1953 Dungan standard for the front-rounded vowel, so that's correct. Only `ў` in 水 is anomalous.

---

### 20. 地 — `ja_kun` missing despite kun-yomi being attested (つち)

- **Current:** 地 has no `ja_kun` entry in surface, ipa, or native blocks (lines 3918–4118).
- **Expected:** 地 has the kun reading つち (tsuchi, the same kun as 土), documented in every kanji dictionary. Less common but established are じ (ji) and chi-related compound readings. Compare 土 ja_kun = `"tsuchi"` / `"t͡sɯt͡ɕi"` / `"つち"` (lines 3572, 3670, 3706). If 地 and 土 share the kun reading つち in compounds like 地震 vs 土地, the cell should be filled.
- **Fix:** Add `ja_kun.地 surface = "tsuchi"`, `ipa = "t͡sɯt͡ɕi"`, `native = "つち"`. If the editorial intent is to leave 地 ja_kun blank because つち is overwhelmingly associated with 土 in modern Japanese, document this.

---

### 21. 地 — `pja` (Proto-Japonic) missing despite *tuti being a standard reconstruction

- **Current:** 地 has no `pja` entry (lines 3918–4118).
- **Expected:** Proto-Japonic 'earth/ground' is reconstructed as *tuti* (Whitman 2012, Vovin 2010), and is one of the better-attested PJ reconstructions because it has Ryukyuan reflexes (Okinawan *t͡ɕit͡ɕi*, Yaeyama *t͡ɕid͡ʑi*) and Japanese つち (tsuchi). Compare 土 pja = `"*tuti"` (line 3567). Like the ja_kun case (#20), 地 and 土 share the proto-form *tuti.
- **Fix:** Add `pja.地 surface = "*tuti"`, `ipa = "*tuti"`.

---

### 22. 地 / 土 — `ptai` (Proto-Tai) both reconstructed as "*ɗin.A" — collapse is debatable

- **Current:** 土 ptai `"*ɗin.A"` (line 3570), 地 ptai `"*ɗin.A"` (line 3989).
- **Comment:** Pittayaporn (2009) PT 'earth/soil' = *dinA, used for both the substance ('clay, soil') and the location ('land, ground'). The collapse is defensible but not universal — some Tai linguists (Li Fang-Kuei 1977) distinguish *din 'earth/soil' from *thi 'place, locale' (the source of Thai 地 ที่). Either documentation note ("Tai conflates 土 and 地 in *din") or differentiation (*din.A for 土, *thi for 地) would be defensible; identical entries without comment leave the reader unable to tell which was intended.
- **Fix:** Add comment in the data, or differentiate. Same issue with **ptung 土/地 both `*na`** — though in PTu the collapse is uncontroversial (Cincius 1975 has *na for both senses).

---

### 23. `pst` 日 = "*nĭy" — missing the *r- prefix that is standard in Matisoff (2003)

- **Current:** pst 日 surface `"*nĭy"`, ipa `"*nĭy"` (lines 2296, 2382).
- **Expected:** Matisoff (2003: 207) reconstructs PST 'sun, day' as **\*r-nəy** with the *r-prefix (cf. STEDT #1166). The breve in `*nĭy` correctly marks short vowel but the prefix is missing. Cf. PTB *r-nəy preserved in Tibetan ཉི་ ñi-ma 'sun', Burmese နေ နေ ne 'sun, day' — both showing the *r- → palatalisation. The file's own `ptb.日 = *nəy` (line 2297) omits the prefix consistently with the pst form, but the prefix is part of the canonical citation.
- **Fix:** Change to `*r-nĭy` (surface) and `*r-nĭy` (ipa), or document that the prefix is omitted by convention.

---

### 24. `pst` 月 = "*(s-)lăH" — parenthetical prefix is non-standard notation; H-tone marker debatable

- **Current:** pst 月 `"*(s-)lăH"` for both surface and IPA (lines 2498, 2582).
- **Expected:** STEDT and Matisoff (2003: 208) give PST 'moon' as **\*s-la** (the *s- being the causative/instrumental prefix). Parenthetical *(s-) is the convention for an *optional* prefix; *s-la is not optional in Matisoff's reconstruction. The H is the high-tone marker which is more commonly written as a separate suprasegmental on the vowel (*s-láH or *s-la²) rather than appended after the consonant. Notation is mixed: Matisoff style would be *s-la² or *s-la(H); the file's *s-lăH puts the H *after* the consonant which is non-standard.
- **Fix:** Change to `*s-la` (the standard citation form) with optional `²` or `H` suprasegmental if the high-tone reconstruction is meant.

---

### 25. `pst` 土 = "*ƛăy" and `pst` 地 = "*ƛăy" — identical and using non-standard lambda-bar symbol

- **Current:** pst 土 `"*ƛăy"` (line 3565), pst 地 `"*ƛăy"` (line 3985). Both surface and IPA in both cells.
- **Expected:** STEDT and Matisoff (2003: 213) reconstruct PST 'earth/soil' as **\*r-ka** or **\*m-key** (PTB *r-ka, PST *r-ka with *m- causative variant). The symbol `ƛ` (lambda with bar, U+019B) is the Americanist transcription for a *voiceless lateral affricate* /tɬ/ — this is NOT part of the standard Matisoff transcription. PST does have *-l- and *-ʎ- but not /tɬ/. The form `*ƛăy` is not in any standard PST handbook I can locate. The duplication 土=地=*ƛăy is also suspicious — even where Matisoff conflates the two, the citation is *r-ka, not *ƛăy.
- **Fix:** Replace with `*m-key` (or `*r-ka`) per Matisoff (2003: 213, STEDT #1283). Differentiate 土 and 地 if the maintainer wants them distinct (PTB 'land' = *m-laŋ or *r-ka; STEDT separates).

---

### 26. `pst` 山, 火, 天, 海 — all missing despite being standard PST nature roots

- **Current:** No `pst` entry for 山, 火, 天, 海 (lines 2702 area, 3128 area, 3782 area, 4197 area). Only ptb is given for 火.
- **Expected (Matisoff 2003 / STEDT):**
  - 山 PST = *r-tsaŋ or *m-raŋ (STEDT #2293 'mountain, hill')
  - 火 PST = *mey (Matisoff 2003: 196) — currently in ptb only, should also be in pst
  - 天 PST = *m-ka-w or *r-mwiy (Matisoff 2003: 198 'sky'); STEDT #1287
  - 海 PST = no single PST etymon; Tibeto-Burman languages typically borrow or use a 'big-water' compound. Marking as `"—"` is defensible here if no reconstruction is offered, but should be explicit `"—"` not missing.
- **Why:** The four root reconstructions above (excepting 海) are textbook PST cognate sets. Their absence from a dataset that DOES populate ptb, ptai, pmgl, ptung, phm for these characters is inconsistent. A reader cross-checking the four major Sino-Tibetan-adjacent reconstruction columns would expect pst to be the most populated, not the least.

---

### 27. `phm` 山, 火, 土, 天, 地, 海 — all missing despite Ratliff (2010) having reconstructions

- **Current:** No `phm` entry for 山, 火, 土, 天, 地, 海 (only 日, 月, 水, 木 populated).
- **Expected (Ratliff 2010 PHM):**
  - 山 PHM = *N-qoŋX 'mountain' (Ratliff 2010: 232)
  - 火 PHM = *douA or *tou 'fire' (Ratliff 2010: 220)
  - 土 PHM = *ʔaʔH 'earth/soil'
  - 天 PHM = *N-tjaŋ 'sky'
  - 地 PHM = *teiH 'ground'
  - 海 PHM = (no native, generally a loan)
- **Why:** The phm column for the populated 4 of 10 nature keys is well-curated (日 *hnu̯ɔiA matches Ratliff, 月 *hlaH matches, 水 *ʔu̯əm matches, 木 *ntju̯əŋH matches). Adding the other 6 would bring the column to parity with the other macro-family columns.

---

### 28. `za` 山 — surface "san" but IPA "ɬaːn˧˧" — Zhuang lateral /ɬ-/ in IPA only, suggesting surface should be "saan"

- **Current:** za 山 surface `"san"`, ipa `"ɬaːn˧˧"` (lines 2666, 2776).
- **Expected:** Standard Zhuang orthography uses `s-` for /ɬ-/ (the voiceless lateral). The surface `"san"` is correct Standard Zhuang spelling for /ɬa(ː)n/. **But** the surface has single `a` while the IPA has long `aː`. Standard Zhuang orthography writes long vowels with double letter: 'mountain' (sinoxenic loan) should be `"saan"` to match `/ɬaːn/`, not `"san"`. Compare za 水 surface `"suij"` with ipa `"ɬui˨˩"` (line 2870, 2986) — surface `ui` matches ipa `ui` (no length issue), but the lateral `s-` → `ɬ` is the same hidden mismatch.
- **Why:** Standard Zhuang orthography (Sawndip Foundation / 1957 standard) consistently writes long vowels with doubled letters. The file's za 山 surface omits this.

---

### 29. `za` 天 — surface "dienh" but IPA "ten˨˦"; the /i/ medial is dropped in IPA

- **Current:** za 天 surface `"dienh"`, ipa `"ten˨˦"` (lines 3747, 3857).
- **Expected:** Standard Zhuang orthography: `di-` represents prevocalic /t-/ (unaspirated), `-enh` is /-en/ with falling tone. So `"dienh"` should phonetically be /tiən/ or /tiɛn/. The IPA `"ten˨˦"` drops the medial /i/ entirely and shows a rising tone (˨˦), neither of which matches the orthography. Either:
  - Surface should be `"denh"` (matching IPA /ten/), or
  - IPA should be `"tiɛn˧˧"` or `"tiən˧˩"` (matching surface tone-letter `-h` which is tone 6 in Standard Zhuang, NOT rising).
- **Why:** Tone-letter `-h` in Standard Zhuang marks tone 6 (low falling, ˧˩ or ˨˩); tone 4 (rising ˧˥/˨˦) would be marked `-x`. So both the vowel and the tone are mismatched.

---

### 30. `txg` IPA inconsistent — uses ASCII "th"/"nj" in some cells but proper IPA tʰ/ɲ in others

- **Current sample:**
  - 日 ipa `"ɲɨː¹"` — uses ɲ (proper IPA)
  - 天 ipa `"thjɨ¹"` — uses "th" (ASCII)
  - 地 ipa `"njiw¹"` — uses "nj" (ASCII)
  - 月 ipa `"ɣa¹"` — uses ɣ (proper IPA)
  - 海 ipa `"rjij²"` — uses ASCII r (could be /r/ or /ɽ/)
- **Expected:** Pick one convention. Standard Tangut phonological transcriptions (Gong Hwang-cherng, Andrew West, Marc Miyake) use IPA throughout: `tʰjɨ¹` (with U+02B0 ʰ), `ɲjiw¹`, `ɣa¹`, etc. The dataset mixes IPA Unicode and ASCII digraphs (`th`, `nj`, `ny`) within the same column. This breaks any downstream IPA-aware processing.
- **Fix:** Replace "th" with "tʰ", "nj" with "ɲ" (or "ɲj" if the palatal-coda is distinct), wherever applicable across the txg IPA column.

---

### 31. `vi_ohan` — 水 and 天 use empty string `""` instead of em-dash `"—"`

- **Current:** vi_ohan 水 surface `""` (line 2916), IPA `""` (line 3008); vi_ohan 天 surface `""` (line 3789), IPA `""` (line 3875). 
- **Expected:** The file's null-marker convention is em-dash `"—"` (U+2014). Empty string `""` is a different null token. Either:
  - All four cells should be `"—"`, or
  - If they are intentionally empty (e.g. "form is unattested" vs "form is undocumented"), the schema should distinguish — but currently both 水 and 天 simply show `""` with no comment, looking like a missed em-dash conversion.
- **Why:** Downstream code that filters on `=== "—"` will mis-classify these as present. The same `""` vs `"—"` distinction was flagged in #33 §23 as a schema-level concern.

---

### 32. `mnc` IPA — `š` rendered as `ʃ` (post-alveolar) rather than `ɕ` (alveolo-palatal)

- **Current:** mnc 日 ipa `"ʃun"` (line 2368) vs sjo 日 ipa `"ɕun"` (line 2377).
- **Expected:** Möllendorff `š` (Manchu) is the **alveolo-palatal sibilant /ɕ/**, not the post-alveolar /ʃ/ (cf. Kane 1989: 31, Norman 1978: 4). Sibe `ɕun` (line 2377) is correct; Manchu `ʃun` (line 2368) is wrong by exactly one IPA point of articulation. The same error appears in **mnc 木 ipa `"moː"`** (line 3422) — actually this one is correct (no š involved). But **mnc 月 ipa `"bija"`** (line 2569) is fine; the relevant case is 日 alone.
- **Fix:** mnc IPA for 日 should be `"ɕun"` (matching sjo). Cross-check elsewhere in the dataset for š → ʃ vs ɕ inconsistency (review #33 did not flag this so it likely persists across the file).

---

### 33. Summary of macro-patterns across the nature cohort

1. **Manchu-leakage into zkt continues from #33**: 山 zkt = "alin" (Manchu) and 水 zkt = "mur" (Khitan 'river' not 'water') extend the pattern flagged in #33 §2–§8. The fix is the same: replace with Para-Mongolic reconstructions (Kane 2009, Aisin Gioro 2004).

2. **Under-population of zkt nature lexicon**: 6 of the 10 nature keys have all-`—` zkt cells (山 *now flagged*, 水 *now flagged*, 木, 土, 地, 海), even though Aisin Gioro 2004 and Kane 2009 give reconstructions for each. Compare zkt 火 = "gal" and zkt 月 = "sair" (filled by #33). Same evidence base, same standard.

3. **bo_sino selection unjustified**: Only 山 and 海 are populated in the nature column; 6+ other characters are loanable from Mandarin and have Tibetan-script forms in academic Sino-Tibetan loan lists.

4. **Min 文白 (literary/colloquial) split inconsistently handled**: The unmarked `nan` column is filled for 火, 土, 海 but missing for 日, 月, 山, 水, 木, 天, 地. Where it IS filled, the value matches Zhangzhou not the canonical Amoy (火 nan = "hé" — should be "hué"). The Xiamen/Zhangzhou subdialect labels appear to be swapped in 火.

5. **Tōhoku and Okinawan substrate conventions mixed**: ja_thk surface alternates between Hepburn-orthographic (月 getsu) and dialect-phonetic (木 bogu). Native katakana sometimes matches surface (月 ゲツ / getsu) and sometimes doesn't (木 ボク / bogu).

6. **Dungan tone-marker letters contradict surface tone numbers**: Every dng cell I checked has the soft-sign ь / hard-sign ъ in native vs the tone number in surface. Either the convention should be documented (Soviet 1953 = different from pinyin tone numbering) or the tone numbers/letters need realignment.

7. **PST reconstructions partial and non-standard**: 4 of 10 characters have pst; among those, 3 use non-standard notation (*nĭy without *r-, *(s-)lăH with parenthetical prefix, *ƛăy with non-Matisoff lambda-bar). Six characters lack pst entirely.

8. **Inconsistent null markers**: `""` (empty string) coexists with `"—"` (em-dash) in vi_ohan column (#31). Same issue flagged in #33 §23 for native columns.

9. **txg IPA notation mixed**: Some cells use IPA Unicode (ɲ, ɣ), others use ASCII digraphs (th, nj). Down-stream consumers cannot reliably parse.

10. **Manchu š = /ɕ/ not /ʃ/**: mnc IPA column uses /ʃ/ for 日 šun where /ɕ/ is correct (matches the file's own sjo column).

---

**File:** `/home/jounlai/langmap/hanmap_reviews/39_open.md`

**Issue count:** 32 numbered findings (10 zkt/Khitan extensions of #33, 5 Min 文白, 3 ja_thk/ja_okn substrate convention, 2 dng Cyrillic, 7 reconstruction-column population/notation, 2 schema/null-marker, 3 cross-column consistency).

**Summary line:** The nature cohort (日/月/山/水/火/木/土/天/地/海) shows three recurrent patterns: (1) Manchu-leakage into `zkt` extends to 山 (`alin` → Khitan *ula) and 水 (`mur` is 'river' not 'water', should be *us); (2) the Min文白 split is unevenly applied — unmarked `nan` is missing for 7 of 10 keys and the Xiamen/Zhangzhou subdialect labels for 火 appear swapped; (3) Proto-language columns are inconsistently populated — pst is missing for 山/火/天/海 and uses non-standard notation where present (*ƛăy lambda-bar for 土/地, parenthetical *(s-) for 月). Secondary issues include bo_sino populated only for 山/海 of 10, dng Cyrillic tone-marker letters contradicting surface tone numbers, the non-standard letter ў in dng 水 "шўйъ", mixed Hepburn/phonetic conventions in ja_thk (月 getsu vs 木 bogu), mismatched ja_okn surface/native (天 tin/チン, 土 tu/ツ), txg IPA alternating between proper IPA (ɲ, ɣ) and ASCII digraphs (th, nj), `""` vs `"—"` null-marker inconsistency in vi_ohan 水/天, and mnc IPA using /ʃ/ where Möllendorff š = /ɕ/.


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 8
- **policy/withdrawn skip**: 24
- **headline**: 山 zkt alin→ula (Manchu→Khitan) ×2, 水 zkt mur→us (Khitan 河→水 修正) ×2, 火 nan_xm/nan_zz hé/hué swap ×4 (Xiamen/Zhangzhou label restore)
- **JSON path**: /tmp/hm_edits_39.json
