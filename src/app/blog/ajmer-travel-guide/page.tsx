// src/app/blog/ajmer-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ajmer Travel Guide: Dargah Sharif & Ana Sagar",
  description:
    "Complete Ajmer guide — the Ajmer Sharif Dargah, Ana Sagar Lake, Adhai Din Ka Jhonpra, the Urs festival, how to reach, and a full visit plan combined with Pushkar.",
  keywords:
    "Ajmer travel guide, Ajmer Sharif Dargah, Khwaja Moinuddin Chishti, Ana Sagar Lake, Adhai Din Ka Jhonpra, Urs festival, how to reach Ajmer, Ajmer to Pushkar",
  openGraph: {
    title: "Ajmer Travel Guide: Dargah Sharif & Ana Sagar",
    description:
      "One of India's most important Sufi shrines, a 12th-century lake, and a mosque built from a repurposed Sanskrit college — the complete Ajmer guide.",
    url: "https://club.kudozz.in/blog/ajmer-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/rishikesh/rishikesh.jpg",
        width: 1200,
        height: 630,
        alt: "Riverside ghats and pilgrimage-town atmosphere, evoking Ajmer's Dargah Sharif and Ana Sagar Lake",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajmer Travel Guide: Dargah Sharif & Ana Sagar",
    description:
      "One of India's most important Sufi shrines and a 12th-century lake ringed by Mughal gardens — the complete Ajmer guide.",
    images: ["/images/destinations/rishikesh/rishikesh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ajmer-travel-guide",
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
          headline: "Ajmer Travel Guide: Dargah Sharif & Ana Sagar",
          description:
            "Complete Ajmer guide — the Ajmer Sharif Dargah, Ana Sagar Lake, Adhai Din Ka Jhonpra, the Urs festival, how to reach, and a full visit plan combined with Pushkar.",
          image: "https://club.kudozz.in/images/destinations/rishikesh/rishikesh.jpg",
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
            "@id": "https://club.kudozz.in/blog/ajmer-travel-guide",
          },
          keywords:
            "Ajmer, Rajasthan, Dargah Sharif, Ana Sagar, Sufi shrine, pilgrimage",
          about: {
            "@type": "Place",
            name: "Ajmer",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Rajasthan",
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
                name: "Rajasthan",
                item: "https://club.kudozz.in/blog/rajasthan-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Ajmer",
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
    q: "What is the significance of Ajmer Sharif Dargah?",
    a: "It's the shrine of the revered Sufi saint Khwaja Moinuddin Chishti and one of the most important Islamic pilgrimage sites in India, drawing devotees of all faiths, not just Muslims, throughout the year.",
  },
  {
    q: "When is the Urs festival?",
    a: "The Urs commemorates the saint's death anniversary and is held annually according to the Islamic lunar calendar, drawing massive crowds of pilgrims from across India and abroad for several days of ceremony.",
  },
  {
    q: "How far is Pushkar from Ajmer?",
    a: "Only about 15 km, a short and easy drive over the Aravalli hills, making Ajmer and Pushkar a very natural pairing for a single trip.",
  },
  {
    q: "Is Ajmer worth a standalone visit or best combined with Pushkar?",
    a: "Most travelers combine the two — Ajmer's Dargah, Ana Sagar Lake, and Adhai Din Ka Jhonpra make for a full day, and Pushkar's lake and temple town are an easy, worthwhile add-on right next door.",
  },
  {
    q: "What is the dress code at the Dargah?",
    a: "Modest dress is expected for all visitors — covered shoulders and legs — and footwear must be removed before entering the shrine complex, with security checks common at the entrance.",
  },
  {
    q: "What makes Adhai Din Ka Jhonpra unusual?",
    a: "This early Indo-Islamic mosque was built using pillars and material repurposed from an earlier Sanskrit college and temple complex, creating a striking architectural fusion that's rare even among India's historic mosques.",
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
  { id: "introduction", title: "A Major Sufi Pilgrimage City", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ajmer", level: 2 },
  { id: "things-to-do", title: "Dargah, Lake & Mosque", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AjmerGuidePage() {
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
              src="/images/destinations/rishikesh/rishikesh.jpg"
              alt="Riverside ghats and pilgrimage-town atmosphere, evoking Ajmer's Dargah Sharif and Ana Sagar Lake"
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
                { label: "Rajasthan", href: "/blog/rajasthan-travel-guide" },
                { label: "Ajmer", href: null },
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
              {["Ajmer", "Dargah Sharif", "Rajasthan", "Ana Sagar Lake"].map(
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
              Ajmer Travel Guide: Dargah Sharif & Ana Sagar
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of India's most important Sufi shrines, a 12th-century
              lake framed by Mughal gardens, and a mosque built from the
              pillars of a repurposed Sanskrit college.
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
                  text: "Ajmer, Rajasthan",
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
                  <h2>A Major Sufi Pilgrimage City</h2>
                  <p>
                    <strong>Ajmer</strong>, in{" "}
                    <Link href="/blog/rajasthan-travel-guide">Rajasthan</Link>
                    , is home to the Ajmer Sharif Dargah, the shrine of the
                    revered Sufi saint Khwaja Moinuddin Chishti — one of the
                    most important Islamic pilgrimage sites in India,
                    visited by people of all faiths, not just Muslims. The
                    annual Urs festival, commemorating the saint's death
                    anniversary, draws massive crowds from across the
                    country and beyond.
                  </p>
                  <p>
                    Beyond the Dargah, Ajmer has a genuinely rich layered
                    history: Ana Sagar Lake, built in the 12th century, sits
                    beside the Mughal-era Daulat Bagh gardens, and Adhai Din
                    Ka Jhonpra is a striking early Indo-Islamic mosque built
                    using pillars and material repurposed from an earlier
                    Sanskrit college — a distinctive architectural fusion.
                  </p>
                  <p>
                    Ajmer is also the practical gateway town for Pushkar,
                    just around 15 km away, and the two are almost always
                    visited together.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕌</span> Ajmer at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Rajasthan" },
                        {
                          icon: "🚗",
                          label: "Nearby",
                          value: "Pushkar (~15 km)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🕌",
                          label: "Known For",
                          value: "Dargah Sharif, Ana Sagar",
                        },
                        {
                          icon: "🎉",
                          label: "Major Event",
                          value: "Urs Festival",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,000 – ₹5,500",
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
                  <h2>Best Time to Visit Ajmer</h2>
                  <p>
                    Comfortable sightseeing weather and the Urs festival
                    calendar are the two main things to plan around.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable days for exploring the Dargah, Ana Sagar Lake, and the old city on foot.",
                      },
                      {
                        season: "Urs Festival",
                        emoji: "🕌",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Major religious event",
                        text: "Held per the Islamic lunar calendar, so dates shift year to year — a powerful cultural experience, but with very large crowds.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Extreme heat — avoid",
                        text: "Very hot daytime temperatures make sightseeing between the Dargah and lake genuinely tiring.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — quieter",
                        text: "Occasional rain and greener surroundings around Ana Sagar, with fewer crowds at the Dargah outside festival dates.",
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
                    comfortable sightseeing, or time a visit to the Urs
                    festival dates for a genuinely powerful, if crowded,
                    cultural experience.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ajmer</h2>
                  <ul>
                    <li>
                      <strong>By Rail:</strong> Well connected by frequent
                      trains from Jaipur, Delhi, and other major Rajasthan
                      cities — a common Golden Triangle/Rajasthan-circuit
                      stop.
                    </li>
                    <li>
                      <strong>By Road:</strong> Roughly 135 km from Jaipur
                      (about 2.5-3 hours) and easily combined with Pushkar,
                      just 15 km further.
                    </li>
                    <li>
                      <strong>By Air:</strong> Kishangarh Airport, close to
                      Ajmer, has limited flights; Jaipur International
                      Airport offers wider connections.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Combine Ajmer with{" "}
                    <Link href="/blog/pushkar-travel-guide">Pushkar</Link> for
                    a natural 2-day trip — the short drive between the two
                    makes it easy to base yourself in either town.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Dargah, Lake & Mosque</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/rishikesh/rishikesh.jpg"
                      alt="Riverside ghats, evoking Ajmer's pilgrimage-town character"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Ajmer Sharif Dargah</h3>
                  <p>
                    The shrine of Khwaja Moinuddin Chishti, one of the most
                    significant Sufi pilgrimage sites in the world, drawing
                    devotees of every faith. Expect security checks, modest
                    dress requirements, and a genuinely moving atmosphere of
                    devotion.
                  </p>
                  <h3>Ana Sagar Lake & Daulat Bagh</h3>
                  <p>
                    An artificial lake built in the 12th century by Anaji
                    Chauhan, flanked by the Mughal-era Daulat Bagh gardens —
                    a pleasant, relaxed spot for an evening walk away from
                    the Dargah's crowds.
                  </p>
                  <h3>Adhai Din Ka Jhonpra</h3>
                  <p>
                    A striking and historically significant early
                    Indo-Islamic mosque, notable for having been built using
                    pillars and material repurposed from an earlier Sanskrit
                    college and temple complex — a genuinely distinctive
                    architectural fusion.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Ajmer</h2>
                  <p>
                    Many travelers base themselves in nearby Pushkar instead,
                    but Ajmer itself has a reasonable range of options close
                    to the Dargah and lake.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,800/night",
                        picks: [
                          "Guesthouses near the Dargah",
                          "Budget hotels near the railway station",
                          "Simple lodges in the old city",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Business hotels near Ana Sagar",
                          "Comfortable hotels close to the Dargah",
                          "Lakeside guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,000–₹10,000+/night",
                        picks: [
                          "Premium hotels overlooking Ana Sagar",
                          "Heritage-style properties",
                          "Upscale business hotels",
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
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Dargah Sharif",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive early to avoid the busiest hours",
                          "Dargah Sharif darshan and surrounding bazaar",
                          "Adhai Din Ka Jhonpra nearby",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Ana Sagar & Onward",
                        color: "bg-sky-600",
                        activities: [
                          "Ana Sagar Lake and Daulat Bagh gardens",
                          "Lunch in Ajmer's old city",
                          "Drive on to Pushkar for the evening",
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
                    * Combine with our{" "}
                    <Link href="/blog/pushkar-travel-guide">
                      Pushkar travel guide
                    </Link>{" "}
                    for a fuller 2-day plan.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Ajmer</h2>
                  <ul>
                    <li>
                      <strong>Stalls around the Dargah:</strong> Simple,
                      affordable food clusters around the shrine's main
                      approach, popular with pilgrims.
                    </li>
                    <li>
                      <strong>Sohan halwa:</strong> A rich, ghee-based sweet
                      closely associated with Ajmer, sold widely across the
                      old city.
                    </li>
                    <li>
                      <strong>Standard Rajasthani thali:</strong> Available
                      at restaurants throughout the city for a fuller meal.
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
                            "₹2,800",
                            "₹7,000",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          [
                            "Local transport/day",
                            "₹250",
                            "₹600",
                            "₹1,500",
                          ],
                          ["Entry/donations", "₹100", "₹200", "₹500"],
                          ["Daily total", "₹1,650", "₹4,500", "₹11,000"],
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
                    * Figures are per person, per day.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Ajmer</h2>
                  <ul>
                    <li>
                      <strong>Dress modestly and expect security checks:</strong>{" "}
                      Standard practice at the Dargah given its significance
                      and the crowds it draws.
                    </li>
                    <li>
                      <strong>Remove footwear before entering:</strong>{" "}
                      Required at the Dargah and other religious sites in
                      the city.
                    </li>
                    <li>
                      <strong>Combine with Pushkar:</strong> The short drive
                      between the two makes a single 2-day trip easy to plan.
                    </li>
                    <li>
                      <strong>Plan around Urs festival dates carefully:</strong>{" "}
                      Extremely large crowds during this period — book
                      accommodation well ahead if visiting then.
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
                          "Dress modestly for the Dargah visit",
                          "Remove footwear at all religious sites",
                          "Combine your trip with Pushkar",
                          "Try sohan halwa before leaving",
                          "Visit Ana Sagar Lake in the evening",
                          "Book ahead if visiting during Urs",
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
                          "Wear revealing clothing at the Dargah",
                          "Arrive without ID during heightened security periods",
                          "Skip Ana Sagar Lake assuming it's minor",
                          "Rush the Dargah visit — allow time to absorb it",
                          "Travel during Urs without pre-booked accommodation",
                          "Forget to bargain respectfully at old-city stalls",
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
                    <strong>🗺️ Extend the trip:</strong> Ajmer pairs
                    perfectly with{" "}
                    <Link href="/blog/pushkar-travel-guide">Pushkar</Link>,
                    just 15 km away, or continue on to{" "}
                    <Link href="/blog/jaipur-travel-guide">Jaipur</Link>. See
                    the full{" "}
                    <Link href="/blog/rajasthan-travel-guide">
                      Rajasthan travel guide
                    </Link>{" "}
                    for the wider circuit.
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
                {["Ajmer", "Dargah Sharif", "Rajasthan", "Ana Sagar Lake"].map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                      className="tag-pill"
                    >
                      #{tag}
                    </Link>
                  ),
                )}
              </div>

              <RelatedPostsGrid currentSlug="ajmer-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ajmer-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
