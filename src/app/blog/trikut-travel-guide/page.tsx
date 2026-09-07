// src/app/blog/trikut-travel-guide/page.tsx
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

export const metadata: Metadata = {
  title: "Trikut Hills Travel Guide: Ropeway, Trekking & Deoghar Day Trip",
  description:
    "The complete Trikut Hills travel guide. Ropeway rides, forest trekking, viewpoints, how to reach from Deoghar, and a simple half-day plan for one of Jharkhand's easiest scenic escapes.",
  keywords:
    "Trikut Hills travel guide, Trikut ropeway, Trikut Deoghar, Trikut Parbat, Jharkhand hill trek, Deoghar day trip, best time to visit Trikut Hills",
  openGraph: {
    title: "Trikut Hills Travel Guide: Ropeway, Trekking & Deoghar Day Trip",
    description:
      "Three volcanic hill peaks with a cable car climbing above the forest, a short detour from Deoghar's temple crowds — the complete guide to Trikut Hills.",
    url: "https://club.kudozz.in/blog/trikut-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Forested hill peaks representative of Trikut Hills, Jharkhand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trikut Hills Travel Guide: Ropeway, Trekking & Deoghar Day Trip",
    description: "A ropeway and forest trek up three volcanic peaks near Deoghar — the complete guide to Trikut Hills.",
    images: ["/images/destinations/manali/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/trikut-travel-guide",
  },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Trikut Hills Travel Guide: Ropeway, Trekking & Deoghar Day Trip",
          description: "The complete Trikut Hills travel guide.",
          image: "https://club.kudozz.in/images/destinations/manali/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/trikut-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Trikut Hills",
            address: { "@type": "PostalAddress", addressRegion: "Jharkhand", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Trikut Hills Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How far is Trikut Hills from Deoghar?",
    a: "About 25km, roughly a 45-minute drive — close enough that almost every visitor treats it as a half-day add-on to a Deoghar trip rather than a standalone destination.",
  },
  {
    q: "Is the Trikut ropeway always operating?",
    a: "Not necessarily — it can occasionally suspend service during poor weather. Verify current operating hours and status before planning your visit around it specifically.",
  },
  {
    q: "Can I trek up Trikut Hills instead of taking the ropeway?",
    a: "Yes, a forest trekking route is available for travelers who'd rather walk than ride — a reasonable option if you want more activity out of the visit.",
  },
  {
    q: "What is the best time to visit Trikut Hills?",
    a: "October to March offers the clearest views and most comfortable trekking conditions. The monsoon (June–September) brings lush greenery but check ropeway status given possible weather-related suspensions.",
  },
  {
    q: "How do I reach Trikut Hills?",
    a: "Deoghar is the practical base for virtually everyone, given its airport and railway connectivity and the short 25km distance to Trikut — most visitors arrange a taxi or shared transport directly from there.",
  },
  {
    q: "Is Trikut Hills worth a full day?",
    a: "For most travelers, no — it's a scenic half-day stop that pairs naturally with a Deoghar itinerary rather than a full-day destination on its own.",
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

const tableOfContents = [
  { id: "introduction", title: "Why Trikut Hills?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Trikut Hills", level: 2 },
  { id: "top-attractions", title: "What to See & Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const TRIKUT_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a ropeway ride and a short forest trek",
    emoji: "🚡",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description: "Useful for the trekking alternative to the ropeway and for walking around the hilltop viewpoints.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.3k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+trekking+shoes"),
        tag: "Trek essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The trekking route up Trikut is a real forest trail, not a paved path.",
      },
      {
        name: "Sun Hat",
        description: "Hilltop viewpoints offer little shade — useful for the wait at ropeway boarding points and the walk between viewpoints.",
        price: "₹399",
        rating: 4.3,
        reviews: "3.8k",
        image: "🧢",
        affiliateUrl: amazonSearchUrl("sun+hat+travel"),
        tag: "Comfort essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "A half-day out in the open hilltop sun adds up quickly without sun protection.",
      },
      {
        name: "Reusable Water Bottle",
        description: "Facilities thin out once you're away from the ropeway base station.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "All-day essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "This is a smaller, less commercial destination than Deoghar itself — carry your own water.",
      },
      {
        name: "Camera",
        description: "The ropeway ride and hilltop viewpoints offer genuinely good forest and valley photography.",
        price: "₹—",
        rating: 4.5,
        reviews: "—",
        image: "📷",
        affiliateUrl: amazonSearchUrl("compact+camera+travel"),
        tag: "Photography essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "The ropeway climb offers some of the best casual scenery on a Deoghar-area trip.",
      },
    ],
  },
];

export default function TrikutGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/manali/hero.jpg"
              alt="Forested hill peaks representative of Trikut Hills, Jharkhand"
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
                { label: "Trikut Hills", href: null },
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
              {["Trikut Hills", "Ropeway", "Off-beat", "Jharkhand"].map((tag) => (
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
              Trikut Hills Travel Guide: Ropeway, Trekking & Deoghar Day Trip
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Three volcanic hill peaks with a cable car climbing above the forest, a short detour from
              Deoghar's temple crowds.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "7 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Trikut Hills, near Deoghar, Jharkhand" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,400 words" },
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
                  <h2>Why Trikut Hills?</h2>
                  <p>
                    <strong>Trikut Hills</strong> is a set of three connected volcanic-origin peaks a
                    short drive from Deoghar, and one of the simplest scenic add-ons in Jharkhand — a
                    ropeway carries visitors up above the forest canopy, with small shrines and viewpoints
                    waiting at the top, and a forest trekking route for anyone who'd rather climb than ride.
                  </p>
                  <p>
                    It's not a destination that needs a trip of its own — almost everyone visits as a
                    half-day detour from Deoghar, and that's exactly how we'd recommend planning it. See
                    our <Link href="/blog/deoghar-travel-guide">Deoghar guide</Link> for the fuller pilgrimage-town
                    itinerary this pairs with.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🚡</span> Trikut Hills at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Jharkhand, India" },
                        { icon: "🚡", label: "Key Experience", value: "Ropeway to hilltop" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚗", label: "From Deoghar", value: "~25km, 45 min" },
                        { icon: "⛰️", label: "Peaks", value: "Three connected hills" },
                        { icon: "💰", label: "Budget/Visit", value: "₹300 – ₹800" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">
                            {icon} {label}
                          </span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Trikut Hills</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Clear skies and comfortable temperatures for both the ropeway and the trek.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — verify ropeway status",
                        text: "Lush greenery, but the ropeway may occasionally suspend service in poor weather — check current status before you go.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                            {s.season}
                          </span>
                        </div>
                        <span
                          className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> October to March — the most reliable window for clear views
                    and uninterrupted ropeway service.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Trikut Hills</h2>
                  <ul>
                    <li>
                      <strong>From Deoghar:</strong> About 25km, roughly a 45-minute drive — the standard
                      way virtually everyone visits.
                    </li>
                    <li>
                      <strong>By Air/Train:</strong> Deoghar has its own airport and railway station, and
                      is the practical hub for reaching Trikut given the short onward distance.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Check current ropeway operating hours before you head out
                    — service can occasionally be suspended for weather or maintenance.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>What to See & Do at Trikut Hills</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hero.jpg"
                      alt="Hilltop viewpoint scenery at Trikut Hills"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>The ropeway:</strong> A cable car ride climbing above the forest canopy to
                      the hilltop — the fastest, easiest way up.
                    </li>
                    <li>
                      <strong>Forest trekking route:</strong> An alternative for travelers who'd rather
                      walk than ride, offering a slower, more active way to reach the top.
                    </li>
                    <li>
                      <strong>Hilltop shrines and viewpoints:</strong> Small shrines and panoramic
                      viewpoints across the surrounding forest and valley.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Trikut Hills doesn't have its own developed accommodation scene — stay in{" "}
                    <Link href="/blog/deoghar-travel-guide">Deoghar</Link>, a short drive away, and treat
                    Trikut as a half-day excursion from there.
                  </p>
                </section>

                <section id="food-guide">
                  <h2>What to Eat</h2>
                  <ul>
                    <li>
                      <strong>Small stalls near the ropeway base:</strong> Basic snacks and refreshments
                      are available at the boarding point.
                    </li>
                    <li>
                      <strong>Deoghar restaurants:</strong> The fuller dining options are back in Deoghar,
                      where most travelers eat before or after the Trikut trip.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Trikut Hills Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Drive & Ropeway",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Deoghar early to beat any crowds",
                          "Ropeway ride (or trek) up to the hilltop",
                          "Explore viewpoints and shrines at the top",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Return to Deoghar",
                        color: "bg-forest-600",
                        activities: [
                          "Descend by ropeway or trail",
                          "Drive back to Deoghar for lunch and other sightseeing",
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
                          {["Expense", "Approx. Cost"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Ropeway ticket (return)", "₹150–₹250"],
                          ["Taxi from Deoghar (return)", "₹500–₹800"],
                          ["Snacks/refreshments", "₹100–₹200"],
                          ["Total half-day cost (approx.)", "₹750–₹1,250"],
                        ].map(([exp, c]) => (
                          <tr key={exp} className="bg-white">
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Assumes a shared taxi from Deoghar and doesn't include your Deoghar accommodation.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Trikut Hills</h2>
                  <ul>
                    <li>
                      <strong>Combine with Deoghar:</strong> Treat this as a half-day add-on, not a
                      standalone trip.
                    </li>
                    <li>
                      <strong>Check ropeway status first:</strong> Verify current operating hours before
                      you plan around it.
                    </li>
                    <li>
                      <strong>Consider the trekking route:</strong> A reasonable, more active alternative
                      to the ropeway.
                    </li>
                    <li>
                      <strong>Carry water and sun protection:</strong> Facilities at the top are basic.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Combine Trikut with a Deoghar trip",
                          "Check current ropeway operating status",
                          "Try the trekking route if you want more activity",
                          "Carry water and sun protection",
                          "Go in the cooler Oct–Mar months for clearest views",
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
                          "Plan a full day around Trikut alone",
                          "Assume the ropeway is guaranteed to be running",
                          "Skip carrying water for the trekking route",
                          "Expect developed dining or stay options at the hill itself",
                          "Visit without a plan for onward Deoghar sightseeing",
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
                {["Trikut Hills", "Ropeway", "Off-beat", "Jharkhand", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={TRIKUT_GEAR} destination="Trikut Hills" />

              <RelatedPostsGrid currentSlug="trikut-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="trikut-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
