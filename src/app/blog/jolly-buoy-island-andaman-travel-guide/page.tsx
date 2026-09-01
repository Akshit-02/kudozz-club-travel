// src/app/blog/jolly-buoy-island-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Jolly Buoy Island Andaman: Marine Park Visit Guide",
  description:
    "Complete Jolly Buoy Island guide — the Andamans' best-preserved coral reef inside Mahatma Gandhi Marine National Park. Timings, monsoon closure dates, rules, and how to book.",
  keywords:
    "Jolly Buoy Island, Mahatma Gandhi Marine National Park, Wandoor Andaman, Jolly Buoy snorkelling, Jolly Buoy timings, Jolly Buoy closed monsoon, best coral reef Andaman, Jolly Buoy permit, Wandoor jetty",
  openGraph: {
    title: "Jolly Buoy Island Andaman: Marine Park Visit Guide",
    description:
      "Some of the clearest water and healthiest coral in the Andamans, protected inside a marine national park — with strict visitor limits and a seasonal closure.",
    url: "https://club.kudozz.in/blog/jolly-buoy-island-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Clear turquoise water and coral reef at Jolly Buoy Island, Mahatma Gandhi Marine National Park, Andaman",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jolly Buoy Island Andaman: Marine Park Visit Guide",
    description:
      "The Andamans' best-preserved reef, protected inside a marine national park with strict visitor limits and a seasonal closure.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jolly-buoy-island-andaman-travel-guide",
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
          headline: "Jolly Buoy Island Andaman: Marine Park Visit Guide",
          description:
            "Complete Jolly Buoy Island guide — the Andamans' best-preserved coral reef inside Mahatma Gandhi Marine National Park. Timings, monsoon closure dates, rules, and how to book.",
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
            "@id": "https://club.kudozz.in/blog/jolly-buoy-island-andaman-travel-guide",
          },
          keywords:
            "Jolly Buoy Island, Mahatma Gandhi Marine National Park, Wandoor, coral reef, snorkelling, monsoon closure",
          about: {
            "@type": "Place",
            name: "Jolly Buoy Island",
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
                name: "Jolly Buoy Island",
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
    q: "Is Jolly Buoy Island open all year?",
    a: "No — it closes for roughly four months during the southwest monsoon, typically from around May/June through September, when Mahatma Gandhi Marine National Park shuts to visitors entirely. Always confirm current opening dates before planning your trip, since they can shift slightly year to year.",
  },
  {
    q: "Do I need to book in advance?",
    a: "Advance booking isn't always mandatory, but it's strongly advisable — the Forest Department caps the number of visitors allowed on the island each day to protect the reef, and boats can sell out during peak season (November-February). Booking through a Port Blair travel desk a day or two ahead is the safer approach.",
  },
  {
    q: "Can I stay overnight on Jolly Buoy Island?",
    a: "No — overnight stays aren't permitted. Jolly Buoy is a strict day-trip destination; all visitors return to the mainland by boat the same day.",
  },
  {
    q: "What's not allowed on the island?",
    a: "Plastic and other non-biodegradable items are banned to protect the marine park's ecosystem, and touching or standing on the coral is strictly prohibited. Expect bags to be checked before boarding.",
  },
  {
    q: "How does Jolly Buoy compare to North Bay Island for snorkelling?",
    a: "Jolly Buoy generally has clearer water and healthier, more protected coral, largely because visitor numbers are capped and it sits inside a national park rather than being freely accessible year-round like North Bay. The tradeoff is it's further from Port Blair and only open outside the monsoon.",
  },
  {
    q: "How do I get to Jolly Buoy Island?",
    a: "You travel by road from Port Blair to Wandoor jetty (roughly 30 km, about an hour), then take a Forest Department or authorised boat from Wandoor to the island — there's no direct boat from Port Blair itself.",
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
  { id: "introduction", title: "The Andamans' Best-Kept Reef", level: 2 },
  { id: "best-time", title: "Best Time & Seasonal Closure", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "marine-park-rules", title: "Marine Park Rules", level: 2 },
  { id: "snorkelling", title: "Snorkelling & What You'll See", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Facilities", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JollyBuoyIslandGuidePage() {
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
              alt="Clear turquoise water and coral reef at Jolly Buoy Island, Mahatma Gandhi Marine National Park, Andaman"
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
                { label: "Jolly Buoy Island", href: null },
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
                "Jolly Buoy Island",
                "Andaman",
                "Marine National Park",
                "Snorkelling",
                "Wandoor",
                "Coral Reef",
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
              Jolly Buoy Island: The Andamans' Best-Preserved Reef
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Protected inside Mahatma Gandhi Marine National Park, with
              capped daily visitor numbers and a strict no-plastic policy —
              Jolly Buoy is the reason serious snorkellers build a day around
              Wandoor rather than Port Blair's easier islands.
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
                  text: "Wandoor, South Andaman",
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
                  <h2>The Andamans' Best-Kept Reef</h2>
                  <p>
                    <strong>Jolly Buoy Island</strong> sits inside Mahatma
                    Gandhi Marine National Park near Wandoor, roughly 30 km
                    from{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair
                    </Link>
                    , and is widely considered to have some of the clearest
                    water and healthiest coral easily reachable on the
                    mainland Andaman circuit. The reason isn't luck — it's
                    protection. The Forest Department caps how many visitors
                    are allowed on the island each day, which keeps the reef
                    in noticeably better shape than more freely accessible
                    spots.
                  </p>
                  <p>
                    That protection comes with real logistics: Jolly Buoy is
                    open only outside the monsoon, reachable only from
                    Wandoor rather than directly from Port Blair, and closed
                    to overnight stays entirely. None of this is a
                    dealbreaker — it just means visiting Jolly Buoy takes a
                    bit more planning than{" "}
                    <Link href="/blog/north-bay-island-andaman-travel-guide">
                      North Bay Island
                    </Link>
                    , which most visitors do more casually and on shorter
                    notice.
                  </p>
                  <p>
                    If clear-water snorkelling over healthy coral is a
                    priority on your Andaman trip, Jolly Buoy is usually
                    where seasoned visitors and dive operators point first.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐠</span> Jolly Buoy Island at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Mahatma Gandhi Marine National Park, Wandoor",
                        },
                        {
                          icon: "🚗",
                          label: "From Port Blair",
                          value: "~30 km to Wandoor jetty, ~1 hr by road",
                        },
                        {
                          icon: "📅",
                          label: "Open",
                          value: "Roughly Oct – Apr/May (closed monsoon)",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Capped daily visitor numbers",
                        },
                        {
                          icon: "🚫",
                          label: "Rules",
                          value: "No plastic, no touching coral, no overnight stay",
                        },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "The Andamans' clearest accessible reef",
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

                {/* ── Best Time / Closure ───────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit & the Monsoon Closure</h2>
                  <p>
                    Jolly Buoy's opening dates are tied directly to the
                    monsoon, unlike most Andaman attractions which merely get
                    less pleasant during the rains — this one closes outright.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Peak season — best visibility",
                        text: "Calm seas and the clearest water of the year make this the ideal window, though it's also when visitor caps fill fastest — book ahead.",
                      },
                      {
                        season: "Mar – Apr/May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Good, quieter",
                        text: "Still within the open season, with good visibility and thinner crowds than peak winter — a solid alternative if you can't get a winter slot.",
                      },
                      {
                        season: "Roughly May/Jun – Sep",
                        emoji: "🚫",
                        color: "bg-red-50 border-red-200",
                        mood: "Closed",
                        text: "Mahatma Gandhi Marine National Park, including Jolly Buoy, shuts entirely during the southwest monsoon. Confirm exact reopening dates before planning a shoulder-season trip.",
                      },
                      {
                        season: "Booking Window",
                        emoji: "📅",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Plan ahead",
                        text: "Because daily numbers are capped, booking a day or two in advance through a Port Blair travel desk is safer than assuming walk-up availability, especially December-January.",
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
                    <strong>Our pick:</strong> Late November through
                    February for the clearest water — but book your slot in
                    advance, and always double-check current opening dates
                    before finalising a shoulder-season Andaman itinerary.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jolly Buoy Island</h2>
                  <p>
                    Unlike North Bay or Ross Island, Jolly Buoy isn't reached
                    directly by boat from Port Blair — you first travel
                    overland to Wandoor.
                  </p>
                  <ul>
                    <li>
                      <strong>Port Blair to Wandoor:</strong> Roughly 30 km
                      by road, about an hour by taxi or bus, most easily
                      arranged as part of a pre-booked day-trip package.
                    </li>
                    <li>
                      <strong>Wandoor Jetty to Jolly Buoy:</strong> A boat
                      ride of around 30-45 minutes through the marine park
                      waters to the island itself.
                    </li>
                    <li>
                      <strong>Through a Tour Operator:</strong> Most visitors
                      book a full-day package from Port Blair that bundles
                      transport, park entry, and the boat, which is simpler
                      than arranging each leg independently.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book your Jolly Buoy trip a
                    day or two ahead through a Port Blair travel desk,
                    especially in December-January — daily visitor caps mean
                    it can genuinely sell out.
                  </div>
                </section>

                {/* ── Marine Park Rules ──────────────────────────────────── */}
                <section id="marine-park-rules">
                  <h2>Marine Park Rules</h2>
                  <p>
                    Jolly Buoy's protected status comes with rules that are
                    actively enforced, not just posted signage — expect bag
                    checks before boarding.
                  </p>
                  <ul>
                    <li>
                      <strong>No plastic or non-biodegradable items:</strong>{" "}
                      Bottles, bags, and packaged snacks in plastic are
                      typically not allowed onto the island.
                    </li>
                    <li>
                      <strong>No touching or standing on coral:</strong>{" "}
                      Strictly enforced during snorkelling — keep hands and
                      fins clear of the reef.
                    </li>
                    <li>
                      <strong>No overnight stay:</strong> Jolly Buoy is a
                      day-trip-only island; everyone returns to the mainland
                      the same day.
                    </li>
                    <li>
                      <strong>Capped daily visitors:</strong> The Forest
                      Department limits how many people can visit per day to
                      manage impact on the reef.
                    </li>
                  </ul>
                </section>

                {/* ── Snorkelling ────────────────────────────────────────── */}
                <section id="snorkelling">
                  <h2>Snorkelling & What You'll See</h2>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="Snorkeller over healthy coral reef at Jolly Buoy Island inside Mahatma Gandhi Marine National Park"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Snorkelling here is often the highlight of an entire
                    Andaman trip, precisely because the reef is better
                    protected than at more heavily visited spots. Expect
                    colourful hard and soft coral formations, reef fish in
                    genuinely large numbers, and water clarity that regularly
                    beats what you'll find at North Bay. Glass-bottom boat
                    rides are also available for those who'd rather stay dry.
                  </p>
                  <p>
                    Because this is a national park rather than a casual
                    tourist beach, guides tend to be more attentive about
                    keeping visitors off the coral — a small inconvenience
                    that's directly responsible for the reef's condition.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Full Day)</h2>
                  <p>
                    Because of the road transfer to Wandoor, a Jolly Buoy
                    trip realistically takes most of a day, even though the
                    island itself is a shorter stop.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "7:00-8:00 AM",
                        title: "Depart Port Blair",
                        color: "bg-amber-700",
                        activities: [
                          "Early pickup or taxi to Wandoor jetty",
                          "Check-in and park entry formalities",
                        ],
                      },
                      {
                        day: "8:30-9:15 AM",
                        title: "Boat to Jolly Buoy",
                        color: "bg-sky-600",
                        activities: [
                          "Boat ride through the marine park waters",
                          "Arrival and orientation on rules",
                        ],
                      },
                      {
                        day: "9:15 AM-1:00 PM",
                        title: "Snorkelling & Beach Time",
                        color: "bg-forest-600",
                        activities: [
                          "Snorkelling over the reef or a glass-bottom boat ride",
                          "Time on the island's beach between water sessions",
                        ],
                      },
                      {
                        day: "1:00-3:00 PM",
                        title: "Return Journey",
                        color: "bg-stone-600",
                        activities: [
                          "Boat back to Wandoor jetty",
                          "Road transfer back to Port Blair",
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
                    There are no food stalls on Jolly Buoy Island itself —
                    carry your own water and snacks (in non-plastic
                    packaging where possible) or plan to eat at Wandoor or
                    back in Port Blair. Basic restroom facilities exist near
                    the jetty area.
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
                            "Road transfer (Port Blair-Wandoor, return)",
                            "₹600 (shared taxi)",
                            "₹1,500 (private taxi)",
                            "₹2,500 (private car with guide)",
                          ],
                          [
                            "Park entry + boat to island",
                            "₹800",
                            "₹800",
                            "₹800",
                          ],
                          [
                            "Snorkelling gear rental",
                            "₹300",
                            "₹500",
                            "₹800",
                          ],
                          [
                            "Full-day package (all-inclusive alternative)",
                            "—",
                            "₹2,500",
                            "₹4,000",
                          ],
                          ["Total (approx., per person)", "₹1,700", "₹2,800", "₹4,600"],
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
                    * Figures are per person. Booking a full-day package
                    through a Port Blair travel desk often works out
                    similar or cheaper than arranging transport and entry
                    separately.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Jolly Buoy Island</h2>
                  <ul>
                    <li>
                      <strong>Confirm it's open before planning:</strong> The
                      island closes for roughly four months during the
                      monsoon — check current dates before booking flights or
                      ferries around it.
                    </li>
                    <li>
                      <strong>Book your slot in advance:</strong> Daily
                      visitor caps mean walk-up access isn't guaranteed,
                      especially in peak season.
                    </li>
                    <li>
                      <strong>Leave plastic behind:</strong> Repack snacks
                      and water into non-plastic containers where possible
                      to avoid issues at the entry check.
                    </li>
                    <li>
                      <strong>Start early:</strong> The road transfer to
                      Wandoor means an early departure gets you more time on
                      the water before the return journey.
                    </li>
                    <li>
                      <strong>Pack your own food:</strong> There's nothing to
                      buy on the island itself.
                    </li>
                    <li>
                      <strong>Don't expect it to feel like North Bay:</strong>{" "}
                      Jolly Buoy is quieter, more regulated, and less
                      commercial — that's exactly what preserves the reef.
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
                          "Confirm the current open season before booking",
                          "Book your visitor slot a day or two ahead",
                          "Start early to maximise time on the water",
                          "Carry your own food and water",
                          "Avoid plastic packaging where you can",
                          "Ask about combining it with Chidiya Tapu nearby",
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
                          "Show up without a booking in peak season",
                          "Bring plastic bottles or packaged snacks",
                          "Touch or stand on the coral",
                          "Plan a visit during the monsoon closure",
                          "Expect any food stalls on the island",
                          "Assume it's reachable directly from Port Blair by boat",
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
                    <strong>🗺️ Extend the trip:</strong> Wandoor is roughly on
                    the way toward{" "}
                    <Link href="/blog/chidiya-tapu-andaman-travel-guide">
                      Chidiya Tapu
                    </Link>
                    , South Andaman's sunset point — some travellers combine
                    a Jolly Buoy morning with a Chidiya Tapu evening in one
                    long day out from Port Blair.
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
                  "Jolly Buoy Island",
                  "Andaman",
                  "Mahatma Gandhi Marine National Park",
                  "Wandoor",
                  "Snorkelling",
                  "Coral Reef",
                  "Port Blair",
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

              <RelatedPostsGrid currentSlug="jolly-buoy-island-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jolly-buoy-island-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
