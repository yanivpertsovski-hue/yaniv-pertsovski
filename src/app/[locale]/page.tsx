import { HeroSection } from "@/components/sections/home/HeroSection";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { FeaturedCerts } from "@/components/sections/home/FeaturedCerts";
import { LatestPosts } from "@/components/sections/home/LatestPosts";
import { SkillsPreview } from "@/components/sections/home/SkillsPreview";
import { personSchema } from "@/lib/schemas";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHe = locale === "he";

  return {
    title: isHe
      ? "יניב פרצובסקי | מהנדס אבטחת סייבר ותשתיות"
      : "Yaniv Pertsovski | Cybersecurity & Infrastructure Engineer",
    description: isHe
      ? "מהנדס בכיר לאבטחת סייבר ותשתיות המתמחה בארכיטקטורת אבטחה ארגונית ובדיקות חדירה"
      : "Senior Cybersecurity and Infrastructure Engineer specializing in enterprise security architecture, penetration testing, and critical infrastructure defense.",
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
      <HeroSection locale={locale} />
      <StatsSection />
      <FeaturedProjects locale={locale} />
      <FeaturedCerts locale={locale} />
      <LatestPosts locale={locale} />
      <SkillsPreview />
    </>
  );
}
