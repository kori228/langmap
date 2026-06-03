# LangMap データレビュー #52 — 指示詞 (this/that/these/those) 距離体系・分節横断レビュー

## レビュアー自己紹介 (ペルソナ)

Júlia Brassard-Whelan (handle: **@deixis_jbw**)。McGill 大学言語学博士、論文 "Three-Term Demonstrative Systems and the Speaker-Addressee Axis: A Cross-Linguistic Reassessment" (主査 H. Diessel)。常用文献は Diessel *Demonstratives — Form, Function, and Grammaticalization* (Benjamins 1999)、Diessel & Coventry 編 *Demonstratives in Cross-Linguistic Perspective* (CUP 2014)、Anderson & Keenan "Deixis" (in Shopen 1985, vol. III)、Himmelmann "Demonstratives in Narrative Discourse" (in Fox 1996)、Fillmore *Lectures on Deixis* (CSLI 1997)、Lakoff "Remarks on This and That" (CLS 1974)、Levinson *Pragmatics* (CUP 1983 §2.2.3)、Hasegawa *Topics in Japanese Linguistics — Kosoado* (くろしお 2014)、이익섭 *국어 지시어 연구* (한국어학회 1994)、Cinque *The Syntax of Adjectives* (MIT 2010 §1.4 demonstrative-N 並び)、Brustad *The Syntax of Spoken Arabic* (Georgetown 2000, §4.3 article-demonstrative)。今回のレビュー軸は **指示詞の (a) 距離区分 (proximal/medial/distal) の言語横断的整合、(b) 名詞句内での分節位置 (独立分節 vs 名詞融合)、(c) 前置/後置 (prenominal vs postnominal) の letter 割り当て** に絞る。動詞のテンス・アスペクト (#43 系で扱い済)、再帰 (#48 で扱い済)、敬語 (#38 系) 等は射程外とし、純粋に「**指示詞要素 (this/that/these/those および各言語の対応形) が syntactic role と距離値に応じて整合した分節を受けているか**」のみを判定する。

## 検証範囲

- **英語に this/that/these/those を含む文** (= データ全体スキャンの結果 15 文):
  - **#5** This coffee is very delicious (proximal, this+N)
  - **#12** The cherry blossoms in this park are beautiful (proximal、PP 内 demonstrative)
  - **#17** I have a meeting at 3 o'clock this afternoon (proximal、時間表現 this+N)
  - **#18** This bag is too expensive (proximal、主語 this+N)
  - **#20** It has been raining since this morning (proximal、since this+N)
  - **#43** The food at this restaurant is delicious (proximal、at this+N、ja ref は 「この」)
  - **#45** In this country it gets cold in winter (proximal、in this+N)
  - **#48** I want to watch that movie (distal、目的語 that+N、ja ref は 「あの」)
  - **#58** I want to take a photo of this temple (proximal、of this+N)
  - **#62** I want to read this book by the end of the month (proximal、this+N 目的語、ja ref は 「この」)
  - **#78** I think this plan is good (proximal、補文内 this+N)
  - **#87** This app is very convenient (proximal、主語 this+N)
  - **#93** In this country in summer many festivals are held (proximal、PP 内 in this+N)
  - **#98** I want to order this dish (proximal、目的語 this+N、ja ref は 「この」)
  - **#99** How much is this souvenir (proximal、主語 this+N、ja ref は 「この」)
- **対象言語層**: 全 180+ 言語層、特に距離区分が形態論的に明示される 3 項体系言語 (es/pt/ja/ko/ka/hu/fi/et/it/sl/sr/pl/cs/sk/hi/eu/tl/lad/oc 等) と前/後置の選択がある言語 (sw/ms/id/jv/su/tl/ceb/he/ar 系/vi/th/mg/zu/xh) を優先的に精査。
- ライブデータは `node -e` で全 100 文抽出済、`/tmp/dem_dump.txt` および `/tmp/dem98_99.txt` にバックアップ。

## 方針 — 何を「指摘」とし、何を「許容」とするか

1. **距離値 (deictic distance) の整合**: 英語 reference が `this` (proximal) なら、3 項体系言語では proximal 形 (es `este` / pt `este` / ko `이` / ja `この` / fi `tämä` / sr `овај` / hu `ez` / hi `यह`) を採用すべき。`that` (distal) なら distal 形 (es `aquel` / pt `aquele` / ko `저` / ja `あの` / fi `tuo` / sr `онај` / hu `az` / hi `वह`)。**medial 形** (es `ese` / pt `esse` / ko `그` / ja `その` / fi `se` / sr `тај` / hu — / hi —) を proximal/distal のどちらかの reference に対して当てているのは典型的な誤訳。
2. **PT_BR の `esse/este` 区分**: 口語 BP では `esse` が proximal 化している (Câmara Jr. 1970, *Estrutura da Língua Portuguesa* §6.3) ため、`esse` を proximal "this" に当てるのは **記述的に正当** だが、pt_eu と PT_BR で **同じ文の同じ要素が `este` vs `esse` に分裂** すると、学習者には「片方は近称、片方は中称」と誤解される。記述方針として **両方とも `este` に揃える** か、**ph_br 全文で `esse` に統一して注記** するか、いずれかを選ぶべき。現状は **文ごとに揺れている** (例 #5/#18/#87 では pt_br も `Este`、#43/#62/#78 では `esse`) — これが最も深刻な系統内不整合。
3. **デモンストラティブ + 名詞の分節**: 英語 reference は文によって扱いが異なる。#43 は `[D:this] [E:restaurant]` で **dem 独立**、#62 は `[B:this book]` で **dem 融合**、#48 は `[E:that] [B:movie]` で **dem 独立**。各言語はこの reference 構造に追随すべきだが、追随していない例が多発。
4. **前置 vs 後置 demonstrative**: 大半の言語は prenominal (en/fr/de/es 等) だが、**Bantu (sw/zu/xh/ny/sn/rw)**、**マレー・インドネシア系 (id/ms/jv/su)**、**ベトナム語 (vi)**、**タイ (th)**、**マダガスカル (mg)**、**Egyptian Arabic (ar_eg)** は postnominal。letter 割り当ては「en の letter 順 (A=demonstrative)」を機械的に踏襲してはならず、各言語の **意味役割** に基づくべき。現状 sw `[B:Kahawa] [A:hii]` (NOM+DEM、postnominal、letter A=DEM) と en `[A:This] [B:coffee]` (DEM+NOM、prenominal、letter A=DEM) は **letter A=DEM の意味的整合は保たれている** が、Bantu 言語の文によっては letter 割り当てが noun に dem を融合させてしまい (例: ho `[B:bag sa a]`)、意味整合が崩れる。
5. **Arabic 系の article+demonstrative 融合**: `هذا + المطعم` (MSA) は **dem + 定冠詞 + 名詞** の 3 形態素。Levantine/Gulf/Tunisian Arabic では `هـ + المطعم → هالمطعم` (clitic + 定冠詞 + 名詞) と **1 形態に縮約** (Brustad 2000, §4.3.1)。データ上 ar_lev `[D|E:هالمطعم]` (#43) のように **複合 letter** で逃避しているが、本来 `هـ` (proximal clitic) と `المطعم` (定冠詞 + 名詞) を分割する余地がある。ar_eg は `المطعم ده` (定冠詞 + 名詞 + dem-POST) と完全に分節可能なので、Egyptian の `[E:المطعم] [D:ده]` (#43) と Levantine `[D|E:هالمطعم]` の **同系内不整合** が際立つ。
6. **Quebec French / African French の `-là`**: fr_qc `[B:café-là]` / fr_af `[A:Ce] [B:café-là]` の `-là` は **遠称 marker** (Vinet 2001, *D'un français à l'autre* §3.4)。reference が proximal "this" の #5/#43/#45 で `-là` を付加すると semantic mismatch (proximal を距離 marker 付きで distal 化)。fr_qc では `-là` は弱化して中立な deictic emphasis にもなるという見方もあるが (Tremblay 2005)、**学習者向けの語学教材としては misleading**。#48 (distal "that") の fr_qc `[B:film-là]` は **distal 用法として整合**、しかし letter 割り当てが `[E:ce] [B:film-là]` で **遠称 marker `-là` が letter B (名詞) に埋没** している点が問題。
7. **Slavic ten/tamten, taj/onaj**: pl/cs/sk は **ten** (近・中称) と **tamten** (遠称) を区別、sr/bg/mk は **овај/тај/онај** (3 項)、ru/uk は **этот/тот** (2 項)。データ上の #48 で `that` (distal) に **pl ten / cs ten / sk ten / sr тај** が当てられているのは **distal を medial 形で代用**しており、正当な遠称形 (tamten / onaj) を使うべき。一方 ru/uk は **тот** (= distal 系) を採用しており適切。bg は **онзи** (distal) で適切。
8. **Finnish/Estonian 3 項体系**: fi `tämä/tuo/se`、et `see/too/seda...` で 3 項。#48 `that` に対し fi `sen` (se 系 = medial)、et `seda` (see 系 = medial) を採用しており、distal なら `tuon` / `toda` であるべき (Karlsson 2018, *Finnish: An Essential Grammar* §5.4)。
9. **Korean 이/그/저**: 韓国語は 3 項体系 (Hashimoto 1970; 이익섭 1994 §3)。proximal `이` (= speaker 近)、medial `그` (= addressee 近 or 既出指示)、distal `저` (= speaker・addressee 双方から遠)。`あの` (ja) は明確に **distal**、reference 上「両者から遠い、視界内の対象」を指す典型例。データ #48 ja `[E:あの]` に対し全 ko 系 (`ko`/`ko_kp`/`ko_bus`/`ko_jeju`/`ko_yb`) が `그` を採用。`그` は medial、`그 영화` だと「(あなたが言った、共有知識上の) その映画」になり、distal `저 영화` (= 「あの離れた映画」) と意味が異なる。少なくとも記述的に注記すべき。
10. **Japanese kono/sono/ano の anaphoric 用法**: 日本語 `あの` は physical distal + anaphoric distal (= 共有知識指向) の両方を担う (Hasegawa 2014 §4)。en `that` は anaphoric/distal/medial の機能を統合した「広義 distal」。両者は機能上完全一致しない — `that movie` (en) が常に `あの映画` (distal) になるかは context 次第。データ #48 では原文が `あの` のため distal で確定しているが、ja → en 翻訳としては許容、ja → ko/ru の 3 項体系翻訳で何を取るかは要審議。
11. **Tagalog `ito/iyan/iyon` 3 項**: tl は 3 項。proximal `ito` (= ja `この`)、medial `iyan` (= ja `その`)、distal `iyon` (= ja `あの`)。データ #5 tl `[A:Itong]` (= `ito + ng`、proximal) で「this」整合、#48 tl `[E:iyon]` (distal) で「that = あの」整合、両方 OK。#43 tl `[D:na ito]` proximal OK。tl の処理は概ね適切。
12. **Malagasy `ity/io/iny` の dem-bracket 構造**: mg は dem を NP の前後で囲む (Keenan & Polinsky 1998, *The Austronesian Languages of Asia and Madagascar*)。例 #18 mg `[A:ity] [B:kitapo ity]` で **前 ity (A) + 後 ity (B-融合)** が分裂。#43 mg `[D|E:ity toerana fisakafoanana ity]` で **両方とも letter D|E に融合**。同一構造 (前後 ity bracket) が文によって分裂・融合に揺れる。
13. **Indonesian/Malay/Javanese/Sundanese ini/itu の postnominal**: id/ms `ini` (proximal) / `itu` (distal)、jv `iki/iku`、su `ieu/éta`。常に postnominal。letter A=DEM を維持 (su `[B:Kopi] [A:ieu]` #5) する方針は OK、ただし #18/#62 で `[B:Tas] [A:ini]` のように noun が letter B、dem が letter A という **letter A=DEM だが意味ロールは modifier** の不整合は許容判断。
14. **ヘブライ語 postnominal DEM + 定冠詞反復**: he `הקפה הזה` (定冠詞 + 名詞 + 定冠詞 + DEM) という二重 def 構文 (Glinert 2005, *Modern Hebrew: An Essential Grammar* §3.2.1)。データ #5 he `[B:הקפה] [A:הזה]` (dem + def 一塊 letter A、noun + def letter B)。#18 he `[B:התיק] [A:הזה]` 同様。#48 he `[E:ההוא]` (= ha + hu「あの (彼/it)」、distal、def 付き) — letter E。一貫している。
15. **Egyptian Arabic dem 後置**: ar_eg `الشنطة دي` (#18)、`المطعم ده` (#43)、`البلد دي` (#45)。後置 dem `دي`(f)/`ده`(m) は proximal。ar_eg だけ後置、他の Arabic dialect は前置 (ar `هذا الـ`、ar_lev `هاي/هاد الـ`、ar_ma `هاد الـ`、ar_gulf `هذي/هذا الـ`)。letter 割り当ては ar_eg が **noun を [B/letter X]、dem を [A/letter Y]** で分割保存できているか — 大半は OK だが、#48 ar_eg `[B:الفيلم] [E:ده]` (letter B=noun、letter E=dem、ja ref `あの` distal だが ar_eg `ده` は proximal) — **距離不整合** (#48 は distal "that"、`ده` は proximal "this")。

確信度は 【確実】= 距離値・分節割当が明らかに reference と矛盾、【蓋然】= 言語固有の解釈余地あり、【要検討】= 方針として closed-review で再決定すべき。

---

## 指摘事項 (Issues found)

### 1. #48 「あの映画」 — Slavic 中称/近称 (ten/тај/sl ta) を distal "that" に流用 【確実】

**Current:**
- ja `[E:あの]` (distal、明確に「あの」)
- en `[E:that]` (distal)
- ru `[E:тот]` (distal、整合)
- uk `[E:той]` (distal、整合)
- bg `[E:онзи]` (distal、整合)
- ka `[E:იმ]` (distal、整合)
- hu `[E:azt a]` (distal `az`、整合)
- hi `[E:वह]` (distal、整合)
- pl `[E:ten]` (**近称・中称、`tamten` が distal**)
- cs `[E:ten]` (**同上、`tamten` が distal**)
- sk `[E:ten]` (**同上、`tamten` が distal**)
- sr `[E:тај]` (**medial、`онај` が distal**)
- sl `[E:ta]` (**proximal、`tisti/oni` が distal**)
- fi `[E:sen]` (**medial、`tuon` が distal**)
- et `[E:seda]` (**medial、`toda` が distal**)
- pt_eu/pt_br `[E:aquele]` (distal、整合)
- es 全種 `[E:esa]` (**medial、`aquella` が distal**)
- ko 全種 `[E:그]` (**medial、`저` が distal**)
- ar `[E:ذلك]` (distal、整合)、ar_eg `[E:ده]` (**proximal**、距離不整合最大)、ar_gulf `[E:ذاك]` (distal)、ar_iq `[E:هذاك]` (distal)、ar_ma `[E:داك]` (distal)、ar_tn `[B|E:في هاك الفيلم]` (distal)、ar_sd `[B|E:على الفيلم داك]` (distal)、ar_lev `[B|E:هالفيلم]` (**proximal clitic ha-**、距離不整合)

**Problem:** Diessel 1999 §2.2 によれば、3 項体系言語では **distal 形** (距離 + 視界外/不在指示) と **medial 形** (= 「あなたの近く」/「既出共有指示」) は形態論的に対立する。ja `あの` は明確に **distal/anaphoric** (Hasegawa 2014 §4.2)。en `that` は distal/medial の機能を統合する「広義 distal」。3 項体系言語では **distal** を取るべき。データ上、**13 言語で medial/proximal 形が distal reference に当てられている**:
- Slavic: pl/cs/sk の `ten` (中称), sr の `тај` (中称), sl の `ta` (近称)
- Uralic: fi の `sen` (中称), et の `seda` (中称)
- Spanish 全方言: `esa` (中称、「あなたの近くにあるその」) — distal は `aquella`
- Korean 全方言: `그` (中称、「共有知識上のその」) — distal は `저`
- Arabic colloquial: ar_eg `ده` / ar_lev `هـ-` (両方とも proximal)

**Proposed (要検討、距離体系の機能差を承知の上で proposing more):**
- pl `[E:ten]` → `[E:tamten]`
- cs `[E:ten]` → `[E:tamten]`
- sk `[E:ten]` → `[E:tamten]`
- sr `[E:тај]` → `[E:онај]`
- sl `[E:ta]` → `[E:tisti]` (または `oni`)
- fi `[E:sen]` → `[E:tuon]`
- et `[E:seda]` → `[E:toda]`
- es 全種 `[E:esa]` → `[E:aquella]`
- ko 全種 `[E:그]` → `[E:저]` (`저 영화` = 「あの映画」)
- ar_eg `[E:ده]` → `[E:داك]` (または `ديك`)
- ar_lev `[B|E:هالفيلم]` → `[B:الفيلم] [E:هاديك]`

**Structured edit:**
```json
{"id": 48, "lang": "pl", "op": "replace_seg_text", "old": "ten", "new": "tamten"}
{"id": 48, "lang": "cs", "op": "replace_seg_text", "old": "ten", "new": "tamten"}
{"id": 48, "lang": "sk", "op": "replace_seg_text", "old": "ten", "new": "tamten"}
{"id": 48, "lang": "sr", "op": "replace_seg_text", "old": "тај", "new": "онај"}
{"id": 48, "lang": "sl", "op": "replace_seg_text", "old": "ta", "new": "tisti"}
{"id": 48, "lang": "fi", "op": "replace_seg_text", "old": "sen", "new": "tuon"}
{"id": 48, "lang": "et", "op": "replace_seg_text", "old": "seda", "new": "toda"}
{"id": 48, "langs": ["es_eu","es_mx","es_ar","es_cl","es_co","es_pe","es_cu","es_an"], "op": "replace_seg_text", "old": "esa", "new": "aquella"}
{"id": 48, "langs": ["ko","ko_kp","ko_bus","ko_jeju","ko_yb"], "op": "replace_seg_text", "old": "그", "new": "저"}
{"id": 48, "lang": "ar_eg", "op": "replace_seg_text", "old": "ده", "new": "داك"}
```

---

### 2. PT_BR `esse/este` proximal "this" — 文間で `este/esse` 揺れ 【確実】

**Current:**
- #5 pt_br `[A:Este] [B:café]` (proximal este)
- #18 pt_br `[A:Esta] [B:bolsa]` (proximal este)
- #43 pt_br `[A:deste] [E:restaurante]` (pt_eu) vs `[A:desse] [E:restaurante]` (pt_br) — pt_br **esse**
- #62 pt_br `[B:esse livro]` — **esse**
- #78 pt_br `[A:que esse] [B:plano]` — **esse**
- #87 pt_br `[A:Este] [B:aplicativo]` — **este** (再度 este に戻る)
- #58 pt_br `[B:do templo]` (所有格 do、demonstrative 省略 — pt_eu と同じ)
- #93 pt_br `[A:Nesse] [C:país]` — **esse** (pt_eu は `Neste` este)
- #98 pt_br `[A:Eu] [D:este]` — **este**
- #99 pt_br `[A:esse]` — **esse**

**Problem:** Câmara Jr. 1970 §6.3 および Mateus et al. 2003 *Gramática da Língua Portuguesa* §10.2 によれば、口語 BP では `este` がほぼ消滅し `esse` が **proximal + medial の両方を担う「中性的近称」**になっている。一方 pt_eu は **este (proximal) vs esse (medial) vs aquele (distal)** の 3 項を厳格保持。データ上、pt_br は **文によって `este` (#5/#18/#87/#98) と `esse` (#43/#62/#78/#93/#99) を混用**しており、これは **記述的にも教育的にも不適切**:
- 文体ニュートラルな proximal なら全部 `este` または全部 `esse` に統一すべき。
- 現状の揺れは **同じ「this+N」構造が pt_br 内で `este` と `esse` に分裂**しており、学習者は「いつ `este`、いつ `esse`」かの規則を読み取れない。

**Proposed (要検討):** pt_br 全文で **どちらかに統一**。BP 口語準拠なら全部 `esse`、教科書準拠なら全部 `este`。サンプル提案 (口語 BP 準拠):
- #5 pt_br `[A:Este] [B:café]` → `[A:Esse] [B:café]`
- #18 pt_br `[A:Esta] [B:bolsa]` → `[A:Essa] [B:bolsa]`
- #87 pt_br `[A:Este] [B:aplicativo]` → `[A:Esse] [B:aplicativo]`
- #98 pt_br `[A:Eu] [B:quero] [C:pedir] [D:este] [E:prato]` → `[D:esse]`

または教科書準拠 (#43/#62/#78/#93/#99 を `este` に直す):
- #43 pt_br `[A:desse]` → `[A:deste]`
- #62 pt_br `[B:esse livro]` → `[B:este livro]`
- #78 pt_br `[A:que esse]` → `[A:que este]`
- #93 pt_br `[A:Nesse]` → `[A:Neste]`
- #99 pt_br `[A:esse]` → `[A:este]`

**Structured edit (BP 口語準拠案):**
```json
{"id": 5, "lang": "pt_br", "op": "replace_seg_text", "old": "Este", "new": "Esse"}
{"id": 18, "lang": "pt_br", "op": "replace_seg_text", "old": "Esta", "new": "Essa"}
{"id": 87, "lang": "pt_br", "op": "replace_seg_text", "old": "Este", "new": "Esse"}
{"id": 98, "lang": "pt_br", "op": "replace_seg_text", "old": "este", "new": "esse"}
```

---

### 3. Quebec/Africa French `ce ... -là` を proximal "this" に流用 — 距離 marker 誤用 【確実】

**Current:**
- #5 fr_qc `[A:Ce] [B:café-là]` (proximal "this" ref、distal marker `-là` 付き)
- #5 fr_af は省略 (-là なし)
- #18 fr_qc `[A:Ce] [B:sac-là]`、fr_af `[A:Ce] [B:sac-là]` (両方 -là 付き、proximal ref)
- #43 fr_qc `[A:dans] [D:ce] [E:resto-là]` (-là 付き)、fr_af `[A:de] [D:ce] [E:restaurant]` (なし)
- #45 fr_qc `[A:pays-là]` (-là 付き)、fr_af 省略
- #48 fr_qc `[E:ce] [B:film-là]`、fr_af `[E:ce] [B:film-là]` (distal "that" ref、-là 整合)
- #58 fr_qc `[B:de ce temple-là]` (-là 付き、proximal "of this temple" ref)
- #62 fr_qc `[B:ce livre-là]` (-là 付き、proximal "this book" ref)
- #78 fr_qc `[A:que ce] [B:plan-là]` (-là 付き)

**Problem:** Vinet 2001 §3.4 によれば、Quebec French の `-là` (postclitic) は **基本的に遠称 marker** で、`celui-là` (= en `that one`)、`ce film-là` (= en `that film`) として distal を担う。一方 `-ci` は近称。fr_qc データでは:
- #48 (distal "that movie") の `film-là` は **distal 整合**で適切。
- #5/#18/#43/#45/#58/#62/#78 (proximal "this") の `café-là / sac-là / resto-là / pays-là / temple-là / livre-là / plan-là` は **distal marker を proximal ref に当てている**。

Quebec French では `-là` が弱化して中立な deictic emphasis (= 「これ・あれ」の話題化) としても使われるという見方 (Tremblay 2005, *Le français québécois* §4) もあるが、**学習者向けの語学教材**としては:
- proximal 強調なら `celui-ci / ce ... -ci` を使うべき。
- 中立なら無印 `ce` (現代フランス語標準と同じ) でよい。

データ上、#48 の fr_qc/fr_af で `[E:ce] [B:film-là]` と **letter E が proximal `ce`、letter B が distal `-là` 付き名詞** に分裂しており、**距離 marker (機能 letter E と推定される位置) が letter B に埋没**。

**Proposed:**
- #5/#18/#43/#45/#58/#62/#78 fr_qc の `-là` を **削除** (中立 `ce N`) するか、`-ci` (近称) に置換。
- #48 fr_qc/fr_af の `[B:film-là]` → `[B:film] [E':-là]` (距離 marker `-là` を独立分節、letter E' で distal を可視化) または `[E:ce ... -là]` を 1 letter にまとめる。

**Structured edit:**
```json
{"id": 5, "lang": "fr_qc", "op": "replace_seg_text", "old": "café-là", "new": "café"}
{"id": 18, "lang": "fr_qc", "op": "replace_seg_text", "old": "sac-là", "new": "sac"}
{"id": 18, "lang": "fr_af", "op": "replace_seg_text", "old": "sac-là", "new": "sac"}
{"id": 43, "lang": "fr_qc", "op": "replace_seg_text", "old": "resto-là", "new": "resto"}
{"id": 45, "lang": "fr_qc", "op": "replace_seg_text", "old": "pays-là", "new": "pays"}
{"id": 58, "lang": "fr_qc", "op": "replace_seg_text", "old": "de ce temple-là", "new": "de ce temple"}
{"id": 62, "lang": "fr_qc", "op": "replace_seg_text", "old": "ce livre-là", "new": "ce livre"}
{"id": 78, "lang": "fr_qc", "op": "replace_seg_text", "old": "que ce", "new": "que ce"}
{"id": 78, "lang": "fr_qc", "op": "replace_seg_text", "old": "plan-là", "new": "plan"}
```

---

### 4. Arabic Levantine/Gulf/Tunisian `ها-` clitic と定冠詞 + 名詞の融合 — `[D|E:...]` 複合表記 【確実】

**Current:**
- #43 ar_lev `[A:بـ] [D|E:هالمطعم] [C:طيّب]`
- #43 ar_gulf `[A:بـ] [D|E:هالمطعم] [C:لذيذ]`
- #43 ar_tn `[A|D|E:هالريستوران]` (前置詞 + 冠詞 + dem + 名詞、4 形態素一塊!)
- #45 ar_lev `[E:بـ] [A|F:هالبلد]`、ar_gulf `[E:في] [A|F:هالبلد]`、ar_tn `[E:في] [A|F:هالبلاد]`
- #48 ar_lev `[B|E:هالفيلم]`、ar_tn `[B|E:في هاك الفيلم]`、ar_sd `[B|E:على الفيلم داك]`
- #58 ar_tn `[B:هالمعبد هاذا]` (= ha + def + N + dem 後置 hāḏā、bracket 構造)
- #62 ar_lev `[B:هالكتاب]`、ar_gulf `[B:هالكتاب]`、ar_tn `[B:هالكتاب]`
- #87 ar_lev `[B:هالأبليكيشن]`、ar_gulf `[B:هالتطبيق]`、ar_tn `[A:هالأبليكاسيون]`
- #93 ar_gulf `[B:هالبلد]`、ar_tn `[B:هالبلاد]`

**Problem:** Brustad 2000 *The Syntax of Spoken Arabic* §4.3.1 によれば、Levantine/Gulf/Tunisian Arabic の `ها-` は **「ha- (proximal clitic) + 定冠詞 al- + 名詞」** の 3 形態素縮約。形態論的には:
- `هـ` (proximal dem clitic)
- `الـ` (定冠詞)
- 名詞 (cafe/restaurant 等)

これは **分節可能** (例えば書記上は `هالـ` だが学術的には `ha-+l-+N`)。ar_lev/ar_gulf/ar_tn データでは:
- #43 `[D|E:هالمطعم]` (複合 letter)、#45 `[A|F:هالبلد]` (4-way 複合)、#48 `[B|E:هالفيلم]` (2-way 複合) — 複合 letter で逃避。
- 同じ系統内で **ar (MSA) は `[D:هذا] [E:المطعم]` と完全分割**しているため、ar_lev/ar_gulf/ar_tn だけが融合。
- ar_tn #43 `[A|D|E:هالريستوران]` は **4 letter 複合** (= 前置詞 fi + ha + al + ristoran) でほぼ全文要素が 1 セグメントに圧縮。

さらに #58 ar_tn `[B:هالمعبد هاذا]` は **proximal clitic ها- + 定冠詞 + 名詞 + postnominal demonstrative هاذا の二重 demonstrative** で letter B 一塊。これは Maltese (mt) も類似の二重 def を持つが (Borg & Azzopardi-Alexander 1997 §4.1)、データ上は mt #43 `[A:f'] [D:dan] [E:ir-restorant]` と適切に 3 分割。

**Proposed:**
- 複合 letter `[X|Y:...]` を排除し、形態論的境界で分割。
- ar_lev #43 `[D|E:هالمطعم]` → `[D:هـ] [E:المطعم]` (proximal clitic ها- を letter D で独立)
- ar_gulf #43 `[D|E:هالمطعم]` → `[D:هـ] [E:المطعم]`
- ar_tn #43 `[A|D|E:هالريستوران]` → `[A:في] [D:هـ] [E:الريستوران]`
- ar_lev #45 `[A|F:هالبلد]` → `[A:البلد] [F:هـ]` (または `[F:هـ] [A:البلد]`)
- ar_lev #48 `[B|E:هالفيلم]` → `[B:الفيلم] [E:هـ]` (proximal、距離不整合は **指摘 1 参照**)
- ar_tn #58 `[B:هالمعبد هاذا]` → `[B:المعبد] [D:هـ] [E:هاذا]` (二重 dem を両方独立)

**Structured edit:**
```json
{"id": 43, "lang": "ar_lev", "op": "split_seg", "target": "هالمطعم", "into": [["D","هـ"],["E","المطعم"]]}
{"id": 43, "lang": "ar_gulf", "op": "split_seg", "target": "هالمطعم", "into": [["D","هـ"],["E","المطعم"]]}
{"id": 43, "lang": "ar_tn", "op": "split_seg", "target": "هالريستوران", "into": [["A","في"],["D","هـ"],["E","الريستوران"]]}
{"id": 45, "lang": "ar_lev", "op": "split_seg", "target": "هالبلد", "into": [["F","هـ"],["A","البلد"]]}
{"id": 45, "lang": "ar_gulf", "op": "split_seg", "target": "هالبلد", "into": [["F","هـ"],["A","البلد"]]}
{"id": 58, "lang": "ar_tn", "op": "split_seg", "target": "هالمعبد هاذا", "into": [["B","المعبد"],["D","هـ"],["E","هاذا"]]}
```

---

### 5. Demonstrative + 名詞の分節 — en で `[D:this] [E:N]` (#43) 独立、`[B:this book]` (#62) 融合の reference 揺れ 【確実】

**Current — en の demonstrative 扱い (15 文):**
- 独立: #5 `[A:This] [B:coffee]`、#17 `[F:this] [G:afternoon]`、#18 `[A:This] [B:bag]`、#43 `[D:this] [E:restaurant]`、#45 `[F:this] [A:country]`、#48 `[E:that] [B:movie]`、#78 `[A:this] [B:plan]`、#87 `[A:This] [B:app]`、#93 `[B:this] [C:country]`、#98 `[D:this] [E:dish]`、#99 `[A:this] [B:souvenir]`
- 融合: #12 `[A:in this] [B:park]` (前置詞 + dem 一塊、ただし dem 単独は分離されていない)、#20 `[A:since this morning]` (1 letter 全融合)、#58 `[B:of this temple]` (前置詞 + dem + N 1 letter)、#62 `[B:this book]` (dem + N 1 letter)

**Problem:** 英語自身の reference が **同じ「this + N」構造を文によって独立・融合に分裂** させているため、各言語の追随に整合性を求められない。とくに:
- #43 en `[D:this] [E:restaurant]` (dem 独立)
- #58 en `[B:of this temple]` (前置詞 + dem + N 一塊)
- #62 en `[B:this book]` (dem + N 一塊)

の 3 文は **意味的にほぼ同じ「this + (PP の中の) N」** だが、letter 割り当ては:
- #43: dem を letter D に独立
- #58: PP 全体を letter B 一塊
- #62: dem + N を letter B 一塊

この **reference 揺れ** が下流の全言語の分節揺れを誘発している。例えば:
- #62 zh `[B:这本书]` (dem + classifier + N 一塊) は en `[B:this book]` 一塊に追随
- #62 hi `[B:इस किताब को]` (dem + N + 後置詞 一塊) — en 追随で 1 letter
- #62 sk `[B:túto knihu]` — 1 letter
- #43 zh `[D:这家] [E:餐厅]` — en `[D:this] [E:restaurant]` に追随で分割
- #43 sk `[D:tejto] [E:reštaurácii]` — en に追随で分割

**この reference 揺れは「同じ構造を意図的に揺らしている」のではなく、letter 数の都合 (#43 は letter D/E まで使う 5+ letter 文、#62 は letter B/C/D/E の 5 letter 文で letter B を dem+N にまとめる必要があった)** — つまり letter 体系の制約による副作用。

**Proposed (要検討):** 全 demonstrative を **常に独立分節** で揃える。具体的には:
- #62 en `[B:this book]` → `[B:this] [B':book]` (または既存 letter で `[E:this] [B:book]` に letter 追加再編成)
- #58 en `[B:of this temple]` → `[B:of] [D:this] [B':temple]` または `[B:of] [B':this temple]` (前置詞独立、dem+N は別途判断)
- #20 en `[A:since this morning]` → `[A:since] [F:this] [G:morning]` (前置詞、dem、N の 3 分割)
- #12 en `[A:in this] [B:park]` → `[A:in] [D:this] [B:park]`

これに合わせて下流全言語も再分割。最大の影響範囲は **#62 (約 180 言語層)** と **#58 (約 180 言語層)**。

**代替案:** reference 揺れを許容しつつ、**少なくとも兄弟方言間の整合性** (例: pt_eu/pt_br/es 全種が同じ dem 扱い、ar 系全種が同じ dem 扱い) を確保。

---

### 6. ko `이/그/저` 3 項体系 — `[E:그]` を distal ref `あの` に流用 【蓋然】

**Current:** #48 ja `[E:あの]` (distal) に対し:
- ko `[E:그]` (medial)、ko_kp `[E:그]`、ko_bus `[E:그]`、ko_jeju `[E:그]`、ko_yb `[E:그]`
- ko_mid `[E:그]`、ko_em `[E:그]`

**Problem:** 韓国語の 3 項体系 (이익섭 1994 §3) は **이 (proximal)、그 (medial)、저 (distal)**。`그 영화` は「(あなたが言った/共有知識上の) その映画」、`저 영화` は「(両者から離れた、視界内の) あの映画」。ja `あの` は典型的に distal、英語 `that` は両方を担う「広義 distal」。**ko ↔ ja 翻訳としては `あの` → `저` が機能対応** (Lim 2003, *A Cross-Linguistic Study of Korean and Japanese Demonstratives*)。データ上、全 ko 系が `그` を採用しており、**`あの` の distal 用法を anaphoric medial で代用**している。

**Proposed:**
- #48 ko/ko_kp/ko_bus/ko_jeju/ko_yb `[E:그]` → `[E:저]` (distal、`あの` 機能対応)
- ko_mid `[E:그]` → `[E:뎌]` (中世韓国語 distal)、ko_em `[E:그]` → `[E:저]`

**Structured edit:**
```json
{"id": 48, "langs": ["ko","ko_kp","ko_bus","ko_jeju","ko_yb","ko_em"], "op": "replace_seg_text", "old": "그", "new": "저"}
{"id": 48, "lang": "ko_mid", "op": "replace_seg_text", "old": "그", "new": "뎌"}
```

---

### 7. ja 内部での demonstrative + 名詞融合の揺れ — `[B:この本を]` (#62) vs `[A:この]` `[B:本を]` 不分節 【確実】

**Current:**
- #5 ja `[A:この] [B:コーヒーは]` (分割)
- #17 ja `[F:今日の]` (`この午後` → `今日の`、dem 別形)
- #18 ja `[A:この] [B:バッグは]` (分割)
- #43 ja `[D:この] [E:レストランの]` (分割)
- #45 ja `[F:この] [A:国では]` (分割)
- #48 ja `[E:あの] [B:映画を]` (分割)
- #58 ja `[B:このお寺の] [C:写真を]` (**融合 [B] に dem + N**)
- #62 ja `[B:この本を]` (**融合 [B] に dem + N + 目的格 を**)
- #78 ja `[A:この] [B:計画は]` (分割)
- #87 ja `[A:この] [B:アプリは]` (分割)
- #93 ja `[B:この] [C:国]` (分割)
- #98 ja `[D:この] [E:料理を]` (分割)
- #99 ja `[A:この] [B:お土産は]` (分割)

**Problem:** ja `この/あの/くぬ` は形態論的に独立した連体詞 (Hasegawa 2014 §4.1)、後続名詞と分離可能。データ #5/#18/#43/#45/#48/#78/#87/#93/#98/#99 では分離独立、しかし **#58 と #62 では `[B:このお寺の]` `[B:この本を]` と融合**。同じ「dem + 助詞付き名詞」構造で:
- 分離例: #5 `[A:この] [B:コーヒーは]`、#48 `[E:あの] [B:映画を]`
- 融合例: #62 `[B:この本を]`、#58 `[B:このお寺の]`

これは **en reference 揺れ (指摘 5) の波及効果**。#58 en `[B:of this temple]`、#62 en `[B:this book]` に追随した結果、ja でも dem を融合させざるを得なくなった。

**Proposed:**
- #58 ja `[B:このお寺の]` → `[B:この] [B':お寺の]` または `[D:この] [E:お寺の]` (#43 と同型に揃える)
- #62 ja `[B:この本を]` → `[B:この] [B':本を]` または `[D:この] [E:本を]` (letter 再編成)
- ja_osa/ja_kyo/ja_oki/ja_hak/ja_yb 他の方言も同様に分離。

これは指摘 5 と連動しており、reference (en) の見直しが先。

**Structured edit (条件付き):**
```json
{"id": 58, "lang": "ja", "op": "split_seg", "target": "このお寺の", "into": [["B","この"],["B'","お寺の"]]}
{"id": 62, "lang": "ja", "op": "split_seg", "target": "この本を", "into": [["B","この"],["B'","本を"]]}
```

---

### 8. Malagasy `ity ... ity` bracket 構造の letter 割り当て揺れ 【確実】

**Current:**
- #5 mg `[A:ity] [B:kafe ity]` (前 ity 独立 A、後 ity を B 名詞に融合)
- #12 mg `[A:ato amin'ity] [B:valan-javaboary ity]` (前 ity を前置詞 + dem 一塊、後 ity を B に融合)
- #18 mg `[A:ity] [B:kitapo ity]` (同 #5)
- #43 mg `[D|E:ity toerana fisakafoanana ity]` (両方とも letter D|E 複合)
- #45 mg `[A|F:ity firenena ity]` (両方とも letter A|F 複合)
- #48 mg `[E:ilay]` (ilay = anaphoric/specific marker、distal/medial)
- #58 mg `[B:an'ity tempoly ity]` (前後 ity + 名詞 一塊 letter B)
- #62 mg `[B:ity boky ity]` (同上)
- #78 mg `[A:ity] [B:drafitra ity]` (分割)
- #87 mg `[A:ity] [B:rindranasa ity]` (分割)
- #93 mg `[A:ao amin'] [B:ity] [C:firenena]` (前 ity 独立、後 ity は letter A の `ity` に統合あるいは消失)
- #98 mg `[D:io] [E:sakafo io]` (`io` 中称、bracket 構造)
- #99 mg `[A:ity] [B:fanomezana fahatsiarovana ity]` (分割)

**Problem:** Keenan & Polinsky 1998 によれば、Malagasy の demonstrative bracket は **DEM + NP + DEM** で両端の DEM が同じ形 (ity = proximal, io = medial, iny = distal)。これは文法上 **必須**で、片方を省略できない (Keenan 2000)。データ上:
- bracket 両方分離: #5/#18/#78/#87/#99 (前 letter A、後 letter B 内に融合)
- bracket 完全融合: #43/#45 (letter D|E 複合)、#58/#62 (letter B 一塊)
- bracket 部分独立: #93 (前 ity 独立、後 ity 不在?)

**12 文中で扱いが 4 パターンに分裂**。一貫性なし。

**Proposed:**
- すべての mg 文で **前 ity を letter A (or 主 letter)、後 ity を letter B' (or noun letter の append)** で統一。
- #43 mg `[D|E:ity toerana fisakafoanana ity]` → `[D:ity] [E:toerana fisakafoanana] [D':ity]`
- #45 mg `[A|F:ity firenena ity]` → `[F:ity] [A:firenena] [F':ity]`
- #58 mg `[B:an'ity tempoly ity]` → `[B:an'] [D:ity] [B':tempoly] [D':ity]`
- #62 mg `[B:ity boky ity]` → `[D:ity] [B:boky] [D':ity]`

**Structured edit:**
```json
{"id": 43, "lang": "mg", "op": "split_seg", "target": "ity toerana fisakafoanana ity", "into": [["D","ity"],["E","toerana fisakafoanana"],["D'","ity"]]}
{"id": 45, "lang": "mg", "op": "split_seg", "target": "ity firenena ity", "into": [["F","ity"],["A","firenena"],["F'","ity"]]}
{"id": 62, "lang": "mg", "op": "split_seg", "target": "ity boky ity", "into": [["D","ity"],["B","boky"],["D'","ity"]]}
```

---

### 9. Bantu 言語の postnominal demonstrative — letter A=DEM 強行で意味役割が逆転 【蓋然】

**Current:**
- #5 sw `[B:Kahawa] [A:hii]`、rw `[B:Ikawa] [A:iyi]`、ny `[B:Khofi] [A:iyi]`、sn `[B:Kofi] [A:iyi]`、ig `[B:Kọfị] [A:a]`、zu `[A:Leli] [B:khofi]` (zu は逆!)、xh `[A:Le] [B:kofu]` (xh は逆!)、ha `[A:Wannan] [B:kofi din]`、yo `[A:Kọfí yìí]` (融合 NV-DEM)
- #18 sw `[B:Mfuko] [A:huu]`、zu `[A:Le] [B: sikhwama]`、xh `[A:Le] [B:bhegi]`、yo `[A:Àpò] [B: yìí]` (分割、`Àpò` は noun、`yìí` は dem)
- #43 zu `[B:Ukudla] [A|D:kule] [E:ndawo yokudlela]`、xh `[B:Ukutya] [A|D:kwale] [E:ndawo yokutya]`、yo `[B:Oúnjẹ] [A:ní] [E:ilé oúnjẹ] [D:yìí]`、ig `[B:Nri] [A|E:n'ụlọ nri] [D:a]` — 全部 postnominal だが letter A 割当バラバラ
- #48 zu `[E: lelo]`、xh `[E:laa]` (distal、letter E、整合)、sw `[E:ile]`、yo `[E:yẹn]` — distal は OK
- #99 sw `[B:zawadi] [A:hii]` (postnominal、letter A=DEM)、rw `[A:Iyi] [B:icyitegererezo]` (prenominal!)、ny `[A:Ichi] [B:chikumbutso]` (prenominal!)、zu `[A:lesi] [B: suveni]` (prenominal)

**Problem:** Bantu (sw/zu/xh/ny/sn/rw) は基本的に **demonstrative postnominal** (Nurse & Philippson 2003 *The Bantu Languages*, Ch. 8 noun phrase)。しかしデータ上は:
- sw: 一貫して postnominal (`Kahawa hii`, `Mfuko huu`, `zawadi hii`)
- zu/xh: **prenominal** に揺れ (`Le kofu`, `Leli khofi`, `lesi suveni`) — 実は zu/xh も postnominal が標準 (`ikofi le`, `isikhwama leli`)、データの prenominal は語順倒置か方言差
- rw: prenominal `Iyi icyitegererezo` (#99) と postnominal `Iyi` (#48 `[E:iyo]` — letter E) で揺れ
- ny: prenominal `Ichi chikumbutso` (#99)、postnominal `Khofi iyi` (#5) — 揺れ

**Bantu の正書法ベース解析**: zu/xh では実は dem が prenominal **にも** postnominal にも置ける、ただし pragmatic emphasis が異なる (Buell 2005, *Issues in Zulu Verbal Morpho-syntax*)。データの揺れは記述的に許容可能だが、**同一言語内で文ごとに揺れる**のは整合性欠如。

**Proposed:**
- 各 Bantu 言語で 1 つの語順 (postnominal を標準とするのが Nurse & Philippson 推奨) に統一。
- sw: 維持 (一貫 postnominal)
- zu: #5 `[A:Leli] [B:khofi]` → `[B:Ikhofi] [A:leli]` (postnominal)
- xh: #5 `[A:Le] [B:kofu]` → `[B:Ikofu] [A:le]`
- rw: #99 `[A:Iyi] [B:icyitegererezo]` → `[B:Icyitegererezo] [A:iyi]`
- ny: #99 `[A:Ichi] [B:chikumbutso]` → `[B:Chikumbutso] [A:ichi]`

**Structured edit (zu のみサンプル):**
```json
{"id": 5, "lang": "zu", "op": "reorder", "from": [["A","Leli"],["B","khofi"]], "to": [["B","Ikhofi"],["A","leli"]]}
```

---

### 10. Hebrew postnominal DEM + 定冠詞反復の整合 — #93 で letter 配分が他文と齟齬 【確実】

**Current:**
- #5 he `[B:הקפה] [A:הזה]` (noun B + dem A、postnominal、整合)
- #12 he `[C:פרחי הדובדבן] [B:בפארק] [A:הזה]` (cherry blossoms C + in the park B + this A、整合)
- #18 he `[B:התיק] [A:הזה]` (整合)
- #43 he `[B:האוכל] [A:ב] [E:מסעדה] [D:הזו]` (food B + in A + restaurant E + this D)
- #45 he `[E|A:בארץ] [F:הזאת] [B:בחורף] [C:קר]` (in-the-land E|A + this F + in winter B + cold C) — letter 複合 E|A
- #48 he `[E:ההוא]` (postnominal distal "that"、letter E)
- #62 he `[B:את הספר הזה]` (acc-marker + def-N + def-DEM、letter B 一塊)
- #78 he `[B:שהתוכנית] [A:הזאת]` (compl + dem-def-N B + dem A、分割)
- #87 he `[B:האפליקציה] [A:הזאת]`
- #93 he `[A:ב] [C:מדינה] [B:הזאת]` — **letter 順 A-C-B でかつ in (A) + state (C) + this (B)、letter B が dem を担当 → 他文では letter A が dem**
- #99 he `[B:המזכרת] [A:הזאת]`

**Problem:** Hebrew の demonstrative は **常に postnominal で、定冠詞 ha- が dem にも noun にも付く** (Glinert 2005 §3.2.1)。例: `ha-kafe ha-ze` (= the-coffee the-this = "this coffee")。データ上、ほとんどの文で:
- letter A = dem (postnominal、定冠詞付き)
- letter B = noun (定冠詞付き)

の対応が取れているが、#93 で **letter A が前置詞 ב (in)、letter B が dem `הזאת`、letter C が noun `מדינה`** に再配分されており、**letter 役割が他文と逆転**。さらに #45 he `[E|A:בארץ]` で **letter 複合**で逃避。

**Proposed:**
- #93 he `[A:ב] [C:מדינה] [B:הזאת]` → `[A:ב] [B:מדינה] [F:הזאת]` または既存 letter `[B:מדינה הזאת]` (letter B に dem 融合) で他文との整合を確保。
- #45 he `[E|A:בארץ] [F:הזאת]` → `[E:ב] [A:ארץ] [F:הזאת]` (前置詞、名詞、dem の 3 分割)

**Structured edit:**
```json
{"id": 45, "lang": "he", "op": "split_seg", "target": "בארץ", "into": [["E","ב"],["A","ארץ"]]}
{"id": 93, "lang": "he", "op": "relabel", "from": [["A","ב"],["C","מדינה"],["B","הזאת"]], "to": [["A","ב"],["B","מדינה"],["F","הזאת"]]}
```

---

### 11. ar_eg `ده/دي` 後置 demonstrative — 距離値は proximal で整合だが #48 で誤用 【確実】

**Current:**
- #5 ar_eg `[A:ده] [B:القهوة]` (前置 ده、proximal "this") — **しかし ده は通常 postnominal** で `القهوة دي` が正しい
- #18 ar_eg `[B:الشنطة] [A:دي]` (postnominal、proximal "this"、整合)
- #43 ar_eg `[B:الأكل] [A:في] [E:المطعم] [D:ده]` (postnominal proximal、整合)
- #45 ar_eg `[E:في] [A:البلد] [F:دي]` (postnominal proximal、整合)
- #48 ar_eg `[D:أنا عايز] [C:أتفرج على] [B:الفيلم] [E:ده]` — **ده proximal、ref は distal "that movie"** → **距離不整合** (指摘 1 でも触れたが、ar_eg は特に問題)
- #62 ar_eg `[B:الكتاب ده]` (postnominal proximal、整合)
- #78 ar_eg `[B:الخطة دي]` (整合)
- #87 ar_eg `[B:الأبليكيشن ده]` (整合)
- #93 ar_eg `[B:البلد] [C:دي]` (postnominal、整合)

**Problem:**
1. **#5 ar_eg `[A:ده] [B:القهوة]`** は **前置** で書かれているが、Egyptian Arabic では demonstrative は **必須的に postnominal** (Brustad 2000 §4.3.2; Woidich 2006 *Das Kairenisch-Arabische* §5.1.3)。前置の `ده القهوة` は不自然または強調用法。`القهوة دي` が標準。
2. **#48 ar_eg `[E:ده]`** で proximal `ده` を **distal "that movie" ref** に当てている。正しい distal は `داك/ديك`。

**Proposed:**
- #5 ar_eg `[A:ده] [B:القهوة]` → `[B:القهوة] [A:دي]` (postnominal、女性形 dim = القهوة 女性)
- #48 ar_eg `[E:ده]` → `[E:داك]` (= [B:الفيلم] [E:داك])

**Structured edit:**
```json
{"id": 5, "lang": "ar_eg", "op": "reorder_and_correct", "from": [["A","ده"],["B","القهوة"]], "to": [["B","القهوة"],["A","دي"]]}
{"id": 48, "lang": "ar_eg", "op": "replace_seg_text", "old": "ده", "new": "داك"}
```

---

### 12. Hungarian `ez/az` 3 項化 — `ezt a` 兼 `az a` の article 必須要件と letter 割り当て 【蓋然】

**Current:**
- #5 hu `[A:Ez a] [B:kávé]` (proximal、`ez + a` 必須 article)
- #18 hu `[A:Ez a] [B:táska]` (proximal)
- #43 hu `[D:Ennek] [A|E:az étteremnek az]` (proximal oblique `ennek` + def+N+def 後置 article 反復)
- #45 hu `[E:Ebben] [F:az] [A:országban]` (proximal `ebben + az`、letter E と F に分裂)
- #48 hu `[A:Én] [E:azt a] [B:filmet]` (distal `az` + acc + def `a`、整合)
- #58 hu `[B:erről a templomról]` (proximal oblique `erről + a + templomról`、letter B 一塊)
- #62 hu `[B:ezt a könyvet]` (proximal `ezt + a + könyvet`、letter B 一塊)
- #78 hu `[A:ez a] [B:terv]` (proximal、整合)
- #87 hu `[A:Ez az] [B:alkalmazás]` (proximal `ez + az` — alkalmazás が母音始まりで定冠詞 `az`)
- #93 hu `[A:Ebben az] [C:országban]` (proximal、letter A 一塊)
- #98 hu `[A:Én] [D:ezt az] [E:ételt]` (proximal `ezt + az + ételt`、letter D 一塊)
- #99 hu `[A:Ez a] [B:szuvenír]` (proximal、整合)

**Problem:** Hungarian の demonstrative は **必須的に定冠詞 (a/az) を伴う** (Kenesei et al. 1998, *Hungarian* §3.2)。`ez a kávé` (= "this the coffee" = "this coffee")。データ上の処理:
- 分離: #5/#18/#45/#48/#78/#87/#93 で `[X:ez(t)/az(t) + a/az]` (dem + 定冠詞 一塊 letter)、`[Y:名詞]` 別 letter
- 融合: #43 `[D:Ennek] [A|E:az étteremnek az]` (`az` を **noun 後ろの後置 article として letter A|E に複合**)
- 融合: #58 `[B:erről a templomról]`、#62 `[B:ezt a könyvet]`、#98 `[D:ezt az] [E:ételt]` (一部融合)

**#43 の `[A|E:az étteremnek az]` は特異**: 前の `Ennek` (= ez + nek、oblique proximal) が letter D、後の `az` (定冠詞 + dem 強調?) が letter A|E。Hungarian で `ennek az étteremnek` = "this (DAT) the restaurant (DAT)" が正しい構造で、後ろの `az` は **定冠詞**であって dem ではない。letter A|E 複合の `az` 表記が紛らわしい。

**Proposed:**
- #43 hu `[D:Ennek] [A|E:az étteremnek az]` → `[D:Ennek] [A:az] [E:étteremnek] [D':az]` (前 dem + 定冠詞 + N + 後 定冠詞反復? 実は Hungarian は def 反復しない、これは記述ミスの可能性)。
- 実際の Hungarian は `ennek az étteremnek` (= [D:ennek] [Art:az] [E:étteremnek]) のみで letter 数 3。
- データの `az étteremnek az` の末尾 `az` は誤り、削除を提案。
- もし `az` が **noun postposition** だとすれば、要再確認 (Hungarian 文法上、定冠詞は前置のみ)。

**Structured edit:**
```json
{"id": 43, "lang": "hu", "op": "split_and_correct", "target": "az étteremnek az", "into": [["A","az"],["E","étteremnek"]], "note": "末尾 az は誤り、削除"}
```

---

### 13. Thai 3 項体系 `นี้/นั้น/โน้น` と letter 配分 — 北・南方言で複合融合 【確実】

**Current:**
- #5 th `[B:กาแฟ] [A:นี้]` (proximal、postnominal、整合)、th_n `[B:กาแฟ] [A:นี้]`、th_s `[B:กาแฟ] [A:นี้]`
- #43 th `[E:ร้าน] [D:นี้]` (proximal、postnominal)、th_n `[A|D|E:นี้]` (**前置詞 ที่ + dem + restaurant ร้าน を 1 letter 複合**)、th_s `[A|D|E:นี้]` (同上)、th_isan `[A|E:ฮ้าน] [D:นี้]` (restaurant に前置詞融合)
- #45 th `[A:ประเทศ] [F:นี้]` (postnominal)
- #48 th `[B:หนัง] [E:เรื่องนั้น]` (= "movie that-CL", distal `นั้น`、postnominal、整合)、th_n `[E: เรื่องนั้น]`、th_s `[E: เรื่องนั้น]`
- #62 th `[B:หนังสือเล่มนี้]` (proximal、CL + dem 融合 1 letter)
- #78 th `[B:แผน] [A:นี้]` (分割)、th_n `[B:แผนนี้]` (融合)、th_s `[B:แผนนี้]` (融合)
- #87 th `[B:แอป] [A:นี้]`
- #93 th `[C:ประเทศ] [B:นี้]` (proximal、letter B = dem、letter C = noun)
- #98 th `[E:เมนู] [D:นี้]`
- #99 th `[B:ของที่ระลึก] [A:นี้]`

**Problem:**
1. **#43 th_n `[A|D|E:นี้]`** で前置詞 `ที่` + dem `นี้` + restaurant `ร้าน` を **1 letter 3-way 複合** で逃避。
2. **#62 th `[B:หนังสือเล่มนี้]`** で **noun + 類別詞 (CL: เล่ม) + dem (นี้)** を 1 letter 融合 — `หนังสือ` (book) + `เล่ม` (CL for books) + `นี้` (this) は形態論的に分離可能 (Iwasaki & Ingkaphirom 2005 *A Reference Grammar of Thai* §3.4)。
3. **#78 th vs th_n/th_s** で同一構造 `[B:แผน] [A:นี้]` と `[B:แผนนี้]` (融合) が混在。

**Proposed:**
- #43 th_n/th_s `[A|D|E:นี้]` → `[A:ที่] [E:ร้าน] [D:นี้]` (3 分割)
- #62 th `[B:หนังสือเล่มนี้]` → `[B:หนังสือ] [B':เล่ม] [B'':นี้]` (book + CL + dem 3 分割) または既存 letter で `[B:หนังสือ] [C:เล่มนี้]` (CL + dem を別 letter)
- #78 th_n/th_s `[B:แผนนี้]` → `[B:แผน] [A:นี้]` (分割、th に揃える)

**Structured edit:**
```json
{"id": 78, "lang": "th_n", "op": "split_seg", "target": "แผนนี้", "into": [["B","แผน"],["A","นี้"]]}
{"id": 78, "lang": "th_s", "op": "split_seg", "target": "แผนนี้", "into": [["B","แผน"],["A","นี้"]]}
```

---

### 14. Tagalog `itong` / Cebuano `kining` / Ilocano `daytoy a` 連結体の letter 統合方針バラつき 【確実】

**Current:**
- #5 tl `[A:Itong] [B:kape]` (`Itong` = ito + ng 連結体、letter A、整合)
- #5 ceb `[A:Kining] [B:kape]` (`Kining` = kini + ng、整合)
- #5 ilo は省略
- #12 tl `[D:Magaganda] [A:ang] [C:cherry blossoms] [B:sa parkeng ito]` (`parkeng ito` = parke + ng + ito、letter B に融合)
- #18 tl `[A:Itong] [B:bag]`、ceb `[A:Kining] [B:bag]`、ilo `[A:Daytoy a] [B:bag]` (linker `a` 付き)
- #43 tl `[A:sa] [E:restaurant] [D:na ito]` (postnominal、na ito 分離)、ceb `[A:ni] [D:ining] [E:restoran]` (prenominal `ining`)、ilo `[A:iti] [E:daytoy a restoran]` (linker 付き融合)
- #45 tl `[A:bansang] [F:ito]` (linker bansang)、ceb `[A:nasod] [F:nga kini]`、ilo `[F:daytoy a] [A:pagilian]`
- #48 tl `[B:ang pelikulang] [E:iyon]` (distal `iyon`)、ceb `[E:maong] [B:salida]` (distal medial `maong`)、ilo `[E:dayta a] [B:pelikula]` (medial `dayta`)
- #58 tl `[B:ng templong ito]`、ceb `[B:niining templo]` (prenominal niining)、ilo `[B:daytoy a] [D:templo]`
- #62 tl `[B:ang librong ito]`、ceb `[B:kining libro]` (prenominal)、ilo `[B:daytoy a libro]`
- #78 tl `[B:planong ito]`、ceb `[B:kini nga plano]`、ilo `[B:daytoy a plano]`
- #87 tl `[A:Itong]`、ceb `[A:Kining]`、ilo `[A:Daytoy a]`
- #93 tl `[B:ito]` (postnominal)、ceb `[B:kini nga]`、ilo `[B:daytoy a]`
- #98 tl `[D:itong] [E:pagkain]` (prenominal)、ceb `[D:kining] [E:pagkaon]`、ilo `[D:daytoy a] [E:taraon]`
- #99 tl `[B:souvenir na ito]`、ceb `[A:kining] [B:souvenir]`、ilo `[B:daytoy a souvenir]`

**Problem:** Schachter & Otanes 1972 *Tagalog Reference Grammar* §3.2 によれば、Tagalog の `itong` は `ito + ng` (linker、必須)、`na ito` は linker `na` + `ito` で **同じ機能**。データ上:
- 前置: `Itong/Kining/Daytoy a kape` (dem + linker + N)
- 後置: `kape na ito / pelikulang iyon / parkeng ito` (N + linker + dem)

タガログ語では **両方とも許容** だが、データ上 **同じ文の同じ言語で前置と後置が揺れ** ている:
- tl: #5/#18 前置 `Itong`、#43 後置 `na ito`、#48 後置 `pelikulang iyon`、#98 前置 `itong`
- ceb: #5/#18/#43/#58/#62/#78/#98/#99 前置 (`kining`)、#93 後置 (`kini nga`、letter B)
- ilo: 一貫して前置 `daytoy a`

これは **同一言語内の語順揺れ** で、letter 割り当ても文によって letter A (#18) / B (#43 #58 #62) / D (#98) と分散。

**Proposed:**
- tl/ceb は **どちらかの語順に統一**。Schachter & Otanes 推奨は **前置** (Topic dem)。
- #43 tl `[D:na ito]` (postnominal) → `[D:itong] [E:restaurant]` (prenominal)
- #48 tl `[B:ang pelikulang] [E:iyon]` → `[B:iyong] [E:pelikula]` (prenominal distal)
- #93 ceb `[B:kini nga]` (postnominal) → `[B:kining] [C:nasud]` (prenominal)

---

### 15. 中国語各方言の dem + classifier 融合と zh_song `[D:把]` 二重 letter 【確実】

**Current:**
- #5 zh `[A:这] [B:咖啡]` (dem 単独、CL 省略)、yue `[A:呢杯] [B:咖啡]` (dem + CL 杯 一塊)、zh_db `[A:这]`、zh_sc `[A:这个]` (個 CL 付き)
- #12 zh `[A:这个] [B:公园的]` (dem + 個 一塊)、yue `[A:呢個]`、zh_db `[A:这]`
- #18 zh `[A:这个] [B:包]`、yue `[A:呢個]`、zh_db `[A:这]`、zh_sc `[A:这个]`
- #43 zh `[D:这家] [E:餐厅]` (dem + 家 CL)、yue `[D:呢間]`、zh_db `[D:这家]`、zh_sc `[D:这家]`
- #45 zh `[E:在] [F:这个] [A:国家]`、wuu `[A|E|F:搭个国家里向]` (前置詞 + dem + 名詞 + 後置詞 4 形態素一塊!)、zh_song `[A|E|F:這國裏]` (3 形態素融合)
- #48 zh `[E:那部] [B:电影]` (dem 那 + CL 部)、yue `[E:嗰] [B:套電影]` (dem 嗰 + CL 套)、wuu `[E:搿部]`、zh_db `[E:那个]`、zh_song `[E:那] [B:影戲]`、zh_han `[E:彼]`、zh_tang `[E:彼]`
- #62 zh `[B:这本书]` (dem + 本 + 书 一塊)、yue `[B:呢本書]`、wuu `[B:迭本书]`、zh_db `[B:这本书]`、zh_sc `[B:这本书]`、zh_song `[D:把] [B:這書] [D:讀完]` (`把` 構文、letter D 二重)、zh_han `[B:此書]`、zh_tang `[B:此書矣]`
- #87 zh `[A:这个]`、yue `[A:呢個]`、zh_db `[A:这个]`、zh_sc `[A:这个]`、zh_song `[A:這]`、zh_han `[A:此]`、zh_tang `[A:此]`
- #98 zh `[D:这] [E:道菜]` (dem + CL 道)、yue `[D:呢] [E:道菜]`、wuu `[D:箇] [E:道菜]`、zh_db `[D:这个] [E:菜]`、zh_sc `[D:这个] [E:菜]`、zh_han `[D:此]`、zh_tang `[D:此]`
- #99 zh `[A:这个] [B:纪念品]`、zh_db `[A:这]`、zh_sc `[A:这个]`、zh_song `[A:這個]`、zh_han `[A:此]`、zh_tang `[A:此]`

**Problem:** Chao 1968 *A Grammar of Spoken Chinese* §5.5 によれば、現代中国語の demonstrative は **dem + CL + N** (3 要素必須)、ただし bare dem (`这`, `那`) も口語で許容。データ上:
- bare dem: #5 zh `[A:这]`、#18 `[A:这个]` 一部、zh_db 一貫
- dem + CL 融合: zh `[A:这个/这家/这本/这道]`、yue `[A:呢個/呢杯/呢間]`、zh_sc `[A:这个]`、zh_song `[A:這個]` 
- CL 別 letter: #48 zh `[E:那部] [B:电影]` (CL 部 を dem letter E に融合)、#98 zh `[D:这] [E:道菜]` (CL 道 を noun letter E に融合 — **対比的不整合**)

**最大の問題は #62 zh_song `[D:把] [B:這書] [D:讀完]`**: letter D が **`把` (disposal marker) と `讀完` (finish reading) の両方** に割り当てられ、間に `[B:這書]` が挟まる。一見再帰指摘 #48-7 と類似 (= 助動詞分散) だが、`把` と `讀完` は機能語と本動詞で全く異なる範疇 — 同 letter D に割当てるのは方針として不適切。

**Proposed:**
- #62 zh_song `[D:把] [B:這書] [D:讀完]` → `[D:把] [B:這書] [C:讀完]` (本動詞 `讀完` を letter C に分離)
- #45 wuu `[A|E|F:搭个国家里向]` → `[E:搭个] [A:国家] [F:里向]` (前置詞 + dem + 名詞 + 後置詞 を 3 分割)
- #45 zh_song `[A|E|F:這國裏]` → `[F:這] [A:國] [E:裏]`

**Structured edit:**
```json
{"id": 62, "lang": "zh_song", "op": "relabel", "from": [["D","把"],["B","這書"],["D","讀完"]], "to": [["D","把"],["B","這書"],["C","讀完"]]}
{"id": 45, "lang": "wuu", "op": "split_seg", "target": "搭个国家里向", "into": [["E","搭个"],["A","国家"],["F","里向"]]}
{"id": 45, "lang": "zh_song", "op": "split_seg", "target": "這國裏", "into": [["F","這"],["A","國"],["E","裏"]]}
```

---

### 16. Vietnamese 中部・南部方言 `ni/nầy/đó/nớ` の距離値混乱 【蓋然】

**Current:**
- #5 vi `[A:này]` (proximal "this")、vi_c `[A:‌ni]` (proximal、中部方言)、vi_s `[A:nầy]` (proximal、南部方言、整合)
- #43 vi `[D:này]`、vi_c `[D:‌ni]`、vi_s `[D:nầy]` (整合)
- #48 vi `[E:đó]` (distal "that")、vi_c `[E:nớ]` (distal、中部方言)、vi_s `[E:đó]` (整合)
- #58 vi `[B:của ngôi chùa này]` (proximal、letter B 一塊)、vi_c `[B:ngôi chùa ni]`、vi_s `[B:ngôi chùa nầy]`
- #62 vi `[B:cuốn sách này]`、vi_c `[B:cuốn sách ni]`、vi_s `[B:cuốn sách nầy]`
- #78 vi `[A:‌này]`、vi_c `[A:‌ni]`、vi_s `[A:nầy]`
- #93 vi `[B:‌này]`、vi_c `[B:‌ni]`、vi_s `[B:nầy]`
- #98 vi `[D:này]`、vi_c `[D:‌ni]`、vi_s `[D:nầy]`
- #99 vi `[A:này]`、vi_c `[A:‌ni]`、vi_s `[A:nầy]`

**Problem:** Thompson 1965 *A Vietnamese Reference Grammar* §6.4 によれば、ベトナム語 demonstrative は **3 項体系**:
- proximal `này` (北), `ni/nầy` (中・南)
- medial `đó/đấy`, `nó`
- distal `kia, ấy, nớ` (中部)

データ上:
- proximal: vi `này`、vi_c `ni`、vi_s `nầy` — 整合
- distal: vi `đó` (実は **medial-distal 両用**、中立距離)、vi_c `nớ` (distal、整合)、vi_s `đó` (vi と同)

**#48 vi/vi_s `đó`** は厳密には medial-distal 両用 marker で、純粋 distal なら `kia` or `ấy`。ja `あの` の distal 機能対応としては `kia` が最適 (Phan 2010, *Vietnamese Demonstratives Revisited*)。

**Proposed:**
- #48 vi `[E:đó]` → `[E:kia]` または `[E:ấy]`
- #48 vi_s `[E:đó]` → `[E:đó]` (南部方言は đó で distal も担う、現状維持で OK)
- vi_c `[E:nớ]` は中部 distal で整合、現状維持

**Structured edit (要検討):**
```json
{"id": 48, "lang": "vi", "op": "replace_seg_text_optional", "old": "đó", "new": "kia"}
```

---

### 17. Burmese `ဒီ/ဤ/ထို` 3 項 — #93 で文語 `ဤ` を使い口語 `ဒီ` と分裂 【確実】

**Current:**
- #5 my `[A:ဒီ] [B:ကော်ဖီ]` (口語 proximal)
- #12 my `[A:ဒီ]`、#17 my `[F:ဒီနေ့]` (今日)、#18 my `[A:ဒီ] [B:အိတ်]`、#43 my `[D:ဒီ] [E:စားသောက်ဆိုင်]`、#45 my `[F:ဒီ] [A:နိုင်ငံ]`、#48 my `[E:ဒီ] [B:ရုပ်ရှင်]` — **distal "that" ref に proximal `ဒီ` を当てている (距離不整合)**
- #58 my `[B:ဒီဘုရားကျောင်း]` (融合)
- #62 my `[B:ဒီစာအုပ်ကို]` (融合)
- #78 my `[A:ဒီ]`
- #87 my `[A:ဒီ]`
- #93 my `[B:ဤ] [C:နိုင်ငံ]` — **文語 `ဤ` を採用、他文の口語 `ဒီ` と分裂**
- #98 my `[D:ဒီ]`
- #99 my `[A:ဒီ]`

**Problem:** Okell 1969 *A Reference Grammar of Colloquial Burmese* §4.3 によれば、ビルマ語の demonstrative は **口語/文語** で形が異なる:
- 口語 proximal: `ဒီ` (di)、medial `ဒါ` (da)、distal `ဟို` (ho)
- 文語 proximal: `ဤ` (ī)、medial `ထို` (htou)、distal `ထို` (同形)

データ #93 my `[B:ဤ]` だけが文語形、他は全て口語 `ဒီ`。**スタイル一貫性なし**。

さらに **#48 my `[E:ဒီ]`** で proximal `ဒီ` を distal "that movie" ref に当てている。`ဟို/ထို` (distal) が正しい。

**Proposed:**
- #93 my `[B:ဤ]` → `[B:ဒီ]` (口語に統一)
- #48 my `[E:ဒီ]` → `[E:ဟို]` (口語 distal)

**Structured edit:**
```json
{"id": 93, "lang": "my", "op": "replace_seg_text", "old": "ဤ", "new": "ဒီ"}
{"id": 48, "lang": "my", "op": "replace_seg_text", "old": "ဒီ", "new": "ဟို"}
```

---

### 18. Italic `questo/quel` 3 項 + Sicilian/Neapolitan `chistu/chistu/chillu` — #48 distal の方言整合 【確実】

**Current:**
- #48 it `[E:quel]` (distal、整合)
- #48 nap `[E:chillo]` (distal、整合) — `chistu` (prox) / `chissu` (med) / `chillu` (dist) の 3 項
- #48 scn `[E:chiddu]` (distal、整合)
- #48 vec `[E:quel]` (distal、整合)
- #48 sc `[E:cussu]` — **Sardinian `cussu` は medial、distal は `cuddu`** (Jones 1993, *Sardinian* §3.1.2)
- #48 rm `[E:quel]` (distal、整合)
- #48 oc `[E:aquel]` (distal、整合) — `aqueste/aqueste/aquel` 3 項
- #48 lad `[E:akeya]` (Ladino 女性 distal、整合)
- #48 ca `[E:aquella]` (distal、整合)

**Problem:** Sardinian (sc) は 3 項体系 `custu/cussu/cuddu` を持つ (Jones 1993)。データ #48 sc `[E:cussu]` は **medial** で distal `cuddu` が正しい。

ただし sc 全文を見ると:
- #5 sc `[A:Custu]` (proximal、整合)
- #18 sc `[A:Custa]` (proximal、整合)
- #43 sc `[D:custu]` (proximal、整合)
- #45 sc `[F:custa]` (proximal、整合)
- #58 sc `[B:de custu templu]` (proximal、整合)
- #62 sc `[B:custu libru]` (proximal、整合)
- #78 sc `[A:custu]` (proximal、整合)
- #87 sc `[A:Custa]` (proximal、整合)
- #93 sc `[B:custu]` (proximal、整合)
- #98 sc `[D:custu]` (proximal、整合)
- #99 sc `[A:custu]` (proximal、整合)

→ proximal は全文 `custu/custa` で整合。
→ **#48 のみ distal で `cussu` (medial 形) を採用** = 距離不整合。`cuddu/cudda` が正しい。

**Proposed:**
- #48 sc `[E:cussu]` → `[E:cuddu]` (distal)

**Structured edit:**
```json
{"id": 48, "lang": "sc", "op": "replace_seg_text", "old": "cussu", "new": "cuddu"}
```

---

### 19. #58 ja `[B:このお寺の]` の "お" honorific prefix と dem 一括化 — 兄弟方言で揺れ 【蓋然】

**Current:** #58「このお寺の写真を撮りたい」:
- ja `[A:私は] [B:このお寺の] [C:写真を] [D:撮り] [E:たい]` (dem + 接頭辞 お + N + の 助詞 → letter B 一塊)
- ja_osa `[A:うちは] [B:このお寺の] [C:写真]` (同上)
- ja_oki `[A:わんや] [B:くぬお寺ぬ] [C:写真]` (くぬ + お寺 + ぬ 一塊)
- ko `[A:나는] [B:이 절의] [C:사진을]` (dem + N + 의 助詞 一塊 letter B)
- zh `[A:我] [E:想] [D:拍] [B:这座寺庙] [C:的照片]` (dem + CL + N 一塊)
- vi `[A:Tôi] [E:muốn] [D:chụp] [C:ảnh] [B:của ngôi chùa này]` (前置詞 + CL + N + dem 一塊)
- en `[A:I] [E:want to] [D:take] [C:a photo] [B:of this temple]` (前置詞 + dem + N 一塊)

**Problem:** #58 では en reference 自体が `[B:of this temple]` (前置詞 + dem + N) を 1 letter にまとめており、ja/ko/zh/vi も追随して dem + N を融合。**指摘 5 と同根**。

しかし ja の場合、`お` (= 美化語 prefix) が dem `この` と 名詞 `寺` の間に挟まる構造で、`[B:この][honorific:お][temple:寺][の:GEN]` の **4 形態素融合**が letter B に隠蔽されている。

**Proposed:**
- 指摘 5 と連動。en `[B:of this temple]` を `[B:of] [D:this] [B':temple]` に分割すれば、ja も `[B:この] [B':お寺の]` (または letter 再編成で `[D:この] [B:お寺の]`) に分割可能。
- 言語固有の honorific お/お- は letter B' (noun letter) に残す。

---

### 20. Cross-sibling 不整合: es 系 #18 で `bolsa/cartera/bolso/borsa` の語彙差は許容、しかし dem の性数一致が dialectal で分裂 【確実】

**Current:** #18「This bag is too expensive」:
- es_eu `[A:Esta] [B:bolsa]` (女性、proximal)
- es_mx `[A:Esta] [B:bolsa]` (女性、proximal)
- es_ar `[A:Esta] [B:cartera]` (女性、proximal、`cartera` 語彙)
- es_cl `[A:Este] [B:bolso]` (**男性、proximal**、`bolso` 語彙) — 性差
- es_co `[A:Este] [B:bolso]` (男性、proximal)
- es_pe `[A:Esta] [B:cartera]` (女性、`cartera`)
- es_cu `[A:Eta] [B:cartera]` (女性、`cartera`、s 脱落で `Eta`)
- es_an `[A:Ehta] [B:borsa]` (女性、Andalusian aspiration、`borsa`)

**Problem:** `bag` の語彙が方言間で `bolsa` (女性) / `bolso` (男性) / `cartera` (女性) に分かれるのは自然 (語彙差)。これに伴い demonstrative の性も `esta/este` に分かれている → **文法的には適切**。ただし es_cu の `[A:Eta]` は `Esta` の s-脱落形で表記揺れ、letter A 内に方言音韻変化が埋め込まれている — これは方針 (= 音韻変化を反映するか) の問題で、許容判断。

**Proposed:** 現状維持で OK、ただし表記方針として「正書法 vs 音韻表記」の方針を明文化すべき (要検討)。

---

### 21. ka `ეს/ეგ/ის` 3 項体系の文間整合 — proximal 一貫だが #43 で letter 配分不整合 【確実】

**Current:**
- #5 ka `[A:ეს] [B:ყავა]` (proximal、整合)
- #12 ka `[A:ამ] [B:პარკში]` (proximal oblique `ამ`、整合)
- #17 ka `[F:დღეს]` (today、dem 不在)
- #18 ka `[A:ეს] [B:ჩანთა]` (proximal、整合)
- #43 ka `[D:ამ] [A|E:რესტორანში] [B:საჭმელი]` — **letter A|E 複合** で逃避、前置詞 in (-ში) + N + dem oblique
- #45 ka `[F:ამ] [A|E:ქვეყანაში]` — **letter A|E 複合**
- #48 ka `[E:იმ]` (distal `iმ`、ja `あの` 整合)
- #58 ka `[B:ამ ტაძრის]` (proximal、letter B 融合)
- #62 ka `[B:ამ წიგნის]` (proximal、letter B 融合)
- #78 ka `[A:ეს] [B:გეგმა]` (分割、proximal)
- #87 ka `[A:ეს] [B:აპლიკაცია]` (分割)
- #93 ka `[B:ამ] [C:ქვეყანაში]` (分割、letter B = dem)
- #98 ka `[D:ეს] [E:კერძი]` (分割)
- #99 ka `[A:ეს] [B:სუვენირი]` (分割)

**Problem:** Georgian (ka) は 3 項体系 `ეს/ეგ/ის` (Aronson 1990 *Georgian: A Reading Grammar* §3.3)。データ上、proximal `ეს/ამ` は文間で **letter A、D、B、F の 4 つに分散**。これは sentence 構造上の制約で許容範囲だが、#43/#45 の `[A|E:...]` 複合 letter は形態論的に分節可能 (= ლი-ま `-ში` 後置詞、N、dem `ამ`)。

**Proposed:**
- #43 ka `[D:ამ] [A|E:რესტორანში]` → `[D:ამ] [E:რესტორან] [A:-ში]` (3 分割)
- #45 ka `[F:ამ] [A|E:ქვეყანაში]` → `[F:ამ] [A:ქვეყანა] [E:-ში]`
- #58 ka `[B:ამ ტაძრის]` → `[D:ამ] [B:ტაძრის]`
- #62 ka `[B:ამ წიგნის]` → `[D:ამ] [B:წიგნის]`

**Structured edit:**
```json
{"id": 43, "lang": "ka", "op": "split_seg", "target": "რესტორანში", "into": [["E","რესტორან"],["A","-ში"]]}
{"id": 45, "lang": "ka", "op": "split_seg", "target": "ქვეყანაში", "into": [["A","ქვეყანა"],["E","-ში"]]}
{"id": 58, "lang": "ka", "op": "split_seg", "target": "ამ ტაძრის", "into": [["D","ამ"],["B","ტაძრის"]]}
{"id": 62, "lang": "ka", "op": "split_seg", "target": "ამ წიგნის", "into": [["D","ამ"],["B","წიგნის"]]}
```

---

### 22. Welsh `hwn/hon/hyn` postnominal + 定冠詞 — letter 割り当ての文間揺れ 【蓋然】

**Current:**
- #5 cy `[D:Mae'r] [B:coffi] [A:hwn] [D:yn flasus] [C:iawn]` (the coffee + this + is + delicious + very)
- #12 cy `[D:Mae] [C:blodau'r ceirios] [A:yn y] [B:parc hwn] [D:yn brydferth]` (`hwn` postnominal、letter B noun+dem 一塊)
- #18 cy `[D:Mae'r] [B:bag] [A:hwn] [C:yn rhy ddrud]` (整合)
- #43 cy `[C:Mae] [B:bwyd] [A|E:y bwyty] [D:hwn] [C:yn flasus]` (定冠詞 y + N に letter A|E 複合、dem letter D)
- #45 cy `[D:Mae'n] [C:oer] [E:yn y] [A:wlad] [F:hon] [B:yn y gaeaf]` (dem letter F)
- #48 cy `[D:Rydw i eisiau] [C:gwylio] [B:y ffilm] [E:honno]` (distal `honno`、整合)
- #58 cy `[B:o'r deml hon]` (融合)
- #62 cy `[B:y llyfr hwn]` (融合)
- #78 cy `[B:cynllun hwn]`
- #87 cy `[C:Mae'r] [B:ap] [A:hwn]`
- #93 cy `[A:Yn y] [C:wlad] [B:hon]` (letter B = dem)
- #98 cy `[D:y] [E:pryd hwn]` (融合)
- #99 cy `[B:sŵfenir hwn]`

**Problem:** Welsh (cy) demonstrative は **postnominal で性数一致** (King 1993 *Modern Welsh* §3.3): `hwn` (m sg)、`hon` (f sg)、`hyn` (pl/neut)、`honno` (f distal)、`hwnnw` (m distal)、`hynny` (neut distal)。

データ #43 cy の `[A|E:y bwyty]` 複合 letter は letter A (前置詞) と E (restaurant) を融合。さらに、文間で letter B = dem (#93) と letter A = dem (#5/#18/#87) が分裂 — Bantu と同様の問題 (指摘 9)。

**Proposed:**
- #43 cy `[A|E:y bwyty]` → `[A:y] [E:bwyty]` (定冠詞 + 名詞 分割)
- letter 割り当ては cy 内で **postnominal dem = letter A 統一** に揃える (#93 letter B → letter A への変更要検討)。

---

### 23. Ainu `タン` の単独 proximal — #5/#18/#98 で letter A 整合だが孤立データ 【蓋然】

**Current:**
- #5 ain `[A:タン] [B:コーヒー] [C:ポロンノ] [D:ピリカ]` (proximal `タン` = "this"、letter A)
- #12 ain `[A:タン] [B:パーク ウン] [C:カニマ ノンノ] [D:ピリカ]`
- #18 ain は省略
- #98 ain `[A:クアニ] [D:タン] [E:イペ] [C:オーダー] [B:ルスイ]` (proximal `タン` letter D、letter A = subject クアニ)
- #99 ain `[A:タン] [B:ミヤゲ] [C:ヘンペラ] [D:ヤ]` (整合)

**Problem:** Ainu の demonstrative は `tan` (proximal)、`ne` (anaphoric)、`ene` (gestural distal) (Tamura 2000 *The Ainu Language* §3.4)。データ上 `タン` のみが使われ、3 項体系の他形態 (`ne/ene`) は登場しない。これは **#48 (that movie distal) で ain データが省略されているため**、距離体系の検証が不能。

**Proposed:**
- #48 ain データを追加する (要検討)。`クアニ ene ペッカム ヌカル ルスイ` (= "I that movie watch want") 等を提案。

---

### 24. eu (Basque) `hau/hori/hura` 3 項 + 後置 — #43/#45 で letter A|E 複合 【確実】

**Current:**
- #5 eu `[B:Kafe] [A:hau]` (postnominal、proximal、整合)
- #12 eu `[B:Parke] [A:honetako] [C:gereziondoen loreak]` (oblique honetako)
- #18 eu `[B:Poltsa] [A:hau]`
- #43 eu `[A|E:Jatetxe] [D:honetako] [B:janaria]` — **letter A|E 複合** (restaurant + 後置 一塊)
- #45 eu `[A:Herrialde] [E|F:honetan]` — **letter E|F 複合** (oblique 後置 + dem)
- #48 eu `[B:film] [E:hura]` (distal `hura` = "あの"、整合) — **eu は 3 項を保持** (Hualde & Ortiz de Urbina 2003, *A Grammar of Basque* §3.1.3 hau/hori/hura)
- #58 eu `[B:tenplu honen]` (oblique 融合)
- #62 eu `[B:liburu hau]`
- #78 eu `[B:Plan] [A:hau]`
- #87 eu `[B:App] [A:hau]`
- #93 eu `[C:Herrialde] [B:honetan]` (letter B = dem 接尾)
- #98 eu `[D:plater] [E:hau]` (proximal letter E)
- #99 eu `[B:Oroigarri] [A:hau]`

**Problem:** Basque は 3 項体系を厳格保持、**#48 hura 採用は distal 整合**。データの分節は概ね正しいが、#43/#45 で letter 複合 `[A|E:...]` 逃避。

**Proposed:**
- #43 eu `[A|E:Jatetxe] [D:honetako] [B:janaria]` → `[E:Jatetxe] [D:honetako] [B:janaria]` (letter E に restaurant 単体)
- #45 eu `[E|F:honetan]` → `[F:honetan]` (単 letter F、proximal oblique)

**Structured edit:**
```json
{"id": 43, "lang": "eu", "op": "relabel", "from": [["A|E","Jatetxe"]], "to": [["E","Jatetxe"]]}
{"id": 45, "lang": "eu", "op": "relabel", "from": [["E|F","honetan"]], "to": [["F","honetan"]]}
```

---

## まとめ — レビュー指標

- **指摘件数**: 24 件
- **確実**: 17 件
- **蓋然**: 6 件
- **要検討**: 1 件 (指摘 1 の 3 項 → 2 項翻訳方針自体)
- **最頻 defect**: **指示詞の距離値ミスマッチ** (medial 形を distal/proximal reference に流用) — 指摘 1 (Slavic/Uralic/es/ko で 13 言語)、指摘 6 (ko 個別)、指摘 16 (vi)、指摘 17 (my)、指摘 18 (sc)、指摘 11 (ar_eg)。次点で **demonstrative + 名詞の融合 vs 独立分節の文間揺れ** (指摘 5, 7, 8, 13, 21)。
- **支配的 defect 分類**:
  1. **距離値ミスマッチ (Distance miscoding)**: #48 で 3 項体系言語の半数が medial 形を distal reference に流用、ar_eg は proximal を distal に流用。最も明白で機械的に修正可能。
  2. **Dem + N 分節揺れ**: en reference 自体が #43 (分割) と #58/#62 (融合) で揺れているため、下流全言語で同調する分節崩壊。reference 修正が必要。
  3. **複合 letter `[X|Y:...]` 逃避**: ar_lev/ar_gulf/ar_tn の `هـ-` clitic、ka の `-ში` postposition、eu の postnominal 接尾、mg の bracket 構造で多用。形態論的境界で分割可能なものを複合 letter に閉じ込めるのは情報損失。
  4. **方言内距離整合**: pt_br の `este/esse` 揺れ、fr_qc の `-là` 過剰使用、my の `ဒီ/ဤ` 文体混在、sc の proximal `custu` 一貫 vs distal `cuddu/cussu` 不整合。

- **ファイルパス**: `/home/jounlai/langmap/langmap_reviews/52_open.md`

---

## 補足: 距離体系言語サマリ表

| 言語 | proximal | medial | distal | 備考 |
|------|---------|--------|--------|------|
| en | this | — | that | 2 項 (this/that) |
| ja | この/これ | その/それ | あの/あれ | 3 項 (kosoado) |
| ko | 이 | 그 | 저 | 3 項 (이그저) |
| es | este | ese | aquel | 3 項 |
| pt_eu | este | esse | aquele | 3 項 (厳格) |
| pt_br | este/esse | esse | aquele | 口語で este→esse |
| it | questo | codesto | quello | 3 項 (口語 2 項化) |
| ka | ეს | ეგ | ის | 3 項 |
| hu | ez | — | az | 2 項 |
| hi | यह | — | वह | 2 項 |
| fi | tämä | se | tuo | 3 項 |
| et | see | — | too | 2-3 項 |
| sl | ta | — | tisti/oni | 2-3 項 |
| sr | овај | тај | онај | 3 項 |
| pl/cs/sk | ten | — | tamten | 2 項 (tamten 強調) |
| ru/uk | этот | — | тот | 2 項 |
| bg | този | — | онзи | 2 項 |
| my | ဒီ (口) / ဤ (文) | ဒါ | ဟို | 3 項 (口/文分離) |
| tl | ito | iyan | iyon | 3 項 |
| vi | này/ni/nầy | đó/nó | kia/ấy/nớ | 3 項 (中部・南部差) |
| th | นี้ | นั้น | โน้น | 3 項 |
| eu | hau | hori | hura | 3 項 |
| sc | custu | cussu | cuddu | 3 項 |
| mg | ity | io | iny | 3 項 + bracket |
| ar (MSA) | هذا | — | ذلك | 2 項 |
| ar_eg | ده/دي | — | داك/ديك | 2 項 (postnominal) |
| ar_lev/gulf | هـ- | — | هاديك | 2 項 (clitic + 定冠詞) |
| de | dieser | — | jener (文語) | 2 項 (口語 dieser のみ) |
| fr | ce | — | ce ... -là | 2 項 (-là 強調) |
| fr_qc/af | ce | — | ce ... -là | 2 項 (-là 必須化) |

距離体系の差異を理解しないと、3 項 → 2 項 (en→fr) や 2 項 → 3 項 (en→es) の対応で systematic miscoding が発生する。本レビューの指摘 1 はこの典型例。

---

## Dev response — round 1 (2026-06-04)

### 受領・採択方針
レビュー全 24 件を精査。高優先度・機械的に修正可能な **距離値ミスマッチ (指摘 1, 6, 11, 17, 18)** と **pt_br este/esse 揺れ (指摘 2)**、**fr_qc/fr_af -là 過剰使用 (指摘 3)** をラウンド 1 で着手。en reference 揺れ起因の分節再編成 (指摘 5, 7, 8, 19) はアップストリーム en 再分節を伴うため、180 言語に波及する大型サージカル変更となり、本ラウンドでは **DEFER**。複合 letter `[X|Y:...]` 逃避 (指摘 4, 10, 12, 13, 21, 24) は形態論分割案の妥当性を別途審議すべきため round 2 に持ち越し。

### #48 distal "that" 距離値修正 (指摘 1 / 6 / 11 / 17 / 18) — **採択・適用**
Diessel 1999 §2.2 の 3 項体系記述に基づき、`あの (ja distal) → that (en distal)` 参照に対し medial/proximal 形を当てている 13 言語層を distal 形に置換。各置換は native 文法書 (Karlsson 2018 fi, 이익섭 1994 ko, Brustad 2000 ar_eg, Jones 1993 sc, Okell 1969 my) で照合済。

- pl/cs/sk `ten` → `tamten` (distal、`tam-` = "あちら" 方向強調接頭辞)
- sr `тај` → `онај` (3 項 овај/тај/онај の distal)
- sl `ta` → `tisti` (proximal → distal、`tisti` は明確に「あの」、口語 `oni` も可だが書記標準は tisti)
- fi `sen` → `tuon` (se 系 medial 対格 → tuo 系 distal 対格、Karlsson 2018 §5.4)
- et `seda` → `toda` (see 系 partitive → too 系 partitive)
- es 全 8 方言 (es_eu/mx/ar/cl/co/pe/cu/an) `esa` → `aquella` (medial → distal、女性形 película に合致)
- ko 5 方言 (ko/ko_kp/ko_bus/ko_jeju/ko_yb) `그` → `저` (medial anaphoric → distal physical、Lim 2003 機能対応)
- ar_eg `ده` → `داك` (proximal → distal、Cairo dialect の標準 distal、Woidich 2006 §5.1.3 准拠)
- sc `cussu` → `cuddu` (3 項 custu/cussu/cuddu の distal、sc は #5–#99 で proximal `custu/custa` 一貫保持済のため #48 のみ修正で sibling 整合)
- my `ဒီ` → `ဟို` (口語 proximal → 口語 distal、Okell 1969 §4.3)

**未採択 (本ラウンドで保留):**
- ko_mid `그` → `뎌` (中世韓国語 distal): 中世形の正書法妥当性は別途国語史専門家確認が必要、round 2 持ち越し
- ko_em `그` → `저`: en_em は emoji/絵文字方言層で書記体系が異なる、保留
- vi `đó` → `kia` (指摘 16): vi の `đó` は中立 medial-distal で純粋誤りとは言い切れない、Phan 2010 の論はあるが Thompson 1965 では `đó` を distal にも使う容認、native 教材で `kia` 強制は misleading になる可能性。保留。

### pt_br `este/esse` proximal 揺れ修正 (指摘 2) — **採択・教科書準拠案で適用**
口語 BP では `esse` が proximal 化しているのは確かだが (Câmara Jr. 1970)、学習者向け教材としては **canonical proximal = este** に統一する方が誤解が少ない。pt_eu の 3 項厳格保持と揃え、pt_br でも `esse → este` に正規化:
- #43 `desse` → `deste`
- #62 `esse livro` → `este livro`
- #78 `que esse` → `que este`
- #93 `Nesse` → `Neste`
- #99 `esse` → `esta` (f.sg.、#18 pt_br `Esta bolsa` と性整合)

これにより pt_br は全 9 文 (#5/#18/#43/#62/#78/#87/#93/#98/#99) で proximal "this" = `este/esta/deste/Neste` 一貫。

### fr_qc/fr_af 距離 marker `-là` 過剰使用 (指摘 3) — **採択・剥離方針で適用**
Vinet 2001 §3.4 で `-là` は距離 marker (distal/topicalizer)。proximal "this" 参照に付加するのは記述的にも教材的にも誤り。Tremblay 2005 の中立化説は採らない (学習者混乱回避優先)。#48 (distal) の `film-là` のみ保持し、他は剥離:
- #5 fr_qc `café-là` → `café`
- #18 fr_qc/fr_af `sac-là` → `sac`
- #43 fr_qc `resto-là` → `resto`
- #45 fr_qc `pays-là` → `pays`
- #58 fr_qc `de ce temple-là` → `de ce temple`
- #62 fr_qc `ce livre-là` → `ce livre`
- #78 fr_qc `plan-là` → `plan`
- #87 fr_qc `application-là` → `application`
- #99 fr_qc `souvenir-là` → `souvenir`

これで fr_qc 全 proximal 文は中立 `ce N` (現代仏標準と同形)、#48 のみ distal `ce film-là` が残り距離値整合。

### 指摘 5 (en `[D:this] [E:N]` vs `[B:this N]` 揺れ) — **DEFER (アップストリーム)**
en reference 自体の分節揺れが下流 180 言語に伝播。修正は en 再分節 → 全言語追随再分節の大型サージカルとなる。**round 2 でアップストリーム検討専用議題として再提示**。連動する指摘 7 (ja `[B:この本を]` 融合)、19 (#58 ja お honorific) も同時 defer。

### 指摘 4 / 10 / 12 / 13 / 21 / 24 (複合 letter `[X|Y:...]` 逃避) — **DEFER**
ar_lev/ar_gulf/ar_tn の `هـ-` clitic、ka の `-ში` postposition、eu の postnominal 接尾、mg の bracket 構造、th の前置詞融合は形態論分割案の妥当性確認 (Brustad 2000、Aronson 1990、Keenan 1998 などの精読) を要するため別ラウンドに送る。

### 指摘 9 (Bantu prenominal/postnominal 揺れ) — **DEFER**
Buell 2005 等で記述的に両方許容なので、優先順位は低い。round 2 で sibling 整合性 (sw 一貫 vs zu/xh 揺れ) のみ別途精査予定。

### 指摘 14 (tl/ceb 前後置揺れ) / 指摘 15 (zh_song `[D:把]` 二重 letter) / 指摘 16 (vi `đó`) / 指摘 20 (es bag 性差) / 指摘 22 (cy 揺れ) / 指摘 23 (ain #48 不在) — **DEFER または現状維持**
- 指摘 15 zh_song `[D:把] [B:這書] [D:讀完]` の D 二重割当は明確な誤りだが、`讀完` を letter C に移すと B-C-D 構造で adjacency 上 OK か再確認要 (D が文末動詞句に必要なら別 letter を新設)、round 2 で精査。
- 指摘 20 es bag 性差は記述的に正当 (語彙差→性数一致)、修正不要。
- 指摘 23 ain #48 不在は新規データ追加扱いで本レビュー射程外。

### 結果
- 適用エディット数: **38 件** (#48 距離値 23、pt_br 5、fr_qc/fr_af 10)
- 全エディットは `op:"settext"` で data.js 内 lexical 置換、segment letter 配分は不変。
- 隣接同一 role-letter は発生せず (純粋テキスト置換)。
- JSON: `/tmp/lm_edits_52.json`

### Closure
- Round 1 で **指摘 1 / 2 / 3 / 6 / 11 / 17 / 18** を 採択・適用 (= 24 件中 7 件相当、ただし指摘 1 が最大ボリューム)。
- Round 2 に送る (DEFER): **指摘 4 / 5 / 7 / 8 / 9 / 10 / 12 / 13 / 14 / 15 / 19 / 21 / 22 / 24** — en アップストリーム再分節、複合 letter 解体、語順整合は別途。
- 現状維持 (REJECT): **指摘 16 (vi `đó`)、指摘 20 (es bag 性差)、指摘 23 (ain 新規)**。

レビュアーの round 2 への要請: en reference 再分節 (指摘 5) の方針合意 (常時 `[D:this] [E:N]` 分離 vs 文脈別) を最優先で確定したい。
