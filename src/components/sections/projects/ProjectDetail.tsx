"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { GithubIcon } from "@/components/shared/GithubIcon";
import { TechBadge } from "@/components/shared/TechBadge";
import { formatDate } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectDetailProps {
  project: Project;
  locale: string;
}

const STATUS_COLORS: Record<string, string> = {
  active: "text-[var(--success)] bg-[var(--success)]/10",
  completed: "text-[var(--muted)] bg-[var(--surface-2)]",
  "in-progress": "text-[var(--warning)] bg-[var(--warning)]/10",
  archived: "text-[var(--muted)] bg-[var(--surface-2)]",
  planned: "text-[var(--accent)] bg-[var(--accent-muted)]",
};

export function ProjectDetail({ project, locale }: ProjectDetailProps) {
  const backHref = locale === "he" ? "/he/projects" : "/projects";

  return (
    <div className="min-h-dvh py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_COLORS[project.status]}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {project.status}
            </span>
            <span className="text-xs text-[var(--muted)] flex items-center gap-1">
              <Calendar size={12} />
              {formatDate(project.startDate, locale)}
              {project.endDate && ` — ${formatDate(project.endDate, locale)}`}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex gap-3 mt-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-[var(--border)] text-sm font-medium hover:border-[var(--accent)]/40 transition-all"
              >
                <GithubIcon size={15} /> GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-all"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 mb-8"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} label={tech} variant="accent" size="md" />
            ))}
          </div>
        </motion.div>

        {/* Long Description */}
        {project.longDescription && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <div className="prose text-[var(--muted)] leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </div>
          </motion.div>
        )}

        {/* Architecture */}
        {project.architecture && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold mb-4">Architecture</h2>
            <p className="text-[var(--muted)] leading-relaxed">{project.architecture}</p>
          </motion.div>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold mb-4">Challenges</h2>
            <ul className="flex flex-col gap-3">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--muted)]">
                  <span className="text-[var(--danger)] shrink-0 mt-0.5">⚡</span>
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Lessons */}
        {project.lessonsLearned && project.lessonsLearned.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold mb-4">Lessons Learned</h2>
            <ul className="flex flex-col gap-3">
              {project.lessonsLearned.map((l, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--muted)]">
                  <span className="text-[var(--success)] shrink-0 mt-0.5">✓</span>
                  {l}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Future */}
        {project.futureImprovements && project.futureImprovements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold mb-4">Future Improvements</h2>
            <ul className="flex flex-col gap-3">
              {project.futureImprovements.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--muted)]">
                  <span className="text-[var(--accent)] shrink-0 mt-0.5">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-[var(--border)]">
          <Tag size={14} className="text-[var(--muted)]" />
          {project.tags.map((tag) => (
            <TechBadge key={tag} label={tag} variant="ghost" />
          ))}
        </div>
      </div>
    </div>
  );
}
