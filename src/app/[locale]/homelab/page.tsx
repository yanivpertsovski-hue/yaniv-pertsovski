import { HomelabContent } from "@/components/sections/homelab/HomelabContent";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home Lab | Yaniv Pertsovski",
    description: "Personal cybersecurity research lab — servers, firewalls, VMware, and security tooling",
  };
}

export default async function HomelabPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <HomelabContent locale={locale} />;
}
