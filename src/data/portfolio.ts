import type {
  PersonalInfo,
  Project,
  Skill,
  ExperienceItem,
  Education,
} from "../types";

import propzapImg from "../assets/propzap.png";
import ghostdImg from "../assets/ghostd.png";
import healthgridImg from "../assets/healthgrid.png";
import pspaImg from "../assets/pspa-eropa.png";
import fmrImg from "../assets/fmr.png";
import hyvaImg from "../assets/hyva.png";
import bundrImg from "../assets/bundr.png";
import pisolarImg from "../assets/pisolar.png";

export const personal: PersonalInfo = {
  name: "James Marie Tomambid",
  firstName: "James Marie",
  lastName: "Tomambid",
  roles: [
    "Frontend Developer",
    "React Engineer",
    "Vue.js Developer",
    "UI/UX Enthusiast",
  ],
  bio: "Frontend Developer with 6+ years of experience building web and mobile applications across real estate, enterprise, and research sectors. I craft fast, accessible, and maintainable UIs with React and Vue.js — always with clean code and a focus on user experience.",
  email: "shenztomambid@gmail.com",
  github: "github.com/jtomambid",
  linkedin: "linkedin.com/in/jtomambid",
  location: "Davao City, Philippines",
  stats: [
    { value: "6+", label: "Years Experience" },
    { value: "5", label: "Companies Worked" },
    { value: "15+", label: "Technologies" },
  ],
  highlights: [
    {
      icon: "⚛️",
      title: "React & Vue",
      desc: "Expert in both React and Vue.js ecosystems — from complex SPAs to cross-platform mobile apps.",
    },
    {
      icon: "📱",
      title: "Mobile Dev",
      desc: "React Native experience shipping cross-platform apps with offline data capabilities.",
    },
    {
      icon: "✦",
      title: "Clean Code",
      desc: "TypeScript-first approach with readable, maintainable, and well-structured codebases.",
    },
    {
      icon: "🚀",
      title: "Performance",
      desc: "Optimizing UI rendering and reducing server requests for a smoother user experience.",
    },
  ],
};

export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "Python", category: "languages" },

  // Frontend
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "React Native", category: "frontend" },

  // Libraries & Frameworks
  { name: "Redux", category: "libraries" },
  { name: "Ant Design", category: "libraries" },
  { name: "MUI", category: "libraries" },
  { name: "Vuetify", category: "libraries" },
  { name: "Vuex", category: "libraries" },
  { name: "Supabase", category: "libraries" },
  { name: "Stripe", category: "libraries" },
  { name: "Django", category: "libraries" },

  // Tools
  { name: "GIT", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Expo", category: "tools" },
  { name: "AWS Amplify", category: "tools" },
  { name: "VSCode", category: "tools" },
];

export const experience: ExperienceItem[] = [
  {
    company: "PROPZAP Realty",
    role: "Frontend Developer",
    period: "Feb 2024 – Dec 2025",
    bullets: [
      "Led routing system enhancements and implemented features for off-market property listings and customer management.",
      "Built testimonial organization module, security measures, and optimized marketing pages to improve user engagement.",
    ],
    tech: ["VueJS", "Vuetify", "Vuex", "ReactJS", "Supabase", "Stripe"],
  },
  {
    company: "Ethos Innovation Inc.",
    role: "Frontend Developer",
    period: "Aug 2022 – Mar 2026",
    bullets: [
      "Translated wireframes into web and mobile applications that handle bulk data imports.",
      "Refactored offline storage functionality enabling mobile app usage without connectivity.",
      "Set up project build and deployment pipeline through AWS Amplify.",
    ],
    tech: [
      "ReactJS",
      "React Native",
      "AWS Amplify",
      "ANT Design",
      "MUI",
      "GIT",
    ],
  },
  {
    company: "PRL BPO Technology Corp.",
    role: "Frontend Developer",
    period: "Dec 2020 – May 2023",
    bullets: [
      "Designed and implemented a Learning Management System and Social Media Management System used by multinational companies.",
      "Refactored server-side logic to reduce redundant requests and improve resource efficiency.",
      "Troubleshot and redesigned UI components that measurably improved user experience.",
    ],
    tech: ["ReactJS", "React Native", "Expo", "Postman", "GIT", "Redux"],
  },
  {
    company: "Ideahub – PxP Media",
    role: "Junior Frontend Developer",
    period: "Sep 2019 – Nov 2019",
    bullets: [
      "Designed and implemented custom theme landing pages that generate client leads.",
      "Integrated and tested WordPress plugins to meet client requirements.",
      "Performed optimizations that reduced website latency.",
    ],
    tech: ["WordPress"],
  },
  {
    company: "University of Southeastern Philippines",
    role: "Science Research Specialist I",
    period: "Apr 2019 – Aug 2019",
    bullets: [
      "Designed and implemented the system dashboard for a Solar Home System research project.",
      "Demonstrated the Solar Home System to beneficiaries and managed project documentation.",
    ],
    tech: ["Python", "IoT", "Raspberry Pi", "VB.NET", "MySQL"],
  },
];

export const education: Education = {
  school: "University of the Immaculate Conception",
  degree:
    "Bachelor of Science in Information Technology — Major in Software Engineering",
  location: "Davao City, Philippines",
  period: "2015 – 2019",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "PROPZAP Realty",
    description:
      "Contributed to the development of a comprehensive real estate platform designed to streamline property and customer management.",
    bullets: [
      "Led routing system overhaul and built key features including Off-Market Property Management, Customer Management, and Testimonial Management.",
      "Implemented authentication and security measures, option management, and marketing page optimizations.",
      "Developed a Stripe-powered Subscription System with multiple tiers and corresponding access levels.",
    ],
    image: propzapImg as unknown as string,
    tags: ["Vue.js", "Vuetify", "Vuex", "Vue Router", "Supabase", "Stripe"],
    liveUrl: "https://propzap.com/",
    year: 2025,
    featured: true,
  },
  {
    id: "2",
    title: "Ghostd",
    description:
      "An evolved matchmaking platform offering intelligent and personalized connection experiences for its users.",
    bullets: [
      "Built the admin dashboard for platform analytics including engagement rate, active conversations, and total users.",
      "Developed quick-stat widgets showing total users per subscription tier and other key metrics.",
      "Integrated Stripe for payment subscriptions, implementing multiple subscription tiers with corresponding views and access levels.",
    ],
    image: ghostdImg as unknown as string,
    tags: ["Vue.js", "Vuetify", "Vuex", "Supabase"],
    liveUrl: "https://tryghostd.com/",
    year: 2025,
    featured: true,
  },
  {
    id: "3",
    title: "HealthGrid",
    description:
      "Hospital and Clinic Management System designed to streamline administrative and operational functions for healthcare facilities across the Philippines.",
    bullets: [
      "Developed the Patient Management module covering prescriptions, medical history, doctor file attachments, and billing history.",
      "Translated wireframes into responsive web and mobile interfaces with bulk data import support.",
      "Refactored offline storage for connectivity-free usage and set up the deployment pipeline via AWS Amplify.",
    ],
    image: healthgridImg as unknown as string,
    tags: ["ReactJS", "React Native", "AWS Amplify", "MUI"],
    liveUrl: "https://www.healthgrid.ph/",
    year: 2026,
    featured: true,
  },
  {
    id: "4",
    title: "PSPA-EROPA Conference",
    description:
      "Official conference website for the PSPA-EROPA Joint International Conference, providing event information, schedules, and registration for attendees.",
    bullets: [
      "Built and maintained the conference website from wireframes to production.",
      "Implemented event schedule displays, speaker profiles, and registration flows.",
      "Deployed and managed the application via AWS Amplify.",
    ],
    image: pspaImg as unknown as string,
    tags: ["ReactJS", "AWS Amplify", "MUI"],
    liveUrl: "https://pspaconference.com/",
    year: 2025,
  },
  {
    id: "5",
    title: "FMR Philippines",
    description:
      "Admin dashboard and management platform for FMR Station, enabling ad schedule management and broadcasting operations with role-based access control.",
    bullets: [
      "Developed the News Management module for publishing and organizing station news content.",
      "Built the Advertisers form and Ads form with filtering options for managing ad placements.",
      "Implemented role-based access control to restrict and manage user permissions across the platform.",
    ],
    image: fmrImg as unknown as string,
    tags: ["ReactJS", "AWS Amplify", "MUI"],
    liveUrl: "https://fmrphilippines.net/",
    year: 2026,
  },
  {
    id: "6",
    title: "Hyva LMS & HRIS",
    description:
      "Learning Management System and Human Resource Information System built for Hyva, a global hydraulic solutions manufacturer, supporting employee training and HR operations.",
    bullets: [
      "Designed and implemented the LMS for employee training and certifications used by multinational company staff.",
      "Built HRIS features for employee management and HR workflow automation.",
      "Refactored server-side logic and redesigned UI components to reduce redundant requests and improve user experience.",
    ],
    image: hyvaImg as unknown as string,
    tags: ["ReactJS", "React Native", "Redux", "Expo"],
    liveUrl: "https://www.hyva.com/en/",
    year: 2022,
  },
  {
    id: "7",
    title: "Bundr",
    description:
      "Hyperlocal advertising platform that connects brands with local retailers to run targeted social media campaigns, with real-time analytics to measure campaign performance and ROI.",
    bullets: [
      "Developed cross-platform mobile and web campaign management features using React Native and React.",
      "Integrated real-time analytics dashboards to track campaign performance and ROI.",
      "Refactored a functionality that reduced the number of server requests to avoid wasting resources.",
    ],
    image: bundrImg as unknown as string,
    tags: ["ReactJS", "React Native", "Redux", "Expo"],
    liveUrl: "https://www.bundr.com/",
    year: 2021,
  },
  {
    id: "8",
    title: "PISOLAR Research Dashboard",
    description:
      "Cloud-based software system for digitization of payments and real-time monitoring of Solar Home Systems (SHS) for indigenous communities in Mindanao, Philippines — funded by DOST-PCIEERD under the Cradle Program. Enables wireless/card-based Pay-As-You-Go ownership of SHS units.",
    bullets: [
      "Conducted site visitation, research, design, and full implementation of the monitoring system.",
      "Integrated IoT components (Raspberry Pi, GSM) for wireless payment processing and real-time SHS health monitoring.",
      "Demonstrated the system to indigenous beneficiaries in Mindanao and managed project documentation.",
    ],
    image: pisolarImg as unknown as string,
    tags: ["Python", "IoT", "Raspberry Pi", "GSM", "VB.NET", "MySQL"],
    liveUrl: "https://businessmirror.com.ph/2022/06/05/pisolar-lighting-the-livesof-lumads-in-the-mountains/",
    year: 2019,
  },
];
