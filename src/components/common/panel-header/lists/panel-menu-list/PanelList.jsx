import React from "react";
import { PanelData } from "../../../../../core/constant/Panel-data/PanelData";
import PanelMenu from "../../panel-menu/PanelMenu";
import { useTranslation } from "react-i18next";

const PanelList = () => {
  const {t} = useTranslation();
  return (
    <div className="flex flex-wrap w-full">
      {PanelData.map((value) => {
        return (
          <PanelMenu
            key={value.id}
            id={value.id}
            name={t("MenuText" + value.id)}
            image={value.image}
          />
        );
      })}
    </div>
  );
};

export default PanelList;
