import Header from "@/app/dev/Header";
import React from "react";
import "../globals.css";

const DevLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen w-full overflow-auto scroll-smooth fixed theme-tech bg-gradient-to-b from-[var(--bg-paper)] from-15% to-[var(--bg-default)]">
      <Header />
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
