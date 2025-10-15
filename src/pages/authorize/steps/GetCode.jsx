import React from "react";
import AuthButton from "../../../components/common/button/AuthButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GetNewCode from "./GetNewCode";
import axios from "axios";
const GetCode = ({ onNext, onPrevious,phoneNumber }) => {
  const [getCode, setGetCode] = useState("");
  const [errorCode, setErrorCode] = useState("");

  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/");
  };

  const handleCode = (e) => {
    const value = e.target.value;
    setGetCode(value);
  };

  const handleError = async(e) => {
    e.preventDefault();
    if (getCode.trim() === "") {
      setErrorCode("لطفا کد معتبر وارد کنید");
    } else {
      setErrorCode("");
    }
    try{
      const response = await axios.post("https://sepehracademy.liara.run/Sign/VerifyMessage",{
        phoneNumber:phoneNumber,
        code:getCode
      });
      console.log(response.data)
      onNext();
    }catch(error){
      console.log(error);
      setErrorCode("کد وارد شده معتبر شده نیست")
    }
  };

  return (
    <div className="w-4/5">
      <h2 className="text-[28px] font font-[700] text-black mt-[75px]">
        تایید کد ارسال شده{" "}
      </h2>
      <p className="text-[#707070] font-[500] mt-[12px] text-[16px]">
        لطفا کد ارسال شده به شماره همراه {phoneNumber} را وارد کنید{" "}
      </p>

      <form
        onSubmit={handleError}
        action=""
        className="flex flex-col mt-[48px]"
      >
        <label
          className="text-[#2F2F2F] font-[600] text-[16px]"
          htmlFor="getCode"
        >
          کد تایید{" "}
        </label>
        <input
          className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
          type="number"
          id="code"
          value={getCode}
          onChange={handleCode}
          placeholder=" کد تایید خود را وارد کنید"
        />
        <p className="mt-[4px] font-bold text-[12px] text-[red]">{errorCode}</p>
        <GetNewCode/>
        <AuthButton text={"کد تایید خود را وارد کنید"} />
      </form>

      <div className=" w-[397px] flex flex-col items-center justify-center ">
        <div
          onClick={onPrevious}
          className="cursor-pointer mt-[32px] flex items-center justify-center border-[1px] border-[#DCDCDC] rounded-[34px] w-[141px] h-[40px]"
        >
          <p className="text-[#3772FF]">{"بازگشت"}</p>
        </div>
      </div>
    </div>
  );
};

export default GetCode;
