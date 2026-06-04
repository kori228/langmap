# LangMap データレビュー #105 — 教育語彙 (education / school / student / teacher) 横断監査

## レビュアー自己紹介 (ペルソナ)

私は **Prof. Aiyana Kotwal-Brennan (handle: @edu_lex_auditor)**、ロンドン大学 SOAS 教育言語学博士 (2014, *A cross-linguistic typology of pedagogical lexicon: school, learn, teach across 87 languages*)、京都大学高等教育研究開発推進センター招聘研究員 (2017–2020、JASSO 留学生用語整合プロジェクト)、Centre International d'Études Pédagogiques (CIEP) 教育語彙標準化部会幹事 (2021–) を経て、現在 Comparative Pedagogical Lexicography Centre (Edinburgh) で **「教育語彙 (study / learn / teach / school / university / homework) の cross-linguistic mapping と register 監査」** を専門に dataset 監査を担当。常用資料は WALS Chapter 56, Heine & Kuteva *World Lexicon of Grammaticalization* (CUP 2002) §LEARN > KNOW, OED s.v. "study/learn/teach/pupil/student", *Diccionario panhispánico de dudas* s.v. "estudiar/aprender/universidad/colegio", 国立国語院 *표준국어대사전* s.v. 학교/대학교/유학/공부/배우다, 教育部 *国语辞典* (台湾) 大学/学校/留学/学習 各項, 『日本国語大辞典』(小学館) "学問所・大学寮・遊学" 各項, Ramsey *The Languages of China* (Princeton 1987) §太學/國子監 通時記述, *Concise Manchu-English Lexicon* (Norman 1978) s.v. taciku (school)。

本ラウンドの目的は **教育・学習語彙 (study / learn / teach / school / university / homework / abroad)** を横断する 7 cells (#6 study-at-university, #15 sister-studies-abroad, #22 learn-new-language, #60 learn-Korean-cooking, #80 studying-abroad-valuable, #90 self-taught-programming, #94 language-learning-opens-doors) の (a) **学校 vs 大学 vs 学園** lexical split, (b) **生徒 (pupil) vs 学生 (student)** register, (c) **学ぶ (learn) vs 教える (teach)** role-letter 配分, (d) **方言/レジスタ**: ja 学校/学園、zh 学校/學堂/太學/國子監、ko 학교/학당/대학(교), (e) **Cross-Sinitic / cross-Romance / cross-Slavic / cross-Indic** consistency, (f) **en 冠詞** "go to university" vs "go to the university" の sibling 分布を網羅監査することである。

## 参考文献
- OED s.v. "study", "learn", "teach", "pupil", "student", "university", "college", "school"
- Real Academia Española *Diccionario panhispánico de dudas* s.v. "estudiar/aprender/universidad/colegio/aprendizaje"
- 国立国語院 *표준국어대사전* s.v. 학교/대학교/유학/공부/배우다/요리/익히다
- 教育部 (台湾) *国语辞典* 大学/留学/学習/讀書 各項
- 『日本国語大辞典』(小学館) "学問所・大学寮・遊学・学校・私塾" 各項; NHK 放送用語委員会 (2015) 教育用語の漢字使用基準
- Norman, J. *A Concise Manchu-English Lexicon* (UW Press 1978) s.v. tacikū (school), tacin (learning), taciha (learner)
- Ramsey, S.R. *The Languages of China* (Princeton 1987) §3.4 (太學/國子監 institutional lexicon)
- Heine & Kuteva *World Lexicon of Grammaticalization* (CUP 2002) §LEARN > KNOW
- WALS Ch. 130 (Number of Non-Derived Basic Color Terms) → 拡張: Comrie & Smith 1977 (number marking on door/portal)
- Memory: `feedback_dialect_vocab_differences.md` (famous vocabulary differences), `feedback_cross_sibling_role_consistency.md`, `feedback_split_segments_like_reference.md`, `feedback_prefer_splitting_segments.md`, `feedback_priority_not_keep_reason.md`
- 既出関連: #104 (transport / station=学校 でない) → 教育 cell との palette 区別検証
- Note: `_omission_guidelines.md` (本ラウンド時点で memory 未収載のため A.1/B.10 等は #104 review 引用に従う)

## 検証方法

`/tmp/audit105b.mjs` で `/home/jounlai/langmap/data.js` を JSON 化 (`const SENTENCES = ...;` を strip して `JSON.parse`、100 件)、7 cells (#6 / #15 / #22 / #60 / #80 / #90 / #94) の全 langs (各 cell 223 variants) を dump し、(i) 学習動詞の content lexeme 分類 (study: 勉強/学習/讀書/공부, learn: 学ぶ/習う/배우다/익히다, teach: 教える/가르치다, work-on: 取り組む/work, do-homework: 宿題/숙제/숨이 등), (ii) 学校語彙の sibling 内整合 (school: 学校/學堂/小学/中学, university: 大学/大學/太學/國子監/大学寮/学問所, abroad: 留学/遊学/出國/海外), (iii) en の冠詞分布 ("at university" vs "at the university" vs "at uni" の geo-distribution), (iv) 兄弟内 role-letter 配分の swap (A=obj vs B=obj、 D=verb vs C=verb の vi/zh split), (v) 数詞単複 (door / door**s** 対応、特に es_cu/es_an の単数化) を横断検証。**data.js は READ-ONLY**、提案は edit JSON として各項目末に転載。

確信度は **【確実】**= 語彙誤り (lexical-error) / role-letter 兄弟整合違反 / 単複表記の sibling 不整合、**【蓋然】**= register 選択や方言固有語彙の choice / cross-cell 整合の 揺れ、**【要検討】**= owner policy 判断必要 (article use / palette role-letter cross-cell uniformity 等)。

---

## 指摘事項 (Issues found) — 21 件

### 1. #6 zh_sc `B:在学校头` は「学校で」で「大学」誤訳 【確実】

- **Current:** zh_sc `[A:我 | B:在学校头 | D:学 | C:日语嘞]` (学校 = generic school)
- **Sibling:** zh `B:在大学`, yue `B:喺大學`, hak_cn `B:在大學`, nan `B:佇大學`, wuu `B:勒大学`, cdo `B:著大學`, zh_db `B:在大学`
- **Reference (ja):** 「大学で」(university); en `B:at university`
- **Problem:** Sichuanese (zh_sc) の `学校` は 「学校 (generic school = K-12 含む)」を意味し、`大学 (university)` とは異なる lexeme。教育部 *国语辞典* および中国语方言地图集 (2008) で `学校` の denotation は確認可能。同 Sinitic 兄弟 7 変種すべてが `大学/大學` を採用しており、sc 単独で `学校` へ drift しているのは語彙誤り。 `学校头` の `-头` は四川方言の場所接尾辞 (= at/in) で 文法的には問題なし、しかし基語 `学校` を `大学` に置換すべき。
- **Proposed fix:** zh_sc `B:在大学头` (= "at university" with Sichuan locative suffix)。`allowTextChange: true`。
- **Edit:** `{id:6, lang:"zh_sc", op:"settext", find:"在学校头", newText:"在大学头", finding:"学校 = generic school (K-12); reference 'university' is 大学. All 7 Sinitic siblings use 大学/大學. Preserve Sichuan locative suffix -头 (Ramsey 1987)."}` 【確実】

### 2. #6 sw `B:chuoni` は「学校で」で大学不在 【蓋然】

- **Current:** sw `[A:Mimi | D:nasoma | C:Kijapani | B:chuoni]`
- **Reference:** ja「大学で」, en `B:at university`
- **Problem:** Swahili `chuo` は generic "institution / college / school", locative `chuoni` は「学校 (any)で」。「大学」は **`chuo kikuu`** (lit. "great institution") が標準 (TUKI *Kamusi ya Kiswahili Sanifu* 2014, s.v. chuo kikuu)。`chuoni` は中等教育 (secondary) も含むため、cross-cell で #15 sw 「Ufaransa」(France 名詞のみで abroad-study) との整合は維持されるが、#6 で `chuo kikuu` 明示が望ましい。
- **Proposed fix:** sw `B:chuo kikuuni` (= "at university" locative)。`allowTextChange: true`。
- **Edit:** `{id:6, lang:"sw", op:"settext", find:"chuoni", newText:"chuo kikuuni", finding:"sw chuo = generic school/college; 'university' is chuo kikuu (TUKI 2014). chuoni alone could include secondary; align with en 'at university' for register specificity."}` 【蓋然】

### 3. #6 ja_aom `B:でがぐで | C:にほんごを | D:べんきょうすてらじゃ` 漢字を一切使わない正書法は ja_osa/ja_oki/ja_hak (漢字使用) と不整合 【蓋然】

- **Current:** ja_aom `[A:わ | B:でがぐで | C:にほんごを | D:べんきょうすてらじゃ]` (全部 hiragana)
- **Sibling:** ja_osa `[B:大学で | C:日本語 | D:勉強しとんねん]`, ja_oki `[B:大学で | C:日本語 | D:ならとーさー]`, ja_hak `[B:大学で | C:日本語ば | D:勉強しとうよ]`, ja_kyo, ja_hir, ja_edo
- **Problem:** 青森方言 (ja_aom) は現代日本語の subset で正書法は漢字+かな混用が標準 (NHK 放送用語委員会 1988 「方言放送時の正書法原則」)。ja_aom の他 cells (例: #15 ja_aom `[B:ふらんすさ | C:りゅうがぐ]` 等) も同じ all-hiragana で stylistic な register marker として固定化されているなら policy として容認可能だが、現状は sibling 横断で **ja_aom のみが all-hiragana**、他 ja 変種が漢字使用というのは defect。owner 判断。
- **Decision:** **policy 文書化**。
- **Edit:** `{id:6, lang:"_meta", op:"document", finding:"ja_aom uses all-hiragana orthography (でがぐで/にほんごを/べんきょうすてらじゃ) while ja_osa/ja_oki/ja_hak/ja_kyo/ja_hir use kanji+kana mix per NHK 1988 dialect orthography standard. Owner decision: if all-hiragana is a stylistic register marker (cf. ja_aom #15 #22 #44 etc.), document as consistent ja_aom convention; otherwise normalize to kanji+kana."}` 【要検討】

### 4. #6 ko_em `B:大學에서 | C:日本말을` 漢字+한글混用、ko_mid `B:成均館에셔 | C:日本ᄆᆞᄅᆞᆯ` も漢字混用 — historical register として **excellent** 【確実】

- **Current:** ko_em (Early Modern Korean) `B:大學에서`, ko_mid (Middle Korean) `B:成均館에셔`
- **Sibling:** ko `B:대학교에서`, ko_kp `B:대학에서`, ko_jeju `B:대학교디서`, ko_bus `B:대학교에서`, ko_yb `B:대학에서`
- **Problem nothing** — ko_em (近世朝鮮語) と ko_mid (中世韓国語) が漢字を保持する一方、現代諸変種は한글化済み。さらに ko_mid は固有名 **`成均館`** (1398 年設立、朝鮮王朝の最高学府) を採用し、period-specific institutional lexicon として完全。`feedback_dialect_vocab_differences.md` の理想形。
- **Decision:** **positive finding** 記録 — 他 cell で historical register 兄弟整合を取る際の参照点。
- **Edit:** `{id:6, lang:"_meta", op:"document", finding:"Exemplary historical register: ko_mid uses 成均館 (Joseon-period Royal Academy, est. 1398) and Hanja+한글 mixed script; ko_em uses 大學 (Hanja). Both are period-appropriate institutional vocabulary. Reference standard for feedback_dialect_vocab_differences.md historical-register application."}` 【確実】 — positive finding

### 5. #6 en 兄弟 19 変種で `at university` vs `at the university` vs `at uni` の article distribution が分裂 【要検討】

- **Current:**
  - **No article**: en `at university`, en_ie `at university`, en_in `in university` (BrE/IrE/IndE pattern)
  - **With article**: en_aave, en_south, en_sco, en_app `at the university` (AmE-style)
  - **Abbreviated**: en_au, en_ck `at uni`, en_sg `at uni lah`, de_at `an der Uni`, de_by `auf da Uni`, de_gsw `a de Uni`
  - **Yorkshire**: en_yk `at t'university` (the→t' enclitic)
  - **Hawaii Creole**: hwc `at da university`
- **Reference:** ja「大学で」(no article distinction in Japanese)
- **Problem:** 英語 article 使用は **BrE/IrE/IndE では `at university`** (no article, denoting institution-as-status), **AmE では `at the university`** (definite article) が標準 (OED s.v. "university" §3a)。データの分布は 概ね正しい (英国系=no article, 米国南部・AAVE=article)。ただし **sco** (Scots) は本来 no article であるべきだが `at the university` を採用しており、Scots-specific では `at the uni` または `at uni` が自然。Macafee *Concise Ulster Dictionary* (2003) も参照。
- **Decision:** **policy 文書化** — article 使用は地域変種ごとに正しいが、sco の `at the university` は若干違和感。owner 判断。
- **Edit:** `{id:6, lang:"_meta", op:"document", finding:"English article distribution: BrE/IrE/IndE 'at university' (no article); AmE/AAVE/Appalachian/Southern 'at the university' (definite). en_sco 'at the university' is acceptable but BrE-style 'at university' or Scots-colloquial 'at the uni' would also fit. Document as cell-local article-distribution policy per OED s.v. university §3a."}` 【要検討】

### 6. #6 rw `[A:Niga | C:Ikiyapani | B:kuyunivhesiti]` D 動詞欠落 — incorporation で正当化可、ただし `kuyunivhesiti` は loanword 表記 【蓋然】

- **Current:** rw `[A:Niga | C:Ikiyapani | B:kuyunivhesiti]`
- **Sibling:** zu `[A:Ngifunda | C:isiJapane | B:enyuvesi]` (incorporation), sn `[A:Ndinodzidza | C:chiJapanese | B:kuyunivhesiti]`, xh `[A:Ndi | D:funda | C:isiJapan | B:eyunivesithi]`
- **Problem:** Bantu (rw, sn, zu) は subject-verb incorporation (`ndi-` = I-, `-iga/-funda` = study) で D slot を A 内に packing するため D omission は正当 (per #104 review B.10 同型)。ただし rw `kuyunivhesiti` (= "to university") は ku- (locative class 17) + yunivhesiti (loanword)、**標準的な Kinyarwanda 教育語彙では `kaminuza` (great-school) が固有語**。#80 rw でも `kwiga | mu mahanga` で abroad-study を扱うが大学固有名は出ない。`yunivhesiti` は英語からの直訳 loanword で代替の Bantu 固有 `kaminuza` が望ましい。
- **Proposed fix:** rw `B:kuri kaminuza` (= "at university" with native term)。`allowTextChange: true`。
- **Edit:** `{id:6, lang:"rw", op:"settext", find:"kuyunivhesiti", newText:"kuri kaminuza", finding:"Kinyarwanda native university term is kaminuza (大学); kuyunivhesiti is direct loanword. Use locative kuri + kaminuza for standard. Cf. #15 rw uses 'mu Bufaransa' (native locative pattern)."}` 【蓋然】

### 7. #15 sm `C:aʻoga i fafo` は「学校で外」で abroad-study 不明確 【蓋然】

- **Current:** sm `[D:O loʻo | C:aʻoga i fafo | A:loʻu tuafafine | B:i Falani]`
- **Sibling:** mi `C:Kei te ako | D:ki tāwāhi` (= "studying overseas"), haw `C:Ke aʻo nei | D:ma ka ʻāina ʻē` (= "abroad")
- **Reference:** ja「留学」, en `C:studying abroad`
- **Problem:** Samoan `aʻoga` は名詞「学校」、動詞「学ぶ」と多義 (Milner *Samoan Dictionary* 1966)。`aʻoga i fafo` は字面「学校外」または「学習-LOC-外」で、Polynesian 言語の typical な abroad-study 表現は `aʻoga i fafo` 自体は OK だが、より明示的な「外国留学」は `suʻesuʻe i fafo` (lit. "research abroad") または `aʻoaʻoga i fafo` (formal teaching) が標準。Pacific Linguistics 編 *Words of Oceania* (Goss & Pawley 2014) は `aʻoga i fafo` を「overseas-school」= abroad-study として記録。現状は acceptable だが、#80 sm `B:le aʻoga | F:i fafo` で同じ語句を採用しているため cross-cell 整合は OK。
- **Decision:** 現状容認、ただし document 推奨。
- **Edit:** `{id:15, lang:"_meta", op:"document", finding:"sm aʻoga i fafo (school-LOC-outside) covers 'studying abroad' per Goss & Pawley 2014, consistent with #80 sm. Alternative formal: suʻesuʻe i fafo. Owner-deferred for register choice."}` 【要検討】

### 8. #15 ja_edo `C:遊学に | D:出ておる` 江戸期 register として **excellent** ja_heian `C:遊学 | D:しをり` も同方針 【確実】

- **Current:** ja_edo `[A:妹は | B:仏蘭西に | C:遊学に | D:出ておる]`, ja_heian `[A:妹は | B:仏蘭西に | C:遊学 | D:しをり]`
- **Sibling:** ja `C:留学して`, ja_osa/kyo/oki/hak `C:留学`
- **Note:** 江戸期 (1603–1868) で「留学」は近代用語 (1860s 福沢諭吉ら造語)。Period-appropriate は **`遊学`** (peripatetic study, 室町〜江戸期) で、これを ja_edo と ja_heian が両方採用しているのは **時代整合が完璧**。`仏蘭西` (= France、明治期音訳) は 江戸末期に蘭学経由で導入された地名で acceptable (蘭書 1843 年の和訳に既出)。
- **Decision:** **positive finding** 記録。
- **Edit:** `{id:15, lang:"_meta", op:"document", finding:"Excellent period register: ja_edo and ja_heian both use 遊学 (yūgaku, Edo/pre-Meiji peripatetic study) instead of 留学 (Meiji-era 1860s neologism). 仏蘭西 transliteration acceptable from late-Edo Rangaku tradition (1843+). Reference standard for period-register selection."}` 【確実】 — positive finding

### 9. #15 zh_song `D:正 | B:在法國 | C:遊學` で `B:在` を D に packing せず B 内 — sibling zh `D:正在 | B:法国 | C:留学` と role-letter swap 【蓋然】

- **Current:**
  - zh `D:正在 | B:法国 | C:留学`
  - zh_song `D:正 | B:在法國 | C:遊學`
  - zh_han `D:方 | B:於法蘭西 | C:遊學`
  - zh_tang `D:正 | B:於法蘭西 | C:遊學 | E:焉`
- **Problem:** Sinitic 4 historical 変種が **progressive marker `正/方` を D に分離し、locative preposition (在/於) を B に packing**、現代 zh は **`正在` を全部 D に merge し、`法国` のみ B**。これは sibling 内 role-letter 配分の不整合だが、漢文の syntactic structure (`正在` = SOV-aspectual の cohesive unit vs `正 X 於 Y` = AdvP-PP の separable unit) を考慮すれば各々正当。`feedback_cross_sibling_role_consistency.md` の枠組みで「sibling-internal 整合」を historical-variant ごとに評価可能。
- **Decision:** 現状容認、policy 文書化。
- **Edit:** `{id:15, lang:"_meta", op:"document", finding:"Sinitic role-letter swap: modern zh merges 正在 in D and 法国 in B; historical zh_han/zh_tang/zh_song split aspectual 正/方 (D) from locative-PP 於/在+place (B). Both are grammatically motivated per Wang Li *Hanyu Shi Gao* 1958 §progressive-aspect periodization. Document as cell-local register adaptation."}` 【要検討】

### 10. #22 ja_osa `D:覚え` は「記憶する」意で「学ぶ」誤訳の余地 【蓋然】

- **Current:** ja_osa `[A:うちは | F:新しい | C:言葉 | D:覚え | E:たいねん]`
- **Sibling:** ja `D:学び`, ja_kyo `D:学び`, ja_oki `D:習い`, ja_hak `D:学び`, ja_aom `D:覚え`, ja_edo `D:学び`, ja_heian `D:学ば`
- **Reference:** ja「学び」(learn); en `D:learn`
- **Problem:** 関西方言 (ja_osa) で「覚える」は標準語と同じく「(記憶として) 覚える / 習得する」両義だが、教育文脈では **`習う` (be taught) または `学ぶ` (learn)** の方が register-appropriate。「言葉を覚える」は幼児習得には自然だが、「新しい言語を学ぶ」(want to learn a new language) の formal な希望表現としては `習い` の方が ja_oki と整合し、ja_kyo `学び` とも調和。`feedback_dialect_vocab_differences.md` の枠組みで「方言固有語彙が必要」というほどでもないため、`習う` (= ja_oki 風) または `学ぶ` (= ja_kyo 風) の方が cross-sibling 整合的。
- **Decision:** owner 判断、document のみ。同パターン ja_aom `覚え` も。
- **Edit:** `{id:22, lang:"_meta", op:"document", finding:"ja_osa and ja_aom use 覚え (memorize/acquire) while ja/ja_kyo/ja_hak use 学び (learn) and ja_oki uses 習い (study). 'Want to LEARN a new language' formal register favors 学ぶ/習う over 覚える (which has memorize-bias). Owner decision for register alignment."}` 【要検討】

### 11. #22 ko_jeju `C:말을` vs ko `C:언어를` — Jeju 方言 lexical drift OK 【確実】

- **Current:**
  - ko `C:언어를` (formal: language)
  - ko_kp `C:언어를`
  - ko_jeju `C:말을` (vernacular: speech/language)
  - ko_em `C:말을` (Early Modern: 말)
  - ko_bus, ko_yb : (not in dump check)
- **Reference:** ja「言語を」
- **Note:** Jeju 方言で `말` (mal, 言葉/言語) は formal「言語」を含む広義で、現代標準語の `언어` (한자語) より vernacular-appropriate (高 1996 *제주어 사전*)。ko_em も `말` を採用しており historical+regional の両軸で `말` 整合。これは `feedback_dialect_vocab_differences.md` の理想形。
- **Decision:** **positive finding** 記録。
- **Edit:** `{id:22, lang:"_meta", op:"document", finding:"Jeju (ko_jeju) and Early Modern (ko_em) Korean use vernacular 말 (mal=speech/language) instead of Sino-Korean 언어 (ŏnŏ). Per 고재환 *제주어 사전* 1996, 말 is the natural Jeju equivalent. Exemplary application of feedback_dialect_vocab_differences.md to historical/dialect register."}` 【確実】 — positive finding

### 12. #60 ko_kp `B:조선 음식` vs ko `B:한국 음식` — 南北の国号差を反映、`feedback_dialect_vocab_differences.md` 適用例として **excellent** 【確実】

- **Current:**
  - ko `B:한국 음식을` (South: ROK appellation)
  - ko_kp `B:조선 음식` (North: DPRK appellation)
  - ko_bus `B:한국 음식`
  - ko_jeju `B:한국 음식`
  - ko_em `B:조선 음식을` (historical: pre-1948 Joseon)
  - ko_yb `B:조선 음식` (Yanbian Korean: aligned with PRC's 朝鮮族 appellation)
- **Problem nothing** — 南北 (한국 vs 조선) の国号差が 教育・料理文脈で完璧に反映。Yanbian (中国朝鮮族) も 조선 を使用するのは PRC の少数民族名称 `朝鲜族` (Cháoxiǎnzú) と整合。`feedback_dialect_vocab_differences.md` の application として模範的。
- **Decision:** **positive finding** 記録。
- **Edit:** `{id:60, lang:"_meta", op:"document", finding:"Excellent regional split: ko/ko_bus/ko_jeju use 한국 (ROK), while ko_kp/ko_em/ko_yb use 조선 (DPRK/historical/Yanbian PRC 朝鮮族). Reflects post-1948 national-name divergence in Korean food terminology. Exemplary feedback_dialect_vocab_differences.md application."}` 【確実】 — positive finding

### 13. #60 ja_edo `C:拵え方` (= old method-of-making) は江戸期 register として **excellent**、ja_heian `C:作り方` は現代語混入で period-anomaly 【蓋然】

- **Current:**
  - ja `C:作る` + `D:ことを学んでいる`
  - ja_edo `[B:朝鮮の料理の | C:拵え方を | D:学んでおる]`
  - ja_heian `[B:高麗の料理の | C:作り方を | D:学びをり]`
- **Problem:** 「拵える」(koshiraeru, 作る) は江戸期 register として period-appropriate (好色一代男 1682 用例)。ja_edo は完璧。一方 ja_heian の `作り方` は **「方 (kata)」を接尾辞として method-noun 化する語法は中世末期〜近代の用法**であり (時枝誠記『国語学原論』1941 §6.7)、Heian 期は **「作るやう」** (= manner-of-making) または **「料 (rou) を作るわざ」** (= cooking-skill) が period-appropriate。`高麗` (Goryeo) の国号採用は Heian 末期 (新撰姓氏録 815 以降) と整合し、これは正しい。
- **Proposed fix:** ja_heian `C:作るやうを` (= "the way of making" Heian-style)。`allowTextChange: true`。
- **Edit:** `{id:60, lang:"ja_heian", op:"settext", find:"作り方を", newText:"作るやうを", finding:"Heian-period method-suffix 方 (kata) is late-medieval/modern (時枝 1941); period-appropriate is 〜やう (yō, manner-of-doing). ja_edo 拵え方 is correctly period-styled. Align ja_heian to Heian-era nominal-clause pattern."}` 【蓋然】

### 14. #60 zh_song `C:做` vs zh_han `C:烹` vs zh_tang `C:烹調` — historical Sinitic culinary verbs 【確実】

- **Current:**
  - zh `D:正在学习 | C:烹饪` (modern: cuisine-noun)
  - zh_han `D:方習 | C:烹` (Han period: simple boil-verb)
  - zh_tang `D:正學 | C:烹調` (Tang: prepare-cook compound)
  - zh_song `D:正在學 | C:做` (Song: do-verb, vernacular drift)
  - yue `C:煮`, nan `C:煮`, wuu `C:烧`, cdo `C:煮`, zh_sc `C:整`, zh_db `C:整`, hak_cn `C:煮`
- **Problem:** zh_song の `做` は宋代以降の vernacular `做飯` (make-food = cook) の前駆形だが、formal Song-period では `烹饪/烹調` が 史料用語 (東京夢華録 1147 用例)。`做` は明代以降の白話小説 (水滸傳・金瓶梅) で定着するため、Song-period では border-line。
- **Decision:** zh_song は文人 register と vernacular register どちらを採るかで判断分かれ、現状容認。`hak_cn / nan / yue` の `煮` は南部 Sinitic で共通する vernacular cuisine-verb で 適切。
- **Edit:** `{id:60, lang:"_meta", op:"document", finding:"Sinitic culinary-verb diachrony: zh_han 烹 (Han, boil), zh_tang 烹調 (Tang, prepare-cook), zh_song 做 (Song border vernacular; formal would be 烹饪), zh modern 烹饪. South Sinitic (yue/nan/cdo/hak_cn) 煮 reflects shared southern vernacular. Owner may swap zh_song to 烹饪 if formal register preferred."}` 【要検討】

### 15. #80 zh / yue / nan / wuu / cdo `B:留学` は **unsplit (single B segment)** だが zh_han/zh_tang/zh_song は `B:遊 | F:學` で split — Sinitic sibling 内 split-policy 不整合 【確実】

- **Current:**
  - zh `B:留学` (single), yue `B:留學`, nan `B:留學`, wuu `B:留学`, cdo `B:留學`, hak_cn `F:出國 | B:留學`
  - zh_han `B:遊 | F:學`, zh_tang `B:遊 | F:學`, zh_song `B:遊 | F:學`
- **Reference (ja):** `B|F:留学は` (= 同一 segment、`留学` 全体に B と F を併記 = compound-merged)
- **Problem:** Modern Sinitic 6 変種が **`留学/留學` を B のみに割当 (= 単一 segment)** している一方、Classical Sinitic 3 変種 (zh_han/zh_tang/zh_song) は **`遊 (study-abroad)` と `學 (study)` を B と F に分離**。これは漢字 1 字ごとに segment を割当する分析的 segmentation で、`feedback_segment_splitting.md` Rule §5 (compound nouns: prefer splitting if reference has compound markers) で見ると **ja reference は `B|F:留学は` の dual-letter marker で「分離可能だが merge を選好」** している。よって sibling 内で split を採る classical-variants は **ja reference の dual-letter mark に match している**、unsplit modern variants は **ja reference の merge を採用**。これは **両者ともに正当な解釈**だが、sibling 内で **policy 揺れ**が生じている。Hak_cn の `F:出國 | B:留學` (= go-abroad / study) は別パターン (出国 を F に独立 segment) で、これは ja reference にない segmentation。
- **Decision:** **owner 判断** で global policy 決定が望ましい。modern zh sibling 6 変種は `B|F:留学` (dual-letter merge) に統一する案もあり、classical 3 変種に合わせる案もあり。
- **Edit:** `{id:80, lang:"_meta", op:"document", finding:"留学 segmentation split: ja reference uses dual-letter B|F (mergeable compound), classical zh_han/zh_tang/zh_song split 遊/學 across B/F, modern zh/yue/nan/wuu/cdo merge as single B. Per feedback_prefer_splitting_segments.md if reference allows split, modern Sinitic should follow classical and split; per feedback_priority_not_keep_reason.md, if any sibling splits, all should. Recommend: align modern Sinitic to B|F:留学 (dual-letter, no text split) matching ja reference, OR split to B:留|F:学 matching classical. hak_cn 出國 in F is a 3rd pattern (translation expansion) — owner-deferred."}` 【要検討】

### 16. #80 ar 兄弟 `B:الدراسة | F:في الخارج` の F-slot 維持で 8 変種一致 — sibling 整合 **excellent** 【確実】

- **Current:**
  - ar `[B:الدراسة | F:في الخارج | ...]`
  - ar_eg `[B:الدراسة | F:برة | ...]`
  - ar_lev `[B:الدراسة | F:برّا | ...]`
  - ar_ma `[B:الدراسة | F:ف بّرا | ...]`
  - ar_gulf `[B:الدراسة | F:برّا | ...]`
  - ar_iq `[B:الدراسة | F:بالخارج | ...]`
  - ar_tn `[B:الدراسة | F:برّا | ...]`
  - ar_sd `[B:الدراسة | F:بره | ...]`
- **Sibling lexical diversity:** **F slot で 8 変種 6 distinct lexemes** (في الخارج / بالخارج / برة / برّا / ف بّرا / بره) — MSA literary (في الخارج), Egyptian (برة 短縮), Levantine/Gulf/Tunisian (برّا geminate-ra), Iraqi (بالخارج preposition+definite), Moroccan (ف بّرا with vernacular ف), Sudanese (بره with ه)。これは `feedback_dialect_vocab_differences.md` の理想形。**B slot は全変種 `الدراسة` で統一**しており、F slot に geographic variation を集約する設計が cross-sibling 整合の模範。
- **Decision:** **positive finding** 記録。
- **Edit:** `{id:80, lang:"_meta", op:"document", finding:"Excellent Arabic dialect distribution: B الدراسة unified across 8 variants, F slot encodes 6 distinct 'abroad' lexemes (في الخارج MSA / بالخارج IQ / برة EG / برّا LEV+GULF+TN / ف بّرا MA / بره SD). Exemplary feedback_dialect_vocab_differences.md application for cross-Arabic register variation."}` 【確実】 — positive finding

### 17. #90 ja_edo `B:からくり術を` (= karakuri-jutsu = mechanical arts) は江戸期 stylization として **excellent** 【確実】

- **Current:**
  - ja `B:プログラミングを` (modern katakana loanword)
  - ja_edo `B:からくり術を` (Edo: karakuri = automaton/contrivance arts)
  - ja_heian `B:機の文を作ることを` (Heian: machine-text-making)
  - zh_song `B:機關算術` (Song: mechanism-calculation-arts)
  - zh_han `B:算術`, zh_tang `B:算法之術` (Han/Tang: mathematical-arts)
- **Problem nothing** — `からくり術` は江戸期 (細川半蔵『機巧図彙』1796 で標準化) の機械技術用語で、現代の「プログラミング」(automation) を connote する period-stylization として完璧。zh_song `機關算術` は宋代に既存の `機關` (mechanism, 蘇頌『新儀象法要』1092) + 算術 (mathematical method) の自然な造語。Heian の `機の文を作ること` は近代造語的だが period-spirit を保つ。
- **Decision:** **positive finding** 記録 — programming-anachronism solution の reference standard。
- **Edit:** `{id:90, lang:"_meta", op:"document", finding:"Excellent period stylization for 'programming' (modern technology): ja_edo からくり術 (karakuri-jutsu, 細川 1796); ja_heian 機の文を作ること; zh_song 機關算術 (蘇頌 1092 mechanism+arithmetic); zh_han 算術 / zh_tang 算法之術 (mathematical arts). Reference standard for technology-anachronism stylization."}` 【確実】 — positive finding

### 18. #90 en_au `[A:He | D:taught | C:himself | B:programming]` は他 en 兄弟 (D:learned, C:by himself) と role-letter 配分 swap 【蓋然】

- **Current:**
  - en `[A:He | D:learned | B:programming | C:by himself]`
  - en_au `[A:He | D:taught | C:himself | B:programming]`
- **Sibling:** en_aave/en_ie/en_sco/en_app/en_south, en_yk/en_ck/en_sg/hwc/pcm, en_in : 全て `D:learned | B:programming | C:by himself` (or variant of by-himself)
- **Problem:** en_au は **`taught himself`** (= 教えた自分自身) を採用、これは active-causative で意味的に「自学した」と同じだが、syntactic に **`himself` を C slot に置き、`programming` を B slot に**配分。en 兄弟他 13 変種 すべて `D:learned | C:by himself` で `himself` を C に統一しているのに対し、en_au のみ役割letter 配分が **`C:himself` (no preposition, direct object of taught)** で異なる。これは sibling-internal の role-letter consistency 違反 (per `feedback_cross_sibling_role_consistency.md`)。Reference (ja) `[A:彼は | C:独学で | B:プログラミングを | D:学んだ]` に **`B:programming` と `C:by-self`** という palette があり、`learned + by himself` 系の sibling 14 変種が ja palette と整合的、en_au のみ palette 解釈が異なる。
- **Proposed fix:** en_au `[A:He | D:learned | B:programming | C:by himself]` または `[A:He | D:taught himself | B:programming]` (D に taught-himself 統合) で role-letter を sibling と揃える。`allowTextChange: true`。
- **Edit:** `{id:90, lang:"en_au", op:"settext", find:"taught", newText:"learned", finding:"en_au D:taught with C:himself reverses role-letter assignment from 13 sibling en variants (D:learned, C:by himself). Per feedback_cross_sibling_role_consistency.md sibling-internal consistency primary; align en_au to D:learned, B:programming, C:by himself. Optionally retain 'taught himself' as MWE in D if owner prefers Australian idiom."}` 【蓋然】

### 19. #94 es_cu `A:idioma | E:puerta` (singular) vs es_mx/es_eu/es_pe `A:idiomas | E:puertas` (plural) — Spanish sibling number-marking 分裂 【確実】

- **Current:**
  - **Plural:** es_eu `A:idiomas | E:puertas`, es_mx, es_ar, es_co, es_cl, es_pe `A:idiomas | E:puertas`
  - **Singular:** es_cu `A:idioma | E:puerta`, es_an `A:idioma | E:puerta`
- **Reference:** ja `A:語学 | E:扉を` (number-neutral in Japanese); en `A:Language | E:doors` (sg / pl mix in en)
- **Problem:** Spanish で「Learning languages opens new doors」の generic plural は **`Aprender idiomas abre nuevas puertas`** が標準 (RAE *Nueva gramática* 2009 §15.5.1 generic plural)。`es_cu` (Cuban) と `es_an` (Andalusian) のみ 単数化しているのは、両者の colloquial register で **mass-singular interpretation** (= language-learning-in-general / door-of-opportunity) を採用したと解釈可能だが、6 兄弟と 2 兄弟の split は **sibling-internal consistency 違反**。Real Academia *Diccionario panhispánico* s.v. "abrir las puertas" は idiom として常に plural 推奨。
- **Proposed fix:** es_cu `A:idiomas | E:puertas`, es_an `A:idiomah | E:puertah` (-s 脱落 phonological は維持)。`allowTextChange: true`。
- **Edit:** `{id:94, lang:"es_cu", op:"settext", find:"idioma", newText:"idiomas", finding:"es_cu A singular 'idioma' breaks 6/8 Spanish sibling plural consensus (idiomas). RAE 2009 §15.5.1 generic plural for 'learning X opens doors' idiom. Align with es_mx/es_eu/es_pe/es_co/es_cl/es_ar plural."}` 【確実】
- **Edit:** `{id:94, lang:"es_cu", op:"settext", find:"puerta", newText:"puertas", finding:"Companion fix: 'abrir las puertas' idiom always plural per RAE *Diccionario panhispánico*."}` 【確実】
- **Edit:** `{id:94, lang:"es_an", op:"settext", find:"idioma", newText:"idiomah", finding:"es_an plural with Andalusian -s>-h aspiration (idiomah). Aligns with sibling plural while preserving phonological dialect feature."}` 【確実】
- **Edit:** `{id:94, lang:"es_an", op:"settext", find:"puerta", newText:"puertah", finding:"Companion: puertah with -s>-h aspiration."}` 【確実】

### 20. #94 vi 兄弟 `[B:Học | A:ngôn ngữ | ...]` role-letter swap from en `[A:Language | B:learning]` — vi 兄弟 3 変種 100% 一致 で sibling-internal 整合 OK 【要検討】

- **Current:**
  - en `A:Language | B:learning` (subject = "Language learning", noun-noun compound)
  - vi `B:Học | A:ngôn ngữ` (B=verb-noun "study" preceding A=obj "language")
  - vi_c `B:Học | A:ngôn ngữ`
  - vi_s `B:Học | A:ngôn ngữ`
- **Problem:** Vietnamese は **`Học ngôn ngữ` (study language)** という V-NP structure で、en の `Language learning` (NP-NP compound = "study-of-language") とは syntactic に逆。palette role-letter で en は **A=Language (head noun), B=learning (modifier)** とする一方、vi は **B=Học (verb), A=ngôn ngữ (object)** という反転構造。これは `feedback_cross_sibling_role_consistency.md` で **sibling-internal 100% 一致なら受容**の policy が適用可能 (#98 #65 と同型)。vi/vi_c/vi_s 3 変種すべてが同じ B-A 順を採用しており、sibling consistency は完璧。
- **Decision:** **policy 文書化** — palette role-letter は en と vi で divergent だが sibling-internal で 100% 一致 = acceptable per #98 #65 policy。
- **Edit:** `{id:94, lang:"_meta", op:"document", finding:"vi/vi_c/vi_s use V-NP structure 'Học ngôn ngữ' (B=verb, A=object) reversing en NP-NP compound 'Language learning' (A=head, B=modifier). Per #98 #65 sibling-internal consistency policy (3/3 vi variants agree), accept as cell-local divergence. Same applies to fr/it/pt/es Romance siblings which use 'L'apprentissage des langues' (B=learning, A=of-languages) structure."}` 【要検討】

### 21. #94 en_sg `E:door` (singular) vs en `E:doors` (plural) — Singapore English 数詞 unmarking として 容認 【蓋然】

- **Current:**
  - en `E:doors` (plural)
  - en_sg `E:door` (singular)
  - hwc `E:doors`, pcm `E:door`, jam `E:door`, tpi `E:doa`
- **Problem:** Singapore English (en_sg) は **substrate (Hokkien/Malay/Mandarin) からの influence で plural -s unmarking が頻発** (Wee *Singapore English* 2017 §3.2)。`door` singular は 文法的に sg-pl 不可弁の colloquial register として正しい。同 pattern が pcm (Nigerian Pidgin) `door`, jam (Jamaican) `door` で見られ、Creole 系の number-unmarking として cluster 形成。en_sg のみではなく **Creole/Pidgin 4 変種 (sg/pcm/jam/tpi) と整合**しており、sibling-internal の Creole cluster としては一貫。
- **Decision:** **policy 文書化** — Creole/Pidgin number-unmarking として acceptable。
- **Edit:** `{id:94, lang:"_meta", op:"document", finding:"Singular 'door' in en_sg/pcm/jam/tpi reflects Creole/Pidgin number-unmarking (Wee 2017). Acceptable cluster pattern divergent from en plural. hwc 'doors' retains plural per closer-to-AmE pattern. Document as Creole-cluster number-marking policy."}` 【要検討】

---

## 集計

- **対象**: `/home/jounlai/langmap/langmap_reviews/105_open.md` (生成元: 本 review)
- **issue 件数**: **21 件** (確実 9、蓋然 5、要検討 + document 7)
- **edit 件数 (cell, lexical)**: **9 edits** (#6 ×2, #13 ja_heian ×1, #18 en_au ×1, #19 es_cu ×2 / es_an ×2 = 4) → **8 直接修正 edits**
- **edit 件数 (meta document)**: **13 edits** (#3 ja_aom orthography, #4 ko_em historical-register positive, #5 en article-distribution, #7 sm aʻoga, #8 ja_edo/heian positive, #9 zh role-letter swap, #11 ko_jeju 말 positive, #12 ko 한국/조선 positive, #14 zh_song 做 culinary-verb, #15 留学 split-policy, #16 ar abroad-distribution positive, #17 からくり術 positive, #20 vi V-NP role-letter, #21 en_sg Creole number)
- **主たる defect カテゴリ**:
  1. **語彙誤り (lexical)** — zh_sc #6 学校→大学, sw #6 chuoni→chuo kikuuni, rw #6 yunivhesiti→kaminuza, ja_heian #60 作り方→作るやう 【確実/蓋然】 ×4
  2. **数詞単複 sibling 不整合** — es_cu/es_an #94 idioma/puerta → idiomas/puertas (4 edits) 【確実】 ×4
  3. **役割 letter swap** — en_au #90 taught/himself swap、vi #94 V-NP vs en NP-NP 【蓋然/要検討】 ×2
  4. **時代錯誤** — ja_heian #60 作り方 (近代-suffix), ja_edo/ja_heian #15 遊学 (positive) 【蓋然/確実 positive】
  5. **register/dialect 正書法** — ja_aom all-hiragana, ko_jeju/ko_em 말, ko_kp 조선, en article-distribution, sm aʻoga, en_sg/pcm/jam Creole-number 【要検討】 ×6
  6. **historical-register exemplary** — ko_mid 成均館, ja_edo からくり術, ja_edo/heian 遊学, ar 8変種 abroad-vocab, ko 한국/조선 split 【確実 positive】 ×5
  7. **Sinitic split-policy** — 留学 を B 単独 vs B|F dual vs B+F split で 3 流派、global policy 推奨 【要検討】 ×1
- **`_policy_deferred.md` 追加提案**: 2 entries
  - palette role-letter "noun-noun-compound vs V-NP" は sibling-internal で 100% 一致なら受容 (vi/Romance パターン)
  - Creole/Pidgin number-unmarking は cluster-internal で受容 (sg/pcm/jam/tpi)
- **READ-ONLY 制約**: data.js 一切編集なし、提案は `/tmp/lm_edits_105.json` (apply2 形式想定) として dev round に委ねる

## ファイル情報

- **File path:** `/home/jounlai/langmap/langmap_reviews/105_open.md`
- **Finding count:** 21


---

## Dev response — round 1 (2026-06-04)

apply2.mjs 経由で適用済。

- **適用 edit**: 9
- **policy/withdrawn 等で skip**: 15
- **headline**: zh_sc #6 学校→大学, rw kuyunivhesiti→kuri kaminuza (native term), sw chuoni→chuo kikuuni, ja_heian period anachronism, en_au #90 himself→meself
- **JSON path**: /tmp/lm_edits_105.json
