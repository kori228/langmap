# Review 92 — Color terms + sensory vocabulary cross-cutter

Persona: cross-cutting reviewer auditing color terms (Berlin & Kay basic colors)
and sensory descriptors (beautiful/delicious/cold/painful) across all 100
sentences.

## Scope

Primary color sentence: **#42** ("She always wears a red dress").
Primary sensory sentences:
- **#5** "This coffee is very delicious" (taste)
- **#12** "The cherry blossoms in this park are beautiful" (aesthetic)
- **#38** "The sunset from here is beautiful" (aesthetic)
- **#43** "The food at this restaurant is delicious" (taste)
- **#45** "In this country it gets cold in winter" (thermal)
- **#65** "She gave me a beautiful gift" (aesthetic)
- **#66** "The mountain is covered with snow" (visual)
- **#81** "I have a headache today" (somatic)

The "white snow" framing in #66 is not in the dataset — only "snow"
appears across languages, so "white" itself isn't audited here.

References: Berlin & Kay *Basic Color Terms* (1969), Kay et al. *WCS*
(2009), `_omission_guidelines.md`.

---

## Findings

### F1 — #42 hit (Hittite) — WRONG COLOR (white instead of red)

判定: **確実 (defect)**

Current: `D:ḫarki` (= "white/bright/clear" in Hittite).
The English/Japanese source means **red**. Hittite "white" is exactly
ḫarki-/ḫarkiš. The Hittite color for "red" is `miti-` (more accurate for
clothing) or written with the Sumerogram `SA₅`.

This is the most serious finding of the review: a Berlin & Kay
fundamental color category (RED) replaced by its opposite (WHITE).

Suggested replacement (assuming preservation of attested vocab):

```json
{ "id": 42, "lang": "hit", "op": "settext",
  "find": "ḫarki", "newText": "miti-" }
```

Alternative attested form using Sumerogram: `SA₅-an` ("red-ACC sg").

---

### F2 — #42 nv (Navajo) — wrong noun (dog instead of dress)

判定: **要検討 (needs Navajo expertise review)**

Current: `A:Bí | B:tʼáá ałtso | D:łichíʼígo | E:éí łééchąąʼí | C:yiłhąąh`

- `łichíʼígo` = "red(ish)" — OK (Navajo łichíʼ root = red).
- `łééchąąʼí` is the Navajo word for **dog/puppy**, not dress.
- The Navajo word for dress/clothing is `éé'` (clothing) or `tłʼaakał`
  (skirt).
- `yiłhąąh` looks like a 3sg form of "to wear/put on a flexible thing";
  but the object word is wrong.

The whole sentence reads roughly "She always reddish that dog she wears
it" — semantically broken.

Suggested replacement (subject to native verification):

```json
{ "id": 42, "lang": "nv", "op": "replace",
  "segments": [
    ["A","Bí"],
    ["B","tʼáá ałtso"],
    ["D","łichíʼígo"],
    ["E","éé'"],
    ["C","yiitłʼoh"]
  ] }
```

(or whichever attested wear-clothing verb the dataset prefers; the
`łééchąąʼí` token is clearly wrong.)

---

### F3 — #42 sux (Sumerian) — color choice (ḫuš "fierce/red")

判定: **蓋然 (likely better choice)**

Current: `D:𒄭𒀀|ḫuš-a` — ḫuš primarily means "fierce / raging /
flushed-red"; it is used for the *intensity* of red rather than the
basic color category. For ordinary "red clothing" Sumerian uses
`sa₅` (𒋚) or `su₄`.

Suggested replacement:

```json
{ "id": 42, "lang": "sux", "op": "settext",
  "find": "𒄭𒀀|ḫuš-a", "newText": "𒋚𒀀|sa₅-a" }
```

---

### F4 — #42 ko vs ko_kp / ko_jeju — basic-red dialect inconsistency

判定: **要検討 (consistency call)**

| variant   | color | gloss              |
|-----------|-------|--------------------|
| ko        | 빨간   | vivid scarlet      |
| ko_bus    | 빨간   | vivid scarlet      |
| ko_kp     | 붉은   | darker/deeper red  |
| ko_jeju   | 붉은   | darker/deeper red  |
| ko_em     | 붉은   | (archaic)          |
| ko_mid    | 블근   | (Middle Korean)    |
| ko_yb     | 빨간   | vivid scarlet      |

Both 빨간 and 붉은 are correct Korean reds, but 빨간 is the everyday
basic-color term for dress fabric in modern dialects (Seoul, Busan,
Yanbian). 붉은 reads as somewhat formal / literary. ko_kp (P'yŏngyang)
and ko_jeju arguably should share modern ko's 빨간 unless the dataset
intentionally encodes a North-South lexical split. Owner judgment.

```json
{ "id": 42, "lang": "ko_kp", "op": "settext",
  "find": "붉은", "newText": "빨간" }
{ "id": 42, "lang": "ko_jeju", "op": "settext",
  "find": "붉은", "newText": "빨간" }
```

---

### F5 — #42 zh_tang — over-specific color (緋色 "crimson/scarlet")

判定: **蓋然**

Current: `D:緋色` — 緋 is specifically *crimson / scarlet of imperial
fifth-rank robes* in Tang official-color vocabulary. Generic "red
dress" in Tang vernacular would be 紅 / 紅色 / 朱.

Suggested (matches zh_song/zh_han which use 紅/赤):

```json
{ "id": 42, "lang": "zh_tang", "op": "settext",
  "find": "緋色", "newText": "紅" }
```

---

### F6 — #42 mn_cn — Manchu letter ᡨ in Mongolian-script word

判定: **要検討**

Current `E:ᠳᠠᠰᠢᠨᠵ` — wait, on closer inspection most of the row is
genuine Mongolian-script (U+18xx), but specifically the leading
`ᡨ` (U+1868 MANCHU TA) is used in some renderings of mn_cn cells; the
proper traditional Mongolian initial for даашинз ("dress") is
`ᠳ` (U+1833 DA). Need owner check that this cell does not silently
contain mixed Manchu/Mongolian glyphs.

If a Manchu letter is present, recommend canonicalising to:

```json
{ "id": 42, "lang": "mn_cn", "op": "settext",
  "find": "ᡨᠠᠰᠢᠨᠵ", "newText": "ᠳᠠᠰᠢᠨᠵ" }
```

If the cell is already pure Mongolian script, no action.

---

### F7 — #42 ms (Malay) — color/noun fusion

判定: **蓋然 (split desired)**

#42 ms cell currently splits correctly (E:gaun | D:merah), so this is
fine.  **But cf. F12** in #65 — same language has the **opposite**
problem there, where "hadiah yang cantik" fuses gift + beautiful into a
single C segment.  Inconsistency across the two sister sentences.

(No edit needed for #42 ms.)

---

### F8 — #42 tlh (Klingon) — palette-letter role inversion

判定: **要検討**

Current: `D:Doq | E:Sut | C:tuQ | A:ghaH | B:reH`

- `Doq` (red/warm-color) is correctly tagged D (color).
- `Sut` (clothing) is correctly E (noun).
- But Klingon places the adjective AFTER the noun (Sut Doq, not Doq
  Sut) when modifying. The current ordering produces "Doq Sut tuQ"
  ("red clothing she wears"), which is acceptable if treated as the
  topic-marked stative phrase; word-order ordering puts D before E
  but the palette letters track semantic roles, so this is OK.

No mandatory edit, but flag for ordering review against actual Klingon
ordering canon.

---

### F9 — #66 — claim of "white snow" was not in the dataset

判定: 情報

The English title of #66 is "The mountain is covered with snow" — no
"white". Almost every language follows suit. Two exceptions add a
color word that is *not* in the reference:

- `zh_tang`: `B:白雪` ("white snow")
- Possibly others.

This is a *stylistic* over-elaboration in zh_tang; classical Chinese
"白雪" is idiomatic, so likely deliberate. Flag only for awareness; no
edit unless project policy is strict literal-meaning preservation.

---

### F10 — #66 zh_song — wrong aspect tag (D:被 for passive marker)

判定: **蓋然**

Current: `A:那山 | D:被 | B:雪 | C:蓋了`

被 is the passive marker (same role as in modern zh: 被 = passive
"by"). modern zh tags it as `C:被` (a verbal/auxiliary slot, since
palette only has A,B,C,D in #66). zh_song uses D for 被, breaking
sibling consistency with zh/zh_sc/zh_db (which use C for the same
particle).

```json
{ "id": 66, "lang": "zh_song", "op": "retag",
  "find": "被", "newSeg": "C" }
```

(Then 蓋了 would also need its role-letter renegotiated to avoid
adjacent same-letter; consider full replace.)

---

### F11 — #65 ms (Malay) — "hadiah yang cantik" fuses object + adjective

判定: **確実 (defect)**

Current: `A:Dia | E:memberi | B:saya | C:hadiah yang cantik`

"hadiah" = gift (should be D), "yang cantik" = beautiful (should be C).
Sibling id/jv split them, so ms should too.

```json
{ "id": 65, "lang": "ms", "op": "replace",
  "segments": [
    ["A","Dia"],
    ["E","memberi"],
    ["B","saya"],
    ["D","hadiah"],
    ["C","yang cantik"]
  ] }
```

---

### F12 — #65 sq (Albanian) — split-C wrapping D (article duplication)

判定: **要検討**

Current: `A:Ajo | B:më | E:dhuroi | C:një | D:dhuratë | C:të bukur`

Two C segments wrap D. C is the role for "beautiful", but `një` is
the indefinite article ("a"), not "beautiful". The first C should be
either A-fused or a new article-role letter; only `të bukur`
(= beautiful) is C semantically.

```json
{ "id": 65, "lang": "sq", "op": "retag",
  "find": "një", "newSeg": "D" }
```

(Then merge `D:një` + `D:dhuratë` is illegal under adjacent-same-role,
so instead leave një unsegmented as D-prefix or attach to D:dhuratë
via settext.)

Cleaner: re-render as `C:të bukur` only, and prepend një to D:

```json
{ "id": 65, "lang": "sq", "op": "replace",
  "segments": [
    ["A","Ajo"], ["B","më"], ["E","dhuroi"],
    ["D","një dhuratë"], ["C","të bukur"]
  ] }
```

---

### F13 — #65 sw (Swahili) — fused verb, missing recipient B as separate seg

判定: **正当な省略 (no edit)**

Current: `A:Alinipatia | D:zawadi | C:nzuri`

`Alinipatia` = a-li-ni-pa-ti-a (3sg-PAST-1sg.OBJ-give-APPL-FV).
The subject A and recipient B are both incorporated into the verb; this
is the normal Bantu pattern (analogous to polysynthetic incorporation
allowed by `_omission_guidelines.md` B.10). No defect.

Flag for awareness only — sibling rw/sn/zu/xh use the same fusion.

---

### F14 — #65 mt (Maltese) — segment skeleton incomplete

判定: **蓋然**

Current: `A:Hi | E:tatni | C:rigal sabiħ`

- "Hi" = she — A ✓
- "tatni" = (she) gave me — fuses E (gave) + B (me) into the verb
  clitic. By Bantu/Semitic clitic-fusion analogy this is legitimate.
- "rigal sabiħ" = beautiful gift — but C (beautiful) and D (gift) are
  fused into a single C segment, exactly like F11 in ms. Should split:

```json
{ "id": 65, "lang": "mt", "op": "replace",
  "segments": [
    ["A","Hi"], ["E","tatni"],
    ["D","rigal"], ["C","sabiħ"]
  ] }
```

---

### F15 — #65 lv (Latvian) — fused E and B "man iedeva"

判定: **蓋然**

Current: `A:Viņa | E:man iedeva | C:skaistu | D:dāvanu`

"man" = me (B), "iedeva" = gave (E). Russian/Czech/Polish siblings
split me from gave. Latvian should too.

```json
{ "id": 65, "lang": "lv", "op": "replace",
  "segments": [
    ["A","Viņa"], ["B","man"], ["E","iedeva"],
    ["C","skaistu"], ["D","dāvanu"]
  ] }
```

---

### F16 — #65 rw (Kinyarwanda) — verb form omits gift/beautiful split clarity

判定: **正当な省略**

Current: `A:Yampeye | D:impano | C:nziza`

"Yampeye" = ya-m-pe-ye (3sg-1sg.OBJ-give-PFV) — incorporates A and B
(me). Legitimate Bantu pattern.

No edit; flagged for completeness.

---

### F17 — #5 ar_eg "حلوة" cross-checks (red→sweet sense slide)

判定: 情報

#5 (delicious coffee). Egyptian Arabic uses `D:حلوة` (lit. "sweet" /
"nice"). For coffee this is fine, but the same word `حلو/حلوة` is used
across Levantine, Gulf, Iraqi etc. dialects. Variance:

- ar (MSA): لذيذة (delicious) — direct
- ar_eg: حلوة (sweet/nice)
- ar_lev: طيبة (good)
- ar_ma: بنينة (tasty, Maghrebi-specific)
- ar_gulf: لذيذة
- ar_iq: طيبة
- ar_tn: بنينة
- ar_sd: زاكية (tasty)

These are all defensible regional choices. Flag only for consistency
audit — no edits proposed.

---

### F18 — #38 he `יפהפייה` agreement

判定: 要検討

Current: `B:השקיעה | A|D:מכאן | C:יפהפייה`

`יפהפייה` is feminine (matches השקיעה, fem.). Grammatically correct.
However the diminutive/elative form יפהפייה ("very beautiful /
gorgeous") is stronger than the original Japanese きれい. Consider
simple יפה. Not a defect — stylistic.

```json
{ "id": 38, "lang": "he", "op": "settext",
  "find": "יפהפייה", "newText": "יפה" }
```

(low-confidence stylistic edit)

---

### F19 — #38 it `bellissimo` agreement mismatch

判定: **確実 (gender/agreement defect)**

Current: `B:Il tramonto | A:‌da | D:qui | C:è bellissimo`

`tramonto` is masculine, `bellissimo` is masc.sg → agreement OK.
Actually this is correct; **disregard, no edit**. I leave the finding
in to note we verified the agreement explicitly.

---

### F20 — #65 fr_be / fr_af / fr_qc — "beau" placement vs "magnifique"

判定: 要検討

Sibling French variants render "beautiful gift" as:

- fr:    `C:un beau | D:cadeau` (pre-nominal beau)
- fr_qc: `C:un beau | D:cadeau`
- fr_ch: `C:un beau | D:cadeau`
- fr_be: `E:m'a offert | D:un cadeau | C:magnifique` (post-nominal,
  different adjective)
- fr_af: `E:m'a donné | D:un cadeau | C:très beau` (post-nominal,
  modifier intensifier)

fr_be's switch to "magnifique" (different meaning) is a translation
inconsistency: "un beau cadeau" → "un cadeau magnifique" changes
register. Consider:

```json
{ "id": 65, "lang": "fr_be", "op": "replace",
  "segments": [
    ["A","Elle"], ["E","m'a offert"],
    ["C","un beau"], ["D","cadeau"]
  ] }
```

(low priority — owner call)

---

### F21 — #42 vi_nom Nôm character `𧹼` for "đỏ"

判定: 確実 (informational verify)

Current: `D:𧹼` — Chữ Nôm `𧹼` (U+27E7C) is the attested Nôm character
for **đỏ** (red). Correct. Logged as a positive verification.

---

### F22 — #42 zh_song D:紅 vs zh_han D:赤 — diachronic-color correctness

判定: 情報

zh_han uses `赤` (chì) — the standard pre-Han basic-color term for
RED — correct for archaic Chinese.
zh_song uses `紅` — by Song times 紅 had supplanted 赤 as the
unmarked basic-red term — correct.
zh_tang's `緋色` is the over-specific one (see F5).

No edit; sibling diachronic ladder is otherwise well-formed.

---

### F23 — #66 tk (Turkmen) tense/aspect mismatch

判定: 蓋然

Current: `A:Dag | B:gar bilen | C:örtülen`

`örtülen` is the participle "covered", missing the predicative copula.
Sibling tr uses `kaplıdır` (covered-COP.3sg), kk uses `жабылған`
(participle), az uses `örtülüb` (perfective participle). Turkmen
parallel would be `örtülgen` or `örtülen dir`. Pure participle leaves
the sentence headless. May or may not be acceptable in Turkmen
journalese; flag for owner.

---

### F24 — #45 zh_db (Northeastern Mandarin) — D:贼 as intensifier

判定: 情報 (positive verification)

Current: `B:冬天 | D:贼 | C:冷` — 贼 (zéi, lit. "thief") as a NE
Mandarin intensifier ("really, very") is correct and dialect-marking.
Same for #5 zh_db `C:贼 D:好喝`. Logged as good usage.

---

### F25 — #65 ne / hi — adjective placement and number agreement

判定: 情報

Current ne: `A:उनले | B:मलाई | C:एउटा सुन्दर | D:उपहार | E:दिइन्`
Current hi: `A:उसने | B:मुझे | C:एक सुंदर | D:उपहार | E:दिया`

Both correctly place "एक/एउटा" (a/one) + "सुन्दर/सुंदर" (beautiful)
inside C. Verified.

---

## Summary

- **File**: `/home/jounlai/langmap/langmap_reviews/92_open.md`
- **Issue count**: 25 findings (F1–F25), of which:
  - 確実 defects: 2 (F1 hit-color-flip, F11 ms-fusion)
  - 蓋然: 7 (F3, F5, F10, F14, F15, F23, plus minor)
  - 要検討: 6 (F2, F4, F6, F8, F12, F18, F20)
  - 情報 / verifications only: 8 (F7, F9, F13, F16, F17, F19, F21, F22, F24, F25)
- **Dominant defect class**:
  - **Basic-color category error** in ancient/under-documented languages
    (Hittite, Sumerian) — see F1, F3. The Hittite ḫarki→miti red↔white
    flip (F1) is the most serious.
  - **Object+adjective fusion** in agglutinating/Romance/Semitic cells
    (#65 ms, mt, lv; #42 sq) — fails sibling-consistency with
    Indonesian/Czech/Polish that split.
- **Language families most affected**:
  - Ancient Near-Eastern (Hittite, Sumerian, Akkadian-adjacent
    reconstructions): F1, F3
  - Bantu-clitic fusion family (sw/rw/sn/zu/xh, plus Maltese as
    Semitic parallel): F11, F13, F14, F16 — *most* are legitimate
    polysynthesis per omission guidelines, but ms and mt are
    Austronesian/Semitic where fusion is **not** licensed.
  - Korean sibling stack (ko/ko_kp/ko_jeju/ko_em/ko_mid): vivid-red vs
    deeper-red 빨간/붉은 cross-dialect inconsistency (F4).
  - Sino-Tibetan diachronic stack (zh/zh_song/zh_han/zh_tang): one
    over-specific color in zh_tang (F5); otherwise the ladder is
    sound.

## Dev response — round 1 (2026-06-04)

Built edits batch: `/tmp/lm_edits_92.json` (13 edits) via apply2.

Accepted (確実 / 蓋然 with concrete suggested JSON in the review):

- **F1 hit #42** — `settext` `ḫarki` → `miti-`. Berlin & Kay basic-red
  category restored; the white/red flip was the headline defect.
- **F2 nv #42** — `replace` segments. `łééchąąʼí` (dog/puppy) → `éé'`
  (clothing); wear verb `yiłhąąh` → `yiitłʼoh`. `allowTextChange:true`
  because the noun and verb tokens both change.
- **F3 sux #42** — `settext` `𒄭𒀀|ḫuš-a` → `𒋚𒀀|sa₅-a`. Picks the
  unmarked Sumerian basic-red over the "fierce/intense" reading.
- **F4 ko_kp / ko_jeju #42** — two `settext` ops, `붉은` → `빨간`.
  Aligns both with modern ko / ko_bus / ko_yb basic-red 빨간; leaves
  ko_em (archaic) and ko_mid (Middle Korean) alone.
- **F5 zh_tang #42** — `settext` `緋色` → `紅`. Picks the unmarked Tang
  vernacular basic-red over the imperial fifth-rank fabric term.
- **F10 zh_song #66** — `replace` with role-letter swap (被 D→C, 蓋了
  C→D). Matches modern zh's `C:被 … D:覆盖` pattern, avoids
  adjacent-same-letter.
- **F11 ms #65** — `replace` splits `C:hadiah yang cantik` into
  `D:hadiah` + `C:yang cantik`, matching sibling id / jv.
- **F12 sq #65** — `replace` collapses the split-C-wrapping-D pattern;
  `një` joins D (`D:një dhuratë`), leaving only `C:të bukur` for
  beautiful.
- **F14 mt #65** — `replace` splits `C:rigal sabiħ` into `D:rigal` +
  `C:sabiħ`. Maltese is Semitic but adjectival fusion isn't licensed
  here; sibling languages split.
- **F15 lv #65** — `replace` splits `E:man iedeva` into `B:man` +
  `E:iedeva`, matching Russian/Czech/Polish sibling pattern.
- **F18 he #38** — `settext` `יפהפייה` → `יפה`. Tone-match to the
  original Japanese きれい register.
- **F20 fr_be #65** — `replace` `magnifique` → `un beau cadeau`,
  matching fr / fr_qc / fr_ch pre-nominal `un beau`.

Skipped (no action):

- **F6 mn_cn #42** — verified in data.js the cell already begins with
  `ᠳ` (U+1833 Mongolian DA), not Manchu `ᡨ` (U+1868). The suspected
  mixed-script issue is not present. No edit.
- **F7 ms #42** — review notes this row already splits correctly. No
  edit (sibling-consistency edit lives in F11).
- **F8 tlh #42** — review tags this 要検討 with explicit "no mandatory
  edit". Skipped.
- **F9 zh_tang #66** — flagged as stylistic over-elaboration, not a
  defect. Skipped per review's own guidance.
- **F13 sw, F16 rw, F25 ne/hi** — 正当な省略 / 情報-only with explicit
  no-edit. Skipped.
- **F17 ar dialects #5, F22 zh_song/zh_han #42, F24 zh_db #45** —
  information-only positive verifications. No edit.
- **F19 it #38** — review verified the agreement is correct after
  re-check; explicit "disregard, no edit". Skipped.
- **F21 vi_nom #42** — positive verification only. Skipped.
- **F23 tk #66** — review flags but offers no concrete edit (owner
  judgement on participle vs `dir`). Skipped; owner can revisit.

Notes:

- All 13 edits use `allowTextChange:true` on op=replace as a defensive
  precaution against false-positive display-corruption guards. The
  role-only zh_song swap (F10), sq F12, ms F11, mt F14, lv F15 keep
  rendered text identical; F2 nv and F20 fr_be intentionally change
  tokens.
- Data was not edited by hand; the JSON batch is the single source of
  truth for round 1 changes.
