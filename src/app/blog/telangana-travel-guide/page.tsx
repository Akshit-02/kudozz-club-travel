// src/app/blog/telangana-travel-guide/page.tsx
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
  title: "Telangana Travel Guide: Hyderabad, Warangal & Temples",
  description:
    "The complete Telangana travel guide — Hyderabad's Charminar and Golconda Fort, Kakatiya-era Warangal, the Yadadri-Bhadrachalam-Vemulawada-Srisailam temple circuit, Nagarjuna Sagar, waterfalls, wildlife, where to stay and eat, and a full itinerary.",
  keywords:
    "Telangana travel guide, Hyderabad travel guide, Charminar, Golconda Fort, Warangal Kakatiya heritage, Yadadri temple, Bhadrachalam, Vemulawada, Srisailam, Nagarjuna Sagar, Ananthagiri Hills, Laknavaram lake, Bogatha waterfall, Kuntala waterfall, Alampur temples, Medaram Jatara, Kawal Tiger Reserve, Telangana itinerary, best time to visit Telangana, how to reach Telangana, Telangana 5 day itinerary, Telangana budget trip",
  openGraph: {
    title: "Telangana Travel Guide: Hyderabad, Warangal & Temples",
    description:
      "Nizam-era palaces, Kakatiya temples, a Jyotirlinga in a tiger-country gorge, and Hyderabadi biryani — the complete guide to Telangana.",
    url: "https://club.kudozz.in/blog/telangana-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Grand South Indian temple architecture at golden hour, evoking Telangana's Kakatiya and Qutb Shahi heritage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telangana Travel Guide: Hyderabad, Warangal & Temples",
    description:
      "Nizam-era palaces, Kakatiya temples, and a Jyotirlinga in a tiger-country gorge — the complete guide to Telangana.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/telangana-travel-guide",
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
          headline: "Telangana Travel Guide: Hyderabad, Warangal & Temples",
          description: "The complete Telangana travel guide.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
          datePublished: "2026-09-03",
          dateModified: "2026-09-03",
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
            "@id": "https://club.kudozz.in/blog/telangana-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Telangana",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Telangana",
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
                name: "Telangana",
                item: "https://club.kudozz.in/blog?category=telangana",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Travel Guide",
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
    q: "How many days do I need for a Telangana trip?",
    a: "Five days is a comfortable minimum — two for Hyderabad's Charminar, Golconda Fort, and food scene, one for a Warangal-Kakatiya heritage day trip, and two for the Yadadri-Bhadrachalam-Vemulawada-Srisailam temple circuit or the Nagarjuna Sagar-Nallamala nature side, depending on your interest.",
  },
  {
    q: "What is the best time to visit Telangana?",
    a: "October to February is the pick — cool, dry conditions (15–30°C) make Hyderabad's Old City walks and Golconda's climb genuinely pleasant. April to June brings intense Deccan heat that makes outdoor sightseeing uncomfortable, though the monsoon (June–September) is actually the best window specifically for the state's waterfalls.",
  },
  {
    q: "How do I reach Telangana?",
    a: "Flying into Hyderabad's Rajiv Gandhi International Airport is by far the most practical option, with excellent connectivity from across India and internationally. Hyderabad is also a major rail junction and well connected by national highways, making road and rail entirely workable too.",
  },
  {
    q: "What is the budget for a Telangana trip?",
    a: "A 5-day trip runs roughly ₹10,000 on a budget level up to ₹60,000 on a luxury level, excluding flights. Hyderabad itself is inexpensive by Indian metro standards, though day trips to Warangal, Srisailam, or Nagarjuna Sagar add meaningfully to local transport costs.",
  },
  {
    q: "What are the top things to do in Telangana?",
    a: "The highlights are Hyderabad's Charminar and Golconda Fort with its acoustic wonders and evening sound-and-light show; Warangal's Kakatiya-era Thousand Pillar Temple and fort; the Yadadri, Bhadrachalam, Vemulawada, and Srisailam temple circuit; Nagarjuna Sagar's dam and Buddhist island heritage; and offbeat nature spots like Ananthagiri Hills, Laknavaram Lake, and the Bogatha and Kuntala waterfalls.",
  },
  {
    q: "Is Hyderabadi biryani really worth the hype?",
    a: "Yes — dum-style Hyderabadi biryani, slow-cooked with the rice and meat sealed together, is genuinely one of India's defining regional dishes, best tried at an established old-city institution rather than a generic restaurant. Pair it with Irani chai and an Osmania biscuit at one of the city's old Irani cafes for the full experience.",
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
  { id: "introduction", title: "Why Telangana?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Telangana", level: 2 },
  { id: "hyderabad", title: "Hyderabad: Charminar & Golconda", level: 2 },
  { id: "warangal", title: "Warangal: Kakatiya Heritage", level: 2 },
  { id: "temple-circuit", title: "The Temple Circuit", level: 2 },
  { id: "nature-offbeat", title: "Nature, Lakes & Offbeat Trails", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "5-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Telangana-specific gear ─────────────────────────────────────────────────
const TELANGANA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for Deccan heat, fort climbs, temple queues, and monsoon waterfall trips",
    emoji: "🕌",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "Golconda Fort's climb and Hyderabad's Old City lanes both involve extended walking on uneven stone.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "The climb to Golconda's Bala Hissar pavilion and the uneven paths around temple complexes both reward proper footwear.",
      },
      {
        name: "Sunscreen (SPF 50)",
        description:
          "Telangana's Deccan sun is intense for much of the year, especially on open fort ramparts and temple courtyards.",
        price: "₹399",
        rating: 4.5,
        reviews: "11k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("sunscreen+spf+50+travel"),
        tag: "Deccan heat essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Fort and temple sightseeing here means long stretches in direct sun with little shade — sunscreen is not optional.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Handy across long days at Golconda, the temple circuit, and Warangal's heritage sites.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Telangana's heat makes staying hydrated a real priority, and shops thin out around temple and fort complexes.",
      },
      {
        name: "Light Cotton Clothing",
        description:
          "Breathable, modest clothing suited to both the Deccan heat and temple/mosque dress codes.",
        price: "₹899",
        rating: 4.3,
        reviews: "5.4k",
        image: "👕",
        affiliateUrl: amazonSearchUrl("light+cotton+travel+clothing"),
        tag: "Climate essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Most of Telangana's major sights are temples and mosques with modest-dress expectations, in a genuinely hot climate.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for day trips to Warangal, Srisailam, or Nagarjuna Sagar, where charging points thin out.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Long day trips outside Hyderabad mean fewer charging opportunities than the city offers.",
      },
      {
        name: "Compact Rain Jacket",
        description:
          "Worth carrying if timing a visit around the monsoon to catch the Bogatha or Kuntala waterfalls at their fullest.",
        price: "₹599",
        rating: 4.3,
        reviews: "4.6k",
        image: "🌂",
        affiliateUrl: amazonSearchUrl("rain+jacket+poncho+travel"),
        tag: "Monsoon essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "The waterfalls are at their most dramatic exactly when Telangana's monsoon rain is heaviest.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TelanganaGuidePage() {
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
              alt="Grand South Indian temple architecture at golden hour, evoking Telangana's Kakatiya and Qutb Shahi heritage"
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
                { label: "Telangana", href: "/blog?category=telangana" },
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
                "Telangana",
                "Hyderabad",
                "Charminar",
                "Golconda Fort",
                "Warangal",
                "Temple Circuit",
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
              Telangana Travel Guide: Hyderabad, Warangal & Temples
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A city built on diamonds and biryani, a Kakatiya capital carved
              in stone, and a temple circuit running from a gold-plated hill
              shrine to a Jyotirlinga hidden in tiger country — Telangana is
              the Deccan at its most layered.
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
                  text: "Telangana, South India",
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
                  <h2>Why Telangana?</h2>
                  <p>
                    Carved out of Andhra Pradesh in 2014, <strong>Telangana</strong>{" "}
                    is one of India's youngest states but one of its oldest
                    travel destinations — a Deccan plateau landscape layered
                    with Kakatiya-era temple architecture, Qutb Shahi
                    fortresses, and two centuries of Nizam-era grandeur
                    centred on its capital, Hyderabad.
                  </p>
                  <p>
                    Hyderabad alone justifies a trip: <strong>Charminar</strong>{" "}
                    and <strong>Golconda Fort</strong> anchor an Old City that
                    still runs on bangle bazaars and biryani, while beyond the
                    capital, <strong>Warangal</strong>'s Thousand Pillar Temple
                    and fort recall the Kakatiya dynasty that once ruled this
                    entire plateau. A temple circuit strings together{" "}
                    <strong>Yadadri</strong>, <strong>Bhadrachalam</strong>,{" "}
                    <strong>Vemulawada</strong>, and <strong>Srisailam</strong>{" "}
                    — the last set inside a tiger reserve on the Krishna
                    river gorge — while <strong>Nagarjuna Sagar</strong>,{" "}
                    <strong>Ananthagiri Hills</strong>, and a string of
                    monsoon waterfalls give the state a genuinely offbeat
                    nature side few visitors expect.
                  </p>
                  <p>
                    Most of this is easy to reach from Hyderabad in a day or
                    two, which makes Telangana an unusually efficient trip —
                    heritage, temples, and nature all within a few hours of
                    one well-connected capital.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕌</span> Telangana at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Telangana" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Hyderabad (RGIA)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🏰",
                          label: "Known For",
                          value: "Charminar, Golconda, Temples",
                        },
                        {
                          icon: "🍛",
                          label: "Signature Dish",
                          value: "Hyderabadi Biryani",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹8,000",
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
                  <h2>Best Time to Visit Telangana</h2>
                  <p>
                    Telangana's Deccan climate runs hot for much of the
                    year, with a short but intense monsoon — timing shapes
                    both comfort and what's worth prioritising.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and pleasant (15–30°C) — the most comfortable window for Golconda's climb, Old City walks, and the temple circuit.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — Deccan summer",
                        text: "Temperatures climb steeply, often past 40°C by May — daytime sightseeing at forts and temples gets genuinely uncomfortable.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — waterfall season",
                        text: "Hot and humid with heavy spells of rain, but this is exactly when Bogatha and Kuntala waterfalls run at their fullest and most dramatic.",
                      },
                      {
                        season: "Feb – Mar",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Medaram Jatara (biennial)",
                        text: "Once every two years, the Sammakka Saralamma Jatara draws one of the world's largest tribal gatherings to Medaram — worth timing a trip around if it aligns.",
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
                    <strong>Our pick:</strong> October to February — cool,
                    dry conditions that make both Hyderabad's heritage
                    circuit and day trips to Warangal or the temple towns
                    genuinely comfortable.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Telangana</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Rajiv Gandhi International
                      Airport in Hyderabad has excellent domestic and
                      international connectivity — by far the most practical
                      gateway.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Hyderabad and Secunderabad are
                      major railway junctions with direct trains from almost
                      every large Indian city.
                    </li>
                    <li>
                      <strong>By Road:</strong> Hyderabad is well connected by
                      national highways to Bengaluru, Chennai, Pune, and
                      Nagpur, and internal state roads to Warangal, Srisailam,
                      and Nagarjuna Sagar are generally in good condition.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Base yourself in Hyderabad for
                    the whole trip — nearly every other Telangana highlight in
                    this guide is a comfortable day trip or a single overnight
                    away.
                  </div>
                </section>

                {/* ── Hyderabad ─────────────────────────────────────────── */}
                <section id="hyderabad">
                  <h2>Hyderabad: Charminar & Golconda</h2>
                  <p>
                    Telangana's capital blends Qutb Shahi and Nizam-era
                    heritage with a genuinely thriving modern IT economy —
                    most visitors base themselves here for the whole trip.
                    See our full{" "}
                    <Link href="/blog/hyderabad-travel-guide">
                      Hyderabad travel guide
                    </Link>{" "}
                    for the deep dive.
                  </p>
                  <ul>
                    <li>
                      <strong>Charminar:</strong> Built in 1591, the city's
                      defining monument, surrounded by the Old City's Laad
                      Bazaar. See our dedicated{" "}
                      <Link href="/blog/charminar-travel-guide">
                        Charminar guide
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Golconda Fort:</strong> A hilltop Qutb Shahi
                      citadel famous for its acoustic engineering and evening
                      sound-and-light show. See our dedicated{" "}
                      <Link href="/blog/golconda-fort-travel-guide">
                        Golconda Fort guide
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Hussain Sagar & Ramoji Film City:</strong> A
                      lake with a monolithic Buddha statue at its centre, and
                      one of the world's largest film studio complexes on the
                      city's edge — both easy half or full-day additions.
                    </li>
                  </ul>
                </section>

                {/* ── Warangal ──────────────────────────────────────────── */}
                <section id="warangal">
                  <h2>Warangal: Kakatiya Heritage</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="Ancient South Indian temple architecture, evoking Warangal's Kakatiya-era stone temples"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Warangal</strong>, roughly 150 km from Hyderabad,
                    was the capital of the Kakatiya dynasty from the 12th to
                    14th centuries, and its stone architecture still shows why
                    the dynasty is remembered as one of the Deccan's great
                    temple-building powers. See our dedicated{" "}
                    <Link href="/blog/warangal-travel-guide">
                      Warangal travel guide
                    </Link>{" "}
                    for the full itinerary.
                  </p>
                  <ul>
                    <li>
                      <strong>Thousand Pillar Temple:</strong> A star-shaped
                      Kakatiya-era temple famed for its intricately carved
                      pillars, each reportedly distinct.
                    </li>
                    <li>
                      <strong>Warangal Fort:</strong> A massive Kakatiya
                      fortification with distinctive carved gateways (the
                      Kakatiya Kala Thoranam), now partly in ruins but still
                      striking.
                    </li>
                    <li>
                      <strong>Ramappa Temple:</strong> A short drive from
                      Warangal, this Kakatiya-era temple was inscribed as a
                      UNESCO World Heritage Site in 2021, worth combining with
                      the main city sights.
                    </li>
                  </ul>
                </section>

                {/* ── Temple Circuit ────────────────────────────────────── */}
                <section id="temple-circuit">
                  <h2>The Temple Circuit</h2>
                  <p>
                    Telangana's temple towns range from a gold-plated hill
                    shrine barely an hour from Hyderabad to a Jyotirlinga deep
                    inside a tiger reserve — each merits its own dedicated
                    guide, linked below.
                  </p>
                  <ul>
                    <li>
                      <strong>Yadadri:</strong> The Yadagirigutta hill temple
                      to Lord Narasimha, recently redeveloped with a striking
                      gold-plated gopuram. See{" "}
                      <Link href="/blog/yadadri-travel-guide">
                        our Yadadri guide
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Bhadrachalam:</strong> A Rama temple town on the
                      banks of the Godavari river, one of Telangana's most
                      important Vaishnavite pilgrimage sites. See{" "}
                      <Link href="/blog/bhadrachalam-travel-guide">
                        our Bhadrachalam guide
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Vemulawada:</strong> A Shiva temple town
                      sometimes called the "Dakshina Kashi" (Kashi of the
                      South). See{" "}
                      <Link href="/blog/vemulawada-travel-guide">
                        our Vemulawada guide
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Srisailam:</strong> Home to one of the twelve
                      Jyotirlingas, set inside the Nallamala forest on a
                      dramatic Krishna river gorge. See{" "}
                      <Link href="/blog/srisailam-travel-guide">
                        our Srisailam guide
                      </Link>
                      .
                    </li>
                  </ul>
                </section>

                {/* ── Nature & Offbeat ──────────────────────────────────── */}
                <section id="nature-offbeat">
                  <h2>Nature, Lakes & Offbeat Trails</h2>
                  <p>
                    Beyond heritage and temples, Telangana has a genuinely
                    offbeat nature side — dams, hill stations, cantilever
                    bridges over island-dotted lakes, and monsoon waterfalls
                    most visitors never hear about.
                  </p>
                  <ul>
                    <li>
                      <strong>Nagarjuna Sagar:</strong> One of the world's
                      largest masonry dams, with the Buddhist heritage island
                      of Nagarjunakonda nearby. See{" "}
                      <Link href="/blog/nagarjuna-sagar-travel-guide">
                        our Nagarjuna Sagar guide
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Ananthagiri Hills:</strong> A cool hill retreat
                      near Vikarabad, home to rare coffee plantations for the
                      state. See{" "}
                      <Link href="/blog/ananthagiri-hills-travel-guide">
                        our Ananthagiri Hills guide
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Laknavaram Lake:</strong> A scenic lake with a
                      cantilever bridge weaving between small islands. See{" "}
                      <Link href="/blog/laknavaram-travel-guide">
                        our Laknavaram guide
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Bogatha & Kuntala Waterfalls:</strong> Two of
                      Telangana's most dramatic monsoon-season waterfalls,
                      Kuntala being the state's tallest. See{" "}
                      <Link href="/blog/bogatha-waterfall-travel-guide">
                        Bogatha
                      </Link>{" "}
                      and{" "}
                      <Link href="/blog/kuntala-waterfall-travel-guide">
                        Kuntala
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Kawal Tiger Reserve:</strong> A forested tiger
                      reserve in Adilabad-Mancherial district. See{" "}
                      <Link href="/blog/kawal-tiger-reserve-travel-guide">
                        our Kawal guide
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Medaram & Alampur:</strong> Medaram hosts the
                      biennial Sammakka Saralamma Jatara, one of the world's
                      largest tribal gatherings; Alampur has the ancient
                      Navabrahma Temples at a river confluence. See{" "}
                      <Link href="/blog/medaram-travel-guide">Medaram</Link>{" "}
                      and{" "}
                      <Link href="/blog/alampur-travel-guide">Alampur</Link>.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is heavily concentrated in Hyderabad —
                    outside the capital, expect simpler tourism-department or
                    temple-trust guesthouses rather than full-service hotels.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹900–₹2,000/night",
                        picks: [
                          "Guesthouses near the Old City, Hyderabad",
                          "Telangana Tourism lodges",
                          "Temple-trust guesthouses (Yadadri, Srisailam)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,500/night",
                        picks: [
                          "Business hotels, Hyderabad/Banjara Hills",
                          "Warangal city hotels",
                          "Resort-style stays, Nagarjuna Sagar",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹6,000–₹15,000+/night",
                        picks: [
                          "Falaknuma Palace, Hyderabad",
                          "Premium 5-star chains, Hyderabad",
                          "Boutique heritage stays, Old City",
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
                    Base yourself in Hyderabad for the whole trip and take day
                    trips or a single overnight for Warangal, the temple
                    circuit, or Nagarjuna Sagar — dedicated tourist
                    accommodation elsewhere in the state is comparatively
                    thin.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Telangana</h2>
                  <ul>
                    <li>
                      <strong>Hyderabadi Biryani:</strong> Slow-cooked
                      dum-style biryani with rice and meat sealed and cooked
                      together — the state's defining dish, best tried at an
                      established Old City institution.
                    </li>
                    <li>
                      <strong>Irani Chai & Osmania Biscuits:</strong> A
                      Hyderabad institution — strong, milky tea paired with a
                      slightly salty-sweet biscuit at one of the city's old
                      Irani cafes.
                    </li>
                    <li>
                      <strong>Haleem:</strong> A rich, slow-cooked
                      meat-and-wheat stew, especially prominent during
                      Ramadan but available at specialist counters
                      year-round.
                    </li>
                    <li>
                      <strong>Telangana thali fare:</strong> Beyond
                      Hyderabad's Nizami cooking, the wider state's cuisine
                      leans on jowar and bajra rotis, spicy curries, and
                      pickles distinct from neighbouring Andhra's food
                      traditions.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>5-Day Telangana Itinerary</h2>
                  <p>
                    Five days is a comfortable minimum to cover Hyderabad,
                    Warangal, and either the temple circuit or the nature
                    side without excessive rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Hyderabad Old City",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Charminar and Laad Bazaar",
                          "Evening: Golconda Fort sound-and-light show",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Hyderabad Highlights",
                        color: "bg-sky-600",
                        activities: [
                          "Salar Jung Museum and Chowmahalla Palace",
                          "Hussain Sagar and Necklace Road",
                          "Biryani trail dinner",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Warangal Day Trip",
                        color: "bg-forest-600",
                        activities: [
                          "Drive to Warangal (~150 km)",
                          "Thousand Pillar Temple and Warangal Fort",
                          "Ramappa Temple before returning",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Yadadri & Temple Circuit",
                        color: "bg-purple-600",
                        activities: [
                          "Yadadri temple darshan",
                          "Onward to Bhadrachalam or Vemulawada",
                          "Overnight near the temple town",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Nagarjuna Sagar & Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Nagarjuna Sagar dam and Nagarjunakonda island",
                          "Return to Hyderabad",
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
                            "₹1,200",
                            "₹3,500",
                            "₹9,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹500",
                            "₹1,200",
                            "₹3,000",
                          ],
                          ["Activities/day", "₹300", "₹700", "₹1,500"],
                          ["Daily total", "₹2,500", "₹6,600", "₹16,000"],
                          [
                            "5-Day trip total",
                            "₹10,000",
                            "₹28,000",
                            "₹60,000",
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
                    * Excludes flights to Hyderabad. Local transport costs
                    rise significantly on days covering Warangal, Srisailam,
                    or Nagarjuna Sagar given the distances involved.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Telangana</h2>
                  <ul>
                    <li>
                      <strong>Base yourself in Hyderabad:</strong> Nearly
                      every highlight in this guide is a comfortable day trip
                      or single overnight from the capital.
                    </li>
                    <li>
                      <strong>Avoid peak summer (Apr–Jun):</strong>{" "}
                      Deccan heat makes fort climbs and temple queues
                      genuinely difficult in this window.
                    </li>
                    <li>
                      <strong>Time waterfall visits for monsoon:</strong>{" "}
                      Bogatha and Kuntala are dramatically fuller June–September,
                      though roads can be slippery.
                    </li>
                    <li>
                      <strong>Dress modestly at temples and mosques:</strong>{" "}
                      Charminar's mosque, Yadadri, Bhadrachalam, and
                      Srisailam all expect modest clothing.
                    </li>
                    <li>
                      <strong>Try biryani at an old-city institution:</strong>{" "}
                      The difference between an average and an excellent
                      Hyderabadi biryani is significant — seek out an
                      established name.
                    </li>
                    <li>
                      <strong>Hire a car with driver for day trips:</strong>{" "}
                      Warangal, Srisailam, and Nagarjuna Sagar are far more
                      comfortable by private vehicle than public transport.
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
                          "Visit Golconda Fort in the evening for the sound-and-light show",
                          "Try Hyderabadi biryani at an established Old City spot",
                          "Dress modestly at temples and the Charminar mosque",
                          "Hire a car with driver for Warangal or Srisailam day trips",
                          "Time a waterfall trip for the monsoon months",
                          "Carry cash for smaller temple towns",
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
                          "Plan outdoor sightseeing for peak summer afternoons",
                          "Rush Golconda Fort — the climb and history need time",
                          "Skip modest dress at religious sites",
                          "Rely on public transport for Warangal or Srisailam",
                          "Expect resort-style stays outside Hyderabad",
                          "Visit waterfalls right after heavy rain without checking conditions",
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
                  "Telangana",
                  "Hyderabad",
                  "Charminar",
                  "Golconda Fort",
                  "Warangal",
                  "Temple Circuit",
                  "Deccan Heritage",
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
                sections={TELANGANA_GEAR}
                destination="Telangana"
              />

              <RelatedPostsGrid currentSlug="telangana-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="telangana-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
