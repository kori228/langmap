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
