// src/app/blog/old-delhi-travel-guide/page.tsx
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
  title: "Old Delhi Travel Guide: Red Fort, Jama Masjid & Food",
  description:
    "Old Delhi travel guide: Red Fort, Jama Masjid, Chandni Chowk's food lanes, havelis and bazaars in Shahjahanabad — walking itinerary, budget, tips and FAQs.",
  keywords:
    "Old Delhi travel guide, Shahjahanabad, Red Fort Delhi, Jama Masjid Delhi, Chandni Chowk food walk, Old Delhi walking tour, Kinari Bazaar, Dariba Kalan, Fatehpuri Masjid, Gurudwara Sis Ganj Sahib, Old Delhi street food, things to do in Old Delhi, Lal Qila",
  openGraph: {
    title: "Old Delhi Travel Guide: Red Fort, Jama Masjid & Food",
    description:
      "The walled Mughal capital of Shahjahanabad — Red Fort, Jama Masjid, cycle-rickshaw lanes, havelis, bazaars, and Old Delhi's legendary street food.",
    url: "https://club.kudozz.in/blog/old-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Red sandstone fort walls at golden hour, evoking Delhi's Red Fort and Mughal-era architecture",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Old Delhi Travel Guide: Red Fort, Jama Masjid & Food",
    description:
      "The walled Mughal capital of Shahjahanabad — Red Fort, Jama Masjid, havelis, bazaars, and legendary street food.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/old-delhi-travel-guide",
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
          headline: "Old Delhi Travel Guide: Red Fort, Jama Masjid & Food",
          description:
            "Old Delhi travel guide: Red Fort, Jama Masjid, Chandni Chowk's food lanes, havelis and bazaars in Shahjahanabad — walking itinerary, budget, tips and FAQs.",
          image:
            "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
          datePublished: "2026-08-30",
          dateModified: "2026-08-30",
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
            "@id": "https://club.kudozz.in/blog/old-delhi-travel-guide",
          },
          keywords:
            "Old Delhi travel guide, Shahjahanabad, Red Fort Delhi, Jama Masjid Delhi, Chandni Chowk food walk, Old Delhi walking tour, Kinari Bazaar, Dariba Kalan",
          about: {
            "@type": "Place",
            name: "Old Delhi",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Old Delhi",
              addressRegion: "Delhi",
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
                name: "Delhi",
                item: "https://club.kudozz.in/blog/delhi-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Old Delhi",
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
    q: "How much time do I need for Old Delhi?",
    a: "A focused half-day (4–5 hours) covers Red Fort, Jama Masjid, and a Chandni Chowk food walk comfortably. A full day lets you add the haveli lanes, Kinari Bazaar and Dariba Kalan, Fatehpuri Masjid, and Gurudwara Sis Ganj Sahib without rushing. Food-first travellers often return for a second, dedicated eating trip.",
  },
  {
    q: "Is Old Delhi safe for tourists?",
    a: "Yes, generally — Old Delhi sees heavy daily foot traffic and is well policed around its major monuments and markets. The real risks are practical rather than dangerous: dense crowds make pickpocketing possible, and narrow lanes plus chaotic traffic call for extra care. Keep bags zipped and in front of you, avoid flashing cash or jewellery, and stick to well-lit, busy lanes after dark.",
  },
  {
    q: "What is the best way to explore Old Delhi?",
    a: "On foot for the lanes and markets, and by cycle-rickshaw for longer stretches like the length of Chandni Chowk itself or getting between Red Fort and Jama Masjid. The alleys around Kinari Bazaar and the haveli quarter are too narrow for any vehicle, so walking is the only real option once you're inside them.",
  },
  {
    q: "Is Red Fort open on Mondays?",
    a: "No, Red Fort is closed to visitors on Mondays, along with several other centrally protected monuments in Delhi. Plan your Old Delhi visit for any other day of the week, and try to arrive close to opening time to beat both the heat and the crowds.",
  },
  {
    q: "Do I need to dress a certain way to visit Jama Masjid?",
    a: "Yes. Modest dress is expected — covered shoulders and legs for everyone, and a headscarf for women, though robes are usually available to borrow at the entrance if needed. Footwear must be removed before entering the courtyard, and non-Muslim visitors are generally asked for a small camera fee if carrying a camera or phone for photos.",
  },
  {
    q: "What is the best time of day to visit Chandni Chowk?",
    a: "Mid-morning, around 10–11 AM, once shops have opened but before the peak lunch and evening rush, gives the best balance of open stalls and manageable crowds. Early evening is atmospheric but significantly more crowded and harder to navigate with a rickshaw or on foot.",
  },
  {
    q: "Can I visit Red Fort and Jama Masjid in the same day?",
    a: "Easily — they're roughly a 10–15 minute walk or a short cycle-rickshaw ride apart, and most visitors pair them with a Chandni Chowk food walk in between. Starting at Red Fort in the morning, moving to Jama Masjid by late morning, and finishing with lunch in the food lanes is the classic sequence.",
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
  { id: "introduction", title: "Old Delhi: The Walled City", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "getting-around", title: "How to Reach & Get Around", level: 2 },
  { id: "red-fort", title: "Red Fort (Lal Qila)", level: 2 },
  { id: "jama-masjid", title: "Jama Masjid", level: 2 },
  { id: "chandni-chowk", title: "Chandni Chowk Food Walk", level: 2 },
  { id: "bazaars", title: "Haveli Lanes & Bazaars", level: 2 },
  { id: "fatehpuri-masjid", title: "Fatehpuri Masjid", level: 2 },
  { id: "gurudwara", title: "Gurudwara Sis Ganj Sahib", level: 2 },
  { id: "itinerary", title: "Half-Day Walking Itinerary", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Old Delhi-specific gear ────────────────────────────────────────────────────
const OLD_DELHI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for narrow lanes, dense crowds, and a street food trail you'll want to do properly",
    emoji: "🛺",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "Red Fort, Jama Masjid, and the haveli lanes around Chandni Chowk all involve extended walking on uneven stone, packed crowds, and the occasional puddle or paan stain.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Old Delhi essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "A single half-day loop through the walled city easily crosses 8,000–10,000 steps on hard, uneven, and often crowded ground.",
      },
      {
        name: "Cross-Body Anti-Theft Bag",
        description:
          "A zipped bag worn across the body, kept in front in dense crowds, is the simplest way to protect your phone and wallet in Old Delhi's busiest lanes.",
        price: "₹999",
        rating: 4.4,
        reviews: "5.1k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("anti+theft+crossbody+travel+bag"),
        tag: "Crowd-safety essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Chandni Chowk and Kinari Bazaar get genuinely packed by midday — a bag you can keep zipped and visible removes most of the risk.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Old Delhi's lanes are shaded but crowded, and there's no shortage of chai and lassi stalls — a bottle still saves money and plastic across a long walking day.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Between monument entries and market walking, hydration is easy to forget until you're already tired and overheated.",
      },
      {
        name: "Basic Stomach Care Kit",
        description:
          "The Chandni Chowk food walk is one of Old Delhi's biggest draws — worth carrying basic digestive medication if you're trying street food extensively for the first time.",
        price: "₹399",
        rating: 4.3,
        reviews: "4.8k",
        image: "💊",
        affiliateUrl: amazonSearchUrl("travel+digestive+medicine+kit"),
        tag: "Street-food essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Parathas, chaat, and kebabs in one sitting is a lot for an unaccustomed stomach — a basic kit means it doesn't derail your trip.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for a long day of navigation, photos, and metro tickets between Old Delhi's monuments, markets, and the connecting metro stations.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "City-day essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "GPS struggles in the dense lanes, so expect to lean on your phone more than usual to retrace your route back out.",
      },
      {
        name: "Lightweight Scarf / Stole",
        description:
          "Doubles as a headscarf for Jama Masjid and a light shoulder cover for Gurudwara Sis Ganj Sahib — useful to have on hand rather than borrowing one at the entrance.",
        price: "₹349",
        rating: 4.2,
        reviews: "3.6k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("cotton+scarf+stole+travel"),
        tag: "Religious-site essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Old Delhi's most-visited sights are active places of worship — a scarf on hand saves a queue at the entrance counter.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function OldDelhiGuidePage() {
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
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Red sandstone fort walls at golden hour, evoking Delhi's Red Fort and Mughal-era architecture"
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
                { label: "Delhi", href: "/blog/delhi-travel-guide" },
                { label: "Old Delhi", href: null },
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
                "Old Delhi",
                "Shahjahanabad",
                "Red Fort",
                "Jama Masjid",
                "Chandni Chowk",
                "Street Food",
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
              Old Delhi Travel Guide: Red Fort, Jama Masjid & Food
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Shahjahanabad, Shah Jahan's 17th-century walled capital — Red
              Fort, India's largest mosque, cycle-rickshaw lanes thick with
              spice and smoke, and a street food trail that's been running for
              well over a century.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "14 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Old Delhi, Delhi",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,900 words",
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
                  <h2>Old Delhi: The Walled City of Shahjahanabad</h2>
                  <p>
                    <strong>Old Delhi</strong> is what's left of{" "}
                    <strong>Shahjahanabad</strong> — the walled Mughal
                    capital built by Emperor Shah Jahan in the 1600s, when he
                    moved his court from Agra to a new city on the banks of
                    the Yamuna. Nearly four centuries later, most of the wall
                    is gone, but the city inside it hasn't slowed down for a
                    moment: it's still{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi</Link>'s most
                    chaotic, most alive quarter, and arguably its most
                    essential one for any first-time visitor.
                  </p>
                  <p>
                    This is a place best understood on foot and by nose
                    before anything else — the smell of frying jalebis
                    colliding with attar perfume shops, marigold garlands
                    stacked outside a gurudwara, raw silk and wedding-card
                    printers crammed into lanes barely wide enough for a
                    cycle-rickshaw. Red Fort and Jama Masjid anchor it as
                    monuments, but Old Delhi's real character lives in the
                    bazaars and back-lanes between them.
                  </p>
                  <p>
                    This guide covers the essentials: the two major
                    monuments, the food walk everyone comes for, the haveli
                    lanes and bazaars worth getting lost in, a suggested
                    half-day itinerary, and the practical tips that make
                    navigating Old Delhi's density far less overwhelming than
                    it looks on arrival.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕌</span> Old Delhi at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Historic Name",
                          value: "Shahjahanabad",
                        },
                        {
                          icon: "👑",
                          label: "Founded By",
                          value: "Shah Jahan, 1638–1648",
                        },
                        {
                          icon: "🏛️",
                          label: "UNESCO Site",
                          value: "Red Fort (since 2007)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
                        },
                        {
                          icon: "🚇",
                          label: "Nearest Metro",
                          value: "Chandni Chowk, Chawri Bazar",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹800 – ₹3,000",
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
                  <h2>Best Time to Visit Old Delhi</h2>
                  <p>
                    Old Delhi's dense, low-rise lanes trap heat and hold
                    crowds in a way the wider avenues of New Delhi don't —
                    the season you visit in matters more here than almost
                    anywhere else in the city.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry days (10–26°C) make long walks through the lanes and monument courtyards genuinely pleasant — the peak season for good reason.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — avoid if possible",
                        text: "Narrow, shaded lanes offer some relief from direct sun, but open courtyards at Red Fort and Jama Masjid get brutally hot by midday.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid, slippery lanes",
                        text: "Heavy showers can flood low-lying stretches of Chandni Chowk and leave stone courtyards slick — the heat does ease noticeably, though.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🌫️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cold with poor air quality",
                        text: "Comfortable temperatures for walking, but Delhi's winter smog is at its worst — pack a mask if you're sensitive to pollution.",
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
                    <strong>Our pick:</strong> late October to February,
                    starting your walk by 8 AM. The lanes are cooler,
                    Chandni Chowk hasn't hit its midday crush yet, and both
                    Red Fort and Jama Masjid are far more comfortable to
                    explore before the heat and crowds build.
                  </blockquote>
                </section>

                {/* ── Getting Around ────────────────────────────────────── */}
                <section id="getting-around">
                  <h2>How to Reach & Get Around Old Delhi</h2>
                  <p>
                    Old Delhi sits right at the northern edge of central
                    Delhi, and it's exceptionally well connected by metro —
                    the challenge isn't reaching it, it's moving through it
                    once you're inside.
                  </p>
                  <ul>
                    <li>
                      <strong>Delhi Metro:</strong> The Violet Line's Jama
                      Masjid station and the Yellow Line's Chandni Chowk and
                      Chawri Bazar stations all drop you within walking
                      distance of the main sights. Old Delhi railway station
                      and{" "}
                      <Link href="/blog/kashmere-gate-delhi-travel-guide">
                        Kashmere Gate
                      </Link>{" "}
                      — Delhi's biggest metro interchange — are both a short
                      ride or walk from the northern edge of the walled city.
                    </li>
                    <li>
                      <strong>Auto-rickshaws & app cabs:</strong> Good for
                      reaching the edge of Old Delhi, but they can't enter
                      most of the interior lanes — expect to be dropped near
                      Red Fort, Jama Masjid, or the Chandni Chowk metro exit
                      and continue on foot from there.
                    </li>
                    <li>
                      <strong>Cycle-rickshaw:</strong> The classic way to
                      move through Old Delhi's narrow lanes, and genuinely
                      the best option for covering the length of Chandni
                      Chowk or shuttling between Red Fort and Jama Masjid
                      without exhausting yourself. Agree on a fare before
                      setting off.
                    </li>
                    <li>
                      <strong>Walking:</strong> Non-negotiable once you're
                      inside the haveli lanes, Kinari Bazaar, or Dariba
                      Kalan — these alleys are too narrow for any vehicle,
                      cycle-rickshaws included.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Exit at Chandni Chowk metro
                    station rather than Chawri Bazar if Red Fort is your
                    first stop of the day — it puts you right at the start of
                    the main Chandni Chowk stretch, walking distance from the
                    fort's Lahori Gate entrance.
                  </div>
                </section>

                {/* ── Red Fort ──────────────────────────────────────────── */}
                <section id="red-fort">
                  <h2>Red Fort (Lal Qila)</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Historic sandstone fortress architecture reminiscent of Old Delhi's Red Fort"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Red Fort</strong>, or Lal Qila, was built between{" "}
                    <strong>1638 and 1648</strong> as the fortified palace
                    complex for Shah Jahan's new capital, and it remained the
                    Mughal emperors' seat of power for over two centuries.
                    Its massive red sandstone walls run nearly 2.5 km around
                    the complex, enclosing pavilions, palaces, and gardens
                    that once housed one of the most opulent courts in the
                    world. UNESCO inscribed it as a{" "}
                    <strong>World Heritage Site in 2007</strong>, recognising
                    both its architecture and its role as a symbol of Mughal
                    power at its peak.
                  </p>

                  <h3>Independence Day at Red Fort</h3>
                  <p>
                    Red Fort holds a unique place in modern Indian history
                    too — India's Prime Minister hoists the national flag
                    from its ramparts and addresses the nation every{" "}
                    <strong>Independence Day, August 15th</strong>, a
                    tradition that's continued since 1947. If you're
                    visiting Delhi around that date, expect heightened
                    security and possible closures in the days immediately
                    around it.
                  </p>

                  <h3>Sound & Light Show</h3>
                  <p>
                    In the evenings, Red Fort runs a{" "}
                    <strong>sound and light show</strong> inside the complex,
                    narrating the history of the fort and the Mughal dynasty
                    through illuminated architecture and narration —
                    ticketed separately from daytime entry, and a good way
                    to see the fort in a completely different light,
                    literally.
                  </p>

                  <ul>
                    <li>
                      <strong>Hours:</strong> Open daily except Mondays,
                      typically sunrise to sunset for general entry.
                    </li>
                    <li>
                      <strong>Best time to visit:</strong> Early morning,
                      right at opening, for cooler temperatures and the
                      thinnest crowds.
                    </li>
                    <li>
                      <strong>Don't miss:</strong> The Diwan-i-Aam (Hall of
                      Public Audience), Diwan-i-Khas (Hall of Private
                      Audience), and the Chhatta Chowk covered bazaar just
                      inside the Lahori Gate entrance.
                    </li>
                  </ul>
                </section>

                {/* ── Jama Masjid ───────────────────────────────────────── */}
                <section id="jama-masjid">
                  <h2>Jama Masjid</h2>
                  <p>
                    A short walk from Red Fort stands <strong>Jama
                    Masjid</strong>, <strong>India's largest mosque</strong>{" "}
                    and one of Shah Jahan's final major commissions,{" "}
                    <strong>completed in 1656</strong>. Its vast red
                    sandstone and white marble courtyard can hold around
                    25,000 worshippers at once, and the mosque remains
                    active — Friday prayers here draw enormous crowds from
                    across the city.
                  </p>

                  <h3>Climbing the Minaret</h3>
                  <p>
                    For a small extra fee, you can climb the narrow spiral
                    staircase of the mosque's southern minaret for a
                    sweeping, genuinely spectacular view over Old Delhi's
                    rooftops, domes, and the distant Red Fort — one of the
                    best vantage points in the entire city, and worth the
                    tight, slightly claustrophobic climb.
                  </p>

                  <h3>Mosque Etiquette</h3>
                  <ul>
                    <li>
                      <strong>Dress modestly:</strong> Covered shoulders and
                      legs for everyone; women are typically expected to
                      cover their heads, and robes are usually available to
                      borrow at the entrance if you arrive without one.
                    </li>
                    <li>
                      <strong>Remove footwear</strong> before entering the
                      courtyard — you can usually pay a small fee to have
                      shoes minded at the entrance.
                    </li>
                    <li>
                      <strong>Camera fee:</strong> A modest charge typically
                      applies for photography, checked at the entrance.
                    </li>
                  </ul>
                </section>

                {/* ── Chandni Chowk ─────────────────────────────────────── */}
                <section id="chandni-chowk">
                  <h2>Chandni Chowk Food Walk</h2>
                  <p>
                    No visit to Old Delhi is complete without at least a
                    taste of the <strong>Chandni Chowk food walk</strong> —
                    one of India's most legendary street food streets,
                    running from the Red Fort end all the way to Fatehpuri
                    Masjid. This guide covers only the highlights; for a
                    dedicated, stop-by-stop food trail with specific shops
                    and dishes, see our full{" "}
                    <Link href="/blog/chandni-chowk-delhi-travel-guide">
                      Chandni Chowk travel guide
                    </Link>
                    .
                  </p>
                  <ul>
                    <li>
                      <strong>Parathe Wali Gali:</strong> A narrow lane
                      dedicated entirely to stuffed parathas, running for
                      over a century, tucked just off the main Chandni Chowk
                      road.
                    </li>
                    <li>
                      <strong>Chaat stalls:</strong> Golgappe, aloo tikki,
                      and dahi bhalla from long-standing vendors — Old
                      Delhi's chaat is considered among the country's best.
                    </li>
                    <li>
                      <strong>Jalebi and lassi:</strong> Fresh, hot jalebis
                      and thick, creamy lassi from vendors who've been
                      frying and churning in the same spots for generations.
                    </li>
                  </ul>
                  <blockquote>
                    Go hungry, go slow, and share plates — the joy of
                    Chandni Chowk's food walk is in stopping often, not
                    finishing fast.
                  </blockquote>
                </section>

                {/* ── Bazaars ───────────────────────────────────────────── */}
                <section id="bazaars">
                  <h2>Haveli Lanes & Bazaars</h2>
                  <p>
                    Step off Chandni Chowk's main road and Old Delhi shifts
                    completely — narrower, quieter in traffic if not in
                    noise, and lined with crumbling havelis that hint at
                    what the neighbourhood looked like at its 19th-century
                    peak.
                  </p>
                  <ul>
                    <li>
                      <strong>Kinari Bazaar:</strong> A dazzling lane
                      dedicated to wedding and festival supplies — zari
                      trims, sequins, garlands, and bridal accessories
                      spilling out of tiny, tightly packed shopfronts.
                    </li>
                    <li>
                      <strong>Dariba Kalan:</strong> Old Delhi's historic
                      silver and jewellery market, in business since the
                      Mughal era, still a serious destination for gold and
                      silver jewellery today.
                    </li>
                    <li>
                      <strong>Haveli lanes:</strong> Wander the smaller
                      alleys branching off the main bazaars for a glimpse of
                      old carved facades, ornate balconies, and courtyard
                      entrances — many now subdivided but still
                      architecturally striking.
                    </li>
                  </ul>
                </section>

                {/* ── Fatehpuri Masjid ──────────────────────────────────── */}
                <section id="fatehpuri-masjid">
                  <h2>Fatehpuri Masjid</h2>
                  <p>
                    Marking the western end of Chandni Chowk,{" "}
                    <strong>Fatehpuri Masjid</strong> was built in 1650 by
                    Fatehpuri Begum, one of Shah Jahan's wives, and remains
                    an active neighbourhood mosque — quieter and far less
                    visited than Jama Masjid, but a peaceful stop right at
                    the edge of the Khari Baoli spice market. It's a natural
                    endpoint if you're walking the length of Chandni Chowk
                    from Red Fort.
                  </p>
                </section>

                {/* ── Gurudwara ─────────────────────────────────────────── */}
                <section id="gurudwara">
                  <h2>Gurudwara Sis Ganj Sahib</h2>
                  <p>
                    Right on the main Chandni Chowk road stands{" "}
                    <strong>Gurudwara Sis Ganj Sahib</strong>, one of Sikhism's
                    most important gurudwaras, built to mark the site where
                    Guru Tegh Bahadur was executed in 1675. Visitors of any
                    faith are welcome — cover your head (scarves are
                    provided at the entrance if needed), remove your shoes,
                    and consider joining the free community meal (langar)
                    served daily to anyone who walks in, regardless of
                    background.
                  </p>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Half-Day Walking Itinerary</h2>
                  <p>
                    Four to five focused hours cover Old Delhi's essentials
                    without rushing — start early to beat both the heat and
                    the Chandni Chowk crowds.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "8:00 AM",
                        title: "Red Fort",
                        color: "bg-amber-700",
                        activities: [
                          "Enter via Lahori Gate, walk the Chhatta Chowk bazaar",
                          "Diwan-i-Aam and Diwan-i-Khas",
                          "Budget 60–90 minutes for the full complex",
                        ],
                      },
                      {
                        day: "9:30 AM",
                        title: "Jama Masjid",
                        color: "bg-forest-600",
                        activities: [
                          "Short walk or cycle-rickshaw from Red Fort",
                          "Explore the courtyard, climb the minaret for the view",
                          "Cover shoulders and knees; remove footwear",
                        ],
                      },
                      {
                        day: "11:00 AM",
                        title: "Chandni Chowk Food Walk",
                        color: "bg-sky-600",
                        activities: [
                          "Parathe Wali Gali for a stuffed paratha",
                          "Chaat and jalebi stops along the main road",
                          "Gurudwara Sis Ganj Sahib for a quiet pause",
                        ],
                      },
                      {
                        day: "12:30 PM",
                        title: "Bazaars & Havelis",
                        color: "bg-purple-600",
                        activities: [
                          "Kinari Bazaar for wedding-lane browsing",
                          "Dariba Kalan's silver shops",
                          "Wander the haveli lanes off the main road",
                        ],
                      },
                      {
                        day: "1:30 PM",
                        title: "Fatehpuri Masjid & Lunch",
                        color: "bg-stone-600",
                        activities: [
                          "Fatehpuri Masjid at the western end of Chandni Chowk",
                          "Sit-down lunch — kebabs or Mughlai food nearby",
                          "Wind down before heading out via metro",
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

                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Staying in{" "}
                    <Link href="/blog/karol-bagh-delhi-travel-guide">
                      Karol Bagh
                    </Link>{" "}
                    puts you a short metro ride from Old Delhi and is a
                    popular budget base for exactly this kind of half-day
                    trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Old Delhi</h2>
                  <p>
                    Beyond the Chandni Chowk food walk itself, Old Delhi has
                    a handful of sit-down institutions worth planning a meal
                    around — specific shops that have earned their
                    reputation over decades, sometimes over a century.
                  </p>
                  <ul>
                    <li>
                      <strong>Karim's (near Jama Masjid):</strong> A
                      legendary Mughlai restaurant serving kebabs and
                      biryani since 1913, a short walk from Jama Masjid's
                      Gate 1.
                    </li>
                    <li>
                      <strong>Parathe Wali Gali:</strong> Stuffed parathas —
                      potato, paneer, even rabri-stuffed sweet versions — in
                      a lane that's been serving them since the 1870s.
                    </li>
                    <li>
                      <strong>Old Famous Jalebi Wala:</strong> A Chandni
                      Chowk institution since 1884, frying fresh jalebis
                      through the day at the corner of Dariba Kalan.
                    </li>
                    <li>
                      <strong>Al Jawahar and other kebab shops:</strong>{" "}
                      Clustered around Jama Masjid, serving seekh kebabs,
                      mutton korma, and rumali roti — best eaten hot, fresh
                      off the tawa.
                    </li>
                    <li>
                      <strong>Chaat at the Town Hall stretch:</strong>{" "}
                      Golgappe, aloo tikki, and dahi bhalla from vendors who
                      set up along this section of Chandni Chowk daily.
                    </li>
                    <li>
                      <strong>Ghantewala-style sweets and lassi shops:</strong>{" "}
                      Old Delhi's sweet shops and lassi stalls make a good,
                      cooling counterpoint to the spicier chaat and kebab
                      stops.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Old Delhi is one of the cheapest half-days you can spend
                    anywhere in the city — monument entry and food are both
                    genuinely affordable, even at the mid-range tier.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Splurge"].map(
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
                          ["Red Fort entry", "₹35–₹50", "₹35–₹50", "₹35–₹50"],
                          ["Jama Masjid minaret climb", "₹—", "₹300", "₹300"],
                          [
                            "Street food (per person)",
                            "₹200",
                            "₹500",
                            "₹1,200",
                          ],
                          [
                            "Cycle-rickshaw rides",
                            "₹100",
                            "₹250",
                            "₹400",
                          ],
                          [
                            "Sit-down meal (Karim's, etc.)",
                            "₹300",
                            "₹600",
                            "₹1,500",
                          ],
                          [
                            "Half-day total (approx.)",
                            "₹700",
                            "₹1,700",
                            "₹3,500",
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
                    * Entry fees are typically higher for foreign nationals
                    — check current rates before visiting. Prices exclude
                    getting to Old Delhi itself, which is usually a minimal
                    metro fare from elsewhere in the city.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Old Delhi</h2>
                  <ul>
                    <li>
                      <strong>Go early:</strong> Both Red Fort and Chandni
                      Chowk are far more manageable — and cooler — before 9
                      or 10 AM.
                    </li>
                    <li>
                      <strong>Carry small notes:</strong> Street vendors and
                      cycle-rickshaw drivers rarely have change for large
                      bills.
                    </li>
                    <li>
                      <strong>Agree on rickshaw fares upfront:</strong>{" "}
                      There are no meters — settle the price before you
                      start moving.
                    </li>
                    <li>
                      <strong>Dress modestly for mosques and gurudwaras:</strong>{" "}
                      Covered shoulders and knees at minimum; a headscarf
                      for Jama Masjid and Gurudwara Sis Ganj Sahib.
                    </li>
                    <li>
                      <strong>Keep bags zipped and in front:</strong> Dense
                      crowds in Chandni Chowk and the bazaars make
                      pickpocketing possible — stay aware, especially with
                      phones and cameras.
                    </li>
                    <li>
                      <strong>Pace your street food:</strong> Spread it out
                      across the walk rather than trying everything at one
                      stop — and carry basic digestive medication if you're
                      not used to Indian street food.
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
                          "Start at Red Fort early to beat heat and crowds",
                          "Take a cycle-rickshaw along Chandni Chowk",
                          "Climb the Jama Masjid minaret for the view",
                          "Dress modestly for mosques and the gurudwara",
                          "Carry small notes for street vendors",
                          "Pace your street food across the whole walk",
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
                          "Visit Red Fort on a Monday — it's closed",
                          "Wear revealing clothing into Jama Masjid",
                          "Carry loose valuables in dense market crowds",
                          "Skip haggling on cycle-rickshaw fares",
                          "Rush the food walk — slow down and share plates",
                          "Expect vehicles inside the narrowest haveli lanes",
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

                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🗺️ Extend the trip:</strong> Combine Old Delhi
                    with{" "}
                    <Link href="/blog/kashmere-gate-delhi-travel-guide">
                      Kashmere Gate
                    </Link>{" "}
                    to the north for more colonial-era and Mutiny-period
                    history, or head back toward{" "}
                    <Link href="/blog/karol-bagh-delhi-travel-guide">
                      Karol Bagh
                    </Link>{" "}
                    for budget shopping and a base for the rest of your{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi trip</Link>.
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
                  "Old Delhi",
                  "Delhi",
                  "Shahjahanabad",
                  "Red Fort",
                  "Jama Masjid",
                  "Chandni Chowk",
                  "Street Food",
                  "Heritage Walk",
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
                sections={OLD_DELHI_GEAR}
                destination="Old Delhi"
              />

              <RelatedPostsGrid currentSlug="old-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="old-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
