// src/app/blog/reiek-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Reiek Travel Guide: Heritage Village & Views",
  description:
    "Complete Reiek guide — the Reiek Tlang viewpoint, the traditional Mizo heritage village, light trekking, how to reach from Aizawl, and a full visit plan.",
  keywords:
    "Reiek travel guide, Reiek Tlang, Reiek heritage village, Mizoram viewpoint, Reiek peak, how to reach Reiek, Aizawl day trip, Mizo tribal huts",
  openGraph: {
    title: "Reiek Travel Guide: Heritage Village & Views",
    description:
      "A peak with panoramic views toward Bangladesh and Myanmar, and a heritage village recreating traditional Mizo tribal huts — the complete Reiek guide.",
    url: "https://club.kudozz.in/blog/reiek-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/solang-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Green valley and hills, evoking Reiek's panoramic viewpoint in Mizoram",
      },
    ],
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Reiek Travel Guide: Heritage Village & Views",
    description:
      "A peak with sweeping views and a heritage village of traditional Mizo huts — the complete Reiek guide.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/reiek-travel-guide" },
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
          headline: "Reiek Travel Guide: Heritage Village & Views",
          description:
            "Complete Reiek guide — the Reiek Tlang viewpoint, the traditional Mizo heritage village, light trekking, how to reach from Aizawl, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/reiek-travel-guide" },
          keywords: "Reiek, Mizoram, heritage village, viewpoint, Aizawl district",
          about: {
            "@type": "Place",
            name: "Reiek",
            address: { "@type": "PostalAddress", addressRegion: "Mizoram", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Mizoram", item: "https://club.kudozz.in/blog/mizoram-travel-guide" },
              { "@type": "ListItem", position: 4, name: "Reiek" },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How far is Reiek from Aizawl?",
    a: "Roughly 29 km, about an hour's drive on winding hill roads — one of the most accessible and popular day trips from the capital.",
  },
  {
    q: "Can you really see Bangladesh and Myanmar from the peak?",
    a: "On exceptionally clear days, yes — visibility toward the distant terrain of both neighbouring countries is one of Reiek Tlang's signature draws, though haze often limits the view, especially outside the driest winter months.",
  },
  {
    q: "Is Reiek a day trip or worth an overnight?",
    a: "Most visitors treat it as a comfortable day trip from Aizawl. An overnight is worthwhile specifically if you want to catch sunrise or sunset light from the peak, which is when the views are at their best.",
  },
  {
    q: "What is the heritage village at Reiek?",
    a: "A recreation of traditional Mizo tribal huts representing different communities, giving visitors a tangible sense of pre-modern village architecture and life in one accessible spot.",
  },
  {
    q: "What is the best time for the clearest views?",
    a: "October to March generally, with early morning or late afternoon light offering the best combination of visibility and photography conditions.",
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
  { id: "introduction", title: "A Peak Above Central Mizoram", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Reiek", level: 2 },
  { id: "things-to-do", title: "The Peak & Heritage Village", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ReiekGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/manali/solang-valley.jpg"
              alt="Green valley and hills, evoking Reiek's panoramic viewpoint in Mizoram"
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
                { label: "Mizoram", href: "/blog/mizoram-travel-guide" },
                { label: "Reiek", href: null },
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
              {["Reiek", "Mizoram", "Heritage Village", "Aizawl District"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Reiek Travel Guide: Heritage Village & Views
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A peak with sweeping views toward Bangladesh and Myanmar, and a
              heritage village recreating traditional Mizo tribal life —
              central Mizoram's most popular weekend escape.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Reiek, Mizoram" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,000 words" },
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
                  <h2>A Peak Above Central Mizoram</h2>
                  <p>
                    <strong>Reiek</strong>, roughly 29 km from{" "}
                    <Link href="/blog/aizawl-travel-guide">Aizawl</Link>, is
                    centred on Reiek Tlang (Reiek Peak), a viewpoint offering
                    panoramic sweeps across the surrounding hills — and on
                    exceptionally clear days, glimpses toward the distant
                    terrain of Bangladesh and Myanmar.
                  </p>
                  <p>
                    At the base of the peak, a heritage village recreates
                    traditional Mizo tribal huts representing different
                    communities, giving visitors a tangible, walk-through
                    introduction to pre-modern Mizo architecture and village
                    life in a single accessible location.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>⛰️</span> Reiek at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "Location", value: "Aizawl district" },
                        { icon: "🚗", label: "From Aizawl", value: "~29 km" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🏞️", label: "Known For", value: "Viewpoint, heritage huts" },
                        { icon: "🎯", label: "Trip Type", value: "Day trip / short overnight" },
                        { icon: "💰", label: "Budget/Day", value: "₹800 – ₹3,000" },
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
                  <h2>Best Time to Visit Reiek</h2>
                  <p>Visibility from the peak is the main variable that shapes when to go.</p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-forest-50 border-forest-200", mood: "Best time — our pick", text: "Dry, clear conditions give the best odds of long-distance visibility toward Bangladesh and Myanmar." },
                      { season: "Early morning", emoji: "🌅", color: "bg-purple-50 border-purple-200", mood: "Best light of day", text: "Haze tends to build through the day, so early morning or late afternoon offers the clearest, most photogenic views." },
                      { season: "Apr – May", emoji: "🌤️", color: "bg-amber-50 border-amber-200", mood: "Warmer, hazier", text: "Still visitable, but long-distance visibility drops noticeably compared to winter." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Lush green scenery but frequent cloud cover can obscure the long-distance views entirely." },
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
                  <blockquote><strong>Our pick:</strong> a clear winter morning — the combination gives the best odds of seeing all the way to the border terrain.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Reiek</h2>
                  <ul>
                    <li><strong>By road from Aizawl:</strong> Roughly an hour's drive on winding hill roads — the standard, straightforward route.</li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Leave Aizawl early if you want to catch the clearest morning visibility from the peak before haze builds later in the day.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>The Peak & Heritage Village</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/solang-valley.jpg"
                      alt="Green hills near Reiek, Mizoram"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Reiek Tlang Viewpoint</h3>
                  <p>The peak itself is the main draw — sweeping views over the surrounding hills, with distant visibility toward Bangladesh and Myanmar on the clearest days.</p>
                  <h3>Heritage Village</h3>
                  <p>Traditional Mizo huts recreated at the base of the peak, representing different communities' architectural styles — a slow walk-through here is genuinely worthwhile rather than a rushed pass.</p>
                  <h3>Light Trekking</h3>
                  <p>Short, manageable trails around the peak area suit casual walkers as well as more energetic visitors looking to explore further.</p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay at Reiek</h2>
                  <p>A handful of tourist lodges sit near Reiek itself, though most visitors day-trip from Aizawl.</p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Tourist lodge rooms", "Basic guesthouses"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹3,000/night", picks: ["Better tourist lodge rooms", "Aizawl hotels (day trip base)"] },
                      { tier: "Luxury", icon: "🌄", range: "Limited options", picks: ["Aizawl premium hotels", "Day trip with luxury Aizawl base"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day trip", title: "Reiek from Aizawl", color: "bg-amber-700", activities: ["Early departure from Aizawl", "Reiek Tlang viewpoint and heritage village", "Return to Aizawl by evening"] },
                      { day: "Overnight option", title: "Sunrise or Sunset Focus", color: "bg-sky-600", activities: ["Arrive afternoon, explore the village", "Stay overnight near Reiek", "Catch sunrise or sunset from the peak"] },
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
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>{a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li><strong>Local stalls near the village:</strong> Simple snacks and tea around the heritage village and viewpoint area.</li>
                    <li><strong>Aizawl:</strong> A far wider range of proper meals if basing yourself in the capital for the trip.</li>
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
                          ["Vehicle hire from Aizawl (round trip)", "₹1,500", "₹2,500", "₹4,000"],
                          ["Entry/heritage village fee", "₹50", "₹50", "₹50"],
                          ["Food/day", "₹300", "₹700", "₹1,500"],
                          ["Accommodation (if overnight)", "₹700", "₹1,800", "N/A"],
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
                  <h2>Essential Tips for Visiting Reiek</h2>
                  <ul>
                    <li><strong>Go early for the clearest views:</strong> Haze typically builds through the day, so morning offers the best long-distance visibility.</li>
                    <li><strong>Slow down at the heritage village:</strong> It rewards an unhurried walk-through rather than a quick pass.</li>
                    <li><strong>Combine with other central Mizoram stops:</strong> The short distance from Aizawl makes it easy to pair with other day trips.</li>
                    <li><strong>Carry a jacket:</strong> The peak can be noticeably cooler and windier than Aizawl itself.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Go early morning for the clearest views", "Spend real time at the heritage village", "Carry a light jacket for the peak", "Combine with other Aizawl-area day trips", "Bring a camera for the long-distance views", "Check weather before heading out"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect guaranteed clear views on hazy days", "Rush through the heritage village", "Forget warm layers for the peak", "Assume dedicated accommodation is plentiful", "Skip an early start if photos matter to you", "Overlook this as just a quick photo stop"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>🗺️ Extend the trip:</strong> Combine Reiek with{" "}
                    <Link href="/blog/aizawl-travel-guide">Aizawl</Link> sightseeing
                    or head further afield. See our full{" "}
                    <Link href="/blog/mizoram-travel-guide">Mizoram travel guide</Link>{" "}
                    for the wider state.
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
                {["Reiek", "Mizoram", "Heritage Village", "Aizawl District", "Viewpoint", "Off-beat"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="reiek-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="reiek-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
