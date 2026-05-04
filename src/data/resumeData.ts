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
  tagline: "비즈니스 병목을 시스템으로 풀고, 결과를 수치로 증명합니다.",
  introduction: [
    "코드 구현부터 PO 의사결정까지 직접 책임.현재 지금필름 Frontend PO로 합류해 영상 제작 운영 어드민을 단독 설계·구축 중.",
    "지표와 데이터로 판단합니다. 미매칭 65%↓, API 호출 70~80%↓, MVP 2개월 출시 — 모든 의사결정을 수치로 검증.",
    "동시성·메모리 누수처럼 놓치기 쉬운 보안·성능 디테일도 본인 영역. 기획·디자인과 같은 언어로 합의해 운영 휴먼 에러를 시스템 단에서 차단합니다.",
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
    role: "Frontend Product Owner",
    period: "2026.03 ~ Present",
    duration: "약 2개월 (재직 중)",
    team: "대표 2명 · 영상·대본 작업자 35명+",
    serviceName: "Jigeumfilm Admin",
    serviceDescription:
      "영상 제작 운영 어드민(주문·배정·캘린더·네이버 커머스 동기화)을 단독 설계·구축. 프론트엔드 지식과 Claude Code(AI 페어)를 결합해 익숙하지 않은 백엔드까지 직접 확장.",
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
          "스펙·우선순위·검증을 PO로서 직접 정의. Claude Code를 AI 페어로 활용해 익숙하지 않은 백엔드(Spring Boot 3.4, JPA, MySQL)까지 혼자 구축. 모든 코드는 직접 리뷰 후 출시.",
        metrics: ["AI pair programming", "Frontend → Full-stack solo"],
      },
      {
        title: "네이버 커머스 API 2단계 동기화 설계",
        description:
          "last-changed-statuses 페이징 + product-orders 직접 조회를 결합한 2단계 동기화. 스케줄러(5분) / 웹훅 / 서버 시작 시 initialSync 3중 트리거에 마스킹 방어·KST 타임존 보정·MAX_API_CALLS 안전장치 동시 적용.",
        metrics: ["1,935건 무손실 적재", "3중 동기화 트리거"],
      },
      {
        title: "상품 자동 매칭 + 마스킹 prefix 매칭",
        description:
          "description 가중치(100/50/10) + 옵션 카운트 점수 알고리즘으로 상품 자동 매칭. 마스킹 이름(\"김*지\" ↔ \"김민지이규태\")은 prefix 매칭 + 3콤보 strict fallback으로 보완.",
        metrics: ["미매칭 124 → 43건 (65%↓)", "매칭 정확도 97.6%"],
      },
      {
        title: "RBAC 4-Tier 권한 + IDOR 차단",
        description:
          "4-Tier RBAC(SUPREME / STAFF / VIDEO_MANAGER / SCRIPT_MANAGER) — 백엔드 @PreAuthorize, 프론트 usePermission 훅, 라우트 가드 3중 정합. validateOwnership으로 IDOR 차단, OrderSpecification.withRoleFilter로 작업자별 본인 담당 주문 자동 필터링.",
        metrics: ["4-Tier RBAC", "IDOR 방어"],
      },
      {
        title: "Capacity 기반 SmartAssign + 화이트리스트 SSOT",
        description:
          "작업자 담당상품(assignedProducts) 화이트리스트 기반 Strict Match — 외 상품 노출 차단. 일·월 가동량 + 일자별 Override + 동시성 방어(409 Conflict)로 휴먼 에러 시스템 단 차단. FE↔BE SSOT로 겸직자 추가는 이름 한 줄.",
        metrics: ["35명+ 작업자", "Strict Match", "FE↔BE SSOT"],
      },
      {
        title: "일괄 업로드 + OrderHistory 자동 롤백",
        description:
          "스프레드시트 UPSERT를 4단계(naverOrderId → buyerId+date → name+date → fuzzy)로 매칭. 100건 chunked 업로드 + dry-run 미리보기 + '기존 주문만 업데이트' 안전 토글. 사고 시 OrderHistory 기반 bulk-rollback으로 즉시 복원.",
        metrics: ["4단계 매칭", "OrderHistory 자동 롤백"],
      },
      {
        title: "DnD 캘린더 + 작업자 컬러 디자인 시스템",
        description:
          "FullCalendar 월간 뷰 + 드래그앤드롭 배정을 Linear·Notion 톤(좌측 4px accent bar + 14% alpha)으로 구현. 작업자 35명+ 고유 컬러를 TINT / INVERSE / SOLID 3-state로 단일 소스 관리, '이 색 = 이 사람' 멘탈 모델 형성.",
        metrics: ["35+ unique colors", "DnD optimistic update"],
      },
      {
        title: "Audit Log + CANCELED 잠금",
        description:
          "필드별 Diff 엔진(30+ 화이트리스트) + 복합 인덱스 OrderHistory로 모든 주문 변경 이력 추적. CANCELED는 SUPREME만 롤백 가능 잠금 — 데이터 무결성 보장. Member 이름은 벌크 해석으로 N+1 차단.",
        metrics: ["30+ tracked fields", "N+1 차단"],
      },
      {
        title: "성능·인프라 비용 최적화",
        description:
          "React Query staleTime 30s + refetchOnMount 'always'로 폴링 제거. JPA @BatchSize(20)로 N+1 차단. useMemo 기반 productMap·memberMap O(1) 조회 구조. Railway API 호출 70~80%↓ → 인프라 비용 동반 절감.",
        metrics: ["API 호출 70~80%↓", "N+1 차단"],
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
    role: "Frontend Developer",
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
    role: "Frontend Developer",
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
    role: "Frontend Developer",
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
