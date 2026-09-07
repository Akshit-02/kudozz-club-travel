// src/app/blog/bhimbetka-travel-guide/page.tsx
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
  title: "Bhimbetka Rock Shelters: Prehistoric Cave Art Travel Guide",
  description:
    "The complete Bhimbetka travel guide — 700+ rock shelters with paintings up to 30,000 years old, the developed walking trail, how to reach from Bhopal, a day-trip itinerary, and budget breakdown for this UNESCO World Heritage prehistoric art site.",
  keywords:
    "Bhimbetka travel guide, Bhimbetka rock shelters, Bhimbetka cave paintings, Bhimbetka UNESCO, prehistoric rock art India, Bhimbetka Bhopal day trip, how to reach Bhimbetka, Bhimbetka Sanchi itinerary, Bhimbetka history, oldest rock art India, Vindhya hills rock shelters",
  openGraph: {
    title: "Bhimbetka Rock Shelters: Prehistoric Cave Art Travel Guide",
    description:
      "Painted rock shelters up to 30,000 years old, tucked into sandstone outcrops on the edge of the Vindhya hills — the complete guide to Bhimbetka.",
    url: "https://club.kudozz.in/blog/bhimbetka-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/spiti-valley/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Sandstone rock outcrops, representative of the Bhimbetka Rock Shelters, Madhya Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhimbetka Rock Shelters: Prehistoric Cave Art Travel Guide",
    description:
      "Over 700 painted rock shelters spanning tens of thousands of years of human history — the complete guide to Bhimbetka.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/bhimbetka-travel-guide" },
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
          headline: "Bhimbetka Rock Shelters: Prehistoric Cave Art Travel Guide",
          description:
            "The complete guide to the Bhimbetka Rock Shelters, a UNESCO World Heritage prehistoric art site in Madhya Pradesh.",
          image: "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/bhimbetka-travel-guide" },
          about: {
            "@type": "Place",
            name: "Bhimbetka Rock Shelters",
            address: { "@type": "PostalAddress", addressRegion: "Madhya Pradesh", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Bhimbetka Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How old are the Bhimbetka cave paintings?",
    a: "Estimates for the oldest paintings run to the Upper Paleolithic era — some researchers date certain shelters at 30,000 years old or more, with later layers spanning the Mesolithic through into historical periods, making Bhimbetka one of the longest continuous records of prehistoric art anywhere.",
  },
  {
    q: "How many rock shelters can visitors actually see?",
    a: "Of the more than 700 identified shelters across the site, only around 15 are developed with a marked walking trail open to the public. The rest are protected or not accessible to general visitors.",
  },
  {
    q: "How do I reach Bhimbetka from Bhopal?",
    a: "Bhimbetka is roughly 45 km from Bhopal, about a 1 to 1.5-hour drive by road. Most travellers visit as a day trip, often combined with Sanchi on the same loop.",
  },
  {
    q: "What is the best time to visit Bhimbetka?",
    a: "October to March is ideal — comfortable temperatures for walking the rocky, uneven trail between shelters. Summer heat and monsoon rain both make the walk less pleasant.",
  },
  {
    q: "Why is it called Bhimbetka?",
    a: "The name is popularly linked to Bhima, one of the five Pandava brothers from the Mahabharata — local legend holds the site takes its name from him, though the paintings themselves predate the epic by tens of thousands of years.",
  },
  {
    q: "Can I combine Bhimbetka with Sanchi in one day?",
    a: "Yes — both are relatively quick visits and sit on roughly the same side of Bhopal, making a combined day trip the most common way travellers see both sites.",
  },
  {
    q: "What is the budget for a visit to Bhimbetka?",
    a: "As part of a Bhopal-based day trip, expect roughly ₹800–₹1,500 covering car hire, entry fees, and food for the day — no overnight stay is typically needed.",
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
  { id: "introduction", title: "Why Bhimbetka?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "attractions", title: "What You'll See", level: 2 },
  { id: "itinerary", title: "Day-Trip Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BHIMBETKA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a rocky, uneven prehistoric-art trail",
    emoji: "🎨",
    items: [
      {
        name: "Sturdy Trekking/Walking Shoes",
        description:
          "The developed trail winds over natural rock surfaces and uneven stone steps between shelters — this is not a paved museum walkway.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "6.8k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("sturdy+trekking+walking+shoes"),
        tag: "Trail essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Loose gravel and natural rock surfaces on the trail make good grip genuinely important, unlike a typical paved heritage site.",
      },
      {
        name: "Wide-Brim Sun Hat",
        description: "Large stretches of the trail between rock shelters are exposed to direct sun with little tree cover.",
        price: "₹399",
        rating: 4.3,
        reviews: "3.9k",
        image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"),
        tag: "Sun essential",
        tagColor: "bg-orange-100 text-orange-700",
        why: "The rocky outcrop terrain offers patchy shade at best across the walking trail.",
      },
      {
        name: "Camera with Good Zoom",
        description: "The paintings sit at varying heights inside shelter overhangs — a zoom lens captures detail without needing to get too close.",
        price: "₹—",
        rating: 4.4,
        reviews: "3.1k",
        image: "📷",
        affiliateUrl: amazonSearchUrl("mirrorless+camera+zoom+lens+travel"),
        tag: "Photography essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Fine painting detail is easy to miss at a distance without a zoom, and flash may be restricted near the art.",
      },
      {
        name: "1L Water Bottle",
        description: "There are no shops or refreshment stalls along the walking trail itself.",
        price: "₹349",
        rating: 4.4,
        reviews: "5.1k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("1l+water+bottle+travel"),
        tag: "Trail essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Once you're on the rock-shelter trail, there's no way to buy water until you're back at the entrance.",
      },
      {
        name: "Trekking Pole (optional)",
        description: "Useful for anyone less confident on uneven rock surfaces, particularly on the steeper connecting sections of trail.",
        price: "₹699",
        rating: 4.2,
        reviews: "1.8k",
        image: "🦯",
        affiliateUrl: amazonSearchUrl("trekking+pole+lightweight"),
        tag: "Comfort essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Some sections of the trail have a genuine incline over irregular rock — a pole adds stability for less confident walkers.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BhimbetkaGuidePage() {
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
              src="/images/destinations/spiti-valley/spiti-valley.jpg"
              alt="Sandstone rock outcrops, representative of the Bhimbetka Rock Shelters, Madhya Pradesh"
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
                { label: "Bhimbetka", href: null },
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
              {["Bhimbetka", "UNESCO", "Rock Art", "Prehistoric", "Madhya Pradesh"].map((tag) => (
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
              Bhimbetka Rock Shelters: Prehistoric Cave Art Travel Guide
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Painted rock shelters up to 30,000 years old, tucked into
              sandstone outcrops on the edge of the Vindhya hills —
              everything you need to plan a visit.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Raisen District, Madhya Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,650 words" },
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
                  <h2>Why Bhimbetka?</h2>
                  <p>
                    On the edge of the Vindhya hills, roughly 45 km south of
                    Bhopal, a cluster of sandstone outcrops holds one of the
                    most important prehistoric art sites in the world. The{" "}
                    <strong>Bhimbetka Rock Shelters</strong> comprise over
                    700 identified rock shelters, with paintings spanning an
                    extraordinary stretch of time — some estimated to date
                    to the Upper Paleolithic, 30,000 years old or more,
                    through the Mesolithic and into more recent historical
                    periods.
                  </p>
                  <p>
                    The paintings themselves show hunting scenes, dancing and
                    ceremonial figures, and animals — bison, tigers,
                    elephants, deer — layered across generations of use, with
                    later paintings reflecting the arrival of horses and
                    metal weapons, giving the site a visible chronological
                    depth rare among rock-art locations anywhere. The name{" "}
                    <em>Bhimbetka</em> is popularly linked to Bhima of the
                    Mahabharata in local legend, though the art itself
                    predates the epic by an enormous margin.
                  </p>
                  <p>
                    A UNESCO World Heritage Site, Bhimbetka is compact
                    enough to see in half a day and pairs naturally with
                    Sanchi as a single loop from Bhopal.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🎨</span> Bhimbetka at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Madhya Pradesh, India" },
                        { icon: "🎨", label: "Rock Shelters", value: "700+ (≈15 open to visitors)" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Bhopal (BHO), ~45 km" },
                        { icon: "🕰️", label: "Oldest Paintings", value: "Up to ~30,000 years" },
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
                  <h2>Best Time to Visit Bhimbetka</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable temperatures make the uneven, exposed rock-shelter trail far more manageable than in the heat." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot — visit early", text: "Sun-exposed rock surfaces heat up quickly by mid-morning — go early if visiting in this window." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — slippery rock", text: "Wet rock surfaces on the trail can be genuinely slippery — comfortable but requires extra caution underfoot." },
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
                    <strong>Our pick:</strong> November to February —
                    comfortable temperatures and dry, stable footing on the
                    trail between shelters.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Bhimbetka</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Bhopal (BHO) is the nearest
                      airport, roughly 45 km away — about a 1 to 1.5-hour
                      drive to Bhimbetka.
                    </li>
                    <li>
                      <strong>By Road:</strong> Nearly all visitors arrive by
                      car or taxi from Bhopal, often as one leg of a combined
                      day trip with Sanchi.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Hire a local ASI guide at
                    the entrance — the developed trail passes numerous
                    shelters, and a guide will point out painting detail
                    that's easy to miss walking through alone.
                  </div>
                </section>

                <section id="attractions">
                  <h2>What You'll See at Bhimbetka</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/spiti-valley/spiti-valley.jpg"
                      alt="Rocky sandstone terrain representative of the Bhimbetka trail"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>The developed walking trail:</strong> A marked
                      path connecting around 15 of the site's 700+ rock
                      shelters — the rest are protected or otherwise
                      inaccessible to general visitors.
                    </li>
                    <li>
                      <strong>Hunting and ceremonial scenes:</strong> Painted
                      figures shown hunting, dancing, and in group scenes —
                      among the most striking imagery on the trail.
                    </li>
                    <li>
                      <strong>Animal paintings:</strong> Bison, tigers,
                      elephants, and deer feature heavily, rendered in the
                      distinctive red and white pigments characteristic of
                      the site.
                    </li>
                    <li>
                      <strong>Chronological layering:</strong> Later
                      paintings at some shelters show horses and metal
                      weapons, a visible marker of how much time separates
                      the earliest and most recent layers of art here.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Day-Trip Itinerary</h2>
                  <p>
                    Bhimbetka is compact enough to see in two to three
                    hours, making it a natural pairing with Sanchi as a
                    single day trip from Bhopal.
                  </p>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Bhimbetka Rock Shelters", color: "bg-amber-700", activities: ["Depart Bhopal early, ~1-1.5 hr drive", "Hire a local guide at the entrance", "Walk the developed rock-shelter trail", "Take time at the more detailed painting clusters"] },
                      { day: "Afternoon", title: "Onward to Sanchi", color: "bg-forest-600", activities: ["Drive to the Sanchi Stupa complex", "Walk the Great Stupa and toranas", "Visit the Sanchi Archaeological Museum", "Return to Bhopal by evening"] },
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
                          ["Entry fees (Bhimbetka + Sanchi)", "₹700", "₹700"],
                          ["Local guide", "₹300", "₹500"],
                          ["Food", "₹400", "₹900"],
                          ["Total for the day", "₹3,200", "₹5,100"],
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
                    Bhopal-based day trip combined with Sanchi. Entry fees
                    are approximate — confirm current rates locally before
                    you go.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Bhimbetka</h2>
                  <ul>
                    <li><strong>Hire a local ASI guide:</strong> Available at the entrance, and genuinely helpful for spotting and contextualising the paintings along the trail.</li>
                    <li><strong>Wear proper walking shoes:</strong> The trail crosses natural rock surfaces, not a paved path.</li>
                    <li><strong>Combine with Sanchi:</strong> Both sites are quick visits on roughly the same side of Bhopal.</li>
                    <li><strong>Photography rules vary:</strong> Flash may be restricted near some paintings — check with your guide and avoid touching the rock surfaces.</li>
                    <li><strong>Carry water:</strong> There are no shops along the trail itself.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Hire a local guide at the entrance",
                          "Wear proper walking or trekking shoes",
                          "Combine the visit with Sanchi",
                          "Carry your own water",
                          "Take time at the more detailed painting clusters",
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
                          "Touch the painted rock surfaces",
                          "Visit in sandals given the uneven natural trail",
                          "Skip the guide and miss the historical context",
                          "Visit at midday in peak summer without shade breaks",
                          "Expect to see all 700+ shelters — most are restricted",
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
                {["Bhimbetka", "UNESCO", "Rock Art", "Madhya Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BHIMBETKA_GEAR} destination="Bhimbetka" />

              <RelatedPostsGrid currentSlug="bhimbetka-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="bhimbetka-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
