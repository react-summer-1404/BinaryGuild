import ProfessorsList from "../items-list/ProfessorsList";
import ProfessorsTexts  from "./professor-section/ProfessorsTexts";


const Professors  = () => {
  return (
    <div className="bg-black-900 border-1 border-boarder gap-4 rounded-4xl flex flex-wrap lg:flex-nowrap lg:gap-1.5 p-[12px]">
      <ProfessorsTexts  />
      <img src="/src/assets/icons/Frame 53.svg" className="lg:w-[58%] lg:block m-auto w-full hidden" />
      <ProfessorsList/>
    </div>
  );
};

export default Professors ;
