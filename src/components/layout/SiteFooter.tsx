import Link from "next/link";

const footerLinks = {
  Destinations: [
    { label: "Manali", href: "/blog/manali-travel-guide" },
    { label: "Spiti Valley", href: "/blog/spiti-valley-guide" },
    { label: "Leh Ladakh", href: "/blog/leh-ladakh-guide" },
    { label: "Rishikesh", href: "/blog/rishikesh-guide" },
    { label: "Coorg", href: "/blog/coorg-guide" },
  ],
  Itineraries: [
    { label: "7 Days in Manali", href: "/itineraries/manali-7-days" },
    { label: "Golden Triangle", href: "/itineraries/golden-triangle" },
    { label: "Kerala Backwaters", href: "/itineraries/kerala-backwaters" },
    { label: "Northeast India", href: "/itineraries/northeast-india" },
  ],
  Resources: [
    { label: "Travel Tips", href: "/travel-tips" },
    { label: "Packing Lists", href: "/packing-lists" },
    { label: "Budget Travel", href: "/budget-travel" },
    { label: "Visa Guides", href: "/visa-guides" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Write for Us", href: "/write-for-us" },
    // { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default function SiteFooter() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      {/* ── Newsletter Banner ───────────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-forest opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left copy */}
            <div className="text-center lg:text-left">
              <span
                className="inline-block text-white/60 text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Kudozz Club Newsletter
              </span>
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Never miss a travel story.
              </h2>
              <p
                className="text-white/70 text-sm max-w-sm"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Weekly guides, hidden gems & itineraries — straight to your
                inbox. Free forever.
              </p>
            </div>

            {/* Right form */}
            <form
              action="/api/newsletter"
              method="POST"
              className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 lg:min-w-[420px]"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/20 transition-all"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-white text-forest-700 font-semibold rounded-full text-sm hover:bg-stone-100 active:scale-95 transition-all whitespace-nowrap shadow-lg"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Join Free →
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Main Footer ─────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
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
                  className="text-forest-500 text-[9px] uppercase tracking-[0.18em] font-semibold"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  explore.kudozz.in
                </span>
              </div>
            </Link>

            <p
              className="text-stone-500 text-sm leading-relaxed mb-7 max-w-xs"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Honest travel guides, curated itineraries, and stories from the
              road — for curious explorers everywhere.
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
                  className="text-[9px] text-stone-600 uppercase tracking-widest font-medium mb-0.5"
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
                      className="text-stone-500 hover:text-stone-200 text-sm transition-colors duration-150 hover:translate-x-0.5 inline-block"
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
            className="text-stone-600 text-xs"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            © {new Date().getFullYear()} Kudozz Club · explore.kudozz.in · All
            rights reserved.
          </p>
          <p
            className="text-stone-500 text-sm"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Made with ♥ for travellers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
