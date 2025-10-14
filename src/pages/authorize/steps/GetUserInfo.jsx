import React from "react";
import AuthButton from "../../../components/common/button/AuthButton";
import { useState } from "react";
const GetUserInfo = ({ onPrevious }) => {
  const [getEmail, setGetEmail] = useState("");
  const [getPassword, setGetPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passError, setPassError] = useState();
  

  const handleEmail = (e) => {
    const value = e.target.value;
    setGetEmail(value);
  };

  const handlePass = (e) => {
    const value = e.target.value;
    setGetPassword(value);
  };

  const handleSubmit=(e) =>{
    e.preventDefault();
    if(getEmail.trim() === ""){
      setEmailError("ایمیل نمی تواند خالی باشد");
    }else{setEmailError(null)}

    if(getPassword.trim() === ""){
      setPassError("لطفا رمز عبور خود را وارد کنید ");
    }else{setPassError(null)} 
    
    if(getEmail.trim() !== "" && getPassword.trim() !== ""){
      console.log("فرم درسته")
    }
  }



  return (
    <div className="w-4/5">

      <h2 className="text-[28px] font font-[700] text-black mt-[75px]"></h2>
      <p className="text-[#707070] font-[500] mt-[12px] text-[16px]">   لطفا اطلاعات اولیه خواسته شده را وارد کنید </p>

      <div>
        <form onSubmit={handleSubmit} action="" className="flex flex-col mt-[48px]">
          <label
            className="text-[#2F2F2F] font-[600] text-[16px]"
            htmlFor="email"
          >
            ایمیل{" "}
          </label>
          <input
            className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
            type="email"
            id="email"
            value={getEmail}
            onChange={handleEmail}
            placeholder="ایمیل خود را وارد کنید"
          />
          <p className="mt-[4px] font-bold text-[12px] text-[red]">{emailError}</p>
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
          <p className="mt-[4px] font-bold text-[12px] text-[red]">{passError}</p>
      <AuthButton text={" تایید"} type="submit"/>

        </form>
      </div>

      <div className=" w-[397px] flex flex-col items-center justify-center ">
        <div
          onClick={onPrevious}
          className="cursor-pointer mt-[32px] flex items-center justify-center border-[1px] border-[#DCDCDC] rounded-[34px] w-[141px] h-[40px]">
          <p className="text-[#3772FF]">{"بازگشت"}</p>
        </div>
      </div>

    </div>
  );
};

export default GetUserInfo;
