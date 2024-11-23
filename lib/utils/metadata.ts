import { Metadata } from "next";

/** create Metadata for pages */
export const createMetadata = (
  title: string = "Lyes Mersel - Software Developer Portfolio",
  path: string = "/",
  description: string = "Welcome to my portfolio! I'm a software developer specializing in web development, software engineering, and tech innovations. Explore my projects and achievements."
): Metadata => ({
  title,
  description,
  openGraph: {
    title,
    description,
    url: `https://lyes-mersel.vercel.app${path}`,
    images: [
      {
        url: `/images/socials/-og-image.jpg`, // todo: replace
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      `/images/socials/-twitter-image.jpg`, // todo: replace
    ],
  },
});
