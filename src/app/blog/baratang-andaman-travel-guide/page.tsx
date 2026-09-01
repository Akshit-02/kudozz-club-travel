// src/app/blog/baratang-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Baratang Island Travel Guide: Caves, Mud Volcano & Convoy Tips",
  description:
    "Complete Baratang Island guide — the Andaman Trunk Road convoy through the Jarawa Tribal Reserve, the Limestone Caves mangrove boat ride, the Mud Volcano, and Parrot Island. Timings, permits, budget and tips.",
  keywords:
    "Baratang Island, Baratang limestone caves, Baratang mud volcano, Andaman Trunk Road, Jarawa Tribal Reserve, Baratang convoy timings, Parrot Island Andaman, Baratang day trip from Port Blair, Baratang permit, Middle Strait ferry",
  openGraph: {
    title: "Baratang Island Travel Guide: Caves, Mud Volcano & Convoy Tips",
    description:
      "A police-escorted convoy through a protected tribal reserve, a mangrove creek boat ride to limestone caves, and a bubbling mud volcano — Baratang is Andaman's strangest day trip.",
    url: "https://club.kudozz.in/blog/baratang-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mangrove creek waters near Baratang Island, Andaman",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Baratang Island Travel Guide: Caves, Mud Volcano & Convoy Tips",
    description:
      "Limestone caves, a mud volcano, and a convoy drive through a tribal reserve — the complete guide to Baratang Island.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/baratang-andaman-travel-guide",
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
          headline: "Baratang Island Travel Guide: Caves, Mud Volcano & Convoy Tips",
          description:
            "Complete Baratang Island guide — the Andaman Trunk Road convoy through the Jarawa Tribal Reserve, the Limestone Caves mangrove boat ride, the Mud Volcano, and Parrot Island.",
          image: "https://club.kudozz.in/images/destinations/andaman/hero.jpg",
          datePublished: "2026-09-01",
          dateModified: "2026-09-01",
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
            "@id": "https://club.kudozz.in/blog/baratang-andaman-travel-guide",
          },
          keywords:
            "Baratang Island, Limestone Caves, Mud Volcano, Jarawa Tribal Reserve, Andaman Trunk Road, Parrot Island",
          about: {
            "@type": "Place",
            name: "Baratang Island",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Andaman and Nicobar Islands",
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
                name: "Andaman Islands",
                item: "https://club.kudozz.in/blog/andaman-islands-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Baratang Island",
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
    q: "Can I visit Baratang Island on my own, without a tour?",
    a: "You can drive yourself to the jetty, but you cannot skip the convoy — all vehicles crossing the Andaman Trunk Road through the Jarawa Tribal Reserve must travel together at fixed departure times under police escort. Most travellers book a shared taxi or day-tour package from Port Blair, since coordinating the convoy timings and boat/cave tickets independently is more hassle than it's worth for a single day trip.",
  },
  {
    q: "Is it true I can't take photos on the way to Baratang?",
    a: "Yes. Photographing, filming, or attempting to interact with the Jarawa people is strictly illegal under Indian law while passing through the Tribal Reserve, with real legal consequences for violators. Keep cameras and phones away during that stretch of the drive — the rest of the trip, including the caves and mud volcano, can be photographed freely.",
  },
  {
    q: "How early do I need to leave Port Blair for Baratang?",
    a: "Very early — most convoys depart from the Jirkatang checkpoint before 6 AM, which means leaving Port Blair by around 4-4:30 AM to make the first slot. Missing the early convoy usually means a long wait for the next one and a much tighter day, so this is one trip where an early alarm genuinely matters.",
  },
  {
    q: "Are the limestone caves worth the mangrove boat ride?",
    a: "Most visitors say yes — the boat ride itself, winding through narrow mangrove creeks, is as memorable as the caves at the end, which feature unusual stalactite and stalagmite formations built up over centuries. The walk from the creek to the cave entrance crosses some uneven forest terrain, so reasonably sturdy footwear helps.",
  },
  {
    q: "Is the Mud Volcano at Baratang worth seeing?",
    a: "It's a modest, low-key sight — a small area of bubbling grey mud rather than anything dramatic — and honestly the least essential stop on a Baratang day trip. Most people see it briefly on the way to or from the jetty rather than making a special detour for it.",
  },
  {
    q: "Can foreign nationals visit Baratang Island?",
    a: "Yes, but foreign nationals should confirm current permit requirements before travelling, since access through the Jarawa Reserve is more tightly regulated than for domestic tourists. Checking with a local tour operator or the Deputy Commissioner's Office in Port Blair ahead of time avoids surprises on the day.",
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
  { id: "introduction", title: "Andaman's Strangest Day Trip", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Baratang", level: 2 },
  { id: "convoy", title: "The Convoy & Jarawa Reserve", level: 2 },
  { id: "limestone-caves", title: "The Limestone Caves", level: 2 },
  { id: "mud-volcano", title: "The Mud Volcano", level: 2 },
  { id: "parrot-island", title: "Parrot Island", level: 2 },
  { id: "visit-plan", title: "Suggested Day-Trip Plan", level: 2 },
  { id: "food-guide", title: "Food on the Trip", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BaratangGuidePage() {
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
              src="/images/destinations/andaman/hero.jpg"
              alt="Mangrove creek waters near Baratang Island, Andaman"
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
                { label: "Andaman Islands", href: "/blog/andaman-islands-travel-guide" },
                { label: "Baratang Island", href: null },
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
                "Baratang Island",
                "Limestone Caves",
                "Mud Volcano",
                "Jarawa Reserve",
                "Day Trip",
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
              Baratang Island: Caves, Mud Volcano & Convoy Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A police-escorted convoy through a protected tribal reserve, a
              mangrove creek boat ride to ancient limestone caves, and a
              bubbling mud volcano — Baratang is unlike any other day trip in
              the Andamans.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Baratang, Andaman & Nicobar",
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
                  <h2>Andaman's Strangest Day Trip</h2>
                  <p>
                    <strong>Baratang Island</strong> sits between{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair
                    </Link>{" "}
                    and Middle Andaman, and getting there is unlike any other
                    excursion in the islands. The only road route runs
                    straight through the Jarawa Tribal Reserve, a protected
                    area home to one of the world's few remaining
                    hunter-gatherer communities still living largely outside
                    mainstream contact — and to manage that, every vehicle
                    crosses in a single, police-escorted, timed convoy.
                  </p>
                  <p>
                    Once through the reserve and across a short ferry over
                    Middle Strait, Baratang's actual attractions are quieter
                    and more natural: limestone caves reached by a scenic
                    mangrove creek boat ride, a small bubbling mud volcano,
                    and — conditions permitting — a mangrove islet where
                    parrots flock at dusk. None of it is dramatic on its own,
                    but combined with the convoy drive, Baratang ends up
                    being one of the more memorable full-day trips out of
                    Port Blair.
                  </p>
                  <p>
                    It is not, however, a relaxed day out. Early starts,
                    fixed convoy timings, and a strict no-photography rule
                    through the reserve make this a trip that rewards
                    planning — ideally through a local operator who already
                    knows the timings.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌴</span> Baratang Island at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Between Port Blair & Middle Andaman",
                        },
                        {
                          icon: "🚗",
                          label: "From Port Blair",
                          value: "~100 km, 4-5 hrs one-way",
                        },
                        {
                          icon: "🚔",
                          label: "Access",
                          value: "Police-escorted convoy only",
                        },
                        {
                          icon: "🪨",
                          label: "Known For",
                          value: "Limestone Caves, Mud Volcano",
                        },
                        {
                          icon: "📵",
                          label: "Photography",
                          value: "Banned inside the Jarawa Reserve",
                        },
                        {
                          icon: "⏰",
                          label: "Trip Type",
                          value: "Long day trip, very early start",
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
                  <h2>Best Time to Visit Baratang</h2>
                  <p>
                    Since the whole trip depends on outdoor boat rides and a
                    long road journey, weather matters more here than at most
                    Andaman attractions.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and calm — the mangrove creek boat ride and the road journey are both far more comfortable, and convoy delays from weather are rare.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot but workable",
                        text: "Temperatures and humidity climb, and the early-morning convoy start becomes more of a relief than an inconvenience.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — expect disruption",
                        text: "Heavy rain can delay or cancel the mangrove boat rides and even the road convoy on bad days — check conditions the evening before if travelling in this window.",
                      },
                      {
                        season: "Oct",
                        emoji: "🍃",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Transitional, generally fine",
                        text: "Rains are tapering off and the creek is lush and green — a good, slightly less crowded alternative to the peak winter months.",
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
                    <strong>Our pick:</strong> November to February — dry
                    roads, a calm mangrove creek for the boat ride to the
                    caves, and the lowest chance of the whole day being
                    disrupted by weather.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Baratang</h2>
                  <p>
                    There's only one practical way to reach Baratang from{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair
                    </Link>
                    , and it's part of the experience.
                  </p>
                  <ul>
                    <li>
                      <strong>By Road + Ferry:</strong> Drive or take a
                      shared taxi roughly 100 km north from Port Blair along
                      the Andaman Trunk Road, join the convoy at the Jirkatang
                      checkpoint, cross the Jarawa Tribal Reserve, then take a
                      short ferry over Middle Strait to reach Baratang jetty.
                    </li>
                    <li>
                      <strong>Guided Day Tours:</strong> Most travellers book
                      a Baratang day-tour package from Port Blair, which
                      bundles the convoy transport, boat tickets to the caves,
                      and return journey into one arrangement — by far the
                      simplest option.
                    </li>
                    <li>
                      <strong>Self-Drive:</strong> Possible, but you're still
                      bound to the fixed convoy departure times, so there's
                      little practical advantage over a shared taxi unless
                      you specifically want your own vehicle at Baratang.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book a package the evening
                    before through your Port Blair hotel or a local operator —
                    it removes the guesswork around convoy timings and boat
                    ticket queues, which can otherwise eat into your day.
                  </div>
                </section>

                {/* ── Convoy ─────────────────────────────────────────────── */}
                <section id="convoy">
                  <h2>The Convoy & Jarawa Reserve</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="Forest road through the Andaman Trunk Road near the Jarawa Tribal Reserve"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The road to Baratang cuts directly through the{" "}
                    <strong>Jarawa Tribal Reserve</strong>, home to the
                    Jarawa people, one of the last indigenous communities in
                    the islands still living largely apart from mainstream
                    contact. To limit disturbance, the Andaman administration
                    only allows vehicles through in a single, timed,
                    police-escorted convoy — you cannot drive this stretch
                    independently at your own pace.
                  </p>
                  <p>
                    Two rules matter far more here than at any other Andaman
                    attraction: photographing, filming, or attempting to
                    interact with the Jarawa is strictly illegal, with real
                    legal consequences, and vehicles are expected to keep
                    moving through the reserve without stopping. Treat this
                    stretch of the journey with the seriousness it deserves —
                    it exists to protect a genuinely vulnerable community, not
                    as tourist theatre.
                  </p>
                </section>

                {/* ── Limestone Caves ────────────────────────────────────── */}
                <section id="limestone-caves">
                  <h2>The Limestone Caves</h2>
                  <p>
                    From Baratang jetty, a boat ride winds through narrow{" "}
                    <strong>mangrove creeks</strong> — arguably as memorable
                    as the caves themselves — before reaching a forest trail
                    that leads to the cave entrance. Inside, unusual stalactite
                    and stalagmite formations have built up over centuries,
                    lit just enough to make out their shapes.
                  </p>
                  <p>
                    The walk from the creek to the caves crosses uneven
                    forest terrain, so reasonably sturdy footwear is worth
                    having, and the round trip — boat plus walk plus cave
                    visit — typically takes around 2 hours.
                  </p>
                </section>

                {/* ── Mud Volcano ────────────────────────────────────────── */}
                <section id="mud-volcano">
                  <h2>The Mud Volcano</h2>
                  <p>
                    A short distance from the jetty sits Baratang's{" "}
                    <strong>Mud Volcano</strong> — a modest, low-key natural
                    formation where mud bubbles slowly to the surface. It's
                    genuinely one of the least dramatic sights on the trip,
                    and most visitors treat it as a brief five-minute stop
                    rather than a highlight, but it's an easy add-on given
                    how close it sits to the main route.
                  </p>
                </section>

                {/* ── Parrot Island ──────────────────────────────────────── */}
                <section id="parrot-island">
                  <h2>Parrot Island</h2>
                  <p>
                    A short boat ride from Baratang, <strong>Parrot Island
                    </strong> is a small mangrove islet where large flocks of
                    parrots gather at dusk — a striking, noisy sight when
                    conditions line up. Because it depends on timing and
                    weather, it's usually offered as an optional evening
                    add-on rather than a guaranteed part of every itinerary,
                    so confirm with your operator if it's something you want
                    to see.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Day-Trip Plan</h2>
                  <p>
                    Baratang is a long day out, almost entirely from Port
                    Blair and back, so the schedule is fairly fixed by the
                    convoy timings rather than personal preference.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "4:00 - 6:00 AM",
                        title: "Departure & Convoy",
                        color: "bg-amber-700",
                        activities: [
                          "Leave Port Blair well before dawn",
                          "Reach Jirkatang checkpoint for the first convoy slot",
                          "Drive through the Jarawa Tribal Reserve — no photos",
                        ],
                      },
                      {
                        day: "8:00 - 10:00 AM",
                        title: "Ferry & Limestone Caves",
                        color: "bg-forest-600",
                        activities: [
                          "Cross Middle Strait by ferry to Baratang jetty",
                          "Boat ride through mangrove creeks",
                          "Forest walk to the Limestone Caves and back",
                        ],
                      },
                      {
                        day: "10:00 - 11:00 AM",
                        title: "Mud Volcano",
                        color: "bg-sky-600",
                        activities: [
                          "Short stop at the Mud Volcano en route",
                          "Quick photo stop, not a long visit",
                        ],
                      },
                      {
                        day: "11:00 AM onward",
                        title: "Return Convoy",
                        color: "bg-stone-600",
                        activities: [
                          "Ferry back across Middle Strait",
                          "Return convoy through the reserve to Jirkatang",
                          "Drive back to Port Blair, arriving early afternoon",
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
                    * Exact convoy times vary and are set by local
                    authorities — always confirm the current schedule with
                    your operator or hotel before planning your morning.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food on the Trip</h2>
                  <p>
                    Baratang itself has very limited food options — a few
                    basic local stalls near the jetty selling snacks and
                    drinks. Most day-tour packages either include a packed
                    breakfast/lunch or build in a stop at a roadside dhaba on
                    the way.
                  </p>
                  <ul>
                    <li>
                      <strong>Carry your own snacks and water:</strong> Given
                      the early start and long stretches without shops, this
                      is one Andaman trip where packing food in advance
                      genuinely helps.
                    </li>
                    <li>
                      <strong>Roadside dhabas:</strong> A handful of small
                      eateries along the Trunk Road serve basic North
                      Indian/local meals — useful if your package doesn't
                      include food.
                    </li>
                  </ul>
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
                            "Transport (shared taxi/tour)",
                            "₹800",
                            "₹1,800",
                            "₹4,000 (private cab)",
                          ],
                          [
                            "Boat + cave entry tickets",
                            "₹300",
                            "₹300",
                            "₹300",
                          ],
                          ["Parrot Island (optional)", "₹200", "₹300", "₹500"],
                          ["Food & water", "₹300", "₹600", "₹1,200"],
                          ["Total (approx.)", "₹1,600", "₹3,000", "₹6,000"],
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
                    * Figures are per person, per day trip, and exclude your
                    accommodation in{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Baratang</h2>
                  <ul>
                    <li>
                      <strong>Leave Port Blair well before dawn:</strong> The
                      first convoy slot fills the schedule for the day —
                      missing it can cost you hours.
                    </li>
                    <li>
                      <strong>No photography inside the reserve:</strong>{" "}
                      Keep phones and cameras away entirely while passing
                      through the Jarawa Tribal Reserve — this is a legal
                      requirement, not a suggestion.
                    </li>
                    <li>
                      <strong>Wear sturdy footwear:</strong> The walk to the
                      Limestone Caves crosses uneven forest ground after the
                      boat ride.
                    </li>
                    <li>
                      <strong>Carry cash and snacks:</strong> ATMs and food
                      options are minimal once you leave Port Blair for the
                      day.
                    </li>
                    <li>
                      <strong>Book through a local operator:</strong> Given
                      the fixed convoy timings, a package that bundles
                      transport and tickets is simpler than coordinating
                      everything yourself.
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
                          "Leave Port Blair before dawn for the first convoy",
                          "Book transport and boat tickets in advance",
                          "Carry water, snacks, and cash",
                          "Wear sturdy shoes for the caves walk",
                          "Respect the no-photography rule in the reserve",
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
                          "Photograph or attempt contact with the Jarawa",
                          "Expect to travel the reserve at your own pace",
                          "Arrive late and expect to catch the first convoy",
                          "Count on food options beyond basic jetty stalls",
                          "Treat the Mud Volcano as a must-see highlight",
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
                    <strong>🗺️ Extend the trip:</strong> If you have more
                    time, continue north from Baratang toward{" "}
                    <Link href="/blog/rangat-andaman-travel-guide">
                      Rangat
                    </Link>
                    ,{" "}
                    <Link href="/blog/mayabunder-andaman-travel-guide">
                      Mayabunder
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/diglipur-andaman-travel-guide">
                      Diglipur
                    </Link>{" "}
                    rather than backtracking the same day — otherwise, head
                    back to Port Blair to continue your Andaman itinerary.
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
                  "Baratang Island",
                  "Limestone Caves",
                  "Mud Volcano",
                  "Jarawa Tribal Reserve",
                  "Andaman Trunk Road",
                  "Parrot Island",
                  "Day Trip",
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

              <RelatedPostsGrid currentSlug="baratang-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="baratang-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
