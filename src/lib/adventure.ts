// Adventure Travel articles (the /adventure-travel content cluster).
//
// Each article is a JSON file in src/content/adventure/<slug>.json, rendered
// by src/app/blog/[slug]/page.tsx through components/adventure/AdventureArticle.
// Server-only (fs): listings, the hub page, the sitemap and cross-links use the
// small generated index instead (adventure-index.json, built by
// scripts/adventure/build.py).
import fs from "node:fs";
import path from "node:path";

export interface AdvImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface AdvLink {
  label: string;
  href: string;
}

export interface AdvItem {
  name: string;
  body: string[];
  image?: AdvImage;
  /** Difficulty, duration, season, location, suitability… short label → value. */
  facts?: Record<string, string>;
  links?: AdvLink[];
}

export interface AdvTable {
  caption?: string;
  columns: string[];
  rows: string[][];
}

export interface AdvSection {
  id: string;
  heading: string;
  paras?: string[];
  items?: AdvItem[];
  table?: AdvTable;
  list?: string[];
  after?: string[];
}

// Adventure kinds, plus the Beach Travel cluster's "state" pages (same template).
export type AdvKind = "pillar" | "activity" | "destination" | "weekend" | "planning" | "state";

export interface AdventureArticle {
  slug: string;
  kind: AdvKind;
  title: string; // H1
  seoTitle: string;
  metaDescription: string;
  description: string; // listings and schema
  dek: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  /** Activity facets used by the hub filters and related links. */
  activities: string[];
  terrain: string[];
  regions: string[];
  seasons: string[];
  travellers: string[];
  tags: string[];
  hero: AdvImage;
  /** Parent page in the cluster (hub or pillar). */
  parent: { label: string; href: string };
  /** Entity the article is about, for schema. */
  about: { type: "TouristDestination" | "TouristAttraction" | "Thing"; name: string; containedIn?: string };
  intro: string[];
  quickAnswer: string;
  takeaways: string[];
  sections: AdvSection[];
  safety: string[];
  packing?: string[];
  faqs: { q: string; a: string }[];
  /** Destination → things to do → guide → itinerary → package → plan. */
  nextSteps: AdvLink[];
  related: { name: string; href: string; note: string }[];
  /** Places named in the article, for the ItemList schema. */
  places?: string[];
  styles?: string[];
  planDestination?: string;
  updated: string;
}

/** Reads every article JSON in a content directory (server only). Shared by
 * the Adventure Travel and Beach Travel clusters, which use the same schema. */
export function loadClusterDir(dir: string): Map<string, AdventureArticle> {
  const out = new Map<string, AdventureArticle>();
  const full = path.join(process.cwd(), dir);
  if (fs.existsSync(full)) {
    for (const f of fs.readdirSync(full)) {
      if (!f.endsWith(".json")) continue;
      const a = JSON.parse(fs.readFileSync(path.join(full, f), "utf8")) as AdventureArticle;
      out.set(a.slug, a);
    }
  }
  return out;
}

let cache: Map<string, AdventureArticle> | null = null;

function load() {
  if (!cache) cache = loadClusterDir("src/content/adventure");
  return cache;
}

export function getAllAdventure(): AdventureArticle[] {
  return Array.from(load().values());
}

export function getAdventure(slug: string) {
  return load().get(slug);
}

export function adventureWordCount(a: AdventureArticle) {
  const text = [
    ...a.intro,
    a.quickAnswer,
    ...a.takeaways,
    ...a.sections.flatMap((s) => [
      ...(s.paras ?? []),
      ...(s.items ?? []).flatMap((i) => [i.name, ...i.body, ...Object.values(i.facts ?? {})]),
      ...(s.table ? s.table.rows.flat() : []),
      ...(s.list ?? []),
      ...(s.after ?? []),
    ]),
    ...a.safety,
    ...(a.packing ?? []),
    ...a.faqs.flatMap((f) => [f.q, f.a]),
    ...a.related.map((r) => r.note),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}
