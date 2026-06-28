// ─────────────────────────────────────────────────────────────────────────────
// All TypeScript interfaces for the personal website.
// Add new content types here first, then create a matching data file.
// ─────────────────────────────────────────────────────────────────────────────

export type Locale = "en" | "he";

// ── Profile ──────────────────────────────────────────────────────────────────

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface Profile {
  name: string;
  nameHe: string;
  headline: string;
  subheadline: string;
  bio: string;
  bioHe: string;
  location: string;
  social: SocialLinks;
  cvUrl: string;
  photoUrl: string;
}

// ── Experience ────────────────────────────────────────────────────────────────

export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  companyLogo?: string;
  position: string;
  startDate: string; // ISO date
  endDate?: string;  // undefined = Present
  location: string;
  type: "full-time" | "part-time" | "contract" | "freelance" | "internship";
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  images?: string[];
  links?: { label: string; url: string }[];
}

// ── Certifications ────────────────────────────────────────────────────────────

export type CertCategory =
  | "cybersecurity"
  | "networking"
  | "cloud"
  | "microsoft"
  | "linux"
  | "devops"
  | "other";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogo?: string;
  image?: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
  category: CertCategory;
  notes?: string;
  featured?: boolean;
}

// ── Projects ──────────────────────────────────────────────────────────────────

export type ProjectStatus =
  | "active"
  | "completed"
  | "archived"
  | "in-progress"
  | "planned";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  images?: string[];
  coverImage?: string;
  technologies: string[];
  architecture?: string;
  githubUrl?: string;
  demoUrl?: string;
  screenshots?: string[];
  challenges?: string[];
  lessonsLearned?: string[];
  futureImprovements?: string[];
  status: ProjectStatus;
  startDate: string;
  endDate?: string;
  tags: string[];
  featured?: boolean;
}

// ── Blog / Research ───────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  readingTime?: string;
  featured?: boolean;
  draft?: boolean;
  coverImage?: string;
}

export interface ResearchItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  type: "writeup" | "vuln-analysis" | "lab" | "experiment" | "note";
  tags: string[];
  cveIds?: string[];
  severity?: "critical" | "high" | "medium" | "low" | "info";
  status: "published" | "draft" | "wip";
  links?: { label: string; url: string }[];
}

// ── Skills ────────────────────────────────────────────────────────────────────

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  levelPercent: number; // 0-100
  years?: number;
  description?: string;
  projects?: string[]; // project ids
  icon?: string;
}

export type SkillCategory =
  | "cybersecurity"
  | "networking"
  | "infrastructure"
  | "cloud"
  | "virtualization"
  | "programming"
  | "automation"
  | "operating-systems"
  | "microsoft"
  | "fortinet"
  | "linux"
  | "containers";

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  icon: string;
  skills: Skill[];
}

// ── Home Lab ──────────────────────────────────────────────────────────────────

export interface LabDevice {
  id: string;
  name: string;
  type:
    | "server"
    | "firewall"
    | "switch"
    | "router"
    | "storage"
    | "vm-host"
    | "other";
  specs?: string;
  role: string;
  os?: string;
  status: "active" | "inactive" | "planned";
  tags?: string[];
}

export interface HomeLab {
  description: string;
  devices: LabDevice[];
  services: { name: string; description: string; url?: string }[];
  diagramUrl?: string;
}

// ── Stats ─────────────────────────────────────────────────────────────────────

export interface Stat {
  labelKey: string; // key in messages.stats.*
  value: number;
  suffix?: string;
  prefix?: string;
}
