import React from "react";
import { useState } from "react";
import Stepper from "../../Stepper";
import GoToGmail from "../steps/GoToGmail";
import SetNewPassword from "../steps/SetNewPassword";
import { useNavigate } from "react-router-dom";
const ForgetPasswordWrapper = () => {
  
  const [step, setStep] = useState(1);
  console.log("step", step);

    const navigate = useNavigate();
  const GoHome = () => {
    navigate("/");
  };
  
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
          <p className="text-[#3772FF]">{"صفحه اصلی"}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row items-start ">
        <Stepper text={"واردکردن ایمیل"} active={step === 1} />
        <Stepper text={"تایید کد ارسال شده"} active={step === 2} />
      </div>
      {step === 1 && <GoToGmail onNext={() => setStep(2)} />}
      {step === 2 && <SetNewPassword onPrevious={() => setStep(1)} />}
    </div>
  );
};

export default ForgetPasswordWrapper;
