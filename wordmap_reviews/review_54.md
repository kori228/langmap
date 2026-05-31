# Wordmap review #54 — Min (Hokkien / Teochew / Fuzhou / Puxian) specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am Min, a phonologist specialising in the Southern and Eastern branches of the Min language group: Hokkien/Amoy (`nan`, `nan_xm`, `nan_zz`, `nan_pn`, `nan_qz`), Teochew (`nan_te`), Hainanese/Qiongwen (`nan_hai`), Eastern Min/Fuzhou (`cdo`), Puxian/Henghua (`cpx`), and Northern Min/Jian'ou (`mnp`). For this review my primary authority on Amoy Hokkien orthography and tone categories is Carstairs Douglas, *Chinese-English Dictionary of the Vernacular or Spoken Language of Amoy* (1873) with Thomas Barclay's *Supplement* (1923) — the Douglas–Barclay tradition that underlies modern POJ (Pe̍h-ōe-jī). For surface phonetics and the citation-vs-sandhi distinction I rely on Nicholas Bodman, *Spoken Amoy Hokkien* (1955–58, Govt. of Federation of Malaya), supplemented by the *Taiwanese Romanization (Tâi-lô) standard* (MoE Taiwan, 2006). For the non-Hokkien lects I cross-check against Branner, *Problems in Comparative Chinese Dialectology* (2000) and the *Hanyu Fangyin Zihui* (漢語方音字彙, 2003). My focus areas this round are: (a) POJ/Tâi-lô surface forms whose IPA contradicts the romanisation, (b) nasal-vowel marking, (c) the four entering-tone (入聲) syllables and their stop codas, (d) literary vs colloquial readings, and (e) toneless or missing tone-letters. Tone-category numbers below follow the standard 8-tone Amoy frame (陰平1 陽平5 陰上2 陽上6 陰去3 陽去7 陰入4 陽入8).

---

## Issues found

### 1. `nan` — love — tone 3 (陰去) given as mid level instead of low
- **File:** `words/love.js` line 73
- **Current:** `["愛", "ai˧"]`
- **Expected:** `["愛", "ai˩˩"]`
- **Why:** 愛 *ài* is a 陰去 (tone-3) syllable. In Amoy/Taiwan the citation realisation of tone 3 is a low level [˩˩]/[˨˩], never mid [˧]. The project's own Tâi-lô variants `nan_xm`/`nan_zz` correctly give `ai˩˩` (love.js:347–348). Douglas–Barclay class this tone as the "low even"; Bodman §2 transcribes it [21]~[11]. The bare `nan` value [˧] is the only mid-level reading in the file and is internally contradicted by every sibling Hokkien entry.

---

### 2. `nan` — house — same tone-3 error (厝 is 陰去)
- **File:** `words/house.js` line 73
- **Current:** `["厝", "t͡sʰu˧"]`
- **Expected:** `["厝", "t͡sʰu˩˩"]`
- **Why:** 厝 *chhù* is 陰去, tone 3, the same category as 愛 above. The Tâi-lô twins give `tsʰu˩˩` (house.js:347–348). Mid [˧] misrepresents the tone; the citation form is low level per Douglas–Barclay and Bodman.

---

### 3. `nan` — tree — 陽去 (tone 7) written as mid, should be low level
- **File:** `words/tree.js` line 73
- **Current:** `["樹", "t͡sʰiu˧"]`
- **Expected:** `["樹", "t͡sʰiu˨˨"]`
- **Why:** 樹 *chhiū* is 陽去 (tone 7). In Amoy this is a low-mid level tone [˨˨]/[˧˧], distinct from a single mid [˧] tone-letter, and again the file's own `nan_xm`/`nan_zz` entries give `tsʰiu˨˨` (tree.js:340–341). A one-letter [˧] both loses the level-tone shape and contradicts the parallel forms.

---

### 4. `nan` — thanks — 謝 (陽去) transcribed mid, plus tone shape lost
- **File:** `words/thanks.js` line 73
- **Current:** `["多謝", "to˥sia˧"]`
- **Expected:** `["多謝", "to˥sia˨˨"]`
- **Why:** 謝 *siā* is 陽去 (tone 7), realised low level [˨˨] in citation — exactly as the Tâi-lô variants render it: `to˦ sia˨˨` (thanks.js:340–341). The single mid letter [˧] on `sia` is the wrong category and is not a level shape. (The first syllable 多 *to* = tone 1, [˥], is fine.)

---

### 5. `nan_pn` — moon — second syllable carries NO tone-letter
- **File:** `words/moon.js` line 988
- **Current:** `["月娘", "gueh˥˥niũ"]`
- **Expected:** `["月娘", "gueʔ˥˥niũ˨˦"]`
- **Why:** Two defects in one entry. (a) The syllable `niũ` (娘, 陽平 tone 5) has no tone-letter at all — every other syllable in the dataset is tone-marked, and 娘 is a full-toned lexical morpheme (rising [˨˦] in Penang Hokkien), not a neutral/light syllable. (b) The entering-tone coda of 月 is written with plain `<h>` (`gueh`); the IPA stop should be the glottal `ʔ` as the `nan_xm`/`nan_te` entries correctly show (`gueʔ`, moon.js:346, 749). The Penang form should mark both the glottal coda and the tone on 娘.

---

### 6. `cdo` — thanks — Mandarin calque surface + toneless second syllable
- **File:** `words/thanks.js` line 183
- **Current:** `["谢谢", "sia˧˧sia"]`
- **Expected:** `["謝謝", "sia˨˦˨sia˨˦˨"]` (or a native Fuzhou expression of gratitude)
- **Why:** Two problems. (a) The reduplicated 谢谢 *xièxie* is the Mandarin pattern; Eastern Min/Fuzhou native gratitude is normally 多謝 (cf. the Hokkien `nan` entry) — the simplified reduplicated form is a calque. (b) Regardless of lexical choice, the second `sia` is left **toneless**. 謝 in Fuzhou is a 陽去 syllable (Hanyu Fangyin Zihui), and even a reduplicated polite form carries sandhi tone, not zero tone. Every other `cdo` entry in the dataset is fully tone-marked.

---

### 7. `nan` — mother — Mandarin reduplication; native Hokkien is 老母
- **File:** `words/mother.js` line 73
- **Current:** `["媽媽", "ma˥ma"]`
- **Expected:** `["老母", "lau˨˨bu˥˧"]`
- **Why:** 媽媽 *māma* is the Mandarin nursery reduplication; the colloquial Hokkien word for 'mother' is 老母 *lāu-bú*, which is precisely what the file's own Tâi-lô variants give (`lau˨˨ bu˥˧`, mother.js:346–347). Douglas–Barclay head this under *bú* / *lāu-bú*. The bare `nan` form also leaves the second `ma` toneless. Recommend aligning `nan` with its `nan_xm`/`nan_zz` siblings.

---

### 8. `nan` — father — Mandarin reduplication; native Hokkien is 老爸
- **File:** `words/father.js` line 73
- **Current:** `["爸爸", "pa˥pa"]`
- **Expected:** `["老爸", "lau˨˨pe˨˨"]`
- **Why:** Parallel to issue 7. 爸爸 *bàba* is Mandarin; the everyday Hokkien term is 老爸 *lāu-pē*, as given in `nan_xm`/`nan_zz` (`lau˨˨ pe˨˨`, father.js:340–341). The reduplicated `nan` form also has a toneless final `pa`. For register consistency with the other Hokkien columns the colloquial 老爸 form is preferable.

---

### 9. `nan` — sun — entering-tone 日 mis-transcribed; missing stop coda & wrong onset
- **File:** `words/sun.js` line 73
- **Current:** `["日頭", "lit˦˧tʰau˧˥"]`
- **Expected:** `["日頭", "dʑit̚˦tʰau˨˦"]`
- **Why:** 日 *ji̍t* (陽入, tone 8, -t coda) is rendered `lit˦˧`: (a) the `l-` onset is the Zhangzhou colloquial reading, but mainstream Amoy/Taipei has *j-* [dz~dʑ] — the `nan_xm`/`nan_zz` entries correctly use `dzit̚` (sun.js:346–347); (b) the unreleased-stop diacritic on the -t coda is missing (the Tâi-lô twins write `dzit̚`); (c) a contour [˦˧] on an entering-tone syllable is dubious — entering tones in Amoy are short level [˦]/[˨]. The 頭 *thâu* (陽平) is also better as rising [˨˦] than [˧˥].

---

### 10. `nan_hai` — father — surface 父 but IPA matches colloquial 爸
- **File:** `words/father.js` line 1061
- **Current:** `["父", "ba˨˨"]`
- **Expected:** `["爸", "ɓa˨˨"]` (colloquial) or `["父", "hu˨˨]` (literary)
- **Why:** A literary/colloquial mismatch. The character 父 has the literary Hainanese reading *hū*; the colloquial kinship term 'father' is 爸 *ba*. The given IPA `ba` is the colloquial 爸 reading, so the surface graph should be 爸, not literary 父. Moreover Qiongwen (Hainanese) is famous for voiced **implosives**: the colloquial 'father/papa' onset is [ɓ] (Branner 2000; Hanyu Fangyin Zihui), so a plain [b] under-specifies the characteristic Hainan implosive.

---

### 11. `nan_hai` — mother — literary 母, IPA is colloquial; implosive onset unmarked
- **File:** `words/mother.js` line 1067
- **Current:** `["母", "bo˨˩˧"]`
- **Expected:** `["母", "ɓo˨˩˧"]`
- **Why:** Same Hainan-implosive point as issue 10. The colloquial *bó* 'mother' onset in Qiongwen is the voiced implosive [ɓ], a defining feature of the lect (Branner 2000). A plain [b] erases the contrast with the (rare) plain stops. Surface 母 with the colloquial reading is acceptable here, but the onset should be [ɓ].

---

### 12. `cpx` — tree — Puxian 陽去 tone given high-falling, contradicts other ɬ-entries
- **File:** `words/tree.js` line 1059
- **Current:** `["树", "ɬiu˥˧"]`
- **Expected:** `["树", "ɬiu˨˩"]`
- **Why:** Puxian/Henghua correctly shows the diagnostic lateral fricative [ɬ] (< *s-) here and in `心 ɬim˧˧` (heart.js:1059) and `谢 ɬia` (thanks.js:1059) — that part is excellent. But 树 *chhiū* is 陽去 (departing), which in Putian is a low tone, not a high-falling [˥˧]. The [˥˧] contour conflicts with the low/mid realisations on the other departing-tone Puxian syllables. The Hanyu Fangyin Zihui Putian table gives the 陽去 register as low [˨˩]/[˩].

---

### 13. `nan` — eat — entering-tone 食 lacks unreleased-stop notation
- **File:** `words/eat.js` line 73
- **Current:** `["食", "t͡siaʔ˦"]`
- **Expected:** `["食", "t͡siaʔ̚˦"]`
- **Why:** Minor but systematic. 食 *chia̍h* is 陽入 (tone 8) with a glottal coda; the project elsewhere marks the unreleased stop (`tsiaʔ̚˦`, eat.js:340) and the consistency is worth preserving in the flagship `nan` column. The vowel/onset/tone are otherwise correct.

---

### 14. `cdo` — drink — surface/sense: 啜 is 'sip/suck', not the ordinary 'drink'
- **File:** `words/drink.js` line 183
- **Current:** `["啜", "t͡soʔ˨˦"]`
- **Expected:** `["食", "siʔ˨˦"]` (cf. 食茶/食水 'drink tea/water') or keep 啜 with a sense note
- **Why:** In Eastern Min/Fuzhou the unmarked verb for 'to drink (a beverage)' is 食 *sieh* (食茶 'drink tea', 食酒 'drink wine') — the same 'eat/drink/ingest' verb used pan-Min. 啜 *chók* specifically means 'to sip/suck/slurp' and is a narrower-sense word. As a general 'drink' headword 食 is the expected colloquial choice (Hanyu Fangyin Zihui; cf. the Hokkien usage 食水). At minimum the narrow sense of 啜 should be flagged.

---

### 15. `nan` — drink — citation tone of 啉 disagrees with the Tâi-lô variants
- **File:** `words/drink.js` line 73
- **Current:** `["啉", "lim˥"]`
- **Expected:** `["啉", "lim˦"]`
- **Why:** 啉 *lim* 'to drink' is a 陰平 (tone 1) syllable. The dataset's own Amoy/Zhangzhou Tâi-lô entries transcribe tone 1 here as high-level [˦] (`lim˦`, drink.js:340–341), whereas the bare `nan` uses [˥]. Amoy tone 1 is conventionally [44]~[55]; the discrepancy is small but the column should match its siblings and Bodman's [44] citation value.

---

### 16. `cpx` — eye — surface uses 珠 where the etymological graph is 睭
- **File:** `words/eye.js` line 1065
- **Current:** `["目珠", "bak˥˥t͡siu˧˧"]`
- **Expected:** `["目睭", "bak˥˥t͡siu˧˧"]`
- **Why:** The Min binome for 'eye' is 目睭 *ba̍k-chiu* (lit. 'eye-pupil'), written with 睭 — exactly as the Hokkien `nan_xm`/`nan_zz` entries spell it (`目睭`, eye.js:340–341). 珠 'pearl/bead' is a folk-respelling; the standard Min character is 睭. The IPA (entering-tone 目 [bak˥˥] + 睭 [t͡siu˧˧]) is fine; only the surface graph needs correcting for consistency with the other Min columns.

---

### 17. `nan` — eat — 陽入 high entering tone letter vs Teochew/Quanzhou register check
- **File:** `words/eat.js` line 73
- **Current:** `["食", "t͡siaʔ˦"]`
- **Expected:** confirm [˥] vs [˦] consistency with `nan_te`/`nan_pn`
- **Why:** Secondary consistency note. The `nan_te` and `nan_pn` colloquial entries give the 陽入 of 食 as [˥˥] (`t͡siaʔ˥˥`, eat.js:743, 982) while `nan` uses [˦]. Both are defensible (44 vs 55), but the high-entering register should be harmonised across the Hokkien-cluster columns; pick one convention (Bodman uses [˦] for Amoy 陽入). Flagged as a low-priority alignment item, not a hard error.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
