import React from "react";
import { useState } from "react";
import Stepper from "../../Stepper";
import GoToGmail from "../steps/GoToGmail";
import SetNewPassword from "../steps/SetNewPassword";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ResetLink from "../steps/ResetLink";
const ForgetPassword = () => {
  // const [gmailKey, setGmailKey] = useState("");
  const [getEmail, setGetEmail] = useState("");
  const [step, setStep] = useState(1);
  console.log("step", step);

  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/");
  };
  const { t } = useTranslation();

  return (
    <div className="block items-center md:w-[648px] md:p-5 md:text-right md:mr-[30px] ">
      <div className="flex justify-between mb-10 md:hidden">
        <div className="flex justify-center">
          <img
            src="/src/assets/images/Untitled-1 4.svg"
            className="w-10 h-auto md:hidden"
          />
        </div>
        <div
          onClick={GoHome}
          className=" cursor-pointer flex items-center justify-center border-[1px] border-[#DCDCDC] rounded-[34px] w-[141px] h-[40px] md:hidden"
        >
          <p className="text-[#3772FF]">{t("GoHomePage")}</p>
          <img
            src="../../../../src/assets/icons/home-04.png"
            className="mr-0.5"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row items-start ">
        <Stepper text={t("ChangePasswordStep1")} active={step === 1} />
        <Stepper text={t("ConfirmCode")} active={step === 2} />
      </div>
      {step === 1 && (
        <GoToGmail onNext={() => setStep(2)} setGetEmail={setGetEmail} />
      )}
      {step === 2 && (
        <SetNewPassword onPrevious={() => setStep(1)}  getEmail={getEmail} />
      )}
    </div>
  );
};

export default ForgetPassword;
