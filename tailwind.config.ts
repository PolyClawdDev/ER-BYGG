import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0B0B",
        charcoal: "#1A1A1A",
        brand: "#11B8B7",
        "brand-deep": "#158B90",
        steel: "#5E636B",
      },
      boxShadow: {
        soft: "0 20px 70px rgba(0,0,0,0.35)",
        glass: "0 8px 30px rgba(0,0,0,0.2)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top right, rgba(17,184,183,0.32) 0%, rgba(12,85,89,0.35) 32%, rgba(11,11,11,0.95) 58%, rgba(11,11,11,1) 100%)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
