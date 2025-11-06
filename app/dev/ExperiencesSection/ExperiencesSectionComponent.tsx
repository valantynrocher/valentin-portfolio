"use client";

import { useState } from "react";
import Link from "next/link";
import { ExperienceSummary } from "@/types/experience";
import DevSectionComponent from "@/components/dev/DevSection";

const EXPERIENCES_SUMMARIES: ExperienceSummary[] = [
  {
    role: "développeur react/TypeScript",
    company: "Innovance (CDI)",
    dates: "2020 - 2023",
    slug: "innovance",
    summary:
      "Co-pilotage de la migration d'un SaaS critique (Silverlight vers React/TS) et conception d'une architecture front-end modulaire. Instauration d'une culture du test (de 0 à +60%), fiabilisant les livraisons.",
  },
  {
    role: "développeur web",
    company: "AlloVoisins (Stage)",
    dates: "2020",
    summary: "Stage interrompu suite à la crise Covid-19",
  },
  {
    role: "resPonsable de la Communication",
    company: "Ligue de l'enseignement 44",
    dates: "2024 - 20218",
    slug: "ligue-44",
    summary:
      "En poste auprès de la Direction Générale, au sein d’une structure fédérative regroupant plus de 70 salarié·es",
  },
  {
    role: "Infographiste",
    company: "Quoi Com' ? (Freelance)",
    dates: "2015 - 2018",
    summary:
      "Conception de supports de communication graphique (cartes de visite, flyers, brochures...)",
  },
  {
    role: "Employé administratif",
    company: "UDSP 44 (CDD)",
    dates: "2014",
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, est? Enim veritatis quam aliquid aut fugiat, provident est atque sapiente, exercitationem minima non vel iusto doloribus id blanditiis sequi repudiandae?",
  },
  {
    role: "Commercial terrain",
    company: "Precom (Stage)",
    dates: "2012",
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, est? Enim veritatis quam aliquid aut fugiat, provident est atque sapiente, exercitationem minima non vel iusto doloribus id blanditiis sequi repudiandae?",
  },
  {
    role: "Assistant communication",
    company: "INRAE (Stage)",
    dates: "2012",
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, est? Enim veritatis quam aliquid aut fugiat, provident est atque sapiente, exercitationem minima non vel iusto doloribus id blanditiis sequi repudiandae?",
  },
];

const ExperiencesSectionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedExperiences = isExpanded
    ? EXPERIENCES_SUMMARIES
    : EXPERIENCES_SUMMARIES.slice(0, 4);

  return (
    <DevSectionComponent
      id="experiences"
      title="eXpériences"
      classes={{
        section: "relative",
      }}
    >
      <div className="relative">
        <div
          id="timeline"
          className="absolute left-0 right-0 my-3 md:mx-auto w-0.5 bg-accent h-full"
        />
        {displayedExperiences.map((experience, index) => (
          <div
            key={experience.slug}
            className={`relative mb-8 pl-8 md:pl-0 flex justify-between items-center w-full ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } flex-row-reverse`}
          >
            <div
              id="square-indicator"
              className={`absolute -left-1.5 top-[4px] md:left-0 right-0 md:mx-auto z-10 bg-accent w-4 h-4 ${
                index % 2 === 0 ? "" : ""
              }`}
            />
            <div className="hidden md:block w-5/12" />

            <div className="w-full md:w-5/12">
              <div className="flex flex-col text-secondary">
                <p className="font-title text-accent mb-3">
                  {experience.dates}
                </p>
                <h3 className="font-title text-xl font-bold mb-2">
                  {experience.role}
                </h3>
                <p className="text-sm mb-3">{experience.company}</p>
                <p className="text-sm mb-5">{experience.summary}</p>
                {experience.slug ? (
                  <Link
                    href={`/dev/experience/${experience.slug}`}
                    className="text-sm font-button text-accent mt-4 hover:underline"
                  >
                    plus de détails
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
      {EXPERIENCES_SUMMARIES.length > 4 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-2 font-button text-accent border border-accent"
          >
            {isExpanded ? "réduire" : "afficher tout"}
          </button>
        </div>
      )}
    </DevSectionComponent>
  );
};

export default ExperiencesSectionComponent;
