// src/app/blog/ranthambore-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ranthambore Safari Guide: Tigers & Fort",
  description:
    "Complete Ranthambore guide — tiger safaris against the backdrop of a 10th-century fort, the zone system, best time and zone for sightings, how to reach from Jaipur, and a full visit plan.",
  keywords:
    "Ranthambore travel guide, Ranthambore National Park, Ranthambore tiger safari, Ranthambore Fort, Sawai Madhopur, Ranthambore safari zones, best time Ranthambore, how to reach Ranthambore, Ranthambore booking",
  openGraph: {
    title: "Ranthambore Safari Guide: Tigers & Fort",
    description:
      "A former royal hunting ground where tigers now roam past a ruined 10th-century fort — the complete guide to Ranthambore National Park.",
    url: "https://club.kudozz.in/blog/ranthambore-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dense green forest landscape, evoking Ranthambore National Park's tiger habitat in Rajasthan",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranthambore Safari Guide: Tigers & Fort",
    description:
      "Tigers photographed against a 10th-century fort's ramparts — the complete guide to Ranthambore National Park.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ranthambore-travel-guide",
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
          headline: "Ranthambore Safari Guide: Tigers & Fort",
          description:
            "Complete Ranthambore guide — tiger safaris against the backdrop of a 10th-century fort, the zone system, best time and zone for sightings, how to reach from Jaipur, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/ranthambore-travel-guide",
          },
          keywords:
            "Ranthambore, tiger safari, Rajasthan, national park, Sawai Madhopur",
          about: {
            "@type": "Place",
            name: "Ranthambore National Park",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Rajasthan",
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
                name: "Rajasthan",
                item: "https://club.kudozz.in/blog/rajasthan-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Ranthambore",
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
    q: "What is the best time and zone for tiger sightings in Ranthambore?",
    a: "April to June generally sees the highest sighting odds, as the summer heat concentrates wildlife around the park's remaining water sources, despite temperatures often crossing 40°C. Zone allocation is partly luck-based — some zones have historically shown higher sighting rates, but this shifts as territories change, so a good local operator's current advice matters more than any fixed 'best zone' list.",
  },
  {
    q: "How far is Ranthambore from Jaipur?",
    a: "Roughly 180 km, about a 3-4 hour drive or train ride. Sawai Madhopur railway station serves the park directly and is well connected to Jaipur, Delhi, and Mumbai.",
  },
  {
    q: "How do I book a Ranthambore safari?",
    a: "Safaris are booked through the Rajasthan Forest Department's online portal or through your hotel/a local operator, generally well in advance — popular zones and peak-season dates can sell out weeks ahead. Bookings are tied to specific zones and time slots (morning or afternoon).",
  },
  {
    q: "Is Ranthambore Fort accessible during a safari?",
    a: "The fort stands within the park and is visible from several zones and safari routes, and can also be visited separately as a heritage site (it's technically open to the public outside safari hours in parts). Tigers are sometimes photographed near or against its walls, which is part of what makes Ranthambore visually distinct from other tiger reserves.",
  },
  {
    q: "How many safaris should I plan for a realistic chance of seeing a tiger?",
    a: "2-3 safaris across 2 days is a reasonable minimum for a realistic (though never guaranteed) chance. Sightings depend on season, zone, and luck — some visitors see a tiger on their first safari, others need several attempts.",
  },
  {
    q: "Is Ranthambore open year-round?",
    a: "No — the park closes during the monsoon, roughly July to September, and reopens in October. The main safari season runs October through June.",
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
  { id: "introduction", title: "Tigers & a Ruined Fort", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ranthambore", level: 2 },
  { id: "things-to-do", title: "Safaris, Zones & the Fort", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RanthamboreGuidePage() {
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
              src="/images/destinations/ziro/hero.jpg"
              alt="Dense green forest landscape, evoking Ranthambore National Park's tiger habitat in Rajasthan"
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
                { label: "Rajasthan", href: "/blog/rajasthan-travel-guide" },
                { label: "Ranthambore", href: null },
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
              {["Ranthambore", "Tiger Safari", "Rajasthan", "National Park"].map(
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
              Ranthambore: Tiger Safari & Fort Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A former royal hunting ground where wild tigers now stalk past
              the ramparts of a 10th-century fort — one of India's most
              visually distinctive wildlife reserves.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Sawai Madhopur, Rajasthan",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>Tigers & a Ruined Fort</h2>
                  <p>
                    <strong>Ranthambore National Park</strong>, roughly 180
                    km from Jaipur, is one of India&apos;s premier tiger
                    reserves — and a former hunting ground of the Jaipur
                    maharajas before it became a protected park. What sets it
                    apart from almost every other Indian tiger reserve is a
                    dramatic ruined 10th-century fort standing within the
                    park itself.
                  </p>
                  <p>
                    Tigers photographed against Ranthambore Fort&apos;s
                    ancient gates and ramparts have become some of the most
                    iconic images in Indian wildlife photography — a
                    combination of heritage and wilderness that few other
                    parks can offer.
                  </p>
                  <p>
                    Beyond tigers, the park&apos;s lakes and forest support
                    leopards, sloth bears, crocodiles, and significant
                    birdlife, making it a rewarding destination even on a
                    safari without a tiger sighting.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐅</span> Ranthambore at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Sawai Madhopur, Rajasthan",
                        },
                        {
                          icon: "🚉",
                          label: "Nearest Rail",
                          value: "Sawai Madhopur",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Jun" },
                        {
                          icon: "🏰",
                          label: "Known For",
                          value: "Tigers & 10th-c. Fort",
                        },
                        {
                          icon: "🚫",
                          label: "Closed",
                          value: "Jul – Sep (monsoon)",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Jaipur (~180 km)",
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
                  <h2>Best Time to Visit Ranthambore</h2>
                  <p>
                    Park closure dates and sighting odds both shape when to
                    plan a Ranthambore trip.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best sighting odds — our pick",
                        text: "Summer heat concentrates wildlife around the park's shrinking water sources, genuinely improving sighting odds — despite temperatures often crossing 40°C.",
                      },
                      {
                        season: "Oct – Feb",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Cooler, comfortable safaris",
                        text: "Pleasant daytime temperatures make the safari experience itself more comfortable, though sighting odds are somewhat lower than peak summer.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Park closed",
                        text: "Ranthambore closes for the monsoon — no safaris run during this window, so plan around it entirely.",
                      },
                      {
                        season: "Mar & Jun",
                        emoji: "🌡️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Shoulder months",
                        text: "A reasonable middle ground between comfort and sighting odds, before the extreme summer heat of April-May fully sets in or just as it eases.",
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
                    <strong>Our pick:</strong> April to June, if you can
                    handle the heat — water scarcity concentrates wildlife
                    and genuinely improves your odds of a tiger sighting.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ranthambore</h2>
                  <ul>
                    <li>
                      <strong>By rail to Sawai Madhopur:</strong> The
                      railway station that serves the park directly, well
                      connected to Jaipur, Delhi, and Mumbai — the most
                      convenient option for most travelers.
                    </li>
                    <li>
                      <strong>By road from Jaipur:</strong> Roughly 180 km, a
                      3-4 hour drive.
                    </li>
                    <li>
                      <strong>By road from Agra/Delhi:</strong> A longer
                      drive, often combined with a wider Rajasthan or Golden
                      Triangle itinerary.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book your safaris before you
                    travel — popular zones and peak-season dates can sell out
                    weeks in advance through the Forest Department&apos;s
                    booking portal.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Safaris, Zones & the Fort</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Forest habitat within Ranthambore National Park, Rajasthan"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Tiger Safaris & the Zone System</h3>
                  <p>
                    Ranthambore is divided into multiple numbered safari
                    zones, each booked separately for a morning or afternoon
                    slot. Some zones have historically shown higher
                    tiger-sighting rates than others, though this shifts as
                    tiger territories change over time — a good local
                    operator&apos;s current advice is worth more than any
                    fixed &quot;best zone&quot; list you&apos;ll find online.
                  </p>
                  <h3>Ranthambore Fort</h3>
                  <p>
                    The ruined 10th-century fort stands within the park
                    itself, visible from several zones and safari routes,
                    and can also be visited separately as a heritage site.
                    Tigers photographed near its ancient gates and walls have
                    become some of the most recognizable images in Indian
                    wildlife photography.
                  </p>
                  <h3>Beyond Tigers</h3>
                  <p>
                    Padam Talao and the park&apos;s other lakes support
                    leopards, sloth bears, crocodiles, and rich birdlife —
                    genuinely rewarding even on a safari without a tiger
                    sighting.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Ranthambore</h2>
                  <p>
                    Accommodation is concentrated near Sawai Madhopur and the
                    park&apos;s main entrance, ranging from simple budget
                    lodges to high-end wildlife resorts.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,500–₹3,000/night",
                        picks: [
                          "Budget guesthouses, Sawai Madhopur",
                          "Simple lodges near the park gate",
                          "Homestays in town",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹4,000–₹9,000/night",
                        picks: [
                          "Mid-range wildlife resorts",
                          "Boutique jungle lodges",
                          "Hotels near Ranthambore Road",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🐆",
                        range: "₹15,000–₹40,000+/night",
                        picks: [
                          "Premium wildlife resorts",
                          "Heritage-style luxury camps",
                          "All-inclusive safari packages",
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

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & First Safari",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Afternoon safari, first zone",
                          "Evening at leisure near the resort",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Two More Safaris",
                        color: "bg-sky-600",
                        activities: [
                          "Early-morning safari, second zone",
                          "Rest through the heat of the day",
                          "Afternoon safari or Ranthambore Fort visit",
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
                    * 2-3 safaris is a reasonable minimum for a realistic —
                    though never guaranteed — chance of a tiger sighting.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Ranthambore</h2>
                  <ul>
                    <li>
                      <strong>Resort dining:</strong> Most wildlife resorts
                      and lodges serve full meals to guests, often the most
                      convenient option given the limited standalone dining
                      scene near the park.
                    </li>
                    <li>
                      <strong>Sawai Madhopur town:</strong> A range of simple
                      local restaurants and dhabas for Rajasthani thalis and
                      everyday meals.
                    </li>
                    <li>
                      <strong>Packed breakfasts:</strong> Many stays offer an
                      early packed breakfast for morning safaris, given the
                      pre-dawn departure times.
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
                          [
                            "Accommodation/night",
                            "₹2,000",
                            "₹6,000",
                            "₹25,000",
                          ],
                          [
                            "Safari (per person, per drive)",
                            "₹1,500",
                            "₹2,500",
                            "₹4,000",
                          ],
                          ["Food/day", "₹600", "₹1,500", "₹3,000"],
                          [
                            "Park/permit fees (per safari)",
                            "₹500",
                            "₹500",
                            "₹500",
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
                    * Safari costs vary by vehicle type (shared canter vs.
                    private gypsy) and zone — figures above are indicative
                    per-safari costs.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Ranthambore</h2>
                  <ul>
                    <li>
                      <strong>Book safaris well in advance:</strong> Popular
                      zones and peak-season slots sell out weeks ahead
                      through the Forest Department&apos;s portal.
                    </li>
                    <li>
                      <strong>Morning safaris are generally better:</strong>{" "}
                      Cooler temperatures tend to mean more wildlife activity,
                      though afternoon safaris can also produce sightings.
                    </li>
                    <li>
                      <strong>Dress in neutral colors:</strong> Avoid bright
                      clothing on safari, and stay quiet to avoid disturbing
                      wildlife.
                    </li>
                    <li>
                      <strong>Set realistic expectations:</strong> Tiger
                      sightings are never guaranteed — go in with an
                      appreciation for the wider ecosystem, not just the
                      tiger.
                    </li>
                    <li>
                      <strong>Carry water and sun protection:</strong>{" "}
                      Especially for the hotter summer months when sighting
                      odds are best.
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
                          "Book safaris well ahead of your trip",
                          "Plan 2-3 safaris for a realistic sighting chance",
                          "Dress in neutral, muted colors",
                          "Carry water, sun protection and binoculars",
                          "Stay quiet and patient during safaris",
                          "Consider April-June for the best sighting odds",
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
                          "Expect a guaranteed tiger sighting",
                          "Book safaris at the last minute in peak season",
                          "Wear bright colors or make loud noise on safari",
                          "Travel during the Jul-Sep monsoon closure",
                          "Skip sun protection if visiting Apr-Jun",
                          "Ignore your naturalist/guide's instructions",
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
                    <strong>🗺️ Extend the trip:</strong> Ranthambore pairs
                    naturally with a wider Rajasthan circuit — see our full{" "}
                    <Link href="/blog/rajasthan-travel-guide">
                      Rajasthan travel guide
                    </Link>{" "}
                    for Jaipur and beyond.
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
                {["Ranthambore", "Tiger Safari", "Rajasthan", "National Park"].map(
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

              <RelatedPostsGrid currentSlug="ranthambore-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ranthambore-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
