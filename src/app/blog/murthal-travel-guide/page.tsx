// src/app/blog/murthal-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, { GearSection } from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

export const metadata: Metadata = {
  title: "Murthal Travel Guide: The Parathas That Built a Highway Legend",
  description:
    "The complete Murthal travel guide. NH44's famous paratha dhabas, thick lassi, which dhabas to pick, best time to stop, and honest practical advice for a highway food pilgrimage.",
  keywords:
    "Murthal travel guide, Murthal parathas, Murthal dhaba, NH44 food stop, best dhaba Murthal, Sonipat highway food, Delhi Chandigarh road trip food",
  openGraph: {
    title: "Murthal Travel Guide: The Parathas That Built a Highway Legend",
    description: "A cluster of highway dhabas on NH44 that turned parathas and lassi into a genuine road-trip pilgrimage — the complete guide to Murthal.",
    url: "https://club.kudozz.in/blog/murthal-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/udaipur/hero.jpg", width: 1200, height: 630, alt: "Highway dhaba scene representative of Murthal, Haryana" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Murthal Travel Guide: The Parathas That Built a Highway Legend",
    description: "NH44's most famous food stop — the complete guide to Murthal's dhabas.",
    images: ["/images/destinations/udaipur/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/murthal-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Murthal Travel Guide: The Parathas That Built a Highway Legend",
          description: "The complete Murthal travel guide.",
          image: "https://club.kudozz.in/images/destinations/udaipur/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/murthal-travel-guide" },
          about: {
            "@type": "Place",
            name: "Murthal",
            address: { "@type": "PostalAddress", addressRegion: "Haryana", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Murthal Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "Is Murthal worth a dedicated trip?",
    a: "Honestly, only if you're a genuine food enthusiast — Murthal has essentially no sightseeing beyond its dhabas. It's best experienced as a meal stop on a longer road trip rather than a standalone destination.",
  },
  {
    q: "How do I get to Murthal?",
    a: "It sits directly on NH44, roughly 45km from Delhi, en route to Chandigarh, Punjab, and Himachal Pradesh. Almost everyone arrives by road as part of a longer journey.",
  },
  {
    q: "Which dhaba should I choose in Murthal?",
    a: "Several long-running dhaba names have built genuine regional fame over decades. A busy parking lot and steady turnover are generally reliable signs of a good spot — quality across the well-established ones is fairly consistent.",
  },
  {
    q: "What should I order at a Murthal dhaba?",
    a: "Stuffed parathas — aloo, gobi, paneer, and more — served with generous butter, alongside thick lassi. Portions are generous, so pace your order for the table.",
  },
  {
    q: "What is the best time to stop at Murthal?",
    a: "Early morning or late evening avoids the worst NH44 traffic and dhaba crowds. Midday and evening dinner hours can see long queues at the most popular spots.",
  },
  {
    q: "How much does a meal at Murthal cost?",
    a: "Very affordable — a full paratha meal with lassi for two typically runs well under ₹500 at most established dhabas.",
  },
  {
    q: "Is Murthal safe for a late-night stop?",
    a: "Yes, generally — it's a well-lit, busy highway stop with steady traffic through the night, a common feature of major North Indian highway food hubs." ,
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
  { id: "introduction", title: "Why Murthal?", level: 2 },
  { id: "best-time", title: "Best Time to Stop", level: 2 },
  { id: "how-to-reach", title: "How to Reach Murthal", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "itinerary", title: "Meal-Stop Guide", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MURTHAL_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "The bare essentials for a highway dhaba stop",
    emoji: "🫓",
    items: [
      {
        name: "Hand Sanitizer",
        description: "Useful for a roadside dhaba stop where handwashing facilities can be basic.",
        price: "₹99",
        rating: 4.3,
        reviews: "8.2k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("hand+sanitizer+travel+pack"),
        tag: "Practical essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "A small, sensible precaution for any highway food stop." ,
      },
      {
        name: "Wet Wipes",
        description: "Handy for a butter-and-paratha meal eaten with your hands, dhaba-style.",
        price: "₹149",
        rating: 4.4,
        reviews: "6.5k",
        image: "🧻",
        affiliateUrl: amazonSearchUrl("wet+wipes+travel+pack"),
        tag: "Practical essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Butter-laden parathas are a genuinely hands-on eating experience.",
      },
      {
        name: "Comfortable Travel Clothing",
        description: "Nothing special required — just casual, comfortable clothes for a roadside meal break.",
        price: "₹—",
        rating: 4.4,
        reviews: "—",
        image: "👕",
        affiliateUrl: amazonSearchUrl("comfortable+travel+clothing"),
        tag: "Comfort",
        tagColor: "bg-forest-100 text-forest-700",
        why: "This is a casual roadside food stop, not a formal sightseeing destination.",
      },
    ],
  },
];

export default function MurthalGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/udaipur/hero.jpg"
              alt="Highway dhaba scene representative of Murthal, Haryana"
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
                { label: "Murthal", href: null },
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
              {["Murthal", "Dhaba Food", "Road Trip", "Haryana"].map((tag) => (
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
              Murthal Travel Guide: The Parathas That Built a Highway Legend
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A cluster of highway dhabas on NH44 that turned parathas and lassi into a genuine
              road-trip pilgrimage.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "7 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Murthal, Haryana",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,300 words",
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
                  <h2>Why Murthal?</h2>
                  <p>
                    Let's be upfront: <strong>Murthal</strong> has no monuments, no museums, no
                    scenic viewpoints. What it has is a cluster of large highway dhabas along{" "}
                    <strong>NH44</strong> near Sonipat that have, over decades, built genuine regional
                    fame purely on the strength of their food — specifically, stuffed parathas
                    slathered in butter and served alongside thick, cold lassi.
                  </p>
                  <p>
                    Families and road-trippers routinely make a dedicated stop here purely for the
                    meal, whether they're headed to Chandigarh, Punjab, or the Himachal hills. This
                    guide treats Murthal for exactly what it is: North India's most famous highway
                    food pilgrimage, not a sightseeing destination.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🫓</span> Murthal at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Haryana, India" },
                        { icon: "🫓", label: "Known For", value: "Stuffed parathas & lassi" },
                        { icon: "🛣️", label: "Location", value: "On NH44, near Sonipat" },
                        { icon: "🚗", label: "Distance from Delhi", value: "~45km" },
                        { icon: "🕐", label: "Best Visit", value: "Year-round meal stop" },
                        { icon: "💰", label: "Meal Cost", value: "Under ₹500 for two" },
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
                  <h2>Best Time to Stop at Murthal</h2>
                  <p>
                    Murthal's dhabas operate essentially year-round — this isn't a seasonal
                    destination. The main consideration is traffic and crowd timing rather than
                    weather.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Quietest",
                        text: "Fewer crowds and quicker service before the day's road traffic builds up.",
                      },
                      {
                        season: "Midday & Evening",
                        emoji: "🚗",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Busiest",
                        text: "Peak highway traffic hours bring the longest queues at the most popular dhabas.",
                      },
                      {
                        season: "Late Night",
                        emoji: "🌙",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Steady, atmospheric",
                        text: "Many dhabas run late into the night, a genuine part of the Murthal highway culture.",
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
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Murthal</h2>
                  <ul>
                    <li>
                      <strong>By Road:</strong> Directly on NH44, roughly 45km from Delhi — virtually
                      all visitors stop here en route to or from Chandigarh, Punjab, or Himachal
                      Pradesh.
                    </li>
                    <li>
                      <strong>Combine with nearby stops:</strong> Panipat and Kurukshetra sit on the
                      same corridor, making a combined trip easy (cross-reference those guides).
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> A full parking lot is usually a reliable sign of a
                    good, currently-popular dhaba — quality among the well-established names is
                    fairly consistent.
                  </div>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Murthal</h2>
                  <ul>
                    <li>
                      <strong>Stuffed parathas:</strong> Aloo, gobi, paneer, and more — served hot
                      with generous butter. This is the entire point of a Murthal stop.
                    </li>
                    <li>
                      <strong>Thick lassi:</strong> The classic pairing with a paratha meal, served
                      cold and generously portioned.
                    </li>
                    <li>
                      <strong>Simple sides:</strong> Pickle, curd, and butter accompany most paratha
                      orders — no elaborate menu needed here.
                    </li>
                  </ul>
                  <blockquote>
                    Go with an appetite — portions at established Murthal dhabas are genuinely
                    generous, and one plate easily satisfies most travelers.
                  </blockquote>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Murthal</h2>
                  <p>
                    Murthal is a meal stop, not an overnight destination — essentially no one stays
                    here specifically. If you need accommodation nearby, Sonipat or Delhi offer far
                    more practical options a short drive away.
                  </p>
                </section>

                <section id="itinerary">
                  <h2>Meal-Stop Guide</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Arrive",
                        title: "Pick a Dhaba",
                        color: "bg-amber-700",
                        activities: ["Look for a busy, well-established dhaba with a full parking lot"],
                      },
                      {
                        day: "Order",
                        title: "Parathas & Lassi",
                        color: "bg-forest-600",
                        activities: ["Order stuffed parathas (aloo, gobi, or paneer) and thick lassi", "Pace portions across your group — servings are generous"],
                      },
                      {
                        day: "Depart",
                        title: "Continue Your Journey",
                        color: "bg-orange-600",
                        activities: ["Resume your NH44 road trip toward Chandigarh, Punjab, or Himachal"],
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
                          {["Item", "Typical Cost"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Stuffed paratha (per plate)", "₹80 – ₹150"],
                          ["Lassi (large glass)", "₹60 – ₹100"],
                          ["Full meal for two", "Under ₹500"],
                        ].map(([exp, b], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Prices vary by dhaba — this is a genuinely low-cost stop regardless of which
                    one you choose.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Murthal</h2>
                  <ul>
                    <li>
                      <strong>Treat it as a meal stop, not a destination:</strong> There's no other
                      sightseeing here — plan accordingly.
                    </li>
                    <li>
                      <strong>Pick a busy, established dhaba:</strong> A full parking lot is usually
                      a good sign.
                    </li>
                    <li>
                      <strong>Go hungry:</strong> Portions are generous — don't over-order for your
                      group.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Pick a well-established, busy dhaba",
                          "Order stuffed parathas with thick lassi",
                          "Treat it as a meal stop on a longer road trip",
                          "Carry wet wipes for a hands-on meal",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>
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
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Expect any sightseeing beyond the dhabas",
                          "Over-order — portions are large",
                          "Plan an overnight stay here specifically",
                          "Pick an empty, quiet-looking dhaba over a busy one",
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
                {["Murthal", "Dhaba Food", "Road Trip", "Haryana", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MURTHAL_GEAR} destination="Murthal" />

              <RelatedPostsGrid currentSlug="murthal-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="murthal-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
