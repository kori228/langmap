# LangMap 単語データ寄稿ガイド

このガイドは、ワードマップに単語の翻訳や新しい概念を追加する人向けです。
ソースデータは 2 つの場所に分かれています：

- `words/<id>.js` — 1 ファイル＝1 概念（water、fire など）。各ファイルには
  概念のラベル、定義、言語ごとの翻訳が入っています。
- `wordmap_data.js` — 言語メタ情報（緯度経度、ネイティブ名など）。翻訳
  はここには入りません。

1 つの翻訳を直すだけなら、テキストエディタ以外何も不要です。

## 作業手順

### 既存の概念に新しい翻訳を追加する（3 ステップ）

1. `words/` 配下の該当ファイルを開く。概念 ID とファイル名は一致しています
   （`water` ↔ `words/water.js`）。
2. 言語が属する地域コメントブロックを見つけて（または新規に作成して）、
   以下の形で 1 行追加：

   ```js
   <コード>:  ['<表記>', '<IPA>'],
   ```

   左が言語コード、右が表記と IPA。コードは [`LANG_CODES.md`](./LANG_CODES.md)
   で確認できます。

3. リポジトリのルートで validator を実行：

   ```bash
   node validate_wordmap_data.js
   ```

   失敗が 0 件なら OK。失敗があればメッセージに従って修正してください。

### 新しい概念を追加する（5 ステップ）

1. ユニークな ID を決める。ASCII、小文字、空白なし（`book`、`river`、
   `to_walk` など）。ファイル名は ID と完全一致させます。

2. `words/<id>.js` を作る。このファイル末尾のスケルトンをコピーして埋める。
   `label.en` と `label.ja` は必須、他の UI 言語は英語にフォールバックします。

3. `word_manifest.js` の `WORD_ORDER` に新しい ID を追加。並び順は単語
   セレクタに反映されます。

4. `wordmap.html` の `WM_ASSET_VERSION.words` をインクリメント。ブラウザ
   キャッシュを更新するためです。

5. Validator を実行：

   ```bash
   node validate_wordmap_data.js
   ```

### 新しい言語を追加する（稀）

1. `wordmap_data.js` に言語エントリ（name、native、lat/lng）を追加。
2. `lang_names.js` に翻訳された名前を追加。
3. オプション：`wordmap_meta.js` に系統・話者数・出典・概要を追加。
4. 言語コード対照表を再生成：

   ```bash
   node tools/generate_lang_codes_md.mjs
   ```

5. Validator を実行。再生成を忘れていたらここで失敗します。

## ファイル形式リファレンス

### シンプルな翻訳（タプル）

```js
ja: ['水', 'mizu'],
```

2 要素の配列：`[表記, IPA]`。IPA が不明なら空文字（`''`）で OK。

### 別表記を伴う翻訳（オブジェクト）

複数の文字体系を使う言語はオブジェクト形式で書きます：

```js
za: {
  form:   '淰',                    // 地図上に表示される主表記
  ipa:    'rɐmˀ˧˥',
  alt: [
    { form: 'raemx',    script: 'Latin (Sawcuengh)',
      source: '1957/1982 official orthography' },
    { form: '𭜯 / 淋',  script: 'Sawndip (古壮字)',
      source: 'za.wikipedia.org Raemx' },
  ],
  source: { title: 'za.wikipedia.org', url: 'https://za.wikipedia.org/wiki/Raemx' },
},
```

- `form` と `ipa` は地図表示用。
- `alt` は `{form, script, source}` の配列。モーダルでこの順に表示されます。
- `source`（オプション）は主表記の出典。

### IPA の書き方

- 表記法は IPA。各言語のローマ字表記ではなく国際音声記号で。
- 声調記号は同じ文字列にインライン（`ʂweɪ˧˩˧`、`nɨək˧˥`）。
- 表記だけわかって IPA がないときは空文字（`''`）で構いません。

### 出典の書き方

- **言語全体の出典**は `wordmap_meta.js` の各言語の `meta.sources` 配列。
- **個別の単語表記の出典**はオブジェクト形式の `.source` フィールド（別表記なら
  `.alt[i].source`）。

## 新しい `words/<id>.js` のスケルトン

```js
/**
 * <id> — <英語で 1 文の定義>
 *
 * 新規追加は docs/words/CONTRIBUTING.ja.md
 * 言語コードは docs/words/LANG_CODES.md
 */
WORDS.<id> = {
  label: {
    en: '<英語ラベル>',
    ja: '<日本語ラベル>',
    // …他の UI 言語も任意で
  },
  definition: {
    en: '<英語の定義>',
    ja: '<日本語の定義>',
  },
  data: {
    // === 東アジア ===
    ja: ['<表記>', '<IPA>'],
    ko: ['<表記>', '<IPA>'],
    // === ヨーロッパ ===
    en: ['<表記>', '<IPA>'],
    // …
  },
};
```

## ローカル確認

リポジトリのルートで dev サーバ起動：

```bash
python3 server.py
```

`http://localhost:8001/wordmap.html` を開く。新しい概念があれば単語セレクタに
表示され、新しい翻訳が地図上にレンダリングされるはずです。

## プルリクエストのチェックリスト

- [ ] `node validate_wordmap_data.js` が通る
- [ ] 言語を追加した場合：`tools/generate_lang_codes_md.mjs` を再実行
- [ ] 概念を追加・改名・順序変更した場合：`wordmap.html` の
      `WM_ASSET_VERSION.words` をインクリメント
- [ ] コミットメッセージの形：`Wordmap: <Y>に<X>を追加` 等
