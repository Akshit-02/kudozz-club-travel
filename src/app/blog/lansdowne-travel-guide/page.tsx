// src/app/blog/lansdowne-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Lansdowne Travel Guide: Quiet Hills & Bhulla Lake",
  description:
    "Complete Lansdowne travel guide — the Garhwal Rifles cantonment town, Bhulla Lake, Tip N Top, St. Mary's Church, how to reach via Kotdwar, where to stay, and a full visit plan.",
  keywords:
    "Lansdowne Uttarakhand, Lansdowne travel guide, Bhulla Lake, Tip N Top Lansdowne, Garhwal Rifles, St Mary's Church Lansdowne, how to reach Lansdowne, Kotdwar to Lansdowne, Lansdowne best time to visit, Lansdowne hotels, quiet hill station Uttarakhand",
  openGraph: {
    title: "Lansdowne Travel Guide: Quiet Hills & Bhulla Lake",
    description:
      "A Garhwal Rifles cantonment town kept deliberately quiet — Bhulla Lake, Tip N Top, and thick oak-pine-deodar forest, one of Uttarakhand's least crowded hill stations.",
    url: "https://club.kudozz.in/blog/lansdowne-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/abbey-falls.jpg",
        width: 1200,
        height: 630,
        alt: "Forested cantonment hills of Lansdowne, Uttarakhand, wrapped in oak and pine",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lansdowne Travel Guide: Quiet Hills & Bhulla Lake",
    description:
      "Bhulla Lake, Tip N Top, and thick Garhwal forest — the complete guide to one of Uttarakhand's quietest hill towns.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/lansdowne-travel-guide",
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
          headline: "Lansdowne Travel Guide: Quiet Hills & Bhulla Lake",
          description:
            "Complete Lansdowne travel guide — the Garhwal Rifles cantonment town, Bhulla Lake, Tip N Top, St. Mary's Church, how to reach via Kotdwar, where to stay, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
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
            "@id": "https://club.kudozz.in/blog/lansdowne-travel-guide",
          },
          keywords:
            "Lansdowne, Bhulla Lake, Tip N Top, Garhwal Rifles, cantonment town, Uttarakhand",
          about: {
            "@type": "Place",
            name: "Lansdowne",
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
                name: "Lansdowne",
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
    q: "Why is Lansdowne so much quieter than other Uttarakhand hill stations?",
    a: "Lansdowne has been a Garhwal Rifles cantonment town since the British era, and large parts of it remain under Army control. Strict rules limit new hotel and commercial construction, which has deliberately kept the town small, low-rise, and free of the dense tourist infrastructure found in places like Mussoorie or Nainital.",
  },
  {
    q: "How do I reach Lansdowne?",
    a: "The nearest railway station is Kotdwar, about 40 km away and the most practical rail head, well connected to Delhi and Dehradun. From Kotdwar, shared taxis and cabs climb up to Lansdowne in roughly 1.5-2 hours. The nearest airport is Jolly Grant in Dehradun, about 140 km away.",
  },
  {
    q: "Is one day enough to see Lansdowne?",
    a: "You can hit the main sights — Bhulla Lake, Tip N Top, St. Mary's Church, and the War Memorial — in a single day, but Lansdowne's real appeal is unhurried forest walks and quiet, which a rushed day trip doesn't allow. Two nights is a better fit if you want to actually slow down.",
  },
  {
    q: "Are there restrictions on where I can go in Lansdowne?",
    a: "Yes. Since it's an active Army cantonment, several areas — military establishments, certain roads, and parts of the town after dark — are off-limits or restricted to civilians. Signage generally makes this clear, and locals and hotel staff can point out what's open to visitors.",
  },
  {
    q: "What is the Garhwali Regimental Museum?",
    a: "It's a small military museum run by the Garhwal Rifles regiment, tracing the history of Garhwali soldiers through both World Wars and later conflicts, including several Param Vir Chakra citations. It's a quick but worthwhile stop for anyone interested in the region's military history.",
  },
  {
    q: "Can I combine Lansdowne with other Uttarakhand hill stations?",
    a: "Yes — Lansdowne pairs well with Mussoorie or a Haridwar/Rishikesh loop, though it sits in a different direction from both, closer to Kotdwar and Corbett than to Dehradun's usual hill circuit. Most travellers treat it as a standalone quiet retreat rather than a stop on a bigger multi-town itinerary.",
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
  { id: "introduction", title: "A Cantonment Town Kept Quiet", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Lansdowne", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LansdowneGuidePage() {
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
              src="/images/destinations/coorg/abbey-falls.jpg"
              alt="Forested cantonment hills of Lansdowne, Uttarakhand, wrapped in oak and pine"
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
                { label: "Lansdowne", href: null },
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
                "Lansdowne",
                "Cantonment Town",
                "Bhulla Lake",
                "Off-beat",
                "Garhwal",
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
              Lansdowne: Quiet Hills, Bhulla Lake & a Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A Garhwal Rifles cantonment town kept deliberately low-key —
              thick oak, pine and deodar forest, a small boating lake, and
              some of the most unhurried hill air left in Uttarakhand.
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
                  text: "Pauri Garhwal, Uttarakhand",
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
                  <h2>A Cantonment Town Kept Quiet</h2>
                  <p>
                    <strong>Lansdowne</strong> is one of the last genuinely
                    quiet hill stations left in{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand
                    </Link>
                    , and it stays that way largely by design. Founded by the
                    British in 1887 as a garrison town for the Garhwal
                    Rifles, it remains an active Army cantonment today —
                    which means strict rules on construction and commercial
                    development have kept the town small, low-rise, and
                    largely free of the traffic and hotel sprawl found in
                    hill stations like{" "}
                    <Link href="/blog/mussoorie-travel-guide">Mussoorie</Link>.
                  </p>
                  <p>
                    There's no single blockbuster attraction here — instead,
                    Lansdowne offers a small boating lake, a couple of
                    viewpoints, a regimental museum, a handful of colonial-era
                    churches and monuments, and, above all, long walks through
                    dense oak, pine, and deodar forest with almost nobody else
                    around. It's a strong pick for travellers who want to
                    actively avoid crowds rather than just see fewer of them.
                  </p>
                  <p>
                    Because so much of the town falls under military control,
                    Lansdowne also feels unusually orderly and clean — wide,
                    quiet roads, well-maintained forest patches, and a slower
                    pace that's hard to find elsewhere within a few hours of
                    Delhi or Dehradun.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌲</span> Lansdowne at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Pauri Garhwal, Uttarakhand",
                        },
                        {
                          icon: "🚉",
                          label: "Nearest Rail",
                          value: "Kotdwar (~40 km)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Nov" },
                        {
                          icon: "🏞️",
                          label: "Known For",
                          value: "Bhulla Lake, Forest Walks",
                        },
                        {
                          icon: "🎖️",
                          label: "Character",
                          value: "Garhwal Rifles cantonment",
                        },
                        {
                          icon: "🏔️",
                          label: "Elevation",
                          value: "~1,700 m",
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
                  <h2>Best Time to Visit Lansdowne</h2>
                  <p>
                    Lansdowne's moderate elevation keeps it comfortable for
                    most of the year, though monsoon months bring landslide
                    risk on the approach roads.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant days and cool evenings, with rhododendrons in bloom through spring. Comfortable for the forest walks that are Lansdowne's biggest draw.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Clear skies, our other pick",
                        text: "Post-monsoon clarity gives some of the best long-distance views of the year, along with crisp, cool weather — a quieter alternative to spring.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Lush but risky roads",
                        text: "The forest turns a deep, saturated green and the town empties out further, but the road up from Kotdwar can see landslides and slippery stretches.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold, occasionally frosty",
                        text: "Winter is chilly with occasional light frost, and the forest walks take on a stark, bare-branch character. Fewer visitors, but pack warm layers.",
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
                    <strong>Our pick:</strong> March to June, or September to
                    November — both give clear, walkable weather without the
                    road risk that monsoon brings to the Kotdwar approach.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Lansdowne</h2>
                  <p>
                    Lansdowne sits off the state's main hill-station circuit,
                    which is part of why it stays quiet — it takes a
                    deliberate detour to get here.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> Jolly Grant Airport in
                      Dehradun is the nearest, roughly 140 km away, from
                      where you'll need a taxi for the rest of the journey.
                    </li>
                    <li>
                      <strong>By rail:</strong> Kotdwar railway station,
                      about 40 km away, is the nearest and most practical
                      rail head, with reasonably good connectivity to Delhi
                      and Dehradun.
                    </li>
                    <li>
                      <strong>By road:</strong> Shared taxis and private
                      cabs run from Kotdwar up to Lansdowne, climbing through
                      forested switchbacks in roughly 1.5-2 hours. Lansdowne
                      is also drivable directly from Delhi (around 6-7
                      hours) or Dehradun (around 5 hours).
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Kotdwar is the better rail
                    option over Kathgodam or Haridwar for Lansdowne
                    specifically — it cuts the road journey down to under two
                    hours instead of half a day.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Lansdowne</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/abbey-falls.jpg"
                      alt="Deodar and pine forest trail near Lansdowne, Uttarakhand"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Bhulla Lake</h3>
                  <p>
                    A small, man-made boating lake set in a forest clearing,
                    and the closest thing Lansdowne has to a central
                    attraction. It's unhurried rather than dramatic — pedal
                    boats, a walking path around the water, and a few benches
                    for sitting with the quiet. Come in the late afternoon
                    for the softest light.
                  </p>
                  <h3>Tip N Top Viewpoint</h3>
                  <p>
                    A short walk or drive from the town centre, Tip N Top
                    opens onto layered views of the Garhwal foothills — on a
                    clear post-monsoon day, the visibility stretches
                    impressively far. It's one of the few spots in Lansdowne
                    with a genuinely wide-open outlook, since the rest of the
                    town sits tucked inside forest.
                  </p>
                  <h3>St. Mary's Church & War Memorial</h3>
                  <p>
                    A colonial-era church built for the garrison, now partly
                    repurposed, standing near a war memorial that honours
                    Garhwal Rifles soldiers. Both sit within easy walking
                    distance of the main market and make for a quiet half
                    hour among old stone and pine.
                  </p>
                  <h3>Garhwali Regimental Museum</h3>
                  <p>
                    Run by the Garhwal Rifles, this small museum traces the
                    regiment's history through both World Wars and later
                    conflicts, including exhibits on Param Vir Chakra
                    recipients from the regiment. Photography rules are
                    strict inside, but it's a genuinely interesting stop for
                    anyone curious about the town's military identity.
                  </p>
                  <h3>Forest Walks</h3>
                  <p>
                    The real reason to come to Lansdowne. Trails wind through
                    dense oak, pine, and deodar cover on the town's edges,
                    with birdsong (the area is known among birders) often the
                    only sound for long stretches. No fixed itinerary is
                    needed — simply picking a forest road out of town and
                    walking is the point.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Lansdowne</h2>
                  <p>
                    Because of cantonment construction rules, Lansdowne's
                    hotel stock is smaller and less commercial than most hill
                    stations its size — book ahead on weekends and in peak
                    season, since options fill quickly.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,800/night",
                        picks: [
                          "Simple guesthouses near the market",
                          "GMVN forest rest houses",
                          "Basic lodges close to the bus stand",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Forest-view hotels on the ridge",
                          "Family-run cottages",
                          "Small heritage-style properties",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹8,000–₹18,000/night",
                        picks: [
                          "Boutique resorts near Tip N Top",
                          "Private forest-edge cottages",
                          "Upscale nature retreats outside town",
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
                        title: "Arrival & Town Sights",
                        color: "bg-amber-700",
                        activities: [
                          "Morning taxi up from Kotdwar, check in",
                          "Afternoon at Bhulla Lake and the market",
                          "Evening visit to St. Mary's Church and the War Memorial",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Viewpoints & Forest Walks",
                        color: "bg-forest-600",
                        activities: [
                          "Early morning walk on one of the forest trails",
                          "Late morning at Tip N Top viewpoint",
                          "Afternoon at the Garhwali Regimental Museum before departure",
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
                    * Travellers with more time often combine Lansdowne with
                    a longer loop through{" "}
                    <Link href="/blog/haridwar-travel-guide">Haridwar</Link>{" "}
                    and{" "}
                    <Link href="/blog/mussoorie-travel-guide">Mussoorie</Link>
                    , though it takes a deliberate detour off that circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Lansdowne</h2>
                  <ul>
                    <li>
                      <strong>Simple market-area dhabas:</strong> Basic
                      North Indian and Garhwali thalis, dal-rice, and
                      Maggi-style quick meals near the main bazaar.
                    </li>
                    <li>
                      <strong>Hotel dining rooms:</strong> Most mid-range and
                      luxury stays run their own restaurants, generally the
                      most reliable option for dinner given limited standalone
                      eateries in town.
                    </li>
                    <li>
                      <strong>Local Garhwali food:</strong> Where available,
                      look for regional dishes like mandua (finger millet)
                      rotis, bhatt ki churkani (black soybean curry), and
                      aloo ke gutke — a nice change from generic hill-station
                      menus.
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
                          ["Accommodation/night", "₹1,800", "₹4,200", "₹12,000"],
                          ["Kotdwar taxi (one-way)", "₹800", "₹1,200", "₹1,800"],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          ["Museum & local sightseeing", "₹150", "₹300", "₹500"],
                          ["Local transport/day", "₹300", "₹600", "₹1,200"],
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
                    * Figures are per person, per day, in INR. Kotdwar taxi
                    fare is a one-way estimate for the ~40 km climb.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Lansdowne</h2>
                  <ul>
                    <li>
                      <strong>Book ahead on weekends:</strong> The limited
                      hotel stock fills quickly given how few rooms the town
                      actually has, even though overall footfall is low.
                    </li>
                    <li>
                      <strong>Respect cantonment restrictions:</strong> Some
                      areas are off-limits to civilians or restricted after
                      dark — follow posted signage and hotel staff advice.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access is limited in
                      this small a town — withdraw what you need before
                      arriving, ideally in Kotdwar or Dehradun.
                    </li>
                    <li>
                      <strong>Pack layers year-round:</strong> Evenings stay
                      cool even in summer given the elevation and forest
                      cover.
                    </li>
                    <li>
                      <strong>Don't expect nightlife or big markets:</strong>{" "}
                      Lansdowne's appeal is quiet and forest, not
                      entertainment or shopping — come with that expectation.
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
                          "Book your stay ahead of weekends",
                          "Set aside time for unplanned forest walks",
                          "Carry enough cash for the whole trip",
                          "Visit Tip N Top on a clear post-monsoon day",
                          "Respect cantonment area boundaries",
                          "Try local Garhwali dishes where available",
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
                          "Expect Mussoorie-style malls or nightlife",
                          "Enter restricted military areas",
                          "Rely on ATMs being available",
                          "Rush the visit into a single-day trip",
                          "Skip warm layers even in summer evenings",
                          "Assume walk-in rooms on a peak weekend",
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
                    <strong>🗺️ Extend the trip:</strong> Many travellers pair
                    Lansdowne with a stop at{" "}
                    <Link href="/blog/haridwar-travel-guide">Haridwar</Link>{" "}
                    on the way back toward Delhi, or continue on to{" "}
                    <Link href="/blog/mussoorie-travel-guide">Mussoorie</Link>{" "}
                    for a busier hill-station contrast after Lansdowne's
                    quiet.
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
                  "Lansdowne",
                  "Uttarakhand",
                  "Garhwal",
                  "Cantonment Town",
                  "Off-beat",
                  "Bhulla Lake",
                  "Quiet Hill Station",
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

              <RelatedPostsGrid currentSlug="lansdowne-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="lansdowne-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
