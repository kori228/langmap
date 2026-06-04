# HanMap Review #61 — Cross-character lexical/paradigmatic consistency

Scope: For each language column, audit whether characters sharing an etymological feature (Middle/Old Chinese coda, rime, initial class, tone class) produce a consistent phonological output. Flag rows where a sibling character disagrees with the rest of its rhyme/initial group.

Read-only audit against `/home/jounlai/langmap/hanmap_data.js` (HAN_DATA.surface). Each finding is annotated with the language code, the offending character(s), and the comparison set.

---

## 1. hak_cn — 食 has wrong coda (-t) vs all other 職韻/-k siblings

`食` belongs to 職韻 (MC -k coda; modern Hakka literary retains -k). Compare 食=sṳ̍t with the parallel -k group:
- 木=mu̍k, 目=mu̍k, 肉=ngiu̍k, 六=liu̍k, 足=chiuk  → all -k
- 食=sṳ̍t  → **-t**  (inconsistent)

The Méixiàn (Hak_cn) literary reading is sṳ̍t with -k (often transcribed as sṳ̍t in PFS where the orthographic <t> is the morpheme-final coda; need to confirm romanization rule). hak_hl also shows shi̍t, hak_tw siid6. Either (a) all three are using a Hak romanization where final orthographic <t> can stand for [k̚] in 職 grade-III items, or (b) all three rows are wrong. Cross-check against 北 (see #2) — likely a systemic 蒸/職 → -t merger in some Hakka subdialects, but it should be either flagged in the lang-meta note or normalized.

## 2. hak_cn / hak_tw — 北 (德韻 *-k) shows -t/-d, inconsistent with 木/目/六

- 北 hak_cn=pet, hak_tw=bed5  → -t/-d
- 木 hak_cn=mu̍k, 目=mu̍k, 六=liu̍k → -k

北 is 德韻 *-k. Méixiàn standard literary is pet̚ (-t after [e], yes — this is the famous Hakka *-k after non-back vowel → -t shift). So the form is correct for Méixiàn, but it then conflicts paradigmatically with 木/目/六 which retain -k. Either the row needs a footnote, or this is the same merger to flag jointly with #1 above.

## 3. hak_cn — 中:2 missing departing-tone diacritic; paradigm inconsistent

`中:2` (zhòng, 去聲) is given as `chung` (no diacritic). All other 去聲 siblings carry a grave accent in PFS:
- 見=kièn, 地=thì, 下=hà, 去=hì, 二=ngì, 四=sì, 右=yù

`中:2` should be `chùng` (or a comparable yin-qu marker). Bare `chung` reads as yang-ping, identical to 中:1 type — defeats the polyphony distinction.

## 4. ja_kgs — 行:1 vs 行:2 differ in INITIAL CLASS, violating polyphony rule

Polyphony rows must differ by tone only, not initial/medial:
- 行:1 ja_kgs=**gyō** (voiced palatal; go-on reading)
- 行:2 ja_kgs=**kō**  (voiceless velar; kan-on reading)

These are two different on-yomi *strata* (go-on vs kan-on) of the same character, not a tonal split of the same stratum. Both polyphony cells should be in the same stratum (both gyō / both kō) and the polyphony distinction simply doesn't surface in Japanese (it shouldn't be faked with a stratum swap). Compare 中:1 chū / 中:2 chū where the row correctly shows identical readings.

## 5. ja_kgs — 央 vs 羊 initial mismatch within 陽部

Both 央 and 羊 are 陽部 *-aŋ rime. Their on-yomi should differ only in initial:
- 央 ja_kgs=**ō**     (no medial /y/)
- 羊 ja_kgs=**yō**

央 (影母 *ʔ-) and 羊 (以母 *ɢ-) normally both surface in Sino-Japanese with the **yō** form when in *yang* rime (cf. 央=おう/yō in standard Kan-on; 中央=chūō where ō is itself <yō>). The "ō" without /y/ medial is acceptable, but the row is internally inconsistent with 羊=yō. Either both keep /y/ or neither does (depends on whether ja_kgs reflects historical /au/→[oː] without medial). Flag for confirmation.

## 6. ja_kgs — 南 reading `dan` is wrong stratum / probable error

- 南 ja_kgs=**dan**  ← suspicious
- 心 ja_kgs=**shin**
- 三 ja_kgs=**san**

Standard Sino-Japanese 南 is **nan** (kan-on) / **nam** (go-on/tō-on for 南無 namu). `dan` appears nowhere in established Sino-Japanese strata for 南. The /d/ initial would imply 定母 (*d-), but 南 is 泥母 (*n-) — same class as 二 (ji), 耳 (ji), 人 (jin), 日 (jit). Probable transcription error; should likely be `nan` (kgs would render as `nañ`/`naɴ`).

## 7. ja_kgs — 月 `get` vs 肉 `jik` initial inconsistency

Both are 入聲 in their respective rimes:
- 月 ja_kgs=**get** (initial g-, expected; cf. standard SJ getsu < ŋjuɐt)
- 肉 ja_kgs=**jik** (initial j-)

Old Japanese borrowing of 月 is gatsu/getsu (ŋ → g-) and 肉 is niku (go-on) / jiku (kan-on with ɲ→ʑ→j). Both correct individually but flag that the **ko_mid** column has 月=`·ngwelq` (preserving ŋ-) and 肉=`·zyuk` (z-), which mirrors the same split — confirm that's intentional given both are *-k codas in OC and (ŋ vs ɲ) initials.

## 8. ko_mid — 下 marked rising (`:hha`) but is historically 去聲 (departing)

- 下 ko_mid=`:hha` (rising marker `:`)
- Other 去聲 use `·` prefix: 二=·zi, 四=·sʌ̀, 見=·kyen, 中:2=·tyung, 去=·khe

Middle Korean Sino-Korean dictionaries (《東國正韻》) actually have BOTH readings for 下 (上聲 'be below' / 去聲 'descend' — analogous to the Chinese 上/去 split). If 下 is marked rising here while the gloss in `native` is the locative "below," it's defensible — but flag for consistency with the rest of the column (most languages use the departing reading hà / hạ / xià etc. and we should agree which sense the row represents).

## 9. ko_mid — 4 (四) shows non-standard `·sʌ̀` with grave accent

- 四 ko_mid=`·sʌ̀`

The grave accent over `ʌ̀` is not used elsewhere in the ko_mid column (other cells use only the `·` and `:` prefix markers for tone). All other 去聲 cells use prefix-only notation (二=·zi, 見=·kyen, 中:2=·tyung). Strip the grave or normalize: should be `·sʌ`.

## 10. gan — 行:1/行:2 polyphony absent from the data

Spot check: 行:1 gan=hāng?, 行:2 gan=hāng? (need confirmation — the polyphony pair should preserve at least a tonal distinction in Gan, as it does in wuu (hhang²³ vs hhang¹³), but the gan rows for 行:1/行:2 appear identical or one is missing. Cross-check against the Gan paradigm where 行 (行為) is yang-ping and 行 (銀行) is also yang-ping but with different rime grades (硬韻 vs 唐韻). Worth filling in distinct values.

## 11. cnp (Central Plains Mandarin) — 肉 tone reflex is wrong for its 入聲 class

- 一 cnp=it⁵, 七=chat⁵, 八=pat⁵, 北=pak⁵, 立=lit⁵, 食=sik²², 十=sap²², 月=ngye²², 日=ni²²
- 肉 cnp=**reu³⁵** ← rising tone with no entering reflex

Central Plains Mandarin neutralizes 入聲 to 陰平 (⁵) or 陽平 (²²) depending on the historical voiced/voiceless initial class. 肉 has 日母 (originally sonorant — distributes to 陽平 in most Mandarin and tone ²² / ³⁵ depending on dialect). The form `reu³⁵` (1) has initial **r-** but the rest of 日母 in cnp keeps **n-/ny-** (日=ni²², 二=ery²²), so the initial is inconsistent within the Sino-cnp 日母 paradigm; (2) the vowel `eu` doesn't fit the 屋韻 reflex shown by 木=muk⁵, 目=mu²⁴, 六=lok²². Almost certainly mis-keyed.

## 12. gan — 肉/日 initial inconsistency within 日母

Both 肉 and 日 are 日母 (*ɲ-):
- 日 gan=**nyiq⁵**   (initial ny-)
- 肉 gan=**nyiuq⁵**  (initial ny-)  → consistent ✓
- 月 gan=**ngyet⁵**  (initial ng-)  → 月 is 疑母 *ŋ-, so ng- is correct

This one *is* consistent — but verify visually because the column has cases (#13 below) where 日母 leaks into ng-.

## 13. zh_song / zh_tang — 食 zh_song=ʑiɪk vs zh_tang=ʑiɪk: vowel mismatch with paradigm

Compare 入聲 -k cells across Tang/Song:
- 木 tang=muɪk, song=muk
- 目 tang=miuɪk, song=muk
- 六 tang=liuɪk, song=liuk
- 肉 tang=ɲiuɪk, song=ȵiuk
- 食 tang=**ʑiɪk**, song=**ʑiɪk**   (Song shows the *Tang* nucleus iɪ, not muk-style -ik)

Either the Song reflex is "ʑik" (parallel to other -k items) or the Tang form should be ʑiək. The duplication tang=song suggests a copy-paste oversight — Song-stage MC should usually have collapsed -iɪ- to -i-.

## 14. zh_tang — 上/下 carry inline alternate readings ("¹²³/⁵¹" or "²¹⁴/⁵¹")

- 上 zh_tang=`d͡ʑɨɐŋ²¹⁴/⁵¹`
- 下 zh_tang=`ɦæ²¹⁴/⁵¹`

These cells encode the polyphony (上 上聲 'go up' vs 上 去聲 'top'; 下 上聲 'descend' vs 下 去聲 'below') as a slash-separated tone string. Other polyphony characters have *separate keys* (中:1/中:2, 行:1/行:2). The 上/下 entries should either (a) be split into 上:1/上:2 and 下:1/下:2, or (b) the slash convention should be applied consistently to 行/中 too. Pick one.

## 15. wuu — 日, 月, 食 missing in main `wuu` column but present in sub-variants

- 日 wuu=undefined, but wuu_wz=nyai²¹³
- 月 wuu=undefined, but other 入聲 chars (一 iq, 七 qiq, 十 zeq, 立 lliq) all populated
- 食 wuu=undefined, but should be zeq¹² or zyq¹² parallel to 十

`wuu` (Shanghai standard) should not have systemic holes when smaller Wu sub-dialects (wuu_wz Wenzhou, wuu_nb Ningbo) are filled. Fill in: 日 wuu=zeq¹² or nyiq¹², 月 wuu=hhyuq¹² (typical Shanghainese 月光 ngiu kuaon → modern niou koon), 食 wuu=zeq¹².

## 16. nan — Mass absence in `nan` column for body-part / verb characters, despite nan_te filling them

Characters with `nan=undefined` but `nan_te` populated: 八 (boih4), 日 (rig8), 水 (tsui2), 地 (di6), 龍 (liong5), 犬 (khiêng2), 馬 (bhê2), 鳥 (tsiau2), 牛 (ghu5), 羊 (ie5), 貓 (niau1), 足 (tsiog4), 目 (mag8), 耳 (hĩ5), 口 (khau2), 頭 (thau5), 血 (huih4), 肉 (neg8), 央 (iong1), 左 (tso2), 右 (iu6), 南 (lam5), 来 (lai5), 去 (keu3), 見 (gian3), 食 (ziah8), 飲 (im2), 走 (tsau2), 坐 (tso6), 立 (lip8).

`nan` (Hokkien/Taiwanese base) is a primary column. The presence of nan_te (Teochew) and nan_xm (Xiamen sub-variants) without `nan` is a paradigmatic hole — every nan_te entry implies a corresponding Hokkien literary/colloquial form that should be in `nan`. Likely systematic data import gap, not a cross-character phonological inconsistency, but it shows in the audit.

## 17. yue — 上 and 来 missing the base `yue` value while yue_hk / yue_gz / yue_mo are filled

- 上 yue=undefined; yue_hk=soeng6, yue_mo=soeng6
- 来 yue=undefined; yue_hk=loi4, yue_gz=lai4, yue_mo=loi4

Same audit issue as #16 but for Cantonese. The base `yue` column should mirror one of the geographic variants (canonically yue_gz/Guangzhou). These are the only two characters where the base yue is empty while sub-variants are populated — clearly an import gap. (Note: yue_gz for 上 also absent; 来 has yue_gz=lai4 ≠ yue_hk=loi4, which is a separate stratum split — colloquial 嚟 lai4 vs literary 來 loi4 — but the base needs to pick one.)

## 18. ptb (Proto-Tibeto-Burman) — 一 *it does not look like a Proto-TB reconstruction

- 一 ptb=`*it`

Matisoff and others reconstruct PTB "one" as *tyak/*kat or related forms, not `*it`. The `*it` value here is identical to Sino-Tibetan reflex output rather than a Tibeto-Burman reconstruction. Cross-check: ptb is populated for 一 alone among the small-number characters (二, 三, 四, … all have ptb=`-`). A single-character `*it` with no sibling fillings is suspicious — either replace with a defensible PTB form (e.g., *(g-)tyik) or remove and use `-`.

## 19. pst (Proto-Sino-Tibetan) — 一/七 share initial dy-/n- but expected to be *(d-)tek vs *snit

- 一 pst=*dyiək
- 七 pst=*(s-)nĭt
- 十 pst=*k(ʰ)ĭp
- 二 pst=*nĭy
- 八 pst=*ryēt

There's no widely-accepted Proto-ST reconstruction series that places 一 with initial *dy- and 七 with *n-; in Sagart/Baxter framework 七 is *(s-)niˀt < *snit but typically reconstructed *tsʰi(j)t in Old Chinese, and 一 is *ʔi(j)t (no *dy-). The current values seem to mix sources or be machine-generated — verify against either STEDT, Sagart-Baxter, or Schuessler and align all ten numerals to one source.

## 20. ko_mid — 行:2 missing `·` prefix though tang/song mark it as 平聲

- 行:1 ko_mid=`hhoyng` (no prefix → 平聲, correct; 平聲 yang)
- 行:2 ko_mid=`hhang` (no prefix → 平聲)

This *is* consistent — both 行:1 and 行:2 are MC 平聲 (一 yang-pin, 一 yang-tang). So polyphony 1/2 in 行 is NOT a tonal split in Middle Chinese; it's a rime split (庚韻 vs 唐韻). Cross-checks:
- Vi: Hành (huyền) vs Hàng (huyền) — same tone, different vowel ✓
- Yue: haang4 vs hong4 — same tone class 4 (yang-ping), different rime ✓
- Hak_cn: hang vs hòng — *different* tone marker; **inconsistent with the MC level-tone identity**. Both should be unmarked or both marked yang-ping.

So #20 (Hak_cn 行:2=hòng) is a real paradigmatic error: 行:2 in MC is 平聲 (yang-ping = bare or with `^` in PFS), not 去聲. The `ò` grave marks departing, which is wrong. Should be `hong` or `hông`.

## 21. zkt (Khitan small script transliteration) — 一 `om` vs 二 `?`

- 一 zkt=om (and ipa əm)
- 二 zkt=`—` (placeholder)

Khitan numerals are reasonably attested through the *Liao History* and recent decipherments (Wu/Janhunen 2010): 二 should be approximately `ǰūr` or similar — not blank. Fill in 二, 三, 四, 五 etc. to make the zkt row paradigmatically complete (this is an audit of *consistency*, not just correctness: ten numerals where only #1 is filled is itself inconsistent).

## 22. juc (Jurchen) and mnc (Manchu) — diverging vocabulary basis vs. character meaning

- 一 juc=`emu`, mnc=`emu`  → Manchu word for 'one', not a Sinitic borrowing
- 七 juc=`?`, mnc=`?`       → expected `nadan`
- 来 juc=`ji-`, mnc=`jimbi` → Manchu verb 'to come', also non-Sinitic

Audit note: the juc/mnc columns mix Sinitic borrowings with native Tungusic vocabulary. This is policy-level (intentional?), but inside a single row it produces an inconsistency where, e.g., 一/二 use native Manchu while 行/見/食 may have Sinitic borrowings. Spot-check that the entire juc/mnc column is consistently either *all native vocabulary* (gloss-based) or *all Sino-Manchu transcription* — currently the rows look mixed.

## 23. vi vs vi_nom — 央 vi_nom=`—` (placeholder) while siblings have native words

- 央 vi_nom=`—`
- 央 vi=Ương (Sino-Vietnamese, fine)
- Compare 中央 in modern Vietnamese: trung ương (Sino) / giữa-trung (native paraphrase). The native (vi_nom) cell for 央 has no native equivalent because 央 alone has no standalone native word — `—` is acceptable.

But: 東/西/南/北 vi_nom rows are: Đông=`—`, Tây=`—`, Nam=`—`, Bắc=`—`. All four cardinal directions are blank in vi_nom — paradigmatically that's *consistent within the cardinal group* (no pure-native vi_nom equivalents). Note: 上/下 vi_nom *do* have natives (trên/dưới). The audit point is to confirm `—` is the chosen sentinel for "no native form" and that the policy is applied identically across all four cardinals (✓) and across 央 (✓).  No fix needed — paradigm is internally consistent — but worth confirming the convention is documented.

---

**Count: 23 findings**
**File: `/home/jounlai/langmap/hanmap_reviews/61_open.md`**


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 12
- **policy/skip**: 11
- **headline**: hak_cn 中:2/行:2 polyphony tone fix ×2, ja_kgs/ja_okn/ja_thk 南 dan→nan + 行:1 gyō→kō ×6, cnp 肉 reu→nyuk, ko_mid 四 strip grave, zh_tang 上/下 slash collapse ×2
- **JSON**: /tmp/hm_edits_61.json
