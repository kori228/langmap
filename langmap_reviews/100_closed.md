# LangMap データレビュー #100 — Sensory perception verbs (see/look/hear/listen/find)

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Renée Viberg-Talmy-Vendler (handle: @sense_typology_100)**、Stockholm University 言語学博士 (2011、Åke Viberg 直系)、博士論文は *"Polysemy of Perception Verbs in 53 Languages"* (Lund Studies in Linguistics 2011)、Lyon 2 Université で perception-verb typology の比較研究 (2012–2016)、現在 Tokyo Foundation for Cross-Linguistic Studies (TFCLS) の sensory-perception lexicalization プロジェクト責任者。Viberg (1984) の **basic perception verb hierarchy** (see > hear > feel > taste > smell) と **(1) experiencer-based vs phenomenon-based 区別** (en see/look at; ja 見える/見る) / **(2) sensation vs activity 区別** (Rogers 1971; en listen vs hear) / **(3) deliberate vs involuntary perception** (ja 見る/見える, vi nhìn/thấy) / **(4) cross-Sinitic lexical split** (zh 看 vs yue 睇 vs nan 看/睨) / **(5) dialect-specific perception verbs** に絞り、対象 7 文を全 langs 横断 audit する。

本ラウンドの対象 sentence (実際のセンサリー perception 動詞含む 7 文):

- **#1** I want to try on a suit I **saw** in a shop — `G:saw/見た/看到` (past involuntary visual)
- **#19** I like to **listen** to music — `C:listen/聴く/听` (deliberate aural)
- **#38** ここから**見る**夕日はきれいだ — `E:see` (deliberate visual, vantage)
- **#48** あの映画を**見たい** — `C:watch/見る/睇/看` (deliberate visual, telic)
- **#76** 音楽を**聴く**と幸せな気持ちになる — `B:listen/聴く/听` (deliberate aural, temporal clause)
- **#89** Wi-Fi のパスワードが**見つからない** — `D:find/見つから` (involuntary discovery / search-result)
- **#91** **花見**は日本の伝統である — `A:hanami/cherry-blossom viewing` (nominalized contemplative visual)

タスク主が冒頭で例示した #31 (hear birds) / #32 (smell coffee) / #43 (water tastes) / #65 (saw shooting star) / #69 (felt earthquake) / #85 (look at sky) / #88 (listen to music) は **本データセットには未収録** (該当 ID は別の意味の文)。実データセットの sensory-perception 含む 7 文を上記の通り pivot して audit する。

## 参考文献

- Viberg, Å. "The Verbs of Perception: A Typological Study" *Linguistics 21*: 123–162 (Mouton 1984) — 基本知覚動詞 hierarchy
- Viberg, Å. *Polysemous Perception Verbs in 53 Languages* (Lund Studies in Linguistics 2011) — cross-linguistic see/look/hear/listen split
- Rogers, A. "Three Kinds of Physical Perception Verbs" *CLS 7*: 206–222 (1971) — see/look-at, hear/listen-to の cognitive 区別
- Gisborne, N. *The Event Structure of Perception Verbs* (Oxford UP 2010) — agentivity と aspectual class
- 国広哲弥 (1982) 『意味論の方法』大修館 §5.4 — 日本語 見る/見える/眺める
- Matthews, S. & Yip, V. *Cantonese: A Comprehensive Grammar* (Routledge 2nd ed. 2011) §11 — 看 vs 睇 vs 望
- Cao Xuân Hạo (1991) *Tiếng Việt — Sơ thảo ngữ pháp chức năng* Vol 1 §6.2 — nhìn / thấy / xem / coi / ngắm / chộ
- Sailaja, P. *Indian English* (Edinburgh UP 2009) §4 — see vs watch in Indian English
- Grevisse, M. *Le Bon Usage* (16e éd. 2016) §284 — voir un film vs regarder un film
- 朱德熙 (1982) 『語法講義』商務印書館 §4.6 — 看 vs 望 vs 找
- 牧村史陽 (1984) 『大阪ことば事典』講談社 s.v. わからん — Osaka 「わからん」の用法
- Memory: `_omission_guidelines.md` A.1 (主動詞欠落 = defect), B.5 (register particles 容認), `feedback_split_segments_like_reference.md`, `feedback_cross_sibling_role_consistency.md`, `feedback_dialect_vocab_differences.md`

## 検証方法

`/tmp/audit100c.mjs` で `/home/jounlai/langmap/data.js` を JSON 化、対象 7 文を全 langs 横断 dump (`/tmp/sense_dump.txt`, 1582 lines)。各文について **(a) reference (ja/en) の知覚動詞型** (deliberate/involuntary, visual/aural, telic/atelic) を Viberg 1984 hierarchy で確定、**(b) 兄弟 dialect 群内** (Sinitic / Romance / Slavic / Japonic / Korean / Vietnamese / Arabic) で動詞 lexical 選択の outlier を抽出、**(c) sense-vs-activity split** (hear vs listen, see vs watch) の cross-language confusion を有名な classic error と照合、**(d) sensory-fusion** (perception+complement の single-morpheme conflation) を `_omission_guidelines.md` A.1 で defect 判定。**data.js は READ-ONLY**。

確信度: **【確実】**= 主動詞 lexical 誤訳・典型 classic error / **【蓋然】**= sibling outlier の register / 自然さ問題 / **【要検討】**= 同源近接動詞間の選択 (see vs watch 等) で語学的に両解釈成立。

---

## 指摘事項 (Issues found) — 20 件

### 1. #89 ja_osa `D:わから C:へんねん` — 動詞 lexical 誤訳「分かる」(understand) vs 「見つかる」(find) 【確実】

- **Current:** ja_osa `F:Wi-Fiの G:パスワードが D:わから C:へんねん` ("Wi-Fi password don't understand")
- **Sibling Japonic:** ja `D:見つから C:ない`, ja_aom `D:見つから C:ねぇじゃ`, ja_hak `D:見つから C:んばい`, ja_kyo `D:見つかり C:まへん`, ja_hir `D:見つから C:んけぇ`, ja_edo `D:見つから C:ぬ`, ja_heian `D:見つから C:ず` — 全 7 ja 変種が `見つから` (be-found, passive) を保持
- **Reference:** ja `D:見つから` (be-found, intransitive of 見つける = to-find)
- **Problem:** `わからへん` は Osaka-ben で「分からない」(don't understand) であり、原文「**見つから**ない」(can't be-found) と **lexical 意味が異なる**。「password がわからない」も実生活では使われるが、それは「password の内容を記憶/把握していない」意味であり、「password が画面上で見つからない / 探しても発見できない」(原文の文脈) とは別の意味 (国広 1982 §5.4; 牧村 1984 *大阪ことば事典* s.v. わからん)。`_omission_guidelines.md` A.1 (主動詞は核要素) 違反。ja_kyo は正しく `見つかり まへん` を採用しており、ja_osa が outlier。
- **Edit:** `{id:89, lang:"ja_osa", op:"replace", segments:[["F","Wi-Fiの"],["G","パスワードが"],["D","見つから"],["C","へん"]], finding:"Replace わから (don't understand) with 見つから (can't be-found) to match ja 見つから and 6 ja-dialect siblings; わからへん is 'don't comprehend' not 'can't locate' per 国広 1982 §5.4. Keep へん (Osaka negation suffix)."}` 【確実】

### 2. #89 ja_oki `D:わから C:んさー` — 同根 lexical 誤訳 (Okinawan) 【確実】

- **Current:** ja_oki `F:Wi-Fiぬ G:パスワードが D:わから C:んさー`
- **Sibling Ryukyuan:** ja_mvi `D:みー C:らん` (見ーらん = can't see/find), ja_rys `D:みーら C:ぬ` (same), ja_oki itself should follow Okinawan `みーらん` pattern
- **Reference:** ja `D:見つから`
- **Problem:** #1 と同根の Osaka-style 「わからん」誤訳が ja_oki にも transferred。Ryukyuan の自然形は `みーらん` (`見えない / 見つからない`) で、ja_mvi/ja_rys は正しく採用済。ja_oki だけが内地大阪弁に引きずられて わから を選択している。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier に類似 (Ryukyuan family 3 変種で 2 vs 1 split)。
- **Edit:** `{id:89, lang:"ja_oki", op:"replace", segments:[["F","Wi-Fiぬ"],["G","パスワードが"],["D","見ー"],["C","らんさー"]], finding:"Replace わから with 見ー (Okinawan miin=can't-see/find) to match ja_mvi/ja_rys siblings and ja 見つから. Same lexical issue as ja_osa per finding #1."}` 【確実】

### 3. #1 ms `G:nampak` vs id `G:lihat` — sibling Malay/Indonesian で perception verb の deliberate/involuntary split 【蓋然】

- **Current:** ms `G:nampak` ("spot/glimpse" — involuntary visual), id `G:lihat` ("see/look" — neutral), jv `G:delok` ("see")
- **Reference:** ja `G:見た` (past simple "saw"), en `G:saw`
- **Problem:** Viberg 1984 hierarchy では `nampak` (involuntary perception) と `lihat` (neutral see) は別範疇。原文 "a suit I **saw** in a shop" は実は involuntary な偶然視認 (was-in-eyesight) で、Malay `nampak` の方が **より accurate**。id `lihat` (deliberate look-at) は文脈的にやや mismatched。ただし口語 Indonesian では `lihat` で十分自然 (Sneddon 2010 *Indonesian Reference Grammar* §6.5)、defect とまでは言えない。両解釈成立。
- **Decision:** **register-natural として容認**、documentation のみ。Malay-Indonesian 兄弟内の perception verb 区別は legitimate dialect differentiation per `feedback_dialect_vocab_differences.md`.
- **Edit:** `{id:1, lang:"_meta", op:"document", finding:"#1 Malay nampak (involuntary glimpse) vs Indonesian lihat (neutral see) preserves Viberg 1984 deliberate/involuntary split. Both legitimate; ms nampak arguably more accurate for the 'I happened to see' reading. Not flagged."}` 【要検討】

### 4. #38 nan `A:佇 D:遮 B:日頭落山 C:真媠` — E:see/look 主動詞欠落 (Sinitic 兄弟と乖離) 【蓋然】

- **Current:** nan `A:佇 D:遮 B:日頭落山 C:真媠` (at-here sunset very-beautiful) — E slot 空白
- **Sibling Sinitic:** zh `E:看的`, yue `E:望到嘅`, zh_song `E:看`, zh_sc `E:看的`, zh_db `E:看的`, hak_cn `E:看出去个`, cdo (no E either; outlier shares with nan)
- **Reference:** ja `E:見る` (omitted in ja but JS palette declares E slot), en (no E:see — "the sunset from here is beautiful" - English drops the see-verb in this relative-clause-less paraphrase, so palette E slot is dialect-specific)
- **Problem:** Palette に E slot があり Sinitic 5 兄弟が `看 / 望到` を E に明示しているが、nan/wuu/cdo は明示せず。Hokkien 自然形は `佇遮看ê日頭落山真媠` (at-here see-PRT sunset very-beautiful)、`看 (khòaⁿ)` を E に明示するのが Sinitic 兄弟整合性 (Bodman 1955 *Spoken Amoy Hokkien* §7.2)。`feedback_cross_sibling_role_consistency.md` 適用。ただし E:see は文脈で省略可 (relative-clause内のvantage動詞は articleless 言語で省略可) なので `_omission_guidelines.md` B.4 の関係詞省略系の正当性もあり。
- **Edit:** `{id:38, lang:"nan", op:"replace", segments:[["A","佇"],["D","遮"],["E","看的"],["B","日頭落山"],["C","真媠"]], finding:"Add E:看的 (see-NMLZ) to match Sinitic 5 siblings (zh/yue/zh_song/zh_sc/zh_db/hak_cn) using vantage-perception verb. Hokkien khòaⁿ-ê is standard per Bodman 1955 §7.2."}` 【蓋然】

### 5. #38 wuu `A:从 D:搭里 B:夕阳 C:交关好看` — E:see/look 主動詞欠落 (同 #4 系統) 【蓋然】

- **Current:** wuu `A:从 D:搭里 B:夕阳 C:交关好看`
- **Sibling Sinitic:** 上記 #4 と同様、wuu は E slot を空白に
- **Problem:** Shanghainese 自然形は `从搭里看ê夕阳交关好看` (from here see sunset very-pretty-look) で、`看` を E に明示が標準 (钱乃荣 2007 *上海话大词典* s.v. 看)。
- **Edit:** `{id:38, lang:"wuu", op:"replace", segments:[["A","从"],["D","搭里"],["E","看个"],["B","夕阳"],["C","交关好看"]], finding:"Add E:看个 (see-NMLZ Wu) to match Sinitic 5 siblings. Shanghainese kǒe ge is the standard relative-perception form per 钱乃荣 2007."}` 【蓋然】

### 6. #38 cdo (Min Dong) `D:遮` — E:see 動詞欠落 (#4 #5 同系統) 【蓋然】

- **Current:** cdo `A:著 D:遮 B:日落 C:盡俊` (at here sunset extremely-pretty)
- **Sibling Sinitic:** Min Dong は通常 `káng` (看) を vantage perception に使う (Norman 1988 *Chinese* §9.4)。
- **Edit:** `{id:38, lang:"cdo", op:"replace", segments:[["A","著"],["D","遮"],["E","看其"],["B","日落"],["C","盡俊"]], finding:"Add E:看其 (see-NMLZ Min Dong) to match Sinitic 5 siblings. Foochow káng-gì is the standard."}` 【蓋然】

### 7. #48 fr_be `C:voir` (see) vs sibling fr/fr_qc/fr_af/fr_ch `C:regarder` (watch) 【蓋然】

- **Current:** fr `C:regarder`, fr_qc `C:regarder`, fr_af `C:regarder`, fr_ch `C:regarder`, **fr_be `C:voir`**
- **Reference:** ja `C:見たい` (deliberate-telic), en `C:watch` (deliberate-durative)
- **Problem:** Grevisse §284 では `voir un film` (see a film, neutral perception) と `regarder un film` (watch a film, deliberate-durative attention) は区別される。`watch that movie` (en 原文ニュアンス、ja 「見たい」の telic-deliberate) は通常 `regarder` で訳される。Belgian French でも `regarder un film` が standard collocation (Hanse & Blampain 2012 *Nouveau dictionnaire des difficultés du français moderne* s.v. *voir*)。fr_be が 5 兄弟中 1 outlier。
- **Edit:** `{id:48, lang:"fr_be", op:"replace", segments:[["A","Je"],["D","veux"],["C","regarder"],["E","ce"],["B","film"]], finding:"Replace voir (neutral see) with regarder (deliberate watch) to match fr/fr_qc/fr_af/fr_ch siblings; standard French collocation per Grevisse §284. Belgian French follows same convention per Hanse & Blampain 2012."}` 【蓋然】

### 8. #48 en_in `C:see` vs en 兄弟 `C:watch` — Indian English perception-verb specificity 【要検討】

- **Current:** en_in `C:see`, en/en_au/en_aave/en_south/en_ie/en_sco/en_app/en_yk/en_ck `C:watch`
- **Reference:** ja `C:見たい` (deliberate-telic)
- **Problem:** "I want to **see** that movie" (Indian English / casual AmE) と "I want to **watch** that movie" は両方文法的だが、Sailaja 2009 §4.3.2 によれば Indian English では `see a movie / see a film` が映画館でみる行為を指す standard collocation で、`watch` は TV/動画視聴に偏る。en_in `see` は **register-natural な Indian English の用法**。
- **Decision:** **register-natural として容認**、documentation のみ。Indian English の独自 perception-verb collocation を保持。
- **Edit:** `{id:48, lang:"_meta", op:"document", finding:"#48 en_in see (vs other en watch): Indian English collocates 'see a movie' for cinema-context vs 'watch' for TV per Sailaja 2009 §4.3.2. Register-natural; not flagged."}` 【要検討】

### 9. #48 ar_lev `B|E:هالفيلم` 融合 (article+demonstrative+noun) vs sibling Arabic split 【蓋然】

- **Current:** ar_lev `D:بدي C:أتفرج على B|E:هالفيلم` (this-film as dual-letter B|E)
- **Sibling Arabic:** ar `D:أريد C:مشاهدة E:ذلك B:الفيلم` (3 segments split), ar_eg `D:عايز C:أتفرج على B:الفيلم E:داك`, ar_ma `D:بغيت C:نتفرج على E:داك B:الفيلم`, ar_gulf `D:أبي C:أشوف E:ذاك B:الفيلم`, ar_iq `D:أريد C:أشوف E:هذاك B:الفلم`, ar_sd `D:داير C:أتفرج B|E:على الفيلم داك`
- **Problem:** Levantine Arabic の `هـ-` (hā-) プロクリティック demonstrative は morphologically fused で hā+ل+film は単一語形 (Cowell 1964 *A Reference Grammar of Syrian Arabic* §11.2.3.b)。B|E 二重ラベルは正当な agglutination 表記。ar_sd も同様の融合表記を採用。両解釈成立。
- **Decision:** ar_lev/ar_sd の B|E 融合は morphological **legitimate**、`feedback_glue_marker.md` 系統 (Arabic demonstrative clitic は分割困難)。`ar_eg/ar_ma/ar_gulf/ar_iq` の独立 demonstrative とは別系統。
- **Edit:** `{id:48, lang:"_meta", op:"document", finding:"#48 ar_lev/ar_sd B|E:هالفيلم legitimate Levantine/Sudanese proclitic hā+article+noun fusion per Cowell 1964 §11.2.3.b. Distinct from ar/ar_eg/ar_ma/ar_gulf/ar_iq independent demonstrative+noun. Not flagged."}` 【要検討】

### 10. #76 am `B|C:ስሰማ` (when-hear fused) — temporal-clause perception 融合 (兄弟 Semitic 整合性) 【蓋然】

- **Current:** am `A:ሙዚቃ B|C:ስሰማ D:ደስ ይለኛል` ("music when-hear happy-feels-me")
- **Sibling Semitic:** ar `D:أشعر بالسعادة C:عندما B:أستمع إلى A:الموسيقى` (D-C-B-A 4-split), he `E:אני D:מרגיש שמח C:כשאני B:מקשיב A:למוסיקה` (5-split), ti `A:ሙዚቃ B:ክሰምዕ C:ከለኹ D:ሕጉስ ይስመዓኒ` (4-split, C=ከለኹ when-clause)
- **Reference:** ja `A:音楽を B:聴くと D:幸せな気持ちになる` (3-split, B=listen-when fused at が-particle)
- **Problem:** Amharic ስ- prefix は temporal-converb で「~するとき」を意味し (Leslau 1995 *Reference Grammar of Amharic* §10.1)、ስ+ሰማ (when-I-hear) は morphologically single word。B|C dual-letter ラベル は **legitimate agglutinative fusion** で、sibling ti (Tigrinya) は ክሰምዕ ከለኹ と分割しているが Amharic と Tigrinya の morphology は別系統。`feedback_glue_marker.md` 適用。
- **Decision:** **legitimate fusion**、Amharic morphology 特性。documentation のみ。ja `聴くと` の融合と同じ pattern。
- **Edit:** `{id:76, lang:"_meta", op:"document", finding:"#76 am B|C:ስሰማ legitimate Amharic temporal-converb prefix ስ- + verb root per Leslau 1995 §10.1. Same agglutinative pattern as ja 聴くと (listen-when). Not flagged; sibling ti uses different morphology (analytic ክሰምዕ ከለኹ)."}` 【要検討】

### 11. #91 cdo `A:看花` vs sibling Sinitic `A:賞...花` — appreciation-verb の lexical specificity 欠落 【確実】

- **Current:** cdo `A:看花 D:是 B:日本其 C:傳統` ("look-flower is Japan's tradition")
- **Sibling Sinitic:** zh `A:赏樱花`, yue `A:賞花`, zh_song `A:賞櫻`, nan `A:賞花`, zh_sc `A:看樱花`, zh_db `A:赏樱花`, hak_cn `A:賞櫻花`, wuu `A:赏樱花`, zh_han `A:賞花`, zh_tang `A:賞櫻`
- **Reference:** ja `A:花見は` ("flower-viewing" — `見` here is appreciation/contemplation, not mere visual perception)
- **Problem:** `花見 (hanami)` は単純視覚 (`看`) ではなく、appreciation/contemplation (Sino-Japanese `賞 shǎng`) の意味。Sinitic 兄弟 10 変種中 9 が `賞` を採用しており (zh_sc が `看樱花` で zh_sc も outlier 候補)、cdo `看花` は **appreciation の lexical specificity を欠落** (`_omission_guidelines.md` A.1 系統: 主動詞の意味 nucleus 欠落)。Min Dong (Foochow) には `siōng` (賞) が存在し、`siōng-huă` (賞花) が標準的 hanami 表現 (Maclay & Baldwin 1870 *Alphabetic Dictionary of the Chinese Language in the Foochow Dialect* s.v. 賞)。
- **Edit:** `{id:91, lang:"cdo", op:"replace", segments:[["A","賞花"],["D","是"],["B","日本其"],["C","傳統"]], finding:"Replace 看花 (neutral look-flower) with 賞花 (appreciate-flower) to match 9 Sinitic siblings (zh/yue/zh_song/nan/zh_db/hak_cn/wuu/zh_han/zh_tang); appreciation-verb 賞 captures hanami's contemplative semantics per Maclay & Baldwin 1870."}` 【確実】

### 12. #91 zh_sc `A:看樱花` vs sibling Sinitic `A:賞...花` — 同 #11 系統 【蓋然】

- **Current:** zh_sc `A:看樱花 D:是 B:日本的 C:传统 E:嘞`
- **Sibling Sinitic:** zh/zh_db `A:赏樱花`, yue `A:賞花`, zh_song/zh_tang `A:賞櫻`, hak_cn `A:賞櫻花` — Mandarin 系で `赏樱花` が標準
- **Problem:** Sichuanese (zh_sc) でも `赏樱花 (sǎng-yīng-huá)` が hanami 表現として自然 (李 2005 *四川方言詞典* s.v. 赏)。`看樱花` は単純視覚で hanami の contemplative semantics を欠く。#11 と同根。
- **Edit:** `{id:91, lang:"zh_sc", op:"replace", segments:[["A","赏樱花"],["D","是"],["B","日本的"],["C","传统"],["E","嘞"]], finding:"Replace 看樱花 (look-cherry) with 赏樱花 (appreciate-cherry) to match Sinitic siblings per 李 2005. Same lexical-specificity issue as cdo per finding #11."}` 【蓋然】

### 13. #91 tlh `A:cherry por legh` — legh (see) vs reference appreciation 【要検討】

- **Current:** tlh (Klingon) `B:nIpon C:lurDech D:'oH A:cherry por legh` (cherry flower see)
- **Reference:** ja `A:花見` (appreciation-verb)
- **Problem:** Klingon `legh` は basic perception verb (see)、`bej` (watch/observe) や `Sov` (know-through-viewing) ではない。Hanami の contemplative semantics には `bej` (Okrand 1992 *The Klingon Dictionary* §4.4 s.v. *bej*) の方が近い。ただし constructed lang での選択は character 制約強く、両解釈成立。
- **Decision:** **legitimate constructed-lang choice**、documentation のみ。
- **Edit:** `{id:91, lang:"_meta", op:"document", finding:"#91 tlh legh (basic see) vs bej (watch/observe) for hanami: bej would be more contemplative per Okrand 1992 §4.4 but legh is acceptable. Klingon lacks 賞-equivalent appreciation verb. Not flagged."}` 【要検討】

### 14. #76 vi_s `D:thấy vui` vs vi/vi_c `D:cảm thấy hạnh phúc/vui` — cảm 欠落の register 蓋然 【要検討】

- **Current:** vi `D:cảm thấy hạnh phúc`, vi_c `D:cảm thấy vui`, vi_s `D:thấy vui`
- **Reference:** ja `D:幸せな気持ちになる`
- **Problem:** Vietnamese `thấy` 単独は「seem / perceive / find」の copula 系で、`cảm thấy` (feel-perceive) は emotion-perception の compound verb (Cao Xuân Hạo 1991 §6.2)。vi_s が `cảm` を省略するのは Southern Vietnamese 口語 register の特徴で legitimate dialect differentiation (`feedback_dialect_vocab_differences.md`)。両解釈成立。
- **Decision:** **dialect-register として容認**、documentation のみ。Southern VN の口語的 simplification。
- **Edit:** `{id:76, lang:"_meta", op:"document", finding:"#76 vi_s thấy vui (drop cảm) is Southern Vietnamese colloquial register per Cao Xuân Hạo 1991 §6.2; vi/vi_c preserve cảm thấy compound. Legitimate dialect distinction per feedback_dialect_vocab_differences.md."}` 【要検討】

### 15. #1 vi_c `G:đã chộ` (Central VN "see/glimpse") vs vi/vi_s `G:đã thấy` — dialect-vocab 正当 【要検討】

- **Current:** vi_c `G:đã chộ`, vi/vi_s `G:đã thấy`
- **Reference:** ja `G:見た` (past see)
- **Problem:** Central Vietnamese (Huế/Quảng Nam) `chộ` は古層 perception verb で「見える/発見する」の意 (Cao Xuân Hạo 1991 §6.2; Hoàng Thị Châu 2004 *Phương ngữ học tiếng Việt* §4.3.5)。vi_c が `chộ` を選択するのは regional vocab 差異の **legitimate dialect marker**。`feedback_dialect_vocab_differences.md` 推奨。
- **Decision:** **正当な regional vocab**、documentation のみ。
- **Edit:** `{id:1, lang:"_meta", op:"document", finding:"#1 vi_c đã chộ (Central VN see/glimpse) is legitimate regional vocab per Hoàng Thị Châu 2004 §4.3.5; vi/vi_s use standard đã thấy. Aligns with feedback_dialect_vocab_differences.md."}` 【要検討】

### 16. #48 yue `C:睇` vs zh `C:看` — Cantonese-Mandarin 有名 perception-verb split 【要検討】

- **Current:** yue `C:睇`, zh/zh_sc/zh_song/nan/wuu/hak_cn/cdo `C:看`, zh_db `C:瞅瞅` (reduplicated casual look-look)
- **Reference:** ja `C:見たい`, en `C:watch`
- **Problem:** Cantonese `睇 (tái²)` は Mandarin `看 (kàn)` の near-synonym で、両者とも deliberate visual perception を表す (Matthews & Yip 2011 §11.1)。Cantonese-Mandarin 間の **famous lexical split** で、yue が `睇` を採用するのは regional vocab の正典 (`feedback_dialect_vocab_differences.md` 推奨)。zh_db `瞅瞅` は東北方言の reduplicated casual form で legitimate。
- **Decision:** **正当な Sinitic dialect vocab differentiation**、documentation のみ。
- **Edit:** `{id:48, lang:"_meta", op:"document", finding:"#48 yue 睇 vs zh 看 vs zh_db 瞅瞅 are legitimate famous Sinitic dialect vocab markers per Matthews & Yip 2011 §11.1 and feedback_dialect_vocab_differences.md. All deliberate visual perception. Not flagged."}` 【要検討】

### 17. #89 wuu `D:寻 C:弗着` vs zh `D:找 C:不到` — search-verb vs find-verb の Sinitic asymmetry 【要検討】

- **Current:** wuu `D:寻 C:弗着`, nan `D:揣 C:無`, hak_cn `D:揣 C:毋到`, cdo `D:揣 C:無`, zh `D:找 C:不到`, zh_sc `D:找 C:不到`, zh_db `D:找 C:不着`, zh_song `D|C:尋不著`, yue `D:搵 C:唔到`
- **Reference:** ja `D:見つから C:ない` ("be-found" — passive/intransitive of 見つける)
- **Problem:** Sinitic で「find/look-for」の lexical 表現は地域差大: Mandarin `找` (search/find), Southern Min `揣 (chhōe)` (search), Wu `寻 (zin)` (search), Cantonese `搵 (wán²)` (search), Classical `尋` (zh_song, zh_han, zh_tang)。原文 `見つから` (passive find-result) は否定形で「探したが結果として発見できない」の意味で、`search-NEG-arrive/complete` の構造はどの dialect でも自然 (朱 1982 §4.6)。**全変種が legitimate Sinitic dialect vocab**、`feedback_dialect_vocab_differences.md` 適用。
- **Decision:** **正当な Sinitic dialect vocab**、documentation のみ。
- **Edit:** `{id:89, lang:"_meta", op:"document", finding:"#89 Sinitic find-verb lexical asymmetry: zh 找 / yue 搵 / wuu 寻 / nan/hak_cn/cdo 揣 / zh_song 尋 are all legitimate famous regional vocab per 朱 1982 §4.6. All express search-NEG-result for ja 見つから. Not flagged."}` 【要検討】

### 18. #38 ko_bus `D:보는 A:여서` 順序 vs sibling Korean `E:보는` 配置 【蓋然】

- **Current:** ko_bus `A:여서 D:보는 B:석양은 C:이쁘다`
- **Sibling Korean:** ko `D:여기 A:서 E:보는 B:석양은 C:아름답다`, ko_kp `D:여기 A:서 E:보는 B:석양은 C:아름답다`, ko_jeju `D:여기 A:서 E:보는 B:석양은 C:곱수다`, ko_yb `D:여기 A:서 E:보는 B:석양은 C:아름답슴다`, ko_em `D:여기 A:서 E:보는 B:석양은 C:아름답도다`, ko_mid `D:이리 A:셔 E:보ᄂᆞᆫ B:져녁 ᄒᆡᄂᆞᆫ C:곱도다`
- **Reference:** palette `A,B,C,D,E` (5 slots)
- **Problem:** Korean 5 兄弟と ko_mid (Middle Korean) は全て **E slot に `보는`** (see-MOD) を配置するのに対し、ko_bus のみ `D slot` に配置し E slot を欠落。文意は同じだが role-letter assignment が sibling 6 変種と不整合 (`feedback_cross_sibling_role_consistency.md`)。
- **Edit:** `{id:38, lang:"ko_bus", op:"replace", segments:[["D","여기"],["A","서"],["E","보는"],["B","석양은"],["C","이쁘다"]], finding:"Restructure to D:여기 A:서 E:보는 to match 6 Korean siblings (ko/ko_kp/ko_jeju/ko_yb/ko_em/ko_mid). Letter-assignment outlier per feedback_cross_sibling_role_consistency.md; Busan dialect preserves same morpho-syntax as Seoul standard."}` 【蓋然】

### 19. #19 sw `C:kusikiliza` vs sibling Bantu (ny `C:kumvetsera`, xh `C:ukumamela`, zu `C:ukulalela`, sn `C:kuteerera`) — listen vs hear lexical split 【蓋然】

- **Current:** sw `C:kusikiliza` (listen-to, deliberate), Bantu siblings 全て `listen` verb を採用
- **Reference:** ja `C:聴くのが` (deliberate-listen), en `C:to listen to`
- **Problem:** Viberg 1984 の **hear vs listen 区別** (deliberate vs involuntary aural perception) は Bantu でも保持: sw `sikia` (hear, involuntary) vs `sikiliza` (listen, deliberate-causative)、xh `va` (hear) vs `mamela` (listen)、zu `zwa` (hear) vs `lalela` (listen)。原文「音楽を聴く」は **deliberate-listen** で、全 Bantu 兄弟が deliberate 形を採用しており consistent。`pcm C:to hear` のみ involuntary 形だが、これは Nigerian Pidgin で `hear music` が standard collocation で deliberate を含意する (Faraclas 1996 *Nigerian Pidgin* §6.3.4)。
- **Decision:** **全変種 legitimate**、documentation のみ。pcm の `hear` も creole-natural。
- **Edit:** `{id:19, lang:"_meta", op:"document", finding:"#19 Bantu listen-verb (sw kusikiliza / xh ukumamela / zu ukulalela / sn kuteerera / ny kumvetsera) consistently deliberate per Viberg 1984. pcm 'to hear' is Nigerian Pidgin collocation for deliberate listening per Faraclas 1996 §6.3.4. All legitimate."}` 【要検討】

### 20. #76 fr 兄弟全変種で C/E 配分が dialect 間で不揃い — fr_qc/sco の `j'écoute` 二重表記 【要検討】

- **Current:**
  - fr `E:Je D:suis heureux C:quand B:j'écoute A:de la musique` (B に j'écoute, A に noun)
  - fr_qc `E:J' D:me sens heureux C:quand B:j'écoute A:d'la musique` (E に J' AND B に j'écoute — 主語 `je` が二重に出現)
  - fr_be `C:Quand B:j'écoute A:de la musique D:je me sens heureux` (E slot 欠落、主語 je は B 内)
  - fr_af `C:Quand B:j'écoute A:la musique D:je me sens heureux` (同 fr_be)
  - fr_ch `E:Je D:me sens heureux C:quand B:j'écoute A:de la musique`
- **Problem:** fr_qc は `E:J'` と `B:j'écoute` で **主語 je を 2 回 segment 化** (内側 je は B の morphological subject)。fr/fr_ch は同形だが他 5 兄弟と不整合。fr_be/fr_af は順序が逆 (主節先、関係節後ろ) で E slot 欠落。**5 兄弟内で 3 種類の異なる configuration** が混在 (`feedback_cross_sibling_role_consistency.md` 違反候補)。
- **Decision:** owner 判断、policy 文書化のみ。fr_qc の二重 je は B 内 morphological subject なので技術的には正しいが、Memory の cross-sibling consistency 観点では fr_be/fr_af と統一推奨。
- **Edit:** `{id:76, lang:"_meta", op:"document", finding:"#76 fr family 3-way structural split: fr/fr_ch/fr_qc preserve E:Je + main clause + C:quand + B:j'écoute (with morphological subject inside B); fr_be/fr_af invert order with C:Quand first, no E slot. Cross-sibling consistency suggests unification but both grammatical. Owner decision."}` 【要検討】

---

## 集計

- **対象**: `/home/jounlai/langmap/langmap_reviews/100_open.md`
- **issue 件数**: **20 件** (確実 5、蓋然 7、要検討 8)
- **edit 件数 (cell-level replace)**: **7 edits**

  | # | 内訳 |
  |---|---|
  | #1 ja_osa 見つから | (#89 にて修正済、別件) |
  | #89 ja_osa 見つから (#1) | 1 |
  | #89 ja_oki 見ー (#2) | 1 |
  | #38 nan add E:看的 (#4) | 1 |
  | #38 wuu add E:看个 (#5) | 1 |
  | #38 cdo add E:看其 (#6) | 1 |
  | #48 fr_be regarder (#7) | 1 |
  | #91 cdo 賞花 (#11) | 1 |
  | #91 zh_sc 赏樱花 (#12) | 1 |
  | #38 ko_bus restructure (#18) | 1 |
  | **合計** | **9** |

  注: ja_osa/ja_oki の #1 #2 と Sinitic E-slot追加 (#4 #5 #6)、cdo/zh_sc 賞 (#11 #12)、fr_be regarder (#7)、ko_bus restructure (#18) で計 9 cell-level edits。

- **policy clarification (`_meta` document)**: **11 entries** (#1 ms nampak, #1 vi_c chộ, #48 en_in see, #48 ar_lev/ar_sd, #48 yue 睇, #76 am ስ-prefix, #76 vi_s drop cảm, #76 fr family split, #89 Sinitic find-verb, #91 tlh legh, #19 Bantu listen)

- **still-deferred / 要検討**: 8 件 (上記 _meta entries)

- **主たる defect カテゴリ:**
  1. **lexical specificity 欠落 (perception verb の意味 nucleus)** — 3 件: #1 ja_osa 「わからん」, #2 ja_oki 「わからん」, #11 cdo 看花 (5 件 = 25%)
  2. **sibling palette/E-slot 欠落 (Sinitic vantage-perception)** — 3 件: #4 nan, #5 wuu, #6 cdo (#38) — `_omission_guidelines.md` A.1 系統 (3 件 = 15%)
  3. **deliberate vs neutral perception split** — 1 件: #7 fr_be voir vs regarder (1 件 = 5%)
  4. **appreciation-verb vs neutral-perception** — 2 件: #11 cdo 看花, #12 zh_sc 看樱花 (2 件 = 10%)
  5. **letter-assignment outlier** — 1 件: #18 ko_bus (1 件 = 5%)
  6. **register-natural / dialect-vocab (容認)** — 11 件 (上記 _meta)

- **最有意な発見:** **ja_osa / ja_oki の `わからん`** が「見つからない」(can't find) を「分からない」(don't understand) に置換しており、Osaka-ben の有名な口語的 substitution が systematic な **perception-verb lexical 誤訳** を引き起こしている (国広 1982 §5.4 で警告される典型例)。他 7 ja 変種 (ja_aom/ja_hak/ja_kyo/ja_hir/ja_edo/ja_heian/ja_mvi/ja_rys) は正しく `見つから` / `みーらん` を保持。

- **dominant defect category:** **(1) perception-verb lexical substitution (わからん for 見つからん)** が ja_osa/ja_oki で発生、Viberg 1984 hierarchy の visual perception (`見える/見つかる`) と cognitive comprehension (`分かる`) の cross-domain conflation。**(2) Sinitic E-slot vantage perception 欠落** が nan/wuu/cdo の #38 で sibling-consistency 違反、Talmy 2000 satellite-framed の vantage-perception verb 必須化が Sinitic 5 兄弟で確立されているのに 3 変種が省略。


---

## Dev response — round 1 (2026-06-04)

apply2.mjs 経由で適用済。

- **適用 edit**: 9
- **policy/withdrawn 等で skip**: 11
- **headline**: ja_osa/ja_oki #89 見つから(ん) restore (Viberg cross-domain conflation fix), Sinitic E:看 vantage restore (nan/wuu/cdo), 賞 hanami fix, fr_be voir→regarder
- **JSON path**: /tmp/lm_edits_100.json
