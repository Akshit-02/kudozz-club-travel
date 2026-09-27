// Nature Travel articles (the /nature-travel content cluster). Same JSON schema
// and template as the Adventure Travel cluster (see lib/adventure.ts);
// rendered by src/app/blog/[slug]/page.tsx. Server-only (fs).
import { loadClusterDir, type AdventureArticle } from "./adventure";

let cache: Map<string, AdventureArticle> | null = null;

function load() {
  if (!cache) cache = loadClusterDir("nature");
  return cache;
}

export function getAllNature(): AdventureArticle[] {
  return Array.from(load().values());
}

export function getNature(slug: string) {
  return load().get(slug);
}
