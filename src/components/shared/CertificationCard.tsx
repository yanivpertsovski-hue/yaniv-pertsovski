"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, Shield } from "lucide-react";
import { TechBadge } from "./TechBadge";
import { formatDate } from "@/lib/utils";
import type { Certification } from "@/types";

interface CertificationCardProps {
  cert: Certification;
  index?: number;
  locale?: string;
}

export function CertificationCard({
  cert,
  index = 0,
  locale = "en",
}: CertificationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-[var(--accent)]/40 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent)]/30 transition-colors">
          {cert.issuerLogo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cert.issuerLogo}
              alt={cert.issuer}
              className="w-8 h-8 object-contain"
            />
          ) : (
            <Shield size={20} className="text-[var(--accent)]" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm leading-tight line-clamp-2">
            {cert.name}
          </h3>
          <p className="text-[var(--muted)] text-xs mt-0.5">{cert.issuer}</p>
        </div>

        {cert.verificationUrl && (
          <a
            href={cert.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Verify certification"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors shrink-0"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      {/* Dates */}
      <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {formatDate(cert.issueDate, locale)}
        </span>
        {cert.expirationDate && (
          <>
            <span>→</span>
            <span>{formatDate(cert.expirationDate, locale)}</span>
          </>
        )}
      </div>

      {/* Credential ID */}
      {cert.credentialId && (
        <p className="text-xs text-[var(--muted)] font-mono bg-[var(--surface-2)] px-2 py-1 rounded-md truncate">
          {cert.credentialId}
        </p>
      )}

      {/* Skills */}
      {cert.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {cert.skills.slice(0, 4).map((s) => (
            <TechBadge key={s} label={s} />
          ))}
        </div>
      )}
    </motion.article>
  );
}
