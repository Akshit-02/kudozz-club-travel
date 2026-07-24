// src/app/blog/mahe-district-travel-guide/page.tsx
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
  title: "Mahe District Travel Guide: Riverfront, Church & Malabar Coast",
  description:
    "The complete Mahe District travel guide — Mahe town's riverfront walkway, St. Teresa's Shrine, Tagore Park, beach and lighthouse on the Mahe River mouth, plus the quiet river-and-village surroundings of Palloor, Pandakkal, Chalakkara, and Parakkal.",
  keywords:
    "Mahe district travel guide, Mahe Kerala, Mahe beach, St. Teresa's shrine Mahe, Mahe walkway, Mahe river, Tagore park Mahe, Mahe lighthouse, Palloor, Pandakkal, Chalakkara, Parakkal, Malabar coast, Puducherry union territory",
  openGraph: {
    title: "Mahe District Travel Guide: Riverfront, Church & Malabar Coast",
    description:
      "A French-era riverfront enclave on Kerala's Malabar coast — Mahe's walkway, St. Teresa's Shrine, and the quiet river villages around it.",
    url: "https://club.kudozz.in/blog/mahe-district-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Calm river meeting the coast, evoking Mahe's riverfront on the Malabar coast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahe District Travel Guide: Riverfront, Church & Malabar Coast",
    description:
      "Mahe's riverfront walkway, St. Teresa's Shrine, and the quiet river villages of Palloor, Pandakkal, Chalakkara, and Parakkal.",
    images: ["/images/destinations/kerala/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mahe-district-travel-guide",
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
            "Mahe District Travel Guide: Riverfront, Church & Malabar Coast",
          description:
            "The complete Mahe District travel guide, covering Mahe town, Palloor, Pandakkal, Chalakkara, and Parakkal.",
          image: "https://club.kudozz.in/images/destinations/kerala/hero.jpg",
          datePublished: "2026-07-24",
          dateModified: "2026-07-24",
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
            "@id": "https://club.kudozz.in/blog/mahe-district-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Mahe District",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Puducherry",
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
                name: "Mahe District Travel Guide",
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
  { id: "introduction", title: "Why Mahe District?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "mahe-town", title: "Mahe Town", level: 2 },
  {
    id: "palloor-pandakkal",
    title: "Palloor & Pandakkal",
    level: 2,
  },
  {
    id: "chalakkara-parakkal",
    title: "Chalakkara & Parakkal",
    level: 2,
  },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Mahe District gear ───────────────────────────────────────────────────────
const MAHE_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for riverfront walks in Mahe town, church visits, and the quiet river villages around Palloor, Pandakkal, Chalakkara, and Parakkal",
    emoji: "🌊",
    items: [
      {
        name: "Comfortable Walking Sandals",
        description:
          "Ideal for the Mahe Walkway along the riverfront and the short strolls through Tagore Park and around St. Teresa's Shrine.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "8.2k",
        image: "👡",
        affiliateUrl: amazonSearchUrl("comfortable+walking+sandals+travel"),
        tag: "All-day essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Mahe's compact riverfront and church grounds are best covered slowly on foot rather than by vehicle.",
      },
      {
        name: "Modest Clothing for Church Visits",
        description:
          "Covered shoulders for St. Teresa's Shrine and the smaller village churches around Palloor and Pandakkal.",
        price: "₹899",
        rating: 4.3,
        reviews: "3.1k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("travel+modest+clothing+scarf"),
        tag: "Church essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "St. Teresa's Shrine is an active place of worship, especially busy during its annual feast — modest dress is expected.",
      },
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description:
          "For open stretches at Mahe Beach, the lighthouse walk, and boat trips along the Mahe and Chalakkara rivers.",
        price: "₹549",
        rating: 4.5,
        reviews: "11k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+spf+50"),
        tag: "Coastal essential",
        tagColor: "bg-orange-100 text-orange-700",
        why: "The Malabar coast sun is strong and near-constant, with little shade along the river mouth and beach.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Useful for the drive out to Chalakkara and Parakkal, where shops are sparser than in Mahe town itself.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Mahe town has plenty of shops, but the surrounding villages thin out quickly once you're past the commune limits.",
      },
      {
        name: "Mosquito Repellent",
        description:
          "Worth having near the Mahe and Chalakkara river surroundings, especially at dawn and dusk.",
        price: "₹199",
        rating: 4.3,
        reviews: "12k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("mosquito+repellent+travel"),
        tag: "Riverside essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Mahe's river-mouth geography and the smaller rivers around Chalakkara and Pandakkal mean mosquito presence is a genuine everyday factor.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for a day covering Palloor, Pandakkal, Chalakkara, and Parakkal, where charging points are limited outside Mahe town.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Mahe is a compact district, but reliable charging infrastructure is concentrated almost entirely in the town centre.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MaheDistrictGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/kerala/hero.jpg"
              alt="Calm river meeting the coast, evoking Mahe's riverfront on the Malabar coast"
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
                { label: "Mahe", href: "/blog?category=mahe" },
                { label: "District Guide", href: null },
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
                "Mahe District",
                "Malabar Coast",
                "Kerala",
                "Riverfront",
                "St. Teresa's Shrine",
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
              Mahe District Travel Guide: Riverfront, Church & Malabar Coast
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A tiny French-era enclave on Kerala's Malabar coast, built
              around the mouth of the Mahe River — a riverfront walkway, a
              historic church, and quiet river villages almost no outside
              visitor sees.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "10 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Mahe District, Malabar Coast",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
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
                  <h2>Why Mahe District?</h2>
                  <p>
                    Tucked into Kerala's Malabar coast near Thalassery,{" "}
                    <strong>Mahe</strong> (also written Mahé, and known
                    locally as Mayyazhi) is the smallest of Puducherry Union
                    Territory's four districts — a French trading post
                    founded in 1721, now a quiet riverfront town most
                    travellers pass without stopping.
                  </p>
                  <p>
                    That's the appeal. Mahe sits where the Mahe River meets
                    the Arabian Sea, and its compact town centre still carries
                    a genuine French colonial layer — a riverfront walkway,
                    a historic church, and a small-town pace that feels
                    completely different from the busier Malabar towns
                    around it. Beyond the town, the surrounding villages of
                    Palloor, Pandakkal, Chalakkara, and Parakkal are quiet
                    river-and-farmland stretches that rarely appear on any
                    itinerary at all.
                  </p>
                  <p>
                    Mahe isn't a multi-day destination on its own — it's a
                    genuinely worthwhile half-day-to-two-day detour if you're
                    already travelling along the Malabar coast between
                    Kozhikode and Kannur.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛵</span> Mahe District at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Mahe (Puducherry UT)",
                        },
                        {
                          icon: "🌊",
                          label: "Location",
                          value: "Malabar coast, Kerala enclave",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        {
                          icon: "🚗",
                          label: "From Kozhikode",
                          value: "~50 km, 1.5 hrs",
                        },
                        {
                          icon: "⛪",
                          label: "Known For",
                          value: "Riverfront, St. Teresa's Shrine",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹900 – ₹4,000",
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
                  <h2>Best Time to Visit Mahe District</h2>
                  <p>
                    Mahe shares Kerala's Malabar coast climate — heavy
                    monsoon rain for much of the year, with a clear
                    comfortable window either side of it.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "🌤️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and pleasant (20–30°C) — ideal for the riverfront walkway, Mahe Beach, and drives out to the surrounding villages.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot and humid",
                        text: "Temperatures and humidity both climb — manageable with early mornings, but not the district's most comfortable stretch.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Southwest monsoon — heavy",
                        text: "The Malabar coast gets serious monsoon rainfall in this window — the Mahe and Chalakkara rivers run high, and outdoor plans need real flexibility.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌦️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Transitional — improving fast",
                        text: "Rain tapers off through the month, with rivers still running full — a good time to see Mahe's riverfront at its most scenic without full monsoon disruption.",
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
                    <strong>Our pick:</strong> November through February —
                    comfortable weather for the riverfront walkway and the
                    village drives, and calm conditions at Mahe Beach.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mahe District</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Kozhikode (Calicut) International
                      Airport, roughly 50 km away, is the nearest major
                      airport with good domestic and some international
                      connectivity.
                    </li>
                    <li>
                      <strong>By Train:</strong> Thalassery (Tellicherry)
                      railway station, about 8 km from Mahe, is the closest
                      well-connected stop on the Malabar coast line, with
                      onward autos and taxis into Mahe town.
                    </li>
                    <li>
                      <strong>By Road:</strong> Mahe sits directly on NH66
                      between Kozhikode and Kannur, making it an easy stop
                      on any Malabar coast road trip rather than a detour.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Because Mahe sits right on
                    NH66, it works well as a half-day break on a longer
                    Kozhikode–Kannur–Bekal coastal drive, rather than a trip
                    you need to plan around separately.
                  </div>
                </section>

                {/* ── Mahe Town ─────────────────────────────────────────── */}
                <section id="mahe-town">
                  <h2>Mahe Town</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Calm river with palm-lined banks, evoking Mahe's riverfront and the Mahe River"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The district's namesake town is compact enough to see in
                    half a day, built almost entirely around its riverfront
                    and the French-colonial institutions left behind after
                    1721.
                  </p>
                  <ul>
                    <li>
                      <strong>Mahe Walkway:</strong> A landscaped riverfront
                      promenade along the Mahe River — the town's most
                      pleasant stretch for an evening walk, and its closest
                      equivalent to Puducherry's Promenade.
                    </li>
                    <li>
                      <strong>Mahe River:</strong> The river that gives the
                      town its name and its layout, flowing out to the
                      Arabian Sea at the town's edge.
                    </li>
                    <li>
                      <strong>St. Teresa's Shrine:</strong> A prominent
                      Catholic church and one of Mahe's most significant
                      landmarks, especially lively during its annual feast.
                    </li>
                    <li>
                      <strong>Tagore Park:</strong> A small, well-kept public
                      park in the town centre, named for Rabindranath Tagore
                      — a pleasant stop between the riverfront and the
                      shrine.
                    </li>
                    <li>
                      <strong>Mahe Beach:</strong> A quiet beach near the
                      river mouth, considerably less crowded than the major
                      Kerala coastal beaches nearby.
                    </li>
                    <li>
                      <strong>Mahe Lighthouse:</strong> A working lighthouse
                      marking the coast, worth the short walk for sea views.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Time your riverfront walk for
                    early evening — the Mahe Walkway is at its most pleasant
                    as the heat eases and locals come out for their own
                    evening stroll.
                  </div>
                </section>

                {/* ── Palloor & Pandakkal ───────────────────────────────── */}
                <section id="palloor-pandakkal">
                  <h2>Palloor & Pandakkal</h2>
                  <p>
                    Just outside Mahe town, <strong>Palloor</strong> and{" "}
                    <strong>Pandakkal</strong> are the district's closest
                    village surroundings — an easy add-on if you have an
                    extra hour or two.
                  </p>
                  <ul>
                    <li>
                      <strong>Palloor:</strong> A village area with its own
                      local temples and churches, and a genuine slice of
                      everyday village life just beyond the town limits.
                    </li>
                    <li>
                      <strong>Pandakkal:</strong> Known for its local
                      religious sites and its position along the Mahe
                      River's surroundings — a quieter riverside stretch
                      than the town's main walkway.
                    </li>
                  </ul>
                </section>

                {/* ── Chalakkara & Parakkal ─────────────────────────────── */}
                <section id="chalakkara-parakkal">
                  <h2>Chalakkara & Parakkal</h2>
                  <p>
                    Further out, <strong>Chalakkara</strong> and{" "}
                    <strong>Parakkal</strong> are the district's most rural
                    stretches — worth a slow drive if you want to see Mahe
                    beyond its riverfront and church.
                  </p>
                  <ul>
                    <li>
                      <strong>Chalakkara:</strong> Centred on its own river
                      surroundings, with local temples and rural landscapes
                      typical of the Malabar coast's interior.
                    </li>
                    <li>
                      <strong>Parakkal:</strong> A village landscape of local
                      temples and nearby river areas, similarly quiet and
                      largely untouched by tourism.
                    </li>
                  </ul>
                  <p>
                    Neither area has a headline monument — their value is in
                    the drive itself, through river-fed farmland that most
                    Malabar coast itineraries skip entirely.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation in Mahe itself is limited — many travellers
                    base themselves in Thalassery or Kozhikode instead and
                    treat Mahe as a day trip.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹600–₹1,500/night",
                        picks: [
                          "Guesthouses, Mahe town centre",
                          "Budget lodges, Thalassery (8 km away)",
                          "Basic rooms near the riverfront",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,600–₹3,500/night",
                        picks: [
                          "Business hotels, Thalassery",
                          "Mid-range hotels, Kozhikode",
                          "A handful of hotels in Mahe town",
                        ],
                      },
                      {
                        tier: "Upscale",
                        icon: "🏛️",
                        range: "₹3,500–₹7,000+/night",
                        picks: [
                          "Premium hotels, Kozhikode",
                          "Beach resorts along the Malabar coast",
                          "Heritage-style stays (very limited in Mahe)",
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
                    Given Mahe's small size, most visitors are better served
                    staying in Thalassery or Kozhikode and treating the
                    district as a half-day-to-two-day detour on a longer
                    Malabar coast trip.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Mahe District</h2>
                  <ul>
                    <li>
                      <strong>Malabar Muslim cuisine:</strong> Biryani,
                      kallummakkaya (mussel) dishes, and other Malabar
                      coastal specialities are widely available in and
                      around Mahe town.
                    </li>
                    <li>
                      <strong>Fresh seafood:</strong> Mahe's river-mouth
                      location makes fresh fish and prawns a genuine
                      strength — look for it at riverside and beachside
                      eateries.
                    </li>
                    <li>
                      <strong>Kerala staples:</strong> Appam, puttu, and
                      other everyday Kerala breakfasts are the norm across
                      Mahe and the surrounding villages.
                    </li>
                    <li>
                      <strong>French-influenced bakery items:</strong>{" "}
                      Small traces of Mahe's colonial past occasionally
                      surface in local bakeries — worth a look if you're
                      curious about the town's French heritage beyond its
                      architecture.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-Day Mahe District Itinerary</h2>
                  <p>
                    Mahe's small size means two days is enough to cover the
                    whole district comfortably, especially if slotted into a
                    longer Malabar coast trip.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Mahe Town",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "St. Teresa's Shrine, Tagore Park",
                          "Afternoon: Mahe Walkway along the riverfront",
                          "Evening: Mahe Beach and lighthouse",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Palloor, Pandakkal, Chalakkara & Parakkal",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Palloor's local temples and churches",
                          "Pandakkal's riverside religious sites",
                          "Afternoon: Drive through Chalakkara and Parakkal",
                          "Departure toward Thalassery or Kozhikode",
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
                          {["Expense", "Budget", "Mid-Range", "Upscale"].map(
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
                            "₹700",
                            "₹2,200",
                            "₹5,000",
                          ],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹600",
                            "₹1,200",
                          ],
                          ["Sightseeing/misc", "₹150", "₹300", "₹500"],
                          ["Daily total", "₹1,550", "₹4,000", "₹8,500"],
                          [
                            "2-Day trip total",
                            "₹3,100",
                            "₹8,000",
                            "₹17,000",
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
                    * Excludes travel to Kozhikode/Thalassery. Costs assume a
                    base in Mahe or Thalassery rather than pricier Kozhikode
                    city stays.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Mahe District</h2>
                  <ul>
                    <li>
                      <strong>Treat Mahe as a detour, not a base:</strong>{" "}
                      Given its small size and limited stay options, most
                      visitors are better off basing in Thalassery or
                      Kozhikode and visiting Mahe as a day trip.
                    </li>
                    <li>
                      <strong>Hire a car or auto for the village stretches:</strong>{" "}
                      Public transport to Palloor, Pandakkal, Chalakkara, and
                      Parakkal is limited — a private vehicle makes covering
                      all four realistic in a single day.
                    </li>
                    <li>
                      <strong>Dress modestly at St. Teresa's Shrine:</strong>{" "}
                      An active place of worship, busiest during its annual
                      feast — covered shoulders are expected.
                    </li>
                    <li>
                      <strong>Carry cash outside Mahe town:</strong> Card and
                      digital payment acceptance drops off quickly in the
                      surrounding villages.
                    </li>
                    <li>
                      <strong>Combine with a Malabar coast road trip:</strong>{" "}
                      Mahe sits directly on NH66 — the easiest way to see it
                      is as a stop between Kozhikode and Kannur, not a
                      dedicated trip.
                    </li>
                    <li>
                      <strong>Check monsoon timing:</strong> June to
                      September brings heavy rain to the whole Malabar coast
                      — plan riverfront and village visits outside this
                      window if possible.
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
                          "Walk the Mahe Walkway at evening for the best atmosphere",
                          "Base in Thalassery or Kozhikode and day-trip into Mahe",
                          "Hire a car or auto for Palloor, Pandakkal, Chalakkara, and Parakkal",
                          "Dress modestly at St. Teresa's Shrine",
                          "Try fresh seafood near the riverfront",
                          "Combine Mahe with a Kozhikode–Kannur coastal drive",
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
                          "Expect a wide range of accommodation inside Mahe town",
                          "Rely on public transport for the village stretches",
                          "Skip modest dress at St. Teresa's Shrine",
                          "Rely on cards outside Mahe town",
                          "Plan a village drive during peak monsoon without checking conditions",
                          "Treat Mahe as a multi-day standalone destination",
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
                  "Mahe District",
                  "Mahe",
                  "Malabar Coast",
                  "Kerala",
                  "St. Teresa's Shrine",
                  "Puducherry",
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
                sections={MAHE_GEAR}
                destination="Mahe District"
              />

              <RelatedPostsGrid currentSlug="mahe-district-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mahe-district-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
