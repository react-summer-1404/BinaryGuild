import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CourseTable from "../../../components/common/table/course-table/CourseTable";
import ReserveTable from "../../../components/common/table/reserve-table/ReserveTable";
import TimeList from "../panel-list/TimeList";
import YourComments from "./comment/YourComments";
import PanelChart from "./panel-chart/PanelChart";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { t } = useTranslation();
  const [profileData, setProfileData] = useState(null);
  
  useEffect(() => {
    const getProfile = JSON.parse(localStorage.getItem("data"));
    setProfileData(getProfile);
    console.log("getProfile :", getProfile)

  }, []);

  return (
    <>
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
          <div className="w-3/4 gap-4 flex flex-wrap">
            <div className="w-full flex flex-nowrap h-0 justify-between">
              <p className="w-1/2 text-start font-persian">{t("MenuText2")}</p>
              <Link to={"/panel/my-courses"} className="w-1/2 text-end">
                <p className=" text-blue font-persian">{t("SeeOther")}</p>
              </Link>
            </div>
            <CourseTable />
          </div>
          <PanelChart
            profileCompletionPercentage={
              profileData?.profileCompletionPercentage
            }
          />
        </div>
        <div className="w-full flex h-[360px] justify-between">
          <div className="w-3/5 flex flex-wrap gap-1">
            <div className="w-full flex flex-nowrap justify-between">
              <p className="w-1/2 text-start font-persian">{t("MenuText3")}</p>
              <Link to={"/panel/reserve-course"} className="w-1/2 text-end">
                <p className=" text-blue font-persian">{t("SeeOther")}</p>
              </Link>
            </div>
            <ReserveTable />
          </div>
          <div className="w-[31%] flex border-forgetpassbtn border-1 overflow-x-hidden overflow-y-scroll rounded-3xl bg-forgetpassbtn ">
            <YourComments getProfile={profileData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
