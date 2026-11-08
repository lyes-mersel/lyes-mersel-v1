import { Project } from '@/app/(root)/projects/_data/types';

export const inTechBlogs: Project = {
  id: '03',
  title: 'inTech Blogs',
  category: 'Web',
  kind: 'Personal project',
  year: '2024',
  role: 'Full-Stack Developer · Team of 1',
  description:
    'A modern blogging platform where tech enthusiasts can publish and explore articles about software development, AI, cybersecurity, and other technology topics.',

  overview: [
    'inTech Blogs is a content platform built for the tech community, providing a space to share knowledge, discover articles, and engage with topics across the technology field.',
    'Users can authenticate through their GitHub accounts and publish articles using Sanity CMS, which handles content management and storage.',
    'The application leverages Next.js 15 and React 19, combining server and client components with different data-fetching strategies to deliver an optimized browsing experience.',
    'SEO features, responsive styling, and Sentry error tracking are integrated to improve discoverability, usability, and application monitoring.',
  ],

  features: [
    {
      title: 'Content discovery',
      description:
        'Browse technology articles covering AI, cybersecurity, software engineering, and other technical topics.',
    },
    {
      title: 'GitHub authentication',
      description: 'Sign in securely using GitHub authentication powered by NextAuth.',
    },
    {
      title: 'Article publishing',
      description:
        'Create and publish blog posts through an integrated Sanity CMS content management system.',
    },
    {
      title: 'Personal blog management',
      description: 'Access and manage articles associated with your account.',
    },
    {
      title: 'SEO optimization',
      description:
        'Leverage Next.js metadata and SEO capabilities to improve search engine visibility.',
    },
    {
      title: 'Responsive interface',
      description:
        'A modern interface built with Tailwind CSS, designed to work across different screen sizes.',
    },
  ],

  highlights: [
    'Built with Next.js 15 App Router and React 19, using server and client components.',
    'Integrated Sanity CMS for structured content management.',
    'Implemented GitHub authentication using NextAuth.',
    'Used Next.js data-fetching strategies including SSR, SSG, and ISR, with PPR support.',
    'Integrated Sentry for application error tracking and monitoring.',
    'Implemented SEO metadata using Next.js capabilities.',
  ],

  stack: [
    'TypeScript',
    'Next.js 15',
    'React 19',
    'Tailwind CSS',
    'NextAuth',
    'Sanity CMS',
    'Sentry',
  ],

  screenshots: [
    {
      src: '/images/projects/intech-blogs/screenshot0.png',
      alt: 'inTech Blogs landing page',
      caption: 'Landing page and introduction to the platform',
    },
    {
      src: '/images/projects/intech-blogs/screenshot1.jpeg',
      alt: 'inTech Blogs homepage',
      caption: 'Main page displaying technology content',
    },
    {
      src: '/images/projects/intech-blogs/screenshot2.jpeg',
      alt: 'User blog list',
      caption: 'Articles published by the authenticated user',
    },
    {
      src: '/images/projects/intech-blogs/screenshot3.1.jpeg',
      alt: 'Blog post page',
      caption: 'Article reading interface',
    },
    {
      src: '/images/projects/intech-blogs/screenshot3.2.jpeg',
      alt: 'Blog post details',
      caption: 'Additional view of an individual article',
    },
    {
      src: '/images/projects/intech-blogs/screenshot4.jpeg',
      alt: 'Blog submission form',
      caption: 'Interface for publishing a new article',
    },
  ],

  links: {
    live: 'https://intech-blogs.vercel.app',
    github: 'https://github.com/lyes-mersel/intech-blogs',
  },
};
