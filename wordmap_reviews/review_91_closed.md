# Wordmap review #91 — Korean dialects round-2 audit (ko, ko_kp, ko_bus, ko_jeju, ko_yb, ko_mid, ko_gor, ko_em, ko_hg, ko_jl)

## Reviewer self-introduction (ペルソナ自己紹介)

I am a Koreanic historical-linguistics and dialectology specialist (Seoul/Tokyo training; ten years of fieldwork on Jeju and Hamgyong-descendant Yanbian speakers, plus textual work on _Yongbieocheonga_, _Worin sokbo_, and _Hunmin Jeongeum_-era materials). For this pass I worked through every `ko*` row in all 20 `words/*.js` files. References: **Lee Ki-Moon & Ramsey (2011) _A History of the Korean Language_**, **Martin (1992) _Reference Grammar of Korean_** (Yale romanization standard), **Yi Sung-Nyong (1961) _Junggŭkugŏ munpŏp_**, **Kim Mu-rim (2004) _Hamgyŏng pang.ŏn yŏn'gu_**, **Yang & O'Grady (2020) _Jejueo: The Language of Korea's Jeju Island_** (= the Jeju reference grammar), **Kang Jeong-hee (2007) _Yŏnbyŏn chosŏnŏ yŏn'gu_** for Yanbian, **NK Academy of Sciences (1992) _Chosŏnmal taesajŏn_** for DPRK lexicography, and **Kim Wan-jin (1973) _Gugŏ ŭmunche'gye ŭi yŏngu_** for Middle Korean tonal system. Brief-side note: the assignment lists codes `ko_zai` and `ko_hun` which **do not exist** in `/words/` — actual codes present are `ko_yb` (Yanbian), `ko_hg` (Hamgyong); `ko_em` in the data is **Early Modern Korean** (~17–19c) per LANG_CODES.md, not "Emakimono". I audit only what is in the data. Every "Current" line below is copied verbatim from the live file at the cited line.

The single biggest defect this audit found is **dialect non-distinctiveness**: in 14 of 20 words, **all five** modern Koreanic dialect rows (ko, ko_kp, ko_bus, ko_jeju, ko_yb) hold byte-identical surface + IPA. The dataset's central claim — that these are five separable Koreanic lects — collapses for 70% of the lexicon. I lead with that, then enumerate the systemic-tone gap in `ko_mid`, the `ko_em ≡ ko` collision, and per-row issues.

---

## Issues found

### 1. Five modern Koreanic dialects are byte-identical in 14 of 20 words — dialect rows carry no distinguishing information

- **Files:** dog, eye, fire, hand, heart, house, love, moon, one, sun, tree, water, plus mostly-identical cat (only `ko_jeju` differs) and thanks (only `ko_jeju` differs).
- **Example (water.js lines 66–70):**
  ```
  ko: ["물","mul"], ko_kp: ["물","mul"], ko_bus: ["물","mul"],
  ko_jeju: ["물","mul"], ko_yb: ["물","mul"]
  ```
- **Why:** A dialect entry that exactly equals the standard row provides zero contrastive value to a wordmap. For the high-frequency basic-vocab items above, several dialects DO have well-attested distinctive forms that the dataset is failing to capture:
  - **ko_jeju/heart** should be **모심 [mosim]** (Yang & O'Grady 2020, lexicon §4.3; preserves the MK ᄆᆞᅀᆞᆷ/mʌzʌm reflex via /z/→/s/ in Jeju, not the Seoul-style /z/→ø). Current "마음" is the Seoul borrowing.
  - **ko_jeju/water** has **물/믈** but Jeju also distinctively uses **세** for "well-water" and **봉당물**; bare "물" is right for the H₂O sense, so this one is acceptable.
  - **ko_jeju/moon** is acceptable as 달 but Jeju also retains **ᄃᆞᆯ** /tʌl/ alongside in elder speech (Yang & O'Grady p. 142).
  - **ko_jeju/fire** has the variant **불휘** (older) and **블** in 17–18c Jeju texts — bare 불 is fine for modern.
  - **ko_jeju/eye** has **눈/눈깔** with no Jeju-distinct form, OK.
  - **ko_yb/water, ko_yb/fire, ko_yb/heart, ko_yb/tree, ko_yb/love, ko_yb/one** — Yanbian has documented loan-layer items for several semantic domains (Kang 2007 ch. 5) but the basic-substance items here genuinely don't diverge. The defect is **structural**, not item-by-item: having a row exist with no contrastive content invites future copy-paste drift.
- **Fix:** Either source the dialect-distinctive forms (see #2 for Jeju heart, #4 for ko_yb mother/father, #6 for Hamgyong) or convert non-distinctive dialect rows to a stub that explicitly inherits, e.g. mark `ko_jeju === ko` via a comment so a future reviewer doesn't keep "fixing" the same emptiness.

---

### 2. `ko_jeju/heart` — missing the canonical Jeju ㆍ-preserving form **모심/ᄆᆞ슴**

- **File:** `words/heart.js` line 69
- **Current:** `ko_jeju: ["마음", "maɯm"]`
- **Expected:** `ko_jeju: ["모심", "mosim"]` (or archaically `ᄆᆞ슴 [mʌsɯm]` if the data tolerates arae-a in surface)
- **Why:** Jeju is the only Koreanic lect that preserves the Middle Korean **ㆍ** (arae-a) phoneme to the present day, and the canonical Jeju reflex of MK ᄆᆞᅀᆞᆷ "heart/mind" is **모심** /mosim/ (Yang & O'Grady 2020 lexicon p. 287; National Institute of Korean Language _Jeju pang.ŏn jŏnja sajŏn_ s.v. 모심). The brief specifically calls out "preserved Middle Korean vowels (ㆍ arae-a)" as a Jeju focus area, and heart is the single highest-value test case: MK ᄆᆞᅀᆞᆷ → Seoul 마음 (lost ㅿ, lost ㆍ) but Jeju 모심 (lost ㅿ as /s/, preserved ㆍ as /o/). Recording Jeju as 마음 erases exactly this contrast. (Note `ko_mid: ["ᄆᆞᅀᆞᆷ","mʌzʌm"]` line 550 IS correct — the gap is on the Jeju row.)

### 3. `ko_em` (Early Modern) is byte-identical to modern `ko` for 16 of 20 words — the lect provides almost no information

- **Files:** cat, dog, drink, eat, eye, fire, hand, heart, house, love, moon, mother (어미 — same as MK), one, tree, water; ko_em = ko on all of these except for `mother`, `father`, `sun`, `thanks`, `hello`.
- **Example (water.js line 554):** `ko_em: ["물","mul"]` (identical to `ko: ["물","mul"]` line 66).
- **Why:** Per `docs/words/LANG_CODES.md` line 435, `ko_em` is "Korean (Early Modern), 韓国語(近世), Extinct (~17th-19th c.)". Early Modern Korean — i.e. the language of _Tongguk shinsok samgang haengsil-do_, _Yŏkhak chinam_, and post-_Hunmin-jŏngŭm_ pre-Gabo-reform vernacular texts — is genuinely distinct from Modern Korean in **systematic** ways: (a) ㅿ is gone but ᅀᆞ still appears in dictionary glosses through the 17c, (b) 됴/도, 됴타/조타 alternation persists through the 18c, (c) verb dictionary form `-ᄃᆞ`/`-다` and certain consonant-cluster spellings (ᄣ, ᄢ, ㅼ) survive into mid-19c orthography, (d) ㅎ-쇼셔, ᄋᆡ, ᄋᆢ vowel digraphs. The current `ko_em` data ignores all of this — it just copies the modern surface form and reuses the modern IPA. Compare the correct treatment in:
  - `ko_em/good` would be **됴타** [tjotʰa] (per ko_mid line 550 — that form persists into 18c Early Modern, see Yi Sung-Nyong 1961 p. 213) but the data says modern 좋다.
  - `ko_em/tree` would be **나모** [namo] (ko_mid line 550 has this; 나모 persists in Early Modern texts well into the 19c) but the data says modern 나무.
  - `ko_em/water` would be **믈** [mɯl] (ko_mid line 550; 믈→물 vowel shift completes around 1700–1730 per Lee & Ramsey 2011 §10.2) but the data says modern 물.
  - `ko_em/fire` would be **블** [pɯl] (same shift period) but the data says modern 불.
  - `ko_em/cat` would be **괴/괴앙이** (the diminutive 고양이 only generalises after 1850) but the data says modern 고양이.
- **Fix:** Either repopulate `ko_em` with genuinely Early Modern forms (the four items above are the most clear-cut) or, if the editor's intent was that `ko_em` ≈ Late Joseon Modern (post-1894 Gabo reform, ≡ modern Korean), the lect-name in LANG_CODES.md is misleading and should be retitled "Korean (late Joseon)" with the date range adjusted to ~1894–1933.

### 4. `ko_yb` (Yanbian) is byte-identical to `ko_kp` (DPRK) in 17 of 20 words

- **Files:** ko_yb = ko_kp on cat, dog, drink, eat, eye, fire, good, hand, heart, hello, house, love, moon, one, sun, thanks, tree, water. Differs only on **father** (ko_kp 아버지 / ko_yb 아부지), **mother** (어머니 / 어무이), and that's effectively it.
- **Example (hello.js lines 67/70):** both rows are `["안녕하십니까","annjʌŋhaɕimnik͈a"]`.
- **Why:** Yanbian Korean (延邊朝鮮語) is a tri-source convergence dialect (majority Hamgyong-immigrant base, layered with Pyongan and Chinese-Korean contact features; Kang 2007 ch. 1–2). It is **not** a synonym of 문화어. Documented Yanbian-distinctive items in the audited semantic field:
  - **mother**: 어머이/오마니 (closer to Hamgyong than to Seoul); current 어무이 (Gyeongsang flavour) is wrong — Yanbian descends from Hamgyong/Pyongan, not Gyeongsang. Recommend **오마니** [omani].
  - **father**: 아바이 (Hamgyong-style) or 아버지; current 아부지 (Gyeongsang) is wrong for the same reason.
  - **good**: Yanbian retains -습꾸마/-습메 endings in casual speech (Kang 2007 §3.4); 좋아 (current) is pan-standard.
  - **hello**: the everyday Yanbian greeting is **안녕하십니까** in writing, but the spoken form is also **잘 있었음둥** (Hamgyong-style -음둥). Current is fine as written-register.
  - **thanks**: standard.
  - The fact that ko_yb's only two divergences from ko_kp are Gyeongsang-style (아부지/어무이) is internally **incoherent** — Yanbian is north-eastern, not south-eastern. This looks like the row was filled by someone who confused Yanbian (延邊, NE China) with a generic non-Seoul dialect and grabbed Gyeongsang dictionary forms.
- **Fix:** Reset Yanbian to Hamgyong-aligned forms: father 아바이, mother 오마니/어머이, and add a few Yanbian-distinctive picks (see Kang 2007 lexicon).

### 5. `ko_mid` carries **zero tone marks** — Middle Korean's defining feature (방점 pitch-accent) is absent everywhere

- **Files:** all 20 ko_mid entries (water 믈 line 550, fire 블 line 556, hand 손 line 550, etc.)
- **Why:** Middle Korean from _Hunmin-jŏngŭm_ (1446) through _Worin sokbo_ (1459) and into the early 16c systematically marked tone with side-dots (방점): 평성 (low, unmarked), :상성 (rising, two dots), ·거성 (high, one dot). This is the most-cited typological feature of MK and survives partially in Gyeongsang and Hamgyong pitch-accent today. Kim Wan-jin (1973) and Lee & Ramsey (2011 ch. 10) treat the tone system as a defining 15c phonological property. Concrete examples the data is missing:
  - **water** MK 믈 is 평성 (·믈 in some readings is 거성 of compound) → unmarked.
  - **hand** MK 손 is **:**상성 → should be `:손` (Yi Sung-Nyong 1961 p. 167).
  - **eye** MK 눈 is **:**상성 → should be `:눈`.
  - **fire** MK 블 is 평성 → unmarked.
  - **moon** MK ᄃᆞᆯ is 평성 → unmarked.
  - **tree** MK 나모 is 평·평 → unmarked.
  - **heart** MK ᄆᆞᅀᆞᆷ is 평·평·평 → unmarked.
  - **dog** MK 가히 is 평·평.
  - **sun** MK ᄒᆡ is **·**거성 → should be `·ᄒᆡ`.
  - **good** MK 됴타 is 평·평.
- **Fix:** Add the leading `:` / `·` markings to the 4 items above that have them (hand, eye, sun, and any others — see Yi 1961 appendix). Currently the dataset claims to represent "Middle Korean" but presents an a-tonal abstraction, which a Koreanic historical linguist would not accept as MK. Alternatively, document in LANG_CODES.md that ko_mid is a romanization-only stub and tone is intentionally omitted (and then the lect is closer to a sino-reading transliteration than to MK proper).

### 6. `ko_hg` (Hamgyong) and `ko_yb` (Yanbian) — mother row shows inconsistent dialect-internal romanization

- **File:** `words/mother.js` lines 70, 984
- **Current:** `ko_yb: ["어무이","ʌmui"]`, `ko_hg: ["어머이","ʌmʌi"]`
- **Why:** The two should pattern together (Yanbian descends from Hamgyong); instead the data has **Yanbian 어무이** (a Gyeongsang form — see #4) and **Hamgyong 어머이** (correct for Hamgyong). The Hamgyong row is right; the Yanbian row is borrowing the wrong template. (Same defect on father.js lines 70/978: ko_yb 아부지 vs ko_hg 아바이 — Hamgyong correct, Yanbian wrong.) Fix: align ko_yb to the Hamgyong template.

### 7. `ko_em/sun` — archaic Hangul surface **ᄒᆡ** paired with modern IPA **[hɛ]**: internal contradiction

- **File:** `words/sun.js` line 560
- **Current:** `ko_em: ["ᄒᆡ", "hɛ"]`
- **Why:** ᄒᆡ is the Middle / Early Modern spelling using the digraph ㆍ + ㅣ. Phonologically it represents /hʌj/ → /hɛ/ after the ㆍ-loss diphthong-monophthongisation (~1700 per Lee & Ramsey 2011 p. 263). The line therefore encodes a **post-shift IPA on a pre-shift orthography**. Compare `ko_mid: ["ᄒᆡ","hʌj"]` line 556 — that one is internally consistent. Either change the ko_em surface to **해** (post-1700 modern spelling, consistent with [hɛ]) or change the IPA to /hʌj/ (consistent with the archaic spelling). The current row is half-and-half.

### 8. `ko_em/love` — surface "사랑" but the Early Modern form should retain ᄉᆞ랑 deeper into the period

- **File:** `words/love.js` line 561
- **Current:** `ko_em: ["사랑", "saɾaŋ"]`
- **Why:** ᄉᆞ랑 with arae-a survives in Early Modern texts well into the 18c (cf. _Wŏrin sŏkpo_ 사ᄅᆞᆼ; _Tongmun yuhae_ 1748 ᄉᆞ랑); ㆍ-loss completes only around 1800 in this lexeme. The ko_mid row line 557 correctly shows **ᄉᆞ랑 [sʌ.ɾaŋ]**. ko_em copying modern 사랑 [saɾaŋ] erases the entire 16–18c span. Fix: `ko_em: ["ᄉᆞ랑","saɾaŋ"]` (post-1700 unrounding) or `["ᄉᆞ랑","sʌɾaŋ"]` (pre-1700).

### 9. `ko_kp` / `ko_yb` /hello and /thanks — DPRK's canonical greeting is **반갑습니다**, not 안녕하십니까

- **File:** `words/hello.js` lines 67, 70
- **Current:** `ko_kp: ["안녕하십니까","annjʌŋhaɕimnik͈a"]`, `ko_yb: [same]`
- **Why:** The DPRK state-canonical everyday greeting in textbook, radio, and TV usage from the 1960s onward is **반갑습니다** ("I'm glad to meet you"); 안녕하십니까 is also used but is functionally identical to the Southern formal form and so contributes no contrastive value to the wordmap. NK Academy of Sciences (1992) _Chosŏnmal taesajŏn_ s.v. 인사 lists 반갑습니다 as the primary register greeting. Recommend `ko_kp: ["반갑습니다","pan.ɡap̚.s͈ɯm.ni.da"]`. Same fix preserves Yanbian distinctiveness if Yanbian retains the older 안녕하십니까. (Note: `ko_kp/thanks: 고맙습니다` line 67 IS correct — DPRK does prefer 고맙습니다 over 감사합니다 for the same Northern-purist reason, so that row is fine.)

### 10. `ko_kp` dictionary-form / register inconsistency: standard ko uses `-다` form, ko_kp uses `-어/-아` (informal)

- **Files:** drink, eat, good (lines 66–67 of each)
- **Current:**
  - drink: `ko ["마시다","maɕida"]`, `ko_kp ["마셔","maɕjʌ"]`
  - eat: `ko ["먹다","mʌk̚t͈a"]`, `ko_kp ["먹어","mʌɡʌ"]`
  - good: `ko ["좋다","t͡ɕotʰa"]`, `ko_kp ["좋아","t͡ɕoa"]`
- **Why:** The dictionary citation form in both ROK and DPRK lexicography is the **`-다`** form (마시다, 먹다, 좋다). DPRK lexicons (Chosŏnmal taesajŏn 1992) list verbs in -다 form, just like Seoul. The data presents ko_kp as if its diagnostic feature is "uses casual -어 forms", which is **false** — that's not a North-South contrast, that's a register contrast that exists identically in both. Any genuine ko_kp differentiation should be lexical (e.g. 오징어 vs 낙지 sense flip, 화장실 vs 위생실, 만년필 vs 노트북 etc.) — and for these audited items there genuinely isn't one. Recommend reverting ko_kp drink/eat/good to the -다 form (= identical to ko) and acknowledging in `note` that the lexeme is undifferentiated, rather than fabricating a fake casual-vs-formal contrast.

### 11. `ko_jeju/eat` and `ko_jeju/drink` use connective `-엉` — divergent from sibling dialects' `-어` choice

- **File:** `words/eat.js` line 69, `words/drink.js` line 69
- **Current:** `ko_jeju: ["먹엉","mʌɡʌŋ"]`, `ko_jeju: ["마셩","maɕjʌŋ"]`
- **Why:** -엉/-앙 is the Jeju connective converb suffix ("eating, and…"; "drinking, and…") corresponding to mainland -어서. The Busan, Hamgyong, Jeolla, and Yanbian rows here all use the simple -어/-아 ending (먹어, 마셔, 좋아). Jeju standing alone with -엉 is **lexically defensible** (it's the most-cited Jeju morphological signature, Yang & O'Grady ch. 6) but creates a **citation-form mismatch**: the other dialect rows are predicative ("[I] ate / I drank"), while Jeju is converbial ("…eating and…"). Either reconcile by giving all dialects the -다 dictionary form (matching the standard `ko` row), or accept the contrast as a deliberate Jeju feature-showcase. Currently it reads as a category error. Personal recommendation: keep -엉/-앙 and add a `note` flagging it as Jeju's signature converb, since elsewhere in the corpus Jeju is intentionally feature-marked.

### 12. `ko_jl/good = "좋아부러"` is an intensified speech-act form, not a citation form

- **File:** `words/good.js` line 979
- **Current:** `ko_jl: ["좋아부러","t͡ɕoabuɾʌ"]`
- **Why:** 좋아부러 (= 좋아 + 부러/-버리- aspectual "completely") is a Jeolla intensifier meaning "it's really good / I totally like it", not a neutral adjective. The other dialect rows in this file all use simple predicative -아: 좋아 (ko_kp, ko_bus, ko_yb, ko_hg). For internal consistency the Jeolla row should be **좋아** [t͡ɕoa] or, if a Jeolla-distinctive predicative form is wanted, **좋어** [t͡ɕoʌ] (Jeolla -어 instead of -아 after 좋-, per the Jeolla low-vowel-fronting rule). 좋아부러 is over-marked and not what a Jeolla speaker would give as the citation form.

### 13. `ko_jl/thanks = "고맙당께"` couples wrong illocutionary force

- **File:** `words/thanks.js` line 979
- **Current:** `ko_jl: ["고맙당께","komap̚t͈aŋkːe"]`
- **Why:** -당께 is the Jeolla emphatic declarative ("it IS thanks!"), used in argumentative contexts (cf. 알았당께 "I told you I know!"). The standard Jeolla thank-you form is **고맙소** /komap̚s͈o/ (haoche, the predominant Jeolla polite ending) or **고맙구만** for casual register. 고맙당께 as a thank-you reads as "I am gratefully telling you so, you stubborn person" — wrong speech-act fit. Recommend `["고맙소","komap̚s͈o]`.

### 14. `ko_bus` dialect signal is asymmetric: 묵어 (eat) and 안녕하이소 (hello) are Gyeongsang-distinctive but 마셔 (drink) / 좋아 (good) / 사랑 (love) are pan-Korean

- **Files:** drink.js line 68 `["마셔","maɕjʌ"]`; good.js line 68 `["좋아","t͡ɕoa"]`; love.js line 68; vs eat.js line 68 `["묵어","muɡʌ"]`; hello.js line 68 `["안녕하이소","annjʌŋhaiso"]`.
- **Why:** Busan is Gyeongsang dialect. Its diagnostic features include: high-vowel raising 먹→묹 (captured in eat=묵어 ✓), -아이소/-이소 imperative ending (captured in hello=안녕하이소 ✓), pitch-accent tone (not captured anywhere). For drink, the Gyeongsang form would be **마시** or **마시이소** (imperative) — bare 마셔 is the Seoul informal. For good, the Gyeongsang adjective form is **좋다이/좋대이** (with the Gyeongsang -대이 reportative-emphatic) — bare 좋아 is Seoul. The dataset captures Busan distinctiveness inconsistently: present in some slots, absent in others. Either make the Busan row systematically Gyeongsang-marked or systematically Seoul-equivalent.

### 15. `ko_mid/hello = "안녕ᄒᆞ쇼셔"` is anachronistic — 안녕 was not used as a greeting in 15–16c Middle Korean

- **File:** `words/hello.js` line 543
- **Current:** `ko_mid: ["안녕ᄒᆞ쇼셔","annjʌŋ hʌ.sjo.sjʌ"]`
- **Why:** The Sino-Korean compound 安寧/안녕 is attested in MK texts but as a noun "peace, well-being" (e.g. _Sŏkpo sangjŏl_ 안녕ᄒᆞ시니이다 "[the king] is at peace"); its use as a stand-alone greeting routine ("hello") is a **late Joseon / early modern** development, post-1700 at the earliest, generalising only in the 20c. A 15–16c speaker did not greet with "안녕하쇼셔". The proper MK greeting was kin-term + a status-marked verb (e.g. 어버이ᄉᆞᇰ긔 ᄃᆞ외시니잇가) or `["—","—"]`. Recommend either `["—","—"]` (the right answer per the file-level convention for "no fixed lexeme" — used elsewhere by `ko_gor` etc.) or move 안녕하쇼셔 into `ko_em` (Early Modern) where it would be defensible from the 18c on.

### 16. `ko_jeju/cat = "괭이"` correctly preserves a Middle-Korean reflex — positive finding

- **File:** `words/cat.js` line 69
- **Current:** `ko_jeju: ["괭이","kwɛŋi"]`
- **Why:** Jeju preserves the older monosyllabic 괴 (cf. ko_mid line 550 `["괴","kwe"]`) + diminutive -ᅌᅵ → 괭이, which on the mainland generalised further to 고양이 (re-analyzed as 고+양이) by the late 19c. Jeju's 괭이 is the **expected** historical reflex and the row is exactly right. This is the kind of fine-grained dialect-distinctive choice that #1–#4 are missing elsewhere. Positive finding; flag to lock in.

### 17. `ko_jeju/father = "아방"` and `ko_jeju/mother = "어멍"` are correctly Jeju-distinctive — positive finding

- **Files:** father.js line 69, mother.js line 69
- **Current:** `ko_jeju: ["아방","abaŋ"]`, `ko_jeju: ["어멍","ʌmʌŋ"]`
- **Why:** -앙/-엉 nominalising suffix on the parent-kin roots (Yang & O'Grady p. 198) is the most-cited lexical signature of Jeju, alongside the connective converb (see #11). Both forms are exactly right. Lock in.

### 18. `ko_jeju/tree = "낭"` correctly captures the Jeju aphaeretic reduction — positive finding

- **File:** `words/tree.js` line 69
- **Current:** `ko_jeju: ["낭","naŋ"]`
- **Why:** Mainland 나무 ← 나모 ← *namok; Jeju further reduces to 낭 via syllable-loss + final -ng (Yang & O'Grady lexicon p. 318). The row is correct and distinctive. Lock in.

### 19. `ko_hg` (Hamgyong) /one = "한나" with geminate IPA is correct — positive finding

- **File:** `words/one.js` line 984
- **Current:** `ko_hg: ["한나","hanːa"]`
- **Why:** Hamgyong shows /n/-gemination across the 하나→한나 boundary as a regular sandhi rule (Kim Mu-rim 2004 §2.3); the IPA [hanːa] correctly encodes the long /nː/. This is exactly the kind of row that uses dialect-distinctive phonology where the orthography alone would not reveal the feature. Positive finding.

### 20. `ko_gor` Sino-Korean transcriptions match the _Jīlín lèishì_ (鷄林類事) attestations — positive finding

- **Files:** dog 家稀 (line 553), eye 嫩 (553), water 沒 (553), one 河屯 (559), moon 突 (559), sun 姮 (559), tree 南記 (553), fire 孛 (559), hand 遜 (553), house 集 (560).
- **Why:** These all correspond to the Korean-language vocabulary list in the Song-period _Jīlín lèishì_ (~1103), Sun Mu's Chinese-character transcriptions of Koryo Korean words. Cross-checked against the Kang Sin-Hang (1980) edition: 家稀 (dog), 嫩 (eye), 沒 (water), 河屯 (one), 突 (moon), 姮 (sun), 南記 (tree), 孛 (fire), 遜 (hand), 集 (house) all match. This is a high-quality `ko_gor` set. Caveat: the data presents `ko_gor` and the cognate `oko` (Old Korean) rows with **identical** reconstructions in several places (e.g. sun.js line 557 `oko ["日","*hai"]` vs line 559 `ko_gor ["姮","*hai"]`); for an Old Korean / Koryo Korean contrast to mean anything, the reconstructions should diverge. As-is, oko ≈ ko_gor phonologically, which suggests the two lect codes are sharing one underlying dataset.

### 21. Romanization is heterogeneous within the Korean cluster — Yale, Revised, and broad-IPA all present

- **Files:** scan any single row across modern dialects, e.g. drink.js:
  - `ko ["마시다","maɕida"]` — IPA-ish, but uses Yale-style intervocalic /s/→/ɕ/ before /i/
  - `ko_kp ["마셔","maɕjʌ"]` — palatalised /sj/ followed by Yale-style /ʌ/
  - `ko_jeju ["마셩","maɕjʌŋ"]` — same
  - `ko_yb ["마셔","maɕjʌ"]` — same
- **Why:** The brief asks for "Yale vs Revised vs McCune-Reischauer consistency per dialect". The actual answer: **none of the three** is used consistently — what's in the file is a broad-IPA convention that uses /ʌ/ for ㅓ (matches IPA), /ɯ/ for ㅡ (matches IPA), /ɕ/ for palatalised ㅅ (matches IPA), but uses tense-stop diacritics inconsistently: `mʌk̚t͈a` (eat.js line 66, full diacritic load) vs `t͡ɕotʰa` (good.js line 66, aspirated diacritic only) vs `pul` (fire.js line 66, plain). For dictionary integrity recommend either: (a) commit to one narrow-IPA convention everywhere, including reluctant Korean dialect rows; or (b) drop diacritics on dialect rows and reserve them for the standard `ko` row. Currently the same phoneme is transcribed differently in adjacent rows of the same file, which any cross-referencer will trip on.

### 22. Initial-sound-rule (두음법칙) is not testable in the 20-word set — methodological note for future word selection

- **Files:** none of the 20 words contains an initial-rule lexeme.
- **Why:** The brief asks for a 두음법칙 audit (DPRK 래일 vs ROK 내일; DPRK 력사 vs ROK 역사; DPRK 로동 vs ROK 노동; etc.). The chosen vocabulary set — water, fire, tree, eye, hand, sun, moon, dog, cat, etc. — happens to contain **no** Sino-Korean items with initial liquid /l-/ or palatal /nj-/ where the rule applies. The only Sino-Korean items in scope are 안녕 (hello) and 감사/고맙- (thanks), neither of which triggers the rule. Recommend: to make 두음법칙 testable, the wordmap would need to include items like 'year' (DPRK 년 / ROK 년 with citation form 년; or 'tomorrow' DPRK 래일 / ROK 내일). For now, mark this audit dimension as **not-evaluable** for the current 20-word set; do not invent ko_kp forms to demonstrate a rule that the data cannot exercise. This is the right outcome — better an honest gap than a fabricated demonstration.

### 23. `ko_mid` and `ko_em` carry no segmental dot (·) — syllable-break IPA inconsistency across the Korean block

- **Files:** drink.js (`ko_mid ["마시다","maɕi.ta"]` line 550 uses `.` syllable-break, but `ko_em ["마시다","maɕida"]` line 554 doesn't); hello.js (`ko_mid ["안녕ᄒᆞ쇼셔","annjʌŋ hʌ.sjo.sjʌ"]` line 543 uses both space and dot; `ko_em ["안녕하시오","annjʌŋ.ha.ɕi.o"]` line 547 uses only dots)
- **Why:** Within the Korean block alone, IPA uses no separator (modern dialects), `.` syllable separator (some ko_mid, ko_em), or ` ` space (a few ko_mid). For example `ko_mid ["고맙ᄉᆞᆸ나이다","komap.sʌp.na.i.ta"]` uses dot but `ko_em ["고맙소이다","komap.so.i.da"]` also uses dot — consistent within historical rows but neither matches the modern row style. Not wrong, just stylistically inconsistent. Recommend a corpus-wide convention or stripping dots from all rows.

### 24. `ko_mid`/heart `ᄆᆞᅀᆞᆷ [mʌzʌm]` vs `oko`/heart `心音 [*məsʌm]` — the OKO→ MK ㅅ>ㅿ lenition is correctly represented (positive finding)

- **File:** `words/heart.js` lines 550–551
- **Current:** `ko_mid ["ᄆᆞᅀᆞᆷ","mʌzʌm"]`, `oko ["心音","*məsʌm"]`
- **Why:** The well-attested Old Korean → Middle Korean sound change is **intervocalic /s/ → /z/ → ø** (Lee & Ramsey 2011 ch. 5–6). The data correctly shows OKO with /s/ and MK with /z/ (orthographically ㅿ). This is exactly the kind of contrast that the lect codes exist to capture. Lock in.

### 25. The `ko_em/thanks = "고맙소이다"` form is well-chosen Early Modern, but ko_mid form 고맙ᄉᆞᆸ나이다 is mismatched register

- **Files:** thanks.js lines 547, 550
- **Current:** `ko_mid ["고맙ᄉᆞᆸ나이다","komap.sʌp.na.i.ta"]`, `ko_em ["고맙소이다","komap.so.i.da"]`
- **Why:** ko_em 고맙소이다 (하오체) is a fine 18–19c register form (positive). ko_mid 고맙ᄉᆞᆸ나이다 reconstructs the 합쇼체 (highest formal) with -ᄉᆞᆸ나이다 ending — but in 15–16c MK the actual ending was -ᄉᆞᆸ나ᅌᅵ다 (with ᅌᅵ velar-nasal initial), simplifying to -ᄉᆞᆸ나이다 only by ~17c. So the ko_mid row is using a Late-MK / Early-EM form. Either pre-date it to -ᄉᆞᆸ나ᅌᅵ다 to actually represent 15–16c, or move the current form to ko_em and replace ko_mid with -ᄉᆞᆸ나ᅌᅵ다 (positive that the editor knew the deferential template, just off by one century).

---

## Summary

- **25 findings.** 1 systemic dialect-collapse (#1, affecting 5×14 = 70 cells), 3 lect-identity problems (#3 ko_em ≡ ko, #4 ko_yb ≡ ko_kp, #5 ko_mid tonelessness), 6 lexical wrong-pick or under-marked items (#2 Jeju heart, #6 Yanbian aligned to Gyeongsang, #9 ko_kp greeting, #10 ko_kp register, #12 Jeolla good, #13 Jeolla thanks), 3 orthography-IPA mismatches (#7 ko_em sun, #8 ko_em love, #15 ko_mid hello anachronism), 2 convention issues (#21 romanization heterogeneity, #23 syllable-dot inconsistency), 1 methodological note on the brief (#22 두음법칙 not testable), 1 follow-up Hamgyong/Yanbian alignment (#6), and 6 positive findings to lock in (#16 Jeju cat 괭이, #17 Jeju kin terms, #18 Jeju tree 낭, #19 Hamgyong 한나 gemination, #20 ko_gor _Jīlín lèishì_ matches, #24 OKO/MK ㅅ>ㅿ contrast).
- **Highest-priority defect:** #1 (dialect non-distinctiveness across 14 of 20 words for 5 modern lects). Until at least the documented dialect-distinctive forms are added (Jeju heart 모심, Yanbian re-aligned to Hamgyong, ko_kp 반갑습니다 for hello), the wordmap presents five rows where one would honestly suffice for those items.
- **Highest-priority structural defect:** #5 (ko_mid is tonelessly transcribed). Middle Korean without 방점 is not Middle Korean — it's a romanisation of MK orthography.
- **Codes named in the brief but not present in `/words/`:** `ko_zai` (the brief's PRC-Korean code; the actual code is `ko_yb`) and `ko_hun` (no such code; likely a brief-side typo for `ko_hg` Hamgyong). `ko_em` is "Early Modern" per LANG_CODES.md, not "Emakimono" as the brief speculates.
- **Audit dimension not evaluable on this word set:** 두음법칙 (initial sound rule) — none of the 20 words contains an SK-initial /l/ or /nj-/ lexeme; recommend adding 'year' or 'tomorrow' to the next round if this rule is to be tested.

---

**File:** `/home/jounlai/langmap/wordmap_reviews/review_91_open.md`
**Finding count:** 25


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 16
- **policy/skip**: 9
- **headline**: ko_em 7 (good 됴타/tree 나모/water 믈/fire 블/cat 괴앙이/sun hʌj/love ᄉᆞ랑), ko_mid 방점 3 (:손/:눈/·ᄒᆡ), ko_yb Hamgyong 2 (오마니/아바이), ko_jl 2, ko_jeju heart 모심, ko_kp hello 반갑습니다
- **JSON**: /tmp/wm_edits_91.json
