import Link from "next/link";
import React from "react";

const DevLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen w-full overflow-auto fixed theme-tech bg-gradient-to-b from-[var(--bg-paper)] from-15% to-[var(--bg-default)]">
      <header>
        <nav aria-label="Navigation principale">
          <ul>
            <li>
              {/* Étape 4 : Lien vers la page d'accueil (racine) */}
              <Link href="/">Retour à l&apos;accueil</Link>
            </li>

            {/* Étape 5 : Liens vers les ancres de la page /dev */}
            <li>
              <Link href="#presentation">A propos</Link>
            </li>
            <li>
              <Link href="#projets">Mon travail</Link>
            </li>
            <li>
              <Link href="#competences">Mes compétences</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2025 Valentin Rocher. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default DevLayout;
