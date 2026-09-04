export interface Project {
  id: string;
  title: string;
  description: string;
  participation: string;
  shortDescription?: string;
  fullDescription?: string;
  category?: 'Full-Stack' | 'IA & Data' | 'Mobile & Sécurité' | 'Autre';
  image?: string;
  tags?: string[];
  githubUrl?: string;
  featured?: boolean;
  architectureDetails?: string[];
  keyFeatures?: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  colorTheme: 'cyan' | 'violet';
  skills: {
    name: string;
    level?: number; // 0-100
    category?: string;
  }[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  description: string;
  details?: string[];
  highlight?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  level: string;
  year: string;
  badgeIcon: string;
  credentialId?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}
