// src/app/blog/dadra-nagar-haveli-daman-diu-travel-guide/page.tsx
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
  title:
    "Dadra & Nagar Haveli and Daman & Diu Travel Guide: Forts, Beaches & Weekend Trip",
  description:
    "The complete travel guide to Dadra & Nagar Haveli and Daman & Diu — Diu Fort, Nagoa Beach, Silvassa's tribal culture, INS Khukri Memorial, duty-free shopping, where to stay and eat, and a full weekend itinerary for India's quietest coastal Union Territory.",
  keywords:
    "Dadra Nagar Haveli travel guide, Daman Diu travel guide, Diu Fort, Nagoa Beach, Silvassa tourism, Diu weekend trip, Daman beaches, Gujarat coastal getaway, INS Khukri Memorial, Diu Portuguese heritage",
  openGraph: {
    title:
      "Dadra & Nagar Haveli and Daman & Diu Travel Guide: Forts, Beaches & Weekend Trip",
    description:
      "Portuguese forts, quiet beaches, duty-free liquor, and a coastline barely anyone visits — the complete guide to India's smallest, most overlooked Union Territory.",
    url: "https://club.kudozz.in/blog/dadra-nagar-haveli-daman-diu-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Portuguese-era fort walls overlooking the sea, evoking the coastal forts of Diu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dadra & Nagar Haveli and Daman & Diu Travel Guide: Forts, Beaches & Weekend Trip",
    description:
      "Portuguese forts, quiet beaches, and duty-free shopping — the complete guide to Daman, Diu, Silvassa and Dadra & Nagar Haveli.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/dadra-nagar-haveli-daman-diu-travel-guide",
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
            "Dadra & Nagar Haveli and Daman & Diu Travel Guide: Forts, Beaches & Weekend Trip",
          description:
            "The complete travel guide to Dadra & Nagar Haveli and Daman & Diu.",
          image: "https://club.kudozz.in/images/destinations/goa/hero.jpg",
          datePublished: "2026-07-19",
          dateModified: "2026-07-19",
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
            "@id": "https://club.kudozz.in/blog/dadra-nagar-haveli-daman-diu-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Dadra and Nagar Haveli and Daman and Diu",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Dadra and Nagar Haveli and Daman and Diu",
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
                name: "Dadra & Nagar Haveli and Daman & Diu Travel Guide",
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
  { id: "introduction", title: "Why Visit DNH & DD?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "diu", title: "Diu: Forts & Beaches", level: 2 },
  { id: "daman", title: "Daman: Beaches & Bazaars", level: 2 },
  { id: "silvassa", title: "Silvassa & Dadra-Nagar Haveli", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── DNH & DD-specific gear ──────────────────────────────────────────────────
const DNHDD_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for fort walks, quiet beaches, and a Union Territory with barely any tourist infrastructure",
    emoji: "🏰",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "Diu Fort's ramparts, bastions and the old town's cobbled lanes involve a lot of uneven walking in direct sun — proper shoes matter more here than sandals.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Fort-walk essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "The fort has no shade and uneven stone surfaces throughout — flip-flops make the walk uncomfortable within minutes.",
      },
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description:
          "Coastal sun on the Diu and Daman beaches is intense with little natural shade, and reef-safe formulas are better for the shallow shoreline ecosystems.",
        price: "₹549",
        rating: 4.5,
        reviews: "11k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+spf+50"),
        tag: "Beach essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Nagoa and Jampore beaches offer almost no shade cover — sunburn is the most common complaint from day-trippers here.",
      },
      {
        name: "Wide-Brim Sun Hat",
        description:
          "Useful for both the exposed fort ramparts in Diu and long, flat beach walks at Nagoa and Jampore.",
        price: "₹399",
        rating: 4.3,
        reviews: "5.6k",
        image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"),
        tag: "Sun essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Both Diu Fort and the beaches are fully exposed — a hat makes a real difference across a full day of sightseeing.",
      },
      {
        name: "Insulated Water Bottle",
        description:
          "Standalone eateries and water points are sparse between Diu's fort area, old town, and the beaches — carrying your own water is the practical choice.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Diu's small-town layout means you can walk 20–30 minutes between the fort, old town, and nearest shop without seeing a vendor.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for the drive between Silvassa, Daman and Diu, which involves stretches with limited charging stops.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Road-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "If you're combining Silvassa and Daman with Diu, you're looking at long drives with sparse charging infrastructure along the way.",
      },
      {
        name: "Basic First Aid Kit",
        description:
          "Handy for small-town travel where pharmacies and clinics are limited outside the main markets.",
        price: "₹599",
        rating: 4.4,
        reviews: "3.9k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("travel+first+aid+kit"),
        tag: "Small-town essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Medical infrastructure across the territory is modest — basic self-sufficiency is worth having, especially with kids or on a road trip.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DadraNagarHaveliDamanDiuGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/goa/hero.jpg"
              alt="Portuguese-era fort walls overlooking the sea, evoking the coastal forts of Diu"
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
                {
                  label: "Daman & Diu",
                  href: "/blog?category=dadra-nagar-haveli-daman-diu",
                },
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
                "Diu",
                "Daman",
                "Silvassa",
                "Portuguese Heritage",
                "Weekend Trip",
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
              Dadra & Nagar Haveli and Daman & Diu Travel Guide: Forts,
              Beaches & Weekend Trip
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A 16th-century Portuguese sea fort, near-empty beaches, and a
              tribal heartland barely two hours from Mumbai — India's smallest
              Union Territory is also its most overlooked weekend escape.
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
                  text: "Diu, Daman & Silvassa",
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
                  <h2>Why Visit Dadra & Nagar Haveli and Daman & Diu?</h2>
                  <p>
                    Merged into a single Union Territory in 2020,{" "}
                    <strong>Dadra & Nagar Haveli and Daman & Diu</strong> is
                    two disconnected pockets on India's west coast — Silvassa
                    and Dadra-Nagar Haveli tucked into Gujarat and
                    Maharashtra's border near the Sahyadri foothills, and
                    Daman and the island of Diu strung along the Gujarat
                    coastline, roughly 750 km apart from each other.
                  </p>
                  <p>
                    What ties them together is nearly 200 years of Portuguese
                    rule that ended only in 1961 — later than almost anywhere
                    else in India. That history left Diu with a genuinely
                    spectacular sea fort, whitewashed churches, and an old
                    town that feels closer to Goa than to Gujarat, but without
                    Goa's crowds, prices, or nightlife scene.
                  </p>
                  <p>
                    It's not a destination that headlines anyone's India
                    bucket list, and that's exactly the appeal — empty
                    beaches, a fort you can wander without dodging tour
                    groups, duty-free liquor prices (both Diu and Daman are
                    dry-state-adjacent exceptions), and a coastline still
                    waiting to be discovered by the mainstream.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> DNH & DD at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Union Territory",
                          value: "DNH & Daman and Diu",
                        },
                        {
                          icon: "🚗",
                          label: "From Mumbai",
                          value: "~180 km (Silvassa) / ~200 km (Daman)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "⛪",
                          label: "Known For",
                          value: "Diu Fort, Beaches, Portuguese Heritage",
                        },
                        {
                          icon: "🍺",
                          label: "Note",
                          value: "Diu & Daman are duty-free zones",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,800 – ₹6,500",
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
                  <h2>Best Time to Visit</h2>
                  <p>
                    Coastal Gujarat's climate is hot and humid most of the
                    year, which narrows the comfortable window for exploring
                    Diu's fort and Daman's beaches on foot.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant, dry weather (18–30°C) makes fort walks, beach time and drives between towns genuinely comfortable — the peak window for a visit.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot but manageable",
                        text: "Temperatures climb into the mid-30s and beyond — plan sightseeing for early morning or evening, and swim during the day.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — quiet but wet",
                        text: "Heavy rain and rough seas make beach time unpleasant, though the fort and old town still make for an atmospheric, crowd-free visit.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak season",
                        text: "Cooler weather draws the most domestic weekend travellers — book stays ahead, especially around New Year in Diu.",
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
                    <strong>Our pick:</strong> November to February — cool
                    enough for the fort walk at midday, warm enough for the
                    beaches every evening.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach</h2>
                  <p>
                    The territory's two halves are reached quite differently
                    — plan for one trip or the other rather than both in a
                    single weekend.
                  </p>
                  <ul>
                    <li>
                      <strong>To Diu:</strong> Diu Airport has limited direct
                      flights from Mumbai; otherwise the nearest railhead is
                      Una (13 km) or Veraval, both connected to Ahmedabad and
                      Rajkot. Self-drive from Ahmedabad (~360 km, 7 hrs) is
                      popular for a longer road trip.
                    </li>
                    <li>
                      <strong>To Daman:</strong> The nearest railway station
                      is Vapi (12 km) on the Mumbai–Ahmedabad main line, well
                      connected by frequent trains. By road, Daman is roughly
                      3 hrs from Mumbai and 5 hrs from Ahmedabad.
                    </li>
                    <li>
                      <strong>To Silvassa:</strong> Closest to Mumbai —
                      roughly 3 hrs by road via NH48, or a short drive from
                      Vapi railway station (~18 km).
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Diu and Daman are not close to
                    each other despite sharing a name — treat this as two
                    separate trip options rather than one combined itinerary
                    unless you have 5+ days and enjoy long coastal drives.
                  </div>
                </section>

                {/* ── Diu ───────────────────────────────────────────────── */}
                <section id="diu">
                  <h2>Diu: Forts & Beaches</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/hero.jpg"
                      alt="Coastal fort ramparts by the sea, evocative of Diu Fort's Portuguese architecture"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    A small island connected to the mainland by two bridges,
                    Diu is the undisputed highlight of the territory — quiet,
                    walkable, and stacked with more Portuguese-era heritage
                    than anywhere in India outside Goa.
                  </p>
                  <ul>
                    <li>
                      <strong>Diu Fort:</strong> A 16th-century sea fort with
                      multiple bastions, a lighthouse, and cannons still
                      pointed out at the Arabian Sea — the single
                      unmissable sight in the territory.
                    </li>
                    <li>
                      <strong>Diu old town:</strong> Narrow lanes lined with
                      pastel Portuguese-era houses, colonial churches like St.
                      Paul's Church, and a genuinely photogenic town square.
                    </li>
                    <li>
                      <strong>Nagoa Beach:</strong> A crescent-shaped,
                      relatively clean beach with calm water — the best swim
                      spot on the island and the closest thing Diu has to a
                      "main" beach.
                    </li>
                    <li>
                      <strong>Gangeshwar Temple:</strong> A cluster of
                      Shivlings sitting directly on the rocks where waves
                      crash over them — unusual and worth the short detour.
                    </li>
                    <li>
                      <strong>INS Khukri Memorial:</strong> A striking
                      submarine-shaped monument on Zampa Beach honouring the
                      warship sunk in the 1971 war.
                    </li>
                    <li>
                      <strong>Naida Caves:</strong> Sun-dappled sandstone
                      caves near the fort, a favourite quick photo stop.
                    </li>
                  </ul>
                </section>

                {/* ── Daman ─────────────────────────────────────────────── */}
                <section id="daman">
                  <h2>Daman: Beaches & Bazaars</h2>
                  <p>
                    Split by the Daman Ganga river into Nani Daman (smaller,
                    older) and Moti Daman (larger, with the main fort), Daman
                    is a far more low-key stop than Diu, popular mostly as a
                    weekend escape for travellers from Mumbai and Gujarat.
                  </p>
                  <ul>
                    <li>
                      <strong>Jampore Beach:</strong> A long, quiet,
                      casuarina-lined stretch, better for a peaceful walk than
                      a swim given the grey sand and modest waves.
                    </li>
                    <li>
                      <strong>Moti Daman Fort:</strong> A well-preserved
                      Portuguese fort housing government offices and a church
                      inside its walls — less dramatic than Diu Fort but still
                      worth an hour.
                    </li>
                    <li>
                      <strong>Devka Beach:</strong> The most developed beach
                      in Daman, with a small promenade, food stalls, and a
                      garden — busier and more "resort town" in feel.
                    </li>
                    <li>
                      <strong>Bom Jesus Church:</strong> A striking colonial
                      church inside Moti Daman Fort, one of the oldest in the
                      region.
                    </li>
                    <li>
                      <strong>Duty-free shopping:</strong> Both Daman and Diu
                      sell alcohol tax-free, making them popular weekend
                      day-trip destinations from dry-state-adjacent Gujarat.
                    </li>
                  </ul>
                </section>

                {/* ── Silvassa ──────────────────────────────────────────── */}
                <section id="silvassa">
                  <h2>Silvassa & Dadra-Nagar Haveli</h2>
                  <p>
                    The inland half of the territory, Silvassa is greener and
                    more forested than Daman or Diu, with a significant tribal
                    Warli population and a very different character from the
                    coastal towns.
                  </p>
                  <ul>
                    <li>
                      <strong>Vasona Lion Safari Park:</strong> A small
                      zoological park with lions, deer and crocodiles, popular
                      with families.
                    </li>
                    <li>
                      <strong>Hirwa Van Garden & Deer Park:</strong> Landscaped
                      gardens good for an easy evening walk.
                    </li>
                    <li>
                      <strong>Warli tribal villages:</strong> Silvassa's
                      surrounding villages are known for distinctive Warli
                      wall art — worth seeking out for a genuinely different
                      cultural experience than the coastal towns.
                    </li>
                    <li>
                      <strong>Island Garden (Dudhni):</strong> A small island
                      on the Daman Ganga reservoir, reached by boat, popular
                      for its adventure activities and quiet setting.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Silvassa works well as a
                    standalone 1–2 day trip from Mumbai — don't try to
                    squeeze it in alongside Diu given the distance between
                    them.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do</h2>
                  <ul>
                    <li>
                      <strong>Walk the ramparts of Diu Fort:</strong> Best at
                      sunset, when the light hits the old cannons and the sea
                      beyond the bastions turns gold.
                    </li>
                    <li>
                      <strong>Cycle or moped around Diu island:</strong>{" "}
                      Rentals are cheap and the island is small enough to
                      cover most sights in a day.
                    </li>
                    <li>
                      <strong>Swim at Nagoa Beach:</strong> Calm, clean water
                      and paddleboat rentals make it the best swim spot in the
                      territory.
                    </li>
                    <li>
                      <strong>Explore the old town's Portuguese houses:</strong>{" "}
                      Quiet lanes with balconies and facades that wouldn't
                      look out of place in Fontainhas, Goa.
                    </li>
                    <li>
                      <strong>Shop duty-free:</strong> Alcohol prices in Diu
                      and Daman are significantly lower than neighbouring dry
                      or high-tax states.
                    </li>
                    <li>
                      <strong>Visit Warli art villages near Silvassa:</strong>{" "}
                      A quieter, culture-focused counterpoint to the coastal
                      sightseeing.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is modest in scale everywhere in the
                    territory — don't expect the resort density of Goa, and
                    book ahead for weekends and the December–January peak.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Guesthouses near Diu old town",
                          "Budget lodges, Nani Daman",
                          "Homestays, Silvassa outskirts",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Hoka Trees Resort (Diu)",
                          "Beach-facing hotels, Nagoa",
                          "Business hotels, Daman & Silvassa",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌴",
                        range: "₹7,000–₹15,000+/night",
                        picks: [
                          "Radisson Blu Resort (Daman)",
                          "Premium sea-view properties, Diu",
                          "Resort stays, Silvassa (Dudhni area)",
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
                    Diu's old town guesthouses offer the best value and
                    atmosphere combination — many occupy converted
                    Portuguese-era houses within walking distance of the
                    fort.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat</h2>
                  <p>
                    Expect a blend of Gujarati vegetarian staples, fresh
                    seafood along the coast, and lingering Portuguese
                    influence in a few local specialities.
                  </p>
                  <ul>
                    <li>
                      <strong>Fresh seafood in Diu:</strong> Pomfret, prawns
                      and squid feature heavily at seafront shacks — grilled
                      or fried in a distinctly coastal-Gujarati style.
                    </li>
                    <li>
                      <strong>Gujarati thalis:</strong> Widely available in
                      Silvassa and Daman, especially given the territory's
                      geographic overlap with Gujarat.
                    </li>
                    <li>
                      <strong>Farsan and street snacks:</strong> Common across
                      all three towns, reflecting strong Gujarati culinary
                      influence.
                    </li>
                    <li>
                      <strong>Duty-free beer and seafood pairing:</strong> A
                      popular reason travellers visit Diu specifically —
                      affordable alcohol alongside fresh catch, uncommon in
                      much of neighbouring Gujarat.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>3-Day Diu Itinerary</h2>
                  <p>
                    Diu alone justifies a focused 3-day trip — this itinerary
                    covers the fort, old town, and beaches without feeling
                    rushed.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Fort & Old Town",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: Arrive, check in, breakfast in the old town",
                          "Late morning: Explore Diu Fort and its bastions",
                          "Afternoon: Wander old town lanes and churches",
                          "Evening: Sunset from the fort ramparts",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Beaches & Island Loop",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Swim and relax at Nagoa Beach",
                          "Afternoon: Rent a moped, visit Gangeshwar Temple and Naida Caves",
                          "Evening: INS Khukri Memorial at Zampa Beach",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Slow Morning & Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Morning: Second visit to the fort or old town for photos",
                          "Late morning: Duty-free shopping before heading out",
                          "Afternoon: Departure",
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
                  <h2>Budget Breakdown (Diu, per day)</h2>
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
                            "₹1,500",
                            "₹4,000",
                            "₹9,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹600",
                            "₹1,500",
                          ],
                          [
                            "Activities/day",
                            "₹200",
                            "₹500",
                            "₹1,200",
                          ],
                          [
                            "Daily total",
                            "₹2,500",
                            "₹6,300",
                            "₹14,200",
                          ],
                          [
                            "3-Day trip total",
                            "₹7,500",
                            "₹18,900",
                            "₹42,600",
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
                    * Excludes travel to Diu/Daman/Silvassa. Costs are
                    notably lower than comparable coastal destinations like
                    Goa.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li>
                      <strong>Diu and Daman are far apart:</strong> Don't plan
                      to visit both on one short trip — treat them as
                      separate destinations.
                    </li>
                    <li>
                      <strong>Book ahead for weekends:</strong> Both towns see
                      a surge of Gujarati and Mumbai weekend travellers,
                      especially around duty-free shopping trips.
                    </li>
                    <li>
                      <strong>Carry cash for small towns:</strong> Card
                      acceptance thins out quickly outside the main markets
                      and hotels.
                    </li>
                    <li>
                      <strong>Rent a moped in Diu:</strong> It's genuinely the
                      best way to see the island — distances are short and
                      traffic is minimal.
                    </li>
                    <li>
                      <strong>Avoid midday fort visits in summer:</strong>{" "}
                      There's no shade on the ramparts — go early morning or
                      just before sunset.
                    </li>
                    <li>
                      <strong>Respect duty-free limits:</strong> There are
                      quantity restrictions on alcohol carried out of Diu and
                      Daman into neighbouring states — check current limits
                      before stocking up.
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
                          "Watch sunset from Diu Fort's ramparts",
                          "Rent a moped to explore Diu island",
                          "Book stays ahead for weekends and December–January",
                          "Carry cash for small vendors and markets",
                          "Visit Nagoa Beach for the best swimming",
                          "Try fresh seafood at Diu's seafront shacks",
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
                          "Try to combine Diu and Daman in one short trip",
                          "Visit the fort ramparts at midday in peak summer",
                          "Exceed duty-free alcohol carry limits",
                          "Expect Goa-level nightlife or resort density",
                          "Rely on cards outside main markets and hotels",
                          "Skip booking ahead during the December–January peak",
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
                  "Diu",
                  "Daman",
                  "Silvassa",
                  "Dadra Nagar Haveli",
                  "Portuguese Heritage",
                  "Weekend Trip",
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
                sections={DNHDD_GEAR}
                destination="Dadra & Nagar Haveli and Daman & Diu"
              />

              <RelatedPostsGrid currentSlug="dadra-nagar-haveli-daman-diu-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="dadra-nagar-haveli-daman-diu-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
