# LangMap データレビュー #44 — 否定 (negation) チャンキング横断レビュー

## レビュアー自己紹介 (ペルソナ)

田川 隆司 (handle: **@neg_takashi**)。京都大学言語学修士、ライデン大学博士課程在籍中。学位論文は "Discontinuous Negation in the Languages of West Africa and the Sinosphere — A Typological Map" (van der Auwera 副指導)。常用文献は Miestamo *Standard Negation* (Mouton 2005)、van der Auwera & Lejeune "The Prohibitive" (WALS 71)、Dahl "Typology of Sentence Negation" (Linguistics 17, 1979)、Payne "Negation" in *Language Typology and Syntactic Description* I (CUP 1985)、Croft "The Evolution of Negation" (J. Linguistics 27, 1991)、Horn *A Natural History of Negation* (CSLI 2001 ed.)、Chao *A Grammar of Spoken Chinese* (UCal 1968) §4.3.7 (V-不-V)、寺村秀夫『日本語のシンタクスと意味 II』(くろしお 1984) 第 III 章 (否定)。

今回は **否定マーカーがすべての言語のすべての文でどう分節されているか** を、単一の整合性軸 (**「否定形態素 = 独立分節 (own letter)」 vs 「動詞句に融合 (fused)」**) に絞って横断審査する。否定型は Miestamo の 4 タイプ (free particle / bound affix / discontinuous bracketing / negative auxiliary verb) で分類し、各タイプごとに「データ全体で扱いが整合しているか」を判定する。語彙選択、レジスター、敬語、語順は **明示的に射程外** (それぞれ #28 / #38 / #3 系統 closed-review で扱い済み)。

## 検証範囲

100 文を全数走査し、以下を抽出した:

1. **真の節否定 (clausal negation) を含む英語原文**: **#89 のみ** ("I can't find the Wi-Fi password")。
2. **日本語原文に否定形態素 (ない/ません/ねば/ぬ/ず) を含む文**: **#37, #39, #54, #64, #89** (5 件)。うち #37/#39/#54/#64 は「~なければならない」(deontic must = neg conditional + neg copula の **二重否定** 構造) で、ほぼ全ての非日本語訳が **肯定の助動詞** (must/need to/必须/devo) に置き換わっている。
3. **Sinitic A-not-A 疑問文 / 否定借用**: **#10, #28, #40, #68** (yes-no 疑問; nan/hak_cn/cdo/yue が 無/嗎 否定形式の疑問粒子、zh_db/zh_sc が 不嘛/能不能、yue が V-唔-V) と **#29 (yue 唔記得, nan 放袂記)**、**#52 (yue 唔見)** に非明示的に否定形態素が現れる。
4. **疑問文末の不-homophone**: vi/vi_c/vi_s の `không/khôông/hông`、vi_nom の `空` は否定語と同音の終助詞 (V-or-not question particle) で、#10/#28/#40/#68 で出現。否定そのものではないが分節方針上は同じ語形のため注釈対象。

対象は実質 **約 12 文** (#10, #20, #28, #29, #37, #39, #40, #52, #54, #64, #68, #89) × 約 50 言語 = 約 600 セル。

## 方針 — 何を「指摘」とし、何を「許容」とするか

1. **自由形態素の否定** (en not, de nicht, fr ne...pas, es no, it non, ru не, ar لا/ما, he לא, hu nem, pl nie, vi không 等) は **動詞句から独立した分節 (own letter)** が標準。閉ざされた wordmap/hanmap 系の review #19/#33 でも同方針が支持されている。
2. **接尾辞型否定** (tr -ma-/-me-, fi en/et/ei + 動詞語幹, mn -гүй, ko -지 않다 / 못 + V) は memory `feedback_glue_marker.md` に従い、**ZWNJ 接頭辞付き独立分節** とする。
3. **接頭辞型否定** (sw si-, ig enweghị-, zu/xh angi-/andi-, ar -عَدَم-) は agglutinative 形態論として **ZWNJ 接頭辞分節独立** が望ましい。
4. **二重括弧 (discontinuous bracketing) 否定** (fr ne...pas, af nie...nie, en_yk none...nowt) は **2 つの分節を同一 letter に重複付与** が現行 LangMap 慣行 (fr #89 の `[C:ne]...[C:pas]` が前例)。これを **全文に統一適用すべき**。
5. **A-not-A 疑問** (yue 知唔知, zh_db 能不能) は **1 セル内に 3 形態素 (V + NEG + V)** が含まれるため、letter 1 つで包んで OK だが、**最低でも別文の同種構造と整合的** に扱われているべき。
6. **修正方針判定基準**:
   - 「同一言語内で 同種の否定形態素が、ある文 X で OWN, 別の文 Y で FUSED」→ **【確実】な整合性違反**。
   - 「同種否定形態素の type-mate (e.g., 全 Sinitic で 不/没/無/毋/弗) で扱いが言語間で分裂」→ **【確実】な系統内不整合**。
   - 「言語固有の事情 (e.g., en `can't` の clitic n't、fi `En + V`、ig `Enweghị` 屈折否定) で迷う」→ **【蓋然】**。
   - 「方針自体を closed-review で再確認すべきもの」→ **【要検討】**。

---

## 指摘事項 (Issues found)

### 1. #89 ja 「見つから‐ない」の分節境界が誤り、ない の分節 letter が周辺諸文と非整合 【確実】

**Current:**
```
ja           [F:Wi-Fiの] [G:パスワードが] [B|D:見つから] [C:ない]
```

**Problem:** 日本語の否定助動詞「ない」は屈折語尾ではなく **独立した補助述語** で (寺村 1984, II.4.2)、現行データでは ✓ `[C:ない]` と独立分節されているのは正しい。ただし問題は **2 点**:

(a) 動詞語幹「見つから」が `[B|D:見つから]` という **B と D の二重 letter** で表記されている。B は palette 上「(can) 〜できる助動詞」、D は「動詞 (find)」に相当 (en `[B:can] [D:find]` と並べると明らかに B=can, D=find に対応)。日本語「見つから(ない)」は **可能形ではなく動詞語幹そのもの**であり、B 助動詞 letter を被せるのは形態素分析として不正確。memory `feedback_segment_splitting.md` Rule #4 (no spurious compound-letter) 違反。

(b) ja の派生方言 ja_osa / ja_aom / ja_oki / ja_hak / ja_kyo / ja_hir / ja_mvi / ja_rys でも **全て `[B|D:見つから]` (または該当する dialect 動詞形) という二重 letter** が踏襲されている。これは本家 ja の compound-letter エラーが全方言に横展開した化石化。

**Proposed:** ja および全 ja_* 方言で B|D 二重 letter を **D 単独 letter** に修正:
- ja `[B|D:見つから]` → `[D:見つから]`、`[C:ない]` は維持
- ja_osa `[B|D:わから]` → `[D:わから]`
- ja_aom `[B|D:見つから]` → `[D:見つから]`、`[C:‌ねぇじゃ]` 維持 (ZWNJ 良)
- ja_oki `[B|D:わから]` → `[D:わから]`
- ja_hak `[B|D:見つから]` → `[D:見つから]`
- ja_kyo `[B|D:見つかり]` → `[D:見つかり]`
- ja_hir `[B|D:見つから]` → `[D:見つから]`、`[C:‌んけぇ]` 維持
- ja_mvi `[B|D:みー]` → `[D:みー]`
- ja_rys `[B|D:みーら]` → `[D:みーら]`
- ja_edo `[B|D:見つから]` → `[D:見つから]`
- ja_heian `[B|D:見つから]` → `[D:見つから]`

**Op:** `retag` (B|D → D, テキスト無変更)、9 セル。

---

### 2. #89 ja「ぬ/ず」(古語否定) は否定形態素として `[C:]` 独立扱い良し — 整合・記録 【記録】

**Current:**
```
ja_edo       [F:Wi-Fiの] [G:パスワードが] [B|D:見つから] [C:ぬ]
ja_heian     [F:Wi-Fiの] [G:パスワードが] [B|D:見つから] [C:ず]
```

**Problem:** 上代/中古日本語の打消助動詞「ず/ぬ」は『日本国語大辞典』『古典文法事典』ともに独立した助動詞として扱われ、ja_edo (近世) `ぬ`、ja_heian (中古) `ず` を `[C:]` 単独 letter で分節するのは形態論的に正確。指摘 1 で B|D エラーを解消すれば本セルは完全に整合する。記録のみ、修正不要。

---

### 3. #89 en 「can't」を `[B:can] [C:'t]` と分割しているが、`'t` のレター割当が他の独立否定言語 (fr/de/es/it/ru/ar/he) と一致しているのは偶然か方針か 【蓋然】

**Current:**
```
en           [A:I] [B:can] [C:'t] [D:find] [E:the] [F:Wi-Fi] [G:password]
en_aave      [A:I] [B:can] [C:'t] [D:find] [E:the] [F:Wi-Fi] [G:password]
en_ie        [A:I] [B:can] [C:'t] [D:find] [E:the] [F:Wi-Fi] [G:password]
en_south     [A:I] [B:can] [C:'t] [D:find] [E:the] [F:Wi-Fi] [G:password]
en_au        [A:I] [B:can] [C:'t] [D:find] [E:the] [F:Wi-Fi] [G:password]
en_in        [A:I] [B:can] [C:'t] [D:find] [E:the] [F:Wi-Fi] [G:password]
en_yk        [A:I] [B:can] [C:'t] [D:find] [E:t'] [F:Wi-Fi] [G:password]
en_ck        [A:I] [B:can] [C:'t] [D:find] [E:the] [F:Wi-Fi] [G:password]
```

**Problem:** 英語の否定 clitic `n't` は Zwicky & Pullum (1983) "Cliticization vs. inflection" 以来、**屈折接尾辞 (inflectional affix)** として扱う説が標準 (cf. don't, won't, can't は語形変化として動詞別保存)。ところが現データでは `n't` を **撥音脱落でアポストロフィのみ残した `'t`** として `[C]` 独立分節している。これは:

(a) アポストロフィを分節として独立させる **書記論的単位** で切っており、形態論ではなく書記法 (orthography) 基準。en_app だけは `[B|C:cain't]` で fused なのは形態論的判断との混在 (e.g., "cain't" を不規則否定動詞として一体表記)。

(b) もし `'t` を NEG morpheme として `[C]` 分節するのが方針なら、ZWNJ プレフィックスを付けるべき (`[C:‌'t]` または `[C:‌n't]`)。現状 `'t` の前にはスペースが入って表示される (cf. en_sg `[C:‌not]` は ZWNJ 付き)。

(c) en_sco `[C:‌nae]` には ZWNJ あり、sco `[B|C:cannae]` は fused、en_app `[B|C:cain't]` は fused、jam `[B|C:cyaan]` は fused、pcm `[B:no] [C:fit]`、hwc `[C:no] [B:can]` (語順倒置)、tpi `[C:no] [B:ken]`、got `[C:‌ni]`、enm `[B:kan] [C:nat]`、cy `[C:Dw i ddim yn]` (cy は全体融合) — **英語派生クレオール・古英語・スコッツ系統内で否定の処理が混沌**。

**Proposed:** **2 つの方針のどちらかに統一** を提案、後者推奨:

- **(A) clitic n't を 独立分節**: 全方言で `[B:can] [C:‌n't]` (ZWNJ 付き、`n't` 1 形態素として) に統一。en_app `cain't` → `[B:cain] [C:'t]` (irregular conditioned allomorphy として `cain` を許容)、sco `cannae` → `[B:can] [C:‌nae]`、jam `cyaan` → `[B:cyaa] [C:‌n]` または irregular 維持。
- **(B) clitic n't を 動詞融合**: 全方言で `[B|C:can't / cain't / cannae / cyaan]` 一律 compound 表記。en の `[B:can] [C:'t]` を `[B|C:can't]` に戻す。

英語形態論的には **(A) が正しい** が、データ内部の整合性で言えば派生方言 (sco, jam, en_app) の多くが (B) を採用しているので、運用上は (B) が摩擦少なめ。**closed-review で判断要請**。

**Op (A 採択時):** `replace` × 8 セル (en/en_aave/en_ie/en_south/en_au/en_in/en_yk/en_ck の `[C:'t]` → `[C:‌n't]`、`[B:can]` 維持) + `retag/replace` × 4 セル (en_app/sco/jam/en_sco の compound 解消)。

---

### 4. #89 fr ne...pas の二重 letter 表記は正しい唯一の bracketing 実装 — 記録、ただし af, en_yk 系の同種パターンに展開要 【蓋然】

**Current:**
```
fr           [A:Je] [C:ne] [D:trouve] [C:pas] [E:le] [G:mot de passe] [F:Wi-Fi]
fr_qc        [A:Je] [C:ne] [D:trouve] [C:pas] [E:le] [G:mot de passe] [F:Wi-Fi]
fr_ch / fr_af / fr_be: same pattern
af           [A:Ek] [B:kan] [E:die] [F:Wi-Fi] [G:-wagwoord] [C:nie] [D:vind] [C:nie]
```

**Problem:** フランス語 *ne...pas* 不連続否定は Damourette & Pichon (1911-40) 以来「二語否定」と分析され、共時的にも口語ではしばしば *pas* のみ残るが標準書記法では両方必須 (Grevisse §982-997)。**現データでは `[C:ne]...[C:pas]` と同一 letter C を 2 セルに重複付与** で正しく bracketing 表現している。これは LangMap 内で **唯一の discontinuous negation 実装** で、優れた前例。アフリカーンス af の `nie...nie` (Donaldson *A Grammar of Afrikaans* 1993, §4.2) も同様に `[C:nie]...[C:nie]` と二重括弧されている (本家データ確認 ✓)。これは整合的。

**ただし** 二重 letter 反復が memory `feedback_no_adjacent_same_segments.md` (隣接同 letter 禁止) と緊張する可能性。fr `[C:ne] [D:trouve] [C:pas]` は隣接ではないので OK だが、**af の `[C:nie] [D:vind] [C:nie]` も隣接ではない**ので OK。記録のみ。

**Proposed:** fr/af の bracketing 方式を以下の文でも適用検討:
- en_yk の `t'environment` や Yorkshire `tha doesna` 等の bracketing 候補
- 古英語 en_ang `[B:ne] [C:mæg]` (確認: 現状 `[B:ne] [C:mæg]` で別 letter — fr とは異なる扱い、これは要検討)
- 別言語: ckb `[B|C:ناتوانم]` — ku/ckb 否定接頭辞 *na-* は接尾辞 *-tu* (不定動詞活用) と並べて `[C:‌na] [B:توانم]` の方が形態素に近い

**Op:** 記録のみ、修正不要。ただし `en_ang [B:ne] [C:mæg] [D:findan]` の `ne` を `[C:ne]` に変更し fr と整合させる選択肢あり (要確認)。

---

### 5. #89 zh / wuu / zh_song / zh_sc / zh_db の 不/弗/着 (potential-否定挿入) が `D|C` 二重 letter で fused 【確実】

**Current:**
```
zh           [A:我] [D|C:找不到] [F:Wi-Fi] [G:密码]
wuu          [A:我] [D|C:寻弗着] [F:Wi-Fi] [G:密码]
zh_song      [A:我] [D|C:尋不著] [F:通訊之] [G:口令]
zh_sc        [A:我] [D|C:找不到] [F:Wi-Fi] [G:密码]
zh_db        [A:我] [D|C:找不着] [F:Wi-Fi] [G:密码]
zh_han       [A:吾] [D|C:尋不得] [F:通訊之] [G:口令]
zh_tang      [A:余] [D|C:覓不得] [F:通訊之] [G:口令]
```

**Problem:** 中国語の **動補否定 (potential negation)** V-不-C (找-不-到 = find-NEG-RESULT) は Chao 1968 §4.3.7 / Li & Thompson 1981 §6.3 で標準分析されており、3 形態素 (Verb-Neg-Result) に **分解可能**。一方で yue/nan/hak_cn/cdo/hak は **同じ意味を 2 形態素 (Verb + NEG)** で表す異なる戦略を取り、データでも分節されている:

```
yue          [A:我] [D:搵] [C:唔到] [F:Wi-Fi] [G:密碼]  ← 搵 と 唔到 が別 letter
nan          [A:我] [D:揣] [C:無] [F:Wi-Fi] [G:密碼]   ← 揣 と 無 が別 letter
hak_cn       [A:涯] [D:揣] [C:毋到] [F:Wi-Fi] [G:密碼]  ← 別
cdo          [A:我] [D:揣] [C:無] [F:Wi-Fi] [G:密碼]
```

**Sinosphere 系統内で 完全 OWN (yue/nan/hak_cn/cdo) vs 完全 FUSED-with-D|C 二重 letter (zh/wuu/zh_song/zh_sc/zh_db/zh_han/zh_tang)** の二分が明確。これは review #44 の最重要発見の一つ — **同じ意味を表現するのに、Min/Yue/Hakka が独立否定形態素で表し、Mandarin/Wu が V-不-C 動補構造で表すという系統差を、現データはレター分節で半分しか捉えられていない**。

(a) `D|C` 二重 letter は Rule #4 (no spurious compound-letter) に違反 (記号上は D と C の融合だが、D = find と C = NEG cannot は意味的に明確に異なる)。
(b) zh の `找不到` を 3 形態素分節するなら `[D:找] [C:不] [D:到]` (D は find と result の両方を含み、不が真ん中) または `[D:找] [C:不到]` (C = NEG+RESULT) のいずれかが正攻法。

**Proposed:** 全 Mandarin/Wu 系統で D|C 二重 letter を解消、yue/nan/hak_cn/cdo と並行する 2 分節構造に統一:
- zh `[D|C:找不到]` → `[D:找] [C:不到]` または `[D:找] [C:不] [D:到]` (推奨は前者、yue `[C:唔到]` と並行)
- wuu `[D|C:寻弗着]` → `[D:寻] [C:弗着]`
- zh_song `[D|C:尋不著]` → `[D:尋] [C:不著]`
- zh_sc `[D|C:找不到]` → `[D:找] [C:不到]`
- zh_db `[D|C:找不着]` → `[D:找] [C:不着]`
- zh_han `[D|C:尋不得]` → `[D:尋] [C:不得]`
- zh_tang `[D|C:覓不得]` → `[D:覓] [C:不得]`

**Op:** `replace` × 7 セル。palette `ABCDEFG` 内に letter C/D 両方存在するため適用可能。

---

### 6. #89 tr / am / ta / si / kn / te / ml / kk / ug / az / uz / tk / ky / or / ti / ka(部分) の動詞融合否定 が `B|C|D` 三重 letter で fused 【確実】

**Current:**
```
tr           [F:Wi-Fi] [G:şifresini] [B|C|D:bulamıyorum]
am           [F:የWi-Fi] [G:ይለፍ ቃል] [D:ማግኘት] [B|C:አልቻልኩም]
ta           [A:என்னால்] [F:Wi-Fi] [G:கடவுச்சொல்லை] [D:கண்டுபிடிக்க] [B|C:முடியவில்லை]
si           [A:මට] [F:Wi-Fi] [G:මුරපදය] [D:සොයා] [B|C:ගත නොහැක]
kn           [A:ನನಗೆ] [F:Wi-Fi] [G:ಪಾಸ್‌ವರ್ಡ್] [B|C|D:ಸಿಗುತ್ತಿಲ್ಲ]
te           [A:నాకు] [F:Wi-Fi] [G:పాస్‌వర్డ్] [D:దొరకడం] [B|C:లేదు]
ml           [A:എനിക്ക്] [F:Wi-Fi] [G:പാസ്‌വേഡ്] [D:കണ്ടെത്താൻ] [B|C:കഴിയുന്നില്ല]
kk           [A:Мен] [F:Wi-Fi] [G:құпия сөзін] [D:таба] [B|C:алмаймын]
ug           [A:مەن] [F:Wi-Fi] [G:پارولىنى] [B|C|D:تاپالمىدىم]
az           [A:Mən] [F:Wi-Fi] [G:şifrəsini] [D:tapa] [B|C:bilmirəm]
uz           [A:Men] [F:Wi-Fi] [G:parolini] [D:topa] [B|C:olmayapman]
tk           [A:Men] [F:Wi-Fi] [G:parolyny] [D:tapyp] [B|C:bilemok]
ky           [A:Мен] [F:Wi-Fi] [G:сырсөзүн] [D:таба] [B|C:албайм]
or           [A:ମୋତେ] [F:Wi-Fi] [G:ପାସୱାର୍ଡ] [B|C|D:ମିଳୁନାହିଁ]
ti           [F:ናይ Wi-Fi] [G:መሕለፊ ቃል] [D:ክረክብ] [B|C:ኣይከኣልኩን]
mr           [A:मला] [F:Wi-Fi] [G:पासवर्ड] [D:सापडत] [B|C:नाही]
xh           [A:Andi] [B|C|D:fumani] [G:iphasiwedi] [F:ye-Wi-Fi]
zu           [A:Angi] [B|C|D:litholi] [G:iphasiwedi] [F:ye-Wi-Fi]
sw           [A|B|C:Siwezi] [D:kupata] [G:nenosiri] [F:ya Wi-Fi]
cop          [A:ⲁⲛⲟⲕ] [B|C:ⲙⲡⲓϣϫⲉⲙ] [G:ⲡⲙⲁⲧⲟⲓ] [F:ⲛⲧⲉ Wi-Fi]
tlh          [F:Wi-Fi] [G:ngoghmey] [D:vISam] [B|C:laHbe']
ckb          [A:من] [G:وشەی نهێنی] [F:Wi-Fi] [D:دۆزینەوەی] [B|C:ناتوانم]
ig           [A:Enweghị m] [B:ike] [D:ịchọta] [G:okwuntụ] [F:Wi-Fi]   ← Enweghị は否定屈折動詞だが letter A (主語) に飲み込まれている
```

**Problem:** 接尾辞型否定 (tr `-ma-`, kk `-май-`, ky `-бай-`, ug/uz `-ma-`, az `-mir-`)、接頭辞型否定 (sw `si-`, zu `Angi-`, xh `Andi-`, am `አል-`, ti `ኣይ-`, ig `enweghị`)、negative auxiliary (ta `முடியவில்லை` = can-NEG, si `නොහැක` = NEG-cannot, kn `ಿಲ್ಲ`, te `లేదు`, mr `नाही`, ml `കഴിയുന്നില്ല`, cop `ⲙⲡⲓ-`, tlh `-be'`) はいずれも **形態論的に明確な否定形態素を含む**が、データでは すべて B|C や B|C|D の **二重/三重 compound letter** に押し込まれており、**否定 segment が個別に identify できない**。

これは:
- memory `feedback_segment_splitting.md` Rule #4 (no spurious compound-letter): 違反。compound は本来「複数 letter の併合不可能」な場合の最終手段。
- memory `feedback_glue_marker.md`: 接尾辞型否定は ZWNJ 付き独立分節すべき。tr `bulamıyorum` は `bul + a + ma + yor + um` に分解可能で、NEG `-ma-` のみ取り出して `[D:bul] [B:‌abil] [C:‌ma] [E:‌yorum]` のように細分可能 (詳細分節は #43 closed-review の議題でもある)。

**Proposed (最低限の修正):** compound letter から **否定形態素のみを `[C:]` 独立分節として取り出す**:
- tr `[B|C|D:bulamıyorum]` → `[D:bul] [B:‌a] [C:‌mı] [E:‌yorum]` (詳細) または最少修正で `[D:bula] [C:‌mı] [B:yorum]` (NEG のみ独立)
- am `[B|C:አልቻልኩም]` → `[C:አል] [B:‌ቻልኩም]` (NEG接頭 `አል-` 分離)
- ti `[B|C:ኣይከኣልኩን]` → `[C:ኣይ] [B:‌ከኣልኩን]` (NEG接頭 `ኣይ-` 分離)
- ta `[B|C:முடியவில்லை]` → `[B:முடிய] [C:‌வில்லை]` (NEG接尾 `வில்லை` 分離)
- si `[B|C:ගත නොහැක]` → `[B:ගත] [C:නොහැක]` (NEG `නො` 分離可能)
- kn `[B|C|D:ಸಿಗುತ್ತಿಲ್ಲ]` → `[D:ಸಿಗುತ್ತ] [C:‌ಿಲ್ಲ]` (NEG `-ಿಲ್ಲ` 分離)
- te `[B|C:లేదు]` → `[C:లేదు]` (NEG 単独形)
- ml `[B|C:കഴിയുന്നില്ല]` → `[B:കഴിയുന്ന] [C:‌ില്ല]` (NEG `-ില്ല` 分離)
- kk `[B|C:алмаймын]` → `[B:ал] [C:‌маймын]` (NEG `-ма-` 分離)
- ug `[B|C|D:تاپالمىدىم]` → `[D:تاپا] [C:‌لمىدىم]` または `[D:تاپ] [B:‌الا] [C:‌لمىدىم]`
- az `[B|C:bilmirəm]` → `[B:bil] [C:‌mirəm]`
- uz `[B|C:olmayapman]` → `[B:ola] [C:‌mayapman]`
- tk `[B|C:bilemok]` → `[B:bile] [C:‌mok]`
- ky `[B|C:албайм]` → `[B:ал] [C:‌байм]`
- xh `[A:Andi] [B|C|D:fumani]` → `[A:Andi]` の `andi` は 1sg-NEG (Andi- = NEG.1SG) なので `[A:A] [C:‌ndi] [B:‌fumani]` に再分節すべき。current 2 letter 構造 (A + B|C|D) は **主語と否定の癒着** + **動詞と数値部分の癒着** の二重エラー。
- zu `[A:Angi] [B|C|D:litholi]` → 同様、`[A:A] [C:‌ngi] [B:‌litholi]`
- sw `[A|B|C:Siwezi]` → `[A:Si] [C:‌wezi]` (`si-` = NEG.1SG プレフィックス、`-wezi` = 動詞 "can")。**現行で A|B|C 三重 letter は誇大 (subj + can + neg 全部 1 セルに押し込み)** ;
- cop `[B|C:ⲙⲡⲓϣϫⲉⲙ]` → `[C:ⲙⲡⲓ] [B:‌ϣϫⲉⲙ]` (`ⲙⲡⲓ-` Past NEG prefix)
- tlh `[B|C:laHbe']` → `[B:laH] [C:‌be']` (Klingon `-be'` は NEG suffix; Okrand *Klingon Dictionary* 1992 §4.3)
- ckb `[B|C:ناتوانم]` → `[C:نا] [B:‌توانم]`
- ig `[A:Enweghị m]` → `[A:m]` (主語 1sg = `m`) + `[B:Enwe] [C:‌ghị]` (NEG 後置接尾 `-ghị`、Emenanjo 2015) もしくは現行 [A:enweghị m] 維持なら少なくとも letter コメント。

**Op:** `replace` × 約 20 セル。各セルは text 分割を伴うため `allowTextChange: false` で適用するには `op: retag` + 元 text の再構築が必要。多くは ZWNJ 挿入を伴うので **慎重 batch**。

---

### 7. #89 ko / ko_bus / ko_kp / ko_jeju / ko_yb / ko_mid / ko_em の 못/없다 否定の扱いが分裂 【確実】

**Current:**
```
ko           [A:나는] [F:Wi-Fi] [G:비밀번호를] [D:찾을] [B:수] [C:없다]
ko_kp        [A:나는] [F:Wi-Fi] [G:비밀번호를] [D:찾을] [B:수] [C:없다]
ko_jeju      [A:나는] [F:Wi-Fi] [G:비밀번호를] [B|C:못] [D:찾곡 이서]
ko_bus       [A:나는] [F:Wi-Fi] [G:비밀번호를] [B|C:못] [D:찾겠다]
ko_yb        [A:나는] [F:Wi-Fi] [G:비밀번호를] [D:찾을] [B:수] [C:없다]
ko_mid       [A:나는] [F:Wi-Fi] [G:비밀번호를] [D:찾을] [B:수] [C:없다]
ko_em        [A:나는] [F:Wi-Fi] [G:비밀번호를] [D:찾을] [B:수] [C:없다]
```

**Problem:** Korean 否定の 2 戦略 — **長形否定** (V + 지 + 못/않 + 하다; Sohn 1999 §10.4.2) と **短形否定** (못/안 + V; Sohn §10.4.1) — のうち、ko / ko_kp / ko_yb / ko_mid / ko_em は periphrastic 不可能形 `[D:찾을] [B:수] [C:없다]` (= can-NEG) を採用し、ko_bus / ko_jeju は短形 `못 + V` を採用している。

(a) ko_bus / ko_jeju `[B|C:못]` の **B|C 二重 letter** は誤り。`못` は短形否定副詞で **完全に独立した形態素**であり、`[C:못]` 単独 letter にすべき (B = 動詞補助 letter を被せる根拠なし)。memory `feedback_modal_verb_not_subject.md` の延長で「**否定副詞は単独 letter**」原則。

(b) `못` を `[C]` 単独にすれば、後続 `[D:찾겠다]` の 찾 (動詞語幹) と 겠다 (推量+SE 終結) は別 letter に分解する余地がある (memory feedback_no_character_level_split は方言の細分節を支持)。最少修正: `[B|C:못]` → `[C:못]`。

(c) ko_jeju `[D:찾곡 이서]` は 찾곡 (찾고) + 이서 (있어) の 2 形態素融合。これは TAM 領域 (review #43) の範疇だが、negation 切り離し後に再検討の余地あり。

**Proposed:** ko_bus と ko_jeju の `[B|C:못]` を `[C:못]` に retag のみ。テキスト無変更。
- ko_bus `[B|C:못]` → `[C:못]`
- ko_jeju `[B|C:못]` → `[C:못]`

**Op:** `retag` × 2 セル。

---

### 8. #89 vi / vi_c / vi_s / vi_nom の `không/khôông/hông/空` は 既に `[C]` 独立分節 — 整合・記録 【記録】

**Current:**
```
vi           [A:Tôi] [C:không] [D:tìm được] [G:mật khẩu] [F:Wi-Fi]
vi_c         [A:Tui] [C:khôông] [D:tìm được] [G:mật khẩu] [F:Wi-Fi]
vi_s         [A:Tui] [C:hông] [D:tìm được] [G:mật khẩu] [F:Wi-Fi]
vi_nom       [A:碎] [C:空] [D:尋得] [G:密口] [F:無線]
```

**Problem:** ベトナム語の標準否定 *không* は pre-verbal free particle (Thompson *A Vietnamese Reference Grammar* 1965, §4.6) で、`[C:không]` 独立分節は完全に正しい。方言 (vi_c khôông, vi_s hông) と vi_nom 字喃 (空) も同じ letter で分節されており **vi 系統内で完全整合**。模範例として記録。

ただし **`tìm được`** が `[D:]` で fused されている (`tìm` = find, `được` = able/can/PASS の 補助動詞)。これは memory `feedback_modal_verb_not_subject.md` で「補助動詞 (modal/aspect) は独立 letter」とされており、`[D:tìm] [B:‌được]` のように分割が望ましい。これは **negation 軸ではなく能力助動詞軸の問題**なので本レビュー射程外。記録のみ。

---

### 9. #89 mn 否定接尾辞 `-гүй` は ZWNJ 付き独立分節 — 模範例 【記録】

**Current:**
```
mn           [A:Би] [F:Wi-Fi] [G:нууц үгийг] [D:олж] [B:чадах] [C:‌гүй байна]
mn_cn        [A:ᠪᠢ] [F:Wi-Fi] [G:ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ ᠶᠢ] [D:ᠣᠯᠵᠤ] [B:ᠴᠢᠳᠠᠬᠤ] [C:‌ᠦᠭᠡᠢ ᠪᠠᠶᠢᠨ᠎ᠠ]
```

**Problem:** モンゴル語の否定接尾辞 `-гүй` (Janhunen *Mongolian* 2012, §6.7) は agglutinative 形態素で、データでは正しく `[C:‌гүй байна]` (ZWNJ 接頭辞付き、補助動詞 байна と一緒に NEG aspect 副) と分節。Mongol script (mn_cn) も `[C:‌ᠦᠭᠡᠢ ᠪᠠᠶᠢᠨ᠎ᠠ]` と並行。模範例として記録。

**Proposed:** 記録のみ。ただし `гүй байна` (NEG + COP.PROG) を 2 形態素に細分するなら `[C:‌гүй] [E:байна]` も可能。これは TAM 軸 (review #43) と重複する判断、本レビューでは現状維持で良し。

---

### 10. #89 et / fi / lv の 接頭型否定 + 動詞分割 が言語間で非整合 【蓋然】

**Current:**
```
et           [A:Ma] [C:ei] [D:leia] [F:Wi-Fi] [G:parooli]
fi           [A:En] [D:löydä] [F:Wi-Fi] [G:-salasanaa]
lv           [A:Es] [C:ne] [B:varu] [D:atrast] [F:Wi-Fi] [G:paroli]
```

**Problem:** Finnic 否定戦略は典型的に **negative auxiliary** (Karlsson 1999 §17.2): fi の `ei/en/et/emme/ette/eivät` は人称屈折する否定動詞で、主動詞は接続形に置かれる。estonian も同じ。et は `[C:ei]` を独立分節しているのに、**fi は `[A:En]` で 1sg 主語と否定動詞が完全融合**している (En = "I-NEG.1SG"、語形上分離不能だが意味上は 2 形態素)。

(a) 同じ Finnic 系で **et と fi の扱いが分裂**。et `[A:Ma] [C:ei]` (主語と否定動詞を別 letter) vs fi `[A:En]` (1 letter に主語+NEG)。
(b) 厳密には fi `En` は形態論的に「`E-` 否定動詞語幹 + `-n` 1sg 屈折」で、`E-` 部分は et `ei` と同源 (Saami や Permian で更に明確)。LangMap 慣行では主語と否定動詞を別 letter にすべき (et が正解、fi が誤り)。

**Proposed:**
- fi `[A:En]` → `[A:Minä] [C:en]` (代名詞明示) または `[A:‌-n] [C:E]` (倒置) もしくは現実的な最少修正で `[C:En]` (NEG 単独 letter、主語省略を許容)。後者推奨。

lv `[C:ne] [B:varu]` は `varu` (can.1SG) と `ne` (NEG) が別 letter で正しい — 整合的、記録のみ。

**Op:** `retag` × 1 (fi [A:En] → [C:En])、もしくは要 closed-review 判断。

---

### 11. #89 ga / cy / fr_af / fr_be に見る Celtic / Brittonic / 北仏方言系の否定融合パターン 【蓋然】

**Current:**
```
ga           [C:Ní] [B:féidir] [A:liom] [G:pasfhocal] [E:an] [F:Wi-Fi] [D:a aimsiú]
cy           [C:Dw i ddim yn] [B:gallu] [D:dod o hyd i] [G:gyfrinair] [E:'r] [F:Wi-Fi]
br           [C:N'] [B:hellan] [D:kavout] [E:ar] [G:ger-tremen] [F:Wi-Fi]
```

**Problem:** Goidelic ga の `Ní` は語頭否定詞で `[C:Ní]` 独立は正しい。Brythonic cy の現代口語否定 `Dw i ddim yn` (= "I am-not in [VN]") は **多形態素融合** (Dw = 1sg cop, i = 1sg pron, ddim = NEG, yn = VN preposition) を 1 letter `[C]` に押し込んでいる。これは:

(a) 主語 `i` が letter A (Wi-Fi 文の他言語の `[A:I]` 等) に行くべきところ、`[C]` に飲み込まれている — memory `feedback_modal_verb_not_subject.md` の主語 letter 原則違反。
(b) NEG `ddim` のみ取り出すなら `[A:Dw i] [C:ddim] [B:yn gallu] [D:dod o hyd i] ...` のように 4 形態素分割可能 (King *Modern Welsh* 2003 §6.2)。
(c) br `[C:N']` は正しい (Old French 系 ne の同源、ger-tremen 単独動詞句と分かれている)。

**Proposed:** 最少修正で cy のみ:
- cy `[C:Dw i ddim yn]` → `[A:Dw i] [C:ddim] [B:yn]` (3 分節) もしくは `[A:Dw i] [C:ddim yn]` (主語のみ分離)。

ga は letter 配分が `[C:Ní] [B:féidir] [A:liom]` で **A (主語) が letter 順序的に 3 番目**に来ているが、これは Celtic VSO 語順を反映しており正しい。整合的、記録のみ。

**Op:** cy のみ `replace` × 1 (cy `[C:Dw i ddim yn]` → 3 letter 分割)。

---

### 12. #89 hi / gu / mr / pa / ne / bho / sd / ur (Indo-Aryan) の `नहीं/नथी/नाही/...` が同 letter 不統一 【確実】

**Current:**
```
hi           [A:मुझे] [F:Wi-Fi] [G:पासवर्ड] [C:नहीं] [D:मिल रहा]
gu           [A:મને] [F:Wi-Fi] [G:પાસવર્ડ] [C:નથી] [D:મળી રહ્યો]
ur           [A:مجھے] [F:Wi-Fi] [G:پاسورڈ] [C:نہیں] [D:مل رہا]
mr           [A:मला] [F:Wi-Fi] [G:पासवर्ड] [D:सापडत] [B|C:नाही]
pa           [A:ਮੈਨੂੰ] [F:Wi-Fi] [G:ਪਾਸਵਰਡ] [C:ਨਹੀਂ] [D:ਲੱਭ ਰਿਹਾ]
ne           [A:मलाई] [F:Wi-Fi] [G:पासवर्ड] [D:भेटिरहेको] [B|C:छैन]
bho          [A:हमके] [F:Wi-Fi] [G:पासवर्ड] [C:ना] [D:मिल रहल बा]
sd           [A:مون کي] [F:Wi-Fi] [G:پاسورڊ] [C:نٿو] [D:ملي]
as           [A:মই] [F:Wi-Fi] [G:পাছৱৰ্ড] [D:বিচাৰি] [B:পোৱা] [C:নাই]
or           [A:ମୋତେ] [F:Wi-Fi] [G:ପାସୱାର୍ଡ] [B|C|D:ମିଳୁନାହିଁ]
```

**Problem:** Indic Negation `नहीं/नથી/نہیں/நாही/नाही/नाह/नथो/ਨਹੀਂ` はすべて同源で、free particle として独立分節すべき。**hi/gu/ur/pa/bho/sd は `[C:NEG]` 独立で正しい**。しかし:

(a) **mr `[B|C:नाही]` は B|C 二重 letter** — `नाही` は 単独で「ない/no」を意味する完全独立形態素で、B (副助動詞) を被せる根拠なし。`[C:नाही]` 単独に retag。
(b) **ne `[B|C:छैन]`** も同様。छैन (छ = COP + ‐ऐन NEG) は形態論的に 2 形態素融合だが、letter 上は単一 NEG として `[C:छैन]` 単独で扱うべき。
(c) **or `[B|C|D:ମିଳୁନାହିଁ]`** は ම + ‐ ु + ‐ ନ + ‐ ାହିଁ で「get-NEG-COP」、3 形態素を `[D:ମିଳୁ] [C:‌ନାହିଁ]` に分割可能。現行三重 letter は無根拠融合。
(d) **as `[B:পোৱা] [C:নাই]`** は ✓ 既に [C:NEG] 独立、整合的。

**Proposed:**
- mr `[B|C:नाही]` → `[C:नाही]`
- ne `[B|C:छैन]` → `[C:छैन]`
- or `[B|C|D:ମିଳୁନାହିଁ]` → `[D:ମିଳୁ] [C:‌ନାହିଁ]`

**Op:** `retag` × 2 (mr, ne) + `replace` × 1 (or, text 分割を伴う)。

---

### 13. #89 ar / ar_lev / ar_gulf / ar_eg / ar_iq / ar_sd の `لا/ما/مش` 否定粒子は OWN だが ar_ma / ar_tn は fused 【確実】

**Current:**
```
ar           [C:لا] [B:أستطيع] [D:إيجاد] [G:كلمة مرور] [F:Wi-Fi]
ar_lev       [C:ما] [B:بقدر] [D:ألاقي] [G:كلمة سر] [E:الـ] [F:Wi-Fi]
ar_eg        [C:مش] [B:قادر] [D:ألاقي] [G:باسورد] [E:الـ] [F:Wi-Fi]
ar_gulf      [C:ما] [B:أقدر] [D:ألقى] [G:باسوورد] [E:الـ] [F:Wi-Fi]
ar_iq        [C:ما] [B:أكدر] [D:ألگاه] [G:باسورد] [E:الـ] [F:Wi-Fi]
ar_sd        [C:ما] [B:قادر] [D:ألقى] [G:باسورد] [E:البتاع] [F:Wi-Fi]
ar_ma        [B|C:ما قدرتش] [D:نلقى] [G:كود] [F:ديال Wi-Fi]
ar_tn        [B|C:ما نجمش] [D:نلقى] [G:كود] [E:متاع] [F:الWi-Fi]
```

**Problem:** Arabic 否定 *lā/mā/lam/lan/mish* + 北アフリカ口語の **不連続 ma...sh** (Brustad *The Syntax of Spoken Arabic* 2000, §6.2) — 標準アラビア語と東部口語は `[C:NEG]` 独立で整合的だが、**ar_ma / ar_tn の Maghrebi ma...sh は `[B|C:ma قدرتش / ma نجمش]` で 二重 letter に融合**。これは:

(a) Maghrebi *ma...sh* は **fr ne...pas と完全に並行する discontinuous bracketing** で、`[C:ما]...[C:ش]` の bracketing が形態論的に正しい (indeed 動詞語幹 *قدرت / نجم* を中間に挟む)。
(b) 現行 `[B|C:ما قدرتش]` は (a) NEG と動詞語幹の混在、(b) 主動詞 *قدرت* (can-1sg.PFV) と否定枠の癒着 — 2 重の問題。

**Proposed:**
- ar_ma `[B|C:ما قدرتش] [D:نلقى]` → `[C:ما] [B:قدرت] [C:‌ش] [D:نلقى]` (bracketing) または最少修正で `[C:ما قدرتش]` (B letter 削除)。
- ar_tn `[B|C:ما نجمش]` → `[C:ما] [B:نجم] [C:‌ش]` または `[C:ما نجمش]`。

bracketing 採択時は fr `[C:ne]...[C:pas]` と同じ整合性が得られ、Arabic マグレブ口語の言語学的特徴を可視化できる。**推奨**。

**Op:** `replace` × 2 (ar_ma, ar_tn)。letter palette ABCDEFG 内で完結。

---

### 14. #89 he `לא` は OWN だが、ar 系統との Semitic 統一として ZWNJ 適用要検討 【蓋然】

**Current:**
```
he           [A:אני] [C:לא] [D:מוצא] [E:את] [G:סיסמת] [F:ה-Wi-Fi]
arc          [A:אֲנָא] [C:לָא] [D:מֶשׁכַּח] [G:מִלְּתָא דְרָזָא] [F:דWi-Fi]
```

**Problem:** Hebrew *לא* / Aramaic *לָא* は free particle で `[C:]` 独立分節は正しい。arc (Aramaic) も同様。整合的、記録のみ。ただし将来的に Semitic 系統横断で NEG 形態素の ZWNJ 統一があれば検討対象。

**Proposed:** 修正不要。

---

### 15. #89 sw / cop / xh / zu の Bantu / Nilo-Saharan 接頭辞型否定が `[A]` (主語) に飲み込まれている 【確実】

**Current:**
```
sw           [A|B|C:Siwezi] [D:kupata] [G:nenosiri] [F:ya Wi-Fi]
xh           [A:Andi] [B|C|D:fumani] [G:iphasiwedi] [F:ye-Wi-Fi]
zu           [A:Angi] [B|C|D:litholi] [G:iphasiwedi] [F:ye-Wi-Fi]
ig           [A:Enweghị m] [B:ike] [D:ịchọta] [G:okwuntụ] [F:Wi-Fi]
om           [A:An] [G:jecha iccitii] [F:Wi-Fi] [D:argachuu] [C:hin] [B:dandeenye]
ha           [C:Ban] [B:iya] [D:samun] [G:kalmar sirri] [F:ta Wi-Fi]
ti           [F:ናይ Wi-Fi] [G:መሕለፊ ቃል] [D:ክረክብ] [B|C:ኣይከኣልኩን]
am           [F:የWi-Fi] [G:ይለፍ ቃል] [D:ማግኘት] [B|C:አልቻልኩም]
sn           [A:Handisi] [B:kugona] [D:kuwana] [G:password] [F:ye Wi-Fi]
ny           [A:Sinditha] [D:kupeza] [G:achinsinsi] [F:a Wi-Fi]
rw           [C:Sin] [B:shobora] [D:kubona] [G:ijambo ry'ibanga] [F:rya Wi-Fi]
```

**Problem:** Bantu 系 (sw/xh/zu/sn/ny) と Cushitic (om)、Chadic (ha)、Igboid (ig)、Atlantic-Congo (wo) ではいずれも **otrgone-class 屈折否定** が標準で、形態論的に「主語接頭辞 + NEG + 動詞語幹」の 3 段構造を持つ (Nurse & Philippson *The Bantu Languages* 2003、Ch.6 Negation by Mous)。

(a) **sw `[A|B|C:Siwezi]`**: si- (NEG.1SG 主語) + -wezi (can.PRES の否定形) で **3 letter 融合** は誇大すぎる。最低限 `[A:Si] [C:‌wezi]` または `[C:Si] [B:‌wezi]` (NEG が主語と一体化している事実を踏まえれば前者)。memory `feedback_glue_marker.md` (sw も agglutinative なので ZWNJ 適用可能)。

(b) **xh `[A:Andi]` / zu `[A:Angi]`**: これらは「A-+ndi-/ngi- + ø」(NEG- + 1SG.SUBJ-) という二形態素で、`A-` 部分が NEG。`[A:A] [C:‌ndi/ngi]` のように分割すべきだが、ハイフン化が表記上厄介。最少修正は **letter のみ retag**: `[C:Andi] / [C:Angi]` (主語+NEG を NEG letter に統一) または現状維持で `[A]` を「主語+NEG」と意味づけて記録。

(c) **sn `[A:Handisi]`**: Ha- (NEG) + ndi (1SG) + si (NEG continuative) — 二重 NEG marking。`[C:Handisi]` のみが NEG letter らしい。

(d) **ny `[A:Sinditha]`**: si- (NEG.1SG.PRES) + nditha (be.able) → `[A:Si] [C:‌nditha]` または `[C:Sinditha]`。

(e) **rw `[C:Sin]`** は ✓ 既に `[C]` で NEG 専用 letter で正解。

(f) **ig `[A:Enweghị m]`**: Enwe- (have-NEG) + -ghị (NEG inflectional suffix) + m (1SG)。**主語 m が NEG動詞 enweghị の後ろにあるのに letter A に飲み込まれている**。`[A:m]` + `[B:Enwe] [C:‌ghị]` のように 3 分節すべき。これは feedback `modal_verb_not_subject` の reverse pattern (主語が動詞末尾接尾)。

(g) **ha `[C:Ban]`**: Ba- (NEG-PFV.1SG.M) + n (1SG.M リダンダント?) — Newman *The Hausa Language* 2000 §11.2 で扱われ、`Ba` 単独が NEG、`-n` が aspect marker。letter `[C]` で NEG 単独相当の扱いは妥当だが、後続の `iya` (can) が `[B]` で動詞 `samun` (find) が `[D]` というのは整合的。

(h) **om `[C:hin] [B:dandeenye]`**: hin = NEG, dandeenye = can.NEG.1SG。`[C:hin]` 独立は正しい。整合的。

(i) **am `[B|C:አልቻልኩም]` / ti `[B|C:ኣይከኣልኩን]`**: アムハラ語/ティグリニャ語の否定接頭辞 *al-/ay-* と接尾辞 *-m/-n* の **discontinuous bracketing** (Leslau *Reference Grammar of Amharic* 1995, §10)。 fr ne...pas / Maghrebi ma...sh と並行する 不連続否定 で、`[C:አል] [B:‌ቻልኩ] [C:‌ም]` または `[C:አል] [B:‌ቻልኩም]` の bracketing が望ましい。

**Proposed (最少修正):**
- sw `[A|B|C:Siwezi]` → `[A:Si] [C:‌wezi]` または `[C:Siwezi]` (3 重 letter のみ解消)
- xh `[A:Andi] [B|C|D:fumani]` → `[C:Andi] [D:fumani]` または `[A:A] [C:‌ndi] [D:fumani]`
- zu `[A:Angi] [B|C|D:litholi]` → `[C:Angi] [D:litholi]` または `[A:A] [C:‌ngi] [D:litholi]`
- sn `[A:Handisi]` → `[C:Handisi]` (NEG letter に retag)
- ny `[A:Sinditha]` → `[A:Si] [B:‌nditha]` または `[C:Sinditha]`
- ig `[A:Enweghị m] [B:ike]` → `[A:m] [B:Enweghị] [B:ike]` (主語と否定動詞の letter 並び替え; 注: Ig の SVO 語順との整合に注意)
- am `[B|C:አልቻልኩም]` → `[C:አል] [B:‌ቻልኩም]` (bracketing 最少形)
- ti `[B|C:ኣይከኣልኩን]` → `[C:ኣይ] [B:‌ከኣልኩን]`

**Op:** `replace` × 約 8 セル。

---

### 16. #37 / #39 / #54 / #64 — ja の「~なければならない」二重否定 deontic 構文の NEG 形態素が letter として可視化されていない 【確実】

**Current:**
```
#37 ja  [A:私は] [C:誕生日] [D:プレゼントを] [E:買わなければ] [B:ならない]
#39 ja  [A:私は] [C:明日] [B:早く] [D:起きなければ] [E:ならない]
#54 ja  [A:私たちは] [B:環境を] [C:守ら] [D:なければならない]
#64 ja  [A:私は] [B:スマホを] [C:充電] [D:しなければならない]
```

**Problem:** 日本語の「~なければならない」は **二重否定** で deontic 義務を表す古典文法構文 (寺村 1984, II.4.5; Martin *A Reference Grammar of Japanese* 1975 §6.2.4.5)、構造は `V-未然 + ば-NEG.HYPOTHETICAL + NEG.IMPERFECTIVE-ら + ない-NEG`。つまり **3 つの NEG マーカー** が存在する (`なけれ` + `なら` + `ない`) が、現データでは:

(a) #37 `[E:買わなければ] [B:ならない]` — 動詞語幹 + 否定条件 と 否定肯定 (literally "not-buy = not-do") が 2 letter (E/B) に粒度 2 で分節されている。NEG 形態素は letter として明示されない。
(b) #39 同上。
(c) #54 `[C:守ら] [D:なければならない]` — 動詞語幹 と 「~なければならない」全体融合形 (NEG-NEG-NEG の 6 文字を 1 letter に押し込み)。
(d) #64 同上 `[D:しなければならない]`。

これは **データセット全体で唯一の真の二重否定構文** であり、本来なら **NEG マーカーを letter 化** することで本構文の言語学的特徴 (Old Japanese 起源の hypothetical-NEG conditional + main NEG copula) を可視化できる。現状の融合は学習者教材としても損失。

(e) ja 派生方言 (ja_osa `[E:買わな] [B:あかんねん]`、ja_aom `[E:買わねば] [B:まいねじゃ]`、ja_oki `[E:買ーんでー] [B:ならんさー]`、ja_hak `[E:買わな] [B:いかんっちゃん]`、ja_edo `[E:求めねば] [B:ならぬ]`、ja_heian `[E:求めざる] [B:べからず]`、ja_kyo `[E:買わな] [B:あきまへん]`、ja_hir `[E:買わにゃ] [B:いけんのじゃ]`、ja_mvi/ja_rys `[E:こーんば] [B:ならん]`) は 全方言とも **動詞-NEG.HYPOTHETICAL を 1 letter (E)、NEG-COP を別 letter (B)** に揃えており、文間 (#37/#39 vs #54/#64) よりも **文内 (dialect 間) の整合**が高い。**矛盾**: #37/#39 は 5 letter palette で letter E/B に NEG 構造を分割するが、#54/#64 は 4 letter palette で全体 D に押し込み — palette 不足が原因。

**Proposed:**
- #54 ja `[C:守ら] [D:なければならない]` → palette 拡張 ABCDE → ABCDE で `[C:守ら] [D:なければ] [E:ならない]` (#37/#39 と並行)
- #64 ja `[C:充電] [D:しなければならない]` → palette ABCDE で `[C:充電] [D:しなければ] [E:ならない]`
- 全方言 (ja_osa, ja_aom, ja_oki, ja_hak, ja_kyo, ja_hir, ja_mvi, ja_rys, ja_edo, ja_heian) で #54/#64 を同パターンに修正。
- #37/#39 は letter E/B (動詞-条件 と コピュラ-NEG) の **letter 順序が #54/#64 と逆** (E が動詞語、B が末尾末尾) — palette 統一の機会に揃えるべき (推奨: 動詞語=C/D, 条件 NEG=E, COP-NEG=F)。

**より深い修正 (二重否定可視化)**: NEG 形態素 ない を独立 letter として取り出す:
- #37 `[E:買わなければ]` → `[E:買わ] [F:‌なければ]` (palette E→EF 拡張)
- #37 `[B:ならない]` → `[G:なら] [F:‌ない]` (NEG 同 letter で囲い、bracketing)

これは review #43 で議論された「TAM-as-H 分節」と同型の規約議題 (NEG-as-F)。**closed-review #11〜#14 と同期して judged**。

**Op:** palette 拡張要 (#54/#64) のため `replace` 単独では適用不能、`schemaChange` ラウンドで処理。最少修正は #37/#39 の letter 順序統一 (#54/#64 を ABCDE palette に揃え) → `replace` × 8〜20 セル。

---

### 17. #37 / #39 / #54 / #64 — vec / fr_af / fr_be / es_cl / es_cu / es_pe / es_an の `Bisogna / Hay que / Go da / Il faut` 非人称義務動詞 の letter 配分が他と非整合 【確実】

**Current (#54):**
```
fr           [A:Nous] [D:devons] [C:protéger] [B:l'environnement]
fr_af        [D:Il faut] [C:protéger] [B:l'environnement]      ← 主語なし、Il faut が D
fr_be        [D:Il faut] [C:protéger] [B:l'environnement]
es_cl        [D:Hay que] [C:proteger] [B:el medio ambiente]    ← 主語なし、Hay que が D
es_cu        [D:Hay que] [C:protegé] [B:el medio ambiente]
es_pe        [D:Hay que] [C:proteger] [B:el medio ambiente]
es_an        [D:Hay que] [C:protegé] [B:er medio ambiente]
vec          [D:Bisogna] [C:protezer] [B:l'ambiente]              ← Venetian
sm           [D:E tatau ona] [A:tatou] [C:puipuia] [B:le siosiomaga]
fj           [D:Me da] [C:maroroya] [B:na tiki ni vuravura]
```

**Problem:** memory `feedback_impersonal_modal_as_D.md` に「**Il faut, Hay que, Bisogna 等の非人称 modal は D, not A**」と明記。現データは概ね D 配分 ✓ で整合的。**ただし**:

(a) vec (Venetian) は #37 でも `[B:Go da] [E:comprar]` と modal `Go da` を B に配分しており、ここ #54 vec `[D:Bisogna]` (D)、#64 vec `[D:Go da]` (D) — **同言語内で Go da の letter が #37 では B、#54/#64 では D** に分裂。Venetian *Go da* (= "I have to") は **人称屈折 1sg** で `Il faut` 系の非人称 modal とは厳密には別だが、現データの扱いの一貫性が必要。

(b) tlh (Klingon) #54 `[A:maH]` (1pl 代名詞) が letter 末尾。tlh 語順は OVS なので位置的にはこれで正しいが、letter A=主語が文末に来るのは display では普通。

**Proposed:** vec の Go da を **全文 D で統一** (#37 vec `[B:Go da]` → `[D:Go da]`、#39 vec `[E:Go da]` → `[D:Go da]`、#64 vec 現行 D ✓ 維持)。これで memory feedback_impersonal_modal_as_D の方針に合致。

**Op:** `retag` × 2 (#37 vec, #39 vec の Go da)。

---

### 18. #37 / #39 / #54 / #64 — 各言語の義務 modal (must/need to/必须/devo etc.) は すべて B または D に配分されているか、letter 順序の整合性 【蓋然】

**Current sampling:**
```
#37 modal letter: ja B (ならない), en B (need to), de B (muss), zh B (需要), tr E (-zorundayım), hu B (kell)
#39 modal letter: ja E (ならない), en E (have to), de E (muss), zh E (得), tr (zorundayım fused with E), hu E (kell)
#54 modal letter: ja D (なければならない), en D (must), de D (müssen), zh D (必须), tr D (zorundayız)
#64 modal letter: ja D (しなければならない), en D (need to), de D (muss), zh D (需要), tr D (zorundayım)
```

**Problem:** #37 は modal letter = B、#39 は E、#54/#64 は D。これは palette / 単語位置依存の自然な変動だが、**「義務 modal は同種文で同じ letter にすべき」という整合性原則** を立てるなら #37/#39 で不一致。具体的には:

(a) #37 と #54 はどちらも「動詞 + 義務 modal」構造 (#37 = "I-need to-buy a-birthday present"、#54 = "We-must-protect the-environment")。modal の letter が B vs D で分裂。
(b) #39 と #64 はどちらも「主語 + modal + 副詞 + 動詞」(#39 = "I-have to-early-wake up tomorrow"、#64 = "I-need to-charge my-phone")。modal letter は #39 E、#64 D。

ただし letter は 言語横断 で 同種粒度を表すよう設計されており、palette 内で letter 順序は文ごとに最適化されている (cf. memory `feedback_segment_splitting.md` Rule #18)。**letter 同一性は必ずしも文間で保持される必要はない**ので、これは **【蓋然】** にとどめ、修正は提案しない。記録のみ。

**Op:** 修正不要。

---

### 19. #10 / #28 / #40 / #68 — Sinitic A-not-A 疑問の `V-不-V` 構造の letter 整合性 【確実】

**Current:**
```
#10 yue      [A:你] [D:識] [E:唔識] [C:講] [B:英文]      ← V-NEG-V を 2 letter (D+E)
#10 zh_db    [A:你] [D:会] [C:说] [B:英语] [E:不嘛]      ← 不嘛 文末粒子 E
#10 zh_sc    [A:你] [D:会] [C:说] [B:英语] [E:不嘛]
#10 nan      [A:你] [D:會] [C:講] [B:英語] [E:無]         ← 末尾 無 = NEG-question particle
#10 hak_cn   [A:你] [D:會] [C:講] [B:英語] [E:無]
#10 cdo      [A:你] [D:會] [C:講] [B:英語] [E:無]

#28 yue      [B:你] [A:可以] [C:介紹] [D:間] [F:好嘅] [E:餐廳] [G:嗎]   ← 嗎 末尾粒子
#28 nan      [B:你] [A:會凍] [C:紹介] [D:一間] [F:好的] [E:餐廳] [G:無]
#28 zh_sc    [A:能不能] [C:推荐] [D:一家] [F:好] [E:餐厅]    ← 能不能 を [A] に押し込み (!)
#28 zh_db    [A:不] [B:能] [C:推荐] [D:一家] [F:好] [E:餐厅]  ← [A:不] は誤り

#40 yue      [A:你] [E:知唔知] [B:郵局] [D:喺] [C:邊度]    ← V-不-V を 1 letter E に融合
#40 zh_db    [A:你] [E:知道] [B:邮局] [D:在] [C:哪里] [E:不嘛]
#40 zh_sc    [A:你] [E:知道] [B:邮局] [D:在] [C:哪里] [E:不嘛]
#40 nan      [A:你] [E:知] [B:郵局] [D:佇] [C:佗位] [E:無]
#40 hak_cn   [A:你] [E:知] [B:郵局] [D:在] [C:奈位] [E:無]
#40 cdo      [A:你] [E:知] [B:郵局] [D:佇] [C:何處] [E:無]

#68 yue      [A:我] [D:可以] [C:坐] [B:喺度] [D:嗎]
#68 nan      [A:我] [D:會凍] [C:坐] [B:遮] [D:無]
```

**Problem:** Sinitic 系の疑問文での否定形態素扱いに **複数の問題** がある:

(a) **#28 zh_db `[A:不]`**: A letter は 主語 (代名詞) 専用のはず。zh_db `不能` (NEG-can = "can't") を **`[A:不] [B:能]`** に分割しているのは letter 配分の根本誤り。`[A:你能不能]` の代名詞 + V-NEG-V 構造を意図したと思われるが、`你` が脱落して `不能` だけが残り `[A]` に配置されてしまった。同 #28 zh_sc `[A:能不能]` も同様 — A letter に modal+NEG+modal 構造を押し込み、主語代名詞が省略されている。

(b) **#40 yue `[E:知唔知]`**: A-not-A 疑問の V-NEG-V を 1 letter E に正しく包含 ✓。整合的。

(c) **#10 yue `[D:識] [E:唔識]`**: 同じ A-not-A 疑問だが、#10 では V と NEG-V を **別 letter D/E に分割**、#40 では 1 letter E に融合。**同じ言語 yue の中で扱い分裂**。memory `feedback_segment_splitting.md` Rule #6 (intra-language consistency)。

(d) **#10/#40/#68 nan/hak_cn/cdo `[E:無]`** / `[G:無]`: 末尾の否定粒子 *無/mo* は **「~否」(or-not) 疑問粒子** で Sinitic 系の VO+NEG 疑問パターン (張光宇 2003)。これは形態論的に独立粒子なので `[E]/[G]` letter 単独 ✓ 正しい。

**Proposed:**
- #28 zh_db `[A:不] [B:能]` → `[A:你] [B:能不能]` (代名詞補充) または `[A:能不能]` を `[D:能不能]` に retag (modal letter D に配分)
- #28 zh_sc `[A:能不能]` → `[D:能不能]` に retag (modal letter)
- #10 yue `[D:識] [E:唔識]` → `[D:識唔識]` (1 letter に融合、#40 と整合) または逆方向 #40 `[E:知唔知]` → `[D:知] [E:唔知]` (分割、#10 と整合) — **どちらかに統一**

**Op:** `retag` × 2 (#28 zh_db, zh_sc) + `replace` × 1 (#10 or #40 yue の統一)。

---

### 20. #29 yue `[C:唔記得]` / #52 yue `[C:唔見]` / nan `[C:放袂記]` — 否定融合動詞のレター整合 【蓋然】

**Current:**
```
#29 yue     [A:我] [D:喺火車上] [C:唔記得] [B:把遮]
#29 nan     [A:我] [B:雨傘] [C:放袂記] [D:佇火車頂]
#52 yue     [A:我] [B:個銀包] [C:唔見] [D:咗] [E:喺市場]
```

**Problem:** これらは **lexicalized NEG+V** で、Sinitic 慣用句として 1 動詞扱い (Cantonese 唔記得 = forgot、Hokkien 放袂記 = forgot)。`[C:]` 単独 letter に包含するのは慣例として OK だが、

(a) yue #29 `[C:唔記得]` と yue #89 `[D:搵] [C:唔到]` (potential 否定で V と NEG を別 letter) の **同言語内 letter 分割方針の不一致** — #29 では NEG+V 一体、#89 では V と NEG 分離。これは構造的相違 (lexicalized 動詞 vs productive potential-否定) の反映として **言語学的には正当化可能**。

(b) nan #29 `[C:放袂記]` の 袂 (NEG-中間挿入) は実際には potential-否定構造 (V-不能-V) で、yue #89 `[C:唔到]` と並行する。データでは **nan も #89 で `[D:揣] [C:無]` と分離**しているのに、#29 では 1 letter `[C:放袂記]` に融合 — **言語内不整合**。

**Proposed:** #29 nan `[C:放袂記]` を `[D:放] [C:袂記]` または `[D:放袂] [C:記]` に分解検討 (袂=不能、記=remember)。yue #29 は慣用句として現状維持で良い。

**Op:** `retag/replace` × 1 (要 nan ネイティブ判断、deferred)。

---

### 21. #52 ja_oki 「わからん」/ ja_mvi 「みーらん」 系の方言否定形が #89 と整合 【記録】

**Current:**
```
#89 ja_oki   [B|D:わから] [C:んさー]
#89 ja_mvi   [B|D:みー] [C:らん]
#89 ja_rys   [B|D:みーら] [C:ぬ]
```

**Problem:** 琉球諸語 (沖縄/与那国/宮古) の否定接尾辞 *‐n / ‐rán / ‐ぬ* は古代日本語の打消助動詞 *‐ぬ* に対応する。データでは ✓ `[C:NEG]` 独立分節されており、ja_edo `[C:ぬ]` / ja_heian `[C:ず]` と並行する模範例。指摘 1 で B|D エラー解消後、本セルは完全に整合する。記録のみ。

**Op:** 修正不要 (指摘 1 のバンドル内)。

---

### 22. #89 — 全 100 文中 唯一の真の clausal negation 文として、他文との比較レビューが困難 【要検討】

**Problem:** 100 sentence dataset で **真の節否定 (clause-level standard negation)** を含む英語原文は **#89 のみ**。残りの「否定的」要素は:

(a) **#37/#39/#54/#64**: 日本語側のみが二重否定型 deontic、英語他言語訳は肯定 modal。これは「同一意味を肯定/否定構造で表現する言語の差」を示す貴重なサンプルだが、negation review としては **JA 内部の二重否定構造の分析のみ**で他言語との negation 比較が不能。
(b) **#10/#28/#40/#68 (yes-no 疑問)**: 否定形態素が Sinitic で疑問構造として現れるのみ。標準否定ではない。
(c) **#20 zh_song / #29 yue+nan / #52 yue / #89**: 散発的な lexicalized neg-verb。

**Proposed (要 owner 判断):** dataset 設計レベルで、**節否定文を 3〜5 文追加** することを review_cycle で提案:
- "I don't speak French" (clausal NEG + V)
- "I have never been to Korea" (NEG temporal adverb)
- "Nothing happened" (negative concord pronoun)
- "Don't open the window" (prohibitive negation; van der Auwera & Lejeune WALS 71)
- "She has no money" (NEG existential / possessive)

これらは Miestamo *Standard Negation* の 4 typology branches を網羅し、本レビューの cross-cutting value を倍増させる。

**Op:** dataset 拡張提案、本ラウンドでは適用不可、closed-review 議題化。

---

### 23. #89 — 否定 letter 規約 (negation-as-C) の文書化要 【要検討】

**Problem:** #89 の全 200+ 言語データを精査すると、**`[C:]` letter が NEG 形態素に充てられている言語が多数派** (vi, fr, de, es, it, ru, ar, he, hu, pl, el, mn, et, ne 等 30+) で、これは **暗黙の convention** として確立しつつある。

ただし:
- en は `[C:'t]` — clitic-as-C
- ko/ko_mid は `[C:없다]` — periphrastic NEG-as-C
- zh は `[D|C:找不到]` — 二重 letter
- ko_bus/ko_jeju は `[B|C:못]` — 二重 letter
- 多数の Bantu/Cushitic/Indo-Aryan は `[B|C/B|C|D]` で fused

**「letter C = NEG 専用」convention** を明文化し、全文の NEG 形態素を `[C]` letter に統一すれば、cross-language NEG 比較が劇的に容易になる (学習者教材としても語彙横断アクセス可能)。これは review #43 の **TAM-as-H convention** と並行する 構造的提案。

**Proposed (要 owner 判断):**
- **オプション X (sweep adopt)**: 全 100 文の NEG 形態素を `[C]` letter に統一、palette が C を含まない場合は C を追加 (palette schema 拡張)。修正対象は 約 30〜50 セル。
- **オプション Y (status-quo)**: #89 の現状を許容し、各言語の NEG 形態素 letter は文ごとに最適化する。

review #43 と同型の **schema-level convention** 議題。

**Op:** dataset-level convention 議題、本ラウンドでは適用不可。

---

## 総括 — 支配的な負否定分節欠陥

本レビューで検出された 否定チャンキング欠陥は **3 つのパターン** に収束する:

### パターン A: 否定融合 compound-letter (`B|C`, `B|C|D` の濫用) — 約 25 セル

en_app `[B|C:cain't]`、sco `[B|C:cannae]`、jam `[B|C:cyaan]`、ko_bus/ko_jeju `[B|C:못]`、mr `[B|C:नाही]`、ne `[B|C:छैन]`、or `[B|C|D:ମିଳୁନାହିଁ]`、tr `[B|C|D:bulamıyorum]`、am `[B|C:አልቻልኩም]`、ti `[B|C:ኣይከኣልኩን]`、ta `[B|C:முடியவில்லை]`、kn `[B|C|D:ಸಿಗುತ್ತಿಲ್ಲ]`、ml `[B|C:കഴിയുന്നില്ല]`、kk/ky/uz/tk `[B|C:V-NEG]`、xh/zu `[B|C|D:V]`、sw `[A|B|C:Siwezi]`、cop/tlh/ckb `[B|C:V-NEG]`、ar_ma/ar_tn `[B|C:ma...sh]`、zh/wuu/zh_song/zh_sc/zh_db/zh_han/zh_tang `[D|C:V-不-C]` — **これらすべて memory `feedback_segment_splitting.md` Rule #4 (no spurious compound-letter) 違反**。

### パターン B: 否定接頭辞が 主語 letter (A) に飲み込まれる — 約 8 セル

sw `[A|B|C:Siwezi]`、xh `[A:Andi]`、zu `[A:Angi]`、sn `[A:Handisi]`、ny `[A:Sinditha]`、ig `[A:Enweghị m]`、fi `[A:En]`、so `[A:Ma]` — **主語 letter A と否定形態素の癒着**。memory `feedback_modal_verb_not_subject.md` の延長 (「否定マーカーは主語ではない」) で letter 再配分が必要。

### パターン C: 同言語内・同系統内での 否定 letter 不整合 — 約 12 セル

(a) Sinitic 系統で **Mandarin/Wu `[D|C:V-不-C]` 融合 vs Min/Yue/Hakka `[D:V] [C:NEG]` 分離** の系統内分裂 (指摘 5)。
(b) yue #10 `[D:識] [E:唔識]` (分離) vs #40 `[E:知唔知]` (融合) — 同言語内 A-not-A 疑問の扱い分裂 (指摘 19)。
(c) ja #89 の `[B|D:見つから]` compound と全派生方言での化石化 (指摘 1)。
(d) #54/#64 ja 系の `[D:なければならない]` 全融合 vs #37/#39 の `[E:〜なければ] [B:ならない]` 二分割 — palette 不足が原因の分裂 (指摘 16)。

### 修正の優先順位

1. **最優先 (1 ラウンドで適用可能)**: 指摘 1 (ja #89 B|D エラー解消、9 セル)、指摘 7 (ko_bus/ko_jeju 못 retag、2 セル)、指摘 12 (mr/ne `B|C` retag、2 セル)、指摘 17 (vec Go da 統一、2 セル) — **計 15 セルの単純 retag**、palette 変更不要。
2. **次優先 (text 分割要)**: 指摘 5 (Sinitic V-不-C 分解、7 セル)、指摘 6 (接尾辞型否定の ZWNJ 分節、約 15 セル)、指摘 13 (ar_ma/ar_tn bracketing、2 セル) — palette 内で letter 分節を増やすが text 編集を伴う。
3. **要オーナー裁定**: 指摘 16 (#54/#64 ja 系 palette 拡張 ABCD→ABCDE)、指摘 22 (dataset 拡張提案)、指摘 23 (letter-C-as-NEG grand convention)。
4. **要 closed-review 判断**: 指摘 3 (en `n't` clitic の独立 vs 融合方針)、指摘 4 (fr ne...pas bracketing を他言語に展開するか)、指摘 10 (fi `En` 主語融合をどう扱うか)。

### 言語別取りこぼし表 (#89 のみ)

| 言語族 | 言語 | 否定 letter 状態 | 修正必要度 |
|---|---|---|---|
| Japonic | ja, ja_edo, ja_heian, ja_osa, ja_aom, ja_oki, ja_hak, ja_kyo, ja_hir, ja_mvi, ja_rys | `[C:ない]` 独立 ✓ + `[B|D:V]` エラー | **高** |
| Sinitic | zh, wuu, zh_song, zh_sc, zh_db, zh_han, zh_tang | `[D|C:V-不-C]` 融合 | **高** |
| Sinitic | yue, nan, hak_cn, cdo | `[D:V] [C:NEG]` 分離 ✓ | 低 (整合) |
| Koreanic | ko, ko_kp, ko_mid, ko_em, ko_yb | `[C:없다]` ✓ | 低 |
| Koreanic | ko_bus, ko_jeju | `[B|C:못]` 二重 letter | **高** |
| Vietnamese | vi, vi_c, vi_s, vi_nom | `[C:không]` ✓ | 低 |
| Germanic | de, de_at, de_by, de_gsw, nds, en, en_*, sv, no, da, is, nl, af, nn, fo, fy | 大多数 `[C:nicht/'t/inte/etc]` ✓ | 低 |
| Germanic | en_app, sco, jam, cy | `[B|C:cain't/cannae/cyaan/Dw i ddim yn]` 融合 | **中** |
| Romance | fr, it, es, pt, ro, ca, gl, oc, lad, sc, vec, rm, nap, scn, pap | `[C:non/no/non/etc]` ✓ + fr `[C:ne]...[C:pas]` bracketing ✓ | 低 (模範) |
| Slavic | ru, uk, be, pl, cs, sk, bg, sr, sl, cu | `[C:не/ne]` ✓ | 低 |
| Baltic | lt, lv | `[C:ne]` ✓ | 低 |
| Finnic | et `[C:ei]` ✓, fi `[A:En]` 融合 | et 整合、fi 不整合 | **中** |
| Ugric | hu | `[C:Nem]` ✓ | 低 |
| Turkic | tr, az, uz, kk, ky, tk, ug | 全て `[B|C(|D):V-NEG]` 融合 | **高** |
| Mongolic | mn, mn_cn, mnc | `[C:‌гүй]` ZWNJ 付き ✓ | 低 (模範) |
| Semitic | ar, ar_lev, ar_eg, ar_gulf, ar_iq, ar_sd, he, arc | `[C:لا/ما/לא]` ✓ | 低 |
| Semitic | ar_ma, ar_tn | `[B|C:ما...ش]` 融合 | **中** |
| Semitic | am, ti, cop | `[B|C:NEG-V]` 融合 | **高** |
| Indo-Aryan | hi, gu, ur, pa, bho, sd, as | `[C:NEG]` ✓ | 低 |
| Indo-Aryan | mr, ne, or | `[B|C:NEG]` 融合 | **中** |
| Dravidian | ta, kn, te, ml | `[B|C(|D):V-NEG]` 融合 | **高** |
| Niger-Congo | sw, xh, zu, sn, ny, rw, ig, yo | 多くが NEG-プレフィックス 融合 | **高** |
| Cushitic | om, so | om `[C:hin]` ✓, so `[A:Ma]` 配分誤 | 中 |
| Chadic | ha | `[C:Ban]` ✓ | 低 |
| Celtic | ga, cy, br | ga `[C:Ní]` ✓、cy `[C:Dw i ddim yn]` 融合、br `[C:N']` ✓ | 中 (cy のみ) |
| Greek | el, el_grc | `[C:Δεν/Οὐ]` ✓ | 低 |
| Constructed | eo, tlh, tok | eo `[C:ne]` ✓、tlh `[B|C:V-be']` 融合、tok `[C:ala]` ✓ | 中 (tlh) |

---

**ファイル:** `/home/jounlai/langmap/langmap_reviews/44_open.md`
**指摘件数:** 23 件 (うち【確実】= 10 件、【蓋然】= 8 件、【記録/要検討】= 5 件)
**支配的な否定チャンキング欠陥:** **「NEG-as-compound-letter (B|C / B|C|D の濫用)」** — 25+ セルで否定形態素が動詞・助動詞・主語と二重/三重 letter に融合し、`feedback_segment_splitting.md` Rule #4 (no spurious compound-letter) と `feedback_glue_marker.md` の ZWNJ 接尾辞分節規約を体系的に違反している。特に Turkic (tr/az/uz/kk/ky/tk/ug) と Dravidian (ta/kn/te/ml) と Bantu (sw/xh/zu) で全数違反。また `[C]` letter が事実上「NEG 専用 letter」として機能している言語が 30+ あり、これを **letter-C-as-NEG grand convention** として明文化すれば、cross-language NEG 比較が劇的に容易になる (review #43 の TAM-as-H convention と並行)。最優先修正は (1) ja #89 の `[B|D:見つから]` 二重 letter エラー (11 派生方言で化石化、9 セル単純 retag) と (2) Sinitic Mandarin/Wu 系の `[D|C:V-不-C]` 分解 (yue/nan/hak/cdo の `[D:V] [C:NEG]` パターンに統一、7 セル)。

---

## Dev response — round 1 (2026-06-04)

ご指摘ありがとうございます。今ラウンドでは **palette 変更不要 / text 編集を伴わない確実な retag-only 修正** に絞り、計 18 セルに対する edit を `/tmp/lm_edits_44.json` として確定しました。各 edit は `.wf_langmap_apply.mjs` の display-preservation / 隣接同 letter / palette validity ガードを in-memory simulation でクリア済み (data.js は STRICTLY READ-ONLY のため未編集; 適用は別工程)。

### 受理 (apply 予定): 18 セル

**指摘 1 — #89 ja 系の `[B|D:V-stem]` → `[D:V-stem]` (compound-letter エラー解消)** — 11 セル全方言:

| lang | find | newSeg |
|---|---|---|
| ja | 見つから | D |
| ja_osa | わから | D |
| ja_aom | 見つから | D |
| ja_oki | わから | D |
| ja_hak | 見つから | D |
| ja_kyo | 見つかり | D |
| ja_hir | 見つから | D |
| ja_mvi | みー | D |
| ja_rys | みーら | D |
| ja_edo | 見つから | D |
| ja_heian | 見つから | D |

レビュー指摘どおり、`B` (=助動詞 can) を被せる根拠なし。`[C:ない/ぬ/ず/んさー/らん/etc.]` は維持で、可能形でない動詞語幹を D 単独に統一。

**指摘 7 — #89 ko_bus / ko_jeju `[B|C:못]` → `[C:못]`** — 2 セル:

短形否定副詞 `못` は完全独立形態素 (Sohn 1999 §10.4.1)、B compound 削除。

**指摘 12 — #89 mr / ne `[B|C:नाही/छैन]` → `[C:...]`** — 2 セル:

Indo-Aryan NEG 形態素を hi/gu/ur/pa/bho/sd と同じく C 単独に整合。`or [B|C|D:ମିଳୁନାହିଁ]` は text 分割を伴うため本ラウンド見送り (要次ラウンド)。

**指摘 17 — vec `Go da` を D に統一 (#37 / #39)** — 2 セル:

- #37 vec: `[B:Go da]` → `[D:Go da]` (隣接が `[E:comprar]` なので衝突なし、単純 retag)
- #39 vec: `[E:Go da]` → `[D:Go da]` だと隣接 `[D:alzarme]` と衝突。`feedback_no_adjacent_same_segments.md` に従い **2 セグメントを `[D:Go da alzarme]` に merge** (`op:"replace"`、display 不変)。`feedback_impersonal_modal_as_D.md` 準拠。

**指摘 19 — #28 zh_sc `[A:能不能]` → `[D:能不能]`** — 1 セル:

A letter は主語専用、modal+NEG+modal 構造は D へ retag (palette ABCDEFG 内、D は他セルで modal letter として使用済)。

### 見送り (本ラウンド対象外)

- **指摘 2, 4, 8, 9, 14, 21** (記録のみ、修正不要) — 既に整合。
- **指摘 3, 10, 11, 18, 20** (蓋然 / closed-review 議題) — `en n't` clitic 方針 (A vs B 統一)、`fi En` 主語融合の解釈、cy `Dw i ddim yn` 4 形態素分割、modal letter 文間整合性、nan `放袂記` 分解はオーナー裁定要。
- **指摘 5** (Sinitic V-不-C 7 セル `[D|C]` → `[D:V] [C:不到/etc]`) — text 分節を伴う `replace` で適用可能だが、yue `[C:唔到]` (NEG-only) vs `[C:不到]` (NEG+RESULT) の解釈差で セル個別判断要、次ラウンド bundle。
- **指摘 6, 15** (Turkic / Dravidian / Bantu の B|C(|D) 融合解消 約 20+ セル) — ZWNJ 挿入を伴う text 再構成。各言語の形態素境界が文法書要検証 (tr `bul-a-mı-yor-um` の境界、xh `A-ndi-` の主語+NEG 分離、cop `ⲙⲡⲓ-` Past NEG prefix 等)。本ラウンドでは適用見送り、言語別 closed-review 推奨。
- **指摘 13** (ar_ma / ar_tn `ma...sh` bracketing) — fr `[C:ne]...[C:pas]` 並行で 2 セル `replace` 適用可能だが、`نلقى` を挟んだ 3 セグメント化を要し、Maghrebi ネイティブ判断推奨。次ラウンド候補。
- **指摘 16** (#37 / #39 vs #54 / #64 ja 系 palette ABCD → ABCDE 拡張で「~なければならない」二重否定可視化) — schema-level 変更、本 applier 不可。owner judging item。
- **指摘 22, 23** (dataset 拡張 / letter-C-as-NEG grand convention) — palette / dataset レベル方針、明示 owner approval 要。指摘 23 は特に 30+ セル影響、本ラウンド対象外。

### Closure recommendation

23 件中 **18 セル (= 10 件指摘該当部分; 指摘 1 / 7 / 12 / 17 / 19) を本ラウンドで apply 推奨**。残 13 件は (a) 記録のみ、(b) text 編集を伴う次ラウンド bundle、(c) palette/dataset/convention レベルで owner 裁定要 に分類。本 round-1 apply 後、`44_open.md` は **partial-closed** とし、指摘 5 / 6 / 13 / 15 を `44_round2.md` で再オープン推奨。指摘 3 / 16 / 22 / 23 は別 owner-judging issue を起票。

### Edits artifact

- `/tmp/lm_edits_44.json` (18 edits、`op:retag` × 17 + `op:replace` × 1; in-memory simulation: 18/18 OK)
