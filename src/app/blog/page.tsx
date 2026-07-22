// src/app/blog/page.tsx
import type { Metadata } from "next";
import BlogPageClient from "@/components/blog/BlogPageClient";
import { featuredPost, posts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Travel Blog — Guides, Stories & Itineraries",
  description:
    "Browse all travel guides on Kudozz Club — destination deep-dives, honest itineraries, budget breakdowns and insider tips written by real travellers.",
  alternates: { canonical: "https://club.kudozz.in/blog" },
};

function BlogSchema({
  entries,
}: {
  entries: { slug: string; title: string; excerpt: string; image: string }[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Kudozz Club Travel Blog",
          url: "https://club.kudozz.in/blog",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/favicon.ico",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://club.kudozz.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://club.kudozz.in/blog",
              },
            ],
          },
          blogPost: entries.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.excerpt,
            url: `https://club.kudozz.in/blog/${p.slug}`,
            image: `https://club.kudozz.in${p.image}`,
          })),
        }),
      }}
    />
  );
}

export default function BlogPage() {
  return (
    <>
      <BlogSchema entries={[featuredPost, ...posts]} />
      <BlogPageClient />
    </>
  );
}
