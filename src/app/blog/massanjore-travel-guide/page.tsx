// src/app/blog/massanjore-travel-guide/page.tsx
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
  title: "Massanjore Dam Travel Guide: Mayurakshi Reservoir & Day Trip Guide",
  description:
    "The complete Massanjore Dam travel guide. A colonial-era dam on the Mayurakshi River straddling the Jharkhand-West Bengal border — boating, forest surroundings, how to reach, and a simple day-trip plan.",
  keywords:
    "Massanjore Dam travel guide, Mayurakshi River, Massanjore Jharkhand, Massanjore West Bengal, how to reach Massanjore, Deoghar day trip, Jharkhand dam",
  openGraph: {
    title: "Massanjore Dam Travel Guide: Mayurakshi Reservoir & Day Trip Guide",
    description:
      "A colonial-era dam straddling the Jharkhand-West Bengal border, with a reservoir surrounded by sal forest — the complete guide to Massanjore.",
    url: "https://club.kudozz.in/blog/massanjore-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Reservoir and forested hills representative of Massanjore Dam, Jharkhand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Massanjore Dam Travel Guide: Mayurakshi Reservoir & Day Trip Guide",
    description: "A quiet reservoir escape at the Jharkhand-West Bengal border — the complete guide to Massanjore.",
    images: ["/images/destinations/kerala/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/massanjore-travel-guide",
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
          headline: "Massanjore Dam Travel Guide: Mayurakshi Reservoir & Day Trip Guide",
          description: "The complete Massanjore Dam travel guide.",
          image: "https://club.kudozz.in/images/destinations/kerala/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/massanjore-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Massanjore Dam",
            address: { "@type": "PostalAddress", addressRegion: "Jharkhand", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Massanjore Dam Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "Where exactly is Massanjore Dam?",
    a: "It sits right at the Jharkhand-West Bengal border, on the Mayurakshi River — a genuinely unusual geographic footnote, since the dam and its reservoir straddle the two states.",
  },
  {
    q: "How do I reach Massanjore?",
    a: "The nearest practical hub is Deoghar (roughly 60-70km away), or you can approach from the West Bengal side via Rampurhat railway station. Road travel is the primary way in either direction.",
  },
  {
    q: "What is the best time to visit Massanjore?",
    a: "October to March offers the most comfortable weather for boating and time around the reservoir.",
  },
  {
    q: "Can I combine Massanjore with a Deoghar trip?",
    a: "Yes — given the relative proximity and Deoghar's better transport connectivity, most travelers treat Massanjore as an add-on to a Deoghar itinerary rather than a standalone trip.",
  },
  {
    q: "Is boating available at Massanjore?",
    a: "Yes, boating on the reservoir is one of the main activities, though availability and conditions can vary — check locally before you go.",
  },
  {
    q: "Is Massanjore a developed tourist spot?",
    a: "Not heavily — this is a quiet, low-infrastructure reservoir destination best suited to travelers wanting a peaceful escape rather than a polished sightseeing circuit.",
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
  { id: "introduction", title: "Why Massanjore?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Massanjore", level: 2 },
  { id: "top-attractions", title: "What to See & Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MASSANJORE_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a quiet reservoir day trip",
    emoji: "🚤",
    items: [
      {
        name: "Comfortable Footwear",
        description: "For walking around the dam area and reservoir edge, which isn't always paved.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "4.0k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+outdoor+shoes+travel"),
        tag: "Comfort essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The reservoir walking areas are informal, not a paved promenade." ,
      },
      {
        name: "Sun Hat",
        description: "Open reservoir views mean little shade during the middle of the day.",
        price: "₹399",
        rating: 4.3,
        reviews: "3.8k",
        image: "🧢",
        affiliateUrl: amazonSearchUrl("sun+hat+travel"),
        tag: "Comfort essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "A day around the open reservoir means real sun exposure." ,
      },
      {
        name: "Insect Repellent",
        description: "The sal forest and reservoir edge bring a real mosquito presence, especially at dusk.",
        price: "₹199",
        rating: 4.3,
        reviews: "4.2k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"),
        tag: "Forest essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Forest and water together are a reliable mosquito combination.",
      },
      {
        name: "Reusable Water Bottle",
        description: "Facilities around the dam are basic — carrying your own water is sensible.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "All-day essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "This is a low-infrastructure destination without many shops nearby.",
      },
    ],
  },
];

export default function MassanjoreGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/kerala/hero.jpg"
              alt="Reservoir and forested hills representative of Massanjore Dam, Jharkhand"
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
                { label: "Massanjore", href: null },
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
              {["Massanjore", "Mayurakshi River", "Off-beat", "Jharkhand"].map((tag) => (
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
              Massanjore Dam Travel Guide: Mayurakshi Reservoir & Day Trip Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A colonial-era dam straddling the Jharkhand-West Bengal border, with a reservoir surrounded
              by sal forest.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "7 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Massanjore, Jharkhand-West Bengal border" },
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
                  <h2>Why Massanjore?</h2>
                  <p>
                    <strong>Massanjore Dam</strong> sits on the Mayurakshi River right at the border
                    between Jharkhand and West Bengal — a genuinely unusual geographic footnote for a dam
                    built in the 1950s. The reservoir it creates is ringed by sal forest and low hills,
                    making it a peaceful, low-key escape rather than a major sightseeing stop.
                  </p>
                  <p>
                    Most travelers combine it with a <Link href="/blog/deoghar-travel-guide">Deoghar</Link>{" "}
                    trip, using it as a quiet counterpoint to the pilgrimage town's crowds — boating on
                    the reservoir, a walk around the dam, and decent birdlife in the cooler months.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🚤</span> Massanjore at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "Location", value: "Jharkhand-West Bengal border" },
                        { icon: "💧", label: "River", value: "Mayurakshi River" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚗", label: "From Deoghar", value: "~60-70km" },
                        { icon: "🌲", label: "Setting", value: "Sal forest, low hills" },
                        { icon: "💰", label: "Budget/Day", value: "₹800 – ₹2,000" },
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
                  <h2>Best Time to Visit Massanjore</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Cool, comfortable weather for boating and time around the reservoir, plus the best birdwatching window.",
                      },
                      {
                        season: "Apr – Sep",
                        emoji: "🌦️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Hot, then monsoon",
                        text: "Increasing heat through early summer followed by the monsoon — less comfortable for a full day outdoors.",
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
                    <strong>Our pick:</strong> October to March — comfortable weather for boating and the
                    best chance of good birdlife around the reservoir edge.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Massanjore</h2>
                  <ul>
                    <li>
                      <strong>From Deoghar:</strong> Roughly 60-70km by road — the most common approach for
                      most travelers, given Deoghar's airport and railway connectivity.
                    </li>
                    <li>
                      <strong>From West Bengal:</strong> Rampurhat railway station offers an alternative
                      approach from the West Bengal side.
                    </li>
                    <li>
                      <strong>By Road:</strong> Road travel is the primary way to reach Massanjore from
                      either direction — this is a moderately remote destination.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Massanjore with a Deoghar trip rather than
                    treating it as a standalone destination — the connectivity makes far more sense that way.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>What to See & Do at Massanjore</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/hero.jpg"
                      alt="Reservoir and forest scenery at Massanjore Dam"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>The dam and reservoir:</strong> The central feature — a large body of water
                      ringed by sal forest and low hills, quiet and largely undeveloped.
                    </li>
                    <li>
                      <strong>Boating:</strong> Available on the reservoir, though availability and
                      conditions can vary — check locally.
                    </li>
                    <li>
                      <strong>Birdwatching:</strong> Decent birdlife around the reservoir edge, especially
                      in the cooler months.
                    </li>
                    <li>
                      <strong>Walks around the dam area:</strong> A peaceful, low-key way to spend an
                      afternoon away from Deoghar's pilgrim crowds.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Massanjore</h2>
                  <p>
                    Accommodation right at Massanjore is limited and basic — most travelers either day-trip
                    from Deoghar or find simple local stays for an overnight visit.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,200/night", picks: ["Basic local guesthouses", "Simple stays near the dam area"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,500–₹3,000/night", picks: ["Better-appointed hotels in Deoghar (day-trip base)"] },
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
                  <h2>What to Eat Near Massanjore</h2>
                  <ul>
                    <li>
                      <strong>Local eateries:</strong> Simple rice-and-dal meals at small local
                      establishments near the dam.
                    </li>
                    <li>
                      <strong>Bring snacks from Deoghar:</strong> If day-tripping, it's sensible to carry
                      food and water rather than relying on limited options at Massanjore itself.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Massanjore Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Travel & Reservoir Time",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Deoghar early",
                          "Arrive at Massanjore, explore the dam area",
                          "Boating on the reservoir (subject to availability)",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Relax & Return",
                        color: "bg-forest-600",
                        activities: [
                          "Lunch (carried or local eatery)",
                          "Birdwatching/walk around the reservoir edge",
                          "Drive back to Deoghar",
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
                          ["Taxi from Deoghar (return)", "₹1,200–₹1,800"],
                          ["Boating", "₹100–₹300"],
                          ["Food (carried or local)", "₹200–₹400"],
                          ["Total day-trip cost (approx.)", "₹1,500–₹2,500"],
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
                    * Assumes a day trip from Deoghar and doesn't include your Deoghar accommodation.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Massanjore</h2>
                  <ul>
                    <li>
                      <strong>Combine with Deoghar:</strong> The connectivity makes far more sense as an
                      add-on than a standalone trip.
                    </li>
                    <li>
                      <strong>Check boating availability locally:</strong> Conditions can vary day to day.
                    </li>
                    <li>
                      <strong>Carry food and water:</strong> Facilities right at the dam are basic.
                    </li>
                    <li>
                      <strong>Set quiet-getaway expectations:</strong> This is a peaceful reservoir escape,
                      not a major sightseeing stop.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Combine Massanjore with a Deoghar itinerary",
                          "Check boating availability before you go",
                          "Carry food and water for the day",
                          "Visit Oct–Mar for the most comfortable weather",
                          "Bring binoculars if you enjoy birdwatching",
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
                          "Expect developed tourist infrastructure",
                          "Plan a multi-day trip around Massanjore alone",
                          "Assume boating will always be available",
                          "Skip carrying your own food and water",
                          "Travel without confirming current road conditions in monsoon",
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
                {["Massanjore", "Mayurakshi River", "Off-beat", "Jharkhand", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MASSANJORE_GEAR} destination="Massanjore" />

              <RelatedPostsGrid currentSlug="massanjore-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="massanjore-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
