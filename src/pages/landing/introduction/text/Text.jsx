import React from "react";

const TextWrapper = () => {
  return (
    <div className="flex flex-wrap max-w-[254px] m-auto cursor-pointer gap-1.5">
      <div className="gap-1.5 text-[40px] text-center pr-[38px]">
        <h2 className=" font-persian">آموزش مدرن</h2>
        <h2 className=" font-persian">پیشرفت سریع</h2>
      </div>
      <p className="text-gray-400 text-[18px] font-persian">
        آکادمی آموزش تخصصی برنامه نویسی بحر از کودکان تا بزرگسال
      </p>
    </div>
  );
};

export default TextWrapper;
