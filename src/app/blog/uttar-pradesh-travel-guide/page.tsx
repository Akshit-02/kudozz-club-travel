// src/app/blog/uttar-pradesh-travel-guide/page.tsx
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
  title: "Uttar Pradesh Travel Guide: Taj Mahal, Varanasi & Lucknow",
  description:
    "The complete Uttar Pradesh travel guide — the Taj Mahal and Agra Fort, Varanasi's ancient ghats and Ganga Aarti, Lucknow's Nawabi food and architecture, Ayodhya, where to stay and eat, and a full itinerary through India's most historically dense state.",
  keywords:
    "Uttar Pradesh travel guide, Taj Mahal, Agra travel guide, Varanasi travel guide, Lucknow travel guide, Ganga Aarti, Fatehpur Sikri, Ayodhya Ram Mandir, Mathura Vrindavan, UP itinerary",
  openGraph: {
    title: "Uttar Pradesh Travel Guide: Taj Mahal, Varanasi & Lucknow",
    description:
      "The Taj Mahal, the ghats of Varanasi, and the Nawabi elegance of Lucknow — the complete guide to Uttar Pradesh, India's most historically dense state.",
    url: "https://club.kudozz.in/blog/uttar-pradesh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/udaipur/hero.jpg",
        width: 1200,
        height: 630,
        alt: "White marble monument reflected in still water, evoking the Taj Mahal at sunrise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uttar Pradesh Travel Guide: Taj Mahal, Varanasi & Lucknow",
    description:
      "The Taj Mahal, ancient Varanasi ghats, and Lucknow's Nawabi elegance — the complete guide to Uttar Pradesh.",
    images: ["/images/destinations/udaipur/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/uttar-pradesh-travel-guide",
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
            "Uttar Pradesh Travel Guide: Taj Mahal, Varanasi & Lucknow",
          description: "The complete Uttar Pradesh travel guide.",
          image: "https://club.kudozz.in/images/destinations/udaipur/hero.jpg",
          datePublished: "2026-07-19",
          dateModified: "2026-07-19",
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
            "@id": "https://club.kudozz.in/blog/uttar-pradesh-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Uttar Pradesh",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttar Pradesh",
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
                name: "Uttar Pradesh Travel Guide",
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
  { id: "introduction", title: "Why Uttar Pradesh?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "agra", title: "Agra: Taj Mahal & Beyond", level: 2 },
  { id: "varanasi", title: "Varanasi: The Ghats & Ganga Aarti", level: 2 },
  { id: "lucknow", title: "Lucknow: Nawabi Elegance", level: 2 },
  { id: "other-cities", title: "Ayodhya, Mathura & Vrindavan", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "6-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Uttar Pradesh-specific gear ─────────────────────────────────────────────
const UP_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for monument queues, riverside pre-dawn starts, and a state with intense seasonal heat",
    emoji: "🕌",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "The Taj Mahal complex, Agra Fort, Varanasi's ghats and narrow lanes, and Lucknow's Bara Imambara all involve extended walking on stone and uneven surfaces.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Monument essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Varanasi's ghats alone stretch several kilometres along the river — comfortable, closed footwear beats sandals for a full day of walking there.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Agra and Lucknow get extremely hot for much of the year, and monument complexes like the Taj Mahal have long uncovered stretches.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Summer in the Gangetic plains regularly crosses 42°C — hydration matters more here than in almost any other Indian travel circuit.",
      },
      {
        name: "Wide-Brim Sun Hat",
        description:
          "Useful across the entire Taj Mahal complex, which has almost no shade over its main approach and gardens.",
        price: "₹399",
        rating: 4.3,
        reviews: "5.6k",
        image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"),
        tag: "Sun essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Most Taj Mahal visits happen at sunrise for the light, but the complex stays fully exposed to the sun through the rest of the day.",
      },
      {
        name: "Modest Travel Scarf / Stole",
        description:
          "Useful for covering shoulders at religious sites in Varanasi, Ayodhya, and Mathura-Vrindavan, and doubles as sun protection.",
        price: "₹499",
        rating: 4.4,
        reviews: "4.1k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("travel+scarf+stole+lightweight"),
        tag: "Temple essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Several of UP's major sites are active religious complexes with modest dress expectations — a lightweight scarf covers most situations.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for long inter-city travel between Agra, Varanasi and Lucknow, and for pre-dawn boat rides on the Ganga.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Travel-day essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Early starts for Ganga Aarti and Taj Mahal sunrise visits mean your phone works hard before you've had a chance to charge it.",
      },
      {
        name: "Basic Digestive Care Kit",
        description:
          "Street food in Lucknow and Varanasi is a highlight of the trip — worth carrying basic medication for first-time visitors trying it extensively.",
        price: "₹399",
        rating: 4.3,
        reviews: "4.8k",
        image: "💊",
        affiliateUrl: amazonSearchUrl("travel+digestive+medicine+kit"),
        tag: "Street-food essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Lucknow's kebabs and Varanasi's chaat are genuinely worth the trip — a basic kit means a stomach upset doesn't derail your itinerary.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function UttarPradeshGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/udaipur/hero.jpg"
              alt="White marble monument reflected in still water, evoking the Taj Mahal at sunrise"
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
                  label: "Uttar Pradesh",
                  href: "/blog?category=uttar-pradesh",
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
                "Taj Mahal",
                "Agra",
                "Varanasi",
                "Lucknow",
                "Ganga Aarti",
                "State Guide",
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
              Uttar Pradesh Travel Guide: Taj Mahal, Varanasi & Lucknow
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The world's most famous monument to love, the ghats where the
              dead and the living share a single riverbank, and a city built
              on Nawabi manners and kebabs — Uttar Pradesh is India's most
              historically dense state, and its most rewarding.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "17 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Uttar Pradesh, Gangetic Plains",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,300 words",
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
                  <h2>Why Uttar Pradesh?</h2>
                  <p>
                    India's most populous state is also arguably its most
                    historically dense — <strong>Uttar Pradesh</strong> is
                    home to the Taj Mahal, one of the world's most recognised
                    buildings, alongside Varanasi, one of the oldest
                    continuously inhabited cities on Earth, and Lucknow, a
                    city that turned courtly manners and slow-cooked meat
                    into an art form.
                  </p>
                  <p>
                    It's not a single-region trip — Agra, Varanasi, and
                    Lucknow sit hundreds of kilometres apart and each
                    deserves dedicated time. But together they cover an
                    extraordinary range: Mughal architecture at its absolute
                    peak, Hindu spirituality at its most intense, and a
                    culinary and cultural tradition (Awadhi/Nawabi) found
                    nowhere else in India.
                  </p>
                  <p>
                    Uttar Pradesh rewards patience — crowds, heat, and
                    logistics can be demanding, but few trips in India offer
                    this concentration of world-class sights.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕌</span> Uttar Pradesh at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Uttar Pradesh" },
                        {
                          icon: "✈️",
                          label: "Gateways",
                          value: "Agra, Varanasi, Lucknow",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🕌",
                          label: "Known For",
                          value: "Taj Mahal, Ghats, Nawabi Culture",
                        },
                        {
                          icon: "🌅",
                          label: "Must-Do",
                          value: "Taj sunrise, Ganga Aarti",
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
                  <h2>Best Time to Visit Uttar Pradesh</h2>
                  <p>
                    Uttar Pradesh sits on the Gangetic plains, with a
                    climate similar to Delhi — sharp seasonal extremes that
                    make timing genuinely important.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable days (10–27°C) make monument-hopping in Agra and the long ghat walks in Varanasi genuinely enjoyable — the peak season.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — avoid if possible",
                        text: "Temperatures regularly cross 42–45°C in Agra and Lucknow. Sightseeing is genuinely uncomfortable outside early morning and evening.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid, river levels rise",
                        text: "The Ganga can rise significantly in Varanasi, submerging lower ghat steps — check conditions before planning ghat-focused activities.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🌫️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Winter — occasional fog",
                        text: "Comfortable temperatures but early-morning fog can delay flights and obscure Taj Mahal sunrise views — build in a buffer day if possible.",
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
                    <strong>Our pick:</strong> late October to February —
                    comfortable temperatures for the Taj Mahal at sunrise,
                    Varanasi's ghats, and long days of walking in Lucknow.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Uttar Pradesh</h2>
                  <ul>
                    <li>
                      <strong>To Agra:</strong> Best reached by the Gatimaan
                      Express or Shatabdi from Delhi (~2 hrs), or by road via
                      the Yamuna Expressway (~3.5 hrs). Agra also has a small
                      airport with limited connections.
                    </li>
                    <li>
                      <strong>To Varanasi:</strong> Lal Bahadur Shastri
                      Airport (VNS) has good domestic connectivity; Varanasi
                      Junction is well connected by rail to Delhi, Kolkata,
                      and most major cities.
                    </li>
                    <li>
                      <strong>To Lucknow:</strong> Chaudhary Charan Singh
                      International Airport has strong domestic and some
                      international connections; Lucknow is also a major
                      rail junction.
                    </li>
                    <li>
                      <strong>Between cities:</strong> Agra–Lucknow (~5 hrs)
                      and Lucknow–Varanasi (~5 hrs) by road or rail — flying
                      is also an option if time is tight.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The Gatimaan Express from
                    Delhi to Agra is India's fastest train and makes a
                    same-day Taj Mahal trip genuinely feasible if you're
                    based in Delhi and short on time.
                  </div>
                </section>

                {/* ── Agra ──────────────────────────────────────────────── */}
                <section id="agra">
                  <h2>Agra: Taj Mahal & Beyond</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Sandstone fortress architecture, evoking Agra Fort's Mughal-era red sandstone walls"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Agra's fame rests almost entirely on one building, but
                    the city has considerably more Mughal-era architecture
                    worth two full days.
                  </p>
                  <ul>
                    <li>
                      <strong>Taj Mahal:</strong> Best visited at sunrise for
                      both the light and thinner crowds — arrive at the
                      gates before opening. Closed on Fridays.
                    </li>
                    <li>
                      <strong>Agra Fort:</strong> A massive red sandstone
                      fort and UNESCO World Heritage Site, from where Shah
                      Jahan reportedly viewed the Taj Mahal during his final
                      years of house arrest.
                    </li>
                    <li>
                      <strong>Fatehpur Sikri:</strong> A remarkably
                      well-preserved abandoned Mughal city, roughly 40 km
                      from Agra, worth a half-day trip.
                    </li>
                    <li>
                      <strong>Mehtab Bagh:</strong> A garden directly across
                      the river from the Taj Mahal, offering a different
                      sunset-facing view of the monument.
                    </li>
                    <li>
                      <strong>Itmad-ud-Daulah ("Baby Taj"):</strong> A
                      smaller, less crowded marble tomb often considered a
                      precursor to the Taj Mahal's design.
                    </li>
                  </ul>
                </section>

                {/* ── Varanasi ──────────────────────────────────────────── */}
                <section id="varanasi">
                  <h2>Varanasi: The Ghats & Ganga Aarti</h2>
                  <p>
                    One of the world's oldest continuously inhabited cities,
                    Varanasi (also called Kashi or Benares) sits on the banks
                    of the Ganga and is among the most spiritually intense
                    places in India.
                  </p>
                  <ul>
                    <li>
                      <strong>Dashashwamedh Ghat Aarti:</strong> The nightly
                      fire ceremony performed by priests along the riverbank
                      — one of India's most powerful religious spectacles,
                      best watched from a boat.
                    </li>
                    <li>
                      <strong>Sunrise boat ride:</strong> A dawn ride along
                      the ghats is Varanasi's defining experience —
                      pilgrims bathing, temple bells, and the city waking up
                      along the riverbank.
                    </li>
                    <li>
                      <strong>Manikarnika Ghat:</strong> One of the city's
                      main cremation ghats, where funeral pyres burn
                      continuously — approach respectfully and avoid
                      photography without explicit permission.
                    </li>
                    <li>
                      <strong>Kashi Vishwanath Temple:</strong> One of the
                      twelve Jyotirlinga shrines dedicated to Shiva, among
                      the most sacred Hindu temples in India.
                    </li>
                    <li>
                      <strong>Old city lanes:</strong> A maze of narrow
                      alleys around the ghats, packed with shops, temples,
                      and centuries of undisturbed daily life.
                    </li>
                    <li>
                      <strong>Sarnath:</strong> A short trip from Varanasi,
                      the site where the Buddha delivered his first sermon —
                      a calm counterpoint to the city's intensity.
                    </li>
                  </ul>
                </section>

                {/* ── Lucknow ───────────────────────────────────────────── */}
                <section id="lucknow">
                  <h2>Lucknow: Nawabi Elegance</h2>
                  <p>
                    Once the seat of the Nawabs of Awadh, Lucknow retains a
                    distinctive courtly culture — famous for its architecture,
                    its slow-cooked Awadhi cuisine, and a legendary standard
                    of hospitality known locally as "Lucknawi tehzeeb."
                  </p>
                  <ul>
                    <li>
                      <strong>Bara Imambara:</strong> An enormous 18th-century
                      complex famous for the Bhool Bhulaiya, a labyrinth of
                      interconnecting passages built without external
                      support.
                    </li>
                    <li>
                      <strong>Rumi Darwaza:</strong> An ornate 18th-century
                      gateway, one of Lucknow's most photographed landmarks.
                    </li>
                    <li>
                      <strong>Chota Imambara:</strong> A smaller but equally
                      ornate mausoleum with an interior full of chandeliers
                      and gilded decoration.
                    </li>
                    <li>
                      <strong>Hazratganj:</strong> Lucknow's main shopping
                      and dining street, good for an evening walk.
                    </li>
                    <li>
                      <strong>Residency:</strong> The ruins of the British
                      Residency, site of a significant siege during the 1857
                      uprising — now a peaceful, atmospheric heritage park.
                    </li>
                  </ul>
                </section>

                {/* ── Other Cities ──────────────────────────────────────── */}
                <section id="other-cities">
                  <h2>Ayodhya, Mathura & Vrindavan</h2>
                  <ul>
                    <li>
                      <strong>Ayodhya:</strong> The birthplace of Lord Rama
                      and site of the recently constructed Ram Mandir — now
                      one of India's most-visited pilgrimage destinations,
                      with significantly expanded infrastructure.
                    </li>
                    <li>
                      <strong>Mathura:</strong> Believed to be the birthplace
                      of Lord Krishna, with the Krishna Janmabhoomi temple
                      complex as its central pilgrimage site.
                    </li>
                    <li>
                      <strong>Vrindavan:</strong> A short distance from
                      Mathura, associated with Krishna's childhood — home to
                      hundreds of temples, and especially vibrant during
                      Holi and Janmashtami.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is plentiful across all three main cities,
                    with Agra and Varanasi offering some genuinely
                    exceptional heritage and riverside options.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Guesthouses near Taj East Gate, Agra",
                          "Budget riverside stays, Varanasi",
                          "Hostels, Hazratganj, Lucknow",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹7,000/night",
                        picks: [
                          "Hotel Taj Resorts, Agra",
                          "Heritage havelis, Varanasi ghats",
                          "Business hotels, Lucknow",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹10,000–₹40,000+/night",
                        picks: [
                          "The Oberoi Amarvilas, Agra",
                          "BrijRama Palace, Varanasi",
                          "Taj Mahal Lucknow",
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
                    In Agra, staying near the Taj East or West Gate is worth
                    the small premium — it makes a sunrise visit genuinely
                    easy rather than a stressful pre-dawn cab ride.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Uttar Pradesh</h2>
                  <ul>
                    <li>
                      <strong>Tunday Kababi (Lucknow):</strong> Home of the
                      legendary galouti kebab, made so tender it reportedly
                      needed no teeth to eat — a Lucknow institution since
                      1905.
                    </li>
                    <li>
                      <strong>Lucknawi biryani:</strong> Cooked in the
                      "dum" style with layered rice and meat, distinct from
                      Hyderabadi and Kolkata biryanis.
                    </li>
                    <li>
                      <strong>Petha (Agra):</strong> A translucent
                      ash-gourd sweet that's become Agra's signature
                      confection, sold in dozens of flavours.
                    </li>
                    <li>
                      <strong>Kachori-sabzi and chaat (Varanasi):</strong>{" "}
                      Varanasi's breakfast street food scene is legendary,
                      especially around the old city lanes.
                    </li>
                    <li>
                      <strong>Banarasi paan:</strong> An elaborate betel leaf
                      preparation considered a Varanasi specialty, worth
                      trying at least once even if unfamiliar.
                    </li>
                    <li>
                      <strong>Malai gilori and kulfi (Lucknow):</strong>{" "}
                      Rich, saffron-scented desserts reflecting Lucknow's
                      Nawabi sweet-making tradition.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>6-Day Uttar Pradesh Itinerary</h2>
                  <p>
                    Six days is a comfortable minimum to cover Agra,
                    Varanasi, and Lucknow without rushing any single city.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1–2",
                        title: "Agra",
                        color: "bg-amber-700",
                        activities: [
                          "Sunrise at Taj Mahal",
                          "Agra Fort in the afternoon",
                          "Fatehpur Sikri half-day trip",
                          "Evening: Mehtab Bagh sunset view",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Travel to Lucknow",
                        color: "bg-sky-600",
                        activities: [
                          "Morning train/road to Lucknow (~5 hrs)",
                          "Afternoon: Bara Imambara, Rumi Darwaza",
                          "Evening: Hazratganj food and shopping",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Lucknow",
                        color: "bg-forest-600",
                        activities: [
                          "Chota Imambara, Residency ruins",
                          "Afternoon travel to Varanasi (flight recommended)",
                        ],
                      },
                      {
                        day: "Day 5–6",
                        title: "Varanasi",
                        color: "bg-stone-600",
                        activities: [
                          "Sunrise boat ride along the ghats",
                          "Kashi Vishwanath Temple, old city lanes",
                          "Evening Ganga Aarti at Dashashwamedh Ghat",
                          "Optional: Sarnath half-day trip before departure",
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
                            "₹4,500",
                            "₹16,000",
                          ],
                          ["Food/day", "₹600", "₹1,500", "₹3,500"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹700",
                            "₹2,000",
                          ],
                          [
                            "Monument entry fees/day",
                            "₹700",
                            "₹700",
                            "₹700",
                          ],
                          ["Daily total", "₹2,800", "₹7,400", "₹22,200"],
                          [
                            "6-Day trip total",
                            "₹16,800",
                            "₹44,400",
                            "₹1,33,200",
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
                    * Excludes inter-city travel between Agra, Lucknow and
                    Varanasi. Taj Mahal entry fees are notably higher for
                    foreign nationals — check current rates before visiting.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Uttar Pradesh</h2>
                  <ul>
                    <li>
                      <strong>Book Taj Mahal tickets online in advance:</strong>{" "}
                      Avoids queues at the gate, especially important for a
                      sunrise visit when timing matters most.
                    </li>
                    <li>
                      <strong>The Taj Mahal is closed on Fridays:</strong>{" "}
                      Plan your Agra days around this if visiting on a tight
                      schedule.
                    </li>
                    <li>
                      <strong>Approach Manikarnika Ghat respectfully:</strong>{" "}
                      It's an active cremation site — avoid photography
                      without explicit permission and follow any guide's
                      instructions.
                    </li>
                    <li>
                      <strong>Fly Lucknow–Varanasi if time is tight:</strong>{" "}
                      The road/rail option takes around 5 hours; a short
                      flight saves meaningful time on a compact itinerary.
                    </li>
                    <li>
                      <strong>Carry cash in smaller towns:</strong> Card
                      acceptance drops off quickly outside main hotels and
                      malls in Agra and Varanasi's old city.
                    </li>
                    <li>
                      <strong>Dress modestly at religious sites:</strong>{" "}
                      Kashi Vishwanath Temple, Ram Mandir, and the Mathura
                      temples all expect covered shoulders and knees.
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
                          "Book Taj Mahal tickets online and arrive for sunrise",
                          "Take a sunrise boat ride along Varanasi's ghats",
                          "Try Tunday Kababi's galouti kebabs in Lucknow",
                          "Dress modestly at active religious sites",
                          "Carry cash for old-city lanes and smaller vendors",
                          "Approach cremation ghats respectfully",
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
                          "Plan a Taj Mahal visit on a Friday — it's closed",
                          "Rush Varanasi in under two days — it rewards slow travel",
                          "Photograph cremation ghats without explicit permission",
                          "Underestimate summer heat when planning sightseeing hours",
                          "Rely on cards outside main hotels and malls",
                          "Skip pre-booking tickets during peak winter season",
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
                  "Uttar Pradesh",
                  "Taj Mahal",
                  "Agra",
                  "Varanasi",
                  "Lucknow",
                  "Ganga Aarti",
                  "State Guide",
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
                sections={UP_GEAR}
                destination="Uttar Pradesh"
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
