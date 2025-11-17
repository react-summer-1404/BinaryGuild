import React from "react";
import { usersList } from "../../../core/services/api/adminPanel/get-data";
import { GetCourses } from "../../../core/services/api/get-data";
import { useQuery } from "@tanstack/react-query";
import { GetAllComments } from "../../../core/services/api/adminPanel/get-data";
import { GetCoursesPayment } from "../../../core/services/api/adminPanel/get-data";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CircularProgressbar } from "react-circular-progressbar";
import BarCharts from "./charts/BarChart";

ChartJS.register(ArcElement, Tooltip, Legend);
const AdminDashboard = ({ CourseId }) => {
  //data:

  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => usersList(),
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
    queryFn: () => GetCoursesPayment(CourseId),
  });

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

  const coursePayment = payment?.Paid;
  console.log("coursePayment", coursePayment);

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
  const completeMore40Percentage = (complete40 / users?.totalCount) * 100;

  //users with more than 10% completion profile
  const complete10 =
    users?.listUser?.filter((user) => user.profileCompletionPercentage >= 10)
      .length || 0;

  const completeMore10Percentage = (complete10 / users?.totalCount) * 100;

  const acceptedCommentsCount =
    allComments?.comments?.filter((comment) => comment.accept === true)
      .length || 0;
  const notAcceptedCommentsCount =
    allComments?.comments?.filter((comment) => comment.accept === false)
      .length || 0;

  const activeCourses = coursesData?.courseFilterDtos?.filter(
    (c) => c.active === true
  ).length;
  const activeCoursesPercentage =
    (activeCourses / coursesData?.totalCount) * 100;

  //chart data
  const data = {
    labels: ["active users", "inactive users"],
    datasets: [
      {
        label: "# of active users",
        data: [activePercentage, inActivePercentage],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <div className="border border-white w-full h-full  bg-[#222] rounded-small ">
      <div className="border border-white w-full h-100 flex ">
        <div className="border border-white w-4/10 h-full">
          <div className="border border-white flex flex-col w-full h-1/2">
            all price
          </div>

          <div className="border border-white flex  w-full h-1/2">
            <div className="border border-white w-5/6 h-full p-3">
              <Doughnut data={data} />
            </div>
            <div className="border border-white w-full ">
              <p>درصد کاربران فعال</p>
              <p> کاربران فعال هستند {activePercentage} </p>
            </div>
          </div>
        </div>

        <div className="border border-white flex flex-col w-6/10 h-full">
          <div className="border border-white flex  w-full h-1/2">
            <div className="border border-white w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p>{users?.totalCount}</p>
              <p>users</p>
            </div>
            <div className="border border-white w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p>{coursesData?.totalCount} </p>
              <p>courses</p>
            </div>
            <div className="border border-white w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p> {allComments?.totalCount}</p>
              <p>comments</p>
            </div>
            <div className="border border-white w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p>{teachersCounts} </p>
              <p>teachers</p>
            </div>
          </div>

          <div className="border border-white flex  w-full h-1/2">
            <div className="border border-white w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p>{inactiveUsers}</p>
              <p>inactive users</p>
            </div>
            <div className="border border-white w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p>{completedProfile?.length}</p>
              <p>completed pro</p>
            </div>
            <div className="border border-white w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p>{acceptedCommentsCount}</p>
              <p>confirmed comments</p>
            </div>
            <div className="border border-white w-1/4 h-full flex flex-col justify-center items-center ">
              <div className="border w-20 h-20">
                <img src="" alt="" />
              </div>
              <p>{notAcceptedCommentsCount}</p>
              <p>not confirmed comments</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-white w-full h-100 flex justify-between">
        <div className="flex w-full gap-3">
          <div className="border border-white w-1/3 flex flex-col gap-4 items-center justify-between p-4 h-full">
            <p>درصد تکمیل پروفایل کاربران (بالای 10 درصد)</p>
            <div className=" w-55">
              <CircularProgressbar
                value={completeMore10Percentage}
                text={`% ${completeMore10Percentage}`}
              />
            </div>
            <div className=" flex items-center gap-4">
              <div>
                <p>تعداد بالای 10 درصد</p>
                <p>{complete10} </p>
              </div>
              <div>
                <p>تعداد پایین 10 درصد</p>
                <p>{users?.totalCount - complete10} </p>
              </div>
            </div>
          </div>
          <div className="border border-white w-1/3 flex flex-col items-center p-4 justify-between h-full">
            <p>درصد تکمیل پروفایل کاربران (بالای 40 درصد)</p>
            <div className=" w-55">
              <CircularProgressbar
                value={completeMore40Percentage}
                text={`% ${completeMore40Percentage} `}
              />
            </div>
            <div className=" flex items-center gap-4">
              <div>
                <p>تعداد بالای 40 درصد</p>
                <p>{complete40} </p>
              </div>
              <div>
                <p>تعداد پایین 40 درصد</p>
                <p>{users?.totalCount - complete40} </p>
              </div>
            </div>
          </div>

          <div className="border border-white flex flex-col items-center p-4 justify-between w-1/3 h-full">
            <p> درصد دوره های فعال</p>
            <div className=" w-55">
              <CircularProgressbar
                value={activeCoursesPercentage}
                text={`% ${activeCoursesPercentage} `}
              />
            </div>
            <div className=" flex items-center gap-4">
              <div>
                <p>تعداد فعال</p>
                <p>{activeCourses} </p>
              </div>
              <div>
                <p>تعداد غیر فعال</p>
                <p>{coursesData?.totalCount - activeCourses} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-white">
        <p className="mt-4">دسته بندی کاربران بر اساس نقش</p>
        <div className="border border-white  mt-10">
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
