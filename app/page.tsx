"use client";
import valentinPortrait from "@/public/valentin-portrait.png";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdHandshake, MdOutlineExplore } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [theme, setTheme] = useState("tech");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      className={`relative h-screen ${
        theme === "tech" ? "theme-tech" : "theme-explore"
      }`}
    >
      {/* Fixed Overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col p-14 pb-30">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-displayTech text-[var(--bg-default)] lg:text-3xl">
            <span className="font-bold">V</span>alentin
            <br />
            <span className="font-bold">R</span>ocher
          </h2>
          <div className="flex gap-[15px] lg:gap-[30px]">
            <a
              href="https://www.linkedin.com/in/valentin-rocher/"
              target="_blank"
              className="pointer-events-auto flex h-6 w-6 items-center justify-center rounded-full bg-[var(--bg-default)] lg:h-8 lg:w-8"
            >
              <FaLinkedin
                size={16}
                className="lg:size-[20px] text-[var(--text-primary)]"
              />
            </a>
            <a
              href="https://github.com/valantynrocher"
              target="_blank"
              className="pointer-events-auto flex h-6 w-6 items-center justify-center rounded-full bg-[var(--bg-default)] lg:h-8 lg:w-8"
            >
              <FaGithub
                size={16}
                className="lg:size-[20px] text-[var(--text-primary)]"
              />
            </a>
            <a
              href="mailto:valentinrocher@mailo.com"
              className="pointer-events-auto flex h-6 w-6 items-center justify-center rounded-full bg-[var(--bg-default)] lg:h-8 lg:w-8"
            >
              <MdEmail
                size={16}
                className="lg:size-[20px] text-[var(--text-primary)]"
              />
            </a>
          </div>
        </div>
        <div
          className={`mx-auto mt-10 w-48 h-48 border-2 border-accent overflow-hidden lg:hidden ${
            theme === "explore" ? "rounded-full" : ""
          }`}
        >
          <Image
            src={valentinPortrait}
            alt="Portrait de Valentin"
            className="object-cover w-full h-full"
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
        <div className="relative w-full flex-shrink-0 lg:w-1/2 h-full p-14 pb-30 bg-gradient-to-b from-[var(--bg-paper)] from-15% to-[var(--bg-default)] theme-tech flex flex-col justify-end items-center text-center lg:items-start lg:text-left snap-center">
          <div className="relative z-20 flex flex-col items-center lg:items-start">
            <h1 className="text-4xl lg:text-5xl font-displayTech mb-4 lg:mb-6 text-primary">
              Concepteur
              <br />
              <span className="text-accent">&</span> Développeur
            </h1>
            <p className="text-sm lg:text-base mb-4 lg:mb-6 text-secondary">
              Je transforme des problèmes métiers en gain de temps et de
              fiabilité.
            </p>
            <button className="mt-4 px-4 py-2 lg:px-6 lg:py-3 bg-accent text-button font-bold flex items-center gap-2">
              <MdHandshake size={24} className="lg:size-[30px]" /> Travailler
              ensemble
            </button>
          </div>
        </div>

        {/* Explore Section */}
        <div className="relative w-full flex-shrink-0 lg:w-1/2 h-full p-14 pb-30 bg-gradient-to-b from-[var(--bg-paper)] from-15% to-[var(--bg-default)] theme-explore flex flex-col justify-end items-center lg:items-end snap-center">
          <div className="z-20 w-full flex flex-col items-center text-center lg:items-end lg:text-right">
            <h1 className="text-4xl lg:text-5xl font-displayExplore mb-4 lg:mb-6 text-primary">
              Voyageur
              <br />
              <span className="text-accent">&</span>
              Curieux
            </h1>
            <p className="text-sm lg:text-base mb-4 lg:mb-6 text-secondary">
              Quand je ne code pas, j&apos;explore de nouvelles cultures et de
              nouveaux horizons.
            </p>
            <button className="mt-4 px-4 py-2 lg:px-6 lg:py-3 bg-accent text-button font-bold rounded-[40px] flex items-center gap-2">
              <MdOutlineExplore size={24} className="lg:size-[30px]" /> Explorer
              ensemble
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
