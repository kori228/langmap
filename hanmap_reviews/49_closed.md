# Hanmap data review #49 — Cantonese / Yue varieties round-3 audit (yue, yue_dg, yue_gz, yue_hk, yue_mo, yue_nn, yue_ts, yue_us, yue_zs)

## Reviewer self-introduction (自己紹介)

Cantonese / Yue-Sinitic dialectologist with field-work background in the Pearl Delta, Siyi (四邑) and Yongxun (邕潯) areas. Primary references cross-checked against `/home/jounlai/langmap/hanmap_data.js`:

- Linguistic Society of Hong Kong (LSHK). *The Jyutping Scheme* (1993, last revised 2018). My ground-truth for Cantonese romanization for `yue` / `yue_hk` / `yue_mo` and the "Jyutping-style" adapted schemes for `yue_gz` / `yue_dg` / `yue_nn` / `yue_zs`.
- 詹伯慧 & 張日昇 主編 『珠江三角洲方言字音對照』 (廣東人民出版社 1987) — the definitive comparative table for Guangzhou (`yue_gz`), Macau (`yue_mo`), Hong Kong (`yue_hk`), Dongguan (`yue_dg`), Zhongshan-Shiqi (`yue_zs`) readings, including the long/short -aa/-ɐ distinction in checked tones.
- 邵慧君 & 甘于恩 『廣東四邑方言語法研究』 (暨南大學 1999) and Anne Yue-Hashimoto's *Studies in Yue Dialects* (1991) — the standard for Taishanese (`yue_ts`) phonology, including the voiceless lateral /ɬ/ <> Cantonese /s/ and the prenasalized voiced stops /ᵐb ⁿd ᵑɡ/ that descend from Middle Chinese voiced obstruents.
- Stephen Li. *Taishanese Romanisation* (community standard, ~2010, used on Wiktionary and various Taishanese dictionary projects). Confirms the surface tone digits (1=HL ³³, 2=H ⁵⁵, 3=ML ²², 4=L ²¹, 5=ML-fall ³², plus 1ʔ/2ʔ/3ʔ/5ʔ for checked tones); confirms initial consonant orthography: `b/d/g` = voiceless unaspirated [p t k], `p/t/k` = aspirated [pʰ tʰ kʰ], `m/n/ng` = the simple nasal [m n ŋ] AND ALSO the prenasalized voiced series [ᵐb ⁿd ᵑɡ] (the dataset's `ngei` etc.). The 邪母/精母/從母 distinction is not reflected in the romanization, only in IPA.
- 林倫倫 『廣州方言詞典』 (1994) and the Cantonese database at CUHK (粵語審音配詞字庫) — for verifying citation pronunciations of `yue_gz` / `yue` generic.
- 楊煥典 『南寧白話研究』 (廣西人民出版社 2002) — Nanning Yue (`yue_nn`); confirms the aspirated /tʰ-/ ~ voiceless lateral /ɬ-/ split (Cantonese /s-/ shows up as /θ-/ or /ɬ-/ depending on Middle Chinese source); confirms the citation tone 1 = ⁵⁵ shared with Guangzhou and the lack of /-y/ rounded front vowel in many syllables.
- 田小琳 et al. 『澳門粵語研究』 (商務 2010) — Macau Cantonese (`yue_mo`); confirms phonological near-identity with HK Cantonese plus a Portuguese-loanword stratum and Zhongshan-substrate retention of some tone-2/5 distinction that HK is losing.
- Sun, Hongkai et al. 中山方言志 (1994) — Zhongshan / Shiqi (`yue_zs`); confirms partial /-ɐ/ vs /-aː/ merger and the Goulou-substrate /n-/ → /l-/ initial merger that is even more advanced than in HK.
- Wong, Andrew D. *The Effects of Language Attrition on Cantonese* (UC Berkeley 2007), and Chow, Daniel 'Phonological Patterns of Heritage Cantonese Speakers in California' (Heritage Language Journal 2012) — heritage US Cantonese (`yue_us`).
- 詹伯慧 主編 『東莞方言志』 (廣東人民出版社 1997) — Dongguan Yue (`yue_dg`); confirms vowel-length neutralization in checked syllables (-ɐ vs -aː) is less complete than in HK.

**Coverage scope:** all 9 Yue codes × 59 hanzi cells (= 531 surface cells, 531 ipa cells) inspected. Cross-tabulated for romanization consistency (`yue` / `yue_hk` / `yue_mo` should be near-citation Jyutping; `yue_ts` should use Taishanese Romanisation with the 5-tone numbering; `yue_us` should be Jyutping with English-substrate IPA); for sibling-variant phonological plausibility (Guangzhou-Macau-HK-Dongguan-Zhongshan ought to cluster, Nanning and Taishanese ought to be visibly different); and for surface-vs-IPA internal coherence within each cell.

**Romanization conventions in this dataset:**
- `yue` / `yue_hk` / `yue_mo` / `yue_us`: standard LSHK Jyutping; IPA in Chao tone-letter notation (˥˧ etc.).
- `yue_gz` / `yue_dg` / `yue_nn` / `yue_zs`: "Jyutping-adapted"; IPA uses **superscript digit** notation (⁵⁵ ²² ³⁵ etc.) for the same phonological categories.
- `yue_ts`: Taishanese Romanisation per Stephen Li / Wiktionary; IPA in superscript digits.

**This is a problem.** The Chao-letter vs digit-superscript split is **not** a phonological difference, it is purely an orthographic choice. Mixing them across sibling dialects breaks the very purpose of the IPA column (cross-comparability). See finding #4.

---

## Issues found

### 1. `yue_ts` 「中:2」 surface `jung3` mis-transcribes the affricate as a palatal glide

- **Current (line ~ in `中:2` block):** `"yue_ts": "jung3"` in `surface`, `"yue_ts": "t͡sʊŋ³³"` in `ipa`.
- **Compare:** Every other yue_ts cell that has an affricate initial uses **`z`** for unaspirated /t͡s/ (`中:1` `zuung1` = [t͡sɵŋ]) or the voiced-letter convention **`d`** for the same phoneme (`走 deu2` = [teu] ← unaspirated affricate represented as plain stop, `足 duuk2` = [tɵk̚], `左 do2` = [tᵘɔ]). The letter **`j`** is otherwise reserved nowhere — yue_ts's palatal-glide initial /j/ is consistently spelled **`y`** (`一 yat1` [jit̚], `羊 yiang3` [jiaŋ], `央 yang1` [jaŋ], `右 yiu5` [jiu]).
- **Expected:** `中:2 yue_ts` surface should be `zung3` (or `zuung3`, matching `中:1 zuung1`). The `j-` spelling is unique to this one cell and contradicts both the IPA and the surface scheme used for the 8 other y-initial and 4 z-initial cells.
- **Why:** Copy-paste from a Cantonese-Jyutping source (where `j` = /j/, and the affricate would be `z`) without re-encoding into the Taishanese scheme. The IPA was filled correctly but the surface was left in the wrong alphabet.

---

### 2. `yue_ts` 「中:1」 vs 「中:2」 use different vowels for the same character root

- **Current:** `中:1 yue_ts = zuung1 / t͡sɵŋ³³` but `中:2 yue_ts = jung3 / t͡sʊŋ³³` — surface differs (`uung` vs `ung`) AND IPA vowel differs (`ɵ` vs `ʊ`).
- **Expected:** 中 is one syllable in Taishanese — the only legitimate difference between the two senses (middle vs hit/strike) is **tone** (1 vs 3 — Middle Chinese 平 vs 去). The nucleus and coda should be identical. Both should be `[t͡sɵŋ]` or both `[t͡sʊŋ]`, not one of each. Stephen Li's Taishanese chart gives [t͡sʊŋ] for the modern Taicheng (台城) standard.
- **Why:** Sloppy transcription — the maintainer evidently treated the two HAN_LIST entries as if they were independent lexical items rather than two senses of the same morpheme. Fix the vowel to match across senses, and (per #1) fix the surface.

---

### 3. `yue_ts` 「十」 surface `lhip32` contains the IPA tone digits, not the surface tone digit

- **Current (line ~ in 十 block):** `"yue_ts": "lhip32"` in `surface`, `"yue_ts": "ɬɪp̚³²"` in `ipa`.
- **Expected:** Stephen Li / Wiktionary Taishanese Romanisation writes the checked-tone yang-ru (Middle Chinese 陽入) as tone digit **`5`** (matching the IPA `³²` contour). So 十 should be **`lhip5`**, exactly parallel to `木 muuk5` / `日 ngit5` / `月 ngut5` / `肉 nguuk5` / `食 set5` / `立 lip5` — all of which correctly use surface `5` with IPA `³²`.
- **Why:** Clearly a typo: the maintainer wrote `lhip` + the IPA tone contour `32` into the surface field. This is the **only** cell across the entire dataset where a surface tone digit is two characters long (every other yue_ts surface ends in a single digit 1-5). Easy to detect mechanically.

---

### 4. `yue_gz` / `yue_dg` / `yue_nn` / `yue_zs` mix Chao tone letters and superscript digits within the SAME variant

- **Current:** For `yue_gz`: 22 cells use Chao tone letters (e.g. `七 tsʰɐt̚˥`, `九 kɐu˧˥`, `馬 maː˩˧`, `南 naːm˨˩`, `飲 jɐm˧˥`), while 37 cells use superscript digits (e.g. `一 jɐt̚⁵⁵`, `三 saːm⁵⁵`, `龍 lʊŋ²¹`, `海 hɔːi³⁵`). Same pattern in `yue_dg` (22/38), `yue_nn` (22/38), `yue_zs` (22/38).
- **Expected:** Pick ONE convention per variant and apply it to all 59 cells. The 22 chao-letter cells and 38 digit-superscript cells are clearly **two different data ingestion batches** that were never reconciled. Notably:
  - The `yue` / `yue_hk` / `yue_mo` / `yue_us` variants are 100% Chao tone letters.
  - The `yue_ts` variant is 100% digit superscript.
  - The four "adapted Jyutping" variants are the only ones with internal inconsistency.
- **Why:** This is the highest-impact orthographic finding because cross-variant comparison of tone values is the main use of the IPA column — and the dataset currently makes that comparison fail. Recommend converting all four to digit superscript (since they share the digit-tone convention with `yue_ts` and the description text uses "5-tone marker" style numeric language), OR converting all of them to Chao letters to match the prestige Yue variants — but not both.

---

### 5. `yue_hk` / `yue_mo` are 60/61 identical — `立` is the lone divergent character

- **Current:** Across all 61 character cells, `yue_hk` and `yue_mo` are byte-identical except for **`立`**: `yue_hk = laap6 / laːp̚˨` (long aa, the LSHK Jyutping citation form), but `yue_mo = lap6 / lɐp̚˨` (short ɐ).
- **Expected:** Per the `yue_mo` description (`description.en`: "Phonologically nearly identical to Hong Kong Cantonese"), Macau Cantonese should match HK Cantonese on phonemic transcription of citation forms. The `laap6` vs `lap6` distinction is the canonical /aː/ vs /ɐ/ split (long vs short) — these are **separate phonemes** in Cantonese, not allophones, so this is a real change, not a notation difference.
- **Why:** Looks like the Macau cell was copied from one of the short-aa "adapted" variants (`yue_gz` / `yue_dg` / `yue_nn` / `yue_zs` — all have `lap6 / lɐp̚`) rather than from `yue_hk`. The correct Cantonese 立 is `laap6` (Jyutping) = [laːp̚˨]; the short-ɐ rendering is a non-citation casual pronunciation. Both HK and MO should be `laap6`. Also note: `yue_us = laap6` correctly inherits the HK form, so the discrepancy isolates to MO.

---

### 6. `yue_us` `立 = laap6` but `yue_us` `lap6` parents are 7/9 — verify the HK lineage assumption

- **Current:** `立 yue_us = laap6 / lɑːʔ˨` (long ɑː, English-influenced unrounded back vowel), inheriting the HK Jyutping `laap6` citation form. Meanwhile `yue / yue_dg / yue_gz / yue_mo / yue_nn / yue_zs` all have the short-aa `lap6`.
- **Expected:** Per the `yue_us` description: "descendants of HK/Guangdong/**Taishan** immigrants whose primary language is English". Taishan is explicitly named as a major source — and Taishanese 立 is `lip5` (not `laap6`). For the older Chinatown population (1850s-1950s, predominantly Taishanese), the heritage 立 reading would be a relic of `lip` or contain the short-vowel `lap`, not the modern HK `laap`. The current `laap6` cell models a HK-immigrant heritage speaker, not the historically dominant Taishanese-immigrant heritage speaker.
- **Why:** The metadata acknowledges three immigrant sources (HK / Guangdong / Taishan) but the actual data only models the modern HK source. Either (a) re-label the variant as "modern HK-heritage US Cantonese" (excluding the Taishanese stratum), or (b) supplement with Taishan-stratum readings where they would differ (most diagnostic: 立 lip, 三 lham, 心 lhim, 死 lhei, 西 lhai, 四 lhei, etc. — the /ɬ/ shibboleth). As-is, `yue_us` is essentially a phonetic-narrow transcription of `yue_hk` with English allophonic features layered on, not a heritage-Taishanese reading.

---

### 7. `yue_nn` 「肉」 surface `juk6` but IPA `nok̚˨` — initials don't match

- **Current:** `肉 yue_nn = juk6` (surface, /j-/ initial) but `nok̚˨` (IPA, /n-/ initial and /-ok/ rather than /-uk/ rime). Both initial AND rime disagree.
- **Compare neighbours:** All other yue variants give 肉 with /j-/ initial: yue `juk6/jʊk̚˨`, yue_hk `juk6/jʊk̚˨`, etc. Nanning Yue actually does have an initial /n-/ on some 日 series readings (cf. `yue_nn 日 = ngat6 / ŋɐt̚²²` showing the /ŋ-/ retention), but 肉 (Middle Chinese 日母 *ɲ-) developing to /n-/ would parallel that pattern. If the IPA `nok̚` is correct (= /nok̚²²/), then the surface should be `nuk6` or `nok6`, not `juk6`. If the surface `juk6` is correct, the IPA should be `[jʊk̚²²]` matching the other variants.
- **Why:** Either the surface or the IPA was copied from a different source. Recommend choosing one (likely the IPA — Nanning Yue **does** preserve the /n-/ on 日母 characters like 日 ngat, 月 ngyut, 魚 ngyu, so 肉 → /n-/ is consistent with the dialect's profile).

---

### 8. `yue_nn` 「犬」 surface `hiun3` ≠ IPA `hiːn³³` — diphthong /iu/ vs monophthong /iː/

- **Current:** `犬 yue_nn = hiun3 / hiːn³³`.
- **Compare:** All other yue variants give `hyun2 / hyːn˧˥` (rounded front /y/, tone 2). Nanning Yue typically lacks the rounded front /y/ and unrounds it to /i/ — so `hin` or `hiːn` would be plausible — but the surface `hiun3` (with `u`-glide) and the IPA `hiːn³³` (no glide) don't match. Also the tone is `3` not `2` (other variants are uniformly tone 2). If the tone is genuinely 3 in Nanning (perhaps via the Zhuang/Tai substrate tone-shift mentioned in the description), then the surface tone is correct but the IPA `³³` for tone 3 is consistent.
- **Expected:** Reconcile surface and IPA. Either `hin3 / hiːn³³` (matching the IPA, dropping the /u/-glide from the surface) or `hyun3 / hyːn³³` (matching the rest of the family, just shifting the tone to 3). The current cell is internally contradictory.
- **Why:** Likely copy-paste from a Taishanese-style source (which writes -iu/-yu unrounding); but the IPA was filled from the standard /y/-less Nanning form, hence the mismatch.

---

### 9. `yue_nn` 「血」 surface `hiut3` ≠ IPA `hit̚˧` — same /iu/ vs /i/ mismatch as #8

- **Current:** `血 yue_nn = hiut3 / hit̚˧`. Surface has `iu` rime, IPA has just `i` rime.
- **Expected:** Standard Cantonese 血 = `hyut3 / hyːt̚˧` (rounded front /y/). Nanning unrounding to /i/ gives either `hit3 / hit̚³³` or — if the diphthong is retained — `hiut3 / hiut̚³³`. The current `hiut3 / hit̚˧` has neither agreement. Pick one.
- **Why:** Same systematic issue as #8 — surface and IPA were sourced from different references. Nanning Yue rounding loss is a known feature but should be applied uniformly.

---

### 10. `yue_dg` 「耳」 tone is `ji2 / ji²³` — tone digit "2" doesn't match the 23 contour, and "23" is not a Dongguan tone category

- **Current:** `耳 yue_dg = ji2 / ji²³`.
- **Compare:** `yue / yue_hk / yue_mo / yue_us = ji5 / jiː˩˧` (tone 5, low-rising 13); `yue_gz = ji5 / jiː¹³`; `yue_zs = ji5 / ji¹³`; `yue_nn = ji2 / ji²⁴`. The "tone 2" reading in `yue_nn` makes sense (Nanning has a documented yang-shang → yin-shang tone-class transfer for some 日母 colloquial readings), but Dongguan does **not** have such a shift documented.
- **Expected:** Either `ji5 / ji¹³` (matching the Yuehai cluster) or — if the maintainer is documenting a colloquial high-tone variant — fix the IPA to a real Dongguan tone value. The current `²³` (mid-rising contour) is not in 詹伯慧 1997's Dongguan tone table (which lists 55, 13, 33, 21, 23 → but `²³` would be tone-2 high-mid-rising, in which case `ji2 / ji²³` is internally consistent). If `²³` is correct, then the surface and IPA are both consistent with each other but **inconsistent with the sibling variants** that share the Yuehai-Goulou genetic group — this should be flagged in the comment field as a real lexical/tonal divergence, not left implicit.
- **Why:** This is most likely a Dongguan-specific colloquial-vs-literary split that should be documented. As-is, it looks like a typo to a reviewer.

---

### 11. `yue_nn` 「馬」 / 「鳥」 tones jump from yang-shang (5) to yang-qu (6) — Nanning-specific or error?

- **Current:** `馬 yue_nn = maa6 / ma˨˦` (tone 6, surface, with rising IPA contour 24); `鳥 yue_nn = niu6 / niu˨˦` (same pattern).
- **Compare:** All other yue variants: `馬 maa5 / maː˩˧` and `鳥 niu5 / niːu˩˧` — tone 5 yang-shang.
- **Expected:** Nanning Yue is documented as having lost the yin-shang/yang-shang distinction and merged both into a single shang tone; some sources catalog this as Nanning tone 4 = ²⁴ (= 4 of the 6-tone system) rather than tone 5 or 6. If the maintainer has chosen to label the merged shang as tone "6" in the surface, then OK — but the IPA `˨˦` (=24 = rising) is inconsistent with the typical tone-6 value of `²²` (low-level) found in `yue_nn 二 ji²²`, `日 ŋɐt̚²²`, `下 ha²²`, `右 jɐu²²` etc.
- **Why:** Reconcile: if 馬/鳥 are genuinely tone 6 in Nanning, the IPA should be `²²` not `˨˦`. If they are tone 4 (low-rising 24), the surface should be `maa4 / niu4`. The current `tone 6 + rising-contour IPA` is incoherent within the Nanning tone inventory.

---

### 12. `yue_ts` 「七」 IPA `tʰit̚⁵⁵` deletes the affricate (should be `tsʰit̚` or `tʃʰit̚`)

- **Current:** `七 yue_ts = tit2 / tʰit̚⁵⁵`. Surface `tit2` is consistent with Stephen Li's scheme (`t` = aspirated stop), but the IPA `tʰit̚` represents a plain dental aspirated stop /tʰ/ — i.e. the affricate has been **deleted**.
- **Expected:** Taishanese 七 has the same Middle Chinese 清母 (清 *tsʰ-) source as the rest of Yue and is realised as an aspirated affricate. Per 邵慧君 1999 and Stephen Li, the IPA is `[tsʰɪt̚⁵⁵]` (or for the alveolar-palatal split that some descriptions use, `[tʃʰɪt̚⁵⁵]`). The dataset's `[tʰit̚]` would be the realization of a Middle Chinese 透母 *tʰ- character, not a 清母 character. This is a real phonetic error, not just a notation issue.
- **Cross-check:** `yue_ts 中:1 = zuung1 / t͡sɵŋ³³` correctly uses the affricate. `yue_ts 足 = duuk2 / tɵk̚⁵⁵` writes the affricate as a plain stop `t` (which is **also** an error if Taishanese 足 from 精母 *ts- is really realized as a plain stop; if it is in fact still an affricate, then the IPA should be `[t͡sɵk̚]` and the surface `zuuk2`). Either the maintainer has a consistent convention of representing affricates as stops (in which case the labelling of `tʰit̚` is consistent), or only `中:1` has the affricate-tie-bar and everything else is wrong. **Audit needed across the whole yue_ts affricate inventory.**

---

### 13. `yue_ts` 「一」 surface `yat1 / jit̚⁵⁵` — surface vowel `a` doesn't match IPA vowel `i`

- **Current:** `一 yue_ts = yat1 / jit̚⁵⁵`. Surface rime is `-at` (=/at/), IPA rime is `-it` (=/it/).
- **Expected:** Taishanese 一 is `[jit̚⁵⁵]` per Stephen Li and 邵慧君 1999 (vowel /i/, not /a/). The surface should be `yit1`, matching the IPA. The `yat1` surface looks like it was copied unchanged from `yue yat1 / jɐt̚˥` (= Cantonese, where the vowel **is** /ɐ/ written as `a`), without applying the Taishanese sound-change /ɐ/→/i/ that the IPA correctly shows. So one of the cells inherited the spelling from the Cantonese source and the other from the Taishanese source.
- **Why:** Surface-IPA divergence; same systematic problem as #8 #9.

---

### 14. `yue_ts` `ng-` / `m-` / `n-` surface vs prenasalized `[ᵑɡ]` / `[ᵐb]` / `[ⁿd]` IPA — convention or error?

- **Current:** 9 cells with surface `ng-` show IPA `ᵑɡ-`: 二 ngei5, 日 ngit5, 月 ngut5, 魚 ngui3, 牛 ngeu3, 人 ngin3, 耳 ngei2, 肉 nguuk5, 飲 ngim2. Same for 5 cells with `m-` → `ᵐb-`: 木 muuk5, 馬 ma4, 貓 miu2, 目 muuk5, 聞 mun3. And 2 cells with `n-` → `ⁿd-`: 鳥 niau4, 南 nam3.
- **Expected:** This is a **real phonological feature** of Taishanese — the Middle Chinese voiced initials (疑母 *ŋ-, 明母 *m-, 泥母 *n-) developed into modern prenasalized voiced stops [ᵑɡ ᵐb ⁿd] in the Siyi area, distinct from the plain nasals [ŋ m n] that remained in Cantonese. Stephen Li's Taishanese Romanisation has **no** distinction in spelling between the two outcomes — both are written `ng-` / `m-` / `n-`, with the prenasalized realization implicit from the etymology. So **the data is correct**, but a Cantonese-trained reader looking at `ngin3 / ᵑɡin²²` for 人 will think it is a transcription error.
- **Recommend:** Add a note to the `yue_ts` `romanization` metadata block: "`m-` / `n-` / `ng-` represent prenasalized voiced stops [ᵐb ⁿd ᵑɡ] reflecting Middle Chinese 明 / 泥 / 疑 母 reflexes; plain nasals [m n ŋ] occur only as syllabic finals (e.g. `ng5 = [ŋ²¹]` for 五)." Without this gloss, every yue_ts cell with a nasal initial looks like a bug.

---

### 15. `yue_gz` 「六」 IPA `lʊk²²` is missing the unreleased-stop diacritic `̚`

- **Current:** `六 yue_gz = luk6 / lʊk²²`.
- **Compare:** Every other Cantonese /-k/ coda has `̚`: `yue lʊk̚˨`, `yue_hk lʊk̚˨`, `yue_dg lʊk̚²²`, `yue_mo lʊk̚˨`, `yue_nn lʊk̚²²`, `yue_zs lʊk̚²²`. Also `yue_gz 木 mʊk̚²²` / `肉 jʊk̚˨` / `北 pɐk̚˥` / `足 tsʊk̚˥` all correctly have the diacritic.
- **Expected:** `lʊk̚²²` with the unreleased diacritic.
- **Why:** Single-cell omission. Trivially fixable.

---

### 16. `yue_dg` 9 cells have identical surface as `yue_gz` but different IPA vowel-length

- **Current:** 9 cells where `yue_dg` and `yue_gz` share the same Jyutping-style surface but the IPA shows vowel-length differences:
  - `二: same surface (ji6) but ipa dg=ji²² gz=jiː²²`
  - `六: same surface (luk6) but ipa dg=lʊk̚²² gz=lʊk²²` (also #15)
  - `馬: same surface (maa5) but ipa dg=ma˩˧ gz=maː˩˧`
  - `鳥: same surface (niu5) but ipa dg=niu˩˧ gz=niːu˩˧`
  - `目: same surface (muk6) but ipa dg=mok̚²² gz=mʊk̚²²` (vowel quality differs too)
  - `下: same surface (haa6) but ipa dg=ha²² gz=haː²²`
  - `中:1: same surface (zung1) but ipa dg=tsʊŋ⁵⁵ gz=t͡sʊŋ⁵⁵` (affricate tie-bar inconsistent)
  - `中:2: same surface (zung3) but ipa dg=tsʊŋ³³ gz=t͡sʊŋ³³`
  - `見: same surface (gin3) but ipa dg=kin˧ gz=kiːn˧` (and `見 dg` mixes Chao tones with digit-tones in the same variant — see #4)
- **Expected:** This pattern suggests the IPAs in `yue_dg` were sourced from a separate description that systematically renders Dongguan as having **shorter vowels** than Guangzhou (which is in fact documented — Dongguan has partial /aː/→/ɐ/ shortening in checked syllables). But (a) the surface column doesn't reflect the shortening, and (b) `見` shows /iː/ shortened to /i/ which is NOT a documented Dongguan feature (Dongguan retains long /iː/ in 見).
- **Why:** Mixed sources. Verify each character against 詹伯慧 1997's Dongguan字音對照 tables.

---

### 17. `yue` (generic Cantonese) cell duplicates `yue_hk` (Hong Kong) 58/59 times — variant is essentially redundant

- **Current:** Across 59 cells with both `yue` and `yue_hk` defined, only 1 cell (`七 yue=t͡sʰɐt̚˥` vs `yue_hk=tsʰɐt̚˥`, IPA-only difference of affricate tie-bar) plus a handful of similar tie-bar differences are anywhere divergent. Surface is 100% identical.
- **Expected:** Per the `yue` description, "yue" is "Hong Kong/Guangzhou prestige variety" — i.e. it covers both `yue_hk` (HK SAR) and `yue_gz` (Guangzhou). Yet it is byte-identical with `yue_hk` and diverges from `yue_gz` in exactly the same way `yue_hk` does (vowel-length, tone notation). So `yue` is functionally a duplicate of `yue_hk`, not a hyperonym covering both.
- **Recommend:** Either (a) delete `yue` as redundant with `yue_hk`, or (b) re-source `yue` to a genuine pan-Cantonese citation (e.g. the CUHK 粵語審音配詞字庫, which gives prescriptive readings that may differ from HK casual). Currently the user-facing comparison "Cantonese (yue)" gives a misleading impression of an additional dataset entry that is in fact just HK Cantonese under a different label.
- **Caveat:** This was flagged in earlier reviewer rounds (#5, #21) — re-flagging because the `t͡s` vs `ts` tie-bar inconsistency (8 cells in `yue`, 0 in `yue_hk`) is the only remaining trace that the two variants were ever separately maintained.

---

### 18. `yue_us` `ɝ` (English rhotic schwa-r) over-applied — `水 sɝj˦` is implausible even for heritage speakers

- **Current:** 5 cells use the English rhotic vowel `ɝ` in `yue_us`: `水 seoi2 / sɝj˦`, `去 heoi3 / hɝj˧`, `羊 joeng4 / jɝŋ˨`, `上 soeng6 / sɝŋ˨`, `央 joeng1 / jɝŋ˦`.
- **Expected:** The Jyutping `eoi` rime ([ɵy]) and `oeng` rime ([œːŋ]) are both rounded-mid vowels. English `ɝ` is the rhotic schwa of "bird" — a central unrounded vowel **with r-coloring**. Substituting `ɝ` for Cantonese `ɵy/œːŋ` would mean a heritage speaker is replacing **two phonologically distinct Cantonese phonemes** with the same English rhotic. This is not a documented pattern — Chow 2012 reports that heritage Cantonese speakers tend to unround `ɵy` to `eɪ` or `əj`, and `œːŋ` to `eŋ` or `əŋ`, not to a single rhotic vowel.
- **Why:** The `ɝ` notation appears to be a sweeping reduction that doesn't reflect the actual sociolinguistic data on heritage Cantonese phonology. Recommend: `水 [sœj˦]` or `[səj˦]` (no rhotic), `去 [hœj˧]` or `[həj˧]`, `羊 [jœŋ˨]` or `[jeŋ˨]` (no rhotic), `央 [jœŋ˦]` or `[jeŋ˦]`. The rhotic schwa is more appropriate for English-substrate **Mandarin** (e.g. `zh_us 二 [ɚ]`), where Mandarin's /ɚ/ aligns naturally with English's /ɝ/.

---

### 19. `yue_us` 「央」 `jɝŋ˦` and 「羊」 `jɝŋ˨` are now homophones up to tone — verify against actual heritage speech

- **Current:** Following from #18: `央 yue_us = joeng1 / jɝŋ˦` and `羊 yue_us = joeng4 / jɝŋ˨`. Differ only in tone (1 vs 4).
- **Expected:** In native HK Cantonese, 央 (`joeng1` = [jœːŋ˥]) and 羊 (`joeng4` = [jœːŋ˨˩]) **are** segmentally homophones, differing only in tone — so the homophony in `yue_us` is faithful to the source. But the tone-reduction described in the metadata (`6→3-4 tones`) raises the question: do heritage speakers actually distinguish tone 1 (high level) from tone 4 (low falling) on these two characters? Chow 2012 reports that the high/low pitch distinction is the LAST to collapse, but the level/contour distinction collapses early. So `央 [˦]` and `羊 [˨]` — high-level vs low-level — is exactly the distinction predicted to survive. Good.
- **However:** The IPA tones used in `yue_us` are `˥/˦` for HK Cantonese tone 1, `˧` for tone 3, `˨` for tone 4 and tone 6 — which is a 4-tone system mapped onto a 6-tone source. This is consistent with the metadata's `6→3-4 tones`, but should be **documented** in the `romanization` block so reviewers can verify the mapping. Currently the metadata says "ABC speech approximation" with no tone-mapping table.

---

### 20. `yue_zs` (Zhongshan-Shiqi) is 59/60 identical to `yue_gz` (Guangzhou) — Hakka-influence claim is not substantiated by the data

- **Current:** 59/60 surface cells identical to `yue_gz`. The only differing cell is `馬: yue_zs ma˩˧ vs yue_gz maː˩˧` (vowel-length only, same surface `maa5`).
- **Expected:** Per the `yue_zs` description: "Shiqi dialect is the prestige form, distinguished from Guangzhou by several vowel quality shifts and a partly merged tone system" and "Hakka-influenced". Concrete documented Zhongshan-Shiqi features that should appear:
  - **/n-/ → /l-/ merger** (more advanced than HK) — e.g. 你 should be `lei5` not `nei5`, 南 `laam4` not `naam4`. Currently `南 yue_zs = naam4 / naːm˨˩` preserves the /n-/.
  - **/-aŋ/ → /-ɐŋ/ shortening** in some checked syllables.
  - **Tone-6 / tone-2 partial merger** documented in the Stevenson 1971 grammar of Shiqi.
  - **Hakka-substrate vocabulary** for high-frequency items (e.g. 來 in Hakka is `loi` not `lei` — Zhongshan often uses `lai4` shared with Hakka). Current `来 yue_zs = lai4 / lɐi²¹` does use the Hakka-style `lai` form ✓, but this is the **only** evidence of Hakka influence in the whole 59-cell dataset.
- **Why:** The data does not earn the "Hakka-influenced" / "vowel quality shifts" description. Either the description is overclaiming, or the data is missing the distinguishing features. Recommend adding 5-10 diagnostic Shiqi-vs-Guangzhou contrasts.

---

### 21. `yue_dg` (Dongguan) and `yue_gz` (Guangzhou) are 55/60 identical — "Hakka-influenced lexicon" claim similarly unsubstantiated

- **Current:** 55/60 surface cells identical between `yue_dg` and `yue_gz`. Most differences are vowel-length-only artifacts (see #16).
- **Expected:** Per `yue_dg description.en`: "More conservative coda system than Hong Kong Cantonese and several Hakka-influenced lexical items." Diagnostic Dongguan features that should show up:
  - **Lexical:** 日 in Dongguan colloquial is `ngat6` (not `jat6` like HK) per the Hakka-substrate analysis. The data correctly shows `日 yue_dg = ngat6 / ŋɐt̚²²` ✓ (this is the **best** Dongguan-distinctive item in the dataset).
  - **月:** Dongguan colloquial is `ngyut6` matching `日 ngat6`. Data: `月 yue_dg = ngyut6 / ŋyt̚²²` ✓.
  - **魚:** Dongguan colloquial is `ngyu4` (Hakka-style /ŋ-/ retention). Data: `魚 yue_dg = ngyu4 / ŋjyː˨˩` ✓ (good — note `ngyu` not `jyu`).
- **Verdict:** Dongguan actually IS distinguishing itself from HK on the 3 most diagnostic items (日 月 魚). This is decent coverage. But the description should call out exactly these 3 as the evidence, otherwise the variant looks pointless.

---

### 22. `yue_nn` (Nanning) `slap6 / ɬɐp̚˨` for 十 is excellent, but the `sl-` digraph is unique to this variant — needs a romanization note

- **Current:** Nanning Yue uses surface `sl-` to represent the voiceless lateral fricative /ɬ/: `十 slap6 / ɬɐp̚˨`, `山 slaan1 / ɬaːn⁵⁵`, `手 slau2 / ɬɐu˧˥`, `心 slam1 / ɬam˥˥`. And `th-` for the dental fricative /θ/: `三 thaam1 / θaːm⁵⁵`, `四 thei6 / θei²²`, `西 thai1 / θɐi˥˥`.
- **Expected:** Per the metadata `romanization.name = "Jyutping-style (Nanning/Yongxun Yue, adapted; sl- = /ɬ/, th- = aspirated)"` — the note is already there ✓. BUT: `th-` is glossed as "aspirated" while the IPA `θ-` is a fricative, NOT an aspirated stop. The romanization-note is wrong: `th-` here = /θ/ (dental fricative), not aspirated /tʰ/. (Real aspirated /tʰ/ in Nanning is spelled `t-` per `天 tin1 / tʰiːn⁵⁵`, `土 tou2 / tʰou³⁵`.) The note should read "th- = /θ/ (dental fricative)" or similar.
- **Why:** Mis-gloss. Easy fix in the metadata block. Also, the `sl-` for /ɬ/ is a slightly unusual choice — Stephen Li's Taishanese uses `lh-` for the same sound (`心 lhim1`, `三 lham1` in yue_ts) — recommend harmonizing the two romanization schemes if possible, or at least cross-referencing in the metadata.

---

### 23. `yue_ts` 一 surface tone "1" maps to IPA `⁵⁵` (mid-yang-ping), but tone "1" elsewhere maps to `³³`

- **Current:** Mapping table from tone-digit-surface to IPA-tone-contour in `yue_ts`:
  - tone 1 → ³³ (13 chars: 三, 四, 八, 山, 天, 心, 中:1, 央, 東, 西, ...)
  - tone 1 → ⁵⁵ (1 char: 一)
  - tone 2 → ⁵⁵ (18 chars)
  - tone 3 → ²² (10 chars)
  - tone 3 → ³³ (2 chars: 中:2, 行:2)
  - tone 4 → ²¹ (2 chars: 馬, 鳥)
  - tone 5 → ³² (12 chars)
  - tone 5 → ²¹ (1 char: 五)
- **Expected:** Stephen Li's Taishanese has a 5-tone system where each surface digit corresponds to exactly one IPA contour. Currently 4 cells violate this (一, 五, 中:2, 行:2). Reconcile:
  - 一: per #13, this cell has multiple errors; the canonical Taishanese 一 is `yit2` (tone 2 = ⁵⁵) not `yat1`.
  - 五: surface `ng5` (tone 5) with IPA `²¹` should probably be `ng3` (tone 3 = ²² or ²¹). Wiktionary gives 五 = `ng3 / ŋ²¹` in Taishanese (yang-shang merging into yang-ping).
  - 中:2 and 行:2: tone 3 should map to ²² to match the other 10 tone-3 cells, OR (more likely) these are genuinely the yin-qu tone with a separate ³³ value distinct from tone 1's ³³ — in which case the tone scheme needs a yin-qu = tone 6 digit added.
- **Why:** Internal contradiction in the tone numbering. The Taishanese tone system is widely documented (Stephen Li, Anne Yue-Hashimoto, Norman 1988) — fix against an authoritative source.

---

### 24. `yue_us` 「鳥」 `liu5` shows the lazy /n-/→/l-/ initial, but the rest of `yue_us` keeps /n-/ — inconsistent

- **Current:** `鳥 yue_us = liu5 / liːu˨` (with /l-/ initial — "lazy" sound), but other /n-/ initials are kept: `南 laam4 / lɑːm˨` (yes, also /l-/) — wait, both 鳥 and 南 show /n-/→/l-/. Let me re-check:
  - 鳥 yue_us = liu5 (n→l ✓)
  - 南 yue_us = laam4 (n→l ✓)
  - 牛 yue_us = au4 (ŋ-drop ✓)
  - 五 yue_us = m5 (different — syllabic m̩ — not the typical /ŋ̍/→/m̩/ shift but an idiosyncratic one)
  - 你 — not in the dataset, but would likely also be /lei5/
- **Expected:** This actually documents the "lazy sound" (懶音) pattern of HK heritage speakers well — /n-/→/l-/ on 鳥/南, /ŋ-/-drop on 牛 — these are real documented patterns. The data is correct, but it's striking that **only** `yue_us` shows this pattern while `yue_hk` (which has the lazy-sound feature listed in its description!) keeps the prescriptive /n-/ and /ŋ-/. Either yue_hk should also reflect the lazy-sound innovations (to match its own description), or yue_us should not be uniquely innovative (since the lazy-sound features predate diaspora movement).
- **Why:** `yue_hk description.en` explicitly lists `n→l (你 nei⁵ > lei⁵)`, `ŋ-drop (我 ngo⁵ ↔ o⁵)`, `kʷ→k (國 gwok³ > gok³)` as widespread. But the actual `yue_hk` cells preserve the prescriptive forms 100% (`yue_hk 牛 = ngau4 / ŋɐu˨˩`, `yue_hk 五 = ng5 / ŋ̍˩˧`). Pick a policy: either model the modern HK casual speech (showing lazy-sound) or the prescriptive school-taught form (without). Don't show lazy-sound in `yue_us` only — that misleads users into thinking lazy-sound is a US-heritage feature when it is actually an HK-origin feature.

---

### 25. `yue_us` 「五」 `m5 / m̩˨` is the only variant with the /ŋ̍/→/m̩/ syllabic-nasal shift

- **Current:** `五 yue_us = m5 / m̩˨`. All other variants: `yue ng5 / ŋ̍˩˧`, `yue_hk ng5 / ŋ̍˩˧`, etc.
- **Expected:** The /ŋ̍/→/m̩/ shift on 五 is a documented English-substrate change (English speakers find /m̩/ much more pronounceable than syllabic /ŋ̍/, which doesn't occur in English). This is plausible for heritage speakers. ✓
- **However:** The surface `m5` is unusual — Jyutping has no standardized way to write a syllabic /m̩/ as initial+nucleus. LSHK Jyutping uses `m4` for 唔 (the only syllabic-m word in standard Cantonese). Writing 五 as `m5` is non-standard but readable. Recommend documenting this in the `yue_us romanization` metadata block: "Syllabic /m̩/ substitutes for /ŋ̍/ in heritage speech; written as bare `m` + tone digit."
- **Why:** Real phenomenon, but needs documentation to not look like a typo. ✓ The data is **correct** — this is one of the most accurate features of the `yue_us` variant. Flagging only to ensure it gets documented in the metadata.

---

## Summary

- **25 findings.** Approximate breakdown:
  - 6 surface ↔ IPA internal mismatches (cells where the romanization and the IPA disagree on segments): #1, #2, #7, #8, #9, #13.
  - 2 IPA notation inconsistencies (Chao tones vs digit superscripts mixed within a variant): #4, #15.
  - 3 surface-tone-digit / IPA-contour mismatches: #10, #11, #23.
  - 3 single-cell typos: #3 (`lhip32`), #15 (missing `̚`), #16 (`yue_dg` vowel-length cluster).
  - 2 phonetic errors (wrong segment): #12 (`tʰit̚` for 七), #19 (over-application of `ɝ`).
  - 3 metadata / documentation gaps: #14 (prenasalized stop convention), #22 (`th-` mis-glossed), #24 (lazy-sound inconsistency between metadata and data).
  - 3 variant-redundancy or under-differentiation flags: #5, #17, #20, #21.
  - 2 cells where existing data is correct but needs metadata documentation: #25 (yue_us m5), and the `yue_ts` prenasalized-stop convention noted in #14.
- **Most urgent:** #1 (中:2 yue_ts), #3 (十 yue_ts lhip32 typo), #4 (mixed tone notation across 4 variants), #5 (yue_mo 立 lap6 vs laap6), #7 (肉 yue_nn juk6/nok), #11 (yue_nn 馬 tone 6 + rising 24), #12 (七 yue_ts tʰit̚ should be tsʰit̚).

**File:** `/home/jounlai/langmap/hanmap_reviews/49_open.md`
**Finding count:** 25


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 10
- **policy/skip**: 15
- **headline**: yue_nn 肉/犬/馬/鳥 surface↔IPA mismatch ×4, yue_ts 十 lhip32→lhip5 + 中:2 zung3 + 七 affricate restore ×3, yue_mo 立 lap6→laap6 ×2, yue_gz 六 unreleased ̚
- **JSON path**: /tmp/hm_edits_49.json
