// "Things to Do in <Destination>" articles.
//
// Each article is a JSON file in src/content/things-to-do/<slug>.json,
// rendered by src/app/blog/[slug]/page.tsx. This module reads them on the
// server only (fs), so article bodies never ship to the browser. Listings,
// the sitemap and cross-links use the small generated index instead
// (things-to-do-index.json, built by scripts/things-to-do/build.py).
import fs from "node:fs";
import path from "node:path";

export interface TtdImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface TtdLink {
  label: string;
  href: string;
}

export interface TtdItem {
  name: string;
  body: string[];
  image?: TtdImage;
  facts?: Record<string, string>;
  links?: TtdLink[];
}

export interface TtdSection {
  id: string;
  heading: string;
  intro?: string;
  items: TtdItem[];
}

export interface ThingsToDoArticle {
  slug: string;
  destination: string;
  guide: string; // blog slug of the destination guide
  type: string;
  title: string;
  seoTitle: string;
  description: string;
  /** Shorter version for the meta description tag; falls back to description. */
  metaDescription?: string;
  dek: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  tags: string[];
  hero: TtdImage;
  intro: string[];
  quickAnswer: string[];
  sections: TtdSection[];
  byTraveller?: { who: string; text: string }[];
  oneDay?: string;
  tips?: string[];
  faqs: { q: string; a: string }[];
  nearby: { name: string; href: string; note: string }[];
  styles?: string[];
}

const DIR = path.join(process.cwd(), "src/content/things-to-do");

let cache: Map<string, ThingsToDoArticle> | null = null;

function load() {
  if (cache) return cache;
  cache = new Map();
  if (fs.existsSync(DIR)) {
    for (const f of fs.readdirSync(DIR)) {
      if (!f.endsWith(".json")) continue;
      const a = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")) as ThingsToDoArticle;
      cache.set(a.slug, a);
    }
  }
  return cache;
}

export function getAllThingsToDo(): ThingsToDoArticle[] {
  return Array.from(load().values());
}

export function getThingsToDo(slug: string) {
  return load().get(slug);
}

export function wordCount(a: ThingsToDoArticle) {
  const text = [
    ...a.intro,
    ...a.quickAnswer,
    ...a.sections.flatMap((s) => [s.intro ?? "", ...s.items.flatMap((i) => [i.name, ...i.body, ...Object.values(i.facts ?? {})])]),
    ...(a.byTraveller ?? []).map((b) => b.text),
    a.oneDay ?? "",
    ...(a.tips ?? []),
    ...a.faqs.flatMap((f) => [f.q, f.a]),
    ...a.nearby.map((n) => n.note),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}
