# LangMap - Multilingual Word Order Map

![LangMap Screenshot](langmap.png)

**LangMap** is an interactive web tool that visualizes how word order differs across languages. Each sentence is broken into color-coded semantic segments, and curved lines connect corresponding segments between languages — making it instantly clear how languages rearrange the same meaning.

Inspired by [sunjun_kim's language mapping graphic](https://twitter.com/sunjun_kim).

**GitHub:** [github.com/jounlai/langmap](https://github.com/jounlai/langmap)

## Features

- **100 sample sentences** across 210 languages/dialects with hand-aligned semantic segments
- **210 languages** including dialects, historical variants, and creoles (see below)
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

## Languages (174 total, ordered by similarity)

| Group | Languages | Codes |
|---|---|---|
| Japanese | Standard, Kyoto, Osaka, Hiroshima, Hakata, Aomori, Okinawan, Miyako, Yaeyama, Heian-period, Edo-period | `ja`, `ja_kyo`, `ja_osa`, `ja_hir`, `ja_hak`, `ja_aom`, `ja_oki`, `ja_mvi`, `ja_rys`, `ja_heian`, `ja_edo` |
| Ainu | Ainu | `ain` |
| Korean | Standard, North Korean, Busan, Jeju, Yanbian, Middle Korean, Early Modern Korean | `ko`, `ko_kp`, `ko_bus`, `ko_jeju`, `ko_yb`, `ko_mid`, `ko_em` |
| Mongolic | Mongolian, Inner Mongolian | `mn`, `mn_cn` |
| Turkic | Turkish, Kazakh, Uyghur, Uzbek | `tr`, `kk`, `ug`, `uz` |
| Chinese | Mandarin, Cantonese, Taiwanese, Shanghainese, Hakka, Sichuan, Dongbei, Han-dynasty Classical, Tang-dynasty Classical, Song-Ming Classical | `zh`, `yue`, `nan`, `wuu`, `hak_cn`, `zh_sc`, `zh_db`, `zh_han`, `zh_tang`, `zh_song` |
| Tibeto-Burman | Tibetan, Burmese, Yi (Nuosu) | `bo`, `my`, `ii` |
| Hmong-Mien | Hmong (Miao) | `hmn` |
| Southeast Asian | Vietnamese, Chữ Nôm, Thai, Thai (Isan), Lao, Khmer, Indonesian, Sundanese, Malay, Javanese, Tagalog, Cebuano, Zhuang | `vi`, `vi_nom`, `th`, `th_isan`, `lo`, `km`, `id`, `su`, `ms`, `jv`, `tl`, `ceb`, `za` |
| Austronesian (Oceanic) | Malagasy, Maori, Hawaiian, Fijian, Samoan | `mg`, `mi`, `haw`, `fj`, `sm` |
| South Asian | Hindi, Marathi, Gujarati, Bengali, Tamil, Telugu, Kannada, Malayalam, Sinhala, Urdu, Punjabi, Nepali, Sanskrit, Romani | `hi`, `mr`, `gu`, `bn`, `ta`, `te`, `kn`, `ml`, `si`, `ur`, `pa`, `ne`, `sa`, `rom` |
| Iranian | Persian, Kurdish (Kurmanji), Pashto | `fa`, `ku`, `ps` |
| Semitic & Ancient Near East | Arabic (MSA), Arabic (Egyptian/Levantine/Moroccan/Gulf/Iraqi), Hebrew, Aramaic, Akkadian, Amharic, Tigrinya, Maltese, Ancient Egyptian, Coptic, Sumerian | `ar`, `ar_eg`, `ar_lev`, `ar_ma`, `ar_gulf`, `ar_iq`, `he`, `arc`, `akk`, `am`, `ti`, `mt`, `egy`, `cop`, `sux` |
| African | Swahili, Lingala, Shona, Zulu, Xhosa, Yoruba, Igbo, Hausa, Wolof, Somali, Oromo | `sw`, `ln`, `sn`, `zu`, `xh`, `yo`, `ig`, `ha`, `wo`, `so`, `om` |
| Proto-Indo-European | Proto-Indo-European, Hittite | `ine`, `hit` |
| Germanic | English, English dialects (AAVE/Southern/Appalachian/Australian/Indian/Irish/Scots/Yorkshire/Cockney/Singaporean), Scots, Dutch, German, Swiss German, Yiddish, Swedish, Norwegian, Danish, Icelandic, Faroese, Old English, Old Norse | `en`, `en_aave`, `en_south`, `en_app`, `en_au`, `en_in`, `en_ie`, `en_sco`, `en_yk`, `en_ck`, `en_sg`, `sco`, `nl`, `de`, `de_gsw`, `yi`, `sv`, `no`, `da`, `is`, `fo`, `en_ang`, `non` |
| Celtic | Irish, Welsh, Breton | `ga`, `cy`, `br` |
| Romance | Latin, Italian, Neapolitan, Sicilian, French, French (Quebec), Catalan, Spanish (EU/MX/AR/CO/CL), Ladino, Galician, Occitan, Portuguese (EU/BR), Romanian | `la`, `it`, `nap`, `scn`, `fr`, `fr_qc`, `ca`, `es_eu`, `es_mx`, `es_ar`, `es_co`, `es_cl`, `lad`, `gl`, `oc`, `pt_eu`, `pt_br`, `ro` |
| Slavic | Russian, Ukrainian, Belarusian, Polish, Czech, Slovak, Serbian, Bulgarian | `ru`, `uk`, `be`, `pl`, `cs`, `sk`, `sr`, `bg` |
| Baltic | Lithuanian, Latvian | `lt`, `lv` |
| Hellenic | Greek, Ancient Greek | `el`, `el_grc` |
| Albanian | Albanian | `sq` |
| Armenian | Armenian | `hy` |
| Uralic | Finnish, Estonian, Hungarian | `fi`, `et`, `hu` |
| Basque | Basque | `eu` |
| Kartvelian | Georgian | `ka` |
| Indigenous Americas | Navajo, Quechua, Classical Nahuatl, Classical Maya | `nv`, `qu`, `nci`, `myn` |
| Creoles & Pidgins | Hawaiian Creole, Nigerian Pidgin, Tok Pisin, Haitian Creole, Jamaican Patois, Papiamento | `hwc`, `pcm`, `tpi`, `ht`, `jam`, `pap` |
| Constructed | Esperanto, Toki Pona, Lojban, Klingon | `eo`, `tok`, `jbo`, `tlh` |
| Tungusic | Manchu | `mnc` |
| Historical | Old English, Old Norse, Ancient Egyptian, Coptic, Latin, Ancient Greek, Aramaic, Sumerian, Akkadian, Hittite, Proto-Indo-European, Han Classical Chinese, Tang Classical Chinese, Song-Ming Classical Chinese, Heian Japanese, Edo Japanese, Middle Korean, Early Modern Korean, Classical Nahuatl, Classical Maya, Manchu, Ladino, Sanskrit | `en_ang`, `non`, `egy`, `cop`, `la`, `el_grc`, `arc`, `sux`, `akk`, `hit`, `ine`, `zh_han`, `zh_tang`, `zh_song`, `ja_heian`, `ja_edo`, `ko_mid`, `ko_em`, `nci`, `myn`, `mnc`, `lad`, `sa` |

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
  data.js            — 100 sentences × 210 languages with segment alignments
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

- **100のサンプル文** — 210言語・方言で意味単位のアラインメント済み
- **210言語対応** — 方言・歴史的変種・クレオール語・人工言語を含む（下表参照）
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

## 言語一覧（210言語、類似言語順）

| グループ | 言語 | コード |
|---|---|---|
| 日本語 | 標準語、大阪弁、博多弁、沖縄弁、青森弁、江戸時代語、京都弁、広島弁、宮古語、八重山語 | `ja`, `ja_osa`, `ja_hak`, `ja_oki`, `ja_aom`, `ja_edo`, `ja_kyo`, `ja_hir`, `ja_mvi`, `ja_rys` |
| アイヌ語 | アイヌ語 | `ain` |
| 韓国語 | 標準語、北朝鮮語、釜山弁、済州語 | `ko`, `ko_kp`, `ko_bus`, `ko_jeju` |
| モンゴル語派 | モンゴル語 | `mn` |
| テュルク語派 | トルコ語、カザフ語、ウイグル語、ウズベク語 | `tr`, `kk`, `ug`, `uz` |
| 中国語 | 普通話、広東語、台湾語、上海語、客家語、文言、四川語、東北語 | `zh`, `yue`, `nan`, `wuu`, `hak_cn`, `zh_song`, `zh_sc`, `zh_db` |
| 東南アジア | ベトナム語、チューノム、タイ語、ラオ語、ミャンマー語、クメール語、インドネシア語、マレー語、ジャワ語、タガログ語 | `vi`, `vi_nom`, `th`, `lo`, `my`, `km`, `id`, `ms`, `jv`, `tl` |
| オーストロネシア語族（大洋州） | マダガスカル語、マオリ語、ハワイ語、フィジー語、サモア語 | `mg`, `mi`, `haw`, `fj`, `sm` |
| 南アジア | ヒンディー語、マラーティー語、グジャラート語、ベンガル語、タミル語、テルグ語、カンナダ語、マラヤーラム語、シンハラ語、ウルドゥー語、パンジャーブ語、ネパール語、サンスクリット語 | `hi`, `mr`, `gu`, `bn`, `ta`, `te`, `kn`, `ml`, `si`, `ur`, `pa`, `ne`, `sa` |
| イラン語派 | ペルシャ語、クルド語（クルマンジー）、パシュトー語 | `fa`, `ku`, `ps` |
| セム語派・古代近東 | アラビア語(フスハー)、アラビア語(エジプト/レバント/モロッコ/湾岸/イラク方言)、ヘブライ語、アムハラ語、マルタ語、アラム語、シュメール語、アッカド語 | `ar`, `ar_eg`, `ar_lev`, `ar_ma`, `ar_gulf`, `ar_iq`, `he`, `am`, `mt`, `arc`, `sux`, `akk` |
| アフリカ | スワヒリ語、ヨルバ語、ズールー語、コサ語、ハウサ語、イグボ語、ソマリ語、オロモ語、ティグリニャ語、ウォロフ語、リンガラ語、ショナ語 | `sw`, `yo`, `zu`, `xh`, `ha`, `ig`, `so`, `om`, `ti`, `wo`, `ln`, `sn` |
| ゲルマン語派 | 英語、英語方言(AAVE/南部/アイルランド/スコットランド/ヨークシャー/コックニー/アパラチア/シンガポール/オーストラリア/インド)、オランダ語、ドイツ語、スイスドイツ語、スウェーデン語、ノルウェー語、デンマーク語、アイスランド語、イディッシュ語 | `en`, `en_aave`, `en_south`, `en_ie`, `en_sco`, `en_yk`, `en_ck`, `en_app`, `en_sg`, `en_au`, `en_in`, `nl`, `de`, `de_gsw`, `sv`, `no`, `da`, `is`, `yi` |
| ケルト語派 | アイルランド語、ウェールズ語、ブルトン語 | `ga`, `cy`, `br` |
| ロマンス語派 | フランス語、フランス語(ケベック)、イタリア語、ナポリ語、シチリア語、スペイン語(欧州/メキシコ/アルゼンチン)、ポルトガル語(欧州/ブラジル)、ルーマニア語、カタルーニャ語、ラディーノ語 | `fr`, `fr_qc`, `it`, `nap`, `scn`, `es_eu`, `es_mx`, `es_ar`, `pt_eu`, `pt_br`, `ro`, `ca`, `lad` |
| バルト語派 | リトアニア語、ラトビア語 | `lt`, `lv` |
| バスク語 | バスク語 | `eu` |
| スラヴ語派 | ロシア語、ウクライナ語、ポーランド語、チェコ語、セルビア語、ブルガリア語、スロバキア語、ベラルーシ語 | `ru`, `uk`, `pl`, `cs`, `sr`, `bg`, `sk`, `be` |
| ウラル語派 | ハンガリー語、フィンランド語、エストニア語 | `hu`, `fi`, `et` |
| アルバニア語派 | アルバニア語 | `sq` |
| カルトヴェリ語族 | ジョージア語 | `ka` |
| ギリシャ語派・古代印欧 | ギリシャ語、古代ギリシャ語、ヒッタイト語、印欧祖語 | `el`, `el_grc`, `hit`, `ine` |
| アルメニア語派 | アルメニア語 | `hy` |
| インド・アーリア語派（離散） | ロマニ語 | `rom` |
| チベット・ビルマ語派 | チベット語 | `bo` |
| アメリカ先住民語 | ナバホ語、ケチュア語、古典ナワトル語、古典マヤ語 | `nv`, `qu`, `nci`, `myn` |
| 人工言語 | エスペラント、トキポナ、ロジバン、クリンゴン語 | `eo`, `tok`, `jbo`, `tlh` |
| 歴史的言語 | 古英語、古ノルド語、古代エジプト語、コプト語、ラテン語、古代ギリシャ語、アラム語、シュメール語、アッカド語、ヒッタイト語、印欧祖語、文言、江戸時代語、古典ナワトル語、古典マヤ語、ラディーノ語 | `en_ang`, `non`, `egy`, `cop`, `la`, `el_grc`, `arc`, `sux`, `akk`, `hit`, `ine`, `zh_song`, `ja_edo`, `nci`, `myn`, `lad` |
| クレオール・ピジン | トクピシン、ナイジェリアピジン、ハワイクレオール、ハイチクレオール、スコットランド語 | `tpi`, `pcm`, `hwc`, `ht`, `sco` |

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
  data.js            — 100文 × 210言語のセグメントアラインメントデータ
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
