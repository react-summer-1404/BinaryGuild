import React from "react";
import AuthButton from "../../../components/common/button/AuthButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GetPhoneNumberLogin = ({onNext}) => {
  const [getUserInfo, setGetUserInfo] = useState("");
  const [userError, setUserError] = useState("");
  const [getPassword, setGetPassword] = useState("");
  const [passError, setPassError] = useState();

  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/");
  };

  const handleUserInfo = (e) => {
    const value = e.target.value;
    setGetUserInfo(value);
  };
  const handlePass = (e) => {
    const value = e.target.value;
    setGetPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getUserInfo.trim() === "") {
      setUserError("ایمیل نمی تواند خالی باشد");
    } else {
      setUserError(null);
    }

    if (getPassword.trim() === "") {
      setPassError("لطفا رمز عبور خود را وارد کنید ");
    } else {
      setPassError(null);
    }

    if (getUserInfo.trim() !== "" && getPassword.trim() !== "") {
      console.log("فرم درسته");
      onNext();
    }
  };

  return (
    <div className="w-4/5">
      <h2 className="text-[28px] font font-[700] text-black mt-[75px]">
        خوش برگشتی!{" "}
      </h2>
      <p className="text-[#707070] font-[500] mt-[12px] text-[16px]">
        لطفا شماره همراه یا ایمیل و رمزعبور خود را برای ورود به حساب کاربری را
        وارد کنید{" "}
      </p>

      <div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col mt-[48px]"
        >
          <label
            className="text-[#2F2F2F] font-[600] text-[16px]"
            htmlFor="email/number"
          >
            شماره همراه یا ایمیل{" "}
          </label>
          <input
            className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
            type="text"
            id="email"
            value={getUserInfo}
            onChange={handleUserInfo}
            placeholder="شماره همراه یا ایمیل خود را وارد کنید"
          />
          <p className="mt-[4px] font-bold text-[12px] text-[red]">
            {userError}
          </p>
          <label
            className="text-[#2F2F2F] font-[600] text-[16px]"
            htmlFor="password"
          >
            رمزعبور{" "}
          </label>
          <input
            className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
            type="password"
            id="password"
            value={getPassword}
            onChange={handlePass}
            placeholder="رمزعبور خود را وارد کنید"
          />
          <p className="mt-[4px] font-bold text-[12px] text-[red]">
            {passError}
          </p>

          <div className="flex justify-between mt-[30px] w-[398px]">
            <div className="flex justify-start items-center">
              <input
                type="checkbox"
                id="checkbox"
                className="w-6 h-6 border-[1px] border-[#DCDCDC] rounded "
              />

              <p className="text-[#2F2F2F] font-[600] text-[16px] ">
                مرا به خاطر بسپار
              </p>
            </div>
            <Link className="flex items-center cursor-pointer bg-[#F6F6F6] rounded-[40px] w-[175px] h-[36px] " to={"/forgetPassword"}>
                <p className="text-[#3772FF] font-[600] text-[14px]">
                  رمزعبور را فراموش کردید؟
                </p>
            </Link>
          </div>

          <AuthButton text={" ورود به حساب"} type="submit" />
        </form>
      </div>

      <div className=" w-[397px] flex flex-col items-center justify-center ">
        <div className="flex mt-[16px]">
          <p className="text-[#2F2F2F] font-[600] text-[16px]">
            حساب کاربری ندارید؟
          </p>
          <Link className="pr-[8px]" to={"/register"}>
            <p className="text-[#3772FF] font-[600] text-[16px]">
              ایجاد حساب کاربری{" "}
            </p>
          </Link>
        </div>

        <div
          onClick={GoHome}
          className="cursor-pointer mt-[32px] flex items-center justify-center border-[1px] border-[#DCDCDC] rounded-[34px] w-[141px] h-[40px]"
        >
          <p className="text-[#3772FF]">{"صفحه اصلی"}</p>
        </div>
      </div>
    </div>
  );
};

export default GetPhoneNumberLogin;
