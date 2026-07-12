"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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

export default function HomeHero() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const t = setInterval(
      () => setHeroSlide((s) => (s + 1) % heroSlides.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const current = heroSlides[heroSlide];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.image}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === heroSlide ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={`${slide.location} — ${slide.tagline}`}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover scale-105"
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
              <span key={i} className={i % 3 === 2 ? "text-forest-300" : ""}>
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
            Hand-crafted travel guides, honest itineraries, and hidden gems —
            for explorers who want more than a tourist map.
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
  );
}
