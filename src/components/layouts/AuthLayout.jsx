import React from "react";
import Register from "../../pages/authentication/Register";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <>
      <div>common part</div>
      <Outlet/>
    </>
  );
};

export default AuthLayout;
