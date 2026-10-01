import Link from "@/components/ui/Link";
import { getPackageLinkForSlug } from "@/lib/blog-package-link";
import { getStatePackage } from "@/lib/all-states-data";
import { SITE_URL } from "@/lib/site";

// One breadcrumb trail for every destination guide, built from the same
// state data as /destinations and the package pages, so the visible trail
// and its BreadcrumbList schema always agree and always show the real
// hierarchy: Home › Destinations › State › Place.

interface Crumb {
  name: string;
  href: string | null;
}

export function guideCrumbs(slug: string, label: string): Crumb[] {
  const crumbs: Crumb[] = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
  ];
  const pkg = getPackageLinkForSlug(slug);
  const state = pkg ? getStatePackage(pkg.packageSlug) : undefined;
  if (state && state.blogSlug === slug) {
    crumbs.push({ name: state.name, href: null });
    return crumbs;
  }
  if (state) crumbs.push({ name: state.name, href: `/blog/${state.blogSlug}` });
  crumbs.push({ name: label, href: null });
  return crumbs;
}

export function guideBreadcrumbSchema(slug: string, label: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: guideCrumbs(slug, label).map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href ?? `/blog/${slug}`}`.replace(/\/$/, ""),
    })),
  };
}

export default function GuideBreadcrumb({ slug, label }: { slug: string; label: string }) {
  const crumbs = guideCrumbs(slug, label);
  return (
    <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 font-sans text-xs text-white/55">
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="transition-colors hover:text-white">
                {c.name}
              </Link>
            ) : (
              <span className="text-white/35" aria-current="page">
                {c.name}
              </span>
            )}
            {i < crumbs.length - 1 && <span className="text-white/20" aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
