"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/content/data/skills";
import { SkillBar } from "@/components/shared/SkillBar";
import { cn } from "@/lib/utils";
import type { SkillCategory } from "@/types";

export function SkillsContent({ locale }: { locale: string }) {
  const [active, setActive] = useState<SkillCategory | "all">("all");

  const filtered =
    active === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.category === active);

  return (
    <div className="min-h-dvh py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-[var(--accent)] font-mono text-sm mb-4">
            $ cat skills.json | jq .
          </p>
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-[var(--muted)] text-lg">
            Technologies and tools I use to design, build, and secure systems.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActive("all")}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
              active === "all"
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--surface-2)] text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--border)]"
            )}
          >
            All
          </button>
          {skillGroups.map((g) => (
            <button
              key={g.category}
              onClick={() => setActive(g.category)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                active === g.category
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--surface-2)] text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--border)]"
              )}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Skill groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
              className="glass rounded-2xl p-6 flex flex-col gap-5"
            >
              <h2 className="font-bold text-lg border-b border-[var(--border)] pb-3">
                <span className="gradient-text">{group.label}</span>
              </h2>
              <div className="flex flex-col gap-4">
                {group.skills.map((skill, si) => (
                  <SkillBar key={skill.id} skill={skill} index={si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
