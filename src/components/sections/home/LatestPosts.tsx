import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/shared/BlogCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { getAllPosts } from "@/lib/mdx";

export function LatestPosts({ locale }: { locale: string }) {
  const posts = getAllPosts().slice(0, 3);
  const lp = (href: string) => (locale === "he" ? `/he${href}` : href);

  if (posts.length === 0) return null;

  return (
    <section className="py-24" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader
            title="Latest Articles"
            subtitle="Thoughts on security and infrastructure"
            className="mb-0"
          />
          <Link
            href={lp("/blog")}
            className="hidden sm:flex items-center gap-1.5 text-sm text-[var(--accent)] hover:gap-2.5 transition-all shrink-0"
          >
            View All <ArrowRight size={14} />
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
