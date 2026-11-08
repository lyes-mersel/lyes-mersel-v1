import { Project } from '@/app/(root)/projects/_data/types';

export const edutainment: Project = {
  id: 'edutainment',
  title: 'Edutainment',
  category: 'Mobile',
  kind: 'Academic project',
  year: '2021',
  role: 'Mobile Developer · Team of 5',
  description:
    'An educational mobile application that makes learning engaging for children through interactive quizzes, adaptive questions, and gamified learning experiences.',

  overview: [
    'Edutainment is a Flutter-based mobile application developed as a team project by five second-year students at the Higher National School of Computer Science (ESI), Algiers.',
    'The application provides children with an interactive learning environment covering mathematics, geometry, and animal facts through quizzes and educational games.',
    'It incorporates adaptive learning mechanisms that tailor questions to the child’s performance, while tracking progress and providing personalized feedback.',
    'Gamification, offline functionality, and parental controls complement the learning experience, making the application suitable for both children and parents.',
  ],

  features: [
    {
      title: 'Interactive quizzes',
      description: 'Educational quizzes covering mathematics, geometry, and animal knowledge.',
    },
    {
      title: 'Adaptive learning',
      description:
        'Questions tailored to the child’s performance to provide a more personalized learning experience.',
    },
    {
      title: 'Progress tracking',
      description: 'Monitor learning progress and provide feedback based on quiz performance.',
    },
    {
      title: 'Gamification & rankings',
      description:
        'Game-like elements, scoring, and player rankings to encourage participation and motivation.',
    },
    {
      title: 'Offline learning',
      description: 'Play educational quizzes without requiring an internet connection.',
    },
    {
      title: 'Parental controls',
      description:
        'Tools for parents to monitor their child’s progress and customize the learning experience.',
    },
  ],

  highlights: [
    'Developed a cross-platform mobile application using Flutter and Dart.',
    'Integrated Firebase services for backend functionality, including authentication and data management.',
    'Implemented interactive educational quizzes across multiple learning categories.',
    'Designed a gamified learning experience with scoring, rankings, and progress statistics.',
    'Collaborated with a five-member development team at ESI Algiers.',
  ],

  stack: ['Dart', 'Flutter', 'Firebase'],

  screenshots: [
    {
      src: '/images/projects/edutainment/0-cover.png',
      alt: 'Edutainment application cover',
      caption: 'Application introduction',
    },
    {
      src: '/images/projects/edutainment/1-register.png',
      alt: 'Registration screen',
      caption: 'User registration',
    },
    {
      src: '/images/projects/edutainment/2-login.png',
      alt: 'Login screen',
      caption: 'User authentication',
    },
    {
      src: '/images/projects/edutainment/3-home.png',
      alt: 'Application home screen',
      caption: 'Main learning dashboard',
    },
    {
      src: '/images/projects/edutainment/4-quiz de calculs.png',
      alt: 'Mathematics quiz',
      caption: 'Interactive calculation quiz',
    },
    {
      src: "/images/projects/edutainment/5-quiz d'animaux.png",
      alt: 'Animal knowledge quiz',
      caption: 'Animal facts quiz',
    },
    {
      src: '/images/projects/edutainment/6-quiz de géométrie.png',
      alt: 'Geometry quiz',
      caption: 'Geometry learning quiz',
    },
    {
      src: '/images/projects/edutainment/7-classement des users par score.png',
      alt: 'Player rankings',
      caption: 'Leaderboard based on player scores',
    },
    {
      src: '/images/projects/edutainment/8-statistiques du joueur.png',
      alt: 'Player statistics',
      caption: 'Individual learning statistics',
    },
  ],

  links: {
    github: 'https://github.com/lyes-mersel/edutainment',
  },
};
