# Wordmap review #58 — Japonic pitch-accent, kana & romanization specialist

## Reviewer self-introduction (ペルソナ自己紹介)

私は日本語族（Japonic）の音声学・方言学を専門とし、特にピッチアクセント（高低アクセント）、仮名表記とヘボン式ローマ字化、そして琉球諸語の音韻を扱います。 My documentary scope covers Standard (Tokyo / 東京) Japanese, the Kansai cluster (Osaka 大阪, Kyoto 京都), Tōhoku (Aomori 青森 / 津軽弁), Hakata 博多 (Kyūshū), Hiroshima 広島, the Ryukyuan languages (Okinawan / 沖縄 *Uchinaaguchi*, Miyako / 宮古, and the umbrella Ryukyuan forms), and the diachronic stages of Japanese — Old Japanese (上代/万葉), Heian (平安), Chūko/Chūsei (中古・中世), and Edo (江戸). My core reference works for this review are **Vance, *The Sounds of Japanese* (Cambridge, 2008)** for the synchronic phonology (devoicing, moraic nasal /ɴ/, the high-back unrounded [ɯ], the affricate/fricative allophones of /h/ and /z/), **the NHK 日本語発音アクセント新辞典 (NHK Accent Dictionary, 2016)** for Tokyo pitch-accent classes, **Shibatani, *The Languages of Japan* (1990)** and **Frellesvig, *A History of the Japanese Language* (2010)** for the Old/Middle Japanese reconstructions (the /ɸ/→/h/ shift, the *kō/otsu* 甲乙 vowel distinctions, /zu/ vs /dzu/), and **Pellard & Shimoji (eds.), *An Introduction to Ryukyuan Languages* (2010)** for Okinawan and Miyako reflexes. The single most pervasive problem I find below is that the historical and several synchronic entries store **plain romaji in the IPA slot** rather than true IPA, which is inconsistent with the proper IPA used in the modern `ja` headword of the same file.

---

## Issues found

### 1. `ja_heian` — moon — romaji in the IPA slot, plus missing *kō/otsu* vowel
- **File:** `words/moon.js` line 555
- **Current:** `["月", "tukï"]`
- **Expected:** `["月", "tukʷï"]` (or render the vowel as a true IPA symbol, e.g. `tɯkɨ`)
- **Why:** The second slot must be IPA, but `tukï` mixes ASCII `t`, `u` with the philological diacritic `ï` (the *otsu* 乙類 vowel notation), which is a transliteration convention, not IPA. The modern `ja` headword in this same file uses proper IPA `t͡sɯki` (line 57). Either the *otsu*-vowel is rendered with an IPA central/high vowel (Frellesvig 2010 reconstructs OJ *otsu* ï as a high central/back unrounded vowel, conventionally [ɨ]~[ï]), but the consonants must still be IPA. As written it is neither clean IPA nor internally consistent with `ja_chu`/`ja_edo`.

---

### 2. `ja_chu` — moon — romaji copied into IPA slot
- **File:** `words/moon.js` line 556
- **Current:** `["月", "tuki"]`
- **Expected:** `["月", "t͡sɯki"]` (or, if pre-affrication is intended for Middle Japanese, `["月", "tuki"]` rewritten as IPA `[tuki]` with a justified plain stop)
- **Why:** `tuki` is plain Hepburn-ish romaji, not IPA — it is identical to the romanization and contains no IPA-specific symbol. Vance (2008: 78) notes /tu/ is realized [t͡sɯ] in all modern mainland varieties; the question for Chūko Japanese is whether affrication had occurred. Whatever the answer, the slot must contain IPA (either `[tuki]` deliberately, or `[t͡sɯki]`), and it should be flagged that it currently merely duplicates the surface romanization.

---

### 3. `ja_edo` — moon — romaji `tsuki` in the IPA slot
- **File:** `words/moon.js` line 553
- **Current:** `["月", "tsuki"]`
- **Expected:** `["月", "t͡sɯki"]`
- **Why:** `tsuki` is the Hepburn romanization, not IPA: it uses the digraph ⟨ts⟩ and the cardinal rounded ⟨u⟩. Edo-period and modern Tokyo /tu/ = the affricate [t͡s] before the high back **unrounded** vowel [ɯ] (Vance 2008: 56, 78). The modern `ja` entry correctly writes `t͡sɯki` (line 57); the Edo entry should match, since Edo Japanese is the direct ancestor of Tokyo speech and shares the affrication and [ɯ] quality.

---

### 4. `ja_edo` — water — romaji `midzu` in the IPA slot
- **File:** `words/water.js` line 554
- **Current:** `["水", "midzu"]`
- **Expected:** `["水", "mid͡zɯ"]`
- **Why:** `midzu` is a transliteration, not IPA — it lacks the tie-bar and uses rounded ⟨u⟩. The modern `ja` headword uses `mizɯ` (line 57) and the Miyako/Ryukyuan entries correctly use the IPA affricate `mid͡zɨ` (lines 64–65). For Edo 水 the historically expected reflex is the affricate [d͡z] with the unrounded vowel: `[mid͡zɯ]`. As written it is bare romaji.

---

### 5. `ja_heian` / `ja_chu` — water — romaji `midu`, missing the /du/ reflex in IPA
- **File:** `words/water.js` lines 556, 557
- **Current:** `["水", "midu"]` (both)
- **Expected:** `["水", "midu"]` rendered as true IPA `[midu]`, or with the *otsu* vowel `[midɨ]`
- **Why:** Historically 水 was *midu* (the *yotsugana* 四つ仮名 ⟨づ⟩ kept distinct from ⟨ず⟩; Frellesvig 2010: 187). The reconstruction with a plain stop [d] is defensible for Heian, **but the slot still contains ASCII romaji rather than IPA** and is byte-identical to the surface romanization minus kanji. Both lines need to be marked as IPA, and the Heian *otsu*-class final vowel (-u₂) should arguably be `[ɨ]`, distinguishing it visually from Chūko.

---

### 6. `ja_edo` — one — wrong lexeme AND romaji in IPA slot
- **File:** `words/one.js` line 553
- **Current:** `["一", "hitotsu"]`
- **Expected:** `["一", "it͡ɕi"]` (Sino-Japanese 一 *ichi*) — or, if the native numeral is wanted, surface `一つ`/`ひとつ` with IPA `[çi̥totsɯ̥]`
- **Why:** Two problems. (a) The IPA slot `hitotsu` is plain romaji, not IPA. (b) It is also a **lexeme/sense mismatch**: every other `ja*` entry for "one" in this file gives the Sino-Japanese cardinal 一 = *ichi* `it͡ɕi` (lines 57–63), but the Edo entry silently switches to the native numeral *hitotsu* 一つ while keeping the surface 一. The surface 一 with reading *hitotsu* is internally inconsistent, and the IPA needs ⟨tsu⟩→[t͡sɯ̥] (final devoiced) plus initial [çi̥] for the devoiced high vowel after /h/ (Vance 2008: 60, 207).

---

### 7. `ja_heian` / `ja_chu` — one — romaji `ɸitotu`, devoicing & vowel
- **File:** `words/one.js` lines 555, 556
- **Current:** `["一つ", "ɸitotu"]` (both)
- **Expected:** `["一つ", "ɸitotu"]` kept as IPA but with explicit vowel quality, e.g. `[ɸitotɯ]` (Chūko) / `[ɸitotu]` (Heian) — and the two stages should not be byte-identical
- **Why:** The initial `ɸ` is correctly IPA (Old/Middle Japanese /h/ = [ɸ]; Frellesvig 2010: 197), which is good. But the two historically distinct stages are given the **identical** string, erasing the very contrast the separate codes exist to show. The Heian form predates *tu*-affrication and rounding shifts; the Chūko form is on the path toward [t͡sɯ]. At minimum the final vowel rounding/quality should differentiate them, and the o/u vowels should be confirmed against Frellesvig's reconstruction rather than left as bare ASCII `o`/`u`.

---

### 8. `ja_edo` — dog — romaji `inu` in IPA slot
- **File:** `words/dog.js` line 547
- **Current:** `["犬", "inu"]`
- **Expected:** `["犬", "inɯ"]`
- **Why:** `inu` is romaji. The modern `ja`, `ja_osa`, `ja_aom`, `ja_kyo`, `ja_hir` all correctly use the IPA unrounded `inɯ` (lines 57–63). Tokyo/Edo /u/ is the compressed high back unrounded [ɯ] (Vance 2008: 56), so the Edo entry should read `inɯ`, not the rounded romaji `inu`.

---

### 9. `ja_edo` — heart — romaji `kokoro` in IPA slot (rhotic not IPA)
- **File:** `words/heart.js` line 547
- **Current:** `["心", "kokoro"]`
- **Expected:** `["心", "kokoɾo"]`
- **Why:** Japanese /r/ is the apico-alveolar **tap** [ɾ], not the trill/approximant ⟨r⟩ (Vance 2008: 89). Every modern mainland `ja*` entry in this file uses `kokoɾo` with the tap (lines 57–63); the Edo, Heian (line 549 `kokoro`), and Chūko (line 550 `kokoro`) entries all use plain ⟨r⟩ romaji and should be `kokoɾo`.

---

### 10. `ja_heian` / `ja_chu` — heart — same plain-⟨r⟩ romaji error
- **File:** `words/heart.js` lines 549, 550
- **Current:** `["心", "kokoro"]` (both)
- **Expected:** `["心", "kokoɾo"]`
- **Why:** As in #9, the rhotic must be the IPA tap [ɾ]. There is no evidence Heian/Chūko Japanese /r/ was anything but a tap/flap (Frellesvig 2010: 38). Both entries duplicate the romanization and are also byte-identical to each other, again collapsing two stages that the codes are meant to distinguish.

---

### 11. `ja_edo` — cat — romaji `neko`, missing intervocalic voicing detail
- **File:** `words/cat.js` line 547
- **Current:** `["猫", "neko"]`
- **Expected:** `["猫", "neko"]` rendered as IPA (it happens to coincide), but the entry should be confirmed/marked as IPA; cf. velar nasalization note below
- **Why:** `neko` is segmentally identical in romaji and broad IPA, so this is the least severe case — but it is still stored without any IPA-distinguishing symbol, so it reads as a romaji copy. Note that conservative Tokyo/Edo speech often nasalizes intervocalic /g/ to [ŋ] (Vance 2008: 215); there is no /g/ here, but the file should adopt a consistent policy of marking these forms as genuine IPA rather than leaving them ambiguous with the romanization.

---

### 12. `ja_chu` — eat — initial vowel/consonant and the historical reflex of 食ふ
- **File:** `words/eat.js` line 550
- **Current:** `["食ふ", "kuɸu"]`
- **Expected:** `["食ふ", "kuɸu]` as IPA is fine, but cross-check vs. `ja_heian` `kaɸu` (line 549)
- **Why:** The Heian entry gives 食ふ = `kaɸu` (*kafu*, classical 四段 *kuFu/kaFu*), while the Chūko entry gives `kuɸu`. The medial `ɸ` is correctly IPA in both (good — Middle Japanese /h/ = [ɸ]). However the **stem vowel differs (ka- vs ku-)** between two adjacent diachronic stages without annotation; the classical 終止形 of 'eat' is 食(く)ふ *kufu*, so the Heian `kaɸu` ka-stem needs justification (it looks like a conjugated/連用 or dialectal form), or it is an error for `kuɸu`. Please verify against Frellesvig (2010: §the 四段 paradigm of 食ふ).

---

### 13. `ja_edo` — eat — surface 食う with IPA `kuː`: long-vowel marking questionable
- **File:** `words/eat.js` line 547
- **Current:** `["食う", "kuː"]`
- **Expected:** `["食う", "kɯː"]` (and verify the long vowel)
- **Why:** Two points. (a) The vowel must be the unrounded [ɯ], not rounded romaji [u] (Vance 2008: 56), so `kɯː`. (b) The surface 食う *kuu* is historically /kuu/ < *kufu*; whether Edo had already monophthongized to a long [ɯː] or retained a [u.u] hiatus is debatable, but if a long vowel is intended it should be the unrounded `ɯː`. As written the rounded `uː` is neither modern-IPA-consistent nor matched to the `ja_hak` `kɯːte` (line 61) which already uses unrounded `ɯː`.

---

### 14. `ja_kyo` / `ja_osa` — mother / father — long-vowel vs. geminate inconsistency in お母さん/お父さん
- **File:** `words/mother.js` lines 61–62; `words/father.js` lines 61–62
- **Current:** mother `ja_hak` `["お母しゃん", "okaːɕaɴ"]`, `ja_kyo` `["お母さん", "okaːsaɴ"]`; father `ja_hak` `["お父しゃん", "otoːɕaɴ"]`, `ja_kyo` `["お父さん", "otoːsaɴ"]`
- **Expected:** `okaːsaɴ` / `otoːsaɴ` are defensible, but flag the vowel-length source
- **Why:** お母さん is *o-kaa-san* with a genuine long [aː] (from 母 *kaka* → *kaa*), so `okaːsaɴ` is correct. **But お父さん is *o-tou-san*** — the long vowel comes from /tou/ → [toː], which the IPA `otoːsaɴ` captures. The orthography お父さん would more transparently be read *o-tou-san*; the entries are fine, but the moraic-nasal /ɴ/ (correctly used) and the long vowels should be checked for the Hakata `ɕ`-palatalization (しゃん) which is correctly reflected as `ɕaɴ`. No change required to /ɴ/ — this is a *verify*, the one well-formed pair in the set.

---

### 15. `ja_oki` — moon — Okinawan 月 vowel raising and the IPA affricate
- **File:** `words/moon.js` line 60
- **Current:** `["月", "t͡ɕit͡ɕi"]`
- **Expected:** `["月", "t͡siːt͡si"]` or `["月", "t͡ɕiː(t͡ɕi)"]` — verify length and palatalization
- **Why:** Okinawan reflects the Ryukyuan three-vowel raising *e,o → i,u and *tuki → /tsiki/~/tʃiki/; the standard Uchinaaguchi for 'moon' is **chichi/tsitsi** with the well-known *o→u, e→i* and *ki→t͡ɕi* palatalization (Pellard & Shimoji 2010). The given `t͡ɕit͡ɕi` palatalizes **both** syllables to [t͡ɕi], but the first mora derives from *tu* (→ [t͡si], a plain alveolar affricate before [i] in many descriptions), while only the second (*ki*) palatalizes to [t͡ɕi]. As written it is identical to the Okinawan word for 'father' 父 pattern and likely over-palatalizes the first mora; verify against Pellard & Shimoji's Shuri phonology.

---

### 16. `ja_hak` — dog — moraic nasal `iɴ` correct, but check vowel of 犬
- **File:** `words/dog.js` line 61
- **Current:** `["犬", "iɴ"]`
- **Expected:** `["犬", "iɴ"]` (verify) vs. Miyako/Ryukyuan `in` (lines 64–65)
- **Why:** Hakata/Kyūshū 犬 with final moraic nasal [ɴ] (*inu* → *in*) is plausibly correct and the uvular /ɴ/ symbol is the right Vance (2008: 96) choice for the word-final moraic nasal. **However** `ja_mvi` and `ja_rys` give `in` with a plain alveolar `n` (lines 64–65) for the same phenomenon — the moraic nasal in coda position should be the moraic /ɴ/ in IPA in all three, or the inconsistency (`iɴ` vs `in`) should be justified. Recommend unifying on `iɴ` for the moraic nasal per Vance.

---

### 17. `ja_rys` / `ja_mvi` — dog — plain `in` should use moraic /ɴ/
- **File:** `words/dog.js` lines 64, 65
- **Current:** `["犬", "in"]` (both)
- **Expected:** `["犬", "iɴ"]`
- **Why:** The final segment is the moraic nasal (one full mora), which IPA-for-Japonic renders [ɴ] (Vance 2008: 96; the coda nasal is uvular/placeless, not a plain alveolar [n]). Writing `in` with [n] suggests a non-moraic onset-less coda. Align with the Hakata `iɴ` (line 61).

---

### 18. `ja_chu` — thanks — geminate/affricate `dʑ` vs Heian `d` inconsistency in 忝
- **File:** `words/thanks.js` lines 549, 550
- **Current:** `ja_heian` `["忝なし", "katadikenaɕi"]`; `ja_chu` `["忝し", "katadʑikenaɕi"]`
- **Why:** The Heian form uses plain `di` (`katadikenaɕi`) — i.e. the *yotsugana* ⟨ぢ⟩ as a plain stop [di], which is historically correct for Heian (the *ji/ぢ* merger postdates Heian; Frellesvig 2010: 187). The Chūko form palatalizes/affricates to [dʑi] (`katadʑikenaɕi`), also defensible for Chūsei. **This contrast is actually correct and well-motivated** — I flag it only to confirm it is intentional and to note the Heian `di` is *not* a romaji error but a deliberate pre-affrication reconstruction. Recommend a wordEvidence note documenting the ⟨ぢ⟩=[di]→[dʑi] timeline so future editors do not "correct" the Heian form to [dʑi].

---

### 19. `ja_heian` — father — `titï` uses *kō/otsu* notation, not clean IPA
- **File:** `words/father.js` line 549
- **Current:** `["父", "titï"]`
- **Expected:** `["父", "titɨ]` or `["父", "t͡ɕit͡ɕï]` per chosen palatalization policy — but render in IPA
- **Why:** 父 OJ/Heian *titi* (later *chichi*) is given as `titï`, mixing ASCII `t`, `i` with the philological *otsu* diacritic `ï`. The `ojp` entry (line 1041) and the Chūko entry (line 550) both give plain `titi`. The Heian slot should be true IPA: if pre-palatalization is assumed, [titi]; the `ï` second-vowel notation is OJ *otsu*-class metalanguage, not IPA, and is inconsistent with `ja_chu` `titi`. (Frellesvig 2010 on the loss of the 甲乙 distinction by Heian — by the Heian period the *otsu* vowels had largely merged, so `ï` may be anachronistic here.)

---

### 20. `ja_oki` — sun — Okinawan 'sun' てぃだ /tida/ vowel and the alveolar onset
- **File:** `words/sun.js` line 60
- **Current:** `["てぃだ", "tida"]`
- **Expected:** `["てぃだ", "tʰida"]` or `["てぃだ", "tida]` confirmed as IPA (note Okinawan aspiration contrast)
- **Why:** Okinawan *tida/tiida* 'sun' is correct as the lexeme (cf. the well-known *tida* 太陽; Pellard & Shimoji 2010). The kana てぃ deliberately encodes [ti] (un-affricated, unlike mainland チ [t͡ɕi]), which is good. **But** Okinawan has a phonemic plain/aspirated (and glottalized) stop contrast — `ja_oki` 一 is written `tʰiːt͡ɕi` (one.js line 60) **with** aspiration, yet 'sun' is `tida` **without** it. The onset of *tida* is the plain (unaspirated/"glottalized") series in Shuri; the representation should be consistent across the Okinawan entries — either mark the plain-series stop explicitly or document why 一 carries `tʰ` and 'sun' does not.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
