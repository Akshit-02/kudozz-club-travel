import sitemap from "../sitemap";

// Serves /sitemap-pages.xml — the same URL list as /sitemap.xml, rendered
// from the shared sitemap() source so the two can never drift apart.
export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const entries = sitemap()
    .map((entry) => {
      const lines = [`<loc>${escapeXml(entry.url)}</loc>`];
      if (entry.lastModified) {
        const lastmod =
          entry.lastModified instanceof Date
            ? entry.lastModified.toISOString()
            : entry.lastModified;
        lines.push(`<lastmod>${lastmod}</lastmod>`);
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
${entries}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
