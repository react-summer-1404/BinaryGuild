import ProfessorsList from "../items-list/ProfessorsList";
import ProfessorsTextsWrapper from "./professor-section/ProfessorsTexts";


const ProfessorsWrapper = () => {
  return (
    <div className="bg-black-900 border-1 border-boarder gap-4 rounded-4xl flex flex-wrap lg:flex-nowrap lg:gap-1.5 p-[12px]">
      <ProfessorsTextsWrapper />
      <img src="/src/assets/icons/Frame 53.svg" className="lg:w-[58%] lg:block m-auto w-full hidden" />
      <ProfessorsList/>
    </div>
  );
};

export default ProfessorsWrapper;
