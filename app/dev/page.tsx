import DynamicWords from "@/components/ui/DynamicWords";
import valentinPortrait from "@/public/valentin-portrait.png";
import Image from "next/image";
import { MdSend, MdDownload } from "react-icons/md";

const DevPage = () => {
  return (
    <>
      <section
        id="presentation"
        aria-label="Présentation du développeur"
        className="pt-40"
      >
        <div className="px-14 flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left text-primary">
            <h1 className="text-1xl sm:text-2xl lg:text-3xl font-title  mb-5">
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
            <div className="flex gap-4">
              <a
                href="mailto:valentinrocher@mailo.com"
                className="mt-4 px-4 py-2 lg:px-6 lg:py-3 bg-accent font-button text-button text-xs lg:text-sm font-bold flex items-center gap-2 cursor-pointer"
              >
                <MdSend size={24} className="lg:size-[30px]" />
                m'écrire
              </a>
              <a
                href="/cv.pdf"
                download="Valentin-Rocher-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 lg:px-6 lg:py-3 border border-accent border-w-1 font-button text-accent text-xs lg:text-sm font-bold flex items-center gap-2 cursor-pointer"
              >
                mon cv
                <MdDownload size={24} className="lg:size-[30px]" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src={valentinPortrait}
              alt="Portrait de Valentin"
              className="w-auto h-full left-0 right-0 bottom-[-8%] mx-auto"
            />
          </div>
        </div>
      </section>
      <section id="projets" className="h-[500px] pt-14">
        <h2>Mon Travail</h2>
      </section>
      <section id="competences" className="h-[500px] pt-14">
        <h2>Mes compétences</h2>
      </section>
    </>
  );
};

export default DevPage;
