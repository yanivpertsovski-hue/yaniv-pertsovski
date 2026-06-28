import { profile } from "@/content/data/profile";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://yanivpertsovski.vercel.app";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.nameHe,
    url: BASE_URL,
    email: profile.social.email,
    sameAs: [
      profile.social.github,
      profile.social.linkedin,
    ].filter(Boolean),
    jobTitle: "Senior Cybersecurity & Infrastructure Engineer",
    knowsAbout: [
      "Cybersecurity",
      "Information Security",
      "Penetration Testing",
      "Network Security",
      "IT Infrastructure",
      "Active Directory",
      "Fortinet",
      "VMware",
    ],
    nationality: "Israeli",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: profile.name,
    url: BASE_URL,
    description: profile.headline,
    inLanguage: ["en", "he"],
    author: { "@type": "Person", name: profile.name },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: profile.name },
    url: `${BASE_URL}/blog/${post.slug}`,
  };
}
