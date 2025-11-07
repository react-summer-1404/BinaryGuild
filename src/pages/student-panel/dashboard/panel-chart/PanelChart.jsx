import { CircularProgressbar } from "react-circular-progressbar";
import Pen from "../../../../core/icons/Pen";
import { useTranslation } from "react-i18next";

const PanelChart = ({profileCompletionPercentage}) => {
  const {t} = useTranslation();
  console.log(profileCompletionPercentage)
  return (
    <div className="w-1/5 flex flex-wrap gap-4">
      <div className="w-full flex flex-nowrap justify-between">
        <p className="font-bold w-3/4 text-[12px]">
          {t("YourInformation")}
        </p>
        <div className="w-1/5 justify-items-end">
          <Pen />
        </div>
      </div>
      <div className="w-full m-auto">
        <CircularProgressbar value={profileCompletionPercentage} text={`${profileCompletionPercentage}%`}/>
      </div>
      <div className="w-full">
      <p className="font-bold text-[12px]">
        {t("IsNotComplete")}
      </p></div>
    </div>
  );
};

export default PanelChart;
