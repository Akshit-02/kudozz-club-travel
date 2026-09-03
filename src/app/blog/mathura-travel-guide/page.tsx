// src/app/blog/mathura-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mathura Travel Guide: Krishna Janmabhoomi & Temples",
  description:
    "Complete Mathura travel guide — Krishna Janmabhoomi Temple, Vishram Ghat aarti, Dwarkadhish Temple, Mathura Museum, how to reach, where to stay, and a full visit plan for the Braj region.",
  keywords:
    "Mathura travel guide, Krishna Janmabhoomi Temple, Mathura Uttar Pradesh, Vishram Ghat, Dwarkadhish Temple, Mathura Museum, Braj region, Mathura Holi, how to reach Mathura, Mathura Vrindavan tour",
  openGraph: {
    title: "Mathura Travel Guide: Krishna Janmabhoomi & Temples",
    description:
      "The traditional birthplace of Lord Krishna — Krishna Janmabhoomi, Vishram Ghat's evening aarti, Dwarkadhish Temple, and the gateway to the wider Braj region.",
    url: "https://club.kudozz.in/blog/mathura-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hadimba-temple.jpg",
        width: 1200,
        height: 630,
        alt: "Ornately carved temple spires against a dusk sky, evocative of Mathura's Krishna Janmabhoomi temple complex",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathura Travel Guide: Krishna Janmabhoomi & Temples",
    description:
      "Krishna Janmabhoomi, Vishram Ghat's evening aarti, and Dwarkadhish Temple — the complete Mathura guide.",
    images: ["/images/destinations/manali/hadimba-temple.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mathura-travel-guide",
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
          headline: "Mathura Travel Guide: Krishna Janmabhoomi & Temples",
          description:
            "Complete Mathura travel guide — Krishna Janmabhoomi Temple, Vishram Ghat aarti, Dwarkadhish Temple, Mathura Museum, how to reach, where to stay, and a full visit plan for the Braj region.",
          image:
            "https://club.kudozz.in/images/destinations/manali/hadimba-temple.jpg",
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
            "@id": "https://club.kudozz.in/blog/mathura-travel-guide",
          },
          keywords:
            "Mathura, Krishna Janmabhoomi, Vishram Ghat, Dwarkadhish Temple, Braj region, Holi",
          about: {
            "@type": "Place",
            name: "Mathura",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttar Pradesh",
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
                name: "Uttar Pradesh",
                item: "https://club.kudozz.in/blog/uttar-pradesh-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Mathura",
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
    q: "Is Mathura the birthplace of Lord Krishna?",
    a: "Yes — Mathura is revered in Hindu tradition as the birthplace of Lord Krishna. The Krishna Janmabhoomi Temple complex marks the spot believed to be the prison cell of King Kansa where Krishna was born, and it remains one of the most significant pilgrimage sites in India for Vaishnavite Hindus.",
  },
  {
    q: "How do I reach Mathura from Delhi and Agra?",
    a: "Mathura Junction is well connected by rail — around 2-3 hours from Delhi and about an hour from Agra, with frequent trains throughout the day. By road, Mathura sits just off the Yamuna Expressway and NH19, roughly 3.5-4 hours from Delhi and under 90 minutes from Agra by car or bus.",
  },
  {
    q: "How many days do I need for Mathura and the Braj region?",
    a: "Mathura itself can be covered in a full day or a long half-day. Most travellers pair it with Vrindavan (15km away) for a 1-2 day trip, and those wanting to also see Govardhan and Barsana typically plan 2-3 days to cover the wider Braj circuit comfortably.",
  },
  {
    q: "Is Mathura crowded during Holi?",
    a: "Extremely. Holi in the Braj region — including Mathura, Vrindavan, and nearby Barsana's famous Lathmar Holi — draws massive domestic and international crowds over roughly a week of celebrations in February or March. Book accommodation and transport well in advance if visiting during this window, or avoid it if you prefer a quieter visit.",
  },
  {
    q: "What is Vishram Ghat known for?",
    a: "Vishram Ghat is Mathura's principal bathing ghat on the Yamuna River, believed to be where Krishna rested after slaying the tyrant king Kansa. It hosts a daily evening Yamuna aarti with lamps, chanting, and boat rides on the river — one of the most atmospheric experiences in the city.",
  },
  {
    q: "Can non-Hindus visit Mathura's temples?",
    a: "Most temples in Mathura, including the outer areas of the Krishna Janmabhoomi complex, welcome visitors of all faiths, though the innermost sanctum areas may have restrictions and heightened security given the site's religious sensitivity. Modest dress is expected, and photography is often restricted near the sanctum — check posted rules at each temple.",
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
  { id: "introduction", title: "Krishna's Birthplace", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mathura", level: 2 },
  { id: "attractions", title: "Temples & Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MathuraGuidePage() {
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
              src="/images/destinations/manali/hadimba-temple.jpg"
              alt="Ornately carved temple spires against a dusk sky, evocative of Mathura's Krishna Janmabhoomi temple complex"
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
                { label: "Uttar Pradesh", href: "/blog/uttar-pradesh-travel-guide" },
                { label: "Mathura", href: null },
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
                "Mathura",
                "Krishna Janmabhoomi",
                "Uttar Pradesh",
                "Braj Region",
                "Yamuna River",
                "Pilgrimage",
                "Holi",
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
              Mathura: Krishna Janmabhoomi, Ghats & Braj Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The traditional birthplace of Lord Krishna — Krishna
              Janmabhoomi Temple, Vishram Ghat's evening Yamuna aarti, and
              the gateway to Vrindavan, Govardhan, Barsana, and Gokul across
              the wider Braj region.
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
                  text: "Braj Region, Uttar Pradesh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>Krishna's Birthplace</h2>
                  <p>
                    <strong>Mathura</strong> sits on the west bank of the
                    Yamuna River, roughly 145km south of Delhi, and holds a
                    place in Hindu tradition few cities can match — it is
                    revered as the birthplace of{" "}
                    <strong>Lord Krishna</strong>. The city's oldest
                    settlements predate the Mauryan era, but for the vast
                    majority of visitors today, Mathura is a pilgrimage
                    first and a historical city second.
                  </p>
                  <p>
                    At its heart sits the{" "}
                    <strong>Krishna Janmabhoomi Temple complex</strong>,
                    built around the spot believed to be the prison cell
                    where Krishna was born to Devaki and Vasudeva. A short
                    walk from the old town, <strong>Vishram Ghat</strong> on
                    the Yamuna hosts a daily evening aarti that draws locals
                    and pilgrims alike, while the{" "}
                    <strong>Dwarkadhish Temple</strong> and the{" "}
                    <strong>Mathura Museum's</strong> collection of ancient
                    Mathura-school sculpture round out a full day in the
                    city.
                  </p>
                  <p>
                    Mathura is also, practically speaking, the gateway to
                    the wider <strong>Braj region</strong> — the cluster of
                    towns tied to Krishna's life and legend, including{" "}
                    <Link href="/blog/vrindavan-travel-guide">
                      Vrindavan
                    </Link>
                    ,{" "}
                    <Link href="/blog/govardhan-travel-guide">
                      Govardhan
                    </Link>
                    , Barsana, and Gokul. Most travellers base themselves in
                    Mathura or Vrindavan and fan out from there.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Mathura at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "West bank of the Yamuna, UP",
                        },
                        {
                          icon: "🚆",
                          label: "From Delhi",
                          value: "~2-3 hr by train",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Krishna Janmabhoomi, Vishram Ghat",
                        },
                        {
                          icon: "🎨",
                          label: "Big Festival",
                          value: "Holi (Feb/Mar) — huge crowds",
                        },
                        {
                          icon: "🗺️",
                          label: "Gateway To",
                          value: "Vrindavan, Govardhan, Barsana",
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
                  <h2>Best Time to Visit Mathura</h2>
                  <p>
                    Mathura's climate follows the classic North Indian
                    pattern — a comfortable winter, a scorching summer, and
                    a humid monsoon — while its festival calendar can make
                    or break your trip depending on how much crowd you want.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, pleasant days ideal for temple-hopping and ghat visits on foot. December and January can turn genuinely cold in the mornings and evenings.",
                      },
                      {
                        season: "Feb / Mar",
                        emoji: "🎨",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Holi season — plan ahead",
                        text: "The Braj region's Holi celebrations, spread over about a week and including Barsana's famous Lathmar Holi, draw massive crowds. Spectacular but chaotic — book far ahead or avoid.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Very hot — avoid",
                        text: "Daytime temperatures regularly cross 40°C. Only worth it if you have no other window and stick to early-morning and evening temple visits.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid",
                        text: "Rain brings relief from the heat but adds humidity and occasional waterlogging in the old town's narrow lanes near the ghats.",
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
                    <strong>Our pick:</strong> October to March for
                    comfortable sightseeing weather. Come specifically for
                    Holi in February or March only if you're prepared for
                    dense crowds and want that particular experience.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mathura</h2>
                  <p>
                    Mathura's location on the Delhi-Agra corridor makes it
                    one of the easiest pilgrimage towns in North India to
                    reach.
                  </p>
                  <ul>
                    <li>
                      <strong>By train:</strong> Mathura Junction is a major
                      rail hub with frequent trains from Delhi (roughly 2-3
                      hours) and Agra (about an hour). It also sits on
                      several long-distance routes, making it an easy
                      stopover.
                    </li>
                    <li>
                      <strong>By road:</strong> The Yamuna Expressway and
                      NH19 connect Mathura to both Delhi (~3.5-4 hours by
                      car) and Agra (under 90 minutes), with regular UPSRTC
                      and private buses running both routes.
                    </li>
                    <li>
                      <strong>By air:</strong> The nearest airports are
                      Agra (limited flights) and Delhi's Indira Gandhi
                      International, from where most travellers continue by
                      train or road.
                    </li>
                    <li>
                      <strong>Getting around:</strong> Cycle-rickshaws and
                      auto-rickshaws cover the old town and ghats easily;
                      taxis and shared autos connect Mathura to Vrindavan
                      (~15km) and Govardhan (~26km).
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're already visiting{" "}
                    <Link href="/blog/agra-travel-guide">Agra</Link> for the
                    Taj Mahal, Mathura makes an easy same-day or next-day
                    add-on — it's just over an hour away by road or rail.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Temples & Attractions in Mathura</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hadimba-temple.jpg"
                      alt="Temple spires and pilgrims near a riverside ghat, representative of Mathura's temple town atmosphere"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Krishna Janmabhoomi Temple</h3>
                  <p>
                    The spiritual centre of Mathura, this temple complex
                    marks the traditional site of Krishna's birth inside
                    what tradition holds was King Kansa's prison cell. The
                    complex has been rebuilt multiple times over centuries
                    of history and today includes several shrines,
                    security checkpoints given its religious significance,
                    and a constant flow of pilgrims. Mobile phones and bags
                    are typically not allowed inside — check current rules
                    and use the cloakroom facilities before entering.
                  </p>
                  <h3>Vishram Ghat & the Yamuna Aarti</h3>
                  <p>
                    Mathura's principal bathing ghat on the Yamuna, said to
                    be where Krishna rested after defeating the tyrant king
                    Kansa. Every evening, priests perform an aarti with
                    rows of lamps facing the river, accompanied by bells
                    and chanting — a smaller, more intimate cousin of the
                    Ganga aarti in Varanasi. Boatmen offer short rides along
                    the ghats, especially atmospheric around sunset.
                  </p>
                  <h3>Dwarkadhish Temple</h3>
                  <p>
                    A 19th-century temple dedicated to Krishna in his form
                    as Dwarkadhish ("King of Dwarka"), known for its
                    elaborately painted interiors and a devotional
                    atmosphere that's especially lively during morning and
                    evening aartis. It sits close to Vishram Ghat, making
                    the two an easy pairing.
                  </p>
                  <h3>Mathura Museum</h3>
                  <p>
                    Housed in a distinctive red sandstone building, this
                    museum holds one of India's finest collections of
                    ancient Mathura-school sculpture — Buddhist, Jain, and
                    Hindu stone carvings dating back to the Kushan and
                    Gupta periods, when Mathura was a major artistic and
                    trading centre in its own right, well before its later
                    identity as a pilgrimage town took hold.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Mathura</h2>
                  <p>
                    Most accommodation clusters near the old town, Vishram
                    Ghat, and along Deeg Gate/Station Road, with a wider
                    spread of options if you're willing to consider
                    Vrindavan, 15km away, as a base instead.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛕",
                        range: "₹700–₹1,800/night",
                        picks: [
                          "Dharamshalas near the temples",
                          "Simple lodges near the station",
                          "UPSTDC guesthouses",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,500/night",
                        picks: [
                          "Business hotels near Deeg Gate",
                          "Hotels along Vrindavan Road",
                          "Serviced apartments near the station",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌟",
                        range: "₹6,000–₹15,000+/night",
                        picks: [
                          "Riverside heritage-style hotels",
                          "Branded chain hotels on the highway",
                          "Resort-style properties toward Vrindavan",
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
                        title: "Mathura's Old Town",
                        color: "bg-amber-700",
                        activities: [
                          "Morning at Krishna Janmabhoomi Temple",
                          "Dwarkadhish Temple and a walk through the old town lanes",
                          "Sunset aarti at Vishram Ghat, short boat ride",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Museum & Onward to Vrindavan",
                        color: "bg-sky-600",
                        activities: [
                          "Morning at Mathura Museum",
                          "Short drive to Vrindavan (~15km) for its temples",
                          "Evening back in Mathura or onward to Agra",
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
                    * With an extra day, add{" "}
                    <Link href="/blog/govardhan-travel-guide">Govardhan</Link>{" "}
                    for its parikrama path and sacred kunds, completing a
                    fuller loop of the Braj region.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Mathura</h2>
                  <ul>
                    <li>
                      <strong>Mathura ke pede:</strong> The city's
                      signature milk-based sweet — sold at countless shops
                      around the temples and a near-mandatory souvenir for
                      visitors.
                    </li>
                    <li>
                      <strong>Pure-vegetarian thalis:</strong> Given the
                      city's religious character, most restaurants near
                      the temples serve satvik, onion-and-garlic-free
                      vegetarian food.
                    </li>
                    <li>
                      <strong>Street food near the old town:</strong>{" "}
                      Kachori-sabzi, chaat, and lassi stalls cluster around
                      Vishram Ghat and the main temple lanes.
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
                            "₹900",
                            "₹3,500",
                            "₹9,000",
                          ],
                          ["Local transport/day", "₹200", "₹500", "₹1,200"],
                          ["Food/day", "₹400", "₹1,000", "₹2,500"],
                          [
                            "Auto to Vrindavan (round trip)",
                            "₹300",
                            "₹500",
                            "₹1,000",
                          ],
                          ["Temple donations", "₹100", "₹300", "₹500+"],
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
                    * Figures are per person, per day, in Indian Rupees.
                    Costs rise sharply around Holi and other major
                    festivals.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Mathura</h2>
                  <ul>
                    <li>
                      <strong>Dress modestly:</strong> Cover shoulders and
                      knees when entering temples — this is a working
                      pilgrimage town, not a tourist attraction first.
                    </li>
                    <li>
                      <strong>Leave phones and bags at the cloakroom:</strong>{" "}
                      Krishna Janmabhoomi and several other temples restrict
                      electronics and bags inside for security reasons.
                    </li>
                    <li>
                      <strong>Avoid touts near the temples:</strong> As
                      with most major pilgrimage sites, unofficial guides
                      and "special darshan" offers are common — stick to
                      official queues.
                    </li>
                    <li>
                      <strong>Time Holi carefully:</strong> If you want to
                      experience it, plan and book months ahead; if you
                      want to avoid it, steer clear of the Braj region
                      entirely in that window.
                    </li>
                    <li>
                      <strong>Pair with Vrindavan:</strong> The two towns
                      are so close that splitting your trip between them
                      is standard practice, not an extra effort.
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
                          "Dress modestly for temple visits",
                          "Watch the evening aarti at Vishram Ghat",
                          "Try Mathura ke pede from a reputed shop",
                          "Carry cash for small temple donations",
                          "Combine your trip with Vrindavan",
                          "Book early if visiting during Holi",
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
                          "Carry phones or bags into restricted temple areas",
                          "Wear shorts or sleeveless tops at temples",
                          "Follow unofficial guides promising 'VIP darshan'",
                          "Visit during Holi expecting a quiet trip",
                          "Skip checking each temple's photography rules",
                          "Rush the Braj circuit into a single afternoon",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Mathura
                    with{" "}
                    <Link href="/blog/vrindavan-travel-guide">
                      Vrindavan
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/govardhan-travel-guide">
                      Govardhan
                    </Link>{" "}
                    for the full Braj circuit, or continue on to{" "}
                    <Link href="/blog/agra-travel-guide">Agra</Link>, just
                    over an hour away, to see the Taj Mahal. Both fit
                    naturally into a broader{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>{" "}
                    itinerary.
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
                  "Mathura",
                  "Krishna Janmabhoomi",
                  "Uttar Pradesh",
                  "Braj Region",
                  "Yamuna River",
                  "Pilgrimage",
                  "Holi",
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

              <RelatedPostsGrid currentSlug="mathura-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mathura-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
