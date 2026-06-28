import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data, content } = matter(raw);
      const rt = readingTime(content);

      return {
        slug,
        title: data.title ?? "Untitled",
        description: data.description ?? "",
        date: data.date ?? "",
        tags: data.tags ?? [],
        category: data.category ?? "general",
        readingTime: `${Math.ceil(rt.minutes)} min read`,
        featured: data.featured ?? false,
        draft: data.draft ?? false,
        coverImage: data.coverImage,
      } satisfies BlogPost;
    })
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    slug,
    frontmatter: {
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      date: data.date ?? "",
      tags: data.tags ?? [],
      category: data.category ?? "general",
      readingTime: `${Math.ceil(rt.minutes)} min read`,
      featured: data.featured ?? false,
    },
    content,
  };
}
