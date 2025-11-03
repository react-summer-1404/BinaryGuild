import { useTranslation } from "react-i18next";
import Time from "./time/Time";
import TimeList from "../panel-list/TimeList";

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <div className="flex">
      <p className="text-text text-2xl text-persian font-bold text-start m-4 ml-2">
        {t("Welcome")}
      </p>
      <p className="text-muted text-[14px] font-persian m-7 mr-2">
        {t("Hope")}
      </p>

      <TimeList/>
    </div>
  );
};

export default Dashboard;
