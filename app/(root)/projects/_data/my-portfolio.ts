import { Project } from '@/app/(root)/projects/_data/types';

export const myPortfolio: Project = {
  id: 'my-portfolio',
  title: 'My Portfolio',
  category: 'Web',
  kind: 'Personal project',
  featured: false,
  year: '2024',
  role: 'Full-Stack Developer',
  description:
    'A personal developer portfolio built with Next.js to showcase my background, skills, services, and projects, featuring GitHub-powered statistics, an interactive interface, and a functional contact system.',

  overview: [
    'A personal portfolio designed to present my professional profile, technical skills, experience, and selected projects in one place.',
    'The website includes dedicated sections for services, resume, and project showcases, with a responsive dark-themed interface and animated page transitions.',
    'It also integrates the GitHub REST API to retrieve development statistics, using Upstash Redis to cache results and scheduled refreshes to keep them updated.',
    'A contact form allows visitors to get in touch through email, supported by server-side API routes and Nodemailer.',
  ],

  features: [
    {
      title: 'Professional Profile',
      description:
        'Showcases personal information, services, experience, education, skills, and downloadable CV.',
    },
    {
      title: 'Project Showcase',
      description:
        'Presents selected projects with descriptions, technology stacks, screenshots, and external links.',
    },
    {
      title: 'GitHub Statistics',
      description:
        'Displays dynamic development statistics, including repositories, technologies, and commits.',
    },
    {
      title: 'Contact Form',
      description: 'Allows visitors to send messages through an integrated email delivery system.',
    },
    {
      title: 'Responsive Interface',
      description:
        'Adapts to desktop and mobile screens with dedicated navigation and interactive components.',
    },
    {
      title: 'SEO & Social Sharing',
      description:
        'Includes page metadata, sitemap, robots configuration, and dynamically generated Open Graph images.',
    },
  ],

  highlights: [
    'Next.js App Router with TypeScript and server-side API routes.',
    'GitHub REST API integration with Upstash Redis caching.',
    'Scheduled cache refresh through Vercel Cron Jobs.',
    'Email delivery using Nodemailer.',
    'Animated page transitions and interactive components using Framer Motion.',
    'Reusable UI components built with Tailwind CSS and Radix UI primitives.',
    'Vercel Analytics integration.',
  ],

  stack: [
    'TypeScript',
    'React 19',
    'Next.js 16',
    'Tailwind CSS',
    'Framer Motion',
    'Radix UI',
    'Nodemailer',
    'Upstash Redis',
    'GitHub REST API',
    'Vercel',
  ],

  screenshots: [
    {
      src: '/images/projects/my-porfolio/1-home-page.png',
      alt: 'Home page of the portfolio website',
      caption: 'The main page of the portfolio website.',
    },
    {
      src: '/images/projects/my-porfolio/2-work-project1.png',
      alt: 'Work project 1',
      caption: 'A showcase of the first work project.',
    },
    {
      src: '/images/projects/my-porfolio/3-work-project2.png',
      alt: 'Work project 2',
      caption: 'A showcase of the second work project.',
    },
    {
      src: '/images/projects/my-porfolio/4-resume-experience.png',
      alt: 'Resume experience',
      caption: 'A showcase of the resume experience.',
    },
    {
      src: '/images/projects/my-porfolio/5-resume-skills.png',
      alt: 'Resume skills',
      caption: 'A showcase of the resume skills.',
    },
    {
      src: '/images/projects/my-porfolio/6-contact.png',
      alt: 'Contact',
      caption: 'A showcase of the contact page.',
    },
  ],

  links: {
    live: '/',
    github: 'https://github.com/lyes-mersel/lyes-mersel-v1',
  },
};
