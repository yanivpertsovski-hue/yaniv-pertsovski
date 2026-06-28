import type { HomeLab } from "@/types";

// TODO: Replace with your actual home lab configuration.
export const homelab: HomeLab = {
  description:
    "A fully virtualized enterprise-grade home lab built for security research, penetration testing practice, and infrastructure experimentation. Mirrors real-world enterprise environments including Active Directory, segmented networks, and dedicated security tooling.",
  devices: [
    {
      id: "dev-01",
      name: "TODO: Server Name",
      type: "vm-host",
      specs: "TODO: CPU / RAM / Storage",
      role: "Primary VMware ESXi hypervisor",
      os: "VMware ESXi 8.x",
      status: "active",
      tags: ["vmware", "hypervisor"],
    },
    {
      id: "dev-02",
      name: "TODO: Firewall Name",
      type: "firewall",
      specs: "TODO: Model",
      role: "Perimeter firewall and network segmentation",
      os: "FortiOS",
      status: "active",
      tags: ["fortinet", "firewall", "security"],
    },
    {
      id: "dev-03",
      name: "TODO: Storage Device",
      type: "storage",
      specs: "TODO: Capacity",
      role: "NAS / backup storage",
      status: "active",
      tags: ["storage", "backup"],
    },
  ],
  services: [
    {
      name: "Active Directory",
      description: "Windows Server domain controller for enterprise simulation",
    },
    {
      name: "SIEM",
      description: "TODO: SIEM platform for log aggregation and alerting",
    },
    {
      name: "Vulnerability Scanner",
      description: "TODO: Scanner for continuous internal assessment",
    },
    {
      name: "Docker Registry",
      description: "Private container registry for security tooling",
    },
  ],
  diagramUrl: "/images/homelab/diagram.png", // TODO: Add your network diagram
};
