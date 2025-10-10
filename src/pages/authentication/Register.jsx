import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div>ثبت نام</div>
      <Link to={"/login"}><p>ورود به حساب کاربری</p></Link>
    </>
  );
};

export default Register;
