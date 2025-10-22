import React from "react";
import AuthButton from "../../../components/common/button/AuthButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GetNewCode from "./GetNewCode";
import { VerifyMessage } from "../../../core/services/api/post-data";

import { useTranslation } from "react-i18next";
const GetCode = ({ onNext, onPrevious, phoneNumber }) => {
  const [getCode, setGetCode] = useState("");
  const [errorCode, setErrorCode] = useState("");

  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/");
  };
  const { t } = useTranslation();

  const handleCode = (e) => {
    const value = e.target.value;
    setGetCode(value);
  };

  const handleError = async (e) => {
    e.preventDefault();
    if (getCode.trim() === "" || getCode.trim().length !== 4) {
      setErrorCode("لطفا کد معتبر 4 رقمی وارد کنید");
    } else {
      setErrorCode("");
    }
    try {
      const response = await VerifyMessage(getCode, phoneNumber);
      console.log(response);
      if (response.success) {
        onNext();
      }
    } catch (error) {
      console.log(error);
      setErrorCode("خطا در ارسال کد، دوباره تلاش کنید");
    }
  };

  return (
    <div className="flex flex-col items-start">
      <h2 className="text-[28px] font font-[700] text-black mt-[75px]">
        {t("GetCodeHead")}
      </h2>
      <p className="text-right text-[#707070] font-[500] mt-[12px] text-[16px]">
        {t("GetCodeCaption", { phoneNumber: phoneNumber })}
      </p>

      <form
        onSubmit={handleError}
        action=""
        className="flex items-start flex-col mt-[48px]"
      >
        <label
          className="text-[#2F2F2F] font-[600] text-[16px]"
          htmlFor="getCode"
        >
          {t("GetCodeLabel")}
        </label>
        <input
          className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
          type="text"
          id="code"
          value={getCode}
          onChange={handleCode}
          placeholder={t("GetCodePlaceholder")}
        />
        <p className="mt-[4px] font-bold text-[12px] text-[red]">{errorCode}</p>
        <GetNewCode />
        <AuthButton text={t("ConfirmButton")} />
      </form>

      <div className=" w-[397px] flex flex-col items-center justify-center ">
        <div
          onClick={onPrevious}
          className="cursor-pointer mt-[32px] flex items-center justify-center border-[1px] border-[#DCDCDC] rounded-[34px] w-[141px] h-[40px]"
        >
          <p className="text-[#3772FF]">{t("GoBackButton")}</p>
          <img src="../../../../src/assets/icons/arrow-left-01.png" className="mr-0.5" />
        </div>
      </div>
    </div>
  );
};

export default GetCode;
