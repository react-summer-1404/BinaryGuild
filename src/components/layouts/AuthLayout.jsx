import React from "react";
import Register from "../../pages/authentication/Register";
import { Outlet } from "react-router-dom";
import Auth from "../common/footer/authenticationCommon/Auth";
const AuthLayout = () => {
  return (
    <div className="bg-[#FCFCFC] font-sans min-h-screen p-10 m-auto flex gap-20 justify-center w-screen">
      <div className="border-3 rounded-4xl p-10 w-1/2 bg-gray-200">
        <Auth />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
