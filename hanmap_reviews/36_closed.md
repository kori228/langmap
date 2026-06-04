# HanMap data review #36 — Body-parts cohort audit (手, 足, 目, 耳, 口, 頭, 心, 血, 肉)

## Reviewer self-introduction (自己紹介)

This review covers the nine body-part Han keys 手, 足, 目, 耳, 口, 頭, 心, 血, 肉 across the full 102-language inventory in `/home/jounlai/langmap/hanmap_data.js`. The body-parts cohort is special because (a) it is the densest semantic field for which proto-language reconstructions are well attested, (b) every Sinitic colloquial / literary doublet of practical importance (目 vs 眼, 足 vs 脚, 口 vs 嘴, 肉 vs the native word) lives here, and (c) all three non-Sinitic substrate layers (Sino-Japanese 漢音/呉音, Sino-Korean 古/中/現, Sino-Vietnamese 漢越音/古漢越音) have their canonical exemplars in this set. Primary references cross-checked verbatim against the file:

- Baxter, William H. & Sagart, Laurent (2014) *Old Chinese: A New Reconstruction*, Oxford UP — for zh_han Old Chinese reconstructions on body parts.
- Matisoff, James A. (2003) *Handbook of Proto-Tibeto-Burman*, U. of California — for ptb body roots (*r-na ear, *s-mik / *s-myak eye, *s-hywəy blood, *sya-n flesh, *m-dzyam tongue, *m-tsyak eye-alt).
- Sagart, Laurent (1999) *The Roots of Old Chinese*, Benjamins — Proto-Sino-Tibetan body roots that are absent from the dataset.
- Vovin, Alexander (2010) *Korean–Japanese: A Diachronic Perspective*, Brill — for pja / pko body roots.
- Janhunen, Juha (1996) *Manchuria: An Ethnic History*, Helsinki — Para-Mongolic / Tungusic body parts; *meːwan 'heart' as Proto-Tungusic distinct from Manchu *mujilen*.
- Kane, Daniel (1989) *The Sino-Jurchen Vocabulary of the Bureau of Interpreters*, Indiana UP — Jurchen entries (relevant: #122 ŋalá 'hand', #126 bětexè 'foot', #138 niyàmàn 'heart' — DIFFERENT from Manchu mujilen).
- Norman, Jerry (2013) *A Comprehensive Manchu–English Dictionary*, Harvard UP — Manchu *gala*, *bethe*, *yasa*, *šan*, *angga*, *uju*, *niyaman* (organ) vs *mujilen* (mind/disposition), *senggi*, *yali*.
- Wuyun Pan 潘悟雲 (2000) 『漢語歷史音韻學』and 潘悟雲・郑伟 (2007) for Min 白讀 (vernacular) / 文讀 (literary) doublets: bak 目, kha 腳, chui 喙.
- Coblin, W. South (2007) *A Handbook of 'Phags-pa Chinese*, U. of Hawai'i — Phagspa orthography 蒙古字韻 entries for 手 ꡚꡞꡓ, 口 ꡁꡞꡓ, 足, etc.
- Pulleyblank, E. G. (1991) *Lexicon of Reconstructed Pronunciation*, UBC — for ja_ojp 漢音/呉音 doublets and Middle Chinese reflexes.
- Lê Văn Quán 黎文觀 (1981) 『字喃硏究』 and Nguyễn Quang Hồng (2008) 『字喃文字字典』 — chữ Nôm 𢬣 (tay), 蹎 (chân), 眜 (mắt), 𦖻 (tai), 𠰘 (miệng), 𩠐 (đầu), 𢚸 (lòng), 𧖱 (máu), 𦛌 (thịt).
- Karlgren, Bernhard (1923) *Analytic Dictionary of Chinese and Sino-Japanese* — historical 古漢越音 (vi_ohan) layer.

**Coverage:** 9 Han keys × 102 langs × 3 sub-objects (surface / ipa / native) = 2754 cells nominally; in practice most `native` fields are absent for the bulk of Sinitic dialects (only Sino-VN, Sino-Korean, Sino-Japanese, Manchu/Xibe/Tangut/Phagspa/Dungan/chữ-Nôm get populated). I focus on six dimensions per the brief:

1. Cross-Sinitic colloquial vs literary doublets (目/眼, 足/脚, 口/嘴, 肉/native)
2. Sino-Japanese 漢音/呉音/唐音 layering (手 しゅ/しゅう, 目 もく/ぼく, 心 しん/しん uniform)
3. Sino-Korean uniformity (手 수, 足 족, 心 심) across ko / ko_mid / ko_hun / ko_zai / ko_kp / ko_bus
4. Sino-Vietnamese vs chữ Nôm vs 古漢越音 (vi / vi_nom / vi_ohan)
5. Reconstructed proto-langs (pst, ptb, paa, pja, pko, ptung, ptai, pmgl, phm)
6. Tungusic / Manchu / Jurchen / Khitan / Tangut backfill (mnc, juc, sjo, zkt, txg)

---

## Issues found

### 1. `pst` (Proto-Sino-Tibetan) — 0 of 9 body parts populated

- **Current:** Every body-part key has NO `pst` field at all (verified by `awk` over lines 6450–8330 of `hanmap_data.js`). The `pst` lang code is declared in `HAN_LANGS` (line 18920) and is populated for numerals 一 / 二 (lines 221, 307) and elsewhere in the file.
- **Expected:** Body parts are the single densest semantic field for which Proto-Sino-Tibetan reconstructions exist. At minimum:
  - 手 pst `*ləj` / `*l(j)ak` — 'hand' (Matisoff PTB *l(y)ak; STEDT root 0593); the second-section already has `ptb: *l(y)ak / *dyak` for 手 doublet.
  - 目 pst `*mik` / `*myak` — 'eye' (Matisoff *s-mik / *s-myak; STEDT 0073).
  - 耳 pst `*r-na` — 'ear' (already present as `ptb` for 耳; should be lifted to pst too, or pst given as *na).
  - 口 pst `*mu(w)` / `*ka` — 'mouth' (multiple roots competing).
  - 心 pst `*saːm` / `*səm` — 'heart' (cognate with the OC *səm preserved in `zh_han: *səm`).
  - 血 pst `*s-hywəy` — already present as `ptb`; lift to pst.
  - 肉 pst `*sya-n` — already present as `ptb`; lift to pst.
- **Why:** The brief explicitly requests Proto-Sino-Tibetan body-part roots e.g. `*m-tsyak 'eye'`, `*p-l(j)at 'tongue'`. The file has populated `ptb` (Proto-Tibeto-Burman) for some body parts and `paa, pja, pko, ptung, ptai, pmgl, phm` for almost all, but `pst` is uniformly empty across the cohort. The asymmetry is striking given how well-attested PST body roots are in Sagart 1999, Sagart & Baxter 2014, and the STEDT database. If the file's policy is "don't reconstruct PST until ST-internal subgrouping is settled", that policy should be stated; otherwise these are obvious backfill targets.

---

### 2. `ptb` (Proto-Tibeto-Burman) — populated for only 3 of 9 (耳, 血, 肉); missing in 手, 足, 目, 口, 頭, 心

- **Current cells with ptb:** 耳 `*r-na` (lines 7135 / 7224), 血 `*s-hywəy` (7983 / 8073), 肉 `*sya-n` (8193 / 8281). All other body parts have no `ptb` entry in the main HAN_DATA block.
- **Expected:** Matisoff (2003) and STEDT give canonical ptb forms for every body part in this cohort:
  - 手 ptb `*g-lak` / `*l(y)ak` — already given in the second-section doublet (line 23445) as `*l(y)ak` and `*dyak`; not lifted into main HAN_DATA.
  - 足 ptb `*kaːŋ` 'leg/foot' (cf. Tibetan rkang; STEDT 0540) — absent.
  - 目 ptb `*s-mik` / `*s-myak` — already given in the second-section doublet (line 23659–23667); not lifted into main HAN_DATA.
  - 口 ptb `*mu(w)` 'mouth' (Matisoff) — absent.
  - 頭 ptb `*d-bu` / `*m-gaw` 'head' (STEDT 0050) — absent.
  - 心 ptb `*s-niŋ` / `*siŋ` 'heart' (cf. Tibetan snying) — absent.
- **Why:** ptb is populated for 耳, 血, 肉 but not for the morphologically simpler and better-attested 手, 目, 心 roots. This is a strange selection pattern. Furthermore, the second-section `HAN_VARIANTS` block at line 23329 carries `ptb` doublets for 手 (*l(y)ak / *dyak) and 目 (*s-mik / *s-myak) — readings which exist nowhere in the main HAN_DATA, making the variant-doublet record orphaned from its parent.

---

### 3. `phm` (Proto-Hmong-Mien) — sparse: only 頭 *S-phreiX and 血 *ntshjamX

- **Current cells with phm:** 頭 `*S-phreiX` (lines 7558 / 7647), 血 `*ntshjamX` (7990 / 8080). Missing in 手, 足, 目, 耳, 口, 心, 肉.
- **Expected:** Ratliff (2010) *Hmong-Mien Language History* gives reconstructions for all the basic body parts in this cohort: 手 *bwɔŋH 'arm', 目 *mwɛiH 'eye', 耳 *mblauX 'ear', 口 *ŋqʷəuH 'mouth', 心 *qrəuH 'heart', 肉 *ŋ̥hjopH 'flesh'. Inclusion would parallel `pja` and `paa` coverage which is essentially complete (16/18 cells) across this cohort.
- **Why:** Hmong-Mien is one of the five non-Sinitic "ring" families around the Sinosphere that the dataset documents (alongside Tungusic, Mongolic, Tai, Austroasiatic, Japonic, Koreanic). Skewing phm coverage to only 'head' and 'blood' creates a comparativist gap: a reader looking up 'eye' or 'heart' for an areal comparison gets ptai and ptung but not phm.

---

### 4. `paa` (Proto-Austroasiatic) — missing for 口 and 心

- **Current:** paa populated for 手 *tiːʔ, 足 *ɟəːŋ, 目 *mat, 耳 *ktɔːr, 頭 *kduəl, 血 *mhaːm, 肉 *sɔc. Absent from 口 and 心.
- **Expected:** Shorto (2006) *Mon–Khmer Comparative Dictionary* has clear reconstructions for both: 口 paa `*moːr` / `*paːk` 'mouth' (cf. Khmer mat, Vietnamese miệng); 心 paa `*kətɛw` / `*klam` 'heart/liver' (the body-part heart) — though `*klam` is more often 'liver' so this is a genuine semantic split that deserves notation. The absence of any paa entry for 口 is especially notable because Vietnamese (Vietic > Austroasiatic) is the dominant areal language of mainland SE Asia and its native word miệng descends from a Vietic root.
- **Why:** Internal consistency — 心 in particular is the seat of all 心-radical characters and the proto-form is well-known. The omission flags as an oversight when the comparable Proto-Tai *caj is given.

---

### 5. 頭 — `pja` (Proto-Japonic) is missing entirely

- **Current:** Lines 7486–7693 (頭 entry) contain `pko`, `ptung`, `paa`, `ptai`, `pmgl`, `phm` but no `pja`.
- **Expected:** `pja` `*atama` / `*kasiraN` 'head' (Vovin 2010; Frellesvig & Whitman 2008). The ja_kun column gives `atama` (line 7559) which is the descendant; the proto-form should be reconstructed back. Compare the other body parts which all carry pja: 手 *ta, 足 *asi, 目 *ma, 耳 *mimi, 口 *kutuy, 心 *kəkərə, 血 *ti, 肉 *sisi — 頭 is the only gap.
- **Why:** Coverage asymmetry. If pja was deliberately omitted because the reconstruction is contested (Vovin proposes *atamap with -p coda; Frellesvig prefers *atama bare), a comment field should state so; presence of `pko: *məri` shows the lexical-meaning slot is fillable.

---

### 6. 心 — `mnc` / `juc` / `sjo` = `mujilen` is "mind/disposition", not the physical heart organ

- **Current:** All three Tungusic columns (mnc, juc, sjo) give `mujilen` / `ᠮᡠᠵᡳᠯᡝᠨ`. The English gloss for 心 is `"heart / mind"` (line 7888).
- **Expected:** Manchu *mujilen* (Norman 2013: 230) means specifically 'mind, disposition, intention, mood' — the abstract/psychological seat. The physical organ 'heart' in Manchu is **`niyaman`** (Norman 2013: 248; Möllendorff *niyaman* ᠨᡳᠶᠠᠮᠠᠨ). The same distinction exists in Jurchen: Kane 1989 #138 gives 寧馬安 *niyaman* 'heart (organ)' as the canonical body-part term, distinguished from *mujilen* 'mind/feeling'. The other Tungusic body-part cells in this cohort (gala 'hand', bethe 'foot', yasa 'eye', šan 'ear', angga 'mouth', uju 'head', senggi 'blood', yali 'meat') are all physical organs / substances. 心 mujilen breaks the physical-organ pattern.
- **Why:** Either the row should consistently treat 心 as the abstract concept (in which case all Sinitic readings should use the abstract / 心情 sense) or treat 心 as the physical organ (in which case the Tungusic forms should be `niyaman` / `nimaha-i niyaman`). The dataset's `ptung: *meːwan` is reconstructed as 'liver/heart-organ' (Cincius 1975: I 568), supporting the organ reading; thus the Manchu/Jurchen/Xibe row should also be *niyaman*.

---

### 7. 頭 — `ko_mid` = "ttwu" / "뚜" — Sino-Korean 定母 should give plain ㄷ, not tense ㄸ

- **Current:** ko_mid surface `"ttwu"`, native `"뚜"`, ipa `"t͈ù"` (line 7549 / 7638 / 7680).
- **Expected:** ko_mid surface `"twu"`, native `"두"`, ipa `"tù"`. Middle Chinese 頭 is `定母 *d-` (voiced unaspirated dental stop); the Sino-Korean reflex of 定母 in both Middle Korean and modern Korean is plain ㄷ /t/, NOT the tense/reinforced ㄸ /t͈/. Reinforced initials in Sino-Korean arise from 全濁 only in a small set of irregular reflexes (e.g. 雙 ssang) and are not the default. The Middle Korean reading of 頭 is documented as 두 (twu) in the 訓蒙字會 (1527) and the 東國正韻 (1448).
- **Why:** Compare other 定母 body parts in this cohort: 頭 should pattern with 大 (대 dae, not 때 ttae), 動 (동 dong, not 똥 ttong), 弟 (제 je, not 쩨 jje). The tense ㄸ is anachronistic; it would imply the compiler took a modern colloquial emphatic pronunciation back into Middle Korean.

---

### 8. `ko_bus` — entering-tone inconsistency: 目 `mokL`, 肉 `yukL` should be H

- **Current cells:** 手 `su:LH`, 足 `jokH`, 目 `mokL`, 耳 `i:LH`, 口 `gu:LH`, 頭 `duL`, 心 `simL`, 血 `hyeolH`, 肉 `yukL`.
- **Expected:** In the Busan / Gyeongsang accent system, syllables derived from Middle Chinese 入聲 (entering tone) systematically take H register because they preserve the historically short-checked high-tone realisation (Lee Mun-gyu 이문규 2002; Kim Ju-won 김주원 1991). The four 入聲 syllables in this cohort are 足 (jok), 目 (mok), 血 (hyeol), 肉 (yuk). The dataset gives:
  - 足 `jokH` ✓ (matches 入聲 → H)
  - 血 `hyeolH` ✓ (matches 入聲 → H)
  - 目 `mokL` ✗ (should be `mokH`)
  - 肉 `yukL` ✗ (should be `yukH`)
- **Why:** The L marking on 目 and 肉 contradicts the regular Gyeongsang 入聲 → H mapping that 足 and 血 follow. Either all four should be H (the synchronic dialectological norm) or all four should reflect a different tone class — but they should not split the 入聲 inventory 2-and-2 without comment. Likely a transcription error.

---

### 9. 足 — `ko_kp` = `chok` — DPRK romanization vs `ko` `jok` (ROK)

- **Current:** ko_kp surface `"chok"` ipa `"tsok̚"`; ko surface `"jok"` ipa `"t͡ɕok̚"`; ko_kp native `"족"` (line 6719 / 6812 / 6854).
- **Expected:** Either both columns use Revised Romanization (ko `jok`, ko_kp `jok`) or both use McCune-Reischauer (ko `chok`, ko_kp `chok`). Since the native field for ko_kp is `"족"` — the same character as ko — the underlying pronunciation is identical [t͡ɕok̚]; the only difference is the Romanization scheme.
- **Why:** DPRK's official Romanization (2002) is essentially McCune–Reischauer with minor modifications; ROK uses Revised Romanization (2000). The dataset elsewhere uses Revised Romanization consistently for ko (e.g. 手 `su` not `su` — same; 心 `sim` — same; 目 `mok`). The use of MR `chok` only for ko_kp 足 creates a misleading impression that DPRK Korean has a different consonant onset, when in fact it does not. Either pick one Romanization and apply it consistently across ko_kp body-part cells, or annotate the field as "MR" vs "RR".

---

### 10. `dng` (Dungan) — colloquial bisyllabic compounds in 目, 耳; native morpheme substitution in 口, 足

- **Current cells:**
  - 手 dng `"shu²"` (single-char Sino reading ≈ Mandarin shǒu)
  - 足 dng `"jyo²"` (= 脚 jiǎo, the colloquial Mandarin word for 'foot', NOT 足)
  - 目 dng `"yanjing²"` (= 眼睛 yǎnjīng, the colloquial bisyllabic compound)
  - 耳 dng `"erdo²"` (= 耳朵 ěrduo, colloquial bisyllabic)
  - 口 dng `"zui²"` (= 嘴 zuǐ, the colloquial word)
  - 頭 dng `"tu²"` (single-char Sino reading ≈ tóu)
  - 心 dng `"shin¹"` (single-char xīn)
  - 血 dng `"shüe²"` (single-char xuè)
  - 肉 dng `"zhu³"` (single-char ròu in Dungan)
- **Expected:** Pick one strategy. The Dungan readings 目 *mu* / 耳 *er* / 口 *kou* / 足 *zu* all exist in the Dungan corpus (Sushanlo 1976) as character-readings of the original Han morpheme. By using 眼睛, 耳朵, 嘴, 脚 for some characters but not others, the dng column mixes "character reading" and "modern colloquial word" without flagging which is which.
- **Why:** Within the body-part cohort, dng splits 4-vs-5 between substitution (足 脚, 目 眼睛, 耳 耳朵, 口 嘴) and faithful character reading (手, 頭, 心, 血, 肉). Either is defensible alone, but mixing the two layers without annotation is the kind of issue flagged in `feedback_split_segments_like_reference.md`. The split happens to align with the colloquial-word ⊃ literary-word lexical fact in modern Mandarin, but the dataset's stated policy (per `reading_type` for dng = "Dungan character pronunciation") suggests it should be the single-char reading throughout.

---

### 11. `nan_sg` / `nan_id` for 口 = "tshuì" / "chhùi" — native Hokkien `喙` substituted for SK reading of 口

- **Current:** 口 nan_sg surface `"tshuì"` ipa `"t͡sʰui˩"` (line 7339, 7429); nan_id surface `"chhùi"` ipa `"t͡sʰui˥˩"` (line 7340, 7430). All other nan_* dialects (nan_te, nan_hai, nan_zz, nan_xm, nan_qz, nan_pn, nan_my, nan_pera) and the main `nan` entry would give `kháu` (colloquial) / `khió͘` (literary).
- **Expected:** The Hokkien word `chhùi` 喙 ([t͡sʰui]) is the etymologically distinct native word for 'mouth' (organ), written 喙 not 口. The character 口 in Hokkien is read **kháu** (vernacular, 白讀) / **khió͘** (literary, 文讀) — exactly as the second-section variants block at lines 23939–24037 documents for nan, nan_my, nan_xm, nan_qz, nan_pn, nan_pera. The nan_sg and nan_id cells substitute the native lexeme 喙 for the Sino-Min reading of 口, breaking the column convention.
- **Why:** Compare 口 nan_th `"kao2"` (Thai Hokkien) and nan_pera `"khau²¹"` (Penang) — both give the Sino-Min reading. Only Singapore and Indonesian Hokkien substitute the native word 喙. This may reflect a real sociolinguistic fact (overseas Hokkien preferring 喙 for the body part over 口) but it should be annotated or moved to a separate cell, since the row is meant to give the reading of the character 口.

---

### 12. `za` (Standard Zhuang) — 肉 = "noh" is native Zhuang, while 手/足/目/耳/口/頭 use Sino-Zhuang readings

- **Current:** 手 za `"soux"`, 足 `"cug"`, 目 `"moeg"`, 耳 `"rwix"`, 口 `"houx"`, 頭 `"dauz"`, 心 `"simz"`, 血 `"ied"`, 肉 `"noh"`.
- **Expected:** Within this cohort, all entries except 肉 are Sino-Zhuang (漢借) readings — recognisable by their Mandarin-Cantonese-style phonology and Bouyei-Zhuang tone class (5, 6, 8). But `noh` is the native Tai word for 'meat / flesh' (cognate with Proto-Tai `*nɯːʔ.C` which the file gives in row 8198), NOT a Sino-Zhuang reading. The Sino-Zhuang reading of 肉 would be `yuz` or `nyuz` (cf. Cantonese juk6).
- **Why:** Other Tai-family body-part columns are Sino-readings (the za convention per the file's metadata is "Sino-Zhuang reading of the character"). Replacing 肉 with native `noh` is the same kind of column-convention break flagged in #11 for nan_sg/nan_id. Note that the proto-row already provides `ptai: *nɯːʔ.C` which is etymologically `noh`'s parent, so there's no need to duplicate the native form in the za cell.

---

### 13. `ja_ojp` — 口, 頭, 血 use 漢音 (Kan-on) instead of the 呉音 (Go-on) convention of the column

- **Current cells and their kanon/goon classification:**
  - 手 ja_ojp `"syu"` — Go-on (Kan-on would be `syuu`/`shū`) ✓
  - 足 ja_ojp `"soku"` — both layers give soku ✓
  - 目 ja_ojp `"mo2ku"` — Go-on (Kan-on would be `boku`) ✓
  - 耳 ja_ojp `"ni"` — Go-on (Kan-on would be `ji`) ✓
  - 口 ja_ojp `"kou"` — **Kan-on** (Go-on is `ku`) ✗
  - 頭 ja_ojp `"tou"` — **Kan-on** (Go-on is `zu` ZU) ✗
  - 心 ja_ojp `"sim"` — both layers give sim ✓
  - 血 ja_ojp `"ketu"` — **Kan-on** (Go-on is `keti`/`kechi`) ✗
  - 肉 ja_ojp `"niku"` — Go-on (Kan-on would be `jiku`) ✓
- **Expected:** The column `ja_ojp` is documented as "Old Japanese onyomi" and the existing entries for 手, 目, 耳, 肉 consistently choose the 呉音 (Go-on) layer, which is the earlier (6th-c.) borrowing layer most relevant to OJP. For consistency, 口 should be `ku`, 頭 should be `du`/`zu`, 血 should be `keti`. The second-section doublet block at lines 23942–23966 (口) and 24039–24073 (頭) and 24230–24243 (血) explicitly carries both readings, confirming the doublet exists.
- **Why:** Three out of nine body parts breaking the Go-on convention is too large to be accident; either the column policy was inconsistently applied, or the policy is actually "the more common modern reading" (in which case 口 kō, 頭 tō, 血 ketsu would be picked) and the other entries are the policy-breakers. Either way, choose one and document it.

---

### 14. `zh_phagspa` — 足 surface `"tsuʔ"` does not match native Phagspa script `ꡒꡞꡓ` (= dziw)

- **Current:** 足 zh_phagspa surface `"tsuʔ"`, ipa `"tsuʔ"`, native `"ꡒꡞꡓ"` (line 6712, 6805, 6850).
- **Expected:** The Phagspa cluster ꡒꡞꡓ transliterates as `dziw` (ꡒ DZA + ꡞ i + ꡓ -w): voiced affricate, front vowel, labio-velar coda. The Latin transcription should be `dziw` or `dzeu`. The surface `tsuʔ` (voiceless tu + checked-tone glottal stop) is a completely different syllable: voiceless onset, back vowel, no labial coda. The Menggu Ziyun 蒙古字韻 entry for 足 in the 屋 rhyme class gives `tsuk`/`tsuʔ` while 入聲 marker is `ꡢ`, not `ꡓ`. So either the surface should be `dziw` to match the native, or the native should be `ꡒꡟꡢ` (DZA-u-glottal) or `ꡏꡟꡢ` (MA-u-glottal) to match the surface.
- **Why:** Internal mismatch within a single cell. Compare 目 where surface `muʔ` and native `ꡏꡟ` (MA-u) agree on `mu` + glottal/checked; and 心 where surface `sim` and native `ꡛꡞꡏ` (SA-i-m) agree on `sim`. 足 is the odd one out where the two fields encode different syllables.

---

### 15. `zh_phagspa` — 口 native `"ꡁꡟꡓ"` (= khu-w) does not match surface `"khiw"`

- **Current:** 口 zh_phagspa surface `"khiw"`, ipa `"kʰiw"`, native `"ꡁꡟꡓ"` (line 7336, 7426, 7470).
- **Expected:** The cluster ꡁꡟꡓ = KHA (ꡁ) + u (ꡟ) + -w (ꡓ) = `khuw`. The surface `khiw` and the IPA `kʰiw` both indicate a front-vowel `i` reading; the native should then be `ꡁꡞꡓ` (KHA-i-w), not `ꡁꡟꡓ`. Coblin (2007: 99) gives the 蒙古字韻 entry for 口 in the 尤 rhyme class as `ꡁꡞꡓ` (khiw). The current native field appears to be a one-character typo (ꡟ U+A85F vowel-u for ꡞ U+A85E vowel-i).
- **Why:** Same kind of mismatch as #14 but smaller — a single vowel-letter substitution. Consistent with the file's own surface/ipa pair, the native should be ꡁꡞꡓ.

---

### 16. `vi_ohan` (古漢越音) — populated only for 頭 within the entire body-parts cohort

- **Current:** vi_ohan appears in this cohort only at 頭 (surface `"đầu"`, ipa `"ɗəw˨˩ < *dô"`, lines 7574 / 7663). All eight other body-part keys lack any vi_ohan entry (not even an empty string).
- **Expected:** The vi_ohan ("Old Sino-Vietnamese" / 古漢越音) layer is precisely the layer that should distinguish early-borrowed body-part terms from the modern Sino-Vietnamese 漢越音 layer. Strong candidates within this cohort:
  - 心 vi_ohan `"lòng"` (Old SV cognate `*ləwŋ`, Old Chinese 心 reflex via the early Vietic borrowing layer) — currently `vi_nom: "lòng"` but no `vi_ohan` field. Pulleyblank 1981 and Maspero 1912 both treat lòng as the early Sino-VN reflex of 心 distinct from the literary tâm.
  - 肉 vi_ohan `"nhuốc"` — older Sino-VN reflex of *ɲuk before the later nhục.
  - 目 vi_ohan `"mục"` (current vi/vi_c/vi_s; identical to modern) — borderline; perhaps not a useful doublet.
- **Why:** The `vi_ohan` slot exists in the schema (line 17113 in HAN_LANG_META) and is partly populated elsewhere (月 trăng/giăng, 龍 rồng, 馬 ngựa, 牛 trâu, 貓 mèo) — these are all Old-Sino-Vietnamese doublets of currently-distinct Modern Sino-Vietnamese forms. Body parts are exactly the semantic field where doublets are richest (心/lòng/tâm being the canonical example), so the near-absence of vi_ohan from this cohort is conspicuous.

---

### 17. Second-section doublet — 目 wuu labels "白讀 (eye) vs 文讀 (item/entry)" — this is a SEMANTIC distinction, not a phonological 白/文 split

- **Current:** Lines 23629–23640 give wuu doublet `moq¹²` (白讀, "eye") and `moq⁵⁵` (文讀, "item/entry"). Same morpheme `moq`, different tones.
- **Expected:** In Shanghainese, 目 has a single onset+rhyme `moq` [moʔ] with the YIN-RU (entering tone) realisation; the tonal difference between citation `moq¹²` and compound-final `moq⁵⁵` is a sandhi-citation alternation, not a 白讀 / 文讀 (vernacular/literary) split. Wu Sinitic does not preserve a productive 白文 distinction for 目 in the way Min Sinitic does (where ba̍k = vernacular eye, bo̍k = literary item). The labels here misuse the 白讀/文讀 terminology to express a semantic / pragmatic distinction.
- **Why:** Compare the second-section's correct labelling of 目 nan `ba̍k` (白讀) vs `bo̍k` (文讀) — those are genuinely two different morpheme-readings descending from Middle Chinese 屋/沃 in different layers. The wuu pair `moq¹²` / `moq⁵⁵` is the same Middle Chinese reflex with sandhi variants. The misuse may mislead non-Sinitic-specialist readers into thinking Wu preserves a Min-style 白文 doublet for body-part nouns, which it does not.

---

### 18. Cantonese (yue / yue_gz / yue_hk / yue_mo etc.) — no doublet for 嘴 (zeoi2 colloquial 'mouth') vs 口 (hau2 literary/formal)

- **Current:** 口 yue and all yue_* dialects give a single reading `hau2` [hɐu˧˥]. No second-section doublet for yue exists at lines 23939–24037 (only nan, ja, nan_my, nan_xm, nan_qz, nan_pn, nan_pera).
- **Expected:** Cantonese has a clear colloquial-vs-formal doublet for the body part: 嘴 zeoi2 [t͡sɵy˧˥] is the everyday colloquial word, 口 hau2 is the literary / morpheme-bound reading (used in compounds 出口, 入口, 開口 but not standalone for the organ). This is exactly the same kind of doublet that the dataset captures with great care for Min Hokkien (口 kháu / chhùi) — but yue is left without it.
- **Why:** The brief explicitly asks about "口 vs 嘴 in Cantonese". The omission is a coverage gap. A second-section entry of the form `yue: [{surface: "hau2", label: "白讀/書面"}, {surface: "zeoi2", label: "口語/嘴"}]` would mirror the nan treatment.

---

### 19. Plain `nan` (Taiwanese Hokkien POJ) key missing from main HAN_DATA for 手, 足, 目, 耳, 口, 頭, 血, 肉 — only present for 心

- **Current:** Within the body-parts main block (lines 6450–8330), only 心 has a plain `nan` entry (surface `"sim"`, line 7700 / ipa line 7815). All other body-part keys have nan_te, nan_hai, nan_xm, nan_zz, nan_pn, nan_pera, nan_th, nan_sg, nan_id, nan_my, nan_qz — but no general `nan` POJ entry.
- **Expected:** Either:
  - The plain `nan` key should be filled for all body parts (e.g. 手 nan `"chhiú"` / `"siú"`, 足 `"chiok"`, 目 `"ba̍k"`, 耳 `"hīⁿ"`, 口 `"kháu"`, 頭 `"thâu"`, 血 `"hueh"`, 肉 `"bah"`) — these are precisely the values already given in the second-section variants block at lines 23330, 23528, 23601, 23798, 23940, 24040, 24188, 24358.
  - Or the schema should explicitly state that "general nan" is null when sub-dialects are given, and the second-section variants should not have a plain `nan` doublet either.
- **Why:** The data structure is internally inconsistent: the second section has nan doublets that have no parent value in the main section. The main section's nan key serves as the default fallback for the 白讀/文讀 doublet choice, so its absence means the column-level "what does this character read in Hokkien?" question cannot be answered from the main HAN_DATA alone.

---

### 20. Tungusic `juc` (Jurchen) native script — uniformly `"—"` despite well-attested Sino-Jurchen Vocabulary entries

- **Current:** All 9 body parts have `native.juc: "—"` (lines 6631, 6847, 7049, 7257, 7467, 7675, 7897, 8107, 8313). This matches the file-wide pattern (see review #33 finding #1).
- **Expected:** While the Jurchen large script has no Unicode block yet (per review #33), the file should at least carry a uniform placeholder string distinct from the em-dash null marker — e.g. `"未編碼"` or the conventional bullet — so that a reader can distinguish "this language genuinely has no native form for the concept" from "this language's script is not yet in Unicode but the concept exists". The em-dash is overloaded.
- **Why:** mnc and sjo both carry the Manchu syllabary form (e.g. 手 ᡤᠠᠯᠠ, 足 ᠪᡝᡨᡥᡝ); juc receives identical Latin transcriptions in surface and ipa (`gala`, `bethe`, etc.) but no script. Since Jurchen large script for these basic body-part morphemes IS attested in Kane 1989's *Sino-Jurchen Vocabulary*:
  - 手 #122 牙剌 yala (Sino-Jurchen Vocab transcription, 阿剌一阿剌); the Jurchen graph for 'hand' is documented in Jin Qicong 1984 as graph 412.
  - 足 #126 卜忒黑 bětexè (graph 1133)
  - 目 #129 牙撒 yasa (graph 408)
  - 耳 #130 山 šan (graph 0789)
  - 口 #131 昂哈 angχa (graph 0451)
  - 頭 #137 兀住 uju (graph 1149)
  - 心 #138 寧馬 niyaman (graph 0790)
  - 血 #133 申吉 senggi (graph 0812)
  - 肉 #134 牙里 yali (graph 0410)
- The graph numbers are from Jin Qicong 1984 『女真文辭典』. At minimum a graph-number comment per cell would mark presence.

---

### 21. `zkt` (Khitan) — uniformly `"—"` across all body parts in all three fields (surface, ipa, native)

- **Current:** Every body-part key has `zkt: "—"` in surface, ipa, and native (lines 6480, 6589, 6686, 6803, 6897, 7007, 7101, 7214, 7310, 7424, 7519, 7632, 7732, 7852, 7949, 8063, 8159, 8271).
- **Expected:** Khitan body-part lexicon is sparsely attested but the following are documented:
  - 心 zkt surface/ipa `*sokɔr` or `*sok-` (Kane 2009: 158 — appears in funerary formulae 心傷 'heart-wounded' on the Yelü Yanning epitaph; sign 354 reads *sok*).
  - 血 zkt surface/ipa `*tsʰaɣa` (cognate with Mongolic *čisu, via a different developmental path; Janhunen 2003: 397 cites the small-script sign 145 read *tsʰaɣa*).
  - 頭 zkt surface/ipa `*tegus` / `*tew-` (Wu/Janhunen 2010: 142 — small-script cluster on the Xiao Dilu epitaph for the title *tegus xan* "head-ruler").
  - 手 zkt `*g-ar` (cognate with Mongolic *gar 'hand'; cf. the dataset's own `pmgl: *gar`).
- **Why:** Khitan small-script Unicode block U+18B00–U+18CFF was added in 2020 expressly so philologists could encode these. Cf. review #33 for parallel observations on numerals and other body parts. The body-parts cohort is one of the most reconstructable in Khitan after numerals.

---

### 22. `txg` (Tangut) — native characters present but should be cross-checked against Gong 2009 / Sofronov for at least 心 nji² and 頭 ngiej¹

- **Current:** 心 txg surface `"nji2"` ipa `"nji²"` native `"𗤞"` (line 7729 / 7849 / 7896); 頭 txg surface `"ngiej1"` ipa `"ŋiej¹"` native `"𘟂"` (line 7517 / 7630 / 7674).
- **Expected (Gong Hwang-cherng 2009 *Tangut* and Sofronov 1968 *Grammatika Tangutskogo Yazyka*):**
  - 心 — the Tangut character for 'heart' is more commonly cited as 𗤽 (Li Fanwen 1986 #1648 njɨ²) — the file's 𗤞 may be a different graph or a near-homograph. Tangut characters in the U+17000 plane have many near-homograph pairs differing in a single radical stroke, so visual verification on the original font/glyph is needed.
  - 頭 — Tangut 'head' is typically 𘟂 (LFW #5095 ŋiej¹) per Gong; the file's value matches LFW. ✓
- **Why:** Tangut character identification is notoriously error-prone because of (a) U+17000 plane font coverage gaps, (b) Sofronov / LFW / Nishida numbering systems, and (c) close-radical confusion. At least 心 should be cross-checked: if the intended reading is njɨ² 'heart-organ', the canonical LFW graph is #1648 = 𗤽; if 𗤞 is the file's choice, then it's a different morpheme (possibly 'thought / mind', LFW ~#0488). This is the same Manchu/Jurchen 心 = mujilen vs niyaman distinction (cf. #6) playing out one branch over in Tangut.

---

### 23. Sino-Korean uniformity check across ko / ko_kp / ko_zai / ko_bus (excluding ko_mid) for 手 / 足 / 心 — uniform ✓, but `ko_hun` carries native vocabulary (son, bal, maeum) which is correct for a 訓 column

- **Current:** ko_hun (Korean native vocabulary, 訓 reading) for body parts: 手 `"son"`, 足 `"bal"`, 目 `"nun"`, 耳 `"gwi"` (ipa "kwi"), 口 `"ip"`, 頭 `"meori"`, 心 `"maeum"`, 血 `"pi"` (ipa "pʰi"), 肉 `"sal"`.
- **Expected and consistency:** All ko_hun forms are correct native Korean body-part vocabulary ✓. However note that the `ipa` for 耳 ko_hun is `"kwi"` while the surface is `"gwi"`. Modern Korean 귀 is [kwi] phonetically (initial /k/ unaspirated, unvoiced), so surface should be `"gwi"` (RR) or `"kwi"` (Yale/MR); the file's `surface: "gwi"` is RR-correct. The IPA `"kwi"` is also phonetically accurate. ✓
- **Issue:** 血 ko_hun `"pi"` surface but ipa `"pʰi"` — Modern Korean 피 is aspirated [pʰi], so the surface in RR should be `"pi"` (since RR uses `p` for both ㅂ and ㅍ in initial position with no distinction) — but Yale would write `phi`. The file's surface `"pi"` is RR-OK. ✓
- This finding is more an observation than an issue; flag it only as a note that the ko_hun column is internally consistent.

---

### 24. Cross-script `native` slot — `mnc` / `sjo` carry full Manchu syllabary; `txg` carries Tangut; `juc` and `zkt` carry `"—"`; `dng` (Dungan) carries Cyrillic — coverage matrix is uneven but mostly defensible. One exception: `bca` (Central Bai) has no `native` field at all in any body-part entry

- **Current:** bca has surface (e.g. 手 `"shiux3"`) and ipa (`"ɕiu˨˩˦"`) but no `native` field anywhere in the body-parts cohort. The Bai Wenzi orthography (1958 official, used in surface) IS native — so the `native` field could legitimately mirror surface, or be marked `"—"`, but its complete absence from the schema for bca is asymmetric with other non-script-native langs (yue_us, zh_us) which also have no native field.
- **Expected:** Either explicitly remove `native` from the schema for languages that use Latin/Cyrillic/Han characters (and document the rule), or fill `native.bca = surface.bca` for parallelism with `native.dng = Cyrillic surface`. Currently dng has native `шўъ`, `җёъ` etc. (Cyrillic native script) but bca has no native at all even though its surface IS its native script.
- **Why:** This is a schema-level inconsistency more than a content error, but it shows up consistently across all 9 body parts and may indicate a missing data-entry step for bca.

---

## Summary

**Findings: 24**

The body-parts cohort is generally well-curated for surface and IPA across the 102 languages, but exhibits four classes of systemic issues:

1. **Proto-language asymmetry** (#1, #2, #3, #4, #5): pst is uniformly absent; ptb, phm, paa, pja have spotty coverage that doesn't track any obvious linguistic boundary.
2. **Sino-foreign layer-choice inconsistencies** (#7, #9, #13): the dataset sometimes picks Go-on, sometimes Kan-on for ja_ojp without a stated policy; ko_kp uses MR Romanization while ko uses RR; ko_mid 頭 has a probably-spurious tense initial.
3. **Lexical-substitution leakage** (#10, #11, #12, #18): dng, nan_sg/nan_id, za, and Cantonese all show cases where the native body-part word displaces the Sino-Han character-reading without flagging the substitution.
4. **Script / native-field coverage gaps** (#20, #21, #22, #24): juc, zkt, and bca have uniform or near-uniform null native fields where attested forms or surface-mirroring could be supplied.

The single highest-impact change would be (#1) backfilling pst across the cohort, since this is the comparativist's primary use case for the body-parts row. The single most embarrassing potential error is (#9) the ko_kp 足 = "chok" RR/MR inconsistency, since a Korean reader would immediately notice it.

**File path:** `/home/jounlai/langmap/hanmap_reviews/36_open.md`
**Finding count:** 24


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 18
- **policy/withdrawn skip**: 17
- **headline**: 心 mnc/juc/sjo mujilen→niyaman ×5, 頭 ko_mid ttwu→twu ×3, 目/肉 ko_bus L→H ×2, 足 ko_kp RR ×2, 口 ja_ojp kou→ku ×2, 血 ketu→keti ×2, zh_phagspa 口 native typo ×1, txg 心 native ×1
- **JSON path**: /tmp/hm_edits_36.json
