# 스펙 — /dev · /po 이력서 공통 컴포넌트 추출

## 배경

`src/app/dev/page.tsx`(390줄)와 `src/app/po/page.tsx`(390줄)는 데이터 소스와
액센트 색상만 다르고 **레이아웃 구조가 거의 동일**하다. 현재 Nav / Hero /
Section / Education & Certifications / Contact / Footer 블록이 두 파일에
그대로 복제되어 있다. 문구나 여백을 고칠 때 항상 두 곳을 고쳐야 하고,
한쪽만 고치면 조용히 어긋난다.

프로젝트 규칙(`CLAUDE.md`): "컴포넌트 생성 시 재사용성을 극대화하고,
데이터는 하드코딩하지 않고 별도 파일에서 관리한다."

## 목표

두 페이지에서 **중복된 공통 골격만** 컴포넌트로 추출한다.
페르소나별로 의도적으로 다른 블록은 각 페이지에 그대로 둔다.

**렌더링 결과(DOM·클래스)는 현재와 100% 동일해야 한다.** 이것은 순수
리팩터링이며, 디자인 변경이 아니다.

## 결정 사항과 이유

### 왜 전부 통합하지 않는가

`/dev`와 `/po`는 같은 경력을 다른 직무 언어로 재서술한 페르소나다.
Experience·Previous Career·Skills 블록은 **의도적으로 다른 시각 언어**를 쓴다.

- `/dev`: 테두리 없는 타임라인 행(`grid-cols-[180px_1fr]` + `border-t`) — 엔지니어 이력서 톤
- `/po`: 카드(`rounded-2xl border bg-zinc-900/30 p-6`) — 제품 문서 톤

이 차이는 제거 대상이 아니라 **유지해야 할 설계**다. 억지로 하나의
컴포넌트에 variant prop을 달면 오히려 읽기 어려워진다. 따라서 이 세 블록은
각 페이지에 로컬 컴포넌트로 남긴다.

### 왜 테마를 "완성된 클래스 문자열" 객체로 넘기는가

Tailwind JIT는 소스를 정적 스캔하므로 `text-${color}-400` 같은 동적 조합은
클래스가 생성되지 않는다. 따라서 테마 토큰은 **반드시 완전한 리터럴 클래스
문자열**이어야 한다. 토큰 파일은 `tailwind.config.ts`의 `content` 글롭
(`./src/components/**/*.{ts,tsx}`)에 포함되므로 스캔된다.

## 구현

### 1. `src/components/resume/theme.ts` (신규)

```ts
export type ResumeTheme = {
  /** 네비게이션에 표시할 경로 라벨. 예: "/dev" */
  slug: string;
  /** 페이지 상단 배경 글로우 */
  glow: string;
  /** 네비게이션 상단 그라데이션 바 */
  navGradient: string;
  /** 액센트 텍스트 색 */
  accentText: string;
  /** 액센트 배경 색 (점·펄스 인디케이터) */
  accentDot: string;
  /** 액센트 hover 텍스트 색 */
  accentHover: string;
  /** 네비게이션 링크 밑줄 */
  navUnderline: string;
  /** Contact 이메일 링크 hover 밑줄 색 */
  accentDecorationHover: string;
  /** Hero 스탯 그리드 컨테이너 클래스 */
  statsGrid: string;
  /** Hero 스탯 각 항목 클래스 */
  statsItem: string;
};

export const devTheme: ResumeTheme = {
  slug: "/dev",
  glow: "bg-sky-500/10",
  navGradient: "from-sky-500 via-cyan-400 to-transparent",
  accentText: "text-sky-400",
  accentDot: "bg-sky-400",
  accentHover: "hover:text-sky-400",
  navUnderline: "after:bg-sky-400",
  accentDecorationHover: "hover:decoration-sky-400",
  statsGrid:
    "enter mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 sm:grid-cols-4",
  statsItem:
    "bg-zinc-950 p-4 transition-colors duration-300 hover:bg-zinc-900/70 sm:p-5",
};

export const poTheme: ResumeTheme = {
  slug: "/po",
  glow: "bg-violet-500/10",
  navGradient: "from-violet-500 via-fuchsia-400 to-transparent",
  accentText: "text-violet-400",
  accentDot: "bg-violet-400",
  accentHover: "hover:text-violet-400",
  navUnderline: "after:bg-violet-400",
  accentDecorationHover: "hover:decoration-violet-400",
  statsGrid: "enter mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4",
  statsItem:
    "rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-colors duration-300 hover:border-violet-500/40 hover:bg-zinc-900/70 sm:p-5",
};
```

### 2. `src/components/resume/sections.tsx` (신규)

서버 컴포넌트로 작성한다 (`"use client"` 금지 — 전부 정적 렌더링).
`src/data/resumeData.ts`의 `Profile`, `HeroStat`, `Education`,
`Certification` 타입을 import 해서 쓴다.

아래를 export 한다. **각 컴포넌트의 JSX는 현재 `dev/page.tsx`(또는
`po/page.tsx`)에 있는 것을 그대로 옮기고, 색상 관련 클래스만 테마 토큰으로
치환한다. 마크업 구조·여백·aria 속성은 한 글자도 바꾸지 않는다.**

- `export const NAV_LINKS` — About / Experience / Skills / Contact (현재와 동일)
- `export const isCurrent = (period: string) => /present|현재/i.test(period)`
- `<ResumeNav theme profile />` — 현재 `Nav`. `/dev` 텍스트 자리에 `theme.slug`
- `<ResumeHero theme profile stats />` — 현재 `Hero`. `stats: HeroStat[]`
- `<Section theme id index title>{children}</Section>` — 현재 `Section`
- `<EducationSection education certifications />` — 두 페이지가 완전히 동일하므로 테마 불필요
- `<ContactSection theme profile />` — 현재 Contact `<div className="reveal">` 내부
- `<ResumeFooter profile />` — 두 페이지 완전 동일

`ResumeHero`의 스탯 그리드는 `theme.statsGrid` / `theme.statsItem`을 쓰되
`style={{ animationDelay: "320ms" }}`는 그대로 유지한다.

### 3. `src/app/dev/page.tsx` 수정

- 위 공통 컴포넌트를 import 하고 로컬 `Nav`/`Hero`/`Section`/`isCurrent`/
  `NAV_LINKS` 정의와 Education·Contact·Footer 인라인 JSX를 제거한다.
- `ExperienceEntry`, `PreviousCareerEntry`, Skills `<dl>` 블록은 **그대로 유지**.
  단 이들 안의 액센트 색상은 `devTheme.accentText` / `devTheme.accentDot`을 쓴다.
- `<Section>` 호출에 `theme={devTheme}`를 넘긴다.

### 4. `src/app/po/page.tsx` 수정

`/dev`와 동일한 방식. `ExperienceCard`, `PreviousCareerCard`, Skills `<dl>`은
그대로 유지하고 `poTheme`을 쓴다.

## 하지 말 것

- `src/data/resumeData.ts` 수정 금지 (데이터는 이미 정리됨)
- 새 의존성 추가 금지
- 클래스 이름·여백·폰트 크기 변경 금지 (순수 추출만)
- `"use client"` 추가 금지
- `src/app/page.tsx`, `layout.tsx`, `globals.css`, `tailwind.config.ts` 수정 금지

## 완료 기준

1. `npx tsc --noEmit` 무오류
2. `npm run build` 성공, 라우트는 `/`, `/dev`, `/po` 3개 그대로
3. `npm run lint` 무오류
4. `dev/page.tsx`와 `po/page.tsx`가 각각 눈에 띄게 짧아짐 (목표: 각 250줄 이하)
