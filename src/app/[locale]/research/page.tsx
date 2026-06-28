import { ResearchContent } from "@/components/sections/research/ResearchContent";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Research | Yaniv Pertsovski",
    description: "Security research, write-ups, vulnerability analysis, and lab experiments",
  };
}

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ResearchContent locale={locale} />;
}
