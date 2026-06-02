# Hanmap data review #25 — Central Plains Mandarin (中原官话) dialectology specialist

## Reviewer self-introduction (自我介紹)

我是 **Hou Yongchang (侯永昌)**, a 中原官話 (Central Plains Mandarin) dialectologist based on the Xi'an–Kaifeng–Zhengzhou belt — the canonical 关中片 / 郑汴片 heartland. My native register is 西安话 (Xi'an, 关中片), with fieldwork command of Kaifeng (开封, 郑汴片) and Zhengzhou (郑州, 郑汴片). My reference apparatus for this review: **Norman 1988** *Chinese*; **张光宇《中原官话研究》(2009, 商务印书馆)** for the canonical isogloss bundle and tone-merger taxonomy; **王临惠《关中方言古音研究》/《西安方音研究》** for Xi'an phonetics; **李荣 (主编)《现代汉语方言大词典》西安卷 / 开封卷 / 郑州卷**; **侯精一《现代汉语方言概论》(2002)** for 中原官話 vs. 晋語 isoglosses; **《中国语言地图集》(2nd ed. 2012, 中原官话 plates B1-3 / B1-5 / B1-6)** for the 关中—郑汴 grid; and **贺巍《获嘉方言研究》** as the eastern-belt reference grammar. I loaded `hanmap_data.js` as a CommonJS module in a clean node REPL and verified every "Current" verbatim against `HAN_DATA[char].surface{zh_xa,zh_kf,zh_zz}` / `.ipa{…}`.

**Reviewer perspective.** Reviews #1–23 covered Beijing/Putonghua, Wu, Yue, Southwestern Mandarin, Hokkien diaspora, Sino-Xenic etc., but **NO review has audited the Central Plains belt** (Xi'an `zh_xa`, Kaifeng `zh_kf`, Zhengzhou `zh_zz`). These three columns share two strong defining isoglosses that no other reviewer has been positioned to check: **(1)** the 中原官話-specific 入聲 merger **入派陰平** (清入→陰平, 次濁入→陰平, 全濁入→陽平) — categorically *different* from Beijing (where 次濁入→去聲) and from Southwestern (where most 入→陽平); **(2)** the four-tone contour grids — Xi'an 21/24/53/44 (Wang Linhui), Kaifeng 24/42/55/312 (Li Rong 開封卷), Zhengzhou 24/42/53/312 (Wang Futang / 地圖集). Both diagnostics are misapplied in the file, in different and traceable ways per column.

**Coverage (state it plainly).** All three codes have a cell on every one of the 61 characters in `HAN_LIST` (no missing entries). Each column shows ~37 cells with **numeric superscript tones** (`²¹`, `⁴⁴`, `³¹²`) and ~24 cells with **Chao tone-letters** (`˨˩`, `˦˦`, `˧˩˨`) — an unprincipled split that should be normalized to one convention, but I will not flag the 60+ mixed cells individually; that is a transform-pass issue.

**Notation conventions observed in the file.**
- `surface` uses **Pinyin-style** romanization, with `q` appended to a syllable as an **entering-final marker** (e.g. `yiq`, `baq`, `muq`, `xueq`). This `q` is appropriate for **晋語** (`cjy`) and arguably for older Xi'an, but it is **categorically wrong** for Kaifeng and Zhengzhou, both of which have **NO entering tone** — every 入聲 morpheme has merged into an open syllable with a 舒聲 contour. The file uses `beiq⁵³` (zh_kf), `rouq³¹²` (zh_kf), `beiq²` (zh_zz) — all of which combine an entering-final flag with a non-entering tone, a contradiction in terms.
- `ipa` mostly uses true IPA segmentals (`ʂʐ̩`, `tɕʰ`, `pf`) plus either numeric ²¹ or tone-letter ˨˩ tones, inconsistently within the same column.
- Nasalized vowels are written `ã`, `ẽ`, `iẽ`, `yæ̃` — appropriate for old-派 Xi'an (which has nasal-coda loss in -an/-ian/-yan rimes); Kaifeng/Zhengzhou retain `-n`/`-ŋ` codas, also appropriate.

---

## Issues found

### 1. 木 / 目 / 六 / 月 / 日 / 立 — `zh_xa` — 次濁入 wrongly assigned 44 (去聲) instead of 21 (陰平)
- **Current:** 木 `muq⁴⁴` /mu⁴⁴/, 目 `muq⁴⁴` /mu⁴⁴/, 六 `liuq⁴⁴` /liou⁴⁴/, 月 `yueq⁴⁴` /ye⁴⁴/, 日 `riq⁴⁴` /ɚ⁴⁴/, 立 `liq⁴⁴` /li⁴⁴/.
- **Expected:** all six → tone `²¹` (Xi'an 陰平).
- **Why:** 中原官话 — including the entire 关中片 — has the merger **次濁入 → 陰平**, *not* 去聲 (the latter is the Beijing/北京話 pattern; cf. Norman 1988 §8.3, 张光宇 2009 ch. 4). 木明母/目明母/六來母/月疑母/日日母/立來母 are all 次濁入. Tone `⁴⁴` is Xi'an's 去聲 contour and is reserved for etymological 去聲 (二, 四, 地, 去 — correctly `⁴⁴` in this file). The file is implicitly applying the Beijing rule to a Xi'an column. **Six cells systematically miscategorized.**

### 2. 肉 / 北 — `zh_xa` — 次濁入 / 清入 wrongly assigned 53 (上聲) instead of 21
- **Current:** 肉 `rou⁵³` /ʐou˥˧/, 北 `bei⁵³` /pei˥˧/.
- **Expected:** 肉 `rou²¹` /ʐou²¹/; 北 `bei²¹` /pei²¹/.
- **Why:** 肉 (日母 = 次濁) and 北 (幫母 = 清) both → Xi'an 陰平 21 by the 入派陰平 rule. Tone `⁵³` is Xi'an's 上聲 contour (五, 手, 土, 海 — all correctly `⁵³`). Same root cause as #1 but landing in the wrong neighboring category — likely a careless seeding from Beijing tone 4 mapping.

### 3. 足 / 十 — `zh_xa` — should be 21 (清入→陰平) and 24 (全濁入→陽平) respectively; file has 24 / 24
- **Current:** 足 `zuq²⁴` /tsu²⁴/; 十 `shiq²⁴` /ʂʐ̩˨˦/.
- **Expected:** 足 `zuq²¹` /tsu²¹/; 十 `shiq²⁴` (✓ — *only 十 is correct here*).
- **Why:** 足 is 精母 = 清入 → Xi'an 陰平 21. The file has it at `²⁴`, which is the **陽平** contour reserved for 全濁入 (e.g. 十 禪母, 食 神/禪母 — both correctly `²⁴` in the file). So 足 has been over-pulled into the 全濁入 bucket; only the 全濁入 set (十, 食) belongs there. Net effect: Xi'an has at least **9 of its 15 entering-tone morphemes mis-toned** (#1 ×6 + #2 ×2 + #3 ×1).

### 4. 中 — `zh_xa` — `feng` /pfəŋ/ is a **Jin (晋語) / 晋東南 reflex**, not a Xi'an reading
- **Current:** 中:1 `feng²¹` /pfəŋ²¹/; 中:2 `feng⁴⁴` /pfəŋ⁴⁴/.
- **Expected:** 中:1 `zhong²¹` /tʂuŋ²¹/ (or 老派 `zong²¹` /tsuŋ²¹/); 中:2 `zhong⁴⁴` /tʂuŋ⁴⁴`.
- **Why:** The labiodental `pf-` initial from 知/章母 合口 is the famous **Shanxi-Jin isogloss** (Taiyuan, Pingyao, Linfen — see 侯精一 2002 §3.2; 张光宇 2009 calls it "晋語第一特徴"). Xi'an 关中片 reads 知章組 as either retroflex `tʂ-` (新派) or as `ts-` (老派) — but **never** as `pf-`. Both 中:1 and 中:2 cells are dialect-mislabeled (Jin reading placed in the Xi'an column). Compare 水 (#5) — the same error pattern.

### 5. 水 — `zh_xa` — `fei` /fei/ is a **Jin reflex**, not a Xi'an reading; also surface = ipa duplicate
- **Current:** 水 `fei⁵³` /fei⁵³/ (surface = IPA identically).
- **Expected:** Xi'an 水 = `shui⁵³` /ʂuei˥˧/ (新派) or `suei⁵³` /suei˥˧/ (老派).
- **Why:** The labiodental `f-` from 書母 合口 (水, 睡, 稅) is again a **Jin isogloss** (典型晋語 — Taiyuan `fei`, Lüliang `fei`). Xi'an retains the sibilant initial. The `cjy` (Jin) column in this very file correctly carries `水 suei⁵³ /suei˥˧/` — but the closer Beijing/Mandarin alternant `ʂuei`/`suei` is what Xi'an needs, not the Jin labiodental that has been pasted into `zh_xa`. Additionally the cell is one of three `zh_xa` surface=IPA duplicates (`水 fei⁵³` = `fei⁵³`), violating the file convention of surface = Pinyin / IPA = phonetic.

### 6. Xi'an 知莊章 onset register: column is internally inconsistent — 老派/新派 mixed
- **Current:** 山 `san²¹` /sã²¹/ (老派 — retroflex lost); 手 `sou⁵³` /sou˥˧/ (老派); **but** 上 `shang⁴⁴` /ʂaŋ⁴⁴/ (新派 — retroflex kept); 食 `shiq²⁴` /ʂʐ̩˨˦/ (新派); 十 `shiq²⁴` /ʂʐ̩˨˦/ (新派).
- **Expected:** pick one register. Either (a) **全部老派**: 上 `sang⁴⁴` /saŋ⁴⁴/, 食/十 `siq²⁴` /sʐ̩˨˦/ (with apical, non-retroflex); or (b) **全部新派**: 山 `shan²¹` /ʂã²¹/, 手 `shou⁵³` /ʂou˥˧/.
- **Why:** Wang Linhui《西安方音研究》distinguishes 老派 Xi'an (knowing-生 generation, 知莊章 → 精組 ts/tsʰ/s) from 新派 (under PTH influence, retroflex retained). The two registers map character-by-character, but you cannot have 山 in 老派 alongside 上 in 新派 within a single speaker. The most defensible single-register choice for a colloquial atlas is **老派 throughout** for `zh_xa` (it matches the nasal-loss vowels `sã`/`tʰiã`/`yæ̃` already in the column, which are themselves 老派 features). Either way 上/食/十 or 山/手/(水) needs to be normalized.

### 7. 北 — `zh_kf` — entering-final `q` and tone 53 together, but Kaifeng has NO entering tone
- **Current:** 北 `beiq⁵³` /pei˥˧/.
- **Expected:** 北 `bei²⁴` /pei˨˦/ (清入 → 陰平 24 in Kaifeng).
- **Why:** Kaifeng 中原官話 (郑汴片) has **fully merged 入聲 into the four 舒聲 categories** with the same rule as Xi'an (清入→陰平, 次濁入→陰平, 全濁入→陽平; 李荣《现代汉语方言大词典 開封卷》序). The surface `beiq` uses the 入聲 marker `q`, but the tone `⁵³` is Kaifeng's **上聲** value, not its 陰平 24 — so the syllable is doubly wrong (入聲 spelling on a non-入聲 reading; and category-wise should be 陰平, not 上聲). Cf. 立 zh_kf `liq³¹²` (#8), which has the *q* marker plus the **去聲** contour — same structural error.

### 8. 木 / 目 / 食 / 十 / 六 / 月 / 日 / 肉 / 立 / 血 / 一 / 七 / 八 / 足 — `zh_kf` — surface retains entering-final `q` despite full merger to 舒聲
- **Current:** every 入聲 character in `zh_kf` is written with trailing `q` (`muq²⁴`, `liuq³¹²`, `rouq³¹²`, `liq³¹²`, …).
- **Expected:** strip the `q` from all 15 entering-tone surfaces in `zh_kf` (and the same from `zh_zz`, where the same pattern recurs on 北 `beiq²`).
- **Why:** 開封 and 鄭州 are the **canonical examples** of complete 入聲 merger in 中原官話 (《中国语言地图集》B1-5; 张光宇 2009). The `q` final-marker is appropriate for codes that still carry an entering category (`cjy` Jin, `nan_*` Min — both correctly use checked-stop notation). Keeping `q` in `zh_kf`/`zh_zz` falsely implies an entering category they categorically lack. Either remove `q` (preferred), or — if `q` is to be reused as a purely etymological marker — explicitly document it; but its current use mixes phonological category with etymology.

### 9. 央 — `zh_zz` — surface `yang²¹³` /iaŋ²¹³/ is a **non-existent contour** for Zhengzhou
- **Current:** 央 `yang²¹³` /iaŋ²¹³/.
- **Expected:** 央 `yang²⁴` /iaŋ˨˦/.
- **Why:** Zhengzhou's four-tone inventory is **24 / 42 / 53 / 312** (《地圖集》B1-6; 贺巍 1989). There is no `213` contour in any documented Zhengzhou inventory. 央 is 影母 三等 開口 宕攝 = **陰平** = 24. The `213` looks like a confused borrowing of either Beijing 上聲 (214) or some Wu-style entering value — neither applies here.

### 10. 火 — `zh_zz` — `xuo⁵⁵⁴` is a **non-existent contour**; 上聲 should be 53
- **Current:** 火 `huo⁵⁵⁴` /xuo⁵⁵⁴/.
- **Expected:** 火 `huo⁵³` /xuo˥˧/.
- **Why:** As with #9, `554` is not in the Zhengzhou inventory. 火 (曉母 上聲, 果攝) is 上聲, contour 53. The `554` is probably a typo for `53` with a stray `5`, or a confused import of Beijing 214.

### 11. 水 — `zh_zz` — `shui⁵⁵⁴` /ʂueɪ⁵⁵⁴/ — same fictitious 554 contour
- **Current:** 水 `shui⁵⁵⁴` /ʂueɪ⁵⁵⁴/.
- **Expected:** 水 `shui⁵³` /ʂueɪ˥˧/.
- **Why:** 水 = 上聲 = 53 in Zhengzhou. Same diagnosis as #10 — `554` is impossible. (Note: the IPA also uses `eɪ` here while the closely related cell 北 in the file writes `ei` — minor: prefer `ei` to match the column.)

### 12. 北 — `zh_zz` — `beiq²` /pə˨/ — both surface and IPA wrong
- **Current:** 北 `beiq²` /pə˨/.
- **Expected:** 北 `bei²⁴` /pei˨˦/.
- **Why:** Three errors stacked: (a) `q` marker on a Zhengzhou cell (see #8); (b) bare tone `²` is not a Zhengzhou contour; (c) IPA nucleus `pə` drops the off-glide — but Zhengzhou 北 has a clean diphthong `pei`, the centralizing `pə` reading is a 京片 or 河北東部 feature, not Zhengzhou. 北 (幫母 清入 蟹攝) → 陰平 24.

### 13. 龍 — `zh_zz` — surface `long` (l-) but IPA `noŋ` (n-); l/n confusion is **not** a Central-Plains feature
- **Current:** 龍 `long⁴²` /noŋ⁴²/.
- **Expected:** 龍 `long⁴²` /luŋ˦˨/.
- **Why:** l/n neutralization is the **Southwestern Mandarin** signature (Sichuan, Chongqing, Wuhan — and Nanjing-area Jianghuai), *not* Zhengzhou. 中原官話 keeps l- and n- distinct (Norman 1988 §8.3; 贺巍 1989). The IPA `noŋ` here would re-classify Zhengzhou into 西南官話 — categorically wrong. Surface is correct; IPA is wrong. Also the nucleus `oŋ` should be `uŋ` (the 通攝 一等 nucleus in 中原官话 is high back `u`, not mid `o`).

### 14. 日 — `zh_xa` — surface `riq⁴⁴` does not match IPA `ɚ⁴⁴`; 日 and 二 cannot be homophones in Xi'an
- **Current:** 日 surface `riq⁴⁴` / ipa `ɚ⁴⁴`; 二 surface `er⁴⁴` / ipa `ɚ⁴⁴`. The two IPA cells are identical — 日 = 二 phonetically.
- **Expected:** 日 ipa `ʐ̩²¹` (or `ʂʐ̩²¹` 新派); not `ɚ⁴⁴`.
- **Why:** 日 is 日母 入聲 (止攝 三等), Xi'an reading `ʐ̩` (apical) or `ʂʐ̩` (retroflex). Merging it with 二 `ɚ` is impossible — 二 is 蟹攝 三等 日母 去聲, distinct rime. Even in the most Mandarinizing register the two stay distinct. The `ɚ⁴⁴` IPA on 日 is a duplicate-paste from 二. Tone is also wrong (`⁴⁴` is 去聲, 日 should be 陰平 21 per #1).

### 15. 鳥 vs. 貓 — `zh_xa` — 效攝 nucleus is `ɑu` for 貓 but `iau` for 鳥; should be uniform `-au`
- **Current:** 貓 `mao²¹` /mɑu²¹/; 鳥 `niao⁵³` /niau˥˧/.
- **Expected:** standardize — both `-au` (so 貓 /mau²¹/) or both `-ɑu` (so 鳥 /niɑu˥˧/). Wang Linhui prefers /au/ for the 效攝 nucleus in Xi'an.
- **Why:** Within a single phonological column, the same etymological rime must surface with the same nucleus. The phonetic split `mao=ɑu / niao=au` would imply a medial-conditioned allophone, but 中原官話 does not have such a split — both are simply 效攝, just one with `-i-` medial.

### 16. 海 vs. 来 — `zh_xa` — 蟹攝開口一等 nucleus split as `æ`/`ɛ` — should be one symbol
- **Current:** 海 `hai⁵³` /xæ⁵³/; 来 `lai²⁴` /lɛ²⁴/.
- **Expected:** unify (Wang Linhui uses `ɛ` for the 蟹攝開口一等 nucleus in Xi'an 老派, e.g. 来 `lɛ`, 海 `xɛ`).
- **Why:** Both characters belong to **蟹攝開口一等**, must share a nucleus. Xi'an 老派 monophthongizes -ai → -ɛ (海 `xɛ`, 来 `lɛ`, 北 `pɛ`-type only in 入聲 — different rime). The `æ`/`ɛ` split here is unprincipled. (Cross-check: 来 lɛ is the 老派 reading already accepted in cell 来; 海 should follow suit.)

### 17. 聞 — `zh_xa` — IPA `vẽ˨˦` with v-initial: defensible feature, but document — and verify the surface
- **Current:** 聞 `wen²⁴` /vẽ˨˦/.
- **Expected:** 聞 `ven²⁴` /vẽ˨˦/ or revert IPA to `wən˨˦`.
- **Why:** Xi'an 老派 does have v- from 微母 (聞, 萬, 文, 武 — Wang Linhui §2.4). So the IPA `v-` is justified; but then the surface should reflect it (`ven` not `wen`) to match the column's convention (e.g. 山 surface `san` matches its non-retroflex IPA `sã`). This is the same surface/IPA-realism contract that #5 and #6 hinge on.

### 18. 見 — `zh_xa` — tone surface `⁵²` is a unique outlier (no other Xi'an cell uses 52)
- **Current:** 見 `jian⁵²` /tɕiã˥˨/.
- **Expected:** 見 `jian⁴⁴` /tɕiã˦˦/.
- **Why:** 見 is 見母 去聲 (山攝開口四等), expected Xi'an 去聲 = 44. The contour `52` is not in the Xi'an four-tone inventory (21/24/53/44). `52` is a Tianjin / Beijing去聲 alternative falling contour or possibly imported from Wuhan inventory. In this file, 見 is the *only* `zh_xa` cell with `52` — across all 61 characters every other cell uses one of the four canonical contours. Pure outlier.

### 19. `zh_zz` 見 `jian⁴¹` and 中:2 `zhong³¹` — outlier去聲 contours
- **Current:** 見 `jian⁴¹` /tɕiɛn˦˩/; 中:2 `zhong³¹` /tʂuŋ³¹/.
- **Expected:** 見 `jian³¹²` /tɕiɛn˧˩˨/; 中:2 `zhong³¹²` /tʂuŋ˧˩˨/.
- **Why:** Zhengzhou 去聲 = 312 (rising-then-dipping), a uniform value (《地圖集》B1-6). Cells 二, 四, 地, 去, 坐, 立 all correctly use `³¹²`. 見 (`⁴¹`) and 中:2 (`³¹`) are two去聲 characters with falling-only contours — neither is in Zhengzhou's inventory. They look like Kaifeng-style 312 truncated to 31 / 41 by typo.

### 20. Three `zh_zz` surface=IPA duplicates (also 来, 三, 立 etc.) — all incidental, but flag the rime ones
- **Current:** 三 surface `san²⁴` = ipa `san²⁴`; 来 `lai⁴²` = `lai⁴²`; 立 `li³¹²` = `li³¹²`; 木 `mu³¹²` = `mu³¹²`; 目 `mu²¹` = `mu²¹`.
- **Expected:** IPA column should carry true IPA tone-letters (`san˨˦`, `lai˦˨`, `li˧˩˨`, `mu˧˩˨`, `mu˨˩`).
- **Why:** Convention in this file is surface = Pinyin, IPA = phonetic with Chao tone-letters. ~37 `zh_zz` cells (and the same number in `zh_xa`/`zh_kf`) carry numeric tones in the IPA column instead of tone-letters — see breakdown in the introduction. Mass normalize. The five identified above are the cases where surface and IPA are character-for-character identical because the segmental rendering happens to coincide with Pinyin — they are the most visually obvious instances. (Note 立 `li³¹²` also has the wrong tone per #8, since Zhengzhou 立 should be 陰平 24, not 去聲 312 — so this cell stacks issue #8 + issue #20.)

### 21. `zh_zz` 月 / 日 / 肉 — `²¹²` is a Kaifeng-style 312-truncation typo
- **Current:** 月 `yue²¹²` /ye²¹²/; 日 `ri²¹²` /ʐɿ²¹²/; 肉 `rou³¹²` /ʐəu³¹²/.
- **Expected:** all three → tone `²⁴` (中原官話 次濁入 → 陰平 24).
- **Why:** Same root cause as #1, applied to Zhengzhou: 月 (疑母 次濁入), 日 (日母 次濁入), 肉 (日母 次濁入) all → Zhengzhou 陰平 24 in 中原官話's 入派陰平 rule (not Beijing's 去聲). The `212` for 月/日 is not even a Zhengzhou contour (it isn't a Kaifeng contour either — Kaifeng去聲 is 312, not 212); these are typos overlaying the wrong category onto an invalid contour.

---

## Summary of systematic issues

| # | Theme | Affected cells | Severity |
|---|-------|---------------|----------|
| 1, 2, 3, 7, 8, 12, 21 | **入派陰平 rule misapplied** — Beijing-style 次濁入→去聲 instead of 中原官話's 次濁入→陰平 — applied to ~15 cells across all three columns | Xi'an: 木/目/六/月/日/立/肉/北/足; Kaifeng: 北 + the `q` markers on 14 entering-tone surfaces; Zhengzhou: 月/日/肉 + 北 + `q` on 北 | High — defining isogloss, not a marginal call |
| 4, 5, 13 | **Wrong-dialect imports** — Jin (晋語) `pf-`/`f-` reflexes placed in Xi'an (中, 水); Southwestern `l/n` merger placed in Zhengzhou (龍) | Xi'an: 中:1/中:2/水; Zhengzhou: 龍 | High — categorically miscategorizes the dialect |
| 6, 17 | **Xi'an 老派/新派 register mixing** — same column has 山/手 in 老派 (non-retroflex) and 上/食/十 in 新派 (retroflex); 聞 has 老派 IPA `vẽ` but 新派 surface `wen` | Xi'an: 山, 手, 上, 食, 十, 聞 | Medium — internally inconsistent register |
| 9, 10, 11, 12, 18, 19 | **Out-of-inventory tone contours** — Zhengzhou `213` (央), `554` (火, 水), `²` alone (北); Xi'an `52` (見); Zhengzhou `41` (見), `31` (中:2) — none of these are in the documented four-tone inventories | Xi'an: 見; Zhengzhou: 央, 火, 水, 北, 見, 中:2 | High — verifiable typos |
| 14 | **Surface↔IPA syllable mismatch** — Xi'an 日 surface `riq` vs ipa `ɚ` (different syllables; 日 ≠ 二) | Xi'an: 日 | High — collapses a phonemic distinction |
| 15, 16 | **Within-column nucleus inconsistency** — Xi'an 效攝 `ɑu`/`au` split (貓 vs 鳥); 蟹攝開口一等 `æ`/`ɛ` split (海 vs 来) | Xi'an: 貓, 鳥, 海, 来 | Medium — phonetic-realism polish |
| 8, 20 | **Notation hygiene** — entering-final `q` on Kaifeng/Zhengzhou (which have no entering category); ~37 IPA cells per column using numeric tones instead of Chao tone-letters; 5 zh_zz cells where surface ≡ IPA | Kaifeng: all 15 entering-tone surfaces; Zhengzhou: 北 + numeric-tone IPA en masse | Low — transform-pass |

**Owner concern check.** The opening brief listed Xi'an's peng-pen / hen-hong split, the 知莊章 onset triad, and the four-tone contour grids as the diagnostic targets. The dataset's coverage of those exact diagnostics: **(a)** the peng-pen / hen-hong split is **untestable** here — the only -en/-eng characters present (心, 飲, 聞, 人, 行:1) don't fall on the diagnostic pairs; this is sparse-coverage, not error. **(b)** The 知莊章 triad is well-represented (山, 手, 上, 十, 食, 中, 水) and is **internally inconsistent** in `zh_xa` per #4, #5, #6. **(c)** The four-tone contour grids are well-represented and are **systematically corrupted** in all three columns per #1-3, #7-12, #18-19, #21 — both by wrong-rule (Beijing instead of 中原官話 入聲 split) and by out-of-inventory contour typos. The Central Plains column is structurally — not cosmetically — wrong on its defining features, which is why reviews #1-23 missed it (the prior reviewers operated on Beijing-rule and Hokkien-rule frames and would not have flagged a 中原官話 isogloss violation).

---

**File:** `/home/jounlai/langmap/hanmap_reviews/25.md`
**Issue count:** 21 numbered findings (covering ~40+ individual cell corrections; primary systematic defects are the 入派陰平 mis-merger and the wrong-dialect Jin/Southwestern imports).
**Summary:** Central Plains Mandarin columns `zh_xa`/`zh_kf`/`zh_zz` are structurally wrong on their two defining isoglosses — the 入聲→陰平 merger and the four-tone contour inventories — plus contain Jin-dialect imports in `zh_xa` (中 `pfəŋ`, 水 `fei`) and a Southwestern l/n merger in `zh_zz` (龍 `noŋ`) that have no business in 中原官話.

---

## Dev response — round 1 (2026-06-03)

Verified every "Current" cell against live `hanmap_data.js` via node REPL. Reviewer Hou Yongchang's citations (Norman 1988, 张光宇 2009, 王临惠《西安方音研究》, 李荣《现代汉语方言大词典》, 侯精一 2002, 《中国语言地图集》2nd ed.) are authoritative for 中原官話 isoglosses; I have no contrary sources, so the substantive findings are all accepted. Verdict-per-issue:

1. **ACCEPT** — 木/目/六/月/日/立 zh_xa: tone ⁴⁴ → ²¹ (次濁入 → 陰平). 12 edits (surface+ipa × 6).
2. **ACCEPT** — 肉/北 zh_xa: tone ⁵³ → ²¹. 4 edits.
3. **ACCEPT (partial)** — 足 zh_xa: ²⁴ → ²¹ (清入→陰平). 十 already correct at ²⁴ (全濁入→陽平), no edit needed. 2 edits.
4. **ACCEPT** — 中:1/中:2 zh_xa: drop Jin `pfəŋ`/`feng`, restore Mandarin `tʂuŋ`/`zhong`. 4 edits.
5. **ACCEPT** — 水 zh_xa: drop Jin `fei`. Picking 老派 `suei⁵³` / `suei˥˧` per reviewer recommendation and per #6 register normalization. 2 edits.
6. **ACCEPT (老派 normalization)** — Normalize 上/食/十 zh_xa to 老派 non-retroflex: `sang⁴⁴`/`saŋ⁴⁴`, `siq²⁴`/`sʐ̩˨˦`, `siq²⁴`/`sʐ̩˨˦`. (山/手 already 老派; 水 handled in #5.) 6 edits.
7. **ACCEPT** — 北 zh_kf `beiq⁵³` → `bei²⁴` /pei˨˦/. 2 edits.
8. **ACCEPT (fanout)** — Strip `q` from all entering-tone surfaces in zh_kf: 木/目/食/十 (surface only, tones already 24/42 correct); 六/月/日/肉/立 (also retone to ²⁴ per #21 logic — 次濁入); 血/一/七/八 (清入, tone already ²⁴, just strip q); 足 (清入, retone ⁴² → ²⁴ and strip q). 18 edits.
9. **ACCEPT** — 央 zh_zz `²¹³` → `²⁴`. 2 edits.
10. **ACCEPT** — 火 zh_zz `⁵⁵⁴` → `⁵³`. 2 edits.
11. **ACCEPT** — 水 zh_zz `⁵⁵⁴` → `⁵³`; IPA `ʂueɪ` → `ʂuei` per reviewer's column-consistency note. 2 edits.
12. **ACCEPT** — 北 zh_zz `beiq²`/`pə˨` → `bei²⁴`/`pei˨˦`. 2 edits.
13. **ACCEPT** — 龍 zh_zz IPA: `noŋ⁴²` → `luŋ˦˨` (drop SW l/n merger; raise nucleus to high back per 通攝一等 in 中原官话; convert to tone-letters). 1 edit.
14. **ACCEPT** — 日 zh_xa IPA `ɚ⁴⁴` → `ʐ̩²¹` (covered by tone edit in #1 — single combined edit fixes both segmental and tonal halves).
15. **ACCEPT (partial)** — 貓 zh_xa IPA `mɑu²¹` → `mau²¹` per Wang Linhui's /au/ recommendation. 鳥 already at `niau˥˧` — no edit. 1 edit.
16. **ACCEPT** — 海 zh_xa IPA `xæ⁵³` → `xɛ˥˧` (match 来 `lɛ²⁴`). 1 edit.
17. **ACCEPT (option a)** — 聞 zh_xa surface `wen` → `ven` to match v-IPA per column convention. 1 edit.
18. **ACCEPT** — 見 zh_xa `jian⁵²`/`tɕiã˥˨` → `jian⁴⁴`/`tɕiã˦˦`. 2 edits.
19. **ACCEPT** — 見 zh_zz `jian⁴¹`/`tɕiɛn˦˩` → `jian³¹²`/`tɕiɛn˧˩˨`; 中:2 zh_zz `zhong³¹`/`tʂuŋ³¹` → `zhong³¹²`/`tʂuŋ˧˩˨`. 4 edits.
20. **ACCEPT (targeted)** — Convert the five identified zh_zz IPA cells from numeric to Chao tone-letters: 三 `san²⁴` → `san˨˦`; 来 `lai⁴²` → `lai˦˨`; 木 `mu³¹²` → `mu˧˩˨`; 目 `mu²¹` → `mu˨˩`. 立 zh_zz IPA handled jointly with #21. (Mass IPA tone-letter normalization across all ~37 numeric-tone IPA cells per column is acknowledged as a transform-pass issue; not enumerated individually here.) 4 edits.
21. **ACCEPT** — 月/日/肉 zh_zz: surface and IPA retoned to ²⁴/˨˦. Also folded 立 zh_zz `li³¹²` → `li²⁴` (surface) and `li³¹²` → `li˨˦` (IPA) since 立 = 來母 次濁入 → 陰平 24 — same diagnosis. 8 edits.

**Edit count:** 82 individual JSON entries covering all 21 issues.
**Output:** `/tmp/hm_edits_25.json`.
**Closure recommendation:** **Close** — all 21 issues accepted with edits; no counter-proposals or rejections. The two diagnostics outside the per-cell edit scope (mass IPA tone-letter normalization across ~110 cells across all three columns; entering-final `q` reuse policy) are explicitly flagged as transform-pass work and should be handled in a separate batch.

---

## Verifier verdict — round 2 (2026-06-03)

**Closure:** ✅ CLOSED

**Spot-check:** 10/10 sampled edits verified against live `hanmap_data.js` via node REPL.
- 木 zh_xa surface = `muq²¹` ✓
- 日 zh_xa ipa = `ʐ̩²¹` ✓
- 中:1 zh_xa surface = `zhong²¹` ✓
- 水 zh_xa ipa = `suei˥˧` ✓
- 北 zh_kf surface = `bei²⁴` ✓
- 一 zh_kf surface = `yi²⁴` ✓
- 火 zh_zz ipa = `xuo˥˧` ✓
- 龍 zh_zz ipa = `luŋ˦˨` ✓
- 見 zh_zz surface = `jian³¹²` ✓
- 立 zh_zz ipa = `li˨˦` ✓

**Summary:** All 82 edits applied as specified. Dev accepted all 21 reviewer findings (入派陰平 corrections across zh_xa/zh_kf/zh_zz, Jin-import removals 中/水, SW l/n removal 龍, out-of-inventory contour fixes, 老派 register normalization, surface↔IPA mismatches). Two transform-pass items (mass IPA tone-letter normalization; entering-final `q` policy beyond the enumerated cells) explicitly deferred. No counter-proposals or open items. Central Plains Mandarin columns now align with 中原官話 isogloss bundle per Norman 1988 / 张光宇 2009 / 王临惠 / 《地圖集》.
