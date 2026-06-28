import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { personSchema, websiteSchema } from "@/lib/schemas";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "https://yanivpertsovski.vercel.app";
  const isHe = locale === "he";

  return {
    alternates: {
      canonical: isHe ? `${base}/he` : base,
      languages: {
        en: base,
        he: `${base}/he`,
      },
    },
    openGraph: {
      locale: isHe ? "he_IL" : "en_US",
      alternateLocale: isHe ? "en_US" : "he_IL",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const isRtl = locale === "he";

  return (
    <NextIntlClientProvider messages={messages}>
      {/* Inject JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([personSchema(), websiteSchema()]),
        }}
      />
      {/* Set lang/dir on <html> via client script to avoid double html/body */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="${locale}";document.documentElement.dir="${isRtl ? "rtl" : "ltr"}";`,
        }}
      />
      <ThemeProvider>
        <Navbar locale={locale} />
        <main className="flex-1 pt-16">{children}</main>
        <Footer locale={locale} />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
