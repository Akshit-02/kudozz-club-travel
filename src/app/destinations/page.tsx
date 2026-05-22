// src/app/destinations/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Destinations — Explore India & Beyond",
  description:
    "Browse all travel destinations on Kudozz Club — from Himalayan peaks to tropical beaches, ancient heritage sites to off-beat hidden gems. Hand-crafted guides for every kind of explorer.",
  alternates: { canonical: "https://explore.kudozz.in/destinations" },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const categories = [
  { id: "all", label: "All" },
  { id: "mountains", label: "Mountains" },
  { id: "beaches", label: "Beaches" },
  { id: "heritage", label: "Heritage" },
  { id: "wildlife", label: "Wildlife" },
  { id: "adventure", label: "Adventure" },
  { id: "spiritual", label: "Spiritual" },
  { id: "offbeat", label: "Off-beat" },
];

const regions = [
  { id: "all", label: "All India" },
  { id: "north", label: "North India" },
  { id: "south", label: "South India" },
  { id: "east", label: "East India" },
  { id: "west", label: "West India" },
  { id: "northeast", label: "Northeast" },
  { id: "islands", label: "Islands" },
];

const featured = [
  {
    slug: "manali-travel-guide",
    title: "Manali",
    state: "Himachal Pradesh",
    tagline: "Where the mountains begin",
    description:
      "Snow-capped peaks, apple orchards, ancient temples and Himalayan adventure in one of India's most beloved hill stations.",
    image: "/images/manali/hero.jpg",
    category: "Mountains",
    region: "north",
    tags: ["mountains", "adventure"],
    readTime: "16 min",
    highlight: "Rohtang Pass at sunrise",
    bestTime: "Oct – Jun",
    featured: true,
    large: true,
  },
  {
    slug: "leh-ladakh-road-trip",
    title: "Leh Ladakh",
    state: "Ladakh",
    tagline: "Beyond the highest passes",
    description:
      "Moonscapes, Buddhist monasteries and the world's most dramatic road trip through passes that touch the sky.",
    image: "/images/related/leh-ladakh.jpg",
    category: "Road Trip",
    region: "north",
    tags: ["mountains", "adventure"],
    readTime: "26 min",
    highlight: "Pangong Tso at dusk",
    bestTime: "Jun – Sep",
    featured: true,
    large: false,
  },
  {
    slug: "spiti-valley-travel-guide",
    title: "Spiti Valley",
    state: "Himachal Pradesh",
    tagline: "The cold desert between worlds",
    description:
      "Remote monasteries, Mars-like landscapes and an unfiltered slice of Tibetan-Buddhist culture on India's most dramatic road.",
    image: "/images/related/spiti-valley.jpg",
    category: "Off-beat",
    region: "north",
    tags: ["mountains", "offbeat"],
    readTime: "22 min",
    highlight: "Key Monastery dawn prayers",
    bestTime: "Jun – Oct",
    featured: true,
    large: false,
  },
  {
    slug: "rishikesh-adventure-guide",
    title: "Rishikesh",
    state: "Uttarakhand",
    tagline: "Where the Ganga roars",
    description:
      "India's adventure capital and yoga heartland — white-water rafting, bungee jumping and Ganga aarti all in one spiritual town.",
    image: "/images/related/rishikesh.jpg",
    category: "Adventure",
    region: "north",
    tags: ["adventure", "spiritual"],
    readTime: "18 min",
    highlight: "Ganga Aarti at Parmarth",
    bestTime: "Sep – Jun",
    featured: true,
    large: false,
  },
  {
    slug: "coorg-guide",
    title: "Coorg",
    state: "Karnataka",
    tagline: "India's coffee country",
    description:
      "Misty coffee hills, thundering waterfalls, Nagarhole wildlife and the warm hospitality of the Kodava people.",
    image: "/images/related/coorg.jpg",
    category: "Nature",
    region: "south",
    tags: ["wildlife", "offbeat"],
    readTime: "17 min",
    highlight: "Plantation sunrise walk",
    bestTime: "Oct – May",
    featured: true,
    large: false,
  },
];

const allDestinations = [
  ...featured,
  {
    slug: "kasol-kheerganga-trek",
    title: "Kasol & Kheerganga",
    state: "Himachal Pradesh",
    tagline: "The Parvati Valley trail",
    description:
      "Follow the Parvati River to steaming hot springs through pine forests, tiny Himalayan villages and backpacker cafes.",
    image: "/images/related/kasol.jpg",
    category: "Trekking",
    region: "north",
    tags: ["mountains", "adventure"],
    readTime: "12 min",
    highlight: "Kheerganga hot springs",
    bestTime: "Mar – Jun, Sep – Nov",
    featured: false,
    large: false,
  },
  //   {
  //     slug: "valley-of-flowers",
  //     title: "Valley of Flowers",
  //     state: "Uttarakhand",
  //     tagline: "A meadow of 300 wildflowers",
  //     description:
  //       "A UNESCO World Heritage Site that blooms briefly each monsoon with hundreds of Himalayan wildflower species.",
  //     image: "/images/manali/hero.jpg",
  //     category: "Trekking",
  //     region: "north",
  //     tags: ["mountains", "offbeat"],
  //     readTime: "10 min",
  //     highlight: "July bloom at peak season",
  //     bestTime: "Jul – Aug",
  //     featured: false,
  //     large: false,
  //   },
  //   {
  //     slug: "andaman-islands-guide",
  //     title: "Andaman Islands",
  //     state: "Andaman & Nicobar",
  //     tagline: "Where the Bay meets paradise",
  //     description:
  //       "Crystal-clear waters, pristine coral reefs, white sand beaches and the haunting history of Cellular Jail.",
  //     image: "/images/related/rishikesh.jpg",
  //     category: "Beaches",
  //     region: "islands",
  //     tags: ["beaches", "adventure"],
  //     readTime: "20 min",
  //     highlight: "Radhanagar Beach at sunset",
  //     bestTime: "Nov – May",
  //     featured: false,
  //     large: false,
  //   },
  //   {
  //     slug: "hampi-guide",
  //     title: "Hampi",
  //     state: "Karnataka",
  //     tagline: "Ruins of a lost empire",
  //     description:
  //       "The extraordinary ruins of the Vijayanagara Empire scattered across a surreal boulder landscape — one of India's most unique heritage sites.",
  //     image: "/images/destinations/coorg.jpg",
  //     category: "Heritage",
  //     region: "south",
  //     tags: ["heritage", "offbeat"],
  //     readTime: "14 min",
  //     highlight: "Virupaksha Temple at sunrise",
  //     bestTime: "Oct – Feb",
  //     featured: false,
  //     large: false,
  //   },
  //   {
  //     slug: "kerala-backwaters",
  //     title: "Kerala Backwaters",
  //     state: "Kerala",
  //     tagline: "Life on the waterways",
  //     description:
  //       "A 900-km network of lagoons, canals and lakes explored by houseboat — coconut palms, toddy shops and village life at water level.",
  //     image: "/images/related/spiti-valley.jpg",
  //     category: "Nature",
  //     region: "south",
  //     tags: ["offbeat"],
  //     readTime: "15 min",
  //     highlight: "Overnight houseboat in Alleppey",
  //     bestTime: "Sep – Mar",
  //     featured: false,
  //     large: false,
  //   },
  //   {
  //     slug: "rajasthan-desert-guide",
  //     title: "Jaisalmer",
  //     state: "Rajasthan",
  //     tagline: "The golden city of sand",
  //     description:
  //       "A living medieval fort rising from the Thar Desert, camel safaris into the dunes and the most spectacular havelis in Rajasthan.",
  //     image: "/images/related/leh-ladakh.jpg",
  //     category: "Heritage",
  //     region: "west",
  //     tags: ["heritage", "adventure"],
  //     readTime: "13 min",
  //     highlight: "Sunrise camel safari in Sam dunes",
  //     bestTime: "Oct – Feb",
  //     featured: false,
  //     large: false,
  //   },
  //   {
  //     slug: "ziro-valley-arunachal",
  //     title: "Ziro Valley",
  //     state: "Arunachal Pradesh",
  //     tagline: "India's most untouched valley",
  //     description:
  //       "A UNESCO tentative heritage site in Arunachal — home to the Apatani tribe, terraced rice fields and one of India's best music festivals.",
  //     image: "/images/related/kasol.jpg",
  //     category: "Off-beat",
  //     region: "northeast",
  //     tags: ["offbeat", "heritage"],
  //     readTime: "11 min",
  //     highlight: "Ziro Music Festival (September)",
  //     bestTime: "Mar – Oct",
  //     featured: false,
  //     large: false,
  //   },
  //   {
  //     slug: "gokarna-beaches",
  //     title: "Gokarna",
  //     state: "Karnataka",
  //     tagline: "Quieter than Goa",
  //     description:
  //       "A temple town with world-class beaches — Om Beach, Half Moon, and Paradise — without Goa's commercialisation.",
  //     image: "/images/related/coorg.jpg",
  //     category: "Beaches",
  //     region: "south",
  //     tags: ["beaches", "spiritual"],
  //     readTime: "9 min",
  //     highlight: "Om Beach at low tide",
  //     bestTime: "Oct – Mar",
  //     featured: false,
  //     large: false,
  //   },
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
};

const stats = [
  { value: "28", label: "States covered" },
  { value: "120+", label: "Destinations" },
  { value: "350+", label: "Guides published" },
  { value: "8", label: "Regions" },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DestinationsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[55vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/manali/hero.jpg"
              alt="Destinations"
              className="w-full h-full object-cover"
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
                Every destination.
                <br />
                <span className="text-forest-300">One trusted guide.</span>
              </h1>
              <p
                className="text-white/70 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-source-serif)" }}
              >
                From Himalayan passes to tropical backwaters — hand-crafted
                travel guides written by people who've actually been there.
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

        {/* ── Filter Bar ────────────────────────────────────────────────── */}
        <section className="bg-white border-b border-stone-200 sticky top-[65px] z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-4">
              {/* Category filters */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none flex-1">
                {categories.map((cat, i) => (
                  <Link
                    key={cat.id}
                    href={`/destinations${cat.id !== "all" ? `?category=${cat.id}` : ""}`}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-200 ${
                      i === 0
                        ? "gradient-forest text-white shadow-sm"
                        : "bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-700"
                    }`}
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>

              {/* Region select */}
              <div className="flex-shrink-0">
                <select
                  className="px-4 py-2 text-xs font-semibold text-stone-600 bg-stone-100 border border-stone-200 rounded-full focus:outline-none focus:border-forest-400 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {regions.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>
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
                <img
                  src={featured[0].image}
                  alt={featured[0].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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

        {/* ── All Destinations Grid ─────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-forest-500" />
                  <span
                    className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Complete list
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-stone-900"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  All Destinations
                </h2>
              </div>
              <span
                className="text-stone-400 text-sm"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {allDestinations.length} destinations
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allDestinations.map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/blog/${dest.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-forest-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-stone-100">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span
                      className={`absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${categoryColors[dest.category] ?? "bg-white/90 text-stone-700"}`}
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {dest.category}
                    </span>
                    {dest.featured && (
                      <span
                        className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-forest-500 text-white"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3
                          className="font-bold text-stone-900 group-hover:text-forest-700 transition-colors"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {dest.title}
                        </h3>
                        <p
                          className="text-forest-600 text-xs font-medium"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {dest.state}
                        </p>
                      </div>
                    </div>

                    <p
                      className="text-stone-500 text-sm line-clamp-2 leading-relaxed flex-1 mb-4"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {dest.description}
                    </p>

                    <div className="border-t border-stone-100 pt-3 mt-auto">
                      <div
                        className="flex items-center justify-between"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        <div className="flex items-center gap-3 text-xs text-stone-400">
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {dest.bestTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {dest.readTime}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-forest-600 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                          Read
                          <svg
                            className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load more */}
            {/* <div className="text-center mt-14">
              <p
                className="text-stone-400 text-sm mb-5"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Showing {allDestinations.length} of 120+ destinations
              </p>
              <button
                className="px-8 py-3.5 border-2 border-stone-200 text-stone-600 font-semibold rounded-full hover:border-forest-400 hover:text-forest-700 hover:bg-forest-50 transition-all text-sm"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Load More Destinations
              </button>
            </div> */}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="bg-stone-950 py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Can't find your destination?
            </h2>
            <p
              className="text-stone-400 text-sm mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              We're adding new guides every week. Join the newsletter to get
              notified when we publish your next destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/newsletter"
                className="px-7 py-3.5 gradient-forest text-white font-semibold rounded-full text-sm hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Get New Guides First →
              </Link>
              <Link
                href="/write-for-us"
                className="px-7 py-3.5 border border-stone-700 text-stone-400 hover:text-white hover:border-stone-500 font-semibold rounded-full text-sm transition-all"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Write for Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
