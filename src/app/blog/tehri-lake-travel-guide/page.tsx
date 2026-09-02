// src/app/blog/tehri-lake-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tehri Lake Travel Guide: Water Sports & Tips",
  description:
    "Complete Tehri Lake travel guide — jet skiing, kayaking and cable-skiing at Koti, houseboats, the Tehri Lake Festival, how to reach, where to stay, and a full visit plan.",
  keywords:
    "Tehri Lake, Tehri Dam, New Tehri, Tehri Lake water sports, cable skiing Koti Colony, Tehri Lake Festival, houseboat Tehri Lake, how to reach Tehri Lake, Chamba to Tehri Lake, Bhagirathi river reservoir, Uttarakhand water sports",
  openGraph: {
    title: "Tehri Lake Travel Guide: Water Sports & Tips",
    description:
      "A vast reservoir on the Bhagirathi behind one of the world's tallest dams — jet skiing, kayaking, cable-skiing at Koti, and houseboats on Uttarakhand's biggest water-sports destination.",
    url: "https://club.kudozz.in/blog/tehri-lake-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Tehri Lake reservoir surrounded by forested Garhwal hills, Uttarakhand",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tehri Lake Travel Guide: Water Sports & Tips",
    description:
      "Jet skiing, kayaking, cable-skiing and houseboats on the Bhagirathi's giant reservoir — the complete Tehri Lake guide.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/tehri-lake-travel-guide",
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
          headline: "Tehri Lake Travel Guide: Water Sports & Tips",
          description:
            "Complete Tehri Lake travel guide — jet skiing, kayaking and cable-skiing at Koti, houseboats, the Tehri Lake Festival, how to reach, where to stay, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
          datePublished: "2026-09-02",
          dateModified: "2026-09-02",
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
            "@id": "https://club.kudozz.in/blog/tehri-lake-travel-guide",
          },
          keywords:
            "Tehri Lake, Tehri Dam, New Tehri, water sports, cable skiing, Bhagirathi river, Uttarakhand",
          about: {
            "@type": "Place",
            name: "Tehri Lake",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttarakhand",
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
                name: "Uttarakhand",
                item: "https://club.kudozz.in/blog/uttarakhand-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Tehri Lake",
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
    q: "What happened to the old Tehri town?",
    a: "The original Tehri town was submerged when the Tehri Dam was completed and the reservoir began filling in the mid-2000s. Its residents were rehoused in New Tehri, a planned town built on higher ground overlooking the lake, which now serves as the region's main administrative and market hub.",
  },
  {
    q: "How do I reach Tehri Lake for water sports?",
    a: "Most visitors head to Koti Colony or the Chamba-side access points, both reachable by road from Rishikesh (roughly 75-90 km) or Dehradun. Jolly Grant Airport in Dehradun is the nearest airport, and Rishikesh is the nearest major rail head.",
  },
  {
    q: "What is cable-skiing at Tehri Lake?",
    a: "Koti Colony is home to India's first commercial cable-ski setup — a fixed overhead cable system that tows water-skiers and wakeboarders around a loop without needing a boat. It's a fairly unique attraction in the country and one of the reasons Tehri Lake has become a dedicated water-sports destination.",
  },
  {
    q: "Is Tehri Lake safe for swimming?",
    a: "Casual open swimming isn't generally encouraged given the reservoir's depth, submerged structures from the old town, and variable water levels. Stick to designated water-sports operators who provide life jackets and trained instructors rather than swimming unsupervised.",
  },
  {
    q: "When is the Tehri Lake Festival held?",
    a: "The Tehri Lake Festival is typically held in winter (around January-February), featuring water sports demonstrations, boat races, live music, and adventure activities on and around the lake. Exact dates vary by year, so check current listings before planning a trip around it.",
  },
  {
    q: "Can I stay on a houseboat at Tehri Lake?",
    a: "Yes, a small number of operators run houseboat stays on the lake, offering an overnight-on-water experience that's still fairly novel for this part of Uttarakhand. Availability is limited compared to standard hotels, so it's worth booking a few weeks ahead in peak season.",
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
  { id: "introduction", title: "A Reservoir Behind a Giant Dam", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tehri Lake", level: 2 },
  { id: "things-to-do", title: "Water Sports & Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TehriLakeGuidePage() {
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
              src="/images/destinations/jammu-kashmir/dal.jpg"
              alt="Tehri Lake reservoir surrounded by forested Garhwal hills, Uttarakhand"
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
                { label: "Uttarakhand", href: "/blog/uttarakhand-travel-guide" },
                { label: "Tehri Lake", href: null },
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
                "Tehri Lake",
                "Tehri Dam",
                "Water Sports",
                "New Tehri",
                "Adventure",
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
              Tehri Lake: Water Sports, Houseboats & a Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A vast reservoir on the Bhagirathi behind one of the world's
              tallest dams — jet skiing, kayaking, India's first commercial
              cable-ski setup, and a growing houseboat scene.
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
                  text: "Tehri Garhwal, Uttarakhand",
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
                  <h2>A Reservoir Behind a Giant Dam</h2>
                  <p>
                    <strong>Tehri Lake</strong> is the vast reservoir formed
                    by the Tehri Dam on the Bhagirathi river, one of the
                    tallest dams in the world at over 260 metres. When the
                    reservoir began filling in the mid-2000s, it submerged
                    the historic town of Tehri entirely — its residents were
                    resettled in a purpose-built town, New Tehri, on higher
                    ground overlooking the water that now covers their old
                    home.
                  </p>
                  <p>
                    What could have been simply an engineering footnote has
                    become one of{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand
                    </Link>
                    's most distinctive adventure destinations. The lake's
                    still, open water — a rarity in a state defined by
                    rushing Himalayan rivers — has drawn a fast-growing
                    water-sports scene: jet skiing, kayaking, banana boat
                    rides, and, at Koti Colony, India's first commercial
                    cable-skiing setup, an overhead cable system that tows
                    skiers and wakeboarders without needing a boat.
                  </p>
                  <p>
                    A small but growing houseboat scene adds an overnight
                    option that's still fairly novel for this part of the
                    Himalayas, and the annual Tehri Lake Festival brings
                    boat races, live music, and adventure demonstrations to
                    the water each winter.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🚤</span> Tehri Lake at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Tehri Garhwal, Uttarakhand",
                        },
                        {
                          icon: "🏗️",
                          label: "Formed By",
                          value: "Tehri Dam, on the Bhagirathi",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Sep – Jun" },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Jet skiing, cable-skiing, kayaking",
                        },
                        {
                          icon: "🎪",
                          label: "Signature Event",
                          value: "Tehri Lake Festival (winter)",
                        },
                        {
                          icon: "🏘️",
                          label: "Nearby Town",
                          value: "New Tehri",
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
                  <h2>Best Time to Visit Tehri Lake</h2>
                  <p>
                    Water levels and comfort both shift through the year —
                    timing matters more here than at most Uttarakhand
                    destinations if water sports are the goal.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Post-monsoon water levels are typically at their fullest, skies are clear, and temperatures are pleasant for a full day on the water.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "🎪",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Festival season",
                        text: "Cool, clear winter days — and usually the window for the Tehri Lake Festival. Water sports continue, though mornings can be chilly.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Hot at lower elevation",
                        text: "Good for water sports early in the day, but the reservoir sits at a lower elevation than surrounding hill towns and can get genuinely hot by afternoon.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain, unpredictable water release, and safety concerns generally pause water-sports operations across the lake.",
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
                    <strong>Our pick:</strong> September to February —
                    reliably fuller water, clear skies, and comfortable
                    temperatures for a full day of water sports.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Tehri Lake</h2>
                  <p>
                    Tehri Lake sits within a comfortable day-trip or overnight
                    distance of both Dehradun and{" "}
                    <Link href="/blog/rishikesh-adventure-travel-guide">
                      Rishikesh
                    </Link>
                    , making it an easy add-on to a Garhwal itinerary.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> Jolly Grant Airport in
                      Dehradun is the nearest, roughly 75-90 km away
                      depending on which part of the lake you're heading to.
                    </li>
                    <li>
                      <strong>By rail:</strong> Rishikesh is the nearest
                      major railway station, with good onward road
                      connectivity to the lake's main activity hubs.
                    </li>
                    <li>
                      <strong>By road:</strong> The lake is accessed via
                      routes through Chamba or Narendra Nagar; Koti Colony
                      and the Chamba-side ghats are the main water-sports
                      bases, while New Tehri serves as the region's town
                      centre.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Decide which activity base
                    you want — Koti Colony for cable-skiing, or the
                    Chamba/New Tehri side for jet skiing and houseboats —
                    before booking a stay, since the lake's shoreline is long
                    and driving between access points takes real time.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Water Sports & Things to Do</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Water sports activity on Tehri Lake, Uttarakhand"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Jet Skiing, Kayaking & Banana Boat Rides</h3>
                  <p>
                    Multiple operators along the Chamba-side ghats and near
                    New Tehri run jet ski rentals, kayaking sessions, and
                    banana boat rides on the open water, generally with life
                    jackets and basic safety briefings included.
                  </p>
                  <h3>Cable-Skiing at Koti Colony</h3>
                  <p>
                    Koti Colony hosts India's first commercial cable-ski
                    setup — an overhead cable system that pulls
                    water-skiers and wakeboarders around a fixed loop
                    without a motorboat. It's a genuinely unusual attraction
                    for this part of the Himalayas and worth building a
                    visit around if you're keen to try it.
                  </p>
                  <h3>Houseboat Stays</h3>
                  <p>
                    A small number of operators run overnight houseboat
                    stays on the lake — a quiet, still-novel way to
                    experience Tehri after the day-trippers head home.
                    Availability is limited, so book ahead in peak months.
                  </p>
                  <h3>Tehri Lake Festival</h3>
                  <p>
                    Usually held in winter, the festival brings boat races,
                    live music, food stalls, and adventure demonstrations to
                    the lakeside — check current-year dates before planning
                    a trip specifically around it.
                  </p>
                  <h3>New Tehri & Scenic Drives</h3>
                  <p>
                    New Tehri offers sweeping views down over the reservoir
                    from its hillside streets, and the roads that wind around
                    the lake's shoreline make for a scenic, unhurried drive
                    even without stopping for any single activity.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Tehri Lake</h2>
                  <p>
                    Stay options cluster around Koti Colony (for
                    cable-skiing), the Chamba/New Tehri side (for jet skiing
                    and houseboats), or New Tehri town itself for a more
                    standard hotel base.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,800/night",
                        picks: [
                          "Simple guesthouses in New Tehri",
                          "Basic lodges near activity hubs",
                          "GMVN-run accommodation",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,500–₹7,000/night",
                        picks: [
                          "Lakeview resorts near Koti Colony",
                          "Cottages on the Chamba side",
                          "Adventure-camp style stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "⛵",
                        range: "₹9,000–₹20,000/night",
                        picks: [
                          "Premium houseboat stays",
                          "Upscale lakeside resorts",
                          "Private hillside villas above the water",
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
                        title: "Arrival & Water Sports",
                        color: "bg-amber-700",
                        activities: [
                          "Drive in from Rishikesh or Dehradun, check in",
                          "Afternoon jet skiing, kayaking or a banana boat ride",
                          "Evening at the lakeside for sunset",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Cable-Skiing & New Tehri",
                        color: "bg-sky-600",
                        activities: [
                          "Morning session at Koti Colony's cable-ski setup",
                          "Late morning scenic drive around the lake",
                          "Afternoon stop in New Tehri before departure",
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
                    * Many travellers combine Tehri Lake with a stop in{" "}
                    <Link href="/blog/dhanaulti-travel-guide">Dhanaulti</Link>{" "}
                    or continue on toward{" "}
                    <Link href="/blog/mussoorie-travel-guide">Mussoorie</Link>{" "}
                    for a cooler hill-station change of pace.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Tehri Lake</h2>
                  <ul>
                    <li>
                      <strong>Lakeside food stalls:</strong> Simple snacks
                      and hot chai near the main activity ghats, useful
                      between water-sports sessions.
                    </li>
                    <li>
                      <strong>New Tehri market eateries:</strong> Standard
                      North Indian thalis and quick meals in the town's main
                      commercial area.
                    </li>
                    <li>
                      <strong>Resort and houseboat dining:</strong> Most
                      mid-range and luxury stays serve meals on-site, often
                      the most convenient option if you're based right on
                      the water.
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
                          ["Accommodation/night", "₹1,800", "₹5,000", "₹14,000"],
                          ["Jet ski (15-20 min)", "₹800", "₹1,000", "₹1,200"],
                          ["Cable-skiing session", "₹500", "₹700", "₹900"],
                          ["Food/day", "₹600", "₹1,500", "₹3,000"],
                          ["Local transport/day", "₹500", "₹1,000", "₹2,000"],
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
                    * Figures are per person, per day, in INR. Water-sports
                    activities are priced per session, not daily.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Tehri Lake</h2>
                  <ul>
                    <li>
                      <strong>Pick your activity base first:</strong> Koti
                      Colony and the Chamba/New Tehri side are on opposite
                      parts of a large lake — decide what you want to do
                      before booking a stay.
                    </li>
                    <li>
                      <strong>Avoid monsoon months:</strong> Most water-sports
                      operators pause between July and August due to safety
                      concerns and unpredictable water levels.
                    </li>
                    <li>
                      <strong>Book houseboats ahead:</strong> Availability is
                      limited compared to standard hotels — reserve at least
                      a few weeks out in peak season.
                    </li>
                    <li>
                      <strong>Only swim with operators:</strong> Open,
                      unsupervised swimming isn't advisable given the
                      reservoir's depth and submerged old-town structures.
                    </li>
                    <li>
                      <strong>Carry a change of clothes:</strong> Most water
                      activities will leave you soaked — pack accordingly if
                      you're moving on the same day.
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
                          "Book water-sports slots early on peak weekends",
                          "Try the cable-skiing setup at Koti Colony",
                          "Check the Tehri Lake Festival dates if visiting in winter",
                          "Wear the life jacket provided, always",
                          "Carry a change of clothes",
                          "Confirm your activity base before booking a stay",
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
                          "Swim unsupervised away from operators",
                          "Plan a water-sports trip during monsoon",
                          "Assume houseboat rooms are available last-minute",
                          "Underestimate afternoon heat in summer months",
                          "Skip the life jacket even for a short ride",
                          "Expect activities on both shores in a single visit",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Tehri Lake
                    with the pine forests of{" "}
                    <Link href="/blog/dhanaulti-travel-guide">Dhanaulti</Link>{" "}
                    or the whitewater and yoga scene of{" "}
                    <Link href="/blog/rishikesh-adventure-travel-guide">
                      Rishikesh
                    </Link>{" "}
                    for a fuller Garhwal adventure loop.
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
                  "Tehri Lake",
                  "Tehri Dam",
                  "Uttarakhand",
                  "Water Sports",
                  "New Tehri",
                  "Bhagirathi River",
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

              <RelatedPostsGrid currentSlug="tehri-lake-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="tehri-lake-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
