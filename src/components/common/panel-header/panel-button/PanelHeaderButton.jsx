import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PanelHeaderButton = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-nowrap m-auto">
      <Link to={"/"}>
        <p className="text-white-200 p-4 hover:text-blue">{t("Home")}</p>
      </Link>
      <Link to={"/report"}>
        <p className="text-white-200 p-4 hover:text-blue">{t("Report")}</p>
      </Link>
      <Link to={"/contact-us"}>
        <p className="text-white-200 p-4 hover:text-blue">{t("ContactUs")}</p>
      </Link>
    </div>
  );
};

export default PanelHeaderButton;
