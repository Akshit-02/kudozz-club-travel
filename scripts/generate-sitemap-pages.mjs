// Writes public/sitemap-pages.xml — a static copy of every URL in the site,
// rendered from src/app/sitemap.ts so it never drifts from /sitemap.xml.
// Runs automatically before `next build` (npm "prebuild"); run manually with
// `npm run sitemap:pages`.
import fs from "node:fs";
import path from "node:path";
import createJiti from "jiti";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const outFile = path.join(root, "public", "sitemap-pages.xml");

// jiti loads the TypeScript source directly, resolving the "@/*" tsconfig alias.
const jiti = createJiti(import.meta.url, {
  alias: { "@/": path.join(root, "src") + "/" },
  interopDefault: true,
});
const sitemap = jiti(path.join(root, "src", "app", "sitemap.ts"));

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const entries = sitemap();

const urls = entries
  .map((entry) => {
    const lines = [`<loc>${escapeXml(entry.url)}</loc>`];
    if (entry.lastModified) {
      const lastmod =
        entry.lastModified instanceof Date
          ? entry.lastModified.toISOString()
          : entry.lastModified;
      lines.push(`<lastmod>${escapeXml(lastmod)}</lastmod>`);
    }
    if (entry.changeFrequency) {
      lines.push(`<changefreq>${entry.changeFrequency}</changefreq>`);
    }
    if (entry.priority !== undefined) {
      lines.push(`<priority>${entry.priority}</priority>`);
    }
    return `<url>\n${lines.join("\n")}\n</url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(outFile, xml);
console.log(`sitemap-pages.xml: wrote ${entries.length} URLs to ${path.relative(root, outFile)}`);
