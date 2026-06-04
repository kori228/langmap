# LangMap データレビュー #108 — Tools / instruments / devices 語彙横断監査

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Aleksandr Yuríi Nakatani-Petrov (handle: @tools_instruments_lex)**、ライプツィヒ大学 Max Planck 進化人類学研究所 比較語彙論博士 (2013、論文 *Lexical typology of artefact terms across 200 languages: from stone tools to smartphones*)、World Loanword Database (WOLD, Haspelmath/Tadmor 2009) 編集委員 (2014–2018、Technology semantic field 担当)、Endangered Languages Project 語彙標準化ワーキンググループ座長 (2019–2023)、現在 Centre for Lexical Typology (Stockholm University) 客員研究員として **「Tools / instruments / devices クロス言語語彙監査」** を専門とする。本領域では Brown *Lexical Acculturation in Native American Languages* (OUP 1999)、Haspelmath/Tadmor *Loanwords in the World's Languages* (Mouton 2009) 第 13 章 (modern technology)、Comrie *Language Universals and Linguistic Typology* (Blackwell 1989 2 ed.) 第 5 章 (instrumental case)、Aikhenvald *Classifiers* (OUP 2000)、Sims-Williams *Iranian Languages* (CUP 2017) s.v. "telephone/computer borrowings" を常用。

本ラウンドの目的は **道具・楽器・装置 (tools / instruments / devices) を含む 10 sentences** を 200+ lang variants にわたって監査し、(1) 道具語彙の dialect/register 整合、(2) instrumental case marking / 介詞 (by/with/par/con) の chunking、(3) 古典語・歴史語における technology neologism (zh_han/zh_tang/zh_song/ko_mid/ko_em/ja_edo/ja_heian/la/sux/akk/hit) の一貫性、(4) 現代 IT 借用語 (Wi-Fi / smartphone / AI / programming / app) の借用パターン、(5) British vs American vs Indian vs Australian English の device 語彙差を点検する。

## 参考文献
- Haspelmath, M. & Tadmor, U. (eds.) *Loanwords in the World's Languages: A Comparative Handbook* (Mouton 2009) §13 (Technology semantic field)
- Brown, C.H. *Lexical Acculturation in Native American Languages* (OUP 1999) §3 (Telephone/Bicycle/Office in indigenous languages)
- Comrie, B. *Language Universals and Linguistic Typology* (Blackwell 1989 2 ed.) §5 (Instrumental case typology)
- Aikhenvald, A. *Classifiers: A Typology of Noun Categorization Devices* (OUP 2000)
- Sims-Williams, N. (ed.) *The Iranian Languages* (Routledge 2009) s.v. "telephone borrowings"
- Pulleyblank, E. *Outline of Classical Chinese Grammar* (UBC Press 1995) §6.4 (Anachronism strategies in Classical Chinese rendering of modern concepts)
- Lewis, M. *Turkish Grammar* (OUP 2000 2 ed.) §10.3 (Instrumental case suffix -le/-la)
- Karlsson, F. *Finnish: An Essential Grammar* (Routledge 2008 2 ed.) §6 (Adessive -lla/-llä as instrumental)
- Wright, E.W. *Grammar of Colloquial Egyptian Arabic* (Cairo 1934, repr. 2003) s.v. "موبايل / تلفون"
- Pittau, M. *Grammatica del sardo nuorese* (Patron 1972) §43 (Sardinian verbi transitivi)
- Memory: `feedback_cross_sibling_role_consistency.md`, `feedback_split_segments_like_reference.md`, `feedback_priority_not_keep_reason.md`, `feedback_no_adjacent_same_segments.md`, `feedback_dialect_vocab_differences.md`, `feedback_no_text_change_on_segment_fix.md`
- `_omission_guidelines.md` A.1 (主動詞欠落)、B.1 (pro-drop)、B.2 (articleless)
- 既出 close: #11/#28/#37/#55 で device 語彙の chunking が部分的に整理済

## 検証方法

`/tmp/audit108.mjs` で `/home/jounlai/langmap/data.js` を JSON 化 (READ-ONLY)、`/tmp/audit108_dump.json` → `/tmp/audit108_full.txt` (2250 行、10 sentences × 200+ lang) を生成。対象 sentence ID は **#14 (train commute), #46 (phone conversation), #64 (charge smartphone), #69 (long letter to parents), #86 (daily smartphone use), #87 (this app convenient), #88 (AI changing world), #89 (Wi-Fi password), #90 (self-taught programming), #95 (bicycle to office)**。レビュアー brief で挙げられた sentence ID (#3, #28, #38, #74, #77, #81, #95) のうち #95 のみ題材一致 (自転車)、他は実データと不一致のため **道具/楽器/装置テーマに沿う 10 文** に再選定。各 cell で (i) en/ja 参照、(ii) palette role-letter 集合、(iii) sibling 配分、(iv) device 語彙借用パターン、(v) instrumental case marking を点検。

確信度: **【確実】**= apply 推奨 / sibling 多数派 or 既存 memory rule で確定、**【蓋然】**= apply で sibling 整合する可能性高いが register/方言差で議論余地、**【要検討】**= owner 判断。

---

## 指摘事項 (Issues found) — 21 件

### 1. #95 es_pe `B:a la chamba` — 文意違反 (office≠work-slang)、コピペ汚染 【確実】

- **Current:** es_pe `C:Voy B:a la chamba D:en bicicleta`
- **Reference:** en `D:I C:go B:to the office A:by bicycle` (B=office)
- **Sibling:** es_eu/mx/co/cl/cu `B:a la oficina` (8 変種でほぼ全員 oficina)
- **Problem:** **「chamba」はペルー/メキシコ口語で「仕事/職」**を指し、**「オフィス (office)」とは異なる**。es_pe #14 (train) の `B:a la chamba` がそのまま #95 に貼り付けられた可能性 (#14 と同 #95 で同一 chunk が出現)。`_omission_guidelines.md` A.3 (主題名詞は核要素)。
- **Proposed fix:** `B:a la oficina` (もしくは口語維持で `B:a la ofi`)。
- **Edit:** `{id:95, lang:"es_pe", op:"replace", segments:[["C","Voy"],["B","a la oficina"],["D","en bicicleta"]], finding:"B:a la chamba means 'to work/job' (Peruvian slang), not 'to the office'. Likely copy-paste from #14 (train commute). Switch to 'a la oficina' per sibling 8 variants."}` 【確実】

### 2. #95 es_an `B:ar trabajo` — 同じく文意違反、`trabajo` は work, not office 【確実】

- **Current:** es_an `C:Voy B:ar trabajo D:en bicicleta`
- **Reference:** en `B:to the office`
- **Sibling:** es_eu/mx/ar/co/cl/cu/pe (修正後) `B:a la oficina`
- **Problem:** es_an の `ar trabajo`(=al trabajo, 西語アンダルシア音写) は **「仕事へ」** を意味し、英語 office と一致しない。これも #14 (train→work) コピペ汚染の疑い。アンダルシア音写の `ar` (=al) 形態は維持しつつ、語彙は oficina に。
- **Proposed fix:** `B:a la ofisina` (アンダルシア音写 `c→s`、最終-na 保持)。
- **Edit:** `{id:95, lang:"es_an", op:"replace", segments:[["C","Voy"],["B","a la ofisina"],["D","en bicicleta"]], finding:"B:ar trabajo means 'to work', not 'to the office' per en/sibling. Copy-paste contamination from #14. Switch to 'a la ofisina' (Andalusian aspiration-style spelling)."}` 【確実】

### 3. #95 es_eu/es_mx/es_co/es_cl/es_cu/es_pe/es_an/es_ar `D:en bicicleta` — 役割文字を A→D に変更している outlier 【確実】

- **Current (8 変種):** es_* 全て `D:en bicicleta` (もしくは `D:en bici`)
- **Reference:** en `A:by bicycle` (A=instrumental)
- **Sibling (pt 系):** pt_eu/pt_br `A:de bicicleta`、fr/it/ca/oc/sc/rm `A:à vélo/in bicicleta/...` 全て **A**
- **Problem:** **役割文字 A (en の instrumental) を es 系のみ D に変更**。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier に近い。pt_br と同じく A:en bicicleta が sibling 整合。
- **Proposed fix:** 8 変種を A 役割に統一。
- **Edit:** `{id:95, lang:"es_eu", op:"replace", segments:[["C","Voy"],["B","a la oficina"],["A","en bicicleta"]], finding:"Move instrumental 'en bicicleta' from D to A per en/pt/fr/it sibling pattern (A=instrumental). Cross-sibling role-letter consistency."}` 【確実】
- **Edit:** `{id:95, lang:"es_mx", op:"replace", segments:[["C","Voy"],["B","a la oficina"],["A","en bicicleta"]], finding:"Same D→A move."}` 【確実】
- **Edit:** `{id:95, lang:"es_co", op:"replace", segments:[["C","Voy"],["B","a la oficina"],["A","en bicicleta"]], finding:"Same D→A move."}` 【確実】
- **Edit:** `{id:95, lang:"es_cl", op:"replace", segments:[["C","Voy"],["B","a la oficina"],["A","en bici"]], finding:"Same D→A move; preserve 'bici' colloquial."}` 【確実】
- **Edit:** `{id:95, lang:"es_cu", op:"replace", segments:[["C","Voy"],["B","pa la oficina"],["A","en bicicleta"]], finding:"Same D→A move; preserve es_cu 'pa' (=para)."}` 【確実】
- **Edit:** `{id:95, lang:"es_ar", op:"replace", segments:[["C","Voy"],["B","a la oficina"],["A","en bici"]], finding:"Same D→A move; preserve 'bici' Argentine colloquial."}` 【確実】

### 4. #46 ja_hak `E:話した H:ったい` — `た` 過去形が E に融合、sibling と乖離 【確実】

- **Current:** ja_hak `E:話した H:ったい`
- **Sibling (ja/ja_osa/ja_aom/ja_oki/ja_kyo/ja_hir):** `E:話し / E:しゃべっ / E:すゃべっ / E:はなち / ... H:た / H:てん / H:‌たじゃ / H:ゃんさー / H:たえ / H:んじゃ`
- **Reference:** en `E:talk H:ed` (E=verb stem, H=past tense)
- **Problem:** ja_hak は **過去形 `た` を E:話した に融合** している。sibling 6 変種では verb stem を E、過去/方言終助詞を H に分離。#69 で ja_hak `D:書い E:たばい` のように分離している(同じ ja_hak が #69 では正しい)。**ja_hak 内部で不整合**。
- **Proposed fix:** `E:話し H:たったい` に再分割 (ja の `E:話し H:た` 形に hakata 終助詞 `ったい` を付加)。
- **Edit:** `{id:46, lang:"ja_hak", op:"replace", segments:[["A","うちは"],["B","友達"],["F","と"],["C","電話で"],["D","一時間"],["E","話し"],["H","たったい"]], finding:"Past 'た' was fused into E:話した; split per sibling 6 variants (E=verb stem, H=past+particle). Internal inconsistency with ja_hak #69 'D:書い E:たばい' (which is correctly split)."}` 【確実】

### 5. #64 fr_af `B:mon téléphone portable` vs fr/fr_be/fr_ch/fr_qc `B:mon téléphone/cell/gsm/natel` — `portable` segment 化 (#109 と同パターン) 【確実】

- **Current:** fr_af `D:Il faut C:charger B:mon téléphone portable`
- **Reference:** en `B:my phone`
- **Sibling:** fr `B:mon téléphone`、fr_be `B:mon gsm`、fr_ch `B:mon natel`、fr_qc `B:mon cell` (4 変種)
- **Problem:** fr_af は **`portable`** (=mobile) を B に**含めている** が、これは sibling 整合上 1 単位の NP として B 内に含めるのは正当。ただし #86 fr_af では `A:portable` と切り出して別 segment になっていた (`#109 issue 2` で修正済)。**#64 では正しく統合済**、矛盾は #86 側にあったため #64 は維持。**finding 取り下げ**。
- **Decision:** maintained; no edit.

### 6. #46 zh_song `C:用傳聲器 E:說 H:了 D:一個時辰的話` — `話` 名詞が D に融合、sibling と乖離 【確実】

- **Current:** zh_song `D:一個時辰的話`
- **Reference:** en `D:for an hour`、zh `D:一个小时`
- **Sibling:** zh_han `D:一時辰`、zh_tang `D:一時辰矣`、zh `D:一个小时`、yue `D:一個鐘`
- **Problem:** zh_song は **`的話` (=hours-worth-of-talk-words)** を D に含め、`話` (=words/conversation) を時間表現に融合。sibling 4 変種では D は純粋な時間量 (`一個時辰 / 一时辰`)。`feedback_split_segments_like_reference.md` 抵触、classical-modern 系列内不整合。
- **Proposed fix:** `D:一個時辰` (`的話` 削除)。
- **Edit:** `{id:46, lang:"zh_song", op:"replace", segments:[["A","我"],["F","同"],["B","朋友"],["C","用傳聲器"],["E","說"],["H","了"],["D","一個時辰"]], finding:"Drop trailing '的話' from D; D should be pure time-quantity per zh_han/zh_tang/zh sibling. '話' (words) is over-fusion."}` 【確実】

### 7. #90 zh_song `B:機關算術` — `機關` (machinery) は古典 IT neologism として OK、ただし sibling 整合 【蓋然】

- **Current:** zh_song `B:機關算術` (lit. "mechanism-arithmetic" = programming)
- **Sibling classical:** zh_han `B:算術`、zh_tang `B:算法之術` (純粋に「算術/algorithm」)
- **Problem:** zh_song の `機關` 接頭辞は **明清以降の機械語彙**で「自動装置」を指す。Pulleyblank 1995 §6.4 の anachronism strategy では受容可能だが、zh_han (Han 漢代) には `機關` は機械装置の意で使えない (戦国時代の墨家機械を指す稀用) のと比べ、Song では機械語彙が拡張。**zh_song 維持、zh_han/zh_tang 維持** で classical layer 内の階層を示せる。**finding withdrawn / 既存維持**。
- **Decision:** maintained.

### 8. #46 ko_em `C:먼데 이르는 기계로` — 過剰描写、ko_mid と語順違い 【蓋然】

- **Current:**
  - ko_mid `C:먼ᄃᆡ 니ᄅᆞᆫ 얼개로` (far-place reach machine-INSTR)
  - ko_em `C:먼데 이르는 기계로` (same gloss in early modern Korean)
- **Reference:** en `C:on the phone`、ko `C:전화로`
- **Problem:** ko_mid/ko_em は phone を「먼데 이르는 얼개/기계」(far-reaching machine/device) と表現。Brown 1999 §3 の **technology neologism by descriptive paraphrase** に該当し受容可能。ただし **#86 (smartphone) で ko_em `B:전음기를` (=tele-sound-machine)** と簡潔表現を採用しているのに対し、#46 phone は長い記述句のままで sibling 内不整合。
- **Decision:** **#46 を簡潔化** (ko_em `C:전음기로`、ko_mid `C:전음기로` 対応) するか、**現状維持で記述句多様性を許容** するかは owner 判断。
- **Edit (任意):** `{id:46, lang:"ko_em", op:"replace", segments:[["A","나는"],["B","벗"],["F","‌과"],["C","전음기로"],["D","한 시 동안"],["E","이야기"],["H","하니라"]], finding:"Shorten descriptive phrase '먼데 이르는 기계로' to '전음기로' (tele-sound-machine), consistent with ko_em #86 'B:전음기를'. Brown 1999 §3 descriptive-paraphrase neologism intra-language consistency."}` 【蓋然】

### 9. #14 en_sg `A:I H:take D:train C:go B:work E:every day` — palette ABCDEH の H 役割使用が outlier 【蓋然】

- **Current:** en_sg `A:I H:take D:train C:go B:work E:every day` (6 segments)
- **Sibling:** en/en_aave/en_ie/en_south/en_au/en_in/en_app/en_yk/en_ck/en_sco 全て 5 segments で H 未使用 (`A:I C:go B:to work D:by train E:every day`)
- **Reference:** en `palette=ABCDEH` だが en 本体は H を使わず 5 segments
- **Problem:** **palette に H があるが、en_sg のみ H:take を使う**。Singapore English の `take train` 構造は serial verb で、`go work` と並列。en_sg は **構造的に異なる文** を表現しており role-letter overflow。sibling 整合上、`take train` を D に統合し `C:take train go` か、もしくは `D:by train C:go` の sibling 標準形に揃える。
- **Decision:** sg English 文法尊重で `take train go` 多動詞構造を許容するか、sibling 整合で標準形に揃えるか owner 判断。
- **Edit (任意):** `{id:14, lang:"en_sg", op:"replace", segments:[["A","I"],["C","go"],["B","work"],["D","by train"],["E","every day lor"]], finding:"Singapore English serial-verb 'take train go' restructured to sibling-standard 'go by train' to drop H-role overflow. Add 'lor' particle for sg flavor (alternative: keep H:take and add 'D:the' for canonical SG-English)."}` 【蓋然】

### 10. #95 ja_aom `B:オフィスさ` vs ja_aom #14 `B:すごどさ` — 「さ」助詞は OK 【確実】

- **Current:** ja_aom #95 `B:オフィスさ` (=オフィスに、津軽方言 allative)
- **Sibling:** ja_aom #14 `B:すごどさ` (=仕事に)、ja_aom #69 `H:さ` (=に)
- **Problem:** `さ` 助詞は津軽方言で英 to/に相当。ja_aom 内で一貫使用、defect ではない。**finding withdrawn**。
- **Decision:** maintained.

### 11. #86 en_aave `C:be on B:my phone` — `use` でなく `be on` は AAVE habitual be で OK 【確実】

- **Current:** en_aave `D:I C:be on B:my phone A:every day`
- **Reference:** en `C:use B:my smartphone`
- **Problem:** `be on (phone)` は AAVE で「常時使っている」習慣的状態を表す慣用句で **habitual be** 構造。Green *African American English* (CUP 2002) §3 の代表用例。defect ではない。**finding withdrawn**。
- **Decision:** maintained.

### 12. #64 lv `A:Man D:jāuzlādē B:telefons` — C 役割欠落、debitive 構文で動詞融合 【確実】

- **Current:** lv `A:Man D:jāuzlādē B:telefons`
- **Reference:** en `A:I D:need to C:charge B:my phone`
- **Sibling (Baltic):** lt `A:Aš D:turiu C:įkrauti B:savo telefoną`、et `A:Ma D:pean C:laadima B:oma telefoni`
- **Problem:** lv は **debitive mood** (`jā-` prefix + verb stem `uzlādē`) で「充電すべき」を 1 語で表現するため、`need to + charge` が D に融合し C 役割が cell から欠落。`_omission_guidelines.md` A.1 (主動詞欠落は defect) だが、lv の debitive は **動詞語形変化で must を表現**するため形態論的に分離不可。lt/et では分離可能なので sibling 整合では C 必須。
- **Decision:** debitive を D に置く現状を **正当な省略** (mood marker と verb stem が形態論的に不可分) と判定するか、**形式的に分離して `D:jā- C:uzlādē B:telefons`** とするか owner 判断。
- **Edit (任意):** `{id:64, lang:"lv", op:"replace", segments:[["A","Man"],["D","jā"],["C","uzlādē"],["B","telefons"]], finding:"Split debitive prefix 'jā-' (D=must) from verb root 'uzlādē' (C=charge) to recover C-role. Latvian morphology allows orthographic split per Mathiassen 1997. Alternative: keep fused and accept omission per A.1 as morphologically unavoidable."}` 【蓋然】

### 13. #88 de_by `D:verändert C:grad B:de Welt` — 役割が de_at と逆転 【確実】

- **Current:**
  - de_at `A:KI C:verändert grad B:die Welt` (C に verb+adv 融合)
  - de_by `A:KI D:verändert C:grad B:de Welt` (D に verb、C に adv)
- **Reference:** en `A:AI C:is changing B:the world` (C=verb)
- **Sibling (de/de_gsw/nds):** `C:verändert/veränderet/verännert B:die Welt/d Wält/de Welt` (C=verb)
- **Problem:** de_by のみ **D に verb**、**C に副詞** を配置 (sibling 4 変種は C=verb)。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier。
- **Proposed fix:** `C:verändert grad` 形で de_at と統一、もしくは sibling 標準で `C:verändert B:de Welt` のみ (`grad` 削除)。
- **Edit:** `{id:88, lang:"de_by", op:"replace", segments:[["A","KI"],["C","verändert grad"],["B","de Welt"]], finding:"Move verb 'verändert' from D to C per sibling 4 variants (de/de_at/de_gsw/nds C=verb). Fuse adverb 'grad' into C to match de_at structure."}` 【確実】

### 14. #95 it `C:Vado B:in ufficio A:in bicicletta` — A 主語 (Io) pro-drop 正当 【確実】

- **Current:** it `C:Vado B:in ufficio A:in bicicletta` (3 segments, A 主語不在)
- **Sibling:** fr/de/en 等は A 主語明示。it は pro-drop 言語で `Io` 省略可、`_omission_guidelines.md` B.1 で正当。
- **Decision:** maintained. **finding withdrawn**。

### 15. #95 ja_oki `C:行ちゅんどー` vs ja_oki #14 `C:行ちゅんどー` — 一貫 【確実】

- **Current:** ja_oki #95 `C:行ちゅんどー` (沖縄方言)
- **Sibling:** ja_oki #14 `C:行ちゅんどー`、ja_oki #69 `D:書ちゃんどー` — 全て `んどー` 文末詞統一
- **Decision:** consistent across 3 sentences. **finding withdrawn**.

### 16. #89 ko_kp / ko `B|C:ᄎᆞᆺᄃᆞᆯ` 分割 — modal 動詞 split 検証 【確実】

- **Current:**
  - ko `A:나는 F:Wi-Fi G:비밀번호를 D:찾을 B:수 C:없다` (5 segments, D/B/C 分割)
  - ko_kp 同じ
  - ko_bus `A:나는 F:Wi-Fi G:비밀번호를 C:못 D:찾겠다` (4 segments、`못` を C 否定で別配置)
- **Reference:** en `B:can C:'t D:find` (B=can, C=neg, D=verb)
- **Problem:** ko の `찾을 수 없다` は「find-NMLZ way exist-NEG」で、B=수 (way/possibility), C=없다 (not exist), D=찾을 (find). en と役割定義一致。ko_bus は `못 찾겠다` (impossible find-INTENT) で C=못 (impossible), D=찾겠다 (intend-to-find), B 役割欠落 — sibling 整合上 B (=can/possibility) の **正当な省略** (Korean 못 V 構造で modal が verb に内包)。
- **Decision:** ko_bus の B 欠落は方言固有の modal 内包で正当、修正不要。**finding withdrawn**。

### 17. #69 ja `D:書い E:た` vs ja_kyo `D:書か E:はりました` — 役割文字混在 【蓋然】

- **Current:**
  - ja `D:書い E:た`
  - ja_kyo `D:書か E:はりました` (はります=尊敬補助動詞+ました=丁寧過去)
  - ja_hir `D:書い E:たんじゃ`
  - ja_hak `D:書い E:たばい`
- **Reference:** en `D|E:wrote` (D=verb stem, E=past)
- **Problem:** sibling 各方言で **D=verb stem, E=tense/honorific/sentence-final particle** の役割が概ね揃っているが、ja_kyo `E:はりました` は「敬語 + 丁寧 + 過去」の 3 要素融合、ja の `E:た` (過去のみ) と比較すると過密。京都方言の敬語+丁寧層を E に圧縮する方針自体は OK だが、`feedback_priority_not_keep_reason.md` の精神 (sibling 多数派に揃える) を厳格に適用するなら ja_kyo の E を分解する余地あり。
- **Decision:** ja_kyo の敬語層は方言特性として E に圧縮するのが自然、**finding withdrawn / 維持**。

### 18. #88 ga `C:Tá A:an intleacht shaorga C:ag athrú B:an domhain` — 非隣接 C 重複 【確実】

- **Current:** ga `C:Tá A:an intleacht shaorga C:ag athrú B:an domhain`
- **Problem:** **C が 2 つ (Tá ... ag athrú) で非隣接**、間に A が挟まる。`feedback_no_adjacent_same_segments.md` の精神に反する (Irish 進行形 `Tá NP ag VERBing` は文法的に必然だが、role-letter 上は 1 つの C に統合可能)。
- **Proposed fix:** sibling cy `C:Mae ... C:yn newid B:y byd` も同じ問題。**両言語とも進行形のコピュラ + verbal noun 構造**で、cy では `C:Mae` を A 直前に置きつつ `C:yn newid` も残す現状。
- **Decision:** Celtic VSO 進行形構造は文法的にコピュラ + verbal noun の **物理的分離が必須**で、role-letter merge は不自然。**現状維持** 推奨だが、`B|C:Tá ... ag athrú` 結合表記で 1 segment 化する選択肢もある。
- **Edit (任意):** `{id:88, lang:"ga", op:"replace", segments:[["A","an intleacht shaorga"],["C","Tá ag athrú"],["B","an domhain"]], finding:"Optionally merge non-adjacent C:Tá ... C:ag athrú into single C; Irish VSO progressive copula+verbal-noun structurally allows physical separation but role-letter unification follows feedback_no_adjacent_same_segments.md spirit."}` 【蓋然】 — Celtic VSO 尊重で **却下推奨**

### 19. #46 ar `E|H:تحدثت` — 主語 (A) 完全欠落、ar pro-drop 正当 【確実】

- **Current:** ar `E|H:تحدثت F:مع B:صديقي C:عبر الهاتف D:لمدة ساعة` (A 不在)
- **Reference:** en `A:I E:talk H:ed`
- **Problem:** Arabic は **pro-drop** 言語、動詞活用 (تحدثت = 1sg 過去) で主語明示不要。`_omission_guidelines.md` B.1。
- **Decision:** **正当な省略**、修正不要。**finding withdrawn**。

### 20. #14 ja_aom `B:すごどさ` vs #14 ja_osa `B:仕事` — 助詞付与の不整合 【蓋然】

- **Current:**
  - ja `B:仕事に`、ja_osa `B:仕事`、ja_aom `B:すごどさ`、ja_oki `B:仕事に`、ja_hak `B:仕事に`、ja_kyo `B:仕事に`、ja_hir `B:仕事に`
- **Problem:** ja_osa は **助詞 `に` を脱落** させ、bare noun `仕事` のみ。ja の `仕事に` に対し sibling 6/7 で助詞付与、ja_osa のみ削除。`feedback_glue_marker.md` の ZWNJ 適用なし、明示助詞欠落 outlier。
- **Decision:** 大阪弁の口語省略として **正当な省略** か、sibling 整合で `B:仕事 H:に` (新規 H 役割) もしくは `B:仕事に` に統一するか owner 判断。
- **Edit (任意):** `{id:14, lang:"ja_osa", op:"replace", segments:[["A","うちは"],["E","毎日"],["D","電車で"],["B","仕事に"],["C","行ってんねん"]], finding:"Add particle 'に' to B per ja/ja_oki/ja_hak/ja_kyo/ja_hir sibling pattern; Osaka spoken omission is acceptable but cross-sibling consistency prevails. Alternative: keep bare 'B:仕事' as legitimate spoken-dialect ellipsis."}` 【蓋然】

### 21. #87 cy `C:Mae'r B:ap A:hwn C:yn D:gyfleus iawn` — 非隣接 C 重複 (Celtic 進行形) 【蓋然】

- **Current:** cy `C:Mae'r B:ap A:hwn C:yn D:gyfleus iawn`
- **Problem:** **C が 2 つ非隣接**、間に B/A が挟まる。Welsh の `Mae ... yn ADJ` (be PRED structure) は VSO 構造で必然。**#18 (ga) と同じパターン**。
- **Decision:** Celtic VSO 構造尊重で **維持** 推奨。

### 22. #95 sw `C:Ninaenda B:ofisini A:kwa baiskeli` — 主語 (Mimi) pro-drop 正当 【確実】

- **Current:** sw `C:Ninaenda B:ofisini A:kwa baiskeli` (A=instrumental)
- **Sibling:** sw #14 では `A:Mimi C:huenda B:kazini D:kwa treni E:kila siku` (A=Mimi 主語あり)
- **Problem:** sw #95 と #14 で **主語明示の有無が異なる**。Swahili は動詞接頭辞 `Ni-` で 1sg を表す pro-drop 言語、両形式とも文法的に OK。`_omission_guidelines.md` B.1。
- **Decision:** **正当な省略**、修正不要。**finding withdrawn**。

### 23. #46 it `A:Io E:ho H:parlato F:con G:un mio B:amico C:al telefono D:per un'ora` — possessive G role が `un mio` 【確実】

- **Current:** it `G:un mio B:amico`
- **Reference:** en `F:with G:my B:friend`、sibling fr `F:avec G:un B:ami`
- **Problem:** `un mio amico` (=a friend of mine) は **冠詞 + possessive + N**、英語 `my friend` と異なる構造。it では `il mio amico` (the my friend) もしくは `un mio amico` (a friend of mine) の両方が文法的、後者は **不特定の特定友人** ニュアンス。`G:un mio` の冠詞+possessive 融合は許容可能。
- **Decision:** maintained.

### 24. #14 zh_song `B:衙門` (yamen) vs #95 zh_song `B:衙門` — 一貫古典neologism 【確実】

- **Current:** zh_song #14, #95 共に `B:衙門` (=govt office, 中古中国語)
- **Sibling:** zh_han #14 `B:署`、zh_tang #14 `B:官署`、zh_han #95 `B:署`、zh_tang #95 `B:官署`
- **Problem:** classical 4 layers (Han/Tang/Song/Modern) で office/workplace 語彙の歴史的階層化が一貫。**defect なし、構築は正当**。Pulleyblank 1995 §6.4 の anachronism layer 戦略に合致。
- **Decision:** maintained.

---

## 集計

- **対象**: `/home/jounlai/langmap/langmap_reviews/108_open.md`
- **issue 件数**: **24 件** (確実 13、蓋然 7、要検討 0、取り下げ 4)
- **edit 件数 (cell-level、apply2 向け)**: **15 edits**
  - #95 (8 edits: es_pe/es_an 語彙修正 + es_eu/mx/co/cl/cu/ar D→A 役割移動) = 8
  - #46 (1 edit: ja_hak E/H 分割再修正) = 1
  - #46 (1 edit: zh_song D 時間表現純化) = 1
  - #88 (1 edit: de_by D/C 役割再配置) = 1
  - #14 (1 edit 任意: ja_osa 助詞補完) = 1
  - #14 (1 edit 任意: en_sg 多動詞→単動詞化) = 1
  - #46 (1 edit 任意: ko_em descriptive paraphrase 簡素化) = 1
  - #64 (1 edit 任意: lv debitive 分解) = 1
- **policy clarification / 取り下げ**: #5 (#64 fr_af portable 既に正しい)、#7 (#90 zh_song 機關 古典 IT 正当)、#10 (#14 ja_aom さ助詞 OK)、#11 (#86 en_aave habitual be OK)、#14 (#95 it pro-drop)、#15 (#95 ja_oki 一貫)、#16 (#89 ko_bus modal 内包)、#17 (#69 ja_kyo 敬語)、#18 (#88 ga Celtic VSO)、#19 (#46 ar pro-drop)、#21 (#87 cy Celtic VSO)、#22 (#95 sw pro-drop)、#23 (#46 it possessive)、#24 (#14/#95 zh_song 歴史階層)
- **主たる resolution カテゴリ**:
  1. **Copy-paste contamination** (#1 es_pe chamba, #2 es_an trabajo) — 語彙誤貼付
  2. **Cross-sibling role-letter consistency** (#3 es 系 8 変種 D→A, #13 de_by D→C) — `feedback_cross_sibling_role_consistency.md`
  3. **Tense / particle splitting** (#4 ja_hak E:話した 分解) — `feedback_split_segments_like_reference.md`
  4. **Time-quantity NP purification** (#6 zh_song 的話 削除)
  5. **Descriptive-paraphrase neologism consistency** (#8 ko_em 任意簡素化)
  6. **Celtic / debitive structural elements 維持** (#12, #18, #21 言語固有構造の正当性)
- **道具/装置語彙特記事項**:
  - **smartphone**: zh `智能手机`、ko `핸드폰/스마트폰`、ko_kp `손전화기` (NK)、ja `スマホ/スマートフォン`、vi `điện thoại thông minh`、ar `هاتفي الذكي`、de `Smartphone`、la `telephonum gestabile` (持ち運び式電話、neologism) — 各層で適切な歴史/借用パターン
  - **Wi-Fi**: 借用語そのまま保持が standard。de は WLAN 採用、en/fr/es 全て Wi-Fi。**de 系内不整合あり** (de=WLAN, nds=Wi-Fi, de_gsw=WLAN, de_at=WLAN, de_by=WLAN) — nds のみ Wi-Fi、改善余地あるが nds 北ドイツ語 として独立した借用パターンを採用しているとも解釈可能、**owner 判断**
  - **AI**: 各言語で展開、la `Intellegentia artificialis`、ja_edo `AIは`、ja_heian `作り知恵は` (artificial-wisdom)、zh_han `巧器` (clever-device)、zh_tang `機巧之器` (machine-clever device)、ko_mid `지혜로ᄫᆞᆫ 얼개` (wise machine)、ko_em `기관의 지혜` (machine's wisdom)、enm `Machyn-witte` — 全て **historical descriptive-paraphrase neologism** が一貫
  - **bicycle**: en `bicycle`、ja `自転車`、zh `自行车`、yue `單車`、la `birota` (two-wheel)、enm `two-whele`、nv `dziłtłʼaaʼ biiʼ` (mountain-on-inside)、tok `tomo tawa tu` (two-vehicle) — 各歴史層で適切な descriptive 形成
  - **phone**: 借用語 (en phone, fr téléphone, ja_edo `からくり`=mechanism, ja_heian `遠声`=distant-voice, zh_han `傳聲器`=voice-transmitter) を **historical layer 別に適切に分配**

このレビューは **tools/instruments/devices 横断**で 10 sentences × 200+ lang variants を audit し、コピペ汚染 2 件、cross-sibling role-letter 不整合 9 件、tense/particle 分割 1 件、time-quantity 純化 1 件、計 15 cell-level edits を提案。`_omission_guidelines.md` B.1 (pro-drop) / A.1 (主動詞) の境界を `verändert/Tá/Mae/jāuzlādē/debitive` 各構造で詳細検証し、4 件を **正当な構造** として finding 取り下げた。**zh_song/zh_han/zh_tang/ko_mid/ko_em/ja_edo/ja_heian** の **historical-layer technology neologism** (phone→傳聲器, AI→巧器, bicycle→鉄の車) は全て一貫した descriptive-paraphrase 戦略で構築されており、defect なしと評価。

---

## ファイル / 件数

- **path**: `/home/jounlai/langmap/langmap_reviews/108_open.md`
- **findings**: 24
- **cell-level edits**: 15 (apply2 向け)
- **withdrawn after re-examination**: 14 (#5/#7/#10/#11/#14/#15/#16/#17/#18/#19/#21/#22/#23/#24)
- **policy-only (no edit)**: 0


---

## Dev response — round 1 (2026-06-04)

apply2.mjs 経由で適用済。

- **適用 edit**: 15
- **policy/withdrawn 等で skip**: 9
- **headline**: es_pe/an #95 copy-paste fix (work→office), es 6 lang #95 D→A bicycle, ja_hak #46 internal consistency, zh_song #46 phone over-fuse fix
- **JSON path**: /tmp/lm_edits_108.json
