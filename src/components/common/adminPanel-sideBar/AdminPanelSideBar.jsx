import React from "react";
import { adminPanelData } from "../../../core/constant/adminPanel-data/AdminPanelData";
import PanelMenu from "../panel-header/panel-menu/PanelMenu";
import { useTranslation } from "react-i18next";
const AdminPanelSideBar = () => {
  const { t } = useTranslation();

  return (
    <div className="border text-black border-black w-full h-full ">
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
