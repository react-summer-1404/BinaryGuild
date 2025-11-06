import { CircularProgressbar } from "react-circular-progressbar";
import Pen from "../../../../core/icons/Pen";
import { useTranslation } from "react-i18next";

const PanelChart = () => {
  const {t} = useTranslation();
  return (
    <div className="w-1/4 flex flex-wrap gap-4">
      <div className="w-full flex flex-nowrap justify-between">
        <p className="font-bold w-3/5 text-[14px]">
          {t("YourInformation")}
        </p>
        <div className="w-1/5 justify-items-end">
          <Pen />
        </div>
      </div>
      <div className="w-full m-auto">
        <CircularProgressbar value={66} text={`${66}%`}/>
      </div>
      <div className="w-full">
      <p className="font-bold text-[14px]">
        {t("IsNotComplete")}
      </p></div>
    </div>
  );
};

export default PanelChart;
