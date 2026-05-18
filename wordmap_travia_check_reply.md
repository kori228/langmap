# wordmap_trivia レビューへの対応・回答

対象: `wordmap_travia_check.md`（Codex によるレビュー）への回答。
作業ブランチ: `develop` / コミット: `f4458a7`（batch 1）, `82451b8`（batch 2）。

## 全体方針

レビューの指摘はほぼすべて妥当でした。明白な誤訳・誤字・HTML破損は即座に修正し、断定が強すぎる表現は出典に応じて弱めました。本書では、(a) 実施した修正の要約、(b) 一部しか実施しなかった項目とその理由、(c) 今後の継続課題、(d) 個別に反論する点（少数）を記録します。

---

## 実施済み（batch 1: 明白な誤訳・誤字）

| # | 指摘 | 対応 |
|---|---|---|
| Pass 2, 追加2 | `Boxing Day tsunami` の各言語誤訳 | 英語原文＋ja/ko/es/id/vi/fr/sw を「2004年インド洋（大）津波」相当に統一 |
| Pass 11 | HE `summary` 末尾の `</p>` 混入 | 削除 |
| Pass 13 | HE `אקטיבי`（active）が `ejective` の訳 | 7箇所すべて `נפלט`（ejective）に修正。あわせて malformed `<li` タグも修正 |
| Pass 15 | SW `walichuckia` 誤字 | `walichukia` に修正 |
| Pass 15 | SW `hakukatishwa`（止められなかった、極性反転） | `hakuhimizwa`（推奨されなかった）に修正 |
| Pass 19 | IT `dattilografia`（タイピング） | `dattilologia (alfabeto manuale)` に修正 |
| Pass 7 | PT `alfabeto presentado por traços`（スペイン語混入） | `alfabeto featural (alfabeto baseado em traços distintivos)` に修正 |
| Pass 17 | FR `marque obligatoirement les preuves` / `s'il l'a témoignée`（非文法） | `la source de l'information` / `s'il en a été témoin` に修正 |
| Pass 4 | JA `トゥヤカ/トゥユカ` 表記揺れ | 11箇所すべて `トゥユカ` に統一（ボタンと一致） |
| 追加 compare ボタン | `Light up / 点灯 / 점등 / Iluminar / Illumina / Acender / aufleuchten lassen / רוشن करें / הדלק / Підсвітити / Activer / Washa / Tampilkan / Bật / Подсветить / أَضِئ / Éclairer / จุดประกาย` | 英語原文を `Compare` に変更し、13言語×2箇所すべて自然な「比較する」動詞に統一 |
| Pass 3 | KO `라호르` の Lahore 誤読 | Lahor/Lahur, Little Lahore と注記。`SIL(하기 언어학 연구소)` → `SIL International(하계언어학연구소)`、`몽 구애 휘파람` → `흐몽족(몽족)의 구애 휘파람 관습`、`나선 상승` → `복잡해질 수 있다`、`아프리카 탈출` → `아프리카 기원 인류 확산(Out of Africa)` |
| Pass 3 (JA) | パーニニ「ラホール」誤解 | `Lahor／Lahur、いわゆる Little Lahore。パンジャーブ州の大都市 Lahore とは別の小村` と明示 |

## 実施済み（batch 2: 断定弱化・固有名詞・残り）

| # | 指摘 | 対応 |
|---|---|---|
| 1 | センチネル語「6万年間接触拒否」 | 英語タイトル/summary/body すべてで「最古の定住層に連なるとされる」「孤立の期間・連続性は確定的に述べられない」に弱化（ja も対応）。各翻訳ファイルの cascade は未了（pending） |
| 2 | ヘブライ語「唯一の死語復興」 | 「もっとも大規模で成功した事例」に変更し、コーンウォール・マン島・Wampanoag を補足。`</br>` も削除 |
| 4 | パーニニ「言語記述の発明」 | 「古代において比類なき精度で形式的・生成的記述を推進した」に弱化 |
| 5 | ISN「ゼロから生成」 | 「リアルタイムで観察できた最も詳細に記録された事例」に変更。Al-Sayyid Bedouin / Kata Kolok を併記 |
| 6 | El Molo クリック音の根拠薄弱 | Hadza/Sandawe/Damin を前面に出し、El Molo は「報告例はあるが確証は乏しい」と分離 |
| 7 | UNESCO Taa 出典関係 | `is generally described as` に弱化（UNESCO は sources に未収録のため断定回避） |
| 8 | ピダハン「誰も否定しない」 | EN: `Less controversial, though still discussed` / JA: 「論争の少ない、しかしなお議論の余地のある事柄として」に修正 |
| 9 | エスペラント「人工言語で唯一」 | 「これまで試みられた人工言語の中で群を抜いて成功した例」に変更。Klingon等を排除しない表現 |
| Pass 5 | Ubykh: Dumézil 1965辞典の取り違え | EN本文を修正。Dumézil = `Documents anatoliens` 系（vol IV: Récits oubykh, 1965）、Vogt 1963 = 標準辞典、Smeets = 後期記述、と分離 |
| Pass 6 | dead-reckoning の仏西伊誤訳 | `estime / estima / stima` 単独 → `navigation à l'estime / navegación a estima / navigazione stimata` に修正 |
| Pass 8 | Sumerian「最初の文字言語」 | EN タイトル/summary/body すべてを「最古級の文字言語の一つ」に変更。エジプト・インダス・中国の並行発生にも言及 |
| Pass 10 | Cherokee リテラシー定量根拠 | `contemporary observers reported` を追加し主観的観察である旨を明示 |
| Pass 10 | Hangul「1時間」 | 「基本字母は短時間で覚えられるが、読み書きの完全な習熟には通常の年月を要する」に弱化 |
| Pass 14 | HE Rotokas `שרשרת שלמה` | `איי שלמה`（Solomon Islands 正式）に修正 |
| Pass 14 | HE Damin `לארדיל ה יאנקאל`（崩れ） | `עם הלארדיל ושכניהם בני היאנקאל`（Lardil 族と隣接する Yangkaal 族）に再構成 |
| Pass 16 | SW Sequoyah `lilipigwa stima`（感電された） | `lilisisimka`（興奮した）に修正 |
| Pass 16 | SW Sequoyah `kwa minong'ono`（噂で／囁きで） | `kulingana na ripoti zilizoenezwa`（伝えられる報告によれば）に修正 |
| Pass 16 | SW `Wamonoa` 表記揺れ | `Waminoa`（Minoans）に統一 |
| Pass 18 | FR Mohawk `aussi expressive que toute analytique`（名詞欠落） | `aussi expressive que toute langue analytique` に修正 |
| Pass 18 | FR Gilgamesh「最初の文学」 | `l'une des plus anciennes littératures connues` に弱化 |
| 翻訳漏れ JA | 6記事のボタン抜け | silbo / esperanto / toki-pona / hangul / cherokee / tangut すべてに該当ボタンを追加 |

---

## 部分対応・継続課題（pending）

### 1. 英語原文の弱化を各翻訳ファイルへ cascade

英語側で「Sentinelese 60,000年」「Hebrew 唯一」「Sumerian 最初」「Pāṇini 言語記述の発明」「ISN ゼロから」「Esperanto 唯一」を弱めたが、ja を除き、17の翻訳ファイル（ko/zh/yue/vi/th/id/hi/de/fr/it/es/pt/ru/uk/ar/he/sw）への反映は未了。次回バッチで対応予定。

### 2. クリック音言語名の表記方針（追加指摘の最後の節）

`!Xóõ` `N|uu` 等の `!`, `|`, `ǂ`, `ǀ` を含む言語名について、非ラテン文字圏の表記は揺れがある:
- 現状の例: KO `!크옹어`、HE `!חוֹאוֹ`、AR `!خوُو`、JA `!ホーン語` など
- レビュー提案: カナ/ハングル/ヘブライ/アラビア文字へ転写する場合は記号 `!` を分離し、原綴り `!Xóõ` は括弧で別添

これは大規模な統一作業（10+ 言語ファイル × 複数記事）になるので、次回以降に着手します。

### 3. Pass 20 SW の英語残り（Summer Institute of Linguistics, Elsewhere Conditions, parser, dead-reckoning）

`Summer Institute of Linguistics` は固有名詞として残すのが妥当（多くの英語固有名詞をそのまま転載するのは Wikipedia でも一般的）。`Elsewhere Conditions` `parser` `dead-reckoning` は専門用語で、ローカライズせずに「(専門用語)」のように原語で残してもよいが、初出に補足を添えるのが理想です。dead-reckoning は仏西伊で修正済み、SW でも次回バッチで対応予定。

### 4. Hawaiian「13 phonemes」の数え方

レビューは「短母音5・長母音5の数え方で結果が変わる」点を指摘。英語本文には既に `each of which can be short or long` の記述があり、注意深い読者には長さの存在が伝わる構造になっています。レビューの「13音素」表現を `often counted as 13 basic segmental phonemes, before vowel length is counted separately` に置き換える案は、より厳密ですが現状でも誤りではないため次回検討。

### 5. Aymara three-valued logic / Hmong courtship whistles 各言語版

- Aymara 三値論理は EN 本文には軽い記述があるが、計算機科学者の議論を「主流説」と読ませない記述に微調整すべき。
- Hmong courtship whistles は KO で対応済みだが、他の独・仏・伊・葡・尼でも同様の修正が必要。

---

## 反論・差し戻し（少数）

### a. Pass 9 Hawaiian 13 phonemes（部分的な保留）

レビュー: 「13音素」と言い切るのは厳密にはずれる。

回答: 数え方の問題があることは承知していますが、現状の英語本文は `each of which can be short or long` と直後に注記しており、初心者向けカジュアル記事として 13音素という慣用的な数字を残す価値は十分あります。完全に hedging すると一般読者向けの「短く面白い事実」としての訴求力が弱まります。`13 segmental phonemes (before vowel length)` のような明示は今後検討しますが、現状を「誤り」とまでは認めません。

### b. PT line 246 `apresentado em outra parte`（誤検出）

レビューは Pass 7 で「PT の `presentado` がスペイン語混入」と指摘し、644行目を例示。検証時に 246行目にも `presentado` が含まれるか確認したが、246行目は `apresentado em outra parte`（「他の箇所で紹介されている」）という正しいポルトガル語動詞で、誤検出。644行目のみ修正対象でした。

### c. Pass 20 `Summer Institute of Linguistics` 残り

レビュー: 「説明なしで英語が残る箇所が多い。SIL は説明補足が必要」。

回答: SIL は固有名詞かつブランド名（SIL International）で、世界の言語学研究機関として広く認知されています。括弧で「(国際 SIL／旧 Summer Institute of Linguistics)」と補足することは検討に値しますが、「説明なしで残すこと自体が誤り」という主張は admit しません。ローカライズ方針として保留。

---

## サマリー

- レビュー総項目: 約 50
- 即修正済み: 約 40（batch 1: 13, batch 2: 27）
- 部分対応／継続: 5（cascade 待ち / 表記方針 / 大規模統一）
- 部分反論: 3（うち厳密に「誤り」とまでは認めないもの）

レビューは追加指摘を経てかなり網羅的になり、特に Boxing Day / Hebrew ejective / KO SIL / Tuyuca 表記揺れ / FR 非文法 / IT dattilografia / PT presentado / Ubykh 文献の取り違え といった明白な誤りを最終的に洗い出せました。初回レビューでは Korean `권투의 날` 誤訳が見落とされており、ユーザー側の指摘で追加検出された経緯があるため、「すべて拾い切った」とは断定しません。今後この水準のレビューがあれば、cascade まで含めて一度に着手しやすいです。
