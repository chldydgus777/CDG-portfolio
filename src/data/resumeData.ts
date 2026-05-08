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
    role: "영업관리 · 운영 시스템 구축",
    currentRole: {
      company: "Jigeumfilm (지금필름)",
      position: "운영 시스템 단독 구축",
      sinceISO: "2026-03-16",
      sinceLabel: "2026.03.16 ~",
    },
    tagline:
      "비효율적 수기·엑셀 업무를 시스템화하여 데이터 정합성과 운영 효율을 높이는 영업관리자.",
    introduction: [
      "매출 1,034억 · 사원 55명 영미산업의 영업관리 직무에 지원함. 비효율적인 수기·엑셀 업무를 시스템화하여 데이터 정합성을 높이고 운영 리소스를 절감하는 것을 핵심 역할로 정의함.",
      "35명 이상 운영 인력의 수주·배정·일정을 통합 관리하는 어드민 시스템 단독 구축. 자동 매칭 로직(정확도 97.6%) 적용으로 휴먼 에러 차단, 미매칭 65%↓·운영 처리 비용 70~80%↓ 달성.",
      "5,000건 이상 대량 데이터 처리, 결제·정산 시스템 연동, 자동 매칭 로직 등 시스템 구축 자산 보유. 실적 집계 자동화·미수금 트래킹·휴먼 에러(오기입) 차단 영역에 응용 가능.",
      "Excel 함수·피벗 활용 능숙. 가톨릭대 IT 파이낸스 전공으로 수금·전표·재무 데이터 흐름 친숙. 더존 ERP 등 신규 시스템·프로세스 학습·흡수 속도가 강점.",
    ],
    email: "chldydgus777@kakao.com",
    socials: [
      { label: "Email", href: "mailto:chldydgus777@kakao.com" },
      { label: "GitHub", href: "https://github.com/chldydgus777" },
    ],
  } satisfies Profile,

  skillGroups: [
    {
      category: "Excel · 데이터 관리",
      items: [
        "Excel 함수·피벗 활용 능숙",
        "대량 데이터(5,000건+) 처리 최적화",
        "결제·정산 시스템 연동 (포트원)",
        "더존 ERP 프로세스 학습·흡수",
        "데이터 정합성 검증",
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
      company: "Jigeumfilm (지금필름)",
      role: "운영 시스템 단독 구축",
      period: "2026.03 ~ Present",
      duration: "약 2개월 (재직 중)",
      team: "대표 2명 · 영상·대본 작업자 35명+",
      serviceName: "영상 제작 운영 어드민",
      serviceDescription:
        "35명 이상 운영 인력의 수주·배정·일정을 단일 시스템으로 통합 관리하는 어드민. 요구사항 기획부터 구축·배포까지 1인 주도.",
      stack: [
        "운영 프로세스 설계",
        "자동 매칭 로직",
        "데이터 정합성 관리",
        "권한별 접근 제어",
        "수주·일정 통합 관리",
      ],
      highlights: [
        {
          title: "수기·엑셀 운영의 시스템화",
          description:
            "엑셀·메신저로 흩어진 35명 이상 운영 데이터를 단일 어드민으로 통합. 업무 프로세스 분석·재설계부터 시스템 구축까지 1인 주도. 수기 입력·전달 공수 제거.",
          metrics: ["수기·엑셀 → 시스템화", "35명+ 운영 단일화"],
        },
        {
          title: "자동 매칭 로직 — 휴먼 에러 차단",
          description:
            "수주 ↔ 작업자 ↔ 일정 매칭 로직 자체 설계. 누락·중복 배정 등 휴먼 에러(오기입)를 데이터 입력 단에서 차단.",
          metrics: ["매칭 정확도 97.6%", "미매칭 65%↓"],
        },
        {
          title: "운영 처리 비용 70~80% 절감",
          description:
            "데이터 신선도 정책 재정의 및 중복 동기화 제거를 통한 인프라 리소스 최적화. 동일 운영 데이터 처리 비용 70~80% 절감.",
          metrics: ["처리 비용 70~80%↓"],
        },
      ],
    },
    {
      company: "(주) 커넥션스튜디오",
      role: "운영 시스템 구축 / 관리자 화면 기획",
      period: "2024.09 ~ 2025.07",
      duration: "약 11개월",
      team: "백엔드 2명 · 디자이너 1명",
      serviceName: "캐스팅보트",
      serviceDescription:
        "아티스트와 캐스팅 담당자를 잇는 매칭 플랫폼의 운영·결제·데이터 처리 시스템 구축.",
      stack: [
        "대량 데이터 처리 최적화",
        "결제·수익화 모듈",
        "이미지 업로드 자동화",
        "통합 어드민 워크플로우",
      ],
      highlights: [
        {
          title: "이미지 업로드 자동화 — 서버 비용 절감",
          description:
            "고화질 프로필 이미지를 클라이언트 압축 후 전송하는 처리 파이프라인 구축. 운영자 수기 리사이즈 공수 제거 및 서버 비용 절감.",
          metrics: ["8.1MB → 256KB (90%↓)", "4.19s → 111ms (37×↓)", "서버 비용 절감"],
        },
        {
          title: "대량 데이터(5,000건+) 처리 최적화",
          description:
            "5,000건 이상 프로필 데이터를 무한 스크롤 + 가상화로 끊김 없이 처리. 데이터 누적 환경에서도 운영 화면 응답성 유지.",
          metrics: ["5,000건+ 끊김 없는 응답"],
        },
        {
          title: "결제·수익화 시스템 구축",
          description:
            "외부 결제(웰컴페이) 연동 및 유료 멤버십 구독 모델 구현. 결제·정산 흐름 정합성 보장.",
          metrics: ["2025.01 서비스 첫 매출"],
        },
        {
          title: "초기 시스템 2개월 속성 구축 및 안정화",
          description:
            "운영 시스템 구조 설계부터 출시까지 2개월 내 완료. 짧은 사이클의 운영·검증 환경에서 안정화 수행.",
          metrics: ["2개월 내 출시"],
        },
        {
          title: "오프라인 운영 프로세스 온라인화",
          description:
            "오프라인으로 주고받던 프로필 전달 업무를 온라인 워크플로우로 전환. 매니저 운영 공수 감소.",
        },
        {
          title: "통합 운영 워크플로우 구축",
          description:
            "캐스팅 전 과정을 단일 화면에서 처리하도록 탭 기반 통합 어드민 설계. 화면 간 이동·중복 입력 제거.",
        },
      ],
    },
    {
      company: "(주) 러브에그",
      role: "운영 어드민 구축 / 관리자 시스템 기획",
      period: "2023.09 ~ 2024.02",
      duration: "5개월",
      team: "백엔드 1명 · 디자이너 1명 · iOS 3명 · AOS 1명",
      serviceName: "레저 예약·커머스 통합 어드민",
      serviceDescription:
        "입점·상품·주문(출고/교환/반품/취소)·계정까지 운영 전 영역을 통합 관리하는 어드민 초기 설계·구현.",
      stack: [
        "주문 관리(출고/교환/반품)",
        "입점·상품·계정 관리",
        "결제·예약 시스템",
        "권한별 통합 어드민",
      ],
      highlights: [
        {
          title: "주문·출고·반품 운영 어드민 구축",
          description:
            "입점 신청·승인, 상품 등록·수정, 주문 관리(출고·교환·반품·취소), 계정 관리까지 운영자가 데이터를 단일 화면에서 처리하도록 어드민 구현.",
          metrics: ["출고/교환/반품/취소 통합"],
        },
        {
          title: "전사·상점별 권한 분리 어드민",
          description:
            "전사 운영자용 통합 어드민과 상점별 어드민 분리 구축. 정보 변경 이력 추적 및 부서/권한별 데이터 접근 분리 구조 설계.",
          metrics: ["권한 분리", "변경 이력 관리"],
        },
        {
          title: "결제·예약 시스템 연동",
          description:
            "포인트·쿠폰 할인 정책 반영 및 결제 모듈·레저 예약 시스템 연동. 금액·일정 정합성 보장.",
        },
      ],
    },
    {
      company: "(주) 슬로그인",
      role: "예약·일정 관리 시스템 구축",
      period: "2022.06 ~ 2023.09",
      duration: "1년 3개월",
      team: "백엔드 1명",
      serviceName: "프라이빗 캠핑장 예약 시스템",
      serviceDescription:
        "예약·일정·결제 운영 사이클 전반의 초기 시스템 설계·구현.",
      stack: [
        "예약·일정 관리",
        "결제 모듈(포트원)",
        "다국어 데이터",
        "반응형 운영 화면",
      ],
      highlights: [
        {
          title: "예약·일정 관리 시스템 구축",
          description:
            "캠핑장 등록·수정·삭제 및 예약·일정 관리 기능 구현. PC·모바일 환경에서 운영자가 동일 데이터를 처리하도록 반응형 UX 적용.",
          metrics: ["멀티 디바이스 운영"],
        },
        {
          title: "결제 모듈 연동",
          description:
            "나이스페이먼츠(포트원) 결제 연동 및 정합성 검증 흐름 구축.",
        },
        {
          title: "다국어 시스템 구축",
          description:
            "사용자 환경에 무관한 운영 정보 일관성 확보를 위한 다국어 시스템 구축.",
        },
      ],
    },
    {
      company: "(주) 니더",
      role: "운영자 페이지 구축",
      period: "2021.07 ~ 2021.12",
      duration: "5개월",
      stack: [
        "운영자 페이지 구축",
        "본인인증 연동",
        "프레임워크 마이그레이션",
      ],
      highlights: [
        {
          title: "운영자(사장님) 페이지 구축",
          description:
            "사업주가 직접 알바 구인 공고를 등록·수정·삭제하는 운영자 페이지 구현. 외부 운영자의 직접 데이터 관리 흐름 설계.",
        },
        {
          title: "본인인증 연동",
          description:
            "휴대폰 본인인증 및 카카오 인증 연동. 운영 데이터 신원 정합성 확보.",
        },
        {
          title: "운영 시스템 구조 마이그레이션",
          description:
            "기존 코드 자산을 프레임워크 기반 구조로 전환. 유지보수성·확장성 개선.",
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
        "발주·납기·재고 데이터 관리 및 협력사 조율, 부서 간 커뮤니케이션 등 제조업 공급망(SCM) 실무 수행. 광교 갤러리아 벽부등 개발 프로젝트에 SCM 담당으로 참여.",
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
