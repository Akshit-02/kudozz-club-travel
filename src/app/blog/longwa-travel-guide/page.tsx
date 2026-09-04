// src/app/blog/longwa-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

export const metadata: Metadata = {
  title: "Longwa Village Guide: India-Myanmar Border",
  description:
    "Complete Longwa guide — the Angh's house straddling India and Myanmar, tattooed Konyak elders, traditional longhouses, how to reach from Mon, and a full visit plan.",
  keywords:
    "Longwa village travel guide, Longwa Angh house, India Myanmar border village, Konyak Naga Longwa, how to reach Longwa, Mon district Nagaland",
  openGraph: {
    title: "Longwa Village Guide: India-Myanmar Border",
    description:
      "A village chief's house that sits in two countries at once — the complete guide to Longwa, one of India's most unusual village visits.",
    url: "https://club.kudozz.in/blog/longwa-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kasol/kasol.jpg",
        width: 1200,
        height: 630,
        alt: "Remote mountain village landscape, evoking Longwa's border-straddling hills in eastern Nagaland",
      },
    ],
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Longwa Village Guide: India-Myanmar Border",
    description: "A village that sits in two countries at once — the complete Longwa guide.",
    images: ["/images/destinations/kasol/kasol.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/longwa-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Longwa Village Guide: India-Myanmar Border",
          description:
            "Complete Longwa guide — the Angh's house straddling India and Myanmar, tattooed Konyak elders, traditional longhouses, how to reach from Mon, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/kasol/kasol.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/longwa-travel-guide" },
          keywords: "Longwa, Angh house, India Myanmar border, Konyak Naga, Nagaland",
          about: {
            "@type": "Place",
            name: "Longwa",
            address: { "@type": "PostalAddress", addressRegion: "Nagaland", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Nagaland", item: "https://club.kudozz.in/blog/nagaland-travel-guide" },
              { "@type": "ListItem", position: 4, name: "Longwa" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "Does the Angh's house really sit in two countries?",
    a: "Yes — the Longwa Angh's (traditional chief's) house is widely reported to be built such that part of the structure lies in India and part in Myanmar, making it one of the most unusual and widely-cited landmarks of its kind anywhere.",
  },
  {
    q: "How far is Longwa from Mon?",
    a: "A further drive beyond Mon town, deep into the district's border hills — most visitors base themselves in Mon and make Longwa a day excursion or overnight extension.",
  },
  {
    q: "Is it safe to visit given the border location?",
    a: "Yes, Longwa is open to tourists and visited regularly, though it's genuinely remote. Travel with a local guide who knows current conditions and etiquette around the border area.",
  },
  {
    q: "Is a guide necessary?",
    a: "Strongly recommended — for navigation, for respectful introductions to Konyak elders, and for understanding the border-village context properly.",
  },
  {
    q: "What is the best time to visit?",
    a: "October through April, matching the wider Mon-district travel window — avoid the monsoon months when roads become difficult.",
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
  { id: "introduction", title: "A Village in Two Countries", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Longwa", level: 2 },
  { id: "things-to-do", title: "The Angh's House & Village Life", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

export default function LongwaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/kasol/kasol.jpg"
              alt="Remote mountain village landscape, evoking Longwa's border-straddling hills in eastern Nagaland"
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
                { label: "Longwa", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
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
              {["Longwa", "Mon District", "Nagaland", "Myanmar Border"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Longwa Village Guide: India-Myanmar Border
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A chief's house that sits in two countries at once, tattooed
              Konyak elders, and one of India's most unusual, unforgettable
              village visits.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Mon district, Nagaland",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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
                  <h2>A Village in Two Countries</h2>
                  <p>
                    <strong>Longwa</strong> is a Konyak Naga village near
                    Mon town, famous for a genuinely remarkable geographic
                    and political distinction: the village straddles the
                    international border between India and Myanmar. The{" "}
                    <strong>Angh&apos;s house</strong> — the residence of the
                    village&apos;s traditional chief — is widely reported to
                    be built such that part of the structure lies in India
                    and part in Myanmar, a striking, widely-cited fact that
                    makes Longwa one of the most unusual village visits
                    anywhere in India.
                  </p>
                  <p>
                    Longwa is also home to some of the last living tattooed
                    Konyak elders, following the same historical context as
                    nearby <Link href="/blog/mon-travel-guide">Mon</Link> —
                    approach any interactions with the same respect,
                    ideally through a local guide. Traditional Konyak
                    longhouses, large communal wooden structures, are
                    another notable architectural feature of the village.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🗺️</span> Longwa at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "District", value: "Mon, Nagaland" },
                        { icon: "🌏", label: "Notable For", value: "India-Myanmar border" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        { icon: "🏠", label: "Landmark", value: "Angh's house" },
                        { icon: "🎨", label: "Culture", value: "Tattooed Konyak elders" },
                        { icon: "🚗", label: "Gateway", value: "Mon town" },
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
                  <h2>Best Time to Visit Longwa</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Nov",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear roads and comfortable temperatures for the remote journey out here.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Cool and dry",
                        text: "Cold at this altitude but generally stable travel conditions.",
                      },
                      {
                        season: "Mar – Apr",
                        emoji: "🌱",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Warming, still good",
                        text: "Pleasant conditions before the pre-monsoon heat sets in.",
                      },
                      {
                        season: "May – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Roads to this remote border village can become genuinely difficult.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> October to November for the
                    most reliable roads and clearest travel conditions.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Longwa</h2>
                  <ul>
                    <li><strong>From Mon town:</strong> A further drive deep into the district's border hills — cross-link <Link href="/blog/mon-travel-guide">Mon</Link> for the practical gateway.</li>
                    <li><strong>From Kohima/Dimapur:</strong> A very long journey overall, best planned as a multi-day trip combined with Mon.</li>
                    <li><strong>Local guide:</strong> Essential — for navigation, for border-area etiquette, and for respectful introductions in the village.</li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Longwa with Mon as a
                    single trip rather than a rushed add-on — the distance
                    and remoteness make it worth dedicating proper time to
                    both.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>The Angh&apos;s House & Village Life</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kasol/kasol.jpg"
                      alt="Remote hill village landscape near the India-Myanmar border in Nagaland"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Border-Straddling Angh&apos;s House</h3>
                  <p>
                    The Angh&apos;s house is Longwa&apos;s defining landmark
                    — the residence of the village&apos;s traditional chief,
                    widely reported to sit partly in India and partly in
                    Myanmar. A local guide can show you around and explain
                    the practical realities of daily life in a village that
                    straddles an international border.
                  </p>
                  <h3>Traditional Longhouses</h3>
                  <p>
                    Large communal wooden longhouses remain a defining
                    architectural feature of the village, offering a window
                    into traditional Konyak building techniques and
                    community life.
                  </p>
                  <h3>Meeting Konyak Elders</h3>
                  <p>
                    As with Mon, some of the last tattooed Konyak elders live
                    in and around Longwa. Approach any meetings with genuine
                    respect, always ask before photographing, and let your
                    guide facilitate proper introductions.
                  </p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Longwa</h2>
                  <p>Very basic homestays and guesthouses are the norm — state this plainly rather than expecting hotel-level comfort.</p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,000/night", picks: ["Basic village homestays", "Simple guesthouse rooms"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,000–₹2,000/night", picks: ["Guide-arranged homestays", "Better-appointed guesthouses in Mon"] },
                      { tier: "Luxury", icon: "🌄", range: "n/a", picks: ["No dedicated luxury stays", "Base in Mon instead"] },
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
                      { day: "Day 1", title: "Mon to Longwa", color: "bg-amber-700", activities: ["Drive from Mon to Longwa village", "Guided visit to the Angh's house", "Meet elders with a local guide"] },
                      { day: "Day 2", title: "Village Life & Return", color: "bg-forest-600", activities: ["Explore traditional longhouses", "Photograph the landscape (with permission for people)", "Return to Mon or begin the journey home"] },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>{d.day}</div>
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
                    * Best combined with <Link href="/blog/mon-travel-guide">Mon</Link> as part of a single remote-Nagaland extension.
                  </p>
                </section>

                <section id="food-guide">
                  <h2>Where to Eat Near Longwa</h2>
                  <ul>
                    <li><strong>Homestay meals:</strong> The primary and most reliable food option in the village.</li>
                    <li><strong>Mon town:</strong> More options available if based there instead.</li>
                    <li><strong>Carry supplies:</strong> Worth bringing snacks and water given how remote the area is.</li>
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
                          ["Accommodation/night", "₹500", "₹1,500", "n/a"],
                          ["Local guide/day", "₹1,000", "₹2,000", "₹3,000"],
                          ["Vehicle hire from Mon", "₹2,000", "₹3,500", "₹5,000"],
                          ["Food/day", "₹300", "₹500", "₹800"],
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
                </section>

                <section id="tips">
                  <h2>Essential Tips for Visiting Longwa</h2>
                  <ul>
                    <li><strong>Hire a local guide:</strong> For navigation, border-area etiquette, and respectful introductions.</li>
                    <li><strong>Come with realistic expectations:</strong> This is one of India's most remote village visits — comfort levels are basic.</li>
                    <li><strong>Ask before photographing:</strong> Especially tattooed elders.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Travel with a local guide",
                          "Combine with Mon as one trip",
                          "Ask permission before photographing people",
                          "Carry cash and basic supplies",
                          "Set realistic comfort expectations",
                          "Learn the Angh's house story before you go",
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
                          "Attempt this without a local guide",
                          "Travel during monsoon months",
                          "Photograph elders without asking",
                          "Expect hotel-level accommodation",
                          "Rush the trip in a single tight day",
                          "Skip checking current travel conditions",
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
                    <strong>🗺️ Extend the trip:</strong> Longwa pairs
                    directly with <Link href="/blog/mon-travel-guide">Mon</Link> and the wider{" "}
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
                {["Longwa", "Mon District", "Nagaland", "Myanmar Border", "Konyak Naga", "Off-beat"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="longwa-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="longwa-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
