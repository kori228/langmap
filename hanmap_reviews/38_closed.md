# Hanmap data review #38 — Animals cohort (龍, 虎, 犬, 馬, 鳥, 魚, 牛, 羊, 貓) across 102 HAN_LANGS

## Reviewer self-introduction (自己紹介)

Specialist on East-Asian zoonym etymology and the Sinosphere's animal-name layering. The nine characters in this cohort are zoologically heterogeneous (one is mythological, two are colloquial Mandarin replacements of literary Sinitic etyma, one is a wanderwort), and that heterogeneity is the lens of this audit. Working references:

- Schuessler, *ABC Etymological Dictionary of Old Chinese* (Hawaii 2007); *Minimal Old Chinese and Later Han Chinese* (2009).
- Baxter & Sagart, *Old Chinese: A New Reconstruction* (Oxford 2014) — the source the file labels `zh_han`.
- Matisoff, *Handbook of Proto-Tibeto-Burman* (UC Press 2003) and the STEDT database — declared source for `ptb`.
- Vovin, *A Reconstruction of Proto-Korean* (Brill 2010); Whitman, *The Phonological Basis for the Comparison of Japanese and Korean* (1985); Lee Ki-Moon & Ramsey, *A History of the Korean Language* (Cambridge 2011).
- Frellesvig & Whitman (eds.), *Proto-Japanese: Issues and Prospects* (Benjamins 2008); Vovin, *A Descriptive and Comparative Grammar of Western Old Japanese* (Brill 2005–2009).
- Janhunen, *Proto-Mongolic* (in *The Mongolic Languages*, Routledge 2003: 1–29); Doerfer's *Türkische und mongolische Elemente im Neupersischen* I–IV (1963–75) for Steppe wanderwörter.
- Kane, *The Kitan Language and Script* (Brill 2009); *The Sino-Jurchen Vocabulary of the Bureau of Interpreters* (Indiana 1989) — for `zkt` and `juc` zoonym attestations.
- Gong Hwang-cherng 龔煌城, 西夏語文研究論文集 (Academia Sinica 2002) — declared source for `txg`.
- Maspero (1912) *Études sur la phonétique historique de la langue annamite*; Phan, *Lacquered Words: The Evolution of Vietnamese under Sinitic Influences* (Cornell 2010); Alves, *Sino-Vietnamese Grammatical Vocabulary* (various) — for `vi_ohan` "古漢越" stratum.
- Pittayaporn, *The Phonology of Proto-Tai* (Cornell 2009) — declared source for `ptai`.
- Pulleyblank, *Lexicon of Reconstructed Pronunciation in Early Middle Chinese, Late Middle Chinese, and Early Mandarin* (UBC 1991) — for Tang/Song reconstructions in the file (the file declares them as "Tang–Song"; values reflect Pulleyblank's EMC/LMC).
- Coblin, *A Handbook of 'Phags-pa Chinese* (Hawaii 2007) — for `zh_phagspa`.

**Coverage:** All 9 animal characters × 102 HAN_LANGS × 3 sub-objects (`surface`, `ipa`, `native`) inspected, plus the `HAN_VARIANTS` blocks at lines 19149 (龍), 22277–23060 (犬–貓), 27541 (虎). Where a row has both a main entry and a literary/colloquial variant pair, both were cross-checked.

**Notation observations on the cohort:**
- Surface fields are pinyin / romanization throughout; **no Sinitic cell carries an orthographic Han character anywhere**. The simplified-vs-traditional script question raised in the brief (zh_sc using 龙 vs zh using 龍) is therefore *unrepresented* in the data — the simplification is implicit in the row header alone.
- `native` is used in the file for non-Han scripts (Manchu, Tangut, Phags-pa, kana, hangul, chữ Nôm, Cyrillic Dungan) and for the Sino-X stratum etymological reflexes (vi_nom, ko_hun, ja_kun).
- The `nan_*` Hokkien lect family is encoded redundantly in two places: each character's main `surface`/`ipa`/`native` block, and the `HAN_VARIANTS` block which carries 白讀 (vernacular) ↔ 文讀 (literary) doublets. For five of the nine animals this redundant encoding is **half-populated** in the main block (see issue #2 below).

---

## Issues found

### 1. Simplified ↔ traditional dragon orthography (龍 vs 龙) is not represented anywhere in the data

- **Current (lines 4344–4544):** `surface.zh = "lóng"`, `surface.zh_sc = "nong²¹"`, `surface.zh_cd = "nong²¹"`, etc. Every Sinitic cell is a romanization; no cell carries the graph 龍 nor 龙.
- **Expected:** If the brief's framing is that "zh_sc uses 龙, zh uses 龍" should be expressible in the file, then either (a) a `native.zh_sc` field would carry `"龙"` to distinguish from the row-header form 龍 (mirroring how `native.vi_nom`, `native.ja_kun`, `native.ko_hun` etc. carry their non-Sino orthographies), or (b) the dataset documentation should explicitly say *all Sinitic surface fields are pinyin-only, and orthographic script variant (TC/SC) is implicit*.
- **Why:** This is a systemic gap, not a per-cell error. 龍 is one of the most-simplified frequent characters (5-stroke 龙 vs 16-stroke 龍), and any consumer of the data who wants to render Mainland-China-orthography forms will not find the simplified graph here. Same applies to 馬↔马, 鳥↔鸟, 魚↔鱼, 龜↔龟 (the last not in this cohort but same problem). Compare: `native.ko = "용"` IS populated, distinguishing the Han-character row header 龍 from the hangul rendering; analogously, `native.zh_sc = "龙"` would express the simplified-graph distinction.

---

### 2. Main `surface`/`ipa` blocks for 龍, 馬, 鳥, 牛, 羊 omit all Hokkien (Min Nan) lects except `nan_te` and `nan_hai`

- **Affected cells:** 龍 (lines 4344–4515), 馬 (5000–5169), 鳥 (5202–5377), 牛 (5637–5807), 羊 (5839–6005) all carry only `nan_te` + `nan_hai` in the main block. The lects `nan`, `nan_qz`, `nan_xm`, `nan_zz`, `nan_pn`, `nan_sg`, `nan_my`, `nan_id`, `nan_pera` are **absent from the main block** for these five animals.
- **Counter-example:** 虎 (lines 4552–4673), 魚 (5410–5517), 貓 (6042–6157), 犬 (4770–4865, all except `nan` itself) DO populate the full nan_* family in the main block.
- **Expected:** The same nine-lect coverage that 虎 and 魚 give. The data for these forms IS available — the `HAN_VARIANTS` block at line 22307 ff. provides 白讀/文讀 doublets for `nan`, `nan_qz`, `nan_xm`, `nan_zz`, `nan_pn`, `nan_my`, `nan_sg`, `nan_id`, `nan_pera` for 馬, but the main block never inherits them.
- **Why:** This is the cohort's single biggest coverage hole. For 馬 the canonical Hokkien literary reading is *má* and the vernacular is *bé* (POJ); these are absent from the main row for nine of eleven nan-class lects despite being elsewhere in the file. A user reading the main row for 馬 will see Singapore Hokkien (`nan_sg`) as empty when in fact the variants block carries `surface "bé" / "má"`.

---

### 3. 貓 — `zh_phagspa` has `native` but no `surface` and no `ipa` (line 6238 vs missing surface/ipa)

- **Current:** `native.zh_phagspa = "ꡏꡠꡓ"` (line 6238, the cluster *mew* in 'Phags-pa script) — but the `surface` block (lines 6037–6126) and `ipa` block (6127–6216) contain NO `zh_phagspa` entry.
- **Expected:** `surface.zh_phagspa = "mew"` and `ipa.zh_phagspa = "mew"` to match the convention every other cohort character follows (cf. 龍 `surface.zh_phagspa = "luŋ"`, ipa same, native `"ꡙꡦꡃ"`; 鳥 `surface.zh_phagspa = "tjew"`, native `"ꡇꡠꡓ"`).
- **Why:** This is a structural inconsistency — every other animal in the cohort has a complete triple. The 'Phags-pa reading of 貓 IS attested (Coblin 2007 *Handbook of 'Phags-pa Chinese* gives *mew* via 蒙古字韻 rhyme 35); the value is known. Either the value should be filled, or — if the intent is to mark 貓 as not in Coblin's lexicon (it is rare in the 蒙古字韻 attestation set) — then `native.zh_phagspa` should also be `—`, not a populated cluster.

---

### 4. 馬 — `pja` (Proto-Japonic) entry is entirely missing

- **Current (4994–5198):** No `pja` key in any of the three sub-objects.
- **Expected:** `surface.pja = "*uma"` / `ipa.pja = "*uma"`, per Frellesvig & Whitman (2008: 18); Vovin reconstructs *\*mu(n)ma* as the older form, both acceptable.
- **Why:** 馬 is the canonical Proto-Japonic word that demonstrates the early Sinitic–Japonic contact: OJ *muma* / WMod *uma* derives from a Sino-Japanese substrate borrowing of EMC 馬 (Late Han *\*mraːʔ* → *\*mma* → *uma* by prenasalization loss). Compare: 犬 carries `pja = "*inu"`, 鳥 carries `pja = "*təri"`, 魚 carries `pja = "*iwo"`, 牛 carries `pja = "*usi"`. The cohort otherwise has full PJ coverage. Leaving 馬 blank when it is the single most-cited Sinitic loan in the Japanese basic vocabulary is striking.

---

### 5. 龍 — `ja_ojp` native `"リュ"` (no long-vowel mark) inconsistent with surface `"ryuu"` and ipa `"rʲuː"`

- **Current (lines 4408, 4494, 4533):** surface `"ryuu"`, ipa `"rʲuː"`, native `"リュ"` (= 2 katakana, ryu).
- **Expected:** native should be `"リウ"` (historical kana representing /rjuu/ via the -fu/-u long-vowel orthography of *rifu/riu*) OR `"リュウ"` (modern reading). The current `"リュ"` (2-mora) does not represent the [rjuː] length the surface and ipa explicitly carry.
- **Why:** Old Japanese 漢音 readings of long-vowel finals were spelled with auxiliary kana — for 龍 (kan-on *ryū* < EMC *ljowng*) the canonical historical kana is *リウ* / *リョウ*. The bare two-mora `"リュ"` does not roundtrip through the surface `"ryuu"` (4 letters, 2-mora long). Compare 鳥 `ja_ojp` native `"テウ"` (3 kana, encoding the *-eu* falling diphthong → *chō*) which DOES roundtrip with surface `"teu"`.

---

### 6. 龍 — `pmgl = "*luu"` is a Sinitic loan, not a Proto-Mongolic reconstruction

- **Current (lines 4414, 4500):** `surface.pmgl = "*luu"`, `ipa.pmgl = "*luː"`.
- **Expected:** This entry should be either `—` (no Proto-Mongolic native form attested) or marked as a Sinitic loanword post-Proto. Janhunen (2003: 19) explicitly notes that Proto-Mongolic has no inherited word for *dragon* — the modern Mongolic *luu / luuduu* family is a transparent loan from Middle Chinese 龍 *ljowng*, post-dating Proto-Mongolic by centuries.
- **Why:** A Proto-Mongolic reconstruction with asterisk implies an inherited PMgl etymon. *luu* is a wanderwort/loan that entered Mongolic from Chinese (probably via Tangut or directly during Khitan-period contact). Compare the file's own metadata for `pmgl` (line 17500ff.) which describes the reading_type as Proto-Mongolic *native* reconstructions following Janhunen 2003. Listing a Sinitic loan under that header conflates the synchronic Mongolic form with the proto-language inventory. Alternative: keep the data but mark it as `*luu (< MC 龍, post-PMgl loan)`.

---

### 7. 牛 — `vi_ohan = "trâu"` is etymologically wrong; trâu means *water buffalo*, not *ox*

- **Current (lines 5708, 5794):** `surface.vi_ohan = "trâu"`, `ipa.vi_ohan = "tʂəw˧˧"`.
- **Expected:** `surface.vi_ohan = "bò"` (or `"ngưu"` for the literary stratum); the etymological Old Sino-Vietnamese reflex of 牛 *[ŋ]ʷə is *bò* (Phan 2010: 145, citing Maspero's *\*ŋɣɨw → \*ɓɔ̀* trajectory) or — if the file is grouping all native non-Sino layers — Vietnamese `bò` 'cow/ox' is the cross-linguistic mapping for 牛.
- **Why:** Vietnamese strictly distinguishes:
  - 牛 (ngưu, Sino-Vietnamese) = *cow / ox / cattle* in general → native = *bò* 𤙭
  - 水牛 (thủy ngưu) = *water buffalo* → native = *trâu* 𤛓
  The chữ Nôm character for *trâu* is 𤛓 (not 𤙭 which is *bò*), and the file's own `native.vi_nom = "bò"` (line 5709) + `native.vi_nom (text) = "𤙭"` (line 5830) correctly encode *bò* / 𤙭 — but then the `vi_ohan` field at 5708 contradicts it with "trâu". Trâu's etymology is Austroasiatic (proto-Vietic *t-raːw*) and is unrelated to Sinitic 牛. This single cell mixes up the basic Vietnamese bovid taxonomy.

---

### 8. 虎 — `pko = "*pəm"` lacks the expected aspiration / velar onset attested in OK

- **Current (lines 4621, 4717):** `surface.pko = "*pəm"`, `ipa.pko = "*pəm"`.
- **Expected:** Vovin (2010: 81–84) reconstructs *\*pɨm-* / *\*pum-* with secondary aspiration, MK 범 *pə̌m*. The schwa value is plausible but the more conservative reconstruction is *\*pɨ̆m* or *\*pum*; the bare *pəm* is the Lee–Ramsey shorthand, not Vovin's.
- **Why:** Note also that the file's `ipa` column is supposed to be IPA but the `pko` cells repeat the surface verbatim (`*pəm` / `*pəm`). Same problem appears at *犬 pko `*kahi / *kahi`*, *馬 pko `*mʌrʌ / *mʌɾʌ`* (only this one shows a rhotic flap distinction), *牛 pko `*sjo / *sjo`*, *魚 pko `*koki / *koki`*, *鳥 pko `*say / *saj`*. The convention of repeating surface as IPA collapses the surface↔IPA distinction across the entire `pko` column. Either fill IPA with a proper transcription or document that proto-language reconstructions intentionally use a single Latin form for both.

---

### 9. 馬 — `zkt = "morin"` and ipa `"mori"`, but only 馬 has a non-dash `zkt` in this cohort

- **Current (lines 5027 surface, 5139 ipa, 5182 native = `𘭤𘭞`):** The only animal cohort row where `zkt` carries data. All other animals have `zkt = "—"` for all three fields.
- **Comment:** This is correct in spirit — Kane 2009 indeed reconstructs Khitan *mori* 'horse' from sign-cluster 𘭤𘭞 (cf. review #33 issue #9 which praises this cell). But the cohort-level pattern is striking: of nine animals, eight have empty `zkt`, while Khitan is well-attested for at least 虎 (*qabar*-type wanderwort), 犬 (*nai* or *noxai*), 牛 (*ükür*), 羊 (*qonin*) — all sharing Proto-Mongolic stems also given here under `pmgl`. The same evidence base that supports `pmgl *üker` for 牛 supports `zkt *ükür` for Khitan ox.
- **Why:** Janhunen 2003 ("Proto-Mongolic") and Kane 2009 (ch. 4 "Lexicon") both treat the bulk of Para-Mongolic / Khitan domestic-animal lexicon as cognate with Mongolic. Filling only 馬 while leaving every other domestic-animal cell as `—` understates known coverage.

---

### 10. 馬 — Hokkien literary reading "má" placed in main row for `nan_te`, but vernacular "bé" expected as primary

- **Current (line 5000 main row, vs line 22307 ff. variants block):** `nan_te` main `surface = "bhê2"` (= *bé*, vernacular 白讀), variants block at 22322 confirms *bé* (白) / *má* (文). So main row IS giving vernacular — fine.
- **Expected:** Internal consistency. For 龍 the main row gives `nan_te = "liong5"` (literary 文讀) — which contradicts the variants block at 19150 ff. that lists *liông* as 白讀 and *lêng* as 文讀. So 龍 nan_te main = literary, 馬 nan_te main = vernacular. Mixed.
- **Why:** The cohort lacks a single convention for which reading layer populates the main row when both exist. Fix: standardise — either always vernacular (matching the spoken everyday form) or always literary (matching the standard Sinosphere reading). Crossing the two for sibling rows produces a query result where 馬 and 龍 look phonologically dissimilar despite both being literary-stratum vocabulary.

---

### 11. 龍 — `ja_ojp` "ryuu" with `ja_kgs` (鎌倉時代) also "ryō" — diachronic ordering inconsistent

- **Current:** ja_ojp = "ryuu" (上代 = 8th century), ja_kgs = "ryō" (鎌倉 = 12th–14th century), ja_thk = "ryō" (東北方言 = modern Tohoku dialect).
- **Expected:** Old Japanese should distinguish kan-on *ryū* (漢音, from 唐音 stratum reaching Japan ~8th c.) and go-on *ryō* (呉音, earlier 6th-c. layer). The variants block at line 19164 correctly gives both: kan-on ryō / go-on ryū — note the relationship is INVERTED from what the main row implies. The variants block's labeling ("漢音 / Kan-on" = ryō; "呉音 / Go-on" = ryū) is the standard convention. The main row's ja_ojp = "ryuu" thus corresponds to the **earlier go-on** layer, not the OJP-era reading.
- **Why:** Old Japanese (Nara period, 7th–8th c.) primarily used 呉音 readings since 漢音 was just being introduced. So ja_ojp = "ryuu" (go-on layer) is defensible historically, BUT the variants block then labels go-on as ryū and kan-on as ryō, which by ~10th century became the literary norm. Cross-checking: the kana `"リュ"` at line 4533 is the 2-mora abbreviation of go-on *ryū*, but go-on is `"リュウ"` (4-letter long vowel). The kana–romanization mismatch in #5 above is therefore compounded by ambiguity about which stratum the cell represents.

---

### 12. 貓 — `ja_ojp` field entirely absent (no surface, no ipa, no native)

- **Current (lines 6036–6243):** No `ja_ojp` key in any sub-object.
- **Comment:** This is plausibly *correct* — 貓 is a late borrowing into Japanese (Heian-period or later; the native OJ word *neko* was already in use, and the Sinitic reading 猫 *byō*/*myō* enters via post-OJ stratum). So an empty ja_ojp here is defensible.
- **Recommendation:** Either leave blank (current) OR add `"—"` explicitly to mark that the absence is intentional, not an oversight. Compare: 羊 has `ja_ojp = "yau"` (the *yō* go-on reading, present in OJ texts) — both go back to ~10th c., so the criterion for inclusion vs absence isn't strictly chronological. If ja_ojp records readings *attested in Old Japanese texts*, then 貓 is correctly empty (Man'yōshū doesn't use 猫 — first text occurrence is Genji Monogatari, ~1000 CE, late Heian). Adding a comment field or `—` marker would communicate that the gap is by design.

---

### 13. 鳥 — Vietnamese `vi_nom = "chim"` is correct for *bird*, but `vi_ohan` is missing (line 5202 ff.)

- **Current:** Only `vi_nom = "chim"` (native Vietic), `vi = "Điểu"` (Sino-Vietnamese), `vi_c / vi_s` likewise. No `vi_ohan`.
- **Expected:** `vi_ohan = "đẽo"` or `"điều"` or the pre-Sino *\*tew → đêu* form documented in Pulleyblank's discussion of Sino-Vietnamese strata for 鳥 (Pulleyblank 1981, *Coblin Memorial Volume*). At minimum, the Old Sino-Vietnamese stratum reflex of 鳥 *tˤiwʔ should be present — the file gives `vi_ohan` for 龍 (rồng < *bləwŋ), for 馬 (ngựa < *ŋraːʔ), for 牛 (trâu — wrong, see #7), but skips 鳥.
- **Why:** Inconsistent stratum coverage. If `vi_ohan` is the column for Old Sino-Vietnamese (古漢越) reflexes, every Sinitic etymon with an attested OSV layer should populate it. 鳥 has a plausible OSV reflex (the *tew → tjew → ɟew* trajectory feeding either *chim* (semantic shift) or as a doublet); leaving it blank while filling 龍 / 馬 / 牛 is asymmetric.

---

### 14. 犬 — Old Chinese 犬 vs colloquial 狗 layer is not distinguished anywhere

- **Brief asks:** "犬 vs 狗 — Old Chinese 犬 vs Modern 狗 colloquial layer; nan 狗 káu vs literary 犬 khián."
- **Current (4768–4992):** Main row gives `nan_qz / nan_xm / nan_zz / nan_pn / nan_sg / nan_my / nan_id / nan_pera / nan_te / nan_hai` all = *khián* (literary 文讀 form, from MC *kʰwen²*). Variants block at line 22277 also gives only *khián* (白讀) / *khoán* (文讀) for nan, with no entry for 狗 *káu* (the actual everyday Min Nan word for *dog*).
- **Expected:** Either (a) the row header 犬 should be paired with a separate 狗 row for the colloquial layer, or (b) the colloquial Min Nan *káu* (狗) should appear in `native.nan` as the cross-language native equivalent (parallel to how `vi_nom = "chó"` gives the native Vietnamese form, not the Sinitic reading "khuyển"). Currently a Min Nan speaker reading the 犬 row sees *khián* (which they would NEVER use in speech) without any pointer to *káu* (which they use every day).
- **Why:** This is the same diglossic-layer problem the brief flags. *Khián* is a learned Sinitic reading of 犬; *káu* (狗) is the spoken word. The cohort's neighbour 貓 handles this correctly: 貓 row carries colloquial *niau* in main and *biâu* (文讀) in variants — for Min Nan 貓 IS the colloquial graph and *niau* IS the everyday word. For 犬, the equivalent treatment would be a graph swap (犬→狗) which the row-header schema can't accommodate. At minimum, document the layering issue, or add 狗 as a separate row, or carry *káu* in a sub-field.

---

### 15. 馬 — `ja_ojp = "me"` (line 5058) preserves the rare on-yomi but is misleading without context

- **Current:** ja_ojp surface = `"me"`, ipa = `"me"`, native = `"メ"`.
- **Comment:** This IS attested — *me* is the Old Japanese reading of 馬 in compounds (e.g. *uma → mma → me* in compounds like *ume "horse-grove" → 馬群*), and is documented in Vovin 2005–09. But it is heavily compound-restricted; the free-form OJ word for *horse* is *uma* (already given under `ja_kun`).
- **Recommendation:** Either keep `me` (as the historically attested on-stem reading) and add a brief label noting it is bound/compound-restricted, or replace with the free form *uma*. The current bare *me* will be misread as a general OJ reading parallel to *ryū* (龍) when in fact it is a sandhi/compound stem. Compare 牛 ja_ojp = "gu" (line 5699) which is the free-standing on-yomi from 呉音 *gu* < MC *ŋjuw* — properly general.

---

### 16. 貓 — `pmgl` missing; the Mongolic word for *cat* (mui/miyaur) IS reconstructable

- **Current (6036–6243):** No `pmgl` entry.
- **Expected:** Either `*— (post-PMgl wanderwort)` or `*mui` / `*miyaur` (modern Mongol *муур / *míur*) with a note. Janhunen (2003) does not provide a PMgl reconstruction (the cat reached Mongolia post-Proto), but every neighbouring family-level proto in the row IS filled or marked with `*` — leaving the cell blank without comment understates the deliberateness of the gap.
- **Why:** Same problem as #6 in reverse: there 龍 carries a spurious Mongolic reconstruction; here 貓 carries no Mongolic entry despite the modern Mongolic family having well-attested forms. The consistent treatment would be: any modern reflex with a known proto-form gets a `pmgl` value (with loan-marker if relevant); any without gets `—`.

---

### 17. 羊 — `pko` (Proto-Korean) is missing; consistent with native lexical layer but should be marked

- **Current (5838–6033):** No `pko` field.
- **Comment:** This is *probably correct in linguistic substance* — Korean has no native (non-Sinitic) word for *sheep*; 양 is purely a Sino-Korean reading of 羊 *ɢaŋ*. Lee–Ramsey (2011) and Vovin (2010) both note that *sheep* in Korea is a Sino-Korean term (sheep were not a basic-vocabulary Korean animal pre-modern). So PK *no inherited form* is correct.
- **Recommendation:** Add `pko = "—"` explicitly to mark the absence as intentional, matching the convention used elsewhere in the file for unattested forms.

---

### 18. 虎 — `pmgl = "*bars"` is a Turkic-Mongolic wanderwort, not specifically Proto-Mongolic

- **Current (4624, 4720):** `surface.pmgl = "*bars"`, `ipa.pmgl = "*bars"`.
- **Expected:** Either `*bars (wanderwort, common Turkic-Mongolic)` or — if the column is strictly inherited PMgl — `—`. The form *bars* (Mongol *бар*, Manchu *parqui*, Turkish *pars*) is a regional wanderwort distributed across Turkic, Mongolic, Tungusic, Khitan, and via Iranian; it appears in Common Turkic as early as Old Turkic *pars*, and its directionality into Mongolic is plausibly from Turkic.
- **Why:** Janhunen 2003 lists *bars* as a borrowing, not a PMgl inherited stem (Mongolic native bovid-feline vocabulary is sparse). Parallel to issue #6 (龍 *luu*) — flagging Sinitic vs wanderwort borrowings in the proto-language columns avoids misleading users. Janhunen explicitly puts *bars* in the "Steppe Wörter" category, not in the PMgl reconstructed lexicon.

---

### 19. 鳥 — `pmgl = "*sibawun"` — should be `*sibaɣun` (with /ɣ/, not /w/)

- **Current (5272, 5361):** `surface.pmgl = "*sibawun"`, `ipa.pmgl = "*sibaʊn"`.
- **Expected:** `*sibaɣun` per Janhunen 2003: 19, footnote on bird-vocabulary; Middle Mongol 𘺰𘺐𘻃 *sibaɣu(n)*, Written Mongolian *šibaɣu*, Khalkha *шувуу* with regular /ɣ/ → /w/ → vowel-lengthening. The Proto-Mongolic intervocalic *-ɣ-* is the source of the surface *-w-*; representing the proto-form as *-w-* projects the modern (Mongolian) outcome back onto the proto-stage.
- **Why:** Janhunen explicitly writes PMgl *š/sibaɣu(n)* with γ. Doerfer (1965 II: 348, entry 750) confirms WM *šibaɣu*. The /-bawun/ rendering is the post-Middle-Mongol shape. (Same notational issue as zh_tang/zh_song where Pulleyblank's reconstructions sometimes get modernized.)

---

### 20. 龍 / 鳥 / 魚 — `txg` (Tangut) readings duplicate the form across surface and ipa with no diacritic differentiation

- **Current:** 龍 txg `"ljow1"` / `"ljow¹"`; 鳥 `"djij2"` / `"djij²"`; 魚 `"ngwer2"` / `"ŋwər²"`. Only the IPA marker differs (¹/²).
- **Expected:** Either Sofronov's tense-vowel diacritic (e.g. *ljọw¹* with under-dot) in the IPA column, OR Jacques's length notation (*ljoːw*) — but the surface and IPA shouldn't be near-identical. Compare review #32 issue #11 which flagged the same problem for the wider Tangut column.
- **Why:** This is the systemic Tangut-column issue noted by review #32, surfacing again in the animals cohort. Surface and IPA should encode *different* representations (Latin transliteration vs phonetic transcription); duplicating them collapses the schema.

---

### 21. 馬 — `phm = "*mjænB"` — superscript B coding mixes register and tone categories

- **Current (5066, 5154):** `surface.phm = "*mjænB"`, `ipa.phm = "*mjænB"`.
- **Comment:** The "B" suffix in Proto-Hmongic reconstruction (Ratliff 2010) marks tone category B (rising). Used consistently across the file (cf. 虎 phm = "*tsjɔB", 魚 phm = "*mbrəuX"). 
- **Issue:** 馬 phm IPA shows the B unchanged. In a *phonetic* IPA column, tone category B should ideally be rendered as the actual contour (e.g. ˧˥ rising), not as a category label. The current ipa column doubles as transliteration. Same critique as #8 (pko surface = ipa).

---

### 22. 犬 — vi_nom native `"𤞻"` is correct but Cantonese / Yue colloquial dog (狗 *gau2*) absent

- **Current (4854–4865):** vi_nom = "chó" / 𤞻 (correct chữ Nôm). Yue (yue / yue_gz / yue_hk etc) all show "hyun2" (the literary reading of 犬, MC *kʰwen*).
- **Expected:** Same diglossic gap as #14. Cantonese everyday word for *dog* is 狗 *gau2*, not 犬 *hyun2*. *Hyun2* exists in classical compounds (犬牙, 犬齒) but is never used alone for "a dog". 
- **Why:** Compounded with issue #14, this exposes that the file's Sinitic-row strategy for 犬 effectively encodes only the literary (book) layer. A user wanting to know how speakers say *dog* will find no help here for any Sinitic lect — every Sinitic cell gives a learned reading. Either add colloquial 狗 forms in a sub-field, or document that the file's Sinitic rows are literary-stratum only.

---

### 23. 鳥 — `nan_te` reading `"tsiau2"` / IPA `"t͡siau˥˧"` is the colloquial *chiáu*, but the variants block (22454) gives the SAME 文讀 reading `"niáu"`

- **Current:** Main row nan_te (5206) = "tsiau2" = colloquial. Variants block (22451) for plain nan: 白讀 *chiáu* / 文讀 *niáu*.
- **Comment:** Internal cross-check OK for nan_te if main = vernacular (matching 馬 main = vernacular). But this is the **opposite** convention from 龍 main row (where nan_te = "liong5" = literary). The cohort is mixing conventions yet again.
- **Why:** See issue #10. Pick a convention and apply uniformly.

---

### 24. 貓 — `nan_te = "niau1"` is vernacular but the variants block (23032 ff.) lacks `nan_te` literary doublet entirely

- **Current:** Main row nan_te = "niau1" (colloquial *niau*). Variants block at 23031 only carries plain `nan`: 白讀 *niau* / 文讀 *biâu*. Other nan_* lects (nan_te, nan_qz, etc.) have NO variant entries for 貓.
- **Expected:** If 貓 is to follow the same pattern as 犬 / 馬 / 鳥 (variants block per lect carrying 白/文 doublets), then nan_te, nan_qz, nan_xm, nan_zz, etc. should each have a variant pair. They don't.
- **Why:** Coverage asymmetry — for some animals the variants block enumerates every Hokkien lect, for others (貓) only the bare nan. The literary reading for 貓 IS *biâu* across nan_qz/xm/zz/pn/sg/my/id/pera, parallel to how the variants block enumerates them for 龍 / 犬 / 馬 / 鳥 / 魚 / 牛 / 羊.

---

### 25. 羊 — `vi_nom = "cừu"` is *post-contact loan* (probably from French *brebis* / via *cừu* meaning sheep specifically) — earlier Vietnamese sheep-word may differ

- **Current (5921, 6005, 6032):** vi_nom surface = "cừu", ipa = "kɨw˨˩", native = "𦍒".
- **Comment:** *Cừu* is the modern Vietnamese word for *sheep*, but Vietnam had limited indigenous sheep husbandry pre-1900; the word is post-classical. The chữ Nôm 𦍒 (sheep+人) is a Sinographic compound and a relatively late creation.
- **Recommendation:** Acceptable as-is (the field is "native Vietnamese form for the concept"), but worth a note that for 羊 the Vietnamese native vocabulary is shallow. Compare 牛 where Vietnamese has the well-established native *bò* vs 羊 where *cừu* is essentially a learned/post-contact term. The asymmetry mirrors real Vietnamese lexical history.

---

## Summary

25 findings, distributed:
- **Structural / schema-level (1, 2, 3, 8, 20, 21):** simplified-script representation gap, Hokkien lect coverage holes, missing Phags-pa fields, surface=IPA collapse in proto-language columns, Tangut duplicate-form issue. These are systemic — fixes ripple across the file.
- **Etymology / proto-form (4, 6, 18, 19):** missing PJ 馬, spurious PMgl 龍/虎, mis-rendered PMgl 鳥. Affect the historical-linguistics columns.
- **Diglossia / stratum (10, 14, 22, 23, 24):** literary vs vernacular reading layer for Sinitic lects; 犬/狗 split. Same problem manifested in five different ways across the cohort.
- **Per-cell substance (5, 7, 11, 15):** specific value errors — 龍 ja_ojp kana mismatch, 牛 vi_ohan "trâu" semantic error, 龍 ja stratum ambiguity, 馬 ja_ojp "me" compound-bound.
- **Coverage asymmetry (9, 12, 13, 16, 17, 25):** missing fields that are deliberate (mark with `—`) vs accidental (fill).

Most impactful single fix: **issue #2** (populate the main `nan_*` blocks for 龍, 馬, 鳥, 牛, 羊 from the variants-block data that already exists). Second most impactful: **issue #7** (replace `vi_ohan = "trâu"` with `"bò"` for 牛).

---

**File:** `/home/jounlai/langmap/hanmap_reviews/38_open.md`
**Finding count:** 25


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 7
- **policy/withdrawn skip**: 18
- **headline**: 牛 vi_ohan trâu→bò (water buffalo→ox 修正) ×2, 龍 pmgl *luu delete (Sinitic loan, Janhunen 2003) ×2, 虎 pmgl *bars delete (Turkic wanderwort) ×2, 龍 ja_ojp リュ→リュウ ×1
- **JSON path**: /tmp/hm_edits_38.json
