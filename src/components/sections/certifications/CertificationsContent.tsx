"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CertificationCard } from "@/components/shared/CertificationCard";
import { certifications } from "@/content/data/certifications";
import type { CertCategory } from "@/types";
import { cn } from "@/lib/utils";

const CATEGORIES: { label: string; value: "all" | CertCategory }[] = [
  { label: "All", value: "all" },
  { label: "Cybersecurity", value: "cybersecurity" },
  { label: "Networking", value: "networking" },
  { label: "Cloud", value: "cloud" },
  { label: "Microsoft", value: "microsoft" },
  { label: "Linux", value: "linux" },
  { label: "DevOps", value: "devops" },
];

export function CertificationsContent({ locale }: { locale: string }) {
  const [active, setActive] = useState<"all" | CertCategory>("all");

  const filtered =
    active === "all"
      ? certifications
      : certifications.filter((c) => c.category === active);

  return (
    <div className="min-h-dvh py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-[var(--accent)] font-mono text-sm mb-4">
            $ ls ./certifications/
          </p>
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Certifications</span>
          </h1>
          <p className="text-[var(--muted)] text-lg">
            {certifications.length} certifications across security, networking, and cloud.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filter certifications by category"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              role="tab"
              aria-selected={active === cat.value}
              onClick={() => setActive(cat.value)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                active === cat.value
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--surface-2)] text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--border)]"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((cert, i) => (
              <CertificationCard key={cert.id} cert={cert} index={i} locale={locale} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-[var(--muted)] py-16">
            No certifications in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
