# Hanmap data review #9 — Mongolic / Phagspa / Khitan / Tangut specialist

## Reviewer self-introduction (ペルソナ自己紹介)

Specialist in Mongolic comparative phonology (Poppe, Janhunen), the Phagspa script as a window onto Yuan-era Late Middle Chinese (Coblin 2007), Khitan large/small script decipherment (Kane, Aisin Gioro), Tangut (Xixia) phonology (Gong Hwang-cherng, Jacques), and Bai/Hmong stratification of Sinitic loanwords. Familiar with Zhongyuan Yinyun (1324) as the bridge between Late MC and Early Mandarin. All Phagspa surface/IPA cross-checks are made against Coblin (2007) *A Handbook of 'Phags-pa Chinese*; Mongolic forms against Poppe (1955) *Introduction to Mongolian Comparative Studies* and Janhunen (2003, *The Mongolic Languages*); Tangut against Gong Hwang-cherng and Jacques (2014) *Tangut*; Khitan against Kane (2009) *The Kitan Language and Script* and Chinggeltei / Aisin Gioro Ulhicun.

---

## Issues found

### 1. 一 — `zh_phagspa` — wrong glottal stop notation inconsistency

- Current (surface): `"ʼi"` / (IPA): `"ʔi"`
- The surface field uses the apostrophe-like modifier letter (ʼ) while the IPA field uses the correct IPA glottal stop (ʔ). The same character is written two different ways. Only one notation should be used throughout; the IPA field `ʔi` is phonetically correct for Late MC 影母 initial (Coblin §3.1 renders 一 as /ʔi/ in Phagspa). The surface field should likewise be `"ʔi"` or the dataset must choose one convention and apply it consistently.
- Source: Coblin (2007) §9, entry 一.

---

### 2. 二 — `zh_phagspa` — wrong initial consonant reconstruction

- Current (surface): `"ri"` / (IPA): `"ɽɨ"`
- Expected: `"ɻɨ"` or per Coblin, the retroflex approximant. More critically, the *surface* field shows `"ri"` (implying a trill + high front vowel) while the IPA shows `"ɽɨ"` (retroflex flap + high central unrounded vowel). These are different descriptions of the same sound class and the discrepancy between surface and IPA transcription is misleading. The Phagspa letter for 二 is ꡔꡞ which Coblin (2007) transcribes as `ȵɨ` (palatal nasal + high central vowel), reflecting the *日* (rì)-class initial — NOT a retroflexed rhotic. The character 二 (*nji-s*) has an *日* (Grade II resonant) initial in LMC, rendered in Phagspa as the specialized ꡔ letter.
- Source: Coblin (2007) §12, entry 二; cf. also Pulleyblank (1984) for the *rz-* class initial.

---

### 3. 火 — `zh_phagspa` — vowel nucleus discrepancy between surface and IPA

- Current (surface): `"xo"` / (IPA): `"xɔ"`
- The surface field uses /o/ and the IPA uses /ɔ/. While the Phagspa script for 火 (ꡣꡧꡡ) indicates a rounded back vowel, the discrepancy between /o/ and /ɔ/ in surface vs. IPA should be resolved. Coblin (2007) entry 火 reconstructs xwɔ, so the IPA `xɔ` is the more accurate representation; the surface should be unified to `"xo"` if simplified notation is preferred, but both fields must agree.
- Source: Coblin (2007) entry 火.

---

### 4. 木 — `zh_phagspa` surface — missing final glottal stop

- Current (surface): `"muʼ"` / (IPA): `"mu"`
- The surface field has a final glottal stop marker `ʼ` but the IPA field omits it entirely. 木 belongs to the 入聲 (entering tone) category with a final stop in Middle Chinese (MC *mˤok). In Zhongyuan Yinyun the 入聲 was absorbed into other tones, but Coblin's Phagspa reconstruction for 木 retains the stop coda in some spellings. The inconsistency between surface `muʼ` and IPA `mu` is an internal contradiction. The IPA should show `muʔ` if the stop is preserved, or both should drop it.
- Source: Coblin (2007) entry 木; cf. zh_yuan `mu4` → entering tone merging with 去聲.

---

### 5. 頭 — `zh_phagspa` — wrong initial consonant

- Current (surface): `"diw"` / (IPA): `"tiw"`
- The surface uses voiced `d` while the IPA uses voiceless aspirated `tʰ` (incorrectly written `t`). 頭 in Yuan Mandarin has an aspirated initial (tʰ-), which the zh_yuan entry `tʰəu˧˥` confirms. Coblin (2007) reconstructs 頭 in Phagspa as `tʰiw` with the Phagspa aspirate letter ꡉ. The surface field `"diw"` is therefore doubly wrong: it uses the voiced stop (appropriate for 定母 *d-* in pre-Yuan stages) but by the Yuan period 定母 平聲 devoiced and merged with aspirated 透母, hence Phagspa ꡉ, not ꡊ.
- Source: Coblin (2007) entry 頭; zh_yuan IPA `tʰəu˧˥` (same file, line 7675).

---

### 6. 中 (reading 1, tone 1) — `zh_phagspa` — wrong Phagspa initial

- Current (surface): `"juŋ"` / (IPA): `"tʂuŋ"`
- The surface field shows `juŋ` (palatal glide initial) while the IPA shows `tʂuŋ` (retroflex affricate initial). 中 belongs to MC 知母 (retroflex stop class), which yields the Phagspa retroflex affricate ꡄ. The native Phagspa script field ꡄꡦꡃ confirms `tʂuŋ`. The surface romanization `"juŋ"` is simply wrong; it should be `"juŋ"` only for the 以母 (yǐ-) class, not for a 知-class character. The correct surface romanization consistent with the IPA is `"juŋ"` *only* if the file's romanization convention deliberately simplifies ʈʂ → j for display. If not, the surface should be `"ʈʂuŋ"` or `"tʂuŋ"`.
- Note: This same inconsistency (`juŋ` surface / `tʂuŋ` IPA) recurs in 中:2 entries (lines 9025-9026, 9118-9119).
- Source: Coblin (2007) entry 中.

---

### 7. 見 — `zh_phagspa` surface — tonally inconsistent forms

- Current (surface): `"gen"` / (IPA): `"kjɛn"`
- 見 has a palatal stop initial (見母 *k-*) that fronts before front vowels. The IPA gives `kjɛn` with palatalized k, which is reasonable for Yuan Mandarin. But the surface `"gen"` shows a voiced stop and lacks the yod — inconsistent with the IPA `kjɛn` in the same entry. Coblin (2007) reconstructs 見 in Phagspa as `kjɛn` with Phagspa letter ꡀ (voiceless velar). The surface should be `"kyen"` or `"kjɛn"` to match.
- Source: Coblin (2007) entry 見; zh_yuan IPA `kiɛn˥˩` (line 11679).

---

### 8. 二 — `pmgl` — Proto-Mongolic form etymologically inappropriate for this row

- Current (surface/IPA): `"*koxar"` / `"*koxar"`
- Expected: The Mongolic word for 'two' is Proto-Mongolic `*qoyar` (Middle Mongolian *qoyar*, Modern *xoyar/xoer*). The form `*koxar` is a non-standard romanization of the same word and may be acceptable, but it mixes romanization systems (Poppe uses *qoyar*; Janhunen uses *xojAr*). The `q` > `k` and `y` > `x` substitutions without explanation can confuse users expecting standard Altaicist notation. If the file uses a consistent internal convention (k- for uvular stop, x- for uvular fricative), then `*koxar` is defensible but should be documented. The surface field also uses the bracketed notation `*koxar` while the IPA uses the same form, suggesting no IPA distinction is being made for the uvular.
- Source: Poppe (1955) p. 30; Janhunen (2003) p. 15 (*xojAr*).

---

### 9. 一 — `pmgl` — incorrect Proto-Mongolic form

- Current (surface): `"*nike(n)"` / (IPA): `"*nikæn"`
- Expected: Proto-Mongolic 'one' is standardly reconstructed as `*nigen` (Poppe 1955) or `*niken` (Janhunen). The forms `*nike(n)` (surface) and `*nikæn` (IPA) differ: the surface uses front mid-high `e` and the IPA uses the ash `æ`. Standard Altaicist transcription (Poppe, Janhunen) gives `*nigen` with a mid front vowel. Neither `*nikæn` nor `*nike(n)` is the canonical reconstruction. Mongolian historical linguistics uses `*nigen` as the accepted form. The ash `æ` in the IPA field is non-standard for Proto-Mongolic reconstructions.
- Source: Poppe (1955) *Introduction to Mongolian Comparative Studies*, §2.1; Janhunen (2003).

---

### 10. 土 — `pmgl` — incorrect semantic match

- Current: `"*sirui"` (surface) / `"*siruj"` (IPA)
- 土 means 'earth, soil'. The Mongolic reflex for 'earth/soil/ground' is `*gajar` (land, earth) or `*šoroi` (dirt, soil). The form `*sirui` / `*siruj` does appear in Mongolian as `šoroi` (Modern), but the Proto-Mongolic reconstruction should be `*šori` or `*šoroi`, not `*sirui` — the `s` initial is incorrect; the affricate-initial `š-` is the standard reconstruction. Poppe and Janhunen both give `š-` initially. The `s` here appears to be a misread of the Mongolian Cyrillic шороо (šoroo), where ш = [ʃ] not [s].
- Source: Poppe (1955); Lessing (1960) *Mongolian-English Dictionary* s.v. шороо.

---

### 11. 心 — `pmgl` — semantically suspect form

- Current: `"*jirüken"` (surface) / `"*dʒirykæn"` (IPA)
- 心 glosses 'heart / mind'. Proto-Mongolic `*dʒirüken` is indeed the Mongolic word for 'heart' (Modern Mongolian *zürx*), and this is correct for the anatomical meaning. However, the surface and IPA forms again disagree on the initial consonant: surface `j-` vs. IPA `dʒ-`. These represent the same consonant (palatal affricate) but written inconsistently. The canonical Altaicist form is `*ǰirüken` (Poppe) or `*dʒirüken` (Janhunen); the surface `*jirüken` uses the plain palatal glide `j` for what is reconstructed as an affricate.
- Source: Poppe (1955) §5.2; Janhunen (2003).

---

### 12. 東 vs. 西 — `pmgl` — same form for both 'east' and 'west'

- 東 (east) pmgl: `"*jegün"` (surface) / `"*dʒeɡyn"` (IPA)
- 西 (west) pmgl: `"*baragun"` (surface) / `"*baraɣun"` (IPA)
- These are correct: Middle Mongolian *jegün* (east) and *barāɣun* (west) are well-attested. However, the IPA for 東 uses `*dʒeɡyn` with `y` (close back rounded) for the final vowel, while Poppe reconstructs `*jegün` with ü (front rounded). This is a transcription choice issue but `y` (ASCII) is ambiguous — in IPA `y` is the close front rounded vowel, which is actually correct for `ü`. Still, using `y` for `ü` in an IPA field is non-standard.
- Source: Poppe (1955); Mostaert (1968) *Dictionnaire ordos*.

---

### 13. 龍 — `pmgl` — wrong reconstruction

- Current: `"*luu"` (surface) / `"*luː"` (IPA)
- The Mongolian word for 'dragon' (the mythical creature, one of the twelve animals of the zodiac) is `luu` or `lu'u` in Modern Mongolian, borrowed from Tibetan `klu` (nāga). The Proto-Mongolic reconstruction `*luu` is thus a late borrowing, not a native Mongolic word. This row should either (a) mark it explicitly as a Tibetan/Buddhist loanword into Mongolian, or (b) note the absence of a native Mongolic word for 'dragon', since the Chinese 龍 concept maps only partially to the Mongolian borrowed term. Presenting `*luu` as a native Proto-Mongolic reconstruction is misleading — it is a historical loanword of uncertain depth.
- Source: Janhunen (2003); Lessing (1960) s.v. луу.

---

### 14. 鳥 — `zh_phagspa` surface — wrong initial

- Current (surface): `"dew"` / (IPA): `"tjew"`
- The surface shows `d-` (voiced stop) while the IPA shows `tj-` (palatal stop). 鳥 in Late MC belongs to the 端母 (unaspirated dental stop *t-*) class. In Yuan Mandarin, the 端母 before front vowels palatalizes but remains voiceless. The IPA `tjew` is consistent with zh_yuan `tiau˨˩˦` (line 5377). The surface `"dew"` is simply an error; it should be `"tyew"` or `"tjew"`.
- Source: Coblin (2007) entry 鳥; zh_yuan IPA `tiau˨˩˦` in same file.

---

### 15. 走 — `zh_phagspa` surface vs. IPA inconsistency

- Current (surface): `"dziw"` / (IPA): `"tsiw"`
- 走 has MC initial 精母 (*ts-*), voiceless sibilant affricate. The IPA `tsiw` correctly reflects this as voiceless. But the surface `dziw` uses `dz-` (voiced). In Yuan Mandarin (Zhongyuan Yinyun), 精母 remained voiceless; the 走 entry in zh_yuan has `tsəu˨˩˦` (voiceless). The surface `"dziw"` conflates 走 (精母 voiceless) with the voiced 從母 (*dz-*) initials. This is a phonological error.
- Source: Coblin (2007) §8; Zhongyuan Yinyun 走 = 精母 voiceless.

---

### 16. 月 — `zh_phagspa` surface vs. IPA inconsistency

- Current (surface): `"ʼɥe"` / (IPA): `"ɥe"`
- The surface has `ʼɥe` (with glottal initial) but the IPA has `ɥe` (no glottal). 月 in MC has initial 疑母 (*ŋ-*), not 影母 (*ʔ-*). By the Yuan period, 疑母 had merged with the zero-initial 影母 before certain vowels, but Coblin's Phagspa reconstruction for 月 gives ꡗꡧꡠ (native script field) which begins with the 影母 letter ꡗ. If 影母 initial is intended, then the IPA should show `ʔɥe` (matching the surface). If zero initial, both fields should drop the glottal. The current mismatch is an error.
- Source: Coblin (2007) entry 月; cf. MC *ŋʷat* > LMC palatalized form.

---

### 17. 魚 — `zh_phagspa` surface vs. IPA inconsistency

- Current (surface): `"ʼy"` / (IPA): `"ɥ"`
- 魚 has MC initial 疑母 (*ŋ-*). The Phagspa script in the native field shows ꡝꡦꡟ. The surface `"ʼy"` includes the 影母 glottal marker while the IPA `"ɥ"` shows only the rounded palatal approximant. These are inconsistent: either the initial is ʔ (and both should show it) or it is zero/ŋ (and neither should show ʼ). Compare with 月 (issue 16) for the same systemic inconsistency in how 疑母 → zero initial merger is handled.
- Source: Coblin (2007) entry 魚.

---

### 18. 人 — `zh_phagspa` surface vs. IPA inconsistency

- Current (surface): `"žin"` / (IPA): `"ʐin"`
- The surface uses `ž` (z-hacek) while the IPA uses `ʐ` (retroflex fricative). These represent different sounds: `ž` = [ʒ] (palato-alveolar voiced fricative), `ʐ` = [ʐ] (retroflex voiced fricative). 人 has MC initial 日母 which in Yuan Mandarin yields a retroflex fricative, not a palato-alveolar fricative. The IPA `ʐ` is correct; the surface `ž` is a non-IPA convenience notation but in a dataset that otherwise uses IPA symbols, mixing the hacek diacritic is a consistency problem. The native Phagspa script ꡔꡞꡋ begins with letter ꡔ (the "rzy" series in Coblin) consistently representing a retroflex rhotic/fricative.
- Source: Coblin (2007) §12 (日母 row); cf. 日、二、肉 for parallel cases.

---

### 19. 肉 — `zh_yuan` surface — incorrect tone label

- Current: `"rieu4"` (surface) / `"ʐiəu˥˩"` (IPA)
- 肉 in the Zhongyuan Yinyun belongs to the entering-tone (入聲) characters that merged into 去聲 (falling tone = tone 4) in the *尤侯* rhyme group. The surface `"rieu4"` assigns tone 4 (去聲). However, in Zhongyuan Yinyun, 入聲 characters from the voiced-initial class (*nikuok* environment) characteristically merged into 陽平 (tone 2) rather than 去聲. The 肉 character (MC *k.nuk*, voiced initial environment) should fall in 陽平/tone 2 in ZYYY. Using tone 4 may be an error — check against the 中原音韻 入聲派入陽平 rule.
- Source: Zhongyuan Yinyun (1324), 入聲作平聲 rules; cf. Coblin (1994) *A Handbook of Eastern Han Chinese*.

---

### 20. 土 — `zh_phagspa` IPA — correct but surface ambiguous

- Current (surface): `"thu"` / (IPA): `"tʰu"`
- The surface `"thu"` is an acceptable romanization of aspirated `tʰ-`, consistent with the convention used elsewhere in the file (e.g., 天 = `thẽn`/`tʰjɛn`). This is internally consistent. However, the file mixes `th` = aspirate (Sinological convention) with `tʰ` = aspirate (IPA). Users reading surface vs. IPA may be confused. This is not an error per se but a documentation issue.

---

### 21. 心 — `pmgl` — inconsistent Jirüken representation

- Current surface: `"*jirüken"` / IPA: `"*dʒirykæn"`
- As noted in issue 11, the surface uses `j-` and IPA uses `dʒ-` for the same consonant. Additionally, the surface has `ü` (front rounded vowel, standard Mongolian orthography) while the IPA has `y` followed by `k` then `æn`. Poppe's canonical reconstruction is `*ǰirüken`; the vowel of the suffix is `e`, not `æ`. The IPA `*dʒirykæn` substitutes `y` for `ü` (which in IPA context is read as close front rounded, arguably acceptable) but then uses `æ` for the final syllable vowel where `e` is expected. The combination produces a non-standard reconstruction not found in Poppe or Janhunen.
- Source: Poppe (1955) §5.2.

---

### 22. 犬 — `pmgl` — correct but note potential source confusion

- Current: `"*noxai"` (surface) / `"*noxaj"` (IPA)
- The Mongolic word for 'dog' is Proto-Mongolic `*noqai` (Poppe) / `*noxaj` (Janhunen). The form is correct. However, the surface uses `*noxai` (with final `i`) and the IPA uses `*noxaj` (with final `j`). These are the same phoneme transcribed differently. The dataset should standardize: if final glides are transcribed as vowels in surface forms, do so consistently; if as consonants in IPA, do so consistently.
- Source: Poppe (1955); Modern Mongolian *nokhoi*.

---

### 23. 北 — `pmgl` — phonologically suspect reconstruction

- Current: `"*xoyitu"` (surface) / `"*hojitu"` (IPA)
- The Mongolic word for 'north' is reconstructed as `*qoyitu` (Poppe) — literally 'the one behind' from `*qoyi` 'behind, rear' + `-tu` (directional suffix). The surface `*xoyitu` (with `x-` for `q-`) is a recognizable variant. However, the IPA `*hojitu` uses `h-` which is wrong — Proto-Mongolic `*q-` (uvular stop) in the historical Mongolian language is not `h`; it surfaces as `x` [χ] in Modern Mongolian. Representing it as `h` [h] in the IPA field is phonetically inaccurate.
- Source: Poppe (1955); Modern Mongolian *хойд* (khoid) 'north'.

---

### 24. 足 — `zh_phagspa` surface — wrong initial voicing

- Current (surface): `"dzuʼ"` / (IPA): `"tsu"`
- 足 in MC has initial 精母 (*ts-*), voiceless. By Yuan Mandarin the entering-tone character 足 merges into 去聲. The surface `dzuʼ` uses voiced `dz-` and marks a final glottal; the IPA `tsu` uses voiceless `ts-` and drops the glottal. The MC etymology is unambiguously voiceless 精母 (cf. Karlgren GSR 1200a: `*tsiok`). The surface `"dzuʼ"` is incorrect in using `dz-`. Compare 走 (issue 15) for the same pattern — 精母 characters are erroneously given `dz-` in surface forms.
- Source: Coblin (2007) entry 足; Baxter-Sagart OC `*[ts]ok`.

---

### 25. 聞 — `zh_phagspa` — two fields internally consistent but wrong phoneme

- Current (surface): `"wun"` / (IPA): `"wun"`
- 聞 has MC initial 微母 (*m-*), which in Late Middle Chinese fronted to a bilabial fricative *β-, ʋ-* before rounding, and in Yuan Mandarin merged with the zero initial / `w-`. The Phagspa representation `wun` is consistent with this merger and with the Phagspa letter ꡓ (the bilabial/labiodental series). This is phonologically defensible. However, both fields give `wun` but the native Phagspa script ꡓꡟꡋ begins with ꡓ which Coblin transcribes as `w` — consistent. No error, but note that `wun` should not imply a velar-labial approximant like English `w`; it is better described as the Phagspa `β̃` series.
- Source: Coblin (2007) entry 聞.

---

### 26. 天 — `zh_yuan` tone vs. `zh_phagspa` — minor tone notation issue

- Current zh_yuan: `"thien1"` (surface) / `"tʰiɛn˥"` (IPA)
- The surface `"thien1"` assigns tone 1 (陰平), which is correct for 天: in Zhongyuan Yinyun, 天 falls under 先天 rhyme as 陰平 (voiceless initial → 陰平). The IPA `tʰiɛn˥` uses a single level-tone diacritic ˥ (55 = high level), consistent with 陰平. This is correct. The zh_phagspa `tʰjɛn` (surface) and `tʰjɛn` (IPA) are also consistent. No error here, but note the Phagspa script has a nasalized vowel marker (the tilde in the surface field `thẽn`) that is absent from the IPA field `tʰjɛn` — minor notation inconsistency.
- Source: Coblin (2007) entry 天; ZYYY 先天 rhyme, 陰平 category.

---

### 27. 日 — `zh_phagspa` surface vs. IPA inconsistency (systematic)

- Current (surface): `"ži"` / (IPA): `"ʐɨ"`
- Again the hacek-z `ž` (surface) vs. retroflex `ʐ` (IPA) inconsistency (cf. issue 18). For 日 specifically, the vowel also differs: surface `i` (front high) vs. IPA `ɨ` (central high unrounded). In Late MC / Yuan Mandarin, the 日母 character 日 had the retracted high central vowel (apical vowel, written `ɨ` or `ɻ̩` in IPA). The IPA `ʐɨ` is phonetically more accurate than the surface `ži`. This is the same systematic issue as 人 (issue 18) and 二 (issue 2).
- Source: Coblin (2007) §12 (日母 series: 日、二、肉、耳).

---

## Summary of systemic issues

1. **Surface vs. IPA notation mismatch** (zh_phagspa): The dataset systematically writes `ž` in surface fields but `ʐ` in IPA fields for the 日母 retroflex consonant series (日, 二, 人, 耳, 肉). Choose one notation.
2. **Glottal stop inconsistency** (zh_phagspa): The 影母 initial is written `ʼ` (modifier letter) in surface fields but `ʔ` in IPA fields. The native Phagspa script column is the ground truth; transcription conventions must be unified.
3. **Voiced vs. voiceless initial errors** (zh_phagspa surface): Several 精母 (voiceless `ts-`) characters are written with voiced `dz-` in surface fields (走, 足); several 端母 (voiceless `t-`) characters appear as `d-`. This is a systematic phonological error in the romanization layer, not in the IPA layer.
4. **Proto-Mongolic reconstruction notation**: The dataset alternates between Poppe-style (q-, ǰ-, ü) and a modified system (x-/k- for uvular, j- for affricate, y for ü). This is internally inconsistent across surface and IPA fields.
5. **Entering tone (入聲) treatment**: The zh_yuan and zh_phagspa entries do not consistently handle the 入聲 split into other tones as prescribed by Zhongyuan Yinyun. Some entering-tone characters receive the correct tone assignment; others need verification against the ZYYY 入聲派入 rules.

---

## Worker comment (作業者コメント)

Processed by Claude Opus 4.7, 2026-05-31 JST.

**Findings reviewed:** 27
**Fixes applied:** 16 review items, 20 field-level edits in `hanmap_data.js` (several items touch >1 cell; ž→ʐ rule from #18/#27 extended to 耳/肉; 入聲 glottal-stop rule from #4 extended to 目).
**Noted but not applied:** 11 (rationale per item below)

Conservative policy: only changes that were clearly correct per Coblin (2007) for Phagspa or Poppe/Janhunen for Proto-Mongolic, and where the local fix would not require a system-level convention rewrite. Each edit verified via `node -e` round-trip against the post-edit `HAN_DATA`.

### Per-finding verdict

1. **一 zh_phagspa surface `ʼi` vs IPA `ʔi`** — **Applied.** Reviewer is right that this single character is written two ways inside one entry. Unified to `ʔi` (matching the IPA layer and the same convention used for other 影母 syllables after this fix).

2. **二 zh_phagspa IPA `ɽɨ` (retroflex flap)** — **Applied.** `ɽ` (retroflex flap) is not what 日母 surfaces as in Coblin's Phagspa; the parallel 日母 entries (日, 人, 肉) all use `ʐ` (retroflex fricative) in the IPA row. Changed IPA to `ʐɨ` for 二 *and* 耳 (耳 had the same `ɽɨ` IPA — same 日母 cell mis-typed). Surface `ri` kept (file convention for the 日母 surface row; see #18/#27).

3. **火 zh_phagspa `xo`/`xɔ`** — Noted, not applied. Both `o` and `ɔ` are defensible for the rounded back vowel; this is a notational vs phonetic distinction across surface/IPA layers (parallel pattern at e.g. 木 `mu`, where surface and IPA use the same symbol after the #4 fix). Not a clear error.

4. **木 zh_phagspa surface `muʼ` vs IPA `mu` (missing final stop in IPA)** — **Applied.** 入聲 final glottal preserved in Phagspa orthography; IPA must reflect it. Changed IPA to `muʔ`. Same fix applied to 目 (`muʼ`/`mu` → `muʔ`/`muʔ`), which had the identical bug.

5. **頭 zh_phagspa `diw`/`tiw`** — **Applied.** By Yuan/Phagspa period, 定母 平聲 had devoiced and merged with aspirated 透母; cf. zh_yuan `tʰəu˧˥`. Voiced `d-` is anachronistic; the unaspirated `t-` in the IPA layer is also incomplete. Unified to `tʰiw` in both surface and IPA.

6. **中:1 / 中:2 zh_phagspa `juŋ`** — **Applied.** Native script field is ꡄꡦꡃ (ꡄ = retroflex affricate). The IPA for 中:1 already reads `tʂuŋ` (matching zh_yuan); the `juŋ` strings in the surface column of both 中:1 and 中:2 — and in the IPA column of 中:2 — are mis-imports. Unified all three to `tʂuŋ`.

7. **見 zh_phagspa surface `gen` vs IPA `kjɛn`** — **Applied.** 見母 is voiceless `k-`; native script ꡀꡦꡋ uses the voiceless velar letter; zh_yuan reads `kiɛn˥˩`. Voiced `g-` is wrong. Replaced surface with `kjɛn` to match IPA.

8. **二 pmgl `*koxar`/`*koxar`** — **Applied.** Standard Mongolicist forms are `*qoyar` (Poppe, with uvular) / `*qojar` (IPA-style with glide). The intervocalic `x` is wrong: PMgl has `*y` ~ `*j` (semivowel) here, not the velar fricative. Surface → `*qoyar` (Poppe-style with uvular q-), IPA → `*qojar`. Also brings the initial in line with the standard `q-` rather than the dataset's earlier `k-` re-romanisation.

9. **一 pmgl `*nike(n)` / `*nikæn`** — Noted, not applied. The `*nikAn` archiphoneme is Janhunen's actual notation; the surface `e` vs IPA `æ` reflects different rendering choices for the underspecified vowel. File-wide convention should be unified, but the local form is not unambiguously wrong.

10. **土 pmgl `*sirui` / `*siruj`** — Noted, not applied. Reviewer claims `š-` initial, but PMgl is typically reconstructed with `*s-` that palatalised before /i/ in the daughter languages (Modern Mongolian шороо < *siru-). Initial `s-` is defensible.

11. **心 pmgl IPA `*dʒirykæn` (final vowel `æ`)** — **Applied.** Surface has `e` (`jirüken`), IPA has `æ` (`dʒirykæn`). Poppe/Janhunen give the suffix vowel as `e`. Changed IPA to `*dʒiryken`.

12. **東/西 pmgl `y` for `ü`** — Noted, not applied. `y` in IPA is the close front rounded vowel — phonetically correct for `ü`. The reviewer themselves concedes this is a transcription-choice question.

13. **龍 pmgl `*luu`** — Noted, not applied. Reviewer notes it is a Tibetan loanword; this is well-known but the dataset has no mechanism to mark a Proto-Mongolic cell as a loanword, and removing it would lose more information than keeping it. Phonologically the form is not wrong.

14. **鳥 zh_phagspa surface `dew` vs IPA `tjew`** — **Applied.** 端母 is voiceless; zh_yuan `tiau˨˩˦`. Voiced `d-` is an error. Replaced surface with `tjew` to match IPA (kept the existing IPA; the question of whether the native script ꡇꡠꡓ should imply ɲ- as well is beyond the scope of a local fix).

15. **走 zh_phagspa surface `dziw` vs IPA `tsiw`** — **Applied.** 精母 is voiceless `ts-`; zh_yuan `tsəu˨˩˦`. Surface `dz-` conflates 精/從. Replaced surface with `tsiw`.

16. **月 zh_phagspa surface `ʼɥe` vs IPA `ɥe`** — **Applied.** Same glottal-stop inconsistency as #1. Surface had ʼ marker; IPA dropped it. Unified to `ʔɥe` in both.

17. **魚 zh_phagspa surface `ʼy` vs IPA `ɥ`** — **Applied.** Surface marks initial + rounded front vowel; IPA had only the labio-palatal approximant `ɥ` with no vowel (clearly truncated). Unified to `ʔy` in both.

18. **人 zh_phagspa surface `žin` vs IPA `ʐin`** — **Applied.** Hacek-z vs retroflex-z represent different phonemes (palato-alveolar vs retroflex). The IPA is correct for Yuan-period 日母. Replaced surface with `ʐin`. Same fix propagated to 肉 (`žiw` → `ʐiw`) and 日 (`ži` → `ʐɨ`) per the systemic rule the reviewer flags (see #27).

19. **肉 zh_yuan tone `rieu4` (should be tone 2?)** — Noted, not applied. Reviewer themselves frames as "may be an error… check". The 入聲派入 rule for 日母 (sonorant initial) gives 去聲 in some traditions and 陽平 in others; the current tone-4 reading is defensible per the 中原音韻 sonorant-initial 入聲派入去聲 line. Not unambiguously wrong.

20. **土 zh_phagspa `thu`/`tʰu`** — Reviewer flags it as a documentation issue only. No edit needed.

21. **心 pmgl (same as #11)** — covered above.

22. **犬 pmgl `*noxai`/`*noxaj`** — Noted, not applied. Final-glide i vs j is a notational difference (both represent the offglide); inconsistent but not wrong.

23. **北 pmgl IPA `*hojitu` (h- vs x-)** — **Applied.** PMgl `*q-` (or `*x-`) surfaces as χ/x in Modern Mongolian, not `h`. Replaced IPA with `*xojitu`.

24. **足 zh_phagspa surface `dzuʼ` vs IPA `tsu`** — **Applied.** Same 精母 voicing issue as #15 plus missing final glottal in IPA. Unified to `tsuʔ` in both.

25. **聞 zh_phagspa `wun`/`wun`** — Reviewer notes no error. No action.

26. **天 zh_yuan / zh_phagspa tone** — Reviewer notes no error. No action.

27. **日 zh_phagspa surface `ži` vs IPA `ʐɨ`** — **Applied** (under #18 propagation). Surface `ži` → `ʐɨ`; same rule applied to 人 and 肉.

### Cache version

`hanmap.html`: `hanmap_data.js?v=63` → `?v=64` (data changed).

Note: develop is already at `?v=71`; this worktree branched from an older `v=63` state, so the worktree-local bump to 64 will require manual resolution at cherry-pick time. Any subsequent number in the sequence is fine — the important thing is that the version is bumped.

### Verification

- `node --check hanmap_data.js` → OK.
- `node -e "require('./hanmap_data.js')"` → loads cleanly.
- Round-trip check (20 surface/IPA assertions across all touched cells) → **20/20 pass**.

Final post-edit values for the touched cells:

- `一/zh_phagspa`: surface `ʔi`, ipa `ʔi`
- `二/zh_phagspa`: surface `ri`, ipa `ʐɨ`
- `二/pmgl`: surface `*qoyar`, ipa `*qojar`
- `木/zh_phagspa`: surface `muʔ`, ipa `muʔ`
- `目/zh_phagspa`: surface `muʔ`, ipa `muʔ` (systemic extension)
- `頭/zh_phagspa`: surface `tʰiw`, ipa `tʰiw`
- `中:1/zh_phagspa`: surface `tʂuŋ`, ipa `tʂuŋ`
- `中:2/zh_phagspa`: surface `tʂuŋ`, ipa `tʂuŋ`
- `見/zh_phagspa`: surface `kjɛn`, ipa `kjɛn`
- `心/pmgl`: surface `*jirüken`, ipa `*dʒiryken`
- `鳥/zh_phagspa`: surface `tjew`, ipa `tjew`
- `走/zh_phagspa`: surface `tsiw`, ipa `tsiw`
- `月/zh_phagspa`: surface `ʔɥe`, ipa `ʔɥe`
- `魚/zh_phagspa`: surface `ʔy`, ipa `ʔy`
- `人/zh_phagspa`: surface `ʐin`, ipa `ʐin`
- `肉/zh_phagspa`: surface `ʐiw`, ipa `ʐiw` (systemic extension)
- `日/zh_phagspa`: surface `ʐɨ`, ipa `ʐɨ`
- `耳/zh_phagspa`: surface `ri`, ipa `ʐɨ` (systemic extension)
- `北/pmgl`: surface `*xoyitu`, ipa `*xojitu`
- `足/zh_phagspa`: surface `tsuʔ`, ipa `tsuʔ`

Note: review #1 (Middle Chinese specialist) also flagged some of these (e.g. 一 zh_phagspa glottal-stop notation). Review #1 deferred the harmonisation as a file-wide convention question; this review pushes it through case-by-case where the local mismatch is clear. If review #1 has already been cherry-picked first, conflicts may arise on the 一/zh_phagspa surface cell — resolve in favour of `ʔi`.
