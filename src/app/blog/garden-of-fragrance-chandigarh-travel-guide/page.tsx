// src/app/blog/garden-of-fragrance-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Garden of Fragrance Chandigarh: Sector 36 Visit Guide",
  description:
    "Garden of Fragrance guide — Chandigarh's Sector 36 scent-themed garden with plantings and signage designed for visually impaired visitors. Timings, tips, and what makes it different from the Rose Garden.",
  keywords:
    "Garden of Fragrance Chandigarh, Sector 36 garden Chandigarh, fragrant garden Chandigarh, Chandigarh accessible garden, Chandigarh off-beat gardens, Braille garden Chandigarh",
  openGraph: {
    title: "Garden of Fragrance Chandigarh: Sector 36 Visit Guide",
    description:
      "A quiet, scent-themed garden in Sector 36 built around aromatic plants and accessibility for visually impaired visitors — one of Chandigarh's most overlooked green spaces.",
    url: "https://club.kudozz.in/blog/garden-of-fragrance-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A quiet landscaped garden path in Chandigarh, evoking the calm, scent-themed Garden of Fragrance in Sector 36",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Garden of Fragrance Chandigarh: Sector 36 Visit Guide",
    description:
      "Chandigarh's quietest themed garden — built around scent, not spectacle, with accessible design for visually impaired visitors.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/garden-of-fragrance-chandigarh-travel-guide",
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
          headline: "Garden of Fragrance Chandigarh: Sector 36 Visit Guide",
          description:
            "Garden of Fragrance guide — Chandigarh's Sector 36 scent-themed garden with plantings and signage designed for visually impaired visitors. Timings, tips, and what makes it different from the Rose Garden.",
          image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
          datePublished: "2026-08-31",
          dateModified: "2026-08-31",
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
            "@id": "https://club.kudozz.in/blog/garden-of-fragrance-chandigarh-travel-guide",
          },
          keywords:
            "Garden of Fragrance Chandigarh, Sector 36, fragrant garden, accessible garden, Braille signage",
          about: {
            "@type": "Place",
            name: "Garden of Fragrance",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chandigarh",
              addressRegion: "Chandigarh",
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
                name: "Chandigarh",
                item: "https://club.kudozz.in/blog/chandigarh-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Garden of Fragrance",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ──────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Where exactly is the Garden of Fragrance?",
    a: "It's located in Sector 36, on the southern side of Chandigarh, a bit off the usual tourist track compared to attractions clustered around Sector 1 and Sector 16.",
  },
  {
    q: "What makes this garden different from the Rose Garden?",
    a: "The Rose Garden is built for visual impact — rows of roses across a large area. The Garden of Fragrance is built around scent, with aromatic and fragrant plants arranged so the garden can be experienced with your nose as much as your eyes, including design touches for visually impaired visitors.",
  },
  {
    q: "Is the Garden of Fragrance accessible for visually impaired visitors?",
    a: "Yes — it's specifically known for this. Plantings and signage are arranged so flowers and herbs can be identified by scent, with information available in Braille in parts of the garden, making it one of Chandigarh's more thoughtfully designed public spaces.",
  },
  {
    q: "Is entry free?",
    a: "Entry is free or a nominal amount, in line with Chandigarh's other municipal gardens, with typical daytime park hours.",
  },
  {
    q: "How much time should I spend here?",
    a: "It's a small, quiet garden — 20 to 30 minutes is enough for most visitors, making it an easy add-on rather than a stand-alone destination.",
  },
  {
    q: "When is the best time to visit?",
    a: "Cooler, drier months (October to March) are best, both for comfortable walking and because fragrant blooms tend to be strongest before peak summer heat sets in.",
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
  { id: "introduction", title: "A Garden Built for Scent", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "accessibility", title: "Designed for Accessibility", level: 2 },
  { id: "what-to-see", title: "What's Inside", level: 2 },
  { id: "nearby-gardens", title: "Other Quiet Gardens Nearby", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GardenOfFragranceGuidePage() {
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
              src="/images/destinations/chandigarh/hero.jpg"
              alt="A quiet landscaped garden path in Chandigarh, evoking the calm, scent-themed Garden of Fragrance in Sector 36"
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
                { label: "Chandigarh", href: "/blog/chandigarh-travel-guide" },
                { label: "Garden of Fragrance", href: null },
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
              {["Garden of Fragrance", "Sector 36", "Chandigarh", "Off-beat", "Accessible Garden"].map((tag) => (
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
              Garden of Fragrance: Chandigarh's Quietest Themed Garden
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A small, scent-themed garden in Sector 36, built around
              aromatic plants and thoughtful accessibility touches for
              visually impaired visitors — one of Chandigarh's most
              overlooked green spaces.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Sector 36, Chandigarh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,400 words",
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
                  <h2>A Garden Built for Scent</h2>
                  <p>
                    Most of{" "}
                    <Link href="/blog/chandigarh-travel-guide">Chandigarh's</Link>{" "}
                    gardens compete on visual scale — rows of roses, sheets
                    of bougainvillea, sprawling lawns. The{" "}
                    <strong>Garden of Fragrance</strong>, tucked into Sector
                    36, takes a different approach entirely: it's organised
                    around aromatic and fragrant plants, designed to be
                    experienced by smell as much as sight.
                  </p>
                  <p>
                    It's a small, quiet space — nowhere near the scale of
                    the Rose Garden or the crowds of Rock Garden — and that's
                    precisely its appeal. For travellers who've already
                    covered Chandigarh's headline sights, it's a calm,
                    genuinely different half-hour stop.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🌸</span> Garden of Fragrance at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "Location", value: "Sector 36, Chandigarh" },
                        { icon: "🌿", label: "Theme", value: "Aromatic & fragrant plants" },
                        { icon: "♿", label: "Notable For", value: "Accessible design, Braille signage" },
                        { icon: "🎟️", label: "Entry", value: "Free / nominal" },
                        { icon: "⏰", label: "Time Needed", value: "20–30 min" },
                        { icon: "🌡️", label: "Best Season", value: "Oct – Mar" },
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
                  <h2>Best Time to Visit</h2>
                  <p>
                    Cooler, drier months make for both a more pleasant walk
                    and stronger fragrance from the plantings.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best season",
                        text: "Comfortable temperatures and the strongest fragrant blooms, without the midday heat that dulls scent elsewhere in the year.",
                      },
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best time of day",
                        text: "Cooler air carries scent better, and the garden is at its quietest — ideal if you want an unhurried, contemplative visit.",
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
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach the Garden of Fragrance</h2>
                  <p>
                    Sector 36 sits a little further from the main tourist
                    cluster around Sector 1 and Sector 16, so plan it as a
                    deliberate stop rather than something you'll pass by
                    accident.
                  </p>
                  <ul>
                    <li>
                      <strong>By Auto/Cab:</strong> The simplest option —
                      Sector 36 is well within the city's auto and app-cab
                      network.
                    </li>
                    <li>
                      <strong>Combine with a South Chandigarh loop:</strong>{" "}
                      Pair it with other Sector 30-40 range stops if you're
                      exploring beyond the central sectors.
                    </li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Because it's small and a bit
                    out of the way, visit it as an add-on to another Sector
                    30s errand or stop rather than a dedicated round trip.
                  </div>
                </section>

                <section id="accessibility">
                  <h2>Designed for Accessibility</h2>
                  <p>
                    What sets the Garden of Fragrance apart from
                    Chandigarh's other gardens is its deliberate design for
                    visually impaired visitors. Plantings and signage are
                    arranged so that flowers and herbs can be identified by
                    scent and touch, with information available in Braille
                    in parts of the garden — a genuinely thoughtful piece of
                    inclusive public design that's easy to miss if you're
                    not looking for it.
                  </p>
                </section>

                <section id="what-to-see">
                  <h2>What's Inside</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Aromatic flowering plants along a garden path, evoking the Garden of Fragrance's scent-led design in Chandigarh"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The garden is organised into small plots of aromatic
                    and fragrant plant varieties, laid out along short
                    walking paths rather than the wide, open lawns typical
                    of Chandigarh's bigger gardens. There's no grand
                    centrepiece — the point is a slower, sensory walk rather
                    than a single photo-worthy view, which is exactly why
                    it rewards visitors willing to slow down.
                  </p>
                </section>

                <section id="nearby-gardens">
                  <h2>Other Quiet Gardens Nearby</h2>
                  <p>
                    If the Garden of Fragrance's slower pace appeals to you,
                    Chandigarh has a handful of similarly under-the-radar
                    green spaces worth combining it with:
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                          Leisure Valley
                        </Link>
                      </strong>{" "}
                      — the green belt that links several of the city's
                      named gardens together.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/terraced-garden-chandigarh-travel-guide">
                          Terraced Garden
                        </Link>
                      </strong>{" "}
                      — a stepped garden design, similarly quiet and
                      lesser-visited.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/bougainvillea-garden-chandigarh-travel-guide">
                          Bougainvillea Garden
                        </Link>
                      </strong>{" "}
                      — busier and more colourful, but a natural pairing if
                      you want one quiet and one vivid stop in the same
                      outing.
                    </li>
                  </ul>
                </section>

                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <p>
                    A single, unhurried loop through the garden's paths
                    takes 20-30 minutes — enough time to slow down and
                    actually notice the plantings rather than rush through.
                    Pair it with one more Sector 30s stop, or treat it as a
                    calm bookend to a longer day that started at{" "}
                    <Link href="/blog/rock-garden-chandigarh-travel-guide">
                      Rock Garden
                    </Link>{" "}
                    or the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>
                    .
                  </p>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Entry", "Free / nominal", "Free / nominal", "Free / nominal"],
                          ["Transport to/from", "₹40 (auto shared)", "₹150 (auto)", "₹400 (cab)"],
                          ["Total (approx.)", "₹40", "₹150", "₹400"],
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
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Go slow:</strong> This isn't a garden built
                      for a quick photo — the point is a slower, sensory
                      walk.
                    </li>
                    <li>
                      <strong>Visit in cooler months:</strong> Fragrance is
                      strongest and the walk most comfortable Oct-Mar.
                    </li>
                    <li>
                      <strong>Pair it with another Sector 30s stop:</strong>{" "}
                      It's a bit out of the way on its own.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Visit in cooler months for the strongest fragrance",
                          "Slow down and walk it unhurried",
                          "Combine it with a nearby Sector 30s stop",
                          "Go early morning for the quietest visit",
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
                          "Expect Rose Garden-scale grandeur",
                          "Make it a dedicated round trip on its own",
                          "Visit at peak summer midday",
                          "Rush through in a few minutes",
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
                {["Garden of Fragrance", "Sector 36", "Chandigarh", "Off-beat", "Accessible Garden"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="garden-of-fragrance-chandigarh-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="garden-of-fragrance-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
