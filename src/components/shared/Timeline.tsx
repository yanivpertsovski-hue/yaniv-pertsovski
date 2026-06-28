"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { TechBadge } from "./TechBadge";
import { formatDate } from "@/lib/utils";
import type { ExperienceItem } from "@/types";

interface TimelineProps {
  items: ExperienceItem[];
  locale?: string;
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative" dir="rtl">
      {/* Vertical line — on right side for RTL */}
      <div className="absolute right-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent" />

      <div className="flex flex-col gap-10">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pr-12"
          >
            {/* Dot */}
            <div className="absolute right-2.5 top-1.5 w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--background)] shadow-[0_0_0_3px_var(--accent-muted)]" />

            <div className="glass rounded-2xl p-6 flex flex-col gap-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-bold text-lg">{item.position}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {item.companyUrl ? (
                      <a href={item.companyUrl} target="_blank" rel="noopener noreferrer"
                        className="text-[var(--accent)] font-medium text-sm flex items-center gap-1 hover:underline">
                        {item.company} <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="text-[var(--accent)] font-medium text-sm">{item.company}</span>
                    )}
                    <span className="text-[var(--muted)] text-xs flex items-center gap-1">
                      <MapPin size={11} /> {item.location}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-[var(--muted)] shrink-0 font-mono bg-[var(--surface-2)] px-3 py-1 rounded-full" dir="ltr">
                  {formatDate(item.startDate, "he")} —{" "}
                  {item.endDate ? formatDate(item.endDate, "he") : "הווה"}
                </div>
              </div>

              {/* Description */}
              <p className="text-[var(--muted)] text-sm">{item.description}</p>

              {/* Responsibilities */}
              {item.responsibilities.length > 0 && (
                <ul className="flex flex-col gap-1.5">
                  {item.responsibilities.map((r, ri) => (
                    <li key={ri} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                      <span className="text-[var(--accent)] mt-1.5 shrink-0 text-xs">◂</span>
                      {r}
                    </li>
                  ))}
                </ul>
              )}

              {/* Achievements */}
              {item.achievements.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2">
                    הישגים מרכזיים
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {item.achievements.map((a, ai) => (
                      <li key={ai} className="flex items-start gap-2 text-sm">
                        <span className="text-[var(--success)] mt-1.5 shrink-0 text-xs">✓</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.technologies.map((tech) => <TechBadge key={tech} label={tech} />)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
