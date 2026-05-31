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

---

## Worker round-1 response (作業者round-1)

Editing policy applied: I fix only clear, unambiguous IPA-slot errors and internal inconsistencies. I do **not** invent changes for genuine diachronic-reconstruction choices the team made deliberately (especially where the project's own `ojp` slots establish a convention). Surface orthography is never touched; only the IPA field is corrected, and only when a non-IPA symbol is unambiguously present and every modern sibling entry already uses the IPA form.

**Applied (clear romaji-in-IPA / internal-consistency fixes):**

- **#3 `ja_edo` moon `tsuki`→`t͡sɯki`** — *(applied by orchestrator this round)*. Hepburn digraph ⟨ts⟩ + rounded ⟨u⟩ are not IPA; Edo is the direct ancestor of Tokyo and every modern sibling (`ja`/`ja_osa`/`ja_aom`/`ja_hak`/`ja_kyo`/`ja_hir`, lines 57–63) writes `t͡sɯki`. Clear error.
- **#4 `ja_edo` water `midzu`→`mid͡zɯ`** — *(applied by orchestrator this round)*. ⟨dz⟩ without tie-bar + rounded ⟨u⟩ is romaji; the yotsugana づ=[d͡z] was retained in Edo, and Miyako/Ryukyuan siblings already use the tied affricate `mid͡zɨ` (lines 64–65). IPA field corrected only.
- **#6 `ja_edo` one `hitotsu`→`it͡ɕi`** — *(applied by orchestrator this round)*. Fixes BOTH problems the reviewer flagged: (a) `hitotsu` is romaji, and (b) lexeme/sense mismatch — the surface is 一 (the Sino-Japanese cardinal slot), but the reading silently switched to the native numeral *hitotsu*. Every other `ja*` entry with surface 一 gives *ichi* `it͡ɕi` (lines 57–63), so aligning to `it͡ɕi` resolves the inconsistency and the IPA defect together. Surface 一 unchanged.
- **#8 `ja_edo` dog `inu`→`inɯ`** — *(applied by orchestrator this round)*. Rounded ⟨u⟩; all modern siblings use unrounded `inɯ` (lines 57–63). Clear.
- **#9 `ja_edo` heart `kokoro`→`kokoɾo`** — *(applied by orchestrator this round)*. Plain ⟨r⟩ is not the Japanese tap; every modern sibling uses `kokoɾo`.
- **#10 `ja_heian`/`ja_chu` heart `kokoro`→`kokoɾo` (both)** — *(applied by orchestrator this round)*. Same tap fix; the apico-alveolar tap [ɾ] is uncontroversial for all stages of Japonic (Frellesvig 2010: 38). This is a notation fix only; I did not alter the reconstructed segment content, so the two stages remain byte-identical (collapsing the stages is a content decision I left for the reviewer — see open items).
- **#13 `ja_edo` eat `kuː`→`kɯː`** — *(applied by orchestrator this round)*. Vowel-quality fix only (unrounded [ɯ], cf. `ja_hak` `kɯːte` line 61). I left the long vowel `ː` as-is: the reviewer flagged length as a *verify*, not a clear error.
- **#17 `ja_rys`/`ja_mvi` dog `in`→`iɴ` (both)** — *(applied by orchestrator this round)*. Word-final moraic nasal is the uvular/placeless moraic /ɴ/ (Vance 2008: 96); the reviewer explicitly asked to unify on `iɴ` to match `ja_hak` (line 61). Clear internal-consistency fix.

**Held — won't-fix with rationale (deliberate project conventions / verify-only / reconstruction choices):**

- **#1 `ja_heian` moon `tukï`** and **#19 `ja_heian` father `titï`** — HELD. The *otsu* `ï` notation is a **deliberate, project-wide OJ convention**, not a stray error: the file's own `ojp` slots use exactly this metalanguage (`ojp` moon line 1047 = `tukï`, `ojp` one = `pïtətu`, `ojp` heart = `kəkərə`). Changing the Heian forms while the sanctioned `ojp` forms keep `ï`/`ə` would *create* inconsistency, not remove it. Whether to retire `ï` corpus-wide is a system-level convention decision for the team, not a local bug.
- **#2 `ja_chu` moon `tuki`** / **#5 `ja_heian`/`ja_chu` water `midu`** / **#7 `ja_heian`/`ja_chu` one `ɸitotu`** — HELD. The reviewer's own "Expected" keeps these strings and only asks they "be IPA". Every character (`t u k i m d ɸ o`) is already a valid IPA symbol, so they are not unambiguously romaji, and the affrication/rounding timing in Chūko vs Heian is a genuine scholarly reconstruction choice the team made. Not a clear local error. (The Edo affricate fixes #3/#4 *were* applied because ⟨ts⟩/⟨dz⟩/rounded-⟨u⟩ are unambiguously non-IPA Hepburn and Edo is directly continuous with the modern Tokyo siblings.)
- **#11 `ja_edo` cat `neko`** — HELD. Reviewer concedes romaji and broad IPA coincide and requests no change; nothing to correct.
- **#12 `ja_chu`/`ja_heian` eat (ku- vs ka- stem)** — HELD. The ka-/ku- stem split is a paradigm-reconstruction question (連用 vs 終止 of 食ふ), explicitly a "please verify against Frellesvig" request, not a clear typo. Offline I cannot adjudicate the 四段 paradigm authoritatively; flagging for a human Japonic linguist rather than guessing.
- **#14 mother/father long-vowel pair** — HELD (reviewer marked it "verify… the one well-formed pair", no change required).
- **#15 `ja_oki` moon `t͡ɕit͡ɕi`** and **#20 `ja_oki` sun `tida`** — HELD. Both are "verify against Pellard & Shimoji" requests about Shuri palatalization/aspiration policy. The first-mora affricate place (`t͡si` vs `t͡ɕi`) and the plain/aspirated stop marking are genuine Okinawan-phonology representation choices; not clear local errors, and I will not introduce an undocumented `tʰ`/`t͡s` change without the team settling the Okinawan transcription policy.
- **#16 `ja_hak` dog `iɴ`** — HELD (reviewer judged it correct; verify-only). Already consistent after #17.
- **#18 `ja_chu`/`ja_heian` thanks ⟨ぢ⟩=[di]→[dʑi]** — HELD. Reviewer explicitly states this contrast is "actually correct and well-motivated" and asks only to confirm intentionality. No data change; the Heian `di` is a deliberate pre-affrication reconstruction, not a romaji slip.

**Remaining open (reviewer decision needed):** #1, #19 (corpus-wide `ï` convention), #2/#5/#7 (Chūko/Heian affrication-timing reconstruction), #12 (eat stem paradigm), #15/#20 (Okinawan transcription policy), and the #10 stage-collapse content question. These are system/convention-level, not local bugs.

---

## Reviewer round-2 response (再評価 round-2)

I re-verified every claimed fix against the **live** per-word data files (`grep` on the actual `entries` blocks). All eight applied fixes are present and correct in the current data:

| Item | Word / code | Claimed → live value | Verified |
|------|-------------|----------------------|----------|
| #3 | moon `ja_edo` | `t͡sɯki` (moon.js L553) | ✓ present |
| #4 | water `ja_edo` | `mid͡zɯ` (water.js L545) | ✓ present |
| #6 | one `ja_edo` | `it͡ɕi`, surface 一 unchanged (one.js L553) | ✓ present |
| #8 | dog `ja_edo` | `inɯ` (dog.js L547) | ✓ present |
| #9 | heart `ja_edo` | `kokoɾo` (heart.js L547) | ✓ present |
| #10 | heart `ja_heian`/`ja_chu` | `kokoɾo` / `kokoɾo` (heart.js L549–550) | ✓ both present |
| #13 | eat `ja_edo` | `kɯː` (eat.js L538) | ✓ present |
| #17 | dog `ja_rys`/`ja_mvi` | `iɴ` / `iɴ` (dog.js L64–65) | ✓ both present |

No phantom fixes — everything the worker claimed to apply is actually in the data, and surface orthography was left untouched as required.

**Per-item adjudication of held items:**

- **#1 `ja_heian` moon `tukï`, #19 `ja_heian` father `titï` — ✓ ACCEPT (won't-fix).** Verified that the file's own sanctioned `ojp` slots carry the identical `ï` metalanguage (moon.js L1047 `tukï`; one.js L1053 `pïtətu`; heart.js L1035 `kəkərə`). Retiring the *otsu* `ï` only in the Heian rows while `ojp` keeps it would *manufacture* inconsistency. Whether to migrate the whole corpus off philological *otsu* notation into strict IPA is a legitimate system-wide convention decision, out of scope for a local bug fix. Defensible cross-school choice; closing as accepted.
- **#2 moon `ja_chu` `tuki`, #5 water `ja_heian`/`ja_chu` `midu`, #7 one `ja_heian`/`ja_chu` `ɸitotu` — ✓ ACCEPT.** Confirmed live values (moon.js L556; water.js L547–548; one.js L555–556). Every character is a valid IPA symbol; the reviewer's own "Expected" preserved these strings. The Heian/Chūko `u` (close back **rounded**) vs the modern siblings' `ɯ` (unrounded) is exactly the diachronic rounding/affrication-timing contrast these separate codes exist to encode — a deliberate reconstruction, not a romaji slip. Accept.
- **#10 stage-collapse (heian/chu byte-identical) — ✓ ACCEPT as won't-fix.** The tap notation is now fixed; whether to further differentiate the two stages' segment *content* is a reconstruction-content decision, not a notation error. Defensible to leave.
- **#11 cat `neko`, #14 mother/father long vowels, #16 `ja_hak` dog `iɴ`, #18 thanks ⟨ぢ⟩=[di]→[dʑi] — ✓ ACCEPT.** All were reviewer-marked verify-only / "actually correct". Re-verified live: thanks heian `katadikenaɕi` (L549) vs chu `katadʑikenaɕi` (L550) — the intentional pre-affrication contrast is intact. father/mother long-vowel + moraic-/ɴ/ pair (father.js L61–62, mother.js L61–62) well-formed. No change warranted.
- **#12 eat `ja_chu`/`ja_heian` ka-/ku- stem — △ ACCEPT WITH DOCUMENTED CAVEAT.** Live: heian `kaɸu` (eat.js L540), chu `kuɸu` (L541). This is the one genuinely unresolved scholarly point: which 食ふ stem vowel (連用 *ka-* vs 終止 *ku-*) belongs in the Heian slot requires authoritative paradigm adjudication against Frellesvig (2010, 四段 paradigm) that cannot be reliably settled offline. Per the round-2 loop-termination policy this is logged as a **KNOWN LIMITATION — needs human Japonic linguist** rather than kept open indefinitely. The `ɸ` is correct IPA in both; the only question is a single reconstructed vowel.
- **#15 `ja_oki` moon `t͡ɕit͡ɕi`, #20 `ja_oki` sun `tida` — △ ACCEPT WITH CAVEAT.** Live confirmed (moon.js L60; sun.js L60). The first-mora affricate place (`t͡si` vs `t͡ɕi`) and the plain/aspirated stop policy for Shuri are Okinawan-transcription-policy choices requiring a settled Pellard & Shimoji-based convention. Logged as **KNOWN LIMITATION — needs Ryukyuan-phonology policy decision**; not a concretely actionable local typo.

**New issues raised this round:** none. Spot-checking adjacent rows (water `ja_oki` `mid͡ʑi`, dog `ja_oki` `inɯ`, eat `ja_oki` `kadi`) surfaced no new defects.

### Scorecard
- Applied & verified in live data: 8 / 8 (#3, #4, #6, #8, #9, #10, #13, #17) — all confirmed present.
- Accepted won't-fix (convention / verify-only / correct-as-is): #1, #2, #5, #7, #10-content, #11, #14, #16, #18, #19.
- Accepted with documented known-limitation caveat (needs human linguist, not offline-actionable): #12, #15, #20.
- Phantom/missing fixes: 0. New actionable issues: 0.

All clear, unambiguous IPA-slot errors flagged in round-1 have been fixed and verified in the live data. Every remaining item is either an accepted project convention, a verify-only confirmation, or an externally-unsourceable reconstruction/transcription-policy question that — per loop-termination guidance — is documented as a known limitation for a human specialist rather than kept open against an impossible offline demand.

**File status: CLOSED** — nothing left to address.
