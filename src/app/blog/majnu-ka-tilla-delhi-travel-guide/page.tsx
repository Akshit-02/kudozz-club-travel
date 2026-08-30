// src/app/blog/majnu-ka-tilla-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Majnu Ka Tilla Guide: Delhi's Tibetan Colony",
  description:
    "Majnu Ka Tilla travel guide — Delhi's Tibetan refugee colony on the Yamuna. Momos, thukpa, Korean cafés, prayer-flag markets, monastery visits, budget and tips.",
  keywords:
    "Majnu Ka Tilla Delhi, Tibetan colony Delhi, Majnu Ka Tilla food, Majnu Ka Tilla market, Little Tibet Delhi, Majnu Ka Tilla momos, Majnu Ka Tilla Korean cafe, Tibetan refugee colony Delhi, New Aruna Nagar",
  openGraph: {
    title: "Majnu Ka Tilla Guide: Delhi's Tibetan Colony",
    description:
      "A slice of Tibet on the banks of the Yamuna — momos, thukpa, Korean cafés, prayer-flag markets, and Delhi's most concentrated Tibetan cultural enclave.",
    url: "https://club.kudozz.in/blog/majnu-ka-tilla-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Generic representative Indian heritage architecture — used here as a placeholder, not a literal depiction of Majnu Ka Tilla",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Majnu Ka Tilla Guide: Delhi's Tibetan Colony",
    description:
      "Momos, thukpa, Korean cafés, and prayer-flag markets — the complete guide to Delhi's Tibetan colony on the Yamuna.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/majnu-ka-tilla-delhi-travel-guide",
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
          headline: "Majnu Ka Tilla Guide: Delhi's Tibetan Colony",
          description:
            "Majnu Ka Tilla travel guide — Delhi's Tibetan refugee colony on the Yamuna. Momos, thukpa, Korean cafés, prayer-flag markets, monastery visits, budget and tips.",
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
            "@id": "https://club.kudozz.in/blog/majnu-ka-tilla-delhi-travel-guide",
          },
          keywords:
            "Majnu Ka Tilla Delhi, Tibetan colony Delhi, Majnu Ka Tilla food, Majnu Ka Tilla market, Little Tibet Delhi",
          about: {
            "@type": "Place",
            name: "Majnu Ka Tilla",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Delhi",
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
                name: "Majnu Ka Tilla",
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
    q: "What is Majnu Ka Tilla famous for?",
    a: "Majnu Ka Tilla is Delhi's most concentrated Tibetan cultural enclave, unofficially nicknamed 'Little Tibet'. It's known for authentic Tibetan food (momos, thukpa, thenthuk), a dense market selling imported Korean and Tibetan goods, prayer flags and singing bowls, a working monastery, and — more recently — a cluster of Korean cafés and eateries that have made it a favourite hangout for Delhi University students.",
  },
  {
    q: "Is Majnu Ka Tilla safe?",
    a: "Yes, generally. It's a settled residential community with a strong local presence, and the market lanes stay busy with shoppers, students, and residents well into the evening. As with any dense market area, keep an eye on belongings, and remember it's a lived-in neighbourhood, not a tourist attraction built for visitors — a bit of everyday street-smarts goes a long way.",
  },
  {
    q: "Where is Majnu Ka Tilla located?",
    a: "Majnu Ka Tilla (formally New Aruna Nagar) sits on the west bank of the Yamuna in North Delhi, close to the GTB Nagar and Delhi University area, roughly midway between Old Delhi and North Campus. It's easily reached from the Vidhan Sabha metro station on the Red Line, followed by a short auto-rickshaw or walk.",
  },
  {
    q: "What food should I try in Majnu Ka Tilla?",
    a: "Start with steamed or pan-fried momos (chicken, pork, or vegetable) and a bowl of thukpa (noodle soup) at one of the long-running Tibetan eateries along the main market lane. Thenthuk (hand-pulled noodle soup) and shabhaley (a Tibetan meat pastry) are also worth seeking out. The colony has more recently become known for Korean cafés serving tteokbokki, kimbap, and Korean-style fried chicken.",
  },
  {
    q: "How much time do I need to visit Majnu Ka Tilla?",
    a: "Two to three hours is enough for a satisfying visit — enough time to walk the market, eat a proper meal, and step into the monastery. Food enthusiasts and market browsers often stretch it into a relaxed half-day, especially if combining a sit-down meal with a slower wander through the shopping lanes.",
  },
  {
    q: "What is the history of Majnu Ka Tilla as a Tibetan settlement?",
    a: "Tibetan refugees began settling on this stretch of the Yamuna's bank in the late 1950s and early 1960s, following the 1959 Tibetan uprising and the Dalai Lama's exile to India. The Indian government formally allotted land for the settlement over the following decades, and it grew into the dense, multi-storey colony seen today — one of several Tibetan settlements established across India during this period.",
  },
  {
    q: "Can I visit the monastery at Majnu Ka Tilla?",
    a: "Yes, the local Tibetan monastery within the colony is open to respectful visitors. Dress modestly, keep noise levels down, and ask before photographing monks or the interior — it's an active place of worship and community life, not a museum.",
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
  { id: "introduction", title: "A Slice of Tibet on the Yamuna", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Majnu Ka Tilla", level: 2 },
  { id: "market", title: "The Market & Shopping", level: 2 },
  { id: "food-guide", title: "The Food Scene", level: 2 },
  { id: "monastery", title: "Monastery & Community Life", level: 2 },
  { id: "history", title: "A Brief History", level: 2 },
  { id: "itinerary", title: "Suggested Half-Day Visit", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MajnuKaTillaGuidePage() {
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
              alt="Generic representative Indian heritage architecture — used here as a placeholder, not a literal depiction of Majnu Ka Tilla's Tibetan colony"
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
                { label: "Majnu Ka Tilla", href: null },
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
                "Majnu Ka Tilla",
                "Delhi",
                "Little Tibet",
                "Momos",
                "Off-beat",
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
              Majnu Ka Tilla: Delhi's Tibetan Colony on the Yamuna
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Prayer flags over narrow lanes, steaming plates of momos, and a
              market stacked with Korean and Tibetan imports — Majnu Ka Tilla
              is Delhi's most unexpected neighbourhood, and one of its most
              rewarding half-day detours.
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
                  text: "North Delhi, near GTB Nagar",
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
                  <h2>A Slice of Tibet on the Banks of the Yamuna</h2>
                  <p>
                    Tucked against the west bank of the Yamuna in North
                    Delhi, <strong>Majnu Ka Tilla</strong> — formally New
                    Aruna Nagar, but almost never called that — is a
                    settlement quite unlike anywhere else in the capital.
                    Established for Tibetan refugees in the late 1950s and
                    1960s, following the 1959 Tibetan uprising and the Dalai
                    Lama's exile to India, it has grown over six decades into
                    Delhi's most concentrated Tibetan cultural enclave, an
                    unofficial nickname that fits it perfectly: "Little
                    Tibet."
                  </p>
                  <p>
                    Step off the main road and the change is immediate.
                    Prayer flags string between rooftops, shopfronts sell
                    thangka paintings and singing bowls next to Korean
                    skincare and imported snacks, and the smell of steaming
                    momos drifts down narrow lanes barely wide enough for two
                    people to pass. It's a working, residential community
                    first — not a tourist attraction built for visitors — but
                    it welcomes respectful travellers warmly, and rewards
                    them with some of the most distinctive food and shopping
                    in the entire city.
                  </p>
                  <p>
                    Majnu Ka Tilla sits close to the{" "}
                    <Link href="/blog/kashmere-gate-delhi-travel-guide">
                      Kashmere Gate
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/old-delhi-travel-guide">Old Delhi</Link>{" "}
                    area, and pairs naturally with a broader{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi trip</Link> as
                    an easy, off-beat half-day add-on — a total change of
                    pace from the Mughal monuments and colonial avenues that
                    dominate most Delhi itineraries.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏮</span> Majnu Ka Tilla at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "North Delhi, west bank of the Yamuna",
                        },
                        {
                          icon: "🏛️",
                          label: "Formal Name",
                          value: "New Aruna Nagar",
                        },
                        {
                          icon: "🕰️",
                          label: "Established",
                          value: "Late 1950s–1960s",
                        },
                        {
                          icon: "🚇",
                          label: "Nearest Metro",
                          value: "Vidhan Sabha (Red Line)",
                        },
                        {
                          icon: "🥟",
                          label: "Known For",
                          value: "Momos, market, Korean cafés",
                        },
                        {
                          icon: "💰",
                          label: "Half-Day Budget",
                          value: "₹300 – ₹1,200",
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
                  <h2>Best Time to Visit</h2>
                  <p>
                    Majnu Ka Tilla is an indoor-and-lane experience more than
                    an open-air monument, so it's genuinely visitable
                    year-round — but a few windows make the visit more
                    comfortable.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, pleasant weather makes wandering the narrow lanes and eating outdoors far more comfortable than the extremes of summer.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — visit in the evening",
                        text: "Delhi's summer heat makes daytime lane-walking uncomfortable; an early evening visit for dinner works much better.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — carry an umbrella",
                        text: "The narrow lanes can flood lightly during heavy showers, but the market stays lively and covered eateries make it a good rainy-day option.",
                      },
                      {
                        season: "Evenings, any season",
                        emoji: "🌆",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Liveliest atmosphere",
                        text: "The market lanes and cafés fill up after 5 PM, especially with DU students — evenings capture the neighbourhood's energy best.",
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
                    <strong>Our pick:</strong> a weekday evening between
                    October and March — cool enough for a relaxed walk, and
                    timed for when the market and food stalls are at their
                    busiest and most atmospheric.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Majnu Ka Tilla</h2>
                  <p>
                    Majnu Ka Tilla sits in North Delhi, close to the Delhi
                    University North Campus and GTB Nagar area, roughly
                    midway between{" "}
                    <Link href="/blog/old-delhi-travel-guide">Old Delhi</Link>{" "}
                    and the university belt — genuinely easy to reach from
                    almost anywhere in the city.
                  </p>
                  <ul>
                    <li>
                      <strong>By Metro:</strong> The nearest station is{" "}
                      <strong>Vidhan Sabha</strong> on the Red Line, about a
                      10–15 minute auto-rickshaw ride or a longer walk from
                      the colony. GTB Nagar station (Yellow Line) also works
                      as an alternative approach from the university side.
                    </li>
                    <li>
                      <strong>By Auto-Rickshaw or Cab:</strong> The most
                      convenient option from most parts of Delhi — app-based
                      cabs and autos can drop you right at the colony's main
                      entrance on the Outer Ring Road side.
                    </li>
                    <li>
                      <strong>By Road from Old Delhi:</strong> Only a short
                      drive from{" "}
                      <Link href="/blog/kashmere-gate-delhi-travel-guide">
                        Kashmere Gate
                      </Link>{" "}
                      and the ISBT area, making it easy to combine with a
                      broader Old Delhi day.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The colony's lanes are too
                    narrow for cars — get dropped at the main entrance near
                    the Outer Ring Road and walk in from there. Auto and cab
                    apps generally know the drop-off point as "Majnu Ka
                    Tilla" directly.
                  </div>
                </section>

                {/* ── Market ────────────────────────────────────────────── */}
                <section id="market">
                  <h2>The Market & Shopping</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Generic representative Indian market-town imagery, used as a placeholder — not a literal depiction of Majnu Ka Tilla's market lanes"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The main market lane running through Majnu Ka Tilla is a
                    dense, narrow strip of shops that feels closer to a
                    Southeast Asian night market than anything else in
                    Delhi. Stalls and small storefronts sell a genuinely
                    unusual mix for the city:
                  </p>
                  <ul>
                    <li>
                      <strong>Imported Korean goods:</strong> Skincare,
                      snacks, instant noodles, and packaged foods that are
                      hard to find elsewhere in Delhi — a big part of why the
                      colony draws Korean-culture enthusiasts and K-pop fans.
                    </li>
                    <li>
                      <strong>Clothing and streetwear:</strong> Affordable
                      jackets, sweaters, and casual wear, popular with
                      students hunting for winter layers at reasonable
                      prices.
                    </li>
                    <li>
                      <strong>Tibetan handicrafts and jewellery:</strong>{" "}
                      Turquoise and coral jewellery, silver pieces, and
                      handmade accessories reflecting Tibetan design
                      traditions.
                    </li>
                    <li>
                      <strong>Prayer flags and singing bowls:</strong> Strings
                      of colourful Tibetan prayer flags, hand-hammered
                      singing bowls, and small Buddhist devotional items —
                      genuinely worthwhile souvenirs, not mass-produced
                      tourist trinkets.
                    </li>
                    <li>
                      <strong>Thangka paintings and prints:</strong> Religious
                      Tibetan scroll paintings, both handmade and printed,
                      available at a range of price points.
                    </li>
                  </ul>
                  <p>
                    Prices here are generally reasonable and only lightly
                    negotiable at most stalls — a different rhythm from Old
                    Delhi's markets. Cash remains the most reliable payment
                    method at smaller stalls, though many of the larger cafés
                    and shops now accept UPI.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>The Food Scene</h2>
                  <p>
                    Food is, without question, the biggest draw of Majnu Ka
                    Tilla — and it operates on two distinct tracks that have
                    grown up side by side over the years.
                  </p>
                  <h3>Authentic Tibetan Food</h3>
                  <p>
                    The colony's long-running Tibetan eateries serve some of
                    the most authentic Tibetan food in Delhi, largely
                    unchanged from what's been cooked here for decades:
                  </p>
                  <ul>
                    <li>
                      <strong>Momos:</strong> Steamed or pan-fried dumplings
                      filled with chicken, pork, or vegetables, served with a
                      fiery red chilli chutney — the neighbourhood's
                      undisputed signature dish.
                    </li>
                    <li>
                      <strong>Thukpa:</strong> A hearty noodle soup with
                      vegetables and meat, especially good on a cold Delhi
                      evening.
                    </li>
                    <li>
                      <strong>Thenthuk:</strong> Hand-pulled, flat noodle
                      soup, a heartier cousin of thukpa and a bit harder to
                      find outside genuine Tibetan kitchens.
                    </li>
                    <li>
                      <strong>Shabhaley:</strong> A pan-fried Tibetan pastry
                      filled with spiced minced meat — a lesser-known but
                      excellent snack worth ordering alongside momos.
                    </li>
                  </ul>
                  <h3>Korean Cafés & the DU Crowd</h3>
                  <p>
                    In the last decade, Majnu Ka Tilla has also become an
                    unlikely hub for Korean food and culture, largely fuelled
                    by its proximity to Delhi University's North Campus.
                    Small Korean cafés and eateries now sit alongside the
                    Tibetan originals, serving tteokbokki, kimbap, Korean
                    fried chicken, and imported Korean instant noodles — a
                    genuinely popular weekend spot for DU students and anyone
                    curious about Korean street food without leaving the
                    city.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Order momos from a stall
                    that's clearly been there for years rather than the
                    newest-looking storefront — longevity is generally the
                    best signal of quality in Majnu Ka Tilla's food scene.
                  </div>
                </section>

                {/* ── Monastery ─────────────────────────────────────────── */}
                <section id="monastery">
                  <h2>Monastery & Tibetan Community Life</h2>
                  <p>
                    At the heart of the colony sits a working{" "}
                    <strong>Tibetan Buddhist monastery</strong>, a quiet
                    counterpoint to the bustle of the market lanes outside.
                    Maroon-robed monks are a common, everyday sight around
                    the colony, and the monastery itself remains open to
                    respectful visitors interested in a few quiet minutes
                    away from the crowds.
                  </p>
                  <p>
                    Beyond the monastery, Majnu Ka Tilla functions as a real,
                    living residential community — multi-storey buildings
                    packed close together, small courtyards strung with
                    prayer flags, and a genuine sense of Tibetan cultural
                    continuity that's rare to find concentrated so densely
                    anywhere else in India. It's worth remembering, while
                    exploring, that this is home to thousands of people, not
                    a themed attraction — a little courtesy goes a long way.
                  </p>
                </section>

                {/* ── History ───────────────────────────────────────────── */}
                <section id="history">
                  <h2>A Brief History of Tibetan Refugee Settlement</h2>
                  <p>
                    Majnu Ka Tilla's story is part of a much larger one.
                    Following the <strong>1959 Tibetan uprising</strong> and
                    the flight of the 14th Dalai Lama into exile in India,
                    tens of thousands of Tibetan refugees followed over the
                    subsequent years, settling across several locations the
                    Indian government made available to them — from
                    Dharamshala in Himachal Pradesh to settlements in
                    Karnataka and beyond.
                  </p>
                  <p>
                    In Delhi, a Tibetan refugee camp took root on this stretch
                    of land beside the Yamuna in the <strong>late 1950s and
                    1960s</strong>, initially as a temporary settlement. Over
                    the following decades, through the 1960s to the 1970s,
                    the Indian government formally allotted land here, and
                    what began as a refugee camp gradually grew into the
                    dense, permanent, multi-generational neighbourhood seen
                    today.
                  </p>
                  <p>
                    More than six decades on, Majnu Ka Tilla remains home to
                    a community that has preserved its language, food,
                    religious practice, and cultural identity while building
                    a genuinely integrated life within Delhi — a living piece
                    of Tibetan history that continues, unbroken, on the banks
                    of the Yamuna.
                  </p>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Half-Day Visit</h2>
                  <p>
                    Majnu Ka Tilla is best treated as a relaxed half-day
                    detour rather than a rushed stop — here's a simple plan
                    that covers the highlights without feeling hurried.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Step 1",
                        title: "Arrive & Orient",
                        color: "bg-amber-700",
                        activities: [
                          "Get dropped at the main entrance near the Outer Ring Road",
                          "Walk into the colony's main lane on foot",
                          "Take in the prayer flags and shopfronts as you enter",
                        ],
                      },
                      {
                        day: "Step 2",
                        title: "Browse the Market",
                        color: "bg-forest-600",
                        activities: [
                          "Wander the main shopping lane",
                          "Browse Korean imports, clothing, and Tibetan handicrafts",
                          "Pick up prayer flags or a singing bowl as a souvenir",
                        ],
                      },
                      {
                        day: "Step 3",
                        title: "Visit the Monastery",
                        color: "bg-sky-600",
                        activities: [
                          "Step into the local Tibetan Buddhist monastery",
                          "Spend a few quiet minutes away from the market bustle",
                          "Photograph respectfully, and only with permission",
                        ],
                      },
                      {
                        day: "Step 4",
                        title: "Eat",
                        color: "bg-purple-600",
                        activities: [
                          "Sit down for momos and thukpa at a long-running Tibetan eatery",
                          "Or try a Korean café for tteokbokki and kimbap",
                          "Round it off with tea or a Korean-style snack",
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
                    * The whole plan comfortably fits into 2–3 hours, making
                    it an easy add-on to an Old Delhi or North Campus day
                    rather than a standalone trip.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Majnu Ka Tilla is one of Delhi's most affordable off-beat
                    stops — a satisfying visit, food included, rarely
                    crosses a modest daily budget.
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
                          ["Momos & thukpa meal", "₹150", "₹300", "₹500"],
                          ["Korean café meal", "₹250", "₹500", "₹900"],
                          [
                            "Market souvenirs (per item)",
                            "₹100",
                            "₹400",
                            "₹1,200",
                          ],
                          [
                            "Local transport (round trip)",
                            "₹150",
                            "₹300",
                            "₹600",
                          ],
                          ["Half-day total (approx.)", "₹400", "₹1,000", "₹2,500"],
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
                    * Prices are indicative and vary by stall. Cash remains
                    the most reliable payment method at smaller vendors.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Majnu Ka Tilla</h2>
                  <ul>
                    <li>
                      <strong>Carry cash:</strong> Many of the smaller food
                      stalls and market shops still prefer cash, even as UPI
                      has become more common at larger cafés.
                    </li>
                    <li>
                      <strong>Expect narrow lanes:</strong> The colony's
                      interior lanes are pedestrian-only and genuinely
                      cramped in places — comfortable footwear helps more
                      than it might seem.
                    </li>
                    <li>
                      <strong>Photograph respectfully:</strong> This is a
                      residential refugee community, not a photo backdrop —
                      ask before photographing people, homes, or the
                      monastery's interior.
                    </li>
                    <li>
                      <strong>Visit the monastery quietly:</strong> Keep
                      noise down and dress modestly if stepping inside.
                    </li>
                    <li>
                      <strong>Go hungry:</strong> The food is the main event
                      — arrive with an appetite rather than filling up
                      beforehand.
                    </li>
                    <li>
                      <strong>Evenings are liveliest:</strong> The market and
                      cafés pick up noticeably after 5 PM, especially with
                      the student crowd from nearby DU colleges.
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
                          "Carry cash for smaller stalls and shops",
                          "Try momos, thukpa, and at least one Korean café",
                          "Ask before photographing residents or monks",
                          "Visit the monastery quietly and dress modestly",
                          "Go in the evening for the liveliest atmosphere",
                          "Support long-running local eateries and shops",
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
                          "Treat it as a photo-op attraction rather than a home",
                          "Expect large vehicles to fit through the interior lanes",
                          "Assume every stall accepts card or UPI",
                          "Photograph inside the monastery without asking",
                          "Rush through — the food and market reward slow browsing",
                          "Be loud or disruptive near the monastery grounds",
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
                    <strong>🗺️ Extend the trip:</strong> Majnu Ka Tilla pairs
                    naturally with a stop at{" "}
                    <Link href="/blog/kashmere-gate-delhi-travel-guide">
                      Kashmere Gate
                    </Link>{" "}
                    or a fuller day exploring{" "}
                    <Link href="/blog/old-delhi-travel-guide">Old Delhi</Link>
                    's lanes and monuments — both are a short ride away and
                    combine well with this half-day detour.
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
                  "Majnu Ka Tilla",
                  "Delhi",
                  "Little Tibet",
                  "Tibetan Colony",
                  "Momos",
                  "Street Food",
                  "Off-beat Delhi",
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

              <RelatedPostsGrid currentSlug="majnu-ka-tilla-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="majnu-ka-tilla-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
