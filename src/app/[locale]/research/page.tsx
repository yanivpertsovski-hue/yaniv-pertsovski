import { ResearchContent } from "@/components/sections/research/ResearchContent";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "מחקר | יניב פרצובסקי",
    description: "מחקר אבטחה, write-ups, ניתוח פגיעויות וניסויי מעבדה",
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
