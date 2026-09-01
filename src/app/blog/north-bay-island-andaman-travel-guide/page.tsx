// src/app/blog/north-bay-island-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "North Bay Island Andaman: Coral, Sea Walking & Visit Guide",
  description:
    "Complete North Bay Island guide — glass-bottom boats, snorkelling, sea walking, and scuba diving a short boat ride from Port Blair. Timings, budget, and how to pair it with Ross Island.",
  keywords:
    "North Bay Island, North Bay Andaman, sea walking Andaman, glass bottom boat Port Blair, North Bay snorkelling, North Bay lighthouse, Ross Island North Bay tour, coral reef Port Blair, North Bay scuba diving, Andaman day trip",
  openGraph: {
    title: "North Bay Island Andaman: Coral, Sea Walking & Visit Guide",
    description:
      "A short boat ride from Port Blair — glass-bottom boats, snorkelling, and a helmet sea walk over coral, usually paired with a Ross Island visit.",
    url: "https://club.kudozz.in/blog/north-bay-island-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Turquoise coral-reef water off North Bay Island near Port Blair, Andaman",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "North Bay Island Andaman: Coral, Sea Walking & Visit Guide",
    description:
      "Glass-bottom boats, sea walking, and snorkelling over coral — the complete North Bay Island guide.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/north-bay-island-andaman-travel-guide",
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
          headline: "North Bay Island Andaman: Coral, Sea Walking & Visit Guide",
          description:
            "Complete North Bay Island guide — glass-bottom boats, snorkelling, sea walking, and scuba diving a short boat ride from Port Blair. Timings, budget, and how to pair it with Ross Island.",
          image: "https://club.kudozz.in/images/destinations/andaman/hero.jpg",
          datePublished: "2026-09-01",
          dateModified: "2026-09-01",
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
            "@id": "https://club.kudozz.in/blog/north-bay-island-andaman-travel-guide",
          },
          keywords:
            "North Bay Island, sea walking, glass bottom boat, North Bay lighthouse, Ross Island, coral reef, Port Blair",
          about: {
            "@type": "Place",
            name: "North Bay Island",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Andaman and Nicobar Islands",
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
                name: "Andaman Islands",
                item: "https://club.kudozz.in/blog/andaman-islands-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "North Bay Island",
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
    q: "How do I get to North Bay Island?",
    a: "North Bay Island isn't connected by road — you reach it only by boat, either a government ferry or a private speedboat, both departing from Port Blair's Phoenix Bay or Rajiv Gandhi Water Sports Complex jetty. The crossing takes roughly 20-30 minutes, and most visitors book it as part of a combined North Bay + Ross Island half-day package.",
  },
  {
    q: "Is North Bay Island good for non-swimmers?",
    a: "Yes — sea walking is specifically designed for non-swimmers. You wear a weighted helmet that keeps air flowing while you walk along the sea floor among coral and fish, without needing any swimming ability. Glass-bottom boat rides are an even easier option if you'd rather stay dry entirely.",
  },
  {
    q: "Do I need to know how to swim to snorkel here?",
    a: "Basic swimming ability helps but isn't strictly mandatory — most operators provide life jackets and a guide stays close by in shallow snorkelling zones. If you're not confident in water at all, sea walking or the glass-bottom boat are safer, easier alternatives.",
  },
  {
    q: "Can I combine North Bay with Ross Island in one day?",
    a: "Yes, and most visitors do exactly this. Boats commonly run a Port Blair → North Bay → Ross Island loop (or the reverse), letting you fit both into a single half-day outing without arranging separate trips.",
  },
  {
    q: "How much does sea walking cost at North Bay?",
    a: "Sea walking typically costs somewhere in the ₹2,500-₹3,500 range per person, while glass-bottom boat rides and basic snorkelling are considerably cheaper, often ₹300-₹600. Scuba diving, if you add it, costs more and is usually booked as a separate package.",
  },
  {
    q: "Is the coral at North Bay still healthy?",
    a: "Coral cover and visibility vary by season and can be affected by storms or bleaching events, so it isn't guaranteed to look pristine on every visit — it's honest to expect a decent but not flawless reef compared to more protected areas like Jolly Buoy Island. Going with a reputable local operator and asking about recent conditions is worth doing before you book.",
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
  { id: "introduction", title: "Port Blair's Easiest Reef", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "activities", title: "Things to Do", level: 2 },
  { id: "pairing-ross-island", title: "Pairing with Ross Island", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Facilities", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NorthBayIslandGuidePage() {
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
              src="/images/destinations/andaman/hero.jpg"
              alt="Turquoise coral-reef water off North Bay Island near Port Blair, Andaman"
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
                { label: "Andaman Islands", href: "/blog/andaman-islands-travel-guide" },
                { label: "North Bay Island", href: null },
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
                "North Bay Island",
                "Andaman",
                "Sea Walking",
                "Snorkelling",
                "Ross Island",
                "Day Trip",
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
              North Bay Island: Coral, Sea Walking & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A 20-minute boat ride from Port Blair drops you into calm,
              coral-fringed water — glass-bottom boats, a helmet sea walk, and
              snorkelling, almost always paired with a Ross Island visit the
              same morning.
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
                  text: "North Bay, near Port Blair",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
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
                  <h2>Port Blair's Easiest Reef</h2>
                  <p>
                    <strong>North Bay Island</strong> is the closest and
                    easiest introduction to the Andamans' underwater world —
                    a small island just off{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair
                    </Link>
                    , reached by a short boat ride rather than a multi-hour
                    ferry to Havelock. Calm, sheltered water and a fringing
                    coral reef make it the default half-day activity for
                    anyone spending their first or last day in Port Blair
                    before or after the outer islands.
                  </p>
                  <p>
                    What sets North Bay apart from the Andamans' bigger dive
                    and snorkel destinations isn't the quality of the reef —
                    Havelock and Jolly Buoy generally beat it on that front —
                    it's accessibility. You don't need to commit to Havelock's
                    ferry crossing or Jolly Buoy's early-morning departure
                    from Wandoor; North Bay is close enough to fold into a
                    single unhurried morning from the capital.
                  </p>
                  <p>
                    It's almost always visited together with{" "}
                    <Link href="/blog/ross-island-andaman-travel-guide">
                      Ross Island
                    </Link>
                    , since boats run a combined circuit between Port Blair,
                    North Bay, and Ross — pairing a short water activity with
                    a walk through colonial ruins in the same trip.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐠</span> North Bay Island at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "~20-30 min boat ride from Port Blair",
                        },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Sea walking, snorkelling, glass-bottom boats",
                        },
                        {
                          icon: "🎟️",
                          label: "Permit",
                          value: "None for Indian nationals",
                        },
                        {
                          icon: "⏰",
                          label: "Best Visited",
                          value: "Morning, before the sea breeze picks up",
                        },
                        {
                          icon: "🚤",
                          label: "How to Reach",
                          value: "Boat only — no road access",
                        },
                        {
                          icon: "🗺️",
                          label: "Usually Paired With",
                          value: "Ross Island",
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
                  <h2>Best Time to Visit North Bay Island</h2>
                  <p>
                    North Bay follows the same broad seasonal pattern as the
                    rest of the Andamans, but because visibility and sea
                    conditions matter more here than on a beach visit, timing
                    within the day counts almost as much as the season.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best conditions",
                        text: "Calm seas, clear water, and comfortable temperatures make this the most reliable window for both the boat crossing and underwater visibility.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Good, warmer",
                        text: "Seas stay largely calm and visibility remains good, though air and water temperatures climb — still a solid window, especially for early-morning visits.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Avoid",
                        text: "Monsoon swells make the boat crossing rougher and visibility drops sharply — activities are frequently suspended for safety.",
                      },
                      {
                        season: "Morning vs Afternoon",
                        emoji: "🕗",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Timing within the day",
                        text: "Mornings generally have calmer water and better light for snorkelling and sea walking before the afternoon sea breeze picks up chop.",
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
                    <strong>Our pick:</strong> a November-February morning
                    departure — the combination of calm seas and clear light
                    gives you the best shot at good visibility for whichever
                    activity you choose.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach North Bay Island</h2>
                  <p>
                    North Bay has no permanent settlement and no road link —
                    every visitor arrives by boat from Port Blair.
                  </p>
                  <ul>
                    <li>
                      <strong>By Government Ferry:</strong> Cheaper, scheduled
                      departures from Phoenix Bay Jetty, usually as part of a
                      combined North Bay-Ross Island round trip.
                    </li>
                    <li>
                      <strong>By Private Speedboat:</strong> Faster and more
                      flexible on timing, departing from the Rajiv Gandhi
                      Water Sports Complex — the common choice if you're
                      booking activities through a private operator.
                    </li>
                    <li>
                      <strong>Through a Tour Package:</strong> Most Port Blair
                      travel desks and hotels sell a bundled North Bay + Ross
                      Island half-day package that includes the boat, entry,
                      and time at both islands.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book the North Bay + Ross
                    Island combined trip rather than arranging each
                    separately — it's cheaper, saves a second jetty departure,
                    and is how the vast majority of boats already run.
                  </div>
                </section>

                {/* ── Activities ─────────────────────────────────────────── */}
                <section id="activities">
                  <h2>Things to Do at North Bay Island</h2>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="Snorkellers and a glass-bottom boat over the coral reef at North Bay Island, Andaman"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <h3>Sea Walking</h3>
                  <p>
                    A weighted helmet feeds you a continuous supply of air
                    while you walk along the sandy sea floor among coral and
                    reef fish — no swimming ability required at all, which
                    makes it North Bay's signature draw for travellers who
                    want an underwater experience without getting in over
                    their head, literally.
                  </p>

                  <h3>Glass-Bottom Boat Rides</h3>
                  <p>
                    The simplest option: a boat with a transparent panel in
                    its hull lets you view the coral and fish below while
                    staying completely dry — a good pick for young children,
                    older travellers, or anyone who'd rather skip getting wet
                    entirely.
                  </p>

                  <h3>Snorkelling</h3>
                  <p>
                    Shallow reef patches close to shore are accessible to
                    reasonably confident swimmers with a mask, snorkel, and
                    life jacket, usually with an operator's guide staying
                    close by.
                  </p>

                  <h3>Scuba Diving</h3>
                  <p>
                    North Bay also has a handful of dive sites suited to
                    both beginners and certified divers, though serious
                    divers generally rate{" "}
                    <Link href="/blog/havelock-island-andaman-travel-guide">
                      Havelock's
                    </Link>{" "}
                    dive sites higher — North Bay's diving is best treated as
                    a convenient extra rather than the main reason to come.
                  </p>

                  <h3>The Lighthouse</h3>
                  <p>
                    A working lighthouse on the island can be climbed for
                    views back toward Port Blair's harbour and the
                    surrounding water — a quick, low-effort add-on between
                    water activities.
                  </p>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Coral health and visibility
                    at North Bay vary by season and can be affected by
                    storms — don't expect guaranteed pristine coral on every
                    visit. Ask your operator about current conditions before
                    booking pricier activities like sea walking.
                  </div>
                </section>

                {/* ── Pairing with Ross Island ───────────────────────────── */}
                <section id="pairing-ross-island">
                  <h2>Pairing North Bay with Ross Island</h2>
                  <p>
                    Because both islands sit close together and are reached
                    from the same Port Blair jetties, boats commonly run a
                    single combined circuit — Port Blair → North Bay → Ross
                    Island, or the reverse. Doing them together turns two
                    separate half-day trips into one, leaving your other days
                    free for Havelock, Neil, or Port Blair's own sights like
                    the{" "}
                    <Link href="/blog/cellular-jail-andaman-travel-guide">
                      Cellular Jail
                    </Link>
                    .
                  </p>
                  <p>
                    The two make a natural contrast too: North Bay for water
                    activities, Ross Island for a quiet walk through
                    jungle-swallowed colonial ruins — a good split of active
                    and reflective time within a single outing.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Half-Day)</h2>
                  <p>
                    Most North Bay visits are built around a single morning
                    or early-afternoon slot, combined with Ross Island.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-30 min",
                        title: "Depart Port Blair",
                        color: "bg-amber-700",
                        activities: [
                          "Board your ferry or speedboat at Phoenix Bay or the Water Sports Complex",
                          "Short 20-30 minute crossing to North Bay",
                        ],
                      },
                      {
                        day: "30-120 min",
                        title: "Water Activities at North Bay",
                        color: "bg-sky-600",
                        activities: [
                          "Sea walking, glass-bottom boat, or snorkelling — pick one or two",
                          "Optional scuba dive if you've booked one",
                          "A quick stop at the lighthouse if time allows",
                        ],
                      },
                      {
                        day: "120-180 min",
                        title: "Cross to Ross Island",
                        color: "bg-forest-600",
                        activities: [
                          "Short boat transfer to Ross Island",
                          "Walk the ruins, museum, and deer-roamed grounds",
                        ],
                      },
                      {
                        day: "180-210 min",
                        title: "Return to Port Blair",
                        color: "bg-stone-600",
                        activities: [
                          "Final boat leg back to the jetty",
                          "Free afternoon for Port Blair sightseeing",
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
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food & Facilities</h2>
                  <p>
                    North Bay has minimal food infrastructure — a few basic
                    snack stalls near the jetty, nothing more. Most visitors
                    eat before departing Port Blair or wait until returning,
                    where the capital's restaurants offer far better options.
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
                          [
                            "Boat transfer (return)",
                            "₹500 (ferry)",
                            "₹1,000 (speedboat)",
                            "₹1,500 (private charter)",
                          ],
                          [
                            "Glass-bottom boat",
                            "₹300",
                            "₹400",
                            "—",
                          ],
                          [
                            "Sea walking",
                            "—",
                            "₹2,800",
                            "₹3,500",
                          ],
                          [
                            "Snorkelling gear rental",
                            "₹300",
                            "₹500",
                            "₹800",
                          ],
                          ["Total (approx., per person)", "₹1,100", "₹4,700", "₹5,800"],
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
                    * Figures are per person and exclude scuba diving, which
                    is priced separately. Combine with a{" "}
                    <Link href="/blog/ross-island-andaman-travel-guide">
                      Ross Island
                    </Link>{" "}
                    visit to spread the boat cost across both stops.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting North Bay Island</h2>
                  <ul>
                    <li>
                      <strong>Book the combined North Bay + Ross Island
                      trip:</strong> It's cheaper and more efficient than
                      arranging two separate boat trips.
                    </li>
                    <li>
                      <strong>Go in the morning:</strong> Calmer seas and
                      clearer light give the best conditions for water
                      activities before the afternoon breeze picks up.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Activity operators and
                      snack stalls on the island often don't accept cards.
                    </li>
                    <li>
                      <strong>Don't touch the coral:</strong> Whether
                      snorkelling or sea walking, keep hands and fins off the
                      reef to avoid damaging it.
                    </li>
                    <li>
                      <strong>Carry sun protection:</strong> There's limited
                      shade on the water and reef-safe sunscreen protects
                      both you and the coral.
                    </li>
                    <li>
                      <strong>Set expectations on coral quality:</strong> If
                      pristine coral is your priority, note that{" "}
                      <Link href="/blog/jolly-buoy-island-andaman-travel-guide">
                        Jolly Buoy Island
                      </Link>{" "}
                      generally has better-preserved reefs, though it takes
                      longer to reach.
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
                          "Book the combined North Bay + Ross Island trip",
                          "Go in the morning for calmer water",
                          "Try sea walking if you can't swim confidently",
                          "Carry cash for on-island activities",
                          "Wear reef-safe sunscreen",
                          "Ask operators about current coral conditions",
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
                          "Expect food options beyond basic snack stalls",
                          "Touch or stand on the coral",
                          "Book separate trips for North Bay and Ross Island",
                          "Expect guaranteed pristine coral every visit",
                          "Skip life jackets while snorkelling",
                          "Visit during monsoon swells if avoidable",
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
                    <strong>🗺️ Extend the trip:</strong> After North Bay and
                    Ross Island, spend the rest of your day in{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair
                    </Link>{" "}
                    itself — the Cellular Jail's evening light-and-sound show
                    pairs well with a water-heavy morning.
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
                  "North Bay Island",
                  "Andaman",
                  "Sea Walking",
                  "Snorkelling",
                  "Ross Island",
                  "Port Blair",
                  "Coral Reef",
                  "Day Trip",
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

              <RelatedPostsGrid currentSlug="north-bay-island-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="north-bay-island-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
