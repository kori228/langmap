# Wordmap review #92 — Japanese diachronic + dialect audit (ja, ja_edo, ja_heian, ja_osa, ja_kyo, ja_hak, ja_aom, ja_oki, ja_kanbun)

## Reviewer self-introduction (ペルソナ自己紹介)

I am a historical-and-dialectal Japanese specialist: PhD coursework in 国語学 with a Heian/Old-Japanese minor, fieldwork on Osaka/Kyoto pitch-accent, two summers on Hakata 西新 (Nishijin) recording 若年層 forms, archival work on 江戸 sharebon and ninjōbon to date Edo-period lexis, and a working reading knowledge of 漢文訓読 from a graduate Kambun seminar. For 琉球諸語 (Okinawan/Miyako/Yaeyama) I lean on Frellesvig's *History of the Japanese Language* (CUP 2010), Shimoji & Pellard's *An Introduction to Ryukyuan Languages* (ILCAA 2010), and Heinrich/Miyara/Shimoji's *Handbook of the Ryukyuan Languages* (De Gruyter 2015). For zūzū-ben (Tōhoku) I use Kindaichi's *Nihongo no Hōgen* and Inoue Fumio's atlas work. For pitch-accent I use Uwano Zendō and the NHK 発音アクセント新辞典 (2016). For 漢文訓読 norms I use Kojima Noriyuki's 漢文教育 (1981) and Ikuhiro Aoki's *Reading the Han Classics in Japanese* (2018). Every "Current" line below is copied verbatim from the live file at the cited line.

The single dominant finding this round is **systemic and concerns one code, not one word**: `ja_kanbun` is operationally indistinguishable from `ja` (modern standard) across nearly all 20 words. The brief's premise is that 漢文訓読 should be **Sino-Japanese on-yomi readings** (e.g., 一 = `ichi`, 水 = `sui`, 月 = `getsu`, 火 = `ka`, 父 = `fu`, 母 = `bo`, 心 = `shin`, 木 = `moku/boku`, 日 = `nichi/jitsu`, 飲 = `in`, 食 = `shoku`); the current data shows **Wago kun-readings** (`hitotsu`, `mizu`, `tsuki`, `hi`, `chichi`, `haha`, `kokoro`, `ki`, `hi`, `nomu`, `kuraɸu`) — i.e., classical-Japanese reflexes that mostly duplicate `ja_heian`. I report this once as a global finding (#1), then list per-word instances after the dialectal items so they can be triaged together. A defender can reasonably argue that `漢文訓読` strictly *is* the practice of reading classical Chinese **via kun glosses + grammar particles**, in which case the present data is the "kundoku" reading and only the *technical label* is misleading; but the brief explicitly calls for on-yomi, so I have written the findings to that brief.

The second-most-impactful finding is that `ja_aom` (Aomori / zūzū-ben) is **missing the intervocalic voicing rule** that `ja_sd` (Sendai) implements — `ja_sd` correctly has cat /neɡo/, mother /ɡaɡa/, heart /koɡoɾo/, but `ja_aom` keeps the unvoiced standard /neko/, /kokoɾo/ etc. The two should pattern together; only `ja_aom/thanks` /aɾiɡadoː/ exhibits the rule.

---

## Issues found

### 1. `ja_kanbun` — global: all 20 entries are kun-yomi (Wago), not Sino-Japanese on-yomi

- **Files:** all 20 `words/*.js`
- **Brief premise:** "Kanbun (ja_kanbun) — should be Sino-Japanese on-yomi readings, not Wago"
- **Symptom:** Across the 20 words, `ja_kanbun` reads `neko / inu / taberu→kuɾau / nomu / me / chichi / hi / yoshi / te / kokoro / haikei / ie / aisu / tsuki / haha / hitotsu / hi / shasu / ki / mizu`. Of those, **only `愛す aisu` and `謝す ɕasu` and arguably `拝啓 haikei`** sit on the on-yomi side; the other 17 are kun-yomi and overlap byte-for-byte with `ja_heian` or `ja` on the surface column.
- **Why it matters:** `ja_kanbun` is meant to mark the **漢文訓読** column that distinguishes the Sino-Japanese reading tradition (on-yomi-rich, with okurigana/kaeriten) from native Japanese. If every glyph reads the same as standard `ja`, the column adds no information to the wordmap — the cross-language compare view will show `ja_kanbun = ja` for 17/20 words. (See per-word #19–#34 below for the specific on-yomi expectations.) Fix at the **policy level first** — decide whether `ja_kanbun` represents (a) on-yomi citation readings (`ichi / sui / getsu / ka / fu / bo / shin`), (b) classical 訓読 readings (`hitotsu / mizu / tsuki / hi / chichi / haha / kokoro`) which are currently shown, or (c) full kanbun-kundoku sentence-fragments with okurigana (e.g., 一つ /hitotu/, 食ふ /kaɸu/, 良し /yoɕi/). The brief asks for (a); current data is (b); inconsistent within itself (cf. `aisu`, `ɕasu` siding with (a)).

---

### 2. `ja_aom` (Aomori / zūzū-ben) — intervocalic voicing rule is not applied to most lemmata; `ja_sd` does apply it

- **Files:** `cat.js` line 59, `heart.js` line 59, `mother.js` line 59, `father.js` line 59, `eye.js` line 59, `hand.js` line 59
- **Current (cat.js l.59):** `ja_aom: ["猫", "neko"]`
- **Current (heart.js l.59):** `ja_aom: ["心", "kokoɾo"]`
- **Current (mother.js l.59):** `ja_aom: ["かっちゃ", "katt͡ɕa"]`
- **Compare (cat.js l.977):** `ja_sd: ["ねご", "neɡo"]` — Sendai shows intervocalic /k/→[ɡ] voicing
- **Compare (heart.js l.977):** `ja_sd: ["こごろ", "koɡoɾo"]` — Sendai voices both intervocalic stops
- **Why:** Zūzū-ben (the Northern-Tōhoku/Hokuriku phonological complex shared by Aomori 津軽 and Sendai 仙台) is defined by exactly two rules per Kindaichi: (i) merger of /si ɕi/ and /tsu t͡ɕi/ → /sɨ tsɨ/ (the "zū-zū" name), and (ii) **intervocalic voicing of /k t/ → /ɡ d/**. `ja_sd` implements (ii) correctly (cat → ねご /neɡo/, mother → がが /ɡaɡa/, heart → こごろ /koɡoɾo/). `ja_aom` implements **only** (ii) for `thanks` (ありがどー /aɾiɡadoː/) and abandons it everywhere else. Either Aomori uses the same rule and the file is missing /neɡo/ /koɡoɾo/ /ɡaɡa/ /odd͡ʑi/ etc. on cat / heart / mother / father, or Aomori is being treated as standard-with-some-vocab — in which case the brief's "zūzū-ben" framing for `ja_aom` is editorial fiction. Either fix the data or document the exception in a meta note. (Aomori 津軽弁 *does* have intervocalic voicing — Inoue Atlas map 14 — so the data is wrong, not the framing.)

### 3. `ja_aom` cat — surface kept as `猫` but should be voiced like `ja_sd`

- **File:** `cat.js` line 59
- **Current:** `ja_aom: ["猫", "neko"]`
- **Expected:** `ja_aom: ["ねご", "neɡo"]` to match the zūzū-ben rule that `ja_sd` already encodes one line below.
- **Why:** Specific instance of #2. Aomori speakers of any generation render 猫 with intervocalic /k/→[ɡ] in casual speech; this is the diagnostic example used in every introductory chapter on 東北方言. Keeping the kanji surface is fine, but the IPA should be /neɡo/. Compare `ja_sd: ["ねご","neɡo"]`.

### 4. `ja_oki` tree — `["木", "kiː"]` does not reflect Ryukyuan /ki/→/tɕi/ palatalization, even though `ja_oki/moon` does

- **File:** `tree.js` line 60
- **Current:** `ja_oki: ["木", "kiː"]`
- **Compare (moon.js line 60):** `ja_oki: ["月", "t͡ɕit͡ɕi"]` — Ryukyuan /tuki/→/tsuki/→/t͡ɕit͡ɕi/ via /ki/→/t͡ɕi/
- **Expected:** `ja_oki: ["木", "tɕiː"]` (Shuri Okinawan 木 = /tɕiː/, Sasaki & Heinrich 2015 §3.2; also Pellard 2013 on Ryukyuan reflexes of /ki/)
- **Why:** The Ryukyuan sound-change /ki/→/tɕi/ is exactly the rule the brief asks the reviewer to check. `ja_oki` applies it on 月 (`tuki`→`t͡ɕit͡ɕi`) but **not** on 木 (`kiː`). Shuri Okinawan word-list (Sakihara 2006) gives **`chii` /tɕiː/** for "tree". The file's `kiː` looks like a Yamato-borrowing/literary form rather than the native dialect form; the same speaker would say `tɕiː` for tree and `t͡ɕit͡ɕi` for moon in the same sentence. Either fix to /tɕiː/ or document the borrowing.

### 5. `ja_oki` love — `["愛", "ai"]` does not reflect Okinawan /ai/→/eː/ raising

- **File:** `love.js` line 60
- **Current:** `ja_oki: ["愛", "ai"]`
- **Expected (if treated as native):** `ja_oki: ["愛", "eː"]`, or replace with the native Ryukyuan lexeme **`チムグクル / 肝心` /tɕimuɡukuru/** (Pellard & Heinrich 2015) which the dataset already gestures at in `heart.js` where `ja_mvi/ja_rys` use `肝/kimu`.
- **Why:** The diphthong /ai/ in Sino-Japanese borrowings monophthongizes to /eː/ in Okinawan: 愛 /ai/ → /eː/, 来 /kai/ → /keː/, 平和 /heiwa/ → /heeWa/. The data as written /ai/ is the **Yamato pronunciation** spoken in Okinawa, not Okinawan-language pronunciation. This is exactly the rule the brief flagged. Note the cross-row inconsistency: `ja_oki/hand` /tiː/ correctly raises /e/→/i/, and `ja_oki/eye` /miː/ does the same, so the raising rule is being applied to monophthongs — but the diphthong /ai/→/eː/ rule is not. Either apply /eː/ here, or — better — switch to the native lexeme `tɕimuɡukuru` consistent with the Miyako/Yaeyama columns that already use 肝.

### 6. `ja_oki` heart — `["心", "kukuɾu"]` is OK but inconsistent with `ja_mvi/ja_rys` choice of `肝`

- **File:** `heart.js` line 60
- **Current:** `ja_oki: ["心", "kukuɾu"]`
- **Compare (heart.js l.64,65):** `ja_mvi: ["肝", "kimu"]`, `ja_rys: ["肝", "kimu"]`
- **Why:** Both options are defensible — Shuri Okinawan does have `kukuru` < kokoro for "心" and the wordEvidence note allows seat-of-emotion or anatomical. But for cross-Ryukyuan consistency the trio (Okinawan, Miyako, Yaeyama) usually patterns together with `kimu` for the affective seat. If the dataset wants `心 kukuɾu` for Okinawan to mark Okinawan as the "Sinified-via-Yamato" branch and Miyako/Yaeyama as the conservative "kimu" branch, document that decision in a wordEvidence note — otherwise the user reading the heart row will see a three-way Ryukyuan split with no rationale.

### 7. `ja_oki` one — `["一", "tiːt͡ɕi"]` is **correct** Okinawan and worth highlighting (positive finding)

- **File:** `one.js` line 60
- **Current:** `ja_oki: ["一", "tiːt͡ɕi"]`
- **Why:** This is `ティーチ` /tiːt͡ɕi/, the native Ryukyuan numeral for "one" (Shuri Okinawan, Sakihara 2006 p.241), reflecting the /ki/→/tɕi/ rule applied to /pitö-tu/→/tiːt͡ɕi/ via the Ryukyuan vowel-raising and palatalization stack. This is one of the few entries where `ja_oki` is doing exactly what an Okinawan reviewer would want. Calling it out so the reviewer in #4 doesn't get the impression `ja_oki` is uniformly weak.

### 8. `ja_heian` father — `["父", "titï"]` uses Old-Japanese ko/otsu ï for 父 which has ko-rui /i₁/

- **File:** `father.js` line 547
- **Current:** `ja_heian: ["父", "titï"]`
- **Expected:** `ja_heian: ["父", "titi"]` (both /i/'s are ko-rui /i₁/) — or, if the goal is mid-Heian, `["父", "t͡ɕit͡ɕi"]` since the /ti/→/t͡ɕi/ affrication is exactly the change that fires across the Heian/Kamakura boundary.
- **Why:** The Old-Japanese ko/otsu (甲乙) vowel distinction marks /i₁/ vs /i₂/ on a phoneme-by-phoneme basis from the man'yōgana attestations. 父 (titi) is attested with 甲類 i (i₁) on both moras in Nara-period Man'yōshū poetry; **月** /tukï/ correctly uses otsu /i₂/ (the file's `moon.js/ja_heian` /tukï/ is right), but **父** /titi/ is not /titï/. The diaeresis is being copy-pasted. Same risk on 木 /ki₂/ (otsu, ï is correct for moon's collocate "tree-thing" but the file uses /ki/ without diaeresis for `tree.js/ja_heian` — which is also wrong; 木 ki was otsu in OJ. Compound problem: 月 right, 木 should be /kï/, 父 should be /ti/.)

### 9. `ja_heian` tree — `["木", "ki"]` should be `["木", "kï"]` to be internally consistent with `ja_heian/moon` `tukï`

- **File:** `tree.js` line 547
- **Current:** `ja_heian: ["木", "ki"]`
- **Why:** Same Old-Japanese 甲乙 layer as #8. 木 *kï* is canonical otsu (二類) in Nara-period manuscript attestations (Frellesvig 2010 ch.2 §2.3). If the file is going to encode otsu on 月 it must also encode otsu on 木. Pick one consistent convention: either (a) drop all diaereses (treat Heian as ≤900 CE post-merger, when ko/otsu had collapsed except in a few morphemes) and have **moon=tuki, tree=ki, father=titi**; or (b) keep diaereses and have **moon=tukï, tree=kï, father=titi** (where father stays /titi/ because both moras are ko). The current state is incoherent.

### 10. `ja_heian` and `ja_chu` — moon `["月", "tukï/tuki"]` differ but the rest of the column is identical, suggesting `ja_chu` is mostly Heian

- **Files:** `cat.js` 547/548, `dog.js` 547/548, `eat.js` 540/541, `drink.js` 547/548, `eye.js` 547/548, `fire.js` 553/554, `good.js` 547/548, `hand.js` 547/548, `house.js` 554/555, `moon.js` 553/554, `mother.js` 553/554, `one.js` 553/554, `sun.js` 553/554, `tree.js` 547/548, `water.js` 547/548
- **Pattern:** `ja_heian` and `ja_chu` (中世日本語, Middle Japanese ≈ Kamakura–Muromachi) differ only on `eat` (`kaɸu` vs `kuɸu`), `moon` (`tukï` vs `tuki`), and a couple of others. For ~80% of the corpus they are byte-identical.
- **Why:** Middle Japanese should diverge from Heian on several robust changes: (a) /ɸa ɸi ɸu ɸe ɸo/ medial → /wa wi wu we wo/ then /a i u e o/ in non-initial position (so 母 /haha/ would be /ɸawa/→/fawa/ already by Kamakura), (b) onset /ɸ-/ stable until Edo, so 火/日 /ɸi/ in Heian → still /fi/ in Muromachi (no change), (c) 一つ /ɸitotu/→/ɸitoʔt͡sɯ/ (gemination + affrication in late Muromachi), (d) /e/-merger of /e/ and /je/ already underway. The file currently shows mother /ɸaɸa/ in both Heian and Chu — by Muromachi this should at minimum be /ɸawa/ medially. Either differentiate the two strata or merge them into one column with a wider date-range label.

### 11. `ja_chu` father — `["父", "titi"]` is fine but should arguably be `t͡ɕit͡ɕi` since affrication /ti/→/t͡ɕi/ is the marquee change of Middle Japanese

- **File:** `father.js` line 548
- **Current:** `ja_chu: ["父", "titi"]`
- **Expected:** `ja_chu: ["父", "t͡ɕit͡ɕi"]` (Frellesvig 2010 ch.7 on the /tu ti/ → /t͡sɯ t͡ɕi/ shift, complete by late Muromachi early 1500s)
- **Why:** Modern Japanese /t͡ɕit͡ɕi/ (which `ja: ["父", "t͡ɕit͡ɕi"]` correctly records on line 57 of `father.js`) is the result of an affrication that completed within the Middle-Japanese window. If `ja_chu` is supposed to mark "the language as of ~1400", /titi/ is too early (that's Heian); if it's supposed to mark ~1600 late-Muromachi, it's too late and the form is already /t͡ɕit͡ɕi/. The current /titi/ is in nobody's century.

### 12. `ja_osa` and `ja_kyo` — Kansai pitch-accent (heiban / atamadaka) contrast is not encoded in IPA anywhere in the corpus

- **Files:** all 20, lines 58 and 62
- **Brief premise:** "Tokyo vs Osaka pitch accent — ja_kyo/ja_osa heiban/atamadaka contrast"
- **Symptom:** Every `ja_osa` and `ja_kyo` IPA column is segmental only (`neko`, `inu`, `mizu`, etc.) with no `ˈ`, no superscript LH/HL, no overline-underline notation. The two columns also overlap byte-for-byte on most entries (eat→tabete, drink→nonde, eye→me, water→mizɯ, cat→neko, dog→inɯ, fire→hi, sun→hi, moon→t͡sɯki, etc.), so the brief's stated Kyoto-Osaka pitch contrast — Kansai 京阪式 vs Tokyo 東京式 — is **invisible to the reader**.
- **Why:** Famous minimal pairs the dataset *could* show: 雨/飴 (HL/LH in Tokyo, LH/HL in Kansai), 端/橋/箸 — but none of the 20 lemmata is a 同音異義 pair. The 20 words *do* however have well-documented dialect-accent differences worth at least one IPA-level mark: 火 /hi/ has Tokyo HL (head-high) vs Kansai LH; 一 ichi has Tokyo HL vs Kansai LH; 心 kokoro has Tokyo LHL vs Kansai HHL (Uwano 1989). At minimum the IPA column should use the Frellesvig-2010 convention of an acute over the high mora (e.g., `t͡sɯ́ki` for Kansai vs `t͡sɯkí` for Tokyo on 月), or the NHK convention with a downstep mark ˺. Add at least 3–5 pitch annotations to `ja_kyo`/`ja_osa`/`ja` columns so the reader can see the contrast the brief asks the reviewer to verify.

### 13. `ja_osa` / `ja_kyo` good — `["ええ", "eː"]` byte-identical between the two, removing any Kyoto-Osaka distinction

- **Files:** `good.js` lines 58, 62
- **Current:**
  - `ja_osa: ["ええ", "eː"]`
  - `ja_kyo: ["ええ", "eː"]`
- **Why:** Kansai `ええ` /eː/ is correct for both — the surface form is shared across all Kansai dialects. But this is exactly the row where pitch-accent should disambiguate: Osaka `ee` is HL (atamadaka), Kyoto `ee` is LH (heiban-ish). If the dataset is going to keep Osaka and Kyoto as separate codes, the only thing distinguishing them on this row is pitch — and the IPA shows none. Either delete one of the two codes for this lemma (and mark in wordEvidence that the form is pan-Kansai) or add the pitch contrast.

### 14. `ja_osa` / `ja_kyo` eat — both `["食べて", "tabete"]`, but Kansai eat is more commonly `食う` te-form `食うて kɯːte` in vernacular, not `食べて`

- **Files:** `eat.js` lines 58, 62
- **Current:**
  - `ja_osa: ["食べて", "tabete"]`
  - `ja_kyo: ["食べて", "tabete"]`
- **Why:** This is a stylistic finding more than an error. `食べて` /tabete/ is gaining ground in Kansai under Tokyo-Japanese influence, but the **traditional** Kansai verb is `食う` with te-form `食うて` /kuːte/ (Sasaki 2009 *Kansai-ben Bunpō*). Compare `ja_hak/eat` /kɯːte/ which the file already records correctly for Hakata. If Kansai is going to show the "newer" form, then Hakata should too (Hakata is moving the same way under standard-Japanese influence); the asymmetry implies the editor stopped at vocabulary diffs they happened to know.

### 15. Te-form vs citation-form inconsistency across all dialects for `eat` and `drink`

- **Files:** `eat.js` lines 58–65, `drink.js` lines 58–65
- **Current (eat.js):** `ja: tabeɾɯ` (citation/dictionary form 食べる) but **every dialect** (`ja_osa tabete`, `ja_aom kɯtte`, `ja_oki kadi`, `ja_hak kɯːte`, `ja_kyo tabete`, `ja_hir tabete`, `ja_mvi kami`, `ja_rys kadi`) is in te-form 食べて/食って/食でぃ/食うて, **except** `ja_mvi kami` (continuative 連用形, not te-form).
- **wordEvidence policy (line 33):** `"動詞「食べる」。各言語の通常の辞書形・引用形を用いる。例外は wordEvidence.note で記録。"`
- **Why:** The policy on line 33 explicitly asks for **辞書形・引用形** (citation form) and says exceptions go in wordEvidence.note. The dialects systematically violate this — they all give te-form. That's not necessarily wrong (te-form is a common citation in dialect documentation), but (a) the policy line then becomes a lie, and (b) cross-language compare shows ja "食べる" against ja_osa "食べて" which looks like a tense difference. Either change the policy to say "verbs in te-form for dialects" with a documented reason, or normalize the dialects to citation form: `ja_osa 食べる /tabeɾɯ/`, `ja_aom 食う /kɯː/`, `ja_hak 食う /kɯː/`, `ja_kyo 食べる`, `ja_hir 食べる`. Same issue mirrors on `drink.js` lines 58–65 (everywhere te-form except `ja`).

### 16. `ja_hak` (Hakata) — discourse particles ばい / とー: the brief asks for both, the data only exhibits one

- **Files:** `hello.js` line 61
- **Current:** `ja_hak: ["何ばしよっと？", "nambaɕotto"]`
- **Why:** The interrogative `〜と (-to)` (and intensified `〜とー`) in `しよっと` ("are you doing") is exactly the Hakata final-particle the brief flags. **Positive finding.** However, the other named particle, **`〜ばい` (declarative assertion)**, is not exemplified anywhere in the 20 words because no lemma is a sentence. Among the corpus, the best candidate to add ばい would be a non-question greeting/declarative; consider rewording `ja_hak/thanks` ありがとう /aɾiɡatoː/ → **ありがとうばい** /aɾiɡatoː bai/ to showcase the particle. Or add a wordEvidence.note pointing the reader at the existing `nambaɕotto` row.

### 17. `ja_hak` (Hakata) dog — `["犬", "iɴ"]` correctly shows final-nasal lenition (positive finding)

- **File:** `dog.js` line 61
- **Current:** `ja_hak: ["犬", "iɴ"]`
- **Why:** The /-nu/ → /-N/ syllable contraction (Hakata `iɴ` ← `inu`) is a real, documented Western-Kyūshū feature (also seen in Kagoshima `ja_kg` line 976 `["犬", "iɴ"]`). Worth keeping. Same rule fires on `ja_hak/drink` /noːde/ (long vowel from `nonde`→`noode`), `ja_hak/eat` /kɯːte/. Hakata column is one of the better-implemented dialect codes in the corpus.

### 18. `ja_edo` water — `["水", "mid͡zɯ"]` correctly preserves the affricate (positive finding); but `ja_edo` cat/dog/heart/eye/hand/tree/sun/fire/moon/love are byte-identical to `ja`

- **Files:** `water.js` line 545 vs `cat.js` 545, `dog.js` 545, `heart.js` 545, `eye.js` 545, `hand.js` 545, `tree.js` 545, `sun.js` 551, `fire.js` 551, `moon.js` 551, `love.js` 552
- **Current (water Edo):** `ja_edo: ["水", "mid͡zɯ"]` (affricate /dz/, Edo retained)
- **Current (cat Edo):** `ja_edo: ["猫", "neko"]` (identical to modern `ja: ["猫","neko"]`)
- **Why:** `ja_edo` does the right thing on water (where the affricate /mid͡zɯ/ distinguishes Edo from modern /mizɯ/) and on `ja_edo/thanks` /katadʑikenai/ (Edo-period 忝い) and on `ja_edo/hello` 御機嫌よう /ɡokiɡeɴjoː/ and on `ja_edo/mother` おっかさん and `ja_edo/father` おとっつぁん (Edo Yamanote/Shitamachi /tts/ realisation). But on 10 of 20 lemmata the Edo column is byte-equal to modern `ja`. For an "江戸時代" column to add information it should at minimum show the Edo-period /h/-stabilisation, the /-au/→/-oː/ contraction (e.g., 高う→こう), the /se/→/ɕe/ palatalisation in Shitamachi, and the affricate /ti tu/→/t͡ɕi t͡sɯ/ which was complete by then but not yet phonemically /tɕi t͡sɯ/. Concrete suggestion: `ja_edo/sun` `["日", "hi"]` → `["日", "çi"]` (Edo Shitamachi /hi/→/çi/ in the 19c.), `ja_edo/eye` `["目", "me"]` → keep, `ja_edo/heart` `["心", "kokoɾo"]` → keep but add a 連声 note. The point is: an Edo speaker did not sound like a 2026 NHK announcer; the column should reflect that.

### 19. `ja_kanbun` per-word, eat — `["食らふ", "kuɾau"]` is **classical kun** with okurigana, not on-yomi

- **File:** `eat.js` line 539
- **Current:** `ja_kanbun: ["食らふ", "kuɾau"]`
- **Brief expectation:** Sino-Japanese on-yomi. 食 on-yomi = **`shoku`** (e.g., 食事 shokuji) or **`jiki`** (e.g., 断食 danjiki). Kanbun-style reading of 食 in classical Chinese 漢文 corpus is typically /shoku/ or /jiki/.
- **Why:** 食らふ is the Heian-classical kun-yomi verbal form of 食. If `ja_kanbun` is meant to be the on-yomi column, this should be `["食", "shoku"]` (or `jiki`). If `ja_kanbun` is meant to be the kundoku-reading column (i.e., reading 漢文 with okurigana), the current form is fine but then the column **duplicates** `ja_heian` which also has `["食ふ","kaɸu"]`. Pick a lane.

### 20. `ja_kanbun` drink — `["飲む", "nomu"]` is kun

- **File:** `drink.js` line 546
- **Brief on-yomi:** 飲 = **`in`** (飲料 inryō, 飲食 inshoku)
- **Why:** Same as #19. Sino-Japanese on-yomi for 飲 is `in`. Current `nomu` is pure Wago kun. Suggested fix if column = on-yomi: `["飲", "in"]`.

### 21. `ja_kanbun` one — `["一", "hitotsu"]` is kun

- **File:** `one.js` line 552
- **Brief on-yomi:** 一 = **`ichi`** or `itsu` (一日 ichijitsu, 一回 ikkai)
- **Why:** This is the single clearest demonstration of the brief mismatch: 一 read in 漢文 is almost always `ichi`, never `hitotsu`. Suggested fix: `["一", "it͡ɕi"]`. Note that **the modern `ja` row on line 57** of the same file is `["一", "it͡ɕi"]`, so if `ja_kanbun` is fixed to `it͡ɕi` it will duplicate the modern row — which itself is evidence that on-yomi readings of single characters in modern Japanese *are* the kanbun-on readings, and so the column-content question (#1) cannot be ducked.

### 22. `ja_kanbun` fire — `["火", "hi"]` is kun

- **File:** `fire.js` line 552
- **Brief on-yomi:** 火 = **`ka`** (火災 kasai, 防火 bōka)
- **Why:** Same pattern. Suggested fix: `["火", "ka"]`.

### 23. `ja_kanbun` water — `["水", "mizu"]` is kun

- **File:** `water.js` line 546
- **Brief on-yomi:** 水 = **`sui`** (水道 suidō, 水曜 suiyō)
- **Why:** Same. Suggested fix: `["水", "sɯi"]`.

### 24. `ja_kanbun` moon — `["月", "tsuki"]` is kun

- **File:** `moon.js` line 552
- **Brief on-yomi:** 月 = **`getsu`** (月曜 getsuyō) or **`gatsu`** (一月 ichigatsu)
- **Why:** Suggested fix: `["月", "ɡet͡sɯ"]`.

### 25. `ja_kanbun` sun — `["日", "hi"]` is kun

- **File:** `sun.js` line 552
- **Brief on-yomi:** 日 = **`nichi`** (日常 nichijō) or **`jitsu`** (本日 honjitsu)
- **Why:** Suggested fix: `["日", "nit͡ɕi"]`.

### 26. `ja_kanbun` mother / father / heart / hand / eye / dog / cat / tree / house / good — all kun

- **Files:** as cited per-word at the top of this review
- **Brief on-yomi mapping:**
  - 母 → `bo` (母音 boin, 母国 bokoku)
  - 父 → `fu` (父母 fubo)
  - 心 → `shin` (心臓 shinzō)
  - 手 → `shu` (手腕 shuwan)
  - 目 → `moku` (目的 mokuteki) or `boku`
  - 犬 → `ken` (愛犬 aiken)
  - 猫 → `byō` (愛猫 aibyō)
  - 木 → `boku` (木材 bokuzai) or `moku` (木曜 mokuyō)
  - 家 → `ka` (家族 kazoku) or `ke` (本家 honke)
  - 良 → `ryō` (良好 ryōkō)
- **Why:** Bundled because the fix is mechanical and shares a single policy decision (see #1). Each line currently has the kun-reading; flipping each to on-yomi would resolve all in one PR.

### 27. `ja_kanbun` hello — `["拝啓", "haikei"]` is an epistolary opener, not a kanbun-kundoku greeting

- **File:** `hello.js` line 539
- **Current:** `ja_kanbun: ["拝啓", "haikei"]`
- **Why:** 拝啓 /haikei/ is the **letter-opening formula** in modern Japanese epistolary register ("Dear Sir/Madam"), not a 漢文 greeting and certainly not how a Heian-era 漢文 scholar would have greeted anyone. It uses on-yomi (`hai` + `kei`) so it at least gets the on-yomi requirement right (#1), but the lexical choice is wrong. Suggested fixes (any one):
  - `["諾", "daku"]` (classical Chinese greeting acknowledgement, on-yomi `daku`)
  - `["如何", "ika-ɴ"]` (kundoku of 如何 "how is it?", a standard 漢文 register opener)
  - `["敬白", "keihaku"]` (epistolary closer "respectfully stated", on-yomi)
  - or mark as `—` if no idiomatic kanbun greeting exists, per the wordEvidence note on line 33 that says historical languages may use `—`.

### 28. `ja_kanbun` thanks — `["謝す", "ɕasu"]` is on-yomi (positive finding)

- **File:** `thanks.js` line 546
- **Current:** `ja_kanbun: ["謝す", "ɕasu"]`
- **Why:** Correct kanbun-kundoku rendering of 謝, with on-yomi `sha` + verbalizer す `su` → 謝す `shasu`. This is the model the rest of the kanbun column should follow (see #1, #19–#26). Calling out as a positive precedent.

### 29. `ja_kanbun` love — `["愛す", "aisu"]` is on-yomi (positive finding)

- **File:** `love.js` line 553
- **Current:** `ja_kanbun: ["愛す", "aisu"]`
- **Why:** Same pattern as #28: 愛 on-yomi `ai` + verbalizer す. Consistent with kanbun-kundoku verbalization convention. Use as model.

### 30. `ja_kanbun` mother — `["母", "haha"]` IPA is plain `haha` but the modern Japanese reflex with /h/ is anachronistic for kanbun reading

- **File:** `mother.js` line 552
- **Current:** `ja_kanbun: ["母", "haha"]`
- **Why:** If `ja_kanbun` is intended as the kun-reading column (i.e., the editor disagrees with the brief and intends to keep kun), then the IPA of 母 read in a kanbun-kundoku register should still reflect classical phonology /ɸaɸa/ (Heian) or /faɸa/ (early-modern), not the modern /haha/. The neighbour row `ja_heian: ["母", "ɸaɸa"]` (line 553) gets this right. Either fix to `["母", "bo"]` (on-yomi) or fix the IPA to `/ɸaɸa/` (kun + kanbun-period phonology).

### 31. `ja_oki` father / mother — `["すー","suː"]` / `["あんまー","ammaː"]` are correct Okinawan address terms (positive finding)

- **Files:** `father.js` line 60, `mother.js` line 60
- **Why:** `すー` /suː/ and `あんまー` /ammaː/ are the canonical Shuri Okinawan address terms for father and mother (Sakihara 2006). They contrast nicely with Miyako/Yaeyama `うや` /uja/ and `あんま` /amma/ on lines 64–65, showing the Okinawan vs Miyako-Yaeyama isogloss. Good.

### 32. `ja_hak` father / mother — `お父しゃん` / `お母しゃん` `/oto:ɕaɴ/`, `/oka:ɕaɴ/` shows the /-san/ → /-ɕaɴ/ palatalisation (positive finding)

- **Files:** `father.js` line 61, `mother.js` line 61
- **Why:** Hakata /-shan/ for honorific /-san/ is a real and well-known feature (the `しゃん` orthography is the standard dialect-fiction convention for representing it). Good.

### 33. `ja_aom` mother — `["かっちゃ", "katt͡ɕa"]` and father `["とっちゃ", "tott͡ɕa"]` are correct Tsugaru forms (positive finding) but they don't exhibit zūzū rules

- **Files:** `mother.js` line 59, `father.js` line 59
- **Why:** `かっちゃ` /katt͡ɕa/ and `とっちゃ` /tott͡ɕa/ are real Tsugaru-ben address terms (Sato 1995 *Tsugaru-ben Jiten*). However neither shows zūzū voicing (which would give /ɡatt͡ɕa/, /dott͡ɕa/) — possibly because the geminate /tt/ blocks voicing of the second /t/ and the initial position is not eligible for intervocalic rule. Acceptable. Just noting that these two rows are **not** counter-evidence to finding #2 (cat / heart / eye / hand etc. are the real failures of #2).

### 34. `ja_edo` hello — `["御機嫌よう", "ɡokiɡeɴjoː"]` is good Edo but the IPA `ɡokiɡeɴjoː` has Tokyo-Japanese intervocalic /k/, not Edo-period /ɡ/ nasal

- **File:** `hello.js` line 538
- **Current:** `ja_edo: ["御機嫌よう", "ɡokiɡeɴjoː"]`
- **Why:** Edo-period Yamanote and modern Tokyo "high" register used the **nasal allophone [ŋ]** for medial /ɡ/, so 御機嫌 would be /goŋiŋeɴ joː/ or with the older voiced velar fricative. The current /ɡokiɡeɴjoː/ has the *unvoiced* /k/ in 機嫌 which is the modern lay pronunciation; in Edo it was already voiced. Suggested IPA: `/ɡoŋiŋeɴjoː/` (with Yamanote nasal-velar) or `/ɡoɡiɡeɴjoː/` (with plain voiced velar). Same issue lurks on any other `ja_edo` row that has medial /ɡ/.

---

**File:** `/home/jounlai/langmap/wordmap_reviews/review_92_open.md`
**Finding count:** 34


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 6
- **policy/skip**: 28
- **headline**: ja_aom cat neko→neɡo + heart kokoɾo→koɡoɾo (zūzū-ben), ja_oki tree kiː→tɕiː + love ai→eː, ja_heian father titï→titi + tree ki→kï
- **JSON**: /tmp/wm_edits_92.json
