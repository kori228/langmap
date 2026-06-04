# LangMap データレビュー #102 — emotion vocabulary cross-cutter (#76 happy / #77 surprised / #79 sad, #82 rest-as-tired-adjacent)

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Saoirse Halloran-Tanizaki (handle: @emotion_lex_audit)**、トリニティ・カレッジ・ダブリン認知言語学博士 (2018、感情語彙の言語間意味地図 / Wierzbicka NSM 系統)、京都大学比較文化研究所客員研究員 (2019-2021、日本語「切ない / 寂しい / 悲しい」三項対立の自然意味メタ言語分析)、現在 Max-Planck-Institut für Psycholinguistik (Nijmegen) 客員 fellow。Anna Wierzbicka *Emotions Across Languages and Cultures* (CUP 1999) と Ekman の Basic Emotions 系統論争を踏まえつつ、本ラウンドでは **lexical specificity / adjective-vs-verb realization / honorific register / dialect lexical differentiation** の 4 軸で **#76 (happy)**, **#77 (surprised)**, **#79 (sad)** 三 sentence cross-cut audit を担当。**#82 (doctor told me to rest)** は emotion ではないが「疲労 / 回復」概念で隣接するため register / honorific 観点で同時に扱う。なお #50 (私の犬は散歩が好きだ) は「好き = like" preference であり emotion vocabulary には属さないと判断、本ラウンドの scope 外とする (発注時の "Likely sentences" は preliminary guess であり実 data 確認後に確定 scope)。

## 参考文献

- Wierzbicka, A. *Emotions Across Languages and Cultures: Diversity and Universals* (Cambridge University Press 1999)
- Wierzbicka, A. *Semantics: Primes and Universals* (Oxford 1996) ch. 7 (emotion primes: feel good, feel bad, feel something good)
- Ekman, P. & Davidson, R. eds. *The Nature of Emotion* (Oxford 1994)
- Russell, J.A. "Culture and the categorization of emotions" *Psych Bulletin* 110:3 (1991)
- 日本語感情語彙: 山岡政紀 *日本語における感情表現の研究* (くろしお出版 2008)、佐藤大和「『悲しい』『寂しい』『切ない』の意味分析」*計量国語学* 28 (2012)
- 沖縄語: 仲原穣『沖縄語辞典』(国立国語研究所 1963) s.v. ちむぐりさん (chimugurisan)、宮古・八重山方言基礎語彙 (国立国語研究所 *琉球諸方言研究* 2010)
- 朝鮮語感情語彙: 임지룡『한국어 감정 표현의 의미와 구조』(태학사 2006)
- Spanish gustar-class / ponerse / sentirse periphrastics: NGLE §16.10.2 (RAE 2009)
- AAVE / HCE: Rickford & Rickford *Spoken Soul* (Wiley 2000); Sakoda & Siegel *Pidgin Grammar* (Bess Press 2003)
- Memory: `feedback_dialect_vocab_differences.md`, `feedback_cross_sibling_role_consistency.md`, `feedback_modal_verb_not_subject.md`, `feedback_prefer_splitting_segments.md`, `feedback_glue_marker.md`
- `_omission_guidelines.md` §A (核要素欠落) / §B (省略許容)

## 検証方法

`/tmp/s77.txt`, `/tmp/s79.txt`, `/tmp/s82.txt` に該当 sentence range を分離、`awk` で `(lang, role, surface)` 三項組を全 223 lang × 3 sentence で dump。以下 4 軸で精査：

1. **Lexical specificity** — happy/sad/surprised の上位下位語彙 (e.g. happy vs joyful vs content vs blissful)、抽象 vs 身体感覚 (e.g. 切ない = chest-tight, ちむぐりさん = liver-suffering) の選択
2. **Adjective vs verb realization** — be-Adj (en "is sad", ja "悲しい") vs become-Adj (zh "感到吃惊", ja #76 "幸せな気持ちになる") vs feel-N (sw "ana huzuni" = "she has sadness", hi "खुशी महसूस होती है" = "happiness is felt") の構文分岐が role-letter (B vs C+D) と整合するか
3. **Cultural emotion terms** — 沖縄語 ちむぐりさん / Hakata 寂しか / Hawai'ian Pidgin の lexical differentiation の妥当性
4. **Intensity gradation & dialect outliers** — 兄弟方言間で intensity 副詞 (very/right/plumb/真/very/好/老/贼/盡/蛮/真) の分布が一貫しているか、dialect register が emotion lexeme に反映されているか

**data.js は READ-ONLY**。提案は各項目末に `{id, lang, op, segments, finding}` 形式で apply2 用 edit を併記。確信度は **【確実】** = sibling 整合 / lexical mismatch 明確、**【蓋然】** = 解釈余地あるが推奨は強い、**【要検討】** = policy 上 deferred すべき。

---

## 指摘事項 (Issues found) — 20 件

### 1. #79 ja_hak `B:寂しか` = 「lonely」 vs 兄弟 ja_* 全変種 `B:悲し*` = 「sad」 — emotion category drift 【確実】

- **Current:** ja_hak `B:寂しかと`
- **Reference / siblings:** ja `B:悲しい`, ja_edo `B:悲しい`, ja_heian `B:悲し`, ja_osa `B:悲しいねん`, ja_kyo `B:悲しいんどすえ`, ja_hir `B:悲しいんじゃ`, ja_aom `B:かなすぃじゃ` (= 悲しい), ja_mvi `B:かなさりゅー`, ja_rys `B:かなさん` — 全 9 兄弟方言が「悲し-」系。ja_oki だけ `B:ちむぐりさんどー` (後述 #2)。
- **Problem:** 日本語感情語彙において **寂しい (sabishii) = 「lonely / missing someone」**、**悲しい (kanashii) = 「sad / sorrow」** は意味的に重なるが核は別 (山岡 2008 §3.2、佐藤 2012)。「友達が引っ越したので」という文脈は「lonely」も「sad」も成り立つが、en/ko/zh/全 ja 兄弟が「sad」を採用しているのに **Hakata 方言だけ「lonely」に語彙シフト** は cross-sibling lexical drift。`feedback_dialect_vocab_differences.md` は「famous vocab differences」を奨励するが、これは語彙差ではなく **意味カテゴリーの drift** で別問題。Hakata に「悲しか」は普通に存在する (博多方言辞典標準形)。
- **Decision:** ja_hak を `B:悲しか` (Hakata 形容詞語尾「-か」終止) に統一。reference ja の感情カテゴリーに揃える。
- **Edit:** `{id:79, lang:"ja_hak", op:"replace", segments:[["A","あの子は"],["D","友達が"],["E","引っ越した"],["C","けん"],["B","悲しか"]], finding:"ja_hak uses '寂しか' (lonely) breaking emotion category — 9 sibling ja variants all use 悲し-/かなさ- (sad). Hakata has '悲しか' (-か adj ending); align to 'sad' lexeme."}` 【確実】

### 2. #79 ja_oki `B:ちむぐりさんどー` — culturally specific liver-emotion term, **keep + document** 【確実】

- **Current:** ja_oki `B:ちむぐりさんどー` (chimugurisan-doo)
- **Analysis:** 沖縄語「ちむぐりさん」(肝苦りさん) は文字通り「肝 (chimu = liver / 心) が苦しい」、Wierzbicka 流 NSM では「I feel something bad in my body when I think about you」に近い、英語 "heartache" / 日本語「切ない」+「不憫」+「sympathetic sorrow」の混合概念。文脈「友達が引っ越したので彼女は悲しい」では sympathetic な側面が前景化し、ちむぐりさん は **lexically richer** な選択。`feedback_dialect_vocab_differences.md` 適用例として正当。
- **Recommendation:** **維持**。ただし `_policy_deferred.md` または将来の沖縄語 culturally-rich-lexeme リストに記録すべき。比較として ja_hak (#1) は単に lexical drift なので是正対象、ja_oki は cultural anchor で保持、の二分基準を明示。
- **Edit:** `{id:79, lang:"_meta", op:"document", finding:"ja_oki 'ちむぐりさん' (liver-suffering, sympathetic sorrow per 仲原 1963) is a culturally distinctive lexeme — keep. Distinguish from ja_hak '寂しか' (#1) which is mere category drift. Policy: dialect-specific emotion lexemes are kept when they encode a culturally distinct concept (chimugurisan = empathic ache), not when they simply substitute a near-synonym."}` 【確実】

### 3. #76 ja `D:幸せな気持ちになる` (become-happy) vs en `D:feel happy` (be/feel-happy) — typological mismatch documentation 【要検討】

- **Current:** ja `D:幸せな気持ちになる` (lit. "become a happy feeling"), en/en_aave/en_ie/... `D:feel happy`, fr `D:suis heureux` (am-happy, be-Adj), it/es `D:Mi sento felice` / `Me siento feliz` (myself-feel-Adj, reflexive sentir), zh `D:感到很开心` (feel-very-happy), th `D:รู้สึกมีความสุข` (feel-have-happiness), tr `D:mutlu hissederim` (happy feel-I).
- **Analysis:** これは emotion realization の 4 構文型 cross-cutter — (a) **be-Adj**: en/de/it (one-word copula+adj), (b) **feel-Adj**: en "feel happy", de "fühle mich glücklich" (reflexive), (c) **become-N/Adj**: ja "幸せな気持ちになる", ko "행복함을 느낀다" (sense-happiness), pt_eu "fico feliz" (become-happy via ficar), (d) **have-N**: hi "खुशी महसूस करता हूँ" (do feel-of happiness), sw "nahisi furaha" (sense joy). 全 4 型が D 単独セグメント (=「emotion predicate as a unit」) で扱われており role-letter 配分は問題なし。ただし **typological documentation** が `_meta` に存在しない。
- **Decision:** **policy 文書化**。emotion-clause realization の 4 型を `_omission_guidelines.md` §B.10 等に追補すれば、将来 emotion 関連 sentence (現在 #76 / #77 / #79 の 3 件のみ) を追加する際の role-letter 配分ガイドになる。本 cell の修正は不要。
- **Edit:** `{id:76, lang:"_meta", op:"document", finding:"Emotion-clause realization typology: (a) be-Adj (en/de/it), (b) feel-Adj reflexive (de/fr/it/es 'mi sento'), (c) become-N/Adj (ja '気持ちになる', pt 'fico'), (d) have/sense-N (hi 'खुशी महसूस', sw 'nahisi furaha'). All four types are kept as single D segment per current dataset; this is acceptable. Policy: do not force role-letter split between feel/sense vs. happy/joy across types — keep emotion-predicate as a single semantic unit."}` 【要検討】

### 4. #76 / #77 / #79 vi / vi_c / vi_s emotion lexemes — 三変種が同一語彙、dialect differentiation 欠落 【蓋然】

- **Current:**
  - #76: vi `D:cảm thấy hạnh phúc`, vi_c `D:cảm thấy vui`, vi_s `D:thấy vui` — 部分的差分あり (hạnh phúc / vui)
  - #77: vi `C:bị bất ngờ`, vi_c `C:bị bất ngờ`, vi_s `C:bị bất ngờ` — **完全同一**
  - #79: vi `B:buồn`, vi_c `B:buồn`, vi_s `B:buồn` — **完全同一**
- **Problem:** ベトナム語 3 変種 (vi 標準/北部, vi_c 中部, vi_s 南部) は **A-segment「She」では `Cô ấy / O nớ / Cổ`** と明確に分岐するのに、**emotion 語彙は #77 / #79 で同一**。中部・南部に固有の感情表現は存在 (例: vi_s 「buồn xo」「buồn thiu」のような南部口語、vi_c では「ngơ ngẩn」surprised の中部色)。`feedback_dialect_vocab_differences.md` 違反候補。
- **#77 推奨:** vi_s `C:ngạc nhiên` (より口語的、bị bất ngờ は新聞調)、vi_c `C:ngỡ ngàng` (中部に多い文語的驚き)
- **#79 推奨:** vi_s `B:buồn xo` (南部口語、ぼんやり悲しい), vi_c `B:buồn rười rượi` (中部に多い)
- **Decision:** **vi/vi_c/vi_s の lexical differentiation を強化**。ただし native speaker 確認推奨のため 【蓋然】 とし、#79 と #77 を分けて edit 提示。
- **Edit:** `{id:77, lang:"vi_s", op:"replace", segments:[["A","Anh ấy"],["E","kết quả"],["B","của bài kiểm tra"],["D","làm"],["C","ổng ngạc nhiên"]], finding:"vi_s identical to vi standard for emotion lexeme; align with A-segment dialect work (Cổ/Ổng) by using South-colloquial 'ngạc nhiên' + Southern 3sg pronoun 'ổng'. Verify with native speaker."}` 【蓋然】 — 構造は #79 vi_s に合わせる
- **Edit:** `{id:79, lang:"vi_s", op:"replace", segments:[["A","Cổ"],["D","bạn cổ"],["E","chuyển nhà"],["C","nên"],["B","buồn xo"]], finding:"vi_s identical to vi for emotion; 'buồn xo' is South-colloquial intensive-sad. Currently vi/vi_c/vi_s share 'buồn' — dialect differentiation missing."}` 【蓋然】
- **Edit:** `{id:79, lang:"vi_c", op:"replace", segments:[["A","O nớ"],["D","bạn o nớ"],["E","chuyển nhà"],["C","nên"],["B","buồn rười rượi"]], finding:"Same vi_c lexical differentiation; 'rười rượi' Central-Vietnamese ideophone for languid sadness."}` 【蓋然】

### 5. #76 / #79 th vs th_isan vs th_n vs th_s — Isan dialect が emotion 語彙で差別化されていない 【蓋然】

- **Current #76:** th `D:รู้สึกมีความสุข` (feel-have-happiness), th_isan `D:ฮู้สึกม่วน` (Isan: ฮู้ = ru, ม่วน = pleasant/fun), th_n `D:ฮู้สึก ดีใจ๋` (Northern: ดีใจ๋ = glad with Northern tone), th_s `D:รู้สึก มีความสุข` — **th_s は標準 th と完全同一**
- **Current #79:** th `B:รู้สึกเศร้า`, th_isan `B:เศร้า` — Isan は単に「รู้สึก」を落としただけで lexical 差なし
- **Problem:** Isan (Lao 系) は「เศร้า」より「เสียอกเสียใจ」「ใจหาย」が口語的、Northern Thai (kham mueang) は「ตึ้ดอกตึ้ดใจ」「ใจหู่」のような独自感情語を持つ。`feedback_dialect_vocab_differences.md` 適用余地大。
- **Decision:** th_isan #79 で Lao 由来語彙「เสียใจหลาย」(sia jai laai) を導入、th_s #76 で南タイ独自の「หรอย」(roi = great/good, 喜悦) を導入。【蓋然】 — native verification 必要。
- **Edit:** `{id:79, lang:"th_isan", op:"replace", segments:[["A","เขา"],["D","เพื่อนของลาว"],["E","ย้ายไป"],["C","ไป"],["B","เสียอกเสียใจหลาย"]], finding:"Isan currently shares 'เศร้า' with standard Thai; 'เสียอกเสียใจ' (heart-broken, Lao-style intensifier 'หลาย') is more dialect-specific. Pronoun shift Cô ấy→ลาว."}` 【蓋然】
- **Edit:** `{id:76, lang:"th_s", op:"replace", segments:[["C","ตอน"],["B","ฟัง"],["A","เพลง"],["D","รู้สึกหรอย"]], finding:"th_s identical to standard th; 'หรอย' (Southern: great/joyful) gives lexical differentiation."}` 【蓋然】

### 6. #82 ja `D:おっしゃった` (respect-honorific) vs en `D:told` (neutral) — register asymmetry across reference 【要検討】

- **Current:** ja `D:おっしゃった` (honorific SUBJECT-elevation 尊敬語), ja_edo `D:申された`, ja_heian `D:のたまへり`, ja_kyo `D:言いなはれと` (Kyoto-soft), ko `D:말했다` (plain), zh `D:告诉` (plain), en `D:told` (plain)
- **Problem:** 日本語族のみ「医者 → 私」方向で SUBJECT (= 医者) を高める尊敬語を採用。en/ko/zh など全 reference cluster は plain register。これは日本語 honorific の構造的要請ではなく**文体選択**であり、ja_osa `D:くれてん` (大阪は受益者-くれる で授受表現、語感 neutral) と register 揺れ。
- **Analysis:** 「医者は私に休むよう言った」の自然形は plain 「言った」、尊敬「おっしゃった」は対談などの formal register。ko も同様に「말씀하셨다」(honorific) ではなく plain「말했다」を採用しており、ja だけ medical authority への deference を込めるのは **cross-lingual asymmetry**。ただし日本語自然語感としてはどちらも成立する。
- **Decision:** **deferred / policy**。ja は plain「言った」に揃えるか、全 reference cluster で医療 authority への deference register を統一するか policy 判断必要。
- **Edit:** `{id:82, lang:"_meta", op:"document", finding:"ja uses 尊敬語 おっしゃった for the doctor's speech; en/ko/zh/most use plain 'told/말했다/告诉'. Either (a) lower ja to plain '言った' for cross-lingual register parity, or (b) define a 'medical authority register' policy and apply across cluster. Deferred for cross-cutting register policy."}` 【要検討】
- **Edit:** `{id:82, lang:"ja", op:"replace", segments:[["A","医者は"],["B","私に"],["C","休むよう"],["D","言った"]], finding:"Optional plain-register alignment if policy resolves to (a)."}` 【要検討】 — applied only after policy resolution

### 7. #76 ko_bus `D:행복하다` — Busan 方言 register が反映されていない 【蓋然】

- **Current:** ko `D:행복함을 느낀다`, ko_kp `D:행복감을 느낀다` (DPRK -감 nominalization), ko_bus `D:행복하다`, ko_yb `D:기분이 좋슴다` (Yanbian -슴다 ending), ko_jeju `D:행복험수다` (Jeju -수다)
- **Problem:** ko_bus が「행복하다」のみで、Busan 方言の characteristic な ending (e.g. -다아이가, -데이, -삐다) も intensifier も無し。reference ko も「행복함을 느낀다」とやや formal。Busan は普通 emotional intensity を「억수로 (eok-su-ro = "in floods" = "extremely")」で表現する。
- **Decision:** ko_bus に Busan-particular intensifier 「억수로」と「-네이」終止を追加。
- **Edit:** `{id:76, lang:"ko_bus", op:"replace", segments:[["A","음악을"],["B","들을"],["C","때"],["D","억수로 행복하데이"]], finding:"ko_bus too plain; '억수로' (intensive 'in floods') + '-데이' (Busan/Daegu ending) gives proper dialect color. Compare ko_yb '기분이 좋슴다' (Yanbian particle) and ko_jeju '행복험수다' (Jeju particle) which already encode dialect."}` 【蓋然】

### 8. #77 en_in `C:was surprised` — 標準 en と同一、Indian English lexical color 欠落 【蓋然】

- **Current:** en `C:was surprised`, en_au `C:was gobsmacked` (Aussie ✓), en_app `C:was plumb surprised`, en_south `C:was right surprised`, en_yk/en_ck `C:were/was right/well surprised`, **en_in `C:was surprised`**, en_sg `C:got shocked` (Singlish), hwc `C:was surprised`
- **Problem:** en_in (Indian English) は標準 en と完全同一。Indian English には characteristic「was much surprised」「got shocked」「was taken aback」または Hinglish 風「went 'haa?!'」がある。`feedback_dialect_vocab_differences.md`。
- **Decision:** en_in を「got a shock」または「was much surprised」に差別化、en_in #76 が `A:Music` 倒置で既に語順差を持つので emotion 語彙にも差別化を加える。
- **Edit:** `{id:77, lang:"en_in", op:"replace", segments:[["A","He"],["E","the test"],["B","results"],["D","by"],["C","got a shock"]], finding:"en_in identical to standard en for the surprise lexeme; 'got a shock' is more Indian English-typical. Verify with IE corpora."}` 【蓋然】

### 9. #77 hwc `C:was surprised` — Hawaiʻi Creole も無差別 【蓋然】

- **Current:** hwc `C:was surprised` (= 標準 en)
- **Comparison:** #76 hwc `D:feel good` は既に creole 化されている、#79 hwc `B:stay sad` (stay-V copula は HCE 特徴) も既に creole. **#77 だけ取り残されている**.
- **Recommendation:** HCE 特徴 stay + V/Adj を活かして `C:wen' bus' my brain` (HCE: get really surprised, lit. "broke my brain") or `C:wen' stay shock` を採用。Sakoda & Siegel 2003 §4.3 wen' = perfective marker, stay + Adj = present/progressive copula.
- **Edit:** `{id:77, lang:"hwc", op:"replace", segments:[["A","He"],["E","da test"],["B","results"],["D","by"],["C","wen' stay shock"]], finding:"hwc shared 'was surprised' with en — HCE characteristic wen' + stay + Adj is used in #76/#79 hwc cells; align #77 with HCE typology. Verify Sakoda/Siegel 2003 §4.3."}` 【蓋然】

### 10. #76 hwc `D:feel good` — 「good」は generic、HCE-specific lexeme 候補 【要検討】

- **Current:** hwc `D:feel good`
- **Analysis:** HCE には「stay good inside」「all hyped」「stoke」(< Aussie stoked) 等の lexical 候補あるが、「feel good」も HCE 口語として成立。en_au `D:feel stoked` との重複を避けるなら hwc は「da kine」枠 (内的感情表現) を採用する選択肢あり。
- **Decision:** **policy 維持** (feel good は HCE で自然)。ただし en_au との差別化が弱い、と documentation。
- **Edit:** `{id:76, lang:"_meta", op:"document", finding:"hwc 'feel good' overlaps with en_au 'feel stoked' in being non-'happy' lexicalization; both are valid. Policy: hwc keeps 'feel good' as HCE characteristic understatement, en_au keeps 'stoked' as Aussie intensifier — no change needed."}` 【要検討】

### 11. #77 vi_nom `C:被不𥄈` (passive + not + 𥄈) — Chữ Nôm spelling check / lexical mismatch 【要検討】

- **Current:** vi_nom `C:被不𥄈`, `D:被` (D is "by" — same as en/zh structure)
- **Analysis:** 𥄈 = bất ngờ の「ngờ」(suspect/expect) の Nôm 字。「被不𥄈」を字面で読むと「被 (bị) + 不 (bất) + 𥄈 (ngờ)」= 受身 + 不 + 期待 ≈ 「不意を被った」。ただし vi 標準が「bị bất ngờ」を C に置き、D に「bởi」(by) を置いているのに対し、vi_nom は D に「被」(=bị/bởi 兼用?) を置いており **role-letter assignment が ambiguous**。vi 系統では「bị」は passive marker、「bởi」は agent preposition で機能が異なる。
- **Decision:** vi_nom の D「被」を vi 「bởi」相当の agent prep として扱うか、passive 「bị」として C に統合するか確認。Nôm 字源は「被 = bị/bởi」両用なので native verification 必要。
- **Edit:** `{id:77, lang:"_meta", op:"document", finding:"vi_nom 被 used for both bị (passive) and bởi (agent prep); vi standard splits them (bị in C, bởi in D). Nôm character cannot disambiguate. Policy: keep vi_nom 被 in D as agent-preposition for consistency with vi reference structure."}` 【要検討】

### 12. #79 ko_jeju `B:슬픔수다` — Jeju copula -수다 と感情 stem 結合の音韻 【蓋然】

- **Current:** ko_jeju `B:슬픔수다`, #76 ko_jeju `D:행복험수다`
- **Analysis:** Jeju 方言の formal terminative ending は **-수다 / -ㅁ수다** (cf 表記揺れ あり)。「슬픔수다」は名詞化 (슬픔 = sadness) + 수다 で「sadness-COP」の構造。比較: #76「행복험수다」は「행복ㅎ-+엄+수다」(formant continuative + ending)、#79「슬픔수다」は **名詞 + 수다** で別構造。同一 #79 cell で「슬프-+엄+수다」→「슬펌수다」(continuative-COP) の方が #76 と並行的。
- **Decision:** Jeju 専門家 verification 必要だが、構造的並行性のため「슬펌수다」を推奨。
- **Edit:** `{id:79, lang:"ko_jeju", op:"replace", segments:[["A","걔는"],["D","벗이"],["E","이사가신"],["C","난"],["B","슬펌수다"]], finding:"Jeju #76 uses verb-stem + 엄/험+수다 ('행복험수다'); #79 currently uses noun + 수다 ('슬픔수다'). Parallel structure '슬펌수다' (슬프+엄+수다) recommended for consistency. Native Jeju verification advised."}` 【蓋然】

### 13. #76 fr / fr_qc / fr_ch / fr_be / fr_af `D:Je suis heureux / me sens heureux / je me sens heureux` — be-Adj vs reflexive feel-Adj 分裂 【蓋然】

- **Current:** fr `D:suis heureux` (be-happy), fr_qc `D:me sens heureux` (feel-myself happy), fr_ch `D:me sens heureux`, fr_be `D:je me sens heureux`, fr_af `D:je me sens heureux`
- **Problem:** **fr (Métropole) のみ be-Adj、4 兄弟全てが reflexive feel-Adj**。本来「Je suis heureux」と「Je me sens heureux」は両方自然だが、Métropole 標準は **「Je me sens heureux」** が music-listening 文脈ではより自然 (Le Robert 用例)、「Je suis heureux」はやや generic. 4 兄弟が「me sens」を採用しているので fr も統一すべき。`feedback_cross_sibling_role_consistency.md` 該当 (1 vs 4 outlier)。
- **Decision:** fr を 4 兄弟に揃える。
- **Edit:** `{id:76, lang:"fr", op:"replace", segments:[["E","Je"],["D","me sens heureux"],["C","quand"],["B","j'écoute"],["A","de la musique"]], finding:"fr be-Adj 'suis heureux' is 1-vs-4 outlier; all 4 sibling fr variants use 'me sens heureux'. Align reflexive feel-Adj structure per cross-sibling consistency."}` 【蓋然】

### 14. #76 / #79 he `D:מרגיש שמח` vs `B:עצובה` — gender agreement の cross-cell 整合 【確実】

- **Current #76:** he `D:מרגיש שמח` (masc.sg "feel happy") — 主語 אני なので男性形
- **Current #79:** he `B:עצובה` (fem.sg "sad") — 主語 היא なので女性形
- **Analysis:** #76 は「私 = speaker」、#79 は「彼女 = she」なので **主語 gender が異なる**ため形容詞 gender も異なる、これは正常。修正不要だが、**新規 he 翻訳追加時に gender agreement を体系チェックすべき** という meta-policy が必要。
- **Decision:** **修正不要**、ただし `_omission_guidelines.md` に Semitic / Romance gender-agreement note 追加推奨。
- **Edit:** `{id:79, lang:"_meta", op:"document", finding:"Gender-marking languages (he/ar/es/it/fr/ru/pt) — emotion adjectives must agree with subject gender. #76 (1sg male default) vs #79 (3sg female) yields different surface forms (מרגיש vs עצובה, sorprendido vs triste-fem). Verify cross-cell agreement for all gender-marking langs when adding emotion sentences."}` 【確実】

### 15. #77 ar / ar_eg / ar_lev / ar_ma / ar_gulf / ar_iq / ar_tn / ar_sd surprise verbs の方言分布 【蓋然】

- **Current:** ar `C:فوجئ` (fuji'a, MSA passive), ar_eg `C:اتفاجئ` (Eg colloquial passive itfaag'i), ar_lev `C:تفاجأ`, ar_ma `C:تفاجأ`, ar_gulf `C:انصدم` (in-sadama = "got shocked", Gulf-specific), ar_iq `C:انصدم`, ar_tn `C:تفاجأ`, ar_sd `C:اتفاجأ`
- **Analysis:** 7 colloquial variants 中 5 が「تفاجأ / اتفاجئ」(Form V/VII fa'aja'), 2 (Gulf/Iraq) が「انصدم」(in-sadama = "be hit/shocked"). これは語彙的 dialect 差として正当 (Gulf/Iraq の「صدمة」culture)。ただし **ar_ma (Moroccan)** が「تفاجأ」標準形を採用しているが、Moroccan には「تخلع」(tkhle' = "got dislocated/freaked") が口語色強い。
- **Decision:** ar_ma を Moroccan-specific 「تخلع」または「خلع» に差別化検討。Verification 必要。
- **Edit:** `{id:77, lang:"ar_ma", op:"replace", segments:[["A","هو"],["E","ديال الإكزامن"],["B","النتائج"],["D","بـ"],["C","تخلع"]], finding:"ar_ma uses standard 'تفاجأ' shared with Levant/Tunisia; Moroccan colloquial 'تخلع/خلع' (be-dislocated/freaked) is more dialect-distinctive. Verify with Darija native."}` 【蓋然】

### 16. #79 es_cl / es_mx / es_ar / es_eu / es_co / es_pe / es_cu / es_an `B:está triste` — 全 8 variants 完全同一、dialect lexical work 皆無 【蓋然】

- **Current:** 全 es variants `B:está triste`
- **Compare #76:** es_mx `D:Me pongo feliz` (poner-se: become-happy ← Mexican preference), es_eu `D:Me siento feliz` (sentir-se: feel-happy), es_cu `D:me siento felí` (Cuban -z drop), es_an `D:me siento felí` (Andalusian -z drop), es_co/cl/pe/ar `D:Me siento feliz` — **#76 では es_mx だけ poner-se で差別化**
- **Problem:** #79 で **8 variants 全て string-identical** は dialect work が完全に欠落。例: es_ar の colloquial「está re triste」(re-intensifier ← Río de la Plata)、es_mx「anda triste」(walking-sad ← Mexican aspect)、es_cu「está triste de pinga」(intensive Cuban)、es_an「ehtá trihte」(seseo + h-aspiration).
- **Decision:** 最低限 es_ar (`está re triste`), es_mx (`anda triste`), es_cu/es_an (発音表記 trihte) を差別化。
- **Edit:** `{id:79, lang:"es_ar", op:"replace", segments:[["A","Ella"],["D","su amiga"],["E","se mudó"],["C","así que"],["B","está re triste"]], finding:"es_ar identical to all other es variants; 're' intensifier is characteristic Rioplatense. Compare #76 lack of es_ar differentiation."}` 【蓋然】
- **Edit:** `{id:79, lang:"es_mx", op:"replace", segments:[["A","Ella"],["D","su amiga"],["E","se mudó"],["C","así que"],["B","anda bien triste"]], finding:"es_mx 'anda + Adj' aspectual differentiates from peninsular 'está'; 'bien' as intensive matches Mexican #76 'me pongo'."}` 【蓋然】
- **Edit:** `{id:79, lang:"es_cu", op:"replace", segments:[["A","Ella"],["D","su amiga"],["E","se mudó"],["C","así que"],["B","ehtá trihte"]], finding:"es_cu /-s/ aspiration to /h/ — apply same orthographic convention used in #76 'felí'."}` 【蓋然】
- **Edit:** `{id:79, lang:"es_an", op:"replace", segments:[["A","Eya"],["D","zu amiga"],["E","ze mudó"],["C","azín que"],["B","ehtá trihte"]], finding:"es_an seseo + h-aspiration consistent with #76 'felí' / #54 'er medio'."}` 【蓋然】

### 17. #76 / #79 ja_aom intensity & emotion lexemes `D:えぇ気持ぢになるんず` / `B:かなすぃじゃ` — Aomori (Tsugaru) 方言 phonology 整合性 【蓋然】

- **Current #76:** ja_aom `D:えぇ気持ぢになるんず` (Tsugaru: いい→えぇ, ち→ぢ voicing, んず ending)
- **Current #79:** ja_aom `B:かなすぃじゃ` (Tsugaru: し→すぃ palatalization, じゃ ending)
- **Analysis:** #76 で「幸せ」→「えぇ」(good) と lexical replacement、#79 で「悲しい」→「かなすぃ」(phonological adaptation). **意味的に #76 だけ「幸せ」を「えぇ (good)」に lexical level でシフト**、これは Tsugaru の自然口語だが、#79 の「かなすぃ」と並行的に「幸せ → しあわせ → しあわすぃ」のような phonological adaptation の方が consistent.
- **Decision:** ja_aom #76 で「えぇ気持ぢ」を維持するか、phonological「しあわすぃ気持ぢ」に統一するか。両方自然なので **policy 文書化のみ** 推奨。
- **Edit:** `{id:76, lang:"_meta", op:"document", finding:"ja_aom #76 uses lexical substitution (幸せ→えぇ) but #79 uses phonological adaptation (悲し→かなすぃ). Both valid Tsugaru. Policy: prefer phonological adaptation when lexeme exists in Tsugaru (幸せ does — しあわせ/しあわすぃ); reserve lexical substitution for items absent or strongly marked."}` 【蓋然】

### 18. #76 tok `D:pilin pona` (= "feel good") — emotion specificity の上限 【確実】

- **Current:** tok `D:pilin pona`
- **Analysis:** Toki Pona は constructed-minimal lexicon (~120 words) で「happy」専用語なし。`pilin pona` = "feel good" は唯一の正解で en hwc `feel good` と並行的。修正不要。Wierzbicka NSM primes ("I feel something good") と一致するので逆に NSM 理論的に最も「pure」な表現とも言える。
- **Decision:** **維持 + documentation**。constructed lang (eo/tok/tlh/jbo) の emotion 表現が NSM primes に縮退する事例として記録価値。
- **Edit:** `{id:76, lang:"_meta", op:"document", finding:"tok 'pilin pona' is the NSM-prime realization (= 'feel something good'); intentionally cannot specify happy vs joyful vs content. Acceptable. Policy: constructed minimalist langs (tok) and pidgins (tpi 'pilim hamamas', hwc 'feel good') converge on feel-good rather than specific emotion lexeme."}` 【確実】

### 19. #79 sw `B:ana huzuni` (has sadness) / hi `B:दुखी है` (is sad-adj) / ta `B:வருத்தமாக இருக்கிறாள்` (in-sadness be) — emotion realization 4 型 distribution check 【確実】

- **Current:** sw `B:ana huzuni` (have-N), hi `B:दुखी है` (be-Adj), ta `B:வருத்தமாக இருக்கிறாள்` (in-Adv be), te `B:బాధపడుతోంది` (suffer-V), bn `B:দুঃখিত` (be-Adj zero-cop), kn `B:ದುಃಖಿತಳಾಗಿದ್ದಾಳೆ` (sad-FEM be), ml `B:ദുഃഖിതയാണ്` (be-Adj-FEM), my `B:ဝမ်းနည်းနေပါတယ်` (belly-little stay)
- **Analysis:** Dravidian / Indo-Aryan / Bantu で 4 つの realization type が分布。**my「ဝမ်းနည်း」(belly-little = sad)** はビルマ語の body-locus emotion で ja_oki「ちむぐりさん」と同類の lexical pattern。これらは all valid、修正不要だが **body-locus emotion** (chest/belly/liver) という cross-linguistic pattern を documentation 価値あり。
- **Decision:** **修正不要 + body-locus emotion typology を policy 文書化**。
- **Edit:** `{id:79, lang:"_meta", op:"document", finding:"Body-locus emotion lexicalization observed: ja_oki 'ちむぐり-' (liver), my 'ဝမ်းနည်း' (belly-small), zh 'kindly comment 心头' (#76 zh_sc 'heart-top'), ko 'ko_yb 기분이 좋' (mood feel). These are kept as single B/D segment; do not split into body-part + state."}` 【確実】

### 20. #77 / #79 全 220+ variants で **happy-vs-sad の D-segment 色 (palette color) 不一致**: emotion polarity が color に反映されていない 【要検討】

- **Current:** 全 3 cells (#76 / #77 / #79) で D は purple #8338ec、emotion 内容の polarity (positive happy / surprise-neutral / negative sad) は palette color に反映されていない
- **Analysis:** これは scope creep (palette color スキーマは sentence 横断で固定) だが、emotion cross-cutter という発注 (#102) の観点では **「emotion 専用 palette 拡張」が考えられるか** という meta question を提起しておく。
- **Decision:** **scope creep として deferred**。data 修正なし、ただし long-term policy として記録。
- **Edit:** `{id:_global, lang:"_meta", op:"document", finding:"Cross-cutter observation: emotion sentences (#76/#77/#79) all use D=purple #8338ec regardless of emotion polarity (positive/neutral/negative). No change required — palette is by role not by valence. Logged for future 'emotion-axis sub-palette' consideration if emotion sentences expand beyond 3."}` 【要検討】

---

## まとめ

- **【確実】 apply 候補:** #1 (ja_hak 寂しか→悲しか), #14 (he gender doc), #18 (tok NSM doc), #19 (body-locus doc), #2 (ja_oki ちむぐり doc)
- **【蓋然】 verification 後 apply:** #4 (vi_c/vi_s ×2 sentences), #5 (th_isan / th_s), #7 (ko_bus 억수로), #8 (en_in got a shock), #9 (hwc wen' stay shock), #12 (ko_jeju 슬펌수다), #13 (fr be→sens), #15 (ar_ma تخلع), #16 (es_ar/mx/cu/an ×4), #17 (ja_aom doc)
- **【要検討】 policy deferred:** #3 (emotion realization 4-typology doc), #6 (ja honorific register), #10 (hwc feel good), #11 (vi_nom 被), #20 (palette-by-polarity)

**主要発見:**
1. ja_hak が #79 で「寂しか」(lonely) を使い 9 兄弟 ja_* の「sad」カテゴリーから drift — 唯一の明確な lexical defect
2. vi/vi_c/vi_s は #77/#79 で完全同一語彙、dialect work が emotion 領域でほぼ皆無
3. es 8 variants が #79 で完全同一 (`está triste`)、#76 は es_mx だけ poner-se で差別化済
4. ja は #82 で医者発話に尊敬語「おっしゃった」、他 reference (en/ko/zh) は plain — register asymmetry の policy 整理が必要
5. ja_oki ちむぐりさん / my ဝမ်းနည်း は body-locus emotion の cultural anchor として保持価値
6. tok / hwc / tpi が NSM-prime "feel good" に収斂するのは constructed/pidgin lang の typological pattern として記録すべき

データファイル: **`/home/jounlai/langmap/data.js`** (READ-ONLY 確認済)
指摘事項総数: **20 件** (確実 5 + 蓋然 10 + 要検討 5)


---

## Dev response — round 1 (2026-06-04)

apply2.mjs 経由で適用済。

- **適用 edit**: 16
- **policy/withdrawn 等で skip**: 9
- **headline**: ja_hak #79 寂しか→悲し-, vi/th/ko_bus emotion-lex diversification, es 8系 #79 dialect-lexical diversification (es_ar re/es_mx bien/es_cu ehtá)
- **JSON path**: /tmp/lm_edits_102.json
