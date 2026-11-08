import { Project } from '@/app/(root)/projects/_data/types';

export const countryNavigator: Project = {
  id: 'country-navigator',
  title: 'Country Navigator',
  category: 'Web',
  kind: 'Frontend Mentor challenge',
  year: '2024',
  role: 'Front-End Developer',
  description:
    'A responsive country exploration application that lets users discover countries worldwide, filter results, and access detailed information through the REST Countries API.',

  overview: [
    'Country Navigator is a React application developed as a solution to a Frontend Mentor challenge, focused on building a responsive interface for exploring countries around the world.',
    'The application retrieves country data from the REST Countries API and presents it through an interactive catalog. Users can search for countries by name, filter them by continent, and navigate to individual country pages for more detailed information.',
    'Each country details page provides information such as population, region, capital, languages, currencies, and neighboring countries, offering a convenient way to explore geographical and demographic data.',
    'The interface supports both light and dark themes and adapts to different screen sizes, providing a consistent browsing experience across desktop and mobile devices.',
  ],

  features: [
    {
      title: 'Country exploration',
      description:
        'Browse a catalog of countries with essential information, including flags, names, regions, and population.',
    },
    {
      title: 'Search functionality',
      description: 'Find countries quickly by searching their names.',
    },
    {
      title: 'Region filtering',
      description: 'Filter the country list by continent or geographical region.',
    },
    {
      title: 'Detailed country information',
      description:
        'Explore individual country profiles with population, capital, languages, currencies, and other details.',
    },
    {
      title: 'Neighboring countries',
      description: 'Navigate between countries through their geographical relationships.',
    },
    {
      title: 'Light & dark themes',
      description: 'Switch between light and dark modes according to user preference.',
    },
    {
      title: 'Responsive interface',
      description: 'Optimized layouts for desktop, tablet, and mobile screens.',
    },
  ],

  highlights: [
    'Integrated the REST Countries API to retrieve and display country information dynamically.',
    'Built reusable React components to organize country listings and detail views.',
    'Implemented search and region-based filtering for country discovery.',
    'Designed separate country detail views with dynamic data.',
    'Added light and dark theme support.',
    'Developed a responsive interface using Material UI (MUI).',
  ],

  stack: ['JavaScript', 'React', 'Material UI', 'REST Countries API'],

  screenshots: [
    {
      src: '/images/projects/country-navigator/0-cover.png',
      alt: 'Country Navigator cover image',
      caption: 'Application introduction',
    },
    {
      src: '/images/projects/country-navigator/1-countries-list-light-mode.png',
      alt: 'Country listing in light mode',
      caption: 'Explore countries in light mode',
    },
    {
      src: '/images/projects/country-navigator/2-countries-list-dark-mode.png',
      alt: 'Country listing in dark mode',
      caption: 'Explore countries in dark mode',
    },
    {
      src: '/images/projects/country-navigator/3-country-details-white-mode.png',
      alt: 'Country details in light mode',
      caption: 'Detailed country information',
    },
    {
      src: '/images/projects/country-navigator/4-country-details-dark-mode.png',
      alt: 'Country details in dark mode',
      caption: 'Country information in dark mode',
    },
    {
      src: '/images/projects/country-navigator/5-search-phone-screen-light-mode.png',
      alt: 'Mobile country search in light mode',
      caption: 'Mobile browsing and search in light mode',
    },
    {
      src: '/images/projects/country-navigator/6-search-phone-screen-dark-mode.png',
      alt: 'Mobile country search in dark mode',
      caption: 'Mobile browsing and search in dark mode',
    },
  ],

  links: {
    live: 'https://countrynavigator.vercel.app/',
    github: 'https://github.com/lyes-mersel/country-navigator',
  },
};
