// src/app/blog/jharkhand-travel-guide/page.tsx
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
  title: "Jharkhand Travel Guide: Netarhat, Betla National Park & Waterfalls",
  description:
    "The complete Jharkhand travel guide — Ranchi's waterfalls, the hill station of Netarhat, tiger territory at Betla National Park, tribal culture, where to stay and eat, and a full itinerary through one of India's most underrated forested states.",
  keywords:
    "Jharkhand travel guide, Netarhat, Betla National Park, Ranchi waterfalls, Hundru Falls, Dassam Falls, Patratu Valley, Deoghar, Jamshedpur, Jharkhand itinerary, Chotanagpur plateau",
  openGraph: {
    title: "Jharkhand Travel Guide: Netarhat, Betla National Park & Waterfalls",
    description:
      "Dense sal forests, dramatic waterfalls, and tiger territory — the complete guide to Jharkhand, one of India's most overlooked forested states.",
    url: "https://club.kudozz.in/blog/jharkhand-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dense green forest and hills, evoking Jharkhand's Chotanagpur plateau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jharkhand Travel Guide: Netarhat, Betla National Park & Waterfalls",
    description:
      "Waterfalls, forests, and tribal heritage on the Chotanagpur plateau — the complete guide to Jharkhand.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jharkhand-travel-guide",
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
            "Jharkhand Travel Guide: Netarhat, Betla National Park & Waterfalls",
          description: "The complete Jharkhand travel guide.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
          datePublished: "2026-07-22",
          dateModified: "2026-07-22",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/logo.png",
            },
          },
          author: {
            "@type": "Organization",
            name: "Kudozz Club",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/jharkhand-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Jharkhand",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Jharkhand",
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
                name: "Jharkhand Travel Guide",
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
  { id: "introduction", title: "Why Jharkhand?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jharkhand", level: 2 },
  { id: "ranchi", title: "Ranchi: City of Waterfalls", level: 2 },
  { id: "netarhat", title: "Netarhat: Queen of Chotanagpur", level: 2 },
  { id: "betla", title: "Betla National Park", level: 2 },
  { id: "other-sights", title: "Deoghar, Patratu Valley & Jamshedpur", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "5-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Jharkhand-specific gear ────────────────────────────────────────────────
const JHARKHAND_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for waterfall trails, forest safaris, and a state with limited tourist infrastructure outside Ranchi and Jamshedpur",
    emoji: "🌲",
    items: [
      {
        name: "Comfortable Trekking Shoes",
        description:
          "The rocky, sometimes slippery approach paths to Hundru, Dassam, and Jonha Falls, plus Netarhat's viewpoints, involve real uneven walking.",
        price: "₹1,599",
        rating: 4.4,
        reviews: "9.1k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("trekking+shoes+waterproof+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Waterfall rocks stay damp and slick year-round — grippy, closed footwear genuinely reduces the risk of a slip near the edge.",
      },
      {
        name: "Mosquito Repellent",
        description:
          "Jharkhand's dense sal forests and the wooded fringes of Betla National Park make mosquito presence significant, especially at dawn and dusk.",
        price: "₹199",
        rating: 4.3,
        reviews: "12k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("mosquito+repellent+travel"),
        tag: "Forest essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Much of Jharkhand's sightseeing happens inside or at the edge of forest cover, where mosquitoes are a daily reality.",
      },
      {
        name: "Rain Jacket / Poncho",
        description:
          "Waterfalls are at their best just after the monsoon, but spray, humidity, and lingering showers stick around well into October.",
        price: "₹599",
        rating: 4.3,
        reviews: "4.6k",
        image: "🌂",
        affiliateUrl: amazonSearchUrl("rain+jacket+poncho+travel"),
        tag: "Weather essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Between waterfall spray and Jharkhand's genuinely wet monsoon, staying dry is a real and recurring concern, not a remote one.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for day trips to Netarhat and Betla, where charging points thin out well before you reach the destination.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Charging infrastructure drops off fast outside Ranchi and Jamshedpur — a backup battery avoids being stranded mid-safari or mid-drive.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Handy across long days visiting waterfalls, the Netarhat plateau, and Betla's safari routes.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Standalone shops and water points are limited between major sites — carrying your own water is the practical choice.",
      },
      {
        name: "Basic First Aid Kit",
        description:
          "Worth having given the state's modest medical infrastructure outside Ranchi and Jamshedpur.",
        price: "₹599",
        rating: 4.4,
        reviews: "3.9k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("travel+first+aid+kit"),
        tag: "Small-town essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Medical facilities are concentrated in the bigger cities — basic self-sufficiency is worth having near Betla or Netarhat.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JharkhandGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/ziro/hero.jpg"
              alt="Dense green forest and hills, evoking Jharkhand's Chotanagpur plateau"
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
                { label: "Jharkhand", href: "/blog?category=jharkhand" },
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
                "Jharkhand",
                "Netarhat",
                "Betla National Park",
                "Ranchi",
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
              Jharkhand Travel Guide: Netarhat, Betla National Park & Waterfalls
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A plateau covered in sal forests, waterfalls that thunder off
              laterite cliffs, and tiger territory barely anyone outside
              eastern India talks about — Jharkhand is one of the country's
              most genuinely underrated states.
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
                  text: "Jharkhand, Eastern India",
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
                  <h2>Why Jharkhand?</h2>
                  <p>
                    Carved out of southern Bihar in 2000, <strong>Jharkhand</strong>{" "}
                    sits on the mineral-rich Chotanagpur plateau — a landscape
                    of dense sal forests, rolling hills, and rivers that drop
                    off laterite cliffs in a string of genuinely dramatic
                    waterfalls. Ranchi, the state capital, is nicknamed the
                    "City of Waterfalls" for good reason.
                  </p>
                  <p>
                    Beyond the scenery, Jharkhand carries a distinct tribal
                    heritage — the Santhal, Munda, Ho, Oraon, and other
                    communities together make up close to a quarter of the
                    state's population, and their culture, art, and
                    festivals run through the state far more visibly than
                    most visitors expect. Add to that Betla National Park's
                    tigers and elephants, the pine-covered plateau of
                    Netarhat, and Deoghar's major Shiva pilgrimage, and
                    there's a genuinely rich trip here.
                  </p>
                  <p>
                    What Jharkhand doesn't have, outside Ranchi and
                    Jamshedpur, is much tourist infrastructure — signage,
                    English-speaking guides, and organised transport all thin
                    out quickly once you leave the two big cities. Plan with
                    flexibility and treat it as a genuine off-the-beaten-path
                    trip, not a polished one.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌲</span> Jharkhand at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Jharkhand" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Ranchi (IXR)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏞️",
                          label: "Known For",
                          value: "Waterfalls, Forests, Betla",
                        },
                        {
                          icon: "🎭",
                          label: "Culture",
                          value: "Santhal, Munda, Ho Tribes",
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
                  <h2>Best Time to Visit Jharkhand</h2>
                  <p>
                    Jharkhand's climate swings from a mild winter to a
                    scorching summer and a substantial monsoon — timing
                    matters both for comfort and for how the state's
                    signature waterfalls actually look.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and pleasant (10–27°C) — the most comfortable window for Netarhat, Betla safaris, and general sightseeing.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, dry summer",
                        text: "Temperatures climb well past 35°C on the plains — Netarhat's higher elevation offers some relief, but daytime sightseeing elsewhere is tough.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rainfall",
                        text: "Jharkhand receives substantial rain in this window; roads to Betla and Netarhat can get genuinely difficult, though the forest turns vividly green.",
                      },
                      {
                        season: "Sep – Oct",
                        emoji: "💧",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Waterfalls at their peak",
                        text: "Hundru, Dassam, and Jonha Falls are at their most dramatic just after the monsoon eases — worth the tricky road conditions if timed carefully.",
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
                    <strong>Our pick:</strong> late September to October if
                    waterfalls are the priority — the falls are at their most
                    dramatic, but check road conditions first. For an
                    all-round easier trip, November to February is the safer,
                    more comfortable choice.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jharkhand</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Birsa Munda Airport (IXR) in
                      Ranchi is the main gateway, with regular flights from
                      Delhi, Mumbai, Kolkata, and Bengaluru. Jamshedpur also
                      has a smaller airport with limited connections.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Ranchi, Jamshedpur (Tatanagar
                      Junction), and Dhanbad are major rail junctions well
                      connected to Delhi, Kolkata, Mumbai, and most large
                      Indian cities.
                    </li>
                    <li>
                      <strong>By Road:</strong> Ranchi is connected by
                      highway to Kolkata (~430 km), Patna (~330 km), and
                      Varanasi, though drive times are long given the
                      terrain.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Flying into Ranchi is the
                    most practical option for most itineraries, but if
                    Jamshedpur or Deoghar are your priority, Tatanagar
                    Junction and the rail network can actually be more
                    convenient than routing everything through Ranchi.
                  </div>
                </section>

                {/* ── Ranchi ────────────────────────────────────────────── */}
                <section id="ranchi">
                  <h2>Ranchi: City of Waterfalls</h2>
                  <p>
                    Jharkhand's capital sits on the Chotanagpur plateau and
                    earns its nickname honestly — a cluster of genuinely
                    impressive waterfalls sits within a couple of hours'
                    drive, making Ranchi the natural base for most first-time
                    visitors.
                  </p>
                  <ul>
                    <li>
                      <strong>Hundru Falls:</strong> The Subarnarekha River
                      drops around 98 metres here, roughly 45 km from Ranchi
                      — one of the state's most-visited and most dramatic
                      waterfalls, especially just after monsoon.
                    </li>
                    <li>
                      <strong>Dassam Falls:</strong> A wide, powerful cascade
                      about 40 km from Ranchi on the Kanchi River, with a
                      viewing point that gets genuinely misty in season.
                    </li>
                    <li>
                      <strong>Jonha Falls (Gautamdhara):</strong> A quieter,
                      forested waterfall roughly 40 km from Ranchi, with a
                      long flight of steps down to the base and a small
                      temple nearby.
                    </li>
                    <li>
                      <strong>Rock Garden & Tagore Hill:</strong> Closer to
                      the city — Rock Garden overlooks Kanke Dam, while Tagore
                      Hill offers an easy climb and city views, both good for
                      a half-day when you're not chasing waterfalls.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Hundru, Dassam, and Jonha
                    Falls are spread across different directions from Ranchi
                    — don't try to cram all three into one rushed day; pick
                    two and go unhurried, or split them across two days.
                  </div>
                </section>

                {/* ── Netarhat ──────────────────────────────────────────── */}
                <section id="netarhat">
                  <h2>Netarhat: Queen of Chotanagpur</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Clear flowing water over rock, evoking the streams and forested valleys around Jharkhand's Netarhat plateau"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Perched at around 1,070 metres, <strong>Netarhat</strong>{" "}
                    is Jharkhand's best-known hill station — a plateau of
                    pine and sal forest roughly 150 km from Ranchi, prized
                    for its cooler climate and genuinely striking sunrise and
                    sunset points.
                  </p>
                  <ul>
                    <li>
                      <strong>Magnolia Sunset Point:</strong> The most
                      popular viewpoint, looking out over layered hills and
                      forest as the sun goes down — best on a clear day.
                    </li>
                    <li>
                      <strong>Sunrise Point (Koel View Point):</strong> An
                      early start, but the plateau's sunrise over the
                      forested valley is one of the state's most rewarding
                      views.
                    </li>
                    <li>
                      <strong>Netarhat Dam & Upper Ghaghri Falls:</strong> A
                      quieter reservoir and a nearby waterfall worth combining
                      into a half-day around the plateau.
                    </li>
                    <li>
                      <strong>Cooler climate:</strong> Netarhat's elevation
                      gives it noticeably cooler temperatures than Ranchi
                      year-round, making it a genuine relief in the hotter
                      months.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Netarhat is a long drive from
                    Ranchi — plan on an overnight stay rather than a single
                    exhausting day trip, and go for both sunrise and sunset
                    if you can.
                  </div>
                </section>

                {/* ── Betla ─────────────────────────────────────────────── */}
                <section id="betla">
                  <h2>Betla National Park</h2>
                  <p>
                    Part of the Palamu Tiger Reserve, <strong>Betla National
                    Park</strong> is one of India's earliest designated tiger
                    reserves, roughly 25 km from Daltonganj and around 170 km
                    from Ranchi — a genuine wildlife destination that sees a
                    fraction of the visitors that parks in Madhya Pradesh or
                    Rajasthan do.
                  </p>
                  <ul>
                    <li>
                      <strong>Wildlife:</strong> Tigers, leopards, wild
                      elephants, sloth bears, gaur (Indian bison), and a wide
                      range of deer species inhabit the reserve's sal and
                      bamboo forest.
                    </li>
                    <li>
                      <strong>Palamu Forts:</strong> Two historic forts —
                      built by the Chero dynasty — sit within the park
                      boundary, an unusual combination of wildlife and
                      history in one visit.
                    </li>
                    <li>
                      <strong>Safari logistics:</strong> Jeep safaris run in
                      morning and afternoon slots; sightings are far less
                      guaranteed than at India's better-known tiger reserves,
                      so go in with realistic expectations.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Betla is genuinely remote —
                    book your safari and stay in advance, carry cash, and
                    check current safety and access advisories before
                    heading into this part of Palamu district.
                  </div>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Deoghar, Patratu Valley & Jamshedpur</h2>
                  <ul>
                    <li>
                      <strong>Deoghar:</strong> Home to the Baidyanath
                      Jyotirlinga, one of the twelve Jyotirlingas of Shiva and
                      a major pilgrimage site that draws huge crowds during
                      Shravan month — worth visiting outside that peak if you
                      want a calmer experience.
                    </li>
                    <li>
                      <strong>Patratu Valley:</strong> A scenic dam and a
                      winding, hairpin-laden road that has become popular
                      with road-trippers out of Ranchi — genuinely photogenic,
                      especially in the golden-hour light.
                    </li>
                    <li>
                      <strong>Jamshedpur:</strong> India's first planned
                      industrial city, built around Tata Steel — Jubilee Park
                      is a large, well-maintained green space, and the city
                      itself offers a different, more orderly side of
                      Jharkhand than the forested interior.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is concentrated in Ranchi and Jamshedpur —
                    outside these two cities, options thin out significantly,
                    so plan day trips and overnight stops accordingly.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses & lodges, Ranchi",
                          "JTDC tourist lodge, Netarhat",
                          "Forest rest houses near Betla",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Business hotels, Ranchi & Jamshedpur",
                          "Van Vihar-style stays, Betla",
                          "Boutique stays, central Ranchi",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,000–₹10,000+/night",
                        picks: [
                          "Radisson Blu, Ranchi",
                          "Premium business hotels, Jamshedpur",
                          "Upscale resorts (limited, Ranchi area)",
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
                    Base yourself in Ranchi for the waterfalls and day trips,
                    then plan dedicated overnight stops in Netarhat and near
                    Betla — proper tourist accommodation elsewhere in the
                    state is genuinely limited.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Jharkhand</h2>
                  <ul>
                    <li>
                      <strong>Litti Chukha:</strong> Jharkhand's own spin on
                      the Bihari litti-chokha — roasted wheat-and-sattu balls
                      served with chukha, a tangy potato-tomato mash, rather
                      than the classic Bihari chokha.
                    </li>
                    <li>
                      <strong>Dhuska:</strong> A deep-fried rice-and-lentil
                      pancake, usually served with chana curry or chutney —
                      a common breakfast and street-food staple.
                    </li>
                    <li>
                      <strong>Rugra:</strong> A wild forest mushroom
                      delicacy, gathered seasonally and cooked into a rich
                      curry — a genuine local specialty worth seeking out if
                      it's in season.
                    </li>
                    <li>
                      <strong>Pittha:</strong> Steamed or fried rice-flour
                      dumplings, sometimes stuffed, made in both sweet and
                      savoury versions.
                    </li>
                    <li>
                      <strong>Bihari-influenced cuisine:</strong> Given
                      Jharkhand's shared history with southern Bihar, much of
                      the everyday food carries strong Bihari influence —
                      sattu-based dishes and simple dal-rice thalis are
                      common throughout the state.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>5-Day Jharkhand Itinerary</h2>
                  <p>
                    Five days is a reasonable minimum to cover Ranchi's
                    waterfalls, Netarhat, and Betla National Park without
                    excessive rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Ranchi Arrival & City Sights",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Rock Garden & Kanke Dam, Tagore Hill",
                          "Evening: rest and acclimatise",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Ranchi Waterfalls",
                        color: "bg-sky-600",
                        activities: [
                          "Hundru Falls in the morning",
                          "Jonha Falls (Gautamdhara) in the afternoon",
                          "Return to Ranchi",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Patratu Valley & Netarhat Drive",
                        color: "bg-forest-600",
                        activities: [
                          "Morning stop at Patratu Valley",
                          "Drive on to Netarhat (~5 hrs total)",
                          "Evening: Magnolia Sunset Point",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Netarhat to Betla",
                        color: "bg-stone-600",
                        activities: [
                          "Sunrise at Koel View Point",
                          "Drive to Betla National Park area",
                          "Check in near Daltonganj",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Betla Safari & Departure",
                        color: "bg-amber-800",
                        activities: [
                          "Morning jeep safari, Betla National Park",
                          "Visit the Palamu Forts",
                          "Drive back toward Ranchi for departure",
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
                            "₹1,000",
                            "₹3,000",
                            "₹7,000",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          [
                            "Local transport/day",
                            "₹500",
                            "₹1,200",
                            "₹2,800",
                          ],
                          ["Activities/day", "₹300", "₹700", "₹1,500"],
                          ["Daily total", "₹2,200", "₹5,800", "₹13,300"],
                          [
                            "5-Day trip total",
                            "₹11,000",
                            "₹29,000",
                            "₹66,500",
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
                    * Excludes flights to Ranchi. Local transport costs run
                    higher than average given the long distances between
                    Ranchi, Netarhat, and Betla National Park.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Jharkhand</h2>
                  <ul>
                    <li>
                      <strong>Hire a car with driver:</strong> Public
                      transport to the waterfalls, Netarhat, and Betla is
                      limited and slow — a private vehicle is far more
                      practical for covering the state.
                    </li>
                    <li>
                      <strong>Plan Netarhat and Betla as overnight
                      trips:</strong> Both are far enough from Ranchi that a
                      same-day round trip is rushed and tiring.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card and digital payment
                      acceptance is inconsistent outside Ranchi and
                      Jamshedpur's main commercial areas.
                    </li>
                    <li>
                      <strong>Respect tribal village etiquette:</strong> If
                      visiting a Santhal, Munda, or Ho village, go with a
                      local guide and ask before photographing people or
                      ceremonies.
                    </li>
                    <li>
                      <strong>Check safety advisories for remote forested
                      areas:</strong> Parts of Jharkhand's forested interior,
                      including areas near Betla and Palamu, have had
                      periodic security concerns — confirm current guidance
                      before travelling to remote districts.
                    </li>
                    <li>
                      <strong>Take waterfall safety seriously:</strong> Rocks
                      near Hundru, Dassam, and Jonha Falls get slippery, and
                      accidents happen most years — stick to marked viewing
                      areas rather than climbing for a closer look.
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
                          "Hire a car with driver for waterfalls and Betla",
                          "Book Betla safaris and stays well in advance",
                          "Try local dishes like litti chukha and dhuska",
                          "Carry cash for areas outside Ranchi and Jamshedpur",
                          "Ask permission before photographing tribal communities",
                          "Plan Netarhat and Betla as overnight stops",
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
                          "Rely on public transport for Netarhat or Betla",
                          "Rush the Netarhat round trip in a single tight day",
                          "Climb past marked barriers at waterfalls",
                          "Rely on cards outside Ranchi and Jamshedpur",
                          "Travel to remote forested districts without checking advisories",
                          "Expect Ranchi-level infrastructure once outside the cities",
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
                  "Jharkhand",
                  "Netarhat",
                  "Betla National Park",
                  "Ranchi",
                  "Hundru Falls",
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
                sections={JHARKHAND_GEAR}
                destination="Jharkhand"
              />

              <RelatedPostsGrid />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
