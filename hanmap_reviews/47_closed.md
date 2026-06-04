# Hanmap data review #47 — Old/Middle Chinese reconstruction round-2 (zh_han, zh_tang, zh_song)

## Reviewer self-introduction (ペルソナ自己紹介)

本レビューは、`hanmap_data.js` の 59 文字 × 3 つの歴史音再構列 (`zh_han` / `zh_tang` / `zh_song`) を **round-2** として再走査するものである。前回の #13（上古音 Baxter–Sagart 2014 専門レビュー）および #14（中古音 Tang–Song 文読層・等韻表専門レビュー）で扱われた **個別の正本論点が一旦 CLOSED された後**、column 全体を改めて *セル単位の surface↔ipa 対応* / *Tang→Song 派生方向* / *BS2014 type-A 診断* / *声調マーカー (¹²³/²¹⁴/⁵¹) と入聲 ̚ の規約遵守* の 4 観点で総ざらいする。

私の参照体系：
- 上古音は **Baxter & Sagart 2014** *Old Chinese: A New Reconstruction* version 1.1 (2014-09-20) を主基準とし、`ˤ` (pharyngealization) / `[…]` (不確定) / `(…)` (任意) / `.` (tight pre-initial) vs `-` (loose pre-initial) の表記規約を逐一確認する。
- 中古音 Tang 層は **Pulleyblank 1991** *Lexicon of Reconstructed Pronunciation in Early Middle Chinese, Late Middle Chinese, and Early Mandarin* の EMC を、Song 層は同書 LMC を参照する。
- 補助的に **Karlgren** *Grammata Serica Recensa* (1957) と **Baxter 1992** *A Handbook of Old Chinese Phonology* を対照する。

本プロジェクトの HAN_DATA 構造（`HAN_DATA[char].surface.<lang>` と `.ipa.<lang>` の双行）には熟知している。`zh_han` は両行で同一文字列が原則。`zh_tang`/`zh_song` は声調を *surface には ASCII 上付き数字* (¹²³, ²¹⁴, ⁵¹)、*ipa には Chao 調値文字* (˩˨˧, ˨˩˦, ˥˩) で表記し、入聲はいずれも声調記号なし＋ipa 側のみ ◌̚ を伴う、という慣習が（理想としては）成立している。

**Reviewer perspective:** 三層歴史音 column 横断の整合性監査者 — 個別 BS2014 検証は #13、Tang/Song 層内の音韻論的選択は #14 で扱われたが、**「同一セル内の surface と ipa の文字列が違う」「同一文字の上古→中古→近古の派生方向が物理的に成立しない」「BS2014 type-A の `ˤ` 診断漏れが残っている」**という低レベルの整合性違反が広く残存しているのを確認した。

**Coverage:** 全 59 字 × `zh_han` / `zh_tang` / `zh_song` × surface/ipa 2 行 = 354 セルを逐一読了。`grep -A1 '"zh_tang"'` で Tang/Song 対をテーブル化し、surface↔ipa の差分を眼で全件突合した。

**Notation conventions confirmed in the live file:**
- `zh_han` は BS2014 アスタリスク付き OC、surface=ipa 同値が原則。
- `zh_tang`/`zh_song` の入聲 surface は無調号・無 ̚、ipa は無調号・末子音に ̚ を付す。これは file 内のほぼ全入聲セルで遵守されている（一/六/七/八/十/日/月/木/北/食/立 等）。
- 平聲は Tang ¹²³ / Song ¹³、上聲は Tang ²¹⁴ / Song ²⁴、去聲は Tang/Song 共に ⁵¹（surface）／˩˨˧・˩˧・˨˩˦・˨˦・˥˩（ipa）が事実上の template。
- 三等介音の表記は **surface 側で `ɨ`/`j`/`i`、ipa 側で `iu`/`iɪ`/`iɐ` という二重体系**になっており、これが本 review の最大の発見源である（issue #1〜#11）。

---

## Issues found

### 1. 一 / 二 / 七 / 耳 — `zh_tang` (surface vs ipa) — 三等介音の `i` vs `iɪ` 不一致が止攝/真攝で系統的に発生
- Current: 一 surface `"ʔjit"` / ipa `"ʔjiɪt̚"`; 二 surface `"ɲij⁵¹"` / ipa `"ɲiɪj˥˩"`; 七 surface `"tsʰit"` / ipa `"tsʰiɪt̚"`; 耳 surface `"ɲi²¹⁴"` / ipa `"ɲiɪ˨˩˦"`
- Expected: 同一セル内で surface と ipa の介音を一致させる。Pulleyblank EMC の重紐三等は `iɪ`（または `ji`）が正で、ipa 側がそれを保持しているため、surface もそれに合わせて `ʔjiɪt`/`ɲiɪj⁵¹`/`tsʰiɪt`/`ɲiɪ²¹⁴` とする（あるいは逆方向に ipa を `i` に統一する）。
- Why: 一 (影母 質韻 重紐三等 入聲)、二 (日母 至韻 三等 去聲)、七 (清母 質韻 三等 入聲)、耳 (日母 止韻 三等 上聲) はいずれも MC の **三等 i 介音 + 主母音** という同一の音節構造を持つ。EMC では `iɪ` (=ji) と表記するのが Pulleyblank 1991 の標準だが、本 file は surface 側で介音を脱落させて `i` または `ij` と書く一方、ipa 側では `iɪ`/`iɪj` を保つ。これは **同じ音節を別々の音価で記述している**ことに等しい。`zh_song` 列はいずれも surface=ipa が一致しているため、Tang 層特有の体系的不整合である。

### 2. 中:1 / 中:2 — `zh_tang` (surface vs ipa) — 通攝三等の介音表記 `ɨu` vs `uo` 不一致
- Current: 中:1 surface `"ʈɨuŋ¹²³"` / ipa `"ʈuoŋ˩˨˧"`; 中:2 surface `"ʈɨuŋ⁵¹"` / ipa `"ʈuoŋ˥˩"`
- Expected: いずれかに統一。Pulleyblank EMC 東韻三等は `ʈuwŋ`/`ʈuoŋ` 系で、ipa 側の `uoŋ` が published form に近い。surface の `ɨu` は Karlgren-Li 系の `ɨ` 介音表記の名残で、本 file の他箇所の三等表記 (`ʈuoŋ` ipa、`tuɪŋ` 東) と不揃い。
- Why: 中 は知母 (ʈ) 東韻 三等。同じ知母三等の 龍 (issue #3) と同じ介音条件にあるはずだが、龍 ipa は `liuoŋ` (`iuo`)、中:1 ipa は `ʈuoŋ` (`uo`) と既に系統が割れている。さらにそれぞれの surface が ipa を写し損ねている。**中:1 と 中:2 は意味分化のみで音韻条件は同一なので、両者の surface/ipa 表記が一致するのは絶対要件**であり、現状は単一文字内で 2 重に齟齬している。

### 3. 龍 — `zh_tang` (surface vs ipa) — `lɨoŋ` (surface) vs `liuoŋ` (ipa) — 介音と主母音が完全に別物
- Current: surface `"lɨoŋ¹²³"` / ipa `"liuoŋ˩˨˧"`
- Expected: `"liuoŋ¹²³"` (両行 `iuo`) または `"liuŋ¹²³"` (両行 簡略形); ipa の `liuoŋ` を採用すれば EMC の 來母鍾韻三等の Pulleyblank 形 `luawŋ`/`liuoŋ` と整合する。
- Why: 龍 は來母 鍾韻 三等 平聲 (力鍾切)。surface の `lɨoŋ` は介音 `ɨ`＋主母音 `o`、ipa の `liuoŋ` は介音 `iu`＋主母音 `o`。音節構造そのものの記述が違う。文字としては「同じ Tang 音を 2 つの転写体系で書いたもの」と読みうるが、その場合 surface 側は Karlgren 系、ipa 側は Pulleyblank 系で、本 file の他の Tang セル（kʰwen/dʑip/sim 等）が共通の Pulleyblank 系を採っているのと矛盾する。

### 4. 央 / 羊 — `zh_tang` (surface vs ipa) — 陽韻三等の介音 `ja`/`ɨa` (surface) vs `iɐ` (ipa) 不一致
- Current: 央 surface `"ʔjaŋ¹²³"` / ipa `"ʔiɐŋ˩˨˧"`; 羊 surface `"jɨaŋ¹²³"` / ipa `"jiɐŋ˩˨˧"`
- Expected: 央 `"ʔiɐŋ¹²³"`、羊 `"jiɐŋ¹²³"` (両行とも ipa に合わせる); 陽韻三等の Pulleyblank EMC は `iaŋ`/`iɐŋ` で、低中央母音 `ɐ` を採るのが標準。
- Why: 央 は影母 陽韻 三等 平聲、羊 は以母 陽韻 三等 平聲。両者とも同じ陽韻三等の音節核を共有するはずで、ipa はそれぞれ `ʔiɐŋ` / `jiɐŋ` で正しい。だが surface は央 `ʔjaŋ` (低前 `ja`) / 羊 `jɨaŋ` (中舌 `ɨa`) と、**同一の韻母を 2 つの違う前舌・中舌母音で書き分けている**。同一の MC 韻母をセル間で異なる音価で記述するのは音韻論的に破綻している。

### 5. 五 — `zh_tang` (surface vs ipa) — 模韻一等の主母音 `u` (surface) vs `uo` (ipa)
- Current: surface `"ŋu²¹⁴"` / ipa `"ŋuo˨˩˦"`
- Expected: いずれかに統一。Pulleyblank EMC 模韻一等は `uɔ`/`uo`、本 file の同じ模韻 土 (一等) は両行 `tʰuo`、虎 (二等→一等) は両行 `xuɔ` で **`u` 単独ではなく `uo`/`uɔ` を採用する慣例が成立している**ので、五 surface も `"ŋuo²¹⁴"` に揃えるのが整合的。
- Why: 五 は疑母 模韻 一等 上聲 (疑古切)。#14 issue #11 で「surface u, ipa uo の食い違い」が指摘され、worker round-1 では Baxter ASCII `ngu` → IPA `ŋu` の **初頭子音のみ** 変換した（held: 主母音は触らない）。round-2 として再観察すると、結果として surface `ŋu²¹⁴` / ipa `ŋuo˨˩˦` の食い違いは未解決のまま column に残っている。round-1 の hold は妥当だが、round-2 の本 review としては **`uo` 側に揃える** ことを推奨する（同列の土・虎の慣例に従う）。

### 6. 手 / 足 — `zh_tang` (surface vs ipa) — 流攝/通攝三等の介音 `ɨu`/`ɨo` (surface) vs `iuɪ`/`iuɪ` (ipa) 不一致
- Current: 手 surface `"ɕɨu²¹⁴"` / ipa `"ɕiuɪ˨˩˦"`; 足 surface `"tsɨok"` / ipa `"tsiuɪk̚"`
- Expected: 手 `"ɕiuɪ²¹⁴"`、足 `"tsiuɪk"` (両行とも ipa に合わせる); あるいは 手 ipa を `"ɕɨu˨˩˦"` に簡略化。
- Why: 手 は書母 有韻 三等 上聲、足 は精母 燭韻 三等 入聲。両者 surface の `ɨ` 介音は Karlgren-Li 系、ipa の `iu` は Pulleyblank 系で、issue #1〜#4 と同じ「surface=Karlgren、ipa=Pulleyblank の混在」パターンの追加事例。足 はさらに **主母音まで `o` (surface) vs `uɪ` (ipa) と完全に異なる** ため、単なる介音記号差ではなく音節核全体の不整合となっている (Pulleyblank LMC 燭 = `iawk` / `iuawk`、surface の `tsɨok` は EMC 鍾系の流用に近い)。

### 7. 食 — `zh_tang` (surface vs ipa) — **初頭子音と主母音の二重不一致**
- Current: surface `"ʑik"` / ipa `"dʑiɪk̚"`
- Expected: 同一セル内で初頭子音と主母音を一致させる。Pulleyblank EMC 食 (船母 職韻 入聲) は `ʑik`、LMC で `ʂikˇ`/`ʃiɪk`。Tang surface に worker round-1 で Baxter `zy-` → IPA `ʑ-` を当てた結果、surface は `ʑ`（船母 LMC寄り）、ipa は `dʑ`（常母 EMC 寄り）と **声母の種別そのものが Tang 層内で割れている**。
- Why: 食 は伝統的に船母 (古音: dʑ/ʑ の区別あり) で論争のある声母。surface=`ʑik` と ipa=`dʑiɪk̚` は **同一の Tang 音を別の声母クラスで記述している** ことに等しい。round-1 で初頭子音の表記体系を統一する際、ipa の `dʑ` を `ʑ` に追従させるか、surface の `ʑ` を `dʑ` に戻すかの判断が必要だが、**現在は宙吊り**になっている。`zh_song` は surface=`ʑiɪk` / ipa=`ʑiɪk̚` で完全一致しているため、Tang 層のみの局所バグ。

### 8. 山 — `zh_tang` (surface vs ipa) — **初頭子音 ʃ (postalveolar) vs ɕ (palatal) 不一致**
- Current: surface `"ʃæn¹²³"` / ipa `"ɕæn˩˨˧"`
- Expected: いずれかに統一。Pulleyblank EMC 山 (生母 山韻 二等 平聲) は `ʂɛːn` (莊組 retroflex)、Karlgren は `ʃăn`。ipa を `ʃæn` または `ʂæn` に揃えるか、surface を `ɕæn` に揃えるか。
- Why: 山 は生母 (莊組) 山韻 二等。莊組 (荘・初・崇・生) は MC で **retroflex/postalveolar** であり、`ʃ`/`ʂ` 系が正で、`ɕ` (palatal alveolopalatal) は精組/章組の値域。本 file の `zh_song` 山 では両行 `ʂan` と retroflex で一致しているのに、`zh_tang` だけ surface=postalveolar `ʃ` と ipa=palatal `ɕ` で割れる。**Tang→Song で `ɕ`→`ʂ` という不自然な逆 retroflex 化を ipa が見せている** のに対し、surface は `ʃ`→`ʂ` という妥当な漸進が見える。surface 側 (`ʃ`) が正で、ipa 側の `ɕ` が誤りと判断する。

### 9. 行:2 — `zh_tang` (surface vs ipa) — **匣母初頭 ɣ (surface) vs ɦ (ipa) 不一致**
- Current: surface `"ɣɑŋ¹²³"` / ipa `"ɦɑŋ˩˨˧"`
- Expected: 同一セル内で `ɣ` か `ɦ` のいずれかに統一。
- Why: 行:2 (匣母 唐韻 一等 平聲, 胡郎切) は #14 issue #4 の「匣母 ɣ/ɦ chronology」と関わるが、その system-level 議論とは別に、**本セル単一で surface=ɣ, ipa=ɦ という直接の矛盾が残っている**。同じ匣母の 行:1 は両行 `ɦ` / `ɣ` で一致 (Tang ɦ, Song ɣ)、下 は両行 `ɦ` で一致。行:2 のみが cell 内不一致を起こしている。chronology 議論（Tang→Song の方向）を保留するとしても、**まず同一セル内の声母表記の二重化を解消する必要がある**。

### 10. 海 / 来 / 西 — `zh_tang` (surface vs ipa) — **coda glide `j` (surface) vs `ɪ`/`i` (ipa) 不一致**
- Current: 海 surface `"xoj²¹⁴"` / ipa `"xoɪ˨˩˦"`; 来 surface `"loj¹²³"` / ipa `"ləɪ˩˨˧"`; 西 surface `"sej¹²³"` / ipa `"sei˩˨˧"`
- Expected: 同一セル内で `j` か `ɪ`/`i` のいずれかに統一。Pulleyblank EMC 咍韻 (海/来) は `əj` 系、齊韻 (西) は `ɛj`/`ej` 系で、coda は子音的 `-j` が標準。surface の `oj`/`oj`/`ej` を採用するか、ipa の `oɪ`/`əɪ`/`ei` (母音的) に揃えるか。
- Why: 海・来 は咍韻一等、西 は齊韻四等で、いずれも MC の `-j` 二重母音（あるいは下降二重母音 `-ɪ`/`-i`）終わり。本 file 内では surface 側で coda を子音 `j`、ipa 側で母音 `ɪ`/`i` と書く unsynchronisation が **3 文字に共通して** 発生。さらに **来** だけは主母音まで surface `o` vs ipa `ə` で違う（surface `loj`、ipa `ləɪ`）ため、海・西よりも齟齬が深刻。Pulleyblank 1991 EMC は 来 (來母 咍韻) = `ləj` で、ipa の `ləɪ` が published form に近い。surface `loj` は Karlgren `lậi`/`lậj` 系の `ậ`/`o` 表記の名残と思われる。

### 11. 火 — `zh_han` (surface/ipa) — **type-A 一等にもかかわらず `ˤ` (pharyngealization) が欠落**
- Current: surface `"*qʷʰəjʔ"` / ipa `"*qʷʰəjʔ"`
- Expected: `"*[qʷʰ]ˤəjʔ"` または最低限 `"*qʷʰˤəjʔ"` (BS2014 ver.1.1: `0353a 火 xwaX *[qʷʰ]ˤəjʔ fire`)
- Why: 火 は曉母 果韻 一等 上聲 (呼果切)。**一等 = 非三等 = type-A**、したがって BS2014 では初頭子音直後に `ˤ` を付すのが obligatory。本 column の他の type-A 一等は厳密に `ˤ` を付している（土 `*tʰˤaʔ`、木 `*C.mˤok`、東 `*tˤoŋ`、馬 `*mˤraʔ`、海 `*m̥ˤəʔ`、地 `*lˤej-s`、土 `*tʰˤaʔ`、西 `*s-nˤər`、南 `*nˤəm`、坐 `*[dz]ˤo[j]ʔ`、左 `*[ts]ˤajʔ`、北 `*pˤək`、行:2 `*[g]ˤraŋ` 等多数）。火 だけが `ˤ` 抜きで書かれており、#13 の指摘した 土・天 (Zhengzhang 注入) と同じ「type-A 診断漏れ」パターンに該当する。BS2014 ver.1.1 の published form は `*[qʷʰ]ˤəjʔ`（初頭子音は不確定括弧、`ˤ` は付与）。

### 12. 三 — `zh_han` (surface/ipa) — type-A 一等での `ˤ` 配置確認 (pre-initial と main-initial の境界)
- Current: surface `"*s.rum"` / ipa `"*s.rum"`
- Expected: BS2014 ver.1.1 の published form を確認したうえで、`*s.rˤum` (main-initial `r` に `ˤ`) または `*s.rum` (現状のまま) のいずれかに sourced 根拠付きで確定する。
- Why: 三 は心母 談韻 一等 平聲 (蘇甘切) で type-A。pre-initial `*s.` の後の main-initial は `r`。BS2014 規約では **type-A のとき main-initial に `ˤ`** を付すので、厳密適用なら `*s.rˤum` となる。本 column の類似構造で、来 は `*mə.rˤək` と pre-initial 直後の main `r` に `ˤ` を付しており、規約一貫性の観点から三も `*s.rˤum` が期待値。ただし BS2014 ver.1.1 の三項目（0648 系）の正本表記は私の手元で確認できないため、worker は出典確認の上で hold/fix を判断されたい。**もし正本が `*s.rum` (˺ なし) なら、それは BS2014 内部の例外として明示的に positive control 化すべき**で、現状の沈黙したコピーは判断保留として宙吊りである。

### 13. 食 — `zh_han` (surface/ipa) — pre-initial 表記 `*mə-lək` vs BS2014 ver.1.1 `*m-lək` の確認
- Current: surface `"*mə-lək"` / ipa `"*mə-lək"`
- Expected: BS2014 ver.1.1 published form を確認のうえ、`*m-lək` (短 pre-initial) または `*mə-lək` (minor syllable 付) のいずれかに確定。
- Why: 食 (食) は船母 (or 常母) 職韻 三等 入聲。BS2014 ver.1.1 では 食 "eat" は **`*m-lək`** (短く `m-`) として収載されているのが主版、`*mə-lək` (minor syllable `mə-`) は別バージョン/異記。本 column では `*mə-lək` が #13 issue #10 で「positive control（separator `.` vs `-` の規約遵守例）」として明示的に確認されたが、それは separator (loose `-` vs tight `.`) の用法確認に過ぎず、`mə` vs `m` の長短は別問題。round-2 として、worker は BS2014 ver.1.1 の食項目を再確認のうえ、短形 `*m-lək` が正本ならそれに合わせる、長形 `*mə-lək` が正本ならそのまま、と sourced 判断を出されたい。

### 14. 木 / 目 — `zh_han` (surface/ipa) — pre-initial `*C.` vs `*N-` の混在パターン確認
- Current: 木 `"*C.mˤok"`、目 `"*C.muk"`
- Expected: 両者とも `*C.` (uncertain consonantal pre-initial) で統一されており、BS2014 ver.1.1 と整合（**positive control: 修正不要**）。
- Why: 木 (明母 屋韻 一等 入聲) と 目 (明母 屋韻 三等 入聲) は OC で同じ `*C.m-` 構造を持ち、両者一貫している。これは #13 で個別言及されなかったが、column 全体監査として重要な正控対象。同じ `*C.` 系の貓 `*C.mˤraw`、耳 `*C.nəʔ`、日 `*C.nik` も一貫しており、`*C.` 規約は健全。**変更不要**。本 issue は規約遵守の確認用に明示的に positive control として記録する。

### 15. 月 — `zh_tang` → `zh_song` 介音 /y/ 適用条件の再検証 (#14 #15 の round-2 確認)
- Current: 月 `zh_tang` ipa `"ŋiuɐt̚"` → `zh_song` ipa `"ŋyat̚"` (Tang `iu` → Song `y` 円唇前舌化)
- Expected: 同じ合口三等の他文字（特に 中:1/中:2 `ʈuoŋ`→`ʈuŋ`、龍 `liuoŋ`→`liuŋ`、足 `tsiuɪk`→`tsiok`）は **/y/ 化していない** ため、月 のみが /y/ 化する条件根拠を明示するか、他文字も並行 /y/ 化させるか、いずれかの方針統一が必要。
- Why: #14 issue #15 で同じ問題が指摘され、worker は「攝/等/呼 条件を要する system-level 判断」として held。round-2 として再確認したが、live data に変化なし。`zh_song` の /y/ 介音は 月 (月韻 合口三等) と 水 (旨韻 合口三等)・血 (屑韻 合口四等) に適用される一方、中・龍・足 (通攝合口三等) には適用されていない。Pulleyblank LMC の通則は 「合口三等の前舌化 = /y/ 化」 だが本 file の適用は山攝・止攝に限定気味で、通攝が排除されている。これは sourced design decision が必要な system-level item として **再度 hold される見込み** だが、round-2 で再可視化する。

### 16. 中:1 平聲 vs 中:2 去聲 — 声調 template の整合性 (positive control)
- Current: 中:1 `zh_tang` surface `"ʈɨuŋ¹²³"` (平 ¹²³) / `zh_song` `"ʈuŋ¹³"` (平 ¹³); 中:2 `zh_tang` surface `"ʈɨuŋ⁵¹"` (去 ⁵¹) / `zh_song` `"ʈuŋ⁵¹"` (去 ⁵¹)
- Expected: 声調差（平/去）は正しく分化されており、template (平=¹²³/¹³, 去=⁵¹/⁵¹) に厳密準拠。**修正不要**。
- Why: 中 (知母 東韻 三等) の平/去 二読は 平=「中央」/ 去=「中(あた)る」 の意味分化で、本 file は正しく 中:1 (平) と 中:2 (去) を分けて声調 template を当てている。これは #14 で個別言及されていないが、column 横断監査としては「声調分化が機能している」という重要な正控。修正不要。なお issue #2 の介音不整合（`ɨuŋ` vs `uoŋ`）は両者に共通して残るため、声調 template と直交した問題として #2 で扱う。

### 17. 三 / 心 / 南 — `zh_han` 末尾 `-m` 鼻音 coda の整合性 (positive control)
- Current: 三 `"*s.rum"`、心 `"*səm"`、南 `"*nˤəm"`、飲 `"*q(r)[u]mʔ"`
- Expected: 四者とも `-m` で正しく統一。**修正不要**。
- Why: OC `-m` coda は MC で `-m` を保ち、近世になって `-n` に合流した（深攝・咸攝の `-m` → 現代 mandarin `-n`）。本 column の `zh_han` 段階では `-m` が忠実に保持されており、`zh_tang` でも sam/sim/nom/ʔim と `-m` が維持されている（issue #20 参照）。OC 段階の `-m` 表記は健全な positive control。

### 18. 北 — `zh_tang` → `zh_song` (ipa) 主母音 `o`→`ə` の連続性確認 (positive control)
- Current: 北 `zh_tang` ipa `"pok̚"` → `zh_song` ipa `"pək̚"`
- Expected: Tang→Song で 德韻一等 入聲の主母音が `o`→`ə` に推移するのは Pulleyblank LMC の通則に整合。**修正不要**。
- Why: 北 (幫母 德韻 一等 入聲, 博墨切) は曾攝開口一等。Pulleyblank EMC `pək` → LMC `pəkˇ` で、本 file は Tang `pok` / Song `pək` と微差で記述。**ただし方向は逆**（Tang→Song で `o`→`ə`）。EMC→LMC の標準は `ə`→`ə` 保持で、`o` 段階を経るのは Karlgren 系の 5 母音体系の名残。chronological direction として `pok`→`pək` (低→中) は妥当な単方向。修正不要だが、隣接する 南 (一等 `nom`→`nɑm`) との母音方向矛盾が残る（issue #19）。

### 19. 南 — `zh_tang` → `zh_song` (ipa) 主母音 `o`→`ɑ` の不自然な後舌低化
- Current: 南 `zh_tang` ipa `"nom˩˨˧"` → `zh_song` ipa `"nɑm˩˧"`
- Expected: Pulleyblank EMC 覃韻一等 = `nəm`/`nam`、LMC = `nam`。Tang `nom` (中後円唇) → Song `nɑm` (低後非円唇) は方向としては妥当（円唇→非円唇）だが、**EMC published form に `o` 段階が存在しない**ため、Tang `nom` 自体が再構として独自。
- Why: 南 は泥母 覃韻 一等 平聲。EMC 覃韻は published reconstructions では `əm`/`am` (Pulleyblank, Baxter) または `ậm` (Karlgren) で、`om` という後円唇形は採られない。本 file の Tang `nom` は前者の覃韻と後者の侯韻 (`ou`/`o`) を取り違えた可能性が疑われる。**Song `nɑm` は published LMC `nam` に近く正しい** ため、Tang を `nəm` または `nam` に修正する候補となる。これも system-level の決定だが、round-2 で再可視化。

### 20. 心 / 三 / 南 / 飲 — `zh_tang`/`zh_song` 末尾 `-m` 保持 (positive control)
- Current: 心 `zh_tang` `"sim¹²³"` / `zh_song` `"sim¹³"`、三 `"sam¹²³"`/`"sam¹³"`、南 `"nom¹²³"`/`"nɑm¹³"`、飲 `"ʔim²¹⁴"`/`"ʔim²⁴"`
- Expected: 全四者とも `-m` を保持。**修正不要**。
- Why: 中古音 `-m` coda は LMC まで保持され、近代以降に `-n` 合流。本 file の `zh_song` 段階で `-m` が崩れていないのは Pulleyblank LMC と整合し、`zh_tang` も当然 `-m`。一方 `zh` 現代列では同じ文字が `xīn`/`sān`/`nán`/`yǐn` と `-n`/`-Ø` で書かれているため、Tang/Song と現代の `-m`→`-n` 化を column 内で正しく可視化している。修正不要、positive control。

### 21. 一 / 七 / 八 / 十 / 日 / 月 / 木 / 目 / 足 / 肉 / 北 / 食 / 立 / 六 / 血 — `zh_tang`/`zh_song` (surface vs ipa) — 入聲 ◌̚ 規約の体系遵守 (positive control)
- Current: 全 15 入聲文字で **surface は ◌̚ なし、ipa は ◌̚ あり** が完全に守られている (例: 一 surface `ʔjit`/`ʔjit`、ipa `ʔjiɪt̚`/`ʔjit̚`)
- Expected: 規約遵守。**修正不要**。
- Why: 入聲は MC で `-p/-t/-k` の閉音節入り渡りを持ち、本 file は surface 側で末子音のみ書いて ̚ を省略、ipa 側で ̚ (unreleased) を明示するという 2 行使い分け規約を全 15 入聲セル × Tang/Song の **30 セルで完璧に遵守** している。これは file 全体の最も健全な箇所の一つで、修正不要だが、issue #1〜#10 の surface/ipa 介音不整合がある中で「ここだけは綺麗に揃っている」という対照を明示するため positive control として記録する。なお現代 `zh` 列で `-p/-t/-k` が完全消失している事実 (`yī`/`qī`/`bā`/`shí`/`rì`/`yuè`/`mù`/`mù`/`zú`/`ròu`/`běi`/`shí`/`lì`/`liù`/`xuè`) も column 横断で正しく可視化されている。

### 22. 来 — `zh_han` (surface/ipa) — pre-initial separator `.` (tight) vs `-` (loose) の使い分け確認 (positive control)
- Current: 来 `"*mə.rˤək"`、食 `"*mə-lək"`、十 `"*t.[g]əp"`、肉 `"*k.nuk"`、龍 `"*[mə]-roŋ"`、行:1 `"*Cə-[g]ˤraŋ"`、海 `"*m̥ˤəʔ"`、頭 `"*[m-t]ˤo"`
- Expected: 規約は **`mə.`/`mə-` の使い分けで一貫しているか要確認**。
- Why: BS2014 ver.1.1 では `mə-` (loose minor syllable) と `m.` (tight pre-initial) を区別する。来 `*mə.rˤək` は **`mə` (minor syllable) と `r` (main) を `.` で結合** という珍しい表記で、BS2014 published form でも実際に `mə.r-` のドット表記を採る (`mə-r-` ではない)。本 file はこれに正しく従っており、肉 `*k.nuk` (tight `k.`) や 食 `*mə-lək` (loose `mə-`) との separator 使い分けと整合する。**修正不要**、positive control。来 と 食 の separator 差は意図的で、BS2014 内部の loose/tight 区別を忠実に写している。

### 23. 立 — `zh_tang`/`zh_song` (surface=ipa) — 単純入聲セルの完全一致 (positive control)
- Current: 立 `zh_tang` surface `"lip"` / ipa `"lip̚"`; `zh_song` surface `"lip"` / ipa `"lip̚"`
- Expected: surface=ipa が末子音 ̚ 差を除いて完全一致。**修正不要**。
- Why: 立 (來母 緝韻 三等 入聲) は介音や複雑な音素を持たないシンプルな MC 音節 `lip` で、Tang/Song で音韻論的に変化しない。surface と ipa で末子音 ̚ 差以外完全一致、Tang→Song でも同形。**file 内で最も整然と整合した zh_tang/zh_song セルの 1 つ**で、issue #1〜#10 の混乱と対照される positive control。

### 24. 中:2 / 二 / 四 / 地 / 去 / 見 — `zh_tang`/`zh_song` (ipa) — 去聲 ⁵¹/˥˩ の完全統一 (positive control after #14 fix)
- Current: 中:2 `"ʈuoŋ˥˩"`/`"ʈuŋ˥˩"`、二 `"ɲiɪj˥˩"`/`"ɲi˥˩"`、四 `"siɪ˥˩"`/`"sz̩˥˩"`、地 `"diɪ˥˩"`/`"di˥˩"`、去 `"kʰiɔ˥˩"`/`"kʰy˥˩"`、見 `"ken˥˩"`/`"kien˥˩"`
- Expected: 全 6 去聲文字で `˥˩` (Tang/Song 共通) が完全統一。**修正不要**。
- Why: #14 issue #1 で四 `zh_song` の `˥` (broken) → `˥˩` (正) が round-1 で修正済み。round-2 で再確認した結果、Tang/Song 両層の去聲 ipa は全 6 文字で `˥˩` template に完全準拠している。surface 側 (⁵¹) も同様。これは round-1 の単一文字修正が column 全体の整合性を回復させた典型例で、positive control として記録する。

### 25. 上 — `zh_han` `*daŋʔ-s` の位置名詞「up/above」読み (positive control after #13 hold)
- Current: 上 `zh_han` (surface/ipa) `"*daŋʔ-s"`
- Expected: BS2014 ver.1.1 の去聲名詞読み `0726a 上 dzyangH *daŋʔ-s top, above (n.)` に厳密一致。**修正不要**。
- Why: #13 issue #4 で「`*-ʔ` と `*-s` の共起は不可」とした reviewer 主張が、round-1 worker の sourced 反論 (BS2014 内部で `-ʔ` 基体に `-s` を重ねる derivational stacking が存在) で却下され、HELD として現状維持されたもの。round-2 として BS2014 ver.1.1 の published form を再確認した結果、本 Hanmap の gloss「上 (up/above, 位置名詞)」は確かに `*daŋʔ-s` (去聲名詞読み) に対応し、**現状の表記は BS2014 ver.1.1 と完全一致**。positive control として明示する。

---

## Summary of systematic issues

本 round-2 で検出された問題は、大きく **3 系統** に分類される：

### A. surface/ipa **介音表記の二重体系** (Karlgren-Li 系 vs Pulleyblank 系) — issues #1, #2, #3, #4, #5, #6
これが round-2 で見つかった最大の系統的問題。surface 側は `ɨ`/`j`/`i` で三等介音を書き、ipa 側は `iu`/`iɪ`/`iɐ` で書く、という **2 つの転写体系が混在**している。同一セル内で介音表記が違うのは音韻論的に成立せず、column の信頼性を損ねる。一/二/七/耳 (止攝・真攝)、中:1/中:2 (通攝)、龍 (通攝)、央/羊 (陽韻)、五 (模韻)、手/足 (流攝/通攝) の 11 文字で確認。**全件 surface 側を ipa 側に追従させる修正で解消可能**で、特定の音韻論的判断を要しない（既に round-1 worker が #14 issue #8 で初頭子音について実施した処理を、介音にも拡張するだけ）。

### B. surface/ipa **初頭子音または coda の単一セル内不一致** — issues #7, #8, #9, #10
食 (Tang surface `ʑ` vs ipa `dʑ`, 船/常母 表記割れ)、山 (Tang `ʃ` vs `ɕ`, 莊組 vs 章組 表記割れ)、行:2 (Tang `ɣ` vs `ɦ`, 匣母表記割れ)、海/来/西 (Tang coda `j` vs `ɪ`/`i`)。**4 文字 (山/食/行:2) は声母の音韻クラスを別物に分類してしまっており**、3 文字 (海/来/西) は coda 表記の二重化。いずれも単一セル内の矛盾で、修正方向は明確 (ipa 側に追従、ただし山は surface `ʃ` 側が正)。

### C. **`zh_han` BS2014 整合性** の追加検出 — issues #11, #12, #13
火 の `ˤ` 欠落 (type-A 一等にもかかわらず) は #13 が見落とした明確な BS2014 違反。三 の `*s.rum` の `ˤ` 配置 (来 `*mə.rˤək` との並行)、食 の pre-initial 長短 (`*mə-` vs `*m-`) は worker が出典確認の上で sourced 判断を出すべき項目。

その他、issues #14〜#25 は **positive controls**（規約遵守の正例）として column 横断監査の健全部分を明示的に記録し、round-1 で fix 済みの箇所 (#24 四去聲修正、#25 上 BS2014 確認) も再確認した。

**Round-2 で焦点となる actionable 修正：**

| 優先 | issue | 文字 | 修正方針 |
|---|---|---|---|
| 高 | #1 | 一/二/七/耳 (zh_tang) | surface 介音を ipa の `iɪ`/`iɪj` に統一 |
| 高 | #2 | 中:1/中:2 (zh_tang) | surface `ɨuŋ` → ipa `uoŋ` |
| 高 | #3 | 龍 (zh_tang) | surface `lɨoŋ` → ipa `liuoŋ` |
| 高 | #4 | 央/羊 (zh_tang) | surface `ja`/`ɨa` → ipa `iɐ` |
| 中 | #5 | 五 (zh_tang) | surface `ŋu` → ipa `ŋuo` |
| 高 | #6 | 手/足 (zh_tang) | surface `ɨ` → ipa `iu`、足 主母音も `o`→`uɪ` |
| 高 | #7 | 食 (zh_tang) | 初頭子音 `ʑ` vs `dʑ` を統一 |
| 高 | #8 | 山 (zh_tang) | ipa `ɕ` → surface `ʃ`／`ʂ` |
| 高 | #9 | 行:2 (zh_tang) | 初頭子音 `ɣ` vs `ɦ` を統一 |
| 中 | #10 | 海/来/西 (zh_tang) | coda `j` vs `ɪ`/`i` を統一; 来は主母音も |
| 高 | #11 | 火 (zh_han) | `*qʷʰəjʔ` → `*[qʷʰ]ˤəjʔ` (type-A `ˤ` 復元) |
| 中 | #12 | 三 (zh_han) | BS2014 ver.1.1 で `*s.rˤum` vs `*s.rum` を確認 |
| 中 | #13 | 食 (zh_han) | BS2014 ver.1.1 で `*m-lək` vs `*mə-lək` を確認 |

system-level 議論 (#15 月の /y/ 介音条件、#19 南の `o`→`ɑ` 推移) は再度 hold される見込みだが、round-2 として可視化する。

---

**File path:** `/home/jounlai/langmap/hanmap_reviews/47_open.md`
**Finding count:** 25 findings (13 actionable + 11 positive controls/規約遵守確認 + 1 documented re-hold)


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 18
- **policy/skip**: 10
- **headline**: zh_tang 介音 iɪ/uo/iuo/iɐ Pulleyblank alignment ×15 (一/二/七/耳/中:1/2/龍/央/羊/五/手/足/食/行:2), 火 zh_han ˤ ×2, 山 ipa ɕ→ʃ
- **JSON path**: /tmp/hm_edits_47.json
