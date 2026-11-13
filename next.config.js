/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Keep serverless functions small: never trace repo tooling, images or
  // build caches into them (Vercel caps functions at 250 MB uncompressed).
  experimental: {
    outputFileTracingExcludes: {
      "*": [".git/**", "scripts/**", "docs/**", "public/**", ".next/cache/**", ".env*"],
    },
  },

  // Images: Vercel's Image Optimization is off to stay inside the Hobby plan's
  // transformation quota. Source files in public/images are already WebP and
  // sized for the web, so <Image> serves them as-is (lazy loading still works).
  images: {
    unoptimized: true,
  },

  // Compression
  compress: true,

  // Power headers for SEO & security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        // Files in public/ default to "max-age=0, must-revalidate" on Vercel,
        // so every page view re-requests every image (each one a billed CDN
        // request). Browsers keep them for 30 days; the CDN keeps them until
        // the next deploy (Vercel purges its cache on every deployment).
        // Not "immutable": image files are sometimes replaced under the same name.
        source:
          "/:path(images/.*|logo\\.png|og-default\\.jpg|icon-192\\.png|apple-touch-icon\\.png|favicon\\.ico|site\\.webmanifest)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, s-maxage=31536000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  // Redirects for SEO (example: trailing slash canonicalization)
  async redirects() {
    return [
      {
        source: "/blog/",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
