# Hanmap data review #3 — Sino-Korean specialist

## Reviewer self-introduction (ペルソナ自己紹介)

한자음（韓國漢字音 / Sino-Korean）の歴史層を専門とする研究者として書いている。Sino-Korean の歴史的層位 — 古層（5-6世紀朝鮮三國時代の借用、ごく僅か）／中層（統一新羅・高麗の標準層、大部分の現代漢字音の基礎）／東国正韻層（1448 世宗世代の規範化された人工的字音、訓民正音解例直後）／中世韓國語からの近代化 — を主軸として評価する。一次資料は『東國正韻』（1448）影印本、『訓蒙字會』（1527、崔世珍）、『千字文』（光州本、石峯本）、『兒學編』（1908、池錫永）、『新字典』（1915、崔南善）。理論文献は南廣祐『古語辭典』、이기문『國語史概說』、Lee & Ramsey (2011) "A History of the Korean Language"、Martin (1992) "A Reference Grammar of Korean"。中世韓國語の四聲（平上去入）と方点表記、소리값 vs 글자값（東國正韻の理想音と当時実音の乖離）、頭音法則の南北差（韓國の 龍 → 용 / 朝鮮 → 룡、來 → 내 / 래）、慶尚道方言の高低調系統（中世音の入聲・上聲がそのまま現代慶尚方言の高低として保持）を併せて検証する。

**Reviewer perspective:** 漢字音 / 한자음 historical layers, 동국정운 (1448), 訓蒙字會 (1527), 千字文, 두음법칙, Late Middle Korean phonology, Gyeongsang pitch-accent correspondences

**Scope:** `ko`, `ko_mid`, `ko_kp`, `ko_bus`, `ko_hun`, `ko_zai`, `pko` rows across all 61 characters in `HAN_LIST`. All three row-types (`romanized`, `ipa`, `native`/display) inspected. Source for MC tones: Baxter–Sagart (2014); MK tone correspondences per Nam Kwang-wu (南廣祐) 古語辭典 and 동국정운 facsimile.

---

## Issues found

### 1. 二 — `ko_mid` — 상성 tone (`:`) assigned; MC 去聲 requires 거성 (`·`)

- **Current romanized:** `:zi` (`: ` = 上聲 marker)
- **Current display:** `:ᅀᅵ`
- **Expected:** `·zi` / `·ᅀᅵ` (거성)
- **Why:** MC 二 = *nəjH (Baxter–Sagart; H-suffix = 去聲). Qieyun 而至切, 至韻 → 去聲 confirmed. Middle Korean 去聲 is notated with `·` (left-side dot), not `:` (two dots = 上聲). The cross-check is decisive: `ko_bus` for 二 = `iH` (H = 거성 pitch in Gyeongsang, calibrated to MK 去聲), which is correct — but that makes the `ko_mid` `:zi` notation internally inconsistent with `ko_bus`. The confusion may stem from conflating 二 with 耳 (MC *ȵijX = 上聲, correctly `:ᅀᅵ`): both have identical modern readings but different MC tones.

---

### 2. 去 — `ko_mid` — 상성 tone (`:`) assigned; MC 去聲 requires 거성 (`·`)

- **Current romanized:** `:khe`
- **Current display:** `:커`
- **Expected:** `·khe` / `·커`
- **Why:** MC 去 = *kʰ(r)aH (Baxter–Sagart), Qieyun 丘倨切, 御韻 → 去聲. The internal inconsistency is stark: `ko_bus` for 去 = `geoH` / `kʌ˥` (H tone, i.e. 거성), which is correct; but `ko_mid` shows 상성 (`:커`). These two sub-rows contradict each other for the same character.

---

### 3. 中:2 — `ko_mid` — tone mark absent; MC 去聲 requires 거성 (`·`)

- **Current romanized:** `tyung` (no tone marker)
- **Current display:** `듕` (no marker)
- **Expected:** `·tyung` / `·듕`
- **Why:** The HAN_LIST distinguishes 中:1 (zhōng, 平聲) from 中:2 (zhòng, 去聲). Both readings share the same Sino-Korean syllable 중/듕, but their MK tones differ: 中:1 平聲 → no marker (correctly shown), 中:2 去聲 → `·` (거성). The romanized and display rows for 中:2 are identical to 中:1, erasing this distinction. `ko_bus` 中:2 = `jungL` / `tɕuŋ˩` (L-tone, 평성), which is also wrong for a 去聲 character (should be H), so both sub-rows are affected.

---

### 4. 火 — `ko_bus` — H pitch assigned; MC 上聲 requires LH

- **Current romanized:** `hwaH`
- **Current IPA:** `ɸwa˥` (˥ = high-level)
- **Expected:** `hwaLH` / `ɸwaː˩˧`
- **Why:** MC 火 = *qʰʷəjʔ (Baxter–Sagart, X-suffix = 上聲). `ko_mid` correctly records `:hwa` / `hwǎ` (상성). Per the `ko_bus` meta, MK 上聲 → Gyeongsang LH (low-rising, long); MK 去聲 → H; MK 平聲 → L. Assigning H to 火 contradicts both the `ko_mid` 상성 and the MC source tone. Compare 海 (MC 上聲) = `hae:LH` / `hɛː˩˧` (LH — correct) and 下 (MC 上聲) = `ha:LH` / `haː˩˧` (LH — correct): 火 is handled differently without justification.

---

### 5. 土 — `ko_bus` — H pitch assigned; MC 上聲 requires LH

- **Current IPA:** `tʰo˥`
- **Expected:** `tʰoː˩˧`
- **Why:** MC 土 = *tʰˤaʔ (Baxter–Sagart, X-suffix = 上聲). `ko_mid` records `:thwo` / `tʰǒ` (상성). Same mismatch pattern as 火 (#4 above). 土 belongs with 水 (`suː˩˧` LH, 上聲 — correct) and 下 (`haː˩˧` LH — correct), not with 거성 H characters.

---

### 6. 九 — `ko_bus` — H pitch assigned; MC 上聲 requires LH

- **Current IPA:** `ku˥`
- **Expected:** `kuː˩˧`
- **Why:** MC 九 = *kuʔ (Baxter–Sagart, X-suffix = 上聲). `ko_mid` records `:kwu` / `kǔ` (상성). Gyeongsang LH is the expected reflex. Compare 五 (MC 上聲 *ŋˤaʔ) = `o:LH` / `oː˩˧` (LH — correct): 九 should behave identically.

---

### 7. 上 — `ko_bus` — H pitch assigned; MC 上聲 requires LH

- **Current romanized:** `sangH`
- **Current IPA:** `saŋ˥`
- **Expected:** `sangLH` / `saŋː˩˧`
- **Why:** MC 上 = *dzaŋʔ (Baxter–Sagart, X-suffix = 上聲). `ko_mid` = `:syang` (상성, correct). Same mismatch pattern as 火/土/九 (#4–6). The character name 上聲 (upper tone) being miscoded as H (거성) in a dialect that preserves exactly this distinction is a notable irony.

---

### 8. 四 — `ko_bus` — LH pitch assigned; MC 去聲 requires H

- **Current romanized:** `sa:LH`
- **Current IPA:** `saː˩˧`
- **Expected:** `saH` / `sa˥`
- **Why:** MC 四 = *s(ə)jH (Baxter–Sagart, H-suffix = 去聲). `ko_mid` = `·sò` (거성 — correct). Per the `ko_bus` meta, 去聲 → H. LH belongs to 上聲 syllables. The error is the mirror image of #4–7: a 去聲 character given the 上聲 Gyeongsang pitch.

---

### 9. 北 — `ko_bus` — L pitch assigned; MK 거성 (voiceless 入聲) requires H

- **Current romanized:** `bukL`
- **Current IPA:** `puk˩`
- **Expected:** `bukH` / `puk˥`
- **Why:** MC 北 = *pˤɯk (幫母, 入聲). Voiceless-initial 入聲 syllables reflect as MK 거성 (`·`), confirmed by `ko_mid` display `·븍` and romanized `·pwuk`. Per the Gyeongsang correspondence: MK 거성 → H. The file assigns L (= 평성), which is the reflex for MK 平聲 — not for 거성. Compare 一 (MC 入聲 voiceless 影母) = `ilH` / `il˥` (H — correct); 十 (MC 入聲 日母) = `sipH` / `ɕip˥` (H — correct). 北 should pattern with these.

---

### 10. 食 — `ko_mid` — initial consonant ᄊ (ssang-siot) vs ᅀ (pansios) inconsistent with other 日母 characters

- **Current display:** `·씩`
- **Current romanized:** `·zzik` (doubled-z notation)
- **Current IPA:** `zík̚` (single z, voiced)
- **Expected:** `·ᅀᅵᆨ` (pansios initial, consistent with 肉 / 日 / 耳 / 二 / 人)
- **Why:** MC 食 = *ȵɪk (日母, 職韻, 入聲). All other 日母 characters in the file use ᅀ (pansios, U+1140) for the Middle Korean initial: 肉 `·ᅀᆎᆨ`, 日 `·ᅀᅵᇙ`, 耳 `:ᅀᅵ`, 二 `:ᅀᅵ`, 人 `ᅀᅵᆫ`. Using ᄊ (ssang-siot) for 食 alone — giving `씩` — is internally inconsistent. The IPA `zík̚` (single voiced z) moreover contradicts the doubled-z romanized form `zzik`, which would suggest a fortis/geminate. If the intent is to follow 동국정운 retroflex normalization for 食, that choice should be documented and applied uniformly across 日母 characters; as it stands, the treatment is ad hoc.

---

### 11. 飲 — `ko_mid` — IPA vowel `ǔ` (rounded u) contradicts display vowel ᅳ (unrounded eu/ɯ)

- **Current IPA:** `ʔǔm` (breve on u = *rounded* back vowel)
- **Current display:** `:ᅙᅳᆷ` (ᅳ = unrounded central/back vowel, IPA ɯ)
- **Expected IPA:** `ʔɯ̌m` (or `ʔɨ̌m`)
- **Why:** MC 飲 = *ʔɨmʔ (影母, 深攝 B類, 上聲). The 深攝 B-type rhyme regularly corresponds to MK ᅳ (`ɯ`), as confirmed by the display `:ᅙᅳᆷ`. The IPA transcription `ʔǔm` uses a u-diacritic suggesting the rounded back vowel /u/, which is a different phoneme in Korean. The correct IPA rendering should use ɯ (or ɨ), consistent with the Hangul display.

---

### 12. 龍 — `ko_hun` — entry absent; native Korean word "미르/미리" should be present

- **Current:** *(no `ko_hun` entry)*
- **Expected:** `미르` or `미리` (archaic Korean; attested in 龍飛御天歌 1447, 月印千江之曲 1449)
- **Why:** Every other animate/concrete noun in the list has a `ko_hun` entry (虎 = 범, 馬 = 말, 犬 = 개, 牛 = 소, 羊 = 양, 鳥 = 새, 魚 = 물고기). 龍 is the sole exception. The Middle Korean native word for dragon — *mir*, modernized to 이무기 (a water-serpent proxy) — is attested in 15c. texts. The absence is inconsistent with the rest of the dataset.

---

### 13. 龍 — `pko` — Proto-Korean reconstruction absent; compare 虎, 馬, 牛, etc.

- **Current:** *(no `pko` entry)*
- **Expected:** Proto-Koreanic reconstruction (tentative; e.g. *\*mir or undocumented)
- **Why:** All other animate nouns with `ko_hun` entries also have `pko` entries: 虎 = `*pəm`, 馬 = `*mʌrʌ`, 牛 = `*sjo`, 鳥 = `*say`, 魚 = `*koki`, 犬 = `*kahi`. 龍 lacks both `ko_hun` and `pko`, making it a double gap. If the archaic Korean word for dragon cannot be securely reconstructed, a `—` placeholder (used elsewhere for unknown/not-applicable) would be preferable to a silent omission.

---

### 14. 二 — `ko_mid` vs `ko_bus` internal contradiction on tone class

- **`ko_mid`:** `:ᅀᅵ` (상성 = Upper tone)
- **`ko_bus`:** `iH` / `i˥` (H = Gyeongsang reflex of 去聲/거성)
- **Why:** These two sub-rows encode different tone classes for the same character. `ko_bus` H is correct (MC 去聲 → 거성 → H); `ko_mid` `:` (상성) is wrong. The discrepancy means a reader comparing `ko_mid` and `ko_bus` for 二 would see internally contradictory tonal information within the same dataset.

---

### 15. 去 — `ko_mid` vs `ko_bus` internal contradiction on tone class

- **`ko_mid`:** `:커` (상성)
- **`ko_bus`:** `geoH` / `kʌ˥` (H = 거성)
- **Why:** Same structural contradiction as Issue #14. A user tracing the Middle Korean→Gyeongsang pitch inheritance for 去 would find the two sub-rows incompatible. `ko_bus` H is correct; `ko_mid` `:` is wrong.

---

### 16. 七 — `ko_mid` display — mixed Unicode encoding (precomposed + archaic jamo coda)

- **Current:** `·치ᇙ` (U+CE58 precomposed 치 + U+11D9 RIEUL-YEORINHIEUH jamo coda)
- **Note also:** 八 `·바ᇙ` has the same mixed encoding
- **Why:** The archaic coda ᇙ (U+11D9, rieul-yeorinhieuh, representing the Middle Korean entering-tone liquid coda) is correctly rendered as a separate jamo since no precomposed form exists. However, the *onset+nucleus* part (`치`, `바`) uses pre-composed modern syllable blocks rather than decomposed jamo. This creates typographic inconsistency: other archaic entries such as `·ᅀᅵᇙ` (日), `·ᅙᅵᇙ` (一), `·ᅌᅯᇙ` (月) consistently use fully decomposed jamo throughout. Mixing precomposed and decomposed jamo in the same syllable block may cause rendering artefacts in certain Hangul shaping engines and complicates text comparison.

---

### 17. 水 — `ko_mid` display — precomposed syllable mixed with isolated vowel jamo

- **Current:** `:슈ᅵ` (U+C288 precomposed 슈 + U+1175 jamo JUNGSEONG I)
- **Why:** The archaic spelling 슈ᅵ represents a two-vowel sequence (syllabic yoo + i glide) attested in 동국정운 and 月印千江之曲 as the Middle Korean form of 水. The precomposed `슈` followed by bare jamo `ᅵ` is a hybrid that can display inconsistently. 手 (compare: `ko_mid` = `:슈`, single syllable) and 水 should ideally use the same encoding convention; the trailing `ᅵ` should be either a properly combining jamo or represented as part of a fully decomposed sequence.

---

### 18. 山 — `ko_hun` — modern dictionary form "메" used; 訓蒙字會 (1527) attests "뫼"

- **Current:** `메` (me)
- **訓蒙字會 gloss:** `뫼 산` (moj-san), i.e. the classical native word is 뫼 /møj/
- **Why:** The `ko_hun` meta explicitly frames itself as "한자훈/새김" — the traditional dictionary gloss pairing, citing 訓蒙字會 as the source. If the reference standard is the 15–16c. lexicographic tradition, the 山-gloss should be `뫼` (the Middle Korean form), not `메` (a later dialectal/simplified form). Modern dictionaries do list `메` as the contemporary form of the gloss, but the 1527 attestation is `뫼`. If the intent is to give the *modern* standard gloss, this is defensible — but the meta language ("e.g. 山 = 메 산") should acknowledge the historical form `뫼` rather than presenting `메` as the canonical example.

---

### 19. 中:2 — `ko_bus` — L pitch (평성) assigned; MC 去聲 requires H

- **Current romanized:** `jungL`
- **Current IPA:** `tɕuŋ˩`
- **Expected:** `jungH` / `tɕuŋ˥`
- **Why:** This is the Gyeongsang sub-issue of Issue #3. 中:2 (zhòng = to hit/centre on a target) is MC 去聲 → MK 거성 → Gyeongsang H. The file assigns L (= 평성), the same pitch as 中:1 (zhōng, 平聲). The two readings of 中 lose their Gyeongsang-level distinction entirely, which is precisely the contrast that the Gyeongsang pitch-accent system preserves from Middle Korean.

---

### 20. 去 — `ko_mid` romanized — aspirated initial `kh` (溪母) but display uses `:커` (ᄏ — same aspiration, acceptable); however, natural MK reading was `거` (unaspirated)

- **Current display:** `:커` (aspirated ᄏ)
- **동국정운 / 訓蒙字會 attestation:** 去 「갈 거」 → the 음(eum) reading in 訓蒙字會 is `거` (unaspirated ᄀ), not `커`
- **Why:** MC 去 = 溪母 (kʰ-, aspirated velar group). The 동국정운 normalization assigns aspirated initials to 溪母 characters, yielding `커`. However, the historically attested natural Middle Korean reading in 訓蒙字會 is `거` (unaspirated), following the pattern where MC 溪母 lost its aspiration in the Korean borrowing layer for this stratum of loans. The file currently reflects the 동국정운 reconstructed aspiration, not the 訓蒙字會 attestation. The display should at minimum note which layer is being represented; as-is, `ko_mid` = `:커` is internally inconsistent with the note that 去 in 訓蒙字會 is glossed as 「갈 거」 (plain ᄀ).

---

### 21. 口 — `ko_mid` display — aspirated `쿠` (동국정운 form) vs 訓蒙字會 「입 구」

- **Current display:** `:쿠` (aspirated ᄏ)
- **訓蒙字會 attestation:** 口 「입 구」 → `구` (unaspirated ᄀ)
- **Why:** Same issue as #20. MC 口 = 溪母 (kʰ-) → 동국정운 gives aspirated `:쿠`; 訓蒙字會 gives unaspirated `구`. The discrepancy between the reconstructed phonology and the historically attested reading is unmarked in the dataset. Since 訓蒙字會 is listed in `ko_mid` sources (per the meta), the divergence warrants a note or layer flag.

---

### 22. 飲 — `ko_mid` IPA vs romanized: `ʔǔm` (rounded u) vs `:qum` (romanized u-sound) — romanized `u` here transcribes ᅳ (ɯ) not /u/

- **Current IPA:** `ʔǔm`
- **Current romanized:** `:qum`
- **Why:** In the romanized row convention used throughout this file, `u` in sequences like `kwu` (口), `cwu` (走), `cwok` (足) represents the labial vowel /u/. But for 飲, the display `:ᅙᅳᆷ` unambiguously uses ᅳ = central unrounded /ɯ/. The romanized `:qum` is therefore representing /ɯ/ with the letter `u`, which conflicts with its usage elsewhere for /u/. This is a romanization system ambiguity that creates a misleading IPA when `u` is lifted directly into the phonetic row (as `ʔǔm`). The IPA should read `ʔɯ̌m`. (See also Issue #11, which addresses the same vowel conflict from the display side.)

---

## Summary by sub-row

| Sub-row | Issues |
|---------|--------|
| `ko_mid` romanized/display | tone errors on 二, 去, 中:2; initial consonant inconsistency on 食; aspirate layer ambiguity on 去/口 |
| `ko_mid` IPA | vowel mismatch on 飲 |
| `ko_bus` romanized/IPA | wrong pitch class on 火, 土, 九, 上 (all 上聲→H instead of LH); wrong pitch on 四 (去聲→LH instead of H); wrong pitch on 北 (입성/거성→L instead of H); wrong pitch on 中:2 (去聲→L instead of H) |
| `ko_mid` ↔ `ko_bus` | internal contradiction on 二 and 去 |
| `ko_hun` | missing entry for 龍 |
| `pko` | missing entry for 龍 |
| Encoding | mixed precomposed+jamo in 七, 八, 水 display rows |
