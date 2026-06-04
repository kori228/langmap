# Hanmap data review #42 — Japanese diachronic round-2 (on-yomi strata, OJ 8-vowel, Ryukyuan/Tōhoku phonology)

## Reviewer self-introduction (ペルソナ自己紹介)

専門は日本語史 — 字音史 (呉音・漢音・唐音・慣用音の歴史層) と上代日本語 (Old Japanese, 7-8 c.) の 8 母音体系 (甲類 /a i₁ u e₁ o₁/ + 乙類 /i₂ e₂ o₂/, Frellesvig 2010) と周辺方言 (Ryukyuan/Tōhoku) の通時音論。中央資料は『廣韻』反切 + 沼本克明『日本漢字音の歴史』(1986) + 高山倫明『日本語音韻史の研究』(2012) + Bjarke Frellesvig, *A History of the Japanese Language* (CUP 2010) + Alexander Vovin, *A Reference Grammar of Classical Japanese Prose* (2003). Ryukyuan は Shimoji & Pellard (eds.), *An Introduction to Ryukyuan Languages* (2010) と 中本正智『琉球語音韻の研究』(1976); Tōhoku は 平山輝男『全国方言基礎語彙』 と Shibatani 1990 ch. 6 で照合。Proto-Japonic は Vovin 2010 (*Koreo-Japonica*) と Whitman 1985 をベース。

**Reviewer perspective:** This is a follow-up audit reading every Japanese-variant cell against live `develop` HEAD post-fixes-from-#2/#15. The systematic Sino-Japanese stratum errors (#1–7 of review #2) and the otsu-vowel misapplications (#1–6 of review #15) have been substantially addressed; this pass targets (i) residual stratum-label uncertainty, (ii) Old Japanese 甲乙 *under*-marking on cells that genuinely deserve the diacritic, (iii) Ryukyuan /e/→/i/ + /o/→/u/ rule consistency across the 30+ ja_okn cells, (iv) Tōhoku ɕi/su central-vowel rule application gaps, (v) pja (Proto-Japonic) reconstructions, and (vi) two new cross-row phonological inconsistencies.

**File reviewed:** `hanmap_data.js` (HAN_DATA ja/ja_kgs/ja_kun/ja_ojp/ja_okn/ja_thk/pja rows + HAN_VARIANTS ja entries)
**Characters audited:** all 59 keys in HAN_LIST (including the 行:1/行:2 and 中:1/中:2 split-sense entries)
**Notation observed:** ja_ojp surface uses Yale/Frellesvig digraphs (`kw`, `sw`, `-pu`, `-ti`) and ASCII superscript `1`/`2` for 甲/乙 vowels (e.g. `mo2ku`, `ko1`); ja_okn applies the famous Ryukyuan 3-vowel raising (e→i, o→u); ja_thk applies central-vowel ɕi/su→[sɯ̈] and intervocalic /k/→[ɡ]; pja prefixes `*` and uses central /ə/ where reconstructions warrant.

---

## Issues found

### 1. 五 — `ja_kun` (surface/ipa) — bare `itsu` collides with 一 ja_kun stem family; canonical kun is `itsu(tsu)`

- Current: `surface: "itsu"`, `ipa: "it͡sɯ"`, `native: "いつ"`
- Expected: `"itsutsu"` / `"it͡sɯt͡sɯ"` / `"いつつ"` — the citation kun of 五
- Why: the bare counter stem いつ is *not* the citation kun; standard refs (大辞林・NHK 発音アクセント新辞典) give 五 = **いつつ** as the kun, parallel to 九 ja_kun `kokono` *→ ここのつ* and 七 ja_kun `nana` *→ ななつ* (file already gives the bare stems for 7/9, so this is a row-wide pattern, not an isolated 五 issue). However 五 is the only entry where the bare stem `itsu` is identical to a *Sino-Japanese reading* of another character: 一 ja_okn `itsu` and 一 ja_thk `itsu` (and 七 ja_okn `shitsu` partial overlap). The 一/五 kun-vs-on collision under bare-stem citation is exactly the 一/人 `hito` collision flagged in review #15 #12; same fix family. **Severity: Low.** Parallel issue affects 一, 七, 九 (all bare counter stems, same row-wide convention question).

---

### 2. 七 — `ja_thk` — central-vowel rule applied to ɕi but not ɕu; expect [sɯ̈t͡sɯ̈] not [sɯ̈t͡sɯ]

- Current: `surface: "shitsu"`, `ipa: "sɯ̈t͡sɯ"`
- Expected: `ipa: "sɯ̈t͡sɯ̈"` — both ɕi *and* the post-affricate vowel ɯ should centralise to [ɯ̈]
- Why: the Tōhoku ズーズー弁 central-vowel rule (the eponymous *zūzū-ben*) applies to **both** ɕi/su sequences identically: 四 ja_thk shows `sɯ̈` for ɕi correctly, but 七 only centralises the first syllable while leaving the affricate's release vowel as plain [ɯ]. Compare 心 ja_thk `ɕiɴ` → `sɯ̈ɴ` (correct full centralisation) vs 七 `ɕit͡sɯ` → `sɯ̈t͡sɯ` (centralises ɕi but not the t͡sɯ release). The same gap shows in 十 ja_thk `ɕɯː` (uncentralised — should be `sɯ̈ː`), 手 `ɕɯː` (same), 上 `ɕoː` (no central-vowel context, OK), 食 `ɕoɡɯ` (no si/su, OK), 七 `ɕit͡sɯ` and 十 `ɕɯː` are the diagnostic cases. **Severity: Medium.**

---

### 3. 四 — `ja_thk` — central-vowel marked in IPA but not in surface; surface should reflect the central vowel

- Current: `surface: "shi"`, `ipa: "sɯ̈"`
- Expected: `surface: "sï"` or `"sï"` / `"si"` (the Tōhoku non-palatalised) — the IPA [sɯ̈] is *not* [ɕi]; it is a non-palatal [s] + central vowel
- Why: the ja_thk IPA `sɯ̈` for 四 transcribes a plain alveolar [s] + centralised [ɯ̈], i.e. NOT a palatalised [ɕ]. The surface romanisation `shi` (with palatal `sh`) contradicts the IPA. Standard Tōhoku-ben transcription uses `si` (plain s) or `sï` (with diaeresis for central vowel) for this sound; `shi` is a Standard-Japanese spelling that misrepresents the phonemic merger 四 = ス. Compare 心 ja_thk `shin`/`sɯ̈ɴ` — same surface/IPA mismatch. Consistent fix would be `si`/`sɯ̈` for 四 and `sin`/`sɯ̈ɴ` for 心. **Severity: Medium.**

---

### 4. 月 — `ja_ojp` `グヮチ` (gwati) — kō/otsu unmarked but the rime is reconstructable as 乙 /o₂/

- Current: `surface: "gwati"`, `ipa: "ŋwati"`, `native: "グヮチ"`
- Expected: noted only — the syllable is a Sino-Japanese 呉音 form (MC 月 *ŋĭwɐt*, EMJ /gwati/), so the kō/otsu diacritic does *not* apply (this is correct as-is). Cross-check passes; flagged here only to confirm no missing `2`.
- Why: review #15 flagged six cases of *over*-application of `2` to Sino-Japanese loans (木目魚聞飲走). This entry is the **converse** case — a place where the diacritic correctly does not appear because the syllable is a loan, not an inherited Yamato morph. The historical kana spelling グヮチ (gwati > gatsu) is correctly preserved including the labial-velar /gw/ onset (the OJ /kwa, gwa, swa/ series). **Severity: None / confirmation.** This entry is correct.

---

### 5. 飲 — `ja_ojp` `オン` (o2n / ən) — otsu marker reads `o2n` but the syllable is a loan; review #15 noted this as over-application

- Current: `surface: "o2n"`, `ipa: "ən"`, `native: "オン"`
- Expected: per review #15 #4 — strip the `2` and use plain `on`/`on`, OR supply native verb stem *nom-* (the file already gives ja_kun `nomu`, the native form)
- Why: this is item #4 of review #15 (still open per that file's status: "applied?" check below). Verification in live data shows the `o2n`/[ən] form is STILL present, so review #15's recommended fix was *not* applied. The otsu /o₂/ class is a property of inherited Yamato morphology; the on-reading オン (MC 飲 *ʔɨmH*) cannot bear the diacritic because the syllable is not a native Japonic morph. **Severity: Medium** (same as #15's classification; carried forward).

---

### 6. 聞 — `ja_ojp` `モン` (mo2n / mən) — same over-application of 乙 to a loan; review #15 #3 not applied

- Current: `surface: "mo2n"`, `ipa: "mən"`, `native: "モン"`
- Expected: per review #15 #3 — `"mon"`/`"mon"` (plain go-on loan), or native OJ *kik-* / `kiku₂` (the file already gives ja_kun `kiku`)
- Why: same category error as #5. The モン reading is the 呉音 of 聞 (MC 聞 *mjun*); the 乙 marker belongs to inherited Yamato vowels, not continental syllables. Live-data verification: the `mo2n`/[mən] form is still present. **Severity: Medium** (carried forward from review #15 #3).

---

### 7. 木 — `ja_ojp` `モク` (mo2ku / məku) — same; review #15 #1 not applied

- Current: `surface: "mo2ku"`, `ipa: "məku"`, `native: "モク"`
- Expected: per review #15 #1 — `"moku"`/`"moku"` (plain go-on), or native OJ *ki₂/ko₂* (the kun stem)
- Why: same category error. もく is the 呉音 reading of 木 (MC *muwk*); the `2`/[ə] applies otsu-class machinery to a loan syllable. Live-data verification: still present. **Severity: Medium** (carried forward).

---

### 8. 目 — `ja_ojp` `モク` (mo2ku / məku) — same; review #15 #1 also covered 目

- Current: `surface: "mo2ku"`, `ipa: "məku"`, `native: "モク"`
- Expected: per review #15 #1 — `"moku"`/`"moku"`, or native OJ *me₂*
- Why: 目's on-reading is identical to 木's on-reading (both go-on モク from MC 屋韻 *muwk*); both carry the same spurious 乙 marker. **Severity: Medium** (carried forward; treat as a single coordinated fix with #7).

---

### 9. 魚 — `ja_ojp` `ゴ` (go2 / ŋə) — same loan + spurious 乙

- Current: `surface: "go2"`, `ipa: "ŋə"`, `native: "ゴ"`
- Expected: per review #15 #2 — either native OJ `"uwo"` / `"uwo"` (Wamyō-shō 魚 = ウヲ), or plain loan `"go"`/`"ŋo"` without the `2`
- Why: native OJ for 'fish' is *uwo* (modern うお; cf. file's ja_kun `sakana` which is a Sinosphere/late compound). Loading the 呉音 ゴ with the otsu diacritic is the same category error as #5–8. The genuine native form *uwo* would also be more informative as an OJ ancestor of the modern kun. **Severity: Medium.**

---

### 10. 走 — `ja_ojp` `ソウ` (so2u / səu) — same; OJ historical form would be *sopu (/sopu/ → sōu)

- Current: `surface: "so2u"`, `ipa: "səu"`, `native: "ソウ"`
- Expected: either native OJ `"pasiru"` (matching the file's own ja_kun `hashiru` ← *pasir-*) or, if a Sino-Japanese OJ form is wanted, the Nara-stratum reconstruction `"sopu"`/`"sopu"` (cf. 立 ja_ojp `ripu` already in the file)
- Why: this combines two issues already noted: review #2 #18 (OJ for 走 should be ソフ/sopu per the OJ -p coda retention rule that the file DOES apply to 立 リフ and 十 ジフ) and review #15 #5 (the `2`/otsu marker is spurious on a loan). The two reviewers' fixes converge on the same answer: `pasiru` (native) is the cleanest choice for the OJ row, since the file's OJ row genuinely mixes native and loan readings on a character-by-character basis. **Severity: Medium** (carried forward from #2 + #15).

---

### 11. 鳥 — `ja_ojp` `テウ` (teu) — kun is *tori, not the on-reading; OJ slot holds 呉音 with no 乙 marker (correct)

- Current: `surface: "teu"`, `ipa: "teu"`, `native: "テウ"`
- Expected: noted only — テウ is the historical kana for the 呉音 of 鳥 (MC 鳥 *tewX*); coda preserved correctly. No 乙 marker needed (it's a loan).
- Why: confirmation entry. The OJ row for 鳥 correctly shows the loan with its full diphthong coda (`teu`, not reduced `tu` like the buggy 東 case in review #15 #8). However: the file's ja_kun for 鳥 is `tori` (correctly), so the OJ row could equally carry the native form `tori` (the *modern* kun **is** the OJ form — 鳥 *tori* is unchanged from 萬葉集 spellings 등). Style choice — current is acceptable; flagged as a *consistency note* against the row's mixed native-loan policy. **Severity: None / confirmation.**

---

### 12. 馬 — `ja_ojp` `メ` (me / me) — `me` is the EMJ kun (not OJ); OJ form is *muma or *uma

- Current: `surface: "me"`, `ipa: "me"`, `native: "メ"`
- Expected: `"uma"` / `"uma"` / `"ウマ"` — OJ 馬 = *uma* (萬葉集 phonogram spellings), borrowed from Old Chinese *mraːʔ via *m(u)ma → uma
- Why: the file's ja_kun 馬 = `uma`/`ɯma` is the modern kun reflex. The OJ form is *uma*, with the *m-* shift to *u-* completed by the Nara period (Frellesvig 2010 §3.4.3). The bare `me` in the OJ slot is *neither* the OJ form *uma* nor a documented Sino-Japanese reading of 馬 (the 呉音 is メ but only as a marginal Buddhist reading, e.g. 馬頭観音 メズカンノン; the 漢音 is バ). If the OJ slot holds a Sino-reading, plain `me`/`me` without `2` is OK (it is the 呉音, not native). If the OJ slot intends the native form (matching the row's mixed-policy), it should be `uma`. As-is the `me` is ambiguous and arguably non-native. **Severity: Low-Medium.**

---

### 13. 龍 — `ja_kun` `タツ` (tatsu) — collides with 立 ja_kun; review #15 #18 noted; also 龍 kun is rarely *tatsu* in modern usage

- Current: `surface: "tatsu"`, `ipa: "tat͡sɯ"`, `native: "たつ"`
- Expected: noted — `tatsu` is the zodiacal kun (辰 vs 龍 share the kun via the 干支); but the file's 立 ja_kun is also `tatsu` (the verb stem). Either accept the collision or supply the alternative 龍 kun `"ryū"` (treated as a kun by some grammars due to its early naturalisation) or `"oroti"` (大蛇 'great-serpent', archaic; cf. ヤマタノオロチ).
- Why: this is review #15 #18 still present in live data. Two unrelated characters with byte-identical kun rows. The 立 verb stem たつ is genuine OJ; the 龍 たつ is a Chinese-zodiac-derived assignment. **Severity: Low** (carried forward from #15).

---

### 14. 一 — `ja_kun` `ひと` (hito) — collides with 人 ja_kun; review #15 #12 noted; canonical kun is *hito-tsu*

- Current: `surface: "hito"`, `ipa: "çito"`, `native: "ひと"`
- Expected: per review #15 #12 — `"hitotsu"` / `"çitot͡sɯ"` / `"ひとつ"` (citation kun 一つ)
- Why: live-data verification: 一 ja_kun = `hito` is byte-identical to 人 ja_kun = `hito`. Two semantically distinct kanji with indistinguishable kun rows is a usability issue. **Severity: Low** (carried forward from #15 #12; not applied).

---

### 15. 行:1 — `ja_kun` `いく` (iku) — only one kun shown; the more frequent kun `おこなう` (okonau) is omitted

- Current: `surface: "iku"`, `ipa: "ikɯ"`, `native: "いく"`
- Expected: noted — 行:1 (=xíng, 'go/walk/conduct') has TWO standard kun: *iku* 行く 'go' AND *okonau* 行う 'conduct/perform' (the latter underlies 行為 kōi, 行事 gyōji semantic field). The current cell shows only いく.
- Why: the kun *okonau* is the verb stem behind the 行:1 sense (the file's display label for 行:1 in HAN_VARIANTS already includes 行為 = 'conduct'); omitting it is incomplete coverage. The data model allows only one ja_kun per character, so this is a *model limitation* finding rather than a fixable cell. Flag for documentation. **Severity: Low.**

---

### 16. 央 — `ja_ojp` `アウ` (au) — no kō/otsu marker; the syllable IS a loan (中古音 *ʔjɑŋ*), so unmarked is correct, but native OJ has *naka* (file's 中 ja_kun)

- Current: `surface: "au"`, `ipa: "au"`, `native: "アウ"`
- Expected: noted — `au` is the historical kana of the 漢音 オウ (MC 央 *ʔjɑŋ* > au > ou > oː); the diphthong is correctly preserved. No 乙 marker needed (loan).
- Why: confirmation. 央 has no kun (the file's ja_kun field is correctly empty). The OJ slot holds the loan correctly with `au` (compare 上 `zyau`, 行:1 `gyau`, 羊 `yau` — all retain historical -au coda). **Severity: None / confirmation.**

---

### 17. 中:1 / 中:2 — `ja_ojp` `チュ` (tyu) — OJ row reduces チュウ to bare チュ; mirrors review #15 coda-loss family (#7–10)

- Current (both senses): `surface: "tyu"`, `ipa: "tʲu"`, `native: "チュ"`
- Expected: `"tyuu"` / `"tʲuː"` / `"チュウ"` — the historical kana is チュウ (MC 中 *ʈuŋ*), and the coda vowel is preserved in every dialect descendant (ja_kgs `chū`, ja_okn `chū`, ja_thk `chū`)
- Why: same class as review #15 #7–10 (龍 ryu/ryū, 東 tu/tou, 頭 du/tou, 口 ku/kou). The bare `tyu`/[tʲu] cannot be the source of the [t͡ɕɯː] in all three peripheral-dialect rows; those rows raise/centralise *toward* their reflexes from a chu-with-coda input, not from a bare monomoraic *tyu*. Live data confirms still present in BOTH 中:1 and 中:2 entries. **Severity: Medium** (new finding extending the #15 #7–10 family).

---

### 18. 西 — `ja_ojp` `サイ` (sai) — correct 呉音 form; but native OJ kun is *nisi (=ja_kun nishi), not represented in OJ slot

- Current: `surface: "sai"`, `ipa: "sai"`, `native: "サイ"`
- Expected: noted — サイ is the 呉音 of 西 (MC 西 *sej*); coda preserved. No 乙 marker (loan). Correct.
- Why: confirmation entry. However, observe the policy ambiguity: 西's OJ slot holds the loan サイ, while 山 OJ holds the loan セン (also correct kan-on of 山), while 馬 OJ holds the loan メ (≠ uma), and 鳥 OJ holds the loan テウ (≠ tori). The row mixes native and loan readings *unsystematically* — some characters in the OJ slot give the inherited Yamato form (e.g. 火 クヮ is the loan; 立 リフ is the loan; but 龍 リュ is the loan, 馬 メ is the loan). There is no per-character rule that explains *which* characters get a native OJ form and which get a loan. **Severity: Low (documentation / convention question).**

---

### 19. 海 — `ja_okn` `カイ` (kai) — Ryukyuan /e/→/i/ raising should apply to the diphthong /ai/

- Current: `surface: "kai"`, `ipa: "kai"`, `native: "カイ"`
- Expected: `"kī"` / `"kiː"` / `"キー"` — Okinawan /ai/ → /eː/ → /iː/ regular rule (中本 1976; Pellard 2010)
- Why: the Okinawan vowel-merger applies to **diphthongs as well as monophthongs**: original /e/ → /i/, /o/ → /u/, AND /ai/ → /eː/ → /iː/, /au/ → /oː/ → /uː/. So 海 OJ /kai/ → Okinawan should be /kiː/, not preserved /kai/. The file applies the merger to other /ai/ diphthongs inconsistently: 来 ja_okn `rai` (also preserved, should be `riː`), 西 ja_okn `sii` (correctly merged ai → ii), 央 ja_okn `ū` (correctly merged au → uː). So the file has 西 and 央 applying the rule but 海 and 来 not. **Severity: Medium** (systematic inconsistency).

---

### 20. 来 — `ja_okn` `ライ` (rai) — same /ai/→/iː/ inconsistency as #19

- Current: `surface: "rai"`, `ipa: "ɾai"`, `native: "ライ"`
- Expected: `"rī"` / `"ɾiː"` / `"リー"` (Okinawan /ai/ → /iː/ rule)
- Why: companion to #19. The file's own 西 ja_okn `sii` and 央 ja_okn `ū` demonstrate that the diphthong-monophthongisation rule is part of the row's notation; 海 and 来 are the two diagnostic cases where the rule was not applied. Coordinated fix with #19. **Severity: Medium.**

---

### 21. 火 — `pja` `*pəy` — diphthong /əy/ reconstruction is plausible but vowel quality conflicts with majority Proto-Japonic literature

- Current: `surface: "*pəy"`, `ipa: "*pəi"`
- Expected: `"*pəy"` is *one* plausible reconstruction (Whitman 1985 type), but Vovin 2010 and Frellesvig 2010 give **`*po-i`** or **`*poy`** (with /o/ not /ə/) for 'fire', reflecting the OJ kō/otsu distinction: 火 OJ ヒ is *otsu* /pi₂/ ← *pəy / *poy. The choice of /ə/ vs /o/ for the precursor mid-back vowel is a known dispute.
- Why: the file uses `*pəy` (with central /ə/) which is the Vovin-school reconstruction (oj-otsu vowels = central [ə] series). The Whitman/Frellesvig school uses `*poy` (back rounded). Either is defensible; flag is for citation transparency, not a clear error. Note also that pja IPA `*pəi` uses `i` while surface `*pəy` uses `y` — these should be unified (both /i/ or both /y/-as-semivowel). **Severity: Low** (citation choice).

---

### 22. 月 — `pja` `*tukuy` (surface) / `*tukui` (ipa) — same surface y / ipa i inconsistency as #21

- Current: `surface: "*tukuy"`, `ipa: "*tukui"`
- Expected: unify the final glide notation between surface and IPA
- Why: companion to #21 (and applies row-wide). Surface uses `y` for the final glide of a Vy diphthong (`*pəy`, `*tukuy`, `*upəy`, `*kutuy`, `*minkiri` etc.), while IPA renders the same as `i`. Either convention is acceptable, but the cross-field divergence creates a one-character difference between fields that semantically should match exactly (both pja, both reconstructions). Same issue: 火, 月, 上 (`*upəy`/`*upəi`), 口 (`*kutuy`/`*kutui`), 右 (`*minkiri`/`*minkiri` — this one happens to match). **Severity: Low** (notation consistency).

---

### 23. 心 — `pja` `*kəkərə` — reconstruction matches the OJ kun *kokoro* via the *ə*-vowel hypothesis, but no length on the medial syllable

- Current: `surface: "*kəkərə"`, `ipa: "*kəkərə"`
- Expected: noted — `*kəkərə` is a Vovin-school reconstruction (central /ə/ for the otsu series); the OJ form is *ko₂ko₂ro₂* (Frellesvig 2010), all three syllables 乙. Reconstruction is well-supported.
- Why: confirmation entry. The 4-mora *kəkərə is consistent with the row's other 4-mora reconstructions (*kəkənə for 九). No error. Flagged here to confirm the pja row's otsu-as-/ə/ policy is being applied consistently. **Severity: None / confirmation.**

---

### 24. 龍 — `pja` (missing) — no Proto-Japonic reconstruction in the cell

- Current: `surface: pja` field absent; `ipa: pja` field absent
- Expected: noted — 龍 has no inherited Proto-Japonic word ('dragon' is a Sino-Buddhist import; the kun たつ is a zodiacal naturalisation, not a native Yamato lexeme); the empty pja field is **correct**.
- Why: confirmation entry. Companion empty-pja cells: 虎 (also Sino-cultural import, correctly empty), 貓 (loan from Tang Chinese, correctly empty), 馬 (also a Chinese import per Bjarke Frellesvig's discussion of *uma* < OC *mraːʔ — file has no pja for 馬, which is defensible; some scholars give *muma but most leave blank). The empty-pja convention for "no inherited native word" is followed consistently. **Severity: None / confirmation.**

---

### 25. 北 — `ja_ojp` `ポク` (poku) — OJ *p- preserved correctly (vs modern h-); but 北's go-on is ホク, not ポク

- Current: `surface: "poku"`, `ipa: "poku"`, `native: "ポク"`
- Expected: noted — `poku` is the Nara-stratum reconstruction with the OJ /p-/ initial preserved (the file applies the same rule to 八 OJ `pati` (vs modern hatsu) and 立 OJ `ripu` (vs modern ritsu)). The 'po' form is *not* attested in any extant document — it is a phonological reconstruction.
- Why: confirmation that the OJ row's /p/-preservation policy applies here. This is internally consistent. However, there is a subtle issue: the OJ row gives 北 = *poku* (reconstructed Nara form of the 呉音 ホク) while 火 OJ gives `クヮ` (the EMJ historical kana, not the reconstructed Nara form *kwa with retained labial — though /kwa/ does survive into EMJ orthography). The mixture of "Nara phonological reconstruction" (e.g. *poku) and "EMJ historical kana orthography" (e.g. クヮ) within the same row creates a notational hybrid. **Severity: Low** (notation policy).

---

## Summary table

| # | Char | Row | Issue | Severity |
|---|------|-----|-------|----------|
| 1 | 五 | ja_kun | Bare counter stem `itsu`; canonical is `itsutsu` | Low |
| 2 | 七 | ja_thk | Central-vowel rule applied to ɕi but not following ɯ | Med |
| 3 | 四 | ja_thk | Surface `shi` (palatal) contradicts IPA `sɯ̈` (plain s + central) | Med |
| 4 | 月 | ja_ojp | グヮチ correctly unmarked (no 乙 needed) | confirm |
| 5 | 飲 | ja_ojp | `o2n` — review #15 #4 not applied | Med (carry) |
| 6 | 聞 | ja_ojp | `mo2n` — review #15 #3 not applied | Med (carry) |
| 7 | 木 | ja_ojp | `mo2ku` — review #15 #1 not applied | Med (carry) |
| 8 | 目 | ja_ojp | `mo2ku` — same family as #7 | Med (carry) |
| 9 | 魚 | ja_ojp | `go2`/[ŋə] — review #15 #2 not applied | Med (carry) |
| 10 | 走 | ja_ojp | `so2u` — review #15 #5 + #2 #18 (sopu) not applied | Med (carry) |
| 11 | 鳥 | ja_ojp | テウ correct loan with coda; native could be tori | confirm |
| 12 | 馬 | ja_ojp | `me` is marginal 呉音; native OJ is *uma* | Low-Med |
| 13 | 龍 | ja_kun | `tatsu` collides with 立 — review #15 #18 | Low (carry) |
| 14 | 一 | ja_kun | `hito` collides with 人 — review #15 #12 | Low (carry) |
| 15 | 行:1 | ja_kun | Only `iku` shown; `okonau` also a standard kun | Low |
| 16 | 央 | ja_ojp | アウ correct loan; no kun exists | confirm |
| 17 | 中:1+2 | ja_ojp | `tyu` reduced; should be `tyuu` (cf. #15 #7–10) | Med (new) |
| 18 | 西 | ja_ojp | サイ correct; row-wide native/loan policy ambiguity | Low |
| 19 | 海 | ja_okn | `kai` should be `kī` (Ryukyuan /ai/→/iː/) | Med |
| 20 | 来 | ja_okn | `rai` should be `rī` (same rule) | Med |
| 21 | 火 | pja | `*pəy` surface vs `*pəi` ipa — y/i divergence | Low |
| 22 | 月 | pja | `*tukuy`/`*tukui` — same y/i divergence; row-wide | Low |
| 23 | 心 | pja | `*kəkərə` correctly applies otsu-as-/ə/ policy | confirm |
| 24 | 龍 | pja | (absent) — correct empty per "no native cognate" | confirm |
| 25 | 北 | ja_ojp | `poku` correct OJ /p/-preservation; notation policy | Low |

---

## Cross-row systematic observations

1. **Review #15 issues #1–5 (otsu marker over-applied to loans) NOT applied in live data.** Verified the `mo2ku` / `o2n` / `mo2n` / `go2` / `so2u` cells are all still present, contradicting the worker's round-2 comment that closed-out review #15. Either the review #15 fixes never landed, or they were reverted, or the file state diverged from the round-3 reviewer's confirmation. The 6 affected cells (木目魚聞飲走) need a fresh pass.

2. **Review #15 issue #12 (一 hito = 人 hito) and #18 (龍 tatsu = 立 tatsu) NOT applied** — same conclusion as #1; the kun collision pairs are still byte-identical.

3. **Ryukyuan /ai/→/iː/ rule applied inconsistently** (issues #19–20). The rule fires for 西 sii and 央 ū but not for 海 kai and 来 rai. Same lexical class (CV-ai onset), different treatment.

4. **Tōhoku central-vowel rule fires on the FIRST si/su syllable but not the second** (issues #2–3). 七 `sɯ̈t͡sɯ` and 十 `ɕɯː` show only partial centralisation. The rule should be exceptionless.

5. **pja surface `y` vs IPA `i` mismatch is row-wide** (issues #21–22 + similar). At minimum: 火, 月, 上, 口 all show this exact divergence; minor, but a 1-character normalisation pass would unify.

6. **OJ /p/-preservation vs EMJ historical-kana orthography mixing** (issue #25). The OJ row sometimes shows the Nara reconstructed /p/-form (e.g. `pati`, `ripu`, `poku`) and sometimes shows the EMJ historical kana (e.g. `クヮ`, `ジャウ`). A single-stratum policy would be cleaner.

---

## Priority fixes (top 8)

1. **Re-apply review #15 #1–5** (木目魚聞飲走 OJ otsu over-application) — the 6 cells described in review #15 are still wrong in live data. (Severity Med × 6.)
2. **海 / 来 ja_okn** /ai/→/iː/ rule application: `kai` → `kī` and `rai` → `rī`. (Severity Med.)
3. **中:1 + 中:2 ja_ojp** `tyu` → `tyuu` (coda restored; cf. review #15 #7–10 family). (Severity Med.)
4. **四 / 心 ja_thk** surface/IPA mismatch: `shi`/[sɯ̈] inconsistent — either change surface to `si`/`sï` to match the plain-s IPA, or change IPA to [ɕi] to match the palatal surface. (Severity Med.)
5. **七 / 十 ja_thk** central-vowel rule extension: `sɯ̈t͡sɯ` → `sɯ̈t͡sɯ̈` and `ɕɯː` → `sɯ̈ː`. (Severity Med.)
6. **一 / 五 / 龍 ja_kun** disambiguation (carry from review #15 #12 + #18 + 五 bare-stem): supply citation kun (一つ, 五つ) or document the collisions. (Severity Low.)
7. **行:1 ja_kun** add *okonau* alongside *iku* — model limitation flag. (Severity Low.)
8. **pja surface `y` vs IPA `i` row-wide normalisation** — choose one notation for VV diphthongs. (Severity Low.)

---

File: `/home/jounlai/langmap/hanmap_reviews/42_open.md`
Finding count: 25


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 19
- **policy/withdrawn skip**: 14
- **headline**: ja_ojp 6 chars (飲/聞/木/目/魚/走) otsu over-application 撤回 (review #15 が closed なのに live data に残存していた) ×12, ja_okn 海/来 /ai/→/iː/ apply ×6, ja_thk 四 shi→si ×1
- **JSON path**: /tmp/hm_edits_42.json
