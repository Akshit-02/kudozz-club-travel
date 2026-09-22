// Maps a blog post slug to its state's commercial package page, so the
// shared RelatedPosts sidebar (rendered on effectively every blog page) can
// show one tasteful, contextual "plan a trip" CTA — closing the internal
// -linking loop from the 582 editorial guides *into* the new /packages/*
// pages built in Phase 7. See docs/human-input-required.md "Phase 3" entry
// and docs/new-information-architecture.md §4.
//
// The mapping is built entirely from real data already in the codebase
// (state-hub-children.json, itself extracted from each hub's own published
// "Places to Explore" links, plus all-states-data.ts) — no invented
// associations.
import stateHubChildren from "./state-hub-children.json";
import { allStatePackages } from "./all-states-data";

export interface PackageLink {
  stateName: string;
  packageSlug: string;
}

const slugToPackage = new Map<string, PackageLink>();

for (const state of allStatePackages) {
  const link: PackageLink = { stateName: state.name, packageSlug: state.slug };
  // The hub page itself (e.g. rajasthan-travel-guide) links to its own package.
  slugToPackage.set(state.blogSlug, link);

  const children =
    (stateHubChildren as Record<string, { slug: string; title: string }[]>)[
      state.blogSlug
    ] ?? [];
  for (const child of children) {
    if (!slugToPackage.has(child.slug)) slugToPackage.set(child.slug, link);
  }
}

export function getPackageLinkForSlug(slug: string): PackageLink | null {
  return slugToPackage.get(slug) ?? null;
}
