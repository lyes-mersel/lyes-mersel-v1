import type { NextConfig } from "next";
import { validateEnvVar } from "@/lib/utils";

// Validate environment variables
validateEnvVar("GITHUB_USERNAME");
validateEnvVar("GITHUB_TOKEN");

validateEnvVar("REDIS_URL");
validateEnvVar("REDIS_TOKEN");

validateEnvVar("EMAIL_USER");
validateEnvVar("EMAIL_PASSWORD");
validateEnvVar("MY_EMAIL_ADDRESS");

validateEnvVar("CRON_SECRET");

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
