"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Mail, Terminal, Shield, Server } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/LinkedinIcon";
import { GithubIcon } from "@/components/shared/GithubIcon";
import { profile } from "@/content/data/profile";
import { useTranslations } from "next-intl";

export function HeroSection({ locale }: { locale: string }) {
  const t = useTranslations("home.hero");
  const lp = (href: string) => (locale === "he" ? `/he${href}` : href);

  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background effects */}
      <div className="hero-glow" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(59,130,246,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.06) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--success)]/10 border border-[var(--success)]/20 text-[var(--success)] text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
                {t("available")}
              </span>
            </motion.div>

            {/* Name */}
            <div>
              <p className="text-[var(--muted)] text-sm uppercase tracking-widest mb-2 font-mono">
                {t("greeting")}
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
                <span className="block">{profile.name.split(" ")[0]}</span>
                <span className="block gradient-text">
                  {profile.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
            </div>

            {/* Headline */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[var(--accent)]" />
              <h2 className="text-xl sm:text-2xl text-[var(--muted)] font-light">
                {profile.headline}
              </h2>
            </div>

            {/* Description */}
            <p className="text-[var(--muted)] text-base leading-relaxed max-w-xl">
              {profile.subheadline}
            </p>

            {/* Specializations */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Shield, label: "Security Architecture" },
                { icon: Terminal, label: "Penetration Testing" },
                { icon: Server, label: "Infrastructure" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-[var(--muted)] bg-[var(--surface-2)] border border-[var(--border)] px-3 py-1.5 rounded-lg"
                >
                  <Icon size={13} className="text-[var(--accent)]" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium text-sm transition-all hover:shadow-lg hover:shadow-[var(--accent)]/25 hover:-translate-y-0.5"
              >
                <Download size={15} />
                {t("cta_cv")}
              </a>

              <Link
                href={lp("/contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-[var(--border)] font-medium text-sm transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]/40"
              >
                <Mail size={15} />
                {t("cta_contact")}
              </Link>

              {profile.social.github && (
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-xl glass border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)]/40 transition-all hover:-translate-y-0.5"
                >
                  <GithubIcon size={18} />
                </a>
              )}

              {profile.social.linkedin && (
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-xl glass border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)]/40 transition-all hover:-translate-y-0.5"
                >
                  <LinkedinIcon size={18} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[var(--accent)]/20 to-purple-500/10 blur-2xl" />

              {/* Photo container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-[var(--border)] shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface-2)] to-[var(--surface)] flex items-center justify-center">
                  {/* TODO: Replace with real photo */}
                  <div className="flex flex-col items-center gap-3 text-[var(--muted)]">
                    <div className="w-20 h-20 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center">
                      <span className="text-3xl font-bold gradient-text">YP</span>
                    </div>
                    <p className="text-xs font-mono opacity-60">TODO: Add Photo</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-8 glass rounded-xl px-3 py-2 border border-[var(--border)] text-xs font-medium shadow-lg"
              >
                <span className="text-[var(--accent)]">★</span> Security Expert
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 border border-[var(--border)] text-xs font-medium shadow-lg"
              >
                <span className="font-mono text-[var(--success)]">$</span> 7+ Years
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 rounded-full border border-[var(--border)] flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[var(--accent)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
