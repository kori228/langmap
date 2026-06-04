# Hanmap data review #45 — Sino-Korean round-3 audit (ko / ko_bus / ko_hun / ko_kp / ko_mid / ko_zai)

## Reviewer self-introduction (자기소개)

Round-3 follow-up to reviews #3 and #30, with an eye on the loose-end findings that #36 (body parts), #40 (motion verbs), and #35 (numerals) surfaced for the Sino-Korean (한자음) family. My touchstones are the same as for #3/#30: 동국정운(1448) for the prescriptive ko_mid layer, 훈몽자회(1527) for descriptive 현실한자음 / 새김, 조선말규범집 §맞춤법 18 for DPRK 두음법칙 suspension, Kenstowicz & Park (2006) plus Sohn (1999) §3.7 for Gyeongsang pitch-accent → Middle-Chinese-tone correspondences, 곽충구 (1995) for Yanbian (ko_zai is the dataset's Zainichi code but Yanbian-style readings appear in ko_kp's broader ㄹ/ㄴ-initial cohort), 真田・生越 (2005) for Zainichi. Method as before: byte-exact extraction from `/home/jounlai/langmap/hanmap_data.js` via `node -e + require()`, cross-checking every cited cell against its `surface`/`ipa`/`native` siblings and the existing `zh_tang` MC reference.

**Reviewer perspective:** consistency of tone class (MK 평/상/거/입 → ko_bus pitch), 두음법칙 citation-vs-surface convention in the `ko` column, MR vs RR aspirate marking in `ko_kp`, ㆅ/ㅉ/ㄸ/ㅆ initial-jamo agreement in ko_mid, ko_hun completeness across all 59 chars, ko_zai 在日-style Japanese-influenced phonology applied uniformly.

**Scope:** all 59 keys in `HAN_DATA` × 6 Korean codes (`ko`, `ko_mid`, `ko_kp`, `ko_bus`, `ko_hun`, `ko_zai`) × 3 fields (`surface`/`ipa`/`native`), plus `pko` for the proto-Koreanic gap-audit.

---

## Issues found

### 1. 目 — `ko_bus` (surface vs ipa) — internal pitch-class contradiction (surface H, ipa L)
- **Current:** `surface.ko_bus = "mokH"`, `ipa.ko_bus = "mok˩"`
- **Expected (one of):** `mokL` / `mok˩` (matching its sister 木 `mokL` / `mok˩` — m- sonorant 入聲 → L per the round-4 audit rule), OR `mokH` / `mok˥` (if the maintainer wants H).
- **Why:** Surface tag is H (=거성 reflex) but the IPA tone letter is `˩` (=L). The two sub-rows directly contradict each other for the same cell. Round-4 of review #3 explicitly claimed "the dataset is now fully internally consistent on the MK-tone → Gyeongsang-pitch rule" and listed sonorant 入聲 → L using 木/目 as paired anchors — but the surface for 目 was never aligned with the IPA. 目 = 明母 m- (`zh_tang = miuɪk`), the same sonorant /m/-initial class as 木 (`muɪk`); the IPA `mok˩` is the right reflex and the surface `mokH` is the outlier. (Or vice-versa, but one of the two must move.)

### 2. 肉 — `ko_bus` (surface vs ipa) — same surface H vs ipa L contradiction
- **Current:** `surface.ko_bus = "yukH"`, `ipa.ko_bus = "juk˩"`
- **Expected (one of):** `yukL` / `juk˩` (matching 立 `ipL` / `ip˩` and 月 `wolL` / `wɔl˩`, sonorant 入聲 → L), OR `yukH` / `juk˥` (if maintainer wants H).
- **Why:** Same diagnosis as #1. 肉 = 日母 ɲ- (`zh_tang = ɲiuɪk`), a sonorant 次濁 入聲. Sister 立 (l-, 來母, sonorant 入聲) is `ipL` / `ip˩` — both L, internally consistent. 肉's IPA `juk˩` matches that pattern; its surface `yukH` contradicts it. (Note: 日 `ilH`/`il˥` and 六 `yukH`/`juk˥` are H/H — also sonorant 入聲, so the dataset's actual rule for 日母/來母 sonorant 入聲 is *not* uniform L; see issue #18 below for the rule-clarification problem. Independent of that, 肉's surface and IPA must agree.)

### 3. 来 — `ko_bus` (surface / ipa) — missing 거성 H (the same tone-mark error class as 来 ko_mid fixed in review #3 #11)
- **Current:** `surface.ko_bus = "naeL"`, `ipa.ko_bus = "nɛ˩"`
- **Expected:** `naeH` / `nɛ˥`
- **Why:** Review #3 #11 added the `·` 거성 marker to `来.ko_mid = "·loy"` (live: confirmed present), aligning with the file's treatment of 來 as MC 去聲 → MK 거성. The round-3 worker (`#3`) then derived the rule "거성 → Gyeongsang H" and applied it to fix 二 `iH`, 四 `saH`, 中:2 `jungH`, 去 `geoH`, 見 `gyeonH`. The same logic forces `来.ko_bus = naeH` — but the cell remains `naeL` (= 평성 reflex). Either both `ko_mid` and `ko_bus` should reflect 평성 (which the `zh_tang = loj¹²³` superscript 平聲 supports — see #4 below), or both should reflect 거성. The current mix (ko_mid 거성 / ko_bus 평성) is internally contradictory.

### 4. 来 — `ko_mid` vs `zh_tang` — tone class disagreement (`·loy` 거성 vs `zh_tang loj¹²³` 평성)
- **Current ko_mid:** `"·loy"` / `"·ᄅᆡ"` / `"lʌ́j"` (거성, applied in review #3 #11)
- **Current zh_tang:** `"loj¹²³"` (`¹²³` superscript = ambiguous 平聲 in the file's Tang reconstruction convention; cf. 三 `sam¹²³`, 央 `ʔjɐŋ¹²³`)
- **Expected:** verify which layer is wrong. Qieyun 來 = 落哀切 (哀韻 平聲); Baxter–Sagart MC = *m.rˤə > *loj 平聲. The 동국정운 entry for 來 is in fact under 平聲 (권一, 哀韻), so `·loy` was likely an over-correction by review #3. The `zh_tang` superscript `¹²³` confirms 平聲. Fix is to drop the `·` from ko_mid: `loy` / `ᄅᆡ` / `lʌj`. This would also explain why `ko_bus naeL` is correct (平聲 → L) and remove the need for issue #3 above — both cells become 平聲 consistent.
- **(Caveat: I am flagging the contradiction; the maintainer should decide whether 來 = 평성 (zh_tang authority) or 거성 (review #3's appeal to 동국정운 권一 去聲).)** Cannot have both.

### 5. 来 — `ko` (surface / native) — citation 래 inconsistent with sibling 立/龍/六 post-두음법칙
- **Current:** `surface.ko = "rae"`, `native.ko = "래"`
- **Expected (one of):** consistent citation forms across all ㄹ-initial Sino-Korean chars in the `ko` column. Sibling rows show: 六 = `yuk` / `육` (post-두음, ㄹ→ø), 龍 = `yong` / `용` (post-두음), 立 = `ip` / `입` (post-두음), but 来 = `rae` / `래` (citation, ㄹ preserved). One of the four is the outlier.
- **Why:** Standard South Korean orthography applies 두음법칙 word-initially in *all* of {六, 龍, 立, 來}. The way the `ko` column treats this should be uniform: if it shows the post-두음 form for 六/龍/立, it should also show 내 for 來; if it shows the citation form for 來, it should also show 륙/룡/립. The current mixed convention is the most confusing possible state because there is no rule a reader can extract — three are post-두음, one is citation. Note the `ko_bus` and `ko_zai` rows for 来 *do* both write 내 (post-두음), so the `ko` column 래 is the lone holdout. (If the maintainer prefers citation forms, then 六/龍/立 should switch to 륙/룡/립 in the `ko` column to match `ko_kp` — which is the column already explicitly defined as "no 두음법칙".)

### 6. 中:2 — `ko_hun` — `native` cell missing while `surface` is populated
- **Current:** `surface.ko_hun = "majeul"`, `ipa.ko_hun = undefined`, `native.ko_hun = undefined`
- **Expected:** `native.ko_hun = "맞을"`, `ipa.ko_hun = "madʑɯl"` (or similar) — the gerund-attributive of 맞다 "to hit", matching the sense `命中` declared in `HAN_SENSE_LABELS["中:2"]`.
- **Why:** Every other `ko_hun`-bearing entry populates all three sub-rows in parallel (e.g. 食 `meogeul / mʌɡɯl / 먹을`; 飲 `masil / maɕil / 마실`; 走 `dallil / tallil / 달릴`; 立 `seol / sʌl / 설`). The Hangul native and the IPA pronunciation for 中:2 are simply absent, leaving the surface romanization `majeul` with no rendering partners. Compare 行:1 `danil / tanil / 다닐` — the same kind of gerund-attributive, fully populated.

### 7. 央 — `ko_hun` — entirely missing across surface / ipa / native
- **Current:** all three `ko_hun` sub-rows = `undefined`
- **Expected:** `gaunde` / `kaundɛ` / `가운데` — i.e. the same Korean native word as 中:1, since 央 means "centre" and the traditional 새김 for 央 is precisely "가운데 앙" in 訓蒙字會. (Or, if the maintainer wants 央 and 中:1 to differ, 한가운데 "very centre" / 한복판.)
- **Why:** 央 is the only single-character entry in the entire 59-char list whose `ko_hun` is undefined across all sub-rows. Even highly Sino-bound concepts like 行:2 (行列 = rank) do have the row absent because there is no genuine native word, but 央 has a perfectly common native gloss 가운데 that is already used for 中:1. This looks like an oversight rather than a principled gap.

### 8. 魚 — `ko_mid.surface` — literal parenthesised optional letter "G(y)e"
- **Current:** `surface.ko_mid = "G(y)e"`, `native.ko_mid = "ᅌᅥ"`, `ipa.ko_mid = "ŋjə"`
- **Expected:** `Gye` (or `Ge`) — a single resolved string, with the native and IPA brought into agreement.
- **Why:** Literal `(y)` parentheses appear in no other cell of the entire file. The three sub-rows mutually disagree on whether the medial /j/ is present: surface ambiguates with parens, native `ᅌᅥ` has no `ㅕ` (no /j/), ipa `ŋjə` has /j/. 동국정운 권二 prescribed 魚韻 = ㅓ with palatal medial → 동국정운식 reading is ㆁ+ㅕ → `Gye` / `ᅌᅧ` / `ŋjə`. 훈몽자회 retains 어 (no medial) as the 현실한자음. The cell needs to pick one layer and align all three rows.

### 9. 五 — `ko_mid.surface` — ㆁ romanised as "ng" while elsewhere ㆁ = "G"
- **Current 五:** `surface = ":ngwo"`, `native = ":ᅌᅩ"`
- **Other ㆁ-initial entries:** 月 `·Gwelq` / `·ᅌᅯᇙ`; 牛 `Gwu` / `ᅌᅮ`; 魚 `G(y)e` / `ᅌᅥ` (see #8)
- **Expected:** `":Gwo"` (capital G as in 月/牛/魚)
- **Why:** The Yale-Korean romanization convention used throughout this column is single-letter `G` for ㆁ (the velar nasal initial of 疑/雲母 in the 동국정운 framework). 五 alone uses the two-letter digraph `ng`, which the romanization elsewhere reserves for the *coda* ㆁ (e.g. 行:1 `hhoyng`, 龍 `lyong`, 上 `:syang`). The reader cannot tell whether `:ngwo` is meant to parse as ㆁ-onset-ㅗ or as some other cluster.

### 10. 三 / 四 — `ko_hun` — "se / 세" and "ne / 네" use attributive prenominal forms while 5–9 use standalone numeral forms
- **Current 三:** `ko_hun = "se" / "se" / "세"` (attributive, 세 사람 "three people")
- **Current 四:** `ko_hun = "ne" / "nɛ" / "네"` (attributive)
- **Current 五:** `daseot` / `tasʌt̚` / `다섯` (standalone)
- **Current 六–九:** `yeoseot / ilgop / yeodeol / ahop` (all standalone)
- **Expected (one of):** uniform standalone — `三 = "set" / "셋"`, `四 = "net" / "넷"`; or uniform attributive — `五 = "daseot"` ↔ `다섯` is also attributive-OK but `六/七/八` would shift. Cleanest: standalone 셋, 넷 for 三, 四.
- **Why:** The `ko_hun` meta describes itself as the "native Korean reading" / 새김 of each Han character. The 訓蒙字會-style 새김 pairing convention pairs each Hanja with its citation native word: 三 = `셋 삼`, 四 = `넷 사`, 五 = `다섯 오`. The standalone (counting) form is consistently used in this tradition for 1–10. The current data uses the prenominal attributive 세/네 for 三/四 but switches to standalone 다섯/여섯 from 五 onward — no rule for the cutoff. Cross-check with review #35 (numerals) for whether that review already settled this convention; if so, 三/四 are out of sync.

### 11. 一 / 二 — `ko_hun` — `han` / `du` may be attributive too, but the inconsistency runs throughout the small-numeral group
- **Current 一:** `ko_hun = "han" / "han" / "한"` (attributive: 한 사람)
- **Current 二:** `ko_hun = "du" / "tu" / "두"` (attributive: 두 사람)
- **Expected (one of):** standalone — `하나` / `둘` — to match the cleaner 訓蒙字會-style standalone convention, OR the maintainer accepts a documented "attributive forms for 1–4, standalone for 5–9" split (in which case #10 is a no-op).
- **Why:** Same diagnosis as #10. The 訓蒙字會 attestations are 하나 일 / 둘 이 / 셋 삼 / 넷 사 / 다섯 오 / 여섯 육 / 일곱 칠 / 여덟 팔 / 아홉 구 / 열 십. The current dataset uses attributive forms 한/두/세/네 for 1/2/3/4 but standalone for 5–10, which is the modern "one-two-three" learner's-textbook convention (한국어 1+2+3+...) rather than the historical 새김 tradition. Either is defensible, but should be picked and applied uniformly.

### 12. 東 / 西 / 南 — `ko_hun` — bound morphemes from wind names presented as standalone equivalents
- **Current 東:** `ko_hun = "saet" / "sɛt̚" / "샛"`
- **Current 西:** `ko_hun = "hanui" / "hanɰi" / "하늬"`
- **Current 南:** `ko_hun = "matpa" / "mat̚p͈a" / "맞바"`
- **Current 北:** `ko_hun = "noet" / "nøt̚" / "뇟"` (and see #13)
- **Expected:** acknowledge that none of these is a free-standing native word for "east/west/south/north"; they survive only as the bound prefixes in compass-wind names (샛바람 east wind, 하늬바람 west wind, 마파람 / 맞바람 south wind, 높새바람 / 된바람 north wind). Standalone "east" in modern native Korean is at best 동쪽 (Sino) or 새벽-쪽 (rare). If the design intent is to show these bound forms, the 새김 ought to be the *bound* form (샛-, 하늬-, 마-, 높-/뒷-) and the cell should be footnoted; if the design intent is "modern native word", the standard 새김 in textbook tradition is 동녘 / 서녘 / 남녘 / 북녘.
- **Why:** The four cells as currently filled are non-words for most readers. 샛 alone is not a Korean noun; it is only a bound morpheme in 샛바람. 맞바 likewise. 뇟 (see #13) does not exist in the standard lexicon at all. The most defensible 새김 forms historically attested in 훈몽자회/光州千字文 are 새/시/east, 하늬/west, 마/south, 뒤/north — and even those are mostly bound. This row is the dataset's weakest 새김 entry quartet.

### 13. 北 — `ko_hun` — `"noet" / "뇟"` is not an attested Korean lexeme
- **Current:** `surface.ko_hun = "noet"`, `ipa.ko_hun = "nøt̚"`, `native.ko_hun = "뇟"`
- **Expected (one of):** `"dwit" / "twit̚" / "뒤"` (the bound form for north in 뒷바람 / 뒤편), OR `"buk-nyeok" / "북녘"` (Sino-Korean north + native -녘), OR a documented blank if no clean native word exists.
- **Why:** 뇟 (`/nøt̚/`) is not in the 표준국어대사전 or the Korean Language Society's dictionary. It looks like a forced regularisation from `noet̚` patterned on 샛 (east) `/sɛt̚/`, but it has no historical attestation in 훈몽자회, 천자문, or modern dialect records. The earliest attested native "north" in Middle Korean is 뒤 (as in 뒤편), recorded in 龍飛御天歌. Even granting the design choice to use bound wind-prefixes (see #12), 뇟 is the wrong morpheme — 된바람 / 높새바람 attest 된/높새 as the north-wind prefixes, not *뇟.

### 14. 来 / 立 / 龍 — `ko_kp` correctly suspends 두음법칙 ✓ — but `ko_kp` apostrophe convention is non-uniform
- **Current ko_kp aspirate forms:** 七 `ch'il`, 八 `p'al`, 土 `t'o`, 天 `ch'ŏn` — all use apostrophe (MR convention for aspiration) ✓
- **Current ko_kp non-aspirate forms:** 九 `ku`, 七 (above) `ch'il`, 立 `rip`, 月 `wŏl` — no apostrophe ✓
- **No actionable issue:** This sub-row is correct. I am noting the positive verification because reviews #36/#40/#3 spent considerable effort on this and the cross-row consistency stands up. The MR ↔ RR aspirate divide between `ko_kp` and `ko` works cleanly.

### 15. ko_zai IPA epenthesis — review #30's "remove /ɯ/ epenthesis" fix was applied only to 7 of ~13 affected cells
- **Cells fixed (in #30):** 一 `iɾɯ→il`, 七 `t͡ɕiɾɯ→t͡ɕʰil`, 八 `paɾɯ→pʰal`, 月 `woɾɯ→wʌl`, 血 `çjoɾɯ→çjʌl`, 食 `ɕikɯ→ɕik̚`, 立 `ipɯ→ip̚`
- **Cells still showing epenthesis (live):** 三 `samɯ`, 日 `iɾɯ`, 南 `namɯ`, 心 `ɕimɯ`, 六 `jɯkɯ`, 十 `ɕipɯ`, 木 `mokɯ`, 足 `t͡ɕokɯ`, 目 `mokɯ`, 肉 `jɯkɯ`, 北 `pɯkɯ`, 飲 `ɯmɯ`
- **Expected:** either heritage-Korean register throughout (remove epenthesis on all 12 remaining cells → `sam, il, nam, ɕim, juk̚, ɕip̚, mok̚, t͡ɕok̚, mok̚, juk̚, puk̚, ɯm`), OR put epenthesis back on the 7 already-fixed cells.
- **Why:** Review #30 #20 explicitly committed the column to "heritage-Korean register" (no epenthesis). That commitment is now half-applied. The half-applied state is the worst case because a reader sees no consistent rule — sometimes ko_zai = Korean (一 il), sometimes = Japanese-style (三 samɯ).

### 16. ko_zai 右 — `ipa = "ɯ"` — ㅜ → /ɯ/ confusion not caught in review #30
- **Current:** `surface.ko_zai = "u"`, `ipa.ko_zai = "ɯ"`, `native.ko_zai = "우"`
- **Expected:** `ipa = "u"` (parallel to 牛 ipa `u`, 九 ipa `ku`, 口 ipa `ku`)
- **Why:** Review #30 #21 enumerated 8 ko_zai cells with ㅜ→/ɯ/ confusion: "中:1, 中:2, 走, 牛, 九, 口, 手, 水, 頭 — all ipa /ɯ/ → /u/". 右 was not on the list but exhibits the exact same bug pattern: surface and native say ㅜ /u/, ipa says /ɯ/. This is a clean miss.

### 17. ko_zai 来 — `nae` post-두음but `ko_kp` is `rae` — register split is documented, but `ko_zai` IPA matches Korean not Japanese; cross-check
- **Current ko_zai:** `surface = "nae"`, `ipa = "nɛ"`, `native = "내"` — post-두음, Korean phonology
- **Note:** This is internally consistent within the cell, but the broader question is whether ko_zai should apply 두음법칙 at all if the design intent is "Zainichi diaspora Korean" (since most Zainichi communities historically derive from the southern provinces where 두음법칙 *is* applied). I am flagging this as a verification rather than a fix: 来 ko_zai = `내` is the right call **assuming** ko_zai = post-1948 South Korean orthographic convention. If the design intent is "older Zainichi heritage = pre-1933 orthography" the form should be `래`. Worth a one-line note in the column meta either way.

### 18. ko_bus systematic rule — the 入聲 → H/L split documented in #3 round-4 is internally inconsistent for sonorant 來母 / 日母 cohort
- **Cohort live values (sonorant 入聲):**
  - 來母 (l-): 立 `ipL/ip˩`, 六 `yukH/juk˥` — **contradict each other**
  - 日母 (ɲ-): 日 `ilH/il˥`, 肉 `yukH/juk˩` — see #2 (肉 surface/ipa already contradict)
  - 明母 (m-): 木 `mokL/mok˩`, 目 `mokH/mok˩` — see #1 (目 surface/ipa already contradict)
  - 疑母 (ŋ-): 月 `wolL/wɔl˩` — L (consistent with the "sonorant 入聲 → L" rule)
- **Expected:** pick a rule and apply it. The round-4 audit of #3 claimed: "voiced-sonorant 入聲 → L". That rule predicts 立 L (✓), 木/目 L, 月 L (✓), 肉 L, 日 L, 六 L. But the data has 日 H, 六 H, 目 surface H, 肉 surface H. Either the rule is wrong (and the actual rule is more refined — e.g. distinguishing pre-Old Sino-Korean retention of voiceless reflex for 來/日母 from later sonorant 入聲), or six cells (日, 六 surface+ipa, 目 surface, 肉 surface) need to move to L.
- **Why:** Independent of the surface/ipa disagreements in #1/#2, the higher-order claim in review #3 round-4 — "every voiced-sonorant 入聲 → L" — is falsified by 日 and 六 in the live data. The cleanest possible rule that fits the data is **"sonorant 入聲: m-/ŋ-/ɲ-/l- with rhyme /ok/ → L; with rhyme /ip/ → L; with rhyme /il/, /uk/ in the i/y-rounded series → H"**, which is much more ornate than the "sonorant → L" formulation. A note in the column meta documenting the actual pattern (or a uniform fix) would close this open question.

### 19. ko_mid 십 (十) — surface `·sipp` should be `·ssipp` to match the file's ssang-initial convention
- **Current:** `surface.ko_mid = "·sipp"`, `native.ko_mid = "·씹"`, `ipa.ko_mid = "s͈íp̚"`
- **Expected:** `surface = "·ssipp"` (initial ㅆ = `ss`, parallel to `·hh` for ㆅ in 下 `:hha`, `·cc` for ㅉ in 坐 `:ccwa`, `·tt` for ㄸ in 頭 (alternative reading))
- **Why:** The Yale-derived romanization convention in this column doubles initials to mark 동국정운 ssang-initials: 下 `:hha` ↔ `:ᅘᅡ` (ㆅ); 坐 `:ccwa` ↔ `:쫘` (ㅉ); 行:1 `hhoyng` ↔ `ᅘᆡᆼ` (ㆅ); 行:2 `hhang` ↔ `ᅘᅡᆼ` (ㆅ). 十 (禪母, 全濁) should follow: surface `·ssipp` ↔ native `·씹` ↔ IPA `s͈íp̚`. The current single-`s` initial in `·sipp` is the only ssang-initial that omits the romanization marker, even though the native Hangul (씹) and the IPA (`s͈`) both encode the tense/geminate initial. Note that the trailing `pp` is a *coda* marker (geminate written in 동국정운 idealised representation); the singular `s` initial is the missing piece, not the coda.

### 20. ko_mid `·loy` ↔ `·ᄅᆡ` (來) — initial-jamo convention check
- **Current 来 ko_mid:** `surface = "·loy"`, `native = "·ᄅᆡ"`, `ipa = "lʌ́j"`
- **No fix needed if review #4 stands:** The cell is internally consistent — `l` initial in surface, ㄹ initial (`ᄅ`) in native, /l/ in IPA. Flagging only because this cell is the central one in issue #4 above; the *tone* `·` is the contested part, not the initial.

### 21. pko gap audit — 8 chars lack pko entirely, matching the review #3 #13 龍 finding pattern
- **Live missing pko (surface AND native):** 馬, 羊, 貓, 央, 東, 西, 南, 北
- **Live partially-present:** 上 surface `*uh` only (native undefined), 下 surface `*arʌy` only (native undefined)
- **Why:** Review #3 #12-13 added pko for 龍 (`*mir`) because "all other animate nouns with `ko_hun` entries also have `pko` entries". By that same rule, 馬 (`*mʌrʌ` was given in #3's prose), 羊, 貓 — animate nouns — should have pko. The four directions 東西南北 may not have reconstructable Proto-Koreanic forms (since the cardinal-direction lexicon in PK is debated), but the 0/8 ratio for animate nouns is the more pressing gap. (Note: I am only flagging the pattern, not insisting on specific reconstructions — those would need a separate proto-language specialist.)

### 22. ko_kp `ɾ` in IPA — confirm rhotic-vs-lateral allophony for word-initial ㄹ
- **Current ko_kp IPA:** 六 `ɾjuk̚`, 龍 `ɾjoŋ`, 立 `ɾip̚`, 来 `ɾɛ` — all use tap `[ɾ]`
- **Expected:** Confirm whether DPRK Munhwa-eo speakers actually produce a tap or a lateral in word-initial ㄹ. The standard analysis (조선어발음법 §2) prescribes [l] for word-initial ㄹ before non-i/y vowels (래 = [lɛ]) and [ɾ] only in intervocalic position. Word-initially ㄹ before /i/, /j/ can be [l] or [ɾ] (variable).
- **Why:** The current uniform `ɾ` notation is plausible for casual speech but conflicts with the 조선어발음법 prescription. Either way, a one-line meta note clarifying the choice would help. (This is closer to a verification request than a fix.)

### 23. ko_zai coda ㅇ rendered as uvular `ɴ` — verify it's intended
- **Current:** 山 `saɴ`, 龍 `joɴ`, 中:1 `t͡ɕuɴ`, 行:1 `hɛɴ`, etc. — 15 cells use uvular `ɴ` for ㅇ coda
- **Expected:** verify against the column's meta. Japanese /ɴ/ (the uvular moraic nasal at phrase-end) is the standard rendering for the Japanese -ん, but Korean -ㅇ (velar nasal /ŋ/) is phonetically [ŋ], not [ɴ]. Zainichi speakers often realise Korean -ㅇ as Japanese -ん [ɴ], so the choice is defensible — but the column meta does not document it.
- **Why:** No actionable fix; flagging because the uvular `ɴ` is unusual enough to warrant a sentence in the `ko_zai.description` saying "Korean -ㅇ velar nasal is rendered as Japanese-influenced uvular [ɴ]" — currently the reader must infer this.

### 24. 飲 — `ko_bus.surface = "eu:mLH"` — colon placement inside the syllable (between nucleus and coda) is unique
- **Current:** `surface = "eu:mLH"`, `ipa = "ɯːm˩˧"`, `native = "음"`
- **Expected (one of):** `eum:LH` (suffix style matching every other LH char: 五 `o:LH`, 水 `su:LH`, 海 `hae:LH`, 上 `sang:LH`, 下 `ha:LH`, 走 `ju:LH`, etc.), or `:eumLH` (prefix style).
- **Why:** `eu:mLH` is the only LH-bearing cell where the `:` length marker is embedded *between* the nucleus letters (`eu`) and the coda (`m`). Every other LH cell places `:` between the nucleus and the LH pitch tag. The IPA `ɯːm˩˧` clearly puts length on the nucleus (`ɯː`), so the surface should do the same: `eum:LH` (or, formally, decompose to `eu:umLH` if 飲 in MK had a long ᅳᅮ sequence, which it didn't).

### 25. ko_mid `·sipp`, `·lipp`, `·palq`, `·qilq`, etc. — coda doubling convention check
- **Current convention:** -t-入聲 coda → `-lq` in surface (`·qilq`, `·chilq`, `·palq`, `·zilq`, `·Gwelq`, `·hywelq`); -p-入聲 coda → `-pp` (`·sipp`, `·lipp`); -k-入聲 coda → single `-k` (`·zik`, `·zyuk`, `·lyuk`, `·mwuk`, `·mok`, `·pwuk`, `·cwok`); also single `-k` in `·zik̚` (with coda diacritic).
- **Asymmetry:** -t / -p codas are doubled (`lq`, `pp`); -k coda is single (`k`). The doubling for -p (`·sipp`) is inconsistent with the singling for -k (`·zik`). One reading: the file uses `pp` only for the ssang-initial `ㅽ` (a now-defunct digraph that 동국정운 sometimes prescribed for 入聲 /p/ codas); but if so, the romanization should distinguish — `·sipp` = ssang-`ㅂㅅ` cluster, `·lipp` = ssang. Recommend documenting (or normalising to single `p` everywhere, matching the single-`k` convention).
- **Why:** Closely paired with issue #19 — the doubled-letter convention in this column does double duty for (a) ssang-onset and (b) coda emphasis, and the two uses are not formally distinguished. Round-1 of #3 issue #16 noted this for 七/八 (`·치ᇙ`, `·바ᇙ`) and held; flagging again here as a broader meta-documentation gap.

---

## Summary by Korean code

| Code | Open issues |
|---|---|
| `ko` (citation) | #5 (来 두음법칙 inconsistency vs 六/龍/立) |
| `ko_mid` (동국정운) | #4 (来 평성 vs 거성), #8 (魚 G(y)e), #9 (五 ngwo vs Gwo), #19 (sipp ssang missing), #20 (来 init OK), #25 (coda doubling convention) |
| `ko_kp` (DPRK) | #14 (positive verification only), #22 (l vs ɾ allophony verification) |
| `ko_bus` (Gyeongsang) | #1 (目 surface/ipa contradict), #2 (肉 surface/ipa contradict), #3 (来 거성 missed), #18 (sonorant 入聲 rule inconsistent) |
| `ko_hun` (새김) | #6 (中:2 native missing), #7 (央 absent), #10 (三/四 attributive), #11 (一/二 attributive), #12 (directions bound morphemes), #13 (北 뇟 non-word) |
| `ko_zai` (Zainichi) | #15 (epenthesis half-applied), #16 (右 ɯ confusion), #17 (verification only), #23 (ɴ doc gap) |
| `pko` (Proto-Korean) | #21 (8 missing entries) |
| Layer-design (meta) | #24 (飲 ko_bus colon placement), #14 (ko_kp positive) |

## Highest-priority items (clear internal contradictions, not stylistic)
1. **#1, #2** — 目 and 肉 ko_bus surface vs ipa direct contradictions (single-cell internal disagreement)
2. **#3** — 来 ko_bus L violates the file's own 거성→H rule applied to ko_mid `·loy`
3. **#4** — 来 ko_mid 거성 marker contradicts zh_tang 平聲 superscript
4. **#6** — 中:2 ko_hun native cell missing while surface present
5. **#8** — 魚 ko_mid "G(y)e" with literal parentheses
6. **#15** — ko_zai epenthesis fix half-applied (review #30 incomplete)
7. **#16** — 右 ko_zai ipa `ɯ` (review #30 missed this 9th cell)

## Lower-priority / convention-decision items
- **#5, #10, #11, #12, #13** — `ko` 두음 convention and `ko_hun` numeral / direction convention need a design decision before fixing
- **#9, #19, #25** — Yale romanization convention items in `ko_mid` (cosmetic)
- **#14, #17, #22, #23** — verification / documentation requests only

---

**File path:** `/home/jounlai/langmap/hanmap_reviews/45_open.md`
**Findings count:** 25 numbered items (7 high-priority direct internal contradictions; 13 medium-priority convention/consistency findings; 5 verification / documentation suggestions)


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 19
- **policy/skip**: 11
- **headline**: 目/肉 ko_bus surface H→L align IPA, 中:2 ko_hun 맞을 native+ipa, 魚 ko_mid G(y)e→Gye palatal align, ko_zai /ɯ/ epenthesis 12 cells 撤回, 右 ko_zai u
- **JSON path**: /tmp/hm_edits_45.json
