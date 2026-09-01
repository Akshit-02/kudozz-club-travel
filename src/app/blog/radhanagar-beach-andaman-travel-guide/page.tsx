// src/app/blog/radhanagar-beach-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Radhanagar Beach Travel Guide: Timings, Sunset & Tips",
  description:
    "Complete Radhanagar Beach (Beach No. 7) guide — Havelock Island's famous white-sand beach once named one of Asia's best. Timings, sunset tips, rules, and how to reach it.",
  keywords:
    "Radhanagar Beach, Beach No. 7 Havelock, Radhanagar Beach timings, Radhanagar Beach sunset, Havelock Island beach, Time magazine best beach Asia, Radhanagar Beach how to reach, Swaraj Dweep beach",
  openGraph: {
    title: "Radhanagar Beach Travel Guide: Timings, Sunset & Tips",
    description:
      "Powder-white sand and shallow turquoise water on Havelock Island — once named one of Asia's best beaches by Time magazine, and still living up to it.",
    url: "https://club.kudozz.in/blog/radhanagar-beach-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/havelock.jpg",
        width: 1200,
        height: 630,
        alt: "White sand and turquoise water at Radhanagar Beach, Havelock Island, Andaman",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Radhanagar Beach Travel Guide: Timings, Sunset & Tips",
    description:
      "Havelock Island's famous white-sand beach — once named one of Asia's best. The complete visit guide.",
    images: ["/images/destinations/andaman/havelock.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/radhanagar-beach-andaman-travel-guide",
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
          headline: "Radhanagar Beach Travel Guide: Timings, Sunset & Tips",
          description:
            "Complete Radhanagar Beach (Beach No. 7) guide — Havelock Island's famous white-sand beach once named one of Asia's best. Timings, sunset tips, rules, and how to reach it.",
          image:
            "https://club.kudozz.in/images/destinations/andaman/havelock.jpg",
          datePublished: "2026-09-01",
          dateModified: "2026-09-01",
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
            "@id": "https://club.kudozz.in/blog/radhanagar-beach-andaman-travel-guide",
          },
          keywords:
            "Radhanagar Beach, Beach No. 7, Havelock Island, Swaraj Dweep, Time magazine best beach",
          about: {
            "@type": "Place",
            name: "Radhanagar Beach",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Andaman and Nicobar Islands",
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
                name: "Andaman Islands",
                item: "https://club.kudozz.in/blog/andaman-islands-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Radhanagar Beach",
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
    q: "Why is Radhanagar Beach also called Beach No. 7?",
    a: "Beach No. 7 is its official numbered designation from when the Andaman administration catalogued Havelock's beaches by number rather than name. Radhanagar is simply the more commonly used name today, but you'll see both used on signage and in bookings.",
  },
  {
    q: "Is Radhanagar Beach really one of Asia's best beaches?",
    a: "It was named one of Asia's best beaches by Time magazine back in 2004, and that reputation has stuck ever since — it's still the single most photographed and visited beach in the Andamans, for good reason: powder-white sand, shallow turquoise water, and a dense green tree line.",
  },
  {
    q: "Can you swim at Radhanagar Beach?",
    a: "Yes — the water is shallow and generally calm, making it one of the safer swimming beaches in the Andamans. Lifeguards are typically on duty during daylight hours, though it's still worth checking conditions before swimming out too far.",
  },
  {
    q: "Are water sports allowed at Radhanagar Beach?",
    a: "No — motorised water sports are restricted here to protect the beach's ecology. Radhanagar is primarily a swimming, sunbathing, and photography beach; if you want jet-skiing, banana boats, or similar activities, Elephant Beach nearby is the better option.",
  },
  {
    q: "How do I get to Radhanagar Beach from Havelock's jetty?",
    a: "It's about 30-40 minutes by road — auto-rickshaws, taxis, and rented scooters all cover the route. There's no boat access; Radhanagar is reached entirely by road once you're on Havelock Island.",
  },
  {
    q: "What time should I visit Radhanagar Beach for sunset?",
    a: "Arrive at least 45 minutes before sunset to find a good spot and enjoy the golden light as it fades. Sunset is Radhanagar's most popular time of day, so expect more visitors in the last hour before dusk than during the rest of the day.",
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
  { id: "introduction", title: "Havelock's Famous Beach", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "the-beach", title: "What Makes Radhanagar Special", level: 2 },
  { id: "sunset", title: "Sunset at Radhanagar", level: 2 },
  { id: "rules", title: "Rules & What's Not Allowed", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat Nearby", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RadhanagarBeachGuidePage() {
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
              src="/images/destinations/andaman/havelock.jpg"
              alt="White sand and turquoise water at Radhanagar Beach, Havelock Island, Andaman"
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
                { label: "Andaman Islands", href: "/blog/andaman-islands-travel-guide" },
                { label: "Radhanagar Beach", href: null },
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
                "Radhanagar Beach",
                "Beach No. 7",
                "Havelock Island",
                "Sunset",
                "Andaman",
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
              Radhanagar Beach: Timings, Sunset & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Powder-white sand, shallow turquoise water, and a reputation
              as one of Asia's best beaches — Radhanagar (Beach No. 7) on
              Havelock Island still lives up to the hype.
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
                  text: "Havelock Island (Swaraj Dweep)",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
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
                  <h2>Havelock's Famous Beach</h2>
                  <p>
                    <strong>Radhanagar Beach</strong>, officially catalogued
                    as <strong>Beach No. 7</strong>, is the single most
                    photographed stretch of sand on{" "}
                    <Link href="/blog/havelock-island-andaman-travel-guide">
                      Havelock Island (Swaraj Dweep)
                    </Link>{" "}
                    — and arguably in the entire{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Andaman Islands
                    </Link>
                    . Time magazine named it one of Asia's best beaches back
                    in 2004, a reputation that has stuck for two decades and
                    still drives a large share of the islands' tourism.
                  </p>
                  <p>
                    What sets it apart isn't a single dramatic feature but
                    the combination: powder-white sand, shallow turquoise
                    water that stays calm for long stretches, and a dense
                    green tree line framing the whole beach. It's a beach
                    built for slow days rather than adrenaline —
                    motorised water sports aren't allowed here, unlike at
                    Elephant Beach elsewhere on Havelock.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏖️</span> Radhanagar Beach at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Havelock Island (Swaraj Dweep)",
                        },
                        {
                          icon: "🚗",
                          label: "From Jetty",
                          value: "~30-40 min by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – May" },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Free",
                        },
                        {
                          icon: "🏄",
                          label: "Water Sports",
                          value: "Not permitted",
                        },
                        {
                          icon: "🌇",
                          label: "Best Feature",
                          value: "Sunset views",
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
                  <h2>Best Time to Visit Radhanagar Beach</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Calm seas, clear water, and comfortable temperatures for a full day on the beach without the intense midday heat of summer.",
                      },
                      {
                        season: "Morning (8-10 AM)",
                        emoji: "🌅",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Quietest hours",
                        text: "Fewer visitors than midday or sunset, calmer water, and softer light for photography.",
                      },
                      {
                        season: "Sunset (last hour)",
                        emoji: "🌇",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Most popular window",
                        text: "The beach's signature moment — golden light over the water, and understandably the busiest time of day.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Rougher seas and frequent rain make this a less rewarding time to visit; ferries to Havelock can also be disrupted.",
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
                    <strong>Our pick:</strong> arrive in the late morning to
                    enjoy a quieter stretch of beach, then stay through to
                    sunset — the golden hour here is worth the wait.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Radhanagar Beach</h2>
                  <p>
                    Unlike some Andaman beaches, Radhanagar is reached
                    entirely by road, not by boat.
                  </p>
                  <ul>
                    <li>
                      <strong>From Havelock's main jetty:</strong> Roughly
                      30-40 minutes by auto-rickshaw, taxi, or rented
                      scooter along the island's single main road.
                    </li>
                    <li>
                      <strong>Rented scooter:</strong> The most flexible
                      option if you want to time your visit for a quiet
                      morning or a lingering sunset without arranging return
                      transport.
                    </li>
                    <li>
                      <strong>Shared taxis/autos:</strong> Widely available
                      near the market and most guesthouses for a fixed fare.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're taking an auto or
                    taxi for sunset, arrange the return pickup time before
                    you're dropped off — transport options thin out quickly
                    after dark.
                  </div>
                </section>

                {/* ── The Beach ──────────────────────────────────────────── */}
                <section id="the-beach">
                  <h2>What Makes Radhanagar Special</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/havelock.jpg"
                      alt="Radhanagar Beach shoreline, Havelock Island"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Radhanagar's reputation rests on a combination rather
                    than any single feature: fine, powder-white sand that
                    stays cool underfoot even at midday; shallow, calm
                    turquoise water that's genuinely swimmable rather than
                    just photogenic; and a dense green tree line that backs
                    the beach and offers natural shade along its length.
                  </p>
                  <p>
                    The beach curves gently for roughly a kilometre, wide
                    enough that even on busier days it rarely feels
                    crowded — a contrast to some of India's more built-up
                    beach destinations.
                  </p>
                </section>

                {/* ── Sunset ─────────────────────────────────────────────── */}
                <section id="sunset">
                  <h2>Sunset at Radhanagar</h2>
                  <p>
                    Sunset is Radhanagar's signature moment, and the reason
                    many visitors plan their whole day around an evening
                    visit. The beach faces a direction that catches the
                    setting sun cleanly over the water, without landmass
                    blocking the horizon.
                  </p>
                  <ul>
                    <li>
                      <strong>Arrive early:</strong> Get there at least 45
                      minutes before sunset to claim a good spot before the
                      evening crowd builds.
                    </li>
                    <li>
                      <strong>Bring a light layer:</strong> It cools down
                      quickly once the sun is down, especially with a sea
                      breeze.
                    </li>
                    <li>
                      <strong>Plan your return transport:</strong> Autos and
                      taxis become scarce shortly after dark — arrange
                      pickup in advance.
                    </li>
                  </ul>
                </section>

                {/* ── Rules ──────────────────────────────────────────────── */}
                <section id="rules">
                  <h2>Rules & What's Not Allowed</h2>
                  <p>
                    Radhanagar's ecology is actively protected, which shapes
                    what you can and can't do here.
                  </p>
                  <ul>
                    <li>
                      <strong>No motorised water sports:</strong> Jet-skiing,
                      banana boats, and similar activities aren't permitted —
                      head to Elephant Beach if that's what you're after.
                    </li>
                    <li>
                      <strong>No plastic litter:</strong> Carry out what you
                      bring in; enforcement has tightened in recent years as
                      the beach's popularity has grown.
                    </li>
                    <li>
                      <strong>Lifeguard hours apply:</strong> Swimming is
                      generally supervised during daylight hours only —
                      avoid swimming after dark or well outside the marked
                      safe zone.
                    </li>
                    <li>
                      <strong>No permanent structures on the sand:</strong>{" "}
                      Vendors and facilities are kept to a designated area
                      near the entrance, keeping most of the beach
                      undeveloped.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Half-Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Late Morning",
                        title: "Arrival & Swimming",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive by auto/scooter from the jetty area",
                          "Swim or wade in the shallow, calm water",
                          "Walk the length of the beach",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Relax in the Shade",
                        color: "bg-sky-600",
                        activities: [
                          "Rest under the tree line during peak heat",
                          "Light snacks from stalls near the entrance",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Sunset",
                        color: "bg-forest-600",
                        activities: [
                          "Claim a spot at least 45 minutes before sunset",
                          "Watch the sun set over the water",
                          "Pre-arranged transport back to your stay",
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

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Nearby</h2>
                  <p>
                    Radhanagar itself has a few basic snack stalls near the
                    entrance, but for a proper meal, head back toward{" "}
                    <Link href="/blog/havelock-island-andaman-travel-guide">
                      Havelock's main market
                    </Link>
                    .
                  </p>
                  <ul>
                    <li>
                      <strong>Beach entrance stalls:</strong> Coconut water,
                      light snacks, and cold drinks — enough for a short
                      break but not a full meal.
                    </li>
                    <li>
                      <strong>Havelock market seafood shacks:</strong> A
                      short drive away, with fresh grilled fish and prawns
                      at reasonable prices.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Radhanagar Beach itself is free to visit — your main
                    costs are transport and any food you buy.
                  </p>
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
                          ["Beach entry", "Free", "Free", "Free"],
                          [
                            "Transport (round trip)",
                            "₹200 (shared auto)",
                            "₹500 (taxi)",
                            "₹1,000 (private cab)",
                          ],
                          ["Snacks/drinks", "₹150", "₹400", "₹800"],
                          ["Total (approx.)", "₹350", "₹900", "₹1,800"],
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
                    * Figures are per person, per visit, and exclude your
                    accommodation cost on Havelock Island itself.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Radhanagar Beach</h2>
                  <ul>
                    <li>
                      <strong>Arrange return transport in advance:</strong>{" "}
                      Especially for sunset visits, since autos and taxis
                      thin out after dark.
                    </li>
                    <li>
                      <strong>Bring reef-safe sunscreen and reapply:</strong>{" "}
                      There's little shade directly on the open sand.
                    </li>
                    <li>
                      <strong>Don't expect water sports here:</strong> Head
                      to Elephant Beach if jet-skiing or banana boats are
                      what you're after.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> The few stalls near the
                      entrance don't reliably accept cards.
                    </li>
                    <li>
                      <strong>Combine with a full Havelock day:</strong> See
                      our{" "}
                      <Link href="/blog/havelock-island-andaman-travel-guide">
                        Havelock Island guide
                      </Link>{" "}
                      for how to plan Radhanagar alongside Elephant Beach and
                      diving.
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
                          "Arrive early for sunset to get a good spot",
                          "Swim in the calm, shallow water",
                          "Carry cash for snacks and transport",
                          "Reapply reef-safe sunscreen regularly",
                          "Arrange return transport before you're dropped off",
                          "Pair the visit with Havelock's other beaches",
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
                          "Expect jet-skis or banana boats here",
                          "Leave plastic litter on the sand",
                          "Swim outside lifeguard hours",
                          "Assume transport is easy to find after dark",
                          "Skip shade breaks during peak midday heat",
                          "Rely on cards at the beach-side stalls",
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
                    <strong>🗺️ Extend the trip:</strong> After Radhanagar,
                    most visitors continue exploring{" "}
                    <Link href="/blog/havelock-island-andaman-travel-guide">
                      Havelock Island
                    </Link>{" "}
                    or ferry onward to the quieter{" "}
                    <Link href="/blog/neil-island-andaman-travel-guide">
                      Neil Island (Shaheed Dweep)
                    </Link>
                    .
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
                  "Radhanagar Beach",
                  "Beach No. 7",
                  "Havelock Island",
                  "Swaraj Dweep",
                  "Sunset Point",
                  "Andaman",
                  "Best Beaches India",
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

              <RelatedPostsGrid currentSlug="radhanagar-beach-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="radhanagar-beach-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
