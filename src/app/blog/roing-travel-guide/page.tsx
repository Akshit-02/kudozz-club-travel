// src/app/blog/roing-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  GearSection,
} from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Roing Travel Guide: Mehao Lake & Bhismaknagar Ruins",
  description:
    "The complete Roing travel guide. Mehao Lake, the Bhismaknagar fort ruins, Mayudia Pass, the gateway to Anini and Dibang Valley, where to stay, what to eat, and a full itinerary.",
  keywords:
    "Roing travel guide, Mehao Lake, Bhismaknagar ruins, Mayudia Pass, Lower Dibang Valley, how to reach Roing, best time to visit Roing, Roing to Anini, Idu Mishmi Roing",
  openGraph: {
    title: "Roing Travel Guide: Mehao Lake & Bhismaknagar Ruins",
    description:
      "A quiet valley town beside a forested lake, with brick fort ruins linked to Mahabharata legend hidden in the jungle nearby — the complete guide to Roing.",
    url: "https://club.kudozz.in/blog/roing-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Forested lake and hills representative of Roing, Arunachal Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roing Travel Guide: Mehao Lake & Bhismaknagar Ruins",
    description:
      "A forested lake, ancient fort ruins, and the gateway to Dibang Valley — the complete guide to Roing.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/roing-travel-guide",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Roing Travel Guide: Mehao Lake & Bhismaknagar Ruins",
          description: "The complete Roing travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/roing-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Roing",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Arunachal Pradesh",
              addressCountry: "IN",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Roing Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How many days do I need in Roing?",
    a: "One to two days covers Mehao Lake and the Bhismaknagar ruins comfortably. Many travellers use Roing as an overnight stop before or after the longer journey to Anini.",
  },
  {
    q: "What is the best time to visit Roing?",
    a: "October to April for comfortable weather and reliable road conditions, avoiding peak monsoon (June to September) when landslide risk increases on regional roads.",
  },
  {
    q: "How do I reach Roing?",
    a: "The nearest airport is Dibrugarh in Assam, with road access being the standard onward route. Roing is more accessible than the further journey to Anini, though it still requires a proper road trip from Assam.",
  },
  {
    q: "Do I need a permit to visit Roing?",
    a: "Yes — an Inner Line Permit is required for all Indian citizens entering Arunachal Pradesh, applied for online in advance.",
  },
  {
    q: "Is Bhismaknagar's Mahabharata connection historically verified?",
    a: "The site's association with the Mahabharata-era kingdom of Bhishmaka is a local tradition, not a settled historical fact — but the fort ruins themselves are genuine and archaeologically significant regardless of the legend's veracity.",
  },
  {
    q: "Can I use Roing as a base for visiting Anini?",
    a: "Yes — Roing is the practical staging point before the longer, more demanding drive to Anini (cross-reference that guide), and a good place to check current road conditions before continuing.",
  },
  {
    q: "What is the budget for a trip to Roing?",
    a: "A budget traveller can manage on roughly ₹1,500 a day, with vehicle hire for local sightseeing and the road to Mayudia Pass as an additional cost if included.",
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
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Roing?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Roing", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Gear ────────────────────────────────────────────────────────────────────
const ROING_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for lake walks, forest ruins, and mountain-pass side trips",
    emoji: "🏞️",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "Both Mehao Lake's shoreline paths and the Bhismaknagar ruins involve walking on uneven forest ground.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.6k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Trip essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The lake and ruins are both best explored on foot at an unhurried pace.",
      },
      {
        name: "Insect Repellent",
        description:
          "Mehao Lake's forested surroundings and the Bhismaknagar jungle site both carry a real mosquito presence.",
        price: "₹199",
        rating: 4.3,
        reviews: "6.8k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"),
        tag: "Forest essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Both key attractions sit within dense forest cover." ,
      },
      {
        name: "Warm Layer",
        description:
          "Useful if continuing on to Mayudia Pass, which can be genuinely cold even when Roing town feels mild.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "4.7k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("warm+jacket+travel"),
        tag: "Pass-trip essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "The elevation gain to Mayudia Pass brings a real temperature drop.",
      },
      {
        name: "Camera",
        description:
          "For the lake, the ruins, and the scenic drive toward Mayudia Pass.",
        price: "₹—",
        rating: 4.5,
        reviews: "—",
        image: "📷",
        affiliateUrl: amazonSearchUrl("compact+camera+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Roing's lake-and-forest scenery is genuinely photogenic.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RoingGuidePage() {
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
              alt="Forested lake and hills representative of Roing, Arunachal Pradesh"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Roing", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/35">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Roing", "Arunachal Pradesh", "Off-beat", "Mehao Lake"].map((tag) => (
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
              Roing Travel Guide: Mehao Lake & Bhismaknagar Ruins
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A quiet valley town beside a forested lake, with brick fort
              ruins linked to Mahabharata legend hidden in the jungle nearby.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Roing, Arunachal Pradesh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,500 words",
                },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>Why Roing?</h2>
                  <p>
                    <strong>Roing</strong> is the headquarters of Lower Dibang
                    Valley district — genuinely more accessible and developed
                    than neighbouring Anini (cross-reference that guide),
                    which makes it the practical gateway town for anyone
                    heading deeper into Dibang Valley. But Roing is worth a
                    visit in its own right too, centred on <strong>Mehao
                    Lake</strong>, a scenic forested lake within Mehao Wildlife
                    Sanctuary, and the <strong>Bhismaknagar</strong> ruins — the
                    remains of an ancient brick fort locally associated by
                    tradition with the Mahabharata-era kingdom of Bhishmaka.
                  </p>
                  <p>
                    The town shares the broader Idu Mishmi cultural region with
                    Anini, and the scenic Mayudia Pass en route toward Anini
                    makes for a worthwhile side trip even if you're not
                    continuing the full distance.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🏞️</span> Roing at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Arunachal Pradesh" },
                        { icon: "🏞️", label: "Key Site", value: "Mehao Lake" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        { icon: "📄", label: "Permit", value: "Inner Line Permit (ILP)" },
                        { icon: "🏛️", label: "Ruins", value: "Bhismaknagar" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">{icon} {label}</span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Roing</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Comfortable weather and the most reliable road conditions for both Roing itself and any onward trip toward Anini.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — landslide risk",
                        text: "Heavier rain increases landslide risk on regional roads, including the route toward Mayudia Pass and Anini.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                            {s.season}
                          </span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> October to April for the most
                    dependable combination of weather and road conditions.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Roing</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Dibrugarh (Assam) is the nearest
                      airport, with road access as the standard onward route.
                    </li>
                    <li>
                      <strong>By Road:</strong> Roing is reachable via Assam,
                      more manageable than the further journey to Anini —
                      still requires a proper multi-hour road trip.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If continuing on to Anini,
                    check current road conditions with a local operator in
                    Roing before departing — this is the most reliable source
                    of up-to-date information.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>Things to Do in Roing</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/hero.jpg"
                      alt="Lake and forest scenery around Roing"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Mehao Lake:</strong> A scenic forested lake
                      within Mehao Wildlife Sanctuary, popular for a peaceful
                      boat ride or lakeside walk.
                    </li>
                    <li>
                      <strong>Bhismaknagar ruins:</strong> Remains of an
                      ancient brick fort, locally linked to Mahabharata-era
                      legend — a genuine and significant archaeological site
                      regardless of the legend's veracity.
                    </li>
                    <li>
                      <strong>Mayudia Pass:</strong> A scenic high pass en
                      route toward Anini, sometimes seeing snow in winter —
                      worth a side trip even without continuing the full
                      distance.
                    </li>
                    <li>
                      <strong>Idu Mishmi cultural context:</strong> Roing sits
                      within the same broader Idu Mishmi cultural region as
                      Anini, a useful introduction before venturing further in.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Roing</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: ["Local guesthouses", "Basic hotels in town"],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: ["Better-appointed hotels near town centre"],
                      },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                          {t.tier}
                        </div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {t.range}
                        </div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Roing</h2>
                  <ul>
                    <li>
                      <strong>Simple local eateries:</strong> North Indian and
                      Assamese-influenced dishes are common in town.
                    </li>
                    <li>
                      <strong>Idu Mishmi home-cooked meals:</strong> If staying
                      with a local host, a genuine way to try regional
                      cooking.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Roing Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Mehao Lake",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Afternoon: Mehao Lake boat ride and lakeside walk",
                          "Evening: rest in town",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Bhismaknagar & Mayudia Pass",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Bhismaknagar ruins",
                          "Afternoon: optional drive to Mayudia Pass viewpoint",
                          "Departure or onward journey toward Anini",
                        ],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>
                            {d.day}
                          </div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                            {d.title}
                          </h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹900", "₹2,500"],
                          ["Food/day", "₹350", "₹800"],
                          ["Local transport per day", "₹300", "₹700"],
                          ["Daily total", "₹1,550", "₹4,000"],
                          ["2-Day trip total", "₹3,100", "₹8,000"],
                        ].map(([exp, b, m], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{m}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Excludes transport from Dibrugarh to Roing.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Roing</h2>
                  <ul>
                    <li>
                      <strong>Use Roing as a checkpoint before Anini:</strong> Verify current road conditions here before continuing further.
                    </li>
                    <li>
                      <strong>Book the Mayudia Pass side trip if time allows:</strong> A worthwhile detour even without going all the way to Anini.
                    </li>
                    <li>
                      <strong>Apply for your ILP well ahead:</strong> Standard advice for all of Arunachal Pradesh.
                    </li>
                    <li>
                      <strong>Carry insect repellent:</strong> Both Mehao Lake and Bhismaknagar sit within forest cover.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Visit both Mehao Lake and Bhismaknagar",
                          "Use Roing as a practical checkpoint before Anini",
                          "Check current road conditions before onward travel",
                          "Apply for your ILP well ahead of the trip",
                          "Consider a Mayudia Pass side trip",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>❌</span> Don't
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Skip Roing entirely if heading to Anini — it's a useful stop",
                          "Rush both sights into a few rushed hours",
                          "Continue toward Anini without checking current road status",
                          "Expect Guwahati- or Itanagar-level infrastructure",
                          "Forget insect repellent for the forested sites",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-5 my-6">
                    {faqs.map((f) => (
                      <div key={f.q} className="bg-white border border-stone-200 rounded-xl p-5">
                        <h4 className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                          {f.q}
                        </h4>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Roing", "Arunachal Pradesh", "Off-beat", "Mehao Lake", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={ROING_GEAR} destination="Roing" />

              <RelatedPostsGrid currentSlug="roing-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="roing-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
