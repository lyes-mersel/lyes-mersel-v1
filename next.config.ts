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

const nextConfig: NextConfig = {
  // Enable React Strict Mode for development
  reactStrictMode: true,
};

export default nextConfig;
