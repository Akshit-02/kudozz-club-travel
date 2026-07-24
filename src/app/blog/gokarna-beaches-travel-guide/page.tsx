// src/app/blog/gokarna-beaches-travel-guide/page.tsx
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
  title: "Gokarna Travel Guide: Best Beaches, Temples & Complete Itinerary",
  description:
    "The complete Gokarna travel guide. Om Beach, Kudle, Half Moon & Paradise Beach, the Mahabaleshwar Temple, the beach-hopping trek, where to stay, what to eat, and a full 3-day itinerary through Karnataka's quieter answer to Goa.",
  keywords:
    "Gokarna travel guide, Om Beach, Kudle Beach, Half Moon Beach, Paradise Beach, Gokarna temple, Gokarna trek, Gokarna itinerary, Gokarna vs Goa, Karnataka beaches",
  openGraph: {
    title: "Gokarna Travel Guide: Best Beaches, Temples & Complete Itinerary",
    description:
      "A temple town with world-class beaches — Om Beach, Half Moon, and Paradise — without Goa's commercialisation. The complete guide to Gokarna.",
    url: "https://club.kudozz.in/blog/gokarna-beaches-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/coorg.jpg",
        width: 1200,
        height: 630,
        alt: "Quiet palm-backed beach cove near Gokarna, Karnataka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gokarna Travel Guide: Best Beaches, Temples & Complete Itinerary",
    description:
      "Om Beach, Half Moon, and Paradise — the complete guide to Gokarna's beaches, temples, and the coastal trek that connects them.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/gokarna-beaches-travel-guide",
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
            "Gokarna Travel Guide: Best Beaches, Temples & Complete Itinerary",
          description: "The complete Gokarna travel guide.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
          datePublished: "2026-07-13",
          dateModified: "2026-07-13",
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
            "@id": "https://club.kudozz.in/blog/gokarna-beaches-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Gokarna",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Karnataka",
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
                name: "Gokarna Travel Guide",
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
  { id: "introduction", title: "Why Gokarna?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Gokarna", level: 2 },
  { id: "gokarna-vs-goa", title: "Gokarna vs Goa", level: 2 },
  { id: "best-beaches", title: "The Best Beaches", level: 2 },
  { id: "beach-trek", title: "The Beach-Hopping Trek", level: 2 },
  { id: "temple-town", title: "Mahabaleshwar Temple & the Old Town", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Gokarna-specific gear ───────────────────────────────────────────────────────
const GOKARNA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the beaches, the trek, and the temple town",
    emoji: "🏖️",
    items: [
      {
        name: "Trekking Sandals / Grip Sandals",
        description:
          "The Om Beach–Half Moon–Paradise trail crosses rocky, sometimes slippery headland sections — proper grip sandals handle both the trek and the beach far better than flip-flops.",
        price: "₹899",
        rating: 4.4,
        reviews: "5.1k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+sandals+grip+outdoor"),
        tag: "Beach-trek essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Twisted ankles on the rocky headland stretches are the most common minor injury travellers report on the Gokarna beach trek.",
      },
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description:
          "The trek between beaches offers almost no shade for stretches of an hour or more — reef-safe formulas also protect the coral patches near Om Beach.",
        price: "₹599",
        rating: 4.5,
        reviews: "7.4k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"),
        tag: "Trek essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Sunburn from the exposed cliff trail is easily the top regret among travellers doing the full beach-hopping route.",
      },
      {
        name: "Quick-Dry Backpack (20L)",
        description:
          "A light daypack for carrying water, a change of clothes, and valuables across the trek and between beach shacks — canvas totes soak through and add weight.",
        price: "₹899",
        rating: 4.4,
        reviews: "4.6k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("20L+quick+dry+daypack"),
        tag: "Beach-trek essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Between beaches there are long stretches with no shops — a daypack with water and snacks keeps you from having to turn back.",
      },
      {
        name: "Waterproof Phone Pouch",
        description:
          "Useful for the coracle-style boat rides to Paradise Beach and swimming at Kudle and Om Beach without worrying about a dropped phone.",
        price: "₹299",
        rating: 4.3,
        reviews: "9.1k",
        image: "📱",
        affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+beach"),
        tag: "Boat-ride essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "The boat to Paradise Beach and the swim breaks at Om Beach both carry real risk of a soaked phone without one.",
      },
      {
        name: "2L Hydration Bottle",
        description:
          "The beach trek runs 2–3 hours in full sun with limited water stops — carrying enough water is non-negotiable, especially outside the cooler months.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("2l+hydration+water+bottle+travel"),
        tag: "Trek essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Dehydration mid-trek is the single most common reason travellers cut the Om-to-Paradise walk short.",
      },
      {
        name: "Modest Cotton Wrap",
        description:
          "Gokarna is an active pilgrimage town — the Mahabaleshwar Temple and old town streets expect covered shoulders and knees, unlike the beaches themselves.",
        price: "₹399",
        rating: 4.4,
        reviews: "4.0k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("cotton+wrap+travel+modest"),
        tag: "Temple-town essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Unlike Goa, Gokarna's town centre is a living pilgrimage site — beachwear worn into the temple lanes draws real disapproval locally.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GokarnaBeachesGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/gokarna/hero.jpg"
              alt="Quiet palm-backed beach cove near Gokarna, Karnataka"
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
                { label: "Gokarna", href: "/blog?category=gokarna" },
                { label: "Beaches Guide", href: null },
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
                "Gokarna",
                "Beaches",
                "Temples",
                "Trekking",
                "Off-beat",
                "Karnataka",
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
              Gokarna Travel Guide: Best Beaches, Temples & Complete Itinerary
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A living pilgrimage town wrapped around some of Karnataka's best
              beaches — Om Beach, Half Moon, and Paradise, linked by a cliffside
              trek, and still a fraction as commercial as Goa.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "9 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Gokarna, Karnataka",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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
                  <h2>Why Gokarna?</h2>
                  <p>
                    Two hundred and fifty kilometres south of Goa, on the same
                    Karnataka coastline, sits a temple town that has quietly
                    become the beach destination people go to once they've
                    decided Goa is too crowded. <strong>Gokarna</strong> means
                    "cow's ear" in Sanskrit, named for the shape of the local
                    coastline — but the town's real identity is as a Hindu
                    pilgrimage centre, home to the revered Mahabaleshwar Temple,
                    that happens to sit beside a run of some of India's most
                    photogenic beaches.
                  </p>
                  <p>
                    That combination is what makes Gokarna different: the main
                    town beach (Gokarna Beach itself) is lined with temples and
                    pilgrims, while a 45-minute walk south along the headland
                    opens onto Kudle, Om, Half Moon, and Paradise beaches — each
                    progressively quieter, each reachable only on foot or by
                    boat, and none of them built up with the beach-club
                    infrastructure that defines Goa's coast.
                  </p>
                  <p>
                    Gokarna rewards travellers who want beach time without
                    nightlife, don't mind a bit of walking between spots, and
                    are happy trading Goa's polish for genuinely secluded sand.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏖️</span> Gokarna at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Karnataka, India",
                        },
                        {
                          icon: "🛕",
                          label: "Key Site",
                          value: "Mahabaleshwar Temple",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Goa (GOI/GOX) or Hubli (HBX)",
                        },
                        {
                          icon: "🏖️",
                          label: "Beaches",
                          value: "5 major coves",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹800 – ₹4,500",
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
                  <h2>Best Time to Visit Gokarna</h2>
                  <p>
                    Like Goa, Gokarna's beach season is dictated by the monsoon
                    — most beach shacks close entirely between June and
                    September.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Dry, sunny, 22–32°C, calm seas and every shack open. December–January sees the biggest crowds (mostly backpackers), but Gokarna never feels as packed as Goa even at peak.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Shoulder season — hot but empty",
                        text: "Temperatures climb past 34°C with high humidity. Very few crowds and lower shack prices, but the midday heat makes the beach trek genuinely tough.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — shacks shut, seas rough",
                        text: "Heavy rain and dangerous currents close most shacks and make swimming unsafe. The temple town itself stays functional, but this isn't a beach trip.",
                      },
                      {
                        season: "Late Sep",
                        emoji: "🌦️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Transitional — reopening",
                        text: "Shacks begin reopening as the monsoon tapers off. Seas are still a little rough but the crowds haven't arrived yet — good for early, quiet visits.",
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
                    <strong>Our pick:</strong> Late October to December, before
                    the Christmas–New Year backpacker crowds peak. You get the
                    full open-shack, calm-sea season while the beaches are still
                    close to empty on weekdays.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Gokarna</h2>
                  <p>
                    Gokarna is less directly connected than Goa, which is
                    exactly why it has stayed quieter — a bit more effort to
                    reach filters out the day-tripper crowds.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> The nearest airports are Goa
                      (Dabolim/GOI or Manohar International/GOX, ~145 km, ~3.5
                      hrs by road) and Hubli (HBX, ~140 km, ~3 hrs). Mangalore
                      airport (~230 km) is a third option with more southern
                      connections.
                    </li>
                    <li>
                      <strong>By Train:</strong> Gokarna Road station, on the
                      Konkan Railway line, is the most convenient option — well
                      connected to Mumbai, Goa, and Mangalore, with an auto/taxi
                      ride of about 20 minutes into town.
                    </li>
                    <li>
                      <strong>By Road:</strong> Regular buses and shared taxis
                      run from Goa (Panjim/Margao, ~4 hrs) and Mangalore (~5
                      hrs) — the coastal drive along NH66 is scenic in its own
                      right.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book Gokarna Road train tickets
                    well ahead in peak season (Dec–Jan) — this route is popular
                    with the backpacker crowd travelling the Goa– Gokarna–Hampi
                    circuit and sells out fast on weekends.
                  </div>
                </section>

                {/* ── Gokarna vs Goa ────────────────────────────────────── */}
                <section id="gokarna-vs-goa">
                  <h2>Gokarna vs Goa</h2>
                  <p>
                    The comparison is inevitable, and useful — the two
                    destinations suit genuinely different travellers.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    <div className="bg-white border border-stone-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-stone-900 mb-2 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>🎉</span> Goa
                      </h4>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        Built-up infrastructure, beach clubs, nightlife,
                        casinos, and easy point-to-point road access. Best for
                        groups, first-timers, and anyone who wants variety and
                        convenience over solitude.
                      </p>
                    </div>
                    <div className="bg-white border border-stone-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-stone-900 mb-2 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>🕉️</span> Gokarna
                      </h4>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        A working temple town beside genuinely secluded, walk-in
                        beaches with minimal commercial development. Best for
                        backpackers, couples, and solo travellers who want calm
                        over convenience.
                      </p>
                    </div>
                  </div>

                  <blockquote>
                    Think of Gokarna as what parts of Goa looked like decades
                    ago — fewer facilities, far fewer people, and beaches you
                    can still have mostly to yourself on a weekday.
                  </blockquote>
                </section>

                {/* ── Best Beaches ──────────────────────────────────────── */}
                <section id="best-beaches">
                  <h2>The Best Beaches</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/gokarna/hero.jpg"
                      alt="Rocky headland and turquoise cove near Gokarna"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <ul>
                    <li>
                      <strong>Gokarna Beach (Main Beach):</strong> The town
                      beach itself, right beside the temple — more locals and
                      pilgrims than sunbathers, and the least "beach holiday"
                      feeling of the lot. Good for a sunset walk, not for
                      lounging.
                    </li>
                    <li>
                      <strong>Kudle Beach:</strong> The first beach south of
                      town (15-min walk), and the most developed of the southern
                      beaches — a good range of shacks and huts, easy access,
                      and a lively but not loud atmosphere.
                    </li>
                    <li>
                      <strong>Om Beach:</strong> Named for its shape (two curved
                      coves meeting like the Om symbol), and Gokarna's most
                      famous and most-photographed beach — reachable by road as
                      well as on foot, so it gets the most day-trip crowds.
                    </li>
                    <li>
                      <strong>Half Moon Beach:</strong> A short, crescent-
                      shaped cove reachable only by trekking or boat — smaller
                      and quieter than Om, with a handful of basic shacks.
                    </li>
                    <li>
                      <strong>Paradise Beach:</strong> The most secluded of the
                      five, boat- or trek-access only, with no permanent shacks
                      — genuinely close to untouched, and worth the effort for
                      anyone craving true solitude.
                    </li>
                  </ul>
                </section>

                {/* ── Beach Trek ─────────────────────────────────────────── */}
                <section id="beach-trek">
                  <h2>The Beach-Hopping Trek</h2>
                  <p>
                    The signature Gokarna experience is walking the headland
                    trail connecting Kudle, Om, Half Moon, and Paradise — a
                    coastal trek that most travellers do over a half-day,
                    stopping to swim and eat along the way.
                  </p>
                  <ul>
                    <li>
                      <strong>Full route:</strong> Gokarna Town → Kudle → Om
                      Beach → Half Moon → Paradise Beach, roughly 7–8 km
                      one-way, 3–4 hours at a relaxed pace with stops.
                    </li>
                    <li>
                      <strong>Terrain:</strong> A mix of sand, rocky headland
                      sections, and forest path — moderately strenuous, not
                      technical, but proper footwear matters.
                    </li>
                    <li>
                      <strong>Shortcuts:</strong> Shared autos and bikes can
                      reach Kudle and Om Beach directly by road, so you can skip
                      the first leg and trek only the quieter Om→Half
                      Moon→Paradise stretch.
                    </li>
                    <li>
                      <strong>Return:</strong> Small boats ferry travellers back
                      from Paradise or Om Beach to Kudle/town for a fee,
                      avoiding a return trek in the afternoon heat.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Start the trek by 8–9 AM to
                    avoid the worst midday heat and have Half Moon and Paradise
                    largely to yourself before the day-trip boats from Om Beach
                    arrive.
                  </div>
                </section>

                {/* ── Temple Town ────────────────────────────────────────── */}
                <section id="temple-town">
                  <h2>Mahabaleshwar Temple & the Old Town</h2>
                  <p>
                    Gokarna's spiritual side is easy to skip if you head
                    straight for the beaches, but the old town is worth at least
                    a morning — a genuinely lived-in pilgrimage centre, not a
                    tourist reconstruction.
                  </p>
                  <ul>
                    <li>
                      <strong>Mahabaleshwar Temple:</strong> One of the most
                      revered Shiva temples on the west coast, believed to house
                      the Atmalinga — non-Hindus are generally not permitted
                      inside the inner sanctum, but the temple complex and
                      surrounding streets can be explored.
                    </li>
                    <li>
                      <strong>Koti Tirtha:</strong> A large temple tank in the
                      centre of town where pilgrims bathe before entering
                      Mahabaleshwar Temple — active and photogenic at dawn.
                    </li>
                    <li>
                      <strong>Old town streets:</strong> Narrow lanes lined with
                      traditional Kannada-style houses, flower and prasad
                      stalls, and small eateries serving South Indian breakfast
                      — a strong contrast to the beach shacks a 15-minute walk
                      away.
                    </li>
                    <li>
                      <strong>Dress code:</strong> Modest dress (covered
                      shoulders and knees) is expected in the temple area, even
                      though beachwear is completely normal a short walk away on
                      Kudle or Om Beach.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Gokarna</h2>
                  <p>
                    Choose your base by beach — each has a different mix of
                    huts, guesthouses, and mid-range stays.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹400–₹1,200/night",
                        picks: [
                          "Beach huts, Om Beach",
                          "Kudle Beach dorms/guesthouses",
                          "Namaste Cafe huts, Om Beach",
                          "Backpacker hostels, Gokarna Town",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹4,500/night",
                        picks: [
                          "SwaSwara (Om Beach, wellness resort)",
                          "Kudle Beach cottages",
                          "Nirvana Cafe & Rooms, Om Beach",
                          "Boutique stays, Gokarna Town",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹8,000–₹20,000+/night",
                        picks: [
                          "SwaSwara Ayurveda villas",
                          "Om Beach Resort premium cottages",
                          "Private beachfront villas (seasonal)",
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
                    Om Beach is the best all-round base — closer to the trekking
                    trail toward Half Moon and Paradise than town, while still
                    having enough shacks and stays to be comfortable.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Gokarna</h2>
                  <p>
                    Gokarna's food scene splits neatly in two: traditional
                    Kannada thalis in the temple town, and an eclectic,
                    backpacker-shaped beach shack menu along the coast.
                  </p>
                  <ul>
                    <li>
                      <strong>South Indian Thali:</strong> Simple, filling
                      vegetarian thalis are the norm in the old town, often
                      served on banana leaf at small local eateries near the
                      temple.
                    </li>
                    <li>
                      <strong>Beach shack fusion menus:</strong> Israeli,
                      Italian, and continental dishes sit alongside seafood at
                      most Om Beach and Kudle shacks — a legacy of Gokarna's
                      long-running international backpacker crowd.
                    </li>
                    <li>
                      <strong>Fresh seafood:</strong> Kingfish, prawns, and
                      squid, usually grilled or curried, are the standout at
                      beach shacks — ask what came in that morning rather than
                      ordering off the printed menu.
                    </li>
                    <li>
                      <strong>Best spots:</strong> Namaste Cafe (Om Beach,
                      long-running backpacker institution), Prema Restaurant
                      (Gokarna Town, reliable thalis), and the shacks at Kudle
                      Beach for sunset dinners.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>3-Day Gokarna Itinerary</h2>
                  <p>
                    Three days is enough to cover the temple town, do the full
                    beach trek, and still have downtime on the sand — Gokarna
                    doesn't need the 5+ days a Goa trip does.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Temple Town",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in around Kudle or Om Beach",
                          "Afternoon: Explore Gokarna Town, Mahabaleshwar Temple, Koti Tirtha",
                          "Evening: Sunset at Kudle Beach",
                          "Dinner at a Kudle Beach shack",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "The Beach-Hopping Trek",
                        color: "bg-forest-600",
                        activities: [
                          "Early morning start: trek from Om Beach toward Half Moon and Paradise",
                          "Swim breaks at Half Moon Beach",
                          "Lunch and relax at Paradise Beach",
                          "Boat back to Om Beach in the late afternoon",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Om Beach & Departure",
                        color: "bg-orange-600",
                        activities: [
                          "Morning: Relaxed final swim and breakfast at Om Beach",
                          "Late morning: Optional dolphin-spotting boat trip",
                          "Afternoon: Depart via Gokarna Road station or onward to Goa/Hubli",
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
                          ["Accommodation/night", "₹600", "₹2,500", "₹12,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport per day", "₹150", "₹500", "₹1,500"],
                          ["Boat rides / activities", "₹300", "₹800", "₹2,000"],
                          ["Daily total", "₹1,450", "₹4,700", "₹17,500"],
                          ["3-Day trip total", "₹4,350", "₹14,100", "₹52,500"],
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
                    * Excludes flight/train to the region. Gokarna runs
                    noticeably cheaper than Goa across every category, even in
                    peak season.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Gokarna</h2>
                  <ul>
                    <li>
                      <strong>Start the beach trek early:</strong> Beat the
                      midday heat and the day-trip boat crowds by setting out
                      from Om Beach before 9 AM.
                    </li>
                    <li>
                      <strong>Dress modestly in the temple town:</strong>
                      Beachwear is fine on the sand but not in Gokarna Town or
                      around Mahabaleshwar Temple — carry a cover-up.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card acceptance is patchy at
                      beach shacks and almost nonexistent for boat rides and
                      local transport.
                    </li>
                    <li>
                      <strong>Book Gokarna Road train tickets early:</strong>
                      This route fills up fast on weekends during the Dec–Jan
                      peak season.
                    </li>
                    <li>
                      <strong>Check sea conditions before swimming:</strong>
                      Currents at Om Beach and Paradise Beach can be stronger
                      than they look — ask locally before swimming past the
                      shallows, especially outside the main season.
                    </li>
                    <li>
                      <strong>Most beach shacks close outside Oct–May:</strong>
                      If visiting in the monsoon months, expect the temple town
                      to function but the beach infrastructure to be largely
                      shut.
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
                          "Do the full Om–Half Moon–Paradise beach trek at least once",
                          "Visit Mahabaleshwar Temple and Koti Tirtha in the old town",
                          "Base yourself at Om Beach for the best trek access",
                          "Start treks early to beat the heat and crowds",
                          "Try the fusion menus at long-running shacks like Namaste Cafe",
                          "Time your trip for Oct–Dec for calm seas and open shacks",
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
                          "Wear beachwear into Gokarna Town or the temple complex",
                          "Expect Goa-level nightlife or infrastructure",
                          "Swim past the shallows without checking currents locally",
                          "Rely on cards at beach shacks or for boat rides",
                          "Skip the temple town entirely — it's the other half of Gokarna",
                          "Visit expecting open shacks during peak monsoon (Jun–Sep)",
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
                  "Gokarna",
                  "Beaches",
                  "Temples",
                  "Trekking",
                  "Karnataka",
                  "Off-beat",
                  "India",
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
                sections={GOKARNA_GEAR}
                destination="Gokarna"
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
