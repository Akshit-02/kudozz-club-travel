import type { MetadataRoute } from "next";
import { posts, featuredPost } from "@/lib/blog-posts";
import blogLastmod from "@/lib/blog-lastmod.json";
import { allStatePackages } from "@/lib/all-states-data";
import { travelStylesData } from "@/lib/travel-styles-data";
import { comboPackages } from "@/lib/combo-packages";

const BASE_URL = "https://club.kudozz.in";

// State/UT hub guides — the top of each geographic cluster (India → State →
// City → Attraction). These get a higher crawl priority than an individual
// place-specific guide, since they're the highest-value entry point for a
// whole region and the most heavily internally-linked pages on the site.
const HUB_SLUGS = new Set([
  "andaman-islands-travel-guide",
  "andhra-pradesh-travel-guide",
  "arunachal-pradesh-travel-guide",
  "assam-travel-guide",
  "bihar-travel-guide",
  "chandigarh-travel-guide",
  "chhattisgarh-travel-guide",
  "dadra-nagar-haveli-daman-diu-travel-guide",
  "delhi-travel-guide",
  "goa-beaches-travel-guide",
  "gujarat-travel-guide",
  "haryana-travel-guide",
  "himachal-pradesh-travel-guide",
  "jammu-kashmir-travel-guide",
  "jharkhand-travel-guide",
  "karnataka-travel-guide",
  "kerala-backwaters-travel-guide",
  "lakshadweep-island-travel-guide",
  "leh-ladakh-road-trip-travel-guide",
  "madhya-pradesh-travel-guide",
  "maharashtra-travel-guide",
  "manipur-travel-guide",
  "meghalaya-travel-guide",
  "mizoram-travel-guide",
  "nagaland-travel-guide",
  "odisha-travel-guide",
  "puducherry-district-travel-guide",
  "punjab-travel-guide",
  "rajasthan-travel-guide",
  "sikkim-travel-guide",
  "tamil-nadu-travel-guide",
  "telangana-travel-guide",
  "tripura-travel-guide",
  "uttar-pradesh-travel-guide",
  "uttarakhand-travel-guide",
  "west-bengal-travel-guide",
]);

const lastmodMap: Record<string, string> = blogLastmod;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/blog`, changeFrequency: "daily", priority: 0.9 },
    {
      url: `${BASE_URL}/destinations`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { url: `${BASE_URL}/packages`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/adventure-travel`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/beach-travel`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/wildlife-tourism`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/spiritual-tourism`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/heritage-cultural-tourism`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/hill-station-travel`, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${BASE_URL}/plan-your-trip`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.4 },
    {
      url: `${BASE_URL}/newsletter`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/write-for-us`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // De-dupe by slug — featuredPost points at a post that also lives in
  // `posts`, so build the URL set once from a Map keyed by slug.
  const bySlug = new Map<string, { slug: string }>();
  for (const p of [featuredPost, ...posts]) {
    bySlug.set(p.slug, p);
  }

  const blogRoutes: MetadataRoute.Sitemap = Array.from(bySlug.keys()).map(
    (slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: lastmodMap[slug],
      changeFrequency: "monthly",
      priority: HUB_SLUGS.has(slug) ? 0.8 : 0.6,
    }),
  );

  const statePackageRoutes: MetadataRoute.Sitemap = [
    ...allStatePackages,
    ...comboPackages,
  ].map((s) => ({
    url: `${BASE_URL}/packages/${s.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const stylePackageRoutes: MetadataRoute.Sitemap = travelStylesData.map(
    (s) => ({
      url: `${BASE_URL}/packages/${s.slug}`,
      changeFrequency: "weekly",
      priority: 0.7,
    }),
  );

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...statePackageRoutes,
    ...stylePackageRoutes,
  ];
}
