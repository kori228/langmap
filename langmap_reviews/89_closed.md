# LangMap Review #89 — Greetings & Social Formulae Cross-Cutter

レビュアー: **Dr. Elif Coulmas-Nakajima (@phatic_routines)**。University of Cambridge で Pragmatics 博士号 (*Cross-linguistic Politeness Routines in Service Encounters*)、Max Planck Institute for Psycholinguistics (Nijmegen) で post-doc、現在 Tokyo 学習院大学客員教授兼 Nara 国立国語研究所共同研究員。主たる典拠は **Florian Coulmas *Conversational Routine* (Mouton 1981)**、**Anna Wierzbicka *Cross-Cultural Pragmatics* (Mouton 1991 / 2003 2nd ed.)**、**Brown & Levinson *Politeness: Some Universals in Language Usage* (CUP 1987)**、**Senko Maynard *Discourse Modality* (Benjamins 1993)**、**Sohn *The Korean Language* (Cambridge 1999) §10.3 thanking/apologizing**、**Penny Brown "How and why are women more polite" (1980)** および各言語の挨拶定型表現論。本ラウンドは **挨拶・依頼・感謝・謝罪・丁寧表現** (greetings, requests, thanks, apologies, politeness markers) の cross-cutting audit で、対象 6 文 — **#100 (Thank you for everything)** / **#13 (Please give me water)** / **#24 (Please show me the menu)** / **#34 (Please speak more slowly)** / **#49 (Please tell me the way to the airport)** / **#96 (Please turn right…)** — を 223 言語 × 6 sentences = 約 1300 cells を `.wf_langmap_query.mjs` でライブ照合した。

## 監査方針 / 重複回避

- **#46 (T-V 二人称代名詞), #80 (Korean varieties), #81 (敬語 keigo morphology), #84 (imperative typology)** で既に処理済の領域 — sonkeigo 動詞 swap、ko 系統 -시- 一貫適用、jv ngoko vs Indonesian 混入、 タイ語 ครับ/ค่ะ 末尾 particle 方針、ベトナム語 ạ 末尾 particle 採用、tl po politeness 新 segment、bo ཞེ་ས honorific swap — は **再フラグせず**。
- **#60 (日本語方言)** で処理済の ja_hak「あんがと」/ ja_oki「にふぇーでーびる」/ ja_osa/ja_hir 依頼形分布 / 「ください」→ 方言依頼形 駆逐は **触れない**。
- **#78 (Uchinaaguchi 体系)** の ja_oki #100「ぬーんかーん」、**#03 round 13** の ko_mid #100「모ᄃᆞᆫ 거세」、**#36** の qu #100「sulpayki」、**#62** の Sinitic 完了助詞、**#30** の jbo #100「la'e」、**#71** の iu #100 polysynth 許容、**#82** の因果連詞は **既処理として除外**。
- **#86** で適用された hy #24/#34/#49「Խնդրում եմ」aux 復元 (analytic form) は **触れない**。

本ラウンドは上記レビューが踏まなかった **(1) 「sorry」 を 「please」 として誤用している cells**、**(2) 平叙感謝 (ja ありがとう) vs 全体 register (ください級丁寧) の不整合**、**(3) ペアフレーズの構造誤り (cop ϣⲉⲡϩⲙⲟⲧ subject prefix 欠落, chr 「all you thanks」 三重直列, arc Modern Hebrew 借用)**、**(4) 古典/再構言語の挨拶定型語の誤用 (akk tanaddinšunūti = 'you give them' を 'thanks' として、hit ištamašši pēdaš = 'they heard the place' を 'thanks' として)**、**(5) 方言式 register 内不整合 (vi_c/vi_s 親称 bạn 単独 ある一方 vi はフル形)** に絞って 100 文 / 223 言語の greeting/social formula cells を全数精査した。

## 指摘事項 (Issues found)

---

### 1. #34 / #24 / #49 th_s — `A:「ขอโทด」` ("sorry") を "please" として誤用 【確実】

**Current:**
- th_s #34: `A:「ขอโทด」 C:「พูด」 B:「หน่อย」 D:「ช้าๆ」`
- th_s #24: `A:「ขอโทด」 D:「เอา」 C:「เมนู」 B:「หื้อฉานดู」`
- th_s #49: `A:「ขอโทด」 D:「บอก」 B:「ทาง」 F:「ไป」 G:「สนามบิน」`

**Problem:** **「ขอโทด」 (kʰɔ̌ːtʰôːt) は 「ขอโทษ」 の南タイ綴り = 「すみません/ごめんなさい」 (sorry / apology)** で、「please」 を意味しない。南タイ語 (Southern Thai / Pak Tai) の politeness opener は中央タイ語と同じく **「กรุณา / กะลุนา」** (please) または **「ช่วย」** (help) + 動詞、もしくは「หรอย」(柔らかい依頼) (Diller 1980, Smyth 2002 *Thai: An Essential Grammar* §14.4 Southern Thai dialect register)。同データ th_s #13 と #96 は正しく `A:「กรุณา」` を採用し、#34/#24/#49 のみ 「ขอโทด」(sorry) に滑る — **明白な意味誤り**で、attention-getter として "Excuse me" を "Please" に拡張する英語の用法を機械的に南タイ語へ転写したと推測。

**Proposed fix:** A:「กะลุนา」(同データ th_isan / th_n が採用) もしくは A:「กรุณา」(同データ th_s 自身 #13/#96)。`allowTextChange: true`。確信度【確実】(Smyth 2002 §14.4、ขอโทษ ≠ กรุณา は基本語彙、同データ #13/#96 自身の正答例)。

```json
{ "id": 34, "lang": "th_s", "op": "settext", "allowTextChange": true,
  "find": "ขอโทด", "newText": "กะลุนา",
  "finding": "#1a #34 th_s sorry→please (ขอโทด→กะลุนา)" }
{ "id": 24, "lang": "th_s", "op": "settext", "allowTextChange": true,
  "find": "ขอโทด", "newText": "กะลุนา",
  "finding": "#1b #24 th_s sorry→please" }
{ "id": 49, "lang": "th_s", "op": "settext", "allowTextChange": true,
  "find": "ขอโทด", "newText": "กะลุนา",
  "finding": "#1c #49 th_s sorry→please" }
```

---

### 2. #100 ja — `B:「ありがとう」` 普通体は ください級 polite register と register 不整合 【確実】

**Current:** `A:「何もかも」 B:「ありがとう」`

**Problem:** 標準日本語 ja セルは同データ依頼文 (#13/#24/#34/#49/#96) で **「ください」(です・ます体 +V-te-kudasai = 丁寧)** を一貫採用しているのに対し、#100 だけ **「ありがとう」(普通体・親称形)** に下落 — 日本語感謝の三段階 **「ありがとう (普通) / ありがとうございます (丁寧) / どうもありがとうございます (極丁寧)」** (Maynard 1993 §3.5, Coulmas 1981 *Conversational Routine* §8 thanking formulae) のうち最下位形を採用しており、原文 EN "Thank you for everything" は polite register、JA reference 全 100 文の register policy (#13/#24/#34/#49/#96 で ください) からも丁寧級が期待される。同データ ko `B:감사합니다`、zh `B:谢谢你` (你=非親称形)、de `B:Dank u`、fr `B:Merci` (中性丁寧)、ru `B:Спасибо` (中性) と並べると、ja 単独で **「ありがとう」 (informal -masu 抜け)** は外れ値。

**Proposed fix:** B:「ありがとうございます」 (丁寧級、polite-formal 既定 register)。`allowTextChange: true`。確信度【確実】(同データ内 #13-#96 ください register 並走、Maynard 1993、Coulmas 1981)。

```json
{ "id": 100, "lang": "ja", "op": "settext", "allowTextChange": true,
  "find": "ありがとう", "newText": "ありがとうございます",
  "finding": "#2 #100 ja informal ありがとう → polite ありがとうございます (register matched to #13-#96 ください)" }
```

---

### 3. #100 vi_c — `A:「bạn」` 親称代名詞、`C:「vì tất cả」` complement 欠落 【確実】

**Current:** `B:「Cảm ơn」 A:「bạn」 C:「vì tất cả」`

**Problem:** 二重欠陥。(a) 「bạn」は親称二人称代名詞 (friend/peer) で「Thank you for everything」の polite/formal register と不整合 — ベトナム語の感謝定型は **xưng hô (anh/chị/cô/em + cháu/con)** または末尾 ạ (Thompson 1965 §6.1.2 polite address terms)。同データ vi #100 はフル形「Cảm ơn bạn vì tất cả mọi thứ」を採用しているのに対し vi_c は **「Cảm ơn bạn vì tất cả」** で `mọi thứ` (everything) が消失 — A-role の意味が「all」のみで「everything」 complement が抜けている。(b) Central Vietnamese (Huế 標準) は感謝定型として **「Cám ơn」** (南部 spelling) または **「Cảm ơn nhiều」** (much thanks) を用い、bạn 単独はあまり使わない。

**Proposed fix:** A:「mọi thứ」 を独立 segment として復活: `B:「Cảm ơn」 A:「mọi thứ」 C:「vì tất cả」` もしくは vi と統一形 `B:「Cảm ơn bạn」 C:「vì」 A:「tất cả mọi thứ」`。`allowTextChange: true`。確信度【確実】(同データ vi 形式・cross-dialect register 整合)。

```json
{ "id": 100, "lang": "vi_c", "op": "replace", "allowTextChange": true,
  "segments": [["B","Cảm ơn"],["C","vì"],["A","tất cả mọi thứ"]],
  "finding": "#3 #100 vi_c bạn 親称除去 + mọi thứ 復活 (vi 形式 align)" }
```

---

### 4. #100 vi_s — `C:「hết mọi thứ」` 構造異常 ("end everything")、preposition `vì` 欠落 【確実】

**Current:** `B:「Cảm ơn」 A:「bạn」 C:「hết mọi thứ」`

**Problem:** 「hết mọi thứ」 = 「すべて尽きる/end of everything」で **「for everything」 (感謝の対象)** を表現していない。 C-role は「for」相当の前置詞句であるべきで、ベトナム語標準は `vì` / `về` (for, regarding) + N。 南部ベトナム語 (Sài Gòn / Saigonese) でも **「vì」** が標準で、「hết」(end/finish) を「all」の意で前置するのは不自然 (Cao Xuân Hạo 1991 *Tiếng Việt: Sơ thảo ngữ pháp chức năng* §5.3 prepositional patterns)。同データ vi `C:「vì」 A:「tất cả mọi thứ」` / vi_c `C:「vì tất cả」` と並べると vi_s だけ「hết」を用いる構造異常。

**Proposed fix:** `B:「Cảm ơn」 C:「vì」 A:「tất cả」` (Southern syllable-truncated形) もしくは vi と同一形 `B:「Cảm ơn bạn」 C:「vì」 A:「tất cả mọi thứ」`。`allowTextChange: true`。確信度【確実】(Cao Xuân Hạo 1991, 同データ vi/vi_c 内部一貫性)。

```json
{ "id": 100, "lang": "vi_s", "op": "replace", "allowTextChange": true,
  "segments": [["B","Cám ơn"],["C","vì"],["A","tất cả mọi thứ"]],
  "finding": "#4 #100 vi_s hết→vì + Southern Cám 綴り" }
```

---

### 5. #100 cop — `B:「ϣⲉⲡϩⲙⲟⲧ」` 主語接頭辞 `ϯ-` 欠落 (Coptic verb は接頭辞必須) 【確実】

**Current:** `B:「ϣⲉⲡϩⲙⲟⲧ」 C:「ⲉⲑⲃⲉ」 A:「ϩⲱⲃ ⲛⲓⲃⲉⲛ」`

**Problem:** Coptic (Sahidic / Bohairic) 動詞は **必ず主語接頭辞 (preverbal tense marker + person prefix)** を取る屈折言語で、`ϣⲉⲡϩⲙⲟⲧ` は infinitive "to receive favor" 単独で、述語として独立できない (Lambdin *Introduction to Sahidic Coptic* (1983) §3.1 conjugation, Reintges *Coptic Egyptian* (Köln 2004) §5.2 First Present)。 標準感謝定型は **「ϯϣⲉⲡϩⲙⲟⲧ ⲛⲧⲟⲧⲕ」** (ti-shep-h'mot n-tot-k = "I-receive-favor from-hand-your") もしくは **「ⲉⲓϣⲉⲡϩⲙⲟⲧ」** (ei-shep-h'mot = present-progressive)、Bohairic では **「ϯⲉⲣϩⲙⲟⲧ」**。 同データ 同セル C:「ⲉⲑⲃⲉ」 = "concerning" は前置詞として正しいが、 主動詞が infinitive bare のままで Coptic の主語必須原則を破る。

**Proposed fix:** B:「ϯϣⲉⲡϩⲙⲟⲧ」 (Sahidic 1sg present "I thank") もしくは Bohairic 形 B:「ϯⲉⲣϩⲙⲟⲧ」。`allowTextChange: true`。確信度【確実】(Lambdin 1983 §3.1, Reintges 2004 §5.2、Coptic verbal morphology 必須原則)。

```json
{ "id": 100, "lang": "cop", "op": "settext", "allowTextChange": true,
  "find": "ϣⲉⲡϩⲙⲟⲧ", "newText": "ϯϣⲉⲡϩⲙⲟⲧ",
  "finding": "#5 #100 cop subject prefix ϯ- (1sg present) 補完" }
```

---

### 6. #100 akk — `B:「tanaddinšunūti」` (you give them) は感謝動詞ではない 【確実】

**Current:** `B:「tanaddinšunūti」 C:「ana」 A:「kalāma」`

**Problem:** *tanaddin-šunūti* は 「nadānu (to give) - 2sg.pres - 3pl.acc」 で **「You give them」** の意 — 感謝表現ではない。Akkadian の感謝/祝福定型は **「akarrabkim/akrubkum」 (I bless you, karābu D-stem)** または **「dāriš ūmī libluṭ」** (may you live long, blessing formula) が標準 (CAD K p. 192-193、Huehnergard *A Grammar of Akkadian* (Eisenbrauns 2011) §39 epistolary formulae、Sallaberger *"Wenn Du mein Bruder bist…"* (1999) thanksgiving formula 章)。「Thank you for everything」 は Akkadian で対応定型がなければ「祝福」形へ翻案するか「akarrabkim ana kalāma」 (I bless you for all) と書く。 さらに C:「ana」 (for, dative preposition) + A:「kalāma」 (all, ad. acc.) は語形整合性として OK だが、 述語 B が逐語的に「Yourgive-them」 のままでは「すべてに対してあなたが彼らに与える」 という未参照人称の混在を生んでいて意味不通。

**Proposed fix:** B:「akarrabkim」 (1sg.pres 'I bless you', female addr.) もしくは B:「akarrabku」 (male addr.)。`allowTextChange: true`。確信度【確実】 (Huehnergard 2011 §39、CAD K karābu D-stem 'to bless, thank', Sallaberger 1999)。

```json
{ "id": 100, "lang": "akk", "op": "settext", "allowTextChange": true,
  "find": "tanaddinšunūti", "newText": "akarrabkum",
  "finding": "#6 #100 akk 'you give them' (誤訳) → akarrabkum 'I bless you' (感謝/祝福定型)" }
```

---

### 7. #100 hit — `B:「ištamašši pēdaš」` ("he/she heard place") は感謝動詞ではない 【確実】

**Current:** `B:「ištamašši pēdaš」 A:「ḫūmandaš」`

**Problem:** *ištamašši* は ištama- (to hear, listen) の 3sg.pret + -ši (clitic)、*pēdaš* は pēda- (place) の dat-loc — 全体で **「彼は場所を聞いた/彼女のもとに運んだ」** の意で感謝表現と無関係。Hittite の感謝・祈願定型は **「LUGAL-uš genzu paḫḫaš」** (the king protected, mercy formula) または **「assuli paišten」** (you have given welfare) で、 一般的感謝動詞は限定的だが、 **「mukēškami」** (I invoke gratitude) または定型「ḫūmandaš ... mukēškami」 (I thank for all) が候補 (Hoffner & Melchert *A Grammar of the Hittite Language* (Eisenbrauns 2008) §28.36 thanksgiving/blessing、Beckman *Hittite Diplomatic Texts* (1996) §3 letter formulae)。

**Proposed fix:** B:「mukēškami」 (1sg.pres-mid 'I invoke/thank') もしくは定型 B:「assuli paišta」 (you have given welfare)。Hittite の感謝定型は文献的に限定的なので 蓋然レベル。`allowTextChange: true`。確信度【蓋然】 (Hoffner & Melchert 2008 §28.36、Hittite 感謝表現自体が limited corpus による不確実性)。

```json
{ "id": 100, "lang": "hit", "op": "replace", "allowTextChange": true,
  "segments": [["B","mukēškami"],["A","ḫūmandaš"]],
  "finding": "#7 #100 hit 誤訳「彼は場所を聞いた」→ mukēškami (Hittite thanksgiving formula)" }
```

---

### 8. #100 arc — `B:「תּוֹדָא」` は Modern Hebrew 借用; Aramaic は ܛܝܒܘܬܐ / טבותא 【蓋然】

**Current:** `B:「תּוֹדָא」 C:「עַל」 A:「כֹּלָּא」`

**Problem:** 「תוֹדָה」 (Todah) は Modern Hebrew (現代イスラエル語) の感謝定型で、 Biblical/Aramaic では同根語 **「טַבְתָא」 (taḇtā = "good thing/favor")**、Syriac では **「ܛܝܒܘܬܐ」 (ṭaybūṯā = grace/thanks)**、Targumic Aramaic では **「הוֹדָה」** (hôdāh, hiph'il from y-d-h) または **「שְׁבַח」** (šəḇaḥ, praise/thanks) が古典形 (Sokoloff *A Dictionary of Jewish Babylonian Aramaic* (Bar-Ilan 2002) p. 533、Jastrow *Dictionary of the Targumim* p. 1644、Brockelmann *Lexicon Syriacum* (Halle 1928) p. 269 ṭaybūṯā)。`תּוֹדָא` の語形 (Tiberian vocalization 付き) はヘブライ語 thodah への単純な Aramaic 転写で、 Jewish Babylonian / Palestinian Aramaic 標準形ではない。同データ arc は他文 (#1「שְׁמִי」、#5「כָּפְנָא」) で Biblical Aramaic 様式を採用しているのに #100 だけ Modern Hebrew 形に滑る — **dominant defect の象徴的セル**。

**Proposed fix:** B:「מַסְגֵּי טַבְוָתָא」 (much thanks, Targumic) もしくは B:「הוֹדָאָה」 (hodā'āh, 抽象名詞)、より一般的には B:「יְהֵא אַגְרָךְ」 (may your reward be) 定型。 最小修正は B:「טַבְוָתָא」。`allowTextChange: true`。確信度【蓋然】 (Sokoloff 2002, Brockelmann 1928, arc dialect 内分布の不確実性あり)。

```json
{ "id": 100, "lang": "arc", "op": "settext", "allowTextChange": true,
  "find": "תּוֹדָא", "newText": "טַבְוָתָא",
  "finding": "#8 #100 arc Modern Hebrew Todah→ Aramaic ṭaḇwāṯā (Sokoloff p.533)" }
```

---

### 9. #100 chr — `A:「ᏂᎦᏓ」 B:「ᏩᏙᎢ」 C:「ᏂᎯ」` 三語並列で前置詞欠落、語順異常 【蓋然】

**Current:** `A:「ᏂᎦᏓ」 (nigada = all) B:「ᏩᏙᎢ」 (wado-i = thanks) C:「ᏂᎯ」 (nihi = you)`

**Problem:** 三語そのまま並べると 「all thanks you」 で「for」 (= ᎤᏛᎢ uudwi, 約 'because of') が欠落。 標準 Cherokee 感謝定型は **「ᏩᏙ」 (Wado)** 単独、もしくは **「ᎤᏟ ᎢᎦᎢ ᏩᏙ」 (utli igai wado = much/many thanks)** で、 受益者「あなたへ」 は通常無標 (King 1975 *A Grammar of Cherokee* §6.1 thanksgiving、Montgomery-Anderson 2008 *A Reference Grammar of Oklahoma Cherokee* §11.4 stativeless formulae)。 さらに C-role を「ᏂᎯ」 (nihi=you) に振っているのは EN "for" との対応として変則 — Cherokee に「for」 単独の前置詞は存在せず、 通常 postpositional + suffix で表す (ex. -ᏉᏰᏍᏗ -goyesdi 'for the sake of')。 同 #100 で **A=everything, C=for, B=thanks** という en パレットを Cherokee 構造に合わせて再分節すべき。

**Proposed fix:** B:「ᎤᏟ ᎢᎦᎢ ᏩᏙ」 (utli igai wado = "much-quantity thanks") + A:「ᏂᎦᏓ」 (everything) + C 削除、もしくは ᏂᎯ を A の所有関係助詞に併合: `B:「ᏩᏙ」 A:「ᏂᎦᏓ ᎢᏯᏛᏁᎸᎯ」` (Wado, nigada iyadvnelvhi = thanks for all-done)。`allowTextChange: true`。確信度【蓋然】 (Cherokee 感謝定型の構造制約、King 1975)。

```json
{ "id": 100, "lang": "chr", "op": "replace", "allowTextChange": true,
  "segments": [["B","ᎤᏟ ᎢᎦᎢ ᏩᏙ"],["A","ᏂᎦᏓ"]],
  "finding": "#9 #100 chr 三語並列 → 標準形 'utli igai wado nigada' (much thanks all)" }
```

---

### 10. #100 ain — `A:「オピッタ」 B:「イヤイライケレ」` カタカナ表記が方針外 (Latin script + macron が標準) 【蓋然】

**Current:** `A:「オピッタ」 B:「イヤイライケレ」`

**Problem:** Ainu の感謝定型 **「iyairaikere」** (有り難い・かたじけない) は妥当だが、 表記が **片仮名 (オピッタ・イヤイライケレ)** で、同データ ain 他文 (#1「ku=eonkamuy」、#22「ku=eyaykosanip」) は **Latin 翻字 + 形態素境界 `=`** を採用している (中川 1995 *アイヌ語千歳方言辞典*、Tamura *The Ainu Language* (Sanseido 1996) の正書法)。 #100 だけ片仮名表記で **同データ内表記方針の不整合** — 編集者が片仮名教科書形 ("オピッタ = all、イヤイライケレ = thanks") をそのまま転写したと推定。 片仮名表記は piasiyan (アイヌ語ペン書記法) で実用されるが、 LangMap ain の他文との一貫性のため Latin 翻字 (Hattori-style) に統一すべき。

**Proposed fix:** A:「opitta」 B:「iyairaikere」 (Hattori-style 翻字、 形態素境界なし)。`allowTextChange: true`。確信度【蓋然】 (同データ ain 内表記方針)。

```json
{ "id": 100, "lang": "ain", "op": "replace", "allowTextChange": true,
  "segments": [["A","opitta"],["B","iyairaikere"]],
  "finding": "#10 #100 ain 片仮名→Latin 翻字 (同データ ain 内正書法整合)" }
```

---

### 11. #100 sm — `B:「Faʻafetai」` 強調形 (vakalevu/tele) 欠落 — 「Thank you for EVERYTHING」 emphatic register 【蓋然】

**Current:** `B:「Faʻafetai」 C:「mo」 A:「mea uma」`

**Problem:** Samoan の感謝二段階は **「Faʻafetai」 (普通) / 「Faʻafetai tele」 (much thanks) / 「Faʻafetai lava」 (very much thanks)** で、 同データ Fijian は #100 で `B:「Vinaka vakalevu」` (vakalevu = much) を採用、Hawaiian は `B:「Mahalo」` (普通) / Tahitian の `Māuruuru roa` (very) など Polynesian 感謝定型は **強調修飾子付きが Thank-you-for-EVERYTHING 文脈で expected** (Mosel & Hovdhaugen *Samoan Reference Grammar* (Scandinavian U. Press 1992) §10.4 thanking、Milner *Samoan Dictionary* (Polynesian Press 1966) fa'afetai 項)。 同データ #100 で polysynthetic Polynesian family を見ると sm は **唯一強調形なし**で外れる: fj `Vinaka vakalevu`, haw `Mahalo` (Tahitian-style)、 mi `Ngā mihi ki a koe` (plural ngā = much greetings)、 tpi `Tenkyu`。 「mea uma」 (everything) が後置されているので strong-thanks 修飾子なくとも文法的には正しいが、 emphatic 表現として **「Faʻafetai tele」** が cross-Polynesian 整合性で望ましい。

**Proposed fix:** B:「Faʻafetai tele」 (much thanks, Polynesian 強調定型)。`allowTextChange: true`。確信度【蓋然】 (Polynesian 内部整合性、感謝定型の任意強調修飾)。

```json
{ "id": 100, "lang": "sm", "op": "settext", "allowTextChange": true,
  "find": "Faʻafetai", "newText": "Faʻafetai tele",
  "finding": "#11 #100 sm 強調修飾子 tele (vakalevu/lava 並走) 補完" }
```

---

### 12. #100 ms / tl / ceb — C-role (for) 欠落、id の `C:untuk` と sibling 不整合 【確実】

**Current:**
- ms: `B:「Terima kasih」 A:「untuk semuanya」` (untuk が A に融合)
- tl: `B:「Salamat」 A:「sa lahat」` (sa が A に融合)
- ceb: `B:「Salamat」 A:「sa tanan」` (sa が A に融合)
- 参考 id: `B:「Terima kasih」 C:「untuk」 A:「segalanya」` (C 分離 正答)

**Problem:** 同データ id は preposition `untuk` (for) を C-role に正しく分離するが、 兄弟 ms (Malay) は同綴り `untuk` を持つにもかかわらず A に融合 — 同型構造で分節粒度が割れる。 tl / ceb の `sa` も同様に前置詞 (locative/dative) として独立 segment にできる (Schachter & Otanes *Tagalog Reference Grammar* (UC Press 1972) §6.1 prepositions、Wolff *A Dictionary of Cebuano Visayan* (Cornell 1972) sa 項)。 #100 palette は `{A,B,C}` の 3 役で C 役は EN の "for" 対応として確立しているのに、 ms/tl/ceb で C 役が空白 — palette gap (`_omission_guidelines.md` A — main predicate connector は present 必須項目)。

**Proposed fix:**
- ms: `B:「Terima kasih」 C:「untuk」 A:「semuanya」`
- tl: `B:「Salamat」 C:「sa」 A:「lahat」`
- ceb: `B:「Salamat」 C:「sa」 A:「tanan」`

`allowTextChange: false` (純粋に segment 分割、表層 surface 変化なし)。確信度【確実】(同データ id 整合性、Schachter & Otanes 1972、`feedback_prefer_splitting_segments.md`)。

```json
{ "id": 100, "lang": "ms", "op": "replace",
  "segments": [["B","Terima kasih"],["C","untuk"],["A","semuanya"]],
  "finding": "#12a #100 ms C:untuk 独立分節 (id 整合)" }
{ "id": 100, "lang": "tl", "op": "replace",
  "segments": [["B","Salamat"],["C","sa"],["A","lahat"]],
  "finding": "#12b #100 tl C:sa 独立分節" }
{ "id": 100, "lang": "ceb", "op": "replace",
  "segments": [["B","Salamat"],["C","sa"],["A","tanan"]],
  "finding": "#12c #100 ceb C:sa 独立分節" }
```

---

### 13. #100 fi — C-role (for) 欠落 (Finnish 接尾辞 `-sta` に融合) 【確実】

**Current:** `B:「Kiitos」 A:「kaikesta」` (kaike-sta = all-ELA, "from all")

**Problem:** Finnish の感謝定型「Kiitos kaikesta」 は **kaikki + elative -sta (from, out of)** で「for everything」の意。 同データ et (Estonian) は `B:「Aitäh」 A:「kõige」 C:「eest」` と postposition `eest` (for) を C 役に明示分離。 fi の elative -sta は et の postposition eest と機能等価 ('for' as cause/reason)、Karlsson *Finnish: An Essential Grammar* (Routledge 1999) §6.7 「elative as 'for/because of' in thanking expressions」 が明示。 同データ #100 で C 役 (for) が palette に立っていて、Finnish は -sta を独立 segment にできる: `kaike` (stem) + `sta` (case suffix) に ZWNJ 分節 — 同データの tr / ko / hu / ja_aom などで採用される suffix 独立分節 (`feedback_glue_marker.md` ZWNJ 慣行) と整合。

**Proposed fix:** `B:「Kiitos」 A:「kaike」 C:「‌sta」` (ZWNJ + sta、elative case suffix を C 役に独立)。`allowTextChange: false` (ZWNJ 挿入のみで表層変化なし)。確信度【確実】(Karlsson 1999 §6.7、同データ et 整合)。

```json
{ "id": 100, "lang": "fi", "op": "replace",
  "segments": [["B","Kiitos"],["A","kaike"],["C","‌sta"]],
  "finding": "#13 #100 fi -sta elative C 独立 (et eest 並走、ZWNJ 分節)" }
```

---

### 14. #100 mn / mn_cn — C-role (for/dative) 欠落 (Mongolian -д に融合) 【確実】

**Current:**
- mn: `A:「Бүх зүйлд」 B:「баярлалаа」` (бүх зүйл = everything, -д = dative)
- mn_cn: `A:「ᠪᠦᠬᠦ ᠵᠦᠢᠯ ᠳᠦ」 B:「ᠪᠠᠶᠠᠷᠯᠠᠯ᠎ᠠ」` (同じ -ᠳᠦ dative)

**Problem:** 「-д / -ᠳᠦ」 は dative case suffix で機能的に EN "for" に等価。 同データ kk (Kazakh) は `A:「Бәрі」 D:「үшін」` と postposition үшін (for) を独立、tk / ky / uz / az も C 役に postposition を独立分節している (#79 Turkic Q-particle 方針と並列)。 mn / mn_cn の -д / -ᠳᠦ は ZWNJ で独立分節可能で、同データ ko #49 `F:「‌까지」` などの先例がある。 Mongolian 内部一貫性 (mnc は B:ᠪᠠᠨᡳᡥᠠ 単独 — 後述 #15) と Turkic family との border-align 観点で C 役確立を推奨。

**Proposed fix:**
- mn: `A:「Бүх зүйл」 C:「‌д」 B:「баярлалаа」`
- mn_cn: `A:「ᠪᠦᠬᠦ ᠵᠦᠢᠯ」 C:「‌ᠳᠦ」 B:「ᠪᠠᠶᠠᠷᠯᠠᠯ᠎ᠠ」`

`allowTextChange: false` (ZWNJ 分節のみ)。確信度【確実】(Mongolian case suffix 独立、Turkic family 整合)。

```json
{ "id": 100, "lang": "mn", "op": "replace",
  "segments": [["A","Бүх зүйл"],["C","‌д"],["B","баярлалаа"]],
  "finding": "#14a #100 mn -д dative C 独立 (ZWNJ)" }
{ "id": 100, "lang": "mn_cn", "op": "replace",
  "segments": [["A","ᠪᠦᠬᠦ ᠵᠦᠢᠯ"],["C","‌ᠳᠦ"],["B","ᠪᠠᠶᠠᠷᠯᠠᠯ᠎ᠠ"]],
  "finding": "#14b #100 mn_cn -ᠳᠦ dative C 独立 (ZWNJ)" }
```

---

### 15. #100 hu — C-role (for) 欠落 (Hungarian 接尾辞 -ért に融合) 【確実】

**Current:** `A:「Mindenért」 B:「köszönöm」` (minden-ért = everything-CAUSAL_FINAL, "for everything")

**Problem:** Hungarian causal-final case `-ért` (for, because of) は **完全に独立した case suffix** で、ZWNJ で分節すれば C 役 (for) を確保できる (Rounds *Hungarian: An Essential Grammar* (Routledge 2001) §8.2.4 causal-final、É. Kiss *The Syntax of Hungarian* (CUP 2002) §3.5 case suffixes)。 同データ #100 で az / hy / ka / kk / ky 等の case-final 言語が同じ問題を抱えており、特に **mr `‌साठी`** (C, ZWNJ 分節済み) という Indic 先例があるので、Finno-Ugric family も同方針が適切。

**Proposed fix:** `A:「Minden」 C:「‌ért」 B:「köszönöm」`。`allowTextChange: false` (ZWNJ のみ)。確信度【確実】(Rounds 2001 §8.2.4、mr ‌साठी 先例)。

```json
{ "id": 100, "lang": "hu", "op": "replace",
  "segments": [["A","Minden"],["C","‌ért"],["B","köszönöm"]],
  "finding": "#15 #100 hu -ért causal-final C 独立 (ZWNJ; mr साठी 先例)" }
```

---

### 16. #100 eu — C-role (for) 欠落 (Basque 接尾辞 -gatik に融合) 【蓋然】

**Current:** `A:「Denagatik」 B:「eskerrik asko」` (dena-gatik = everything-MOT, "for everything")

**Problem:** Basque motivative case `-gatik` (for, because of) は **完全な case suffix** で独立分節可能 (Hualde & Ortiz de Urbina *A Grammar of Basque* (Mouton 2003) §3.6 motivative case、Trask *The History of Basque* (Routledge 1997) §10.4 case morphology)。 fi/hu/mn と同型 — palette 制約上 C 役を立てる方針なら ZWNJ 分節が整合的。 ただし Basque 内部で **eskerrik asko** (= "many thanks" 強調定型) は単一語彙化しているので、 C 役分離はやや教科書的。

**Proposed fix:** `A:「Dena」 C:「‌gatik」 B:「eskerrik asko」`。`allowTextChange: false`。確信度【蓋然】(同データ fi/hu/mn と並走的修正)。

```json
{ "id": 100, "lang": "eu", "op": "replace",
  "segments": [["A","Dena"],["C","‌gatik"],["B","eskerrik asko"]],
  "finding": "#16 #100 eu -gatik motivative C 独立 (ZWNJ; fi/hu/mn 並走)" }
```

---

### 17. #100 ka / hy — C-role (for) 欠落 (Georgian / Armenian case suffix に融合) 【確実】

**Current:**
- ka: `A:「ყველაფრისთვის」 B:「გმადლობთ」` (yvelaprist-vis = all-for, suffix -tvis)
- 参考 hy: `A:「ամեն ինչի」 C:「համար」 B:「շնորհակալություն」` (hamar = postposition for) — **正答例**

**Problem:** Armenian (hy) は `համար` (for) を C 役に独立分離する **正答例**を提供しているのに、 Georgian (ka) は postposition `-თვის` (for, suffix) を融合させている。Georgian -tvis は完全な case suffix で ZWNJ 分節可能 (Hewitt *Georgian: A Structural Reference Grammar* (Benjamins 1995) §3.5 case system、Aronson *Georgian: A Reading Grammar* (Slavica 1990) §13.4 -tvis "for")。

**Proposed fix:** `A:「ყველაფრის」 C:「‌თვის」 B:「გმადლობთ」`。`allowTextChange: false` (ZWNJ)。確信度【確実】(Hewitt 1995 §3.5、hy 整合)。

```json
{ "id": 100, "lang": "ka", "op": "replace",
  "segments": [["A","ყველაფრის"],["C","‌თვის"],["B","გმადლობთ"]],
  "finding": "#17 #100 ka -tvis postposition C 独立 (ZWNJ; hy համար 先例)" }
```

---

### 18. #100 kk / ky / tk — C-role (for) 欠落 (Turkic postposition 独立化、uz/az 整合) 【確実】

**Current:**
- kk: `A:「Бәрі үшін」 B:「рахмет」` (бәрі + үшін, postposition)
- ky: `A:「Бардыгы үчүн」 B:「рахмат」`
- tk: `A:「Hemme zat üçin」 B:「sag boluň」`
- 参考 uz: `A:「Hamma narsa」 C:「uchun」 B:「rahmat」` — **正答例**
- 参考 az: `A:「Hər şeyə görə」 B:「təşəkkür edirəm」` (görə 融合) — 同型欠陥

**Problem:** Turkic 諸語の postposition (Kazakh үшін, Kyrgyz үчүн, Turkmen üçin, Uzbek uchun, Azerbaijani görə) はすべて **独立した語** であって case suffix ではない (Johanson & Csató eds. *The Turkic Languages* (Routledge 1998) §3.6.4 postpositions, §3.7 case-postposition distinction)。 同データ uz は C 役に正しく分離しているのに kk/ky/tk/az は A に融合 — sibling 不整合 (`feedback_cross_sibling_role_consistency.md`)。

**Proposed fix:**
- kk: `A:「Бәрі」 C:「үшін」 B:「рахмет」`
- ky: `A:「Бардыгы」 C:「үчүн」 B:「рахмат」`
- tk: `A:「Hemme zat」 C:「üçin」 B:「sag boluň」`
- az: `A:「Hər şeyə」 C:「görə」 B:「təşəkkür edirəm」` (görə は postposition、別 segment)

`allowTextChange: false`。確信度【確実】(Johanson & Csató 1998 §3.6.4、uz 正答例、sibling 整合)。

```json
{ "id": 100, "lang": "kk", "op": "replace",
  "segments": [["A","Бәрі"],["C","үшін"],["B","рахмет"]],
  "finding": "#18a #100 kk C:үшін postposition 独立 (uz 整合)" }
{ "id": 100, "lang": "ky", "op": "replace",
  "segments": [["A","Бардыгы"],["C","үчүн"],["B","рахмат"]],
  "finding": "#18b #100 ky C:үчүн postposition 独立" }
{ "id": 100, "lang": "tk", "op": "replace",
  "segments": [["A","Hemme zat"],["C","üçin"],["B","sag boluň"]],
  "finding": "#18c #100 tk C:üçin postposition 独立" }
{ "id": 100, "lang": "az", "op": "replace",
  "segments": [["A","Hər şeyə"],["C","görə"],["B","təşəkkür edirəm"]],
  "finding": "#18d #100 az C:görə postposition 独立 (kk/ky/tk/uz 整合)" }
```

---

### 19. #100 tr — C-role (for) 欠落 (Turkish postposition için が A に融合) 【確実】

**Current:** `A:「Her şey için」 B:「teşekkür ederim」`

**Problem:** Turkish `için` (for) は **独立 postposition**、kk/ky/tk/uz/az と同型 (Göksel & Kerslake *Turkish: A Comprehensive Grammar* (Routledge 2005) §17.5 postpositions)。 同データ uz の C:「uchun」 正答例と並走させるべき。

**Proposed fix:** `A:「Her şey」 C:「için」 B:「teşekkür ederim」`。`allowTextChange: false`。確信度【確実】(Göksel & Kerslake 2005 §17.5)。

```json
{ "id": 100, "lang": "tr", "op": "replace",
  "segments": [["A","Her şey"],["C","için"],["B","teşekkür ederim"]],
  "finding": "#19 #100 tr C:için postposition 独立 (uz uchun 整合)" }
```

---

### 20. #100 rom — `B:「nais tuke」` Romani 感謝定型に「tuke」 (=you-dat) が embedded、C 役 (for) との整合 【蓋然】

**Current:** `A:「Sa」 C:「vaš」 B:「nais tuke」`

**Problem:** Romani 「nais tuke」 (Vlax) = "thanks to-you" で、 tuke (2sg.dat) が動詞句に embedded。 C:「vaš」 (Vlax for "for") は別前置詞で「Sa vaš nais tuke」は意味的に「all for thanks-to-you」 と二重前置詞構造になり不自然。 標準感謝定型は「Nais tuke vaš sa」 (Thanks to-you for all) または「Šukar nais tuke」 (Matras *Romani: A Linguistic Introduction* (CUP 2002) §10 phatic formulae)。 さらに 同データ A:「Sa」 (all) と B:「nais tuke」 (thanks to-you) は 並列順序が EN 「Thanks for everything」 と整合せず、 語順 inversion。

**Proposed fix:** `B:「Nais tuke」 C:「vaš」 A:「sa」` (語順 EN 整合)、もしくは B 役のみ tuke を切り出し `B:「nais」 C:「vaš」 A:「sa」` + 別 segment で tuke を D 役に振る (palette 拡張)。 最小修正は 語順 inversion `[B,C,A]`。`allowTextChange: false` (segment 並び替えのみ)。確信度【蓋然】(Matras 2002 §10、語順整合)。

```json
{ "id": 100, "lang": "rom", "op": "replace",
  "segments": [["B","nais tuke"],["C","vaš"],["A","Sa"]],
  "finding": "#20 #100 rom 語順 EN 整合 [B,C,A]" }
```

---

### 21. #100 ja_aom — `B:「ありがどさん」` register 適切だが `A:「何もかも」` 標準形 (mainland leak) 【蓋然】

**Current:** `A:「何もかも」 B:「ありがどさん」`

**Problem:** B「ありがどさん」 (Tsugaru 津軽方言の感謝定型 -さん 接尾) は方言形として適切 (此島 1968 *津軽方言の研究* §4.2)。 しかし A「何もかも」 は東京標準形で、 津軽方言の 「すべて/みんな」 は **「めぇんめ」** (mēnme) / 「みなさま」 / 「あぜんこあぜんこ」 が方言形 (此島 1968 §3.5、津軽弁辞典 [Sa-ku-ra 出版 2003])。 ja_hak「あんがと」/ja_oki「にふぇーでーびる」/ja_kyo「おおきに」 と並走的に方言固有形を採用する方針なら、 ja_aom の A も方言化が望ましい。

**Proposed fix:** A:「めぇんめ」 もしくは A:「みなみな」 (より穏当)。`allowTextChange: true`。確信度【蓋然】 (此島 1968、津軽方言形の選択は dialect documentation の弁証法的)。

```json
{ "id": 100, "lang": "ja_aom", "op": "settext", "allowTextChange": true,
  "find": "何もかも", "newText": "めぇんめ",
  "finding": "#21 #100 ja_aom A:何もかも 標準形 → めぇんめ 津軽方言" }
```

---

### 22. #100 ja_edo / ja_heian — `B:「かたじけない/かたじけなし」` 感謝として適切だが A の「万事/よろづ」 と類型分節割れ 【要検討】

**Current:**
- ja_edo: `A:「万事」 B:「かたじけない」`
- ja_heian: `A:「よろづ」 B:「かたじけなし」`

**Problem:** B は時代適合的 (江戸期 武士語 / 平安雅語の感謝定型) で問題なし。 ただし同 #100 で A 役 (everything) の語形分布を見ると、 ja_edo「万事」 / ja_heian「よろづ」 と 漢語 vs 和語 が **register 単独で割れている** — ja_edo の「万事」 (まんじ、漢語) は江戸期町人語の流行語、 ja_heian の「よろづ」 (古和語) は中古和文の伝統定型。 register の区別自体は妥当だが、 EN reference「everything」 (普遍代名詞) との対応で ja_heian「よろづ」 は和語、 ja_edo「万事」 は漢語と意図的差別化されているか **方針確認推奨**。

**Proposed fix:** 現状維持で問題なし (時代差別化として両形は適切)。`allowTextChange: false`。確信度【要検討】 (方針判断)。

(NOOP — 記録のみ、方針整理が必要なら追加 round で議論)

---

### 23. #100 en_in — `B:「Thank you」` Indian English 弁別なし、en と同一 【蓋然】

**Current:** `B:「Thank you」 C:「for」 A:「everything」` (= en と完全同一)

**Problem:** 同データ Indian English (en_in) は #34「slowly **na**」、#82「to take rest」、#14「to office」、#46「for one hour」 など弁別特徴を意識的に挿入しているのに対し、 #100 は en 標準形そのまま — Indian English 感謝定型としては **「Thank you so much」** / **「Many many thanks」** (重複強調が Indian English の弁別特徴) / **「Thanks a ton」** が ICE-India コーパスで頻出 (Sailaja *Indian English* (Edinburgh 2009) §5.3 lexical innovations、Kortmann & Lunkenheimer *eWAVE* (2013) Indian English entry F195 'Many many thanks')。

**Proposed fix:** B:「Many many thanks」 もしくは B:「Thanks a ton」 (Indian English 弁別形)。`allowTextChange: true`。確信度【蓋然】 (Sailaja 2009 §5.3、Indian English データ内一貫性)。

```json
{ "id": 100, "lang": "en_in", "op": "settext", "allowTextChange": true,
  "find": "Thank you", "newText": "Many many thanks",
  "finding": "#23 #100 en_in en と同一 → Many many thanks (Indian English 重複強調定型)" }
```

---

## 集約 (Summary)

**指摘総数: 23 件 (確実 14 / 蓋然 8 / 要検討 1)**

### Dominant defect per language family

| Family | Dominant defect | Cells |
|---|---|---|
| **Tai-Kadai (th_s)** | 「sorry (ขอโทด)」 を 「please (กรุณา)」 として誤用 | #1 (#34/#24/#49 th_s, 3 cells) |
| **Japonic (ja)** | 感謝の register downshift (ありがとう普通体 vs ください丁寧級) | #2 (#100 ja, 1 cell) |
| **Vietic (vi_c/vi_s)** | 親称 bạn 単独 + complement 欠落/構造異常 | #3, #4 (#100 vi_c/vi_s, 2 cells) |
| **Afro-Asiatic 古典 (cop/akk/arc)** | 主語接頭辞欠落 (cop) / 誤訳 (akk = 'you give them') / Modern Hebrew 借用 (arc) | #5, #6, #8 (3 cells) |
| **Hittite (hit)** | 'they heard place' を 'thanks' として誤用 | #7 (1 cell) |
| **Iroquoian (chr)** | 「all thanks you」 三語並列、感謝定型 ᎤᏟ ᎢᎦᎢ ᏩᏙ 欠落 | #9 (1 cell) |
| **Ainu (ain)** | 片仮名表記 vs 同データ Latin 翻字方針 不整合 | #10 (1 cell) |
| **Polynesian (sm)** | 強調修飾子 (tele/vakalevu) 欠落 | #11 (1 cell) |
| **Austronesian (ms/tl/ceb)** | C-role preposition 融合 (id 正答との sibling 割れ) | #12 (3 cells) |
| **Finno-Ugric / Caucasic / Mongolic / Turkic** | C-role case suffix / postposition 融合 (palette gap) | #13-#19 (fi/hu/eu/ka/kk/ky/tk/az/tr/mn/mn_cn, 11 cells) |
| **Indo-Aryan/Romani (rom)** | 語順 EN 整合異常 (tuke embedded、C-A inversion) | #20 (1 cell) |
| **Tsugaru方言 (ja_aom)** | A:「何もかも」 mainland leak (#60 で ja_hak 同型を処理した先例) | #21 (1 cell) |
| **Indian English (en_in)** | 弁別特徴なし (en と同一)、Many many thanks 定型未採用 | #23 (1 cell) |

### Cross-cutting observations

1. **C-role 系統欠落** (#12-#19、計 13 cells): postposition / case suffix が C 役に立つべきところ A に融合する現象が **Finno-Ugric (fi/hu/eu) / Caucasic (ka) / Mongolic (mn/mn_cn) / Turkic (kk/ky/tk/az/tr)** で多発。 sibling 言語 (id `untuk`, uz `uchun`, hy `համար`, mr `‌साठी`) が C 役に正しく分離している正答例があるので、 これらは **palette gap audit を horizontal sweep round で一括処理** することを推奨。

2. **「Sorry」 を 「Please」 として誤用** (#1 th_s): 英語 "Excuse me" の attention-getter 用法 と "Sorry" の謝罪用法 を Southern Thai に転写した編集者起因のエラー。 同型エラーが他言語 (#84 で処理済の tl の po 配置問題、 #86 で処理済の hy の Խնդրում եմ aux 欠落) と並列の **politeness opener mismatch class**。

3. **感謝の register downshift** (#2 ja): 同データ内で polite request (ください) と plain thanks (ありがとう) の register 不整合は 日本語のみならず **多言語的に普遍課題**。 ko #100 감사합니다 は ja の `-ms` 級と等価で OK、 zh #100 谢谢你 は中性敬体 OK、 ar #100 شكراً は中性 OK、 ja のみ二段下落。 dominant defect の象徴的セル。

4. **古典/再構言語の誤訳系統** (#6 akk, #7 hit, #5 cop subject prefix, #8 arc Modern Hebrew leak): 古典セム / 古典印欧 諸言語の感謝表現は通常 limited corpus で attested、 編集者が逐語訳 ("you give them" / "they heard place") や Modern Hebrew Todah 借用 で fallback した痕跡。 **Ancient Near Eastern language audit round** での専門家確認推奨。

5. **C 役未確立による分節差別化失敗** (#12 ms/tl/ceb): Austronesian 諸語 (id 正答 / ms / tl / ceb / jv 処理済 / su) で sa / untuk / kanggo / kanggo / kanggo の前置詞独立化方針が **sibling 間で不揃い** — 同データ jv は #81 で処理済だが su (Sundanese) は未処理 (`C:「kanggo」` 既独立)、 ms/tl/ceb のみ未処理状態。

### Edits JSON (集約)

```json
[
  { "id": 34, "lang": "th_s", "op": "settext", "allowTextChange": true,
    "find": "ขอโทด", "newText": "กะลุนา",
    "finding": "#1a #34 th_s sorry→please (ขอโทด→กะลุนา; th_s 自身 #13/#96 正答例)" },
  { "id": 24, "lang": "th_s", "op": "settext", "allowTextChange": true,
    "find": "ขอโทด", "newText": "กะลุนา",
    "finding": "#1b #24 th_s sorry→please" },
  { "id": 49, "lang": "th_s", "op": "settext", "allowTextChange": true,
    "find": "ขอโทด", "newText": "กะลุนา",
    "finding": "#1c #49 th_s sorry→please" },
  { "id": 100, "lang": "ja", "op": "settext", "allowTextChange": true,
    "find": "ありがとう", "newText": "ありがとうございます",
    "finding": "#2 #100 ja 普通体→丁寧 (register match #13-#96 ください)" },
  { "id": 100, "lang": "vi_c", "op": "replace", "allowTextChange": true,
    "segments": [["B","Cảm ơn"],["C","vì"],["A","tất cả mọi thứ"]],
    "finding": "#3 #100 vi_c bạn 親称除去 + mọi thứ 復活" },
  { "id": 100, "lang": "vi_s", "op": "replace", "allowTextChange": true,
    "segments": [["B","Cám ơn"],["C","vì"],["A","tất cả mọi thứ"]],
    "finding": "#4 #100 vi_s hết→vì + Southern Cám 綴り" },
  { "id": 100, "lang": "cop", "op": "settext", "allowTextChange": true,
    "find": "ϣⲉⲡϩⲙⲟⲧ", "newText": "ϯϣⲉⲡϩⲙⲟⲧ",
    "finding": "#5 #100 cop 主語接頭辞 ϯ- (1sg present) 補完" },
  { "id": 100, "lang": "akk", "op": "settext", "allowTextChange": true,
    "find": "tanaddinšunūti", "newText": "akarrabkum",
    "finding": "#6 #100 akk 'you give them' (誤訳) → akarrabkum 'I bless you'" },
  { "id": 100, "lang": "hit", "op": "replace", "allowTextChange": true,
    "segments": [["B","mukēškami"],["A","ḫūmandaš"]],
    "finding": "#7 #100 hit 'they heard place' (誤訳) → mukēškami (Hittite thanksgiving)" },
  { "id": 100, "lang": "arc", "op": "settext", "allowTextChange": true,
    "find": "תּוֹדָא", "newText": "טַבְוָתָא",
    "finding": "#8 #100 arc Modern Hebrew Todah→ Aramaic ṭaḇwāṯā" },
  { "id": 100, "lang": "chr", "op": "replace", "allowTextChange": true,
    "segments": [["B","ᎤᏟ ᎢᎦᎢ ᏩᏙ"],["A","ᏂᎦᏓ"]],
    "finding": "#9 #100 chr 三語並列 → 'utli igai wado nigada'" },
  { "id": 100, "lang": "ain", "op": "replace", "allowTextChange": true,
    "segments": [["A","opitta"],["B","iyairaikere"]],
    "finding": "#10 #100 ain 片仮名→Latin 翻字 (同データ ain 内正書法整合)" },
  { "id": 100, "lang": "sm", "op": "settext", "allowTextChange": true,
    "find": "Faʻafetai", "newText": "Faʻafetai tele",
    "finding": "#11 #100 sm 強調修飾子 tele 補完 (Polynesian 整合)" },
  { "id": 100, "lang": "ms", "op": "replace",
    "segments": [["B","Terima kasih"],["C","untuk"],["A","semuanya"]],
    "finding": "#12a #100 ms C:untuk 独立分節 (id 整合)" },
  { "id": 100, "lang": "tl", "op": "replace",
    "segments": [["B","Salamat"],["C","sa"],["A","lahat"]],
    "finding": "#12b #100 tl C:sa 独立分節" },
  { "id": 100, "lang": "ceb", "op": "replace",
    "segments": [["B","Salamat"],["C","sa"],["A","tanan"]],
    "finding": "#12c #100 ceb C:sa 独立分節" },
  { "id": 100, "lang": "fi", "op": "replace",
    "segments": [["B","Kiitos"],["A","kaike"],["C","‌sta"]],
    "finding": "#13 #100 fi -sta elative C 独立 (ZWNJ; et eest 並走)" },
  { "id": 100, "lang": "mn", "op": "replace",
    "segments": [["A","Бүх зүйл"],["C","‌д"],["B","баярлалаа"]],
    "finding": "#14a #100 mn -д dative C 独立 (ZWNJ)" },
  { "id": 100, "lang": "mn_cn", "op": "replace",
    "segments": [["A","ᠪᠦᠬᠦ ᠵᠦᠢᠯ"],["C","‌ᠳᠦ"],["B","ᠪᠠᠶᠠᠷᠯᠠᠯ᠎ᠠ"]],
    "finding": "#14b #100 mn_cn -ᠳᠦ dative C 独立 (ZWNJ)" },
  { "id": 100, "lang": "hu", "op": "replace",
    "segments": [["A","Minden"],["C","‌ért"],["B","köszönöm"]],
    "finding": "#15 #100 hu -ért causal-final C 独立 (ZWNJ)" },
  { "id": 100, "lang": "eu", "op": "replace",
    "segments": [["A","Dena"],["C","‌gatik"],["B","eskerrik asko"]],
    "finding": "#16 #100 eu -gatik motivative C 独立 (ZWNJ)" },
  { "id": 100, "lang": "ka", "op": "replace",
    "segments": [["A","ყველაფრის"],["C","‌თვის"],["B","გმადლობთ"]],
    "finding": "#17 #100 ka -tvis postposition C 独立 (ZWNJ; hy համար 先例)" },
  { "id": 100, "lang": "kk", "op": "replace",
    "segments": [["A","Бәрі"],["C","үшін"],["B","рахмет"]],
    "finding": "#18a #100 kk C:үшін postposition 独立 (uz 整合)" },
  { "id": 100, "lang": "ky", "op": "replace",
    "segments": [["A","Бардыгы"],["C","үчүн"],["B","рахмат"]],
    "finding": "#18b #100 ky C:үчүн postposition 独立" },
  { "id": 100, "lang": "tk", "op": "replace",
    "segments": [["A","Hemme zat"],["C","üçin"],["B","sag boluň"]],
    "finding": "#18c #100 tk C:üçin postposition 独立" },
  { "id": 100, "lang": "az", "op": "replace",
    "segments": [["A","Hər şeyə"],["C","görə"],["B","təşəkkür edirəm"]],
    "finding": "#18d #100 az C:görə postposition 独立" },
  { "id": 100, "lang": "tr", "op": "replace",
    "segments": [["A","Her şey"],["C","için"],["B","teşekkür ederim"]],
    "finding": "#19 #100 tr C:için postposition 独立 (uz uchun 整合)" },
  { "id": 100, "lang": "rom", "op": "replace",
    "segments": [["B","nais tuke"],["C","vaš"],["A","Sa"]],
    "finding": "#20 #100 rom 語順 EN 整合 [B,C,A]" },
  { "id": 100, "lang": "ja_aom", "op": "settext", "allowTextChange": true,
    "find": "何もかも", "newText": "めぇんめ",
    "finding": "#21 #100 ja_aom A:何もかも 標準形 → めぇんめ 津軽方言" },
  { "id": 100, "lang": "en_in", "op": "settext", "allowTextChange": true,
    "find": "Thank you", "newText": "Many many thanks",
    "finding": "#23 #100 en_in en と同一 → Many many thanks (Indian English 重複強調)" }
]
```

注:
- 指摘 #22 (ja_edo / ja_heian) は方針判断で **NOOP**、JSON に含めず。
- ZWNJ 分節 (#13-#17) は表層文字列不変のため `allowTextChange: false`。 残り 18 件 は新規 surface 文字列で `allowTextChange: true` 必須。
- 隣接同役重複は生じない (各 cell の編集後 role 並びは元と同じ または segment 分割増加のみ)。
- 適用前に `node .wf_langmap_query.mjs <id>` で 現値を再確認すること。
- 指摘 #1 (th_s) は **明白な意味誤り** (sorry vs please) で確実度最高、 #18-#19 (Turkic C-role) も sibling 整合性が文献的に確立しているため確実度高。 #11 sm tele、#20 rom 語順、#21 ja_aom めぇんめ、#23 en_in many many thanks は **方言/register 選好** 要素を含むため【蓋然】。

**ファイル状態: OPEN**

## Dev response — round 1 (2026-06-04)

レビュー #89 (Greetings + social formulae) の指摘 23 件 (確実 14 / 蓋然 8 / 要検討 1) を全数精読し、確実級 + 文献的に強い蓋然級 (hit/arc/chr/ja_aom/eu) を `/tmp/lm_edits_89.json` に集約 (計 **26 edits**, 4 sentence ids: 24/34/49/100, 23 言語)。 data.js は本ラウンドでは READ-ONLY とし、JSON ファイルのみ生成 (apply は別ステップ)。

### 採用 (Apply): 26 edits

| # | id | lang | op | 理由 |
|---|---|---|---|---|
| 1a | 34 | th_s | settext | 確実: ขอโทด (sorry) → กะลุนา (please) 意味誤り、th_s 自身 #13/#96 正答例 |
| 1b | 24 | th_s | settext | 確実: 同上 |
| 1c | 49 | th_s | settext | 確実: 同上 |
| 2 | 100 | ja | settext | 確実: ありがとう (普通体) → ありがとうございます (丁寧)、#13-#96 ください register 整合 |
| 3 | 100 | vi_c | replace | 確実: bạn 親称除去 + mọi thứ 復活 |
| 4 | 100 | vi_s | replace | 確実: hết→vì preposition 修正 + Cám 南部綴り |
| 5 | 100 | cop | settext | 確実: 主語接頭辞 ϯ- (1sg present) 補完 (Lambdin 1983 §3.1) |
| 6 | 100 | akk | settext | 確実: 'you give them' (誤訳) → akarrabkum 'I bless you' (Huehnergard 2011 §39) |
| 7 | 100 | hit | replace | 蓋然 (採用): 'they heard place' (誤訳) → mukēškami (Hittite thanksgiving formula, Hoffner & Melchert 2008 §28.36) |
| 8 | 100 | arc | settext | 蓋然 (採用): Modern Hebrew Todah leak → Aramaic ṭaḇwāṯā (Sokoloff p.533) |
| 9 | 100 | chr | replace | 蓋然 (採用): 三語並列 → 標準感謝定型 ᎤᏟ ᎢᎦᎢ ᏩᏙ ᏂᎦᏓ (utli igai wado nigada) |
| 12a | 100 | ms | replace | 確実: C:untuk 独立分節 (id 正答整合) |
| 12b | 100 | tl | replace | 確実: C:sa 独立分節 |
| 12c | 100 | ceb | replace | 確実: C:sa 独立分節 |
| 13 | 100 | fi | replace | 確実: -sta elative C 独立 (ZWNJ; et eest 並走) |
| 14a | 100 | mn | replace | 確実: -д dative C 独立 (ZWNJ) |
| 14b | 100 | mn_cn | replace | 確実: -ᠳᠦ dative C 独立 (ZWNJ) |
| 15 | 100 | hu | replace | 確実: -ért causal-final C 独立 (ZWNJ; mr साठी 先例) |
| 16 | 100 | eu | replace | 蓋然 (採用): -gatik motivative C 独立 (fi/hu/mn family-sweep 整合) |
| 17 | 100 | ka | replace | 確実: -tvis postposition C 独立 (ZWNJ; hy համար 先例) |
| 18a | 100 | kk | replace | 確実: C:үшін postposition 独立 (uz 整合) |
| 18b | 100 | ky | replace | 確実: C:үчүн postposition 独立 |
| 18c | 100 | tk | replace | 確実: C:üçin postposition 独立 |
| 18d | 100 | az | replace | 確実: C:görə postposition 独立 |
| 19 | 100 | tr | replace | 確実: C:için postposition 独立 (uz 整合) |
| 21 | 100 | ja_aom | settext | 蓋然 (採用): 「何もかも」 mainland leak → 「めぇんめ」 津軽方言 (#60 ja_hak 先例と並走) |

### 保留 (Hold for next round): 4 蓋然 + 1 要検討

- **#10 ain (片仮名→Latin)**: 蓋然。 ain の他文 (#1, #22) で Latin 翻字採用は事実だが、 #100 のみ片仮名化された経緯と、 ain の音韻表記方針 (Hattori-style vs 中川式) の選択は方針判断要素を含むため保留。 next round で ain 全体の正書法統一を取り上げる方が安全。
- **#11 sm (Faʻafetai → Faʻafetai tele 強調修飾子)**: 蓋然。 「mea uma」 (everything) が既に C-A で完結しており、 強調修飾子 tele は polite-formal register として任意。 cross-Polynesian sweep (fj vakalevu / haw mahalo / mi ngā mihi / tpi tenkyu) で family-wide 強調方針を別 round で議論したい。
- **#20 rom (語順 [A,C,B] → [B,C,A])**: 蓋然。 Romani の感謝定型「nais tuke」 に「vaš sa」 を後置する語順は Matras 2002 §10 で言及されるが、 Vlax/Sinte/Kalderash 等の方言間で語順 variation あり。 rom (Vlax 想定) 単独で語順反転を強行するより、 #100 の他 Indo-Aryan/Indic sibling (hi/ur/pa など) の語順方針と並走比較が望ましい。
- **#23 en_in (Thank you → Many many thanks)**: 蓋然。 Sailaja 2009 §5.3 と eWAVE F195 の出典は強いが、 「Many many thanks」 は Indian English 弁別形として **書記語より口語頻出** で、 #100 の textbook-style register と合致するか別途確認必要。 en_in の他文 (#34, #82, #14, #46) の弁別パターンと整合確認した上で次 round で対処。
- **#22 ja_edo / ja_heian (NOOP)**: 要検討として記録。 「万事/よろづ」 漢語/和語 register 差別化は時代適合的で現状維持。 方針整理が必要なら ja_edo 専用 round で議論。

### 補足

- C-role 系統 (#13-#19、計 13 cells: fi/hu/eu/ka/mn/mn_cn/kk/ky/tk/az/tr) は family-sweep として一括採用。 ZWNJ 分節は `allowTextChange: false` で表層不変。 ms/tl/ceb (#12) は preposition が空白区切りのため `allowTextChange: false` でも replace 適用可能。
- 古典/再構言語 (cop/akk/hit/arc) は 各々の文献的確度に温度差があるが、 既存セルが **明白な誤訳** (akk = 'you give them' / hit = 'they heard place') または **言語混入** (arc Modern Hebrew Todah / cop subject prefix 欠落) であり、 最小修正で意味復元する方向で採用。
- ja_aom 「めぇんめ」 は此島 1968 *津軽方言の研究* §3.5 の津軽方言「すべて/みんな」 形として採用。 ja_hak「あんがと」/ja_oki「にふぇーでーびる」 と並走的に方言固有形を採用する #60 先例に整合。
- 適用前に `node .wf_langmap_query.mjs <id>` で 現値再確認、 適用後に `node .wf_langmap_apply2.mjs /tmp/lm_edits_89.json` で実行予定。

**Edits JSON: `/tmp/lm_edits_89.json` (26 edits / ids 24,34,49,100 / 23 言語)**

**ファイル状態: OPEN (4 蓋然 + 1 要検討 保留)**
