import React, { useState } from "react";
import { UserDetail } from "../../../../core/services/api/get-data";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import UserDetailComments from "./UserDetailComments";
import UserDetailCourse from "./UserDetailCourse";
import UserDetailReservedCourse from "./UserDetailReservedCourse";
import UserOtherInfo from "./UserOtherInfo";
import EditUser from "./EditUser";

const UsersDetail = ({ onCloseDetail, UserId, }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openActive, setOpenActive] = useState(false);

  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("courses");

  const {
    data: usersDetails,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users", UserId],
    queryFn: () => UserDetail(UserId),
  });


 
  const handleOpenActive = () => {
    setOpenActive(!openActive);
  };

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };






  const userCoursesCount = usersDetails?.courses?.length;
  const userReservedCoursesCount = usersDetails?.coursesReseves?.length;

  if (isLoading) return <p>Loading... please wait</p>;
  if (isError) return <p>An Error accoured :( </p>;

  return (
    <div className=" flex gap-5 border-white h-full  absolute bg-[#252323] w-full z-100   ">
      <div className="border border-black shadow-2xl  bg-[#252323] h-full w-[30%] p-4 pt-2 ">
        <div
          onClick={onCloseDetail}
          className="border border-white bg-amber-50 w-6 h-6"
        ></div>

        <div className=" border border-white flex flex-col  ">
          {/* img */}
          <div className=" border border-white p-2 flex justify-center items-center">
            <img
              src={usersDetails.currentPictureAddress}
              className=" border border-white rounded-full w-20 h-20 "
            />
          </div>

          <p className=" border border-white h-8">{usersDetails.fName}</p>

          {/* roles with map */}
          <div className=" border border-white h-10 flex ">
            {usersDetails.roles.map((item) => (
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
              {usersDetails.userName}
              <p></p>{" "}
            </div>

            <div className="flex gap-2">
              <p>email:</p>
              {usersDetails.gmail}
              <p></p>{" "}
            </div>
            <div className="flex gap-2">
              <p>status:</p>
              {usersDetails.active ? "active" : "deactive"}
              <p></p>{" "}
            </div>

            <div className="flex gap-2">
              <p>natinal code:</p>
              {usersDetails.nationalCode}
              <p></p>{" "}
            </div>

            <div className="flex gap-2">
              <p>gender:</p>
              {usersDetails.gender ? "Female" : "Male"}
              <p></p>{" "}
            </div>

            <div className="flex gap-2">
              <p>mobile number:</p>
              {usersDetails.phoneNumber}
              <p></p>{" "}
            </div>
          </div>

          {/* buttons */}
          <div className=" border border-white relative flex justify-center gap-4 items-center mt-3 ">
            <button
              onClick={handleOpenEdit}
              className=" border border-white rounded-xl  p-2 w-18 "
            >
              edit
            </button>

            <button
              onClick={handleOpenActive}
              className=" border border-white p-2 w-22 rounded-xl "
            >
              deactive
            </button>

            {openActive && <div className="border border-white fixed w-100 h-70 top-40 right-150 bg-black-900">

              <div className="border h-2/5"><img src="" alt="" /></div>
              <h2 className="text-[26px] ">Are u sure?</h2>
              <div>
                <button  type="submit" className="border border-white pl-3 pr-3" >yes</button>
                <button onClick={()=>setOpenActive(false)} type="button" className="border border-white pl-3 pr-3" ></button>

              </div>
              </div>}
          </div>
          {openEdit && (
            <EditUser
              UserId={UserId}
              usersDetails={usersDetails}
              onCloseEdit={() => setOpenEdit(false)}
            />
          )}
        </div>
      </div>

      <div className="border border-black shadow-2xl bg-[#252323] h-full w-[70%] ">
        <div className=" h-[10%] flex justify-star items-center gap-4 ">
          <div
            onClick={() => setActiveTab("courses")}
            className="border border-white p-5 cursor-pointer rounded-medium "
          >
            courses
          </div>
          <div
            onClick={() => setActiveTab("reserved")}
            className="border border-white p-5 cursor-pointer rounded-medium "
          >
            reserved
          </div>
          <div
            onClick={() => setActiveTab("comments")}
            className="border border-white p-5 cursor-pointer rounded-medium "
          >
            comments
          </div>
          <div
            onClick={() => setActiveTab("other info")}
            className="border border-white p-5 cursor-pointer rounded-medium "
          >
            other info
          </div>
        </div>

        {/* pages */}

        <div>
          {activeTab === "courses" && (
            <UserDetailCourse usersDetails={usersDetails} />
          )}
          {activeTab === "reserved" && (
            <UserDetailReservedCourse usersDetails={usersDetails} />
          )}
          {activeTab === "comments" && usersDetails && <UserDetailComments  usersDetails={usersDetails} />}
          {activeTab === "other info" && (
            <UserOtherInfo usersDetails={usersDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersDetail;
