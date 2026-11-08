import { Project } from '@/app/(root)/projects/_data/types';

export const futurelecERP: Project = {
  id: 'futurelec-erp',
  title: 'Futurelec ERP',
  category: 'Web',
  kind: "Master's final-year project (Internship)",
  featured: true,
  year: '2026',
  role: 'Software Engineer Intern',
  description:
    'A modular business management platform for inventory, purchasing, sales, and commercial operations, with an integrated demand forecasting component.',

  overview: [
    'Developed as my final-year project during a Software Engineering internship at SARL Futurelec, this platform aims to modernize the company’s existing ERP system through a modular web-based solution for managing its commercial operations and inventory. It was designed to address limitations in the previous system, particularly in usability, responsiveness, maintainability, and the organization of business functionalities.',
    'The application centralizes key business processes, covering product and brand management, customers and suppliers, purchasing and sales operations, commercial documents, and stock tracking. Its main objective is to connect these operations within a consistent workflow, ensuring that commercial transactions and inventory movements remain synchronized.',
    'The platform follows a modular monolithic architecture, with a React and TypeScript frontend, a NestJS REST API, and a PostgreSQL database managed through Prisma. It also includes a separate Python service using Prophet to generate demand forecasts from historical sales data, introducing a predictive component to support inventory planning.',
    'Beyond the functional modules, the project involved database design, implementation of complex business rules, automated backend testing, and Docker-based deployment. The architecture was designed to remain extensible, providing a foundation for future reporting, analytics, and more advanced inventory management capabilities.',
  ],

  features: [
    {
      title: 'Product & Inventory Management',
      description: 'Manage products, brands, taxes, stock quantities, and inventory movements.',
    },
    {
      title: 'Commercial Documents',
      description:
        'Handle quotations, orders, delivery notes, and invoices for purchasing and sales workflows.',
    },
    {
      title: 'Customers & Suppliers',
      description: 'Centralized management of business partners and their associated operations.',
    },
    {
      title: 'Stock Tracking',
      description:
        'Track stock entries, exits, movement history, and updates triggered by commercial operations.',
    },
    {
      title: 'User & Access Management',
      description:
        'Authentication and role-based access control for operators, managers, and administrators.',
    },
    {
      title: 'Demand Forecasting',
      description: 'Generate and consult product demand forecasts using Python and Prophet.',
    },
    {
      title: 'English & French Support',
      description: 'The platform supports both English and French languages.',
    },
    {
      title: 'Light & Dark Themes',
      description: 'The platform supports both light and dark themes.',
    },
  ],

  highlights: [
    'Modular monolithic backend architecture using NestJS and TypeScript.',
    'Complex commercial document processing, including differential updates of document lines.',
    'Relational database design with consistency between commercial operations and stock movements.',
    'Separate Python forecasting service integrated with the main application.',
    'Backend unit and end-to-end testing, with 120 tests across 15 test suites.',
    'Docker Compose deployment with PostgreSQL and Nginx.',
  ],

  stack: [
    'React',
    'TypeScript',
    'Vite',
    'Refine',
    'Ant Design',
    'NestJS',
    'Prisma',
    'PostgreSQL',
    'Python',
    'Prophet',
    'Jest',
    'Docker',
    'Nginx',
  ],

  screenshots: [
    {
      src: '/images/projects/futurelec-erp/2.1-dashboard.png',
      alt: 'Dashboard',
      caption: 'Dashboard',
    },
    {
      src: '/images/projects/futurelec-erp/2-dashboard.png',
      alt: 'Dashboard',
      caption: 'Dashboard',
    },
    {
      src: '/images/projects/futurelec-erp/3-brands-list.png',
      alt: 'Brands List',
      caption: 'Brands List',
    },
    {
      src: '/images/projects/futurelec-erp/4-items-list.png',
      alt: 'Items List',
      caption: 'Items List',
    },
    {
      src: '/images/projects/futurelec-erp/5-items-update-page.png',
      alt: 'Items Update Page',
      caption: 'Items Update Page',
    },
    {
      src: '/images/projects/futurelec-erp/6-suppliers-list.png',
      alt: 'Suppliers List',
      caption: 'Suppliers List',
    },
    {
      src: '/images/projects/futurelec-erp/7-customers-show-details-page.png',
      alt: 'Customers Show Details Page',
      caption: 'Customers Show Details Page',
    },
    {
      src: '/images/projects/futurelec-erp/8-taxes-list.png',
      alt: 'Taxes List',
      caption: 'Taxes List',
    },
    {
      src: '/images/projects/futurelec-erp/9-taxes-create-page.png',
      alt: 'Taxes Create Page',
      caption: 'Taxes Create Page',
    },
    {
      src: '/images/projects/futurelec-erp/10-users-list.png',
      alt: 'Users List',
      caption: 'Users List',
    },
    {
      src: '/images/projects/futurelec-erp/11-documents-sale-orders-list.png',
      alt: 'Documents Sale Orders List',
      caption: 'Documents Sale Orders List',
    },
    {
      src: '/images/projects/futurelec-erp/12-documents-purchase-delivery-note-show-page.png',
      alt: 'Documents Purchase Delivery Note Show Page',
      caption: 'Documents Purchase Delivery Note Show Page',
    },
    {
      src: '/images/projects/futurelec-erp/13-documents-sales-quote-edit-page.png',
      alt: 'Documents Sales Quote Edit Page',
      caption: 'Documents Sales Quote Edit Page',
    },
    {
      src: '/images/projects/futurelec-erp/1-login.png',
      alt: 'Login Page',
      caption: 'Login page',
    },
  ],

  links: {},
};
