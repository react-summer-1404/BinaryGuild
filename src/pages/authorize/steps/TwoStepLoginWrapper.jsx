import AuthButton from "../../../components/common/button/AuthButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TwoStepLoginWrapper = ({ onPrevious }) => {
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

  const handleError = (e) => {
    e.preventDefault();
    if (getCode.trim() === "") {
      setErrorCode("لطفا کد معتبر وارد کنید");
    } else {
      setErrorCode("");
      
    }
  };

  return (
    <div className="w-4/5">
      <h2 className="text-[28px] font font-[700] text-black mt-[75px]">
        تایید کد دو مرحله‌ای!{" "}
      </h2>
      <p className="text-[#707070] font-[500] mt-[12px] text-[16px]">
        کد دومرحله‌ای به شماره همراه شما ارسال شد لطفا کد را وارد کنید
      </p>

      <div>
        <form
          onSubmit={handleError}
          action=""
          className="flex flex-col mt-[48px]"
        >
          <label
            className="text-[#2F2F2F] font-[600] text-[16px]"
            htmlFor="email/number"
          >
            کد دو مرحله‌ای{" "}
          </label>
          <input
            className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
            type="text"
            id="email"
            value={getCode}
            onChange={handleCode}
            placeholder="کد دو مرحله‌ای خود را وارد کنید"
          />
          <p className="mt-[4px] font-bold text-[12px] text-[red]">
            {errorCode}
          </p>

          <AuthButton text={" ورود به حساب"} type="submit" />
        </form>
      </div>
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

export default TwoStepLoginWrapper;
