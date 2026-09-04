// src/app/blog/mon-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mon Travel Guide: Konyak Naga Heritage",
  description:
    "Complete Mon guide — Konyak Naga culture, the last tattooed elders, traditional longhouse villages, how to reach this remote eastern Nagaland district, and a full visit plan.",
  keywords:
    "Mon Nagaland travel guide, Konyak Naga, Mon district Nagaland, tattooed Konyak elders, Nagaland tribal tourism, how to reach Mon Nagaland, Longwa gateway",
  openGraph: {
    title: "Mon Travel Guide: Konyak Naga Heritage",
    description:
      "The cultural heart of the Konyak Naga, and one of the most remote, rewarding districts in Northeast India — the complete Mon guide.",
    url: "https://club.kudozz.in/blog/mon-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Forested hill landscape, evoking the remote hills of Mon district in eastern Nagaland",
      },
    ],
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Mon Travel Guide: Konyak Naga Heritage",
    description:
      "The cultural heart of the Konyak Naga — the complete guide to Mon, eastern Nagaland.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/mon-travel-guide" },
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
          headline: "Mon Travel Guide: Konyak Naga Heritage",
          description:
            "Complete Mon guide — Konyak Naga culture, the last tattooed elders, traditional longhouse villages, how to reach this remote eastern Nagaland district, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
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
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/mon-travel-guide",
          },
          keywords: "Mon, Konyak Naga, Nagaland, tribal heritage, Longwa",
          about: {
            "@type": "Place",
            name: "Mon",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Nagaland",
              addressCountry: "IN",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Nagaland",
                item: "https://club.kudozz.in/blog/nagaland-travel-guide",
              },
              { "@type": "ListItem", position: 4, name: "Mon" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How far is Mon from Kohima or Dimapur?",
    a: "It's a long journey — well over 300 km of hill roads from Kohima, and Mon district is among the most remote in Nagaland. Budget a full day of travel each way, or fly into a closer regional hub where possible and confirm current road conditions before setting out.",
  },
  {
    q: "How should I approach meeting Konyak tribal elders respectfully?",
    a: "Go with a registered local guide who has an existing relationship with the village and elders. Ask before photographing anyone, especially the tattooed elders, and treat the visit as meeting people with a real history — not a photo opportunity.",
  },
  {
    q: "Is Mon safe and accessible for tourists?",
    a: "Yes, Mon is open to tourists and increasingly set up for respectful tribal-heritage tourism, though infrastructure remains basic given the district's remoteness. A local guide makes the logistics and the cultural experience far smoother.",
  },
  {
    q: "How does Mon connect to Longwa?",
    a: "Longwa village is a further drive from Mon town and is almost always visited as part of the same trip — see our dedicated Longwa guide for the India-Myanmar border village itself.",
  },
  {
    q: "What is the best time to visit given road conditions?",
    a: "October through April, avoiding the monsoon months (roughly May-September) when hill roads in this remote district can become genuinely difficult or unsafe.",
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
  { id: "introduction", title: "The Heart of Konyak Naga Country", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mon", level: 2 },
  { id: "things-to-do", title: "Konyak Heritage & Village Life", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

export default function MonGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/meghalaya/hero.jpg"
              alt="Forested hill landscape, evoking the remote hills of Mon district in eastern Nagaland"
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
                { label: "Nagaland", href: "/blog/nagaland-travel-guide" },
                { label: "Mon", href: null },
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
              {["Mon", "Konyak Naga", "Nagaland", "Tribal Heritage"].map((tag) => (
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
              Mon Travel Guide: Konyak Naga Heritage
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The last generation of tattooed Konyak warriors, traditional
              longhouse villages, and one of the most remote, rewarding
              corners of Northeast India.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Mon district, Nagaland",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,200 words",
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
                  <h2>The Heart of Konyak Naga Country</h2>
                  <p>
                    <strong>Mon</strong> is the headquarters town of Mon
                    district in eastern Nagaland, and the cultural centre of
                    the <strong>Konyak Naga</strong> tribe. The region is
                    historically known for its association with the last
                    generation of tattooed, formerly headhunting Konyak
                    warriors — elderly men who carry traditional facial and
                    body tattoos earned in the era before headhunting was
                    ended, and who are now a subject of genuine
                    anthropological and cultural interest.
                  </p>
                  <p>
                    This history deserves to be approached with real
                    respect, acknowledging both its complexity and the
                    dignity of the individuals visitors meet today.
                    Respectful, guided visits with proper consent are the
                    appropriate way to engage with this heritage — not
                    treating it as a curiosity to be photographed in
                    passing.
                  </p>
                  <p>
                    Mon and the surrounding district remain considerably more
                    remote and less developed than Kohima or Dimapur, giving
                    the region a genuinely off-the-beaten-path character.
                    Mon is also the gateway town for reaching{" "}
                    <Link href="/blog/longwa-travel-guide">Longwa</Link>{" "}
                    village, since the two are almost always visited
                    together.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Mon at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Nagaland" },
                        { icon: "🧭", label: "Tribe", value: "Konyak Naga" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        { icon: "🚗", label: "From Kohima", value: "~300+ km" },
                        { icon: "🎨", label: "Known For", value: "Tattooed elders" },
                        { icon: "🗺️", label: "Gateway to", value: "Longwa village" },
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
                  <h2>Best Time to Visit Mon</h2>
                  <p>Given how remote this district is, weather and road conditions matter more here than almost anywhere else in Nagaland.</p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Nov",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear post-monsoon roads and comfortable temperatures make this the most reliable window for the long journey out here.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Cool and dry",
                        text: "Cold mornings and evenings but generally stable, passable roads.",
                      },
                      {
                        season: "Mar – Apr",
                        emoji: "🌱",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Warming, still good",
                        text: "Pleasant travel conditions ahead of the pre-monsoon heat.",
                      },
                      {
                        season: "May – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Remote hill roads can become genuinely difficult or unsafe; strongly avoid planning a Mon trip in this window.",
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
                    <strong>Our pick:</strong> October to November — the most
                    reliable roads and clearest weather for the long journey
                    into Mon district.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Mon</h2>
                  <ul>
                    <li>
                      <strong>From Kohima or Dimapur:</strong> A long
                      journey — well over 300 km of hill roads, typically
                      taking a full day. Set honest expectations about
                      travel time rather than trying to combine it with much
                      else on the same day.
                    </li>
                    <li>
                      <strong>Road conditions:</strong> Can be rough in
                      stretches given the district's remoteness — budget
                      extra travel time beyond estimated driving hours.
                    </li>
                    <li>
                      <strong>Best approach:</strong> Hire a vehicle and
                      driver familiar with the route, ideally arranged
                      through a Nagaland-based tour operator who can also
                      connect you with local guides in Mon and Longwa.
                    </li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Given the distance, plan Mon
                    and Longwa as a multi-day trip rather than trying to
                    squeeze them into a short Nagaland itinerary — rushing
                    this region undersells both the journey and the
                    experience.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>Konyak Heritage & Village Life</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/hero.jpg"
                      alt="Remote forested hills of eastern Nagaland's Mon district"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Meeting Konyak Elders, Respectfully</h3>
                  <p>
                    A local guide is the appropriate way to arrange
                    meaningful, respectful visits with tattooed Konyak
                    elders — someone with an existing relationship to the
                    community, who can properly introduce you and explain
                    the history and significance behind what you're seeing.
                  </p>
                  <h3>Traditional Villages & Longhouses</h3>
                  <p>
                    The wider Mon district has numerous traditional villages
                    with distinctive Konyak longhouse architecture — large
                    communal wooden structures that reflect a way of life
                    still visible today, even as the district modernizes.
                  </p>
                  <h3>Gateway to Longwa</h3>
                  <p>
                    Mon town is the practical base for reaching{" "}
                    <Link href="/blog/longwa-travel-guide">Longwa</Link>{" "}
                    village, famous for straddling the India-Myanmar border
                    — almost every visitor to Mon continues on to Longwa as
                    part of the same trip.
                  </p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Mon</h2>
                  <p>
                    Accommodation is genuinely limited here given the
                    district's remoteness — basic guesthouses and homestays
                    are the norm rather than a wide hotel selection.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,200/night",
                        picks: ["Basic guesthouses", "Government circuit house (if available)", "Simple homestays"],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,200–₹2,500/night",
                        picks: ["Better-appointed guesthouses", "Guide-arranged homestays", "Tour-operator packages"],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌄",
                        range: "n/a",
                        picks: ["No dedicated luxury stays in Mon", "Basic infrastructure throughout", "Set expectations accordingly"],
                      },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Travel & Mon Town",
                        color: "bg-amber-700",
                        activities: ["Long drive from Kohima/Dimapur", "Check in, rest from the journey", "Evening walk around Mon town"],
                      },
                      {
                        day: "Day 2",
                        title: "Konyak Villages",
                        color: "bg-forest-600",
                        activities: ["Guided visit to a traditional Konyak village", "Respectful time with tattooed elders", "Overnight in Mon"],
                      },
                      {
                        day: "Day 3",
                        title: "Longwa & Return",
                        color: "bg-stone-600",
                        activities: ["Drive to Longwa village", "See the Angh's house on the India-Myanmar border", "Begin the return journey"],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>
                            {d.day}
                          </div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Given the distance, this works best as a dedicated 3-4
                    day extension to a wider{" "}
                    <Link href="/blog/nagaland-travel-guide">Nagaland trip</Link>, rather than a rushed side trip.
                  </p>
                </section>

                <section id="food-guide">
                  <h2>Where to Eat in Mon</h2>
                  <ul>
                    <li><strong>Guesthouse/homestay meals:</strong> The most reliable food option, typically simple Naga fare.</li>
                    <li><strong>Local eateries:</strong> Basic, limited options in Mon town itself — set expectations accordingly.</li>
                    <li><strong>Carry supplies:</strong> Worth bringing some snacks given how remote the wider district is.</li>
                  </ul>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹500", "₹2,000", "n/a"],
                          ["Vehicle hire (round trip from Kohima)", "₹8,000", "₹12,000", "₹18,000"],
                          ["Local guide/day", "₹1,000", "₹2,000", "₹3,000"],
                          ["Food/day", "₹300", "₹600", "₹1,000"],
                        ].map(([exp, b, m, l], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{m}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{l}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Vehicle hire is a round-trip figure best split across a
                    group; a local guide is genuinely worth the cost here.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Tips for Visiting Mon</h2>
                  <ul>
                    <li><strong>Hire a local guide:</strong> Essential both for respectful cultural interactions and for practical navigation.</li>
                    <li><strong>Budget extra travel time:</strong> Road conditions here are unpredictable — don't plan a tight schedule.</li>
                    <li><strong>Ask before photographing:</strong> Especially tattooed elders — always ask and respect a "no."</li>
                    <li><strong>Come prepared:</strong> Basic supplies, cash, and warm layers given the remote infrastructure.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Hire a local guide with existing community relationships",
                          "Budget extra time for road conditions",
                          "Combine Mon with Longwa in the same trip",
                          "Ask permission before any photography",
                          "Carry cash and basic supplies",
                          "Approach Konyak heritage with genuine respect",
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
                          "Attempt this as a rushed day trip",
                          "Travel during monsoon months",
                          "Photograph elders without asking first",
                          "Expect wide hotel or dining choices",
                          "Skip hiring a guide to save money",
                          "Travel without confirming current road conditions",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>🗺️ Extend the trip:</strong> Mon pairs directly
                    with <Link href="/blog/longwa-travel-guide">Longwa</Link>{" "}
                    village and the wider{" "}
                    <Link href="/blog/nagaland-travel-guide">Nagaland travel guide</Link> circuit.
                  </div>
                </section>

                <section id="faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-5 my-6">
                    {faqs.map((f) => (
                      <div key={f.q} className="bg-white border border-stone-200 rounded-xl p-5">
                        <h4 className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>{f.q}</h4>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>{f.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Mon", "Konyak Naga", "Nagaland", "Tribal Heritage", "Longwa", "Off-beat"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="mon-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mon-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
