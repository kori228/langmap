# Word Map Siberia / Russian Far East Verification Prompt

## Role

You are a linguistic data verifier specializing in Siberian, paleosiberian, and Russian Far East languages. You have access to authoritative sources including academic grammars, Wiktionary, Glossika, the Endangered Languages of Siberia project, the LingSib RAS database, and field-research publications by Vajda, Comrie, Anderson, Skribnik, and others.

## Task

For each language entry below, verify or correct the 20-word vocabulary, IPA transcriptions, native script spellings, native language name, and meta information (family, speakers, official status, script, English description). Output corrections as a unified diff or as a structured JSON patch.

## Languages added in batch 1 (Siberia / Russian Far East)

The following 12 entries were added to `wordmap_data.js` and `wordmap_meta.js` based on author's general knowledge. Some entries — especially the paleosiberian ones — have lower confidence and should be verified against authoritative sources.

### High confidence (Siberian Turkic + Mongolic + Tungusic with substantial documentation)
- `sah` — Sakha (Yakut)
- `tyv` — Tuvan
- `kjh` — Khakas
- `alt` — Altai (Southern)
- `bxr` — Buryat
- `evn` — Evenki
- `eve` — Even

### Lower confidence (Uralic Siberian + Paleosiberian — sparse public documentation)
- `yrk` — Tundra Nenets
- `kca` — Khanty (Kazym / Northern as standard)
- `ckt` — Chukchi
- `niv` — Nivkh
- `ket` — Ket

## Word list (20 entries each)

`water, fire, sun, moon, mother, father, eat, drink, love, heart, tree, house, dog, cat, hand, eye, hello, thanks, one, good`

## Verification checklist for each entry

1. **Native name** — confirm the language's autonym in its standard script is correct (Cyrillic for all 12)
2. **Geographic coords** — verify the chosen city is a representative center for the language community
3. **Word forms** — for each of the 20 words:
   - Native script spelling matches a citation form (typically nominative singular for nouns, infinitive or 3sg for verbs)
   - IPA transcription is broad-phonemic and consistent with the source dictionary
   - Where the term is a Russian loan (e.g. `cat`, sometimes `hello`/`thanks`), prefer the loan if no native term is in current use
4. **Cat/Hello/Thanks forms** — these are the most likely to be Russian loans for endangered languages. Either confirm the loan or supply a native form with citation
5. **Meta**:
   - `family` matches Glottolog/Ethnologue classification
   - `speakers` reflects the most recent census or estimate (cite year)
   - `official` reflects current legal status (regional / federal / none)
   - `script` lists all scripts in active use
   - `description` is factually accurate; correct any over-statement of vitality

## Specific concerns to verify

- **Sakha `cat`** — `куоска` is a Russian-origin loan (кошка). Confirm or replace
- **Buryat `moon`** — verify `һара` vs. `сар` for spelling/IPA consistency
- **Tuvan `eat`** — `чиир` is the future/aorist; verify if `чиири` (verbal noun) or another citation form is more appropriate
- **Altai `hello`** — `эзен` vs. `јакшы` greeting; both are attested
- **Evenki `love`** — `аявдави` is a verbal participle; confirm citation form for the noun "love"
- **Even** — most entries borrowed from Evenki structure; verify each is genuinely Even, not Evenki
- **Nenets `house`** — `мяˮ` with modifier letter ˮ for glottal stop; confirm orthography
- **Khanty `love`** — `наматты` is uncertain; verify
- **Chukchi entire entry** — high uncertainty. Verify against Dunn (2000) grammar or Bogoras dictionary
- **Nivkh entire entry** — verify against Gruzdeva grammar or Krejnovich dictionary; particularly `hello` and `thanks` may have no native form
- **Ket entire entry** — verify against Vajda's grammar; particularly `love`, `hello`, `thanks`

## Output format

For each correction needed, output:

```
LANG: <code>
FIELD: <words.<id> | meta.<key> | native | lat | lng | name>
CURRENT: <current value>
CORRECTED: <correct value>
SOURCE: <citation>
CONFIDENCE: <high|medium|low>
NOTES: <optional commentary>
```

If the entry is already correct, output `OK <code>:<field>`.
