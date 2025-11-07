import React from "react";

const Stepper = ({text,active}) => {
  return (
      <div className="flex flex-col justify-center items-start h-10 w-[170px]">
        <div className={`w-[235%] flex rounded-[9px] h-2 max-[640px]:w-[227%] max-[769px]:w-[108%]  md:w-[180px] ${active ? "bg-[#3772FF]" : "bg-[#DCDCDC]"}`}></div>
        <p className={` text-center whitespace-nowrap mt-[5px] w-[235%] max-[640px]:w-[227%] max-[769px]:w-[108%]  md:w-[180px]  text-[16px] font-[600] ${active ? "text-text" : "text-[#707070]"} `}>{text}</p>
      </div>

  );
};

export default Stepper;
