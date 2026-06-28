import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { projects } from "@/content/data/projects";

export function FeaturedProjects({ locale }: { locale: string }) {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const lp = (href: string) => (locale === "he" ? `/he${href}` : href);

  return (
    <section className="py-24" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader
            title="Latest Projects"
            subtitle="What I've been building"
            className="mb-0"
          />
          <Link
            href={lp("/projects")}
            className="hidden sm:flex items-center gap-1.5 text-sm text-[var(--accent)] hover:gap-2.5 transition-all shrink-0"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} locale={locale} index={i} />
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href={lp("/projects")}
            className="flex items-center gap-1.5 text-sm text-[var(--accent)] hover:gap-2.5 transition-all"
          >
            View All Projects <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
