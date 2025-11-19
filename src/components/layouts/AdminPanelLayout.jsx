import React from "react";
import AdminPanelHeader from "../common/adminPanel-header/AdminPanelHeader";
import AdminPanelSideBar from "../common/adminPanel-sideBar/AdminPanelSideBar";
import { Outlet } from "react-router-dom";
const AdminPanelLayout = () => {
  return (
    <div className="  w-screen min-h-screen pr-10 pt-5  flex bg-black-900 flex-wrap">
      {/* */}
      <div className=" flex flex-col items-center justify-center w-[15%]  ">
        <AdminPanelSideBar />{" "}
      </div>

      <main className=" flex flex-col gap-3 text-text w-[80%] mr-auto ml-auto mb-7">
        <div className="w-full h-[10%] rounded-3xl  ">
          <AdminPanelHeader />
          
        </div>
        <div className=" rounded-3xl  h-full p-2 ">
        <Outlet />

        </div>
      </main>
    </div>
  );
};

export default AdminPanelLayout;
