import { useTranslation } from "react-i18next";
import { PanelData } from "../../../../../core/constant/Panel-data/PanelData";
import PanelMenu from "../../panel-menu/PanelMenu";

const PanelList = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap h-3/5 w-full gap-5">
      {PanelData.map((value) => {
        return (
          <PanelMenu
            key={value.id}
            id={value.id}
            name={t("MenuText" + value.id)}
            image={value.image}
            link={value.link}
          />
        );
      })}
    </div>
  );
};

export default PanelList;
