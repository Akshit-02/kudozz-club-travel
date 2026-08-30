// src/app/blog/paharganj-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Paharganj Travel Guide: Main Bazaar & Budget Stays",
  description:
    "Paharganj travel guide: Main Bazaar shopping, budget guesthouses, cheap eats, safety tips, and how to use this backpacker hub beside New Delhi Railway Station.",
  keywords:
    "Paharganj Delhi, Main Bazaar Paharganj, Paharganj hotels, Paharganj backpackers, Paharganj near New Delhi railway station, Paharganj Main Bazaar guide, is Paharganj safe, Paharganj guesthouses, Paharganj budget travel",
  openGraph: {
    title: "Paharganj Travel Guide: Main Bazaar & Budget Stays",
    description:
      "Delhi's classic backpacker district — Main Bazaar shopping, budget guesthouses, cheap eats, and honest safety tips, all right beside New Delhi Railway Station.",
    url: "https://club.kudozz.in/blog/paharganj-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Sandstone fort architecture at golden hour, used here to represent Delhi's old-city character around Paharganj",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Paharganj Travel Guide: Main Bazaar & Budget Stays",
    description:
      "Delhi's classic backpacker district — Main Bazaar shopping, budget guesthouses, cheap eats, and honest safety tips beside New Delhi Railway Station.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/paharganj-delhi-travel-guide",
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
          headline: "Paharganj Travel Guide: Main Bazaar & Budget Stays",
          description:
            "Paharganj travel guide: Main Bazaar shopping, budget guesthouses, cheap eats, safety tips, and how to use this backpacker hub beside New Delhi Railway Station.",
          image:
            "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
          datePublished: "2026-08-30",
          dateModified: "2026-08-30",
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
            "@id": "https://club.kudozz.in/blog/paharganj-delhi-travel-guide",
          },
          keywords:
            "Paharganj Delhi, Main Bazaar Paharganj, Paharganj hotels, Paharganj backpackers, Paharganj near New Delhi railway station",
          about: {
            "@type": "Place",
            name: "Paharganj",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Paharganj",
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
                name: "Delhi",
                item: "https://club.kudozz.in/blog/delhi-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Paharganj",
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
    q: "Is Paharganj safe for tourists?",
    a: "Paharganj is generally safe in the sense that violent crime against tourists is rare, but it has a real reputation for touts, taxi/tuk-tuk scams (drivers claiming your hotel is 'closed' or 'burnt down' to redirect you to one that pays them commission), overcharging, and occasional drug touting on Main Bazaar at night. Most visitors pass through without serious incident, but it rewards street-smarts far more than a quiet residential neighbourhood would — confirm your hotel booking directly, don't believe unsolicited claims about your accommodation, and stay alert after dark, especially in the narrower side lanes.",
  },
  {
    q: "Is Paharganj good for solo travellers?",
    a: "Yes, with the normal caveats. It's one of the easiest places in India to meet other independent travellers, since it's been a backpacker crossroads for decades — cafés and guesthouse common areas are genuinely social. Solo women travellers should be more selective about guesthouse choice (read recent reviews, prioritise places with 24-hour reception and a bolt on the room door), avoid walking Main Bazaar's quieter stretches alone very late at night, and use pre-booked cabs after dark rather than flagging one on the street.",
  },
  {
    q: "How far is Paharganj from the airport?",
    a: "Indira Gandhi International Airport (DEL) is roughly 15–18 km from Paharganj, typically a 40–60 minute taxi or app-cab ride depending on traffic. The faster and more reliable option is the Airport Express Metro Line to New Delhi Railway Station (around 20 minutes), followed by a short 5–10 minute walk or auto-rickshaw ride to Main Bazaar, which sits right beside the station.",
  },
  {
    q: "Is Paharganj good for budget travel?",
    a: "Very much so — it's one of the cheapest places to sleep, eat, and shop in central Delhi, with dorm beds and basic private rooms available well under what you'd pay in almost any other central neighbourhood. Street food, thalis, and rooftop cafés keep daily food costs low, and Main Bazaar is a genuinely useful place to buy cheap travel gear, clothing, and basics before heading onward.",
  },
  {
    q: "How do I get from New Delhi Railway Station to Paharganj?",
    a: "Use the station's Ajmeri Gate exit (the side facing away from Connaught Place) rather than the Paharganj Gate exit if you want to walk in with fewer touts approaching you — Main Bazaar's entrance is directly across the road, a walk of two to five minutes. If you're carrying heavy luggage, a short auto-rickshaw or cycle-rickshaw ride into the bazaar is easier than dragging bags over the uneven road.",
  },
  {
    q: "Is Paharganj walkable, or do I need transport within it?",
    a: "Main Bazaar itself is entirely walkable and largely pedestrianised in its central stretch — vehicles do squeeze through, but most people navigate it on foot. For onward travel elsewhere in Delhi, the nearest metro stations (RK Ashram Marg and New Delhi) are both a short walk away, making the rest of the city easy to reach without needing a cab from your guesthouse door.",
  },
  {
    q: "What's the best way to avoid the classic Paharganj taxi and hotel scams?",
    a: "Book your first night's guesthouse in advance through a reputable platform so you have a confirmed booking reference, and simply refuse to engage if a driver, tout, or stranger tells you your hotel is closed, full, or has burnt down — this is one of the oldest scripts run around New Delhi Railway Station and Paharganj specifically. Walk to your guesthouse yourself or use a pre-booked app cab, and treat any unsolicited 'helpful' offer near the station with polite skepticism.",
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
  { id: "introduction", title: "Paharganj: Delhi's Backpacker Hub", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Paharganj", level: 2 },
  { id: "main-bazaar", title: "Main Bazaar", level: 2 },
  { id: "where-to-stay", title: "The Accommodation Scene", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "safety-tips", title: "Safety & Street-Smarts", level: 2 },
  { id: "itinerary", title: "Your First Day in Delhi", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PaharganjGuidePage() {
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
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Sandstone fort architecture at golden hour, used here to represent Delhi's old-city character around Paharganj"
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
                { label: "Delhi", href: "/blog/delhi-travel-guide" },
                { label: "Paharganj", href: null },
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
                "Paharganj",
                "Delhi",
                "Main Bazaar",
                "Backpacking",
                "Budget Travel",
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
              Paharganj Travel Guide: Main Bazaar & Budget Stays
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Delhi's classic backpacker district — a dense, chaotic, endlessly
              colourful bazaar strip right beside New Delhi Railway Station,
              and for decades the first stop for budget travellers landing on
              the India circuit.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "15 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Paharganj, New Delhi",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,600 words",
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
                  <h2>Paharganj: Delhi's Backpacker Hub</h2>
                  <p>
                    <strong>Paharganj</strong> is a dense, chaotic, and
                    endlessly colourful bazaar neighbourhood sitting literally
                    adjacent to New Delhi Railway Station, and it has been the
                    default landing point for budget and independent
                    travellers arriving in Delhi since the overland "hippie
                    trail" era of the 1960s and '70s. Long before boutique
                    hostels and app-based bookings existed, this was where
                    travellers coming off the train or a long-haul flight
                    found a cheap bed, a plate of food, and their first real
                    taste of Indian street life — and in many ways, it still
                    is.
                  </p>
                  <p>
                    The neighbourhood's spine is <strong>Main Bazaar</strong>{" "}
                    (also written Main Bazar), a narrow, largely pedestrianised
                    strip running roughly a kilometre from the station side
                    toward Ramakrishna Ashram Marg, lined with guesthouses,
                    clothing and jewellery stalls, luggage shops, spice and
                    incense sellers, and a thick concentration of cafés
                    catering specifically to foreign backpackers. It's loud,
                    crowded, occasionally overwhelming, and genuinely
                    unlike anywhere else in central Delhi.
                  </p>
                  <p>
                    This guide is deliberately honest about both sides of
                    Paharganj — the practical value it offers as an
                    ultra-central, ultra-cheap base, and the touting,
                    overcharging, and scam culture it's also known for. Used
                    with a bit of street-smarts, it remains one of the most
                    useful bases in Delhi for a first night or two; if you'd
                    rather explore other parts of the capital first, our{" "}
                    <Link href="/blog/delhi-travel-guide">
                      complete Delhi travel guide
                    </Link>{" "}
                    covers the wider city, monuments, and a full itinerary.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🎒</span> Paharganj at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Adjoining New Delhi Railway Station",
                        },
                        {
                          icon: "🚇",
                          label: "Nearest Metro",
                          value: "RK Ashram Marg / New Delhi",
                        },
                        {
                          icon: "🏨",
                          label: "Known For",
                          value: "Budget guesthouses, Main Bazaar",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
                        },
                        {
                          icon: "🛍️",
                          label: "Vibe",
                          value: "Backpacker hub since the 1960s–70s",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹800 – ₹3,500",
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
                  <h2>Best Time to Visit Paharganj</h2>
                  <p>
                    Paharganj follows Delhi's general climate pattern, but its
                    dense, narrow lanes and lack of much greenery make
                    extreme weather feel more intense here than in leafier
                    parts of the city.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry days make wandering Main Bazaar's crowded lanes far more bearable — this is also peak backpacker season, so the neighbourhood is at its most social.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — genuinely tough",
                        text: "Temperatures regularly cross 42°C, and Paharganj's narrow, densely built lanes trap heat with little shade or airflow — a hard time to be walking Main Bazaar with luggage.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid, occasional flooding",
                        text: "Narrow lanes can flood quickly in heavy downpours, and the already-crowded pavements get slick underfoot — carry a light rain layer if travelling in this window.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🌫️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cold with poor air quality",
                        text: "Comfortable daytime temperatures but Delhi's winter smog hits hard — the dense, low-rise lanes of Paharganj feel especially thick with it some mornings.",
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
                    <strong>Our pick:</strong> October to March. It's also
                    when Paharganj is busiest with fellow travellers, which
                    for many backpackers is exactly the point of basing here
                    in the first place.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Paharganj</h2>
                  <p>
                    Paharganj's single biggest practical advantage is its
                    location — it genuinely could not be more central or
                    better connected for onward rail travel.
                  </p>
                  <ul>
                    <li>
                      <strong>By Train:</strong> Main Bazaar begins literally
                      across the road from New Delhi Railway Station's
                      Ajmeri Gate side — this is the reason the neighbourhood
                      exists as a traveller hub in the first place. If you're
                      arriving by train from anywhere in India, this is about
                      as close to zero-transfer as it gets.
                    </li>
                    <li>
                      <strong>By Metro:</strong> Two stations serve the area
                      directly — <strong>RK Ashram Marg</strong> (Blue Line)
                      sits at the far end of Main Bazaar, and{" "}
                      <strong>New Delhi</strong> station (Yellow Line, also
                      an Airport Express stop) is a short walk from the
                      station-side entrance.
                    </li>
                    <li>
                      <strong>From the Airport:</strong> The Airport Express
                      Metro Line runs from IGI Airport to New Delhi Railway
                      Station in around 20 minutes, followed by a short walk
                      or auto-rickshaw ride into Main Bazaar — faster and
                      more predictable than a taxi through traffic.
                    </li>
                    <li>
                      <strong>By Road:</strong> Autos and app-cabs can drop
                      you at either end of Main Bazaar, though the central
                      pedestrianised stretch itself is walk-in only.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If walking in from New Delhi
                    Railway Station with luggage, use the Ajmeri Gate exit
                    rather than the Paharganj Gate side — it's a shorter,
                    more direct walk into Main Bazaar with fewer touts
                    approaching you along the way.
                  </div>
                </section>

                {/* ── Main Bazaar ───────────────────────────────────────── */}
                <section id="main-bazaar">
                  <h2>Main Bazaar</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Old-city sandstone architecture and narrow lanes, used here to represent the dense bazaar character of Paharganj's Main Bazaar"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Main Bazaar</strong> is Paharganj's central
                    pedestrianised strip and the reason most people come here
                    at all — a genuinely dense, sensory-overload stretch of
                    shops, stalls, and cafés packed into a narrow lane barely
                    wide enough for a cycle-rickshaw to squeeze through.
                  </p>
                  <ul>
                    <li>
                      <strong>Clothing & textiles:</strong> Loose cotton
                      pants, printed shirts, scarves, and the kind of
                      "traveller uniform" clothing sold across South and
                      Southeast Asia's backpacker circuits — cheap, and
                      genuinely useful for hot-weather travel onward.
                    </li>
                    <li>
                      <strong>Backpacker gear:</strong> Padlocks, sleeping
                      bag liners, dry bags, trekking basics, and knock-off
                      versions of outdoor brands — fine for budget essentials,
                      less reliable for serious high-altitude gear.
                    </li>
                    <li>
                      <strong>Jewellery and accessories:</strong> Silver and
                      costume jewellery, bindis, bangles, and beaded
                      accessories from dozens of small stalls.
                    </li>
                    <li>
                      <strong>Luggage shops:</strong> A genuinely useful
                      cluster of shops selling backpacks and duffel bags at a
                      fraction of retail price elsewhere — handy if your bag
                      gave out mid-trip.
                    </li>
                    <li>
                      <strong>Spices, incense & Ayurvedic goods:</strong>{" "}
                      Small shops selling loose spices, incense sticks, and
                      basic Ayurvedic remedies, though quality and pricing
                      vary a lot between stalls — compare before buying.
                    </li>
                  </ul>
                  <p>
                    Bargaining is expected almost everywhere on Main Bazaar —
                    opening prices for tourists are routinely inflated, so
                    treat the first quote as a starting point, not a fixed
                    price.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>The Accommodation Scene</h2>
                  <p>
                    Paharganj has one of the highest densities of budget
                    accommodation anywhere in India — hundreds of
                    guesthouses, hostels, and small hotels packed into a
                    handful of lanes. That density is both the appeal and
                    the catch: quality varies enormously from one building to
                    the next, sometimes floor to floor within the same
                    building, so a good rate alone isn't a reliable signal.
                  </p>
                  <p>
                    Rooms range from very basic — a bed, a fan, a shared or
                    en-suite bathroom that may or may not have hot water — up
                    to a smaller number of noticeably better-run hostels and
                    small hotels with proper reception desks, lockers, and
                    rooftop common areas. We're deliberately not naming
                    specific properties or quoting fixed prices here, since
                    both change frequently and vary a great deal — always
                    check recent reviews on a proper booking platform before
                    committing, rather than trusting a rickshaw driver's
                    recommendation.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Rock-Bottom Budget",
                        icon: "🛏️",
                        range: "₹300–₹700/night",
                        picks: [
                          "Dorm beds in backpacker hostels",
                          "Very basic shared-bath guesthouse rooms",
                          "Best for a single overnight, not a long stay",
                        ],
                      },
                      {
                        tier: "Standard Budget",
                        icon: "🏨",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Private rooms, attached bathroom",
                          "Better-reviewed guesthouses & hostels",
                          "Rooftop cafés often attached",
                        ],
                      },
                      {
                        tier: "Upper Budget",
                        icon: "✨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Small boutique-leaning hotels",
                          "AC, reliable hot water, better security",
                          "Still walkable to Main Bazaar & the station",
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
                    Book your first night before you arrive, through a
                    platform with real reviews and a confirmed booking
                    reference. Arriving without a reservation and letting a
                    tout or rickshaw driver "help" you find a room is exactly
                    how the classic Paharganj hotel scams start.
                  </blockquote>

                  <p>
                    If Paharganj's noise and grit isn't for you but you still
                    want central, budget-friendly Delhi, both{" "}
                    <Link href="/blog/karol-bagh-delhi-travel-guide">
                      Karol Bagh
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/connaught-place-delhi-travel-guide">
                      Connaught Place
                    </Link>{" "}
                    sit a short metro ride away with a calmer, more
                    mainstream hotel scene.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Paharganj</h2>
                  <p>
                    Decades of catering to foreign backpackers have given
                    Paharganj a food scene unlike anywhere else in Old or
                    New Delhi — genuinely good Indian thali and street food
                    alongside an unusually large number of cafés serving
                    banana pancakes, muesli, pasta, and other traveller
                    comfort food.
                  </p>
                  <ul>
                    <li>
                      <strong>Rooftop cafés:</strong> Paharganj has a
                      genuinely large concentration of rooftop cafés along
                      Main Bazaar — good for a slow breakfast, wifi, and
                      people-watching over the bazaar below, with menus
                      covering both Indian and Western comfort food.
                    </li>
                    <li>
                      <strong>Cheap thalis:</strong> Simple, filling
                      vegetarian and non-vegetarian thalis are widely
                      available at local dhabas just off the main strip,
                      usually cheaper and more authentic than the
                      tourist-facing cafés directly on Main Bazaar.
                    </li>
                    <li>
                      <strong>Street food stalls:</strong> Chaat, momos, and
                      quick snacks from stalls scattered through the lanes —
                      busy stalls with high turnover are generally the
                      safer bet for freshness.
                    </li>
                    <li>
                      <strong>International traveller menus:</strong> Pasta,
                      pancakes, Israeli and Middle Eastern dishes, and
                      "banana lassi" style menus reflect decades of demand
                      from the international backpacker crowd — a genuinely
                      easy place to eat familiar food if you need a break
                      from Indian cuisine.
                    </li>
                    <li>
                      <strong>Bottled or filtered water:</strong> Stick to
                      sealed bottled water or filtered water from your
                      guesthouse — tap water isn't safe to drink here, as
                      is standard advice across most of urban India.
                    </li>
                  </ul>
                </section>

                {/* ── Safety ────────────────────────────────────────────── */}
                <section id="safety-tips">
                  <h2>Safety & Street-Smarts in Paharganj</h2>
                  <p>
                    Paharganj has a real reputation to manage honestly, and
                    we'd rather give you genuinely useful practical advice
                    than either sanitise it or scare you off a neighbourhood
                    that millions of travellers have passed through safely.
                    Serious violent crime against tourists here is
                    uncommon. The far more common issues are touting,
                    overcharging, and low-level scams — a nuisance rather
                    than a danger, but worth knowing how to handle.
                  </p>
                  <ul>
                    <li>
                      <strong>The "your hotel is closed" scam:</strong> A
                      classic run near New Delhi Railway Station and
                      throughout Paharganj — a driver, tout, or "helpful"
                      stranger tells you your booked hotel has closed,
                      burnt down, or is full, and offers to take you
                      somewhere else that pays them commission. Ignore this
                      entirely and walk to your confirmed booking yourself.
                    </li>
                    <li>
                      <strong>Commission-driven "advice":</strong> Anyone
                      unprompted offering to help you book a hotel, tour, or
                      onward travel ticket is very likely working on
                      commission. It doesn't mean they're dangerous, just
                      that their recommendation isn't neutral — verify
                      independently.
                    </li>
                    <li>
                      <strong>Overcharging on autos and rickshaws:</strong>{" "}
                      Meters are inconsistently used; agree a fare before
                      getting in, or use an app-based auto/cab booking to
                      remove the negotiation entirely.
                    </li>
                    <li>
                      <strong>Drug touting at night:</strong> Occasional and
                      persistent touting for drugs happens along quieter
                      stretches of Main Bazaar after dark — a firm "no" and
                      continuing to walk is the standard, effective response.
                    </li>
                    <li>
                      <strong>Bag and pocket security:</strong> The crowded,
                      narrow lanes are prime pickpocketing territory —
                      carry valuables in a zipped, front-worn bag rather
                      than a back pocket or loose tote.
                    </li>
                    <li>
                      <strong>Solo travellers, especially women:</strong>{" "}
                      Choose guesthouses with 24-hour staffed reception and
                      good recent reviews, avoid walking the quieter side
                      lanes alone late at night, and use a pre-booked cab
                      rather than hailing one off the street after dark.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🛡️ Bottom line:</strong> Paharganj rewards
                    confidence and a bit of scepticism toward unsolicited
                    "help" far more than it punishes carelessness with
                    anything serious. Book ahead, know where you're going
                    before you arrive, and treat friendly strangers with
                    commission-shaped offers accordingly.
                  </div>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Your First Day in Delhi, Based in Paharganj</h2>
                  <p>
                    For many travellers, Paharganj is a one- or two-night
                    landing pad rather than a full trip base — here's a
                    realistic plan for making the most of a first day here
                    before moving on to the rest of Delhi.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Arrive & Settle In",
                        color: "bg-amber-700",
                        activities: [
                          "Walk in via New Delhi Station's Ajmeri Gate exit",
                          "Check into your pre-booked guesthouse",
                          "Breakfast at a Main Bazaar rooftop café",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Main Bazaar & Orientation",
                        color: "bg-forest-600",
                        activities: [
                          "Walk the length of Main Bazaar end to end",
                          "Pick up any last travel gear or basics",
                          "Get a local SIM card if you haven't already",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Venture Beyond Paharganj",
                        color: "bg-sky-600",
                        activities: [
                          "Metro from RK Ashram Marg or New Delhi station",
                          "Explore Connaught Place, a short ride away",
                          "Or head to Old Delhi for Jama Masjid & Chandni Chowk",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Back to Paharganj",
                        color: "bg-stone-600",
                        activities: [
                          "Dinner at a local dhaba or rooftop café",
                          "Meet fellow travellers in a guesthouse common area",
                          "Plan onward train or bus tickets for the next leg",
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
                    * Many travellers also use Paharganj as a base for wider
                    exploration — see our guides to{" "}
                    <Link href="/blog/kashmere-gate-delhi-travel-guide">
                      Kashmere Gate
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/karol-bagh-delhi-travel-guide">
                      Karol Bagh
                    </Link>{" "}
                    for other budget-friendly Delhi neighbourhoods nearby.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Paharganj is consistently one of the cheapest places to
                    base yourself in central Delhi — the numbers below are
                    approximate and will vary with season and how hard you
                    bargain.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Rock-Bottom", "Standard Budget", "Upper Budget"].map(
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
                            "₹400 (dorm bed)",
                            "₹1,200",
                            "₹3,000",
                          ],
                          ["Food/day", "₹350", "₹700", "₹1,500"],
                          [
                            "Local transport/day",
                            "₹100",
                            "₹250",
                            "₹600",
                          ],
                          ["Shopping/misc.", "₹0–₹300", "₹300–₹800", "₹800+"],
                          ["Daily total (approx.)", "₹850", "₹2,450", "₹5,900"],
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
                    * Rates fluctuate with season and negotiation — always
                    confirm current guesthouse rates and check reviews before
                    booking rather than relying on figures like these alone.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Paharganj</h2>
                  <ul>
                    <li>
                      <strong>Book your first night in advance:</strong>{" "}
                      Arriving without a confirmed booking is when the "your
                      hotel is closed" scam gets traction — a confirmed
                      reservation shuts that down immediately.
                    </li>
                    <li>
                      <strong>Use the Ajmeri Gate exit from the station:
                      </strong>{" "}
                      A more direct, less tout-heavy walk into Main Bazaar
                      than the Paharganj Gate side.
                    </li>
                    <li>
                      <strong>Bargain on Main Bazaar:</strong> Opening
                      prices for tourists are routinely inflated — a
                      confident counter-offer is normal and expected.
                    </li>
                    <li>
                      <strong>Keep valuables zipped and front-worn:</strong>{" "}
                      The crowded lanes make pickpocketing genuinely easier
                      than in more open parts of the city.
                    </li>
                    <li>
                      <strong>Use app-based cabs or agree fares upfront:
                      </strong>{" "}
                      Removes most of the overcharging risk on autos and
                      rickshaws.
                    </li>
                    <li>
                      <strong>Drink bottled or filtered water only:</strong>{" "}
                      Standard advice across urban India, worth repeating
                      for a neighbourhood built around street food.
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
                          "Book your first guesthouse night before arriving",
                          "Walk to your confirmed hotel yourself",
                          "Bargain confidently on Main Bazaar",
                          "Use app-based cabs or fixed-fare autos",
                          "Keep bags zipped and worn to the front",
                          "Check recent reviews before choosing a guesthouse",
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
                          "Believe unsolicited claims your hotel is closed",
                          "Follow a stranger's hotel or shop 'recommendation' blindly",
                          "Walk quiet side lanes alone late at night",
                          "Drink tap water anywhere in the neighbourhood",
                          "Accept the first price quoted without bargaining",
                          "Carry more cash or valuables than you need for the day",
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
                    <strong>🗺️ Explore more of Delhi:</strong> Once you've
                    settled in, our guides to{" "}
                    <Link href="/blog/connaught-place-delhi-travel-guide">
                      Connaught Place
                    </Link>
                    ,{" "}
                    <Link href="/blog/karol-bagh-delhi-travel-guide">
                      Karol Bagh
                    </Link>
                    , and{" "}
                    <Link href="/blog/kashmere-gate-delhi-travel-guide">
                      Kashmere Gate
                    </Link>{" "}
                    cover other central neighbourhoods worth exploring within
                    easy metro reach of Paharganj.
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
                {[
                  "Paharganj",
                  "Delhi",
                  "Main Bazaar",
                  "Backpacking",
                  "Budget Travel",
                  "New Delhi Railway Station",
                  "Solo Travel",
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

              <RelatedPostsGrid currentSlug="paharganj-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="paharganj-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
