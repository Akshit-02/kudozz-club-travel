// src/app/blog/andhra-pradesh-travel-guide/page.tsx
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
    "Andhra Pradesh Travel Guide: Tirupati, Visakhapatnam & Araku Valley",
  description:
    "The complete Andhra Pradesh travel guide — Tirupati's Sri Venkateswara Temple, Visakhapatnam's beaches, the coffee-scented hills of Araku Valley, Amaravati, Lepakshi, Srisailam, where to stay and eat, and a full itinerary along the Eastern coast.",
  keywords:
    "Andhra Pradesh travel guide, Tirupati Tirumala temple, Visakhapatnam Vizag, Araku Valley, Borra Caves, Lepakshi temple, Srisailam Jyotirlinga, Amaravati, Andhra Pradesh itinerary, Andhra cuisine",
  openGraph: {
    title:
      "Andhra Pradesh Travel Guide: Tirupati, Visakhapatnam & Araku Valley",
    description:
      "One of the world's most visited temples, an underrated coastline, and coffee-scented hill country in the Eastern Ghats — the complete guide to Andhra Pradesh.",
    url: "https://club.kudozz.in/blog/andhra-pradesh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient South Indian temple architecture, evoking Andhra Pradesh's Tirupati temple complex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Andhra Pradesh Travel Guide: Tirupati, Visakhapatnam & Araku Valley",
    description:
      "The world's richest temple, an underrated coastline, and coffee-scented hills — the complete guide to Andhra Pradesh.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/andhra-pradesh-travel-guide",
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
            "Andhra Pradesh Travel Guide: Tirupati, Visakhapatnam & Araku Valley",
          description: "The complete Andhra Pradesh travel guide.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/andhra-pradesh-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Andhra Pradesh",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Andhra Pradesh",
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
                name: "Andhra Pradesh Travel Guide",
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
  { id: "introduction", title: "Why Andhra Pradesh?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "tirupati", title: "Tirupati & Tirumala", level: 2 },
  { id: "visakhapatnam", title: "Visakhapatnam: Beaches & Eastern Coast", level: 2 },
  { id: "other-sights", title: "Amaravati, Lepakshi & Srisailam", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "7-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Andhra Pradesh-specific gear ───────────────────────────────────────────
const ANDHRA_PRADESH_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for temple queues, coastal humidity, and hill journeys through the Eastern Ghats",
    emoji: "🛕",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "The Tirumala darshan queue and the walk around Sri Venkateswara Temple's compound can mean hours on your feet — supportive, slip-on-friendly shoes help.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Pilgrimage essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Long darshan queues at Tirumala and temple courtyards at Lepakshi both involve extended standing and walking.",
      },
      {
        name: "Sunscreen (SPF 50)",
        description:
          "Coastal humidity and direct sun along Vizag's beaches and RK Beach promenade make sun protection essential.",
        price: "₹399",
        rating: 4.5,
        reviews: "10k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("sunscreen+spf+50+travel"),
        tag: "Everyday essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Andhra's coastal sun is intense and humid for much of the year — sunscreen is non-negotiable for beach and temple days alike.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Handy for long Tirumala queue waits and the winding drive up to Araku Valley through the Eastern Ghats.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Hydration matters on the hours-long darshan queue and on the humid coastal stretch around Visakhapatnam.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for the long train journey through the Eastern Ghats to Araku Valley and full pilgrimage days at Tirumala.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "The Araku train ride and multi-hour temple queues both drain phones faster than usual — worth the backup charge.",
      },
      {
        name: "Lightweight Rain Jacket",
        description:
          "The Bay of Bengal coast around Visakhapatnam sees sudden showers, especially in the shoulder months around the monsoon and cyclone season.",
        price: "₹1,199",
        rating: 4.3,
        reviews: "4.1k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("lightweight+rain+jacket+travel"),
        tag: "Coastal essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Coastal weather can turn quickly, and a packable rain layer is far more useful than an umbrella on windy beach days.",
      },
      {
        name: "Basic First Aid Kit",
        description:
          "A compact kit for the long travel days between Tirupati, Vizag, and Araku Valley, and for genuinely spicy Andhra food.",
        price: "₹549",
        rating: 4.4,
        reviews: "6.5k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("compact+travel+first+aid+kit"),
        tag: "Travel essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Andhra cuisine is famously fiery, and long transit days are common — a basic kit covers both minor mishaps.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AndhraPradeshGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/hampi/hero.jpg"
              alt="Ancient South Indian temple architecture, evoking Andhra Pradesh's Tirupati temple complex"
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
                  label: "Andhra Pradesh",
                  href: "/blog?category=andhra-pradesh",
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
                "Andhra Pradesh",
                "Tirupati",
                "Visakhapatnam",
                "Araku Valley",
                "Pilgrimage",
                "Coastline",
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
              Andhra Pradesh Travel Guide: Tirupati, Visakhapatnam & Araku
              Valley
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Home to one of the world's richest and most-visited temples, a
              genuinely underrated stretch of the Bay of Bengal coastline,
              and hill country in the Eastern Ghats scented with coffee —
              Andhra Pradesh rewards travelers well beyond its pilgrimage
              reputation.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "17 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Andhra Pradesh, South India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,400 words",
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
                  <h2>Why Andhra Pradesh?</h2>
                  <p>
                    Stretched along one of India's longest coastlines,{" "}
                    <strong>Andhra Pradesh</strong> is best known to most
                    travelers for one reason — <strong>Tirupati</strong>,
                    home to the Sri Venkateswara Temple, among the richest
                    and most-visited religious sites anywhere in the world.
                    But the state has far more going for it than pilgrimage
                    alone.
                  </p>
                  <p>
                    <strong>Visakhapatnam</strong> and the surrounding
                    Eastern coast offer some of India's most underrated
                    beach and hill scenery, with the Eastern Ghats rising
                    almost straight out of the Bay of Bengal. Inland,{" "}
                    <strong>Araku Valley's</strong> coffee plantations and
                    the Borra Caves make for a genuinely scenic detour, while
                    ancient Buddhist sites at <strong>Amaravati</strong> and
                    the Vijayanagara-era temple at{" "}
                    <strong>Lepakshi</strong> add real historical depth.
                  </p>
                  <p>
                    Add a cuisine widely considered among the spiciest in
                    India — built around Guntur chilies, tangy gongura, and
                    tamarind-laced pulihora — and Andhra Pradesh offers a
                    trip that's equal parts pilgrimage, coastline, and food.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Andhra Pradesh at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Andhra Pradesh",
                        },
                        {
                          icon: "✈️",
                          label: "Gateways",
                          value: "Visakhapatnam, Tirupati",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Tirupati, Vizag Coast",
                        },
                        {
                          icon: "☕",
                          label: "Hill Country",
                          value: "Araku Valley",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,400 – ₹7,500",
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
                  <h2>Best Time to Visit Andhra Pradesh</h2>
                  <p>
                    Andhra Pradesh's coastal and inland climates both push
                    toward the same window — the coast is hot and humid for
                    much of the year, and the Bay of Bengal carries a real
                    cyclone risk between October and December.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cooler, drier weather (18–30°C) across both the coast and inland — the most comfortable window for Tirupati, Vizag, and Araku Valley alike.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot and humid",
                        text: "Coastal humidity and inland heat both climb sharply — manageable in Araku's hills, tougher along the coast and in Tirupati.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Southwest monsoon",
                        text: "Regular rainfall across the state, heavier inland and in the Eastern Ghats — Araku Valley turns especially lush.",
                      },
                      {
                        season: "Oct – Dec",
                        emoji: "🌀",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cyclone risk",
                        text: "The Bay of Bengal coast, including Visakhapatnam, faces genuine cyclone risk in this window — track forecasts before coastal travel.",
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
                    <strong>Our pick:</strong> November to February —
                    comfortable temperatures for temple queues, beach walks,
                    and the drive up to Araku Valley, with the cyclone
                    season safely behind you.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Andhra Pradesh</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Visakhapatnam Airport and
                      Vijayawada Airport handle most general travel, while
                      Tirupati Airport is the natural choice for pilgrimage
                      trips, with frequent connections from major Indian
                      cities.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Andhra Pradesh sits on an
                      extensive rail network — Visakhapatnam, Vijayawada,
                      and Tirupati are all major junctions with strong
                      long-distance connectivity.
                    </li>
                    <li>
                      <strong>By Road:</strong> National highways connect
                      the coastal cities well, though the inland route up to
                      Araku Valley through the Eastern Ghats is scenic but
                      slow.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Fly into Tirupati if the
                    temple visit is your priority, or Visakhapatnam if
                    you're combining the coast with Araku Valley — trying to
                    cover both from a single gateway adds significant road
                    time.
                  </div>
                </section>

                {/* ── Tirupati ──────────────────────────────────────────── */}
                <section id="tirupati">
                  <h2>Tirupati & Tirumala: The Temple of Lord Venkateswara</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="Ornate South Indian temple gopuram architecture, evoking the Sri Venkateswara Temple at Tirumala"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Perched atop the Tirumala hills, the{" "}
                    <strong>Sri Venkateswara Temple</strong> is widely
                    considered one of the most visited religious sites on
                    Earth, drawing tens of thousands of pilgrims daily and
                    among the wealthiest temple trusts in the world through
                    devotee donations.
                  </p>
                  <ul>
                    <li>
                      <strong>The darshan queue system:</strong> Pilgrims
                      pass through a network of queue complexes before
                      reaching the sanctum — free darshan can mean several
                      hours' wait, while paid Seva and special darshan
                      tickets, bookable online in advance, cut this
                      significantly.
                    </li>
                    <li>
                      <strong>Hair-tonsuring tradition:</strong> Thousands
                      of devotees shave their heads daily at Tirumala's
                      dedicated tonsure halls as an offering to Lord
                      Venkateswara — one of the temple's most distinctive
                      rituals.
                    </li>
                    <li>
                      <strong>Seva bookings:</strong> Special rituals and
                      accommodation are managed through the Tirumala
                      Tirupati Devasthanams (TTD) portal — booking ahead is
                      strongly advised, especially in peak season and around
                      festivals like Brahmotsavam.
                    </li>
                    <li>
                      <strong>Tirupati town:</strong> The base town below
                      the hills, with the Sri Govindaraja Swamy Temple and
                      practical logistics for onward pilgrimage travel.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book your darshan slot
                    through the official TTD website weeks in advance — it's
                    the single biggest factor in whether your visit takes
                    two hours or ten.
                  </div>
                </section>

                {/* ── Visakhapatnam ─────────────────────────────────────── */}
                <section id="visakhapatnam">
                  <h2>Visakhapatnam (Vizag): Beaches & the Eastern Coast</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="A wide sandy beach meeting the sea, evoking Visakhapatnam's coastline along the Bay of Bengal"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Visakhapatnam</strong>, or Vizag, is where the
                    Eastern Ghats meet the Bay of Bengal — a working port
                    city with a genuinely scenic coastline and easy access
                    to hill country that most visitors to India never see.
                  </p>
                  <ul>
                    <li>
                      <strong>RK Beach:</strong> Vizag's main urban
                      beachfront promenade, popular for evening walks, a
                      lit-up submarine museum, and views along the city's
                      curved coastline.
                    </li>
                    <li>
                      <strong>Kailasagiri:</strong> A hilltop park
                      overlooking the city and coast, reachable by cable car,
                      with large statues of Shiva and Parvati and some of
                      Vizag's best sunset views.
                    </li>
                    <li>
                      <strong>Araku Valley:</strong> A hill station roughly
                      three hours inland, known for coffee plantations,
                      tribal culture, and a scenic train journey through
                      dozens of tunnels and viaducts across the Eastern
                      Ghats — often compared to a toy-train experience.
                    </li>
                    <li>
                      <strong>Borra Caves:</strong> Enroute to Araku, one of
                      India's largest limestone cave systems, with dramatic
                      stalactite and stalagmite formations lit for visitors.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Take the Kirandul Passenger
                    train from Vizag to Araku for the full Eastern Ghats
                    experience — the road journey is faster, but the train
                    ride through the ghats is the real reason to make the
                    trip.
                  </div>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Amaravati, Lepakshi & Srisailam</h2>
                  <ul>
                    <li>
                      <strong>Amaravati:</strong> An ancient Buddhist site
                      centered on a 2,000-year-old stupa, and today also the
                      seat of Andhra Pradesh's newer planned capital region
                      along the Krishna River.
                    </li>
                    <li>
                      <strong>Lepakshi:</strong> A Vijayanagara-era temple
                      complex famous for its intricate murals and the
                      Hanging Pillar — a stone pillar that appears to float
                      just above its base, a source of enduring fascination
                      for visitors.
                    </li>
                    <li>
                      <strong>Srisailam:</strong> Home to one of India's
                      twelve Jyotirlinga temples, dramatically set within
                      the forested Nallamala Hills and Srisailam Tiger
                      Reserve — a striking combination of pilgrimage and
                      wilderness.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Plan to base yourself in 2–3 hubs — Tirupati, Vizag, and
                    Araku Valley — rather than trying to cover the state
                    from one location. Tirupati accommodation logistics are
                    unusually structured: a large share of rooms near the
                    temple are TTD-run guesthouses booked directly through
                    the Devasthanams, rather than standard hotel platforms.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "TTD guesthouses, Tirumala",
                          "Budget lodges, Tirupati town",
                          "Beachside guesthouses, Vizag",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,200–₹5,500/night",
                        picks: [
                          "Business hotels, Tirupati & Vizag",
                          "Coffee-estate stays, Araku Valley",
                          "Seafront hotels, Vizag beach road",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹6,500–₹16,000+/night",
                        picks: [
                          "5-star chains, Visakhapatnam",
                          "Premium TTD cottages, Tirumala",
                          "Resort stays, Araku Valley",
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
                    For Tirumala, book TTD accommodation directly through
                    the Devasthanams portal alongside your darshan slot —
                    private hotel options near the temple are limited and
                    fill up fast around festivals.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Andhra Pradesh</h2>
                  <p>
                    Andhra cuisine is widely considered among the spiciest
                    in India, built around Guntur's famously fiery chilies,
                    tamarind, and a distinct sour-tangy flavor profile
                    that's harder to find elsewhere in the country.
                  </p>
                  <ul>
                    <li>
                      <strong>Andhra Thali:</strong> A full spread served on
                      banana leaf — multiple curries, a fiery gongura or
                      chili pickle, rasam, sambar, and rice — the definitive
                      way to experience the cuisine's range and heat in one
                      sitting.
                    </li>
                    <li>
                      <strong>Guntur Chili:</strong> Grown around the city
                      of Guntur, one of India's most widely traded chili
                      varieties, and the backbone of Andhra cuisine's
                      characteristic heat.
                    </li>
                    <li>
                      <strong>Andhra-Style Biryani & Pulihora:</strong>{" "}
                      While Hyderabadi biryani belongs to neighboring
                      Telangana today, Andhra has its own spicier biryani
                      tradition alongside pulihora — tangy tamarind rice
                      often served as prasadam at temples, including
                      Tirupati.
                    </li>
                    <li>
                      <strong>Gongura Pachadi:</strong> A tart, sour chutney
                      made from sorrel leaves, distinctly Andhra and a
                      staple alongside rice and ghee.
                    </li>
                    <li>
                      <strong>Vizag Seafood:</strong> Visakhapatnam's
                      coastal location means fresh catch — prawns, pomfret,
                      and crab cooked in Andhra-style tangy, chili-forward
                      curries, best found along the beach road.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>7-Day Andhra Pradesh Itinerary</h2>
                  <p>
                    Seven days is a reasonable minimum to combine Tirupati,
                    Visakhapatnam, and Araku Valley without excessive
                    rushing, though the two regions require a flight or long
                    train transfer between them.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1–2",
                        title: "Tirupati & Tirumala",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check into TTD guesthouse or Tirupati hotel",
                          "Tirumala darshan (booked slot)",
                          "Sri Govindaraja Swamy Temple, Tirupati town",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Travel to Visakhapatnam",
                        color: "bg-stone-600",
                        activities: [
                          "Fly or train to Visakhapatnam",
                          "RK Beach evening walk",
                          "Seafood dinner along the beach road",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Visakhapatnam",
                        color: "bg-sky-600",
                        activities: [
                          "Kailasagiri hilltop park & cable car",
                          "Submarine museum, RK Beach",
                          "Rushikonda Beach in the afternoon",
                        ],
                      },
                      {
                        day: "Day 5–6",
                        title: "Araku Valley",
                        color: "bg-forest-600",
                        activities: [
                          "Scenic train journey through the Eastern Ghats",
                          "Borra Caves enroute",
                          "Coffee plantations & tribal museum, Araku",
                        ],
                      },
                      {
                        day: "Day 7",
                        title: "Return & Departure",
                        color: "bg-purple-700",
                        activities: [
                          "Travel back to Visakhapatnam",
                          "Last-minute shopping or beach time",
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
                            "₹1,000",
                            "₹3,500",
                            "₹8,500",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,200"],
                          [
                            "Local transport/day",
                            "₹450",
                            "₹1,200",
                            "₹2,800",
                          ],
                          [
                            "Darshan/Seva & entry fees/day",
                            "₹300",
                            "₹1,500",
                            "₹4,000",
                          ],
                          ["Daily total", "₹2,150", "₹7,100", "₹17,500"],
                          [
                            "7-Day trip total",
                            "₹15,050",
                            "₹49,700",
                            "₹122,500",
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
                    * Excludes flights. Special/VIP darshan tickets at
                    Tirumala are the biggest swing factor in daily cost —
                    free darshan brings this down significantly at the cost
                    of a longer queue wait.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Andhra Pradesh</h2>
                  <ul>
                    <li>
                      <strong>Book your Tirumala darshan slot in advance:</strong>{" "}
                      The TTD's online booking system for darshan and Seva
                      tickets is the single biggest factor in how smooth
                      your visit is — book weeks ahead where possible.
                    </li>
                    <li>
                      <strong>Follow the temple dress code:</strong>{" "}
                      Tirumala enforces traditional dress for certain
                      darshan lines — dhoti/kurta or sarees are recommended,
                      and some entry points restrict Western clothing.
                    </li>
                    <li>
                      <strong>Track coastal weather in Oct–Dec:</strong>{" "}
                      Visakhapatnam and the Bay of Bengal coast face real
                      cyclone risk in this window — check forecasts before
                      finalizing coastal travel dates.
                    </li>
                    <li>
                      <strong>Take the train to Araku Valley:</strong> The
                      journey through the Eastern Ghats, with its tunnels
                      and viaducts, is a genuine highlight — don't default
                      to the faster road option.
                    </li>
                    <li>
                      <strong>Pace yourself with the food:</strong> Andhra
                      cuisine's heat can catch first-time visitors off
                      guard — order a milder version if you're unsure, and
                      keep yogurt or rice on hand.
                    </li>
                    <li>
                      <strong>Carry cash for Tirumala and smaller towns:</strong>{" "}
                      Card acceptance is inconsistent outside major hotels
                      and chains in Vizag and Tirupati town.
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
                          "Book Tirumala darshan/Seva slots online in advance",
                          "Follow the temple's traditional dress code",
                          "Take the scenic train to Araku Valley",
                          "Check cyclone forecasts before coastal travel",
                          "Carry cash for Tirumala and smaller towns",
                          "Try the Andhra thali at least once, mild if unsure",
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
                          "Show up at Tirumala without a booked darshan slot",
                          "Ignore the dress code at the temple entrance",
                          "Underestimate the heat of Andhra cuisine",
                          "Plan coastal travel during active cyclone warnings",
                          "Rely on cards outside major hotels and chains",
                          "Rush the Araku train ride by taking the road instead",
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
                  "Andhra Pradesh",
                  "Tirupati",
                  "Visakhapatnam",
                  "Araku Valley",
                  "Lepakshi",
                  "Srisailam",
                  "Pilgrimage",
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
                sections={ANDHRA_PRADESH_GEAR}
                destination="Andhra Pradesh"
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
