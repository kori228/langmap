# Word Map Phase 2 Verification Prompt

## Role

You are a linguistic data verifier for major world languages with millions of speakers. You have access to authoritative sources including Wiktionary, language-family-specific reference grammars, the Glossika corpus, regional dictionaries, and academic publications.

## Task

Verify or correct the 20-word vocabulary, IPA, native script spelling, and meta information for the following 12 high-population languages added in Phase 2 to `wordmap_data.js` and `wordmap_meta.js`.

## Languages

| Code | Name | Speakers | Family | Notes |
|---|---|---:|---|---|
| `cjy` | Jin (Shanxi) | 64M | Sinitic | Taiyuan dialect basis; preserves rusheng |
| `hsn` | Xiang (Hunan) | 38M | Sinitic | Changsha dialect basis; New vs Old Xiang |
| `gan` | Gan (Jiangxi) | 22M | Sinitic | Nanchang dialect basis |
| `mai` | Maithili | 30–50M | Indo-Aryan | India 8th Schedule + Nepal |
| `awa` | Awadhi | 38M | Indo-Aryan | Tulsidas Ramcharitmanas literary base |
| `skr` | Saraiki | 26M | Indo-Aryan | implosives ɓ ɗ ʄ ɠ; Saraiki Naskh script |
| `sat` | Santali | 7M | Munda | Ol Chiki script (1925) |
| `mad` | Madurese | 7M | Austronesian | speech levels like Javanese |
| `hil` | Hiligaynon | 9M | Austronesian (Visayan) | Iloilo basis |
| `bal` | Balochi | 10M | Iranian (NW) | multiple varieties (W/E/S) |
| `ak` | Akan (Twi) | 9M | Niger-Congo (Kwa) | Asante Twi as standard |
| `mk` | Macedonian | 1.5M | Slavic (South) | analytic features unusual for Slavic |

## Word list

`water, fire, sun, moon, mother, father, eat, drink, love, heart, tree, house, dog, cat, hand, eye, hello, thanks, one, good`

## Verification checklist per entry

1. **Native script** — confirm autonym in standard script (Simplified Chinese, Devanagari, Saraiki Naskh, Ol Chiki, Latin, Arabic, Cyrillic respectively)
2. **Coordinates** — confirm chosen city is a representative center
3. **Words**:
   - Citation form (typically nominative/lemma)
   - Native script matches IPA
   - For Sinitic: tone marks should match the dialect's tone inventory (e.g. Taiyuan Jin has 5 tones, Changsha Xiang has 6, Nanchang Gan has 7)
   - For Saraiki: confirm correct use of implosives ɓ ɗ ʄ ɠ and retroflex ɳ ʈ ɖ
   - For Santali: confirm Ol Chiki characters are correct (this is the most likely typing-error source)
   - For Akan: confirm tone-bearing units and ATR vowel harmony surface forms
4. **Meta**:
   - Speaker count matches recent Ethnologue / census
   - Script list is complete
   - Description is accurate

## Specific concerns to verify

- **Jin/Xiang/Gan tone notation** — verify tone numbers correspond to the literary standard for each dialect (some sources use Chao numbers, others use tone categories)
- **Maithili `cat`** — `बिलाइ` vs `बिलाड़ि`; verify Mithila standard
- **Awadhi `cat`** — `बिलारि` (with retroflex र); verify
- **Saraiki `eat`/`drink`** — verb forms `کھاوݨ` `پیوݨ` use ݨ (retroflex n) at end; verify these are infinitive citation forms
- **Saraiki `house`** — `گھر` IPA: should it be aspirated /kʰər/ or implosive /ɠər/? Confirm
- **Santali words in Ol Chiki** — these are typed with Unicode SANTALI characters; verify each glyph matches the intended phoneme
- **Madurese `tree`** — `kajuh` is "wood"; for "tree" `bungkana` may be more accurate. Verify
- **Madurese `dog`** — `pate'` vs. `asok` — verify common-usage form
- **Hiligaynon `heart`** — `tagipusoon` vs. `kasingkasing` — verify
- **Balochi varieties** — entries are Western/Pakistan-leaning; verify whether to use Eastern Balochi or Southern Balochi standard if Quetta is the basis
- **Balochi `tree`** — `درچک` /daraːtʃk/; is this just "twig"? `درخت` /draxt/ from Persian may be more standard
- **Akan `cat`** — `agyinamoa` is Asante Twi; Fante uses `agyimaa` or similar. Confirm dialectal choice
- **Akan `hello`** — `akwaaba` literally means "welcome"; verify whether to use a true greeting like `maakye` (good morning) instead
- **Macedonian `tree`** — `дрво` IPA `ˈdərvɔ` with syllabic r vowel; verify
- **Macedonian `house`** — `куќа` IPA — the ќ is /c/ palatal stop, not /kj/; verify

## Output format

For each correction, output:

```
LANG: <code>
FIELD: words.<id> | meta.<key> | native | lat | lng | name
CURRENT: <current value>
CORRECTED: <correct value>
SOURCE: <citation>
CONFIDENCE: high|medium|low
```

If correct, output `OK <code>:<field>`.
