"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { TechBadge } from "@/components/shared/TechBadge";
import { formatFullDate } from "@/lib/utils";

interface BlogPostContentProps {
  post: {
    slug: string;
    frontmatter: {
      title: string;
      description: string;
      date: string;
      tags: string[];
      category: string;
      readingTime: string;
    };
    content: string;
  };
  locale: string;
}

export function BlogPostContent({ post, locale: _locale }: BlogPostContentProps) {
  return (
    <div className="min-h-dvh py-24" dir="rtl">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            חזרה לבלוג <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.frontmatter.tags.map((tag) => <TechBadge key={tag} label={tag} variant="accent" />)}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6">
            {post.frontmatter.title}
          </h1>

          <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">{post.frontmatter.description}</p>

          <div className="flex items-center gap-4 text-sm text-[var(--muted)] border-t border-[var(--border)] pt-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {formatFullDate(post.frontmatter.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.frontmatter.readingTime}
            </span>
          </div>
        </motion.header>

        {/* MDX Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg"
          style={{ maxWidth: "none" }}
        >
          <MDXRemote source={post.content} />
        </motion.div>
      </div>
    </div>
  );
}
