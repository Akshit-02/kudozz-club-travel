// src/app/blog/patiala-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Patiala Travel Guide: Qila Mubarak & Tips",
  description:
    "Complete Patiala guide — the massive Qila Mubarak fort complex, the mirrored Sheesh Mahal, the royal legacy behind the Patiala peg and Patiala salwar, how to reach from Chandigarh, and a full visit plan.",
  keywords:
    "Patiala travel guide, Qila Mubarak, Sheesh Mahal Patiala, Patiala peg, Patiala salwar, Moti Bagh Palace, Baradari Gardens, how to reach Patiala, Patiala royal heritage, Punjab heritage towns",
  openGraph: {
    title: "Patiala Travel Guide: Qila Mubarak & Tips",
    description:
      "A former princely capital whose royal hospitality gave India two lasting cultural exports — the Patiala peg and the Patiala salwar — the complete Patiala guide.",
    url: "https://club.kudozz.in/blog/patiala-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Grand sandstone fort architecture, evoking Patiala's Qila Mubarak royal fort complex",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Patiala Travel Guide: Qila Mubarak & Tips",
    description:
      "The former Patiala royal capital — Qila Mubarak, the Sheesh Mahal, and the legacy behind two of India's best-known cultural exports.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/patiala-travel-guide",
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
          headline: "Patiala Travel Guide: Qila Mubarak & Tips",
          description:
            "Complete Patiala guide — the massive Qila Mubarak fort complex, the mirrored Sheesh Mahal, the royal legacy behind the Patiala peg and Patiala salwar, how to reach from Chandigarh, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
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
            "@id": "https://club.kudozz.in/blog/patiala-travel-guide",
          },
          keywords:
            "Patiala, Punjab, Qila Mubarak, Sheesh Mahal, royal heritage, Patiala peg",
          about: {
            "@type": "Place",
            name: "Patiala",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Punjab",
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
                name: "Punjab",
                item: "https://club.kudozz.in/blog/punjab-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Patiala",
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
    q: "What is a \"Patiala peg\" and where does the name come from?",
    a: "It's a notably large whisky measure (roughly double a standard peg) tied to the city's royal hospitality traditions under the Patiala maharajas, who were famous for generous, lavish entertaining. The phrase has since become a widely used expression across India for a large drink, far beyond Patiala itself.",
  },
  {
    q: "How far is Patiala from Chandigarh?",
    a: "Roughly 65 km, about a 1.5-hour drive — close enough to combine both cities in a single trip, or to treat Patiala as a day trip from Chandigarh.",
  },
  {
    q: "Is Qila Mubarak open to the public?",
    a: "Yes, the fort complex including the Sheesh Mahal is open for visitors, though some inner sections and institutional buildings within the complex may have restricted access — check current visiting hours locally on arrival.",
  },
  {
    q: "What is the best time to visit Patiala?",
    a: "October to March offers the most comfortable weather for exploring the fort and gardens on foot. Summers (April-June) get quite hot, making outdoor sightseeing far less pleasant.",
  },
  {
    q: "How many days should I plan for Patiala?",
    a: "A single day covers Qila Mubarak, the Sheesh Mahal, and a stop at Baradari Gardens comfortably. Two days allows a more relaxed pace, including Moti Bagh Palace grounds and the old city market.",
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
  { id: "introduction", title: "A Former Princely Capital", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Patiala", level: 2 },
  { id: "things-to-do", title: "Qila Mubarak & Royal Heritage", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PatialaGuidePage() {
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
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Grand sandstone fort architecture, evoking Patiala's Qila Mubarak royal fort complex"
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
                { label: "Punjab", href: "/blog/punjab-travel-guide" },
                { label: "Patiala", href: null },
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
              {["Patiala", "Punjab", "Qila Mubarak", "Royal Heritage"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Patiala Travel Guide: Qila Mubarak & Royal Legacy
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A princely capital whose royal hospitality traditions gave
              India two lasting cultural exports — the oversized "Patiala
              peg" and the voluminous "Patiala salwar" — anchored by one of
              Punjab's grandest fort complexes.
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
                  text: "Patiala, Punjab",
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
                  <h2>A Former Princely Capital</h2>
                  <p>
                    <strong>Patiala</strong> was the capital of the princely
                    state of Patiala, seat of the Phulkian dynasty, and
                    remains one of Punjab's most architecturally grand
                    heritage cities. Its centrepiece,{" "}
                    <strong>Qila Mubarak</strong>, is a sprawling fort
                    complex that once housed the full machinery of a royal
                    court — and inside it, the mirrored{" "}
                    <strong>Sheesh Mahal</strong> (Palace of Mirrors) remains
                    one of Punjab's most ornate surviving interiors.
                  </p>
                  <p>
                    Patiala's royal hospitality left behind two genuinely
                    famous cultural exports still used across India today:
                    the oversized "Patiala peg" (a whisky measure roughly
                    double the standard pour) and the "Patiala salwar," a
                    distinctively voluminous style of traditional Punjabi
                    trousers. Both trace back to the extravagant, generous
                    entertaining associated with the Patiala court.
                  </p>
                  <p>
                    Today the city also hosts Punjabi University, giving it a
                    notable academic character alongside its royal heritage
                    — a working city as much as a preserved one.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Patiala at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Punjab" },
                        {
                          icon: "🚗",
                          label: "From Chandigarh",
                          value: "~65 km (1.5 hrs)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Qila Mubarak, Sheesh Mahal",
                        },
                        {
                          icon: "🥃",
                          label: "Cultural Legacy",
                          value: "Patiala Peg, Patiala Salwar",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹5,000",
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
                  <h2>Best Time to Visit Patiala</h2>
                  <p>
                    Patiala sits on the plains of Punjab, with hot summers
                    and short, mild winters shaping the best visiting window.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather makes exploring Qila Mubarak and the gardens on foot genuinely pleasant.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — plan indoor time",
                        text: "Temperatures climb steeply; keep outdoor sightseeing to early morning and spend afternoons indoors.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid",
                        text: "Punjab's monsoon brings periodic heavy rain and high humidity; manageable but less comfortable for walking tours.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🌫️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Coolest, occasional fog",
                        text: "The most comfortable temperatures of the year, though early-morning fog can occasionally affect visibility and travel.",
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
                    <strong>Our pick:</strong> October to March — the fort's
                    open courtyards and the Baradari Gardens are far more
                    enjoyable to explore in cool weather.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Patiala</h2>
                  <ul>
                    <li>
                      <strong>By Road:</strong> Roughly 65 km from
                      Chandigarh (about 1.5 hours) and well connected by road
                      to Delhi (~250 km) and other major Punjab cities.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Patiala railway station has
                      regular connections to Chandigarh, Delhi, and other
                      Punjab towns.
                    </li>
                    <li>
                      <strong>By Air:</strong> Chandigarh Airport is the
                      nearest major airport, with onward road transfer to
                      Patiala.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Patiala's short distance from
                    Chandigarh makes it an easy add-on rather than a
                    standalone trip — plan it as a day visit or a relaxed
                    overnight from there.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Qila Mubarak & Royal Heritage</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/fort.jpg"
                      alt="Fort ramparts and courtyards, evoking Patiala's Qila Mubarak complex"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Qila Mubarak & Sheesh Mahal</h3>
                  <p>
                    The fort complex was the seat of the Phulkian dynasty,
                    and its scale reflects the full breadth of a functioning
                    royal court. Inside, the Sheesh Mahal's mirrored,
                    intricately decorated interiors are the standout —
                    among the most ornate surviving royal interiors in
                    Punjab.
                  </p>
                  <h3>Moti Bagh Palace</h3>
                  <p>
                    A further royal residence, today partly repurposed for
                    institutional use, with grounds that still hint at its
                    former grandeur.
                  </p>
                  <h3>Baradari Gardens</h3>
                  <p>
                    Landscaped royal gardens offering a relaxed, green
                    counterpoint to the fort's dense architecture — a
                    pleasant spot for an evening walk.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Patiala</h2>
                  <p>
                    Patiala has a reasonable spread of hotels for a heritage
                    city of its size, from budget stays near the old city to
                    mid-range business hotels.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses near the old city",
                          "Budget hotels close to the railway station",
                          "Simple stays near Punjabi University",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Business hotels in central Patiala",
                          "Chain hotels near main roads",
                          "Boutique heritage-style stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹4,500–₹9,000+/night",
                        picks: [
                          "Premium hotels in central Patiala",
                          "Heritage-inspired properties",
                          "Business-district luxury stays",
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
                  <h2>Suggested Visit Plan (1–2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Qila Mubarak & Old City",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: Qila Mubarak and the Sheesh Mahal",
                          "Explore the old city market",
                          "Evening walk at Baradari Gardens",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Moti Bagh & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Moti Bagh Palace grounds",
                          "Local Patiala-style breakfast",
                          "Onward to Chandigarh or Anandpur Sahib",
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
                    * With more time, extend into a wider Punjab heritage
                    loop via{" "}
                    <Link href="/blog/anandpur-sahib-travel-guide">
                      Anandpur Sahib
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Patiala</h2>
                  <ul>
                    <li>
                      <strong>Royal-influenced Punjabi cuisine:</strong>{" "}
                      Rich, hearty dishes reflecting the city's court
                      traditions — expect generous portions and ghee-heavy
                      classics.
                    </li>
                    <li>
                      <strong>Old-city dhabas:</strong> Simple, authentic
                      roadside eateries serving classic Punjabi staples.
                    </li>
                    <li>
                      <strong>Sweets and lassi:</strong> Patiala's markets
                      have a strong tradition of milk-based sweets and thick
                      lassi, worth seeking out.
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
                            "₹2,800",
                            "₹6,500",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹700",
                            "₹1,500",
                          ],
                          ["Entry fees", "₹100", "₹100", "₹100"],
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
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Patiala</h2>
                  <ul>
                    <li>
                      <strong>Allocate real time for Qila Mubarak:</strong>{" "}
                      The complex is large — rushing through misses much of
                      its scale and detail.
                    </li>
                    <li>
                      <strong>Ask about guided tours:</strong> The Sheesh
                      Mahal's decor rewards context that's easy to miss
                      without a guide.
                    </li>
                    <li>
                      <strong>Combine with Chandigarh and Anandpur
                      Sahib:</strong> Patiala fits naturally into a wider
                      Punjab heritage loop.
                    </li>
                    <li>
                      <strong>Avoid peak summer:</strong> April-June heat
                      makes outdoor sightseeing far less enjoyable.
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
                          "Visit Qila Mubarak with time to spare",
                          "Take a guided tour of the Sheesh Mahal",
                          "Walk the old city market",
                          "Combine with Chandigarh in one trip",
                          "Try Patiala's royal-style Punjabi food",
                          "Visit Baradari Gardens in the evening",
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
                          "Rush through Qila Mubarak in under an hour",
                          "Visit during peak summer heat",
                          "Skip Baradari Gardens if you have the time",
                          "Expect every section of Moti Bagh to be open",
                          "Overlook the old-city market for local food",
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
                    <strong>🗺️ Extend the trip:</strong> Patiala pairs
                    naturally with{" "}
                    <Link href="/blog/anandpur-sahib-travel-guide">
                      Anandpur Sahib
                    </Link>{" "}
                    for a fuller Punjab heritage loop. See our full{" "}
                    <Link href="/blog/punjab-travel-guide">
                      Punjab travel guide
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
                  "Patiala",
                  "Qila Mubarak",
                  "Punjab",
                  "Royal Heritage",
                  "Sheesh Mahal",
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

              <RelatedPostsGrid currentSlug="patiala-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="patiala-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
