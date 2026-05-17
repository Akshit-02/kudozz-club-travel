import type { Metadata } from "next";
import "./globals.css";

// ── Site-wide default metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://explore.kudozz.in"),

  title: {
    default: "Kudozz Club — Travel Guides & Itineraries",
    template: "%s | Kudozz Club",
  },
  description:
    "Discover the world's most breathtaking destinations with hand-crafted travel guides, hidden gems, detailed itineraries, and insider tips from seasoned explorers.",

  keywords: [
    "travel blog",
    "travel guide",
    "travel itinerary",
    "best places to visit",
    "India travel",
    "Manali",
    "Himalayan travel",
    "solo travel",
    "adventure travel",
  ],

  creator: "Kudozz Club",
  publisher: "Kudozz Club",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://explore.kudozz.in",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Kudozz Club — Travel Blog",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    site: "@kudozz.in",
    creator: "@kudozz.in",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification tags (add your values)
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_TOKEN",
    // bing: 'YOUR_BING_VERIFICATION_TOKEN',
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Manifest for PWA
  manifest: "/site.webmanifest",

  // Canonical URL handled per-page via generateMetadata
  alternates: {
    canonical: "https://explore.kudozz.in",
    languages: {
      "en-IN": "https://explore.kudozz.in",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* JSON-LD: Organisation schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kudozz Club",
              url: "https://explore.kudozz.in",
              logo: "https://explore.kudozz.in/logo.png",
              sameAs: [
                "https://twitter.com/kudozz.in",
                "https://instagram.com/kudozz.in",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-stone-50 antialiased">{children}</body>
    </html>
  );
}
