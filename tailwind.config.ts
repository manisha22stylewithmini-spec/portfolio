import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        emerald: {
          300: "#3385d1",
          400: "#0066BC", // Main highlight
          500: "#00559e", // Hover / darker highlight
          600: "#004480",
          900: "#002240"
        }
      },
    },
  },
  plugins: [],
};
export default config;
