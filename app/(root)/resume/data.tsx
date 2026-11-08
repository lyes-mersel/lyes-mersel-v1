import {
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaJava,
  FaPython,
  FaServer,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiOracle,
  SiPostgresql,
  SiMongodb,
  SiC,
  SiMui,
  SiUml,
  SiPostman,
  SiJsonwebtokens,
  SiNestjs,
  SiRedux,
  SiRefine,
  SiAntdesign,
  SiGraphql,
  SiPrisma,
  SiLinux,
  SiGithubactions,
} from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { calculateYearDifference } from '@/lib/utils';
import { ZustandIcon } from '@/components/icons/devicon-zustand';
import { WebsocketIcon } from '@/components/icons/logos-websocket';

export const experience: {
  icon: string;
  title: string;
  description: string;
  items: {
    company: string;
    position: string;
    duration: string;
    employmentType?: string;
    workArrangement?: string;
  }[];
} = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: "Here's a quick overview of my professional journey:",
  items: [
    {
      company: 'Freelance',
      position: 'Independent Software Engineer',
      duration: '09/2026 - Current',
      employmentType: 'Self-employed',
      // workArrangement: 'Self-employed',
    },
    {
      company: 'Futurelec - Bejaia',
      position: 'Software Engineer Intern',
      duration: '02/2026 - 05/2026',
      employmentType: 'Full-time',
      workArrangement: 'Hybrid',
    },
    {
      company: 'Futurelec - Bejaia',
      position: 'Frontend Developer',
      duration: '08/2025 - 11/2025',
      employmentType: 'Part-time',
      workArrangement: 'Remote',
    },
    {
      company: 'Eastern Al-Maha - Kuwait',
      position: ' Software Engineer Intern – Backend',
      duration: '06/2025 - 08/2025',
      employmentType: 'Full-time',
      workArrangement: 'Remote',
    },
    {
      company: 'Cevital - Bejaia',
      position: 'Information System Intern',
      duration: '07/2024 - 08/2024',
      employmentType: 'Full-time',
      workArrangement: 'On-site',
    },
  ],
};

// education data
export const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: "I'm driven by a passion for learning. Here's a snapshot of my education:",
  items: [
    {
      institution: 'University of Bejaia',
      degree: "Master's Degreee in Software Engineering",
      duration: '2024 - 2026',
    },
    {
      institution: 'University of Bejaia',
      degree: "Bachelor's Degreee in Computer Science",
      duration: '2021 - 2024',
    },
    {
      institution: 'ESI Algiers',
      degree: 'Preparatory Classes',
      duration: '2019 - 2021',
    },
    {
      institution: 'High School',
      degree: 'Mathematics track Baccalaureate',
      duration: '2019',
    },
  ],
};

// skills data
export const skills = {
  title: 'My Skills',
  description: 'Here are the main technologies I’ve worked with on my journey.',
  languages: [
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <SiC />, name: 'C' },
  ],
  front: [
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiRefine />, name: 'Refine' },
    { icon: <SiRedux />, name: 'Redux' },
    { icon: <ZustandIcon />, name: 'Zustand' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <SiAntdesign />, name: 'Ant Design' },
    { icon: <TbBrandFramerMotion />, name: 'Framer Motion' },
  ],
  back: [
    { icon: <FaNode />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express.js' },
    { icon: <SiNestjs />, name: 'NestJS' },
    { icon: <FaServer />, name: 'REST API' },
    { icon: <SiGraphql />, name: 'GraphQL' },
    { icon: <WebsocketIcon />, name: 'Web Sockets' },
  ],
  databases: [
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <DiRedis />, name: 'Redis' },
    { icon: <SiOracle />, name: 'Oracle' },
    { icon: <SiPrisma />, name: 'Prisma ORM' },
  ],
  tools: [
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <SiLinux />, name: 'Linux' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <SiGithubactions />, name: 'GitHub Actions' },
    { icon: <SiPostman />, name: 'Postman' },
  ],
};

// about data
export const about = {
  title: 'About me',
  description:
    "I’m a Software Engineer and Full-Stack Developer with a Master's degree in Software Engineering and hands-on experience building web applications. Experienced with modern frontend and backend technologies, REST APIs, and database management, with a focus on developing reliable, maintainable software solutions.",
  info: [
    {
      filedName: 'Name',
      fieldValue: 'Lyes Mersel',
    },
    {
      filedName: 'Experience',
      fieldValue: (() => {
        const value = Math.max(1, calculateYearDifference('2026-09-01'));
        return value > 1 ? `+${value} Years` : `+${value} Year`;
      })(),
    },
    {
      filedName: 'Email',
      fieldValue: 'dev.mersel@gmail.com',
    },
    {
      filedName: 'Nationality',
      fieldValue: 'Algerian',
    },
    {
      filedName: 'Phone',
      fieldValue: '(+213) 783 31 05 46',
    },
    {
      filedName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      filedName: 'Languages',
      fieldValue: 'English, French, Arabic, Kabylian',
    },
  ],
};
