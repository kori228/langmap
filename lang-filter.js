/*
 * lang-filter.js — Linguistic filter panel for the Word Map.
 *
 * Adds a floating "🔍 フィルター" button (top-left). Clicking it opens a panel
 * with multi-select chip groups for linguistically meaningful categories:
 *   - 語族 (family)         — auto-extracted from LANG_DATA[*].meta.family
 *   - 文字 (script type)    — auto-extracted from meta.script via keywords
 *   - 語順 (word order)     — hand-curated for ~180 well-known languages
 *   - 声調 (tonal)          — hand-curated set of tonal languages
 *   - 形態論 (morphology)   — hand-curated for the same major set
 *   - 話者数 (speaker tier) — parsed from meta.speakers
 *
 * Filter behavior: AND across categories, OR within. Languages matching all
 * active filters keep full opacity; non-matching dim to 0.15 so the spatial
 * context is preserved. Hand-curated categories treat unknown-tagged langs
 * as non-matching (you only see what you explicitly opted into).
 *
 * No edits required to wordmap.html beyond loading this script and adding
 * `data-code` to the 2D label HTML.
 */
(function () {
    'use strict';

    // ----- Typological data ----------------------------------------------
    //
    // Word order (basic transitive clause): SOV, SVO, VSO, VOS, OVS, OSV
    // Tonal: true if phonemic tones distinguish words
    // Morph: 'isolating' | 'agglutinative' | 'fusional' | 'polysynthetic'
    //
    // Two-tier resolution to cover all 526 languages:
    //   1. FAMILY_DEFAULTS: applied based on meta.family. Most languages in a
    //      family share basic typological tendencies, so a default per family
    //      gives instant coverage for every language. Looked up by full
    //      family string first (e.g. "Sinitic (Min Nan)"), then top-level.
    //   2. F[code]: per-language overrides, applied after the family default.
    //      Used for outliers (e.g. Mandarin within Sinitic, Khmer within
    //      Austroasiatic, Punjabi within Indo-Aryan, etc.).

    // Family defaults — keyed by either full meta.family or its top-level form
    const FAMILY_DEFAULTS = {
        // Indo-European subbranches
        'Romance':         { wo: 'SVO', tone: false, morph: 'fusional' },
        'Germanic':        { wo: 'SVO', tone: false, morph: 'fusional' },
        'Germanic (East)': { wo: 'SVO', tone: false, morph: 'fusional' },
        'Germanic (creole-influenced)': { wo: 'SVO', tone: false, morph: 'isolating' },
        'Slavic':          { wo: 'SVO', tone: false, morph: 'fusional' },
        'Slavic (South)':  { wo: 'SVO', tone: false, morph: 'fusional' },
        'Slavic (West, Sorbian)': { wo: 'SVO', tone: false, morph: 'fusional' },
        'Slavic (West, Lechitic)': { wo: 'SVO', tone: false, morph: 'fusional' },
        'Indo-Aryan':      { wo: 'SOV', tone: false, morph: 'fusional' },
        'Indo-Aryan (Western)': { wo: 'SOV', tone: false, morph: 'fusional' },
        'Indo-Aryan (Eastern)': { wo: 'SOV', tone: false, morph: 'fusional' },
        'Indo-Aryan (Eastern, Bihari)': { wo: 'SOV', tone: false, morph: 'fusional' },
        'Indo-Aryan (Southern)': { wo: 'SOV', tone: false, morph: 'fusional' },
        'Indo-Aryan (Dardic)': { wo: 'SOV', tone: false, morph: 'fusional' },
        'Indo-Aryan (NW, Pahari/Punjabi-related)': { wo: 'SOV', tone: false, morph: 'fusional' },
        'Iranian':         { wo: 'SOV', tone: false, morph: 'fusional' },
        'Iranian (Northwestern)': { wo: 'SOV', tone: false, morph: 'fusional' },
        'Iranian (Northwestern, Caspian)': { wo: 'SOV', tone: false, morph: 'fusional' },
        'Iranian (Eastern)': { wo: 'SOV', tone: false, morph: 'fusional' },
        'Celtic':          { wo: 'VSO', tone: false, morph: 'fusional' },
        'Hellenic':        { wo: 'SVO', tone: false, morph: 'fusional' },
        'Baltic':          { wo: 'SVO', tone: false, morph: 'fusional' },
        'Italic':          { wo: 'SOV', tone: false, morph: 'fusional' },   // Latin
        'Anatolian (Indo-European)': { wo: 'SOV', tone: false, morph: 'fusional' },
        'Indo-European':   { wo: 'SVO', tone: false, morph: 'fusional' },   // generic
        'Indo-European (Armenian)':       { wo: 'SOV', tone: false, morph: 'fusional' },
        'Indo-European (isolate branch)': { wo: 'SOV', tone: false, morph: 'fusional' }, // Albanian/Armenian etc.
        'Tocharian (Indo-European)': { wo: 'SOV', tone: false, morph: 'fusional' },
        // Sino-Tibetan
        'Sinitic':         { wo: 'SVO', tone: true,  morph: 'isolating' },
        'Sino-Tibetan':    { wo: 'SOV', tone: true,  morph: 'agglutinative' },
        'Sino-Tibetan (Loloish)':       { wo: 'SOV', tone: true,  morph: 'isolating' },
        'Sino-Tibetan (Tibeto-Burman)': { wo: 'SOV', tone: true,  morph: 'agglutinative' },
        'Sino-Tibetan (Tibeto-Burman, Bodo-Garo)': { wo: 'SOV', tone: true,  morph: 'agglutinative' },
        'Sino-Tibetan (Tibeto-Burman, Kuki-Chin)': { wo: 'SOV', tone: true,  morph: 'agglutinative' },
        'Sino-Tibetan (Tibeto-Burman, Bodish)':    { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Sino-Tibetan (Karenic)':       { wo: 'SVO', tone: true,  morph: 'isolating' },
        'Sino-Tibetan (Naic/Loloish)':  { wo: 'SOV', tone: true,  morph: 'isolating' },
        'Sino-Tibetan (Tangut)':        { wo: 'SOV', tone: true,  morph: 'isolating' },
        'Sino-Tibetan (Pyu)':           { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Sino-Tibetan (Tibeto-Burman, Burmish)': { wo: 'SOV', tone: true,  morph: 'isolating' },
        // All Sinitic sub-variants explicitly tonal SVO
        // Some entries in the data list these as `Sino-Tibetan (Min Nan)`
        // etc. (parent name) rather than `Sinitic (...)`. Without these
        // explicit aliases the lookup falls back to plain `Sino-Tibetan`
        // (SOV+tonal+agglutinative) which is wrong for Sinitic varieties.
        'Sino-Tibetan (Min Nan)':       { wo: 'SVO', tone: true, morph: 'isolating' },
        'Sino-Tibetan (Wu)':            { wo: 'SVO', tone: true, morph: 'isolating' },
        'Sino-Tibetan (Yue)':           { wo: 'SVO', tone: true, morph: 'isolating' },
        'Sinitic (Mandarin)':           { wo: 'SVO', tone: true, morph: 'isolating' },
        'Sinitic (Mandarin, Jianghuai)':{ wo: 'SVO', tone: true, morph: 'isolating' },
        'Sinitic (Mandarin, Ji-Lu)':    { wo: 'SVO', tone: true, morph: 'isolating' },
        'Sinitic (Mandarin, Lan-Yin)':  { wo: 'SVO', tone: true, morph: 'isolating' },
        'Sinitic (Min Nan, Chao-Shan)': { wo: 'SVO', tone: true, morph: 'isolating' },
        'Sinitic (Min Bei)':            { wo: 'SVO', tone: true, morph: 'isolating' },
        'Sinitic (Pu-Xian Min)':        { wo: 'SVO', tone: true, morph: 'isolating' },
        'Sinitic (Yue, Sze Yap)':       { wo: 'SVO', tone: true, morph: 'isolating' },
        'Sinitic (Wu, Oujiang)':        { wo: 'SVO', tone: true, morph: 'isolating' },
        'Sinitic (Wu, Taihu)':          { wo: 'SVO', tone: true, morph: 'isolating' },
        'Sinitic (Hui)':                { wo: 'SVO', tone: true, morph: 'isolating' },
        'Sinitic (Pinghua)':            { wo: 'SVO', tone: true, morph: 'isolating' },
        // Niger-Congo / Bantu
        'Niger-Congo':            { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Niger-Congo (Bantu)':    { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Niger-Congo (Bantu, Nguni)':           { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Niger-Congo (Bantu, Sotho-Tswana)':    { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Niger-Congo (Bantu, Tswa-Ronga)':      { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Niger-Congo (Bantu, A.70 Yaounde-Fang)':{wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Niger-Congo (Bantu, R10)':             { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Niger-Congo (Bantu, H21)':             { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Niger-Congo (Bantu, R31)':             { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Niger-Congo (Bantu, M64)':             { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Niger-Congo (Bantu, A70 Beti)':        { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Niger-Congo (Bantu, S10 Shona)':       { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Niger-Congo (Atlantic)':               { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Niger-Congo (Mande)':                  { wo: 'SOV', tone: true, morph: 'isolating' },
        'Niger-Congo (Mande, Manding)':         { wo: 'SOV', tone: true, morph: 'isolating' },
        'Niger-Congo (Mande, Southwestern)':    { wo: 'SOV', tone: true, morph: 'isolating' },
        'Niger-Congo (Kwa)':                    { wo: 'SVO', tone: true, morph: 'isolating' },
        'Niger-Congo (Kwa, Gbe)':               { wo: 'SVO', tone: true, morph: 'isolating' },
        'Niger-Congo (Volta-Niger, Gbe)':       { wo: 'SVO', tone: true, morph: 'isolating' },
        'Atlantic (Niger-Congo)':               { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Bantu':                  { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Bantu (Nguni)':          { wo: 'SVO', tone: true, morph: 'agglutinative' },
        // Afro-Asiatic
        'Afro-Asiatic':           { wo: 'VSO', tone: false, morph: 'fusional' },
        'Afro-Asiatic (Chadic)':  { wo: 'SVO', tone: true,  morph: 'fusional' },
        'Afro-Asiatic (Berber)':  { wo: 'VSO', tone: false, morph: 'fusional' },
        'Afro-Asiatic (Cushitic)':{ wo: 'SOV', tone: true,  morph: 'agglutinative' },
        'Semitic':                { wo: 'VSO', tone: false, morph: 'fusional' },
        'Cushitic':               { wo: 'SOV', tone: true,  morph: 'agglutinative' },
        // Austronesian
        'Austronesian':                                  { wo: 'SVO', tone: false, morph: 'agglutinative' },
        'Austronesian (Polynesian)':                     { wo: 'VSO', tone: false, morph: 'isolating' },
        'Austronesian (Polynesian, Eastern)':            { wo: 'VSO', tone: false, morph: 'isolating' },
        'Austronesian (Polynesian, Tongic)':             { wo: 'VSO', tone: false, morph: 'isolating' },
        'Austronesian (Polynesian, Ellicean)':           { wo: 'VSO', tone: false, morph: 'isolating' },
        'Austronesian (Polynesian, Tahitic)':            { wo: 'VSO', tone: false, morph: 'isolating' },
        'Austronesian (Micronesian)':                    { wo: 'SVO', tone: false, morph: 'agglutinative' },
        'Austronesian (Western Malayo-Polynesian)':      { wo: 'SVO', tone: false, morph: 'agglutinative' },
        'Austronesian (Central Malayo-Polynesian)':      { wo: 'SVO', tone: false, morph: 'agglutinative' },
        'Austronesian (Malayo-Polynesian)':              { wo: 'SVO', tone: false, morph: 'agglutinative' },
        'Austronesian (Malayo-Polynesian, Malayic)':     { wo: 'SVO', tone: false, morph: 'agglutinative' },
        'Austronesian (Malayic)':                        { wo: 'SVO', tone: false, morph: 'agglutinative' },
        'Austronesian (Visayan)':                        { wo: 'VSO', tone: false, morph: 'agglutinative' },
        'Austronesian (Chamic)':                         { wo: 'SVO', tone: false, morph: 'isolating' },
        'Austronesian (South Sulawesi)':                 { wo: 'SVO', tone: false, morph: 'agglutinative' },
        'Austronesian (Central Philippine)':             { wo: 'VSO', tone: false, morph: 'agglutinative' },
        // Austroasiatic
        'Austroasiatic':            { wo: 'SVO', tone: false, morph: 'isolating' },
        'Austroasiatic (Munda)':    { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Austroasiatic (Mon-Khmer, Monic)': { wo: 'SVO', tone: false, morph: 'isolating' },
        // Tai-Kadai / Hmong-Mien
        'Kra-Dai':                  { wo: 'SVO', tone: true, morph: 'isolating' },
        'Kra-Dai (Tai, Southwestern)': { wo: 'SVO', tone: true, morph: 'isolating' },
        'Hmong-Mien':               { wo: 'SVO', tone: true, morph: 'isolating' },
        // Turkic / Mongolic / Tungusic
        'Turkic':                  { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Turkic (Kipchak)':        { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Turkic (Kipchak, Caucasus)': { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Mongolic':                { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Mongolic (Western/Oirat)':{ wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Mongolic (Para-Mongolic)':{ wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Tungusic':                { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Tungusic (Northern)':     { wo: 'SOV', tone: false, morph: 'agglutinative' },
        // Uralic
        'Uralic':                  { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Uralic (Finnic)':         { wo: 'SVO', tone: false, morph: 'agglutinative' },
        'Uralic (Sámi)':           { wo: 'SVO', tone: false, morph: 'agglutinative' },
        'Uralic (Ugric)':          { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Uralic (Permic)':         { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Uralic (Mari)':           { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Uralic (Mordvinic)':      { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Uralic (Samoyedic)':      { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Uralic (Ob-Ugric)':       { wo: 'SOV', tone: false, morph: 'agglutinative' },
        // Other Eurasian
        'Dravidian':               { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Japonic':                 { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Japonic (Ryukyuan)':      { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Koreanic':                { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Kartvelian':              { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'NE Caucasian':            { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'NE Caucasian (Nakh)':     { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'NE Caucasian (Avar-Andic)': { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'NE Caucasian (Lezgic)':   { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'NE Caucasian (Dargic)':   { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'NE Caucasian (Lak-Dargic)': { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'NW Caucasian (Circassian)': { wo: 'SOV', tone: false, morph: 'polysynthetic' },
        'NW Caucasian (Abkhaz-Abaza)':{ wo: 'SOV', tone: false, morph: 'polysynthetic' },
        // Americas
        'Uto-Aztecan':             { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Mayan':                   { wo: 'VOS', tone: false, morph: 'agglutinative' },
        "Mayan (K'ichean)":        { wo: 'VOS', tone: false, morph: 'agglutinative' },
        'Mayan (Yucatecan)':       { wo: 'SVO', tone: false, morph: 'agglutinative' },
        'Mayan (Cholan-Tseltalan)':{ wo: 'VOS', tone: false, morph: 'agglutinative' },
        'Quechuan':                { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Aymaran':                 { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Chibchan':                { wo: 'SOV', tone: false, morph: 'agglutinative' },
        // Meroitic — language isolate / debated affiliation
        'Meroitic':                { wo: 'SVO', tone: false, morph: 'agglutinative' },
        // Old Nubian — Eastern Sudanic (Nilo-Saharan)
        'Nilo-Saharan (Eastern Sudanic)': { wo: 'SOV', tone: true,  morph: 'agglutinative' },
        'Tupian':                  { wo: 'SVO', tone: false, morph: 'polysynthetic' },
        'Eskimo-Aleut':            { wo: 'SOV', tone: false, morph: 'polysynthetic' },
        'Eskimo-Aleut (Inuit)':    { wo: 'SOV', tone: false, morph: 'polysynthetic' },
        'Algic':                   { wo: 'SOV', tone: false, morph: 'polysynthetic' },
        'Algic (Algonquian)':      { wo: 'SOV', tone: false, morph: 'polysynthetic' },
        'Iroquoian':               { wo: 'SOV', tone: true,  morph: 'polysynthetic' },
        'Siouan':                  { wo: 'SOV', tone: false, morph: 'polysynthetic' },
        'Na-Dené (Athabaskan)':    { wo: 'SOV', tone: true,  morph: 'polysynthetic' },
        'Oto-Manguean (Mixtecan)': { wo: 'VSO', tone: true,  morph: 'isolating' },
        'Oto-Manguean (Zapotecan)':{ wo: 'VSO', tone: true,  morph: 'isolating' },
        'Araucanian (isolate or small family)': { wo: 'SVO', tone: false, morph: 'agglutinative' },
        // Africa
        'Nilo-Saharan':                       { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Nilo-Saharan (Western Nilotic)':     { wo: 'SVO', tone: true, morph: 'agglutinative' },
        'Nilo-Saharan (Eastern Nilotic, Maa)':{ wo: 'VSO', tone: true, morph: 'agglutinative' },
        'Nilo-Saharan (Saharan)':             { wo: 'SOV', tone: true, morph: 'agglutinative' },
        'Khoe-Kwadi (Khoisan)':               { wo: 'SOV', tone: true, morph: 'agglutinative' },
        // Pacific
        'Pama-Nyungan':                  { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Pama-Nyungan (Wati)':           { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Pama-Nyungan (Ngumpin-Yapa)':   { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Trans-New Guinea':              { wo: 'SOV', tone: false, morph: 'agglutinative' },
        // Constructed
        'Constructed (a posteriori)':    { wo: 'SVO', tone: false, morph: 'agglutinative' },
        'Constructed (artistic)':        { wo: 'SVO', tone: false, morph: 'agglutinative' },
        'Constructed (logical)':         { wo: 'SVO', tone: false, morph: 'agglutinative' },
        'Constructed (philosophical)':   { wo: 'SVO', tone: false, morph: 'isolating' },
        // Creoles
        'English-based creole':          { wo: 'SVO', tone: false, morph: 'isolating' },
        'French-based creole':           { wo: 'SVO', tone: false, morph: 'isolating' },
        'Iberian-based creole':          { wo: 'SVO', tone: false, morph: 'isolating' },
        // Other
        'Yeniseian':                     { wo: 'SOV', tone: false, morph: 'polysynthetic' },
        'Chukotko-Kamchatkan':           { wo: 'SOV', tone: false, morph: 'polysynthetic' },
        'Proto-language (reconstructed)':{ wo: 'SOV', tone: false, morph: 'fusional' },
        // Smaller families & isolates
        'Muskogean':                     { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Na-Dené (Athabaskan, Southern)':{ wo: 'SOV', tone: true,  morph: 'polysynthetic' },
        'Na-Dené (Athabaskan, Northern)':{ wo: 'SOV', tone: true,  morph: 'polysynthetic' },
        'Iwaidjan or unclassified':      { wo: 'SOV', tone: false, morph: 'polysynthetic' },
        'Arawakan (Northern)':           { wo: 'SVO', tone: false, morph: 'polysynthetic' },
        'Arawakan (Northern, with Carib lexical layer)': { wo: 'SVO', tone: false, morph: 'polysynthetic' },
        'Mura (isolate)':                { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Chocoan':                       { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Hurro-Urartian (separate from IE/Semitic)': { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Language isolate (Elamite)':    { wo: 'SOV', tone: false, morph: 'agglutinative' },
        'Wakashan (Northern)':           { wo: 'VSO', tone: false, morph: 'polysynthetic' },
        'Khoisan (proposed isolate or with Hadza)': { wo: 'SOV', tone: true, morph: 'agglutinative' },
        'Salishan (Coast Salish, Central)':{ wo: 'VSO', tone: false, morph: 'polysynthetic' },
        'Tsimshianic (Maritime)':        { wo: 'VSO', tone: false, morph: 'polysynthetic' },
        'Oto-Manguean (Otomian)':        { wo: 'VSO', tone: true,  morph: 'isolating' },
        'Language isolate':              { wo: 'SOV', tone: false, morph: 'agglutinative' },  // generic isolate fallback (Basque, Burushaski, etc.)
        'Language isolate (or proposed Sandawe-Hadza)': { wo: 'SOV', tone: true, morph: 'agglutinative' },
    };

    // Coverage focuses on well-known languages and the major dialects already
    // in the wordmap. F[code] entries below act as overrides on top of the
    // family default and as canonical references for a few isolates.

    const F = {};
    function set(codes, props) {
        if (typeof codes === 'string') codes = [codes];
        for (const c of codes) F[c] = Object.assign({}, F[c] || {}, props);
    }

    // --- SVO ---
    set(['en','en_aave','en_south','en_app','en_ie','en_sco','en_yk','en_ck',
         'en_au','en_in','en_sg','en_ang','enm','sco','jam','hwc','pcm'],
        { wo: 'SVO', tone: false, morph: 'fusional' });
    set(['de','de_at','de_by','de_gsw','nds','nl','af','fy','sv','no','nn','da','is','fo','yi','got'],
        { wo: 'SVO', tone: false, morph: 'fusional' });
    set(['fr','fr_qc','fr_ch','fr_be','fr_af','it','nap','scn','vec','sc','rm',
         'ca','oc','gl','pt_eu','pt_br','es_eu','es_mx','es_an','es_ar','es_co',
         'es_cl','es_pe','es_cu','la','lad','ro'],
        { wo: 'SVO', tone: false, morph: 'fusional' });
    set(['ru','uk','be','pl','cs','sk','sl','bg','mk','sr','hr','bs','cu'],
        { wo: 'SVO', tone: false, morph: 'fusional' });
    set(['zh','zh_sc','zh_db','wuu','nan','yue','cdo','hak_cn','zh_song','zh_han','zh_tang'],
        { wo: 'SVO', tone: true, morph: 'isolating' });
    set(['vi','vi_c','vi_s','vi_nom'], { wo: 'SVO', tone: true, morph: 'isolating' });
    // Old Chinese predates tonogenesis (tones developed in Middle Chinese);
    // the Sinitic family default (SVO+tonal) needs an override.
    set(['och'], { wo: 'SVO', tone: false, morph: 'isolating' });
    set(['th','th_isan','th_n','th_s','lo','za'], { wo: 'SVO', tone: true, morph: 'isolating' });
    // Western Malayo-Polynesian + creoles: SVO
    set(['id','ms','jv','su','tpi'],
        { wo: 'SVO', tone: false, morph: 'agglutinative' });
    // Polynesian and Philippine languages: VSO/VOS predicate-initial
    set(['tl','ceb','ilo','fj','sm','mi','haw','to','pau'],
        { wo: 'VSO', tone: false, morph: 'agglutinative' });
    set(['zu','xh','sn','ig','yo','ha','ln','ny','rw','om','so','ti','tig','tir'],
        { wo: 'SVO', tone: true, morph: 'agglutinative' });
    // Notable Niger-Congo / Semitic exceptions to the family tonal default:
    // Swahili, Wolof, and Amharic are non-tonal (per WALS).
    set(['sw'], { wo: 'SVO', tone: false, morph: 'agglutinative' });
    set(['wo'], { wo: 'SVO', tone: false, morph: 'agglutinative' });
    set(['am'], { wo: 'SOV', tone: false, morph: 'fusional' });
    set(['eo','tok','jbo','ht','pap'],
        { wo: 'SVO', tone: false, morph: 'isolating' });
    // Klingon: famously OVS by design.
    set(['tlh'], { wo: 'OVS', tone: false, morph: 'agglutinative' });
    set(['el','el_grc','sq','arc','akk','phn','egy','el_med','grc','cop'],
        { wo: 'SVO', tone: false, morph: 'fusional' });
    set(['mt','tig'], { wo: 'SVO', tone: false, morph: 'fusional' });

    // --- SOV ---
    set(['ja','ja_osa','ja_aom','ja_oki','ja_hak','ja_edo','ja_kyo','ja_hir',
         'ja_mvi','ja_rys','ja_heian','ain'],
        { wo: 'SOV', tone: false, morph: 'agglutinative' });
    set(['ko','ko_kp','ko_bus','ko_jeju','ko_mid','ko_em','ko_yb'],
        { wo: 'SOV', tone: false, morph: 'agglutinative' });
    set(['tr','az','tk','kk','ky','uz','mn','mn_cn','mnc','ug','sah'],
        { wo: 'SOV', tone: false, morph: 'agglutinative' });
    // Hungarian is Ugric (SOV-leaning). Finnish, Estonian, and Northern Sámi
    // are Finnic/Sámi (SVO) — leave them to fall back to the family default
    // rather than wrongly bundling them in.
    set(['hu'], { wo: 'SOV', tone: false, morph: 'agglutinative' });
    set(['hi','ur','bn','gu','mr','ne','si','sa','pi','as','or','sd','ks'],
        { wo: 'SOV', tone: false, morph: 'fusional' });
    // Punjabi is Indo-Aryan SOV but uniquely tonal among major Indo-Aryans.
    set(['pa'], { wo: 'SOV', tone: true, morph: 'fusional' });
    set(['fa','ckb','ku','ps','tg'],
        { wo: 'SOV', tone: false, morph: 'fusional' });
    set(['hy','ka','eu','tr_ott'],
        { wo: 'SOV', tone: false, morph: 'agglutinative' });
    set(['ta','te','ml','kn'],
        { wo: 'SOV', tone: false, morph: 'agglutinative' });
    set(['my','bo','ii','dz','new'],
        { wo: 'SOV', tone: true, morph: 'isolating' });
    set(['km','khm'],
        { wo: 'SVO', tone: false, morph: 'isolating' });
    set(['qu','ay','gn','myn'],
        { wo: 'SOV', tone: false, morph: 'agglutinative' });
    set(['nci','iu','sux','akk','hit','sa_ved','non'],
        { wo: 'SOV', tone: false, morph: 'agglutinative' });
    set(['hit','sux'],
        { wo: 'SOV', tone: false, morph: 'agglutinative' });

    // --- VSO ---
    set(['ar','ar_eg','ar_lev','ar_ma','ar_gulf','ar_iq','ar_sd','ar_tn'],
        { wo: 'VSO', tone: false, morph: 'fusional' });
    set(['he','he_anc'],
        { wo: 'VSO', tone: false, morph: 'fusional' });
    set(['ga','gd','cy','br'],
        { wo: 'VSO', tone: false, morph: 'fusional' });
    set(['mg','tgl_classical'],
        { wo: 'VOS', tone: false, morph: 'agglutinative' });

    // --- VOS / OVS / free ---
    set(['nv'], { wo: 'SOV', tone: true, morph: 'polysynthetic' });
    set(['chr'], { wo: 'SOV', tone: true, morph: 'polysynthetic' });
    set(['kal','iku','iu'], { wo: 'SOV', tone: false, morph: 'polysynthetic' });

    // Other tonal-language overrides (in case wo not yet covered)
    set(['hmn','ii','hak_cn','wuu','yue','cdo','nan','zh_db','zh_sc'],
        { tone: true });
    set(['sgs','lt','lv'],
        { wo: 'SVO', tone: false, morph: 'fusional' });
    set(['lt','lv','lt_old'], { wo: 'SVO' });

    // --- Morphology overrides for misc ---
    set(['eu','ka'], { morph: 'agglutinative' });

    // ----- Script type auto-detection from meta.script --------------------

    // Returns an Array<string> of script categories. A language with multiple
    // writing systems (Punjabi: Gurmukhi+Shahmukhi, Malay: Latin+Jawi, Hausa:
    // Latin+Ajami, etc.) gets every applicable tag. Patterns are anchored so
    // bare "Han" doesn't match "Shan"/"Hanacaraka" and bare "Traditional"
    // doesn't match "Traditional Mongolian".
    function detectScript(scriptStr) {
        if (!scriptStr) return [];
        const s = String(scriptStr);
        const tags = new Set();

        // Han (Chinese characters and derivatives — Hanzi, Kanji, Hanja,
        // Chữ Nôm, Sawndip). Avoid matching "Shan" / "Hanacaraka" /
        // "Traditional Mongolian" by requiring specific compound phrases.
        if (/Chinese characters|Han characters|Hanzi|Simplified Chinese|Traditional Chinese|Simplified\/Traditional Chinese|Chinese\/Peng|Chữ Nôm|Hanja|Kanji|Sawndip|Hing-hua romanization|Peng'im/i.test(s)) tags.add('Han');

        // Kana (Japanese syllabaries, distinct from Han kanji)
        if (/Hiragana|Katakana|\bkana\b/i.test(s)) tags.add('Kana');

        if (/Hangul/i.test(s)) tags.add('Hangul');
        if (/Cyrillic/i.test(s)) tags.add('Cyrillic');

        // Arabic-derived (Naskh, Nastaliq, Jawi, Perso-Arabic, Ajami, Adlam,
        // Shahmukhi, Saraiki Naskh, etc.)
        if (/Arabic|Nastaliq|Naskh|Jawi|Perso-Arabic|Pegon|Ajami|Adlam|Shahmukhi/i.test(s)) tags.add('Arabic-derived');

        // Brahmic (Indic + SE Asian Brahmi descendants). Includes Mon,
        // Shan, Karen, Eastern Nagari/Assamese, Cham, Lontara, etc.
        if (/Devanagari|Bengali|Eastern Nagari|Tamil|Telugu|Kannada|Malayalam|Gujarati|Gurmukhi|Oriya|Odia|Sinhala|\bThai\b|\bLao\b|Khmer|Burmese|Tibetan|Brahmi|Brāhmī|Brahmic|Kawi|Balinese|Javanese script|Carakan|Sharada|Mithilakshar|Tirhuta|Sylheti|Kaithi|Ranjana|Bodo Devanagari|Meitei|Tigalari|Mon script|Shan script|Karen script|Cham|Lontara|Aksara Bugis|Hanacaraka|Batak|Surat Batak|Aksara Sasak|Lampung script|Limbu|Takri|Multani|Old Khmer|Brahmi-derived/i.test(s)) tags.add('Brahmic');

        if (/Hebrew/i.test(s)) tags.add('Hebrew');
        if (/Greek/i.test(s)) tags.add('Greek');
        if (/Armenian/i.test(s)) tags.add('Armenian');
        if (/Georgian/i.test(s)) tags.add('Georgian');
        if (/Ethiopic|Ge.?ez|Ge'ez/i.test(s)) tags.add('Ethiopic');
        if (/Coptic/i.test(s)) tags.add('Coptic');
        if (/Cherokee/i.test(s)) tags.add('Cherokee');
        if (/Syriac/i.test(s)) tags.add('Syriac');
        if (/Tifinagh/i.test(s)) tags.add('Tifinagh');
        if (/N'Ko|N.Ko/i.test(s)) tags.add("N'Ko");
        if (/Yi syllabary|Yi script/i.test(s)) tags.add('Yi');
        if (/Cree syllabics|Inuktitut syllabics|Canadian Aboriginal Syllabics/i.test(s)) tags.add('Canadian Aboriginal Syllabics');

        // Vertical Mongolian script family (Old Uyghur → Mongolian → Manchu
        // → Phags-pa). Manchu the language is Tungusic but its script is
        // Mongolic-derived; tag the script, not the language family.
        if (/Mongolian script|Traditional Mongolian|Mongolian alphabet|Phags-pa|\bManchu\b|Uyghur-Mongolian|Old Uyghur|Clear Script/i.test(s)) tags.add('Mongolian-derived');

        if (/Cuneiform/i.test(s)) tags.add('Cuneiform');
        if (/Egyptian hieroglyph|Anatolian hieroglyph|\bHieroglyph/i.test(s)) tags.add('Hieroglyphs');
        if (/Linear B|Linear A|Linear Elamite/i.test(s)) tags.add('Aegean syllabary');
        if (/Maya hieroglyph|Mayan glyphs|Maya script/i.test(s)) tags.add('Mayan');
        if (/Old Turkic|Orkhon|runiform/i.test(s)) tags.add('Old Turkic');
        if (/Tangut/i.test(s)) tags.add('Tangut');

        // Aramaic-derived (Sogdian, Pahlavi, Parthian, Manichaean) — distinct
        // from Arabic-derived and Mongolian-derived branches of the same root.
        if (/Sogdian alphabet|Sogdian script|Manichaean|Pahlavi|Parthian script|Aramaic-derived/i.test(s)) tags.add('Aramaic-derived');

        // Other ancient / specialized scripts
        if (/Phoenician|Punic alphabet|Old South Arabian|Musnad|Avestan|Old Persian cuneiform|Ugaritic|Warang Citi|Meroitic|Ogham|Runic|Gothic alphabet|Kpelle script|Mende script|Kikakui|Pollard|Fraser|Lisu script|Dongba|Old Bouyei script|Old Khmer script/i.test(s)) tags.add('Other historical');

        // Latin (catch-all). Word boundary so "Latinised" etc. still match.
        if (/\bLatin\b|\bRumi\b|Modified Roman/i.test(s)) tags.add('Latin');

        if (tags.size === 0) tags.add('Other');
        return [...tags];
    }

    // ----- Speaker tier parsing -------------------------------------------

    function tierFor(count) {
        if (count >= 100_000_000) return '100M+';
        if (count >= 10_000_000)  return '10M+';
        if (count >= 1_000_000)   return '1M+';
        if (count >= 100_000)     return '100K+';
        if (count >= 10_000)      return '10K+';
        if (count >= 1_000)       return '1K+';
        return '<1K';
    }

    function parseSpeakerTier(spkStr) {
        if (!spkStr) return null;
        const s = String(spkStr);

        // Skip year-range strings like "Extinct (~550-330 BCE)" — those are
        // historical date ranges, not speaker counts. Without this guard the
        // generic digit-stripping path would concat the digits and report
        // 100M+ for an extinct language.
        if (/extinct/i.test(s)) {
            // Allow only if there's an explicit speaker-count phrase
            // (e.g. "Extinct, 100 fluent speakers")
            if (!/(\d+(?:[.,]\d+)?)\s*(?:[KMB]\b|million|billion|thousand|speaker)/i.test(s)) {
                return null;
            }
        }

        // Try B/M/K (or word forms) — match the FIRST occurrence so ranges
        // like "~5,000–10,000" or "~30-50M" use the lower bound.
        const unitRe = /(\d+(?:[.,]\d+)?)\s*(B\b|M\b|K\b|billion|million|thousand)/i;
        const m = s.match(unitRe);
        if (m) {
            const num = parseFloat(m[1].replace(/,/g, ''));
            const u = m[2].toUpperCase();
            let count;
            if (u === 'B' || u === 'BILLION')       count = num * 1_000_000_000;
            else if (u === 'M' || u === 'MILLION')  count = num * 1_000_000;
            else                                    count = num * 1_000;
            return tierFor(count);
        }

        // Plain numeric (with optional commas), take FIRST number group only.
        // "~5,000–10,000" → "5,000" → 5000. "~20–200" → "20" → 20.
        const plain = s.match(/(\d{1,3}(?:,\d{3})+|\d+)/);
        if (plain) {
            const n = parseInt(plain[1].replace(/,/g, ''), 10);
            if (!isNaN(n) && n > 0) return tierFor(n);
        }
        return null;
    }

    const SPEAKER_TIERS = ['100M+', '10M+', '1M+', '100K+', '10K+', '1K+', '<1K'];

    // ----- Family aggregation (top-level only, drop parens) ---------------

    function topFamily(famStr) {
        if (!famStr) return null;
        return famStr.split('(')[0].trim();
    }

    // ----- Build per-language feature record on demand --------------------

    function familyDefault(famStr) {
        if (!famStr) return {};
        if (FAMILY_DEFAULTS[famStr]) return FAMILY_DEFAULTS[famStr];
        const top = topFamily(famStr);
        return (top && FAMILY_DEFAULTS[top]) || {};
    }

    const _featCache = new Map();
    function featuresFor(code) {
        if (_featCache.has(code)) return _featCache.get(code);
        if (typeof LANG_DATA === 'undefined' || !LANG_DATA[code]) return null;
        const lang = LANG_DATA[code];
        const meta = lang.meta || {};
        const fam = meta.family || null;
        const fd = familyDefault(fam);
        const curated = F[code] || {};
        // Cascade: per-language override > family default > null.
        // `script` is now an Array<string> (a language can have multiple).
        const rec = {
            family:  topFamily(fam),
            script:  detectScript(meta.script),
            wo:      curated.wo    || fd.wo    || null,
            tone:    typeof curated.tone === 'boolean' ? curated.tone
                   : typeof fd.tone      === 'boolean' ? fd.tone : null,
            morph:   curated.morph || fd.morph || null,
            speaker: parseSpeakerTier(meta.speakers),
        };
        _featCache.set(code, rec);
        return rec;
    }

    // ----- Filter state ---------------------------------------------------
    //
    // Each entry is a Set of allowed values. Empty set = no filter on that
    // category (everything passes that category).

    const filterState = {
        family:  new Set(),
        script:  new Set(),
        wo:      new Set(),
        tone:    new Set(),  // 'tonal' or 'non-tonal'
        morph:   new Set(),
        speaker: new Set(),
    };

    function passesFilter(code) {
        const f = featuresFor(code);
        if (!f) return false;
        for (const cat of Object.keys(filterState)) {
            const allowed = filterState[cat];
            if (allowed.size === 0) continue;
            // Script is multi-valued: a language passes if ANY of its scripts
            // matches the allowed set (e.g. Punjabi has both Brahmic and
            // Arabic-derived; selecting either should highlight Punjabi).
            if (cat === 'script') {
                if (!Array.isArray(f.script) || f.script.length === 0) return false;
                if (!f.script.some(s => allowed.has(s))) return false;
                continue;
            }
            let v;
            if (cat === 'tone') {
                if (f.tone == null) return false;
                v = f.tone ? 'tonal' : 'non-tonal';
            } else {
                v = f[cat];
                if (v == null) return false;
            }
            if (!allowed.has(v)) return false;
        }
        return true;
    }

    function anyFilterActive() {
        return Object.values(filterState).some(s => s.size > 0);
    }

    function totalActiveFilters() {
        return Object.values(filterState).reduce((s, set) => s + set.size, 0);
    }

    // ----- Visual application (DOM-based) ---------------------------------

    let lastApplyId = 0;
    function applyFilter() {
        const myId = ++lastApplyId;
        const active = anyFilterActive();
        const labels = document.querySelectorAll('.lang-label, .globe-label');
        let matched = 0, total = 0;
        labels.forEach(el => {
            const code = el.dataset.code;
            if (!code) return;
            total++;
            const ok = !active || passesFilter(code);
            if (ok) matched++;
            // Touch the wrapping element (label root with the "vertical" class etc.)
            el.classList.toggle('lf-dimmed', active && !ok);
        });
        // Update counter
        if (myId !== lastApplyId) return;
        const counter = document.querySelector('.lf-counter');
        if (counter) {
            if (active) counter.textContent = matched + ' / ' + total + ' 言語';
            else counter.textContent = total + ' 言語';
        }
    }

    function injectStyles() {
        const css = `
        .lf-fab {
            display: inline-flex; align-items: center; gap: 4px;
            font-size: 13px; padding: 5px 12px; border: 1px solid #d0d0d0;
            border-radius: 20px; background: rgba(255,255,255,0.92);
            backdrop-filter: blur(6px); cursor: pointer;
            box-shadow: 0 1px 4px rgba(0,0,0,0.12);
            color: #555; font-weight: 500;
            transition: background 0.2s, border-color 0.2s;
            align-self: flex-start;
        }
        .lf-fab:hover { background: #fff; border-color: #999; }
        .lf-fab.active { background: #4a6cf7; color: #fff; border-color: #3a5ce5; }
        .lf-fab .lf-badge {
            background: #fff; color: #3a5ce5; font-weight: 700;
            font-size: 11px; min-width: 18px; height: 18px; line-height: 18px;
            border-radius: 9px; padding: 0 5px; text-align: center;
        }

        .lf-panel {
            position: absolute; left: 12px; z-index: 1010;
            width: 320px; max-width: calc(100vw - 24px);
            max-height: calc(100vh - 160px); overflow-y: auto;
            background: rgba(255,255,255,0.97); border-radius: 10px;
            padding: 12px 14px 14px; box-shadow: 0 4px 16px rgba(0,0,0,0.2);
            font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
            font-size: 12px; color: #222; display: none;
        }
        .lf-panel.open { display: block; }
        .lf-panel-header {
            display: flex; justify-content: space-between; align-items: center;
            margin-bottom: 8px;
        }
        .lf-panel-title { font-size: 13px; font-weight: 600; }
        .lf-actions { display: flex; gap: 6px; align-items: center; }
        .lf-counter { font-size: 11px; color: #888; }
        .lf-reset {
            background: transparent; border: 1px solid #ddd; border-radius: 4px;
            font-size: 10px; padding: 2px 6px; cursor: pointer; color: #666;
        }
        .lf-reset:hover { background: #f5f5f5; border-color: #aaa; }

        .lf-section { margin-top: 10px; }
        .lf-section-title {
            font-size: 11px; font-weight: 600; color: #555;
            margin-bottom: 4px; display: flex; justify-content: space-between;
        }
        .lf-section-clear {
            font-size: 10px; color: #4a6cf7; cursor: pointer; user-select: none;
        }
        .lf-section-clear:hover { text-decoration: underline; }
        .lf-chips {
            display: flex; flex-wrap: wrap; gap: 4px;
        }
        .lf-chip {
            font-size: 11px; padding: 3px 8px;
            border: 1px solid #d0d0d0; border-radius: 12px;
            background: #fafafa; cursor: pointer;
            transition: all 0.15s; user-select: none;
            display: inline-flex; align-items: center; gap: 3px;
        }
        .lf-chip:hover { background: #eef; border-color: #99c; }
        .lf-chip.on {
            background: #4a6cf7; color: #fff; border-color: #3a5ce5;
            box-shadow: 0 1px 3px rgba(74,108,247,0.35);
        }
        .lf-chip-count { opacity: 0.65; font-size: 10px; }

        /* Collapsible long lists (e.g. families) */
        .lf-chip-hidden { display: none !important; }
        .lf-section.lf-expanded .lf-chip-hidden { display: inline-flex !important; }
        .lf-chip-more {
            font-size: 11px; padding: 3px 8px;
            color: #4a6cf7; cursor: pointer; user-select: none;
            background: transparent; border: 1px dashed transparent;
        }
        .lf-chip-more:hover { text-decoration: underline; }

        /* Dim non-matching labels */
        .lf-dimmed { opacity: 0.12 !important; pointer-events: none; }
        .lf-dimmed * { pointer-events: none; }
        @media (max-width: 768px) {
            .lf-panel { left: 6px; max-height: 60vh; width: calc(100vw - 12px); }
        }
        `;
        const style = document.createElement('style');
        style.id = 'lf-styles';
        style.textContent = css;
        document.head.appendChild(style);
    }

    // ----- Available-value enumeration with counts -------------------------

    function enumerateValues() {
        const families = new Map(), scripts = new Map(), wos = new Map(),
              morphs = new Map(), speakers = new Map();
        let tonal = 0, nonTonal = 0;
        for (const code of Object.keys(LANG_DATA)) {
            const f = featuresFor(code);
            if (!f) continue;
            if (f.family)  families.set(f.family,  (families.get(f.family) || 0) + 1);
            // Script is an array — count each tag separately
            if (Array.isArray(f.script)) {
                for (const s of f.script) scripts.set(s, (scripts.get(s) || 0) + 1);
            }
            if (f.wo)      wos.set(f.wo,           (wos.get(f.wo) || 0) + 1);
            if (f.morph)   morphs.set(f.morph,     (morphs.get(f.morph) || 0) + 1);
            if (f.speaker) speakers.set(f.speaker, (speakers.get(f.speaker) || 0) + 1);
            if (f.tone === true)  tonal++;
            if (f.tone === false) nonTonal++;
        }
        const sorted = (m) => [...m.entries()].sort((a, b) => b[1] - a[1]);
        return {
            family:  sorted(families),
            script:  sorted(scripts),
            wo:      [...wos.entries()].sort((a, b) => SPEAKER_TIERS_ORDER_W.indexOf(a[0]) - SPEAKER_TIERS_ORDER_W.indexOf(b[0])),
            tone:    [['tonal', tonal], ['non-tonal', nonTonal]],
            morph:   sorted(morphs),
            speaker: SPEAKER_TIERS.map(t => [t, speakers.get(t) || 0]).filter(([_, c]) => c > 0),
        };
    }
    const SPEAKER_TIERS_ORDER_W = ['SOV','SVO','VSO','VOS','OVS','OSV'];

    // ----- Panel construction ---------------------------------------------

    const SECTIONS = [
        { key: 'family',  title: '語族 Family' },
        { key: 'script',  title: '文字 Script' },
        { key: 'wo',      title: '語順 Word Order' },
        { key: 'tone',    title: '声調 Tonal' },
        { key: 'morph',   title: '形態論 Morphology' },
        { key: 'speaker', title: '話者数 Speakers' },
    ];

    // Sections with many values (e.g. ~67 families) get truncated to the top
    // entries on first render; the rest are revealed via a "もっと表示" toggle.
    const COLLAPSE_LIMITS = {
        family: 12,  // show top 12 by count, hide the long tail of small families
        script: 10,
    };

    function buildPanel() {
        const panel = document.createElement('div');
        panel.className = 'lf-panel';
        const values = enumerateValues();
        let html = `
            <div class="lf-panel-header">
                <span class="lf-panel-title">フィルター</span>
                <div class="lf-actions">
                    <span class="lf-counter"></span>
                    <button class="lf-reset">クリア</button>
                </div>
            </div>
        `;
        for (const sec of SECTIONS) {
            const items = values[sec.key];
            if (!items || !items.length) continue;
            const limit = COLLAPSE_LIMITS[sec.key];
            const collapsible = limit && items.length > limit;
            const renderChip = ([v, c], hidden) =>
                `<span class="lf-chip${hidden ? ' lf-chip-hidden' : ''}" data-cat="${sec.key}" data-val="${v}">
                    ${v}<span class="lf-chip-count">${c}</span>
                </span>`;
            const visibleHtml = (collapsible ? items.slice(0, limit) : items)
                .map(item => renderChip(item, false)).join('');
            const hiddenHtml = collapsible
                ? items.slice(limit).map(item => renderChip(item, true)).join('')
                : '';
            const moreToggle = collapsible
                ? `<span class="lf-chip-more" data-collapsed-label="+ もっと表示 (${items.length - limit}件)" data-expanded-label="− 折りたたむ">+ もっと表示 (${items.length - limit}件)</span>`
                : '';
            html += `
                <div class="lf-section" data-cat="${sec.key}">
                    <div class="lf-section-title">
                        <span>${sec.title}</span>
                        <span class="lf-section-clear" data-cat="${sec.key}" style="display:none">クリア</span>
                    </div>
                    <div class="lf-chips">
                        ${visibleHtml}${hiddenHtml}${moreToggle}
                    </div>
                </div>
            `;
        }
        panel.innerHTML = html;
        return panel;
    }

    // ----- Init -----------------------------------------------------------

    // wordmap_meta.js is lazy-loaded by wordmap.html (only when the user
    // first opens a language detail panel). The filter needs meta for every
    // category — load it eagerly here so the panel is fully populated.
    function ensureMeta() {
        if (window._wmMetaLoaded || (typeof META_I18N !== 'undefined')) {
            return Promise.resolve();
        }
        return new Promise((resolve) => {
            // Chain onto any existing resolver wordmap.html may have set up
            const prev = window._wmMetaResolve;
            window._wmMetaResolve = () => { if (prev) try { prev(); } catch(e) {} resolve(); };
            // If no script tag for meta has been added yet, add it ourselves
            if (!document.querySelector('script[src*="wordmap_meta.js"]')) {
                const s = document.createElement('script');
                s.src = 'wordmap_meta.js';
                document.head.appendChild(s);
            }
            // Belt-and-suspenders: poll every 200ms in case _wmMetaResolve
            // gets clobbered by a competing call
            const poll = setInterval(() => {
                if (window._wmMetaLoaded || typeof META_I18N !== 'undefined') {
                    clearInterval(poll); resolve();
                }
            }, 200);
        });
    }

    function init() {
        if (typeof LANG_DATA === 'undefined') return setTimeout(init, 200);
        injectStyles();

        const fab = document.createElement('button');
        fab.className = 'lf-fab';
        fab.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M7 12h10m-7 6h4"/></svg>フィルター<span class="lf-badge" style="display:none">0</span>';
        // Mount inside the existing top-left controls container so it stacks
        // naturally below the word selector and era switch (no overlap).
        const topLeft = document.querySelector('.top-left-controls');
        if (topLeft) topLeft.appendChild(fab);
        else         document.body.appendChild(fab);

        // Placeholder panel (shown while meta loads). Replaced after load.
        let panel = document.createElement('div');
        panel.className = 'lf-panel';
        panel.innerHTML = `
            <div class="lf-panel-header">
                <span class="lf-panel-title">フィルター</span>
                <div class="lf-actions">
                    <span class="lf-counter">読み込み中…</span>
                </div>
            </div>
            <div style="padding:12px 0;color:#888;font-size:11px;text-align:center">
                言語データを読み込み中…
            </div>
        `;
        document.body.appendChild(panel);

        // Position the panel just below the fab.
        function positionPanel() {
            const r = fab.getBoundingClientRect();
            panel.style.top = (r.bottom + 8) + 'px';
        }
        positionPanel();
        window.addEventListener('resize', positionPanel);

        // Toggle panel visibility on fab click (works even before meta loads
        // — panel just shows the loading placeholder).
        fab.addEventListener('click', () => panel.classList.toggle('open'));

        // Re-apply filter whenever new labels render (zoom/word/era change).
        // Safe to attach now; applyFilter is a no-op while no filters active.
        const mapEl = document.getElementById('map');
        const globeEl = document.getElementById('globe');
        const observer = new MutationObserver(() => applyFilter());
        if (mapEl) observer.observe(mapEl, { childList: true, subtree: true });
        if (globeEl) observer.observe(globeEl, { childList: true, subtree: true });

        // Once metadata is available, rebuild the panel with the real chips
        // and wire up interactions.
        ensureMeta().then(() => {
            // Clear feature cache (placeholder may have polled before meta)
            _featCache.clear();

            // Replace the placeholder panel content with the full UI
            const built = buildPanel();
            panel.innerHTML = built.innerHTML;
            positionPanel();

            const badge = fab.querySelector('.lf-badge');

            function updateBadge() {
                const n = totalActiveFilters();
                if (n > 0) {
                    badge.textContent = n;
                    badge.style.display = '';
                    fab.classList.add('active');
                } else {
                    badge.style.display = 'none';
                    fab.classList.remove('active');
                }
            }

            function refresh() {
                applyFilter();
                updateBadge();
                panel.querySelectorAll('.lf-section').forEach(sec => {
                    const cat = sec.dataset.cat;
                    const clearEl = sec.querySelector('.lf-section-clear');
                    if (clearEl) clearEl.style.display = filterState[cat].size > 0 ? '' : 'none';
                });
            }

            panel.addEventListener('click', (e) => {
                const chip = e.target.closest('.lf-chip');
                if (chip) {
                    const cat = chip.dataset.cat;
                    const val = chip.dataset.val;
                    if (filterState[cat].has(val)) {
                        filterState[cat].delete(val);
                        chip.classList.remove('on');
                    } else {
                        filterState[cat].add(val);
                        chip.classList.add('on');
                    }
                    refresh();
                    return;
                }
                const sectionClear = e.target.closest('.lf-section-clear');
                if (sectionClear) {
                    const cat = sectionClear.dataset.cat;
                    filterState[cat].clear();
                    panel.querySelectorAll(`.lf-chip[data-cat="${cat}"]`).forEach(c => c.classList.remove('on'));
                    refresh();
                    return;
                }
                const reset = e.target.closest('.lf-reset');
                if (reset) {
                    for (const k of Object.keys(filterState)) filterState[k].clear();
                    panel.querySelectorAll('.lf-chip.on').forEach(c => c.classList.remove('on'));
                    refresh();
                    return;
                }
                const more = e.target.closest('.lf-chip-more');
                if (more) {
                    const sec = more.closest('.lf-section');
                    sec.classList.toggle('lf-expanded');
                    more.textContent = sec.classList.contains('lf-expanded')
                        ? more.dataset.expandedLabel
                        : more.dataset.collapsedLabel;
                }
            });

            refresh();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
