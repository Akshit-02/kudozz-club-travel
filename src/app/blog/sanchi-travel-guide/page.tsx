// src/app/blog/sanchi-travel-guide/page.tsx
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
  title: "Sanchi Stupa Travel Guide: Buddhist Monuments & History",
  description:
    "The complete Sanchi travel guide — the Great Stupa built by Emperor Ashoka, the carved toranas, Stupa No. 2 and No. 3, the Ashoka Pillar, how to reach from Bhopal, a day-trip itinerary, and budget breakdown for India's oldest surviving stone monument.",
  keywords:
    "Sanchi travel guide, Sanchi Stupa, Great Stupa Sanchi, Ashoka Sanchi, Sanchi toranas, Buddhist monuments Madhya Pradesh, Sanchi UNESCO, how to reach Sanchi from Bhopal, Sanchi day trip, Sanchi Bhimbetka itinerary, Sanchi Archaeological Museum, best time to visit Sanchi",
  openGraph: {
    title: "Sanchi Stupa Travel Guide: Buddhist Monuments & History",
    description:
      "The oldest stone structure in India still standing, and one of Buddhism's most important surviving monument complexes — the complete guide to Sanchi.",
    url: "https://club.kudozz.in/blog/sanchi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient stone stupa architecture, representative of Sanchi, Madhya Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanchi Stupa Travel Guide: Buddhist Monuments & History",
    description:
      "Emperor Ashoka's Great Stupa and its intricately carved gateways — the complete guide to Sanchi.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/sanchi-travel-guide" },
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
          headline: "Sanchi Stupa Travel Guide: Buddhist Monuments & History",
          description:
            "The complete guide to the Sanchi Stupa complex, a UNESCO World Heritage Site of Ashokan-era Buddhist monuments in Madhya Pradesh.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/sanchi-travel-guide" },
          about: {
            "@type": "Place",
            name: "Sanchi",
            address: { "@type": "PostalAddress", addressRegion: "Madhya Pradesh", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Sanchi Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How much time do I need at Sanchi?",
    a: "Half a day is enough to see the Great Stupa complex, the smaller stupas, the Ashoka Pillar remains, and the site museum at an unhurried pace. Most visitors combine it with Bhimbetka as a single-day trip from Bhopal.",
  },
  {
    q: "Is the Sanchi Stupa really the oldest stone structure in India?",
    a: "The core of the Great Stupa, commissioned by Emperor Ashoka in the 3rd century BCE, is widely cited as one of the oldest surviving stone structures in India. It was later expanded — including the famous carved gateways — over subsequent centuries.",
  },
  {
    q: "How do I reach Sanchi from Bhopal?",
    a: "Sanchi is about 45–55 km from Bhopal, roughly a 1 to 1.5-hour drive by road. Sanchi also has its own small railway station, though most travellers do it as a day trip by car or taxi from Bhopal.",
  },
  {
    q: "What is the best time to visit Sanchi?",
    a: "October to March is best — comfortable temperatures for walking the open stupa complex. Summers (April–June) get hot for an extended outdoor visit.",
  },
  {
    q: "Why doesn't the carving at Sanchi show the Buddha directly?",
    a: "Sanchi's earliest carvings follow an early Buddhist artistic convention of representing the Buddha through symbols — the wheel (dharma), the lotus, footprints, and the Bodhi tree — rather than a human figure. This makes Sanchi valuable for tracing how Buddhist iconography evolved over time.",
  },
  {
    q: "Can Sanchi and Bhimbetka be combined in one day?",
    a: "Yes, and it's the most common way to visit both — they're roughly on the same side of Bhopal, and each only needs a few hours, making a single-day loop from Bhopal practical.",
  },
  {
    q: "What is the budget for a trip to Sanchi?",
    a: "As a day trip from Bhopal, expect to spend roughly ₹800–₹1,500 for a full day covering car hire, entry fees, and food — there's no need for an overnight stay unless you're combining it with a wider Madhya Pradesh itinerary.",
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
  { id: "introduction", title: "Why Sanchi?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "attractions", title: "The Monuments", level: 2 },
  { id: "itinerary", title: "Day-Trip Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SANCHI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a half-day at an open archaeological site",
    emoji: "☸️",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "The Great Stupa's raised platform and surrounding paths involve stone steps and uneven ground — comfortable shoes make the visit far more pleasant.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "6.8k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Site-visit essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The circumambulation path around the Great Stupa is stone-paved and uneven in places.",
      },
      {
        name: "Wide-Brim Sun Hat",
        description: "Sanchi's hilltop setting has minimal shade across the open stupa grounds.",
        price: "₹399",
        rating: 4.3,
        reviews: "3.9k",
        image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"),
        tag: "Sun essential",
        tagColor: "bg-orange-100 text-orange-700",
        why: "The stupa complex sits on an open hilltop with very little natural shade even in cooler months.",
      },
      {
        name: "Camera with Zoom Lens",
        description: "The carved toranas (gateways) hold fine relief detail worth capturing up close without climbing on the structures.",
        price: "₹—",
        rating: 4.4,
        reviews: "3.1k",
        image: "📷",
        affiliateUrl: amazonSearchUrl("mirrorless+camera+zoom+lens+travel"),
        tag: "Photography essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "The torana carvings sit at height and reward a zoom lens more than a phone camera.",
      },
      {
        name: "1L Water Bottle",
        description: "A half-day visit in open sun still calls for hydration, especially outside the cooler winter months.",
        price: "₹349",
        rating: 4.4,
        reviews: "5.1k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("1l+water+bottle+travel"),
        tag: "Site essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "There's limited shade and few refreshment points directly at the stupa grounds.",
      },
      {
        name: "Lightweight Daypack",
        description: "For water, camera gear, and any museum brochures picked up at the Sanchi Archaeological Museum.",
        price: "₹899",
        rating: 4.4,
        reviews: "4.6k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("lightweight+daypack+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Useful for the combined Sanchi–Bhimbetka day loop many travellers do from Bhopal.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SanchiGuidePage() {
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
              src="/images/destinations/hampi/hero.jpg"
              alt="Ancient stone stupa architecture, representative of Sanchi, Madhya Pradesh"
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
                { label: "Sanchi", href: null },
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
              {["Sanchi", "UNESCO", "Buddhist Heritage", "Ashoka", "Madhya Pradesh"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Sanchi Stupa Travel Guide: Buddhist Monuments & History
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The oldest stone structure in India still standing, and one of
              Buddhism's most important surviving monument complexes —
              everything you need to plan a visit.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Sanchi, Madhya Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,750 words" },
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
                  <h2>Why Sanchi?</h2>
                  <p>
                    On a low hill roughly 45 km from Bhopal stands one of the
                    most historically significant Buddhist monument
                    complexes anywhere — commissioned by Emperor{" "}
                    <strong>Ashoka</strong> in the 3rd century BCE, the core
                    of the <strong>Great Stupa (Stupa No. 1)</strong> is
                    widely cited as one of the oldest surviving stone
                    structures in India. What Ashoka built as a simple
                    hemispherical brick mound was later expanded over
                    centuries, most famously with four elaborately carved
                    stone gateways, or <em>toranas</em>, depicting scenes
                    from the Buddha's life and the Jataka tales.
                  </p>
                  <p>
                    A distinctive feature of Sanchi's earliest carving is
                    what it doesn't show: following an early Buddhist
                    artistic convention, the Buddha himself is never
                    directly depicted in human form, represented instead
                    through symbols — the dharma wheel, the lotus, the Bodhi
                    tree, footprints. It makes Sanchi a genuinely valuable
                    site for tracing how Buddhist art evolved over the
                    centuries that followed.
                  </p>
                  <p>
                    A UNESCO World Heritage Site, Sanchi is quieter and more
                    contemplative than better-known sites like Khajuraho or
                    Bhimbetka, despite comparable historical weight —
                    reachable easily as a half-day or day trip from Bhopal.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>☸️</span> Sanchi at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Madhya Pradesh, India" },
                        { icon: "☸️", label: "Key Site", value: "Great Stupa (Stupa No. 1)" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Bhopal (BHO), ~55 km" },
                        { icon: "🏛️", label: "Commissioned By", value: "Emperor Ashoka, 3rd c. BCE" },
                        { icon: "💰", label: "Day-Trip Budget", value: "₹800 – ₹1,500" },
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
                  <h2>Best Time to Visit Sanchi</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable weather for walking the open hilltop stupa complex without midday heat cutting the visit short." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot — visit early", text: "Temperatures climb sharply by late morning on the exposed hill — aim to arrive at opening time if visiting in this window." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — green, humid", text: "The surrounding countryside turns green and light for photography can be dramatic, but intermittent rain and humidity make an unhurried visit less comfortable." },
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
                    <strong>Our pick:</strong> November to February — the
                    most comfortable window for an unhurried morning at the
                    stupa complex, ideally combined with Bhimbetka in the
                    afternoon.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Sanchi</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Bhopal (BHO) is the nearest
                      airport, roughly 55 km away — about a 1 to 1.5-hour
                      drive to Sanchi.
                    </li>
                    <li>
                      <strong>By Train:</strong> Sanchi has its own small
                      railway station on the Bhopal–Vidisha line, though
                      most travellers still arrive by road from Bhopal.
                    </li>
                    <li>
                      <strong>By Road:</strong> The Bhopal–Sanchi drive is
                      the most common route, and easily combined with
                      Bhimbetka on the same day.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Hire a car or taxi for the
                    full day from Bhopal and combine Sanchi with Bhimbetka —
                    both are relatively short visits, and doing them
                    together saves a separate trip.
                  </div>
                </section>

                <section id="attractions">
                  <h2>The Monuments at Sanchi</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/hero.jpg"
                      alt="Ancient stupa architecture at Sanchi"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Great Stupa (Stupa No. 1):</strong> The
                      centerpiece — a hemispherical brick-and-stone mound
                      commissioned by Ashoka, later expanded with four
                      intricately carved gateways (toranas) depicting the
                      Buddha's life and Jataka tale narratives.
                    </li>
                    <li>
                      <strong>Stupa No. 2 & No. 3:</strong> Smaller stupas
                      nearby — Stupa No. 3 is said to hold relics of two of
                      the Buddha's chief disciples, Sariputra and
                      Maudgalyayana.
                    </li>
                    <li>
                      <strong>Ashoka Pillar:</strong> One of the famous
                      Ashokan pillars, now partially broken at the site, with
                      its well-preserved lion capital displayed in the
                      Sanchi Archaeological Museum nearby.
                    </li>
                    <li>
                      <strong>Sanchi Archaeological Museum:</strong> A small
                      site museum holding sculpture, inscriptions, and the
                      Ashoka Pillar's lion capital — worth a stop before or
                      after the stupa complex.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Day-Trip Itinerary</h2>
                  <p>
                    Sanchi is easily done as a half-day, and pairs naturally
                    with Bhimbetka as a single loop from Bhopal.
                  </p>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Sanchi Stupa Complex", color: "bg-amber-700", activities: ["Depart Bhopal early, ~1-1.5 hr drive", "Walk the Great Stupa and its four toranas", "Visit Stupa No. 2 and No. 3", "Stop at the Sanchi Archaeological Museum"] },
                      { day: "Afternoon", title: "Onward to Bhimbetka", color: "bg-forest-600", activities: ["Drive to Bhimbetka Rock Shelters", "Walk the developed section of the rock art trail", "Return to Bhopal by evening"] },
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
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Car/taxi hire (full day, Bhopal round trip)", "₹1,800", "₹3,000"],
                          ["Entry fees (Sanchi + Bhimbetka)", "₹700", "₹700"],
                          ["Food", "₹400", "₹900"],
                          ["Total for the day", "₹2,900", "₹4,600"],
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
                    * Figures are per group/car, not per person, and assume a
                    Bhopal-based day trip. Entry fees are approximate —
                    confirm current ASI rates locally before you go.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Sanchi</h2>
                  <ul>
                    <li><strong>Combine with Bhimbetka:</strong> Both sites are short visits and sit on roughly the same side of Bhopal — doing them together saves a repeat trip.</li>
                    <li><strong>Hire a guide at the site:</strong> The torana carvings depict specific Jataka tale narratives that are much richer with context.</li>
                    <li><strong>Visit the museum:</strong> The Ashoka Pillar's lion capital and other sculpture at the Sanchi Archaeological Museum add useful context before or after the stupa walk.</li>
                    <li><strong>Go early or late in the day:</strong> Best light for photography and the least amount of open-hilltop heat.</li>
                    <li><strong>Carry water:</strong> There's limited shade and few refreshment points at the stupa grounds.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Combine Sanchi with Bhimbetka in one day",
                          "Hire a guide for context on the torana carvings",
                          "Visit the Archaeological Museum",
                          "Go early morning or late afternoon for good light",
                          "Carry your own water",
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
                          "Skip the smaller Stupa No. 2 and No. 3",
                          "Visit at midday in peak summer heat",
                          "Expect much shade on the open hilltop",
                          "Rush the torana carvings without a guide's context",
                          "Plan a full overnight stay — it's usually a day trip",
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
                        <h4 className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>{f.q}</h4>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>{f.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Sanchi", "UNESCO", "Buddhist Heritage", "Madhya Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SANCHI_GEAR} destination="Sanchi" />

              <RelatedPostsGrid currentSlug="sanchi-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sanchi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
