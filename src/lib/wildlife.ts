// Wildlife Tourism articles (the /wildlife-tourism content cluster). Same JSON schema
// and template as the Adventure Travel cluster (see lib/adventure.ts);
// rendered by src/app/blog/[slug]/page.tsx. Server-only (fs).
import { loadClusterDir, type AdventureArticle } from "./adventure";

let cache: Map<string, AdventureArticle> | null = null;

function load() {
  if (!cache) cache = loadClusterDir("src/content/wildlife");
  return cache;
}

export function getAllWildlife(): AdventureArticle[] {
  return Array.from(load().values());
}

export function getWildlife(slug: string) {
  return load().get(slug);
}
