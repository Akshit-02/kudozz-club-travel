// Lightweight lookups over the generated things-to-do index. Safe to import
// from client components: it carries titles and links only, no article bodies.
import index from "./things-to-do-index.json";

export interface TtdIndexEntry {
  slug: string;
  title: string;
  destination: string;
  guide: string;
  excerpt: string;
  image: string;
  tags: string[];
  readTime: string;
  state: string;
  stateGuide: string;
  package: string;
  cluster: { label: string; href: string }[];
}

export const thingsToDoIndex = index as TtdIndexEntry[];

const byGuide = new Map(thingsToDoIndex.map((e) => [e.guide, e]));
const bySlug = new Map(thingsToDoIndex.map((e) => [e.slug, e]));

// Older guides that already cover "things to do" for a destination; the guide
// is pointed at them instead of a generated article.
const existingByGuide: Record<string, { slug: string; destination: string }> = {
  "ranthambore-travel-guide": { slug: "ranthambore-first-time-visitors-travel-guide", destination: "Ranthambore" },
};

/** The things-to-do article for a destination guide, if one exists. */
export function thingsToDoForGuide(guideSlug: string): { slug: string; destination: string } | undefined {
  return byGuide.get(guideSlug) ?? existingByGuide[guideSlug];
}

export function thingsToDoEntry(slug: string) {
  return bySlug.get(slug);
}

export function thingsToDoInState(state: string, exclude?: string) {
  return thingsToDoIndex.filter((e) => e.state === state && e.slug !== exclude);
}

export function thingsToDoForPackage(packageSlug: string) {
  return thingsToDoIndex.filter((e) => e.package === packageSlug);
}
