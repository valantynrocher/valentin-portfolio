// ./tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // OBJET VIDE !
    // La V4 gère le thème dans globals.css
  },
  plugins: [],
};
export default config;
