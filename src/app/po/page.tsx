import type { Metadata } from "next";
import {
  ContactSection,
  EducationSection,
  isCurrent,
  ResumeFooter,
  ResumeHero,
  ResumeNav,
  Section,
} from "@/components/resume/sections";
import { poTheme } from "@/components/resume/theme";
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

export default function PoResumePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-200">
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-96 max-w-3xl ${poTheme.glow} blur-3xl`}
      />
      <ResumeNav theme={poTheme} profile={profile} />

      <main className="mx-auto w-full max-w-4xl px-6">
        <ResumeHero theme={poTheme} profile={profile} stats={heroStats} />

        <Section theme={poTheme} id="about" index="01" title="About">
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

        <Section theme={poTheme} id="experience" index="02" title="Experience">
          <div className="space-y-6">
            {experiences.map((experience) => (
              <ExperienceCard
                key={`${experience.company}-${experience.period}`}
                experience={experience}
              />
            ))}
          </div>
        </Section>

        <Section theme={poTheme} id="skills" index="03" title="Skills">
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

        <Section theme={poTheme} id="before" index="04" title="Previous Career">
          {previousCareers.map((career) => (
            <PreviousCareerCard key={career.company} career={career} />
          ))}
        </Section>

        <Section
          theme={poTheme}
          id="education"
          index="05"
          title="Education & Certifications"
        >
          <EducationSection
            education={education}
            certifications={certifications}
          />
        </Section>

        <Section theme={poTheme} id="contact" index="06" title="Contact">
          <ContactSection theme={poTheme} profile={profile} />
        </Section>

        <ResumeFooter profile={profile} />
      </main>
    </div>
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
              <span
                className={`ml-3 inline-flex items-center gap-1.5 align-middle font-mono text-[10px] font-normal tracking-widest ${poTheme.accentText}`}
              >
                <span
                  aria-hidden
                  className={`h-1.5 w-1.5 animate-pulse rounded-full ${poTheme.accentDot}`}
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
            <span className={`font-mono text-xs ${poTheme.accentText}`}>
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
              <p
                className={`mt-2 font-mono text-xs leading-relaxed ${poTheme.accentText}`}
              >
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
