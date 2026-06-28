"use client";

import { motion } from "framer-motion";
import { Download, Printer } from "lucide-react";
import { profile } from "@/content/data/profile";
import { experience } from "@/content/data/experience";
import { certifications } from "@/content/data/certifications";
import { skillGroups } from "@/content/data/skills";
import { formatDate } from "@/lib/utils";
import { TechBadge } from "@/components/shared/TechBadge";
import { useTranslations } from "next-intl";

export function ResumeContent({ locale }: { locale: string }) {
  const t = useTranslations("resume");
  const te = useTranslations("experience");
  const tc = useTranslations("certifications");
  const tsk = useTranslations("skills.categories");
  const isHe = locale === "he";
  const displayName = isHe ? profile.nameHe : profile.name;

  return (
    <div className="min-h-dvh py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls */}
        <div
          className="flex items-center justify-between mb-10 print:hidden"
          dir={isHe ? "rtl" : "ltr"}
        >
          <div>
            <p className="text-[var(--accent)] font-mono text-sm mb-1" dir="ltr">
              $ cat resume.pdf
            </p>
            <h1 className="text-3xl font-bold">{t("title")}</h1>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-[var(--border)] text-sm font-medium hover:border-[var(--accent)]/40 transition-all"
            >
              <Printer size={15} /> {t("print")}
            </button>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-all"
            >
              <Download size={15} /> {t("download")}
            </a>
          </div>
        </div>

        {/* Resume document */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 sm:p-12 print:shadow-none print:border-0 print:rounded-none"
          id="resume"
          dir={isHe ? "rtl" : "ltr"}
        >
          {/* Header */}
          <header className="border-b border-[var(--border)] pb-8 mb-8">
            <h2 className="text-4xl font-bold tracking-tight">{displayName}</h2>
            <p className="text-[var(--accent)] text-lg mt-1">
              {isHe ? "מהנדס בכיר לאבטחת סייבר ותשתיות" : profile.headline}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm text-[var(--muted)]" dir="ltr">
              {profile.social.email && <span>{profile.social.email}</span>}
              {profile.social.linkedin && (
                <a href={profile.social.linkedin} className="hover:text-[var(--foreground)]">LinkedIn</a>
              )}
              {profile.social.github && (
                <a href={profile.social.github} className="hover:text-[var(--foreground)]">GitHub</a>
              )}
              <span>{profile.location}</span>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-3">
              {t("summary")}
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {isHe ? profile.bioHe.split("\n")[0] : profile.subheadline}
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-4">
              {te("title")}
            </h3>
            <div className="flex flex-col gap-6">
              {experience.map((item) => (
                <div key={item.id}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold">{item.position}</p>
                      <p className="text-[var(--accent)] text-sm">{item.company}</p>
                    </div>
                    <p className="text-xs text-[var(--muted)] shrink-0 font-mono" dir="ltr">
                      {formatDate(item.startDate, locale)} –{" "}
                      {item.endDate ? formatDate(item.endDate, locale) : te("present")}
                    </p>
                  </div>
                  <p className="text-sm text-[var(--muted)] mt-2">{item.description}</p>
                  {item.achievements.length > 0 && (
                    <ul className="mt-2 flex flex-col gap-1">
                      {item.achievements.map((a, i) => (
                        <li key={i} className="text-xs text-[var(--muted)] flex gap-2">
                          <span className="text-[var(--success)] shrink-0">✓</span> {a}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {item.technologies.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-4">
              {tc("title")}
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex items-center gap-3 text-sm">
                  <span className="text-[var(--accent)] shrink-0">◆</span>
                  <div>
                    <p className="font-medium text-sm leading-none">{cert.name}</p>
                    <p className="text-xs text-[var(--muted)] mt-0.5">
                      {cert.issuer} · {formatDate(cert.issueDate, locale)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills summary */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-4">
              {t("core_skills")}
            </h3>
            <div className="flex flex-col gap-3">
              {skillGroups.slice(0, 4).map((group) => (
                <div key={group.category} className="flex gap-3 text-sm">
                  <span className="text-[var(--muted)] shrink-0 w-36 font-medium">
                    {tsk(group.category as Parameters<typeof tsk>[0])}
                  </span>
                  <span className="text-[var(--muted)]">
                    {group.skills.map((s) => s.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>

      <style>{`
        @media print {
          body { background: white; color: black; }
          .print\\:hidden { display: none !important; }
          header.fixed { display: none; }
          footer { display: none; }
        }
      `}</style>
    </div>
  );
}
