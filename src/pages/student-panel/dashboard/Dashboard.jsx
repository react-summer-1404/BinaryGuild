import { useTranslation } from "react-i18next";
import Time from "./time/Time";
import TimeList from "../panel-list/TimeList";
import ProfileList from "../panel-list/ProfileList";
import CourseTable from "./course-table/CourseTable";
import PanelChart from "./panel-chart/PanelChart";
import ReserveTable from "./reserve-table/ReserveTable";
import YourComments from "./comment/YourComments";

const Dashboard = ({fName, userAbout}) => {
  const { t } = useTranslation();
  return (
    
    <div className="flex flex-wrap gap-8 m-5">
      <div className="w-full flex gap-2">
        <div className="flex flex-wrap w-3/5">
          <p className="text-text text-2xl text-persian font-bold text-start">
            {t("Hello")}
            {fName}
            {t("Welcome")}
             👋
          </p>
          <p className="text-muted text-[14px] font-persian mt-3 mr-2">
            {t("Hope")}
          </p>
          <TimeList />
        </div>
        <div className="w-2/6 text-center">
        <p className="font-persian text-text">
          {userAbout}

        </p>
        </div>
      </div>
      <div className="w-full flex">
        <CourseTable/>
        <PanelChart/>
      </div>
      <div className="w-full flex">
        <ReserveTable/>
        <YourComments/>
      </div>

      <ProfileList />
    </div>
  );
};

export default Dashboard;
