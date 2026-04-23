export type SkillCategory = 'languages' | 'frontend' | 'libraries' | 'tools';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: number;
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tech: string[];
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Highlight {
  icon: string;
  title: string;
  desc: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  roles: string[];
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  stats: Stat[];
  highlights: Highlight[];
}
