import React from "react";
import AuthButton from "../../../components/common/button/AuthButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SendVerifyMessage } from "../../../core/services/api/post-data";
import { useTranslation } from "react-i18next";
import HomeButton from "../../../components/common/button/HomeButton";
import toast, { Toaster } from "react-hot-toast";

const GetEmail = ({ onNext, setGetEmail: sendEmail }) => {
  const [getEmail, setGetEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const { t } = useTranslation();

  const handleEmail = (e) => {
    const value = e.target.value;
    setGetEmail(value);
  };

  const handleError = async (e) => {
    e.preventDefault();

    if (getEmail.trim() === "" || !getEmail.includes("@") ||!getEmail.includes(".com"))  {
        toast.error(t("gmailError"));
      return;
    } else {
      setEmailError("");

    }
    localStorage.removeItem("token");
    try {
      const response = await SendVerifyMessage(getEmail);
      console.log(response, "response");
      sendEmail(getEmail);
      onNext();
    } catch (error) {
      console.log("error", error.response);
      if (error.response.status === 400) {
        toast.error(t("RegisterNotifyErrorStepOne"));
      }

    }
  };

  return (
    <div className=" text-text flex flex-col items-start">
      <Toaster />
      <h2 className="text-[28px] font font-[700] text-text mt-[75px]">
        {t("RegisterHead")}
      </h2>
      <p className="text-[#707070] font-[500] mt-[12px] text-[16px] text-right">
        {t("RegisterCaption")}{" "}
      </p>

      <form
        onSubmit={handleError}
        className="flex items-start flex-col mt-[48px]"
      >
        <label
          className="text-right text-text font-[600] text-[16px]"
          htmlFor="email"
        >
          {t("RegisterLabel")}{" "}
        </label>
        <input
          className=" mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
          type="email"
          id="email"
          value={getEmail}
          onChange={handleEmail}
          placeholder={t("RegisterPlaceholder")}
        />
        <p className="mt-[4px] font-bold text-[12px] text-[red]">
          {emailError}
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
        <HomeButton />
      </div>
    </div>
  );
};

export default GetEmail;
