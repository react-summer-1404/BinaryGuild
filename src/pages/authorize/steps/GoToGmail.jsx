import AuthButton from "../../../components/common/button/AuthButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ForgetPass } from "../../../core/services/api/post-data";
import { useTranslation } from "react-i18next";

const GoToGmail = ({ onNext, setGetEmail }) => {
  const [errorCode, setErrorCode] = useState("");
  const [getUserInfo, setGetUserInfo] = useState("");
  const { t } = useTranslation();

  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/");
  };

  const handleCode = (e) => {
    const value = e.target.value;
    setGetUserInfo(value);
  };

  const handleError = async (e) => {
    e.preventDefault();
    if (getUserInfo.trim() === ""|| !getUserInfo.includes("@") ||!getUserInfo.includes(".com")  ) {
      setErrorCode(t("EmailError"));
      return;
    } else {
      setErrorCode("");
    }

    try {
      const response = await ForgetPass({
        email: getUserInfo,
        baseUrl: "http://localhost:5173/resetpassword",
      });

      setGetEmail(getUserInfo);
      console.log("response", response);
      onNext();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex flex-col items-start">
      <h2 className="text-[28px] font font-[700] text-text mt-[75px]">
        {t("ForgetPassHead")}
      </h2>
      <p className="text-[#707070] text-start font-[500] mt-[12px] text-[16px]">
        {t("ForgetPassCaption")}
      </p>

      <div>
        <form
          onSubmit={handleError}
          action=""
          className="flex items-start flex-col mt-[48px]"
        >
          <label className="text-text font-[600] text-[16px]" htmlFor="email">
            {t("ForgetPassLabelEmail")}
          </label>
          <input
            className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
            type="email"
            id="email"
            value={getUserInfo}
            onChange={handleCode}
            placeholder={t("ChangePasswordPlaceholder")}
          />
          <p className="mt-[4px] font-bold text-[12px] text-[red]">
            {errorCode}
          </p>

          <AuthButton text={t("SendLinkButton")} type="submit" />
        </form>
      </div>
      <div className=" w-[397px]  flex flex-col items-center justify-center ">
        <Link
          to={"/login"}
          className="cursor-pointer mt-[32px] flex items-center justify-center border-[1px] border-[#DCDCDC] rounded-[34px] w-[141px] h-[40px]"
        >
          <p className="text-[#3772FF]">{t("GoBackButton")}</p>
          <img src="../../../../src/assets/icons/arrow-left-01.png" />
        </Link>
      </div>
    </div>
  );
};

export default GoToGmail;
