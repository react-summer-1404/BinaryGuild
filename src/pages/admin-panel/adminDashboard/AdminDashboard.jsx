import React from "react";
import { usersList } from "../../../core/services/api/adminPanel/get-data";
import { GetCourses, UserData } from "../../../core/services/api/get-data";
import { useQuery } from "@tanstack/react-query";
import { GetAllComments } from "../../../core/services/api/adminPanel/get-data";
import { GetCoursesPayment } from "../../../core/services/api/adminPanel/get-data";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CircularProgressbar } from "react-circular-progressbar";
import BarCharts from "./charts/BarChart";
import { useTranslation } from "react-i18next";

ChartJS.register(ArcElement, Tooltip, Legend);
const AdminDashboard = () => {
  const { t } = useTranslation();

  //data:

  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => usersList(),
  });

  const { data: profileData } = useQuery({
    queryKey: ["GET_PROFILE_INFO"],
    queryFn: UserData,
  });

  const { data: coursesData } = useQuery({
    queryKey: ["GET_COURSES_DATA"],
    queryFn: () => GetCourses({ PageNumber: 1, RowsOfPage: 100 }),
  });

  const { data: allComments } = useQuery({
    queryKey: ["GET_Comments"],
    queryFn: () => GetAllComments({ PageNumber: 1, RowsOfPage: 200 }),
  });

  const { data: payment } = useQuery({
    queryKey: ["Course-Payments"],
    queryFn: () => GetCoursesPayment(),
  });


  const coursePayment = payment?.reduce((sum,p)=>sum + Number(p.Paid),0);
  console.log("course Payment is:", coursePayment);

  const adminCount = users?.listUser?.filter((item) =>
    item.roles.includes("admin")
  ).length;
  const studentCount = users?.listUser?.filter((item) =>
    item.roles.includes("student")
  ).length;
  const teacherCount = users?.listUser?.filter((item) =>
    item.roles.includes("teacher")
  ).length;
  const superAdmin = users?.listUser?.filter((item) =>
    item.roles.includes("SuperAdmin")
  ).length;






  const teachersCounts = users?.listUser?.filter((item) =>
    item.roles.includes("teacher")
  ).length;

  const activeUsers =
    users?.listUser?.filter((user) => user.active === true)?.length || 0;
  const activePercentage = (activeUsers / users?.totalCount) * 100;
  const inActivePercentage = 100 - activePercentage;
  const inactiveUsers = users?.totalCount - activeUsers;
  const completedProfile =
    users?.listUser?.filter(
      (user) => user.profileCompletionPercentage === 100
    ) || 0;

  //users with more than 40% completion profile
  const complete40 =
    users?.listUser?.filter((user) => user.profileCompletionPercentage >= 40)
      .length || 0;
  const completeMore40Percentage = Math.round(
    (complete40 / users?.totalCount) * 100
  );

  //users with more than 10% completion profile
  const complete10 =
    users?.listUser?.filter((user) => user.profileCompletionPercentage >= 10)
      .length || 0;

  const completeMore10Percentage = Math.round(
    (complete10 / users?.totalCount) * 100
  );
  console.log("completeMore10Percentage", completeMore10Percentage);

  const acceptedCommentsCount =
    allComments?.comments?.filter((comment) => comment.accept === true)
      .length || 0;
  const notAcceptedCommentsCount =
    allComments?.comments?.filter((comment) => comment.accept === false)
      .length || 0;

  const activeCourses = coursesData?.courseFilterDtos?.filter(
    (c) => c.active === true
  ).length;
  const activeCoursesPercentage = Math.round(
    (activeCourses / coursesData?.totalCount) * 100
  );

  //chart data
  const data = {
    labels: [t("activeUsers"), t("inActiveUsers")],
    datasets: [
      {
        data: [activePercentage, inActivePercentage],
        backgroundColor: ["rgba(11, 127, 171,1)", "rgba(196, 77, 86 ,1)"],
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <div className=" w-full h-full  bg-[#222] rounded-small p-3 ">
      <div className=" w-full h-100 flex gap-3 ">
        <div className="flex flex-col gap-3 w-4/10 h-full">
          <div className="rounded-medium relative flex flex-col items-center bg-[#432289] bg-cover bg-center w-full h-1/2">
            <p className=" w-full bg-[#000000cb] absolute bottom-0 p-3 rounded-bl-medium rounded-br-medium">
              {" "}
              {profileData?.fName} {t("CongratsText")}{coursePayment} {t("CongratsText2")}
            </p>
          </div>

          <div className=" rounded-medium shadow-small p-2 shadow-amber-50 flex items-center h-1/2 w-full">
            <div className="h-full pt-10 w-full ">
              <p> {t("usersPercentage")}</p>
              <p className="mt-10">
                {activePercentage}% {t("activeUserText")}{" "}
              </p>
            </div>
            <div className="h-full">
              <Doughnut
                data={data}
                options={{
                  cutout: "70%",
                  radius: "90%",
                  plugins: {
                    tooltip: { enabled: false },
                    legend: { display: true },
                  },
                }}
              />
              <p className="relative bottom-19">{activePercentage}%</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-3 w-6/10 h-full">
          <div className=" flex gap-3  w-full h-1/2">
            <div className=" rounded-medium shadow-small shadow-amber-50 w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p>{users?.totalCount}</p>
              <p>{t("users")}</p>
            </div>
            <div className=" rounded-medium shadow-small shadow-amber-50 w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p>{coursesData?.totalCount} </p>
              <p>{t("courses")}</p>
            </div>
            <div className=" rounded-medium shadow-small shadow-amber-50 w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p> {allComments?.totalCount}</p>
              <p>{t("comments")}</p>
            </div>
            <div className=" rounded-medium shadow-small shadow-amber-50 w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p>{teachersCounts} </p>
              <p>{t("teachers")}</p>
            </div>
          </div>

          <div className=" flex gap-3 w-full h-1/2">
            <div className=" rounded-medium shadow-small shadow-amber-50 w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p>{inactiveUsers}</p>
              <p>{t("inActiveUsers")}</p>
            </div>
            <div className=" rounded-medium shadow-small shadow-amber-50 w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p>{completedProfile?.length}</p>
              <p>{t("completedPro")}</p>
            </div>
            <div className=" rounded-medium shadow-small shadow-amber-50 w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p>{acceptedCommentsCount}</p>
              <p>{t("confirmedComments")}</p>
            </div>
            <div className=" rounded-medium shadow-small shadow-amber-50 w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p>{notAcceptedCommentsCount}</p>
              <p>{t("notConfirmedComments")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full h-100 flex mt-3 gap-3 justify-between">
        <div className="flex gap-3 w-full">
          <div className=" rounded-medium shadow-small shadow-amber-50 w-1/3 flex flex-col gap-4 items-center justify-between p-4 h-full">
            <p> {t("DoughnutChart10Percentage")}</p>
            <div className=" w-55">
              <CircularProgressbar
                value={completeMore10Percentage}
                text={`% ${completeMore10Percentage}`}
                styles={{
                  path: { stroke: "rgba(3, 138, 255,1)" },
                  text: { fill: "rgba(3, 138, 255,1)", fontWeight: "bold" },
                }}
              />
            </div>
            <div className="w-full flex items-center gap-4">
              <div className="rounded-medium shadow-small shadow-amber-50 p-2 w-1/2">
                <p> {t("countMore10")} </p>
                <p>{complete10} </p>
              </div>
              <div className="rounded-medium shadow-small shadow-amber-50 w-1/2 p-2">
                <p> {t("countLess10")} </p>
                <p>{users?.totalCount - complete10} </p>
              </div>
            </div>
          </div>

          <div className=" rounded-medium shadow-small shadow-amber-50 w-1/3 flex flex-col items-center p-4 justify-between h-full">
            <p> {t("DoughnutChart40Percentage")}</p>
            <div className=" w-55">
              <CircularProgressbar
                value={completeMore40Percentage}
                text={`% ${completeMore40Percentage} `}
                styles={{
                  path: { stroke: "rgb(214, 44, 57)" },
                  text: { fill: "rgb(214, 44, 57)", fontWeight: "bold" },
                }}
              />
            </div>
            <div className=" flex items-center gap-4">
              <div className="rounded-medium shadow-small shadow-amber-50 p-2 w-1/2">
                <p> {t("countLess40")} </p>
                <p>{complete40} </p>
              </div>
              <div className="rounded-medium shadow-small shadow-amber-50 p-2 w-1/2">
                <p> {t("countLess40")} </p>
                <p>{users?.totalCount - complete40} </p>
              </div>
            </div>
          </div>

          <div className=" rounded-medium shadow-small shadow-amber-50 flex flex-col items-center p-4 justify-between w-1/3 h-full">
            <p> {t("CoursePercentage")}</p>
            <div className=" w-55">
              <CircularProgressbar
                value={activeCoursesPercentage}
                text={`% ${activeCoursesPercentage} `}
                styles={{
                  path: { stroke: "rgb(87, 165, 59)" },
                  text: { fill: "rgb(87, 165, 59)", fontWeight: "bold" },
                }}
              />
            </div>
            <div className="w-full flex items-center gap-4">
              <div className="rounded-medium shadow-small shadow-amber-50 p-2 w-1/2">
                <p> {t("activeCourseCount")}</p>
                <p>{activeCourses} </p>
              </div>
              <div className="rounded-medium shadow-small shadow-amber-50 p-2 w-1/2">
                <p> {t("inActiveCourseCount")}</p>
                <p>{coursesData?.totalCount - activeCourses} </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" rounded-medium shadow-small shadow-amber-50 pt-3 pb-8 mt-3">
        <p className="mt-4"> {t("BarCHartTitle")} </p>
        <div className="mt-10">
          <BarCharts
            superAdmin={superAdmin}
            adminCount={adminCount}
            studentCount={studentCount}
            teacherCount={teacherCount}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
