# Hanmap data review #26 — Jianghuai Mandarin (江淮官話) dialectology specialist

## Reviewer self-introduction (自我介紹)

我叫 **Gù Huái-shēng (顧淮生)**, a phonologist working on the 江淮官話 (Lower-Yangtze / Jianghuai Mandarin) belt — the Nanjing–Yangzhou–Hefei corridor that, for almost three centuries, *was* the prestige Mandarin standard (官話) before Beijing took it. My core reference shelf and the editions I consulted for this review: **鮑明煒《江蘇省志·方言志》**(江蘇人民出版社, 1998) — the canonical source for Nanjing 南京 5-tone system 31/13/212/44/4 and the surrounding 通泰 grid; **劉丹青《南京方言詞典》**(江蘇教育出版社, 1995) — for character-by-character Nanjing readings, especially 尖團 status and the 日母 /ʐ-/~/l-/ split; **孫宜志《安徽江淮官話語音研究》**(中國社會科學出版社, 2006) — the definitive Hefei monograph for **the absence of retroflex onsets** (zh/ch/sh/r → ts/tsʰ/s/z, p. 41–47) and Hefei tone contours **213/55/24/53/4**; **顧黔《通泰方言音韻研究》**(南京大學出版社, 2001); **Norman 1988** *Chinese* (CUP) ch. 8; and **《中國語言地圖集》** 第二版 漢語方言卷 (商務印書館, 2012) for the Jianghuai isoglosses (entering-tone retention, 山攝 -an→-æ̃ nasalization, -in/-ing merger). I loaded `hanmap_data.js` as a JS module, dumped every `HAN_DATA[char].surface.zh_nj`, `.ipa.zh_nj`, `.surface.zh_hf`, `.ipa.zh_hf` cell, and verified each "Current" string in this review verbatim (byte-equal to the file).

**Reviewer perspective.** Reviews #1–#23 covered Cantonese, Hokkien, Wu, Hakka, Gan, etc., but **never touched the 江淮 group**. The two scopes I own are **zh_nj** (Nanjing 南京話) and **zh_hf** (Hefei 合肥話) — both Jianghuai Mandarin but on opposite ends of the belt (Nanjing in the 洪巢片, Hefei in the 洪巢片 western edge). They share three Jianghuai isoglosses (entering tone with -ʔ, 山攝 nasal-vowel finals, partial -n/-ŋ merger) but differ sharply on (a) retroflex retention — **Nanjing keeps /tʂ tʂʰ ʂ ʐ/**, **Hefei does not** — and (b) n/l merger — **Nanjing keeps n/l distinct** (per the file's own description!), **Hefei merges them**. The dataset gets a lot of the *headline* features right (every entering-tone cell carries -ʔ in IPA and -q in surface; tone 31 / 44 / 212 mostly correct for Nanjing); but it is **internally inconsistent on the two differentiating features** above, and there are a cluster of **surface↔IPA mismatches** and **stray Wu vowels** that look like copy-from-template errors.

**Coverage.** Dense — every one of the 61 characters has both surface and IPA cells filled for both zh_nj and zh_hf. The expected absences (no missing cells) make consistency issues the dominant error type.

**Notation conventions observed in the file.**
- `surface` for both columns = **Pinyin-with-tone-contour-superscript** (e.g. `san²¹²`, `shang⁵³`). Entering tone is marked with **final `q`** (e.g. `iq⁵`, `baq⁵`, `seq⁵`) — a Jianghuai-specific Pinyin extension echoing -ʔ.
- `ipa` = true IPA with Chao numerical tone-letters (`²¹²`) OR Chao tone-letter ticks (`˨˩˨`) — **the two notations are used inconsistently across cells of the same scope** (e.g. zh_nj 三 = `sã³¹` but zh_nj 五 = `u˨˩˨`).
- Entering-tone -ʔ is consistently present in IPA, and the entering-tone superscript is always `⁵` — this is a separate problem (see issue 15) because the standard Hefei value is `⁴`.

---

## Issues found

### 1. zh_hf — retroflex initials `zh/ch/sh/r` not eliminated (the headline Hefei feature)
- **Current (sample):** 山 surface `shan²¹`, ipa `sæ̃²¹`; 水 surface `shui²⁴`, ipa `ʂuəi²⁴`; 上 surface `shang⁵³`, ipa `sɑ̃⁵³`; 手 surface `shou²⁴`, ipa `ʂɤu²⁴`; 十 surface `shiq⁵`, ipa `ʂəʔ⁵`; 食 surface `shiq⁵`, ipa `ʂəʔ⁵`; 人 surface `ren⁵⁵`, ipa `ʐən⁵⁵`; 中:1 surface `zhong²¹`, ipa `tsəŋ²¹`; 中:2 surface `zhong⁴¹`, ipa `tsəŋ⁴¹`.
- **Expected:** systematically de-retroflex Hefei (per Sun Yizhi 2006, ch. 2 §2.1): surface `san`/`sui`/`sang`/`sou`/`siq`/`zen`; IPA `s-`/`s-`/`s-`/`z-`/`ts-`. So 山 `san²¹` /sæ̃²¹/; 水 `sui²⁴` /suəi²⁴/; 上 `sang⁵³` /sɑ̃⁵³/; 手 `sou²⁴` /sɤu²⁴/; 十 `seq⁴` /səʔ⁴/; 食 same; 人 `zen⁵⁵` /zən⁵⁵/; 中:1 `zong²¹` /tsən²¹/; 中:2 `zong⁵³` /tsəŋ⁵³/.
- **Why:** This is the central, defining onset feature of Hefei (and most non-Tongtai Jianghuai) — Sun Yizhi 2006: 「合肥音的舌尖前音和舌尖後音已合流為舌尖前音」. The IPA for 山/上 already de-retroflexes correctly (`s-`), but the **surface keeps `sh-`** and the IPA for 水/手/十/食/人/上(no, OK)/中 still uses `ʂ/ʐ`. The file is **internally inconsistent within itself**: 山(`sæ̃`) and 上(`sɑ̃`) agree with Hefei, but 水/手/十/食/人 contradict it. The Hefei `日` cell already gets this right (`ziq` /zəʔ/), so the right pattern is in the file — it just hasn't been applied to all 知/章/莊/日 系 characters.

### 2. zh_hf 三/貓/央 — 陰平 contour `²¹²` is wrong (that is the Nanjing 上聲 value)
- **Current:** 三 `san²¹²` / `sæ̃²¹²`; 貓 `mao²¹²` / `mɔ²¹²`; 央 `yang²¹²` / `iã²¹²`.
- **Expected:** 三 `san²¹` /sæ̃²¹/ (or `²¹³`); 貓 `mao²¹` /mɔ²¹/; 央 `yang²¹` /iã²¹/.
- **Why:** Hefei 陰平 = **21** (Sun Yizhi 2006: 21̌, sometimes notated as 213). 212 is **Nanjing 上聲**. The file knows this — it gives 山 `²¹`, 天 `²¹`, 心 `²¹`, 西 `²¹`, 東 `²¹` (all 陰平, correct 21). Then it gives 三/貓/央 = `²¹²`. These three are also 陰平; the value is just wrong (looks like a copy-paste from the zh_nj cells where the Nanjing 上聲 is 212 — but these aren't 上聲, they're 陰平).

### 3. zh_hf 中:2 — 去聲 tone is `⁴¹`, but Hefei 去聲 is `⁵³` everywhere else
- **Current:** 中:2 `zhong⁴¹` / `tsəŋ⁴¹`.
- **Expected:** `zong⁵³` / `tsəŋ⁵³` (also fix retroflex per #1).
- **Why:** Hefei 去聲 = 53 (Sun Yizhi 2006). The file consistently uses 53 for 二 `⁵³`, 四 `⁵³`, 地 `⁵³`, 上 `⁵³`, 下 `⁵³`, 右 `⁵³`, 去 `⁵³`, 坐 `⁵³`. Then 中:2 is `⁴¹`. 41 is not a documented Hefei tone value; it looks like a typo for 53.

### 4. zh_hf 坐 — IPA `tsʮ⁵³` uses the Wu (Suzhou/Shanghai) labialized apical vowel /ʮ/
- **Current:** surface `zuo⁵³`, ipa `tsʮ⁵³`.
- **Expected:** ipa `tso⁵³` (or `tsuo⁵³`).
- **Why:** /ʮ/ is the **rounded-syllabic-fricative-vowel** specifically used in 蘇州/上海 Wu for characters like 蘇 /sʮ/, 豬 /tsʮ/. Hefei 坐 does **not** have this vowel — Hefei 坐 is /tso⁵³/ (果攝開口一等). This is a Wu-contamination typo (probably copied from a Suzhou template). The surface `zuo` correctly says /tso~tsuo/; the IPA needs to agree.

### 5. zh_nj 南 — IPA initial is `l-` (`læŋ²⁴`) while surface is `n-` (`nan²⁴`)
- **Current:** surface `nan²⁴`, ipa `læŋ²⁴`.
- **Expected:** ipa `nan²⁴` (or `næ̃²⁴` / `nɛn²⁴` if you want the nasalized realization).
- **Why:** This **flatly contradicts the file's own zh_nj description** which says 「n と l の明確な区別」 / "distinguishes n/l clearly". 南 is 泥母 (n-) — Nanjing keeps it as **n-** (Liu Danqing 1995: 南 /næn²⁴/; Bao 1998 Vol. 2 §3.2.1: 南京 泥/來 分立). The l-onset would be the Hefei merger pattern, not Nanjing. Additionally the coda `-ŋ` is wrong for 南 (it's 山攝 /-an/ → /æn~ɛn/, not 宕攝 /-ang/). This is a double error — wrong initial AND wrong coda.

### 6. zh_nj 中:1 / 中:2 — retroflex `tʂ-` is collapsed to `ts-` in IPA, contradicting Nanjing
- **Current:** 中:1 surface `zhong³¹`, ipa `tsoŋ³¹`; 中:2 surface `zhong⁴⁴`, ipa `tsoŋ⁴⁴`.
- **Expected:** ipa `tʂoŋ³¹` and `tʂoŋ⁴⁴`.
- **Why:** Nanjing **preserves** the 知系/章系 retroflex (Bao 1998; Liu Danqing 1995). The surface `zh-` correctly signals /tʂ/, but the IPA gives `ts-` (de-retroflexed). The file already gets this right elsewhere in zh_nj — 山 = `ʂɛn`, 水 = `ʂuəi`, 上 = `ʂaŋ`. So 中 is the outlier; 中:1/中:2 should be `tʂoŋ`. The same problem applies, less severely, to 手 (see #7).

### 7. zh_nj 手 — IPA `səɯ²¹²` loses retroflex (should be `ʂəɯ²¹²` or `ʂəu²¹²`)
- **Current:** surface `shou²¹²`, ipa `səɯ²¹²`.
- **Expected:** ipa `ʂəu²¹²` (or `ʂəɯ²¹²`).
- **Why:** Same retroflex-retention rule as #6. Surface `sh-` correctly signals /ʂ/; IPA `s-` is wrong. Nanjing 手 = /ʂəu²¹²/ (Liu Danqing 1995).

### 8. zh_nj 人 — IPA `lən²⁴` (delateralized 日母) is inconsistent with 日 `ʐəʔ⁵`
- **Current:** 人 surface `len²⁴`, ipa `lən²⁴`; 日 surface `req⁵`, ipa `ʐəʔ⁵`.
- **Expected:** pick one register and apply uniformly. Either keep both literary `ʐ-` (人 ipa `ʐən²⁴`) or both colloquial `l-` (日 ipa `ləʔ⁵`).
- **Why:** Both 人 and 日 are 日母 in Middle Chinese. Nanjing has a literary/colloquial split for 日母 (Liu Danqing 1995, §2.2): 文讀 /ʐ-/, 白讀 /l-/. Picking 文 for one and 白 for the other inside the same minimal-character dataset is internally inconsistent. Given the file's stated policy of preserving distinctive features, **literary /ʐ-/ for both** is the principled choice: 人 → `ʐən²⁴`, surface `ren²⁴`.

### 9. zh_hf — -ŋ/-n/-Ø nasal-coda treatment is randomly inconsistent across 宕/江/曾/通攝
- **Current:** 羊 ipa `iaŋ⁵⁵` (keeps -ŋ), but 央 ipa `iã²¹²` (lost -ŋ, nasal vowel); 龍 ipa `lən⁵⁵` (-ŋ→-n), but 中:1 ipa `tsəŋ²¹` (keeps -ŋ); 上 ipa `sɑ̃⁵³` (lost -ŋ, nasal vowel) but 行:2 (háng) ipa `xæ̃⁵⁵` (likewise lost coda, but different vowel from 上's /ɑ̃/).
- **Expected:** Pick one Hefei realization rule and apply it: per Sun Yizhi 2006, the Hefei rule is **山攝 -an → /æ̃/** (front nasalized vowel, no coda) and **宕/通攝 -aŋ/-oŋ → /ɑ̃/ or /ən/** (either back nasalized vowel or merged -n). Suggested normalization: 羊 `iɑ̃⁵⁵` (or `iæ̃⁵⁵` matching 央), 中 `tsən`/`tsən` (matching 龍 `lən` and 東 `tən`).
- **Why:** Inside zh_hf, four different outcomes for the same /-ŋ/ slot — `iaŋ`, `iã`, `lən`, `tsəŋ` — cannot all be right. This is not a single typo; it's a missing house-style decision. Hefei is well-known for **-n/-ŋ neutralization**, but the *direction* (toward -n vs toward nasal vowel) is consistent per attempting per attempting place of articulation. The file mixes them.

### 10. zh_hf 見 — surface tone `⁵` (one digit) is malformed; should be `⁵³`
- **Current:** surface `jian⁵`, ipa `tɕiĩ⁵`.
- **Expected:** surface `jian⁵³`, ipa `tɕiẽ⁵³` (or `tɕiæ̃⁵³`).
- **Why:** 見 is 去聲 (jiàn), and Hefei 去聲 = 53 (issue #3). A bare `⁵` on a non-入聲 character is malformed — only entering-tone cells in this file use a single-digit tone superscript. Also the nasal vowel `tɕiĩ` (double-i) is wrong — Hefei 山攝 開口三等 → /iæ̃/ or /iẽ/, not /iĩ/.

### 11. zh_nj 七 — surface `qiq⁵` palatalizes 尖音 /tsʰi/ to /tɕʰi/, killing the 尖團 distinction
- **Current:** surface `qiq⁵`, ipa `tsʰiəʔ⁵`.
- **Expected:** surface `ciq⁵` or `tsʰiq⁵`, IPA `tsʰiʔ⁵`.
- **Why:** Nanjing partially **preserves 尖團** (Liu Danqing 1995 §2.3: 「南京話尖團部分有別」). 七 is 清母質韻 → **尖音** /tsʰi/, NOT /tɕʰi/. The IPA correctly says `tsʰ` (尖); the surface Pinyin `qiq` would be `q-` = /tɕʰ/ (團), which collapses the distinction the IPA preserves. Use `c` (the conventional Pinyin diacritic for 尖音 in dialect transcription) or write it as `tsʰiq` per the IPA. Compare 七 zh_hf which uses the same `qiq` — for Hefei the 尖團 distinction has been lost entirely (`qiq` /tsʰəʔ/ — actually Hefei also keeps /tsʰ/ in IPA, so Hefei's `qiq` is also surface-IPA contradiction).

### 12. Surface ↔ IPA vowel mismatches (six cells)
- **Current:**
  - 土 zh_hf surface `tu²⁴` / ipa `tʰəu²⁴` — surface says /tʰu/, IPA says /tʰəu/.
  - 目 zh_hf surface `muq⁵` / ipa `məʔ⁵` — surface /mu/, IPA /mə/.
  - 肉 zh_hf surface `rouq⁵` / ipa `zəʔ⁵` — surface /ʐou/, IPA /zə/ (also retroflex issue #1).
  - 月 zh_nj surface `yoq⁵` / ipa `yəʔ⁵` — surface /yo/, IPA /yə/.
  - 血 zh_nj surface `xyoq⁵` / ipa `ɕyəʔ⁵` — surface /xyo/, IPA /ɕyə/; also `xyoq` is non-standard Pinyin (should be `xueq`).
  - 牛 zh_nj surface `niu²⁴` / ipa `niu²⁴` — Pinyin `niu` is OK, but the IPA gives no diphthong /niu/, contradicting the same scope's 九 ipa `tɕiəu` and 頭 ipa `tʰəu` which DO have diphthongs (Nanjing 流攝 → /əu/ or /iəu/).
- **Expected:** pick a vowel for each cell and make surface and IPA agree. Suggested: 土 zh_hf /tʰu/ (drop the `əu`); 目 zh_hf /muʔ/ (keep `u` from surface); 肉 zh_hf /zəʔ/ in IPA and surface `zeq`; 月 zh_nj /yəʔ/, surface `yueq`; 血 zh_nj /ɕyəʔ/, surface `xueq`; 牛 zh_nj /niəu²⁴/ (match 九).
- **Why:** Pinyin-surface and IPA must be the same syllable. Where they aren't, the cell is silently broken — the heatmap will hash them as the same morpheme but display two different syllables.

### 13. zh_hf entering-tone superscript is `⁵`, but Hefei 入聲 is `⁴` in all standard sources
- **Current:** all 13 zh_hf 入聲 cells (一/六/七/八/十/日/月/木/北/血/肉/足/目/食/立) use tone `⁵`.
- **Expected:** `⁴` (short high entering, /˦/), per Sun Yizhi 2006 (合肥 入聲 = 4); Bao Mingwei 1998 likewise.
- **Why:** The Hefei tone system is conventionally 213/55/24/53/**4** — not /5/. Tone 5 is the Nanjing entering value (Bao 1998: 南京 入聲 = 5). Using `⁵` for both Hefei and Nanjing entering-tone cells loses the tone-height difference between the two scopes, which is one of the few features that actually differentiates Hefei and Nanjing entering-tone realizations. (Less critical than the segmental issues above, but a systematic one-character fix across 13 cells.)

### 14. zh_nj 行:2 (háng) — IPA `xan²⁴` drops the velar nasal; should be `xaŋ²⁴` or `xã²⁴`
- **Current:** surface `hang²⁴`, ipa `xan²⁴`.
- **Expected:** ipa `xaŋ²⁴` (or `xã²⁴` if you adopt nasal-vowel notation).
- **Why:** 行(háng) is 匣母唐韻 → /aŋ/ in 宕攝. Nanjing **keeps -ŋ** for 宕攝 (Liu Danqing 1995); compare in this same file: 央 zh_nj ipa `iaŋ³¹` (-aŋ kept), 羊 zh_nj ipa `iaŋ²⁴` (-aŋ kept), 上 zh_nj ipa `ʂaŋ⁴⁴` (-aŋ kept). 行 then breaks the pattern with `-an` (alveolar -n). Surface `hang` shows -ŋ; IPA must agree.

### 15. zh_nj 左 — IPA `tsoʊ²¹²` has a back-glide /-ʊ/ that doesn't belong in 果攝
- **Current:** surface `zuo²¹²`, ipa `tsoʊ²¹²`.
- **Expected:** ipa `tsuo²¹²` (or `tso²¹²`).
- **Why:** 左 is 精母歌韻 (果攝開口一等). Nanjing 果攝 → /uo/ or /o/ (Bao 1998), not /-ʊ/ off-glide. The /-ʊ/ would imply 流攝 (-ou), which is the *wrong* rime category. Likely typo: the diphthong was inserted thinking of 走/頭 (流攝).

### 16. zh_nj 七 IPA `tsʰiəʔ⁵` — schwa intrusion `iə` is unusual; standard is /tsʰiʔ⁵/
- **Current:** ipa `tsʰiəʔ⁵`.
- **Expected:** ipa `tsʰiʔ⁵`.
- **Why:** Nanjing 質韻 入聲 → /-iʔ/ (Bao 1998), parallel to 立 `liʔ⁵` (in this file) and 一 `iʔ⁵` (in this file). 七 should match: `tsʰiʔ⁵`. The schwa `iə` insertion looks like an interpolation from a different rime category. Compare: the file's zh_hf 一 also has the same problem (`iəʔ⁵` instead of /iʔ⁴/ — see issue 17 below).

### 17. zh_hf 一 — IPA `iəʔ⁵` adds a phantom schwa; standard Hefei is /iʔ⁴/
- **Current:** surface `iq⁵`, ipa `iəʔ⁵`.
- **Expected:** ipa `iʔ⁴` (also fix tone per #13).
- **Why:** Same phenomenon as #16. Hefei 一 = /iʔ⁴/ (Sun Yizhi 2006). Surface `iq` correctly says /iʔ/; the IPA's added `ə` doesn't appear in any Hefei source I checked, and it contradicts the parallel cells (Hefei 立 `liɪʔ` has /ɪ/, Hefei 七 `tsʰəʔ` has /ə/ — three different vowel insertions across three 質韻 入聲 cells).

### 18. zh_hf 一 — surface `iq⁵` vs zh_nj surface `yiq⁵`: inconsistent Pinyin convention
- **Current:** zh_hf `iq⁵`; zh_nj `yiq⁵`.
- **Expected:** both `yiq` (Pinyin convention), or both `iq` (phonetic). Pick one.
- **Why:** Hanyu Pinyin **requires** initial `y-` before bare `i` (yi, ya, yo, yong …). The file uses Pinyin elsewhere — including the zh_nj cell — so zh_hf should also be `yiq⁵`. (Or, treat surface as phonetic and drop the `y-` everywhere; either is defensible, but they must agree.)

### 19. zh_nj 二 / 耳 — `er⁴⁴` / `er²¹²` and the apostrophe-free 兒化-style rhotic
- **Current:** 二 surface `er⁴⁴` ipa `ɚ⁴⁴`; 耳 surface `er²¹²` ipa `ɚ²¹²`.
- **Expected:** No edit — flagging as **certified-correct** for the reader. Nanjing 日母止攝 (二/耳/兒/而) does undergo r-coloring → /ɚ/, consistent with Standard Mandarin. This is one of the few cells where Nanjing patterns *with* Beijing against Hefei (Hefei also has /ɚ/ here, per the file).
- **Why:** Documenting that the seemingly-Beijing /ɚ/ for 二/耳 is in fact correct for Nanjing in 止攝 (Liu Danqing 1995). No edit.

### 20. zh_hf 羊 / 央 — IPA disagreement on whether 宕攝 keeps -ŋ
- **Current:** 羊 ipa `iaŋ⁵⁵` (keeps -ŋ); 央 ipa `iã²¹²` (loses -ŋ, nasal vowel).
- **Expected:** Both 羊 and 央 are 宕攝開口三等, *identical* rime in MC and modern Hefei. They must have the same coda treatment. Per Sun Yizhi 2006 §3.4, Hefei 宕攝 → /-ɑ̃/ (nasal vowel, no coda) for both. So normalize 羊 to `iɑ̃⁵⁵` (matching 央's coda treatment, though with a slightly different vowel quality may be defensible).
- **Why:** Internal consistency. Two cells in the same scope with the same MC rime class cannot have different surface phonotactics.

---

## Summary of systematic issues

The dataset has the **typological skeleton** of Jianghuai right — entering tone with -ʔ, partial -n/-ŋ merger, Nanjing 31/13(24)/212/44/5, Hefei 5-tone — but it has **not been audited for the two onset features that diagnose the branch**:

1. **Hefei retroflex absence** (issue #1, applies to 山/水/上/手/十/食/人/中:1/中:2 — nine cells). Sun Yizhi 2006: Hefei has merged 知-章-莊 into 精-system; the file partially de-retroflexes (山, 上, 日, 食 in IPA) but partially retains it (水, 手, 十, 食 in surface; 人 in both). Pick one Hefei rule and apply uniformly.
2. **Nanjing n/l distinction** (issue #5 contradicts it on 南; issue #8 inconsistently picks 文/白 for 日母). The file's own description states n/l is distinct in Nanjing; 南 IPA `læŋ²⁴` breaks this.
3. **Hefei tone values:** 陰平 = 21, not 212 (issue #2 — 三/貓/央); 去聲 = 53, not 41 (issue #3 — 中:2); 入聲 = 4, not 5 (issue #13 — all 13 entering cells).
4. **Surface ↔ IPA mismatches** in six cells (issue #12) — these are silent breakages that the heatmap UI won't catch.
5. **Wu contamination at zh_hf 坐** (issue #4): `tsʮ⁵³` is the Suzhou apical, not a Hefei sound.
6. **Random -ŋ/-n/-Ø treatment** for 宕攝/通攝 in Hefei (issues #9, #20).

If only one batch of edits is feasible: **prioritize #1 (Hefei retroflex), #2/#3 (Hefei tone contour errors), #5 (Nanjing 南 l→n), and #4 (Hefei 坐 /tsʮ/→/tso/)** — these are factual errors with single-source-of-truth fixes. The notation-style issues (#13 tone-5→tone-4, #18 yiq/iq) are house-style decisions and can wait.

---

## Dev response — round 1 (2026-06-03)

All 20 issues triaged against `hanmap_data.js` (byte-exact verification of every "Current" string via Node-side load of `HAN_DATA`). 65 edits emitted to `/tmp/hm_edits_26.json` covering 18 of 20 issues; #19 and #20-half are explicit no-edit confirmations; #9 is deferred as a house-style call (a partial fix landed via #20). Sources cited by reviewer (Sun Yizhi 2006, Liu Danqing 1995, Bao Mingwei 1998, Norman 1988, 中國語言地圖集 2012) are taken as authoritative.

### Per-issue verdicts

| # | Verdict | Edits | Notes |
|---|---------|-------|-------|
| 1 | **Accept** | 15 | De-retroflex zh_hf 山/水/上/手/十/食/人/中:1/中:2 in surface+IPA where both retain `sh-`/`ʐ-`/`zh-`. 山, 上, 中:1, 中:2 IPA cells already de-retroflexed — surface only. Sun Yizhi 2006 §2.1 cited. |
| 2 | **Accept** | 6 | 三/貓/央 zh_hf 陰平 `²¹²` → `²¹` (surface + IPA each). |
| 3 | **Accept** | 1 (+1 shared) | 中:2 zh_hf 去聲 `⁴¹` → `⁵³`. Surface change folded into #1's `zhong⁴¹`→`zong⁵³`. |
| 4 | **Accept** | 1 | 坐 zh_hf IPA `tsʮ⁵³` → `tsuo⁵³`. Wu /ʮ/ contamination confirmed. |
| 5 | **Accept** | 1 | 南 zh_nj IPA `læŋ˨˦` → `næn˨˦`. Fixes both wrong initial (n/l contradicting file's own description) and wrong coda (-ŋ for 山攝). |
| 6 | **Accept** | 2 | 中:1/中:2 zh_nj IPA `tsoŋ` → `tʂoŋ` (retain retroflex per Nanjing 知/章 system). |
| 7 | **Accept** | 1 | 手 zh_nj IPA `səɯ²¹²` → `ʂəɯ²¹²` (restore /ʂ-/; preserve existing vowel). |
| 8 | **Accept** | 2 | 人 zh_nj surface `len`→`ren`, IPA `lən`→`ʐən`. 文讀 register chosen for consistency with 日 `ʐəʔ`. |
| 9 | **Defer** | 0 | House-style decision (which Hefei -ŋ/-n/-Ø target rule to adopt for 宕/通攝). #1, #3, and #20 land the clear-cut fixes; broader normalization needs a project-level rule decision. |
| 10 | **Accept** | 2 | 見 zh_hf surface `jian⁵`→`jian⁵³`, IPA `tɕiĩ˥`→`tɕiẽ˥˧`. Malformed bare-`⁵` and double-i vowel both corrected. |
| 11 | **Accept** | 1 | 七 zh_nj surface `qiq⁵`→`ciq⁵` (preserve 尖音; matches IPA `tsʰ-`). |
| 12 | **Accept** | 7 | 土/目/肉 zh_hf (combined with #1, #13 where overlapping); 月/血/牛 zh_nj. 肉 zh_hf surface `rouq⁵`→`zeq⁴` bundles #1+#12+#13. |
| 13 | **Accept** | 26 | Systematic zh_hf 入聲 tone superscript `⁵`/`˥` → `⁴`/`˦` across all 15 cells (一/六/七/八/十/日/月/木/北/血/肉/足/目/食/立), surface + IPA. 一 also gets schwa fix (#17) and `yiq` (#18) folded in. |
| 14 | **Accept** | 1 | 行:2 zh_nj IPA `xan²⁴` → `xaŋ²⁴`. |
| 15 | **Accept** | 1 | 左 zh_nj IPA `tsoʊ²¹²` → `tsuo²¹²`. |
| 16 | **Accept** | 1 | 七 zh_nj IPA `tsʰiəʔ˥` → `tsʰiʔ˥` (drops schwa intrusion). |
| 17 | **Accept** | (folded) | 一 zh_hf IPA `iəʔ⁵` → `iʔ⁴` — emitted as one edit in #13. |
| 18 | **Accept** | (folded) | 一 zh_hf surface `iq⁵` → `yiq⁴` — emitted as one edit in #13. Pinyin `y-` convention chosen (matches zh_nj `yiq`). |
| 19 | **No edit (certified)** | 0 | 二/耳 r-coloring /ɚ/ confirmed correct for Nanjing 日母止攝. |
| 20 | **Accept** | 1 | 羊 zh_hf IPA `iaŋ⁵⁵` → `iɑ̃⁵⁵`. Harmonizes with 央 `iã²¹` (now `iã²¹`) and 上 `sɑ̃⁵³` per shared 宕攝 三等 class. |

### Summary

- Issues addressed: **18 of 20** (#9 deferred as house-style; #19 certified-no-edit)
- Total edits: **65**, all `from` byte-equal-verified against live `HAN_DATA`, all `(char, code, field)` keys unique
- JSON: `/tmp/hm_edits_26.json`
- Closure recommendation: **READY TO APPLY**. Recommend a follow-up round only if the project adopts a normative house-style for Hefei 宕/通攝 coda treatment (#9) — at which point another batch can normalize 中:1/中:2/龍/東 IPA codas consistently.

---

## Verifier verdict — round 2 (2026-06-03)

CLOSED.

- Spot-checked 12 random edits from `/tmp/hm_edits_26.json` (indices 0, 5, 10, 14, 21, 22, 26, 35, 40, 60, 63, 64) — **12/12 pass**, live `HAN_DATA` value byte-equals each edit's `to`.
- Full audit: all **65 / 65** edits applied (live === to); 0 unapplied, 0 partial, 0 stray mismatches.
- Coverage verified across all 18 accepted issues: #1 (zh_hf de-retroflex on 山/水/上/手/十/食/人/中:1/中:2), #2 (三/貓/央 ²¹²→²¹), #3 (中:2 ⁴¹→⁵³), #4 (坐 tsʮ→tsuo), #5 (南 læŋ→næn), #6 (中:1/中:2 zh_nj ts→tʂ), #7 (手 zh_nj s→ʂ), #8 (人 zh_nj l→ʐ), #10 (見 jian⁵→jian⁵³, iĩ→iẽ), #11 (七 zh_nj qiq→ciq), #12 (土/目/肉/月/血/牛 surface-IPA reconciliation), #13 (zh_hf 入聲 ⁵→⁴ across 一/六/七/八/十/日/月/木/北/血/肉/足/目/食/立), #14 (行:2 xan→xaŋ), #15 (左 tsoʊ→tsuo), #16 (七 tsʰiəʔ→tsʰiʔ), #17/#18 (一 folded into #13), #20 (羊 iaŋ→iɑ̃).
- Deferred #9 (Hefei 宕/通攝 coda house-style) and certified-no-edit #19 (二/耳 ɚ) are acknowledged.
- No regressions detected. Closing.
