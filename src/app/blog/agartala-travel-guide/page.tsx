// src/app/blog/agartala-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Agartala Travel Guide: Palaces, Sightseeing & Tips",
  description:
    "Complete Agartala travel guide — Ujjayanta Palace, Heritage Park, Laxmi Narayan Bari, how to reach Tripura's capital, a 2-day city itinerary, where to stay and eat, day trips, and essential tips.",
  keywords:
    "Agartala travel guide, Agartala Tripura, Ujjayanta Palace, Agartala sightseeing, how to reach Agartala, Agartala airport, Tripura capital, Agartala things to do, Agartala 2 day itinerary, Akhaura border",
  openGraph: {
    title: "Agartala Travel Guide: Palaces, Sightseeing & Tips",
    description:
      "Tripura's unhurried capital, a former royal palace turned museum, and the practical gateway to the whole state — the complete Agartala guide.",
    url: "https://club.kudozz.in/blog/agartala-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Golden-hour city skyline with fort-like silhouettes, evoking Agartala's royal heritage character",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Agartala Travel Guide: Palaces, Sightseeing & Tips",
    description:
      "Tripura's unhurried capital and the practical gateway to the whole state — the complete Agartala guide.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/agartala-travel-guide",
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Agartala Travel Guide: Palaces, Sightseeing & Tips",
          description:
            "Complete Agartala travel guide — Ujjayanta Palace, Heritage Park, Laxmi Narayan Bari, how to reach Tripura's capital, a 2-day city itinerary, where to stay and eat, day trips, and essential tips.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
          datePublished: "2026-09-03",
          dateModified: "2026-09-03",
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
            "@id": "https://club.kudozz.in/blog/agartala-travel-guide",
          },
          keywords:
            "Agartala, Tripura, Ujjayanta Palace, capital city, Northeast India",
          about: {
            "@type": "Place",
            name: "Agartala",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Tripura",
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
                name: "Tripura",
                item: "https://club.kudozz.in/blog/tripura-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Agartala",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data (shared by visible section + JSON-LD) ────────────────────────────
const faqs = [
  {
    q: "What is the best time to visit Agartala?",
    a: "October to March is best — cool, dry conditions make walking around Ujjayanta Palace's gardens and Heritage Park genuinely pleasant. April-June turns hot and humid, and the July-September monsoon brings heavy rain that disrupts outdoor sightseeing.",
  },
  {
    q: "How many days do I need for Agartala alone?",
    a: "Two days is enough to cover the city itself — Ujjayanta Palace, Heritage Park, Laxmi Narayan Bari, and the local markets — at an unhurried pace. Most visitors extend to 3-4 days to fold in day trips to Sepahijala, Udaipur, or Neermahal.",
  },
  {
    q: "How do I reach Agartala?",
    a: "Maharaja Bir Bikram Airport (IXA) has regular flights from Kolkata, Guwahati, and Delhi and is by far the fastest option. Agartala railway station connects to the broader Indian network via Assam, though journeys from major cities take a day or more. By road, it's connected to Guwahati and Silchar, but drive times are substantial.",
  },
  {
    q: "Is Agartala safe for travellers?",
    a: "Yes — Agartala is a calm, low-key capital with none of the crowd-related hassles of bigger Indian cities. The main practical points are the usual ones for a border-adjacent city: carry ID, and if you plan to visit areas near the Akhaura border crossing, check current guidance beforehand.",
  },
  {
    q: "What are the best day trips from Agartala?",
    a: "Sepahijala Wildlife Sanctuary (~25 km) makes an easy half-day trip; Udaipur and the Tripura Sundari Temple (~55 km) work well as a full-day trip; and Neermahal's lake palace is a popular combined day out. Unakoti, roughly 178 km away, is a longer trip best done as an overnight.",
  },
  {
    q: "Is Ujjayanta Palace open every day?",
    a: "It's usually closed on Mondays, in line with most Indian state museums — confirm current timings before visiting. On other days it's typically open through the afternoon, with the palace and gardens illuminated in the evening.",
  },
];

function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Tripura's Unhurried Capital", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Agartala", level: 2 },
  { id: "things-to-do", title: "Palaces & City Sights", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "itinerary", title: "2-Day Agartala Itinerary", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AgartalaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jaisalmer/hero.jpg"
              alt="Golden-hour city skyline with fort-like silhouettes, evoking Agartala's royal heritage character"
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
                { label: "Tripura", href: "/blog/tripura-travel-guide" },
                { label: "Agartala", href: null },
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
              {["Agartala", "Tripura", "Ujjayanta Palace", "Northeast India"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Agartala Travel Guide: Palaces, Sightseeing & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A royal palace turned museum, unhurried streets a stone's
              throw from Bangladesh, and the practical gateway to one of
              India's most overlooked states — this is Agartala.
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
                  text: "Agartala, Tripura",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,200 words",
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
                    <path strokeLinecap="round" strokeLinejoin="round" d={m.d} />
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
                  <h2>Tripura's Unhurried Capital</h2>
                  <p>
                    <strong>Agartala</strong> sits on the banks of the Haora
                    river, roughly 2 km from the Akhaura land border crossing
                    into Bangladesh — a location that shapes the city's
                    quiet, slightly isolated character more than anything
                    else. It's the capital of{" "}
                    <Link href="/blog/tripura-travel-guide">Tripura</Link>{" "}
                    and, for almost every visitor, the first and last stop
                    of a trip into the state.
                  </p>
                  <p>
                    The city's centrepiece is{" "}
                    <Link href="/blog/ujjayanta-palace-travel-guide">
                      Ujjayanta Palace
                    </Link>
                    , the former royal residence of the Manikya dynasty, now
                    a museum set in landscaped gardens — genuinely striking
                    architecture in a city that otherwise moves at an
                    unhurried, low-key pace. Beyond the palace, Agartala
                    works best as a practical base: most travellers use it
                    to launch day trips to{" "}
                    <Link href="/blog/sepahijala-travel-guide">
                      Sepahijala Wildlife Sanctuary
                    </Link>
                    ,{" "}
                    <Link href="/blog/udaipur-tripura-travel-guide">
                      Udaipur
                    </Link>{" "}
                    and the{" "}
                    <Link href="/blog/tripura-sundari-temple-travel-guide">
                      Tripura Sundari Temple
                    </Link>
                    , and Neermahal's lake palace.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Agartala at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Capital, Tripura",
                        },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "MBB Airport (IXA)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏰",
                          label: "Known For",
                          value: "Ujjayanta Palace",
                        },
                        {
                          icon: "🌉",
                          label: "Near Border",
                          value: "Akhaura (~2 km)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹5,000",
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
                  <h2>Best Time to Visit Agartala</h2>
                  <p>
                    Agartala shares Tripura's humid subtropical climate, so
                    the window that works for the rest of the state applies
                    here too.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions (15–28°C) make Ujjayanta Palace's gardens and Heritage Park genuinely pleasant to walk around.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, humidity rising",
                        text: "Heat and humidity climb ahead of the monsoon — still workable for city sightseeing with an early start.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rainfall",
                        text: "Substantial rain makes outdoor walking around the palace grounds and markets less comfortable.",
                      },
                      {
                        season: "Oct – Nov",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Durga Puja season",
                        text: "Agartala's Durga Puja celebrations are lively and significant — a good time to pair sightseeing with festival energy.",
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
                    <strong>Our pick:</strong> November to February — dry,
                    comfortable conditions for walking the palace grounds
                    and exploring the city on foot.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Agartala</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Maharaja Bir Bikram Airport
                      (IXA) has regular flights from Kolkata, Guwahati, and
                      Delhi — by far the fastest and most practical way in.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Agartala railway station
                      connects to the broader Indian rail network via Assam,
                      though journeys from major cities take a day or more.
                    </li>
                    <li>
                      <strong>By Road:</strong> Agartala is connected to
                      Guwahati (~500 km) and Silchar by road, but drive times
                      are substantial given the terrain.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Flying in is by far the most
                    practical option — road and rail journeys from major
                    Indian cities take a day or more given Tripura's
                    location.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Palaces & City Sights</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Heritage architecture at golden hour, evoking Agartala's palace district"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Ujjayanta Palace</h3>
                  <p>
                    The former royal residence, now the Tripura State
                    Museum, set in Mughal-style gardens with two ornamental
                    lakes — the city's most significant landmark, and
                    beautifully lit in the evening. See our full{" "}
                    <Link href="/blog/ujjayanta-palace-travel-guide">
                      Ujjayanta Palace guide
                    </Link>{" "}
                    for timings and visit tips.
                  </p>
                  <h3>Heritage Park</h3>
                  <p>
                    A well-kept public park near the palace, good for an
                    evening walk and a breather between sightseeing stops.
                  </p>
                  <h3>Laxmi Narayan Bari & Other Temples</h3>
                  <p>
                    A prominent local temple worth a quiet visit, alongside
                    smaller shrines scattered through the older parts of the
                    city.
                  </p>
                  <h3>Kunjaban & Pushpabanta Palaces</h3>
                  <p>
                    Kunjaban Palace now serves as the Governor's residence
                    with limited public access, while Pushpabanta Palace
                    adds another layer of the city's royal-era architecture —
                    worth a look from outside even if interiors aren't open.
                  </p>
                  <h3>State Tribal Museum & Handicraft Markets</h3>
                  <p>
                    The State Tribal Museum offers a compact introduction to
                    Tripura's 19 tribal communities, and local markets around
                    the city are a good place to browse cane and bamboo
                    handicrafts, a Tripura specialty.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Agartala</h2>
                  <p>
                    As the state capital, Agartala has by far the widest
                    range of accommodation in Tripura — most visitors base
                    themselves here for the whole trip.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses near Ujjayanta Palace",
                          "Tourist lodges (TTAAS), Agartala",
                          "Simple stays near the railway station",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Business hotels, central Agartala",
                          "Hotel Sonar Tori",
                          "Boutique stays near Heritage Park",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,000–₹10,000+/night",
                        picks: [
                          "Ginger Agartala",
                          "Premium business hotels",
                          "Serviced apartments, central Agartala",
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
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-Day Agartala Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Palace & City Core",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Ujjayanta Palace and museum",
                          "Evening: Heritage Park walk, illuminated palace",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Temples & Markets",
                        color: "bg-sky-600",
                        activities: [
                          "Laxmi Narayan Bari and local temples",
                          "State Tribal Museum",
                          "Afternoon: handicraft markets, cane and bamboo work",
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
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * With extra time, add a day trip to{" "}
                    <Link href="/blog/sepahijala-travel-guide">
                      Sepahijala Wildlife Sanctuary
                    </Link>{" "}
                    or a full-day trip to{" "}
                    <Link href="/blog/udaipur-tripura-travel-guide">
                      Udaipur
                    </Link>{" "}
                    and the{" "}
                    <Link href="/blog/tripura-sundari-temple-travel-guide">
                      Tripura Sundari Temple
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Agartala</h2>
                  <ul>
                    <li>
                      <strong>Mui Borok (bamboo shoot dishes):</strong>{" "}
                      Fermented bamboo shoot features heavily in Tripuri
                      tribal cuisine, used in both curries and chutneys.
                    </li>
                    <li>
                      <strong>Wahan Mosdeng:</strong> A tribal pork dish
                      cooked with local herbs, widely available in the city.
                    </li>
                    <li>
                      <strong>Fish preparations:</strong> Freshwater fish,
                      often cooked with mustard or bamboo shoot, features
                      prominently on local menus.
                    </li>
                    <li>
                      <strong>Bengali-influenced dishes:</strong> Agartala's
                      food scene carries strong Bengali influence, reflecting
                      the shared border and cultural history.
                    </li>
                  </ul>
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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹7,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport/day", "₹300", "₹700", "₹1,800"],
                          ["Sightseeing/day", "₹100", "₹300", "₹700"],
                          ["Daily total", "₹1,800", "₹4,900", "₹11,500"],
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
                    * Excludes flights to Agartala. Figures are per person,
                    per day.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Agartala</h2>
                  <ul>
                    <li>
                      <strong>Hire a car or auto for city sightseeing:</strong>{" "}
                      Sights are spread out enough that walking between all
                      of them isn't practical.
                    </li>
                    <li>
                      <strong>Most heritage sights close Mondays:</strong>{" "}
                      Ujjayanta Palace and several other attractions
                      typically close on Mondays — plan around this.
                    </li>
                    <li>
                      <strong>Carry ID:</strong> Given the proximity to the
                      Akhaura border, it's worth having identification on
                      hand, especially if travelling toward border areas.
                    </li>
                    <li>
                      <strong>Book flights ahead in peak season:</strong>{" "}
                      Agartala has limited flight frequency compared to
                      larger Northeastern hubs like Guwahati.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card and digital payment
                      acceptance thins out once you leave the main
                      commercial areas.
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
                          "Hire a car or auto for getting around the city",
                          "Visit Ujjayanta Palace in the evening for the lit-up view",
                          "Book Agartala flights well ahead in peak season",
                          "Try tribal Tripuri dishes like Wahan Mosdeng",
                          "Carry ID given the proximity to the border",
                          "Plan a day trip to Sepahijala or Udaipur",
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
                          "Plan a Monday visit to Ujjayanta Palace",
                          "Rely on cards outside the main commercial areas",
                          "Expect Guwahati-level flight frequency",
                          "Travel to border areas without checking advisories",
                          "Rush the city in under two days",
                          "Skip booking accommodation ahead in Durga Puja season",
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

                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🗺️ Extend the trip:</strong> Agartala pairs
                    naturally with a half-day at{" "}
                    <Link href="/blog/sepahijala-travel-guide">
                      Sepahijala Wildlife Sanctuary
                    </Link>{" "}
                    or a full day at{" "}
                    <Link href="/blog/udaipur-tripura-travel-guide">
                      Udaipur
                    </Link>{" "}
                    and the{" "}
                    <Link href="/blog/tripura-sundari-temple-travel-guide">
                      Tripura Sundari Temple
                    </Link>
                    . See our full{" "}
                    <Link href="/blog/tripura-travel-guide">
                      Tripura travel guide
                    </Link>{" "}
                    for the wider state.
                  </div>
                </section>

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-5 my-6">
                    {faqs.map((f) => (
                      <div
                        key={f.q}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <h4
                          className="font-bold text-stone-900 mb-2 text-base"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {f.q}
                        </h4>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {["Agartala", "Tripura", "Ujjayanta Palace", "Northeast India"].map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                      className="tag-pill"
                    >
                      #{tag}
                    </Link>
                  ),
                )}
              </div>

              <RelatedPostsGrid currentSlug="agartala-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="agartala-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
