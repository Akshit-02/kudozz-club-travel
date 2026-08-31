import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { RelatedPostsGrid, RelatedSidebar } from "@/components/ui/RelatedPosts";
import TableOfContents from "@/components/ui/TableOfContents";
import TrekGearRecommendations, {
  HIMALAYAN_GEAR,
} from "@/components/ui/TrekGearRecommendations";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// ── Per-page SEO metadata ─────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Nubra Valley Travel Guide: Sand Dunes, Camels & Cold Desert",
  description:
    "The complete Nubra Valley travel guide — crossing Khardung La, Diskit Monastery's giant Maitreya Buddha, Hunder's Bactrian camels, permits, a 2-day itinerary, stays, food and budget for Ladakh's high-altitude desert.",
  keywords: [
    "Nubra Valley",
    "Ladakh",
    "Khardung La",
    "Diskit Monastery",
    "Hunder Sand Dunes",
    "Bactrian Camels",
    "India",
    "best time to visit Nubra Valley",
    "how to reach Nubra Valley from Leh",
    "Nubra Valley itinerary days",
    "Nubra Valley permits ILP",
    "Nubra Valley budget trip",
    "top things to do in Nubra Valley",
    "Turtuk village",
    "Panamik hot springs",
  ].join(", "),
  openGraph: {
    title: "Nubra Valley Travel Guide: Sand Dunes, Camels & Cold Desert",
    description:
      "The complete Nubra Valley travel guide — crossing Khardung La, Diskit Monastery's giant Maitreya Buddha, Hunder's Bactrian camels, permits, a 2-day itinerary, stays, food and budget for Ladakh's high-altitude desert.",
    url: `https://club.kudozz.in/blog/nubra-valley-travel-guide`,
    type: "article",
    tags: [
      "Nubra Valley",
      "Ladakh",
      "Khardung La",
      "Diskit Monastery",
      "Hunder Sand Dunes",
    ],
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1600,
        height: 900,
        alt: "Sand dunes and mountains of Nubra Valley, Ladakh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nubra Valley Travel Guide: Sand Dunes, Camels & Cold Desert",
    description:
      "The complete Nubra Valley travel guide — crossing Khardung La, Diskit Monastery's giant Maitreya Buddha, Hunder's Bactrian camels, permits, a 2-day itinerary, stays, food and budget for Ladakh's high-altitude desert.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: `https://club.kudozz.in/blog/nubra-valley-travel-guide`,
  },
};

// ── JSON-LD structured data for this article ─────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Nubra Valley Travel Guide: Sand Dunes, Camels & Cold Desert",
          description:
            "The complete Nubra Valley travel guide — crossing Khardung La, Diskit Monastery's giant Maitreya Buddha, Hunder's Bactrian camels, permits, a 2-day itinerary, stays, food and budget for Ladakh's high-altitude desert.",
          image: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
          datePublished: "2026-07-22",
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
            "@id": `https://club.kudozz.in/blog/nubra-valley-travel-guide`,
          },
          keywords: [
            "Nubra Valley",
            "Ladakh",
            "Khardung La",
            "Diskit Monastery",
            "Hunder Sand Dunes",
            "Bactrian Camels",
            "India",
            "best time to visit Nubra Valley",
            "how to reach Nubra Valley from Leh",
            "Nubra Valley itinerary days",
            "Nubra Valley permits ILP",
            "Nubra Valley budget trip",
            "top things to do in Nubra Valley",
            "Turtuk village",
            "Panamik hot springs",
          ].join(", "),
          about: {
            "@type": "Place",
            name: "Nubra Valley",
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
                name: "Ladakh",
                item: "https://club.kudozz.in/blog?category=ladakh",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Nubra Valley Travel Guide",
              },
            ],
          },
        }),
      }}
    />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Visit Nubra Valley?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Nubra Valley", level: 2 },
  { id: "permits", title: "Permits & Paperwork", level: 2 },
  { id: "top-places", title: "Top Places to Visit", level: 2 },
  { id: "diskit-monastery", title: "→ Diskit Monastery & Maitreya Buddha", level: 3 },
  { id: "hunder-dunes", title: "→ Hunder Sand Dunes & Camels", level: 3 },
  { id: "sumur-panamik", title: "→ Sumur & Panamik Hot Springs", level: 3 },
  { id: "ensa-gompa", title: "→ Ensa Gompa", level: 3 },
  { id: "turtuk", title: "→ Turtuk", level: 3 },
  { id: "itinerary", title: "2-Day Nubra Itinerary", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── FAQ data (shared by visible section + JSON-LD) ────────────────────────────
const faqs = [
  {
    q: "How many days do I need for Nubra Valley?",
    a: "The classic loop from Leh is a 2-day, 1-night trip — enough to see Diskit Monastery, the Maitreya Buddha, and a sunset camel ride on the Hunder dunes on Day 1, then Sumur, Panamik, and the return over Khardung La on Day 2. With a third day, add Turtuk as a worthwhile overnight extension.",
  },
  {
    q: "What is the best time to visit Nubra Valley?",
    a: "Our pick is early-to-mid September, when the apricot orchards in Sumur and Diskit turn gold, Khardung La is free of summer traffic jams, and the dunes at Hunder catch beautiful late-afternoon light. July–August is the warmest, driest, and busiest window, while Khardung La is typically closed to civilian traffic from late October to May.",
  },
  {
    q: "How do I reach Nubra Valley from Leh?",
    a: "The standard route crosses Khardung La (5,359 m) north of Leh, descending to Diskit — roughly 120 km and 4–5 hours by shared taxi, private cab, or motorbike. A scenic alternative runs via the Shyok River and Wari La, skipping Khardung La entirely and taking 6–7 hours, which works well as one leg of a loop if you're continuing on to Pangong Tso.",
  },
  {
    q: "Do I need a permit to visit Nubra Valley?",
    a: "Yes. Nubra sits inside a protected border zone near the Line of Control, so an Inner Line Permit (ILP) is mandatory for all Indian nationals, obtainable online or at the DC Office in Leh. Foreign nationals need a Protected Area Permit (PAP) arranged through a registered Leh travel agent, and anyone continuing on to Turtuk or Panamik needs the PAP as well.",
  },
  {
    q: "What is the budget for a trip to Nubra Valley?",
    a: "Excluding transport from Leh, a daily budget (accommodation, food, permits, and a camel ride) runs roughly ₹2,200 on a budget trip, ₹5,100 mid-range, or ₹11,300 for a luxury trip. Vehicle hire for the Leh–Nubra return adds ₹700–₹9,000 depending on whether you go by shared taxi, private cab, or self-driven bike.",
  },
  {
    q: "Is Nubra Valley worth visiting?",
    a: "Yes — it's one of Ladakh's most rewarding detours precisely because it looks so different from the rest of the region: pale sand dunes with double-humped Bactrian camels set against snow peaks, a 32-metre golden Buddha at Diskit, and centuries-old monasteries tucked into cliffs above the Shyok and Nubra rivers.",
  },
  {
    q: "What are the Hunder sand dunes and are the camel rides worth it?",
    a: "The Hunder sand dunes are Nubra's postcard image — pale, cold-desert dunes along the Shyok riverbed that host Ladakh's famous double-humped Bactrian camels, descendants of animals used on old Silk Route caravans. A 20–25 minute camel ride costs roughly ₹500–₹700 per person and is genuinely worth doing once, especially at sunset when the dunes turn gold and day-trip crowds have thinned.",
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

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NubraValleyPage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero Section ─────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          {/* Hero Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Sand dunes and mountains of Nubra Valley, Ladakh"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/50 to-stone-800/20" />
          </div>

          {/* Breadcrumbs */}
          <nav
            className="absolute top-24 left-0 right-0 z-10 px-4 sm:px-8 lg:px-12"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-2 text-xs text-white/70">
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Ladakh", href: "/blog?category=ladakh" },
                { label: "Nubra Valley", href: null },
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
                    <span className="text-white/50">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && (
                    <span className="text-white/30">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 pb-14 pt-32">
            <div className="flex flex-wrap gap-2 mb-5">
              {[
                "Nubra Valley",
                "Ladakh",
                "Khardung La",
                "Sand Dunes",
                "Cold Desert",
              ]
                .slice(0, 4)
                .map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ))}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nubra Valley Travel Guide: Sand Dunes, Camels & Cold Desert
            </h1>
            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              "Cross the world's second-highest motorable pass and drop into a
              valley where sand dunes meet snow peaks, double-humped camels
              plod ancient Silk Route trails, and a 32-metre Buddha watches
              over the Shyok River."
            </p>

            {/* Meta Row */}
            <div
              className="flex flex-wrap items-center gap-5 text-sm text-white/70"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                15 min read
              </span>
            </div>
          </div>
        </section>

        {/* ── Three-Column Content Layout ───────────────────────────────────── */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex gap-8 lg:gap-10">
            {/* Left: Table of Contents */}
            <div className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            {/* Center: Main Article */}
            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-3xl">
              <div className="prose-travel">
                {/* ── Introduction ────────────────────────────────────────── */}
                <section id="introduction">
                  <h2>Why Visit Nubra Valley?</h2>
                  <p>
                    Cross Khardung La out of Leh and the landscape performs a
                    quiet trick on you. The barren brown mountains don't
                    change, but the valley floor does — instead of the tight,
                    river-carved gorge you'd expect at nearly 10,000 feet, it
                    opens into a wide, pale expanse of{" "}
                    <strong>sand dunes</strong>, with double-humped{" "}
                    <strong>Bactrian camels</strong> ambling across them and
                    snow peaks rising directly behind. This is{" "}
                    <strong>Nubra Valley</strong> — once a resting point on
                    the Silk Route caravan trail between Central Asia and the
                    Indian plains, now one of Ladakh's most rewarding
                    detours.
                  </p>
                  <p>
                    Nubra takes its name from "Ldumra," meaning valley of
                    flowers, though the cold-desert reality on the ground is
                    all sand, scrub willow, and apricot orchards clinging to
                    the banks of the Shyok and Nubra rivers. It's a valley of
                    contrasts: a 32-metre golden Buddha gazing serenely
                    towards Pakistan, camels that once carried silk and salt
                    now carrying tourists across the dunes, and monasteries
                    tucked into cliffs that have watched caravans come and go
                    for six centuries. Few places in India feel this
                    remote — or this quietly cinematic.
                  </p>

                  {/* Info box */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-3 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐫</span> Nubra Valley at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 gap-3 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        ["Region", "Ladakh (UT of India)"],
                        ["Altitude", "~3,050 m (10,000 ft) valley floor"],
                        ["Gateway Pass", "Khardung La, 5,359 m (17,582 ft)"],
                        ["Distance from Leh", "~120 km / 4–5 hrs"],
                        ["Best Season", "May–September"],
                        ["Permit Required", "Inner Line Permit (ILP)"],
                      ].map(([k, v]) => (
                        <div key={k}>
                          <span className="text-stone-400 text-xs block">
                            {k}
                          </span>
                          <span className="text-stone-800 font-medium">
                            {v}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── Best Time ───────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit Nubra Valley</h2>
                  <p>
                    Nubra is only accessible for a narrow window each year —
                    Khardung La closes with heavy snow, and winter
                    temperatures in the valley plunge well below freezing.
                    Timing your visit right matters more here than almost
                    anywhere else in Ladakh.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Late Spring (May–Jun)",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Pass reopens, thin crowds",
                        text: "Khardung La typically reopens by mid-to-late May once BRO clears the snow. Days are pleasant (15–20°C), nights still cold. Fewer tourists than peak summer, and the dunes are at their most photogenic with snow still visible on surrounding peaks.",
                      },
                      {
                        season: "Summer (Jul–Aug)",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak season, warmest & driest",
                        text: "The most popular window — roads are fully open, weather is stable, and daytime temperatures reach a comfortable 20–25°C in the valley. Book Hunder and Diskit camps in advance; this is also when the rest of Ladakh is busiest.",
                      },
                      {
                        season: "Early Autumn (Sep)",
                        emoji: "🍂",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Golden light, quieter roads",
                        text: "Apricot and poplar trees turn gold, crowds thin out noticeably, and the light across the dunes in late afternoon is spectacular. Nights get noticeably colder. A favourite among photographers and repeat visitors.",
                      },
                      {
                        season: "Winter (Oct–Apr)",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Effectively closed",
                        text: "Khardung La closes to civilian traffic once heavy snow sets in, usually by late October, and reopens only in May. Some tour operators run winter access via alternate routes for the exceptionally determined, but this isn't a realistic plan for most travellers.",
                      },
                    ].map((s) => (
                      <div
                        key={s.season}
                        className={`${s.color} border rounded-xl p-5`}
                      >
                        <div className="flex items-center gap-2 mb-2">
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
                    <strong>Our pick:</strong> Early-to-mid September. The
                    apricot orchards in Sumur and Diskit turn gold, Khardung
                    La is free of the summer traffic jams, and the dunes at
                    Hunder catch a beautiful low, warm light in the late
                    afternoon.
                  </blockquote>
                </section>

                {/* ── How to Reach ────────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Nubra Valley</h2>
                  <p>
                    There's no airport or railway anywhere near Nubra — every
                    route runs through Leh, and every route involves crossing
                    a high pass. Give yourself a full acclimatisation day in
                    Leh before attempting either.
                  </p>
                  <ul>
                    <li>
                      <strong>Via Khardung La (the standard route):</strong>{" "}
                      The most direct and most-used route. From Leh, drive
                      north on the South Pullu road, cross Khardung La at
                      5,359 m, and descend to Khardung village and onward to
                      Diskit — roughly 120 km and 4–5 hours including a photo
                      stop at the top. Shared taxis, private cabs, and
                      self-driven bikes all use this road.
                    </li>
                    <li>
                      <strong>Via the Shyok/Wari La route (the scenic
                      alternative):</strong> A longer route that skips
                      Khardung La entirely, running instead via Karu, Chang
                      La's foothills, and Wari La before dropping into the
                      Shyok valley and approaching Nubra from the Sumur/Khalsar
                      side. It's rougher, less trafficked, and takes closer to
                      6–7 hours, but it's a genuinely spectacular drive and a
                      good way to enter via one route and exit via the other
                      if you're continuing on to Pangong Tso afterwards.
                    </li>
                    <li>
                      <strong>By shared taxi:</strong> Shared jeeps to Diskit
                      and Hunder leave from the Leh taxi stand most mornings
                      in season (₹500–₹800 per seat). Slower and less
                      flexible, but the cheapest option if you're not renting
                      a bike or private cab.
                    </li>
                    <li>
                      <strong>By private cab:</strong> A private taxi from Leh
                      for a 2-day/1-night Nubra trip typically costs
                      ₹8,000–₹12,000, inclusive of the driver's stay. This is
                      the most comfortable option and lets you stop freely at
                      Khardung La, South Pullu checkpoint, and the dune
                      viewpoints.
                    </li>
                    <li>
                      <strong>By motorbike:</strong> Royal Enfields are the
                      classic choice, rented in Leh (₹1,200–₹2,000/day). The
                      climb to Khardung La is a rite of passage for Ladakh
                      road-trippers — just fuel up fully in Leh, as the next
                      reliable pump is at Diskit.
                    </li>
                  </ul>
                </section>

                {/* ── Permits ─────────────────────────────────────────────── */}
                <section id="permits">
                  <h2>Permits & Paperwork</h2>
                  <p>
                    Nubra Valley sits close to the Line of Control and the
                    Siachen Glacier, so unlike central Leh, it falls inside a
                    protected border zone. You cannot cross the South Pullu
                    checkpoint beyond Khardung La without the right paperwork.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-forest-50">
                          <th className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                            Permit
                          </th>
                          <th className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                            Needed For
                          </th>
                          <th className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                            Where to Get It
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          [
                            "Inner Line Permit (ILP)",
                            "All Indian nationals entering Nubra, Khardung La, Diskit, Hunder & Sumur",
                            "Online at lahdclehpermit.in or in person at the DC Office, Leh",
                          ],
                          [
                            "Protected Area Permit (PAP)",
                            "Foreign nationals, and anyone continuing to Turtuk / Panamik beyond the checkpoint",
                            "Through a registered Leh travel agent (solo foreign travel into PAP zones isn't permitted)",
                          ],
                          [
                            "Environmental fee",
                            "Included in most ILPs; funds local conservation",
                            "Collected at the South Pullu / North Pullu checkpoint",
                          ],
                        ].map(([perm, need, where], i) => (
                          <tr
                            key={perm}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {perm}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {need}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {where}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Get your ILP a day before you
                    plan to leave Leh — the online portal is quick, but
                    printing and carrying 4–5 photocopies is essential, since
                    checkpoints at South Pullu, Khardung La, and again near
                    Diskit each ask for a copy. Foreigners should arrange
                    their PAP through their hotel or a local agent at least a
                    day in advance.
                  </div>
                </section>

                {/* ── Top Places ──────────────────────────────────────────── */}
                <section id="top-places">
                  <h2>Top Places to Visit in Nubra Valley</h2>
                  <p>
                    Nubra rewards a slow pace — the villages are small and the
                    distances between them short, so it's easy to cover the
                    highlights over two unhurried days.
                  </p>

                  {/* Diskit Monastery */}
                  <section id="diskit-monastery">
                    <h3>Diskit Monastery & the Maitreya Buddha</h3>
                    <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                      <Image
                        src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                        alt="Mountain landscape near Diskit, Nubra Valley"
                        fill
                        sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p>
                      Perched on a cliff above Diskit village, the oldest and
                      largest monastery in Nubra dates to the early 14th
                      century and belongs to the Gelugpa (Yellow Hat) sect.
                      Climb the steep stairway past prayer wheels to reach the
                      prayer hall, home to a centuries-old collection of
                      thangkas, weapons once used against Mongol raiders, and
                      a small but atmospheric museum.
                    </p>
                    <p>
                      Below the monastery, a 32-metre statue of the{" "}
                      <strong>Maitreya Buddha (the Future Buddha)</strong>,
                      completed in 2010, sits facing down the Shyok valley
                      towards Pakistan — deliberately positioned, monks say,
                      as a gesture of peace watching over the contested
                      border. At golden hour, with the statue catching the
                      last light and the valley falling into shadow below,
                      it's one of the most striking sights in all of Ladakh.
                    </p>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> Time your visit for
                      sunrise or the hour before sunset — the statue and
                      monastery both face the light beautifully, and the
                      crowds that arrive with midday tour convoys thin out
                      completely by evening.
                    </div>
                  </section>

                  {/* Hunder Sand Dunes */}
                  <section id="hunder-dunes">
                    <h3>Hunder Sand Dunes & Bactrian Camels</h3>
                    <p>
                      A short drive past Diskit, <strong>Hunder</strong> is
                      the postcard image of Nubra Valley — pale, cold-desert
                      sand dunes stretching along the Shyok riverbed, framed
                      by bare brown mountains and, further back, snow peaks.
                      The dunes host Ladakh's famous{" "}
                      <strong>double-humped Bactrian camels</strong>,
                      descendants of animals used on Silk Route caravans that
                      once passed through Nubra en route to Yarkand and
                      Kashgar in Central Asia.
                    </p>
                    <p>
                      A 20–25 minute camel ride across the dunes costs
                      roughly ₹500–₹700 per person and is well worth doing
                      once — it's genuinely surreal to be riding a camel with
                      snow-capped Himalayan peaks as the backdrop. Sunset is
                      the best time to visit: the dunes turn a soft gold, the
                      day-trip crowds have usually left, and the light on the
                      surrounding ridgelines is spectacular.
                    </p>
                    <ul>
                      <li>
                        <strong>Best time:</strong> Late afternoon to sunset,
                        when the light is softest and crowds are thinnest
                      </li>
                      <li>
                        <strong>Camel ride:</strong> ₹500–₹700 for ~20–25
                        minutes
                      </li>
                      <li>
                        <strong>Nearby:</strong> Hunder village has apricot
                        orchards, a small monastery, and Nubra's best cluster
                        of camps and homestays
                      </li>
                    </ul>
                  </section>

                  {/* Sumur & Panamik */}
                  <section id="sumur-panamik">
                    <h3>Sumur Village & Panamik Hot Springs</h3>
                    <p>
                      On the northern bank of the Nubra River, roughly 15 km
                      from Diskit, <strong>Sumur</strong> is a quieter, greener
                      village known for the imposing{" "}
                      <strong>Samstanling Monastery</strong>, a relatively
                      modern (19th-century) but beautifully maintained complex
                      set among poplar groves a short drive above the village.
                      It's far less visited than Diskit and makes for a
                      peaceful, unhurried stop.
                    </p>
                    <p>
                      Continue north from Sumur and the road ends, quite
                      literally, at <strong>Panamik</strong> — the last
                      civilian village before the restricted Siachen approach
                      road. Panamik is known for its natural{" "}
                      <strong>sulphur hot springs</strong>, believed locally
                      to have therapeutic properties for joint and skin
                      ailments. The setting, with the Nubra River rushing
                      past and barley fields terracing the slopes, is quietly
                      beautiful even without the springs.
                    </p>
                  </section>

                  {/* Ensa Gompa */}
                  <section id="ensa-gompa">
                    <h3>Ensa Gompa</h3>
                    <p>
                      Across the river from Sumur, tucked into a hillside and
                      reachable via a small bridge and a short uphill walk,{" "}
                      <strong>Ensa Gompa</strong> is one of Nubra's
                      least-visited monasteries — and one of its most
                      rewarding for that reason. Founded in the 17th century
                      and affiliated with Hemis Monastery, it holds faded but
                      exquisite wall paintings and an almost total absence of
                      other visitors.
                    </p>
                    <p>
                      Getting there takes a bit of local asking (a caretaker
                      usually holds the key), but the walk itself, along
                      irrigation channels and past willow groves with the
                      Nubra River below, is as memorable as the monastery.
                      It's a good half-day detour for travellers who've
                      already ticked off Diskit and Hunder and want something
                      quieter.
                    </p>
                  </section>

                  {/* Turtuk */}
                  <section id="turtuk">
                    <h3>Turtuk (A Worthwhile Detour)</h3>
                    <p>
                      For travellers with an extra day and the right permit,{" "}
                      <strong>Turtuk</strong> is the furthest and most
                      atmospheric stop in the region — a Balti village that
                      was part of Pakistan until the 1971 war and opened to
                      tourists only in 2010. Roughly 90 km beyond Diskit along
                      the Shyok river road, it feels culturally distinct from
                      the rest of Ladakh: Balti language, apricot orchards
                      cascading down stone-walled terraces, and views towards
                      the Baltoro range and, on a clear day, distant glaciated
                      peaks near the Pakistan border.
                    </p>
                    <p>
                      Turtuk requires the Protected Area Permit mentioned
                      earlier and is best treated as an overnight extension
                      rather than a rushed day trip — the drive alone is
                      roughly 3 hours each way from Diskit. If your itinerary
                      allows a third day in Nubra, it's a genuinely
                      worthwhile detour; if not, it's a good reason to come
                      back.
                    </p>
                  </section>
                </section>

                {/* ── Itinerary ───────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-Day Nubra Valley Itinerary</h2>
                  <p>
                    This is the classic overnight loop from Leh, structured to
                    cross Khardung La in good light and leave time to actually
                    enjoy Diskit and Hunder rather than rushing between them.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Leh → Khardung La → Diskit → Hunder",
                        color: "bg-forest-600",
                        activities: [
                          "Depart Leh by 7–8 AM with all ILP copies in hand",
                          "Photo stop at Khardung La summit (5,359 m) — 20 min max",
                          "Descend to Diskit; visit the monastery and Maitreya Buddha",
                          "Continue to Hunder; check into a camp or guesthouse",
                          "Sunset camel ride on the Hunder sand dunes",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Sumur, Panamik & Return to Leh",
                        color: "bg-amber-600",
                        activities: [
                          "Morning drive to Sumur; visit Samstanling Monastery",
                          "Optional detour to Ensa Gompa across the river",
                          "Continue to Panamik for the hot springs (if time allows)",
                          "Head back via Diskit and re-cross Khardung La to Leh",
                          "Arrive Leh by evening; rest and hydrate well",
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
                          <ul className="space-y-1 m-0">
                            {d.activities.map((a) => (
                              <li
                                key={a}
                                className="text-sm text-stone-600 m-0 pl-4 before:content-['✓'] before:text-forest-500 before:font-bold before:absolute before:left-0"
                                style={{
                                  fontFamily: "var(--font-dm-sans)",
                                  position: "relative",
                                }}
                              >
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  <blockquote>
                    <strong>Extending your trip:</strong> With a third day,
                    add Turtuk as an overnight extension before returning via
                    Diskit — or exit Nubra via the Shyok/Wari La route towards
                    Pangong Tso instead of retracing your steps over Khardung
                    La.
                  </blockquote>
                </section>

                {/* ── Where to Stay ───────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Nubra Valley</h2>
                  <p>
                    Diskit and Hunder have the widest range of accommodation
                    in the valley; Sumur has a handful of quieter homestays
                    for those wanting to avoid the tour-group circuit.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Local homestays in Sumur & Diskit",
                          "Backpacker guesthouses in Hunder",
                          "Basic dune-view camps (shared bath)",
                          "Diskit village lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹4,500/night",
                        picks: [
                          "Nubra Eco Camp, Hunder",
                          "Silk Route Camp, Hunder",
                          "Sand Dune Resort, Hunder",
                          "Desert Villa, Diskit",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹4,500–₹12,000+/night",
                        picks: [
                          "Deluxe Swiss-tent camps, Hunder",
                          "Nubra Ethnic Camp",
                          "Premium riverside resorts, Diskit",
                          "Boutique heritage stays, Sumur",
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
                              className="text-xs text-stone-600 m-0 pl-0"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Most Nubra camps run on
                    generator power for a few hours each evening and have
                    limited or no wifi — treat it as a feature, not a bug, and
                    carry a power bank for your camera and phone.
                  </div>
                </section>

                {/* ── Food ────────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Nubra Valley</h2>
                  <p>
                    Nubra's food is simpler and more homestyle than Leh's —
                    expect Ladakhi and Balti staples cooked in family kitchens
                    and camp dining tents, built around barley, apricots, and
                    whatever the high-altitude soil can grow.
                  </p>
                  <ul>
                    <li>
                      <strong>Skyu & Chutagi:</strong> Hearty Ladakhi
                      hand-rolled pasta dishes cooked with root vegetables in
                      a thick broth — the perfect meal after a cold day on the
                      dunes.
                    </li>
                    <li>
                      <strong>Thukpa & Momos:</strong> Tibetan noodle soup and
                      steamed dumplings, found at nearly every guesthouse and
                      camp kitchen in Diskit and Hunder.
                    </li>
                    <li>
                      <strong>Apricots:</strong> Nubra is one of Ladakh's
                      apricot-growing heartlands. Try fresh apricots in
                      season (July–August), dried apricots, and apricot oil
                      or jam sold by roadside stalls in Sumur and Diskit.
                    </li>
                    <li>
                      <strong>Balti cuisine (Turtuk):</strong> If you make it
                      to Turtuk, don't miss Balti bread, apricot-based
                      desserts, and mountain-grown apples — distinct from
                      Ladakhi cooking elsewhere in the valley.
                    </li>
                    <li>
                      <strong>Butter tea (gur gur cha) & chang:</strong>{" "}
                      Salted Tibetan butter tea and locally brewed barley beer
                      are both worth trying, especially in Sumur's quieter
                      homestays.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ──────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-forest-50">
                          <th className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                            Expense
                          </th>
                          <th className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                            Budget
                          </th>
                          <th className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                            Mid-Range
                          </th>
                          <th className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                            Luxury
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹8,000"],
                          ["Food/day", "₹500", "₹1,000", "₹2,000"],
                          ["Permits (ILP/PAP)", "₹200", "₹400", "₹600"],
                          ["Camel ride", "₹500", "₹700", "₹700"],
                          ["Transport (Leh–Nubra return)", "₹700", "₹4,000", "₹9,000"],
                          ["Daily Total (excl. transport)", "₹2,200", "₹5,100", "₹11,300"],
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
                </section>

                {/* ── Tips ────────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips</h2>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="text-sm font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✓</span> Do
                      </h4>
                      <ul className="space-y-2 m-0">
                        {[
                          "Acclimatise 1–2 days in Leh before crossing Khardung La",
                          "Carry 4–5 photocopies of your ILP for checkpoints",
                          "Fuel up fully in Leh — the next pump is at Diskit",
                          "Carry cash — there are no ATMs in Nubra Valley",
                          "Pack warm layers even in summer; nights drop near freezing",
                          "Book Hunder/Diskit camps ahead in July–August peak season",
                        ].map((t) => (
                          <li
                            key={t}
                            className="text-sm text-stone-600 m-0 pl-4 relative before:content-['•'] before:text-forest-500 before:font-bold before:absolute before:left-0"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4
                        className="text-sm font-bold text-red-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✗</span> Don't
                      </h4>
                      <ul className="space-y-2 m-0">
                        {[
                          "Linger more than 20–30 minutes at Khardung La summit",
                          "Skip the ILP — checkpoints at South Pullu are strict",
                          "Photograph military installations or personnel anywhere en route",
                          "Push straight from Leh to Nubra without acclimatisation",
                          "Attempt Turtuk without the correct Protected Area Permit",
                          "Overload the camel ride booth without confirming the price first",
                        ].map((t) => (
                          <li
                            key={t}
                            className="text-sm text-stone-600 m-0 pl-4 relative before:content-['•'] before:text-red-500 before:font-bold before:absolute before:left-0"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p>
                    Above all, treat Khardung La as a crossing, not a
                    destination — the altitude is unforgiving, and the real
                    reward is what waits on the other side. Nubra rewards
                    travellers who slow down: linger by the dunes at sunset,
                    sit with a cup of butter tea in a Sumur homestay, and let
                    the valley's quiet, high-desert rhythm take over.
                  </p>
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
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Nubra Valley",
                  "Ladakh",
                  "Khardung La",
                  "Sand Dunes",
                  "Ladakh Monasteries",
                ].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase()}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations
                sections={HIMALAYAN_GEAR}
                destination="Nubra Valley"
              />
              {/* Related Posts Grid at bottom */}
              <RelatedPostsGrid currentSlug="nubra-valley-travel-guide" />
            </article>

            {/* Right: Related Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="nubra-valley-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
