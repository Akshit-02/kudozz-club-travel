// Template for the JSON-backed cluster articles: Adventure Travel
// (src/content/adventure) and Beach Travel (src/content/beach).
// Order: hero, intro, quick answer, key takeaways, one planning CTA, the
// article sections, safety, packing, next steps (second CTA), FAQs, related.
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { GuideFigure } from "@/components/ui/GuideImages";
import { adventureWordCount, type AdventureArticle, type AdvTable } from "@/lib/adventure";
import { relatedAdventure, type AdvIndexEntry } from "@/lib/adventure-links";
import { getTravelStyle } from "@/lib/travel-styles-data";
import { SITE_URL } from "@/lib/site";

export interface ClusterConfig {
  hub: { label: string; href: string; name: string };
  tripType?: string;
  cta: { title: string; text: string };
  sidebarTitle: string;
  allLabel: string;
  /** Heading of the end-of-article planning block (the second CTA). */
  planTitle?: string;
}

export const ADVENTURE_CLUSTER: ClusterConfig = {
  hub: { label: "Adventure Travel", href: "/adventure-travel", name: "Adventure Travel in India" },
  tripType: "Adventure Trips",
  cta: {
    title: "Planning an adventure trip?",
    text: "Tell us what you want to do, when and with whom, and we’ll plan the route, stays and transfers around it.",
  },
  sidebarTitle: "More adventure guides",
  allLabel: "All adventure travel →",
};

export const ADVENTURE_HUB = ADVENTURE_CLUSTER.hub;

function planHref(a: AdventureArticle, c: ClusterConfig) {
  const q = new URLSearchParams({ from: `/blog/${a.slug}` });
  if (a.planDestination) q.set("destination", a.planDestination);
  if (c.tripType) q.set("tripType", c.tripType);
  return `/plan-your-trip?${q.toString()}`;
}

function crumbs(a: AdventureArticle, c: ClusterConfig) {
  const list = [
    { name: "Home", href: "/" },
    { name: c.hub.label, href: c.hub.href },
  ];
  if (a.parent.href !== c.hub.href) list.push({ name: a.parent.label, href: a.parent.href });
  return list;
}

export function AdventureSchema({ a, c = ADVENTURE_CLUSTER }: { a: AdventureArticle; c?: ClusterConfig }) {
  const url = `${SITE_URL}/blog/${a.slug}`;
  // ItemList: the H3 items, or for table-led pages (such as the seasonal
  // calendar) the first column of the first table.
  const firstTable = a.sections.find((s) => s.table)?.table;
  const itemNames = a.sections.flatMap((s) => (s.items ?? []).map((i) => i.name));
  const items = itemNames.length ? itemNames : (firstTable?.rows ?? []).map((r) => r[0]);
  const about =
    a.about.type === "Thing"
      ? { "@type": "Thing", name: a.about.name }
      : {
          "@type": a.about.type,
          name: a.about.name,
          containedInPlace: a.about.containedIn
            ? { "@type": "AdministrativeArea", name: a.about.containedIn, containedInPlace: { "@type": "Country", name: "India" } }
            : { "@type": "Country", name: "India" },
        };
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BlogPosting",
      headline: a.title,
      description: a.description,
      image: `${SITE_URL}${a.hero.src}`,
      datePublished: a.updated,
      dateModified: a.updated,
      author: { "@type": "Organization", name: "Kudozz Club", url: SITE_URL },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      about,
      keywords: [a.primaryKeyword, ...a.secondaryKeywords].join(", "),
      isPartOf: { "@type": "CollectionPage", name: c.hub.name, url: `${SITE_URL}${c.hub.href}` },
      ...(a.places?.length
        ? { mentions: a.places.map((p) => ({ "@type": "Place", name: p })) }
        : {}),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [...crumbs(a, c), { name: a.title, href: `/blog/${a.slug}` }].map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${SITE_URL}${c.href === "/" ? "" : c.href}`,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: a.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  if (items.length) {
    graph.push({
      "@type": "ItemList",
      name: a.title.split(":")[0],
      itemListElement: items.map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
    });
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}

function Facts({ facts }: { facts: Record<string, string> }) {
  return (
    <dl className="not-prose my-5 grid gap-x-6 gap-y-2 rounded-xl border border-stone-200 bg-stone-50 px-5 py-4 font-sans text-sm sm:grid-cols-2">
      {Object.entries(facts).map(([k, v]) => (
        <div key={k} className="flex flex-col">
          <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-500">{k}</dt>
          <dd className="text-stone-800">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Table({ t }: { t: AdvTable }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-stone-200">
      <table className="w-full min-w-[520px] border-collapse font-sans text-sm">
        {t.caption && <caption className="px-4 py-2 text-left text-xs text-stone-500">{t.caption}</caption>}
        <thead className="bg-stone-100 text-left text-stone-700">
          <tr>
            {t.columns.map((c) => (
              <th key={c} scope="col" className="px-4 py-2.5 font-semibold">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {t.rows.map((r, i) => (
            <tr key={i} className="border-t border-stone-200 align-top">
              {r.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="px-4 py-2.5 text-left font-semibold text-stone-900">{cell}</th>
                ) : (
                  <td key={j} className="px-4 py-2.5 text-stone-700">{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AdventureArticleView({ a }: { a: AdventureArticle }) {
  return <ClusterArticleView a={a} c={ADVENTURE_CLUSTER} sidebar={relatedAdventure(a.slug, 6)} />;
}

export function ClusterArticleView({ a, c, sidebar }: { a: AdventureArticle; c: ClusterConfig; sidebar: AdvIndexEntry[] }) {
  const words = adventureWordCount(a);
  const minutes = Math.max(4, Math.round(words / 230));
  const related = sidebar.filter((r) => !a.related.some((x) => x.href === `/blog/${r.slug}`));
  const styles = (a.styles ?? []).map((s) => getTravelStyle(s)).filter((s): s is NonNullable<typeof s> => Boolean(s));
  const plan = planHref(a, c);

  const toc = [
    { id: "introduction", title: "Overview", level: 2 },
    { id: "quick-answer", title: "Quick answer", level: 2 },
    ...a.sections.map((s) => ({ id: s.id, title: s.heading, level: 2 })),
    { id: "safety", title: "Safety", level: 2 },
    ...(a.packing?.length ? [{ id: "packing", title: "What to pack", level: 2 }] : []),
    { id: "plan", title: "Plan your trip", level: 2 },
    { id: "faq", title: "FAQs", level: 2 },
    ...(a.related.length ? [{ id: "related", title: "Related", level: 2 }] : []),
  ];
  const trail = crumbs(a, c);

  return (
    <>
      <AdventureSchema a={a} c={c} />
      <SiteHeader />
      <main>
        <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src={a.hero.src} alt={a.hero.alt} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute left-0 right-0 top-24 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-xs text-white/55">
              {trail.map((c) => (
                <li key={c.href} className="flex items-center gap-2">
                  <Link href={c.href} className="transition-colors hover:text-white">{c.name}</Link>
                  <span className="text-white/20">/</span>
                </li>
              ))}
              <li><span className="text-white/35">{a.title.split(":")[0]}</span></li>
            </ol>
          </nav>
          <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-36 sm:px-10">
            <div className="mb-6 flex flex-wrap gap-2">
              {a.tags.slice(0, 4).map((t) => (
                <span key={t} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="mb-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.2rem]">
              {a.title}
            </h1>
            <p className="mb-8 max-w-2xl font-body text-lg leading-relaxed text-white/80">{a.dek}</p>
            <p className="font-sans text-sm text-white/55">
              {minutes} min read · Updated {new Date(a.updated).toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10">
          <div className="flex gap-8 xl:gap-10">
            <div className="hidden w-60 flex-shrink-0 lg:block xl:w-64">
              <div className="sticky top-24">
                <TableOfContents items={toc} />
              </div>
            </div>

            <article className="min-w-0 max-w-2xl flex-1 xl:max-w-3xl">
              <div className="prose-travel">
                <section id="introduction">
                  {a.intro.map((p, i) => <p key={i}>{p}</p>)}
                </section>

                <section id="quick-answer" className="not-prose my-8 rounded-2xl border border-forest-200 bg-forest-50 p-6">
                  <h2 className="font-display text-xl font-bold text-stone-950">Quick answer</h2>
                  <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone-800">{a.quickAnswer}</p>
                  <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-forest-700">Key takeaways</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 font-sans text-[15px] text-stone-800">
                    {a.takeaways.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </section>

                <aside
                  aria-label={c.cta.title}
                  className="guide-cta my-10 flex flex-col gap-4 rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                >
                  <div>
                    <p className="font-display text-lg font-bold text-stone-950">{c.cta.title}</p>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-stone-600">{c.cta.text}</p>
                  </div>
                  <Link href={plan} className="btn-primary shrink-0">Plan My Trip →</Link>
                </aside>

                {a.sections.map((s) => (
                  <section key={s.id} id={s.id}>
                    <h2>{s.heading}</h2>
                    {(s.paras ?? []).map((p, i) => <p key={i}>{p}</p>)}
                    {s.table && <Table t={s.table} />}
                    {s.list && (
                      <ul>
                        {s.list.map((l) => <li key={l}>{l}</li>)}
                      </ul>
                    )}
                    {(s.items ?? []).map((it) => (
                      <div key={it.name}>
                        <h3>{it.name}</h3>
                        {it.image && <GuideFigure src={it.image.src} alt={it.image.alt} caption={it.image.caption} />}
                        {it.body.map((p, i) => <p key={i}>{p}</p>)}
                        {it.facts && <Facts facts={it.facts} />}
                        {it.links && it.links.length > 0 && (
                          <p className="font-sans text-sm">
                            {it.links.map((l, i) => (
                              <span key={l.href}>
                                {i > 0 && " · "}
                                <Link href={l.href}>{l.label}</Link>
                              </span>
                            ))}
                          </p>
                        )}
                      </div>
                    ))}
                    {(s.after ?? []).map((p, i) => <p key={`after-${i}`}>{p}</p>)}
                  </section>
                ))}

                <section id="safety">
                  <h2>Safety</h2>
                  <ul>
                    {a.safety.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </section>

                {a.packing && a.packing.length > 0 && (
                  <section id="packing">
                    <h2>What to pack</h2>
                    <ul>
                      {a.packing.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                  </section>
                )}

                <section id="plan" className="not-prose my-10 rounded-2xl border border-stone-200 bg-white p-6">
                  <h2 className="font-display text-xl font-bold text-stone-950">{c.planTitle ?? "Plan the trip"}</h2>
                  <ul className="mt-4 grid gap-2 font-sans text-sm sm:grid-cols-2">
                    {a.nextSteps.map((l) => (
                      <li key={l.href}><Link className="text-link" href={l.href}>{l.label}</Link></li>
                    ))}
                    {styles.map((s) => (
                      <li key={s.slug}><Link className="text-link" href={`/packages/${s.slug}`}>{s.name} in India</Link></li>
                    ))}
                    <li><Link className="text-link font-semibold" href={plan}>Plan My Trip →</Link></li>
                  </ul>
                </section>

                <section id="faq">
                  <h2>FAQs</h2>
                  {a.faqs.map((f) => (
                    <div key={f.q}>
                      <h3>{f.q}</h3>
                      <p>{f.a}</p>
                    </div>
                  ))}
                </section>

                {a.related.length > 0 && (
                  <section id="related">
                    <h2>Related reading</h2>
                    <ul>
                      {a.related.map((x) => (
                        <li key={x.href}>
                          <Link href={x.href}>{x.name}</Link>: {x.note}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </article>

            <div className="hidden w-64 flex-shrink-0 xl:block 2xl:w-72">
              <div className="sticky top-24 space-y-3">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">{c.sidebarTitle}</p>
                <ul className="space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/blog/${r.slug}`} className="group flex gap-3">
                        <span className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-stone-100">
                          <Image src={r.image} alt={r.imageAlt} fill sizes="80px" className="object-cover" />
                        </span>
                        <span className="font-sans text-sm font-medium leading-snug text-stone-800 group-hover:text-forest-700">
                          {r.short}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={c.hub.href} className="inline-block pt-2 font-sans text-sm font-semibold text-forest-700">
                  {c.allLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
