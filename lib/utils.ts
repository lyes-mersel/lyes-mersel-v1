import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateEnvVar = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable "${name}" is not defined.`);
  }
  return value;
};

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
