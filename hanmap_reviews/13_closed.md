# Hanmap data review #13 — Old Chinese reconstruction specialist

## Reviewer self-introduction (ペルソナ自己紹介)

上古音（Old Chinese）再構を専門とする立場から、本データの `zh_han` 行のみを精査する。レビュー#1（中古音）が『切韻』体系を基盤とする中古音→上古音の通時的評価を担当したのに対し、本レビューは Baxter–Sagart 2014 *Old Chinese: A New Reconstruction* の表記体系そのものの整合性に焦点を絞る。すなわち type-A 音節の咽頭化（pharyngealization）`ˤ`、不確実性を示す角括弧 `[...]` と丸括弧 `(r)`、前頭子音（pre-initials）`*Cə-`, `*N-`, `*s-`, `*k-`, `*m-` の有無、韻尾（coda）`*-t/*-k/*-p` および `*-n/*-ŋ/*-m` の整合、`*r-`/`*l-` の区別、口蓋垂音 `*q/*qʰ/*ɢ`、無声鳴音 `*m̥/*n̥/*ŋ̊/*l̥` の表記を検証する。一次的には Baxter & Sagart (2014) の再構リスト（同書付録および BaxterSagart OC reconstruction ver.1.1 のスプレッドシート）を基準とし、相違点については鄭張尚芳『上古音系』(2003) と Schuessler *Minimal Old Chinese and Later Han Chinese* (2009) を対照参照する。本プロジェクトの HAN_DATA モデル（文字キー → `surface`/`ipa` サブオブジェクト → register コード）には熟知しており、`zh_han` は surface・ipa の両行とも BS2014 のアスタリスク付き上古音を載せる設計であることを確認済みである。

**Reviewer perspective:** Old Chinese reconstruction specialist — Baxter–Sagart 2014 notation auditor; cross-checks against Zhengzhang 2003 and Schuessler 2009.

**Coverage:** `zh_han` only (all 61 character keys read verbatim from the live `hanmap_data.js`; both `surface` and `ipa` rows compared per character).

**Notation conventions observed in the file:**

- `zh_han` is BS2014 Old Chinese, asterisked; in the vast majority of entries `surface` and `ipa` carry the *identical* string.
- Pharyngealization is marked with the superscript pharyngeal `ˤ` (U+02E4) — e.g. `*pˤret`, `*tˤoŋ`, `*mˤraʔ`.
- Uncertainty: square brackets `[...]` for indeterminate initial/coda; round brackets `(r)` for an optional medial.
- Pre-initials separated by `.` (tightly bound, e.g. `*s.rum`, `*C.muk`) or by `-` (loosely bound, e.g. `*s-ŋrar`, `*mə-lək`).
- Voiceless sonorants are written with the *ring-below* diacritic (`*m̥ˤik`, `*n̥uʔ`) — **except** `*hmˤəʔ` (海), which is the lone outlier.
- **Two entries (土, 天) silently switch to Zhengzhang-style notation** (vowel-length colon `ː`, no `ˤ`), breaking the column's BS2014 convention.

---

## Issues found

### 1. 土 — `zh_han` (surface/ipa) — Zhengzhang length-colon used inside a Baxter–Sagart column; pharyngealization missing

- Current: `"*tʰaːʔ"` (surface), `"*tʰaːʔ"` (IPA)
- Expected: `"*tʰˤaʔ"`
- Why: 土 is 透母 模韻 上聲 — a Division-I (type-A) syllable, so BS2014 reconstruct it with the *pharyngealized* initial `*tʰˤaʔ` (no vowel length). The current form uses the long-vowel colon `aː`, which is **Zhengzhang 2003** notation (Zhengzhang gives 土 as *l̥ʰaːʔ-type forms with `ː` for type-A), **not** Baxter–Sagart. The entire rest of the column marks type-A with `ˤ` (cf. 木 `*C.mˤok`, 東 `*tˤoŋ`, 馬 `*mˤraʔ`). Mixing the two systems in one register is internally inconsistent and produces a form that exists in neither published reconstruction as written.

### 2. 天 — `zh_han` (surface/ipa) — Same Zhengzhang colon; redundant `ʰ` on a voiceless lateral; no pharyngealization

- Current: `"*l̥ʰiːn"` (surface), `"*l̥ʰiːn"` (IPA)
- Expected: `"*l̥ˤi[n]"` (per BS2014; uncertain coda in brackets)
- Why: Three problems in one form. (a) `iː` is again the Zhengzhang length-colon, not BS2014 — 天 is 透母 先韻 (type A), so BS2014 give the pharyngealized `*l̥ˤi[n]`. (b) The aspiration mark `ʰ` after the voiceless lateral `l̥` is redundant in BS2014, where the ring-below already encodes voicelessness; BS write `*l̥ˤ-`, not `*l̥ʰ-`. (c) The coda `-n` should sit in uncertainty brackets `[n]` per BS2014's treatment of the 先/真 ambiguity. As written, the entry simultaneously violates the file's own `ˤ` convention (issue #1) and the voiceless-sonorant convention (issue #3).

### 3. 海 — `zh_han` (surface/ipa) — Voiceless nasal written with `hm`-digraph, inconsistent with the file's ring-below convention

- Current: `"*hmˤəʔ"` (surface), `"*hmˤəʔ"` (IPA)
- Expected: `"*m̥ˤəʔ"`
- Why: 海 is 曉母 咍韻 上聲, from an OC voiceless `*m̥-`. BS2014 write voiceless sonorants with the **ring-below** diacritic — and this file does too, everywhere else: 血 `*m̥ˤik`, 手 `*n̥uʔ`. 海 alone uses the `hm` digraph (a Karlgren/Li Fang-Kuei-era convention). For BS2014 conformity and internal consistency it must be `*m̥ˤəʔ`. The sibling 血 `*m̥ˤik` in this very column is the controlling precedent.

### 4. 上 — `zh_han` (surface/ipa) — Contradictory `ʔ` (上聲) and `-s` (去聲) on one syllable

- Current: `"*daŋʔ-s"` (surface), `"*daŋʔ-s"` (IPA)
- Expected: for the 去聲 reading, `"*Cə-daŋ-s"`; for the 上聲 reading, `"*daŋʔ"` — but not both markers together.
- Why: In BS2014, final `*-ʔ` is the source of 上聲 (rising) and final `*-s` is the source of 去聲 (departing). A single syllable cannot carry both. 上 has two readings: 上聲 *daŋʔ ("to ascend") and 去聲 *Cə-daŋ-s ("top, above"). The Hanmap glyph 上 ("up/above") is the locative/去聲 sense, so the correct OC is `*Cə-daŋ-s` (or minimally `*daŋ-s`). The composite `*daŋʔ-s` is not a well-formed BS2014 reconstruction. Compare 中:2 `*truŋ-s` and 二 `*ni[j]-s`, which correctly carry `-s` alone for 去聲 derivations.

### 5. 頭 — `zh_han` (surface/ipa) — Missing `*m-` pre-initial

- Current: `"*[d]ˤo"` (surface), `"*[d]ˤo"` (IPA)
- Expected: `"*m-dˤo"`
- Why: BS2014 reconstruct 頭 (定母 侯韻) as `*m-dˤo`, the loosely-bound nasal pre-initial `*m-` accounting for the cluster behaviour and the wordfamily tie to 投/逗. The file drops the pre-initial and instead brackets the initial `[d]` as uncertain — but the BS2014 initial here is not in doubt; what the form omits is the `*m-` pre-syllable. Pre-initials are otherwise faithfully recorded in this column (肉 `*k.nuk`, 十 `*t.[g]əp`, 龍 `*[mə]-roŋ`), so the omission for 頭 is an oversight, not a stylistic choice.

### 6. 行:1 — `zh_han` (surface vs ipa) — `surface` row empty while `ipa` carries the reconstruction

- Current: `surface` = `null` (empty), `ipa` = `"*Cə-[g]ˤraŋ"`
- Expected: `surface` should mirror the `ipa` value, `"*Cə-[g]ˤraŋ"` (as every other `zh_han` entry does).
- Why: For all 60 other characters the `zh_han` `surface` and `ipa` strings are identical. 行:1 alone has an empty surface row, so the display layer will render a blank Old Chinese cell for the háng/"to walk" reading while 行:2 correctly shows `*[g]ˤraŋ`. This is a data-completeness bug, not a linguistic one, but it breaks the column's surface/ipa parity.

### 7. 右 — `zh_han` (surface/ipa) — Initial uvular not bracketed for uncertainty

- Current: `"*ɢʷəʔ"` (surface), `"*ɢʷəʔ"` (IPA)
- Expected: `"*[ɢ]ʷəʔ"`
- Why: BS2014 reconstruct 右 (云母/匣母 有韻) with the initial in uncertainty brackets — `*[ɢ]ʷəʔ` — because the voiced-uvular vs. voiced-velar assignment for the 云母 class is not fully determinate. The file gives a bare `ɢʷ`, asserting more certainty than BS2014 do. Compare the sibling 牛 `*[ŋ]ʷə`, which *does* bracket its labialized initial; 右 should follow the same convention.

### 8. 坐 — `zh_han` (surface/ipa) — Coda glide not bracketed

- Current: `"*[dz]ˤojʔ"` (surface), `"*[dz]ˤojʔ"` (IPA)
- Expected: `"*[dz]ˤo[j]ʔ"`
- Why: BS2014 list 坐 (從母 果韻 上聲) with an uncertain coda glide, `*[dz]ˤo[j]ʔ` — the `[j]` reflects indeterminacy between an open and a `-j`-final rhyme in the 歌/微 system. The file brackets the initial `[dz]` but writes the glide `j` bare. The bracketing should extend to the coda to match BS2014.

### 9. 飲 — `zh_han` (surface/ipa) — Missing medial and vowel uncertainty marks

- Current: `"*qrəmʔ"` (surface), `"*qrəmʔ"` (IPA)
- Expected: `"*q(r)[ə]mʔ"`
- Why: BS2014 give 飲 (影母 寢韻 上聲) as `*q(r)[ə]mʔ`: the medial `r` is *optional* (round brackets), and the rhyme vowel `[ə]` is bracketed as uncertain (侵 vs. other -m rhymes). The file hard-codes a non-optional `r` and an unbracketed `ə`, overstating the certainty of both. The optional-medial round-bracket convention is used elsewhere in the column (口 `*kʰˤ(r)oʔ`, 去 `*[k]ʰ(r)ap-s`), so `(r)` here would be consistent.

### 10. 食 — `zh_han` (surface/ipa) — Pre-initial separator: loose `-` vs. tight `.`

- Current: `"*mə-lək"` (surface), `"*mə-lək"` (IPA)
- Expected: confirm against BS2014 `*mə-lək` — **this entry is correct as written**; flagged only to document that the file correctly distinguishes the loosely-bound `*mə-` (minor syllable, hyphen) from tightly-bound `*C.`/`*k.` clusters (dot). No change needed; included as a positive control that the separator convention is otherwise observed — which makes the 海 `hm` outlier (issue #3) and 頭 omission (issue #5) the more clearly errors.

### 11. 天/土 — `zh_han` — Type-A diagnosis cross-check (systematic)

- Current: 土 `*tʰaːʔ`, 天 `*l̥ʰiːn` (both with `ː`, no `ˤ`)
- Expected: 土 `*tʰˤaʔ`, 天 `*l̥ˤi[n]`
- Why: Both 模韻 (土) and 先韻 (天) are non-Division-III rhymes → type A → obligatorily pharyngealized in BS2014. The presence of `ː` and absence of `ˤ` is the signature of a copy-paste from a Zhengzhang source. Every *other* type-A syllable in the column is correctly pharyngealized (見 `*[k]ˤen-s`, 北 `*pˤək`, 西 `*s-nˤər`, 南 `*nˤəm`, 地 `*lˤej-s`). 土 and 天 are the only two leaks of a foreign reconstruction system into the BS2014 column — they should be normalized together.

### 12. 去 — `zh_han` (surface/ipa) — Verify aspirated uvular vs. velar initial

- Current: `"*[k]ʰ(r)ap-s"` (surface), `"*[k]ʰ(r)ap-s"` (IPA)
- Note: BS2014 give 去 as `*[k]ʰap-s` (溪母, 去聲), and the bracketed `[k]ʰ` plus optional `(r)` and `-s` suffix are all well-formed and match the published form. **Correct as written.** Documented here because the adjacent uvular-initial entries (虎 `*qʰˤraʔ`, 火 `*qʷʰəjʔ`, 飲 `*qrəmʔ`) make it worth confirming that 去 is a *velar* `[k]ʰ`, not a uvular `qʰ` — the file gets this right.

### 13. 二 / 四 — `zh_han` (surface/ipa) — `-s` suffix and `[j]` coda bracketing (consistency control)

- Current: 二 `*ni[j]-s`, 四 `*s.li[j]-s`
- Note: Both match BS2014 (`*ni[j]-s`, `*s.li[j]-s`) — the `[j]` coda is bracketed and the 去聲 `-s` is suffixed correctly. **Correct.** These two are the model the other `[j]`-coda entries should follow; cited as the evidentiary baseline for issue #8 (坐 should likewise bracket its `[j]`).

---

## Summary of systematic issues

1. **Foreign-system contamination (土, 天):** two entries import Zhengzhang 2003 notation (vowel-length `ː`, no pharyngealization `ˤ`, redundant `ʰ` on `l̥`) into a column that is otherwise uniformly Baxter–Sagart 2014. These are the highest-priority fixes (issues #1, #2, #11) because they make the cell linguistically wrong, not merely under-annotated.
2. **Voiceless-sonorant notation drift (海):** one `hm` digraph survives where the rest of the column uses the BS2014 ring-below `m̥`/`n̥` (issue #3).
3. **Tone-derivation morpheme errors (上):** `*-ʔ` and `*-s` cannot co-occur; the 去聲 locative reading wants `*-s` alone (issue #4).
4. **Dropped pre-initials (頭):** BS2014 `*m-` pre-syllables are faithfully recorded everywhere except 頭 (issue #5).
5. **Under-bracketing of BS2014 uncertainty (右, 坐, 飲):** initials, coda glides, medials, and rhyme vowels that BS2014 mark as indeterminate are written as certain (issues #7, #8, #9).
6. **Surface/ipa parity bug (行:1):** the empty `surface` row breaks the column's otherwise perfect surface=ipa identity (issue #6).

Issues #10, #12, and #13 are positive controls documenting that the file's separator, uvular/velar, and `-s`-suffix conventions are correctly applied elsewhere — which is what isolates the genuine errors above as deviations rather than house style.

---

## Worker round-1 response (作業者round-1)

All substantive `zh_han` forms below were verified verbatim against the canonical **Baxter–Sagart Old Chinese reconstruction, version 1.1 (2014-09-20)** spreadsheet/PDF (`sites.lsa.umich.edu/ocbaxtersagart/.../BaxterSagartOCbyGSR2014-09-20.pdf`). Each `zh_han` value occurs twice per character (surface + ipa); both rows are corrected to keep surface = ipa parity.

**Issue #1 — 土 `*tʰaːʔ` → `*tʰˤaʔ` — applied (applied by orchestrator this round).** BS2014 ver.1.1: `0062a 土 thuX *tʰˤaʔ earth`. The colon `aː` is Zhengzhang notation; type-A 模韻 requires `ˤ`. Both surface and ipa rows fixed.

**Issue #2 / #11 — 天 `*l̥ʰiːn` → `*l̥ˤi[n]` — applied (applied by orchestrator this round).** BS2014 ver.1.1: `0361a 天 then *l̥ˤi[n] heaven`. Removes Zhengzhang colon, drops redundant `ʰ` on voiceless lateral, restores `ˤ`, brackets uncertain coda `[n]`. Both rows.

**Issue #3 — 海 `*hmˤəʔ` → `*m̥ˤəʔ` — applied (applied by orchestrator this round).** BS2014 ver.1.1: `0947x 海 xojX *m̥ˤəʔ sea`. Replaces the lone `hm` digraph with the file-wide ring-below convention (cf. 血 `*m̥ˤik`). Both rows.

**Issue #5 — 頭 `*[d]ˤo` → `*[m-t]ˤo` — applied with a CORRECTION to the reviewer's target form (applied by orchestrator this round).** The reviewer asked for `*m-dˤo`, but BS2014 ver.1.1 actually give `0118e 頭 duw *[m-t]ˤo head`: the pre-initial **and** the initial are bracketed together as `[m-t]` (uncertain), and the bare initial is voiceless `t`, not `d`. I applied the sourced BS2014 form `*[m-t]ˤo`, which both restores the missing `m-` pre-initial (the reviewer's valid core point) and corrects the initial. Both rows.

**Issue #6 — 行:1 `zh_han` surface `null` → `"*Cə-[g]ˤraŋ"` — applied (applied by orchestrator this round).** Mirrors the ipa value, restoring surface=ipa parity (all 60 other chars match). Note: 行:1's surface `zh_tang`/`zh_song` are also `null` while ipa has values — outside the `zh_han`-only scope of this review and not flagged, so left untouched.

**Issue #7 — 右 `*ɢʷəʔ` → `*[ɢ]ʷəʔ` — applied (applied by orchestrator this round).** BS2014 ver.1.1 (上聲 "right hand" reading): `0995i 右 hjuwX *[ɢ]ʷəʔ right hand`. Initial uvular bracketed for the 云母 indeterminacy. Both rows.

**Issue #8 — 坐 `*[dz]ˤojʔ` → `*[dz]ˤo[j]ʔ` — applied (applied by orchestrator this round).** BS2014 ver.1.1 (上聲 "sit" reading): `0012a 坐 dzwaX *[dz]ˤo[j]ʔ sit`. Coda glide bracketed. Both rows.

**Issue #9 — 飲 `*qrəmʔ` → `*q(r)[u]mʔ` — applied with a CORRECTION to the reviewer's target form (applied by orchestrator this round).** The reviewer asked for `*q(r)[ə]mʔ`, but that is the 去聲 "give to drink" derivative (BS2014: `0654a 飲 'imH *q(r)[ə]mʔ-s give to drink`). The Hanmap glyph 飲 is glossed "drink" (the **verb**, 上聲), whose BS2014 ver.1.1 form is `0654a 飲 'imX *q(r)[u]mʔ drink (v.)` — rhyme vowel `[u]`, not `[ə]`. I applied the verb reading `*q(r)[u]mʔ`, which makes the medial optional `(r)` and brackets the uncertain vowel as the reviewer intended, with the correct vowel for this gloss. Both rows.

**Issue #4 — 上 `*daŋʔ-s` — HELD (reviewer rejected, but current value is correct).** The reviewer argues `*-ʔ` (上聲) and `*-s` (去聲) cannot co-occur and demands `*Cə-daŋ-s` or `*daŋ-s`. However, BS2014 ver.1.1 list precisely `0726a 上 dzyangH *daŋʔ-s top, above (n.)` for the 去聲 *noun* reading — the very gloss this Hanmap entry carries ("up, above, on top"). The `ʔ-s` sequence here is BS2014's *derivational* stacking (a `*-ʔ` base nominal further taking the `*-s`); it is a well-formed published form, not the contradiction the reviewer assumes. `*Cə-daŋʔ` in BS2014 is instead the 上聲 "ascend" verb reading, which does not match this gloss. The current value is therefore correct as written and is left unchanged. (If the team later wants the verb sense, that would be a different glyph reading, not a fix to this entry.)

**Issues #10, #12, #13 — positive controls, no action.** 食 `*mə-lək`, 去 `*[k]ʰ(r)ap-s`, 二 `*ni[j]-s`, 四 `*s.li[j]-s` confirmed against BS2014 ver.1.1; correct as written.

Source for all forms: William H. Baxter & Laurent Sagart, *Old Chinese: A New Reconstruction* (OUP 2014), reconstruction list ver.1.1 (2014-09-20), University of Michigan.

---

## Reviewer round-2 response (再評価 round-2)

全件を **live `hanmap_data.js`**（`HAN_DATA[char].surface.zh_han` / `.ipa.zh_han`）に対して `node -e` で逐一照合した。surface=ipa の一致、`ː`（Zhengzhang コロン）残存、`h`-digraph 無声鳴音残存をカラム全体で走査した結果：**コロン残存 0 件、h-digraph 残存 0 件、surface/ipa 不一致 0 件**。

### Per-item judgements

- **#1 土 → `*tʰˤaʔ`** — ✓ ACCEPT. Live surface/ipa 共に `*tʰˤaʔ`。Zhengzhang コロン除去・`ˤ` 復元を確認。
- **#2 / #11 天 → `*l̥ˤi[n]`** — ✓ ACCEPT. Live 共に `*l̥ˤi[n]`。冗長 `ʰ` 削除、`ˤ` 復元、coda `[n]` 括弧化を確認。type-A 全体（見/北/西/南/地 等）と整合。
- **#3 海 → `*m̥ˤəʔ`** — ✓ ACCEPT. Live 共に `*m̥ˤəʔ`。兄弟形 血 `*m̥ˤik`・手 `*n̥uʔ` と ring-below 規約で一致。
- **#5 頭 → `*[m-t]ˤo`** — ✓ ACCEPT（worker の修正案を採用）. 私の元案 `*m-dˤo` に対し worker は BS2014 ver.1.1 GSR 0118e `*[m-t]ˤo` を提示。括弧付きクラスタ `[m-t]` と鼻音前頭子音下の無声化 `t` は BS2014 の既知パターンであり、私の核心点（欠落していた `*m-` の復元）を満たしつつ初頭子音も正す。worker の出典付き修正に同意。
- **#6 行:1 surface `null` → `*Cə-[g]ˤraŋ`** — ✓ ACCEPT. Live 行:1 surface=ipa=`*Cə-[g]ˤraŋ`、行:2=`*[g]ˤraŋ`。parity 復元を確認。worker が注記した 行:1 の `zh_tang`/`zh_song` の null は本レビュー（zh_han 限定）の対象外で、放置は妥当。
- **#7 右 → `*[ɢ]ʷəʔ`** — ✓ ACCEPT. Live 共に `*[ɢ]ʷəʔ`。云母不確定の初頭括弧化を確認。兄弟 牛 `*[ŋ]ʷə` と整合。
- **#8 坐 → `*[dz]ˤo[j]ʔ`** — ✓ ACCEPT. Live 共に `*[dz]ˤo[j]ʔ`。coda glide `[j]` 括弧化を確認。二 `*ni[j]-s`・四 `*s.li[j]-s` のモデルに一致。
- **#9 飲 → `*q(r)[u]mʔ`** — ✓ ACCEPT（worker の gloss 駆動修正を採用）. 私の元案 `*q(r)[ə]mʔ` は実は去聲「給飲」派生（BS2014 `'imH ... *q(r)[ə]mʔ-s`）であり、本グリフの gloss「drink (動詞・上聲)」には BS2014 ver.1.1 の `'imX *q(r)[u]mʔ` が正しい対応。optional `(r)` と母音括弧化という私の意図を満たしつつ gloss に正しい母音を当てている。妥当。
- **#4 上 `*daŋʔ-s`** — ✓ ACCEPT（HELD を是認）. 「`*-ʔ` と `*-s` は共起不可」という私の主張は撤回する。BS2014 では `*-s` が `*-ʔ`(上聲)基体から名詞/去聲を派生する *derivational stacking* が存在し、上（名詞「top, above」, 去聲 dzyangH）はまさに `*daŋʔ-s` として出版形に載る。本 Hanmap の gloss は位置名詞「up/above」で去聲名詞読みに一致するため、`*daŋʔ-s` は正しく、変更不要。worker の出典付き hold を受諾。
- **#10 / #12 / #13** — ✓ positive controls。食 `*mə-lək`、去 `*[k]ʰ(r)ap-s`、二 `*ni[j]-s`、四 `*s.li[j]-s` を live で再確認、全て BS2014 ver.1.1 通り。

### New issues

なし（newIssueCount = 0）。カラム全体走査で `ː`・`h`-digraph・parity の残存逸脱は検出されず、新規の明白な誤りは見当たらない。

### Scorecard

| 区分 | 件数 |
|---|---|
| ✓ Accept（live で修正検証済み） | #1, #2/#11, #3, #5, #6, #7, #8, #9 = 8 actionable fixes |
| ✓ Accept（HELD を是認, 出典付き） | #4 |
| ✓ Positive control（無修正・正） | #10, #12, #13 |
| △ Partial | 0 |
| ✗ Reject | 0 |
| New issues | 0 |

worker の2件の「reviewer 案への修正」(#5, #9) はいずれも BS2014 ver.1.1 と gloss に照らして私の元案より正確であり、是認する。#4 の hold も出版形に裏付けられた防御可能な判断として受諾する。全 actionable 項目は live データで修正確認済み、残る項目はいずれも reviewer が明示的に受諾する出典付き選択である。

**File status: CLOSED** — nothing left to address.
