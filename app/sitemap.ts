import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://lyes-mersel.vercel.app/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://lyes-mersel.vercel.app/work",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://lyes-mersel.vercel.app/services",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://lyes-mersel.vercel.app/resume",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://lyes-mersel.vercel.app/contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
