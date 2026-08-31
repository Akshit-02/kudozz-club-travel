// src/app/blog/bihar-travel-guide/page.tsx
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
  title: "Bihar Travel Guide: Bodh Gaya, Nalanda & Patna",
  description:
    "The complete Bihar travel guide — the Mahabodhi Temple where Buddha attained enlightenment, the ruins of the ancient Nalanda university, Rajgir's Buddhist and Jain heritage, Patna's riverside history, where to stay and eat, and a full itinerary through one of India's most historically significant states.",
  keywords:
    "Bihar travel guide, Bodh Gaya, Mahabodhi Temple, Nalanda University ruins, Rajgir, Patna Sahib, Vaishali, Sasaram Sher Shah Suri tomb, Bihar itinerary, Buddhist pilgrimage India, best time to visit Bihar, how to reach Bodh Gaya, Bihar itinerary 6 days, is Bihar safe for solo travellers, Bihar budget trip, things to do in Bodh Gaya, Nalanda ruins Rajgir day trip, Patna sightseeing guide, Bihar travel FAQ, Bodh Gaya Gaya airport",
  openGraph: {
    title: "Bihar Travel Guide: Bodh Gaya, Nalanda & Patna",
    description:
      "The place where Buddha attained enlightenment, the ruins of one of the world's oldest universities, and the ancient heartland of the Magadha empire — the complete guide to Bihar.",
    url: "https://club.kudozz.in/blog/bihar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient stone ruins and temple architecture, evoking Bihar's Nalanda and Bodh Gaya heritage sites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bihar Travel Guide: Bodh Gaya, Nalanda & Patna",
    description:
      "Where Buddha attained enlightenment, and the ruins of one of the world's oldest universities — the complete guide to Bihar.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/bihar-travel-guide",
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
          headline: "Bihar Travel Guide: Bodh Gaya, Nalanda & Patna",
          description: "The complete Bihar travel guide.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
          datePublished: "2026-07-22",
          dateModified: "2026-07-22",
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
            "@id": "https://club.kudozz.in/blog/bihar-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Bihar",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Bihar",
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
                name: "Bihar Travel Guide",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data (shared by visible section + JSON-LD) ────────────────────────────
const faqs = [
  {
    q: "How many days do I need for Bihar?",
    a: "Six days is a comfortable amount of time to properly cover Bodh Gaya, Nalanda and Rajgir, and Patna without rushing the sites that matter most — roughly two days in Bodh Gaya, a day trip to Nalanda/Rajgir, and two days in Patna, with room for a Vaishali detour.",
  },
  {
    q: "What is the best time to visit Bihar?",
    a: "October to March is the best window, with cool and comfortable weather (10–27°C) ideal for temple visits and ruin sightseeing. April to June brings extreme heat that regularly crosses 40°C, and July to September monsoon carries real flooding risk in parts of the Gangetic plain — best avoided for sightseeing-heavy travel.",
  },
  {
    q: "How do I reach Bodh Gaya?",
    a: "Gaya Airport, close to Bodh Gaya, runs direct international flights, especially from Buddhist-majority countries like Thailand, Sri Lanka, Myanmar, and Japan — it's roughly a 15-minute drive from Bodh Gaya versus 2+ hours from Patna. Patna's Jay Prakash Narayan International Airport and strong rail connectivity to Gaya are the alternative routes in.",
  },
  {
    q: "What is the budget for a trip to Bihar?",
    a: "A daily budget runs roughly ₹3,700 on a budget trip, ₹7,800 mid-range, or ₹17,000 luxury, with a car with driver for the Nalanda/Rajgir day trip as a near-essential line item given thin local transport. A 6-day trip totals about ₹22,200–₹1,02,000 depending on tier, excluding flights.",
  },
  {
    q: "Is Bihar safe for solo travellers?",
    a: "Bodh Gaya is well set up for visitors thanks to decades of Buddhist pilgrim traffic, with good hotels and English-speaking guides, and Patna has a reasonable range of business hotels. Outside these hubs, general tourist infrastructure is genuinely thin, so hiring a car with driver for day trips to Rajgir, Nalanda, and Vaishali, and carrying cash outside major towns, are both recommended.",
  },
  {
    q: "Is Bihar worth visiting for its history?",
    a: "Yes — Bihar is where the Buddha attained enlightenment at Bodh Gaya's Mahabodhi Temple, home to the ruins of Nalanda Mahavihara, one of the world's first residential universities predating Oxford by centuries, and the ancient heartland of the Magadha and Maurya empires, plus Vaishali (one of the world's earliest republics) and Sasaram's Sher Shah Suri tomb.",
  },
  {
    q: "Can Nalanda and Rajgir be visited as a day trip from Bodh Gaya?",
    a: "Yes, and this is the recommended approach — Nalanda and Rajgir are easily combined as a single day trip from Bodh Gaya. Hire a car with a driver rather than relying on local transport, which is thin between the two.",
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
  { id: "introduction", title: "Why Bihar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "bodh-gaya", title: "Bodh Gaya: Where Buddhism Began", level: 2 },
  { id: "nalanda-rajgir", title: "Nalanda & Rajgir", level: 2 },
  { id: "patna", title: "Patna: The Ancient Capital", level: 2 },
  { id: "other-sights", title: "Vaishali & Sasaram", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "6-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Bihar-specific gear ─────────────────────────────────────────────────────
const BIHAR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for temple and ruin sightseeing, and Bihar's hot Gangetic plain climate",
    emoji: "🪷",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "Nalanda's ruins and the Mahabodhi Temple complex both involve significant walking on stone and gravel paths, often barefoot at the shrine itself.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Easy slip-on footwear helps at Bodh Gaya, where shoes come off before entering most temple and monastery grounds.",
      },
      {
        name: "Sunscreen (SPF 50)",
        description:
          "Bihar's Gangetic plain gets brutally hot outside the winter months, with long hours of direct sun at open ruin sites like Nalanda.",
        price: "₹399",
        rating: 4.5,
        reviews: "10k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("sunscreen+spf+50+travel"),
        tag: "Everyday essential",
        tagColor: "bg-red-100 text-red-700",
        why: "There's little shade across the Nalanda ruins or Rajgir's open sites — sun protection matters even in the cooler months.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Useful across long days moving between Bodh Gaya, Nalanda, Rajgir, and Patna in Bihar's dry heat.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Bottled water is easy to find in Bodh Gaya and Patna but thinner elsewhere — carrying your own is a simple safeguard.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Handy for long road transfers between Bodh Gaya, Nalanda/Rajgir, and Patna, where charging stops can be infrequent.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Day trips between towns often run 3-4 hours by road — a charged power bank avoids running low mid-transfer.",
      },
      {
        name: "Basic First Aid Kit",
        description:
          "A compact kit with essentials for stomach upset, cuts, and headaches — useful outside Bodh Gaya and Patna where clinics thin out.",
        price: "₹499",
        rating: 4.3,
        reviews: "4.1k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("travel+first+aid+kit"),
        tag: "Peace of mind",
        tagColor: "bg-emerald-100 text-emerald-700",
        why: "Medical infrastructure outside Bodh Gaya and Patna is limited — a basic kit covers the small, common issues.",
      },
      {
        name: "Modest, Breathable Clothing",
        description:
          "Loose, covering clothing that's respectful at the Mahabodhi Temple, Patna Sahib Gurdwara, and other active religious sites.",
        price: "₹899",
        rating: 4.3,
        reviews: "3.6k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("modest+travel+clothing+cotton"),
        tag: "Respectful travel",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Bodh Gaya and Patna Sahib are living places of worship, not just monuments — covered shoulders and knees go a long way.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BiharGuidePage() {
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
              alt="Ancient stone ruins and temple architecture, evoking Bihar's Nalanda and Bodh Gaya heritage sites"
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
                {
                  label: "Bihar",
                  href: "/blog?category=bihar",
                },
                { label: "Travel Guide", href: null },
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
                "Bihar",
                "Bodh Gaya",
                "Nalanda",
                "Patna",
                "Buddhist Heritage",
                "History",
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
              Bihar Travel Guide: Bodh Gaya, Nalanda & Patna
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The place where Siddhartha Gautama became the Buddha under a
              Bodhi Tree, the ruins of a university that predates Oxford by
              a thousand years, and the ancient heartland of the Magadha
              and Maurya empires — Bihar is one of India's most
              historically significant states, and one of its most
              overlooked by travelers.
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
                  text: "Bihar, Eastern India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,000 words",
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
                  <h2>Why Bihar?</h2>
                  <p>
                    Few places on earth carry as much religious and
                    historical weight per square kilometre as{" "}
                    <strong>Bihar</strong>. This is where{" "}
                    <strong>Siddhartha Gautama sat beneath a Bodhi Tree in
                    Bodh Gaya and attained enlightenment</strong>, becoming
                    the Buddha and setting off a religion that today shapes
                    the lives of hundreds of millions of people across Asia.
                    It's also the heartland of the ancient{" "}
                    <strong>Magadha</strong> empire and, later, the{" "}
                    <strong>Maurya empire</strong> under Ashoka — the
                    political and cultural center of much of early Indian
                    history.
                  </p>
                  <p>
                    At <strong>Nalanda</strong>, the excavated ruins of{" "}
                    <strong>Nalanda Mahavihara</strong> mark the site of one
                    of the world's oldest known residential universities,
                    drawing scholars from across Asia centuries before
                    Oxford or Bologna existed. Add Patna's long history as a
                    capital city, Vaishali's claim as one of the world's
                    earliest republics, and Sasaram's striking medieval
                    tomb, and Bihar reads less like a single destination and
                    more like a chapter of world history you can walk
                    through.
                  </p>
                  <p>
                    That said, it's worth being upfront: outside{" "}
                    <strong>Bodh Gaya</strong> and, to a lesser extent,{" "}
                    <strong>Patna</strong>, general tourist infrastructure is
                    genuinely thin. Bodh Gaya itself is well set up thanks to
                    decades of Buddhist pilgrim traffic — good hotels,
                    reliable food, English-speaking guides — but Rajgir,
                    Nalanda, Vaishali, and Sasaram are day-trip stops rather
                    than places with much of a tourist scene of their own.
                    Go for the history, plan logistics carefully, and keep
                    expectations realistic about creature comforts once you
                    step outside the main hubs.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🪷</span> Bihar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Bihar" },
                        {
                          icon: "✈️",
                          label: "Gateways",
                          value: "Patna (PAT), Gaya (GAY)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🪷",
                          label: "Known For",
                          value: "Bodh Gaya, Nalanda Ruins",
                        },
                        {
                          icon: "🏛️",
                          label: "History",
                          value: "Magadha & Maurya Empires",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹7,000",
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
                  <h2>Best Time to Visit Bihar</h2>
                  <p>
                    Bihar sits deep in the Gangetic plain, which means
                    genuinely extreme summers and a monsoon season that
                    brings real flooding risk in parts of the state — timing
                    a visit matters more here than in most of India.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool and comfortable (10–27°C), ideal for temple visits, ruin sightseeing, and full days on the road between towns.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat",
                        text: "Temperatures regularly cross 40°C across the Gangetic plain — sightseeing outdoors becomes genuinely difficult by midday.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — flood risk",
                        text: "Heavy rains raise real flooding risk in parts of the Gangetic plain, particularly north Bihar — travel disruption is common.",
                      },
                      {
                        season: "Dec",
                        emoji: "🕉️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Buddhist festival season",
                        text: "Major Buddhist festival dates draw large numbers of international pilgrims to Bodh Gaya — book accommodation well ahead.",
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
                    <strong>Our pick:</strong> November to February, without
                    much debate. Bihar's summer heat and monsoon flooding
                    risk both make the rest of the year a harder sell for
                    sightseeing-heavy travel.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Bihar</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Jay Prakash Narayan
                      International Airport in Patna handles most domestic
                      and some international traffic. Gaya Airport, close to
                      Bodh Gaya, runs direct international flights,
                      especially from Buddhist-majority countries like
                      Thailand, Sri Lanka, Myanmar, and Japan.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Bihar sits on major India
                      rail corridors, and Patna, Gaya, and Rajgir all have
                      strong rail connectivity to Delhi, Kolkata, and much
                      of the country.
                    </li>
                    <li>
                      <strong>By Road:</strong> Bodh Gaya, Nalanda, Rajgir,
                      and Patna are all connected by decent highways, and
                      day trips between them by car are the most practical
                      way to see the state.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If Bodh Gaya is your main
                    priority, flying into Gaya is often more direct than
                    Patna — it's roughly a 15-minute drive from Bodh Gaya
                    itself, versus 2+ hours from Patna.
                  </div>
                </section>

                {/* ── Bodh Gaya ─────────────────────────────────────────── */}
                <section id="bodh-gaya">
                  <h2>Bodh Gaya: Where Buddhism Began</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="Ancient temple architecture with a tall spire, evoking the Mahabodhi Temple in Bodh Gaya"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Bodh Gaya</strong> is Buddhism's most important
                    pilgrimage site, and the reason most travelers come to
                    Bihar at all. This is where the Buddha is believed to
                    have attained enlightenment, and the town today draws
                    monks, pilgrims, and visitors from across the Buddhist
                    world.
                  </p>
                  <ul>
                    <li>
                      <strong>Mahabodhi Temple:</strong> A UNESCO World
                      Heritage Site marking the exact spot of the Buddha's
                      enlightenment, with a descendant of the original Bodhi
                      Tree still standing beside it. The temple complex is
                      active, contemplative, and often crowded with pilgrims
                      in quiet meditation.
                    </li>
                    <li>
                      <strong>International monasteries:</strong> Nations
                      including Thailand, Japan, Bhutan, Tibet, Vietnam, and
                      Myanmar have each built monasteries near the Mahabodhi
                      Temple in their own distinct architectural style — a
                      genuinely unusual cluster to walk between in one town.
                    </li>
                    <li>
                      <strong>Great Buddha Statue:</strong> An 80-foot seated
                      Buddha statue, consecrated by the Dalai Lama in 1989,
                      visible from much of the town.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Visit the Mahabodhi Temple
                    early morning or after sunset — the atmosphere with
                    monks in meditation under lantern light is a different
                    experience from the midday crowds.
                  </div>
                </section>

                {/* ── Nalanda & Rajgir ──────────────────────────────────── */}
                <section id="nalanda-rajgir">
                  <h2>Nalanda & Rajgir</h2>
                  <p>
                    A short drive from Bodh Gaya, <strong>Nalanda</strong>{" "}
                    and <strong>Rajgir</strong> pack in some of Bihar's
                    deepest history — Buddhist, Jain, and pre-Mauryan alike.
                  </p>
                  <ul>
                    <li>
                      <strong>Nalanda Mahavihara ruins:</strong> The
                      excavated remains of one of the world's first
                      residential universities, dating back to the 5th
                      century CE, which once housed thousands of monks and
                      scholars from across Asia before being destroyed in
                      the 12th century. Walking the brick foundations of its
                      old dormitories and lecture halls is genuinely
                      humbling.
                    </li>
                    <li>
                      <strong>Rajgir's hot springs:</strong> Sacred hot
                      springs at the base of the surrounding hills, held to
                      have healing properties and visited by pilgrims of
                      several faiths.
                    </li>
                    <li>
                      <strong>Griffith's Hill ropeway & Vishwa Shanti
                      Stupa:</strong> A cable car ride up to the Peace Pagoda
                      overlooking Rajgir, built by Japanese Buddhist monks —
                      one of the more accessible viewpoints in the region.
                    </li>
                    <li>
                      <strong>Jain and early Buddhist connections:</strong>{" "}
                      Rajgir was an ancient capital of the Magadha kingdom
                      and is significant to both Buddhist and Jain history,
                      with several Jain temples on its surrounding hills.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Nalanda and Rajgir are
                    easily combined as a single day trip from Bodh Gaya —
                    hire a car with a driver rather than relying on local
                    transport, which is thin between the two.
                  </div>
                </section>

                {/* ── Patna ─────────────────────────────────────────────── */}
                <section id="patna">
                  <h2>Patna: The Ancient Capital</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/fort.jpg"
                      alt="A large historic stone structure, evoking Patna's Golghar granary and riverside heritage"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Bihar's capital <strong>Patna</strong> has been a seat
                    of power since ancient times, once known as
                    Pataliputra, the capital of the Magadha and later Maurya
                    empires under Emperor Ashoka.
                  </p>
                  <ul>
                    <li>
                      <strong>Golghar:</strong> A striking beehive-shaped
                      granary built by the British in 1786, with a
                      staircase spiraling up its exterior to a viewpoint
                      over the city and the Ganges.
                    </li>
                    <li>
                      <strong>Patna Museum:</strong> Home to Mauryan and
                      Gupta-era artifacts, including the famed Didarganj
                      Yakshi statue — a good primer on Bihar's ancient
                      history before heading to the sites themselves.
                    </li>
                    <li>
                      <strong>Patna Sahib Gurdwara:</strong> One of Sikhism's
                      most sacred sites, marking the birthplace of Guru
                      Gobind Singh, the tenth Sikh Guru.
                    </li>
                    <li>
                      <strong>The Ganges riverside:</strong> Patna sits
                      directly on the Ganges, and its ghats and riverside
                      areas are worth an unhurried evening walk.
                    </li>
                  </ul>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Vaishali & Sasaram</h2>
                  <ul>
                    <li>
                      <strong>Vaishali:</strong> Considered one of the
                      world's earliest republics, and a significant
                      pilgrimage site for both Buddhists and Jains — the
                      Buddha is said to have delivered his last sermon here,
                      and it's the birthplace of Lord Mahavira, the founder
                      of Jainism.
                    </li>
                    <li>
                      <strong>Sasaram:</strong> Home to the tomb of Sher
                      Shah Suri, the 16th-century Afghan ruler who briefly
                      unseated the Mughals — a major medieval Indo-Islamic
                      monument, built on a platform in the middle of an
                      artificial lake.
                    </li>
                  </ul>
                  <p>
                    Both are worthwhile if your itinerary has room, but
                    neither has much in the way of visitor infrastructure —
                    treat them as focused day trips rather than overnight
                    stops.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation quality in Bihar varies sharply by town.
                    Bodh Gaya, thanks to decades of Buddhist pilgrim
                    traffic, genuinely punches above its weight with
                    international-standard options. Patna has a reasonable
                    range of business hotels. Rajgir, Nalanda, and other
                    smaller towns are considerably thinner — plan to base
                    yourself in Bodh Gaya or Patna and day-trip out.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Monastery guesthouses, Bodh Gaya",
                          "Budget lodges, central Patna",
                          "Simple hotels, Rajgir",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,200–₹5,500/night",
                        picks: [
                          "3-star hotels, Bodh Gaya",
                          "Business hotels, Patna",
                          "Resort-style stays, Rajgir",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🛕",
                        range: "₹6,000–₹15,000+/night",
                        picks: [
                          "International-standard hotels, Bodh Gaya",
                          "Premium chain hotels, Patna",
                          "Limited options elsewhere",
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
                    Book Bodh Gaya accommodation well ahead of major
                    Buddhist festival dates — pilgrim traffic spikes hard,
                    and even mid-range hotels sell out weeks in advance.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Bihar</h2>
                  <ul>
                    <li>
                      <strong>Litti Chokha:</strong> Bihar's most iconic
                      dish — roasted wheat balls stuffed with spiced,
                      roasted gram flour, served with a smoky mashed
                      vegetable chokha and a generous dollop of ghee.
                    </li>
                    <li>
                      <strong>Sattu-based dishes:</strong> Roasted gram
                      flour (sattu) shows up across Bihari cooking, from
                      sattu paratha to a simple sattu drink mixed with
                      lemon and spices — cheap, filling, and everywhere.
                    </li>
                    <li>
                      <strong>Thekua:</strong> A dense, sweet, deep-fried
                      wheat and jaggery snack, traditionally associated with
                      the Chhath Puja festival but available year-round.
                    </li>
                    <li>
                      <strong>Bodh Gaya's pilgrim food scene:</strong>{" "}
                      Thanks to the Buddhist monastery presence, Bodh Gaya
                      has a strong, easy-to-find vegetarian food culture,
                      including Thai, Tibetan, and Japanese options catering
                      to international pilgrims — genuinely convenient for
                      vegetarian travelers.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>6-Day Bihar Itinerary</h2>
                  <p>
                    Six days is a comfortable amount of time to properly
                    cover Bodh Gaya, Nalanda and Rajgir, and Patna without
                    rushing the sites that matter most.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrive Bodh Gaya",
                        color: "bg-amber-700",
                        activities: [
                          "Fly into Gaya, transfer to Bodh Gaya",
                          "Mahabodhi Temple, evening visit",
                          "Walk past the international monasteries",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Bodh Gaya in Depth",
                        color: "bg-forest-600",
                        activities: [
                          "Sunrise visit to the Mahabodhi Temple",
                          "Great Buddha Statue and nearby monasteries",
                          "Explore the town's monastery-run cafes",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Nalanda & Rajgir Day Trip",
                        color: "bg-sky-600",
                        activities: [
                          "Drive to Nalanda, explore the university ruins",
                          "Nalanda Archaeological Museum",
                          "Rajgir hot springs and Vishwa Shanti Stupa ropeway",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Travel to Patna",
                        color: "bg-stone-600",
                        activities: [
                          "Drive from Bodh Gaya to Patna (~4 hrs)",
                          "Evening walk along the Ganges riverside",
                          "Rest after the transfer",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Patna",
                        color: "bg-purple-700",
                        activities: [
                          "Golghar granary and viewpoint",
                          "Patna Museum",
                          "Patna Sahib Gurdwara",
                        ],
                      },
                      {
                        day: "Day 6",
                        title: "Vaishali or Departure",
                        color: "bg-teal-700",
                        activities: [
                          "Optional day trip to Vaishali",
                          "Final shopping or riverside time in Patna",
                          "Departure",
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
                          [
                            "Accommodation/night",
                            "₹1,000",
                            "₹3,200",
                            "₹8,000",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,200"],
                          [
                            "Local transport/day",
                            "₹500",
                            "₹1,200",
                            "₹2,800",
                          ],
                          [
                            "Day-trip car hire (Nalanda/Rajgir)",
                            "₹1,800",
                            "₹2,500",
                            "₹4,000",
                          ],
                          ["Daily total", "₹3,700", "₹7,800", "₹17,000"],
                          [
                            "6-Day trip total",
                            "₹22,200",
                            "₹46,800",
                            "₹102,000",
                          ],
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
                    * Excludes flights. A car with driver for the Nalanda and
                    Rajgir day trip is close to essential given thin local
                    transport — factor it in regardless of budget tier.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Bihar</h2>
                  <ul>
                    <li>
                      <strong>Hire a car with driver for day trips:</strong>{" "}
                      Local transport between Bodh Gaya, Nalanda, Rajgir,
                      and Patna is thin — a hired car makes these
                      connections far more reliable.
                    </li>
                    <li>
                      <strong>Dress and behave respectfully at religious
                      sites:</strong> The Mahabodhi Temple and Patna Sahib
                      Gurdwara are active places of worship — cover
                      shoulders and knees, and keep noise levels down.
                    </li>
                    <li>
                      <strong>Carry cash outside major towns:</strong> Card
                      acceptance drops off quickly beyond Bodh Gaya and
                      Patna's main commercial areas.
                    </li>
                    <li>
                      <strong>Book ahead during Buddhist festival
                      dates:</strong> Pilgrim traffic to Bodh Gaya spikes
                      hard around major Buddhist festivals — accommodation
                      fills up weeks in advance.
                    </li>
                    <li>
                      <strong>Keep expectations realistic outside the main
                      hubs:</strong> Rajgir, Nalanda, and Vaishali have real
                      historical weight but limited tourist infrastructure —
                      treat them as day trips, not overnight bases.
                    </li>
                    <li>
                      <strong>Avoid the peak summer months entirely:</strong>{" "}
                      Bihar's April–June heat and July–September flood risk
                      both make sightseeing genuinely difficult.
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
                          "Hire a car with driver for Bodh Gaya–Nalanda–Rajgir–Patna trips",
                          "Dress modestly at the Mahabodhi Temple and Patna Sahib",
                          "Book Bodh Gaya stays ahead of major festival dates",
                          "Carry cash for smaller towns and villages",
                          "Base yourself in Bodh Gaya or Patna, day-trip elsewhere",
                          "Visit October–February for comfortable sightseeing",
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
                          "Expect Rajgir or Nalanda to have Bodh Gaya-level infrastructure",
                          "Rely on cards outside Bodh Gaya and Patna",
                          "Travel during peak summer heat (April–June)",
                          "Show up in Bodh Gaya during festival season without booking ahead",
                          "Underestimate travel time on Bihar's smaller roads",
                          "Wear revealing clothing at active religious sites",
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

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-5 my-6">
                    {faqs.map((f) => (
                      <div
                        key={f.q}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <h4
                          className="font-bold text-stone-900 mb-2 text-base"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {f.q}
                        </h4>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Bihar",
                  "Bodh Gaya",
                  "Nalanda",
                  "Rajgir",
                  "Patna",
                  "Mahabodhi Temple",
                  "Buddhist Heritage",
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
                sections={BIHAR_GEAR}
                destination="Bihar"
              />

              <RelatedPostsGrid currentSlug="bihar-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="bihar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
