// src/app/blog/golconda-fort-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Golconda Fort Guide: History, Sound Show & Tips",
  description:
    "Complete Golconda Fort guide — Qutb Shahi history, the famous clap-and-echo acoustics, the evening sound-and-light show, the nearby Qutb Shahi Tombs, and a full visit plan.",
  keywords:
    "Golconda Fort travel guide, Golconda Fort history, Golconda sound and light show, Qutb Shahi Tombs, Golconda diamonds, Hyderabad fort, Golconda Fort timings, how to reach Golconda Fort",
  openGraph: {
    title: "Golconda Fort Guide: History, Sound Show & Tips",
    description:
      "A hilltop citadel built for acoustics, once the centre of the world's diamond trade — the complete Golconda Fort guide.",
    url: "https://club.kudozz.in/blog/golconda-fort-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Massive hilltop fort ramparts at golden hour, evoking Hyderabad's Golconda Fort",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Golconda Fort Guide: History, Sound Show & Tips",
    description:
      "A hilltop citadel built for acoustics, once the centre of the world's diamond trade — the complete Golconda Fort guide.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/golconda-fort-travel-guide",
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
          headline: "Golconda Fort Guide: History, Sound Show & Tips",
          description:
            "Complete Golconda Fort guide — Qutb Shahi history, the famous clap-and-echo acoustics, the evening sound-and-light show, the nearby Qutb Shahi Tombs, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
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
            "@id": "https://club.kudozz.in/blog/golconda-fort-travel-guide",
          },
          keywords:
            "Golconda Fort, Hyderabad, Telangana, Qutb Shahi Tombs, sound and light show",
          about: {
            "@type": "Place",
            name: "Golconda Fort",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Telangana",
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
                name: "Telangana",
                item: "https://club.kudozz.in/blog/telangana-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Golconda Fort",
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
    q: "How much time do I need at Golconda Fort?",
    a: "Two to three hours covers the main fort walk and viewpoints comfortably; add another hour if you're staying for the evening sound-and-light show or combining it with the nearby Qutb Shahi Tombs.",
  },
  {
    q: "Is the sound-and-light show worth it?",
    a: "Yes — it narrates the fort's history against the backdrop of the illuminated ramparts after dark, and is genuinely one of the better heritage sound-and-light shows in India. Show timings vary by season, so check current timings before planning your evening.",
  },
  {
    q: "How do I reach Golconda Fort from the city?",
    a: "It's roughly 11 km from central Hyderabad — a straightforward 20-30 minute auto, cab, or ride-hailing trip depending on traffic.",
  },
  {
    q: "What is the best time of day to visit?",
    a: "Late afternoon works well — cooler temperatures for the climb, good light for photos, and a natural transition into the evening sound-and-light show without a second trip.",
  },
  {
    q: "Can I combine Golconda Fort with the Qutb Shahi Tombs?",
    a: "Yes, and it's a natural pairing — the tombs of the Qutb Shahi rulers are a short distance from the fort and make a fitting complement to the fort's history.",
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
  { id: "introduction", title: "A Citadel Built for Acoustics", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Golconda Fort", level: 2 },
  { id: "things-to-do", title: "The Fort, the Clap & the Show", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat Nearby", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GolcondaFortGuidePage() {
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
              alt="Massive hilltop fort ramparts at golden hour, evoking Hyderabad's Golconda Fort"
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
                { label: "Telangana", href: "/blog/telangana-travel-guide" },
                { label: "Golconda Fort", href: null },
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
                "Golconda Fort",
                "Hyderabad",
                "Telangana",
                "Heritage",
                "Qutb Shahi",
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
              Golconda Fort: History, Sound Show & Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A hilltop citadel engineered so a single hand clap at the
              entrance could be heard a kilometre away — once the beating
              heart of the world's diamond trade.
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
                  text: "Golconda, Hyderabad",
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
                  <h2>A Citadel Built for Acoustics</h2>
                  <p>
                    <strong>Golconda Fort</strong> stands on a granite hill
                    roughly 11 km from central{" "}
                    <Link href="/blog/hyderabad-travel-guide">Hyderabad</Link>.
                    It began as a mud fort under the Kakatiya dynasty and was
                    later massively expanded and fortified in granite by the{" "}
                    <strong>Qutb Shahi dynasty</strong>, who ruled from
                    Golconda before founding Hyderabad itself in 1591.
                  </p>
                  <p>
                    The fort is famous for its acoustic engineering — a hand
                    clap at the <strong>Fateh Darwaza</strong>, the main
                    entrance, is said to be audible at the{" "}
                    <strong>Bala Hissar</strong> pavilion roughly a kilometre
                    away and considerably higher up, historically used as a
                    warning system for the citadel above. Popular tradition
                    also holds that some of the world's most famous diamonds
                    — including stones associated with the Koh-i-Noor and the
                    Hope Diamond — passed through Golconda's markets during
                    its centuries as a centre of the diamond trade.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Golconda Fort at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "~11 km from Hyderabad",
                        },
                        {
                          icon: "🏛️",
                          label: "Built By",
                          value: "Kakatiya, expanded by Qutb Shahi",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🔊",
                          label: "Known For",
                          value: "Clap-and-echo acoustics",
                        },
                        {
                          icon: "🌙",
                          label: "Evening",
                          value: "Sound & light show",
                        },
                        {
                          icon: "⏱️",
                          label: "Time Needed",
                          value: "2–3 hours",
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
                  <h2>Best Time to Visit Golconda Fort</h2>
                  <p>
                    The fort's extensive climbing and the evening show both
                    make timing genuinely important here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions (15–30°C) make the extensive climbing and uneven stone paths far more comfortable.",
                      },
                      {
                        season: "Late Afternoon",
                        emoji: "🌇",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best time of day",
                        text: "Cooler light for the climb and photos, flowing naturally into the evening sound-and-light show without a second trip.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid midday",
                        text: "Deccan summer heat makes the largely shadeless climb genuinely difficult around midday in this window.",
                      },
                      {
                        season: "Monsoon (Jun–Sep)",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Humid, occasional rain",
                        text: "Stone paths can get slippery after rain — sturdy footwear matters even more during this season.",
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
                    <strong>Our pick:</strong> a late-afternoon arrival
                    between October and February — cool enough for a
                    comfortable climb, with the evening sound-and-light show
                    to follow.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Golconda Fort</h2>
                  <ul>
                    <li>
                      <strong>From central Hyderabad:</strong> Roughly 11 km,
                      a straightforward 20-30 minute auto, cab, or
                      ride-hailing trip depending on traffic.
                    </li>
                    <li>
                      <strong>Combine with Charminar:</strong> Both sights
                      pair naturally into one day — Charminar and the Old
                      City by morning, Golconda by late afternoon and
                      evening.
                    </li>
                    <li>
                      <strong>Qutb Shahi Tombs:</strong> A short distance
                      from the fort, easily combined in the same trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Check current sound-and-light
                    show timings before you go — they vary by season and are
                    typically held only in the evening.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Fort, the Clap & the Show</h2>
                  <h3>The Acoustic Clap</h3>
                  <p>
                    Stand at the Fateh Darwaza, the fort's main gate, and
                    clap — the sound is engineered to carry up to the Bala
                    Hissar pavilion at the highest point of the fort,
                    historically used as an early-warning signal. Guides at
                    the entrance will often demonstrate this for visitors.
                  </p>
                  <h3>The Climb to Bala Hissar</h3>
                  <p>
                    The main climb winds through multiple gateways and
                    fortified levels up to the Bala Hissar pavilion, with
                    sweeping views over the fort complex and the city beyond
                    — genuinely rewarding but involving extensive stairs and
                    uneven stone underfoot.
                  </p>
                  <h3>Sound-and-Light Show</h3>
                  <p>
                    Held in the evenings, the show narrates Golconda's
                    history against the illuminated ramparts — one of the
                    better heritage sound-and-light shows in India, and worth
                    timing your visit around.
                  </p>
                  <h3>Qutb Shahi Tombs</h3>
                  <p>
                    A short distance from the fort, these are the mausoleums
                    of the Qutb Shahi rulers — a fitting, quieter complement
                    to the fort's more dramatic history.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Golconda Fort</h2>
                  <p>
                    Most visitors stay elsewhere in Hyderabad and visit
                    Golconda as a half or full day trip — see our full{" "}
                    <Link href="/blog/hyderabad-travel-guide">
                      Hyderabad travel guide
                    </Link>{" "}
                    for accommodation options across the city.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Half Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Late Afternoon",
                        title: "Fort Walk",
                        color: "bg-amber-700",
                        activities: [
                          "Enter via Fateh Darwaza, try the acoustic clap",
                          "Climb to Bala Hissar pavilion",
                          "Explore the fort's gateways and viewpoints",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Show & Tombs",
                        color: "bg-purple-600",
                        activities: [
                          "Sound-and-light show at dusk",
                          "Optional: Qutb Shahi Tombs nearby",
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
                    * Pairs naturally with{" "}
                    <Link href="/blog/charminar-travel-guide">Charminar</Link>{" "}
                    earlier in the day for a full Old City heritage circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat Nearby</h2>
                  <ul>
                    <li>
                      <strong>Stalls near the entrance:</strong> Simple snack
                      and tea stalls cluster around the fort's main entrance,
                      useful before or after the climb.
                    </li>
                    <li>
                      <strong>Old City, en route:</strong> If combining with
                      Charminar, the Old City's biryani and kebab houses make
                      for a natural lunch stop between the two sights.
                    </li>
                    <li>
                      <strong>Banjara Hills restaurants:</strong> For a more
                      substantial meal after the evening show, the Banjara
                      Hills restaurant belt is a short drive away.
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
                          ["Entry fee", "₹25", "₹25", "₹25"],
                          ["Sound & light show ticket", "₹100", "₹100", "₹100"],
                          ["Camera fee", "₹25", "₹25", "₹25"],
                          ["Cab from central Hyderabad (round trip)", "₹500", "₹800", "₹1,500"],
                          ["Guide (optional)", "₹300", "₹500", "₹800"],
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
                    * Figures are per person, except cab fare which is a round
                    trip figure best split across a group.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Golconda Fort</h2>
                  <ul>
                    <li>
                      <strong>Wear proper walking shoes:</strong> The climb
                      involves extensive stairs and uneven stone paths —
                      sandals or flip-flops make this genuinely difficult.
                    </li>
                    <li>
                      <strong>Carry water:</strong> There's limited shade
                      and few shops once you're inside the fort proper.
                    </li>
                    <li>
                      <strong>Go in the late afternoon:</strong> Cooler
                      weather for the climb, flowing straight into the
                      evening show.
                    </li>
                    <li>
                      <strong>Hire a guide or audio guide:</strong> The fort's
                      layered history is much easier to appreciate with some
                      narration rather than exploring blind.
                    </li>
                    <li>
                      <strong>Check show timings in advance:</strong> The
                      sound-and-light show schedule varies by season.
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
                          "Wear sturdy, comfortable walking shoes",
                          "Try the acoustic clap at Fateh Darwaza",
                          "Time your visit for late afternoon into evening",
                          "Check sound-and-light show timings ahead",
                          "Hire a guide for the fuller history",
                          "Combine with the Qutb Shahi Tombs nearby",
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
                          "Attempt the climb in sandals or flip-flops",
                          "Visit at midday in peak summer",
                          "Skip carrying water — shade and shops are limited",
                          "Rush the fort walk — it's larger than it first appears",
                          "Assume the show runs at a fixed year-round time",
                          "Forget sun protection on open ramparts",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Golconda Fort
                    with{" "}
                    <Link href="/blog/charminar-travel-guide">Charminar</Link>{" "}
                    for a full Old City heritage day, or see our complete{" "}
                    <Link href="/blog/hyderabad-travel-guide">
                      Hyderabad travel guide
                    </Link>{" "}
                    for the wider city.
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
                  "Golconda Fort",
                  "Hyderabad",
                  "Telangana",
                  "Heritage",
                  "Qutb Shahi",
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

              <RelatedPostsGrid currentSlug="golconda-fort-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="golconda-fort-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
