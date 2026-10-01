// Single source of truth for brand facts and trust-strip numbers.
// Numbers are computed from real data so they can't drift from the content.
import { posts, featuredPost } from "./blog-posts";
import { allStatePackages } from "./all-states-data";

export const SITE_URL = "https://club.kudozz.in";
export const CONTACT_EMAIL = "connect@kudozz.in";
export const BRAND = "Kudozz Club";

const guideCount = new Set([featuredPost, ...posts].map((p) => p.slug)).size;
const destinationGuideCount = new Set(
  allStatePackages.flatMap((s) => [s.blogSlug, ...s.children.map((c) => c.slug)]),
).size;

// Round down to the nearest 10 (1,029 -> "1,020+", 582 -> "580+") so the
// claim stays true as guides are added, and never overstates.
const roundedLabel = (n: number) => `${(Math.floor(n / 10) * 10).toLocaleString("en-IN")}+`;

// Every published guide (destination guides, things-to-do, cluster articles).
export const guideCountLabel = roundedLabel(guideCount);
// Place guides only: one per state/UT hub, city, area or attraction.
export const destinationGuideLabel = roundedLabel(destinationGuideCount);
export const stateCount = allStatePackages.length; // 28 states + 8 UTs
export const regionCount = new Set(allStatePackages.map((s) => s.region)).size;

export const trustStats = [
  { value: guideCountLabel, label: "India travel guides" },
  { value: String(stateCount), label: "States & UTs covered" },
  { value: String(regionCount), label: "Regions of India" },
  { value: "In-house", label: "Trip planning team" },
];

// Open Graph + Twitter metadata for a page. A page that sets no `openGraph`
// inherits the root layout's (homepage) block, including og:url, so every
// indexable page should spread this into its metadata.
export function pageSocial(
  path: string,
  title: string,
  description: string,
  image = "/og-default.jpg",
  imageAlt = "Kudozz Club, India travel agency",
) {
  const url = `${SITE_URL}${path}`;
  return {
    openGraph: {
      title,
      description,
      url,
      type: "website" as const,
      siteName: BRAND,
      locale: "en_IN",
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image],
    },
  };
}
