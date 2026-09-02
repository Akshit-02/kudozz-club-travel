// src/app/blog/buxa-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Buxa Tiger Reserve Travel Guide: Trek & Safari",
  description:
    "Complete Buxa Tiger Reserve guide — the trek to Buxa Fort, Jayanti river & village, permits, how to reach from Alipurduar, where to stay, and a full visit plan.",
  keywords:
    "Buxa Tiger Reserve travel guide, Buxa Fort trek, Jayanti West Bengal, Santalabari, Buxa Duar, Alipurduar, Dooars wildlife, Bhutan border trekking, Buxa Fort history, how to reach Buxa, Buxa permit",
  openGraph: {
    title: "Buxa Tiger Reserve Travel Guide: Trek & Safari",
    description:
      "A forested tiger reserve on the Bhutan border in the Dooars — a historic hilltop fort once used as a colonial-era prison, and some of North Bengal's best forest trekking.",
    url: "https://club.kudozz.in/blog/buxa-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Forested hills near the Bhutan border, evoking the landscape of Buxa Tiger Reserve",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Buxa Tiger Reserve Travel Guide: Trek & Safari",
    description:
      "A historic hilltop fort, a Bhutan-border tiger reserve, and North Bengal's best forest trekking — the complete Buxa guide.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/buxa-travel-guide",
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
          headline: "Buxa Tiger Reserve Travel Guide: Trek & Safari",
          description:
            "Complete Buxa Tiger Reserve guide — the trek to Buxa Fort, Jayanti river & village, permits, how to reach from Alipurduar, where to stay, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/buxa-travel-guide",
          },
          keywords:
            "Buxa Tiger Reserve, West Bengal, Dooars, Buxa Fort, trekking, Bhutan border, wildlife",
          about: {
            "@type": "Place",
            name: "Buxa Tiger Reserve",
            address: {
              "@type": "PostalAddress",
              addressRegion: "West Bengal",
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
                name: "West Bengal",
                item: "https://club.kudozz.in/blog/west-bengal-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Buxa Tiger Reserve",
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
    q: "Will I actually see a tiger at Buxa Tiger Reserve?",
    a: "Tiger sightings at Buxa are rare — the reserve is valued more for its forest, birding, and trekking than for reliable big-cat encounters. Come for the Buxa Fort trek, the Jayanti river valley, and the biodiversity of a Bhutan-border forest, and treat any tiger sighting as a bonus.",
  },
  {
    q: "How do I trek to Buxa Fort?",
    a: "The trek to Buxa Fort typically starts from Santalabari or Buxa Duar, climbing through forest to the hilltop fort. It's a moderate trek manageable by reasonably fit beginners, usually completed in a few hours each way, and best attempted with a local guide.",
  },
  {
    q: "What is the history of Buxa Fort?",
    a: "Buxa Fort dates back centuries as a strategic hill fort guarding a historic trade route to Bhutan and Tibet. Under British colonial rule it was repurposed as a jail, where a number of Indian freedom fighters were held during the independence movement — a history that gives the trek a layer of significance beyond the scenery.",
  },
  {
    q: "How do I reach Buxa Tiger Reserve?",
    a: "The base town is Alipurduar, reachable from New Jalpaiguri (NJP) or Siliguri, roughly 170 km and about 4 hours by road. From Alipurduar, local transport covers the final stretch to entry points like Santalabari or Jayanti.",
  },
  {
    q: "Is Buxa Tiger Reserve open year-round?",
    a: "No — core forest areas are typically closed during the monsoon months of June to September for both safety and ecological reasons. November to April is the main open season, with October to February offering the best trekking weather.",
  },
  {
    q: "What is Jayanti and is it worth visiting?",
    a: "Jayanti is a scenic riverside village inside the reserve, once a popular resort spot, set beside the seasonal Jayanti river with a dramatic hill backdrop. It remains a worthwhile, quieter stop for its setting even though its infrastructure has scaled back over the years.",
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
  { id: "introduction", title: "A Tiger Reserve on the Bhutan Border", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Buxa", level: 2 },
  { id: "things-to-do", title: "Fort Trek, Jayanti & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BuxaGuidePage() {
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
              src="/images/destinations/meghalaya/hero.jpg"
              alt="Forested hills near the Bhutan border, evoking the landscape of Buxa Tiger Reserve"
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
                { label: "West Bengal", href: "/blog/west-bengal-travel-guide" },
                { label: "Buxa Tiger Reserve", href: null },
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
                "Buxa Tiger Reserve",
                "Dooars",
                "Buxa Fort",
                "Trekking",
                "Bhutan Border",
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
              Buxa Tiger Reserve: Fort Trek & Forest Safari Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A forested tiger reserve on the Bhutan border in the Dooars —
              a historic hilltop fort once used as a colonial-era prison,
              and some of North Bengal's best forest trekking.
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
                  text: "Alipurduar district, West Bengal",
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
                  <h2>A Tiger Reserve on the Bhutan Border</h2>
                  <p>
                    <strong>Buxa Tiger Reserve</strong> sits in the far
                    north of{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>
                    , in the forested Dooars belt where the plains rise into
                    the foothills of the eastern Himalaya and the border with
                    Bhutan. It's one of India's designated tiger reserves,
                    but ask anyone who's visited and they'll tell you the
                    same thing: this is a destination for forest, trekking,
                    and birdlife first, and tiger sightings a distant,
                    unlikely second.
                  </p>
                  <p>
                    The reserve's best-known landmark is{" "}
                    <strong>Buxa Fort</strong>, a hilltop fortification with
                    a history stretching back centuries as a guardpost on
                    trade routes toward Bhutan and Tibet. Under British rule
                    it was converted into a jail, and a number of Indian
                    freedom fighters were imprisoned here — a layer of
                    history that gives the trek up to its ruins real weight
                    beyond the forest scenery.
                  </p>
                  <p>
                    Inside the reserve, <strong>Jayanti</strong> — a village
                    beside a seasonal river of the same name — was once a
                    popular resort destination, and though its tourist
                    infrastructure has scaled back considerably, it remains
                    one of the most scenic spots in the reserve, framed by
                    forested hills on both sides.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Buxa Tiger Reserve at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Alipurduar district, West Bengal",
                        },
                        {
                          icon: "🚆",
                          label: "Base Town",
                          value: "Alipurduar (~170 km from NJP)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Apr" },
                        {
                          icon: "🏰",
                          label: "Known For",
                          value: "Buxa Fort Trek, Forest",
                        },
                        {
                          icon: "🐅",
                          label: "Tiger Sightings",
                          value: "Rare — come for the forest",
                        },
                        {
                          icon: "🇧🇹",
                          label: "Borders",
                          value: "Bhutan",
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
                  <h2>Best Time to Visit Buxa</h2>
                  <p>
                    Buxa's forest areas close for part of the year, so timing
                    a visit matters more here than at most Dooars
                    destinations.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and the most comfortable window for the Buxa Fort trek — clear skies also make for the best views from the fort and surrounding ridgelines.",
                      },
                      {
                        season: "Mar – Apr",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm but open",
                        text: "Increasingly warm but forest areas remain open, and this window can offer good birding as migratory patterns shift.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🚫",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — reserve typically closed",
                        text: "Core forest areas are usually closed to visitors during the monsoon for both safety and ecological reasons — plan around this window entirely.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🥾",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best trekking weather",
                        text: "The most reliable stretch for the Buxa Fort trek, with dry trails and cool temperatures that make the climb comfortable rather than gruelling.",
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
                    dry trails, cool trekking weather, and the reserve's core
                    forest areas fully open.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Buxa Tiger Reserve</h2>
                  <p>
                    Buxa is reached via Alipurduar, the main rail and road
                    hub for this part of North Bengal.
                  </p>
                  <ul>
                    <li>
                      <strong>By rail/road to Alipurduar:</strong> Alipurduar
                      is well connected by train and is roughly 170 km, about
                      4 hours by road, from New Jalpaiguri (NJP) or
                      Siliguri, the main gateway for North Bengal travel.
                    </li>
                    <li>
                      <strong>Onward to Santalabari or Jayanti:</strong> From
                      Alipurduar, local shared vehicles or hired taxis cover
                      the final stretch to the reserve's entry points —
                      Santalabari and Buxa Duar are the main starting points
                      for the fort trek, while Jayanti is a separate entry
                      further into the reserve.
                    </li>
                    <li>
                      <strong>Permits:</strong> Core-area entry requires
                      Forest Department permission, generally arranged
                      through the reserve's entry checkpoints or a local
                      guide/operator rather than needing separate advance
                      paperwork for most standard visits.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Base yourself in Alipurduar
                    or Santalabari the night before an early trek start —
                    reaching the fort and back comfortably in daylight is
                    much easier with an early departure.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Fort Trek, Jayanti & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/hero.jpg"
                      alt="Forest trail near Buxa Tiger Reserve, North Bengal"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Trek to Buxa Fort</h3>
                  <p>
                    The signature Buxa experience is the trek up to{" "}
                    <strong>Buxa Fort</strong>, usually starting from{" "}
                    <strong>Santalabari</strong> or{" "}
                    <strong>Buxa Duar</strong>, climbing steadily through
                    forest to the hilltop ruins. The fort's history — a
                    centuries-old guardpost later converted by the British
                    into a jail for political prisoners during the freedom
                    struggle — adds real historical weight to what is
                    already a rewarding forest walk with views out over the
                    Dooars plains.
                  </p>
                  <h3>Jayanti River & Village</h3>
                  <p>
                    Jayanti sits beside a seasonal riverbed inside the
                    reserve, framed by forested hills that made it a
                    once-thriving resort destination. Its infrastructure has
                    scaled back significantly over the years, but it remains
                    a scenic, quiet stop worth including for the setting
                    alone.
                  </p>
                  <h3>Wildlife & Birding</h3>
                  <p>
                    Buxa's real strength is biodiversity rather than
                    guaranteed tiger sightings — the reserve supports
                    elephants, gaur, and a wide range of forest birds, and is
                    increasingly recognised among birders for species that
                    are harder to find elsewhere in the Dooars. Come with
                    binoculars and reasonable expectations, and the forest
                    itself delivers even on days without a major wildlife
                    encounter.
                  </p>
                  <h3>Core-Area Restrictions</h3>
                  <p>
                    As with most tiger reserves, Buxa's core zone has
                    restricted access and requires permits and, for some
                    routes, a registered guide — a system that protects both
                    visitor safety and the reserve's more sensitive habitat.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Buxa</h2>
                  <p>
                    Accommodation is simple and forest-department-led in
                    much of the reserve, with more options available in and
                    around Alipurduar town.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Forest department lodges",
                          "Basic guesthouses in Santalabari",
                          "Simple lodges in Alipurduar town",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Eco-resorts near the reserve buffer",
                          "Tourism department properties",
                          "Homestays in Dooars villages nearby",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌲",
                        range: "₹4,500–₹9,000+/night",
                        picks: [
                          "Boutique forest-view resorts",
                          "Premium nature lodges near Alipurduar",
                          "Full-board packages with naturalist guides",
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
                  <h2>Suggested Visit Plan (2-3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Santalabari",
                        color: "bg-amber-700",
                        activities: [
                          "Travel from NJP/Siliguri to Alipurduar",
                          "Onward transfer to Santalabari, check in",
                          "Evening acclimatising walk near the base",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Buxa Fort Trek",
                        color: "bg-sky-600",
                        activities: [
                          "Early morning trek up to Buxa Fort",
                          "Explore the fort ruins and viewpoints",
                          "Descend and rest in the afternoon",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Jayanti & Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Morning visit to Jayanti river and village",
                          "Birding walk along the forest fringe",
                          "Return journey via Alipurduar",
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
                    * Many travellers combine Buxa with the wider{" "}
                    <Link href="/blog/dooars-travel-guide">Dooars</Link>{" "}
                    circuit, including{" "}
                    <Link href="/blog/gorumara-travel-guide">Gorumara</Link>{" "}
                    National Park and{" "}
                    <Link href="/blog/cooch-behar-travel-guide">
                      Cooch Behar
                    </Link>
                    , for a fuller North Bengal itinerary.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Buxa</h2>
                  <ul>
                    <li>
                      <strong>Lodge and homestay kitchens:</strong> Most
                      accommodation near the reserve serves simple home-style
                      meals to guests, the most reliable option given how few
                      standalone restaurants exist this close to the forest.
                    </li>
                    <li>
                      <strong>Alipurduar town:</strong> A wider spread of
                      restaurants and eateries for a proper meal before
                      heading into or after returning from the reserve.
                    </li>
                    <li>
                      <strong>Local tea and snack stalls:</strong> Simple
                      stalls near Santalabari and Buxa Duar cater to trekkers
                      heading up to the fort, useful for a quick breakfast or
                      tea break.
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
                          ["Accommodation/night", "₹1,200", "₹3,000", "₹7,000"],
                          ["Road transfer (NJP/Alipurduar round trip)", "₹1,500", "₹3,000", "₹5,000"],
                          ["Food/day", "₹500", "₹1,000", "₹2,200"],
                          ["Forest permit & entry fees", "₹200", "₹200", "₹200"],
                          ["Local guide (fort trek)", "₹600", "₹900", "₹1,500"],
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
                    * Figures are per person, per day (except road transfer,
                    a round trip figure). Guide fees are typically shared
                    across a small group.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Buxa</h2>
                  <ul>
                    <li>
                      <strong>Start the fort trek early:</strong> An early
                      morning start gives you cooler temperatures and enough
                      daylight to comfortably complete the climb and descent.
                    </li>
                    <li>
                      <strong>Hire a local guide:</strong> Forest trails
                      aren't always clearly marked, and a guide adds both
                      safety and historical context to the fort's story.
                    </li>
                    <li>
                      <strong>Lower your tiger-sighting expectations:</strong>{" "}
                      Come for the forest, the trek, and the birdlife — a
                      tiger sighting here is genuinely rare.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access is very limited
                      near the reserve — withdraw what you need in
                      Alipurduar or Siliguri first.
                    </li>
                    <li>
                      <strong>Avoid the monsoon entirely:</strong> Core
                      forest areas typically close from June to September —
                      confirm current status before planning a trip in this
                      window.
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
                          "Start the Buxa Fort trek early in the morning",
                          "Hire a local guide for the trek and forest walks",
                          "Carry binoculars for birding",
                          "Carry enough cash for the whole trip",
                          "Check reserve open status before planning your trip",
                          "Combine the visit with the wider Dooars circuit",
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
                          "Attempt core-zone trails without a permit or guide",
                          "Visit during the monsoon closure (Jun-Sep)",
                          "Expect wide ATM or card access near the reserve",
                          "Start the fort trek late in the day",
                          "Skip water and sun protection on the climb",
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
                    <strong>🗺️ Extend the trip:</strong> Buxa pairs naturally
                    with the wider{" "}
                    <Link href="/blog/dooars-travel-guide">Dooars</Link>{" "}
                    region, including{" "}
                    <Link href="/blog/gorumara-travel-guide">
                      Gorumara National Park
                    </Link>{" "}
                    and the royal history of{" "}
                    <Link href="/blog/cooch-behar-travel-guide">
                      Cooch Behar
                    </Link>
                    . See our full{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal travel guide
                    </Link>{" "}
                    for the wider region.
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
                  "Buxa Tiger Reserve",
                  "West Bengal",
                  "Dooars",
                  "Buxa Fort",
                  "Trekking",
                  "Bhutan Border",
                  "Wildlife",
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

              <RelatedPostsGrid currentSlug="buxa-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="buxa-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
