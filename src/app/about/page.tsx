// src/app/about/page.tsx
import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { allStatePackages } from "@/lib/all-states-data";
import { travelStylesData } from "@/lib/travel-styles-data";
import { SITE_URL, guideCountLabel, stateCount, trustStats } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "About Kudozz Club | India Travel Agency" },
  description:
    "Kudozz Club is an India-focused travel agency. Our library of India travel guides now powers a customized trip-planning service.",
  keywords: [
    "Kudozz Club",
    "Kudoz Club",
    "Kudos Club",
    "about Kudozz Club",
    "India travel agency",
    "India-focused travel agency",
    "custom India trip planning",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Kudozz Club | India Travel Agency",
    description:
      "We know India. Now let us plan your trip. How Kudozz Club went from travel guides to trip planning.",
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

const brandFaqs = [
  {
    q: "What is Kudozz Club?",
    a: `Kudozz Club is an India-focused travel agency that plans customized trips across India. It also publishes ${guideCountLabel} free travel guides covering all ${stateCount} Indian states and union territories.`,
  },
  {
    q: "Is it Kudozz Club, Kudoz Club, or Kudos Club?",
    a: "Kudozz, spelled with two Zs. We know people also search for Kudoz Club, Kudos Club and Kudoss Club, so if that's how you found us, you're in the right place. club.kudozz.in is our only official website.",
  },
  {
    q: "Is Kudozz Club affiliated with any other 'Kudos' or 'Kudoz' travel brand?",
    a: "No. Kudozz Club is independent. The only official site is club.kudozz.in.",
  },
  {
    q: "Are the travel guides influenced by the trips you sell?",
    a: "No. We don't accept paid placements in our guides, and a guide's recommendations aren't changed to favour a trip we plan. The guides exist to help anyone plan, whether or not they book with us.",
  },
];

const milestones = [
  { year: "Nov 2025", event: "Kudozz Club launched as an India travel guide project" },
  { year: "2026", event: "Guides expanded to cover every Indian state and union territory" },
  { year: "Sep 2026", event: "Launched in-house trip planning, powered by the guide library" },
];

const philosophy = [
  {
    title: "Start with the traveller",
    desc: "Your dates, budget, pace and interests come first. The route follows from them, not the other way round.",
  },
  {
    title: "Fewer places, better days",
    desc: "We would rather plan three places well than seven in a rush. Realistic travel times are part of every plan.",
  },
  {
    title: "Honest over impressive",
    desc: "If a season is wrong, a road is closed or a place isn't worth the detour, we say so.",
  },
  {
    title: "Travel that respects places",
    desc: "We favour slower travel, local stays where they make sense, and visiting fragile places thoughtfully.",
  },
];

const regions = Array.from(new Set(allStatePackages.map((s) => s.region)));

function AboutSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              name: "About Kudozz Club",
              url: `${SITE_URL}/about`,
              mainEntity: { "@id": `${SITE_URL}/#organization` },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
                ],
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: brandFaqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      }}
    />
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutSchema />
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className="relative isolate flex min-h-[70vh] items-end bg-stone-950">
          <Image
            src="/images/blogs/rajasthan/rajasthan/mehrangarh-fort-blue-city-jodhpur.webp"
            alt="Mehrangarh Fort above the blue houses of Jodhpur, Rajasthan"
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/20" />
          <div className="container-site w-full pb-16 pt-36">
            <p className="eyebrow eyebrow-light">About Kudozz Club</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-6xl">
              We Know India. Now Let Us Plan Your Trip.
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-stone-200 sm:text-lg">
              Kudozz Club is an India-focused travel agency helping travellers turn
              destination ideas into thoughtfully planned trips.
            </p>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Our story</p>
              <h2 className="heading-lg mt-4">From travel guides to trip planning</h2>
            </div>
            <div className="space-y-5 font-sans text-base leading-relaxed text-stone-700 sm:text-lg">
              <p>
                Kudozz Club began with a simple idea: travel planning should start
                with better information.
              </p>
              <p>
                So we built it. A growing library of India travel guides covering
                destinations, cities, attractions and routes across the country,
                each written to answer the questions people actually have before
                a trip: when to go, how to get there, how many days it needs,
                where to stay and what it costs.
              </p>
              <p>
                Today, that destination knowledge powers our trip-planning service.
                The research behind the guides goes into every itinerary our
                in-house team plans.
              </p>
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <Link href="/plan-your-trip?from=/about" className="btn-primary px-7">Plan My Trip →</Link>
                <Link href="/blog" className="btn-outline px-7">Read our travel guides</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── What we are ── */}
        <section className="bg-stone-50 py-20 md:py-28">
          <div className="container-site">
            <p className="eyebrow">What Kudozz Club is</p>
            <h2 className="heading-lg mt-4 max-w-2xl">One team, two things we do</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="answer-card">
                <h3 className="font-display text-2xl font-bold text-stone-950">A travel agency for India</h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone-600">
                  We plan customized trips anywhere in India: family holidays,
                  honeymoons, pilgrimages, wildlife and adventure trips, weekend
                  breaks and long circuits. You tell us what you want, we plan it
                  in-house, and we refine it with you. Pricing is quoted for your
                  trip, never a fixed package price.
                </p>
                <Link href="/packages" className="text-link mt-4 inline-block text-sm">Explore India tour packages</Link>
              </div>
              <div className="answer-card">
                <h3 className="font-display text-2xl font-bold text-stone-950">A library of India travel guides</h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone-600">
                  {guideCountLabel} free guides across all {stateCount} states and
                  union territories, organised from state to city to attraction.
                  They&rsquo;re open to everyone, whether or not you plan with us,
                  and they&rsquo;re the research behind every itinerary we build.
                </p>
                <Link href="/destinations" className="text-link mt-4 inline-block text-sm">Browse destinations</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Destination expertise ── */}
        <section className="bg-stone-950 py-20 md:py-24">
          <div className="container-site">
            <p className="eyebrow eyebrow-light">Destination expertise</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
              Coverage across the whole country
            </h2>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-stone-800 md:grid-cols-4">
              {trustStats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse gap-1 bg-stone-950 px-6 py-8">
                  <dt className="font-sans text-xs uppercase tracking-[0.16em] text-stone-400">{s.label}</dt>
                  <dd className="font-display text-4xl font-bold text-white">{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 max-w-3xl font-sans text-sm leading-relaxed text-stone-400">
              Our guides and trip planning cover {regions.join(", ")}: from the
              Himalayan states and the Northeast to the southern coast and the
              Andaman and Lakshadweep islands.
            </p>
          </div>
        </section>

        {/* ── Philosophy ── */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-site">
            <p className="eyebrow">Travel philosophy</p>
            <h2 className="heading-lg mt-4 max-w-2xl">How we think about a good trip</h2>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {philosophy.map((v) => (
                <li key={v.title} className="border-t-2 border-forest-700 pt-5">
                  <h3 className="font-display text-lg font-bold text-stone-950">{v.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-stone-600">{v.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Process + trip types ── */}
        <section className="bg-stone-50 py-20 md:py-28">
          <div className="container-site grid gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Trip planning process</p>
              <h2 className="heading-lg mt-4">How planning with us works</h2>
              <ol className="mt-8 space-y-6">
                {[
                  ["Tell us what you want", "Destination (or ask us to suggest one), dates, who's travelling and a budget range."],
                  ["We build the route", "Our team plans a practical day-by-day itinerary around your priorities."],
                  ["Refine the plan", "Change places, pace and stays until it fits."],
                  ["Get ready to travel", "Once the plan works for you, go ahead with the arrangements Kudozz Club supports."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-5">
                    <span className="font-display text-2xl font-bold text-saffron-500">0{i + 1}</span>
                    <span className="font-sans text-[15px] leading-relaxed text-stone-600">
                      <strong className="block font-semibold text-stone-950">{t}</strong>
                      {d}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="eyebrow">Types of trips</p>
              <h2 className="heading-lg mt-4">Trips we plan</h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {travelStylesData.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/packages/${s.slug}`} className="block rounded-xl bg-white px-4 py-3.5 ring-1 ring-stone-200 transition hover:ring-forest-400">
                      <span className="block font-display font-bold text-stone-950">{s.name}</span>
                      <span className="block font-sans text-xs text-stone-500">{s.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Editorial independence ── */}
        <section className="bg-white py-20">
          <div className="container-site max-w-3xl">
            <p className="eyebrow">Editorial independence</p>
            <h2 className="heading-lg mt-4">Why our guides stay independent</h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-stone-700">
              We don&rsquo;t accept paid placements from hotels, operators or
              brands in our travel guides. Our trip-planning service is a separate
              part of the business: guides link to it where it&rsquo;s useful, but
              what a guide recommends isn&rsquo;t changed to sell a trip. If you
              only want the guides, they&rsquo;re free to read.
            </p>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="bg-stone-950 py-20">
          <div className="container-site max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-white">Our journey so far</h2>
            <ol className="mt-10 space-y-6 border-l border-stone-800 pl-6">
              {milestones.map((m) => (
                <li key={m.year}>
                  <span className="font-sans text-sm font-semibold text-saffron-400">{m.year}</span>
                  <p className="mt-1 font-sans text-stone-300">{m.event}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white py-20">
          <div className="container-site max-w-3xl">
            <h2 className="heading-lg">About the name, and other questions</h2>
            <div className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
              {brandFaqs.map((f) => (
                <div key={f.q} className="py-5">
                  <h3 className="font-display text-lg font-semibold text-stone-950">{f.q}</h3>
                  <p className="mt-2 font-sans text-[15px] leading-relaxed text-stone-600">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-stone-50 py-20">
          <div className="container-site max-w-2xl text-center">
            <h2 className="heading-lg">Let&rsquo;s plan your next India trip.</h2>
            <p className="lede mt-4">Tell us where you want to go. We&rsquo;ll take it from there.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/plan-your-trip?from=/about" className="btn-primary px-8">Plan My Trip →</Link>
              <Link href="/contact" className="btn-outline px-8">Contact us</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
