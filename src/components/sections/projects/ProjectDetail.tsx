"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Calendar, Tag } from "lucide-react";
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

const STATUS_HE: Record<string, string> = {
  active: "פעיל",
  completed: "הושלם",
  "in-progress": "בתהליך",
  archived: "ארכיון",
  planned: "מתוכנן",
};

export function ProjectDetail({ project, locale: _locale }: ProjectDetailProps) {
  return (
    <div className="min-h-dvh py-24" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            חזרה לפרויקטים <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_COLORS[project.status]}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {STATUS_HE[project.status] ?? project.status}
            </span>
            <span className="text-xs text-[var(--muted)] flex items-center gap-1" dir="ltr">
              <Calendar size={12} />
              {formatDate(project.startDate, "he")}
              {project.endDate && ` — ${formatDate(project.endDate, "he")}`}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed">{project.description}</p>

          <div className="flex gap-3 mt-6">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-[var(--border)] text-sm font-medium hover:border-[var(--accent)]/40 transition-all">
                <GithubIcon size={15} /> GitHub
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-all">
                <ExternalLink size={15} /> הדגמה חיה
              </a>
            )}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass rounded-2xl p-6 mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">טכנולוגיות</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => <TechBadge key={tech} label={tech} variant="accent" size="md" />)}
          </div>
        </motion.div>

        {project.longDescription && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">סקירה</h2>
            <div className="prose text-[var(--muted)] leading-relaxed whitespace-pre-line">{project.longDescription}</div>
          </motion.div>
        )}

        {project.architecture && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">ארכיטקטורה</h2>
            <p className="text-[var(--muted)] leading-relaxed">{project.architecture}</p>
          </motion.div>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">אתגרים</h2>
            <ul className="flex flex-col gap-3">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--muted)]">
                  <span className="text-[var(--danger)] shrink-0 mt-0.5">⚡</span>{c}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {project.lessonsLearned && project.lessonsLearned.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">לקחים</h2>
            <ul className="flex flex-col gap-3">
              {project.lessonsLearned.map((l, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--muted)]">
                  <span className="text-[var(--success)] shrink-0 mt-0.5">✓</span>{l}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {project.futureImprovements && project.futureImprovements.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">שיפורים עתידיים</h2>
            <ul className="flex flex-col gap-3">
              {project.futureImprovements.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--muted)]">
                  <span className="text-[var(--accent)] shrink-0 mt-0.5">←</span>{f}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-[var(--border)]">
          <Tag size={14} className="text-[var(--muted)]" />
          {project.tags.map((tag) => <TechBadge key={tag} label={tag} variant="ghost" />)}
        </div>
      </div>
    </div>
  );
}
