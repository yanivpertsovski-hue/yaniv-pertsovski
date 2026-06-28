"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { skillGroups } from "@/content/data/skills";
import { SkillBar } from "@/components/shared/SkillBar";
import { useTranslations } from "next-intl";

export function SkillsPreview({ locale }: { locale: string }) {
  const t = useTranslations("home.sections");
  const tc = useTranslations("skills.categories");

  return (
    <section className="py-24 bg-[var(--surface)]" aria-labelledby="skills-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t("skills")}
          subtitle={t("skills_sub")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.slice(0, 4).map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.1 }}
              className="glass rounded-2xl p-5 flex flex-col gap-4"
            >
              <h3 className="font-semibold text-sm text-[var(--accent)]">
                {tc(group.category as Parameters<typeof tc>[0])}
              </h3>
              <div className="flex flex-col gap-3">
                {group.skills.slice(0, 4).map((skill, si) => (
                  <SkillBar key={skill.id} skill={skill} index={si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
