export type CategoryType = 'all' | 'web' | 'nonprofit' | 'brand' | 'code';

export interface Project {
  id: string;
  title: string;
  category: CategoryType;
  categoryLabel: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  image?: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  problem?: string;
  solution?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Role {
  id: string;
  title: string;
  organization: string;
  tagline: string;
  icon: string;
  description: string;
  focusAreas: string[];
  color: string;
  highlights: string[];
  image?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    description: string;
    tag?: string;
    yearsOfExperience?: string;
    proficiencyTooltip?: string;
  }[];
}

export interface CodeSnippet {
  id: string;
  title: string;
  language: 'python' | 'swift' | 'typescript' | 'css';
  languageLabel: string;
  filename: string;
  description: string;
  code: string;
  outputPreview: string;
}

export interface CosmeticProduct {
  id: string;
  name: string;
  tagline: string;
  category: 'facial' | 'body' | 'blend';
  description: string;
  keyIngredients: string[];
  benefits: string[];
  volume: string;
  image?: string;
  scentProfile: string;
}

export interface SanitationAudit {
  schoolName: string;
  district: string;
  totalStudents: number;
  femaleStudents: number;
  functionalToilets: number;
  cleanWaterAvailable: boolean;
  sanitaryBinsPresent: boolean;
  privacyLocksWorking: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai' | 'system';
  text: string;
  timestamp: string;
}
