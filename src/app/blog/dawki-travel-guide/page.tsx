// src/app/blog/dawki-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Dawki Travel Guide: Crystal Clear River & Tips",
  description:
    "Complete Dawki guide — the crystal-clear Umngot River, the famous 'floating boat' photos, the colonial suspension bridge, border-trade context, how to reach from Shillong, and a full visit plan.",
  keywords:
    "Dawki travel guide, Umngot river, Dawki crystal clear water, Dawki boat ride, Bangladesh border Meghalaya, how to reach Dawki, Shnongpdeng, Dawki best time to visit",
  openGraph: {
    title: "Dawki Travel Guide: Crystal Clear River & Tips",
    description:
      "Water so clear that boats appear to float in mid-air — one of India's most photographed rivers, right on the Bangladesh border.",
    url: "https://club.kudozz.in/blog/dawki-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/alleppey.jpg",
        width: 1200,
        height: 630,
        alt: "Clear calm water with a boat, evoking Dawki's famous crystal-clear Umngot River",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dawki Travel Guide: Crystal Clear River & Tips",
    description:
      "Water so clear that boats appear to float in mid-air — the complete guide to Dawki and the Umngot River.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/dawki-travel-guide",
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
          headline: "Dawki Travel Guide: Crystal Clear River & Tips",
          description:
            "Complete Dawki guide — the crystal-clear Umngot River, the famous 'floating boat' photos, the colonial suspension bridge, border-trade context, how to reach from Shillong, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
          datePublished: "2026-09-05",
          dateModified: "2026-09-05",
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
            "@id": "https://club.kudozz.in/blog/dawki-travel-guide",
          },
          keywords: "Dawki, Umngot River, Meghalaya, Bangladesh border",
          about: {
            "@type": "Place",
            name: "Dawki",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Meghalaya",
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
                name: "Meghalaya",
                item: "https://club.kudozz.in/blog/meghalaya-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Dawki",
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
    q: "What is the best time for the clearest water at Dawki?",
    a: "November to February is when the Umngot River is at its clearest. The river can turn muddy and much less transparent during and shortly after monsoon, so visiting outside this window risks disappointment.",
  },
  {
    q: "How far is Dawki from Shillong?",
    a: "Roughly 2.5–3 hours by road, making it a manageable day trip, though many travelers prefer an overnight to fully enjoy the river.",
  },
  {
    q: "Is Dawki a day trip or worth staying overnight?",
    a: "Both work — many visitors do it as a day trip from Shillong, but staying overnight at nearby Shnongpdeng's riverside camps lets you enjoy the water beyond a quick boat ride.",
  },
  {
    q: "How does Dawki connect to Shnongpdeng?",
    a: "Shnongpdeng sits a short distance upstream on the same Umngot River and is the main hub for river camping, kayaking, and scuba diving — many visitors combine the two or base themselves at one to visit the other.",
  },
  {
    q: "Is the water really that clear year-round?",
    a: "No — the famous crystal-clear, 'floating boat' clarity is largely a November–February phenomenon. Outside that window, especially post-monsoon, the water is noticeably murkier.",
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
  { id: "introduction", title: "Water You Can See Through", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dawki", level: 2 },
  { id: "things-to-do", title: "The River, the Bridge & the Border", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DawkiGuidePage() {
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
              src="/images/destinations/kerala/alleppey.jpg"
              alt="Clear calm water with a boat, evoking Dawki's famous crystal-clear Umngot River"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

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
                { label: "Meghalaya", href: "/blog/meghalaya-travel-guide" },
                { label: "Dawki", href: null },
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
              {["Dawki", "Umngot River", "Meghalaya", "Bangladesh Border"].map(
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
              Dawki Travel Guide: Crystal Clear River & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Water so transparent that boats appear to float in mid-air —
              one of India's most photographed rivers, right on the
              Bangladesh border.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "9 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "West Jaintia Hills, Meghalaya",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,150 words",
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
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>Water You Can See Through</h2>
                  <p>
                    <strong>Dawki</strong>, on the{" "}
                    <strong>Umngot River</strong> near the Bangladesh
                    border, is famous for having some of the clearest water
                    in India — so transparent that boats on the river
                    appear to float in mid-air in photographs, an iconic
                    image that has made Dawki one of Meghalaya's most
                    photographed destinations.
                  </p>
                  <p>
                    A colonial-era suspension bridge crosses the river near
                    the town, and Dawki also functions as a genuine border
                    trade point with Bangladesh, giving it a practical,
                    lived-in character beyond its photogenic river.
                  </p>
                  <p>
                    A short distance upstream is{" "}
                    <strong>Shnongpdeng</strong>, the main hub for river
                    camping, kayaking, and scuba diving in these same
                    waters — many visitors combine the two or base
                    themselves at one to visit the other.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>💧</span> Dawki at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Location", value: "West Jaintia Hills" },
                        {
                          icon: "🚗",
                          label: "From Shillong",
                          value: "~2.5–3 hr",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        {
                          icon: "💦",
                          label: "Known For",
                          value: "Crystal-Clear Water",
                        },
                        {
                          icon: "🌉",
                          label: "Landmark",
                          value: "Colonial Suspension Bridge",
                        },
                        {
                          icon: "🎯",
                          label: "Nearby",
                          value: "Shnongpdeng River Camps",
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

                <section id="best-time">
                  <h2>Best Time to Visit Dawki</h2>
                  <p>
                    Water clarity is the whole point of a Dawki visit, so
                    timing here matters more than almost anywhere else in
                    Meghalaya.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The river is at its clearest, delivering the famous 'floating boat' effect and the most rewarding photos.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Still decent",
                        text: "Water clarity is generally good, though can vary depending on early pre-monsoon showers.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — murky water",
                        text: "Heavy rain turns the river muddy and far less transparent — not the season for the famous clear-water photos.",
                      },
                      {
                        season: "Oct",
                        emoji: "🍂",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Transitional",
                        text: "Clarity is still recovering from monsoon — November onward is the more reliable choice.",
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
                    visiting outside this window risks disappointment with
                    murkier water than the photos promise.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Dawki</h2>
                  <ul>
                    <li>
                      <strong>From Shillong:</strong> Roughly 2.5–3 hours
                      by road — cross-link{" "}
                      <Link href="/blog/shillong-travel-guide">
                        Shillong
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Shared taxis:</strong> Available from
                      Shillong's taxi stands, or book a private car for
                      more flexibility.
                    </li>
                    <li>
                      <strong>Via Shnongpdeng:</strong> If staying
                      overnight at the river camps, transport is often
                      arranged directly with your camp.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book boat rides through
                    official ghats or your accommodation rather than
                    informal touts — pricing is more transparent and
                    consistent.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>The River, the Bridge & the Border</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Calm clear river water near Dawki, Meghalaya"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Boat Rides on the Umngot</h3>
                  <p>
                    The core Dawki experience — a slow boat ride over
                    astonishingly clear water, with the riverbed visible
                    metres below the surface.
                  </p>
                  <h3>The Suspension Bridge</h3>
                  <p>
                    A colonial-era structure crossing the river, offering
                    good vantage points for photos of the water below.
                  </p>
                  <h3>The Bangladesh Border</h3>
                  <p>
                    Dawki functions as a genuine trade point with
                    Bangladesh — an interesting, low-key reminder of the
                    town's practical role beyond tourism.
                  </p>
                  <h3>Shnongpdeng</h3>
                  <p>
                    A short distance upstream,{" "}
                    <Link href="/blog/shnongpdeng-travel-guide">
                      Shnongpdeng
                    </Link>{" "}
                    is where river camping, kayaking, and scuba diving
                    happen in these same crystal-clear waters.
                  </p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Dawki</h2>
                  <p>
                    Most visitors day-trip from Shillong, but staying at
                    Shnongpdeng's riverside camps is the better choice for
                    a fuller river experience.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,600/night",
                        picks: [
                          "Basic riverside tents at Shnongpdeng",
                          "Guesthouses in Dawki town",
                          "Shared camping arrangements",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "⛺",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Riverside camps with meals included",
                          "Small guesthouses",
                          "Adventure-camp packages",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌊",
                        range: "₹4,500–₹8,500+/night",
                        picks: [
                          "Premium riverside camps",
                          "Full-board adventure packages",
                          "Private guided experiences",
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

                <section id="visit-plan">
                  <h2>Suggested Dawki Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Option 1",
                        title: "Day Trip from Shillong",
                        color: "bg-amber-700",
                        activities: [
                          "Drive to Dawki (~3 hrs)",
                          "Boat ride on the Umngot River",
                          "Visit the suspension bridge, drive back",
                        ],
                      },
                      {
                        day: "Option 2",
                        title: "Overnight at Shnongpdeng",
                        color: "bg-sky-600",
                        activities: [
                          "Drive to Shnongpdeng, check into a river camp",
                          "Kayaking or a boat ride on the clear water",
                          "Relaxed second morning before heading back",
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
                    * Combine with{" "}
                    <Link href="/blog/shnongpdeng-travel-guide">
                      Shnongpdeng
                    </Link>{" "}
                    if you want river activities beyond a quick boat ride.
                  </p>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Dawki</h2>
                  <ul>
                    <li>
                      <strong>Camp-cooked meals:</strong> Most riverside
                      camps at Shnongpdeng include home-style meals for
                      guests.
                    </li>
                    <li>
                      <strong>Local fish preparations:</strong> Given the
                      river setting, freshwater fish dishes are a
                      reasonable local specialty.
                    </li>
                    <li>
                      <strong>Simple stalls near the ghats:</strong> Tea
                      and snacks for a quick bite between boat rides.
                    </li>
                  </ul>
                </section>

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
                          ["Accommodation/night", "₹900", "₹2,500", "₹6,000"],
                          ["Car hire from Shillong (round trip)", "₹4,000", "₹6,000", "₹9,000"],
                          ["Food/day", "₹450", "₹1,000", "₹2,200"],
                          ["Boat ride (per session)", "₹500", "₹500", "₹1,200"],
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
                    * Figures are per person, per day (except car hire, a
                    round-trip figure best split across a group).
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Tips for Visiting Dawki</h2>
                  <ul>
                    <li>
                      <strong>Time your trip for November–February:</strong>{" "}
                      This is the single most important factor for seeing
                      the famous clear water.
                    </li>
                    <li>
                      <strong>Book boats through official ghats:</strong>{" "}
                      Pricing is fairer and more consistent than with
                      informal touts.
                    </li>
                    <li>
                      <strong>Combine with Shnongpdeng:</strong> For
                      kayaking or scuba diving beyond a basic boat ride.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card acceptance is
                      inconsistent this close to the border.
                    </li>
                  </ul>

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
                          "Visit Nov–Feb for the clearest water",
                          "Book boats at an official ghat",
                          "Carry cash for the whole trip",
                          "Combine with Shnongpdeng for more activities",
                          "Bring a waterproof case for your phone/camera",
                          "Wear a life jacket on boat rides",
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
                          "Visit during monsoon expecting clear water",
                          "Rely only on informal touts for boat rides",
                          "Assume card payments work everywhere",
                          "Skip a life jacket on the boat",
                          "Overlook Shnongpdeng if you want more than photos",
                          "Litter near the riverbanks",
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
                    <strong>🗺️ Extend the trip:</strong> Dawki pairs
                    naturally with{" "}
                    <Link href="/blog/shnongpdeng-travel-guide">
                      Shnongpdeng
                    </Link>{" "}
                    for river camping, or head back via{" "}
                    <Link href="/blog/shillong-travel-guide">Shillong</Link>{" "}
                    and onward to{" "}
                    <Link href="/blog/cherrapunji-travel-guide">
                      Cherrapunji
                    </Link>
                    . See our full{" "}
                    <Link href="/blog/meghalaya-travel-guide">
                      Meghalaya travel guide
                    </Link>{" "}
                    for the wider region.
                  </div>
                </section>

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

              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Dawki",
                  "Umngot River",
                  "Meghalaya",
                  "Bangladesh Border",
                  "Shnongpdeng",
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

              <RelatedPostsGrid currentSlug="dawki-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="dawki-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
