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
  role: "Front-end Developer · Product Owner",
  currentRole: {
    company: "Jigeumfilm (지금필름)",
    position: "Product Owner",
    sinceISO: "2026-03-16",
    sinceLabel: "2026.03.16 ~",
  },
  tagline: "비즈니스 병목을 시스템으로 풀고, 결과를 수치로 증명합니다.",
  introduction: [
    "코드 구현부터 PO 의사결정까지 직접 책임. 현재 지금필름 Front-end · PO로 합류해 영상 제작 운영 어드민을 단독 설계·구축 중.",
    "지표로 판단합니다. 미매칭 65%↓, API 호출 70~80%↓, MVP 2개월 출시, 모든 의사결정을 수치로 검증.",
    "동시성·메모리 누수처럼 놓치기 쉬운 보안·성능 디테일도 누락 없이 작업, 휴먼 에러를 시스템 단에서 차단합니다.",
  ],
  email: "chldydgus777@kakao.com",
  socials: [
    { label: "Email", href: "mailto:chldydgus777@kakao.com" },
    { label: "GitHub", href: "https://github.com/chldydgus777" },
    // { label: "Resume", href: "https://cdgcdgcdg.notion.site/cdg" },
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
    role: "Front-end Product Owner",
    period: "2026.03 ~ Present",
    duration: "약 2개월 (재직 중)",
    team: "대표 2명 · 영상·대본 작업자 35명+",
    serviceName: "Jigeumfilm Admin",
    serviceDescription:
      "영상 제작 운영 어드민을 단독 설계·구축. PO 의사결정과 Claude Code(AI 페어)를 결합해 출시.",
    stack: [
      "React 19",
      "Vite 8",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Query",
      "FullCalendar",
      "Cloudflare Pages",
      "Railway",
      "Claude Code",
    ],
    highlights: [
      {
        title: "Front-end PO + Claude Code 페어 프로그래밍",
        description:
          "스펙·우선순위·검증을 PO로서 직접 정의. Claude Code를 AI 페어로 활용해 익숙하지 않은 백엔드까지 구축. 모든 코드는 직접 리뷰 후 출시.",
        metrics: ["AI pair programming", "Front-end → Full-stack solo"],
      },
      {
        title: "DnD 캘린더 + 작업자 컬러 디자인 시스템",
        description:
          "FullCalendar 월간 뷰 + DnD 배정을 Linear·Notion 톤으로 구현. 작업자 35명+ 고유 컬러를 단일 소스로 관리, 컬러 멘탈 모델 형성.",
        metrics: ["35+ unique colors", "DnD optimistic update"],
      },
      {
        title: "인프라 비용 70~80% 절감",
        description:
          "운영 중 Railway 비용 부담을 발견 → 폴링 제거 + 데이터 신선도 정책 재정의. React Query 캐싱 패턴을 Claude Code와 함께 적용해 API 호출 70~80% 감소.",
        metrics: ["API 호출 70~80%↓", "인프라 비용 절감"],
      },
    ],
  },
  {
    company: "(주) 커넥션스튜디오",
    role: "Front-end Developer",
    period: "2024.09 ~ 2025.07",
    duration: "약 11개월",
    team: "백엔드 2명 · 디자이너 1명",
    serviceName: "캐스팅보트",
    serviceDescription:
      "아티스트 ↔ 캐스팅 담당자를 잇는 캐스팅·오디션 플랫폼.",
    stack: ["React", "Tailwind", "React Query", "Recoil", "Zustand"],
    highlights: [
      {
        title: "이미지 업로드 성능 최적화",
        description:
          "고화질 프로필 이미지 업로드에 browser-image-compression 도입 — 클라이언트 압축으로 화질 유지하며 서버 부담 감소. 로딩 중 스켈레톤 UI로 체감 대기 시간 단축.",
        metrics: [
          "8.1MB → 256KB (90%↓)",
          "4.19s → 111ms (37×↓)",
          "서버 비용 절감",
        ],
      },
      {
        title: "5,000+ 프로필 리스트 가상화",
        description:
          "React Query useInfiniteQuery 무한 스크롤 + React-Virtuoso 가상화 적용. 화면 영역 항목만 DOM 렌더링으로 데이터 양 무관한 60fps 스크롤 확보.",
        metrics: ["5,000+ items · smooth 60fps"],
      },
      {
        title: "Recoil → Zustand 전역 상태 마이그레이션",
        description:
          "atom key 관리·업데이트 속도·유지보수 불확실성 해결을 위한 Zustand 전환. 보일러플레이트 제거 + 상태 관리 간결화로 기능 추가 속도 향상.",
      },
      {
        title: "비즈니스 모델 구현 및 첫 수익화",
        description:
          "웰컴페이 결제 연동 → 유료 멤버십 구독 추가 → 2025.01 서비스 첫 매출 달성.",
        metrics: ["2025.01 첫 매출"],
      },
      {
        title: "MVP 2개월 릴리즈",
        description:
          "React Query·Zustand 도입으로 생산성·유지보수 양립한 코드베이스 설계 — 2개월 내 MVP 시장 출시.",
        metrics: ["MVP in 2 months"],
      },
      {
        title: "매니저 role 온라인화",
        description:
          "오프라인 프로필 전달 프로세스를 온라인화 — 매니저 운영 공수 감소.",
      },
      {
        title: "스탭용 통합 캐스팅 워크플로우",
        description:
          "탭 기반 단일 관리 페이지로 캐스팅 전 과정 통합 — 화면 간 동선 최소화.",
      },
    ],
  },
  {
    company: "(주) 러브에그",
    role: "Front-end Developer",
    period: "2023.09 ~ 2024.02",
    duration: "5개월",
    team: "백엔드 1명 · 디자이너 1명 · iOS 3명 · AOS 1명",
    serviceName: "레저 예약 / 커머스 플랫폼",
    serviceDescription:
      "레저 예약 + 커머스 기능을 통합한 서비스의 초기 설계·구현 담당.",
    stack: ["Next.js", "React", "Tailwind", "React Query", "Recoil"],
    highlights: [
      {
        title: "커머스 관리자 페이지 구축",
        description:
          "입점 신청·승인, 상품 등록·수정, 주문 관리(출고/교환/반품/취소), 계정 관리까지 관리자 기능 구현.",
      },
      {
        title: "통합 관리자 기능 개발",
        description:
          "전체·입점 상점 관리, 정보 변경 이력, 상점별 상품·주문·계정 관리 통합 어드민 개발.",
      },
      {
        title: "모바일 웹 결제·예약",
        description:
          "포인트·쿠폰 할인, 결제 기능 구현, 상품 상세 UI/UX 개선, 레저 예약 페이지 + 예약 시스템 연동.",
      },
    ],
  },
  {
    company: "(주) 슬로그인",
    role: "Front-end Developer",
    period: "2022.06 ~ 2023.09",
    duration: "1년 3개월",
    team: "백엔드 1명",
    serviceName: "프라이빗 캠핑장 예약",
    serviceDescription:
      "프라이빗 캠핑장 예약 서비스의 초기 설계·구현 담당.",
    stack: ["React", "Tailwind", "react-i18n", "포트원"],
    highlights: [
      {
        title: "예약 및 일정 관리 시스템",
        description:
          "캠핑장 등록·수정·삭제, 예약·일정 관리 기능 개발, 멀티 디바이스 반응형 UX 제공.",
      },
      {
        title: "다국어(i18n) 시스템",
        description: "React-i18n 기반 다국어 시스템 구축.",
      },
      {
        title: "결제 모듈 연동",
        description: "나이스페이먼츠 포트원 결제 모듈 연동.",
      },
    ],
  },
  {
    company: "(주) 니더",
    role: "Front-end Developer",
    period: "2021.07 ~ 2021.12",
    duration: "5개월",
    stack: ["Vue", "Nuxt", "Scss"],
    highlights: [
      {
        title: "본인인증 연동",
        description: "휴대폰 본인인증 + 카카오 인증 연동.",
      },
      {
        title: "JavaScript → Nuxt 마이그레이션",
        description:
          "기존 JavaScript 코드를 Nuxt.js 기반으로 마이그레이션 — 프레임워크 기반 구조 전환.",
      },
      {
        title: "메인 인터랙션 개선",
        description:
          "메인 페이지 푸시 카드 애니메이션, 인터랙션 최적화. 마우스 이벤트 기반 말풍선 복사·붙여넣기 기능 구현.",
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
    description: "광교 갤러리아 벽부등 개발 + SCM 담당.",
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
/*                            Dev page — hero stats                           */
/* -------------------------------------------------------------------------- */

export type HeroStat = {
  value: string;
  label: string;
};

/** /dev 히어로 스탯 스트립. 본문 experiences의 metrics에서 발췌한 대표 수치. */
export const devHeroStats: HeroStat[] = [
  { value: "70~80%↓", label: "API 호출 · 인프라 비용 절감" },
  { value: "37×", label: "이미지 업로드 단축 (4.19s → 111ms)" },
  { value: "5,000+", label: "리스트 가상화 · 60fps 스크롤" },
  { value: "2개월", label: "MVP 설계부터 시장 출시까지" },
];

/* -------------------------------------------------------------------------- */
/*                                    Blog                                    */
/* -------------------------------------------------------------------------- */

export const blogConfig: BlogConfig = {
  enabled: false,
  comingSoonMessage:
    "기술 회고",
};

/* -------------------------------------------------------------------------- */
/*                  Youngmi Industry — Sales Ops / DX persona                 */
/* -------------------------------------------------------------------------- */
/**
 * 영미산업(주) 영업관리 직무 지원용 SSOT.
 * 동일한 실 경력을 '운영 효율화·시스템 기획·데이터 정합성' 비즈니스 언어로
 * 재서술한 페르소나. page.tsx는 이 youngmi 객체만 import 한다.
 */

export const youngmi = {
  profile: {
    name: "최용현",
    nameEn: "Choi Yong-hyun",
    role: "영업관리 / DX 기획 · IT 시스템 구축",
    currentRole: {
      company: "Jigeumfilm (지금필름)",
      position: "운영 자동화 PO",
      sinceISO: "2026-03-16",
      sinceLabel: "2026.03.16 ~",
    },
    tagline:
      "IT 기술력과 영업 현장 실무 감각을 결합해, 데이터 기반의 영업관리 DX를 실현합니다.",
    introduction: [
      "전통적인 수기·엑셀 업무의 병목을 찾아내 시스템화하고, 데이터 기반의 효율적인 영업 환경을 만드는 데 특화되어 있습니다.",
      "직접 코드를 다루는 IT 역량과 수주부터 미수금 회수까지 영업 파이프라인 전체의 흐름을 아는 실무 감각을 결합해, 영미산업의 다음 50년을 뒷받침할 영업관리·DX 인프라를 구축하고자 합니다.",
    ],
    email: "chldydgus777@kakao.com",
    socials: [
      { label: "Email", href: "mailto:chldydgus777@kakao.com" },
      { label: "GitHub", href: "https://github.com/chldydgus777" },
    ],
  } satisfies Profile,

  heroStats: [
    { value: "35+", label: "작업자 배정·일정 통합 관리" },
    { value: "5,000+", label: "대량 데이터 처리 최적화" },
    { value: "2개월", label: "운영 시스템 기획 → 출시" },
    { value: "2025.01", label: "결제 연동 — 서비스 첫 매출" },
  ] satisfies HeroStat[],

  skillGroups: [
    {
      category: "Excel · 데이터 관리",
      items: [
        "Excel 활용",
        "대량 데이터(5,000건+) 처리 최적화",
        "결제·정산 시스템 연동",
        "신규 ERP·솔루션 빠른 적응",
        "데이터 정합성 확보",
      ],
    },
    {
      category: "영업·운영 자동화",
      items: [
        "업무 프로세스 분석·재설계",
        "수주·출고·일정 자동화 설계",
        "휴먼 에러 차단 로직 설계",
        "부서/권한별 접근 분리",
        "운영 어드민 기획·구축",
      ],
    },
    {
      category: "IT 도구",
      items: [
        "TypeScript / JavaScript",
        "React / Next.js",
        "SQL 기초",
        "Git / GitHub",
      ],
    },
    {
      category: "커뮤니케이션",
      items: [
        "부서 간 커뮤니케이션",
        "기획서·운영 문서화",
        "데이터 기반 의사결정 보고",
      ],
    },
    {
      category: "협업 툴",
      items: ["Notion", "Slack", "Figma", "Zeplin"],
    },
  ] satisfies SkillGroup[],

  experiences: [
    {
      company: "지금필름",
      role: "운영 자동화 Product Owner",
      period: "2026.03 ~ 현재",
      duration: "약 2개월 (재직 중)",
      team: "대표 2명 · 영상·대본 작업자 35명+",
      serviceName: "영상 제작 운영 어드민",
      serviceDescription:
        "35명 이상의 작업자의 배정·일정을 통합 관리하는 어드민을 기획부터 구축·배포까지 1인 개발",
      stack: [
        "프로세스 기획",
        "자동 매칭 로직",
        "데이터 정합성",
        "권한별 접근 제어",
        "통합 어드민",
      ],
      highlights: [
        {
          title: "수기로 입력하던 스프레드시트 업무의 시스템화",
          description:
            "스프레드시트·구글드라이브로 분산된 고객 데이터를 단일 어드민으로 통합. 업무 프로세스 분석부터 시스템 구축까지 1인 주도, 수기 입력·전달 공수 제거.",
          metrics: ["스프레드시트, 구글드라이브 → 시스템화"],
        },
        {
          title: "자동 매칭 로직 설계 — 휴먼 에러 차단",
          description:
            "수주 ↔ 작업자 ↔ 일정 매칭 로직 자체 설계. 누락·중복 배정(오기입)을 데이터 입력 단에서 차단.",
        },
        {
          title: "클라우드 인프라 비용 절감",
          description:
            "데이터 신선도 정책 재정의 및 중복 동기화 제거를 통한 클라우드 인프라 리소스 최적화.",
        },
      ],
    },
    {
      company: "(주) 커넥션스튜디오",
      role: "운영 시스템 개발 (Front-end)",
      period: "2024.09 ~ 2025.07",
      duration: "약 11개월",
      team: "백엔드 2명 · 디자이너 1명",
      serviceName: "캐스팅보트",
      serviceDescription:
        "아티스트 ↔ 캐스팅 담당자 매칭 플랫폼의 운영·결제·데이터 처리 시스템 구축.",
      stack: [
        "대량 데이터 처리",
        "결제 모듈 연동",
        "이미지 업로드 자동화",
        "통합 어드민",
      ],
      highlights: [
        {
          title: "이미지 업로드 자동화 — 서버 비용 절감",
          description:
            "고화질 프로필 이미지 클라이언트 압축 후 서버 전송 파이프라인 구축. 업로드 시간·서버 비용 동시 절감.",
          metrics: ["8.1MB → 256KB (90%↓)", "4.19s → 111ms (37×↓)", "서버 비용 절감"],
        },
        {
          title: "대량 데이터(5,000건+) 처리 최적화",
          description:
            "5,000건 이상 프로필 데이터에 무한 스크롤 + 가상화 적용. 데이터 누적 환경에서도 끊김 없는 응답성 확보.",
          metrics: ["5,000건+ 끊김 없는 응답"],
        },
        {
          title: "결제 모듈 연동 및 첫 매출",
          description:
            "외부 결제(웰컴페이) 연동, 유료 멤버십 구독 모델 구현. 결제·정산 흐름 정합성 보장.",
          metrics: ["2025.01 서비스 첫 매출"],
        },
        {
          title: "초기 시스템 2개월 내 출시",
          description:
            "기획·설계·구현·QA 압축. 2개월 내 시장 출시 및 안정화.",
          metrics: ["2개월 내 출시"],
        },
        {
          title: "오프라인 프로세스 온라인화",
          description:
            "오프라인으로 주고받던 프로필 전달 업무를 온라인 워크플로우로 전환. 매니저 공수 감소.",
        },
        {
          title: "통합 어드민 워크플로우",
          description:
            "캐스팅 전 과정을 단일 화면에서 처리하는 탭 기반 통합 어드민 설계. 화면 간 이동·중복 입력 제거.",
        },
      ],
    },
    {
      company: "(주) 러브에그",
      role: "어드민 시스템 개발 (Front-end)",
      period: "2023.09 ~ 2024.02",
      duration: "5개월",
      team: "백엔드 1명 · 디자이너 1명 · iOS 3명 · AOS 1명",
      serviceName: "레저 예약·커머스 통합 어드민",
      serviceDescription:
        "입점·상품·주문(출고/교환/반품/취소)·계정까지 통합 관리하는 어드민의 초기 설계·구현.",
      stack: [
        "주문 관리(출고/교환/반품)",
        "입점·상품·계정 관리",
        "결제·예약 시스템",
        "권한별 어드민",
      ],
      highlights: [
        {
          title: "커머스 어드민 구축 (입점·상품·주문·계정)",
          description:
            "입점 신청·승인, 상품 등록·수정, 주문(출고·교환·반품·취소), 계정 관리까지 단일 어드민으로 통합 구현.",
          metrics: ["출고/교환/반품/취소 통합"],
        },
        {
          title: "전사 / 상점별 권한 분리 어드민",
          description:
            "전사·상점별 어드민 분리 구축. 정보 변경 이력 추적 및 권한별 데이터 접근 분리 구조 설계.",
          metrics: ["권한 분리", "변경 이력 관리"],
        },
        {
          title: "결제·예약 시스템 연동",
          description:
            "포인트·쿠폰 할인 정책 반영, 결제 모듈·레저 예약 시스템 연동. 금액·일정 정합성 확보.",
        },
      ],
    },
    {
      company: "(주) 슬로그인",
      role: "예약 시스템 개발 (Front-end)",
      period: "2022.06 ~ 2023.09",
      duration: "1년 3개월",
      team: "백엔드 1명",
      serviceName: "프라이빗 캠핑장 예약 시스템",
      serviceDescription:
        "예약·일정·결제 사이클 전반의 초기 시스템 설계·구현.",
      stack: [
        "예약·일정 관리",
        "결제 모듈(포트원)",
        "다국어(i18n)",
        "반응형 UX",
      ],
      highlights: [
        {
          title: "예약·일정 관리 시스템",
          description:
            "캠핑장 등록·수정·삭제 및 예약·일정 관리 기능 구현. PC·모바일 멀티 디바이스 반응형 UX 적용.",
          metrics: ["멀티 디바이스 대응"],
        },
        {
          title: "결제 모듈 연동",
          description:
            "나이스페이먼츠(포트원) 결제 연동 및 정합성 검증 흐름 구축.",
        },
        {
          title: "다국어(i18n) 시스템",
          description: "react-i18n 기반 다국어 시스템 구축.",
        },
      ],
    },
  ] satisfies Experience[],

  previousCareers: [
    {
      company: "이노엘이디솔루션즈",
      team: "LED 조명개발팀 · SCM",
      period: "2019.07 ~ 2020.11 (1년 4개월)",
      description:
        "원자재 수급, 재고 관리, 출고 스케줄링 등 제조업 공급망(SCM) 실무를 담당. 협력사 발주·납기 조율부터 입고·검수·재고·출고 사이클까지 제조/영업 현장의 기초 물류 흐름을 직접 다뤘습니다. 광교 갤러리아 벽부등 개발 프로젝트에 SCM 담당으로 참여.",
    },
  ] satisfies PreviousCareer[],

  education: [
    {
      institution: "가톨릭대학교",
      program: "IT 파이낸스",
      period: "2024.03 ~",
    },
  ] satisfies Education[],

  certifications: [
    {
      name: "전기기능사",
      issuer: "한국산업인력공단",
      date: "2015.06",
    },
  ] satisfies Certification[],

  blogConfig: {
    enabled: false,
    comingSoonMessage: "운영 자동화 회고",
  } satisfies BlogConfig,
};

/* -------------------------------------------------------------------------- */
/*                        PO persona — Product Owner SSOT                     */
/* -------------------------------------------------------------------------- */
/**
 * Product Owner 직무 지원용 SSOT.
 * 동일한 실 경력을 '제품 의사결정·수익화·출시' 언어로 재서술한 페르소나.
 * 직함은 사실 그대로 유지하고, 성과의 프레임만 제품 관점으로 바꾼다.
 * /po 페이지는 이 po 객체만 import 한다.
 */

export const po = {
  profile: {
    name: "최용현",
    nameEn: "Choi Yong-hyun",
    role: "Product Owner · Front-end",
    currentRole: {
      company: "Jigeumfilm (지금필름)",
      position: "Product Owner",
      sinceISO: "2026-03-16",
      sinceLabel: "2026.03.16 ~",
    },
    tagline: "개발을 아는 PO — 가설을 코드로 직접 검증하고, 출시로 증명합니다.",
    introduction: [
      "지금필름 PO로 영상 제작 운영 어드민의 스펙 정의부터 구축·출시까지 단독 수행. 기획서가 아니라 동작하는 제품으로 말합니다.",
      "우선순위는 데이터로 정합니다. 인프라 비용 70~80% 절감, MVP 2개월 출시, 서비스 첫 매출 — 의사결정을 수치로 검증해 왔습니다.",
      "프론트엔드 개발자 출신이라 엔지니어와 같은 언어로 말하고, 실현 가능한 스펙을 씁니다.",
    ],
    email: "chldydgus777@kakao.com",
    socials: [
      { label: "Email", href: "mailto:chldydgus777@kakao.com" },
      { label: "GitHub", href: "https://github.com/chldydgus777" },
    ],
  } satisfies Profile,

  heroStats: [
    { value: "2개월", label: "MVP 기획부터 시장 출시까지" },
    { value: "70~80%↓", label: "데이터 정책 재정의로 인프라 비용 절감" },
    { value: "35+", label: "작업자 운영 체계 단독 구축" },
    { value: "2025.01", label: "결제·구독 모델 구현 — 첫 매출" },
  ] satisfies HeroStat[],

  skillGroups: [
    {
      category: "Product",
      items: [
        "제품 스펙 정의",
        "우선순위 결정",
        "MVP 스코핑",
        "백로그 관리",
        "출시 후 검증",
      ],
    },
    {
      category: "Data & Metrics",
      items: ["지표 정의·추적", "비용 구조 분석", "데이터 기반 의사결정"],
    },
    {
      category: "Delivery",
      items: [
        "AI 페어 프로그래밍 (Claude Code)",
        "프론트엔드 직접 구현 (React · TypeScript)",
        "풀스택 MVP 구축",
      ],
    },
    {
      category: "Domain",
      items: ["운영 어드민", "결제·구독", "예약 시스템", "커머스"],
    },
    {
      category: "Collaboration",
      items: ["Notion", "Figma", "GitHub", "Slack"],
    },
  ] satisfies SkillGroup[],

  experiences: [
    {
      company: "Jigeumfilm (지금필름)",
      role: "Product Owner",
      period: "2026.03 ~ 현재",
      duration: "약 2개월 (재직 중)",
      team: "대표 2명 · 영상·대본 작업자 35명+",
      serviceName: "영상 제작 운영 어드민",
      serviceDescription:
        "수기·스프레드시트로 돌아가던 제작 운영을 단일 어드민 제품으로 전환 — 기획부터 출시까지 1인 수행.",
      stack: ["스펙 정의", "우선순위 결정", "Claude Code 페어", "React 19", "운영 지표"],
      highlights: [
        {
          title: "스펙부터 출시까지 — 1인 제품 사이클",
          description:
            "대표 2명의 요구사항을 스펙·우선순위로 정리하고, Claude Code를 AI 페어로 활용해 직접 구현·출시. 기획↔개발 사이의 전달 손실이 0인 제품 사이클을 운영합니다.",
          metrics: ["기획 → 출시 단독 수행", "운영 투입까지 2개월"],
        },
        {
          title: "비용 구조를 바꾼 의사결정",
          description:
            "운영 중 인프라 비용 부담을 발견 → 데이터 신선도 정책을 재정의하고 폴링을 제거. 기능 추가가 아니라 정책 변경으로 문제를 풀었습니다.",
          metrics: ["API 호출 70~80%↓", "인프라 비용 절감"],
        },
        {
          title: "35+ 작업자 운영 체계",
          description:
            "DnD 캘린더 배정과 작업자 고유 컬러 시스템 설계 — 누가 무엇을 하는지 한 화면에서 읽히는 운영 멘탈 모델을 만들었습니다.",
          metrics: ["누락·중복 배정 차단"],
        },
      ],
    },
    {
      company: "(주) 커넥션스튜디오",
      role: "Front-end Developer",
      period: "2024.09 ~ 2025.07",
      duration: "약 11개월",
      team: "백엔드 2명 · 디자이너 1명",
      serviceName: "캐스팅보트",
      serviceDescription:
        "아티스트 ↔ 캐스팅 담당자 매칭 플랫폼 — 개발자로 합류해 수익화·프로세스 개선을 주도.",
      stack: ["결제·구독", "React", "React Query", "Zustand"],
      highlights: [
        {
          title: "비즈니스 모델 구현 — 서비스 첫 수익화",
          description:
            "웰컴페이 결제 연동 위에 유료 멤버십 구독 모델을 구현, 2025년 1월 서비스 첫 매출을 만들었습니다.",
          metrics: ["2025.01 첫 매출"],
        },
        {
          title: "MVP 2개월 출시",
          description:
            "생산성과 유지보수가 양립하는 코드베이스 설계로 2개월 내 시장 출시 — 빠른 검증 사이클의 기반을 만들었습니다.",
          metrics: ["MVP in 2 months"],
        },
        {
          title: "오프라인 프로세스의 제품화",
          description:
            "오프라인으로 전달되던 프로필 업무를 온라인 워크플로우로 전환하고, 캐스팅 전 과정을 탭 기반 단일 화면으로 통합 — 매니저 운영 공수를 줄였습니다.",
        },
      ],
    },
    {
      company: "(주) 러브에그",
      role: "Front-end Developer",
      period: "2023.09 ~ 2024.02",
      duration: "5개월",
      team: "백엔드 1명 · 디자이너 1명 · iOS 3명 · AOS 1명",
      serviceName: "레저 예약 / 커머스 플랫폼",
      serviceDescription:
        "레저 예약 + 커머스 통합 서비스의 초기 설계·구현 — 커머스 운영 도메인 경험.",
      stack: ["커머스 어드민", "결제·예약", "Next.js"],
      highlights: [
        {
          title: "커머스 운영 플로우 전 과정 구현",
          description:
            "입점 승인 → 상품 등록 → 주문(출고·교환·반품·취소) → 정산 계정까지 — 커머스 운영의 엔드투엔드 플로우를 어드민으로 구현하며 도메인을 체득했습니다.",
        },
        {
          title: "결제·예약 시스템 연동",
          description:
            "포인트·쿠폰 할인 정책 반영, 모바일 웹 결제와 레저 예약 시스템 연동.",
        },
      ],
    },
    {
      company: "(주) 슬로그인",
      role: "Front-end Developer",
      period: "2022.06 ~ 2023.09",
      duration: "1년 3개월",
      team: "백엔드 1명",
      serviceName: "프라이빗 캠핑장 예약",
      serviceDescription: "예약 서비스의 초기 설계·구현 — 0→1 단계 제품 경험.",
      stack: ["예약·일정", "결제(포트원)", "i18n"],
      highlights: [
        {
          title: "예약 도메인 0→1 구축",
          description:
            "캠핑장 등록부터 예약·일정 관리, 나이스페이먼츠(포트원) 결제 연동까지 — 예약·결제 사이클 전체를 초기부터 설계했습니다.",
        },
        {
          title: "다국어(i18n) 시스템 구축",
          description: "react-i18n 기반 다국어 대응으로 잠재 사용자 폭 확장.",
        },
      ],
    },
  ] satisfies Experience[],

  previousCareers: [
    {
      company: "이노엘이디솔루션즈",
      team: "LED 조명개발팀 · SCM",
      period: "2019.07 ~ 2020.11 (1년 4개월)",
      description:
        "원자재 수급·재고·출고 스케줄링 등 제조업 SCM 실무 담당. 공급망과 운영 현장의 흐름을 직접 다룬 경험이 운영 제품을 설계하는 감각의 바탕이 됐습니다.",
    },
  ] satisfies PreviousCareer[],

  education: [
    {
      institution: "가톨릭대학교",
      program: "IT 파이낸스",
      period: "2024.03 ~",
    },
  ] satisfies Education[],

  certifications: [
    {
      name: "전기기능사",
      issuer: "한국산업인력공단",
      date: "2015.06",
    },
  ] satisfies Certification[],
};
