"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" dir="ltr">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[var(--muted)] text-lg max-w-2xl" dir="ltr">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-px bg-gradient-to-r from-[var(--accent)] to-transparent",
          align === "center" && "mx-auto max-w-24"
        )}
      />
    </motion.div>
  );
}
