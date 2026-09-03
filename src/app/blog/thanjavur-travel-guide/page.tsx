// src/app/blog/thanjavur-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Thanjavur Travel Guide: Brihadeeswarar Temple",
  description:
    "Complete Thanjavur guide — the UNESCO-listed Brihadeeswarar Temple, the Maratha Palace, Thanjavur paintings and bronzes, how to reach, and a full visit plan.",
  keywords:
    "Thanjavur travel guide, Brihadeeswarar Temple, Big Temple Thanjavur, Tanjore paintings, Thanjavur bronze, Saraswathi Mahal Library, Thanjavur Maratha Palace, how to reach Thanjavur, Chola heritage",
  openGraph: {
    title: "Thanjavur Travel Guide: Brihadeeswarar Temple",
    description:
      "An 80-tonne capstone hauled to the top of an 11th-century tower — the complete guide to Thanjavur and the Chola dynasty's greatest temple.",
    url: "https://club.kudozz.in/blog/thanjavur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/udaipur/saheliyon.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient stone architecture within a landscaped courtyard, evoking Thanjavur's Brihadeeswarar Temple complex",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanjavur Travel Guide: Brihadeeswarar Temple",
    description:
      "A UNESCO World Heritage temple, a Maratha-era palace, and a living tradition of gold-leaf painting — the complete Thanjavur guide.",
    images: ["/images/destinations/udaipur/saheliyon.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/thanjavur-travel-guide",
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
          headline: "Thanjavur Travel Guide: Brihadeeswarar Temple",
          description:
            "Complete Thanjavur guide — the UNESCO-listed Brihadeeswarar Temple, the Maratha Palace, Thanjavur paintings and bronzes, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/udaipur/saheliyon.jpg",
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
            "@id": "https://club.kudozz.in/blog/thanjavur-travel-guide",
          },
          keywords:
            "Thanjavur, Brihadeeswarar Temple, Tamil Nadu, Chola dynasty, UNESCO World Heritage, Tanjore art",
          about: {
            "@type": "Place",
            name: "Thanjavur",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Tamil Nadu",
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
                name: "Tamil Nadu",
                item: "https://club.kudozz.in/blog/tamil-nadu-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Thanjavur",
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
    q: "How far is Thanjavur from Chennai?",
    a: "Roughly 340 km, about a 6-hour drive, or a comfortable train journey — Thanjavur is also well connected by road and rail from Trichy and Madurai.",
  },
  {
    q: "What is special about the temple's capstone?",
    a: "The Brihadeeswarar Temple's vimana (tower) is capped by a single monolithic granite block weighing roughly 80 tonnes, believed to have been hauled up a long earthen ramp to its position nearly 66 metres up — a construction feat still studied and discussed today.",
  },
  {
    q: "Is Thanjavur a day trip or does it need an overnight stay?",
    a: "A focused visit to just the temple can be done as a day trip from Trichy, but a proper visit including the Maratha Palace, Saraswathi Mahal Library, and time to see the city's painting and bronze workshops is better with an overnight stay.",
  },
  {
    q: "What is the best time to visit Thanjavur?",
    a: "October to February, when cooler weather makes it comfortable to spend a full day walking the temple grounds and old-town craft quarters.",
  },
  {
    q: "Where can I buy authentic Thanjavur paintings or bronzes?",
    a: "Reputable dealers and established workshops in the city are the safer bet over roadside stalls — genuine gold-leaf paintings and lost-wax cast bronzes are a real craft tradition and priced accordingly, so buy from a trusted source rather than the cheapest option.",
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
  { id: "introduction", title: "The Chola Capital", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Thanjavur", level: 2 },
  { id: "things-to-do", title: "Temple, Palace & Living Art", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ThanjavurGuidePage() {
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
              src="/images/destinations/udaipur/saheliyon.jpg"
              alt="Ancient stone architecture within a landscaped courtyard, evoking Thanjavur's Brihadeeswarar Temple complex"
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
                { label: "Tamil Nadu", href: "/blog/tamil-nadu-travel-guide" },
                { label: "Thanjavur", href: null },
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
                "Thanjavur",
                "Brihadeeswarar Temple",
                "Tamil Nadu",
                "Chola Heritage",
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
              Thanjavur: The Brihadeeswarar Temple Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              An 80-tonne granite block, hauled to the top of a
              thousand-year-old tower — the former Chola capital still
              carries the confidence of an empire that built to last.
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
                  text: "Thanjavur, Tamil Nadu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,200 words",
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
                  <h2>The Chola Capital</h2>
                  <p>
                    <strong>Thanjavur</strong> (Tanjore) was the capital of
                    the Chola dynasty, one of medieval South India's most
                    powerful and artistically ambitious empires. Its
                    centrepiece, the <strong>Brihadeeswarar Temple</strong> —
                    often simply called the "Big Temple" — was built by Raja
                    Raja Chola I around 1010 CE and is now a UNESCO World
                    Heritage Site.
                  </p>
                  <p>
                    The temple's vimana rises roughly 66 metres and is capped
                    by a single monolithic granite block weighing around 80
                    tonnes, believed to have been hauled up a long earthen
                    ramp into position — a feat of engineering still studied
                    today.
                  </p>
                  <p>
                    Beyond the temple, Thanjavur carries its later Maratha
                    history in the Maratha Palace and the Saraswathi Mahal
                    Library's collection of palm-leaf manuscripts, and its
                    living craft tradition in the gold-leaf Thanjavur
                    painting and lost-wax bronze work still practised in the
                    city today.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Thanjavur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Tamil Nadu" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Brihadeeswarar Temple",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🎨",
                          label: "Craft",
                          value: "Thanjavur Paintings & Bronzes",
                        },
                        {
                          icon: "👑",
                          label: "Heritage",
                          value: "Chola & Maratha",
                        },
                        {
                          icon: "🌟",
                          label: "Status",
                          value: "UNESCO World Heritage",
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
                  <h2>Best Time to Visit Thanjavur</h2>
                  <p>
                    As an inland Tamil Nadu city, Thanjavur runs hot for much
                    of the year — timing your visit affects how comfortably
                    you can walk the temple's large open grounds.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cooler, drier conditions make the temple's large stone courtyard and the old-town craft quarters comfortable to explore at a relaxed pace.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — plan around it",
                        text: "Interior Tamil Nadu heat makes midday temple courtyard walking genuinely tough; stick to early morning or evening visits.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Warm, drier than the coast",
                        text: "Thanjavur largely escapes the worst of the southwest monsoon, though it stays warm with occasional showers.",
                      },
                      {
                        season: "Jan",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Thyagaraja Aradhana season",
                        text: "Nearby Thiruvaiyaru's classical music festival (January) draws visitors from across South India — worth combining if timing allows.",
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
                    <strong>Our pick:</strong> October to February — cool
                    enough to spend a full day between the temple grounds and
                    the city's craft workshops without the heat cutting the
                    day short.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Thanjavur</h2>
                  <ul>
                    <li>
                      <strong>By Rail:</strong> Well connected to Chennai,
                      Trichy, and{" "}
                      <Link href="/blog/madurai-travel-guide">Madurai</Link>{" "}
                      by regular trains.
                    </li>
                    <li>
                      <strong>By Road:</strong> Roughly 340 km from Chennai
                      (~6 hr drive), and a much shorter, easy hop from Trichy
                      (~55 km).
                    </li>
                    <li>
                      <strong>By Air:</strong> The nearest major airport is
                      Tiruchirappalli (Trichy), roughly an hour's drive away.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Trichy makes an easy
                    base if you're short on time — it's close enough for a
                    focused half-day Thanjavur temple visit without an
                    overnight stay.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Temple, Palace & Living Art</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="Carved South Indian temple tower, evoking Thanjavur's Brihadeeswarar Temple vimana"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Brihadeeswarar Temple</h3>
                  <p>
                    The reason to come — a UNESCO World Heritage temple whose
                    scale and precision still impress over a thousand years
                    later, from the giant Nandi statue at the entrance to
                    the tower's famous capstone.
                  </p>
                  <h3>Thanjavur Maratha Palace</h3>
                  <p>
                    A later royal complex reflecting the Maratha rulers who
                    succeeded the Nayaks in Thanjavur — a good contrast in
                    architectural style to the earlier Chola temple.
                  </p>
                  <h3>Saraswathi Mahal Library</h3>
                  <p>
                    Housed within the palace complex, home to a significant
                    collection of ancient palm-leaf manuscripts — a quieter,
                    scholarly stop worth the detour.
                  </p>
                  <h3>Thanjavur Painting & Bronze Workshops</h3>
                  <p>
                    The city's living craft tradition — gold-leaf Thanjavur
                    paintings and lost-wax cast bronze idols, both going back
                    to the Chola period, still made and sold in workshops
                    across the city.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Thanjavur</h2>
                  <p>
                    Accommodation is straightforward and mostly clustered in
                    the city centre, within easy reach of the temple.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,800/night",
                        picks: [
                          "Budget lodges, city centre",
                          "TTDC hotel, Thanjavur",
                          "Guesthouses near the temple",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Business hotels, city centre",
                          "Heritage-style boutique stays",
                          "Chain hotels near the bus stand",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,000–₹10,000+/night",
                        picks: [
                          "Heritage palace-style properties",
                          "Premium business hotels",
                          "Resort stays on the outskirts",
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
                        title: "Temple & Palace",
                        color: "bg-amber-700",
                        activities: [
                          "Early morning: Brihadeeswarar Temple",
                          "Thanjavur Maratha Palace",
                          "Saraswathi Mahal Library",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Craft & Old Town",
                        color: "bg-sky-600",
                        activities: [
                          "Thanjavur painting workshop visit",
                          "Bronze idol-making showroom",
                          "Old-town markets and food trail",
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
                    * A focused half-day is enough if just visiting the
                    temple as a stop between Trichy and{" "}
                    <Link href="/blog/madurai-travel-guide">Madurai</Link>.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Thanjavur</h2>
                  <ul>
                    <li>
                      <strong>Traditional Tamil thalis:</strong> Old-town
                      eateries near the temple serve reliable, affordable
                      South Indian vegetarian meals.
                    </li>
                    <li>
                      <strong>Filter coffee and tiffin:</strong> Classic
                      breakfast fare — idli, dosa, vada — widely available
                      across the city.
                    </li>
                    <li>
                      <strong>Delta-region cooking:</strong> Being in the
                      fertile Cauvery delta, Thanjavur's food scene leans on
                      good local rice and produce.
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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹8,000"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Local transport/day", "₹200", "₹500", "₹1,200"],
                          [
                            "Painting/bronze souvenir",
                            "₹500+",
                            "₹2,000+",
                            "₹10,000+",
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
                    * Figures are per person, per day, excluding travel into
                    Thanjavur.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Thanjavur</h2>
                  <ul>
                    <li>
                      <strong>Visit the temple early morning:</strong>{" "}
                      Cooler weather and better light for photographing the
                      vimana and courtyard.
                    </li>
                    <li>
                      <strong>Don't rush past the art:</strong> The city's
                      painting and bronze workshops are as much a highlight
                      as the temple — allocate real time for them.
                    </li>
                    <li>
                      <strong>Buy art from reputable dealers:</strong>{" "}
                      Genuine Thanjavur paintings and bronzes are priced
                      accordingly — avoid the cheapest roadside claims of
                      "authentic" pieces.
                    </li>
                    <li>
                      <strong>Trichy is a viable day-trip base:</strong> If
                      short on time, Thanjavur's temple is an easy half-day
                      add-on from Trichy.
                    </li>
                    <li>
                      <strong>Carry water and sun protection:</strong> The
                      temple's open stone courtyard offers little shade at
                      midday.
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
                          "Visit the temple early morning for good light",
                          "Set aside time for the craft workshops",
                          "Buy art from reputable dealers",
                          "Carry water and sun protection",
                          "Combine with Trichy if short on time",
                          "Explore the Saraswathi Mahal Library",
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
                          "Rush the temple in under an hour",
                          "Visit at midday in peak summer heat",
                          "Buy \"authentic\" art from the cheapest stall",
                          "Skip the Maratha Palace for the temple alone",
                          "Forget footwear rules at the temple",
                          "Assume every workshop sells genuine pieces",
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
                    <strong>🗺️ Extend the trip:</strong> Thanjavur pairs
                    naturally with Trichy and{" "}
                    <Link href="/blog/madurai-travel-guide">Madurai</Link> for
                    a fuller central Tamil Nadu heritage circuit. See our{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
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
                  "Thanjavur",
                  "Brihadeeswarar Temple",
                  "Tamil Nadu",
                  "Chola Heritage",
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

              <RelatedPostsGrid currentSlug="thanjavur-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="thanjavur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
