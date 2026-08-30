// src/app/blog/dudhni-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Dudhni Lake Travel Guide: Boating Near Silvassa",
  description:
    "Complete Dudhni travel guide — boating on the Madhuban Dam reservoir near Silvassa, the best time to visit, how to reach, picnic spots, and a half-day plan combining Dudhni with Madhuban Dam.",
  keywords:
    "Dudhni travel guide, Dudhni Lake Silvassa, Dudhni boating, Madhuban Dam Dudhni, Dudhni Silvassa distance, Dadra Nagar Haveli boating, Silvassa day trip, Dudhni Island Garden, Damanganga reservoir",
  openGraph: {
    title: "Dudhni Lake Travel Guide: Boating Near Silvassa",
    description:
      "A quiet reservoir village near Silvassa known for motorboat rides, picnic spots, and easy nature escapes — the complete guide to Dudhni.",
    url: "https://club.kudozz.in/blog/dudhni-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/beach.jpg",
        width: 1200,
        height: 630,
        alt: "Calm waterside scenery reminiscent of the Madhuban Dam reservoir backwaters at Dudhni",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dudhni Lake Travel Guide: Boating Near Silvassa",
    description:
      "Motorboat rides, picnic spots, and a quiet reservoir setting barely 20 minutes from Silvassa — the complete guide to Dudhni.",
    images: ["/images/destinations/goa/beach.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/dudhni-travel-guide",
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
          headline: "Dudhni Lake Travel Guide: Boating Near Silvassa",
          description:
            "Complete Dudhni travel guide — boating on the Madhuban Dam reservoir near Silvassa, the best time to visit, how to reach, picnic spots, and a half-day plan combining Dudhni with Madhuban Dam.",
          image: "https://club.kudozz.in/images/destinations/goa/beach.jpg",
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
            "@id": "https://club.kudozz.in/blog/dudhni-travel-guide",
          },
          keywords:
            "Dudhni travel guide, Dudhni Lake Silvassa, Dudhni boating, Madhuban Dam Dudhni, Dadra Nagar Haveli boating",
          about: {
            "@type": "Place",
            name: "Dudhni",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dudhni",
              addressRegion: "Dadra and Nagar Haveli",
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
                name: "Daman & Diu",
                item: "https://club.kudozz.in/blog/dadra-nagar-haveli-daman-diu-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Dudhni",
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
    q: "Is Dudhni Lake worth visiting?",
    a: "For a couple of relaxed hours, yes — Dudhni is a genuinely pretty stretch of reservoir backwaters with a motorboat ride, a bit of greenery, and none of the crowds you'd find at a bigger destination. It isn't a full-day attraction on its own, and travellers expecting a large lake or a polished tourist complex may find it modest — the appeal is the quiet setting and the short boat ride rather than any single big sight.",
  },
  {
    q: "How far is Dudhni from Silvassa?",
    a: "Dudhni is roughly 15–20 km from central Silvassa, about a 25–35 minute drive depending on traffic and which part of Silvassa you're starting from. It's an easy half-day or even a couple-of-hours add-on to a Silvassa trip rather than a separate destination.",
  },
  {
    q: "What activities are available at Dudhni?",
    a: "The main draw is motorboat and speedboat rides on the Madhuban Dam reservoir, run from a jetty near the village. Beyond boating, there's a modest garden/picnic area, some birdwatching potential along the water's edge, and views across the reservoir toward the surrounding hills. Don't expect large-scale water sports or a resort-style setup — it's a simple, low-key operation.",
  },
  {
    q: "Is Dudhni good for a family day trip?",
    a: "Yes, it works well for families — the boat rides are short and calm rather than adventurous, there's shaded seating and a picnic-friendly garden area, and the whole visit can be wrapped up in an hour or two, which suits younger kids and older relatives alike. Just carry your own snacks and water, since food options right at the jetty are limited.",
  },
  {
    q: "Where exactly is the Tribal Cultural Museum — is it at Dudhni?",
    a: "No — this is a common mix-up. The Tribal Cultural Museum (run by the DNH administration, documenting Warli art and tribal life) is located in Silvassa town itself, not at Dudhni. If you want to combine boating at Dudhni with the museum, treat them as two separate stops on a Silvassa day trip rather than one combined site.",
  },
  {
    q: "What is the best time to visit Dudhni?",
    a: "October to March, when the weather is cool and dry enough for a comfortable boat ride and time outdoors. The reservoir also tends to look fullest and most scenic soon after the monsoon, roughly October–November, before water levels start to recede through the dry season.",
  },
  {
    q: "Can Dudhni and Madhuban Dam be visited together?",
    a: "Yes, and it's the most sensible way to see both — Dudhni sits on the backwaters created by the Madhuban Dam on the Damanganga river, and the dam itself is only a short drive away. Most visitors combine the two into a single half-day outing from Silvassa.",
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
  { id: "introduction", title: "Dudhni: A Quiet Reservoir Escape", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dudhni", level: 2 },
  { id: "boating", title: "The Boating Experience", level: 2 },
  { id: "tribal-museum", title: "The Tribal Cultural Museum — A Note", level: 2 },
  { id: "picnic-birdwatching", title: "Picnic Spots & Birdwatching", level: 2 },
  { id: "half-day-plan", title: "Half-Day Plan: Dudhni + Madhuban Dam", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DudhniGuidePage() {
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
              src="/images/destinations/goa/beach.jpg"
              alt="Calm waterside scenery reminiscent of the Madhuban Dam reservoir backwaters at Dudhni"
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
                  label: "Daman & Diu",
                  href: "/blog/dadra-nagar-haveli-daman-diu-travel-guide",
                },
                { label: "Dudhni", href: null },
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
                "Dudhni",
                "Silvassa",
                "Boating",
                "Dadra & Nagar Haveli",
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
              Dudhni Travel Guide: Boating on the Madhuban Dam Backwaters
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A short drive from Silvassa, Dudhni is a quiet reservoir
              village built around a single simple pleasure — a motorboat
              ride across still, green water.
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
                  text: "Dudhni, Dadra & Nagar Haveli",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,950 words",
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
                  <h2>Dudhni: A Quiet Reservoir Escape</h2>
                  <p>
                    <strong>Dudhni</strong> is a small village in{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli
                    </Link>
                    , sitting on the backwaters created by the{" "}
                    <Link href="/blog/madhuban-dam-travel-guide">
                      Madhuban Dam
                    </Link>{" "}
                    on the Damanganga river. It's one of the more popular
                    short excursions from{" "}
                    <Link href="/blog/silvassa-travel-guide">Silvassa</Link>,
                    known almost entirely for one thing — motorboat rides
                    across the calm, tree-lined reservoir.
                  </p>
                  <p>
                    There isn't a great deal of built infrastructure at
                    Dudhni, and that's really the point. A jetty, a handful
                    of boats, a modest garden area, and water stretching out
                    toward wooded hills make it a straightforward, low-effort
                    escape from Silvassa's town centre — the kind of stop
                    that works well as a couple of relaxed hours rather than
                    a full-day plan.
                  </p>
                  <p>
                    Families, weekend groups from Vapi and Mumbai, and anyone
                    looking to break up a Silvassa trip with some time on the
                    water end up here. Set expectations accordingly: this is
                    a small, quiet attraction with a genuine but modest
                    appeal, not a large lake resort or a water-sports hub.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🚤</span> Dudhni at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Dadra & Nagar Haveli",
                        },
                        {
                          icon: "🚗",
                          label: "From Silvassa",
                          value: "~15–20 km (25–35 min)",
                        },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Madhuban Dam reservoir boating",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "⏱️",
                          label: "Time Needed",
                          value: "1.5 – 3 hours",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Visit",
                          value: "₹150 – ₹1,200 per person",
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
                    Dudhni is a fair-weather visit — the boat rides and
                    picnic areas are far more enjoyable outside the peak of
                    summer heat and the monsoon's rough water and closures.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather and a reservoir that's usually at its fullest soon after the monsoon — the most comfortable and scenic window to visit.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — go early",
                        text: "Daytime heat builds quickly; boat rides are still pleasant in the morning, but water levels may have receded noticeably by late summer.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — check ahead",
                        text: "Boating is often suspended or restricted during heavy rain and high water flow for safety reasons — call ahead or check locally before planning a monsoon visit.",
                      },
                      {
                        season: "Weekends",
                        emoji: "👨‍👩‍👧",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Busier",
                        text: "Being a short drive from Silvassa, Vapi and even Mumbai, Dudhni sees a steady stream of weekend day-trippers — visit on a weekday for a quieter experience.",
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
                    <strong>Our pick:</strong> A weekday morning between
                    November and February — the reservoir is at its most
                    scenic, the weather is comfortable, and you'll likely
                    have the jetty largely to yourselves.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Dudhni</h2>
                  <p>
                    Dudhni isn't served by its own railway station or airport
                    — nearly everyone reaches it by road, as a short add-on
                    trip from Silvassa.
                  </p>
                  <ul>
                    <li>
                      <strong>From Silvassa:</strong> The most common route —
                      roughly 15–20 km, about 25–35 minutes by car or bike on
                      reasonably good roads. Autos and local taxis from
                      central Silvassa can also be arranged for the trip.
                    </li>
                    <li>
                      <strong>From Vapi:</strong> Around 25–30 km, a 40–50
                      minute drive, making it a feasible day trip for anyone
                      arriving by train at Vapi railway station on the
                      Mumbai–Ahmedabad line.
                    </li>
                    <li>
                      <strong>From Mumbai:</strong> Roughly 165–180 km, about
                      a 3.5–4 hour drive via NH48 — most visitors from Mumbai
                      combine Dudhni with a broader Silvassa weekend rather
                      than visiting it as a standalone trip.
                    </li>
                    <li>
                      <strong>Self-drive or rented bike:</strong> The easiest
                      way to visit, since public transport directly to the
                      jetty is limited — a private vehicle or rented two-
                      wheeler from Silvassa gives you the most flexibility.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you don't have your own
                    vehicle, it's worth arranging a taxi in Silvassa that
                    waits for you at Dudhni rather than trying to find return
                    transport from the jetty itself, since options there are
                    sparse.
                  </div>
                </section>

                {/* ── Boating ───────────────────────────────────────────── */}
                <section id="boating">
                  <h2>The Boating Experience</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="Calm, tree-fringed water reminiscent of the Dudhni jetty on the Madhuban Dam reservoir"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Boating is the reason most people come to Dudhni. A small
                    jetty on the reservoir's edge runs motorboat and
                    speedboat rides, operated by local boatmen and, at times,
                    the tourism department — rides typically run in short
                    fixed loops rather than open-ended charters.
                  </p>
                  <ul>
                    <li>
                      <strong>Motorboat rides:</strong> Slower, calmer trips
                      across the reservoir, suited to families and anyone
                      wanting an easy, scenic ride rather than a thrill.
                    </li>
                    <li>
                      <strong>Speedboat rides:</strong> A faster, shorter
                      option for those wanting a bit more excitement — group
                      size and pricing are usually per-boat rather than
                      per-person.
                    </li>
                    <li>
                      <strong>Life jackets:</strong> Provided and expected to
                      be worn — a basic safety standard worth confirming
                      before you board if it isn't offered.
                    </li>
                    <li>
                      <strong>Timing and availability:</strong> Boats
                      generally run through daylight hours; services can be
                      curtailed in low water (late summer) or during heavy
                      rain, so it's worth confirming availability before
                      making the trip, especially outside the Oct–Mar window.
                    </li>
                  </ul>
                  <blockquote>
                    The ride itself is short — usually 15 to 30 minutes — but
                    the setting, with wooded hills reflecting off still
                    water, makes it feel longer and more worthwhile than the
                    ticket price suggests.
                  </blockquote>
                </section>

                {/* ── Tribal Museum note ────────────────────────────────── */}
                <section id="tribal-museum">
                  <h2>The Tribal Cultural Museum — A Note</h2>
                  <p>
                    Dudhni's boating trips are sometimes bundled together in
                    itineraries with the region's tribal heritage sites, so
                    it's worth being precise here: the{" "}
                    <strong>Tribal Cultural Museum</strong>, which documents
                    Warli art and the tribal life of Dadra & Nagar Haveli, is
                    located in <strong>Silvassa town</strong> itself, not at
                    Dudhni. If a tribal-culture stop is part of your plan,
                    treat it as a separate leg of your Silvassa itinerary
                    rather than something you'll find at the Dudhni jetty.
                  </p>
                  <p>
                    That said, the drive out to Dudhni does pass through
                    genuinely rural Dadra & Nagar Haveli countryside, and the
                    broader area around Silvassa has a strong Warli tribal
                    presence — village art and craft, if you're curious about
                    it, is more easily found back in and around Silvassa
                    proper than at Dudhni.
                  </p>
                </section>

                {/* ── Picnic / Birdwatching ─────────────────────────────── */}
                <section id="picnic-birdwatching">
                  <h2>Scenic Picnic Spots & Birdwatching</h2>
                  <p>
                    Beyond the boat rides, Dudhni has a modest garden and
                    open lawn area near the jetty that works well for a
                    picnic, especially with kids who'll want a break between
                    the drive and the boat ride.
                  </p>
                  <ul>
                    <li>
                      <strong>Garden/picnic lawn:</strong> Shaded seating and
                      open grass near the water — bring your own mat or
                      snacks, as amenities here are basic.
                    </li>
                    <li>
                      <strong>Reservoir-edge views:</strong> Quiet spots
                      along the water offer good photo opportunities,
                      particularly in the soft light of early morning or
                      late afternoon.
                    </li>
                    <li>
                      <strong>Birdwatching:</strong> The reservoir's edges
                      and surrounding tree cover attract a reasonable variety
                      of waterbirds and forest species, especially in the
                      cooler months — casual birdwatchers can expect a
                      pleasant, if not exceptional, showing; it's not a
                      dedicated sanctuary with hides or guided walks.
                    </li>
                    <li>
                      <strong>Quiet time away from Silvassa's centre:</strong>{" "}
                      For many visitors, the real appeal is simply the change
                      of pace — greenery, water, and comparatively few
                      people, a short drive from a fairly built-up town
                      centre.
                    </li>
                  </ul>
                </section>

                {/* ── Half-Day Plan ─────────────────────────────────────── */}
                <section id="half-day-plan">
                  <h2>Half-Day Plan: Dudhni + Madhuban Dam</h2>
                  <p>
                    Since Dudhni sits directly on the backwaters of the{" "}
                    <Link href="/blog/madhuban-dam-travel-guide">
                      Madhuban Dam
                    </Link>
                    , the two make an obvious pair for a single half-day trip
                    out from Silvassa.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Depart Silvassa & Drive Out",
                        color: "bg-amber-700",
                        activities: [
                          "Leave Silvassa by mid-morning to beat the day's heat",
                          "Short, scenic 25–35 minute drive toward Dudhni",
                          "Optional stop for tea/snacks en route",
                        ],
                      },
                      {
                        day: "Late Morning",
                        title: "Boating at Dudhni",
                        color: "bg-sky-600",
                        activities: [
                          "Motorboat or speedboat ride on the reservoir",
                          "Time at the garden/picnic lawn near the jetty",
                          "Photos and a short birdwatching walk by the water",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Madhuban Dam",
                        color: "bg-forest-600",
                        activities: [
                          "Short drive to the Madhuban Dam viewpoint",
                          "Views over the dam and the wider reservoir",
                          "Return to Silvassa for lunch and the rest of the day",
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
                    * This plan comfortably fits into 3–4 hours out from
                    Silvassa, leaving the rest of the day free for the town's
                    other sights or an onward journey.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <p>
                    Don't expect much in the way of dining right at the
                    Dudhni jetty — this is a boating stop, not a food
                    destination, so plan your meals around it rather than at
                    it.
                  </p>
                  <ul>
                    <li>
                      <strong>Small snack stalls near the jetty:</strong>{" "}
                      Basic tea, cold drinks, and light snacks are usually
                      available close to the boating area, but selection is
                      limited and inconsistent — don't rely on it for a full
                      meal.
                    </li>
                    <li>
                      <strong>Carry your own picnic:</strong> Given the
                      garden/lawn area near the jetty, packing sandwiches,
                      fruit, and water for an informal picnic is the most
                      reliable option.
                    </li>
                    <li>
                      <strong>Eat in Silvassa before or after:</strong> The
                      town centre has a much wider range of restaurants and
                      dhabas serving Gujarati thalis and everyday North
                      Indian fare — the practical choice for a proper meal
                      either side of the Dudhni trip.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Dudhni is an inexpensive outing — the main cost is the
                    boat ride itself, plus whatever transport you use to get
                    there and back from Silvassa.
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
                            "Boat ride (per person, shared motorboat)",
                            "₹100–₹150",
                            "₹200–₹300",
                            "₹500+ (private/speedboat)",
                          ],
                          [
                            "Local transport (round trip from Silvassa)",
                            "₹150 (shared auto)",
                            "₹500 (taxi)",
                            "₹1,000+ (private cab, wait & return)",
                          ],
                          ["Snacks/picnic", "₹100", "₹300", "₹600"],
                          [
                            "Entry/parking (if applicable)",
                            "₹0–₹50",
                            "₹50–₹100",
                            "₹100+",
                          ],
                          [
                            "Approx. total per person",
                            "₹350–₹450",
                            "₹1,050–₹1,150",
                            "₹2,200+",
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
                    * Boat ride prices vary by operator and season and are
                    often charged per boat rather than per person for larger
                    groups — confirm current rates at the jetty before
                    boarding.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Go early or on a weekday:</strong> Weekends
                      bring a steady flow of day-trippers from Silvassa and
                      Vapi — boat queues build up by late morning.
                    </li>
                    <li>
                      <strong>Confirm boating is running:</strong> Services
                      can be paused during heavy rain or very low reservoir
                      levels — a quick check before you drive out saves a
                      wasted trip.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Boat operators and small
                      stalls at the jetty are unlikely to accept cards or
                      digital payments reliably.
                    </li>
                    <li>
                      <strong>Wear the life jacket provided:</strong> Don't
                      board without one, even for a short, calm-looking ride.
                    </li>
                    <li>
                      <strong>Bring your own food and water:</strong> Options
                      right at the jetty are limited — a small picnic covers
                      you comfortably.
                    </li>
                    <li>
                      <strong>Pair it with Madhuban Dam:</strong> Given how
                      close they are, visiting both in one outing makes far
                      better use of the drive out from Silvassa.
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
                          "Visit between October and March for the best conditions",
                          "Combine Dudhni with a stop at Madhuban Dam",
                          "Carry cash for boat rides and snack stalls",
                          "Wear the life jacket provided on the boat",
                          "Bring your own snacks and water for the picnic area",
                          "Arrange return transport before you arrive",
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
                          "Expect the Tribal Cultural Museum to be at Dudhni itself",
                          "Plan a full day around Dudhni alone",
                          "Skip checking boating status during monsoon",
                          "Rely on jetty stalls for a proper meal",
                          "Visit on a weekend afternoon if you want it quiet",
                          "Board a boat without a life jacket",
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
                    <strong>🗺️ Extend the trip:</strong> Most visitors treat
                    Dudhni as one stop within a broader{" "}
                    <Link href="/blog/silvassa-travel-guide">
                      Silvassa itinerary
                    </Link>{" "}
                    — pair it with the town's gardens and museums, or with
                    the wider{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli and Daman & Diu
                    </Link>{" "}
                    region if you have more than a day to spare.
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
                  "Dudhni",
                  "Dadra and Nagar Haveli",
                  "Silvassa",
                  "Madhuban Dam",
                  "Boating",
                  "Day Trip",
                  "Off-beat",
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

              <RelatedPostsGrid currentSlug="dudhni-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="dudhni-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
