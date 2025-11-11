import React from "react";
import { adminPanelData } from "../../../core/constant/adminPanel-data/AdminPanelData";
import PanelMenu from "../panel-header/panel-menu/PanelMenu";
import { useTranslation } from "react-i18next";
import Logo from "../logo/logo";
const AdminPanelSideBar = () => {
  const { t } = useTranslation();

  return (
    <div className=" rounded-2xl w-full h-full ">
      <div className=" w-full">
        {" "}
        <div className="pb-8">
          <Logo />
        </div>
      </div>
      {adminPanelData.map((value) => {
        return (
          <PanelMenu
            key={value.id}
            id={value.id}
            name={t("adminMenuText" + value.id)}
            image={value.image}
            link={value.link}
          />
        );
      })}
    </div>
  );
};

export default AdminPanelSideBar;
