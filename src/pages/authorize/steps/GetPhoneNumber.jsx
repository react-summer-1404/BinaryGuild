import React from "react";
import AuthButton from "../../../components/common/button/AuthButton";
import { Link } from "react-router-dom";
import { useState } from "react";
const GetPhoneNumber = () => {

    const [getphonNumber, setGetPhonNumber] = useState("");

    const handleNumber=(e)=>{
      const value = e.target.value;
      setGetPhonNumber(value);
    }
  return (
    <div className="w-4/5 mt-[55px]">
      <h2 className="text-[28px] font font-[700] ">خوش اومدی! </h2>
      <p className="text-[#707070] font-[500] mt-[12px] text-[16px]">
        لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود
      </p>

      <form action="" className="flex flex-col mt-[48px]">
        <label
          className="text-[#2F2F2F] font-[600] text-[16px]"
          htmlFor="phoneNumber"
        >
          شماره همراه
        </label>
        <input
          className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
          type="number"
          id="number"
          value={getphonNumber}
          onChange={handleNumber}
          placeholder="شماره همراه خود را وارد کنید"
        />
      </form>

      <AuthButton text={"ارسال کد تایید"} />
      <div className=" w-[397px] flex flex-col items-center justify-center ">
        <div className="flex mt-[16px]">
          <p className="text-[#2F2F2F] font-[600] text-[16px]">
            حساب کاربری دارید؟
          </p>
          <Link className="pr-[8px]" to={"/login"}>
            <p className="text-[#3772FF] font-[600] text-[16px]">
              ورود به حساب کاربری
            </p>
          </Link>
        </div>

        <div className="mt-[32px] flex items-center justify-center border-[1px] border-[#DCDCDC] rounded-[34px] w-[141px] h-[40px]">
          <p className="text-[#3772FF]">{"صفحه اصلی"}</p>
        </div>
      </div>
    </div>
  );
};

export default GetPhoneNumber;
