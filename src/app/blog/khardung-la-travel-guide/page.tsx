// src/app/blog/khardung-la-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  HIMALAYAN_GEAR,
} from "@/components/ui/TrekGearRecommendations";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Khardung La Travel Guide: Height, Route, Permits & Tips",
  description:
    "Complete guide to Khardung La — the legendary high-altitude pass to Nubra Valley. Real altitude facts, best time to visit, how to reach from Leh, altitude sickness precautions, permits, and essential tips.",
  keywords:
    "Khardung La, Khardung La pass, Ladakh, Nubra Valley road, Leh to Khardung La, highest motorable pass, South Pullu, North Pullu, Ladakh bike trip, BRO road, Khardung La height in metres, best time to visit Khardung La, Khardung La altitude sickness, Khardung La permit ILP, Khardung La budget, is Khardung La the highest motorable pass, Khardung La motorcycle vs car",
  openGraph: {
    title: "Khardung La Travel Guide: Height, Route, Permits & Tips",
    description:
      "5,359 metres of thin air, prayer flags, and one of the great road-trip moments in the Himalaya — everything you need to know before you cross Khardung La.",
    url: "https://club.kudozz.in/blog/khardung-la-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "High-altitude Himalayan pass road near Leh Ladakh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Khardung La Travel Guide",
    description:
      "The complete guide to riding or driving Khardung La — Ladakh's legendary gateway to Nubra Valley.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/khardung-la-travel-guide",
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
          headline: "Khardung La Travel Guide: Height, Route, Permits & Tips",
          description:
            "Complete guide to Khardung La — altitude facts, best time to visit, how to reach, permits, altitude sickness precautions, and what to expect at the top.",
          image:
            "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
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
            "@id": "https://club.kudozz.in/blog/khardung-la-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Khardung La",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Ladakh",
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
                name: "Ladakh",
                item: "https://club.kudozz.in/blog?category=ladakh",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Khardung La",
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
    q: "How high is Khardung La?",
    a: "Khardung La sits at 5,359 metres (17,582 ft) according to modern GPS surveys. For decades the signboard at the top claimed 5,602 m, but that figure has since been corrected.",
  },
  {
    q: "Is Khardung La really the world's highest motorable pass?",
    a: "No — that long-repeated claim has been debunked. Ladakh itself has higher roads, including Umling La near Chumathang, which tops 5,800 m, along with passes like Mardung La and Semo La that also clear Khardung La's true elevation. Khardung La remains a genuinely high, spectacular BRO-built road regardless.",
  },
  {
    q: "How do I reach Khardung La from Leh?",
    a: "Khardung La is about 40 km from Leh Market and takes roughly 1.5–2 hours each way by road, depending on traffic at the checkposts. The route runs Leh → South Pullu checkpost → Khardung village → the summit → North Pullu checkpost → down into Nubra Valley — no trekking or multi-day approach is required.",
  },
  {
    q: "Do I need a permit to visit Khardung La?",
    a: "Yes, an Inner Line Permit (ILP) is required and checked at both the South Pullu and North Pullu checkposts. ILPs are obtained in Leh, either online in advance or in person at the DC Office, and the same permit covers Nubra Valley, Pangong, and other restricted border areas. Carry 2–3 physical printouts per traveller, since digital copies aren't always accepted.",
  },
  {
    q: "What is the best time to visit Khardung La?",
    a: "The pass is open to civilian traffic roughly from late May or early June through October, with exact dates shifting each year based on snow clearance. Early-to-mid September is the recommended window — the road is fully open and reliably maintained, skies are clear, and crowds have thinned from the July–August peak.",
  },
  {
    q: "How long should I stay at the top of Khardung La?",
    a: "15–20 minutes is the widely recommended ceiling, since atmospheric pressure at 5,359 m delivers roughly half the oxygen you're used to. Take your photos, breathe, avoid exertion, and head back down rather than lingering.",
  },
  {
    q: "Should I ride a motorcycle or take a car to Khardung La?",
    a: "Both are common. Royal Enfields and other motorcycles are a rite of passage for many riders, with rental fleets concentrated in Leh's Changspa area, while shared or private taxis (Bolero, Sumo, or Innova) suit families, older travellers, or anyone who'd rather not manage a bike at altitude. A shared taxi to Nubra via the pass costs roughly ₹1,500–₹2,500 per person; a private full-day hire runs ₹4,500–₹7,000.",
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
  { id: "introduction", title: "Why Khardung La?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Khardung La", level: 2 },
  { id: "altitude", title: "Altitude Sickness & Precautions", level: 2 },
  { id: "top-of-pass", title: "What's at the Top", level: 2 },
  { id: "riding-vs-driving", title: "Motorcycle vs Car", level: 2 },
  { id: "by-motorcycle", title: "→ By Motorcycle", level: 3 },
  { id: "by-car", title: "→ By Car / Taxi", level: 3 },
  { id: "checkposts", title: "South Pullu & North Pullu", level: 2 },
  { id: "nubra-valley", title: "Onward to Nubra Valley", level: 2 },
  { id: "road-conditions", title: "Road Conditions & BRO", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips: Do's & Don'ts", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KhardungLaPage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Khardung La — high-altitude Himalayan pass road near Leh, Ladakh"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 to-transparent" />
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
                { label: "Ladakh", href: "/blog?category=ladakh" },
                { label: "Khardung La", href: null },
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
                "Khardung La",
                "Ladakh",
                "High Altitude",
                "Nubra Valley",
                "Road Trip",
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
              Khardung La Travel Guide: Height, Route, Permits & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              At 5,359 metres, the air is thin, the wind cuts like a blade, and
              the view is unreasonable. Khardung La is the gateway to Nubra
              Valley — and one of the most memorable stretches of tarmac
              anywhere in the Himalaya.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "13 min read",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Ladakh, India",
                },
                {
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                      d={m.icon}
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
                  <h2>Why Khardung La?</h2>
                  <p>
                    Every road trip through Ladakh eventually funnels its
                    travellers toward the same 40-kilometre stretch of tarmac
                    north of Leh — a switchbacking climb through bare brown
                    hills that ends, improbably, above the clouds.{" "}
                    <strong>Khardung La</strong> is the pass that separates
                    the Indus Valley from Nubra Valley, and for most visitors
                    to Ladakh it's the single highest point they will ever
                    stand on in a moving vehicle.
                  </p>
                  <p>
                    The pass sits at <strong>5,359 metres (17,582 ft)</strong>{" "}
                    according to modern GPS surveys — a figure worth
                    dwelling on, because for decades the signboard at the top
                    proudly (and incorrectly) declared Khardung La the
                    "world's highest motorable pass" at 5,602 m. That claim
                    has since been debunked. Ladakh itself has higher roads —
                    Umling La near Chumathang tops 5,800 m, and passes like
                    Mardung La and Semo La also clear Khardung La's true
                    elevation. None of that diminishes what Khardung La
                    actually is: a BRO-built, genuinely high, genuinely
                    spectacular road that most travellers will only ever
                    cross once in their life, and never forget.
                  </p>
                  <p>
                    It is also, practically speaking, the only way in and out
                    of Nubra Valley by road from Leh — which means almost
                    everyone visiting Ladakh's sand dunes, Bactrian camels,
                    and Diskit's giant Maitreya Buddha will cross this pass at
                    least twice. Treat it with respect, plan around the
                    altitude, and it becomes one of the most rewarding hours
                    of any Ladakh itinerary.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Khardung La at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Ladakh Range, ~40 km from Leh",
                        },
                        {
                          icon: "🏔️",
                          label: "Altitude",
                          value: "5,359 m (17,582 ft)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Jun – Sep" },
                        {
                          icon: "🛣️",
                          label: "Maintained By",
                          value: "Border Roads Organisation (BRO)",
                        },
                        {
                          icon: "🛂",
                          label: "Permit",
                          value: "Inner Line Permit (ILP) required",
                        },
                        {
                          icon: "⏱️",
                          label: "Time at Top",
                          value: "15–20 minutes max",
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
                  <h2>Best Time to Visit Khardung La</h2>
                  <p>
                    The pass is open to civilian traffic roughly from late
                    May or early June through October, though the exact
                    opening date shifts every year depending on how much snow
                    the BRO's road-clearing teams have to cut through. Outside
                    this window, heavy winter snowfall makes the road
                    impassable and it's closed for months at a stretch —
                    Khardung La is not a winter destination for tourists.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Late May – June",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Just-opened, snow-flanked",
                        text: "The road reopens after the BRO clears the winter snow. Expect metre-high snow walls on either side of the tarmac, cold winds, and a genuinely dramatic crossing. Some years the pass opens as early as mid-May.",
                      },
                      {
                        season: "July – August",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak season — most reliable",
                        text: "The road is at its most stable and least likely to close unexpectedly. Daytime temperatures at the top hover around 0–10°C, still cold enough for proper layers. Busiest time — expect queues for photos at the summit signboard.",
                      },
                      {
                        season: "September",
                        emoji: "🍂",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Clearer skies, thinner crowds",
                        text: "Our pick. Monsoon dust has settled, the sky is a deep, saturated blue, and the crowds from peak July–August have thinned considerably. Nights turn noticeably colder, a hint of the winter to come.",
                      },
                      {
                        season: "October & beyond",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Closing window",
                        text: "Early snowfall can close the pass with little warning from mid-October onward. If you're travelling this late in the season, check the current road status in Leh before committing to a Nubra crossing.",
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
                    <strong>Our pick:</strong> Early-to-mid September. The
                    road is fully open and reliably maintained, the light is
                    extraordinary, and you'll share the summit signboard with
                    far fewer people than you would in the peak-July crush.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Khardung La</h2>
                  <p>
                    Khardung La begins its climb right from the edge of Leh
                    town, which makes it one of the most accessible
                    5,000-metre-plus roads on earth. There's no trekking, no
                    multi-day approach — just a well-marked road and a couple
                    of hours of driving.
                  </p>
                  <ul>
                    <li>
                      <strong>Distance from Leh:</strong> Approximately 40 km
                      one-way from Leh Market
                    </li>
                    <li>
                      <strong>Duration:</strong> 1.5–2 hours each way,
                      depending on traffic at the checkposts and road
                      condition
                    </li>
                    <li>
                      <strong>Route:</strong> Leh → South Pullu checkpost →
                      Khardung village → Khardung La summit → North Pullu
                      checkpost → descent into Nubra Valley
                    </li>
                    <li>
                      <strong>Starting altitude:</strong> Leh sits at 3,524 m
                      — you'll gain nearly 1,850 vertical metres on this drive
                      alone
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Acclimatise first:</strong> Do not attempt
                    Khardung La on your first or second day in Leh. Spend at
                    least 48 hours resting and acclimatising to 3,524 m before
                    pushing another 1,850 m higher. This single piece of
                    advice prevents the vast majority of altitude-related
                    problems on this route.
                  </div>
                </section>

                {/* ── Altitude ──────────────────────────────────────────── */}
                <section id="altitude">
                  <h2>Altitude Sickness & Precautions</h2>
                  <p>
                    At 5,359 m, the atmospheric pressure is roughly half of
                    what it is at sea level — meaning every breath you take
                    delivers about half the oxygen your body is used to. Even
                    travellers who've acclimatised comfortably in Leh can feel
                    the effects sharply the moment they step out of the
                    vehicle at the top: light-headedness, breathlessness after
                    a few steps, a pounding heart rate at rest.
                  </p>
                  <ul>
                    <li>
                      <strong>Limit your time at the top:</strong> 15–20
                      minutes is the widely recommended ceiling. Take your
                      photos, breathe, and head back down — this isn't a
                      place to linger.
                    </li>
                    <li>
                      <strong>Don't exert yourself:</strong> No running to the
                      signboard, no jumping for photos, no climbing the
                      nearby slopes. Move slowly and deliberately.
                    </li>
                    <li>
                      <strong>Watch for warning signs:</strong> Severe
                      headache, vomiting, confusion, or difficulty breathing
                      at rest are signs to descend immediately — these can be
                      early symptoms of High Altitude Pulmonary or Cerebral
                      Edema (HAPE/HACE), which are medical emergencies.
                    </li>
                    <li>
                      <strong>Oxygen is available:</strong> The army canteen
                      at the top keeps oxygen cylinders on hand for
                      travellers in visible distress — don't hesitate to ask.
                    </li>
                    <li>
                      <strong>Stay hydrated, skip the alcohol:</strong> Drink
                      water throughout the drive up. Avoid alcohol the night
                      before and any heavy meal right before the climb.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro tip:</strong> If you or anyone in your
                    group has a history of cardiac or respiratory issues,
                    consult a doctor before this drive. Ladakh's altitude
                    passes are not the place to discover a pre-existing
                    condition.
                  </div>
                </section>

                {/* ── Top of Pass ───────────────────────────────────────── */}
                <section id="top-of-pass">
                  <h2>What's at the Top</h2>
                  <p>
                    Despite sitting above 5,300 m, the summit of Khardung La
                    is surprisingly well set up for the steady stream of
                    travellers who pass through it every day in season. It's
                    a small but memorable stop, not a place you'd want to
                    spend hours — but there's enough here to make the
                    obligatory selfie feel earned.
                  </p>
                  <ul>
                    <li>
                      <strong>The signboard:</strong> A weathered, much-photographed
                      BRO signboard marking the pass — expect a short queue
                      for photos in peak season.
                    </li>
                    <li>
                      <strong>Army canteen / tea stall:</strong> Run by the
                      Indian Army, serving hot tea, Maggi noodles, and basic
                      snacks. On a freezing, oxygen-starved morning, a cup of
                      sweet chai here tastes better than it has any right to.
                    </li>
                    <li>
                      <strong>The "highest ATM" claim:</strong> A State Bank
                      of India branch near the pass has long marketed itself
                      as one of the world's highest ATMs — a novelty stop for
                      many travellers, though don't rely on it actually
                      dispensing cash.
                    </li>
                    <li>
                      <strong>Prayer flags:</strong> Strings of Buddhist
                      prayer flags snap in the wind across the ridgeline,
                      exactly as vivid in person as they look in every
                      Ladakh photograph you've ever seen.
                    </li>
                    <li>
                      <strong>The view:</strong> On a clear day you can see
                      across the folded brown ridges of the Ladakh Range
                      toward the snow-streaked Karakoram peaks in the
                      distance — one of the most expansive high-altitude
                      panoramas accessible by road anywhere in India.
                    </li>
                  </ul>
                </section>

                {/* ── Riding vs Driving ─────────────────────────────────── */}
                <section id="riding-vs-driving">
                  <h2>Motorcycle vs Car — Which Should You Choose?</h2>
                  <p>
                    Khardung La is crossed by everything from Royal Enfields
                    to shared Innova taxis, and both approaches have real
                    trade-offs at this altitude.
                  </p>

                  <section id="by-motorcycle">
                    <h3>By Motorcycle</h3>
                    <p>
                      Riding a motorcycle over Khardung La is a rite of
                      passage for bikers across India — the pass is one of
                      the most photographed stretches on the entire Ladakh
                      circuit. Royal Enfield Himalayans and Classic 350s
                      dominate the rental fleets out of Leh's Changspa area,
                      and the road, while occasionally rough, is manageable
                      for a moderately experienced rider.
                    </p>
                    <ul>
                      <li>
                        Wear proper riding gear — full-face helmet, riding
                        jacket, gloves. Wind chill at the top can make
                        exposed skin go numb within minutes.
                      </li>
                      <li>
                        Keep engine RPMs measured on the steep switchbacks —
                        thin air affects your bike's combustion just as it
                        affects your lungs, and engines noticeably lose
                        power above 4,500 m.
                      </li>
                      <li>
                        Fill your tank in Leh. There is no reliable fuel stop
                        on the pass itself.
                      </li>
                    </ul>
                  </section>

                  <section id="by-car">
                    <h3>By Car / Taxi</h3>
                    <p>
                      For families, older travellers, or anyone who'd rather
                      not manage a motorcycle at 5,000 m, a shared or private
                      taxi (typically a Bolero, Sumo, or Innova) is the
                      standard option. Local Ladakhi drivers know this road
                      intimately and are used to managing altitude-anxious
                      passengers.
                    </p>
                    <ul>
                      <li>
                        A shared taxi to Nubra via Khardung La costs roughly
                        ₹1,500–₹2,500 per person; a private full-day hire
                        runs ₹4,500–₹7,000 depending on vehicle and season.
                      </li>
                      <li>
                        SUVs with good ground clearance handle the occasional
                        rutted or gravel stretch far more comfortably than
                        sedans — most operators won't send a sedan up this
                        road anyway.
                      </li>
                    </ul>
                  </section>
                </section>

                {/* ── Checkposts ────────────────────────────────────────── */}
                <section id="checkposts">
                  <h2>South Pullu & North Pullu Checkposts</h2>
                  <p>
                    Two checkposts bookend the Khardung La crossing, and
                    every vehicle headed toward Nubra Valley must stop at
                    both. Neither is a hassle if your paperwork is in order —
                    plan for a few minutes at each.
                  </p>
                  <div className="space-y-4 my-6">
                    {[
                      {
                        name: "South Pullu",
                        color: "border-forest-300 bg-forest-50",
                        detail:
                          "The first checkpost, roughly 24 km from Leh on the way up. This is where your Inner Line Permit is checked and logged before you're allowed to continue toward the pass.",
                      },
                      {
                        name: "North Pullu",
                        color: "border-amber-300 bg-amber-50",
                        detail:
                          "On the descending side toward Nubra, past the summit. A second permit check happens here as you exit the restricted zone around the pass and drop toward Khardung village and, eventually, Diskit.",
                      },
                    ].map((c) => (
                      <div
                        key={c.name}
                        className={`border ${c.color} rounded-xl p-5`}
                      >
                        <h4
                          className="font-bold text-stone-900 mb-2"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {c.name}
                        </h4>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {c.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p>
                    Carry physical printouts of your Inner Line Permit — 2–3
                    copies per traveller is a safe rule of thumb. Digital
                    copies on a phone are sometimes accepted but not
                    guaranteed, especially if signal is patchy (it usually
                    is). ILPs are obtained in Leh, either online in advance
                    or in person at the DC Office, and cover Nubra Valley,
                    Pangong, and other restricted border areas in one go.
                  </p>
                </section>

                {/* ── Nubra Valley Teaser ───────────────────────────────── */}
                <section id="nubra-valley">
                  <h2>Onward to Nubra Valley</h2>
                  <p>
                    Descend the far side of Khardung La and the landscape
                    changes almost as dramatically as the altitude does.
                    Within an hour or two you drop into{" "}
                    <strong>Nubra Valley</strong>, a broad, comparatively
                    green valley where the Shyok and Nubra rivers meet, sand
                    dunes rise between snow-streaked 6,000-metre peaks, and
                    Bactrian camels — descendants of Silk Road caravans —
                    still plod across the dunes at Hunder.
                  </p>
                  <p>
                    Diskit, Nubra's main town, is home to a towering
                    hilltop Maitreya Buddha statue and an ancient monastery
                    perched above the valley floor. Most travellers who cross
                    Khardung La spend a night or two in Nubra before
                    returning the same way — making this pass a crossing
                    you'll almost certainly make twice.
                  </p>
                </section>

                {/* ── Road Conditions ───────────────────────────────────── */}
                <section id="road-conditions">
                  <h2>Road Conditions & BRO Maintenance</h2>
                  <p>
                    The road over Khardung La is built and maintained by the{" "}
                    <strong>Border Roads Organisation (BRO)</strong>, the
                    Indian government agency responsible for road
                    infrastructure in the country's remote border regions.
                    Motto boards along the route — cheerful, slightly
                    absurdist warnings about speed and safety — are a small
                    running joke among Ladakh road-trippers and worth reading
                    as you pass.
                  </p>
                  <p>
                    Conditions vary considerably by season and by year. Large
                    stretches are smoothly tarmacked, but expect intermittent
                    gravel, water crossings from meltwater streams, and
                    occasional construction detours, especially just after
                    the pass reopens in early summer. BRO crews work
                    continuously through the season to keep the road
                    passable, but landslides and minor washouts are a normal
                    part of high-altitude Himalayan driving here — build
                    slack into your schedule rather than expecting a fixed
                    arrival time.
                  </p>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Check current status:</strong> Before setting
                    out, ask your hotel or a local tour operator in Leh about
                    same-day road conditions. A landslide or convoy delay can
                    close the road for hours with little notice, particularly
                    early and late in the season.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There is no accommodation at Khardung La itself — nor
                    would you want any, given the altitude. This is a
                    crossing, not a destination to overnight at. Your two
                    realistic bases are Leh, before and after the drive, or
                    Nubra Valley, if you're continuing on rather than
                    returning the same day.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        tier: "Base in Leh",
                        icon: "🏨",
                        range: "₹600 – ₹10,000/night",
                        picks: [
                          "Changspa area guesthouses (budget)",
                          "Hotel Ladakh Palace (mid-range)",
                          "The Grand Dragon Leh (luxury)",
                          "Best if doing Khardung La as a day trip",
                        ],
                      },
                      {
                        tier: "Continue to Nubra",
                        icon: "🏕️",
                        range: "₹1,500 – ₹6,000/night",
                        picks: [
                          "Diskit guesthouses and homestays",
                          "Hunder dune-side camps",
                          "Nubra Eco Camp",
                          "Best if combining with a 2–3 day Nubra loop",
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
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown for a Khardung La Crossing</h2>
                  <p>
                    Costs here are modest compared to the rest of a Ladakh
                    trip — the pass itself doesn't charge an entry fee, and
                    your main expenses are the vehicle, fuel, and permit.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-forest-50">
                          {["Expense", "Budget", "Mid-Range", "Comfort"].map(
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
                            "Vehicle (bike rental/day)",
                            "₹1,000",
                            "₹1,500",
                            "₹2,500",
                          ],
                          [
                            "Vehicle (taxi, round trip)",
                            "₹1,800/seat",
                            "₹4,500 (private)",
                            "₹7,000 (SUV, private)",
                          ],
                          ["Fuel (round trip from Leh)", "₹500", "₹700", "₹900"],
                          ["Inner Line Permit", "₹300", "₹400", "₹400"],
                          [
                            "Tea / snacks at the top",
                            "₹100",
                            "₹200",
                            "₹400",
                          ],
                          ["Riding gear rental (bikers)", "₹300", "₹500", "₹800"],
                        ].map((row, i) => (
                          <tr
                            key={row[0]}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {row[0]}
                            </td>
                            {row.slice(1).map((cell, j) => (
                              <td
                                key={j}
                                className="p-3 border border-stone-200 text-stone-600"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips: Do's & Don'ts</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 m-0">
                        {[
                          "Acclimatise in Leh for at least 48 hours before the drive",
                          "Fill your fuel tank fully in Leh — no reliable pump on the pass",
                          "Carry printed ILP copies for both checkposts",
                          "Pack proper cold-weather layers, even in July",
                          "Check same-day road status before setting out",
                          "Test your vehicle's brakes on the descent — engine braking helps on long downhill stretches",
                        ].map((t) => (
                          <li
                            key={t}
                            className="text-sm text-stone-700 flex items-start gap-2"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">
                              ✓
                            </span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-rose-50 border border-rose-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-rose-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>❌</span> Don't
                      </h4>
                      <ul className="space-y-2 m-0">
                        {[
                          "Don't attempt this drive on your first or second day in Ladakh",
                          "Don't linger at the top beyond 15–20 minutes",
                          "Don't run, jump, or exert yourself for photos at altitude",
                          "Don't rely on the summit ATM actually having cash",
                          "Don't ride or drive without full protective/warm gear",
                          "Don't ignore headache, nausea, or breathlessness — descend immediately",
                        ].map((t) => (
                          <li
                            key={t}
                            className="text-sm text-stone-700 flex items-start gap-2"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            <span className="text-rose-500 font-bold mt-0.5 flex-shrink-0">
                              ✕
                            </span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p>
                    Khardung La rewards preparation far more than bravado. Go
                    slow on the way up, breathe, keep your stop at the
                    summit brief, and the pass becomes exactly what it should
                    be — a genuinely thrilling, genuinely beautiful high
                    point of any Ladakh trip, not an ordeal to survive.
                  </p>
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
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Khardung La",
                  "Ladakh",
                  "Nubra Valley",
                  "High Altitude",
                  "Road Trip",
                  "BRO",
                ].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase()}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations
                sections={HIMALAYAN_GEAR}
                destination="Khardung La"
              />
              {/* Related Posts Grid at bottom */}
              <RelatedPostsGrid currentSlug="khardung-la-travel-guide" />
            </article>

            {/* Right: Related Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="khardung-la-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
