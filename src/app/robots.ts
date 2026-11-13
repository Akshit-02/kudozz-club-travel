import { MetadataRoute } from "next";

// Crawlers that send no visitors back but crawl all ~1,100 pages repeatedly.
// On Vercel every one of those page fetches is billed (CDN requests, ISR reads,
// origin transfer), so they are turned away here. Search engines and the AI
// search/assistant bots (Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User,
// PerplexityBot, ClaudeBot, etc.) stay allowed via the "*" rule.
// Bots that ignore robots.txt need a Vercel Firewall rule instead.
const BLOCKED_BOTS = [
  // SEO tool crawlers
  "AhrefsBot",
  "AhrefsSiteAudit",
  "SemrushBot",
  "SemrushBot-SA",
  "MJ12bot",
  "DotBot",
  "BLEXBot",
  "DataForSeoBot",
  "SEOkicks",
  "serpstatbot",
  "SeekportBot",
  "Barkrowler",
  "linkdexbot",
  "MegaIndex",
  "rogerbot",
  // Bulk scrapers / dataset builders
  "Bytespider",
  "CCBot",
  "PetalBot",
  "Amazonbot",
  "meta-externalagent",
  "ImagesiftBot",
  "Diffbot",
  "omgili",
  "Timpibot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: BLOCKED_BOTS,
        disallow: "/",
      },
    ],
    sitemap: [
      "https://club.kudozz.in/sitemap.xml",
      "https://club.kudozz.in/sitemap-pages.xml",
    ],
  };
}
