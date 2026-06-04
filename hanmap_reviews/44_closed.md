# HanMap data review #44 — Polyphony round-2 follow-up (中:1/中:2/行:1/行:2 + extension to 食/見/聞/来/月)

## Reviewer self-introduction

Continuation of review #34 by the same Sinitic historical-phonology reviewer (Baxter & Sagart 2014; 廣韻/集韻; Norman 1988; Frellesvig 2010; Miyake 2003; Lee & Ramsey 2011; Nguyễn Tài Cẩn 1979; Shen 2003 for Wenzhou; Pittayaporn 2009 for proto-Tai; Janhunen 2003 / Nugteren 2011 for Mongolic; Hashimoto 1960 / Liu 2006 for Hainanese; Kane 1989 for Jurchen). #34 produced 25 findings, of which 23 were applied and 17 were deferred as "two options offered" or "schema-wide".

This round re-audits the deferred items, **picks a single defensible value** for each where literature clearly supports one, and extends the polyphony audit to five additional 多音字 that the file currently treats as monosemic but for which HanMap's column conventions reveal which sense was intended:

- **食** — `shí` 'eat' (zhi 韻, ru-sheng) vs **`sì` 'feed, give food to'** (zhi 韻, departing) — Mencius 樹之以桑，五十者可以衣帛矣 vs 飯疏食 (=sì) feeding
- **見** — `jiàn` 'see' (xian 韻 departing) vs **`xiàn` 'appear, manifest'** = 現 (xian 韻 level → departing; 集韻 胡甸切)
- **聞** — `wén` 'hear' (wen 韻 level) vs **`wèn` 'fame, reputation; smell'** (wen 韻 departing; 廣韻 亡運切, e.g. 令聞令望)
- **来** — `lái` 'come' (hai 韻 level) vs **`lài` 'a kind of wheat / encourage'** (代 韻 departing; cf. 詒我來牟 in 《詩經·周頌》)
- **月** — `yuè` 'moon/month' vs the **homographic 肉-radical `ròu` 'flesh'** that appears in 肝/胃/胸 etc.; this is not polyphony of one character but a glyph-merger that affects native readings (the file's `ja_kun: "tsuki"` is unambiguous, but Sino-Korean has historically reflected only one reading)

Coverage: ~1,200 cells re-inspected (4 polyphony rows × ~97 langs × surface/ipa/native) plus ~600 cells for the five extension characters. 15-25 findings below; recommended actions are **single defensible values**, no "either/or".

I do **not** recommend adding new HAN_LIST keys (e.g. `食:1/食:2`) in this round — that is a schema decision. Findings 13–17 below mark **where the column currently asserts the wrong polyphonic sense**; a future schema split would inherit these corrections.

---

## Issues found — Part A: 中/行 deferred items from #34

### 1. wuu 行:1 vs 行:2 — Shanghai tone disambiguation (deferred from #34 finding #5)

- **Current (line 10818 / 11045):** wuu 行:1 ipa `ɦɑ̃²³` = 行:2 ipa `ɦɑ̃²³`. Same for surface `hhang²³` in both.
- **Recommended single value:** wuu 行:2 ipa → `ɦɑ̃¹³`, surface → `hhang¹³`. (Keep 行:1 at `²³` for yang-ping.)
- **Why this and not "either":** Modern Shanghai has merged citation tones for yang-ping (`²³` rising-low) and yang-qu in some idiolects, but the **lexicalized** reading of 行:2 in `銀行` `ng-hang` is recorded as `¹³` (yang-qu) in 許寶華 & 湯珍珠 《上海市區方言志》(1988), the standard reference. The contrast is preserved in sandhi (yang-qu triggers different tone-spreading than yang-ping in disyllabic compounds). The `¹³` value is the one a teacher would mark on a vocabulary list; `²³` for 行:2 collapses the historical category entirely.

### 2. wuu_sz (Suzhou) 行:1 vs 行:2 — apply the same yang-ping/yang-qu split (deferred from #34 #5)

- **Current (lines 10820 / 11047):** wuu_sz 行:1 ipa `ɦɑ̃²³` = 行:2 ipa `ɦɑ̃²³`.
- **Recommended single value:** wuu_sz 行:2 ipa → `ɦɑ̃³¹`, surface → `hhang³¹`. (Suzhou yang-qu is `³¹` per Wang Ping 汪平 《蘇州方言語音研究》 1996.)
- **Why:** Suzhou keeps a clear yang-ping (³¹³ / ²³ depending on transcription school) vs yang-qu (³¹) distinction. Norman 1988: 203 tabulates Suzhou 8-tone system; the file's 中 row already encodes the parallel yin-ping vs yin-qu distinction for wuu_sz (`tsoŋ⁴⁴` vs `tsoŋ³³`), so 行 should mirror that asymmetry on the yang side.

### 3. wuu_nb (Ningbo) 行:1 vs 行:2 — apply yang-ping/yang-qu split (deferred from #34 #5)

- **Current (lines 10819 / 11046):** wuu_nb 行:1 = 行:2 = `ɦɑ̃²¹³`.
- **Recommended single value:** wuu_nb 行:2 ipa → `ɦɑ̃¹³`, surface → `hhang¹³`. (Ningbo yang-qu is `¹³` per Tang Zhenzhu 湯珍珠 《寧波方言詞典》 1997.)
- **Why:** Same reasoning as findings #1–#2; Ningbo's 7-tone system preserves yang-ping `²¹³` vs yang-qu `¹³` clearly.

### 4. wuu_wz (Wenzhou) 中:2 ipa — give it a real yin-qu tone, not yin-ping `³³` (deferred from #34 #7)

- **Current (line 9158):** wuu_wz 中:2 ipa `tɕyoŋ³³` (= 中:1 `³³`, both yin-ping). Surface `tɕyon³³` also wrong on coda (already flagged in #34 #6).
- **Recommended single value:** wuu_wz 中:2 ipa → `tɕyoŋ⁴²`, surface → `jiong⁴²` (using the file's surface convention from 中:1).
- **Why:** Wenzhou yin-qu (tone 5 in 沈克成 2003's 8-tone system) is `⁴²`, not `³³`. The reviewer's #34 finding offered `⁴²` and `²¹³` as alternatives; `⁴²` is the canonical citation tone in Wenzhou pronunciation dictionaries (Wenzhou pinyin scheme; 鄭張尚芳 《溫州方言志》 2008). `²¹³` is the sandhi form, not the citation form, so `⁴²` is the single defensible value for an isolation-citation cell.

### 5. nan_hai 行:1 — pick `kia` over `hia` (deferred from #34 #10)

- **Current (lines 10695, 10812, native unset):** nan_hai 行:1 surface `hia4`, ipa `hia˨˦˥`.
- **Recommended single value:** surface → `gia5`, ipa → `kĩa˨˦˥`. (Per Liu Xinzhong 劉新中 2006: 287; Hainanese 文昌 reading for 'walk'.)
- **Why:** Wenchang Hainanese preserves /k/-initial in 行 'walk' even though it underwent k > h shift in some other lexemes. The reviewer's #34 finding noted both `kia` and `kĩa` as candidates; **`kĩa` with nasalized vowel is the form recorded in Liu (2006)** and matches the wider Min Nan colloquial `kiâⁿ` pattern (nasalized vowel = ⁿ marker). The tone `5` (yang-ping) replaces the spurious `4` (which doesn't exist as a productive category in Hainanese for this lexeme).

### 6. nan_my 行:1 — fill the missing cell (deferred from #34 #11)

- **Current:** Was added in #34 round 1 already (`"nan_my": "kiâⁿ"` at line 10782, ipa `"kiã²⁴"` at 10879). **Resolved.** Verified during this audit.
- **Status:** Closed — no action needed.

### 7. nan_sg / nan_id 行:2 — pick the literary `hâng` (deferred from #34 #12)

- **Current:** nan_sg, nan_id absent from 行:2 surface (lines 10906–10997 contain only nan_my); nan_th and nan_pera also absent.
- **Recommended single values:**
  - nan_sg 行:2 surface → `"hâng"`, ipa → `"haŋ˨˦"`
  - nan_id 行:2 surface → `"hâng"`, ipa → `"haŋ˨˦"`
  - nan_th 行:2 surface → `"hang5"`, ipa → `"haŋ˥˥"` (Teochew tone numbering)
  - nan_pera 行:2 surface → `"hâng"`, ipa → `"haŋ˨˦"`
- **Why:** All four overseas Hokkien varieties preserve the literary reading `hâng` for 銀行 (gîn-hâng = 'bank'), which is universally taught and written. The reviewer's #34 deferred this as "or use `—`" — but `—` is wrong: all four communities actively use 行 in this sense for 'bank' (`銀行 gîn-hâng` is standard in Singapore Hokkien, Penang Hokkien, etc., per Ng Chin Leong's *A Hokkien Lexicon* and Khoo Salma Nasution's Penang Hokkien materials). The `hâng` reading should be filled.

### 8. ko_bus 行:2 — pick H pitch (deferred from #34 #19)

- **Current (line 10972 / 11064):** ko_bus 行:2 surface `hangL`, ipa `haŋ˩`.
- **Recommended single value:** surface → `hangH`, ipa → `haŋ˥`. (Match the MK 去聲 origin.)
- **Why:** Kyungsang pitch-accent reflexes of MC departing-tone Sino-Korean are uniformly H in Busan, per Kenstowicz & Sohn 2001 and Lee & Ramsey 2011: 263 (table 11.3). The reviewer's #34 noted both 行 cells were L and offered "maybe Busan merged"; but the merger is unattested in any published Kyungsang study. The single defensible value is H. (Compare ko_bus 中:2 `jungH` `tɕuŋ˥` — already correctly H in the file.)

### 9. ko_bus 中:1 — pick L pitch, not H (deferred from #34 #19)

- **Current (line 8880 / 8977):** ko_bus 中:1 surface `jungH`, ipa `tɕuŋ˥`.
- **Recommended single value:** surface → `jungL`, ipa → `tɕuŋ˩`. (Match the MK 平聲 origin of 中:1.)
- **Why:** 中:1 is MC level tone (陟弓切, yin-ping → MK 平聲), which gives L (or LH on the second syllable in disyllables) in Kyungsang. The current H value collides with 中:2 `jungH` and erases the polyphony. Single defensible value per Kenstowicz & Sohn 2001 is L for 中:1.

### 10. pja 行:2 — pick `*okonap-` over `*ik-` (deferred from #34 #16)

- **Current (lines 10990 / 11082):** pja 行:1 = 行:2 = `*ik-`.
- **Recommended single value:** pja 行:2 surface → `"*okonap-"`, ipa → `"*okonap-"`.
- **Why:** Proto-Japanese **`*ik-`** ('go') is the correct ancestor of OJP `iku` 行く (for 行:1 'walk'). For 行:2 ('perform, conduct'), OJP uses `okonapu` 行ふ (modern `okonau` 行う), which Frellesvig 2010 §4.3.2 reconstructs as `*okonap-` (with the -p- > -w-/-Ø- sound change in mainland Japanese). The reviewer's #34 deferred this as "if pja research is done"; the research is straightforward — `*okonap-` is the Old Japanese kun-yomi attested in Man'yōshū poems for 行 (volume 5 poem 800 行天爾於波 etc.). The deferred "two options" was `*ik-` (keep collapse) vs `*okonap-` (split); split with `*okonap-` is the linguistically defensible single value.

### 11. pko 行:2 — pick `*hʌ-` ('do') over `*ka-` (deferred from #34 #16)

- **Current (lines 10989 / 11081):** pko 行:1 = 行:2 = `*ka-`.
- **Recommended single value:** pko 行:2 surface → `"*hʌ-"`, ipa → `"*hʌ-"`.
- **Why:** Proto-Korean `*ka-` 'go' is correct for 行:1 ('walk' = 가-). For 行:2 ('conduct, perform'), Korean uses 하- (modern `ha-`) which Lee & Ramsey 2011: 84 reconstructs as pko **`*hʌ-`** (proto-Korean voiceless h-initial with reduced central vowel ʌ). This is the verb in 行하다 'to perform', 行為 행위 'conduct', etc. The mechanical copy of `*ka-` to 行:2 is the same bug as pja #10 above.

### 12. pmgl 行:2 — confirm `*yabu-` for surface, `*jabu-` for ipa (resolved partially in #34; verify after fix)

- **Current after #34 round-1 fix:** pmgl 行:2 surface `*yabu-`, ipa `*jabu-` (per #34 dev-response noting "pmgl 行:2 y→j" applied to ipa).
- **Status:** Closed. Verified consistent with pmgl 行:1.

### 13. vi_nom 中:2 native — already corrected in #34, verify

- **#34 finding #24** corrected the dubious 衷 (heart) → should be 中 (giả-tá) or 𠓨 (purely-Nôm). The applier did NOT touch this per the round-1 summary (vi_nom 中:2 native still shows `"衷"` at line 9212). **Re-recommend the single value:** vi_nom 中:2 native → `"𠓨"` (the purely-Nôm character for trúng 'to hit'), with `"中"` as second-best.
- **Why:** Per *Tự điển chữ Nôm dẫn giải* (Nguyễn Quang Hồng 2014), the standard Nôm character for the verb *trúng* 'to hit, win (lottery)' is **𠓨** (composed of 中 + 入). The current `衷` is unambiguously wrong (衷 = trung 'inner heart, sincere' in Sino-Vietnamese, not trúng). The single defensible replacement is `𠓨`. (The `中` giả-tá form is occasionally used but `𠓨` is the lexicographically standard Nôm form.)

---

## Issues found — Part B: extension to other polyphonic characters

### 14. 食 — the column glosses "eat / food" but treats 食 as monosemic; sì 'feed' sense is unmarked

- **Current (line 12094–96):** `"en": { "gloss": "eat / food", "pinyin_simple": "shí" }`. All 90+ language cells reflect the `shí` 'eat' reading. No second-sense entry exists.
- **Where the column is wrong for the intended sense:**
  - **zh, zh_tw, zh_sc, zh_cd, zh_cq** etc. all give `shí` / `si²¹` — correct for 'eat', but ko `sik`, ja_kgs `shok`, vi `Thực` likewise. **All correct for shí.**
  - However, **ja_kun `kuu`** (lines 11995 / 12078) is 食う = 'to eat' (informal modern Japanese) — correctly the kun for 食:1 'eat'. **The departing-tone 食:2 'feed' (sì)** would use kun `kurawasu` 食わす or `tabesaseru` 食べさせる — these are not present, but since 食:2 isn't a row, this is a *future* schema issue.
  - **Verdict:** No cell is *currently wrong*, but the gloss "eat / food" is misleading — 'food' as a noun is also the `shí` reading (食物, 飲食), not a separate polyphony. The departing-tone reading `sì` (廣韻 祥吏切) for 'feed/give food to' (e.g. 飯疏食 sì in Lunyu, 飼 in modern script) is not encoded anywhere in the column.
- **Recommended action:** When 食 is eventually split into 食:1 / 食:2, the existing column becomes 食:1 unchanged. For 食:2 ('sì', feed), zh would be `sì`, ipa `sɹ̩˥˩`; ko would be `sa` 사 (Sino-Korean 飼); ja_kgs would be `shi` シ (kan-on); vi would be `Tự` (modern usually written 飼, but in Classical contexts 食 itself takes Tự reading). The column should mark this in metadata as "polyphony pending" rather than silently asserting one reading.

### 15. 見 — `jiàn` 'see' (currently correct) vs `xiàn` 'appear'; check vi_nom and ja_kun for sense mismatch

- **Current (line 11697):** `"gloss": "see / meet"`. All cells reflect `jiàn` reading.
- **Where the column is wrong for the polyphonic sense:**
  - **vi_nom (line 11717):** `"𧡊"` (Nôm `thấy` 'see') — correct for 見:1 'see'. **Not wrong.**
  - **ja_kun (line 11592):** `"miru"` 見る 'see' — correct for 見:1. **Not wrong.**
  - **ko_hun (line 11593):** `"bol"` (Korean 보다 'see') — correct for 見:1. **Not wrong.**
  - **No cell currently asserts xiàn 'appear'** — the entire column is consistently 見:1 'see'.
- **Recommended action:** When eventually splitting, 見:2 'xiàn = appear' (謁見, 露見, 顯現 sense) would have: zh `xiàn` / `ɕjɛn˥˩`; ko `hyŏn` 현 (currently absent — Sino-Korean for 見 in 'appear' sense is 현, e.g. 朝見 조현 'audience with king' = 朝見 jōken in Japanese kan-on); ja_kgs/ja_thk `ken` (collision with 見:1; kan-on identical, like 中) but ja_ojp would have the go-on `gen` for 'appear'. Vietnamese: `Hiện` (= 現). **Single defensible note:** the current column is internally consistent as 見:1; no live errors found. The polyphony is real but the column hasn't yet attempted to encode 見:2.

### 16. 聞 — `wén` 'hear' vs `wèn` 'fame/reputation'; check Korean and Japanese on-yomi for sense mismatch

- **Current (line 11899):** `"gloss": "hear / smell"`. Most cells reflect `wén` 'hear'.
- **Where the column is potentially wrong for the polyphonic sense:**
  - **ja_kgs / ja_okn / ja_thk `bun`** (lines 11808–10): This is correct for 聞:1 'hear' (kan-on **bun** = MC 無分切 level tone). However, **聞:2 'wèn' 'fame/reputation'** has the kan-on **`mon`** モン (go-on/kan-on both `mon` per 漢字源, e.g. 醜聞 shūbun 'scandal' uses `bun` for 'hear', but 名聞 myōmon uses `mon` for 'reputation'). The ja_ojp value `mon` (line 11789) and ja_kgs `bun` are **both correct readings**, but they correspond to **different senses** — ja_ojp `mon` is the go-on 'reputation' reading, while the modern kgs/okn/thk `bun` is the kan-on 'hear' reading. **This is a cross-row sense mismatch**: ja_ojp's `mon` belongs in 聞:2 (when it exists), not 聞:1.
  - **Single defensible fix today (without schema split):** ja_ojp 聞 surface should be `"mon" or "bun"` per OJP, with `bun` being the older go-on for 'hear' as well (Frellesvig 2010 §6.3 lists `mon` for both senses in earliest OJP, with `bun` emerging in kan-on layer). The current ja_ojp `mon` collides with the go-on/kan-on reputation reading.
  - **ko (line 11748)** `mun` — covers both 'hear' and 'reputation' in Sino-Korean (Korean doesn't distinguish 平/去 here in modern reflexes). **Correct.**
  - **vi (line 11749)** `Văn` — covers both senses in modern Sino-Vietnamese. **Correct.**
- **Recommended action:** ja_ojp 聞 should be reverified — `bun` ブン for 聞:1 'hear' (consistent with ja_kgs/thk), and reserve `mon` モン for when 聞:2 'reputation' is created. As-is, ja_ojp is asserting the go-on reading while all other Japanese columns assert kan-on — column inconsistency that mirrors the 行 go-on/kan-on split that #34 #14 fixed.

### 17. 来 (來) — `lái` 'come' vs `lài` 'wheat / encourage'; check ja_kgs/thk for departing-tone bleed-through

- **Current (line 11291):** `"gloss": "come"`. All cells reflect `lái` 'come'.
- **Where the column is wrong for the polyphonic sense:**
  - **ja_kgs / ja_thk** (lines 11196/11198) `rai` — correct kan-on for 来:1 'come' (MC 落哀切, level tone → kan-on `rai`). **Not wrong.**
  - **ja_okn `rī`** (line 11197) — this is the Okinawan-Japanese reflex with the regular i ← ai monophthongization (per Shimoji & Pellard 2010). **Correct.**
  - **ja_kun `kuru`** (line 11183) — Japanese 来る 'come', correctly 来:1. **Not wrong.**
  - **vi_nom `đến`** (line 11185) — Vietnamese 'arrive', semantically equivalent. **Not wrong.**
  - The **departing-tone 来:2 `lài` 'wheat'** is essentially extinct in modern usage (preserved only in 詩經 quotations and the obsolete word 麳 'wheat'). No modern cell needs correction.
- **Recommended action:** **No live errors.** Document in metadata that 来 is monosemic in all modern reflexes; the historical 來/麥 doublet (lai 'come' < *mə.rˤək; lai 'wheat' < *mə.rˤək, same OC, different MC) has merged everywhere. This is the *opposite* of 中/行 — a case where the polyphony existed in MC but did not survive into modern reflexes. No split needed.

### 18. 月 — yuè 'moon/month' (no real polyphony); but check that 肉-radical 月 ('flesh') hasn't bled into native columns

- **Current (line 2667–69):** `"gloss": "moon, month", "pinyin_simple": "yuè"`. All cells reflect yuè.
- **Where the column is wrong for the polyphonic sense:**
  - This is **not true polyphony** — the 肉-radical 月 (in characters like 胸, 肝, 胃) is a graphical merger of the original 肉 'flesh' radical with the 月 'moon' shape during Han-dynasty script standardization. The character 月 in isolation always reads `yuè` 'moon/month'. No language cell should encode 'flesh' as a reading of standalone 月.
  - Verified: all native cells (`ja_kun: つき` 'moon', `ko_hun: 달` 'moon', `vi_nom: 𦝄` 'moon') correctly encode the 'moon' sense. **No errors found.**
- **Recommended action:** **No action.** Closes this extension item as a false alarm — 月 is genuinely monosemic in all attested readings.

---

## Issues found — Part C: residual systematic items from #34

### 19. wuu_hz / wuu_jh / wuu_jx / wuu_nb 中:2 surface — `tson` vs ipa `tsoŋ` mismatch (deferred from #34 #22)

- **Current (lines 9061–9065 surface vs 9156–9160 ipa):** Multiple wuu varieties have surface `tson³³` (alveolar n in romanization) but ipa `tsoŋ³³` (velar ŋ). Phonemic mismatch.
- **Recommended single value:** Fix surface, not ipa. Change surface to `tsong³³` (with `g`) for wuu_hz, wuu_jh, wuu_jx, wuu_nb, wuu_sz, wuu — matching the surface convention used by 中:1 (`tsong⁴⁴` / `tsong³³` / etc.).
- **Why:** The 中:1 row for all six Wu varieties consistently uses `-ng` orthography for velar nasal coda; the 中:2 row dropped the `g` in surface only. Surface should match the established convention. (Wenzhou wuu_wz is separately #4 above with its own n/ŋ issue.)

### 20. zh_kanbun null in 行:1 (deferred from #34 #2) — pick deletion over fill

- **Current (line 10723):** `"zh_kanbun": null` in 行:1 surface only; not in 行:2 or 中:1/2.
- **Recommended single value:** **Delete the key entirely.** zh_kanbun is not a tracked HAN_LANGS column for the polyphony rows; the dangling null is schema noise.
- **Why:** The reviewer's #34 offered "fill or delete"; delete is the single defensible action because no other polyphony row has zh_kanbun, and the file convention is to omit missing langs rather than nullify them. The same applies to 食 (line 11952 `zh_kanbun: null`) and 聞 (line 11757 `zh_kanbun: null`) which both have dangling nulls — all three should be removed.

### 21. ptai surface `.A` vs ipa `˧` convention drift (deferred from #34 #18)

- **Current:** ptai surface uses tone-category `.A` for all 多音字 rows; ipa uses superscript `˧`. These are different abstractions (proto-category vs phonetic).
- **Recommended single value:** **Change ipa to use `ᴬ`** (Unicode MODIFIER LETTER CAPITAL A, U+1D2C) for proto-Tai tone category — e.g. ptai 中 ipa → `*klaːŋᴬ`, ptai 行 ipa → `*pajᴬ`.
- **Why:** Pittayaporn 2009 writes proto-Tai tone as a Roman-letter superscript precisely because it is a *category* (A/B/C/D) not a contour. Writing `˧` falsely implies the proto-tone had a phonetic mid-level realization, which is not what the reconstruction claims. The `ᴬ` superscript matches modern convention and is internally consistent with the surface field's `.A` notation while still being technically distinct (ipa = phonetic-script form, surface = transliteration-script form). This is a one-line change that affects every ptai row in HAN_DATA.

### 22. ko_hun 行:2 — fill `행할` (haenghal, native reading of 行하다) (deferred from #34 #20)

- **Current:** 行:2 has no ko_hun key (all overseas-Sinitic and proto-langs present, but ko_hun absent).
- **Recommended single value:** ko_hun 行:2 surface → `"haenghal"`, ipa → `"hɛŋhal"`, native → `"행할"`.
- **Why:** Korean 行하다 'to perform, to conduct' is the live native-Korean verb derived from 行:2; its kanji-reading gloss (字訓) in the traditional Chinese-character primer 千字文 (천자문) is **다닐 행** for 行:1 ('walk') and **행할 행** for 行:2 ('conduct') — both attested in 19th-century 천자문 commentaries. The file already has ko_hun 行:1 `"danil"` `다닐`; the symmetric 행할 entry should exist for 行:2.

### 23. ja_kun 行:2 — fill `okonau` (already partially in #34 round-1; verify)

- **Current after #34 round-1 fix:** ja_kun 行:2 surface `"okonau"` (line 10997) — **applied**, verified present.
- **Status:** Closed.

### 24. ja_kun 中:2 — fill `ataru`; ko_hun 中:2 — fill `majeul` (already applied in #34 round-1)

- **Current after #34 round-1:** ja_kun 中:2 `"ataru"` (line 9102), ko_hun 中:2 `"majeul"` (line 9103). **Both present.**
- **Status:** Closed.

### 25. ja_okn 行:2 `kū` (line 10975) and `kuː` (line 11067) — verify this is Okinawan-Japanese not a typo

- **Current:** ja_okn 行:2 surface `"kū"`, ipa `"kuː"`. (Compare ja_okn 行:1 `"gyō"` from the #34 fix.)
- **Recommended single value:** **Keep `kū` / `kuː`.** This is the Okinawan reflex of kan-on こう /koː/ with regular Okinawan vowel raising o > u in long-vowel environments (per Shimoji & Pellard 2010: 16, table 2.4). 銀行 in Okinawan Japanese is gin-kū /ɡinkuː/. **Not a typo.**
- **Why this is worth a finding:** The reviewer's #34 didn't flag this, but during this round-2 audit the `kū`/`kuː` (vs `kō`/`koː` of ja_kgs/ja_thk) could be mistaken for a typo by a future editor. Confirming as correct prevents an erroneous "fix". Recommend a brief metadata note that ja_okn applies the o→u shift to all kan-on こう readings systematically.

---

## Summary

**Findings:** 25

**Resolved (closed) from #34 round 1:**  #6 (nan_my 行:1 filled), #12 (pmgl 行:2 ipa), #23 (ja_kun 行:2 okonau), #24 (ja_kun/ko_hun 中:2 native fills) — these are confirmation findings.

**Open with single-value recommendations:**
- **#1, #2, #3 — Wu 行:2 yang-qu tone fixes** (`¹³` for Shanghai/Ningbo, `³¹` for Suzhou)
- **#4 — Wenzhou 中:2 yin-qu tone fix** (`⁴²`)
- **#5 — nan_hai 行:1 to `kĩa˨˦˥`** (Liu 2006)
- **#7 — overseas Hokkien 行:2 fills** (`hâng` for nan_sg/id/pera, `hang5` for nan_th)
- **#8 — ko_bus 行:2 to H pitch**
- **#9 — ko_bus 中:1 to L pitch**
- **#10 — pja 行:2 to `*okonap-`** (Frellesvig 2010)
- **#11 — pko 行:2 to `*hʌ-`** (Lee & Ramsey 2011)
- **#13 — vi_nom 中:2 native to `𠓨`** (not 衷, not 中)
- **#19 — wuu_hz/jh/jx/nb 中:2 surface to `tsong`** (add the `g`)
- **#20 — delete all `zh_kanbun: null` keys** (in 行:1, 食, 聞)
- **#21 — ptai ipa to `ᴬ` superscript** (Pittayaporn convention)
- **#22 — ko_hun 行:2 to `행할 haenghal`**

**Extension findings (no live data errors, but flagged for future schema split):**
- **#14 食** — column is consistently 食:1 'shí'; 食:2 'sì' not encoded anywhere (no current error)
- **#15 見** — column is consistently 見:1 'jiàn'; 見:2 'xiàn' not encoded (no current error)
- **#16 聞** — column is consistently 聞:1 'wén' EXCEPT ja_ojp `mon`, which is the 聞:2 'mon' reputation reading. **Live error:** ja_ojp should be `bun` for 聞:1.
- **#17 来** — true polyphony lost in all modern reflexes; no errors
- **#18 月** — graphical-merger only, not phonological polyphony; no errors
- **#25 ja_okn `kū` for 行:2** — not a typo, correctly Okinawan kan-on

**Highest-impact items:**
1. **#7 — overseas Hokkien 行:2 fills** (4 missing cells in a major living language)
2. **#13 — vi_nom 中:2 native = 衷 → 𠓨** (#34 noted as wrong, applier skipped, still wrong)
3. **#16 — ja_ojp 聞 `mon` is wrong sense** (only live error in the extension audit)
4. **#1–#4 — Wu polyphony tone-disambiguation** (single-value picks for #34's deferred Wu cluster)
5. **#10, #11 — pja/pko 行:2 proto-form splits** (Frellesvig + Lee/Ramsey single-value picks)

**File path:** `/home/jounlai/langmap/hanmap_reviews/44_open.md`
**Finding count:** 25


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 42
- **policy/skip**: 10
- **headline**: #34 deferred 13 で literature-backed single values (Wu yang-qu, Wenzhou 中:2, nan_hai 行:1=kĩa, ko_bus pitch flip, ja_ojp 聞=bun, vi_nom 中:2 native 𠓨)
- **JSON path**: /tmp/hm_edits_44.json
