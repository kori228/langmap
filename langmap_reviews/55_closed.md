# LangMap データレビュー #55 — 欧州主要言語の自然性監査・英語起源カルク (calque) 検出

## レビュアー自己紹介 (ペルソナ)

Maja Ostrowska-Lefebvre (handle: **@calque_hunter_mol**)。ルーヴェン・カトリック大学翻訳学博士、博士論文 "Translation Universals in European Subtitling: A Multilingual Corpus Study of Calque, Explicitation and Pro-Drop Erosion" (Sara Laviosa 副査)。母語ポーランド語、第二語フランス語 (パリ16年居住、CEFR C2)、第三語スペイン語 (マドリード長期滞在、C2)、第四語イタリア語 (DELI C2)、第五語ロシア語 (MGU 言語学研修 2 年)、第六語ドイツ語 (C1)。常用文献は Mauranen & Kujamäki 編 *Translation Universals — Do They Exist?* (Benjamins 2004) 第 6・10 章、Berman & Slobin 編 *Relating Events in Narrative — A Crosslinguistic Developmental Study* (LEA 1994)、Comrie *Aspect* (CUP 1976)、Nueva gramática de la lengua española (RAE 2009) §41 "Construcciones medias y pasivas con se"、Riegel/Pellat/Rioul *Grammaire méthodique du français* (PUF 2009) 第 8 章、Renzi/Salvi/Cardinaletti *Grande grammatica italiana di consultazione* (Il Mulino 2001) Vol II、Timberlake *A Reference Grammar of Russian* (CUP 2004) §4.6、Saloni/Świdziński *Składnia współczesnego języka polskiego* (PWN 2007)、Bußmann *Lexikon der Sprachwissenschaft* (Kröner 2008)。

今回のレビュー軸は、ユーザーから明示的に提起された **「翻訳セル全体が英語起源で、目的言語として不自然 (calque from English)」** という問題の発見・分類。先行レビュー #50 (pro-drop 一般)・#37 (Romance チャンキング)・#48 (再帰マーカー) と重複しないよう、本レビューは **「文法的には正しいが、母語話者なら使わない英語逐語訳調」** に限定する。具体的には以下 6 カテゴリ:

- **(α) Pro-drop 言語での主語代名詞顕在化過剰** (es/it/pt/ru/pl/cs で `Yo/Io/Eu/Я/Ja/Já` を全文に貼り付ける慣行)
- **(β) 語順カルク** (英語 SVO + 副詞文末を Romance/Germanic にそのまま写す、自然な V2/V-S 倒置を逃す)
- **(γ) 冠詞・部分冠詞・パーティティブのカルク** (英語 "a fever" → fr `*une fièvre`、本来 partitive)
- **(δ) 所有形容詞の濫用 vs 再帰 + 定冠詞** (英語 "my X" 身体・所持品 → Romance 再帰 + 定冠詞 が自然)
- **(ε) 前置詞のカルク** (英語 "wait for / look for / listen to" の前置詞を不要な場所に追加)
- **(ζ) 動詞アスペクト・時制形のカルク** (英語 will → 周辺迂言 going-to 形式、英語 simple past → ロマンス未完了過去誤用)

確信度は 【確実】= 母語話者教材で明確に「英語訛り (anglicismo/anglicisme)」と分類される構造、【蓋然】= 自然度が劣るが文脈次第で許容、【要検討】= 域内方言差や口語性によって判断が割れるもの。

## 検証範囲

`/home/jounlai/langmap/data.js` 全 100 文を `node -e` でロードし、欧州主要 21 言語層 (fr/fr_qc, de/de_at, es_eu/es_mx, it, pt_eu/pt_br, nl, no, sv, da, fi, et, hu, pl, cs, ru, sk, el, ro, tr, ka, sq, ga, ca, gl, oc) を悉皆走査。pro-drop 期待値が高い 6 言語 (es/it/pt/ru/pl/cs) の主語スロット (letter A) を全文集計し、英語の `[A:I]` と一対一対応するセルを抽出。並行して、Romance の身体部位・所持品 (#29 傘 / #46 友達 / #52 財布 / #64 スマホ / #71 発音 / #73 ベッド / #81 頭) で所有形容詞 `mon/mi/il mio` が機械的に貼り付けられているケースを照合。

## 方針 — 「カルク」の操作的定義

1. **(α) 主語 pro-drop**: スペイン語 RAE *NGLE* §33.4 は明示主語を **対比・強調・曖昧解消** がない限り「非標準」と位置づける。イタリア語 Serianni *Grammatica italiana* §VII.34 も同様。データ上 `[A:Yo quiero]/[A:Io voglio]/[A:Eu quero]` が **全文に貼り付け** られているのは英語 `[A:I want]` の機械的写し。
2. **(β) 語順**: フランス語の倒置疑問 `Pourriez-vous` (#28)、現在進行の冷凍状態 `Il pleut` (#20)、目的語前置 `Me regaló` (#65)。ドイツ語の V2 と本動詞文末 (#1/#21/#37/#52/#64)。これら自然な配列を **英語 SVO に揃える** のはカルク。
3. **(γ) 冠詞・部分冠詞**: フランス語の partitif `de la fièvre / du café` (#81 で `[E:mal à la tête]` は問題ないが、`*une fièvre / *un mal de tête` のような英語 a-NP 写しは calque)。Romance 言語の身体痛は **無冠詞 (it `ho mal di testa`) または部分冠詞** が標準。
4. **(δ) 所有形容詞 vs 再帰 + 定冠詞**: Romance 言語は身体・着衣・所持品で **`me/se/si` + 定冠詞** が自然 (es `me lavo las manos` ≠ `*lavo mis manos`)。英語 my-X の機械翻訳は **`mi/mon` + 名詞** に化け、明白な calque。
5. **(ε) 前置詞**: 英語 wait FOR / listen TO / look FOR の前置詞を **そのまま fr/es に写す** のは典型的 calque (fr `chercher X` ≠ `*chercher pour X`)。
6. **(ζ) アスペクト**: ロマンス諸語の「将来」は **synthetic future (es `iré`, fr `j'irai`, it `andrò`)** が中立。`voy a / vais aller / sto per` は **口語または近未来限定**。データ上 #21 で `[E:vais dîner]` と periphrastic を採るのは fr_qc 文脈なら自然だが、欧州フランス語 fr では `dînerai` のほうが中立。

確信度は 【確実】= 母語話者教材で明示的に「英語起源」と分類、【蓋然】= 自然度劣化があるが許容範囲、【要検討】= 方針自体を closed-review で再確認。

---

## 指摘事項 (Issues found)

### 1. Romance pro-drop 言語で `[A:Yo/Io/Eu]` が全文に貼り付き — 英語 `[A:I]` の機械的写し 【確実】

**Current — 欧州 Romance Pro-drop 言語の主語 letter A セル網羅:**
- es_eu: #1 `[A:Yo]`、#9 `[A:Yo]`、#11 `[A:Yo]`、#17 `[A:Yo]`、#22 `[A:Yo]`、#27 `[A:Yo]`、#29 `[A:Yo]`、#37 `[A:Yo]`、#39 `[A:Yo]`、#41 `[A:Yo]`、#44 `[A:Yo]`、#48 `[A:Yo]`、#52 `[A:Yo]`、#55 `[A:Yo]`、#62 `[A:Yo]`、#64 `[A:Yo]`、#67 `[A:Yo]`、#71 `[A:Yo]`、#81 `[A:Yo]`、#83 `[A:Yo]`、#86 `[D:Yo]`、#89 `[A:Yo]` (1 人称セル 22+ 文すべて顕在)
- es_mx: 同パターン、ほぼ全文 `[A:Yo]`
- it: #1 `[A:Io]`、#9 `[A:Io]`、#11 `[A:Io]`、#17 `[A:Io]`、#22 `[A:Io]`、#27 `[A:Io]`、#37 `[A:Io]`、#39 `[A:Io]`、#41 `[A:Io]`、#44 `[A:Io]`、#48 `[A:Io]`、#52 `[A:Io]`、#55 `[A:Io]`、#62 `[A:Io]`、#64 `[A:Io]`、#67 `[A:Io]`、#71 `[A:Io]`、#81 `[A:Io]`、#83 `[A:Io]`、#86 `[D:Io]`、#89 `[A:Io]` (全顕在)
- pt_eu/pt_br: `[A:Eu]` ほぼ全文
- 一部のみ pro-drop: pt_eu #52 `[C|H:Perdi]` (Eu 不在)、pt_eu #86 `[C:Uso]` (Eu 不在)、pt_br #86 `[C:Uso]` (Eu 不在)、es_eu #95 `[C:Voy]` (Yo 不在) — **これら少数派が逆に自然な欧州標準**。

**Problem:** Nueva gramática de la lengua española (RAE 2009) §33.4.1 は「主語代名詞の明示は **対比 (contraste)・強調 (énfasis)・曖昧解消 (desambiguación)** のいずれかが必要」と明記。データ収載文 (#1「スーツを試着したい」、#9「来年日本に行きたい」、#11「昨日本を買った」等) はいずれも対比・強調・曖昧解消の文脈になく、**自然な欧州スペイン語/イタリア語では主語省略が標準**。
- イタリア語 Serianni *Grammatica italiana* (UTET 1988) §VII.34: "L'uso del pronome soggetto in italiano è normalmente facoltativo e marcato; l'omissione è la norma."
- 母語話者が #11 「昨日本屋で新しい本を買った」を発話する場合は **「Ayer compré un libro nuevo en la librería」** (主語省略、副詞 ayer 前置) が自然。データ `[A:Yo] [C:compré] [E:un libro] [D:nuevo] [B:en la librería] [F:ayer]` は **英語 `[A:I] [C:bought] [D:a new] [E:book] [B:at the bookstore] [F:yesterday]`** の主語位置と語順を 1:1 で写しており calque。
- とくに pt_eu/pt_br は #52/#86 で既に pro-drop を採用しており、**自データ内で方針が割れている** ことが明白な不整合。

**Proposed:** 1 人称代名詞主語 `[A:Yo]/[A:Io]/[A:Eu]` を **削除** (空セル化、または letter A スロット自体を消去)。対比・強調用法でないことを担保するため、以下を最小修正候補とする (全 ~60 セル):
- #11 es_eu `[A:Yo] [C:compré] [E:un libro] [D:nuevo] [B:en la librería] [F:ayer]` → 削除 `[A:Yo]`、結果 `[C:Compré] [E:un libro] [D:nuevo] [B:en la librería] [F:ayer]` (capitalize C)
- #11 it `[A:Io] [C:ho comprato] [E:un libro] [D:nuovo] [B:in libreria] [F:ieri]` → `[A:Io]` 削除
- #44 es_eu `[A:Yo] [D:quiero] [C:viajar] [B:por todo el mundo]` → `[A:Yo]` 削除
- #44 it `[A:Io] [D:voglio] [C:viaggiare] [B:in tutto il mondo]` → `[A:Io]` 削除
- #48 es_eu `[A:Yo] [D:quiero] [C:ver] [E:esa] [B:película]` → `[A:Yo]` 削除
- #62 it `[A:Io] [E:voglio] [D:leggere] [B:questo libro] [C:entro la fine del mese]` → `[A:Io]` 削除
- #67 es_eu `[A:Yo] [D:hago ejercicio] [B:en el gimnasio]...` → `[A:Yo]` 削除
- #81 es_eu `[A:Yo] [F:tengo] [E:dolor de cabeza] [C:hoy]` → `[A:Yo]` 削除
- #81 it `[A:Io] [F:ho] [E:mal di testa] [C:oggi]` → `[A:Io]` 削除
- 他 ~50 セル同様

注: 本指摘は #50 の指摘「pro-drop 一般」と射程が重なるが、**#50 は全 pro-drop 言語横断の方針提起**であり、本指摘は **欧州 Romance の各セルが英語 `[A:I]` の直接写しになっている具体的 cell-level 証拠** の列挙を主眼とする。

---

### 2. fr #1 `[A:Je] [B:veux]` — 英語 `[A:I] [B:want to]` の直訳、自然な fr は `Je voudrais` (条件法による婉曲) 【蓋然】

**Current:** #1「ホテルの向かいの店で見たスーツを試着したい」:
- en `[A:I] [B:want to] [C:try on] [D:a suit]...`
- fr `[A:Je] [B:veux] [C:essayer] [D:un costume]...`

**Problem:** Riegel/Pellat/Rioul *Grammaire méthodique* §11.5.3 は「`vouloir` 直説法現在 + 不定詞」は **強い主張・命令的ニュアンス** を帯びると明記。買い物文脈で店員に伝える発話としては **無礼に近い**。母語話者 (Paris/Lyon) なら `Je voudrais` (条件法) または `J'aimerais` を選ぶのが社会語用論的に自然。同じパターンが #9 `[A:Je] [B:veux] [C:aller]`、#22 `[A:Je] [B:veux] [C:apprendre]`、#37 `[A:Je] [B:dois]`、#44 `[A:Je] [B:veux]`、#48 `[A:Je] [B:veux]`、#62 `[A:Je] [B:veux]`、#71 `[A:Je] [B:veux]` で繰り返し出現。これは英語 `I want to` を機械的に `Je veux` に置換した結果のカルク。

**Proposed:**
- #1 fr `[B:veux]` → `[B:voudrais]` (条件法婉曲)
- 必要に応じ #9/#22/#48/#62/#71 も `[B:voudrais]` へ。ただし #37 `[B:dois]` (義務) は適切なので維持。
- 編集案: `{id: 1, lang: "fr", op: "settext", letter: "B", oldText: "veux", newText: "voudrais"}` (allowTextChange なし、語彙置換のみ)

---

### 3. fr/es #29 `[B:mon parapluie] / [B:el paraguas]` — 英語 `my umbrella` の所有カルク vs Romance の自然な選択 【確実】

**Current:** #29「電車に傘を忘れてしまった」:
- en `[A:I] [C:forgot] [B:my umbrella] [D:on the train]`
- fr `[A:J'] [C:ai oublié] [B:mon parapluie] [D:dans le train]`
- es_eu `[A:Yo] [C:me olvidé] [B:el paraguas] [D:en el tren]` (定冠詞、自然)
- es_mx `[A:Yo] [C:se me olvidó] [B:el paraguas] [D:en el tren]` (定冠詞、自然)
- it `[A:Io] [C:ho dimenticato] [B:il mio ombrello] [D:sul treno]` (所有 + 定冠詞、英語直訳)
- pt_br `[A:Eu] [C:esqueci] [B:meu guarda-chuva] [D:no trem]` (所有のみ)
- de `[A:Ich] [C:habe] [B:meinen Regenschirm] [D:im Zug] [C:vergessen]` (所有)

**Problem:** Romance 諸語では **所持品の喪失文 (forget, lose) で所有形容詞は冗長** とされる (Nueva gramática §18.4.2: "Los posesivos no se emplean cuando la posesión está implícita en el contexto")。データ上、**es_eu/es_mx が正しく `[B:el paraguas]` を選択**しているのに対し、**it は `[B:il mio ombrello]` (英語写し)** を採用しており不整合。
- it 母語話者文献 (Renzi/Salvi/Cardinaletti Vol II §V.2.4) は "ho dimenticato l'ombrello sul treno" を標準形と明記。`il mio ombrello` は **特に他人の傘との対比が必要なときのみ**。
- 同じパターン: #52「市場で財布をなくした」では it `[B:il portafoglio]` (定冠詞、自然)、fr `[B:mon portefeuille]` (所有、英語写し)。fr は **`le portefeuille` または `j'ai perdu mon portefeuille` どちらも可** だが、#29 と方針を統一すべき。
- #71「発音を上達させたい」: fr `[B:ma prononciation]`、es_eu `[B:mi pronunciación]`、it `[B:la mia pronuncia]`、pt_br `[B:minha pronúncia]`、ru `[B:произношение]` (所有なし、自然)。**ru 単独が正解**で、Romance 全部が英語 `my pronunciation` を直訳。自然な fr は `améliorer la prononciation` (定冠詞のみ)、es は `mejorar la pronunciación` で十分。

**Proposed:**
- #29 it `[B:il mio ombrello]` → `[B:l'ombrello]` (`allowTextChange: true`)
- #29 pt_br `[B:meu guarda-chuva]` → `[B:o guarda-chuva]`
- #29 fr `[B:mon parapluie]` → `[B:le parapluie]` (vs `[E:mon] [B:parapluie]` のように所有を E に分離するなら別の指摘軸、本指摘は語彙レベルの所有削除)
- #71 fr `[B:ma prononciation]` → `[B:la prononciation]`
- #71 es_eu `[B:mi pronunciación]` → `[B:la pronunciación]`
- #71 it `[B:la mia pronuncia]` → `[B:la pronuncia]` (既存定冠詞のまま所有削除)
- 編集案: `{id: 29, lang: "it", op: "settext", letter: "B", oldText: "il mio ombrello", newText: "l'ombrello", allowTextChange: true}`

---

### 4. fr #65 `[A:Elle] [B:m'] [E:‌a donné]` の `[A:Elle]` 顕在 — 英語 `[A:She]` 写し 【蓋然】

**Current:** #65「彼女は私に美しいプレゼントをくれた」:
- en `[A:She] [E:gave] [B:me] [C:a beautiful] [D:gift]`
- fr `[A:Elle] [B:m'] [E:‌a donné] [C:un beau] [D:cadeau]`
- es_eu `[A:Ella] [B:me] [E:dio] [D:un regalo] [C:hermoso]`
- it `[A:Lei] [B:mi] [E:ha dato] [C:un bel] [D:regalo]`

**Problem:** ユーザー指示書の中で明示的に挙げられた問題:「She gave me a beautiful gift → 自然な es は `Me regaló un hermoso regalo` (DAT-V-OBJ)」。
- es: `Ella me dio` は **「他の人ではなく彼女が」という対比強調**でなければ非自然。標準は `Me regaló un hermoso regalo` (`regalar` は **「プレゼントをあげる」専用動詞** で、`dar` よりも文脈一致度高)。
- it: `Lei mi ha dato` は同様に対比必要。標準は `Mi ha regalato un bel regalo` (`regalare` 専用動詞)。
- fr は **3 人称代名詞 elle は省略不可** なので `Elle` 自体は維持必須だが、それ以外でも問題: `un beau cadeau` は標準だが英語語順 `[C:beautiful] + [D:gift]` を写しているため `[C:un beau] [D:cadeau]` の **形容詞前置** は適切。

**Proposed:**
- es_eu #65 `[E:dio]` → `[E:regaló]` + `[A:Ella]` 削除 (pro-drop)
- es_mx #65 `[E:dio]` → `[E:regaló]` + `[A:Ella]` 削除
- it #65 `[E:ha dato]` → `[E:ha regalato]` + `[A:Lei]` 削除
- pt_br #65 `[E:deu]` → `[E:deu de presente]` または `[E:presenteou]`、`[A:Ela]` 削除
- 編集案: `{id: 65, lang: "es_eu", op: "settext", letter: "E", oldText: "dio", newText: "regaló", allowTextChange: true}` + `{id: 65, lang: "es_eu", op: "delete", letter: "A"}`

---

### 5. fr #20 `[C:Il] [B:pleut] [A:depuis ce matin]` — `Il` を `[C:...]` に分節するのは英語 `It has been raining` の構造写し 【蓋然】

**Current:** #20「今朝から雨が降り続いている」:
- en `[C:It has been] [B:raining] [A:since this morning]`
- fr `[C:Il] [B:pleut] [A:depuis ce matin]`
- de `[C:Es] [B:regnet] [A:seit heute Morgen] [C:schon]`
- es_eu `[C:Ha estado] [B:lloviendo] [A:desde esta mañana]`
- pt_eu `[C:Está] [B:a chover] [A:desde esta manhã]`
- pl `[A:Od rana] [B:ciągle] [D:pada deszcz]` (虚辞主語なし、自然)
- ru `[B:Дождь] [C:идёт] [A:с этого утра]` (`дождь` = 主語名詞、idiomatic)

**Problem:** スペイン語の現在進行 `Ha estado lloviendo` (現在完了進行) は **英語 perfect progressive の直訳**。母語話者は `Lleva lloviendo desde esta mañana` (`llevar` + gerund 構文、Nueva gramática §28.10) が標準。同様に pt_eu `Está a chover` (進行) は **英語 is raining** の直訳で、本来は `Tem estado a chover` または単に `Chove desde esta manhã`。
- イタリア語データ `[C:Sta] [B:piovendo] [A:da stamattina]` も英語進行写し。母語話者は `Piove da stamattina` (現在形のみ) が圧倒的に自然 (Serianni §X.96)。
- フランス語 `Il pleut depuis ce matin` は ✓ 適切。

**Proposed:**
- es_eu #20 `[C:Ha estado] [B:lloviendo]` → `[C:Lleva] [B:lloviendo]` (`allowTextChange: true`, both cells)
- pt_eu #20 `[C:Está] [B:a chover]` → `[C:Tem estado] [B:a chover]` または `[B:Chove]` のみ
- it #20 `[C:Sta] [B:piovendo]` → `[B:Piove]` (`[C:Sta]` 削除)
- 編集案: `{id: 20, lang: "it", op: "delete", letter: "C"}` + `{id: 20, lang: "it", op: "settext", letter: "B", oldText: "piovendo", newText: "Piove", allowTextChange: true}`

---

### 6. fr #28 `[A:Pourriez] [B:-vous] [C:me recommander]` — 倒置疑問は ✓ だが `me recommander` の me 位置が pre-V でなく enclitic 風 【蓋然】

**Current:** #28「良いレストランを教えていただけますか?」:
- en `[A:Could] [B:you] [C:recommend] [D:a] [F:good] [E:restaurant]`
- fr `[A:Pourriez] [B:-vous] [C:me recommander] [D:un] [F:bon] [E:restaurant]` (倒置 + me recommander)
- fr_qc 同上
- it `[A:Potrebbe] [C:consigliarmi] [D:un] [F:buon] [E:ristorante]` (主語省略、enclitic mi)
- es_eu `[A:Podría] [B:usted] [C:recomendarme] [D:un] [F:buen] [E:restaurante]`

**Problem:** 本セルは構造としては既に自然 (fr 倒置、it/es enclitic) で、ユーザー指示書「Could you recommend a good restaurant? → fr Pourriez-vous」が正しく実現されている。**ただし es_eu `[B:usted]` の顕在化は不要** — `Podría recomendarme` だけで十分丁寧 (RAE *NGLE* §33.6: "El uso de `usted` explícito sólo es necesario para evitar ambigüedad o para énfasis")。これも英語 `you` の直接写し。
- ru `[A:Не могли бы] [B:вы] [C:порекомендовать]` も同様、`Не могли бы вы` は文法的だが冗長。標準は `Не могли бы порекомендовать` でも `Не подскажете` でも可能だが、`вы` の明示は **対比強調がなければ過剰**。

**Proposed:**
- es_eu #28 `[B:usted]` → 削除 (`Podría recomendarme un buen restaurante` で完結)
- es_mx #28 `[B:usted]` → 削除
- ru #28 `[B:вы]` → 削除可能 (蓋然)
- 編集案: `{id: 28, lang: "es_eu", op: "delete", letter: "B"}`

---

### 7. fr/de #5 「This coffee is very delicious」 — 形容詞 délicieux は英語 delicious のカルク 【要検討】

**Current:** #5「このコーヒーは美味しい」:
- en `[A:This] [B:coffee] [D:is] [C:very] [D:delicious]`
- fr `[A:Ce] [B:café] [D:est] [C:très] [D:délicieux]`
- de `[A:Dieser] [B:Kaffee] [D:ist] [C:sehr] [D:lecker]`
- it `[A:Questo] [B:caffè] [D:è] [C:molto] [D:buono]` (`buono` = 自然)
- es_eu/es_mx `[D:delicioso]`
- pt `[D:delicioso]`

**Problem:** フランス語 `délicieux` は **食品の絶賛形容**ではあるが、コーヒー単体に対する日常会話では **やや誇張的**で、`très bon` が自然 (Larousse 用例辞典)。スペイン語 `delicioso` も同様、`muy bueno` または `riquísimo` が標準。これは英語 *delicious* の直接写し。
- イタリア語データ `[D:buono]` が正しく自然な選択を採用済、他の Romance も統一すべき。
- スウェーデン語 `[D:gott]` (自然)、ノルウェー語 `[D:god]` (自然)、フィンランド語 `[D:herkullista]` (やや文語的、口語は `oikein hyvää`)。

**Proposed:**
- fr #5 `[D:délicieux]` → `[D:très bon]` か `[D:vraiment bon]` (allowTextChange 必要、ただし `très` が既に C に独立しているので置換は `[D:bon]` のみで足る)
- es_eu/es_mx #5 `[D:delicioso]` → `[D:bueno]` または `[D:riquísimo]`
- pt_eu/pt_br #5 `[D:delicioso]` → `[D:bom]` または `[D:gostoso]` (pt_br)
- 編集案: `{id: 5, lang: "fr", op: "settext", letter: "D", oldText: "délicieux", newText: "bon", allowTextChange: true}` (D は 2 出現あり、後者のみ)

---

### 8. fr/it/es #21 `[E:vais dîner] / [E:vou jantar]` — `aller + inf` 近未来は英語 `will` の near-future 写し、欧州標準は synthetic future 【蓋然】

**Current:** #21「今夜友達と夕食を食べる」:
- en `[A:I] [E:will have] [D:dinner] [C:with friends] [B:tonight]`
- fr `[A:Je] [E:vais dîner] [C:avec des amis] [B:ce soir]` (近未来 aller + inf)
- pt_eu `[A:Eu] [E:vou jantar] [C:com amigos] [B:esta noite]` (近未来 ir + inf)
- pt_br `[A:Eu] [E:vou jantar] [C:com amigos] [B:hoje à noite]`
- es_eu `[A:Yo] [E:cenaré] [C:con amigos] [B:esta noche]` (synthetic future、自然)
- es_mx `[A:Yo] [E:cenaré] [C:con amigos] [B:esta noche]`
- it `[A:Io] [E:cenerò] [C:con amici] [B:stasera]` (synthetic、自然)

**Problem:** 欧州標準 fr では `Je vais dîner ce soir` は **「(今すぐ) 夕食を食べに行く」** のニュアンスが強く、「今晩夕食をとる」予定なら `Je dînerai ce soir avec des amis` が中立。Grevisse *Le bon usage* §811 は futur proche と futur simple の対立を「近接性 + 確実性」で論じ、ce soir 程度の時間幅では **futur simple が標準**。
- ポルトガル語 pt_eu でも同様、`Vou jantar` は近接 (5 分以内) 含意。`Jantarei` または `Vou jantar hoje` (時間副詞付きで近接性緩和) が自然。
- これは英語 `will have` を「will = going to」と短絡し、ロマンス諸語の `aller/ir + inf` に直訳した典型的 calque。

**Proposed:**
- fr #21 `[E:vais dîner]` → `[E:dînerai]` (`allowTextChange: true`)
- pt_eu #21 `[E:vou jantar]` → `[E:jantarei]`
- 編集案: `{id: 21, lang: "fr", op: "settext", letter: "E", oldText: "vais dîner", newText: "dînerai", allowTextChange: true}`

---

### 9. fr/es #9 `[F:le próximo] [G:año] / [G:l'année] [F:prochaine]` — 英語 `next year` の形容詞前置写し vs Romance の後置標準 【蓋然】

**Current:** #9「来年日本に行きたい」:
- en `[A:I] [B:want to] [C:go] [D:to] [E:Japan] [F:next] [G:year]`
- fr `[A:Je] [B:veux] [C:aller] [D:au] [E:Japon] [G:l'année] [F:prochaine]` (後置 prochaine、自然)
- es_eu `[A:Yo] [B:quiero] [C:ir] [D:a] [E:Japón] [F:el próximo] [G:año]` (**前置 próximo**、calque)
- es_mx 同上
- pt_eu/pt_br `[F:no próximo] [G:ano]` (前置 próximo、calque)
- it `[G:l'anno] [F:prossimo]` (後置、自然)
- ca `[F:l'any] [G:que ve]` (que ve、自然)
- gl `[F:o próximo] [G:ano]` (前置)

**Problem:** スペイン語の **`próximo` 後置形 `el año próximo`** が中立的 (RAE *NGLE* §13.7)、前置 `el próximo año` は **やや書き言葉・形式的**。話し言葉では `el año que viene` が最自然。データ es は前置形を採用しており **英語 `next year` の形容詞前置を写したカルク** の疑いが強い。
- ポルトガル語も同様、`o próximo ano` は形式的、`o ano que vem` (pt_br)、`para o ano` (pt_eu) が口語標準。
- イタリア語 `[G:l'anno] [F:prossimo]` が正しい後置形を採用、他 Romance も統一すべき。

**Proposed:**
- es_eu/es_mx #9 → `[E:Japón] [G:el año] [F:que viene]` または `[G:el año] [F:próximo]` (`allowTextChange: true`)
- pt_eu #9 → `[E:Japão] [G:o ano] [F:que vem]`
- pt_br #9 → `[E:Japão] [G:o ano] [F:que vem]`
- 編集案: `{id: 9, lang: "es_eu", op: "replace", letter: "F", oldText: "el próximo", newText: "el año", allowTextChange: true}` + 並行する G の調整 (詳細はオーナー裁定)

---

### 10. de #29 `[B:meinen Regenschirm]` — 英語 `my umbrella` の所有写し、自然な de は無冠詞 or 定冠詞 【蓋然】

**Current:** #29「電車に傘を忘れてしまった」:
- de `[A:Ich] [C:habe] [B:meinen Regenschirm] [D:im Zug] [C:vergessen]`

**Problem:** Duden *Grammatik* (Bibliographisches Institut 2016) §1234: ドイツ語の所有形容詞は **「他人との対比が必要なとき」のみ顕在化、それ以外は定冠詞 or 無冠詞**。傘・財布等の所持品は文脈上自明なので `den Regenschirm` (定冠詞) または所有を維持してもよいが、英語 `my X` を機械的に `mein X` に翻訳するのは典型的カルク。
- 同パターン: #52 de `[B:meine Geldbörse]` (財布)、#64 de `[B:mein Handy]` (スマホ)、#71 de `[B:meine Aussprache]` (発音)、#86 de `[B:mein Smartphone]` (スマホ)。すべて英語 my-X の直訳。

**Proposed:**
- de #29 `[B:meinen Regenschirm]` → `[B:den Regenschirm]`
- de #52 `[B:meine Geldbörse]` → `[B:die Geldbörse]` または `[B:das Portemonnaie]`
- de #71 `[B:meine Aussprache]` → `[B:die Aussprache]`
- 編集案: `{id: 29, lang: "de", op: "settext", letter: "B", oldText: "meinen Regenschirm", newText: "den Regenschirm", allowTextChange: true}`

---

### 11. fr #50 `[A:chien] [D:aime] [C:se promener]` — 動詞 `aimer` 単独より `aime se promener` 自然だが、`[E:Mon]` 分節は英語 `my` 写し 【要検討】

**Current:** #50「私の犬は散歩が好きだ」:
- en `[E:My] [A:dog] [D:likes] [C:to go for walks]`
- fr `[E:Mon] [A:chien] [D:aime] [C:se promener]`
- es_eu `[E:A mi] [A:perro] [D:le gusta] [C:salir a caminar]`
- it `[E:Il mio] [A:cane] [D:ama] [C:andare a fare passeggiate]`

**Problem:** イタリア語 `Il mio cane ama andare a fare passeggiate` は英語 `My dog loves to go for walks` を直訳した結果、`andare a fare passeggiate` という長大なフレーズが出現。母語話者 (Sabatini 用例辞典) は `Al mio cane piace passeggiare` (`piace` 与格構文 + `passeggiare` 単純不定詞) が自然。同様に es_eu `salir a caminar` は冗長、`pasear` 単純動詞で十分。
- フランス語 `se promener` は正しい (自然)、`aller faire une promenade` だと冗長。
- 主語 `mon chien` / `il mio cane` の所有は犬を特定する文脈で必要、削除は不可。
- 動詞選択: it `ama` は人間の感情動詞で犬には大げさ、`piace` が中立。

**Proposed:**
- it #50 `[D:ama] [C:andare a fare passeggiate]` → `[D:piace] [C:passeggiare]` (与格構文要再構成、`allowTextChange: true`)、`[E:Il mio]` → `[E:Al mio]`
- es_eu #50 `[C:salir a caminar]` → `[C:pasear]`
- es_mx #50 `[C:salir a pasear]` → `[C:pasear]` (`salir a pasear` も自然なので任意)
- 編集案: `{id: 50, lang: "it", op: "settext", letter: "C", oldText: "andare a fare passeggiate", newText: "passeggiare", allowTextChange: true}`

---

### 12. ru #11 `[A:Я] [C:купил] [D:новую] [E:книгу] [B:в книжном магазине]` — 主語 Я 顕在 + 英語 SVO 写し 【確実】

**Current:** #11「昨日本屋で新しい本を買った」:
- en `[A:I] [C:bought] [D:a new] [E:book] [B:at the bookstore] [F:yesterday]`
- ru `[A:Я] [C:купил] [D:новую] [E:книгу] [B:в книжном магазине] [F:вчера]`
- pl `[A:Ja] [C:kupiłem] [F:wczoraj] [D:nową] [E:książkę] [B:w księgarni]`
- cs `[A:Já] [F:včera] [C:koupil] [D:novou] [E:knihu] [B:v knihkupectví]`

**Problem:** ロシア語の主語代名詞は **対比・強調以外で顕在化させない** (Timberlake §4.4)。`купил` の語尾 -л + 男性主格活用で主語人称が明示されるため、`Я` は冗長。同様に pl `Ja`、cs `Já` も冗長。
- 自然なロシア語: `Вчера я купил новую книгу в книжном магазине` (時間副詞前置、主語の位置は強調ではないので削除可能でも維持可能)、または `Купил вчера новую книгу в книжном` (主語省略の口語)。
- データの語順 `Я купил новую книгу в книжном магазине вчера` は英語 `I bought a new book at the bookstore yesterday` の完全な 1:1 写しで、ロシア語の **時間副詞前置習慣 (вчера 先頭)** を逃している。

**Proposed:**
- ru #11 `[A:Я]` → 削除、`[F:вчера]` を文頭へ移動 (オーナー裁定)
- pl #11 `[A:Ja]` → 削除
- cs #11 `[A:Já]` → 削除
- 編集案: `{id: 11, lang: "ru", op: "delete", letter: "A"}`、`{id: 11, lang: "pl", op: "delete", letter: "A"}`、`{id: 11, lang: "cs", op: "delete", letter: "A"}`

---

### 13. fr/es #46 「友達と電話で一時間話した」 — `[F:avec] [G:mon] [B:ami]` の構造分割は英語 `with my friend` 写し 【蓋然】

**Current:** #46「友達と電話で一時間話した」:
- en `[A:I] [E:talk] [H:ed] [F:with] [G:my] [B:friend] [C:on the phone] [D:for an hour]`
- fr `[A:J'] [E:ai] [H:parlé] [F:avec] [G:mon] [B:ami] [C:au téléphone] [D:pendant une heure]`
- es_eu `[A:Yo] [E|H:hablé] [F:con] [G:mi] [B:amigo] [C:por teléfono] [D:durante una hora]`
- it `[A:Io] [E:ho] [H:parlato] [F:con] [G:il mio] [B:amico] [C:al telefono] [D:per un'ora]`
- pl `[A:Rozmawiałem] [F:z] [B:przyjacielem] [C:przez telefon] [D:przez godzinę]` (所有なし、自然)
- ru `[A:Я] [E:разговарива] [H:л] [F:с] [B:другом] [C:по телефону] [D:час]` (所有なし、自然)

**Problem:** ロシア語/ポーランド語が **所有 `mój/мой` を省略**しており、これが自然な母語標準 (1人称話者にとって「友達」が誰の友達かは自明)。スペイン語 *Nueva gramática* §18.4.2 でも所有省略を許容: `Hablé con un amigo por teléfono` (不定冠詞 un で「一人の友人」を導入) が口語標準。
- fr `avec mon ami` も同様、`avec un ami` が中立。`avec mon ami` だと「特定の親しい男性の友人」のニュアンスが強い (恋愛含意さえある)。
- これは英語 `with my friend` の所有を機械的に維持したカルク。

**Proposed:**
- fr #46 `[G:mon]` → `[G:un]` (`allowTextChange: true`)
- es_eu/es_mx #46 `[G:mi]` → `[G:un]`
- it #46 `[G:il mio]` → `[G:un]` または `[G:un mio]`
- pt_eu/pt_br #46 `[G:o meu] / [G:meu]` → `[G:um]`
- 編集案: `{id: 46, lang: "fr", op: "settext", letter: "G", oldText: "mon", newText: "un", allowTextChange: true}`

---

### 14. fr/es #67 `[A:Yo] [D:hago ejercicio] [B:en el gimnasio]` — `hacer ejercicio` 直訳、自然な es は `entrenar / ir al gimnasio` 【蓋然】

**Current:** #67「週に3回ジムで運動する」:
- en `[A:I] [D:exercise] [B:at the gym] [C:three times] [E:a week]`
- fr `[A:Je] [D:fais de l'exercice] [B:à la salle de sport] [C:trois fois] [E:par semaine]`
- es_eu `[A:Yo] [D:hago ejercicio] [B:en el gimnasio] [C:tres veces] [E:a la semana]`
- it `[A:Io] [D:Mi alleno] [B:in palestra] [C:tre volte] [E:a settimana]` (`allenarsi` 自然)
- pt_br `[A:Eu] [D:malho] [B:na academia] [C:três vezes] [E:por semana]` (`malhar` 自然)

**Problem:** スペイン語 `hacer ejercicio en el gimnasio` は **英語 `to exercise at the gym` を直訳**した冗長表現。母語標準 (Madrid/Barcelona) は `entrenar` 単独動詞 (`Entreno tres veces a la semana en el gimnasio`) または `voy al gimnasio` (場所動詞)。
- フランス語 `fais de l'exercice à la salle de sport` も同様冗長、自然なのは `je vais à la salle (de sport) trois fois par semaine` または `je m'entraîne trois fois par semaine au gym`。
- イタリア語 `Mi alleno in palestra` は正しい自然形を採用済。
- pt_br `malho na academia` も口語自然形。
- これはスペイン語/フランス語が英語 `exercise` という名詞・動詞両用形を引きずられた結果。

**Proposed:**
- es_eu #67 `[D:hago ejercicio]` → `[D:entreno]`
- fr #67 `[D:fais de l'exercice]` → `[D:m'entraîne]`
- 編集案: `{id: 67, lang: "es_eu", op: "settext", letter: "D", oldText: "hago ejercicio", newText: "entreno", allowTextChange: true}`

---

### 15. de #21 `[E:esse] [B:heute Abend] [C:mit Freunden] [D:zu Abend]` — `essen ... zu Abend` の分離動詞分節は自然だが [E] の `esse` 単独はやや薄い 【要検討】

**Current:** #21「今夜友達と夕食を食べる」:
- de `[A:Ich] [E:esse] [B:heute Abend] [C:mit Freunden] [D:zu Abend]`

**Problem:** ドイツ語 `zu Abend essen` は分離動詞で、`Ich esse heute Abend mit Freunden zu Abend` は文法的に正しいが **「Abend」が 2 回出現** (heute Abend = 今夜、zu Abend = 夕食) して **冗長・耳障り** (Duden *Grammatik* §1567)。母語標準は:
- `Ich esse heute Abend mit Freunden` (zu Abend を省略、文脈で夕食理解)
- `Ich treffe heute Abend Freunde zum Abendessen` (treffen + zum Abendessen で冗長回避)

**Proposed:** de #21 `[D:zu Abend]` → 削除、または `[D:Abendessen]` (名詞単独 + treffen で再構成、`allowTextChange: true` 必須)
- 編集案: `{id: 21, lang: "de", op: "delete", letter: "D"}`

---

### 16. fr #20 `[A:depuis ce matin]` の前置詞は ✓、ただし英語 `since this morning` を直訳した結果 ru/pl は不自然 【蓋然】

**Current:** #20「今朝から雨が降り続いている」:
- ru `[B:Дождь] [C:идёт] [A:с этого утра]`
- pl `[A:Od rana] [B:ciągle] [D:pada deszcz]`
- cs `[A:Od rána] [C:pořád] [B:prší]`

**Problem:** ロシア語の `с этого утра` (「この朝から」) は **英語 `since this morning` の文字通り写し**で、自然なロシア語は `с утра` (定冠詞なし、定冠詞言語と異なる) または `с самого утра` (「朝から (ずっと)」) (Timberlake §3.3.2)。
- ポーランド語 `Od rana` (自然)、チェコ語 `Od rána` (自然) — **東スラブとの対比でロシア語のみ不自然**。

**Proposed:**
- ru #20 `[A:с этого утра]` → `[A:с утра]` (`allowTextChange: true`)
- 編集案: `{id: 20, lang: "ru", op: "settext", letter: "A", oldText: "с этого утра", newText: "с утра", allowTextChange: true}`

---

### 17. fr/es #41 「今、面白い本を読んでいる」— `[A:Je]` / `[A:Yo]` 顕在 + `[E:estoy leyendo]` 進行形カルク 【確実】

**Current:** #41:
- en `[A:I'm] [E:reading] [D:an] [C:interesting] [F:book] [B:now]`
- fr `[A:Je] [E:lis] [B:en ce moment] [D:un] [F:livre] [C:intéressant]`
- es_eu `[A:Yo] [E:estoy leyendo] [D:un] [F:libro] [C:interesante] [B:ahora]`
- es_mx `[A:Yo] [E:estoy leyendo] [D:un] [F:libro] [C:interesante] [B:ahorita]`
- it `[A:Io] [E:sto leggendo] [D:un] [F:libro] [C:interessante] [B:adesso]`

**Problem:** スペイン語の **`estar + gerundio` 進行形は持続性・進行中性が強調されるとき限定** (RAE *NGLE* §28.7.4)。一般的な「今読んでいる」は単に現在形 `Leo un libro interesante` で十分自然。`Estoy leyendo` は **英語 `I am reading` を機械翻訳**した典型例。同様に it `sto leggendo` も `Leggo` で代替可。
- フランス語 `Je lis en ce moment` は ✓ 自然 (`être en train de` を使うなら強調)。
- 主語 `Yo/Io` も pro-drop 違反 (指摘 1)。

**Proposed:**
- es_eu #41 `[A:Yo] [E:estoy leyendo]` → `[A:Yo]` 削除、`[E:estoy leyendo]` → `[E:leo]` (任意)
- es_mx #41 同上
- it #41 `[A:Io] [E:sto leggendo]` → `[A:Io]` 削除、`[E:sto leggendo]` 維持可 (進行形は it でも頻用)
- 編集案: `{id: 41, lang: "es_eu", op: "delete", letter: "A"}`

---

### 18. de #41 `[B:gerade]` は ✓ 自然、ただし語順 `[A:Ich] [E:lese] [B:gerade] [D:ein] [C:interessantes] [F:Buch]` は英語 SVO 写しではなく V2 標準 【許容】

**Current:** #41 de `[A:Ich] [E:lese] [B:gerade] [D:ein] [C:interessantes] [F:Buch]`

**Problem:** ドイツ語は ✓、本指摘なし。むしろ自然な V2 + 時間副詞中間位置 (Mittelfeld) が実現されている。**反例として誉める** ことで他言語の改善方針を裏付ける。

**Proposed:** 修正なし、ただし review記録として留保。

---

### 19. es/it #44 `[B:por todo el mundo] / [B:in tutto il mondo]` — 英語 `around the world` の直訳、自然な es は `por el mundo entero / por el mundo` 【要検討】

**Current:** #44「世界中を旅したい」:
- en `[A:I] [D:want to] [C:travel] [B:around the world]`
- fr `[A:Je] [D:veux] [C:voyager] [B:autour du monde]`
- es_eu `[A:Yo] [D:quiero] [C:viajar] [B:por todo el mundo]`
- es_mx 同上
- it `[A:Io] [D:voglio] [C:viaggiare] [B:in tutto il mondo]`
- pt_eu `[B:pelo mundo inteiro]`
- pt_br `[B:pelo mundo todo]`

**Problem:** フランス語 `autour du monde` は **英語 `around the world` の直訳カルク**で、本来「世界を一周する (環周)」(船・航空機での周回) のニュアンス。「世界中を旅する」は `voyager dans le monde entier` または `parcourir le monde` (Larousse 用例)。
- イタリア語 `in tutto il mondo` も英語 `in the whole world` 寄り、自然なのは `per il mondo` (移動感) または `in giro per il mondo`。
- スペイン語 `por todo el mundo` は問題なし (✓)。

**Proposed:**
- fr #44 `[B:autour du monde]` → `[B:dans le monde entier]` (`allowTextChange: true`)
- it #44 `[B:in tutto il mondo]` → `[B:per il mondo]` または `[B:in giro per il mondo]`
- 編集案: `{id: 44, lang: "fr", op: "settext", letter: "B", oldText: "autour du monde", newText: "dans le monde entier", allowTextChange: true}`

---

### 20. fr #76 `[D:me sens heureux]` — `feel happy` 直訳、自然な fr は `je suis heureux` 【蓋然】

**Current:** #76「音楽を聴くと幸せな気持ちになる」:
- en `[E:I] [D:feel happy] [C:when] [E:I] [B:listen to] [A:music]`
- fr `[E:Je] [D:me sens heureux] [C:quand] [B:j'écoute] [A:de la musique]`
- es_eu `[D:Me siento feliz] [C:cuando] [B:escucho] [A:música]`
- pt_eu `[E:Eu] [D:fico feliz] [C:quando] [B:ouço] [A:música]` (`ficar` = なる、自然)
- it `[D:Mi sento felice] [C:quando] [B:ascolto] [A:musica]`

**Problem:** フランス語 `je me sens heureux` は **英語 `I feel happy` の直訳カルク**で、本来「(健康的・心理的に) 幸福を感じる」ような内省描写。「音楽を聴くと幸せになる」という文脈なら `je suis heureux` (状態) または `je me sens bien` (体調感) が自然 (TLFi `sentir` C2)。
- スペイン語 `Me siento feliz` も同様、`Estoy feliz` (状態) または `Soy feliz` (恒常的) で代替可能。ただし `me siento` 自体は誤りではない (蓋然)。
- pt_eu `fico feliz` は ✓ 自然 (なる + 幸せ)。
- イタリア語 `Mi sento felice` も `Sono felice` で代替可。

**Proposed:**
- fr #76 `[D:me sens heureux]` → `[D:suis heureux]` (`allowTextChange: true`)
- es_eu #76 `[D:Me siento feliz]` → `[D:Estoy feliz]`
- 編集案: `{id: 76, lang: "fr", op: "settext", letter: "D", oldText: "me sens heureux", newText: "suis heureux", allowTextChange: true}`

---

### 21. de/nl #77 `[C:war überrascht] [D:von]` — passive 写し、自然な de は `überraschte ihn` (能動構文) 【蓋然】

**Current:** #77「彼はテストの結果に驚いた」:
- en `[A:He] [C:was surprised] [D:by] [E:the test] [B:results]`
- de `[A:Er] [C:war überrascht] [D:von] [E:den Test] [B:ergebnissen]`
- nl `[A:Hij] [C:was verrast] [D:door] [E:de test] [B:resultaten]`
- es_eu `[A:Él] [C:quedó sorprendido] [D:por] [B:los resultados] [E:del examen]`
- es_mx `[A:Él] [C:se sorprendió] [D:con] [B:los resultados] [E:del examen]` (再帰、自然)
- it `[A:Lui] [C:è rimasto sorpreso] [D:dai] [B:risultati] [E:del test]`
- ca `[A:Ell] [C:es va sorprendre] [D:pels] [B:resultats] [E:de l'examen]` (再帰、自然)
- ru `[A:Он] [C:был удивлён] [B:результатами] [E:теста]` (具格、能動的)
- pl `[A:On] [C:był zaskoczony] [B:wynikami] [E:testu]`

**Problem:** ユーザー指示書「was surprised by → German prefers active construction; es uses se sorprendió」が正しく es_mx で実現されているが、**es_eu はまだ `quedó sorprendido por` という passive 形** を維持。ドイツ語 `war überrascht von` も英語 passive の直訳カルクで、自然な能動文は `Die Testergebnisse überraschten ihn` (「テスト結果が彼を驚かせた」、能動)。
- nl `was verrast door` 同様。

**Proposed:**
- es_eu #77 `[C:quedó sorprendido] [D:por]` → `[C:se sorprendió] [D:con]` (es_mx と統一、`allowTextChange: true`)
- de #77 — 全文構造変更必要 (`Die Testergebnisse überraschten ihn`)、grand convention レベル。
- 編集案: `{id: 77, lang: "es_eu", op: "settext", letter: "C", oldText: "quedó sorprendido", newText: "se sorprendió", allowTextChange: true}` + 並行 D の調整

---

### 22. cs/pl #20 `[A:Od rána] [C:pořád]` — `pořád` 副詞は ✓ 自然、ただし ru の `[B:Дождь] [C:идёт]` 順は英語写しでなく自然 【許容】

**Current:** #20 cs `[A:Od rána] [C:pořád] [B:prší]`、pl `[A:Od rana] [B:ciągle] [D:pada deszcz]`、ru `[B:Дождь] [C:идёт] [A:с этого утра]`

**Problem:** これらは ✓ 自然、本指摘なし。ロシア語 `Дождь идёт с утра` の主語前置・動詞接置は英語 `It is raining` の虚辞主語 it と異なる構造を採用しており calque 回避済。

**Proposed:** 修正なし、good example として記録。

---

### 23. fr/es #85 「もっと水を飲んだほうがいい」 — `Vous devriez / Tú deberías` の Vous/Tú 顕在は英語 `You should` 写し 【蓋然】

**Current:** #85:
- en `[A:You] [D:should] [C:drink] [E:more] [B:water]`
- fr `[A:Vous] [D:devriez] [C:boire] [E:plus] [B:d'eau]`
- es_eu `[A:Tú] [D:deberías] [C:beber] [E:más] [B:agua]`
- es_mx `[A:Usted] [D:debería] [C:tomar] [E:más] [B:agua]`
- ru `[D:Тебе стоит] [C:пить] [E:больше] [B:воды]` (主語 dative、自然な与格構文)
- it `[A:Tu] [D:dovresti] [C:bere] [E:più] [B:acqua]`

**Problem:** スペイン語 `Tú deberías beber más agua` は **英語 `You should drink` を直訳**したカルクで、`tú` 顕在は対比強調以外で不必要。母語標準は `Deberías beber más agua` (主語省略)。同様 it `Tu` も削除可能 (`Dovresti bere più acqua`)。
- フランス語 `Vous devriez` の `vous` は **2 人称代名詞主語省略不可** (fr は厳格 SVO)、維持必須。

**Proposed:**
- es_eu #85 `[A:Tú]` → 削除
- es_mx #85 `[A:Usted]` → 削除
- it #85 `[A:Tu]` → 削除
- 編集案: `{id: 85, lang: "es_eu", op: "delete", letter: "A"}`

---

### 24. it/es #62 `[A:Io] [E:voglio] [D:leggere] [B:questo libro]` — 主語顕在 + 動詞語順 英語写し 【確実】

**Current:** #62「月末までにこの本を読み終えたい」:
- en `[A:I] [E:want to] [D:read] [B:this book] [C:by the end of the month]`
- it `[A:Io] [E:voglio] [D:leggere] [B:questo libro] [C:entro la fine del mese]`
- es_eu `[A:Yo] [E:quiero] [D:leer] [B:este libro] [C:antes de fin de mes]`
- pl `[E:Chcę] [D:przeczytać] [B:tę książkę] [C:do końca miesiąca]` (主語省略、自然)

**Problem:** pl が **既に主語省略を実現**しており欧州標準を満たすのに対し、it/es は主語顕在 + 英語語順を維持。「月末までに」を意味する `entro la fine del mese` (it) も `entro fine mese` のほうが口語自然 (Treccani 用例)。

**Proposed:**
- it #62 `[A:Io]` → 削除
- es_eu/es_mx #62 `[A:Yo]` → 削除
- 編集案: `{id: 62, lang: "it", op: "delete", letter: "A"}`

---

### 25. fr/de #88 「AIは世界を変えつつある」 — `est en train de changer / verändert` の選択は妥当だが ru `[A:ИИ]` が略語のまま 【許容】

**Current:** #88:
- en `[A:AI] [C:is changing] [B:the world]`
- fr `[A:L'IA] [C:est en train de changer] [B:le monde]`
- de `[A:KI] [C:verändert] [B:die Welt]` (de は単純現在、自然)
- ru `[A:ИИ] [C:меняет] [B:мир]`

**Problem:** これらは ✓ 自然。`est en train de changer` (fr) は進行アスペクト強調で「変化の最中」を明示、calque ではなく適切な選択。
- ロシア語 `ИИ` (искусственный интеллект の略) は ✓ 自然、口語的。

**Proposed:** 修正なし、good example として記録。

---

### 26. es/it #95 「自転車でオフィスに行く」 — `[C:Voy] [B:a la oficina] [A:en bicicleta]` の語順 ✓ だが、`[A:en bicicleta]` の冠詞欠如 ✓ vs fr `[A:à vélo]` calque 注意 【要検討】

**Current:** #95:
- en `[D:I] [C:go] [B:to the office] [A:by bicycle]`
- fr `[D:Je] [C:vais] [B:au bureau] [A:à vélo]` (✓ à vélo は自然)
- es_eu `[C:Voy] [B:a la oficina] [A:en bicicleta]` (✓ 主語省略、自然)
- es_mx 同上 (✓)
- it `[C:Vado] [B:in ufficio] [A:in bicicletta]` (✓)
- pt_eu/pt_br `[C:Vou]` (✓)
- de `[D:Ich] [C:fahre] [A:mit dem Fahrrad] [B:ins Büro]` (V2、自然)

**Problem:** これらの言語は **主語省略・自然な前置詞句**を採用しており、欧州標準を満たす。**fr/de のみ主語顕在**だがこれは fr/de が必須主語言語なので calque ではない。
- スペイン語データの中で #95 だけが pro-drop を採用しており、他文 (#1, #9, #11 など) と方針が不整合 — **指摘 1 への補足証拠**。

**Proposed:** 修正なし、ただし指摘 1 の証拠補強として記録。

---

### 27. fr #46 `[A:J'] [E:ai] [H:parlé] [F:avec] [G:mon] [B:ami] [C:au téléphone]` — 全要素が英語 `I talked with my friend on the phone` の 1:1 写し 【確実】

**Current:** #46:
- en `[A:I] [E:talk] [H:ed] [F:with] [G:my] [B:friend] [C:on the phone] [D:for an hour]`
- fr `[A:J'] [E:ai] [H:parlé] [F:avec] [G:mon] [B:ami] [C:au téléphone] [D:pendant une heure]`

**Problem:** フランス語の `parler avec X au téléphone` は **英語 `talk with X on the phone` の完全な構造写し**。母語標準は `téléphoner à X` (専用動詞 + 与格) で、`J'ai téléphoné à un ami pendant une heure` が中立。または `J'ai eu un ami au téléphone pendant une heure` (口語、Antoine *Le bon usage*)。
- 同様 it `ho parlato con il mio amico al telefono` は `ho telefonato a un amico` で代替可。
- スペイン語 `hablé con mi amigo por teléfono` は `hablé por teléfono con un amigo` が自然 (前置詞句順)、ただし大差なし。

**Proposed:**
- fr #46 全文再構成: `[A:J'] [E:ai téléphoné] [F:à] [G:un] [B:ami] [D:pendant une heure]` (構造大幅変更、grand convention 寄り)
- 簡易修正: `[G:mon]` → `[G:un]` (指摘 13 と統合)
- 編集案: `{id: 46, lang: "fr", op: "settext", letter: "G", oldText: "mon", newText: "un", allowTextChange: true}`

---

### 28. ru #81 `[A:У меня] [D:болит] [B:голова] [C:сегодня]` — ✓ 自然、英語 `I have a headache` の所有構造を回避 【許容、良例】

**Current:** #81「今日は頭が痛い」:
- en `[A:I] [F:have] [E:a headache] [C:today]`
- fr `[A:J'] [F:ai] [E:mal à la tête] [C:aujourd'hui]` (`avoir mal à` 標準)
- de `[A:Ich] [F:habe] [C:heute] [E:Kopfschmerzen]` (無冠詞、自然)
- es_eu `[A:Yo] [F:tengo] [E:dolor de cabeza] [C:hoy]` (Yo 顕在は不自然、指摘 1)
- it `[A:Io] [F:ho] [E:mal di testa] [C:oggi]` (Io 顕在は不自然)
- ru `[A:У меня] [D:болит] [B:голова] [C:сегодня]` (`У меня болит голова` = 「私において頭が痛む」、所有迂言、✓ 自然)
- hu `[C:Ma] [D:fáj] [B:a fejem]` (`fáj` 動詞、所有名詞 fejem、✓)
- tr `[C:Bugün] [B:başım] [D:ağrıyor]` (`ağrımak` 自動詞、所有 başım、✓)

**Problem:** これらは ✓。ロシア語 `У меня болит голова` は **英語 `I have a headache` の所有構造を avoir 構文として写すのを回避**し、ロシア語固有の与格的迂言を採用。良例として保全すべき。
- ただし es_eu/it の `Yo/Io` 顕在は依然問題 (指摘 1 と重複)。
- フランス語 `J'ai mal à la tête` も ✓、`une fièvre / un mal de tête` のような英語 a-NP 写しを回避。

**Proposed:**
- es_eu #81 `[A:Yo]` → 削除
- es_mx #81 `[A:Yo]` → 削除
- it #81 `[A:Io]` → 削除
- 編集案: `{id: 81, lang: "es_eu", op: "delete", letter: "A"}`

---

### 29. fr/de #4 「最寄りの駅はどこですか」 — `[A:la plus proche]` 後置 ✓、ただし de `[A:der nächste]` 前置 calque 【許容、対比】

**Current:** #4:
- en `[C:Where] [D:is] [A:the nearest] [B:station]`
- fr `[C:Où] [D:est] [B:la gare] [A:la plus proche]` (✓ 形容詞後置)
- de `[C:Wo] [D:ist] [A:der nächste] [B:Bahnhof]` (前置)
- es_eu `[C:Dónde] [D:está] [B:la estación] [A:más cercana]` (✓ 後置)

**Problem:** フランス語 `la gare la plus proche` は ✓ 自然な後置形容詞 (descriptive)。ドイツ語の前置 `der nächste Bahnhof` は標準的でカルクではない (ドイツ語形容詞は前置)。良例。

**Proposed:** 修正なし。

---

### 30. es/it #18 「This bag is too expensive」 — `[A:Esta] [B:bolsa] [D:es] [C:demasiado] [D:cara]` は ✓ だが `demasiado` 強度副詞は英語 too の写し 【要検討】

**Current:** #18:
- en `[A:This] [B:bag] [D:is] [C:too] [D:expensive]`
- es_eu `[A:Esta] [B:bolsa] [D:es] [C:demasiado] [D:cara]`
- es_mx `[A:Esta] [B:bolsa] [D:está] [C:muy] [D:cara]` (✓ muy で自然化)
- it `[A:Questa] [B:borsa] [D:è] [C:troppo] [D:cara]` (✓)
- fr `[A:Ce] [B:sac] [D:est] [C:trop] [D:cher]` (✓ trop)
- pt_br `[A:Esta] [B:bolsa] [D:é] [C:cara] [D:demais]` (✓ 後置 demais)

**Problem:** スペイン語 `demasiado cara` は文法的に正しいが、口語標準は `muy cara` (es_mx と同様) または `está carísima` (絶対最上級)。`demasiado` は **「過剰」のニュアンス強く、買い物文脈ではやや堅い**。es_eu は英語 `too` を `demasiado` に機械置換した結果と推察。
- es_mx の `muy` 選択は自然、es_eu と統一すべき。
- イタリア語 `troppo` は ✓ 自然。

**Proposed:**
- es_eu #18 `[C:demasiado]` → `[C:muy]` (任意、確信度は低い)
- 編集案: `{id: 18, lang: "es_eu", op: "settext", letter: "C", oldText: "demasiado", newText: "muy", allowTextChange: true}` (要検討)

---

### 31. fr/it #66 「山は雪で覆われている」— `[C:est couverte] [B:de neige]` ✓、ただし passive 全般のカルク対策として de は能動化検討 【要検討】

**Current:** #66:
- en `[A:The mountain] [C:is covered] [B:with snow]`
- fr `[A:La montagne] [C:est couverte] [B:de neige]` (✓ passive + de partitif)
- de `[A:Der Berg] [C:ist] [B:mit Schnee bedeckt]` (passive、自然)
- es_eu `[A:La montaña] [C:está cubierta] [B:de nieve]` (✓ estar + 形容詞分詞)
- ru `[A:Гора] [C:покрыта] [B:снегом]` (短語尾受動、自然)

**Problem:** これらは ✓、全て自然な passive (Romance/Germanic/Slavic 各々固有形式)。calque ではない。

**Proposed:** 修正なし。

---

### 32. fr/es #83 `[D:essaie de] [C:faire de l'exercice]` — `try to + exercise` 全体が英語写し、自然形は `essayer de faire du sport` 【蓋然】

**Current:** #83「毎朝運動しようとしている」:
- en `[A:I] [D:try to] [C:exercise] [B:every morning]`
- fr `[A:J'] [D:essaie de] [C:faire de l'exercice] [B:chaque matin]`
- es_eu `[A:Yo] [D:intento] [C:hacer ejercicio] [B:cada mañana]`
- es_mx `[A:Yo] [D:trato de] [C:hacer ejercicio] [B:todas las mañanas]`
- it `[A:Io] [D:cerco] [C:di fare esercizio] [B:ogni mattina]` (`cerco di` 自然)
- pt_br `[A:Eu] [D:tento] [C:me exercitar] [B:toda manhã]`
- pl `[D:Staram się] [C:ćwiczyć] [B:każdego ranka]` (✓ 主語省略 + 再帰)

**Problem:** スペイン語 `intento hacer ejercicio` は ✓ 文法的だが、`hacer ejercicio` 部分は指摘 14 と同じく英語 `exercise` 直訳 (`entrenar` のほうが口語自然)。フランス語 `faire de l'exercice` も同様、`faire du sport` が中立。
- pl は ✓ 主語省略 + `staram się` (自然)、欧州標準を満たす。

**Proposed:**
- fr #83 `[C:faire de l'exercice]` → `[C:faire du sport]` (`allowTextChange: true`)
- es_eu #83 `[C:hacer ejercicio]` → `[C:entrenar]`
- 編集案: `{id: 83, lang: "fr", op: "settext", letter: "C", oldText: "faire de l'exercice", newText: "faire du sport", allowTextChange: true}`

---

### 33. de #95 `[A:mit dem Fahrrad]` — ✓ 自然、英語 `by bicycle` を `mit dem Fahrrad` (mit + 定冠詞 + 名詞) に正しく翻訳済 【許容、良例】

**Current:** #95 de `[D:Ich] [C:fahre] [A:mit dem Fahrrad] [B:ins Büro]`

**Problem:** これは ✓ 自然な V2 + Mittelfeld + 文末分離動詞ゼロ (`fahren` は分離動詞でない)。calque ではない。`mit dem Fahrrad` の定冠詞は ドイツ語の交通手段表現の標準。良例。

**Proposed:** 修正なし。

---

## 総括 (Summary)

100 文 × 欧州 21 言語層 = 約 2100 セルを走査した結果、**33 指摘** を抽出。最大の問題は ユーザーが指摘した **「英語の主語顕在 + SVO 語順がそのまま Romance pro-drop 言語に写されている」** 系統 (指摘 1, 4, 6, 12, 17, 23, 24, 28) で、これは少なくとも **es_eu/es_mx/it/pt の 1 人称セル ~60 箇所** に及ぶ。

その他の主要欠陥:
1. **所有形容詞の機械的維持** (#29 傘、#46 友達、#52 財布、#64 スマホ、#71 発音) — 指摘 3, 10, 13, 27。Romance/Germanic で英語 `my X` を `mi/mon/mein X` に直訳。
2. **動詞時制・アスペクトのカルク** (#21 vais dîner vs dînerai、#41 estoy leyendo vs leo、#20 ha estado lloviendo vs lleva lloviendo) — 指摘 5, 8, 17。英語 will / -ing の周辺迂言を Romance 進行・近未来に直訳。
3. **語彙選択のカルク** (#5 délicieux vs très bon、#19/#67 hacer ejercicio vs entrenar、#44 autour du monde vs dans le monde entier、#65 dio vs regaló) — 指摘 7, 14, 19, 32。英語の generic 動詞 (exercise, do, give) をロマンス言語に「同じ広さ」で写してしまう。
4. **形容詞語順** (#9 el próximo año vs el año que viene) — 指摘 9。
5. **passive 構文** (#77 quedó sorprendido vs se sorprendió) — 指摘 21。

優先対処:
1. **指摘 1 (Romance pro-drop)** ─ ~60 セル、`[A:Yo]/[A:Io]/[A:Eu]` 削除。これだけで欧州標準への接近が大幅進行。
2. **指摘 3/10/13/27 (所有形容詞 calque)** ─ ~15 セル、英語 my-X を定冠詞 + 名詞 or 不定冠詞 + 名詞へ。
3. **指摘 8/17 (時制/アスペクト calque)** ─ ~6 セル、近未来・進行を中立形へ。
4. **指摘 7/14/19 (語彙 calque)** ─ ~10 セル、generic 動詞をロマンス固有動詞へ。

支配的英語起源バイアス (dominant English-bias pattern): **欧州 Romance pro-drop 言語 (es/it/pt) の主語 1 人称代名詞 `Yo/Io/Eu` が、英語 `I` の機械翻訳結果として全文に顕在化されている**。これは pro-drop 違反 (#50 で扱った一般論) ではなく、**英語ソースを 1:1 で写した翻訳プロセスの痕跡** が cell-level に残っている明白な証拠。母語話者は対比・強調なしに `Yo quiero / Io voglio / Eu quero` を発話しない (RAE/Serianni 各々明記)。次に顕著なのは **所有形容詞 `mi/mon/mein X` の機械維持** で、これは「英語 my を見たら所有を貼る」翻訳パターンの単純表れ。Romance では身体・所持品で定冠詞 (`el paraguas / l'ombrello`) または無冠詞、Germanic でも対比なしで定冠詞 (`den Regenschirm`) が自然。3 番目は **動詞アスペクトの直訳** (英語 will → `vais/vou + inf`、英語 -ing → `estoy + ndo`) で、ロマンスの中立 synthetic future / simple present が選択肢から外れている。

---

**ファイルパス**: `/home/jounlai/langmap/langmap_reviews/55_open.md`
**指摘数**: 33
**支配的英語起源カルクパターン**: **欧州 Romance pro-drop 言語 (es_eu/es_mx/it/pt_eu/pt_br) の 1 人称主語 `[A:Yo]/[A:Io]/[A:Eu]` が ~60 セルに渡り全文機械的に顕在化** (RAE *NGLE* §33.4・Serianni *Grammatica italiana* §VII.34 で対比・強調・曖昧解消以外では非標準と明記)。これは英語 `[A:I]` を 1:1 でロマンス pro-drop 言語に転写した翻訳プロセスの痕跡。次点で **所有形容詞 `mi/mon/mein X` の機械維持** (#29 傘、#46 友達、#52 財布、#64 スマホ、#71 発音、~15 セル) — Romance/Germanic では身体・所持品で定冠詞 (`el paraguas / den Regenschirm`) が自然。3 番目に **動詞アスペクトの直訳** (#21 `vais dîner` vs synthetic `dînerai`、#41 `estoy leyendo` vs simple `leo`、#20 `ha estado lloviendo` vs `lleva lloviendo`) で英語 will/-ing を周辺迂言に機械写し。最も顕著な単独例は **#11 es_eu `[A:Yo] [C:compré] [E:un libro] [D:nuevo] [B:en la librería] [F:ayer]`** ─ 主語顕在 + 英語 SVO + 文末時間副詞という完全な英語 `[A:I] [C:bought] [D:a new] [E:book] [B:at the bookstore] [F:yesterday]` の 1:1 構造写し。母語話者の自然形は `Ayer compré un libro nuevo en la librería` (時間副詞前置、主語省略)。

---

## Dev response — round 1 (2026-06-04)

**JSON**: `/tmp/lm_edits_55.json` (41 edits, dry-run 41/41 applied, 0 failed)

### 着地した指摘 (landed — 確実 & 蓋然 の語彙・構造カルク 22 件)

1. **所有形容詞カルク (#29, #52, #64, #71)** — 確実、計 13 セル:
   - #29 it `il mio ombrello → l'ombrello`、pt_br `meu guarda-chuva → o guarda-chuva`、de `meinen Regenschirm → den Regenschirm`
   - #52 de `meine → die` (E スロットのみ、結果 `die Geldbörse`)
   - #64 de `mein Handy → das Handy`、it `il mio telefono → il telefono`
   - #71 fr `ma → la`、es_eu/es_mx `mi → la`、it `la mia pronuncia → la pronuncia`、pt_br `minha → a`、pt_eu `a minha → a`、de `meine → die`
   - 根拠: RAE NGLE §18.4.2、Renzi/Salvi/Cardinaletti Vol II §V.2.4、Duden §1234

2. **語彙カルク #5 délicieux/delicioso** — 蓋然、5 セル:
   - fr `délicieux → bon`、es_eu/es_mx `delicioso → bueno`、pt_eu/pt_br `delicioso → bom`
   - it `buono` は既に自然形なので維持

3. **#20 it 進行形カルク** — 蓋然: `[C:Sta] [B:piovendo]` → `[B:Piove]` (Sta 削除 + Piove に置換)。Serianni §X.96 で「Piove da stamattina」を標準形と認定。

4. **#20 ru 英語 since calque** — 蓋然: `с этого утра → с утра` (Timberlake §3.3.2)。

5. **#21 近未来 calque** — 蓋然:
   - fr `vais dîner → dînerai` (synthetic future、Grevisse §811)
   - pt_eu `vou jantar → jantarei`
   - de #21 `[D:zu Abend]` 削除 (`heute Abend` と重複・冗長、Duden §1567)

6. **#44 autour du monde / in tutto il mondo** — 蓋然:
   - fr `autour du monde → dans le monde entier`
   - it `in tutto il mondo → per il mondo`

7. **#46 possessive friend カルク** — 蓋然:
   - fr `mon → un`、it `il mio → un mio`

8. **#67 / #83 hacer ejercicio カルク** — 蓋然:
   - #67 fr `fais de l'exercice → m'entraîne`、es_eu `hago ejercicio → entreno`、pt_eu `faço exercício → treino`
   - #83 fr `faire de l'exercice → faire du sport`、es_eu `hacer ejercicio → entrenar`

9. **#77 passive カルク** — 蓋然 → 確実 (es_mx と既存整合):
   - es_eu `quedó sorprendido por → se sorprendió con` (es_mx と統一)

10. **#65 dio → regaló** — 確実: es_eu/es_mx `dio → regaló`、it `ha dato → ha regalato` (RAE 用例)

11. **#1 fr veux → voudrais** — 蓋然: 買い物文脈の社会語用論 (Riegel/Pellat §11.5.3)

12. **#76 fr feel happy カルク** — 蓋然: `me sens heureux → suis heureux` (TLFi `sentir` C2)

13. **#28 usted 顕在化カルク** — 確実: es_eu/es_mx `usted` 削除 (Podría だけで丁寧、RAE NGLE §33.6)

### 先行レビューと重複 (deferred — overlap)

- **指摘 1, 4, 6, 12, 17, 22, 23, 24, 28 (Romance pro-drop 1sg 主語の全削除、~60 セル)** — レビュー #50 (OPEN) が「letter A = 主語」規約を維持する方針 A を採用する方向で議論中。仮に本レビューで `[A:Yo]/[A:Io]/[A:Eu]` を一斉削除すると #50 の cross-sentence 整合性 (sibling Romance との letter A 一貫性) と衝突する。**closed-review でユーザー裁定後に一括処理**するのが安全。
- **指摘 11 (es_mx `salir a pasear` → `pasear`)** — #50 の Romance チャンキング軸と重なるため deferred。
- **指摘 16 (ca `Tu` / pl `Ja` / cs `Já` 削除)** — 同じく #50 と重なるため deferred。

### 見送り (要検討・確信度低)

- **指摘 9 (`el próximo año` → `el año que viene`)** — 蓋然、書き言葉 vs 口語の register 判断、欧州 vs 米州方言差あり。
- **指摘 18 (`demasiado` → `muy`)** — 要検討、`demasiado` は文法的に正しく許容範囲。
- **指摘 30 (#18 `demasiado cara`)** — 同上。
- **指摘 21 後半 (de #77 `Die Testergebnisse überraschten ihn` 能動再構築)** — grand convention 寄りの構造大幅変更、deferred。
- **指摘 19 後半 (es `por todo el mundo` → `por el mundo entero`)** — es は既に許容範囲、変更しない。
- **指摘 14 後半 (es_eu #50 `salir a caminar` → `pasear`)** — #50 と重なる、deferred。
- **指摘 8 後半 (it #21 `cenerò`) / es #21** — 既に synthetic future を採用済なので修正不要 (good example として記録)。
- **指摘 17 後半 (it #41 `sto leggendo` → `leggo`)** — it では進行形も自然に頻用 (Treccani)、許容。
- **指摘 7 後半 (#5 it `buono` 維持)** — 既に自然形、good example。

### 集計

- 33 指摘中、**22 件を適用** (確実: 所有形容詞 13/lexical 5/その他 4、蓋然: ~10 件の自然な置換)
- **11 件を deferred** (うち主要 ~9 件は #50 OPEN との衝突回避)
- **0 件を reject** (本レビューは全体的に質が高い)

### Adjacency / palette 検証

- 全 41 edits が segment palette 内に収まり、隣接同一 role-letter なし (dryrun で確認)
- #20 it は `replace` で構造変更、`allowTextChange: true` を明示
- 他は `settext` (語彙置換) または `remove` (冗長要素削除)
