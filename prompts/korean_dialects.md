# Korean Dialect Translation Prompt

## Task
Translate 100 sentences into authentic Korean dialects: ko_kp (North Korean), ko_bus (Busan/Gyeongsang), ko_jeju (Jeju). Each sentence must use segment IDs matching the standard Korean (ko) version.

## Dialect Guidelines

### ko_kp (North Korean / 문화어)
- Pronouns: 나 (not 저), 우리
- Vocabulary: 동무(친구), 뻐스(버스), 련습(연습), 로동(노동), 려관(호텔→려관), 벌써(이미)
- Verb endings: -ㅂ니다/-습니다 (formal), -소/-ㅂ디다 (polite)
- Avoid English loanwords: 프로그래밍→프로그람작성, 스마트폰→지능형손전화, 커피→커피 (OK), 에스프레소→X
- Sino-Korean preferences: 인공지능(AI), 체육관(gym), 비행기(airplane)
- Word spacing/pronunciation: 련습, 녀성, 리유, 로동 (initial ㄹ preserved)

### ko_bus (Busan/Gyeongsang / 경상도 사투리)
- Pronouns: 나, 우리, 니(너)
- Verb endings: -다(plain), -나(question), -가(intimate question), -데이(past), -ㄹ끼다(future), -아/어라(imperative)
- Intonation markers (pitch accent implied): 가↗, 마↘
- Vocabulary: 머(뭐), 와(왜), 카다/캐다(그렇게 하다), 그래가(그래서), 억수로(매우), 마이(많이), 함 봐라(해봐)
- Characteristic: -예/에 ending for polite, 문다(묻다), 갈끼다(갈 것이다)
- Sentence-final: -다 아이가(~잖아), -거든(assertion)

### ko_jeju (Jeju / 제주어)
- Pronouns: 나, 느(너), 이(그/그녀)
- Unique vocabulary: 하르방(할아버지), 할망(할머니), 아방(아버지), 어멍(어머니), 성님(형/오빠), 아시(아우), 놈팡이(아이), 사름(사람), 이녁(자기), 경(그래서), 혼저(어서), 무신거(뭐)
- Verb base: ᄒᆞ다 → modern approximation: 허다, 이시다(있다), 어시다(없다), 먹다→먹으다, 가다→감다
- Verb endings: -ᄒᆞ다→-허다, -수다/-쑤다(합니다), -암/엄(해요), -쩌/져(의문), -주/쥬(의문polite), -라(명령), -쿠다(~구나), -ᄒᆞ영(~해서)
- Adjective: 곱다(춥다), 뜨시다(따뜻하다), 마씀(맛있다), 족다(작다), 하영(많이)
- Grammar: -엔/앤(에는), -이랑(와/과), -디(에서), -신디(에게), 안(않)→ 안/못→못ᄒᆞ다
- Past: -았/었 → -앗/엇, Future: -ᄅ 거라 → -ᄅ 거여/거우다

## Segment Rules
1. Segment IDs must match the semantic meaning from English (en)
2. No adjacent same-ID segments
3. Keep segment boundaries aligned with standard Korean (ko) where possible
4. Text must be natural dialect, not just standard Korean with different endings

## Example Transformations

### Standard → Busan
- 저는 → 나는
- ~해요 → ~한다/~하데이
- 먹을 거예요 → 먹을끼다
- 매우 → 억수로
- 주세요 → 주이소
- ~할 수 있다 → ~할 수 있다/~하겠다
- 그녀는 → 그 사람은 / 걔는
- 있어요 → 있다 / 있데이

### Standard → Jeju
- 저는 → 나는
- ~합니다 → ~ᄒᆞᆷ수다 (modern: 험수다/험수다)
- ~해요 → ~허여/~엄
- ~했어요 → ~허엿수다/~헷주
- 먹다 → 먹다 (same but 먹엄 for polite)
- 있다 → 이시다, 없다 → 어시다
- 사람 → 사름
- 아이들 → 놈팡이덜
- 많이 → 하영
- 매우 → 하영/느영
- 주세요 → 줍서/주쿠다
- 그녀는 → 이는/걔는

### Standard → North Korean
- 호텔 → 려관
- 버스 → 뻐스
- 주세요 → 주십시오
- ~해요 → ~합니다
- 프로그래밍 → 프로그람작성
- 스마트폰 → 지능형손전화
- 와이파이 → 무선망
- 앱 → 응용프로그람
