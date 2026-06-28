import type { Certification } from "@/types";

// TODO: Replace with your real certifications.
// To add: copy a block, change the id, fill in your real credential data.
export const certifications: Certification[] = [
  {
    id: "cert-01",
    name: "TODO: Certification Name",
    issuer: "TODO: Issuer (e.g. CompTIA, EC-Council, ISC2)",
    issuerLogo: "/images/certs/issuer-logo.png", // TODO
    image: "/images/certs/cert-01.png",           // TODO
    issueDate: "2023-01",
    expirationDate: "2026-01",
    credentialId: "TODO-CREDENTIAL-ID",
    verificationUrl: "https://verify.example.com/TODO",
    skills: ["TODO: Skill 1", "TODO: Skill 2"],
    category: "cybersecurity",
    featured: true,
  },
  {
    id: "cert-02",
    name: "TODO: Certification Name",
    issuer: "TODO: Issuer",
    issueDate: "2022-06",
    skills: ["TODO: Skill 1"],
    category: "networking",
    featured: true,
  },
  {
    id: "cert-03",
    name: "TODO: Certification Name",
    issuer: "TODO: Issuer",
    issueDate: "2021-09",
    skills: ["TODO: Skill 1"],
    category: "cloud",
  },
];
