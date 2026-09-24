// Single source of truth for brand facts and trust-strip numbers.
// Numbers are computed from real data so they can't drift from the content.
import { posts, featuredPost } from "./blog-posts";
import { allStatePackages } from "./all-states-data";

export const SITE_URL = "https://club.kudozz.in";
export const CONTACT_EMAIL = "connect@kudozz.in";
export const BRAND = "Kudozz Club";

const guideCount = new Set([featuredPost, ...posts].map((p) => p.slug)).size;

// "582" -> "580+": round down to the nearest 10 so the claim stays true as
// guides are added, and never overstates.
export const guideCountLabel = `${Math.floor(guideCount / 10) * 10}+`;
export const stateCount = allStatePackages.length; // 28 states + 8 UTs
export const regionCount = new Set(allStatePackages.map((s) => s.region)).size;

export const trustStats = [
  { value: guideCountLabel, label: "India travel guides" },
  { value: String(stateCount), label: "States & UTs covered" },
  { value: String(regionCount), label: "Regions of India" },
  { value: "In-house", label: "Trip planning team" },
];
