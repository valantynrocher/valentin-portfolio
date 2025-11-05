"use client";
import { Popup } from "@/components/Popup";
import valentinPortrait from "@/public/valentin-portrait.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdHandshake, MdOutlineExplore } from "react-icons/md";

const Logo = ({ className = "" }: { className?: string }) => (
  <h2
    className={
      className + " text-2xl lg:text-3xl font-title text-[var(--bg-default)]"
    }
  >
    <span className="font-bold">V</span>alentin
    <br />
    <span className="font-bold">R</span>ocher
  </h2>
);

const ExternalLinks = (props: {
  classes?: {
    root?: string;
    link?: string;
    icon?: string;
  };
}) => {
  const classes = {
    root: props.classes?.root || "",
    icon: props.classes?.icon || "",
    link: props.classes?.link || "",
  };
  return (
    <div className={classes.root + " flex gap-[15px] lg:gap-[30px]"}>
      <a
        href="https://www.linkedin.com/in/valentin-rocher/"
        target="_blank"
        className={
          classes.link +
          " pointer-events-auto flex h-6 w-6 items-center justify-center bg-[var(--bg-default)] lg:h-8 lg:w-8"
        }
      >
        <FaLinkedin
          size={16}
          className={
            classes.icon + " lg:size-[20px] text-[var(--text-primary)]"
          }
        />
      </a>
      <a
        href="https://github.com/valantynrocher"
        target="_blank"
        className={
          classes.link +
          " pointer-events-auto flex h-6 w-6 items-center justify-center bg-[var(--bg-default)] lg:h-8 lg:w-8"
        }
      >
        <FaGithub
          size={16}
          className={
            classes.icon + " lg:size-[20px] text-[var(--text-primary)]"
          }
        />
      </a>
      <a
        href="mailto:valentinrocher@mailo.com"
        className={
          classes.link +
          " pointer-events-auto flex h-6 w-6 items-center justify-center bg-[var(--bg-default)] lg:h-8 lg:w-8"
        }
      >
        <MdEmail
          size={16}
          className={
            classes.icon + " lg:size-[20px] text-[var(--text-primary)]"
          }
        />
      </a>
    </div>
  );
};

const Home = () => {
  const [theme, setTheme] = useState("tech");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const width = scrollContainerRef.current.offsetWidth;
        setTheme(scrollLeft < width / 2 ? "tech" : "explore");
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = (message: string) => {
    setPopupMessage(message);
  };

  const handleClosePopup = () => {
    setPopupMessage(null);
  };

  return (
    <div
      className={`relative h-screen ${
        theme === "tech" ? "theme-tech" : "theme-explore"
      }`}
    >
      {/* Fixed Overlay */}
      <div className="lg:hidden pointer-events-none absolute inset-0 z-20 flex flex-col p-14 pb-30">
        <div className="flex w-full items-center justify-between">
          <Logo />
          <ExternalLinks
            classes={{
              link: `${theme === "explore" ? "rounded-full" : ""}`,
            }}
          />
        </div>
        <div
          className={`relative mx-auto mt-10 w-48 h-48 border-2 border-accent overflow-hidden  ${
            theme === "explore" ? "rounded-full" : ""
          }`}
        >
          <Image
            src={valentinPortrait}
            alt="Portrait de Valentin"
            className="w-auto h-full absolute w-auto left-0 right-0 bottom-[-8%] mx-auto"
          />
        </div>
      </div>

      {/* Background Image */}
      <div className="pointer-events-none absolute bottom-0 h-full z-10 w-full overflow-hidden hidden lg:block">
        <Image
          src={valentinPortrait}
          alt="Portrait de Valentin"
          className="opacity-50 absolute lg:h-full w-auto left-0 right-0 bottom-[-10%] mx-auto"
        />
      </div>

      {/* Scrolling Content */}
      <main
        ref={scrollContainerRef}
        className="relative flex h-screen flex-row snap-x snap-mandatory overflow-x-auto no-scrollbar"
      >
        {/* Tech Section */}
        <section className="relative w-full flex-shrink-0 lg:w-1/2 h-full p-14 pb-30 bg-gradient-to-b from-[var(--bg-paper)] from-15% to-[var(--bg-default)] theme-tech flex flex-col justify-end lg:justify-between items-center text-center lg:items-start lg:text-left snap-center">
          <Logo className="hidden lg:block" />
          <div className="relative z-20 flex flex-col items-center lg:items-start">
            <h1 className="text-3xl lg:text-4xl font-title mb-4 lg:mb-6 text-primary">
              Intégrateur
              <br />
              <span className="text-accent">& </span>Développeur
            </h1>
            <p className="text-sm lg:text-base mb-4 lg:mb-6 text-secondary">
              Je transforme des problèmatiques métiers en gain de temps et de
              fiabilité.
            </p>
            <button
              onClick={() =>
                handleButtonClick(
                  "Le contenu pour Travailler ensemble arrive bientôt !"
                )
              }
              className="mt-4 px-4 py-2 lg:px-6 lg:py-3 bg-accent font-button text-button text-xs lg:text-sm font-bold flex items-center gap-2 cursor-pointer"
            >
              <MdHandshake size={24} className="lg:size-[30px]" />
              travailler ensemble
            </button>
          </div>
        </section>

        {/* Explore Section */}
        <section className="relative w-full flex-shrink-0 lg:w-1/2 h-full p-14 pb-30 bg-gradient-to-b from-[var(--bg-paper)] from-15% to-[var(--bg-default)] theme-explore flex flex-col justify-end lg:justify-between items-center lg:items-end snap-center">
          <ExternalLinks
            classes={{
              root: "hidden lg:flex theme-explore",
              link: "rounded-full",
            }}
          />
          <div className="z-20 w-full flex flex-col items-center text-center lg:items-end lg:text-right">
            <h1 className="text-3xl lg:text-4xl font-title mb-4 lg:mb-6 text-primary">
              Voyageur
              <br />
              <span className="text-accent">& </span>
              Curieux
            </h1>
            <p className="text-sm lg:text-base mb-4 lg:mb-6 text-secondary">
              Quand je ne code pas, j&apos;explore de nouvelles cultures et de
              nouveaux horizons.
            </p>
            <button
              onClick={() =>
                handleButtonClick(
                  "Le contenu pour Explorer ensemble arrive bientôt !"
                )
              }
              className="mt-4 px-4 py-2 lg:px-6 lg:py-3 bg-accent text-button font-button font-bold rounded-[40px] flex items-center gap-2 cursor-pointer"
            >
              <MdOutlineExplore size={24} className="lg:size-[30px]" />
              Explorer ensemble
            </button>
          </div>
        </section>
      </main>

      <Popup message={popupMessage} onClose={handleClosePopup} />
    </div>
  );
};

export default Home;
