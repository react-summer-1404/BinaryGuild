import React from "react";

const Stepper = ({text,active}) => {
  return (
      <div className="ml-[19px] h-10 w-[170px]">
        <div className={`w-[235%] flex rounded-[9px] h-[8px]  md:w-[180px] ${active ? "bg-[#3772FF]" : "bg-[#DCDCDC]"}`}></div>
        <p className={` mt-[5px] w-[235%] text-[16px] font-[600] ${active ? "text-[#2F2F2F]" : "text-[#707070]"} `}>{text}</p>
      </div>

  );
};

export default Stepper;
