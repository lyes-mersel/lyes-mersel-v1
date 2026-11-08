import { Project } from '@/app/(root)/projects/_data/types';

export const polynomialMaster: Project = {
  id: 'polynomial-master',
  title: 'Polynomial Master',
  category: 'Desktop',
  kind: 'Academic project',
  year: '2020',
  role: 'First-year university project · Team of 1',
  description:
    'A C-based desktop application for polynomial manipulation, combining linked-list data structures, mathematical operations, and graphical visualization with SDL2.',

  overview: [
    'Polynomial Master is a desktop application initially developed as a university assignment to explore linked lists and their use in representing and manipulating mathematical polynomials.',
    'The application supports a range of polynomial operations, including arithmetic, evaluation, differentiation, and integration, with polynomial terms managed through linked-list data structures.',
    'It also provides graphical visualization using SDL2, allowing users to plot polynomial functions and better understand their behavior.',
    'Beyond the original assignment, the project was extended with a modular code structure, CMake-based build configuration, and Docker support to simplify development and deployment across different environments.',
  ],

  features: [
    {
      title: 'Polynomial arithmetic',
      description:
        'Perform addition, subtraction, multiplication, and division between polynomials.',
    },
    {
      title: 'Polynomial evaluation',
      description: 'Calculate the value of a polynomial for a given input.',
    },
    {
      title: 'Differentiation & integration',
      description: 'Compute polynomial derivatives and integrals.',
    },
    {
      title: 'Graphical visualization',
      description: 'Plot polynomial functions using SDL2 to visualize their behavior.',
    },
    {
      title: 'Linked-list representation',
      description:
        'Represent polynomial terms using linked lists for dynamic memory allocation and management.',
    },
    {
      title: 'CRC calculation',
      description:
        'Optional implementation of Cyclic Redundancy Check (CRC) for data transmission error detection.',
    },
  ],

  highlights: [
    'Implemented polynomial representation and manipulation using linked lists in C.',
    'Developed mathematical operations covering arithmetic, evaluation, differentiation, and integration.',
    'Integrated SDL2, SDL2_image, and SDL2_ttf for graphical rendering.',
    'Structured the project into modular components to improve readability and maintainability.',
    'Configured CMake to streamline the build process across different platforms.',
    'Added Docker support to simplify environment setup and application execution.',
  ],

  stack: ['C', 'SDL2', 'SDL2_image', 'SDL2_ttf', 'CMake', 'Docker'],

  screenshots: [
    {
      src: '/images/projects/polynomial-master/1-acceuil.png',
      alt: 'Polynomial Master home screen',
      caption: 'Application home screen',
    },
    {
      src: '/images/projects/polynomial-master/2-menu1.png',
      alt: 'Polynomial Master main menu',
      caption: 'Available polynomial operations',
    },
    {
      src: '/images/projects/polynomial-master/3-menu2.png',
      alt: 'Polynomial Master secondary menu',
      caption: 'Additional application operations',
    },
    {
      src: '/images/projects/polynomial-master/4-choisir un polynome à supprimer.png',
      alt: 'Polynomial deletion selection',
      caption: 'Select a polynomial to delete',
    },
    {
      src: '/images/projects/polynomial-master/5-choisir 2 polynomes à mutiplier.png',
      alt: 'Polynomial multiplication selection',
      caption: 'Select two polynomials for multiplication',
    },
    {
      src: '/images/projects/polynomial-master/6-evaluer un polynome.png',
      alt: 'Polynomial evaluation interface',
      caption: 'Evaluate a polynomial',
    },
    {
      src: '/images/projects/polynomial-master/7-résultat de la division de 2 polynomes.png',
      alt: 'Polynomial division result',
      caption: 'Result of polynomial division',
    },
    {
      src: '/images/projects/polynomial-master/8-dessiner le graphe du polynome.png',
      alt: 'Polynomial graph visualization',
      caption: 'Plot a polynomial function',
    },
    {
      src: '/images/projects/polynomial-master/9-calcul du code CRC.png',
      alt: 'CRC calculation result',
      caption: 'Result of CRC calculation',
    },
  ],

  links: {
    github: 'https://github.com/lyes-mersel/polynomial-master',
  },
};
