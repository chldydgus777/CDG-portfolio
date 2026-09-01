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
