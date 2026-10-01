// src/app/destinations/page.tsx
import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { posts as blogPosts } from "@/lib/blog-posts";
import { regionCount, pageSocial } from "@/lib/site";
import { allStatePackages } from "@/lib/all-states-data";
import { thingsToDoForGuide } from "@/lib/things-to-do-links";
import { placeNameFromTitle } from "@/lib/guide-context";

export const metadata: Metadata = {
  title: "India Travel Destinations by Region & State",
  description:
    "Places to visit in India, state by state: 580+ destination guides across all 36 states and UTs, grouped by region, with tour packages and things to do.",
  keywords: [
    "India travel destinations",
    "best places to visit in India",
    "India destination guide",
    "Ladakh destinations",
    "Jammu and Kashmir destinations",
    "Delhi destinations",
    "offbeat places in India",
    "hill stations in India",
    "beaches in India",
    "heritage sites in India",
    "state-wise travel guide India",
  ],
  alternates: { canonical: "https://club.kudozz.in/destinations" },
  ...pageSocial("/destinations", "India Travel Destinations by Region & State | Kudozz Club", "Places to visit in India, state by state: 580+ destination guides across all 36 states and UTs, grouped by region, with tour packages and things to do.", "/images/destinations/manali/hero.jpg", "Snow-capped Himalayan peaks above the Manali valley, Himachal Pradesh"),
};

function DestinationsSchema() {
  const graph = [
    {
      "@type": "CollectionPage",
      "@id": "https://club.kudozz.in/destinations#webpage",
      name: "India Travel Destinations by Region and State",
      url: "https://club.kudozz.in/destinations",
      isPartOf: { "@id": "https://club.kudozz.in/#website" },
      publisher: { "@id": "https://club.kudozz.in/#organization" },
      mainEntity: {
        "@type": "ItemList",
        name: "Indian states and union territories",
        numberOfItems: allStatePackages.length,
        itemListElement: regions
          .flatMap((r) => r.states)
          .map((st, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: st.name,
            url: `https://club.kudozz.in/blog/${st.hubSlug}`,
          })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Destinations", item: "https://club.kudozz.in/destinations" },
      ],
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const featured = [
  {
    slug: "manali-travel-guide",
    title: "Manali",
    state: "Himachal Pradesh",
    tagline: "Where the mountains begin",
    description:
      "Snow-capped peaks, apple orchards, ancient temples and Himalayan adventure in one of India's most beloved hill stations.",
    image: "/images/destinations/manali/hero.jpg",
    category: "Mountains",
    region: "north",
    tags: ["mountains", "adventure"],
    readTime: "16 min",
    highlight: "Rohtang Pass at sunrise",
    bestTime: "Oct – Jun",
    featured: true,
    large: true,
    comingSoon: false,
  },
  {
    slug: "leh-ladakh-road-trip-travel-guide",
    title: "Leh Ladakh",
    state: "Ladakh",
    tagline: "Beyond the highest passes",
    description:
      "Moonscapes, Buddhist monasteries and the world's most dramatic road trip through passes that touch the sky.",
    image: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
    category: "Road Trip",
    region: "north",
    tags: ["mountains", "adventure"],
    readTime: "26 min",
    highlight: "Pangong Tso at dusk",
    bestTime: "Jun – Sep",
    featured: true,
    large: false,
    comingSoon: false,
  },
  {
    slug: "spiti-valley-travel-guide",
    title: "Spiti Valley",
    state: "Himachal Pradesh",
    tagline: "The cold desert between worlds",
    description:
      "Remote monasteries, Mars-like landscapes and an unfiltered slice of Tibetan-Buddhist culture on India's most dramatic road.",
    image: "/images/destinations/spiti-valley/spiti-valley.jpg",
    category: "Off-beat",
    region: "north",
    tags: ["mountains", "offbeat"],
    readTime: "22 min",
    highlight: "Key Monastery dawn prayers",
    bestTime: "Jun – Oct",
    featured: true,
    large: false,
    comingSoon: false,
  },
  {
    slug: "rishikesh-adventure-travel-guide",
    title: "Rishikesh",
    state: "Uttarakhand",
    tagline: "Where the Ganga roars",
    description:
      "India's adventure capital and yoga heartland — white-water rafting, bungee jumping and Ganga aarti all in one spiritual town.",
    image: "/images/destinations/rishikesh/rishikesh.jpg",
    category: "Adventure",
    region: "north",
    tags: ["adventure", "spiritual"],
    readTime: "18 min",
    highlight: "Ganga Aarti at Parmarth",
    bestTime: "Sep – Jun",
    featured: true,
    large: false,
    comingSoon: false,
  },
  {
    slug: "coorg-travel-guide",
    title: "Coorg",
    state: "Karnataka",
    tagline: "India's coffee country",
    description:
      "Misty coffee hills, thundering waterfalls, Nagarhole wildlife and the warm hospitality of the Kodava people.",
    image: "/images/destinations/coorg/coorg.jpg",
    category: "Nature",
    region: "south",
    tags: ["wildlife", "offbeat"],
    readTime: "17 min",
    highlight: "Plantation sunrise walk",
    bestTime: "Oct – May",
    featured: true,
    large: false,
    comingSoon: false,
  },
];

const categoryColors: Record<string, string> = {
  Mountains: "bg-sky-100 text-sky-700",
  "Road Trip": "bg-stone-100 text-stone-700",
  "Off-beat": "bg-purple-100 text-purple-700",
  Adventure: "bg-amber-100 text-amber-700",
  Nature: "bg-forest-100 text-forest-700",
  Trekking: "bg-green-100 text-green-700",
  Beaches: "bg-blue-100 text-blue-700",
  Heritage: "bg-rose-100 text-rose-700",
  Spiritual: "bg-orange-100 text-orange-700",
  "Destination Guide": "bg-sky-100 text-sky-700",
};

// ── Region → State → Destination directory ───────────────────────────────────
// Built from the same state data as the package pages (all-states-data.ts,
// itself extracted from each state hub guide's own "Places to Explore" links),
// so every guide appears exactly once, under its real state and region.

const postTitle = new Map(blogPosts.map((p) => [p.slug, p.title]));

const REGION_ORDER = [
  "North India",
  "Northeast India",
  "East India",
  "Central India",
  "West India",
  "South India",
];

const REGION_INTRO: Record<string, string> = {
  "North India":
    "The Himalaya of Ladakh, Jammu & Kashmir, Himachal Pradesh and Uttarakhand, the Golden Triangle of Delhi, Agra and Jaipur, Rajasthan's desert forts and the pilgrimage towns of the Ganga plain.",
  "Northeast India":
    "Eight states between the eastern Himalaya and the Bangladesh border: Sikkim's monasteries, Meghalaya's waterfalls and root bridges, Kaziranga's rhinos and the tribal cultures of Nagaland and Arunachal. Several areas need permits.",
  "East India":
    "Kolkata and the Darjeeling hills in West Bengal, Odisha's temple coast and Chilika Lake, the Buddhist sites of Bihar and the forested plateau of Jharkhand.",
  "Central India":
    "Tiger country and temple towns: Kanha, Bandhavgarh and Khajuraho in Madhya Pradesh, and the waterfalls and tribal heartland of Chhattisgarh.",
  "West India":
    "Goa's beaches, Maharashtra's forts, caves and hill stations, Gujarat's Rann of Kutch and Gir, and the old Portuguese towns of Daman and Diu.",
  "South India":
    "Kerala's backwaters and hills, Karnataka's Hampi and Coorg, Tamil Nadu's temple cities, Andhra Pradesh and Telangana, Puducherry, and the islands of the Andamans and Lakshadweep.",
};

const regionId = (r: string) => r.toLowerCase().replace(/[^a-z]+/g, "-");

const regions = REGION_ORDER.map((region) => ({
  region,
  id: regionId(region),
  states: allStatePackages
    .filter((s) => s.region === region)
    .map((s) => ({
      name: s.name,
      packageSlug: s.slug,
      hubSlug: s.blogSlug,
      hubThingsToDo: thingsToDoForGuide(s.blogSlug)?.slug,
      places: s.children
        .filter((c) => postTitle.has(c.slug))
        .map((c) => ({
          slug: c.slug,
          name: placeNameFromTitle(postTitle.get(c.slug)!),
          thingsToDo: thingsToDoForGuide(c.slug)?.slug,
        }))
        .sort((x, y) => x.name.localeCompare(y.name)),
    })),
}));

const guideCount = new Set(
  regions.flatMap((r) => r.states.flatMap((s) => [s.hubSlug, ...s.places.map((p) => p.slug)])),
).size;
const thingsToDoCount = blogPosts.filter((p) => p.category === "Things to Do").length;

const stats = [
  { value: String(allStatePackages.length), label: "States & UTs" },
  { value: String(guideCount), label: "Destination guides" },
  { value: String(thingsToDoCount), label: "Things-to-do guides" },
  { value: String(regionCount), label: "Regions of India" },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DestinationsPage() {
  return (
    <>
      <DestinationsSchema />
      <SiteHeader />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[55vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/manali/hero.jpg"
              alt="Snow-capped Himalayan peaks above the Manali valley, Himachal Pradesh"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-800/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/50 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-forest-400" />
                <span
                  className="text-forest-300 text-xs font-bold uppercase tracking-[0.22em]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Explore
                </span>
              </div>
              <h1
                className="text-5xl sm:text-6xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                India Travel Destinations,
                <br />
                <span className="text-forest-300">State by State</span>
              </h1>
              <p
                className="text-white/70 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-source-serif)" }}
              >
                From Himalayan passes to tropical backwaters: detailed guides
                to every Indian state and union territory. Found somewhere you
                like? We can plan the trip for you.
              </p>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ─────────────────────────────────────────────────── */}
        <section className="bg-stone-950 border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-800">
              {stats.map((stat) => (
                <div key={stat.label} className="py-7 px-6 text-center">
                  <div
                    className="text-3xl font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-stone-500 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Bento Grid ───────────────────────────────────────── */}
        <section className="bg-stone-50 py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-forest-500" />
                  <span
                    className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Editor's picks
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-stone-900"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Featured Destinations
                </h2>
              </div>
            </div>

            {/* Bento layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Large hero card */}
              <Link
                href={`/blog/${featured[0].slug}`}
                className="group lg:row-span-2 relative flex flex-col justify-end overflow-hidden rounded-3xl min-h-[400px] lg:min-h-[520px] shadow-md hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={featured[0].image}
                  alt={featured[0].title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span
                    className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${categoryColors[featured[0].category] ?? "bg-white/20 text-white"}`}
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {featured[0].category}
                  </span>
                </div>
                <div className="relative z-10 p-7">
                  <p
                    className="text-white/55 text-xs font-medium mb-1"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {featured[0].state}
                  </p>
                  <h3
                    className="text-3xl font-bold text-white mb-2 group-hover:text-forest-200 transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {featured[0].title}
                  </h3>
                  <p
                    className="text-white/65 text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {featured[0].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <div className="text-white/40 text-[10px] uppercase tracking-widest">
                        Best time
                      </div>
                      <div className="text-white/80 text-xs font-medium">
                        {featured[0].bestTime}
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-forest-500 group-hover:border-forest-500 transition-all">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H7M17 7v10"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Smaller cards */}
              {featured.slice(1).map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/blog/${dest.slug}`}
                  className="group relative flex flex-col justify-end overflow-hidden rounded-3xl min-h-[240px] shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${categoryColors[dest.category] ?? "bg-white/20 text-white"}`}
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {dest.category}
                    </span>
                  </div>
                  <div className="relative z-10 p-5">
                    <p
                      className="text-white/50 text-xs mb-0.5"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {dest.state}
                    </p>
                    <h3
                      className="text-xl font-bold text-white group-hover:text-forest-200 transition-colors"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {dest.title}
                    </h3>
                    <p
                      className="text-white/55 text-xs mt-1 line-clamp-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {dest.tagline}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span
                        className="text-white/40 text-[10px] uppercase tracking-widest"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        Best: {dest.bestTime}
                      </span>
                      <svg
                        className="w-4 h-4 text-white/40 group-hover:text-forest-300 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H7M17 7v10"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Region → State → Destination directory ─────────────────── */}
        <section className="bg-white py-20" aria-labelledby="by-region">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="max-w-3xl">
              <p className="eyebrow">Complete list</p>
              <h2 id="by-region" className="heading-lg mt-3">
                Places to visit in India, by region and state
              </h2>
              <p className="mt-4 font-sans text-base leading-relaxed text-stone-600">
                Every guide sits under its state. Start with a state guide for
                the big picture (best time, how to get there, how many days),
                then open the destinations you like. Each state also has a
                tour package page, where you can ask us to plan the trip.
              </p>
            </div>

            <nav aria-label="Jump to region" className="mt-8 flex flex-wrap gap-2">
              {regions.map((r) => (
                <a
                  key={r.id}
                  href={`#${r.id}`}
                  className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 font-sans text-sm font-medium text-stone-700 hover:border-forest-300 hover:text-forest-700"
                >
                  {r.region}
                </a>
              ))}
            </nav>

            {regions.map((r) => (
              <section key={r.id} id={r.id} className="mt-16 scroll-mt-24">
                <h2 className="font-display text-3xl font-bold text-stone-950">{r.region}</h2>
                <p className="mt-3 max-w-3xl font-sans text-[15px] leading-relaxed text-stone-600">
                  {REGION_INTRO[r.region]}
                </p>
                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {r.states.map((st) => (
                    <div key={st.packageSlug} className="rounded-2xl border border-stone-200 bg-stone-50/60 p-6">
                      <h3 className="font-display text-xl font-bold text-stone-950">
                        <Link href={`/blog/${st.hubSlug}`} className="hover:text-forest-700">
                          {st.name}
                        </Link>
                      </h3>
                      <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-sans text-sm">
                        <Link href={`/blog/${st.hubSlug}`} className="font-semibold text-forest-700 underline-offset-4 hover:underline">
                          {st.name} travel guide
                        </Link>
                        <Link href={`/packages/${st.packageSlug}`} className="font-semibold text-forest-700 underline-offset-4 hover:underline">
                          {st.name} tour packages
                        </Link>
                        {st.hubThingsToDo && (
                          <Link href={`/blog/${st.hubThingsToDo}`} className="font-semibold text-forest-700 underline-offset-4 hover:underline">
                            Things to do
                          </Link>
                        )}
                      </p>
                      {st.places.length > 0 && (
                        <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-1.5 font-sans text-sm text-stone-700 sm:grid-cols-2">
                          {st.places.map((p) => (
                            <li key={p.slug}>
                              <Link href={`/blog/${p.slug}`} className="hover:text-forest-700 hover:underline underline-offset-4">
                                {p.name}
                              </Link>
                              {p.thingsToDo && (
                                <>
                                  {" "}
                                  <Link
                                    href={`/blog/${p.thingsToDo}`}
                                    className="text-xs text-stone-500 hover:text-forest-700"
                                    aria-label={`Things to do in ${p.name}`}
                                  >
                                    · things to do
                                  </Link>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="bg-stone-950 py-20">
          <div className="container-site max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Found your destination?
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-stone-300">
              Tell us where, when and who&rsquo;s travelling. Kudozz Club will
              plan a customized itinerary around it.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/plan-your-trip?from=/destinations" className="btn-primary px-8">
                Plan My Trip →
              </Link>
              <Link href="/packages" className="btn-outline-light px-8">
                Explore Tour Packages
              </Link>
            </div>
            <p className="mt-6 font-sans text-sm text-stone-500">
              Not ready yet?{" "}
              <Link href="/newsletter" className="text-stone-300 underline underline-offset-4 hover:text-white">
                Get new guides by email
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
