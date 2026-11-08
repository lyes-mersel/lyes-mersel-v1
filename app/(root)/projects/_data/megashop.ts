import { Project } from '@/app/(root)/projects/_data/types';

export const megashop: Project = {
  id: 'megashop',
  title: 'MEGA SHOP',
  category: 'Web',
  kind: 'Academic project',
  featured: true,
  year: '2025',
  role: 'Full-Stack Developer & Team Leader · Team of 4',
  description:
    'A full-stack multi-vendor e-commerce platform bringing together customers, independent vendors, and administrators through a centralized marketplace.',

  overview: [
    'MEGA SHOP is a comprehensive e-commerce platform developed as a team academic project during my Master 1 in Software Engineering at the University of Béjaïa. It provides a centralized marketplace where multiple vendors can manage their stores while customers browse products, place orders, and interact with sellers.',
    'The platform features dedicated portals for customers, vendors, and administrators, each providing tailored tools for managing products, orders, stores, users, and platform activities.',
    'Beyond core e-commerce functionalities, the application integrates real-time messaging, AI-powered chatbot support, email-based authentication workflows, and analytics dashboards to deliver a complete shopping and management experience.',
    'I contributed as Full-Stack Developer and Team Leader, participating in the development of both frontend and backend functionalities while coordinating a team of four students.',
  ],

  features: [
    {
      title: 'Multi-vendor marketplace',
      description:
        'A centralized marketplace where independent vendors can create and manage their own stores.',
    },
    {
      title: 'Product catalog & shopping',
      description:
        'Product discovery with filtering and search, persistent shopping cart, and wishlist management.',
    },
    {
      title: 'Order management & tracking',
      description:
        'Order processing and status tracking for customers, vendors, and administrators.',
    },
    {
      title: 'Real-time communication',
      description: 'Direct customer-vendor messaging and AI-powered chatbot support.',
    },
    {
      title: 'Reviews & ratings',
      description: 'Product reviews and ratings with photo uploads.',
    },
    {
      title: 'Vendor dashboard',
      description: 'Store, inventory, order, payment, and sales performance management.',
    },
    {
      title: 'Administration dashboard',
      description:
        'Centralized management of users, stores, orders, reports, disputes, and platform notifications.',
    },
    {
      title: 'Authentication & security',
      description:
        'Email verification, password recovery, and role-based access control for customers, vendors, and administrators.',
    },
  ],

  highlights: [
    'Developed a full-stack application using Next.js 15, combining frontend interfaces and server-side API routes.',
    'Designed a role-based architecture with dedicated customer, vendor, and administrator portals.',
    'Implemented database management and data modeling using Prisma ORM and PostgreSQL.',
    'Integrated real-time communication and AI-powered assistance into the shopping experience.',
    'Coordinated a four-member development team as Team Leader.',
  ],

  stack: [
    'TypeScript',
    'Next.js 15',
    'Tailwind CSS',
    'Redux Toolkit',
    'Prisma',
    'PostgreSQL',
    'NextAuth.js',
    'Cloudinary',
    'Supabase',
    'OpenRouter AI',
    'Framer Motion',
    'Zod',
    'Nodemailer',
  ],

  screenshots: [
    // Main store and marketplace
    {
      src: '/images/projects/megashop/main-store/0-hero-section.png',
      alt: 'MEGA SHOP homepage and marketplace interface',
      caption: 'Main marketplace interface',
    },
    {
      src: '/images/projects/megashop/main-store/1-main.png',
      alt: 'MEGA SHOP main interface',
      caption: 'Main view of the marketplace',
    },
    {
      src: '/images/projects/megashop/main-store/2-catalog.png',
      alt: 'MEGA SHOP catalog interface',
      caption: 'Product catalog in the marketplace',
    },
    {
      src: '/images/projects/megashop/main-store/3.1-product.png',
      alt: 'MEGA SHOP product view',
      caption: 'Detailed product information',
    },
    {
      src: '/images/projects/megashop/main-store/3.2-product.png',
      alt: 'MEGA SHOP product view',
      caption: 'Detailed product information with reviews and ratings',
    },
    {
      src: '/images/projects/megashop/main-store/4-cart.png',
      alt: 'MEGA SHOP cart view',
      caption: 'Shopping cart with selected items',
    },
    {
      src: '/images/projects/megashop/main-store/5-order.png',
      alt: 'MEGA SHOP order view',
      caption: 'Order details and status',
    },
    {
      src: '/images/projects/megashop/main-store/6-report.png',
      alt: 'MEGA SHOP report view',
      caption: 'Write a report about a product or vendor',
    },
    {
      src: '/images/projects/megashop/main-store/7-evaluation.png',
      alt: 'MEGA SHOP evaluation view',
      caption: 'Product or vendor evaluation with ratings and reviews',
    },
    {
      src: '/images/projects/megashop/main-store/8-chatbot.png',
      alt: 'MEGA SHOP chatbot view',
      caption: 'AI-powered customer support chatbot for assistance and inquiries',
    },
    // Vendor Portal
    {
      src: '/images/projects/megashop/vendor-portal/1-dashboard.png',
      alt: 'MEGA SHOP vendor portal dashboard',
      caption: 'Vendor dashboard with key metrics and insights',
    },
    {
      src: '/images/projects/megashop/vendor-portal/2.1-store.png',
      alt: 'MEGA SHOP vendor portal store',
      caption: 'Vendor store view with product listings and management options',
    },
    {
      src: '/images/projects/megashop/vendor-portal/2.3-store-update product.png',
      alt: 'MEGA SHOP vendor portal update product',
      caption: 'Add or update product information in the vendor portal',
    },
    {
      src: '/images/projects/megashop/vendor-portal/3.2-sell-details.png',
      alt: 'MEGA SHOP vendor portal sell details',
      caption: 'Detailed sales information and performance metrics',
    },
    {
      src: '/images/projects/megashop/vendor-portal/4.2-order-details.png',
      alt: 'MEGA SHOP vendor portal order details',
      caption: 'Detailed order information and status',
    },
    {
      src: '/images/projects/megashop/vendor-portal/5-notifications.png',
      alt: 'MEGA SHOP vendor portal notifications',
      caption: 'Notifications in the vendor portal',
    },
    {
      src: '/images/projects/megashop/vendor-portal/6.5-settings.png',
      alt: 'MEGA SHOP vendor portal settings',
      caption: 'Vendor portal settings for managing account and preferences',
    },
    {
      src: '/images/projects/megashop/vendor-portal/7-navbar.png',
      alt: 'MEGA SHOP vendor portal navbar',
      caption: 'Navigation bar for the vendor portal',
    },
    // Client Portal
    {
      src: '/images/projects/megashop/client-portal/2-notifications.png',
      alt: 'MEGA SHOP client portal notifications',
      caption: 'Notifications in the client portal',
    },
    {
      src: '/images/projects/megashop/client-portal/3.1-orders-history.png',
      alt: 'MEGA SHOP client portal orders',
      caption: 'Client order history and details',
    },
    // Admin Portal
    {
      src: '/images/projects/megashop/admin-portal/1.2-dashboard.png',
      alt: 'MEGA SHOP admin portal dashboard',
      caption: 'Admin dashboard with key metrics and insights',
    },
    {
      src: '/images/projects/megashop/admin-portal/2.1-management-clients.png',
      alt: 'MEGA SHOP admin portal management clients/vendors',
      caption: 'Client/Vendor management features in the admin portal',
    },
    {
      src: '/images/projects/megashop/admin-portal/2.4-vendor-details.png',
      alt: 'MEGA SHOP admin portal client/vendor details',
      caption: 'Detailed information about each client/vendor in the admin portal',
    },
    {
      src: '/images/projects/megashop/admin-portal/2.5-message-user.png',
      alt: 'MEGA SHOP admin portal message user',
      caption: 'Message user feature in the admin portal',
    },
    {
      src: '/images/projects/megashop/admin-portal/3.2-store.png',
      alt: 'MEGA SHOP admin portal store',
      caption: 'Store view in the admin portal',
    },
    {
      src: '/images/projects/megashop/admin-portal/4.1-sells.png',
      alt: 'MEGA SHOP admin portal sells',
      caption: 'Sells view in the admin portal',
    },
    {
      src: '/images/projects/megashop/admin-portal/5.1-orders.png',
      alt: 'MEGA SHOP admin portal orders',
      caption: 'Orders view in the admin portal',
    },
    {
      src: '/images/projects/megashop/admin-portal/6.2-reports-details.png',
      alt: 'MEGA SHOP admin portal reports details',
      caption: 'Detailed reports view in the admin portal',
    },
    {
      src: '/images/projects/megashop/admin-portal/8.1-settings.png',
      alt: 'MEGA SHOP admin portal settings',
      caption:
        'Settings view in the admin portal for managing platform configurations and preferences',
    },
    // Some Mobile View screenshots
    {
      src: '/images/projects/megashop/main-store/1-main-mobile.png',
      alt: 'MEGA SHOP mobile interface',
      caption: 'Mobile view of the marketplace',
    },
    {
      src: '/images/projects/megashop/main-store/2-catalog-mobile.png',
      alt: 'MEGA SHOP mobile catalog',
      caption: 'Mobile view of the product catalog',
    },
    {
      src: '/images/projects/megashop/main-store/3.1-product-mobile.png',
      alt: 'MEGA SHOP mobile product',
      caption: 'Mobile view of a product in the marketplace',
    },
    {
      src: '/images/projects/megashop/main-store/4-cart-mobile.png',
      alt: 'MEGA SHOP mobile cart',
      caption: 'Mobile view of the shopping cart',
    },
    {
      src: '/images/projects/megashop/vendor-portal/1-dashboard-mobile.png',
      alt: 'MEGA SHOP mobile dashboard',
      caption: 'Mobile view of the vendor dashboard',
    },
    {
      src: '/images/projects/megashop/vendor-portal/7-navbar-mobile.png',
      alt: 'MEGA SHOP mobile navbar',
      caption: 'Mobile view of the vendor portal navbar',
    },
    {
      src: '/images/projects/megashop/admin-portal/2.7-management-mobile.png',
      alt: 'MEGA SHOP mobile management',
      caption: 'Mobile view of the admin portal management',
    },
    {
      src: '/images/projects/megashop/admin-portal/3.6-store-mobile.png',
      alt: 'MEGA SHOP mobile store',
      caption: 'Mobile view of the admin portal store',
    },
    {
      src: '/images/projects/megashop/admin-portal/7.2-notifications-mobile.png',
      alt: 'MEGA SHOP mobile notifications',
      caption: 'Mobile view of the admin portal notifications',
    },
    // Authentication & Security
    {
      src: '/images/projects/megashop/auth-pages/1-login.png',
      alt: 'MEGA SHOP login page',
      caption: 'Login page for the MEGA SHOP platform',
    },
    {
      src: '/images/projects/megashop/auth-pages/2-signup.png',
      alt: 'MEGA SHOP signup page',
      caption: 'Signup page for the MEGA SHOP platform',
    },
    {
      src: '/images/projects/megashop/auth-pages/4-verify-email.png',
      alt: 'MEGA SHOP verify email page',
      caption: 'Verify email page for the MEGA SHOP platform',
    },
    {
      src: '/images/projects/megashop/auth-pages/3-reset-password.png',
      alt: 'MEGA SHOP reset password page',
      caption: 'Reset password page for the MEGA SHOP platform',
    },
    {
      src: '/images/projects/megashop/auth-pages/5-restricted-access.png',
      alt: 'MEGA SHOP restricted access page',
      caption: 'Restricted access page for the MEGA SHOP platform',
    },
  ],

  links: {
    live: 'https://project-megashop.vercel.app',
    github: 'https://github.com/lyes-mersel/megashop',
  },
};
