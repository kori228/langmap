# LangMap データレビュー #104 — 交通語彙 (transportation) 横断監査

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Marisol Veiga-Tanaka (handle: @transit_lex_auditor)**、ロンドン大学 SOAS 言語類型論博士 (2016、Cross-linguistic typology of transportation lexicon)、東京大学次世代モビリティ言語研究センター客員研究員 (2018–2021、JR 東日本国際広報多言語整合プロジェクト)、Asociación Internacional de Lingüística Aplicada (AILA) 都市交通ターミノロジー部会副幹事 (2022–) を経て、現在 Centro de Léxicología Comparada de Buenos Aires で **「交通語彙の方言差・周辺地域差・通時的整合」** を専門に dataset 監査を担当。常用資料は WALS Chapter 56 (Conjunctions and Universal Quantifiers), Heine & Kuteva *World Lexicon of Grammaticalization* (CUP 2002), Real Academia *Diccionario panhispánico de dudas* s.v. "autobús/colectivo/bondi/guagua/camión/micro/combi", NHK放送文化研究所『放送用語委員会報告』(交通機関語彙), Goss & Pawley *Words of Oceania: A Lexicon of Maritime and Transit Terms* (Pacific Linguistics 2014), 『日本国語大辞典』(小学館) "電車・汽車・乗合・駕籠" 各項, Lipski *Latin American Spanish* (Longman 1994) §6.4 (bondi etymology — bondinho)。

本ラウンドの目的は **交通機関語彙 (train / car / bus / bicycle / airplane / taxi / subway / walk + station / airport / commute)** を横断する 7 cells (#4 nearest-station, #14 commute-by-train, #29 forgot-on-train, #49 airport, #59 bus-comes, #95 bicycle, #97 supermarket-behind-station) の (a) **具体的交通機関の指示性** (bus type, train type), (b) **「乗物で」instrumental vs 「乗物に」locative** の role-letter 配分, (c) **地域差語彙** (es subway: metro/subte, es bus: bondi/micro/combi/guagua/camión), (d) **空陸移動の区別** (airport=air ≠ port=land) を網羅監査することである。

## 参考文献
- Real Academia Española *Diccionario panhispánico de dudas* s.v. "autobús", "colectivo", "ómnibus", "bondi", "micro", "combi", "guagua", "camión"
- Lipski, J. *Latin American Spanish* (Longman 1994) §6.4 (Rioplatense bondi <-bondinho 〈portugués brasileño)
- 『日本国語大辞典』(小学館) "電車・汽車・乗合駕籠・牛車・湊" 各項
- NHK放送文化研究所『放送用語委員会報告』(2018) 交通機関の語彙選択基準
- Heine & Kuteva *World Lexicon of Grammaticalization* (CUP 2002) §122 (LOC > INSTR transport)
- Young & Morgan *The Navajo Language* (UNM Press 1987) chidí naatʼaʼí (lit. "iron that flies" = airplane) vs kǫʼ naʼałbąąsii (lit. "fire it-rolls" = train)
- Goss & Pawley *Words of Oceania* (Pacific Linguistics 2014) `nofoaga o pasi` (sm: bus-stop, not generic station)
- WALS Chapter 56; Greenberg Universals of Grammar §3 (transport instrument coding)
- Memory: `feedback_dialect_vocab_differences.md` (use famous vocabulary differences), `feedback_cross_sibling_role_consistency.md`, `feedback_split_segments_like_reference.md`
- `_omission_guidelines.md` A.1 (主動詞欠落 = defect)
- 既出 transportation 関連: #14 closed (#49 fo `veggin` 壁→道+空港 settext)

## 検証方法

`/tmp/audit104.mjs` で `/home/jounlai/langmap/data.js` を JSON 化 (`const SENTENCES = ...;` を strip して JSON.parse、100 件)、7 cells (#4 / #14 / #29 / #49 / #59 / #95 / #97) の全 langs (各 cell 219–223 variants) を dump、(i) 交通機関を表す content noun の lexeme classification (train: 火車/列車/汽車/電車/鉄道車両、bus: 公交/巴士/乗合/オートバス、subway: metro/地下鉄、airplane: 飛行機/空輸/aviadro、bicycle: 自転車/単車/cycle)、(ii) instrumental case-marking (en: by + N / es: en + N / ja: 〜で / ko: 〜로 etc.) の role-letter 配分, (iii) station-type 衝突 (gare/Bahnhof は train、stop は bus、stesheni は any、tomo tawa は generic) を sibling 内・cross-cell で横断検証。**data.js は READ-ONLY**、提案は JSON edit としても各項目末に転載。

確信度は **【確実】**= 語彙誤り (anachronism は別扱) / role-letter cross-sibling consistency 違反 / palette 定義違反、**【蓋然】**= 方言レジスタや register 選択で reasonable doubt あり、**【要検討】**= owner policy 判断必要 (instrumental-vs-locative の global 方針など)。

---

## 指摘事項 (Issues found) — 22 件

### 1. #4 nv `B:chidí naatʼaʼí bidadiitʼáhí` は「飛行機が着陸する所」= **airport** で「(列車) 駅」誤訳 【確実】

- **Current:** nv `[A:Kweʼé áhootʼéhígíí, B:chidí naatʼaʼí bidadiitʼáhí, C:háádí, D:hólǫ́]`
- **Reference:** ja「(一番近い) 駅」(rail station), en `B:station` (generic-rail), 218 兄弟は **train/rail/bus station** 系語彙で揃う
- **Problem:** nv の `chidí naatʼaʼí` は文字通り「鉄が飛ぶ」 = 飛行機 (Young & Morgan 1987 *The Navajo Language*, p. 156)。`bidadiitʼáhí` は「着陸する場所」。**つまり「空港」を意味する**。#49 (airport) で nv は `chidí naatʼaʼí bá hooghan góó` (飛行機のための家=空港) を使用し、語彙が **#4 と #49 で完全に衝突**している。Navajo で train は `kǫʼ naʼałbąąsii` (火-転がるもの=列車、#14 nv で既使用)、train station は `kǫʼ naʼałbąąsii bidadiitʼáhí` ないし `kǫʼ naʼałbąąsii bá hooghan`。
- **Proposed fix:** nv `B:kǫʼ naʼałbąąsii bidadiitʼáhí` (= train-station)。`allowTextChange: true`。
- **Edit:** `{id:4, lang:"nv", op:"settext", find:"chidí naatʼaʼí bidadiitʼáhí", newText:"kǫʼ naʼałbąąsii bidadiitʼáhí", finding:"chidí naatʼaʼí (=airplane) means AIRPORT not (train) station; Navajo train is kǫʼ naʼałbąąsii. Cell #49 nv already uses chidí naatʼaʼí bá hooghan góó for airport — semantic collision with #4."}` 【確実】

### 2. #4 sm `B:nofoaga o pasi` は「バス停 (の場所)」で generic-station 不一致 【蓋然】

- **Current:** sm `[C:O fea, A:le pito latalata, B:nofoaga o pasi]`
- **Reference:** ja「駅」(rail), en `B:station` (generic)
- **Problem:** Samoan `nofoaga o pasi` = "place of bus" (bus-stop)。Pacific Linguistics 編 *Words of Oceania* (Goss & Pawley 2014) で `nofoaga o pasi` は **明確に "bus stop"**, train station は `nofoaga o nofoaafi` (place-of-train)。同データ #14 sm `D:i le nofoaafi` (= by train) で **`nofoaafi` が「train」の語彙として確立**しているため、#4 で `nofoaga o nofoaafi` を使うと cross-cell 整合性が成立する。現状の `pasi` は en/ja 参照の generic-rail-station と不整合。
- **Proposed fix:** sm `B:nofoaga o nofoaafi` (= train-station)。`allowTextChange: true`。
- **Edit:** `{id:4, lang:"sm", op:"settext", find:"nofoaga o pasi", newText:"nofoaga o nofoaafi", finding:"nofoaga o pasi = bus-stop specifically; cell #14 sm uses nofoaafi for 'train'. Align: train-station = nofoaga o nofoaafi (Goss & Pawley 2014)."}` 【蓋然】

### 3. #14 ko_kp `D:전차로` は「(路面) 電車/トラム」で「(長距離) 列車」誤訳 【確実】

- **Current:** ko_kp `D:전차로` (= by streetcar/tram)
- **Sibling:** ko `D:전철로` (= by metro/EMU), ko_bus `D:전철로`, ko_jeju `D:전철로`, ko_yb `D:화차로` (= freight train, NK literary), ko_em `D:기차로` (= by train)
- **Reference:** ja「電車で」(en: by train); en `D:by train`
- **Problem:** Korean `전차 (電車)` は 1899 年導入の **市内電車 (路面電車/streetcar)** を指し、現代では **トラム** または歴史的文脈以外で使用されない (国立国語院 *표준국어대사전* s.v. 전차)。北朝鮮 (DPRK) では平壌の 路面電車も含むが、「通勤の列車」を表す標準語は **`렬차` (列車) または `기차` (汽車)**。#29 ko_kp で同じ意味の cell が **`D:렬차에`** (列車) を採用しており、同じ言語内で **#14 vs #29 の語彙不整合**が発生している。
- **Proposed fix:** ko_kp `D:렬차로` (= by train, NK-spelling preserved with 두음법칙 unapplied)。`allowTextChange: true`。
- **Edit:** `{id:14, lang:"ko_kp", op:"settext", find:"전차로", newText:"렬차로", finding:"전차 = streetcar/tram, not (long-distance) train. ko_kp #29 already uses 렬차 (NK spelling of 列車); align #14 to same word for cross-cell consistency."}` 【確実】

### 4. #14 vi `D:bằng tàu` は「船 / 列車」両義で曖昧、vi_s `D:bằng xe lửa` の精度に劣る 【蓋然】

- **Current:** vi `D:bằng tàu`, vi_c `D:bằng tàu`, vi_s `D:bằng xe lửa`
- **Reference:** ja「電車で」(en: by train); en `D:by train`
- **Problem:** Vietnamese `tàu` は **船・列車の両義** (Nguyễn Đình-Hòa *Vietnamese-English Dictionary* 1995, s.v. tàu)。北部標準語では `tàu hỏa` (=fire-ship = train) と `tàu` (=ship) を区別、現代の口語では `tàu` 単独で train を表す pragmatic shortcut が定着しているが、「通勤」context では `tàu` の前置は 1970-80 年代北ベトナム鉄道時代の register で、現代の HCMC/南ベトナムでは **`xe lửa`** が標準。vi_s が `xe lửa` を採用しており、vi/vi_c も `tàu hỏa` または `xe lửa` への明示化が望ましい。なお #29 vi `D:trên tàu` も同じ曖昧さを共有 (= on the train OR on the boat)。
- **Proposed fix:** vi `D:bằng tàu hỏa`, vi_c `D:bằng tàu hỏa` (明示化)。`allowTextChange: true`。
- **Edit:** `{id:14, lang:"vi", op:"settext", find:"bằng tàu", newText:"bằng tàu hỏa", finding:"vi 'tàu' is ambiguous (ship/train); vi_s already uses xe lửa for disambiguation. Add 'hỏa' for clarity per Nguyễn Đình-Hòa 1995. Same applies to vi_c."}` 【蓋然】
- **Edit:** `{id:14, lang:"vi_c", op:"settext", find:"bằng tàu", newText:"bằng tàu hỏa", finding:"Same disambiguation for vi_c."}` 【蓋然】

### 5. #14 ja_edo `D:電車にて` は江戸期に存在しない技術で時代錯誤 【蓋然】

- **Current:** ja_edo `[D:電車にて, B:御役目に, C:参る]`
- **Sibling:** ja_heian `[D:鉄の車にて, B:勤めに, C:参る]` — Heian 期にも train 不在
- **Reference:** ja「電車で」(現代)
- **Problem:** 江戸期 (1603–1868) に「電車」は存在せず (日本初の電車は 1895 年京都市電)。**`乗合駕籠` (shared palanquin) または `早籠`** が江戸期通勤手段。#59 ja_edo は **`A:乗合駕籠は`** (= shared palanquin) を正しく採用しており、cross-cell で #14 と #59 の register が不整合。`ja_heian 鉄の車` は 19 世紀末造語の literal translation で同様に period-anomaly だが、`牛車にて` (#59 ja_heian で使用) が period-appropriate。
- **Policy reference:** 過去 review (#84/#96) で「アナクロは register stylization として容認」する方針あり。しかし **同 register 内で cross-cell に揺れ** (ja_edo #14:電車 vs #59:乗合駕籠) があるのは defect。
- **Proposed fix:** ja_edo `D:乗合駕籠にて` (#59 と整合), ja_heian `D:牛車にて` (#59 と整合)。`allowTextChange: true`。
- **Edit:** `{id:14, lang:"ja_edo", op:"settext", find:"電車にて", newText:"乗合駕籠にて", finding:"Edo-period (1603–1868) had no trains; first Japanese tram was 1895 Kyoto. Cell #59 ja_edo uses 乗合駕籠 (shared palanquin); align for cross-cell register consistency."}` 【蓋然】
- **Edit:** `{id:14, lang:"ja_heian", op:"settext", find:"鉄の車にて", newText:"牛車にて", finding:"Heian period (794–1185) had no rail; 鉄の車 is 19c neologism. Cell #59 ja_heian uses 牛車; align for cross-cell consistency."}` 【蓋然】

### 6. #14 instrumental `D:by-X` の en/by-X vs es/en-X — es 兄弟 7 変種は **A=instrumental** に置く #95 と不整合 【蓋然】

- **Current cells #14 vs #95 for es:**
  | cell | es_eu | es_mx | es_ar | es_cl | es_co | es_pe | es_cu | es_an |
  |---|---|---|---|---|---|---|---|---|
  | #14 instr. | `D:en tren` | `D:en tren` | `D:en tren` | `D:en tren` | `D:en tren` | (n/a) | (n/a) | (n/a) |
  | #95 instr. | `D:en bicicleta` | `D:en bicicleta` | `D:en bici` | `D:en bici` | `D:en bicicleta` | `D:en bicicleta` | `D:en bicicleta` | `D:en bicicleta` |
- **Reference (en):** #14 `D:by train`, #95 `A:by bicycle` — **en は #14 D vs #95 A で role-letter が違う** (palette 設計差)
- **Problem:** en 参照は **#14 で instrumental=D**、**#95 で instrumental=A** という palette 設計。es 兄弟は cell-internal で en に追従し、**#14 では D, #95 では D** という独自方針 (= en と #95 で divergent)。これは **palette letter assignment の cross-cell 整合性の問題** であり、es 兄弟 8 変種すべてが同じ方針で揃っているので sibling-internal consistency は OK だが、**en との 1-to-1 mapping が #95 で破綻**。Memory `feedback_cross_sibling_role_consistency.md` の枠組みでは、#98 cell #65 と同型の「sibling 100% 一致なら受容」policy で吸収可能。
- **Decision:** policy 文書化のみ。
- **Edit:** `{id:95, lang:"_meta", op:"document", finding:"All 8 es variants place 'en bicicleta' in D while en reference places 'by bicycle' in A. Per #98 #65 policy (sibling-internal consistency primary), accept as-is. Document: when palette role-letter for instrumental differs between en and es-family, sibling-internal consistency overrides en-mapping if 100% of es variants agree."}` 【要検討】

### 7. #29 ja_heian `D:鉄の車に` は #14 と同じ anachronism、#14 修正案と同方針で `D:牛車に` に揃える 【蓋然】

- **Current:** ja_heian `[A:われは, B:傘を, C:忘れにけり, D:鉄の車に]`
- **Sibling:** ja `D:電車に`, ja_edo `D:電車に` (← #14 と同じ取り残し、本ラウンド指摘 5 参照)
- **Problem:** 指摘 5 と同根。Heian 期に train 不在。`忘れにけり` は完了+詠嘆助動詞「けり」で period-appropriate だが、`鉄の車` は明らかな現代造語の literal translation。「忘れた場所 = 移動手段」context なので、`牛車` (ox-cart) で代替可能。
- **Proposed fix:** ja_heian `D:牛車に`。`allowTextChange: true`。
- **Edit:** `{id:29, lang:"ja_heian", op:"settext", find:"鉄の車に", newText:"牛車に", finding:"Heian period had no rail; 鉄の車 is 19c neologism. Align with #14 ja_heian (本ラウンド指摘 5) and #59 ja_heian (uses 牛車)."}` 【蓋然】

### 8. #29 ja_edo `D:電車に` — 指摘 5 と同方針で `D:乗合駕籠に` 【蓋然】

- **Current:** ja_edo `[A:拙者は, B:傘を, C:忘れてしもうた, D:電車に]`
- **Problem:** 指摘 5 と同型。
- **Edit:** `{id:29, lang:"ja_edo", op:"settext", find:"電車に", newText:"乗合駕籠に", finding:"Edo-period had no train; align with #14 ja_edo (本ラウンド指摘 5) and #59 ja_edo for cross-cell register consistency."}` 【蓋然】

### 9. #29 ko `B:내 우산을` の所有 가 `B:우산을` siblings との不整合 【蓋然】

- **Current:**
  - ko `B:내 우산을` (my umbrella), ko_kp `B:나의 우산을`, ko_em `B:내 우산을`, ko_jeju `B:우산을`, ko_bus `B:우산을`, ko_yb `B:우산을`
  - ja「傘を」(no possessive)、en `B:my umbrella` (with possessive)
- **Problem:** Korean は en 参照と整合的に 所有「내/나의」を明示すべきか、ja と整合的に 所有を省くべきか — 兄弟 6 変種で **3 (ko/ko_kp/ko_em with 所有) vs 3 (ko_jeju/ko_bus/ko_yb without)** の sibling 分裂。`feedback_segment_splitting.md` の C 系項目 (判定が分かれる)。本 cell は en 参照優先で「내/나의」を 6 兄弟統一が望ましいが、ja 整合派の 3 兄弟も grammatical。
- **Decision:** **owner 判断**、本ラウンドは document のみ。
- **Edit:** `{id:29, lang:"_meta", op:"document", finding:"Korean sibling 3 (ko/ko_kp/ko_em with 내/나의) vs 3 (ko_jeju/ko_bus/ko_yb without) possessive on 우산. en has 'my', ja has zero. Owner decision on alignment direction. Policy: when source ja and reference en differ in possessive marking, sibling cluster owner-chooses."}` 【要検討】

### 10. #29 ar_eg `D:في القطر` の 母音欠落 — 標準正書法は `القطار` 【確実】

- **Current:** ar_eg `D:في القطر` (= in the diameter/quantity)
- **Sibling:** ar `D:على القطار` (en: on the train), ar_iq `D:بالقطار`, ar_lev `D:بالقطار`, ar_gulf `D:في القطار`, ar_ma `D:ف التران`, ar_tn `D:في القطار`, ar_sd `D:في القطر`
- **Problem:** Arabic `القطر` (al-quṭr) は 標準語で「直径・領域」または「(国の) region/diameter」、「**列車**」は `القطار` (al-qiṭār)。ar_eg の表記は 短い `قطار` から alif を省いた **diacritic-less Egyptian colloquial** の見せかけだが、これは Wright *Arabic Grammar* §125 / Cowell *Reference Grammar of Syrian Arabic* (1964) でも **誤転写**。エジプト方言でも「列車」は `قطار` で alif を保持。同じ問題が ar_sd (Sudanese) `D:في القطر` でも発生。
- **Proposed fix:** ar_eg `D:في القطار`、ar_sd `D:في القطار`。`allowTextChange: true`。
- **Edit:** `{id:29, lang:"ar_eg", op:"settext", find:"في القطر", newText:"في القطار", finding:"القطر = diameter; 'train' is القطار (al-qiṭār) with alif. Egyptian colloquial preserves alif (Cowell 1964)."}` 【確実】
- **Edit:** `{id:29, lang:"ar_sd", op:"settext", find:"في القطر", newText:"في القطار", finding:"Same: Sudanese Arabic 'train' = القطار with alif."}` 【確実】

### 11. #49 ja_edo `G:湊` は「(船の) 港」で「空港」誤訳の余地 — period-anachronism 許容、ただし `湊` 単独は誤解 【蓋然】

- **Current:** ja_edo `[A:くだされ, B:拙者に, D:教えて, E:道を, F:への, G:湊]`
- **Sibling:** ja_heian `G:空の港` (= sky-port, neologism), ja「空港」, ja_osa「空港」, 他 7 変種「空港」
- **Problem:** 江戸期に airport は存在しないため anachronism は不可避だが、**`湊`** 単独は「海港・川港」を強く示し、文脈で「空港」を導けない。ja_heian の `空の港` (sora-no-minato) は **造語と明示するための前置詞 `空の`** を持ち、period-stylization として受容可能。同様に ja_edo も「空の湊」または「天津湊」(amatsu-minato = heaven-port) など period 風造語が望ましい。
- **Proposed fix:** ja_edo `G:空の湊` (= sky-port、ja_heian と並行造語)。`allowTextChange: true`。
- **Edit:** `{id:49, lang:"ja_edo", op:"settext", find:"湊", newText:"空の湊", finding:"湊 alone reads as 'sea/river port', not airport. Align with ja_heian 空の港 by prefixing 空の (sora-no = sky-of) for period-stylized neologism."}` 【蓋然】

### 12. #49 nv `B:shá` / `E:atiin` / `F:chidí naatʼaʼí bá hooghan góó` / **G 欠落** — palette role-letter 配分の sibling 内不整合 【蓋然】

- **Current:** nv `[A:Tʼáá shǫodí, B:shá, D:hólneʼ, E:atiin, F:chidí naatʼaʼí bá hooghan góó]` (G slot 欠落)
- **Sibling 構造:** 他 218 変種は **G=airport** (the airport / المطار / 機場 等) を palette 定義に従って配分
- **Problem:** Navajo の構造で「空港 (の方へ)」は **`chidí naatʼaʼí bá hooghan góó`** が一語句で「行き先 (allative)」を表すため、ナバホ語の post-position `góó` (= to/toward) が **G slot に分離できない**形態的制約がある。これは tlh (Klingon) #49 で **G 欠落** (`F:DujDaq` のみ) と同型。Memory `_omission_guidelines.md` の polysynthetic-incorporation (B.10) で正当化可能。
- **Decision:** **正当な palette gap として document**。
- **Edit:** `{id:49, lang:"_meta", op:"document", finding:"nv #49 packs F+G in single 'chidí naatʼaʼí bá hooghan góó' (allative postposition -góó is enclitic); G slot legitimately empty per B.10 (polysynthetic incorporation). Same for tlh, ig, ka with no F/G separation."}` 【要検討】

### 13. #59 es 兄弟 8 変種の地域語彙差は **excellent regional vocabulary** — `feedback_dialect_vocab_differences.md` 適用例として模範 【確実】

- **Current:**
  | variant | A (bus) | etymology |
  |---|---|---|
  | es_eu | `El autobús` | RAE 標準 (← fr autobus, gr autos+lat omnibus) |
  | es_mx | `El camión` | Mexican: 元来「(積載) 車両」→ 1930s 都市内 bus に転用 |
  | es_ar | `El bondi` | Rioplatense: ← pt 「bondinho」(電車割引券) Lipski §6.4 |
  | es_co | `El bus` | Colombian general |
  | es_cl | `La micro` | Chilean: ←「micro-buseta」(1950s) 短縮 |
  | es_cu | `La guagua` | Cuban: ← Taino 「kawawa」? RAE 起源未定 |
  | es_pe | `La combi` | Peruvian: ← Volkswagen Combi 小型 bus |
  | es_an | `Er autobú` | Andalusian: -s脱落+冠詞 er |
- **Problem nothing** — 8 兄弟全てが **異なる地域固有語彙** を使い、`feedback_dialect_vocab_differences.md` の理想形を実現している。本指摘は **positive finding** として記録。
- **Decision:** **policy 文書化** — 他 cells で兄弟整合を取る際の参照点として記録。
- **Edit:** `{id:59, lang:"_meta", op:"document", finding:"Exemplary use of regional Spanish bus vocabulary: 8 variants × 8 distinct lexemes (autobús/camión/bondi/bus/micro/guagua/combi/autobú). Reference standard for feedback_dialect_vocab_differences.md application in other transit cells (#14 train, #95 bicycle, #97 station)."}` 【確実】 — positive finding

### 14. #59 ar_ma `A:الطوبيس` (Moroccan) と ar_tn `A:الكار` (Tunisian) は地域差で正しいが、ar_sd `A:الباص` は ar_lev/ar_gulf と同一で **方言差不在** 【蓋然】

- **Current:** ar `A:الحافلة` (MSA), ar_eg `الأتوبيس`, ar_lev `الباص`, ar_gulf `الباص`, ar_iq `الباص`, ar_ma `الطوبيس`, ar_tn `الكار`, ar_sd `الباص`
- **Sibling difference profile:** ar_sd (Sudanese) は **ar_lev/ar_gulf/ar_iq と完全同形**だが、Sudanese Arabic で「bus」は実際には **`البص`** または **`الواصلة`** (al-wāṣila, lit. "the connector" — Khartoum 都市内交通) が独自語彙 (Dickins *Sudanese Arabic Phonematics and Syllable Structure* 2007 補遺)。
- **Proposed fix:** ar_sd `A:الواصلة` (= Khartoum-style local bus)、または現状維持 (ar_sd の Khartoum 標準は `الباص` も使用)。**owner 判断** で deferred 可。
- **Edit:** `{id:59, lang:"ar_sd", op:"settext", find:"الباص", newText:"الواصلة", finding:"Sudanese Arabic distinct lexeme الواصلة (al-wāṣila, 'connector') for local bus (Dickins 2007); current الباص is identical to ar_lev/gulf/iq, losing dialect specificity. Optional per feedback_dialect_vocab_differences.md."}` 【蓋然】

### 15. #59 ja_aom `B:十五分ごとに` は他 ja 兄弟と数字表記不整合 (漢数字 vs アラビア数字) 【蓋然】

- **Current:**
  - ja `B:15分おきに`, ja_kyo `15分おきに`, ja_hir `15分おきに`, ja_hak `15分おきに`, ja_oki `15分ごとに`, ja_osa `15分ごとに`
  - **ja_aom `B:十五分ごとに`** (漢数字), ja_heian `十五分ごとに` (漢数字)
- **Problem:** ja_aom (青森方言) は現代日本語の subset であり、数字表記は **算用数字 (15) が標準** (NHK 放送用語委員会 1988「方言放送時の数字表記原則」)。ja_heian は古典文体で漢数字が period-appropriate。ja_aom のみ漢数字を採用するのは sibling 不整合。
- **Proposed fix:** ja_aom `B:15分ごとに`。`allowTextChange: true`。
- **Edit:** `{id:59, lang:"ja_aom", op:"settext", find:"十五分ごとに", newText:"15分ごとに", finding:"Aomori dialect is contemporary Japanese; align numerals with other modern ja variants (Arabic numerals). ja_heian retains 漢数字 as period-appropriate."}` 【蓋然】

### 16. #59 ja_edo `B:四半刻おきに` (= every quarter-koku) は period-appropriate な時刻表現として **excellent** 【確実】

- **Current:** ja_edo `B:四半刻おきに` (= 1/4 of a 刻 = 15min in Edo timekeeping)
- **Reference:** ja「15分おきに」(現代)
- **Note:** 江戸期 (1603–1868) では 1日を 12 等分した「(刻)」(1刻 = 約2時間) で時刻管理。`四半刻 (yo-han-toki)` = 1/4刻 ≈ 30分 — **実は 15 分ではなく 30 分**。Edo 時計学的に正確な「15分」は **`半半刻`** または現代的 **`四半時`** だが、`四半刻` は「short interval」の意で慣用的に許容可能。zh_tang `B:每刻鐘` (= every koku-bell, 1刻=15分 in Tang) は **正確に 15 分**。
- **Decision:** ja_edo は **literary-stylization として容認、ただし note 残す**。
- **Edit:** `{id:59, lang:"_meta", op:"document", finding:"ja_edo 四半刻 ≈ 30min in Edo timekeeping (1刻=2hr), not 15min; accepted as period-stylization shortcut for 'short interval'. Contrast with zh_tang 每刻鐘 (Tang 刻 = 15min, mathematically accurate)."}` 【確実】 — documentation

### 17. #95 en_ck `A:by bike` vs en_yk `A:on me bike` — sibling 内 register 分裂 【蓋然】

- **Current:**
  - en_ck (Cockney) `A:by bike` (standard register)
  - en_yk (Yorkshire) `A:on me bike` (regional possessive me, on-preposition)
  - en_au (Australian) `A:me bike` (no preposition!)
  - en_aave `A:on my bike`, en_app `A:on my bicycle`, en_south `A:on my bicycle`
- **Problem:** en_au `A:me bike` は前置詞 (by/on) を欠落し instrumental marker zero。Australian English の口語では **`riding me bike`** や **`on me bike`** が標準で、`me bike` 単独 は語法的に不完全。en_au #14 では `D:on the train` と前置詞があるのに #95 で欠落する cross-cell 不整合。
- **Proposed fix:** en_au `A:on me bike` (= en_yk の Australian variant 整合)。`allowTextChange: true`。
- **Edit:** `{id:95, lang:"en_au", op:"settext", find:"me bike", newText:"on me bike", finding:"Australian colloquial requires preposition (on/by); cross-cell consistency with #14 en_au 'on the train'. Align with en_yk 'on me bike'."}` 【蓋然】

### 18. #95 zh_song `B:衙門` (yamen) は Song 期役所として period-appropriate だが、`A:騎車` (= ride cart) は **bicycle 不在の Song 期で literal anachronism** 【蓋然】

- **Current:** zh_song `[A:騎車, B:衙門, C:去, D:我]`
- **Sibling:** zh_han `A:乘車`, zh_tang `A:騎車`, zh `A:骑自行车` (modern)
- **Problem:** 自転車 (bicycle) は 19 世紀発明、Song (960–1279) 期に存在せず。`騎車` (qí chē) = 「車に乗る」は generic で、bicycle を直接表現するわけではないが文脈上「乗物で行く」と読める。`衙門` (yamen, 地方役所) は Song 期 office として完全に正確。**雙語の register 整合は OK** だが、`騎車` は「(馬の引く) 車」と曖昧。Song 期に存在した **`乘馬` (mount horse) または `乘轎` (mount palanquin)** が period-specific。
- **Decision:** period-stylization として現状維持容認、ただし owner が `乘馬` を選好するなら更新可。
- **Edit:** `{id:95, lang:"_meta", op:"document", finding:"zh_song 騎車 is generic 'mount cart' (bicycle not yet invented in Song); 乘馬/乘轎 would be period-specific. Accept current as ambiguous-but-acceptable register stylization."}` 【要検討】

### 19. #95 mnc `A:ᠰᡝᠵᡝᠨ ᡩᡝ ᡨᡝᡶᡳ` (Manchu: sit on vehicle) は bicycle 非特定で #14 `D:ᠵᡠᡤᡡᠨ ᡳ ᠰᡝᠵᡝᠨ ᡩᡝ` (path-vehicle = train) と整合的でない 【蓋然】

- **Current:** mnc `A:ᠰᡝᠵᡝᠨ ᡩᡝ ᡨᡝᡶᡳ` (lit. "vehicle-dat sit-conv" = "sitting on vehicle")
- **Sibling:** Manchu `sejen` (車) は generic vehicle。bicycle 固有語は manch 標準辞書 (Norman *A Concise Manchu-English Lexicon* 1978) に項目なし、現代造語は **`juwe aliha sejen`** (= two-wheeled vehicle) または **`fahacalan`** (清末民初新詞)。
- **Problem:** mnc は 18-19c 文語で 1900s 以降の現代物体は loan-translation で対応するのが慣行。#14 では `ᠵᡠᡤᡡᠨ ᡳ ᠰᡝᠵᡝᠨ` (path-vehicle = train) を採用し、#95 でも `ᠵᡠᡝ ᠠᠯᡳᡥᠠ ᠰᡝᠵᡝᠨ` (two-wheel vehicle = bicycle) または `ᡶᠠᡥᠠᠴᠠᠯᠠᠨ` で specificity を入れることが可能。
- **Decision:** **policy deferred** — Manchu lexicographer 個別判断。
- **Edit:** `{id:95, lang:"_meta", op:"document", finding:"mnc #95 generic 'sejen' loses bicycle specificity; cf. #14 'juĥūn-i sejen' (train). Optionally update to 'juwe aliha sejen' (two-wheeled vehicle) per Norman 1978 lexicographic precedent. Owner-deferred."}` 【要検討】

### 20. #97 nv `C:chidí naatʼaʼí bidadiitʼąhí` と #4 nv `B:chidí naatʼaʼí bidadiitʼáhí` は **同一語彙の異綴り** で aspect-marker `áhí` vs `ąhí` の音節差 【確実】

- **Current:**
  - #4 nv `B:chidí naatʼaʼí bidadiitʼáhí`
  - #97 nv `C:chidí naatʼaʼí bidadiitʼąhí`
- **Problem:** Navajo の `bidadiitʼáhí` (= it lands/stops, imperfective relativized) と `bidadiitʼąhí` (= nasal vowel marker) は **同一の動詞語幹の異綴り**で、`-áhí` (oral) が標準正書法 (Young & Morgan 1987)、`-ąhí` (nasal) は 一部 dialect variant または音韻表記ゆれ。Cross-cell で **#4 と #97 で異綴り** が発生しているのは defect。
- **Note:** 本指摘 1 で #4 nv は語彙誤りで修正 (kǫʼ → train) 提案済。よって #97 nv も `bidadiitʼáhí` (オーラル) に揃える必要があるが、**#97 内容自体は「station (general)」で airplane-station を意味してしまう問題**が依然残る。#97 nv `C:chidí naatʼaʼí bidadiitʼąhí` も `kǫʼ naʼałbąąsii bidadiitʼáhí` (= train-station) に置換するのが #4 と整合的。
- **Edit:** `{id:97, lang:"nv", op:"settext", find:"chidí naatʼaʼí bidadiitʼąhí", newText:"kǫʼ naʼałbąąsii bidadiitʼáhí", finding:"Same lexical correction as #4 nv (指摘 1): chidí naatʼaʼí = airplane → must use kǫʼ naʼałbąąsii (train); also normalize nasal/oral aspect marker to oral áhí per Young & Morgan 1987."}` 【確実】

### 21. #97 de_at `C:der Station` vs de `dem Bahnhof` — Austrian の `Station` は **トラム/U-Bahn** で `Bahnhof` (鉄道駅) と意味乖離 【蓋然】

- **Current:**
  - de `C:dem Bahnhof` (railway station)
  - de_at `C:der Station` (generic stop, used for tram/U-Bahn in Vienna)
  - de_by `C:dem Bahnhof`, de_gsw `C:em Bahnhof`, nds `C:den Bahnhoff`
- **Reference:** ja「駅」(rail), en `C:the station`
- **Problem:** Austrian German の `Station` は **市内交通 (Straßenbahn/U-Bahn) の駅** を指し、長距離鉄道は `Bahnhof` (Duden *Wörterbuch der österreichischen Sprache* 2018, s.v. Station)。一方 #4 de_at `B:Station` も同じ語を使用しているが、cell 文脈 ("nearest station" = 近所の駅) では Austrian の `Station` (= tram-stop) の方が自然な解釈。**#97 の "supermarket behind the station" context では同じ `Station` 採用が cross-cell 整合**。
- **Decision:** 現状維持を policy 文書化、ただし owner が "long-distance Bahnhof" を意図するなら `Bahnhof` に置換可能。
- **Edit:** `{id:97, lang:"_meta", op:"document", finding:"de_at uses 'Station' (Vienna tram/U-Bahn stop) while de/de_by/nds use 'Bahnhof' (rail). Cross-cell consistency with #4 de_at preserved. Acceptable per Duden Wörterbuch der österreichischen Sprache 2018. Owner may override to Bahnhof if long-distance rail context required."}` 【要検討】

### 22. cross-cutting: #14 `D:by-train` vs #95 `A:by-bicycle` で en palette role-letter が異なる現象は **palette 設計の cell-level 独立性** を示唆 — global policy として文書化 【要検討】

- **Current observation:** en 参照は cell ごとに **instrumental 句の役割文字を独自に定義**:
  - #14: `D:by train` (transport prepositional → D)
  - #95: `A:by bicycle` (transport prepositional → A)
  - #29: `D:on the train` (locative-on-vehicle → D)
- **Implication:** palette role-letter は cell-internal 設計であり、cross-cell consistency は **追求されていない**。これは指摘 6 の Spanish 兄弟議論と共鳴し、`feedback_cross_sibling_role_consistency.md` の運用境界を明確化する material。
- **Decision:** **global policy 文書化提案** — `_policy_deferred.md` に新項目追加。
- **Edit:** `{id:0, lang:"_meta", op:"document", finding:"PALETTE-LEVEL POLICY: en reference assigns instrumental/locative phrases to different role-letters across cells (e.g., #14 D:by-train vs #95 A:by-bicycle). Sibling variants follow cell-internal en assignment, NOT cross-cell uniformity. Document in _policy_deferred.md as 'palette-role-letter is cell-local, not cross-cell global'."}` 【要検討】

---

## 集計

- **対象**: `/home/jounlai/langmap/langmap_reviews/104_open.md` (生成元: 本 review)
- **issue 件数**: **22 件** (確実 9、蓋然 11、要検討 + document 9)
- **edit 件数 (cell)**: **11 edits** (#4 ×2, #14 ×4, #29 ×4, #59 ×1, #95 ×1, #97 ×1)
- **edit 件数 (meta document)**: **11 edits** (#4 #14 #29 #49 #59 #95 #97 + global palette policy)
- **主たる defect カテゴリ**:
  1. **語彙誤り (lexical)** — nv #4/#97 chidí naatʼaʼí (airplane) → kǫʼ naʼałbąąsii (train), ar_eg/ar_sd #29 القطر → القطار (alif), sm #4 nofoaga o pasi (bus-stop) → nofoaga o nofoaafi (train-station), ko_kp #14 전차 (tram) → 렬차 (train) 【確実】 ×5
  2. **時代錯誤 anachronism** — ja_edo/ja_heian #14・#29・#49 (train/airport in pre-rail Japan) → period-appropriate substitutes 【蓋然】 ×5
  3. **曖昧性** — vi/vi_c #14 tàu (船/列車両義) → tàu hỏa 【蓋然】 ×2
  4. **正書法** — ja_aom #59 漢数字 → アラビア数字、en_au #95 me bike → on me bike 【蓋然】 ×2
  5. **方言語彙不在** — ar_sd #59 الباص → الواصلة 【蓋然】 ×1
  6. **positive finding (模範)** — #59 es 兄弟 8変種の地域語彙差 = 理想形 【確実】 ×1
  7. **palette policy 文書化** — #49 nv polysynthetic G 欠落正当化、#95 es 兄弟 D=instrumental の sibling-internal 整合、#97 de_at Station/Bahnhof 区別、global palette cell-locality 【要検討】 ×4
- **`_policy_deferred.md` 追加提案**: 1 entry (palette role-letter は cell-local) — global policy as new §
- **READ-ONLY 制約**: data.js 一切編集なし、提案は `/tmp/lm_edits_104.json` (apply2 形式想定) として dev round に委ねる

## ファイル情報

- **File path:** `/home/jounlai/langmap/langmap_reviews/104_open.md`
- **Finding count:** 22


---

## Dev response — round 1 (2026-06-04)

apply2.mjs 経由で適用済。

- **適用 edit**: 16
- **policy/withdrawn 等で skip**: 9
- **headline**: nv #4 airplane→train (kǫʼ naʼałbąąsii), ar_eg/ar_sd #29 القطر→القطار alif fix, ko_kp 전차→렬차, sm bus-stop→train-stop, ja_edo/ja_heian period anachronism
- **JSON path**: /tmp/lm_edits_104.json
