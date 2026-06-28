import type { Project } from "@/types";

// TODO: Replace with your real projects.
// slug becomes the URL: /projects/[slug]
export const projects: Project[] = [
  {
    id: "proj-01",
    slug: "reconforge",
    title: "ReconForge",
    description:
      "An open-source cybersecurity assessment platform for automated reconnaissance and vulnerability mapping.",
    longDescription: `TODO: Write a detailed description of this project.
What problem does it solve? How is it architected? What were the technical challenges?`,
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Docker"],
    status: "active",
    startDate: "2024-01",
    tags: ["security", "osint", "automation", "open-source"],
    featured: true,
    githubUrl: "https://github.com/TODO/reconforge",
    challenges: [
      "TODO: Challenge 1",
      "TODO: Challenge 2",
    ],
    lessonsLearned: [
      "TODO: Lesson 1",
    ],
    futureImprovements: [
      "TODO: Future improvement 1",
    ],
  },
  {
    id: "proj-02",
    slug: "homelab-infrastructure",
    title: "Home Lab Infrastructure",
    description:
      "A fully virtualized enterprise-grade home lab for security research and training.",
    technologies: ["VMware ESXi", "Fortinet", "Proxmox", "Docker", "Ansible"],
    status: "active",
    startDate: "2021-03",
    tags: ["homelab", "infrastructure", "virtualization", "networking"],
    featured: true,
  },
  {
    id: "proj-03",
    slug: "todo-project",
    title: "TODO: Project Name",
    description: "TODO: Short description of what this project does.",
    technologies: ["TODO: Tech 1", "TODO: Tech 2"],
    status: "completed",
    startDate: "2023-06",
    endDate: "2023-12",
    tags: ["TODO"],
  },
];
