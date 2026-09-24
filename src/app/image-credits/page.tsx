import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import credits from "../../../public/images/blogs/IMAGE_CREDITS.json";
import { SITE_URL } from "@/lib/site";

// Attribution for Creative Commons photography used across the site.
// CC BY and CC BY-SA licences require visible credit; this page provides it.
// Source of truth: public/images/blogs/IMAGE_CREDITS.json.
export const metadata: Metadata = {
  title: "Image Credits",
  description: "Photo credits and licences for Creative Commons images used on Kudozz Club.",
  alternates: { canonical: `${SITE_URL}/image-credits` },
  robots: { index: false, follow: true },
};

type Credit = {
  path: string;
  sourcePage: string;
  license: string;
  author: string;
  attribution: string;
};

const items = (credits.images as Credit[])
  .map((c) => ({
    ...c,
    name: c.path.split("/").pop()!.replace(/\.\w+$/, "").replace(/-/g, " "),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function ImageCreditsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white pb-20 pt-32">
        <div className="container-site max-w-4xl">
          <h1 className="heading-xl">Image Credits</h1>
          <p className="lede mt-4">
            Many photos on Kudozz Club are published under Creative Commons licences
            on Wikimedia Commons. We&rsquo;re grateful to the photographers below.
            Each credit links to the original file and its licence terms.
          </p>
          <p className="mt-4 font-sans text-sm text-stone-500">{items.length} credited images.</p>
          <ul className="mt-8 divide-y divide-stone-200 border-y border-stone-200 font-sans text-sm">
            {items.map((c) => (
              <li key={c.path} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className="capitalize text-stone-900">{c.name}</span>
                <a
                  href={c.sourcePage}
                  rel="nofollow noopener"
                  target="_blank"
                  className="text-stone-600 underline decoration-stone-300 underline-offset-4 hover:text-forest-700 sm:text-right"
                >
                  {c.attribution}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
