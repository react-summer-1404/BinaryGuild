import React from "react";
import Register from "../../pages/authorize/pages/RegisterWrapper";
import { Outlet } from "react-router-dom";
import Auth from "../common/authenticationCommon/Auth";
const AuthLayout = () => {
  return (
    <div className="bg-[#FCFCFC] font-sans min-h-screen p-10 m-auto  flex flex-row-reverse gap-15 justify-center">
      <div className="border-3 rounded-4xl p-10 w-[748px] bg-gray-200">
        <Auth />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
