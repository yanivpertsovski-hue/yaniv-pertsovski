import { SkillsContent } from "@/components/sections/skills/SkillsContent";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Skills | Yaniv Pertsovski",
    description: "Technical skills in cybersecurity, networking, infrastructure, cloud, and programming",
  };
}

export default async function SkillsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <SkillsContent locale={locale} />;
}
