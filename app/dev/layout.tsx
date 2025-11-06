import Logo from "@/components/layout/Logo";
import Link from "next/link";
import React from "react";
import { MdHome } from "react-icons/md";
import "../globals.css";
import SocialLinks from "@/components/layout/SocialLinks";

const DevLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen w-full overflow-auto scroll-smooth fixed theme-tech bg-gradient-to-b from-[var(--bg-paper)] from-15% to-[var(--bg-default)]">
      <header className="header absolute left-0 top-0 w-full flex">
        <div className="flex w-full px-14 lg:px-10 xl:px-20 justify-between items-center">
          <div className="relative max-w-[250px]">
            <Link href="/" className="font-button">
              <Logo />
            </Link>
          </div>
          <nav aria-label="Navigation principale">
            <ul className="flex items-center gap-[15px] lg:gap-[30px] text-center text-secondary text-lg font-button">
              <li>
                {/* Étape 4 : Lien vers la page d'accueil (racine) */}
                <Link href="/" className="hover:text-accent">
                  <MdHome />
                </Link>
              </li>

              {/* Étape 5 : Liens vers les ancres de la page /dev */}
              <li>
                <Link href="#presentation" className="hover:text-accent">
                  à propos
                </Link>
              </li>
              <li>
                <Link href="#experiences" className="hover:text-accent">
                  expériences
                </Link>
              </li>
              <li>
                <Link href="#projets" className="hover:text-accent">
                  projets
                </Link>
              </li>
              <li>
                <Link href="#competences" className="hover:text-accent">
                  stack
                </Link>
              </li>
            </ul>
          </nav>
          <SocialLinks />
        </div>
      </header>
      {children}
      <footer className="pt-14 lg:pt-[130px]">
        <div className="px-10">
          <p className="w-full text-center text-sm text-[var(--bg-paper)]">
            © 2025 Valentin Rocher. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DevLayout;
