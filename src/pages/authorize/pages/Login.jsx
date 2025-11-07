import React, { useState } from "react";
import Stepper from "../../Stepper";
import GetPhoneNumberLogin from "../steps/GetPhoneNumberLogin";
import TwoStepLogin  from "../steps/TwoStepLoginWrapper";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();
  const goHome = () => {
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
          onClick={goHome}
          className=" cursor-pointer flex items-center justify-center border-[1px] border-[#DCDCDC] rounded-[34px] w-[141px] h-[40px] md:hidden"
        >
          <p className="text-[#3772FF]">{t("GoHomePage")}</p>
          <img
            src="../../../../src/assets/icons/home-04.png"
            className="mr-0.5"
          />
        </div>
      </div>
      <div className="flex  justify-start">
        <Stepper text={t("LoginStep1")} active={step === 1} />
        {/* <Stepper text={"تایید کد ارسال شده دو مرحله‌ای"} active={step === 2} /> */}
      </div>
      {step === 1 && <GetPhoneNumberLogin onNext={() => setStep(goHome())}  />}
      {step === 2 && <TwoStepLogin  onPrevious={() => setStep(1)} />}
    </div>
  );
};

export default Login;
