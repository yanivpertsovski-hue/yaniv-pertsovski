"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types";

interface SkillBarProps {
  skill: Skill;
  index?: number;
}

const LEVEL_COLOR: Record<string, string> = {
  beginner: "bg-[var(--warning)]",
  intermediate: "bg-[var(--accent)]",
  advanced: "bg-[var(--accent)]",
  expert: "bg-gradient-to-r from-[var(--accent)] to-purple-500",
};

export function SkillBar({ skill, index = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{skill.name}</span>
        <div className="flex items-center gap-2">
          {skill.years && (
            <span className="text-[var(--muted)] text-xs">{skill.years}y</span>
          )}
          <span
            className={cn(
              "text-xs px-2 py-0.5 rounded-full font-medium",
              skill.level === "expert" && "bg-purple-500/10 text-purple-400",
              skill.level === "advanced" && "bg-[var(--accent-muted)] text-[var(--accent)]",
              skill.level === "intermediate" && "bg-[var(--surface-2)] text-[var(--muted)]",
              skill.level === "beginner" && "bg-[var(--warning)]/10 text-[var(--warning)]"
            )}
          >
            {skill.level}
          </span>
        </div>
      </div>

      <div className="h-1.5 w-full rounded-full bg-[var(--surface-2)] overflow-hidden">
        <motion.div
          className={cn("h-full rounded-full", LEVEL_COLOR[skill.level])}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.levelPercent}%` } : { width: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.05,
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  );
}
