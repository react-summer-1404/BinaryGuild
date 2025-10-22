import React from "react";
import AuthButton from "../../../components/common/button/AuthButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SendVerifyMessage } from "../../../core/services/api/post-data";
import { useTranslation } from "react-i18next";

const GetPhoneNumber = ({ setPhoneNumber, onNext }) => {
  const [getphonNumber, setGetPhonNumber] = useState("");
  const [numberError, setNumberError] = useState("");

  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/");
  };

  const { t } = useTranslation();

  const handleNumber = (e) => {
    const value = e.target.value;
    setGetPhonNumber(value);
    setPhoneNumber(value);
  };

  const handleError = async (e) => {
    e.preventDefault();

    if (getphonNumber.trim() === "") {
      setNumberError("لطفا شماره تلفن خود را وارد کنید");
      return;
    } else {
      setNumberError("");
    }
    try {
      const response = await SendVerifyMessage(getphonNumber);

      console.log(response, "response");
      onNext();
    } catch (error) {
      console.log("error", error.response);
      const serverMessage = error.response?.data?.message || "خطا در ارسال کد";
      setNumberError(serverMessage);
    }
  };

  return (
    <div className="flex flex-col items-start">
      <h2 className="text-[28px] font font-[700] text-black mt-[75px]">
        {t("RegisterHead")}
      </h2>
      <p className="text-[#707070] font-[500] mt-[12px] text-[16px] text-right">
        {t("RegisterCaption")}{" "}
      </p>

      <form
        onSubmit={handleError}
        action=""
        className="flex flex-col mt-[48px]"
      >
        <label
          className="text-right text-[#2F2F2F] font-[600] text-[16px]"
          htmlFor="phoneNumber"
        >
          {t("RegisterLabel")}{" "}
        </label>
        <input
          className="mt-[8px] text-left placeholder:text-right w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
          type="tel"
          id="number"
          value={getphonNumber}
          onChange={handleNumber}
          placeholder={t("RegisterPlaceholder")}
        />
        <p className="mt-[4px] font-bold text-[12px] text-[red]">
          {numberError}
        </p>
        <AuthButton text={t("SendConfirmedCode")} type="submit" />
      </form>

      <div className=" w-[397px] flex flex-col items-center justify-center ">
        <div className="flex mt-[16px]">
          <p className="text-[#2F2F2F] font-[600] text-[16px]">
           {t("HaveAccount")}
          </p>
          <Link className="pr-[8px]" to={"/login"}>
            <p className="text-[#3772FF] font-[600] text-[16px]">
              {t("GoToAccount")}{" "}
            </p>
          </Link>
        </div>

        <div
          onClick={GoHome}
          className="hidden md:cursor-pointer md:mt-[32px] md:flex md:items-center md:justify-center md:border-[1px] md:border-[#DCDCDC] md:rounded-[34px] md:w-[141px] md:h-[40px]"
        >
          <p className="text-[#3772FF]">{t("GoHomePage")}</p>
        </div>
      </div>
    </div>
  );
};

export default GetPhoneNumber;
