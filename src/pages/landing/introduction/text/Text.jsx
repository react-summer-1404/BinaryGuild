import React from "react";
import { useTranslation } from "react-i18next";

const TextWrapper = () => {
  const {t} = useTranslation();
  return (
    <div className="flex flex-wrap cursor-pointer gap-1.5">
      <div className="gap-1.5 text-[40px] text-center m-auto">
        <h2 className=" font-persian font-bold">{t("ModernEducation")}</h2>
        <h2 className=" font-persian font-bold">{t("RapidProgress")}</h2>
      </div>
      <p className="text-gray-400 text-[18px] w-11/12 m-auto font-persian">{t("Description")}
      </p>
    </div>
  );
};

export default TextWrapper;
