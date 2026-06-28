import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/content/data/projects";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "פרויקטים | יניב פרצובסקי",
    description: "כלי אבטחה, פרויקטי תשתיות ותרומות קוד פתוח",
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-dvh py-24" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-[var(--accent)] font-mono text-sm mb-4" dir="ltr">$ ls -la ./projects/</p>
          <h1 className="text-5xl font-bold tracking-tight mb-4 gradient-text">פרויקטים</h1>
          <p className="text-[var(--muted)] text-lg">
            {projects.length} פרויקטים — כלי אבטחה, תשתיות ומחקר.
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
