import { ResumeContent } from "@/components/sections/resume/ResumeContent";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resume | Yaniv Pertsovski",
    description: "Professional resume of Yaniv Pertsovski — Cybersecurity & Infrastructure Engineer",
  };
}

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ResumeContent locale={locale} />;
}
