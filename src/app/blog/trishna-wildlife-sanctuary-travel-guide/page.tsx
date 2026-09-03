// src/app/blog/trishna-wildlife-sanctuary-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Trishna Wildlife Sanctuary: Safari Guide & Tips",
  description:
    "Complete Trishna Wildlife Sanctuary guide — barking deer, leopards, hoolock gibbons, a python conservation centre, watchtowers, reservoir boating, how to reach from Agartala, and a full visit plan.",
  keywords:
    "Trishna Wildlife Sanctuary, South Tripura, Belonia, Trishna river, Sonai river, Rowa Wildlife Sanctuary, golden langur, hoolock gibbon, python conservation Tripura, how to reach Trishna Wildlife Sanctuary, Tripura wildlife safari",
  openGraph: {
    title: "Trishna Wildlife Sanctuary: Safari Guide & Tips",
    description:
      "A river-straddling sanctuary in South Tripura known for hoolock gibbons, leopards, and a distinctive python conservation programme.",
    url: "https://club.kudozz.in/blog/trishna-wildlife-sanctuary-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Forested riverbank landscape, evoking Trishna Wildlife Sanctuary along the Trishna and Sonai rivers in South Tripura",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Trishna Wildlife Sanctuary: Safari Guide & Tips",
    description:
      "Barking deer, leopards, hoolock gibbons, and a python conservation centre — the complete Trishna Wildlife Sanctuary guide.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/trishna-wildlife-sanctuary-travel-guide",
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
          headline: "Trishna Wildlife Sanctuary: Safari Guide & Tips",
          description:
            "Complete Trishna Wildlife Sanctuary guide — barking deer, leopards, hoolock gibbons, a python conservation centre, watchtowers, reservoir boating, how to reach from Agartala, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
          datePublished: "2026-09-03",
          dateModified: "2026-09-03",
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
            "@id": "https://club.kudozz.in/blog/trishna-wildlife-sanctuary-travel-guide",
          },
          keywords:
            "Trishna Wildlife Sanctuary, South Tripura, Belonia, wildlife safari, python conservation, hoolock gibbon",
          about: {
            "@type": "Place",
            name: "Trishna Wildlife Sanctuary",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Tripura",
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
                name: "Tripura",
                item: "https://club.kudozz.in/blog/tripura-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Trishna Wildlife Sanctuary",
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
    q: "What animals can be seen at Trishna Wildlife Sanctuary?",
    a: "Trishna is known for barking deer, leopards, wild boar, and hoolock gibbons, alongside a range of birdlife along the Trishna and Sonai rivers. Elephants have historically moved through the area, though sightings are far less predictable than the more common species.",
  },
  {
    q: "How far is Trishna Wildlife Sanctuary from Agartala?",
    a: "Roughly 65 km, reached by road via Udaipur and on toward Belonia, the nearest sizeable town. The drive takes around 2 hours depending on road conditions.",
  },
  {
    q: "Is Rowa Wildlife Sanctuary part of Trishna?",
    a: "No, Rowa is a separate, much smaller sanctuary roughly 18 km away, specifically known for the golden langur. It's a worthwhile add-on for wildlife enthusiasts with an extra half-day rather than part of the main Trishna visit.",
  },
  {
    q: "What is the best time for a safari at Trishna?",
    a: "October to March is best, with early morning and late afternoon the most productive windows for wildlife activity. The cooler, drier months also make watchtower waits and reservoir boating far more comfortable.",
  },
  {
    q: "Is Trishna a full-day or half-day trip from Agartala?",
    a: "Most visitors treat it as a full-day trip from Agartala given the road time, watchtower sessions, and the python conservation centre. It can be tightened into a half-day if combined efficiently with an early start, but a full day allows for an unhurried visit.",
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
  { id: "introduction", title: "A Sanctuary Along Two Rivers", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Trishna", level: 2 },
  { id: "things-to-do", title: "Safari, Boating & the Python Centre", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TrishnaWildlifeSanctuaryGuidePage() {
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
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="Forested riverbank landscape, evoking Trishna Wildlife Sanctuary along the Trishna and Sonai rivers in South Tripura"
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
                { label: "Tripura", href: "/blog/tripura-travel-guide" },
                { label: "Trishna Wildlife Sanctuary", href: null },
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
                "Trishna Wildlife Sanctuary",
                "South Tripura",
                "Wildlife Safari",
                "Belonia",
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
              Trishna Wildlife Sanctuary: Safari & Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A river-straddling sanctuary in South Tripura where barking
              deer and hoolock gibbons share the forest with a distinctive
              python conservation programme.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "9 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "South Tripura district",
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
                  <h2>A Sanctuary Along Two Rivers</h2>
                  <p>
                    <strong>Trishna Wildlife Sanctuary</strong> spreads over
                    roughly 194 sq km in South Tripura district, straddling
                    the <strong>Trishna</strong> and <strong>Sonai</strong>{" "}
                    rivers not far from the town of Belonia. It's one of the
                    less-visited corners of{" "}
                    <Link href="/blog/tripura-travel-guide">Tripura's</Link>{" "}
                    wildlife circuit, which works in its favour — sightings
                    feel less rehearsed and the forest itself sees a fraction
                    of the footfall of India's bigger-name reserves.
                  </p>
                  <p>
                    The resident wildlife includes barking deer, leopards,
                    wild boar, and hoolock gibbons, India's only ape species,
                    whose whooping calls carry through the canopy at dawn.
                    Elephants have historically passed through the sanctuary,
                    though sightings of them are far less predictable than
                    the more regularly encountered species.
                  </p>
                  <p>
                    What sets Trishna apart from a typical sanctuary visit is
                    its python conservation programme — a dedicated
                    captive-breeding effort that gives visitors a rare
                    close-up look at reptile conservation work alongside the
                    usual watchtower wildlife viewing.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐍</span> Trishna at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Tripura, near Belonia",
                        },
                        {
                          icon: "🚗",
                          label: "From Agartala",
                          value: "~65 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🦍",
                          label: "Known For",
                          value: "Hoolock Gibbons, Python Centre",
                        },
                        {
                          icon: "🌳",
                          label: "Area",
                          value: "~194 sq km",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Sabroom, Rowa Sanctuary",
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
                  <h2>Best Time to Visit Trishna Wildlife Sanctuary</h2>
                  <p>
                    Wildlife activity and comfortable daytime conditions both
                    peak in the cooler, drier months.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions make watchtower waits and reservoir boating comfortable, and wildlife activity along the rivers is at its most consistent.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, humidity building",
                        text: "Daytime heat and rising humidity make midday safaris uncomfortable, though early mornings remain workable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — limited access",
                        text: "Heavy rain swells the Trishna and Sonai rivers and can make forest tracks difficult, so wildlife viewing becomes far less reliable.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🐦",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best for birdwatching",
                        text: "Cool mornings and clear skies bring out riverside birdlife most reliably — worth an early start for anyone prioritising birds.",
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
                    <strong>Our pick:</strong> October to March, with an
                    early-morning arrival — wildlife activity and comfort
                    both peak in the first couple of hours after sunrise.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Trishna Wildlife Sanctuary</h2>
                  <p>
                    Trishna sits roughly 65 km from Agartala, reached
                    entirely by road via Udaipur and on toward Belonia.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Agartala:</strong> Around 2 hours
                      by car via Udaipur, on a route that also passes close
                      to the Tripura Sundari Temple if you want to combine
                      stops.
                    </li>
                    <li>
                      <strong>Via Belonia:</strong> Belonia is the nearest
                      sizeable town, with basic supplies and onward transport
                      toward the sanctuary gate.
                    </li>
                    <li>
                      <strong>Local transport:</strong> Shared vehicles run
                      between Agartala and Belonia, but a private car or taxi
                      is the far more practical option for reaching the
                      sanctuary itself and its watchtowers.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Start early from Agartala —
                    arriving at the sanctuary by mid-morning gives the best
                    chance of catching gibbon calls and other activity before
                    the day heats up.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Safari, Boating & the Python Centre</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="River and forest at Trishna Wildlife Sanctuary, South Tripura"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Watchtower Wildlife Viewing</h3>
                  <p>
                    Watchtowers positioned across the sanctuary give visitors
                    a patient, elevated vantage over clearings and riverside
                    stretches where barking deer, wild boar, and occasionally
                    leopards pass through — early morning and late afternoon
                    sessions are the most productive.
                  </p>
                  <h3>The Python Conservation Centre</h3>
                  <p>
                    Trishna's dedicated python conservation and
                    captive-breeding programme is a genuinely distinctive
                    feature among Northeast India's sanctuaries, giving
                    visitors a close, guided look at reptile conservation
                    work rarely found elsewhere in the region.
                  </p>
                  <h3>Reservoir Boating</h3>
                  <p>
                    Boat rides on the Trishna reservoir offer a quieter way
                    to take in the sanctuary's riverine landscape, with a
                    reasonable chance of birdlife along the banks.
                  </p>
                  <h3>Rowa Wildlife Sanctuary (Nearby)</h3>
                  <p>
                    Roughly 18 km away, Rowa is a separate, much smaller
                    sanctuary known specifically for the golden langur — a
                    worthwhile half-day add-on for wildlife enthusiasts with
                    extra time, rather than a stop to squeeze into the main
                    Trishna visit.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Trishna</h2>
                  <p>
                    Dedicated accommodation at the sanctuary itself is
                    minimal — most visitors either day-trip from Agartala or
                    base themselves in Belonia town, which has more reliable
                    options.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Basic lodges, Belonia town",
                          "Forest department rest houses (where available)",
                          "Simple guesthouses en route",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Better hotels in Belonia",
                          "Business-style stays, Udaipur en route",
                          "Agartala hotels (day-trip base)",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌿",
                        range: "₹4,000–₹7,000+/night",
                        picks: [
                          "Premium Agartala hotels",
                          "Comfort-focused stays, Udaipur",
                          "Full-day guided safari packages",
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
                  <blockquote>
                    Given the modest accommodation options, most travellers
                    treat Trishna as a full-day trip from Agartala rather
                    than a dedicated multi-night stay.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1 Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Drive & Watchtower Safari",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure from Agartala via Udaipur",
                          "Arrive by mid-morning, watchtower wildlife viewing",
                          "Visit the python conservation centre",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Boating & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Boat ride on the Trishna reservoir",
                          "Optional detour to Rowa Sanctuary for golden langur",
                          "Return drive to Agartala or onward to Sabroom",
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
                    * With more time, combine Trishna with{" "}
                    <Link href="/blog/sabroom-travel-guide">Sabroom</Link> for
                    a fuller South Tripura loop.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Trishna</h2>
                  <ul>
                    <li>
                      <strong>Belonia town:</strong> The nearest town with a
                      proper spread of local restaurants and dhabas serving
                      Bengali- and Tripuri-influenced meals.
                    </li>
                    <li>
                      <strong>Roadside stalls:</strong> Simple tea and snack
                      stops along the Agartala–Belonia road, useful for a
                      quick break on the drive.
                    </li>
                    <li>
                      <strong>Carry your own supplies:</strong> Options
                      thin out considerably near the sanctuary gate itself,
                      so pack water and snacks for the day.
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
                          ["Accommodation/night", "₹900", "₹2,500", "₹5,500"],
                          ["Car hire from Agartala (round trip)", "₹3,500", "₹5,000", "₹7,500"],
                          ["Sanctuary entry fee", "₹50", "₹50", "₹50"],
                          ["Boating (per session)", "₹200", "₹400", "₹700"],
                          ["Food/day", "₹400", "₹800", "₹1,500"],
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
                    * Figures are per person, per day (except car hire, a
                    round trip figure best split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Trishna</h2>
                  <ul>
                    <li>
                      <strong>Start early:</strong> Wildlife activity is
                      highest in the first couple of hours after sunrise —
                      leave Agartala early to make the most of it.
                    </li>
                    <li>
                      <strong>Hire a local guide:</strong> A guide familiar
                      with the sanctuary's watchtowers and current animal
                      movement patterns meaningfully improves your chances of
                      good sightings.
                    </li>
                    <li>
                      <strong>Carry water and snacks:</strong> Food and drink
                      options thin out significantly once you're past
                      Belonia, so pack for the day.
                    </li>
                    <li>
                      <strong>Avoid monsoon visits:</strong> Heavy rain
                      between July and September makes tracks difficult and
                      sightings unreliable.
                    </li>
                    <li>
                      <strong>Combine wisely:</strong> Pairing Trishna with
                      Rowa Sanctuary or a South Tripura loop toward Sabroom
                      makes better use of the long drive from Agartala.
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
                          "Start early for the best wildlife activity",
                          "Hire a local guide for the watchtowers",
                          "Carry enough water and snacks for the day",
                          "Visit the python conservation centre",
                          "Combine with Rowa Sanctuary if time allows",
                          "Plan the visit for October–March",
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
                          "Visit during peak monsoon (Jul-Sep)",
                          "Expect a wide restaurant scene near the gate",
                          "Rely on public transport for the sanctuary itself",
                          "Assume Rowa Sanctuary is included in Trishna",
                          "Arrive at midday and expect much wildlife activity",
                          "Skip a local guide if this is your first visit",
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
                    <strong>🗺️ Extend the trip:</strong> Trishna pairs
                    naturally with{" "}
                    <Link href="/blog/sabroom-travel-guide">Sabroom</Link> and
                    the Maitri Setu bridge for a fuller South Tripura loop.
                    See our full{" "}
                    <Link href="/blog/tripura-travel-guide">
                      Tripura travel guide
                    </Link>{" "}
                    for the wider state.
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
                  "Trishna Wildlife Sanctuary",
                  "South Tripura",
                  "Tripura",
                  "Wildlife Safari",
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

              <RelatedPostsGrid currentSlug="trishna-wildlife-sanctuary-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="trishna-wildlife-sanctuary-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
