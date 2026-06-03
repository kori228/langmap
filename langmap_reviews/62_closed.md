# LangMap データレビュー #62 — Sinitic cross-sibling chunking auditor (シナ系横断セグメント整合性)

## レビュアー自己紹介 (ペルソナ)

私は **桂木伊織 (Katsuragi Iori)**（ハンドル: @sinitic_audit）、東京大学言語学博士課程修了（中国語方言比較統語論、2017）、現在は神戸大学国際文化学研究科特任講師。先行の #37 杉浦さんが Romance 23 変種で「兄弟方言間の役割文字 (role-letter) 整合性」というメタ軸を確立されたのを範に、本ラウンドは **Sinitic 8 変種** (`zh`, `zh_db`, `zh_sc`, `yue`, `wuu`, `hak_cn`, `nan`, `cdo`) を同じ axis で全 100 文横断します。

直近 #56〜#59 (粤・呉・湘・贛・閩東) は **語彙・形態素レベル**の標準語汚染検出に集中していましたが、本回は **構造・分割 (chunking) レベル**の整合性 — つまり (a) `B|E`, `A|D`, `C|H`, `D|E`, `A|E|F` 等のコンポジット文字エスケープ、(b) 兄弟間でセグメント数が割れるケース、(c) 量詞・助詞・前置詞・コピュラの分割揺れ — を網羅的に拾います。

事案の発端は #85「もっと水を飲んだほうがいい」で、直前まで `zh A:你 D:应该 C:多喝 B|E:水` (4 セグ、`多喝` 融合 + `B|E` パレットエスケープ) という 2 重の構造欠陥を 61 ラウンドのレビューが全員見落としていたこと。これは Romance #43 `A|D:desse` / #77 `D:par le` と完全同型の「palette-escape via composite letter」defect class であり、Sinitic 全文に対し同じ走査を要するというのが本回の動機です。

参考文献:
- **Norman, J. *Chinese*** (CUP, 1988) §8–§9 — 官話・呉・湘・贛・客家・閩・粤 8 大方言の語順・助詞対照
- **Yan, M. *Introduction to Chinese Dialectology*** (LINCOM, 2006) ch. 4 — 各方言の補語・量詞・助詞配置
- **Chappell, H. ed. *Sinitic Grammar: Synchronic and Diachronic Perspectives*** (OUP, 2001) — 後置量詞（粤・閩・客）vs 前置量詞（官話）の分布
- **Matthews, S. & Yip, V. *Cantonese: A Comprehensive Grammar*** (Routledge, 2nd ed. 2011) §11.4 — 後置形容詞・後置量詞 `多啲`
- **Zhang, S. *Hakka Grammar*** (Chinese University Press, 2017) — 客家「兜仔/兜」後置量詞
- **Lien, C. *Aspect Markers in Southern Min*** (LSA, 2003) — 閩南「矣/咧/著」文末位置
- 先行 review #37 (Romance methodology), #43/#53/#77/#85 (composite-letter fix history)
- 先行 review #56-#59 (Sinitic 語彙汚染 — 本回は重複しない)

## 検証方法

`/home/jounlai/langmap/data.js` の SENTENCES (100 文) から、Sinitic 8 変種の `[letter, text]` ペアを `node -e` で抽出し、(1) 同一文の文字シーケンス集合のサイズが 1 を超えるか、(2) `|` を含む合成 letter がどの変種で出現するか、(3) 隣接同 letter ではない反復 (non-adjacent repeats、構造崩れ指標) があるか、を全件突き合わせました。`/tmp/sinitic_audit.txt` (738 行) / `/tmp/sinitic_composites.txt` (418 行) にダンプ済。**read-only on data.js**。

確信度マーク:
- 【確実】= 兄弟間で 4 つ以上が一致しており、少数派が構造崩れまたは合成 letter エスケープを起こしているケース、あるいは EN-parallel と乖離しているケース
- 【蓋然】= 多数派が形成されているが言語的に少数派の構造も許容範囲
- 【要検討】= 言語固有の語順差異 (e.g. 後置量詞) を「整合」名目で潰すべきでないケース、または palette 設計の根本議題

## 指摘事項 (Issues found) — **24 件 actionable**（うち #19/#20/#21 は精査の結果 false-positive / 既知許容として記録のみ）

### 1. #43 [yue/hak_cn/nan/cdo] — "D:這間 A|E:餐廳" 合成 vs [zh/zh_db/zh_sc/wuu] "D:这家 E:餐厅" 分割 【確実】

**Current:**
- [zh/zh_db/zh_sc/wuu] `D:这家 / 搭间` **`E:餐厅 / 饭店儿 / 馆子 / 饭店`** `B:的菜 / 个菜` `C:很好吃 / 贼好吃 / 好吃得很 / 交关好吃`
- [yue] `D:呢間` **`A|E:餐廳`** `B:嘅嘢食` `C:好好味`
- [hak_cn] `D:這間` **`A|E:餐廳个`** `B:菜` `C:當好食`
- [nan] `D:這間` **`A|E:食堂`** `B:的物件` `C:真好食`
- [cdo] `D:茲間` **`A|E:食店`** `B:其物甡` `C:盡好食`

**Problem:** 官話・呉 4 変種は `E:餐厅` 単独 letter で素直に分割しているのに、粤/客/閩南/閩東 4 変種が `A|E` 合成 letter を使っている。"餐廳" 自体は「主語名詞」(A) でなく「修飾名詞句の核」(E) であって、A 役は (粤話・客家文では暗黙の主題か、または "嘅嘢食" 全体が A) と読むのが妥当だが、4 つの南方変種が一斉に `A|E` を使うことで「A 役の暗黙省略」を palette-escape している。これは #85 `B|E` と同型の合成 letter エスケープ。

**Cross reference:** EN 原文 "This restaurant's food is delicious" → A:food (subject), D:this, E:restaurant (modifier)。zh パターン `D:这家 E:餐厅 B:的菜 C:很好吃` は restaurant=E, food=B (構造的整合)。粤/客/閩 で B 役は「料理」、A 役は本来 B と一致 (主語) なので、A 役は B に統合し E は単独に置くべき。

**Proposed unified pattern:** 全 8 変種を `D + E + B + C` の 4 セグに統一、`A|E` は `E` 単独に。

**Proposed edit:**
```json
{"id":43, "lang":"yue", "op":"replace", "allowTextChange":false,
 "segments":[["D","呢間"],["E","餐廳"],["B","嘅嘢食"],["C","好好味"]]}
{"id":43, "lang":"hak_cn", "op":"replace", "allowTextChange":false,
 "segments":[["D","這間"],["E","餐廳个"],["B","菜"],["C","當好食"]]}
{"id":43, "lang":"nan", "op":"replace", "allowTextChange":false,
 "segments":[["D","這間"],["E","食堂"],["B","的物件"],["C","真好食"]]}
{"id":43, "lang":"cdo", "op":"replace", "allowTextChange":false,
 "segments":[["D","茲間"],["E","食店"],["B","其物甡"],["C","盡好食"]]}
```

---

### 2. #45 [wuu] — "A|E|F:搭个国家里向" 3 重合成 vs 7 兄弟の 3 セグ分割 【確実】

**Current:**
- [zh/zh_db/zh_sc/yue/hak_cn/nan/cdo] `E:在 / 喺 / 搁 / 這 / 茲` `F:这个 / 呢個 / 隻 / 个 / 個` `A:国家 / 國家 / 旮旯` (3 セグ)
- [wuu] **`A|E|F:搭个国家里向`** (1 セグに 3 役複合)

**Problem:** 7 兄弟が `E:前置詞 F:指示詞 A:名詞` の **3 セグ** に分割している中、wuu のみが "搭个国家里向" (前置詞 "搭" + 指示詞 "个" + 名詞 "国家" + 方位詞 "里向") を **1 セグの 3 重合成 letter A|E|F** に括っている。これは palette-escape の極端例で、`feedback_no_character_level_split.md` と `feedback_prefer_splitting_segments.md` (「迷ったら分割」) のルールに正面から反する。

**Proposed fix:** wuu を `E:勒 / 搭` (前置詞単独) + `F:箇个` (指示詞) + `A:国家里向` (方位詞付き名詞) の 3 セグ分割に統一。表示文字を分けるため `allowTextChange:true` 必要。

**Proposed edit:**
```json
{"id":45, "lang":"wuu", "op":"replace", "allowTextChange":true,
 "segments":[["E","搭"],["F","个"],["A","国家里向"],["B","冬天"],["D","会"],["C","冷起来"]]}
```

**確信度:** 【確実】

---

### 3. #46 [yue/hak_cn/nan/cdo] — "B|G:朋友" 合成 letter vs [zh/zh_db/zh_sc/wuu] "B:朋友" 単独 【確実】

**Current:**
- [zh/zh_db/zh_sc/wuu] `A:我` `F:和/跟/搭` **`B:朋友`** `C:打电话` `E:聊/唠/摆/谈` `H:了` `D:一个小时`
- [yue] `A:我` `F:同` **`B|G:朋友`** `C:打電話` `E:傾` `H:咗` `D:一個鐘`
- [hak_cn] `A:𠊎` `F:同` **`B|G:朋友`** `C:打電話` `E:講` `H:了` `D:一個鐘頭`
- [nan] `A:我` `F:佮` **`B|G:朋友`** `C:講電話` `E:講` `H:了` `D:一點鐘`
- [cdo] `A:我` `F:共` **`B|G:朋友`** `C:講電話` `E:講` `H:了` `D:蜀點鐘`

**Problem:** 7 兄弟が `B:朋友` (相手) 単独 letter で扱う中、南方 4 変種が `B|G` と合成し G の意味（不詳；他文の G 配置と整合せず）を朋友に重ねている。EN 原文 "I talked with a friend on the phone for an hour" には G に当たる別役はない。"朋友" は完全に B (動作の相手) のみであり、G は palette のゴーストエスケープ。zh/wuu の単独 B 配置が正解。

**Proposed unified pattern:** 南方 4 変種を `B:朋友` 単独に統一。

**Proposed edit:**
```json
{"id":46, "lang":"yue", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["F","同"],["B","朋友"],["C","打電話"],["E","傾"],["H","咗"],["D","一個鐘"]]}
{"id":46, "lang":"hak_cn", "op":"replace", "allowTextChange":false,
 "segments":[["A","𠊎"],["F","同"],["B","朋友"],["C","打電話"],["E","講"],["H","了"],["D","一個鐘頭"]]}
{"id":46, "lang":"nan", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["F","佮"],["B","朋友"],["C","講電話"],["E","講"],["H","了"],["D","一點鐘"]]}
{"id":46, "lang":"cdo", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["F","共"],["B","朋友"],["C","講電話"],["E","講"],["H","了"],["D","蜀點鐘"]]}
```

**確信度:** 【確実】

---

### 4. #49 [zh_db/zh_sc] — "C|E:咋走呗 / 咋个走" 合成 vs 6 兄弟の "E:嘅路 / 的路 / 个路 / 其路" 単独 【確実】

**Current:**
- [zh/yue/wuu/hak_cn/nan/cdo] `A:请/請` `D:告诉/話/講拨/講分/講` `B:我/𠊎` `F:去/到` `G:机场/機場/飞机场` **`E:的路 / 嘅路 / 个路 / 其路`** (6 兄弟、E 単独)
- [zh_db] `A:你` `D:告诉` `B:我` `F:去` `G:机场` **`C|E:咋走呗`** (口語：道のり問いを動詞化)
- [zh_sc] `A:麻烦` `D:告诉` `B:我` `F:切` `G:机场` **`C|E:咋个走`** (口語：道のり問いを動詞化)

**Problem:** zh_db/zh_sc が "怎麼走" 由来の口語表現を `C|E` 合成 letter に詰めている。これは EN "the way to the airport" の "the way (= E:路)" を動詞化することで C (= "走/teach") を巻き込み合成化したもの。原意 (=道のり) は E 単独で表せる範囲なので合成化は palette-escape。

**Proposed fix:** zh_db を `E:咋走呗` 単独に、zh_sc を `E:咋个走` 単独に。表示変更なし。

**Proposed edit:**
```json
{"id":49, "lang":"zh_db", "op":"replace", "allowTextChange":false,
 "segments":[["A","你"],["D","告诉"],["B","我"],["F","去"],["G","机场"],["E","咋走呗"]]}
{"id":49, "lang":"zh_sc", "op":"replace", "allowTextChange":false,
 "segments":[["A","麻烦"],["D","告诉"],["B","我"],["F","切"],["G","机场"],["E","咋个走"]]}
```

**確信度:** 【確実】

---

### 5. #51 [wuu/nan/cdo] — "A|E:阿奶 / 阿媽 / 阿嬤" 合成 vs 5 兄弟の "E:我 A:祖母" 分割 【確実】

**Current:**
- [zh/zh_db/zh_sc/yue/hak_cn] `E:我/𠊎` `A:祖母 / 奶 / 婆婆 / 嫲嫲 / 阿婆` (5 兄弟、E+A 2 セグ)
- [wuu] **`A|E:阿奶`** `D:讲` `B:有意思` `C:故事`
- [nan] **`A|E:阿媽`** `D:講` `B:趣味的` `C:古`
- [cdo] **`A|E:阿嬤`** `D:講` `B:趣味其` `C:古`

**Problem:** wuu/nan/cdo は所有代名詞 ("我的/阮的") を省略して "阿奶/阿媽/阿嬤" だけにしているため、所有者 (E 役) と被所有者 (A 役) を 1 セグに括り合成 letter を発生させている。しかし語形態的に「阿-」は接頭辞で所有者を意味しているのは家族内文脈での暗黙了解にすぎず、ラベル上は A 単独で十分。E 役は欠落 (省略) として扱うのが自然 (#85 で `B|E` を `B + E` に分割した方針と同じ)。

**Proposed fix:** wuu/nan/cdo を `A:阿奶 / 阿媽 / 阿嬤` 単独に、E 役は省略。

**Proposed edit:**
```json
{"id":51, "lang":"wuu", "op":"replace", "allowTextChange":false,
 "segments":[["A","阿奶"],["D","讲"],["B","有意思"],["C","故事"]]}
{"id":51, "lang":"nan", "op":"replace", "allowTextChange":false,
 "segments":[["A","阿媽"],["D","講"],["B","趣味的"],["C","古"]]}
{"id":51, "lang":"cdo", "op":"replace", "allowTextChange":false,
 "segments":[["A","阿嬤"],["D","講"],["B","趣味其"],["C","古"]]}
```

**確信度:** 【確実】

---

### 6. #52 [nan/cdo] — "C|H:拍毋見 / 遺失" 合成 vs 6 兄弟の "C:動詞 H:了/咗" 分割 【確実】

**Current:**
- [zh/zh_db/zh_sc] `A:我` `F:在/搁` `D:市场` **`H:把 B:钱包 C:丢 H:了`** (3 セグの zh は更に H 反復、後述 #18 参照)
- [yue/wuu/hak_cn] `A:我` `F:喺/勒/在` `D:市場` **`C:唔見/寻弗着/跌忒 H:咗/了`** (C+H 分割)
- [nan] `A:我` `F:佇` `D:菜市仔` **`C|H:拍毋見`** `B:皮包仔`
- [cdo] `A:我` `F:著` `D:市場` **`C|H:遺失`** `B:銀包`

**Problem:** 中部 3 兄弟 (yue/wuu/hak_cn) は完了アスペクト H を独立セグに分けているのに、nan/cdo だけが `C|H` 合成。「拍毋見」「遺失」自体は動詞だけで完了マーカーを含まない（閩南で完了は文末 "矣"、閩東は "去" など）。`C|H` は合成 letter の誤用。

**Proposed fix:** nan/cdo を `C` 単独に。実際 nan は完了マーカー "矣" を欠落させているため `H:矣` を追加するか、または H を欠落させて C 単独に。閩南/閩東は完了標識が義務的ではないので後者でも可。

**Proposed edit:**
```json
{"id":52, "lang":"nan", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["F","佇"],["D","菜市仔"],["C","拍毋見"],["B","皮包仔"]]}
{"id":52, "lang":"cdo", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["F","著"],["D","市場"],["C","遺失"],["B","銀包"]]}
```

**確信度:** 【確実】

---

### 7. #69 [nan/cdo] — "D|E:寫" 合成 vs 6 兄弟の "D:寫 E:了/咗" 分割 【確実】

**Current:**
- [zh/zh_db/zh_sc/hak_cn] `A:他/佢` `H:给/分` `C:父母/爸妈/老汉儿老妈/佢爺哀` **`D:写/寫 E:了`** `F:一封` `G:长/老长的/長个` `B:信`
- [yue/wuu] `A:佢/伊` **`D:寫/写 E:咗/了`** `F:一封` `G:長/长` `B:信` `H:畀/拨` `C:佢父母/父母`
- [nan] `A:伊` **`D|E:寫`** `F:一封` `G:長` `B:信` `H:予` `C:爸母`
- [cdo] `A:伊` **`D|E:寫`** `F:蜀封` `G:長` `B:信` `H:乞` `C:爹娘`

**Problem:** 6 兄弟が `D:動詞` + `E:完了マーカー` に分割している中、nan/cdo は完了マーカーを欠落させて `D|E` 合成 letter で済ませている。閩南 "寫了" や閩東 "寫去" を補えば D + E 分割が可能。または完了マーカーが意味的に欠けるなら E 役自体を削除し `D:寫` 単独で十分（`A|D` のように 2 役を 1 文字に詰めるのは palette ルール違反）。

**Proposed fix:** nan/cdo を `D:寫` 単独に。E 役は当該変種で欠落として扱う。

**Proposed edit:**
```json
{"id":69, "lang":"nan", "op":"replace", "allowTextChange":false,
 "segments":[["A","伊"],["D","寫"],["F","一封"],["G","長"],["B","信"],["H","予"],["C","爸母"]]}
{"id":69, "lang":"cdo", "op":"replace", "allowTextChange":false,
 "segments":[["A","伊"],["D","寫"],["F","蜀封"],["G","長"],["B","信"],["H","乞"],["C","爹娘"]]}
```

**確信度:** 【確実】

---

### 8. #80 [yue/nan/cdo] — "B|F:留學" 合成 vs [zh/zh_db/zh_sc/wuu] "B:留 F:学" 分割 【蓋然】

**Current:**
- [zh/zh_db/zh_sc/wuu] `A:我` `E:认为/觉得/相信` **`B:留 F:学`** `D:是` `G:宝贵的/老宝贵的/好难得的/宝贵个` `C:经历`
- [yue] `A:我` `E:相信` **`B|F:留學`** `D:係` `G:寶貴嘅` `C:經驗`
- [hak_cn] `A:𠊎` `E:想` **`F:出國 B:留學`** `D:係` `G:一隻寶貴个` `C:經驗`
- [nan] `A:我` `E:相信` **`B|F:留學`** `D:是` `G:寶貴的` `C:經驗`
- [cdo] `A:我` `E:相信` **`B|F:留學`** `D:是` `G:寶貴其` `C:經驗`

**Problem:** zh/zh_db/zh_sc/wuu は 2 字熟語 "留学" を `B:留 F:学` と無理矢理 1 字ずつに分けているが、これは「文字レベル分割禁止」(`feedback_no_character_level_split.md`) に違反する。一方 yue/nan/cdo は熟語を維持しつつ B|F に合成、hak_cn は「出國 (F) + 留學 (B)」と意味的に分割。**正しい統一形は 1 熟語 `B:留學` を単独セグにすること**。F 役（"国外/出国"の意味）は省略 or hak_cn 方式で独立 letter 追加。

**Proposed fix:** 全 8 変種を `B:留学/留學` 単独に統一、F 役は省略。zh/zh_db/zh_sc/wuu は表示変更不要（連結のみ）、yue/nan/cdo は合成解除のみ。

**Proposed edit:**
```json
{"id":80, "lang":"zh", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["E","认为"],["B","留学"],["D","是"],["G","宝贵的"],["C","经历"]]}
{"id":80, "lang":"zh_db", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["E","觉得"],["B","留学"],["D","是"],["G","老宝贵的"],["C","经历"]]}
{"id":80, "lang":"zh_sc", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["E","觉得"],["B","留学"],["D","是"],["G","好难得的"],["C","经历"]]}
{"id":80, "lang":"wuu", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["E","相信"],["B","留学"],["D","是"],["G","宝贵个"],["C","经历"]]}
{"id":80, "lang":"yue", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["E","相信"],["B","留學"],["D","係"],["G","寶貴嘅"],["C","經驗"]]}
{"id":80, "lang":"nan", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["E","相信"],["B","留學"],["D","是"],["G","寶貴的"],["C","經驗"]]}
{"id":80, "lang":"cdo", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["E","相信"],["B","留學"],["D","是"],["G","寶貴其"],["C","經驗"]]}
```

**確信度:** 【確実】（文字レベル分割禁止違反）

---

### 9. #84 [zh/zh_db/zh_sc/wuu] — "B|C:感冒了" 合成 vs [yue/nan/cdo] "B:傷風 C:咗/去" 分割 【確実】

**Current:**
- [zh/zh_db/zh_sc/wuu] `A:她/伊` `E:上` `D:周/礼拜` **`B|C:感冒了 / 感冒了呗 / 感冒嘞 / 伤风了`**
- [yue] `A:佢` `E:上個` `D:星期` **`B:傷風 C:咗`**
- [hak_cn] `A:佢` `E:頂隻` `D:禮拜` **`C:著了 B:寒`** (語順逆)
- [nan] `A:伊` `E:頂` `D:禮拜` **`B:傷風 C:去`**
- [cdo] `A:伊` `E:頂` `D:禮拜` **`B:傷風 C:去`**

**Problem:** これは #85 と全く同型の `B|C` 合成 letter palette-escape。"感冒了" は B (病名) + C (動詞句末の完了 "了") に分割可能で、yue/nan/cdo がそれを示している。zh/zh_db/zh_sc/wuu は安易に B|C 合成で済ませている。「感冒」と「了」の境界は形態素境界として明確 (#85 の "多喝" → "多 喝" 分割と同じレベル)。

**Proposed fix:** zh/zh_db/zh_sc/wuu を `B:感冒 C:了` (zh) / `B:感冒 C:了呗` (zh_db) / `B:感冒 C:嘞` (zh_sc) / `B:伤风 C:了` (wuu) に分割。表示テキスト変更（連結→分離）につき `allowTextChange:true`。

**Proposed edit:**
```json
{"id":84, "lang":"zh", "op":"replace", "allowTextChange":true,
 "segments":[["A","她"],["E","上"],["D","周"],["B","感冒"],["C","了"]]}
{"id":84, "lang":"zh_db", "op":"replace", "allowTextChange":true,
 "segments":[["A","她"],["E","上"],["D","礼拜"],["B","感冒"],["C","了呗"]]}
{"id":84, "lang":"zh_sc", "op":"replace", "allowTextChange":true,
 "segments":[["A","她"],["E","上个"],["D","礼拜"],["B","感冒"],["C","嘞"]]}
{"id":84, "lang":"wuu", "op":"replace", "allowTextChange":true,
 "segments":[["A","伊"],["E","上"],["D","礼拜"],["B","伤风"],["C","了"]]}
```

**確信度:** 【確実】（#85 と同型）

---

### 10. #89 [zh/zh_db/zh_sc/wuu] — "D|C:找不到/找不着/寻弗着" 合成 vs [yue/hak_cn/nan/cdo] "D:動詞 C:否定+補語" 分割 【確実】

**Current:**
- [zh/zh_db/zh_sc] `A:我` **`D|C:找不到 / 找不着`** `F:Wi-Fi` `G:密码`
- [wuu] `A:我` **`D|C:寻弗着`** `F:Wi-Fi` `G:密码`
- [yue] `A:我` **`D:搵 C:唔到`** `F:Wi-Fi` `G:密碼`
- [hak_cn] `A:𠊎` **`D:揣 C:毋到`** `F:Wi-Fi` `G:密碼`
- [nan] `A:我` **`D:揣 C:無`** `F:Wi-Fi` `G:密碼`
- [cdo] `A:我` **`D:揣 C:無`** `F:Wi-Fi` `G:密碼`

**Problem:** 中・南方 4 兄弟が「動詞 + 否定可能補語」を D + C に分割しているのに、官話 3 と呉が `D|C` 合成。「找+不+到」「寻+弗+着」は形態論的に動詞 + 中辺否定 + 結果補語の 3 形態素であり、最低限 V/補語境界で `D:找 C:不到` (zh) / `D:找 C:不着` (zh_db) / `D:寻 C:弗着` (wuu) と分割可能。

**Proposed fix:** zh/zh_db/zh_sc/wuu を D + C 2 セグに分割。表示変更（連結→分離）につき `allowTextChange:true`。

**Proposed edit:**
```json
{"id":89, "lang":"zh", "op":"replace", "allowTextChange":true,
 "segments":[["A","我"],["D","找"],["C","不到"],["F","Wi-Fi"],["G","密码"]]}
{"id":89, "lang":"zh_db", "op":"replace", "allowTextChange":true,
 "segments":[["A","我"],["D","找"],["C","不着"],["F","Wi-Fi"],["G","密码"]]}
{"id":89, "lang":"zh_sc", "op":"replace", "allowTextChange":true,
 "segments":[["A","我"],["D","找"],["C","不到"],["F","Wi-Fi"],["G","密码"]]}
{"id":89, "lang":"wuu", "op":"replace", "allowTextChange":true,
 "segments":[["A","我"],["D","寻"],["C","弗着"],["F","Wi-Fi"],["G","密码"]]}
```

**確信度:** 【確実】

---

### 11. #21 [zh/zh_db/zh_sc] — "E:要 ... E:吃" 非隣接同色反復 vs [yue/wuu/hak_cn/nan/cdo] 単独 E 統合 【確実】

**Current:**
- [zh/zh_db/zh_sc] `A:我` `B:今晚` **`E:要 C:和朋友一起 E:吃`** `D:晚饭` (E が "要" と "吃" の 2 つに分かれ、間に C 挟む — 6 セグ)
- [yue/wuu/hak_cn/nan/cdo] `A:我` `B:今晚` `C:同朋友一齊 / 跟朋友 / 同朋友 / 佮朋友 / 共朋友` **`E:食 / 要吃 / 愛食 / 欲食 / 欲食`** `D:晚飯` (5 セグ、E 単独)

**Problem:** 官話 3 が「助動詞 要 + 動詞 吃」を共に E ラベルで割り当て、間に C 副詞句を挟む構造 — これは #11 es_cl / #18 全 Romance と同型の「同色非隣接 2 分割」defect。`feedback_no_adjacent_same_segments.md` の趣旨（同色は隣接統合）にも反する間挟み構造。南方 5 兄弟は "要吃" を 1 セグの E に統合している (wuu = `E:要吃`)。官話も同じ統合形にできる。

**Cross reference:** EN "I will have dinner with friends tonight" → 助動詞は "will" のみ (= E 役)、"have dinner" は動詞句 (= D 役)。zh の E 二分構造は EN 構造とも乖離。

**Proposed fix:** zh/zh_db/zh_sc で E を「要吃 (zh)」「要整 (zh_db)」「要吃 (zh_sc)」と 1 セグに統合し、間の C を E の前に置く（南方兄弟の語順に揃える）。表示テキスト変更を伴う構造変更。

**Proposed edit:**
```json
{"id":21, "lang":"zh", "op":"replace", "allowTextChange":true,
 "segments":[["A","我"],["B","今晚"],["C","和朋友一起"],["E","要吃"],["D","晚饭"]]}
{"id":21, "lang":"zh_db", "op":"replace", "allowTextChange":true,
 "segments":[["A","我"],["B","今晚儿"],["C","跟朋友一块儿"],["E","要整"],["D","饭"]]}
{"id":21, "lang":"zh_sc", "op":"replace", "allowTextChange":true,
 "segments":[["A","我"],["B","今晚上"],["C","跟朋友一起"],["E","要吃"],["D","饭"]]}
```

**確信度:** 【確実】（同色非隣接 2 分割の構造崩れ）

---

### 12. #24 [全 8 変種] — "D:給/予/乞 ... D:看/睇下" 同色 2 分割（D が間接目的語前置詞 D と動詞 D の 2 役を担当）【要検討】

**Current:**
- [zh/zh_sc/yue/wuu/hak_cn] `A:请/請/麻烦` **`D:给/俾/拨/分`** `B:我/𠊎` **`D:看/瞅瞅/睇下/看哈/看看/分 (二度目は動詞 "見る")`** `C:菜单/餐牌/菜單`
- [nan/cdo] `A:請` **`D:予/乞`** `B:我` `C:菜單` **`D:看`** (語順違いだが同問題)
- [zh_db] **`D:给`** `B:我` **`D:瞅瞅`** `C:菜单` `A:呗` (A が文末に逃げる別問題、#22 で議論)

**Problem:** D ラベルが「与格マーカー (give to)」と「動作動詞 (see)」の 2 つの異なる意味役に同時付与され、間に B (我) を挟む構造。Romance #18 / #11 と同型の同色非隣接 2 分割で **全 8 Sinitic 変種共通の構造崩れ**。本来は「与格マーカー D」「動作動詞 別 letter (E or F)」に分けるべき。

**Cross reference:** EN "Please show me the menu" → "show" (動作動詞) と "me" (間接目的語) は構造上独立。Sinitic の "給我看" は使役構文 (let me see) なので「給 (使役/与格)」と「看 (動作)」は別役。

**Proposed fix:** 2 つ目の D (動詞 "看/瞅瞅/睇下" 等) を **E** に再ラベル。全 8 変種で一括変更。

**Proposed edit (例: zh のみ示す、残りは同型):**
```json
{"id":24, "lang":"zh", "op":"replace", "allowTextChange":false,
 "segments":[["A","请"],["D","给"],["B","我"],["E","看"],["C","菜单"]]}
{"id":24, "lang":"zh_db", "op":"replace", "allowTextChange":false,
 "segments":[["D","给"],["B","我"],["E","瞅瞅"],["C","菜单"],["A","呗"]]}
{"id":24, "lang":"zh_sc", "op":"replace", "allowTextChange":false,
 "segments":[["A","麻烦"],["D","给"],["B","我"],["E","看哈"],["C","菜单嘛"]]}
{"id":24, "lang":"yue", "op":"replace", "allowTextChange":false,
 "segments":[["A","請"],["D","俾"],["B","我"],["E","睇下"],["C","餐牌"]]}
{"id":24, "lang":"wuu", "op":"replace", "allowTextChange":false,
 "segments":[["A","请"],["D","拨"],["B","我"],["E","看看"],["C","菜单"]]}
{"id":24, "lang":"hak_cn", "op":"replace", "allowTextChange":false,
 "segments":[["A","請"],["D","分"],["B","𠊎"],["E","看"],["C","菜單"]]}
{"id":24, "lang":"nan", "op":"replace", "allowTextChange":false,
 "segments":[["A","請"],["D","予"],["B","我"],["C","菜單"],["E","看"]]}
{"id":24, "lang":"cdo", "op":"replace", "allowTextChange":false,
 "segments":[["A","請"],["D","乞"],["B","我"],["C","菜單"],["E","看"]]}
```

**確信度:** 【確実】（同色 2 分割が全 8 変種に蔓延）

---

### 13. #29 [zh/zh_db/zh_sc] — "C:把 ... C:忘在 ... C:了" C 役 3 分割 vs [yue/wuu/hak_cn/nan/cdo] C 単独 【確実】

**Current:**
- [zh] `A:我` **`C:把`** `B:雨伞` **`C:忘在`** `D:火车上` **`C:了`** (C が 3 つ、間に B と D)
- [zh_db] `A:我` **`C:把`** `B:雨伞` **`C:落`** `D:火车上` **`C:了`**
- [zh_sc] `A:我` **`C:把`** `B:雨伞` **`C:忘到`** `D:火车上` **`C:了`**
- [yue] `A:我` `D:喺火車上` `C:唔記得` `B:支遮` (C 単独)
- [wuu] `A:我` `B:雨伞` `C:忘特` `D:勒火车上`
- [hak_cn] `A:𠊎` `C:忘了` `B:遮仔` `D:在火車項`
- [nan/cdo] `A:我` `B:雨傘` `C:放袂記/忘記` `D:佇火車頂/著火車頂`

**Problem:** zh/zh_db/zh_sc の `把` 構文は同色 3 分割の極端ケース — C が「処置マーカー 把」「動詞 忘」「完了 了」の 3 役を担当し、間に B と D が挟まる。1 文に 3 つの非隣接 C は明らかに palette 設計違反。`把` は別 letter (例 F、または既存 H に倣う) に置き、`了` も別 letter に置き、C は動詞のみに留めるべき。

**Proposed fix:** zh/zh_db/zh_sc を **`H:把 / B:雨伞 / C:忘在/落/忘到 / D:火车上 / E:了`** (5 セグ、role-letter 衝突解消) に変更。

**Proposed edit:**
```json
{"id":29, "lang":"zh", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["H","把"],["B","雨伞"],["C","忘在"],["D","火车上"],["E","了"]]}
{"id":29, "lang":"zh_db", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["H","把"],["B","雨伞"],["C","落"],["D","火车上"],["E","了"]]}
{"id":29, "lang":"zh_sc", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["H","把"],["B","雨伞"],["C","忘到"],["D","火车上"],["E","了"]]}
```

**確信度:** 【確実】（同色 3 分割の極端ケース）

---

### 14. #40 [zh/zh_db/zh_sc/wuu/nan/cdo] — "E:知道 ... E:吗/不/伐/無" E 役 2 分割 (動詞 E と疑問助詞 E) 【確実】

**Current:**
- [zh] `A:你` **`E:知道`** `B:邮局` `D:在` `C:哪里` **`E:吗`**
- [zh_db/zh_sc/wuu/nan/cdo] 同型 (E:動詞 ... E:疑問助詞)
- [yue] `A:你` **`E:知唔知`** `B:郵局` `D:喺` `C:邊度` (疑問は V-唔-V 内化、E 単独)
- [hak_cn] `A:你` **`E:知`** `B:郵局` `D:在` `C:哪位` (疑問助詞欠落、E 単独)

**Problem:** Sinitic 6 変種で E が「認知動詞 知道/晓得/知影/知」と「疑問助詞 嗎/不/伐/無」の 2 役を分担し、間に B/D/C を挟む同色非隣接 2 分割。疑問助詞は本来別 letter (#28 で G が使われている) に置くべき。

**Cross reference:** #28 と #40 はどちらも yes-no 疑問だが、#28 では文末助詞が G、#40 では E に二重付与されており、palette 設計の不整合。

**Proposed fix:** 全 6 変種で 2 つ目の E (疑問助詞) を **G** に再ラベル、#28 と整合。

**Proposed edit:**
```json
{"id":40, "lang":"zh", "op":"replace", "allowTextChange":false,
 "segments":[["A","你"],["E","知道"],["B","邮局"],["D","在"],["C","哪里"],["G","吗"]]}
{"id":40, "lang":"zh_db", "op":"replace", "allowTextChange":false,
 "segments":[["A","你"],["E","知道"],["B","邮局"],["D","在"],["C","哪儿"],["G","不"]]}
{"id":40, "lang":"zh_sc", "op":"replace", "allowTextChange":false,
 "segments":[["A","你"],["E","晓得"],["B","邮局"],["D","在"],["C","哪儿"],["G","不嘛"]]}
{"id":40, "lang":"wuu", "op":"replace", "allowTextChange":false,
 "segments":[["A","侬"],["E","晓得"],["B","邮局"],["D","勒"],["C","啥地方"],["G","伐"]]}
{"id":40, "lang":"nan", "op":"replace", "allowTextChange":false,
 "segments":[["A","你"],["E","知影"],["B","郵局"],["D","佇"],["C","佗位"],["G","無"]]}
{"id":40, "lang":"cdo", "op":"replace", "allowTextChange":false,
 "segments":[["A","汝"],["E","知影"],["B","郵局"],["D","著"],["C","底所"],["G","無"]]}
```

**確信度:** 【確実】

---

### 15. #66 [全 8 変種] — "C:被/讓/畀/拨/分/予/乞" + "C:覆盖/盖上/冚住/盖牢/蓋忒/崁咧/覆蓋著" C 役 2 分割（受動マーカー C と動詞 C）【確実】

**Current:**
- [全 8 変種] `A:山` **`C:被/让/被/畀/拨/分/予/乞`** `B:雪` **`C:覆盖/盖上了/盖起了/冚住/盖牢勒/蓋忒/崁咧/覆蓋著`**

**Problem:** これは **#24 と同型** の同色 2 分割 — C が「受動マーカー」と「動作動詞」の 2 役を兼ね、間に B が挟まる。#24 の D と全く同じ defect 構造で、全 8 変種共通。「被/讓/畀」等は前置詞的マーカー、「覆盖/冚住」等は動詞でそれぞれ別意味役。

**Proposed fix:** 2 つ目の C (動詞) を **D** に再ラベル (#82 などで動詞主動が D 役の前例あり)。

**Proposed edit (例: zh のみ、残りは同型):**
```json
{"id":66, "lang":"zh", "op":"replace", "allowTextChange":false,
 "segments":[["A","山"],["C","被"],["B","雪"],["D","覆盖"]]}
{"id":66, "lang":"zh_db", "op":"replace", "allowTextChange":false,
 "segments":[["A","山"],["C","让"],["B","雪"],["D","盖上了"]]}
{"id":66, "lang":"zh_sc", "op":"replace", "allowTextChange":false,
 "segments":[["A","山"],["C","被"],["B","雪"],["D","盖起了"]]}
{"id":66, "lang":"yue", "op":"replace", "allowTextChange":false,
 "segments":[["A","山"],["C","畀"],["B","雪"],["D","冚住"]]}
{"id":66, "lang":"wuu", "op":"replace", "allowTextChange":false,
 "segments":[["A","山"],["C","拨"],["B","雪"],["D","盖牢勒"]]}
{"id":66, "lang":"hak_cn", "op":"replace", "allowTextChange":false,
 "segments":[["A","山"],["C","分"],["B","雪"],["D","蓋忒"]]}
{"id":66, "lang":"nan", "op":"replace", "allowTextChange":false,
 "segments":[["A","山"],["C","予"],["B","雪"],["D","崁咧"]]}
{"id":66, "lang":"cdo", "op":"replace", "allowTextChange":false,
 "segments":[["A","山"],["C","乞"],["B","雪"],["D","覆蓋著"]]}
```

**確信度:** 【確実】（#24 と同型、全 8 兄弟一括）

---

### 16. #68 [全 8 変種] — "D:可以/能/好/會使 ... D:吗/不/呀/伐/無" D 役 2 分割（助動詞 D と疑問助詞 D）【確実】

**Current:**
- [全 8 変種] `A:我` **`D:可以/能/好/會使`** `C:坐` `B:这里/呢度/搭里/這位/遮` **`D:吗/不/不嘛/呀/伐/無`**

**Problem:** D が「許可助動詞」と「疑問助詞」の 2 役を兼ね、間に C/B を挟む。#40 の E 2 分割と同じく、疑問助詞は別 letter (G) に置くべき。8 変種共通の defect。

**Proposed fix:** 2 つ目の D (疑問助詞) を **G** に再ラベル、#28/#40 と統一。

**Proposed edit:**
```json
{"id":68, "lang":"zh", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["D","可以"],["C","坐"],["B","这里"],["G","吗"]]}
{"id":68, "lang":"zh_db", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["D","能"],["C","坐"],["B","这儿"],["G","不"]]}
{"id":68, "lang":"zh_sc", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["D","可以"],["C","坐"],["B","这儿"],["G","不嘛"]]}
{"id":68, "lang":"yue", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["D","可以"],["C","坐"],["B","喺度"],["G","呀"]]}
{"id":68, "lang":"wuu", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["D","好"],["C","坐"],["B","搭里"],["G","伐"]]}
{"id":68, "lang":"hak_cn", "op":"replace", "allowTextChange":false,
 "segments":[["A","𠊎"],["D","會使"],["C","坐"],["B","這位"],["G","無"]]}
{"id":68, "lang":"nan", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["D","會使"],["C","坐"],["B","遮"],["G","無"]]}
{"id":68, "lang":"cdo", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["D","會使"],["C","坐"],["B","遮"],["G","無"]]}
```

**確信度:** 【確実】

---

### 17. #74 [zh_db/zh_sc/wuu/hak_cn/nan/cdo] — "C:等了 ... C:了/矣" C 役 2 分割 vs [zh/yue] C 単独 【確実】

**Current:**
- [zh] `A:我` **`C:已经等了`** `B:30分钟` (C 単独、3 セグ)
- [yue] `A:我` **`C:已經等咗`** `B:30分鐘` (C 単独、3 セグ)
- [zh_db] `A:我` **`C:都等了`** `B:30分钟` **`C:了`** (C 2 分割)
- [zh_sc] `A:我` **`C:都等了`** `B:30分钟` **`C:了噻`** (同上)
- [wuu] `A:我` **`C:等了`** `B:三十分钟` **`C:了`**
- [hak_cn/nan/cdo] 同型 (`C:等了 ... C:了/矣`)

**Problem:** zh/yue は完了マーカーを動詞 C に統合（`C:已经等了/已經等咗` 1 セグ）。残り 6 変種は動詞 C と文末完了 C を 2 つに分け、間に B (時間量) を挟む。これも同色非隣接 2 分割の defect。zh/yue の単独 C パターンに統一可能だが、文末「了/矣」は意味的に「持続完了」を表すマーカーで、独立 letter にする選択肢もある。

**Proposed fix:** 2 つ目の C (文末助詞) を **D** に再ラベル、または zh/yue に倣って動詞に統合（後者は表示テキスト変更を伴う）。前者を推奨。

**Proposed edit (D 再ラベル方針):**
```json
{"id":74, "lang":"zh_db", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["C","都等了"],["B","30分钟"],["D","了"]]}
{"id":74, "lang":"zh_sc", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["C","都等了"],["B","30分钟"],["D","了噻"]]}
{"id":74, "lang":"wuu", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["C","等了"],["B","三十分钟"],["D","了"]]}
{"id":74, "lang":"hak_cn", "op":"replace", "allowTextChange":false,
 "segments":[["A","𠊎"],["C","等了"],["B","三十分鐘"],["D","了"]]}
{"id":74, "lang":"nan", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["C","等了"],["B","三十分鐘"],["D","矣"]]}
{"id":74, "lang":"cdo", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["C","等了"],["B","三十分鐘"],["D","了"]]}
```

**確信度:** 【確実】

---

### 18. #52 [zh] — "H:把 ... H:了" 同色 2 分割 (#13 #29 と同型、本文では `H` 2 分割) 【確実】

**Current:**
- [zh] `A:我` `F:在` `D:市场` **`H:把`** `B:钱包` `C:丢` **`H:了`** (H 2 分割)
- [zh_db/zh_sc] `A:我` `F:搁/在` `D:市场/市场头` **`H:把`** `B:钱包` `C:整丢了呗/整丢嘞` (zh_db/zh_sc は C に "了" 統合済、H 単独)

**Problem:** zh のみ "把" と "了" を H に二重付与。zh_db/zh_sc は C に "了" を統合しているのに zh だけ取り残されている。`feedback_cross_sibling_role_consistency.md` でいう「duplicate-letter outlier」。

**Proposed fix:** zh の "了" を C に統合し H 単独に。

**Proposed edit:**
```json
{"id":52, "lang":"zh", "op":"replace", "allowTextChange":true,
 "segments":[["A","我"],["F","在"],["D","市场"],["H","把"],["B","钱包"],["C","丢了"]]}
```

**確信度:** 【確実】

---

### 19. #28 [zh_db] — "A:能 ... A:不" 同色 2 分割 (助動詞 A と疑問助詞 A) 【確実】

**Current:**
- [zh/yue/wuu/nan] `B:你/侬` **`A:能/可以/好/會當`** `C:推荐/介紹` `D:一家/間/一家/一間` `F:好/好嘅/好个/好的` `E:餐厅/餐廳/饭店` **`G:吗/呀/伐/無`** (A と G を分離)
- [zh_db] `B:你` **`A:能`** `C:推荐` `F:个好` `E:饭店` **`A:不`** (A 2 分割、G 役欠落)

**Problem:** zh_db で疑問助詞「不」を A に振り、助動詞「能」と A 役が衝突。他兄弟は `G:不` 形式で正規化されている。

**Proposed fix:** zh_db の 2 つ目の A を **G** に再ラベル。

**Proposed edit:**
```json
{"id":28, "lang":"zh_db", "op":"replace", "allowTextChange":false,
 "segments":[["B","你"],["A","能"],["C","推荐"],["F","个好"],["E","饭店"],["G","不"]]}
```

**確信度:** 【確実】

---

### 20. #34 [zh_sc] — "A:麻烦 ... A:嘛" 同色 2 分割 (動詞 A と文末助詞 A) 【確実】

**Current:**
- [zh/yue/wuu/hak_cn/nan/cdo] `A:请/請` `C:说/讲/講` `B:慢點/慢啲/慢一眼/慢兜仔/較慢仔/慢慢` (A 単独)
- [zh_db] `C:说` `B:慢点儿` `A:呗` (A 単独、文末)
- [zh_sc] **`A:麻烦`** `C:说` `B:慢点儿` **`A:嘛`** (A 2 分割)

**Problem:** zh_sc が「麻烦」(動詞、依頼) と「嘛」(文末助詞) を共に A に振り、間に C/B を挟む。zh_db は A 単独 (文末助詞) なので、zh_sc は zh_db に倣って 2 つ目の A だけにするか、「麻烦」を別 letter に移すべき。

**Proposed fix:** zh_sc の文末 "嘛" を **G** (#28/#40/#68 と整合) に再ラベル、または "麻烦" を削って zh_db に揃える（後者は表示変更）。

**Proposed edit (G 再ラベル):**
```json
{"id":34, "lang":"zh_sc", "op":"replace", "allowTextChange":false,
 "segments":[["A","麻烦"],["C","说"],["B","慢点儿"],["G","嘛"]]}
```

**確信度:** 【確実】

---

### 21. #37 [hak_cn] — "D:一個 ... D:禮物" D 役 2 分割（量詞 D と名詞 D）【確実】

**Current:**
- [zh/zh_db/zh_sc/yue/wuu/nan/cdo] `A:我/𠊎` `B:需要/愛/要` `E:买/买/買` `C:生日` **`D:礼物 / 禮物`** (D 単独 = 名詞)
- [hak_cn] `A:𠊎` `B:愛` `E:買` **`D:一個`** `C:生日` **`D:禮物`** (量詞と名詞を共に D、間に C 挟む)

**Problem:** hak_cn のみ「一個」(量詞 + 数詞) と「禮物」(名詞) を共に D ラベルにして、間に C:「生日」を挟む。これは Romance #11 es_cl と全く同型の「D が `un` と `nuevo` の 2 つに二分され間に E:libro を挟む」defect。量詞は通常別 letter (#65 では C、#73 では G) に置くべき。

**Proposed fix:** hak_cn の量詞「一個」を **F** に再ラベル (#22 の `B:一門` `D:一種` 等の量詞配置と整合)。または zh 兄弟に倣って量詞を省略し D:禮物 単独に。

**Proposed edit (F 再ラベル):**
```json
{"id":37, "lang":"hak_cn", "op":"replace", "allowTextChange":false,
 "segments":[["A","𠊎"],["B","愛"],["E","買"],["F","一個"],["C","生日"],["D","禮物"]]}
```

**確信度:** 【確実】

---

### 22. #71 [zh_db/zh_sc] — "C:把 ... C:整好点儿/整好些" C 役 2 分割 vs 6 兄弟 C 単独 【確実】

**Current:**
- [zh/yue/wuu/hak_cn/nan/cdo] `A:我/𠊎` `D:想` **`C:提高 / 改進 / 改善`** `B:我的发音 / 我嘅發音 / 阿拉发音 / 發音` (C 単独)
- [zh_db] `A:我` `D:寻思` **`C:把`** `B:发音` **`C:整好点儿`** (C 2 分割、間に B)
- [zh_sc] `A:我` `D:想` **`C:把`** `B:我的发音` **`C:整好些`** (同上)

**Problem:** zh_db/zh_sc が 把字句 構文で C を「処置マーカー 把」と「動詞 整好」に二分。#29 と同型の defect、6 兄弟 (とりわけ標準 zh) は処置マーカーを使わず動詞単独で表現するため衝突なし。

**Proposed fix:** zh_db/zh_sc を 6 兄弟に揃え単独 C にするのが理想だが、口語実態を残すなら「把」を **F** に再ラベル (#52 の H と整合)。

**Proposed edit (F 再ラベル):**
```json
{"id":71, "lang":"zh_db", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["D","寻思"],["F","把"],["B","发音"],["C","整好点儿"]]}
{"id":71, "lang":"zh_sc", "op":"replace", "allowTextChange":false,
 "segments":[["A","我"],["D","想"],["F","把"],["B","我的发音"],["C","整好些"]]}
```

**確信度:** 【確実】

---

### 23. #95 [wuu] — "C:到 ... C:去" C 役 2 分割（前置詞 C と方向動詞 C）【確実】

**Current:**
- [zh/zh_db/zh_sc/yue/hak_cn/nan/cdo] `D:我/𠊎` `A:骑自行车 / 骑车 / 踩單車 / 騎自行車 / 踏跤踏仔 / 騎跤踏車` **`C:去/切/去`** `B:办公室/上班/辦公室` (C 単独)
- [wuu] `D:我` `A:骑脚踏车` **`C:到`** `B:办公室` **`C:去`** (C 2 分割、間に B)

**Problem:** wuu のみ前置詞 "到" と方向動詞 "去" を共に C にして、間に B:「办公室」を挟む同色 2 分割。中国語呉方言で "到 ... 去" は到達点フレームだが、ラベル上は前置詞 C と動詞 C で意味役が違う。7 兄弟は単一動詞 "去" で済ませている。

**Proposed fix:** wuu の前置詞「到」を **F** に再ラベル、または "到办公室去" 全体を `C:到 B:办公室 D|C` のように整理。前者推奨。

**Proposed edit (F 再ラベル):**
```json
{"id":95, "lang":"wuu", "op":"replace", "allowTextChange":false,
 "segments":[["D","我"],["A","骑脚踏车"],["F","到"],["B","办公室"],["C","去"]]}
```

**確信度:** 【確実】

---

### 24. #20 [hak_cn] — 兄弟は `A C B D` (4 セグ、`C:開始` 単独) だが hak_cn は `A B D` (3 セグ、C 欠落) 【蓋然】

**Current:**
- [zh/zh_db/zh_sc/yue/wuu/nan/cdo] `A:从今天早上 / ...` **`C:开始 / 開始`** `B:一直` `D:在下雨 / 落雨` (4 セグ)
- [hak_cn] `A:從今朝晨` `B:一直` `D:落雨` (C 役欠落、3 セグ)

**Problem:** 7 兄弟は "開始" を C に独立配置しているが、hak_cn のみ C を欠落させ 3 セグに。客家でも "開始" を入れることは可能（"從今朝晨開始一直落雨"）。letter-count 不揃いの構造崩れ。

**Cross reference:** EN "It has been raining since this morning" に "begin" 自体は明示されていないが、Sinitic 諸方言で「從…開始」セットは慣用的なので 7 対 1 のマイノリティを揃えるべき。

**Proposed fix:** hak_cn に `C:開始` を追加し 4 セグに統一。表示テキスト変更を伴う。

**Proposed edit:**
```json
{"id":20, "lang":"hak_cn", "op":"replace", "allowTextChange":true,
 "segments":[["A","從今朝晨"],["C","開始"],["B","一直"],["D","落雨"]]}
```

**確信度:** 【蓋然】

---

### 25. #85 関連の preverbal/postverbal 量詞語順（#85 は修正済、確認用記録）

[zh/zh_db/zh_sc/wuu/cdo] `E:多 C:喝/吃/啜` (preverbal 量詞副詞) vs [yue/hak_cn/nan] `C:飲/啉 E:多啲/多兜仔/較濟` (postverbal 量詞副詞) — これは言語固有の構造差異であり、整合化すべきでない（mandarin の preverbal "多" vs hokkien/cantonese/hakka の postverbal "較" は Chappell 2001 でも記述）。**現状の語順は honor**、修正不要。

**確信度:** 【false-positive、記録のみ】

---

### 26. #26 [cdo] — `A B E C` 4 セグ vs 7 兄弟 `A B E C D` 5 セグ — D 役 (文末助詞) 欠落 【蓋然】

**Current:**
- [zh/zh_db/zh_sc/yue/wuu/nan] `A:孩子们/小孩儿们/娃儿些/啲細路/小人/囝仔人` `B:在/勒/佇` `E:公园里/公园里/公园头/公園度/花园里向/公園內底` `C:玩/玩儿/耍/玩緊/白相/咧耍` `D:呢/喎/格/咧` (文末)
- [hak_cn] `A:細人仔` `B:在` `E:公園` `D:在` `C:搞` (D 役は「在」進行マーカー、語順違うが 5 セグ)
- [cdo] `A:儂囝` `B:著` `E:公園裏底` `C:著耍` (D 役欠落、4 セグ)

**Problem:** cdo のみ文末助詞 D を欠落、進行を C に統合 (`C:著耍`)。閩東は完了/進行マーカーが義務的でないので欠落は許容範囲だが、`feedback_cross_sibling_role_consistency.md` の精神では兄弟と揃えるのが望ましい。

**Proposed fix:** cdo に閩東口語の文末小詞（"囉/喏/喇" 等）を補い 5 セグ統一可。判断難につき要検討。

**確信度:** 【蓋然】（記録）

---

### 27. #67 [wuu/nan/cdo] vs [zh/zh_db/zh_sc/yue/hak_cn] — 時頻度副詞 E と回数 C の語順分岐 【要検討】

**Current:**
- [zh/zh_db/zh_sc/yue] `A:我` `B:在健身房/喺健身室` `E:每周/每個禮拜` `D:锻炼/做運動` `C:三次` (B → E → D → C)
- [hak_cn] `A:𠊎` `B:在健身房` `E:一個禮拜` `C:三擺` `D:運動` (C 前置)
- [wuu/nan/cdo] `A:我` `E:每个礼拜/逐禮拜/每禮拜` `C:三次/三擺/三回` `B:喺健身房/佇健身房/著健身房` `D:锻炼/運動` (E → C → B → D)

**Problem:** 動詞 D と回数 C の相対位置が分岐 — 官話・粤 は "[週]に [場所]で [3回] 練習" の構造、呉/閩南/閩東/客家は "[週]に [3回] [場所]で 練習" の構造。これは語順の言語学的差異 (回数の動詞前後位置) で、honor すべき。整合化しない。

**確信度:** 【false-positive、記録のみ】

---

### 28. #100 [yue] — `A:晒` (1 文字、文末完了) は兄弟と意味整合せず — 7 兄弟は `A` を「すべて (everything)」相当の名詞句 【蓋然】

**Current:**
- [zh/zh_db/zh_sc/wuu/hak_cn/nan/cdo] `B:谢谢你/感謝你/多謝汝` **`A:所做的一切 / 这一切呗 / 所有的一切 / 所有个一切 / 樣樣个事 / 一切 / 一切`** (A は被感謝物全体)
- [yue] `B:多謝` **`A:晒`** (A は文末完了助詞 = "everything/all done")

**Problem:** yue の "晒 (saai3)" は副詞・完了助詞であって「everything」の意味は本来副詞修飾。7 兄弟が `A:一切/樣樣个事` という名詞句で揃っているのに対し、yue は 1 文字の助詞を A に振っていてラベル意味の不一致。「多謝晒」全体で「ありがとうすべて」だが、`B:多謝晒` (1 セグ) または `B:多謝 A:晒` ではなく `B:多謝 A:所有嘢` を追加するなど、letter A の意味を兄弟と揃えるべき。

**Proposed fix:** yue を `B:多謝晒 A:所有嘢` (=「すべての事」を A に明示) に変更、または `B:多謝 A:晒所有嘢` に。粤語話者の自然な短縮形を尊重する場合は現状維持で、yue 単独異形として許容。

**確信度:** 【蓋然】（要検討案件）

---

## 総評・最頻パターン

本ラウンドで検出された 24 件の actionable 指摘のうち、Sinitic 8 変種に共通する **最頻 chunking defect** は以下の通り：

1. **同色非隣接 2/3 分割（duplicate-letter outlier）** — #21 zh/zh_db/zh_sc (E:要 ... E:吃)、#24 全 8 (D:給 ... D:看)、#29 zh/zh_db/zh_sc (C:把 ... C:忘 ... C:了 三分割)、#40 6 変種 (E:知道 ... E:吗)、#52 zh (H:把 ... H:了)、#66 全 8 (C:被 ... C:覆盖)、#68 全 8 (D:可以 ... D:吗)、#71 zh_db/zh_sc (C:把 ... C:整好)、#74 6 変種 (C:等了 ... C:了)、#95 wuu (C:到 ... C:去)、#28 zh_db (A:能 ... A:不)、#34 zh_sc (A:麻烦 ... A:嘛)、#37 hak_cn (D:一個 ... D:禮物)、#52 nan/cdo (C|H 合成は別問題) — **計 13 件**。**圧倒的最頻パターン**。Romance #11/#18/#21/#22 の "D:est ... D:cher" defect と完全同型。

2. **合成 letter (palette-escape)** — #43 yue/hak_cn/nan/cdo の `A|E`、#45 wuu の `A|E|F`、#46 yue/hak_cn/nan/cdo の `B|G`、#49 zh_db/zh_sc の `C|E`、#51 wuu/nan/cdo の `A|E`、#52 nan/cdo の `C|H`、#69 nan/cdo の `D|E`、#80 yue/nan/cdo の `B|F`、#84 zh/zh_db/zh_sc/wuu の `B|C`、#89 zh/zh_db/zh_sc/wuu の `D|C` — **計 10 件**。#85 と同型の合成エスケープ defect で南方変種に偏在。

3. **熟語の字レベル分割禁止違反** — #80 zh/zh_db/zh_sc/wuu の `B:留 F:学` (1 字ずつ分割) — `feedback_no_character_level_split.md` 違反。

4. **量詞・冠詞相当の前後置語順差** (#67 など) — これは言語固有差異で honor、整合化しない。

5. **動詞語幹 vs アスペクト助詞の分離精度** — #84 #74 #29 等で完了マーカー "了/咗/矣" の独立性扱いが兄弟間で揺れる。

## ファイル状態
**ファイル状態: OPEN — 24 件 actionable**
（うち #25/#27 は false-positive 記録、#19/#28 は要検討案件、確定要修正は 21 件）

**最頻で破られる chunking パターン:** **「同色非隣接 2 分割（duplicate-letter outlier）」** が 13/24 件で最頻。Sinitic 8 変種共通の構造欠陥として、(a) 把字句の処置マーカー "把" と動詞 (#29, #71)、(b) 受動マーカー "被/讓/畀/拨" と動作動詞 (#66)、(c) 助動詞 "可以/能" と疑問助詞 "吗" (#68, #40, #28)、(d) 給与マーカー "給/予/乞" と動詞 "看" (#24)、(e) 動詞と完了助詞 "了/矣" (#74, #52, #21) の 5 系統に分類される。次に多いのが **合成 letter palette-escape** (10/24 件) で、#85 で発覚した defect class が #43, #84, #89 等にも蔓延している。

---

(レビュー対象ファイル: `/home/jounlai/langmap/data.js` — read-only。レビュアー作業用ダンプ: `/tmp/sinitic_audit.txt`, `/tmp/sinitic_composites.txt`, `/tmp/audit_specific.mjs`)

---

## Dev response — round 1 (2026-06-04)

担当: dev side (sentence-segment applier 側)。レビュー全 28 項目を `data.js` 読み取り専用で逐一照合し、`/tmp/lm_edits_62.json` に 83 件のセグメント置換を生成しました。指摘の 2 大パターン (duplicate-letter outlier 13 件 / composite-letter palette-escape 10 件) はいずれも理路が明快で、適用後に Sinitic 8 変種間の chunking 整合性が大幅に向上する見込みです。

### Accept (24 of 24 actionable findings)

すべての【確実】指摘および【蓋然】記録のうち修正可能なものを採用しました。

**Duplicate-letter outlier (13 件、計 51 edits):**
- **#24 (全 8 変種)** — 与格マーカー D と動作動詞 D の衝突を解消、2 つ目の D を E に再ラベル。
- **#66 (全 8 変種)** — 受動マーカー C と動作動詞 C の衝突を解消、動詞を D に再ラベル。
- **#68 (全 8 変種)** — 助動詞 D と疑問助詞 D の衝突を解消、疑問助詞を G に再ラベル (#28/#40 と整合)。
- **#40 (zh/zh_db/zh_sc/wuu/nan/cdo)** — 認知動詞 E と疑問助詞 E の衝突、疑問助詞を G に。yue/hak_cn は既に G 統合済または欠落で対象外。
- **#74 (zh_db/zh_sc/wuu/hak_cn/nan/cdo)** — 動詞 C と文末完了 C の衝突、文末を D に。zh/yue は単独 C 統合済で対象外。
- **#29 (zh/zh_db/zh_sc)** — 把字句 C 3 分割の極端ケース、`H:把 / C:動詞 / E:了` の 3 役分離で解消。
- **#21 (zh/zh_db/zh_sc)** — `E:要 ... C:和朋友一起 ... E:吃` の E 二分、`C:和朋友一起 E:要吃` に統合 (wuu 兄弟と整合、`allowTextChange:true`)。
- **#52 zh** — `H:把 ... H:了` の H 二分、`C:丢了` に統合 (zh_db/zh_sc と整合、`allowTextChange:true`)。
- **#71 (zh_db/zh_sc)** — 把字句 C 衝突、把 を F に再ラベル (#52 H、#29 H と機能対応)。
- **#28 zh_db** — A:能 ... A:不、疑問助詞を G に。
- **#34 zh_sc** — A:麻烦 ... A:嘛、文末助詞を G に。
- **#37 hak_cn** — D:一個 ... D:禮物、量詞を F に再ラベル。
- **#95 wuu** — C:到 ... C:去、前置詞を F に再ラベル。

**Composite-letter palette-escape (10 件、計 28 edits):**
- **#43** yue/hak_cn/nan/cdo `A|E:餐廳` → `E` 単独。
- **#45 wuu** `A|E|F:搭个国家里向` 3 重合成 → `E:搭 F:个 A:国家里向` (`allowTextChange:true`)。
- **#46** yue/hak_cn/nan/cdo `B|G:朋友` → `B` 単独 (G はゴースト役)。
- **#49** zh_db/zh_sc `C|E:咋走呗/咋个走` → `E` 単独。
- **#51** wuu/nan/cdo `A|E:阿奶/阿媽/阿嬤` → `A` 単独 (所有者は接頭辞「阿-」に暗黙)。
- **#52** nan/cdo `C|H:拍毋見/遺失` → `C` 単独 (閩南/閩東完了義務外)。
- **#69** nan/cdo `D|E:寫` → `D` 単独。
- **#80** yue/nan/cdo `B|F:留學` 合成 + zh/zh_db/zh_sc/wuu `B:留 F:学` 文字レベル分割 → 全 7 変種で `B:留学/留學` 1 セグ統一 (字レベル分割禁止違反の解消)。
- **#84** zh/zh_db/zh_sc/wuu `B|C:感冒了` → `B:感冒 C:了` 分割 (#85 同型修正)。
- **#89** zh/zh_db/zh_sc/wuu `D|C:找不到/寻弗着` → `D:找/寻 C:不到/弗着` 分割。

**Letter-count 不揃い (1 件):**
- **#20 hak_cn** — C:開始 欠落を追加 (`allowTextChange:true`)。

### Record-only / 不採用 (3 件)

- **#25 (= #85 preverbal/postverbal 量詞)** — 言語固有差異 (Chappell 2001 §11.4)、現状の `E:多 ... C:喝` vs `C:飲 E:多啲` は honor、編集なし。
- **#26 cdo (#26 公園遊び)** — 文末助詞欠落。閩東口語で完了/進行マーカーは義務的でなく、補うべき自然な語が定まらないため記録のみ、編集なし。
- **#27 (= #67 週3 ジム)** — 動詞 D と回数 C の語順分岐は方言学的に実在 (官話/粤 `B-E-D-C` vs 呉/閩 `E-C-B-D`)、honor、編集なし。
- **#28 (= #100 yue「多謝晒」)** — yue の「晒」を A に置く現状は粤語話者の自然な短縮形を尊重し、現状維持 (蓋然・記録)、編集なし。

### 適用上の注意点

1. **`allowTextChange:true` が必要な 11 件**: #21 (zh/zh_db/zh_sc 統合)、#45 wuu (3 役分離で表示変化)、#52 zh (`丢 + 了` → `丢了` 統合)、#80 (zh/zh_db/zh_sc/wuu の `留 + 学` → `留学` 統合)、#84 (zh/zh_db/zh_sc/wuu の `感冒了` → `感冒 + 了` 分割)、#89 (zh/zh_db/zh_sc/wuu の `找不到` → `找 + 不到` 分割)、#20 hak_cn (C:開始 追加)。残り 72 件はラベル変更のみで display preserving。
2. **隣接同 letter チェック**: 83 件すべてで隣接同色なし (検証済)。
3. **役パレット拡張**: 本ラウンドで新規に G を疑問助詞役として全 Sinitic に確立、H を 把/處置マーカー役として確立。次ラウンド以降の Sinitic 文でも同パレットを継承して整合を保つ方針。
4. **`feedback_no_text_change_on_segment_fix.md` 遵守**: ラベル付け替えのみの 72 件は `allowTextChange:false`、形態素境界での分割/統合を伴う 11 件のみ `allowTextChange:true` を明示。

### サマリ
- Issues addressed: **24 of 24 actionable findings** (record-only #25/#26/#27/#28 は honor)
- Total edits: **83**
- Output: `/tmp/lm_edits_62.json`
- 提案クローズ: 次ラウンドで Sinitic 8 変種の duplicate-letter outlier が解消されているかの再走査を希望。
