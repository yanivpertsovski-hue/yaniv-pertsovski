import { BlogCard } from "@/components/shared/BlogCard";
import { getAllPosts } from "@/lib/mdx";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "בלוג | יניב פרצובסקי",
    description: "מאמרים טכניים על אבטחת סייבר, תשתיות והנדסה",
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = getAllPosts();

  return (
    <div className="min-h-dvh py-24" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-[var(--accent)] font-mono text-sm mb-4" dir="ltr">
            $ cat /var/log/thoughts.log
          </p>
          <h1 className="text-5xl font-bold tracking-tight mb-4 gradient-text">בלוג</h1>
          <p className="text-[var(--muted)] text-lg">מאמרים טכניים על אבטחה, תשתיות והנדסה.</p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-24 text-[var(--muted)]">
            <p className="text-lg">אין פוסטים עדיין.</p>
            <p className="text-sm mt-2">
              הוסף קבצי MDX לתיקייה{" "}
              <code className="bg-[var(--surface-2)] px-1 py-0.5 rounded text-xs">src/content/blog/</code>
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} locale={locale} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
