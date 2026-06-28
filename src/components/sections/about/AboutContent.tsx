"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Target, Heart, Compass, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { profile } from "@/content/data/profile";
import { stats } from "@/content/data/stats";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const VALUES = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Security is about details. One misconfiguration can be catastrophic. I approach every system with exactness and thoroughness.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "The threat landscape evolves daily. I invest heavily in staying current with new attack techniques, defenses, and technologies.",
  },
  {
    icon: Heart,
    title: "Ownership",
    description:
      "I treat the systems I protect as my own. That mindset drives decisions that prioritize long-term security over shortcuts.",
  },
  {
    icon: Compass,
    title: "Transparency",
    description:
      "Security findings, risks, and recommendations should be communicated clearly to all stakeholders — technical and non-technical.",
  },
];

export function AboutContent({ locale }: { locale: string }) {
  const bio = locale === "he" ? profile.bioHe : profile.bio;

  return (
    <div className="min-h-dvh">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="hero-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[var(--accent)] font-mono text-sm mb-4">
              $ whoami
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
              About{" "}
              <span className="gradient-text">Me</span>
            </h1>
            <p className="text-[var(--muted)] text-xl max-w-2xl leading-relaxed">
              {profile.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Photo & Quick info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {/* Photo placeholder */}
              <div className="aspect-square w-full max-w-xs mx-auto lg:mx-0 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-[var(--muted)]">
                  <span className="text-5xl font-bold gradient-text">YP</span>
                  <p className="text-xs font-mono opacity-60">TODO: Add Photo</p>
                </div>
              </div>

              {/* Quick info */}
              <div className="glass rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={14} className="text-[var(--accent)]" />
                  <span className="text-[var(--muted)]">{profile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={14} className="text-[var(--accent)]" />
                  <a
                    href={`mailto:${profile.social.email}`}
                    className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {profile.social.email}
                  </a>
                </div>

                <div className="border-t border-[var(--border)] pt-3 mt-1 grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-xl font-bold gradient-text">
                        <AnimatedCounter value={s.value} suffix={s.suffix} />
                      </div>
                      <p className="text-xs text-[var(--muted)] mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">Professional Biography</h2>
                <div className="prose text-[var(--muted)] whitespace-pre-line leading-relaxed">
                  {bio}
                </div>
              </div>

              {/* Mission */}
              <div className="glass rounded-2xl p-6 border-l-4 border-[var(--accent)]">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Target size={16} className="text-[var(--accent)]" />
                  Mission
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  TODO: Write your professional mission statement here. What drives your work?
                  What impact do you want to have in cybersecurity?
                </p>
              </div>

              {/* Current Focus */}
              <div>
                <h3 className="font-semibold mb-3">Current Focus</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    "TODO: Current focus area 1 (e.g. Red Team operations)",
                    "TODO: Current focus area 2 (e.g. Cloud security architecture)",
                    "TODO: Current certification pursuit",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                      <span className="text-[var(--accent)] mt-1 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Values" subtitle="What guides my work" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center">
                  <v.icon size={18} className="text-[var(--accent)]" />
                </div>
                <h3 className="font-semibold">{v.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Professional Philosophy"
            align="center"
          />
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl text-[var(--muted)] leading-relaxed italic font-light"
          >
            "TODO: Add your professional philosophy or a quote that defines your
            approach to security and engineering."
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
}
