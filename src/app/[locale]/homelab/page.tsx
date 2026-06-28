import { HomelabContent } from "@/components/sections/homelab/HomelabContent";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "מעבדה ביתית | יניב פרצובסקי",
    description: "מעבדת מחקר אבטחה אישית — שרתים, חומות אש, VMware וכלי אבטחה",
  };
}

export default async function HomelabPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <HomelabContent locale={locale} />;
}
