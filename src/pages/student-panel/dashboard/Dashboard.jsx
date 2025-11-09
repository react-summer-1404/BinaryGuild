import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { UserData } from "../../../core/services/api/get-data";
import TimeList from "../panel-list/TimeList";
import YourComments from "./comment/YourComments";
import CourseTable from "./course-table/CourseTable";
import PanelChart from "./panel-chart/PanelChart";
import ReserveTable from "./reserve-table/ReserveTable";
import CommentsList from "../panel-list/CommentsList";

const Dashboard = () => {
  const { data: profileData } = useQuery({
    queryKey: ["GET_PROFILE_INFO"],
    queryFn: UserData,
  });
  console.log(profileData)
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap gap-8 m-5">
      <div className="w-full flex gap-2">
        <div className="flex flex-wrap w-3/5">
          <p className="text-text text-2xl text-persian font-bold text-start">
            {t("Hello")}
            {profileData?.fName}
            {t("Welcome")}
            👋
          </p>
          <p className="text-muted text-[14px] font-persian mt-3 mr-2">
            {t("Hope")}
          </p>
          <TimeList />
        </div>
        <div className="w-2/6 text-center">
          <p className="font-persian text-text">{profileData?.userAbout}</p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <CourseTable />
        <PanelChart profileCompletionPercentage={profileData?.profileCompletionPercentage} />
      </div>
      <div className="w-full flex justify-between">
        <ReserveTable />
        <div className="w-1/3 flex border-forgetpassbtn border-1 rounded-3xl bg-forgetpassbtn ">
          <CommentsList profileData={profileData}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
