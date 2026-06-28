import { notFound } from "next/navigation";
import { projects } from "@/content/data/projects";
import { ProjectDetail } from "@/components/sections/projects/ProjectDetail";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Yaniv Pertsovski`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return <ProjectDetail project={project} locale={locale} />;
}
