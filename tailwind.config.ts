import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FCC737",
        orange: "#F26B0F",
        pink: "#E73879",
        purple: "#7E1891"
      },
    },
  },
  plugins: [],
} satisfies Config;
