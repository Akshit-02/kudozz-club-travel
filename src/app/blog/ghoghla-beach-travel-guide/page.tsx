// src/app/blog/ghoghla-beach-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ghoghla Beach Diu: Water Sports & Camping Guide",
  description:
    "Complete guide to Ghoghla Beach, Diu — the long, wide beach by the Diu-Gujarat causeway, its water sports, beach camping, growing resort cluster, and travel tips.",
  keywords:
    "Ghoghla Beach, Ghoghla Beach Diu, Ghoghla village Diu, water sports Diu, Diu camping, Ghoghla resorts, Diu Gujarat causeway, Diu beaches, jet skiing Diu, banana boat ride Diu, Diu weekend trip",
  openGraph: {
    title: "Ghoghla Beach Diu: Water Sports & Camping Guide",
    description:
      "A long, wide stretch of sand where Diu island meets the Gujarat mainland — water sports, beach camping, and a quieter alternative to Nagoa.",
    url: "https://club.kudozz.in/blog/ghoghla-beach-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/beach.jpg",
        width: 1200,
        height: 630,
        alt: "A long, wide sandy beach with gentle surf, representative of Ghoghla Beach's broad sandy expanse near Diu",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghoghla Beach Diu: Water Sports & Camping Guide",
    description:
      "The long, wide beach by the Diu-Gujarat causeway — water sports, camping, resorts, and everything else to know before you go.",
    images: ["/images/destinations/goa/beach.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ghoghla-beach-travel-guide",
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
          headline: "Ghoghla Beach Diu: Water Sports & Camping Guide",
          description:
            "Complete guide to Ghoghla Beach, Diu — the long, wide beach by the Diu-Gujarat causeway, its water sports, beach camping, growing resort cluster, and travel tips.",
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
            "@id": "https://club.kudozz.in/blog/ghoghla-beach-travel-guide",
          },
          keywords:
            "Ghoghla Beach, Ghoghla Beach Diu, water sports Diu, Diu camping, Ghoghla resorts, Diu Gujarat causeway",
          about: {
            "@type": "Place",
            name: "Ghoghla Beach",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ghoghla",
              addressRegion: "Diu, Daman and Diu",
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
                name: "Ghoghla Beach",
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
    q: "Is Ghoghla Beach good for camping?",
    a: "Yes — Ghoghla is one of the few beaches in the Diu area where tent-stay and beach-camping setups have started appearing, usually run by local operators or the resorts near the beach. Facilities are still fairly basic compared to established camping destinations, so it's worth confirming what's included (tents, bedding, meals, bonfire) directly with the operator before you book, and checking availability ahead of weekends.",
  },
  {
    q: "How far is Ghoghla Beach from Diu town?",
    a: "Ghoghla Beach sits close to Ghoghla village, right around where the bridge/causeway connects Diu island to the Gujarat mainland — it's a short drive of roughly 5 to 8 km from Diu town, typically 15 to 20 minutes by auto, moped, or taxi depending on traffic at the checkpoint.",
  },
  {
    q: "What water sports are available at Ghoghla Beach?",
    a: "Ghoghla is the main water-sports hub in the Diu area, with operators offering jet-skiing, banana boat rides, and occasionally other activities like bumper rides or parasailing depending on the season and operator. Availability, pricing, and safety equipment quality vary between vendors, so it's worth choosing an operator with visible life jackets and a trained instructor rather than the cheapest option on the sand.",
  },
  {
    q: "Is Ghoghla Beach crowded?",
    a: "It's generally quieter than Nagoa Beach, Diu's most popular swim spot, though it does see a rush of day-trippers and weekend visitors around the water-sports operators, especially in the cooler months and around long weekends. Early mornings and weekday visits are noticeably calmer if you're after open sand and a quieter stretch.",
  },
  {
    q: "Is Ghoghla Beach safe for swimming?",
    a: "Conditions vary along its length — some stretches have gentler water while others see stronger currents near the causeway and channel area, so it's best to swim only in sections where locals or resort staff indicate it's safe, and to avoid swimming far out unsupervised. Where jet-ski and banana boat operations are running, keep clear of their designated lanes while swimming.",
  },
  {
    q: "Can I visit Ghoghla Beach as a day trip while staying in Diu town?",
    a: "Yes, easily — most visitors base themselves in Diu town or Nagoa and treat Ghoghla as a half-day or full-day excursion for water sports and a change of scenery, rather than staying there overnight. A moped or taxi makes the short trip simple, and there's no need to change your base just to visit.",
  },
  {
    q: "Is Ghoghla Beach clean?",
    a: "Cleanliness varies with season and footfall — it tends to be tidier in the early morning and during the quieter monsoon and early winter months, and can look more littered around the busiest water-sports patches and food stalls during peak weekends and holiday periods. It's an honest trade-off of a beach that's still developing its tourist infrastructure rather than a fully managed, resort-maintained stretch.",
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
  { id: "introduction", title: "Ghoghla Beach: An Overview", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "water-sports", title: "Water Sports & Activities", level: 2 },
  { id: "camping", title: "Camping & Overnight Stays", level: 2 },
  { id: "resorts", title: "Resorts Near Ghoghla", level: 2 },
  { id: "crowds-cleanliness", title: "Crowds & Cleanliness", level: 2 },
  { id: "sunset", title: "Sunset at Ghoghla", level: 2 },
  { id: "itinerary", title: "Suggested Plan", level: 2 },
  { id: "food-guide", title: "Food Near Ghoghla", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GhoghlaBeachGuidePage() {
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
              alt="A long, wide sandy beach with gentle surf, representative of Ghoghla Beach's broad sandy expanse near Diu"
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
                { label: "Ghoghla Beach", href: null },
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
                "Ghoghla Beach",
                "Diu",
                "Water Sports",
                "Beach Camping",
                "Daman & Diu",
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
              Ghoghla Beach, Diu: Water Sports & Camping Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A long, wide stretch of sand right where Diu island meets the
              Gujarat mainland — jet-skis, banana boats, a growing resort
              cluster, and a quieter alternative to Nagoa.
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
                  text: "Ghoghla, Diu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
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
                  <h2>Ghoghla Beach: An Overview</h2>
                  <p>
                    <strong>Ghoghla Beach</strong> sits at the northern edge
                    of Diu, right around where the bridge and causeway
                    connect Diu island to the Gujarat mainland near Ghoghla
                    village. It's a broad, several-kilometre-long stretch of
                    sand — noticeably wider and less enclosed than{" "}
                    <Link href="/blog/nagoa-beach-travel-guide">
                      Nagoa Beach
                    </Link>
                    , Diu's better-known crescent bay — and over the last few
                    years it has become the territory's go-to spot for water
                    sports rather than a swim-and-relax beach.
                  </p>
                  <p>
                    Where Nagoa draws the calmer, family-swim crowd, Ghoghla
                    has grown around jet-skis, banana boats, and a scattering
                    of tent-stay and beach-camping setups run by local
                    operators. It's still quieter and less developed than a
                    resort-town beach elsewhere in India — expect an open,
                    sandy expanse with a working cluster of activity near the
                    entry points rather than a manicured promenade.
                  </p>
                  <p>
                    For the fuller picture of Diu — its Portuguese fort, old
                    town, and other beaches —{" "}
                    <Link href="/blog/diu-travel-guide">
                      see our complete Diu travel guide
                    </Link>
                    , or for the wider Union Territory including Daman and
                    Silvassa,{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      read our Dadra & Nagar Haveli and Daman & Diu guide
                    </Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏖️</span> Ghoghla Beach at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Near Ghoghla village, Diu",
                        },
                        {
                          icon: "🚗",
                          label: "From Diu Town",
                          value: "~5–8 km, 15–20 min",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Feb",
                        },
                        {
                          icon: "🚤",
                          label: "Known For",
                          value: "Jet-skiing, banana boats, camping",
                        },
                        {
                          icon: "🏨",
                          label: "Nearby Stay",
                          value: "Growing resort cluster",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹500 – ₹4,000",
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
                    Ghoghla shares Diu's coastal Gujarat climate — hot and
                    humid for much of the year — which narrows the window
                    when a day on open sand, or an evening around a water
                    sports stand, is genuinely comfortable.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant, dry weather (18–30°C) makes the open, shade-free beach comfortable through the day and the best window for water sports and any overnight camping.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot but manageable",
                        text: "Temperatures climb into the mid-30s — plan water sports for morning or late afternoon, and avoid the exposed sand at midday.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — sports mostly paused",
                        text: "Rough seas and rain typically suspend jet-ski and banana boat operations, and camping isn't practical — this is a season to skip Ghoghla specifically.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak season",
                        text: "Cooler weather and the holiday season draw the most day-trippers and weekend visitors — book any camping or resort stay well ahead.",
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
                    <strong>Our pick:</strong> November to February —
                    comfortable temperatures for a full day on the sand,
                    reliable water sports operations, and cool evenings that
                    make beach camping genuinely pleasant.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ghoghla Beach</h2>
                  <p>
                    Ghoghla is one of the easiest beaches in the Diu area to
                    get to, given it sits right by the main road connecting
                    Diu island to the Gujarat mainland.
                  </p>
                  <ul>
                    <li>
                      <strong>From Diu town:</strong> Roughly 5–8 km, about
                      15–20 minutes by auto, taxi, or rented moped — the
                      cheapest and most flexible way to get there, since
                      mopeds and scooters are widely available for rent in
                      Diu town.
                    </li>
                    <li>
                      <strong>From the Gujarat mainland side:</strong>{" "}
                      Ghoghla is the first stop after crossing the
                      bridge/causeway from the mainland into Diu — convenient
                      if you're arriving by road from Una or Veraval and want
                      to stop before continuing into Diu town.
                    </li>
                    <li>
                      <strong>From Diu Airport / Una railway station:</strong>{" "}
                      Both are a short drive away, making Ghoghla an easy
                      first or last stop on a Diu trip depending on your
                      route in or out.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> A rented moped is genuinely
                    the best way to combine Ghoghla with the rest of Diu in
                    one day — the distances are short enough that you're not
                    committing to a separate trip.
                  </div>
                </section>

                {/* ── Water Sports ──────────────────────────────────────── */}
                <section id="water-sports">
                  <h2>Water Sports & Activities</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="Open beach with shallow surf, representative of the kind of wide sandy stretch used for water sports at Ghoghla Beach"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Water sports are the main reason most visitors make a
                    special trip to Ghoghla rather than sticking to Nagoa.
                    Several local operators run stalls close to the entry
                    points, typically offering:
                  </p>
                  <ul>
                    <li>
                      <strong>Jet-skiing:</strong> The most popular activity
                      here — short timed rides are sold by operators along
                      the beach, usually with a guide or instructor
                      accompanying first-timers.
                    </li>
                    <li>
                      <strong>Banana boat rides:</strong> A group activity
                      towed behind a speedboat, popular with families and
                      groups of friends looking for something less intense
                      than jet-skiing.
                    </li>
                    <li>
                      <strong>Other seasonal activities:</strong> Depending
                      on the operator and season, you may also find bumper
                      rides, parasailing, or similar add-ons — availability
                      changes year to year, so it's worth checking on
                      arrival rather than assuming a specific activity will
                      be running.
                    </li>
                  </ul>
                  <p>
                    Pricing is generally negotiated per ride or per group at
                    the stall rather than fixed and posted, so it's worth
                    comparing a couple of operators before booking. Choose
                    one with visible life jackets, a trained-looking
                    instructor, and functioning equipment — safety standards
                    vary between vendors more than the price does.
                  </p>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🌊 Note:</strong> Water sports at Ghoghla are
                    typically weather- and tide-dependent, and operations
                    thin out or pause entirely during the monsoon — this is
                    not a reliable destination for water sports between June
                    and September.
                  </div>
                </section>

                {/* ── Camping ───────────────────────────────────────────── */}
                <section id="camping">
                  <h2>Camping & Overnight Stays on the Beach</h2>
                  <p>
                    Alongside the water sports, Ghoghla has become one of the
                    few spots near Diu where beach camping and tent-stay
                    setups have started to appear, usually run by the local
                    operators or the resorts developing near the beach.
                    Expect fairly simple arrangements — tents pitched close
                    to the sand, basic bedding, sometimes a bonfire or a set
                    dinner included — rather than the polished glamping
                    experience you'd find in more established camping
                    destinations.
                  </p>
                  <ul>
                    <li>
                      <strong>What's usually included:</strong> A tent, basic
                      bedding, and often a simple meal or bonfire — confirm
                      exactly what's covered before paying, since setups
                      differ significantly between operators.
                    </li>
                    <li>
                      <strong>Best season:</strong> October to February,
                      when night-time temperatures are comfortable and the
                      sea is calmer — camping in the monsoon or peak summer
                      isn't practical.
                    </li>
                    <li>
                      <strong>Booking:</strong> Availability and quality
                      change from season to season since this is a growing
                      rather than fully established offering — check current
                      operators and read recent reviews before booking
                      rather than relying on older listings.
                    </li>
                  </ul>
                  <blockquote>
                    Set expectations realistically — camping at Ghoghla is a
                    genuinely fun, low-key experience on a wide open beach,
                    not a five-star glamping resort. Go in with that
                    understanding and it delivers.
                  </blockquote>
                </section>

                {/* ── Resorts ───────────────────────────────────────────── */}
                <section id="resorts">
                  <h2>Resorts & Hotels Near Ghoghla</h2>
                  <p>
                    A small but growing cluster of resorts and hotels has
                    developed around Ghoghla in recent years, drawn by the
                    open beach frontage and the beach's proximity to the
                    mainland approach into Diu — it's a newer hospitality
                    pocket compared to the more established guesthouse scene
                    in Diu's old town.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Basic tent-stay/camping packages",
                          "Budget lodges near Ghoghla village",
                          "Guesthouses in Diu town, short ride away",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,500/night",
                        picks: [
                          "Beach-facing hotels near Ghoghla",
                          "Resort-style stays with pool access",
                          "Mid-range properties along the causeway road",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌴",
                        range: "₹7,000–₹15,000+/night",
                        picks: [
                          "Larger resort properties near Ghoghla",
                          "Premium sea-facing rooms",
                          "Full-service resorts with private beach access",
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
                  <p>
                    Because this hospitality cluster is still developing,
                    it's worth checking recent reviews and photos before
                    booking rather than relying on older listings — standards
                    and offerings can change quickly as new properties open.
                  </p>
                </section>

                {/* ── Crowds & Cleanliness ──────────────────────────────── */}
                <section id="crowds-cleanliness">
                  <h2>Crowds & Cleanliness — An Honest Note</h2>
                  <p>
                    Ghoghla is generally quieter than Nagoa Beach, but it's
                    worth setting realistic expectations rather than assuming
                    an empty stretch of sand.
                  </p>
                  <ul>
                    <li>
                      <strong>Crowds:</strong> The area right around the
                      water-sports stalls sees a steady flow of day-trippers
                      and weekend visitors, especially during the
                      October–February peak. Walk a little further along the
                      beach, away from the main entry points, and it thins
                      out considerably.
                    </li>
                    <li>
                      <strong>Cleanliness:</strong> This varies noticeably
                      with season and footfall. Early mornings and the
                      quieter months tend to be tidier; the busiest patches
                      near the food stalls and water-sports operators can
                      look more littered during peak weekends and holiday
                      periods. It's an honestly mixed picture rather than a
                      spotless, fully managed beach.
                    </li>
                    <li>
                      <strong>Infrastructure:</strong> Facilities like
                      washrooms, changing areas, and shade are still fairly
                      basic in most parts of the beach — plan accordingly,
                      especially if you're bringing young children or elderly
                      family members.
                    </li>
                  </ul>
                </section>

                {/* ── Sunset ────────────────────────────────────────────── */}
                <section id="sunset">
                  <h2>Sunset at Ghoghla</h2>
                  <p>
                    With its open, unobstructed width and the causeway and
                    mainland visible in the distance, Ghoghla makes for a
                    genuinely good sunset spot once the day's water-sports
                    crowd starts thinning out in the late afternoon. It's
                    less choreographed than a dedicated sunset point — no
                    cafés or viewing decks — but the sheer amount of open
                    sand means you can usually find a quiet patch to watch
                    the light change over the water.
                  </p>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Half-Day or Overnight Plan</h2>
                  <p>
                    Ghoghla works well either as a half-day add-on to a Diu
                    town base, or as a standalone overnight if you want the
                    camping experience.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Option A",
                        title: "Half-Day Visit (from Diu town)",
                        color: "bg-amber-700",
                        activities: [
                          "Late morning: Moped or taxi to Ghoghla (~20 min)",
                          "Midday: Jet-ski or banana boat ride with a local operator",
                          "Afternoon: Relax on the open sand, walk the quieter stretches",
                          "Evening: Watch the sunset before heading back to Diu town",
                        ],
                      },
                      {
                        day: "Option B",
                        title: "Overnight Beach Camping",
                        color: "bg-sky-600",
                        activities: [
                          "Afternoon: Arrive, set up or check into a tent-stay package",
                          "Evening: Water sports before operators wind down",
                          "Night: Bonfire and dinner on the beach (if included)",
                          "Morning: Early sunrise walk before checking out",
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
                  <h2>Food Near Ghoghla</h2>
                  <p>
                    Food options right at Ghoghla are limited compared to Diu
                    town — expect a handful of simple stalls and small
                    eateries near the water-sports area rather than a proper
                    restaurant strip, so plan accordingly.
                  </p>
                  <ul>
                    <li>
                      <strong>Beach-side snack stalls:</strong> Simple
                      options like tea, snacks, and cold drinks are usually
                      available near the main entry points and activity
                      stalls.
                    </li>
                    <li>
                      <strong>Camping meals:</strong> If you've booked a
                      tent-stay package, dinner is sometimes included —
                      confirm this in advance since not every operator
                      provides food.
                    </li>
                    <li>
                      <strong>Diu town for a proper meal:</strong> For fresh
                      seafood and a wider choice of restaurants, the short
                      ride into Diu town is worth it — Ghoghla itself isn't
                      the place for a sit-down dinner outside a booked
                      camping package.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown (per day)</h2>
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
                            "Local transport (moped/taxi)",
                            "₹150",
                            "₹400",
                            "₹1,000",
                          ],
                          [
                            "Water sports (per activity)",
                            "₹300",
                            "₹700",
                            "₹1,500",
                          ],
                          ["Food/day", "₹200", "₹600", "₹1,500"],
                          [
                            "Camping/overnight stay",
                            "₹1,200",
                            "₹3,000",
                            "₹7,000+",
                          ],
                          [
                            "Half-day visit total",
                            "₹650",
                            "₹1,700",
                            "₹4,000",
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
                    * Excludes travel to Diu. Water sports pricing is
                    typically negotiated per ride at the operator's stall
                    rather than fixed — confirm rates before booking.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Choose a water-sports operator carefully:</strong>{" "}
                      Look for visible life jackets and a trained-looking
                      instructor rather than picking on price alone.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Most water-sports
                      operators and beach stalls at Ghoghla don't accept
                      cards — small vendors run on cash.
                    </li>
                    <li>
                      <strong>Confirm camping inclusions in advance:</strong>{" "}
                      Tent, bedding, meals, and bonfire aren't always
                      standard — check exactly what's covered before you pay.
                    </li>
                    <li>
                      <strong>Carry sun protection:</strong> The beach is
                      wide and largely shade-free — sunscreen, a hat, and
                      water are essential for a full day here.
                    </li>
                    <li>
                      <strong>Check seasonal operations:</strong> Water
                      sports and camping both wind down substantially during
                      the monsoon — plan an October–February visit if these
                      are your main reasons for going.
                    </li>
                    <li>
                      <strong>Swim only where it's indicated safe:</strong>{" "}
                      Currents vary along the beach's length, especially near
                      the causeway — ask locals or resort staff rather than
                      assuming the whole stretch is safe for swimming.
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
                          "Compare water-sports operators before booking",
                          "Visit October–February for the best conditions",
                          "Confirm camping inclusions before paying",
                          "Carry cash, sunscreen, and drinking water",
                          "Walk further along the beach for quieter stretches",
                          "Combine a visit with the rest of Diu on a moped",
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
                          "Expect a polished, resort-managed beach",
                          "Plan a water-sports trip during the monsoon",
                          "Swim in unmarked areas near the causeway",
                          "Rely on cards for stalls or activity vendors",
                          "Assume every operator includes meals in camping",
                          "Skip checking recent reviews for newer resorts",
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
                    <strong>🗺️ Extend the trip:</strong> Ghoghla pairs
                    naturally with a visit to{" "}
                    <Link href="/blog/nagoa-beach-travel-guide">
                      Nagoa Beach
                    </Link>{" "}
                    for swimming, and the Diu Fort and old town covered in
                    our{" "}
                    <Link href="/blog/diu-travel-guide">
                      full Diu travel guide
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
                  "Ghoghla Beach",
                  "Diu",
                  "Daman and Diu",
                  "Water Sports",
                  "Beach Camping",
                  "Jet Skiing",
                  "Weekend Trip",
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

              <RelatedPostsGrid currentSlug="ghoghla-beach-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ghoghla-beach-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
