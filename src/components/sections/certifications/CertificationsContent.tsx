"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CertificationCard } from "@/components/shared/CertificationCard";
import { certifications } from "@/content/data/certifications";
import type { CertCategory } from "@/types";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function CertificationsContent({ locale }: { locale: string }) {
  const t = useTranslations("certifications");
  const isHe = locale === "he";
  const [active, setActive] = useState<"all" | CertCategory>("all");

  const CATEGORIES: { labelKey: string; value: "all" | CertCategory }[] = [
    { labelKey: "all",           value: "all"          },
    { labelKey: "cybersecurity", value: "cybersecurity" },
    { labelKey: "networking",    value: "networking"    },
    { labelKey: "cloud",         value: "cloud"         },
    { labelKey: "microsoft",     value: "microsoft"     },
    { labelKey: "linux",         value: "linux"         },
    { labelKey: "devops",        value: "devops"        },
  ];

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
          dir={isHe ? "rtl" : "ltr"}
        >
          <p className="text-[var(--accent)] font-mono text-sm mb-4" dir="ltr">
            $ ls ./certifications/
          </p>
          <h1 className="text-5xl font-bold tracking-tight mb-4 gradient-text">
            {t("title")}
          </h1>
          <p className="text-[var(--muted)] text-lg">{t("subtitle")}</p>
        </motion.div>

        {/* Filter tabs */}
        <div
          className={cn("flex flex-wrap gap-2 mb-10", isHe && "justify-end")}
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
              {cat.labelKey === "all"
                ? t("all")
                : t(`categories.${cat.labelKey}` as Parameters<typeof t>[0])}
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
          <p className="text-center text-[var(--muted)] py-16">{t("empty")}</p>
        )}
      </div>
    </div>
  );
}
