import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
      displayTech: ["var(--font-space-grotesk)", "sans-serif"],
      displayExplore: ["var(--font-playfair)", "serif"],
    },
    extend: {
      colors: {
        background: "var(--bg-default)",
        paper: "var(--bg-paper)",
        accent: "var(--accent)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          button: "var(--text-button)", // Couleur spécifique pour le texte des boutons
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
