// === Linguistic trivia / 言語学の豆知識 ===========================
//
// Read-aloud articles about unusual, surprising or controversial
// languages. Surfaced from a separate "📚 Trivia" button on the
// wordmap, opened in its own warm-amber modal (deliberately
// styled differently from the per-language info modal so users
// don't confuse a feature article with a data card).
//
// Each article:
//   id      — slug, used in URL hash and as anchor.
//   icon    — one-glyph emoji shown beside the title.
//   tags    — short kebab-case markers for grouping later.
//   title   — { lang: "Title" } per UI lang. en + ja required;
//             other UI langs fall back to en.
//   summary — one-line lede in each UI lang (1-2 sentences).
//   body    — HTML string per UI lang. Safe-by-construction:
//             authored here, not user-supplied, so we innerHTML it.
//             Use <h3>, <p>, <ul><li>, <strong>, <em>, <blockquote>.
//
// Adding article N+1: append to TRIVIA_ARTICLES; the renderer and
// list view pick it up automatically.

const TRIVIA_ARTICLES = [
  {
    id: 'piraha-no-numbers',
    icon: '🌳',
    tags: ['isolate', 'amazon', 'controversy', 'recursion'],
    title: {
      en: 'Pirahã — the language said to have no numbers',
      ja: '数を数えない言語、ピダハン語',
    },
    summary: {
      en: 'A tiny Amazonian isolate that allegedly lacks number words, basic colour terms, and grammatical recursion — and shook a 60-year-old theory of language.',
      ja: 'アマゾン奥地の孤立言語。数詞も基本色名も再帰文法もないとされ、半世紀続いた言語理論を揺さぶった。',
    },
    body: {
      en: `
<p>Deep in the Brazilian Amazon, fewer than 800 people speak <strong>Pirahã</strong> (pronounced roughly <em>pee-da-HAN</em>). It is a language isolate — no proven relatives anywhere on Earth — and has become one of the most fiercely debated cases in modern linguistics.</p>

<div class="trivia-actions">
  <button type="button" class="trivia-action" data-action="focus" data-code="myp" data-zoom="6">📍 Show Pirahã on the map</button>
  <button type="button" class="trivia-action" data-action="panto" data-lat="-5" data-lng="-62" data-zoom="4" data-codes="myp">🌳 Fly to the Amazon basin</button>
</div>

<p>The fieldworker who triggered the storm is <strong>Daniel Everett</strong>, a missionary-turned-linguist who lived with the Pirahã for years. According to his reports, the language is missing several things that 20th-century linguists had argued were universal in human language:</p>

<ul>
  <li><strong>No exact number words.</strong> The community uses only <em>hói</em> ("a small amount") and <em>hoí</em> ("a larger amount") — a contrast of quantity, not of count. In experiments, Pirahã speakers cannot reliably match piles of 4 vs 5 objects, even when motivated to.</li>
  <li><strong>No basic colour vocabulary.</strong> Colours are described compositionally — "like blood", "unripe", "dirty" — rather than with fixed labels like "red" or "green".</li>
  <li><strong>No grammatical recursion.</strong> Sentences cannot be embedded inside other sentences. This directly challenges <strong>Noam Chomsky's</strong> claim that recursion is <em>the</em> defining feature that separates human language from animal communication. If Everett is right, Pirahã breaks the theory.</li>
  <li><strong>No creation myths, no fiction, no stories about ancestors no living person knew.</strong> A strong cultural norm — Everett calls it the "immediacy of experience" principle — restricts speech to what the speaker or a living interlocutor has personally witnessed.</li>
</ul>

<div class="trivia-actions">
  <button type="button" class="trivia-action" data-action="setword" data-word="one" data-code="myp">🔢 Compare "one" across languages</button>
  <button type="button" class="trivia-action" data-action="setword" data-word="mother" data-code="myp">👩 Compare "mother"</button>
</div>

<p>Stranger still, Pirahã is one of a small handful of languages that can be transmitted across <em>four parallel channels</em>: it can be <strong>spoken, whistled, hummed, or shouted</strong>. Because Pirahã has only three vowels and eight consonants, its prosody (pitch and rhythm) carries an unusually heavy informational load — enough that mothers can hum entire sentences to babies without articulating a single consonant.</p>

<blockquote>"Tones, stress, and syllable length are far more important than vowels and consonants in carrying the message in Pirahã." — Daniel Everett</blockquote>

<p>Everett's claims are <strong>hotly contested</strong>. Later researchers, including Andrew Nevins, David Pesetsky and Cilene Rodrigues, have argued that Pirahã does have recursion — just rarely used — and that the number facts can be explained without exotic cognitive consequences. Everett has fired back; the debate is still open.</p>

<p>What is <em>not</em> contested is the cultural restriction against speaking about non-experienced things, and Pirahã's astonishing multi-channel communication. Whichever side wins the recursion war, Pirahã has done what very few languages ever do: forced linguists to ask, once again, whether language shapes thought — or thought shapes language.</p>
      `,
      ja: `
<p>ブラジル・アマゾンの奥地に、話者わずか700〜800人の<strong>ピダハン語（Pirahã）</strong>がある。世界のどの言語とも親縁関係が証明されていない孤立言語で、現代言語学でもっとも激しい論争を呼んでいる言語のひとつだ。</p>

<div class="trivia-actions">
  <button type="button" class="trivia-action" data-action="focus" data-code="myp" data-zoom="6">📍 地図でピダハン語を見る</button>
  <button type="button" class="trivia-action" data-action="panto" data-lat="-5" data-lng="-62" data-zoom="4" data-codes="myp">🌳 アマゾン流域へ飛ぶ</button>
</div>

<p>論争に火をつけたのは、伝道師から言語学者に転じ、長年ピダハン社会に住み込んだ<strong>ダニエル・エヴェレット</strong>である。彼の報告によれば、ピダハン語には、20世紀の言語学が「人類言語の普遍要素」と考えてきたものがいくつも欠けているという。</p>

<ul>
  <li><strong>正確な数詞がない。</strong> 使われるのは <em>hói</em>（少し）と <em>hoí</em>（多め）の二語だけで、これは数ではなく<strong>量の対比</strong>にすぎない。実験では、ピダハン語話者は動機づけがあっても 4 個と 5 個の山を正確に対応づけられない。</li>
  <li><strong>基本色名がない。</strong> 色は「血のような」「熟れていない」「汚れた」などと比喩的に説明されるだけで、「赤」「緑」のような固定ラベルは存在しない。</li>
  <li><strong>再帰がない。</strong> 文を文の中に埋め込む構造を持たない。これは<strong>ノーム・チョムスキー</strong>の主張──「再帰こそが人間言語を動物の伝達と隔てる唯一にして本質的特徴である」──を真っ向から揺さぶる発見だった。エヴェレットが正しければ、チョムスキー理論はピダハン語ひとつで崩れることになる。</li>
  <li><strong>創世神話も、虚構も、誰も会ったことのない祖先の物語もない。</strong> エヴェレットが「経験の直接性」原理と呼ぶ強い文化規範があり、話し手か、あるいは生きている誰かが実際に見た出来事しか語ってはならない、とされる。</li>
</ul>

<div class="trivia-actions">
  <button type="button" class="trivia-action" data-action="setword" data-word="one" data-code="myp">🔢 「1」を世界中の言語で見る</button>
  <button type="button" class="trivia-action" data-action="setword" data-word="mother" data-code="myp">👩 「母」を比べる</button>
</div>

<p>さらに不思議なのは、ピダハン語が世界的にも珍しい<em>四つの並列チャネル</em>で伝達できる言語であることだ。<strong>普通に話す・口笛で吹く・ハミングする・叫ぶ</strong>──そのいずれでも完全な文を伝えられる。母音が3つ、子音がわずか8つしかないため、声調・強勢・音節長といった韻律情報が極端に重い役割を担い、母親は子音を一つも発音せずにメロディだけで赤ん坊にピダハン語を語りかけることができる。</p>

<blockquote>「ピダハン語では、声調・強勢・音節の長さこそが、母音や子音よりはるかに重要に意味を運んでいる」── ダニエル・エヴェレット</blockquote>

<p>エヴェレットの主張は<strong>学界で激しく争われている</strong>。アンドリュー・ネヴィンス、デイヴィッド・ペセツキー、シレーネ・ロドリゲスらは「ピダハン語にも再帰はある、ただ頻度が低いだけだ」「数詞の事実は奇抜な認知含意なしに説明できる」と反論し、エヴェレットも応戦している。論争はまだ決着していない。</p>

<p>しかし、「経験していないことは語らない」という文化規範と、口笛・ハミング・叫びによる多チャネル伝達は、誰も否定しない事実である。再帰論争の勝者がどちらになるにせよ、ピダハン語は「言語が思考を形作るのか、それとも思考が言語を形作るのか」──サピア＝ウォーフ以来60年来の問いを、もう一度言語学の中心に押し戻した、稀有な言語なのだ。</p>
      `,
    },
  },
];

// Expose to global so wordmap.html can read it whether this file
// is loaded as a classic <script> or future-bundled.
if (typeof window !== 'undefined') {
  window.TRIVIA_ARTICLES = TRIVIA_ARTICLES;
}
