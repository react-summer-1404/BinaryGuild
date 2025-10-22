import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const HomeButton = () => {
  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/");
  };

  const { t } = useTranslation();
  return (
    <div
      onClick={GoHome}
      className="hidden md:cursor-pointer md:mt-[32px] md:flex md:items-center md:justify-center md:border-[1px] md:border-[#DCDCDC] md:rounded-[34px] md:w-[141px] md:h-[40px]"
    >
      <p className="text-[#3772FF]">{t("GoHomePage")}</p>
      <img src="../../../../src/assets/icons/home-04.png" className="mr-0.5" />
    </div>
  );
};

export default HomeButton;
