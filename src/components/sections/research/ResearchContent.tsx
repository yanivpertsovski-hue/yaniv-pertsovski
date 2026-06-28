"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FlaskConical, FileText, Microscope, Lightbulb, StickyNote, ExternalLink } from "lucide-react";
import { research } from "@/content/data/research";
import { TechBadge } from "@/components/shared/TechBadge";
import { formatFullDate, cn } from "@/lib/utils";
import type { ResearchItem } from "@/types";

const TYPE_ICONS = {
  writeup: FileText,
  "vuln-analysis": Microscope,
  lab: FlaskConical,
  experiment: Lightbulb,
  note: StickyNote,
};

const TYPE_LABELS = {
  writeup: "Write-Up",
  "vuln-analysis": "Vuln Analysis",
  lab: "Lab",
  experiment: "Experiment",
  note: "Technical Note",
};

const SEVERITY_COLORS = {
  critical: "text-red-400 bg-red-400/10",
  high: "text-orange-400 bg-orange-400/10",
  medium: "text-yellow-400 bg-yellow-400/10",
  low: "text-green-400 bg-green-400/10",
  info: "text-blue-400 bg-blue-400/10",
};

function ResearchCard({ item, index }: { item: ResearchItem; index: number }) {
  const Icon = TYPE_ICONS[item.type];
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-[var(--accent)]/40 transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center shrink-0">
          <Icon size={18} className="text-[var(--accent)]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-xs font-medium text-[var(--muted)] bg-[var(--surface-2)] px-2 py-0.5 rounded-full">
              {TYPE_LABELS[item.type]}
            </span>
            {item.severity && (
              <span
                className={cn(
                  "text-xs font-medium px-2 py-0.5 rounded-full",
                  SEVERITY_COLORS[item.severity]
                )}
              >
                {item.severity.toUpperCase()}
              </span>
            )}
          </div>
          <h3 className="font-semibold leading-snug group-hover:text-[var(--accent)] transition-colors">
            {item.title}
          </h3>
        </div>
      </div>

      <p className="text-[var(--muted)] text-sm leading-relaxed">{item.description}</p>

      {item.cveIds && item.cveIds.length > 0 && (
        <div className="flex gap-1.5 flex-wrap">
          {item.cveIds.map((cve) => (
            <span
              key={cve}
              className="font-mono text-xs bg-[var(--danger)]/10 text-[var(--danger)] px-2 py-0.5 rounded"
            >
              {cve}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <TechBadge key={tag} label={tag} />
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
        <span className="text-xs text-[var(--muted)]">
          {formatFullDate(item.date)}
        </span>
        {item.links?.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-[var(--accent)] hover:underline"
          >
            {link.label} <ExternalLink size={11} />
          </a>
        ))}
      </div>
    </motion.article>
  );
}

export function ResearchContent({ locale }: { locale: string }) {
  const published = research.filter((r) => r.status !== "draft");

  return (
    <div className="min-h-dvh py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-[var(--accent)] font-mono text-sm mb-4">
            $ grep -r "CVE\|research\|writeup" ./notes/
          </p>
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Research</span>
          </h1>
          <p className="text-[var(--muted)] text-lg">
            Security research, write-ups, vulnerability analysis, and lab experiments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {published.map((item, i) => (
            <ResearchCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
