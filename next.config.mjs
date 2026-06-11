/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    // Windows + Turbopack에서 유니코드 라우트 폴더가 404를 반환해
    // 실제 페이지는 /sales에 두고 /영업관리 URL을 여기로 연결한다.
    return [
      // "/영업관리" — Next 라우터는 비ASCII 소스를 퍼센트 인코딩 형태로 매칭한다.
      { source: "/%EC%98%81%EC%97%85%EA%B4%80%EB%A6%AC", destination: "/sales" },
      { source: "/영업관리", destination: "/sales" },
    ];
  },
};

export default nextConfig;
