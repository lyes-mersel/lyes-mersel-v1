import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

/** cn function from Tailwind CSS */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
