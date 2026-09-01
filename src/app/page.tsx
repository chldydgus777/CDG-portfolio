import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/resumeData";

export const metadata: Metadata = {
  title: `${profile.name} (${profile.nameEn}) — Portfolio`,
  description:
    "프론트엔드 개발자 · Product Owner — 직무별 이력서를 선택해 보세요.",
};

const VERSIONS = [
  {
    href: "/dev",
    title: "Front-end Developer",
    description: "성능을 수치로 증명하는 프론트엔드 개발자",
    path: "text-sky-400",
    dot: "bg-sky-400",
    card: "hover:border-sky-500/40 hover:bg-sky-500/5",
    titleHover: "group-hover:text-sky-400",
  },
  {
    href: "/po",
    title: "Product Owner",
    description: "스펙 정의부터 출시까지, 개발을 아는 PO",
    path: "text-violet-400",
    dot: "bg-violet-400",
    card: "hover:border-violet-500/40 hover:bg-violet-500/5",
    titleHover: "group-hover:text-violet-400",
  },
];

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[36rem] max-w-full -translate-x-1/2 bg-sky-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 bg-violet-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-sky-500 to-violet-500"
      />

      <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center px-6 py-24">
        <p className="enter flex items-center gap-2 font-mono text-xs text-zinc-500">
          <span
            aria-hidden
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-500"
          />
          PORTFOLIO · {year}
        </p>
        <h1
          className="enter mt-6 bg-gradient-to-br from-zinc-50 via-zinc-200 to-zinc-500 bg-clip-text text-6xl font-semibold tracking-tight text-transparent sm:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          {profile.name}
        </h1>
        <p
          className="enter mt-3 font-mono text-sm text-zinc-500"
          style={{ animationDelay: "160ms" }}
        >
          {profile.nameEn}
        </p>
        <p
          className="enter mt-8 break-keep text-lg leading-relaxed text-zinc-300 sm:text-xl"
          style={{ animationDelay: "240ms" }}
        >
          <span className="font-semibold text-zinc-100">
            같은 경력, 두 가지 시선.
          </span>{" "}
          보고 싶은 버전을 선택하세요.
        </p>

        <nav aria-label="이력서 버전 선택" className="mt-12">
          <ul className="space-y-3.5">
            {VERSIONS.map((version, i) => (
              <li key={version.href}>
                <Link
                  href={version.href}
                  className={`enter group flex items-baseline gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-5 transition-colors duration-300 sm:gap-6 sm:p-6 ${version.card}`}
                  style={{ animationDelay: `${320 + i * 90}ms` }}
                >
                  <span
                    className={`flex w-16 shrink-0 items-baseline gap-2 font-mono text-xs sm:w-20 sm:text-sm ${version.path}`}
                  >
                    <span
                      aria-hidden
                      className={`h-1.5 w-1.5 self-center rounded-full ${version.dot}`}
                    />
                    {version.href}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block break-keep text-lg font-semibold text-zinc-50 transition-colors sm:text-xl ${version.titleHover}`}
                    >
                      {version.title}
                    </span>
                    <span className="mt-1 block break-keep text-sm leading-relaxed text-zinc-500">
                      {version.description}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="ml-auto self-center text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-zinc-200"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <footer
          className="enter mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800/60 pt-8 font-mono text-xs text-zinc-600"
          style={{ animationDelay: "620ms" }}
        >
          <span>
            © {year} {profile.name} ({profile.nameEn})
          </span>
          <a
            href="https://github.com/chldydgus777"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-300"
          >
            GitHub ↗
          </a>
        </footer>
      </main>
    </div>
  );
}
