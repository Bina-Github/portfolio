import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
        tall: { raw: "(min-height: 1100px)" },
        shorter: { raw: "(min-height: 900px) and (max-height: 1099px)" },
        wide: "2060px",
      },
    },
  },
  plugins: [],
};
export default config;
