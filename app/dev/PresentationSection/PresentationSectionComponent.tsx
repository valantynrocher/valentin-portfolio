import DevSectionComponent from "@/components/dev/DevSection";
import DynamicWords from "@/components/ui/DynamicWords";
import valentinPortrait from "@/public/valentin-portrait.png";
import Image from "next/image";
import { MdSend, MdDownload } from "react-icons/md";

const PresentationSectionComponent = () => {
  return (
    <DevSectionComponent
      id="presentation"
      slotProps={{
        section: {
          "aria-label": "Présentation du développeur",
        },
      }}
      classes={{
        section: "pt-40 h-full",
      }}
    >
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 flex flex-col text-center md:text-left text-primary">
          <h1 className="text-1xl sm:text-2xl md:text-3xl font-title  mb-5">
            développeur au service de <br className="hidden sm:inline" />
            <DynamicWords
              words={["votre métier", "vos utilisateurs", "vos process"]}
            />
          </h1>
          <p className="mb-10 text-primary">
            Développeur front-end spécialisé{" "}
            <span className="font-bold">React</span> et{" "}
            <span className="font-bold">TypeScript</span>, je transforme vos{" "}
            <span className="font-bold">problématiques métier</span> complexes
            en applications web fiables et performantes. Je m'investis de la
            conception d'
            <span className="font-bold">architectures modulaires</span> à
            l'instauration d'une{" "}
            <span className="font-bold">culture du test</span>
            pour garantir des solutions durables, centrées sur vos
            <span className="font-bold">utilisateurs</span>.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="mailto:valentinrocher@mailo.com"
              className="mt-4 px-4 py-2 md:px-6 md:py-3 bg-accent font-button text-button text-xs md:text-sm font-bold flex items-center gap-2 cursor-pointer"
            >
              <MdSend size={24} className="md:size-[30px]" />
              m'écrire
            </a>
            <a
              href="/cv.pdf"
              download="Valentin-Rocher-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 md:px-6 md:py-3 border border-accent border-w-1 font-button text-accent text-xs md:text-sm font-bold flex items-center gap-2 cursor-pointer"
            >
              mon cv
              <MdDownload size={24} className="md:size-[30px]" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={valentinPortrait}
            alt="Portrait de Valentin"
            className="absolute w-auto right-0 bottom-0 mx-auto"
          />
        </div>
      </div>
    </DevSectionComponent>
  );
};

export default PresentationSectionComponent;
