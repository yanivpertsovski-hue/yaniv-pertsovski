import type { SkillGroup } from "@/types";

// Adjust levelPercent (0-100) and years to match your actual proficiency.
export const skillGroups: SkillGroup[] = [
  {
    category: "cybersecurity",
    label: "Cybersecurity",
    icon: "shield",
    skills: [
      { id: "sk-pentest", name: "Penetration Testing", level: "advanced", levelPercent: 80, years: 3 },
      { id: "sk-siem", name: "SIEM / SOC", level: "advanced", levelPercent: 85, years: 4 },
      { id: "sk-va", name: "Vulnerability Assessment", level: "expert", levelPercent: 90, years: 5 },
      { id: "sk-dfir", name: "DFIR", level: "intermediate", levelPercent: 65, years: 2 },
      { id: "sk-threat", name: "Threat Intelligence", level: "intermediate", levelPercent: 70, years: 3 },
    ],
  },
  {
    category: "networking",
    label: "Networking",
    icon: "network",
    skills: [
      { id: "sk-tcp", name: "TCP/IP", level: "expert", levelPercent: 95, years: 8 },
      { id: "sk-routing", name: "Routing & Switching", level: "advanced", levelPercent: 85, years: 6 },
      { id: "sk-vpn", name: "VPN / SD-WAN", level: "advanced", levelPercent: 80, years: 5 },
      { id: "sk-fw", name: "Firewall Administration", level: "expert", levelPercent: 90, years: 6 },
    ],
  },
  {
    category: "fortinet",
    label: "Fortinet",
    icon: "shield-check",
    skills: [
      { id: "sk-fgt", name: "FortiGate", level: "expert", levelPercent: 90, years: 5 },
      { id: "sk-faz", name: "FortiAnalyzer", level: "advanced", levelPercent: 80, years: 4 },
      { id: "sk-fmg", name: "FortiManager", level: "advanced", levelPercent: 80, years: 4 },
    ],
  },
  {
    category: "microsoft",
    label: "Microsoft",
    icon: "windows",
    skills: [
      { id: "sk-ad", name: "Active Directory", level: "expert", levelPercent: 92, years: 7 },
      { id: "sk-azure", name: "Microsoft Azure", level: "advanced", levelPercent: 78, years: 4 },
      { id: "sk-m365", name: "Microsoft 365", level: "advanced", levelPercent: 82, years: 5 },
      { id: "sk-ws", name: "Windows Server", level: "expert", levelPercent: 90, years: 7 },
    ],
  },
  {
    category: "virtualization",
    label: "Virtualization",
    icon: "layers",
    skills: [
      { id: "sk-vmware", name: "VMware vSphere / ESXi", level: "expert", levelPercent: 90, years: 6 },
      { id: "sk-vcenter", name: "vCenter", level: "advanced", levelPercent: 85, years: 5 },
      { id: "sk-prox", name: "Proxmox", level: "advanced", levelPercent: 78, years: 3 },
    ],
  },
  {
    category: "containers",
    label: "Containers & DevOps",
    icon: "box",
    skills: [
      { id: "sk-docker", name: "Docker", level: "advanced", levelPercent: 80, years: 4 },
      { id: "sk-k8s", name: "Kubernetes", level: "intermediate", levelPercent: 60, years: 2 },
      { id: "sk-ansible", name: "Ansible", level: "intermediate", levelPercent: 65, years: 2 },
    ],
  },
  {
    category: "linux",
    label: "Linux",
    icon: "terminal",
    skills: [
      { id: "sk-linux", name: "Linux Administration", level: "advanced", levelPercent: 82, years: 6 },
      { id: "sk-bash", name: "Bash Scripting", level: "advanced", levelPercent: 80, years: 5 },
      { id: "sk-kali", name: "Kali Linux", level: "advanced", levelPercent: 85, years: 4 },
    ],
  },
  {
    category: "programming",
    label: "Programming",
    icon: "code",
    skills: [
      { id: "sk-python", name: "Python", level: "advanced", levelPercent: 80, years: 5 },
      { id: "sk-ps", name: "PowerShell", level: "expert", levelPercent: 88, years: 6 },
      { id: "sk-ts", name: "TypeScript", level: "intermediate", levelPercent: 65, years: 2 },
    ],
  },
];
