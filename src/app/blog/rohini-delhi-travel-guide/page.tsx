// src/app/blog/rohini-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Rohini Delhi Guide: Japanese Park & Family Outings",
  description:
    "A practical Rohini guide — Delhi's huge DDA residential sub-city known for Japanese Park, Adventure Island, and extensive Metro coverage, not for heritage sightseeing.",
  keywords:
    "Rohini Delhi, Rohini travel guide, Japanese Park Rohini, Adventure Island Rohini, Rohini Metro, Rohini sectors, North West Delhi, Rohini Delhi family outing, DDA Rohini, Rohini Red Line Yellow Line",
  openGraph: {
    title: "Rohini Delhi Guide: Japanese Park & Family Outings",
    description:
      "Delhi's sprawling DDA-planned residential sub-city — Japanese Park, Adventure Island, extensive Metro coverage, and an honest look at what Rohini actually offers travellers.",
    url: "https://club.kudozz.in/blog/rohini-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Generic representative Indian heritage and landscape imagery — Rohini itself has no comparable monument; it's a modern planned residential sub-city",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohini Delhi Guide: Japanese Park & Family Outings",
    description:
      "Delhi's sprawling DDA-planned residential sub-city — Japanese Park, Adventure Island, and an honest look at what Rohini actually offers travellers.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/rohini-delhi-travel-guide",
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
          headline: "Rohini Delhi Guide: Japanese Park & Family Outings",
          description:
            "A practical Rohini guide — Delhi's huge DDA residential sub-city known for Japanese Park, Adventure Island, and extensive Metro coverage, not for heritage sightseeing.",
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
            "@id": "https://club.kudozz.in/blog/rohini-delhi-travel-guide",
          },
          keywords:
            "Rohini Delhi, Japanese Park Rohini, Adventure Island Rohini, Rohini Metro, Rohini sectors, North West Delhi",
          about: {
            "@type": "Place",
            name: "Rohini",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Rohini",
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
                name: "Rohini",
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
    q: "What is Rohini famous for?",
    a: "Rohini is primarily known as one of Delhi's largest DDA-developed residential sub-cities — not as a tourist destination. Within that, it's best known locally for Japanese Park, one of North Delhi's most popular family picnic spots, and Adventure Island, a DMRC-run amusement park, along with its size, its numbered-sector layout, and its extensive Metro coverage.",
  },
  {
    q: "Is Japanese Park in Rohini worth visiting?",
    a: "Yes, if you're after a relaxed family outing rather than a heritage sight. It's a large, well-landscaped public park with a musical fountain, paddle boats, and walking paths, and it's genuinely one of the more popular weekend picnic spots in North West Delhi for local families. It isn't a monument or a must-see for out-of-town tourists, but it's a pleasant few hours if you're already in the area.",
  },
  {
    q: "How do I reach Adventure Island Rohini?",
    a: "Adventure Island is located inside the Metro Walk mall complex in Sector 10, Rohini, and is easiest to reach via Rohini West on the Delhi Metro Red Line, followed by a short auto or walk. It's run by the Delhi Metro Rail Corporation (DMRC) and is one of North Delhi's larger amusement parks, with rides for both younger children and older kids/teens.",
  },
  {
    q: "Is Rohini a good area to stay in Delhi?",
    a: "For most tourists visiting Delhi's monuments and markets, Rohini isn't the most convenient base — it sits in North West Delhi, some distance from Old Delhi and South Delhi's main sights. But it's a genuinely practical, well-connected, largely residential area, popular with people who live and work in Delhi, with good Metro access, established markets, and a mix of housing across its many sectors.",
  },
  {
    q: "Which Metro lines serve Rohini?",
    a: "Rohini is served by both the Red Line (with stations including Rohini West, Rohini East, and Rithala) and the Yellow Line (with stations including Rohini Sector 18/19 and Haiderpur Badli Mor), covering different sectors of this large sub-city. Between the two lines, most of Rohini's numbered sectors are within a reasonable walk or short auto ride of a Metro station.",
  },
  {
    q: "Is Rohini part of Delhi city or a separate town?",
    a: "Rohini is very much part of Delhi — specifically, it's a large residential sub-city in North West Delhi, developed by the Delhi Development Authority (DDA) from the 1980s onward. It isn't a separate municipality; it's one of the biggest planned zones within the National Capital Territory, organised into dozens of numbered sectors.",
  },
  {
    q: "How many sectors does Rohini have?",
    a: "Rohini is divided into numbered sectors that run from roughly Sector 1 through Sector 37 (not all sequentially developed or occupied), making it, by area and population, one of the largest single DDA residential developments in Delhi. Different sectors have their own local markets, schools, and community facilities.",
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
  { id: "introduction", title: "What Rohini Actually Is", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Rohini", level: 2 },
  { id: "japanese-park", title: "Japanese Park", level: 2 },
  { id: "adventure-island", title: "Adventure Island", level: 2 },
  { id: "other-draws", title: "Other Local Draws", level: 2 },
  { id: "why-visit", title: "Why Rohini Is Worth Knowing About", level: 2 },
  { id: "itinerary", title: "A Half-Day Family Outing", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RohiniGuidePage() {
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
              alt="Generic representative Indian heritage and landscape imagery — Rohini itself has no comparable monument; it's a modern planned residential sub-city"
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
                { label: "Rohini", href: null },
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
                "Rohini",
                "Delhi",
                "Japanese Park",
                "Adventure Island",
                "Family Outing",
                "North West Delhi",
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
              Rohini, Delhi: Japanese Park, Adventure Island & a Practical
              Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A sprawling, numbered-sector residential sub-city in North West
              Delhi — not a heritage destination, but home to Japanese Park,
              Adventure Island, and genuinely useful Metro access for
              anyone in the area.
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
                  text: "Rohini, North West Delhi",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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
                      d={m.d}
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
                  <h2>What Rohini Actually Is</h2>
                  <p>
                    Let's be upfront about this one: <strong>Rohini</strong>{" "}
                    is not a tourist destination in the way{" "}
                    <Link href="/blog/delhi-travel-guide">
                      Old Delhi or Central Delhi
                    </Link>{" "}
                    are. It's a sprawling planned residential sub-city in
                    North West Delhi, developed by the{" "}
                    <strong>Delhi Development Authority (DDA)</strong> from
                    the 1980s onward, and organised into numbered sectors
                    that run from roughly Sector 1 through the high 30s. By
                    area and population, it's one of the largest single
                    residential zones anywhere in the National Capital
                    Territory — home to a genuinely huge number of Delhi
                    residents, but built for living, not sightseeing.
                  </p>
                  <p>
                    That doesn't mean there's nothing here worth knowing
                    about. Rohini has two well-known family attractions —{" "}
                    <strong>Japanese Park</strong> and{" "}
                    <strong>Adventure Island</strong> — that draw visitors
                    from well beyond its own sectors, plus extensive Delhi
                    Metro coverage that makes it easy to reach and easy to
                    combine with other errands or outings in North Delhi.
                    This guide is written honestly: think of it as a
                    practical primer for a family day-trip or a local
                    outing, not a heritage itinerary.
                  </p>
                  <p>
                    If you're building a broader Delhi trip, this page is a
                    supplement to our{" "}
                    <Link href="/blog/delhi-travel-guide">
                      main Delhi travel guide
                    </Link>
                    , which covers the city's actual monuments, food, and
                    itinerary planning. Rohini is worth a visit if you're
                    already in North West Delhi, have kids with you, or are
                    curious about how a huge chunk of the city actually
                    lives — not as a standalone reason to visit Delhi.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏙️</span> Rohini at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "North West Delhi",
                        },
                        {
                          icon: "🏗️",
                          label: "Developed By",
                          value: "DDA, from the 1980s",
                        },
                        {
                          icon: "🔢",
                          label: "Layout",
                          value: "Numbered sectors (1–37)",
                        },
                        {
                          icon: "🌳",
                          label: "Known For",
                          value: "Japanese Park, Adventure Island",
                        },
                        {
                          icon: "🚇",
                          label: "Metro",
                          value: "Red Line & Yellow Line",
                        },
                        {
                          icon: "💰",
                          label: "Outing Budget",
                          value: "₹300 – ₹2,500/family",
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
                  <h2>Best Time to Visit Rohini</h2>
                  <p>
                    Since the appeal here is outdoor parks and an amusement
                    park rather than indoor monuments, Rohini follows
                    Delhi's general seasonal pattern quite closely — the
                    cooler months make outdoor time noticeably more
                    pleasant.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry days make Japanese Park and Adventure Island's outdoor rides genuinely comfortable — the best window for a family outing.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — go early morning or evening",
                        text: "Midday heat can be intense; if visiting, aim for early morning or the couple of hours before sunset instead.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — check for closures",
                        text: "Some outdoor rides at Adventure Island may pause during heavy rain, and Japanese Park's paths can get slippery — check ahead on a rainy day.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🌫️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cold, sometimes smoggy",
                        text: "Comfortable temperatures for walking, though Delhi's winter air quality dips — an early-afternoon visit is usually more pleasant than a foggy morning.",
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
                    <strong>Our pick:</strong> a weekend morning between
                    October and March — cool enough for a comfortable
                    stroll through Japanese Park before the rides open up
                    at Adventure Island.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Rohini</h2>
                  <p>
                    One genuine advantage Rohini has over many Delhi
                    neighbourhoods is its Metro coverage — for a sub-city
                    this large, it's unusually well served, with different
                    lines and stations serving different sectors.
                  </p>
                  <ul>
                    <li>
                      <strong>Delhi Metro — Red Line:</strong> Stations
                      including Rohini West, Rohini East, and Rithala serve
                      the western and central sectors, and this line is the
                      most direct route to Adventure Island near Sector 10.
                    </li>
                    <li>
                      <strong>Delhi Metro — Yellow Line:</strong> Stations
                      including Rohini Sector 18/19 and Haiderpur Badli Mor
                      cover the eastern sectors, useful depending on which
                      part of Rohini you're headed to.
                    </li>
                    <li>
                      <strong>By Road:</strong> Rohini is connected to the
                      rest of Delhi via the Outer Ring Road and Rohini Road,
                      and is reachable by app-based cabs or auto-rickshaws
                      from most parts of the city, though road traffic can
                      add significant time during peak hours.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Because Rohini spans so many
                    sectors, check which Metro station is closest to your
                    specific destination before heading out — Rohini West
                    and Rohini Sector 18/19 are on different lines and can
                    be a fair distance apart by road.
                  </div>
                </section>

                {/* ── Japanese Park ─────────────────────────────────────── */}
                <section id="japanese-park">
                  <h2>Japanese Park</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Generic landscape imagery used as a stand-in — not an actual photo of Japanese Park, Rohini"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Japanese Park</strong>, located in Sector 10, is
                    genuinely one of the more popular family picnic spots in
                    North Delhi, and by some measures one of the largest
                    parks in the city. It's a large, well-landscaped public
                    park with open lawns, walking paths, a musical fountain,
                    and a boating lake with paddle boats — the kind of place
                    where local families spend an entire weekend afternoon
                    rather than a quick stopover.
                  </p>
                  <ul>
                    <li>
                      <strong>Musical fountain:</strong> A popular evening
                      draw, especially with children — timings vary
                      seasonally, so it's worth checking locally on arrival.
                    </li>
                    <li>
                      <strong>Paddle boats:</strong> Available on the park's
                      lake for a modest per-person fee, a favourite activity
                      for visiting families.
                    </li>
                    <li>
                      <strong>Open lawns and walking paths:</strong> Good
                      for picnics, morning walks, or simply letting kids run
                      around in green space that's genuinely spacious by
                      Delhi standards.
                    </li>
                  </ul>
                  <p>
                    It's honestly a local park before it's a tourist
                    attraction — but it's a well-maintained, spacious one,
                    and worth the visit if you're bringing children or just
                    want a relaxed green break from Delhi's traffic and
                    density.
                  </p>
                </section>

                {/* ── Adventure Island ──────────────────────────────────── */}
                <section id="adventure-island">
                  <h2>Adventure Island</h2>
                  <p>
                    <strong>Adventure Island</strong> is an amusement park
                    located inside the Metro Walk mall complex in Sector 10,
                    Rohini, run by the{" "}
                    <strong>Delhi Metro Rail Corporation (DMRC)</strong>. It's
                    one of the larger amusement parks in North Delhi, with a
                    genuine mix of rides for younger children and bigger
                    thrill rides for teens and adults, plus food courts and
                    other amenities inside the same mall complex.
                  </p>
                  <ul>
                    <li>
                      <strong>Rides for all ages:</strong> A spread of gentle
                      rides for younger kids alongside faster, higher-thrill
                      rides for older children and adults.
                    </li>
                    <li>
                      <strong>Ticketing:</strong> Typically sold as
                      combo/unlimited-ride packages covering a set number of
                      hours — check current pricing on arrival or the
                      park's official channels, as rates change periodically.
                    </li>
                    <li>
                      <strong>Attached mall:</strong> Being inside Metro
                      Walk mall means food, restrooms, and air-conditioned
                      breaks are all close by — useful with young children
                      on a hot day.
                    </li>
                    <li>
                      <strong>Crowds:</strong> Weekends and school holidays
                      get considerably busier than weekday visits — plan a
                      weekday morning if you'd rather skip the queues.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Combine Adventure Island
                    with Japanese Park in the same visit — both are in
                    Sector 10 and within easy reach of each other, making a
                    single half-day outing possible without much backtracking.
                  </div>
                </section>

                {/* ── Other Draws ───────────────────────────────────────── */}
                <section id="other-draws">
                  <h2>Other Local Draws</h2>
                  <p>
                    Beyond its two headline attractions, Rohini functions
                    largely as a practical, everyday part of Delhi —
                    genuinely useful to know about if you're staying nearby,
                    less essential if you're purely sightseeing.
                  </p>
                  <ul>
                    <li>
                      <strong>Local sector markets:</strong> Rohini's
                      individual sectors each have their own neighbourhood
                      markets for everyday shopping, clothing, and food —
                      not tourist markets, but genuinely useful if you're
                      staying in the area for a few days.
                    </li>
                    <li>
                      <strong>Rohini Courts Complex:</strong> A large
                      district courts complex that's a significant local
                      landmark and traffic reference point, though not a
                      visitor attraction in itself.
                    </li>
                    <li>
                      <strong>Metro Walk and other malls:</strong> A handful
                      of shopping malls across Rohini's sectors offer
                      standard multiplex, food-court, and retail options for
                      a break between outings.
                    </li>
                  </ul>
                  <p>
                    None of these are reasons to make a special trip to
                    Rohini on their own — but they round out what's
                    genuinely a large, functioning residential district
                    rather than a curated tourist zone.
                  </p>
                </section>

                {/* ── Why Visit ─────────────────────────────────────────── */}
                <section id="why-visit">
                  <h2>Why Rohini Is Worth Knowing About</h2>
                  <p>
                    We want to be honest about positioning here: Rohini
                    isn't a heritage destination and it doesn't belong on a
                    first-time visitor's Delhi monument list. Its real value
                    to travellers falls into two categories.
                  </p>
                  <p>
                    First, as a <strong>family day-trip stop</strong> —
                    Japanese Park and Adventure Island together make a
                    genuinely enjoyable half-day out, particularly if you
                    have kids and are looking for a break from monument-
                    hopping elsewhere in the city. Second, as a{" "}
                    <strong>practical residential area</strong> — for
                    anyone relocating to Delhi, visiting family who live
                    here, or simply curious how a large slice of the city's
                    population actually lives day to day, Rohini is one of
                    Delhi's biggest and most established planned
                    residential zones, with reliable Metro access and a
                    full range of everyday infrastructure.
                  </p>
                  <p>
                    If your Delhi trip is centred on Red Fort, Qutub Minar,
                    and Chandni Chowk, Rohini is a genuine detour — worth
                    it specifically for the parks, not for anything else.
                    Our{" "}
                    <Link href="/blog/janakpuri-delhi-travel-guide">
                      Janakpuri guide
                    </Link>{" "}
                    covers a similarly practical, residential part of West
                    Delhi if you're comparing neighbourhoods for a longer
                    stay.
                  </p>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>A Half-Day Family Outing in Rohini</h2>
                  <p>
                    Here's a realistic plan for a family morning-to-
                    afternoon outing, built around Rohini's two main
                    attractions, both in Sector 10.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "9:30 AM",
                        title: "Arrive & Start at Japanese Park",
                        color: "bg-amber-700",
                        activities: [
                          "Take the Red Line to Rohini West, then a short auto",
                          "Walk the lawns and paths while it's cool",
                          "Paddle boats on the lake if the queue is short",
                        ],
                      },
                      {
                        day: "11:30 AM",
                        title: "Move to Adventure Island",
                        color: "bg-forest-600",
                        activities: [
                          "Short hop to Metro Walk mall, Sector 10",
                          "Buy a combo/unlimited ride ticket",
                          "Mix of rides for younger kids and older ones",
                        ],
                      },
                      {
                        day: "1:30 PM",
                        title: "Lunch at Metro Walk",
                        color: "bg-sky-600",
                        activities: [
                          "Food court inside the same mall complex",
                          "Air-conditioned break before heading back",
                        ],
                      },
                      {
                        day: "2:30 PM",
                        title: "Optional: Local Market Browse",
                        color: "bg-stone-600",
                        activities: [
                          "Wander a nearby sector market if time allows",
                          "Head back via Metro before evening traffic",
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
                    * A weekday visit will noticeably reduce queues at
                    Adventure Island compared to weekends or school
                    holidays.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    A Rohini outing is inexpensive by Delhi standards — most
                    of the cost is Adventure Island's ride ticket, with
                    everything else adding up to relatively little.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Splurge"].map(
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
                            "Metro travel (round trip, per person)",
                            "₹60",
                            "₹100",
                            "₹150 (cab instead)",
                          ],
                          [
                            "Japanese Park entry & boating",
                            "Free entry",
                            "₹100–₹150 boating",
                            "₹150–₹200 boating",
                          ],
                          [
                            "Adventure Island ticket (per person)",
                            "₹400–₹600",
                            "₹700–₹900",
                            "₹1,000+ premium combo",
                          ],
                          ["Food court meal", "₹200", "₹400", "₹800"],
                          [
                            "Family of 4 total (approx.)",
                            "₹2,000",
                            "₹3,800",
                            "₹6,000+",
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
                    * Adventure Island ticket prices change periodically —
                    confirm current rates before visiting. Japanese Park
                    entry itself is free; only the paddle boats carry a
                    separate fee.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Rohini</h2>
                  <ul>
                    <li>
                      <strong>Check which Metro station is closest:</strong>{" "}
                      Rohini spans many sectors across two Metro lines —
                      confirm the nearest station to your actual
                      destination before setting out.
                    </li>
                    <li>
                      <strong>Go on a weekday if avoiding crowds
                      matters:</strong> Adventure Island in particular gets
                      significantly busier on weekends and school holidays.
                    </li>
                    <li>
                      <strong>Combine both attractions in one trip:</strong>{" "}
                      Japanese Park and Adventure Island are both in Sector
                      10, making a single half-day outing efficient.
                    </li>
                    <li>
                      <strong>Confirm current ticket prices:</strong>{" "}
                      Amusement park rates change periodically — check
                      before you go rather than relying on older figures.
                    </li>
                    <li>
                      <strong>Don't expect heritage sightseeing here:</strong>{" "}
                      Rohini is a residential area with family attractions,
                      not a monument circuit — pair it with{" "}
                      <Link href="/blog/delhi-travel-guide">
                        Old and Central Delhi
                      </Link>{" "}
                      for the historical sights.
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
                          "Take the Metro — Red Line and Yellow Line both serve Rohini",
                          "Visit Japanese Park and Adventure Island together",
                          "Go early or on a weekday to avoid crowds",
                          "Confirm current Adventure Island ticket prices",
                          "Carry water and sun protection for outdoor time",
                          "Treat it as a family outing, not a heritage stop",
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
                          "Expect Rohini to be a heritage or monument destination",
                          "Assume every sector is near the same Metro station",
                          "Skip checking Adventure Island's current hours",
                          "Visit on a busy weekend if you dislike queues",
                          "Rely on Rohini alone for a full Delhi trip itinerary",
                          "Forget that boating at Japanese Park has a separate fee",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Rohini with a
                    look at our{" "}
                    <Link href="/blog/janakpuri-delhi-travel-guide">
                      Janakpuri guide
                    </Link>{" "}
                    for another practical West Delhi residential area, or
                    head back to our{" "}
                    <Link href="/blog/delhi-travel-guide">
                      main Delhi travel guide
                    </Link>{" "}
                    to plan the monument and food side of your trip.
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
                  "Rohini",
                  "Delhi",
                  "Japanese Park",
                  "Adventure Island",
                  "North West Delhi",
                  "Family Outing",
                  "Delhi Metro",
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

              <RelatedPostsGrid currentSlug="rohini-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="rohini-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
