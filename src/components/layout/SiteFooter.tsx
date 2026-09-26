import Link from "@/components/ui/Link";
import NewsletterFooterForm from "./NewsletterFooterForm";
import { guideCountLabel, stateCount } from "@/lib/site";

const footerLinks = {
  "Tour Packages": [
    { label: "All Tour Packages", href: "/packages" },
    { label: "Kashmir Packages", href: "/packages/kashmir" },
    { label: "Rajasthan Packages", href: "/packages/rajasthan" },
    { label: "Kerala Packages", href: "/packages/kerala" },
    { label: "Goa Packages", href: "/packages/goa" },
    { label: "Himachal Packages", href: "/packages/himachal-pradesh" },
    { label: "Golden Triangle", href: "/packages/golden-triangle" },
  ],
  "Travel Styles": [
    { label: "Family Holidays", href: "/packages/family-holidays" },
    { label: "Honeymoon", href: "/packages/honeymoon" },
    { label: "Luxury Holidays", href: "/packages/luxury-holidays" },
    { label: "Weekend Getaways", href: "/packages/weekend-getaways" },
    { label: "Char Dham Yatra", href: "/packages/char-dham-yatra" },
  ],
  Explore: [
    { label: "All Destinations", href: "/destinations" },
    { label: "Travel Guides", href: "/blog" },
    { label: "Adventure Travel", href: "/adventure-travel" },
    { label: "Beach Travel", href: "/beach-travel" },
    { label: "Wildlife Tourism", href: "/wildlife-tourism" },
    { label: "Spiritual Tourism", href: "/spiritual-tourism" },
    { label: "Heritage & Culture", href: "/heritage-cultural-tourism" },
    { label: "Hill Stations", href: "/hill-station-travel" },
    { label: "Rajasthan Travel Guide", href: "/blog/rajasthan-travel-guide" },
    { label: "Kashmir Travel Guide", href: "/blog/jammu-kashmir-travel-guide" },
    { label: "Ladakh Road Trip Guide", href: "/blog/leh-ladakh-road-trip-travel-guide" },
  ],
  Company: [
    { label: "Plan Your Trip", href: "/plan-your-trip" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "Write for Us", href: "/write-for-us" },
    { label: "Image Credits", href: "/image-credits" },
  ],
};

export default function SiteFooter() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      {/* ── Newsletter: secondary conversion for visitors not ready to enquire ── */}
      <div className="border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-xl font-bold text-white">
                Not ready to plan yet?
              </h2>
              <p className="mt-1 font-sans text-sm text-stone-400 max-w-md">
                Get new India travel guides and seasonal trip ideas by email.
              </p>
            </div>
            <NewsletterFooterForm />
          </div>
        </div>
      </div>

      {/* ── Main Footer ─────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10">
          {/* Brand column — spans 2 on large */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-5 group w-fit"
            >
              <div className="w-8 h-8 rounded-lg gradient-forest flex items-center justify-center shadow-md group-hover:shadow-forest-500/30 transition-shadow">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-white font-bold text-base tracking-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Kudozz Club
                </span>
                <span
                  className="text-forest-300 text-[9px] uppercase tracking-[0.18em] font-semibold"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  India Travel Agency
                </span>
              </div>
            </Link>

            <p
              className="text-stone-400 text-sm leading-relaxed mb-7 max-w-xs"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              An India-focused travel agency planning customized trips across
              all {stateCount} states and union territories, backed by{" "}
              {guideCountLabel} in-depth destination guides.
            </p>

            {/* Email contact */}
            <a
              href="mailto:connect@kudozz.in"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-forest-600/50 hover:bg-stone-800 transition-all duration-200 group w-fit"
            >
              <div className="w-7 h-7 rounded-lg gradient-forest flex items-center justify-center flex-shrink-0 group-hover:shadow-md group-hover:shadow-forest-900/40 transition-shadow">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-[9px] text-stone-400 uppercase tracking-widest font-medium mb-0.5"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Get in touch
                </span>
                <span
                  className="text-sm text-stone-300 group-hover:text-forest-400 transition-colors font-medium"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  connect@kudozz.in
                </span>
              </div>
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="col-span-1">
              <h3
                className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-5"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-stone-400 hover:text-stone-100 text-sm transition-colors duration-150 hover:translate-x-0.5 inline-block"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />
      </div>

      {/* ── Bottom Bar ──────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-stone-400 text-xs"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            © {new Date().getFullYear()} Kudozz Club · club.kudozz.in · All
            rights reserved.
          </p>
          <Link
            href="/plan-your-trip"
            className="text-saffron-300 hover:text-saffron-100 text-sm font-semibold"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Plan your India trip →
          </Link>
        </div>
      </div>
    </footer>
  );
}
