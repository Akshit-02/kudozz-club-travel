import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-source-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        forest: {
          50: "#f0f7f0",
          100: "#dceedd",
          200: "#baddbe",
          300: "#8ec490",
          400: "#5fa462",
          500: "#3d8640",
          600: "#2d6b30",
          700: "#255528",
          800: "#204522",
          900: "#1b391d",
          950: "#0d1f0f",
        },
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#292524",
            lineHeight: "1.8",
            "h2, h3, h4": {
              fontFamily: "var(--font-playfair)",
              fontWeight: "700",
              color: "#1c1917",
            },
            a: {
              color: "#2d6b30",
              textDecoration: "underline",
              "&:hover": {
                color: "#255528",
              },
            },
            blockquote: {
              borderLeftColor: "#3d8640",
              borderLeftWidth: "4px",
              fontStyle: "italic",
              backgroundColor: "#f0f7f0",
              padding: "1rem 1.5rem",
              borderRadius: "0 0.5rem 0.5rem 0",
            },
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-right": "slideRight 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
