import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1200px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cBlack: "var(--cBlack)",
        cGray: "var(--cGray)",
        cYellow: "var(--cYellow)",
        cPurple: "var(--cPurple)",
        cWhite: "var(--cWhite)",
        cDark: "var(--cDark)",
      },
      screens: {
        tall: { raw: "(min-height: 1100px) and (min-width: 1200px)" },
        shorter: {
          raw: "(min-height: 900px) and (max-height: 1099px) and (min-width: 1200px)",
        },
        short: {
          raw: "(max-height: 899px) and (min-width: 1200px)",
        },
        wide: "2060px",
      },
    },
  },
  plugins: [],
};
export default config;
