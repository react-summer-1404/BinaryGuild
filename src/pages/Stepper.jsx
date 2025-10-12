import React from "react";

const Stepper = ({text,active}) => {
  return (
      <div className="ml-[9px] h-10 w-[157px] border-1">
        <div className={`rounded-[9px] h-[8px]  w-[157px] ${active ? "bg-[#3772FF]" : "bg-[#DCDCDC]"}`}></div>
        <p className={`mt-[9px] w-[170px] text-[16px] font-[600] ${active ? "text-[#2F2F2F]" : "text-[#707070]"} `}>{text}</p>
      </div>

  );
};

export default Stepper;
