import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/content/data/projects";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "he" ? "פרויקטים | יניב פרצובסקי" : "Projects | Yaniv Pertsovski",
    description: "Security tools, infrastructure projects, and open-source contributions",
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-dvh py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-[var(--accent)] font-mono text-sm mb-4">
            $ ls -la ./projects/
          </p>
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-[var(--muted)] text-lg">
            {projects.length} projects — security tools, infrastructure, and research.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} locale={locale} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
