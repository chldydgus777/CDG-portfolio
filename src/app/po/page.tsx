import type { Metadata } from "next";
import {
  po,
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
} = po;

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
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const isCurrent = (period: string) => /present|현재/i.test(period);

export default function PoResumePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-200">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-96 max-w-3xl bg-violet-500/10 blur-3xl"
      />
      <Nav />

      <main className="mx-auto w-full max-w-4xl px-6">
        <Hero />

        <Section id="about" index="01" title="About">
          <div className="reveal max-w-2xl space-y-5 break-keep leading-relaxed">
            {profile.introduction.map((line, i) => (
              <p
                key={line}
                className={
                  i === 0
                    ? "text-lg text-zinc-100 sm:text-xl"
                    : "text-base text-zinc-400 sm:text-lg"
                }
              >
                {line}
              </p>
            ))}
          </div>
        </Section>

        <Section id="experience" index="02" title="Experience">
          <div className="space-y-6">
            {experiences.map((experience) => (
              <ExperienceCard
                key={`${experience.company}-${experience.period}`}
                experience={experience}
              />
            ))}
          </div>
        </Section>

        <Section id="skills" index="03" title="Skills">
          <dl className="reveal divide-y divide-zinc-800/80 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 px-6 sm:px-8">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="grid gap-1.5 py-4 sm:grid-cols-[180px_1fr] sm:gap-10 sm:py-5"
              >
                <dt className="break-keep font-mono text-xs text-zinc-500 sm:pt-1">
                  {group.category}
                </dt>
                <dd className="break-keep text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="before" index="04" title="Previous Career">
          {previousCareers.map((career) => (
            <PreviousCareerCard key={career.company} career={career} />
          ))}
        </Section>

        <Section id="education" index="05" title="Education & Certifications">
          <div className="reveal grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-mono text-xs text-zinc-500">EDUCATION</h3>
              <ul className="mt-4 space-y-4">
                {education.map((edu) => (
                  <li key={`${edu.institution}-${edu.program}`}>
                    <p className="text-sm font-medium text-zinc-100 sm:text-base">
                      {edu.institution}
                    </p>
                    <p className="mt-0.5 text-sm text-zinc-400">{edu.program}</p>
                    <p className="mt-1 font-mono text-xs tabular-nums text-zinc-500">
                      {edu.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs text-zinc-500">CERTIFICATIONS</h3>
              <ul className="mt-4 space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    <p className="text-sm font-medium text-zinc-100 sm:text-base">
                      {cert.name}
                    </p>
                    <p className="mt-0.5 text-sm text-zinc-400">{cert.issuer}</p>
                    <p className="mt-1 font-mono text-xs tabular-nums text-zinc-500">
                      {cert.date}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" index="06" title="Contact">
          <div className="reveal">
            <p className="max-w-xl break-keep text-base leading-relaxed text-zinc-400 sm:text-lg">
              새로운 협업, 채용 제안, 자유로운 대화 모두 환영합니다.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block break-all font-mono text-2xl text-zinc-50 underline decoration-zinc-700 decoration-1 underline-offset-8 transition-colors hover:text-violet-400 hover:decoration-violet-400 sm:text-4xl"
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
                      className="font-mono text-sm text-zinc-400 transition-colors hover:text-violet-400"
                    >
                      {social.label} ↗
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </Section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800/80 py-10 font-mono text-xs text-zinc-600">
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
      className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur"
    >
      <div
        aria-hidden
        className="h-0.5 w-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-transparent"
      />
      <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between px-6">
        <a href="#" className="text-sm font-semibold text-zinc-50">
          {profile.name}
          <span className="ml-1.5 font-mono text-xs font-normal text-violet-400">
            /po
          </span>
        </a>
        <div className="hidden items-center gap-6 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-mono text-xs text-zinc-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-violet-400 after:transition-[width] after:duration-300 hover:text-violet-400 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-xs text-violet-400 sm:hidden"
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
      <p className="enter flex flex-wrap items-center gap-2 break-keep font-mono text-[11px] text-violet-400 sm:text-xs">
        <span
          aria-hidden
          className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400"
        />
        {currentRole.position} @ {currentRole.company} · {currentRole.sinceLabel}
      </p>
      <h1
        className="enter mt-6 text-5xl font-semibold tracking-tight text-zinc-50 sm:text-7xl"
        style={{ animationDelay: "80ms" }}
      >
        {profile.name}
      </h1>
      <p
        className="enter mt-3 break-keep font-mono text-xs text-zinc-500 sm:text-sm"
        style={{ animationDelay: "160ms" }}
      >
        {profile.nameEn} — {profile.role}
      </p>
      <p
        className="enter mt-8 max-w-2xl break-keep text-2xl font-semibold leading-snug text-zinc-100 sm:text-3xl"
        style={{ animationDelay: "240ms" }}
      >
        {profile.tagline}
      </p>

      <div
        className="enter mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
        style={{ animationDelay: "320ms" }}
      >
        {heroStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-colors duration-300 hover:border-violet-500/40 hover:bg-zinc-900/70 sm:p-5"
          >
            <p className="font-mono text-xl font-medium tabular-nums text-violet-400 sm:text-2xl">
              {stat.value}
            </p>
            <p className="mt-1.5 break-keep text-xs leading-relaxed text-zinc-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  const current = isCurrent(experience.period);
  return (
    <article
      aria-label={`${experience.company} ${experience.role}`}
      className="reveal rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700 sm:p-8"
    >
      <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <h3 className="break-keep text-xl font-semibold text-zinc-50 sm:text-2xl">
            {experience.company}
            {current ? (
              <span className="ml-3 inline-flex items-center gap-1.5 align-middle font-mono text-[10px] font-normal tracking-widest text-violet-400">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400"
                />
                NOW
              </span>
            ) : null}
          </h3>
          <p className="mt-1 text-sm text-zinc-400 sm:text-base">
            {experience.role}
          </p>
        </div>
        <div className="flex flex-col font-mono text-[11px] tabular-nums text-zinc-500 sm:items-end sm:text-xs">
          <span>{experience.period}</span>
          {experience.duration ? <span>{experience.duration}</span> : null}
        </div>
      </header>

      {experience.serviceName || experience.serviceDescription ? (
        <p className="mt-4 break-keep text-sm leading-relaxed text-zinc-400">
          {experience.serviceName ? (
            <span className="font-mono text-xs text-violet-400">
              {experience.serviceName}
            </span>
          ) : null}
          {experience.serviceName && experience.serviceDescription
            ? " — "
            : null}
          {experience.serviceDescription}
        </p>
      ) : null}

      <ul className="mt-7 space-y-6 border-t border-zinc-800/60 pt-7">
        {experience.highlights.map((highlight) => (
          <li key={highlight.title} className="break-keep">
            <h4 className="text-sm font-semibold text-zinc-100 sm:text-base">
              {highlight.title}
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
              {highlight.description}
            </p>
            {highlight.metrics && highlight.metrics.length > 0 ? (
              <p className="mt-2 font-mono text-xs leading-relaxed text-violet-400">
                {highlight.metrics.join("  ·  ")}
              </p>
            ) : null}
          </li>
        ))}
      </ul>

      <p
        aria-label={`${experience.company} 핵심 키워드`}
        className="mt-7 break-keep font-mono text-xs leading-relaxed text-zinc-500"
      >
        <span className="text-zinc-600">focus / </span>
        {experience.stack.join(" · ")}
      </p>
    </article>
  );
}

function PreviousCareerCard({ career }: { career: PreviousCareer }) {
  return (
    <article className="reveal rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700 sm:p-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="break-keep text-base font-semibold text-zinc-100 sm:text-lg">
          {career.company}
          <span className="ml-2 text-sm font-normal text-zinc-500">
            {career.team}
          </span>
        </h3>
        <span className="font-mono text-xs tabular-nums text-zinc-500">
          {career.period}
        </span>
      </div>
      <p className="mt-3 break-keep text-sm leading-relaxed text-zinc-400">
        {career.description}
      </p>
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
        <span className="font-mono text-xs tabular-nums text-violet-400">
          {index}
        </span>
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          {title}
        </h2>
        <span aria-hidden className="h-px flex-1 self-center bg-zinc-800/80" />
      </div>
      {children}
    </section>
  );
}
