import React from "react";
import { useState } from "react";
import Stepper from "../../Stepper";
import GoToGmail from "../steps/GoToGmail";
import FirstStepPassword from "../steps/FirstStepPassword";
const ForgetPasswordWrapper = () => {
  
  const [step, setStep] = useState(1);
  console.log("step", step);
  return (
    <div className="p-5 flex flex-col text-right w-[648px] mr-[30px] ">
      <div className="flex justify-start">
        <Stepper text={"واردکردن ایمیل"} active={step === 1} />
        <Stepper text={"تایید کد ارسال شده"} active={step === 2} />
      </div>
      {step === 1 && <GoToGmail onNext={() => setStep(2)} />}
      {step === 2 && <FirstStepPassword onPrevious={() => setStep(1)} />}
    </div>
  );
};

export default ForgetPasswordWrapper;
