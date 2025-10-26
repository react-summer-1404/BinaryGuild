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
      className="hidden min-[1024px]:cursor-pointer min-[1024px]:mt-[32px] min-[1024px]:flex min-[1024px]:items-center min-[1024px]:justify-center min-[1024px]:border-[1px] min-[1024px]:border-[#DCDCDC] min-[1024px]:rounded-[34px] min-[1024px]:w-[141px] min-[1024px]:h-[40px]"
    >
      <p className="text-[#3772FF]">{t("GoHomePage")}</p>
      <img src="../../../../src/assets/icons/home-04.png" className="mr-0.5" />
    </div>
  );
};

export default HomeButton;
