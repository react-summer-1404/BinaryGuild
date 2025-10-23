import React from "react";
import ProfessorsTextsWrapper from "./professors-texts/ProfessorsTexts";

const ProfessorsWrapper = () => {
  return (
    <div className="bg-black-900 border-1 border-boarder rounded-4xl flex flex-nowrap gap-1.5 p-[12px]">
      <ProfessorsTextsWrapper />
      <img src="/src/assets/icons/Frame 53.svg" className="w-[58%] m-auto" />
    </div>
  );
};

export default ProfessorsWrapper;
