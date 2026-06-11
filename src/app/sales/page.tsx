import type { Metadata } from "next";
import {
  youngmi,
  type Experience,
  type PreviousCareer,
} from "@/data/resumeData";

const {
  profile,
  heroStats,
  skillGroups,
  experiences,
  previousCareers,
  education,
  certifications,
} = youngmi;

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "profile",
  },
};

const NAV_LINKS = [
  { href: "#about", label: "소개" },
  { href: "#skills", label: "핵심 역량" },
  { href: "#experience", label: "경력" },
  { href: "#contact", label: "연락처" },
];

const isCurrent = (period: string) => /present|현재/i.test(period);

export default function SalesOpsResumePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-stone-50 text-stone-700 [&_::selection]:bg-blue-700/15 [&_::selection]:text-blue-950">
      <Nav />

      <main className="mx-auto w-full max-w-4xl px-6">
        <Hero />

        <Section id="about" index="01" title="소개">
          <div className="reveal max-w-2xl space-y-5 break-keep leading-relaxed">
            {profile.introduction.map((line, i) => (
              <p
                key={line}
                className={
                  i === 0
                    ? "text-lg text-stone-900 sm:text-xl"
                    : "text-base text-stone-600 sm:text-lg"
                }
              >
                {line}
              </p>
            ))}
          </div>
        </Section>

        <Section id="skills" index="02" title="핵심 역량">
          <dl className="border-y border-stone-200 divide-y divide-stone-200">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="reveal grid gap-1.5 py-4 sm:grid-cols-[200px_1fr] sm:gap-10 sm:py-5"
              >
                <dt className="break-keep font-mono text-xs text-stone-400 sm:pt-1">
                  {group.category}
                </dt>
                <dd className="break-keep text-sm leading-relaxed text-stone-700 sm:text-[15px]">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="experience" index="03" title="경력">
          <div>
            {experiences.map((experience) => (
              <ExperienceEntry
                key={`${experience.company}-${experience.period}`}
                experience={experience}
              />
            ))}
          </div>
        </Section>

        <Section id="before" index="04" title="이전 경력">
          {previousCareers.map((career) => (
            <PreviousCareerEntry key={career.company} career={career} />
          ))}
        </Section>

        <Section id="education" index="05" title="학력 · 자격">
          <div className="reveal grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-mono text-xs text-stone-400">학력</h3>
              <ul className="mt-4 space-y-4">
                {education.map((edu) => (
                  <li key={`${edu.institution}-${edu.program}`}>
                    <p className="text-sm font-medium text-stone-900 sm:text-base">
                      {edu.institution}
                    </p>
                    <p className="mt-0.5 text-sm text-stone-500">
                      {edu.program}
                    </p>
                    <p className="mt-1 font-mono text-xs tabular-nums text-stone-400">
                      {edu.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs text-stone-400">자격증</h3>
              <ul className="mt-4 space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    <p className="text-sm font-medium text-stone-900 sm:text-base">
                      {cert.name}
                    </p>
                    <p className="mt-0.5 text-sm text-stone-500">
                      {cert.issuer}
                    </p>
                    <p className="mt-1 font-mono text-xs tabular-nums text-stone-400">
                      {cert.date}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" index="06" title="연락처">
          <div className="reveal">
            <p className="max-w-xl break-keep text-base leading-relaxed text-stone-600 sm:text-lg">
              새로운 협업, 채용 제안, 자유로운 대화 모두 환영합니다.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block break-all font-mono text-2xl text-stone-900 underline decoration-stone-300 decoration-1 underline-offset-8 transition-colors hover:text-blue-700 hover:decoration-blue-700 sm:text-4xl"
            >
              {profile.email}
            </a>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {profile.socials
                .filter((social) => social.label !== "Email")
                .map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-stone-500 transition-colors hover:text-blue-700"
                    >
                      {social.label} ↗
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </Section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 py-10 font-mono text-xs text-stone-400">
          <span>
            © {new Date().getFullYear()} {profile.name} ({profile.nameEn})
          </span>
          <span>Next.js · Tailwind CSS · Vercel</span>
        </footer>
      </main>
    </div>
  );
}

function Nav() {
  return (
    <nav
      aria-label="페이지 내 이동"
      className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/80 backdrop-blur"
    >
      <div
        aria-hidden
        className="h-0.5 w-full bg-gradient-to-r from-blue-700 via-blue-500 to-transparent"
      />
      <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between px-6">
        <a href="#" className="text-sm font-semibold text-stone-900">
          {profile.name}
          <span className="ml-1.5 font-mono text-xs font-normal text-blue-700">
            /영업관리
          </span>
        </a>
        <div className="hidden items-center gap-6 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-xs font-medium text-stone-500 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-blue-700 after:transition-[width] after:duration-300 hover:text-blue-700 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-xs text-blue-700 sm:hidden"
        >
          Email
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const { currentRole } = profile;
  return (
    <header className="pb-16 pt-16 sm:pb-24 sm:pt-24">
      <p className="enter flex flex-wrap items-center gap-2 break-keep font-mono text-[11px] text-blue-700 sm:text-xs">
        <span
          aria-hidden
          className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-700"
        />
        {currentRole.position} @ {currentRole.company} · {currentRole.sinceLabel}
      </p>
      <h1
        className="enter mt-6 text-5xl font-semibold tracking-tight text-stone-900 sm:text-7xl"
        style={{ animationDelay: "80ms" }}
      >
        {profile.name}
      </h1>
      <p
        className="enter mt-3 break-keep font-mono text-xs text-stone-400 sm:text-sm"
        style={{ animationDelay: "160ms" }}
      >
        {profile.nameEn} — {profile.role}
      </p>
      <p
        className="enter mt-8 max-w-2xl break-keep text-2xl font-semibold leading-snug text-stone-900 sm:text-3xl"
        style={{ animationDelay: "240ms" }}
      >
        {profile.tagline}
      </p>

      <div
        className="enter mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200 shadow-sm sm:grid-cols-4"
        style={{ animationDelay: "320ms" }}
      >
        {heroStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-4 transition-colors duration-300 hover:bg-blue-50/60 sm:p-5"
          >
            <p className="font-mono text-xl font-medium tabular-nums text-blue-700 sm:text-2xl">
              {stat.value}
            </p>
            <p className="mt-1.5 break-keep text-xs leading-relaxed text-stone-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
}

function ExperienceEntry({ experience }: { experience: Experience }) {
  const current = isCurrent(experience.period);
  return (
    <article
      aria-label={`${experience.company} ${experience.role}`}
      className="reveal grid gap-4 border-t border-stone-200 py-10 transition-colors hover:border-stone-300 sm:grid-cols-[200px_1fr] sm:gap-10 sm:py-12"
    >
      <div className="font-mono text-xs leading-relaxed text-stone-400">
        <p className="tabular-nums text-stone-600">{experience.period}</p>
        {experience.duration ? (
          <p className="mt-0.5 tabular-nums">{experience.duration}</p>
        ) : null}
        {experience.team ? (
          <p className="mt-3 hidden break-keep sm:block">{experience.team}</p>
        ) : null}
      </div>

      <div className="min-w-0">
        <h3 className="break-keep text-xl font-semibold text-stone-900 sm:text-2xl">
          {experience.company}
          {current ? (
            <span className="ml-3 inline-flex items-center gap-1.5 align-middle font-mono text-[10px] font-normal tracking-widest text-blue-700">
              <span
                aria-hidden
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-700"
              />
              재직 중
            </span>
          ) : null}
        </h3>
        <p className="mt-1 text-sm text-stone-500 sm:text-base">
          {experience.role}
        </p>

        {experience.serviceName || experience.serviceDescription ? (
          <p className="mt-4 break-keep text-sm leading-relaxed text-stone-500">
            {experience.serviceName ? (
              <span className="font-mono text-xs text-blue-700">
                {experience.serviceName}
              </span>
            ) : null}
            {experience.serviceName && experience.serviceDescription
              ? " — "
              : null}
            {experience.serviceDescription}
          </p>
        ) : null}

        <ul className="mt-7 space-y-6">
          {experience.highlights.map((highlight) => (
            <li key={highlight.title} className="break-keep">
              <h4 className="text-sm font-semibold text-stone-800 sm:text-base">
                {highlight.title}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-stone-600 sm:text-[15px]">
                {highlight.description}
              </p>
              {highlight.metrics && highlight.metrics.length > 0 ? (
                <p className="mt-2 font-mono text-xs leading-relaxed text-blue-700">
                  {highlight.metrics.join("  ·  ")}
                </p>
              ) : null}
            </li>
          ))}
        </ul>

        <p
          aria-label={`${experience.company} 핵심 키워드`}
          className="mt-7 break-keep font-mono text-xs leading-relaxed text-stone-400"
        >
          <span className="text-stone-300">keyword / </span>
          {experience.stack.join(" · ")}
        </p>
      </div>
    </article>
  );
}

function PreviousCareerEntry({ career }: { career: PreviousCareer }) {
  return (
    <article className="reveal grid gap-4 border-t border-stone-200 py-8 transition-colors hover:border-stone-300 sm:grid-cols-[200px_1fr] sm:gap-10 sm:py-10">
      <p className="font-mono text-xs tabular-nums leading-relaxed text-stone-400">
        {career.period}
      </p>
      <div className="min-w-0">
        <h3 className="break-keep text-base font-semibold text-stone-900 sm:text-lg">
          {career.company}
          <span className="ml-2 text-sm font-normal text-stone-400">
            {career.team}
          </span>
        </h3>
        <p className="mt-2 break-keep text-sm leading-relaxed text-stone-600">
          {career.description}
        </p>
      </div>
    </article>
  );
}

function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-14 sm:py-20">
      <div className="reveal mb-8 flex items-baseline gap-4 sm:mb-12">
        <span className="font-mono text-xs tabular-nums text-blue-700">
          {index}
        </span>
        <h2 className="break-keep text-sm font-semibold tracking-wide text-stone-400">
          {title}
        </h2>
        <span aria-hidden className="h-px flex-1 self-center bg-stone-200" />
      </div>
      {children}
    </section>
  );
}
