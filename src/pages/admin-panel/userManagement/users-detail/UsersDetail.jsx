import React, { useState } from "react";
import { UserDetail } from "../../../../core/services/api/get-data";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import UserDetailComments from "./UserDetailComments";
import UserDetailCourse from "./UserDetailCourse";
import UserDetailReservedCourse from "./UserDetailReservedCourse";
import UserOtherInfo from "./UserOtherInfo";

const UsersDetail = ({ onCloseDetail, UserId }) => {
  const { t } = useTranslation();
  const[activeTab,setActiveTab]=useState("courses")


  const {
    data: usersDetail,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users", UserId],
    queryFn: () => UserDetail(UserId),
  });

  const userCoursesCount = usersDetail?.courses?.length;
  const userReservedCoursesCount = usersDetail?.coursesReseves?.length;

  if (isLoading) return <p>Loading... please wait</p>;
  if (isError) return <p>An Error accoured :( </p>;

  return (
    <div className=" flex gap-5 border-white h-[93%] top-5 fixed w-[76%] z-100   ">
      <div className="border border-black shadow-2xl bg-[#252323] h-full w-[30%] p-4 pt-2 ">
        <div
          onClick={onCloseDetail}
          className="border border-white bg-amber-50 w-6 h-6"
        ></div>

        <div className=" border border-white flex flex-col  ">
          {/* img */}
          <div className=" border border-white p-2 flex justify-center items-center">
            <img
              src={usersDetail.currentPictureAddress}
              className=" border border-white rounded-full w-20 h-20 "
            />
          </div>

          <p className=" border border-white h-8">{usersDetail.fName}</p>

          {/* roles with map */}
          <div className=" border border-white h-10 flex ">
            {usersDetail.roles.map((item) => (
              <div>{item.roleName} </div>
            ))}
          </div>

          {/* course and reserved */}
          <div className=" border border-white h-15 flex items-center gap-4 ">
            <div className=" border border-white h-[30px]  flex gap-2  text-[14px]">
              <p> {userCoursesCount} </p>
              <p>{t("Courses")}</p>
            </div>

            <div className=" border border-white h-[30px] flex gap-2 text-[14px]  ">
              <p>{userReservedCoursesCount}</p>
              <p>{t("reservedCourses")}</p>
            </div>
          </div>

          {/* details */}
          <div className=" border border-white flex flex-col  gap-3  ">
            <h4 className="text-start">details</h4>
            <div className="flex gap-2">
              <p>user name:</p>
              {usersDetail.userName}
              <p></p>{" "}
            </div>
            <div className="flex gap-2">
              <p>about:</p>
              {usersDetail.userAbout}
              <p></p>{" "}
            </div>

            <div className="flex gap-2">
              <p>email:</p>
              {usersDetail.gmail}
              <p></p>{" "}
            </div>
            <div className="flex gap-2">
              <p>status:</p>
              {usersDetail.active ? "active" : "deactive"}
              <p></p>{" "}
            </div>
            <div className="flex gap-2">
              <p>gender:</p>
              {usersDetail.gender ? "Male" : "Female"}
              <p></p>{" "}
            </div>

            <div className="flex gap-2">
              <p>mobile number:</p>
              {usersDetail.phoneNumber}
              <p></p>{" "}
            </div>
          </div>

          {/* buttons */}
          <div className=" border border-white flex justify-center gap-4 items-center mt-3 ">
            <button className=" border border-white rounded-xl  p-2 w-18 ">
              edit
            </button>
            <button className=" border border-white p-2 w-22 rounded-xl ">
              deactive
            </button>
          </div>
        </div>
      </div>

      <div className="border border-black shadow-2xl bg-[#252323] h-full w-[70%] ">
        <div className="border border-white h-[65px] flex justify-star items-center gap-4 ">
          <div onClick={()=>setActiveTab("courses")} className="border border-white p-5  ">courses</div>
          <div onClick={()=>setActiveTab("reserved")} className="border border-white p-5  ">reserved</div>
          <div onClick={()=>setActiveTab("comments")} className="border border-white p-5  ">comments</div>
          <div onClick={()=>setActiveTab("other info")} className="border border-white p-5  ">other info</div>
        </div>

        {/* pages */}

        <div>
          {activeTab === "courses" && <UserDetailCourse/> } 
          {activeTab === "reserved" && <UserDetailReservedCourse/> } 
          {activeTab === "comments" && <UserDetailComments/> } 
          {activeTab === "other info" &&  <UserOtherInfo/>} 
        </div>

      </div>
    </div>
  );
};

export default UsersDetail;
