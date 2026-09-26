// Hill Station Travel articles (the /hill-station-travel content cluster). Same JSON schema
// and template as the Adventure Travel cluster (see lib/adventure.ts);
// rendered by src/app/blog/[slug]/page.tsx. Server-only (fs).
import { loadClusterDir, type AdventureArticle } from "./adventure";

let cache: Map<string, AdventureArticle> | null = null;

function load() {
  if (!cache) cache = loadClusterDir("hills");
  return cache;
}

export function getAllHills(): AdventureArticle[] {
  return Array.from(load().values());
}

export function getHill(slug: string) {
  return load().get(slug);
}
