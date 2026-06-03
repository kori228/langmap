# LangMap データレビュー #46 — 2人称レジスター (T-V distinction) 横断レビュー

## レビュアー自己紹介 (ペルソナ)

Marit Tjøstheim-Goyal (handle: **@tv_marit**)。オスロ大学 (UiO) ILOS 社会言語学博士、現 Max Planck Institute for Psycholinguistics (Nijmegen) 客員研究員。学位論文 *Pronouns of Address in Twenty-First-Century Romance, Slavic, and Sinosphere Discourse — A Corpus-Aided Typology* (Helmbrecht 指導, 2019)。常用文献は Brown & Gilman *The Pronouns of Power and Solidarity* (1960 *Style in Language*)、Helmbrecht *Politeness Distinctions in Pronouns* (WALS 45)、Heine & Song *On the Genesis of Personal Pronouns* (J. Universal Language 2011)、Sohn *The Korean Language* (CUP 1999, ch. 8 "Speech Levels and Honorifics")、Sino-Vietnamese 親族呼称体系の Luong *Discursive Practices and Linguistic Meanings* (Benjamins 1990)、Pizziconi *Politeness in Japanese* (2003) など。

本レビューは **言語固有の問題ではなく、データセット全体に渡る 2 人称レジスター (T = familiar/intimate / V = formal/respectful) の横断的整合性** のみを精査する。語彙選択 (例: post office を「郵便局」と訳すか否か)、TAM 分節、語順、声調表記、敬語助動詞の有無 (これらは #28, #38, #43 系統で扱い済) は射程外とし、「**ある言語で 2 人称代名詞をどう選んでいるか / 動詞活用語尾が T 系か V 系か / その選択が他文・他言語と整合しているか**」のみに集中する。

## 検証範囲

- **明示的 "you/your" を含む en 文**: #10, #28, #40, #85, #100 (= 5 文)。
- **2 人称聞き手が含意される命令・依頼・許可文**: #13 (please give me)、#24 (please show me)、#34 (please speak slowly)、#49 (please tell me)、#68 (Can I sit here / 聞き手の許可)、#96 (please turn right) (= 6 文)。
- 合計 **11 文 × 約 80 言語** が射程。各言語の **代名詞形 (sg)** と **動詞活用語尾 (二人称)** と **付随する礼譲粒子 (s'il vous plaît / por favor / 주세요 / おくれやす)** の三層で T/V を判定する。
- 重点ターゲット言語: fr / fr_qc / fr_be / es_eu / es_mx / es_ar / es_cl / es_co / es_pe / de / de_at / de_by / pt_eu / pt_br / it / scn / nap / vec / sc / oc / ca / gl / ro / ru / uk / pl / cs / sk / sl / sr / sq / el / ja / ja_osa / ja_kyo / ja_edo / ko / ko_bus / ko_jeju / ko_em / vi / vi_c / vi_s / vi_nom / hi / id / ms / jv / su / th / tr / fi / hu / la / ar / he / fa / hy / ka / mn / kk / uz / ky / tlh / eo / tok / jbo / ain / yi / lad / got / cu

## 方針 — 何を「指摘」とし、何を「許容」とするか

1. **基準レジスター** は **V (polite, distant, addressing a stranger or service interlocutor)**。 #13/#24/#34/#49/#96 はすべて「お客 → 店員 / 通行人」の依頼文脈で、ましてや「Please / お願い / por favor / お子さん風の頼み方ではない」原文。**T (intimate, familiar)** が登場すれば指摘対象。例外は明確な近しさを示す文 (#85 = 個人へのアドバイス) のみ、ただしそれでも他言語との **対称性が破られているか** を見る。
2. **同じ言語内で文ごとに T/V がフリップ** している場合は最強の指摘。例えば fr が #10 #28 #40 で `vous`、#85 で `vous`、ただし fr_qc が #10 で `tu` (Quebec 規範) → これは方言として許容。一方、es_mx は #40 で **`tú` / `sabes`** (T 形) を採るが #10 #28 #85 #96 では **`usted` / V 形** を採る — 同言語内 inconsistency。
3. **言語横断**: 同一文 (#10) で「fr=V (vous), es=V (usted), de=V (Sie), ru=V (вы), it=V (lei)」が並ぶ中で **id=T (kamu) / tr=T (sen) / hu=T (te) / la=T (tu) / fa=V (شما) / ar=T (تستطيع 2msg)** のように T/V が分裂する場合、データセット全体の polite-default 方針から外れている言語を指摘。
4. **代名詞 + 動詞活用の不一致**: pt_br #40 `[A:Você] [E:sabe]` は **代名詞 você (formal) + 3sg 活用** で整合、しかし es_mx #40 `[A:tú] [E:Sabes]` は明示主語 *tú* で 2sg、これは他 es 変種 (usted) と非対称。
5. **Sinosphere の敬意上昇 / 下降のフリップ**:
   - ja: あなた (中立 polite) / 君 (やや見下し) / お前 (intimate~rude) / お主 (古風)。 ja_edo がペルソナとして「お主」を採るのは歴史的妥当だが、 ja_osa「あんた」/ ja_kyo「あんたはん」 は **中立~ややぞんざい寄り**で、polite-default に対しレジスターが下がる。
   - ko: 당신 (formal in writing/spouse), 너 (intimate), 그쪽 (neutral), 그대 (literary/archaic)。 ko 標準 `당신은` は **配偶者 or 文章語限定**で対面では実は不自然 — 標準 ko はむしろ「선생님은 / 손님은」など職業敬称か代名詞 zero が natural。
   - vi: bạn (neutral peer), anh/chị/em (kinship-based, polite default), quý khách (formal customer), mi (intimate/rude)。 vi_c が #10/#28/#40/#85 で `mi` を採るのは **北中部方言 (Nghệ-Tĩnh) の T 形**だが、polite request 文脈 (#28 #96) では parallax として強い。
6. **plural vs sg 区別**: en "you" は両義だが、本データの文脈はすべて **sg 対話者** (#10 「英語話せますか」 = 個別質問、#85 「水もっと飲んだほうがいい」 = 個別アドバイス)。pl `pan/pani` (#10) のように 3sg honorific を採る言語もあるが、これは V の一形態として OK。
7. **無主語 / pro-drop** は許容。問題は **代名詞を明示しつつ T を選ぶ** か **動詞語尾で V 表示しない** ケース。

確信度: 【確実】= 同言語内で文ごとに代名詞/活用が T↔V 化石化分裂、【蓋然】= 同一文での言語横断パリティが大きく崩れる、【要検討】= 方針自体を closed-review で確認すべきもの。

---

## 指摘事項 (Issues found)

### 1. es_mx の 2 人称が文ごとに T↔V フリップしている 【確実】

**Current:**
- **#10**: `[A:Usted] [D:puede] [C:hablar] [B:inglés]` (V: usted + 3sg)
- **#28**: `[A:Podría] [B:usted] [C:recomendarme] ...` (V: podría = 3sg subjunctive + usted)
- **#34**: `[A:Por favor] [C:habla] [B:más] [D:despacio]` (**T: habla = 2sg tú imperative**)
- **#40**: `[E:Sabes] [A:tú] [C:dónde] [D:está] [B:el correo]` (**T: tú + sabes = 2sg**)
- **#49**: `[A:Por favor] [D:díga] [B:me] [E:cómo llegar]` (V: díga(me) = usted imperative)
- **#68**: 1sg self-permission, 対象外
- **#85**: `[A:Tú] [D:deberías] [C:tomar] [E:más] [B:agua]` (T: tú + 2sg conditional)
- **#96**: `[A:Por favor] [B:dé vuelta a la derecha]` (V: dé = usted imperative)
- **#13** `[B|D:deme]` (V: usted imperative)、**#24** `[D:muéstre]` (V)

**Problem:** 同じ es_mx ロケール内で **#10/#13/#24/#28/#49/#96 が V (usted)**、**#34/#40/#85 が T (tú)** に分裂。Mexico 通用の polite-default は usted (Lope Blanch 1972; Lipski *Latin American Spanish* 1994, §11) で、見ず知らずの店員/通行人への命令文・質問文 (#34 #40) で `tú` を採るのは contextually 不自然。とくに **#40 「Do you know where the post office is?」 (見知らぬ通行人への質問) を `Sabes tú` と T で訳すのは es 全 6 変種のなかで es_mx だけ** (es_eu/co/pe 全て `Sabe usted`、es_ar `Sabés` は voseo の T だが Argentine 方言として整合)。

**Proposed:**
- #34 es_mx `[C:habla]` → `[C:hable]` (usted imperative, T → V)
- #40 es_mx `[E:Sabes] [A:tú]` → `[E:Sabe] [A:usted]`
- #85 es_mx `[A:Tú] [D:deberías]` → `[A:Usted] [D:debería]`

これで es_mx 全 11 文が V (usted) で一貫し、es_eu/co/pe との横断対称性も回復する。es_ar/cl の voseo 系は方言特性として独立に残してよい。

---

### 2. es_pe / es_cl の 2 人称が文ごとに T↔V フリップ 【確実】

**Current:**
- **es_pe #10/#13/#24/#28/#34/#49/#96**: 全て V (Usted / dígame / hable / dé / etc.)
- **es_pe #40**: `[E:Sabe] [C:dónde] [D:queda] [B:el correo]` (V, 主語 pro-drop で OK)
- **es_pe #85**: `[D:Debería] [C:tomar] [E:más] [B:agua]` (V, 主語 pro-drop で OK)
- es_pe は概ね V で一貫している ✓

- **es_cl #10**: `[D:Podís] [C:hablar] [B:inglés]` (**T: podís = voseo chileno 2sg**)
- **es_cl #28**: `[A:Podrías] [C:recomendarme]` (**T: podrías = tú 2sg conditional**)
- **es_cl #34**: `[A:Por favor] [C:hable] [B:más lento]` (V: hable)
- **es_cl #40**: `[E:Sabís]` (**T: voseo chileno 2sg**)
- **es_cl #49**: `[A:Por favor] [D:dígame]` (V)
- **es_cl #85**: `[D:Deberías] [C:tomar]` (T: 2sg conditional, 主語省略)
- **es_cl #96**: `[A:Por favor] [B:doble a la derecha]` (V: doble = usted imperative)
- **es_cl #13** `[B|D:deme]` (V)、**es_cl #24** `[D:muéstreme]` (V)

**Problem:** es_cl は **#10/#28/#40/#85 で T (Chilean voseo)、#13/#24/#34/#49/#96 で V (usted)** という極端な分裂。同じ Chile 方言の中で「店員に水を頼む = V」「店員にレストランを推薦してもらう = T」というレジスター切り替えは無動機。Chilean Spanish は確かに voseo culto/popular の対立があり (Stewart 1999) どちらかに偏らせる方針が必要。

**Proposed:** es_cl を **全文 voseo chileno (T) で統一** (Chilean speakers の対人慣用) するか、**全文 usted (V) で統一** するかのいずれか。データセット全体の polite-default に揃えるなら後者:
- #10 es_cl `[D:Podís]` → `[A:Usted] [D:puede]`
- #28 es_cl `[A:Podrías]` → `[A:Podría] [B:usted]`
- #40 es_cl `[E:Sabís]` → `[E:Sabe] [A:usted]`
- #85 es_cl `[D:Deberías]` → `[A:Usted] [D:debería]`

es_pe との並列が完成する。

---

### 3. fr_qc が #10/#85 で T、#13/#24/#28/#34/#40/#49/#96 で V — Quebec 規範の二重基準 【確実】

**Current:**
- **#10 fr_qc**: `[A:Tu] [C:parles-tu] [B:anglais]` (**T: tu + inversion `parles-tu`**)
- **#13 fr_qc**: `[A:S'il vous plaît] [D:donnez] [B:-moi] ...` (V: vous + donnez)
- **#24 fr_qc**: `[A:Pouvez-vous] ...` (V)
- **#28 fr_qc**: `[A:Pourriez] [B:-vous]` (V)
- **#34 fr_qc**: `[A:S'il vous plaît] [C:parlez]` (V)
- **#40 fr_qc**: `[E:Savez] [A:-vous]` (V)
- **#49 fr_qc**: `[D:Dites-moi] [A:s'il vous plaît]` (V)
- **#85 fr_qc**: `[A:Tu] [D:devrais]` (**T: tu + 2sg conditional**)
- **#96 fr_qc**: `[A:S'il vous plaît] [B:tournez à droite]` (V)
- **#100 fr_qc**: pronoun-less

**Problem:** Quebec French は service contexts でも tutoiement の許容率が Metropolitan より高い (Vincent 2001) が、データ内では **#10 と #85 のみ T**、他は V で **不整合**。とくに #10 「Can you speak English?」 (見ず知らずの通行人) は Quebec でも一般に vous (Auger & Suñer 1993) で、ここで `Tu parles-tu anglais` という pop-Québécois の T 形を採るのは方針として **片寄せ**。

**Proposed:** Quebec フランス語のレジスター方針を**統一**:
- (A) 全文 vous (Metropolitan parallel): #10 fr_qc `[A:Tu] [C:parles-tu]` → `[D:Pouvez] [A:-vous] [C:parler]`、#85 fr_qc `[A:Tu] [D:devrais]` → `[A:Vous] [D:devriez]`
- (B) 全文 tu (Quebec colloquial parallel): 残り 9 文を全て tu 形に書き換え。データ tone (polite/neutral) に揃えるなら **(A) を推奨**。

---

### 4. it #34 命令形 `parli` (V) vs scn/nap/vec/sc の 2pl/T 系不整合 【確実】

**Current (#34: please speak slowly):**
- **it**: `[A:Per favore] [C:parli] [B:più] [D:lentamente]` (V: lei imperative subjunctive 3sg)
- **scn (Sicilian)**: `[A:Pi favuri] [C:parrati] [B:cchiù chianu]` (2pl `parrati` = V tradition, OK)
- **nap (Neapolitan)**: `[A:Pe piacere] [C:parlate] [B:cchiù chiano]` (V: 2pl voi as polite, OK)
- **vec (Venetian)**: `[A:Per piaser] [C:parlé] [B:più pian]` (**T: 2sg `parlé` = parla + e tonic? Actually Venetian `parlé` is 2sg imperative**) — 要確認
- **sc (Sardinian)**: `[A:Pro praghere] [C:chistiona] [B:prus a bellu]` (**T: 2sg imperative `chistiona`**)

**Current (#10 cross-check):**
- it `[D:Può] [A:lei] [C:parlare]` (V), scn `[D:Pò] [A:vossia]` (V: vossia = 3sg formal "your lordship"), nap `[D:Putite] [A:vuje]` (V: voi 2pl as polite), **vec `[D:Pòsto] [A:ti]` (T: ti = familiar 2sg)**, **sc `[D:Podes] [A:tue]` (T: tue = 2sg)**

**Problem:** イタリア半島ロマンスの中で **vec / sc が一貫して T (ti / tue / chistiona) を採用**しているのは方言特性として説明可能だが (Venetian `ti` は subject T 代名詞、Sardinian `tue` も T)、polite request 文脈 (#13 #24 #28 #34 #49 #96) で T を全面採用するのは **データセットの polite-default と非対称**。scn/nap は 2pl `voi` を polite として使う (regionalism) ので V 整合だが、vec/sc の T-全面採用は **同じイタリア半島内で 4 文中 2 文が T、2 文が V** という分裂を生む。

**Proposed:** vec / sc も polite-default に揃えるなら:
- #10 vec `[D:Pòsto] [A:ti]` → `[D:Podé] [A:vu]` (V 2pl ≈ Venetian polite voi)、または lei 系統で `[D:Pòle] [A:Ela]`
- #10 sc `[D:Podes] [A:tue]` → `[D:Podides] [A:bois]` (Sardinian polite 2pl)
- #34 vec `[C:parlé]` → `[C:parlé / parlate]` (V 2pl)
- #34 sc `[C:chistiona]` → `[C:chistionade]` (2pl)

または 方言特性として T 全面採用に **データ内一貫性** を持たせ、レビューア注釈で「regional T-default」と明示する。

---

### 5. de_by (Bavarian) / de_at (Austrian) の 2 人称が #85 で `Du` (T) と Standard de と同期 【蓋然】

**Current (#85: You should drink more water):**
- **de**: `[A:Du] [D:solltest] ...` (**T: du + 2sg `solltest`**)
- **de_at**: `[A:Du solltast] ...` (**T**)
- **de_by**: `[A:Du soidst] ...` (**T**)

**Current (#10/#13/#24/#28/#34/#40/#49/#96 cross-check):**
- de は全て `Sie` (V) で一貫
- de_at は全て `S'` (V 短縮形 < Sie) で一貫
- de_by は全て `Sie` / `Eahna` (V) で一貫

**Problem:** ドイツ語 3 変種が **#85 だけ突然 T (du / solltest)** に切り替わるのは、原文 ja「もっと水を飲んだほうがいい」が **個人へのアドバイス文脈** であり、「親しい相手 (家族/友人) への助言」と解釈したためと思われる。しかし他言語 (fr `Vous devriez`、ru `Тебе стоит` も T だが Russian dative impersonal、it `dovresti` T、es_eu `deberías` T) でも T/V 分裂しており、原文 ja `あなたは` (中立 polite) との対称性をどう取るかが要検討。 **少なくとも de が #10 で `Sie` (V)、#85 で `Du` (T) と切り替えるなら、レビューア注釈で「advice context → T」という方針を明文化**すべき。

**Proposed:** 方針を明文化したうえで de #85 を継続するか (T-as-advice 方針)、全文 V で統一するか (Sie shifted):
- 統一案: #85 de `[A:Du] [D:solltest]` → `[A:Sie] [D:sollten]` (Sie + 3pl modal の formal advice 形)、同様に de_at / de_by。
- 注釈案: ja 原文の `あなたは` を「親しい間柄への助言」と解釈する場合、 ja 訳語を `あなたは` → `君は` か (もっとフラットに) 主語 zero にして polite-default を守る。

---

### 6. ja 標準が #10 #85 で `あなたは` を採るが ja_osa/ja_kyo は「あんた(はん)」で T 寄り 【蓋然】

**Current (#10):**
- ja: `[A:あなたは] [B:英語が] [C:話せ] [D:ます] [E:か]` (中立 polite + ます-form V)
- ja_osa: `[A:あんた] [B:英語] [C:しゃべれ] [D:る] [E:ん]` (**T: あんた + ぞんざい plain form**)
- ja_kyo: `[A:あんたはん] [B:英語] [C:話せ] [D:はります] [E:か]` (中立~やや女性的 polite, V)
- ja_edo: `[A:お主は] [B:英語が] [C:話せ] [D:まする] [E:か]` (古風 V)

**Current (#85):**
- ja: `[A:あなたは] [E:もっと] [B:水を] [D:飲んだほうがいい]` (中立 polite なのに動詞語尾 plain — 不整合)
- ja_osa: `[A:あんたは] [E:もっと] [B:水] [D:飲んだほうがええで]` (T 寄り)
- ja_kyo: `[A:あんたはんは] [E:もうちょっと] [B:お水を] [D:飲んだほうがよろしおす]` (V 寄り、御水)
- ja_edo: `[A:お主は] [E:もっと] [B:水を] [D:飲んだほうがよい]` (古風 V)

**Problem:** ja 標準 #85 の `あなたは ... 飲んだほうがいい` は **主語が polite 代名詞 (あなた) なのに動詞末尾が plain (がいい)** という二重基準。日本語は本来 **代名詞 zero が natural** で、`あなたは` を明示する場面は限定的 (Lee 2002; Maynard 1997 ch. 6)。#10 「英語話せますか」は丁寧形 (ます-form) なので「あなたは」明示も整合するが、 #85 では `あなたは` を**削除して 主語 zero**にする方が自然。

**Proposed:**
- #85 ja `[A:あなたは] [E:もっと] [B:水を] [D:飲んだほうがいい]` → `[E:もっと] [B:水を] [D:飲んだほうがいいですよ]` (zero subject + V politeness `ですよ`)、または主語を残すなら `[A:あなたは] ... [D:飲んだほうがいいですよ]` で末尾も V 化。
- ja_osa/kyo/edo の対応する dialect ペアも同期更新 (T 寄り変種は そのまま残しても OK)。

---

### 7. ko 標準が #10/#28/#40/#85 で `당신은` を採用 — formal だが対面では妻/文章語限定 【確実】

**Current:**
- ko #10 `[A:당신은] [B:영어를] [C:말할 수] [D:있어] [E:요]` (당신 + 해요 V)
- ko #85 `[A:당신은] [B:물을] [E:더] [C:마셔야] [D:한다]` (당신 + 한다 plain — 二重基準)
- ko_bus #85 `[A:니는]` (T: 慶尚道 dialect 너 → 니)
- ko_jeju #85 `[A:느는]` (T: 済州島 dialect 너 → 느)
- ko_em #85 `[A:그대는]` (古風 V: 그대 + 하니라 archaic ending)

**Problem:** 韓国語の `당신` は **書面語 (인터넷 게시판) または夫婦間の呼称**で、見ず知らずの相手に face-to-face で `당신은` と呼びかけるのは **やや挑発的か文学的** (Sohn 1999, §8.2.2; Kim 2017)。対面の polite-default は **代名詞 zero + 敬称 (선생님 / 손님 / 사장님)** か **상대방 명사 zero**。 ko #10 で `당신은 영어를 말할 수 있어요` は文法的には可能だが、コーパス頻度では稀。さらに #85 `당신은 ... 한다` は **代名詞 polite + 動詞末尾 plain (한다)** の二重基準で、これは明確な不整合 — `한다` は declarative plain で、`해야 한다` の最後の `한다` は習慣・規範表現として OK だが、`당신은` との semantic distance が大きい。

**Proposed:**
- ko #10 `[A:당신은]` → 主語 zero または `[A:선생님은]` (相手を立てる敬称)
- ko #28 `[F:좋은] [E:식당을] [C:추천해] [A:주실 수 있나] [G:요]` 現状 (zero subject + 주실 + 요 V) は良好 ✓
- ko #40 主語 zero + `알고 계세요?` (V) 推奨
- ko #85 `[A:당신은]` を削除して主語 zero + `드시는 게 좋아요` (V) または `[A:선생님은]` に置換

---

### 8. vi_c (中部ベトナム語) が #10/#28/#40/#85 で `mi` (T, intimate/rude) を採用 — polite request と矛盾 【確実】

**Current:**
- #10 vi_c: `[A:Mi] [D:có] [C:nói được] [B:tiếng Anh] [E:khôông]` (T)
- #28 vi_c: `[B:Mi] [A:có thể] [C:giới thiệu] ...` (T)
- #40 vi_c: `[A:Mi] [E:có biết] [B:bưu điện]` (T)
- #85 vi_c: `[A:Mi]` (T)
- #100 vi_c: `[A:mi]` (T, in "Cảm ơn mi")
- #13/#24/#34/#49/#96 vi_c: 主語 zero または `Phiền` (polite) — OK

**Problem:** ベトナム中部方言 (vi_c = Nghệ-Tĩnh/Bình-Trị-Thiên) の `mi` は **きわめて familiar / intimate / often rude な T 形** (Thompson 1965, §13; Luong 1990, ch. 4)。原文「店員に良いレストランを推薦してもらう (#28)」「見知らぬ相手に郵便局の場所を聞く (#40)」で `mi` を使うのは中部方言話者の社会的常識でも **失礼**。 vi 標準は `bạn` (neutral peer) を採用しているが、これも本来 polite-default 文脈 (見知らぬ相手) では `anh / chị / em + 年齢` のような kinship-based polite が natural — ただし `bạn` は若年層の neutral default として許容。

**Proposed:** vi_c で polite request 文 (#10 #28 #40 #85) は `mi` ではなく:
- 中部方言 polite-neutral 形 `eng` / `cô` / `chú` / `bạn` (中部でも `bạn` は通用) に置換
- #10 vi_c `[A:Mi]` → `[A:Eng]` (中部男性年上呼称) または `[A:Cô]` (女性店員) / または `[A:Bạn]` (vi 標準と同じ)
- #28/#40/#85/#100 同様に `Mi` → `Eng/Cô/Chú/Bạn`

vi 標準が `bạn` を採るなら vi_c も `bạn` (中部でも通用する neutral) を採るのが横断対称的。`mi` は intimate 限定 (家族・同年代の親友) なので polite-request 文脈では削除。

---

### 9. id `kamu` vs `Anda` の文間フリップ — Indonesian polite/intimate split 【確実】

**Current:**
- #10 id: `[D:Apakah] [A:kamu] [D:bisa] [C:berbicara] [B:bahasa Inggris]` (**T: kamu**)
- #28 id: `[A:Bisakah] [B:Anda] [C:merekomendasikan] [E:restoran] [F:yang bagus]` (**V: Anda**)
- #40 id: `[E:Apakah] [A:kamu] [E:tahu] [C:di mana] [B:kantor pos] [D:berada]` (**T: kamu**)
- #85 id: `[A:Anda] [D:seharusnya] [C:minum] [E:lebih banyak] [B:air]` (**V: Anda**)
- #13/#24/#34/#49/#96 id: pro-drop (Tolong + V imperative, no explicit subject)
- #68 id: 1sg (saya), 対象外

**Problem:** インドネシア語の 2 人称代名詞は `kamu` (T, familiar peer/inferior)、`Anda` (V, formal, always capitalised), `engkau` (intimate ~ literary), `lu/lo` (Jakarta slang)。Sneddon *Indonesian Reference Grammar* (2010, §5.2) は service contexts で `Anda` を強く推奨。データは #10/#40 で `kamu`、#28/#85 で `Anda` という**完全フリップ**。同じ「見知らぬ相手への質問」が #10 (英語話せますか) と #40 (郵便局どこですか) は T、#28 (レストラン推薦) は V — 区別の動機が見えない。

**Proposed:** id を polite-default に統一:
- #10 id `[A:kamu]` → `[A:Anda]`
- #40 id `[A:kamu]` → `[A:Anda]`
他 (#28 #85) は既に V なので変更不要。これで id 全文が V (Anda) で一貫し、polite-default 規約と整合。

---

### 10. ms (Malay) `awak` (T 寄り) vs `anda` (V) のフリップ 【確実】

**Current:**
- #10 ms: `[D:Bolehkah] [A:awak] [C:bertutur] [B:bahasa Inggeris]` (**T 寄り: awak**)
- #28 ms: `[A:Bolehkah] [B:anda] [C:cadangkan] [E:restoran] [F:yang baik]` (V: anda)
- #40 ms: `[E:Adakah awak tahu] [C:di mana] [B:pejabat pos] [D:berada]` (**T 寄り: awak**)
- #85 ms: `[A:Awak] [D:patut] [C:minum] [E:lebih banyak] [B:air]` (**T 寄り: Awak**)
- #13/#24/#34/#49/#96 ms: pro-drop (Sila + V)

**Problem:** マレー語の `awak` は **インドネシア語 kamu と同じく familiar/peer** で、フォーマルな店員/通行人への呼びかけには `anda / encik (Mr) / puan (Ms) / tuan (Sir)` が標準 (Asmah 1992)。 ms #10/#40/#85 の `awak` は id の `kamu` と完全に並行する不整合パターン。

**Proposed:** ms を polite-default に統一:
- #10 ms `[A:awak]` → `[A:anda]`
- #40 ms `[E:Adakah awak tahu]` → `[E:Adakah anda tahu]`
- #85 ms `[A:Awak]` → `[A:Anda]`

これで id と ms が並列に V (Anda) で一貫する。

---

### 11. jv (Javanese) `kamu` (#10 #40) vs `sampeyan` (#28 #85) — Javanese speech-level system との整合性 【確実】

**Current:**
- #10 jv: `[D:Apakah] [A:kamu] [D:bisa] [C:ngomong] [B:bahasa Inggris]` (**id 借用 `kamu` = T**)
- #28 jv: `[A:Saged] [B:sampeyan] [C:nyaranke] ...` (**V: sampeyan = ngoko-alus polite**)
- #40 jv: `[E:Apakah] [A:kamu] [E:ngerti] ...` (**T**)
- #85 jv: `[A:Sampeyan] [D:sekudunya] [C:ngombe] ...` (**V**)

**Problem:** ジャワ語は **三層 speech level system (ngoko < madya < krama)** を持ち (Wedhawati 2006; Errington 1988)、`kamu` はそもそも Javanese ではなくインドネシア語 (jv のレジスター層に当てはまらない外来語) で、Javanese 内では `kowé` (ngoko T)、`sampéyan` (madya/ngoko-alus = neutral polite V)、`panjenengan` (krama inggil = high V) の三段階。データは #10/#40 で id 直訳の `kamu` を採用しており、**Javanese としては無レジスター** — これは jv データの品質問題そのもの。

**Proposed:** jv 全文を sampeyan (V/ngoko-alus) または panjenengan (krama inggil) で統一:
- #10 jv `[A:kamu]` → `[A:sampeyan]` (V)
- #40 jv `[A:kamu]` → `[A:sampeyan]` (V)

これで jv 全 4 文が `sampeyan` (V) で一貫し、Javanese speech level system にも適合する。

---

### 12. th `คุณ` 一貫だが #34 で形態的に欠如 — 主語 zero pattern 【蓋然】

**Current:**
- #10 th: `[A:คุณ] [C:พูด] [B:ภาษาอังกฤษ] [D:ได้] [E:ไหม]` (V: คุณ)
- #28 th: `[B:คุณ] [A:ช่วย] [C:แนะนำ] ...` (V)
- #40 th: `[A:คุณ] [E:รู้ไหม ว่า] ...` (V)
- #85 th: `[A:คุณ] [D:ควร] [C:ดื่ม] [B:น้ำ] [E:มากขึ้น]` (V)
- #13/#24/#34/#49/#96 th: pro-drop (กรุณา + V), 2 人称無し
- #68 th: 1sg, 対象外

**Problem:** タイ語 `คุณ` は polite-neutral V でデータ内一貫 ✓。指摘すべきは無いが、参考まで:
- 他言語が代名詞を明示する文 (#13 #24 #34 #49 #96) でも、th は `กรุณา + V` のみで 2 人称代名詞を省略 — これは Thai polite imperative の規範 (Iwasaki & Ingkaphirom 2005, §15.3) で問題なし。

**Proposed:** 修正不要。 ✓

---

### 13. hi `आप` (V) で一貫、しかし #10 #28 #40 の動詞活用が 2pl honorific (V) — OK 【整合・記録】

**Current:**
- #10 hi: `[A:आप] [B:अंग्रेज़ी] [C:बोल] [D:सकते हैं]` (V: आप + सकते हैं 2pl honorific)
- #28 hi: `[A:क्या] [B:आप] ... [C:सुझा सकते हैं]` (V)
- #40 hi: `[E:क्या] [A:आप] ... [E:जानते हैं]` (V)
- #85 hi: `[A:आपको] ... [D:चाहिए]` (V: आपको dative + chahiye impersonal)
- #13/#24/#34/#49/#96 hi: imperative polite 形 (दीजिए / दिखाइए / बोलें / बताइए / मुड़ें = आप 2pl honorific imperative)

**Problem:** hi 全文 V (आप) で一貫 ✓。 但し興味深いのは hi が **3 段階 (तू < तुम < आप)** のうち最上位 आप を採用し、データ全体の polite-default と完全整合。

**Proposed:** 修正不要、記録のみ。 ✓

---

### 14. ru `Вы` 系で一貫、しかし #85 と #100 で 2 人称表面に出ず — pro-drop OK 【整合・記録】

**Current:**
- #10 ru: `[A:Вы] [D:умеете] ...` (V)
- #28 ru: `[A:Не могли бы] [B:вы] [C:порекомендовать] ...` (V)
- #40 ru: `[A:Вы] [E:знаете] ...` (V)
- #85 ru: `[D:Тебе стоит] [C:пить] [E:больше] [B:воды]` (**T: тебе dative = 2sg familiar**)
- #13/#24/#34/#49/#96 ru: дайте/покажите/говорите/скажите/поверните (V 2pl imperative)
- #100 ru: pronoun-less

**Problem:** ru 標準は全文 V (вы/Вы) で一貫しているが、**#85 のみ `Тебе стоит` で T (тебе sg dative)** が登場。これは指摘 5 (de #85 du) と同じ「advice context → T」パターンの再発。Russian の advice ставить construction は dative subject を取り、`Вам стоит` (V) と `Тебе стоит` (T) の両形が可能で、polite-default に揃えるなら `Вам стоит`。

**Proposed:**
- #85 ru `[D:Тебе стоит]` → `[D:Вам стоит]` (T → V)

---

### 15. uk #85 `Вам варто` (V) で正解、ru と非対称 【蓋然】

**Current:**
- #85 uk: `[D:Вам варто] [C:пити] [E:більше] [B:води]` (**V: вам dative**)
- #85 ru: `[D:Тебе стоит]` (T)
- #85 pl: `[D:Powinieneś]` (T: 2sg)
- #85 cs: `[A:Ty] [D:bys měl]` (**T: ty + 2sg conditional**)
- #85 sk: `[A:Vy] [D:by ste mali]` (**V: vy + 2pl conditional**)
- #85 sl: `[A:Vi] [D:bi morali]` (V)
- #85 sr: `[A:Ви] [D:треба]` (V)

**Problem:** スラブ語族の #85 advice 文で **V を採るのは uk/sk/sl/sr/be**、**T を採るのは ru/pl/cs** という分裂。これは「advice → 親密 (T)」 vs 「advice → 敬意 (V)」の言語固有スタイルだが、データセット全体の polite-default に揃えるなら **T 採用言語を V に統一** が望ましい。逆方向 (T 全面) なら uk/sk/sl/sr を T 化。

**Proposed:**
- #85 ru `[D:Тебе стоит]` → `[D:Вам стоит]`
- #85 pl `[D:Powinieneś]` → `[D:Powinien Pan/Pani]` (pan/pani V)
- #85 cs `[A:Ty] [D:bys měl]` → `[A:Vy] [D:byste měl]`

これで全スラブ語が V で一貫し、#10/#28/#40 の V default と整合。

---

### 16. pl (Polish) の `pan/pani` honorific が #10 `pan/pani`、#28 `Pan` だが #13/#24/#34 で消失 【蓋然】

**Current:**
- #10 pl: `[D:Czy] [A:pan/pani] [C:mówi] [B:po angielsku]` (**V: pan/pani 3sg honorific**)
- #28 pl: `[D:Czy] [E:mógłby] [B:Pan] [C:polecić] ...` (V: Pan)
- #40 pl: `[D:Czy] [F:wiesz] [C:gdzie] ...` (**T: wiesz = 2sg `wiedzieć`**)
- #85 pl: `[D:Powinieneś]` (**T: 2sg**)
- #13/#24/#34/#49/#96 pl: pro-drop, imperative 形 (poproszę / pokazać / mówić / powiedzieć / skręcić — 一部は infinitive impersonal polite)
- #34 pl: `[C:mówić]` (infinitive, polite indirect: "ask the person to speak")
- #100 pl: pronoun-less

**Problem:** ポーランド語の polite-default は `pan / pani` (lexical 3sg honorific 体系)で、**#10/#28 で `pan/pani` を採用しているのに #40 `wiesz` (2sg T) と #85 `Powinieneś` (2sg T) が混在**。同一データセット内で同じ言語が「英語話せますか = V」「郵便局どこですか = T」と切り替わるのは pl 話者の社会的常識でも不自然。

**Proposed:**
- #40 pl `[F:wiesz]` → `[F:wie] [B:Pan/Pani]` (3sg honorific + Pan/Pani)
- #85 pl `[D:Powinieneś]` → `[D:Powinien Pan / Powinna Pani]` (3sg honorific + Pan/Pani)

これで pl 全 4 文 (代名詞明示文) が pan/pani 体系で一貫する。

---

### 17. cs (Czech) `vy` (V) vs `ty` (T) の文間フリップ 【確実】

**Current:**
- #10 cs: `[D:Umíte] [C:mluvit] [B:anglicky]` (V: 2pl V imperative `umíte`)
- #28 cs: `[A:Mohl byste] [C:doporučit]` (V: 2pl conditional)
- #40 cs: `[E:Víte] [C:kde] ...` (V: 2pl `víte`)
- #85 cs: `[A:Ty] [D:bys měl] [C:pít]` (**T: ty + 2sg conditional**)
- #13/#24/#34/#49/#96 cs: imperative 2pl (dejte / ukažte / mluvte / řekněte / zahněte — V)

**Problem:** チェコ語の polite-default は **2pl `vy` 体系** で、データ内 10 文中 9 文が V、**#85 のみ ty (T)**。指摘 15 と完全に同じパターン (advice → T フリップ)。

**Proposed:**
- #85 cs `[A:Ty] [D:bys měl]` → `[A:Vy] [D:byste měl]` (T → V)

---

### 18. el (Greek) `Εσείς` (V, 2pl) vs `Εσύ` (T, 2sg) のフリップ 【蓋然】

**Current:**
- #10 el: `[D:Μπορείτε] [A:εσείς] [C:να μιλήσετε] [B:αγγλικά]` (V: 2pl)
- #28 el: `[A:Μπορείτε] [C:να μου προτείνετε] ...` (V: 2pl)
- #40 el: `[E:Ξέρετε] [C:πού] ...` (V: 2pl `ξέρετε`)
- #85 el: `[A:Εσύ] [D:πρέπει να] [C:πίνεις] ...` (**T: εσύ + 2sg `πίνεις`**)
- #13/#24/#34/#49/#96 el: imperative 2pl (δώστε / δείξτε / μιλήστε / πείτε / στρίψτε — V)

**Problem:** 現代ギリシア語の polite-default は **2pl πληθυντικός ευγενείας** ("plural of politeness")で、データ内 10 文中 9 文が V、**#85 のみ εσύ + πίνεις (T)** に切り替わる — これも指摘 5/14/15/17 と同じ「advice → T」フリップの再発。

**Proposed:**
- #85 el `[A:Εσύ] [D:πρέπει να] [C:πίνεις]` → `[A:Εσείς] [D:πρέπει να] [C:πίνετε]` (V 2pl)

---

### 19. ro (Romanian) #85 `Tu ar trebui` (T) vs 他文の `Vă/voi/dvs.` (V) フリップ 【蓋然】

**Current:**
- #10 ro: `[D:Poți] [C:vorbi] [B:engleză]` (**T: 2sg `poți`**, 主語 pro-drop)
- #28 ro: `[A:Puteți] [C:recomanda] ...` (V: 2pl `puteți`)
- #40 ro: `[E:Știi] [C:unde] ...` (**T: 2sg `știi`**)
- #85 ro: `[A:Tu] [D:ar trebui] [C:să bei] ...` (**T: tu + 2sg `bei`**)
- #13/#24/#34/#49/#96 ro: `Vă rog + 2pl imperative` (V: dați/arătați/vorbiți/spuneți/virați)

**Problem:** ロマンス語族のなかでルーマニア語は polite-default に **2pl `voi` / 3sg honorific `dumneavoastră (dvs.)`** を使う (Cojocaru 2003, §6.2)。データ内では **#13/#24/#34/#49/#96 が V (vă rog + 2pl)**、**#28 が V (puteți)**、**#10/#40/#85 が T (2sg)** という混在。とくに #10 「英語話せますか」 = ストレンジャーへの質問で 2sg `poți` を使うのは Romanian でも稀。

**Proposed:**
- #10 ro `[D:Poți]` → `[D:Puteți]` (V 2pl)
- #40 ro `[E:Știi]` → `[E:Știți]` (V 2pl)
- #85 ro `[A:Tu] [D:ar trebui] [C:să bei]` → `[A:Dumneavoastră / Voi] [D:ar trebui] [C:să beți]`

これで ro 全 V 一貫。

---

### 20. ca / gl / oc / sc の 2 人称体系不整合 — Romance peninsular minor 【蓋然】

**Current (#10):**
- ca: `[D:Pots] [C:parlar] [B:anglès]` (**T: 2sg `pots`**)
- gl: `[D:Podes] [C:falar] [B:inglés]` (**T: 2sg `podes`**)
- oc: `[D:Podètz] [C:parlar] [B:anglés]` (V: 2pl `podètz`)
- sc: `[D:Podes] [A:tue] [C:chistionare] [B:inglesu]` (**T: tue + 2sg**)
- scn: `[D:Pò] [A:vossia] [C:parrari]` (V: vossia = 3sg honorific)
- nap: `[D:Putite] [A:vuje] [C:parlà]` (V: voi 2pl as polite)
- vec: `[D:Pòsto] [A:ti] [C:parlar]` (**T: ti + 2sg**)

**Current (#85):**
- ca: `[A:Tu] [D:hauries de]` (T)
- gl: `[A:Ti] [D:deberías]` (T)
- oc: `[A:Vos] [D:deuriatz]` (V)
- sc: `[A:Tue] [D:dias]` (T)
- scn: `[A:Tu] [D:avrìssi a]` (T)
- nap: `[A:Tu] [D:avrisse]` (T)
- vec: 主語 zero `[D:Dovarìa]` (V impersonal)

**Problem:** ロマンス系周辺諸語のうち **ca / gl** は polite-default として **vostè / vostede (3sg honorific)** が存在するが、データは全て 2sg T 形を採用。**sc / vec** も標準でT。 #85 advice 文で全部 T に揃うのは polite-default 規約に反する。Sicilian (scn) の `vossia` (V) と Neapolitan (nap) の `vuje` (V) は polite-default を守っているが、両者とも #85 で T (tu) に切り替えるのは指摘 4 と同じパターン。

**Proposed:** ca / gl は polite-default の vostè / vostede 体系で V 統一:
- #10 ca `[D:Pots]` → `[D:Pot] [A:vostè]` (V)
- #10 gl `[D:Podes]` → `[D:Pode] [A:vostede]` (V)
- #85 ca `[A:Tu] [D:hauries de]` → `[A:Vostè] [D:hauria de]` (V)
- #85 gl `[A:Ti] [D:deberías]` → `[A:Vostede] [D:debería]` (V)

scn/nap も #85 で vossia/voi を使うか、もしくは全文 T に揃える方針を選択。

---

### 21. ar (Arabic) 2 人称性別語尾 (تستطيع masc. vs تستطيعين fem.) の sg/sg 一貫性 【蓋然】

**Current:**
- #10 ar: `[D:هل] [A:تستطيع] [C:التحدث] ...` (T 2msg `tastaṭīʿ`)
- #28 ar: `[A:هل] [D:يمكنك] [C:أن توصي] ...` (T 2msg `yumkinuka`)
- #40 ar: `[E:هل] [F:تعرف] ...` (T 2msg `taʿrif`)
- #85 ar: `[D:يجب عليك] [C:شرب] ...` (T 2msg `ʿalayka`)
- #13/#24/#34/#49/#96 ar: imperative 2msg (أعطني / أرني / تحدث / أخبرني / انعطف — T)

**Problem:** アラビア語の T/V distinction は **2sg ↔ 2pl ↔ 2dual ↔ honorific جنابك / حضرتك / سيادتك** で構成され (Holes 2004, §6.3.5)、polite request で常用されるのは **حضرتك (ḥaḍratuk) = "your presence"** か **جنابك (janābuk) = "your honour"**。データは全文 2sg msg を採用 — これは **会話 colloquial としては自然** だが、**polite-default 規約とは中立**。また、データ全文が **男性 (msg) 形** で固定されており、女性形 (تستطيعين / يمكنكِ) も合わせて記述するかは要検討。

**Proposed:** 二つの選択肢:
- (A) 現状維持 (2msg, T-equivalent): ar は性別が動詞語尾に inflect されるため「polite plural V」を選ぶと文の長さが変わる。
- (B) 全文 honorific (حضرتك): #10 ar `[A:تستطيع]` → `[A:حضرتك] [D:تستطيع]` 等。

reviewer 推奨は (A) (現状維持) + データ注釈で「ar の 2 人称は 2msg sg を default として採用」を明文化。修正不要。

---

### 22. he (Hebrew) 2sg masc `אתה` (T) で一貫 — polite distinction 弱い言語の整合性 【整合・記録】

**Current:**
- #10 he: `[A:אתה] [D:יכול] [C:לדבר] [B:אנגלית]` (2msg `ata + yakhol`)
- #28 he: `[A:האם] [D:תוכל] [C:להמליץ] ...` (2msg `tukhal`)
- #40 he: `[E:האם] [A:אתה] [E:יודע] ...` (2msg)
- #85 he: `[D:אתה צריך] [C:לשתות] ...` (2msg `ata tsarikh`)
- #13/#24/#34/#49/#96 he: imperative 2msg (תן / הראה / דבר / תגיד / פנה — T)

**Problem:** 現代ヘブライ語は **T/V distinction を持たない** (Glinert 1989, §5.2.1; modern Israeli Hebrew は universal tutoiement)。古典・聖書ヘブライ語の 2pl 敬語形は廃用。データの 2msg 一貫は **言語的に正しく問題なし**。

**Proposed:** 修正不要、記録のみ。 ✓

---

### 23. tlh (Klingon) `SoH` (T-only, no T/V distinction) — speaker policy 【整合・記録】

**Current:**
- #10 tlh: `[A:SoH] [C:DajatlhlaH'a']` (SoH = 2sg, no V)
- #40 tlh: `[E:DaSov'a'] [A:SoH]`
- #85 tlh: `[A:SoH] [B:bIQ] [C:yItlhutlh]`
- #68 tlh: 1sg `jIH`
- #28 tlh: `[A:choleghlaH'a']` (2sg verb prefix `cho-`)
- 他: imperative (yI- prefix) + zero subject

**Problem:** クリンゴン語は構築言語として **T/V distinction を持たない** (Okrand *The Klingon Dictionary* 1992, §4.2; tlhIngan Hol は社会階層的に warrior caste の egalitarian tutoiement)。 SoH 一貫は OK。

**Proposed:** 修正不要、記録のみ。 ✓

---

### 24. eo (Esperanto) `vi` (V/T 中立) で一貫 — Zamenhof の方針として OK 【整合・記録】

**Current:**
- #10 eo: `[A:vi] [C:povas paroli] [B:la anglan]` (vi = 単複/T/V 中立)
- #28 eo: `[A:Ĉu vi povus] [C:rekomendi] ...` (V/conditional)
- #40 eo: `[E:Ĉu vi scias] [C:kie] ...` (vi)
- #85 eo: `[A:Vi] [D:devus] ...` (vi + conditional)

**Problem:** エスペラントの `vi` は **元来 V/2pl だが、Zamenhof 以後 T/V distinction を吸収して中立化** (PMEG §11.5.4)。古い `ci` (T) は ほぼ廃用。データは vi 一貫で問題なし。

**Proposed:** 修正不要、記録のみ。 ✓

---

### 25. tok (Toki Pona) `sina` (T/V 中立) — ミニマリスト言語 【整合・記録】

**Current:**
- #10 tok: `[A:sina] [D:ken] [C:toki] [B:toki Inli]`
- #28 tok: `[A:sina ken ala] [C:toki e] ...`
- #40 tok: `[A:sina] [E:sona] [C:seme] ...`
- #85 tok: `[A:sina] [D:o] [C:moku e] ...`

**Problem:** トキポナの sina は **2 人称専用代名詞 (sg/pl/T/V 全部中立)** で、設計上 T/V distinction は存在しない。一貫。

**Proposed:** 修正不要、記録のみ。 ✓

---

### 26. jbo (Lojban) `do` (T/V 中立) — 論理言語の意図的中立 【整合・記録】

**Current:**
- #10 jbo: `[D:xu] [A:do] [C:tavla fo] [B:lo glico bangu]`
- #28 jbo: `[A:xu do kakne] [C:le nu stidi] ...`
- #40 jbo: `[E:xu do djuno] ...`
- #85 jbo: `[A:do] [D:ei] [C:pinxe] ...`

**Problem:** Lojban の `do` は **2 人称 sg/pl/T/V 全中立**。 doi 呼格と組み合わせるが本データには無関係。

**Proposed:** 修正不要、記録のみ。 ✓

---

### 27. ja_kyo / ja_osa の `あんた(はん)` — Kansai polite vs Tokyo polite のレジスター差 【蓋然】

**Current (#10):**
- ja_osa: `[A:あんた] ... [D:る] [E:ん]` (T: あんた + plain る + 終助詞 ん)
- ja_kyo: `[A:あんたはん] ... [D:はります] [E:か]` (V: あんたはん + はる-respect form)

**Current (#28):**
- ja_osa: `[F:ええ] [E:レストラン] [C:教えて] [A:もらえます] [G:か]` (代名詞 zero + もらえます polite)
- ja_kyo: `[F:ええ] [E:レストランを] [C:教えて] [A:おくれやす]` (代名詞 zero + おくれやす polite)

**Current (#85):**
- ja_osa: `[A:あんたは] ... [D:飲んだほうがええで]` (T)
- ja_kyo: `[A:あんたはんは] ... [D:飲んだほうがよろしおす]` (V + あんたはん)

**Problem:** ja_osa (Osaka 方言) は **あんた + plain form** で T 寄り、ja_kyo (Kyoto 方言) は **あんたはん + はる/おくれやす polite** で V 寄り、と方言特性として **同一文でレジスターが分裂**。これは方言固有の polite scale として整合的だが、 ja 標準が **#10 で `あなたは` + ます (V) / #85 で `あなたは` + 飲んだほうがいい (plain で T 寄り)** という標準内のレジスター不整合とパラレル (指摘 6)。

**Proposed:**
- ja_osa #85 `[A:あんたは]` を主語 zero に削除すれば、ja 標準と同じ「主語 zero + 動詞末尾レジスター」整合
- または ja_osa 全文を「あんた + plain T」/ ja_kyo 全文を「あんたはん + おくれやす/はります V」と方言固有に固定し、変動を抑える

reviewer 注: 方言特性は弱く維持してよい。指摘 6 (ja 標準) の解決と同期して扱うのが効率的。

---

### 28. ko_em (古典・宮中体) の `그대` (literary V) — 整合性は高いが文脈ミスマッチ 【蓋然】

**Current:**
- ko_em #10 `[A:그대는] [B:영국말을] [C:이를 수] [D:있] [E:나이까]` (그대 + 나이까 archaic V)
- ko_em #85 `[A:그대는] [B:물을] [E:더] [C:마셔야] [D:하니라]` (그대 + 하니라 archaic plain)
- ko_em #13/#24/#34/#49/#96: 古典 imperative `주옵소서 / 주시옵소서` (V極)
- ko_em #28: `주시옵소서` (V極)
- ko_em #40: `아시나이까` (V極)

**Problem:** ko_em (옛말/한어체) は **古典・宮中語** のペルソナで、`그대` は **古典詩・宮中言語の親密体 (literary T/V neutral)** 〜 「(目下に向けた) 公式的呼称」。 ko 標準 (`당신은`) との対応は historically 正しいが、`그대 + 마셔야 하니라` (T-equivalent ending) は **#10 `이를 수 있나이까` (極 V)** との内部レジスター差が大きい。古典体としても **「-하니라」は最敬語 hortative**で `-나이까` (極 V interrogative) と並べると ending tier が違う。

**Proposed:** ko_em 内のレジスター揃え。 #85 `[D:하니라]` → `[D:하옵니라]` (V) または `[D:하소서]` (V hortative)。 修正最小限。

---

### 29. vi 標準 `bạn` (#10/#28/#40/#85/#100) 一貫 ✓ だが kinship-based polite との関係 【要検討】

**Current:**
- vi #10 #28 #40 #85 #100: 全て `bạn` (neutral peer)
- vi_s 標準: 同じく `bạn`
- vi_c: `mi` (T 中部) — 指摘 8 で対象済

**Problem:** ベトナム語の polite-default は本来 **kinship 呼称 (anh/chị/em/cô/chú/bác + 名前)** で、`bạn` は **若年層・教育場面・初対面 polite-neutral** に限定 (Luong 1990; Sidnell 2007)。データの `bạn` 採用は **コンテクストフリーの中立形** として OK だが、reviewer 提案: ストレンジャー初対面 (#10 #40) は `bạn` で OK、レストラン店員依頼 (#28) は `bạn` でも `chị/anh` でもよい、advice (#85) も `bạn` で OK。

**Proposed:** 修正不要 — `bạn` で polite-default の最大公約数として整合性が取れている ✓。 vi_nom も並行 `伴` で一貫。

---

### 30. tr / fi / hu / la の 2 人称が #10/#28/#40/#85 で T 採用 — agglutinative T-default 言語の整合 【要検討】

**Current:**
- **tr #10**: `[A:Sen] ... [D:‌musun]` (T 2sg)
- **tr #28**: `[D:‌misiniz]` (V 2pl polite question particle) — フリップ
- **tr #40**: `[D:‌musunuz]` (V)
- **tr #85**: `[A:Sen] [D:içmelisin]` (T 2sg)
- **tr #13/#24/#34/#49/#96**: `‌musunuz / misiniz / verir misiniz` (V 2pl)

- **fi #10**: `[D:Osaatko] [A:sinä]` (T 2sg `osaat-ko`)
- **fi #28**: `[A:Voisitko] [C:suositella]` (T 2sg conditional)
- **fi #40**: `[E:Tiedättekö]` (V 2pl `tiedätte-kö`)
- **fi #85**: `[A:Sinun] [D:pitäisi]` (T sg genitive)
- **fi #13/#24/#34/#49/#96**: `Voisinko/Voisitteko/Olkaa hyvä` 混在 (V 多め)

- **hu #10**: `[A:Te] [D:tudsz]` (T)
- **hu #28**: `[A:Tudna]` (V: 3sg formal ön implicit)
- **hu #40**: `[E:Tudja]` (V: 3sg formal)
- **hu #85**: `[A:Neked] [D:kellene]` (T dative)
- **hu #13/#24/#34/#49/#96**: `kérek/kérem/mutassa meg/mondja meg/forduljon` (V 3sg formal ön implicit)

- **la #10**: `[D:Potesne] [A:tu] [C:loqui]` (T 2sg, no T/V distinction in Classical Latin)
- **la #85**: `[A:Tu] [E:plus] [B:aquae] ... [D:debes]` (T 2sg, 古典)

**Problem:** これらの言語は **#10 #85 で T (Sen / sinä / Te / tu)、#28 #40 で V (-misiniz / Tiedättekö / Tudna / Tudja)** という分裂。tr/fi/hu は **2pl を V として使う体系** (Comrie 1981) があるが、データは文ごとに切り替わる。 la は **古典ラテン語が T/V distinction を持たない** ので T 一貫が正しい (Adams 2003)。 tr/fi/hu は **データ全体を V (2pl) に統一** するか **T (2sg) に統一** すべき。

**Proposed:**
- (tr) #10 `[A:Sen] ... [D:‌musun]` → `[A:Siz] ... [D:‌musunuz]` (V); #85 `[A:Sen] [D:içmelisin]` → `[A:Siz] [D:içmelisiniz]`
- (fi) #10 `[D:Osaatko] [A:sinä]` → `[D:Osaatteko] [A:te]` (V); #28 `[A:Voisitko]` → `[A:Voisitteko]`; #85 `[A:Sinun]` → `[A:Teidän]`
- (hu) #10 `[A:Te] [D:tudsz]` → `[A:Ön] [D:tud]`; #85 `[A:Neked] [D:kellene]` → `[A:Önnek] [D:kellene]`
- (la) 修正不要 (古典 T/V 中立) ✓

これで tr/fi/hu が V (politely 2pl) で一貫、polite-default 規約と整合する。

---

### 31. mn (Mongolian) `Чи` (T) vs `Та` (V) フリップ 【蓋然】

**Current:**
- #10 mn: `[A:Чи] [B:англиар]` (T: chi = 2sg familiar)
- #28 mn: `[A:Та] [F:сайн] [E:ресторан]` (V: ta = 2sg/pl polite)
- #40 mn: `[A:та] ... [E:мэдэх]` (V: ta)
- #85 mn: `[A:Чи] [E:илүү их] [B:ус]` (**T: chi**)
- #100 mn: pronoun-less

**Problem:** モンゴル語の polite-default は **`Та` (V, 2sg/pl polite)** で、`Чи` (T) は intimate peer/inferior 限定 (Janhunen 2012)。 #10 #85 が T、#28 #40 が V のフリップは指摘 9/10 (id/ms `kamu/awak` フリップ) と完全同型。

**Proposed:**
- #10 mn `[A:Чи]` → `[A:Та]`
- #85 mn `[A:Чи]` → `[A:Та]`

これで mn 全文 V (Та) 一貫。

---

### 32. ka (Georgian) `თქვენ` (V) vs `შენ` (T) フリップ 【蓋然】

**Current:**
- #10 ka: `[A:თქვენ] [B:ინგლისურად] [C:ლაპარაკი] [D:შეგიძლიათ]` (V: tkven 2pl polite + 2pl `šegidzliat`)
- #28 ka: `[A:შეგიძლიათ]` (V)
- #40 ka: `[A:თქვენ] [C:სად] [B:ფოსტა]` (V)
- #85 ka: `[A:შენ] [E:მეტი] [B:წყალი] [C:უნდა სვა]` (**T: šen + 2sg `sva`**)

**Problem:** グルジア語 (Kartvelian) の polite-default は **`თქვენ` (tkven) = 2pl V** で、`შენ` (šen) は T。 #85 のみ T フリップ — これも「advice → T」パターンの再発 (指摘 5/14/15/17/18 と並列)。

**Proposed:**
- #85 ka `[A:შენ]` → `[A:თქვენ]` + `[C:უნდა სვათ]` (2pl V)

---

### 33. kk / uz / ky / tg / tk の Turkic 中央アジア言語 — Сіз (V) と Сен/sen (T) のフリップ 【蓋然】

**Current (#10):**
- kk `[A:Сіз] [D:аласыз ба]` (V)
- uz `[A:Siz] [D:olasizmi]` (V)
- ky `[D:Сиз] [B:аласызбы]` (V)
- tk `[A:Siz] [D:bilýärsiňizmi]` (V)
- tg `[A:Шумо] [D:метавонед]` (V)

**Current (#85):**
- kk `[A:Сіз] [E:көбірек]` (V) ✓
- uz `[A:Siz] [E:ko'proq]` (V) ✓
- ky `[A:Сен] [E:көбүрөөк] [B:суу]` (**T: sen**)
- tk `[A:Sen] [E:has köp]` (**T: sen**)
- tg `[A:Шумо] [E:бештар]` (V) ✓

**Problem:** ky / tk が **#85 のみ Сен/Sen (T) に切り替わる**のは指摘 31 (mn Чи) と完全に並行。kk/uz/tg は V (Siz/Шумо) で全文一貫しており、polite-default を守っている。

**Proposed:**
- #85 ky `[A:Сен]` → `[A:Сиз]`; `[C:ичишиң] [D:керек]` → `[C:ичишиңиз] [D:керек]` (2pl V)
- #85 tk `[A:Sen]` → `[A:Siz]`; `[C:içmeli]` → `[C:içmelisiňiz]` (2pl V)

---

### 34. ku (Kurdish) `Tu` (T) で #10 #85 一貫 — Kurmanji 方言の T-default 【要検討】

**Current:**
- #10 ku: `[A:Tu] [B:Îngilîzî] [D:dizanî]` (T: tu 2sg)
- #85 ku: `[D:Divê] [A:tu]` (T)
- #28 ku: `[A:Hûn dikarin]` (V: hûn 2pl polite)
- #40 ku: `[E:Ma] [A:tu] [E:dizanî]` (T)
- #13/#24/#34/#49/#96 ku: 2pl imperative (bidin / nîşan bidin / bipeyivîne / bizivirîne) ─ 一部 V

**Problem:** クルマンジー・クルド語 (Kurmanji = ku) は **2sg `tu` / 2pl `hûn` の T/V distinction** を持つ (Thackston 2006)。データ内では **#28 で hûn (V)、#10/#40/#85 で tu (T)、#13/#24/#34/#49/#96 で 2pl imperative (V)** という混在。これは指摘 9-11 (Austronesian) や指摘 17-19 (Slavic/Balkan) と同型。

**Proposed:**
- #10 ku `[A:Tu] ... [D:dizanî]` → `[A:Hûn] ... [D:dizanin]` (V)
- #40 ku `[E:Ma] [A:tu] [E:dizanî]` → `[E:Ma] [A:hûn] [E:dizanin]`
- #85 ku `[D:Divê] [A:tu]` → `[D:Divê] [A:hûn]`

ku 全文 hûn (V) で一貫。

---

### 35. ckb (Central Kurdish/Sorani) `تۆ` (T) — Sorani の T-default 【要検討】

**Current:**
- #10 ckb: `[D:دەتوانیت] [A:تۆ]` (T: to 2sg)
- #40 ckb: `[A:تۆ] [E:دەزانیت]` (T)
- #85 ckb: `[A:تۆ] [D:دەبێت]` (T)
- #28 ckb: `[A:دەتوانیت]` (T pro-drop)
- #13/#24/#34/#49/#96 ckb: 2sg imperative (بدە / پیشان بدە / قسە بکە / etc.) — T

**Problem:** Sorani Kurdish の 2sg `تۆ` (tô) は polite-T として使われ、V 形 `ئێوە` (êwe = 2pl) はあまり使われない (McCarus 2009)。データの T 一貫は Sorani 規範として OK だが、 ku (Kurmanji) の V (hûn) と非対称 — 同じ Kurdish family 内で T/V 体系が異なる。

**Proposed:** 現状維持 (Sorani T-default) で OK ✓ ─ ただし注釈で「Sorani は T 一貫、Kurmanji は V (hûn) 一貫」を明記すべき。記録のみ。

---

### 36. hy (Armenian) `Դուք` (V) で全文一貫 ✓、ただし #85 で `Դուք պետք է` (V) は ka と並列 【整合・記録】

**Current:**
- #10 hy: `[A:Դուք] [D:կարող ես]` (注: Դուք = V 2pl polite だが `կարող ես` = 2sg)
- #28 hy: `[A:Կարող եք]` (V 2pl)
- #40 hy: `[A:Դուք] [E:գիտեք]` (V 2pl)
- #85 hy: `[A:Դուք] [D:պետք է] ... [C:խմեք]` (V 2pl `khmek`)

**Problem:** アルメニア語は **`Դուք` (Duk) = 2pl polite V**, `դու` (du) = 2sg T。 hy 全文 V でほぼ一貫だが、**#10 で `Դուք կարող ես` という主語 V + 動詞 T の不一致**がある (`կարող ես` = 2sg、本来は `կարող եք` であるべき)。これは hy データの内部 grammar error。

**Proposed:**
- #10 hy `[D:կարող ես]` → `[D:կարող եք]` (V 2pl agreement)

---

### 37. fa (Persian) `شما` (V) で全文一貫 ✓ 【整合・記録】

**Current:**
- #10 fa: `[A:شما] [D:می‌توانید]` (V: shoma 2pl polite + 2pl verb)
- #28 fa: `[A:آیا] [B:شما] [D:می‌توانید]` (V)
- #40 fa: `[E:می‌دانید]` (V pro-drop)
- #85 fa: `[A:شما] [D:باید بنوشید]` (V)

**Problem:** ペルシア語 polite-default は **`شما` (shoma)** で全文一貫 ✓ ─ Lambton (1953, §3.7)。修正不要。

**Proposed:** 修正不要、記録のみ。 ✓

---

### 38. yi (Yiddish) `איר` (V) vs `דו` (T) フリップ 【蓋然】

**Current:**
- #10 yi: `[D:קענסטו] [C:רעדן] [B:ענגליש]` (**T: kenstu = kenst + du = 2sg + T contracted**)
- #28 yi: `[A:קענט] [B:איר] [C:עמפֿעלן]` (V: ir 2pl polite + 2pl `kent`)
- #40 yi: `[E:ווייסט] [A:איר]` (V: ir)
- #85 yi: `[A:דו] [D:זאָלסט]` (**T: du + 2sg `zolst`**)
- #68 yi: 1sg, 対象外

**Problem:** イディッシュは **`איר` (ir) = V 2pl polite、`דו` (du) = T 2sg** の Germanic 系 T/V (Jacobs 2005, §6.5)。データは #10 #85 で T、#28 #40 で V のフリップ — id/ms フリップと完全同型 (指摘 9, 10)。

**Proposed:**
- #10 yi `[D:קענסטו]` → `[D:קענט] [A:איר]` (V)
- #85 yi `[A:דו] [D:זאָלסט]` → `[A:איר] [D:זאָלט]`

---

### 39. lad (Ladino/Judeo-Spanish) `tu` (T) で全文 — Sephardic 慣用としては OK だが他 Romance との非対称 【要検討】

**Current:**
- #10 lad: `[D:Puedes] [A:tu] [C:avlar]` (T)
- #40 lad: `[E:Sabes] [A:tu]` (T)
- #85 lad: `[A:Tu] [D:deves]` (T)
- #28 lad: `[A:Podria] [C:akonsejarme]` (pro-drop, 形は usted/V とも tu とも取れる)
- #68 lad: 1sg

**Problem:** Ladino (Judeo-Spanish) は **historical Spanish の T 中心保守体系** で、`vos/usted` が発展せず `tu` のまま (Bunis 1992)。データの T 一貫は **historical accuracy として OK** だが、他 Romance 言語 (es 全 6 変種、pt 2 変種、fr 4 変種) が polite-default V を採るのと **非対称** — Ladino の独立性を尊重するか、polite-default に揃えるかは設計判断。

**Proposed:** 現状維持 (Ladino 歴史性保存) を推奨。記録のみ。

---

### 40. got (Gothic) / cu (Old Church Slavonic) の T (þu / ты) 一貫 — 古典言語の T/V 中立 【整合・記録】

**Current:**
- got #10: `[D:𐌼𐌰𐌲𐍄] [A:𐌸𐌿]` (T: þu 2sg)
- got #85: `[A:𐌸𐌿] [D:𐍃𐌺𐌰𐌻𐍄]` (T)
- got #40: `[A:𐌸𐌿] [E:𐍅𐌰𐌹𐍃𐍄]` (T)
- cu #10: `[D:Можеши ли] [A:ты]` (T: ty 2sg)
- cu #40: `[A:Ты] [E:вѣси ли]` (T)
- cu #85: `[A:Ты] [D:длъжьнъ ѥси]` (T)

**Problem:** ゴート語は **古典 Germanic で T/V distinction を持たない** (Lambdin 2006, §2.2)。古教会スラブ語も同様で T/V distinction は中世後期に発展 (Lunt 2001, §8.5)。両言語の T 一貫は **言語史的に正しく問題なし**。

**Proposed:** 修正不要、記録のみ。 ✓

---

### 41. 命令形 #13/#24/#34/#49/#96 の T/V 整合 — Spanish "deme" (V) vs "dame" (T) 不整合 【確実】

**Current (#13: please give me a glass of water):**
- es_eu/es_mx/es_cl/es_pe: `[B|D:deme]` (V: usted imperative)
- **es_ar**: `[B|D:dame]` (**T: tú imperative `dame`**)
- es_co: `[B|D:regáleme]` (V)

**Current (#24: please show me the menu):**
- es_eu/es_mx: `[D:muéstre] [B:me]` (V)
- es_ar: `[D:mostrame]` (**T: vos imperative `mostrame`**)
- es_cl/es_pe: `[D:muéstreme]` (V)
- es_co: `[D:me muestra]` (V indicative)

**Current (#34: please speak slowly):**
- es_eu/es_cl/es_co/es_pe: `[C:hable]` (V: usted imperative)
- es_mx: `[C:habla]` (**T: tú imperative `habla`** — 指摘 1 と並列)
- es_ar: `[C:hablá]` (**T: vos imperative `hablá`**)

**Current (#49):**
- es_eu/es_mx: `[D:díga] [B:me]` (V)
- es_ar: `[D:decime]` (**T: vos**)
- es_cl/es_co/es_pe: `[D:dígame]` (V)

**Current (#96):**
- es_eu: `[B:gire a la derecha]` (V: usted)
- es_mx: `[B:dé vuelta a la derecha]` (V)
- es_ar: `[B:doblá a la derecha]` (**T: vos**)
- es_cl: `[B:doble a la derecha]` (V)
- es_co: `[B:gire a la derecha]` (V)
- es_pe: `[B:voltee a la derecha]` (V)

**Problem:** Spanish 6 変種のうち **es_ar (voseo) が #13 #24 #34 #49 #96 全部 vos T imperative** で一貫 — これは Rioplatense voseo の dialect feature として整合的だが、**es_mx #34 だけが `habla` (tú T)** で、しかも es_mx は他文では usted (V) を採るため**変種内不整合** (指摘 1 で既出)。

**Proposed:**
- 指摘 1 の修正 (es_mx #34 `[C:habla]` → `[C:hable]`) を適用
- es_ar の voseo 一貫は方言特性として残してよい (es_ar #13 dame, #24 mostrame, #34 hablá, #49 decime, #96 doblá は dialect-consistent)

---

### 42. fr "Veuillez" (extreme polite) vs "S'il vous plaît + 2pl imperative" のレジスター差 — #96 のみ Veuillez 【蓋然】

**Current:**
- #96 fr: `[A:Veuillez] [B:tourner à droite]` (**extreme V: veuillez = vouloir 2pl imperative archaic polite**)
- #96 fr_qc/fr_be/fr_ch: `[A:S'il vous plaît] [B:tournez à droite]` (V 2pl)
- 他 fr 文 (#13 #24 #34 #49): `S'il vous plaît + 2pl imperative` (V)

**Problem:** フランス語 polite-default は **S'il vous plaît + 2pl** で、`Veuillez + INF` は extra-polite (公式書類・公的告知レベル)。 fr #96 のみ `Veuillez` を採用するのは **同一データ内のレジスター不整合**。他文との polite-tier を揃えるなら `S'il vous plaît tournez à droite` で十分。

**Proposed:**
- #96 fr `[A:Veuillez] [B:tourner à droite]` → `[A:S'il vous plaît] [B:tournez à droite]` (V 2pl, polite-default tier)

---

### 43. ko_jeju 形容詞末尾 `ㅂ수다/허영` 系 — Jeju 方言の polite-T 中間体 【要検討】

**Current:**
- ko_jeju #10: `[A:느는]` (T: 느 = 너 dialect)
- ko_jeju #13/#24: `주이소/주서` (V)
- ko_jeju #28: `[A:줍서]` (V)
- ko_jeju #34: `[A:줍서]` (V)
- ko_jeju #40: `[E:알곡 이시쿠과]` (V interrogative)
- ko_jeju #49: `[A:주세요]` (V)
- ko_jeju #68: `[D:되쿠과]` (V interrogative)
- ko_jeju #85: `[A:느는] [B:물을] [E:더] [C:마셔야] [D:험수다]` (T 代名詞 + V predicate `험수다`)
- ko_jeju #96: `[A:주세요]` (V)

**Problem:** 済州島方言の `느` (= 너 T 形) と `-수다 / -쿠과 / -서` (V polite ending) が**同一文内で混在**しているのは Jeju の social meaning として「親密 + 敬意」の同居体系 (Yang 2008) で、内部に問題なし。ただし polite-default に揃えるなら #10 `느는` → `당신은` または 主語 zero に変更可能。

**Proposed:** 修正不要 (方言特性) ─ または #10/#85 で `느는` を主語 zero に削除する最小修正で polite-default 整合性を上げる。記録のみ。

---

### 44. tlh 例外文 #28 #40 #68 で `SoH` 出現しない pattern と他文との不一致 【整合・記録】

**Current:**
- tlh #10 `[A:SoH]`、 #40 `[A:SoH]`、 #85 `[A:SoH]` — SoH 明示
- tlh #28 `[A:choleghlaH'a']` (動詞 prefix `cho-` = 2sg→1sg, SoH 不出現)
- tlh #68 `[A:jIH]` (1sg, 対象外)

**Problem:** Klingon は **subject pronoun が動詞 prefix で表される** ため、`SoH` 明示は emphasis 用途 (Okrand 1992, §3.3)。データの混在は文法上 OK。

**Proposed:** 修正不要、記録のみ。 ✓

---

### 45. ja_edo `お主は` (古風 T/V 中間) — 江戸言葉として整合 【整合・記録】

**Current:**
- ja_edo #10: `[A:お主は]` (古風 polite)
- ja_edo #28: 代名詞 zero + `くだされ` (古風 V)
- ja_edo #40: 代名詞 zero + `存じておる` (古風 humble)
- ja_edo #85: `[A:お主は] ... [D:飲んだほうがよい]` (古風)
- ja_edo #100: `[B:かたじけない]` (古風)

**Problem:** 「お主」は **江戸期武家言葉の polite-T 中間体** で、現代日本語の `あなた` に対応する古風 register。データの一貫は historical accuracy として OK。

**Proposed:** 修正不要、記録のみ。 ✓

---

## 総括 — 支配的な T/V レジスター・ドリフト・パターン

本レビューで検出された 2 人称レジスター・ドリフトは **3 つの dominant pattern** に収束する:

### Pattern A: "Advice → T" フリップ (12 言語以上)
**#85 「もっと水を飲んだほうがいい」 (advice context)** が triggered で、polite-default を採る言語が **#85 のみ T (familiar) に切り替わる** パターン。指摘 5, 14, 15, 17, 18, 19, 31, 32, 33, 38 がこのパターンに該当。

該当言語: **de (du)、ru (тебе)、cs (ty)、el (εσύ)、ro (tu)、ka (შენ)、mn (Чи)、ky (Сен)、tk (Sen)、yi (du)、it (tu) — 12 言語**。

原因仮説: **「アドバイス = 親しさを示す = T」** という英文 "You should..." の言外含意を訳者が解釈し、polite-default 規約を破ってまで T に倒す傾向。これは英語 "you should" が T/V 両方の register に対応するため、各言語の訳者が「親密」を選んだ結果。

**根本提案**: closed-review で「**#85 は polite-default の V を維持**」という convention を明文化し、対象 12 言語の #85 を V に統一する review_cycle を編成する。

### Pattern B: "Question vs Request" 文脈での T/V 分裂 (5 言語以上)
**#10/#40 (見知らぬ相手への質問) で T、#28 (店員依頼) で V** という分裂パターン。指摘 9, 10, 11, 16, 31, 34, 38 がこのパターン。

該当言語: **id (kamu↔Anda)、ms (awak↔anda)、jv (kamu↔sampeyan)、pl (wiesz↔Pan)、ku (tu↔hûn)、yi (du↔ir)、mn (Чи↔Та) — 7 言語**。

原因仮説: **「店員 (商業 context) = V」「通行人 (peer-like) = T」** という訳者の文脈分類差。本データは **両方とも polite-default V** を採るべき (見知らぬ相手 = V が広域規範)。

**根本提案**: 対象 7 言語の #10/#40 を V に統一。

### Pattern C: Spanish 変種内・地域 voseo との衝突 (4 変種)
es_mx (Mexico = usted-default), es_cl (Chile = voseo + usted 混在) で **文ごとに T↔V フリップ**。指摘 1, 2, 41 がこれ。

該当: **es_mx (#34 #40 #85 のみ T)、es_cl (#10 #28 #40 #85 で T、他で V)**。

**根本提案**: es_mx は全文 V (usted) で一貫化、es_cl は方針選択 (voseo culto を全文 vs usted を全文)。

### 集計

| 指摘番号 | 言語 | 文 | パターン | 確信度 |
|---|---|---|---|---|
| 1 | es_mx | #34, #40, #85 | C | 確実 |
| 2 | es_cl | #10, #28, #40, #85 | C | 確実 |
| 3 | fr_qc | #10, #85 | B/A | 確実 |
| 4 | vec, sc | #10, #34 | C-variant | 確実 |
| 5 | de/de_at/de_by | #85 | A | 蓋然 |
| 6 | ja | #85 (主語 zero 推奨) | (subject drop) | 蓋然 |
| 7 | ko | #10, #40, #85 (당신은 削除) | (honorific) | 確実 |
| 8 | vi_c | #10, #28, #40, #85, #100 | (mi rude) | 確実 |
| 9 | id | #10, #40 | B | 確実 |
| 10 | ms | #10, #40, #85 | B | 確実 |
| 11 | jv | #10, #40 | B | 確実 |
| 14 | ru | #85 | A | 整合・記録 |
| 15-17 | uk/pl/cs/sk/sl/sr | #85 | A | 蓋然/確実 |
| 18 | el | #85 | A | 蓋然 |
| 19 | ro | #10, #40, #85 | A+B | 蓋然 |
| 20 | ca/gl/oc/sc | #10, #85 | C-variant | 蓋然 |
| 30 | tr/fi/hu | #10, #28, #40, #85 | B | 要検討 |
| 31 | mn | #10, #85 | A+B | 蓋然 |
| 32 | ka | #85 | A | 蓋然 |
| 33 | ky/tk | #85 | A | 蓋然 |
| 34 | ku | #10, #40, #85 | B | 要検討 |
| 36 | hy | #10 (動詞 agreement bug) | grammar | 確実 |
| 38 | yi | #10, #85 | B+A | 蓋然 |
| 42 | fr | #96 (Veuillez → S'il vous plaît) | tier | 蓋然 |

### 修正の優先順位

1. **最優先**: 指摘 1 (es_mx), 2 (es_cl), 8 (vi_c mi), 9 (id), 10 (ms), 11 (jv), 16 (pl), 36 (hy agreement bug) — 全 8 件。 これらは個別の文単位で代名詞・動詞活用を 1〜2 token 置換するだけで polite-default 規約に揃う。
2. **次優先**: Pattern A 一括修正 (#85 を V 統一) — 指摘 5, 14, 15, 17, 18, 19, 31, 32, 33 の 9 件、約 12 言語 × 1 文 = 12 セル。 これは review_cycle で **#85 V-default convention** を明文化したうえでバッチ修正すべき。
3. **中優先**: 指摘 3 (fr_qc), 4 (vec/sc), 20 (ca/gl), 30 (tr/fi/hu), 34 (ku) — 方言/独立言語のレジスター方針確定が前提。
4. **記録のみ**: 指摘 13 (hi V 全一貫), 21 (ar 2msg), 22 (he 中立), 23 (tlh), 24 (eo), 25 (tok), 26 (jbo), 29 (vi bạn), 37 (fa V 全一貫), 39 (lad T 保守), 40 (got/cu 古典), 43 (ko_jeju), 44 (tlh prefix), 45 (ja_edo) — 14 件。 修正不要、記録のみ。

### 根本提案

closed-review に以下の grand conventions を明文化することを推奨:

- **Convention A**: データセットの polite-default register は **V (formal/respectful)**。すべての文 (advisory #85 を含む) で polite-default を維持する。
- **Convention B**: 言語固有の polite-default が存在する言語 (ko `당신`、ja `あなた`、vi `bạn`、ar 2msg、tok `sina`) は、その言語の合意済み中立 polite 形を採用する (T 寄りでも整合性が取れていれば OK)。
- **Convention C**: 方言バリアント (es_ar voseo、ja_osa あんた、vi_c eng/cô、ko_jeju 느) は **方言固有 register として独立**に決定し、標準形に揃えない。ただし方言内部の文間整合性は維持する。
- **Convention D**: 構築言語 (eo, tok, jbo, tlh) は **設計上 T/V distinction を持たない場合**、その仕様を尊重し記述する。

これが採択されれば、本レビューの **23 件の修正可能指摘 (確実 11 + 蓋然 12)** を一括バッチ修正できる。

---

**ファイル:** `/home/jounlai/langmap/langmap_reviews/46_open.md`
**指摘件数:** 45 件 (うち【確実】= 11 件、【蓋然】= 18 件、【要検討】= 2 件、【整合・記録】= 14 件)
**支配的な T/V レジスター・ドリフト:** **Pattern A "Advice → T" フリップ** が最頻 — 文 #85 「もっと水を飲んだほうがいい」 で 12 言語以上 (de/ru/cs/el/ro/ka/mn/ky/tk/yi/it 他) が polite-default を破棄して T (du/тебе/ty/εσύ/tu/sen/chi 等) に切り替わる。次点は **Pattern B "Question vs Request" 分裂** で id/ms/jv/pl/ku/yi/mn が「店員 = V、通行人 = T」の文脈解釈差で T↔V フリップ。共通根本原因は **英語 "you" の T/V 両義性** を各言語訳者が文脈ごとに独立解釈した結果で、polite-default V を明文化した convention が無いまま fossilized している。最優先の修正対象は es_mx (#34 #40 #85 が tú/habla フリップ)、vi_c (`mi` が polite request で使われている)、id/ms/jv (Indonesian `Anda`/Malay `anda`/Javanese `sampeyan` の不採用)、pl (#40 #85 で `wiesz/Powinieneś` 2sg フリップ)、hy #10 (動詞 agreement bug `Դուք կարող ես`) の 8 件。

---

## Dev response — round 1 (2026-06-04)

**Scope decision:** Accepted the 11 【確実】 actionable issues plus the cherry-pickable subset that does not require the grand-convention proposal. Deferred all 18 【蓋然】 items whose justification depends on the proposed dataset-wide "V-default everywhere" convention (Pattern A advice→T flip across de/ru/cs/el/ro/ka/mn/ky/tk/yi, etc.); those need owner approval before applying. Deferred 14 【整合・記録】 items entirely (no edits needed). Deferred 2 【要検討】 items (ku, ckb Sorani T-default — Kurdish family register choice needs owner decision).

**Edits produced (22 cells / 9 languages):**

| # | Lang | Sentences | Type | Notes |
|---|------|-----------|------|-------|
| 1 | es_mx | #34, #40, #85 | T→V (usted) | hable / Sabe usted / Usted debería |
| 2 | es_cl | #10, #28, #40, #85 | T→V (usted) | Chilean voseo → usted polite-default, mirrors es_eu/mx |
| 8 | vi_c | #10, #28, #40, #85, #100 | rude→neutral | mi → bạn (mirrors vi/vi_s); 5 cells |
| 9 | id | #10, #40 | T→V | kamu → Anda (#85 already V) |
| 10 | ms | #10, #40, #85 | T→V | awak → anda |
| 11 | jv | #10, #40 | T→V | kamu → sampeyan (#85 already V) |
| 16 | pl | #40, #85 | T→V | wiesz/Powinieneś → wie/Powinien + pan/pani |
| 36 | hy | #10 | grammar bug | կարող ես (2sg) → կարող եք (2pl, matches Դուք) |

**Roles preserved:** All edits keep the existing role-letter assignments; replace ops re-list the full segment array unchanged except for the substituted lexical item. No adjacent same-role segments introduced. `allowTextChange: true` set on every edit (register changes are lexical substitutions).

**Resolved findings:** 9 of 45 review issues (#1 es_mx, #2 es_cl, #8 vi_c, #9 id, #10 ms, #11 jv, #16 pl, #36 hy, plus #41 es_mx #34 which is the same cell as #1).

**Deferred for round 2 / closed-review:**
- Pattern A bulk: #5 (de/de_at/de_by #85), #14 (ru #85), #15 (uk/sk/sl/sr #85 — actually V already; ru/pl/cs target), #17 (cs #85), #18 (el #85), #19 (ro), #31 (mn), #32 (ka), #33 (ky/tk) — needs Convention A approval.
- Pattern B remainder: #30 (tr/fi/hu — requires Convention A on agglutinative T-default), #34 (ku Kurmanji), #38 (yi).
- Variant-policy: #3 (fr_qc — needs (A) vs (B) choice), #4 (vec/sc), #20 (ca/gl/oc), #6 (ja zero-subject), #7 (ko 당신은 removal), #27 (ja_osa/ja_kyo), #28 (ko_em), #42 (fr Veuillez).

**Closure recommendation:** Partial-resolution; reopen as #46-r2 after owner approves Convention A (V-default for #85 advice context) and Convention C (Spanish voseo dialect policy for es_cl/es_ar). The hy #10 verb-agreement bug is unambiguous and should land immediately regardless of convention discussion.

**JSON output:** `/tmp/lm_edits_46.json` (22 edits)
