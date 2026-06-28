import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CertificationCard } from "@/components/shared/CertificationCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { certifications } from "@/content/data/certifications";

export function FeaturedCerts({ locale }: { locale: string }) {
  const featured = certifications.filter((c) => c.featured).slice(0, 3);
  const lp = (href: string) => (locale === "he" ? `/he${href}` : href);

  return (
    <section className="py-24 bg-[var(--surface)]" aria-labelledby="certs-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader
            title="Certifications"
            subtitle="Validated expertise"
            className="mb-0"
          />
          <Link
            href={lp("/certifications")}
            className="hidden sm:flex items-center gap-1.5 text-sm text-[var(--accent)] hover:gap-2.5 transition-all shrink-0"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((cert, i) => (
            <CertificationCard key={cert.id} cert={cert} index={i} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
