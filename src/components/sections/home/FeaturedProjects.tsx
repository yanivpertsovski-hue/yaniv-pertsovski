import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { projects } from "@/content/data/projects";
import { getTranslations } from "next-intl/server";

export async function FeaturedProjects({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home.sections" });
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12" dir="rtl">
          <SectionHeader title={t("latest_projects")} subtitle={t("latest_projects_sub")} className="mb-0" />
          <Link href="/projects" className="hidden sm:flex items-center gap-1.5 text-sm text-[var(--accent)] hover:gap-2.5 transition-all shrink-0">
            {t("view_all")} <ArrowRight size={14} className="rotate-180" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} locale={locale} index={i} />
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <Link href="/projects" className="flex items-center gap-1.5 text-sm text-[var(--accent)] hover:gap-2.5 transition-all" dir="rtl">
            <ArrowRight size={14} className="rotate-180" /> {t("view_all_projects")}
          </Link>
        </div>
      </div>
    </section>
  );
}
