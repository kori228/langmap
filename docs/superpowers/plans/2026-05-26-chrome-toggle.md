# Wordmap chrome-toggle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a single header button (`#chrome-toggle`) that hides/shows 6 map-chrome components (word selector + caption, era/filter row, language search, compare FAB, URL watermark credit) with a single click. State persists across reloads via `localStorage`.

**Architecture:** Pure CSS + small JS additions. CSS adds button styles and `body.chrome-hidden` rules that hide the 6 components via `display: none !important`. Inline `<head>` script reads `localStorage['wm-chrome-hidden']` before paint to avoid FOUC. JS click handler toggles the body class, swaps icon via CSS, persists to localStorage, and small JS positions the button (before-hamburger on mobile, last-child of header on PC). i18n via the existing wordmap.html UI-string map.

**Tech Stack:** Vanilla JS + CSS in `wordmap.html` and `styles.css`. No new dependencies. Spec: [docs/superpowers/specs/2026-05-26-chrome-toggle-design.md](../specs/2026-05-26-chrome-toggle-design.md).

---

## Task 0: Worktree setup

- [ ] **Step 1: Detect current branch state**

Run: `git branch --show-current && git log --oneline -2`

- [ ] **Step 2: Create worktree via EnterWorktree**

Use the `EnterWorktree` tool with `name: "feat-chrome-toggle"`.

- [ ] **Step 3: Rebase onto develop**

```bash
git rebase develop 2>&1 | tail -3
```

- [ ] **Step 4: Snapshot current cache-buster values**

```bash
grep -nE "styles:\s+[0-9]+|data:\s+[0-9]+|wordmap_data.js\?v=" wordmap.html | head -5
```
Record `styles: N1`. Will be bumped in Task 5.

- [ ] **Step 5: Verify baseline**

```bash
node validate_wordmap_data.js 2>&1 | grep -E "ERRORS|✗|FAIL|PASS" | head -3
```
Expected: 1 ERROR (pre-existing `bug.words.hello` baseline). No new errors during the plan.

---

## Task 1: styles.css — add chrome-toggle button + body.chrome-hidden rules

**Files:**
- Modify: `styles.css` (append at end, before any closing braces)

- [ ] **Step 1: Read current end of styles.css**

```bash
wc -l styles.css && tail -10 styles.css
```
Note the last line number so insertion goes cleanly at the end.

- [ ] **Step 2: Append the new CSS block**

Use Edit to append after the last existing rule. Add a sentinel-anchored insertion: find the last `}` line at the end of the file, and append below it. Or use Bash `>>` for a pure append.

Use the Write tool ONLY if you have read the file first; otherwise prefer Edit with a unique anchor at the end. Recommended: use Edit, anchoring on the last existing CSS rule's closing brace. To find a stable anchor, read the final ~30 lines first and pick a unique line.

Block to append:

```css

/* ============================================================
   Chrome-toggle button (clean-view mode) — 2026-05-26
   Spec: docs/superpowers/specs/2026-05-26-chrome-toggle-design.md
   ============================================================ */
.chrome-toggle-btn {
    display: inline-flex; align-items: center; justify-content: center;
    width: 40px; height: 40px;
    background: transparent; border: 1px solid #d0d0d0; border-radius: 6px;
    color: #444;
    cursor: pointer; user-select: none;
    transition: background-color 0.15s, color 0.15s, border-color 0.15s;
    padding: 0;
    margin-left: 8px;
}
.chrome-toggle-btn:hover { background: #f3f4f6; }
.chrome-toggle-btn:focus-visible { outline: 2px solid #4a6cf7; outline-offset: 2px; }
.chrome-toggle-btn:active { background: #e5e7eb; }
body.chrome-hidden .chrome-toggle-btn {
    background: #1a73e8; color: #fff; border-color: #1a73e8;
}
.chrome-toggle-btn .icon-on,
.chrome-toggle-btn .icon-off { width: 20px; height: 20px; display: block; }
.chrome-toggle-btn .icon-off { display: none; }
body.chrome-hidden .chrome-toggle-btn .icon-on  { display: none; }
body.chrome-hidden .chrome-toggle-btn .icon-off { display: block; }

/* Hide map-chrome components when toggled OFF. !important wins over
   per-component display rules (e.g. .compare-fab.visible { display: inline-flex }). */
body.chrome-hidden #word-select,
body.chrome-hidden #word-definition,
body.chrome-hidden #era-filter-row,
body.chrome-hidden .lang-search-wrap,
body.chrome-hidden #compare-fab,
body.chrome-hidden .url-watermark {
    display: none !important;
}

/* Pre-body-class state for FOUC avoidance: same hide rules apply when
   <html data-wm-chrome="hidden"> is set by the head script (Task 2 Step 1).
   Cleared once Task 2 Step 3's body-class transfer runs. */
html[data-wm-chrome="hidden"] body #word-select,
html[data-wm-chrome="hidden"] body #word-definition,
html[data-wm-chrome="hidden"] body #era-filter-row,
html[data-wm-chrome="hidden"] body .lang-search-wrap,
html[data-wm-chrome="hidden"] body #compare-fab,
html[data-wm-chrome="hidden"] body .url-watermark {
    display: none !important;
}
```

- [ ] **Step 3: Verify edit landed**

```bash
grep -c "chrome-toggle-btn\|body.chrome-hidden\|html\[data-wm-chrome" styles.css
```
Expected: at least 18 (multiple selectors across the button styles + 6 body.chrome-hidden rules + 6 html[data-wm-chrome] rules).

- [ ] **Step 4: Hold (NO COMMIT YET)** — bundled commit in Task 5.

---

## Task 2: wordmap.html — head FOUC script + button markup + JS click handler

**Files:**
- Modify: `wordmap.html` (3 separate insertions: inline head script, button markup before `.hamburger-btn`, click handler script)

- [ ] **Step 1: Add FOUC-avoidance inline script in `<head>`**

The script must run before `<body>` is parsed, so the hide rules are in effect from the very first paint. Since `<body>` doesn't exist yet at `<head>` time, the script sets a `data-wm-chrome="hidden"` attribute on `<html>`. The styles.css block from Task 1 already targets this attribute (it was added together with the `body.chrome-hidden` rules — verify by grep).

Sanity-check Task 1 already includes the `html[data-wm-chrome="hidden"] body …` rules:
```bash
grep -c 'html\[data-wm-chrome' styles.css
```
Expected: 6 (one per hidden component). **If 0**: stop and fix Task 1's CSS block — append the rules listed in **CSS addendum below** before continuing.

Locate `</head>`:
```bash
grep -n "^</head>" wordmap.html | head -1
```

Use Edit. Anchor on a stable 2-line context just before `</head>` (read those lines first to confirm uniqueness). Insert the script block immediately before the closing `</head>`:

```html
    <script>
        // Chrome-toggle FOUC avoidance: stash the persisted choice on <html>
        // before <body> parses. Paired with html[data-wm-chrome="hidden"]
        // rules in styles.css. The body-class transfer happens in Task 2 Step 3.
        // Spec: docs/superpowers/specs/2026-05-26-chrome-toggle-design.md
        (function () {
            try {
                if (localStorage.getItem('wm-chrome-hidden') === '1') {
                    document.documentElement.dataset.wmChrome = 'hidden';
                }
            } catch (e) { /* localStorage blocked (private-browsing iOS Safari) — silent */ }
        })();
    </script>
```

**CSS addendum** (apply to Task 1's CSS block in styles.css if not already present):

```css
/* Pre-body-class state for FOUC avoidance: same hide rules apply when
   <html data-wm-chrome="hidden"> is set by the head script. Cleared once
   the body-class transfer runs (Task 2 Step 3). */
html[data-wm-chrome="hidden"] body #word-select,
html[data-wm-chrome="hidden"] body #word-definition,
html[data-wm-chrome="hidden"] body #era-filter-row,
html[data-wm-chrome="hidden"] body .lang-search-wrap,
html[data-wm-chrome="hidden"] body #compare-fab,
html[data-wm-chrome="hidden"] body .url-watermark {
    display: none !important;
}
```

(If Task 1's CSS block was committed without these lines, append them now via Edit on the styles.css block — same anchor as Task 1.)

- [ ] **Step 2: Add button markup before `.hamburger-btn`**

Locate the hamburger button:
```bash
grep -n 'class="hamburger-btn"' wordmap.html | head -3
```
Expected: line ~1879 with `<label for="hdr-menu-toggle" class="hamburger-btn"...`

Use Edit to insert the button BEFORE the `<label>` line:

Old (line 1879):
```
        <label for="hdr-menu-toggle" class="hamburger-btn" aria-label="Menu" aria-controls="header-collapse" tabindex="0">☰</label>
```

New:
```
        <button type="button" id="chrome-toggle" class="chrome-toggle-btn" aria-label="Hide UI overlays" title="Hide UI overlays">
            <svg class="icon-on"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            <svg class="icon-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
        </button>
        <label for="hdr-menu-toggle" class="hamburger-btn" aria-label="Menu" aria-controls="header-collapse" tabindex="0">☰</label>
```

- [ ] **Step 3: Add click handler + positioning + FOUC body-class transfer**

Find a suitable JS area. The existing trivia-btn positioning logic is around line 2148-2162. Add the new script block right after that block (or anywhere before `</body>`). Use Edit anchored on the existing trivia move logic to insert below it.

Search for the end of the trivia move block:
```bash
grep -n "insertBefore(triviaBtn, hamburgerBtn)" wordmap.html | head -3
```

Find a stable anchor 2-3 lines below that point and insert this script block:

```html
    <script>
        // Chrome-toggle: click handler + positioning + FOUC body-class transfer.
        // Spec: docs/superpowers/specs/2026-05-26-chrome-toggle-design.md
        (function () {
            const btn = document.getElementById('chrome-toggle');
            if (!btn) return;
            const headerBar = document.querySelector('.site-header-bar');
            const hamburgerBtn = headerBar && headerBar.querySelector('.hamburger-btn');

            // Part 2 of FOUC: transfer html[data-wm-chrome] to body.chrome-hidden
            // now that <body> exists. Then clear the html marker so the
            // pre-body CSS rules cease to apply (body.chrome-hidden takes over).
            if (document.documentElement.dataset.wmChrome === 'hidden') {
                document.body.classList.add('chrome-hidden');
                delete document.documentElement.dataset.wmChrome;
            }

            // Position the button. On mobile (≤640px) it sits just LEFT of
            // the hamburger button. On PC the hamburger is display:none, so
            // moving chrome-toggle to be the LAST child of .site-header-bar
            // puts it visually at the rightmost (after .header-url).
            function positionChromeToggle() {
                if (!headerBar || !hamburgerBtn) return;
                const isMobile = window.matchMedia('(max-width: 640px)').matches;
                if (isMobile) {
                    if (btn.nextElementSibling !== hamburgerBtn) {
                        headerBar.insertBefore(btn, hamburgerBtn);
                    }
                } else {
                    if (btn !== headerBar.lastElementChild) {
                        headerBar.appendChild(btn);
                    }
                }
            }
            positionChromeToggle();
            window.addEventListener('resize', positionChromeToggle);

            // Click toggles state + persists + refreshes labels (i18n keys
            // are read each time so applyUILang() doesn't need to know about
            // this button explicitly; we re-resolve on each toggle).
            function refreshLabels() {
                const hidden = document.body.classList.contains('chrome-hidden');
                const key = hidden ? 'chromeToggleShow' : 'chromeToggleHide';
                const label = (typeof i18n === 'function') ? i18n(key) : (hidden ? 'Show UI overlays' : 'Hide UI overlays');
                btn.setAttribute('aria-label', label);
                btn.setAttribute('title', label);
            }
            btn.addEventListener('click', function () {
                document.body.classList.toggle('chrome-hidden');
                try {
                    localStorage.setItem('wm-chrome-hidden',
                        document.body.classList.contains('chrome-hidden') ? '1' : '0');
                } catch (e) { /* silent — toggle still works for the session */ }
                refreshLabels();
            });
            refreshLabels();

            // Re-apply labels when UI lang changes. Hook into the same
            // applyUILang() flow used elsewhere by exposing a small global.
            window.__refreshChromeToggleLabels = refreshLabels;
        })();
    </script>
```

- [ ] **Step 4: Add i18n strings to the existing UI-string map**

Locate the existing string map (around wordmap.html:2726):
```bash
grep -n "searchPlaceholder: { en:" wordmap.html | head -3
```

Use Edit to add two new keys to the same map. Anchor on the `searchPlaceholder` line (it's a stable single occurrence). Insert AFTER its closing `},` line.

Example: read the area around `searchPlaceholder` to find the exact closing `},` for that entry, then insert the two new keys below it. Use Edit with a unique 2-line old_string covering `searchPlaceholder: { en: …, …, },` and replace with the same text plus the two new lines.

New keys to add (full 19 UI-lang coverage — match the lang set used elsewhere in the same map):

```js
            chromeToggleHide: { en: 'Hide UI overlays', ja: 'UI を隠す', ko: 'UI 숨기기', zh: '隐藏 UI 覆盖层', yue: '隱藏 UI 覆蓋', vi: 'Ẩn lớp phủ UI', th: 'ซ่อนชั้น UI', id: 'Sembunyikan UI', hi: 'UI ओवरले छिपाएँ', de: 'UI ausblenden', fr: 'Masquer l’UI', it: 'Nascondi UI', es: 'Ocultar UI', pt: 'Ocultar UI', ru: 'Скрыть UI', uk: 'Сховати UI', ar: 'إخفاء واجهة المستخدم', he: 'הסתר את ממשק המשתמש', sw: 'Ficha UI' },
            chromeToggleShow: { en: 'Show UI overlays', ja: 'UI を表示', ko: 'UI 표시', zh: '显示 UI 覆盖层', yue: '顯示 UI 覆蓋', vi: 'Hiện lớp phủ UI', th: 'แสดงชั้น UI', id: 'Tampilkan UI', hi: 'UI ओवरले दिखाएँ', de: 'UI einblenden', fr: 'Afficher l’UI', it: 'Mostra UI', es: 'Mostrar UI', pt: 'Mostrar UI', ru: 'Показать UI', uk: 'Показати UI', ar: 'إظهار واجهة المستخدم', he: 'הצג את ממשק המשתמש', sw: 'Onyesha UI' },
```

(If the existing string map uses a different set of UI langs, match that set exactly. Read 5 lines of an existing entry first to confirm the UI-lang keys.)

- [ ] **Step 5: Hook into applyUILang() to refresh button labels on lang switch**

Locate `applyUILang`:
```bash
grep -n "function applyUILang\|applyUILang =" wordmap.html | head -3
```

Find the spot where existing aria-label / title attrs are refreshed (look for `setAttribute('aria-label'` near applyUILang). Add one line that calls the global exposed in Step 3:

Use Edit anchored on the last `setAttribute` call inside applyUILang. After it, append:

```js
            if (typeof window.__refreshChromeToggleLabels === 'function') {
                window.__refreshChromeToggleLabels();
            }
```

- [ ] **Step 6: Verify all 5 insertions landed**

```bash
grep -c "chrome-toggle\|chromeToggle\|wm-chrome-hidden\|chrome-hidden\|__refreshChromeToggleLabels" wordmap.html
```
Expected: at least 12 (multiple references across the inserted blocks).

- [ ] **Step 7: Hold (NO COMMIT YET).**

---

## Task 3: Manual sanity check — verify in-browser

**Files:** none modified

This task verifies the implementation works before the cache-buster bump and commit. It can be run by the human reviewing the PR or by the implementer.

- [ ] **Step 1: Start local server**

Look for an existing dev-server script. Most LangMap setups use a tiny Python server:
```bash
ls server.py
```
If present, start it in the background:
```bash
python3 server.py 8000 &
```
If `server.py` doesn't exist, use:
```bash
python3 -m http.server 8000 &
```

- [ ] **Step 2: Test desktop layout**

Open `http://localhost:8000/wordmap.html` in a browser at 1280px wide.

Verify:
- chrome-toggle button appears at the FAR RIGHT of the header (after "langmap.heuron.com" URL)
- Eye icon visible
- Click → all 6 components disappear (word selector, era/filter, search, compare FAB, watermark)
- Trivia button, 2D/3D toggle, zoom +/- still visible
- Icon swaps to slashed eye, button background turns blue
- Click again → everything returns

- [ ] **Step 3: Test mobile layout**

Resize browser to ≤640px wide (or use DevTools device mode).

Verify:
- chrome-toggle moves to be LEFT of the hamburger button (☰)
- Same hide/show behavior
- Toggle persists if you reload at this width

- [ ] **Step 4: Test localStorage persistence**

With chrome OFF, reload the page (Cmd+R / F5).

Verify:
- Page loads with chrome ALREADY hidden — no flash of UI then disappear (FOUC check)
- Icon shows slashed eye on load
- Click → restores everything

- [ ] **Step 5: Test i18n**

Change UI language via the header select.

Verify:
- Tooltip / aria-label on chrome-toggle reflects new lang's translation
- Test at least 3 langs (ja, ko, ar — to catch RTL too)

- [ ] **Step 6: Test resize transition**

Open at 1280px, toggle OFF, drag to ≤640px, then back.

Verify:
- chrome-toggle repositions correctly across the breakpoint
- No double-instance, no DOM leak

- [ ] **Step 7: Stop server**

```bash
pkill -f "python3 server.py\|http.server" 2>/dev/null || true
```

- [ ] **Step 8: Report findings**

If any step fails, fix in Task 2 before proceeding to Task 4. If all pass, continue.

---

## Task 4: Cache-buster bump + validator + bundled commit

**Files:**
- Modify: `wordmap.html` (the `styles` cache-buster key in WM_ASSET_VERSION + the static `<link href="styles.css?v=N">` if present)

- [ ] **Step 1: Identify current `styles` cache-buster value**

```bash
grep -nE "styles:\s+[0-9]+|styles.css\?v=" wordmap.html | head -5
```
Record `styles: N` (e.g. `styles: 81`). The static `<link href="styles.css?v=N">` should also exist near top of file.

- [ ] **Step 2: Bump `styles` key**

Use Edit:
- Old: `            styles:    N,` (replace N with actual current value, preserving whitespace exactly)
- New: `            styles:    <N+1>,`

- [ ] **Step 3: Bump the static `<link>` tag**

```bash
grep -nE 'href="styles.css\?v=' wordmap.html | head -3
```

Use Edit on the matching line:
- Old: `<link rel="stylesheet" href="styles.css?v=N">`
- New: `<link rel="stylesheet" href="styles.css?v=<N+1>">`

(The exact attribute order / quote style depends on the file; copy what's there.)

- [ ] **Step 4: Final validator + drift check**

```bash
node validate_wordmap_data.js 2>&1 | grep -E "ERRORS|✗|FAIL|PASS|\[#19\]" | head -10
```
Expected:
- 1 ERROR (`bug.words.hello` baseline only)
- No `[#19]` cache-buster drift

- [ ] **Step 5: Stage and commit**

```bash
git -C /home/jounlai/langmap/.claude/worktrees/feat-chrome-toggle status
```
Should show: `styles.css`, `wordmap.html` modified.

If `docs/words/LANG_CODES.md` is also modified (auto-regen date), do NOT stage it.

```bash
git add styles.css wordmap.html
git commit -m "$(cat <<'EOF'
Wordmap: chrome-toggle button — one-click clean-view mode

New header button (#chrome-toggle) hides/shows 6 map-chrome components
for screenshot / kiosk / embedded use cases:
- Word selector (+ caption)
- Era selector + filter FAB
- Language search
- Compare FAB
- URL watermark credit

Kept visible: trivia, 2D/3D, zoom, tile attribution, hamburger, map.

State persists via localStorage (wm-chrome-hidden). Inline head script
sets a pre-body marker (html[data-wm-chrome="hidden"]) so the hide
rules apply before paint — no flash of UI on reload.

Icon: inline SVG eye / eye-with-slash, CSS-driven state swap. Button
sits left of hamburger on mobile, rightmost in header on PC (via small
JS positioning on init + window resize).

i18n: 19 UI lang strings added (chromeToggleHide / chromeToggleShow);
hooked into applyUILang() so the aria-label/title refresh on UI-lang
switch.

Spec: docs/superpowers/specs/2026-05-26-chrome-toggle-design.md
Plan: docs/superpowers/plans/2026-05-26-chrome-toggle.md
EOF
)"
```

- [ ] **Step 6: Verify commit**

```bash
git log --oneline -2 && git show --stat HEAD
```
Expected: top commit is the chrome-toggle commit; `git show --stat` lists 2 files (`styles.css`, `wordmap.html`).

---

## Task 5: Merge to develop + cleanup worktree

- [ ] **Step 1: Check FF-ability**

```bash
git rev-list --left-right --count develop...HEAD
```
Expected: `0 1` (develop has 0 commits not in worktree branch; worktree has 1 unique commit).

If develop has moved since Task 0's rebase (left side > 0), rebase again:
```bash
git rebase develop
```

- [ ] **Step 2: Check main checkout is on develop and clean**

```bash
git -C /home/jounlai/langmap status --short
git -C /home/jounlai/langmap branch --show-current
```

If branch is not `develop` or there are uncommitted (non-auto-regen) changes, STOP and ask the user how to proceed.

- [ ] **Step 3: Fast-forward merge into develop**

```bash
git -C /home/jounlai/langmap merge --ff-only worktree-feat-chrome-toggle
```
Expected: `Fast-forward` + file-change summary.

- [ ] **Step 4: Verify**

```bash
git -C /home/jounlai/langmap log --oneline -2
```
Expected: top commit is the chrome-toggle commit on `develop`.

- [ ] **Step 5: Exit worktree**

Use the `ExitWorktree` tool with `action: "remove"` and `discard_changes: true`.

- [ ] **Step 6: Report summary**

Print to user:
- Commit SHA on develop
- Brief description of what changed
- Mention manual browser verification was done in Task 3 (or wasn't, if Task 3 was skipped — flag this)

---

## Self-review checklist

- [ ] **Spec coverage:** every hidden component listed in spec § "Hidden components" has a selector in Task 1's CSS rule
- [ ] **i18n coverage:** Task 2's i18n string set matches the existing wordmap.html UI-lang set (read 1 existing entry first to confirm; adjust if different)
- [ ] **No placeholders:** every old_string / new_string is concrete, no "TBD" or "similar to above"
- [ ] **FOUC handling:** Task 2 Step 1 includes the two-part script (head sets html dataset, body script transfers to body class)
- [ ] **`!important` cascade strategy:** Task 1 CSS uses `!important` on the 6 hide rules to override per-component display rules
- [ ] **Positioning logic:** Task 2 Step 3 includes both initial position AND resize listener
- [ ] **Validator step:** Task 4 explicitly runs `validate_wordmap_data.js`
- [ ] **Cache-buster:** Task 4 bumps BOTH `WM_ASSET_VERSION.styles` AND the static `<link href="styles.css?v=N">`
- [ ] **No git push:** plan does NOT push to remote (user has been gating push manually)
