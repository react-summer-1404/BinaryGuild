import React from "react";

const Stepper = () => {
  return (
    <div className="flex justify-between text-black h-10 w-full">
      <div>
        <div className="rounded-[9px] h-[8px] bg-[#3772FF] w-[157px]"></div>
        <p className="text-[#2F2F2F] text-[16px] font-[600] ">واردکردن شماره همراه</p>
      </div>

      <div>
        <div className="rounded-[9px] h-[8px] bg-[#DCDCDC] w-[157px]"></div>
        <p className="text-[#707070] text-[16px] font-[00] ">تایید کد ارسال شده</p>
      </div>

      <div>
        <div className="rounded-[9px] h-[8px] bg-[#DCDCDC] w-[157px]"></div>
        <p className="text-[#707070] text-[16px] font-[500]">واردکردن اطلاعات شخصی</p>
      </div>

    </div>
  );
};

export default Stepper;
