# LangMap セグメント省略可能性ガイドライン

このドキュメントは、LangMap データで「palette に定義されている role-letter
（A/B/C/D/E/F/G/H）」のうち、ある言語のセルで**実際に segment として現れていない**
場合を、(1) **正当な省略**として受け入れるか、(2) **defect**として修正すべきかを
判断する基準を定義する。

ユーザー指摘 (2026-06-04): #34 ja_hak で D=manner-adverb（ゆっくり = slowly）が
B に融合されていた事例。「意味を持つセグメントの欠落」と「省略可能な要素の欠落」を
区別する必要がある。

---

## 判定原則

### A. 必ず present （欠落は defect）

以下のいずれかに該当する role は、文の意味を構成する**核要素**であり、欠落は修正対象：

1. **主動詞 / content verb** — 動作・状態を表す主要動詞（食べる、行く、降る等）
2. **主目的語 / direct object** — 動作の対象（本、水、手紙等）
3. **主題語 / topic noun** — 文の主題となる名詞（家、人等、複合語の中核）
4. **manner adverb** — 動作の様態を表す副詞（slowly = ゆっくり、carefully = 慎重に）
   - **#34 ja_hak の事例**：「ゆっくり」は単なる修飾ではなく文の中核意味
5. **modal verb** — 意志・可能・義務を表す（want, can, should, must）
6. **negation marker** — 否定（not, 不, 唔, 毋, ない, не）
7. **quantifier that changes meaning** — 「more」「very」「all」等の意味を変える量化詞
8. **wh-question word** — 疑問詞（who, what, where, why, how）
9. **demonstrative when context-required** — 文脈で必須の指示詞
10. **comparative/superlative marker** — 比較・最上級が文意の核

これらが palette にあるのにセル内に segment として出現しない場合は、
**fused（他 segment への融合）か missing（完全欠落）として修正**。

### B. 正当な省略 （欠落を許容）

以下は言語特性上の正当な省略：

1. **Subject pronoun in pro-drop languages**
   - es/it/pt/ja/ko/zh: 動詞活用または文脈で主語が明示不要
   - 例: es "Quiero comer" → E:Quiero (A 欠落、これは正当)

2. **Definite/indefinite articles in articleless languages**
   - zh/ja/ko/ru/fi/tr 等は冠詞なし
   - 例: zh `B:水` (the/a 欠落、正当)

3. **Copula in zero-copula contexts**
   - zh 現在形 / ru 現在形 / ar 現在形は copula 欠落が正常
   - 例: ru "Я доктор" → A:Я B:доктор (D=is 欠落、正当)

4. **Relative pronoun "that" in optional contexts**
   - en "the book I read" — that 省略可能（that-deletion 言語）
   - 例: D:that 欠落は en で正常な場合あり

5. **Honorific/register particles**
   - ja です/ますの省略、ko 요 の省略は register 選択
   - 一律修正対象とはしない

6. **Sentence-final discourse particles**
   - ja か/ね/よ、zh 啊/呢/吧、yue 呀/啦 は文脈で省略可
   - 質問文の question particle（必須）とは区別

7. **Aspect particles in pro-aspect languages**
   - ja た、zh 了 等は明示しなくても文意が通る場合あり
   - ただし「完了」「進行」が文意の核なら必須

8. **Possessive in inalienable/relational contexts**
   - 多くの言語で「私の母」→「お母さん」(possessive 省略) が自然
   - ar "أمي" (my-mother、enclitic)

9. **Subject in imperatives**
   - en "Please come" — 2sg 主語省略
   - ja お越しください — 主語省略
   - これは imperative mood の特性

10. **Object incorporation in polysynthetic languages**
    - iu 目的語が動詞に incorporated されるのは正常
    - en 1 word ≠ iu 1 word（multi-morpheme word が普通）

### C. 判定が分かれる（要 owner 判断）

1. **時間副詞の位置**：sentence-initial vs sentence-final
2. **強調用 demonstrative**：emphasis vs 通常 demonstrative
3. **既知情報の省略**：discourse-old reference の扱い

---

## Audit 手順

1. **palette gap が出た cell を抽出** — `Object.keys(s.segments)` vs cell の role-letter
2. **欠落 role を分類**:
   - A (subject) → 言語の pro-drop 特性をチェック → B/C 該当なら正当
   - B (object) → 通常必須、欠落は要調査
   - C (verb) → ほぼ必須、欠落は defect の強い疑い
   - D (modal/manner/aux) → 文脈次第、上記 A.4-7 の場合 defect
   - E (additional content) → 文意次第
3. **defect 判定の場合**：他 segment への融合を疑い、再分割
4. **正当判定の場合**：closed_review に「正当な省略」として記録

## 実例

| 例 | 欠落 role | 判定 | 理由 |
|---|---|---|---|
| #34 ja_hak `B:もうちょっとゆっくり` | D=ゆっくり | **defect** | manner adverb が B に融合（A.4） |
| #20 km `B:បានភ្លៀង` | D=ភ្លៀង | **defect** | 主動詞 rain が B に融合（A.1） |
| #22 km `E:ចង់រៀន` | D=រៀន | **defect** | 主動詞 learn が E に融合（A.1） |
| #85 zh `C:多喝` | E=多 | **defect** | quantifier 多 が C に融合（A.7） |
| #1 es `D:Compré` | A=Yo | **正当** | 西語 pro-drop（B.1） |
| #43 zh `B:水` | (the) | **正当** | 中国語に冠詞なし（B.2） |
| #2 ru `A:Меня зовут B:Танака` | D=is | **正当** | 露語 zero-copula（B.3） |

---

このガイドラインに基づき、61 reviews / 3700+ edits で残存している palette-gap
case は系統的に再評価される。
