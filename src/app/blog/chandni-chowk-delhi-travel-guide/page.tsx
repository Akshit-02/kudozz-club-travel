// src/app/blog/chandni-chowk-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chandni Chowk Food Guide: Street Food & Shopping",
  description:
    "Chandni Chowk travel guide — Delhi's 350-year-old bazaar built by Jahanara Begum. The legendary food walk, Kinari Bazaar, Khari Baoli spice market, and how to explore its lanes.",
  keywords:
    "Chandni Chowk, Chandni Chowk Delhi, Chandni Chowk food walk, Chandni Chowk street food, Kinari Bazaar, Khari Baoli spice market, Paranthe Wali Gali, Dariba Kalan, Chawri Bazaar, Old Delhi market, Chandni Chowk shopping, Gurudwara Sis Ganj Sahib, Fatehpuri Masjid, Jahanara Begum",
  openGraph: {
    title: "Chandni Chowk Food Guide: Street Food & Shopping",
    description:
      "Delhi's 350-year-old moonlit bazaar — Kinari Bazaar, Khari Baoli spice market, Paranthe Wali Gali, and the legendary Chandni Chowk food walk.",
    url: "https://club.kudozz.in/blog/chandni-chowk-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Sandstone fort walls at golden hour, evoking the Mughal-era architecture found near Chandni Chowk and Old Delhi",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandni Chowk Food Guide: Street Food & Shopping",
    description:
      "Delhi's 350-year-old moonlit bazaar — Kinari Bazaar, Khari Baoli spice market, Paranthe Wali Gali, and the legendary Chandni Chowk food walk.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chandni-chowk-delhi-travel-guide",
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
          headline: "Chandni Chowk Food Guide: Street Food & Shopping",
          description:
            "Chandni Chowk travel guide — Delhi's 350-year-old bazaar built by Jahanara Begum. The legendary food walk, Kinari Bazaar, Khari Baoli spice market, and how to explore its lanes.",
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
            "@id": "https://club.kudozz.in/blog/chandni-chowk-delhi-travel-guide",
          },
          keywords:
            "Chandni Chowk, Chandni Chowk food walk, Kinari Bazaar, Khari Baoli spice market, Paranthe Wali Gali, Dariba Kalan, Chawri Bazaar",
          about: {
            "@type": "Place",
            name: "Chandni Chowk",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Old Delhi",
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
                name: "Chandni Chowk",
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
    q: "What is famous in Chandni Chowk?",
    a: "Chandni Chowk is famous above all for its street food — parathas, chaat, jalebi, and kebabs from vendors that have often been in business for over a century — alongside its specialised wholesale bazaars: Kinari Bazaar for wedding and decoration goods, Dariba Kalan for jewellery, Chawri Bazaar for paper and hardware, and Khari Baoli, one of Asia's largest wholesale spice markets. It's also home to the historic Gurudwara Sis Ganj Sahib and the Fatehpuri Masjid.",
  },
  {
    q: "Is Chandni Chowk safe for tourists?",
    a: "Yes, generally — it's one of Delhi's most heavily visited and policed market areas, and violent crime against tourists is rare. The real risks are the ones that come with extreme crowd density: pickpocketing, getting jostled or separated from your group, and traffic chaos in the surrounding lanes. Keep valuables in a zipped front pocket or money belt, stay aware in the tightest lanes, and you'll be fine.",
  },
  {
    q: "What is the best time to visit Chandni Chowk?",
    a: "Early morning (before 10 AM) or early evening (after 5 PM) are best — the afternoon in between brings peak heat, the densest crowds, and the most gridlocked traffic in the surrounding lanes. Winter months (November to February) are the most comfortable season overall, and evenings are when the market's lights and energy are at their best.",
  },
  {
    q: "How do I do a Chandni Chowk food walk?",
    a: "Go on foot or by cycle-rickshaw, on an empty stomach, ideally with a small group so you can order and share multiple items. A good route starts at Paranthe Wali Gali for stuffed parathas, moves to a chaat vendor for golgappe and aloo tikki, continues to Old Famous Jalebi Wala for hot jalebi, and — if you can handle Mughlai food — detours to Karim's near Jama Masjid for kebabs. Carry cash, and pace yourself; portions add up fast.",
  },
  {
    q: "How do I reach Chandni Chowk by metro?",
    a: "Take the Yellow Line to Chandni Chowk Metro Station, which sits right at the edge of the market near the Fatehpuri Masjid end. Exit and walk east into the main Chandni Chowk street — the whole market area, including Kinari Bazaar and Dariba Kalan, is walkable from there. It's the simplest and most traffic-free way in, especially during the day.",
  },
  {
    q: "What is Khari Baoli famous for?",
    a: "Khari Baoli, at the western end of Chandni Chowk, is one of Asia's largest wholesale spice markets — a single street lined with shops selling sacks of chilli, turmeric, cardamom, dried fruits, nuts, and herbs, their smells filling the air well before you reach the entrance. It's a working wholesale market rather than a tourist stop, but browsing it (and buying small retail quantities) is one of the more memorable things to do in Old Delhi.",
  },
  {
    q: "Can you drive into Chandni Chowk?",
    a: "Not really, and you shouldn't try. Most of the interior lanes are far too narrow and congested for cars, and large stretches of the main street have restricted vehicle access during the day. Park near the edge of the market (or arrive by metro) and explore on foot or by cycle-rickshaw, which is how almost everyone — including locals — actually moves through it.",
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
  { id: "introduction", title: "Chandni Chowk: The Moonlit Square", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chandni Chowk", level: 2 },
  { id: "layout", title: "The Layout: Bazaars & Lanes", level: 2 },
  { id: "food-walk", title: "The Legendary Food Walk", level: 2 },
  { id: "heritage", title: "Gurudwara Sis Ganj Sahib & Fatehpuri Masjid", level: 2 },
  { id: "rickshaw", title: "Cycle-Rickshaw Rides", level: 2 },
  { id: "itinerary", title: "Half-Day Food & Shopping Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChandniChowkGuidePage() {
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
              alt="Sandstone fort walls at golden hour, evoking the Mughal-era architecture found near Chandni Chowk and Old Delhi"
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
                { label: "Chandni Chowk", href: null },
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
                "Chandni Chowk",
                "Old Delhi",
                "Street Food",
                "Bazaars",
                "Heritage",
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
              Chandni Chowk: Delhi's Legendary Food Walk & Bazaar Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A 350-year-old market street built for a Mughal princess,
              Chandni Chowk is one of India's oldest and busiest bazaars —
              and, lane for lane, one of the best street food walks anywhere
              in the country.
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
                  text: "Old Delhi, Delhi",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,900 words",
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
                  <h2>Chandni Chowk: The Moonlit Square</h2>
                  <p>
                    <strong>Chandni Chowk</strong> was laid out around 1650 by{" "}
                    <strong>Jahanara Begum</strong>, the eldest and favourite
                    daughter of Mughal emperor Shah Jahan, as part of the new
                    walled city of Shahjahanabad. The name translates loosely
                    to "moonlit square" — the market was originally designed
                    around a broad canal that ran down its centre, reflecting
                    moonlight along the water at night. The canal is long
                    gone, filled in during the 20th century, but the name and
                    the market it fronted have outlived it by over three
                    centuries.
                  </p>
                  <p>
                    Today Chandni Chowk is still, by most measures, one of
                    India's oldest and busiest markets — a dense tangle of
                    lanes radiating off the main street, each one historically
                    specialised in a particular trade, all of it packed into
                    a stretch you can walk end to end in twenty minutes if
                    the crowds allow it. It sits inside{" "}
                    <Link href="/blog/old-delhi-travel-guide">Old Delhi</Link>
                    , a short walk from the Red Fort, and functions as much
                    as a working wholesale district today as it does a
                    tourist destination — which is exactly what makes it
                    interesting.
                  </p>
                  <p>
                    This guide focuses specifically on Chandni Chowk itself —
                    its bazaars, its food, and its two major religious sites —
                    rather than the wider Old Delhi monuments covered in our{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi travel guide</Link>
                    . If you're planning a broader Old Delhi day that also
                    includes Red Fort and Jama Masjid, that's the place to
                    start; this page picks up from there and goes deep on the
                    market itself.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏮</span> Chandni Chowk at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Old Delhi, Delhi",
                        },
                        {
                          icon: "🏗️",
                          label: "Built",
                          value: "~1650, by Jahanara Begum",
                        },
                        {
                          icon: "🚇",
                          label: "Nearest Metro",
                          value: "Chandni Chowk (Yellow Line)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Early morning or evening",
                        },
                        {
                          icon: "🍛",
                          label: "Known For",
                          value: "Street food, spices, wedding goods",
                        },
                        {
                          icon: "💰",
                          label: "Food Walk Budget",
                          value: "₹300 – ₹800/person",
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
                  <h2>Best Time to Visit Chandni Chowk</h2>
                  <p>
                    Chandni Chowk is open and busy essentially every day of
                    the year, but when you go matters enormously. It's a
                    narrow, densely packed market with heavy foot and
                    vehicle traffic, and its comfort level swings hard
                    between the early hours and the afternoon peak.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Quietest — before 10 AM",
                        text: "Shops are still opening and the lanes are relatively walkable. A good window for photography and for seeing Khari Baoli's spice sacks being unloaded, though some food stalls haven't fired up yet.",
                      },
                      {
                        season: "Midday",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak heat & crowds — avoid if possible",
                        text: "The afternoon brings the densest crowds, the worst heat (especially April–June), and near-total traffic gridlock in the surrounding lanes. Not the time to attempt the food walk unhurried.",
                      },
                      {
                        season: "Early Evening",
                        emoji: "🌆",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Best atmosphere — our pick",
                        text: "After 5 PM, the heat breaks, the market lights come on, and food stalls are in full swing. Busier than morning, but the energy is part of the experience.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Best season overall",
                        text: "Cool, comfortable temperatures make walking the lanes for hours far more pleasant than during Delhi's brutal summer — the single best window to visit.",
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
                    <strong>Our pick:</strong> a winter weekday evening, from
                    around 5 to 8 PM. The lanes are lit, the food stalls are
                    at their peak, and the worst of the afternoon heat and
                    congestion is already behind you.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chandni Chowk</h2>
                  <p>
                    Chandni Chowk sits right in the heart of Old Delhi, and
                    getting to its edge is easy — getting through its
                    interior is a different matter entirely, since most of
                    the lanes are too narrow for cars.
                  </p>
                  <ul>
                    <li>
                      <strong>By Metro (recommended):</strong> Take the
                      Yellow Line to <strong>Chandni Chowk Metro Station</strong>,
                      which lets out close to the Fatehpuri Masjid end of the
                      main street. It's by far the easiest, most reliable way
                      in, bypassing the area's notorious traffic entirely.
                    </li>
                    <li>
                      <strong>From Kashmere Gate:</strong> If you're coming
                      from the{" "}
                      <Link href="/blog/kashmere-gate-delhi-travel-guide">
                        Kashmere Gate
                      </Link>{" "}
                      area, it's just two stops south on the Yellow Line — a
                      quick, convenient link if you're combining the two in
                      one day.
                    </li>
                    <li>
                      <strong>By auto-rickshaw or cab:</strong> Workable for
                      reaching the edge of the market, but expect a slow
                      final stretch through dense traffic. Ask to be dropped
                      near Red Fort or the Town Hall end rather than trying
                      to drive into the market itself.
                    </li>
                    <li>
                      <strong>On foot from Red Fort or Jama Masjid:</strong>{" "}
                      Both are a short, easy walk away — many visitors
                      combine a Red Fort or Jama Masjid visit with Chandni
                      Chowk as one continuous Old Delhi outing.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Whatever you take to get
                    there, plan to explore on foot or by cycle-rickshaw once
                    you arrive — cars simply cannot navigate most of the
                    interior lanes, and walking is genuinely the best way to
                    experience the market anyway.
                  </div>
                </section>

                {/* ── Layout ────────────────────────────────────────────── */}
                <section id="layout">
                  <h2>The Layout: Bazaars & Lanes of Chandni Chowk</h2>
                  <p>
                    What makes Chandni Chowk more than just a street is its
                    web of side lanes, each historically dedicated to a
                    specific trade — a specialisation that, remarkably, has
                    survived largely intact for centuries.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        name: "Kinari Bazaar",
                        icon: "💍",
                        text: "The wedding and decoration lane — a riot of gold and silver borders (gota-kinari), sequins, garlands, festive trims, and everything a wedding trousseau might need. Narrow, colourful, and permanently busy.",
                      },
                      {
                        name: "Dariba Kalan",
                        icon: "💎",
                        text: "Delhi's historic jewellery lane, dating back to the Mughal era — rows of gold and silver jewellers, some family-run for generations, tucked into one of the market's narrower stretches.",
                      },
                      {
                        name: "Chawri Bazaar",
                        icon: "📄",
                        text: "Once famous for courtesans' salons in the Mughal era, now Delhi's wholesale hub for paper, wedding cards, stationery, and brass and copper hardware.",
                      },
                      {
                        name: "Khari Baoli",
                        icon: "🌶️",
                        text: "At the western end of the main street — one of Asia's largest wholesale spice markets, with sacks of chilli, turmeric, cardamom, dried fruits and nuts stacked floor to ceiling.",
                      },
                    ].map((b) => (
                      <div
                        key={b.name}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <div className="text-2xl mb-2">{b.icon}</div>
                        <div
                          className="font-bold text-stone-900 mb-2"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {b.name}
                        </div>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {b.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p>
                    Beyond these four, smaller specialised pockets dot the
                    area too — a stretch given over to spectacles and
                    optical shops, another to books and stationery near the
                    Town Hall — but Kinari Bazaar, Dariba Kalan, Chawri
                    Bazaar, and Khari Baoli are the four every first-time
                    visitor should know by name.
                  </p>

                  <blockquote>
                    Khari Baoli in particular is worth budgeting real time
                    for — it's a working wholesale market, not a tourist
                    stop, but the sheer scale of spice sacks stacked along
                    the street, and the smell that reaches you well before
                    you arrive, make it one of the most memorable stretches
                    in all of Old Delhi.
                  </blockquote>
                </section>

                {/* ── Food Walk ─────────────────────────────────────────── */}
                <section id="food-walk">
                  <h2>The Legendary Chandni Chowk Food Walk</h2>
                  <p>
                    If Chandni Chowk has one reputation that outstrips even
                    its bazaars, it's food. This is one of the great street
                    food walks anywhere in India — a concentration of
                    century-old institutions within a few hundred metres of
                    each other, most of them still run by descendants of the
                    families who started them.
                  </p>

                  <ul>
                    <li>
                      <strong>Paranthe Wali Gali:</strong> A narrow lane
                      dedicated almost entirely to stuffed, deep-fried
                      parathas, running for well over a century. Vendors
                      here stuff everything from potato and paneer to more
                      unusual fillings, served with a spread of pickles and
                      curries — a Chandni Chowk institution in its own right.
                    </li>
                    <li>
                      <strong>Karim's:</strong> Just off Jama Masjid, a
                      short walk from the main Chandni Chowk street, Karim's
                      has been serving Mughlai kebabs, korma, and biryani
                      since the early 20th century, tracing its lineage to
                      cooks from the Mughal royal kitchens. Worth the small
                      detour on any food walk through the area.
                    </li>
                    <li>
                      <strong>Old Famous Jalebi Wala:</strong> A landmark at
                      the Dariba Kalan corner, frying fresh jalebi in
                      full view of the street since the late 19th century.
                      Hot, crisp, and syrup-soaked — one of the most
                      photographed food stops in the entire market.
                    </li>
                    <li>
                      <strong>Ghantewala's sweets legacy:</strong> For nearly
                      two centuries, Ghantewala was Chandni Chowk's most
                      famous sweet shop, its sohan halwa reputedly enjoyed
                      even by Mughal emperors, before it finally shut its
                      doors in the 2010s. It no longer operates, but its name
                      still comes up in almost every conversation about the
                      market's food history — a reminder of how deep
                      Chandni Chowk's culinary roots really run.
                    </li>
                    <li>
                      <strong>Daulat ki Chaat:</strong> A winter-only
                      speciality — an impossibly light, frothy dessert made
                      from milk foam churned overnight in the cold night air,
                      sold by street vendors carrying it in large, wide
                      vessels through the lanes. If you're visiting between
                      November and February, this is worth actively seeking
                      out; it simply isn't made the rest of the year.
                    </li>
                    <li>
                      <strong>Chaat vendors throughout the lanes:</strong>{" "}
                      Golgappe (pani puri), aloo tikki, and dahi bhalla from
                      long-running roadside stalls — Old Delhi's chaat is
                      widely considered among the best in India, and half
                      the fun is simply following the biggest queue.
                    </li>
                  </ul>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Go hungry, go with a group,
                    and share plates — portions at most stalls are small and
                    inexpensive by design, meant to be sampled across five or
                    six stops rather than filling up at just one.
                  </div>
                </section>

                {/* ── Heritage ──────────────────────────────────────────── */}
                <section id="heritage">
                  <h2>Gurudwara Sis Ganj Sahib & Fatehpuri Masjid</h2>
                  <p>
                    Chandni Chowk isn't just commerce — two significant
                    places of worship anchor either end of the market, both
                    worth stepping into even on a food-and-shopping-focused
                    visit.
                  </p>
                  <ul>
                    <li>
                      <strong>Gurudwara Sis Ganj Sahib:</strong> One of
                      Sikhism's most historically significant gurudwaras,
                      marking the site where the ninth Sikh Guru, Guru Tegh
                      Bahadur, was executed on the orders of Aurangzeb in
                      1675. It's an active, functioning gurudwara today —
                      remove your shoes and cover your head before entering,
                      and stay for a meal at the community kitchen (langar)
                      if you have time; it's open to visitors of all faiths.
                    </li>
                    <li>
                      <strong>Fatehpuri Masjid:</strong> Standing at the
                      western end of Chandni Chowk, right by Khari Baoli,
                      this mosque was built in 1650 by Fatehpuri Begum, one
                      of Shah Jahan's wives — making it almost exactly
                      contemporary with the market itself. Its red sandstone
                      facade marks a natural bookend to a walk down the main
                      street.
                    </li>
                  </ul>
                  <p>
                    Together, the two sites sit at nearly opposite ends of
                    Chandni Chowk's main stretch — Gurudwara Sis Ganj Sahib
                    closer to the Town Hall/Red Fort side, Fatehpuri Masjid
                    at the Khari Baoli end — making it easy to fold both into
                    a single walk down the length of the market.
                  </p>
                </section>

                {/* ── Rickshaw ──────────────────────────────────────────── */}
                <section id="rickshaw">
                  <h2>Cycle-Rickshaw Rides Through the Lanes</h2>
                  <p>
                    A cycle-rickshaw ride through Chandni Chowk's interior
                    lanes is, for many first-time visitors, the single most
                    memorable way to experience the market — weaving through
                    gaps that look too narrow for anything on wheels, past
                    stacked spice sacks, hanging fabric, and shopfronts
                    barely a rickshaw-width apart.
                  </p>
                  <ul>
                    <li>
                      <strong>Where to find one:</strong> Rickshaw pullers
                      wait at both ends of the main street and near most
                      major lane entrances — no need to book ahead, just flag
                      one down.
                    </li>
                    <li>
                      <strong>Negotiate before boarding:</strong> Rates
                      aren't metered, so agree on a price and a rough
                      route (or duration) before you get in, not after.
                    </li>
                    <li>
                      <strong>Good for the inner lanes, not required for
                      the main street:</strong> The main Chandni Chowk street
                      is easily walkable — a rickshaw earns its keep once you
                      head into narrower interior lanes like parts of Kinari
                      Bazaar, where walking the full stretch is slower and
                      more tiring.
                    </li>
                    <li>
                      <strong>Best at dusk:</strong> A short evening ride as
                      the market lights come on is a particularly good way
                      to end a food walk — less physically demanding than
                      more walking, and a great vantage point for photos.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Half-Day Food & Shopping Itinerary</h2>
                  <p>
                    Chandni Chowk rewards a focused half-day rather than a
                    rushed hour — here's a realistic plan that covers the
                    food walk, the main bazaars, and both heritage sites.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "9:00 AM",
                        title: "Arrive & Gurudwara Sis Ganj Sahib",
                        color: "bg-amber-700",
                        activities: [
                          "Metro to Chandni Chowk station, walk to the main street",
                          "Visit Gurudwara Sis Ganj Sahib (cover head, remove shoes)",
                          "Optional: stay for langar (community meal)",
                        ],
                      },
                      {
                        day: "10:00 AM",
                        title: "Kinari Bazaar & Dariba Kalan",
                        color: "bg-forest-600",
                        activities: [
                          "Browse Kinari Bazaar's wedding and decoration shops",
                          "Walk through Dariba Kalan's jewellery lane",
                          "Stop at Old Famous Jalebi Wala at the corner",
                        ],
                      },
                      {
                        day: "11:30 AM",
                        title: "The Food Walk",
                        color: "bg-sky-600",
                        activities: [
                          "Paranthe Wali Gali for stuffed parathas",
                          "Chaat stop: golgappe, aloo tikki, dahi bhalla",
                          "Optional detour to Karim's near Jama Masjid",
                        ],
                      },
                      {
                        day: "1:00 PM",
                        title: "Chawri Bazaar & Khari Baoli",
                        color: "bg-purple-600",
                        activities: [
                          "Cycle-rickshaw or walk toward Chawri Bazaar",
                          "Explore Khari Baoli's wholesale spice market",
                          "Buy small retail quantities of spices or dried fruit",
                        ],
                      },
                      {
                        day: "2:00 PM",
                        title: "Fatehpuri Masjid & Wrap-Up",
                        color: "bg-stone-600",
                        activities: [
                          "Visit Fatehpuri Masjid at the market's western end",
                          "Rest, rehydrate, and beat the afternoon heat",
                          "Head out via Chandni Chowk metro station",
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
                    * If starting in the evening instead, skip straight to
                    the food walk and bazaars — Gurudwara Sis Ganj Sahib and
                    Fatehpuri Masjid are both open into the evening and can
                    be visited either first or last.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Chandni Chowk is one of the most affordable half-days you
                    can spend in Delhi — even a generous food walk with
                    shopping rarely runs high, since most individual items
                    are inexpensive by design.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Light", "Moderate", "Generous"].map(
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
                          ["Food walk (per person)", "₹200", "₹450", "₹800"],
                          [
                            "Cycle-rickshaw ride",
                            "₹50–₹100",
                            "₹100–₹150",
                            "₹150–₹250",
                          ],
                          [
                            "Spice/dried fruit shopping",
                            "₹0",
                            "₹300–₹500",
                            "₹1,000+",
                          ],
                          [
                            "Kinari Bazaar/Dariba Kalan browsing",
                            "₹0",
                            "₹500+",
                            "₹2,000+",
                          ],
                          ["Metro fare (round trip)", "₹40–₹60", "₹40–₹60", "₹40–₹60"],
                          ["Half-day total (approx.)", "₹300", "₹1,000", "₹2,500+"],
                        ].map(([exp, l, m, g], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {l}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {m}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {g}
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
                    * Shopping figures scale entirely with what you buy —
                    Kinari Bazaar and Dariba Kalan can run from a few hundred
                    rupees to several thousand depending on whether you're
                    browsing or buying jewellery or wedding trousseau items.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Chandni Chowk</h2>
                  <ul>
                    <li>
                      <strong>Cash is king:</strong> Most food stalls and
                      smaller shops in the interior lanes don't accept
                      cards or UPI reliably — carry enough small-denomination
                      cash for the day.
                    </li>
                    <li>
                      <strong>Watch your belongings in the crowds:</strong>{" "}
                      Chandni Chowk gets extremely dense, especially in the
                      afternoon and evening — keep bags zipped and worn to
                      the front, and keep phones and wallets in a secure,
                      inside pocket rather than a back pocket or open tote.
                    </li>
                    <li>
                      <strong>Bargain, but reasonably:</strong> Bargaining is
                      normal and expected in Kinari Bazaar, Dariba Kalan, and
                      most shopping lanes — start well below the asking
                      price, but keep it good-natured; most food stalls,
                      however, have fixed prices and aren't a place to
                      haggle.
                    </li>
                    <li>
                      <strong>Ease into street food if you're new to it:
                      </strong>{" "}
                      Start with freshly cooked, hot items from a busy stall
                      (high turnover generally means fresher food) rather
                      than anything that's been sitting out, and carry basic
                      digestive medication if you're trying a lot of new
                      vendors in one day.
                    </li>
                    <li>
                      <strong>Avoid the midday crush if you can:</strong>{" "}
                      Traffic in the surrounding lanes seizes up badly
                      between roughly noon and 4 PM — plan your visit for
                      morning or evening instead.
                    </li>
                    <li>
                      <strong>Dress and behave respectfully at religious
                      sites:</strong> Cover your head and remove shoes at
                      Gurudwara Sis Ganj Sahib; dress modestly at Fatehpuri
                      Masjid.
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
                          "Go early morning or evening, not midday",
                          "Carry enough small-denomination cash",
                          "Share food across multiple stalls with a group",
                          "Keep bags zipped and worn to the front",
                          "Cover your head at Gurudwara Sis Ganj Sahib",
                          "Take the metro to skip the traffic entirely",
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
                          "Try to drive a car into the interior lanes",
                          "Visit during the midday traffic crush",
                          "Carry valuables loosely in an open bag",
                          "Expect card payment at most food stalls",
                          "Bargain aggressively at fixed-price food stalls",
                          "Skip hydration during a long summer visit",
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
                    <strong>🗺️ Extend the trip:</strong> Many visitors pair
                    Chandni Chowk with a shopping stop at{" "}
                    <Link href="/blog/karol-bagh-delhi-travel-guide">
                      Karol Bagh
                    </Link>{" "}
                    for a more modern market contrast, or combine it with a
                    visit to the{" "}
                    <Link href="/blog/kashmere-gate-delhi-travel-guide">
                      Kashmere Gate
                    </Link>{" "}
                    area, just two metro stops away, for a fuller Old Delhi
                    day.
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
                  "Chandni Chowk",
                  "Delhi",
                  "Old Delhi",
                  "Street Food",
                  "Khari Baoli",
                  "Kinari Bazaar",
                  "Shopping",
                  "Heritage",
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

              <RelatedPostsGrid currentSlug="chandni-chowk-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chandni-chowk-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
