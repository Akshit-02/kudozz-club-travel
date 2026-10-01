import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { allStatePackages } from "@/lib/all-states-data";
import { travelStylesData } from "@/lib/travel-styles-data";
import { comboPackages } from "@/lib/combo-packages";
import { getDestinationProfile } from "@/lib/destination-profiles";

export const metadata: Metadata = {
  title: "India Tour Packages: Customized Trips by State & Style",
  description:
    "Customized India tour packages for Kashmir, Rajasthan, Kerala, Goa, Ladakh and every other state. Family, honeymoon, luxury and budget trips, planned in-house.",
  keywords: [
    "India tour packages",
    "customized tour packages India",
    "customized India tours",
    "India holiday packages",
    "domestic tour packages India",
  ],
  openGraph: {
    title: "India Tour Packages | Kudozz Club",
    description:
      "Customized India tour packages planned in-house: every state, every travel style. Pricing quoted per enquiry.",
    url: "https://club.kudozz.in/packages",
    type: "website",
    siteName: "Kudozz Club",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Kudozz Club, India travel agency" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-default.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/packages" },
};

const packagesFaqs = [
  {
    q: "What is a Kudozz Club tour package?",
    a: "A starting point, not a fixed product. Each package page shows popular routes, how many days to allow, the best months and what to know before booking. We then plan and quote the trip around your dates, group, hotel category and pace, so no two trips have to be the same.",
  },
  {
    q: "What is included in a tour package?",
    a: "It depends on what you ask us to plan. Every quote lists exactly what is included for your trip, so you can compare it with other options. Tell us in the enquiry form what you would like Kudozz Club to take care of.",
  },
  {
    q: "How much does an India tour package cost?",
    a: "We don't publish fixed prices, because season, hotel category, group size and how you travel between places change the cost more than the destination does. Share a budget range when you enquire and we plan within it. Our destination guides include indicative budget breakdowns if you want a rough idea first.",
  },
  {
    q: "How many days do I need for an India trip?",
    a: "It depends on the route. Each package page recommends a trip length: for example five to six days for the Golden Triangle or the classic Srinagar, Gulmarg and Pahalgam trip in Kashmir. Multi-state circuits need more time, and we will tell you if a plan is too rushed.",
  },
  {
    q: "Can I combine several states in one trip?",
    a: "Yes. The circuit pages (Golden Triangle, Char Dham Yatra, Northeast India and the Buddhist Circuit) cover classic multi-state routes, and we can plan any other combination that works with realistic travel times.",
  },
  {
    q: "Do you plan family, honeymoon and group trips?",
    a: "Yes. Choose a travel style below (family holidays, honeymoon, group tours, luxury, budget, adventure, wildlife, spiritual, heritage, hill stations, nature, road trips or weekend getaways) or describe your trip in the Plan My Trip form.",
  },
];

function PackagesSchema() {
  const all = [
    ...comboPackages.map((c) => ({ name: `${c.name} Tour Packages`, slug: c.slug })),
    ...allStatePackages.map((p) => ({ name: `${p.name} Tour Packages`, slug: p.slug })),
    ...travelStylesData.map((t) => ({ name: `${t.name} Packages`, slug: t.slug })),
  ];
  const graph = [
    {
      "@type": "CollectionPage",
      "@id": "https://club.kudozz.in/packages#webpage",
      name: "India Tour Packages",
      url: "https://club.kudozz.in/packages",
      isPartOf: { "@id": "https://club.kudozz.in/#website" },
      publisher: { "@id": "https://club.kudozz.in/#organization" },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: all.length,
        itemListElement: all.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.name,
          url: `https://club.kudozz.in/packages/${p.slug}`,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Tour Packages", item: "https://club.kudozz.in/packages" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: packagesFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

const REGION_ORDER = [
  "North India",
  "South India",
  "East India",
  "West India",
  "Central India",
  "Northeast India",
];

export default function PackagesPage() {
  const byRegion = REGION_ORDER.map((region) => ({
    region,
    states: allStatePackages.filter((s) => s.region === region),
  })).filter((g) => g.states.length > 0);

  return (
    <>
      <PackagesSchema />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-stone-950 pb-16 pt-32 sm:pt-36">
          <div className="container-site max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-6 font-sans text-xs text-white/55">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden="true" className="text-white/25">/</li>
                <li aria-current="page" className="text-white/40">Tour Packages</li>
              </ol>
            </nav>
            <p className="eyebrow eyebrow-light">Tour packages</p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              India Tour Packages
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-stone-300 sm:text-lg">
              Customized trips across every Indian state and union territory,
              planned in-house by the Kudozz Club team. Pick a destination or a
              travel style to see popular routes, or tell us what you have in
              mind. Pricing is quoted for your trip, never a fixed package price.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/plan-your-trip?from=/packages" className="btn-primary px-7">Plan My Trip →</Link>
              <a href="#by-style" className="btn-outline-light px-7">Browse by travel style</a>
            </div>
          </div>
        </section>

        {/* How packages work (answer-first) */}
        <section className="bg-white pt-16">
          <div className="container-site max-w-4xl">
            <div className="rounded-2xl border border-forest-200 bg-forest-50 p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-stone-950">How our India tour packages work</h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone-700">
                Kudozz Club&rsquo;s India tour packages are customized trips, not
                fixed departures. There is a package page for every one of the{" "}
                {allStatePackages.length} states and union territories, {comboPackages.length}{" "}
                classic multi-state circuits and {travelStylesData.length} travel
                styles. Each shows popular routes, how many days to allow and the
                best months. We then plan and quote your trip around your dates,
                group, hotels and pace.
              </p>
              <ol className="mt-4 grid gap-2 font-sans text-sm text-stone-700 sm:grid-cols-3">
                <li><strong className="text-stone-950">1. Pick a starting point:</strong> a destination, circuit or travel style below.</li>
                <li><strong className="text-stone-950">2. Tell us about your trip:</strong> dates, travellers, budget range and interests.</li>
                <li><strong className="text-stone-950">3. Get your plan:</strong> a day-by-day itinerary and quote, refined with you by email.</li>
              </ol>
              <p className="mt-4 font-sans text-sm text-stone-600">
                Comparing agencies first? Read{" "}
                <Link href="/best-travel-agency-in-india" className="text-link">how to choose the best travel agency in India</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Popular circuits */}
        <section className="bg-white py-16">
          <div className="container-site">
            <p className="eyebrow">Popular circuits</p>
            <h2 className="heading-lg mt-3">Classic multi-state routes</h2>
            <ul className="mt-8 grid gap-5 md:grid-cols-3">
              {comboPackages.map((c) => (
                <li key={c.slug}>
                  <Link href={`/packages/${c.slug}`} className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-2xl bg-stone-800">
                    <Image src={c.image} alt={c.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    <div className="relative p-5">
                      <h3 className="font-display text-2xl font-bold text-white">{c.name} Tour Packages</h3>
                      <p className="mt-1 font-sans text-sm text-stone-200">{c.routes[0].stops.map((s) => s.label).join(" → ")} · {c.routes[0].days}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* State grid, grouped by region */}
        <section className="bg-stone-50 py-20">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 space-y-16">
            {byRegion.map((group) => (
              <div key={group.region}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-forest-500" />
                  <h2 className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {group.region} tour packages
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {group.states.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/packages/${s.slug}`}
                      className="group relative flex flex-col justify-end overflow-hidden rounded-2xl h-52 bg-stone-800 shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                      <Image
                        src={getDestinationProfile(s.slug)?.heroImage ?? s.image}
                        alt={getDestinationProfile(s.slug)?.heroAlt ?? `${s.name}, India`}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                      <div className="relative z-10 p-4">
                        <h3 className="text-white font-bold text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                          {s.name}
                        </h3>
                        <span className="text-white/60 text-xs" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {s.name} tour packages →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Travel styles */}
        <section id="by-style" className="bg-white py-20 border-t border-stone-100 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-forest-500" />
                <span className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  By trip type
                </span>
                <div className="h-px w-8 bg-forest-500" />
              </div>
              <h2 className="text-3xl font-bold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
                What Kind of Trip?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {travelStylesData.map((t) => (
                <Link
                  key={t.slug}
                  href={`/packages/${t.slug}`}
                  className="p-5 bg-stone-50 border border-stone-200 rounded-2xl hover:border-forest-300 hover:shadow-sm transition-all group"
                >
                  <h3 className="font-bold text-stone-900 mb-1 group-hover:text-forest-700 transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                    {t.name}
                  </h3>
                  <p className="text-stone-500 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {t.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-stone-50 py-20 border-t border-stone-100">
          <div className="container-site max-w-3xl">
            <h2 className="heading-lg">India tour packages: common questions</h2>
            <div className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
              {packagesFaqs.map((f) => (
                <div key={f.q} className="py-5">
                  <h3 className="font-display text-lg font-semibold text-stone-950">{f.q}</h3>
                  <p className="mt-2 font-sans text-[15px] leading-relaxed text-stone-600">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-stone-950 py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Not sure where to start?
            </h2>
            <p className="text-white/60 mb-8 text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Tell us your budget, dates, and interests — we'll suggest a
              destination and build the plan.
            </p>
            <Link
              href="/plan-your-trip"
              className="btn-primary px-8"
            >
              Plan My Trip →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
