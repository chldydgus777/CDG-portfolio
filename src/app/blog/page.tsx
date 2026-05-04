import Link from "next/link";
import type { Metadata } from "next";
import { blogConfig, profile } from "@/data/resumeData";

export const metadata: Metadata = {
  title: `Blog — ${profile.name}`,
  description: blogConfig.comingSoonMessage,
};

/**
 * 추후 MDX/CMS 기반 글 목록을 이 자리에 매핑한다.
 * 현재는 라우팅과 레이아웃 뼈대만 잡아둔 상태.
 *   - app/blog/page.tsx           → 목록 (이 파일)
 *   - app/blog/[slug]/page.tsx    → 개별 글 (추가 예정)
 */
export default function BlogIndexPage() {
  return (
    <main className="mx-auto w-full max-w-content px-6 py-20 sm:py-28">
      <header className="border-b border-ink-700/60 pb-10">
        <p className="font-mono text-xs text-accent">Notes</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Blog
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {blogConfig.comingSoonMessage}
        </p>
      </header>

      <section className="mt-12">
        {blogConfig.enabled ? (
          <PostList />
        ) : (
          <div className="rounded-2xl border border-dashed border-ink-700 bg-ink-900/40 p-10 text-center">
            <p className="font-mono text-xs text-zinc-500">COMING SOON</p>
            <p className="mt-3 text-sm text-zinc-400">
              아직 게시된 글이 없습니다.
            </p>
          </div>
        )}
      </section>

      <div className="mt-16">
        <Link
          href="/"
          className="font-mono text-xs text-zinc-500 transition-colors hover:text-accent"
        >
          ← back to home
        </Link>
      </div>
    </main>
  );
}

function PostList() {
  // 실제 글 목록 연결 지점. fs/MDX 또는 외부 CMS에서 fetch한 결과를 매핑할 자리.
  return (
    <ul className="space-y-6">
      <li className="text-sm text-zinc-500">no posts yet</li>
    </ul>
  );
}
