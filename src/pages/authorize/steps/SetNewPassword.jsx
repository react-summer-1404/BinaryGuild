import React from "react";
import AuthButton from "../../../components/common/button/AuthButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResetPassword } from "../../../core/services/api/post-data";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const SetNewPassword = ({ onPrevious, getEmail }) => {
  const [getPassword, setGetPassword] = useState("");
  const [passError, setPassError] = useState();
  const { t } = useTranslation();

  const { resetValue } = useParams();
  console.log(resetValue, "resetValue");

  const navigate = useNavigate();
  const GoLogin = () => {
    console.log("navigate")
    navigate("/login");
  };

  const handlePass = (e) => {
    const value = e.target.value;
    setGetPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (getPassword.trim() === "") {
      setPassError(t("PasswordError"));
    } else {
      setPassError(null);
    }

    if (getPassword.trim() !== "") {
      console.log("فرم درسته");

      try {
        const response = await ResetPassword({
          gmail: getEmail,
          newPassword: getPassword,
          resetValue: resetValue,
        });
        GoLogin();
        console.log("response", response);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-[28px] font font-[700] text-text mt-[75px]">
        {t("NewPasswordHead")}
      </h2>
      <p className="text-[#707070] font-[500] mt-[12px] text-[16px]">
        {t("NewPasswordCaption")}
      </p>

      <div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex items-start flex-col mt-[48px]"
        >
          <label className="text-text font-[600] text-[16px]" htmlFor="newPass">
            {t("NewPasswordLabel")}
          </label>
          <input
            className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
            type="password"
            id="newPass"
            value={getPassword}
            onChange={handlePass}
            placeholder={t("NewPasswordLabelPlaceholder")}
          />
          <p className="mt-[4px] font-bold text-[12px] text-[red]">
            {passError}
          </p>
          <label
            className="text-text mt-4 font-[600] text-[16px]"
            htmlFor="newpass"
          >
            {t("NewPasswordRepeatLabel")}
          </label>
          <input
            className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
            type="password"
            id="newpass"
            value={getPassword}
            onChange={handlePass}
            placeholder={t("NewPasswordRepeatLabelPlaceholder")}
          />
          <p className="mt-[4px] font-bold text-[12px] text-[red]">
            {passError}
          </p>
          <AuthButton text={t("ConfirmPassButton")} type="submit" />
        </form>
      </div>

      <div className=" w-[397px] flex  items-center justify-center ">
        <div
          onClick={()=>{
            console.log("previous")
            onPrevious;
          }}
          className="cursor-pointer mt-[32px] flex items-center justify-center border-[1px] border-[#DCDCDC] rounded-[34px] w-[141px] h-[40px]"
        >
          <p className="text-[#3772FF]">{t("GoBackButton")}</p>
          <img
            src="../../../../src/assets/icons/arrow-left-01.png"
            className="mr-0.5"
          />
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
