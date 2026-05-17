"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Itineraries", href: "/itineraries" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-[0_1px_24px_0_rgba(0,0,0,0.08)] border-b border-stone-200/80"
            : "bg-gradient-to-b from-black/55 to-transparent"
        }`}
      >
        {/* Top accent line — always visible */}
        <div className="h-[2.5px] w-full bg-gradient-to-r from-forest-600 via-forest-400 to-amber-400" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div
            className="flex items-center justify-between h-15 lg:h-18"
            style={{
              height: scrolled ? "64px" : "72px",
              transition: "height 0.4s",
            }}
          >
            {/* ── Logo ─────────────────────────────────────── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group flex-shrink-0"
            >
              {/* Icon mark */}
              <div className="relative w-8 h-8 flex-shrink-0">
                <div className="w-8 h-8 rounded-lg gradient-forest flex items-center justify-center shadow-md group-hover:shadow-forest-400/40 transition-shadow duration-300">
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
              </div>
              {/* Wordmark */}
              <div className="flex flex-col leading-none">
                <span
                  className={`font-bold text-[1.15rem] tracking-tight transition-colors duration-300 ${
                    scrolled ? "text-stone-900" : "text-white drop-shadow-sm"
                  }`}
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Kudozz Club
                </span>
                <span
                  className={`text-[9px] uppercase tracking-[0.18em] font-semibold transition-colors duration-300 ${
                    scrolled ? "text-forest-600" : "text-white/60"
                  }`}
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  explore.kudozz.in
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ───────────────────────────────── */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-lg transition-all duration-200 group ${
                    scrolled
                      ? "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {link.label}
                  {/* Underline indicator */}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[1.5px] w-0 group-hover:w-4 rounded-full transition-all duration-300 ${
                      scrolled ? "bg-forest-500" : "bg-white/70"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* ── Right Actions ─────────────────────────────── */}
            <div className="hidden md:flex items-center gap-3">
              {/* Search */}
              <button
                aria-label="Search"
                className={`p-2 rounded-lg transition-all duration-200 ${
                  scrolled
                    ? "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <svg
                  className="w-4.5 h-4.5 w-[18px] h-[18px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Divider */}
              <div
                className={`w-px h-5 ${scrolled ? "bg-stone-200" : "bg-white/20"}`}
              />

              {/* CTA */}
              <Link
                href="/newsletter"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white gradient-forest rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 shadow-md shadow-forest-900/20 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Join Club
              </Link>
            </div>

            {/* ── Mobile Hamburger ──────────────────────────── */}
            <button
              className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
                scrolled
                  ? "text-stone-700 hover:bg-stone-100"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ───────────────────────────── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Slide-in drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md gradient-forest flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-white"
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
            <span
              className="font-bold text-stone-900 text-sm"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Kudozz Club
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-stone-700 hover:text-forest-700 hover:bg-forest-50 transition-all duration-150 group mb-1"
              style={{
                fontFamily: "var(--font-dm-sans)",
                animationDelay: `${i * 50}ms`,
              }}
            >
              <span className="font-medium">{link.label}</span>
              <svg
                className="w-4 h-4 text-stone-300 group-hover:text-forest-500 group-hover:translate-x-0.5 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ))}
        </nav>

        {/* Drawer footer CTA */}
        <div className="px-5 py-5 border-t border-stone-100 space-y-3">
          <Link
            href="/newsletter"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white gradient-forest rounded-xl hover:opacity-90 transition-opacity"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <svg
              className="w-4 h-4"
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
            Join the Club — It's Free
          </Link>
          <p
            className="text-center text-xs text-stone-400"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            12,000+ explorers already joined
          </p>
        </div>
      </div>
    </>
  );
}
