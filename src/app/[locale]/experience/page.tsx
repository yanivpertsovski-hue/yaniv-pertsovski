import { Timeline } from "@/components/shared/Timeline";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { experience } from "@/content/data/experience";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "he" ? "ניסיון | יניב פרצובסקי" : "Experience | Yaniv Pertsovski",
    description: "Professional experience in cybersecurity and infrastructure engineering",
  };
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-dvh py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-[var(--accent)] font-mono text-sm mb-4">
            $ cat career.log
          </p>
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Professional{" "}
            <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-[var(--muted)] text-lg">
            My journey through cybersecurity and infrastructure engineering.
          </p>
        </div>

        <Timeline items={experience} locale={locale} />
      </div>
    </div>
  );
}
