// src/app/blog/punjab-travel-guide/page.tsx
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
  title: "Punjab Travel Guide: Golden Temple, Amritsar & Wagah Border",
  description:
    "The complete Punjab travel guide — the Golden Temple and langar, Jallianwala Bagh, the Wagah Border ceremony, Anandpur Sahib, Punjabi food, where to stay, and a full itinerary through the land of five rivers.",
  keywords:
    "Punjab travel guide, Golden Temple Amritsar, Wagah Border ceremony, Jallianwala Bagh, Amritsar travel guide, Anandpur Sahib, Punjabi food, Amritsari kulcha, Punjab itinerary",
  openGraph: {
    title: "Punjab Travel Guide: Golden Temple, Amritsar & Wagah Border",
    description:
      "The Golden Temple's shimmering sarovar, a nightly border ceremony full of pageantry, and some of India's best food — the complete guide to Punjab.",
    url: "https://club.kudozz.in/blog/punjab-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/udaipur/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A white marble monument reflected in a still sacred pool, evoking the Golden Temple's Amrit Sarovar in Amritsar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Punjab Travel Guide: Golden Temple, Amritsar & Wagah Border",
    description:
      "The Golden Temple, the Wagah Border ceremony, and legendary Punjabi food — the complete guide to Punjab.",
    images: ["/images/destinations/udaipur/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/punjab-travel-guide",
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
            "Punjab Travel Guide: Golden Temple, Amritsar & Wagah Border",
          description: "The complete Punjab travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/udaipur/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/punjab-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Punjab",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Punjab",
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
                name: "Punjab Travel Guide",
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
  { id: "introduction", title: "Why Punjab?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Punjab", level: 2 },
  { id: "amritsar", title: "Amritsar: The Golden Temple", level: 2 },
  { id: "wagah-border", title: "The Wagah Border Ceremony", level: 2 },
  { id: "other-cities", title: "Patiala & Anandpur Sahib", level: 2 },
  { id: "rural-punjab", title: "Rural Punjab & Farm Stays", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Punjab-specific gear ─────────────────────────────────────────────────
const PUNJAB_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for temple etiquette, long queue times, and Punjab's sharp seasonal extremes",
    emoji: "🛕",
    items: [
      {
        name: "Lightweight Head Scarf",
        description:
          "Covering your head is mandatory inside the Golden Temple complex — carrying your own scarf is more comfortable than relying on the ones provided at the entrance.",
        price: "₹299",
        rating: 4.4,
        reviews: "6.8k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("lightweight+head+scarf+travel"),
        tag: "Golden Temple essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Head covering is strictly required for all visitors, regardless of religion — bringing your own avoids queuing for a shared one at busy times.",
      },
      {
        name: "Comfortable Walking Shoes (Easy-Off)",
        description:
          "Footwear must be removed before entering the Golden Temple complex, and the marble parikrama path around the sarovar is walked barefoot — slip-on shoes make this far easier.",
        price: "₹899",
        rating: 4.4,
        reviews: "7.6k",
        image: "🩴",
        affiliateUrl: amazonSearchUrl("slip+on+sandals+travel"),
        tag: "Temple essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "You'll be removing and re-collecting your shoes multiple times across a Golden Temple visit — slip-ons save real time and hassle.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Amritsar and Punjab's plains get very hot for much of the year, and the Golden Temple complex has long uncovered marble stretches.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "The marble parikrama around the sarovar gets scorching hot underfoot in summer — hydration and timing both matter here.",
      },
      {
        name: "Modest Travel Clothing",
        description:
          "Covered shoulders and legs are expected at the Golden Temple and other gurdwaras — a simple, respectful outfit avoids any last-minute scrambling.",
        price: "₹799",
        rating: 4.3,
        reviews: "4.4k",
        image: "👗",
        affiliateUrl: amazonSearchUrl("modest+travel+clothing+lightweight"),
        tag: "Temple essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Gurdwara etiquette expects modest dress from all visitors — planning for this ahead of time is simpler than adjusting on arrival.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for the Wagah Border evening trip and long sightseeing days combining Amritsar's key sights.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "A full day covering the Golden Temple, Jallianwala Bagh, and an evening Wagah Border trip runs long — your phone works hard throughout.",
      },
      {
        name: "Sun Hat",
        description:
          "Useful across Amritsar's open sights and the Wagah Border grandstand area, both largely uncovered.",
        price: "₹399",
        rating: 4.3,
        reviews: "5.6k",
        image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"),
        tag: "Sun essential",
        tagColor: "bg-red-100 text-red-700",
        why: "The Wagah Border ceremony involves significant waiting time in an open grandstand under direct sun before the evening show begins.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PunjabGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/udaipur/hero.jpg"
              alt="A white marble monument reflected in a still sacred pool, evoking the Golden Temple's Amrit Sarovar in Amritsar"
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
                { label: "Punjab", href: "/blog?category=punjab" },
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
                "Amritsar",
                "Golden Temple",
                "Wagah Border",
                "Punjabi Food",
                "Sikh Heritage",
                "State Guide",
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
              Punjab Travel Guide: Golden Temple, Amritsar & Wagah Border
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A temple that shimmers gold over a sacred pool, a nightly
              border ceremony full of pageantry and patriotism, and food
              that shaped how the rest of India eats — Punjab is warm,
              direct, and genuinely unforgettable.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "14 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Punjab, Northwest India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,800 words",
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
                  <h2>Why Punjab?</h2>
                  <p>
                    Known as the "Land of Five Rivers," <strong>Punjab</strong>{" "}
                    is home to Sikhism's holiest shrine, the site of one of
                    the darkest chapters of India's colonial history, and a
                    border ceremony that's become one of the country's most
                    theatrical daily spectacles.
                  </p>
                  <p>
                    At the centre of it all is <strong>Amritsar</strong> and
                    the <strong>Golden Temple</strong> — a genuinely moving
                    place to visit regardless of faith, open 24 hours a day
                    and running the world's largest free community kitchen,
                    feeding over 100,000 people daily.
                  </p>
                  <p>
                    Beyond Amritsar, Punjab rewards travellers with warm,
                    direct hospitality, mustard-yellow fields in winter, and
                    a food culture — tandoori, butter chicken, lassi, sarson
                    da saag — that has quietly become the default idea of
                    "Indian food" for much of the world.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Punjab at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Punjab" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Amritsar (ATQ)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🕍",
                          label: "Known For",
                          value: "Golden Temple, Wagah Border, Food",
                        },
                        {
                          icon: "🍛",
                          label: "Must-Eat",
                          value: "Amritsari Kulcha, Lassi",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹6,000",
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
                  <h2>Best Time to Visit Punjab</h2>
                  <p>
                    Punjab's plains climate is similar to Delhi's — sharp
                    seasonal extremes that make timing genuinely matter.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable days (8–25°C) make the Golden Temple's marble parikrama and a Wagah Border evening genuinely pleasant — mustard fields bloom in winter too.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — avoid if possible",
                        text: "Amritsar regularly crosses 42°C. The Golden Temple's marble gets scorching underfoot — visit only early morning or evening in this window.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid but green",
                        text: "Heat breaks noticeably with the monsoon, and Punjab's farmland turns a vivid green — a quieter, less crowded time to visit.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🌾",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Mustard field season",
                        text: "Rural Punjab's fields turn bright yellow with mustard bloom — a good window to combine Amritsar with a countryside detour.",
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
                    comfortable temperatures, mustard fields in bloom, and
                    the best conditions for both the Golden Temple and an
                    evening at Wagah.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Punjab</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Sri Guru Ram Dass Jee
                      International Airport (ATQ) in Amritsar has direct
                      domestic and international connections, including
                      several flights from the UK, Canada and the Gulf given
                      the sizeable Punjabi diaspora.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Amritsar Junction is well
                      connected to Delhi (~6 hrs) and other major North
                      Indian cities.
                    </li>
                    <li>
                      <strong>By Road:</strong> Amritsar is roughly 6-7
                      hours from Delhi by road, and about 5 hours from
                      Chandigarh — a common add-on to a North India trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Punjab pairs naturally with
                    a Chandigarh stopover if travelling from Delhi — see our
                    dedicated{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh travel guide
                    </Link>{" "}
                    for that leg of the trip.
                  </div>
                </section>

                {/* ── Amritsar ──────────────────────────────────────────── */}
                <section id="amritsar">
                  <h2>Amritsar: The Golden Temple</h2>
                  <p>
                    Sikhism's holiest site, the <strong>Golden Temple
                    (Sri Harmandir Sahib)</strong>, sits at the centre of a
                    sacred pool (the Amrit Sarovar) in the heart of
                    Amritsar's old city — open 24 hours and free to all
                    visitors, regardless of religion.
                  </p>
                  <ul>
                    <li>
                      <strong>Golden Temple visit:</strong> Best experienced
                      at dawn or late evening, when it's quieter and the
                      lighting on the gold-plated dome is most striking —
                      allow at least 2-3 hours.
                    </li>
                    <li>
                      <strong>Langar (community kitchen):</strong> The
                      temple serves free vegetarian meals to over 100,000
                      people daily, prepared and served largely by
                      volunteers — participating is a genuinely humbling
                      experience open to everyone.
                    </li>
                    <li>
                      <strong>Jallianwala Bagh:</strong> A short walk from
                      the Golden Temple, the site of the 1919 massacre where
                      British troops fired on an unarmed crowd — now a
                      memorial garden with a museum documenting the event.
                    </li>
                    <li>
                      <strong>Partition Museum:</strong> A moving, well-
                      curated museum documenting the 1947 Partition of
                      India, housed in Amritsar's Town Hall.
                    </li>
                    <li>
                      <strong>Amritsar's old city bazaars:</strong> Narrow
                      lanes around the Golden Temple packed with food
                      stalls, textile shops, and traditional Punjabi
                      juttis (footwear).
                    </li>
                  </ul>
                </section>

                {/* ── Wagah Border ──────────────────────────────────────── */}
                <section id="wagah-border">
                  <h2>The Wagah Border Ceremony</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/udaipur/saheliyon.jpg"
                      alt="Ornate garden fountains and pavilions, evoking the ceremonial pageantry near Amritsar's Wagah Border"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Roughly 28 km from Amritsar, the <strong>Wagah Border</strong>{" "}
                    is one of the few official land crossings between India
                    and Pakistan, and hosts a nightly flag-lowering ceremony
                    that's become one of India's most-watched border
                    spectacles.
                  </p>
                  <ul>
                    <li>
                      <strong>The ceremony:</strong> Border guards from both
                      sides perform an elaborate, high-kicking marching
                      routine to a backdrop of patriotic music and chanting
                      crowds — genuinely one of a kind.
                    </li>
                    <li>
                      <strong>Arrive early:</strong> The grandstands fill up
                      fast, especially on weekends — arrive at least 90
                      minutes before the scheduled start (around sunset) to
                      get a decent seat.
                    </li>
                    <li>
                      <strong>Security:</strong> Expect thorough security
                      checks and restrictions on bags and electronics —
                      travel light for this trip.
                    </li>
                  </ul>
                </section>

                {/* ── Other Cities ──────────────────────────────────────── */}
                <section id="other-cities">
                  <h2>Patiala & Anandpur Sahib</h2>
                  <ul>
                    <li>
                      <strong>Patiala:</strong> Once a princely state, known
                      for the Qila Mubarak fort complex, the ornate Sheesh
                      Mahal, and its association with the Patiala peg
                      (a generous whisky measure) and traditional Patiala
                      salwar.
                    </li>
                    <li>
                      <strong>Anandpur Sahib:</strong> One of Sikhism's most
                      sacred sites, birthplace of the Khalsa — home to the
                      striking Virasat-e-Khalsa museum, which documents
                      Sikh history through immersive exhibits.
                    </li>
                  </ul>
                </section>

                {/* ── Rural Punjab ──────────────────────────────────────── */}
                <section id="rural-punjab">
                  <h2>Rural Punjab & Farm Stays</h2>
                  <p>
                    Punjab's countryside — famously the breadbasket of
                    India — offers a genuinely different side of the state
                    from Amritsar's temple circuit.
                  </p>
                  <ul>
                    <li>
                      <strong>Farm stays:</strong> Several working farms
                      near Amritsar and rural Punjab offer overnight stays,
                      tractor rides, and a taste of authentic Punjabi
                      village life.
                    </li>
                    <li>
                      <strong>Mustard fields:</strong> Winter turns much of
                      rural Punjab bright yellow with mustard bloom — a
                      striking, easy day-trip detour from Amritsar.
                    </li>
                    <li>
                      <strong>Bhangra performances:</strong> Traditional
                      Punjabi folk dance, often part of organised farm-stay
                      or cultural evening experiences.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Amritsar has excellent accommodation across all
                    budgets, with the biggest advantage going to stays
                    within walking distance of the Golden Temple.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,800/night",
                        picks: [
                          "Golden Temple's own free/donation guesthouses",
                          "Budget hotels near the Golden Temple",
                          "Backpacker hostels, Amritsar",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Hotels within walking distance of the Golden Temple",
                          "Business hotels, central Amritsar",
                          "Heritage haveli stays, Patiala",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹8,000–₹20,000+/night",
                        picks: [
                          "Taj Swarna, Amritsar",
                          "Hyatt Regency Amritsar",
                          "Premium farm-stay resorts near Amritsar",
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
                    The Golden Temple complex itself offers simple free or
                    donation-based guesthouse accommodation to all visitors
                    — a genuinely unique option worth considering for at
                    least one night.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Punjab</h2>
                  <ul>
                    <li>
                      <strong>Amritsari Kulcha:</strong> A stuffed, flaky
                      leavened bread cooked in a tandoor, typically served
                      with chole (spiced chickpeas) — Amritsar's signature
                      dish.
                    </li>
                    <li>
                      <strong>Langar at the Golden Temple:</strong> A simple
                      but memorable dal-roti-sabzi meal, prepared and served
                      by volunteers around the clock — an essential
                      experience regardless of dietary preference.
                    </li>
                    <li>
                      <strong>Sarson da Saag & Makki di Roti:</strong> A
                      classic Punjabi winter dish — mustard greens curry
                      with cornbread, best in the December–February window.
                    </li>
                    <li>
                      <strong>Lassi:</strong> A thick, creamy yoghurt drink,
                      served both sweet and salted — Amritsar's old city has
                      several legendary lassi shops.
                    </li>
                    <li>
                      <strong>Butter Chicken & Dal Makhani:</strong> Both
                      dishes trace their origins to Punjab, and are best
                      tried here in their original form rather than the more
                      familiar restaurant versions found elsewhere.
                    </li>
                    <li>
                      <strong>Amritsari Fish:</strong> Battered and fried
                      freshwater fish, a distinctive Punjabi street food
                      specialty worth seeking out.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>3-Day Punjab Itinerary</h2>
                  <p>
                    Three days is a comfortable minimum to properly cover
                    Amritsar and the Wagah Border without rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Golden Temple & Old City",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, early evening Golden Temple visit",
                          "Participate in langar",
                          "Old city bazaar walk, dinner at a local dhaba",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "History & Wagah Border",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Golden Temple at sunrise",
                          "Jallianwala Bagh, Partition Museum",
                          "Evening: Wagah Border ceremony",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Countryside or Anandpur Sahib",
                        color: "bg-forest-600",
                        activities: [
                          "Rural Punjab farm-stay day trip, or",
                          "Day trip to Anandpur Sahib and Virasat-e-Khalsa museum",
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
                            "₹3,800",
                            "₹12,000",
                          ],
                          ["Food/day", "₹400", "₹1,000", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹700",
                            "₹1,800",
                          ],
                          ["Activities/day", "₹200", "₹500", "₹1,200"],
                          ["Daily total", "₹1,900", "₹6,000", "₹17,500"],
                          [
                            "3-Day trip total",
                            "₹5,700",
                            "₹18,000",
                            "₹52,500",
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
                    * Excludes travel to Amritsar. The Golden Temple and
                    langar are entirely free — donations are optional.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Punjab</h2>
                  <ul>
                    <li>
                      <strong>Cover your head at the Golden Temple:</strong>{" "}
                      Mandatory for all visitors, regardless of religion or
                      gender — carry a scarf or use the ones provided.
                    </li>
                    <li>
                      <strong>Remove shoes and wash feet before
                      entering:</strong> Standard temple etiquette, with
                      designated shoe-storage and foot-washing areas at the
                      entrance.
                    </li>
                    <li>
                      <strong>No alcohol, tobacco, or non-vegetarian food
                      near the temple:</strong> Respect these restrictions
                      within and immediately around the Golden Temple
                      complex.
                    </li>
                    <li>
                      <strong>Arrive early for Wagah Border:</strong> Seats
                      fill up fast, especially on weekends — 90 minutes
                      ahead is a safe buffer.
                    </li>
                    <li>
                      <strong>Try the langar respectfully:</strong> Sit on
                      the floor as directed, eat what's served without
                      waste, and follow the flow of volunteers — it's a
                      genuinely moving experience if approached with respect.
                    </li>
                    <li>
                      <strong>Carry cash for old-city shopping:</strong> Card
                      acceptance is inconsistent in Amritsar's narrow bazaar
                      lanes.
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
                          "Cover your head throughout the Golden Temple complex",
                          "Visit the Golden Temple at dawn or late evening",
                          "Participate respectfully in the langar",
                          "Arrive early for the Wagah Border ceremony",
                          "Try Amritsari kulcha and lassi in the old city",
                          "Carry cash for bazaar shopping",
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
                          "Bring alcohol, tobacco, or non-veg food near the temple",
                          "Skip a head covering inside the Golden Temple complex",
                          "Arrive at Wagah Border right before the ceremony starts",
                          "Rush the marble parikrama barefoot at midday in summer",
                          "Waste food at the langar",
                          "Rely on cards in Amritsar's old city bazaars",
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
                  "Punjab",
                  "Amritsar",
                  "Golden Temple",
                  "Wagah Border",
                  "Punjabi Food",
                  "Sikh Heritage",
                  "State Guide",
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
                sections={PUNJAB_GEAR}
                destination="Punjab"
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
