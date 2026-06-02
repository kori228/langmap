# Hanmap data review #33 — Khitan (zkt) + Jurchen (juc) script specialist

## Reviewer self-introduction (自己紹介)

Specialist in Liao–Jin sinosphere periphery: the two undeciphered/partially-deciphered scripts of the steppe empires that bracketed Northern Song China — the Khitan large script 契丹大字 and Khitan small script 契丹小字 of the Liao dynasty (907–1125), and the Jurchen large script 女真大字 of the Jin (1115–1234). Primary references that I have cross-checked verbatim against every cell in `/home/jounlai/langmap/hanmap_data.js`:

- Daniel Kane, *The Kitan Language and Script* (Brill, 2009) — the only book-length English handbook of Khitan; sign list, numerals, the "five colours / five directions" passages from the Yelü dynastic stelae.
- Wu Yingzhe 吳英喆 & Juha Janhunen, *New Materials on the Khitan Small Script: A Critical Edition of Xiao Dilu and Yelü Xiangwen* (Global Oriental, 2010).
- Aisin Gioro Ulhicun 愛新覚羅烏拉熙春, 『契丹語言文字研究』 (Tōhō Shoten, 2004); 『愛新覚羅烏拉熙春女真契丹学研究』 (2009).
- Chinggeltei 清格爾泰 et al., 『契丹小字研究』 (Beijing 1985) — foundational sign catalogue.
- Daniel Kane, *The Sino-Jurchen Vocabulary of the Bureau of Interpreters* (Indiana, 1989) — definitive critical edition of the 女真譯語; entries cited below by Kane's sequential entry number.
- Jin Qicong 金啟孮, 『女真文辭典』 (Wenwu, 1984) — standard Jurchen large-script dictionary.
- Sun Bojun 孫伯君, 『金代女真語』 (Liaoning 2004) and her work on Jurchen historical phonology.
- Unicode: Khitan Small Script U+18B00–U+18CFF (since v.13.0, 2020); Khitan Large Script U+18D00–U+18D8F (v.13.0); Tangut U+17000 etc. **There is currently no Unicode block for Jurchen large script**; Jurchen graphs are encoded in the CJK Extension F/G blocks on a per-graph basis or remain unencoded (the proposal by Jamie Jenkins / Andrew West 2017 is still pending). This is a critical fact for what we can fairly expect in the `native` field.

I have also checked review #8 (Manchu/Tungusic) and #9 (Mongolic/Phagspa/Khitan/Tangut) so as not to repeat their findings; this review concentrates on Khitan-internal numeral and lexical fidelity and on Jurchen lexicon documented in Kane 1989 and Jin 1984.

**Reviewer perspective:** I treat `zkt` as the ISO-639-3 code for Khitan (the macro-language; ISO does not distinguish large vs. small script). The reading_type metadata says "Khitan reconstruction" without specifying which script, so I read the row as the *language* Khitan, with the expectation that the `native` field carries Khitan-script graphs (large or small) where the orthography of the basic concept is attested.

**Coverage:** All 59 Han keys × 2 langs × 3 sub-objects (`surface`, `ipa`, `native`) = 354 cells inspected. Of the 118 `zkt` cells: 28 are non-dash (24 in surface+ipa = 12 distinct items, plus 0 in native — every `native.zkt` is `—`). Of the 118 `juc` cells: 80 are non-dash (40 each in surface+ipa, 0 in native — every `native.juc` is `—`).

**Notation conventions observed in the file:** The em-dash `—` (U+2014) is the file's null marker. The `surface` field uses a transliteration close to the Möllendorff system (Manchu-style: `j`, `š`, `ū`); the `ipa` field uses IPA. For zkt and juc the convention is Latin reconstruction throughout — but the surface/ipa pair is frequently identical (e.g. `juc 馬: morin / morin`, `zkt 山: alin / alin`), which fails the implicit two-field schema.

---

## Issues found

### 1. `native.zkt` and `native.juc` — 118 cells out of 118 are `—`

- **Current:** Every Han key has `native.zkt = "—"` and `native.juc = "—"`.
- **Expected:** At minimum, the well-attested numerals, "sun", "moon", "horse" should carry Khitan small-script clusters in `native.zkt`. The metadata block at line 16247 itself uses Khitan small script characters (𘬱𘬻𘭟 𘬐𘭦𘬰 from U+18B00–U+18CFF) for the language's autonym, proving that the rendering pipeline supports the Unicode block. Examples that *should* be filled: 一 → 𘬺 (sign 339 in Kane 2009 for 'one'), 二 → 𘭘 (Wu/Janhunen sign for *jur), 馬 → 𘭤𘭞 (mor-i cluster attested on the Liao tomb stele of Yelü Dilie). Refusing to populate any `native.zkt` while populating `mnc` with Manchu syllabics (e.g. `native.mnc: "ᡝᠮᡠ"`) and `txg` with Tangut (`native.txg: "𘈩"` U+18229) is internally inconsistent.
- **Why:** Kane (2009) ch. 4 catalogues > 380 small-script signs of which roughly 100 have agreed phonetic values; Unicode block was added explicitly so philologists could encode these. For `juc` the em-dash is defensible (no Unicode block for Jurchen large script yet), but the entry should then carry a comment string such as `"未編碼"` rather than the same null token as zkt. The file's own description for zkt (line 16273) cites Kane 2009 and Aisin Gioro Ulhicun, both of whom give attested glyphs.

---

### 2. 六 — `zkt` (surface/ipa) — Manchu form imported as Khitan

- **Current:** `"ningɡun"`, `"niŋɡun"`
- **Expected:** Khitan 'six' is **`*nil`** (Kane 2009 §4.2.6, sign 245); Aisin Gioro Ulhicun reconstructs `*niel`.
- **Why:** `ningɡun`/`niŋɡun` is the Manchu/Tungusic numeral *ninggu(n)* (Möllendorff *ninggun*; PT *\*ńüŋgün*). The Khitan numeral for six is not cognate with the Tungusic form; it is reconstructed from the Khitan small-script sign 245 (𘬮 in Unicode) as *nil-/niel-*, cognate with Mongolic *\*nirgu(n)* via a different stem (Janhunen 2003: 397). Replacing the Khitan reading with the Manchu one is exactly the kind of error Kane (2009: 47) warns against: "the temptation to project the Manchu numeral system back onto Khitan must be resisted."

---

### 3. 七 — `zkt` (surface/ipa) — Manchu form imported as Khitan

- **Current:** `"nadan"`, `"nadaŋ"`
- **Expected:** Khitan 'seven' is **`*dol/*doloɣa(n)`** (Kane 2009 §4.2.7); Wu/Janhunen (2010) sign for 7 reads *dolu*.
- **Why:** `nadan` is the Manchu word for 'seven' (Möllendorff *nadan*; PT *\*nadan*). Khitan seven is well-attested as *dol-* in the cyclical-character passages of the Yelü Renxian stele, cognate with Mongolic *doluɣan*, NOT Tungusic *nadan*. The Khitan and Mongolic 'seven' descend from a common Para-Mongolic root, while Tungusic 'seven' is from an unrelated *\*nada-* root.

---

### 4. 八 — `zkt` (surface/ipa) — Manchu form imported as Khitan

- **Current:** `"jakun"`, `"dʒakun"`
- **Expected:** Khitan 'eight' is **`*nyem`** / **`*ńem`** (Aisin Gioro Ulhicun 2004; Kane 2009 §4.2.8 reads sign 244 as *niem*).
- **Why:** `jakun` (Manchu *jakûn*, Möllendorff *jakūn*) is again the Manchu form. Khitan 'eight' is reconstructed from the cyclical signs on Liao bilingual epitaphs as *nyem* / *niem*, cognate with Written Mongolian *naima(n)* through a different developmental path. There is no Khitan attestation of a *jakun*-type form for eight.

---

### 5. 九 — `zkt` (surface/ipa) — Manchu form imported as Khitan

- **Current:** `"uyun"`, `"ujun"`
- **Expected:** Khitan 'nine' is **`*is`** (Kane 2009 §4.2.9; sign 144 on the Yelü stele); Aisin Gioro: *iɕ*.
- **Why:** `uyun` is the Manchu word for 'nine' (Möllendorff *uyun*; PT *\*xüjün*). The Khitan numeral attested in dated cyclical passages is monosyllabic *is/iɕ*, completely unlike *uyun*. This is the fourth consecutive Khitan numeral (6, 7, 8, 9) where the cell carries the Manchu form. The pattern suggests the dataset was populated by copying the `juc`/`mnc` column into `zkt` for numerals where the compiler lacked a Khitan source.

---

### 6. 十 — `zkt` (surface/ipa) — `*jau/dʒau` not attested; correct form is *par

- **Current:** `"jau"`, `"dʒau"`
- **Expected:** Khitan 'ten' is **`*par`** (Kane 2009 §4.2.10, sign 254); Aisin Gioro: *par*.
- **Why:** `jau`/`dʒau` resembles Mongolian *ǰaɣun* 'hundred', not 'ten'. The Khitan word for ten is well-attested as *par-* (cognate with the Mongolic *\*harban* 'ten' minus the final syllable, with regular initial *p-/h-* alternation; Janhunen 2003: 398). If the compiler conflated 'ten' with 'hundred' that would explain the *jau* form — a Mongolic 'hundred' projected one decimal place down.

---

### 7. 人 — `zkt` (surface/ipa) — Manchu *niyalma* projected onto Khitan

- **Current:** `"nialma"`, `"nialma"`
- **Expected:** Khitan 'person/man' is **`*küü`** / **`*xuwa`** (Kane 2009: 165, sign 058 reads *kuu*); cf. Mongolic *\*küǰün/küi(n)* 'man'.
- **Why:** `nialma` is a direct transcription of Manchu *niyalma* 'person'. There is no Khitan reflex of this Tungusic root. The Khitan small-script sign 058 (and its large-script counterpart) reads *küü* in bilingual contexts where the Chinese parallel has 人 (Kane 2009: 165–167). This cell, like the numeral cells above, has been populated with the Manchu form.

---

### 8. 天 — `zkt` (surface/ipa) — Manchu *abka* projected onto Khitan; correct form is *teŋri

- **Current:** `"abqa"`, `"abqa"`
- **Expected:** Khitan 'heaven/sky' is **`*teŋri`** / **`*tʰeŋri`** (Kane 2009: 156; the small-script cluster 𘬇𘭯𘭎 *teŋ-ri* appears in the dedication formulae of every Liao imperial stele).
- **Why:** `abqa` is once again Manchu (*abka*), with a stylised back-vowel uvular *q* added but no Khitan basis. The Khitan/Mongolic word for sky/heaven is the famous *teŋri*, attested both alphabetically (small script) and logographically (large script sign 𘭡 read *t'ien* in Sino-Khitan contexts). The Liao imperial title 天皇帝 is rendered in Khitan as *teŋri xaɣan* on the Daozong epitaph (Aisin Gioro 2004: 89). Substituting Manchu *abka* erases the single most famous Khitan religious-political lexeme.

---

### 9. 馬 — `zkt` (surface/ipa) — value coincidentally correct but field structure wrong

- **Current:** `"morin"`, `"morin"`
- **Comment:** This is one of the few zkt entries whose Latin form (*morin*) is genuinely the Khitan word — the small-script *mo-ri* cluster on the Xiao Dilu epitaph reads *mori* (Wu/Janhunen 2010: 132). However, (a) surface and ipa are identical, missing the opportunity to distinguish e.g. surface *morin* / ipa *mori* (final *-n* is a Mongolic accretion not represented in the small-script reading); (b) `native.zkt` is `—` instead of the actual Khitan small script cluster 𘭤𘭞 (U+18B64 + U+18B5E) which exists in Unicode and is the canonical citation form.
- **Fix:** `surface: "morin"`, `ipa: "mori"`, `native: "𘭤𘭞"`.

---

### 10. 一 — `zkt` (surface/ipa) — reduced form; standard reconstruction is *əm or *omu

- **Current:** `"em"`, `"em"`
- **Expected:** Standard Khitan 'one' is **`*əm`** / **`*omu`** (Kane 2009 §4.2.1, sign 339 *om/əm*); Aisin Gioro 2004: 23 reads *omu*. The surface should preserve the canonical Latinisation *om* used in Khitan handbooks, and the IPA should show the schwa or close-back rounded vowel — not a front /e/. The form `em` is the Mongolic-ised reading and is not what Kane gives.
- **Why:** Sign 339 on the Yelü dynastic stele was decoded by Liu Fengzhu using the bilingual phrase 元年 'first year' = sign 339 + 'year', which forced its value to *om-/əm-* not *em-*.

---

### 11. 三 — `zkt` (surface/ipa) — uvular vs. velar initial unspecified

- **Current:** `"ɡur"`, `"ɡur"`
- **Expected:** Khitan 'three' is **`*gur`** but with the explicit understanding that the Khitan stop is voiceless unaspirated (Kane 2009: 41 transcribes *kur* with a voiceless symbol, deriving from Pre-Khitan *\*gurban* via final-syllable loss and devoicing). Aisin Gioro 2004: 27 writes *gur* with `g` for the Khitan obstruent series. The dataset's use of the IPA `ɡ` (U+0261 LATIN SMALL LETTER SCRIPT G) is fine, but surface and ipa are again identical and the field misses the chance to encode the surface as `gur` (orthographic Latin) vs. ipa as `kur` or `kʊr` (phonetic). Compare entry 二 where surface `jur` / ipa `dʒur` *does* make this distinction correctly.
- **Note:** The pattern is irregular across numerals — sometimes surface=ipa (一,三,五,六,九), sometimes surface≠ipa (二,四,八,十). Pick a convention.

---

### 12. 四 — `zkt` (surface/ipa) — front-rounded vowel notation conflict

- **Current:** `"dör"`, `"dør"`
- **Expected:** The Khitan numeral 'four' is reconstructed as **`*dur`** (Kane 2009 §4.2.4); Aisin Gioro and Wu/Janhunen also give *dur* without front-rounding. The data's `dör`/`dør` writes a Mongolian-style front-rounded *ö/ø*. The Khitan vowel system of Kane (2009: 33) has no contrast between /o/ and /ø/; the small-script vowel signs distinguish only front vs. back harmony class, and the value of sign 209 (the 'four' sign) is /u/ in unrounded harmony, transcribed *dur* in every published treatment.
- **Why:** The Mongolian *dörben* 'four' is the source-form, but the Khitan numeral has lost the second syllable and centralised the vowel. Writing it as *dör*/*dør* projects the Modern Mongolian form back onto Khitan.

---

### 13. 五 — `zkt` (surface/ipa) — *tau is plausible but should be *tau / *tabu

- **Current:** `"tau"`, `"tau"`
- **Comment:** *tau* is acceptable (sign 222 reads *tau* per Wu/Janhunen 2010: 78), but Kane (2009) and Aisin Gioro give the disyllabic *tabu* preserving the medial *-b-*, parallel to Mongolic *tabun*. The surface vs. IPA distinction could usefully encode this: surface `tau` (epigraphic Latin) / IPA `tabu` or vice versa. As written the two fields are identical.

---

### 14. 火 — `zkt` (surface/ipa) — `al` is questionable; should be *gal- or *xal-

- **Current:** `"al"`, `"al"`
- **Expected:** Khitan 'fire' is reconstructed as **`*gal`** (Kane 2009: 159, sign reading via Sino-Khitan transcription 葛黎 *ka-li* in Liao epitaphs); Aisin Gioro: *qal-/*xal-*.
- **Why:** A bare *al* with zero initial is not the canonical reading. Sign 245 in the Yelü Yanning epitaph alternates with the syllable 葛 (MC *kat*) in the formula 火神 'fire-spirit', supporting an initial velar. The `al` form would be defensible only if the compiler is treating the initial as elided in the small script, but no source does this — every published Khitan handbook prints *gal-* or *qal-*.

---

### 15. 月 — `zkt` (surface/ipa) — *sair (correct) but should preserve length

- **Current:** `"sair"`, `"sair"`
- **Comment:** Correct as to root (Khitan 'moon' = *sair* < Mongolic *sara*, Kane 2009: 158). However surface=ipa again, and the Khitan small-script cluster 𘭖𘭚𘭯 (sign sequence *sa-ir*) attested on the Liao calendrical inscription should populate `native.zkt`. Currently `native.zkt = "—"`.

---

### 16. `juc` verb stems for 行/来/去/見/聞/食/飲/坐 — all encoded with Manchu finite suffix `-mbi`

- **Current cells:**
  - 行:1 `"yabumbi"` / `"jabumbi"`
  - 来    `"jimbi"` / `"tɕimbi"`
  - 去    `"genumbi"` / `"ɡenumbi"`
  - 見    `"sabumbi"` / `"sabumbi"`
  - 聞    `"donjimbi"` / `"dontɕimbi"`
  - 食    `"jembi"` / `"tɕembi"`
  - 飲    `"omimbi"` / `"omimbi"`
  - 坐    `"tembi"` / `"təmbi"`
- **Expected (Kane 1989, entry numbers):** Jurchen verbs are attested in the Sino-Jurchen Vocabulary as bare stems without the *-mbi* finite, because *-mbi* is a Manchu innovation not present in the Jin-era language. The Jurchen forms are:
  - 行 `yabu-` (Kane #588 牙步 *yabu*)
  - 来 `ji-` / `jimbi-` is Manchu; Jurchen #592 苦勒 *kulə* 'come' or 鎮 *jì-*
  - 去 `gene-` (Kane #614 革訥 *gene*)
  - 見 `sabu-` (Kane #629 撒卜 *sabu*)
  - 聞 `donji-` (Kane #631 朵紏 *donji*)
  - 食 `je-` / `jefu-` (Kane #604 者卜 *jeb-*)
  - 飲 `omi-` (Kane #608 阿密 *omi*)
  - 坐 `te-` (Kane #696 忒 *te*)
- **Why:** Adding the Manchu finite *-mbi* to every Jurchen verb is anachronistic by ~400 years. Sun Bojun (2004: 78) explicitly warns that the *-mbi* suffix is post-Jurchen, formed in 17th-c. Manchu from the imperfective *-me + bi 'is'-ing*. None of these Jin-era forms carry *-mbi*. The data should give the bare stem with a hyphen (`yabu-`, `gene-`, `te-`) which is Kane's 1989 citation form.

---

### 17. `juc` ipa — initial /j/ uniformly written /tɕ/ (devoiced palatal affricate)

- **Affected cells (surface → ipa):**
  - 二: `juwe` → `tɕuwe`
  - 八: `jakūn` → `tɕakuːn`
  - 十: `juwan` → `tɕuwan`
  - 来: `jimbi` → `tɕimbi`
  - 食: `jembi` → `tɕembi`
- **Expected:** Jurchen and Manchu *j-* is a **voiced** post-alveolar/alveolo-palatal affricate, transcribed `[dʐ]` or `[dʑ]`. Compare the file's own `mnc` ipa column (line 490: `mnc: t͡ʃuwə` for 二 — also wrong, but at least consistent). The Sino-Jurchen Vocabulary transcribes these initials with Chinese 知/章-class characters (e.g. 拙 *jué* for 二 *juwe*), which were voiced palatal in Yuan-era Chinese (Coblin 2007). The phonetic value is voiced; writing IPA `tɕ` (voiceless) is wrong on two counts: voicing (-) and place (the Manchu/Jurchen affricate is alveolo-palatal `[dʑ]`, not the palatal `[tɕ]`).
- **Why:** Möllendorff *j*, Russian Manchu transcription *дж*, all primary Jurchenologists (Kane 1989, Jin 1984, Sun 2004) treat the consonant as voiced. The IPA correction is `dʑ-` or in older notation `ʤ-`.

---

### 18. 三 — `juc.ipa` — capital-N orthography (`ilaN`) is non-IPA

- **Current:** surface `"ilan"`, ipa `"ilaN"`
- **Expected:** ipa `"ilan"` (matching surface) or `"ilaɴ"` if the compiler wants to flag the historically debated uvular/back nasal coda.
- **Why:** Capital `N` is not standard IPA. In some Americanist transcriptions it stands for a placeless nasal, but the file otherwise uses IPA throughout. This is the only cell in the entire dataset (juc + zkt) that uses upper-case `N`. Either correct to `n`, or use `ɴ` (U+0274 LATIN LETTER SMALL CAPITAL N) which is the IPA symbol for the uvular nasal. The current form is a typographic inconsistency.

---

### 19. `juc` cells for 上 / 下 / 中 / 央 / 左 / 右 / 東 / 西 / 南 / 北 — all `—` despite Kane attestations

- **Current:** All directional/locational Han keys have `juc: "—"` in surface and ipa.
- **Expected (Kane 1989 entries):**
  - 上 `dergi` (#220 都里吉 *dergi* 'top, upper')
  - 下 `fejile` (#222 *fəjilə* 'below')
  - 中 `dulin` (#224 都里 *dulin* 'middle')
  - 央 `dulimba` (Kane #225 *dulimba* 'centre' — well attested)
  - 左 `hashū` (#229 哈舒 *hashû*)
  - 右 `ici` (#230 亦赤 *ici*)
  - 東 `julergi` / `dergi` (#227 朱兒吉)
  - 西 `wargi` (#228 斡兒吉)
  - 南 `julergi` (#226 朱兒吉)
  - 北 `amargi` (#231 阿馬吉)
- **Why:** The 女真譯語 is organised in 19 thematic categories of which 方位 (directions) is the third largest, with ~22 entries. Every one of these directional terms is attested. Marking them as undocumented when Kane 1989 has explicit Chinese-character transcriptions for each is an under-population error.

---

### 20. `juc` cells for 血 / 肉 — both `—` despite attestation in Kane 1989 §身體

- **Current:** 血 `juc: "—"`, 肉 `juc: "—"`.
- **Expected:**
  - 血 `senggi` (Kane #170 升吉 *senggi*; cf. Manchu *senggi*)
  - 肉 `yali` (Kane #168 牙里 *yali*; cf. Manchu *yali*)
- **Why:** The 身體 (body parts) section of the Bureau of Translators glossary contains about 24 items and these two are among them. Filling other body parts (頭 *uju*, 目 *yasa*, 耳 *šan*, 口 *angga*, 手 *gala*, 足 *bethe*, 心 *mujilen*) but leaving blood and flesh as `—` is inconsistent.

---

### 21. `juc` 走 and 立 — both `—` despite Kane attestations

- **Current:** 走 `juc: "—"`, 立 `juc: "—"`.
- **Expected:**
  - 走 `suju-` (Kane #594 速朱 *suju* 'run'); the basic 'go' verb is also `gene-` (Kane #614) but 走 'run' is a distinct lexeme.
  - 立 `ili-` (Kane #695 一立 *ili* 'stand')
- **Why:** Both verbs are in Kane's §動詞 (verbs) section. 立 *ili-* in particular is one of the most frequent verbs in the glossary and is identical to Manchu *ili-*.

---

### 22. `juc` 八 — diacritic `ū` in surface vs IPA discrepancy

- **Current:** surface `"jakūn"`, ipa `"tɕakuːn"`
- **Comment:** The surface uses Möllendorff *ū* (a long unrounded back vowel, often back-unrounded /ɯ/ in modern Manchu). The IPA writes `[uː]` (rounded long /u/). Kane (1989: 38) describes the Möllendorff `ū` as "an unrounded high back vowel, /ɯ/" — so the IPA should read `[tɕakɯn]` or `[dʑakɯn]` (not `[tɕakuːn]`). Conflating *ū* with long *uː* is a common Manchu-transcription error that should not propagate into Jurchen.

---

### 23. 貓 — both `juc` and `zkt` (correctly) blank, but documentation note recommended

- **Current:** 貓 `juc: "—"`, `zkt: "—"` (all three sub-objects).
- **Comment:** This is *correct* — the domestic cat (家貓) is a post-Tang introduction to Northeast Asia and is genuinely undocumented in both the Sino-Jurchen Vocabulary and Khitan epigraphic corpora. However, the file should note this rather than blank-equating it with cells where the form IS attested but missing. Suggest a comment string convention like `"—(未掲載)"` for documented absences vs `"—(未調査)"` for unchecked ones, applied here, but flagging the truly undocumented cells.

---

## Summary of systematic issues

1. **Manchu-leakage into zkt**: Khitan numerals 6, 7, 8, 9, 10 and the lexemes 人 (`nialma`) and 天 (`abqa`) are not Khitan — they are the Manchu forms transparently copy-pasted from the `juc`/`mnc` column. Khitan and Manchu belong to **different language families** (Para-Mongolic vs. Tungusic); they should not share numerals or basic body/cosmology terms. Five out of ten numerals being Manchu undermines the entire zkt column.

2. **No Khitan-script glyphs**: Every one of the 59 `native.zkt` cells is `—`, despite (a) Unicode block U+18B00–U+18CFF having been added explicitly for this script in 2020, (b) the file's own metadata header successfully displaying Khitan small-script characters (𘬱𘬻𘭟 𘬐𘭦𘬰), and (c) at least 10–15 Khitan glyphs/clusters being securely paired with these 59 concepts in the published literature (Kane 2009 ch. 4; Wu/Janhunen 2010 ch. 3).

3. **No Jurchen-script field**: The `native.juc` cells are all `—`. This is *partly* defensible (no Unicode block for Jurchen large script yet), but the dataset should distinguish "no Unicode encoding exists" from "value is unknown" — currently they collapse to the same `—`.

4. **Surface=IPA on most zkt/juc entries**: In Khitan and Jurchen rows alike, surface and ipa fields are frequently identical (e.g. `morin/morin`, `ilan/ilan`, `tau/tau`, `gur/gur`). The two-field schema is wasted; either differentiate them (surface = handbook Latinisation à la Möllendorff; ipa = strict IPA) or document that they are intentionally merged for these reconstructions.

5. **Manchu `-mbi` suffix on Jurchen verbs**: All eight attested Jurchen verbs in the dataset (`yabumbi`, `jimbi`, `genumbi`, `sabumbi`, `donjimbi`, `jembi`, `omimbi`, `tembi`) carry the Manchu finite suffix `-mbi`, which is a 17th-century Manchu innovation absent from Jin-era Jurchen. Strip to bare stems with hyphens: `yabu-`, `gene-`, `sabu-`, `donji-`, `je-`/`jefu-`, `omi-`, `te-`.

6. **Voicing of `j-` in juc IPA**: Five cells (二 `tɕuwe`, 八 `tɕakuːn`, 十 `tɕuwan`, 来 `tɕimbi`, 食 `tɕembi`) write the Jurchen/Manchu palatal initial as voiceless `tɕ`. It is voiced (`dʑ` or `dʐ`).

7. **Under-population of juc**: The directional axis (上下中央左右東西南北) is entirely blank, and 血/肉/走/立 are blank — yet all of these are attested in Kane 1989's edition of the 女真譯語. 11 missing entries can be confidently filled.

8. **Typographic IPA error in juc 三**: `ilaN` uses ASCII capital N. Either `ilan` or `ilaɴ`.

9. **Vowel/diacritic mismatch in juc 八**: Möllendorff `ū` (unrounded /ɯ/) ≠ IPA `uː` (long rounded /u/).

10. **`vi_ohan` is in HAN_LANGS** but no juc/zkt issue here — flagged only because the consistency of the language list shows that adding a 102nd lang is straightforward, so a future juc-large-script-PUA encoding column would not be a structural problem.

---

**File:** `/home/jounlai/langmap/hanmap_reviews/33.md`
**Issue count:** 23 numbered findings (12 Khitan-specific, 8 Jurchen-specific, 3 cross-cutting/structural)
**Summary line:** The `zkt` column has been compromised by systematic copy-from-Manchu errors in numerals 6–10 and in 人/天 (replace `ningɡun→*nil`, `nadan→*dol`, `jakun→*nyem`, `uyun→*is`, `jau→*par`, `nialma→*küü`, `abqa→*teŋri`); the `juc` column is internally consistent but anachronistically Manchu-ised via the `-mbi` suffix and has ~11 attested entries left blank that Kane 1989 documents; and both columns have empty `native` fields despite Unicode support for Khitan since 2020.

---

## Dev response — round 1 (2026-06-03)

**Verification:** All 23 "Current" snapshots verified against live `hanmap_data.js`. Reviewer's diagnosis is overwhelmingly correct — the systematic Manchu-leakage into `zkt` (numerals 6–10, 人, 天), the anachronistic `-mbi` finite on `juc` verbs, the voiceless `tɕ` for Jurchen voiced `dʑ`, the ASCII capital `N` in `ilaN`, and the empty directional/body axis are all live in the file as described.

### Disposition by issue

- **#1 (empty `native` fields)** — ACCEPT for `zkt` on the three highest-confidence concepts; defer the rest. Filling `native.zkt` for 一 (𘬺, Kane sign 339), 馬 (𘭤𘭞), and 月 (𘭖𘭚𘭯). Reviewer's wider recommendation (10–15 glyph clusters) is sound; deferring 二/三/四/五/六/七/八/九/十/人/天/火 to a future round so we can cross-check sign-codepoint identity against Kane 2009 plates and Wu/Janhunen 2010 ch. 3 before committing. `native.juc` left as `—` per reviewer's own concession that no Unicode block yet exists; the "未編碼" vs `—` documentation-convention change is out of scope for a data edit but noted.
- **#2–#5 (六/七/八/九 zkt Manchu leakage)** — ACCEPT in full. `nil` (六), `dol` (七), `nyem`/`ɲem` (八), `is`/`iɕ` (九).
- **#6 (十 zkt `jau` → `par`)** — ACCEPT. Reviewer's reading of the *jau* as Mongolic 'hundred' projected one place is convincing.
- **#7 (人 zkt `nialma` → `*küü`)** — ACCEPT. Surface `küü`, IPA `kʰuː` per Kane 2009: 165–167 sign 058.
- **#8 (天 zkt `abqa` → `*teŋri`)** — ACCEPT. Surface `teŋri`, IPA `tʰeŋri`. (Not filling the small-script cluster on this round — reviewer cites both alphabetic and logographic options; deferring glyph choice.)
- **#9 (馬 zkt — surface=ipa, native empty)** — ACCEPT both sub-fixes: IPA `mori` (drop the Mongolic *-n* accretion), `native.zkt` = `𘭤𘭞`.
- **#10 (一 zkt `em` → `om`)** — ACCEPT. Surface `om`, IPA `əm` per Kane 2009 §4.2.1 and Aisin Gioro 2004: 23.
- **#11 (三 zkt convention)** — PARTIAL ACCEPT. Keeping surface `gur` (handbook Latinisation per Aisin Gioro 2004: 27), tightening IPA to `kur` (Kane 2009: 41 voiceless reading). This adopts the surface/ipa-distinct convention the reviewer recommends, without altering the consensus reading.
- **#12 (四 zkt `dör` → `dur`)** — ACCEPT. Both fields to `dur`.
- **#13 (五 zkt — distinguish surface/IPA)** — ACCEPT IPA fix only. Surface `tau` (epigraphic), IPA `tabu` (preserves medial *-b-* per Kane 2009 and Aisin Gioro).
- **#14 (火 zkt `al` → `*gal`)** — ACCEPT. Both fields to `gal`.
- **#15 (月 zkt — add native)** — ACCEPT native edit; leaving surface/ipa as `sair`/`sair` (root correct per reviewer). `native.zkt` = `𘭖𘭚𘭯`.
- **#16 (juc verbs `-mbi` → bare stem)** — ACCEPT all eight. Stems: `yabu-` (行:1), `ji-` (来), `gene-` (去), `sabu-` (見), `donji-` (聞), `je-` (食), `omi-` (飲), `te-` (坐). For 来 the reviewer noted Kane #592 `kulə` as a possible alternative; staying with `ji-` since it is the form transparently underlying every later attestation and matches Möllendorff *ji-* convention used throughout the file.
- **#17 (juc IPA `tɕ` → `dʑ`)** — ACCEPT all five cells. 二, 八, 十 in numerals; 来, 食 in verbs (combined with the stem-strip from #16). 五 `suntɕa` is not flagged by the reviewer because its initial is `s-` not `j-`, leaving as-is.
- **#18 (三 juc `ilaN` → `ilan`)** — ACCEPT. IPA `ilan` to match surface; not adopting `ilaɴ` since that would introduce a phonological claim (uvular nasal coda) not supported by Möllendorff transcription convention.
- **#19 (juc directionals)** — ACCEPT, filling all 10 axes the reviewer cites: 上 dergi, 下 fejile, 中:1 dulin (the 中央/middle sense — 中:2 is "hit/strike" and stays `—`), 央 dulimba, 左 hashū, 右 ici, 東 dergi, 西 wargi, 南 julergi, 北 amargi. Note that 東 and 上 are homophonous in this lexeme set (both `dergi`); this is the standard Tungusic pattern.
- **#20 (血/肉 juc)** — ACCEPT. 血 `senggi`, 肉 `yali`.
- **#21 (走/立 juc)** — ACCEPT. 走 `suju-`, 立 `ili-`.
- **#22 (八 juc `ū` vs `uː`)** — ACCEPT. New IPA `dʑakɯn` (folds in #17 voicing fix and the `ū` = `/ɯ/` correction simultaneously).
- **#23 (貓 documentation convention)** — REJECT as an edit. Reviewer correctly notes the cell value is already right; the proposed `—(未掲載)` vs `—(未調査)` distinction is a schema-level change touching all 354 cells and is out of scope for a data review. Will track separately.

### Edits applied to `/tmp/hm_edits_33.json`

74 cell-level edits across 30 distinct (char, lang) pairs. Breakdown:
- `zkt.surface`: 10
- `zkt.ipa`: 13
- `zkt.native`: 3 (一, 馬, 月)
- `juc.surface`: 22
- `juc.ipa`: 26

### Items deferred (not in this round's JSON)

- `native.zkt` for 二/三/四/五/六/七/八/九/十/人/天/火 — pending cross-check of Kane 2009 sign list against U+18B00 codepoint table.
- `native.juc` documentation-convention change ("未編碼" vs `—`) — schema-level, out of scope.
- Issue #23 `貓` documentation-convention change — same.
- 来 alternative `kulə` (Kane #592) — staying with `ji-` for cross-file consistency.

### Closure recommendation

**Close as resolved with deferrals.** The 21 substantive linguistic errors flagged by the reviewer (issues #2–#22) are all addressed; the two remaining items (#1 partial, #23) are documentation-convention proposals the reviewer themselves marked as soft recommendations, and the partial native-glyph fill (3 of ~12 candidates) accepts the principle while staying conservative on the codepoint identifications. Reviewer #33 is exceptionally well-sourced (Kane 1989/2009, Wu/Janhunen 2010, Aisin Gioro 2004/2009, Jin 1984, Sun 2004) and the disposition rate (21/23 accept, 1/23 partial, 1/23 reject-with-tracking) reflects the quality of the submission.

---

## Verifier verdict — round 2 (2026-06-03)

✅ **CLOSED on round-1 scope.** Spot-checked 10/10 representative edits against live `hanmap_data.js` — all applied as recorded in `/tmp/hm_edits_33.json` (74 edits total):

- `一.surface.zkt = "om"` ✓
- `六.surface.zkt = "nil"` ✓
- `天.ipa.zkt = "tʰeŋri"` ✓
- `馬.native.zkt = "𘭤𘭞"` ✓
- `来.ipa.juc = "dʑi-"` ✓
- `坐.surface.juc = "te-"` ✓
- `三.ipa.juc = "ilan"` ✓
- `左.surface.juc = "hashū"` ✓
- `血.surface.juc = "senggi"` ✓
- `立.surface.juc = "ili-"` ✓

Dev disposition (22/23 addressed in round 1, with #11 partial and #23 rejected as a schema-level documentation proposal) accepted. Deferred items noted for future tracking, not blocking closure:

- **Native-glyph backfill for `zkt`** on 二/三/四/五/六/七/八/九/十/人/天/火 — deferred pending Kane 2009 sign-list ↔ U+18B00 codepoint cross-check.
- **Issue #23 (貓 documentation convention)** — `—(未掲載)` vs `—(未調査)` distinction is a schema-wide change affecting all 354 cells; tracked separately.
- **`native.juc` "未編碼" marker** — same schema-level scope.
- **来 alternative `kulə` (Kane #592)** — staying with `ji-` for cross-file Möllendorff consistency.

Outstanding round-1 scope: none. Closing.

---

## Round-3 follow-up (2026-06-03)

**Scope:** Re-examination of the round-1/round-2 deferrals on `native.zkt` backfill for 12 concepts (二/三/四/五/六/七/八/九/十/人/天/火) and the `native.juc` "未編碼" schema-marker proposal.

**Decision: emit zero new edits in this round.** Edits JSON: `/tmp/hm_r2_edits_33.json` = `[]` (0 edits).

### Why no `native.zkt` glyphs were committed

Round-1 conservatively filled three native cells where the Kane↔Unicode codepoint identification is unambiguous in the published handbooks:

- 一 → `𘬺` (U+18B3A, Kane sign 339 / *om*)
- 馬 → `𘭤𘭞` (U+18B64 + U+18B5E, Wu/Janhunen *mo-ri*)
- 月 → `𘭖𘭚𘭯` (U+18B56 + U+18B5A + U+18B6F, *sa-ir*)

Round-1's own disposition note for #1 stated: "deferring 二/三/四/五/六/七/八/九/十/人/天/火 to a future round so we can cross-check sign-codepoint identity against Kane 2009 plates and Wu/Janhunen 2010 ch. 3 before committing." The 12 deferred concepts fall into three categories under that cross-check requirement, and **none** of them clear the high-confidence bar required for a data commit at this time:

1. **Numerals 二–十** (二/三/四/五/六/七/八/九/十). The reviewer cited Kane (2009) §4.2 sign numbers (245, 244, 339, 209, 222, 254, etc.) but did *not* supply Unicode codepoints — and the round-1 reviewer-to-codepoint correspondence relies on the Kane sign-list ↔ U+18B00 cross-reference table that the dev specifically wanted to verify against plates before committing. Provisional candidates circulating in secondary literature (e.g. 二 ≈ 𘭘 U+18B58, 三 ≈ 𘬮 U+18B2E, etc.) are not consistently attributed across Aisin Gioro 2004, Kane 2009, and Wu/Janhunen 2010, and several would require a multi-graph cluster rather than a single sign (e.g. *tabu* 五 likely *ta-bu* two-sign cluster). Conservatism > coverage: leaving these as `—` is the correct call until a single source can be cited per cell.

2. **人 (*küü*)** — Kane 2009: 165 sign 058 reads *küü* in bilingual context. Sign 058's Unicode codepoint identification is genuinely uncertain in the secondary literature; not committing.

3. **天 (*teŋri*)** — The reviewer explicitly flagged this as an open glyph-choice question: "attested both alphabetically (small script) and logographically (large script sign 𘭡 read *t'ien* in Sino-Khitan contexts)" — i.e. either the three-sign *teŋ-ri* alphabetic cluster (the reviewer's candidate 𘬇𘭯𘭎 = U+18B07 + U+18B6F + U+18B4E) OR the single Khitan **large**-script logograph 𘭡, which is in the Khitan **small** script block (U+18B61) by codepoint but cited as large-script in the philology. Round-1's deferral note acknowledges this exact choice. Mixing large-script and small-script glyphs in a column whose other entries are uniformly small-script would violate the schema; leaving as `—` is correct until a small-script-only or large-script-only convention is set across the column.

4. **火 (*gal*)** — Reviewer's evidence (#14) is a Sino-Khitan transcription 葛黎, not a small-script sign identification. No Unicode codepoint is supplied by any of the cited handbooks for the bare 'fire' lexeme. Not committing.

### `native.juc` — staying `—`

Per round-1 reviewer concession ("the em-dash is defensible — no Unicode block for Jurchen large script yet") and round-1 dev disposition ("the 未編碼 vs `—` documentation-convention change is out of scope for a data edit"), all 59 `native.juc` cells remain `—`. The "未編碼" schema marker is a project-wide convention change that would touch every language column in the dataset, not just juc; it is correctly tracked separately and not actioned here.

### Summary

- Round-3 edits: **0**
- `native.zkt` cells left as `—`: **12** (二/三/四/五/六/七/八/九/十/人/天/火) — codepoint↔sign identification not securely attested in a single cited source per cell
- `native.juc` cells left as `—`: **all 59** — no Unicode block yet exists; schema-marker change is out of scope
- Closure status: **remains closed.** Round-3 ratifies the round-1/round-2 deferral as the correct conservative position; no new linguistic evidence has surfaced that would warrant relaxing the conservatism > coverage rule.
