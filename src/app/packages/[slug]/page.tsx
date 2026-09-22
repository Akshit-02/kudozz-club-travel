import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { allStatePackages, getStatePackage } from "@/lib/all-states-data";
import { travelStylesData, getTravelStyle } from "@/lib/travel-styles-data";
import { rajasthanRoutes } from "@/lib/rajasthan-routes";

const durations = [
  { label: "3 Days", desc: "A quick trip to the top highlights" },
  { label: "5 Days", desc: "Two or three key destinations, unhurried" },
  { label: "7 Days", desc: "The classic multi-city circuit" },
  { label: "10+ Days", desc: "Add off-beat stops and slower travel" },
];

const tripTypes = [
  "Family Holiday",
  "Honeymoon",
  "Luxury Trip",
  "Budget Trip",
  "Group Tour",
  "Solo Trip",
];

export async function generateStaticParams() {
  const stateSlugs = allStatePackages.map((s) => ({ slug: s.slug }));
  const styleSlugs = travelStylesData.map((s) => ({ slug: s.slug }));
  return [...stateSlugs, ...styleSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const state = getStatePackage(params.slug);
  if (state) {
    return {
      title: `${state.name} Tour Packages — Customized Itineraries`,
      description: `${state.name} tour packages planned in-house by Kudozz Club — customized itineraries covering ${state.name}'s top destinations. Family, honeymoon, luxury and budget options. Pricing is enquiry-based.`,
      keywords: [
        `${state.name} tour packages`,
        `${state.name} holiday packages`,
        `customized ${state.name} tours`,
        `${state.name} family tour packages`,
      ],
      alternates: { canonical: `https://club.kudozz.in/packages/${state.slug}` },
    };
  }
  const style = getTravelStyle(params.slug);
  if (style) {
    return {
      title: `${style.name} Packages — India Trip Planning`,
      description: `${style.name} across India, planned in-house by Kudozz Club. ${style.intro} Pricing is enquiry-based.`,
      keywords: [
        `${style.name.toLowerCase()} packages India`,
        `${style.name.toLowerCase()} tour packages India`,
      ],
      alternates: { canonical: `https://club.kudozz.in/packages/${style.slug}` },
    };
  }
  return {};
}

function StatePackageView({ state }: { state: NonNullable<ReturnType<typeof getStatePackage>> }) {
  const isRajasthan = state.slug === "rajasthan";
  const faqs = [
    {
      q: `How does Kudozz Club plan a ${state.name} trip?`,
      a: `You share your dates, budget range, and interests through the enquiry form. Our in-house team builds a day-by-day itinerary around that and sends it to you by email for review — no outsourced call center, no marketplace of unknown agents.`,
    },
    {
      q: "Can I customize the route or duration?",
      a: "Yes — nothing here is a fixed package. Add or drop destinations, extend the trip, or combine it with a neighboring state.",
    },
    {
      q: `How much does a ${state.name} trip cost?`,
      a: "Pricing depends on hotel category, transport, and season, so we don't publish fixed package prices. Tell us your budget range in the enquiry form and we'll quote accordingly.",
    },
    {
      q: `What's the best time to visit ${state.name}?`,
      a: `See the full ${state.name} travel guide for month-by-month detail on weather and the best time to visit.`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `${state.name} Tour Packages — Kudozz Club`,
            url: `https://club.kudozz.in/packages/${state.slug}`,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
                { "@type": "ListItem", position: 2, name: "Tour Packages", item: "https://club.kudozz.in/packages" },
                { "@type": "ListItem", position: 3, name: state.name, item: `https://club.kudozz.in/packages/${state.slug}` },
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={state.image}
              alt={`${state.name}, India`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/50 to-stone-900/10" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-14 pt-32 w-full">
            <nav
              className="text-white/50 text-xs mb-4 flex items-center gap-1.5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/packages" className="hover:text-white">Tour Packages</Link>
              <span>/</span>
              <span className="text-white/80">{state.name}</span>
            </nav>
            <h1
              className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight max-w-2xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {state.name} Tour Packages
            </h1>
            <p
              className="text-white/70 text-base leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Customized {state.name} itineraries planned in-house — tell us
              your dates and interests, and we'll build the plan.
            </p>
          </div>
        </section>

        {/* Durations */}
        <section className="bg-stone-50 py-14">
          <div className="max-w-5xl mx-auto px-6 sm:px-10">
            <h2
              className="text-2xl font-bold text-stone-900 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Package Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {durations.map((d) => (
                <div key={d.label} className="p-5 bg-white border border-stone-200 rounded-2xl">
                  <span className="text-forest-600 font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
                    {d.label}
                  </span>
                  <p className="text-stone-500 text-sm mt-2 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Routes (Rajasthan) or Places Covered (everyone else) */}
        {isRajasthan ? (
          <section className="bg-white py-14">
            <div className="max-w-5xl mx-auto px-6 sm:px-10">
              <h2 className="text-2xl font-bold text-stone-900 mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Popular Rajasthan Routes
              </h2>
              <div className="space-y-5">
                {rajasthanRoutes.map((r) => (
                  <div key={r.name} className="p-6 bg-stone-50 border border-stone-200 rounded-2xl">
                    <h3 className="font-bold text-stone-900 mb-1.5" style={{ fontFamily: "var(--font-playfair)" }}>
                      {r.name}
                    </h3>
                    <p className="text-stone-500 text-sm mb-4 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {r.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {r.stops.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="text-xs font-semibold text-forest-700 bg-forest-50 hover:bg-forest-100 border border-forest-200 px-3 py-1.5 rounded-full transition-colors"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {s.label} guide →
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="bg-white py-14">
            <div className="max-w-5xl mx-auto px-6 sm:px-10">
              <h2 className="text-2xl font-bold text-stone-900 mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                Places Covered in {state.name}
              </h2>
              <p className="text-stone-500 text-sm mb-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Mix and match from {state.children.length} destinations we already have detailed guides for — tell us which ones interest you.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {state.children.slice(0, 15).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/blog/${c.slug}`}
                    className="p-3 rounded-lg border border-stone-200 bg-stone-50 hover:border-forest-300 hover:shadow-sm transition-all text-sm font-medium text-stone-700 hover:text-forest-700"
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <p className="max-w-5xl mx-auto px-6 sm:px-10 text-stone-500 text-sm pb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
          For full destination detail — best time to visit, how to reach, things to do, and budgets — see the complete{" "}
          <Link href={`/blog/${state.blogSlug}`} className="text-forest-600 hover:text-forest-800 underline">
            {state.name} travel guide
          </Link>
          .
        </p>

        {/* Trip types */}
        <section className="bg-stone-50 py-14">
          <div className="max-w-5xl mx-auto px-6 sm:px-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Built for Every Kind of Trip
            </h2>
            <div className="flex flex-wrap gap-3">
              {tripTypes.map((t) => (
                <span key={t} className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm text-stone-700 font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-6 sm:px-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                  <h3 className="font-bold text-stone-900 mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{f.q}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-stone-950 py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Ready to plan your {state.name} trip?
            </h2>
            <Link
              href="/plan-your-trip"
              className="inline-flex items-center gap-2 px-7 py-3.5 gradient-forest text-white font-semibold rounded-full text-sm hover:opacity-90 transition-opacity shadow-md"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Customize This Trip →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function StylePackageView({ style }: { style: NonNullable<ReturnType<typeof getTravelStyle>> }) {
  const relatedStates = style.relatedStates
    .map((slug) => getStatePackage(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const faqs = [
    {
      q: `Can Kudozz Club plan a ${style.name.toLowerCase()} trip?`,
      a: `Yes — ${style.name.toLowerCase()} is one of the trip types we plan regularly. Tell us your destination preference (or ask us to suggest one) through the enquiry form.`,
    },
    {
      q: "Which destinations work best for this?",
      a: `${relatedStates.map((s) => s.name).join(", ")} are well-suited, but the enquiry form lets you name any Indian destination.`,
    },
    {
      q: "How much does it cost?",
      a: "Pricing depends on destination, hotel category, and season, so we don't publish fixed prices. Share your budget range in the enquiry form and we'll quote accordingly.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `${style.name} Packages — Kudozz Club`,
            url: `https://club.kudozz.in/packages/${style.slug}`,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
                { "@type": "ListItem", position: 2, name: "Tour Packages", item: "https://club.kudozz.in/packages" },
                { "@type": "ListItem", position: 3, name: style.name, item: `https://club.kudozz.in/packages/${style.slug}` },
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <SiteHeader />
      <main>
        <section className="relative min-h-[45vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src={style.image} alt={style.name} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/50 to-stone-900/10" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-14 pt-32 w-full">
            <nav className="text-white/50 text-xs mb-4 flex items-center gap-1.5" style={{ fontFamily: "var(--font-dm-sans)" }}>
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/packages" className="hover:text-white">Tour Packages</Link>
              <span>/</span>
              <span className="text-white/80">{style.name}</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight max-w-2xl" style={{ fontFamily: "var(--font-playfair)" }}>
              {style.name} Packages
            </h1>
            <p className="text-white/70 text-base leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-source-serif)" }}>
              {style.intro}
            </p>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="max-w-5xl mx-auto px-6 sm:px-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Where This Works Well
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedStates.map((s) => (
                <Link
                  key={s.slug}
                  href={`/packages/${s.slug}`}
                  className="group relative flex flex-col justify-end overflow-hidden rounded-2xl h-48 bg-stone-800 shadow-sm hover:shadow-lg transition-all"
                >
                  <Image src={s.image} alt={s.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative z-10 p-4">
                    <h3 className="text-white font-bold text-base" style={{ fontFamily: "var(--font-playfair)" }}>{s.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="max-w-3xl mx-auto px-6 sm:px-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="bg-white border border-stone-200 rounded-2xl p-6">
                  <h3 className="font-bold text-stone-900 mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{f.q}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-950 py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Plan your {style.name.toLowerCase()}
            </h2>
            <Link
              href="/plan-your-trip"
              className="inline-flex items-center gap-2 px-7 py-3.5 gradient-forest text-white font-semibold rounded-full text-sm hover:opacity-90 transition-opacity shadow-md"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Get a Custom Itinerary →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export default function PackageSlugPage({ params }: { params: { slug: string } }) {
  const state = getStatePackage(params.slug);
  if (state) return <StatePackageView state={state} />;

  const style = getTravelStyle(params.slug);
  if (style) return <StylePackageView style={style} />;

  notFound();
}
