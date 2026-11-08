import { Project } from '@/app/(root)/projects/_data/types';

export const shifa: Project = {
  id: 'shifa',
  title: 'Shifa',
  category: 'Web',
  kind: "Bachelor's Final Year Project",
  year: '2024',
  role: 'Full-Stack Developer · Team of 4',
  description:
    'A web-based hospital appointment management system that streamlines patient reservations and daily operations for doctors, secretaries, and administrators.',

  overview: [
    'Shifa is a hospital appointment management application developed to digitize and simplify appointment scheduling and administrative operations. It provides a centralized platform connecting patients with medical staff through dedicated interfaces for four user roles: patients, doctors, secretaries, and administrators.',
    'Patients can register, explore available medical services, book appointments through a guided scheduling process, and manage their reservations. The system also supports booking appointments for registered children, allowing parents to manage their dependents’ appointments.',
    'Doctors and secretaries have dedicated dashboards to manage appointments, access patient information, and perform staff-assisted bookings, including appointments for temporary patients. Administrators oversee the platform through management interfaces for staff, patients, medical services, and appointment capacities.',
    'The application follows a server-rendered architecture built with Express.js and EJS, with MySQL handling relational data persistence. Authentication, session management, and email services support the main application workflows.',
  ],

  features: [
    {
      title: 'Patient registration & authentication',
      description:
        'Patient account creation with email verification, login, password recovery, and secure password hashing.',
    },
    {
      title: 'Appointment booking',
      description:
        'A guided booking workflow allowing patients to select a medical service, date, available time slot, and confirm reservations.',
    },
    {
      title: 'Child appointment management',
      description: 'Parents can register children and book medical appointments on their behalf.',
    },
    {
      title: 'Reservation management',
      description:
        'View appointment history, filter reservations, search by medical service, and cancel appointments.',
    },
    {
      title: 'Doctor dashboard',
      description:
        'Access appointment statistics, view assigned patients, browse colleagues, and create appointments.',
    },
    {
      title: 'Secretary dashboard',
      description:
        'Manage patient information, search doctors, and schedule appointments for temporary or existing patients.',
    },
    {
      title: 'Administrative management',
      description:
        'Manage doctors, secretaries, patients, medical services, and appointment capacity.',
    },
    {
      title: 'Staff-assisted booking',
      description:
        'Doctors and secretaries can schedule appointments for existing patients, registered children, and temporary patients.',
    },
    {
      title: 'Profile management',
      description:
        'Users can update personal information and manage account settings according to their role.',
    },
    {
      title: 'Email notifications',
      description:
        'Email-based account verification and password recovery workflows using Nodemailer.',
    },
  ],

  highlights: [
    'Implemented a role-based application supporting four distinct user types with dedicated dashboards and workflows.',
    'Developed a multi-step appointment scheduling process based on medical services, dates, and available time slots.',
    'Designed relational database interactions using MySQL and the mysql2 promise-based connection pool.',
    'Implemented session-based authentication and password hashing with bcrypt.',
    'Integrated email delivery using Nodemailer and Gmail SMTP.',
  ],

  stack: [
    'JavaScript',
    'Node.js',
    'Express.js',
    'EJS',
    'MySQL',
    'Bootstrap',
    'CSS',
    'bcrypt',
    'express-session',
    'Nodemailer',
  ],

  screenshots: [
    // General screenshots
    {
      src: '/images/projects/shifa/0-acceuil.png',
      alt: 'Shifa homepage',
      caption: 'Main application landing page',
    },
    {
      src: '/images/projects/shifa/0-login-employee.png',
      alt: 'Employee login page',
      caption: 'Authentication interface for medical staff',
    },
    {
      src: '/images/projects/shifa/0-login-patient.png',
      alt: 'Patient login page',
      caption: 'Patient authentication interface',
    },
    {
      src: '/images/projects/shifa/0-register-patient.png',
      alt: 'Patient registration page',
      caption: 'Patient account registration',
    },
    // Doctor screenshots
    {
      src: '/images/projects/shifa/doctor1-acceuil.png',
      alt: 'Doctor dashboard',
      caption: 'Doctor dashboard and appointment overview',
    },
    {
      src: '/images/projects/shifa/doctor2-prendreRDV.png',
      alt: 'Doctor appointment booking page',
      caption: 'Doctor-assisted appointment scheduling',
    },
    {
      src: '/images/projects/shifa/doctor3-listPatients.png',
      alt: 'Doctor patient list',
      caption: 'Patient management for doctors',
    },
    {
      src: '/images/projects/shifa/doctor4-secretary4-list of doctors.png',
      alt: 'Medical staff directory',
      caption: 'Directory of doctors and medical staff',
    },
    {
      src: '/images/projects/shifa/doctor5-secretary5-update infos.png',
      alt: 'Staff profile settings',
      caption: 'Personal information management for staff',
    },
    // Patient screenshots
    {
      src: '/images/projects/shifa/patient1-acceuil.png',
      alt: 'Patient dashboard',
      caption: 'Patient dashboard and reservation overview',
    },
    {
      src: '/images/projects/shifa/patient2-services.png',
      alt: 'Available medical services',
      caption: 'Browse and select medical services for appointment booking',
    },
    {
      src: '/images/projects/shifa/patient3-dateRDV.png',
      alt: 'Patient appointment booking',
      caption: 'Select a date for an appointment with a chosen medical service',
    },
    {
      src: '/images/projects/shifa/patient4-heureRDV.png',
      alt: 'Available appointment times',
      caption: 'Select an available time slot for the chosen date and medical service',
    },
    {
      src: '/images/projects/shifa/patient5-validerRDV.png',
      alt: 'Appointment confirmation',
      caption: 'Review and confirm an appointment',
    },
    {
      src: '/images/projects/shifa/patient6-listeReservations.png',
      alt: 'Patient reservations',
      caption: 'Patient appointment history',
    },
    {
      src: '/images/projects/shifa/patient7-parametres0.png',
      alt: 'Patient account settings',
      caption: 'Patient account settings',
    },
    {
      src: '/images/projects/shifa/patient8-parametres1.png',
      alt: 'Patient account settings',
      caption: 'Additional patient account settings',
    },
    {
      src: '/images/projects/shifa/patient9-parametres2.png',
      alt: 'Patient account settings',
      caption: 'Account management options',
    },
    {
      src: '/images/projects/shifa/patient10-personalInfos.png',
      alt: 'Patient personal information',
      caption: 'Patient personal information',
    },
    // Secretary screenshots
    {
      src: '/images/projects/shifa/secretary1-acceuil.png',
      alt: 'Secretary dashboard',
      caption: 'Secretary dashboard',
    },
    {
      src: '/images/projects/shifa/secretary2-prendreRDV.png',
      alt: 'Secretary appointment booking',
      caption: 'Secretary-assisted appointment scheduling',
    },
    {
      src: '/images/projects/shifa/secretary3-list of patients.png',
      alt: 'Secretary patient directory',
      caption: 'Patient directory for secretaries',
    },
  ],

  links: {
    github: 'https://github.com/lyes-mersel/shifa',
  },
};
