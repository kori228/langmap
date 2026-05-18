# wordmap_trivia 記事・翻訳チェック

対象: `wordmap_trivia.js` および `wordmap_trivia_*.js`

注: ユーザー指定のファイル名に合わせて、この確認メモは `wordmap_travia_check.md` として作成した。実際の対象ファイル名は `trivia`。

## 優先して直したい箇所

### 1. センチネル語: 「6万年間、接触を拒み続けた」は強すぎる

- 該当: `wordmap_trivia.js:957`, `wordmap_trivia.js:968`
- 現状:
  - "refused all contact for sixty thousand years"
  - "reached the Andamans perhaps 60,000 years ago and remained isolated ever since"
- 問題:
  - アンダマン諸島への初期移住が非常に古い、という話と、北センチネル島の集団が「6万年間ずっと外部接触なしだった」という話が混ざっている。
  - 「refused all contact」は意志的・継続的すぎる表現。1991年の贈り物受け取りなど、短時間の接触事例もある。
- 修正案:
  - 「アンダマン諸島の人々は古い移住層に由来すると考えられるが、センチネル語はほぼ未記録で、外部との接触はきわめて限定的」程度に弱める。
  - 例: "Their ancestors may belong to very early human settlement layers in the Andamans, but the duration and continuity of Sentinelese isolation cannot be stated with precision."

### 2. ヘブライ語: 「唯一」「完全に死んだ言語」の断定が危うい

- 該当: `wordmap_trivia.js:1033`, `wordmap_trivia.js:1037`, `wordmap_trivia.js:1042`, `wordmap_trivia.js:1072`
- 現状:
  - "the only ancient language ever brought back to life"
  - "the only fully successful revival of a dead language in human history"
  - "fully dead language"
- 問題:
  - ヘブライ語は復興規模・国家語化という点で突出しているが、典礼・書記・学術言語として継続使用されていたため、単純な「完全に死んだ言語」は不正確。
  - コーンウォール語、マン島語などの復興例もあるので、「唯一」は範囲を限定したほうがよい。
- 修正案:
  - 「日常の母語として大規模に復興し、国家の主要言語になった最も成功した例」に言い換える。
  - "the best-known and most successful revival of a language that had ceased to be a community vernacular"

### 3. パーニニ: 日本語の地名「ラホール」が誤解を招く

- 該当: `wordmap_trivia.js:1172`
- 現状:
  - `シャラートゥラ村（現パキスタンのアトック近郊ラホール）`
- 問題:
  - ここは大都市 Lahore ではなく、一般に Lahor / Lahur / Little Lahore とされる地名。日本語で「ラホール」とだけ書くと、パンジャーブ州の Lahore と誤読される。
- 修正案:
  - `シャラートゥラ村（現パキスタンのアトック近郊ラホール／ラフール、いわゆる Little Lahore）`
  - あるいはより安全に `現パキスタン北西部、アトック近郊のラホール（Lahor/Lahur）`

### 4. パーニニ: 「言語を記述できるというアイデアを初めて発明」は過大

- 該当: `wordmap_trivia.js:1162` および日本語本文末尾
- 現状:
  - "It quietly invented the idea that a language can be described."
  - `「言語というものは記述しうる」というアイデアそのものを、人類史で初めて発明した`
- 問題:
  - パーニニの形式性・体系性は非常に高いが、言語記述・文法的省察そのものを「人類史で初めて」と断じるのは強すぎる。
- 修正案:
  - 「現存する最も精密な早期の形式文法の一つ」「生成的・形式的に言語を記述する発想を極限まで押し進めた」に弱める。

### 5. ニカラグア手話: 「完全にゼロから」「唯一の記録例」は強すぎる

- 該当: `wordmap_trivia.js:2551`, `wordmap_trivia.js:2556`
- 現状:
  - "The only documented case in history of a fully natural human language being born"
  - "not borrowed, not creolised from existing languages, but generated from scratch by children"
- 問題:
  - ISN/NSL は非常に重要な新言語形成の記録例だが、家庭手話・既存の身振り・教育環境などを完全にゼロ扱いするのは不正確。
  - Al-Sayyid Bedouin Sign Language など、近年形成された手話の研究例もある。
- 修正案:
  - 「新しい自然言語の形成過程をリアルタイムで観察できた最も有名な事例」にする。

### 6. 吸着音記事: El Molo の扱いは要確認

- 該当: `wordmap_trivia.js:621`、各翻訳ファイルの同記事
- 現状:
  - "the now-extinct ceremonial register El Molo reportedly contained click-like sounds"
- 問題:
  - El Molo を「クリック音が残る三つの場所」の一つとして並べるには根拠が薄く、しかも本文中で `survive` と言った直後に「now-extinct」を置いているため論理的にも不自然。
- 修正案:
  - El Molo を削るか、脚注的に「報告例があるが不確実」と分離する。
  - "Outside southern Africa, robust cases include Hadza and Sandawe; Damin is a special ritual register rather than an ordinary spoken language."

### 7. Taa: UNESCO が分類した、という出典関係が怪しい

- 該当: `wordmap_trivia.js:241`
- 現状:
  - "UNESCO classifies Taa as severely endangered."
- 問題:
  - Taa が危機言語であること自体は妥当だが、UNESCO Atlas の分類としてこの文言を直接置けるかは要確認。本文の出典欄にも UNESCO がない。
- 修正案:
  - 出典を追加するか、`Taa is generally described as endangered / severely endangered` に弱める。

### 8. ピダハン語: 論争点を「誰も否定しない事実」とするのは危険

- 該当: `wordmap_trivia.js:51`, `wordmap_trivia.js:81` およびピダハン記事末尾
- 現状:
  - 数詞・色彩語・再帰・経験直接性をかなり強い断定で説明している。
  - 末尾で「文化規範と多チャネル伝達は誰も否定しない事実」としている。
- 問題:
  - ピダハン語の記事は全体に Everett 側の主張に寄っている。再帰だけでなく、数詞・色彩語・文化原理の解釈も論争を含む。
- 修正案:
  - 「Everett の報告では」「この解釈には反論がある」を増やす。
  - `What is not contested` は `Less controversial, though still discussed, are...` 程度に弱める。

### 9. エスペラント: 「人工言語で唯一、世代継承」は断定しすぎ

- 該当: `wordmap_trivia.js:1217`, `wordmap_trivia.js:1255`
- 現状:
  - "No other artificial language has ever crossed into intergenerational transmission."
- 問題:
  - エスペラントが最も成功し、母語話者を持つ代表例であることはよいが、「他に一切ない」は強すぎる。Klingon など、ごく少数・特殊例をどう扱うかで反例が出る。
- 修正案:
  - 「継続的なコミュニティと一定数の母語話者を持つ、最も成功した人工言語」にする。

## 日本語本文・ボタンの翻訳漏れ

`wordmap_trivia.js` 内の英語本文と日本語本文で、`trivia-action` ボタン数が一致しない箇所がある。UI 操作の欠落なので、本文翻訳より優先度は高い。

- `silbo-gomero`: 英語にある `Zoom into the barrancos` ボタンが日本語本文にない。該当英語行: `wordmap_trivia.js:152`
- `esperanto-zamenhof`: 英語にある `Water / akvo` ボタンが日本語本文にない。該当英語行: `wordmap_trivia.js:1245`
- `toki-pona-minimalism`: 英語にある `Sun / suno` ボタンが日本語本文にない。該当英語行: `wordmap_trivia.js:1353`
- `hangul-scientific-script`: 英語にある `One / 하나 / 일` ボタンが日本語本文にない。該当英語行: `wordmap_trivia.js:1551`
- `cherokee-sequoyah`: 英語にある `Moon / ᏃᏓ (nvda)` ボタンが日本語本文にない。該当英語行: `wordmap_trivia.js:1651`
- `tangut-deciphered`: 英語にある `Tangut Water` ボタンが日本語本文にない。該当英語行: `wordmap_trivia.js:1833`

## 多言語翻訳ファイルで気になる訳

### Silbo Gomero: Hmong courtship whistles

- 該当: `wordmap_trivia.js:155` および複数翻訳
- 問題:
  - 原文の "Hmong courtship whistles" は、各言語で直訳調になっている。独・仏・伊・葡・尼などで「Hmong の求愛口笛」と訳されているが、読者には制度化された「口笛言語」と誤解されやすい。
- 修正案:
  - 「Hmong の求愛・交際に用いられる口笛慣習」のように、Silbo と同列の完全な口笛レジスターではないことを明確にする。

### Swahili: 不自然・誤訳気味の箇所

- 該当: `wordmap_trivia_sw.js:283`
- 現状:
  - `kikielimika na kibadilishwana`
- 問題:
  - 英語の "elaborated and traded" の訳として不自然。`kikielimika` は「教育される／洗練される」寄りで、音特徴が「精緻化される」の意味としては弱い。`kibadilishwana` もかなり機械翻訳的。
- 修正案:
  - スワヒリ語ネイティブ確認推奨。少なくとも「維持・発展・言語間で共有」の意味に寄せる。

### 各翻訳: Sentinelese の「60,000年孤立」が横展開されている

- 該当例:
  - `wordmap_trivia_fr.js:398`
  - `wordmap_trivia_it.js:401`
  - `wordmap_trivia_sw.js:412`
  - `wordmap_trivia_th.js:400`
  - `wordmap_trivia_he.js:401`
  - `wordmap_trivia_ar.js:405`
- 問題:
  - 英語原文の強すぎる断定が、そのまま各言語に広がっている。英語側を直したあと、全翻訳も同じ方向で更新する必要がある。

### Korean: Boxing Day tsunami の誤訳

- 該当: `wordmap_trivia_ko.js:406`
- 現状:
  - `권투의 날 쓰나미`
- 問題:
  - 英語原文 `Boxing Day tsunami` を「ボクシングの日の津波」と直訳してしまっている。ここでの Boxing Day はスポーツのボクシングではなく、12月26日の祝日名。日本語本文では `2004年のスマトラ沖津波` として処理されている。
- 修正案:
  - 韓国語では `2004년 인도양 지진해일`, `2004년 인도양 쓰나미`, または日本語に合わせるなら `2004년 수마트라 앞바다 지진해일` にする。
  - 文全体は `2004년 인도양 쓰나미 며칠 뒤, 해안경비대 헬리콥터가 생존자 확인을 위해 섬 상공을 비행했다.` など。

## 参考リンク

- UNESCO, Silbo Gomero: https://ich.unesco.org/en/RL/whistled-language-of-the-island-of-la-gomera-canary-islands-the-silbo-gomero-00172
- Survival International, Sentinelese: https://www.survivalinternational.org/about/776/mostisolated
- Glottolog / WALS など、既に記事内 sources にある一次・準一次情報も再確認推奨。

## まとめ

Claude の文章は読み物としてはかなり強いが、全体に「面白くするための唯一・最大・完全・初めて」の断定が多い。修正方針としては、記事の魅力は残しつつ、学術的には `said to`, `reported by`, `one of the best-known`, `arguably`, `large-scale` のような逃げ道を入れるのがよい。

## 追加レビュー: 10パス再点検

最初の確認で明白な韓国語誤訳を落としていたため、観点を変えて10回分の再点検を行った。以下は追加で見つかったもの。

### Pass 1: 記事ID・構造

- `wordmap_trivia.js` の記事数は30件。各 `wordmap_trivia_*.js` も30件で、記事IDの欠落は見つからなかった。
- ただし簡易正規表現では引用文中の `"I am sent to you by other white men ... I bring you a book."` をIDとして誤検出した。今後は `id:` 行だけを構造検査対象にすること。

### Pass 2: Boxing Day tsunami 周辺の多言語誤訳

- 既出: `wordmap_trivia_ko.js:406` の `권투의 날 쓰나미` は明確な誤訳。
- 追加:
  - `wordmap_trivia_es.js:409`: `tsunami del Boxing Day` と英語が残っている。スペイン語読者向けには `tsunami del 26 de diciembre de 2004` または `tsunami del océano Índico de 2004` がよい。
  - `wordmap_trivia_id.js:409`: `tsunami Boxing Day` と英語が残っている。`tsunami Samudra Hindia 2004` などへ。
  - `wordmap_trivia_vi.js:409`: `sóng thần Boxing Day` と英語が残っている。`sóng thần Ấn Độ Dương năm 2004` などへ。
  - `wordmap_trivia_fr.js:406`: `tsunami de Noël` は「クリスマス津波」に寄りすぎる。フランス語では `tsunami du lendemain de Noël` より、記事としては `tsunami de 2004 dans l'océan Indien` が無難。
- まとめ:
  - この箇所は全言語で、祝日名ではなく `2004年インド洋大津波 / スマトラ沖地震津波` に統一するのが安全。

### Pass 3: 韓国語の明白な直訳・不自然訳

- `wordmap_trivia_ko.js:72`
  - `몽 구애 휘파람`
  - 問題: Hmong が `몽` だけになっており、韓国語では民族名として不自然または曖昧。`흐몽족의 구애 휘파람 관습` などが自然。
- `wordmap_trivia_ko.js:124`
  - `SIL(하기 언어학 연구소)`
  - 問題: `Summer Institute of Linguistics` を `하기` と訳すのは不自然。韓国語では `국제 SIL`, `SIL International`, または説明するなら `하계언어학연구소`。
- `wordmap_trivia_ko.js:468`
  - `아톡 근처의 라호르`
  - 問題: 日本語で指摘したのと同じく、パンジャーブ州 Lahore と誤読される。`Lahor/Lahur, Little Lahore` であることを補うべき。
- `wordmap_trivia_ko.js:104`
  - `음운은 거의 무한히 위로 나선 상승할 수 있다`
  - 問題: 英語 `spiral upward` の直訳で、韓国語としてかなり硬く不自然。`음운 체계는 거의 끝없이 복잡해질 수 있다` など。
- `wordmap_trivia_ko.js:398`
  - `아프리카 탈출`
  - 問題: Out of Africa の訳として意味は通るが、見出し語としては `출아프리카`, `아프리카 기원 인류 확산` の方が自然。

### Pass 4: 日本語本文の表記揺れ

- `wordmap_trivia.js:2056`, `wordmap_trivia.js:2075`, `wordmap_trivia.js:2079`, `wordmap_trivia.js:2123`, `wordmap_trivia.js:2130`, `wordmap_trivia.js:2146`, `wordmap_trivia.js:2148`, `wordmap_trivia.js:2156`
- 問題:
  - `Tuyuca` が本文タイトル・説明では `トゥヤカ語`、ボタンでは `トゥユカ語` になっている。
- 修正案:
  - 一つに統一する。一般的には `トゥユカ語` のほうが原綴り Tuyuca に近く、ボタンとも一致する。

### Pass 5: Ubykh 記事の文献事実

- 該当: `wordmap_trivia.js:414`, `wordmap_trivia.js:418` および各翻訳の Ubykh 記事
- 現状:
  - Dumézil が `Dictionnaire de la langue oubykh (1965)` を出したように書いている。
  - その後で Vogt の1963年版 `Dictionnaire de la langue oubykh` を「別著」としている。
- 問題:
  - 出典欄では `Vogt, Hans (1963). Dictionnaire de la langue oubykh` が挙がっている一方、Dumézil 1965 は `Documents anatoliens... IV: Récits oubykh`。本文の `Dictionnaire... (1965)` は取り違えの可能性が高い。
- 修正案:
  - Dumézil については「文法記述・テキスト集・Récits oubykh など」に直す。
  - 辞典は Vogt 1963 として一本化する。

### Pass 6: dead-reckoning の訳

- 該当:
  - `wordmap_trivia_fr.js:926`: `un sens ... d'estime`
  - `wordmap_trivia_es.js:929`: `un sentido ... de estima`
  - `wordmap_trivia_it.js:929`: `senso di orientamento per stima`
- 問題:
  - `dead-reckoning` は航法・推測航法の用語。仏西伊で `estime` だけにすると「尊敬・評価」の意味に寄り、不自然または誤読しやすい。
- 修正案:
  - 仏: `orientation par navigation à l'estime`
  - 西: `orientación por estima / navegación por estima`
  - 伊: `orientamento per navigazione stimata` など、航法用語として明示する。

### Pass 7: Portuguese Hangul 記事の混入語

- 該当: `wordmap_trivia_pt.js:644`
- 現状:
  - `alfabeto presentado por traços`
- 問題:
  - `presentado` はスペイン語混入。ポルトガル語として不自然。
- 修正案:
  - `alfabeto featural`, `alfabeto de traços distintivos`, `alfabeto baseado em traços` など。

### Pass 8: Sumerian 記事の「最初」表現

- 該当: `wordmap_trivia.js:756` 以降、特にタイトル `Sumerian — the first language ever written down`
- 問題:
  - シュメール語が最古級の文字記録を持つことは確かだが、エジプト語の初期文字記録とほぼ同時期で、「最初の言語」と断定するのは危うい。
  - `Kish tablet (c. 3500 BCE)` も「シュメール語が書かれている」と断言しにくい初期記号資料。
- 修正案:
  - `one of the first languages ever written down`, `the earliest extensively attested written language` などに弱める。
  - 日本語も `人類が最初に書き記した言語` ではなく `人類最古級の文字言語`。

### Pass 9: Hawaiian 13 phonemes の数え方

- 該当: `wordmap_trivia.js:2471`, `wordmap_trivia.js:2475` 付近、各翻訳の Hawaiian 記事
- 現状:
  - `only 13 sounds / 13 phonemes`
  - 本文内で `each of which can be short or long` とも述べている。
- 問題:
  - ハワイ語の母音長を音素的に数える分析では、単純な「13音素」と言い切るとずれる。読み物としては定番表現だが、厳密には「短母音5・長母音5をどう数えるか」で変わる。
- 修正案:
  - `often counted as 13 basic segmental phonemes, before vowel length is counted separately` など。

### Pass 10: 追加の要出典・過大表現

- `wordmap_trivia.js:2021`
  - Aymara の `three-valued logic` は面白いが、計算機科学者が議論したという書き方は説明不足。Guzmán de Rojas 系の議論かを明記し、主流説のように見せない。
- `wordmap_trivia.js:1620`, `wordmap_trivia.js:1654` / Cherokee 記事
  - `Cherokee literacy outstripped that of surrounding white settlers` はよく語られるが、定量根拠が必要。`contemporary observers claimed...` くらいに弱める。
- `wordmap_trivia.js:1560` / Hangul 記事
  - `children usually learn it in about an hour` は宣伝的で要出典。文字体系の基本を覚える話と、読み書き能力の獲得を混同しないようにする。

## 追加レビュー後の優先順位

1. `Boxing Day tsunami` 周辺を全言語で `2004年インド洋大津波 / スマトラ沖地震津波` に統一する。
2. 韓国語の `권투의 날`, `하기 언어학 연구소`, `몽 구애 휘파람`, `라호르` を直す。
3. 日本語の `トゥヤカ / トゥユカ` 表記揺れを直す。
4. Ubykh の Dumézil/Vogt 文献取り違えを英語本文から直し、翻訳へ展開する。
5. 「唯一・最初・完全・世界一」系の表現を、出典が強いもの以外は弱める。

## 追加レビュー2: さらに10パス再点検

前回の10パスとは別に、HTML混入、専門用語の false friend、反対訳、固有名詞、英語残り、数値断定を中心に再点検した。

### Pass 11: HTMLタグ混入

- 該当: `wordmap_trivia_he.js:43`
- 現状:
  - Hebrew の Silbo Gomero `summary` 末尾に `</p>` が混入している。
- 問題:
  - JS文字列としては壊れていないが、カード要約などに literal な `</p>` が表示される可能性がある。
- 修正案:
  - `summary` から `</p>` を削除する。本文HTML側に必要なタグと summary 文字列を分離する。

### Pass 12: Boxing Day tsunami の残り

- 該当: `wordmap_trivia_sw.js:420`
- 現状:
  - Swahili でも `Boxing Day tsunami` が英語のまま残っている。
- 問題:
  - 前回挙げた韓国語の `권투의 날 쓰나미` ほど露骨な誤訳ではないが、ローカライズとしては未処理。読者によっては祝日名の津波と誤読しやすい。
- 修正案:
  - 全言語で `2004 Indian Ocean tsunami / Sumatra-Andaman earthquake and tsunami` 相当へ統一する。

### Pass 13: Hebrew の専門用語 false friend

- 該当: `wordmap_trivia_he.js:95`, `wordmap_trivia_he.js:103`, `wordmap_trivia_he.js:194`, `wordmap_trivia_he.js:196`
- 現状:
  - `ejective` が `אקטיבי / אקטיביים` になっている。
- 問題:
  - Hebrew の `אקטיבי` は「能動的・アクティブ」の意味で、放出音・喉頭化音の説明になっていない。
- 修正案:
  - Hebrew の音声学用語に合わせて `עיצורים מסודקים`, `עיצורים גלוטליים נפלטים` などへ直す。少なくとも「active consonants」と読める表現は避ける。

### Pass 14: Hebrew の固有名詞・文法崩れ

- 該当:
  - `wordmap_trivia_he.js:120`
  - `wordmap_trivia_he.js:203`
- 問題:
  - Rotokas 記事で Bougainville の位置説明が `שלמה` だけになっており、Solomon Islands / Solomon chain として不完全。
  - Damin 記事で Lardil と Yangkaal の並びが壊れ、`לארדיל ה יאנקאל` のように読める。
- 修正案:
  - `איי שלמה` または `שרשרת איי שלמה` のように固有名詞を明示する。
  - Lardil/Yangkaal は「Lardil 族と近隣の Yangkaal 族」のように構文を組み直す。

### Pass 15: Swahili の明白な誤字・反対訳

- 該当:
  - `wordmap_trivia_sw.js:682`
  - `wordmap_trivia_sw.js:1103`
- 現状:
  - Hangul 記事: `walichuckia`
  - Nicaraguan Sign Language 記事: `Rasmi, kufanya ishara hakukatishwa`
- 問題:
  - `walichuckia` は Swahili と英語が混ざった誤字に見える。通常は `walichukia`。
  - `hakukatishwa` は「止められなかった」に寄り、原文の `signing was discouraged` と逆方向に読める。
- 修正案:
  - Hangul は「韓国の儒学者・官僚が嫌った」趣旨へ自然に直す。
  - NSL は `hakukuhimizwa`, `kulikatishwa tamaa`, `kulizuiwa` など、抑制された意味へ修正する。

### Pass 16: Swahili の固有名詞・比喩の不自然さ

- 該当:
  - `wordmap_trivia_sw.js:725`
  - `wordmap_trivia_sw.js:727`
  - `wordmap_trivia_sw.js:838`
- 問題:
  - `taifa zima lilipigwa stima` は「電気ショックを受けた」方向に読め、`electrified by the discovery` の比喩として危うい。
  - `kwa minong'ono` は Sequoyah の死刑宣告が「噂された」という文脈では弱く、やや口語的。
  - `Wamonoa` は Minoans の誤記または誤訳に見える。
- 修正案:
  - `lilisisimka`, `lilivutiwa sana` などへ直す。
  - Minoans は Swahili の表記方針に合わせて `Waminoani` などへ統一する。

### Pass 17: French Tuyuca 記事の evidentiality

- 該当:
  - `wordmap_trivia_fr.js:858`
  - `wordmap_trivia_fr.js:879`
- 現状:
  - `marque obligatoirement les preuves`
  - `s'il l'a témoignée`
- 問題:
  - `preuves` は「証拠・証明」に寄り、文法カテゴリーとしての evidentiality を説明しきれていない。
  - `s'il l'a témoignée` はフランス語として不自然。
- 修正案:
  - `la source de l'information`, `l'évidentialité`, `s'il en a été témoin` などへ直す。

### Pass 18: French の文法欠落・最古表現

- 該当:
  - `wordmap_trivia_fr.js:350`
  - `wordmap_trivia_fr.js:982`
- 問題:
  - Gilgamesh を `the first literature humanity ever wrote` 相当にしており、Sumerian 記事の「最初」問題が仏訳にも残っている。
  - Mohawk 記事の `aussi expressive que toute analytique` は `langue` などの名詞が欠けている。
- 修正案:
  - `l'une des plus anciennes littératures connues` などに弱める。
  - `toute langue analytique` と補う。

### Pass 19: Italian 手話用語

- 該当: `wordmap_trivia_it.js:1068`
- 現状:
  - Nicaraguan Sign Language 記事で `fingerspelling` が `dattilografia`。
- 問題:
  - `dattilografia` は通常「タイピング・タイプライティング」。手話の指文字なら `dattilologia` や `alfabeto manuale` が適切。
- 修正案:
  - `dattilologia`, `alfabeto manuale` へ修正する。

### Pass 20: 未翻訳英語・専門語の残り

- 該当例:
  - `wordmap_trivia_sw.js:129`: `Summer Institute of Linguistics`
  - `wordmap_trivia_sw.js:495`: `Elsewhere Conditions`
  - `wordmap_trivia_sw.js:508`: `parser`
  - `wordmap_trivia_sw.js:932`, `wordmap_trivia_sw.js:958`: `dead-reckoning`
- 問題:
  - 固有名詞や専門語として残す判断自体はあり得るが、説明なしで英語が残る箇所が多い。特に `dead-reckoning` は前回の仏西伊と同じく、航法用語として補足が必要。
- 修正案:
  - 初出で現地語説明を添える。例: `dead-reckoning` は「推測航法」、`parser` は「構文解析器」、`Elsewhere Conditions` は専門用語として原語を残すなら括弧で意味を補う。

## 追加レビュー2後の優先順位

1. `wordmap_trivia_he.js:43` の `</p>` 混入を即修正する。
2. `ejective` の Hebrew 誤訳 `אקטיבי` 系を全箇所で直す。
3. Swahili の `hakukatishwa` と `walichuckia` を直す。前者は意味が逆転し得る。
4. `Boxing Day tsunami` を Swahili も含め全言語で再検索し、2004年インド洋津波表現に統一する。
5. French Tuyuca の evidentiality と Italian NSL の `dattilografia` を専門用語として修正する。

## 追加指摘: compare ボタンの「点灯」

- 該当:
  - `wordmap_trivia.js:647`
  - `wordmap_trivia_zh.js:249`
  - `wordmap_trivia_yue.js:252`
  - `wordmap_trivia_he.js:252`
  - `wordmap_trivia_es.js:252`
  - `wordmap_trivia_de.js:260`
  - `wordmap_trivia_hi.js:253`
  - `wordmap_trivia_vi.js:214`
  - `wordmap_trivia_uk.js:637`
- 現状:
  - 日本語: `ハッザ・サンダウェ・コエコエ・コサ・ズールーを点灯`
  - 他言語でも `点亮`, `點亮`, `הדלק`, `Iluminar`, `aufleuchten lassen`, `रोशन करें`, `Bật`, `Підсвітити` など、「光らせる・点灯する」系になっている。
- 問題:
  - `data-action="compare"` のボタンなので、機能は言語を「点灯」することではなく、地図上または比較表示で複数言語を「比較・表示」すること。
  - おそらく英語の `highlight` を UI 文脈で「強調表示する」ではなく、物理的に「点灯する」と直訳したもの。
- 修正案:
  - 日本語: `ハッザ・サンダウェ・コエコエ・コサ・ズールーを比較`
  - あるいは地図UIなら `...を地図で比較表示`
  - 各言語も `compare / comparar / comparer / vergleichen` 相当の語に寄せる。

## 追加指摘: 吸着音記号つき言語名の表記方針

- 該当:
  - `wordmap_trivia.js:639`
  - `wordmap_trivia_ko.js:76`, `wordmap_trivia_ko.js:240`
  - `wordmap_trivia_he.js:76`, `wordmap_trivia_he.js:245`
  - `wordmap_trivia_ar.js:80`
  - `wordmap_trivia_zh.js:242`, `wordmap_trivia_yue.js:245`
  - `wordmap_trivia_hi.js:246`, `wordmap_trivia_th.js:244`
- 現状:
  - `タア語（!ホーン語）`
  - `ン｜ウー語`
  - Korean: `타아어(!크옹어)`, `N|우어`
  - Hebrew: `טאא (!חוֹאוֹ)`
  - Arabic: `لغة تاآ (!خوُو)`
  - Chinese/Yue/Hindi/Thai などでは `塔阿语(!Xóõ)`, `N|uu语`, `ताआ (!Xóõ)`, `ทา (!Xóõ)` のように、原綴りを直接残す箇所が多い。
- 問題:
  - `!Xóõ` や `N|uu` の `!`, `|`, `ǂ`, `ǀ` などは、ラテン文字表記に含まれる吸着音記号。非ラテン文字の翻訳で、記号だけを残して残りをカタカナ・ハングル・ヘブライ文字・アラビア文字へ転写すると、言語名ではなく記号つきの不自然な表記に見える。
  - 特に `!ホーン語`, `!크옹어`, `!חוֹאוֹ`, `!خوُو` は、日本語だけでなく各言語でも「感嘆符つきの語」に見えやすい。
  - 一方、フランス語・スペイン語・ドイツ語・イタリア語・ポルトガル語・インドネシア語・ベトナム語など、ラテン文字圏で `Taa (!Xóõ)` と原綴りをそのまま併記するのはおおむね自然。ここは問題にしなくてよい。
  - Chinese/Yue/Hindi/Thai の `塔阿语(!Xóõ)`, `ताआ (!Xóõ)`, `ทา (!Xóõ)` のような「現地表記 + 原綴り」は許容できるが、`N|uu语` のように原綴りへそのまま言語接尾辞を付ける箇所は、可能なら現地表記と原綴りを分けたほうが読みやすい。
- 修正案:
  - 非ラテン文字圏では、現地文字の言語名を主にし、原綴りは括弧で添える。
  - 例: `コン語（!Xóõ）`、または記事全体の表記に合わせるなら `タア語（!Xóõ）`。
  - `N|uu` も `ンウー語（N|uu）` のように、カタカナ名と原綴りを分ける。
  - Korean なら `타아어(!Xóõ)`、Hebrew なら `טאא (!Xóõ)` のように、`!` だけを転写語へ混ぜない。
  - Arabic も `تاآ (!Xóõ)` のように、原綴りを別枠で残す。
  - `ǂHoan`, `Juǀ'hoan`, `ǂ'Amkoe` など他の吸着音系言語名も同じ方針で統一する。
