import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";
import { projects } from "@/content/data/projects";

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? "https://yanivpertsovski.vercel.app";
const LOCALES = ["en", "he"];

function localizedUrls(path: string, priority = 0.8, changeFreq: MetadataRoute.Sitemap[0]["changeFrequency"] = "monthly") {
  return LOCALES.map((locale) => ({
    url: locale === "en" ? `${BASE}${path}` : `${BASE}/he${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    ...localizedUrls("/", 1.0, "weekly"),
    ...localizedUrls("/about", 0.9, "monthly"),
    ...localizedUrls("/experience", 0.8, "monthly"),
    ...localizedUrls("/certifications", 0.8, "monthly"),
    ...localizedUrls("/projects", 0.8, "weekly"),
    ...localizedUrls("/blog", 0.8, "daily"),
    ...localizedUrls("/research", 0.8, "weekly"),
    ...localizedUrls("/skills", 0.7, "monthly"),
    ...localizedUrls("/homelab", 0.7, "monthly"),
    ...localizedUrls("/resume", 0.9, "monthly"),
    ...localizedUrls("/contact", 0.7, "yearly"),
  ];

  const blogPages = getAllPosts().flatMap((post) =>
    localizedUrls(`/blog/${post.slug}`, 0.7, "monthly")
  );

  const projectPages = projects.flatMap((p) =>
    localizedUrls(`/projects/${p.slug}`, 0.7, "monthly")
  );

  return [...staticPages, ...blogPages, ...projectPages];
}
