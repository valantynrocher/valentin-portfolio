import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

// Configuration de la police par défaut (Inter)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk", // Variable pour 'Tech'
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair", // Variable pour 'Explore'
});

export const metadata: Metadata = {
  title: "Valentin Rocher - Concepteur & Développeur d'applications web",
  description:
    "Portfolio de Valentin Rocher, développeur et concepteur d'applications web et voyageur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* On applique juste la variable --font-inter.
        La classe "font-sans" sera appliquée par défaut par Tailwind v4 
        grâce à notre @theme dans globals.css
      */}
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
