import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lavenderPurple: "#b983e5",
        lightBlue: "#5ccfe6"
      },
      fontFamily: { sans: ['Reddit Sans', 'sans-serif'], mystery: ['Mystery Quest', 'cursive'], },
    },
  },
  plugins: [],
} satisfies Config;
