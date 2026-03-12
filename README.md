# LangMap - Multilingual Word Order Map

![LangMap Screenshot](langmap.png)

**LangMap** is an interactive web tool that visualizes how word order differs across languages. Each sentence is broken into color-coded semantic segments, and curved lines connect corresponding segments between languages — making it instantly clear how languages rearrange the same meaning.

Inspired by [sunjun_kim's language mapping graphic](https://twitter.com/sunjun_kim).

## Features

- **100 sample sentences** across 18 languages with hand-aligned semantic segments
- **18 languages**: Japanese, Korean, Chinese (Mandarin), Cantonese, Vietnamese, Thai, Indonesian, Hindi, English, German, French, Italian, Spanish, Portuguese, Russian, Ukrainian, Arabic, Hebrew
- **Toggle languages ON/OFF** — show only the languages you want to compare
- **Drag-to-reorder** — reorder languages both from the control panel and directly in the map display
- **Color-coded segments** with SVG bezier curves connecting corresponding parts
- **URL state persistence** — every setting (sentence, languages, order, UI language) is saved in the URL hash for sharing and bookmarking
- **UI in 18 languages** — switch the entire interface language from the top-right selector
- **RTL support** — Arabic and Hebrew render right-to-left
- **Export** — save as PNG or SVG
- **Share** — copy URL, share to X (Twitter), Facebook, LINE
- **Keyboard shortcuts** — `←`/`→` to navigate sentences, `r` for random

## Languages (ordered by similarity)

| Group | Languages |
|---|---|
| CJK | Japanese, Korean, Chinese, Cantonese |
| Southeast Asian | Vietnamese, Thai, Indonesian |
| South Asian | Hindi |
| Germanic | English, German |
| Romance | French, Italian, Spanish, Portuguese |
| Slavic | Russian, Ukrainian |
| Semitic | Arabic, Hebrew |

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
  index.html   — Main HTML page
  styles.css   — Styles (including RTL support)
  app.js       — Rendering engine, controls, drag-and-drop, export, i18n
  data.js      — 100 sentences × 18 languages with segment alignments
```

## Data Format

Each sentence in `data.js` follows this structure:

```javascript
{
  id: 1,
  title: "Japanese description",
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

## License

MIT

---

# LangMap - 多言語語順マップ

![LangMap スクリーンショット](langmap.png)

**LangMap** は、言語間で語順がどのように異なるかを視覚化するインタラクティブなWebツールです。各文を色分けされた意味セグメントに分割し、言語間で対応するセグメントをベジェ曲線で結びます。

[sunjun_kim氏の言語マッピング画像](https://twitter.com/sunjun_kim)にインスパイアされています。

## 機能

- **100のサンプル文** — 18言語で意味単位のアラインメント済み
- **18言語対応**: 日本語、韓国語、中国語、広東語、ベトナム語、タイ語、インドネシア語、ヒンディー語、英語、ドイツ語、フランス語、イタリア語、スペイン語、ポルトガル語、ロシア語、ウクライナ語、アラビア語、ヘブライ語
- **言語のON/OFF切替** — 比較したい言語だけを表示
- **ドラッグで並べ替え** — コントロールパネルからも、マップ表示内から直接でも言語の順番を変更可能
- **色分けセグメント** — SVGベジェ曲線で対応部分を接続
- **URL状態保持** — 文章、言語、順序、UI言語がすべてURLハッシュに保存され、共有・ブックマーク可能
- **UIの18言語対応** — 右上のセレクタでインターフェース言語を切替
- **RTL対応** — アラビア語・ヘブライ語は右から左に表示
- **エクスポート** — PNG・SVGで保存
- **シェア** — URLコピー、X (Twitter)、Facebook、LINEへの共有ボタン
- **キーボードショートカット** — `←`/`→`で文章切替、`r`でランダム

## 言語一覧（類似言語順）

| グループ | 言語 |
|---|---|
| CJK | 日本語、韓国語、中国語、広東語 |
| 東南アジア | ベトナム語、タイ語、インドネシア語 |
| 南アジア | ヒンディー語 |
| ゲルマン語派 | 英語、ドイツ語 |
| ロマンス語派 | フランス語、イタリア語、スペイン語、ポルトガル語 |
| スラヴ語派 | ロシア語、ウクライナ語 |
| セム語派 | アラビア語、ヘブライ語 |

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
  index.html   — メインHTMLページ
  styles.css   — スタイル（RTL対応含む）
  app.js       — 描画エンジン、コントロール、ドラッグ&ドロップ、エクスポート、i18n
  data.js      — 100文 × 18言語のセグメントアラインメントデータ
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

## ライセンス

MIT
