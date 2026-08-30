// src/app/blog/tughlaqabad-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tughlaqabad Fort Travel Guide: Delhi's Cursed City",
  description:
    "Complete guide to Tughlaqabad Fort — Delhi's massive, mostly-empty 14th-century ruins built by Ghiyasuddin Tughlaq, the legend of Nizamuddin Auliya's curse, how to reach it, and what to see inside.",
  keywords:
    "Tughlaqabad Fort, Tughlaqabad Delhi, Ghiyasuddin Tughlaq, Tughlaqabad curse, Nizamuddin Auliya curse, Tughlaqabad metro, Delhi ruins, Tughlaqabad tomb, Delhi third city, Delhi Sultanate monuments, South Delhi heritage sites",
  openGraph: {
    title: "Tughlaqabad Fort Travel Guide: Delhi's Cursed City",
    description:
      "Massive sloping ramparts, 13 gates, an underground citadel, and the legend of a Sufi saint's curse — inside Delhi's most dramatic and least-visited fort ruins.",
    url: "https://club.kudozz.in/blog/tughlaqabad-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Massive sloping stone fort ramparts at golden hour, evoking Tughlaqabad Fort's imposing 14th-century walls",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tughlaqabad Fort Travel Guide: Delhi's Cursed City",
    description:
      "Massive sloping ramparts, 13 gates, and the legend of a Sufi saint's curse — inside Delhi's most dramatic and least-visited fort ruins.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/tughlaqabad-delhi-travel-guide",
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
          headline: "Tughlaqabad Fort Travel Guide: Delhi's Cursed City",
          description:
            "Complete guide to Tughlaqabad Fort — Delhi's massive, mostly-empty 14th-century ruins built by Ghiyasuddin Tughlaq, the legend of Nizamuddin Auliya's curse, how to reach it, and what to see inside.",
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
            "@id": "https://club.kudozz.in/blog/tughlaqabad-delhi-travel-guide",
          },
          keywords:
            "Tughlaqabad Fort, Tughlaqabad Delhi, Ghiyasuddin Tughlaq, Tughlaqabad curse, Nizamuddin Auliya curse, Tughlaqabad metro, Delhi ruins",
          about: {
            "@type": "Place",
            name: "Tughlaqabad",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tughlaqabad",
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
                name: "Tughlaqabad",
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
    q: "Is Tughlaqabad Fort worth visiting?",
    a: "Yes, especially if you enjoy ruins without the crowds. Tughlaqabad is one of Delhi's largest fort complexes, with massive sloping ramparts and 13 gates, yet it sees a fraction of the visitors of Red Fort or Qutub Minar. The trade-off is that it's less manicured and less maintained — go for the atmosphere and scale, not polished museum-style presentation.",
  },
  {
    q: "What is the legend of Tughlaqabad?",
    a: "According to well-known Delhi folklore, Sufi saint Nizamuddin Auliya was building a stepwell (baoli) using labourers whom Sultan Ghiyasuddin Tughlaq had also conscripted for his new fort. When the Sultan restricted the labourers' working hours to slow the saint's project, Nizamuddin Auliya is said to have remarked that Tughlaqabad would remain deserted, inhabited only by Gujjars (shepherds/herders) — 'Ya rahe ujar, ya base Gujjar.' This is popular legend and folklore, not a verified historical record, but it's genuinely part of how Delhiites talk about the site to this day.",
  },
  {
    q: "Is Tughlaqabad Fort safe to visit alone?",
    a: "It's generally safe during daylight hours, but it's far less monitored and far less crowded than Red Fort or Qutub Minar, with large stretches of ruins, underground passages, and uneven terrain. We'd recommend visiting with at least one other person, sticking to daylight hours, and avoiding the more remote, overgrown sections alone.",
  },
  {
    q: "How do I reach Tughlaqabad Fort by metro?",
    a: "Take the Violet Line to Tughlaqabad station, which sits close to the fort. From the station it's a short auto-rickshaw ride or a 15–20 minute walk to the main entrance, depending on which exit you take and the day's heat.",
  },
  {
    q: "How much time do I need at Tughlaqabad Fort?",
    a: "Budget 1.5 to 2 hours for a thorough walk through the citadel, ramparts, and main gates. Photographers and history enthusiasts who also want to cross the road to Ghiyasuddin Tughlaq's tomb should allow closer to 2.5–3 hours total.",
  },
  {
    q: "Is there an entry fee for Tughlaqabad Fort?",
    a: "Yes, Tughlaqabad Fort is an ASI-protected monument with a nominal entry fee for Indian nationals and a higher fee for foreign nationals, similar to most other ASI sites in Delhi. Fees are revised periodically, so it's worth confirming the current rate at the ticket counter.",
  },
  {
    q: "Can I visit Tughlaqabad Fort and the tomb of Ghiyasuddin Tughlaq together?",
    a: "Yes — the fortified tomb sits just across the road from the main fort complex, originally connected to it by a causeway. Most visitors combine both in a single trip, and it's a short, easy walk between the two.",
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
  { id: "introduction", title: "Delhi's Third City", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tughlaqabad", level: 2 },
  { id: "ramparts-gates", title: "The Ramparts & 13 Gates", level: 2 },
  { id: "the-curse", title: "The Legend of the Curse", level: 2 },
  { id: "tomb", title: "Ghiyasuddin Tughlaq's Tomb", level: 2 },
  { id: "whats-inside", title: "What's Inside the Ruins", level: 2 },
  { id: "photography", title: "Photography Tips", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat Nearby", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TughlaqabadGuidePage() {
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
              alt="Massive sloping stone fort ramparts at golden hour, evoking Tughlaqabad Fort's imposing 14th-century walls"
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
                { label: "Tughlaqabad", href: null },
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
                "Tughlaqabad",
                "Delhi",
                "Fort Ruins",
                "Delhi Sultanate",
                "Heritage",
                "Off-Beat Delhi",
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
              Tughlaqabad Fort: Delhi's Cursed City of Ruins
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A 14th-century capital built in a handful of years and
              abandoned within decades — massive sloping ramparts, 13 gates,
              and a legend of a saint's curse, sitting almost empty just
              off the Delhi Metro's Violet Line.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "12 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Tughlaqabad, South Delhi",
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
                  <h2>Delhi's Third City</h2>
                  <p>
                    Most visitors to{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi</Link> never
                    make it to <strong>Tughlaqabad</strong> — and that's
                    exactly what makes it worth the detour. Built between{" "}
                    <strong>1321 and 1325</strong> by{" "}
                    <strong>Sultan Ghiyasuddin Tughlaq</strong>, founder of
                    the Tughlaq dynasty, Tughlaqabad was the third of
                    Delhi's medieval "cities" — an entire fortified capital
                    raised in just a few frantic years of construction. It
                    was also, remarkably, abandoned within a couple of
                    decades of being built, leaving behind one of the most
                    atmospheric, underrated ruins anywhere in India.
                  </p>
                  <p>
                    Where Red Fort and Qutub Minar draw steady streams of
                    tour groups, Tughlaqabad's colossal stone ramparts —
                    stretching for kilometres across a rocky, scrub-covered
                    ridge — sit largely empty on most days. It's a strange,
                    slightly eerie feeling: walking through gate after
                    gate of a city built to house an empire, with almost no
                    one else around except the occasional local, a langur
                    troop, or a photographer chasing the light.
                  </p>
                  <p>
                    That emptiness has a story behind it — a genuine, widely
                    told piece of Delhi folklore involving a Sufi saint, a
                    labour dispute, and a curse that's stuck to the site for
                    seven centuries. We'll get to that. First, the
                    practical basics.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Tughlaqabad at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Delhi, near Badarpur",
                        },
                        {
                          icon: "🏗️",
                          label: "Built",
                          value: "1321–1325 CE",
                        },
                        {
                          icon: "👑",
                          label: "Built By",
                          value: "Sultan Ghiyasuddin Tughlaq",
                        },
                        {
                          icon: "🚇",
                          label: "Nearest Metro",
                          value: "Tughlaqabad (Violet Line)",
                        },
                        {
                          icon: "🏛️",
                          label: "Status",
                          value: "ASI-protected monument",
                        },
                        {
                          icon: "⏱️",
                          label: "Visit Duration",
                          value: "1.5 – 2 hours",
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
                  <h2>Best Time to Visit Tughlaqabad</h2>
                  <p>
                    Tughlaqabad is almost entirely outdoors, exposed, and
                    largely unshaded — a rocky, open ridge with very little
                    tree cover across most of the citadel. Timing your visit
                    matters more here than at monuments with covered
                    interiors or shaded gardens.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry days make the long, exposed walk across the ramparts genuinely pleasant, and the low winter light is excellent for photography.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — avoid if possible",
                        text: "The exposed stone ramparts trap and radiate heat brutally by mid-morning — visit only at first light or skip this window.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — dramatic but slippery",
                        text: "Monsoon greenery against grey stone is striking, but weathered steps and uneven surfaces get slick — wear grippy shoes.",
                      },
                      {
                        season: "Early morning",
                        emoji: "🌅",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Best hours, any season",
                        text: "Aim to arrive shortly after opening — cooler temperatures, softer light, and the fewest people, since Tughlaqabad is never really crowded.",
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
                    <strong>Our pick:</strong> a weekday morning between
                    November and February. You'll likely have long stretches
                    of the ramparts entirely to yourself.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Tughlaqabad</h2>
                  <p>
                    Tughlaqabad sits in South Delhi near Badarpur, and is
                    genuinely easy to reach thanks to a dedicated metro
                    station right next to it — one reason there's no excuse
                    for it to stay as under-visited as it is.
                  </p>
                  <ul>
                    <li>
                      <strong>By Metro:</strong> Take the{" "}
                      <strong>Violet Line</strong> to{" "}
                      <strong>Tughlaqabad station</strong>, which sits close
                      to the fort. It's the single easiest way in from
                      almost anywhere in Delhi, avoiding traffic entirely.
                    </li>
                    <li>
                      <strong>From the station:</strong> A short
                      auto-rickshaw ride (a few minutes) or a 15–20 minute
                      walk covers the distance to the main entrance,
                      depending on the exit and the day's heat.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected via the
                      Mehrauli-Badarpur Road; a cab or app-based ride from
                      central Delhi typically takes 40–60 minutes depending
                      on traffic.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Combine Tughlaqabad with a
                    trip to{" "}
                    <Link href="/blog/mehrauli-delhi-travel-guide">
                      Mehrauli
                    </Link>{" "}
                    on the same day — both are dense with Delhi Sultanate-era
                    ruins and sit within a reasonable drive of each other in
                    South Delhi.
                  </div>
                </section>

                {/* ── Ramparts & Gates ──────────────────────────────────── */}
                <section id="ramparts-gates">
                  <h2>The Massive Ramparts & 13 Gates</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Weathered stone fortress walls reminiscent of Tughlaqabad's sloping ramparts and battlements"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    What makes Tughlaqabad genuinely striking isn't any
                    single structure — it's the sheer scale of the fortification.
                    The fort's walls are built from massive, roughly hewn
                    stone blocks, rising in a steep, deliberate{" "}
                    <strong>sloping (battered) profile</strong> rather than
                    standing straight up, giving them both strength against
                    siege and an unmistakable, imposing silhouette against
                    the sky.
                  </p>
                  <p>
                    The citadel was originally ringed by{" "}
                    <strong>13 gates</strong>, most of which survive today
                    in varying states of ruin — some collapsed, others
                    still standing tall enough to walk beneath. Walking the
                    circuit gives a real sense of the city's original scale:
                    Tughlaqabad wasn't a fort in the sense of a single
                    palace-and-wall complex, but a genuine fortified city,
                    with a separate walled citadel and adjoining palace area
                    within the larger perimeter.
                  </p>
                  <p>
                    The stonework has weathered heavily over seven centuries
                    — much of it is bare, sun-bleached, and overgrown with
                    scrub in places — but that roughness is part of the
                    appeal. Unlike the more restored monuments elsewhere in
                    Delhi, Tughlaqabad feels closer to an actual ruin than a
                    curated heritage site.
                  </p>
                </section>

                {/* ── The Curse ─────────────────────────────────────────── */}
                <section id="the-curse">
                  <h2>The Legend of the Curse</h2>
                  <p>
                    No account of Tughlaqabad is complete without its most
                    famous story — a piece of local folklore that's been
                    retold in Delhi for generations, and one worth framing
                    clearly:{" "}
                    <strong>
                      this is popular legend, not documented historical
                      fact
                    </strong>
                    , though it's genuine, well-known lore that shapes how
                    most Delhiites talk about the site.
                  </p>
                  <p>
                    According to the story, Sultan Ghiyasuddin Tughlaq was
                    racing to build his new fortified capital using a large
                    labour force, at roughly the same time the revered Sufi
                    saint{" "}
                    <strong>Nizamuddin Auliya</strong>, based in nearby{" "}
                    <Link href="/blog/south-delhi-travel-guide">
                      South Delhi
                    </Link>
                    , was having a stepwell (baoli) dug near his own dargah
                    using the same pool of labourers. When the Sultan issued
                    an order restricting the labourers' working hours —
                    reportedly to slow the saint's project and keep them
                    focused on his fort — Nizamuddin Auliya is said to have
                    responded with a curse, now famous as a short couplet:{" "}
                    <em>"Ya rahe ujar, ya base Gujjar"</em> — roughly, "either
                    it will remain deserted, or be inhabited only by
                    Gujjars (herders/shepherds)."
                  </p>
                  <p>
                    Whatever the historical truth behind the tale, the
                    coincidence that followed is real enough to have fueled
                    the legend for seven hundred years: Tughlaqabad was
                    abandoned as a capital within a matter of decades,
                    reportedly due to water shortages and strategic
                    concerns rather than any curse — yet the story has
                    outlived the mundane explanations, and locals still
                    reference it when talking about the ruins today.
                  </p>
                  <blockquote>
                    Treat the curse as what it is — a rich piece of Delhi
                    folklore that adds atmosphere to an already atmospheric
                    site, not a historical claim to take literally.
                  </blockquote>
                </section>

                {/* ── Tomb ──────────────────────────────────────────────── */}
                <section id="tomb">
                  <h2>Ghiyasuddin Tughlaq's Tomb</h2>
                  <p>
                    Directly across the road from the main fort complex
                    stands the <strong>fortified mausoleum of Ghiyasuddin
                    Tughlaq</strong> himself — a compact, sand-coloured tomb
                    with sloping walls that echo the fort's own architecture,
                    set within its own small fortified enclosure.
                    Originally, the tomb was connected to the main citadel
                    by a raised <strong>causeway</strong> running across
                    what was once a lake or reservoir, a striking piece of
                    engineering for its time — much of that causeway
                    survives and is still walkable today.
                  </p>
                  <p>
                    The tomb complex is smaller and more intimate than the
                    sprawling fort, and its architecture is considered an
                    important transitional style in Indo-Islamic
                    architecture — the sloping battered walls, red sandstone
                    with white marble accents, and fortress-like solidity
                    set a template that later Tughlaq and Lodi-era tombs
                    across Delhi would continue to draw from.
                  </p>
                  <p>
                    Most visitors combine the fort and tomb in a single
                    trip — it's a short, easy walk across the road, and
                    skipping it means missing one of the site's most
                    photogenic and historically significant structures.
                  </p>
                </section>

                {/* ── What's Inside ─────────────────────────────────────── */}
                <section id="whats-inside">
                  <h2>What's Inside the Ruins Today</h2>
                  <p>
                    Beyond the outer ramparts and gates, the interior of
                    Tughlaqabad is a genuine maze of ruined structures worth
                    exploring slowly and carefully.
                  </p>
                  <ul>
                    <li>
                      <strong>The citadel:</strong> A separate, more heavily
                      fortified inner area believed to have housed the royal
                      palace and administrative buildings — the highest,
                      most defensible point within the larger city walls.
                    </li>
                    <li>
                      <strong>Baolis (stepwells):</strong> Several stepwells
                      survive in ruined form within the complex, remnants of
                      the water-management systems the city depended on —
                      and, by some accounts, a contributing factor in its
                      eventual abandonment when water supply proved
                      insufficient.
                    </li>
                    <li>
                      <strong>Underground passages:</strong> Various
                      tunnel-like passages and vaulted underground chambers
                      run beneath sections of the citadel, thought to have
                      served as storage, escape routes, or defensive
                      features — atmospheric, if not always well-lit or
                      clearly signposted.
                    </li>
                    <li>
                      <strong>Collapsed palace structures:</strong>{" "}
                      Fragments of walls, arched doorways, and platform
                      foundations scattered throughout the site hint at the
                      scale of what once stood here, even though most
                      structures are reduced to their bases.
                    </li>
                  </ul>
                  <p>
                    Much of the interior is genuinely overgrown and
                    unmarked — there's minimal signage compared to Delhi's
                    more famous monuments, which is part of the appeal for
                    some visitors and a frustration for others expecting a
                    curated experience.
                  </p>
                </section>

                {/* ── Photography ───────────────────────────────────────── */}
                <section id="photography">
                  <h2>Photography Tips</h2>
                  <p>
                    Tughlaqabad is, without exaggeration, one of the best
                    photography locations in Delhi for anyone who prefers
                    dramatic, empty ruins over crowded monument shots.
                  </p>
                  <ul>
                    <li>
                      <strong>Golden hour on the ramparts:</strong> The
                      sloping stone walls catch low sunlight beautifully in
                      the first and last hour of daylight — the texture of
                      the weathered stone really comes through.
                    </li>
                    <li>
                      <strong>Wide shots of the gates:</strong> Several of
                      the surviving gates frame dramatic sightlines through
                      to the ruins beyond — a wide-angle lens is genuinely
                      useful here.
                    </li>
                    <li>
                      <strong>Scale shots:</strong> Include a person in the
                      frame near the ramparts wherever possible — the walls
                      are tall enough that scale is easy to lose without a
                      human reference point.
                    </li>
                    <li>
                      <strong>The causeway to the tomb:</strong> An
                      atmospheric, less-obvious shot most visitors miss —
                      worth the short detour across the road.
                    </li>
                    <li>
                      <strong>Empty frames:</strong> Because footfall is so
                      low, you can often get entirely people-free wide shots
                      of the ruins, which is genuinely rare at any major
                      Delhi monument.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <p>
                    A focused visit to Tughlaqabad Fort and the adjoining
                    tomb comfortably fits into <strong>1.5 to 2 hours</strong>,
                    making it an easy half-day add-on to a broader South
                    Delhi itinerary.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0:00",
                        title: "Arrive & Enter the Citadel",
                        color: "bg-amber-700",
                        activities: [
                          "Buy tickets at the main entrance",
                          "Walk through the outer gates into the citadel area",
                          "Get oriented — the site is large and mostly unsignposted",
                        ],
                      },
                      {
                        day: "0:30",
                        title: "Walk the Ramparts",
                        color: "bg-forest-600",
                        activities: [
                          "Follow the walls past several of the 13 gates",
                          "Explore baolis and underground passages carefully",
                          "Stop for photos at golden-hour angles if timed right",
                        ],
                      },
                      {
                        day: "1:15",
                        title: "Cross to the Tomb",
                        color: "bg-sky-600",
                        activities: [
                          "Walk the surviving causeway or road crossing",
                          "Visit Ghiyasuddin Tughlaq's fortified mausoleum",
                          "Photograph the sloping tomb architecture",
                        ],
                      },
                      {
                        day: "1:45",
                        title: "Wrap Up",
                        color: "bg-stone-600",
                        activities: [
                          "Head back toward Tughlaqabad metro station",
                          "Grab food nearby before heading onward",
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

                  <blockquote>
                    Pair this with a visit to{" "}
                    <Link href="/blog/mehrauli-delhi-travel-guide">
                      Mehrauli's archaeological park
                    </Link>{" "}
                    the same day — both sit in{" "}
                    <Link href="/blog/south-delhi-travel-guide">
                      South Delhi
                    </Link>{" "}
                    and together make for one of the richest heritage days
                    in the entire city.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Nearby</h2>
                  <p>
                    Tughlaqabad itself is a quiet, largely residential and
                    industrial pocket of South Delhi — don't expect a food
                    scene at the monument gates the way you would near Red
                    Fort or Humayun's Tomb.
                  </p>
                  <ul>
                    <li>
                      <strong>Local dhabas near the station:</strong> Simple,
                      inexpensive North Indian food is available around the
                      Tughlaqabad metro station and along the main road —
                      fine for a quick meal, not a destination in itself.
                    </li>
                    <li>
                      <strong>Head into South Delhi proper:</strong> For a
                      wider choice of restaurants and cafés, plan to eat in
                      neighbourhoods like Saket, Hauz Khas, or Greater Kailash
                      after your visit — all a reasonable drive or metro ride
                      away.
                    </li>
                    <li>
                      <strong>Carry snacks and water:</strong> Given the lack
                      of food options right at the site and the exposed,
                      sun-heavy walk inside, it's worth carrying your own
                      water and light snacks rather than relying on finding
                      something nearby.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Tughlaqabad is one of the cheapest heritage visits in
                    Delhi — the main costs are entry tickets and transport,
                    with no real spending pressure once you're inside.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
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
                            "Entry ticket (Indian nationals)",
                            "₹25–₹40",
                            "₹25–₹40",
                            "₹25–₹40",
                          ],
                          [
                            "Transport (metro/auto/cab)",
                            "₹60",
                            "₹250",
                            "₹600",
                          ],
                          ["Food/snacks", "₹150", "₹400", "₹900"],
                          ["Photography gear/rental", "₹0", "₹0–500", "₹1,000+"],
                          ["Total (half-day trip)", "₹250", "₹700", "₹2,500+"],
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
                    * Entry fees are typically higher for foreign nationals
                    and are revised periodically — confirm current rates at
                    the ticket counter. Prices exclude travel to Delhi
                    itself.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Tughlaqabad</h2>
                  <ul>
                    <li>
                      <strong>Wear proper walking shoes:</strong> The terrain
                      inside is genuinely uneven — loose stone, broken steps,
                      and unmarked drops in places. Sandals or flip-flops
                      are a bad idea here.
                    </li>
                    <li>
                      <strong>Go with at least one other person:</strong>{" "}
                      Tughlaqabad is far less monitored and far less
                      crowded than Red Fort or Qutub Minar — safer and more
                      enjoyable explored with company, especially in the
                      more remote sections.
                    </li>
                    <li>
                      <strong>Carry water:</strong> There's minimal shade and
                      few facilities inside the complex, so bring enough
                      water for the full 1.5–2 hour visit.
                    </li>
                    <li>
                      <strong>Avoid climbing unstable structures:</strong>{" "}
                      Some walls and passages are genuinely fragile after
                      seven centuries — admire from a safe distance rather
                      than climbing on ruins.
                    </li>
                    <li>
                      <strong>Start early:</strong> Both for cooler
                      temperatures and better light — Tughlaqabad's open,
                      shadeless layout gets uncomfortable fast once the sun
                      is high.
                    </li>
                    <li>
                      <strong>Combine it with nearby sites:</strong> Pair
                      the visit with{" "}
                      <Link href="/blog/mehrauli-delhi-travel-guide">
                        Mehrauli
                      </Link>{" "}
                      or a broader{" "}
                      <Link href="/blog/south-delhi-travel-guide">
                        South Delhi
                      </Link>{" "}
                      heritage day to make the most of the trip out.
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
                          "Visit early morning for cooler weather and best light",
                          "Wear sturdy, grippy walking shoes",
                          "Carry water — there's little shade inside",
                          "Cross the road to see Ghiyasuddin Tughlaq's tomb",
                          "Visit with at least one other person",
                          "Combine with Mehrauli for a fuller heritage day",
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
                          "Visit alone late in the day or near closing time",
                          "Climb on unstable or weathered ruins",
                          "Expect food stalls or shade at the site itself",
                          "Wander unmarked underground passages without light",
                          "Rely on finding water once inside — carry your own",
                          "Treat the curse legend as verified history",
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
                    <strong>🗺️ Extend the trip:</strong> Tughlaqabad pairs
                    naturally with a broader{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi</Link>{" "}
                    itinerary — most visitors slot it in as a half-day
                    detour alongside the city's better-known Mughal and
                    Sultanate monuments.
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
                  "Tughlaqabad",
                  "Delhi",
                  "Fort Ruins",
                  "Delhi Sultanate",
                  "Ghiyasuddin Tughlaq",
                  "Heritage",
                  "Off-Beat Delhi",
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

              <RelatedPostsGrid currentSlug="tughlaqabad-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="tughlaqabad-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
