// UI translations for all 18 supported languages
const UI_STRINGS = {
    ja: { title: 'LangMap', subtitle: '多言語語順マップ', selectSentence: '文章選択:', langToggle: '表示言語 ON/OFF:', langOrder: '言語の順序', dragHint: 'ドラッグで並べ替え', defaultOrder: 'デフォルト順', random: 'ランダム', prev: '◀', next: '▶', allOn: '全ON', allOff: '全OFF', savePng: 'PNG保存', saveSvg: 'SVG保存', copyUrl: 'URLコピー', copied: 'URLをコピーしました', uiLang: 'UI言語:' },
    ko: { title: 'LangMap', subtitle: '다국어 어순 맵', selectSentence: '문장 선택:', langToggle: '표시 언어 ON/OFF:', langOrder: '언어 순서', dragHint: '드래그하여 정렬', defaultOrder: '기본 순서', random: '랜덤', prev: '◀', next: '▶', allOn: '전체 ON', allOff: '전체 OFF', savePng: 'PNG 저장', saveSvg: 'SVG 저장', copyUrl: 'URL 복사', copied: 'URL을 복사했습니다', uiLang: 'UI 언어:' },
    zh: { title: 'LangMap', subtitle: '多语言语序图', selectSentence: '选择句子:', langToggle: '显示语言 ON/OFF:', langOrder: '语言顺序', dragHint: '拖拽排序', defaultOrder: '默认顺序', random: '随机', prev: '◀', next: '▶', allOn: '全部开', allOff: '全部关', savePng: 'PNG保存', saveSvg: 'SVG保存', copyUrl: '复制链接', copied: '链接已复制', uiLang: 'UI语言:' },
    yue: { title: 'LangMap', subtitle: '多語言語序圖', selectSentence: '揀句子:', langToggle: '顯示語言 ON/OFF:', langOrder: '語言順序', dragHint: '拖嚟排序', defaultOrder: '預設順序', random: '隨機', prev: '◀', next: '▶', allOn: '全開', allOff: '全關', savePng: 'PNG儲存', saveSvg: 'SVG儲存', copyUrl: '複製連結', copied: '連結已複製', uiLang: 'UI語言:' },
    vi: { title: 'LangMap', subtitle: 'Bản đồ trật tự từ đa ngôn ngữ', selectSentence: 'Chọn câu:', langToggle: 'Ngôn ngữ hiển thị ON/OFF:', langOrder: 'Thứ tự ngôn ngữ', dragHint: 'kéo để sắp xếp', defaultOrder: 'Mặc định', random: 'Ngẫu nhiên', prev: '◀', next: '▶', allOn: 'Bật tất cả', allOff: 'Tắt tất cả', savePng: 'Lưu PNG', saveSvg: 'Lưu SVG', copyUrl: 'Sao chép URL', copied: 'Đã sao chép URL', uiLang: 'Ngôn ngữ UI:' },
    th: { title: 'LangMap', subtitle: 'แผนที่ลำดับคำหลายภาษา', selectSentence: 'เลือกประโยค:', langToggle: 'ภาษาที่แสดง ON/OFF:', langOrder: 'ลำดับภาษา', dragHint: 'ลากเพื่อจัดเรียง', defaultOrder: 'ค่าเริ่มต้น', random: 'สุ่ม', prev: '◀', next: '▶', allOn: 'เปิดทั้งหมด', allOff: 'ปิดทั้งหมด', savePng: 'บันทึก PNG', saveSvg: 'บันทึก SVG', copyUrl: 'คัดลอก URL', copied: 'คัดลอก URL แล้ว', uiLang: 'ภาษา UI:' },
    id: { title: 'LangMap', subtitle: 'Peta Urutan Kata Multibahasa', selectSentence: 'Pilih kalimat:', langToggle: 'Bahasa ditampilkan ON/OFF:', langOrder: 'Urutan bahasa', dragHint: 'seret untuk mengurutkan', defaultOrder: 'Urutan default', random: 'Acak', prev: '◀', next: '▶', allOn: 'Semua ON', allOff: 'Semua OFF', savePng: 'Simpan PNG', saveSvg: 'Simpan SVG', copyUrl: 'Salin URL', copied: 'URL disalin', uiLang: 'Bahasa UI:' },
    hi: { title: 'LangMap', subtitle: 'बहुभाषी शब्द क्रम मानचित्र', selectSentence: 'वाक्य चुनें:', langToggle: 'प्रदर्शन भाषा ON/OFF:', langOrder: 'भाषा क्रम', dragHint: 'क्रम बदलने के लिए खींचें', defaultOrder: 'डिफ़ॉल्ट क्रम', random: 'रैंडम', prev: '◀', next: '▶', allOn: 'सभी ON', allOff: 'सभी OFF', savePng: 'PNG सहेजें', saveSvg: 'SVG सहेजें', copyUrl: 'URL कॉपी', copied: 'URL कॉपी हो गया', uiLang: 'UI भाषा:' },
    en: { title: 'LangMap', subtitle: 'Multilingual Word Order Map', selectSentence: 'Select sentence:', langToggle: 'Display languages ON/OFF:', langOrder: 'Language order', dragHint: 'drag to reorder', defaultOrder: 'Default order', random: 'Random', prev: '◀', next: '▶', allOn: 'All ON', allOff: 'All OFF', savePng: 'Save PNG', saveSvg: 'Save SVG', copyUrl: 'Copy URL', copied: 'URL copied', uiLang: 'UI Language:' },
    de: { title: 'LangMap', subtitle: 'Mehrsprachige Wortstellungskarte', selectSentence: 'Satz wählen:', langToggle: 'Angezeigte Sprachen ON/OFF:', langOrder: 'Sprachreihenfolge', dragHint: 'ziehen zum Sortieren', defaultOrder: 'Standardreihenfolge', random: 'Zufällig', prev: '◀', next: '▶', allOn: 'Alle AN', allOff: 'Alle AUS', savePng: 'PNG speichern', saveSvg: 'SVG speichern', copyUrl: 'URL kopieren', copied: 'URL kopiert', uiLang: 'UI-Sprache:' },
    fr: { title: 'LangMap', subtitle: "Carte de l'ordre des mots multilingue", selectSentence: 'Sélectionner une phrase :', langToggle: 'Langues affichées ON/OFF :', langOrder: 'Ordre des langues', dragHint: 'glisser pour réorganiser', defaultOrder: 'Ordre par défaut', random: 'Aléatoire', prev: '◀', next: '▶', allOn: 'Tout ON', allOff: 'Tout OFF', savePng: 'Enregistrer PNG', saveSvg: 'Enregistrer SVG', copyUrl: "Copier l'URL", copied: 'URL copié', uiLang: 'Langue UI :' },
    it: { title: 'LangMap', subtitle: "Mappa dell'ordine delle parole multilingue", selectSentence: 'Seleziona frase:', langToggle: 'Lingue visualizzate ON/OFF:', langOrder: 'Ordine delle lingue', dragHint: 'trascina per riordinare', defaultOrder: 'Ordine predefinito', random: 'Casuale', prev: '◀', next: '▶', allOn: 'Tutti ON', allOff: 'Tutti OFF', savePng: 'Salva PNG', saveSvg: 'Salva SVG', copyUrl: 'Copia URL', copied: 'URL copiato', uiLang: 'Lingua UI:' },
    es: { title: 'LangMap', subtitle: 'Mapa de orden de palabras multilingüe', selectSentence: 'Seleccionar oración:', langToggle: 'Idiomas mostrados ON/OFF:', langOrder: 'Orden de idiomas', dragHint: 'arrastrar para reordenar', defaultOrder: 'Orden predeterminado', random: 'Aleatorio', prev: '◀', next: '▶', allOn: 'Todo ON', allOff: 'Todo OFF', savePng: 'Guardar PNG', saveSvg: 'Guardar SVG', copyUrl: 'Copiar URL', copied: 'URL copiado', uiLang: 'Idioma UI:' },
    pt: { title: 'LangMap', subtitle: 'Mapa de ordem de palavras multilíngue', selectSentence: 'Selecionar frase:', langToggle: 'Idiomas exibidos ON/OFF:', langOrder: 'Ordem dos idiomas', dragHint: 'arraste para reordenar', defaultOrder: 'Ordem padrão', random: 'Aleatório', prev: '◀', next: '▶', allOn: 'Todos ON', allOff: 'Todos OFF', savePng: 'Salvar PNG', saveSvg: 'Salvar SVG', copyUrl: 'Copiar URL', copied: 'URL copiado', uiLang: 'Idioma UI:' },
    ru: { title: 'LangMap', subtitle: 'Многоязычная карта порядка слов', selectSentence: 'Выбрать предложение:', langToggle: 'Отображаемые языки ON/OFF:', langOrder: 'Порядок языков', dragHint: 'перетащите для сортировки', defaultOrder: 'По умолчанию', random: 'Случайное', prev: '◀', next: '▶', allOn: 'Все ВКЛ', allOff: 'Все ВЫКЛ', savePng: 'Сохранить PNG', saveSvg: 'Сохранить SVG', copyUrl: 'Копировать URL', copied: 'URL скопирован', uiLang: 'Язык UI:' },
    uk: { title: 'LangMap', subtitle: 'Багатомовна карта порядку слів', selectSentence: 'Обрати речення:', langToggle: 'Мови відображення ON/OFF:', langOrder: 'Порядок мов', dragHint: 'перетягніть для сортування', defaultOrder: 'За замовчуванням', random: 'Випадкове', prev: '◀', next: '▶', allOn: 'Усі УВІМК', allOff: 'Усі ВИМК', savePng: 'Зберегти PNG', saveSvg: 'Зберегти SVG', copyUrl: 'Копіювати URL', copied: 'URL скопійовано', uiLang: 'Мова UI:' },
    ar: { title: 'LangMap', subtitle: 'خريطة ترتيب الكلمات متعددة اللغات', selectSentence: 'اختر جملة:', langToggle: 'اللغات المعروضة ON/OFF:', langOrder: 'ترتيب اللغات', dragHint: 'اسحب لإعادة الترتيب', defaultOrder: 'الترتيب الافتراضي', random: 'عشوائي', prev: '◀', next: '▶', allOn: 'تشغيل الكل', allOff: 'إيقاف الكل', savePng: 'حفظ PNG', saveSvg: 'حفظ SVG', copyUrl: 'نسخ الرابط', copied: 'تم نسخ الرابط', uiLang: 'لغة الواجهة:' },
    he: { title: 'LangMap', subtitle: 'מפת סדר מילים רב-לשונית', selectSentence: 'בחר משפט:', langToggle: 'שפות תצוגה ON/OFF:', langOrder: 'סדר שפות', dragHint: 'גרור לשינוי סדר', defaultOrder: 'סדר ברירת מחדל', random: 'אקראי', prev: '◀', next: '▶', allOn: 'הכל ON', allOff: 'הכל OFF', savePng: 'שמור PNG', saveSvg: 'שמור SVG', copyUrl: 'העתק URL', copied: 'URL הועתק', uiLang: 'שפת ממשק:' },
};

let currentUILang = 'ja';

function t(key) {
    return (UI_STRINGS[currentUILang] || UI_STRINGS.ja)[key] || UI_STRINGS.ja[key] || key;
}

// Language definitions - ordered by similarity
const LANGUAGES = [
    { code: 'ja', name: '日本語', group: 'CJK' },
    { code: 'ko', name: '韓国語', group: 'CJK' },
    { code: 'zh', name: '中国語', group: 'CJK' },
    { code: 'yue', name: '広東語', group: 'CJK' },
    { code: 'vi', name: 'ベトナム語', group: 'SEA' },
    { code: 'th', name: 'タイ語', group: 'SEA' },
    { code: 'id', name: 'インドネシア語', group: 'SEA' },
    { code: 'hi', name: 'ヒンディー語', group: 'SAS' },
    { code: 'en', name: '英語', group: 'EUR' },
    { code: 'de', name: 'ドイツ語', group: 'EUR' },
    { code: 'fr', name: 'フランス語', group: 'EUR' },
    { code: 'it', name: 'イタリア語', group: 'EUR' },
    { code: 'es', name: 'スペイン語', group: 'EUR' },
    { code: 'pt', name: 'ポルトガル語', group: 'EUR' },
    { code: 'ru', name: 'ロシア語', group: 'EUR' },
    { code: 'uk', name: 'ウクライナ語', group: 'EUR' },
    { code: 'ar', name: 'アラビア語', group: 'SEM' },
    { code: 'he', name: 'ヘブライ語', group: 'SEM' },
];

const DEFAULT_ORDER = LANGUAGES.map(l => l.code);

// State
let enabledLangs = new Set(DEFAULT_ORDER);
let langOrder = [...DEFAULT_ORDER];
let currentSentenceIdx = 0;
let redrawTimer = null;
let suppressHashUpdate = false;

// --- URL hash state management ---
function stateToHash() {
    const params = new URLSearchParams();
    params.set('s', String(currentSentenceIdx));
    if (enabledLangs.size !== DEFAULT_ORDER.length || !DEFAULT_ORDER.every(c => enabledLangs.has(c))) {
        params.set('l', [...enabledLangs].join(','));
    }
    if (langOrder.join(',') !== DEFAULT_ORDER.join(',')) {
        params.set('o', langOrder.join(','));
    }
    if (currentUILang !== 'ja') {
        params.set('ui', currentUILang);
    }
    return params.toString();
}

function updateURL() {
    if (suppressHashUpdate) return;
    const hash = stateToHash();
    history.replaceState(null, '', '#' + hash);
}

function loadFromHash() {
    const hash = location.hash.slice(1);
    if (!hash) return;
    const params = new URLSearchParams(hash);

    if (params.has('s')) {
        const idx = parseInt(params.get('s'));
        if (!isNaN(idx) && idx >= 0 && idx < SENTENCES.length) {
            currentSentenceIdx = idx;
        }
    }

    if (params.has('l')) {
        const codes = params.get('l').split(',').filter(c => DEFAULT_ORDER.includes(c));
        if (codes.length > 0) {
            enabledLangs = new Set(codes);
        }
    }

    if (params.has('o')) {
        const codes = params.get('o').split(',').filter(c => DEFAULT_ORDER.includes(c));
        const missing = DEFAULT_ORDER.filter(c => !codes.includes(c));
        if (codes.length > 0) {
            langOrder = [...codes, ...missing];
        }
    }
    if (params.has('ui') && UI_STRINGS[params.get('ui')]) {
        currentUILang = params.get('ui');
    }
}

// Debounced line redraw
function scheduleRedrawLines() {
    if (redrawTimer) cancelAnimationFrame(redrawTimer);
    const svg = document.getElementById('linesSvg');
    if (svg) svg.innerHTML = '';
    redrawTimer = requestAnimationFrame(() => {
        redrawTimer = requestAnimationFrame(() => {
            const sentence = SENTENCES[currentSentenceIdx];
            if (!sentence) return;
            const activeLangs = langOrder.filter(code => enabledLangs.has(code) && sentence.langs[code]);
            drawLines(sentence, activeLangs);
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Restore state from URL hash before building UI
    loadFromHash();

    initUILangSelect();
    initSampleSelect();
    initLangToggles();
    initLangOrder();
    syncUIFromState();
    applyUILang();
    render();

    // Redraw lines on resize
    window.addEventListener('resize', scheduleRedrawLines);
    const container = document.getElementById('mapContainer');
    if (window.ResizeObserver) {
        new ResizeObserver(scheduleRedrawLines).observe(container);
    }

    // Handle browser back/forward
    window.addEventListener('hashchange', () => {
        suppressHashUpdate = true;
        loadFromHash();
        syncUIFromState();
        render();
        suppressHashUpdate = false;
    });
});

// Sync UI elements to match current state (after loadFromHash)
function syncUIFromState() {
    // Sentence select
    document.getElementById('sampleSelect').value = currentSentenceIdx;

    // Language toggles
    document.querySelectorAll('.lang-toggle').forEach(label => {
        const cb = label.querySelector('input');
        const code = cb.dataset.lang;
        cb.checked = enabledLangs.has(code);
        label.classList.toggle('active', enabledLangs.has(code));
    });

    // Language order
    renderOrderItems();
}

function initUILangSelect() {
    const sel = document.getElementById('uiLangSelect');
    LANGUAGES.forEach(lang => {
        if (UI_STRINGS[lang.code]) {
            const opt = document.createElement('option');
            opt.value = lang.code;
            opt.textContent = lang.name;
            sel.appendChild(opt);
        }
    });
    sel.value = currentUILang;
    sel.addEventListener('change', () => {
        currentUILang = sel.value;
        applyUILang();
        updateURL();
    });
}

function applyUILang() {
    document.getElementById('uiTitle').textContent = t('title');
    document.getElementById('uiSubtitle').textContent = t('subtitle');
    document.getElementById('lblSentence').textContent = t('selectSentence');
    document.getElementById('lblLangToggle').textContent = t('langToggle');
    document.getElementById('lblLangOrder').textContent = t('langOrder');
    document.getElementById('lblDragHint').textContent = '(' + t('dragHint') + ')';
    document.getElementById('btnDefaultOrder').textContent = t('defaultOrder');
    document.getElementById('btnRandom').textContent = t('random');
    document.getElementById('btnAllOn').textContent = t('allOn');
    document.getElementById('btnAllOff').textContent = t('allOff');
    document.getElementById('btnSavePng').textContent = t('savePng');
    document.getElementById('btnSaveSvg').textContent = t('saveSvg');
    document.getElementById('btnCopyUrl').textContent = t('copyUrl');
    document.getElementById('copyToast').textContent = t('copied');
    document.getElementById('lblUiLang').textContent = t('uiLang');
    document.getElementById('uiLangSelect').value = currentUILang;
    // Set RTL on body for Arabic/Hebrew UI
    document.body.dir = (currentUILang === 'ar' || currentUILang === 'he') ? 'rtl' : 'ltr';
}

function toggleAllLangs(on) {
    if (on) {
        enabledLangs = new Set(DEFAULT_ORDER);
    } else {
        enabledLangs.clear();
    }
    syncUIFromState();
    render();
}

function initSampleSelect() {
    const sel = document.getElementById('sampleSelect');
    SENTENCES.forEach((s, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = `${s.id}. ${s.title}`;
        sel.appendChild(opt);
    });
    sel.addEventListener('change', () => {
        currentSentenceIdx = parseInt(sel.value);
        render();
    });
}

function initLangToggles() {
    const container = document.getElementById('langToggles');
    LANGUAGES.forEach(lang => {
        const label = document.createElement('label');
        label.className = 'lang-toggle active';
        label.innerHTML = `
            <span class="dot"></span>
            <input type="checkbox" checked data-lang="${lang.code}">
            <span>${lang.name}</span>
        `;
        label.addEventListener('click', (e) => {
            e.preventDefault();
            const cb = label.querySelector('input');
            cb.checked = !cb.checked;
            if (cb.checked) {
                enabledLangs.add(lang.code);
                label.classList.add('active');
            } else {
                enabledLangs.delete(lang.code);
                label.classList.remove('active');
            }
            render();
        });
        container.appendChild(label);
    });
}

function initLangOrder() {
    renderOrderItems();
}

function renderOrderItems() {
    const container = document.getElementById('langOrder');
    container.innerHTML = '';
    langOrder.forEach((code, idx) => {
        const lang = LANGUAGES.find(l => l.code === code);
        const item = document.createElement('div');
        item.className = 'lang-order-item';
        item.draggable = true;
        item.dataset.code = code;
        item.dataset.idx = idx;
        item.textContent = lang ? lang.name : code;

        item.addEventListener('dragstart', onDragStart);
        item.addEventListener('dragover', onDragOver);
        item.addEventListener('dragenter', onDragEnter);
        item.addEventListener('dragleave', onDragLeave);
        item.addEventListener('drop', onDrop);
        item.addEventListener('dragend', onDragEnd);

        container.appendChild(item);
    });
}

let dragSrcIdx = null;

function onDragStart(e) {
    dragSrcIdx = parseInt(e.target.dataset.idx);
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}
function onDragOver(e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; }
function onDragEnter(e) { e.target.classList.add('drag-over'); }
function onDragLeave(e) { e.target.classList.remove('drag-over'); }
function onDrop(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
    const dropIdx = parseInt(e.target.dataset.idx);
    if (dragSrcIdx !== null && dragSrcIdx !== dropIdx) {
        const item = langOrder.splice(dragSrcIdx, 1)[0];
        langOrder.splice(dropIdx, 0, item);
        renderOrderItems();
        render();
    }
}
function onDragEnd(e) {
    e.target.classList.remove('dragging');
    document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
}

// --- Row drag (reorder from the map display) ---
let rowDragLang = null;

function onRowDragStart(e) {
    rowDragLang = e.currentTarget.dataset.lang;
    e.currentTarget.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    // Needed for Firefox
    e.dataTransfer.setData('text/plain', rowDragLang);
}
function onRowDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}
function onRowDragEnter(e) {
    const row = e.currentTarget;
    if (row.dataset.lang !== rowDragLang) {
        row.classList.add('row-drag-over');
    }
}
function onRowDragLeave(e) {
    e.currentTarget.classList.remove('row-drag-over');
}
function onRowDrop(e) {
    e.preventDefault();
    const targetLang = e.currentTarget.dataset.lang;
    e.currentTarget.classList.remove('row-drag-over');
    if (rowDragLang && rowDragLang !== targetLang) {
        const srcIdx = langOrder.indexOf(rowDragLang);
        const dstIdx = langOrder.indexOf(targetLang);
        if (srcIdx !== -1 && dstIdx !== -1) {
            langOrder.splice(srcIdx, 1);
            langOrder.splice(dstIdx, 0, rowDragLang);
            renderOrderItems();
            render();
        }
    }
}
function onRowDragEnd(e) {
    e.currentTarget.classList.remove('dragging');
    document.querySelectorAll('.row-drag-over').forEach(el => el.classList.remove('row-drag-over'));
    rowDragLang = null;
}

function resetOrder() {
    langOrder = [...DEFAULT_ORDER];
    renderOrderItems();
    render();
}

function prevSentence() {
    currentSentenceIdx = (currentSentenceIdx - 1 + SENTENCES.length) % SENTENCES.length;
    document.getElementById('sampleSelect').value = currentSentenceIdx;
    render();
}

function nextSentence() {
    currentSentenceIdx = (currentSentenceIdx + 1) % SENTENCES.length;
    document.getElementById('sampleSelect').value = currentSentenceIdx;
    render();
}

function randomSentence() {
    currentSentenceIdx = Math.floor(Math.random() * SENTENCES.length);
    document.getElementById('sampleSelect').value = currentSentenceIdx;
    render();
}

// Main render
function render() {
    const sentence = SENTENCES[currentSentenceIdx];
    if (!sentence) return;

    const rowsContainer = document.getElementById('langRows');
    rowsContainer.innerHTML = '';

    const activeLangs = langOrder.filter(code => enabledLangs.has(code) && sentence.langs[code]);

    activeLangs.forEach(code => {
        const lang = LANGUAGES.find(l => l.code === code);
        const langData = sentence.langs[code];

        const row = document.createElement('div');
        row.className = 'lang-row';
        row.dataset.lang = code;
        row.draggable = true;
        row.addEventListener('dragstart', onRowDragStart);
        row.addEventListener('dragover', onRowDragOver);
        row.addEventListener('dragenter', onRowDragEnter);
        row.addEventListener('dragleave', onRowDragLeave);
        row.addEventListener('drop', onRowDrop);
        row.addEventListener('dragend', onRowDragEnd);

        const label = document.createElement('div');
        label.className = 'lang-label';
        label.textContent = lang ? lang.name + ':' : code + ':';
        row.appendChild(label);

        const textDiv = document.createElement('div');
        textDiv.className = 'lang-text';

        langData.forEach(([segId, text], i) => {
            const seg = document.createElement('span');
            seg.className = 'segment';
            seg.dataset.seg = segId;
            seg.dataset.lang = code;
            const segColor = sentence.segments[segId]?.color || '#666';
            seg.style.color = segColor;
            seg.textContent = text;
            seg.title = `${segId}: ${text}`;
            textDiv.appendChild(seg);

            // Add space between segments
            if (i < langData.length - 1) {
                const space = document.createElement('span');
                space.className = 'segment-space';
                textDiv.appendChild(space);
            }
        });

        row.appendChild(textDiv);
        rowsContainer.appendChild(row);
    });

    // Draw lines after layout settles
    scheduleRedrawLines();

    // Update URL to reflect current state
    updateURL();
}

function drawLines(sentence, activeLangs) {
    const svg = document.getElementById('linesSvg');
    const container = document.getElementById('mapContainer');
    const rect = container.getBoundingClientRect();

    svg.setAttribute('width', container.scrollWidth);
    svg.setAttribute('height', container.scrollHeight);
    svg.style.width = container.scrollWidth + 'px';
    svg.style.height = container.scrollHeight + 'px';
    svg.innerHTML = '';

    // Collect segment positions per language
    const segPositions = {}; // segId -> [{lang, x, y}]
    const allSegments = container.querySelectorAll('.segment');

    allSegments.forEach(el => {
        const segId = el.dataset.seg;
        const elRect = el.getBoundingClientRect();
        const x = elRect.left + elRect.width / 2 - rect.left;
        const y = elRect.top + elRect.height - rect.top + 2;

        if (!segPositions[segId]) segPositions[segId] = [];
        segPositions[segId].push({ lang: el.dataset.lang, x, y, top: elRect.top - rect.top - 2 });
    });

    // Draw lines between consecutive language pairs
    for (let i = 0; i < activeLangs.length - 1; i++) {
        const langA = activeLangs[i];
        const langB = activeLangs[i + 1];

        Object.keys(segPositions).forEach(segId => {
            const points = segPositions[segId];
            const pA = points.filter(p => p.lang === langA);
            const pB = points.filter(p => p.lang === langB);

            pA.forEach(a => {
                pB.forEach(b => {
                    const color = sentence.segments[segId]?.color || '#999';
                    const line = createCurvedLine(a.x, a.y, b.x, b.top, color);
                    svg.appendChild(line);
                });
            });
        });
    }
}

function createCurvedLine(x1, y1, x2, y2, color) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const midY = (y1 + y2) / 2;
    const d = `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
    path.setAttribute('d', d);
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', '2');
    path.setAttribute('fill', 'none');
    path.setAttribute('opacity', '0.6');
    return path;
}

// Export functions
function buildExportSVG() {
    const container = document.getElementById('mapContainer');
    const containerRect = container.getBoundingClientRect();
    const w = container.scrollWidth;
    const h = container.scrollHeight;

    let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">`;
    svgContent += `<rect width="${w}" height="${h}" fill="white"/>`;

    // Copy the SVG lines
    const linesSvg = document.getElementById('linesSvg');
    if (linesSvg) {
        linesSvg.querySelectorAll('path').forEach(path => {
            svgContent += `<path d="${path.getAttribute('d')}" stroke="${path.getAttribute('stroke')}" stroke-width="${path.getAttribute('stroke-width')}" fill="none" opacity="${path.getAttribute('opacity')}"/>`;
        });
    }

    // Render text elements
    const rows = container.querySelectorAll('.lang-row');
    rows.forEach(row => {
        const label = row.querySelector('.lang-label');
        if (label) {
            const r = label.getBoundingClientRect();
            const x = r.left - containerRect.left;
            const y = r.top - containerRect.top + r.height * 0.75;
            svgContent += `<text x="${x}" y="${y}" font-family="sans-serif" font-size="16" font-weight="700" fill="#333">${escapeXml(label.textContent)}</text>`;
        }
        row.querySelectorAll('.segment').forEach(seg => {
            const r = seg.getBoundingClientRect();
            const x = r.left - containerRect.left;
            const y = r.top - containerRect.top + r.height * 0.75;
            svgContent += `<text x="${x}" y="${y}" font-family="sans-serif" font-size="20" font-weight="600" fill="${seg.style.color}">${escapeXml(seg.textContent)}</text>`;
        });
    });

    svgContent += `</svg>`;
    return svgContent;
}

function escapeXml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function downloadAsPNG() {
    const svgData = buildExportSVG();
    const container = document.getElementById('mapContainer');
    const scale = 2;
    const canvas = document.createElement('canvas');
    canvas.width = container.scrollWidth * scale;
    canvas.height = container.scrollHeight * scale;
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);

    const img = new Image();
    img.onload = () => {
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        const link = document.createElement('a');
        link.download = 'langmap.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    };
    img.onerror = () => {
        // Fallback: use html2canvas if available, or alert
        alert('PNG export failed. Please use SVG export instead.');
    };
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    img.src = URL.createObjectURL(blob);
}

function downloadAsSVG() {
    const svgData = buildExportSVG();
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const link = document.createElement('a');
    link.download = 'langmap.svg';
    link.href = URL.createObjectURL(blob);
    link.click();
}

// Share functions
function getShareURL() {
    return location.href;
}

function getShareText() {
    const sentence = SENTENCES[currentSentenceIdx];
    return sentence ? `LangMap: ${sentence.title}` : 'LangMap - 多言語語順マップ';
}

function copyShareURL() {
    navigator.clipboard.writeText(getShareURL()).then(() => {
        const toast = document.getElementById('copyToast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    });
}

function shareToX() {
    const url = encodeURIComponent(getShareURL());
    const text = encodeURIComponent(getShareText());
    window.open(`https://x.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=550,height=420');
}

function shareToFacebook() {
    const url = encodeURIComponent(getShareURL());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=550,height=420');
}

function shareToLINE() {
    const url = encodeURIComponent(getShareURL());
    const text = encodeURIComponent(getShareText());
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, '_blank', 'width=550,height=420');
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'SELECT') return;
    if (e.key === 'ArrowLeft') prevSentence();
    if (e.key === 'ArrowRight') nextSentence();
    if (e.key === 'r' && !e.ctrlKey && !e.metaKey) randomSentence();
});
