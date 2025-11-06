import React, { useState } from "react";
import { Link } from "react-router-dom";
import Stepper from "../steps/Stepper";
import GetEmail from "../steps/GetEmail";
import GetCode from "../steps/GetCode";
import GetUserInfo from "../steps/GetUserInfo";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Register = () => {
  const [getEmail, setGetEmail] = useState("");
  const [step, setStep] = useState(1);
  console.log("step", step);
  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/");
  };
  const { t } = useTranslation();

  return (
    <div className="text-text block items-center md:w-[648px] md:p-5 md:text-right md:mr-[30px] ">
      <div className="flex justify-between mb-10 min-[1024px]:hidden">
        <div className="flex justify-center">
          <img
            src="/src/assets/images/Untitled-1 4.svg"
            className="w-10 h-auto min-[1024px]:hidden"
          />
        </div>
        <div
          onClick={GoHome}
          className=" cursor-pointer flex items-center justify-center border-[1px] border-[#DCDCDC] rounded-[34px] w-[141px] h-[40px] min-[1024px]:hidden"
        >
          <p className="text-[#3772FF]">{t("GoHomePage")}</p>
          <img
            src="../../../../src/assets/icons/home-04.png"
            className="mr-0.5"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row items-start ">
        <Stepper text={t("RegisterStep1")} active={step === 1} />
        <Stepper text={t("RegisterStep2")} active={step === 2} />
        <Stepper text={t("RegisterStep3")} active={step === 3} />
      </div>
      {step === 1 && (
        <GetEmail
          onNext={() => setStep(2)}
          setGetEmail={setGetEmail}
        />
      )}
      {step === 2 && (
        <GetCode
          onNext={() => setStep(3)}
          onPrevious={() => setStep(1)}
          getEmail={getEmail}
        />
      )}
      {step === 3 && (
        <GetUserInfo onPrevious={() => setStep(2)} />
      )}
    </div>
  );
};

export default Register;
