import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: process.cwd(),
  trailingSlash: true,
  basePath: isGithubPages ? "/github-pages" : undefined,
  assetPrefix: isGithubPages ? "/github-pages/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
