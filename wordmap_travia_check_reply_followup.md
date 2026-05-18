# wordmap_trivia レビュー回答への再コメント

対象: `wordmap_travia_check_reply.md`

## 結論

回答内容はおおむね妥当。明白な誤訳・HTML混入・false friend・UIボタン文言については、対応方針も修正内容も納得できる。

ただし、現在のコード上ではまだ残っている重要課題がある。特に「英語原文だけ弱めたが各翻訳へ cascade していない」項目と、吸着音記号つき言語名の非ラテン文字圏表記は、読者に直接見えるため次回対応の優先度を高くしたい。

## 受け入れてよい反論

### Hawaiian の `13 phonemes`

`each of which can be short or long` が直後にあるため、現状を即「誤り」と断定する必要はない。  
ただし、より厳密には `13 basic segmental phonemes, with vowel length treated separately` のような表現が望ましい。保留扱いでよい。

### PT `apresentado`

`apresentado em outra parte` は正しいポルトガル語なので、誤検出としてよい。問題は `presentado por traços` のみ。

### `Summer Institute of Linguistics`

固有名詞として原語を残す方針は許容できる。  
ただし、翻訳読者向けには初出で `SIL International` または現地語で短い説明を添えると親切。

## まだ優先して対応したい点

### 1. 弱化済み英語原文の翻訳 cascade

`wordmap_travia_check_reply.md` でも pending とされているが、これは後回しにしすぎないほうがよい。現在も複数翻訳で旧表現が残っている。

確認例:

- `wordmap_trivia_he.js:401`
  - Sentinelese が「約60,000年前に到達し、それ以来孤立」と読める。
- `wordmap_trivia_vi.js:401`
  - 同じく 60,000 年孤立の強い表現が残る。
- `wordmap_trivia_de.js:413`
  - `vor vielleicht 60.000 Jahren erreichten und seitdem isoliert blieben`
- `wordmap_trivia_hi.js:402`
  - 同じ構造の表現が残る。
- `wordmap_trivia_id.js:494`, `wordmap_trivia_it.js:494`, `wordmap_trivia_zh.js:491`
  - Pāṇini が「言語を記述できるというアイデアを発明した」趣旨が翻訳側に残る。

英語本文を弱めた項目は、翻訳側も同じ意味まで弱めないと、言語切替時に内容の正確性が変わってしまう。

### 2. 吸着音記号つき言語名

これは `pending` でよいが、優先度は高め。

現在も以下が残っている。

- `wordmap_trivia.js:206`, `wordmap_trivia.js:248`, `wordmap_trivia.js:644`
  - `!ホーン語`, `ン｜ウー語`
- `wordmap_trivia_ko.js:76`, `wordmap_trivia_ko.js:79`, `wordmap_trivia_ko.js:242`
  - `!크옹어`, `N|우어`
- `wordmap_trivia_he.js:79`, `wordmap_trivia_he.js:82`, `wordmap_trivia_he.js:245`
  - `!חוֹאוֹ`
- `wordmap_trivia_ar.js:83`, `wordmap_trivia_ar.js:86`, `wordmap_trivia_ar.js:107`, `wordmap_trivia_ar.js:249`
  - `!خوُو`

推奨方針:

- 非ラテン文字圏では「現地語名 + 原綴り」を分ける。
- 日本語: `コン語（!Xóõ）` または `タア語（!Xóõ）`
- 韓国語: `타아어(!Xóõ)`
- Hebrew: `טאא (!Xóõ)`
- Arabic: `تاآ (!Xóõ)`
- `N|uu` も `ンウー語（N|uu）` のように分離する。

### 3. Aymara three-valued logic

英語原文にもまだ `a three-valued logic debated by computer scientists in the 1980s` が残っている。これは短い記事としては許容できるが、主流言語学上の確立事実に見えないよう、`a much-debated proposal` などに弱める価値がある。

### 4. `dead-reckoning` の多言語残り

仏西伊の修正は妥当。Swahili/Indonesian/Vietnamese などではまだ原語が残っている箇所がある。原語を残す場合も、航法・推測航法の説明を初出に添えるのがよい。

## 追加で気づいた点

### `wordmap_travia_check_reply.md` の「拾い切っていました」は少し言い過ぎ

こちらの初回レビューでは `Boxing Day tsunami` の韓国語誤訳を見落としており、その後ユーザー指摘で追加した。  
したがって、サマリーの「明白な誤りをすべて拾い切っていました」は少し強すぎる。

修正文案:

> レビューは追加指摘を経てかなり網羅的になり、特に Boxing Day / Hebrew ejective / KO SIL / Tuyuca 表記揺れ / FR 非文法 / IT dattilografia / PT presentado / Ubykh 文献の取り違え といった明白な誤りを最終的に洗い出せました。

## 次回バッチの推奨順

1. 英語で弱めた内容を全翻訳へ cascade。
2. `!Xóõ`, `N|uu` など吸着音記号つき言語名を非ラテン文字圏で統一。
3. Aymara three-valued logic を弱める。
4. `dead-reckoning`, `parser`, `Elsewhere Conditions` など専門語の初出補足を整える。
5. Hmong courtship whistles を各言語で「制度化された口笛言語」と誤読されにくい表現へ直す。
