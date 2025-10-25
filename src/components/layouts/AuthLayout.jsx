import React from "react";
import { Outlet } from "react-router-dom";
import Auth from "../common/authenticationCommon/Auth";
const AuthLayout = () => {
  return (
    <div className="bg-authbackground font-sans min-h-screen flex flex-col md:flex-row-reverse gap-15 items-center justify-center md:items-stretch pb-10 p-5 md:p-10">
      <div className="hidden lg:block  border-3 border-boarder rounded-4xl p-10 w-[48%] bg-authcommonbackground">
        <Auth />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
