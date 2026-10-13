export type ProjectCategory = 
  | 'All'
  | 'Web Development'
  | 'AI Integration'
  | 'Data Analytics'
  | 'Financial Applications';

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory[];
  stack: string[];
  description: string;
  detailedOverview?: string;
  features: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  role?: string;
  timeline?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  responsibilities: string[];
  techStack?: string[];
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  outcome?: string;
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: {
    name: string;
    iconName?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year?: string;
}
