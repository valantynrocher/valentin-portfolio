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
        background: "var(--bg-default)",
        paper: "var(--bg-paper)",
        accent: "var(--accent)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          button: "var(--text-button)", // Couleur spécifique pour le texte des boutons
        },
      },
      // Nous laissons les autres extensions (comme 'backgroundImage') ici pour le moment
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
