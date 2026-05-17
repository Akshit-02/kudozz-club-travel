import { MetadataRoute } from "next";

// Static + dynamic pages for sitemap generation
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://explore.kudozz.in";
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/itineraries`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // Blog post pages (fetch from CMS/DB in production)
  const blogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/manali-travel-guide`,
      lastModified: new Date("2025-05-10"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/spiti-valley-travel-guide`,
      lastModified: new Date("2025-04-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/leh-ladakh-road-trip`,
      lastModified: new Date("2025-03-28"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return [...staticPages, ...blogPosts];
}
