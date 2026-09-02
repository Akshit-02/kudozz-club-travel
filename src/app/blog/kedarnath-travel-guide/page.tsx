// src/app/blog/kedarnath-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kedarnath Travel Guide: Trek, Yatra & Helicopter Tips",
  description:
    "Complete Kedarnath guide — the Gaurikund/Sonprayag trek route, helicopter shuttle booking, temple opening dates, Bhairav Temple, Vasuki Tal, where to stay, and a full yatra plan.",
  keywords:
    "Kedarnath, Kedarnath temple, Char Dham, Jyotirlinga, Kedarnath trek, Gaurikund, Sonprayag, Kedarnath helicopter booking, Kedarnath yatra, Vasuki Tal, how to reach Kedarnath, Uttarakhand pilgrimage",
  openGraph: {
    title: "Kedarnath Travel Guide: Trek, Yatra & Helicopter Tips",
    description:
      "One of the Char Dham and a Jyotirlinga of Lord Shiva, at 3,583m — the trek from Gaurikund, helicopter alternatives, and how to plan the yatra.",
    url: "https://club.kudozz.in/blog/kedarnath-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/spiti-valley/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Kedarnath temple standing alone against a stark, snow-dusted high-altitude Himalayan backdrop",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kedarnath Travel Guide: Trek, Yatra & Helicopter Tips",
    description:
      "The Gaurikund trek, helicopter shuttle booking, and everything else you need for the Kedarnath yatra.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kedarnath-travel-guide",
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
          headline: "Kedarnath Travel Guide: Trek, Yatra & Helicopter Tips",
          description:
            "Complete Kedarnath guide — the Gaurikund/Sonprayag trek route, helicopter shuttle booking, temple opening dates, Bhairav Temple, Vasuki Tal, where to stay, and a full yatra plan.",
          image:
            "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/kedarnath-travel-guide",
          },
          keywords:
            "Kedarnath, Jyotirlinga, Char Dham, Kedarnath trek, Gaurikund, Sonprayag, Vasuki Tal",
          about: {
            "@type": "Place",
            name: "Kedarnath",
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
                name: "Kedarnath",
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
    q: "How long is the Kedarnath trek and how difficult is it?",
    a: "The trek from Gaurikund to Kedarnath is roughly 16-18km one way, on a well-paved but steadily climbing path gaining about 1,500m in altitude. It's rated moderate — manageable for a reasonably fit person in a day, though many pilgrims take a night's break at Kedarnath before returning, and pony, palanquin (doli), and porter services are widely available for those who can't walk the full distance.",
  },
  {
    q: "Can I take a helicopter to Kedarnath instead of trekking?",
    a: "Yes — multiple licensed operators run helicopter shuttles from helipads at Phata, Guptkashi, and Sersi to Kedarnath, cutting the journey to about 8-10 minutes each way. Seats are limited and sell out fast in peak season, so book well in advance through the official Uttarakhand government booking portal or authorised operators, and always keep a buffer day in your plan since weather frequently delays or cancels flights.",
  },
  {
    q: "When did Kedarnath rebuild after the 2013 floods?",
    a: "The June 2013 Uttarakhand floods and flash floods devastated Kedarnath town, though the temple itself survived largely intact — locally attributed to a large boulder that diverted the debris flow around the structure. The town has been substantially rebuilt since, with a redesigned pilgrim town, better trail infrastructure, and stronger flood-mitigation measures, and the yatra has resumed at large scale in the years since.",
  },
  {
    q: "When does Kedarnath temple open and close?",
    a: "The temple typically opens in late April or early May, on a date fixed by tradition around Akshaya Tritiya, and closes around late October to mid-November on Bhai Dooj, after which the deity's rituals move to Ukhimath for winter. Exact dates vary slightly each year, so confirm before booking travel.",
  },
  {
    q: "Where does the Kedarnath trek actually start now?",
    a: "Vehicles now generally stop at Sonprayag, from where a short shared-jeep ride or a short walk covers the last stretch to Gaurikund, the traditional trailhead. The main 16-18km trek to Kedarnath begins at Gaurikund.",
  },
  {
    q: "Is altitude sickness a real risk on the Kedarnath trek?",
    a: "Yes, at 3,583m it's a genuine consideration, especially for those trekking quickly without a night's acclimatisation. Mild symptoms — headache, fatigue, breathlessness — are common; go at a steady pace, stay hydrated, and consult a doctor beforehand if you have any heart, lung, or blood pressure conditions.",
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
  { id: "introduction", title: "A Jyotirlinga at 3,583 Metres", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kedarnath", level: 2 },
  { id: "trek-attractions", title: "The Trek, Temple & Beyond", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KedarnathGuidePage() {
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
              src="/images/destinations/spiti-valley/spiti-valley.jpg"
              alt="Kedarnath temple standing alone against a stark, snow-dusted high-altitude Himalayan backdrop"
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
                { label: "Kedarnath", href: null },
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
                "Kedarnath",
                "Char Dham",
                "Jyotirlinga",
                "Kedarnath Trek",
                "Uttarakhand",
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
              Kedarnath: Trek, Yatra & Complete Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of the Char Dham and a Jyotirlinga of Lord Shiva, at
              3,583m — the Gaurikund trek, helicopter shuttle options, and
              everything you need to plan the yatra.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "13 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Rudraprayag District, Uttarakhand",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,700 words",
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
                  <h2>A Jyotirlinga at 3,583 Metres</h2>
                  <p>
                    <strong>Kedarnath</strong> is one of the four Char Dham
                    sites in{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand
                    </Link>{" "}
                    and one of the twelve <strong>Jyotirlingas</strong> — the
                    holiest shrines of Lord Shiva across India. The ancient
                    stone temple sits at roughly 3,583 metres, cradled by a
                    natural amphitheatre of snow peaks at the head of the
                    Mandakini valley, and is reached today either on foot or
                    by helicopter — there is no motorable road to the
                    temple itself.
                  </p>
                  <p>
                    Kedarnath is inseparable from the memory of the{" "}
                    <strong>June 2013 Uttarakhand floods</strong>, a
                    catastrophic cloudburst-triggered flash flood that
                    devastated the town and claimed thousands of lives. The
                    temple itself survived largely undamaged, an event many
                    pilgrims regard as significant, and the town around it
                    has since been substantially rebuilt with wider paths,
                    better drainage, and a more resilient pilgrim
                    infrastructure.
                  </p>
                  <p>
                    The classic route begins at Gaurikund (vehicles today
                    generally stop just before, at Sonprayag) and climbs
                    roughly 16-18km to the temple — a demanding but
                    achievable trek for most reasonably fit travellers, with
                    pony, palanquin, and helicopter alternatives for those
                    who need them.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Kedarnath at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Rudraprayag District, Uttarakhand",
                        },
                        {
                          icon: "⛰️",
                          label: "Altitude",
                          value: "~3,583m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "May-Jun, Sep-Oct" },
                        {
                          icon: "🚪",
                          label: "Temple Open",
                          value: "Late Apr/May – Nov",
                        },
                        {
                          icon: "🚶",
                          label: "Trek Distance",
                          value: "~16-18km from Gaurikund",
                        },
                        {
                          icon: "🚁",
                          label: "Access",
                          value: "Trek, pony, or helicopter",
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
                  <h2>Best Time to Visit Kedarnath</h2>
                  <p>
                    Weather on the trek route and around the temple shifts
                    fast at this altitude, so timing matters more here than
                    at most Char Dham sites.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "May – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best window — our pick",
                        text: "Pleasant daytime trekking weather, blooming alpine meadows along the route, and stable trail conditions just after the temple reopens.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-red-50 border-red-200",
                        mood: "Monsoon — avoid if possible",
                        text: "The riskiest months given the region's flood history — landslides, slippery trail sections, and helicopter cancellations are all common.",
                      },
                      {
                        season: "Sep – Oct",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Excellent, clearer skies",
                        text: "Post-monsoon clarity brings some of the best mountain views of the year, with a cooler but very manageable trek.",
                      },
                      {
                        season: "Nov (early)",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Closing season — cold",
                        text: "The temple closes around Bhai Dooj in mid-November; visiting in early November means very cold conditions and a shrinking window.",
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
                    <strong>Our pick:</strong> Late May to June, or
                    September to mid-October — both avoid the monsoon's
                    landslide risk while offering the trek's best trail and
                    weather conditions.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kedarnath</h2>
                  <p>
                    Kedarnath has no airport or railway station, and no road
                    reaches the temple — every pilgrim arrives on foot or by
                    helicopter from Sonprayag/Gaurikund.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> The nearest airport is Jolly
                      Grant in Dehradun — figure a full day's drive from
                      there to Sonprayag.
                    </li>
                    <li>
                      <strong>By train:</strong> The nearest railheads are
                      Rishikesh and Haridwar, roughly 220-240km from
                      Sonprayag.{" "}
                      <Link href="/blog/rishikesh-adventure-travel-guide">
                        Rishikesh
                      </Link>{" "}
                      and{" "}
                      <Link href="/blog/haridwar-travel-guide">Haridwar</Link>{" "}
                      are the standard starting points for taxis and buses
                      heading up the valley.
                    </li>
                    <li>
                      <strong>By road:</strong> A 9-10 hour drive from
                      Rishikesh/Haridwar via Rudraprayag and Guptkashi brings
                      you to Sonprayag, the current road-end.
                    </li>
                    <li>
                      <strong>The final stretch:</strong> From Sonprayag, a
                      short shared-jeep ride or walk covers the last bit to
                      Gaurikund, the traditional trailhead — from where it's
                      the 16-18km trek, pony, palanquin, or a short
                      helicopter hop to Kedarnath.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Helicopter seats from Phata,
                    Guptkashi, or Sersi sell out weeks ahead in peak season —
                    book only through the official Uttarakhand tourism
                    booking portal or clearly authorised operators, and
                    build in a buffer day since weather regularly delays
                    flights.
                  </div>
                </section>

                {/* ── Trek & Attractions ─────────────────────────────────── */}
                <section id="trek-attractions">
                  <h2>The Trek, Temple & Beyond</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/spiti-valley/spiti-valley.jpg"
                      alt="High-altitude trail leading toward Kedarnath temple through a rugged Himalayan valley"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Gaurikund–Kedarnath Trek</h3>
                  <p>
                    The 16-18km paved trail climbs steadily through pine
                    forest and open valley, gaining around 1,500m. Rest
                    points, tea stalls, and medical aid posts line the
                    route, and pony or palanquin (doli) services are
                    available at Gaurikund for those unable to walk the
                    full distance. Most trekkers take 7-9 hours one way at a
                    comfortable pace.
                  </p>
                  <h3>Kedarnath Temple</h3>
                  <p>
                    The ancient stone shrine, believed to date back over a
                    thousand years in its current form, houses one of the
                    twelve Jyotirlingas. Its survival through the 2013
                    floods — largely attributed to a large boulder that
                    diverted the debris flow around the structure — has
                    added deep significance to darshan here for many
                    pilgrims.
                  </p>
                  <h3>Bhairav Temple</h3>
                  <p>
                    A short, steep climb above the main temple leads to the
                    Bhairav Temple, dedicated to Bhairav — Shiva's fierce
                    guardian form, traditionally worshipped after the
                    portals close for winter. It also offers one of the best
                    panoramic views over the Kedarnath basin.
                  </p>
                  <h3>Vasuki Tal (Extension Trek)</h3>
                  <p>
                    For those with an extra day, a further ~6km trek from
                    Kedarnath climbs to <strong>Vasuki Tal</strong>, a
                    pristine high-altitude glacial lake at over 4,100m with
                    views toward the Chaukhamba massif. This is a serious
                    high-altitude add-on best attempted only after a night's
                    acclimatisation at Kedarnath.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Kedarnath</h2>
                  <p>
                    Kedarnath's rebuilt town has considerably more
                    accommodation than before 2013, though it remains basic
                    and pilgrimage-focused. Sonprayag and Guptkashi lower
                    down offer more comfortable options if you'd rather not
                    stay at altitude overnight.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛖",
                        range: "₹700–₹1,800/night",
                        picks: [
                          "Ashram-run dormitories near the temple",
                          "GMVN budget rooms",
                          "Shared tent accommodation",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Private guesthouses in the rebuilt town",
                          "Better tented camps",
                          "Guptkashi/Sonprayag hotels lower down",
                        ],
                      },
                      {
                        tier: "Comfort",
                        icon: "🛏️",
                        range: "₹5,000–₹9,000/night",
                        picks: [
                          "Better-appointed rooms in Kedarnath town",
                          "Guptkashi's higher-end hotels",
                          "Heated tented camps in peak season",
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
                        title: "Rishikesh/Haridwar to Sonprayag",
                        color: "bg-amber-700",
                        activities: [
                          "Early start from Rishikesh or Haridwar",
                          "Drive via Rudraprayag and Guptkashi",
                          "Overnight at Sonprayag or Guptkashi",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Trek (or Fly) to Kedarnath",
                        color: "bg-sky-600",
                        activities: [
                          "Start the Gaurikund trek early morning, or take a helicopter",
                          "Reach Kedarnath by afternoon, check in",
                          "Evening aarti and darshan queue for the next morning",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Darshan, Bhairav Temple & Descent",
                        color: "bg-forest-600",
                        activities: [
                          "Early morning darshan at the main temple",
                          "Short climb to Bhairav Temple",
                          "Trek or fly back down to Sonprayag",
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
                    * Add a 4th day for the Vasuki Tal extension trek, or
                    continue on to{" "}
                    <Link href="/blog/badrinath-travel-guide">Badrinath</Link>{" "}
                    or the{" "}
                    <Link href="/blog/chopta-travel-guide">
                      Chopta-Tungnath-Chandrashila
                    </Link>{" "}
                    region nearby for more Himalayan trekking.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Kedarnath</h2>
                  <ul>
                    <li>
                      <strong>Trailside tea stalls and dhabas:</strong> Basic
                      hot food — maggi, parathas, chai — dotted along the
                      Gaurikund-Kedarnath trail for trekkers.
                    </li>
                    <li>
                      <strong>Temple langar:</strong> Simple vegetarian
                      meals, often available at low cost near the temple
                      complex.
                    </li>
                    <li>
                      <strong>Guptkashi/Sonprayag restaurants:</strong> A
                      wider spread of North Indian vegetarian food if you're
                      based lower down before or after the trek.
                    </li>
                  </ul>
                  <p>
                    As with the other Char Dham towns, Kedarnath keeps a
                    strictly vegetarian food culture — don't expect meat or
                    alcohol anywhere along the route or in the town itself.
                  </p>
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
                          ["Accommodation/night", "₹900", "₹3,000", "₹6,500"],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          [
                            "Taxi (Haridwar-Sonprayag, round trip)",
                            "₹8,000",
                            "₹12,000",
                            "₹18,000",
                          ],
                          [
                            "Pony/palanquin (one way)",
                            "₹3,500",
                            "₹5,500",
                            "₹8,000",
                          ],
                          [
                            "Helicopter (round trip)",
                            "—",
                            "₹8,500",
                            "₹9,500",
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
                    * Figures are per person, per day, except taxi, pony, and
                    helicopter fares, which are estimated round-trip/one-way
                    figures. Helicopter prices vary considerably by operator
                    and season.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kedarnath</h2>
                  <ul>
                    <li>
                      <strong>Book helicopter seats weeks in advance:</strong>{" "}
                      Only through the official Uttarakhand tourism portal or
                      clearly authorised operators — availability disappears
                      fast in peak season, and unofficial resellers are a
                      real risk.
                    </li>
                    <li>
                      <strong>Register for the yatra before you travel:</strong>{" "}
                      Biometric or online registration is periodically
                      mandated for Char Dham pilgrims — check current
                      requirements ahead of your trip.
                    </li>
                    <li>
                      <strong>Start the trek early:</strong> Beginning by
                      6-7am avoids the worst afternoon crowding and gives you
                      buffer time before weather typically turns in the
                      afternoon.
                    </li>
                    <li>
                      <strong>Pack for genuine cold and rain:</strong> Even
                      in June, temperatures at Kedarnath can drop sharply at
                      night, and sudden showers are common on the trail.
                    </li>
                    <li>
                      <strong>Avoid the monsoon months entirely if
                      possible:</strong> Given the region's flood history,
                      July-August carries meaningfully higher landslide and
                      flash-flood risk than other months.
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
                          "Book helicopter seats through official channels only",
                          "Register for the yatra ahead of travel",
                          "Start the trek early in the morning",
                          "Carry warm, waterproof layers",
                          "Consider a pony or palanquin if unsure of fitness",
                          "Keep a buffer day for weather delays",
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
                          "Book helicopter seats through unofficial resellers",
                          "Attempt the trek during monsoon months",
                          "Start the climb late in the afternoon",
                          "Ignore mild altitude symptoms",
                          "Push straight to Vasuki Tal without a night's rest",
                          "Expect meat or alcohol anywhere near the temple",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Kedarnath
                    with{" "}
                    <Link href="/blog/badrinath-travel-guide">Badrinath</Link>{" "}
                    for the wider Char Dham circuit, add on the{" "}
                    <Link href="/blog/chopta-travel-guide">
                      Chopta-Tungnath-Chandrashila
                    </Link>{" "}
                    trek region nearby, or begin your journey from{" "}
                    <Link href="/blog/haridwar-travel-guide">Haridwar</Link>{" "}
                    — the traditional Char Dham gateway town.
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
                  "Kedarnath",
                  "Char Dham",
                  "Uttarakhand",
                  "Jyotirlinga",
                  "Kedarnath Trek",
                  "Pilgrimage",
                  "Himalayas",
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

              <RelatedPostsGrid currentSlug="kedarnath-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kedarnath-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
