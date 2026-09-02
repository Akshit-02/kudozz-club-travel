// src/app/blog/kausani-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kausani Travel Guide: Himalayan Views & Tea Gardens",
  description:
    "Complete Kausani guide — the Himalayan panorama of Trishul, Nanda Devi & Panchachuli, Anasakti Ashram, Kausani Tea Estate, Rudradhari Falls, how to reach, where to stay, and a full visit plan.",
  keywords:
    "Kausani, Kausani Uttarakhand, Kausani travel guide, Kausani tea estate, Anasakti Ashram, Rudradhari Falls, Switzerland of India, Kausani best time to visit, how to reach Kausani, Kumaon hill station, Mahatma Gandhi Kausani",
  openGraph: {
    title: "Kausani Travel Guide: Himalayan Views & Tea Gardens",
    description:
      "A small Kumaon ridge-top town with one of the widest uninterrupted Himalayan panoramas in the region — Trishul, Nanda Devi and Panchachuli on a clear day.",
    url: "https://club.kudozz.in/blog/kausani-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Tea garden hillside at Kausani with a wide Himalayan mountain backdrop",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kausani Travel Guide: Himalayan Views & Tea Gardens",
    description:
      "The Kumaon ridge-top town Gandhi called the 'Switzerland of India' — Himalayan panoramas, tea gardens, and a quieter alternative to Nainital.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kausani-travel-guide",
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
          headline: "Kausani Travel Guide: Himalayan Views & Tea Gardens",
          description:
            "Complete Kausani guide — the Himalayan panorama of Trishul, Nanda Devi & Panchachuli, Anasakti Ashram, Kausani Tea Estate, Rudradhari Falls, how to reach, where to stay, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/kausani-travel-guide",
          },
          keywords:
            "Kausani, Kumaon, Himalayan views, tea garden, Anasakti Ashram, Rudradhari Falls",
          about: {
            "@type": "Place",
            name: "Kausani",
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
                name: "Kausani",
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
    q: "Why is Kausani called the 'Switzerland of India'?",
    a: "Mahatma Gandhi stayed at Kausani for two weeks in 1929, working on his commentary Anasakti Yoga, and is widely reported to have described the view of the Himalayan range from here as reminiscent of Switzerland. The name has stuck in tourism literature ever since, even though the comparison is more evocative than literal.",
  },
  {
    q: "What mountains can I see from Kausani?",
    a: "On a clear day, Kausani offers an unbroken 300-km-plus panorama of Himalayan peaks including Trishul, Nanda Devi, and the Panchachuli group. Visibility is best in the morning and immediately after rain, and clearest overall in the Mar-Jun and Sep-Nov windows.",
  },
  {
    q: "How far is Kausani from Nainital?",
    a: "Kausani is roughly 115-130 km from Nainital by road, a drive of about 4-5 hours depending on traffic through Almora. Many travellers combine both in a single Kumaon circuit, often via Almora.",
  },
  {
    q: "Is Kausani good for a family or a quiet retreat trip?",
    a: "Yes — Kausani is considerably quieter and less commercial than Nainital, with a small market, few crowds, and its main draw being the mountain view itself rather than adventure activities. It suits travellers wanting a slow, scenic stay over an activity-packed one.",
  },
  {
    q: "How many days should I spend in Kausani?",
    a: "1-2 nights is enough to see the main viewpoints, Anasakti Ashram, the tea estate, and take a half-day trip to Rudradhari Falls. Many visitors treat it as a 1-2 night stop within a longer Kumaon itinerary rather than a standalone destination.",
  },
  {
    q: "What is the best time to visit Kausani for mountain views?",
    a: "March to June and September to November give the clearest, haze-free views of the Himalayan range. Winter (December-February) can also be excellent on clear days and brings occasional snow, but the monsoon months (July-August) usually cloud out the view entirely.",
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
  { id: "introduction", title: "A Ridge-Top Kumaon Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kausani", level: 2 },
  { id: "attractions", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KausaniGuidePage() {
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
              src="/images/destinations/meghalaya/hero.jpg"
              alt="Tea garden hillside at Kausani with a wide Himalayan mountain backdrop"
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
                { label: "Kausani", href: null },
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
                "Kausani",
                "Uttarakhand",
                "Kumaon",
                "Himalayan Views",
                "Tea Garden",
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
              Kausani: Himalayan Views, Tea Gardens & Gandhi's Retreat
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A small ridge-top Kumaon town with one of the widest
              uninterrupted Himalayan panoramas in the region — Trishul,
              Nanda Devi, and Panchachuli on a clear day, and a quieter,
              slower pace than Nainital.
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
                  text: "Bageshwar district, Kumaon, Uttarakhand",
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
                  <h2>A Ridge-Top Kumaon Town</h2>
                  <p>
                    <strong>Kausani</strong> sits at just over 1,890 metres on
                    a narrow ridge in the Bageshwar district of Kumaon,
                    Uttarakhand, and is best known for a single thing it does
                    better than almost anywhere else in the region: an
                    unbroken, wide-angle view of the high Himalaya. On a clear
                    day the range unfurls for over 300 km, taking in Trishul,
                    Nanda Devi, and the Panchachuli peaks without a single
                    building or tree in the way.
                  </p>
                  <p>
                    Mahatma Gandhi stayed here for two weeks in 1929, working
                    on his commentary <em>Anasakti Yoga</em>, and reportedly
                    likened the view to Switzerland — a comparison that has
                    followed the town ever since. Beyond that mountain view,
                    Kausani's charms are modest and deliberate: the{" "}
                    <strong>Kausani Tea Estate</strong>, a scattering of
                    colonial-era buildings, and{" "}
                    <strong>Rudradhari Falls & Cave</strong> a short drive
                    away.
                  </p>
                  <p>
                    Compared to{" "}
                    <Link href="/blog/nainital-travel-guide">Nainital</Link>,
                    a few hours away, Kausani is quieter, far less commercial,
                    and built around slow mornings on a viewpoint rather than
                    lake boating or a busy mall road — a good pick for anyone
                    wanting Kumaon's mountains without the crowds.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Kausani at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Bageshwar district, Kumaon",
                        },
                        {
                          icon: "⛰️",
                          label: "Altitude",
                          value: "~1,890 m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Nov" },
                        {
                          icon: "🏞️",
                          label: "Known For",
                          value: "Himalayan panorama, tea gardens",
                        },
                        {
                          icon: "🚉",
                          label: "Nearest Rail",
                          value: "Kathgodam (~115 km)",
                        },
                        {
                          icon: "🛏️",
                          label: "Stay",
                          value: "Small, quiet, view-facing",
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
                  <h2>Best Time to Visit Kausani</h2>
                  <p>
                    Since the mountain view is Kausani's main draw, timing
                    your visit for clear skies matters more here than in most
                    hill towns.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies and excellent Himalayan visibility, with comfortable daytime temperatures. Rhododendrons bloom in the surrounding forests through April-May.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Equally excellent",
                        text: "Post-monsoon air is at its clearest, often giving the sharpest, haze-free mountain views of the year, with crisp cool evenings.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Cold, occasional snow",
                        text: "Kausani itself sees light snow in some years, and nearby higher points can get proper snowfall. Views can be spectacular on clear days but roads occasionally close after heavy snow.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-stone-100 border-stone-300",
                        mood: "Avoid if possible",
                        text: "Monsoon cloud cover usually blocks the mountain view entirely for days at a stretch, and hill roads carry landslide risk.",
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
                    <strong>Our pick:</strong> late April to early June, or
                    October to November — the two windows with the clearest,
                    most reliable Himalayan views and pleasant daytime
                    weather.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kausani</h2>
                  <ul>
                    <li>
                      <strong>By air:</strong> The nearest airport is
                      Pantnagar, roughly 155 km away, connected to Delhi by a
                      handful of flights. From there, taxis and buses cover
                      the rest of the journey by road.
                    </li>
                    <li>
                      <strong>By rail:</strong> Kathgodam is the nearest
                      railhead, about 115 km away, well connected to Delhi and
                      other major cities. Shared taxis and buses run from
                      Kathgodam toward Almora and on to Kausani.
                    </li>
                    <li>
                      <strong>By road:</strong> Kausani is reached via Almora,
                      about 35-40 km before it on the same route. The drive
                      from Kathgodam or Nainital takes roughly 4-5 hours
                      depending on traffic and road conditions.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're coming from{" "}
                    <Link href="/blog/nainital-travel-guide">Nainital</Link>,
                    break the journey with a couple of hours in Almora's
                    market before continuing on to Kausani — it roughly
                    halves the drive into two manageable legs.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Things to Do in Kausani</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/hero.jpg"
                      alt="Tea garden rows at Kausani with the Himalayan range visible in the distance"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Anasakti Ashram</h3>
                  <p>
                    Built around the cottage where Mahatma Gandhi stayed for
                    two weeks in 1929, this small ashram-museum holds
                    photographs, letters, and memorabilia from his time in
                    Kausani, along with a peaceful garden that shares the same
                    sweeping mountain view he wrote about. It's a quiet,
                    unhurried stop that takes less than an hour.
                  </p>
                  <h3>Kausani Tea Estate</h3>
                  <p>
                    A working tea garden on the town's slopes, planted in
                    rolling green rows that make for an easy, scenic walk.
                    Small shops nearby sell locally grown tea, and the estate
                    itself offers a good vantage point over the valley below.
                  </p>
                  <h3>Rudradhari Falls & Cave</h3>
                  <p>
                    Roughly 10-12 km from the main town, this waterfall and
                    an adjoining cave associated with local legend make for a
                    pleasant half-day trip, usually combined with a short
                    walk through pine and oak forest to reach the falls.
                  </p>
                  <h3>Baijnath Temple</h3>
                  <p>
                    An 12th-13th century Katyuri-era temple complex dedicated
                    to Shiva, roughly 20 km from Kausani on the banks of the
                    Gomti river — a worthwhile detour for anyone interested in
                    Kumaon's older stone temple architecture, in the same
                    tradition as the larger complex at{" "}
                    <Link href="/blog/jageshwar-travel-guide">
                      Jageshwar
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Kausani</h2>
                  <p>
                    Kausani's accommodation is small in scale compared to
                    Nainital, with most properties built specifically to
                    capture the Himalayan view.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,800/night",
                        picks: [
                          "Simple guesthouses in the main market",
                          "KMVN (Kumaon Mandal Vikas Nigam) tourist rest house",
                          "Basic homestays on the ridge",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,500/night",
                        picks: [
                          "View-facing hotels along the ridge road",
                          "Family-run cottages with mountain-facing rooms",
                          "Small resorts near the tea estate",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹8,000–₹16,000+/night",
                        picks: [
                          "Boutique heritage-style mountain resorts",
                          "Premium cottages with private valley views",
                          "Upscale properties toward the outskirts",
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
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Sunset Viewpoint",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive via Almora, check in by afternoon",
                          "Walk through the Kausani Tea Estate",
                          "Evening at the main ridge viewpoint for sunset over the Himalaya",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Anasakti Ashram & Rudradhari Falls",
                        color: "bg-sky-600",
                        activities: [
                          "Morning visit to Anasakti Ashram",
                          "Half-day trip to Rudradhari Falls & Cave",
                          "Optional detour to Baijnath Temple on the return leg",
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
                    * Many travellers combine Kausani with a stop at the
                    ancient temple cluster of{" "}
                    <Link href="/blog/jageshwar-travel-guide">Jageshwar</Link>
                    , about 2 hours away, as part of a wider Kumaon circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Kausani</h2>
                  <ul>
                    <li>
                      <strong>Hotel dining rooms:</strong> Most stays in
                      Kausani serve simple North Indian and Kumaoni home-style
                      meals, often the most convenient option given the
                      town's small size.
                    </li>
                    <li>
                      <strong>Local dhabas near the market:</strong> Basic,
                      inexpensive meals — dal, rice, sabzi, and rotis — along
                      the main road through town.
                    </li>
                    <li>
                      <strong>Tea stalls:</strong> Given the town's own tea
                      estate, a cup of fresh local tea at a roadside stall is
                      worth doing at least once.
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
                            "₹1,500",
                            "₹4,500",
                            "₹11,000",
                          ],
                          ["Local taxi/day", "₹1,000", "₹1,800", "₹2,800"],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          [
                            "Rudradhari Falls trip",
                            "₹600",
                            "₹1,200",
                            "₹1,800",
                          ],
                          ["Entry & misc/day", "₹200", "₹400", "₹800"],
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
                    * Figures are per person, per day, excluding transport
                    into Kausani from Kathgodam or Pantnagar.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kausani</h2>
                  <ul>
                    <li>
                      <strong>Book a view-facing room:</strong> Not every
                      property in town faces the Himalayan range — confirm
                      before booking if the view matters to you.
                    </li>
                    <li>
                      <strong>Go early for clear views:</strong> Mountain
                      visibility is usually best in the early morning, before
                      afternoon haze or cloud builds up.
                    </li>
                    <li>
                      <strong>Carry warm layers even in summer:</strong>{" "}
                      Evenings stay cool year-round at this altitude, even
                      when days are pleasantly warm.
                    </li>
                    <li>
                      <strong>Don't expect nightlife or a big market:</strong>{" "}
                      Kausani is small and quiet after dark — come for the
                      views and the calm, not entertainment options.
                    </li>
                    <li>
                      <strong>Combine with Almora and Jageshwar:</strong> Both
                      are close enough to fold into the same trip without
                      major detours.
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
                          "Check the weather forecast before travelling for clear views",
                          "Wake early for the best mountain visibility",
                          "Visit Anasakti Ashram for context on Gandhi's stay",
                          "Pack warm layers for cool evenings",
                          "Combine with Almora and Jageshwar in one trip",
                          "Try tea from the local estate",
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
                          "Visit in July-August expecting a clear mountain view",
                          "Expect Nainital-style shopping or nightlife",
                          "Skip confirming a view-facing room in advance",
                          "Rush Kausani into a single afternoon stop",
                          "Assume every day is clear — haze does happen",
                          "Forget cash — card acceptance is limited in the small market",
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
                    <strong>🗺️ Extend the trip:</strong> Kausani pairs
                    naturally with the ancient temple cluster at{" "}
                    <Link href="/blog/jageshwar-travel-guide">Jageshwar</Link>{" "}
                    a couple of hours away, or with a longer Kumaon loop that
                    also takes in{" "}
                    <Link href="/blog/nainital-travel-guide">Nainital</Link>{" "}
                    and the broader{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand
                    </Link>{" "}
                    hill circuit.
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
                  "Kausani",
                  "Uttarakhand",
                  "Kumaon",
                  "Himalayan Views",
                  "Tea Garden",
                  "Mahatma Gandhi",
                  "Hill Station",
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

              <RelatedPostsGrid currentSlug="kausani-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kausani-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
