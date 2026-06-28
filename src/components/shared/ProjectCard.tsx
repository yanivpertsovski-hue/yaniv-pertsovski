"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { TechBadge } from "./TechBadge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  locale: string;
  index?: number;
}

const STATUS_COLORS: Record<string, string> = {
  active: "text-[var(--success)] bg-[var(--success)]/10",
  completed: "text-[var(--muted)] bg-[var(--surface-2)]",
  "in-progress": "text-[var(--warning)] bg-[var(--warning)]/10",
  archived: "text-[var(--muted)] bg-[var(--surface-2)]",
  planned: "text-[var(--accent)] bg-[var(--accent-muted)]",
};

const STATUS_HE: Record<string, string> = {
  active: "פעיל",
  completed: "הושלם",
  "in-progress": "בתהליך",
  archived: "ארכיון",
  planned: "מתוכנן",
};

export function ProjectCard({ project, locale: _locale, index = 0 }: ProjectCardProps) {
  const href = `/projects/${project.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group glass rounded-2xl p-6 flex flex-col gap-4 hover:border-[var(--accent)]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/5"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium mb-2",
              STATUS_COLORS[project.status] ?? STATUS_COLORS.completed
            )}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {STATUS_HE[project.status] ?? project.status}
          </span>
          <h3 className="font-semibold text-lg leading-tight group-hover:text-[var(--accent)] transition-colors">
            {project.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              onClick={(e) => e.stopPropagation()}
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <GithubIcon size={16} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} Demo`}
              onClick={(e) => e.stopPropagation()}
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-[var(--muted)] text-sm leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 5).map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
        {project.technologies.length > 5 && (
          <TechBadge label={`+${project.technologies.length - 5}`} variant="ghost" />
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-2">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm text-[var(--accent)] font-medium hover:gap-2.5 transition-all"
        >
          <ArrowLeft size={14} /> צפה בפרויקט
        </Link>
      </div>
    </motion.article>
  );
}
