import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yaniv Pertsovski | Cybersecurity & Infrastructure Engineer",
    template: "%s | Yaniv Pertsovski",
  },
  description:
    "Senior Cybersecurity and Infrastructure Engineer specializing in enterprise security architecture, penetration testing, and critical infrastructure defense.",
  keywords: [
    "Yaniv Pertsovski",
    "יניב פרצובסקי",
    "Cybersecurity Engineer",
    "Infrastructure Engineer",
    "Information Security",
    "Penetration Testing",
    "IT Infrastructure",
    "Fortinet",
    "VMware",
  ],
  authors: [{ name: "Yaniv Pertsovski" }],
  creator: "Yaniv Pertsovski",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://yanivpertsovski.vercel.app"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "he_IL",
    siteName: "Yaniv Pertsovski",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Apply dark mode before first paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';if(t==='dark')document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className="min-h-dvh flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
