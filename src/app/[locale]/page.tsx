import { HeroSection } from "@/components/sections/home/HeroSection";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { FeaturedCerts } from "@/components/sections/home/FeaturedCerts";
import { LatestPosts } from "@/components/sections/home/LatestPosts";
import { SkillsPreview } from "@/components/sections/home/SkillsPreview";
import { personSchema } from "@/lib/schemas";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "יניב פרצובסקי | מהנדס אבטחת סייבר ותשתיות",
    description: "מהנדס בכיר לאבטחת סייבר ותשתיות המתמחה בארכיטקטורת אבטחה ארגונית ובדיקות חדירה",
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
      />
      <HeroSection />
      <StatsSection />
      <FeaturedProjects locale={locale} />
      <FeaturedCerts locale={locale} />
      <LatestPosts locale={locale} />
      <SkillsPreview locale={locale} />
    </>
  );
}
