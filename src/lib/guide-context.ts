// Commercial context for a travel guide: the place it covers and the package
// page it feeds into. Powers the guide CTAs (GuideTripCTA, RelatedPosts), so
// the 582 guide files never hardcode commercial links themselves.
import { posts, featuredPost } from "./blog-posts";
import { getPackageLinkForSlug } from "./blog-package-link";
import { getDestinationProfile } from "./destination-profiles";
import { getStatePackage } from "./all-states-data";

const postBySlug = new Map([featuredPost, ...posts].map((p) => [p.slug, p]));

// Titles that don't reduce cleanly to a place name.
const PLACE_OVERRIDES: Record<string, string> = {
  "ranthambore-first-time-visitors-travel-guide": "Ranthambore",
  "rajasthan-desert-travel-guide": "Jaisalmer",
  "leh-ladakh-road-trip-travel-guide": "Ladakh",
  "kerala-backwaters-travel-guide": "Kerala",
  "goa-beaches-travel-guide": "Goa",
  "andaman-islands-travel-guide": "Andaman",
  "jammu-kashmir-travel-guide": "Kashmir",
  "rishikesh-adventure-travel-guide": "Rishikesh",
  "udaipur-city-of-lakes-travel-guide": "Udaipur",
  "kasol-kheerganga-trek-travel-guide": "Kasol",
  "port-blair-andaman-travel-guide": "Port Blair",
  "havelock-island-andaman-travel-guide": "Havelock Island",
  "neil-island-andaman-travel-guide": "Neil Island",
  "katra-travel-guide": "Katra",
};

export function placeNameFromTitle(title: string) {
  return title
    .split(":")[0]
    .replace(/\s*[—–]\s.*$/, "")
    .replace(
      /\s+(Complete\s+)?(Travel|Road Trip|Adventure|Visit|Trekking|Trek|Tourism|Beaches?|City|Island|Backwaters)?\s*Guide\b.*$/i,
      "",
    )
    .trim();
}

export interface GuideContext {
  place: string; // "Jaipur"
  shortPlace: string | null; // place if short enough for a button, else null
  stateName: string; // "Rajasthan" / "Kashmir"
  packageSlug: string; // "rajasthan"
  planHref: string;
  hubSlug: string | null; // state hub guide, null when this guide IS the hub
  siblings: { slug: string; place: string }[]; // nearby guides in the same state
}

export function getGuideContext(slug: string): GuideContext | null {
  const post = postBySlug.get(slug);
  const pkg = getPackageLinkForSlug(slug);
  if (!post || !pkg) return null;
  const place = PLACE_OVERRIDES[slug] ?? placeNameFromTitle(post.title);
  const stateName = getDestinationProfile(pkg.packageSlug)?.shortName ?? pkg.stateName;
  const q = new URLSearchParams({ destination: place, from: `/blog/${slug}` });
  const state = getStatePackage(pkg.packageSlug);
  const hubSlug = state && state.blogSlug !== slug ? state.blogSlug : null;

  // Up to 6 neighbours in the hub's own ordering (3 either side, wrapping),
  // so every guide receives links from several siblings, not just its hub.
  const children = state?.children.map((c) => c.slug).filter((s) => postBySlug.has(s)) ?? [];
  const i = children.indexOf(slug);
  const siblings: { slug: string; place: string }[] = [];
  if (children.length > 1) {
    const offsets = i >= 0 ? [-3, -2, -1, 1, 2, 3] : [0, 1, 2, 3, 4, 5];
    for (const o of offsets) {
      const s = children[(((i >= 0 ? i : 0) + o) % children.length + children.length) % children.length];
      if (s !== slug && !siblings.some((x) => x.slug === s)) {
        siblings.push({ slug: s, place: PLACE_OVERRIDES[s] ?? placeNameFromTitle(postBySlug.get(s)!.title) });
      }
    }
  }

  return {
    place,
    shortPlace: place.length <= 18 ? place : null,
    stateName,
    packageSlug: pkg.packageSlug,
    planHref: `/plan-your-trip?${q.toString()}`,
    hubSlug,
    siblings,
  };
}
