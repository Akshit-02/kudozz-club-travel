// src/app/blog/sarojini-nagar-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sarojini Nagar Market Guide: Shopping & Bargaining Tips",
  description:
    "Complete Sarojini Nagar market guide — export-surplus shopping, how the stalls work, bargaining strategy, nearby INA Market, best time to visit, and a half-day plan.",
  keywords:
    "Sarojini Nagar market, Sarojini Nagar shopping, Sarojini Nagar Delhi, export surplus market Delhi, Sarojini Nagar bargaining tips, INA Market Delhi, Sarojini Nagar metro, Delhi street shopping, cheap shopping Delhi",
  openGraph: {
    title: "Sarojini Nagar Market Guide: Shopping & Bargaining Tips",
    description:
      "A maze of stalls selling export-surplus clothing at rock-bottom prices — the complete guide to shopping and bargaining at Sarojini Nagar.",
    url: "https://club.kudozz.in/blog/sarojini-nagar-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Sandstone architecture used here as a placeholder image — Sarojini Nagar itself is a dense open-air market of fabric-covered stalls, not a monument",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarojini Nagar Market Guide: Shopping & Bargaining Tips",
    description:
      "Export-surplus clothing, rock-bottom prices, and serious bargaining — the complete guide to Delhi's most famous street market.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sarojini-nagar-delhi-travel-guide",
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
          headline: "Sarojini Nagar Market Guide: Shopping & Bargaining Tips",
          description:
            "Complete Sarojini Nagar market guide — export-surplus shopping, how the stalls work, bargaining strategy, nearby INA Market, best time to visit, and a half-day plan.",
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
            "@id": "https://club.kudozz.in/blog/sarojini-nagar-delhi-travel-guide",
          },
          keywords:
            "Sarojini Nagar market, Sarojini Nagar shopping, Sarojini Nagar Delhi, export surplus market Delhi, Sarojini Nagar bargaining tips",
          about: {
            "@type": "Place",
            name: "Sarojini Nagar",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Sarojini Nagar",
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
                name: "Sarojini Nagar",
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
    q: "What is Sarojini Nagar famous for?",
    a: "Sarojini Nagar is famous as India's best-known export-surplus and street-fashion market — dense rows of stalls selling clothing, footwear, bags, and accessories that were originally produced for export brands, at a fraction of retail prices. It's as much a Delhi institution as it is a shopping destination, drawing everyone from budget-conscious students to fashion bloggers hunting for deals.",
  },
  {
    q: "Is Sarojini Nagar market good for shopping?",
    a: "Yes, if you go in with the right expectations. It's excellent for casual wear, basics, footwear, and accessories at very low prices, but quality is inconsistent stall to stall — you need to check stitching and fabric before buying, since there's no returns culture here. It's less suited to occasion wear or anyone who dislikes crowds and bargaining.",
  },
  {
    q: "What is the best time to visit Sarojini Nagar?",
    a: "Weekday mornings, ideally Tuesday to Friday between opening and around noon, when the lanes are walkable and vendors have more time to negotiate. Weekends, especially Saturday evenings and all of Sunday, get extremely packed — great for atmosphere, difficult for actually shopping comfortably.",
  },
  {
    q: "How do I bargain at Sarojini Nagar?",
    a: "Start by offering roughly 40–50% of the quoted price and negotiate up from there, expecting to settle somewhere in the middle. Check two or three stalls selling similar items before committing, stay polite but firm, and be genuinely willing to walk away — vendors often call you back with a better price once you start leaving.",
  },
  {
    q: "How do I reach Sarojini Nagar by metro?",
    a: "Take the metro to INA station, served by both the Pink Line and the Yellow Line, making it an easy interchange from most parts of the city. From INA station it's a short walk of about 5–10 minutes to the main market lanes.",
  },
  {
    q: "Is Sarojini Nagar the same as INA Market?",
    a: "No, they're two separate but adjacent markets sharing the same metro station. Sarojini Nagar is the export-surplus clothing and footwear market; INA Market, a short walk away, is known for imported groceries, gourmet ingredients, seafood, and specialty foods rather than clothing.",
  },
  {
    q: "Can I use cards or UPI at Sarojini Nagar?",
    a: "Most stalls run on cash, and it's genuinely the smoother way to bargain since a firm cash offer often closes a deal faster than a card payment would. UPI acceptance has grown at many stalls in recent years, but don't assume every vendor takes it — carrying cash as a backup is still wise.",
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
  { id: "introduction", title: "Why Sarojini Nagar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "how-it-works", title: "How the Market Works", level: 2 },
  { id: "bargaining", title: "Bargaining Strategy", level: 2 },
  { id: "ina-market", title: "Nearby: INA Market", level: 2 },
  { id: "food-guide", title: "Food Stalls at Sarojini", level: 2 },
  { id: "itinerary", title: "Half-Day Shopping Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SarojiniNagarGuidePage() {
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
              alt="Sandstone architecture used here as a placeholder image — Sarojini Nagar itself is a dense open-air market of fabric-covered stalls, not a monument"
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
                { label: "Sarojini Nagar", href: null },
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
                "Sarojini Nagar",
                "Delhi",
                "Street Shopping",
                "Export Surplus",
                "Bargaining",
                "South Delhi",
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
              Sarojini Nagar Market: Shopping & Bargaining Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A maze of stalls selling export-surplus clothing, footwear, and
              accessories at rock-bottom prices — how to shop Sarojini Nagar
              well, and actually enjoy the chaos while you're at it.
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
                  text: "Sarojini Nagar, South Delhi",
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
                  <h2>Why Sarojini Nagar?</h2>
                  <p>
                    Ask almost any Delhiite where to find cheap clothes and
                    the answer comes back instantly:{" "}
                    <strong>Sarojini Nagar</strong>. Arguably India's most
                    famous street-shopping market, "Sarojini" — as it's
                    universally called — is a dense, sprawling maze of stalls
                    in South Delhi selling export-surplus clothing, footwear,
                    bags, and accessories at prices that genuinely startle
                    first-time visitors. It's less a market than an
                    institution: a rite of passage for Delhi college students
                    building a wardrobe on a shoestring budget, and an
                    increasingly popular stop for budget-conscious tourists
                    and fashion bloggers hunting for one-off finds.
                  </p>
                  <p>
                    What makes Sarojini distinct from most Indian street
                    markets is the merchandise itself. Much of what's sold
                    here started life as{" "}
                    <strong>export-surplus or overrun stock</strong> —
                    garments produced for international clothing brands that
                    ended up here instead of on a store shelf abroad, for
                    reasons ranging from cancelled orders to overproduction to
                    minor defects. Mixed in with genuine surplus is a large
                    volume of domestically manufactured lookalike stock, so
                    part of the fun — and the skill — of shopping here is
                    learning to tell the two apart.
                  </p>
                  <p>
                    This guide is a practical one: when to go, how to get
                    there, how the stalls and pricing actually work, and a
                    real bargaining strategy rather than vague advice to
                    "haggle." If you're building out a full Delhi trip
                    alongside this market run, our{" "}
                    <Link href="/blog/delhi-travel-guide">
                      Delhi travel guide
                    </Link>{" "}
                    covers the city's monuments, food, and a full itinerary.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛍️</span> Sarojini Nagar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Delhi, near INA",
                        },
                        {
                          icon: "🚇",
                          label: "Nearest Metro",
                          value: "INA (Pink Line / Yellow Line)",
                        },
                        {
                          icon: "🕐",
                          label: "Typical Hours",
                          value: "~10:30 AM – 9:00 PM",
                        },
                        {
                          icon: "📅",
                          label: "Weekly Off",
                          value: "Monday (many stalls closed)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Weekday mornings",
                        },
                        {
                          icon: "💰",
                          label: "Typical Spend",
                          value: "₹500 – ₹3,000 per visit",
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
                  <h2>Best Time to Visit Sarojini Nagar</h2>
                  <p>
                    Sarojini is a genuinely different experience depending on
                    when you go — the merchandise doesn't change much, but
                    your ability to actually browse, try things on, and
                    negotiate calmly changes a great deal.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Weekday Mornings",
                        emoji: "🌤️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best window — our pick",
                        text: "Tuesday to Friday, roughly 10:30 AM to 1 PM. Lanes are walkable, vendors have time to negotiate properly, and you can actually inspect items without being jostled.",
                      },
                      {
                        season: "Weekday Evenings",
                        emoji: "🌆",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Good, moderately busy",
                        text: "Crowds pick up after office hours but the market stays manageable — a reasonable option if mornings don't fit your schedule.",
                      },
                      {
                        season: "Saturday",
                        emoji: "😬",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Busy, especially evening",
                        text: "Noticeably more crowded than weekdays, particularly from late afternoon onward — go early if Saturday is your only option.",
                      },
                      {
                        season: "Sunday",
                        emoji: "🔥",
                        color: "bg-red-50 border-red-200",
                        mood: "Extremely packed — avoid if you can",
                        text: "Sarojini's single busiest day by a wide margin. Shoulder-to-shoulder crowds, slower browsing, and tougher bargaining since vendors have plenty of other buyers waiting.",
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
                    <strong>Our pick:</strong> a weekday morning, ideally
                    Tuesday–Thursday. You'll get more attentive vendors,
                    better bargaining outcomes, and enough breathing room to
                    actually check what you're buying — none of which is easy
                    in a Sunday crowd.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Sarojini Nagar</h2>
                  <p>
                    Sarojini Nagar sits in South Delhi and is straightforward
                    to reach thanks to a well-placed metro interchange right
                    next to it.
                  </p>
                  <ul>
                    <li>
                      <strong>By Metro (recommended):</strong> Get off at{" "}
                      <strong>INA metro station</strong>, an interchange
                      between the Pink Line and the Yellow Line, which makes
                      it easy to reach from most parts of the city without
                      switching to a cab. From INA station, it's a walk of
                      roughly 5–10 minutes to the main market lanes.
                    </li>
                    <li>
                      <strong>By Auto-rickshaw or app cab:</strong> Widely
                      available from anywhere in South or Central Delhi; use
                      app-based booking or insist on the meter. Traffic and
                      parking around the market get genuinely difficult on
                      weekends, so the metro is usually faster anyway.
                    </li>
                    <li>
                      <strong>By Bus:</strong> Several DTC bus routes stop
                      near the market, though the metro remains the simplest
                      option for visitors unfamiliar with Delhi's bus network.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Coming from Old Delhi or
                    Connaught Place, the Yellow Line gets you to INA directly
                    — no interchange needed. From East or West Delhi, the
                    Pink Line often saves the most time.
                  </div>
                </section>

                {/* ── How It Works ──────────────────────────────────────── */}
                <section id="how-it-works">
                  <h2>How the Market Works</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Sandstone architecture used as a placeholder — not an actual photograph of Sarojini Nagar market"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Sarojini Nagar Market is really a cluster of connected
                    zones — narrow lanes of cloth-canopied stalls packed side
                    by side, interspersed with permanent shopfronts along the
                    market's edges. Understanding the layout makes the whole
                    experience far less overwhelming.
                  </p>
                  <ul>
                    <li>
                      <strong>What "export surplus" actually means:</strong>{" "}
                      A meaningful share of stock genuinely originated as
                      excess or cancelled production runs for export brands
                      — sometimes with brand tags still attached, sometimes
                      with tags cut. It sits alongside large volumes of
                      domestically made stock styled to look similar, sold at
                      similarly low prices. Both can be good value; neither
                      is inherently better quality, so judge each item on its
                      own merits rather than the "export surplus" label
                      alone.
                    </li>
                    <li>
                      <strong>Stall layout:</strong> The market is loosely
                      organised by product type — you'll find denser
                      clusters of clothing stalls, footwear stalls, and
                      accessory/bag stalls in different stretches, though
                      there's plenty of overlap. Wandering with no fixed plan
                      for the first ten minutes is actually a good way to get
                      your bearings before you start buying.
                    </li>
                    <li>
                      <strong>What's genuinely good value:</strong> Casual
                      wear — t-shirts, kurtas, dresses, shorts, joggers —
                      footwear, bags, scarves, and costume jewellery are
                      where Sarojini consistently delivers real savings over
                      retail prices.
                    </li>
                    <li>
                      <strong>What to be more careful with:</strong>{" "}
                      Structured formal wear, anything requiring a precise
                      fit, and electronics or "branded" items sold suspiciously
                      cheap are the categories where quality and authenticity
                      are least reliable — inspect closely or skip.
                    </li>
                    <li>
                      <strong>No fixed pricing, no returns:</strong> Prices
                      are set per vendor, per customer, per mood — there's no
                      MRP culture here, and once you've paid and left, there's
                      essentially no return or exchange. Check everything
                      before you hand over cash.
                    </li>
                  </ul>
                </section>

                {/* ── Bargaining ────────────────────────────────────────── */}
                <section id="bargaining">
                  <h2>Bargaining Strategy at Sarojini Nagar</h2>
                  <p>
                    Bargaining isn't optional at Sarojini — it's the default
                    mechanism by which prices are set, and vendors expect it.
                    Going in with a real strategy, rather than vague
                    politeness, makes a measurable difference to what you pay.
                  </p>
                  <ul>
                    <li>
                      <strong>Start low, around 40–50% of the quote:</strong>{" "}
                      Whatever price a vendor first names, treat it as an
                      opening bid, not a real one. Counter at roughly
                      half, and expect to settle somewhere between your offer
                      and theirs.
                    </li>
                    <li>
                      <strong>Compare two or three stalls first:</strong>{" "}
                      Near-identical items are often sold at multiple nearby
                      stalls. A quick round of "just looking" price checks
                      before committing gives you a real sense of the going
                      rate and stronger footing to negotiate.
                    </li>
                    <li>
                      <strong>Buying multiple items strengthens your hand:</strong>{" "}
                      Vendors are noticeably more flexible on a combined
                      purchase than on a single item — bundle a few pieces
                      from one stall and negotiate the total, not each item
                      separately.
                    </li>
                    <li>
                      <strong>Be willing to actually walk away:</strong> This
                      is the single most effective tactic. A polite "thank
                      you, I'll look elsewhere" and a step away from the
                      stall frequently produces a better final offer called
                      out after you.
                    </li>
                    <li>
                      <strong>Stay calm and friendly, not aggressive:</strong>{" "}
                      Firm, good-humoured negotiation gets better results
                      than an adversarial tone — most vendors are running a
                      volume business and respond well to buyers who are
                      pleasant but not pushovers.
                    </li>
                    <li>
                      <strong>Cash closes deals faster:</strong> A firm cash
                      offer, counted out and ready, often settles a
                      negotiation faster than back-and-forth over a card or
                      UPI payment — worth keeping some cash on hand even if
                      you plan to pay digitally elsewhere.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Try the item on or hold it up
                    to check size before you start negotiating hard —
                    haggling over a piece you then discover doesn't fit wastes
                    both your time and the vendor's goodwill for your next
                    stop.
                  </div>
                </section>

                {/* ── INA Market ────────────────────────────────────────── */}
                <section id="ina-market">
                  <h2>Nearby: INA Market</h2>
                  <p>
                    Sharing the same metro station and just a short walk from
                    Sarojini Nagar's clothing lanes is{" "}
                    <strong>INA Market</strong>, one of Delhi's best-known
                    destinations for imported groceries, gourmet ingredients,
                    fresh seafood, and specialty foods rarely found in
                    ordinary neighbourhood markets — everything from imported
                    cheeses and wines to fresh fish, exotic spices, and
                    international snack brands.
                  </p>
                  <p>
                    It's a genuinely different kind of market from Sarojini —
                    quieter, more orderly, and built around food rather than
                    fashion — which makes it a worthwhile combination trip.
                    Many visitors do a loop: shop for clothes at Sarojini in
                    the morning, then walk over to INA Market to browse
                    (or pick up ingredients) before heading out for lunch.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food Stalls at Sarojini</h2>
                  <p>
                    Shopping at Sarojini is genuinely tiring — hours of
                    walking, negotiating, and weaving through crowds — and
                    the market's food stalls exist entirely to refuel that
                    effort.
                  </p>
                  <ul>
                    <li>
                      <strong>Chaat stalls:</strong> Golgappe, aloo tikki, and
                      other quick chaat snacks are dotted throughout the
                      market, popular for a fast bite between stalls.
                    </li>
                    <li>
                      <strong>Momos and rolls:</strong> Cheap, filling, and
                      quick to eat standing up — a favourite with the
                      market's student crowd.
                    </li>
                    <li>
                      <strong>Juice and lassi stalls:</strong> Genuinely
                      useful on a hot day given how much walking the market
                      demands — fresh sugarcane juice and lassi stalls are
                      common along the main lanes.
                    </li>
                    <li>
                      <strong>Sit-down options nearby:</strong> For a proper
                      meal rather than a snack, the streets bordering the
                      market and the area around INA Market have a wider
                      range of casual restaurants and cafés.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Half-Day Shopping Plan</h2>
                  <p>
                    A half-day is enough to shop Sarojini properly without
                    burning out — here's a realistic plan for a weekday
                    morning visit.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "10:30 AM",
                        title: "Arrive & Get Oriented",
                        color: "bg-amber-700",
                        activities: [
                          "Take the metro to INA station",
                          "Walk to the main market lanes (5–10 min)",
                          "Do a quick, buy-nothing lap to see what's on offer",
                        ],
                      },
                      {
                        day: "11:15 AM",
                        title: "Clothing & Footwear Lanes",
                        color: "bg-forest-600",
                        activities: [
                          "Compare 2–3 stalls before committing to any item",
                          "Try on / check sizing before negotiating",
                          "Bundle purchases from one stall for a better rate",
                        ],
                      },
                      {
                        day: "1:00 PM",
                        title: "Snack Break",
                        color: "bg-sky-600",
                        activities: [
                          "Chaat, momos, or a cold drink at a market stall",
                          "Rest and reassess what's still on the list",
                        ],
                      },
                      {
                        day: "1:30 PM",
                        title: "Accessories & Final Rounds",
                        color: "bg-purple-600",
                        activities: [
                          "Bags, scarves, and jewellery stalls",
                          "Revisit any stall you were undecided on earlier",
                        ],
                      },
                      {
                        day: "2:30 PM",
                        title: "INA Market Detour",
                        color: "bg-stone-600",
                        activities: [
                          "Short walk over to INA Market",
                          "Browse imported groceries and gourmet stalls",
                          "Lunch nearby before heading out",
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
                    * If you're combining this with other South Delhi
                    shopping, our{" "}
                    <Link href="/blog/lajpat-nagar-delhi-travel-guide">
                      Lajpat Nagar guide
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/south-delhi-travel-guide">
                      South Delhi travel guide
                    </Link>{" "}
                    are both a short cab ride away.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Sarojini Nagar's biggest draw is exactly how little a
                    full shopping trip can cost — even a "splurge" visit here
                    is inexpensive by most standards.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Item", "Light Shopper", "Moderate", "Heavy Haul"].map(
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
                          ["T-shirts / tops", "₹150–250 each", "₹150–250 each", "₹150–250 each"],
                          ["Dresses / kurtas", "₹250–450 each", "₹250–450 each", "₹250–450 each"],
                          ["Footwear", "₹300–600/pair", "₹300–600/pair", "₹300–600/pair"],
                          ["Bags / accessories", "₹150–400", "₹150–400", "₹150–400"],
                          ["Food & drinks", "₹150", "₹300", "₹500"],
                          ["Approx. total spend", "₹800–1,200", "₹1,800–2,800", "₹3,500+"],
                        ].map(([exp, a, b, c], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {a}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {b}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {c}
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
                    * Prices are post-bargaining estimates and vary
                    considerably by stall, item, and how well you negotiate —
                    treat these as a rough guide, not a fixed rate card.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Sarojini Nagar</h2>
                  <ul>
                    <li>
                      <strong>Check stitching and fabric before buying:</strong>{" "}
                      Turn garments inside out, check seams, and look for
                      snags or loose threads — quality varies a lot stall to
                      stall, and there's no returns policy once you've paid.
                    </li>
                    <li>
                      <strong>Carry cash, in smaller denominations:</strong>{" "}
                      A firm cash offer bargains faster, and having change
                      ready avoids awkward "no change" pauses mid-negotiation.
                    </li>
                    <li>
                      <strong>Watch your belongings in dense crowds:</strong>{" "}
                      Like any packed Indian street market, pickpocketing is
                      a real (if not constant) risk — keep bags zipped,
                      worn in front, and avoid flashing large amounts of cash.
                    </li>
                    <li>
                      <strong>Avoid weekends if you can:</strong> Saturday
                      evenings and Sundays are dramatically more crowded —
                      weekday mornings give you a far more comfortable
                      shopping experience.
                    </li>
                    <li>
                      <strong>Wear comfortable shoes:</strong> Expect to walk
                      several kilometres across uneven lanes over the course
                      of a proper shopping session.
                    </li>
                    <li>
                      <strong>Set a rough budget before you start:</strong>{" "}
                      It's genuinely easy to keep buying "just one more thing"
                      at these prices — a loose spending cap keeps the trip
                      fun rather than regretful.
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
                          "Go on a weekday morning for a calmer visit",
                          "Compare prices at 2–3 stalls before buying",
                          "Check stitching and fabric closely before paying",
                          "Carry cash in smaller denominations",
                          "Bundle purchases from one stall for better rates",
                          "Combine the trip with a walk to INA Market",
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
                          "Accept the first quoted price at face value",
                          "Visit on a Sunday if crowds bother you",
                          "Expect returns or exchanges after you've paid",
                          "Carry large amounts of cash loosely in a bag",
                          "Assume every stall accepts UPI or cards",
                          "Rush structured or fitted garment purchases",
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
                    <strong>🗺️ Extend the trip:</strong> Sarojini pairs
                    naturally with a wider South Delhi shopping day — see our{" "}
                    <Link href="/blog/karol-bagh-delhi-travel-guide">
                      Karol Bagh guide
                    </Link>{" "}
                    for another of Delhi's major shopping districts, or the{" "}
                    <Link href="/blog/south-delhi-travel-guide">
                      South Delhi travel guide
                    </Link>{" "}
                    for a broader look at the area.
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
                  "Sarojini Nagar",
                  "Delhi",
                  "Street Shopping",
                  "Export Surplus",
                  "Bargaining",
                  "INA Market",
                  "South Delhi",
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

              <RelatedPostsGrid currentSlug="sarojini-nagar-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sarojini-nagar-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
