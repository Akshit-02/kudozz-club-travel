// src/app/blog/mayabunder-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mayabunder Travel Guide: Interview Island & Karmatang Beach",
  description:
    "Mayabunder travel guide — North Andaman's quiet gateway to Interview Island's wild elephants and Karmatang Beach's turtle nesting. How to reach it, when to go, and what to expect.",
  keywords:
    "Mayabunder Andaman, Interview Island Wildlife Sanctuary, Karmatang Beach, North Andaman, feral elephants Andaman, Andaman Trunk Road, how to reach Mayabunder, Mayabunder to Diglipur, Mayabunder to Rangat",
  openGraph: {
    title: "Mayabunder Travel Guide: Interview Island & Karmatang Beach",
    description:
      "North Andaman's quietest gateway town — feral elephants on a protected island, a turtle-nesting beach, and a genuine break from the Havelock/Neil circuit.",
    url: "https://club.kudozz.in/blog/mayabunder-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Quiet North Andaman coastline, evoking Mayabunder's Karmatang Beach and Interview Island",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayabunder Travel Guide: Interview Island & Karmatang Beach",
    description:
      "Feral elephants, a turtle beach, and North Andaman's quietest stretch of the Trunk Road — the complete Mayabunder guide.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mayabunder-andaman-travel-guide",
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
          headline:
            "Mayabunder Travel Guide: Interview Island & Karmatang Beach",
          description:
            "Mayabunder travel guide — North Andaman's quiet gateway to Interview Island's wild elephants and Karmatang Beach's turtle nesting. How to reach it, when to go, and what to expect.",
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
            "@id": "https://club.kudozz.in/blog/mayabunder-andaman-travel-guide",
          },
          keywords:
            "Mayabunder, North Andaman, Interview Island, feral elephants, Karmatang Beach, Andaman Trunk Road",
          about: {
            "@type": "Place",
            name: "Mayabunder",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mayabunder",
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
                name: "Mayabunder",
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
    q: "What is Mayabunder known for?",
    a: "Mayabunder is best known as the gateway to Interview Island Wildlife Sanctuary, a protected, uninhabited island home to a population of feral elephants descended from animals once used in the timber industry. It's also close to Karmatang Beach, a turtle-nesting beach similar to Kalipur and Cuthbert Bay further along the coast.",
  },
  {
    q: "Can I visit Interview Island freely?",
    a: "No — Interview Island is a protected wildlife sanctuary, and visits require permits typically arranged through the Forest Department or a local operator in Mayabunder. Access can be limited depending on season and conservation restrictions, so it's worth confirming well before you plan a trip around it.",
  },
  {
    q: "How far is Mayabunder from Port Blair?",
    a: "Mayabunder sits further north than Rangat on the Andaman Trunk Road, generally reached as a stop between Rangat and Diglipur rather than in a single day from Port Blair. Most travellers cover the route over two days with an overnight stop at Rangat.",
  },
  {
    q: "Is Mayabunder worth visiting if I've already done Havelock and Neil?",
    a: "If you specifically want to see Interview Island's elephants or a quieter, far-less-touristed side of the Andamans, yes. If your priority is beaches and diving, Mayabunder isn't the place — it's a niche add-on for travellers with extra time and a specific interest in North Andaman.",
  },
  {
    q: "What's the best time to see turtles at Karmatang Beach?",
    a: "Roughly November to February, the same general nesting window as Kalipur and Cuthbert Bay elsewhere in the Andamans. Outside this period, Karmatang is still a quiet, pleasant beach without the nesting activity.",
  },
  {
    q: "Is Mayabunder well set up for tourists?",
    a: "Not really — infrastructure is basic, with a handful of simple guesthouses and eateries rather than resorts. It suits travellers comfortable with a more rustic, off-the-beaten-path experience.",
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
  { id: "introduction", title: "North Andaman's Quiet Gateway", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mayabunder", level: 2 },
  { id: "interview-island", title: "Interview Island & Its Elephants", level: 2 },
  { id: "karmatang-beach", title: "Karmatang Beach", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MayabunderGuidePage() {
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
              alt="Quiet North Andaman coastline, evoking Mayabunder's Karmatang Beach and Interview Island"
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
                {
                  label: "Andaman Islands",
                  href: "/blog/andaman-islands-travel-guide",
                },
                { label: "Mayabunder", href: null },
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
                "Mayabunder",
                "North Andaman",
                "Interview Island",
                "Karmatang Beach",
                "Off the Beaten Path",
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
              Mayabunder: Gateway to Interview Island's Wild Elephants
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A protected island of feral elephants, a turtle-nesting
              beach, and North Andaman's quietest stretch of the Trunk
              Road — Mayabunder is for travellers ready to leave the
              Havelock circuit behind.
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
                  text: "North Andaman",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,600 words",
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
                  <h2>North Andaman's Quiet Gateway</h2>
                  <p>
                    <strong>Mayabunder</strong> sits on the{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Andaman Trunk Road
                    </Link>{" "}
                    between{" "}
                    <Link href="/blog/rangat-andaman-travel-guide">
                      Rangat
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/diglipur-andaman-travel-guide">
                      Diglipur
                    </Link>
                    , another practical stopover town in North Andaman — but
                    with one genuinely distinctive draw: it's the gateway to{" "}
                    <strong>Interview Island</strong>, a protected sanctuary
                    home to a population of feral elephants.
                  </p>
                  <p>
                    Like Rangat, Mayabunder is quiet, largely undeveloped
                    for tourism, and mostly bypassed by travellers who stick
                    to the{" "}
                    <Link href="/blog/havelock-island-andaman-travel-guide">
                      Havelock
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/neil-island-andaman-travel-guide">
                      Neil Island
                    </Link>{" "}
                    circuit. That's exactly the appeal for travellers who
                    specifically want to get off the well-worn path — a
                    genuine wilderness experience and a beach or two, with
                    almost none of the crowds.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐘</span> Mayabunder at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "North Andaman",
                        },
                        {
                          icon: "🚗",
                          label: "Position",
                          value: "Between Rangat & Diglipur",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Mar" },
                        {
                          icon: "🐘",
                          label: "Known For",
                          value: "Interview Island's feral elephants",
                        },
                        {
                          icon: "🐢",
                          label: "Nearby",
                          value: "Karmatang Beach",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹3,500",
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
                  <h2>Best Time to Visit Mayabunder</h2>
                  <p>
                    Mayabunder shares the same seasonal pattern as the rest
                    of North Andaman — the dry season is the only sensible
                    window for both road travel and any boat access to
                    Interview Island.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Calm seas, dry roads, and the peak turtle nesting window at Karmatang Beach.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warmer, still workable",
                        text: "Roads and any boat access remain manageable, though the heat builds — plan outdoor time for morning or late afternoon.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Southwest monsoon — avoid",
                        text: "Heavy rain disrupts road conditions and any Interview Island access — best avoided entirely for this leg.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌈",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Transition — check locally",
                        text: "Conditions improve gradually but can still be unpredictable — confirm permit and boat access before travelling.",
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
                    <strong>Our pick:</strong> November to February — the
                    most reliable window for Interview Island permits and
                    access, plus the best chance of turtle activity at
                    Karmatang.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mayabunder</h2>
                  <p>
                    Mayabunder is reached exclusively by road along the
                    Andaman Trunk Road — there's no airport or direct
                    passenger ferry from Port Blair.
                  </p>
                  <ul>
                    <li>
                      <strong>By Road from Port Blair:</strong> Best done
                      over two days with an overnight stop at{" "}
                      <Link href="/blog/rangat-andaman-travel-guide">
                        Rangat
                      </Link>{" "}
                      rather than attempted in a single long drive.
                    </li>
                    <li>
                      <strong>By Road from Diglipur:</strong> Mayabunder
                      sits south of Diglipur on the same highway, making it
                      an easy stop in either direction.
                    </li>
                    <li>
                      <strong>To Interview Island:</strong> Access is by
                      boat, arranged through the Forest Department or a
                      local operator in Mayabunder, subject to permits and
                      seasonal restrictions.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrange Interview Island
                    permits and boat access in advance through a Port Blair
                    or Mayabunder travel agent — this isn't a walk-up
                    excursion, and availability can be limited.
                  </div>
                </section>

                {/* ── Interview Island ──────────────────────────────────── */}
                <section id="interview-island">
                  <h2>Interview Island & Its Elephants</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="Dense forested coastline, evoking Interview Island's protected wilderness near Mayabunder"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Interview Island Wildlife Sanctuary</strong> is a
                    protected, uninhabited island off Mayabunder, notable
                    for a population of feral elephants — descendants of
                    animals originally brought in for the timber industry
                    and later released or abandoned, which have since
                    established a wild population on the island. It's one
                    of the more unusual wildlife stories in the Andamans,
                    and a genuine draw for anyone specifically interested in
                    it.
                  </p>
                  <p>
                    Visits require permits, typically arranged through the
                    Forest Department or a local operator, and access can be
                    limited depending on the season and ongoing conservation
                    management — this is not a casual, spontaneous
                    excursion, and sightings of elephants are not
                    guaranteed even with a permitted visit.
                  </p>
                </section>

                {/* ── Karmatang Beach ───────────────────────────────────── */}
                <section id="karmatang-beach">
                  <h2>Karmatang Beach</h2>
                  <p>
                    <strong>Karmatang Beach</strong>, close to Mayabunder, is
                    another of the Andamans' turtle-nesting beaches, in the
                    same category as{" "}
                    <Link href="/blog/kalipur-andaman-travel-guide">
                      Kalipur
                    </Link>{" "}
                    near Diglipur and Cuthbert Bay near{" "}
                    <Link href="/blog/rangat-andaman-travel-guide">
                      Rangat
                    </Link>
                    . Turtles typically come ashore to nest between roughly
                    November and February. Outside that window, it remains
                    a calm, quiet stretch of sand worth a short visit.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <p>
                    Mayabunder rewards travellers who've built in extra time
                    for North Andaman rather than those on a tight
                    Havelock-and-back schedule.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrive & Karmatang Beach",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive by road from Rangat or Diglipur",
                          "Settle into a guesthouse",
                          "Evening visit to Karmatang Beach",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Interview Island",
                        color: "bg-forest-600",
                        activities: [
                          "Boat trip to Interview Island (permit required)",
                          "Wildlife viewing — sightings not guaranteed",
                          "Return to Mayabunder by evening",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Onward",
                        color: "bg-sky-600",
                        activities: [
                          "Continue north to Diglipur, or",
                          "Head back south toward Rangat and Port Blair",
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
                  <h2>Where to Eat in Mayabunder</h2>
                  <p>
                    Dining options are basic — a small number of local
                    eateries serving simple Indian meals, plus guesthouse
                    kitchens that are often the most reliable choice.
                  </p>
                  <ul>
                    <li>
                      <strong>Local eateries:</strong> Rice, dal, and fish
                      curry are the mainstays — don't expect variety or
                      resort-style dining.
                    </li>
                    <li>
                      <strong>Guesthouse meals:</strong> Often the safest
                      and most convenient option given how few independent
                      restaurants the town has.
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
                          [
                            "Accommodation/night",
                            "₹800",
                            "₹1,800",
                            "₹3,500",
                          ],
                          ["Food/day", "₹300", "₹600", "₹1,200"],
                          [
                            "Interview Island trip (permit + boat)",
                            "₹1,500",
                            "₹3,000",
                            "₹6,000 (private)",
                          ],
                          [
                            "Road transport (per leg)",
                            "₹300 (bus)",
                            "₹2,000 (shared taxi)",
                            "₹4,500 (private cab)",
                          ],
                          ["Total (2 nights)", "₹5,000", "₹11,800", "₹22,700"],
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
                    * Figures are per person, for a 2-night stay covering an
                    Interview Island trip. See our{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Andaman Islands guide
                    </Link>{" "}
                    for a full multi-island budget breakdown.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Mayabunder</h2>
                  <ul>
                    <li>
                      <strong>Arrange Interview Island permits in advance:</strong>{" "}
                      This isn't a walk-up excursion — book through a Forest
                      Department contact or local operator ahead of time.
                    </li>
                    <li>
                      <strong>Keep expectations realistic on elephant sightings:</strong>{" "}
                      Interview Island is wild terrain, not a safari park —
                      sightings are possible but not guaranteed.
                    </li>
                    <li>
                      <strong>Budget extra days:</strong> Mayabunder only
                      makes sense with time to spare — it's not a quick
                      add-on to a standard Havelock/Neil trip.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs and card payment
                      options are limited this far north.
                    </li>
                    <li>
                      <strong>Pair with Diglipur:</strong> Since it's on the
                      same road, combine Mayabunder with a further stop at
                      Diglipur, Kalipur, and Ross & Smith Islands.
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
                          "Arrange Interview Island permits before arrival",
                          "Budget 2-3 days for the visit, not a quick stop",
                          "Visit Karmatang Beach in the Nov–Feb nesting season",
                          "Carry sufficient cash",
                          "Combine with Diglipur further north",
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
                          "Expect resort-style stays or dining",
                          "Assume elephant sightings are guaranteed",
                          "Show up to Interview Island without a permit",
                          "Add Mayabunder as a quick same-day detour",
                          "Travel this leg during the June–September monsoon",
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
                    <strong>🗺️ Extend the trip:</strong> Mayabunder pairs
                    naturally with a longer North Andaman loop — continue to{" "}
                    <Link href="/blog/diglipur-andaman-travel-guide">
                      Diglipur
                    </Link>
                    ,{" "}
                    <Link href="/blog/kalipur-andaman-travel-guide">
                      Kalipur
                    </Link>
                    , and the sandbar at{" "}
                    <Link href="/blog/ross-and-smith-islands-andaman-travel-guide">
                      Ross & Smith Islands
                    </Link>
                    , or head back south via{" "}
                    <Link href="/blog/rangat-andaman-travel-guide">
                      Rangat
                    </Link>
                    .
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
                  "Mayabunder",
                  "North Andaman",
                  "Interview Island",
                  "Karmatang Beach",
                  "Wildlife",
                  "Off the Beaten Path",
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

              <RelatedPostsGrid currentSlug="mayabunder-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mayabunder-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
