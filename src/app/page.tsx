import Link from "next/link";
import { ExperienceCard } from "@/components/ExperienceCard";
import {
  coreCompetencies,
  experiences,
  profile,
  projects,
} from "@/data/resumeData";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-content px-6 py-20 sm:py-28">
      <Hero />

      <Section id="competencies" title="Core Competencies" eyebrow="01">
        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {coreCompetencies.map((competency) => (
            <li
              key={competency.title}
              className="rounded-2xl border border-ink-700/70 bg-ink-900/60 p-6 transition-colors hover:border-ink-600"
            >
              <h3 className="text-base font-semibold text-zinc-50 sm:text-lg">
                {competency.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {competency.summary}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {competency.keywords.map((kw) => (
                  <li
                    key={kw}
                    className="rounded-full border border-ink-700 bg-ink-800/60 px-2.5 py-0.5 font-mono text-[11px] text-zinc-400"
                  >
                    {kw}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="experience" title="Experience" eyebrow="02">
        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              experience={experience}
            />
          ))}
        </div>
      </Section>

      <Section id="projects" title="Selected Projects" eyebrow="03">
        <ul className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.name}
              className="rounded-2xl border border-ink-700/70 bg-ink-900/60 p-6"
            >
              <h3 className="text-base font-semibold text-zinc-50 sm:text-lg">
                {project.name}
              </h3>
              <p className="mt-1 text-xs text-zinc-500">{project.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-ink-700 bg-ink-800/60 px-2.5 py-0.5 font-mono text-[11px] text-zinc-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Contact" eyebrow="04">
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
        {profile.role} @ {profile.company}
      </p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-6xl">
        {profile.name}
        <span className="ml-3 text-zinc-500 sm:ml-4">{profile.nameEn}</span>
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
        {profile.tagline}
      </p>
      <p className="mt-3 font-mono text-xs text-zinc-500">
        {profile.yearsOfExperience}+ years · Frontend & Product
      </p>
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
