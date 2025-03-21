
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cyberpunk theme colors
        cyber: {
          black: "#0F1114",
          dark: "#161A1D",
          blue: "#0EA5E9",
          purple: "#8B5CF6",
          pink: "#D946EF",
          teal: "#14B8A6",
          yellow: "#FFD60A",
          red: "#EF4444",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.cyber.blue'), 0 0 20px theme('colors.cyber.blue')",
        "neon-purple": "0 0 5px theme('colors.cyber.purple'), 0 0 20px theme('colors.cyber.purple')",
        "neon-pink": "0 0 5px theme('colors.cyber.pink'), 0 0 20px theme('colors.cyber.pink')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            opacity: "1",
            filter: "brightness(1)" 
          },
          "50%": { 
            opacity: "0.8", 
            filter: "brightness(1.2)" 
          },
        },
        "float": {
          "0%, 100%": { 
            transform: "translateY(0)" 
          },
          "50%": { 
            transform: "translateY(-10px)" 
          },
        },
        "rotate-slow": {
          "0%": { 
            transform: "rotate(0deg)" 
          },
          "100%": { 
            transform: "rotate(360deg)" 
          },
        },
        "grid-line": {
          "0%": { 
            backgroundPosition: "0 0" 
          },
          "100%": { 
            backgroundPosition: "100% 100%" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-out": "fade-out 0.5s ease-out forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "rotate-slow": "rotate-slow 30s linear infinite",
        "grid-line": "grid-line 15s linear infinite",
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(to right, rgba(14, 165, 233, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(14, 165, 233, 0.15) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
