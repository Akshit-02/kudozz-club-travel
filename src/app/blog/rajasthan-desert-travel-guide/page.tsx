// src/app/blog/rajasthan-desert-travel-guide/page.tsx
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
  title: "Jaisalmer & Thar Desert Travel Guide: Fort, Camel Safari & Tips",
  description:
    "The complete Jaisalmer travel guide. Everything you need — Jaisalmer Fort, Sam Sand Dunes camel safari, havelis, desert camping, where to stay, what to eat, and a complete 4-day itinerary through the golden city of the Thar Desert.",
  keywords:
    "Jaisalmer travel guide, Jaisalmer Fort, Sam Sand Dunes, Thar Desert camel safari, Jaisalmer havelis, Khuri desert camp, Rajasthan desert tour, Jaisalmer itinerary, Patwon ki Haveli, Kuldhara ghost village",
  openGraph: {
    title: "Jaisalmer & Thar Desert Travel Guide: Fort, Camel Safari & Tips",
    description:
      "A living medieval fort rising from the Thar Desert, camel safaris into the dunes and the most spectacular havelis in Rajasthan — the complete guide to Jaisalmer.",
    url: "https://club.kudozz.in/blog/rajasthan-desert-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/related/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Jaisalmer Fort rising from the golden Thar Desert at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaisalmer & Thar Desert Travel Guide",
    description:
      "The golden city, camel safaris, and the Thar Desert — the complete guide to Jaisalmer.",
    images: ["/images/related/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/rajasthan-desert-travel-guide",
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
          headline:
            "Jaisalmer & Thar Desert Travel Guide: Fort, Camel Safari & Tips",
          description: "The complete Jaisalmer travel guide.",
          image: "https://club.kudozz.in/images/related/leh-ladakh.jpg",
          datePublished: "2026-06-30",
          dateModified: "2026-07-12",
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
            "@id": "https://club.kudozz.in/blog/rajasthan-desert-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Jaisalmer",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Rajasthan",
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
                name: "Jaisalmer Travel Guide",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Jaisalmer?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jaisalmer", level: 2 },
  { id: "jaisalmer-fort", title: "Jaisalmer Fort — The Golden Fort", level: 2 },
  { id: "havelis", title: "The Havelis", level: 2 },
  { id: "patwon-haveli", title: "→ Patwon ki Haveli", level: 3 },
  {
    id: "nathmal-salim",
    title: "→ Nathmal ki Haveli & Salim Singh ki Haveli",
    level: 3,
  },
  { id: "lakes-temples", title: "Lakes & Temples", level: 2 },
  { id: "gadisar", title: "→ Gadisar Lake", level: 3 },
  { id: "jain-temples", title: "→ Jain Temples", level: 3 },
  { id: "thar-desert", title: "The Thar Desert", level: 2 },
  { id: "sam-dunes", title: "→ Sam Sand Dunes", level: 3 },
  { id: "khuri-dunes", title: "→ Khuri Dunes", level: 3 },
  { id: "camel-safari", title: "Camel Safari — Complete Guide", level: 2 },
  { id: "desert-camping", title: "Desert Camping", level: 2 },
  { id: "kuldhara", title: "Kuldhara — The Ghost Village", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "4-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Desert-specific gear ───────────────────────────────────────────────────────
const DESERT_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the fort, the dunes, and the desert nights",
    emoji: "🐪",
    items: [
      {
        name: "Lightweight Cotton Scarf / Stole (Bandhani Print)",
        description:
          "Essential for the dunes — wraps around your head and face to block blowing sand during camel rides and protects your neck from the desert sun. Also doubles as a fort-temple head covering.",
        price: "₹399",
        rating: 4.5,
        reviews: "4.1k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("cotton+scarf+stole+desert+travel"),
        tag: "Desert essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Sand blows constantly on the dunes — wrapped properly, a scarf keeps it out of your eyes, nose, and mouth during the camel ride. Locals wear them for exactly this reason.",
      },
      {
        name: "Insulated Water Bottle (1L)",
        description:
          "Desert days swing from 38°C+ to near-freezing nights — an insulated bottle keeps water cool during the camel safari and hot tea warm at the desert camp in the evening.",
        price: "₹699",
        rating: 4.5,
        reviews: "11.3k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+1L+travel"),
        tag: "Extreme temperature swing",
        tagColor: "bg-sky-100 text-sky-700",
        why: "The Thar's day-night temperature swing is one of the most extreme in India. One bottle that keeps water cold at noon and your chai hot at midnight is genuinely useful.",
      },
      {
        name: "Warm Layer / Lightweight Down Jacket",
        description:
          "Desert nights, even in winter peak season, drop to 5–10°C — and a sudden chill after a hot day catches most visitors off guard at the camp. A packable down jacket weighs almost nothing.",
        price: "₹2,999",
        rating: 4.6,
        reviews: "5.8k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl(
          "packable+down+jacket+lightweight+travel",
        ),
        tag: "Desert night chill",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Visitors arrive prepared for desert heat and are blindsided by how cold the dunes get after sunset. A packable down jacket takes no space and solves this completely.",
      },
      {
        name: "UV Protection Sunglasses (Wraparound)",
        description:
          "Sand and sun glare off the dunes is intense — wraparound style sunglasses block peripheral light and sand far better than standard frames during the camel ride and dune walks.",
        price: "₹899",
        rating: 4.3,
        reviews: "3.4k",
        image: "🕶️",
        affiliateUrl: amazonSearchUrl("wraparound+sunglasses+UV+protection"),
        tag: "Sand + sun glare",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Standard sunglasses let sand and side-glare in around the edges. Wraparound frames are what desert guides actually wear, and there's a reason.",
      },
      {
        name: "Lip Balm with SPF",
        description:
          "Desert air is extraordinarily dry — combined with sun and wind exposure on a camel safari, lips crack within hours without protection. A small, cheap, easily forgotten essential.",
        price: "₹199",
        rating: 4.4,
        reviews: "8.9k",
        image: "💄",
        affiliateUrl: amazonSearchUrl("lip+balm+SPF+travel"),
        tag: "Easy to forget",
        tagColor: "bg-red-100 text-red-700",
        why: "The combination of dry desert wind and direct sun cracks lips faster than almost anywhere else in India. At ₹200, there's no excuse to skip this.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Desert camps run on generators with limited charging windows, and phone batteries drain faster in heat. A reliable power bank means your phone, camera, and torch stay charged through the overnight camp.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Camp essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Most desert camps have generator power for only a few hours each evening. A power bank ensures you're not stuck with a dead phone for your sunrise photos.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RajasthanDesertGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jaisalmer/hero.jpg"
              alt="Jaisalmer Fort glowing golden above the Thar Desert at sunset"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          {/* Breadcrumbs */}
          <nav
            className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10"
            aria-label="Breadcrumb"
          >
            <ol
              className="flex items-center gap-2 text-xs text-white/55"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Rajasthan", href: "/blog?category=rajasthan" },
                { label: "Jaisalmer", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/35">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && (
                    <span className="text-white/20">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Jaisalmer",
                "Rajasthan",
                "Thar Desert",
                "Camel Safari",
                "Heritage",
                "Havelis",
              ].map((tag) => (
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
              Jaisalmer & Thar Desert Travel Guide: Fort, Camel Safari & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A living medieval fort rising from golden sandstone, camel safaris
              into rolling dunes, and havelis carved with a delicacy that defies
              the harshness of the desert around them — Jaisalmer is Rajasthan
              at its most cinematic.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "15 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Jaisalmer, Rajasthan",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,500 words",
                },
              ].map((m) => (
                <span
                  key={m.text}
                  className="flex items-center gap-1.5 text-sm text-white/55"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.d}
                    />
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
            {/* LEFT — TOC */}
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            {/* CENTER — Article */}
            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                {/* ── Introduction ──────────────────────────────────────── */}
                <section id="introduction">
                  <h2>Why Jaisalmer?</h2>
                  <p>
                    Most Indian forts are monuments — empty stone shells you
                    walk through, photograph, and leave.{" "}
                    <strong>Jaisalmer Fort</strong> is different. It is one of
                    the very few "living forts" left in the world — roughly a
                    quarter of Jaisalmer's old city population still lives,
                    sleeps, cooks, prays, and runs shops within its walls,
                    exactly as they have for nearly 900 years. Walking through
                    it isn't visiting history. It's walking through someone's
                    home.
                  </p>
                  <p>
                    Built in 1156 CE by the Rajput ruler Rawal Jaisal, the fort
                    rises 76 metres above the surrounding Thar Desert on Trikuta
                    Hill, its honey-coloured sandstone glowing intensely gold at
                    sunrise and sunset — the reason Jaisalmer is universally
                    called the
                    <strong> Golden City</strong>. Inside its 99 bastions lie
                    temples, palaces, narrow lanes, and havelis carved with a
                    stone lacework so intricate it seems impossible that human
                    hands produced it without power tools.
                  </p>
                  <p>
                    But Jaisalmer is also the gateway to the
                    <strong> Thar Desert</strong> — one of the most densely
                    populated deserts on earth, where camel safaris carry
                    travellers into rolling dunes for sunset views and overnight
                    camps under skies with almost no light pollution. The
                    combination — medieval fort city by day, desert immersion by
                    evening — makes Jaisalmer one of the most complete travel
                    experiences in Rajasthan.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Jaisalmer at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Rajasthan, India",
                        },
                        { icon: "🏰", label: "Fort built", value: "1156 CE" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Jaisalmer (JSA)",
                        },
                        { icon: "🐪", label: "Desert", value: "Thar Desert" },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹5,000",
                        },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">
                            {icon} {label}
                          </span>
                          <span className="text-stone-800 font-medium">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── Best Time ─────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit Jaisalmer</h2>
                  <p>
                    Jaisalmer sits in one of the hottest regions of India —
                    temperatures here are extreme in both directions, and timing
                    your visit correctly is essential for comfort.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Daytime temperatures 20–28°C, cool desert nights (5–15°C), perfect for camel safaris and fort exploration. December–January is the peak season — book accommodation and camel safaris 3–4 weeks ahead. The Jaisalmer Desert Festival runs in February.",
                      },
                      {
                        season: "Mar – Apr",
                        emoji: "🌤️",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Shoulder season — manageable",
                        text: "Temperatures rise into the low-to-mid 30s°C by April. Mornings and evenings are still pleasant for camel rides and fort walks. Crowds thin noticeably after February, and accommodation rates drop. Good value for those who can handle daytime heat.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🔥",
                        color: "bg-red-50 border-red-200",
                        mood: "Extreme heat — avoid",
                        text: "Jaisalmer regularly hits 45–48°C in peak summer — among the hottest temperatures recorded in India. Camel safaris are genuinely dangerous in midday heat. Most desert camps reduce operations. Only for those with no other choice of dates.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — minimal but transformative",
                        text: "The Thar receives very little rain even in monsoon, but what falls transforms the desert dramatically — sparse green vegetation appears briefly, and the usually stark landscape softens. Heat remains high (35–40°C) but humidity is lower than coastal India.",
                      },
                    ].map((s) => (
                      <div
                        key={s.season}
                        className={`${s.color} border rounded-xl p-5`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span
                            className="font-bold text-stone-800 text-sm"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {s.season}
                          </span>
                        </div>
                        <span
                          className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">
                          {s.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <blockquote>
                    <strong>Our pick:</strong> Late December to early February.
                    Crisp desert mornings, comfortable daytime fort exploration,
                    and genuinely magical camel safari evenings where the
                    temperature drops just enough to make a bonfire and blanket
                    feel earned rather than necessary survival gear. Time it
                    with the Desert Festival in February for an extra cultural
                    layer.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jaisalmer</h2>
                  <p>
                    Jaisalmer is remote relative to most Rajasthan destinations
                    — the journey itself, particularly by overnight train, is
                    part of the desert atmosphere building from the moment you
                    depart.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Jaisalmer Airport (JSA) has
                      limited but growing connectivity — seasonal direct flights
                      from Delhi (winter season primarily). Most travellers fly
                      into Jodhpur (JDH, 285 km, 5–6 hrs by road) which has far
                      better flight connectivity from major Indian cities, then
                      continue by train or road.
                    </li>
                    <li>
                      <strong>By Train (most popular):</strong> Jaisalmer
                      Railway Station is directly connected to Delhi (overnight,
                      ~17 hours via Jodhpur), Jodhpur (5–6 hours), and Jaipur
                      (12 hours). The overnight Delhi– Jaisalmer Express is the
                      classic approach — depart Delhi evening, arrive Jaisalmer
                      the following afternoon, watching the landscape transition
                      from farmland to desert through the train window.
                    </li>
                    <li>
                      <strong>By Road:</strong> Jaisalmer connects to Jodhpur
                      (285 km, 5–6 hrs) and Jaipur (550 km, 9–10 hrs) via
                      well-maintained highways. Rajasthan State Roadways (RSRTC)
                      buses and private operators run regular services from both
                      cities.
                    </li>
                    <li>
                      <strong>Classic Rajasthan circuit:</strong> Most visitors
                      combine Jaisalmer with Jodhpur and Jaipur as part of a
                      broader Rajasthan loop — Jodhpur to Jaisalmer (5–6 hrs by
                      road or train) makes a natural next stop after exploring
                      the Blue City.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Take the overnight train from
                    Jodhpur or Delhi rather than the day bus — you arrive
                    rested, save a night's accommodation, and the sleeper
                    experience through the Thar landscape (especially the final
                    stretch into Jaisalmer) is genuinely atmospheric.
                  </div>
                </section>

                {/* ── Jaisalmer Fort ────────────────────────────────────── */}
                <section id="jaisalmer-fort">
                  <h2>Jaisalmer Fort — The Golden Fort</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/fort.jpg"
                      alt="Jaisalmer Fort honey-coloured sandstone walls and bastions"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Known locally as <strong>Sonar Quila</strong> (Golden Fort),
                    Jaisalmer Fort is one of the very few forts in the world
                    that remains genuinely inhabited — roughly 3,000 people,
                    about a quarter of the old city, still live within its walls
                    in homes that have housed the same families for generations.
                    This living quality transforms the entire experience:
                    alongside palaces and temples you'll find functioning
                    grocery shops, schools, guesthouses, and people going about
                    ordinary life inside a 12th-century monument.
                  </p>
                  <p>
                    The fort's 99 bastions and double ramparts were built using
                    a distinctive interlocking technique without mortar in many
                    sections, and the entire structure was constructed from
                    local yellow sandstone, which is why the fort glows gold at
                    sunrise and an even more intense amber-red at sunset — the
                    single most photographed moment in Jaisalmer.
                  </p>
                  <ul>
                    <li>
                      <strong>Royal Palace (Raj Mahal):</strong> The
                      seven-storey former royal residence within the fort, now a
                      museum displaying weapons, royal artefacts, and exquisite
                      jharokha (overhanging balcony) architecture. Entry ₹50
                      (Indian), ₹500 (Foreign).
                    </li>
                    <li>
                      <strong>Jain Temples within the fort:</strong> Seven
                      interconnected Jain temples dating from the 12th–15th
                      centuries, with carving work that rivals the finest temple
                      architecture anywhere in India. Entry ₹50.
                    </li>
                    <li>
                      <strong>Laxminath Temple:</strong> An active Hindu temple
                      within the fort walls, dedicated to Lakshmi and Vishnu,
                      with a striking silver-plated doorway.
                    </li>
                    <li>
                      <strong>Fort viewpoints:</strong> The fort's western
                      ramparts offer the best sunset views over the old city —
                      find a quiet bastion away from the main tourist clusters
                      for an uninterrupted view.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Conservation crisis:</strong> Jaisalmer Fort is
                    on the World Monuments Fund's watch list — the increasing
                    weight and water usage from modern hotels and guesthouses
                    built inside the fort walls has caused serious structural
                    drainage issues. Consider staying in a heritage property
                    just outside the fort rather than inside it, and support the
                    "Save Jaisalmer Fort" conservation initiatives where
                    possible.
                  </div>
                </section>

                {/* ── Havelis ───────────────────────────────────────────── */}
                <section id="havelis">
                  <h2>The Havelis</h2>
                  <p>
                    Beyond the fort, Jaisalmer's old city is famous for its
                    <strong> havelis</strong> — ornate merchant mansions built
                    by wealthy traders who grew rich on the camel caravan trade
                    routes connecting India to Central Asia and the Middle East
                    before the rise of sea trade made the desert routes
                    obsolete. These havelis showcase some of the finest stone
                    carving anywhere in India.
                  </p>

                  <section id="patwon-haveli">
                    <h3>Patwon ki Haveli</h3>
                    <p>
                      <strong>Patwon ki Haveli</strong> is actually a cluster of
                      five havelis built between 1800–1860 by Guman Chand Patwa,
                      a wealthy trader in brocade and jewellery, for his five
                      sons. It is the largest and most elaborate haveli complex
                      in Jaisalmer — five-storey facades with intricately carved
                      jharokhas (projecting balcony windows), each one
                      different, creating a rhythm of stone lacework along the
                      narrow lane that's almost overwhelming in its detail.
                    </p>
                    <p>
                      One section is now a museum with period furniture and
                      artefacts; the rest remains privately owned, with some
                      sections converted into shops selling textiles and
                      antiques. The narrow alley the haveli sits on is one of
                      the most atmospheric spots in old Jaisalmer — arrive early
                      morning for photography before the street fills with
                      vendors and tourists.
                    </p>
                    <ul>
                      <li>
                        <strong>Entry:</strong> ₹100 (museum section)
                      </li>
                      <li>
                        <strong>Timings:</strong> 8 AM – 6 PM
                      </li>
                      <li>
                        <strong>Best for:</strong> Architecture photography,
                        understanding merchant-era wealth
                      </li>
                    </ul>
                  </section>

                  <section id="nathmal-salim">
                    <h3>Nathmal ki Haveli & Salim Singh ki Haveli</h3>
                    <p>
                      <strong>Nathmal ki Haveli</strong>, built in 1885 as the
                      residence of the prime minister of Jaisalmer, is notable
                      for an unusual quirk — it was constructed by two brothers
                      working from opposite ends simultaneously, without
                      coordinating designs, resulting in a building that is
                      almost but not quite symmetrical, with subtle differences
                      in the carving styles of each half that careful
                      observation reveals.
                    </p>
                    <p>
                      <strong>Salim Singh ki Haveli</strong>, built in the 18th
                      century, is distinguished by its unusual upper storey
                      design — the roof curves outward and is supported by
                      carved blue-grey brackets shaped like peacocks, said to
                      resemble a ship's stern. The structure was originally
                      intended to be even taller to match the height of the
                      maharaja's palace, but construction was halted by royal
                      order.
                    </p>
                  </section>
                </section>

                {/* ── Lakes & Temples ───────────────────────────────────── */}
                <section id="lakes-temples">
                  <h2>Lakes & Temples</h2>

                  <section id="gadisar">
                    <h3>Gadisar Lake</h3>
                    <p>
                      <strong>Gadisar Lake</strong> was built in 1156 CE, the
                      same year as the fort, as Jaisalmer's primary water
                      reservoir — an extraordinary feat of desert engineering
                      that sustained the city's water supply for centuries
                      before modern infrastructure. The lake is ringed by small
                      temples, chhatris (memorial pavilions), and the
                      magnificent Tilon ki Pol gateway — an ornate archway
                      built, according to local legend, by a courtesan who
                      funded its construction with her wealth, much to the
                      irritation of the maharaja who tried unsuccessfully to
                      have it removed.
                    </p>
                    <p>
                      Boat rides on the lake (₹100–₹200 for a paddle boat, more
                      for a motorboat) are particularly beautiful at sunset,
                      when the lake's temples and the fort silhouette beyond
                      turn gold and pink. The lake also attracts migratory birds
                      in winter, making early morning visits rewarding for
                      casual birdwatching.
                    </p>
                  </section>

                  <section id="jain-temples">
                    <h3>Jain Temples</h3>
                    <p>
                      Beyond the seven temples inside the fort, Jaisalmer's old
                      city has additional significant Jain temples that reflect
                      the historical importance of the Jain merchant community
                      to the city's wealth. The carving style — delicate,
                      intricate, almost lace-like in its detail — represents
                      some of the finest stone craftsmanship in Rajasthan,
                      comparable in quality (though smaller in scale) to the
                      famous Dilwara temples of Mount Abu.
                    </p>
                    <ul>
                      <li>
                        <strong>Entry:</strong> ₹50 (combined ticket usually
                        covers multiple temples)
                      </li>
                      <li>
                        <strong>Timings:</strong> 7 AM – 12 PM, 2 PM – 6 PM
                      </li>
                      <li>
                        <strong>Note:</strong> No leather items permitted inside
                        Jain temples — remove belts and leather bags before
                        entering
                      </li>
                    </ul>
                  </section>
                </section>

                {/* ── Thar Desert ───────────────────────────────────────── */}
                <section id="thar-desert">
                  <h2>The Thar Desert</h2>
                  <p>
                    The <strong>Thar Desert</strong> spans 200,000 sq km across
                    Rajasthan and into Pakistan — and despite being one of the
                    hottest deserts on earth, it's also one of the most densely
                    populated, supporting agriculture, livestock herding, and a
                    network of villages that have adapted to extreme aridity
                    over centuries. Most visitors experience it through two main
                    dune fields near Jaisalmer.
                  </p>

                  <section id="sam-dunes">
                    <h3>Sam Sand Dunes</h3>
                    <p>
                      About 42 km west of Jaisalmer,{" "}
                      <strong>Sam Sand Dunes</strong> is the most visited and
                      most developed desert area near the city — a stretch of
                      genuine rolling sand dunes (not all of the Thar is sandy;
                      much is rocky scrubland) that have become the default
                      sunset and camel safari destination for most visitors.
                    </p>
                    <p>
                      Sam has the advantage of accessibility and infrastructure
                      — dozens of established desert camps, reliable camel and
                      jeep safari operators, and easy day-trip logistics from
                      Jaisalmer. The trade-off is crowds, particularly around
                      sunset when tour buses arrive en masse. The dunes
                      themselves are genuinely beautiful, but don't expect
                      solitude during peak season evening hours.
                    </p>
                  </section>

                  <section id="khuri-dunes">
                    <h3>Khuri Dunes</h3>
                    <p>
                      About 40 km southwest of Jaisalmer,{" "}
                      <strong>Khuri Dunes</strong> offers a quieter, more
                      village-immersed alternative to Sam. Khuri is a small
                      traditional village with mud-and-thatch houses still in
                      active use, surrounded by dunes that are arguably more
                      photogenic than Sam's (taller, more sculptural) and
                      receive a fraction of the tourist traffic.
                    </p>
                    <p>
                      Desert camps around Khuri tend to be smaller, more
                      family-run, and offer a more genuine cultural immersion —
                      many include a village walk, opportunities to interact
                      with local Rajasthani families, and traditional folk music
                      performances that feel less manufactured than the larger
                      Sam operations.
                    </p>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> If you have to choose one, go
                      to Khuri instead of Sam — particularly if you're staying
                      overnight. The dunes are comparably beautiful, the crowds
                      are dramatically smaller, and the village experience adds
                      genuine cultural depth that Sam's more commercial
                      operations rarely match.
                    </div>
                  </section>
                </section>

                {/* ── Camel Safari ──────────────────────────────────────── */}
                <section id="camel-safari">
                  <h2>Camel Safari — Complete Guide</h2>
                  <p>
                    The camel safari is the signature Thar Desert experience —
                    and understanding the options properly makes a real
                    difference to how memorable it is.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {[
                            "Safari Type",
                            "Duration",
                            "Price (per person)",
                            "Best for",
                          ].map((h) => (
                            <th
                              key={h}
                              className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          [
                            "Sunset only",
                            "2–3 hours",
                            "₹500–₹800",
                            "Day trippers, short stays",
                          ],
                          [
                            "Overnight (1 night)",
                            "Afternoon–morning",
                            "₹2,000–₹4,000",
                            "Most popular, full desert experience",
                          ],
                          [
                            "2 nights / 3 days",
                            "Multi-day trek",
                            "₹4,500–₹8,000",
                            "Serious desert immersion, remote villages",
                          ],
                          [
                            "Jeep + short camel",
                            "Half day",
                            "₹1,500–₹2,500",
                            "Limited time, combines transport + dune walk",
                          ],
                        ].map((row, i) => (
                          <tr
                            key={row[0]}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            {row.map((cell, j) => (
                              <td
                                key={j}
                                className={`p-3 border border-stone-200 text-stone-600 ${j === 0 ? "font-semibold text-stone-800" : ""}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p>
                    A typical overnight safari departs Jaisalmer by jeep in the
                    early afternoon, transfers to camel at the edge of the
                    dunes, rides for 1.5–2 hours to a remote camp spot
                    (genuinely away from other camps if booked with a reputable
                    operator), watches sunset over the dunes, eats a campfire
                    dinner with traditional Rajasthani folk music, sleeps under
                    the stars (or in a tent, depending on the package), and
                    rides back at sunrise.
                  </p>

                  <ul>
                    <li>
                      <strong>Choose multi-day for genuine remoteness:</strong>
                      The single overnight safari near Sam often ends up camped
                      within sight of other groups. The 2-night/3-day treks
                      venture genuinely deep into the desert, often reaching
                      remote villages inaccessible by road.
                    </li>
                    <li>
                      <strong>Check what's included:</strong> Meals, water,
                      blankets, and the camel itself should be standard. Confirm
                      whether transport to/from the dunes (jeep portion) is
                      included or charged separately.
                    </li>
                    <li>
                      <strong>Ask about group size:</strong> Some operators run
                      large groups (10+ camels moving together); others offer
                      smaller, more personal experiences. If solitude matters to
                      you, ask specifically before booking.
                    </li>
                    <li>
                      <strong>Camel riding is uncomfortable at first:</strong>
                      The gait takes adjustment — expect some soreness if you've
                      never ridden before. Most camels are well- trained and the
                      pace is gentle; the discomfort is more about unfamiliar
                      movement than danger.
                    </li>
                    <li>
                      <strong>
                        Book through your guesthouse or a known operator:
                      </strong>
                      Street touts in Jaisalmer's old city offer camel safaris
                      at suspiciously low prices that often mean poorly
                      maintained camels, inadequate food, or camps far closer to
                      the road than advertised. A few hundred rupees more for a
                      reputable operator is worth it.
                    </li>
                  </ul>
                </section>

                {/* ── Desert Camping ────────────────────────────────────── */}
                <section id="desert-camping">
                  <h2>Desert Camping</h2>
                  <p>
                    Beyond the camel safari camping experience, Jaisalmer has a
                    well-developed range of standalone desert resorts near Sam
                    and Khuri offering luxury tent accommodation without the
                    trek — ideal for those who want the desert night sky and
                    folk performance experience without the camel ride itself.
                  </p>
                  <ul>
                    <li>
                      <strong>Swiss tent camps:</strong> Permanent canvas tents
                      with proper beds, attached bathrooms, and sometimes air
                      conditioning — the most comfortable way to experience a
                      desert night. ₹3,000–₹8,000/night.
                    </li>
                    <li>
                      <strong>Luxury desert camps:</strong> High-end resort-
                      style tented accommodation with private pools, full dining
                      service, and curated cultural programming (folk dance,
                      Kalbeliya performances, fire shows).
                      ₹10,000–₹25,000+/night.
                    </li>
                    <li>
                      <strong>The folk music experience:</strong> Most camps
                      include an evening of traditional Rajasthani folk music
                      and the Kalbeliya dance (a UNESCO-recognised intangible
                      cultural heritage performed by the Kalbeliya tribe) around
                      a bonfire — genuinely excellent at reputable camps, more
                      perfunctory at budget operations.
                    </li>
                    <li>
                      <strong>Stargazing:</strong> The Thar Desert's minimal
                      light pollution makes for exceptional night sky viewing —
                      on clear nights the Milky Way is visible to the naked eye.
                      Several camps offer telescope sessions or simply provide
                      mats for lying back and watching.
                    </li>
                  </ul>
                </section>

                {/* ── Kuldhara ──────────────────────────────────────────── */}
                <section id="kuldhara">
                  <h2>Kuldhara — The Ghost Village</h2>
                  <p>
                    About 18 km west of Jaisalmer, <strong>Kuldhara</strong>
                    is a 13th-century village that — according to local legend —
                    was abandoned overnight by its entire population of Paliwal
                    Brahmins after the local minister demanded to marry a
                    village girl, and the residents, refusing, fled in a single
                    night, cursing the village so no one could ever resettle it.
                    The historical accuracy of the legend is debated (some
                    historians point to drought, taxation pressure, or water
                    scarcity as more likely causes), but the village's genuinely
                    eerie, completely abandoned state — stone ruins, empty
                    streets, crumbling walls stretching across a substantial
                    site — makes for an atmospheric stop regardless of which
                    explanation you believe.
                  </p>
                  <p>
                    The site is maintained by the Rajasthan government as a
                    protected monument, with walking paths through the ruins and
                    informational signage. It's particularly striking at sunset,
                    when long shadows fall across the abandoned structures.
                  </p>
                  <ul>
                    <li>
                      <strong>Distance from Jaisalmer:</strong> 18 km, ~30
                      minutes
                    </li>
                    <li>
                      <strong>Entry:</strong> ₹10 (Indian), ₹50 (Foreign)
                    </li>
                    <li>
                      <strong>Timings:</strong> Sunrise to sunset
                    </li>
                    <li>
                      <strong>Combine with:</strong> Khaba Fort (5 km further),
                      another abandoned settlement with a small museum on desert
                      history
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Jaisalmer</h2>
                  <p>
                    Jaisalmer's accommodation falls into three categories:
                    inside the fort (atmospheric but contributes to conservation
                    strain), the old city outside the fort walls (best balance
                    of atmosphere and sustainability), and desert camps near
                    Sam/Khuri.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,500/night",
                        picks: [
                          "Zostel Jaisalmer (outside fort)",
                          "Hotel Renuka (old city)",
                          "Backpacker guesthouses near Gadisar Lake",
                          "Budget desert camps at Khuri",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹6,000/night",
                        picks: [
                          "Hotel Killa Bhawan (fort views)",
                          "Nachana Haveli",
                          "Hotel Mandir Palace",
                          "Desert Tulip Resort (Sam Dunes)",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹8,000–₹30,000+/night",
                        picks: [
                          "Suryagarh Jaisalmer (best luxury in the city)",
                          "Fort Rajwada",
                          "Mirvana Nature Resort (Sam)",
                          "The Serai (luxury desert camp, Relais & Châteaux)",
                        ],
                      },
                    ].map((t) => (
                      <div
                        key={t.tier}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div
                          className="font-bold text-stone-900 mb-1"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {t.tier}
                        </div>
                        <div
                          className="text-xs text-forest-600 font-medium mb-3"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {t.range}
                        </div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li
                              key={p}
                              className="text-xs text-stone-600"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <blockquote>
                    Given the conservation concerns inside Jaisalmer Fort,
                    consider staying just outside the walls — properties like
                    Hotel Killa Bhawan offer spectacular fort views from rooftop
                    terraces without contributing to the structural strain
                    inside.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Jaisalmer</h2>
                  <p>
                    Jaisalmer's desert cuisine evolved out of necessity —
                    limited water and fresh produce led to a tradition built
                    around lentils, millet, dried vegetables, and dairy that
                    keeps well in extreme heat. The results are some of
                    Rajasthan's most distinctive and flavourful dishes.
                  </p>
                  <ul>
                    <li>
                      <strong>Dal Baati Churma:</strong> Rajasthan's signature
                      dish — hard wheat dough balls (baati) baked or roasted
                      over coals, served with spiced lentils (dal) and a sweet
                      crumbled wheat-jaggery dessert (churma). The baati is
                      traditionally cracked open and doused in ghee before
                      eating. Found at every traditional restaurant.
                    </li>
                    <li>
                      <strong>Ker Sangri:</strong> A distinctly Jaisalmer desert
                      dish made from dried ker berries and sangri (a desert bean
                      pod), cooked with spices into a tangy, slightly sour curry
                      — uses ingredients that thrive in arid conditions where
                      little else grows.
                    </li>
                    <li>
                      <strong>Gatte ki Sabzi:</strong> Gram flour dumplings
                      cooked in a yogurt-based curry — a clever solution to
                      desert cuisine's limited fresh vegetable access, using
                      preserved and dry ingredients to create something
                      genuinely delicious.
                    </li>
                    <li>
                      <strong>Bajra Roti:</strong> Flatbread made from pearl
                      millet (bajra), the staple grain of the desert since it
                      requires far less water than wheat. Dense, slightly nutty,
                      traditionally eaten with white butter and jaggery.
                    </li>
                    <li>
                      <strong>Kalakand and Ghotua Laddu:</strong> Jaisalmer's
                      sweet specialties — Kalakand is a milk-based fudge, Ghotua
                      Laddu a rich, ghee-heavy ball made from gram flour. Both
                      available from sweet shops throughout the old city.
                    </li>
                    <li>
                      <strong>Best restaurants:</strong> 1st Gate Home Fusion
                      (rooftop fort views, excellent thalis), Saffron Restaurant
                      (Suryagarh, fine dining Rajasthani), and Trio Restaurant
                      (long-running local favourite for authentic desert
                      cuisine).
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>4-Day Jaisalmer Itinerary</h2>
                  <p>
                    Four days gives you time to explore the fort and old city
                    thoroughly, visit the havelis, do an overnight camel safari
                    into the dunes, and see Kuldhara — without rushing any of
                    it.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Jaisalmer Fort & Old City",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: Jaisalmer Fort — Royal Palace, Jain Temples, fort ramparts",
                          "Walk the inner lanes — observe living fort culture, shop windows, temples",
                          "Lunch: Rooftop restaurant within or near the fort with city views",
                          "Sunset: Fort's western rampart for the golden-hour glow on the city",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Havelis & Gadisar Lake",
                        color: "bg-amber-600",
                        activities: [
                          "Morning: Patwon ki Haveli (arrive early for quiet photography)",
                          "Nathmal ki Haveli and Salim Singh ki Haveli",
                          "Afternoon: Gadisar Lake — boat ride, Tilon ki Pol gateway",
                          "Evening: Old city market shopping (textiles, leather, silver)",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Kuldhara & Desert Camel Safari",
                        color: "bg-orange-600",
                        activities: [
                          "Morning: Kuldhara ghost village and Khaba Fort",
                          "Early afternoon: Jeep transfer to Khuri or Sam Dunes",
                          "Camel ride into the dunes (1.5–2 hours)",
                          "Sunset over the dunes, campfire dinner with folk music, overnight camp",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Desert Sunrise & Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Sunrise over the dunes — quietest, most beautiful light of the trip",
                          "Camel ride back, jeep transfer to Jaisalmer",
                          "Final shopping or sweet shop visit in old city",
                          "Departure by train, bus, or onward Rajasthan circuit",
                        ],
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
                          <h4
                            className="font-bold text-stone-900 mb-3"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {d.title}
                          </h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li
                                key={a}
                                className="text-sm text-stone-600 flex items-start gap-2"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                              >
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">
                                  ✓
                                </span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map(
                            (h) => (
                              <th
                                key={h}
                                className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                              >
                                {h}
                              </th>
                            ),
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹700", "₹3,000", "₹15,000"],
                          ["Food/day", "₹350", "₹800", "₹2,000"],
                          ["Fort + monument entries", "₹150", "₹600", "₹600"],
                          [
                            "Overnight camel safari",
                            "₹2,000",
                            "₹3,500",
                            "₹8,000",
                          ],
                          ["Local transport/day", "₹200", "₹600", "₹1,500"],
                          [
                            "Daily total (excl. safari night)",
                            "₹1,400",
                            "₹5,000",
                            "₹19,100",
                          ],
                          ["4-Day trip total", "₹6,200", "₹18,500", "₹65,300"],
                        ].map(([exp, b, m, l], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {b}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {m}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {l}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Excludes train/flight to Jodhpur or Delhi. The camel
                    safari is typically the single largest line item — most
                    operators bundle the overnight stay, meals, and transport
                    into one price.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Jaisalmer</h2>
                  <ul>
                    <li>
                      <strong>
                        Book camel safaris through your guesthouse or a known
                        operator:
                      </strong>
                      Street touts in the old city undercut reputable operators
                      significantly but often deliver poorly maintained camels,
                      inadequate food, and camps far closer to the road than
                      advertised. A slightly higher price for a reputable
                      operator pays off.
                    </li>
                    <li>
                      <strong>
                        Choose Khuri over Sam if you want fewer crowds:
                      </strong>
                      Sam Dunes are more accessible but get genuinely crowded at
                      sunset during peak season. Khuri offers comparable
                      (arguably better) dunes with a fraction of the tourist
                      traffic.
                    </li>
                    <li>
                      <strong>
                        The desert gets cold at night — even in winter:
                      </strong>
                      Visitors consistently underestimate this. Temperatures
                      drop to 5–10°C on December–January nights. Bring or rent
                      warm layers regardless of how hot the day was.
                    </li>
                    <li>
                      <strong>Consider staying outside the fort:</strong>
                      The conservation strain on Jaisalmer Fort from hotel
                      construction within its walls is a genuine structural
                      concern. Properties just outside the walls offer
                      comparable views without contributing to the problem.
                    </li>
                    <li>
                      <strong>Sun protection is non-negotiable:</strong>
                      Strong sun, dry air, and reflective sand combine to cause
                      sunburn and dehydration faster than most visitors expect.
                      Cover up, drink constantly, and avoid the most intense
                      midday hours (12–3 PM) for strenuous activity.
                    </li>
                    <li>
                      <strong>Bargain respectfully in the markets:</strong>
                      Jaisalmer's old city markets sell textiles, leather, and
                      silverwork at prices that expect negotiation — starting
                      offers are typically 30–50% above the seller's actual
                      floor. Bargain firmly but politely; it's expected and part
                      of the culture.
                    </li>
                    <li>
                      <strong>Carry cash for the desert camps:</strong>
                      ATMs are reliable in Jaisalmer town but nonexistent at Sam
                      or Khuri. Withdraw enough cash before heading out for your
                      safari, including for tips and any additional drinks or
                      snacks at the camp.
                    </li>
                    <li>
                      <strong>Photography permits at some sites:</strong>
                      Some havelis and the fort's Royal Palace charge a separate
                      camera fee — typically ₹50–₹100. Check before assuming
                      photography is free at any entry point.
                    </li>
                  </ul>

                  {/* Do & Don't */}
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✅</span> Do
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Book camel safaris through your guesthouse, not street touts",
                          "Visit Patwon ki Haveli early morning for quiet photography",
                          "Choose Khuri Dunes for fewer crowds than Sam",
                          "Pack warm layers even for winter desert nights",
                          "Watch sunset from the fort's western ramparts",
                          "Stop at Kuldhara on the way to or from the dunes",
                          "Try Dal Baati Churma at a traditional restaurant",
                          "Stay just outside the fort to support its conservation",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">
                              →
                            </span>
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
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Visit May–June unless absolutely necessary — extreme heat",
                          "Book the cheapest camel safari without checking what's included",
                          "Underestimate desert night cold — pack layers regardless",
                          "Wear leather items into Jain temples",
                          "Skip Khaba Fort if you're already at Kuldhara — it's close by",
                          "Expect solitude at Sam Dunes during peak season sunset",
                          "Carry cards expecting them to work at desert camps",
                          "Forget sun protection — the desert sun is relentless",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">
                              →
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Jaisalmer",
                  "Rajasthan",
                  "Thar Desert",
                  "Camel Safari",
                  "Heritage",
                  "Havelis",
                  "India",
                  "Desert Camping",
                ].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              {/* ── Gear Recommendations ──────────────────────────────── */}
              <TrekGearRecommendations
                sections={DESERT_GEAR}
                destination="Jaisalmer & the Thar Desert"
              />

              <RelatedPostsGrid />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
