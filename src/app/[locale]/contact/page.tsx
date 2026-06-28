"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/LinkedinIcon";
import { GithubIcon } from "@/components/shared/GithubIcon";
import { profile } from "@/content/data/profile";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function ContactPage() {
  const t = useTranslations("contact");
  const params = useParams();
  const locale = (params?.locale as string) ?? "en";
  const isHe = locale === "he";

  const CONTACT_ITEMS = [
    {
      icon: Mail,
      label: t("email"),
      value: profile.social.email ?? "",
      href: `mailto:${profile.social.email}`,
      description: t("email_value"),
    },
    {
      icon: LinkedinIcon,
      label: t("linkedin"),
      value: t("linkedin_value"),
      href: profile.social.linkedin ?? "#",
      description: t("linkedin_desc"),
    },
    {
      icon: GithubIcon,
      label: t("github"),
      value: t("github_value"),
      href: profile.social.github ?? "#",
      description: t("github_desc"),
    },
    {
      icon: MapPin,
      label: t("location"),
      value: profile.location,
      description: t("location_value"),
    },
  ];

  return (
    <div className="min-h-dvh py-24 flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
          dir={isHe ? "rtl" : "ltr"}
        >
          <p className="text-[var(--accent)] font-mono text-sm mb-4" dir="ltr">
            $ ping yaniv@pertsovski.com
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 gradient-text">
            {t("title")}
          </h1>
          <p className="text-[var(--muted)] text-lg max-w-xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {CONTACT_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-6 flex items-start gap-5 group hover:border-[var(--accent)]/40 transition-all duration-300 block"
                  dir={isHe ? "rtl" : "ltr"}
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center shrink-0 group-hover:bg-[var(--accent)] transition-colors">
                    <item.icon
                      size={20}
                      className="text-[var(--accent)] group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <p className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                      {item.label}
                    </p>
                    <p className="text-sm text-[var(--foreground)] mt-0.5">{item.value}</p>
                    <p className="text-xs text-[var(--muted)] mt-1">{item.description}</p>
                  </div>
                </a>
              ) : (
                <div
                  className="glass rounded-2xl p-6 flex items-start gap-5"
                  dir={isHe ? "rtl" : "ltr"}
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-sm text-[var(--foreground)] mt-0.5">{item.value}</p>
                    <p className="text-xs text-[var(--muted)] mt-1">{item.description}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-[var(--muted)] text-sm mt-12"
        >
          {t("response_time")}
        </motion.p>
      </div>
    </div>
  );
}
