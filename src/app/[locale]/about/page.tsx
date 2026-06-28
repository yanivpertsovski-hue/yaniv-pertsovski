import { profile } from "@/content/data/profile";
import { AboutContent } from "@/components/sections/about/AboutContent";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "he" ? "אודות | יניב פרצובסקי" : "About | Yaniv Pertsovski",
    description: profile.subheadline,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AboutContent locale={locale} />;
}
