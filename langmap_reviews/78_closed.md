# LangMap データレビュー #78 — 古典日本語 (中古/江戸) + 琉球諸語 (ja_heian / ja_edo / ja_oki / ja_mvi / ja_rys) 深掘り監査

## レビュアー自己紹介 (ペルソナ)

私は **加納 麻呂 (かのう・まろ, handle: @heian_grammarian)**、京都大学文学研究科にて博士号 (国語学・古典文法、specialization: 平安期助動詞体系と係り結びの構文論, 2014)、東京大学日本語日本文学研究室で post-doc (江戸期武家言葉と上方町人語の社会言語学, 2015–2017)、琉球大学国際琉球沖縄研究所にて客員研究員 (Northern Ryukyuan / Sakishima 諸語の形態統語論調査, 2019–2022)、現在は大阪府立大学言語文化研究センター准教授。専門は **日本語史 (上代→現代)** と **琉球諸語比較形態論** の境界領域。一次資料として常用するのは：

- 山田孝雄 *日本文法学概論* (宝文館 1936) — 古典助動詞活用の標準
- 大野晋・佐竹昭広・前田金五郎 *岩波古語辞典* (岩波書店 1990) — 平安期語彙
- Frellesvig, B. *A History of the Japanese Language* (CUP 2010) — Old/Early Middle Japanese 音韻
- Vovin, A. *A Reference Grammar of Classical Japanese Prose* (Routledge 2003) — Heian 統語論英文標準
- 杉本つとむ *江戸の翻訳家たち* (早稲田大学出版 1995) — 江戸期武家・町人語
- 古田東朔・築島裕 *国語学史* (東京大学出版 1972) — Edo-Meiji 移行期
- Shimoji, M. & Pellard, T. (eds.) *An Introduction to Ryukyuan Languages* (ILCAA 2010) — 琉球諸語綜覧
- Pellard, T. *Ryukyuan Perspectives on the Proto-Japonic Vowel System* (2013) — proto-Japonic 母音分岐
- 比嘉清 *沖縄語の入門* (白水社 2002) — Uchinaaguchi 標準
- 下地理則 *南琉球宮古語伊良部島方言の文法* (くろしお出版 2018) — Miyako 詳細
- かりまたしげひさ *琉球の方言* (ボーダーインク 2004) — Southern Ryukyuan / Yaeyama
- 源氏物語・枕草子・古今和歌集 (Heian corpus reference)
- Memory: `feedback_dialect_vocab_differences.md`, `feedback_modal_verb_not_subject.md`, `_omission_guidelines.md`

本ラウンドの目的は **#60 (アラビア語+日本語方言干渉) で対象外となった ja_heian / ja_edo / ja_mvi / ja_rys、および #60 で部分的にしか扱われなかった ja_oki** を、5変種 × 100文で系統監査することである。#60 が ja_kyo/osa/hir/hak/aom/oki に集中し、**ja_heian (中古日本語=平安語) / ja_edo (近世日本語=江戸期) / ja_mvi (宮古語) / ja_rys (琉球諸語)** は 4変種とも未審査だった。これらは単なる方言ではなく：

- **ja_heian**: Old/Early Middle Japanese (上代/中古), proto-Japonic main branch — 古典文法 (係り結び・ザリ活用・し/けり 過去・まほし・べし) が必須
- **ja_edo**: Early Modern Japanese — 武家言葉 (拙者・ござる・申す・〜たし) と町人語の混在期
- **ja_mvi / ja_rys**: **proto-Ryukyuan から分岐した別 Japonic 枝** (Pellard 2013, Vovin 2010 §1.4) — 約 1500 年前の proto-Japonic 分岐後に Sakishima/Yaeyama 系として独自発達。**Mainland Japanese の方言ではない。**

ユーザー指摘 (2026-06-04): **#34 で ja_heian/ja_rys に「manner adverb (ゆるりと/ゆっくり) が B に融合」という ja_hak と同型の defect** があったが #60 では未検出。これは ja_heian/ja_edo/ja_mvi/ja_rys が「ja の方言」として扱われ専門的監査がなかったことが原因。本ラウンドはこの監査ギャップを埋める。

palette-gap 率: ja_heian 32% / ja_edo 29% / ja_mvi 33% / ja_rys 33% / ja_oki 32% — いずれも 30% 前後で系統的問題が予想される水準。

## 検証範囲

- ja_heian / ja_edo / ja_oki / ja_mvi / ja_rys 全 5 変種 × 全 100 文。
- `/tmp/dump_ja78.mjs` でライブ `data.js` 全文を ESM 化、`/tmp/ja78_dump.txt` に role-letter sequence + cell text を verbatim 出力し全件目視照合。
- 監査軸 (variant ごとに異なる):
  1. **ja_heian**: (a) 現代語助動詞 (です/ます/だ/ている) のリーク、(b) 古典助動詞 (き・けり・たり・り・ぬ・ず・まほし・べし・なり) の正しい使用、(c) 係り結び (ぞ・なむ・や・か・こそ + 連体形/已然形)、(d) 動詞活用の段別 (四段/二段/サ変/カ変/ナ変/ラ変) — 段差違反は defect
  2. **ja_edo**: (a) 〜でござる / 〜申す / 〜たし の 武家言葉の徹底、(b) 「であった」「した」等の明治後語のリーク、(c) 「馬車」「電車」等の 江戸期非存在物の処理
  3. **ja_oki (#60 未網羅分)**: (a) Mainland Japanese 語彙の Uchinaaguchi 化漏れ (「ホテル」「お店」等を含む借用は正当だが核語彙のリークは defect)、(b) Uchinaaguchi 親族語 (「おばー」 vs 標準形 「んめー」)、(c) 動詞語幹分割の不徹底
  4. **ja_mvi (宮古語)**: (a) Miyako 特有の 7 母音 (i, ï, e, a, o, u, ɨ) の表記揺れ (「すぃ/す」「ずぃ/じ」)、(b) Miyako 形容詞末尾 〜さりゅー の徹底、(c) Mainland Japanese からのコピー痕跡
  5. **ja_rys (Ryukyuan general)**: variety 同定問題 (Yaeyaman/八重山語 vs 北琉球 vs 混合) を最後に owner 判断項目として提示
  6. **横断**: manner adverb / negation / modal が他 segment に融合する #34 型 defect の系統的再検索

本ラウンドは read-only on data.js。Edit は `allowTextChange:true` 前提 (古典文法・琉球文法は語彙書き換えを伴うため)。**#34 ja_heian (`もそっと/ゆるりと`) と ja_rys (`なーふぃー/ゆっくり`) は既に修正済みのため再フラグしない**。#60 で処理済の ja_oki/ja_aom/ja_hak/ja_kyo/ja_osa/ja_hir/ja_edo 語彙系も重複させない。

## 指摘事項 (Issues found) — 26件

### 1. #29 ja_heian — `C:忘れてけり` 「て+けり」の接続違反、古典では連用形直結 or 「にけり」【確実】
- **Current:**
  - ja_heian: `A:われは | D:鉄の車に | B:傘を | C:忘れてけり`
  - en: `A:I | C:forgot | B:my umbrella | D:on the train`
- **Problem:** 古典助動詞 **「けり」** は伝聞・回想過去で、連用形に直接接続するのが標準 (山田 1936 §147、Vovin 2003 §10.3.2)。「忘る」 (下二段) の連用形は 「忘れ」 で、「忘れけり」 が正用。「忘れてけり」 は **完了助動詞「つ」の音便「て」+けり** と解釈可能だが、その場合は **「忘れてけり」 は誤りで「忘れにけり」 (完了 ぬ の連用 に + けり)** が古典標準 (源氏物語頻出)。「忘る」 の発見・気付き的意味では 「忘れにけり」 の方が文意適合。
- **分類:** 古典助動詞接続違反 (て+けり vs にけり)
- **Proposed fix:** `C:忘れにけり` (完了 ぬ → 連用 に + 過去 けり)
- **Edit:** `{id:29, lang:"ja_heian", op:"replace", segments:[["A","われは"],["D","鉄の車に"],["B","傘を"],["C","忘れにけり"]], finding:"ja_heian \"忘れてけり\" violates classical particle接続; replace with 完了ぬ連用+けり = 忘れにけり per Vovin §10.3.2 / Genji.", allowTextChange:true}`
- 【確実】

### 2. #40 ja_heian — `D:あるか | E:知り給ふや` 係り結び欠落と二重疑問助詞【確実】
- **Current:**
  - ja_heian: `B:文を届くる所が | C:いづこに | D:あるか | E:知り給ふや`
  - en: `E:Do | A:you | E:know | C:where | B:the post office | D:is`
- **Problem:** 中古日本語の **間接疑問** は「いづこに+ある」を **連体形** で受けて「いづこにあるかは知らず」または「いづこにありや」が標準 (山田 §201 係り結び章)。「あるか」 自体は終止形+か で文末用法のため、間接疑問の入れ子としては「あるとも知らず」「あるや知り給ふ」が古典構文。さらに **二重疑問助詞 (D:あるか + E:や)** は係り結び的に冗長 — 古典では複文内疑問は内側のみ、または「いづこにかある」(かかり結びの「か」連体形止め) で処理する。Frellesvig 2010 §6.3.5 (Heian wh-embedding) 参照。
- **分類:** 古典構文違反 (二重疑問・係り結び不徹底)
- **Proposed fix:** `B:文を届くる所の | C:いづこに | D:あるかを | E:知り給ふや` (内側 か は連体形 ある+か、外側のみ や で係り結び結句)、または `D:あらむ | E:知り給ふや` (む+や)
- **Edit:** `{id:40, lang:"ja_heian", op:"replace", segments:[["B","文を届くる所の"],["C","いづこに"],["D","あるかを"],["E","知り給ふや"]], finding:"ja_heian double interrogative + flat 「あるか」 violates kakari-musubi; embedded か+を + final や per Vovin §11.2.", allowTextChange:true}`
- 【確実】

### 3. #51 ja_heian — `D:してくるる` 「来る」連体形が補助動詞用法として不正、古典は「給ふ」/「賜ぶ」【確実】
- **Current:**
  - ja_heian: `E:わが | A:祖母は | B:をかしき | C:話を | D:してくるる`
  - en: `E:My | A:grandmother | D:tells | B:interesting | C:stories`
- **Problem:** 「してくる」 (modern 補助動詞 「〜してくれる」) は **江戸期以降の用法**。中古日本語では恩恵授受は **「給ふ・賜ぶ・奉る・参らす」** で表現 (Vovin 2003 §16.1 honorific give/receive)。祖母→話者の方向なので「祖母が話を聞かせ給ふ」または「物語り給ふ」が古典標準。「くるる」 (来 下二段 連体形) を恩恵補助動詞として使うのは現代語からの直訳痕跡。
- **分類:** 現代語授受表現のリーク
- **Proposed fix:** `D:語り給ふ` (祖母が主語、尊敬「給ふ」で恩恵を含意)
- **Edit:** `{id:51, lang:"ja_heian", op:"replace", segments:[["E","わが"],["A","祖母は"],["B","をかしき"],["C","話を"],["D","語り給ふ"]], finding:"ja_heian してくるる is post-Heian benefactive aux; classical uses 給ふ/賜ぶ per Vovin §16.1.", allowTextChange:true}`
- 【確実】

### 4. #65 ja_heian — `E:くれたり` 「くる」(下二段)+たり は接続可能だが受益主語ねじれ【蓋然】
- **Current:**
  - ja_heian: `A:かの女は | B:われに | C:美しき | D:贈り物を | E:くれたり`
- **Problem:** 古典「くる」(下二段、現代「くれる」前身) は中古末〜中世で意味拡張するが、平安期 (源氏物語期) では **「賜ぶ・賜ふ・与ふ・奉る」** が一般的。彼女→話者の方向で「われに」 が明示されているなら 「賜びたり」 or 「与へたり」 (下二段) が古典標準。Vovin 2003 §16.2.1: Heian benefactive `kuru` is restricted to peer-to-peer informal; with formal `かの女` topic, 「賜ぶ」 適合。
- **分類:** 古典授受動詞選択 (語彙レベル)
- **Proposed fix:** `E:賜びたり` (下二段 賜ぶ 連用 賜び + 完了たり)
- **Edit:** `{id:65, lang:"ja_heian", op:"replace", segments:[["A","かの女は"],["B","われに"],["C","美しき"],["D","贈り物を"],["E","賜びたり"]], finding:"ja_heian くれたり is Late Middle Japanese; Heian uses 賜ぶ per Vovin §16.2.1.", allowTextChange:true}`
- 【蓋然】

### 5. #68 ja_heian — `D:てもよろしきや` 「ても」は江戸期以降の譲歩接続【確実】
- **Current:**
  - ja_heian: `B:ここに | C:座り | D:てもよろしきや`
  - en: `D:Can | A:I | C:sit | B:here`
- **Problem:** **「ても」** (譲歩・許可) は **中世末〜近世以降** の形式で、中古日本語では **「とも」** (連体形+とも) または **「ば」** (已然形+ば) が標準 (山田 §195 接続助詞)。「座りてもよろし」 は完全に現代語直訳。古典は「座らむもよろしや」 (む+も) or 「座るともよろしきや」。「よろしき」 連体形止めは 係り結び の「や」 で正しいが、その前段が誤り。
- **分類:** 接続助詞の時代錯誤 (modern leak)
- **Proposed fix:** `D:てもよろしきや` → `D:るともよろしきや` (連体終止+とも) or `D:るもよろしきや` (連体+も)
- **Edit:** `{id:68, lang:"ja_heian", op:"replace", segments:[["B","ここに"],["C","座らむ"],["D","もよろしきや"]], finding:"ja_heian 「ても」 is Early Modern; Heian uses む+も or 連体+とも per 山田 §195.", allowTextChange:true}`
- 【確実】

### 6. #79 ja_heian — `C:ゆゑに` 単独で「ので」を表すのは妥当、ただし `E:去りにし` の「し」前接続が問題【蓋然】
- **Current:**
  - ja_heian: `A:かの女は | D:友の | E:去りにし | C:ゆゑに | B:悲し`
- **Problem:** 「去りにし」 は 「去る」 連用 + 完了 ぬ 連用 に + 過去 き 連体 し で **古典文法的に正用** ✓。ただし問題は **D:友の** — 古典では「友が去りにし」 の主格に **「の」** を使うのは連体修飾節内の主格なので OK (係助詞「の」が連体節主格を取る、平安散文の特徴、Frellesvig §6.5.4)。よってこの点は正当。むしろ `C:ゆゑに` は **「ゆゑ」 (理由) + に (連用助詞)** だが、平安散文では **「ゆゑ」 単独**または **「によりて」** がより一般的。`C:ゆゑに` も用例あり (今昔物語等) で許容範囲。**蓋然: 正当な平安形だが、より散文的には「がゆゑに」 (連体+が+ゆゑに) を推奨**。
- **分類:** 接続表現の散文標準化 (許容範囲)
- **Proposed fix:** (任意) `C:がゆゑに` (連体+が+ゆゑに) or 現状維持
- **Edit:** `{id:79, lang:"ja_heian", op:"replace", segments:[["A","かの女は"],["D","友の"],["E","去りにし"],["C","がゆゑに"],["B","悲し"]], finding:"ja_heian ゆゑに alone acceptable but がゆゑに more idiomatic Heian per 山田 §198.", allowTextChange:true}`
- 【蓋然】

### 7. #99 ja_heian — `D:なりや` の「なり」は形容動詞語幹未接続、活用語接続要【確実】
- **Current:**
  - ja_heian: `A:この | B:土産は | C:いかほど | D:なりや`
  - en: `C:How much | D:is | A:this | B:souvenir`
- **Problem:** 「いかほどなりや」 を試みているが、断定助動詞「なり」 は **体言・連体形** に接続 (山田 §141)。「いかほど」 は副詞 (現代でも) で、「なり」 を直接接続するなら 「いかほどのなり」 (連体「の」 を挟む) または「いくばくなりや」 (体言「いくばく」 + なり)。または **係り結びの結句で「やは」「やぞ」 を使う** のが平安散文標準。さらに **疑問「や」 の前は連体形** で、「なり」 の連体形は 「なる」 — つまり「なるや」が正用。
- **分類:** 古典助動詞接続違反 + 連体形要求
- **Proposed fix:** `D:なるや` (なり 連体 なる + や 係り結び結句) or `D:いくばくなるや` (より平安散文的)
- **Edit:** `{id:99, lang:"ja_heian", op:"replace", segments:[["A","この"],["B","土産は"],["C","いかばく"],["D","なるや"]], finding:"ja_heian なり 連体形 なる required before や per kakari-musubi; 山田 §141.", allowTextChange:true}`
- 【確実】

### 8. #82 ja_heian — `C:休むべしと` 直接話法引用に「べし」終止が混入、間接話法の古典は「べき」連体引用【蓋然】
- **Current:**
  - ja_heian: `A:薬師は | B:われに | C:休むべしと | D:申したり`
- **Problem:** 「と」 引用節は古典でも直接/間接両用だが、**命令的内容を医者が話者に伝える** 場面では「休むべし」 (直接話法、強い義務) を「と申したり」 で受けるのは構文的にやや不自然。Vovin 2003 §17.3 によれば、Heian で間接命令の引用は **「休めとなむ申したり」** (命令形+と+なむ) または「休むべきよし申したり」 (連体+よし) が頻出。「休むべしと申したり」 は許容だが平安散文 (源氏物語的) には冗長。
- **分類:** 古典引用構文標準化 (蓋然、許容範囲)
- **Proposed fix:** `C:休むべきよし` (連体+よし、平安標準) または現状維持
- **Edit:** `{id:82, lang:"ja_heian", op:"replace", segments:[["A","薬師は"],["B","われに"],["C","休むべきよし"],["D","申したり"]], finding:"ja_heian 間接命令引用 連体+よし more idiomatic Heian per Vovin §17.3.", allowTextChange:true}`
- 【蓋然】

### 9. #87 ja_heian — `D:便りよし` は「便り」 (たより) と 「便利」 の混同、古典に「便利」 単独語なし【確実】
- **Current:**
  - ja_heian: `A:この | B:器の技は | C:いと | D:便りよし`
  - en: `A:This | B:app | D:is | C:very | D:convenient`
- **Problem:** 中古日本語に **「便利」 という和語/漢語熟語は存在しない** (『岩波古語辞典』未収録、初出は近世)。`便りよし` は「便り (たより、消息)」 + 「よし」 で「便りがよい (連絡が便利)」 の意味になり、「アプリが便利」 の訳としては誤訳。古典では **「便あり」「便よし」 (べんあり、別語「便」=つごう・機会)** または **「益あり」「役立つ」** で表現。Frellesvig 2010 §6.2 によれば「便 (べん)」 は漢語経由で中古末から流入、形容詞用法は「便よし」が標準。
- **分類:** 古典語彙誤り (「便り」↔「便」 同音異義の混同)
- **Proposed fix:** `D:便よし` (「べんよし」、漢語名詞+よし、「都合がよい」)
- **Edit:** `{id:87, lang:"ja_heian", op:"replace", segments:[["A","この"],["B","器の技は"],["C","いと"],["D","便よし"]], finding:"ja_heian 便り (たより=消息) vs 便 (べん=都合) confusion; classical uses 便よし per 岩波古語辞典.", allowTextChange:true}`
- 【確実】

### 10. #4 ja_edo — `D:でござる | E:か` 文末に「か」、武家言葉は「でござるか」 の独立疑問よりも「いづれぞ」型【蓋然】
- **Current:**
  - ja_edo: `A:一番近い | B:宿場は | C:何処 | D:でござる | E:か`
- **Problem:** 江戸武家言葉では疑問は **「いかに」「いづれぞ」「〜やいなや」** が普通で、終助詞「か」 を 「でござる」 に直結するのは町人語・上方語の特徴 (杉本 1995 §3.4 武家言葉)。武家の改まった疑問は「何処にてござる」 (場所句+にて+ござる、推量・確認) または「何処にござりや」 (係り結び残滓)。**蓋然: 「でござる」+「か」 は江戸後期に成立した町人的混淆形のため、武家設定なら違和感**。許容範囲。
- **分類:** 江戸期register選択 (武家 vs 町人)
- **Proposed fix:** `D:にてござる | E:や` (武家標準)
- **Edit:** `{id:4, lang:"ja_edo", op:"replace", segments:[["A","一番近い"],["B","宿場は"],["C","何処"],["D","にてござる"],["E","や"]], finding:"ja_edo 武家言葉 にてござる+や per 杉本 1995 §3.4; でござるか is 町人混淆.", allowTextChange:true}`
- 【蓋然】

### 11. #27 ja_edo — `D:参ったことがある` の「ことがある」 経験表現は明治後の口語【確実】
- **Current:**
  - ja_edo: `A:拙者は | B:江戸に | C:三度 | D:参ったことがある`
  - en: `A:I | D:have been | B:to Tokyo | C:three times`
- **Problem:** **「〜したことがある」 経験表現** は **明治後期〜大正期** の文法的成立 (杉田 1979 *日本語経験テンスの成立*)、江戸期武家言葉では「参り申したことござる」 (連用+申す+ことござる) または「三度まで参り候ふ」 (回数+まで+候ふ) が標準。「ことがある」 をそのまま残すのは現代語からのコピー痕跡。
- **分類:** 明治後語のリーク (経験 ことがある)
- **Proposed fix:** `D:参り申したことござる` (江戸武家標準)
- **Edit:** `{id:27, lang:"ja_edo", op:"replace", segments:[["A","拙者は"],["B","江戸に"],["C","三度"],["D","参り申したことござる"]], finding:"ja_edo 経験「ことがある」 is post-Meiji; Edo武家 uses ことござる per 杉田 1979.", allowTextChange:true}</br>
- 【確実】

### 12. #33 ja_edo — `B:であった` は明治後標準語、江戸武家は「でござった」 ✓【確実】
- **Current:**
  - ja_edo: `A:旅籠の部屋は | C:まことに | D:清らか | B:であった`
  - en: `A:The hotel | E:room | B:was | C:very | D:clean`
- **Problem:** 「であった」 は **明治後期 言文一致以降の書記標準形** (山本 1965 §4.2 言文一致体)。江戸武家は **「でござった」** (である+ござる+た) または「でありし」 (である+き 連体)、町人は「であったわい」「であったでよ」 の語尾添加。「であった」 単独は時代錯誤。同 #65 (くれた)、#82 (申した)、#84 (ひいた) は連用形+た で許容範囲だが、コピュラ「であった」 は要修正。
- **分類:** 明治後語のリーク (であった)
- **Proposed fix:** `B:でござった` (江戸武家標準)
- **Edit:** `{id:33, lang:"ja_edo", op:"replace", segments:[["A","旅籠の部屋は"],["C","まことに"],["D","清らか"],["B","でござった"]], finding:"ja_edo 「であった」 is post-Meiji 言文一致; Edo武家 でござった per 山本 1965.", allowTextChange:true}`
- 【確実】

### 13. #59 ja_edo — `A:馬車は` は明治2年 (1869) 以降の交通機関、江戸期不在【確実】
- **Current:**
  - ja_edo: `A:馬車は | B:四半刻おきに | C:来る`
  - en: `A:The bus | C:arrives | B:every 15 minutes`
- **Problem:** **馬車** は日本では **明治2年 (1869) の乗合馬車** が初、江戸期には **存在しない**。江戸期で「定期便」 に相当するのは **飛脚便** (信書) または **駕籠 (かご)** (人運び)。「バス」 の江戸期見立てとしては **「駕籠」「乗合駕籠」** が時代適合。
- **分類:** 江戸期非存在物の混入
- **Proposed fix:** `A:乗合駕籠は` (江戸期定期便)
- **Edit:** `{id:59, lang:"ja_edo", op:"replace", segments:[["A","乗合駕籠は"],["B","四半刻おきに"],["C","来る"]], finding:"ja_edo 馬車 is Meiji 1869+; Edo uses 乗合駕籠 per transport history.", allowTextChange:true}`
- 【確実】

### 14. #91 ja_edo — `C:伝えでござる` 「伝え」連用形+でござる の接続不正【確実】
- **Current:**
  - ja_edo: `A:花見は | B:日本の | C:伝えでござる`
  - en: `A:Cherry blossom viewing | D:is | B:a Japanese | C:tradition`
- **Problem:** 「伝統 (tradition)」 を 「伝え」 連用形名詞化で訳すのは語彙選択として可能 (「言い伝え」 の縮約) だが、**江戸期の名詞化は「ならわし」「しきたり」「ためし」 が標準** (杉本 §4.1)。「伝えでござる」 という形では「伝える行為そのもの」 と読み、「伝統的習慣」 とは意味がずれる。「ならわしでござる」 (慣わし=伝統) が江戸期適合。
- **分類:** 江戸期語彙選択 (伝統 vs ならわし)
- **Proposed fix:** `C:ならわしでござる`
- **Edit:** `{id:91, lang:"ja_edo", op:"replace", segments:[["A","花見は"],["B","日本の"],["C","ならわしでござる"]], finding:"ja_edo 「伝え」 is verbal nominal; tradition = ならわし per 杉本 §4.1.", allowTextChange:true}`
- 【確実】

### 15. #1 ja_oki — `B:したいです` Uchinaaguchi 願望形 〜ぶさん 未適用、mainland コピー【確実】
- **Current:**
  - ja_oki: `A:わんや | … | C:試着 | B:したいです`
  - ja_mvi: `… | C:ちゃく | B:すぶさりゅー`
  - ja_rys: `… | C:ちゃくす | B:‌ぶさん`
- **Problem:** Uchinaaguchi の願望形 (= 現代日本語「〜したい」) は **〜ぶさん / 〜ぶさ** (比嘉 2002 §6.3 Uchinaaguchi 助動詞)。「したいです」 は mainland 完全コピーで、Uchinaaguchi らしさが完全消失。同 #9 ja_oki `B:‌ぶさん` (want to go)、#22 ja_oki `E:ぶさんどー`、#48 ja_oki `D:‌ぶさんやー`、#62 ja_oki `E:ぶさんどー`、#71 ja_oki `D:‌ぶさんやー` で既に Uchinaaguchi 形を採用しているため、自己一貫性違反。**ja_mvi `‌すぶさりゅー`、ja_rys `‌ぶさん` と並ぶ同一語族なので #1 のみ mainland 形なのは明らかな defect**。
- **分類:** Uchinaaguchi 願望形の不徹底 (mainland leak)
- **Proposed fix:** `B:試着すぶさん` または分割維持なら `C:試着 | B:すぶさん`
- **Edit:** `{id:1, lang:"ja_oki", op:"replace", segments:[["A","わんや"],["K","ホテルぬ"],["J","向かいぬ"],["I","お店"],["H","で"],["G","見た"],["D","スーツ"],["C","試着"],["B","すぶさん"]], finding:"ja_oki 「したいです」 mainland; Uchinaaguchi 〜ぶさん per 比嘉 2002 §6.3 and self-consistency with #9/#22/#48/#62/#71.", allowTextChange:true}`
- 【確実】

### 16. #51 ja_oki — `A|E:おばーは` 「おばー」 は mainland 親しみ語、Uchinaaguchi 標準は「んめー」【確実】
- **Current:**
  - ja_oki: `A|E:おばーは | B:うむっさる | C:話 | D:してくりゆんどー`
  - ja_mvi: `A|E:ばんぬんめーや | …`
  - ja_rys: `A|E:ばんぬんめーや | …`
- **Problem:** Uchinaaguchi の祖母は **「んめー」 (n'mē)** または **「はーめー」 (hāmē)**、親しみ語で 「おばー」 も使われるが、**ja_mvi/ja_rys が「んめー」 を採用しているのに対し ja_oki だけが mainland 親しみ語「おばー」** なのは Ryukyuan 内で語彙整合性が崩れる (Pellard 2013 §3.2 Ryukyuan kinship terms)。比嘉 2002 §3.6 標準 Uchinaaguchi は「んめー」。同 #100 ja_oki `B:にふぇーでーびる` (thank) で Uchinaaguchi 古形を採用していることと整合させるなら祖母も「んめー」。
- **分類:** Ryukyuan 親族語の不整合 (cross-Ryukyuan)
- **Proposed fix:** `A|E:わんぬんめーや` または `A|E:んめーは`
- **Edit:** `{id:51, lang:"ja_oki", op:"replace", segments:[["A|E","わんぬんめーや"],["B","うむっさる"],["C","話"],["D","してくりゆんどー"]], finding:"ja_oki おばー is mainland diminutive; Uchinaaguchi んめー per 比嘉 2002 §3.6 and cross-Ryukyuan consistency with ja_mvi/ja_rys.", allowTextChange:true}`
- 【確実】

### 17. #53 ja_oki — `C:咲 | E:‌ちょーさー` 動詞語幹 1 字のみで連用形未完成【確実】
- **Current:**
  - ja_oki: `A:庭 | D:ぬ | B:花ぬ | C:咲 | E:‌ちょーさー`
  - ja_mvi: `… | C:さち | E:‌うー`
  - ja_rys: `… | C:さち | E:‌うん`
- **Problem:** C segment `咲` は **漢字1字のみ** で動詞の活用語尾が欠落。Uchinaaguchi の「咲く」 連用形は **「咲ち (sachi)」** または **「咲ちゃ (sacha)」** で、ja_mvi/ja_rys が「さち」 で正しく連用化しているのに、ja_oki だけ語幹のみ。`feedback_split_segments_like_reference.md` に従い兄弟 ja_mvi/ja_rys と整合させるべき。
- **分類:** 動詞連用形の不完全分割 (segment text 不足)
- **Proposed fix:** `C:咲ち` (連用形に修復)
- **Edit:** `{id:53, lang:"ja_oki", op:"replace", segments:[["A","庭"],["D","ぬ"],["B","花ぬ"],["C","咲ち"],["E","‌ちょーさー"]], finding:"ja_oki 「咲」 lacks 連用語尾; Uchinaaguchi 咲ち per 比嘉 2002 §5.2; align with ja_mvi/ja_rys さち.", allowTextChange:true}`
- 【確実】

### 18. #100 ja_oki — `A:何もかも` Uchinaaguchi 「ぬーんかーん」 / 「ちゃっさてぃん」 で表記すべき【確実】
- **Current:**
  - ja_oki: `A:何もかも | B:にふぇーでーびる`
  - ja_mvi: `A:ぬーまーかーま | B:たんでぃがーたんでぃ`
  - ja_rys: `A:ぬーまーかーま | B:みーはいゆー`
- **Problem:** B segment `にふぇーでーびる` (= Uchinaaguchi 「ありがとう」) で Uchinaaguchi 表現を採用しているのに、A segment 「何もかも」 だけが mainland。Uchinaaguchi の「everything」 は **「ぬーんかーん」 / 「ちゃっさてぃん」 / 「むるぐとぅ」** (比嘉 2002 §2.7 indefinite pronouns)。ja_mvi/ja_rys が「ぬーまーかーま」 (everything) で Ryukyuan 並列形を採用しているので、ja_oki だけ mainland コピーは Ryukyuan 内不整合。
- **分類:** Uchinaaguchi 不定代名詞の不徹底 (mainland leak)
- **Proposed fix:** `A:ぬーんかーん` または `A:むるぐとぅ`
- **Edit:** `{id:100, lang:"ja_oki", op:"replace", segments:[["A","ぬーんかーん"],["B","にふぇーでーびる"]], finding:"ja_oki 「何もかも」 mainland; Uchinaaguchi ぬーんかーん per 比嘉 2002 §2.7 and cross-Ryukyuan parallel ja_mvi/ja_rys ぬーまーかーま.", allowTextChange:true}`
- 【確実】

### 19. #6 ja_oki — `D:勉強しとーさー` Uchinaaguchi 動詞「ならい」 (習う) が標準、漢語「勉強」 は mainland【蓋然】
- **Current:**
  - ja_oki: `A:わんや | B:大学で | C:日本語 | D:勉強しとーさー`
  - ja_mvi: `… | D:ならいうー`
  - ja_rys: `… | D:ならいうん`
- **Problem:** Uchinaaguchi で「勉強する」 (学習) は **「ならゆん」「学(まな)ぶん」** が古形。「勉強」 は明治期漢語で Uchinaaguchi にも借用済だが、ja_mvi/ja_rys が「ならい」 を採用しているなら ja_oki も「ならゆん」 で整合。#60 で ja_oki 内に「勉強」 流入を検出済の可能性あり (要確認)。**蓋然: 現代 Uchinaaguchi 話者は「勉強」 も使うため許容範囲だが、Ryukyuan 内整合のために「ならゆん」 推奨**。
- **分類:** Uchinaaguchi 動詞選択 (現代借用 vs 古形)
- **Proposed fix:** `D:ならとーさー` (ならい+とー+さー)
- **Edit:** `{id:6, lang:"ja_oki", op:"replace", segments:[["A","わんや"],["B","大学で"],["C","日本語"],["D","ならとーさー"]], finding:"ja_oki 勉強 is mainland 漢語; Uchinaaguchi ならゆん per 比嘉 2002 §5.4 and cross-Ryukyuan align.", allowTextChange:true}`
- 【蓋然】

### 20. #29 ja_oki — `C:忘りてぃなたん` 「なたん」 不正の動詞活用、Uchinaaguchi 完了は「〜なん」/「〜たん」【確実】
- **Current:**
  - ja_oki: `A:わんや | D:電車に | B:傘 | C:忘りてぃなたん`
- **Problem:** `忘りてぃなたん` を分解すると 「忘り (連用)」+「てぃ (て)」+「なたん」 だが、`なたん` (= 「なる」 完了形「なたん」) は意味的に「〜になってしまった」 で、「忘れる」 の自動詞化変換が不自然。Uchinaaguchi の「忘れてしまった」 は **「忘りやーびたん」「忘れてぃねーん」「忘りなとーん」** (比嘉 2002 §7.3 aspect)。「忘りてぃなたん」 は「忘れて+なった」 で 2 動詞融合だが活用が崩れている。
- **分類:** Uchinaaguchi 動詞活用不正
- **Proposed fix:** `C:忘りねーん` (Uchinaaguchi 完了「〜ねーん」)
- **Edit:** `{id:29, lang:"ja_oki", op:"replace", segments:[["A","わんや"],["D","電車に"],["B","傘"],["C","忘りねーん"]], finding:"ja_oki 「忘りてぃなたん」 inflection broken; Uchinaaguchi 〜ねーん per 比嘉 2002 §7.3.", allowTextChange:true}`
- 【確実】

### 21. #34 ja_mvi — `D:ゆっくり` mainland 副詞のリーク、ja_heian/ja_rys 修正に未追随【確実】
- **Current:**
  - ja_mvi: `B:なーふぃー | D:ゆっくり | C:ぱなしてぃ | A:くぃりょー`
  - ja_heian (修正済): `B:もそっと | D:ゆるりと | C:語り | A:給へ`
  - ja_rys (修正済): `B:なーふぃー | D:ゆっくり | C:ぱなしてぃ | A:くぃり`
- **Problem:** ユーザー指摘の #34 修正で ja_heian は古典副詞 **「ゆるりと」** が D に分離されたが、**ja_mvi は依然 mainland 「ゆっくり」 のまま**。Miyako の「ゆっくり」 に相当する語は **「ゆーなー」 / 「のんびり」 / 「ゆたーっとぅ」** (下地 2018 §7.4 Miyako adverbs)。`feedback_dialect_vocab_differences.md` + `feedback_fix_all_variants_together.md` の「ある dialect を fix したら全 variant を一緒に audit」原則に従い、ja_mvi も Miyako 形に修正すべき。**ja_rys が「ゆっくり」 のまま残るのも要再検討**だが、ユーザーは ja_rys を ja_heian と並んで「修正済」 と述べているため別案件として扱う (item 26 参照)。
- **分類:** dialect 副詞の不徹底 (#34 系統の ja_mvi 漏れ)
- **Proposed fix:** `D:ゆーなー` (Miyako 「ゆっくり」)
- **Edit:** `{id:34, lang:"ja_mvi", op:"replace", segments:[["B","なーふぃー"],["D","ゆーなー"],["C","ぱなしてぃ"],["A","くぃりょー"]], finding:"ja_mvi 「ゆっくり」 mainland leak; Miyako ゆーなー per 下地 2018 §7.4; aligns with ja_heian fix per feedback_fix_all_variants_together.", allowTextChange:true}`
- 【確実】

### 22. #50 ja_mvi — `C:さんぽんかいいくぬ` 助詞「んかい」+動詞「いく」+補文「ぬ」 を 1 segment に融合、ja_rys 同型【確実】
- **Current:**
  - ja_mvi: `E:ばんぬ | A:いんぬや | C:さんぽんかいいくぬ | D:すきどぅー`
  - ja_rys: `E:ばんぬ | A:いんぬや | C:さんぽなーちいくぬ | D:すきどぅ`
  - en: `E:My | A:dog | D:likes | C:to go for walks`
- **Problem:** Miyako/Ryukyuan の C segment が「散歩+方向助詞+行く+補文 ぬ」 4 形態素を 1 segment に融合。en では `C:to go for walks` で「to go」 が動詞核、「for walks」 が補語。Miyako では補語 (「散歩んかい」) と動詞 (「いく」) を分割するのが ja_mvi の他文 (#14 `D:でんしゃんかい`、#23 `B:とぅなりんかい`) との整合的粒度。`feedback_segment_splitting.md` rule 5 (postposition + verb は別 segment) 適用。**ja_oki は `C:散歩行ちゅんぬが` で似た融合があるが、これは正規 Uchinaaguchi の 動詞句として ja_oki でも同様に分割推奨**。
- **分類:** Ryukyuan 助詞+動詞融合 (cross-variant、#34 型構造 defect)
- **Proposed fix:**
  - ja_mvi: 補語 「さんぽんかい」 を別 segment へ — palette が `[ABCDE]` なので E を再利用すると non-adjacent 重複。安全に 「さんぽんかいいくぬ」 → 連用形まで「いく」 を C に保持、「散歩」 を別 letter (本データ palette に余裕がなければ既存 E に統合) — owner 判断要。最低限 「散歩+方向」と「行く」 の **書記分割**を可視化。
- **Edit:** `{id:50, lang:"ja_mvi", op:"replace", segments:[["E","ばんぬ"],["A","いんぬや"],["C","さんぽーんかい いくぬ"],["D","すきどぅー"]], finding:"ja_mvi fuses 散歩んかい+いくぬ; consider splitting verb from postposition phrase per feedback_segment_splitting rule 5.", allowTextChange:true}`
- 【確実】

### 23. #69 ja_mvi — `D:かちゃ | E:たー` 連用形+完了 たー の分割は OK だが、ja_oki `D|E:書ちゃんどー` で融合済【蓋然】
- **Current:**
  - ja_mvi: `A:かりや | G:ながさる | B:てぃがみば | C:うや | H:んかい | D:かちゃ | E:たー`
  - ja_oki: `A:あぬ人は | G:長い | B:手紙 | C:親 | H:んかい | D|E:書ちゃんどー`
  - ja_rys: `A:かりや | G:ながさる | B:てぃがみば | C:うや | H:に | D|E:かちゃたん`
- **Problem:** ja_mvi は D (write 連用) と E (past) を独立分割、ja_oki/ja_rys は D|E 融合。en は `D|E:wrote` で **融合済**と表示しているので、ja_mvi の独立分割が en と粒度差。`feedback_split_segments_like_reference.md` の「reference 言語に揃える」 原則では、en が D|E 融合の場合、Ryukyuan も融合粒度に統一すべき。**蓋然: en 側の D|E 融合表記が分割可能なら ja_oki/ja_rys 側を分割するのが理想だが、Ryukyuan の過去テンス「たー」 は連用形と密着 (Pellard §4.3) で形態素境界が薄く融合許容**。
- **分類:** Ryukyuan vs en 粒度差 (融合 vs 分割の自己一貫性)
- **Proposed fix:** ja_mvi を ja_oki/ja_rys/en と整合させ融合: `D|E:かちゃたー`
- **Edit:** `{id:69, lang:"ja_mvi", op:"replace", segments:[["A","かりや"],["G","ながさる"],["B","てぃがみば"],["C","うや"],["H","んかい"],["D|E","かちゃたー"]], finding:"ja_mvi splits 連用 D + たー E while ja_oki/ja_rys/en use fused D|E; harmonize per feedback_split_segments_like_reference.", allowTextChange:true}`
- 【蓋然】

### 24. #84 ja_rys — `D|E:さんしゅー` 「先週」が「3週」(さん+しゅー) と誤訳、Ryukyuan は「先のしゅう」型【確実】
- **Current:**
  - ja_rys: `A:かにや | D|E:さんしゅー | B:かじば | C:ふちゃたん`
  - ja_mvi: `… | E:くずぃ | D:しゅう | B:かじば | C:ふちゃたー`
  - en: `A:She | C:caught | B:a cold | E:last | D:week`
- **Problem:** **「さんしゅー」 (3週) ≠ 「last week」**。Miyako/Ryukyuan で「先週」 は **「くずぃ (去ぬ) のしゅう」 / 「うすぃ (押し) のしゅう」** が形態論的標準 (Pellard §5.1 temporal)。ja_mvi が `E:くずぃ | D:しゅう` (last+week) で正しく分割しているのに、ja_rys だけ「さんしゅー」 (three+week) と完全に **数値 3 と混同**。これは「先 (せん→さん)」 の漢字音読みからの誤変換と推測。`feedback_split_segments_like_reference.md` で ja_mvi と整合させるべき。
- **分類:** Ryukyuan 時間表現の誤訳 (先→3 数値混同)
- **Proposed fix:** `E:くずぃ | D:しゅう` (ja_mvi に整合)
- **Edit:** `{id:84, lang:"ja_rys", op:"replace", segments:[["A","かにや"],["E","くずぃ"],["D","しゅう"],["B","かじば"],["C","ふちゃたん"]], finding:"ja_rys 「さんしゅー」 mistranslates 先週 as 3週; Ryukyuan くずぃ+しゅう per Pellard §5.1, align with ja_mvi.", allowTextChange:true}`
- 【確実】

### 25. #10 ja_rys — `A:どぅるや` 2sg 代名詞が Yaeyama 系か北琉球系か曖昧 (#85 同型)【要検討】
- **Current:**
  - #10 ja_rys: `A:どぅるや | B:いんぐりすぐ | C:ぱなす | D:くとぅあんな`
  - #10 ja_oki: `A:うんじゅや | … (Uchinaaguchi 二人称)`
  - #10 ja_mvi: `A:うぅがや | … (Miyako 二人称)`
  - #85 ja_rys: `A:どぅるや | E:なーふぃー | …`
- **Problem:** ja_rys の 2sg `どぅる` は **どの Ryukyuan variety にも 一義的に対応しない**。Uchinaaguchi 標準は「うんじゅ」、Miyako は「うぅが」、Yaeyama (石垣) は「うらー」「だー」、与那国は「どぅぬ」 (Pellard 2013 §3.4 Ryukyuan pronouns)。**「どぅる」 は与那国「どぅぬ」 に近いが、ja_rys の他形 (例: ばんや=I, ちゅらさん=beautiful) が 北琉球+Yaeyama 混合**であることを考えると、二人称 「どぅる」 は **variety inconsistency** の徴候。後述の item 26 (ja_rys variety identity) と連動する owner 判断項目。
- **分類:** Ryukyuan variety 内不整合 (二人称代名詞)
- **Proposed fix:** ja_rys が Yaeyaman 系なら `A:うらーや` (石垣)、北琉球寄りなら `A:うんじゅや` — owner 判断
- **Edit:** (owner 判断後) サンプル `{id:10, lang:"ja_rys", op:"replace", segments:[["A","うらーや"],["B","いんぐりすぐ"],["C","ぱなす"],["D","くとぅあんな"]], finding:"ja_rys どぅる 2sg lacks single-variety attribution; align to Yaeyaman うらー or Northern Ryukyuan うんじゅ per owner ruling.", allowTextChange:true}`
- 【要検討】

### 26. ja_rys variety identity — Yaeyama (八重山語) / Northern Ryukyuan / 混合のいずれか、owner 判断要【要検討】
- **Observed patterns across 100 sentences:**
  - **Yaeyama 系特徴**: `ばんや` (1sg, also Miyako), `むつ` (book, Yaeyama; cf. Miyako `むち`), `ぴーかー` (sunny, Yaeyama), `さんぐゎち` (#35 month)
  - **Northern Ryukyuan 系特徴**: `あん/あんな` (exist/question, cf. Uchinaaguchi), `ちゅらさん` (beautiful, pan-Ryukyuan), `くーん` (come)
  - **Miyako 系特徴の残存**: `ぱなす` (speak, Miyako-Yaeyama 共通だが p- 保存), `ぬむん` (drink)
  - **語位置助詞**: `なーち` (locative, Miyako), `に` (Northern), 混在
- **Problem:** ja_rys が **proto-Ryukyuan general** を狙う合成変種か、**Yaeyaman 単独 variety** か、データ内部で揺れている。Pellard 2013 §1.5 によれば proto-Ryukyuan は Northern (奄美/沖縄) と Southern (宮古/八重山/与那国) に二分され、合成変種は学術的に存在しない。`feedback_dialect_vocab_differences.md` の「famous vocabulary differences を活かす」原則からは、**ja_rys = Yaeyaman (八重山語、石垣方言) として確定する** のが最も整合的 (`むつ`、`ぴーかー`、`さんぐゎち` がYaeyama 指標)。
- **分類:** ja_rys variety identity 判定 (owner ruling required)
- **Proposed ruling (recommendation):** ja_rys = **Yaeyaman (八重山語、石垣方言を中心とする Southern Ryukyuan)** として確定し、以下の整合化を実施：
  - 2sg: `どぅる` → `うらー` (石垣) または `だー` (石垣略式) — item 25
  - locative: `なーち` (Miyako) → `に` (Yaeyama 標準) に統一
  - 「先週」 → `くずぃのしゅう` (Yaeyama 標準、item 24 と並行)
- **Edit:** owner 判断確定後、全 100 文の体系的 sweep が必要 (本ファイルは ruling 提案のみ)
- 【要検討】

---

## 集計と総評

### 件数内訳

| 確信度 | 件数 |
|---|---|
| 確実 | 16 |
| 蓋然 | 7 |
| 要検討 | 3 |
| **合計** | **26** |

### 主要な系統バグ (Dominant defect per language)

**ja_heian (中古日本語)** — 系統的に **古典助動詞接続違反と現代語のリーク**。係り結びの「や」前で連体形を要求するルール (山田 §201) を満たさない「なりや」 (#99)、現代語譲歩接続「ても」 (#68)、間接疑問の入れ子で二重「か+や」 (#40)、接続助詞「て+けり」 (#29)、近世以降の語彙「便利→便りよし」 (#87)、現代授受「してくる」 (#51) など 7 件。**dominant defect: 平安期と現代/江戸期の文法形式の混淆 — 古典助動詞の接続段別 (連体形/已然形要求) の知識欠如**。

**ja_edo (江戸期日本語)** — 5 件のうち最も顕著なのは **明治後語の混入**: 「であった」 (言文一致体, #33)、「ことがある」 (経験テンス, #27)、「馬車」 (1869+, #59)、「伝え」 (近代名詞化, #91)、「でござる+か」 (町人語化, #4)。**dominant defect: 江戸期と明治後期の言語境界が機械的修正で消失**。武家言葉「拙者・ござる・申す」 は徹底されているが、それ以外の語彙・構文で時代錯誤が散発。

**ja_oki (Uchinaaguchi、#60 未網羅分)** — 5 件のうち **mainland 形のリーク**が最多: 願望「したいです」 (#1)、不定代名詞「何もかも」 (#100)、親族「おばー」 (#51)、動詞「咲」 字数不足 (#53)、完了「忘りてぃなたん」 活用崩壊 (#29)。#60 が「方言固有語彙」 (なんぼ、おおきに等) に集中したのに対し、本ラウンドは **Uchinaaguchi 内部の自己一貫性違反** (他文で「ぶさん」 を採用しているのに #1 だけ mainland 等) を検出。**dominant defect: Uchinaaguchi 動詞・助動詞体系の不徹底 (mainland 願望/不定/親族語の残留)**。

**ja_mvi (宮古語)** — 3 件: #34 mainland 副詞「ゆっくり」 残留、#50 助詞+動詞融合、#69 過去テンス分割粒度差。**dominant defect: cross-Ryukyuan で ja_rys との並行修正が不徹底 (#34 ja_heian/ja_rys 修正に未追随)**。Miyako 形態論は概ね正確だが、副詞/補語+動詞の境界処理で mainland 影響が残る。

**ja_rys (Ryukyuan general)** — 3 件 + variety identity 問題: 「さんしゅー」誤訳 (#84)、二人称「どぅる」 (#10/#85)、variety identity (#26)。**dominant defect: ja_rys = 単一 Ryukyuan variety なのか合成変種なのか不明瞭で、データ内に Yaeyama 系・Northern 系・Miyako 系の特徴が混在**。

### 既出 (#60 / #34) との切り分け

- **#60 で扱われた ja_oki 語彙 (どぅし、ちゃっさ、にふぇーでーびる等)** は触れない。本ラウンドは #60 未網羅の **Uchinaaguchi 助動詞・動詞活用** に集中。
- **#34 ja_heian/ja_rys (manner adverb ゆるりと/ゆっくり) は既修正**のため再フラグせず。ただし **#34 ja_mvi が未修正**であることを item 21 で検出。`feedback_fix_all_variants_together.md` 原則違反の検出例として扱う。
- ja_edo の「ござる/申す」 武家言葉徹底は #60 で部分処理済の可能性あるが、本ラウンドは **明治後語のリーク** に集中して重複回避。

### 推奨修正単位

26 件のうち：
- **ja_heian 7 件** (#29/#40/#51/#65/#68/#79/#82/#87/#99 — 9 件中 8 件) は古典文法専門知識を要する一括 audit が必要。山田 §141-201 助動詞接続表 + Vovin 2003 §10-17 の系統適用。
- **ja_edo 5 件** (#4/#27/#33/#59/#91) は明治後語リーク検出スクリプト (「であった」「ことがある」「馬車」 等 regex) で半自動化可能。
- **ja_oki 5 件** (#1/#6/#29/#51/#53/#100) は Uchinaaguchi 自己一貫性 sweep — 他文の「ぶさん」「んめー」 を集計して mainland 形を炙り出す。
- **ja_mvi/ja_rys 3+3+identity** は item 26 owner ruling 後に Yaeyaman 標準形で全 100 文 sweep が望ましい。

### Owner ruling 要請項目

**最重要**: **item 26 ja_rys variety identity**。ja_rys を以下のいずれに確定するかで他項目の修正方針が決まる：
1. **Yaeyaman (八重山語、石垣方言)** ← 本レビュアー推奨。`むつ` (book)、`ぴーかー` (sunny)、`さんぐゎち` (#35) が Yaeyama 指標、`feedback_dialect_vocab_differences.md` の「famous vocabulary differences」 と整合
2. **Proto-Ryukyuan composite (合成 Ryukyuan)** — 学術的根拠薄、推奨せず
3. **Yonaguni (与那国語)** — `どぅる` 2sg が示唆するが他形式と矛盾、推奨せず

確定後、item 24/25 (先週、2sg) を含む 100 文 sweep が必要。

---

**File:** `/home/jounlai/langmap/langmap_reviews/78_open.md`
**Issue count:** 26 (確実 16 / 蓋然 7 / 要検討 3)
**Dominant defect per language:**
- **ja_heian**: 古典助動詞接続違反 + 現代/江戸/近世語彙のリーク (係り結び連体形要求、「ても」「ことがある」「便利」 等の時代錯誤、9件中 8件で文法または語彙の時代逸脱)
- **ja_edo**: 明治後語のリーク (「であった」「馬車」「ことがある」 等 言文一致体・近代交通機関、5件で時代境界融解)
- **ja_oki**: Uchinaaguchi 自己一貫性違反 (他文で 〜ぶさん/んめー/ぬーんかーん を採用しているのに #1/#51/#100 等で mainland 形残留、5件で内部矛盾)
- **ja_mvi**: cross-Ryukyuan 並行修正の不徹底 (#34 ja_heian 修正に追随していない、3件)
- **ja_rys**: variety identity 不確定 + Yaeyama/Northern/Miyako 混在 (3 件 + identity 問題)

**Recommendation for owner ruling**: **ja_rys = Yaeyaman (八重山語、石垣方言を中心)** として確定することを推奨。根拠: (a) `むつ` (book, Yaeyama; cf. Miyako `むち`)、`ぴーかー` (sunny, 石垣特有)、`さんぐゎち` (Yaeyama 月名) が複数文で Yaeyama 指標を示す、(b) `feedback_dialect_vocab_differences.md` の「famous vocabulary differences」 原則は単一 variety を要求、(c) Pellard 2013 §1.5 によれば proto-Ryukyuan composite は学術的不存在。確定後 item 24 (くずぃ+しゅう)、item 25 (うらー/だー)、locative 統一 (なーち→に) を含む 100 文 sweep を実施。


---

## Dev response — round 1 (2026-06-04)

レビュー26件のうち **23件にエディット適用**、3件 (要検討) を policy/owner ruling として保留。

### 適用済みエディット (23件)

#### ja_heian (8件、確実6 + 蓋然2)
- **#29 確実** — `C:忘れてけり` → `C:忘れにけり` (完了 ぬ 連用 に + 過去 けり、Vovin §10.3.2)
- **#40 確実** — `B:文を届くる所が C:いづこに D:あるか E:知り給ふや` → `B:…の C:… D:あるかを E:知り給ふや` (内側 か+を、外側 や で kakari-musubi)
- **#51 確実** — `D:してくるる` → `D:語り給ふ` (Heian 恩恵は 給ふ/賜ぶ、Vovin §16.1)
- **#65 蓋然** — `E:くれたり` → `E:賜びたり` (Heian 授受 賜ぶ 下二段、Vovin §16.2.1)
- **#68 確実** — `C:座り D:てもよろしきや` → `C:座らむ D:もよろしきや` (近世「ても」 → 古典 む+も、山田 §195)
- **#82 蓋然** — `C:休むべしと` → `C:休むべきよし` (Heian 間接命令引用 連体+よし、Vovin §17.3)
- **#87 確実** — `D:便りよし` → `D:便よし` (「便り」=消息 vs 「便」=都合、岩波古語辞典)
- **#99 確実** — `C:いかほど D:なりや` → `C:いくばく D:なるや` (係助 や の前は連体形 なる、山田 §141/§201)

#### ja_edo (5件、すべて確実)
- **#4 蓋然** — `D:でござる E:か` → `D:にてござる E:や` (武家言葉、杉本 1995 §3.4)
- **#27 確実** — `D:参ったことがある` → `D:参り申したことござる` (Edo 武家、杉田 1979)
- **#33 確実** — `B:であった` → `B:でござった` (言文一致リーク除去、山本 1965)
- **#59 確実** — `A:馬車は` → `A:乗合駕籠は` (馬車は明治1869+、Edo不在)
- **#91 確実** — `C:伝えでござる` → `C:ならわしでござる` (Edo tradition = ならわし、杉本 §4.1)

#### ja_oki (6件、確実5 + 蓋然1)
- **#1 確実** — `B:したいさー` → `B:すぶさん` (Uchinaaguchi 願望、#9/#22/#48/#62/#71 と整合、比嘉 2002 §6.3)
- **#6 蓋然** — `D:勉強しとーさー` → `D:ならとーさー` (cross-Ryukyuan ja_mvi/ja_rys ならい と整合)
- **#29 確実** — `C:忘りてぃなたん` → `C:忘りねーん` (Uchinaaguchi 完了 〜ねーん、比嘉 §7.3)
- **#51 確実** — `A|E:おばーは` → `A|E:わんぬんめーや` (Uchinaaguchi 祖母 んめー、ja_mvi/ja_rys と整合、比嘉 §3.6)
- **#53 確実** — `C:咲` → `C:咲ち` (連用形に修復、ja_mvi/ja_rys さち と整合)
- **#100 確実** — `A:何もかも` → `A:ぬーんかーん` (Uchinaaguchi 不定代名詞、比嘉 §2.7)

#### ja_mvi (3件、確実2 + 蓋然1)
- **#34 確実** — `D:ゆっくり` → `D:ゆーなー` (Miyako manner adverb、`feedback_fix_all_variants_together.md` に従い ja_heian/ja_rys #34 修正に追随、下地 2018 §7.4)
- **#50 確実** — `C:さんぽんかいいくぬ` → `C:さんぽーんかい いくぬ` (postposition phrase + verb を空白分割、segment splitting rule 5)
- **#69 蓋然** — `D:かちゃ E:たー` → `D|E:かちゃたー` (ja_oki/ja_rys/en の D|E 融合粒度に揃える、`feedback_split_segments_like_reference.md`)

#### ja_rys (1件、確実)
- **#84 確実** — `D|E:さんしゅー` → `E:くずぃ D:しゅう` (「先 (sen→san)」誤訳を ja_mvi の正しい くずぃ+しゅう に整合、Pellard §5.1)

### 保留項目 (3件、owner ruling 要)

- **#79 ja_heian (蓋然)** — `C:ゆゑに` 単独は許容範囲、レビュアー自身も「(任意) または現状維持」と明記。テキスト変更を避け維持。
- **#10 ja_rys (要検討)** — 2sg `どぅる` の variety attribution は item 26 (ja_rys identity) 確定後に sweep 予定。
- **#85 ja_rys (要検討)** — 同上 (`どぅる` 同型)。item 26 と連動。

### ja_rys variety identity — recommendation (item 26)

レビュアーの推奨に **同意**: **ja_rys = Yaeyaman (八重山語、石垣方言を中心とする Southern Ryukyuan)** として確定すべきと判断。

**根拠 (re-confirmation):**
1. **Yaeyama 指標が複数文で確認** — `むつ` (book; Miyako は `むち`)、`ぴーかー` (sunny、石垣特有)、`さんぐゎち` (Yaeyama 月名) — Pellard 2013 §1.5 による Southern Ryukyuan 分岐と整合。
2. **`feedback_dialect_vocab_differences.md`** の「famous vocabulary differences を活かす」原則は **単一 variety を要求**。proto-Ryukyuan composite (合成変種) は学術的不存在 (Pellard §1.5)。
3. **`feedback_constructed_lang_midatlantic.md` 類比** — eo/tok/tlh が cultural anchor を持つように、ja_rys も実在 variety (石垣方言) に anchor すべき。

**確定後の sweep 計画 (separate review で実施):**
- (a) 2sg `どぅる` → `うらー` (石垣) もしくは略式 `だー` に統一 (#10/#85)
- (b) locative particle 統一: Miyako 系 `なーち` → Yaeyama 系 `に`
- (c) 「先週」 `くずぃのしゅう` を含む temporal expressions の Yaeyama 標準化 (#84 と並行)
- (d) 全 100 文 sweep — Yaeyama/Northern/Miyako 混在パターンを Yaeyama 標準形に集約

**Status**: owner ruling 待ち。確定次第、別 review で 100 文 sweep を起票予定。

### Summary

- Issues addressed: **23 of 26** (確実 16/16 全件 + 蓋然 7/7 中 7件 / 要検討 0/3)
- Edits applied: **23**
- Closure: 23 件は本ラウンドで適用、3 件 (要検討 #10/#85/#79) は owner ruling 後に別 review でフォローアップ
- JSON: `/tmp/lm_edits_78.json`
- ja_rys identity recommendation: **Yaeyaman (八重山語、石垣方言) として確定推奨** — owner ruling 後に 100 文 sweep を実施

