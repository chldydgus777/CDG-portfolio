/**
 * Single Source of Truth (SSOT) for the entire portfolio site.
 * 모든 이력/성과 데이터는 이 파일에서만 관리한다. UI는 여기서만 데이터를 읽는다.
 */

export type Profile = {
  name: string;
  nameEn: string;
  role: string;
  company: string;
  tagline: string;
  email: string;
  yearsOfExperience: number;
  socials: { label: string; href: string }[];
};

export type Competency = {
  title: string;
  summary: string;
  keywords: string[];
};

export type Achievement = {
  headline: string;
  detail: string;
  metric?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  achievements: Achievement[];
  stack: string[];
};

export type Project = {
  name: string;
  description: string;
  role: string;
  stack: string[];
  link?: string;
};

export type BlogConfig = {
  enabled: boolean;
  comingSoonMessage: string;
};

export const profile: Profile = {
  name: "최용현",
  nameEn: "Choi Yong-hyun",
  role: "Frontend Developer · Product Owner",
  company: "Jigeumfilm",
  tagline:
    "기획과 개발 사이를 잇고, 사용자 경험을 코드와 의사결정으로 함께 설계합니다.",
  email: "official@jgfilm.co.kr",
  yearsOfExperience: 3,
  socials: [
    { label: "Email", href: "mailto:official@jgfilm.co.kr" },
    { label: "GitHub", href: "https://github.com/" },
  ],
};

export const coreCompetencies: Competency[] = [
  {
    title: "개발-기획 브릿지 커뮤니케이션",
    summary:
      "PO 역할을 병행하며 기획 의도를 기술 제약과 함께 정렬한다. 요구사항을 컴포넌트와 상태 단위로 번역하고, 우선순위를 빠르게 합의한다.",
    keywords: ["Product Ownership", "Spec Writing", "Cross-functional"],
  },
  {
    title: "대용량 렌더링 최적화 (Virtualization)",
    summary:
      "5,000개 이상의 아이템을 다루는 화면에서 가상화 전략으로 스크롤 프레임 드랍을 제거하고 초기 렌더 시간을 단축했다.",
    keywords: ["Virtualization", "React", "Performance"],
  },
  {
    title: "Zustand 기반 관리자 페이지 설계",
    summary:
      "동적 색상 매핑과 다축 필터링이 필요한 관리자 페이지를 Zustand로 설계해, 상태 의존성을 단순화하고 신규 필터 추가 비용을 낮췄다.",
    keywords: ["Zustand", "State Design", "Admin UX"],
  },
];

export const experiences: Experience[] = [
  {
    company: "Jigeumfilm (지금필름)",
    role: "Product Owner / Frontend Developer",
    period: "2023 — Present",
    location: "Seoul, KR",
    summary:
      "프론트엔드 개발과 PO 역할을 병행하며 제품 방향성과 구현을 동시에 책임진다.",
    achievements: [
      {
        headline: "5,000개 대용량 렌더링 최적화",
        detail:
          "리스트/그리드 화면에 가상화를 도입해 스크롤 jank를 제거하고 메모리 점유를 줄였다.",
        metric: "5,000+ items · smooth 60fps",
      },
      {
        headline: "Zustand 기반 관리자 페이지 구축",
        detail:
          "동적 색상 매핑과 필터 조합을 상태로 모델링해 신규 필터 추가/변경 시 영향 범위를 최소화했다.",
      },
      {
        headline: "기획-개발 합의 사이클 단축",
        detail:
          "스펙을 컴포넌트와 상태 단위로 분해해 전달하면서 의사결정 횟수와 재작업을 줄였다.",
      },
    ],
    stack: ["Next.js", "TypeScript", "React", "Zustand", "Tailwind CSS"],
  },
];

export const projects: Project[] = [
  {
    name: "Jigeumfilm Admin",
    description:
      "동적 색상 매핑과 필터링이 필요한 관리자 페이지. 상태 설계를 단순화하고 신규 필터 확장 비용을 낮춘 프로젝트.",
    role: "Frontend Lead · State Architecture",
    stack: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
  },
  {
    name: "Large List Virtualization",
    description:
      "5,000개 이상의 아이템을 다루는 리스트 뷰. 가상화로 스크롤 성능과 초기 로딩을 동시에 개선.",
    role: "Frontend Developer",
    stack: ["React", "Virtualization", "Performance Profiling"],
  },
];

export const blogConfig: BlogConfig = {
  enabled: false,
  comingSoonMessage:
    "기술 노트와 회고를 곧 이 자리에 정리합니다. 라우팅과 레이아웃은 미리 잡아두었습니다.",
};
