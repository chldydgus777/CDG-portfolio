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
import { devTheme } from "@/components/resume/theme";
import {
  profile,
  skillGroups,
  experiences,
  previousCareers,
  education,
  certifications,
  devHeroStats,
  type Experience,
  type PreviousCareer,
} from "@/data/resumeData";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "profile",
  },
};

export default function DevResumePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-200">
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-96 max-w-3xl ${devTheme.glow} blur-3xl`}
      />
      <ResumeNav theme={devTheme} profile={profile} />

      <main className="mx-auto w-full max-w-4xl px-6">
        <ResumeHero theme={devTheme} profile={profile} stats={devHeroStats} />

        <Section theme={devTheme} id="about" index="01" title="About">
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

        <Section theme={devTheme} id="experience" index="02" title="Experience">
          <div>
            {experiences.map((experience) => (
              <ExperienceEntry
                key={`${experience.company}-${experience.period}`}
                experience={experience}
              />
            ))}
          </div>
        </Section>

        <Section theme={devTheme} id="skills" index="03" title="Skills">
          <dl className="border-y border-zinc-800/80 divide-y divide-zinc-800/80">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="reveal grid gap-1.5 py-4 sm:grid-cols-[180px_1fr] sm:gap-10 sm:py-5"
              >
                <dt className="font-mono text-xs text-zinc-500 sm:pt-1">
                  {group.category}
                </dt>
                <dd className="break-keep text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section theme={devTheme} id="before" index="04" title="Previous Career">
          {previousCareers.map((career) => (
            <PreviousCareerEntry key={career.company} career={career} />
          ))}
        </Section>

        <Section
          theme={devTheme}
          id="education"
          index="05"
          title="Education & Certifications"
        >
          <EducationSection
            education={education}
            certifications={certifications}
          />
        </Section>

        <Section theme={devTheme} id="contact" index="06" title="Contact">
          <ContactSection theme={devTheme} profile={profile} />
        </Section>

        <ResumeFooter profile={profile} />
      </main>
    </div>
  );
}

function ExperienceEntry({ experience }: { experience: Experience }) {
  const current = isCurrent(experience.period);
  return (
    <article
      aria-label={`${experience.company} ${experience.role}`}
      className="reveal grid gap-4 border-t border-zinc-800/80 py-10 transition-colors hover:border-zinc-700 sm:grid-cols-[180px_1fr] sm:gap-10 sm:py-12"
    >
      <div className="font-mono text-xs leading-relaxed text-zinc-500">
        <p className="tabular-nums text-zinc-300">{experience.period}</p>
        {experience.duration ? (
          <p className="mt-0.5 tabular-nums">{experience.duration}</p>
        ) : null}
        {experience.team ? (
          <p className="mt-3 hidden break-keep sm:block">{experience.team}</p>
        ) : null}
      </div>

      <div className="min-w-0">
        <h3 className="break-keep text-xl font-semibold text-zinc-50 sm:text-2xl">
          {experience.company}
          {current ? (
            <span
              className={`ml-3 inline-flex items-center gap-1.5 align-middle font-mono text-[10px] font-normal tracking-widest ${devTheme.accentText}`}
            >
              <span
                aria-hidden
                className={`h-1.5 w-1.5 animate-pulse rounded-full ${devTheme.accentDot}`}
              />
              NOW
            </span>
          ) : null}
        </h3>
        <p className="mt-1 text-sm text-zinc-400 sm:text-base">
          {experience.role}
        </p>

        {experience.serviceName || experience.serviceDescription ? (
          <p className="mt-4 break-keep text-sm leading-relaxed text-zinc-400">
            {experience.serviceName ? (
              <span className={`font-mono text-xs ${devTheme.accentText}`}>
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
              <h4 className="text-sm font-semibold text-zinc-100 sm:text-base">
                {highlight.title}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                {highlight.description}
              </p>
              {highlight.metrics && highlight.metrics.length > 0 ? (
                <p
                  className={`mt-2 font-mono text-xs leading-relaxed ${devTheme.accentText}`}
                >
                  {highlight.metrics.join("  ·  ")}
                </p>
              ) : null}
            </li>
          ))}
        </ul>

        <p
          aria-label={`${experience.company} 사용 기술`}
          className="mt-7 break-keep font-mono text-xs leading-relaxed text-zinc-500"
        >
          <span className="text-zinc-600">stack / </span>
          {experience.stack.join(" · ")}
        </p>
      </div>
    </article>
  );
}

function PreviousCareerEntry({ career }: { career: PreviousCareer }) {
  return (
    <article className="reveal grid gap-4 border-t border-zinc-800/80 py-8 transition-colors hover:border-zinc-700 sm:grid-cols-[180px_1fr] sm:gap-10 sm:py-10">
      <p className="font-mono text-xs tabular-nums leading-relaxed text-zinc-500">
        {career.period}
      </p>
      <div className="min-w-0">
        <h3 className="break-keep text-base font-semibold text-zinc-100 sm:text-lg">
          {career.company}
          <span className="ml-2 text-sm font-normal text-zinc-500">
            {career.team}
          </span>
        </h3>
        <p className="mt-2 break-keep text-sm leading-relaxed text-zinc-400">
          {career.description}
        </p>
      </div>
    </article>
  );
}
