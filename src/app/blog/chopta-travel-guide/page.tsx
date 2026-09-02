// src/app/blog/chopta-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chopta Travel Guide: Tungnath Trek & Best Time",
  description:
    "Complete Chopta guide — the Tungnath-Chandrashila trek to the world's highest Shiva temple, Deoria Tal, how to reach via Ukhimath, where to stay, and a full visit plan.",
  keywords:
    "Chopta, Chopta Uttarakhand, Tungnath temple, Chandrashila trek, Deoria Tal, Chopta trekking, Mini Switzerland of India, Panch Kedar, Chopta best time to visit, how to reach Chopta, Ukhimath",
  openGraph: {
    title: "Chopta Travel Guide: Tungnath Trek & Best Time",
    description:
      "Nicknamed the 'Mini Switzerland of India' — a meadow base for the Tungnath-Chandrashila trek to the world's highest Shiva temple and a 360-degree Himalayan summit view.",
    url: "https://club.kudozz.in/blog/chopta-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/solang-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Alpine meadows and Himalayan peaks surrounding Chopta, Uttarakhand",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chopta Travel Guide: Tungnath Trek & Best Time",
    description:
      "The 'Mini Switzerland of India' — base for the Tungnath-Chandrashila trek to the world's highest Shiva temple. The complete Chopta guide.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chopta-travel-guide",
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
          headline: "Chopta Travel Guide: Tungnath Trek & Best Time",
          description:
            "Complete Chopta guide — the Tungnath-Chandrashila trek to the world's highest Shiva temple, Deoria Tal, how to reach via Ukhimath, where to stay, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/chopta-travel-guide",
          },
          keywords:
            "Chopta, Tungnath, Chandrashila, Deoria Tal, Panch Kedar, Ukhimath, trekking Uttarakhand",
          about: {
            "@type": "Place",
            name: "Chopta",
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
                name: "Chopta",
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
    q: "Why is Chopta called the 'Mini Switzerland of India'?",
    a: "The nickname comes from Chopta's setting — a small clearing surrounded by dense conifer forest, open alpine meadows, and close-up Himalayan views, all reachable without a long or technical trek. It's a popular comparison used by Indian travel media, though the actual landscape and infrastructure differ considerably from the Swiss Alps.",
  },
  {
    q: "How difficult is the Tungnath-Chandrashila trek?",
    a: "The trek to Tungnath temple is about 3.5-4 km one way on a paved, moderately steep path, manageable for most reasonably fit beginners in 2-3 hours. The further push from Tungnath to Chandrashila summit adds another 1.5 km of steeper, unpaved trail and is more demanding, especially in windy or snowy conditions — but still considered one of the more accessible high-altitude summit treks in the Himalaya.",
  },
  {
    q: "What makes Tungnath temple significant?",
    a: "Tungnath is widely cited as the highest Shiva temple in the world, at roughly 3,680 metres, and is one of the five Panch Kedar temples of Garhwal, along with Kedarnath. According to tradition, the Pandavas built the Panch Kedar temples at the spots where parts of Shiva's body reappeared after he tried to evade them in the form of a bull.",
  },
  {
    q: "Can I combine Chopta with a Deoria Tal visit?",
    a: "Yes, and many travellers do — Deoria Tal is a separate short trek (roughly 2-2.5 km from the Sari village trailhead) about an hour's drive from Chopta, often done as an add-on the day before or after the Tungnath-Chandrashila trek, or as a standalone sunrise/camping trip.",
  },
  {
    q: "What is the best time to trek to Chandrashila summit for clear views?",
    a: "March to June (before the pre-monsoon haze thickens) and September to November generally offer the clearest 360-degree views from Chandrashila, including Nanda Devi, Trishul, and the Kedarnath peaks. Winter (December-February) brings snow that some trekkers seek out deliberately, but it requires proper cold-weather gear and caution.",
  },
  {
    q: "Is Chopta suitable for a first Himalayan trek?",
    a: "Yes — its relatively short distance, paved lower section, and easy access from Rishikesh make Tungnath-Chandrashila one of the more approachable high-altitude treks in Uttarakhand, which is why it's popular with first-time trekkers. That said, the Chandrashila summit push still involves real altitude and weather exposure, so come prepared regardless of experience level.",
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
  { id: "introduction", title: "The Mini Switzerland of India", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chopta", level: 2 },
  { id: "attractions", title: "The Trek & Key Sites", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChoptaGuidePage() {
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
              src="/images/destinations/manali/solang-valley.jpg"
              alt="Alpine meadows and Himalayan peaks surrounding Chopta, Uttarakhand"
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
                { label: "Chopta", href: null },
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
                "Chopta",
                "Tungnath",
                "Chandrashila",
                "Trekking",
                "Deoria Tal",
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
              Chopta: Tungnath Trek & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Nicknamed the "Mini Switzerland of India" — a small meadow
              base for the Tungnath-Chandrashila trek, leading to the
              world's highest Shiva temple and a 360-degree Himalayan
              summit view.
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
                  text: "Rudraprayag District, Garhwal Himalaya",
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
                  <h2>The Mini Switzerland of India</h2>
                  <p>
                    <strong>Chopta</strong> is a small clearing in dense
                    conifer forest in Rudraprayag district, popularly
                    nicknamed the "Mini Switzerland of India" for its open
                    meadows, close Himalayan views, and cool climate — all
                    reachable without a long approach. On its own, Chopta is
                    little more than a handful of guesthouses and dhabas by
                    the roadside; its real draw is what starts right from
                    here — the{" "}
                    <strong>Tungnath-Chandrashila trek</strong>.
                  </p>
                  <p>
                    Tungnath, roughly 3.5-4 km up a paved path, is widely
                    cited as the highest Shiva temple in the world at about
                    3,680 metres, and is one of the five{" "}
                    <strong>Panch Kedar</strong> temples alongside{" "}
                    <Link href="/blog/kedarnath-travel-guide">
                      Kedarnath
                    </Link>
                    . A further, steeper 1.5 km climb reaches{" "}
                    <strong>Chandrashila</strong> summit at around 4,000
                    metres, opening onto a 360-degree panorama that takes in
                    Nanda Devi, Trishul, and the Kedarnath peaks on a clear
                    day.
                  </p>
                  <p>
                    Nearby <strong>Deoria Tal</strong>, a small lake known
                    for mirror-still reflections of the surrounding
                    mountains, is often folded into the same trip as a
                    separate short trek, and rhododendron blooms in spring
                    add colour to the forest sections of the route.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛰️</span> Chopta at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Rudraprayag District, Uttarakhand",
                        },
                        {
                          icon: "⛰️",
                          label: "Altitude",
                          value: "~2,680m (Chopta itself)",
                        },
                        {
                          icon: "🥾",
                          label: "Trek",
                          value: "Tungnath (~4km) + Chandrashila (~1.5km more)",
                        },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "World's Highest Shiva Temple",
                        },
                        {
                          icon: "🏔️",
                          label: "Summit View",
                          value: "Nanda Devi, Trishul, Kedarnath range",
                        },
                        {
                          icon: "🏘️",
                          label: "Base Town",
                          value: "Ukhimath",
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
                  <h2>Best Time to Visit Chopta</h2>
                  <p>
                    Chopta rewards visits across three quite different
                    seasons, each with its own character.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Rhododendron blooms colour the forest, skies are generally clear, and daytime trekking temperatures are comfortable — the most popular window for the Chandrashila summit push.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-stone-100 border-stone-300",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain, slippery trails, and persistent cloud cover that hides the summit views entirely — best avoided for this trek.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Excellent visibility",
                        text: "Post-monsoon skies are often the clearest of the year, making this arguably the best window for photography and long-distance summit views.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Snow trek — for the prepared",
                        text: "Snow blankets the trail and meadows, appealing to experienced trekkers, but requires proper cold-weather gear, spikes/microspikes, and caution on the steeper Chandrashila stretch.",
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
                    <strong>Our pick:</strong> March to June for
                    rhododendrons and comfortable trekking weather, or
                    September to November for the clearest possible
                    Chandrashila summit views.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chopta</h2>
                  <ul>
                    <li>
                      <strong>By air:</strong> Jolly Grant Airport in
                      Dehradun is the nearest airport, roughly 200 km away —
                      about 7-8 hours by road.
                    </li>
                    <li>
                      <strong>By rail:</strong>{" "}
                      <Link href="/blog/rishikesh-adventure-travel-guide">
                        Rishikesh
                      </Link>{" "}
                      is the nearest major railhead with regular
                      long-distance connections.
                    </li>
                    <li>
                      <strong>By road:</strong> Drive via Rishikesh,
                      Devprayag, Rudraprayag, and Ukhimath to Chopta — a
                      full day's drive best split with an overnight stop in
                      Rudraprayag or Ukhimath.
                    </li>
                    <li>
                      <strong>Ukhimath as a base:</strong> Many travellers
                      overnight in Ukhimath, a short drive below Chopta,
                      which has a wider range of stays and is also a
                      Panch Kedar-linked pilgrim town in its own right.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Start the trek from Chopta
                    itself as early as possible — reaching the trailhead
                    means either staying overnight at Chopta or driving up
                    very early from Ukhimath before sunrise.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>The Trek & Key Sites</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/solang-valley.jpg"
                      alt="Trekking trail through meadows near Chopta, Uttarakhand"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Tungnath Temple</h3>
                  <p>
                    Roughly 3.5-4 km up a well-paved, moderately steep trail
                    from Chopta, Tungnath is widely regarded as the highest
                    Shiva temple in the world at about 3,680 metres, and one
                    of the five Panch Kedar shrines. The temple itself is
                    modest in size but ancient in character, and the walk up
                    passes through changing terrain — forest lower down,
                    opening into alpine meadow near the top.
                  </p>
                  <h3>Chandrashila Summit</h3>
                  <p>
                    A further, steeper 1.5 km push beyond Tungnath reaches
                    Chandrashila summit at roughly 4,000 metres — a genuine
                    360-degree Himalayan panorama including Nanda Devi,
                    Trishul, Chaukhamba, and the Kedarnath range on a clear
                    day. This final stretch is unpaved and more demanding
                    than the temple approach, particularly in wind or snow.
                  </p>
                  <h3>Deoria Tal</h3>
                  <p>
                    A separate, shorter trek (roughly 2-2.5 km from the Sari
                    village trailhead, about an hour's drive from Chopta),
                    Deoria Tal is known for still-water reflections of the
                    Chaukhamba massif on calm mornings. It's commonly
                    combined with the Chopta trip as a standalone day trek
                    or an overnight camping spot.
                  </p>
                  <h3>Rhododendron Forest</h3>
                  <p>
                    The lower stretches of the Tungnath trail pass through
                    dense rhododendron forest that blooms bright red and pink
                    from roughly March to May, adding real colour to what's
                    otherwise a conifer-and-meadow landscape.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Chopta</h2>
                  <p>
                    Chopta itself has a small cluster of basic guesthouses
                    and a few tent-stay operators; Ukhimath, a short drive
                    below, offers a wider and more comfortable range of
                    accommodation.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Basic guesthouses at Chopta",
                          "GMVN rest house",
                          "Shared tent-stay camps",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,500/night",
                        picks: [
                          "Mid-size hotels in Ukhimath",
                          "Private cottage/tent camps at Chopta",
                          "Guesthouses along the Rudraprayag road",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹6,000–₹14,000+/night",
                        picks: [
                          "Better resort-style properties near Ukhimath",
                          "Premium glamping/tent experiences at Chopta",
                          "Full-service trek-package stays",
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
                  <h2>Suggested Visit Plan (2-3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Ukhimath",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Rishikesh/Rudraprayag to Ukhimath",
                          "Check in, rest and acclimatise",
                          "Early dinner ahead of a pre-dawn trek start",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Tungnath & Chandrashila Trek",
                        color: "bg-sky-600",
                        activities: [
                          "Early drive from Ukhimath to Chopta trailhead",
                          "Trek to Tungnath temple, darshan",
                          "Continue to Chandrashila summit for panoramic views",
                          "Descend and return to Ukhimath",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Deoria Tal & Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Short trek to Deoria Tal from Sari village",
                          "Return drive toward Rishikesh or onward",
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
                    * Trekkers with more time sometimes continue north
                    toward{" "}
                    <Link href="/blog/badrinath-travel-guide">
                      Badrinath
                    </Link>{" "}
                    or{" "}
                    <Link href="/blog/auli-travel-guide">Auli</Link>{" "}
                    for a broader Garhwal Himalaya circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Dhabas at Chopta:</strong> A handful of
                      roadside dhabas serve simple North Indian meals, Maggi
                      noodles, and hot tea — useful for a warm-up before or
                      after the trek.
                    </li>
                    <li>
                      <strong>Hotel dining in Ukhimath:</strong> Wider
                      thali-style menus with local Garhwali dishes alongside
                      standard North Indian fare.
                    </li>
                    <li>
                      <strong>Carry snacks for the trek:</strong> Options
                      thin out considerably past the Chopta trailhead, so
                      pack water, energy snacks, and a light lunch for the
                      Tungnath-Chandrashila trek.
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
                            "₹1,000",
                            "₹3,500",
                            "₹9,000",
                          ],
                          ["Local guide (optional)", "₹1,500", "₹1,500", "₹1,500"],
                          ["Food/day", "₹500", "₹1,200", "₹2,800"],
                          ["Pony (Tungnath, one way)", "₹1,000", "₹1,000", "₹1,000"],
                          ["Local transport/day", "₹500", "₹1,200", "₹2,500"],
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
                    * Figures are per person, per day (pony figure is
                    one-way, to Tungnath only — ponies do not go beyond the
                    temple to Chandrashila).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Chopta</h2>
                  <ul>
                    <li>
                      <strong>Start the trek before sunrise if possible:</strong>{" "}
                      Clouds tend to roll in by late morning, especially in
                      the pre-monsoon months, obscuring summit views.
                    </li>
                    <li>
                      <strong>Carry warm layers and windproof outerwear:</strong>{" "}
                      Chandrashila summit is exposed and windy even outside
                      winter — temperatures there are noticeably colder than
                      at Chopta itself.
                    </li>
                    <li>
                      <strong>Wear proper trekking shoes:</strong> The paved
                      Tungnath section is manageable in normal shoes, but
                      the unpaved Chandrashila stretch needs proper grip.
                    </li>
                    <li>
                      <strong>Winter trekkers need spikes/microspikes:</strong>{" "}
                      December-February snow makes the upper trail slippery
                      and occasionally requires proper winter trekking gear.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs are unreliable
                      beyond Rudraprayag or Ukhimath.
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
                          "Start the trek before sunrise",
                          "Carry warm, windproof layers for the summit",
                          "Wear proper trekking shoes",
                          "Pack snacks and water for the full trek",
                          "Add Deoria Tal if you have an extra day",
                          "Carry cash before leaving Ukhimath",
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
                          "Start the Chandrashila push late in the day",
                          "Attempt winter snow trekking without spikes",
                          "Underestimate the wind at Chandrashila summit",
                          "Travel during peak monsoon (Jul-Aug)",
                          "Rely on ATMs beyond Ukhimath",
                          "Skip acclimatisation if arriving from low altitude",
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
                    <strong>🗺️ Extend the trip:</strong> Chopta pairs
                    naturally with{" "}
                    <Link href="/blog/kedarnath-travel-guide">
                      Kedarnath
                    </Link>{" "}
                    (both Panch Kedar sites), or with{" "}
                    <Link href="/blog/valley-of-flowers-travel-guide">
                      Valley of Flowers
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/auli-travel-guide">Auli</Link>{" "}
                    further north for a longer Garhwal Himalaya trekking
                    circuit.
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
                  "Chopta",
                  "Tungnath",
                  "Chandrashila",
                  "Uttarakhand",
                  "Trekking",
                  "Deoria Tal",
                  "Panch Kedar",
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

              <RelatedPostsGrid currentSlug="chopta-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chopta-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
