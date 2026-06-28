import type { ResearchItem } from "@/types";

// TODO: Add your real security research, write-ups, and lab experiments.
export const research: ResearchItem[] = [
  {
    id: "res-01",
    slug: "active-directory-attack-paths",
    title: "Active Directory Attack Paths — From Foothold to Domain Admin",
    description:
      "A deep-dive analysis of common AD attack vectors including Kerberoasting, AS-REP Roasting, and DCSync.",
    date: "2024-03-15",
    type: "writeup",
    tags: ["active-directory", "kerberos", "privilege-escalation", "windows"],
    status: "published",
  },
  {
    id: "res-02",
    slug: "fortinet-hardening-guide",
    title: "FortiGate Hardening Guide — Beyond the Defaults",
    description:
      "Configuration best practices and security hardening checklist for FortiGate firewalls in enterprise environments.",
    date: "2024-01-20",
    type: "note",
    tags: ["fortinet", "fortigate", "hardening", "firewall"],
    status: "published",
  },
  {
    id: "res-03",
    slug: "todo-research",
    title: "TODO: Research Title",
    description: "TODO: Description of this research item.",
    date: "2023-11-01",
    type: "lab",
    tags: ["TODO"],
    status: "draft",
  },
];
