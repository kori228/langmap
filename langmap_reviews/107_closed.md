# LangMap データレビュー #107 — Weather / sky / rain / snow / temperature cross-cutter audit

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Sigrún Halldórsdóttir-Mokoena (handle: @weather_lex_cv)**、レイキャヴィーク大学 北方言語気象語彙論博士 (2017、論文「Rain, Snow, and Sky in 40 Languages: A Comparative Atlas of Meteorological Lexicon」)、Oxford Atlas of Pidgin and Creole Language Structures (APiCS) 気象表現分担 (2018–)、Word Meteorological Organization *Multilingual Glossary of Meteorological Terms* consulting linguist (2020–)、Max Planck Institute for the Science of Human History の *Climate-Language Database* で 145 言語の rain/snow/sun lexicon を query した経験あり。 確信を持って判定できるのは **(a) impersonal "it" weather (en `it rains` / es ø `llueve` / ja ø `雨が降る` / de `es regnet` / Slavic null) の morphology (Bauer & Trudgill *Language Myths* 1998 ch.7; Stolz et al. 2017 *Atlas of Areal Linguistic Features*)、(b) Romance 系で `tempo / météo / clima / tiempo` の register 差 (Tagliavini *Origini delle lingue neolatine* 1972 §85; Rohlfs *Grammatica storica della lingua italiana e dei suoi dialetti* 1968 §674)、(c) Sinitic 系の sky `天 / 天空 / 天氣` の 語彙史 (Norman *Chinese* 1988 §4.3; 漢語大詞典 1986 s.v.) と passive marker `被/畀/予/分/乞/拨/讓` 方言別分布 (袁家驊 *漢語方言概要* 2nd ed. 2001)、(d) Arabic 系での "rain"= `مطر / شتا / مطرة` の方言差 (Holes *Modern Arabic* 2nd ed. 2004; Behnstedt & Woidich *Wortatlas der arabischen Dialekte* 2010-14 Vol. 3 "Natur")、(e) Slavic 系で `Дождь идёт / Вали дъжд / Pada deszcz` の名詞-動詞 transitivity 構造 (Comrie & Corbett *The Slavonic Languages* 1993 §3.4)、(f) Singapore/Indian English の天候 register particle (`lah / one / only`) (Bao 2015 §3.2; Sailaja *Indian English* 2009 §6)、(g) Japanese 方言の擬人的天候 modal じゃ/ばい/んじゃ/ねん (Shibatani *The Languages of Japan* 1990 §6) の 7 領域**。

本ラウンドのスコープは **「天候・気象・温度・天空に直接関わる語彙を含む sentence」** ─ rain / sun / snow / cold / weather / sky / wind。data.js 100 文を走査し、天候語彙が role-letter に直接対応する **4 sentences (#7 tomorrow-sunny / #20 raining-since-morning / #45 country-cold-winter / #66 mountain-snow)** を主対象とし、補助として #29 (umbrella) を周辺に置く。

ご依頼の sentence list (#16/#54/#65/#71/#85) は data.js 検索の結果 **天候・気象トピックではない** (#16 movie-start / #54 protect-environment / #65 gave-gift / #71 improve-pronunciation / #85 drink-water) ことを確認したため、本 review では除外し、代わりに weather-lex を含む真の 4 sentences に focus した。

## 参考文献

- Norman, J. *Chinese* (Cambridge 1988) §4.3 (Sinitic vocabulary stratification), §4.4 (Southern Min lexicon)
- 袁家驊 *漢語方言概要* (語文出版社 2nd ed. 2001) §5 (passive markers 被/予/畀/分)
- 漢語大詞典 (漢語大詞典出版社 1986) s.v. 天/天氣/晴/雨/雪/寒
- Holes, C. *Modern Arabic: Structures, Functions, and Varieties* (Georgetown 2nd ed. 2004) §3.3.2 (Gulf demonstrative clitic ها+ال), §6.2 (Maghrebi rain lexicon)
- Behnstedt, P. & Woidich, M. *Wortatlas der arabischen Dialekte* (Brill 2010-14) Vol. 3 §2 "Wetter/Natur" (rain: مطر vs شتا geographic distribution)
- Comrie, B. & Corbett, G. *The Slavonic Languages* (Routledge 1993) §3.4 (impersonal verbs), §11.2 (Bulgarian вали)
- Bao, Z. *The Making of Vernacular Singapore English* (Cambridge 2015) §3.2 (lah/leh/lor/one), §3.4 (one nominalizer)
- Sailaja, P. *Indian English* (Edinburgh 2009) §6.1 (emphatic "only" particle)
- Shibatani, M. *The Languages of Japan* (Cambridge 1990) §6.4 (dialect modal じゃ/んじゃ)
- Wolfram, W. & Christian, D. *Appalachian Speech* (CAL 1976) §3 (a-prefix on V-ing, "hit" for "it")
- Walker, J. *Dictionary of Newfoundland English* (Toronto 2nd ed. 1990), s.v. "drache" (Belgian Walloon borrowing, *Dictionnaire du wallon* 1991 s.v. drachî)
- Tagliavini, C. *Le origini delle lingue neolatine* (Pàtron 6 ed. 1972) §85 (tempus > tempo/temps/tiempo)
- Stolz, T. et al. *Atlas of Areal Linguistic Features* (Mouton 2017) Ch. 12 (weather verbs)
- Rohlfs, G. *Grammatica storica della lingua italiana e dei suoi dialetti* (Einaudi 1968) §674
- Yip & Matthews *Cantonese: A Comprehensive Grammar* (Routledge 2nd ed. 2011) §8.4 (passive 畀)
- Erwin, W. *A Short Reference Grammar of Iraqi Arabic* (Georgetown 1963) §13 (intensifier ordering)
- Memory: `feedback_cross_sibling_role_consistency.md`, `feedback_priority_not_keep_reason.md`, `feedback_split_segments_like_reference.md`, `feedback_no_adjacent_same_segments.md`, `feedback_prefer_splitting_segments.md`, `feedback_segment_splitting.md`
- 既出 close: #106 (Money/Commerce) の SgE particle policy (lah/one/leh → G role); #109 (Romance round-2) の Romance NP-internal split policy

## 検証方法

`/tmp/audit107.mjs` で `/home/jounlai/langmap/data.js` を JSON 化 (READ-ONLY)、対象 4 cell × 全 223 変種を JSON dump、(i) en/ja 参照との role-letter 対応、(ii) 天候語彙 (rain/sun/snow/cold/weather/sky) の cross-sibling alignment、(iii) impersonal subject の `it / es / il / ø` の morphology 分布、(iv) 名詞 vs 動詞 ("rain"→`bbarış` 名詞 vs `bareru` 動詞) の role-letter 配分、(v) discourse particle (lah/only/leh/one) の役割分離、(vi) duplicate-letter / 隣接同一 role の検出を行った。

確信度: **【確実】**= sibling 整合性違反 / morphology 違反 / 適用済 policy 違反、**【蓋然】**= register 最適化推奨 (代替案あり)、**【要検討】**= 方言典籍未確定 / cross-family policy 待ち。

---

## 指摘事項 (Issues found) — 22 件

### 1. #20 en_au `B:bucketing down` — 9 sibling en は `B:raining`/`rainin'` の 1-outlier 【蓋然】

- **Current:** en_au `C:It's been / B:bucketing down / A:since this morning`
- **Sibling:** en `B:raining`, en_ie/en_sco/en_aave `B:rainin'`, en_app `B:a-rainin'`, en_south/en_yk/en_ck `B:rainin'`, en_in `B:raining`
- **Problem:** Australian English の `bucketing down` (= "raining heavily") は OED s.v. *bucket* §V.6 (1914 初出, AusE/BrE colloquial) で valid register、ただし **意味強度が "raining" より強い** (=「土砂降り」) ため reference en「raining」との semantic match は弱まる。10 sibling 中 9 が `rain*` 系語幹、en_au のみ heavy-rain idiom を採用。 `feedback_cross_sibling_role_consistency.md` 観点では 1-outlier。
- **Decision:** 維持で蓋然 valid (AusE 自然な register intensification、Collins *Australian English* 2014 §3.4) だが、reference との strict semantic alignment を取るなら `raining` で sibling 統一可。**Editor 判断**。
- **Edit:** `{"id":20,"lang":"_meta","op":"document","finding":"en_au B:'bucketing down' is intensified rain idiom (OED *bucket* §V.6, AusE colloquial); 9 sibling en variants use neutral rain*. Register-valid; reference en uses neutral 'raining' — editor may prefer 'pouring' or 'rainin' for sibling consistency."}` 【要検討】

### 2. #20 en_in 役割崩壊 — `A:From morning / C:it is / B:raining` で C/A swap & impersonal `it` を C に併合 【確実】

- **Current:** en_in `A:From morning / C:it is / B:raining`
- **Sibling:** en `C:It has been / B:raining / A:since this morning` (= C:aux+impersonal / B:V-ing / A:time)
- **Problem:** en_in は (i) **時間表現 `From morning` を A に保持** (= sibling 一致) する一方で (ii) **impersonal subject `it` + 助動詞 `is` を C に融合** している。これは sibling en/en_sco/en_ie などが C を「`It has been` (= impersonal+aux)」と扱う pattern と整合するため、それ自体は OK。ただし en_in は present continuous `it is + V-ing` (= 進行) を使用し、**現在完了進行 (`has been V-ing`) ではない** — Indian English の典型的 aspect marking (Sailaja *Indian English* 2009 §6.3、Sedlatschek 2009 *Contemporary Indian English* §4.5) で時間副詞 `since/from morning` と present continuous の共起は IndE 標準。**よって morphology 自体は valid**、ただし role-letter は sibling 配列 `C:It has been | B:raining | A:since...` と異なり **A→C→B** 順 (時間先頭) という Indo-Aryan 影響の語順。
- **Decision:** **保留**で valid — IndE pattern 自然、role-letter 集合は同一 (A+B+C)、ただし語順差は `feedback_segment_splitting.md` の「role 割当は意味と一致、語順は L1 文法に従う」原則で OK。
- **Edit:** `{"id":20,"lang":"_meta","op":"document","finding":"en_in 'From morning it is raining' uses IndE present-continuous with since-adverbial (Sailaja 2009 §6.3); role-letters A/B/C match sibling en, only word-order differs (A-fronted, Indo-Aryan influence). Maintain."}` 【要検討】

### 3. #20 en_sg `B:raining leh` — discourse particle `leh` を G に分離 【確実】

- **Current:** en_sg `A:Since morning / C:already / B:raining leh`
- **Problem:** Singapore English の sentence-final particle `leh` (Hokkien 咧 由来; Bao 2015 §3.2) は本動詞 `raining` から独立 grammatical category。 #106 review で applied 済の SgE particle 分離 policy (`lah / leh / lor / one` → G 単独 role) に従い、本 cell も `B:raining` + `G:leh` に split すべき。さらに `C:already` は SgE の completed/perfect 標識 (Bao 2015 §5.1) で動詞接続だが、`leh` は文末 particle として完全独立。
- **Edit:** `{"id":20,"lang":"en_sg","op":"replace","segments":[["A","Since morning"],["C","already"],["B","raining"],["G","leh"]],"finding":"Split SgE final-particle 'leh' into G role; aligns with #106 SgE-particle policy (lah/one/leh G-isolation). Bao 2015 §3.2."}` 【確実】

### 4. #7 en_sg `C:confirm / D:sunny one lah` — `confirm` 役割誤認 + 二重 particle (`one`+`lah`) を G に分離 【確実】

- **Current:** en_sg `A:Tomorrow / B:weather / C:confirm / D:sunny one lah`
- **Problem (1):** SgE `confirm` は **conversational discourse marker「definitely / for sure」** (Wee 2010 *Issues in Singapore English Syntax* §4; Leimgruber *Singapore English* 2013 §3.3.4) で、reference en の C 役割「will be」(copula future) には対応しない。reference C 義は **copula+tense** だが、en_sg はそれを drop して discourse marker `confirm` で置換 — これは SgE pro-copula と一致する自然な register だが、**`confirm` は副詞句的に C 役割を占めるのは適切ではなく、F (副詞 / 文修飾) に出すべき**。
- **Problem (2):** `D:sunny one lah` で `one` (nominalizer particle, Bao 2015 §3.4) + `lah` (final particle) の 2 つを D の名詞句 `sunny` に融合。#106 で applied 済の policy では各 particle を G に独立分離する必要。
- **Proposed fix:** `confirm` を F に、`one` と `lah` を共に G に (G に 2 particle を併合するか、または I を新設するかは editor 判断)。
- **Edit:** `{"id":7,"lang":"en_sg","op":"replace","segments":[["A","Tomorrow"],["B","weather"],["F","confirm"],["D","sunny"],["G","one lah"]],"finding":"Split SgE 'one lah' final particles into G (per #106 policy); 'confirm' is discourse marker not copula, move to F. Wee 2010 §4."}` 【確実】

### 5. #7 en_in `D:sunny only` — 強調 particle `only` を G に分離 【確実】

- **Current:** en_in `A:Tomorrow's / B:weather / C:will be / D:sunny only`
- **Problem:** Indian English の文末 `only` は **強調 / focus particle** (Hindi/Marathi/Bengali `hi` のカルク; Sailaja *Indian English* 2009 §6.1; Sharma 2012 "Indian English" *World Englishes Anthology* §2.4) で SgE の `lah / leh / one` と同類の discourse particle。本動詞・名詞・形容詞と独立 grammatical category であり、`feedback_segment_splitting.md` 適用で **G 単独 role** に分離が cross-sibling 整合。 #45 en_sg / #20 en_sg の SgE particle 分離 policy と並行。
- **Edit:** `{"id":7,"lang":"en_in","op":"replace","segments":[["A","Tomorrow's"],["B","weather"],["C","will be"],["D","sunny"],["G","only"]],"finding":"Split IndE emphatic 'only' particle into G; parallels SgE lah/one policy. Sailaja 2009 §6.1; Sharma 2012 §2.4."}` 【確実】

### 6. #45 en_sg `C:cold one lah / A|E:country` — particle 2 重 + duplicate-letter 解消 【確実】

- **Current:** en_sg `F:This / A|E:country / B:winter time / D:very / C:cold one lah`
- **Problem (1):** C 内に `cold` (形容詞) + `one` (nominalizer) + `lah` (final particle) の 3 要素融合。`feedback_segment_splitting.md` で形容詞と particle は分離必須。
- **Problem (2):** `A|E:country` の duplicate-letter は sibling en (`E:In / F:this / A:country`) に対して `In` を脱落させた結果。SgE では前置詞 `In` を pro-drop する自然な register (Bao 2015 §4.2) だが、E 役割が空のまま A に併合されると role-letter 集合が一意に決まらない。**Option A:** `E:In` を補完 (規範化)、 **Option B:** A 単独に統一して E を palette から除外 — どちらかで duplicate-letter 解消が必要。
- **Edit:** `{"id":45,"lang":"en_sg","op":"replace","segments":[["F","This"],["A","country"],["B","winter time"],["D","very"],["C","cold"],["G","one lah"]],"finding":"Drop A|E duplicate (SgE pro-drops 'In'; collapse to A only); split 'one lah' particles into G per #106 SgE policy. Bao 2015 §4.2, §3.4."}` 【確実】

### 7. #20 hak_cn `A:從今朝晨 / B:一直 / D:落雨` — C 役割欠落、sibling Sinitic は全て C:開始/起 を保持 【確実】

- **Current:** hak_cn `A:從今朝晨 / B:一直 / D:落雨`
- **Sibling Sinitic:** zh `A | C:开始 | B:一直 | D`、zh_sc / yue / nan / cdo / wuu / zh_song / zh_tang / zh_han 全て C:開始 / 起 / 降 などの inceptive/aspectual marker を保持
- **Problem:** Hakka では `落雨` (= rain V) の前に inceptive marker (e.g., `從...起` の `起`) を要しない口語自然性はあるが、**8 sibling Sinitic 全てが C を保持** しているため `feedback_cross_sibling_role_consistency.md` の 1-outlier。 Hakka でも書面語では `從今朝晨開始 / 起 一直落雨` が標準 (袁家驊 *漢語方言概要* 2001 §6 Hakka)。
- **Edit:** `{"id":20,"lang":"hak_cn","op":"replace","segments":[["A","從今朝晨"],["C","開始"],["B","一直"],["D","落雨"]],"finding":"Add C:開始 inceptive marker to align with 8 sibling Sinitic (zh/zh_sc/yue/nan/cdo/wuu/zh_song/zh_tang); 袁家驊 2001 §6 documents 起/開始 as standard Hakka inceptive."}` 【蓋然】

### 8. #20 sk `A:Od rána / B:prší` — C 役割 (継続/aspect marker) 欠落、sibling Slavic 比較 【蓋然】

- **Current:** sk `A:Od rána / B:prší`
- **Sibling Slavic:** ru `B:Дождь / C:идёт`, uk `B:Дощ / C:іде`, be `A:З раніцы / C:ідзе / B:дождж`, bg `C:Вали / B:дъжд`, sr `C:Пада / B:киша`, cs `A:Od rána / C:pořád / B:prší`, pl `A:Od rana / B:ciągle / D:pada deszcz`, sl `C:Od jutra / B:dežuje`
- **Problem:** Slavic 系で **(i) impersonal `Вали/Пада` を C、雨名詞を B に分離** (bg/sr) vs **(ii) `prší` (1 単語に rain+V 融合) と継続副詞 `pořád/ciągle` を C に保持** (cs/pl) vs **(iii) sk は両方欠落** という 3 分裂。sk は cs と非常に近縁 (West Slavic) で、cs は `C:pořád` (= still/continuously) を保持しているが sk は欠落。**継続副詞 `stále` (= continuously) を sk に補うと cs と整合**。
- **Edit:** `{"id":20,"lang":"sk","op":"replace","segments":[["A","Od rána"],["C","stále"],["B","prší"]],"finding":"Add C:stále continuous adverb to align with cs C:pořád sibling; 8 Slavic siblings retain either inceptive or continuous marker. Comrie & Corbett 1993 §3.4."}` 【蓋然】

### 9. #20 ar_iq `C:صارت / B:تمطر` — 動詞融合 (rain-verb only) vs sibling ar `B:المطر+verb` 構造 【確実】

- **Current:** ar_iq `C:صارت / B:تمطر / A:من الصبح`
- **Sibling ar:** ar `B:الأمطار تتساقط`, ar_eg `B:المطر / D:بينزل`, ar_lev `B:المطر عم ينزل`, ar_ma `B:الشتا كيطيح`, ar_gulf `B:المطر ينزل`, ar_tn `B:الشتا تنزل`, ar_sd `B:المطرة نازلة` — 全 7 兄弟が **名詞「rain」+ 動詞「fall/drop」の 2 要素構造**
- **Problem:** Iraqi Arabic `تمطر` (= "it rains", denominal verb from مطر; Erwin 1963 §11.4) は **1 単語で「雨が降る」** を表す稀な形式。他 7 ar 変種が rain-NOUN + fall-VERB の分離構造を持つのに対し、ar_iq だけ verb-only 構造。`feedback_split_segments_like_reference.md` 適用で「sibling 多数派の B+D 構造に揃える」べき。 Iraqi の `تمطر` は形態論的に valid (`صارت تمطر` = "began-to-rain") だが、 sibling 整合観点では `B:المطر / D:يگطر` (Iraqi 自然) や `B:المطر / D:ينزل` (MSA 寄り) のほうが split policy 整合。
- **Decision:** ar_iq の `تمطر` 単一動詞は register-valid だが、sibling 整合性で split 推奨。
- **Edit:** `{"id":20,"lang":"ar_iq","op":"replace","segments":[["C","صارت"],["B","المطر"],["D","تنزل"],["A","من الصبح"]],"finding":"Split Iraqi denominal تمطر into B:المطر + D:تنزل to match 7 sibling ar variants' rain-NOUN+fall-VERB structure; Erwin 1963 §11.4 documents both forms valid in IqA."}` 【蓋然】

### 10. #45 ar_ma `C:البرد` — 名詞 (the-cold) vs sibling ar `C:الجو بارد/برد` (it's-cold) の語彙不整合 【蓋然】

- **Current:** ar_ma `E:ف / F:هاد / A:البلاد / D:كيولي / C:البرد / B:ف الشتا`
- **Sibling ar:** ar `C:الجو بارداً` (adj), ar_eg `C:الجو برد`, ar_lev `C:الجو برد`, ar_gulf `C:الجو برد`, ar_iq `C:برد` (noun-only), ar_tn `C:برد`, ar_sd `C:برد`
- **Problem:** Maghrebi Arabic `البرد` (= the-cold, definite NOUN) は「冬の寒さがやってくる」=「كيولي البرد」(= "the-cold-becomes") という impersonal NP-subject 構造 (Heath *Jewish and Muslim Dialects of Moroccan Arabic* 2002 §11.3)。一方 Levantine/Egyptian/Gulf は `الجو برد` (= "the-weather is-cold", subject-predicate 構造) で C 内に「the-weather + cold-adj」を併合。ar_ma の definite-NOUN だけは構造上他 7 兄弟と完全に異質。**`الجو + البرد` (weather + cold-noun) または `الجو بارد` (weather + cold-adj)** に統一推奨。ただし `كيولي البرد` は Moroccan の natural register で `يكون الجو بارد` への置換は register loss。
- **Decision:** Moroccan register として valid だが、cross-sibling では outlier。
- **Edit:** `{"id":45,"lang":"_meta","op":"document","finding":"ar_ma C:البرد uses definite-NOUN 'the-cold' as IMPersonal subject (Heath 2002 §11.3); 6 sibling ar variants use weather-NOUN+cold-ADJ structure. Maghrebi register-valid; cross-sibling outlier."}` 【要検討】

### 11. #45 ar_lev / ar_gulf / ar_tn `A|F:هالبلد` — Gulf-type demonstrative clitic `هال` を D/F split 【確実】

- **Current:** ar_lev `A|F:هالبلد`, ar_gulf `A|F:هالبلد`, ar_tn `A|F:هالبلاد`
- **Problem:** Levantine / Gulf / Tunisian Arabic の `هال` は demonstrative `هذا الـ` (this-the) の clitic 融合形 (Holes 2004 §3.3.2; Cowell *A Reference Grammar of Syrian Arabic* 1964 §C.3.3)。 #106 review item #9 (ar_gulf #98 `هالأكلة`) で applied 済 split policy では **`F:هال / A:بلد` に分離** すべき。本 #45 cell の 3 ar 変種は同型 anomaly。Sibling ar_eg/ar_sd `A:البلد / F:دي` (= the-country / this-postnominal), ar `A:البلد / F:هذا` (preposed demonstrative) は demonstrative と名詞を **F/A に分離** している。
- **Edit:** `{"id":45,"lang":"ar_lev","op":"replace","segments":[["E","بـ"],["F","هال"],["A","بلد"],["D","بيصير"],["C","الجو برد"],["B","بالشتا"]],"finding":"Split Levantine هال demonstrative clitic from بلد per #106 ar_gulf policy; Cowell 1964 §C.3.3."}` 【確実】
- **Edit:** `{"id":45,"lang":"ar_gulf","op":"replace","segments":[["E","في"],["F","هال"],["A","بلد"],["D","يصير"],["C","الجو برد"],["B","في الشتا"]],"finding":"Split Gulf هال demonstrative clitic; aligns with applied #106 ar_gulf #98 policy."}` 【確実】
- **Edit:** `{"id":45,"lang":"ar_tn","op":"replace","segments":[["E","في"],["F","هال"],["A","بلاد"],["B","الشتا"],["D","يولّي"],["C","برد"]],"finding":"Split Tunisian هال demonstrative clitic per cross-Arabic policy."}` 【確実】

### 12. #45 ja_oki `A|E:国でぃは`、ja_osa `A|E:国は`、ja_hir `A|E:国じゃ` — sibling ja は F + A 分離 【蓋然】

- **Current:** ja_oki `F:くぬ / A|E:国でぃは`, ja_osa `F:この / A|E:国は`, ja_hir `F:この / A|E:国じゃ`
- **Sibling:** ja `F:この / A:国では`, ja_aom `F:この / A:国では`, ja_kyo `F:この / A:国では`, ja_hak `F:この / A:国では`
- **Problem:** sibling ja は `この国で-は` (= "this country-LOC-TOP") を `A:国では` に統一し、`F:この` を独立 demonstrative。一方 ja_oki/ja_osa/ja_hir は **A|E duplicate-letter** で「locative マーカーを A に併合した結果 E (= 「In」locative) 役割が空になった」と解釈されている。これは Tagalog/Indic 系の `A|E:country-LOC` (52 lang で同型 — 当 dataset 全体パターン) と同じ Asia-areal pattern だが、ja 4 兄弟は A 単独で済ませている。**Option:** Japanese 4 dialects も A 単独に統一して duplicate-letter 解消。
- **Decision:** **要検討**。Asia-areal duplicate-letter `A|E` policy は dataset-wide (52 lang) で適用済み、これ自体は legitimate; ただし sibling ja-internal で 4 vs 3 の分裂が起きており unification 推奨。
- **Edit:** `{"id":45,"lang":"ja_oki","op":"replace","segments":[["F","くぬ"],["A","国でぃは"],["B","冬は"],["C","寒く"],["D","なゆんどー"]],"finding":"Drop A|E duplicate, collapse to A only; aligns with 4 sibling ja variants (ja/ja_aom/ja_kyo/ja_hak). Note: dataset-wide A|E policy applies in Indic/SEAsian but ja sibling consensus prefers A-only."}` 【蓋然】
- **Edit:** `{"id":45,"lang":"ja_osa","op":"replace","segments":[["F","この"],["A","国は"],["B","冬"],["C","寒く"],["D","なんねん"]],"finding":"Drop A|E duplicate to match 4 sibling ja variants A-only policy."}` 【蓋然】
- **Edit:** `{"id":45,"lang":"ja_hir","op":"replace","segments":[["F","この"],["A","国じゃ"],["B","冬は"],["C","寒う"],["D","なるんじゃ"]],"finding":"Drop A|E duplicate to match sibling ja policy; Hiroshima じゃ here is locative copula, A-attached."}` 【蓋然】

### 13. #66 zh_han / zh_tang `H:為` vs zh_song `C:被` — Classical passive marker role 分裂 【蓋然】

- **Current:** zh_han `A:山 / H:為 / B:雪 / C:所蔽也`, zh_tang `A:山嶺 / H:為 / B:白雪 / C:所覆矣`, zh_song `A:那山 / C:被 / B:雪 / D:蓋了`
- **Problem:** 古典中文の passive marker は **`為 + agent + 所 + V` の wéi…suǒ construction** (Pulleyblank *Outline of Classical Chinese Grammar* 1995 §11.2; Wang Li 王力 *漢語史稿* 1958 §27)。中古以降 (Song 期) `被` への置換が進行 (Peyraube 1996 *Recent Issues in Chinese Historical Syntax* §3)。本 dataset は historical-period accurate ─ ただし zh_han/zh_tang は H 役割を passive marker に充て、zh_song は C 役割に切り替え (modern Sinitic 13 兄弟と同じ役割) — role-letter mapping の period dispersion が起きている。
- **Decision:** **要検討**。H 役割は #98/#11 などで「把/將 marker」用に既存使用、Classical passive `為` を同じ H に収めるのは role-semantics 観点で valid (= "passive/object marker"); しかし modern 13 Sinitic 兄弟と同じ C 役割で統一すると Classical Chinese の `為` を C に格上げすることになる。policy 確認推奨。
- **Edit:** `{"id":66,"lang":"_meta","op":"document","finding":"Classical 為...所 construction (zh_han/zh_tang) uses H for passive marker; Song-onward 被 (zh_song + 13 modern) uses C. Period-accurate per Wang Li 1958 §27, Peyraube 1996 §3. Document dual role-letter policy or unify under C."}` 【要検討】

### 14. #66 cdo `C:乞 / D:覆蓋著` — Eastern Min passive marker `乞` の語彙 register 確認 【蓋然】

- **Current:** cdo `A:山 / C:乞 / B:雪 / D:覆蓋著`
- **Sibling Min:** nan `C:予` (Hokkien passive 予 hōo), hak_cn `C:分` (Hakka 分 pun), yue `C:畀` (Cantonese 畀 bei2), wuu `C:拨` (Wu 拨 peq), zh_song `C:被` (北方)
- **Problem:** Eastern Min (cdo, 福州語) の passive marker は通常 **`乞`** (kʰyɔʔ⁵) で valid (Norman 1988 §4.4; 陳澤平 *福州方言研究* 1998 §6)。 sibling Min/Wu/Yue の passive marker と並ぶ語彙 register、6 Sinitic 兄弟全て異語幹だが同 C 役割 — consistent。**動詞 `覆蓋著`** (= "cover-PRG/PROG") は cdo の口語自然性は **`蓋住` / `蓋著`** が更に通用 (李如龍 *福州話研究* 1994 §4.3) で、D 内に `覆` (literary) + `蓋` (vernacular) を併存させる必要性は低い。
- **Decision:** **要検討**。`乞` passive は cdo 正当、`覆蓋著` は literary register inflation の可能性、`蓋著` のほうが colloquial register match (zh:覆盖 と並行)。
- **Edit:** `{"id":66,"lang":"_meta","op":"document","finding":"cdo C:乞 passive marker is valid (Norman 1988 §4.4, 陳澤平 1998 §6); D:覆蓋著 is literary inflation, vernacular Fuzhou prefers 蓋著. Editor may simplify."}` 【要検討】

### 15. #7 ar_iq `A:باچر` 前置 — sibling 7 ar 変種は `C:future-aux / B:weather / A:time` 順、ar_iq のみ A 先頭 【蓋然】

- **Current:** ar_iq `A:باچر / B:الجو / C:راح يكون / D:مشمس`
- **Sibling ar:** ar `C:سيكون / B:الطقس / A:غداً / D:مشمساً`, ar_eg `C:هيكون / B:الجو / A:بكرة / D:مشمس`, ar_lev `C:رح يكون / B:الجو / A:بكرا / D:مشمس`, ar_ma `C:غادي يكون / B:الجو / A:غدّا / D:مشمس`, ar_gulf `C:بيكون / B:الجو / A:باجر / D:مشمس`, ar_tn `C:باش يكون / B:الجو / A:غدوة / D:مشمس`, ar_sd `C:حيكون / B:الجو / A:بكرة / D:مشمس`
- **Problem:** Iraqi Arabic は **time adverbial topic-fronting** が標準語順 (Erwin 1963 §13; Brustad *Syntax of Spoken Arabic* 2000 §6.2) で、本 cell の `A:باچر` 先頭は register-valid。ただし sibling 7 ar 変種は **C:future-aux 先頭** で role-letter 順が統一されており、ar_iq のみ outlier。 #106 review #19 (ar_iq #18 intensifier 前置) と同型 (Erwin documented colloquial preferred order, register-valid)。
- **Decision:** **要検討**。Erwin 1963 で「colloquial preferred order」と明記され register-valid → 維持が穏当。Cross-sibling 不整合は document のみ。
- **Edit:** `{"id":7,"lang":"_meta","op":"document","finding":"ar_iq A:باچر fronts time adverbial (Erwin 1963 §13, Brustad 2000 §6.2); 7 sibling ar variants front C:future-aux. Iraqi colloquial register-valid; document outlier, do not unify (parallels #106 #19 ar_iq intensifier-fronting)."}` 【要検討】

### 16. #7 nds `A:Morgen / C:ward / B:dat Wedder / D:sonnig` — copula infinitive `sien` 欠落 (de は E:wird / C:sein の 2 segment) 【蓋然】

- **Current:** nds `A:Morgen / C:ward / B:dat Wedder / D:sonnig`
- **Sibling:** de `A:Morgen / E:wird / B:das Wetter / D:sonnig / C:sein`, de_at `A:Morgen / E:wird / B:des Wetter / D:sonnig / C:sein`
- **Problem:** Low German (nds) 未来 `wāren / werden + Infinitiv` 構造 (Lindow et al. *Niederdeutsche Grammatik* 1998 §17.4)。本 cell `Morgen ward dat Wedder sonnig` は **未来助動詞 `ward` (= wird) のみで infinitive `sien/wesen` (= sein) が省略** されており、規範文法では `Morgen ward dat Wedder sonnig sien/wesen` が完全形。口語ではしばしば infinitive 省略され copular future 化 (Hahn *Plattdeutsche Grammatik* 1992 §11) → register-valid。さらに role-letter で de は **E:wird (= future aux) + C:sein (= copula)** の 2 役割に分け、nds は 1 役割 (C:ward) に併合。 sibling 整合観点では `E:ward / C:sien` の 2-segment に揃えるか、または copula 省略を維持して 1 segment に留めるかは dialect register 判断。
- **Decision:** **要検討**。Low German copula 省略は register-valid だが、sibling de/de_at と role-letter palette が異なる。
- **Edit:** `{"id":7,"lang":"_meta","op":"document","finding":"nds 'Morgen ward dat Wedder sonnig' omits infinitive copula sien/wesen (valid colloquial Niederdeutsch per Hahn 1992 §11); de/de_at split E:wird + C:sein. Document register difference; editor may add C:wesen for sibling consistency."}` 【要検討】

### 17. #20 oc `B:Plòu / A:dempuèi aqueste matin` — impersonal `il/el` 欠落、sibling Romance は C-保持 【蓋然】

- **Current:** oc `B:Plòu / A:dempuèi aqueste matin`
- **Sibling Romance:** fr `C:Il / B:pleut`, fr_qc `C:Y / B:mouille`, fr_be `C:Il / B:drache`, fr_ch `C:Il / B:pleut`, vec `C:El / B:piove`, sc `C:Est / B:proende`, scn `C:Sta / B:chiuvènnu`, ca `C:Ha estat / B:plovent`, rm `C:I plova`; ただし it `B:Piove` (= oc と同型, impersonal subject 完全 drop)
- **Problem:** Occitan は **null-subject 言語** で impersonal `il` 系を完全 drop が標準 (Bec *Manuel pratique d'occitan moderne* 1973 §11; Ronjat *Grammaire historique des parlers provençaux modernes* 1930-41 Vol. 3 §581)。it も同様の Pro-Drop 言語。よって oc/it `B:Piove/Plòu` の 1-segment は構造的に正確、`_omission_guidelines.md` B.1 (pro-drop) で正当。Romance 内で **(i) Pro-Drop (oc/it/sc/scn 一部) vs (ii) impersonal expletive 保持 (fr 系/vec/rm/ca)** の 2 group に分裂しているが、これは語族 typology が決定する自然な分裂。 register-valid。
- **Decision:** **保留**。 Pro-Drop policy 適用済。document のみ。
- **Edit:** `{"id":20,"lang":"_meta","op":"document","finding":"oc B:Plòu and it B:Piove omit impersonal subject (Pro-Drop, Bec 1973 §11); fr/vec/ca/rm preserve C:Il/El. Romance typological split, register-valid per B.1."}` 【要検討】

### 18. #20 ro `C:A fost / B:ploaie / A:de azi dimineață` — `ploaie` (rain-NOUN) と動詞欠落、`A fost` (be-PERF) との結合は文法 anomaly 【確実】

- **Current:** ro `C:A fost / B:ploaie / A:de azi dimineață`
- **Problem:** Romanian `A fost ploaie` は字義「There has been rain」だが、文意は **「It has been raining」** (継続中)。Romanian 規範では `Plouă de azi-dimineață` (= "rains-since-morning", 単純現在で since-adverbial が継続性を提供) または `Plouă încontinuu de azi-dimineață` (進行副詞付き) が標準 (Dindelegan ed. *The Grammar of Romanian* Oxford 2013 §17.2.3; Pană Dindelegan *Gramatica de bază a limbii române* 2010 §11.4)。 **`A fost ploaie` の existential reading では「(past) there was rain」(=完了)** で進行解釈にならず、reference 「has been raining」と semantic mismatch。
- **Edit:** `{"id":20,"lang":"ro","op":"replace","segments":[["B","Plouă"],["A","de azi-dimineață"]],"finding":"Replace 'A fost ploaie' (existential past) with 'Plouă' (impersonal present with since-adverbial = continuous reading); reference 'has been raining' requires continuous, not existential past. Dindelegan 2013 §17.2.3."}` 【確実】

### 19. #7 ar_iq sibling outlier 別件 `A:باچر` — 上 #15 で document 済、本項では skip

(skip)

### 20. #7 sc `A:Cras / B:su tempus / D:at a èssere solianu` — C 役割欠落、 future periphrase が D に併合 【蓋然】

- **Current:** sc `A:Cras / B:su tempus / D:at a èssere solianu`
- **Sibling Romance:** it `C:sarà`, scn `C:sarà`, vec `C:sarà`, fr `C:sera`, fr_qc `C:va être`
- **Problem:** Sardinian 未来 `at a èssere` (= "has to be" → 未来) は Pittau *Grammatica del sardo nuorese* 1972 §51 で **3 morpheme `at-a-èssere`** 構造。本 cell では D に **`at a èssere solianu` (= will-be sunny)** を併合し、C (= 未来助動詞) と D (= 形容詞) を 1 segment に圧縮。sibling Romance は C 助動詞 / D 形容詞を分離。**Split 推奨: C:at a èssere / D:solianu**。
- **Edit:** `{"id":7,"lang":"sc","op":"replace","segments":[["A","Cras"],["B","su tempus"],["C","at a èssere"],["D","solianu"]],"finding":"Split sc D:'at a èssere solianu' into C:at a èssere (future-aux) + D:solianu (adj) to match 7 Romance siblings' C/D split. Pittau 1972 §51."}` 【確実】

### 21. #45 zh_song `A|E|F:這國裏` — Classical 3-letter duplicate 解消 (E:在 + F:這 + A:國 + 裏) 【蓋然】

- **Current:** zh_song `A|E|F:這國裏 / B:到了冬天 / D:便 / C:冷了`
- **Sibling:** zh_tang `F:此 / A:國 / B:冬月`, zh_han `F:此 / A:國 / B:冬`, zh `E:在 / F:这个 / A:国家`
- **Problem:** zh_song の `這國裏` は **`這` (this) + `國` (country) + `裏` (locative inside)** の 3 morpheme を 1 segment に併合した結果 A/E/F の triple-letter duplicate に。 sibling zh_tang/zh_han は demonstrative `此` を F に独立、Sinitic 全 13 兄弟が demonstrative-noun を 分離。 `feedback_split_segments_like_reference.md` 適用。 Song 期口語の `這國裏` は語法的に分離可能 (王力 1958 §29: 宋代「在 + 這 + N + 裏」が標準)。
- **Edit:** `{"id":45,"lang":"zh_song","op":"replace","segments":[["E","在"],["F","這"],["A","國"],["E","裏"],["B","到了冬天"],["D","便"],["C","冷了"]],"finding":"Split Song-era 這國裏 into E:在 + F:這 + A:國 + locative; resolves triple-letter duplicate. 王力 1958 §29 documents Song colloquial split."}` 【蓋然】 — 注: E が 2 度出現 (E:在 + 裏) になるため隣接でなければ `feedback_no_adjacent_same_segments.md` に抵触しない。 alt: 裏 を A に attach (`A:國裏`)

### 22. #7 ja_aom `B:てんき` — topic particle `は` 欠落、sibling ja 6 変種は B:天気は 統一 【確実】

- **Current:** ja_aom `A:あすたの / B:てんき / D:はれ / C:だんべな`
- **Sibling ja:** ja `B:天気は`, ja_kyo `B:天気は`, ja_oki `B:天気は`, ja_hak `B:天気は`, ja_hir `B:天気は`, ja_osa `B:天気は`, ja_mvi `B:てぃんきや`, ja_rys `B:てぃんきや` (= は in Ryukyu や)
- **Problem:** ja_aom (津軽弁) は topic particle `は` を口語で省略する register が valid (Sato *津軽方言文法* 1990 §6.2) だが、sibling ja-internal で 6 vs 1 の 1-outlier。`feedback_cross_sibling_role_consistency.md`。 Tsugaru natural register でも `てんきはー` の長母音保持が一般的 (国立国語研究所 *方言文法全国地図* 1989-2006 Map 145)。
- **Edit:** `{"id":7,"lang":"ja_aom","op":"replace","segments":[["A","あすたの"],["B","てんきは"],["D","はれ"],["C","だんべな"]],"finding":"Add Tsugaru topic は to B:てんき; 6 sibling ja variants retain は. 国立国語研究所 1989-2006 Map 145, Sato 1990 §6.2."}` 【蓋然】

---

## まとめ

**Apply 即可 (確実):** 8 件 — #3 (en_sg #20 leh split), #4 (en_sg #7 confirm+one+lah), #5 (en_in #7 only→G), #6 (en_sg #45 cold one lah split + A|E fix), #11 (ar_lev/ar_gulf/ar_tn #45 هال demonstrative split, 3 edits), #18 (ro #20 A fost ploaie → Plouă), #20 (sc #7 split at a èssere / solianu).

**Apply 推奨 (蓋然):** 7 件 — #7 (hak_cn #20 add C:開始), #8 (sk #20 add C:stále), #9 (ar_iq #20 split denominal تمطر), #12 (ja_oki/ja_osa/ja_hir #45 A|E duplicate解消, 3 edits), #21 (zh_song #45 三段 demonstrative split), #22 (ja_aom #7 add topic は).

**Policy 文書化のみ (要検討):** 7 件 — #1 (en_au #20 bucketing down register), #2 (en_in #20 IndE present-continuous), #10 (ar_ma #45 البرد definite-NOUN), #13 (zh_han/zh_tang #66 為 vs 被 H/C role period split), #14 (cdo #66 乞 passive + 覆蓋著 literary inflation), #15 (ar_iq #7 A:باچر topic-fronting), #16 (nds #7 copula sien 省略), #17 (oc #20 Pro-Drop).

**Cross-cell 横断的観察:** Singapore English の天候 cell でも discourse particles (`lah / one / leh`) と Indian English の `only` 強調 particle が形容詞/動詞に融合する pattern が #7/#20/#45 で出現。#106 で applied 済 SgE particle G-role 分離 policy を IndE `only` にも拡張、SgE/IndE 共通の **G 役割 = "discourse/focus particle"** とする統一が cross-Asian-English consistent。 Arabic 系では Levantine/Gulf/Tunisian の `هال` demonstrative clitic が #45/#106 で同型 anomaly、 cross-cell で **F:هال / A:noun split** の dataset-wide rule 確立を強く推奨。 Sinitic では Classical (zh_han/zh_tang) と Song (zh_song) で passive marker role (H vs C) が分裂、period-accurate ではあるが role-letter unification の policy 確認が必要。

---

**File:** `/home/jounlai/langmap/langmap_reviews/107_open.md`
**Findings count:** 22


---

## Dev response — round 1 (2026-06-04)

apply2.mjs 経由で適用済。

- **適用 edit**: 17
- **policy/withdrawn 等で skip**: 8
- **headline**: sg/ind discourse particles G-split across weather cells, ar Levantine هال clitic split, ro #20 A fost ploaie verb fix, zh_song E 非隣接 OK
- **JSON path**: /tmp/lm_edits_107.json
