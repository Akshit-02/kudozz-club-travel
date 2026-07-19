// src/app/blog/delhi-travel-guide/page.tsx
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
  title: "Delhi Travel Guide: Red Fort, Qutub Minar & 3-Day Itinerary",
  description:
    "The complete Delhi travel guide — Red Fort, Humayun's Tomb, Qutub Minar, Chandni Chowk food trails, Hauz Khas Village, day trips to Agra, where to stay, and a full 3-day itinerary for India's layered, chaotic, endlessly rewarding capital.",
  keywords:
    "Delhi travel guide, Red Fort, Qutub Minar, Humayun's Tomb, Chandni Chowk food, Hauz Khas Village, Delhi itinerary, India Gate, Lotus Temple, Delhi metro guide, Delhi to Agra day trip",
  openGraph: {
    title: "Delhi Travel Guide: Red Fort, Qutub Minar & 3-Day Itinerary",
    description:
      "Mughal forts, colonial-era avenues, and one of the world's great street food scenes — the complete guide to Delhi, India's layered capital.",
    url: "https://club.kudozz.in/blog/delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Red sandstone fort walls at golden hour, evoking Delhi's Red Fort and Mughal-era architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delhi Travel Guide: Red Fort, Qutub Minar & 3-Day Itinerary",
    description:
      "Mughal monuments, colonial avenues, and legendary street food — the complete guide to Delhi.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/delhi-travel-guide",
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
          headline: "Delhi Travel Guide: Red Fort, Qutub Minar & 3-Day Itinerary",
          description: "The complete Delhi travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
          datePublished: "2026-07-19",
          dateModified: "2026-07-19",
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
            "@id": "https://club.kudozz.in/blog/delhi-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Delhi",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Delhi",
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
                name: "Delhi Travel Guide",
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
  { id: "introduction", title: "Why Delhi?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Delhi", level: 2 },
  { id: "getting-around", title: "Getting Around", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "neighbourhoods", title: "Neighbourhoods to Explore", level: 2 },
  { id: "day-trips", title: "Day Trips from Delhi", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Delhi-specific gear ──────────────────────────────────────────────────────
const DELHI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for monument-hopping, dense crowds, and a city where weather swings between extremes",
    emoji: "🕌",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "Red Fort, Humayun's Tomb, Qutub Minar and Chandni Chowk all involve extended walking on stone, uneven lanes, and long monument complexes.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Monument essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "A single day covering Old Delhi's monuments and lanes easily crosses 10,000 steps on hard, uneven surfaces.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Delhi's monument complexes are large and mostly uncovered — Red Fort and Qutub Minar have long stretches with no shade.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Summer temperatures regularly cross 40°C, and hydration is the single biggest factor in enjoying a full sightseeing day.",
      },
      {
        name: "N95 / Anti-Pollution Mask",
        description:
          "Delhi's air quality drops sharply in winter, particularly November–January — a well-fitted mask is worth packing for that window.",
        price: "₹399",
        rating: 4.3,
        reviews: "6.4k",
        image: "😷",
        affiliateUrl: amazonSearchUrl("n95+pollution+mask"),
        tag: "Winter essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Delhi regularly records some of the world's worst AQI readings in winter — this isn't optional if you're visiting Nov–Jan and sensitive to air quality.",
      },
      {
        name: "Compact Daypack",
        description:
          "Handy for camera gear, water, and layers across long monument-and-market days that span both Old and New Delhi.",
        price: "₹1,199",
        rating: 4.4,
        reviews: "6.1k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("travel+daypack+backpack"),
        tag: "Sightseeing essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Security checks are routine at Delhi's major monuments — a smaller, simple daypack clears faster than a large bag.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for long days out using the metro and navigation apps between Old Delhi, Central Delhi, and South Delhi neighbourhoods.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "City-day essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Delhi's sights are spread across a genuinely large city — expect to rely heavily on your phone for maps and metro routes.",
      },
      {
        name: "Basic Stomach Care Kit",
        description:
          "Street food is one of Delhi's biggest draws, but it's worth carrying basic digestive medication for first-time visitors trying it extensively.",
        price: "₹399",
        rating: 4.3,
        reviews: "4.8k",
        image: "💊",
        affiliateUrl: amazonSearchUrl("travel+digestive+medicine+kit"),
        tag: "Street-food essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Chandni Chowk's food trail is a highlight for most visitors — a basic kit means it doesn't derail the rest of your trip.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DelhiGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Red sandstone fort walls at golden hour, evoking Delhi's Red Fort and Mughal-era architecture"
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
                { label: "Delhi", href: "/blog?category=delhi" },
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
                "Delhi",
                "Red Fort",
                "Qutub Minar",
                "Chandni Chowk",
                "Street Food",
                "City Guide",
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
              Delhi Travel Guide: Red Fort, Qutub Minar & 3-Day Itinerary
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Mughal forts, Sultanate-era minarets, colonial-built avenues,
              and a street food scene that rewards every hour spent chasing
              it — Delhi is layered, loud, and genuinely one of the world's
              great capital cities.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "16 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Delhi, National Capital Territory",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,200 words",
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
                  <h2>Why Delhi?</h2>
                  <p>
                    Few cities anywhere carry as much layered history as{" "}
                    <strong>Delhi</strong> — capital of at least seven
                    successive empires, from the Delhi Sultanate through the
                    Mughals to the British Raj, each leaving behind monuments
                    that still define the city's skyline today.
                  </p>
                  <p>
                    That history sits alongside a modern capital of over 30
                    million people: Old Delhi's dense, chaotic lanes and
                    Mughal-era food traditions a few kilometres from New
                    Delhi's wide colonial avenues, government buildings, and
                    upscale neighbourhoods like Hauz Khas and Khan Market.
                  </p>
                  <p>
                    Delhi rewards travellers willing to embrace the chaos —
                    the traffic, the crowds, the sensory overload of Chandni
                    Chowk — in exchange for some of India's finest
                    monuments, its widest range of food, and a genuinely
                    excellent metro system that makes navigating it all more
                    manageable than it first appears.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕌</span> Delhi at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Territory",
                          value: "National Capital Territory",
                        },
                        {
                          icon: "✈️",
                          label: "Airport",
                          value: "Indira Gandhi Intl. (DEL)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Mughal Monuments, Street Food, Markets",
                        },
                        {
                          icon: "🚇",
                          label: "Getting Around",
                          value: "Delhi Metro (extensive)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,800 – ₹8,000",
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
                  <h2>Best Time to Visit Delhi</h2>
                  <p>
                    Delhi has one of the more extreme climates of any major
                    Indian city — summers are brutal, winters are cold and
                    smoggy, and the shoulder seasons are genuinely the best
                    window to visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry days (10–26°C) make monument-hopping and long walks through Old Delhi genuinely pleasant — the peak tourist season.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — avoid if possible",
                        text: "Temperatures regularly cross 42–45°C. Sightseeing is genuinely uncomfortable outside early morning and evening hours.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid, occasional flooding",
                        text: "Heavy showers can cause waterlogging and traffic disruption, though the heat breaks noticeably compared to summer.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🌫️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cold with poor air quality",
                        text: "Comfortable temperatures, but Delhi's air quality drops sharply in this window — pack a mask if you're sensitive to pollution.",
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
                    <strong>Our pick:</strong> late February to early April,
                    or October to November — cool enough for full days of
                    sightseeing, and outside the worst of the winter smog.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Delhi</h2>
                  <p>
                    As India's capital, Delhi is the country's best-connected
                    city by a wide margin.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Indira Gandhi International
                      Airport (DEL) is India's busiest, with direct flights
                      from almost every major domestic and international city.
                    </li>
                    <li>
                      <strong>By Rail:</strong> New Delhi, Old Delhi, and
                      Nizamuddin railway stations connect to virtually every
                      part of the country, including high-speed options like
                      the Shatabdi and Rajdhani Expresses.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected by national
                      highways to neighbouring states, with the
                      Delhi–Chandigarh and Delhi–Agra expressways especially
                      popular for road trips.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The Airport Express Metro
                    Line connects IGI Airport to New Delhi Railway Station in
                    around 20 minutes — often faster and cheaper than a cab
                    during peak traffic hours.
                  </div>
                </section>

                {/* ── Getting Around ────────────────────────────────────── */}
                <section id="getting-around">
                  <h2>Getting Around Delhi</h2>
                  <ul>
                    <li>
                      <strong>Delhi Metro:</strong> Extensive, efficient, and
                      by far the best way to cover long distances across the
                      city, avoiding Delhi's notorious road traffic.
                    </li>
                    <li>
                      <strong>Auto-rickshaws:</strong> Widely available;
                      use app-based booking (Uber/Ola auto) or insist on the
                      meter to avoid overcharging.
                    </li>
                    <li>
                      <strong>App-based cabs:</strong> Reliable and reasonably
                      priced, though subject to Delhi's heavy traffic during
                      peak hours.
                    </li>
                    <li>
                      <strong>Walking Old Delhi:</strong> The best way to
                      actually experience Chandni Chowk and the surrounding
                      lanes — too narrow and congested for vehicles in many
                      stretches.
                    </li>
                  </ul>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Delhi</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Historic sandstone fortress architecture reminiscent of Delhi's Mughal-era monuments"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Red Fort (Lal Qila):</strong> The Mughal
                      emperors' seat of power for over 200 years and a UNESCO
                      World Heritage Site — best visited early morning to
                      avoid both heat and crowds. Closed Mondays.
                    </li>
                    <li>
                      <strong>Humayun's Tomb:</strong> The precursor to the
                      Taj Mahal's architectural style, set in expansive
                      Mughal gardens — often less crowded and just as
                      impressive.
                    </li>
                    <li>
                      <strong>Qutub Minar:</strong> A 73-metre Sultanate-era
                      minaret, the tallest brick minaret in the world, set
                      within an atmospheric complex of ruins.
                    </li>
                    <li>
                      <strong>Jama Masjid:</strong> India's largest mosque,
                      with sweeping views over Old Delhi from its minaret
                      (small extra fee for the climb).
                    </li>
                    <li>
                      <strong>India Gate:</strong> A war memorial and
                      popular evening gathering spot along Rajpath, especially
                      atmospheric when lit up after dark.
                    </li>
                    <li>
                      <strong>Lotus Temple:</strong> A striking Bahá'í house
                      of worship shaped like a lotus flower, open to all
                      faiths for quiet reflection.
                    </li>
                    <li>
                      <strong>Akshardham Temple:</strong> An enormous, ornate
                      modern temple complex with an evening light-and-sound
                      show — bring ID, as security is strict and no
                      electronics are allowed inside.
                    </li>
                    <li>
                      <strong>Chandni Chowk food trail:</strong> One of
                      India's most legendary street food streets — see the
                      food section below for specific stops.
                    </li>
                  </ul>
                </section>

                {/* ── Neighbourhoods ────────────────────────────────────── */}
                <section id="neighbourhoods">
                  <h2>Neighbourhoods to Explore</h2>
                  <ul>
                    <li>
                      <strong>Old Delhi:</strong> Dense, chaotic, and
                      genuinely essential — home to Red Fort, Jama Masjid,
                      Chandni Chowk, and some of the city's best food.
                    </li>
                    <li>
                      <strong>Connaught Place:</strong> A colonial-era
                      circular commercial hub, now a mix of shops,
                      restaurants and bars — a good central base.
                    </li>
                    <li>
                      <strong>Hauz Khas Village:</strong> A trendy
                      arts-and-nightlife district built around a 13th-century
                      reservoir and madrasa ruins — cafés, boutiques and bars.
                    </li>
                    <li>
                      <strong>Khan Market:</strong> An upscale shopping and
                      dining district, popular with both locals and
                      expatriates.
                    </li>
                    <li>
                      <strong>Lodhi Colony / Lodhi Art District:</strong>{" "}
                      Delhi's open-air street art neighbourhood, worth a
                      wander for photography.
                    </li>
                  </ul>
                </section>

                {/* ── Day Trips ─────────────────────────────────────────── */}
                <section id="day-trips">
                  <h2>Day Trips from Delhi</h2>
                  <ul>
                    <li>
                      <strong>Agra (~230 km, ~3.5 hrs by road or 2 hrs by Gatimaan Express):</strong>{" "}
                      Home to the Taj Mahal and Agra Fort — a very doable long
                      day trip, though an overnight stay allows more time at
                      both sites.
                    </li>
                    <li>
                      <strong>Mathura & Vrindavan (~150 km, ~3 hrs):</strong>{" "}
                      Significant pilgrimage towns tied to Krishna's birth and
                      childhood, especially lively during Holi and Janmashtami.
                    </li>
                    <li>
                      <strong>Neemrana (~120 km, ~2.5 hrs):</strong> Home to a
                      restored 15th-century fort-palace hotel, popular for a
                      quieter overnight escape.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Delhi</h2>
                  <p>
                    Where you base yourself matters more in Delhi than in most
                    cities — pick based on whether you prioritise Old Delhi's
                    monuments or New Delhi's markets and nightlife.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,500/night",
                        picks: [
                          "Backpacker hostels, Paharganj",
                          "Budget hotels near New Delhi Station",
                          "Guesthouses, Karol Bagh",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,500–₹8,000/night",
                        picks: [
                          "Boutique hotels, Connaught Place",
                          "Hotel chains, South Delhi",
                          "Business hotels near Aerocity",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹12,000–₹35,000+/night",
                        picks: [
                          "The Imperial, New Delhi",
                          "The Oberoi, New Delhi",
                          "Taj Mahal Hotel, New Delhi",
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
                    First-time visitors generally do best based near
                    Connaught Place — central, metro-connected, and an easy
                    reach of both Old Delhi's monuments and South Delhi's
                    neighbourhoods.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Delhi</h2>
                  <p>
                    Delhi's food scene is arguably the best reason to visit —
                    a genuinely rare mix of centuries-old street food
                    traditions and a modern, cosmopolitan dining scene.
                  </p>
                  <ul>
                    <li>
                      <strong>Parathe Wali Gali (Chandni Chowk):</strong> A
                      narrow lane dedicated entirely to stuffed parathas,
                      running for over a century.
                    </li>
                    <li>
                      <strong>Karim's (Jama Masjid):</strong> A legendary
                      Mughlai restaurant serving kebabs and biryani since
                      1913, a short walk from Jama Masjid.
                    </li>
                    <li>
                      <strong>Chaat at Chandni Chowk:</strong> Golgappe,
                      aloo tikki, and dahi bhalla from long-standing street
                      vendors — Old Delhi's chaat is considered among India's
                      best.
                    </li>
                    <li>
                      <strong>Butter chicken at Moti Mahal:</strong> The
                      restaurant credited with inventing the dish, still
                      serving it in Daryaganj.
                    </li>
                    <li>
                      <strong>Khan Market and Hauz Khas Village cafés:</strong>{" "}
                      For a completely different, cosmopolitan dining
                      experience — everything from Italian to modern Indian
                      fusion.
                    </li>
                    <li>
                      <strong>Jalebi at Old Famous Jalebi Wala:</strong> A
                      Chandni Chowk institution since 1884, still frying
                      jalebis fresh through the day.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>3-Day Delhi Itinerary</h2>
                  <p>
                    Three days is a comfortable minimum to cover Old and New
                    Delhi properly without feeling rushed.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Old Delhi",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: Red Fort",
                          "Late morning: Jama Masjid",
                          "Afternoon: Chandni Chowk food trail on foot",
                          "Evening: Rickshaw ride through the old lanes",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Mughal Monuments & New Delhi",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Humayun's Tomb",
                          "Late morning: Qutub Minar",
                          "Afternoon: India Gate and Rajpath",
                          "Evening: Connaught Place for dinner",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Modern Delhi & Markets",
                        color: "bg-stone-600",
                        activities: [
                          "Morning: Lotus Temple or Akshardham",
                          "Afternoon: Hauz Khas Village",
                          "Evening: Khan Market for dinner and shopping",
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
                            "₹1,200",
                            "₹5,000",
                            "₹18,000",
                          ],
                          ["Food/day", "₹600", "₹1,800", "₹4,000"],
                          ["Local transport/day", "₹200", "₹600", "₹2,000"],
                          [
                            "Monument entry fees/day",
                            "₹500",
                            "₹500",
                            "₹500",
                          ],
                          ["Daily total", "₹2,500", "₹7,900", "₹24,500"],
                          [
                            "3-Day trip total",
                            "₹7,500",
                            "₹23,700",
                            "₹73,500",
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
                    * Excludes travel to Delhi. Monument entry fees are
                    typically higher for foreign nationals — check current
                    rates before visiting.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Delhi</h2>
                  <ul>
                    <li>
                      <strong>Use the metro whenever possible:</strong> It's
                      genuinely the fastest, most reliable way to move across
                      the city, avoiding Delhi's severe traffic congestion.
                    </li>
                    <li>
                      <strong>Book Agra as an early start:</strong> Whether
                      by road or the Gatimaan Express, an early departure
                      gives you far more time at the Taj Mahal before the
                      afternoon crowds and heat.
                    </li>
                    <li>
                      <strong>Watch AQI in winter:</strong> If visiting
                      November–January and sensitive to air quality, check
                      daily AQI and carry a mask.
                    </li>
                    <li>
                      <strong>Negotiate autos or use app-based booking:</strong>{" "}
                      Meter compliance varies — Uber/Ola auto options remove
                      most of the haggling.
                    </li>
                    <li>
                      <strong>Dress modestly at religious sites:</strong>{" "}
                      Jama Masjid, Akshardham, and the Lotus Temple all expect
                      covered shoulders and knees.
                    </li>
                    <li>
                      <strong>Stay alert with belongings in crowds:</strong>{" "}
                      Chandni Chowk and major markets get extremely dense —
                      keep bags zipped and valuables secure.
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
                          "Use the Delhi Metro for most cross-city travel",
                          "Visit Red Fort and Jama Masjid early morning",
                          "Try the Chandni Chowk food trail on foot",
                          "Book an early Agra day trip for more Taj Mahal time",
                          "Dress modestly at religious sites",
                          "Check daily AQI if visiting in winter",
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
                          "Underestimate Delhi's traffic when planning timings",
                          "Visit major monuments on a Monday (many are closed)",
                          "Skip carrying a mask during peak winter smog",
                          "Bring electronics into Akshardham — they're not allowed",
                          "Rush Old Delhi — it rewards slow, deliberate exploring",
                          "Ignore basic bag security in dense markets",
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
                  "Delhi",
                  "Red Fort",
                  "Qutub Minar",
                  "Chandni Chowk",
                  "Humayun's Tomb",
                  "Street Food",
                  "City Guide",
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
                sections={DELHI_GEAR}
                destination="Delhi"
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
