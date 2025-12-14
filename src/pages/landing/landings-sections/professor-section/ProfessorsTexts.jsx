import { Button } from "@heroui/button";
import React from "react";
import { useTranslation } from "react-i18next";

const ProfessorsTexts  = () => {
  const {t} = useTranslation();
  return (
    <div className="flex lg:w-[40%] w-full gap-6 flex-wrap text-start text-gray-100">
      <h2 className="w-full font-persian text-[24px] font-bold">{t("AcademiesProfessors")}
      </h2>
      <p className="font-persian w-full text-[20px] font-medium">{t("DescriptionAboutProfessors")}
      </p>
      <Button color="primary" radius="full">
        <p className="font-persian">{t("TeachersPage")}</p>
      </Button>
    </div>
  );
};

export default ProfessorsTexts ;
