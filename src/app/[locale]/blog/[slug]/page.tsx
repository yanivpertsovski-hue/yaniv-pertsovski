import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { BlogPostContent } from "@/components/sections/blog/BlogPostContent";
import { articleSchema } from "@/lib/schemas";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.frontmatter.title} | Yaniv Pertsovski`,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: post.frontmatter.title,
              description: post.frontmatter.description,
              date: post.frontmatter.date,
              slug,
            })
          ),
        }}
      />
      <BlogPostContent post={post} locale={locale} />
    </>
  );
}
