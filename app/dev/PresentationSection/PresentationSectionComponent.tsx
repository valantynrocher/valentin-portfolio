import DevSectionComponent from "@/components/dev/DevSection";
import DynamicWords from "@/components/ui/DynamicWords";
import valentinPortrait from "@/public/valentin-portrait.png";
import Image from "next/image";
import { MdSend, MdDownload } from "react-icons/md";
import Button from "@/components/ui/Button";

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
        section: "pt-[8%] sm:pt-[16%] h-full",
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
          <p className="mb-5 text-primary text-xs md:text-sm">
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
            <Button
              component="a"
              href="mailto:valentinrocher@mailo.com"
              className="mt-4 md:px-6 md:py-3 flex items-center gap-2"
            >
              <MdSend size={24} className="md:size-[30px]" />
              m'écrire
            </Button>
            <Button
              component="a"
              variant="outlined"
              href="/cv.pdf"
              download="Valentin-Rocher-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2"
            >
              mon cv
              <MdDownload size={24} className="md:size-[30px]" />
            </Button>
          </div>
        </div>
        <div className="hidden md:block w-full md:w-1/2">
          <div
            className={`relative mx-auto mt-10 w-48 h-48 border-2 border-accent overflow-hidden`}
          >
            <Image
              src={valentinPortrait}
              alt="Portrait de Valentin"
              className="absolute h-full w-auto left-0 right-0 bottom-[-8%] mx-auto"
            />
          </div>
        </div>
      </div>
    </DevSectionComponent>
  );
};

export default PresentationSectionComponent;
