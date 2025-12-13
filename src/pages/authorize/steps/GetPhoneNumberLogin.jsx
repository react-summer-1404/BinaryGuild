import React from "react";
import AuthButton from "../../../components/common/button/AuthButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Login } from "../../../core/services/api/post-data";
import { useTranslation } from "react-i18next";
import HomeButton from "../../../components/common/button/HomeButton";
import { Checkbox } from "@heroui/checkbox";
import toast, { Toaster } from "react-hot-toast";

const GetPhoneNumberLogin = ({ onNext }) => {
  const [getUserInfo, setGetUserInfo] = useState("");
  const [userError, setUserError] = useState("");
  const [getPassword, setGetPassword] = useState("");
  const [passError, setPassError] = useState();
  const [remember, setRemember] = useState(false);

  const { t } = useTranslation();

  const handleUserInfo = (e) => {
    const value = e.target.value;
    setGetUserInfo(value);
  };
  const handlePass = (e) => {
    const value = e.target.value;
    setGetPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (getUserInfo.trim() === "") {
      setUserError(t("EmailOrPhoneError"));
    } else {
      setUserError(null);
    }

    if (getPassword.trim() === "") {
      setPassError(t("PasswordError"));
    } else {
      setPassError(null);
    }

    if (getUserInfo.trim() !== "" && getPassword.trim() !== "") {
      console.log("فرم درسته");
    }
    try {
      const response = await Login({
        phoneOrGmail: getUserInfo,
        password: getPassword,
        rememberMe: remember,
      });
      console.log(response, "response");
      if (response.success && response.token) {
        const token = response.token;
        console.log(response);
        localStorage.setItem("token", token);
       

        // if (remember) {
        //   console.log(token, "token saved in localstorage");
        //   // localStorage.getItem("token");
        // }

        setTimeout(() => {
          toast.success(t("LoginNotify"));
          console.log(toast);
          setTimeout(() => {
            onNext();
          }, 1500);
        }, 100);
      }
    } catch (error) {
      console.log("error", error);
      if (error.response.status === 401) {
        toast.error(t("LoginNotifyErrorforPassword"));
      }
      if (error.response.status === 400) {
        toast.error(t("LoginNotifyError"));
      }
    }
  };

  return (
    <div className="text-text flex flex-col items-start">
      <Toaster />

      <h2 className="text-[28px] font font-[700] text-text mt-[75px]">
        {t("LoginHead")}{" "}
      </h2>
      <p className="text-[#707070] font-[500] mt-[12px] text-[16px] text-right">
        {t("LoginCaption")}
      </p>

      <div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex items-start flex-col mt-[48px]"
        >
          <label
            className="text-text font-[600] text-[16px]"
            htmlFor="email/number"
          >
            {t("LoginEmailOrPhoneLabel")}{" "}
          </label>
          <input
            className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
            type="text"
            id="email/number"
            value={getUserInfo}
            onChange={handleUserInfo}
            placeholder={t("LoginPlaceholder")}
          />
          <p className="mt-[4px] font-bold text-[12px] text-[red]">
            {userError}
          </p>
          <label
            className="text-text font-[600] text-[16px]"
            htmlFor="password"
          >
            {t("LoginPassLabel")}{" "}
          </label>
          <input
            className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
            type="password"
            id="password"
            value={getPassword}
            onChange={handlePass}
            placeholder={t("LoginPassCaption")}
          />
          <p className="mt-[4px] font-bold text-[12px] text-[red]">
            {passError}
          </p>

          <div className="flex justify-between mt-[30px] w-[398px]">
            <div className="flex justify-start items-center">
              <Checkbox
                isSelected={remember}
                onChange={() => setRemember((prev) => !prev)}
              >
                <span className="text-muted font-[600] text-[16px] ">
                  {t("LoginRemember")}{" "}
                </span>
              </Checkbox>
            </div>
            <Link
              className="flex items-center justify-center cursor-pointer bg-forgetpassbtn rounded-[40px] w-[175px] h-[36px] "
              to={"/forgetPassword"}
            >
              <p className="text-[#3772FF] font-[600]flex text-[14px]">
                {t("ForgetPass")}{" "}
              </p>
            </Link>
          </div>

          <AuthButton text={t("GoToAccount")} type="submit" />
        </form>
      </div>

      <div className=" w-[397px] flex flex-col items-center justify-center ">
        <div className="flex mt-[16px]">
          <p className="text-muted font-[600] text-[16px]">
            {t("NotHaveingAccount")}{" "}
          </p>
          <Link className="pr-[8px]" to={"/register"}>
            <p className="text-[#3772FF] font-[600] text-[16px]">
              {t("MakeAccount")}{" "}
            </p>
          </Link>
        </div>
        <HomeButton />
      </div>
    </div>
  );
};

export default GetPhoneNumberLogin;
