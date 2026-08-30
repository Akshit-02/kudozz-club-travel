// src/app/blog/karol-bagh-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Karol Bagh Travel Guide: Shopping & Budget Hotels",
  description:
    "Karol Bagh travel guide — Ajmal Khan Road shopping, Gaffar Market electronics, budget hotels near the metro, street food, and honest tips for Delhi's busiest bazaar.",
  keywords:
    "Karol Bagh Delhi, Karol Bagh market, Karol Bagh shopping, Karol Bagh hotels, Ajmal Khan Road, Gaffar Market, Karol Bagh metro, Karol Bagh food, budget hotels Delhi, Delhi shopping market",
  openGraph: {
    title: "Karol Bagh Travel Guide: Shopping & Budget Hotels",
    description:
      "Ajmal Khan Road's pedestrian bazaar, Gaffar Market's electronics stalls, and a dense cluster of budget hotels near the metro — the complete Karol Bagh guide.",
    url: "https://club.kudozz.in/blog/karol-bagh-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Warm sandstone architecture at golden hour — used here to represent Karol Bagh's Delhi setting, not an actual photo of the neighbourhood",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Karol Bagh Travel Guide: Shopping & Budget Hotels",
    description:
      "Ajmal Khan Road's pedestrian bazaar, Gaffar Market's electronics stalls, and a dense cluster of budget hotels near the metro — the complete Karol Bagh guide.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/karol-bagh-delhi-travel-guide",
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
          headline: "Karol Bagh Travel Guide: Shopping & Budget Hotels",
          description:
            "Karol Bagh travel guide — Ajmal Khan Road shopping, Gaffar Market electronics, budget hotels near the metro, street food, and honest tips for Delhi's busiest bazaar.",
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
            "@id": "https://club.kudozz.in/blog/karol-bagh-delhi-travel-guide",
          },
          keywords:
            "Karol Bagh Delhi, Karol Bagh market, Karol Bagh shopping, Karol Bagh hotels, Ajmal Khan Road, Gaffar Market",
          about: {
            "@type": "Place",
            name: "Karol Bagh",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Karol Bagh",
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
                name: "Karol Bagh",
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
    q: "What is Karol Bagh famous for?",
    a: "Karol Bagh is one of Delhi's biggest commercial neighbourhoods, best known for the pedestrianised Ajmal Khan Road shopping strip (clothing, bridal wear, footwear), Gaffar Market's dense cluster of electronics stalls, and one of the largest concentrations of budget-to-mid-range hotels anywhere in the city — all within easy reach of the Karol Bagh Metro station.",
  },
  {
    q: "Is Karol Bagh good for shopping?",
    a: "Yes, particularly for clothing, footwear, and bridal shopping — Ajmal Khan Road is a genuinely popular destination for Delhiites, not just tourists, and prices are generally lower than in more polished markets like Connaught Place or Khan Market. It rewards a bit of patience and comparison shopping rather than buying at the first stall.",
  },
  {
    q: "Is Gaffar Market reliable for electronics?",
    a: "Gaffar Market has a genuine, long-standing reputation for electronics and imported gadgets at competitive prices, but it's also known for grey-market and occasionally counterfeit goods sold alongside legitimate stock. Inspect anything you buy carefully in front of the vendor — check that the box is sealed, the model matches what's advertised, and ask for a bill — before you hand over payment. If a deal looks too good to be true, treat that as a real warning sign here.",
  },
  {
    q: "Is Karol Bagh a good area to stay in Delhi?",
    a: "It's one of the most practical budget bases in the city — Karol Bagh Metro sits on the Blue Line with a fairly direct run to Connaught Place, and the Airport Express interchange at New Delhi Station is only a couple of stops away. The trade-off is that it's a busy, commercial, non-touristy neighbourhood rather than a scenic one, so it suits travellers prioritising value and connectivity over atmosphere.",
  },
  {
    q: "How do I get to Karol Bagh by metro?",
    a: "Karol Bagh has its own station — Karol Bagh Metro — on the Blue Line, which runs between Dwarka Sector 21 and Noida Electronic City / Vaishali. It's a handful of stops from Rajiv Chowk (Connaught Place) and connects onward to most of the rest of the network with one interchange.",
  },
  {
    q: "What is the best time to visit Karol Bagh?",
    a: "Weekday mornings and early afternoons are noticeably calmer than evenings and weekends, when Ajmal Khan Road gets genuinely packed with shoppers. Cooler months (October–March) also make the largely open-air, pedestrian shopping stretch far more comfortable than the peak summer heat.",
  },
  {
    q: "Is Karol Bagh safe for tourists, including solo travellers?",
    a: "Karol Bagh is a busy, heavily commercial, well-populated neighbourhood with a constant police and shopkeeper presence, and it doesn't have a particular reputation for being unsafe. As in any dense Indian market, the main practical concerns are pickpocketing in crowds and firm but standard bargaining — not personal safety in a broader sense. Usual city precautions apply.",
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
  { id: "introduction", title: "What Is Karol Bagh?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Karol Bagh", level: 2 },
  { id: "ajmal-khan-road", title: "Ajmal Khan Road", level: 2 },
  { id: "gaffar-market", title: "Gaffar Market", level: 2 },
  { id: "other-markets", title: "Other Nearby Markets", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "where-to-stay", title: "Why Stay in Karol Bagh", level: 2 },
  { id: "half-day-plan", title: "Half-Day Shopping Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KarolBaghGuidePage() {
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
              alt="Warm sandstone architecture at golden hour — used here to represent Karol Bagh's Delhi setting, not an actual photo of the neighbourhood"
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
                { label: "Karol Bagh", href: null },
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
                "Karol Bagh",
                "Delhi",
                "Shopping",
                "Budget Hotels",
                "Street Food",
                "Central Delhi",
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
              Karol Bagh Travel Guide: Shopping, Markets & Budget Hotels
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A pedestrianised bazaar, an electronics market with a
              reputation of its own, and one of the densest clusters of
              budget hotels in the capital — Karol Bagh is Central Delhi's
              working shopping district, not a monument stop.
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
                  text: "Karol Bagh, Central Delhi",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,400 words",
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
                  <h2>What Is Karol Bagh?</h2>
                  <p>
                    <strong>Karol Bagh</strong> is a bustling, purely
                    commercial-and-residential neighbourhood in Central{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi</Link> — not a
                    monument or a heritage quarter, but one of the city's
                    biggest markets and one of its largest clusters of
                    budget-to-mid-range hotels. It doesn't have a Red Fort or
                    a Jama Masjid of its own; what it has instead is a
                    genuinely enormous volume of daily commerce, and a
                    reputation among both domestic shoppers and
                    value-conscious travellers as one of the most useful
                    places in Delhi to get things done.
                  </p>
                  <p>
                    The neighbourhood's spine is <strong>Ajmal Khan
                    Road</strong>, a pedestrianised shopping street lined
                    with clothing, bridal wear, and footwear stores, running
                    roughly parallel to Arya Samaj Road. A short walk away
                    sits <strong>Gaffar Market</strong>, Delhi's best-known
                    electronics bazaar — famous, and occasionally infamous,
                    for cheap imported gadgets. Wrapped around both is a
                    dense grid of hotels, guesthouses, and lodges that has
                    made Karol Bagh one of the default budget bases for
                    travellers passing through the city.
                  </p>
                  <p>
                    This isn't a neighbourhood built for sightseeing — it's
                    built for shopping, eating, and sleeping cheaply and
                    conveniently near a metro station. That's precisely the
                    appeal, and this guide covers it on those terms: what to
                    buy where, what to eat, what to watch out for at Gaffar
                    Market specifically, and why it works so well as a place
                    to stay.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛍️</span> Karol Bagh at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Central Delhi",
                        },
                        {
                          icon: "🚇",
                          label: "Metro",
                          value: "Karol Bagh Station, Blue Line",
                        },
                        {
                          icon: "🛒",
                          label: "Known For",
                          value: "Clothing, footwear, electronics",
                        },
                        {
                          icon: "🏨",
                          label: "Stay Type",
                          value: "Dense budget & mid-range hotel cluster",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar, weekday mornings",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,000 – ₹4,500",
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
                  <h2>Best Time to Visit Karol Bagh</h2>
                  <p>
                    Karol Bagh is a year-round market, not a seasonal
                    destination, so timing here is more about comfort and
                    crowd levels than about whether things are open.
                  </p>
                  <ul>
                    <li>
                      <strong>October – March:</strong> Cooler, more
                      comfortable weather for walking Ajmal Khan Road's
                      largely open-air stretch, which gets genuinely
                      unpleasant to browse slowly in peak summer heat.
                    </li>
                    <li>
                      <strong>Weekday mornings and early afternoons:</strong>{" "}
                      Noticeably calmer than evenings, when the market fills
                      up with after-work and after-school crowds.
                    </li>
                    <li>
                      <strong>Weekends and festival season:</strong> Busiest
                      by far, especially in the run-up to Diwali and wedding
                      season, when the bridal-wear and clothing stretches of
                      Ajmal Khan Road get extremely dense.
                    </li>
                  </ul>
                  <blockquote>
                    <strong>Our pick:</strong> a weekday morning, roughly
                    10 AM–1 PM — shops are open, the street is walkable, and
                    you'll get more attentive service from vendors than
                    during the evening rush.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Karol Bagh</h2>
                  <p>
                    Karol Bagh's biggest practical advantage is how easy it
                    is to reach and to use as a base — it sits close to the
                    geographic centre of Delhi's metro network.
                  </p>
                  <ul>
                    <li>
                      <strong>Karol Bagh Metro Station (Blue Line):</strong>{" "}
                      The neighbourhood has its own dedicated station on the
                      Blue Line, which runs between Dwarka Sector 21 and
                      Noida Electronic City / Vaishali — a handful of stops
                      from Rajiv Chowk, the interchange for{" "}
                      <Link href="/blog/connaught-place-delhi-travel-guide">
                        Connaught Place
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>From the airport:</strong> The Airport Express
                      Line connects IGI Airport to New Delhi Railway
                      Station in around 20 minutes; from there, it's a short
                      onward metro ride or auto to Karol Bagh — genuinely one
                      of the more airport-convenient budget bases in the
                      city.
                    </li>
                    <li>
                      <strong>From New Delhi Railway Station:</strong> Around
                      2–3 km by road, and an easy auto-rickshaw or app-cab
                      ride, or a short metro connection via Rajiv Chowk.
                    </li>
                    <li>
                      <strong>From Paharganj and Chandni Chowk:</strong>{" "}
                      Both are reachable within 15–25 minutes by metro or
                      auto, making Karol Bagh a practical base for exploring{" "}
                      <Link href="/blog/paharganj-delhi-travel-guide">
                        Paharganj
                      </Link>{" "}
                      and{" "}
                      <Link href="/blog/chandni-chowk-delhi-travel-guide">
                        Chandni Chowk
                      </Link>{" "}
                      without staying in either.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Karol Bagh Metro has multiple
                    exit gates that surface at different points around the
                    market — check which gate is closest to your hotel or
                    the stretch of Ajmal Khan Road you want before
                    surfacing, since the walk between gates aboveground can
                    take longer than expected in a crowded market.
                  </div>
                </section>

                {/* ── Ajmal Khan Road ───────────────────────────────────── */}
                <section id="ajmal-khan-road">
                  <h2>Ajmal Khan Road: The Main Shopping Stretch</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Warm-toned architectural facade — a stand-in image, not an actual photo of Ajmal Khan Road"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Ajmal Khan Road</strong> is Karol Bagh's main
                    artery and its single best-known feature — a
                    pedestrianised stretch closed to vehicle traffic for
                    most of the day, lined end to end with clothing stores,
                    footwear shops, and bridal wear outlets. It's one of
                    Delhi's most genuinely popular shopping streets among
                    locals, not just a tourist stop, which shows in the
                    volume of foot traffic on any given evening.
                  </p>
                  <ul>
                    <li>
                      <strong>Clothing:</strong> Everything from everyday
                      casualwear to festive and formal outfits, at prices
                      generally lower than more polished markets like
                      Connaught Place or Khan Market.
                    </li>
                    <li>
                      <strong>Bridal and wedding wear:</strong> Karol Bagh
                      has a genuine reputation as a wedding-shopping
                      destination — lehengas, sarees, and groom's wear
                      across a wide range of budgets.
                    </li>
                    <li>
                      <strong>Footwear:</strong> A dense concentration of
                      shoe shops, from everyday sandals to formal and
                      occasion footwear, spanning several price tiers.
                    </li>
                    <li>
                      <strong>Bargaining:</strong> Expected at most
                      independent stalls, though fixed-price stores are
                      common too — check for a price tag before assuming a
                      shop negotiates.
                    </li>
                  </ul>
                  <p>
                    The street is at its liveliest in the evening, when
                    shop lights come on and the crowd thickens — atmospheric
                    if you enjoy dense markets, but worth avoiding if you
                    prefer to browse at a slower pace.
                  </p>
                </section>

                {/* ── Gaffar Market ─────────────────────────────────────── */}
                <section id="gaffar-market">
                  <h2>Gaffar Market: Electronics & a Necessary Caveat</h2>
                  <p>
                    <strong>Gaffar Market</strong> is Karol Bagh's other
                    headline attraction — a tightly packed indoor-outdoor
                    market known across Delhi for electronics, mobile
                    accessories, and imported gadgets, often at prices
                    noticeably lower than mainstream electronics retailers.
                    It's a genuinely useful spot for accessories, cables,
                    speakers, and small gadgets.
                  </p>
                  <p>
                    It's also honestly worth knowing that Gaffar Market has
                    a long-standing reputation for grey-market goods —
                    products imported outside official distribution
                    channels — and, less commonly, counterfeit items sold
                    alongside genuine stock. This isn't a reason to avoid
                    the market, but it is a reason to shop carefully:
                  </p>
                  <ul>
                    <li>
                      <strong>Inspect before you pay:</strong> Open the box
                      if possible, check that the model and specs match
                      what's advertised, and test the item on the spot if
                      the vendor allows it.
                    </li>
                    <li>
                      <strong>Ask for a proper bill:</strong> A vendor
                      unwilling to provide one is a signal to be more
                      cautious, particularly for anything with a warranty
                      claim attached.
                    </li>
                    <li>
                      <strong>Be skeptical of unusually low prices:</strong>{" "}
                      A price far below what you'd expect elsewhere is
                      often a sign of grey-market or lower-grade goods
                      rather than simply a good deal.
                    </li>
                    <li>
                      <strong>Stick to higher-footfall, established
                      stalls:</strong> For anything expensive, a shop that's
                      clearly been trading for years is a safer bet than an
                      unfamiliar stall.
                    </li>
                  </ul>
                  <div
                    className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Honest note:</strong> Treat Gaffar Market as a
                    good spot for cheap accessories and casual purchases,
                    and be more cautious with high-value electronics — check
                    thoroughly, buy from vendors who'll stand behind what
                    they sell, and don't feel pressured to decide on the
                    spot.
                  </div>
                </section>

                {/* ── Other Markets ─────────────────────────────────────── */}
                <section id="other-markets">
                  <h2>Other Nearby Markets</h2>
                  <p>
                    Beyond Ajmal Khan Road and Gaffar Market, Karol Bagh has
                    a handful of smaller, more specialised markets worth
                    knowing about.
                  </p>
                  <ul>
                    <li>
                      <strong>Regal Market:</strong> A smaller market
                      cluster within Karol Bagh, generally quieter than
                      Ajmal Khan Road, with a mix of clothing and general
                      goods stores.
                    </li>
                    <li>
                      <strong>Arya Samaj Road:</strong> Running roughly
                      parallel to Ajmal Khan Road, this stretch is known for
                      furniture, home goods, and a somewhat different retail
                      mix than the main pedestrian strip — worth a look if
                      you're after something other than clothing or
                      electronics.
                    </li>
                    <li>
                      <strong>Local wholesale and accessory lanes:</strong>{" "}
                      Karol Bagh's side lanes have smaller clusters
                      specialising in jewellery, bags, and accessories,
                      generally at lower prices than the main road but with
                      more variable quality.
                    </li>
                  </ul>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Karol Bagh</h2>
                  <p>
                    Karol Bagh's food scene runs on the same energy as its
                    shopping — old-school eateries, street stalls, and a
                    genuine mix of North Indian and Punjabi-style food that
                    locals travel across the city for, alongside plenty of
                    everyday options for a quick bite between shops.
                  </p>
                  <ul>
                    <li>
                      <strong>Roshan Di Kulfi:</strong> A long-running,
                      well-known Karol Bagh institution for kulfi — one of
                      the neighbourhood's most recognisable food names,
                      worth seeking out if you have a sweet tooth.
                    </li>
                    <li>
                      <strong>Street chaat stalls:</strong> Ajmal Khan Road
                      and the surrounding lanes have a steady scattering of
                      chaat and golgappa vendors, popular with shoppers
                      taking a break mid-browse.
                    </li>
                    <li>
                      <strong>Old-school Punjabi dhabas:</strong> Karol Bagh
                      has several long-standing, no-frills North Indian
                      eateries serving dal, sabzi, and tandoori staples —
                      reliable, filling, and generally good value.
                    </li>
                    <li>
                      <strong>Quick-bite chains and bakeries:</strong> For
                      travellers who'd rather not gamble on street food, the
                      main road has a fair spread of familiar chain outlets
                      and bakeries alongside the local spots.
                    </li>
                  </ul>
                  <p>
                    As with any dense street-food scene, go with stalls that
                    have visible turnover and a steady local crowd — it's
                    the simplest practical signal of freshness.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Why Karol Bagh Is a Popular Budget Hotel Base</h2>
                  <p>
                    Karol Bagh has one of the highest concentrations of
                    budget and mid-range hotels anywhere in Delhi, and the
                    reasons are mostly practical rather than aesthetic —
                    this isn't a scenic neighbourhood, but it's a genuinely
                    convenient one.
                  </p>
                  <ul>
                    <li>
                      <strong>Metro connectivity:</strong> A dedicated Blue
                      Line station puts most of the city within reach
                      without needing a cab for every trip.
                    </li>
                    <li>
                      <strong>Proximity to Connaught Place:</strong> A short
                      metro ride via Rajiv Chowk connects you to Delhi's
                      central business and dining district in minutes.
                    </li>
                    <li>
                      <strong>Airport access:</strong> A relatively short
                      hop to New Delhi Railway Station and the Airport
                      Express Line makes early-morning or late-night flights
                      more manageable than from most other budget areas.
                    </li>
                    <li>
                      <strong>Hotel density and price competition:</strong>{" "}
                      A genuinely large supply of hotels across a small
                      area keeps prices competitive, particularly outside
                      peak wedding and festival season.
                    </li>
                    <li>
                      <strong>Everyday conveniences:</strong> Pharmacies,
                      ATMs, and casual eateries are all within easy walking
                      distance of most hotels, given how commercially dense
                      the area is.
                    </li>
                  </ul>
                  <blockquote>
                    Karol Bagh suits travellers who prioritise value,
                    connectivity, and practicality over staying somewhere
                    scenic or quiet — if that's your priority list, it's
                    genuinely one of the more sensible bases in the city.
                  </blockquote>
                </section>

                {/* ── Half-Day Plan ─────────────────────────────────────── */}
                <section id="half-day-plan">
                  <h2>A Half-Day Shopping-and-Food Plan</h2>
                  <p>
                    Karol Bagh doesn't need a full day unless you're doing
                    serious wedding shopping — a focused half-day covers the
                    highlights comfortably.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "10:00 AM",
                        title: "Start on Ajmal Khan Road",
                        color: "bg-amber-700",
                        activities: [
                          "Browse clothing and footwear stretches while the street is calmer",
                          "Compare a few stores before committing to any purchase",
                          "Bargain at independent stalls; check tags at fixed-price stores",
                        ],
                      },
                      {
                        day: "12:00 PM",
                        title: "Break for Food",
                        color: "bg-forest-600",
                        activities: [
                          "Kulfi at Roshan Di Kulfi",
                          "Chaat from a busy, high-turnover street stall",
                          "Rest before the second leg of shopping",
                        ],
                      },
                      {
                        day: "1:00 PM",
                        title: "Gaffar Market",
                        color: "bg-sky-600",
                        activities: [
                          "Browse accessories, cables, and small gadgets",
                          "Inspect anything higher-value carefully before buying",
                          "Ask for a bill on any electronics purchase",
                        ],
                      },
                      {
                        day: "2:30 PM",
                        title: "Wind Down",
                        color: "bg-stone-600",
                        activities: [
                          "Optional detour to Arya Samaj Road or Regal Market",
                          "Metro onward to Connaught Place or back to your hotel",
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
                  <p>
                    Karol Bagh is genuinely one of the more affordable
                    places to base yourself in Delhi — most of your daily
                    spend here is discretionary, going toward whatever you
                    choose to shop for.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Higher-End"].map(
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
                            "₹2,500",
                            "₹5,500",
                          ],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          ["Local transport/day", "₹150", "₹400", "₹1,000"],
                          [
                            "Shopping (discretionary)",
                            "Varies widely",
                            "Varies widely",
                            "Varies widely",
                          ],
                          ["Daily total (excl. shopping)", "₹1,450", "₹3,800", "₹8,300"],
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
                    * Hotel rates rise noticeably during wedding season and
                    major festivals — book ahead if travelling in those
                    windows. Shopping spend varies too much by individual
                    plans to average meaningfully.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Karol Bagh</h2>
                  <ul>
                    <li>
                      <strong>Bargain respectfully, not aggressively:</strong>{" "}
                      A polite counter-offer and a willingness to walk away
                      gets better results than hard haggling — most
                      independent stall vendors expect some negotiation.
                    </li>
                    <li>
                      <strong>Check electronics thoroughly at Gaffar
                      Market:</strong> Open the box, test the item, and ask
                      for a bill before paying — especially for anything
                      above a small, low-risk purchase.
                    </li>
                    <li>
                      <strong>Go early or on weekdays for a calmer
                      visit:</strong> Evenings and weekends turn Ajmal Khan
                      Road into a genuinely dense crowd.
                    </li>
                    <li>
                      <strong>Keep bags secured in the crowd:</strong> As
                      with any packed Indian market, pickpocketing risk
                      rises with crowd density — keep valuables zipped and
                      close.
                    </li>
                    <li>
                      <strong>Compare a few shops before buying:</strong>{" "}
                      With this much retail density, the first price you're
                      quoted is rarely the best one available nearby.
                    </li>
                    <li>
                      <strong>Note your metro exit gate:</strong> Karol Bagh
                      Metro has multiple gates surfacing at different points
                      — check which one is closest to where you're headed.
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
                          "Bargain politely at independent stalls",
                          "Inspect electronics carefully at Gaffar Market",
                          "Ask for a bill on higher-value purchases",
                          "Visit on a weekday morning for a calmer market",
                          "Try Roshan Di Kulfi and busy street food stalls",
                          "Use the metro — it's genuinely the easiest way around",
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
                          "Buy expensive electronics without checking them first",
                          "Assume every low Gaffar Market price is a genuine deal",
                          "Expect a quiet, scenic experience — it's a working bazaar",
                          "Carry more cash or valuables than you need",
                          "Skip comparing prices across a few shops",
                          "Visit expecting monuments — this is a shopping trip",
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
                    <strong>🗺️ Extend the trip:</strong> Karol Bagh pairs
                    easily with a day exploring{" "}
                    <Link href="/blog/paharganj-delhi-travel-guide">
                      Paharganj
                    </Link>{" "}
                    or{" "}
                    <Link href="/blog/chandni-chowk-delhi-travel-guide">
                      Chandni Chowk
                    </Link>
                    , or an evening in{" "}
                    <Link href="/blog/connaught-place-delhi-travel-guide">
                      Connaught Place
                    </Link>{" "}
                    — all are a short metro ride away, making Karol Bagh a
                    practical base for a broader{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi itinerary</Link>.
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
                  "Karol Bagh",
                  "Delhi",
                  "Ajmal Khan Road",
                  "Gaffar Market",
                  "Shopping",
                  "Budget Hotels",
                  "Street Food",
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

              <RelatedPostsGrid currentSlug="karol-bagh-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="karol-bagh-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
