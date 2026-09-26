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
        // Cache static assets aggressively
        source: "/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
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
