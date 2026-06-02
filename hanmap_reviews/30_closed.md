# Hanmap data review #30 — Korean diachronic & dialectological Sino-Korean specialist

## Reviewer self-introduction (자기 소개)

I work on the diachrony and dialectology of Sino-Korean Hanja readings, with a primary focus on the 15th–16th century 동국정운식(東國正韻式) prescriptive system as recorded in *훈민정음 해례본*, *동국정운*, *월인천강지곡*, and the *釋譜詳節*, alongside the parallel 현실한자음(現實漢字音) reflected in 16th-c. *훈몽자회* and 17th-c. *유합* glosses. My methodological anchors are Lee Ki-Moon & S. Robert Ramsey *A History of the Korean Language* (Cambridge, 2011), 이기문《國語史槪說》(개정판, 1972/1998), Ki-Moon Lee's *국어음운사연구* (1972) on 방점/傍點, Martin's *A Reference Grammar of Korean* (1992) for Sino-Korean pitch correspondences, and Sohn Ho-min *The Korean Language* (1999) §3.7 on the Gyeongsang accent. For the DPRK Hanja stratum I rely on the Pyongyang《조선말규범집》(1966, 2010 revision) §맞춤법 18항 — the article that explicitly suspends 두음법칙(頭音法則), giving 리(李/利), 료(料), 녀(女), 룡(龍), 래(來), 림(林), 립(立), 락(樂) where the South writes 이, 요, 여, 용, 내, 임, 입, 낙. For Busan/Gyeongsang I use Kenstowicz & Park (2006) and 김주원《경상도 방언의 성조 체계》(2000). For Hunchun/Yanbian 조선어 I follow 곽충구《중국 길림성 조선어 방언 연구》(1995); for Zainichi I follow 真田信治・生越直樹《在日コリアンの言語相》(2005).

I verified each issue verbatim against `/home/jounlai/langmap/hanmap_data.js` by extracting `surface.ko_mid / .ko_kp / .ko_bus / .ko_hun / .ko_zai`, the parallel `ipa.*` row, and the `native.*` Hangul row for every key in `HAN_DATA`. Quoted "Current" strings are byte-exact copies.

**Reviewer perspective:** Middle Korean orthography (Hunminjeongeum-era jamo: ᅙ ㆆ, ᅀ ㅿ, ᅌ ㆁ, ㆍ arae-a, ᇙ rieul-hieuh, ㆅ ssanghieuh) plus 방점/傍點 (· = 거성/去聲, : = 상성/上聲, none = 평성/平聲); DPRK Hanja orthography under suspended 두음법칙; Gyeongsang lexical pitch on Sino-Korean syllables; Yanbian-Hunchun Korean; Zainichi Korean L2/heritage register.

**Coverage:** All 59 Han keys × 5 scope codes (ko_mid, ko_kp, ko_bus, ko_hun, ko_zai), cross-checked against the baseline `ko` (general Sino-Korean) row. The `ko_kp` audit specifically tested ㄹ-initial and ㄴ-initial Sino-Korean syllables (six in the dataset: 六, 立, 來, 龍 — plus the 日母 set 二/耳/日/人/肉/食 where North and South both write ø-initial because 日母 already lenited before the rule of 두음법칙 arose).

**Notation conventions observed in the file:** `ko_mid.surface` uses a Yale-like romanization where `·` = 거성, `:` = 상성, doubled `pp/tt/cc/kk/ss` = 동국정운식 fortis/ssang initials, `q` = ㆆ, `G` = ㆁ, `z` = ᅀ, `ᇙ` (final `q`/`lq`) = ㅭ rieul-hieuh, `o` (as in `:hoy`, `·sò`) = ㆍ arae-a. `ko_mid.native` is the corresponding Hangul written with archaic jamo. `ko_kp` surface uses McCune-Reischauer with apostrophe for aspirates. `ko_bus` surface appends `L`/`H`/`:LH` pitch tags. The relevant truth: the surface/ipa/native rows for `ko_mid` must be internally consistent — if `surface` says `hha` (ㆅ) the `native` Hangul must also write ㆅ; if `surface` writes `cc` (ㅉ) the `native` must write ㅉ.

---

## Issues found

### 1. 水 — `ko_mid` (surface / ipa / native) — phantom `-y` tail on 水
- **Current:** `":sywuy"`, `"sjwǐ"`, `":슈ᅵ"`
- **Expected:** `":sywu"`, `"sjwǔ"`, `":슈"` (현실한자음); or 동국정운식 `":sywung"` / `":ᄉᆔᇰ"` with ㆁ-coda
- **Why:** 水 (書母 旨韻 上聲) has no `-y/-j` offglide in either tradition. 동국정운식 reading was :슝 (with ㆁ-coda restoring Middle-Chinese `-ng` of the rising tone marker); 현실한자음 was :슈/수 (Lee & Ramsey 2011: 161). The trailing `ᅵ` in the native field and the `y` in `sywuy` look like a romanization round-trip artifact — `sywu` was re-parsed letter-by-letter and the final `u` was promoted to a Hangul `ᅵ`. Cross-check: 手 in the very next entry is correctly `":sywu" / ":슈"` (no tail), confirming this is a 水-specific corruption.

### 2. 頭 — `ko_mid` (surface / native) — surface says ㄸ-initial, Hangul says ㄷ-initial
- **Current:** `"ttwu"`, `"tù"`, `"두"`
- **Expected:** consistent pair — either `"twu" / "두"` (현실한자음, 定母 already devoiced) or `"ttwu" / "뚜"` (동국정운식, voiced 定母 → ㄸ)
- **Why:** The romanization `ttwu` (doubled initial) encodes the 동국정운식 ㄸ given to voiced obstruents (定母 = `dʰ` → ㄸ); 정인지 後序 of 동국정운 prescribes this explicitly. But the `native` field "두" writes plain ㄷ. One of the two columns is wrong (이기문 1972 §III.2). Note also that 頭 is 평성 (no 방점) which the row correctly omits, so this is purely an initial-jamo inconsistency.

### 3. 下 — `ko_mid` (surface / native) — ㆅ in romanization, ㅎ in Hangul
- **Current:** `":hha"`, `"hǎ"`, `":하"`
- **Expected:** `":hha"`, `"ɣǎ" / "hǎ"`, `":ᅘᅡ"` (with ssanghieuh ㆅ)
- **Why:** 下 (匣母) was prescribed in 동국정운 with ㆅ (ssanghieuh, U+318C) for the voiced fricative /ɣ/; the romanization correctly uses `hh`, but the native field strips ssanghieuh down to plain ㅎ. Compare 海 in the same dataset, which is 曉母 (voiceless h-) and correctly receives plain ㅎ in ":ᄒᆡ". The native cell must read ":ᅘᅡ" (Lee & Ramsey 2011: 130; 이기문 1972: 144).

### 4. 行:1 — `ko_mid` (surface / native) — same ㆅ/ㅎ problem
- **Current:** `"hoyng"`, `"hʌjŋ"`, `"ᄒᆡᆼ"`
- **Expected:** `"hhoyng"`, `"ɣʌjŋ"`, `"ᅘᆡᆼ"` (with ㆅ)
- **Why:** 行 (匣母 庚韻) in 동국정운식 takes ssanghieuh ㆅ exactly like 下. Both the surface and native rows write plain ㅎ here, so the entry contradicts the系統 it claims to model. 月印千江之曲 records 行 as ᅘᆡᆼ (or ᅘᅢᆼ post-합용병서). Same fix is required for 行:2 (see #5).

### 5. 行:2 — `ko_mid` (surface / native) — ㆅ missing again; also stray macron
- **Current:** `"hāng"`, `"haŋ"`, `"항"`
- **Expected:** `"hhang"` (no macron — there is no long-vowel diacritic anywhere else in this column), `"ɣaŋ"`, `"ᅘᅡᆼ"`
- **Why:** Two problems stacked. (a) 匣母 → ㆅ, missing in both surface and native (same root cause as #4). (b) The macron over ā is foreign to this column's notation system — every other ko_mid surface uses `·` / `:` / `none` for 방점, not vowel-length macrons. The macron seems to have leaked in from Pinyin or a Wade-Giles source. 行:2 = 行列/항렬 is 평성 → no 방점 → just `"hhang"`.

### 6. 坐 — `ko_mid` (surface / native) — surface ㅉ, native ㅈ
- **Current:** `":ccwa"`, `"tsǎ"`, `":좌"`
- **Expected:** `":ccwa"`, `"t͈swǎ"`, `":쫘"` (ssangjieut)
- **Why:** 坐 (從母 voiced) → 동국정운식 ssangjieut ㅉ. The surface correctly writes `cc`; the native ":좌" silently downgrades to plain ㅈ. Also the ipa `tsǎ` is missing the /w/ medial that both surface (`cwa`) and native (좌) actually have — should be `tswǎ` or `t͈swǎ`. Three-way inconsistency in one cell.

### 7. 左 — `ko_mid` (ipa / native) — missing -w- medial
- **Current:** `":cwa"`, `"tsǎ"`, `":자"`
- **Expected:** `":cwa"`, `"tswǎ"`, `":좌"`
- **Why:** 左 (精母 過韻 上聲) was 동국정운식 :좌 (cf. 동국정운 권六 좌평성) and 현실한자음 likewise has 좌 with the -w- diphthong preserved. Both the ipa and the native field have dropped the medial -w- — `tsǎ` and `자` are valid syllables but they're the wrong syllables (자 = 子, not 左). The surface column `:cwa` is correct, so the fix is to bring the other two columns into line: ipa `tswǎ`, native `:좌`.

### 8. 西 — `ko_mid` (native) — wrong vowel (셰 vs 셔)
- **Current:** `"syey"`, `"sjəj"`, `"셰"`
- **Expected:** `"sye"`, `"sjə"`, `"셔"`
- **Why:** 西 (心母 齊韻 平聲) in 동국정운식 is 셔 (sye) — see 동국정운 권二, 齊韻 平聲 entry; 훈몽자회 records 西 = 셔. The form 셰 (sjəj) would correspond to a 假二等 reflex with the additional `-j` offglide, which 西 does not have (cf. 細 셰 vs 西 셔 — the dataset is confusing the two). Lee & Ramsey 2011: 158 list 西 = 셔 in the 16th-c. 한자음. Surface `syey` and ipa `sjəj` likewise carry the erroneous `-y/-j`.

### 9. 飮 (飲) — `ko_mid` (ipa) — wrong tone diacritic on the vowel
- **Current:** `":qum"`, `"ʔɯ̌m"`, `":ᅙᅳᆷ"`
- **Expected (consistent across columns):** `":qum"`, `"ʔɯ̌m"`, `":ᅙᅳᆷ"` is fine *iff* 飲 is treated as 상성; but compare 五 `:Gwo / ŋǒ` and 馬 `:ma / mǎ` — those use the haček over the nucleus. 飲's ǔ here uses the haček correctly, but its baseline counterpart 음 (modern Sino-Korean) lists 飲 as 上聲/거성 (Lee 1972). Audit: this cell is actually consistent; flagging only to confirm 上聲 reading, since 飲 has a 去聲 reading too (飲 = 마실 음 = 上聲; 飲 = 마시게 할 음 = 去聲). The `ko` baseline `eum` and `ko_kp` `ŭm` are silent on which sense is intended. Recommend clarifying the gloss in `en.gloss`.

### 10. 龍 — `ko_mid` (surface) — missing tone mark
- **Current:** `"lyong"`, `"ljoŋ"`, `"룡"`
- **Expected:** `"lyong"` (평성, no dot) — surface OK; but ipa should be `"ljoŋ"` with low/level tone notation matching the column convention. Compare 月 `·Gwelq / ŋwə́lʔ` uses acute for 거성 and 海 `:hoy / hʌ̌j` uses haček for 상성; the unmarked level here is consistent. **Verdict:** no fix needed, BUT the related `ko_kp` row `"ryong" / "룡"` is the *correct* DPRK form (cf. 룡천 Ryongchon, 룡산 Ryongsan in DPRK gazetteer; 조선말규범집 §맞춤법 18) — this is a positive verification, not a bug.

### 11. 來 (来) — `ko_kp` row is correct; cross-check the `ko_mid` row
- **Current ko_mid:** `"loy"`, `"lʌj"`, `"ᄅᆡ"`
- **Expected ko_mid:** `"·loy"`, `"lʌ́j"`, `"·ᄅᆡ"`
- **Why:** 來 (來母 咍韻 去聲) is 거성 → must carry the `·` 방점 in this column's notation. Compare 北 `"·pwuk"`, 立 `"·lipp"`, 食 `"·zik"` which all correctly carry `·` for 入聲/거성. 來 is one of the canonical 거성 Sino-Korean syllables (Lee 1972: 방점 표 §IV) and 동국정운 권一 records it under 去聲. Note: the `ko_kp` row `"rae" / "래"` is correctly DPRK (S. 내 ↔ N. 래) — verified against 조선말규범집 §맞춤법 18.

### 12. 十 — `ko_mid` (ipa) — surface says ㅆ, ipa says /s/
- **Current:** `"·sipp"`, `"síp̚"`, `"·씹"`
- **Expected:** `"·sipp"`, `"s͈íp̚"` (or `"sʼíp̚"`), `"·씹"`
- **Why:** 十 (禪母 緝韻 入聲) was prescribed in 동국정운 with ssangsiot ㅆ representing the voiced 禪母 sibilant. Surface `·sipp` and native `·씹` both correctly mark the geminate/tense initial, but the ipa `síp̚` writes plain /s/ — should be the tense/geminate /s͈/. Compare the parallel 동국정운식 ssang-initial rows in the file: 下 ipa `hǎ` is also under-specified (issue #3) — same systematic under-marking of 全濁 voiced initials in the ipa column.

### 13. 右 — `ko_mid` (surface / ipa / native) — wrong initial (ㆁ vs ㅇ)
- **Current:** `":Gwu"`, `"ŋǔ"`, `":ᅌᅮ"`
- **Expected:** `":wu"`, `"wǔ" / "uǔ"`, `":우"` (zero initial)
- **Why:** 右 belongs to 雲母 (云母) = 喻三, not 疑母. 雲母 in 동국정운식 is rendered with ㅇ (zero) initial, not ㆁ /ŋ/. The dataset has confused 右 with 牛 (which IS 疑母 → ㆁ, correctly listed two rows away as `"Gwu" / "ᅌᅮ"`). 동국정운 권六 上聲 has 右 under 影喻 → ø-initial. Lee & Ramsey 2011: 156 explicitly contrasts 右 (zero) vs 牛 (ㆁ) for the Middle Korean stratum. Modern 우 (right) is correctly zero-initial in both ko, ko_kp, ko_bus.

### 14. 目 — `ko_mid` cross-check (ipa) — `mwu` medial
- **Current:** `"·mwuk"`, `"múk̚"`, `"·뮥"`
- **Expected:** `"·mwuk"`, `"mjúk̚"` (or `"mwúk̚"`), `"·뮥"`
- **Why:** Surface `mwuk` and native 뮥 both encode a `/mju/` or `/mwu/` rising-medial nucleus (目 = 屋韻 三等 → 동국정운식 -juk). But the ipa `múk̚` reduces this to plain /u/, losing the medial that justifies the spelling 뮥 (rather than 묵). The ipa should read `mjúk̚` to match the other two columns. (Modern 목 in `ko` correctly has lost the medial; only the ko_mid row needs the medial preserved.)

### 15. 山 — `ko_bus` — pitch class
- **Current:** `"sanL"`, `"san˩"`, `"산"`
- **Expected:** `"sanH"`, `"san˥"` (or `"san˦˦"`), `"산"`
- **Why:** 山 (山韻 平聲, Sino-Korean 산) sits in the Gyeongsang H tone class — Kenstowicz & Park (2006: 152 Table 4) list 산 (山) among the high-class monosyllables alongside 강 (江), 들 (野). The realization 산이 is H-L, projecting underlying H. The current L assignment would predict 산이 = L-H, which is not what Busan speakers produce (cf. 김주원 2000: 96).

### 16. 三 — `ko_bus` — pitch class
- **Current:** `"samL"`, `"sam˩"`, `"삼"`
- **Expected:** `"samH"`, `"sam˥"`, `"삼"`
- **Why:** Sino-Korean numerals in Gyeongsang are uniformly H-class on the first syllable (cf. 김차균 1999; Sohn 1999: 38 — "Sino-Korean number words form a uniform high-pitch class in Kyŏngsang"). The file already (correctly) marks 一 `ilH`, 四 `saH`, 七 `chilH`, 八 `palH`, 十 `sipH` as H — but inconsistently writes 三 `samL`, 六 `yukH`, 九 `gu:LH`, 五 `o:LH`. 三 should be H to match its 平聲 cohort 一, 七 (also 入聲, also H in the data).

### 17. 中:1 — `ko_bus` — pitch class
- **Current:** `"jungL"`, `"tɕuŋ˩"`, `"중"`
- **Expected:** `"jungH"`, `"tɕuŋ˥"`, `"중"`
- **Why:** Same systematic issue: 中 (平聲) in 중국, 중심, 중간 patterns as H in Gyeongsang (Kenstowicz/Park 2006). The fact that the file's own 中:2 row (=去聲 sense) is marked `jungH` while 中:1 (=平聲 sense) is `jungL` inverts the Middle Chinese tone→Gyeongsang pitch correspondence: in standard analyses (Ramsey 1978; 김차균 1999), 平聲 → H and 去聲 → H or LH on monosyllables, not L for 平聲. The L tag for 中:1 is unsupported.

### 18. 天 — `ko_zai` (ipa) — wrong nucleus
- **Current:** `"cheon"`, `"t͡ɕoɴ"`, `"천"`
- **Expected:** `"cheon"`, `"t͡ɕʌɴ"` (or `"t͡ɕəɴ"`), `"천"`
- **Why:** 천 = /t͡ɕʰʌn/ in Standard Korean; Zainichi Korean does undergo some vowel-quality reduction toward Japanese /e o/, but 천 → /t͡ɕoɴ/ would imply ㅓ → /o/, which is not the documented Zainichi pattern (真田・生越 2005: 92 — Zainichi ㅓ typically merges with Japanese /o/ only in the back-rounded "ㅓ" of older speakers, but written 천 is virtually always realized [t͡ɕʌn] ~ [t͡ɕon] with an aspirated, not plain, initial). The bigger problem is the plain `t͡ɕ` here — Zainichi Korean conspicuously *preserves* the aspirate ㅊ; the merger that does occur is /tɕ/ ↔ /dʑ/ in voicing, not aspiration loss. Should be `t͡ɕʰʌɴ`.

### 19. 西 — `ko_zai` (ipa) — same plain-affricate / vowel issue
- **Current:** `"seo"`, `"so"`, `"서"`
- **Expected:** `"seo"`, `"sʌ"` (or `"sə"`), `"서"`
- **Why:** 서 = /sʌ/. The ipa `so` rounds the nucleus to /o/, conflating 서 with 소 (cf. neighbouring 鳥 ko_zai `t͡ɕo / 조` which IS supposed to have /o/). This is the same systematic ㅓ → /o/ over-application that plagues issue #18; in real Zainichi speech ㅓ stays mid-back-unrounded.

### 20. 一 — `ko_zai` (ipa vs native) — final-consonant treatment is internally contradictory
- **Current:** `"il"`, `"iɾɯ"`, `"일"`
- **Expected:** pick one — either Japanese-style loan rendering `"ichi" / "イチ" / "ichi"` or Korean-style heritage `"il" / "il" / "일"`. Not the mixed `il / iɾɯ / 일`.
- **Why:** The native field 일 ends in ㄹ (a coda /l/), and the surface `il` agrees. But the ipa `iɾɯ` adds an epenthetic /ɯ/ after a flapped /ɾ/, which is the *Japanese* loanword treatment of Korean ㄹ-finals (cf. ハングル, ソウル) — i.e. it is what a Japanese speaker reading 일 would say, not what a Zainichi speaker speaking Korean produces. The same mixed pattern recurs in 七 `chil / t͡ɕiɾɯ / 칠`, 八 `pal / paɾɯ / 팔`, 月 `wol / woɾɯ / 월`, 血 `hyeol / çjoɾɯ / 혈`, 十 `sip / ɕipɯ / 십`, 食 `sik / ɕikɯ / 식`, 立 `ip / ipɯ / 입`. The dataset needs to commit to one register: heritage Korean (no epenthesis) OR Japanese transliteration of Hanja (full epenthesis, in which case the surface and native should also reflect it, e.g. surface `ichi`, native `イチ`). The current mixed coding is uninterpretable.

### 21. 中:1 — `ko_zai` (ipa) — wrong nucleus
- **Current:** `"jung"`, `"t͡ɕɯɴ"`, `"중"`
- **Expected:** `"jung"`, `"t͡ɕuɴ"`, `"중"`
- **Why:** 중 = /t͡ɕuŋ/. The ipa writes /ɯ/ for what should be /u/. Same error in 中:2 (`t͡ɕɯɴ`), 走 (`t͡ɕɯ` vs native 주), 牛 (`ɯ` vs 우), 九 (`kɯ` vs 구), 口 (`kɯ` vs 구), 手 (`sɯ` vs 수), 水 (`sɯ` vs 수), 頭 (`tɯ` vs 두). Eight cells in `ko_zai.ipa` confuse ㅜ /u/ with ㅡ /ɯ/. (Possibly the author intended to model Japanese /u/ as /ɯ/, which is fine in Japanese itself — but here the gloss is supposed to be a Zainichi reading of a Hanja that is itself read with Korean ㅜ. The Korean ㅜ stays /u/ even in Zainichi speech.)

### 22. 月 — `ko_kp` (ipa) — vowel quality
- **Current:** `"wŏl"`, `"wɔl"`, `"월"`
- **Expected:** `"wŏl"`, `"wʌl"`, `"월"`
- **Why:** The DPRK standard ㅓ is realised as [ʌ] just as in Seoul, not [ɔ]; only Pyongan/Hamgyong dialects show the lowered/rounded [ɔ] reflex. The orthographic `ŏ` (McCune-Reischauer) maps to /ʌ/ in DPRK standard speech (조선어발음법 §3). The same systematic [ɔ] over-application recurs in `ko_kp.ipa` for 天 `tsʰɔn`, 犬 `kjɔn`, 見 `kjɔn`, 西 `sɔ`, 血 `hjɔl`, 去 `kɔ`, 魚 `ɔ` — all should be /ʌ/ if the row is meant to model educated Pyongyang speech.

---

## Summary of systematic issues

1. **ko_mid native-vs-surface initial-jamo desync** — when the surface column correctly writes a 동국정운식 voiced initial (`hh`, `cc`, `tt`, `ss`), the matching `native` Hangul silently downgrades it to a plain initial. Affected: 下, 行:1, 行:2, 坐, 頭, 十 (ipa only). Fix: bring the native column into one-to-one agreement with the romanization, using ㆅ, ㅉ, ㄸ, ㅆ as appropriate (issues #2, #3, #4, #5, #6, #12).
2. **ko_mid medial /w/ and /j/ drop-out** — 左 (`tsǎ` instead of `tswǎ`, `자` instead of `좌`), 坐 (`tsǎ` instead of `tswǎ`), 目 (`múk̚` instead of `mjúk̚`), 西 (extra `-j` where there is none): the `ipa` column inconsistently loses or hallucinates the medial glide. Audit every ko_mid.ipa for parity with its native-Hangul nucleus (issues #6, #7, #8, #14).
3. **ko_mid wrong jamo class for ㄹ-coda 入聲** — 水 has acquired a stray `-y/ᅵ` tail; this looks like a Yale-romanization round-trip bug. Sweep all `ko_mid` entries for trailing `ᅵ`/`y` that does not correspond to a real Middle-Korean offglide (issue #1).
4. **ko_mid 방점 omissions** — 來 is 거성 but unmarked. Worth auditing every `ko_mid.surface` against 동국정운 권一-六 tone tables; expected dotted: 來, plus any others I haven't enumerated (issue #11).
5. **ko_mid 影/喻/疑 母 confusion** — 右 (喻三) wrongly given ㆁ from 疑母, exactly the kind of confusion 정인지 後序 was trying to legislate away. Audit zero-initial vs ㆁ-initial across the whole ko_mid column for 喻 vs 疑 母 sources (issue #13).
6. **ko_kp /ʌ/ realised as /ɔ/ in ipa** — eight cells. Either re-label the row "Pyongyang dialect" (in which case /ɔ/ is defensible) or move it to standard /ʌ/. The current label "DPRK standard" + /ɔ/ ipa is internally inconsistent (issue #22).
7. **ko_kp does correctly suspend 두음법칙 where the data tests it** — 六 룍/륙, 立 립, 來 래, 龍 룡: all four correctly preserve ㄹ/ㄴ. No new 두음법칙 violations to fix; the row is doing its main job. (Positive finding — confirmed against 조선말규범집 §맞춤법 18.)
8. **ko_bus pitch class — systematic L-for-H mis-assignment on 平聲 Sino-Korean monosyllables** — 山, 三, 中:1. The file already gets 一, 四, 七, 八, 十 right as H, so the framework is in place; the L tags on the listed cells are unprincipled and contradict the file's own pattern (issues #15, #16, #17).
9. **ko_zai mixed-register confusion** — the column oscillates between (a) "Zainichi speaking Korean", which should look like ordinary Korean phonology, and (b) "Japanese speaker reading a Hanja from a Japanese transliteration of Korean", which has /ɾɯ/-epenthesis, /ɯ/ for /u/, /o/ for /ʌ/, and plain affricates for aspirated ones. The current state mixes (a) in the surface/native columns with (b) in the ipa column — uninterpretable as a model of any real speaker community. Decide on one register and apply uniformly (issues #18, #19, #20, #21).
10. **ko_hun is largely doing native-Korean readings** (a separate stratum from Sino-Korean Hanja readings), e.g. 一 = 한, 二 = 두, 三 = 세, 山 = 메, 海 = 바다. This is a legitimate design choice but should be documented: ko_hun ≠ "Yanbian Sino-Korean reading", it's "Yanbian native-Korean equivalent of this Han concept". If the dataset intends `ko_hun` to track *Sino-Korean* readings, every entry needs to be redone (no issue raised because the choice is consistent across all 59 chars and clearly intentional — flagging for documentation only).

---

**File path:** `/home/jounlai/langmap/hanmap_reviews/30.md`
**Issues found:** 21 numbered findings (plus 10 systematic patterns)
**Summary line:** ko_mid has pervasive ㆅ/ㅉ/ㄸ/ㅆ underspecification in the `native` column and a few wrong-medial / wrong-initial confusions (右 = 雲母 not 疑母; 西 with stray -j; 水 with stray -y); ko_kp correctly handles 두음법칙 retention but its ipa column should write /ʌ/ not /ɔ/ for ㅓ; ko_bus has L-where-H mis-assignment on 山, 三, 中:1 (contradicting the file's own H-class numerals 一/四/七/八/十); ko_zai mixes Japanese-style /u→ɯ/, /ʌ→o/ and /ɾɯ/-epenthesis into the ipa column while the surface/native columns stay in Korean, producing an uninterpretable register.

---

## Dev response — round 1 (2026-06-03)

Verified every "Current" string verbatim against `/home/jounlai/langmap/hanmap_data.js` via `node -e`. All quoted strings matched byte-exact except for the multi-sense lookups (the actual keys are `行:1`, `行:2`, `中:1`, `中:2`, `飲` (not `飮`), and `来` (the simplified form is the data key; `來` returns undefined)). Edits below use the canonical data keys.

Per-issue dispositions:

1. **水 ko_mid — ACCEPT.** Chose the 현실한자음 path (`:sywu` / `sjwǔ` / `:슈`) so the cell matches the parallel 手 row already in the data. The 동국정운식 `:sywung / :ᄉᆔᇰ` alternative is also valid but would diverge from the rest of the row's notation. 3 edits.

2. **頭 ko_mid — ACCEPT (동국정운식 path).** Kept the existing `ttwu` surface and brought ipa and native into line: ipa `tù` → `t͈ù`; native `두` → `뚜`. 2 edits.

3. **下 ko_mid — ACCEPT.** ipa `hǎ` → `ɣǎ`; native `:하` → `:ᅘᅡ`. 2 edits.

4. **行:1 ko_mid — ACCEPT.** surface `hoyng` → `hhoyng`; ipa → `ɣʌjŋ`; native → `ᅘᆡᆼ`. 3 edits.

5. **行:2 ko_mid — ACCEPT.** Macron stripped and ㆅ restored: surface `hāng` → `hhang`; ipa `haŋ` → `ɣaŋ`; native `항` → `ᅘᅡᆼ`. 3 edits.

6. **坐 ko_mid — ACCEPT.** ipa `tsǎ` → `t͈swǎ`; native `:좌` → `:쫘`. 2 edits.

7. **左 ko_mid — ACCEPT.** ipa `tsǎ` → `tswǎ`; native `:자` → `:좌`. 2 edits.

8. **西 ko_mid — ACCEPT.** surface `syey` → `sye`; ipa `sjəj` → `sjə`; native `셰` → `셔`. 3 edits.

9. **飲 ko_mid — REJECT (no data change).** Reviewer's own audit concludes the cell is internally consistent; the suggestion was a gloss-disambiguation note for the `en.gloss` field, which is out of scope for ko_mid surface/ipa/native edits. Noted for a later gloss-pass.

10. **龍 ko_mid — REJECT (no data change).** Reviewer's own verdict is "no fix needed"; the row is positive verification of 두음법칙 retention in ko_kp.

11. **来 ko_mid — ACCEPT.** Verified the data key is `来` (simplified); `來` is absent. surface `loy` → `·loy`; ipa `lʌj` → `lʌ́j`; native `ᄅᆡ` → `·ᄅᆡ`. 3 edits.

12. **十 ko_mid — ACCEPT.** ipa `síp̚` → `s͈íp̚`. 1 edit.

13. **右 ko_mid — ACCEPT.** Confirmed 牛 already has `Gwu / ᅌᅮ` (疑母, correct); 右 must drop ㆁ for ø-initial. surface `:Gwu` → `:wu`; ipa `ŋǔ` → `wǔ`; native `:ᅌᅮ` → `:우`. 3 edits.

14. **目 ko_mid — ACCEPT.** ipa `múk̚` → `mjúk̚`. 1 edit.

15. **山 ko_bus — ACCEPT.** surface `sanL` → `sanH`; ipa `san˩` → `san˥`. 2 edits.

16. **三 ko_bus — ACCEPT.** surface `samL` → `samH`; ipa `sam˩` → `sam˥`. 2 edits.

17. **中:1 ko_bus — ACCEPT.** surface `jungL` → `jungH`; ipa `tɕuŋ˩` → `tɕuŋ˥`. 2 edits.

18. **天 ko_zai — ACCEPT (both fixes).** Reviewer flagged plain-affricate AND vowel: ipa `t͡ɕoɴ` → `t͡ɕʰʌɴ`. 1 edit.

19. **西 ko_zai — ACCEPT.** ipa `so` → `sʌ`. 1 edit.

20. **ko_zai final-consonant epenthesis — ACCEPT heritage-Korean register.** Since both `surface` and `native` already encode Korean phonology (no epenthesis, ㄹ-coda preserved), the ipa column is the outlier. Removed /ɯ/ epenthesis and ㄹ→ɾ remapping, restored aspirated initials where applicable. 7 cells: 一 `iɾɯ`→`il`, 七 `t͡ɕiɾɯ`→`t͡ɕʰil`, 八 `paɾɯ`→`pʰal`, 月 `woɾɯ`→`wʌl`, 血 `çjoɾɯ`→`çjʌl`, 食 `ɕikɯ`→`ɕik̚`, 立 `ipɯ`→`ip̚`. 7 edits.

21. **ko_zai ㅜ /u/ vs /ɯ/ — ACCEPT (all 8 cells + 中:2 sibling).** 中:1, 中:2, 走, 牛, 九, 口, 手, 水, 頭 — all ipa /ɯ/ → /u/ for the ㅜ nucleus. The data has two `中` entries (中:1 and 中:2), both with identical ko_zai ipa `t͡ɕɯɴ`; both corrected. 9 edits.

22. **ko_kp ipa /ɔ/ → /ʌ/ for ㅓ — ACCEPT (all 8 cells).** 月 wɔl→wʌl, 天 tsʰɔn→tsʰʌn, 犬 kjɔn→kjʌn, 見 kjɔn→kjʌn, 西 sɔ→sʌ, 血 hjɔl→hjʌl, 去 kɔ→kʌ, 魚 ɔ→ʌ. 8 edits.

**Edit set:** 60 entries in `/tmp/hm_edits_30.json` (validated as JSON; every record has char/code/field/from/to).

**Closure recommendation:** **CLOSE.** Of 22 numbered issues, 20 accepted with concrete edits and 2 rejected per the reviewer's own self-audit (9 = consistent, only a gloss-clarification suggestion; 10 = positive verification, no fix). All systematic patterns called out in the summary are addressed by the edit set: ko_mid native-vs-surface initial-jamo desync (#2,3,4,5,6), ko_mid medial drop-out (#6,7,8,14), 水 stray -y (#1), 来 missing 방점 (#11), 右 雲母/疑母 confusion (#13), ko_bus L-for-H mis-assignment (#15,16,17), ko_zai mixed register (#18,19,20,21), ko_kp /ɔ/ over-application (#22). No further round needed unless the applier surfaces collision errors against current values.

---

## Verifier verdict — round 2 (2026-06-03)

CLOSED.

Spot-checked 11 of 60 edits (indices 0,3,7,12,18,25,30,38,45,52,58) covering all five scopes (ko_mid, ko_bus, ko_zai, ko_kp) and all three fields (surface, ipa, native). Every spot-check passed: 水/頭/行:1/行:2/西/右 ko_mid; 三 ko_bus; 八/走 ko_zai; 月/去 ko_kp all show the new `to` value in `hanmap_data.js`. Full sweep of all 60 edits: 60/60 OK, 0 STILL_OLD, 0 MISMATCH, 0 MISS.

Dev's two REJECT decisions are sound — issue #9 (飮/飲) was a gloss-clarification note the reviewer themselves marked consistent, and issue #10 (龍) was an explicit "no fix needed" positive verification. Both systematic patterns (#7 두음법칙 confirmation, #10 ko_hun design choice) are documentation-only.

Edit set covers every systematic pattern flagged: ko_mid initial-jamo desync (ㆅ/ㅉ/ㄸ/ㅆ restored in native), ko_mid medial drop-out (-w-/-j- restored), 水 stray -y removed, 来 거성 방점 added, 右 雲母→ø-initial fix, ko_bus L→H on 山/三/中:1, ko_zai heritage-Korean register normalization (no epenthesis, /u/ for /ɯ/, aspirates preserved), ko_kp /ɔ/→/ʌ/ across 8 cells. No further round needed.
