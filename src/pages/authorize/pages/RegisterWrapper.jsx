// import React, { useState } from "react";
import { Link } from "react-router-dom";
import Stepper from "../../Stepper";
import GetPhoneNumber from "../steps/GetPhoneNumber";
const Register = () => {
  // const [getphonNumber, setGetPhonNumber] = useState(null);
  // const [getCode, setGetCode] = useState(null);
  // const [getPassword, setGetPassword] = useState(null);

  return (
    <div className="border-3 p-10 flex flex-col text-right w-1/2 text-black">
      <Stepper/>

      <h2>خوش اومدی!</h2>
      <p>لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود</p>

<GetPhoneNumber/>

      <div className="flex">
        <p>حساب کاربری دارید؟</p>
        <Link to={"/login"}>
          <p>ورود به حساب کاربری</p>
        </Link>
      </div>

      <div>
        <p>صفحه اصلی</p>
      </div>
    </div>
  );
};

export default Register;
