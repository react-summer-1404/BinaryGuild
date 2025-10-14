import React, { useState } from "react";
import { Link } from "react-router-dom";
import Stepper from "../../Stepper";
import GetPhoneNumber from "../steps/GetPhoneNumber";
import GetCode from "../steps/GetCode";
import GetUserInfo from "../steps/GetUserInfo";

const Register = () => {

  const [step, setStep] = useState(1);
  console.log("step", step)

  return (
    <div className="p-5 flex flex-col text-right w-[648px] mr-[30px] ">
      <div className="flex justify-start">
        <Stepper text={"واردکردن شماره همراه"} active={step === 1}/>
        <Stepper text={"تایید کد ارسال شده"} active={step === 2}/>
        <Stepper text={"واردکردن اطلاعات شخصی"} active={step === 3}/>
      </div>
      {step === 1 && <GetPhoneNumber onNext = {()=>setStep(2)}/> }
      {step === 2 && <GetCode onNext = {()=>setStep(3)} onPrevious={()=>setStep(1)}/> }
      {step === 3 && <GetUserInfo onPrevious={()=>setStep(2)}  /> }

      
    </div>
  );
};

export default Register;
