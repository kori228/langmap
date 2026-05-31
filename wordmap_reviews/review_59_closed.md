# Wordmap review #59 — Thai / Lao / SW-Tai orthography & tone specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a phonologist and orthographer specializing in the Southwestern Tai branch of Kra-Dai: Standard Central Thai and its regional varieties (Northern/Kham Mueang, Southern/Pak Tai, and Northeastern/Isan), Lao, and the smaller SW-Tai languages — Tai Lü (khb), Tai Dam / Black Tai (blt), Thai Song / Lao Song (soa), and the Tai varieties of Vietnam such as Tày (tyz) — together with the Northern Khmer (kxm) of Surin as the local Austroasiatic contact language. My core analytical tools for this review are Shoichi Iwasaki & Preeya Ingkaphirom, *A Reference Grammar of Thai* (Cambridge, 2005) for the Central Thai five-tone system, syllable structure, and segmental inventory; the Royal Thai General System of Transcription (RTGS, Royal Institute 1999) for the romanization-vs-IPA distinction; Anthony Diller's and James Chamberlain's tonal-box reconstructions of Proto-Tai tone categories A–B–C–DL–DS for the comparative tone classes; and N.J. Enfield, *A Grammar of Lao* (2007) for Lao tone and vowel length. Throughout I apply three SW-Tai universals that the dataset must respect: (1) final voiceless stops /p t k/ are obligatorily **unreleased** [p̚ t̚ k̚]; (2) vowel **length** is phonemically contrastive and must be transcribed (◌ː vs ◌); and (3) every SW-Tai variety is **fully tonal**, so a bare segmental string with no tone letter is an incomplete IPA transcription, not merely an underspecified one.

---

## Issues found

### 1. `blt` — hello — romanization pasted into the IPA slot
- **File:** `words/hello.js` line 987
- **Current:** `["ꪎꪺꪎꪒꪲ", "sa wad dii"]`
- **Expected:** `["ꪎꪺꪎꪒꪲ", "saː˨˦ waːt̚˨˩ diː˨˦"]` (length/tones from local sources; minimally `["…","saˀ waːt̚ diː"]`)
- **Why:** `dii` is RTGS-style romanization (doubled vowel letter = length), not IPA; IPA marks length with the triangular colon ◌ː, giving /diː/. The medial `wad` ends in an orthographic ⟨d⟩ that surfaces as an unreleased /t/ in SW-Tai, hence [waːt̚], not [wad]. Tai Dam is a tonal language; all three syllables here carry tone and none is marked. This is a surface≈IPA copy, the single least-defensible entry in my scope (RTGS; Iwasaki & Ingkaphirom 2005 on final-stop neutralization).

### 2. `blt` — thanks — non-IPA affricate symbols + romanization + no tone
- **File:** `words/thanks.js` line 987
- **Current:** `["ꪒꪲ ꪎꪶꪙ", "dʒɔp tʃai"]`
- **Expected:** `["…", "t͡ɕɔːp̚ t͡ɕaj"]` (with tones supplied)
- **Why:** Three problems compound here. (a) ⟨dʒ⟩ and ⟨tʃ⟩ are bare English-style affricate digraphs; proper IPA requires the tie bar (d͡ʒ / t͡ʃ), and for the Tai palatal series the dataset's own Thai entries use /t͡ɕ/ (cf. heart `t͡ɕaj`), so the value should be /t͡ɕ/ not /tʃ/. (b) Final ⟨p⟩ of `ɔp` must be unreleased [p̚]. (c) No tones are given for a tonal language. The string is effectively a romanization with stray IPA letters (RTGS; Iwasaki & Ingkaphirom 2005 §2 on the inventory).

### 3. `blt` — heart — palatal affricate missing the tie bar
- **File:** `words/heart.js` line 987
- **Current:** `["ꪈꪲꪒ", "tʃai˧"]`
- **Expected:** `["ꪈꪲꪒ", "t͡ɕaj˧"]`
- **Why:** The dataset transcribes the Tai palatal as the alveolo-palatal affricate /t͡ɕ/ everywhere in Thai/Lao (heart th `t͡ɕaj`, heart lo `t͡ɕaj`). Writing it as the post-alveolar /tʃ/ without a tie bar is both segmentally wrong (wrong place of articulation) and notationally non-IPA. The glide should also be /j/, matching the surrounding entries (Iwasaki & Ingkaphirom 2005 §2.1).

### 4. `khb` — water — Tai Lü is tonal: bare segments, missing tone + length
- **File:** `words/water.js` line 993
- **Current:** `["ᦓᧄᧉ", "nam"]`
- **Expected:** `["ᦓᧄᧉ", "naːm˥˧"]` (tone per Tai Lü tone box; minimally `naːm` with a tone letter)
- **Why:** The New Tai Lü surface ᦓᧄᧉ carries the tone-3 (C-category, ◌ᧉ) marker, yet the IPA has no tone letter at all — Tai Lü has six lexical tones, so an untoned transcription is incomplete. Compare the Central Thai cognate น้ำ /náːm/ which the dataset itself transcribes with a **long** vowel (`naːm`, water.js line 79); the Tai Lü reflex of Proto-Tai *C-category *naːmᶜ likewise has a long /aː/, so the short `nam` is also a length error (Chamberlain tone-box; RTGS for the length contrast).

### 5. `khb` — drink — RTGS string, not IPA, with no tones
- **File:** `words/drink.js` line 986
- **Current:** `["ᦂᦲᧃᦓᧄᧉ", "kin nam"]`
- **Expected:** `["ᦂᦲᧃᦓᧄᧉ", "kin˥ naːm˥˧"]` (the "eat-water" = "drink" compound, both syllables toned)
- **Why:** `kin nam` is a bare romanization identical to RTGS spelling. Tai Lü distinguishes lexical tone on both syllables of this 'eat + water' compound for 'drink'; neither is marked, and the second syllable repeats the length error of issue #4 (náːm). This is a surface≈IPA copy (RTGS).

### 6. `khb` — hello — IPA slot is a transliteration, no tones
- **File:** `words/hello.js` line 986
- **Current:** `["ᦷᦡᧃᦟᦲ", "dɔn liː"]`
- **Expected:** `["ᦷᦡᧃᦟᦲ", "dɔːn˥ liː˥"]` (tones supplied from a Tai Lü source)
- **Why:** Two-syllable Tai Lü greeting with no tone marks on a six-tone language; the first vowel of ᦷᦡᧃ is the long mid back /ɔː/ in the dataset's own convention (cf. father th `pʰɔː`), so `dɔn` under-specifies length as well. Incomplete IPA (RTGS; Diller on Tai Lü tone).

### 7. `khb` — thanks — same untoned-transliteration problem; glottal onset
- **File:** `words/thanks.js` line 986
- **Current:** `["ᦀᦸᧃᦷᦓᧁ", "ʔɔn nau"]`
- **Expected:** `["ᦀᦸᧃᦷᦓᧁ", "ʔɔːn˨ naːw˧"]` (tones to be supplied)
- **Why:** Although the glottal onset /ʔ/ is correctly captured, both syllables again lack tone in a tonal language, and the vowel of ᦀᦸᧃ is the long /ɔː/ (the ᦸ vowel sign), so `ɔn` should be `ɔːn`. The second syllable's diphthong is /aw/ not the orthographic `au`. Incomplete IPA (RTGS).

### 8. `khb` — sun — affricate and vowel under-transcribed, no tone
- **File:** `words/sun.js` line 992
- **Current:** `["ᦋᧁᧉ", "tsau"]`
- **Expected:** `["ᦋᧁᧉ", "t͡saw˥˧"]`
- **Why:** Tai Lü ᦋ is the affricate series; written as the digraph `ts` it lacks the IPA tie bar (t͡s). The rime ᧁ is /aw/, not the romanized `au`. And ᦋᧁᧉ carries the tone-3 (◌ᧉ) marker which is entirely absent from the IPA. Three-fold incomplete transcription (RTGS; Tai Lü orthography).

### 9. `blt` — heart vs. love — internal /h/ vs /t͡ɕ/ aside, the love/Black-Tai r→h merger is correctly shown but untoned consistency check
- **File:** `words/love.js` line 994
- **Current:** `["ꪥꪮꪀ", "hak˧˩"]`
- **Expected:** `["ꪥꪮꪀ", "hak̚˧˩"]`
- **Why:** Black Tai has merged Proto-Tai *r > /h/, so the /h/ onset is correct (good). However the dead syllable ꪥꪮꪀ ends in /k/, which in all SW-Tai is unreleased [k̚]; the dataset uses the unrelease diacritic elsewhere (e.g. words/eat.js), so the bare `hak` is inconsistent. Tone is present and fine (Iwasaki & Ingkaphirom 2005 on final-stop release).

### 10. `th` — love — short dead syllable final /k/ should be unreleased
- **File:** `words/love.js` line 79
- **Current:** `["รัก", "rak˧˥"]`
- **Expected:** `["รัก", "rak̚˦˥"]`
- **Why:** รัก /rák/ is a "dead" (checked) syllable closed by /k/; Central Thai final stops are obligatorily unreleased [k̚] (Iwasaki & Ingkaphirom 2005). The dataset already uses ̚ for final stops in other languages, so omitting it on Thai is inconsistent. The tone is the **high** tone (low-class onset ร + short vowel + dead = high); the dataset writes it as a ˧˥ rising-to-high contour, which is the common phonetic realization, so the tone value is acceptable but the more standard citation form is level-high ˦˥.

### 11. `soa` — love — surface/IPA onset mismatch (รัก spelled, /h/ pronounced)
- **File:** `words/love.js` line 148
- **Current:** `["รัก", "hak˥"]`
- **Expected:** surface `["ฮัก", "hak̚˥"]` (or keep รัก but flag the r→h note)
- **Why:** Thai Song / Black Tai merged *r > /h/, so the IPA /hak/ is right, but the Thai-script surface รัก writes ⟨ร⟩ = /r/, contradicting its own IPA. The dataset's parallel varieties spell the merger overtly — Isan love is `ฮัก` (love.js line 192) — so for consistency Thai Song should be written ฮัก, matching pronunciation. Final /k/ also wants the unrelease diacritic (Enfield 2007; Iwasaki & Ingkaphirom 2005).

### 12. `th_isan` `th_n` `th_s` — water — short vowel where Tai *C-tone reflex is long
- **File:** `words/water.js` lines 192, 193, 194
- **Current:** `["น้ำ", "nam˧˥"]` (all three)
- **Expected:** `["น้ำ", "naːm˧˥"]`
- **Why:** The grapheme ◌ํา (sara am) after the historical loss of final /m/ in this etymon yields a phonetically **long** /aː/ before /m/; the dataset's own Central Thai entry transcribes น้ำ as `naːm` (water.js line 79) and Lao as `naːm` (line 147). The three regional Thai varieties share this etymon and length, so the short `nam` is an inconsistent under-transcription of vowel length (RTGS length contrast; cf. Iwasaki & Ingkaphirom 2005 on /aː/).

### 13. `soa` — water — same vowel-length under-transcription
- **File:** `words/water.js` line 148
- **Current:** `["น้ำ", "nam˧˩"]`
- **Expected:** `["น้ำ", "naːm˧˩"]`
- **Why:** Identical to issue #12: Thai Song น้ำ has the long /aː/ of the *C-category etymon, matching the Central Thai and Lao long-vowel transcriptions in the same file. The tone (falling ˧˩) is plausible for the Thai Song reflex of *C; only the length is wrong (Chamberlain tone-box; RTGS).

### 14. `th` — thanks — final /p/ of ขอบ should be unreleased
- **File:** `words/thanks.js` line 79
- **Current:** `["ขอบคุณ", "kʰɔːp˨˩kʰun˧"]`
- **Expected:** `["ขอบคุณ", "kʰɔːp̚˨˩kʰun˧"]`
- **Why:** ขอบ /kʰɔ̀ːp/ is a checked syllable closed by /p/; Central Thai realizes all final stops unreleased [p̚]. The dataset applies ̚ to final stops in other languages, so its omission here (and in the parallel soa/isan/th_n/th_s entries at lines 148, 192, 193, 194, all `kʰɔːp…`) is a systematic consistency gap (Iwasaki & Ingkaphirom 2005 on syllable-final neutralization to unreleased stops).

### 15. `th` — sun — final /t/ of อาทิตย์ unreleased; high tone on checked short syllable
- **File:** `words/sun.js` line 79
- **Current:** `["ดวงอาทิตย์", "duaŋ˧ʔaː˧tʰit˧˥"]`
- **Expected:** `["ดวงอาทิตย์", "duːəŋ˧ʔaː˧tʰít̚˦˥]"` → minimally `"…tʰit̚˥"`
- **Why:** The final syllable ทิตย์ /tʰít/ is a checked syllable closed by /t/ (the cluster ⟨ตย์⟩ is silenced to a single final /t/); that /t/ must be unreleased [t̚]. The tone on this short checked syllable is the **high** tone ˦˥ (here written ˧˥, the acceptable rising-to-high realization). Additionally the ดวง rime is the centring diphthong /uːə/ rather than the monophthongal `ua`, though `duaŋ` is a tolerable shorthand (Iwasaki & Ingkaphirom 2005).

### 16. `khb` — moon — /l/ onset and vowel correct, but tonal C-marker ignored
- **File:** `words/moon.js` line 992
- **Current:** `["ᦟᦲᧃ", "liːn"]`
- **Expected:** `["ᦟᦲᧃ", "liːn˥"]` (tone to be supplied from a Tai Lü source)
- **Why:** The segments /liːn/ (long /iː/, correct) are fine, but Tai Lü is six-tone and this entry — like the other khb entries — gives no tone. Note also the lexical choice: ᦟᦲᧃ (lin) is the SW-Tai 'moon' root, consistent with the dataset's choice of เดือน/ดวงเดือน elsewhere, so the surface is appropriate; only the tone is missing (Diller; Tai Lü orthography).

### 17. `khb` — one — checked-syllable tone missing on a B/short rime
- **File:** `words/one.js` line 992
- **Current:** `["ᦓᦹᧂᧈ", "nuŋ"]`
- **Expected:** `["ᦓᦹᧂᧈ", "nɯŋ˨"]` (tone-2 from the ◌ᧈ marker)
- **Why:** Two issues: (a) the New Tai Lü vowel ᦹ is the high back unrounded /ɯ/, matching every other SW-Tai 'one' in the file (th `nɯŋ`, lo `nɯŋ`, blt `nɯŋ`); the IPA `nuŋ` wrongly rounds it to /u/. (b) The surface carries the ◌ᧈ tone-2 marker, but the IPA has no tone. Both a segmental (vowel-rounding) error and a tone omission (RTGS; Tai Lü tone box).

### 18. `khb` — hand — vowel rounded wrongly + no tone
- **File:** `words/hand.js` line 986
- **Current:** `["ᦙᦹ", "muː"]`
- **Expected:** `["ᦙᦹ", "mɯː˦"]` (tone to be supplied)
- **Why:** Same ᦹ = /ɯ/ issue as #17: the SW-Tai 'hand' is /mɯː/ (th `mɯː`, lo `mɯː`, blt `mɯ`), so `muː` mis-transcribes the vowel as rounded /u/. The long /ɯː/ should be retained and a tone supplied for this tonal language (RTGS; cross-check against the file's own th/lo/blt entries).

### 19. `blt` — heart — surface/IPA syllable-count and vowel mismatch
- **File:** `words/heart.js` line 987
- **Current:** `["ꪈꪲꪒ", "tʃai˧"]`
- **Expected:** `["ꪈꪲꪒ", "t͡ɕaj˧"]` (see also #3)
- **Why:** Beyond the affricate tie-bar issue in #3, the Tai Dam surface ꪈꪲꪒ ends in ⟨ꪒ⟩ (a /j/-or-/d/ final depending on analysis); the intended reading is the 'heart/mind' root /t͡ɕaj/ matching th ใจ `t͡ɕaj`. The rime should be the diphthong /aj/ (glide /j/), not the romanized `ai`. Keeping `ai` is acceptable shorthand but /aj/ is the dataset's house convention (heart th line 79) (Iwasaki & Ingkaphirom 2005).

### 20. `khb` — father — long /ɔː/ under-transcribed and untoned
- **File:** `words/father.js` line 986
- **Current:** `["ᦗᦸᧈ", "pɔː"]`
- **Expected:** `["ᦗᦸᧈ", "pɔː˨"]` (tone-2 from ◌ᧈ)
- **Why:** The long mid back vowel /ɔː/ is correctly captured (matches th `pʰɔː`), and the onset is the unaspirated /p/ appropriate to the ᦗ series here, but the ◌ᧈ tone-2 marker on the surface is not reflected in the IPA. As with all khb entries in my scope, the systematic omission of tone letters is the core defect for a six-tone language (Tai Lü orthography; Diller).

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

Scope note up front: across the whole dataset, the SW-Tai entries follow a consistent *broad* house convention — `th`/`lo`/`blt`/`khb` final stops are written WITHOUT the unrelease diacritic (`th` สวัสดี `…wat…`, `rak`, `kʰɔːp`, `tʰit`; `lo` `kʰɔːp`, `hak` — none carry ̚), `blt`/`khb` use `ai`/`au` (not `aj`/`aw`), and `blt`/`khb` routinely omit tone letters and length on greeting/transliteration entries. Several review items ask to override these *system-wide* conventions; per project editing policy those are held as won't-fix (they would make the targeted entry INCONSISTENT with the rest of its own language's data, and the cited "precedent" eat.js `mʌk̚t͈a` is Korean, not Tai). What I applied are only the clear, internally-consistent IPA-notation and segmental errors.

### Applied (4)

- **#2 `blt` thanks** `words/thanks.js` line 987 — IPA field `dʒɔp tʃai` → `t͡ɕɔp t͡ɕai` (applied by orchestrator this round). Two non-IPA bare affricate digraphs corrected to the dataset's house palatal `t͡ɕ` (cf. th/lo `t͡ɕaj`). The `dʒ` was doubly wrong: Tai Dam has NO voiced affricate in its inventory — only a voiceless palatal `<c>`=/t͡ɕ/ (Fippinger & Fippinger 1970, via NIU SEAsite Tai Dam phonology, https://seasite.niu.edu/tai/TaiDam/phonology.htm). Held the reviewer's added length/unrelease/tone (`t͡ɕɔːp̚ … toned`) as out-of-convention for blt (see scope note).
- **#3 / #19 `blt` heart** `words/heart.js` line 987 — IPA field `tʃai˧` → `t͡ɕai˧` (applied by orchestrator this round). `tʃ` (post-alveolar, non-IPA digraph) → alveolo-palatal `t͡ɕ` to match the dataset's Tai palatal everywhere (th `t͡ɕaj`, lo `t͡ɕaj`). Tone `˧` retained. Kept the `ai` glide (blt house convention: `fai`, `mai`, `sai` all use `ai`, not `aj`).
- **#17 `khb` one** `words/one.js` line 992 — IPA field `nuŋ` → `nɯŋ` (applied by orchestrator this round). Clear vowel error: New Tai Lü ᦹ = high back UNROUNDED /ɯ/; every cognate in the file is `nɯŋ` (th, lo, blt). Tone left unmarked, consistent with all other khb entries (held per scope note).
- **#18 `khb` hand** `words/hand.js` line 986 — IPA field `muː` → `mɯː` (applied by orchestrator this round). Same ᦹ=/ɯ/ vowel error; th/lo `mɯː`, blt `mɯ`. Length `ː` retained; tone left unmarked per khb convention.

### Held with rationale (won't-fix this round)

- **#1 `blt` hello, #5 `khb` drink, #6 `khb` hello, #7 `khb` thanks** — these are bare romanizations/transliterations missing tones (and sometimes length). Held: tone is systematically absent from ALL blt/khb greeting-style entries in the corpus; supplying it is a corpus-wide policy decision and each syllable's tone needs per-lexeme sourcing from a Tai Lü/Tai Dam tone box, not a local mechanical fix. The non-tone segmental sub-claims in #7 (`au`→`aw`) are held because khb consistently uses `au`/`ai` (e.g. `nau`, `fai`).
- **#4 `khb` water (length), #12 `th_isan/th_n/th_s` water, #13 `soa` water** — `nam`→`naːm`. Held: vowel-length here is a consistent broad-transcription house choice for the regional/minority variants (all three Isan/N/S Thai and soa write short `nam`; khb too). Central Thai/Lao using `naːm` does not make the regional short forms a *local error* — it is a deliberate cross-variety transcription depth difference. Recommend reviewer escalate as a corpus-wide normalization proposal if desired.
- **#8 `khb` sun** — `tsau` → tie-bar + `aw` + tone. Held: tone/glide are system conventions (see above). The `ts`→`t͡s` tie-bar point is notationally reasonable, but khb writes its affricates plainly throughout and the rime would also need `au`→`aw`; bundling makes this a convention change, not an isolated error. Held for consistency; flag for a dedicated khb affricate-normalization pass.
- **#9 `blt` love, #10 `th` love (diacritic), #14 `th` thanks, #15 `th` sun (diacritic)** — demand unreleased ̚ on final p/t/k. Held: NO `th`/`lo`/`blt` entry in the corpus marks final-stop unrelease; adding it to these would make them inconsistent with every other Tai entry. This is a system-level convention the team has applied uniformly. The cited eat.js precedent is Korean (`mʌk̚t͈a`), not a Tai language, so it does not establish a Tai convention.
- **#10 / #15 tone-value** (`˧˥`→`˦˥`) — reviewer explicitly calls the current contour "acceptable" / "common phonetic realization." Not an unambiguous error; held.
- **#11 `soa` love** — surface รัก→ฮัก. Held: surface-orthography change; reviewer themselves offers "or keep รัก but flag the r→h note." The IPA `hak` already encodes the merger; the script choice is a defensible convention (etymological spelling) and not an unambiguous error. Flag for human decision.
- **#16 `khb` moon, #20 `khb` father** — tone-only omissions; same rationale as #1/#5/#6 (system-wide untoned khb convention; tone needs sourcing). Held.

No segments/IDs are involved (this corpus is per-word IPA, not segmented). Net: 4 clear-error edits applied; remaining items held as system-level convention choices or sourcing-dependent normalizations for reviewer escalation.

---

## Reviewer round-2 response (再評価 round-2)

I re-verified every claim against the **live** data files. All four applied edits are present and correct; the held items rest on convention claims that I checked directly against the corpus and found to be true.

### Verification of the 4 applied fixes (all ✓ confirmed in live data)

- **#2 `blt` thanks** — `words/thanks.js:987` now reads `["ꪒꪲ ꪎꪶꪙ", "t͡ɕɔp t͡ɕai"]`. ✓ The non-IPA `dʒɔp tʃai` is gone. The worker's added justification (Tai Dam has no voiced affricate; only voiceless `/t͡ɕ/`, per Fippinger & Fippinger 1970 / NIU SEAsite) is sound and matches the dataset's house palatal `t͡ɕ`. Accept.
- **#3 / #19 `blt` heart** — `words/heart.js:987` now `["ꪈꪲꪒ", "t͡ɕai˧"]`. ✓ `tʃ`→`t͡ɕ` applied, tone `˧` retained. Accept.
- **#17 `khb` one** — `words/one.js:992` now `["ᦓᦹᧂᧈ", "nɯŋ"]`. ✓ The /u/→/ɯ/ vowel error is fixed (ᦹ = high back unrounded; cognates th/lo/blt all `nɯŋ`). Accept.
- **#18 `khb` hand** — `words/hand.js:986` now `["ᦙᦹ", "mɯː"]`. ✓ Same ᦹ=/ɯ/ fix, length retained. Accept.

### Adjudication of held items

- **#9 `blt` love, #10 `th` love, #14 `th` thanks, #15 `th` sun — final-stop unrelease ̚** — **✗ reject / accept the hold.** I grepped the whole corpus for U+031A (◌̚). It occurs **only** in Korean (`ko*`, e.g. `mʌk̚t͈a`, `t͡ɕip̚`, `komap̚`) and Min Nan (`nan*`, e.g. `dzit̚`, `bak̚`). It appears in **zero** Tai entries (th/lo/blt/khb). The reviewer's sole cited precedent (`eat.js mʌk̚t͈a`) is indeed Korean, not Tai. Adding ̚ to these Tai entries would make them the lone unrelease-marked items in the entire Tai sub-corpus. This is a defensible, uniformly-applied system-level convention. Hold sustained.
- **#10 / #15 tone-value `˧˥`→`˦˥`** — **✗ reject.** The reviewer's own text calls the current contour "acceptable" / "common phonetic realization." Not an unambiguous error. Hold sustained.
- **#1 / #5 / #6 / #7 / #8 / #16 / #20 — missing tone letters on blt/khb** — **△ accept the hold for now (documented limitation).** I dumped every `khb` entry in the corpus: **all 20** omit tone letters (`kin`, `taː`, `nɯŋ`, `nam`, `pɔ`, `maː`, `mɯː`, `liːn`, `diː`, `hak`, `fai`, `tsau`, `nau`, …). Tone omission is genuinely corpus-wide for khb, and per-lexeme tone requires a Tai Lü/Tai Dam tone-box source. Per round-2 loop-termination policy, this is a system-wide normalization that cannot be mechanically fixed locally; I will not hold the file open demanding per-syllable tone that needs a human Tai-Lü linguist. Recorded as a **known limitation** (see caveat below). The segmental sub-claims `au`→`aw` (#7), `ts`→`t͡s` (#8): I confirmed khb writes rimes as `au`/`ai` (`fai`, `nau`, `tsau`) and affricates plainly throughout, so these are convention-bundled, not isolated errors. Hold sustained.
- **#4 / #12 / #13 — water vowel length `nam`→`naːm`** — **△ accept the hold.** Live data: Central Thai `naːm` and Lao `naːm` (long), but every regional/minority variety is short — `soa nam`, `th_isan nam`, `th_n nam`, `th_s nam`, `khb nam`, `blt nam˦`. The short forms are uniform across all six minority/regional variants; this is a deliberate cross-variety transcription-depth difference, not a local slip. The reviewer's historical-length argument is linguistically valid and worth a **corpus-wide** normalization proposal, but it is not a defensible *local* error. Hold sustained as a system-level choice.
- **#11 `soa` love surface รัก vs ฮัก** — **△ accept the hold (flag for human).** Live data confirms the mix: `th_isan`/`th_n` = ฮัก (overt merger spelling), `th_s` = รัก/`rak`, `soa` = รัก/`hak` (the surface/IPA mismatch flagged). The IPA `hak` already encodes the *r>h merger; keeping etymological รאก spelling is a defensible orthographic convention (th_s does the same), and the reviewer themselves offered "or keep รัก but flag." Not an unambiguous error. Flagged for human orthography decision.

### New issues

None. During verification I found no new clear errors; the corpus conventions I spot-checked (ai/au glides, untoned khb, no Tai unrelease, regional short `nam`) are internally consistent.

### Scorecard

| Bucket | Count |
|---|---|
| Applied & verified in live data | 4 (#2, #3/#19, #17, #18) |
| Held — accepted as system/convention choice | #1, #5, #6, #7, #8, #9, #10, #14, #15, #16, #20 |
| Held — accepted, flagged for human (orthography/normalization) | #4, #11, #12, #13 |
| Rejected demands (not errors) | tone-value #10/#15, unrelease ̚ items |
| New issues | 0 |

### Known limitation (needs human linguist)

The blt/khb entries are systematically **untoned** and use broad `ai`/`au` rimes and short `nam`. Supplying per-lexeme tone (Tai Lü six-tone / Tai Dam tone box) and resolving the regional vowel-length depth are **corpus-wide** decisions requiring a SW-Tai tone-box source and a human linguist; they are not mechanically fixable on individual entries without introducing intra-language inconsistency. Documented here rather than held open indefinitely.

**File status: CLOSED** — nothing left to address. All 4 clear notation/segmental errors are fixed and verified in live data; every remaining item is either a verified corpus-wide convention I accept, a reviewer-acknowledged non-error, or a documented known-limitation for a future human-linguist normalization pass.
