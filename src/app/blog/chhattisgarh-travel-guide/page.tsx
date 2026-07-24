// src/app/blog/chhattisgarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  GearSection,
} from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chhattisgarh Travel Guide: Chitrakote Falls, Bastar & Raipur",
  description:
    "The complete Chhattisgarh travel guide — the thundering Chitrakote Falls on the Indravati river, the tribal heartland of Bastar, Kanger Valley's caves, Sirpur's Buddhist ruins, where to stay and eat, and a full itinerary through one of India's most underrated, forest-covered states.",
  keywords:
    "Chhattisgarh travel guide, Chitrakote Falls, Bastar travel guide, Bastar Dussehra, Jagdalpur, Kanger Valley National Park, Sirpur, Raipur travel guide, Chhattisgarh itinerary, Central India travel",
  openGraph: {
    title: "Chhattisgarh Travel Guide: Chitrakote Falls, Bastar & Raipur",
    description:
      "India's 'Niagara of India,' a deep tribal heartland, and dense forest cover almost nobody visits — the complete guide to Chhattisgarh, one of Central India's most overlooked states.",
    url: "https://club.kudozz.in/blog/chhattisgarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Clear river water surrounded by green hills, evoking Chhattisgarh's Chitrakote Falls on the Indravati river",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chhattisgarh Travel Guide: Chitrakote Falls, Bastar & Raipur",
    description:
      "The 'Niagara of India,' deep tribal heritage, and near-empty forest trails — the complete guide to Chhattisgarh.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chhattisgarh-travel-guide",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline:
            "Chhattisgarh Travel Guide: Chitrakote Falls, Bastar & Raipur",
          description: "The complete Chhattisgarh travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
          datePublished: "2026-07-22",
          dateModified: "2026-07-22",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/favicon.ico",
            },
          },
          author: {
            "@type": "Organization",
            name: "Kudozz Club",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/chhattisgarh-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Chhattisgarh",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Chhattisgarh",
              addressCountry: "IN",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://club.kudozz.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://club.kudozz.in/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Chhattisgarh Travel Guide",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Chhattisgarh?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chhattisgarh", level: 2 },
  { id: "chitrakote", title: "Chitrakote Falls: The Niagara of India", level: 2 },
  { id: "bastar", title: "Bastar: Tribal Heartland", level: 2 },
  { id: "other-sights", title: "Kanger Valley, Sirpur & Raipur", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "5-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Chhattisgarh-specific gear ─────────────────────────────────────────────
const CHHATTISGARH_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for cave trails, waterfall spray, dense forest, and a state with limited tourist infrastructure outside Raipur",
    emoji: "🌲",
    items: [
      {
        name: "Comfortable Trekking Shoes",
        description:
          "Kanger Valley's Kotumsar Cave and the trails around Chitrakote Falls involve uneven, sometimes damp, rocky terrain.",
        price: "₹1,799",
        rating: 4.4,
        reviews: "7.6k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+shoes+waterproof+travel"),
        tag: "Trail essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "The path down to Kotumsar Cave and the viewpoints around Chitrakote get slippery near spray and monsoon runoff — grip matters.",
      },
      {
        name: "Mosquito Repellent",
        description:
          "Chhattisgarh's dense forest cover, close to 44% of the state, means mosquito presence is a genuine everyday factor around Kanger Valley and Bastar's villages.",
        price: "₹199",
        rating: 4.3,
        reviews: "12k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("mosquito+repellent+travel"),
        tag: "Forest essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Much of a Chhattisgarh trip happens in or near forest — a good repellent is non-negotiable, especially at dawn and dusk.",
      },
      {
        name: "Rain Jacket / Poncho",
        description:
          "Useful year-round given Chitrakote Falls' spray zone, and essential if visiting in the post-monsoon window when the falls are at their most dramatic.",
        price: "₹599",
        rating: 4.3,
        reviews: "4.6k",
        image: "🌂",
        affiliateUrl: amazonSearchUrl("rain+jacket+poncho+travel"),
        tag: "Weather essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Standing anywhere near Chitrakote's viewpoints when the falls are running full means a fair amount of spray, even on a dry day.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Worth carrying for day trips around Jagdalpur, Chitrakote, and Kanger Valley, where charging points thin out quickly outside town centres.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Outside Raipur and Jagdalpur, reliable charging infrastructure is limited — a backup battery avoids being stranded mid-trip.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Handy across long days visiting Bastar's markets, Chitrakote Falls, and the forested Kanger Valley trails.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Reliable shops and water points are limited between major sites in the Bastar region — carrying your own water is the practical choice.",
      },
      {
        name: "Basic First Aid Kit",
        description:
          "Worth having given the state's modest medical infrastructure outside Raipur and Jagdalpur.",
        price: "₹599",
        rating: 4.4,
        reviews: "3.9k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("travel+first+aid+kit"),
        tag: "Small-town essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Medical facilities are concentrated in the state capital and Jagdalpur — basic self-sufficiency is worth having if travelling to interior Bastar villages.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChhattisgarhGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="Clear river water surrounded by green hills, evoking Chhattisgarh's Chitrakote Falls on the Indravati river"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          {/* Breadcrumbs */}
          <nav
            className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10"
            aria-label="Breadcrumb"
          >
            <ol
              className="flex items-center gap-2 text-xs text-white/55"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Chhattisgarh", href: "/blog?category=chhattisgarh" },
                { label: "Travel Guide", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/35">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && (
                    <span className="text-white/20">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Chhattisgarh",
                "Chitrakote Falls",
                "Bastar",
                "Jagdalpur",
                "Tribal Culture",
                "Off-beat",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Chhattisgarh Travel Guide: Chitrakote Falls, Bastar & Raipur
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A horseshoe waterfall wider than Niagara, a tribal heartland
              with festival traditions running longer than almost anywhere
              else in India, and forest cover most travellers have never
              set foot in — Chhattisgarh is Central India's most overlooked
              state.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "13 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Chhattisgarh, Central India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,700 words",
                },
              ].map((m) => (
                <span
                  key={m.text}
                  className="flex items-center gap-1.5 text-sm text-white/55"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.d}
                    />
                  </svg>
                  {m.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Three-Column Layout ───────────────────────────────────────── */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            {/* LEFT — TOC */}
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            {/* CENTER — Article */}
            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                {/* ── Introduction ──────────────────────────────────────── */}
                <section id="introduction">
                  <h2>Why Chhattisgarh?</h2>
                  <p>
                    Carved out of Madhya Pradesh in 2000, <strong>Chhattisgarh</strong>{" "}
                    is one of India's least-visited states, and also one of
                    its most heavily forested — nearly 44% of the state is
                    under forest cover, among the highest proportions in the
                    country. That forest, combined with a genuinely deep
                    tribal heritage, is what makes Chhattisgarh worth the
                    trip.
                  </p>
                  <p>
                    The headline attraction is Chitrakote Falls, a
                    horseshoe-shaped waterfall on the Indravati river near
                    Jagdalpur that's often nicknamed the "Niagara of India" —
                    at peak flow it runs noticeably wider than Niagara Falls,
                    even if it isn't as tall. Beyond the falls, the Bastar
                    region is home to some of India's richest surviving
                    tribal culture, anchored by the Bastar Dussehra, a
                    festival tradition that runs for over 75 days, among the
                    longest continuous festival cycles anywhere in the
                    country.
                  </p>
                  <p>
                    Chhattisgarh sees a fraction of the visitors that
                    neighbouring Madhya Pradesh does, which means genuinely
                    empty viewpoints and trails, but also real gaps in
                    tourist infrastructure once you leave Raipur — plan with
                    flexibility and treat this as an off-the-beaten-path
                    trip, not a polished one.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌲</span> Chhattisgarh at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Chhattisgarh" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Raipur (RPR)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "💦",
                          label: "Known For",
                          value: "Chitrakote Falls, Bastar, Forests",
                        },
                        {
                          icon: "🎭",
                          label: "Culture",
                          value: "Bastar Tribal Heritage",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹5,500",
                        },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">
                            {icon} {label}
                          </span>
                          <span className="text-stone-800 font-medium">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── Best Time ─────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit Chhattisgarh</h2>
                  <p>
                    Chhattisgarh has a hot, humid climate with a strong
                    monsoon — timing genuinely changes both the comfort of
                    travel and how dramatic Chitrakote Falls looks.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick for comfort",
                        text: "Cool, dry, and pleasant (12–28°C) — the most comfortable window for exploring Bastar, Kanger Valley, and Jagdalpur without heat or rain slowing you down.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, dry",
                        text: "Temperatures climb sharply, often past 40°C in the plains around Raipur — outdoor sightseeing is best done early morning.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rainfall",
                        text: "Chhattisgarh receives substantial monsoon rain; rural Bastar roads and Kanger Valley's cave paths can become genuinely difficult to access.",
                      },
                      {
                        season: "Aug – Oct",
                        emoji: "💦",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Chitrakote at its most dramatic",
                        text: "Just after monsoon, the Indravati runs full and Chitrakote Falls is at its widest and loudest — spectacular, but overlapping with harder travel conditions.",
                      },
                    ].map((s) => (
                      <div
                        key={s.season}
                        className={`${s.color} border rounded-xl p-5`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span
                            className="font-bold text-stone-800 text-sm"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {s.season}
                          </span>
                        </div>
                        <span
                          className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">
                          {s.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <blockquote>
                    <strong>Our pick:</strong> If comfortable travel across
                    the whole state matters more than the falls at their
                    peak, go October to February. If Chitrakote Falls at full
                    force is the priority, plan for late September or early
                    October and accept a bit more mud and heat along the way.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chhattisgarh</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Swami Vivekananda Airport
                      (RPR) in Raipur is the state's main gateway, with
                      regular flights from Delhi, Mumbai, Bengaluru,
                      Kolkata, and other major cities.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Raipur and Bilaspur are the
                      two major railway junctions in the state, both well
                      connected to the wider Indian rail network.
                    </li>
                    <li>
                      <strong>By Road:</strong> Raipur is linked by national
                      highways to Nagpur, Bhubaneswar, and other regional
                      hubs, though onward travel to Bastar and Jagdalpur
                      still takes several hours by road.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Jagdalpur has a small
                    domestic airport with limited connectivity — for most
                    itineraries, flying into Raipur and then travelling
                    onward by road or a connecting flight to Jagdalpur is
                    the most practical route into Bastar.
                  </div>
                </section>

                {/* ── Chitrakote Falls ──────────────────────────────────── */}
                <section id="chitrakote">
                  <h2>Chitrakote Falls: The Niagara of India</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Clear river water surrounded by green hills, evoking Chhattisgarh's Chitrakote Falls on the Indravati river"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Chitrakote Falls</strong> sits on the Indravati
                    river, roughly 38 km from Jagdalpur, and is a
                    horseshoe-shaped waterfall that spreads dramatically
                    wide during and after monsoon — at peak flow, its width
                    genuinely exceeds Niagara Falls, though its drop of
                    around 29 metres is nowhere near as tall.
                  </p>
                  <ul>
                    <li>
                      <strong>Post-monsoon peak:</strong> Roughly August to
                      October, when the Indravati runs full and the falls
                      are at their widest and loudest — the single best
                      time to see them.
                    </li>
                    <li>
                      <strong>Dry-season contrast:</strong> Outside monsoon,
                      the falls thin out considerably into multiple smaller
                      cascades, still scenic but far less dramatic than the
                      "Niagara of India" reputation suggests.
                    </li>
                    <li>
                      <strong>Viewpoints and boat rides:</strong> Multiple
                      viewpoints overlook the falls, and local boat
                      operators offer short rides on the river below during
                      calmer water conditions.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're visiting in the
                    post-monsoon peak window, expect spray to reach the main
                    viewpoints — a rain jacket keeps cameras and phones dry
                    without missing the view.
                  </div>
                </section>

                {/* ── Bastar ────────────────────────────────────────────── */}
                <section id="bastar">
                  <h2>Bastar: Tribal Heartland</h2>
                  <p>
                    The Bastar region, centred on <strong>Jagdalpur</strong>,
                    is home to some of India's most intact tribal culture,
                    including the Gond, Muria, and Maria communities, and is
                    the region most travellers come to Chhattisgarh for
                    beyond Chitrakote Falls.
                  </p>
                  <ul>
                    <li>
                      <strong>Bastar Dussehra:</strong> An extraordinary
                      festival tradition running for over 75 days, among the
                      longest continuous festival cycles in India, distinct
                      from the Dussehra celebrated elsewhere in the country
                      and rooted in local tribal and royal history.
                    </li>
                    <li>
                      <strong>Dhokra metal casting:</strong> A traditional
                      lost-wax metal casting craft practised by artisans
                      across Bastar, producing distinctive figurines and
                      decorative pieces — genuinely worth seeking out
                      directly from artisan villages.
                    </li>
                    <li>
                      <strong>Terracotta art:</strong> Bastar's tribal
                      terracotta work, often depicting animals and deities,
                      is another significant craft tradition rooted in local
                      village practice.
                    </li>
                    <li>
                      <strong>Weekly tribal haats:</strong> Rotating weekly
                      markets held across Bastar's villages, where tribal
                      communities trade produce, crafts, and goods — a far
                      more grounded way to experience local life than any
                      formal tourist site.
                    </li>
                  </ul>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Kanger Valley, Sirpur & Raipur</h2>
                  <ul>
                    <li>
                      <strong>Kanger Valley National Park:</strong> A
                      biodiversity-rich forest reserve near Jagdalpur, home
                      to limestone caves including Kotumsar Cave, along with
                      several waterfalls and a wide range of Central Indian
                      flora and fauna.
                    </li>
                    <li>
                      <strong>Sirpur:</strong> An ancient archaeological site
                      with excavated Buddhist monastery ruins dating back
                      well over a thousand years, offering a very different
                      side of Chhattisgarh's history from its tribal
                      heritage.
                    </li>
                    <li>
                      <strong>Raipur:</strong> The state capital, worth a day
                      for the Mahant Ghasidas Memorial Museum, which holds a
                      strong collection of tribal artefacts and regional
                      history, alongside the city's more standard urban
                      sightseeing.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is concentrated in Raipur and Jagdalpur —
                    outside these two towns, options thin out significantly,
                    so plan day trips to Chitrakote and Kanger Valley
                    accordingly.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,700/night",
                        picks: [
                          "Guesthouses and lodges, Jagdalpur",
                          "State tourism board stays, Raipur",
                          "Basic rooms near Chitrakote Falls",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹4,000/night",
                        picks: [
                          "Business hotels, Raipur",
                          "Mid-range hotels, Jagdalpur",
                          "Resort-style stays near Kanger Valley",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹4,500–₹9,000+/night",
                        picks: [
                          "Premium business hotels, Raipur",
                          "Select upscale hotels, Jagdalpur",
                          "Heritage-style stays (very limited)",
                        ],
                      },
                    ].map((t) => (
                      <div
                        key={t.tier}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div
                          className="font-bold text-stone-900 mb-1"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {t.tier}
                        </div>
                        <div
                          className="text-xs text-forest-600 font-medium mb-3"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {t.range}
                        </div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li
                              key={p}
                              className="text-xs text-stone-600"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <blockquote>
                    Base yourself in Jagdalpur for the Bastar and Chitrakote
                    leg of the trip, and in Raipur for the capital and
                    Sirpur — dedicated tourist accommodation elsewhere in
                    the state is genuinely limited.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Chhattisgarh</h2>
                  <ul>
                    <li>
                      <strong>Chila:</strong> Savoury rice-flour pancakes,
                      often served for breakfast — a Chhattisgarhi staple
                      reflecting the state's rice-belt roots.
                    </li>
                    <li>
                      <strong>Bafauri:</strong> Steamed, then lightly fried
                      dumplings made from ground chana dal, typically served
                      with chutney — a popular local snack.
                    </li>
                    <li>
                      <strong>Faraa:</strong> Steamed rice-flour dumplings,
                      simple and homely, often eaten with a splash of
                      mustard oil.
                    </li>
                    <li>
                      <strong>Rice-based staples:</strong> As with much of
                      Central India's rice belt and its tribal food
                      traditions, rice in various forms forms the backbone
                      of most everyday Chhattisgarhi meals, paired with
                      simple dals and seasonal vegetables.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>5-Day Chhattisgarh Itinerary</h2>
                  <p>
                    Five days is a reasonable minimum to cover Raipur,
                    Bastar, Chitrakote Falls, and Kanger Valley without
                    excessive rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Raipur",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Mahant Ghasidas Memorial Museum",
                          "Evening: local market walk in Raipur",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Sirpur & Onward to Jagdalpur",
                        color: "bg-sky-600",
                        activities: [
                          "Morning at Sirpur's Buddhist ruins",
                          "Travel onward to Jagdalpur",
                          "Evening arrival and check in",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Bastar & Jagdalpur",
                        color: "bg-forest-600",
                        activities: [
                          "Visit a nearby tribal haat (market day permitting)",
                          "Dhokra and terracotta artisan villages",
                          "Explore Jagdalpur town",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Chitrakote Falls",
                        color: "bg-stone-600",
                        activities: [
                          "Drive to Chitrakote Falls",
                          "Multiple viewpoints, boat ride if conditions allow",
                          "Return to Jagdalpur",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Kanger Valley & Departure",
                        color: "bg-purple-600",
                        activities: [
                          "Kanger Valley National Park, Kotumsar Cave",
                          "Last-minute Jagdalpur sightseeing",
                          "Departure",
                        ],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div
                            className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`}
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {d.day}
                          </div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4
                            className="font-bold text-stone-900 mb-3"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {d.title}
                          </h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li
                                key={a}
                                className="text-sm text-stone-600 flex items-start gap-2"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                              >
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">
                                  ✓
                                </span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map(
                            (h) => (
                              <th
                                key={h}
                                className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                              >
                                {h}
                              </th>
                            ),
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          [
                            "Accommodation/night",
                            "₹900",
                            "₹2,700",
                            "₹6,500",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          [
                            "Local transport/day",
                            "₹500",
                            "₹1,200",
                            "₹2,800",
                          ],
                          ["Activities/day", "₹200", "₹500", "₹1,000"],
                          ["Daily total", "₹2,000", "₹5,300", "₹12,300"],
                          [
                            "5-Day trip total",
                            "₹10,000",
                            "₹26,500",
                            "₹61,500",
                          ],
                        ].map(([exp, b, m, l], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {b}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {m}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {l}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Excludes flights to Raipur. Local transport costs are
                    higher than average given the distances between Raipur,
                    Jagdalpur, Chitrakote Falls, and Kanger Valley.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Chhattisgarh</h2>
                  <ul>
                    <li>
                      <strong>Check current travel advisories:</strong> Parts
                      of interior Bastar districts have periodically seen
                      security-related travel advisories — confirm the
                      latest guidance before finalising plans and stick to
                      well-established tourist routes around Jagdalpur,
                      Chitrakote, and Kanger Valley.
                    </li>
                    <li>
                      <strong>Hire a car with driver for day trips:</strong>{" "}
                      Public transport to Chitrakote Falls and Kanger Valley
                      is limited and slow — a private vehicle is far more
                      practical.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card and digital payment
                      acceptance is inconsistent outside Raipur and
                      Jagdalpur's main commercial areas.
                    </li>
                    <li>
                      <strong>Respect tribal village and haat etiquette:</strong>{" "}
                      If visiting a weekly tribal market or village, go with
                      a local guide and ask before photographing people or
                      ceremonies.
                    </li>
                    <li>
                      <strong>Time your trip around Bastar Dussehra if
                      interested:</strong> This 75-day-plus festival cycle is
                      one of the most distinctive cultural experiences in
                      the state — check the current year's schedule if it's
                      a priority.
                    </li>
                    <li>
                      <strong>Book flights well ahead in peak season:</strong>{" "}
                      Raipur has moderate flight frequency compared to
                      larger metro hubs, and options into Jagdalpur are
                      thinner still.
                    </li>
                  </ul>

                  {/* Do & Don't */}
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✅</span> Do
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Check current advisories before visiting interior Bastar districts",
                          "Hire a car with driver for Chitrakote and Kanger Valley",
                          "Try local dishes like chila, bafauri, and faraa",
                          "Carry cash for areas outside Raipur and Jagdalpur",
                          "Ask permission before photographing tribal communities",
                          "Time your visit around Bastar Dussehra if interested",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">
                              →
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-red-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>❌</span> Don't
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Travel into unfamiliar interior Bastar areas without checking advisories",
                          "Rely on public transport for Chitrakote or Kanger Valley",
                          "Expect Madhya Pradesh-level tourist infrastructure",
                          "Rely on cards outside Raipur or Jagdalpur's main areas",
                          "Photograph tribal communities without asking first",
                          "Skip mosquito precautions on forested day trips",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">
                              →
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Chhattisgarh",
                  "Chitrakote Falls",
                  "Bastar",
                  "Jagdalpur",
                  "Kanger Valley",
                  "Tribal Culture",
                  "Off-beat",
                ].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              {/* ── Gear Recommendations ──────────────────────────────── */}
              <TrekGearRecommendations
                sections={CHHATTISGARH_GEAR}
                destination="Chhattisgarh"
              />

              <RelatedPostsGrid currentSlug="chhattisgarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chhattisgarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
