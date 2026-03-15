# LangMap - Multilingual Word Order Map

![LangMap Screenshot](langmap.png)

**LangMap** is an interactive web tool that visualizes how word order differs across languages. Each sentence is broken into color-coded semantic segments, and curved lines connect corresponding segments between languages — making it instantly clear how languages rearrange the same meaning.

Inspired by [sunjun_kim's language mapping graphic](https://twitter.com/sunjun_kim).

**GitHub:** [github.com/jounlai/langmap](https://github.com/jounlai/langmap)

## Features

- **100 sample sentences** across 46 languages with hand-aligned semantic segments
- **46 languages** including dialects and historical variants (see below)
- **Toggle languages ON/OFF** — show only the languages you want to compare
- **Drag-to-reorder** — reorder languages both from the control panel and directly in the map display
- **Color-coded segments** with SVG bezier curves connecting corresponding parts
- **URL state persistence** — every setting (sentence, languages, order, UI language) is saved in the URL hash for sharing and bookmarking
- **UI in 21 languages** — switch the entire interface language from the top-right selector
- **RTL support** — Arabic, Hebrew, and Persian render right-to-left
- **Export** — save as PNG or SVG
- **Share** — copy URL, share to X (Twitter), Facebook, LINE
- **Keyboard shortcuts** — `←`/`→` to navigate sentences, `r` for random
- **Inline editing** — click any segment to edit translations directly in the map
- **Copy text** — copy any language row's text with one click

## Languages (46 total, ordered by similarity)

| Group | Languages | Codes |
|---|---|---|
| Japanese | Standard, Osaka, Hakata, Okinawan, Aomori, Edo-period | `ja`, `osa`, `hak`, `oki`, `aom`, `ja_edo` |
| Korean | Standard, North Korean, Busan dialect | `ko`, `kp`, `bus` |
| Mongolic | Mongolian | `mn` |
| Turkic | Turkish | `tr` |
| Chinese | Mandarin, Cantonese, Taiwanese, Shanghainese, Classical Chinese | `zh`, `yue`, `nan`, `wuu`, `zh_classical` |
| Southeast Asian | Vietnamese, Chữ Nôm, Thai, Burmese, Indonesian, Malay, Tagalog | `vi`, `vi_nom`, `th`, `my`, `id`, `ms`, `tl` |
| South Asian | Hindi, Tamil | `hi`, `ta` |
| Iranian | Persian | `fa` |
| Semitic | Arabic (MSA), Arabic (Egyptian), Hebrew, Amharic | `ar`, `ar_eg`, `he`, `am` |
| African | Swahili | `sw` |
| Germanic | English, Dutch, German | `en`, `nl`, `de` |
| Celtic | Irish | `ga` |
| Romance | French, Italian, Spanish (EU/MX), Portuguese (EU/BR) | `fr`, `it`, `es_eu`, `es_mx`, `pt_eu`, `pt_br` |
| Basque | Basque | `eu` |
| Slavic | Russian, Ukrainian, Polish | `ru`, `uk`, `pl` |
| Uralic | Hungarian | `hu` |

## Getting Started

No build step required. Just serve the files with any static HTTP server:

```bash
# Python
python3 -m http.server 8080

# Node.js
npx serve .

# Or simply open index.html in a browser
```

Then open `http://localhost:8080`.

## URL Parameters

State is stored in the URL hash for sharing:

| Parameter | Description | Example |
|---|---|---|
| `s` | Sentence index (0-99) | `s=5` |
| `l` | Enabled language codes (comma-separated) | `l=ja,ko,en,de` |
| `o` | Language display order | `o=en,ja,ko,zh` |
| `ui` | UI language code | `ui=en` |

Example: `#s=0&l=ja,en,zh,ar&ui=en`

## File Structure

```
langmap/
  index.html        — Main HTML page
  styles.css         — Styles (including RTL support)
  app.js             — Rendering engine, controls, drag-and-drop, export, i18n
  data.js            — 100 sentences × 46 languages with segment alignments
  validate_data.py   — Data validation script
  CONTRIBUTING.md    — Data contribution guidelines
```

## Data Format

Each sentence in `data.js` follows this structure:

```javascript
{
  id: 1,
  title: "English description",
  segments: {
    A: { color: "#e74c3c" },  // semantic role
    B: { color: "#3498db" },
    ...
  },
  langs: {
    ja: [["A","私は"], ["B","ホテルの向かいの"], ...],  // Japanese word order
    en: [["A","I"], ["F","want to try on"], ...],       // English word order
    ar: [["F","أريد أن أجرب"], ["E","البدلة"], ...],    // Arabic word order (VSO)
    ...
  }
}
```

Each language lists the same segment IDs in its own natural word order. The visualization draws colored lines between matching segments to show how order differs.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding sentences or languages.

Run `python3 validate_data.py` before committing to check for common errors.

### Chữ Nôm Standardization

Chữ Nôm characters in `vi_nom` follow these standardization references:
- [ChuNomStandardization](https://github.com/valestanov/ChuNomStandardization) — primary character mapping
- [chunom.org Standard 750](https://chunom.org/pages/standard/) — frequency-ranked standard characters

## Author

**趙 俊来** (Jounlai Cho) — [ヒューロン株式会社](https://heuron.com)
Contact: cho@heuron.com | X: [@jounlai](https://x.com/jounlai)

## License

MIT

---

# LangMap - 多言語語順マップ

![LangMap スクリーンショット](langmap.png)

**LangMap** は、言語間で語順がどのように異なるかを視覚化するインタラクティブなWebツールです。各文を色分けされた意味セグメントに分割し、言語間で対応するセグメントをベジェ曲線で結びます。

[sunjun_kim氏の言語マッピング画像](https://twitter.com/sunjun_kim)にインスパイアされています。

**GitHub:** [github.com/jounlai/langmap](https://github.com/jounlai/langmap)

## 機能

- **100のサンプル文** — 46言語で意味単位のアラインメント済み
- **46言語対応** — 方言・歴史的変種を含む（下表参照）
- **言語のON/OFF切替** — 比較したい言語だけを表示
- **ドラッグで並べ替え** — コントロールパネルからも、マップ表示内から直接でも言語の順番を変更可能
- **色分けセグメント** — SVGベジェ曲線で対応部分を接続
- **URL状態保持** — 文章、言語、順序、UI言語がすべてURLハッシュに保存され、共有・ブックマーク可能
- **UIの21言語対応** — 右上のセレクタでインターフェース言語を切替
- **RTL対応** — アラビア語・ヘブライ語・ペルシャ語は右から左に表示
- **エクスポート** — PNG・SVGで保存
- **シェア** — URLコピー、X (Twitter)、Facebook、LINEへの共有ボタン
- **キーボードショートカット** — `←`/`→`で文章切替、`r`でランダム
- **インライン編集** — セグメントをクリックしてマップ上で直接翻訳を編集
- **テキストコピー** — 各言語行のテキストをワンクリックでコピー

## 言語一覧（46言語、類似言語順）

| グループ | 言語 | コード |
|---|---|---|
| 日本語 | 標準語、大阪弁、博多弁、沖縄弁、青森弁、江戸時代語 | `ja`, `osa`, `hak`, `oki`, `aom`, `ja_edo` |
| 韓国語 | 標準語、北朝鮮語、釜山弁 | `ko`, `kp`, `bus` |
| モンゴル語派 | モンゴル語 | `mn` |
| テュルク語派 | トルコ語 | `tr` |
| 中国語 | 普通話、広東語、台湾語、上海語、文言 | `zh`, `yue`, `nan`, `wuu`, `zh_classical` |
| 東南アジア | ベトナム語、チューノム、タイ語、ミャンマー語、インドネシア語、マレー語、タガログ語 | `vi`, `vi_nom`, `th`, `my`, `id`, `ms`, `tl` |
| 南アジア | ヒンディー語、タミル語 | `hi`, `ta` |
| イラン語派 | ペルシャ語 | `fa` |
| セム語派 | アラビア語(フスハー)、アラビア語(エジプト方言)、ヘブライ語、アムハラ語 | `ar`, `ar_eg`, `he`, `am` |
| アフリカ | スワヒリ語 | `sw` |
| ゲルマン語派 | 英語、オランダ語、ドイツ語 | `en`, `nl`, `de` |
| ケルト語派 | アイルランド語 | `ga` |
| ロマンス語派 | フランス語、イタリア語、スペイン語(欧州/メキシコ)、ポルトガル語(欧州/ブラジル) | `fr`, `it`, `es_eu`, `es_mx`, `pt_eu`, `pt_br` |
| バスク語 | バスク語 | `eu` |
| スラヴ語派 | ロシア語、ウクライナ語、ポーランド語 | `ru`, `uk`, `pl` |
| ウラル語派 | ハンガリー語 | `hu` |

## 使い方

ビルド不要です。任意の静的HTTPサーバーで配信するだけです：

```bash
# Python
python3 -m http.server 8080

# Node.js
npx serve .

# またはindex.htmlを直接ブラウザで開く
```

`http://localhost:8080` にアクセスしてください。

## URLパラメータ

状態はURLハッシュに保存されます：

| パラメータ | 説明 | 例 |
|---|---|---|
| `s` | 文章インデックス (0-99) | `s=5` |
| `l` | 有効な言語コード（カンマ区切り） | `l=ja,ko,en,de` |
| `o` | 言語の表示順序 | `o=en,ja,ko,zh` |
| `ui` | UI言語コード | `ui=en` |

例: `#s=0&l=ja,en,zh,ar&ui=ja`

## ファイル構成

```
langmap/
  index.html        — メインHTMLページ
  styles.css         — スタイル（RTL対応含む）
  app.js             — 描画エンジン、コントロール、ドラッグ&ドロップ、エクスポート、i18n
  data.js            — 100文 × 46言語のセグメントアラインメントデータ
  validate_data.py   — データバリデーションスクリプト
  CONTRIBUTING.md    — データ追加ガイドライン
```

## データ形式

`data.js`の各文は以下の構造です：

```javascript
{
  id: 1,
  title: "日本語の説明",
  segments: {
    A: { color: "#e74c3c" },  // 意味的役割
    B: { color: "#3498db" },
    ...
  },
  langs: {
    ja: [["A","私は"], ["B","ホテルの向かいの"], ...],  // 日本語の語順
    en: [["A","I"], ["F","want to try on"], ...],       // 英語の語順
    ar: [["F","أريد أن أجرب"], ["E","البدلة"], ...],    // アラビア語の語順 (VSO)
    ...
  }
}
```

各言語は同じセグメントIDをその言語固有の語順で並べます。ビジュアライゼーションは一致するセグメント間に色付きの線を描画し、語順の違いを示します。

## コントリビューション

文章や言語の追加については [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。

コミット前に `python3 validate_data.py` を実行してエラーチェックを行ってください。

### チューノム標準化

`vi_nom` のチューノム文字は以下の標準化リファレンスに基づいています：
- [ChuNomStandardization](https://github.com/valestanov/ChuNomStandardization) — 主要な文字マッピング
- [chunom.org 標準750字](https://chunom.org/pages/standard/) — 出現頻度順の標準文字

## 制作

**趙 俊来**（Jounlai Cho） — [ヒューロン株式会社](https://heuron.com)
連絡先: cho@heuron.com | X: [@jounlai](https://x.com/jounlai)

## ライセンス

MIT
