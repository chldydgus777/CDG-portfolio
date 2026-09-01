import type {
  Certification,
  Education,
  HeroStat,
  Profile,
} from "@/data/resumeData";
import type { ResumeTheme } from "./theme";

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const isCurrent = (period: string) => /present|현재/i.test(period);

export function ResumeNav({
  theme,
  profile,
}: {
  theme: ResumeTheme;
  profile: Profile;
}) {
  return (
    <nav
      aria-label="페이지 내 이동"
      className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur"
    >
      <div
        aria-hidden
        className={`h-0.5 w-full bg-gradient-to-r ${theme.navGradient}`}
      />
      <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between px-6">
        <a href="#" className="text-sm font-semibold text-zinc-50">
          {profile.name}
          <span
            className={`ml-1.5 font-mono text-xs font-normal ${theme.accentText}`}
          >
            {theme.slug}
          </span>
        </a>
        <div className="hidden items-center gap-6 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative font-mono text-xs text-zinc-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 ${theme.navUnderline} after:transition-[width] after:duration-300 ${theme.accentHover} hover:after:w-full`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className={`font-mono text-xs ${theme.accentText} sm:hidden`}
        >
          Email
        </a>
      </div>
    </nav>
  );
}

export function ResumeHero({
  theme,
  profile,
  stats,
}: {
  theme: ResumeTheme;
  profile: Profile;
  stats: HeroStat[];
}) {
  const { currentRole } = profile;
  return (
    <header className="pb-16 pt-16 sm:pb-24 sm:pt-24">
      <p
        className={`enter flex flex-wrap items-center gap-2 break-keep font-mono text-[11px] ${theme.accentText} sm:text-xs`}
      >
        <span
          aria-hidden
          className={`h-1.5 w-1.5 animate-pulse rounded-full ${theme.accentDot}`}
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

      <div className={theme.statsGrid} style={{ animationDelay: "320ms" }}>
        {stats.map((stat) => (
          <div key={stat.label} className={theme.statsItem}>
            <p
              className={`font-mono text-xl font-medium tabular-nums ${theme.accentText} sm:text-2xl`}
            >
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

export function Section({
  theme,
  id,
  index,
  title,
  children,
}: {
  theme: ResumeTheme;
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-14 sm:py-20">
      <div className="reveal mb-8 flex items-baseline gap-4 sm:mb-12">
        <span className={`font-mono text-xs tabular-nums ${theme.accentText}`}>
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

export function EducationSection({
  education,
  certifications,
}: {
  education: Education[];
  certifications: Certification[];
}) {
  return (
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
  );
}

export function ContactSection({
  theme,
  profile,
}: {
  theme: ResumeTheme;
  profile: Profile;
}) {
  return (
    <div className="reveal">
      <p className="max-w-xl break-keep text-base leading-relaxed text-zinc-400 sm:text-lg">
        새로운 협업, 채용 제안, 자유로운 대화 모두 환영합니다.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className={`mt-6 inline-block break-all font-mono text-2xl text-zinc-50 underline decoration-zinc-700 decoration-1 underline-offset-8 transition-colors ${theme.accentHover} ${theme.accentDecorationHover} sm:text-4xl`}
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
                className={`font-mono text-sm text-zinc-400 transition-colors ${theme.accentHover}`}
              >
                {social.label} ↗
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export function ResumeFooter({ profile }: { profile: Profile }) {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800/80 py-10 font-mono text-xs text-zinc-600">
      <span>
        © {new Date().getFullYear()} {profile.name} ({profile.nameEn})
      </span>
      <span>Next.js · Tailwind CSS · Vercel</span>
    </footer>
  );
}
