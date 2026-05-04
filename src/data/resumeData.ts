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
  tagline: "사용자에게 안정적인 경험을 제공하는 프론트엔드 개발자입니다.",
  introduction: [
    "서비스 초기 설계부터 구현까지 전체 과정에 참여하며 다양한 서비스 프로젝트를 경험했습니다.",
    "기획·디자인 등 다양한 직군과 긴밀히 소통하며 기술적 문제를 해결하고, 비즈니스 목표에 부합하는 제품을 만드는 데 익숙합니다.",
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
    role: "Frontend Product Owner",
    period: "2026.03 ~ Present",
    duration: "약 2개월 (재직 중)",
    team: "대표 1명 · 작업자 35명+ (영상·대본 운영진)",
    serviceName: "Jigeumfilm Admin",
    serviceDescription:
      "Frontend PO 포지션으로 합류해, 본인의 프론트엔드 개발 경험과 Claude Code(AI 페어)를 결합해 익숙하지 않은 백엔드까지 어드민 시스템을 설계·구축하고 운영하고 있습니다.",
    stack: [
      "React 19",
      "Vite 8",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Query",
      "Spring Boot 3.4",
      "Java 21",
      "MySQL 9.4",
      "Cloudflare Pages",
      "Railway",
      "Claude Code",
    ],
    highlights: [
      {
        title: "Frontend PO + Claude Code 페어 프로그래밍",
        description:
          "Frontend PO로서 스펙과 우선순위, 검증을 직접 책임지고, Claude Code를 AI 페어로 활용해 익숙하지 않은 백엔드(Spring Boot 3.4, JPA, MySQL)까지 단독으로 구축했습니다. 모든 의사결정과 코드 리뷰는 본인이 직접 확인한 뒤 출시했습니다.",
        metrics: ["#5 ~ #92 sprints", "AI pair programming", "Frontend → Full-stack solo"],
      },
      {
        title: "네이버 커머스 API 2단계 동기화 시스템",
        description:
          "네이버의 last-changed-statuses 페이징과 product-orders 직접 조회를 결합해 2단계 동기화를 만들었습니다. 5분 주기 스케줄러, 웹훅, 서버 시작 시 initialSync로 주문 누락을 막았고, 마스킹 방어와 KST 타임존 보정, MAX_API_CALLS 안전장치도 함께 넣었습니다.",
        metrics: ["1,935건 안정 적재", "5분 주기 폴링"],
      },
      {
        title: "상품 자동 매칭 + 마스킹 prefix 매칭",
        description:
          "description 가중치(100/50/10)와 옵션 카운트로 점수를 매겨 상품을 자동 매칭했습니다. 마스킹된 이름(\"김*지\" ↔ \"김민지이규태\")은 prefix 매칭과 3콤보 strict fallback으로 보완해 매칭 정확도를 끌어올렸습니다.",
        metrics: ["미매칭 124건 → 43건 (65%↓)", "97.6% 매칭 정확도"],
      },
      {
        title: "RBAC 4-Tier 권한 + IDOR 차단",
        description:
          "SUPREME / STAFF / VIDEO_MANAGER / SCRIPT_MANAGER 4단계 권한을 백엔드 @PreAuthorize, 프론트 usePermission 훅, 라우트 가드 세 곳에서 정합되도록 설계했습니다. validateOwnership으로 IDOR 취약점을 막고, 작업자에게는 본인 담당 주문만 보이도록 OrderSpecification.withRoleFilter를 추가했습니다.",
        metrics: ["4-Tier RBAC", "IDOR 방어"],
      },
      {
        title: "Capacity 기반 SmartAssign + 화이트리스트 SSOT",
        description:
          "작업자 담당상품(assignedProducts)을 화이트리스트로 두고, 그 외 상품은 절대 노출되지 않도록 Strict Match를 걸었습니다. 일·월 단위 가동량과 일자별 Override, 동시성 방어(409 Conflict)까지 더해 운영진의 휴먼 에러를 시스템 단에서 잡았고, FE와 BE 양쪽에 SSOT를 두어 겸직자 추가는 이름 한 줄이면 끝나도록 만들었습니다.",
        metrics: ["35+명 작업자", "Strict Match", "FE↔BE SSOT"],
      },
      {
        title: "일괄 업로드 + 자동 롤백 시스템",
        description:
          "스프레드시트 UPSERT를 naverOrderId → buyerId+date → name+date → fuzzy 4단계로 매칭하고, 100건 단위 chunked 업로드와 dry-run 미리보기, '기존 주문만 업데이트' 안전 토글을 함께 제공했습니다. 사고가 나도 OrderHistory 기반 자동 복원(bulk-rollback)으로 되돌릴 수 있게 안전망을 깔았습니다.",
        metrics: ["4단계 매칭", "OrderHistory 기반 롤백"],
      },
      {
        title: "DnD 캘린더 + 작업자 컬러 디자인 시스템",
        description:
          "FullCalendar 월간 뷰에 드래그앤드롭 배정을 얹어 Linear·Notion 톤(좌측 accent bar + 14% alpha 배경)으로 구현했습니다. 작업자 35명+의 고유 컬러를 TINT / INVERSE / SOLID 3-state로 묶어 단일 소스로 관리했고, 운영진이 캘린더만 봐도 '이 색 = 이 사람' 멘탈 모델이 바로 잡히도록 설계했습니다.",
        metrics: ["35+ unique colors", "DnD optimistic update"],
      },
      {
        title: "Audit Log (OrderHistory) + CANCELED 잠금",
        description:
          "필드별 Diff 엔진(30개 화이트리스트)과 복합 인덱스를 갖춘 OrderHistory로 모든 주문 변경 이력을 추적합니다. CANCELED 상태는 SUPREME만 롤백할 수 있도록 잠가 데이터 무결성을 보장했고, Member 이름은 벌크로 해석해 N+1을 막았습니다.",
        metrics: ["30+ tracked fields", "N+1 차단"],
      },
      {
        title: "성능·인프라 비용 최적화",
        description:
          "React Query staleTime 30초와 refetchOnMount 'always' 패턴으로 폴링을 없애고, JPA @BatchSize(20)로 N+1을 막았으며, useMemo 기반 productMap·memberMap으로 O(1) 조회 구조를 만들었습니다. 그 결과 Railway API 호출량이 약 70~80% 줄어 인프라 비용도 함께 낮췄습니다.",
        metrics: ["API 호출 70~80%↓", "@BatchSize(20)"],
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
      "아티스트와 캐스팅 담당자를 연결하는 캐스팅·오디션 플랫폼입니다.",
    stack: ["React", "Tailwind", "React Query", "Recoil", "Zustand"],
    highlights: [
      {
        title: "이미지 업로드 성능 최적화",
        description:
          "고화질 프로필 이미지를 화질 저하 없이 빠르게 업로드하기 위해 browser-image-compression 라이브러리를 도입했습니다. 로딩 중에는 스켈레톤 UI를 노출해 체감 대기 시간을 줄였습니다.",
        metrics: [
          "8.1MB → 256KB (90%↓)",
          "4.19s → 111ms (37×↓)",
          "서버 비용 절감",
        ],
      },
      {
        title: "5,000+ 프로필 리스트 가상화",
        description:
          "React Query의 useInfiniteQuery로 무한 스크롤을 구현하고, React-Virtuoso로 화면에 보이는 항목만 DOM에 렌더링했습니다. 데이터 양과 상관없이 부드러운 스크롤과 빠른 초기 로딩 속도를 확보했습니다.",
        metrics: ["5,000+ items · smooth 60fps"],
      },
      {
        title: "Recoil → Zustand 전역 상태 마이그레이션",
        description:
          "atom 단위 key 관리, 업데이트 속도, 유지보수 불확실성 문제를 풀기 위해 Zustand로 전환했습니다. 보일러플레이트를 덜어내고 상태 관리를 간결하게 만들어 기능 추가 속도를 끌어올렸습니다.",
      },
      {
        title: "비즈니스 모델 구현 및 첫 수익화",
        description:
          "웰컴페이 결제를 연동해 유료 멤버십 구독 기능을 추가했고, 2025년 1월에 서비스의 첫 매출을 만들었습니다.",
        metrics: ["2025.01 첫 매출"],
      },
      {
        title: "MVP 2개월 릴리즈",
        description:
          "React Query, Zustand 같은 도구를 도입해 생산성과 유지보수를 함께 고려한 코드베이스를 설계했고, 2개월 만에 MVP를 시장에 내놓았습니다.",
        metrics: ["MVP in 2 months"],
      },
      {
        title: "매니저 role 온라인화",
        description:
          "기존에 오프라인으로 진행되던 프로필 전달 방식을 온라인으로 옮겨, 매니저의 전달 공수를 줄였습니다.",
      },
      {
        title: "스탭용 통합 캐스팅 워크플로우",
        description:
          "탭 기반 단일 관리 페이지에서 캐스팅 전 과정을 한눈에 파악하고 관리할 수 있도록 구현해, 화면 간 불필요한 동선을 줄였습니다.",
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
      "레저 상품 예약과 커머스 기능을 함께 제공하는 서비스의 초기 설계와 구현을 담당했습니다.",
    stack: ["Next.js", "React", "Tailwind", "React Query", "Recoil"],
    highlights: [
      {
        title: "커머스 관리자 페이지 구축",
        description:
          "입점 신청·승인 프로세스, 상품 등록·수정, 주문 관리(출고/교환/반품/취소), 계정 관리 시스템까지 일반 관리자 기능을 종합적으로 구현했습니다.",
      },
      {
        title: "통합 관리자 기능 개발",
        description:
          "전체 상점·입점 상점 관리, 정보 변경 이력 확인, 상점별 상품·주문·계정 관리 기능을 제공하는 통합 어드민을 개발했습니다.",
      },
      {
        title: "모바일 웹 결제·예약",
        description:
          "포인트·쿠폰 할인 적용과 결제 기능을 구현했고, 상품 상세 페이지의 UI/UX를 개선했으며, 레저 예약 페이지와 예약 시스템을 연동했습니다.",
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
      "프라이빗 개인 캠핑장 예약 서비스의 초기 설계와 구현을 담당했습니다.",
    stack: ["React", "Tailwind", "react-i18n", "포트원"],
    highlights: [
      {
        title: "예약 및 일정 관리 시스템",
        description:
          "캠핑장 등록·수정·삭제와 예약·일정 관리 기능을 개발했고, 다양한 디바이스에 최적화된 반응형 UX를 제공했습니다.",
      },
      {
        title: "다국어(i18n) 시스템",
        description: "React-i18n을 활용해 다국어 콘텐츠를 제공했습니다.",
      },
      {
        title: "결제 모듈 연동",
        description: "나이스페이먼츠 포트원 결제 모듈을 연동했습니다.",
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
        description: "휴대폰 본인인증과 카카오 인증을 연동했습니다.",
      },
      {
        title: "JavaScript → Nuxt 마이그레이션",
        description:
          "기존 JavaScript 코드를 Nuxt.js 기반으로 마이그레이션하여 프레임워크 기반 구조로 전환했습니다.",
      },
      {
        title: "메인 인터랙션 개선",
        description:
          "메인 페이지 푸시 카드 애니메이션을 추가하고 인터랙션을 최적화했으며, 마우스 이벤트 기반 말풍선 복사·붙여넣기 기능을 구현했습니다.",
      },
      {
        title: "사장님 페이지",
        description: "알바 구인글 등록·수정·삭제 기능을 구현했습니다.",
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
    description: "광교 갤러리아 벽부등 개발과 SCM을 담당했습니다.",
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
