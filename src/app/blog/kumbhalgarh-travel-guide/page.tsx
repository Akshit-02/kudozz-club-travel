// src/app/blog/kumbhalgarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kumbhalgarh Fort Guide: The Great Wall of India",
  description:
    "Complete Kumbhalgarh Fort guide — the 36 km fortified wall, Maharana Pratap's birthplace, the evening light and sound show, Kumbhalgarh Wildlife Sanctuary, how to reach from Udaipur, and a full visit plan.",
  keywords:
    "Kumbhalgarh Fort travel guide, Great Wall of India, Kumbhalgarh wall length, Maharana Pratap birthplace, Kumbhalgarh light and sound show, Kumbhalgarh Wildlife Sanctuary, how to reach Kumbhalgarh, Kumbhalgarh from Udaipur, UNESCO hill forts Rajasthan",
  openGraph: {
    title: "Kumbhalgarh Fort Guide: The Great Wall of India",
    description:
      "A 36 km fortified wall, the birthplace of Maharana Pratap, and a wildlife sanctuary at its feet — the complete Kumbhalgarh guide.",
    url: "https://club.kudozz.in/blog/kumbhalgarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sweeping mountain and fortified-wall landscape, evoking Kumbhalgarh Fort's 36 km wall across the Aravalli hills",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumbhalgarh Fort Guide: The Great Wall of India",
    description:
      "A 36 km fortified wall, Maharana Pratap's birthplace, and a wildlife sanctuary at its feet — the complete Kumbhalgarh guide.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kumbhalgarh-travel-guide",
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
          headline: "Kumbhalgarh Fort Guide: The Great Wall of India",
          description:
            "Complete Kumbhalgarh Fort guide — the 36 km fortified wall, Maharana Pratap's birthplace, the evening light and sound show, Kumbhalgarh Wildlife Sanctuary, how to reach from Udaipur, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/kumbhalgarh-travel-guide",
          },
          keywords:
            "Kumbhalgarh Fort, Rajasthan, Great Wall of India, Maharana Pratap, UNESCO hill forts",
          about: {
            "@type": "Place",
            name: "Kumbhalgarh Fort",
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
                name: "Kumbhalgarh Fort",
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
    q: "How long is the Kumbhalgarh wall and how does it compare to the Great Wall of China?",
    a: "The fortified wall runs roughly 36 km, making it the second-longest continuous wall in the world after the Great Wall of China — a genuinely remarkable feat of 15th-century military engineering, which is how Kumbhalgarh earned its popular nickname, the 'Great Wall of India.'",
  },
  {
    q: "How far is Kumbhalgarh from Udaipur?",
    a: "Roughly 85 km, about a 2-2.5 hour drive — a manageable day trip, though many visitors also stay overnight nearby to combine the fort with the wildlife sanctuary.",
  },
  {
    q: "Is Kumbhalgarh a day trip from Udaipur?",
    a: "Yes, most visitors do it as a day trip. If you want to add a wildlife-sanctuary safari or catch the evening light and sound show without rushing, an overnight stay near the fort is worth considering.",
  },
  {
    q: "Is the light and sound show worth attending?",
    a: "Yes — it narrates the fort's history against the dramatic backdrop of its walls in the evening, and is a genuinely atmospheric way to close out a day at Kumbhalgarh.",
  },
  {
    q: "What wildlife might I see at Kumbhalgarh Wildlife Sanctuary?",
    a: "The sanctuary surrounding the fort is home to wolves, leopards, and other Aravalli-range species, though sightings — as with most Indian wildlife sanctuaries — aren't guaranteed and depend on timing and luck.",
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
  { id: "introduction", title: "The Great Wall of India", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kumbhalgarh", level: 2 },
  { id: "things-to-do", title: "The Wall, Light Show & Wildlife Sanctuary", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KumbhalgarhGuidePage() {
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
              src="/images/destinations/jammu-kashmir/hero.jpg"
              alt="Sweeping mountain and fortified-wall landscape, evoking Kumbhalgarh Fort's 36 km wall across the Aravalli hills"
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
                { label: "Kumbhalgarh Fort", href: null },
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
                "Kumbhalgarh Fort",
                "Rajasthan",
                "Great Wall of India",
                "UNESCO",
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
              Kumbhalgarh Fort: The Great Wall of India
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A 36-kilometre fortified wall snaking across the Aravalli
              hills, the birthplace of Maharana Pratap, and a wildlife
              sanctuary at its feet — Kumbhalgarh is Rajasthan's most
              underrated fort.
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
                  text: "Kumbhalgarh, Rajasthan",
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
                  <h2>The Great Wall of India</h2>
                  <p>
                    Built in the 15th century by Rana Kumbha,{" "}
                    <strong>Kumbhalgarh Fort</strong> is famous above all
                    for its wall — a continuous fortified rampart running
                    roughly 36 km across the Aravalli hills, making it the
                    second-longest continuous wall in the world after the
                    Great Wall of China. That single fact earned it the
                    popular nickname "Great Wall of India," and it's the
                    reason most visitors come.
                  </p>
                  <p>
                    A UNESCO World Heritage Site as part of the "Hill Forts
                    of Rajasthan" listing, Kumbhalgarh is also notably the
                    birthplace of Maharana Pratap, one of the most
                    celebrated figures in Rajput history for his resistance
                    against Mughal expansion — giving the fort a
                    significance well beyond its impressive engineering.
                  </p>
                  <p>
                    Roughly 85 km from{" "}
                    <Link href="/blog/udaipur-city-of-lakes-travel-guide">
                      Udaipur
                    </Link>
                    , Kumbhalgarh Wildlife Sanctuary surrounds the fort,
                    adding a genuine nature dimension to what is otherwise a
                    heritage-focused visit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Kumbhalgarh at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Rajsamand district, Rajasthan",
                        },
                        {
                          icon: "🚗",
                          label: "From Udaipur",
                          value: "~85 km (2-2.5 hrs)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🧱",
                          label: "Known For",
                          value: "36 km Wall, Maharana Pratap",
                        },
                        {
                          icon: "🐺",
                          label: "Nearby",
                          value: "Kumbhalgarh Wildlife Sanctuary",
                        },
                        {
                          icon: "🌍",
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
                  <h2>Best Time to Visit Kumbhalgarh</h2>
                  <p>
                    Between the extensive walking along the walls and the
                    outdoor wildlife-sanctuary safaris, timing your visit
                    around the weather matters here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather makes both fort exploration and wildlife-sanctuary safaris genuinely comfortable.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Daytime heat makes walking the exposed wall sections and safari drives considerably less pleasant.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — green hills",
                        text: "The Aravalli hills turn green and the fort's setting looks striking, though some roads and trails can be slippery.",
                      },
                      {
                        season: "Evening",
                        emoji: "🎇",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Light & sound show",
                        text: "Time your day to end with the evening light and sound show, when the fort's walls are lit up against the night sky.",
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
                    <strong>Our pick:</strong> October to March — cool,
                    clear conditions for both the fort walk and a wildlife
                    safari, capped off with the evening light and sound
                    show.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kumbhalgarh</h2>
                  <ul>
                    <li>
                      <strong>By road from Udaipur:</strong> Roughly 85 km,
                      about 2-2.5 hours by car — the most common way
                      visitors reach Kumbhalgarh, either as a day trip or
                      the start of an overnight stay.
                    </li>
                    <li>
                      <strong>By road from Jodhpur:</strong> Roughly 240 km,
                      a longer drive better suited to travelers combining
                      Kumbhalgarh into a wider western Rajasthan circuit.
                    </li>
                    <li>
                      <strong>Nearest railway station:</strong> Falna,
                      roughly 50 km away, with onward road transport to the
                      fort.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you want both the fort
                    and a wildlife-sanctuary safari without rushing, an
                    overnight stay near Kumbhalgarh is worth it rather than
                    squeezing everything into a single day trip from
                    Udaipur.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Wall, Light Show & Wildlife Sanctuary</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Fortified wall and hills at Kumbhalgarh, Rajasthan"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The 36 km Fortified Wall</h3>
                  <p>
                    The wall itself is the headline attraction — a
                    continuous fortification snaking across ridgelines and
                    valleys, wide enough in places for several horses to
                    ride abreast, according to local accounts. Walking
                    sections of it offers sweeping views over the
                    surrounding Aravalli landscape.
                  </p>
                  <h3>Maharana Pratap's Birthplace</h3>
                  <p>
                    Kumbhalgarh holds particular significance as the
                    birthplace of Maharana Pratap, celebrated across
                    Rajasthan for his resistance against Mughal expansion —
                    a fact that adds real historical weight to a visit here.
                  </p>
                  <h3>Evening Light & Sound Show</h3>
                  <p>
                    Held most evenings, the light and sound show narrates
                    the fort's history against the dramatic backdrop of its
                    illuminated walls — a genuinely atmospheric way to close
                    out a day here.
                  </p>
                  <h3>Kumbhalgarh Wildlife Sanctuary</h3>
                  <p>
                    Surrounding the fort, the sanctuary is home to wolves,
                    leopards, and other Aravalli-range wildlife, offering
                    jeep safaris for visitors wanting to extend their trip
                    beyond the fort itself.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    A handful of dedicated resorts sit near the fort itself,
                    alongside the option of day-tripping from Udaipur.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,200/night",
                        picks: [
                          "Basic guesthouses near the fort",
                          "Simple lodges in Kelwara town",
                          "Udaipur hotels (day-trip base)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,500/night",
                        picks: [
                          "Resorts near Kumbhalgarh Fort",
                          "Wildlife-sanctuary-adjacent stays",
                          "Business hotels, Udaipur",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹8,000–₹20,000+/night",
                        picks: [
                          "Premium heritage resorts near the fort",
                          "Luxury wildlife-view properties",
                          "5-star hotels, Udaipur",
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
                    Staying overnight near Kumbhalgarh, rather than
                    day-tripping from Udaipur, gives you time for both the
                    fort and a proper wildlife-sanctuary safari without
                    rushing either.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "The Fort & Light Show",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Udaipur, check in",
                          "Explore the fort walls and main structures",
                          "Evening light and sound show",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Wildlife Sanctuary & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Morning safari in Kumbhalgarh Wildlife Sanctuary",
                          "Final fort viewpoints if time allows",
                          "Drive back to Udaipur",
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
                    * A single day trip from Udaipur is possible if
                    skipping the wildlife sanctuary — allocate the full day
                    to the fort and light show in that case.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat at Kumbhalgarh</h2>
                  <ul>
                    <li>
                      <strong>Resort dining:</strong> Most resorts near the
                      fort serve Rajasthani and multi-cuisine meals to
                      guests, the most convenient option given limited
                      standalone restaurants.
                    </li>
                    <li>
                      <strong>Kelwara town:</strong> The nearest town has a
                      handful of simple local eateries.
                    </li>
                    <li>
                      <strong>Udaipur restaurants:</strong> If
                      day-tripping, Udaipur offers a wider dining scene for
                      dinner after returning.
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
                            "₹3,500",
                            "₹10,000",
                          ],
                          [
                            "Car hire from Udaipur (round trip)",
                            "₹3,500",
                            "₹5,000",
                            "₹7,500",
                          ],
                          ["Entry fee", "₹40", "₹40", "₹40"],
                          [
                            "Light & sound show ticket",
                            "₹100",
                            "₹100",
                            "₹100",
                          ],
                          ["Safari (wildlife sanctuary)", "₹1,000", "₹1,800", "₹3,000"],
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
                    * Safari cost is per jeep, best split across a group.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kumbhalgarh</h2>
                  <ul>
                    <li>
                      <strong>Catch the light and sound show:</strong> It's
                      genuinely worth staying until evening for the full
                      experience.
                    </li>
                    <li>
                      <strong>Wear good walking shoes:</strong> The extensive
                      wall sections involve considerable uneven walking.
                    </li>
                    <li>
                      <strong>Book a safari in advance if possible:</strong>{" "}
                      Kumbhalgarh Wildlife Sanctuary safaris can fill up,
                      especially on weekends.
                    </li>
                    <li>
                      <strong>Consider an overnight stay:</strong> Combining
                      the fort and a wildlife safari comfortably usually
                      needs more than a single rushed day trip.
                    </li>
                    <li>
                      <strong>Carry water and snacks:</strong> Options
                      thin out once away from the main resort areas.
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
                          "Stay for the evening light and sound show",
                          "Book a wildlife safari in advance",
                          "Wear proper walking shoes for the wall",
                          "Consider an overnight stay near the fort",
                          "Combine with Chittorgarh for a heritage circuit",
                          "Carry water for the extensive walking",
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
                          "Rush the fort in an hour or two",
                          "Skip the light and sound show",
                          "Expect guaranteed wildlife sightings on safari",
                          "Visit during peak summer heat (Apr-Jun)",
                          "Forget to book accommodation ahead in peak season",
                          "Wear open sandals on the uneven wall paths",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Kumbhalgarh
                    with{" "}
                    <Link href="/blog/chittorgarh-travel-guide">
                      Chittorgarh Fort
                    </Link>{" "}
                    for a fuller Rajput-heritage circuit, or base yourself
                    in{" "}
                    <Link href="/blog/udaipur-city-of-lakes-travel-guide">
                      Udaipur
                    </Link>{" "}
                    for the wider region. See our full{" "}
                    <Link href="/blog/rajasthan-travel-guide">
                      Rajasthan travel guide
                    </Link>{" "}
                    for more.
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
                  "Kumbhalgarh Fort",
                  "Rajasthan",
                  "Great Wall of India",
                  "UNESCO",
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

              <RelatedPostsGrid currentSlug="kumbhalgarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kumbhalgarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
