// src/app/blog/darjeeling-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Darjeeling Travel Guide: Tea Gardens, Toy Train & Tiger Hill",
  description:
    "Complete Darjeeling guide — Tiger Hill sunrise, the UNESCO Toy Train, tea garden tours, Batasia Loop, Peace Pagoda, monasteries, where to stay, and a full visit plan for the Queen of the Hills.",
  keywords:
    "Darjeeling travel guide, Tiger Hill sunrise, Darjeeling Himalayan Railway, Darjeeling Toy Train, Darjeeling tea gardens, Batasia Loop, Peace Pagoda Darjeeling, Ghoom Monastery, Darjeeling best time to visit, how to reach Darjeeling, Darjeeling Mall Road, Kanchenjunga view, West Bengal hill station",
  openGraph: {
    title: "Darjeeling Travel Guide: Tea Gardens, Toy Train & Tiger Hill",
    description:
      "The Queen of the Hills — Tiger Hill's Kanchenjunga sunrise, the UNESCO-listed Toy Train, and centuries-old tea estates, all in one Himalayan hill station.",
    url: "https://club.kudozz.in/blog/darjeeling-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Misty Himalayan hills and green tea gardens near Darjeeling, West Bengal",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Darjeeling Travel Guide: Tea Gardens, Toy Train & Tiger Hill",
    description:
      "Tiger Hill sunrise, the UNESCO Toy Train, and centuries-old tea estates — the complete Darjeeling guide.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/darjeeling-travel-guide",
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
          headline: "Darjeeling Travel Guide: Tea Gardens, Toy Train & Tiger Hill",
          description:
            "Complete Darjeeling guide — Tiger Hill sunrise, the UNESCO Toy Train, tea garden tours, Batasia Loop, Peace Pagoda, monasteries, where to stay, and a full visit plan for the Queen of the Hills.",
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
            "@id": "https://club.kudozz.in/blog/darjeeling-travel-guide",
          },
          keywords:
            "Darjeeling, Tiger Hill, Darjeeling Himalayan Railway, Toy Train, tea gardens, Batasia Loop, Ghoom Monastery, Kanchenjunga",
          about: {
            "@type": "Place",
            name: "Darjeeling",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Darjeeling",
              addressRegion: "West Bengal",
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
                name: "West Bengal",
                item: "https://club.kudozz.in/blog/west-bengal-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Darjeeling",
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
    q: "What is Darjeeling famous for?",
    a: "Darjeeling is famous for three things above all: its world-renowned first-flush and second-flush tea, the UNESCO World Heritage-listed Darjeeling Himalayan Railway (the 'Toy Train'), and its sunrise view of Kanchenjunga, the world's third-highest peak, from Tiger Hill. Add in colonial-era architecture, Buddhist monasteries, and cool Himalayan air, and it's easy to see why it was nicknamed the 'Queen of the Hills' under the British.",
  },
  {
    q: "How do I reach Darjeeling?",
    a: "The nearest airport is Bagdogra (IXB), about 90 km away, with daily flights from Delhi, Kolkata, Guwahati, and other major cities. The nearest railhead is New Jalpaiguri (NJP), about 70 km away, well connected by overnight trains from Kolkata and elsewhere. From both, shared jeeps and taxis climb up to Darjeeling in roughly 3-4 hours; a short, scenic stretch of the historic Toy Train also runs between NJP/Siliguri and Darjeeling.",
  },
  {
    q: "What is the best time to visit Darjeeling?",
    a: "March to May and October to December are the best windows — clear skies, comfortable daytime temperatures, and the best odds of an unobstructed Kanchenjunga view at sunrise. The monsoon (June to September) brings heavy rain, frequent landslides, and clouded-over mountain views, so it's best avoided unless you specifically want to see the misty, rain-washed tea gardens.",
  },
  {
    q: "Is the Tiger Hill sunrise worth the early start?",
    a: "For most travellers, yes — but manage expectations. You'll need to leave your hotel around 4 AM to reach the viewpoint before sunrise, and clear-sky views of Kanchenjunga are not guaranteed even in the best months, since low cloud can roll in overnight. On a clear morning, though, it's genuinely one of the most memorable sunrises in India, with the entire Kanchenjunga range turning gold before the crowd's eyes.",
  },
  {
    q: "Can I do the full Toy Train ride from NJP to Darjeeling?",
    a: "It's possible but rarely done in full today — the complete NJP/Siliguri to Darjeeling run takes 7-8 hours and is mostly used for special heritage charters. Most visitors instead ride the shorter, more popular 'Joy Ride' loop from Darjeeling to Ghoom and back (about 2 hours), which covers the scenic Batasia Loop and the highest railway station in India at Ghoom.",
  },
  {
    q: "How many days do I need in Darjeeling?",
    a: "3 days covers the essentials comfortably — a sunrise at Tiger Hill, the Toy Train joy ride, a tea garden visit, and the town's monasteries and viewpoints. Add a day or two if you're combining it with Kalimpong or using Darjeeling as your base before a Sandakphu trek.",
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
  { id: "introduction", title: "The Queen of the Hills", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Darjeeling", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DarjeelingGuidePage() {
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
              alt="Misty Himalayan hills and green tea gardens near Darjeeling, West Bengal"
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
                { label: "West Bengal", href: "/blog/west-bengal-travel-guide" },
                { label: "Darjeeling", href: null },
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
                "Darjeeling",
                "Toy Train",
                "Tea Gardens",
                "Tiger Hill",
                "West Bengal",
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
              Darjeeling: Tea Gardens, Toy Train & Tiger Hill Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The Himalayas' most storied hill station — a Kanchenjunga
              sunrise from Tiger Hill, a UNESCO-listed steam railway, and
              centuries-old tea gardens rolling down every slope.
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
                  text: "Darjeeling Hills, West Bengal",
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
                  <h2>The Queen of the Hills</h2>
                  <p>
                    Perched at roughly 2,050 metres in the eastern Himalayas,{" "}
                    <strong>Darjeeling</strong> has drawn travellers since the
                    British built it as a summer retreat from Kolkata's heat
                    in the 1830s. What began as a sanatorium town grew into
                    the world's most famous tea-growing region, its steep
                    slopes terraced with estates that still supply some of
                    the priciest tea leaves on earth. It remains the
                    unofficial capital of the hills in{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>
                    , and the natural first stop for most Himalayan trips out
                    of{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>.
                  </p>
                  <p>
                    Three things anchor a Darjeeling trip: a pre-dawn drive
                    to Tiger Hill for sunrise over Kanchenjunga, a ride on the
                    UNESCO World Heritage-listed Darjeeling Himalayan
                    Railway — better known as the Toy Train — and an
                    afternoon wandering a working tea garden. Beyond that,
                    the town itself rewards slow walking: colonial
                    architecture along Mall Road, Tibetan and Nepali
                    influences in its food and monasteries, and views that
                    change completely depending on whether the clouds have
                    lifted.
                  </p>
                  <p>
                    Darjeeling also works well as a base for onward trips —
                    quieter{" "}
                    <Link href="/blog/kalimpong-travel-guide">
                      Kalimpong
                    </Link>{" "}
                    is under two hours away, and Maney Bhanjang, the trailhead
                    for the{" "}
                    <Link href="/blog/sandakphu-travel-guide">
                      Sandakphu trek
                    </Link>
                    , is a short jeep ride further on.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Darjeeling at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Darjeeling Hills, West Bengal",
                        },
                        {
                          icon: "⛰️",
                          label: "Elevation",
                          value: "~2,050 m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar–May, Oct–Dec" },
                        {
                          icon: "🚂",
                          label: "Known For",
                          value: "Toy Train, Tea, Tiger Hill",
                        },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Bagdogra (~90 km)",
                        },
                        {
                          icon: "🚆",
                          label: "Nearest Railhead",
                          value: "New Jalpaiguri (~70 km)",
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
                  <h2>Best Time to Visit Darjeeling</h2>
                  <p>
                    Darjeeling sits high enough that weather genuinely makes
                    or breaks the trip — particularly your odds of a clear
                    Kanchenjunga view.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – May",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies, blooming rhododendrons, and comfortable daytime temperatures around 12-20°C. The best window for both mountain views and the second-flush tea harvest.",
                      },
                      {
                        season: "Oct – Dec",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Equally excellent",
                        text: "Post-monsoon skies are often at their clearest, giving some of the year's best Tiger Hill sunrises, though nights turn cold by December.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Heavy rain brings frequent landslides on the hill roads, clouded-over views, and disrupted Toy Train services. Some travellers still come for the misty, jungle-green tea gardens.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold but clear",
                        text: "Genuinely cold, occasionally near freezing at night, but skies are often crystal clear — pack serious layers if you visit for winter views.",
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
                    <strong>Our pick:</strong> Late March to May, or October
                    to early December — the two windows with the clearest
                    Kanchenjunga views and the least chance of landslide-hit
                    roads.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Darjeeling</h2>
                  <p>
                    Darjeeling has no airport or major railhead of its own —
                    every route in passes through the plains town of
                    Siliguri.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Bagdogra Airport (IXB), about
                      90 km away, has daily flights from Delhi, Kolkata,
                      Guwahati, and other major cities. From the airport,
                      shared jeeps and prepaid taxis take roughly 3-4 hours
                      up to Darjeeling.
                    </li>
                    <li>
                      <strong>By Rail:</strong> New Jalpaiguri (NJP), about
                      70 km away, is well connected by overnight trains from
                      Kolkata, Delhi, and the Northeast. It's also the
                      starting point for the full-length Toy Train, though
                      most travellers continue by road and ride the shorter
                      joy-ride loop once in Darjeeling.
                    </li>
                    <li>
                      <strong>By Road:</strong> Shared jeeps run frequently
                      from Siliguri and NJP throughout the day; private taxis
                      cost more but are faster and more flexible.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book a shared jeep from NJP
                    station itself rather than the town centre — counters
                    right outside the station run frequent departures and
                    save you a separate trip across Siliguri.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Darjeeling</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/hero.jpg"
                      alt="Tea gardens and hill slopes near Darjeeling, West Bengal"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <h3>Tiger Hill Sunrise</h3>
                  <p>
                    The single most-repeated reason people visit Darjeeling.
                    A pre-dawn drive (roughly 4 AM departure) takes you to
                    Tiger Hill, about 11 km from town, for a sunrise view
                    over the entire Kanchenjunga range — the world's third
                    highest peak — with Everest occasionally visible on the
                    clearest mornings. It's crowded and cold, but on a clear
                    day it's unforgettable.
                  </p>

                  <h3>Darjeeling Himalayan Railway (the Toy Train)</h3>
                  <p>
                    A UNESCO World Heritage Site since 1999, this narrow-gauge
                    steam and diesel railway has climbed the hill since 1881.
                    Most visitors ride the popular "Joy Ride" — a roughly
                    2-hour round trip from Darjeeling station to Ghoom, the
                    highest railway station in India, looping through the
                    scenic Batasia Loop along the way.
                  </p>

                  <h3>Tea Garden Tours</h3>
                  <p>
                    Darjeeling's tea gardens — some over 150 years old — are
                    open for walking tours and tastings, with several close
                    enough to town for a half-day visit. Learn the difference
                    between first-flush and second-flush harvests, and pick
                    up leaves directly from the source rather than a tourist
                    shop.
                  </p>

                  <h3>Batasia Loop & Peace Pagoda</h3>
                  <p>
                    The Batasia Loop is a spiral railway track built to ease
                    the Toy Train's descent, with a war memorial and
                    panoramic mountain views at its centre. A short drive or
                    walk away, the Japanese Peace Pagoda offers a quieter,
                    more contemplative viewpoint, particularly at sunset.
                  </p>

                  <h3>Observatory Hill, Mall Road & Ghoom Monastery</h3>
                  <p>
                    Mall Road is Darjeeling's pedestrian heart, lined with
                    colonial buildings, cafés, and handicraft shops, leading
                    up to Observatory Hill's mixed Hindu-Buddhist shrine.
                    Ghoom Monastery, one of the oldest Tibetan Buddhist
                    monasteries in the region, sits near the highest point of
                    the Toy Train route and houses a striking 15-foot statue
                    of the Maitreya Buddha.
                  </p>

                  <h3>Darjeeling Zoo & Himalayan Mountaineering Institute</h3>
                  <p>
                    The Padmaja Naidu Himalayan Zoological Park is one of the
                    few places in the world to see the red panda and snow
                    leopard in high-altitude enclosures, and shares its
                    grounds with the Himalayan Mountaineering Institute,
                    founded with Tenzing Norgay as its first director, which
                    houses mountaineering memorabilia and exhibits on the
                    history of Everest expeditions.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Darjeeling</h2>
                  <p>
                    Accommodation clusters around Mall Road and Chowrasta for
                    convenience, or slightly out of town for quieter views
                    over the valley and tea gardens.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,500/night",
                        picks: [
                          "Guesthouses near Chowrasta",
                          "Backpacker hostels close to Mall Road",
                          "Simple homestays on the town's edges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹7,000/night",
                        picks: [
                          "Heritage-style hotels near Mall Road",
                          "Boutique stays with Kanchenjunga views",
                          "Tea-estate-adjacent guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹10,000–₹25,000+/night",
                        picks: [
                          "Colonial-era heritage hotels",
                          "Tea estate bungalow stays",
                          "Premium resorts with valley views",
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
                  <h2>Suggested Visit Plan (3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Town Sights",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Bagdogra/NJP, check in",
                          "Afternoon at Mall Road, Chowrasta, Observatory Hill",
                          "Sunset at the Japanese Peace Pagoda",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Tiger Hill & Toy Train",
                        color: "bg-sky-600",
                        activities: [
                          "Pre-dawn drive to Tiger Hill for sunrise",
                          "Ghoom Monastery on the way back",
                          "Afternoon Toy Train joy ride via Batasia Loop",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Tea & Wildlife",
                        color: "bg-forest-600",
                        activities: [
                          "Morning tea garden walk and tasting",
                          "Darjeeling Zoo and Himalayan Mountaineering Institute",
                          "Evening onward to Kalimpong or back to the plains",
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
                    * Many travellers continue on to{" "}
                    <Link href="/blog/kalimpong-travel-guide">
                      Kalimpong
                    </Link>{" "}
                    for a quieter couple of days, or to Maney Bhanjang to
                    start the{" "}
                    <Link href="/blog/sandakphu-travel-guide">
                      Sandakphu trek
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Darjeeling</h2>
                  <ul>
                    <li>
                      <strong>Tibetan and Nepali eateries:</strong> Momos,
                      thukpa, and thenthuk are everywhere and consistently
                      good — a legacy of the town's large Tibetan and Nepali
                      communities.
                    </li>
                    <li>
                      <strong>Colonial-era bakeries and cafés:</strong>{" "}
                      Long-running bakeries along Mall Road and Nehru Road
                      serve fresh bread, pastries, and proper cups of local
                      tea.
                    </li>
                    <li>
                      <strong>Local Bengali restaurants:</strong> Fish curry
                      and rice thalis are widely available for travellers
                      wanting a break from mountain food.
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
                            "₹15,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹3,000"],
                          ["Toy Train joy ride", "₹1,000", "₹1,000", "₹1,000"],
                          ["Tiger Hill jeep trip", "₹400", "₹700", "₹1,500"],
                          ["Local transport/day", "₹300", "₹700", "₹1,500"],
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
                    * Figures are per person, per day, unless noted. The Toy
                    Train joy ride and Tiger Hill trip are one-time costs,
                    not daily.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Darjeeling</h2>
                  <ul>
                    <li>
                      <strong>Book Tiger Hill jeeps the night before:</strong>{" "}
                      Shared jeeps for the sunrise trip are arranged the
                      evening prior through most hotels — don't leave it to
                      the morning of.
                    </li>
                    <li>
                      <strong>Pack real layers:</strong> Darjeeling is cold
                      year-round by Indian standards, and Tiger Hill before
                      dawn is genuinely chilly even in summer months.
                    </li>
                    <li>
                      <strong>Check landslide advisories in monsoon:</strong>{" "}
                      Hill roads around Darjeeling and NJP are prone to
                      landslides from June to September — build buffer days
                      into any monsoon itinerary.
                    </li>
                    <li>
                      <strong>Buy tea directly from estates:</strong>{" "}
                      Prices and authenticity are usually better at garden
                      outlets than at general souvenir shops on Mall Road.
                    </li>
                    <li>
                      <strong>Manage sunrise expectations:</strong> Clear
                      Kanchenjunga views aren't guaranteed even in the best
                      season — treat a clear morning as a bonus, not a
                      certainty.
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
                          "Book Tiger Hill jeeps and Toy Train seats ahead",
                          "Pack warm layers even in summer",
                          "Try a proper tea-garden tasting, not just a shop",
                          "Ride the Toy Train's Ghoom loop for the Batasia views",
                          "Build buffer days around monsoon travel",
                          "Pair Darjeeling with Kalimpong or Sandakphu",
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
                          "Assume a clear Kanchenjunga view is guaranteed",
                          "Skip the pre-dawn jeep booking for Tiger Hill",
                          "Underpack for the cold, even in April-May",
                          "Ignore landslide advisories in monsoon months",
                          "Rush the tea garden visit into a 10-minute stop",
                          "Plan a same-day onward journey with no buffer",
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
                    <strong>🗺️ Extend the trip:</strong> After Darjeeling,
                    head to the quieter{" "}
                    <Link href="/blog/kalimpong-travel-guide">
                      Kalimpong
                    </Link>{" "}
                    for flower nurseries and monasteries without the crowds,
                    or push on to Maney Bhanjang for the{" "}
                    <Link href="/blog/sandakphu-travel-guide">
                      Sandakphu trek
                    </Link>{" "}
                    before returning toward{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>.
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
                  "Darjeeling",
                  "Toy Train",
                  "Tea Gardens",
                  "Tiger Hill",
                  "West Bengal",
                  "Hill Station",
                  "Kanchenjunga",
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

              <RelatedPostsGrid currentSlug="darjeeling-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="darjeeling-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
