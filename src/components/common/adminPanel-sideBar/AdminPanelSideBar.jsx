import React, { useState } from "react";
import PanelMenu from "../panel-header/panel-menu/PanelMenu";
import { useTranslation } from "react-i18next";
import Logo from "../logo/logo";
import { Link } from "react-router-dom";
const AdminPanelSideBar = () => {
  const { t } = useTranslation();
  const [openUser, setOpenUser] = useState(false);

  const handleOpenUser = () => {
    setOpenUser(!openUser);
  };

  return (
    <div className=" rounded-2xl w-full h-full ">
      <div className=" w-full">
        {" "}
        <div className="pb-8">
          <Logo />
        </div>
      </div>

      <ul className="shadow-small shadow-amber-50 rounded-2xl bg-[#222] mt-4 text-start p-4">
        <Link to={"Dashboard"}>
          <li className="w-full h-full cursor-pointer pt-2 pb-2 ">{t("adminMenuText1")}</li>
        </Link>
        <li  className="mt-5 w-full h-full pt-2 pb-2">
          <span className="cursor-pointer hover:text-blue" onClick={handleOpenUser} >{t("adminMenuText2")}</span>
          {openUser && (
            <ul  className=" p-2 ">
              <Link to={"User-management"}>
                {" "}
                <li className="mt-3">{t("userList")}</li>
              </Link>

              <Link to={"User-Job-history"}>
                {" "}
                <li className="mt-4">{t("jobHistory")}</li>
              </Link>
            </ul>
          )}
        </li>
        <li className="w-full h-full hover:text-blue cursor-pointer pt-1 pb-1 mt-5">{t("adminMenuText3")}</li>
        <li className="w-full h-full hover:text-blue cursor-pointer pt-1 pb-1 mt-5">{t("adminMenuText4")}</li>
        <li className="w-full hover:text-blue cursor-pointer pt-1 pb-1 h-full mt-5">{t("adminMenuText5")}</li>
        <li className="w-full hover:text-blue cursor-pointer pt-1 pb-1 h-full mt-5">{t("adminMenuText6")}</li>
        <li className="w-full hover:text-blue cursor-pointer pt-1 pb-1 h-full mt-5">{t("adminMenuText7")}</li>
      </ul>
    </div>
  );
};

export default AdminPanelSideBar;
