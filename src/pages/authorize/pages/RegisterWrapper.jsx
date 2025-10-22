import React, { useState } from "react";
import { Link } from "react-router-dom";
import Stepper from "../../Stepper";
import GetPhoneNumber from "../steps/GetPhoneNumber";
import GetCode from "../steps/GetCode";
import GetUserInfo from "../steps/GetUserInfo";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  console.log("step", step);
  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/");
  };
  const { t } = useTranslation();

  return (
    <div className=" block items-center md:w-[648px] md:p-5 md:text-right md:mr-[30px] ">
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
        </div>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row items-start ">
        <Stepper text={t("RegisterStep1")} active={step === 1} />
        <Stepper text={t("RegisterStep2")} active={step === 2} />
        <Stepper text={t("RegisterStep3")} active={step === 3} />
      </div>
      {step === 1 && (
        <GetPhoneNumber
          onNext={() => setStep(2)}
          setPhoneNumber={setPhoneNumber}
        />
      )}
      {step === 2 && (
        <GetCode
          onNext={() => setStep(3)}
          onPrevious={() => setStep(1)}
          phoneNumber={phoneNumber}
        />
      )}
      {step === 3 && (
        <GetUserInfo onPrevious={() => setStep(2)} phoneNumber={phoneNumber} />
      )}
    </div>
  );
};

export default Register;
