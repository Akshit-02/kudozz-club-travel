// src/app/blog/turtuk-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  HIMALAYAN_GEAR,
} from "@/components/ui/TrekGearRecommendations";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Turtuk Travel Guide: Ladakh's Last Balti Village Before the LOC",
  description:
    "A complete guide to Turtuk, Ladakh — the Balti village opened to tourists only in 2010. Best time to visit, how to reach via Nubra Valley, ILP permits, Farol & Chutang villages, apricot orchards, homestays, and essential tips.",
  keywords:
    "Turtuk, Turtuk Ladakh, Turtuk village, Balti culture Ladakh, Nubra Valley Turtuk, Turtuk homestay, Turtuk travel guide, Farol Chutang village, Line of Control Ladakh, apricot village Ladakh",
  openGraph: {
    title: "Turtuk Travel Guide: Ladakh's Last Balti Village Before the LOC",
    description:
      "A Balti village on the Shyok River, under Pakistani control until 1971, opened to outsiders only in 2010. Turtuk is unlike anywhere else in Ladakh.",
    url: "https://club.kudozz.in/blog/turtuk-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Ladakh mountain landscape near Turtuk and the Shyok River valley",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Turtuk Travel Guide: Ladakh's Last Balti Village",
    description:
      "The Balti village opened to tourists only in 2010 — apricot orchards, stone houses, and the road that ends near the Line of Control.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/turtuk-travel-guide",
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
          headline:
            "Turtuk Travel Guide: Ladakh's Last Balti Village Before the LOC",
          description:
            "A complete guide to Turtuk, Ladakh — the Balti village opened to tourists only in 2010, its people, culture, apricot orchards, and how to visit responsibly.",
          image:
            "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
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
            "@id": "https://club.kudozz.in/blog/turtuk-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Turtuk",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Ladakh",
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
                name: "Turtuk Travel Guide",
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
  { id: "introduction", title: "Why Visit Turtuk?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Turtuk", level: 2 },
  { id: "permits", title: "Permits & the Border Zone", level: 2 },
  { id: "farol-chutang", title: "Farol & Chutang Villages", level: 2 },
  { id: "balti-culture", title: "Balti Culture & Architecture", level: 2 },
  { id: "turtuk-museum", title: "Turtuk Heritage Museum", level: 2 },
  { id: "apricot-orchards", title: "Apricot Orchards", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TurtukPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Turtuk village landscape near the Shyok River, Ladakh"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 to-transparent" />
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
                { label: "Ladakh", href: "/blog?category=ladakh" },
                { label: "Turtuk", href: null },
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
                "Turtuk",
                "Ladakh",
                "Nubra Valley",
                "Balti Culture",
                "Off-beat",
                "Border Village",
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
              Turtuk Travel Guide: Ladakh's Last Balti Village Before the LOC
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A village of stone houses and apricot orchards on the banks of
              the Shyok River, closer to Pakistan than to Leh — Turtuk was
              off-limits to outsiders until 2010. It remains one of the most
              quietly extraordinary places in India.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "14 min read",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Turtuk, Ladakh",
                },
                {
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.icon}
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
                  <h2>Why Visit Turtuk?</h2>
                  <p>
                    Follow the Shyok River far enough past Hunder and Diskit,
                    beyond the last dunes of Nubra Valley, and the landscape
                    begins to change. The mountains close in, the road narrows
                    to a single lane cut into cliffside, and then — almost
                    without warning — you drop into a green ravine of apricot
                    trees, willow groves, and stone houses stacked one above
                    another like a village carved into the hillside itself.
                    This is <strong>Turtuk</strong>, the northernmost village
                    in India that civilians can visit, and one of the last
                    places you can stand before the road simply stops at the
                    Line of Control.
                  </p>
                  <p>
                    Turtuk's story is what makes it unlike anywhere else in
                    Ladakh. Until the 1971 Indo-Pak war, this valley — and the
                    villages of Turtuk, Chalunka, Thang, and Tyakshi — belonged
                    to Pakistan, part of the Baltistan region now known as
                    Gilgit-Baltistan. In a matter of days during the war, the
                    Indian Army pushed across the Shyok and captured this
                    stretch of the valley. Overnight, without moving an inch,
                    the residents of Turtuk became Indian citizens. Many still
                    have relatives across the border in Skardu whom they have
                    never been able to visit, separated by a Line of Control
                    that runs just a few kilometres beyond the village.
                  </p>
                  <p>
                    Because of its sensitivity as a border area, Turtuk
                    remained a restricted military zone for nearly four
                    decades after the war. It was only in{" "}
                    <strong>2010</strong> that the Indian government opened it
                    to tourists — making Turtuk one of the most recently
                    "discovered" corners of India, still refreshingly free of
                    the crowds that have overtaken Pangong and Nubra. What you
                    find here is a distinct Balti Muslim culture, a language
                    and cuisine closer to Baltistan than to Buddhist Ladakh, a
                    stone-and-timber architecture found nowhere else in the
                    region, and orchards of apricots so famous that Ladakhis
                    themselves travel here to buy them.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🍑</span> Turtuk at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Region",
                          value: "Nubra Valley, Ladakh",
                        },
                        {
                          icon: "🏔️",
                          label: "Altitude",
                          value: "~2,950 m (9,678 ft)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "May – Oct" },
                        {
                          icon: "🛣️",
                          label: "Distance from Leh",
                          value: "~205 km (7–8 hrs)",
                        },
                        {
                          icon: "🛂",
                          label: "Permits",
                          value: "ILP required (border zone)",
                        },
                        {
                          icon: "🕌",
                          label: "Community",
                          value: "Balti Muslim (Nurbakshi)",
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
                  <h2>Best Time to Visit Turtuk</h2>
                  <p>
                    Turtuk sits noticeably lower and warmer than Leh or the
                    Nubra dunes, and its orchards give the seasons a rhythm
                    that most of Ladakh — all rock and cold desert — simply
                    doesn't have. The village is at its most beautiful in two
                    very different windows.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "April – May",
                        emoji: "🌸",
                        color: "bg-pink-50 border-pink-200",
                        mood: "Apricot & apple blossom",
                        text: "The orchards erupt into white and pale-pink blossom against the bare brown hillsides — arguably Turtuk's most photogenic season. Roads may still be reopening for the year; check Khardung La and Shyok road status before setting out.",
                      },
                      {
                        season: "June – July",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Green season, warm days",
                        text: "The valley is at its greenest — willows and poplars in full leaf, fields terraced with barley and peas. Daytime temperatures reach a pleasant 20–28°C, unusually warm for Ladakh. Comfortable for walking between Farol and Chutang.",
                      },
                      {
                        season: "August",
                        emoji: "🍑",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Apricot harvest — our pick",
                        text: "Apricots ripen and are laid out to dry on every rooftop in the village, turning entire houses gold. Families are busy but welcoming, and this is the best time to buy fresh and dried apricots directly from growers.",
                      },
                      {
                        season: "Nov – March",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Closed to most travellers",
                        text: "The Khardung La and Shyok route become unreliable or close entirely under snow. Turtuk itself is milder than Leh in winter, but getting there is impractical for most visitors — this is a village best saved for the warmer months.",
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
                    <strong>Our pick:</strong> Mid-August. The apricot harvest
                    is in full swing, rooftops are covered in drying fruit,
                    the weather is warm and settled, and you can combine
                    Turtuk with the Nubra dunes and Diskit monastery without
                    fighting peak-July crowds.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Turtuk</h2>
                  <p>
                    Turtuk is not a standalone destination — it's an extension
                    of a Nubra Valley trip, tacked onto the far end of the
                    Shyok river road. There is exactly one practical way in:
                    by road from Leh, via Khardung La and the Nubra Valley.
                  </p>
                  <ul>
                    <li>
                      <strong>From Leh:</strong> ~205 km, 7–8 hours of
                      driving. Route: Leh → Khardung La (5,359 m) → Khalsar →
                      Diskit → Hunder → Turtuk, following the Shyok River
                      valley for the final stretch. Almost nobody attempts
                      this in one day — split it across an overnight in Nubra.
                    </li>
                    <li>
                      <strong>From Hunder / Diskit (recommended):</strong>{" "}
                      Turtuk is best treated as a day trip or overnight
                      extension from your Nubra Valley base. Hunder to Turtuk
                      is about 85 km (2.5–3 hours) along a scenic but
                      sometimes narrow road that hugs the Shyok's banks.
                    </li>
                    <li>
                      <strong>Road condition:</strong> Mostly a single-lane
                      tarmac road, well-maintained by the Border Roads
                      Organisation but with stretches of loose gravel and
                      landslide-prone cliffs, especially after Chalunka. A
                      sturdy SUV or a well-prepared bike is recommended; avoid
                      driving after dark.
                    </li>
                    <li>
                      <strong>Vehicle:</strong> Shared taxis run irregularly
                      from Hunder and Diskit; most visitors hire a private
                      cab or come with their own Nubra rental. There is no
                      public bus service reliable enough to plan around.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Plan the return:</strong> Turtuk is a dead-end
                    road — beyond the village lies the last civilian
                    settlement of Tyakshi and then the restricted zone
                    approaching the Line of Control, closed to tourists. Every
                    trip in is also a trip back out the same way, so budget
                    the driving time both directions.
                  </div>
                </section>

                {/* ── Permits ───────────────────────────────────────────── */}
                <section id="permits">
                  <h2>Permits & the Border Zone</h2>
                  <p>
                    Turtuk sits inside one of the most sensitive stretches of
                    territory in Ladakh — the ceasefire line with Pakistan
                    runs just a handful of kilometres beyond the village, and
                    the Indian Army maintains a visible presence throughout
                    the valley. Treat the permit and conduct rules here more
                    seriously than anywhere else on a standard Ladakh
                    itinerary.
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        permit: "Inner Line Permit (ILP)",
                        color: "border-forest-300 bg-forest-50",
                        required: "Turtuk, Chalunka, Thang, Tyakshi, Nubra Valley",
                        who: "All Indian nationals",
                        cost: "₹20–₹400 depending on sector, plus environmental fee",
                        how: "Apply online at lahdclehpermit.in or in person at the DC Office, Leh. Include Turtuk/Nubra sector explicitly — a Pangong-only ILP will not cover this route.",
                        note: "Carry printed copies — army checkposts along the Shyok road check permits at multiple points and do not always accept digital copies.",
                      },
                      {
                        permit: "Protected Area Permit (PAP)",
                        color: "border-amber-300 bg-amber-50",
                        required: "Turtuk and the wider Nubra border sector",
                        who: "Foreign nationals only",
                        cost: "Arranged via a registered Leh tour operator",
                        how: "Foreign nationals cannot travel independently to Turtuk — a group of two or more with a licensed guide/operator is mandatory, and visits can be restricted at short notice.",
                        note: "Check current eligibility before booking flights — restricted-area rules for foreigners near the LOC can change without much notice.",
                      },
                    ].map((p) => (
                      <div
                        key={p.permit}
                        className={`border ${p.color} rounded-xl p-5`}
                      >
                        <h4
                          className="font-bold text-stone-900 mb-3"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {p.permit}
                        </h4>
                        <div
                          className="grid sm:grid-cols-2 gap-3 text-sm"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          <div>
                            <span className="text-stone-400 text-xs block">
                              Required for
                            </span>
                            <span className="text-stone-700">{p.required}</span>
                          </div>
                          <div>
                            <span className="text-stone-400 text-xs block">
                              Who needs it
                            </span>
                            <span className="text-stone-700">{p.who}</span>
                          </div>
                          <div>
                            <span className="text-stone-400 text-xs block">
                              Cost
                            </span>
                            <span className="text-stone-700 font-medium">
                              {p.cost}
                            </span>
                          </div>
                          <div>
                            <span className="text-stone-400 text-xs block">
                              How to get
                            </span>
                            <span className="text-stone-700">{p.how}</span>
                          </div>
                        </div>
                        <div className="mt-3 flex items-start gap-2 text-xs text-stone-500">
                          <span className="flex-shrink-0">⚠️</span>
                          {p.note}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="bg-stone-900 text-white rounded-xl p-5 my-6"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <h4
                      className="font-bold text-white mb-3 text-sm"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      📋 Border-zone etiquette
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm">
                      {[
                        "Do not photograph army installations, bunkers, or checkposts",
                        "Do not fly drones — strictly prohibited this close to the LOC",
                        "Stay on marked roads; do not wander toward Tyakshi's outer edge",
                        "Carry ID and ILP at all times, not just at checkposts",
                        "Cooperate promptly and politely with any army checks",
                        "Avoid discussing border politics with locals unprompted",
                      ].map((doc) => (
                        <div
                          key={doc}
                          className="flex items-center gap-2 text-stone-300"
                        >
                          <span className="text-forest-400 flex-shrink-0">
                            ✓
                          </span>
                          {doc}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── Farol & Chutang ───────────────────────────────────── */}
                <section id="farol-chutang">
                  <h2>Farol & Chutang — The Two Halves of Turtuk</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="Turtuk village stone houses and terraced fields above the Shyok River"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Turtuk is really two villages in one, split by the churning
                    grey-green waters of the <strong>Shyok River</strong> and
                    connected by a single narrow footbridge. On the near side
                    is <strong>Farol</strong>, the "new" village — younger,
                    with most of the homestays, the main road access, and the
                    small bazaar. Across the bridge is{" "}
                    <strong>Chutang</strong>, the older settlement, its stone
                    houses stacked steeply up the hillside along paths too
                    narrow for any vehicle, connected by irrigation channels
                    that have carried glacial meltwater to the terraced fields
                    for centuries.
                  </p>
                  <p>
                    Walking from Farol into Chutang is the single best way to
                    spend a few unhurried hours in Turtuk. The footbridge
                    itself, strung across the Shyok's cold rush, is a small
                    thrill in itself. On the far side, the lanes climb past
                    apricot trees heavy with fruit in summer, water channels
                    diverted skilfully around every house, and elderly
                    residents who will often invite you in for a cup of
                    butter tea or apricot juice with no expectation beyond
                    genuine hospitality.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Go slow in Chutang — the real
                    reward here isn't a single viewpoint but the texture of
                    the walk itself: the sound of running water in every
                    lane, apricots drying on flat rooftops, and centuries-old
                    stone-and-timber houses that have nothing in common with
                    the whitewashed, flat-roofed homes of Buddhist Ladakh.
                  </div>
                </section>

                {/* ── Balti Culture ─────────────────────────────────────── */}
                <section id="balti-culture">
                  <h2>Balti Culture, Language & Architecture</h2>
                  <p>
                    Everything about Turtuk signals that you have crossed into
                    a different cultural world from the rest of Ladakh. The
                    people here are <strong>Balti</strong>, an ethnic group
                    with roots in Baltistan (now part of Gilgit-Baltistan,
                    administered by Pakistan), and the overwhelming majority
                    practice <strong>Islam</strong> — specifically the
                    Nurbakshi order, a Sufi-influenced school found almost
                    nowhere else in India outside this valley. This stands in
                    sharp contrast to the Tibetan Buddhist culture — gompas,
                    prayer wheels, chortens — that defines the rest of Ladakh
                    just a few valleys over.
                  </p>
                  <p>
                    The Balti language, related to Tibetan but written
                    historically in a Perso-Arabic script, is still spoken at
                    home, alongside Urdu and Ladakhi. Village mosques, simple
                    and unadorned compared to the ornate gompas elsewhere in
                    the region, anchor daily life. Women in Turtuk often wear
                    a distinct woollen headscarf, and dress customs here are
                    noticeably more conservative than in Leh — a detail worth
                    knowing before you pack.
                  </p>
                  <p>
                    Architecturally, Turtuk breaks every rule you've learned
                    elsewhere in Ladakh. Houses are built from rough,
                    mortared stone with intricately carved wooden window
                    frames and balconies — a Baltistani style closer to what
                    you'd find in Skardu or Hunza than anything in Leh.
                    Multi-storey homes are stacked into the hillside with
                    irrigation channels threaded between them, apricot-wood
                    beams supporting flat roofs used for drying fruit, and
                    narrow stone stairways worn smooth by generations of
                    footsteps.
                  </p>
                </section>

                {/* ── Museum ────────────────────────────────────────────── */}
                <section id="turtuk-museum">
                  <h2>Turtuk Heritage Museum</h2>
                  <p>
                    Near the centre of Farol, a restored traditional Balti
                    house has been converted into a small{" "}
                    <strong>heritage museum</strong>, run by a local family
                    descended from the erstwhile royal lineage of the region.
                    It's an unpretentious, deeply personal space rather than
                    a formal institution — a few rooms filled with centuries-
                    old artefacts: hand-woven Balti textiles, cooking
                    utensils, farming tools, old manuscripts, coins, and
                    photographs documenting the village's unusual political
                    history.
                  </p>
                  <p>
                    What makes a visit worthwhile isn't the collection so
                    much as the conversation. The family who maintains the
                    museum is often on hand to explain Turtuk's story
                    firsthand — what it meant to wake up as a different
                    nationality overnight in 1971, and what everyday life
                    looks like in a village still shadowed by an
                    international border. Entry is by a modest donation, and
                    the half hour you spend there will likely teach you more
                    about Turtuk than anywhere else in the village.
                  </p>
                </section>

                {/* ── Apricot Orchards ──────────────────────────────────── */}
                <section id="apricot-orchards">
                  <h2>The Apricot Orchards</h2>
                  <p>
                    If Nubra Valley is known for its dunes, Turtuk is known
                    for its <strong>apricots</strong> — and with good reason.
                    The valley's microclimate, warmer and more sheltered than
                    most of Ladakh, supports orchards of apricot, apple,
                    walnut, and mulberry trees that seem almost implausible
                    against the surrounding rock and scree. Locals will tell
                    you, without much exaggeration, that Turtuk's apricots
                    are the sweetest in Ladakh.
                  </p>
                  <p>
                    In high summer the orchards are heavy with fruit, and by
                    August entire rooftops across the village turn gold with
                    apricots laid out to dry in the sun — one of the most
                    striking sights in Turtuk, and a genuine photographer's
                    delight. Villagers press the kernels for a distinctive
                    apricot oil, used in cooking and traditional skincare, and
                    dried apricots, apricot jam, and apricot oil are sold
                    directly from homes at a fraction of what you'd pay in a
                    Leh souvenir shop.
                  </p>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Buy direct:</strong> Skip the packaged apricot
                    products sold in Leh's tourist shops and buy straight from
                    a Turtuk household instead — fresher, cheaper, and the
                    money goes directly to the family that grew them.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Turtuk</h2>
                  <p>
                    There are no hotels in Turtuk, and that's precisely the
                    point. Accommodation here means{" "}
                    <strong>homestays</strong> — simple rooms in local Balti
                    houses, often run by the same families who tend the
                    orchards you'll be walking through. A night in a Turtuk
                    homestay, sharing a meal cooked by your hosts, is
                    consistently rated by visitors as one of the most
                    memorable parts of a Ladakh trip.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Basic Homestay",
                        icon: "🏠",
                        range: "₹800–₹1,500/night (with meals)",
                        picks: [
                          "Family-run homes in Farol",
                          "Shared bathrooms, simple bedding",
                          "Home-cooked Balti breakfast & dinner included",
                          "Best for cultural immersion",
                        ],
                      },
                      {
                        tier: "Comfort Homestay",
                        icon: "🛏️",
                        range: "₹1,500–₹3,000/night",
                        picks: [
                          "Attached bathrooms, hot water on request",
                          "Orchard-view rooms",
                          "Balti Heritage Guest House",
                          "Snow Leopard Guest House (Farol)",
                        ],
                      },
                      {
                        tier: "Guesthouse / Camp",
                        icon: "⛺",
                        range: "₹2,500–₹5,000/night",
                        picks: [
                          "A handful of small guesthouses near the bazaar",
                          "Occasional riverside tented setups (seasonal)",
                          "Book ahead in peak August season",
                          "Limited beds — Turtuk is genuinely small",
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
                  <p>
                    Because Turtuk has very few beds overall, homestays fill
                    up quickly in August. Book ahead through your Nubra
                    driver/guide or directly by phone where possible — walk-in
                    availability during peak season is not guaranteed.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Turtuk</h2>
                  <p>
                    Balti cuisine is distinct from the Tibetan-influenced food
                    found elsewhere in Ladakh — closer in spirit to the food
                    of Baltistan and the wider Gilgit region, built around
                    wheat, apricots, and dairy rather than barley and yak
                    butter.
                  </p>
                  <ul>
                    <li>
                      <strong>Kisir:</strong> A traditional Balti bread made
                      from wheat or buckwheat flour, often cooked over an
                      open hearth — the everyday staple in most Turtuk
                      households.
                    </li>
                    <li>
                      <strong>Apricot everything:</strong> Fresh apricots in
                      season, dried apricots year-round, apricot juice,
                      apricot jam, and cold-pressed apricot oil — all sold
                      directly from homes and genuinely some of the best
                      you'll taste in India.
                    </li>
                    <li>
                      <strong>Balti Khambir:</strong> A dense, slightly sour
                      leavened bread, usually eaten with butter tea or apricot
                      jam at breakfast.
                    </li>
                    <li>
                      <strong>Prapu / local greens:</strong> Wild and
                      cultivated greens cooked simply with local butter or
                      oil, a staple side dish in most homestay meals.
                    </li>
                    <li>
                      <strong>Butter tea (Gur Gur Chai) & apricot kernel
                      tea:</strong> Salted butter tea is common as elsewhere
                      in Ladakh, but many Turtuk homes also serve a lightly
                      nutty tea infused with roasted apricot kernels — worth
                      asking for.
                    </li>
                    <li>
                      <strong>Homestay meals:</strong> Almost all dining in
                      Turtuk happens inside homestays — expect a simple,
                      hearty thali of rice or kisir, seasonal vegetables, dal,
                      and whatever fruit is in season, cooked fresh for you by
                      your hosts.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown for a Turtuk Visit</h2>
                  <p>
                    Turtuk is inexpensive by design — there's little to spend
                    on beyond homestay accommodation, meals, transport, and a
                    few kilos of apricots to carry home.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-forest-50">
                          {["Expense", "Budget", "Mid-Range", "Comfort"].map(
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
                            "Homestay/night (with meals)",
                            "₹800",
                            "₹2,000",
                            "₹4,000",
                          ],
                          ["Local transport/day", "₹0 (walking)", "₹500", "₹1,500"],
                          [
                            "Vehicle hire from Hunder/Diskit (return)",
                            "₹2,500",
                            "₹3,500",
                            "₹5,000",
                          ],
                          ["Museum donation", "₹50", "₹100", "₹200"],
                          [
                            "Apricots & local produce",
                            "₹200",
                            "₹500",
                            "₹1,000",
                          ],
                          [
                            "Daily total (approx, excl. vehicle)",
                            "₹1,050",
                            "₹2,600",
                            "₹5,200",
                          ],
                        ].map((row, i) => (
                          <tr
                            key={row[0]}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {row[0]}
                            </td>
                            {row.slice(1).map((cell, j) => (
                              <td
                                key={j}
                                className="p-3 border border-stone-200 text-stone-600"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Excludes ILP fees (bundled with your wider Nubra permit)
                    and the cost of your main Leh–Nubra vehicle, which most
                    travellers already have as part of a larger Ladakh trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Turtuk</h2>
                  <ul>
                    <li>
                      <strong>Dress modestly:</strong> Turtuk is a
                      conservative Muslim village, distinct from the rest of
                      Ladakh. Cover shoulders and knees, and women may want to
                      carry a light scarf, especially near the mosque and
                      when entering homes.
                    </li>
                    <li>
                      <strong>Ask before photographing people:</strong> As
                      anywhere, but especially here — always ask before
                      photographing villagers, and never photograph army
                      posts, bridges under military watch, or checkpoints.
                    </li>
                    <li>
                      <strong>No alcohol in the village:</strong> Out of
                      respect for local religious practice, avoid carrying or
                      consuming alcohol openly in Turtuk.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> There are no ATMs in
                      Turtuk. Withdraw everything you'll need in Leh or Diskit
                      before heading out — homestays, the museum, and local
                      purchases are all cash-based.
                    </li>
                    <li>
                      <strong>Patchy connectivity:</strong> Mobile signal is
                      weak to non-existent through much of the valley. BSNL
                      has the best (still limited) coverage. Tell someone your
                      plan before you go and don't rely on being reachable.
                    </li>
                    <li>
                      <strong>Respect the border proximity:</strong> This is
                      an active, sensitive frontier — Army personnel are a
                      routine part of daily life here. Cooperate calmly with
                      any checks, don't linger past Tyakshi, and don't fly
                      drones under any circumstances.
                    </li>
                    <li>
                      <strong>Give the village your time, not just a
                      stop:</strong> Most tourists treat Turtuk as a
                      photo-and-lunch stop on a Nubra day trip. Staying even
                      one night in a homestay transforms the experience
                      entirely — you'll eat with the family, hear the real
                      history of 1971 firsthand, and see the village at dawn
                      before any day-trippers arrive.
                    </li>
                  </ul>

                  {/* Do & Don't */}
                  <div className="grid sm:grid-cols-2 gap-5 my-6">
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
                          "Stay a night in a homestay, not just a day-trip stop",
                          "Walk across the footbridge into Chutang village",
                          "Visit the Turtuk Heritage Museum and talk to the family",
                          "Buy apricots and apricot oil directly from villagers",
                          "Dress modestly and cover shoulders/knees",
                          "Carry your ILP and ID at all times",
                          "Ask permission before photographing people",
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
                          "Travel without your ILP covering the Nubra/Turtuk sector",
                          "Fly drones anywhere near the village or the LOC",
                          "Photograph army posts, bunkers, or checkposts",
                          "Carry or consume alcohol openly in the village",
                          "Wander past Tyakshi toward the restricted zone",
                          "Assume ATMs or reliable signal will be available",
                          "Rush through in an hour without meeting anyone",
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
                  "Turtuk",
                  "Ladakh",
                  "Nubra Valley",
                  "Balti Culture",
                  "Off-beat",
                  "Border Village",
                  "Homestays",
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

              <TrekGearRecommendations
                sections={HIMALAYAN_GEAR}
                destination="Turtuk"
              />

              <RelatedPostsGrid currentSlug="turtuk-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="turtuk-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
