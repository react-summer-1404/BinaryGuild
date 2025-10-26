import React from "react";
import { useTranslation } from "react-i18next";

const TextWrapper = () => {
  const {t} = useTranslation();
  return (
    <div className="flex flex-wrap cursor-pointer gap-1.5 justify-start">
      <div className="gap-1.5 text-[40px] w-10/12 text-center">
        <h2 className=" font-persian font-bold">{t("ModernEducation")}</h2>
        <h2 className=" font-persian font-bold">{t("RapidProgress")}</h2>
      </div>
      <p className="text-gray-400 text-[18px] w-10/12 font-persian">{t("Description")}
      </p>
    </div>
  );
};

export default TextWrapper;
