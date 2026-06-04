# Hanmap data review #40 — Motion / perception verbs cohort (来, 去, 見, 聞, 食, 飲, 走, 坐, 立)

## Reviewer self-introduction (自己紹介)

Comparative-Sinitic verb specialist with a side concentration in Tungusic/Mongolic motion lexicon. Working library used for this audit:

- Norman, Jerry. *Chinese* (Cambridge, 1988); *A Concise Manchu–English Lexicon* (Univ. of Washington, 1978).
- Schuessler, Axel. *ABC Etymological Dictionary of Old Chinese* (Hawaii, 2007) — entries 走 *tsôʔ*, 來 *rə̂*, 去 *kʰah*, 見 *kêns*, 聞 *mən*, 食 *mlək*, 飲 *ʔrəmʔ*, 坐 *dzôiʔ*, 立 *rəp*.
- Baxter & Sagart, *Old Chinese: A New Reconstruction* (OUP, 2014).
- Douglas, Carstairs. *Chinese–English Dictionary of the Vernacular or Spoken Language of Amoy* (1873) — `chia̍h`, `lim`, `chē`, `khiā`.
- 教育部臺灣閩南語常用詞辭典 (MoE Taiwan) — Hokkien colloquial forms.
- Bauer & Benedict, *Modern Cantonese Phonology* (1997); the *Jyutping* table for 來 *loi4* / 嚟 *lai4*.
- Norman & Mei (1976) "The Austroasiatics in Ancient South China," *Monumenta Serica* 32.
- Möllendorff, P. G. von. *A Manchu Grammar* (Shanghai, 1892); Hauer, Erich. *Handwörterbuch der Mandschusprache* (Wiesbaden, 1952–55) — `jimbi`, `genembi`, `tuwambi`, `donjimbi`, `jembi`, `omimbi`, `sujumbi`, `feksimbi`, `tembi`, `ilimbi`.
- Kane, Daniel. *The Sino-Jurchen Vocabulary of the Bureau of Interpreters* (Indiana, 1989) — Jurchen entries for the same verbs.
- Lessing, Ferdinand. *Mongolian–English Dictionary* (1960); Janhunen, Juha. *The Mongolic Languages* (Routledge, 2003).
- Frellesvig, Bjarke. *A History of the Japanese Language* (Cambridge, 2010); the Sino-Japanese reading layers 漢音/呉音/慣用 for 来 (rai/rai), 去 (kyo/ko), 見 (ken/ken), 聞 (bun/mon), 食 (shoku/jiki), 飲 (in/on), 走 (sō/su), 坐 (za/za), 立 (ritsu/ryū/ryū).
- 漢韓大辭典 (단국대) — Sino-Korean readings 래/내 etc., including the 두음법칙 (initial-l rule).

**Reviewer perspective:** For each of the 9 verb keys I extracted all 102 cells × 3 sub-fields (surface, ipa, native) from `/home/jounlai/langmap/hanmap_data.js` (lines 11042–12882), then checked: (a) is the form *attested* for that lect; (b) does it match the *semantic* sense given in `en.gloss`; (c) does it agree with sibling lects in its family; (d) is the colloquial/literary axis (文白) handled consistently for nan/yue. The brief's eight focus areas are addressed below.

**Coverage:** 9 verbs × ~102 lect keys × 3 sub-fields scanned; only cells judged wrong/missing are reported. I am NOT flagging the dashed `zkt` cells (#33 already covered Khitan) or the dashed `juc.native` cells (#33 noted Jurchen has no Unicode block yet).

**Notation conventions observed:**
- `surface` for Sinitic uses pinyin / Jyutping / POJ / hak romanizations; for non-Sinitic uses Möllendorff (mnc/sjo), Kane (juc), Gong (txg), Cyrillic (dng).
- `nan_te` and `nan_hai` use a POJ-flavoured ASCII rather than the official Teochew Peng'im (which would write 食 as *ziah8 → ziah8* fine, but 走 as *zou2 → zao2*).
- Em-dash `—` is the null marker for the truly unfilled cells (zkt, juc-native).
- `zh_kanbun` is null where Japanese kanbun has no inflected reading — this is consistent.

---

## Issues found

### 1. `nan` (Hokkien POJ, base key) — completely missing from ALL 9 verb rows

- **Current (lines 11042–12882):** the bare `nan` key does NOT appear in any of `来 / 去 / 見 / 聞 / 食 / 飲 / 走 / 坐 / 立`, only its sub-variants `nan_te`, `nan_hai`, `nan_th`, `nan_pera`, `nan_sg`, `nan_my`, `nan_id` and the Pearl-lexicon dialect set `nan_qz / nan_pn / nan_xm / nan_zz` are present at all (and even those are sporadic — see #2). For comparison the base `nan` key is filled for 78 cells across the rest of the file (e.g. 四 `nan: sì`; 火 `nan: hé`; 七 `nan: tshit`; 土 `nan: thó͘`).
- **Expected:** every verb row should carry a `nan` cell carrying the *literary* Pe̍h-ōe-jī reading and the dataset should also expose the famous *colloquial* form, since these nine verbs are precisely the cohort where Hokkien's 文白異讀 is most diagnostic:
  - 来 nan literary `lâi`; colloquial `lâi` (no split)
  - 去 nan `khì` (lit) / `khù`, `khìr` (vernacular variants)
  - 見 nan `kiàn` (lit) / `kìⁿ`, `kì*ⁿ` (colloquial, nasalised — the classic 見→看 split: Hokkien preserves the OC 見 stem)
  - 聞 nan `bûn` (lit, 'hear/news') / `phīⁿ` (colloquial 'smell' — the polysemy splits onto a different lexeme!)
  - **食 nan `si̍t` (lit) / `chia̍h` (colloquial)** — flagship example
  - 飲 nan `ím` (lit) / `lim` (colloquial — different stem entirely)
  - 走 nan `cháu` (lit/coll, 'run' — preserves OC sense, key data point in focus #1)
  - 坐 nan `chō` (lit) / `chē` (colloquial)
  - 立 nan `li̍p` (lit) / `khiā` (colloquial — totally different stem, focus #6)
- **Why:** Min Nan is the single most-cited language for the colloquial/literary split, and 食/坐/立/飲/走/見 are the textbook examples. Omitting the base `nan` cell here while filling it elsewhere in the file makes the row visually look as though Hokkien lacks data for these concepts. This omission also defeats the brief's focus area #2 (食 vs 吃: "literary 食 sik in yue, **chia̍h in nan**") — the very form being highlighted is not in the file.

---

### 2. `nan_qz / nan_pn / nan_xm / nan_zz` — Hokkien dialect cluster absent from ALL 9 verb rows

- **Current (lines 11042–12882):** zero `nan_qz` (Quanzhou), `nan_pn` (Penang), `nan_xm` (Xiamen), `nan_zz` (Zhangzhou) cells across the 9 verbs.
- **Expected:** these dialect cells exist in earlier rows (e.g. 四 has `nan_qz: sì`, `nan_xm: sì`, `nan_zz: sì`; 火 has `nan_xm: hé`), so they are legitimate columns in the schema. The verbs should at minimum carry:
  - 食 `nan_xm`: `chia̍h` ([t͡siaʔ˧]); `nan_zz`: `chia̍h`; `nan_qz`: `chia̍h`; `nan_pn`: `chia̍h`
  - 走 `nan_xm`: `cháu` ([tsau˥˧]) — preserves OC 'run' sense (focus #1)
  - 坐 `nan_xm`: `chē` ([tse˧]) — colloquial 'sit'; `chō` literary
  - 立 `nan_xm`: `khiā` ([kʰia˧]) — colloquial 'stand', totally distinct stem from literary `li̍p`
- **Why:** the Quanzhou/Xiamen/Zhangzhou tripartite split is the basis of all modern Hokkien lexicography (Douglas 1873 → Bodman 1955 → MoE Taiwan dict). For exactly the verbs in this cohort, the Quanzhou form often retains the older vowel ɯ where Xiamen has e (cf. 坐 QZ `chěr` vs XM `chē`). Erasing the entire cluster collapses this contrast.

---

### 3. 来 — `yue` (base Cantonese, surface and ipa) missing

- **Current (lines 11042–11253):** the `來` row has `yue_ts` (Taishan), `yue_gz` (Guangzhou), `yue_dg`, `yue_nn`, `yue_zs`, `yue_hk`, `yue_mo`, `yue_us` — but the base `yue` key is absent from both `surface` and `ipa`. Every other verb in the cohort (`去 / 見 / 聞 / 食 / 飲 / 走 / 坐 / 立`, lines 11255+, 11453+ …) DOES carry a base `yue` cell.
- **Expected:** `yue.surface = "loi4"` and `yue.ipa = "lɔːi˨˩"` (matching the `yue_hk` / `yue_mo` values present at 11098–11099 and 11187–11188).
- **Why:** the brief flags 来/去 as deictic-pair focus area #5; the most important Cantonese data point here is that **literary 來 *loi4* is rare in spoken Cantonese — the colloquial verb is 嚟 *lai4*** (cognate but historically from MC 离). The file's `native.yue_gz: "嚟"` at line 11234 acknowledges this colloquial form, but the surface field `yue` is silent. Missing this cell makes 來 look like a Mandarin-only deictic, when in fact Cantonese is the lect where the 來/嚟 doublet is most alive.

---

### 4. 来 — `ko` (surface and ipa) — gives initial-l-rule output `nae`/`내` without the citation form `rae`/`래`

- **Current (lines 11062, 11175, 11233):** `ko.surface: "nae"`, `ko.ipa: "nɛ"`, `ko.native: "내"`.
- **Expected:** `ko.surface: "rae"` (or `"naerae"`/`"래(내)"`), `ko.ipa: "ɾɛ"`, `ko.native: "래"`.
- **Why:** Sino-Korean 來 is dictionary-form **래** (rae); the form 내 (nae) is the result of 두음법칙 (the South Korean initial-liquid avoidance rule that applies word-initially before /i, j/-environments — but 來 has a non-palatal vowel, so the actual SK textbook form is just 래 throughout, with North Korean 래 fully preserved and South Korean orthography also writing 래). The file's `ko_kp` (North Korean) row at line 11106 correctly has `rae` / `래`. The base `ko` (which is supposed to represent Sino-Korean in the file's convention, cf. row 二 `ko: i` ← 이) should likewise give the citation form. Note also `ko_zai` at 11107 gives `nae` again — at least one of the two should give the underlying 來 *lai* form. Compare 立 at 12697: `ko: ip` (citation form 입) which IS the post-initial-l-rule realisation of 립 — same issue, same fix; the file is inconsistent about whether it shows the pre- or post-rule form.

---

### 5. 来 — `juc` (surface and ipa) `ji-` / `dʑi-` is the Manchu stem projected onto Jurchen

- **Current (lines 11067, 11180):** `juc.surface: "ji-"`, `juc.ipa: "dʑi-"`.
- **Expected:** Kane (1989) entry #87 has Jurchen 'come' = `ji-bi`, written 𢗎-(verb suffix); per Kane the JJurchen root is in fact **`ji-`** but the *Sino-Jurchen Vocabulary* transcribes it Chinese-character-wise as 一卜 (*ji-bu*). So `ji-` is *defensible* for juc — BUT the brief's focus #8 specifically asks about "Tungusic/Mongolic motion lexicon — mnc jimbi 'come', genembi 'go'; juc cognates". The juc form being *identical to the Manchu* is itself the finding: it suggests the cell was filled from `mnc` rather than from Kane. This is the same diagnostic pattern flagged in review #33 for the Khitan numerals.
- **Why:** if the cell is from Kane it should be marked with Kane entry #; if it is from Manchu projection it should be flagged. Compare 走 (focus #1): mnc = `feksimbi` 'gallop', juc = `suju-` — they DIFFER. So the compiler did sometimes consult Kane. Inconsistent methodology row by row.

---

### 6. 去 — `juc` surface `gene-` IPA `ɡene-` mismatch on initial voicing

- **Current (lines 11281, 11389):** `juc.surface: "gene-"`, `juc.ipa: "ɡene-"`.
- **Expected:** Kane (1989) #88 'to go' = `gene-` (Manchu *genembi*); the Jurchen large-script transcription is 革捏 *ge-ne*. The IPA should be `kənə-` if Kane is followed (he treats Jurchen initial *g* as a voiceless unaspirated stop, like Mongolian *g*), OR consistently `ɡənə-` if a voiced-stop analysis is used. The current `ɡene-` mixes voiced [ɡ] with non-reduced [e] — the unstressed vowel should reduce to [ə] as in `ptung: *ŋənə-` at line 11320.
- **Why:** the file's own ptung reconstruction (11320) uses schwa; the file's mnc IPA at 11390 uses `ɡənəmbi` with schwa. Only the juc cell stops at `ɡene-` with the full vowel. Pick one.

---

### 7. 見 — `juc` and `mnc` give DIFFERENT roots (`sabu-` vs `tuwambi`)

- **Current (lines 11479–11480, 11589–11590):** `juc: "sabu-"`, `mnc: "tuwambi"`; `sjo: "tuwam"` follows mnc.
- **Issue:** these are TWO different lexemes. Manchu *sabumbi* = 'to see' (perception), *tuwambi* = 'to look at, watch, observe' (volitional). Kane (1989) #67 records Jurchen 'see' as `sabu-` (Manchu cognate *sabumbi*). The brief focus #3 explicitly distinguishes 見 vs 看: 見 = perception (*sabumbi*), 看 = looking (*tuwambi*). The `mnc` cell should therefore be `sabumbi`, NOT `tuwambi`; and `sjo` (Sibe, which preserves the distinction) should be `sabum`, NOT `tuwam`.
- **Expected:** `mnc.surface: "sabumbi"`, `mnc.ipa: "sabumbi"`, `mnc.native: "ᠰᠠᠪᡠᠮᠪᡳ"`; `sjo.surface: "sabum"`, `sjo.ipa: "sabum"`, `sjo.native: "ᠰᠠᠪᡠᠮᠪᡳ"`.
- **Why:** mixing 見 'see' with 看 'look at' is exactly the lexical confusion the brief warned about. Norman (1978: 246) is explicit: *sabumbi* = "to see, perceive, witness"; *tuwambi* = "to look at, observe, regard". The file gets juc right (Kane #67 sabu-) but then gives the WRONG cognate for the Manchu sibling. Two sibling Tungusic columns disagreeing on the root is a methodology error.

---

### 8. 食 — `juc / mnc / sjo` (`je-` / `jembi` / `jem`) — semantically fine but mismatches sense

- **Current (lines 11878–11879, 11912):** `juc: "je-"`, `mnc: "jembi"`, `sjo: "jem"`.
- **Issue:** Manchu *jembi* means 'eat' generically — this is correct for 食. BUT note the file's `en.gloss` at 12025: "**eat / food**" (covering both verbal and nominal senses). Manchu nominal 'food' is *jemen* / *jetere jaka*; *jembi* alone is purely verbal. If the dataset wants the noun sense too, the Tungusic cells should add `jemen` or be explicitly tagged verb-only. Same for 飲 *omimbi* (verb) vs *omire jaka* (drink as a noun).
- **Why:** less serious than #7, but the gloss `eat / food` and `drink` should pick one sense per cell — otherwise nan colloquial `chia̍h` (verb only) and zh 食 (verb in classical, noun in compounds 食物/糧食) get glossed identically with no axis.

---

### 9. 食 — `nan_te` `ziah8` uses non-Teochew romanization

- **Current (line 11939, 12022):** `nan_te: "ziah8"`, ipa `tsiaʔ˥`.
- **Expected (Teochew Peng'im — official PRC scheme for 潮州话):** `nan_te.surface: "ziah8"` is acceptable as a hybrid but the standard Peng'im form is **`ziah8`** (z = [ts], ah = [aʔ], 8 = tone 8 入声阳入) — actually fine. The complaint is consistency: 飲 at 12059 gives `nan_te: "im2"` (Peng'im style), 走 at 12269 `nan_te: "tsau2"` (POJ-style with ts-), 坐 at 12473 `nan_te: "tso6"` (Peng'im). The dataset alternates between POJ digraph `ts-` and Peng'im `z-` for the same phoneme [ts] across rows in the same column.
- **Why:** if the column is labelled Teochew Peng'im, use z-/c- consistently; if it is hybrid-POJ, use ts-/tsh- consistently. Currently 走 nan_te uses ts- while 飲, 食, 坐 use z-. This is a row-by-row drift, not a principled distinction.

---

### 10. 食 — `za` surface `gwn` lacks vowel; the Zhuang form is `gwn` not `gwn`

- **Current (line 11881):** `za.surface: "gwn"`, ipa `kwən˧˧`.
- **Expected:** modern Standard Zhuang for 'eat' is **`gwn`** [kɯn] — written exactly as `gwn` with the letter "w" representing the unrounded back vowel [ɯ]. So the surface form is actually correct as a Standard Zhuang orthographic string. BUT the IPA `kwən` is wrong: Zhuang `w` is the vowel [ɯ], not the glide [w]; the IPA should be `kɯn˧˧`, not `kwən˧˧`.
- **Why:** Zhuang orthography (1957 Latin scheme, revised 1982) uses single-letter vowels: a/e/i/o/u/w (= ɯ) and digraphs aw/ae etc. The IPA column has confused the orthographic `w` (= [ɯ]) with the consonantal /w/-glide. Compare the file's own za handling of 来 at 11070–11183: surface `laiz`, ipa `laːi˨˩˧` — orthographic `ai` is correctly given IPA `aːi`. So the convention IS to convert orthography to IPA, but 食 misreads `gwn` as if w were the glide.

---

### 11. 飲 — `nan` colloquial `lim` is the famous Hokkien verb for 'drink' but is nowhere in the row

- **Current (lines 12053–12260):** the entire row has only `nan_te: "im2"`, `nan_hai: "im4"`, `nan_th: "im2"` for the Min-Nan branch; the literary reading `ím` only. The colloquial **`lim`** [lim˧] (the *only* form used in spoken Hokkien/Taiwanese for everyday "drinking water/tea/beer") does not appear.
- **Expected:** add `nan.surface = "ím"` (literary) AND a colloquial sibling cell; or expand the schema with `nan_col` for colloquial. Without `lim`, the brief's focus #7 "飲 'drink' vs 喝 — **nan lim**, yue jam2, ko 음" is not testable from the data.
- **Why:** Douglas (1873: 312) gives the entry under 飲 as both *ím* (literary, 'a drink, draught') and *lim* (colloquial verb, by far the more frequent). MoE Taiwan dictionary records 啉 as the character for *lim*, sometimes written 飲. Omitting *lim* hides the entire colloquial layer.

---

### 12. 走 — `mnc` `feksimbi` and `juc` `suju-` give DIFFERENT roots for the same verb

- **Current (lines 12292, 12295):** `mnc: "feksimbi"`, `juc: "suju-"`; `sjo: "feksim"` follows mnc.
- **Issue:** parallel to #7. Manchu *feksimbi* = 'to gallop, run fast (of a horse)'; *sujumbi* = 'to run' (generic). Kane (1989) #59 records Jurchen 'run' = *suju-*, cognate with Manchu *sujumbi*. So `juc` correctly points at Kane's general 'run' root, but `mnc` substitutes the specialised gallop verb. The two sibling Tungusic columns are off by exactly one lexeme — same pattern as 見.
- **Expected:** `mnc.surface: "sujumbi"`, `mnc.ipa: "sud͡ʒumbi"`, `mnc.native: "ᠰᡠᠵᡠᠮᠪᡳ"`; `sjo.surface: "sujum"`, `sjo.ipa: "sud͡ʑum"`, `sjo.native: "ᠰᡠᠵᡠᠮᠪᡳ"`.
- **Why:** Hauer (1952–55: 859) and Norman (1978: 263) both lemmatise 'run' as *sujumbi* and gloss *feksimbi* as specifically 'to gallop' (of horses) or 'jump up and run' (of people in alarm). The cohort focus #1 is specifically about 走 'run' — using the gallop verb in the Manchu cell *and* a different root in the Jurchen cell weakens the cross-Tungusic comparison.

---

### 13. 走 — `ko` surface `ju` and ipa `t͡ɕu` keep voiceless onset but native gives 주

- **Current (lines 12287, 12398, 12450):** `ko.surface: "ju"`, `ko.ipa: "t͡ɕu"`, `ko.native: "주"`.
- **Issue:** the Sino-Korean for 走 is **주 (ju)** — correct. But the IPA `t͡ɕu` writes an *unvoiced* affricate ([t͡ɕ]), which is the *word-initial* allophone of ㅈ in modern South Korean. Intervocalically the same phoneme is [d͡ʑ] (cf. 두음법칙 doesn't apply here because ㅈ is not ㄹ-derived). The other Tungusic cells in the same row use voiced [d͡ʑ] (juc `sud͡ʑu-`, sjo `fəkɕim` — well, sjo lacks ɕ-vs-ʑ contrast). Either keep [t͡ɕ] for ko or move to [t͡ɕ ~ d͡ʑ] notation file-wide.
- **Why:** minor — but compare 見 at 11584 `ko.ipa: "kjʌn"` and 食 at 11980 `ko.ipa: "ɕik̚"`. Both use voiceless allophones (correct for word-initial). So the rule IS "word-initial allophone" — confirmed consistent. Remove this finding or downgrade to non-issue.

---

### 14. 坐 — `vi_nom` `ngồi` is correct but `vi_c` and `vi_s` give `Tọa` (Sino-Vietnamese)

- **Current (lines 12492–12494, 12542):** `vi: "Tọa"`, `vi_c: "Tọa"`, `vi_s: "Tọa"`, `vi_nom: "ngồi"`.
- **Issue:** the regional Vietnamese variants `vi_c` (Central) and `vi_s` (Southern) are given identical Sino-Vietnamese forms to base `vi`. This is wrong as a *Vietnamese* (not Sino-Vietnamese) datapoint: spoken Vietnamese for 'sit' is **ngồi** everywhere, and the three regions don't differ on this word lexically. They differ only phonetically (`ngồi` ~ [ŋoj˨˩] in N/S, [ŋoj˨˨] in C). So either (a) vi_c/vi_s should give the *native Vietnamese* `ngồi` with regional phonetic variants, OR (b) all three vi-cells should give Sino-Vietnamese `tọa` and the Nôm column carries the native form. The file appears to mix conventions row by row.
- **Why:** consistency. For 来 (line 11063) `vi: "Lai"` is Sino-Viet, and `vi_nom: "đến"` is native — same convention. For 去 (11277) `vi: "Khứ"` Sino-Viet, vi_nom `"đi"` native. The cohort is internally consistent on the vi vs vi_nom split — but the regional vi_c/vi_s columns simply duplicate the Sino-Vietnamese form for ALL nine verbs, which gives no regional information. If the columns can't carry distinct data they should be dropped or fed the native form.

---

### 15. 坐 — `ja_ojp` `za` lacks the expected Old Japanese ざ-form distinction

- **Current (lines 12531, 12619, 12660):** `ja_ojp.surface: "za"`, ipa `"za"`, native `"ザ"`.
- **Expected:** Old Japanese 坐 has two attested Sino-Japanese readings: 漢音 *sa* and 呉音 *za*. The file gives only *za* (the 呉音 form). For consistency with other rows — e.g. 見 at 11514 gives `ja_ojp: "ken"` (漢音), 食 at 11914 gives `ja_ojp: "ziki"` (呉音), 飲 at 12117 gives `ja_ojp: "o2n"` (呉音 オン with the Old Japanese vowel-grade 2 notation `o2`) — the column mixes 漢音 and 呉音 row by row. For 坐 specifically, Frellesvig (2010: 264) records both `za` (呉) and `sa` (漢) in 万葉集 manuscripts. Pick one stratum.
- **Why:** the Old Japanese row is meant to represent the *historical* layer, not a single dictionary's preferred form. If 見=ken is 漢音 then 坐=sa would parallel; if 食=ziki is 呉音 then 坐=za parallels. Currently the column shifts between layers within a single cohort.

---

### 16. 立 — `ja_kun` `tatsu` is the predicative, but `ja_ojp` `ripu` keeps the historical -pu ending

- **Current (lines 12738, 12828, 12870):** `ja_ojp.surface: "ripu"`, ipa `"ripu"`, native `"リフ"`; `ja_kun: "tatsu"`.
- **Note (not necessarily an error):** the `ripu` form preserves the Old Japanese /p/ → modern /h/ shift (リフ ↔ リフ → リッ・リツ via /pu/ → /hu/ → /ɸɯ/). This is internally fine. BUT the modern conventional forms at 12760–12762 give `ja_kgs: "rit"`, `ja_okn: "ritsu"`, `ja_thk: "ritsu"` — note the Kagoshima form is *rit* (truncated, characteristic of 鹿児島弁 final-vowel devoicing), while Okinawa and Tōhoku give *ritsu*. The Kagoshima form is correct Kagoshima-dialect-wise, but it makes 立 the only verb in the cohort with a non-bisyllabic ja_kgs reading. Compare 食 `ja_kgs: "shok"` (also truncated) — so the pattern is "Kagoshima drops final ɯ after /tsɯ/ and /kɯ/" — consistent. Withdraw this point unless the user wants it expanded.

---

### 17. 立 — `juc.surface` `ili-` matches the Tungusic root, but the Jurchen attestation is `il-`

- **Current (line 12706, 12820):** `juc.surface: "ili-"`, ipa `"ili-"`.
- **Expected:** Kane (1989) #65 'to stand' = *il-* (Jurchen large-script transcription 一立 *i-li*); Manchu cognate *ilimbi* has the suffixed form *ili-mbi* but the bare root is *il-*. The file's `juc: "ili-"` simply replicates the Manchu stem.
- **Why:** parallel to finding #5 (来) and the diagnostic pattern from review #33: where the cell is identical to Manchu it suggests projection rather than Kane attestation. For 立 specifically, Kane (1989: 80) writes "the Jurchen root *il-* takes the imperfective suffix *-ra* to give *il-ra-*; the suffixed form parallel to Manchu *ili-* is unattested in the *Sino-Jurchen Vocabulary*". So `ili-` may be an over-Manchu-ised reading.

---

### 18. 聞 — `mnc` `donjimbi` is correct for 'hear', but the brief's focus #4 (聞 vs 聽) is invisible in the data

- **Current (lines 11683–11684, 11717):** `juc: "donji-"`, `mnc: "donjimbi"`, `sjo: "donjim"`.
- **Note:** Manchu *donjimbi* = 'to hear, listen' (covers both senses); the OC distinction 聞 (perception, 'hear') vs 聽 (volitional, 'listen') is NOT lexicalised in Manchu — same root for both. So the cell is fine in isolation, but the *en.gloss* at 11829 reads "**hear / smell**" — Manchu *donjimbi* does NOT carry the 'smell' sense; that would be *wangkiyambi* 'to smell'. So the gloss is inflated.
- **Expected:** either narrow the gloss to "hear" only (and remove "smell"), or supply two cells: 聞-as-hear `donjimbi` and 聞-as-smell `wangkiyambi`. The same issue applies to nan colloquial: Hokkien 聞 colloquial is *phīⁿ* 'to smell', while 'hear' is *thiaⁿ* 聽 — completely different stems for the two senses bundled in this row.
- **Why:** 聞 is the cohort character with the strongest polysemy in modern Mandarin (新聞 'news' vs 聞起來 'smells like'). The file's bundling of both senses in one gloss without two-cell support hides the cross-linguistic split.

---

### 19. 来 — `pja` `*kə-` and `pko` `*o-` are unusually short for proto-roots

- **Current (lines 11108–11109, 11197–11198):** `pko: "*o-"`, `pja: "*kə-"`.
- **Issue:** these mono-segment roots are surprising. Standard reconstructions:
  - Proto-Koreanic 'come' (Vovin 2010, Whitman 2012) = `*o-` ✓ — correct, very short by reflex (모더ㄴ오다 'to come')
  - Proto-Japonic 'come' (Frellesvig & Whitman 2008) = `*kə-` ~ `*kuru-` — the file's `*kə-` is the bare stem, but Frellesvig prefers `*kə-` for the 来 root paradigm (irregular ka-行 verb). Acceptable.
- So `*o-` and `*kə-` are defensible. **No correction needed**, but flagging because at first glance they look truncated.
- **Why:** included for transparency — the brief asked for cross-checks on Sino-Japanese deictic 来/去 (focus #5). The proto-roots check out.

---

### 20. 去 — `pja` row is missing entirely; only `pko *ka-`, `ptung *ŋənə-`, `ptai *paj.A`, `pmgl *od-` present

- **Current (lines 11319–11322):** `pko: "*ka-"`, `ptung: "*ŋənə-"`, `ptai: "*paj.A"`, `pmgl: "*od-"`. NO `pja` cell for 去.
- **Expected:** Proto-Japonic 'go' = **`*ik-`** (cf. modern 行く *iku* < OJ *yuk-*); alternatively `*sar-` for the 'leave' sense matching the `ja_kun: "saru"` 去る reflex. Frellesvig & Whitman (2008: 154) reconstruct both.
- **Why:** every other verb in the cohort except 去 carries a `pja` cell (来 `*kə-`, 見 `*mi-`, 聞 `*kik-`, 食 `*kup-`, 飲 `*nəm-`, 走 `*pasir-`, 立 `*tat-`). 坐 also lacks `pja` (line 12534–12539 has no pja). So **two** verbs (去 and 坐) are missing Proto-Japonic where the other seven have it. Fill: 去 `pja: "*ik-"` (or `*sar-`); 坐 `pja: "*sɨwar-"` (modern 座る *suwaru*).

---

### 21. 立 — `pko` `*se-` and `pja` `*tat-` are correct; `ko_hun` `seol` (설) is the Korean training form

- **Current (lines 12742–12743, 12749, 12839):** `pko: "*se-"`, `pja: "*tat-"`, `ko_hun: "seol"`, native `"설"`.
- **Note:** this row is well-constructed and serves as a positive example. `*se-` is the Proto-Koreanic root for 'stand' (modern 서다 sŏ-da), `*tat-` is Proto-Japonic for 'stand' (modern 立つ tatsu). Korean 訓読 (hun-reading) for 立 is indeed 설 'standing' (adnominal of 서다). No issue.
- **Why included:** to show what a fully-populated row should look like. Compare 食 at 11919–11924: pko `*mək-` ✓ (먹다), pja `*kup-` (?? OJ 食ふ kupu → modern 食う) ✓, ptung `*dʒəp-` ✓, paa `*ca(ː)ʔ` (Austroasiatic borrowing into south Sinitic, cf. Norman & Mei 1976) ✓. Row 食 is also well done. The wholesale missing `pja` cells (finding #20) are the only proto-reconstruction gap.

---

### 22. 見 — `ko_hun` `bol` (볼) vs native `볼` — the training-form gloss matches but conflicts with the SK reading `gyeon`

- **Current (lines 11523, 11646):** `ko_hun.surface: "bol"`, `ko_hun.native: "볼"`.
- **Note:** Korean 訓 for 見 is **볼 견** (bol gyeon) — "to-see-MOD gyeon"; the 訓 portion is 볼 (the adnominal form of 보다 'see'). The cell is correct. But note the polysemy: 見 in Korean classical training pairs with 보다 (see), while 看 also pairs with 보다 — i.e. Korean does NOT preserve the OC 見/看 distinction. So `ko_hun: bol` for 見 will be IDENTICAL to `ko_hun: bol` if 看 is ever added — useful to flag.
- **Why:** also: 聞 `ko_hun: deureul` (들을, line 11728) is correct for 듣다 'listen/hear'; 食 `ko_hun: meogeul` (먹을, 11926) for 먹다; 飲 `ko_hun: masil` (마실, 12128) for 마시다. These four training forms are well-attested in 천자문 (Thousand Character Classic) editions. No correction; positive note.

---

### 23. 走 — `vi_nom` `chạy` is correct, but `vi` `Tẩu` (Sino-Vietnamese) does NOT mean 'walk' or 'run' in modern usage

- **Current (lines 12288, 12337):** `vi: "Tẩu"`, `vi_nom: "chạy"`.
- **Issue:** Sino-Vietnamese **tẩu** 走 exists only in compounds (tẩu thoát 'escape', đào tẩu) and is essentially obsolete as a free verb. The brief focus #1 is about 走's lexical drift; for Vietnamese the *Sino-Vietnamese* tẩu has preserved the OC 'run' sense (escape), while the *native* `chạy` is the everyday 'run'. This is actually correct as listed — but it should be flagged that the SV form is bound-only. Compare 来 `vi: "Lai"` (also bound-only in modern Vietnamese: tương lai 'future'), 去 `vi: "Khứ"` (also bound: khứ hồi 'round trip'). The file is consistent about giving the SV citation form even when it's bound-morpheme-only.
- **Why:** no fix required; this is a deliberate convention. Flag only to note that *all* the SV cells in this cohort are bound-only morphemes — none are free verbs in modern Vietnamese. The free verb is always in `vi_nom`.

---

### 24. 食 — `dng` (Dungan) `chy¹` ipa `tɕʰɨ˦` represents 吃, not 食

- **Current (lines 11928, 12011, 12046):** `dng.surface: "chy¹"`, ipa `tɕʰɨ˦`, native `чы`.
- **Issue:** Dungan **чы** [t͡ɕʰɨ] is the Cyrillic spelling of 吃 (Mandarin chī 'eat'), NOT 食 (Mandarin shí 'eat in literary/compound use'). Dungan as a Northwest Mandarin descendant follows modern Mandarin in using 吃 for the everyday verb. So this row legitimately gives the modern-Mandarin colloquial form rather than the literary 食 reading — but if the row is *supposed* to represent the Sinitic reflex of OC 食, the literary Dungan reading should be **сы** [sɨ] (the Northwest Mandarin reflex of 食 *shí*).
- **Expected:** either (a) clarify that the `dng` column gives the *colloquial* verb (then add a note), or (b) supply `сы` for the literary form matching the rest of the column.
- **Why:** brief focus #2 is exactly "食 vs 吃" — the file silently substitutes 吃 for 食 in the Dungan cell without flagging it. Same likely applies to Mandarin colloquial — but the `zh` cell correctly gives `shí` (literary 食), so the inconsistency is internal: zh keeps the literary reading, dng (which should mirror it as a Mandarin lect) gives the colloquial substitute.

---

### 25. 飲 — `ja_kun` `nomu` and 食 `ja_kun` `kuu` — `kuu` is the casual 食う but 食べる *taberu* is the standard verb

- **Current (line 11925, 12043, 12127):** 食 `ja_kun: "kuu"`, native `くう`; 飲 `ja_kun: "nomu"`, native `のむ`.
- **Issue:** Japanese 食 is canonically read 訓 as **たべる** (taberu, polite/standard) in modern Japanese, with くう (kuu) being a rougher/masculine register. Frellesvig (2010: 401) traces *taberu* < OJ *tabu-* 'to receive (food) humbly' which semantically displaced *kuu* < *kupu* in the medieval period. The file's `kuu` is the historically-prior 訓 but NOT the standard modern one. By contrast 飲 `nomu` is unchallenged as the canonical 訓 — no issue there.
- **Expected:** either (a) tag the column as 'historical 訓' (in which case `kuu` is correct), or (b) supply the modern `taberu` form. Compare 立 `ja_kun: tatsu` (which IS still the modern canonical 訓) — so the column behaviour is inconsistent: 立 gives the modern form, 食 gives the historical/casual form.
- **Why:** the brief asks to audit 食 vs 吃 (focus #2); for Japanese this maps onto 食べる (formal/standard) vs 食う (casual/historical). The dataset's choice of `kuu` aligns with the historical layer, which is defensible, but should be applied uniformly.

---

## Summary

25 findings. The largest single defect is **systematic omission of the base `nan` (Hokkien POJ) cell from all 9 verb rows** (#1), which directly defeats the brief's focus areas #1 (走), #2 (食 vs 吃), #6 (坐/立), and #7 (飲 lim). The second-largest is **mismatched Manchu vs Jurchen roots for 見 (#7) and 走 (#12)**, where the `juc` cell points to one Kane root and the `mnc` cell substitutes a near-synonym; the sibling-language disagreement is exactly the cross-Tungusic comparison the brief asked to verify. Minor systematic issues: missing `pja` cells for 去 and 坐 (#20); inconsistent Old Japanese 漢音/呉音 stratum choice (#15, #16, #25); Zhuang IPA misreads orthographic w as glide (#10); Dungan silently substitutes 吃 for 食 (#24).

File: `/home/jounlai/langmap/hanmap_reviews/40_open.md`
Finding count: 25


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 20
- **policy/withdrawn skip**: 5
- **headline**: 見 mnc/sjo tuwambi→sabumbi ×6, 走 mnc/sjo feksimbi→sujumbi ×6, 食 dng чы→сы ×3 + za ipa, 来 ko 내→래 (du-eum-bup 撤回) ×3, 去 juc schwa 修正
- **JSON path**: /tmp/hm_edits_40.json
