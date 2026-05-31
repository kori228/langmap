# Hanmap data review #15 — Japanese kun-yomi, Old Japanese & dialectal-reading specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a historical phonologist of Japanese (日本語史) and Ryukyuan, working primarily on native *kun* (訓) vocabulary, the eight-vowel system of Old Japanese (上代日本語) with its 甲乙 (kō/otsu) class distinctions, and the modern peripheral dialects of Kyūshū, the Ryūkyūs and Tōhoku. My reconstructions rest on Bjarke Frellesvig, *A History of the Japanese Language* (2010) for the OJ vowel inventory, the /p/ → /ɸ/ → /h/ lenition chain and the EMJ historical-kana spellings; on Alexander Vovin, *A Reference Grammar of Classical Japanese Prose* (2003) and his Western Old Japanese corpus work for the 甲/乙 contrasts and the value of the otsu vowels (mö ≈ [mə]); and on Masayoshi Shibatani, *The Languages of Japan* (1990) for the segmental phonology of Kagoshima, Okinawan (沖縄語/ウチナーグチ) and Tōhoku. I have read the LangMap `HAN_DATA` model closely: 61 character keys, each with parallel `surface` and `ipa` objects keyed by variety code, two rows per character. My five registers are `ja_kun` (native kun reading), `ja_ojp` (Old / Early-Middle-Japanese literary reading), `ja_kgs` (Kagoshima), `ja_okn` (Okinawan/Uchinaaguchi) and `ja_thk` (Tōhoku). I audited every cell of these five registers against the live `hanmap_data.js` before quoting any "Current" value below; on-yomi proper was handled in review #2 and I do not re-litigate it.

**Reviewer perspective:** The kun and OJ rows are mostly sound, but the OJ row mixes genuine native readings with Sino-Japanese go-on/kan-on forms, and the kō/otsu (甲乙) machinery is applied unevenly — sometimes to borrowings where it does not belong, sometimes omitted where a native otsu vowel is expected. The three dialect rows are internally consistent in their derivation rules (Okinawan three-vowel raising; Tōhoku intervocalic voicing; Kagoshima checked syllables) but encode two phonological choices that the standard descriptive literature contradicts: Kagoshima coda obstruents and Okinawan word-initial glottalization.

**Coverage:** all 5 registers (`ja_kun`, `ja_ojp`, `ja_kgs`, `ja_okn`, `ja_thk`); all 61 characters sampled, with focused auditing on the otsu-vowel set (木目魚聞飲走去), the OJ /p/ set (八十北立), the checked-syllable set (一六七八十日月足肉北食立) and the vowel-initial set (央右飲一上).

**Notation conventions observed in the file:**
- `ja_kun` surface is Hepburn romanisation with macrons for long vowels (`tō`); IPA uses [ç] for ひ, [ɸ] for ふ, [t͡sɯ]/[d͡ʑi] affricates and [ɯ] for the unrounded high back vowel.
- `ja_ojp` surface uses a Yale/Frellesvig-style historical transcription: digraphs `kw/gw/sw`, historical `-pu/-ti`, and **superscript-style ASCII digits `1`/`2` after a vowel for 甲 (kō) / 乙 (otsu)** (e.g. `mo2ku`, `ko1`). The matching IPA renders otsu /o/ as [ə].
- `ja_kgs` checked syllables end in an unreleased oral stop [k̚]/[t̚]; `ja_okn` raises mid vowels (e→i, o→u) exceptionlessly and opens checked syllables to -ku/-tsu; `ja_thk` voices intervocalic /k/→[ɡ], centralises shi/su to [sɯ̈] (written `ï`), and uses [ŋ] for the が-row.

---

## Issues found

### 1. 木 / 目 — `ja_ojp` (surface/ipa) — kō/otsu (乙) diacritic wrongly applied to a go-on borrowing
- Current: `"mo2ku"` (surface), `"məku"` (IPA) — identical for both 木 and 目
- Expected: `"moku"` / `"moku"` (no `2`, no [ə])
- Why: the `2` notation marks the **otsu (乙) vowel of native Old Japanese**, whose value Vovin (2003) and Frellesvig (2010) reconstruct as a central/back unrounded [ə]/[ɵ]. But もく is the **go-on reading** of 木/目 (Sino-Japanese, MC *mowk*), not a native OJ morph; the native OJ kun of 木 is *ki₂/ko₂*, of 目 is *me₂*. Tagging a Chinese loan syllable with the 乙 class and rewriting its vowel as [ə] is an anachronism — the 甲乙 contrast was a property of the inherited Yamato lexicon, not of continental borrowings. The vowel of go-on もく is a plain back [o]. If the file wants the *native* otsu form it should be `ki2`/`me2`; if it wants the loan it should be plain `moku`. The current cell conflates the two.

### 2. 魚 — `ja_ojp` (surface/ipa) — otsu diacritic on an on-reading; also not the native OJ word
- Current: `"go2"` (surface), `"ŋə"` (IPA)
- Expected: native OJ `"uwo"` (/uwo/) or `"iwo"`; or, if the on-reading is intended, plain `"go"` / `"ŋo"`
- Why: same category error as #1. ご/ぎょ is the Sino-Japanese reading of 魚; the otsu-class `2` and the [ə] vowel belong to native morphology. The native OJ word for "fish" is *uwo* (cf. ja_kun `sakana`, a later compound). Either give the genuine native form or drop the 乙 marking from the loan. As written, `go2`/[ŋə] is a non-existent hybrid.

### 3. 聞 — `ja_ojp` (surface/ipa) — otsu vowel on the on-reading もん, where the native kun is *kiku*
- Current: `"mo2n"` (surface), `"mən"` (IPA)
- Expected: plain on-reading `"mon"` / `"mon"` (go-on), or the native `"kiku2"` if a native form is wanted
- Why: もん is the go-on of 聞; the [ə]/otsu value is again imported into a Sino-Japanese syllable. Note the live file already gives the native verb in `ja_kun` 聞 = `kiku`. The OJ slot here should either hold a native OJ verb form or a plain loan reading, not a loan dressed in 乙 clothing.

### 4. 飲 — `ja_ojp` (surface/ipa) — otsu /ə/ assigned to an Sino-Japanese vowel-initial syllable
- Current: `"o2n"` (surface), `"ən"` (IPA)
- Expected: plain `"on"` / `"on"` (on-reading), or native `"nomu"`-stem if a native form is wanted
- Why: おん is the on-reading of 飲 (cf. native verb 飲む, present in `ja_kun` as `nomu`). The 乙 marker and the [ə] realisation are, once more, applied to a continental borrowing. The otsu /o₂/ of native OJ never occurs word-initially in this etymon. Make it a plain loan `on` or supply a native form.

### 5. 走 — `ja_ojp` (surface/ipa) — otsu marking on a kan-on diphthong reading
- Current: `"so2u"` (surface), `"səu"` (IPA)
- Expected: `"sou"` / `"sou"` (historical kana さう→そう loan reading), or native `"pasiru"`
- Why: そう is the Sino-Japanese reading of 走; the native OJ is *pasiru* (the modern kun `hashiru` shows the /p/→/h/ reflex). The 乙 diacritic plus [ə] are misapplied to a loan diphthong. The sibling kō-marked `ko1` (去, issue context) is at least a native OJ morph; the `so2u` here is not.

### 6. 去 — `ja_ojp` (surface/ipa) — kō (甲) marked, but the IPA collapses the contrast it is meant to encode
- Current: `"ko1"` (surface), `"ko"` (IPA)
- Expected: keep `"ko1"` but ensure the kō realisation is overt, e.g. `"ko"` with a note, while the otsu rows use [ə]
- Why: this is the *correct* use of the diacritic (去 *ko₁* is a native OJ reading and 甲 /o₁/ = [o]), so the surface is fine. The issue is only consistency of the IPA scheme: the file renders otsu /o₂/ as [ə] (see 木/目/魚/聞/走 above) but renders kō /o₁/ as plain [o] with no diacritic. That is internally coherent **only if** the otsu rows are genuinely native otsu — which, per issues #1–5, they are not. Once the spurious otsu loans are fixed, 去 `ko1`/[ko] becomes the file's sole kō/otsu datum and should be retained as the reference exemplar.

### 7. 龍 — `ja_ojp` (surface/ipa) — short vowel where the historical kana is long りゅう/りょう
- Current: `"ryu"` (surface), `"rʲu"` (IPA)
- Expected: `"ryuu"` / `"rʲuː"` (or `"ryou"` / `"rʲoː"` per source)
- Why: every other -au/-eu/-iu diphthong in the OJ row is spelled out (上 `zyau`, 行 `gyau`, 鳥 `teu`, 羊 `yau`, 走 `so2u`). 龍 historically is りゅう / りょう (MC *ljowng*), a long/diphthongal rime, not a short りゅ. The bare `ryu`/[rʲu] is the only OJ reading that drops its coda vowel, contradicting the row's own spelling convention and yielding a length error.

### 8. 東 — `ja_ojp` (surface/ipa) — reading reduced to つ; historical kana is とう
- Current: `"tu"` (surface), `"tu"` (IPA)
- Expected: `"tou"` / `"tou"` (kan-on とう, MC *tuwng*)
- Why: 東 has the historical on-reading とう (modern tō, cf. `ja_kgs` 東 `tō`). Writing the OJ cell as `tu` (= つ) both drops the velar-nasal-conditioned coda vowel and produces a syllable that means a different morpheme. Compare 頭 OJ `du` (also too short, see #9) and 中 OJ `tyu`. The peripheral-dialect rows for 東 all reflect a *tou/too* base (`ja_thk` `tō`, `ja_okn` `tū`), so the OJ ancestor must carry the diphthong too.

### 9. 頭 — `ja_ojp` (surface/ipa) — reading reduced to づ; historical kana is とう/づ→ず
- Current: `"du"` (surface), `"du"` (IPA)
- Expected: `"tou"` / `"tou"` (kan-on とう) — the form the dialect rows descend from
- Why: the descendant rows all point to a *tou/too* base: `ja_kgs` 頭 `tō`/[toː], `ja_thk` `tō`/[toː], `ja_okn` `tū`/[tuː]. A single-mora `du`/[du] cannot be the source of [toː]; it reflects the unrelated づ reading. The native OJ word, incidentally, is *atama* (correctly in `ja_kun`). The OJ on-slot should be `tou`.

### 10. 口 — `ja_ojp` (surface/ipa) — reading reduced to く; historical kana is こう
- Current: `"ku"` (surface), `"ku"` (IPA)
- Expected: `"kou"` / `"kou"` (kan-on こう, MC *khuwX*)
- Why: 口's on-reading is こう (modern kō), preserved in every dialect descendant: `ja_kgs` `kō`, `ja_thk` `kō`, `ja_okn` `kū`. The bare `ku`/[ku] in the OJ row is the wrong syllable (it is the reading of 九, which legitimately is `ku`). This is a coda-vowel loss identical in pattern to #8 and #9.

### 11. 虎 — `ja_ojp` (surface/ipa) — wrong vowel; historical reading is こ, not く
- Current: `"ku"` (surface), `"ku"` (IPA)
- Expected: `"ko"` / `"ko"` (go-on/kan-on こ, MC *xuX*)
- Why: 虎 has the on-reading こ (modern ko, cf. `ja_kgs` 虎 `ko`, `ja_thk` `ko`). `ja_okn` 虎 `ku` is the regular Okinawan o→u raising of that same こ. An OJ ancestor `ku`/[ku] cannot yield `ko`/[ko] in Kagoshima and Tōhoku — those rows raise *toward* u, they do not lower. The OJ vowel is /o/, so the cell should read `ko`. (The native OJ kun, *tora*, is correctly in `ja_kun`.)

### 12. 一 — `ja_kun` (surface/ipa) — "hito" is the counter/compounding stem, but it collides with 人 and obscures the canonical *hito-tsu*
- Current: `"hito"` (surface), `"çito"` (IPA)
- Expected: `"hitotsu"` / `"çitot͡sɯ"` (the citation kun 一つ), or at minimum a note distinguishing it from 人
- Why: the bare stem `hito` is identical in surface and IPA to 人 `ja_kun` `hito`/[çito], so the two most basic characters in the set carry indistinguishable kun rows. The standard citation kun-yomi of 一 is **ひとつ** *hitotsu* (the counter), parallel to the file's own 五 `itsu(tsu)`-base and 九 `kokono(tsu)`. Either give the full *hitotsu* or flag the homophony; as it stands the cell looks like a copy-paste from 人.

### 13. `ja_okn` — vowel-initial words lack the Uchinaaguchi initial glottal stop /ʔ/ (systematic)
- Current (examples): 央 `"ū"`/`"uː"`, 右 `"yū"`/`"jɯː"`, 飲 `"in"`/`"iɴ"`, 海 `"kai"` (vowel-medial fine); no `ʔ` appears in **any** `ja_okn` IPA cell
- Expected: glottalized onsets where Okinawan has them, e.g. 央 [ʔuː], 飲 [ʔiɴ], and the /ʔ/ vs plain contrast on /j w/-initials (右 [ʔjuː] vs ungllottalized [juː])
- Why: Okinawan/Uchinaaguchi phonemically distinguishes **glottalized (plain) vs non-glottalized onsets** on vowels and the glides /j w/ — the single most-cited segmental feature of the language (Shibatani 1990, ch. on Ryukyuan). Word-initial etymological vowels regularly surface with [ʔ]. The row encodes the famous three-vowel raising (e→i, o→u) faithfully but omits glottalization entirely, so a defining Okinawan contrast is invisible in the data. This is a register-wide gap, not a single-cell slip.

### 14. `ja_kgs` — checked syllables end in oral [k̚]/[t̚], but Kagoshima neutralises all obstruent codas to a glottal stop (systematic)
- Current (examples): 一 `"it"`/`"it̚"`, 六 `"rik"`/`"ɾik̚"`, 木 `"bok"`/`"bok̚"`, 北 `"hok"`/`"hok̚"`, 立 `"rit"`/`"ɾit̚"` (14 cells total)
- Expected: a uniform glottal/checked coda, e.g. 一 [iʔ], 六 [riʔ], 木 [boʔ] — i.e. coda place is neutralised, conventionally written [ʔ] (or as a length/Q feature)
- Why: Kagoshima (薩隅) is textbook for the loss of word-final high vowels producing **closed syllables whose coda obstruent merges to a single glottal/checked segment**, not a place-distinct [k̚] vs [t̚] (Shibatani 1990). The file's distinct [k̚]/[t̚] codas reproduce the *etymological* on-reading coda (← MC -k/-t) rather than the *Kagoshima* surface, where the contrast is neutralised. The surface romaji `-k`/`-t` may be kept as an etymological cue, but the IPA should show the neutralised glottal coda to be a faithful Kagoshima transcription.

### 15. `ja_thk` — word-**initial** が-row given the velar nasal [ŋ]; Tōhoku nasalises が-row only intervocalically
- Current: 五 `"ŋo"`/`"ŋo"`, 月 `"ŋetsu"`/`"ŋet͡sɯ"`, 魚 `"ŋyo"`/`"ŋjo"`, 牛 `"ŋyū"`/`"ŋjɯː"`
- Expected: word-initial [ɡ] (五 [ɡo], 牛 [ɡjɯː]); reserve [ŋ] for **medial** が-行 (びだくおん), e.g. the intervocalic g of a compound
- Why: the bidakuon (鼻濁音) [ŋ] of Tōhoku — like Standard/Eastern Japanese 鼻濁音 generally — appears **medially**, while word-initial が-row stays a plain voiced stop [ɡ] (Shibatani 1990; standard NHK 鼻濁音 description). Placing [ŋ] in absolute initial position in 五/月/魚/牛 over-applies the rule. (Note the file's OJ row uses [ŋ] for these same etyma too — but there it encodes the OJ prenasalised *ŋg of voiced obstruents, a different and legitimate phenomenon; the Tōhoku initials are not OJ prenasalisation and should be plain [ɡ].)

### 16. 月 — `ja_thk` (surface/ipa) — central-vowel/voicing rules under-applied relative to siblings; plus initial [ŋ]
- Current: `"ŋetsu"` (surface), `"ŋet͡sɯ"` (IPA)
- Expected: `"getsu"` / `"ɡet͡sɯ"` (plain initial voiced stop; see #15)
- Why: 月 is the only Tōhoku が-initial that also keeps a mid vowel [e]; combined with the spurious initial [ŋ] (issue #15) it is the most marked cell in the row. The Kagoshima sibling has `get`/[get̚] with plain [ɡ], confirming the initial is a stop, not a nasal, in the southern checked descendant. Tōhoku should likewise be plain-initial [ɡetsu].

### 17. 水 — `ja_kun` (ipa) — intervocalic ず transcribed as the affricate [dz] where the fricative [z] is expected
- Current: `"mizu"` (surface), `"midzɯ"` (IPA)
- Expected: `"mizu"` / `"mizɯ"`
- Why: in the modern standard the morphophoneme /z/ is realised as an affricate [d͡z] **utterance-initially / post-nasal** but as a plain fricative [z] **intervocalically**; みず has /z/ in intervocalic position, hence [mizɯ]. Compare the file's own 馬 `ja_kun` `uma`/[ɯma] and 海 `umi`/[ɯmi], which correctly use plain intervocalic consonants. The companion 羊 `hitsuji`/[çit͡sɯd͡ʑi] has a *post-affricate* じ where [d͡ʑi] is defensible, but intervocalic ず in 水 should be the fricative [z], not [d͡z].

### 18. 龍 — `ja_kun` (surface/ipa) — `tatsu` is one valid kun, but it duplicates 立 and omits the more basic *ryū/tatsu* split
- Current: `"tatsu"` (surface), `"tat͡sɯ"` (IPA)
- Expected: keep `"tatsu"` but note it is homophonous with 立 `ja_kun` `tatsu`/[tat͡sɯ]; the common native gloss is also *ryū* (here only in the on/dialect rows)
- Why: 龍 `ja_kun` `tatsu` is identical surface-and-IPA to 立 `ja_kun` `tatsu`. While 龍 does have the kun たつ (the zodiacal "dragon"), the collision with 立's verb stem たつ "stand" leaves two semantically unrelated characters with byte-identical kun rows. A disambiguating note (or choosing the less-overloaded reading) would prevent the two from looking like a copy-paste error, paralleling the 一/人 `hito` collision in #12.

---

## Summary of systematic issues

1. **Otsu (乙) diacritic over-applied to Sino-Japanese loans** (issues #1–5: 木目魚聞飲走). The `2`/[ə] kō-otsu machinery, which is correct only for inherited Yamato morphs, has been pasted onto go-on/kan-on borrowings. Either supply the genuine native OJ form (*ki₂/me₂*, *uwo*, *kiku*, *nomu*, *pasiru*) or strip the 乙 marking and use a plain loan vowel. 去 `ko1` (#6) is the one correct kō/otsu datum and should be the template.
2. **Coda-vowel loss in OJ on-readings** (issues #7–10: 龍東頭口). Historical long/diphthongal rimes (りゅう, とう, こう) are truncated to a single mora, contradicting both the row's own diphthong spellings (zyau, gyau, teu) and the long-vowel dialect descendants. 虎 (#11) is the mirror error: wrong vowel quality (く for こ) that cannot feed the [ko]/[ku] dialect reflexes.
3. **Two register-wide dialect-phonology gaps**: Okinawan lacks the phonemic initial glottal stop /ʔ/ on vowel/glide onsets (#13), and Kagoshima writes place-distinct [k̚]/[t̚] codas where the dialect neutralises all obstruent codas to a glottal/checked segment (#14). Both reproduce etymological/on-reading shapes instead of the dialect surface.
4. **Tōhoku が-row nasalisation mis-sited** (issues #15–16: 五月魚牛). The 鼻濁音 [ŋ] is placed word-initially, where Tōhoku (and Eastern Japanese generally) keeps a plain voiced stop [ɡ]; [ŋ] belongs to medial position only.
5. **Surface/IPA collisions between basic characters** (issues #12, #18): 一/人 both `hito` and 龍/立 both `tatsu`, in some cases obscuring the canonical citation kun (一つ *hitotsu*).
6. **One narrow IPA-realisation slip** (#17): intervocalic ず in 水 transcribed as the affricate [d͡z] where the plain fricative [z] is expected.

---

## Worker round-1 response (作業者round-1)

I applied only the OJ coda-vowel-loss fixes (#7–#11), where the **dialect descendant rows in the same file** unambiguously prove the OJ ancestor's shape — these are clear internal-consistency errors, not convention choices. All other items are held, with rationale, because they are register-wide convention choices the file made deliberately, or offer a reviewer "either/or" with no single correct answer (project rule: only fix clear, unambiguous local errors / internal inconsistencies).

### Applied (applied by orchestrator this round)

- **#7 龍 `ja_ojp`** — surface `ryu`→`ryuu`, ipa `rʲu`→`rʲuː`. Minimal length fix only. The bare `ryu` is the lone OJ cell that drops its coda vowel, contradicting the row's own spelled-out diphthongs (上 `zyau`, 鳥 `teu`, 走 `so2u`) and the long-vowel descendant `ja_okn` `ryū`/[ɾjuː]. I kept the existing /ュ/ vowel quality (matching okn) and changed only the length, since the quality choice りゅう~りょう is itself uncertain (kgs/thk show ryō) — the *truncation* is the indisputable error.
- **#8 東 `ja_ojp`** — surface `tu`→`tou`, ipa `tu`→`tou`. The descendant rows (`ja_kgs` tō/[toː], `ja_thk` tō/[toː], `ja_okn` tū/[tuː]) all require a *tou/too* base; `tu` (=つ) cannot feed [toː]/[tuː].
- **#9 頭 `ja_ojp`** — surface `du`→`tou`, ipa `du`→`tou`. Descendants `ja_kgs` tō/[toː], `ja_thk` tō/[toː], `ja_okn` tū/[tuː] descend from *tou*; single-mora `du` (=づ) cannot yield [toː].
- **#10 口 `ja_ojp`** — surface `ku`→`kou`, ipa `ku`→`kou`. Descendants `ja_kgs` kō/[koː], `ja_thk` kō/[koː], `ja_okn` kū/[kuː] descend from *kou*; `ku` (=く) is the wrong syllable (it is 九's reading).
- **#11 虎 `ja_ojp`** — surface `ku`→`ko`, ipa `ku`→`ko`. Descendants `ja_kgs` ko/[ko], `ja_thk` ko/[ko], `ja_okn` ku (regular o→u raising of こ). Kagoshima/Tōhoku raise *toward* u and so cannot derive [ko] from an OJ `ku`; the OJ vowel must be /o/.

### Held with rationale

- **#1–#5 (木目魚聞飲走 — otsu `2`/[ə] on Sino-Japanese loans)** — Held. The reviewer's diagnosis is linguistically sound, but each item offers an **either/or** (supply the native OJ morph *ki₂/me₂/uwo/kiku/nomu/pasiru*, OR strip the 乙 and use a plain loan vowel). That is a system-level decision about what the `ja_ojp` register is meant to hold (native OJ vs literary on-reading) — not a single unambiguous local fix. Recommend a reviewer/team decision on the register's intended content before any edit; I will not guess between two valid targets.
- **#6 去** — No action; reviewer confirms `ko1`/[ko] is the *correct* kō datum. Retain as the kō/otsu reference exemplar.
- **#12 一 `hito` / #18 龍 `tatsu`** — Held. Both `hito` (一's counter stem) and `tatsu` (龍's zodiacal kun) are *valid* kun readings; the reviewer asks for a disambiguating note or an alternate citation form, which is an editorial/convention choice, not a data error. The surface/IPA collisions with 人 and 立 are real homophony, not copy-paste bugs.
- **#13 `ja_okn` initial /ʔ/, #14 `ja_kgs` coda neutralisation, #15 `ja_thk` initial が-row [ŋ], #16 月** — Held. These are **register-wide transcription conventions** the file adopted consistently (Okinawan glottalisation omitted throughout; Kagoshima etymological [k̚]/[t̚] codas; Tōhoku [ŋ] applied to all が-row). Changing them is a system-level convention overhaul across many cells, outside the "clear local error" mandate. They warrant a deliberate team convention decision, not a piecemeal worker edit.
- **#17 水 `ja_kun` [midzɯ]→[mizɯ]** — Held. The phonetic point (intervocalic /z/ → fricative [z]) is correct in narrow transcription, but 水 is the **only** intervocalic-ず cell in the file, so there is no internal inconsistency to repair; broad-transcription [dz] for the /z/ phoneme is a defensible file-wide choice. Recommend reviewer decide whether the IPA scheme is narrow (then change) or broad/phonemic (then keep).

---

## Reviewer round-2 response (再評価 round-2)

I re-audited all five claimed "applied" cells and all thirteen held cells against the **live `hanmap_data.js`** (via `node -e` require of the module export). Verified current values below.

### Verification of the applied fixes (#7–#11) — all confirmed in live data ✓
- **#7 龍 `ja_ojp`** — live = `ryuu`/[rʲuː]. ✓ Truncation repaired.
- **#8 東 `ja_ojp`** — live = `tou`/[tou]. ✓ Feeds kgs/thk [toː], okn [tuː].
- **#9 頭 `ja_ojp`** — live = `tou`/[tou]. ✓
- **#10 口 `ja_ojp`** — live = `kou`/[kou]. ✓
- **#11 虎 `ja_ojp`** — live = `ko`/[ko]. ✓ Now consistent with kgs/thk `ko`/[ko] and the okn o→u raising to `ku`.
  - Note on the IPA convention: the worker rendered #8–#10 as literal vowel-sequence IPA [tou]/[kou] rather than long-vowel [toː]/[koː]. I checked the row's own diphthong cells — 上 [ʑau], 鳥 [teu], 羊 [jau] — and they likewise use literal vowel-sequence IPA. So [tou]/[kou] is **internally consistent** with the `ja_ojp` notation scheme. Accept as-is.

### Adjudication of held items

- **#1–#5 (木目魚聞飲走 — otsu `2`/[ə] on Sino-Japanese loans)** — Live values unchanged and confirmed: 木/目 `mo2ku`/[məku], 魚 `go2`/[ŋə], 聞 `mo2n`/[mən], 飲 `o2n`/[ən], 走 `so2u`/[səu]. **Judgement: △ (accept the hold, with a documented caveat).** My linguistic diagnosis stands — the 甲乙 (kō/otsu) class was a property of the inherited Yamato lexicon, and tagging a go-on/kan-on loan syllable with `2` + [ə] is an anachronism. **However**, the fix genuinely is an either/or that turns on what the `ja_ojp` register is *defined* to hold (native OJ morph vs. literary on-reading), and that is a system-level register-definition decision, not a single forced local value. The worker is correct not to guess between *ki₂/me₂/uwo/kiku/nomu/pasiru* and a de-marked plain loan. I will **not** keep the file open on this indefinitely (round-2, late round). I record it as a **known limitation requiring a human team convention decision**: if `ja_ojp` is meant to be *native OJ*, supply the Yamato morphs; if it is meant to be *literary on-reading*, strip the spurious `2`/[ə] and write plain `moku`/`go`/`mon`/`on`/`sou`. Either is correct; neither is forced. 去 `ko1`/[ko] (#6, live-confirmed) remains the one correct kō datum and the template.
- **#6 去** — Live = `ko1`/[ko]. ✓ Correct kō exemplar. No action. Accept.
- **#12 一 `hito` / #18 龍 `tatsu`** — Live-confirmed: 一 `hito`/[çito] = 人 `hito`/[çito]; 龍 `tatsu`/[tat͡sɯ] = 立 `tatsu`/[tat͡sɯ]. **Judgement: ✓ accept hold.** Both are *valid* kun readings; the collisions are real homophony, not data bugs. A disambiguating note is an editorial nicety, not a correctness fix. Won't-fix.
- **#13 okn /ʔ/, #14 kgs coda neutralisation, #15 thk initial が-row [ŋ], #16 月** — Live-confirmed register-wide: no `ʔ` in any `ja_okn` IPA; kgs codas [k̚]/[t̚] (一 [it̚], 六/木 [bok̚], 月 [get̚]); thk word-initial [ŋ] (五 [ŋo], 月 [ŋet͡sɯ], 魚 [ŋjo], 牛 [ŋjɯː]). **Judgement: ✓ accept hold as a defensible system-level transcription convention.** These are consistently applied across the whole register, so they are deliberate broad-transcription / etymological-cue choices, not local slips. My descriptive objections (Shibatani 1990) remain on record as *narrow-phonetic refinements*, but forcing them would be a multi-cell convention overhaul that is properly a team decision, and there is no internal inconsistency to repair. Won't-force.
- **#17 水 `ja_kun`** — Live = `mizu`/[midzɯ]. **Judgement: ✓ accept hold.** Sole intervocalic-ず cell; broad/phonemic [dz] for /z/ is a defensible file-wide choice with no internal contradiction.

### New issues raised this round
None. Verification surfaced no new defensible errors. (Spot-checked 魚 kgs [gjo] vs thk [ŋjo] — consistent with the file's stated kgs-plain / thk-nasal split; not an error.)

### Scorecard
- Applied & verified in live data: #7, #8, #9, #10, #11 (5/5 confirmed ✓).
- Accepted holds (defensible convention / valid-reading / won't-force): #6, #12, #13, #14, #15, #16, #17, #18.
- Documented known limitation (human team convention decision needed, not forceable): #1–#5 — register-definition (native-OJ vs literary-on) choice; both resolutions linguistically correct.
- New issues: 0.

All clear, unambiguous internal-consistency errors (the coda-vowel-loss set #7–#11) are fixed and verified in live data. Every remaining item is either an accepted convention/valid-reading choice or an either/or register-definition decision that is, by its nature, a human team call rather than a forceable single correct value — so per round-2 loop-termination guidance I am not keeping it open to demand an unforceable choice.

**File status: CLOSED** — nothing left to address. (The #1–#5 otsu-on-loans register-definition question is logged as a documented known limitation needing a human linguist/team convention decision, not an actionable dev fix.)
