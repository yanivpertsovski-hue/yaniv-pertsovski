import { Timeline } from "@/components/shared/Timeline";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { experience } from "@/content/data/experience";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "experience" });
  return {
    title: `${t("title")} | ${locale === "he" ? "יניב פרצובסקי" : "Yaniv Pertsovski"}`,
  };
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "experience" });
  const isHe = locale === "he";

  return (
    <div className="min-h-dvh py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16" dir={isHe ? "rtl" : "ltr"}>
          <p className="text-[var(--accent)] font-mono text-sm mb-4" dir="ltr">
            $ cat career.log
          </p>
          <h1 className="text-5xl font-bold tracking-tight mb-4 gradient-text">
            {t("title")}
          </h1>
          <p className="text-[var(--muted)] text-lg">{t("subtitle")}</p>
        </div>

        <Timeline items={experience} locale={locale} />
      </div>
    </div>
  );
}
