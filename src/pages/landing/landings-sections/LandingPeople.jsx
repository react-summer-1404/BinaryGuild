import React from "react";
import { useTranslation } from "react-i18next";

const People  = () => {
  const {t} = useTranslation();
  return (
    <div className="flex flex-wrap m-auto w-[275px] gap-4 h-[40%] text-text">
      <div className="flex flex-nowrap items-center gap-2 cursor-pointer">
        <img src="/src/assets/icons/Group 1.svg" />
        <p className="text-sm font-persian">{t("OurStudents")}</p>
      </div>
      <div className="flex flex-nowrap items-center gap-2 cursor-pointer">
        <img src="/src/assets/icons/Group 2.svg" />
        <p className=" font-persian">{t("OurProfessors")}</p>
      </div>
    </div>
  );
};

export default People ;
