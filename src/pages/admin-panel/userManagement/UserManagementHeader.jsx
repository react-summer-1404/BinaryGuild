import React from "react";
import { useTranslation } from "react-i18next";

const UserManagementHeader = () => {
  const { t } = useTranslation();

  return (
    <div className=" w-full flex justify-between items-center gap-4">
      <div className="border border-white bg-[#222] rounded-xl w-1/4 h-30 flex items-center justify-between p-4">
        <div className="flex flex-col items-start">
          <div>api</div>
          <p className="mt-2">{t("Users")}</p>
        </div>
        <div className="border border-black w-13 h-13 rounded-[100%] ">img</div>
      </div>
      <div className="border border-white bg-[#222] rounded-xl w-1/4 h-30 flex items-center justify-between p-4">
        <div className="flex flex-col items-start">
          <div>api</div>
          <p className="mt-2">{t("Admins")} </p>
        </div>
        <div className="border border-black w-13 h-13 rounded-[100%] ">img</div>
      </div>
      <div className="border border-white bg-[#222] rounded-xl w-1/4 h-30 flex items-center justify-between p-4">
        <div className="flex flex-col items-start"> 
          <div>api</div>
          <p className="mt-2">{t("Teachers")}</p>
        </div>
        <div className="border border-black w-13 h-13 rounded-[100%] ">img</div>
      </div>
      <div className="border border-white bg-[#222] rounded-xl w-1/4 h-30 flex items-center justify-between p-4">
        <div className="flex flex-col items-start">
          <div>api</div>
          <p className="mt-2">{t("Students")}</p>
        </div>
        <div className="border border-black w-13 h-13 rounded-[100%] ">img</div>
      </div>
    </div>
  );
};

export default UserManagementHeader;
