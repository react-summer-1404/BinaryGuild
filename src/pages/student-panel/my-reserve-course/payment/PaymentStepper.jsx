import React from "react";

const PaymentStepper = ({ text, active }) => {
  return (
    <div className="flex flex-wrap m-auto justify-center items-start h-10 w-[170px]">
      <div
        className={`w-14 h-14  rounded-2xl ${
          active ? "bg-[#3772FF]" : " bg-gray-450"
        }`}
      >
        <p className="text-center mt-3.5">{text}</p>
      </div>
    </div>
  );
};

export default PaymentStepper;
