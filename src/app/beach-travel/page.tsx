// /beach-travel: the hub of the Beach Travel cluster. It carries the "beach
// travel in India" pillar copy (see docs/beach-travel-cannibalization.md) and
// links to every state beach guide, activity, traveller and planning article,
// the Adventure cluster's water activities, and the beach packages.
import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { beachIndex, beachByKind } from "@/lib/beach-links";
import { adventureEntry, type AdvIndexEntry } from "@/lib/adventure-links";
import { getStatePackage } from "@/lib/all-states-data";
import { getDestinationProfile } from "@/lib/destination-profiles";
import { SITE_URL } from "@/lib/site";

const URL = `${SITE_URL}/beach-travel`;
const TITLE = "Beach Travel in India: Beaches, Coasts & Planning | Kudozz Club";
const DESCRIPTION =
  "Beach travel in India: the best beach destinations and beaches, state by state, water activities, honeymoon, family, luxury and budget beach holidays, seasons and safety.";
const HERO = { src: "/images/beach/beach-travel-india-coast.webp", alt: "People on Om Beach, Gokarna, Karnataka" };

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["beach travel in India", "beach holidays India", "beach destinations India", "best beaches India", "India beaches"],
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website", siteName: "Kudozz Club", images: [{ url: HERO.src, alt: HERO.alt }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [HERO.src] },
};

const b = (slug: string) => beachIndex.find((e) => e.slug === slug);

const STATE_ORDER = [
  "best-beaches-in-goa",
  "best-beaches-in-andaman",
  "best-beaches-in-kerala",
  "best-beaches-in-karnataka",
  "best-beaches-in-maharashtra",
  "best-beaches-in-lakshadweep",
  "best-beaches-in-tamil-nadu",
  "best-beaches-in-puducherry",
  "best-beaches-in-odisha",
  "best-beaches-in-andhra-pradesh",
  "best-beaches-in-west-bengal",
  "best-beaches-in-gujarat",
];

// Water activities live in the Adventure cluster; the beach hub links to them.
const WATER = ["water-sports-in-india", "scuba-diving-in-india", "snorkeling-in-india", "surfing-in-india", "kayaking-in-india", "scuba-diving-in-andaman"];

const TRAVELLERS = [
  { title: "Beach holidays for couples", text: "Quiet bays, island stays and sunsets: the Andamans, Lakshadweep, south Goa and Varkala.", href: "/blog/beach-honeymoon-destinations-in-india", cta: "Beach honeymoon destinations" },
  { title: "Family beach holidays", text: "Calm, well-served beaches with lifeguards in season: south Goa, Kovalam, Diu, Udupi, Puri and Vizag.", href: "/blog/beach-holidays-in-india", cta: "Plan a family beach holiday" },
  { title: "Luxury beach escapes", text: "The widest choice of beach resorts and spas is in Goa, Kerala and the Andamans.", href: "/packages/luxury-holidays", cta: "Luxury holidays" },
  { title: "Budget beach trips", text: "Beach huts and homestays in Gokarna, Arambol, Varkala, Diu, Puri and the Konkan coast.", href: "/blog/beach-holidays-in-india", cta: "Budget beach ideas" },
];

const PACKAGES = ["goa", "andaman-nicobar", "lakshadweep", "kerala", "karnataka", "maharashtra", "odisha", "puducherry"];

const FAQS = [
  { q: "Which is the best beach destination in India?", a: "Goa for variety and ease of travel, and the Andaman Islands for the most beautiful beaches and clearest water. Kerala pairs beaches with the backwaters." },
  { q: "What is the best time for a beach holiday in India?", a: "November to March for most of the coast and the islands. The east coast is best from December, after its north-east monsoon." },
  { q: "Can you swim at Indian beaches in the monsoon?", a: "No. Sea swimming and water sports are banned on most of the west coast from about June to September, and the east coast has bans in rough weather." },
  { q: "Which Indian beaches have Blue Flag certification?", a: "About 18 beaches held Blue Flag certification in 2025, including Radhanagar, Shivrajpur, Rushikonda, Puri's Golden Beach, Kappad and five Maharashtra beaches. Certification is renewed every year." },
  { q: "Which beaches are best for families?", a: "South Goa, Candolim, Kovalam, Diu, Udupi's Malpe, Puri and Rushikonda, which have calmer stretches and lifeguards in season." },
];

function Schema() {
  const graph = [
    {
      "@type": "CollectionPage",
      "@id": `${URL}#page`,
      name: "Beach Travel in India",
      description: DESCRIPTION,
      url: URL,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@type": "Country", name: "India" },
      primaryImageOfPage: `${SITE_URL}${HERO.src}`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: beachIndex.map((e, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/blog/${e.slug}`, name: e.title })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Beach Travel", item: URL },
      ],
    },
    { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }} />;
}

function Card({ e, sizes, label }: { e: AdvIndexEntry; sizes: string; label?: string }) {
  return (
    <Link href={`/blog/${e.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <span className="relative block h-44 overflow-hidden bg-stone-100">
        <Image src={e.image} alt={e.imageAlt} fill sizes={sizes} className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </span>
      <span className="flex flex-1 flex-col p-5">
        <span className="font-display text-lg font-bold text-stone-950 group-hover:text-forest-700">{label ?? e.short}</span>
        <span className="mt-2 line-clamp-3 font-sans text-sm leading-relaxed text-stone-600">{e.excerpt}</span>
        <span className="mt-auto pt-3 font-sans text-xs font-semibold text-forest-700">Read the guide →</span>
      </span>
    </Link>
  );
}

function SectionHead({ id, eyebrow, title, intro }: { id: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading-lg mt-3">{title}</h2>
      {intro && <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-stone-600">{intro}</p>}
    </div>
  );
}

export default function BeachTravelPage() {
  const states = STATE_ORDER.map(b).filter((e): e is AdvIndexEntry => Boolean(e));
  const water = WATER.map((s) => adventureEntry(s)).filter((e): e is AdvIndexEntry => Boolean(e));
  const dolphin = b("dolphin-watching-in-india");
  const destinations = b("best-beach-destinations-in-india");
  const bestBeaches = b("best-beaches-in-india");
  const offbeat = b("offbeat-beaches-in-india");
  const guides = [...beachByKind("pillar"), ...beachByKind("planning")].filter(
    (e) => !["best-beach-destinations-in-india", "best-beaches-in-india", "offbeat-beaches-in-india"].includes(e.slug),
  );
  const packages = PACKAGES.map((s) => getStatePackage(s)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const plan = "/plan-your-trip?from=/beach-travel";

  return (
    <>
      <Schema />
      <SiteHeader />
      <main>
        <section className="relative flex min-h-[72vh] flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src={HERO.src} alt={HERO.alt} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
          </div>
          <nav className="absolute left-0 right-0 top-24 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-sans text-xs text-white/55">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li className="text-white/20">/</li>
              <li className="text-white/35">Beach Travel</li>
            </ol>
          </nav>
          <div className="container-site relative z-10 pb-16 pt-36">
            <p className="eyebrow eyebrow-light">Beach travel</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">Beach Travel in India</h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/85 sm:text-lg">
              Islands, cliff-backed coves, temple shores and long quiet sands: find the right beach, coast and season for your trip.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={plan} className="btn-primary px-7">Plan My Beach Trip →</Link>
              <a href="#states" className="btn-outline-light px-7">Explore by state</a>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="prose-travel max-w-none">
              <h2>Beach travel in India</h2>
              <p>
                India has two long coastlines and two island groups. The west coast runs along the Arabian Sea from
                Gujarat through Maharashtra&rsquo;s Konkan, Goa, Karnataka and Kerala; the east coast faces the Bay
                of Bengal from West Bengal through Odisha, Andhra Pradesh, Puducherry and Tamil Nadu. Offshore lie the
                Andaman Islands, with India&rsquo;s most beautiful beaches, and the coral atolls of Lakshadweep.
              </p>
              <p>
                The coasts are very different. Goa has something for everyone; the Andamans and Lakshadweep have clear
                water and reefs; Kerala pairs beaches with backwaters and Ayurveda; the Konkan and Karnataka have quiet
                coves and sea forts; and the east coast mixes beaches with some of India&rsquo;s great temples. Timing
                matters too: most beaches are best from November to March and closed to swimming in the monsoon.
              </p>
            </div>
            <aside className="rounded-2xl border border-forest-200 bg-forest-50 p-6">
              <h2 className="font-display text-xl font-bold text-stone-950">Quick answer</h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone-800">
                The best places for a beach holiday in India are Goa, the Andaman Islands (Havelock and Neil),
                Lakshadweep, Kerala&rsquo;s Varkala and Kovalam, Gokarna, the Konkan coast, Pondicherry and Puri. Go
                between November and March, choose a coast that suits your style, and swim only at lifeguarded beaches
                in season.
              </p>
              <ul className="mt-4 space-y-1.5 font-sans text-sm text-stone-700">
                <li><Link className="text-link" href="/blog/best-time-for-beach-holidays-in-india">When to go, month by month →</Link></li>
                <li><Link className="text-link" href="/blog/beach-safety-in-india">Beach safety in India →</Link></li>
              </ul>
            </aside>
          </div>
        </section>

        {/* 1. Best beach destinations */}
        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="destinations" eyebrow="Best beach destinations" title="Where to go" intro="Start with the destination that suits your trip, then pick the beaches." />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[destinations, bestBeaches, offbeat].filter((e): e is AdvIndexEntry => Boolean(e)).map((e) => (
                <li key={e.slug}><Card e={e} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" /></li>
              ))}
            </ul>
          </div>
        </section>

        {/* 2. By state */}
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="states" eyebrow="Explore beaches by state" title="Beaches, coast by coast" intro="Each guide compares the beaches in a state or island group, with the season, safety and links to the destination guides." />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {states.map((e) => (
                <li key={e.slug}><Card e={e} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" /></li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3 & 4. Activities and water sports */}
        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="activities" eyebrow="Beach activities and water sports" title="Things to do on the coast" intro="Diving, snorkelling, surfing, kayaking, water sports and dolphin trips, with where and when to try each." />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[...water, ...(dolphin ? [dolphin] : [])].map((e) => (
                <li key={e.slug}><Card e={e} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" /></li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5-8. By traveller */}
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="travellers" eyebrow="Beach holidays by traveller" title="Couples, families, luxury and budget" />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {TRAVELLERS.map((t) => (
                <div key={t.title} className="flex flex-col rounded-2xl border border-stone-200 p-6">
                  <h3 className="font-display text-lg font-bold text-stone-950">{t.title}</h3>
                  <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-stone-600">{t.text}</p>
                  <Link className="text-link mt-4 font-sans text-sm font-semibold" href={t.href}>{t.cta} →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Offbeat */}
        <section className="bg-forest-50 py-16">
          <div className="container-site grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHead id="offbeat" eyebrow="Offbeat beaches" title="Quieter coasts worth the detour" intro="Guhagar and Velas on the Konkan, Galgibaga in south Goa, Kasarkod in Karnataka, Marari and Kappil in Kerala, Tranquebar, Bheemili and Talasari on the east coast." />
              <p className="mt-6 font-sans text-sm"><Link className="text-link font-semibold" href="/blog/offbeat-beaches-in-india">Offbeat beaches in India →</Link></p>
            </div>
            <ul className="grid gap-3 font-sans text-sm sm:grid-cols-2">
              {[["Guhagar and Velas", "/blog/best-beaches-in-maharashtra"], ["Galgibaga and Cola", "/blog/best-beaches-in-goa"], ["Kasarkod and Maravanthe", "/blog/best-beaches-in-karnataka"], ["Marari and Kappil", "/blog/best-beaches-in-kerala"], ["Tranquebar", "/blog/best-beaches-in-tamil-nadu"], ["Talasari and Junput", "/blog/best-beaches-in-west-bengal"]].map(([l, h]) => (
                <li key={l}><Link href={h} className="block rounded-xl border border-forest-200 bg-white p-4 font-medium text-stone-800 hover:border-forest-400">{l}</Link></li>
              ))}
            </ul>
          </div>
        </section>

        {/* 10. Guides */}
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="guides" eyebrow="Beach travel guides" title="Plan a better beach trip" />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {guides.map((e) => (
                <li key={e.slug}><Card e={e} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" /></li>
              ))}
            </ul>
          </div>
        </section>

        {/* 11. Packages */}
        <section className="bg-stone-950 py-16">
          <div className="container-site">
            <p className="eyebrow eyebrow-light">Featured beach packages</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Beach holidays, planned around you</h2>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-stone-300">
              Every Kudozz Club trip is customized. Start from a coast or a travel style, and we quote for your dates and group.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {packages.map((p) => {
                const prof = getDestinationProfile(p.slug);
                return (
                  <li key={p.slug}>
                    <Link href={`/packages/${p.slug}`} className="group relative flex h-44 flex-col justify-end overflow-hidden rounded-2xl bg-stone-800">
                      <Image src={prof?.heroImage ?? p.image} alt={prof?.heroAlt ?? `${p.name}, India`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                      <span className="relative p-4 font-display text-lg font-bold text-white">{p.name} tour packages</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-3 font-sans text-sm">
              {[["Honeymoon", "/packages/honeymoon"], ["Family holidays", "/packages/family-holidays"], ["Luxury holidays", "/packages/luxury-holidays"], ["Budget holidays", "/packages/budget-holidays"], ["Weekend getaways", "/packages/weekend-getaways"]].map(([l, h]) => (
                <li key={h}><Link href={h} className="inline-block rounded-full bg-white/10 px-4 py-2 font-medium text-white ring-1 ring-white/20 hover:bg-white/20">{l}</Link></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site max-w-3xl">
            <SectionHead id="faq" eyebrow="FAQs" title="Beach travel in India: FAQs" />
            <div className="mt-6 divide-y divide-stone-200">
              {FAQS.map((f) => (
                <div key={f.q} className="py-5">
                  <h3 className="font-display text-lg font-bold text-stone-950">{f.q}</h3>
                  <p className="mt-2 font-sans text-[15px] leading-relaxed text-stone-700">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. Plan */}
        <section className="bg-white py-16">
          <div className="container-site">
            <div className="flex flex-col gap-6 rounded-3xl border border-stone-200 bg-stone-50 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <h2 className="font-display text-2xl font-bold text-stone-950 sm:text-3xl">Ready for your beach escape?</h2>
                <p className="mt-2 max-w-xl font-sans text-base text-stone-600">
                  Tell us your destination, dates, budget and travel style, or ask us to suggest the right coast.
                </p>
              </div>
              <Link href={plan} className="btn-primary shrink-0 px-7">Plan My Trip →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
