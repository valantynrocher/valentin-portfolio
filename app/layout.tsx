import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

// Configuration de la police par défaut (Inter)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Configuration de la police "Tech" (Space Grotesk)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

// Configuration de la police "Explore" (Playfair Display)
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
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
      <body
        className={`${inter.className} ${spaceGrotesk.variable} ${playfair.variable}`}
      >
        {" "}
        {children}
      </body>
    </html>
  );
}
