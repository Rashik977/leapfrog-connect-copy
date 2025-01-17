import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Instrument Sans", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
      },
      fontSize: {
        xs: "0.5rem", // 8px
        sm: "0.875rem", // 14px
        regular: "1rem", // 16px
        base: "1.125rem", // 18px
        lg: "1.5rem", // 24px
        "2xl": "2rem", // 32px
        "3xl": "3rem", // 48px
        "6xl": "5.75rem", // 92px
      },
      colors: {
        gray: "#CACACA",
        green: {
          100: "#9bef6b",
          200: "#61F19B",
          300: "#1C3A13",
          400: "#041E0A",
        },
      },
      backgroundColor: {
        dark: {
          green: "#0c1f0a",
        },
      },
      fontWeight: {
        light: "200",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      lineHeight: {
        100: "1.068rem", // 17.08px
        150: "1.469rem", // 23.5px
        200: "1.75rem", // 28px
        250: "1.95rem", // 31.2px
        300: "2.44rem", // 39.04px
        350: "2.6rem", // 41.6px
        400: "3.9rem", // 62.4px
        500: "7.475rem", // 119.6px
      },
      animation: {
        bounce: "bounce 0.3s ease-out", // Duration and easing for the bounce
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "scale(0.9)", // Normal scale
          },
          "50%": {
            transform: "scale(1.1)", // Slightly larger for the bounce effect
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
