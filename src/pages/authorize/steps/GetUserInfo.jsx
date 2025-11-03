import React from "react";
import AuthButton from "../../../components/common/button/AuthButton";
import { useState } from "react";
import { Register } from "../../../core/services/api/post-data";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GetUserInfo = ({ onPrevious }) => {
  const [getEmail, setGetEmail] = useState("");
  const [getPhoneNumber, setGetPhoneNumber] = useState("");
  const [getPassword, setGetPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passError, setPassError] = useState();
  const [phoneNumberError, setPhoneNumberError] = useState();

  const navigate = useNavigate();
  const GoLogin = () => {
    navigate("/login");
  };
  const { t } = useTranslation();

  const handleEmail = (e) => {
    const value = e.target.value;
    setGetEmail(value);
  };

  const handleNumber = (e) => {
    const value = e.target.value;
    setGetPhoneNumber(value);
  };

  const handlePass = (e) => {
    const value = e.target.value;
    setGetPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (getEmail.trim() === "") {
      setEmailError("ایمیل نمی تواند خالی باشد");
    } else {
      setEmailError(null);
    }

    e.preventDefault();
    if (getPhoneNumber.trim() === "") {
      setPhoneNumberError("شماره تلفن نمی تواند خالی باشد");
    } else {
      setPhoneNumberError(null);
    }

    if (getPassword.trim() === "") {
      setPassError("لطفا رمز عبور خود را وارد کنید ");
    } else {
      setPassError(null);
    }

    if (getEmail.trim() !== "" && getPassword.trim() !== "") {
      console.log("فرم درسته");
    }

    try {
      console.log("data before send:", {
        password: getPassword,
        gmail: getEmail,
        phoneNumber: getPhoneNumber,
      });

      const response = await Register({
        password: getPassword,
        gmail: getEmail,
        phoneNumber: getPhoneNumber,
      });
      console.log(response, "response");

      if (response?.data?.success && response.token) {
        const token = response.token;
        console.log(response);
        if (token) {
          localStorage.setItem("token", token);
          console.log(token, "token saved in localstorage");
          localStorage.getItem("token");
        }

        GoLogin();
      }
      console.log("success", GoLogin());
    } catch (error) {
      console.log(error, "خطاااااا");
    }
  };

  return (
    <div className="flex flex-col items-start">
      <h2 className="text-[28px] font font-[700] text-text mt-[75px]">
        {t("GetUserInfoHead")}{" "}
      </h2>
      <p className="text-[#707070] font-[500] mt-[12px] text-[16px]">
        {" "}
        {t("GetUserInfoCaption")}{" "}
      </p>

      <div>
        <form
          onSubmit={handleSubmit}
          className="flex items-start flex-col mt-[48px]"
        >
          <label className="text-text font-[600] text-[16px]" htmlFor="number">
            {t("GetUserPhoneLabel")}{" "}
          </label>
          <input
            className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
            type="number"
            id="number"
            value={getPhoneNumber}
            onChange={handleNumber}
            placeholder={t("GetUserPhonePlaceholder")}
          />
          <p className="mt-[4px] font-bold text-[12px] text-[red]">{phoneNumberError}</p>

          <label className="text-text font-[600] text-[16px]" htmlFor="email">
            {t("GetUserEmailLabel")}{" "}
          </label>
          <input
            className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
            type="email"
            id="email"
            value={getEmail}
            onChange={handleEmail}
            placeholder={t("GetUserEmailPlaceholder")}
          />
          <p className="mt-[4px] font-bold text-[12px] text-[red]">
            {emailError}
          </p>

          <label
            className="text-text font-[600] text-[16px]"
            htmlFor="password"
          >
            {t("GetUserPassLabel")}{" "}
          </label>
          <input
            className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
            type="password"
            id="password"
            value={getPassword}
            onChange={handlePass}
            placeholder={t("GetUserPassPlaceholder")}
          />
          <p className="mt-[4px] font-bold text-[12px] text-[red]">
            {passError}
          </p>
          <AuthButton text={t("ConfirmButton")} type="submit" />
        </form>
      </div>

      <div className=" w-[397px] flex flex-col items-center justify-center ">
        <div
          onClick={onPrevious}
          className="cursor-pointer mt-[32px] flex items-center justify-center border-[1px] border-[#DCDCDC] rounded-[34px] w-[141px] h-[40px]"
        >
          <p className="text-[#3772FF]">{t("GoBackButton")}</p>
        </div>
      </div>
    </div>
  );
};

export default GetUserInfo;
