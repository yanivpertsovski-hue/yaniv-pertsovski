import { CertificationsContent } from "@/components/sections/certifications/CertificationsContent";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "he" ? "הסמכות | יניב פרצובסקי" : "Certifications | Yaniv Pertsovski",
    description: "Professional certifications in cybersecurity, networking, and cloud",
  };
}

export default async function CertificationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CertificationsContent locale={locale} />;
}
