"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { TechBadge } from "./TechBadge";
import { formatFullDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  locale: string;
  index?: number;
}

export function BlogCard({ post, locale, index = 0 }: BlogCardProps) {
  const href = locale === "he"
    ? `/he/blog/${post.slug}`
    : `/blog/${post.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group glass rounded-2xl p-6 flex flex-col gap-4 hover:border-[var(--accent)]/40 transition-all duration-300"
    >
      <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {formatFullDate(post.date, locale)}
        </span>
        {post.readingTime && (
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readingTime}
          </span>
        )}
      </div>

      <h3 className="font-semibold text-lg leading-snug group-hover:text-[var(--accent)] transition-colors line-clamp-2">
        {post.title}
      </h3>

      <p className="text-[var(--muted)] text-sm leading-relaxed line-clamp-3">
        {post.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {post.tags.slice(0, 4).map((tag) => (
          <TechBadge key={tag} label={tag} />
        ))}
      </div>

      <div className="mt-auto pt-2">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm text-[var(--accent)] font-medium hover:gap-2.5 transition-all"
        >
          Read More <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  );
}
