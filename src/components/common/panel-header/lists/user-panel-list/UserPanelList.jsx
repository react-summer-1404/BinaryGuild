import React from "react";
import { useTranslation } from "react-i18next";

const UserPanelList = () => {
  const { t } = useTranslation();
  const userName = JSON.parse(localStorage.getItem("userData"));

  console.log("userDatadddd", userName);

  return (
    <div className="flex flex-nowrap p-4 mr-14 w-1/9 gap-2">
      {userName?.map((value) => {
        return (
          <>
            <img
              src={value.userImage?.puctureAddress}
              onError={(e) => {
                e.target.src = "/src/assets/icons/Peppe – 07.svg";
              }}
              className="w-1/3"
            />
            <div className="flex flex-wrap w-3/5">
              <p className=" text-[12px] w-full ">
                {value.fName} {value.lName}
              </p>
              <p className=" text-[13px] ">{t("Student")}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default UserPanelList;
