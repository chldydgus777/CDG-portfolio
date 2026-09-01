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

/* -------------------------------------------------------------------------- */
/*                                  Profile                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                              Tenure (재직 기간)                              */
/* -------------------------------------------------------------------------- */

/** 지금필름 입사일. sinceISO와 재직 기간 계산이 이 값 하나를 공유한다. */
export const JIGEUMFILM_SINCE = "2026-03-16";

/**
 * 재직 중인 경력의 기간 라벨을 시작일에서 계산한다.
 * 하드코딩하면 작성 시점 기준으로 굳어 시간이 지날수록 틀린 값이 되므로
 * (실제로 "약 2개월"이 6개월 가까이 방치된 적이 있다) 매 렌더마다 계산한다.
 * 정적 렌더 이후에도 갱신되도록 페이지에 `export const revalidate`가 필요하다.
 */
export function tenure(sinceISO: string, now: Date = new Date()): string {
  const since = new Date(sinceISO);
  let months =
    (now.getFullYear() - since.getFullYear()) * 12 +
    (now.getMonth() - since.getMonth());
  if (now.getDate() < since.getDate()) months -= 1;
  months = Math.max(months, 0);

  const years = Math.floor(months / 12);
  const rest = months % 12;
  const label =
    years > 0
      ? rest > 0
        ? `${years}년 ${rest}개월`
        : `${years}년`
      : `${months}개월`;

  return `약 ${label} (재직 중)`;
}

export const profile: Profile = {
  name: "최용현",
  nameEn: "Choi Yong-hyun",
  role: "Front-end Developer · Product Owner",
  currentRole: {
    company: "Jigeumfilm (지금필름)",
    position: "Product Owner",
    sinceISO: JIGEUMFILM_SINCE,
    sinceLabel: "2026.03.16 ~",
  },
  tagline: "비즈니스 병목을 시스템으로 풀고, 결과를 수치로 증명합니다.",
  introduction: [
    "코드 구현부터 PO 의사결정까지 직접 책임. 지금필름에서 제작 운영 어드민·자사 판매몰·신규 아카이브 서비스 3개를 단독으로 설계·구축·운영 중이며, 프론트엔드에서 시작해 백엔드와 인프라까지 범위를 넓혔습니다.",
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
    category: "Backend",
    items: ["Spring Boot", "Java", "JPA", "MySQL", "Flyway", "JWT · RBAC"],
  },
  {
    category: "Infra",
    items: [
      "AWS EC2",
      "Docker Compose",
      "Cloudflare Pages · R2 · Workers",
      "블루-그린 배포",
    ],
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
    duration: tenure(JIGEUMFILM_SINCE),
    team: "대표 2명 · 영상·대본 작업자 35명+",
    serviceName: "지금필름 어드민 · 자사몰 · 아카이핀",
    serviceDescription:
      "제작 운영·판매·아카이브 3개 제품을 단독 설계·구축·운영. 프론트엔드부터 백엔드·인프라까지 전 구간 담당.",
    stack: [
      "React 19",
      "Next.js 15",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Query",
      "Spring Boot 3.4",
      "Java 21",
      "MySQL · Flyway",
      "AWS EC2 · Docker Compose",
      "Cloudflare R2 · Pages",
    ],
    highlights: [
      {
        title: "운영 어드민 풀스택 단독 구축",
        description:
          "React 19 + Vite 프론트엔드부터 Spring Boot 3.4 · Java 21 · MySQL 백엔드까지 단독 설계·구현. 4단계 RBAC, 13단계 주문 파이프라인, 네이버 커머스 양방향 동기화(5분 스케줄러 + 웹훅)와 상품 자동 매칭을 운영 중입니다.",
        metrics: ["Front-end → Full-stack", "RBAC 4롤 · 주문 13단계"],
      },
      {
        title: "Railway → AWS EC2 이관 · 무중단 배포 구축",
        description:
          "간헐 장애와 원거리 리전 지연(/api/health ttfb 중앙값 0.28s)을 근거로 서울 리전 EC2 + Docker Compose 이관을 설계. 조용히 죽는 급소 5개(prod 프로파일 누락 시 H2 인메모리 부팅, 네이버 IP allowlist, JVM 힙 미설정 등)를 사전 실사해 무사고로 넘긴 뒤 블루-그린 무중단 배포를 붙였습니다.",
        metrics: ["무사고 컷오버", "블루-그린 무중단 배포"],
      },
      {
        title: "검수 영상 전송 — 표준 HLS 전환 · 원본 병렬 다운로드",
        description:
          "대용량 mp4를 직접 서빙하던 반표준 구조를 표준 HLS + ABR + CDN 캐시로 교체해 버퍼링과 아이폰 재생 불가를 해소. R2 원본 다운로드는 단일 스트림 병목을 병렬 처리로 풀었습니다.",
        metrics: ["원본 다운로드 33×", "iOS 재생 불가 해소"],
      },
      {
        title: "결제 시스템 구축 (포트원)",
        description:
          "결제 원장 설계부터 S2S 승인 검증·웹훅 서명 확인·항목 단위 부분 환불·주문 생성 복구 스케줄러까지 구현. PG가 중복 취소를 막아주지 않는다는 점을 확인하고 DB 선점을 앞에 두어 정합성을 확보했습니다.",
        metrics: ["S2S 검증 · 웹훅 서명", "장바구니 부분 환불"],
      },
      {
        title: "자사몰 — 정적 export 아키텍처 결정",
        description:
          "카카오·네이버 크롤러가 JS를 실행하지 않아 SEO·OG에는 완성된 HTML이 필요했습니다. Next.js 15 정적 export로 서버 없이 요구를 만족시키고, 백엔드는 신설하지 않고 기존 Spring API에 공개 엔드포인트만 추가했습니다.",
        metrics: ["서버 러닝코스트 0", "백엔드 신설 0"],
      },
      {
        title: "인프라 비용 70~80% 절감",
        description:
          "운영 중 비용 부담을 발견 → 폴링 제거 + 데이터 신선도 정책 재정의. React Query 캐싱 패턴을 적용해 API 호출을 70~80% 줄였습니다.",
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
  { value: "3개", label: "단독 설계·구축·운영 중인 제품" },
  { value: "70~80%↓", label: "API 호출 · 인프라 비용 절감" },
  { value: "33×", label: "R2 원본 다운로드 병목 해소" },
  { value: "37×", label: "이미지 업로드 단축 (4.19s → 111ms)" },
];

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
      sinceISO: JIGEUMFILM_SINCE,
      sinceLabel: "2026.03.16 ~",
    },
    tagline: "개발을 아는 PO — 가설을 코드로 직접 검증하고, 출시로 증명합니다.",
    introduction: [
      "지금필름 PO로 제작 운영 어드민·자사 판매몰·신규 아카이브 서비스 3개를 스펙 정의부터 출시·운영까지 단독 수행. 기획서가 아니라 동작하는 제품으로 말합니다.",
      "우선순위는 데이터로 정합니다. 인프라 비용 70~80% 절감, 결제·환불 원장 설계, 장애를 근거로 한 인프라 이관 승인 — 의사결정을 수치와 사실로 검증해 왔습니다.",
      "프론트엔드 개발자 출신이라 엔지니어와 같은 언어로 말하고, 실현 가능한 스펙을 씁니다.",
    ],
    email: "chldydgus777@kakao.com",
    socials: [
      { label: "Email", href: "mailto:chldydgus777@kakao.com" },
      { label: "GitHub", href: "https://github.com/chldydgus777" },
    ],
  } satisfies Profile,

  heroStats: [
    { value: "3개", label: "동시 운영 중인 제품 — 운영 · 판매 · 신규" },
    { value: "2개월", label: "MVP 기획부터 시장 출시까지" },
    { value: "70~80%↓", label: "데이터 정책 재정의로 인프라 비용 절감" },
    { value: "35+", label: "작업자 운영 체계 단독 구축" },
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
      duration: tenure(JIGEUMFILM_SINCE),
      team: "대표 2명 · 영상·대본 작업자 35명+",
      serviceName: "지금필름 어드민 · 자사몰 · 아카이핀",
      serviceDescription:
        "제작 운영·판매·아카이브 3개 제품을 스펙 정의부터 출시·운영까지 단독 수행.",
      stack: [
        "제품 스펙 정의",
        "우선순위 결정",
        "수익화 설계",
        "인프라 의사결정",
        "Claude Code 페어",
        "운영 지표",
      ],
      highlights: [
        {
          title: "목적이 다른 제품 3개를 동시에 운영",
          description:
            "수기·스프레드시트로 돌아가던 제작 운영을 어드민 제품으로 전환하고, 이어서 자사 판매몰과 신규 아카이브 서비스를 열었습니다. 세 제품 모두 요구사항 수집·스펙·우선순위·출시·운영을 단독으로 책임집니다.",
          metrics: ["운영 · 판매 · 신규 3개 제품", "기획 → 출시 단독 수행"],
        },
        {
          title: "인프라 이관 — 비용이 아니라 장애로 설득",
          description:
            "간헐 장애가 반복되자 현행과 대안을 요금·지연·장애 이력 표로 정리해 대표 승인을 받았습니다. 핵심 논거는 절감이 아니라 「장애 제거와 지연 단축」이었고, 늘어나는 비용은 크레딧으로 흡수하는 안을 함께 제시했습니다.",
          metrics: ["대표 승인 · 무사고 이관", "지연 0.28s → 서울 리전"],
        },
        {
          title: "판매 채널과 수익화 설계",
          description:
            "결제·환불 원장을 직접 설계하고 쿠폰·추천인·제휴사 셀프 충전까지 채널을 붙였습니다. 부분 환불처럼 돈이 틀어지는 지점은 PG를 믿지 않고 DB 선점을 앞에 두는 식으로 정책을 먼저 정했습니다.",
          metrics: ["결제·환불 원장 설계", "쿠폰 · 추천인 · 제휴 채널"],
        },
        {
          title: "표준을 이기려 하지 않는다",
          description:
            "대용량 영상을 직접 서빙하던 자체 방식이 버퍼링과 특정 기기 재생 불가를 낳자, 기능을 덧대는 대신 표준 HLS로 갈아탔습니다. 이 판단은 사내 개발 원칙의 모범 사례로 문서화됐습니다.",
          metrics: ["반표준 → 표준 전환", "사내 원칙 사례 등재"],
        },
        {
          title: "채널 특성에서 아키텍처를 역산",
          description:
            "자사몰은 카카오·네이버 유입이 핵심인데 두 크롤러는 JS를 실행하지 않습니다. 이 사실 하나로 정적 export를 택해 SEO·공유 미리보기를 확보하고 서버 러닝코스트를 0으로 만들었습니다.",
          metrics: ["서버 러닝코스트 0", "백엔드 신설 0"],
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
