export type ProjectCategory = 'Web' | 'Mobile' | 'Desktop';

export interface Screenshot {
  src: string;
  /** Defaults to "<title> screenshot" when omitted. */
  alt?: string;
  caption?: string;
}

export interface Feature {
  title: string;
  description?: string;
}

/** Only `id`, `title`, `category` and `description` are required. */
export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  /** Small label shown as a badge, e.g. "Final-year project (PFE)". */
  kind?: string;
  featured?: boolean;
  year?: string;
  role?: string;
  /** Longer write-up, one string per paragraph. */
  overview?: string[];
  features?: Feature[];
  /** Technical highlights: architecture choices, challenges solved, etc. */
  highlights?: string[];
  stack?: string[];
  screenshots?: Screenshot[];
  links?: { live?: string; github?: string };
}
