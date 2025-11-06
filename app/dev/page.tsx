import ExperiencesSection from "@/app/dev/ExperiencesSection";
import DevSectionComponent from "@/components/dev/DevSection";
import PresentationSection from "./PresentationSection";

const DevPage = () => {
  return (
    <>
      <PresentationSection />
      <ExperiencesSection />

      <DevSectionComponent id="projets" title="projeTs" />
      <DevSectionComponent id="competences" title="coMpétences" />
    </>
  );
};

export default DevPage;
