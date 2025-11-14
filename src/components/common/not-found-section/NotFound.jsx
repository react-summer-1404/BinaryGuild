import React from "react";
import HomeButton from "../button/HomeButton";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full m-auto flex justify-center flex-wrap">
      <div className="flex w-11/12 gap-3 justify-center flex-wrap">
        <h1 className="text-text w-11/12 m-auto">404</h1>
        <p className="text-text m-auto w-11/12">{t("Error")}</p>
      </div>
      <HomeButton />
    </div>
  );
};

export default NotFound;
