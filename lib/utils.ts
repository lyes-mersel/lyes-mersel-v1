import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

/** cn function from Tailwind CSS */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* Validate an environment variable */
export const validateEnvVar = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable "${name}" is not defined.`);
  }
  return value;
};

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

/**
 * Calculate the difference in years between the current date and a given date.
 * @param {Date | string} givenDate - The date to compare with the current date.
 * @returns {number} - The difference in years.
 */
export const calculateYearDifference = (givenDate: Date | string): number => {
  const currentDate = new Date() as Date;
  const startDate = new Date(givenDate) as Date;

  let yearsDifference = currentDate.getFullYear() - startDate.getFullYear();

  const monthDifference = currentDate.getMonth() - startDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < startDate.getDate())
  ) {
    yearsDifference--;
  }

  return yearsDifference;
};
