import type { PersonalInfo, Project, Skill, ExperienceItem, Education } from '../types';

export const personal: PersonalInfo = {
  name: 'James Marie Tomambid',
  firstName: 'James Marie',
  lastName: 'Tomambid',
  roles: [
    'Frontend Developer',
    'React Engineer',
    'Vue.js Developer',
    'UI/UX Enthusiast',
  ],
  bio: "Frontend Developer with 6+ years of experience building web and mobile applications across real estate, enterprise, and research sectors. I craft fast, accessible, and maintainable UIs with React and Vue.js — always with clean code and a focus on user experience.",
  email: 'shenztomambid@gmail.com',
  github: 'github.com/jtomambid',
  linkedin: 'linkedin.com/in/jtomambid',
  location: 'Davao City, Philippines',
  stats: [
    { value: '6+',  label: 'Years Experience' },
    { value: '5',   label: 'Companies Worked' },
    { value: '15+', label: 'Technologies'     },
  ],
  highlights: [
    {
      icon: '⚛️',
      title: 'React & Vue',
      desc: 'Expert in both React and Vue.js ecosystems — from complex SPAs to cross-platform mobile apps.',
    },
    {
      icon: '📱',
      title: 'Mobile Dev',
      desc: 'React Native experience shipping cross-platform apps with offline data capabilities.',
    },
    {
      icon: '✦',
      title: 'Clean Code',
      desc: 'TypeScript-first approach with readable, maintainable, and well-structured codebases.',
    },
    {
      icon: '🚀',
      title: 'Performance',
      desc: 'Optimizing UI rendering and reducing server requests for a smoother user experience.',
    },
  ],
};

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', category: 'languages' },
  { name: 'TypeScript', category: 'languages' },

  // Frontend
  { name: 'HTML5',        category: 'frontend' },
  { name: 'CSS3',         category: 'frontend' },
  { name: 'React',        category: 'frontend' },
  { name: 'Vue.js',       category: 'frontend' },
  { name: 'React Native', category: 'frontend' },

  // Libraries & Frameworks
  { name: 'Redux',        category: 'libraries' },
  { name: 'Ant Design',   category: 'libraries' },
  { name: 'MUI',          category: 'libraries' },
  { name: 'Vuetify',      category: 'libraries' },
  { name: 'Vuex',         category: 'libraries' },
  { name: 'Supabase',     category: 'libraries' },
  { name: 'Stripe',       category: 'libraries' },

  // Tools
  { name: 'GIT',         category: 'tools' },
  { name: 'Figma',       category: 'tools' },
  { name: 'Postman',     category: 'tools' },
  { name: 'Expo',        category: 'tools' },
  { name: 'AWS Amplify', category: 'tools' },
  { name: 'VSCode',      category: 'tools' },
];

export const experience: ExperienceItem[] = [
  {
    company: 'PROPZAP Realty',
    role: 'Frontend Developer',
    period: 'Feb 2024 – Dec 2025',
    bullets: [
      'Led routing system enhancements and implemented features for off-market property listings and customer management.',
      'Built testimonial organization module, security measures, and optimized marketing pages to improve user engagement.',
    ],
    tech: ['VueJS', 'Vuetify', 'Vuex', 'ReactJS', 'Supabase', 'Stripe'],
  },
  {
    company: 'Ethos Innovation Inc.',
    role: 'Frontend Developer',
    period: 'Aug 2022 – Mar 2026',
    bullets: [
      'Translated wireframes into web and mobile applications that handle bulk data imports.',
      'Refactored offline storage functionality enabling mobile app usage without connectivity.',
      'Set up project build and deployment pipeline through AWS Amplify.',
    ],
    tech: ['ReactJS', 'React Native', 'AWS Amplify', 'ANT Design', 'MUI', 'GIT'],
  },
  {
    company: 'PRL BPO Technology Corp.',
    role: 'Frontend Developer',
    period: 'Dec 2020 – May 2023',
    bullets: [
      'Designed and implemented a Learning Management System and Social Media Management System used by multinational companies.',
      'Refactored server-side logic to reduce redundant requests and improve resource efficiency.',
      'Troubleshot and redesigned UI components that measurably improved user experience.',
    ],
    tech: ['ReactJS', 'React Native', 'Expo', 'Postman', 'GIT', 'Redux'],
  },
  {
    company: 'Ideahub – PxP Media',
    role: 'Junior Frontend Developer',
    period: 'Sep 2019 – Nov 2019',
    bullets: [
      'Designed and implemented custom theme landing pages that generate client leads.',
      'Integrated and tested WordPress plugins to meet client requirements.',
      'Performed optimizations that reduced website latency.',
    ],
    tech: ['WordPress'],
  },
  {
    company: 'University of Southeastern Philippines',
    role: 'Science Research Specialist I',
    period: 'Apr 2019 – Aug 2019',
    bullets: [
      'Designed and implemented the system dashboard for a Solar Home System research project.',
      'Demonstrated the Solar Home System to beneficiaries and managed project documentation.',
    ],
    tech: ['Python', 'IoT', 'Raspberry Pi', 'VB.NET', 'MySQL'],
  },
];

export const education: Education = {
  school: 'University of the Immaculate Conception',
  degree: 'Bachelor of Science in Information Technology — Major in Software Engineering',
  location: 'Davao City, Philippines',
  period: '2015 – 2019',
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Real Estate Platform',
    description:
      'Comprehensive real estate platform with off-market property listings, customer management, testimonial organization, and Stripe payment integration.',
    tags: ['VueJS', 'Vuetify', 'Supabase', 'Stripe', 'Vuex'],
    year: 2024,
    featured: true,
  },
  {
    id: '2',
    title: 'Bulk Data Import App',
    description:
      'Cross-platform web and mobile application handling bulk data imports with offline storage support for usage without connectivity.',
    tags: ['React Native', 'ReactJS', 'AWS Amplify', 'MUI'],
    year: 2022,
    featured: true,
  },
  {
    id: '3',
    title: 'Learning Management System',
    description:
      'LMS and Social Media Management System serving multinational companies, with optimizations that reduced redundant server requests.',
    tags: ['ReactJS', 'React Native', 'Redux', 'Expo'],
    year: 2021,
  },
  {
    id: '4',
    title: 'IoT Research Dashboard',
    description:
      'System dashboard for a Solar Home System research project — data visualization, beneficiary demonstrations, and document management.',
    tags: ['Python', 'IoT', 'Raspberry Pi', 'VB.NET', 'MySQL'],
    year: 2019,
  },
];
