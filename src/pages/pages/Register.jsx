import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="border-3 text-black w-1/2">
      <div>ثبت نام</div>
      <Link to={"/login"}><p>ورود به حساب کاربری</p></Link>
    </div>
  );
};

export default Register;
