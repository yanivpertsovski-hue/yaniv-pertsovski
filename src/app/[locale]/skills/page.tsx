import { SkillsContent } from "@/components/sections/skills/SkillsContent";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "כישורים | יניב פרצובסקי",
    description: "כישורים טכניים באבטחת סייבר, רשתות, תשתיות, ענן ותכנות",
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
