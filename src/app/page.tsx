"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

// ── Data ──────────────────────────────────────────────────────────────────────

const featuredDestinations = [
  {
    slug: "manali-travel-guide",
    title: "Manali",
    subtitle: "Himachal Pradesh",
    description: "Snow-capped peaks, apple orchards & Himalayan adventure",
    image: "/images/destinations/manali/hero.jpg",
    tag: "Mountains",
    readTime: "16 min",
    color: "from-sky-900/80",
  },
  {
    slug: "spiti-valley-travel-guide",
    title: "Spiti Valley",
    subtitle: "Himachal Pradesh",
    description: "Cold desert monasteries & moonscape roads less travelled",
    image: "/images/destinations/spiti-valley/spiti-valley.jpg",
    tag: "Off-beat",
    readTime: "14 min",
    color: "from-amber-900/80",
  },
  {
    slug: "leh-ladakh-road-trip",
    title: "Leh Ladakh",
    subtitle: "Jammu & Kashmir",
    description: "World's highest passes & ancient Buddhist monasteries",
    image: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
    tag: "Road Trip",
    readTime: "18 min",
    color: "from-stone-900/80",
  },
  {
    slug: "rishikesh-adventure-guide",
    title: "Rishikesh",
    subtitle: "Uttarakhand",
    description: "Yoga, white-water rafting & Ganges sunsets",
    image: "/images/destinations/rishikesh/rishikesh.jpg",
    tag: "Adventure",
    readTime: "12 min",
    color: "from-forest-900/80",
  },
];

const categories = [
  {
    label: "Mountains",
    icon: "🏔️",
    count: 24,
    href: "/destinations?type=mountains",
  },
  {
    label: "Beaches",
    icon: "🏖️",
    count: 18,
    href: "/destinations?type=beaches",
  },
  {
    label: "Heritage",
    icon: "🏛️",
    count: 31,
    href: "/destinations?type=heritage",
  },
  {
    label: "Adventure",
    icon: "🧗",
    count: 15,
    href: "/destinations?type=adventure",
  },
  {
    label: "Wildlife",
    icon: "🐅",
    count: 12,
    href: "/destinations?type=wildlife",
  },
  {
    label: "Road Trips",
    icon: "🚗",
    count: 20,
    href: "/destinations?type=road-trips",
  },
];

const recentPosts = [
  {
    slug: "spiti-valley-travel-guide",
    title: "Spiti Valley: The Complete Travel Guide 2026",
    excerpt:
      "A remote high-altitude desert in Himachal Pradesh — monasteries, fossils, and jaw-dropping roads.",
    image: "/images/destinations/spiti-valley/spiti-valley.jpg",
    category: "Himachal Pradesh",
    readTime: "14 min",
  },
  {
    slug: "leh-ladakh-road-trip",
    title: "Leh Ladakh Road Trip: Everything You Need to Know",
    excerpt:
      "Moonscapes, Buddhist monasteries, and the world's highest motorable passes await.",
    image: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
    category: "Ladakh",
    readTime: "18 min",
  },
  {
    slug: "rishikesh-adventure-guide",
    title: "Rishikesh Adventure Guide: Rafting, Yoga & More",
    excerpt:
      "The yoga capital of the world is also India's adventure hub — rafting, bungee, and beyond.",
    image: "/images/destinations/rishikesh/rishikesh.jpg",
    category: "Uttarakhand",
    readTime: "12 min",
  },
];

const stats = [
  { value: "120+", label: "Destinations" },
  { value: "350+", label: "Travel Guides" },
  { value: "12K+", label: "Club Members" },
  { value: "4.9★", label: "Avg. Rating" },
];

const heroSlides = [
  {
    image: "/images/destinations/manali/hero.jpg",
    location: "Manali, Himachal Pradesh",
    tagline: "Where the mountains call",
  },
  {
    image: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
    location: "Leh Ladakh, J&K",
    tagline: "Beyond the highest passes",
  },
  {
    image: "/images/destinations/spiti-valley/spiti-valley.jpg",
    location: "Spiti Valley, Himachal Pradesh",
    tagline: "Roads less travelled",
  },
];

// ── Hooks ─────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Sub-components ────────────────────────────────────────────────────────────

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Auto-advance hero
  useEffect(() => {
    const t = setInterval(
      () => setHeroSlide((s) => (s + 1) % heroSlides.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const current = heroSlides[heroSlide];

  return (
    <>
      <SiteHeader />

      <main className="overflow-x-hidden">
        {/* ══════════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          {/* Slides */}
          {heroSlides.map((slide, i) => (
            <div
              key={slide.image}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: i === heroSlide ? 1 : 0 }}
            >
              <img
                src={slide.image}
                alt={slide.location}
                className="w-full h-full object-cover scale-105"
                style={{
                  transform: i === heroSlide ? "scale(1.05)" : "scale(1)",
                  transition: "transform 6s ease-out",
                }}
              />
            </div>
          ))}

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

          {/* Slide dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroSlide(i)}
                className={`rounded-full transition-all duration-300 ${i === heroSlide ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/60"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Location badge */}
          <div className="absolute top-28 right-6 sm:right-10 z-20">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-700 ${heroLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              style={{ transitionDelay: "600ms" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-forest-400 animate-pulse" />
              <span
                className="text-white text-xs font-medium"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {current.location}
              </span>
            </div>
          </div>

          {/* Hero content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-24 pb-32 w-full">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <div
                className={`flex items-center gap-3 mb-6 transition-all duration-700 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="h-px w-10 bg-forest-400" />
                <span
                  className="text-forest-300 text-xs font-bold uppercase tracking-[0.25em]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Kudozz Club
                </span>
              </div>

              {/* Headline */}
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 transition-all duration-700 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  fontFamily: "var(--font-playfair)",
                  transitionDelay: "300ms",
                }}
              >
                {current.tagline.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={i % 3 === 2 ? "text-forest-300" : ""}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>

              {/* Subtext */}
              <p
                className={`text-lg text-white/70 max-w-xl mb-10 leading-relaxed transition-all duration-700 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  fontFamily: "var(--font-source-serif)",
                  transitionDelay: "400ms",
                }}
              >
                Hand-crafted travel guides, honest itineraries, and hidden gems
                — for explorers who want more than a tourist map.
              </p>

              {/* Search bar */}
              <div
                className={`transition-all duration-700 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-2 max-w-lg hover:bg-white/15 hover:border-white/35 transition-all duration-200 focus-within:bg-white/15 focus-within:border-white/40 focus-within:ring-2 focus-within:ring-white/20">
                  <svg
                    className="w-5 h-5 text-white/50 ml-3 flex-shrink-0"
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
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search destinations, guides, tips..."
                    className="flex-1 bg-transparent px-4 py-2.5 text-white placeholder:text-white/40 text-sm focus:outline-none"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                  <Link
                    href={`/search?q=${searchQuery}`}
                    className="px-5 py-2.5 gradient-forest text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Explore →
                  </Link>
                </div>

                {/* Quick links */}
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <span
                    className="text-white/40 text-xs"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Popular:
                  </span>
                  {["Manali", "Ladakh", "Spiti", "Rishikesh", "Coorg"].map(
                    (place) => (
                      <Link
                        key={place}
                        href={`/search?q=${place}`}
                        className="px-3 py-1 text-xs text-white/70 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full transition-all hover:text-white"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {place}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 right-10 z-20 hidden sm:flex flex-col items-center gap-2">
            <div className="w-px h-14 bg-gradient-to-b from-transparent to-white/40" />
            <span
              className="text-white/40 text-[10px] uppercase tracking-widest rotate-90 origin-center mt-2"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Scroll
            </span>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            STATS BAR
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-stone-950 border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-800">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 80}>
                  <div className="py-8 px-6 text-center">
                    <div
                      className="text-3xl font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-stone-500 text-xs uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            FEATURED DESTINATIONS
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-stone-50 py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            {/* Section header */}
            <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-forest-500" />
                  <span
                    className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Hand-picked
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-stone-900"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Featured Destinations
                </h2>
              </div>
              <Link
                href="/destinations"
                className="flex items-center gap-1.5 text-sm font-medium text-forest-600 hover:text-forest-800 transition-colors group"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                All destinations
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
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
            </AnimatedSection>

            {/* Bento-style grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[280px]">
              {featuredDestinations.map((dest, i) => (
                <AnimatedSection
                  key={dest.slug}
                  delay={i * 100}
                  className={i === 0 ? "lg:row-span-2 lg:col-span-1" : ""}
                >
                  <Link
                    href={`/blog/${dest.slug}`}
                    className="group relative flex flex-col justify-end overflow-hidden rounded-2xl h-full bg-stone-800 shadow-md hover:shadow-xl transition-all duration-500"
                  >
                    {/* Image */}
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${dest.color} via-transparent to-transparent opacity-90 group-hover:opacity-95 transition-opacity`}
                    />

                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/15 backdrop-blur-sm border border-white/20 text-white rounded-full"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {dest.tag}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H7M17 7v10"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6">
                      <p
                        className="text-white/60 text-xs font-medium mb-1"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {dest.subtitle}
                      </p>
                      <h3
                        className="text-white font-bold mb-1.5 group-hover:text-forest-200 transition-colors"
                        style={{
                          fontFamily: "var(--font-playfair)",
                          fontSize: i === 0 ? "1.75rem" : "1.25rem",
                        }}
                      >
                        {dest.title}
                      </h3>
                      <p
                        className="text-white/65 text-sm leading-snug"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {dest.description}
                      </p>
                      <div className="flex items-center gap-1.5 mt-3">
                        <svg
                          className="w-3.5 h-3.5 text-white/40"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span
                          className="text-white/40 text-xs"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {dest.readTime} read
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            EXPLORE BY CATEGORY
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <AnimatedSection className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-forest-500" />
                <span
                  className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Browse
                </span>
                <div className="h-px w-8 bg-forest-500" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Explore by Category
              </h2>
              <p
                className="text-stone-500 mt-3 max-w-md mx-auto text-sm"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Whether you're chasing peaks or beaches, we've got a guide for
                every kind of explorer.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat, i) => (
                <AnimatedSection key={cat.label} delay={i * 60}>
                  <Link
                    href={cat.href}
                    className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-forest-300 hover:bg-forest-50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center"
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {cat.icon}
                    </span>
                    <div>
                      <div
                        className="font-semibold text-stone-800 text-sm group-hover:text-forest-700 transition-colors"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {cat.label}
                      </div>
                      <div
                        className="text-stone-400 text-xs mt-0.5"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {cat.count} guides
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            LATEST GUIDES
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-stone-50 py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-forest-500" />
                  <span
                    className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Fresh picks
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-stone-900"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Latest Travel Guides
                </h2>
              </div>
              <Link
                href="/blog"
                className="flex items-center gap-1.5 text-sm font-medium text-forest-600 hover:text-forest-800 transition-colors group"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                View all guides
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
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
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {recentPosts.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 120}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-forest-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden bg-stone-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span
                        className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/90 text-stone-700 rounded-full shadow-sm"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {post.category}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <h3
                        className="font-bold text-stone-900 mb-2 leading-snug group-hover:text-forest-700 transition-colors line-clamp-2"
                        style={{
                          fontFamily: "var(--font-playfair)",
                          fontSize: "1.05rem",
                        }}
                      >
                        {post.title}
                      </h3>
                      <p
                        className="text-stone-500 text-sm leading-relaxed line-clamp-2 flex-1 mb-4"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className="flex items-center gap-1.5 text-xs text-stone-400"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {post.readTime} read
                        </span>
                        <span
                          className="text-xs font-semibold text-forest-600 flex items-center gap-1 group-hover:gap-1.5 transition-all"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          Read guide
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            FULL-WIDTH CTA BANNER
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-28">
          {/* BG image */}
          <img
            src="/images/destinations/manali/rohtang-pass.jpg"
            alt="Mountain landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/75 to-stone-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />

          {/* Floating decorative rings */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/5 hidden lg:block" />
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/8 hidden lg:block" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
            <AnimatedSection className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-forest-400" />
                <span
                  className="text-forest-300 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Join the Club
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Your next adventure
                <br />
                starts <span className="text-forest-300">right here.</span>
              </h2>
              <p
                className="text-white/65 text-lg mb-10 leading-relaxed max-w-lg"
                style={{ fontFamily: "var(--font-source-serif)" }}
              >
                12,000+ explorers get our weekly travel guide drops, exclusive
                itineraries, and hidden gems — all free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/newsletter"
                  className="flex items-center justify-center gap-2 px-7 py-4 gradient-forest text-white font-semibold rounded-full hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-forest-900/40 text-sm"
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
                  Join Free — No Spam
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center justify-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/15 transition-all text-sm"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Browse All Guides →
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
