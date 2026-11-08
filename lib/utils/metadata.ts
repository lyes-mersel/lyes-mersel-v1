import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://lyes-mersel.vercel.app';

const DEFAULT_TITLE = 'Lyes Mersel | Software Engineer Portfolio';

const DEFAULT_DESCRIPTION =
  'Software Engineer and Full-Stack Developer building modern web applications for businesses and individuals. Explore my projects, technical skills, and experience.';

const DEFAULT_KEYWORDS = [
  'Lyes Mersel',
  'Software Engineer',
  'Full-Stack Developer',
  'Full-Stack Web Developer',
  'Web Developer',
  'Frontend Developer',
  'Backend Developer',
  'Freelance Developer',
  'Web Application Development',
  'Custom Software Development',
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'Software Projects',
  'Developer Portfolio',
];

/** Create metadata for a page. */
export const createMetadata = (
  title: string = DEFAULT_TITLE,
  path: string = '/',
  description: string = DEFAULT_DESCRIPTION,
  keywords: string[] = DEFAULT_KEYWORDS,
): Metadata => ({
  metadataBase: new URL(SITE_URL),

  title,
  description,
  keywords,

  authors: [
    {
      name: 'Lyes Mersel',
      url: SITE_URL,
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: path,
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },

  openGraph: {
    title,
    description,
    url: path,
    siteName: 'Lyes Mersel Portfolio',
    images: [
      {
        // Generated dynamically by the /api/og endpoint.
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
});
