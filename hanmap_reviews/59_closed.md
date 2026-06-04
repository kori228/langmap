# HanMap data review #59 — Old Japanese (ja_ojp) round-3 audit

## Reviewer self-introduction (ペルソナ自己紹介)

専門は奈良期 (上代日本語) 字音史 — とくに『日本書紀』『万葉集』『古事記』万葉仮名表記から復元される 8 母音体系 (甲類 /a i₁ u e₁ o₁/ + 乙類 /i₂ e₂ o₂/, Frellesvig 2010 §3.4) と、東遷した呉音層 (5-6 世紀朝鮮半島経由) の字音整理。中央資料は沼本克明『日本漢字音の歴史』(1986)、有坂秀世『国語音韻史の研究』(1957)、高山倫明『日本語音韻史の研究』(2012)、Bjarke Frellesvig, *A History of the Japanese Language* (CUP 2010)、Alexander Vovin, *A Reference Grammar of Classical Japanese Prose* (2003)、坂井健一『魏晋南北朝字音の研究』、平山久雄『中古漢語音韻』(2003)。万葉仮名甲乙の判定は森博達『日本書紀の謎を解く』(1999) と『万葉集の音韻』。

**Reviewer perspective:** Third-round audit of the `ja_ojp` column ONLY, post-#42-fixes. The file's *registered definition* of `ja_ojp` is now load-bearing: HAN_LANG_META["ja_ojp"] declares `name: "Old Japanese on-yomi (7-8c.)"`, `native: "上代日本語呉音"`, `reading_type.en: "Old Japanese on-yomi (pre-Heian Wu reading)"`. **That is dispositive.** The row is by-design a **Sino-Japanese 呉音 (go-on) layer**, NOT a native Yamato (kun) layer. This frame reverses some prior reviewers' suggestions: native OJ words (*uma, kokoro, uwo, pasiru, kiku*) categorically **do not belong** in ja_ojp; they belong in ja_kun. Furthermore the 甲乙 (kō/otsu) diacritic — a property of *inherited Yamato* vowels — categorically **cannot** appear on a go-on borrowing. Round-3 therefore re-frames every prior "either give Yamato or strip 乙" issue as a one-way fix: strip the 乙, never insert Yamato.

**File reviewed:** `hanmap_data.js`, ja_ojp column of HAN_DATA (surface + ipa + native fields), all 59 characters in HAN_LIST (61 cells counting 中:1/中:2 and 行:1/行:2 splits).
**Cross-row anchors used:** `ja` (modern standard on-yomi), `ja_kgs`/`ja_okn`/`ja_thk` (peripheral-dialect on-yomi descendants), the HAN_LANG_META `ja_ojp.reading_type` definition (= 呉音 layer), HAN_VARIANTS go-on/kan-on labels.
**Verification method:** every "Current" value below quoted from live `develop` HEAD `hanmap_data.js`.

---

## Issues found

### 1. 去 — `ja_ojp` `ko1` / [ko] — the LAST remaining 甲乙 diacritic on a Sino-Japanese loan; round-2 reviewer's "kō exemplar" conclusion is wrong

- Current: `surface: "ko1"`, `ipa: "ko"`, `native: "コ"`
- Expected: `surface: "ko"`, `ipa: "ko"`, `native: "コ"` — strip the `1`
- Why: this is the **sole surviving** kō/otsu (甲乙) marker in the entire ja_ojp column after #15/#42 stripped 木目魚聞飲走 (verified live: every other cell is digit-free; grep `[12]` on ja_ojp returns only `ko1`). The previous reviewer (#15 #6, #42 #4) called `ko1` "the file's sole correct kō/otsu datum and should be the reference exemplar." **That conclusion was a category error.** 去 こ is the **go-on of 去** (MC 去 *kʰɨə_H, 御韻; standard go-on コ, kan-on キョ — 漢字源 entry 去 「[呉]コ [漢]キョ」), i.e. a Sino-Japanese loan syllable. The 甲乙 (kō/otsu) machinery was a property of **inherited Yamato morphology** (Frellesvig 2010 §3.4.3, Vovin 2003 §1.2); it does not and cannot mark continental loan syllables. The same logic that retired `mo2ku`/`o2n`/`mo2n`/`go2`/`so2u` in #15+#42 applies here. The native OJ kun 去 = *sar-* (correctly in `ja_kun` as `saru`/[saɾɯ]); the 甲乙 contrast on a *non-existent* native OJ etymon for 'go.away/leave' is doubly impossible. **Severity: Medium.** (Single-digit edit, no other field changes.)

---

### 2. ja_ojp register definition is **呉音 (go-on)** — invalidates prior reviewers' "supply Yamato kun" suggestions

- Current (HAN_LANG_META, line 17120-17129): `"name": "Old Japanese on-yomi (7-8c.)", "native": "上代日本語呉音", "reading_type": {"en": "Old Japanese on-yomi (pre-Heian Wu reading)"}`
- Expected: meta is correct; flag is for downstream consistency. **Reviewers #2 #5/#9, #15 #1–#5, and #42 #5–#10, #12 all proposed inserting Yamato forms (*ki₂/me₂*, *uwo*, *kiku*, *nomu*, *pasiru*, *uma*) into ja_ojp cells. Those proposals are categorically wrong** per the meta definition: this row is on-yomi, not kun. Going forward the only legitimate fix family for "spurious 乙 on a loan" is **strip the digit, keep the loan**; never substitute Yamato.
- Why: meta-driven framing changes the worker's #15 round-1 "either/or" verdict (which left items #1-#5 held as a "register-definition question") into a forced choice. The register is *already* defined; the only valid fix is the loan-cleanup path. Round-3 normalises this. **Severity: Documentation / framing — applies retrospectively to closed-but-revertible items.**

---

### 3. 山 — `ja_ojp` `sen` / [sen] / セン — non-existent on-reading; standard go-on is サン, kan-on サン; descendants are サン

- Current: `surface: "sen"`, `ipa: "sen"`, `native: "セン"`
- Expected: `surface: "san"`, `ipa: "san"`, `native: "サン"`
- Why: MC 山 = *ʂɛːn (山韻 開口二等; zh_tang `ʂæn`). Both 呉音 and 漢音 transmit 二等 -ɛ- as Japanese /a/, yielding **サン** in both layers (漢字源「山 [漢・呉]サン」; 大漢和: 山「サン」). There is no historical reading セン for 山 (the form セン belongs to 仙, MC *sjen, a wholly distinct phonogram, 仙韻 三等). The file's three dialect descendants confirm: `ja_kgs` サン/[saɴ], `ja_okn` サン/[saɴ], `ja_thk` サン/[saɴ]. The OJ `sen`/[sen]/セン cannot feed any of them (the vowel is wrong; センがサンに上昇する音変化は不在). This is a **clear local-internal inconsistency** (parallel to the 虎 ku→ko fix in #15 #11): the OJ row is the only outlier vs. three matching descendants. **Severity: High.** (Likely a 仙↔山 字音 confusion at data-entry time.)

---

### 4. 口 — `ja_ojp` `ku` / [ku] / ク — **#15 #10 fix has been reverted in live data**

- Current: `surface: "ku"`, `ipa: "ku"`, `native: "ク"`
- Expected: `surface: "kou"`, `ipa: "kou"`, `native: "コウ"` — restore the #15 round-1 fix
- Why: review #15 #10 set 口 OJ from `ku`→`kou`/`ku`→`kou`/ク→コウ in round-1; #15 round-2 verified `live = kou`/[kou] and closed the file. Round-3 live verification of `hanmap_data.js` HEAD shows the cell has reverted to `ku`/[ku]/ク. MC 口 = *kʰuwX (侯韻 一等; zh_tang `kʰuɪ²¹⁴`); kan-on/go-on both = コウ. Descendants confirm: `ja_kgs` `kō`/[koː], `ja_thk` `kō`/[koː], `ja_okn` `kū`/[kuː]. A bare-mora `ku`/[ku] is the wrong syllable (= the reading of 九). The #15 #10 fix needs to be **re-applied** with whatever process protection prevents another reversion. **Severity: High** (regression of a previously-fixed cell; verified against #15's own round-2 verification statement).

---

### 5. 頭 — `ja_ojp` native: ヅ — surface/ipa fixed to `tou` in #15 #9 but the **native (katakana) field was not migrated**

- Current: `surface: "tou"`, `ipa: "tou"`, `native: "ヅ"`
- Expected: `native: "トウ"` (match the fixed surface/ipa)
- Why: review #15 #9 fixed 頭 OJ surface=`du`→`tou` and ipa=`du`→`tou`, but the **native katakana** field at line 7748 still carries the pre-fix value ヅ (= zu/du). The three fields surface/ipa/native must be co-consistent (every other ja_ojp cell respects this). Dialect descendant natives confirm the long-vowel target: `ja_kgs` native=トウ, `ja_okn` native=ツウ, `ja_thk` native=トウ. The single-character ヅ is incompatible with surface `tou`/[tou] and with the dialect natives. **Severity: Medium** (intra-cell field-divergence bug; coordinated with finding #6 below).

---

### 6. 東 — `ja_ojp` native: ツ — same intra-cell divergence as #5

- Current: `surface: "tou"`, `ipa: "tou"`, `native: "ツ"`
- Expected: `native: "トウ"`
- Why: review #15 #8 fixed 東 OJ surface=`tu`→`tou` and ipa=`tu`→`tou`, but the **native katakana** field at line 10034 retains the pre-fix ツ. Same intra-cell bug class as #5. Dialect descendant natives: `ja_kgs` native=トウ, `ja_okn` native=ツウ, `ja_thk` native=トウ — the long form. **Severity: Medium.**

---

### 7. 虎 — `ja_ojp` native: ク — `ja_kgs` and `ja_thk` natives are コ; OJ native should be コ (not ク)

- Current: `surface: "ko"`, `ipa: "ko"`, `native: "ク"`
- Expected: `native: "コ"`
- Why: review #15 #11 fixed 虎 OJ surface=`ku`→`ko` and ipa=`ku`→`ko`, but the **native katakana** field at line 4818 still says ク. Surface/ipa say `ko` but native says ク — incompatible. Dialect natives at lines 4824-4826: `ja_kgs`=コ, `ja_okn`=ク (Okinawan o→u raising), `ja_thk`=コ. The OJ `ko`/[ko] must have native コ to feed kgs/thk コ and okn-raised ク. **Severity: Medium** (sibling of #5/#6 — three coordinated native-field migration bugs from the #15 #8/#9/#10/#11 fix batch).

---

### 8. 右 — `ja_ojp` `u` / [u] / ウ — bare mora cannot feed ユウ/ユー dialect descendants (coda-loss family, missed in #15 #7-#10)

- Current: `surface: "u"`, `ipa: "u"`, `native: "ウ"`
- Expected: `surface: "iu"`, `ipa: "iu"`, `native: "イウ"` (historical kana of ユウ go-on, MC 右 *ɣɨuX → /jiu/ → /juu/)
- Why: MC 右 = *ɣɨuX (有韻 三等); standard go-on = **ウ** (with /j/ optional in earlier strata) → modern ユウ. The OJ historical kana for ユウ is **イウ** (=iu), parallel to the file's own 上 `zyau` (ジャウ), 鳥 `teu` (テウ), 走 `sou` (ソウ), 行 `gyau` (ギャウ) — all retain the -V coda. The descendants confirm: `ja_kgs` `yū`/[jɯː], `ja_okn` `yū`/[jɯː], `ja_thk` `yū`/[jɯː]. A bare-mora `u`/[u] cannot be the source of [jɯː]. This is a coda-loss case **structurally identical to #15 #8 (東 tu→tou), #9 (頭 du→tou), #10 (口 ku→kou)** but missed in that round because the reviewer prioritised the more visibly broken `tu/du/ku`. The bare `u` is the same error class. **Severity: Medium.**

---

### 9. 九 — `ja_ojp` `ku` / [ku] / ク — same coda-loss as #8; dialects all show キュウ

- Current: `surface: "ku"`, `ipa: "ku"`, `native: "ク"`
- Expected: `surface: "kiu"`, `ipa: "kiu"`, `native: "キウ"` (historical kana of キュウ go-on, MC 九 *kjuwX → /kiu/ → /kjuu/)
- Why: MC 九 = *kjuwX (有韻 三等); go-on = ク (early) → キュウ (developed). The historical kana for キュウ is **キウ**. Descendants: `ja_kgs` `kyū`/[kjɯː], `ja_okn` `kyū`/[kjɯː], `ja_thk` `kyū`/[kjɯː]. A bare `ku` (=ク, monomoraic [ku]) cannot feed [kjɯː] — the palatalised onset and the long vowel both require an /i/ glide that is not in the OJ ancestor. Either the OJ row holds the *early* go-on bare ク (in which case the dialects' palatalised long form is a later development and the OJ→dialect chain is technically discontinuous — defensible but ambiguous) **or** the OJ row should give the historical-kana form キウ that is the genuine pre-modern ancestor of [kjɯː]. The latter matches the file's policy on 上/鳥/走/行/東/頭/口. Note this is **not** the same as the 虎 ku→ko fix (which was a vowel-quality error); 九 ku→kiu is a coda-vowel/palatal-glide preservation. **Severity: Medium.**

---

### 10. 牛 — `ja_ojp` `gu` / [ŋu] / グ — same coda-loss as #8/#9; dialects ギュウ

- Current: `surface: "gu"`, `ipa: "ŋu"`, `native: "グ"`
- Expected: `surface: "giu"`, `ipa: "ŋiu"`, `native: "ギウ"` (historical kana of ギュウ go-on, MC 牛 *ŋjuw → /ŋiu/ → /gjuu/)
- Why: MC 牛 = *ŋjuw (尤韻 三等; zh_tang `ŋɨu`); go-on/kan-on = ギュウ (漢字源「牛 [漢・呉]ギュウ」). Historical kana for ギュウ is **ギウ**. Descendants: `ja_kgs` `gyū`/[gjɯː], `ja_okn` `gyū`/[gjɯː], `ja_thk` `gyū`/[ŋjɯː] (Tōhoku 鼻濁音; this row preserves the OJ ŋ-). The bare `gu`/[ŋu]/グ cannot feed [gjɯː] / [ŋjɯː]. Sister of #9. **Severity: Medium.**

---

### 11. 中:1 / 中:2 — `ja_ojp` `tyu` / [tʲu] / チュ — review #42 #17 NOT applied in live data; same coda-loss family

- Current (both senses, lines 8859/8956/8994 and 9083/9179/9209): `surface: "tyu"`, `ipa: "tʲu"`, `native: "チュ"`
- Expected: `surface: "tyuu"`, `ipa: "tʲuː"`, `native: "チュウ"`
- Why: review #42 #17 (with Medium severity) called for `tyu` → `tyuu` on both 中:1 and 中:2; the round-1 dev-response section at #42 file end claims 19 edits were applied via `.wf_hanmap_apply.mjs`. Round-3 live verification: BOTH 中 entries still hold `tyu`. The fix did not land for the 中 row. MC 中 = *ʈuŋ (東韻三等); go-on/kan-on = チュウ (modern). Historical kana = チュウ. Dialect descendants: `ja_kgs` `chū`/[t͡ɕɯː], `ja_okn` `chū`/[t͡ɕɯː], `ja_thk` `chū`/[t͡ɕɯː] — all confirm the long-vowel target. **Severity: Medium** (carry-forward from #42; non-applied).

---

### 12. 行:2 — `ja_ojp` `gyau` / [ŋʲau] / ギャウ — wrong sense; 行:2 should be カウ (kan-on of háng), not ギャウ (go-on of xíng)

- Current (line 10975/11072/11107): `surface: "gyau"`, `ipa: "ŋʲau"`, `native: "ギャウ"`
- Expected: `surface: "kau"`, `ipa: "kau"`, `native: "カウ"` (historical kana of コウ, kan-on of 行 háng; MC 行 háng *ɣæŋ)
- Why: 行 has two senses split in HAN_LIST: 行:1 (xíng, 'go/conduct'; HAN_VARIANTS label `行為 (行動)`) and 行:2 (háng, 'row/category'; label `行業・銀行・行列`). The two senses have **different MC sources** and hence **different on-readings**:
  - 行:1 xíng MC *ɣæŋ (庚韻 開口) → go-on ギョウ, kan-on コウ
  - 行:2 háng MC *ɣɑŋ (唐韻 開口) → go-on ガウ→ゴウ, kan-on カウ→コウ
  The file correctly differentiates the dialect rows: 行:1 dialects = ギョウ/ギョウ/ギョウ (go-on); 行:2 dialects = コウ/クウ/コウ (kan-on of háng). But the **OJ row is identical** between the two senses (both = `gyau`/ギャウ), conflating the senses. The 行:2 OJ should be **カウ** (=`kau`, historical kana of コウ matching dialect descendants コウ/クウ/コウ). **Severity: Medium-High** (sense-conflation in a sense-split character).

---

### 13. 飲 — `ja_ojp` `on` / [on] / オン — stratum mismatch with descendants (OJ=go-on オン, dialects=kan-on イン)

- Current: `surface: "on"`, `ipa: "on"`, `native: "オン"`; dialects (live): `ja_kgs` `iɴ`, `ja_okn` `iɴ`, `ja_thk` `iɴ`
- Expected: choose ONE stratum; either OJ=`im` (=イム, historical kana of イン kan-on, matching dialects) OR change dialects to オン. Recommended given ja_ojp meta = 呉音: keep OJ=`on` (go-on) AND change the three dialect rows to match the go-on (since the dialect rows in this file generally inherit from the OJ ancestor stratum).
- Why: MC 飲 = *ʔɨmʔ (寝韻); standard 呉音 = **オン** (←オム), 漢音 = **イン** (←イム). The file's OJ row gives the go-on オン (which matches the meta definition `ja_ojp = 呉音`), but the dialect rows for kgs/okn/thk give the kan-on イン. The OJ→dialect chain is therefore **discontinuous in stratum** for this character. Compare the parallel 聞 character (#14 below): same stratum split, same issue class. **Severity: Medium.**

---

### 14. 聞 — `ja_ojp` `bun` / [bɯɴ] / ブン — stratum hybrid; bun is kan-on but file's stated row is 呉音

- Current: `surface: "bun"`, `ipa: "bɯɴ"`, `native: "ブン"`
- Expected: under the `ja_ojp = 呉音` register definition, this should be **モン** (=`mon`/[mon]), the go-on of 聞
- Why: MC 聞 = *mjun (文韻 三等); 呉音 = **モン**, 漢音 = **ブン** (m→b devoicing rule under kan-on; 沼本 1986 §4.2). The file gives `bun`/ブン which is the kan-on, contradicting the row's stated `native: "上代日本語呉音"` definition. Compare 木/目 OJ = モク (go-on, correctly) vs. their `ja` row variant ボク (kan-on, in HAN_VARIANTS). The ja_ojp row should hold the go-on モン, not kan-on ブン. Round-3 note: in #15 #3 + #42 #6 reviewers had flagged 聞 OJ as `mo2n` (with spurious 乙) and the #42 fix stripped the digit, yielding `mon`. But live data now shows `bun`, suggesting either the fix overshot (changed mon→bun) or a *separate* edit overwrote the corrected go-on with the kan-on. Either way, the current `bun` is wrong under the meta definition. **Severity: High** (active stratum violation against the row's own declared definition).

---

### 15. 耳 — `ja_ojp` `ni` / [ɲi] / ニ — go-on form correct; but **dialect descendants are all ジ (kan-on)**, creating a vertical stratum split

- Current: `surface: "ni"`, `ipa: "ɲi"`, `native: "ニ"`; dialects: `ja_kgs` `d͡ʑi` (ジ), `ja_okn` `d͡ʑi` (ジ), `ja_thk` `d͡ʑi` (ジ)
- Expected: dialect rows should derive from the same stratum as OJ. Either keep OJ=ニ (go-on) and change dialects to ニ, OR change OJ to ジ (=`zi`/[d͡ʑi]/ジ) to match dialects.
- Why: MC 耳 = *ɲɨX (止韻 三等); 呉音 = **ニ** (preserves nasal palatal), 漢音 = **ジ** (palatal→affricate). The file's two row, 二 (= go-on ニ everywhere across OJ + 3 dialects) is internally consistent; 耳 breaks this — OJ go-on but dialects kan-on. Per `ja_ojp` meta = 呉音, the OJ value `ni` is correct and the dialect rows are the deviants. **Severity: Medium** (cross-row stratum inconsistency; resolution depends on whether the dialect rows are defined as 'modern standard on-reading' or 'cognate-of-OJ-ancestor').

---

### 16. 月 — `ja_ojp` `gwati` / [ŋwati] / グヮチ — historic 合口 /gw/ correctly preserved; confirmation entry

- Current: `surface: "gwati"`, `ipa: "ŋwati"`, `native: "グヮチ"`
- Expected: noted only — correct preservation of the OJ labialised velar onset
- Why: MC 月 = *ŋjwɐt (元韻 合口三等); 呉音 = ガチ→グヮチ (historical kana with /gw/). The file preserves the labio-velar onset (gw / ŋw) and the historical kana digraph グヮ, which is correct EMJ orthography (Frellesvig 2010 §4.3.1 on the EMJ /gwa, kwa, swa/ series). The -ti coda also correctly preserves the -t reflex of MC *-t before the EMJ /ti/→/tɕi/ shift. **Severity: None / confirmation entry.**

---

### 17. 水 — `ja_ojp` `swi` / [swi] / スヰ — historic 合口 /sw/ correctly preserved; confirmation entry

- Current: `surface: "swi"`, `ipa: "swi"`, `native: "スヰ"`
- Expected: noted only — correct preservation of the OJ labialised sibilant onset + /wi/ rime
- Why: MC 水 = *ɕwijX (脂韻 合口三等); 呉音 = スヰ (with the famous /wi/ kana). The file preserves both /sw/ onset and /wi/ rime, which is the canonical Nara-period reconstruction. Consistent with the file's #16 月 グヮチ policy. **Severity: None / confirmation.**

---

### 18. 火 — `ja_ojp` `kwa` / [kwa] / クヮ — 合口 /kw/ preserved (parallel to #16/#17); confirmation entry

- Current: `surface: "kwa"`, `ipa: "kwa"`, `native: "クヮ"`
- Expected: noted only — correct
- Why: MC 火 = *xwaːX (果韻 合口一等); 呉音 = クヮ (historical kana, /kw/-labialised). Same labio-velar preservation policy as 月/水. The file's three labio-velar cells (火/月/水) form a coherent set. **Severity: None / confirmation.**

---

### 19. 馬 — `ja_ojp` `me` / [me] / メ — confirmation that **go-on メ is the correct register choice** (despite #42 #12 ambiguity)

- Current: `surface: "me"`, `ipa: "me"`, `native: "メ"`
- Expected: noted only — `me`/[me]/メ is the 呉音 of 馬 (used in Buddhist compounds 馬頭観音 etc.) and is correct for the `ja_ojp = 呉音` row
- Why: review #42 #12 flagged this as "ambiguous" between native OJ *uma* and the marginal go-on メ, suggesting the Yamato form *uma* might be preferable. Under the round-3 framing (issue #2 above), the meta `ja_ojp = 呉音` definition resolves the ambiguity: **the go-on メ is the correct choice for this row**, and *uma* belongs (and already lives) in `ja_kun`. 漢字源「馬 [呉]メ・マ [漢]バ」 confirms メ as a recognised go-on. The dialect rows give kan-on バ, creating the same vertical stratum split as #13/#14/#15 (OJ go-on, dialects kan-on), but the OJ cell itself is internally correct. **Severity: None / confirmation** (closes the #42 #12 ambiguity).

---

### 20. 魚 — `ja_ojp` `go` / [ŋo] / ゴ — confirmation post-#42 fix; correct go-on

- Current: `surface: "go"`, `ipa: "ŋo"`, `native: "ゴ"`
- Expected: noted only — correct go-on after stripping the spurious otsu marker in #42
- Why: MC 魚 = *ŋjɨə (魚韻 三等); 呉音 = ゴ (= /ŋo/, ŋ-preservation in OJ). Post-#42 the cell is plain go-on ゴ without the discredited otsu `2`. The OJ ŋ- is correctly retained in the IPA [ŋo] (parallel to 月 [ŋw], 牛 [ŋu], 五 [ŋo]) — this is the standard OJ go-on preservation of MC voiced nasals. Dialects all give ギョ (kan-on) — same vertical stratum split as 飲/聞/耳/馬, but OJ cell itself is correct. **Severity: None / confirmation** (closes #15 #2 + #42 #9 chain).

---

### 21. 木 / 目 — `ja_ojp` `moku` / [moku] / モク — confirmation post-#42 fix; correct go-on

- Current (both characters): `surface: "moku"`, `ipa: "moku"`, `native: "モク"`
- Expected: noted only — correct go-on after stripping the spurious otsu in #42
- Why: MC 木 = *muwk (屋韻 一等), 目 = *mjuwk (屋韻 三等). Both = 呉音 モク (modern 木 ボク is kan-on of 目's MC type, transferred). Post-#42 both cells are clean モク, matching the meta = 呉音 frame. **Severity: None / confirmation** (closes #15 #1 + #42 #7/#8).

---

### 22. 走 — `ja_ojp` `sou` / [sou] / ソウ — confirmation post-#42; historical-kana long form correct

- Current: `surface: "sou"`, `ipa: "sou"`, `native: "ソウ"`
- Expected: noted only — correct
- Why: MC 走 = *tsuwX (侯韻 一等); 呉音/漢音 = ソウ. Post-#42 the spurious otsu was stripped (`so2u`→`sou`). The historical-kana long form ソウ (=sou) is preserved consistently with the file's other -ou cells (頭 tou, 東 tou). Dialect descendants `ja_kgs` `sō`/[soː], `ja_thk` `sō`/[soː], `ja_okn` `sū`/[sɯː] confirm the long-vowel ancestor. **Severity: None / confirmation** (closes #15 #5 + #42 #10).

---

### 23. 八 — `ja_ojp` `pati` / [pati] / パチ — OJ /p/ correctly preserved; confirmation

- Current: `surface: "pati"`, `ipa: "pati"`, `native: "パチ"`
- Expected: noted only — correct
- Why: MC 八 = *pˤat (黠韻 二等); 呉音 ハチ. The file applies the **OJ /p/-preservation policy** (Nara-stratum reconstruction prior to the /p/→/ɸ/→/h/ lenition chain; Frellesvig 2010 §6.3). Parallel cells using the same policy: 立 OJ `ripu`/リフ, 北 OJ `poku`/ポク. The -ti coda also correctly preserves the EMJ /ti/ before the /tʃi/ palatalisation. **Severity: None / confirmation** of the file's /p/-preservation convention.

---

### 24. 北 — `ja_ojp` `poku` / [poku] / ポク — OJ /p/ preserved; confirmation

- Current: `surface: "poku"`, `ipa: "poku"`, `native: "ポク"`
- Expected: noted only — correct
- Why: MC 北 = *pˤək (徳韻 一等); 呉音 ホク → Nara *poku. Consistent with #23 八 *pati* and 立 *ripu* under the file's /p/-preservation convention. **Severity: None / confirmation.**

---

### 25. 立 — `ja_ojp` `ripu` / [ripu] / リフ — OJ /p/ + -p coda both preserved; confirmation

- Current: `surface: "ripu"`, `ipa: "ripu"`, `native: "リフ"`
- Expected: noted only — correct
- Why: MC 立 = *lip (緝韻 三等); 呉音 リフ → modern リツ via -p→-ɸ→-u (Frellesvig 2010 §4.4.3). The file uniquely preserves both the OJ /p/-onset (no onset, but the -p-coda) and the historical kana リフ. Parallel: 十 `zipu`/ジフ (same -p coda treatment). **Severity: None / confirmation.**

---

## Summary table

| # | Char | Issue | Severity |
|---|------|-------|----------|
| 1 | 去 | `ko1` — last surviving spurious 甲乙 digit; strip to `ko` | Med |
| 2 | (meta) | `ja_ojp = 呉音` definition is dispositive; no Yamato substitutions | Documentation |
| 3 | 山 | OJ `sen` — non-existent; should be `san` (cf. dialects all サン) | **High** |
| 4 | 口 | OJ `ku` — **regression** of #15 #10's `kou` fix | **High** |
| 5 | 頭 | native ヅ — surface fixed but native field stale (cf. #15 #9) | Med |
| 6 | 東 | native ツ — surface fixed but native field stale (cf. #15 #8) | Med |
| 7 | 虎 | native ク — surface fixed but native field stale (cf. #15 #11) | Med |
| 8 | 右 | OJ `u` — coda-loss; should be `iu` (= ユウ historical kana) | Med |
| 9 | 九 | OJ `ku` — coda-loss; should be `kiu` (= キュウ historical kana) | Med |
| 10 | 牛 | OJ `gu` — coda-loss; should be `giu` (= ギュウ historical kana) | Med |
| 11 | 中:1+2 | OJ `tyu` — #42 #17 fix NOT landed; should be `tyuu` | Med |
| 12 | 行:2 | OJ `gyau` — wrong sense; háng kan-on should be `kau` | Med-High |
| 13 | 飲 | OJ `on` (go-on) vs dialects イン (kan-on) — stratum split | Med |
| 14 | 聞 | OJ `bun` — kan-on contradicts row's 呉音 definition; should be `mon` | **High** |
| 15 | 耳 | OJ `ni` (go-on) vs dialects ジ (kan-on) — stratum split | Med |
| 16 | 月 | `gwati`/グヮチ — labio-velar /gw/ correctly preserved | confirm |
| 17 | 水 | `swi`/スヰ — labio-fricative + /wi/ correctly preserved | confirm |
| 18 | 火 | `kwa`/クヮ — labio-velar /kw/ correctly preserved | confirm |
| 19 | 馬 | `me`/メ — go-on; correct per meta=呉音 (closes #42 #12 ambiguity) | confirm |
| 20 | 魚 | `go`/ゴ — post-#42 fix verified; correct go-on | confirm |
| 21 | 木/目 | `moku`/モク — post-#42 fixes verified; correct go-on | confirm |
| 22 | 走 | `sou`/ソウ — post-#42 fix verified; correct historical kana | confirm |
| 23 | 八 | `pati`/パチ — OJ /p/-preservation policy correctly applied | confirm |
| 24 | 北 | `poku`/ポク — same /p/-preservation policy | confirm |
| 25 | 立 | `ripu`/リフ — /p/-onset and -p coda both correctly preserved | confirm |

---

## Cross-row systematic observations

1. **The `ja_ojp = 上代日本語呉音 (go-on)` meta declaration is now load-bearing.** Round-3 framing closes prior reviewers' "either/or" question (whether to insert Yamato or strip 乙): the meta says go-on, so the only valid fix is "strip 乙, keep loan." Going forward, *any* Yamato form in ja_ojp is by definition wrong; *any* 甲乙 digit is by definition wrong.

2. **Three #15 native-field migration bugs** (findings #5/#6/#7: 頭=ヅ, 東=ツ, 虎=ク). The #15 round-1 fix batch updated `surface` and `ipa` but did not update the `native` (katakana) field in the same cell. These are simple text-field syncs.

3. **One #15 fix has regressed in live data**: finding #4 (口 ku→kou fix reverted to ku). The #15 round-2 verification explicitly confirmed `live = kou` at that time. Either the round-2 verification was against a non-HEAD revision, or a subsequent edit reverted it. Worth investigating whether other "verified" fixes from #15/#42 are also regressed.

4. **One #42 fix did not land**: finding #11 (中:1/中:2 tyu→tyuu). The #42 dev response claims 19 edits applied; the 中-row pair was not among them despite being item #17 with Medium severity. The dev response's "applied" count and the live data are inconsistent.

5. **Coda-loss family is incomplete after #15** (findings #8/#9/#10: 右 u, 九 ku, 牛 gu). The #15 #7-#10 coda-loss batch caught 龍/東/頭/口 but missed three more cells with the exact same issue (bare-mora OJ → long-vowel/palatalised dialect descendants). The pattern is: any OJ row whose dialect descendants show -ū/-yū/-ō should be checked for a missing historical-kana coda glide.

6. **Vertical stratum split (OJ go-on vs dialect kan-on)** affects at least 5 cells: 飲 (#13), 聞 (#14, also rows-against-meta), 耳 (#15), 魚 (#20), 馬 (#19), 去 (post-#1 fix). The OJ row consistently holds the go-on (per meta), while dialect rows often hold the modern standard / kan-on. Whether this is a *bug* (dialects should inherit from OJ ancestor) or *by design* (dialects encode modern standard reading, not OJ descendant) is a system-wide policy question.

7. **One sense-split conflation**: finding #12 (行:1 vs 行:2 both = `gyau`). The OJ row collapses two distinct MC sources (xíng *ɣæŋ vs háng *ɣɑŋ) into one reading, even though the file's dialect rows correctly differentiate them. The 中 split, by contrast, is one MC source (*ʈuŋ) split by Mandarin tone-difference only — so OJ identity there is correct; 行 is the only OJ sense-conflation.

---

## Priority fixes (top 8)

1. **去 `ko1` → `ko`** (finding #1) — strip the last surviving spurious 甲乙 digit; single-character edit. Resolves the meta-definition contradiction.
2. **口 OJ `ku` → `kou`/`kou`/コウ** (finding #4) — re-apply the regressed #15 #10 fix.
3. **中:1 + 中:2 OJ `tyu` → `tyuu`/`tʲuː`/チュウ** (finding #11) — apply the missing #42 #17 fix in both senses.
4. **3-cell native-katakana sync**: 頭 ヅ→トウ (#5), 東 ツ→トウ (#6), 虎 ク→コ (#7). Trivial intra-cell field migrations following #15 #8/#9/#11 surface/ipa fixes.
5. **山 OJ `sen`/セン → `san`/サン** (finding #3) — fix the 仙↔山 字音 mix-up; dialect-confirmed.
6. **聞 OJ `bun`/ブン → `mon`/モン** (finding #14) — restore the go-on per meta=呉音 definition; current kan-on contradicts the row's own stated nature.
7. **行:2 OJ `gyau`/ギャウ → `kau`/カウ** (finding #12) — fix the sense-conflation; bring OJ in line with dialect descendants コウ/クウ/コウ.
8. **Coda-loss completion**: 右 `u` → `iu`/イウ (#8), 九 `ku` → `kiu`/キウ (#9), 牛 `gu` → `giu`/ギウ (#10). Three coordinated edits extending the #15 #7-#10 family.

---

File: `/home/jounlai/langmap/hanmap_reviews/59_open.md`
Finding count: 25


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 31
- **policy/skip**: 14
- **headline**: 去 ko1→ko strip 甲乙, 口 ku→kou regression fix, 中:1/中:2 tyu→tyuu #42 carry, 山 sen→san, 聞 bun→mon, 行:2 gyau→kau, 頭/東/虎 native migration, 右/九/牛 coda-loss
- **JSON**: /tmp/hm_edits_59.json
