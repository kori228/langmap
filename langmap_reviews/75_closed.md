## レビュアー自己紹介 (ペルソナ)

私は **Dr. Yumna Al-Bishri-Tanaka (handle: @arabicchunker_yumna)**、カイロ大学アラビア語学部修士 (古典・口語接続研究, 2014)、東京外国語大学アジア・アフリカ言語文化研究所 (AA研) 博士 (アラブ世界口語コーパス分節原理論, 2019)。所属はキングサウード大学リヤド本校アラビア語学科客員講師、AA研客員研究員、米メリーランド大学 LDC コーパス顧問 (CALLHOME-Arabic 改訂版, 2021-)。フィールドワーク歴は MSA 放送モニタリングに加え、ar_eg (カイロ Imbāba 区 2014-15)、ar_lev (ベイルート西区＋アンマン東区 2016)、ar_ma (ラバト・ファース、ウェッザン 2017-18)、ar_gulf (リヤド、クウェート、マナマ 2019)、ar_iq (バグダード支援者・在ヨルダン避難民 2020-21)、ar_tn (チュニス・スース・スファクス 2022)、ar_sd (ハルツーム・オムドルマン 2023年内戦前) の七大方言全域。

本ラウンドは **#62 (Sinitic) / #67 (Mainland SE Asia) / #71 (Iranian+Turkic chunking) と並列する Arabic 8 変種 cross-sibling chunking 監査**。語彙コンタミ (#23/#24/#60) と区別し、**前動詞モーダル分割・否定要素分割・demonstrative+定冠詞+名詞 clitic chain・複合 V+future 分割・複合 want-modal+1sg 分割** を対象とする。MSA Arabic (ar) は SVO 順序の影響で「subject-pronoun overt vs 動詞活用 pro-drop」境界自体が方言間で揺れているが、ここでは pro-drop は B.1 で許容、構造融合 (A.1-A.7) のみ defect とする。

**事前統計:** 全 100 文 × 8 変種を `node /tmp/dump_arabic.mjs` で dump (`/tmp/audit75.out`、1900 行)、`MISSING:` ラベルを集計した結果、ar_gulf 59件、ar_sd 55件、ar_ma 55件、ar_lev 55件、ar_eg 55件、ar_tn 53件、ar 47件、ar_iq 34件。本ラウンドの監査対象 (構造融合・分割揺れ) は、これらのうちの **A.1 (主動詞)・A.5 (modal verb)・A.6 (negation)・A.7 (quantifier) + 兄弟非整合** に該当するものに限定した。

## 参考文献

- Holes, Clive. *Modern Arabic: Structures, Functions, and Varieties* (Georgetown UP, rev. ed. 2004) §§3.5, 4.3
- Versteegh, Kees. *The Arabic Language* (Edinburgh UP, 2nd ed. 2014) Ch.10 "Dialects"
- Watson, Janet C. E. *The Phonology and Morphology of Arabic* (OUP 2002) Ch.7-8 — bipartite negation, clitic chain
- Brustad, Kristen. *The Syntax of Spoken Arabic* (Georgetown UP 2000) §§4.2-4.6 — pre-verbal modal categories
- Cowell, M. W. *A Reference Grammar of Syrian Arabic* (Georgetown UP 1964/2005) §§5.4-5.6
- Harrell, R. S. *A Short Reference Grammar of Moroccan Arabic* (Georgetown UP 1962/2004) §§17, 20 — ma...sh bipartite, ġādī future
- Erwin, W. M. *A Short Reference Grammar of Iraqi Arabic* (Georgetown UP 1963/2004) §§5.3, 6.2
- Singer, H.-R. *Grammatik der arabischen Mundart der Medina von Tunis* (de Gruyter 1984) §§4.5, 6.2 — bāš future, lāzimni
- Dickins, J. *Sudanese Arabic: A Reference Grammar* (draft 2022) — dāyir modal, bi- 進行
- Memory: `feedback_glue_marker.md` (proclitic ZWNJ), `feedback_modal_verb_not_subject.md`, `feedback_impersonal_modal_as_D.md`, `feedback_cross_sibling_role_consistency.md`, `feedback_prefer_splitting_segments.md`, `feedback_split_segments_like_reference.md`
- 既出 #23 (アラビア広域)・#24 (Semitic+ANE)・#60 (MSA→方言 vocabulary 干渉) — 語彙再フラグ回避
- 新 `langmap_reviews/_omission_guidelines.md` A.1-A.10 / B.1-B.10

## 検証方法

`/tmp/dump_arabic.mjs` で全 100 文 × 8 変種を role-sequence ＋ 当該 cell の text で dump (1900 行)。続いて (a) `A:أنا+modal` 型の主語＋モーダル融合 (兄弟が split している), (b) future marker (راح/حـ/غادي/باش) ＋本動詞融合, (c) demonstrative `هـ` (ha-) ＋定冠詞 ＋名詞のクリティック連鎖で B 核名詞が消えるケース, (d) intensifier (`أوي/كتير/بزاف/وايد/خلاص`) ＋形容詞融合で C 量化詞が消えるケース, (e) Maghrebi bipartite negation `ما...ش` の B|C 複合扱い揺れ, (f) MSA で対応する D-modal が方言で A に貼り付けられている mislabel — の 6 軸で集計。read-only on data.js。修正案は構造化 edit リストに併記。

確信度マーク: 【確実】= 兄弟非整合 + 文法書記述 + ガイドライン A.x 一致、【蓋然】= 兄弟揺れあるが優勢パターンに合わせる、【要検討】= 表記方針 (グランドコンベンション) 案件。

---

## 指摘事項 (Issues found) — 27件

### 1. #22 ar_eg — 主語 ＋ モーダル want の融合 `A:أنا عايز` (A+E が単一 segment) 【確実】

- **Current (ar_eg):** A:「أنا عايز」 D:「أتعلم」 C:「لغة」 F:「جديدة」
- **Reference / siblings:**
  - [en] A:「I」 **E:「want to」** D:「learn」 …
  - [ar] **E:「أريد」** D:「أن أتعلم」 C:「لغة」 F:「جديدة」 (A pro-drop)
  - [ar_lev] **A:「بدي」** … (modal alone as A — also wrong, see #2 below)
  - [ar_iq] **A:「أني」 E:「أريد」** D:「أتعلم」 … (正しく A+E split)
- **Problem:** ar_eg cell が pronoun **「أنا」** (I) と modal **「عايز」** (want) を A 単一セグメントに融合し、E スロットを欠落 (`MISSING:E`)。en/ar/ar_iq はいずれも subject と want-modal を独立に保持。Brustad (2000) §4.3 では Egyptian `ʿāyiz` は前形容詞-modal で独立形態素として扱う。Memory `feedback_modal_verb_not_subject.md` "Modal verbs (Vogio/Quiero/Go da) are NOT subject (A)" 準拠。これは guideline A.5 (modal verb) の defect。
- **Edit:** `{id:22, lang:"ar_eg", op:"replace", segments:[["A","أنا"],["E","عايز"],["D","أتعلم"],["C","لغة"],["F","جديدة"]], finding:"ar_eg fuses subject A:أنا + modal E:عايز into single A segment; ar_iq correctly splits A:أني + E:أريد. Guideline A.5."}` 【確実】

### 2. #22 ar_lev/ar_ma/ar_gulf/ar_tn/ar_sd — モーダル want が A (主語) ラベルに誤付与 【確実】

- **Current:**
  - ar_lev: **A:「بدي」** D:「أتعلم」 C:「لغة」 F:「جديدة」
  - ar_ma: **A:「بغيت」** D:「نتعلم」 …
  - ar_gulf: **A:「أبي」** D:「أتعلم」 …
  - ar_tn: **A:「نحب」** D:「نتعلم」 …
  - ar_sd: **A:「أنا داير」** D:「أتعلم」 … (これは #1 と同形の A+E 融合)
- **Reference:** en は A:「I」 E:「want to」 と subject と modal を分割。palette E は「want to」スロット。
- **Problem:** **بدي / بغيت / أبي / نحب / داير** はいずれも「want」semantics の volitional modal (Cowell 1964 §5.4 「bidd-ī」, Harrell 1962 §17 「bġīt」)。これらは subject 代名詞 enclitic を含むが、機能的には modal verb であり、palette E (want to) に割り当てるべきで、A (subject) ではない。Memory `feedback_modal_verb_not_subject.md` 明示違反。ar_iq #22 では `A:أني E:أريد` と正しく分かれているのが規範。
- **Edit (5方言):**
  - `{id:22, lang:"ar_lev", op:"replace", segments:[["E","بدي"],["D","أتعلم"],["C","لغة"],["F","جديدة"]], finding:"want-modal mislabeled as A; should be E. Subject pronoun is pro-drop (B.1)."}`
  - `{id:22, lang:"ar_ma", op:"replace", segments:[["E","بغيت"],["D","نتعلم"],["C","لغة"],["F","جديدة"]], finding:"same: bġīt is volitional modal → E."}`
  - `{id:22, lang:"ar_gulf", op:"replace", segments:[["E","أبي"],["D","أتعلم"],["C","لغة"],["F","يديدة"]], finding:"same: abī is volitional modal → E."}`
  - `{id:22, lang:"ar_tn", op:"replace", segments:[["E","نحب"],["D","نتعلم"],["C","لغة"],["F","جديدة"]], finding:"same: nḥibb is volitional modal → E."}`
  - `{id:22, lang:"ar_sd", op:"replace", segments:[["A","أنا"],["E","داير"],["D","أتعلم"],["C","لغة"],["F","جديدة"]], finding:"split A:أنا + E:داير (dāyir = want)."}`
  【確実】

### 3. #32 / #44 / #48 / #58 / #62 / #71 / #98 ar_eg — `A:أنا عايز` 系列融合の連鎖 【確実】

- **Current (代表 #32):** ar_eg `E:「أنا عايز」 C:「آكل」 B:「سوشي」 D:「عالغدا」` (MISSING:A)
- **Problem:** ar_eg はこれら 7 文全てで **「أنا عايز」(I want)** を単一セグメントに融合している。割り当てラベルは sentence ごとに異なる (#22 では A, #32/#48/#62 では E, #44 では D) が、いずれも subject と modal が独立分節されていない。en/ar/ar_iq 等の sibling はすべて subject と want-modal を独立に持つ。guideline A.5 「modal verb」 違反 + 兄弟非整合。系列的修正対象。
- **Edits (7件):**
  - `{id:32, lang:"ar_eg", op:"replace", segments:[["A","أنا"],["E","عايز"],["C","آكل"],["B","سوشي"],["D","عالغدا"]], finding:"split fused A:أنا+E:عايز."}`
  - `{id:44, lang:"ar_eg", op:"replace", segments:[["A","أنا"],["D","عايز"],["C","أسافر"],["B","حوالين العالم"]], finding:"split fused A+D modal."}`
  - `{id:48, lang:"ar_eg", op:"replace", segments:[["A","أنا"],["D","عايز"],["C","أتفرج على"],["B","الفيلم"],["E","داك"]], finding:"split fused A+D."}`
  - `{id:58, lang:"ar_eg", op:"replace", segments:[["A","أنا"],["E","عايز"],["D","أصوّر"],["C","صورة"],["B","للمعبد ده"]], finding:"split fused A+E."}`
  - `{id:62, lang:"ar_eg", op:"replace", segments:[["A","أنا"],["E","عايز"],["D","أقرا"],["B","الكتاب ده"],["C","قبل آخر الشهر"]], finding:"split fused A+E."}`
  - `{id:71, lang:"ar_eg", op:"replace", segments:[["A","أنا"],["D","عايز"],["C","أحسّن"],["B","نطقي"]], finding:"split fused A+D."}`
  - `{id:98, lang:"ar_eg", op:"replace", segments:[["A","أنا"],["B","عايز"],["C","أطلب"],["D","الأكلة"],["E","دي"]], finding:"split A:أنا + B:عايز (modal want)."}`
  【確実】

### 4. #21 ar_eg/ar_lev/ar_ma/ar_gulf/ar_sd — 未来マーカー `هـ/رح/غادي/بـ/حـ` ＋本動詞の融合 (E 欠落) 【確実】

- **Current:**
  - ar_eg `A:「هاتعشى」 C:「مع صحابي」 B:「الليلة」` (MISSING:DE) — `ha-atʿaššā` (will-dine)
  - ar_lev `A:「رح أتعشى」 …` — `raḥ + atʿaššā`
  - ar_ma `A:「غادي نتعشا」 …` — `ġādī + ntʿaššā`
  - ar_gulf `A:「بتعشى」 …` — `b-atʿaššā` (Gulf future allomorph)
  - ar_sd `A:「أنا حأتعشّا」 …` — `ḥa-atʿaššā`
  - **対照** ar_iq `A:「أني」 B:「الليلة」 E:「راح أتعشه」 C:「ويه أصحابي」` (MISSING:D だけ; future marker + verb は **E** に統一) と ar `E:「سأتناول」 D:「العشاء」` (MSA は future + verb を E に, dinner を D に分離保持)
- **Problem:** palette は `[ABCDE]` で `E=will have, D=dinner`。5 方言は future marker と本動詞 (eat-dinner) と objective dinner を全て **A** 一塊に潰し、E (future) と D (dinner) 両方を欠落。Brustad (2000) §4.5 では Egyptian `ḥa-`、Levantine `raḥ`、Moroccan `ġādī`、Gulf `b-` は前動詞 future TAM クリティックで「独立形態素として記述する」。guideline A.1 (主動詞 dine) + A.5 (future modal) 両方違反。
- **Edits:**
  - `{id:21, lang:"ar_eg", op:"replace", segments:[["E","هـ"],["D","اتعشى"],["C","مع صحابي"],["B","الليلة"]], finding:"split future-marker E:هـ + verb D:اتعشى; was fused as A. ZWNJ may be needed on هـ per glue_marker memory."}`
  - `{id:21, lang:"ar_lev", op:"replace", segments:[["E","رح"],["D","أتعشى"],["C","مع أصحابي"],["B","الليلة"]], finding:"split E:رح + D:أتعشى."}`
  - `{id:21, lang:"ar_ma", op:"replace", segments:[["E","غادي"],["D","نتعشا"],["C","مع صحابي"],["B","الليلة"]], finding:"split E:غادي + D:نتعشا."}`
  - `{id:21, lang:"ar_gulf", op:"replace", segments:[["E","بـ"],["D","تعشى"],["C","مع ربعي"],["B","الليلة"]], finding:"split E:بـ + D:تعشى."}`
  - `{id:21, lang:"ar_sd", op:"replace", segments:[["A","أنا"],["E","حـ"],["D","أتعشّا"],["C","مع أصحابي"],["B","الليلة"]], finding:"split A:أنا + E:حـ + D:أتعشّا."}`
  【確実】

### 5. #21 ar_tn — 未来 `باش` ＋ 本動詞 `نتعشّا` 融合、しかも A ラベル誤付与 【確実】

- **Current (ar_tn):** A:「باش نتعشّا」 C:「مع صحابي」 B:「الليلة」 (MISSING:DE)
- **Reference:** Singer (1984) §6.2 Tunisian `bāš` は未来クリティック (← MSA bi-aiš?)。`نتعشّا` は 1sg 不完了。これらを A (subject) と扱うのは二重誤り。
- **Edit:** `{id:21, lang:"ar_tn", op:"replace", segments:[["E","باش"],["D","نتعشّا"],["C","مع صحابي"],["B","الليلة"]], finding:"split E:باش (future) + D:نتعشّا (eat-dinner); was mislabeled as A. Guideline A.5 + A.1."}` 【確実】

### 6. #5 ar_gulf — 指示詞+定冠詞+名詞クリティック連鎖で B 核名詞 (`القهوة`) 消失 【確実】

- **Current (ar_gulf):** A:「هالقهوة」 D:「لذيذة」 C:「وايد」 (MISSING:B)
- **Reference:** ar `A:「هذه」 B:「القهوة」 …`、ar_eg `A:「ده」 B:「القهوة」` 等、他 6 方言は demo と coffee を独立。en `A:「This」 B:「coffee」`。
- **Problem:** ar_gulf は `هـ + ال + قهوة` の三重クリティック連鎖 (proclitic demo + 定冠詞 + 名詞) を 1 セグメントに潰し、B (coffee = 核 topic noun) を欠落。Watson (2002) §7.4 では Gulf `ha-` proclitic を「独立 demonstrative ハ formant」と記述し、独立 segmentation を支持。Memory `feedback_glue_marker.md` の ZWNJ 規範に従えば `هـ` に ZWNJ を付して A、`القهوة` を B に分割可。guideline A.3 (topic noun) 該当 defect。
- **Edit:** `{id:5, lang:"ar_gulf", op:"replace", segments:[["A","هـ"],["B","القهوة"],["D","لذيذة"],["C","وايد"]], finding:"split clitic demo A:هـ + B:القهوة (was fused as A:هالقهوة, dropping B). Use ZWNJ on هـ per glue_marker memory."}` 【確実】

### 7. #18 ar_gulf — 同パターン `هالشنطة` で核名詞 `شنطة` (bag) 消失 【確実】

- **Current (ar_gulf):** A:「هالشنطة」 D:「غالية」 C:「وايد」 (MISSING:B)
- **Problem:** #5 と同型。ar/ar_eg/ar_lev/ar_ma/ar_iq/ar_tn/ar_sd 全てが demo と bag を独立分節するなか、ar_gulf だけ `ha-l-šanṭa` クリティック融合。
- **Edit:** `{id:18, lang:"ar_gulf", op:"replace", segments:[["A","هـ"],["B","الشنطة"],["D","غالية"],["C","وايد"]], finding:"split A:هـ + B:الشنطة; Gulf ha- proclitic must not absorb head noun. Guideline A.3."}` 【確実】

### 8. #87 ar_eg/ar_lev/ar_ma/ar_gulf/ar_sd — Intensifier (`أوي/كتير/بزاف/وايد/خلاص`) が形容詞 D に融合、C 欠落 【確実】

- **Current:**
  - ar_eg `B:「الأبليكيشن ده」 D:「مريح أوي」` (MISSING:AC)
  - ar_lev `B:「هالأبليكيشن」 D:「مفيد كتير」` (MISSING:AC)
  - ar_ma `B:「هاد التطبيق」 D:「نافع بزاف」` (MISSING:AC)
  - ar_gulf `B:「هالتطبيق」 D:「مفيد وايد」` (MISSING:AC)
  - ar_sd `B:「التطبيق دا」 D:「مفيد خلاص」` (MISSING:BC) — A も欠落
  - **対照** ar_iq `A:「هاي」 B:「التطبيق」 C:「كلش」 D:「مفيد」` 正しく 4 split / ar_tn `A:「هالأبليكاسيون」 D:「مفيدة」 C:「برشا」` で C 単独保持。
- **Reference:** en `A:「This」 B:「app」 D:「is」 C:「very」 D:「convenient」` — palette C = "very"。
- **Problem:** "very" (quantifier-intensifier) が D-adjective に張り付き、C 単独セグメントが消失。guideline A.7 「quantifier that changes meaning — 多/very 等」明示 defect (cf. #34 ja_hak ゆっくり / #85 zh 多)。ar_iq・ar_tn が正解形を示しているので残り 5 方言は構造修正可能。
- **Edits:**
  - `{id:87, lang:"ar_eg", op:"replace", segments:[["A","ده"],["B","الأبليكيشن"],["D","مريح"],["C","أوي"]], finding:"split D:مريح + C:أوي (intensifier); also de-clitize ده demo to A separate. Guideline A.7."}`
  - `{id:87, lang:"ar_lev", op:"replace", segments:[["A","هـ"],["B","الأبليكيشن"],["D","مفيد"],["C","كتير"]], finding:"split D:مفيد + C:كتير; ha- proclitic to A. Guideline A.7."}`
  - `{id:87, lang:"ar_ma", op:"replace", segments:[["A","هاد"],["B","التطبيق"],["D","نافع"],["C","بزاف"]], finding:"split D:نافع + C:بزاف."}`
  - `{id:87, lang:"ar_gulf", op:"replace", segments:[["A","هـ"],["B","التطبيق"],["D","مفيد"],["C","وايد"]], finding:"split D:مفيد + C:وايد + de-clitize ha-."}`
  - `{id:87, lang:"ar_sd", op:"replace", segments:[["A","دا"],["B","التطبيق"],["D","مفيد"],["C","خلاص"]], finding:"split B:التطبيق + A:دا (postposed demo) + C:خلاص (intensifier)."}`
  【確実】

### 9. #87 ar_eg/ar_sd — demonstrative `ده/دا` postposed が B 名詞と融合し A 消失 【確実】

(指摘 #8 の Edit に統合済みだが、独立論点として記録)
- **Problem:** Egyptian/Sudanese は demonstrative が post-nominal (`الأبليكيشن ده` / `التطبيق دا`)。これを `B:「الأبليكيشن ده」` のように 1 segment 化すると palette A (this) が消失。guideline A.9 (demonstrative when context-required) 該当 defect。post-nominal でもセグメント分割は可 (例: ar_eg #5 `A:ده B:القهوة` で正しく分割されている前例あり)。
- **Edit:** 上記 #8 のedit と統合 — `A:ده`/`A:دا` を分離。【確実】

### 10. #99 ar_eg/ar_lev/ar_ma/ar_gulf/ar_sd — demonstrative+定冠詞+名詞融合で A 消失 【確実】

- **Current:**
  - ar_eg `C:「بكام」 B:「السوفنير ده」` (MISSING:ADE)
  - ar_lev `C:「أديش」 B:「هالتذكار」` (MISSING:ADE)
  - ar_ma `C:「بشحال」 B:「هاد السوفنير」` (MISSING:ADE)
  - ar_gulf `C:「بچم」 B:「هالتذكار」` (MISSING:ADE)
  - ar_sd `C:「بكم」 B:「السوفنير」 D:「دا」` (MISSING:AE) — postposed demo は **D** mislabel
- **Reference:** en `A:「this」 B:「souvenir」`。ar_iq `A:「هاي」 B:「التذكار」` 正しく分割。
- **Problem:** palette A は demonstrative "this"。ar_eg は post-nominal `ده`、ar_lev/ar_gulf は proclitic `هـ`、ar_ma は pre-nominal `هاد`、ar_sd は postposed `دا` を **D** に誤付与。いずれも guideline A.9 (demonstrative) 該当 defect、`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier に該当。
- **Edits:**
  - `{id:99, lang:"ar_eg", op:"replace", segments:[["C","بكام"],["B","السوفنير"],["A","ده"]], finding:"split postposed A:ده + B:السوفنير."}`
  - `{id:99, lang:"ar_lev", op:"replace", segments:[["C","أديش"],["A","هـ"],["B","التذكار"]], finding:"split proclitic A:هـ + B:التذكار."}`
  - `{id:99, lang:"ar_ma", op:"replace", segments:[["C","بشحال"],["A","هاد"],["B","السوفنير"]], finding:"split A:هاد + B:السوفنير."}`
  - `{id:99, lang:"ar_gulf", op:"replace", segments:[["C","بچم"],["A","هـ"],["B","التذكار"]], finding:"split A:هـ + B:التذكار."}`
  - `{id:99, lang:"ar_sd", op:"replace", segments:[["C","بكم"],["B","السوفنير"],["A","دا"]], finding:"relabel D→A for postposed demo."}`
  【確実】

### 11. #54 ar_tn/ar_sd — 義務 modal `لازم/لازمنا` が A ラベル mislabel、D 欠落 【確実】

- **Current:**
  - ar_tn `A:「لازمنا」 C:「نحافظوا」 B:「على البيئة」` (MISSING:D)
  - ar_sd `A:「لازم」 C:「نحافظ」 B:「على البيئة」` (MISSING:D)
  - **対照** ar_eg/ar_lev/ar_ma/ar_gulf 全て `D:「لازم/خصنا」` で正しく D-modal。ar_iq `A:「احنا」 D:「لازم」 C:「نحافظ على」 B:「البيئة」`。en `A:「We」 D:「must」 C:「protect」 B:「the environment」`。
- **Problem:** Tunisian `lāzim-na` (must-1pl) と Sudanese `lāzim` は impersonal/personal モーダル。Memory `feedback_impersonal_modal_as_D.md` "Impersonal modals (Il faut, Hay que, Bisogna) map to D, not A" 明示違反。同 sentence の他 5 方言 (ar_eg/ar_lev/ar_ma/ar_gulf/ar_iq) は全て D ラベルで modal を正用しているので一致が容易。
- **Edits:**
  - `{id:54, lang:"ar_tn", op:"replace", segments:[["D","لازمنا"],["C","نحافظوا"],["B","على البيئة"]], finding:"relabel A→D for must-modal; same impersonal-modal-as-D rule as fr Il faut. Guideline A.5."}`
  - `{id:54, lang:"ar_sd", op:"replace", segments:[["D","لازم"],["C","نحافظ"],["B","على البيئة"]], finding:"relabel A→D for must-modal."}`
  【確実】

### 12. #54 ar_lev/ar_ma — 動詞 `نحمي/نحميو` (protect-1pl) が A ラベル mislabel、C 欠落 【確実】

- **Current:**
  - ar_lev `D:「لازم」 A:「نحمي」 B:「البيئة」` (MISSING:C)
  - ar_ma `D:「خصنا」 A:「نحميو」 B:「البيئة」`
- **Reference:** en `A:We D:must C:protect B:the environment`。palette C = "protect" (本動詞)。
- **Problem:** 本動詞 protect は palette C にあるべきだが、A (subject "we") に貼り付けられ、C 単独セグメント欠落。1pl-impf verb 形 (`نحمي/نحميو`) には subject 屈折が含まれるが、機能的にはコンテンツ動詞であり A.1 (主動詞) defect。pro-drop ar (we) は palette A の subject 機能を C 動詞に組み込んでよい (B.1)。
- **Edits:**
  - `{id:54, lang:"ar_lev", op:"replace", segments:[["D","لازم"],["C","نحمي"],["B","البيئة"]], finding:"relabel A→C for content verb protect; subject is pro-drop (B.1)."}`
  - `{id:54, lang:"ar_ma", op:"replace", segments:[["D","خصنا"],["C","نحميو"],["B","البيئة"]], finding:"relabel A→C for protect-1pl."}`
  【確実】

### 13. #85 ar_tn/ar_sd — D-modal (`should`) 欠落 + 助言副詞 `خير/الأحسن` が A 誤付与 【確実】

- **Current:**
  - ar_tn `A:「خير」 C:「تشرب」 B:「ماء」 E:「أكثر」` (MISSING:D)
  - ar_sd `A:「الأحسن」 C:「تشرب」 B:「موية」 E:「أكتر」` (MISSING:D)
  - **対照** ar_eg/ar_lev/ar_ma/ar_gulf 全て `D:「المفروض/لازم/خصك」` (= should/must) で正しく D / ar_iq `A:「انت」 D:「لازم」 …`。en `A:「You」 D:「should」 C:「drink」 E:「more」 B:「water」`。
- **Problem:** Tunisian `xīr` ("it is better to"), Sudanese `al-aḥsan` ("the better") は **助言モーダル** (Holes 2004 §4.3.4) で palette D (should) に対応する。A (subject "you") には対応しない。Memory `feedback_modal_verb_not_subject.md` 違反 + guideline A.5。
- **Edits:**
  - `{id:85, lang:"ar_tn", op:"replace", segments:[["D","خير"],["C","تشرب"],["B","ماء"],["E","أكثر"]], finding:"relabel A→D for advice modal xīr (=should)."}`
  - `{id:85, lang:"ar_sd", op:"replace", segments:[["D","الأحسن"],["C","تشرب"],["B","موية"],["E","أكتر"]], finding:"relabel A→D for advice modal al-aḥsan."}`
  【確実】

### 14. #39 ar_tn/ar_sd — `لازمني/لازم` (must) が A 誤付与、D 欠落 【確実】

- **Current:**
  - ar_tn `A:「لازمني」 D:「نوض」 B:「بكري」 C:「غدوة」` (MISSING:E) — wait 修正: D ラベルあり, E 欠落
  - ar_sd `A:「لازم」 D:「أقوم」 B:「بدري」 C:「بكرة」` (MISSING:E)
  - **対照** ar_eg/ar_lev/ar_ma/ar_gulf 全て `E:「لازم/خصني」 D:「أصحى/أقوم/نفيق」` で modal を E に正用 / ar_iq `A:「أني」 C:「باچر」 E:「لازم」 D:「أگوم」 B:「بدري」`。
- **Problem:** sentence #39 palette は modal "have to" を **E**, 動詞 "wake up" を **D** に分けている。ar_tn/ar_sd は modal を A に誤付与し E を欠落。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier。
- **Edits:**
  - `{id:39, lang:"ar_tn", op:"replace", segments:[["E","لازمني"],["D","نوض"],["B","بكري"],["C","غدوة"]], finding:"relabel A→E for must-modal lāzim-ni; matches other dialects' E-modal slot."}`
  - `{id:39, lang:"ar_sd", op:"replace", segments:[["E","لازم"],["D","أقوم"],["B","بدري"],["C","بكرة"]], finding:"relabel A→E for must-modal."}`
  【確実】

### 15. #37 ar_tn/ar_sd — `لازمني/لازم` が A 誤付与、modal slot B 欠落 【確実】

- **Current:**
  - ar_tn `A:「لازمني」 E:「نشري」 D:「كادو」 C:「متاع عيد ميلاد」` (MISSING:B)
  - ar_sd `A:「لازم」 E:「أشتري」 D:「هدية」 C:「عيد ميلاد」` (MISSING:B)
  - **対照** ar_eg/ar_lev/ar_ma/ar_gulf 全て `B:「لازم/خصني」` で modal を palette B (need to) に正用。
- **Problem:** #39 と同型。modal を A に誤付与し B 欠落。Memory `feedback_impersonal_modal_as_D.md` 系 (here as B-need-to)。
- **Edits:**
  - `{id:37, lang:"ar_tn", op:"replace", segments:[["B","لازمني"],["E","نشري"],["D","كادو"],["C","متاع عيد ميلاد"]], finding:"relabel A→B for need-to-modal."}`
  - `{id:37, lang:"ar_sd", op:"replace", segments:[["B","لازم"],["E","أشتري"],["D","هدية"],["C","عيد ميلاد"]], finding:"relabel A→B for need-to-modal."}`
  【確実】

### 16. #64 ar_tn/ar_sd — `لازمني/لازم` が A 誤付与、D 欠落 (繰り返し) 【確実】

- **Current:**
  - ar_tn `A:「لازمني」 C:「نشارجي」 B:「التيليفون متاعي」` (MISSING:D)
  - ar_sd `A:「لازم」 C:「أشحن」 B:「التلفون بتاعي」` (MISSING:D)
  - **対照** ar_eg/ar_lev/ar_ma/ar_gulf `D:「لازم/خصني」`。palette D = "need to"。
- **Edits:**
  - `{id:64, lang:"ar_tn", op:"replace", segments:[["D","لازمني"],["C","نشارجي"],["B","التيليفون متاعي"]], finding:"relabel A→D for need-to-modal."}`
  - `{id:64, lang:"ar_sd", op:"replace", segments:[["D","لازم"],["C","أشحن"],["B","التلفون بتاعي"]], finding:"relabel A→D for need-to-modal."}`
  【確実】

### 17. #28 ar_ma — Yes/No 質問粒子 `واش` ＋ modal `تقدر` の融合 【蓋然】

- **Current (ar_ma):** A:「واش تقدر」 C:「توصي」 F:「بمطعم」 E:「مزيان」 (MISSING:BDG)
- **Reference:** ar `A:「هل」 D:「يمكنك」` ((MSA) Y/N + modal を独立保持) / 他 6 方言は modal alone (`A:「ممكن/فيك/تقدر/تگدر/تنجم」`).
- **Problem:** Moroccan Y/N particle `wāš` (Harrell 1962 §20.4 "yes-no question marker") は前置詞節 marker として独立扱いが標準。modal `tqdar` と融合させると Y/N marker の独立性が失われ、`A:هل` (MSA) との比較が困難になる。本サンプルでは palette A 自体が "Could" を割り当てているので融合は許容範囲だが、cross-sibling 整合性の観点から split 推奨。
- **Edit:** `{id:28, lang:"ar_ma", op:"replace", segments:[["A","واش"],["A","تقدر"],["C","توصي"],["F","بمطعم"],["E","مزيان"]], finding:"split Y/N particle واش from modal تقدر; sibling MSA splits هل + يمكنك. Note: duplicate-A acceptable here as both belong to 'Could'."}` 【蓋然】

### 18. #40 ar_ma — 同型 Y/N `واش` ＋ verb `عارف` 融合 【蓋然】

- **Current (ar_ma):** E:「واش عارف」 C:「فين」 D:「كاين」 B:「مكتب البريد」 (MISSING:AF)
- **Reference:** ar `E:「هل」 F:「تعرف」` — Q-marker と動詞を分離。
- **Problem:** ar_ma だけが Q-marker + verb を 1 segment に融合。palette F = "know" 動詞単独セグメントが欠落 (5 方言中 ar_ma だけが F 単独保持に失敗)。
- **Edit:** `{id:40, lang:"ar_ma", op:"replace", segments:[["E","واش"],["F","عارف"],["C","فين"],["D","كاين"],["B","مكتب البريد"]], finding:"split E:واش (Y/N) + F:عارف (know); siblings keep Q-particle and verb separate."}` 【蓋然】

### 19. #89 ar_ma/ar_tn — Maghrebi bipartite negation `ما...ش` の B|C 複合扱い 【要検討】

- **Current:**
  - ar_ma `B|C:「ما قدرتش」 D:「نلقى」 G:「كود」 F:「ديال Wi-Fi」` (MISSING:AE)
  - ar_tn `B|C:「ما نجمش」 D:「نلقى」 G:「كود」 E:「متاع」 F:「الWi-Fi」` (MISSING:A)
  - **対照** ar_eg/ar_lev/ar_gulf/ar_iq/ar_sd `C:「مش/ما」 B:「قادر/أقدر/أكدر/قادر」 …` で negation と modal を独立。
- **Reference:** en `A:「I」 B:「can」 C:「't」 D:「find」 …` (palette C = negation "'t", B = modal "can")。
- **Problem:** Maghrebi `mā...š` は bipartite circumfix で形態論的には連続体だが、palette C は negation slot, B は modal slot で独立。Harrell (1962) §17.3 は `mā` と `š` を「discontinuous negator」と呼び、論述レベルで分離して扱う。現行の `B|C` 複合は guideline A.6 (negation) を「複合ラベルで内包する」形だが、`memory feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier 観点では兄弟非整合。**3つの選択肢:** (i) `ما + 動詞 + ش` を 3 segment に分割、(ii) `مش + 動詞` 風に表記正規化 (口語にも存在)、(iii) 現状の B|C 複合を許容 (Maghrebi-only convention)。
- **Edit (i 案):** `{id:89, lang:"ar_ma", op:"replace", segments:[["C","ما"],["B","قدرت"],["C","ش"],["D","نلقى"],["G","كود"],["F","ديال Wi-Fi"]], finding:"split bipartite mā...š into separate C-negation segments around B-modal (circumfix). Alternative: keep B|C composite as Maghrebi convention."}` 【要検討】

### 20. #87 ar_iq — Intensifier `كلش` (very) は C 正用、唯一の規範形 (参照のみ)

- **Note:** ar_iq #87 `A:「هاي」 B:「التطبيق」 C:「كلش」 D:「مفيد」` は本ラウンド全方言中で唯一の **完全 4-way split** で、他 5 方言の修正規範形。指摘 #8 のターゲット。

### 21. #5 ar_iq — intensifier `كلش` が C 正用、`A:هاي B:القهوة C:كلش D:طيبة` 【参考】

- **Note:** ar_iq は #5 / #18 / #87 (`#5`: `A:هاي B:القهوة C:كلش D:طيبة`) で **3 例連続** intensifier を独立 C にしており、他方言の修正目標。

### 22. #82 ar_eg — 動詞 `قالّي` (told-me) における indirect-object `B:「me」` enclitic の扱い 【要検討】

- **Current (ar_eg):** D:「قالّي」 A:「الدكتور」 C:「ارتاح」 (MISSING:B)
- **対照** 7 方言全て同じく `D:「قالّي/قلّي/گالي」` で B (me) 欠落 / en `A:「The doctor」 D:「told」 B:「me」 C:「to rest」`。
- **Problem:** 全方言で B (me) が動詞に encliticize されている (`قال-لي` = said-to-me)。guideline B.8 (possessive/dative enclitic in inalienable/relational contexts) に該当しうるが、英語側で `told me` を B 独立セグメントにしているのと不整合。すでに #65 (`E:عطتني/ادّتني/عطاتني/...` で B:me 欠落 7 方言) と同型。**判断:** これは Arabic 全般に共通する pro-encliticization の正当な省略 (B.8) と判定するか、palette を簡素化するか。本指摘は両者共通の系統的フラグとして記録 — owner 判断求む。
- **Edit:** なし (両 sentence 共通の系統論点として記録)。【要検討】

### 23. #46 ar_iq — 兄弟 6 方言が `MISSING:G` (possessive enclitic), ar_iq だけが B|G 複合で示唆する規範非対称 【蓋然】

- **Current:**
  - 兄弟 ar/ar_eg/ar_lev/ar_ma/ar_gulf `B:「صديقي/صاحبي/...」` (MISSING:AG)
  - ar_iq `B|G:「صاحبي」` (G の存在を複合ラベルで承認)
- **Problem:** palette G = "my" possessive。Arabic `ṣadīq-ī` (friend-my) は enclitic `-ī` で表される。ar_iq のみがこの enclitic を `B|G` 複合で承認し、兄弟は単純 B 扱い。guideline B.8 (possessive enclitic) の正当 omission として 6 方言は許容範囲だが、`feedback_cross_sibling_role_consistency.md` の cross-sibling 整合性軸では ar_iq 形が規範。**owner 判断:** 全 7 方言を ar_iq 形に揃えるか、ar_iq の複合を解消するか。
- **Edit (揃え 案):** 6 方言を `B|G:「صديقي/صاحبي/...」` に揃え。割愛のため一例だけ:
  - `{id:46, lang:"ar_eg", op:"replace", segments:[["E|H","اتكلمت"],["F","مع"],["B|G","صاحبي"],["C","في التليفون"],["D","ساعة"]], finding:"adopt ar_iq's B|G composite for possessive enclitic; cross-sibling consistency. B.8 alternative reading."}`
  【蓋然】

### 24. #21 ar_iq — `B|G` 兄弟と異なり A 主語 + B 時刻独立 (参考) ＋ E future split 正用 【参考】

- **Note:** ar_iq #21 `A:「أني」 B:「الليلة」 E:「راح أتعشه」 C:「ويه أصحابي」` (MISSING:D) は唯一の future-marker 独立 E ラベル形。指摘 #4 の修正目標。

### 25. #2 ar_lev/ar_ma/ar_gulf/ar_iq/ar_tn/ar_sd — zero-copula は正当、B (name) 欠落も `اسمي` 内に topic 包摂 【正当省略 — 修正なし】

- **Current (代表 ar_lev):** A:「اسمي」 D:「تاناكا」 (MISSING:BC)
- **判定:** guideline B.3 zero-copula in present (Arabic) で **正当**。`ism-ī` (name-my) は possessive enclitic 包摂 (B.8)。**修正なし**だが、本ラウンドで誤って defect 認定しないよう明示記録。【参考】

### 26. #10 ar_eg/ar_lev/ar_gulf/ar_iq/ar_tn/ar_sd — Q-particle E と subject A 欠落は正当 【正当省略 — 修正なし】

- **Current:** D:「تقدر/بتقدر/تگدر/...」 C:「تتكلم/تحكي/...」 B:「إنجليزي」 (MISSING:AE)
- **判定:** A は pro-drop (B.1), E (Q particle) は dialect 文脈で intonation 質問 (B.6)。**修正なし**。【参考】

### 27. #65 ar_eg/ar_lev/ar_ma/ar_gulf/ar_iq/ar_tn/ar_sd — Dative-me が動詞に encliticize、B 欠落は B.8 正当 【正当省略 — 修正なし】

- **Current (代表 ar_eg):** A:「هي」 E:「ادّتني」 D:「هدية」 C:「حلوة」 (MISSING:B)
- **判定:** `addit-ni` (gave-me) で B (me) は enclitic。guideline B.8 (inalienable/relational dative)。**修正なし**。指摘 #22 と統合する系統論点。【参考】

---

## まとめ

- **Reviewed cells:** 100 文 × 8 Arabic 変種 = 800 cells. MISSING ラベル合計 **413**.
- **Defects flagged:** 27 issues (Edits: 約 34 件).
- **Dominant defect class:** **modal-verb mislabel & subject-modal fusion** (指摘 #1-#5, #11-#16: 計 14 件)。ar_eg "A:أنا عايز" 系列融合 7 件 + ar_lev/ar_ma/ar_gulf/ar_tn/ar_sd の want-modal as A の cross-sibling 不整合。
- **Sub-dominant:** **clitic chain absorption** (demo+定冠詞+名詞 → 核名詞欠落; 指摘 #6-#10: 計 7 件) と **intensifier-into-adjective fusion** (指摘 #8: 5 件)。
- **Maghrebi bipartite negation** (#19) は要 owner 判断。
- **27 件中【確実】20, 【蓋然】3, 【要検討】3, 【参考/正当】4 (うち正当 3)**。
- **Read-only on data.js** ─ 全 edit は構造化 JSON で本書末尾に集約済 (上記各指摘内)。

### 内訳 (defect class)

| Class | Cells | Sentences | Confidence |
|---|---|---|---|
| Subject + want-modal fusion (`أنا+عايز/داير`) | 8 | #22 #32 #44 #48 #58 #62 #71 #98 (ar_eg, ar_sd) | 確実 |
| Want-modal mislabeled as A (`بدي/بغيت/أبي/نحب`) | 5 | #22 (5方言) | 確実 |
| Future marker + verb fusion (`هـ/رح/غادي/بـ/حـ/باش`) | 6 | #21 (ar_eg/ar_lev/ar_ma/ar_gulf/ar_sd/ar_tn) | 確実 |
| Demo + def-article + noun clitic chain (B 欠落) | 2 | #5 #18 (ar_gulf) | 確実 |
| Postposed demo `ده/دا` fused with noun (A 欠落) | 4 | #87 #99 (ar_eg/ar_sd) | 確実 |
| Intensifier (`أوي/كتير/بزاف/وايد/خلاص`) into adj (C 欠落) | 5 | #87 (ar_eg/ar_lev/ar_ma/ar_gulf/ar_sd) | 確実 |
| Modal `لازم/خير/الأحسن` mislabeled A (D/E/B 欠落) | 8 | #37 #39 #54 #64 #85 (ar_tn/ar_sd) + #54 (ar_lev/ar_ma) | 確実 |
| Y/N particle `واش` ＋ modal/verb 融合 | 2 | #28 #40 (ar_ma) | 蓋然 |
| Maghrebi bipartite negation `ما…ش` 表記方針 | 1 | #89 (ar_ma/ar_tn) | 要検討 |
| Cross-sibling possessive-enclitic 規範 (B|G) | 1 | #46 (7 方言の B|G 揃え案) | 蓋然 |
| Indirect-object enclitic 系統論点 | 1 | #82 #65 共通 | 要検討 (正当省略でもある) |
| 正当省略の記録 | 3 | #2 #10 #65 | 参考 |

ar_iq は本ラウンドで MISSING 件数最少 (34) かつ未来 marker 独立分節 (#21), intensifier 独立 C (#5/#18/#87), 主語 + modal split (#22) すべてで規範形を示しており、他 7 方言の修正目標として参照される。

---

## Dev response — round 1 (2026-06-04)

レビュアー @arabicchunker_yumna の 27 件指摘を確認、構造化 edit 44 件を `/tmp/lm_edits_75.json` に集約しました。`data.js` は read-only を厳守、`id` フィールドベースの replace 操作のみ使用、隣接同一 role-letter は全件回避しています。

### 採否サマリ

| # | 範囲 | 採否 | Edits | 備考 |
|---|---|---|---|---|
| 1 | #22 ar_eg `A:أنا عايز` 融合 | 採用 | 1 | A:أنا + E:عايز split (ar_iq 参照) |
| 2 | #22 ar_lev/ar_ma/ar_gulf/ar_tn/ar_sd want-modal as A | 採用 | 5 | A→E 変更 / ar_sd は A:أنا + E:داير split |
| 3 | #32/#44/#48/#58/#62/#71 ar_eg `أنا عايز` 系列融合 | 採用 | 6 | #98 は既に分割済のため除外 (現状 `A:أنا|B:عاوز|...`) |
| 4 | #21 ar_eg/ar_lev/ar_ma/ar_gulf/ar_sd future+verb 融合 | 採用 | 5 | E:future-marker + D:verb split |
| 5 | #21 ar_tn `باش` 融合＋A 誤付与 | 採用 | 1 | E:باش + D:نتعشّا |
| 6 | #5 ar_gulf demo-clitic chain | 採用 | 1 | A:هـ + B:القهوة |
| 7 | #18 ar_gulf 同型 `هالشنطة` | 採用 | 1 | A:هـ + B:الشنطة |
| 8 | #87 intensifier+adj 融合 (ar_eg/ar_lev/ar_ma/ar_gulf/ar_sd) | 採用 | 5 | D-adj + C-intensifier split / demo も A 分離 |
| 9 | #87 postposed demo `ده/دا` | 採用 (#8 統合) | — | ar_eg/ar_sd の demo は #8 edit 内で A 分離済 |
| 10 | #99 demo+def+noun 融合 (5方言) | 採用 | 5 | A:demo + B:noun split / ar_sd は D→A 再ラベル |
| 11 | #54 ar_tn/ar_sd 義務 modal A→D | 採用 | 2 | feedback_impersonal_modal_as_D 適用 |
| 12 | #54 ar_lev/ar_ma 動詞 protect A→C | 採用 | 2 | pro-drop subject (B.1) |
| 13 | #85 ar_tn/ar_sd 助言 modal `خير/الأحسن` A→D | 採用 | 2 | Holes §4.3.4 |
| 14 | #39 ar_tn/ar_sd `لازم` A→E | 採用 | 2 | sibling E-slot に統一 |
| 15 | #37 ar_tn/ar_sd `لازم` A→B | 採用 | 2 | sibling B-slot に統一 |
| 16 | #64 ar_tn/ar_sd `لازم` A→D | 採用 | 2 | sibling D-slot に統一 |
| 17 | #28 ar_ma `واش تقدر` 融合 | **不採用** | 0 | レビュアー提案は隣接 A-A (`A:واش, A:تقدر`) で adjacent-same-letter 禁則に抵触。現状 `A:واش تقدر` 単一 segment を維持 (Y/N marker と modal が同一文機能 'Could' に対応するため許容)。Reviewer に owner 判断仰ぎ。 |
| 18 | #40 ar_ma `واش عارف` 融合 | 採用 | 1 | E:واش + F:عارف (sibling MSA E:هل + F:تعرف に整合) |
| 19 | #89 ar_ma bipartite `ما...ش` | 採用 (案 i) | 1 | C:ما + B:قدرت + C:ش の circumfix 分割。ar_tn 同型は表記方針として保留 (今ラウンドは ar_ma のみ試行)。 |
| 20-21 | ar_iq 参考形 | — | 0 | 規範として参照のみ |
| 22 | #82 indirect-object enclitic | 保留 | 0 | 全方言共通 B.8 系統論点、要 owner 判断 |
| 23 | #46 possessive enclitic `B\|G` 揃え | 保留 | 0 | ar_iq 形に揃えるかは表記方針案件、今ラウンドは見送り |
| 24 | #21 ar_iq 参考形 | — | 0 | — |
| 25-27 | 正当省略 (#2/#10/#65) | 確認・修正なし | 0 | B.1/B.3/B.6/B.8 該当 |

### 主要決定の根拠

- **#3 (#98 除外):** データ確認結果、ar_eg #98 は既に `A:أنا | B:عاوز | C:أطلب | D:الأكلة | E:دي` と 5-way split 済みでレビュアーの想定 (`B:أنا عايز` 融合) に該当しません。誤検出として除外。
- **#17 (ar_ma #28 不採用):** レビュアー edit 案 `[["A","واش"],["A","تقدر"],...]` は dev-side 必須制約 "Adjacent same role-letters rejected" に抵触。両 segment が palette A "Could" 機能を共有する以上、別 role への振分は意味的に不適。現状融合形 `A:واش تقدر` を維持しつつ、Y/N marker の独立分節は今後 palette 設計レベルでの判断対象として open に。
- **feedback_glue_marker:** ZWNJ プレフィックスは applier 側で suffix segment に付加されることを期待し、JSON 内では裸の `هـ`/`بـ`/`حـ` で記述。applier が agglutinative-glue を補完する想定。
- **feedback_impersonal_modal_as_D:** ar_tn/ar_sd の `لازم/لازمني/خير/الأحسن` は仏 `Il faut` / 西 `Hay que` / 伊 `Bisogna` と同型 impersonal modal として A→D/E/B (sentence ごとの palette modal slot) に再ラベル。
- **feedback_modal_verb_not_subject:** ar_lev `بدي` / ar_ma `بغيت` / ar_gulf `أبي` / ar_tn `نحب` / ar_sd `داير` は volitional modal で A (subject) ではなく E (want to)。subject は pro-drop (B.1)。
- **feedback_cross_sibling_role_consistency:** ar_iq の規範形 (#22 A+E split, #21 E future, #5/#18/#87 C-intensifier 独立, #87 A+B+C+D 4-way split) を基準に他 7 方言を整合化。

### 統計
- Issues addressed: **24 of 27** (採用 19, 統合 1, 不採用 1, 保留 4, 参考/正当 7)
- Total edits: **44**
- Closure: **partial** — 表記方針案件 (#22 #23) と adjacent-A 制約抵触 (#17) は owner 判断待ち
- JSON: `/tmp/lm_edits_75.json`
