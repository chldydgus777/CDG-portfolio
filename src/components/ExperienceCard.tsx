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
          {experience.duration ? <span>{experience.duration}</span> : null}
        </div>
      </header>

      {experience.serviceName || experience.serviceDescription || experience.team ? (
        <div className="mt-4 rounded-xl border border-ink-700/60 bg-ink-800/40 p-4">
          {experience.serviceName ? (
            <p className="font-mono text-xs text-accent">
              {experience.serviceName}
            </p>
          ) : null}
          {experience.serviceDescription ? (
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              {experience.serviceDescription}
            </p>
          ) : null}
          {experience.team ? (
            <p className="mt-2 font-mono text-[11px] text-zinc-500">
              Team · {experience.team}
            </p>
          ) : null}
        </div>
      ) : null}

      <ul className="mt-6 space-y-4">
        {experience.highlights.map((highlight) => (
          <li
            key={highlight.title}
            className="rounded-xl border border-ink-700/60 bg-ink-800/50 p-4 sm:p-5"
          >
            <h4 className="text-sm font-medium text-zinc-100 sm:text-base">
              {highlight.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {highlight.description}
            </p>
            {highlight.metrics && highlight.metrics.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {highlight.metrics.map((metric) => (
                  <li
                    key={metric}
                    className="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[11px] text-accent"
                  >
                    {metric}
                  </li>
                ))}
              </ul>
            ) : null}
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
