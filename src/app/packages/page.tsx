import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { allStatePackages } from "@/lib/all-states-data";
import { travelStylesData } from "@/lib/travel-styles-data";

export const metadata: Metadata = {
  title: "India Tour Packages — Customized Trips",
  description:
    "India tour packages planned in-house by Kudozz Club — family holidays, honeymoons, weekend getaways and more, across all 36 Indian states and union territories. Pricing is enquiry-based.",
  keywords: [
    "India tour packages",
    "customized India tours",
    "India holiday packages",
    "domestic tour packages India",
  ],
  alternates: { canonical: "https://club.kudozz.in/packages" },
};

function PackagesSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "India Tour Packages — Kudozz Club",
          url: "https://club.kudozz.in/packages",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Tour Packages", item: "https://club.kudozz.in/packages" },
            ],
          },
        }),
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
        <section className="relative bg-stone-950 pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(61,134,64,0.14)_0%,_transparent_60%)]" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-500/15 border border-forest-500/25 rounded-full mb-6">
              <span className="text-forest-300 text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Tour Packages
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              India trips, planned in-house.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto" style={{ fontFamily: "var(--font-source-serif)" }}>
              Every itinerary is built by the Kudozz Club team, not an
              outsourced call center. Pricing is enquiry-based — tell us your
              trip and we'll quote a custom plan.
            </p>
          </div>
        </section>

        {/* State grid, grouped by region */}
        <section className="bg-stone-50 py-20">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 space-y-16">
            {byRegion.map((group) => (
              <div key={group.region}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-forest-500" />
                  <span className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {group.region}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {group.states.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/packages/${s.slug}`}
                      className="group relative flex flex-col justify-end overflow-hidden rounded-2xl h-52 bg-stone-800 shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                      <Image
                        src={s.image}
                        alt={`${s.name} tour packages`}
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
                          View package →
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
        <section className="bg-white py-20 border-t border-stone-100">
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
              className="inline-flex items-center gap-2 px-7 py-3.5 gradient-forest text-white font-semibold rounded-full text-sm hover:opacity-90 transition-opacity shadow-md"
              style={{ fontFamily: "var(--font-dm-sans)" }}
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
