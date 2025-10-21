import React, { useState } from "react";
import Stepper from "../../Stepper";
import GetPhoneNumberLogin from "../steps/GetPhoneNumberLogin";
import TwoStepLoginWrapper from "../steps/TwoStepLoginWrapper";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [step, setStep] = useState(1);
  console.log("step", step);
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="p-5 flex flex-col text-right w-[648px] mr-[30px] ">
      <div className="flex w-[450px] justify-start">
        <Stepper text={"واردکردن شماره همراه"} active={step === 1} />
        {/* <Stepper text={"تایید کد ارسال شده دو مرحله‌ای"} active={step === 2} /> */}
      </div>
      {step === 1 && <GetPhoneNumberLogin onNext={() => setStep(goHome())} />}
      {step === 2 && <TwoStepLoginWrapper onPrevious={() => setStep(1)} />}
    </div>
  );
};

export default Login;
