import Link from "next/link";
import { ExperienceCard } from "@/components/ExperienceCard";
import {
  certifications,
  education,
  experiences,
  previousCareers,
  profile,
  skillGroups,
} from "@/data/resumeData";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-content px-6 py-20 sm:py-28">
      <Hero />

      <Section id="about" title="About" eyebrow="01">
        <div className="space-y-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
          {profile.introduction.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills & Tools" eyebrow="02">
        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {skillGroups.map((group) => (
            <li
              key={group.category}
              className="rounded-2xl border border-ink-700/70 bg-ink-900/60 p-6"
            >
              <p className="font-mono text-xs text-accent">{group.category}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-ink-700 bg-ink-800/60 px-3 py-1 font-mono text-xs text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="experience" title="Experience" eyebrow="03">
        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.period}`}
              experience={experience}
            />
          ))}
        </div>
      </Section>

      <Section id="before" title="개발자 이전 경력" eyebrow="04">
        <ul className="space-y-4">
          {previousCareers.map((career) => (
            <li
              key={career.company}
              className="rounded-2xl border border-ink-700/70 bg-ink-900/60 p-6"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold text-zinc-50 sm:text-lg">
                  {career.company}
                </h3>
                <span className="text-xs text-zinc-500 sm:text-sm">
                  {career.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-400">{career.team}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {career.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="education" title="Education & Certifications" eyebrow="05">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-ink-700/70 bg-ink-900/60 p-6">
            <p className="font-mono text-xs text-accent">Education</p>
            <ul className="mt-3 space-y-3">
              {education.map((edu) => (
                <li key={`${edu.institution}-${edu.program}`}>
                  <p className="text-sm font-medium text-zinc-100">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-zinc-400">{edu.program}</p>
                  <p className="font-mono text-xs text-zinc-500">{edu.period}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink-700/70 bg-ink-900/60 p-6">
            <p className="font-mono text-xs text-accent">Certifications</p>
            <ul className="mt-3 space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="text-sm font-medium text-zinc-100">
                    {cert.name}
                  </p>
                  <p className="text-sm text-zinc-400">{cert.issuer}</p>
                  <p className="font-mono text-xs text-zinc-500">{cert.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact" eyebrow="06">
        <div className="rounded-2xl border border-ink-700/70 bg-ink-900/60 p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
            새로운 협업, 채용 제안, 자유로운 대화 모두 환영합니다.
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800/70 px-4 py-2 text-sm text-zinc-100 transition-colors hover:border-accent hover:text-accent"
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {social.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800/70 px-4 py-2 text-sm text-zinc-100 transition-colors hover:border-accent hover:text-accent"
              >
                Blog →
              </Link>
            </li>
          </ul>
        </div>
      </Section>

      <footer className="mt-24 border-t border-ink-700/60 pt-8 text-xs text-zinc-500">
        © {new Date().getFullYear()} {profile.name} ({profile.nameEn}). Built
        with Next.js · Tailwind · deployed on Vercel.
      </footer>
    </main>
  );
}

function Hero() {
  return (
    <section className="pb-20 sm:pb-28">
      <p className="font-mono text-xs text-accent">
        {profile.currentRole.position} @ {profile.currentRole.company} ·{" "}
        {profile.currentRole.sinceLabel}
      </p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-6xl">
        {profile.name}
        <span className="ml-3 text-zinc-500 sm:ml-4">{profile.nameEn}</span>
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
        {profile.tagline}
      </p>
      <p className="mt-3 font-mono text-xs text-zinc-500">{profile.role}</p>
    </section>
  );
}

function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-20">
      <div className="mb-10 flex items-baseline gap-4">
        <span className="font-mono text-xs text-zinc-500">{eyebrow}</span>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
