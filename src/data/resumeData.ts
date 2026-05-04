/**
 * Single Source of Truth (SSOT) for the entire portfolio site.
 * 이력서(https://cdgcdgcdg.notion.site/cdg) 기준으로 작성된 단일 데이터 소스.
 * UI 컴포넌트는 이 파일에서만 데이터를 읽는다.
 */

export type Profile = {
  name: string;
  nameEn: string;
  role: string;
  currentRole: {
    company: string;
    position: string;
    sinceISO: string;
    sinceLabel: string;
  };
  tagline: string;
  introduction: string[];
  email: string;
  socials: { label: string; href: string }[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Highlight = {
  title: string;
  description: string;
  metrics?: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  duration?: string;
  team?: string;
  serviceName?: string;
  serviceDescription?: string;
  stack: string[];
  highlights: Highlight[];
};

export type PreviousCareer = {
  company: string;
  team: string;
  period: string;
  description: string;
};

export type Education = {
  institution: string;
  program: string;
  period: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export type BlogConfig = {
  enabled: boolean;
  comingSoonMessage: string;
};

/* -------------------------------------------------------------------------- */
/*                                  Profile                                   */
/* -------------------------------------------------------------------------- */

export const profile: Profile = {
  name: "최용현",
  nameEn: "Choi Yong-hyun",
  role: "Frontend Developer · Product Owner",
  currentRole: {
    company: "Jigeumfilm (지금필름)",
    position: "Product Owner",
    sinceISO: "2026-03-16",
    sinceLabel: "2026.03.16 ~",
  },
  tagline: "사용자에게 안정적인 경험을 제공하는 프론트엔드 개발자.",
  introduction: [
    "서비스 초기 설계부터 구현까지 전체 과정에 참여하며 다양한 서비스 프로젝트를 경험했습니다.",
    "기획, 디자인 등 다양한 직군과 긴밀히 소통하며 기술적 문제를 해결하고, 비즈니스 목표에 부합하는 제품을 만드는 데 익숙합니다.",
    "새로운 기술 학습을 즐기며, 책임감을 바탕으로 팀의 성장에 긍정적인 영향을 주는 동료가 되는 것을 목표로 합니다.",
  ],
  email: "chldydgus777@kakao.com",
  socials: [
    { label: "Email", href: "mailto:chldydgus777@kakao.com" },
    { label: "GitHub", href: "https://github.com/chldydgus777" },
    { label: "Resume", href: "https://cdgcdgcdg.notion.site/cdg" },
  ],
};

/* -------------------------------------------------------------------------- */
/*                                   Skills                                   */
/* -------------------------------------------------------------------------- */

export const skillGroups: SkillGroup[] = [
  {
    category: "Skill",
    items: ["TypeScript", "JavaScript", "React", "Zustand", "React Query", "Recoil"],
  },
  {
    category: "Experience",
    items: ["Next.js", "Nuxt", "Vue"],
  },
  {
    category: "CSS",
    items: ["Tailwind", "Styled-Components", "Emotion"],
  },
  {
    category: "Design",
    items: ["Zeplin", "Figma"],
  },
  {
    category: "Tool",
    items: ["GitHub", "GitLab"],
  },
];

/* -------------------------------------------------------------------------- */
/*                                 Experience                                 */
/* -------------------------------------------------------------------------- */

export const experiences: Experience[] = [
  {
    company: "Jigeumfilm (지금필름)",
    role: "Product Owner",
    period: "2026.03 ~ Present",
    serviceName: "Product Ownership",
    serviceDescription:
      "프론트엔드 개발 경험을 바탕으로 제품 방향성과 기획을 책임지는 PO 역할 수행 중.",
    stack: ["Product Strategy", "Spec Writing", "Cross-functional"],
    highlights: [
      {
        title: "개발–기획 사이의 통역자",
        description:
          "프론트 개발자로서의 구현 감각을 활용해, 기획 의도를 컴포넌트·상태·API 단위로 번역하고 우선순위를 빠르게 합의한다.",
      },
    ],
  },
  {
    company: "(주) 커넥션스튜디오",
    role: "Frontend Developer",
    period: "2024.09 ~ 2025.07",
    duration: "약 11개월",
    team: "백엔드 2명 · 디자이너 1명",
    serviceName: "캐스팅보트",
    serviceDescription:
      "아티스트와 캐스팅 담당자를 연결하는 캐스팅·오디션 플랫폼.",
    stack: ["React", "Tailwind", "React Query", "Recoil", "Zustand"],
    highlights: [
      {
        title: "이미지 업로드 성능 최적화",
        description:
          "고화질 프로필 이미지를 화질 저하 없이 빠르게 업로드하기 위해 `browser-image-compression` 라이브러리를 도입. 데이터 로딩 중 스켈레톤 UI로 체감 대기시간을 줄였다.",
        metrics: [
          "8.1MB → 256KB (90%↓)",
          "4.19s → 111ms (37×↓)",
          "서버 비용 절감",
        ],
      },
      {
        title: "5,000+ 프로필 리스트 가상화",
        description:
          "`React Query`의 `useInfiniteQuery`로 무한 스크롤을 구현하고, `React-Virtuoso`로 화면에 보이는 항목만 DOM에 렌더링. 데이터 양과 무관하게 부드러운 스크롤·초기 로딩 속도를 확보했다.",
        metrics: ["5,000+ items · smooth 60fps"],
      },
      {
        title: "Recoil → Zustand 전역 상태 마이그레이션",
        description:
          "atom 단위 key 관리·업데이트 속도·유지보수 불확실성 문제를 해결하기 위해 Zustand로 전환. 보일러플레이트 제거와 상태 관리 간결화로 기능 추가 속도를 끌어올렸다.",
      },
      {
        title: "비즈니스 모델 구현 및 첫 수익화",
        description:
          "웰컴페이 결제 시스템을 연동해 유료 멤버십 구독 기능을 추가하고, 2025년 1월 서비스 첫 매출을 만들었다.",
        metrics: ["2025.01 첫 매출"],
      },
      {
        title: "MVP 2개월 릴리즈",
        description:
          "React Query·Zustand 등을 도입해 생산성과 유지보수를 함께 고려한 코드 베이스를 설계, 2개월 내 MVP를 시장에 진입시켰다.",
        metrics: ["MVP in 2 months"],
      },
      {
        title: "매니저 role 온라인화",
        description:
          "오프라인으로 진행되던 기존 프로필 전달 방식을 온라인으로 개발해 매니저의 프로필 전달 공수를 줄였다.",
      },
      {
        title: "스탭용 통합 캐스팅 워크플로우",
        description:
          "탭 기반 단일 관리 페이지에서 캐스팅 전 과정을 한눈에 파악·관리할 수 있도록 구현해, 화면 간 불필요한 동선을 최소화했다.",
      },
    ],
  },
  {
    company: "(주) 러브에그",
    role: "Frontend Developer",
    period: "2023.09 ~ 2024.02",
    duration: "5개월",
    team: "백엔드 1명 · 디자이너 1명 · iOS 3명 · AOS 1명",
    serviceName: "레저 예약 / 커머스 플랫폼",
    serviceDescription:
      "레저 상품 예약과 커머스 기능을 함께 제공하는 서비스의 초기 설계 및 구현 담당.",
    stack: ["Next.js", "React", "Tailwind", "React Query", "Recoil"],
    highlights: [
      {
        title: "커머스 관리자 페이지 구축",
        description:
          "입점 신청·승인 프로세스, 상품 등록·수정, 주문 관리(출고/교환/반품/취소), 계정 관리 시스템까지 일반 관리자 기능을 종합적으로 구현.",
      },
      {
        title: "통합 관리자 기능 개발",
        description:
          "전체 상점·입점 상점 관리, 정보 변경 이력 확인, 상점별 상품·주문·계정 관리 기능을 제공하는 통합 어드민을 개발.",
      },
      {
        title: "모바일 웹 결제·예약",
        description:
          "포인트/쿠폰 할인 적용 및 결제 기능 구현, 상품 상세 페이지 UI/UX 개선, 레저 예약 페이지와 예약 시스템 연동.",
      },
    ],
  },
  {
    company: "(주) 슬로그인",
    role: "Frontend Developer",
    period: "2022.06 ~ 2023.09",
    duration: "1년 3개월",
    team: "백엔드 1명",
    serviceName: "프라이빗 캠핑장 예약",
    serviceDescription:
      "프라이빗 개인 캠핑장 예약 서비스의 초기 설계 및 구현.",
    stack: ["React", "Tailwind", "react-i18n", "포트원"],
    highlights: [
      {
        title: "예약 및 일정 관리 시스템",
        description:
          "캠핑장 등록·수정·삭제와 예약·일정 관리 기능을 개발하고, 다양한 디바이스에 최적화된 반응형 UX를 제공.",
      },
      {
        title: "다국어(i18n) 시스템",
        description: "`React-i18n`을 활용해 다국어 콘텐츠 제공.",
      },
      {
        title: "결제 모듈 연동",
        description: "나이스페이먼츠 `포트원` 결제 모듈을 연동.",
      },
    ],
  },
  {
    company: "(주) 니더",
    role: "Frontend Developer",
    period: "2021.07 ~ 2021.12",
    duration: "5개월",
    stack: ["Vue", "Nuxt", "Scss"],
    highlights: [
      {
        title: "본인인증 연동",
        description: "휴대폰 본인인증 및 카카오 인증 연동.",
      },
      {
        title: "JavaScript → Nuxt 마이그레이션",
        description:
          "기존 JavaScript 코드를 Nuxt.js 기반으로 마이그레이션해 프레임워크 기반 구조로 전환.",
      },
      {
        title: "메인 인터랙션 개선",
        description:
          "메인 페이지 푸시 카드 애니메이션 추가 및 인터랙션 최적화, 마우스 이벤트 기반 말풍선 복사/붙여넣기 기능 구현.",
      },
      {
        title: "사장님 페이지",
        description: "알바 구인글 등록·수정·삭제 기능 구현.",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                            Previous (pre-dev) career                       */
/* -------------------------------------------------------------------------- */

export const previousCareers: PreviousCareer[] = [
  {
    company: "이노엘이디솔루션즈",
    team: "LED 조명개발팀",
    period: "2019.07 ~ 2020.11 (1년 4개월)",
    description: "광교 갤러리아 벽부등 개발 및 SCM.",
  },
];

/* -------------------------------------------------------------------------- */
/*                              Education / Certs                             */
/* -------------------------------------------------------------------------- */

export const education: Education[] = [
  {
    institution: "가톨릭대학교",
    program: "IT 파이낸스",
    period: "2024.03 ~",
  },
];

export const certifications: Certification[] = [
  {
    name: "전기기능사",
    issuer: "한국산업인력공단",
    date: "2015.06",
  },
];

/* -------------------------------------------------------------------------- */
/*                                    Blog                                    */
/* -------------------------------------------------------------------------- */

export const blogConfig: BlogConfig = {
  enabled: false,
  comingSoonMessage:
    "기술 노트와 회고를 곧 이 자리에 정리합니다. 라우팅과 레이아웃은 미리 잡아두었습니다.",
};
