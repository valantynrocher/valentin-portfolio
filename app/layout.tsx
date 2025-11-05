import type { Metadata } from "next";
import { Inter, Major_Mono_Display, Chelsea_Market } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const techFont = Major_Mono_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tech",
  weight: "400",
});

const exploreFont = Chelsea_Market({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-explore",
  weight: "400",
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
    <html lang="fr" className="h-full overflow-hidden">
      <body
        className={`${inter.variable} ${techFont.variable} ${exploreFont.variable} h-full overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
