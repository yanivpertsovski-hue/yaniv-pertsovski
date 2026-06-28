"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { stats } from "@/content/data/stats";
import { useTranslations } from "next-intl";

export function StatsSection() {
  const t = useTranslations("stats");

  return (
    <section
      className="relative py-20 border-y border-[var(--border)]"
      aria-label="Career statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {t(stat.labelKey as "years" | "certifications" | "projects" | "assessments")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
