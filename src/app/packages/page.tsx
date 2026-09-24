import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { allStatePackages } from "@/lib/all-states-data";
import { travelStylesData } from "@/lib/travel-styles-data";
import { comboPackages } from "@/lib/combo-packages";
import { getDestinationProfile } from "@/lib/destination-profiles";

export const metadata: Metadata = {
  title: "India Tour Packages: Customized Holidays",
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
  },
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
        <section className="bg-stone-950 pb-16 pt-32 sm:pt-36">
          <div className="container-site max-w-4xl">
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
