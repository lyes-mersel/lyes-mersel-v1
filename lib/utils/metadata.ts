import { Metadata } from "next";

/** create Metadata for pages */
export const createMetadata = (
  title: string = "Lyes Mersel - Software Developer Portfolio",
  path: string = "/",
  description: string = "Welcome to my portfolio! I'm a software developer specializing in web development, software engineering, and tech innovations. Explore my projects and achievements.",
  keywords: string[] = [
    "Lyes Mersel",
    "Software Developer",
    "Web Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Frontend",
    "Backend",
    "Fullstack",
    "Projects",
    "Tech",
    "Engineering",
    "Open Source",
    "Resume",
    "Contact",
    "Services",
    "Work",
    "Blog",
    "JavaScript",
    "Node.js",
    "NestJs",
    "SQL",
  ]
): Metadata => ({
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://lyes-mersel.vercel.app"
  ),
  title,
  description,
  keywords,
  authors: [
    {
      name: "Lyes Mersel",
      url: process.env.NEXT_PUBLIC_BASE_URL || "https://lyes-mersel.vercel.app",
    },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical:
      (process.env.NEXT_PUBLIC_BASE_URL || "https://lyes-mersel.vercel.app") +
      path,
    languages: {
      "en-US": "/en-US", // Add more languages if available
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title,
    description,
    url: `${
      process.env.NEXT_PUBLIC_BASE_URL || "https://lyes-mersel.vercel.app"
    }${path}`,
    siteName: "Lyes Mersel Portfolio",
    images: [
      {
        // This image is generated dynamically by the /api/og endpoint
        url:
          (process.env.NEXT_PUBLIC_BASE_URL ||
            "https://lyes-mersel.vercel.app") + "/api/og",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
});
