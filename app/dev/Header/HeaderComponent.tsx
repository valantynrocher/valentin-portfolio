"use client";
import Logo from "@/components/layout/Logo";
import SocialLinks from "@/components/layout/SocialLinks";
import Link from "next/link";
import { useState } from "react";
import { MdHome, MdMenu, MdClose } from "react-icons/md";
import NavigationItem, { NavigationItemProps } from "./NavigationItem";
import Button from "@/components/ui/Button";

const HeaderComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMobileMenuClick = () => {
    console.log("Header > handleMobileMenuClick clicked !");

    setMenuOpen((prev) => !prev);
  };

  const handleMobileMenuClose = () => {
    setMenuOpen(false);
  };

  const navigationItems: NavigationItemProps[] = [
    { href: "/", children: <MdHome /> },
    { href: "#presentation", children: "à propos" },
    { href: "#experiences", children: "expériences" },
    { href: "#projets", children: "projets" },
    { href: "#competences", children: "stack" },
  ];

  return (
    <>
      <header className="header absolute left-0 top-0 w-full flex z-20">
        <div className="flex w-full px-14 lg:px-10 xl:px-20 justify-between items-center">
          <div className="relative max-w-[250px]">
            <Link href="/" className="font-button">
              <Logo />
            </Link>
          </div>
          <nav className="hidden md:block" aria-label="Navigation principale">
            <ul className="flex items-center gap-[15px] lg:gap-[30px] text-center text-secondary text-lg font-button">
              {navigationItems.map((itemProps) => (
                <NavigationItem key={itemProps.href} {...itemProps} />
              ))}
            </ul>
          </nav>
          <SocialLinks
            classes={{
              root: "hidden md:flex",
            }}
          />
          <div className="md:hidden">
            <Button
              variant="outlined"
              onClick={handleMobileMenuClick}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              className="p-2!"
            >
              <MdMenu size={26} />
            </Button>
          </div>
        </div>
      </header>
      {isMenuOpen ? (
        <div
          className="md:hidden fixed inset-0 bg-paper z-50 p-8 flex flex-col justify-center"
          aria-hidden={!isMenuOpen}
        >
          <div className="flex justify-end mb-8">
            <Button
              variant="outlined"
              onClick={handleMobileMenuClose} // Action : fermer le menu
              aria-label="Fermer le menu"
              className="p-2!"
            >
              <MdClose size={26} />
            </Button>
          </div>
          <nav aria-label="Navigation mobile">
            <ul className="flex flex-col items-center gap-6 text-center text-secondary text-2xl font-button">
              {/* On recrée les liens ici, mais en 'flex-col' */}
              {navigationItems.map((itemProps) => (
                <NavigationItem
                  key={itemProps.href}
                  {...itemProps}
                  onClick={handleMobileMenuClose}
                />
              ))}
            </ul>
          </nav>

          {/* Ligne de séparation */}
          <hr className="my-14 border-secondary/20" />

          {/* Social Links pour le mobile, en bas de l'overlay */}
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HeaderComponent;
