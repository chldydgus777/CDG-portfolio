import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/resumeData";

export const metadata: Metadata = {
  title: `${profile.name} (${profile.nameEn}) — Portfolio`,
  description:
    "프론트엔드 개발자 · Product Owner — 최용현 포트폴리오",
  openGraph: {
    title: `${profile.name} (${profile.nameEn}) — Portfolio`,
    description:
      "프론트엔드 개발자 · Product Owner — 최용현 포트폴리오",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
