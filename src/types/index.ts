export interface Project {
  id: string;
  title: string;
  category: 'Frontend' | 'Full Stack' | 'Video & Motion' | 'UI/UX Design';
  shortDesc: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  keyFeatures?: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  iconName?: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  accent: string;
  skills: SkillItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  deliverables: string[];
  techStack: string[];
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  description: string;
  courses: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  relationship: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  specialties: string[];
  image: string;
  linkedIn?: string;
  github?: string;
}
