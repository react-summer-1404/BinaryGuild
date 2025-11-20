import React, { useState } from "react";
import { UserDetail } from "../../../../core/services/api/adminPanel/get-data";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import UserDetailComments from "./UserDetailComments";
import UserDetailCourse from "./UserDetailCourse";
import UserDetailReservedCourse from "./UserDetailReservedCourse";
import UserOtherInfo from "./UserOtherInfo";
import EditUser from "./EditUser";
import { Spinner } from "@heroui/spinner";

const UsersDetail = ({ onCloseDetail, UserId }) => {
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

  if (isLoading)
    return (
      <Spinner
        classNames={{ label: "text-foreground mt-4" }}
        size="lg"
        variant="wave"
      />
    );
  if (isError) return <p>An Error accoured :( </p>;

  return (
    <div className=" flex gap-5 h-full  absolute bg-black-900 w-full z-100   ">
      <div className="shadow-small shadow-amber-50   bg-[#252323] h-full w-[30%] p-4 pt-2 ">
        <div
          onClick={onCloseDetail}
          className=" p-1 rounded-small bg-[#5f0505] cursor-pointer w-6 h-6 "
        >
          <img src="../../../../src/assets/icons/close.png" />
        </div>

        <div className=" rounded-2xl  shadow-small shadow-amber-50 pb-4 flex flex-col gap-3 mt-3 ">
          {/* img */}
          <div className="  p-2 flex justify-center items-center">
            <img
              src={usersDetails.currentPictureAddress}
              onError={(e) => {
                e.target.src = "../../../../assets/icons/Wumpus – 09.png";
              }}
              className=" border border-white rounded-full w-20 h-20 "
            />
          </div>

          <p className=" h-8">{usersDetails.fName}</p>

          {/* roles with map */}
          {usersDetails.roles.length > 0 && (
            <div className=" h-10 flex items-center justify-center flex-wrap gap-2 p-3">
              {usersDetails.roles.map((item) => (
                <div className="border border-white pr-1 pl-1 rounded-small h-8 flex justify-center items-center text-small bg-[#291b73]">
                  {item.roleName}{" "}
                </div>
              ))}
            </div>
          )}

          {/* course and reserved */}
          <div className="  h-15 flex items-center justify-center gap-4 ">
            <div className="  h-[30px]  flex gap-2  text-[14px]">
              <p> {userCoursesCount} </p>
              <p>{t("Courses")}</p>
            </div>

            <div className="  h-[30px] flex gap-2 text-[14px]  ">
              <p>{userReservedCoursesCount}</p>
              <p>{t("reservedCourses")}</p>
            </div>
          </div>

          {/* details */}
          <div className=" flex flex-col   gap-3 p-3 ">
            <h4 className="text-start font-bold text-2xl">
              {" "}
              {t("userDetails")}{" "}
            </h4>
            <div className="flex items-center mt-3 gap-2">
              <p className="whitespace-nowrap">{t("userName")}: </p>
              <p className="text-small">
                {" "}
                {usersDetails.userName ? (
                  <p className="font-bold">{usersDetails.userName}</p>
                ) : (
                  <p>__</p>
                )}
              </p>{" "}
            </div>

            <div className="flex items-center gap-2">
              <p>{t("email")}: </p>
              <p className="text-small">
                {usersDetails.gmail ? (
                  <p className="font-bold">{usersDetails.gmail}</p>
                ) : (
                  <p>__</p>
                )}
              </p>{" "}
            </div>
            <div className="flex items-center gap-2">
              <p>{t("status")}:</p>
              <p className="text-small">
                {usersDetails.active ? t("active") :  t("deActive")}
              </p>{" "}
            </div>

            <div className="flex items-center gap-2">
              <p>{t("nationalCode")}:</p>
              <p className="text-small">
                {usersDetails.nationalCode ? (
                  <p className="font-bold">{usersDetails.nationalCode}</p>
                ) : (
                  <p>__</p>
                )}
              </p>{" "}
            </div>

            <div className="flex items-center gap-2">
              <p> {t("gender")}:</p>
              <p className="text-small">
                {usersDetails.gender ? t("male") :  t("female")}
              </p>{" "}
            </div>

            <div className="flex items-center gap-2">
              <p> {t("phoneNumber")}:</p>
              <p className="text-small">
                {usersDetails.phoneNumber ? (
                  <p className="font-bold">{usersDetails.phoneNumber}</p>
                ) : (
                  <p>__</p>
                )}
              </p>{" "}
            </div>
          </div>

          {/* buttons */}
          <div className="  relative flex justify-center gap-4 items-center mt-3 ">
            <button
              onClick={handleOpenEdit}
              className=" cursor-pointer  shadow-small shadow-amber-50 bg-[#291b73] rounded-xl font-bold  p-2 w-20 "
            >
              {t("edit")}
            </button>

            <button
              onClick={handleOpenActive}
              className="cursor-pointer  shadow-small shadow-amber-50 bg-[#5f0505] p-2 font-bold rounded-xl "
            >
              {t("deactive")}
            </button>

            {openActive && (
              <div className="border border-white z-200 fixed w-100 h-70 top-40 right-150 bg-black-900">
                <div className="border h-2/5">
                  <img src="" alt="" />
                </div>
                <h2 className="text-[26px] ">Are u sure?</h2>
                <div>
                  <button
                    type="submit"
                    className="border border-white pl-3 pr-3"
                  >
                    yes
                  </button>
                  <button
                    onClick={() => setOpenActive(false)}
                    type="button"
                    className="border border-white pl-3 pr-3"
                  ></button>
                </div>
              </div>
            )}
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

      <div className="rounded-2xl  shadow-small shadow-amber-50  bg-[#252323] h-full w-[70%] ">
        <div className=" h-[10%] flex justify-star  items-center pr-3 gap-4 ">
          <div
            onClick={() => setActiveTab("courses")}
            className=" border-white p-3 cursor-pointer rounded-sm bg-[#291b73] "
          >
            {t("courses")}
          </div>
          <div
            onClick={() => setActiveTab("reserved")}
            className=" border-white p-3 cursor-pointer rounded-sm bg-[#291b73] "
          >
            {t("reserved")}
          </div>
          <div
            onClick={() => setActiveTab("comments")}
            className=" border-white p-3 cursor-pointer rounded-sm bg-[#291b73] "
          >
            {t("comments")}
          </div>
          <div
            onClick={() => setActiveTab("other info")}
            className=" border-white p-3 cursor-pointer rounded-sm bg-[#291b73] "
          >
            {t("otherInfo")}
          </div>
        </div>

        {/* pages */}

        <div className="p-3">
          {activeTab === "courses" && (
            <UserDetailCourse usersDetails={usersDetails} />
          )}
          {activeTab === "reserved" && (
            <UserDetailReservedCourse usersDetails={usersDetails} />
          )}
          {activeTab === "comments" && usersDetails && (
            <UserDetailComments usersDetails={usersDetails} />
          )}
          {activeTab === "other info" && (
            <UserOtherInfo usersDetails={usersDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersDetail;
