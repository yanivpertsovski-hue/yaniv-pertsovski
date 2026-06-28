import type { ExperienceItem } from "@/types";

// TODO: Replace with your real work history.
// To add a new position: copy an object block, change the id, fill in the fields.
export const experience: ExperienceItem[] = [
  {
    id: "exp-01",
    company: "TODO: Company Name",
    companyUrl: "https://example.com",
    position: "Senior Cybersecurity Engineer",
    startDate: "2022-01",
    // endDate: undefined means "Present"
    location: "Israel",
    type: "full-time",
    description:
      "TODO: Short one-sentence description of the role and what you achieved.",
    responsibilities: [
      "TODO: Responsibility one",
      "TODO: Responsibility two",
      "TODO: Responsibility three",
    ],
    achievements: [
      "TODO: Achievement one — quantify it (e.g. reduced incident response time by 40%)",
      "TODO: Achievement two",
    ],
    technologies: ["Fortinet", "Palo Alto", "SIEM", "Azure", "VMware"],
  },
  {
    id: "exp-02",
    company: "TODO: Previous Company",
    companyUrl: "https://example.com",
    position: "Infrastructure Engineer",
    startDate: "2019-06",
    endDate: "2021-12",
    location: "Israel",
    type: "full-time",
    description: "TODO: Short description of previous role.",
    responsibilities: [
      "TODO: Responsibility one",
      "TODO: Responsibility two",
    ],
    achievements: ["TODO: Achievement one", "TODO: Achievement two"],
    technologies: ["Windows Server", "Active Directory", "VMware", "Cisco"],
  },
];
