import type { Experience } from "@/data/resumeData";

type Props = {
  experience: Experience;
};

export function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="group relative rounded-2xl border border-ink-700/70 bg-ink-900/60 p-6 transition-colors duration-200 hover:border-ink-600 sm:p-8"
      aria-label={`${experience.company} ${experience.role}`}
    >
      <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-zinc-50 sm:text-xl">
            {experience.company}
          </h3>
          <p className="mt-1 text-sm text-zinc-400 sm:text-base">
            {experience.role}
          </p>
        </div>
        <div className="flex flex-col text-xs text-zinc-500 sm:items-end sm:text-sm">
          <span>{experience.period}</span>
          {experience.location ? <span>{experience.location}</span> : null}
        </div>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
        {experience.summary}
      </p>

      <ul className="mt-6 space-y-4">
        {experience.achievements.map((achievement) => (
          <li
            key={achievement.headline}
            className="rounded-xl border border-ink-700/60 bg-ink-800/50 p-4 sm:p-5"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h4 className="text-sm font-medium text-zinc-100 sm:text-base">
                {achievement.headline}
              </h4>
              {achievement.metric ? (
                <span className="font-mono text-xs text-accent sm:text-sm">
                  {achievement.metric}
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {achievement.detail}
            </p>
          </li>
        ))}
      </ul>

      <ul
        className="mt-6 flex flex-wrap gap-2"
        aria-label={`${experience.company} 사용 기술`}
      >
        {experience.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-ink-700 bg-ink-800/70 px-3 py-1 font-mono text-xs text-zinc-400"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
