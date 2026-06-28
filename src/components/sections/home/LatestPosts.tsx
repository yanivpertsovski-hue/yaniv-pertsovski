import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/shared/BlogCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { getAllPosts } from "@/lib/mdx";
import { getTranslations } from "next-intl/server";

export async function LatestPosts({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home.sections" });
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-24" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12" dir="rtl">
          <SectionHeader title={t("latest_articles")} subtitle={t("latest_articles_sub")} className="mb-0" />
          <Link href="/blog" className="hidden sm:flex items-center gap-1.5 text-sm text-[var(--accent)] hover:gap-2.5 transition-all shrink-0">
            {t("view_all")} <ArrowRight size={14} className="rotate-180" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} locale={locale} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
