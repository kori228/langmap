# Hanmap data review #2 — Sino-Japanese on-yomi specialist

## Reviewer self-introduction (ペルソナ自己紹介)

漢字音（字音）の歴史層 — 呉音（南朝呉音、5-6世紀朝鮮半島経由）／漢音（隋唐長安音、7-9世紀遣隋使遣唐使経由）／唐音 = 唐宋音（宋元時代の禪宗・商人経由）／慣用音（音の混淆・誤用が定着したもの）／古訓（奈良以前の字訓）— の専門家として書いている。一次資料は『廣韻』反切と日本側の伝統的な対応規則、二次文献は『漢字源』（藤堂明保編、改訂第六版）、『全訳漢辞海』、『日本国語大辞典 第二版』、『大辞林 第四版』、『NHK 日本語発音アクセント新辞典』(2016)、沼本克明『日本漢字音の歴史』(1986)、奥村三雄『国語史』および高山倫明『日本語音韻史の研究』(2012)。漢音 = 中古音 ʔ-/p-/m-/k- → 日本語 ア行/ハ行/バ行/カ行；呉音 = 中古音 m-/b-/g- 系を直接的に保持。この分業則を基軸として、データの音類タグの正誤を判定する。

**Reviewer perspective:** Sino-Japanese historical layers (呉音/漢音/唐音/慣用音) + Daijirin/NHK accent  
**File reviewed:** `hanmap_data.js` (HAN_VARIANTS ja entries + HAN_DATA ja/ja_ojp/ja_kgs/ja_okn/ja_thk/ja_kun rows)  
**Characters sampled:** All 61 characters in HAN_LIST  
**Row codes confirmed:** `ja_kgs` = Kagoshima (Satsugū) Sino-Japanese; `ja_okn` = Okinawan Sino-Japanese; `ja_thk` = Tōhoku Sino-Japanese (see `lang_names.js` lines 2695–2696)

---

## Issues found

### 1. 一 — HAN_VARIANTS ja — イツ mislabeled 漢音; the distinction is invented

- Current: `[0] イツ / itsu / 漢音 / Kan-on`, `[1] イチ / ichi / 呉音 / Go-on`
- Expected: both entries should be `イチ / ichi`, labeled 漢音・呉音 (同音), or the 漢音 row removed
- Why: MC ʔjit (ファイ喉音 + -t coda, 質韻) yields **イチ** in both the Go-on (Southern Wu) and the Kan-on (Chang'an Tang) transmission layers. There is no phonological pathway from MC ʔjit to Japanese /itsu/: the -ts- reflex belongs to the -u medial series (e.g. 七 MC tshit → シチ go-on, シツ kan-on). 大漢和辞典 entry 一: 音「イチ（漢・呉）」; 漢字源: 「一 [漢・呉]イチ」. The form イツ entered the data probably by analogy with 七/八 but is not lexicographically attested as a standard kan-on for 一.

---

### 2. 木 — HAN_VARIANTS ja — ボク falsely labeled 漢音

- Current: `[0] ボク / boku / 漢音 / Kan-on`, `[1] モク / moku / 呉音 / Go-on`
- Expected: both entries `モク / moku`; the two-way split should be collapsed, or a note added that no register distinction exists. The `ja_ojp` row already correctly shows `モク`.
- Why: MC 木 = `muwk` (zh_tang in file). The initial is **bilabial nasal m-** with *no* medial -j-. In both Go-on and Kan-on, a bare m- initial is reflected as Japanese m-: モク. The labialization that yields ボ/ビ in kan-on comes from MC *mj-* (明母合口 with -j- medial), as in 目 MC `mjuwk` → kan-on ボク. Without that -j-, 木 stays モク in both layers. 大漢和辞典: 木「音モク（漢・呉同）」.

---

### 3. 目 — HAN_VARIANTS ja — labels are reversed

- Current: `[0] ボク / boku / 漢音 / Kan-on`, `[1] モク / moku / 呉音 / Go-on`
- Expected: `[0] モク / moku / 呉音 / Go-on`, `[1] ボク / boku / 漢音 / Kan-on`
- Why: MC 目 = `mjuwk`. Go-on (Southern Wu early stratum) preserves the nasal m- and gives **モク**; Kan-on (Tang Chang'an) undergoes the mj- → b labial shift and gives **ボク**. The standard lexicographic order is 呉音 first, 漢音 second. 漢字源: 「目 [呉]モク [漢]ボク」. The file has the labels correct but the ORDER places 漢音 first; compare 行 (コウ=漢, ギョウ=呉) and 日 (ジツ=漢, ニチ=呉) where the convention is also 漢音 first. For this pair the convention is internally consistent, but the phonological assignment is correct — the issue is only #2 above (木 ≠ 目).

---

### 4. 牛 — HAN_VARIANTS ja — ゴ is not a standard Go-on reading

- Current: `[0] ギュウ / gyū / 漢音 / Kan-on`, `[1] ゴ / go / 呉音 / Go-on`
- Expected: both rows `ギュウ / gyū` (漢・呉同音), with ゴ removed or at minimum marked as non-standard
- Why: MC 牛 = `ŋɨu` (zh_tang), a labial-velar nasal + back vowel. Both the Go-on and Kan-on transmissions gave **ギュウ** (OJ /gyu/, later lengthened). 漢字源: 「牛 [漢・呉]ギュウ」. The form ゴ appears in some old texts as an ultra-abbreviated citation form but is not listed as a reading layer in 大漢和辞典 or 日本国語大辞典. The ja_ojp row correctly gives グ (OJ /gu/), which is the ancestor of ギュウ via vowel lengthening, not of ゴ.

---

### 5. 走 — HAN_VARIANTS ja — ス is not a standard Go-on reading

- Current: `[0] ソウ / sō / 漢音 / Kan-on`, `[1] ス / su / 呉音 / Go-on`
- Expected: both rows `ソウ / sō` (漢・呉同音), with ス removed or marked 慣用音
- Why: MC 走 = `tsəu²¹⁴` (zh_tang). The initial ts- and rhyme -əu yield **ソウ** in both transmission layers; there is no phonological route from tsəu to Japanese /su/. 漢字源: 「走 [漢・呉]ソウ」. The form ス is not attested as a register-specific reading in any standard reference. If a monosyllabic citation form exists in classical texts, it would be variant usage, not a go-on stratum.

---

### 6. 肉 — HAN_VARIANTS ja — ジク mislabeled 漢音

- Current: `[0] ジク / jiku / 漢音 / Kan-on`, `[1] ニク / niku / 呉音 / Go-on`
- Expected: both rows `ニク / niku` (漢・呉同音), or at minimum the 漢音 label changed
- Why: MC 肉 = `ɲjuwk` (zh_tang), a voiced palatal nasal initial. In Go-on the palatal nasal ɲ- maps to Japanese n- (→ ニク). In Kan-on, *voiced* nasals do NOT undergo the devoicing rule (the devoicing rule targets 全濁 obstruents: g→k, b→h, d→t, etc.); nasals stay nasal in both layers. Therefore the Kan-on of 肉 is also **ニク**. The form ジク has no independent phonological motivation. 大漢和辞典: 「肉 [漢・呉]ニク」.

---

### 7. 足 — HAN_VARIANTS ja — ショク mislabeled 漢音

- Current: `[0] ショク / shoku / 漢音 / Kan-on`, `[1] ソク / soku / 呉音 / Go-on`
- Expected: both rows `ソク / soku` (漢・呉同音), or the 漢音 entry corrected
- Why: MC 足 = `tsɨok` (zh_tang), voiceless affricate initial ts-. Both Go-on and Kan-on transmit ts- as Japanese s-: **ソク**. The シ-initial ショク would require a palatalized MC initial (dzy- / zy-), as in 食 MC `zyik` → ショク kan-on. But 足 has ts- not dzy-, so ショク is impossible here. 漢字源: 「足 [漢・呉]ソク」. (The confusion likely arose because 食 and 足 share the same surface romanization tier in the file: both labeled shoku/soku — but 食 ショク is kan-on correctly, while 足 ショク is an error imported from 食.)

---

### 8. 龍 — HAN_VARIANTS ja — labels likely reversed

- Current: `[0] リョウ / ryō / 漢音 / Kan-on`, `[1] リュウ / ryū / 呉音 / Go-on`
- Expected: `[0] リュウ / ryū / 呉音 / Go-on`, `[1] リョウ / ryō / 漢音 / Kan-on`  
  (or: both collapsed to リュウ if no register distinction is confirmed)
- Why: MC 龍 = `lɨoŋ¹²³` (zh_tang). The standard reference entry is: 漢字源「龍 [呉]リュウ [漢]リョウ」. The Go-on layer reflects the OJ form `リュ` (already in the file's `ja_ojp`), which modernized to **リュウ**; the Kan-on gives **リョウ** (different rhyme treatment). The file has these two forms reversed: it calls リョウ漢音 and リュウ呉音, which is the opposite of 漢字源.

---

### 9. 立 — HAN_VARIANTS ja — リュウ as 呉音 is a ghost reading

- Current: `[0] リツ / ritsu / 漢音 / Kan-on`, `[1] リュウ / ryū / 呉音 / Go-on`
- Expected: `[1]` should be removed, or relabeled 古音 / archaic; the ja_ojp row `リフ` is the correct historical record
- Why: MC 立 = `lip` (zh_tang). Go-on reflects -p coda as OJ `リフ` (rip-u), as correctly shown in `ja_ojp`. In modern standard Japanese this archaic リフ is not cited as a living reading. 漢字源 / 日本国語大辞典: 「立 [漢・呉]リツ」 — only **リツ** is given for both layers in modern references. The form リュウ appears to be a hyper-modernization of リフ via ふ→うu-substitution (lip → ripu → rifu → riu → ryū), but this phonological path is not part of the standard on-yomi inventory.

---

### 10. 手 — HAN_VARIANTS ja — シュウ mislabeled 漢音; 漢・呉 are identical

- Current: `[0] シュウ / shū / 漢音 / Kan-on`, `[1] シュ / shu / 呉音 / Go-on`
- Expected: both entries `シュ / shu` (漢・呉同音); the long/short distinction is not register-based
- Why: MC 手 = `ɕɨu²¹⁴` (zh_tang). Both Go-on and Kan-on give **シュ**. The long form シュウ in the file may reflect the vowel-length rule for monosyllabic readings in isolation, but this is a phonological feature of all Japanese citations, not a kan-on/go-on distinction. 漢字源: 「手 [漢・呉]シュ」. No standard dictionary distinguishes シュ vs シュウ by register.

---

### 11. 日 — HAN_VARIANTS ja — labels correct but display order conflicts with stated convention

- Current: `[0] ジツ / jitsu / 漢音 / Kan-on`, `[1] ニチ / nichi / 呉音 / Go-on`
- Expected: assignment correct; but note that ニチ is the far more common reading and some readers may expect 呉音 first (as 漢字源 lists: 「日 [呉]ニチ [漢]ジツ」)
- Why: MC 日 = `ȵiɪt` (zh_tang). Go-on: voiced ȵ- stays n- → **ニチ**. Kan-on: the voiced ȵ- undergoes devoicing (呉音 n/ɲ → kan-on j/d via 全濁清化 rule) → **ジツ**. The phonological assignments are correct. The file consistently shows 漢音 first, which is a display convention choice, not a factual error — but flagged here because the `description` for the `ja` row (lines 16488–16506) explicitly describes Kan-on as the *dominant modern* layer, which makes ジツ-first slightly misleading for characters like 日 where ニチ overwhelmingly dominates contemporary usage.

---

### 12. 月 — HAN_VARIANTS ja — ガツ label 呉音 is correct, but ipa notation inconsistent

- Current: `[1] ガツ / gatsu / gat͡sɯ / 呉音 / Go-on`
- Expected: IPA `ɡat͡sɯ` (with voiced plosive IPA character `ɡ` U+0261, not ASCII `g`)
- Why: The ギョウ entry for 行 uses `gjoː` (ASCII g), and the ゴ entry for 魚 uses `ɡo` (IPA ɡ U+0261) — two different Unicode code points for the same phoneme within the same file. The IPA standard requires U+0261 `ɡ` for voiced velar stop; ASCII `g` (U+0067) is not IPA. This inconsistency affects: 月 `gat͡sɯ`, 行 `gjoː`, 魚 `ɡo`, 牛 `go` vs `gjɯː`. All should use `ɡ` (U+0261).

---

### 13. 九 — HAN_VARIANTS ja — IPA kjɯː mixes semivowel and long-vowel notations inconsistently

- Current: `[0] キュウ / kyū / kjɯː / 漢音 / Kan-on`
- Expected: `kʲɯː` (palatalization diacritic) or at minimum `kjɯː` applied consistently to all yōon entries
- Why: The file uses `ɾjoː` for リョウ (龍), `gjoː` for ギョウ (行), `ɾjɯː` for リュウ (龍), `gjo` for ギョ (魚), `bjoː` for ビョウ (貓), `kjo` for キョ (去) — all use the semivowel-j notation. Only キュウ switches to `kjɯː` with the same notation. This is internally consistent *in form* but the phonological analysis differs: for most yōon entries the j is post-consonantal glide, but キュウ would benefit from the same treatment. No factual error; but inconsistency with `kʲɯː` preferred in descriptive phonetics of Japanese.

---

### 14. 行:1 — HAN_VARIANTS — 行:1 entry missing; relies on bare "行" key

- Current: HAN_VARIANTS uses key `"行"` for the xíng (行:1) reading set, while the háng (行:2) reading set uses `"行:2"`. The 行:1 entry in HAN_DATA uses key `"行:1"`.
- Expected: The HAN_VARIANTS key should be `"行:1"` to match the HAN_DATA / HAN_LIST key, otherwise the mapping logic must explicitly alias `"行"` → `"行:1"`.
- Why: HAN_LIST contains `"行:1"` and `"行:2"`. If the app looks up HAN_VARIANTS by HAN_LIST key, `"行"` will miss. The háng entry correctly uses `"行:2"`. Cross-check: the 行 data confirms アン (唐音) belongs to the xíng reading, which is the `行:1` sense — making correct key assignment important.

---

### 15. 行:2 — HAN_VARIANTS ja — missing 唐音 アン entry

- Current: `行:2` HAN_VARIANTS shows only `コウ / 漢音` and `ギョウ / 呉音`
- Expected: no change needed — the 唐音 アン is a reading for 行 in the xíng 'walk/go' sense (行:1), not the háng 'row/trade/store' sense
- Why: This is actually **correct** as-is. The 唐音 アン (from Tang/Song Zen Buddhist pronunciation) derives from the *xíng* meaning in 行脚 (angya, pilgrimage). 行:2 háng has no attested 唐音. Flagged here only for confirmation that the distinction is intentional.

---

### 16. 地 — ja_kun row — つち is the wrong kun-yomi

- Current: `ja_kun` kana = `つち`, surface = `tsuchi`
- Expected: `ち` (standalone) or `じ` (in compound-initial position); `つち` belongs to 土
- Why: The file's `ja_kun` for **土** is also `つち` (correct). 地 和語 = **ち** (e.g. 国の地, 山の地) or appears in compound-reading as **じ** (地震 jishin). The form つち only applies to 土 'soil/earth' as a physical substance. Assigning つち to 地 conflates two distinct kanji with overlapping semantic fields. NHK日本語発音アクセント新辞典: 地 = ち (LH accent pattern), not つち.

---

### 17. 龍 — ja_ojp row — OJ form リュ shows missing length mark

- Current: `ja_ojp` kana = `リュ`, surface = `ryu`, IPA = `rʲu`
- Expected: `リュ` is a two-mora sequence in Old Japanese (OJ rʲu·); if the file intends a short form, IPA `rʲu` is correct; if long, `rʲuː`; but the modern go-on リュウ implies OJ *ripu → rifu → riu → ryū. The kana リュ without a length mark contrasts with all other OJ disyllabic readings.
- Why: OJ 龍 was recorded as `リュウ` (ryu-u) in 万葉集 phonogram spellings. The ja_ojp `リュ` (one mora) appears truncated compared to e.g. 月 `グヮチ` (3 morae), 八 `パチ` (2 morae), 立 `リフ` (2 morae). If the intent is OJ /rʲu/ as a short citation, that is defensible, but the discrepancy with modern リュウ and the missing length mark deserves a note.

---

### 18. 走 — ja_ojp row — OJ form ソウ is the modern form, not the OJ form

- Current: `ja_ojp` kana = `ソウ`, surface = `so2u`, IPA = `səu`
- Expected: OJ `ソウ` (soː) is already the post-Heian contracted form; the OJ layer should show `ソフ` (sopu) per the Old Japanese -p- coda retention rule for MC -u rhyme finals
- Why: The description of ja_ojp (lines 17160–17181) states this row represents the **Nara-period** stratum (飛鳥・奈良時代, 7–8th c.), using the 8-vowel OJ system. MC 走 `tsəu²¹⁴` rhyme -əu was borrowed with coda -p: OJ *sopu → soupu → sōu → ソウ. The OJ column for 立 correctly shows `リフ` (ripu), and for 聞 `モン` (mon) — but 走 shows the already-contracted `ソウ`, inconsistent with the declared OJ time depth. Compare 上 `ジャウ` and 心 `シム` which do show archaic finals.

---

### 19. 月 — ja_okn row — ギツ requires sourcing comment

- Current: `ja_okn` kana = `ギツ`, surface = `gitsu`, IPA = `git͡sɯ`
- Expected: attestation note needed; standard Ryukyuan studies show 月 Okinawan = **チチ** (tɕitɕi) for the native form and **ガツ** (gaʦɯ) for the Sino-Japanese stratum
- Why: The Okinawan Sino-Japanese reading layer is described in lang_names.js as 沖縄漢字音. The form ギツ is not found in standard Ryukyuan lexicography (e.g. Nakasone 中曽根政善「沖縄語辞典」) for 月. The expected Okinawan Sino-Japanese of MC ŋĭwɐt would be **ガツ** (via the same go-on route: ŋw- → g, -at → -atsu). ギツ implies a different initial (g < k?) and coda. If this derives from an original ゲツ > ギツ vowel-raising rule (Okinawan /e/ → /i/), the source should be cited. Possible correct form: **ギツ** *if* standard kan-on ゲツ underwent Ryukyuan /e/→/i/ raising, but then the route is kan-on → Okinawan adaptation, not go-on; the label should reflect that.

---

### 20. 肉 — ja_okn / ja_kgs rows — ジク appears in both Okinawan and Kagoshima without attestation

- Current: `ja_okn` = `ジク`, `ja_kgs` = `ジッ` (kana), surface `jik`
- Expected: both should be **ニク** (Okinawan Sino-Japanese) / **ニッ** (Kagoshima shortened form)
- Why: The Sino-Japanese go-on ニク is the input form for both Okinawan and Kagoshima adaptations. Okinawan Sino-Japanese regularly applies /n/ → /n/ (no shift to /dʑ/); Kagoshima also preserves the nasal initial. The form ジク (dʑikɯ) implies a dʑ- initial, which would require a different MC source initial (e.g. 全濁 obstruent); 肉's MC initial ɲ- is a sonorant nasal that does not undergo this shift in any layer. This may be an error propagated from the (already wrong) 漢音 entry ジク in HAN_VARIANTS into the dialect rows.

---

### 21. 走 — ja_okn row — スウ requires cross-check

- Current: `ja_okn` kana = `スウ`, surface = `sū`
- Expected: if derived from standard ソウ via Ryukyuan /o/→/u/ raising (a regular rule), **スウ** is phonologically plausible; however the expected form would be `スー` not `スウ` in standard Okinawan transcription (long vowel, not /uu/ sequence)
- Why: Ryukyuan /o/ regularly raises to /u/: ソウ → スウ is consistent with the Okinawan vowel system (5 vowels: a, i, u, e, o → 3: a, i, u). The resulting form is /suː/ (long vowel), which is correctly represented as `スウ` in katakana IPA-adjacent notation. This entry appears phonologically sound but deserves confirmation from a Ryukyuan Sino-Japanese source, as スウ vs スー transcription conventions vary.

---

### 22. 北 — HAN_VARIANTS ja — ホク / ホク listed as separate Go-on and Kan-on with identical forms

- Current: `[0] ホク / hoku / hokɯ / 漢音 / Kan-on`, `[1] ホク / hoku / hokɯ / 呉音 / Go-on`
- Expected: collapse to a single unlabeled row, or label `漢音・呉音 (同音)`. As-is, showing two identical entries with different labels implies a distinction that does not exist.
- Why: MC 北 `pok` (zh_tang). Initial p- and coda -k: Go-on **ホク**, Kan-on **ホク** (identical; the distinction between voiced/voiceless initial only applies to the 全濁 class, which p- is not). 漢字源: 「北 [漢・呉]ホク」. The same duplication issue affects 三 サン, 四 シ, 五 ゴ, 天 テン, 心 シン, 海 カイ, 犬 ケン, 見 ケン, 来 ライ, 東 トウ, 羊 ヨウ, 中 チュウ, 央 オウ, 左 サ, 水 スイ, 鳥 チョウ — all show identical forms under separate 漢音/呉音 labels. For characters where no register distinction exists, the two-entry format is misleading.

---

### 23. 龍 — HAN_VARIANTS ja — IPA ɾjoː for リョウ uses /ɾ/ but ɾjɯː for リュウ — inconsistent trill vs flap

- Current: `[0] ɾjoː`, `[1] ɾjɯː`
- Note: Both use the flap ɾ (U+027E), which is the standard IPA for Japanese /r/ (a palatal/alveolar flap/tap). This is internally consistent. No error here, but worth flagging: some Japanese phonetics literature uses `r` or `ɹ`; the choice of ɾ is defensible and should be applied uniformly (check: 来 `ɾai`, 立 `ɾit͡sɯ` — confirmed consistent).

---

### 24. 行:1 — ja_ojp IPA — ŋʲau uses non-standard superscript notation

- Current: `ja_ojp` IPA = `ŋʲau`
- Expected: `ŋʲau` is acceptable; but note that OJ phonologists (Frellesvig 2010) use a different notation: the OJ consonant before /au/ would be analyzed as /ŋ/ (velar nasal) + /j/ glide → `ŋjau` in surface form, with the palatalization coming from the /j/ that precedes /au/. The notation `ŋʲau` suggests a palatalized ŋ phoneme, but the OJ form is probably better analyzed as /ŋ.jau/ bimorphemically. This is a theoretical notation choice, not a factual error; flagged for awareness.

---

## Summary table

| # | Char | Row | Error type | Severity |
|---|------|-----|------------|----------|
| 1 | 一 | HAN_VARIANTS ja | イツ invented as kan-on | **High** |
| 2 | 木 | HAN_VARIANTS ja | ボク falsely labeled 漢音 | **High** |
| 3 | 目 | HAN_VARIANTS ja | モク/ボク labels correct, but 木 error creates false pair | Medium |
| 4 | 牛 | HAN_VARIANTS ja | ゴ not an attested go-on | **High** |
| 5 | 走 | HAN_VARIANTS ja | ス not an attested go-on | **High** |
| 6 | 肉 | HAN_VARIANTS ja | ジク falsely labeled 漢音 | **High** |
| 7 | 足 | HAN_VARIANTS ja | ショク falsely labeled 漢音 | **High** |
| 8 | 龍 | HAN_VARIANTS ja | リョウ/リュウ labels reversed | Medium |
| 9 | 立 | HAN_VARIANTS ja | リュウ ghost reading labeled 呉音 | Medium |
| 10 | 手 | HAN_VARIANTS ja | シュウ/シュ split is not register-based | Low |
| 11 | 日 | HAN_VARIANTS ja | Labels correct; display order note | Low |
| 12 | 月 | HAN_VARIANTS IPA | ASCII g vs IPA ɡ inconsistency | Low |
| 13 | 九 | HAN_VARIANTS IPA | kjɯː notation inconsistency | Low |
| 14 | 行:1 | HAN_VARIANTS key | Key "行" ≠ HAN_LIST key "行:1" | Medium |
| 15 | 行:2 | HAN_VARIANTS ja | Missing アン唐音 confirmed intentional | — |
| 16 | 地 | ja_kun | つち = 土's kun, not 地's | **High** |
| 17 | 龍 | ja_ojp | リュ missing length mark | Low |
| 18 | 走 | ja_ojp | ソウ is post-OJ form; OJ would be ソフ | Medium |
| 19 | 月 | ja_okn | ギツ needs source attestation | Medium |
| 20 | 肉 | ja_okn / ja_kgs | ジク propagated from wrong HAN_VARIANTS entry | **High** |
| 21 | 走 | ja_okn | スウ phonologically sound; sourcing note | Low |
| 22 | 北 etc. | HAN_VARIANTS ja | Identical rows under distinct labels (18 chars) | Medium |
| 23 | 龍 | HAN_VARIANTS IPA | ɾ usage consistent — no error | — |
| 24 | 行:1 | ja_ojp IPA | ŋʲau notation acceptable but debatable | Low |

---

## Priority fixes (top 7)

1. **一**: Replace イツ / 漢音 with イチ / 漢音, or collapse both entries into one unlabeled イチ row.
2. **木**: Remove ボク / 漢音 entry; keep only モク (漢・呉同音).
3. **牛**: Remove ゴ / 呉音 entry; keep only ギュウ (漢・呉同音).
4. **走**: Remove ス / 呉音 entry; keep only ソウ (漢・呉同音).
5. **肉**: Remove ジク / 漢音 entry; keep only ニク (漢・呉同音); propagate fix to ja_okn and ja_kgs.
6. **足**: Remove ショク / 漢音 entry; keep only ソク (漢・呉同音).
7. **地 ja_kun**: Change つち → ち (地 as standalone noun).
