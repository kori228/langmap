# Wordmap review #120 — Senior holistic red-team reviewer — wave-11 closer

## Reviewer self-introduction (ペルソナ自己紹介)

私はこのプロジェクトの全データセットを横断的に検証する第11波のクローザーです。Reviews #01–100 (closed) と open reviews #101–106/#114 を全件精読した上で、既に修正済み・wont-fix 裁定済みの項目を除外し、生き残った「鋭い」エラーだけを狙いました。手法は (a) 話者数上位言語の行を全20ファイル横断で突き合わせる cross-file sanity check、(b) 同一言語行内・同一語族ブロック内の表記規約違反の検出、(c) 過去レビューで「適用された」と主張されたが live データに書き込まれていない fix の検出、です。すべての Current 値は 2026-06-11 時点の live ファイルから verbatim で再取得し、行番号付きで照合済みです。参照文献: Cruz-Ferreira 1999 (JIPA EP) + Infopédia/Priberam; Wiktionary VN 方言別音価 + Thompson 1965; Masica 1991 / Bhatia 1993 (Punjabi tonogenesis); Huffman 1970 / Headley (Khmer); Fortescue 1984 *West Greenlandic*; Stifter 2006 *Sengoídelc* / Thurneysen GOI / eDIL; Perry 2005 *A Tajik Persian Reference Grammar*; Loprieno 1995 (Egyptological 慣用音); Tryon / Académie tahitienne (Tahitian); プロジェクト文書 `docs/words/CONTRIBUTING.md`, `docs/words/LANG_CODES.md`、および全 closed review の裁定記録。

---

## Issues found

### 1. vi — eye — Northern row writes final ⟨t⟩ of *mắt* as `k`, the lone -ăt/-k mismatch in its own row
- **File:** words/eye.js line 76
- **Current:** `["mắt", "mak˧˥"]`
- **Expected:** `["mắt", "mat˧˥"]`
- **Why:** The `vi` row is the Northern (Hanoi) standard — established in the closed adjudication of heart.js (`t͡ɕ` for *tr-* held as "Northern merged" norm). In Hanoi Vietnamese final orthographic ⟨t⟩ stays [t̚]; the -t → -k merger is Central/Southern only (Wiktionary mắt: Hà Nội [mat̚˧˦], Huế/Saigon [mak̚]). The row's own final-⟨t⟩ siblings all use `t`: *tốt* `tot˧˥` (good.js:76), *một* `mot˨˩` (one.js:76), *mặt trời* `mət˨˩ tɤːj˨˩` (sun.js:76) — and the dialect layers confirm the split: `vi_s: ["mắt", "mak˧˥"]` (line 78, correctly k for Saigon) and `vi_c "maːk˧˥"` (line 77). The `vi` cell duplicates the Southern value; closed reviews quoted `mak˧˥` only in passing (unreleased-stop and ⟨ă⟩-vowel discussions) — the t/k error itself was never reported.

---

### 2. vi — heart — *trái* missing the long /aː/ of ⟨ai⟩; contradicts the row's own ⟨ai/ao⟩ convention and both dialect siblings
- **File:** words/heart.js line 76
- **Current:** `["trái tim", "t͡ɕaj˧˥ tim˥"]`
- **Expected:** `["trái tim", "t͡ɕaːj˧˥ tim˥"]`
- **Why:** Vietnamese orthography opposes ⟨ai⟩ = /aː/+/j/ to ⟨ay⟩ = /ă/+/j/. The dataset encodes this correctly elsewhere in the same `vi` row: *tay* (hand.js:76) = `taj˥` (short ⟨ay⟩), *chào* (hello.js:76) = `t͡ɕaːw˨˩` (long ⟨ao⟩); and both dialect siblings of this very cell carry the length: `vi_c: "ʈaːj˩˧ tiːm˥"` (line 77), `vi_s: "ʈaːj˧˥ tim˥"` (line 78). Wiktionary trái: Hà Nội [t͡ɕaːj˧˦]. Note: the *consonant* (t͡ɕ vs ʈ) was adjudicated and held as a deliberate Northern-merger convention in a closed review — this issue is solely the vowel length, which that hold never addressed.

---

### 3. pt_eu — eat — *comer* stressed vowel is close-mid [e], not [ɛ]
- **File:** words/eat.js line 99
- **Current:** `["comer", "kuˈmɛɾ"]`
- **Expected:** `["comer", "kuˈmeɾ"]`
- **Why:** European Portuguese -er verb infinitives have close-mid /e/ under stress: *comer* [kuˈmeɾ] (Infopédia: «cumêr»; Wiktionary (Portugal) /kuˈmeɾ/; cf. *ter*, *fazer* — [ɛɾ] is lexical, e.g. *ser*, *mulher*, not regular for infinitives). The `pt_br` sibling already has the close vowel (`komeɾ`, line 100). Caution flag for the fixer: several closed reviews (the stress-normalization passes) copied `kuˈmɛɾ` forward as the "expected" value while adding only the `ˈ` — the vowel quality was never itself adjudicated; it is a survivor error that the stress fixes fossilized.

---

### 4. pt_eu — drink — *beber* same error: [ɛ] for the close-mid stressed /e/
- **File:** words/drink.js line 99
- **Current:** `["beber", "bɨˈbɛɾ"]`
- **Expected:** `["beber", "bɨˈbeɾ"]`
- **Why:** Same rule and same evidence class as #3: EP *beber* is [bɨˈbeɾ] (Infopédia «bebêr»; Wiktionary (Portugal) /bɨˈbeɾ/). The cell's own pre-tonic reduction /e/→[ɨ] is correctly encoded, proving the transcriber knew the EP vowel system — only the stressed nucleus is off by one height. `pt_br` sibling: `bebeɾ` (line 100). Like #3, `bɨˈbɛɾ` was propagated verbatim through the closed stress-mark fixes without the quality ever being reviewed.

---

### 5. pa — thanks — tonogenesis missed: word-initial ਧ is [t̪] + low tone, not [d]
- **File:** words/thanks.js line 208
- **Current:** `["ਧੰਨਵਾਦ", "dənːʋɑːd"]`
- **Expected:** `["ਧੰਨਵਾਦ", "tə̀nːʋɑːd"]`
- **Why:** Punjabi lost the Indo-Aryan voiced aspirates: word-initial ਧ /dʱ/ → plain voiceless [t̪] with low tone on the following vowel (Masica 1991 §6.5; Bhatia 1993). The project already adjudicated and applied exactly this rule to the only other word-initial voiced-aspirate cell in the `pa` row: house.js:215 `pa: ["ਘਰ", "kə̀ɾ"]` (ਘ → k + grave accent, applied in closed review #83). *dhannvād* is the same phenomenon one file over and was simply never visited: [t̪ə̀nːʋäːd̪]. The current `d` onset is neither the historical /dʱ/ nor the modern reflex — it matches no stage of the language.

---

### 6. ur — hello — pharyngeal `ʕ` does not exist in Urdu; the IPA is a copy of the Arabic cell
- **File:** words/hello.js line 88
- **Current:** `["السلام علیکم", "assalaːmu ʕalaikum"]`
- **Expected:** `["السلام علیکم", "assalaːmu alaikum"]` (fuller: `əssəlaːmu ələjkum`)
- **Why:** Urdu has no pharyngeal consonants; the letter ع in Urdu is realized as a vowel or zero, never [ʕ] (Masica 1991 §3; Wiktionary Urdu السلام علیکم /əs.sə.laː.mʊ ə.ləj.kʊm/). The `ʕ` belongs to the Arabic source: the same file's `ar_qur: ["السلام عليكم", "as.salaːmu ʕalajkum"]` (line 102) is correct *for Arabic*, and the Urdu cell visibly inherits it. Every other `ur` cell in the dataset respects the Urdu inventory (e.g. *vālid*, *śukriyā* with no Arabic pharyngeals). The same defect exists in the `dv` (Dhivehi) hello cell `assalaːmu ʕalaikum` — Dhivehi likewise has no /ʕ/ — flagged here as a rider since it was only ever quoted in passing in closed reviews, never reported.

---

### 7. ur — sun — `suːɾad͡ʒ` was reported in closed review #83 (issue 8), uncontested, but the fix was never written; still live
- **File:** words/sun.js line 88
- **Current:** `["سورج", "suːɾad͡ʒ"]`
- **Expected:** `["سورج", "suːɾəd͡ʒ"]`
- **Why:** Hindi and Urdu share the lexeme *sūraj*; the hi cell was corrected to `suːɾəd͡ʒ` (sun.js:82, applied in closed review #32 and re-confirmed in #83), and #83 issue 8 explicitly requested the identical schwa for `ur`, noting that all other hi/ur doublets in the 20-word set are byte-identical (*kuttaː*, *ãːkʰ*, *mãː*, *haːtʰ*, *ɡʱaɾ*, *kʰaːnaː*, *piːnaː*, *eːk*…). The dev response to #83 applied 19 edits but this one is not among them and was never argued against — a claimed-pass survivor. The hi/ur pair still disagrees on a single shared word.

---

### 8. km — house — ផ្ទះ: both cluster segments wrong — ផ is aspirated /pʰ/ and ទ is voiceless /t/, never [d]
- **File:** words/house.js line 146
- **Current:** `["ផ្ទះ", "pdɛəh"]`
- **Expected:** `["ផ្ទះ", "pʰtĕəh"]` (minimally `pʰtɛəh` if the file's ɛə is kept)
- **Why:** Khmer *phteah* is [pʰtĕəh] (Huffman 1970; Headley *phtĕăh*; Wiktionary /pʰteah/). The dataset's own km row proves both letter values: water.js:146 `km: ["ទឹក", "tɨk"]` — the very same letter ទ = `t`; fire.js:146 `km: ["ភ្លើង", "pʰlɤːŋ"]` — aspiration of an aspirated-series stop IS marked inside clusters; and `d` in the km row is reserved for ដ/ɗ (*daj* hand, *daəm* tree). So `pdɛəh` contradicts three sibling cells simultaneously. Distinct from closed review #44's held item on this cell, which concerned only the sesquisyllable analysis (`pə.tɛːh` vs flat cluster) — that hold says clusters are written flat; it never adjudicated the segment values, which are wrong in either analysis. The vowel `ĕə` matches the file's own moon cell `prĕəh` (moon.js:146).

---

### 9. kl — good — orthographic digraph ⟨nng⟩ = /ŋː/ misread as [nːɡ]
- **File:** words/good.js line 653
- **Current:** `["ajunngilaq", "ajunːɡilaq"]`
- **Expected:** `["ajunngilaq", "ajuŋːilaq"]`
- **Why:** In the standard (1973) Kalaallisut orthography ⟨ng⟩ spells the velar nasal /ŋ/ and ⟨nng⟩ spells its geminate /ŋː/ (Fortescue 1984 *West Greenlandic*, orthography section). *ajunngilaq* "it is good (lit. is-not-bad)" is [ajuŋːilaq]; there is no [nɡ] cluster in the word at all. The `kl` row elsewhere handles geminates correctly with `ː` (*qimmeq* → `qimːeq` dog.js:653, *assak* → `asːak` hand.js:653, *qaammat* → `qaːmːat` moon.js:659), so this is a one-cell digraph misparse, not a convention. Not touched by the Arctic specialist pass (#66) or any later review.

---

### 10. sga — water — the #04 fix imported the **Modern Irish** IPA into the Old Irish cell
- **File:** words/water.js line 939
- **Current:** `["uisce", "ˈɪʃcə"]`
- **Expected:** `["uisce", "ˈusʲkʲe"]` (or `ˈuskʲe` in the row's plainer style)
- **Why:** Closed review #04 correctly fixed the surface to attested *uisce* but supplied `ˈɪʃcə` as IPA — byte-near-identical to the modern `ga` cell `["uisce", "ɪʃcə"]` (water.js:168). For Old Irish this is anachronistic on three counts: (a) the stressed vowel of OIr *uisce* is /u/ — ⟨ui⟩ marks /u/ + a following palatalized consonant, not /ɪ/ (Thurneysen, *GOI*; Stifter 2006 *Sengoídelc* transcribes *uisce* /usʲkʲe/; eDIL s.v. *uisce*); (b) the symbol `c` for the slender stop is the *modern* convention — the `sga` row itself writes palatalization with ʲ and plain stops everywhere else: `maːθirʲ` (mother.js:945), `aθirʲ` (father.js:939), `maθʲ` (good.js:939), `kuː`, `kat`, `kran`, `eːskai`, `serk`; (c) `ʃ` likewise replaces the row-conventional /sʲ/. New primary-source evidence justifies re-opening this one applied value: as it stands the dataset shows Old and Modern Irish with identical pronunciations 1,200 years apart.

---

### 11. tg — cat — plain ⟨у⟩ transcribed `ʉ`, colliding with the row's own ⟨ӯ⟩ = `ʉː` mapping
- **File:** words/cat.js line 221
- **Current:** `["гурба", "ɡʉrba"]`
- **Expected:** `["гурба", "ɡurba"]`
- **Why:** The `tg` row keeps Tajik's two letters strictly apart everywhere else: plain ⟨у⟩ = `u` (*хуб* → `xub`, good.js:221) and the long/raised ⟨ӯ⟩ = `ʉː` (*хӯрдан* → `xʉːrdan` eat.js:221, *нӯшидан* → `nʉːʃidan` drink.js:221). *гурба* "cat" is spelled with plain ⟨у⟩, i.e. /u/ (Perry 2005 §1.1: у = [u~ʊ]; ӯ = [ɵ~ʉ]), so `ɡʉrba` assigns it the wrong phoneme — and even the wrong half of the wrong phoneme, since the row's ʉ is otherwise always long. One-character fix restores the row's own system. Not covered by the Iranian audit (#96).

---

### 12. egy — fire — *sḏt*: the palatal ḏ rendered as plain `d`, against the universal Egyptological convention
- **File:** words/fire.js line 517
- **Current:** `["𓊮", "sedet"]`
- **Expected:** `["𓊮", "sed͡ʒet"]` (untied `sedʒet` acceptable per the Coptic sibling's style)
- **Why:** The word behind the brazier sign (Gardiner Q7) is *sḏt* "fire, flame". The `egy` row uses Egyptological school pronunciation throughout (*nfr* → `nefeɾ`, *jꜥḥ* → `jaʕaħ`, *wꜥ* → `waːʕ`), and in that convention ḏ is the palatal affricate "dj" — the same value everyone uses in *Djoser*, *djed*-pillar (Loprieno 1995 §2.2: ḏ = /ɟ/ ≈ [dʒ]; Allen, *Middle Egyptian* §2.6). `sedet` with plain [d] erases the ḏ/d contrast that the transliteration system exists to preserve. Sibling support inside the dataset: the Coptic descendant row renders the cognate palatal as `dʒ` (cop hand ϭⲓϫ → `tʃidʒ`, hand.js:522 — ϫ continues exactly this ḏ). No prior review touched the cell.

---

### 13. ty — moon — Tahitian /r/ written plain `r` in two cells, flap `ɾ` in the other two — same row, same phoneme
- **File:** words/moon.js line 681 (also words/tree.js line 675)
- **Current:** `["marama", "marama"]` (moon); `["tumu rāʻau", "tumu raːʔau"]` (tree)
- **Expected:** `["marama", "maɾama"]`; `["tumu rāʻau", "tumu ɾaːʔau"]`
- **Why:** Tahitian has a single liquid, an alveolar flap [ɾ] (Tryon, *Conversational Tahitian*; Académie tahitienne descriptions: "r légèrement roulé/battu"). The `ty` row already encodes it as `ɾ` in hand.js:675 `["rima", "ɾima"]` and dog.js:675 `["ʻūrī", "ʔuːɾiː"]`, but moon and tree keep orthographic `r`. Cross-language clincher: the Māori cognate of this very word is transcribed with the flap — `mi: ["marama", "maɾama"]` (moon.js:179). The moon cell is additionally a surface=IPA verbatim copy, the recurring defect class that closed review #70 cleared elsewhere. Two-cell normalization completes the row.

---

### 14. iu — hand — geminate written with letter-doubling `ɡɡ` against the Inuit block's `ː` convention
- **File:** words/hand.js line 507 (same defect: words/moon.js line 513 `taqqiq`)
- **Current:** `["ᐊᒡᒑᖅ", "aɡɡaːq"]`
- **Expected:** `["ᐊᒡᒑᖅ", "aɡːaːq"]` (and moon.js `taqqiq` → `taqːiq`)
- **Why:** The Inuktitut row and the wider Inuit block mark consonant length with `ː`: `iu dog "qimːiq"` (dog.js:507), `ipk dog "qimːiq"`, and the entire `kl` column (`qimːeq`, `asːak`, `qaːmːat`, `ikualːaq`, `anaːna`). hand.js `aɡɡaːq` and moon.js `taqqiq` are the only Inuit cells that instead use romanization-style doubling, i.e. the orthographic Latin transliteration leaked into the IPA slot. The Arctic pass (#66) used `qimːiq`/`taqqiq` as quoted evidence in its uvular-lowering hold but never adjudicated the doubling-vs-ː split itself. Fortescue 1984 (length marked Cː) supports the majority convention; two cells normalize the whole family.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

All 14 items are clear IPA/transcription errors proven by the row's own siblings or established orthographic conventions (internal-consistency fixes), which the editing policy permits. Surface orthography left unchanged throughout; only IPA corrected. Each Current value verified verbatim against the live files.

- **120-1 vi eye** — applied (orchestrator). `["mắt","mak˧˥"]` → `["mắt","mat˧˥"]`. Northern (Hanoi) row keeps final ⟨t⟩ = [t]; -t→-k is Central/Southern. Siblings `vi_s mak˧˥` / `vi_c maːk˧˥` carry the merger correctly; row's own final-⟨t⟩ words use `t` (tốt, một, mặt). `vi` had duplicated the Southern value.
- **120-2 vi heart** — applied (orchestrator). `t͡ɕaj˧˥ tim˥` → `t͡ɕaːj˧˥ tim˥`. ⟨ai⟩ = /aː/+/j/ vs ⟨ay⟩ = /ă/+/j/; both dialect siblings have long /aː/ (`vi_c ʈaːj`, `vi_s ʈaːj`). Only the vowel length fixed; the held t͡ɕ vs ʈ merger convention untouched.
- **120-3 pt_eu eat** — applied (orchestrator). `kuˈmɛɾ` → `kuˈmeɾ`. EP -er infinitives carry close-mid /e/ under stress (Infopédia, Wiktionary PT); `pt_br komeɾ` already close. Vowel quality, not the prior stress-mark fix.
- **120-4 pt_eu drink** — applied (orchestrator). `bɨˈbɛɾ` → `bɨˈbeɾ`. Same rule; pre-tonic reduction /e/→[ɨ] already correct, only stressed nucleus height fixed.
- **120-5 pa thanks** — applied (orchestrator). `dənːʋɑːd` → `tə̀nːʋɑːd`. Punjabi tonogenesis: word-initial ਧ /dʱ/ → voiceless [t̪] + low tone (Masica 1991; Bhatia 1993). Same rule already applied to `pa house ਘਰ → kə̀ɾ` (closed #83). Current `d` matched no stage of the language.
- **120-6 ur hello** — applied (orchestrator). `assalaːmu ʕalaikum` → `assalaːmu alaikum` (minimal change, dropping the non-existent pharyngeal — chose minimal over the parenthetical fuller respelling to avoid over-rewriting). Urdu has no /ʕ/ (Masica 1991); ʕ was inherited from the Arabic `ar_qur` cell (left correct). **Rider also applied: dv hello** `assalaːmu ʕalaikum` → `assalaːmu alaikum` — Dhivehi likewise has no /ʕ/; identical unambiguous fix the reviewer explicitly flagged.
- **120-7 ur sun** — applied (orchestrator). `suːɾad͡ʒ` → `suːɾəd͡ʒ`. hi/ur share *sūraj*; `hi suːɾəd͡ʒ` already corrected (closed #32/#83). #83 issue 8's requested edit was a claimed-pass survivor never written; now aligned.
- **120-8 km house** — applied (orchestrator). `pdɛəh` → `pʰtĕəh`. ផ = aspirated /pʰ/ (cf. `fire pʰlɤːŋ`), ទ = /t/ (cf. `water ទឹក tɨk`); `d` in the km row is reserved for ដ/ɗ. Vowel ĕə matches `moon prĕəh`. Distinct from closed #44's flat-cluster hold.
- **120-9 kl good** — applied (orchestrator). `ajunːɡilaq` → `ajuŋːilaq`. Standard 1973 Kalaallisut orthography: ⟨nng⟩ = geminate /ŋː/ (Fortescue 1984). No [nɡ] cluster; row marks geminates with `ː` elsewhere (qimːeq, asːak, qaːmːat).
- **120-10 sga water** — applied (orchestrator). `ˈɪʃcə` → `ˈusʲkʲe`. Closed #04 imported Modern Irish IPA into the Old Irish cell. OIr *uisce* /usʲkʲe/ (Stifter 2006 *Sengoídelc*; Thurneysen GOI; eDIL); row uses ʲ + plain stops and /sʲ/ everywhere (`maːθirʲ`, `aθirʲ`, `maθʲ`), not modern `c`/`ʃ`/`ɪ`. New primary-source evidence justifies re-opening the applied value.
- **120-11 tg cat** — applied (orchestrator). `ɡʉrba` → `ɡurba`. *гурба* spelled with plain ⟨у⟩ = /u/; row reserves `ʉː` for ⟨ӯ⟩ (`xʉːrdan`, `nʉːʃidan`) and `u` for ⟨у⟩ (`xub`). Perry 2005 §1.1.
- **120-12 egy fire** — applied (orchestrator). `sedet` → `sed͡ʒet`. Egyptological school pronunciation (row uses it: `nefeɾ`, `jaʕaħ`); ḏ = palatal affricate /ɟ/≈[dʒ] (Loprieno 1995; Allen). Coptic descendant `cop hand ϫ → dʒ` corroborates. Used tied `d͡ʒ` per reviewer's primary expected.
- **120-13 ty moon & tree** — applied (orchestrator). `marama` → `maɾama` (moon); `tumu raːʔau` → `tumu ɾaːʔau` (tree). Tahitian single liquid = flap [ɾ]; row already uses ɾ in `rima ɾima`, `ʻūrī ʔuːɾiː`; Māori cognate `mi moon marama → maɾama`.
- **120-14 iu hand & moon** — applied (orchestrator). `aɡɡaːq` → `aɡːaːq` (hand); `taqqiq` → `taqːiq` (moon). Inuit block marks length with `ː` (`qimːiq`, `qimːeq`, `asːak`, `qaːmːat`); these two cells leaked Latin transliteration doubling into the IPA slot. Fortescue 1984 (Cː).

Open items deliberately left: 0.

---

## Reviewer round-2 response (再評価 round-2)

全14項目（+ dv rider）を 2026-06-11 時点の live データに対して verbatim 再照合し、主張された fix がすべて実ファイルに書き込まれていることを確認した。さらに各項目の根拠となる sibling / cross-language の値も grep で再検証し、行内・語族内の表記規約と矛盾しないことを確認した。

### Per-item judgements

- **120-1 vi eye** — ✓ accept. `words/eye.js:76` = `["mắt", "mat˧˥"]`. Siblings confirmed: `vi tốt tot˧˥` (good.js:76), `vi một mot˨˩` (one.js:76); `vi_s mak˧˥` / `vi_c maːk˧˥` keep the Central/Southern -t→-k merger. Northern final ⟨t⟩ now consistent.
- **120-2 vi heart** — ✓ accept. `heart.js:76` = `t͡ɕaːj˧˥ tim˥`. Long /aː/ restored; dialect siblings `vi_c ʈaːj˩˧`, `vi_s ʈaːj˧˥` both long. Held t͡ɕ vs ʈ merger left untouched, as promised.
- **120-3 pt_eu eat** — ✓ accept. `eat.js:99` = `kuˈmeɾ`; `pt_br komeɾ` close-mid. Correct.
- **120-4 pt_eu drink** — ✓ accept. `drink.js:99` = `bɨˈbeɾ`; pre-tonic [ɨ] retained, stressed nucleus raised to /e/.
- **120-5 pa thanks** — ✓ accept. `thanks.js:208` = `tə̀nːʋɑːd`. Matches the tonogenesis precedent `pa house ਘਰ kə̀ɾ` (house.js:215).
- **120-6 ur hello (+ dv rider)** — ✓ accept. `hello.js:88` ur = `assalaːmu alaikum`, `hello.js:217` dv = `assalaːmu alaikum`; `ar_qur ʕalajkum` (line 102) correctly left with the pharyngeal. Both non-pharyngeal languages cleaned.
- **120-7 ur sun** — ✓ accept. `sun.js:88` = `suːɾəd͡ʒ`, now byte-identical to `hi suːɾəd͡ʒ` (sun.js:82). hi/ur doublet reconciled.
- **120-8 km house** — ✓ accept. `house.js:146` = `pʰtĕəh`. ផ=pʰ confirmed by `fire pʰlɤːŋ`, ទ=t by `water ទឹក tɨk`.
- **120-9 kl good** — ✓ accept. `good.js:653` = `ajuŋːilaq`. Geminate-ː convention matches `qimːeq`/`asːak`/`qaːmːat`.
- **120-10 sga water** — ✓ accept. `water.js:939` = `ˈusʲkʲe`; row uses ʲ + plain stops (`maːθirʲ`, `aθirʲ`, `maθʲ`); now distinct from modern `ga uisce ɪʃcə` (water.js:168). Anachronism removed.
- **120-11 tg cat** — ✓ accept. `cat.js:221` = `ɡurba` (plain ⟨у⟩=/u/); ӯ-siblings `xʉːrdan`/`nʉːʃidan` keep `ʉː`, `xub` keeps `u`.
- **120-12 egy fire** — ✓ accept. `fire.js:517` = `sed͡ʒet`. ḏ palatal affricate per Egyptological convention; tied d͡ʒ matches reviewer's primary expected.
- **120-13 ty moon & tree** — ✓ accept. `moon.js:681` = `maɾama`, `tree.js:675` = `tumu ɾaːʔau`. Flap matches `rima ɾima`, `ʻūrī ʔuːɾiː`, and Māori cognate `mi marama maɾama` (moon.js:179). The moon surface=IPA copy defect is also resolved.
- **120-14 iu hand & moon** — ✓ accept. `hand.js:507` = `aɡːaːq`, `moon.js:513` = `taqːiq`. ː-length convention now matches `qimːiq` (iu/ipk dog.js).

### New issues

None. No new errors surfaced during verification; the surrounding rows are consistent with the applied fixes.

### Scorecard

| Verdict | Count |
|---|---|
| ✓ accept | 14 (+1 dv rider) |
| △ partial | 0 |
| ✗ reject | 0 |
| New issues | 0 |

All 14 reported items plus the dv-hello rider are fixed and verified in live data; surface orthography unchanged throughout, IPA-only corrections, each internally consistent with its row's own conventions. Nothing remains for the dev team.

**File status: CLOSED** — nothing left to address.
